import { Request, getLogger, sleep } from '@lzwme/fe-utils';
import { execSync } from 'node:child_process';
import { IncomingHttpHeaders } from 'node:http2';

export const logger = getLogger();
export const ghReq = new Request();
export const req = Request.getInstance();

export async function getRepoForks(repo: string, total = 0, params: { per_page?: number; page?: number; sort?: string } = {}) {
  params = { per_page: 10, page: 1, sort: 'newest', ...params };
  logger.debug(`[getRepoForks][${repo}]`, params);

  const url = `https://api.github.com/repos/${repo}/forks`;
  const r = await ghReq.get<{ full_name: string; homepage: string }[]>(url, params);
  let list = Array.isArray(r.data) ? r.data : [];

  if (!Array.isArray(r.data)) {
    logger.error(`[${repo}][fork]获取列表失败！`, r.data);
    return list;
  }

  if (total) {
    let page = params.page || 1;
    while (total > list.length) {
      const t = await getRepoForks(repo, 0, { ...params, page: ++page });
      if (t.length === 0) break;
      list = list.concat(t);
    }

    logger.info(`[getRepoForks][${repo}]`, total, list.length, 'ratelimit-remaining:', r.headers['x-ratelimit-remaining'] || r.headers);
  }

  return list;
}

export async function getUrlsFromLatestCommitComment(repo: string) {
  // @see https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28
  const url = `https://api.github.com/repos/${repo}/commits`;
  const r = await ghReq.get<{ comments_url: string; commit: { comment_count: number } }[]>(url, { per_page: 5 });
  const result = {
    list: [] as string[],
    message: '',
    repo,
    ratelimit: Number(r.headers['x-ratelimit-limit'] || 0),
    remaining: Number(r.headers['x-ratelimit-remaining'] || 1),
    rateLimitReset: Number(r.headers['x-ratelimit-reset']) || 0,
    now: Date.now(),
  };
  if (String(result.rateLimitReset).length === 10) result.rateLimitReset *= 1000;

  if (!Array.isArray(r.data)) {
    Object.assign(result, r.data);
    logger.warn(`[${repo}]获取 commits 失败`, result.message, result.remaining, result.rateLimitReset, result.now);
    if (result.message.startsWith('API rate limit')) throw Error(result.message); // 抛出异常终止执行
    const t = result.rateLimitReset - result.now;
    if (t > 0 && t < 120000) await sleep(t);
    return result;
  }

  r.data = r.data.filter(d => d.commit?.comment_count);
  if (!r.data.length) return result;

  const { data: comment } = await ghReq.get<{ body: string }[]>(r.data[0].comments_url);

  if (!Array.isArray(comment) || !comment.length) {
    logger.warn(`[${repo}]`, Array.isArray(comment) ? `获取 comments 为空` : `获取 comments 失败`, r.data[0].comments_url);
    return result;
  }

  const body = comment[0].body;
  const urlList = String(body).match(/\[.+\]\(.+\)/gm);
  if (!urlList) return result;

  let shortUrl = '';
  urlList
    .map(d => d.split('(')[1].slice(0, -1))
    .forEach(url => {
      if (url.startsWith('http')) {
        if (url.endsWith('/')) url = url.slice(0, -1);
        if (url.endsWith('vercel.app') || url.endsWith('netlify.app')) {
          if (!shortUrl || shortUrl.length > url.length) shortUrl = url;
        } else {
          result.list.push(url);
        }
      }
    });
  if (shortUrl) result.list.push(shortUrl);

  return result;
}

export function fixSiteUrl(url: string) {
  if (!url) return '';
  if (url.endsWith('/')) url = url.slice(0, -1);
  if (!url.startsWith('http')) url = `https://${url}`;
  return url;
}

export async function gitCommit() {
  const changes = execSync('git status --short', { encoding: 'utf8' }).trim(); // --untracked-files=no
  if (changes.length > 5) {
    logger.info('[gitCommit]Changes:\n', changes);
    const cmds = [
      `git config user.name "github-actions[bot]"`,
      `git config user.email "41898282+github-actions[bot]@users.noreply.github.com"`,
      `git add --all`,
      `git commit -m "Updated at ${new Date().toISOString()}"`,
      `git push`,
    ];

    for (const cmd of cmds) execSync(cmd, { encoding: 'utf8', maxBuffer: 1024 * 1024 * 100 });
  } else {
    logger.info('[gitCommit]Not Updated');
  }
}

/** url 有效性检测 */
export async function httpLinkChecker(url: string, options: { headers?: IncomingHttpHeaders; verify?: (body: string) => boolean } = {}) {
  const request = new Request('', options.headers);

  let r: Awaited<ReturnType<Request['get']>> & { data: string };
  if (options.verify) {
    r = await request.get<string>(url, {}, { 'content-type': 'text/html' });
  } else {
    const { res } = await request.req('HEAD', url, {}, { 'content-type': 'text/html' });
    r = { response: res, headers: res.headers, data: '', buffer: Buffer.from('') };
    res.destroy();
  }

  const result = {
    code: 0,
    errmsg: r.response.errored?.message || r.response.statusMessage || '',
    statusCode: r.response.statusCode ?? 0,
    url: (r.response.headers['location'] || url).replace(/\/$/, ''),
    redirected: false,
  };

  if (String(result.statusCode).startsWith('30') && url !== result.url) {
    result.redirected = true;
  } else if (result.statusCode < 200 || result.statusCode > 299) {
    result.code = result.statusCode;
    if (!result.errmsg) result.errmsg = `HTTP_${result.statusCode}`;
  } else if (r.data && options.verify && !options.verify(r.data)) {
    result.code = -1;
    result.errmsg = r.data;
  }

  return result;
}
