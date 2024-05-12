/*
 * @Author: renxia
 * @Date: 2023-04-06 13:25:28
 * @LastEditors: renxia
 * @LastEditTime: 2024-05-11 15:33:56
 * @Description:
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import parser from 'yargs-parser';
import { gitCommit, logger } from './utils';
import { siteUrlVerify } from './siteUrlVerify';
import { config, initConfig, saveConfig } from './config';

function formatSiteList() {
  const list = Object.entries(config.siteInfo)
    .filter(([_url, info]) => {
      Object.entries(info).forEach(([key, value]) => {
        if (value === 0 || value === false) delete info[key];
      });
      return !info.hide;
    })
    .sort((a, b) => {
      for (const key of ['invalid', 'needVerify', 'needVPN', 'needPwd', 'needPay', 'needKey'] as const) {
        if ('needVerify' == key) {
          if (a[1].needVerify! > 2 || b[1].needVerify! > 2) return a[1].needVerify! > 2 ? 1 : -1;
        } else if (a[1][key] !== b[1][key]) return a[1][key] ? 1 : -1;
      }

      if (a[1].star !== b[1].star) return (b[1].star || 1) - (a[1].star || 1);

      return a[0] > b[0] ? 1 : -1;
    });

  const fortCateList = (cateList = list) =>
    cateList.map(([url, info]) => {
      let prefix = '';

      if (info.invalid) prefix = '❌' + (typeof info.invalid === 'string' ? info.invalid : '');
      else if (info.needVerify! > 2) prefix += '❓';

      if (info.star && info.star > 0) prefix += '⭐'.repeat(Math.min(3, info.star));
      else if (info.star == 0) prefix += '⛔';

      if (info.needPwd) prefix += '🔐'; // 🔐
      if (info.needPay) prefix += '💰';
      if (info.needKey) prefix += '🔑';
      if (info.needVPN) prefix += '🚀';
      if (info.needLogin) prefix += '🧑‍💻';
      return `1. [[${prefix || '⭐'}] ${url}](${url}) ${info.title ? `**${info.title}。** ` : ''}${info.desc || ''} ${
        info.errmsg ? `\`${info.errmsg}\`` : ''
      }`.trim();
    });

  const mdContent = Object.entries(config.categoryInfo)
    .sort((a, b) => b[1].sort! - a[1].sort!)
    .map(([cate]) => {
      const cateList = list.filter(d => d[1].type?.includes(cate));
      if (cateList.length === 0) return '';
      return [`\n### ${cate} (${cateList.length})\n`, fortCateList(cateList).join('\n')].join('\n');
    }).join('\n');

    return { list, mdContent };
}

async function updateReadme() {
  const rdFile = resolve(config.rootDir, 'README.md');
  const { list, mdContent } = formatSiteList();
  const content = readFileSync(rdFile, 'utf8');
  const updated = content.replace(/站点列表\([\s\S]+\n\n## /g, `站点列表(${list.length})：\n${mdContent}\n\n## `);
  if (updated !== content) writeFileSync(rdFile, updated, 'utf8');
  else logger.debug('[UPDATE-READE] No Chagned');
  return list.length;
}

export async function start() {
  const argv = parser(process.argv.slice(2));
  logger.debug('argv', argv);
  initConfig(argv);

  if (!argv.onlyUpdate) {
    // if (argv.bot) await repoBot(config.debug ? 10 : 2000);
    if (argv.urlCheck !== false) await siteUrlVerify();
  }

  const total = await updateReadme();

  if (!argv.onlyUpdate) {
    saveConfig();
    if (config.ci || argv.ci || argv.commit) gitCommit();
  }

  return total;
}

start().then(total => {
  logger.info(`done! Total: ${total} / ${Object.keys(config.siteInfo).length}`);
  process.nextTick(() => process.exit());
});
