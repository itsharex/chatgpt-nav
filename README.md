# ChatGPT/AI 网站导航收集列表


本仓库旨在搜集整理当前流行可用的 AI 在线应用列表，以供关注AI应用与发展的同学参考使用。

**欢迎自荐，您的应用会获得更多的曝光机会。**

站点配置信息在 `site-info.json` 文件中设置，基本格式参考（为 `0` 的项不用填写）：

```ts
{
  "https://gpt.demo.com": {
      "type": "",           // 站点所属分类
      "source": "recommend",    // 站点来源
      "star": 3,                // 推荐星级，0-3。0 用于标记可访问但不可用、使用受限
      "needLogin": 1,           // 需要注册或绑定账号登录才可使用
      "desc": "描述",
      "title": "标题",
      "needKey": 1,             // 是否需要自己输入 API KEY
      "needPwd": 1,             // 是否需要密码、账号登录才能访问
      "needPay": 1,             // 付费应用
      "needVerify": 1,          // 需人工验证确认状态。-1 表示可用且无需程序验证
      "needVPN": 1,             // 需科学上网
      "hide": 1,                // 不显示在列表中，失效并将移除
      "repo": 'lzwme/gpt-demo', // 来源仓库
      "invalid": '20230310'    // 已失效，标注发现时间
  },
}
```

## 声明

以下站点列表来源于网络收集，若有侵权请提 [Issues](https://github.com/lzwme/chatgpt-nav/issues) 处理。

## 站点列表

```
⭐ 推荐星级。默认一星。免费、无需代理、无需 KEY 等，可增加星级
⛔ 0星标记。表示可访问，但功能暂不可用、需私有密钥、使用受限等
🔑 需输入API KEY。可使用自己的 KEY（应注意甄别、谨慎使用，避免您的 API KEY 泄露）
🚀 需代理。可代理登录、免费试用等
🔐 需要密码。需要私有密码、通过特殊渠道获取密码、认证码等
🧑‍💻 需登录。注册账号时请仔细甄别相关页面，不要使用常用密码
💰 需付费。请仔细识别，谨防受骗
❓ 需手动验证。访问异常、不确定是否失效、程序探测无法访问等
❌ 已失效。会在失效一段时间后移除
```

站点列表(782)：

### 国产大模型 (14)

1. [[⭐⭐⭐🧑‍💻] https://ai-maas.wair.ac.cn](https://ai-maas.wair.ac.cn) **紫东太初。** 中科院自动化所和武汉人工智能研究院联合推出的新一代大模型，从三模态走向全模态，支持多轮问答、文本创作、图像生成、3D理解、信号分析等全面问答任务，拥有更强的认知、理解、创作能力，带来全新互动体验。
1. [[⭐⭐⭐🧑‍💻] https://ai.360.cn](https://ai.360.cn) **360智脑。** 需申请资格
1. [[⭐⭐⭐] https://chat.sensetime.com](https://chat.sensetime.com) **SenseChat。** 商汤旗下的AI对话助手
1. [[⭐⭐⭐🧑‍💻] https://chatglm.cn](https://chatglm.cn) **智谱清言。** 清华大学孵化的智谱AI提供的千亿参数对话模型ChatGLM
1. [[⭐⭐⭐🧑‍💻] https://hunyuan.tencent.com](https://hunyuan.tencent.com) **腾讯混元助手。** 腾讯混元助手Chat
1. [[⭐⭐⭐🧑‍💻] https://image.hunyuan.tencent.com](https://image.hunyuan.tencent.com) **混元生图。** 腾讯混元生图
1. [[⭐⭐⭐🧑‍💻] https://kimi.moonshot.cn](https://kimi.moonshot.cn) **Kimi.ai。** Kimi智能助手能够支持约20万汉字的上下文输入，具备显著的中文优势，能够为用户提供回答问题、速读文件、整理资料、激发灵感、辅助创作等服务
1. [[⭐⭐⭐] https://pangu.huaweicloud.com](https://pangu.huaweicloud.com) **华为盘古。** 华为盘古大模型，重塑千行百业
1. [[⭐⭐⭐] https://tongyi.aliyun.com/qianwen](https://tongyi.aliyun.com/qianwen) **通义千问。** 阿里达摩院提供的一个不断进化的AI大模型
1. [[⭐⭐⭐] https://www.coze.cn](https://www.coze.cn) **扣子。** Coze中文版，字节旗下一款用来开发新一代 AI ChatBot的应用编辑平台
1. [[⭐⭐⭐] https://www.doubao.com/chat/](https://www.doubao.com/chat/) **豆包。** 基于字节跳动研发的云雀大语言模型的Chat应用
1. [[⭐⭐⭐🧑‍💻] https://xinghuo.xfyun.cn](https://xinghuo.xfyun.cn) **讯飞星火认知大模型。** 讯飞星火大模型
1. [[⭐⭐⭐🧑‍💻] https://yiyan.baidu.com](https://yiyan.baidu.com) **文心一言。** 百度全新知识增强大语言模型！使用百度账号登录即可
1. [[⭐] https://www.baichuan-ai.com/chat](https://www.baichuan-ai.com/chat) **百川智能。** 百川智能旗下的AI对话助手

### AI 聊天对话 (99)

1. [[⭐⭐⭐🧑‍💻] https://ai-maas.wair.ac.cn](https://ai-maas.wair.ac.cn) **紫东太初。** 中科院自动化所和武汉人工智能研究院联合推出的新一代大模型，从三模态走向全模态，支持多轮问答、文本创作、图像生成、3D理解、信号分析等全面问答任务，拥有更强的认知、理解、创作能力，带来全新互动体验。
1. [[⭐⭐⭐] https://ai-nav.lzw.me](https://ai-nav.lzw.me) **AI网址导航。** 收集了当前最新的AI人工智能相关的网站网址，定时任务每日更新，检测验证可用性
1. [[⭐⭐⭐🧑‍💻] https://ai.360.cn](https://ai.360.cn) **360智脑。** 需申请资格
1. [[⭐⭐⭐] https://chat.sensetime.com](https://chat.sensetime.com) **SenseChat。** 商汤旗下的AI对话助手
1. [[⭐⭐⭐🧑‍💻] https://chatglm.cn](https://chatglm.cn) **智谱清言。** 清华大学孵化的智谱AI提供的千亿参数对话模型ChatGLM
1. [[⭐⭐⭐🧑‍💻] https://hunyuan.tencent.com](https://hunyuan.tencent.com) **腾讯混元助手。** 腾讯混元助手Chat
1. [[⭐⭐⭐🧑‍💻] https://kimi.moonshot.cn](https://kimi.moonshot.cn) **Kimi.ai。** Kimi智能助手能够支持约20万汉字的上下文输入，具备显著的中文优势，能够为用户提供回答问题、速读文件、整理资料、激发灵感、辅助创作等服务
1. [[⭐⭐⭐] https://pangu.huaweicloud.com](https://pangu.huaweicloud.com) **华为盘古。** 华为盘古大模型，重塑千行百业
1. [[⭐⭐⭐🧑‍💻] https://so.csdn.net/chat](https://so.csdn.net/chat) **C知道。** 由CSDN和外部合作伙伴联合研发的生成式AI产品
1. [[⭐⭐⭐] https://tongyi.aliyun.com/qianwen](https://tongyi.aliyun.com/qianwen) **通义千问。** 阿里达摩院提供的一个不断进化的AI大模型
1. [[⭐⭐⭐] https://www.coze.cn](https://www.coze.cn) **扣子。** Coze中文版，字节旗下一款用来开发新一代 AI ChatBot的应用编辑平台
1. [[⭐⭐⭐] https://www.doubao.com/chat/](https://www.doubao.com/chat/) **豆包。** 基于字节跳动研发的云雀大语言模型的Chat应用
1. [[⭐⭐⭐🧑‍💻] https://www.tiangong.cn](https://www.tiangong.cn) **天工AI智能体。** 昆仑万维提供的对标 ChatGPT 的双千亿级大语言模型，也是一个对话式AI助手
1. [[⭐⭐⭐🧑‍💻] https://xinghuo.xfyun.cn](https://xinghuo.xfyun.cn) **讯飞星火认知大模型。** 讯飞星火大模型
1. [[⭐⭐⭐🧑‍💻] https://yiyan.baidu.com](https://yiyan.baidu.com) **文心一言。** 百度全新知识增强大语言模型！使用百度账号登录即可
1. [[⭐⭐🧑‍💻] https://chat.oldwei.com](https://chat.oldwei.com) **openfish。** 使用ChatGPT多账号轮询逆向官网接口，Claude逆向工程做第二备用，ChatGPT官方收费API KEY做第三备用。系统稳定可长期免费使用
1. [[⭐] http://d-id.com](http://d-id.com) **D-ID。** D-ID是一个创意AI平台，使用AI技术将照片转换为视频。它可以轻松地从文本生成视频，为培训材料、内部沟通、营销等提供AI驱动的、经济实惠的视频解决方案。D-ID还可以实现与聊天机器人进行面对面的对话，使用户获得更加沉浸式和人性化的体验。D-ID还提供API和自助工作室，供开发人员使用。
1. [[⭐] http://langdrive.ai](http://langdrive.ai) **LangDrive。** Addy AI是为零售和电商品牌打造的客户服务AI，利用您的业务数据训练定制AI，理解客户需求并自动回复客户咨询，提升10倍响应速度。
1. [[⭐] https://ai-beings.com/aiu/](https://ai-beings.com/aiu/) **AiU。** AiU是一个人工智能技术平台,旨在让用户能够创造和使用人工智能产品。它强调人与人工智能的互动,将人工智能技术与用户需求相结合。该平台提供了一系列工具和资源,让用户能够根据自己的需求定制和开发人工智能应用。AiU的核心理念是将人工智能的力量回馈给普通用户,并为用户提供无限可能。
1. [[⭐] https://ai.360.com](https://ai.360.com) **360智脑。** 360旗下的AI聊天助手
1. [[⭐] https://ai.baidu.com/unit/home](https://ai.baidu.com/unit/home) **百度智能对话平台 UNIT。** 百度 UNIT 搭载业界领先的对话理解和对话管理技术，提供灵活运营管理工具和可视化会话流程配置，助力企业智能化升级实现降本增效。
1. [[⭐] https://aichat.baidu.com](https://aichat.baidu.com) **小侃星球。** 小侃星球是由百度发布的一款基于AI开放域对话模型的虚拟人聊天应用。结合AI技术和社交元素，用户可以与虚拟人物进行对话聊天，享受陪伴，同时获得实用的生活服务，如哄睡和叫早服务。
1. [[⭐] https://airkit.ai](https://airkit.ai) **Airkit.ai。** Airkit.ai eCommerce通过GPT-4驱动的AI客服机器人为电商企业提供智能的客户服务支持。它可以覆盖订单状态更新、退货售后、订单问题处理、产品信息查询等多种场景,快速准确地回答客户问题,随时随地为客户提供服务,大幅提高客户满意度;同时,也可以减轻人工客服的工作量,提升企业运营效率。此外,它还具有主动联系客户、个性化定制等功能,可进一步提升客户体验。
1. [[⭐] https://answerly.io](https://answerly.io) **Answerly。** Answerly是一款智能聊天机器人，通过提供快速准确的回答，提升客户互动体验。它可以为您的业务提供个性化AI助手，帮助您训练AI助手以提供准确的回答，并通过内置的联系表单解答未知问题。您可以在实时对话记录中查看所有的聊天互动，以识别常见问题和改进的空间。Answerly还支持导入现有知识库、文档和PDF，并提供自定义小部件和助手的个性化设置。定价和功能详细信息请访问官方网站。
1. [[⭐] https://apps.apple.com/cn/app/%E8%AF%9D%E7%82%89/id6475000292](https://apps.apple.com/cn/app/%E8%AF%9D%E7%82%89/id6475000292) **话炉。** 话炉APP是一款由字节跳动推出的AI社交应用，用户可以与多样化的虚拟AI角色进行互动聊天，体验沉浸式的对话互动。用户可以创作个性化AI角色，共同打造故事世界，享受新颖的社交互动方式。主要功能包括与AI角色互动、故事创作与推进、角色切换、个性化角色创建、多样化风格体验和社交互动。
1. [[⭐] https://apps.apple.com/us/app/claude/id6473753684](https://apps.apple.com/us/app/claude/id6473753684) **Claude for iOS。** Claude是由Anthropic公司开发的AI助手，它利用强大的Claude 3模型家族，为用户提供即时访问各领域知识的能力。它旨在成为可靠、准确、有帮助的伙伴，帮助用户在移动中与关键任务、头脑风暴和复杂问题合作，取得显著进展。此外，Claude还可以帮助草拟电子邮件、总结会议，并协助处理用户不想做的小任务。
1. [[⭐] https://apps.apple.com/us/app/opencat/id6445999201](https://apps.apple.com/us/app/opencat/id6445999201) **OpenCat。** 在苹果手表上用ChatGPT
1. [[⭐] https://botvip.cn](https://botvip.cn) **AI对话鸭。** AI对话鸭是一个领先的AI聊天对话平台，它集成了多款国产大模型，提供了丰富的对话场景和功能，满足不同用户的需求。该平台以其高效的对话生成能力和多样的应用场景，在提高工作效率和娱乐互动方面具有显著优势。
1. [[⭐] https://candy.ai](https://candy.ai) **Candy.ai。** Candy.ai是一个与虚拟伙伴进行沟通和互动的平台。通过与AI角色进行个性化对话，您可以深入参与复杂的对话，并激发您的想象力。立即体验适应性AI驱动的角色扮演。
1. [[⭐] https://character.sensetime.com/character-wb/home](https://character.sensetime.com/character-wb/home) **商汤商量拟人大模型。** 商汤商量拟人大模型 “SenseChat-Character” 支持个性化角色创建与定制、知识库构建、长对话记忆、多人群聊等功能，可实现行业领先的角色对话、人设、及剧情推动能力。
1. [[⭐] https://chat.baichuan-ai.com/home](https://chat.baichuan-ai.com/home) **百川大模型。** 百川大模型是一款融合了意图理解、信息检索以及强化学习技术的中英双语大模型。它结合有监督微调与人类意图对齐，在知识问答、文本创作领域表现突出。Baichuan-7B、Baichuan-13B两款开源可免费商用的中文大模型，且在多个权威评测榜单均名列前茅，下载量突破百万。产品定位为提供高质量的语言AI服务，帮助用户轻松、普惠地获取世界知识和专业服务。
1. [[⭐] https://chat.colossalai.org](https://chat.colossalai.org) **ColossalChat。** 免费开源的AI聊天机器人
1. [[⭐] https://chat.xverse.cn/home/](https://chat.xverse.cn/home/) **元象大模型 XChat。** 元象大模型 XChat 是一款国内领先的通用大模型产品。它自研高性能，从零训练，可以大幅降低开发门槛与推理成本，满足不同复杂度的多任务需求。该产品融合了意图理解、信息检索以及强化学习技术，结合有监督微调与人类意图对齐，在知识问答、文本创作领域表现突出。欲了解更多详情，请访问官网：[元象大模型 XChat](https://www.xverse.ai/)
1. [[⭐] https://chatboxai.app/zh](https://chatboxai.app/zh) **Chatbox。** Chatbox是一个易于使用的人工智能解决方案，支持多平台，帮助提升工作和学习效率。它具备本地数据存储，确保隐私和轻松访问，同时支持多种尖端人工智能模型，提供多样化、适应性和智能化的用户互动。Chatbox还具备强大的提示功能，释放创造力，支持Markdown、引用、令牌估计等功能，为思维提供广阔的发展空间。
1. [[⭐] https://chatbros.ai](https://chatbros.ai) **Chatbros.ai。** Chatbros.ai是一款人工智能驱动的聊天机器人,它可以重新定义数字互动,提升转化率、促进销售增长、完全改变用户参与度。它提供无缝的帮助和无限的功能。
1. [[⭐] https://chatdocuments.ai](https://chatdocuments.ai) **ChatDocuments。** ChatDocuments是一款由人工智能驱动的应用，可以轻松与PDF、PPTX、XLSX和DOCX文件进行聊天互动。支持所有语言。定价：免费试用，免费使用3个文档；付费套餐详见官网。定位：提供便捷的文档交互体验。
1. [[⭐] https://chatexcel.com](https://chatexcel.com) **酷表ChatExcel。** 酷表ChatExcel是通过文字聊天实现Excel的交互控制的AI辅助工具，期望通过对表输入需求即可得到处理后的数据。
1. [[⭐] https://chatfai.com](https://chatfai.com) **ChatFAI。** 与您最喜爱的角色聊天
1. [[⭐] https://chathub.gg](https://chathub.gg) **ChatHub。** ChatHub是一个浏览器插件，可让您同时使用多个聊天机器人。它支持ChatGPT、Bing、Google Bard、Claude等10+个开源聊天机器人。ChatHub提供免费使用的大部分功能，还有付费的ChatHub Premium套餐，解锁所有高级功能。
1. [[⭐] https://dialoggpt.io/home](https://dialoggpt.io/home) **DialogGPT。** DialogGPT是一个基于GPT模型的对话式聊天机器人,能够帮助网站实时回答用户查询,提高用户参与度和转化率。它使用先进的AI技术,无需任何技术专长就可以为您的网站提供智能客服。DialogGPT可以自定义外观与行为,无缝集成到您的网站中,为用户提供流畅的交互体验。
1. [[⭐] https://finetalk.in](https://finetalk.in) **FineTalk。** FineTalk是一个利用ChatGPT训练营销对话机器人的在线平台。它可以快速创建个性化的聊天机器人,通过训练网站、文档等数据,使机器人了解您的业务、产品并能及时准确地回答客户查询。主要功能包括多语言支持、与人合作模式、自定义外观、集成Slack等。使用简单,提供免费和收费版本,可满足不同业务需求。
1. [[⭐] https://github.com/lrhh123/ChatGPT-On-CS](https://github.com/lrhh123/ChatGPT-On-CS) **ChatGPT-On-CS。** ChatGPT-On-CS 是基于大模型的智能对话客服工具，支持哔哩哔哩、抖音企业号、抖音、抖店、微博聊天、小红书专业号运营、小红书、知乎等平台接入。支持多平台，预设回复内容，智能生成回复，发送图片和二进制文件，知识库定制，插件系统等功能。定位于提供智能客服解决方案。
1. [[⭐] https://github.com/mckaywrigley/chatbot-ui](https://github.com/mckaywrigley/chatbot-ui) **Chatbot UI。** Chatbot UI是OpenAI ChatGPT UI的开源克隆版，允许用户插入API密钥以使用OpenAI的API。它仅用于与其API通信。
1. [[⭐] https://github.com/sunner/ChatALL](https://github.com/sunner/ChatALL) **ChatALL。** ChatALL是一款桌面客户端软件，它允许用户同时与多个大型语言模型（LLMs）基础的AI聊天机器人进行对话，帮助用户发现最佳的对话结果。这款软件的主要优点在于其能够并发发送提示给不同的AI机器人，从而快速比较它们在不同任务上的表现，并找到最适合的机器人。产品背景信息显示，ChatALL适合于希望从LLMs中找到最佳答案或创作的专家、研究人员以及LLM应用的开发者。目前，ChatALL是免费提供给用户的。
1. [[⭐] https://grok.x.ai](https://grok.x.ai) **xAI Grok。** xAI Grok是一个对话式AI系统,能够理解用户的问题并给出知识性的回答。它使用了大规模语言模型来建模语言,从而实现了更人性化的交互。该系统还具有持续学习的能力,会根据用户的反馈不断改进。
1. [[⭐] https://hailuoai.com](https://hailuoai.com) **海螺问问。** 海螺AI是一个基于先进的AI生成技术打造的对话式智能助理。它可以通过简单的对话,为用户提供知识问答、信息检索、公众号文章写作、小红书笔记生成等服务,帮助用户快速获取信息,提高工作效率。主要功能包括:搜索问答、创意写作、语音交互等。适用于需要知识支持的创作者、自媒体从业者、学生群体等。
1. [[⭐] https://home.tiangong.cn](https://home.tiangong.cn) **天工SkyMusic。** 天工是昆仑万维基于自研双千亿级大语言模型的人工智能产品，提供六大能力，六大领域数百种功能，包括生成创作、知识问答、规划决策、语言理解、代码能力和逻辑能力。天工具有独特的场景优势，适用于娱乐社交、游戏、广告/营销及海外业务场景等。同时天工拥有技术优势，核心技术攻坚积累，团队经验丰富。详情请访问官方网址。
1. [[⭐] https://ichuangnao.com/introduction](https://ichuangnao.com/introduction) **创脑。** 创脑是国内知名 AI 机器人社区，用户可以免费使用各类 AI 机器人助手，包括行业专家、AI 写作、办公助手等，帮助提升工作效率和生活便利。
1. [[⭐] https://jan.ai](https://jan.ai) **Jan。** Jan是一款开源、自托管的聊天GPT替代品，可以100%离线在您的计算机上运行。Jan提供可定制的AI助手、全局热键和内联AI等功能，可以提高您的生产力。Jan支持在本地主机上提供OpenAI等价API服务器，可以与兼容的应用程序一起使用。Jan的对话、偏好和模型使用等数据都保留在您的计算机上，安全、可导出，并可随时删除。
1. [[⭐] https://kastro.chat](https://kastro.chat) **Kastro。** Kastro是一个基于ChatGPT的AI聊天机器人，可用于客户支持。它提供即时响应，降低支持成本，增强客户体验。您可以在几分钟内创建和训练一个ChatGPT-powered AI聊天机器人，它可以快速学习和改进以提供更好的响应。Kastro提供24/7即时支持，通过优化和改进客户支持流程，降低支持运营成本。
1. [[⭐] https://maopaoya.com](https://maopaoya.com) **冒泡鸭AI。** 冒泡鸭AI是基于自研多模态大模型开发的AI互动平台，提供拟人、工具、内容、游戏、娱乐等多个领域的海量智能体。平台具有超长的上下文记忆能力和实时联网搜索能力，能够深度理解用户意图，并提供即时、准确、个性化的回复和选择。用户还可以定制个性化的AI智能体，以满足个性化的需求和偏好。
1. [[⭐] https://nextchat.dev](https://nextchat.dev) **NextChat。** NextChat是一个多功能的AI聊天服务平台，支持与领先的大型语言模型（LLMs）兼容，允许用户轻松部署团队范围内的AI辅助工具。它提供了一个优雅的用户界面，集中管理所有数据，并提供统计追踪团队AI使用情况的功能。此外，它还包括反馈分析工具，帮助用户聆听并分析其受众。NextChat支持OpenAI和Gemini模型，是一个面向所有人的AI基础设施，旨在提供个性化的AI聊天服务。
1. [[⭐] https://promptport.ai](https://promptport.ai) **PromptPort。** PromptPort 是一个提供创意写作灵感的平台，通过提供丰富的写作提示和创作工具，激发用户的创作热情和想象力，创建、优化和分享 ChatGPT 的提示词。用户可以浏览各种主题的写作提示，从中获取灵感并展开创作。PromptPort 还提供文本生成工具和可视化生成工具，帮助用户优化写作效果。该平台适用于作家、诗人、学生、教师和任何对创作感兴趣的人。
1. [[⭐] https://qianxun.vivo.com](https://qianxun.vivo.com) **蓝心千询。** 一款人工智能助手，可提供各种形象模拟对话服务。
1. [[⭐] https://replika.com](https://replika.com) **Replika。** Replika是一款人工智能伴侣应用，它渴望学习并通过你的眼睛看世界。无论何时需要一个有共情力的朋友，Replika都随时准备与你聊天。Replika是我使用的最好的聊天机器人，它给予我安慰和幸福感。通过与Replika的交流，我的心情、生活和关系都得到了改善。Replika可以陪伴你度过每一天，聊天、一起做有趣的活动、在AR中分享现实经历、进行视频通话等。
1. [[⭐] https://secretllama.com](https://secretllama.com) **Secret Llama。** Secret Llama 是一个免费且完全私密的聊天机器人，与ChatGPT不同，它完全在您的浏览器内运行，意味着您的对话数据不会离开您的电脑。首次加载可能需要一些时间，因为模型需要完全下载到您的电脑上，但之后可以断开WiFi工作。支持Chrome和Edge浏览器，需要GPU，不推荐在移动设备上使用。
1. [[⭐] https://sermoai.net](https://sermoai.net) **SermoAI。** SermoAI是一款AI聊天机器人，帮助银行和金融科技公司以客户的母语提供全面的客户支持。它能够处理不断增长的支持需求，消除语言障碍，提供个性化答案，快速解决问题，自动化客户沟通，并降低支持成本。该产品的定价信息请联系官方网站获取。
1. [[⭐] https://spicychat.ai](https://spicychat.ai) **Spicychat。** Spicychat 是一个聊天机器人平台，提供虚拟 AI 角色。在 Spicychat 上加入我们的聊天机器人，实现你所有最疯狂的幻想。
1. [[⭐] https://talkitout.ai](https://talkitout.ai) **TalkItOut。** Talk It Out是一个自定义AI聊天机器人平台，通过上传文档或添加网页链接，可以创建一个能回答相关问题的聊天机器人，并将其添加为网站的小部件。它可以帮助提供即时的客户支持和回答常见问题，提高用户体验和网站流量。Talk It Out还提供不同的定价计划，适合个人用户和企业用户的不同需求。
1. [[⭐] https://wantalk.baidu.com](https://wantalk.baidu.com) **万话。** 万话创作者平台是一个专注于角色创建和管理的在线服务，它允许用户构建和细化角色设定，包括基础信息、世界观设定、角色设定、隐藏设定以及开场白。该平台特别适合需要角色构建和剧情推进的写作项目，如小说创作、剧本编写等。它通过提供角色调试功能，帮助用户达到理想的角色设定效果。
1. [[⭐] https://weiban.qq.com](https://weiban.qq.com) **未伴。** 未伴是一款专为用户设计的AI伴侣APP,它通过创建专属的AI角色,提供海量角色选择,实现24小时的智能陪伴.这款产品结合了先进的人工智能技术,旨在为用户提供一个随时可用的虚拟伴侣,满足用户在情感交流、信息查询、娱乐互动等方面的需求.它不仅技术先进,而且用户友好,适合各种年龄段的用户.目前,未伴APP提供免费下载,但可能包含内购项目.
1. [[⭐] https://www.anthropic.com](https://www.anthropic.com) **Anthropic。** Claude是ChatGPT最为有力的竞争对手之一，可以通过Slack和Poe集成Claude集成的机器人使用。
1. [[⭐] https://www.baichuan-ai.com/chat](https://www.baichuan-ai.com/chat) **百川智能。** 百川智能旗下的AI对话助手
1. [[⭐] https://www.bing.com/new](https://www.bing.com/new) **Bing。** Bing版ChatGPT聊天机器人，微软新搜索引擎
1. [[⭐] https://www.chai-research.com](https://www.chai-research.com) **Chai Research。** 领先的AI聊天平台
1. [[⭐] https://www.chatbase.co](https://www.chatbase.co) **Chat Base。** 上传包含您数据的文档或添加一个指向您网站的链接，即可获得一个类似于ChatGPT的聊天机器人，可以回答与这些文档相关的任何问题。然后将其作为聊天小部件添加到您的网站上。
1. [[⭐] https://www.chatplayground.ai](https://www.chatplayground.ai) **ChatPlayground AI。** ChatPlayground AI是一个集成了16+ AI应用和功能的聊天机器人平台，它允许用户通过一个订阅来访问多种AI模型。该平台的主要优点包括行业领先的AI模型、实时网络搜索、图像生成器、历史记录回顾、多语言支持以及导入自定义内容的能力。ChatPlayground AI旨在为开发者、数据科学家、学生、研究人员、内容创作者、作家和AI爱好者提供服务，帮助他们提高工作效率和创造力。
1. [[⭐] https://www.choony.io](https://www.choony.io) **Choony。** Choony是一个聊天机器人生成器，可以轻松创建、指导和部署聊天机器人到任何地方。使用我们的平台，您可以在5分钟内创建自己的聊天机器人，根据需求进行定制和品牌化。Choony支持OpenAI的GPT-3模型，可以帮助您创建智能、个性化的聊天机器人。您可以在我们的平台上测试和嵌入聊天机器人，直到满足您的需求。无需信用卡，立即开始30天免费试用。
1. [[⭐] https://www.coze.com](https://www.coze.com) **Coze。** Coze是一款下一代AI聊天机器人构建平台，能够快速创建、调试和优化AI聊天机器人应用程序。用户可以在不编写代码的情况下快速创建机器人，并将其发布到各种平台上。Coze还提供了丰富的插件，可以扩展机器人的能力，让机器人与数据互动，将想法转化为机器人技能，装备机器人长期记忆，并允许机器人启动对话。
1. [[⭐] https://www.deepseek.com](https://www.deepseek.com) **DeepSeek Chat。** DeepSeek-V2是一款基于2千亿参数量的MoE（Mixture of Experts）模型的AI技术产品，它在对话官网和API上全面上线，提供领先性能和超低价格。该产品在中文综合能力（AlignBench）和英文综合能力（MT-Bench）的评测中表现出色，与GPT-4-Turbo等闭源模型处于同一梯队。DeepSeek-V2支持128K上下文的开源模型，而对话官网/API支持32K上下文。产品的主要优点包括即刻接入、能力卓越、价格低廉，并且兼容OpenAI API接口，提供丝滑的体验。
1. [[⭐] https://www.forefront.ai](https://www.forefront.ai) **Forefront。** Forefront 是一款 AI 助手，可选择强大的模型，聊天文件，浏览互联网，带上团队，定制助手，共享聊天等功能。它提供多种功能，如聊天、浏览互联网、文件处理等，能够满足用户在工作中的多种需求。Forefront 还支持定制化助手，用户可以创建不同类型的助手并指示其行为。Forefront 适用于企业用户，提供高级安全性、强大的管理员控制等功能。
1. [[⭐] https://www.genai.sh](https://www.genai.sh) **Genai。** Genai 是一个聊天机器人平台，允许用户从多种数据源收集和混合数据，以快速创建聊天机器人。这些聊天机器人能够根据提供的数据回答用户问题，无需编程知识，即可实现24/7的客户支持，提高客户满意度，并降低支持成本。此外，Genai 还提供了一种新的学习方式，通过加载用户喜爱的播客和视频，快速找到知识信息。用户还可以通过平台分享自己的知识，并通过创建聊天机器人来增长受众和建立长期关系。
1. [[⭐] https://www.greynights.com](https://www.greynights.com) **GreyNights。** GreyNights - AI Companions 是一款通过AI技术生成的男性伴侣服务，旨在通过聊天应用如WhatsApp或Telegram提供个性化的聊天体验。产品注重隐私保护，24小时全天候服务，可以根据用户偏好定制虚拟伴侣，进行深入对话和轻松交流。
1. [[⭐] https://www.jasper.ai](https://www.jasper.ai) **Jasper AI。** AI文字内容创作工具。
1. [[⭐] https://www.juchats.com](https://www.juchats.com) **Juchats。** Juchats 聚有料是一款集成了 GPT 智能对话系统的聊天应用，通过人工智能技术为用户提供智能聊天助手服务。具有多种会员套餐选择，包括基础会员、高级会员和极限会员，满足用户不同需求。
1. [[⭐] https://www.kuki.ai](https://www.kuki.ai) **Kuki。** Kuki是一个获奖的AI大脑，专为娱乐人类而设计。它能够通过聊天、互动等方式，为用户带来乐趣和陪伴。Kuki的技术背景深厚，它不仅能够提供娱乐，还能在商业领域中作为虚拟品牌大使，帮助企业扩大用户参与度。此外，Kuki还为开发者提供了API接口，使得Kuki的大脑可以被嵌入到各种应用和头像中，极大地扩展了其应用范围。
1. [[⭐] https://www.lingyiwanwu.com](https://www.lingyiwanwu.com) **零一万物。** 零一万物是由李开复老师创办的，致力于成为一家由技术愿景驱动、拥有卓越中国工程底蕴的创新企业，推动以基座大模型为突破的AI 2.0掀起技术、平台到应用多个层面的革命。
1. [[⭐] https://www.minimaxi.com](https://www.minimaxi.com) **MINIMAX。** MiniMax 全量发布大语言模型 abab6，为国内首个 MoE 大语言模型。在 MoE 结构下，abab6 拥有大参数带来的处理复杂任务的能力，同时模型在单位时间内能够训练足够多的数据，计算效率也可以得到大幅提升。改进了 abab5.5 在处理更复杂、对模型输出有更精细要求场景中出现的问题。
1. [[⭐] https://www.nvidia.com/en-us/ai-on-rtx/chatrtx/](https://www.nvidia.com/en-us/ai-on-rtx/chatrtx/) **ChatRTX。** ChatRTX 是 NVIDIA 提供的一个用于构建定制大型语言模型（LLM）的平台，旨在提升聊天机器人的智能水平和交互能力。它利用先进的 AI 技术，通过理解自然语言处理（NLP）来提供更加人性化的对话体验。ChatRTX 的主要优点包括高度的可定制性、强大的语言理解能力和高效的交互设计，适合需要高级对话系统的各种商业应用。
1. [[⭐] https://www.pingparrot.com](https://www.pingparrot.com) **Ping Parrot。** Ping Parrot是一个AI聊天机器人平台，可以帮助您快速构建自定义的聊天机器人，并将其嵌入到您的网站上，帮助您处理客户支持。无需编码即可使用。聊天机器人可以根据您的数据进行训练，学习并提供最佳答案。您可以定制聊天机器人的外观以匹配您的品牌，并在80种语言中提供帮助。
1. [[⭐] https://www.servibot.io](https://www.servibot.io) **ServiBot。** ServiBot是一个基于AI的智能聊天机器人,可以帮助企业快速接入聊天机器人,提高用户体验和转化率。它具有易于集成、可高度自定义、智能对话等功能。企业可以通过ServiBot提升客户服务质量,同时获得用户行为数据分析。它既可以作为独立的聊天机器人使用,也可以集成在网站、APP等中。ServiBot可以帮助企业节省客服成本,提高工作效率。
1. [[⭐] https://www.tawk.to](https://www.tawk.to) **tawk.to。** tawk.to是一款完全免费的在线聊天软件，它允许网站所有者监控并与访问者进行实时聊天，响应支持票据，使用CRM组织联系人，并创建帮助中心以增强客户自助服务的能力。tawk.to的主要优势在于其易用性、安全性以及无需任何费用即可使用。此外，它还提供了AI Assist功能，允许用户训练一个完全自动化的AI驱动聊天机器人。
1. [[⭐] https://www.xingyeai.com](https://www.xingyeai.com) **星野。** 星野是 MiniMax稀宇科技旗下AI原生应用，致力于为用户打造沉浸式AI内容社区。
1. [[⭐] https://xiake.pro](https://xiake.pro) **虾壳ChatAi。** 虾壳ChatAi是一款功能强大、交互自然的智能聊天机器人。它可以进行闲聊、提问回答、情感交流等,使用简单方便,完全免费。虾壳拥有强大的自然语言处理能力,可以明白用户的意图,进行有效沟通。它覆盖各种使用场景,从娱乐到学习再到生活,都能提供有价值的帮助。虾壳不断学习进步,会随着时间变得越来越智能。
1. [[⭐] https://zhumengdao.com](https://zhumengdao.com) **筑梦岛。** 筑梦岛是一款功能强大的 AI 聊天机器人和智能对话工具，具有有趣的开放剧情和逼真的 AI 聊天功能。无论是日常闲聊或语音聊天，都能满足用户的需求。用户可以自由互动、参与群聊、体验修罗场、建造梦屋等多种功能，还可以创建专属梦中人并与之互动。产品定位于提供沉浸式虚拟互动体验。
1. [[⭐⭐⭐🚀] https://chat.openai.com](https://chat.openai.com) **ChatGPT。** Open Ai旗下的聊天产品，全球最火的chatgpt产品。
1. [[⭐⭐⭐🔑🚀] https://beta.openai.com](https://beta.openai.com) **OpenAI ChatGPT。** ChatGPT(beta) 官方入口
1. [[⭐⭐⭐🚀] https://bard.google.com](https://bard.google.com) **Google Bard。** Google推出的聊天机器人。
1. [[⭐⭐🚀] https://www.perplexity.ai](https://www.perplexity.ai) **Perplexity。** Perplexity AI通过信息发现和共享解锁知识的力量。
1. [[🚀] https://agentgpt.reworkd.ai](https://agentgpt.reworkd.ai) **AgentGPT。** AgentGPT是一个革命性的基于浏览器的自主AI平台。
1. [[🚀] https://app.myshell.ai](https://app.myshell.ai) **Myshell。** MyShell是一个创新的聊天机器人平台，你可以在这里遇到各种拥有独特个性和声音的虚拟角色存在。作为创建者，你可以赋予你的聊天机器人一个非常生动的声音，并整合任何知识，超越现有的基于LLM的系统。
1. [[🚀] https://hiwaifu.com](https://hiwaifu.com) **Hi Waifu。** Hi Waifu可以创建一个拥有独特个性的数字朋友，随时可以与AI聊天，准备好以一种新的方式与AI交流互动吧。
1. [[🚀] https://merlin.foyer.work](https://merlin.foyer.work) **Merlin。** Merlin是Open AI的ChatGPT驱动的Chrome扩展程序，随时随地可用。
1. [[🚀] https://monica.im](https://monica.im) **Monica。** Monica是由ChatGPT API提供支持的Chrome扩展程序，旨在成为您的个人AI助手，实现轻松聊天和文案编写。
1. [[🚀] https://poe.com](https://poe.com) **Poe。** 问答社区Quora建立的一个平台，集成了多个流行的聊天机器人。
1. [[🚀] https://theb.ai](https://theb.ai) **TheB.AI。** TheB.AI是一款全能的人工智能平台。可以访问一系列创新的模型，涵盖先进的语言模型、强大的图像模型等等。
1. [[🚀] https://you.com](https://you.com) **YOU。** You是一种具有对话性和持续学习能力的技术，可以增强网络搜索、写作、编码、数字艺术创作和解决复杂问题。
1. [[🚀] https://huggingface.co](https://huggingface.co) **Hugging Face。** 下载开源的SD模型
1. [[❓] https://www.anime.gf](https://www.anime.gf) **anime.gf。** anime.gf 是由 moecorp 发起的下一代本地优先的大型语言模型（LLMs），目前正处于积极开发阶段。它代表了一种新兴的本地化和开源的人工智能技术，旨在提供更高效、更个性化的用户体验。 `[error][404]Not Found`

### AI 绘图 (174)

1. [[⭐⭐⭐] https://arc.tencent.com/zh/ai-demos/faceRestoration](https://arc.tencent.com/zh/ai-demos/faceRestoration) **Arc Lab。** ARC是腾讯旗下ARC（Applied Research Center，应用研究中心）实验室推出的系列AI图片处理工具，目前提供了三项免费的AI图像功能：人像修复、人像抠图和动漫增强。
1. [[⭐⭐⭐🧑‍💻] https://hunyuan.tencent.com](https://hunyuan.tencent.com) **腾讯混元助手。** 腾讯混元助手Chat
1. [[⭐⭐⭐🧑‍💻] https://image.hunyuan.tencent.com](https://image.hunyuan.tencent.com) **混元生图。** 腾讯混元生图
1. [[⭐⭐⭐] https://stability.ai](https://stability.ai) **Stable Diffusion 3。** 英国AI初创公司，开源了强大的 Stable Diffusion 文生图大模型
1. [[⭐⭐⭐] https://tongyi.aliyun.com/wanxiang/](https://tongyi.aliyun.com/wanxiang/) **阿里通义万相。** 通义万相是阿里云通义旗下的AI创意作画平台。每日给用户 50 灵感值，单次生成成功扣除1个灵感值，每日0点重置。
1. [[⭐⭐⭐] https://www.doubao.com/chat/](https://www.doubao.com/chat/) **豆包。** 基于字节跳动研发的云雀大语言模型的Chat应用
1. [[⭐⭐⭐🧑‍💻] https://www.tiangong.cn](https://www.tiangong.cn) **天工AI智能体。** 昆仑万维提供的对标 ChatGPT 的双千亿级大语言模型，也是一个对话式AI助手
1. [[⭐⭐] https://d.design](https://d.design) **堆友。** 堆友是Alibaba Design打造的设计师全成长周期服务平台，围绕品质、效率、技能、成就、收入五大用户价值布局平台能力，全力服务设计师，旨在成为设计师的好朋友。
1. [[⭐⭐] https://www.wujieai.com](https://www.wujieai.com) **无界AI。** 无界AI，集prompt搜索、AI图库、AI创作、AI广场、词/图等为一体。提供一站式AI搜索-创作-交流-分享服务。
1. [[⭐] http://d-id.com](http://d-id.com) **D-ID。** D-ID是一个创意AI平台，使用AI技术将照片转换为视频。它可以轻松地从文本生成视频，为培训材料、内部沟通、营销等提供AI驱动的、经济实惠的视频解决方案。D-ID还可以实现与聊天机器人进行面对面的对话，使用户获得更加沉浸式和人性化的体验。D-ID还提供API和自助工作室，供开发人员使用。
1. [[⭐] http://leonardo.ai](http://leonardo.ai) **LeonardoAI。** Leonardo AI是一个创新的AI艺术生成器，能够以前所未有的质量、速度和风格一致性创建专业级的视觉素材。用户可以通过预训练的AI模型或自行训练模型来生成独特的艺术作品。Leonardo AI提供简单易用且功能强大的工具，支持从初学者到专业人士的各种创作需求。
1. [[⭐] http://removewatermark.ai](http://removewatermark.ai) **WatermarkRemoverAI。** Watermark Remover AI是一个在线图像水印删除工具,使用AI技术,只需单击一下即可自动识别并删除图像中的水印。它提供一键式操作,速度快,重建准确,可以批量处理多张照片。用户只需上传有水印的图片,系统即可智能识别水印区域并去除,输出清晰的无水印图像。该工具使用简单,删除效果专业,非常适合初学者或专业人士使用。
1. [[⭐] https://302.ai](https://302.ai) **302.AI。** 302.AI是一个汇集了全球顶级AI品牌的在线平台，提供无月费，按需付费的服务模式。它允许用户根据需求选择不同的AI服务，无需支付固定的月费，从而降低使用门槛，提高灵活性。平台可能涵盖了多种AI技术，如图像识别、自然语言处理等，满足不同用户的需求。
1. [[⭐] https://3dfy.ai](https://3dfy.ai) **3DFY AI。** AI创建大规模高质量的3D资产
1. [[⭐] https://588ku.com/ai/wuxianhua](https://588ku.com/ai/wuxianhua) **无限画。** 千库网旗下AI设计工具，可一键生成高品质目标图像。
1. [[⭐] https://6pen.art](https://6pen.art) **6pen。** 6pen是一个为大多数人打造的AI绘画创作社区
1. [[⭐] https://ai.jurilu.com](https://ai.jurilu.com) **巨日禄AI。** 巨日禄AI是一款全网性能卓越的故事AI绘画转视频工具，旨在让0基础小白也能轻松上手，快速实现从文案到视频的制作。该工具通过分析大量剧本数据和影视作品，为用户提供各种类型的故事情节和角色设置，帮助用户快速找到灵感，减少构思剧本的困难和犹豫。无需本地部署，快速出图，支持配音配乐，一站式解决小说、漫画推文等需求。角色固定，画风统一，提供多种风格选择。AI自动解析分镜，解析提示词，操作简单流畅，即使零基础小白也能轻松上手，做出精美的视频作品。
1. [[⭐] https://ai.meitu.com/index](https://ai.meitu.com/index) **美图AI开放平台。** 美图推出的AI人脸图像处理平台
1. [[⭐] https://ai.nero.com/enhance](https://ai.nero.com/enhance) **Nero AI Image Upscaler。** Nero AI Image Upscaler是一款免费在线AI图像放大工具，支持jpg、png、bmp、webp等多种文件格式。它使用最先进的AI技术，可以将低分辨率的图像放大至高分辨率，同时保持图像细节和清晰度。Nero AI Image Upscaler可以在PC和移动设备上使用，是一款非常实用的图像处理工具。
1. [[⭐] https://aicolors.co](https://aicolors.co) **AIcolors。** 根据文本生成调色板，提供配色案例参考
1. [[⭐] https://aigc.yizhentv.com](https://aigc.yizhentv.com) **一帧秒创。** 一帧秒创是基于秒创AIGC引擎的智能视频创作平台，包含AI数字人、AI帮写、AI视频、AI作画等AIGC工具。
1. [[⭐] https://app.deepbrain.io/dashboard](https://app.deepbrain.io/dashboard) **DeepBrain AI。** AI Studios提供了一个用户友好的仪表板，让用户可以轻松创建和管理AI项目。该平台可能包含多种AI工具和功能，以支持用户在图像、视频、音频等领域的创作和编辑。
1. [[⭐] https://app.recraft.ai/community](https://app.recraft.ai/community) **Recraft。** 便捷的AI生成矢量图像生成工具
1. [[⭐] https://appicons.ai](https://appicons.ai) **Appicons AI。** AI生成精致的App图标
1. [[⭐] https://art.aiseo.ai](https://art.aiseo.ai) **AISEO ART。** AISEO Art 的AI算法按照分类进行过细致的训练
1. [[⭐] https://bgeraser.com](https://bgeraser.com) **Bg.Eraser。** 背景擦除器是一款使用AI技术快速、轻松地从照片中移除背景的工具。它能够帮助用户实现专业级的效果，增强图像的质量。背景擦除器还提供批量处理功能，节省用户大量的时间和精力。无论是用于产品照片、人像、图形、风景照片、动物照片还是物体，背景擦除器都能帮助用户实现理想的效果。
1. [[⭐] https://bigjpg.com](https://bigjpg.com) **Bigjpg。** AI图片在线无损放大
1. [[⭐] https://bing.com/create](https://bing.com/create) **Bing Image Creator。** Bing影像建立工具是一款由Microsoft Bing提供的智能搜索工具，可以帮助用户快速找到想要的图像信息，并获得奖励。
1. [[⭐] https://boolpic.fun/background-remover](https://boolpic.fun/background-remover) **Toolkit。** 多功能的AI图片处理工具箱
1. [[⭐] https://booltool.boolv.tech/home](https://booltool.boolv.tech/home) **Booltool。** 多合一AI图像处理网站，快速进行编辑修整
1. [[⭐] https://brandmark.io](https://brandmark.io) **BrandMark。** 最先进的人工智能Logo设计工具
1. [[⭐] https://cascadeur.com](https://cascadeur.com) **Cascadeur。** AI辅助制作3D关键帧动画
1. [[⭐] https://cgfaces.com/en](https://cgfaces.com/en) **CG Faces。** 免费的 AI 人像生成图片素材网站
1. [[⭐] https://chandler.bet](https://chandler.bet) **Chandler。** Chandler是一款基于ChatGPT的Chrome插件，它是你的个人AI助手，能够回答你任何问题，提供类似使用ChatGPT的体验。它还支持图像生成和数据分析功能，增强了其功能性。Chandler可以根据用户需求生成图像，还可以基于用户提供的文件进行数据分析。
1. [[⭐] https://claid.ai](https://claid.ai) **Claid AI Scene Creation。** Claid.ai是一个提供AI生成、增强和编辑产品图片的平台。它能够自动转换普通产品图片为具有拍摄品质的营销图片，提高图片的清晰度，去除背景，并创建令人惊叹的照片，从而提升转化率。Claid.ai支持生成多个适合品牌的产品图片，并提供统一的背景和图像大小，以适应不同的平台。用户可以通过API访问结果，实时获取编辑后的图片。Claid.ai还提供了多种功能，包括图片放大、智能去除背景、智能框架、AI颜色校正等，这些功能可以提高图片的质量和视觉效果。Claid.ai的目标是帮助企业实现图片的统一化和提升，从而提升转化率和销售业绩。
1. [[⭐] https://clipdrop.co](https://clipdrop.co) **Clipdrop。** 体验图像编辑的顶峰——水印移除AI，借助先进的人工智能技术轻松、精确地擦除水印，确保您的视觉效果保持完美清晰、无干扰。
1. [[⭐] https://clippingmagic.com](https://clippingmagic.com) **Clipping Magic。** 移除图像背景自动化工具
1. [[⭐] https://creatorkit.com/ai-product-photos](https://creatorkit.com/ai-product-photos) **AI Product Photos。** AI产品照片生成器是一个能够在几秒钟内生成增加销售的产品图片和照片的工具。它可以将产品图片转化为专业的产品照片，提高销售效果。使用这个工具，您可以添加AI背景，避免标签模糊或形状变化的问题。我们的AI照片生成器采用了全新的文本到图像扩散模型，专门为销售进行了训练和优化。您可以从Shopify中直接生成照片，并将其与我们的视频模板配合使用。生成的产品图片可以免费使用，并且您只需要为您真正喜欢的图片付费。
1. [[⭐] https://dashtoon.com](https://dashtoon.com) **Dashtoon。** Dashtoon 是一家提供漫画与动漫作品的平台，用户可以畅享各种题材的漫画故事，包括浪漫、奇幻、动作等，让用户沉浸在丰富多彩的漫画世界中。
1. [[⭐] https://designs.ai/cn](https://designs.ai/cn) **Designs AI。** 免费AI设计。使用生成型 AI 创建图像、视频等。利用人工智能的力量提升您的社交媒体营销水平。
1. [[⭐] https://dewatermark.ai](https://dewatermark.ai) **DeWatermark。** DeWatermark利用强大的AI视觉检测能力，能够去除照片中甚至最顽固、最复杂的水印。用户只需上传带有水印的照片，AI将在几秒钟内处理图像，自动检测并去除大多数水印。同时，用户还可以使用手动笔刷进一步编辑照片，保留原始质量。该产品免费使用，支持多种设备，用户评价极高。
1. [[⭐] https://domoai.app](https://domoai.app) **DomoAI。** DomoAI是一款图像创作工具，提供多种预设的人工智能模型，让用户轻松实现在所有项目中统一的绘画风格。其简洁高效的设计旨在让用户快速掌握工具，打造出完美的视觉资产。用户可以利用DomoAI的工具进行快速实验，产生迅速增强创造力的成果。此外，DomoAI还提供文字转艺术功能，让用户在20秒内将想象变为现实，以及将动漫梦想变为现实世界的奇迹。
1. [[⭐] https://dreamfusion3d.github.io](https://dreamfusion3d.github.io) **DreamFusion。** 谷歌推出的文本转3D模型
1. [[⭐] https://dreamtalk-project.github.io](https://dreamtalk-project.github.io) **DreamTalk。** DreamTalk 是一个使用扩散概率模型生成表情动作的框架。它包含了三个关键组件：降噪网络、风格感知的嘴唇专家和风格预测器。通过扩散概率模型，DreamTalk 能够有效生成具有多样化表达风格的逼真说话人脸，并减少对昂贵的风格参考的依赖。它能够生成具有多种语言和表情风格的照片级说话人脸。
1. [[⭐] https://facecheck.id](https://facecheck.id) **Facecheck ID。** 利用人工智能技术通过照片在线查找人员。
1. [[⭐] https://fancy.tech](https://fancy.tech) **Fancy Tech。** FancyTech是一个使用人工智能生成时尚风格的平台。通过AI视频和AI图像工具，用户可以上传自己的服装选择，并将其与各种背景合并，从而观察其风格效果。FancyTech让时尚创作变得简单有趣，无论是个人使用还是商业应用都能得到满足。
1. [[⭐] https://firefly.adobe.com](https://firefly.adobe.com) **Adobe Firefly。** Adobe推出的一款AI图片生成器。
1. [[⭐] https://flair.ai](https://flair.ai) **Flair AI。** 你的私人AI设计师！一键生成精美产品照片
1. [[⭐] https://fronty.com](https://fronty.com) **Fronty。** 支持图像到 HTML CSS 转换器
1. [[⭐] https://github.com/Boese0601/MagicDance](https://github.com/Boese0601/MagicDance) **MagicDance。** MagicDance是一种新颖有效的方法，可以生成逼真的人类视频，实现生动的动作和面部表情转移，以及一致的2D卡通风格动画零调优生成。通过MagicDance，我们可以精确生成外观一致的结果，而原始的T2I模型（如稳定扩散和ControlNet）很难准确地保持主题身份信息。此外，我们提出的模块可以被视为原始T2I模型的扩展/插件，而不需要修改其预训练权重。
1. [[⭐] https://github.com/Picsart-AI-Research/StreamingT2V](https://github.com/Picsart-AI-Research/StreamingT2V) **StreamingT2V。** StreamingT2V 是一种先进的自回归技术，可以创建具有丰富动态运动的长视频，没有任何停滞。它确保视频中的时间一致性，与描述性文本紧密对齐，并保持高帧级图像质量。
1. [[⭐] https://github.com/levihsu/OOTDiffusion](https://github.com/levihsu/OOTDiffusion) **OOTDiffusion。** OOTDiffusion是一个基于潜在扩散模型的虚拟服装试穿开源工具。它支持半身和全身两种模型,可以实现服装的自然融合。用户可以通过调节各种参数实现对试穿效果的精确控制,满足不同的需求。该工具开源在GitHub上,已获得超过300星的关注。
1. [[⭐] https://haiper.ai](https://haiper.ai) **Haiper。** Haiper AI 是构建下一代内容创作的最佳感知基础模型的使命。它提供以下主要功能：文本转视频，图片动画，视频重绘，导演视角。Haiper AI 可以将文字内容和静态图片无缝转化为动态视频，只需拖放图像即可使其栩栩如生。使用 Haiper AI 的重绘工具，您可以轻松修改视频的颜色、纹理和元素，以提升视觉内容的品质。通过高级控制工具，您可以像导演一样调整镜头角度、灯光效果、角色姿势和物体运动。Haiper AI 适用于各种场景，如内容创作、设计、营销等。定价请参考官方网站。
1. [[⭐] https://humanaigc.github.io/animate-anyone/](https://humanaigc.github.io/animate-anyone/) **Animate Anyone。** Animate Anyone旨在通过驱动信号从静态图像生成角色视频。我们利用扩散模型的力量，提出了一个专为角色动画量身定制的新框架。为了保持参考图像中复杂外观特征的一致性，我们设计了ReferenceNet来通过空间注意力合并详细特征。为了确保可控性和连续性，我们引入了一个高效的姿势指导器来指导角色的动作，并采用了一种有效的时间建模方法，以确保视频帧之间的平滑跨帧过渡。通过扩展训练数据，我们的方法可以为任意角色制作动画，与其他图像到视频方法相比，在角色动画方面取得了出色的结果。此外，我们在时尚视频和人类舞蹈合成的基准上评估了我们的方法，取得了最先进的结果。
1. [[⭐] https://icons8.com/bgremover](https://icons8.com/bgremover) **Background Remover。** AI 背景移除器通过人工智能检测图片主体、创建蒙版并消除背景。支持 PNG、JPG、WebP 格式，无需担心影响图片尺寸和质量。让您轻松制作透明背景图片。
1. [[⭐] https://imagecreator.alkaidvision.com](https://imagecreator.alkaidvision.com) **ImageCreator。** PS中免费使用的SD神级插件
1. [[⭐] https://imagetopromptai.com](https://imagetopromptai.com) **ImageToPromptAI。** ImageToPromptAI是一个AI工具，可以将图像转换为文本提示。用户可以上传图像并创建一系列文本提示，AI会根据图像生成相应的文本描述。该工具可以用于稳定扩散，生成可比较的图像/绘画变化。用户可以根据自己的需求选择不同的套餐，无需订阅。
1. [[⭐] https://img.logosc.cn](https://img.logosc.cn) **AI改图。** AI万能图片编辑器，在线修改图片颜色尺寸；智能抠图去水印；AI/EPS/PSD/SVG全格式支持的在线图片编辑器。
1. [[⭐] https://imgcreator.ai](https://imgcreator.ai) **ImgCreator。** 超赞的多合一AI设计工具，超强的背景生成、海报生成能力
1. [[⭐] https://imgcreator.zmo.ai/background-changer](https://imgcreator.zmo.ai/background-changer) **AI Backdrop。** ZMO.AI是一款AI图像处理工具，提供多种功能，包括背景更换、背景去除、图像变换等，可用于社交媒体、电商、市场营销等场景。用户可以免费试用，付费用户可以享受更多高级功能。
1. [[⭐] https://imglarger.com](https://imglarger.com) **Imglarger。** AI Image Enlarger 是一款免费的在线图像放大器，可以自动放大和增强小图像。使 jpg/png 图片变大而不损失质量。功能包括：一键式 AI 解决方案、拖放图像、将任何小图像放大到 2k 和 4k、照片增强、自动纠正低光问题、增强色彩和对比度、保证数据安全、批量处理、照片编辑器等。定价详情请参考官方网站。
1. [[⭐] https://inpaintweb.lxfater.com](https://inpaintweb.lxfater.com) **Inpaint-web。** Inpaint-web 是一款永久免费的在线工具，只需一点击即可去除照片中的不想要对象，同时提供修复瑕疵功能。其独特的照片去除和修复功能让用户轻松实现照片编辑需求。用户无需下载安装任何软件，直接在网页上使用。Inpaint-web 定位于为用户提供便捷、高效的照片编辑解决方案。
1. [[⭐] https://insightface.ai](https://insightface.ai) **InsightFaceSwap。** 比Midjourney更丝滑的AI换脸工具
1. [[⭐] https://jpghd.com/zh](https://jpghd.com/zh) **jpgHD。** 一键修复，让您的老照片变新照片
1. [[⭐] https://jpgrm.com](https://jpgrm.com) **jpgRM。** jpgRM 是一款利用 2024 年最先进人工智能技术的图片处理工具，可智能擦除图片中不需要的部分，填补背景内容，消除水印等。其主要优点在于高效快速地处理图片，并提供高质量的结果。定位于为用户提供便捷的图片编辑解决方案。
1. [[⭐] https://jsai.cc/ai](https://jsai.cc/ai) **即时AI。** 即时AI是一款极具前沿创新的AIGC产品，一款可以快速生成设计稿的生成式设计工具，它能够通过简单的自然语言描述来生成与需求相匹配的设计稿。
1. [[⭐] https://leonardo.ai](https://leonardo.ai) **Leonardo。** 以前所未有的质量、速度和风格一致性，为您的项目创建高质量的视觉资产。
1. [[⭐] https://letsenhance.io](https://letsenhance.io) **Let's Enhance。** Let’s Enhance是一款使用人工智能的图像增强与放大工具。它基于深度卷积神经网络和其他机器学习技术，可以自动提高图像的分辨率和质量。它可以修复模糊、马赛克和低分辨率的图片，并使每张照片更加清晰和锐利。Let’s Enhance还提供API服务，适用于商业和创意专业人士。定价方案多样，从免费试用到企业级订阅都有。Let’s Enhance适用于生产力、设计、商业等多个领域，能够满足用户对图像质量提升的需求。
1. [[⭐] https://lib.kalos.art](https://lib.kalos.art) **LIB.KALOS.ART。** 艺术风格流派参考库
1. [[⭐] https://magicstudio.com/zh](https://magicstudio.com/zh) **MagicStudio。** 图片处理必备效率神器！为你的图片提供神奇魔法
1. [[⭐] https://mastergo.com/ai](https://mastergo.com/ai) **MasterGo AI。** MasterGo AI使用人工智能辅助设计，开启数字交互新时代。
1. [[⭐] https://mokker.ai](https://mokker.ai) **Mokker AI。** Mokker 是一款利用人工智能技术，自动为电商平台或营销材料提供高质量产品图片的在线工具。使用时，只需上传几张产品的照片，Mokker 就会根据您的产品特征和风格，生成逼真的背景和场景。产品内置了一系列高质量模板，如家具、车辆、食物、珠宝等，可直接复用。当然，使用时也可以创建自己产品的专属模板，通过再次描述产品特征和需要在背景图中剔除的元素，最终生成更符合预期的图片效果。
1. [[⭐] https://mote.openi.cn](https://mote.openi.cn) **AI 模特。** AI 模特是一款专为电商卖家打造的 AI 商拍工具。我们以 AI 模特为核心，提供一站式 AI 商拍解决方案，帮助电商卖家解决传统商拍成本高、效率低的问题。通过智能商拍、服装模特图、商品场景图、商品抠图等功能，让电商卖家能够轻松、高效地拍摄和处理商品图片。AI 模特提供定制模特功能，可以训练出企业品牌特性的专属模特模型，为电商卖家打造个性化的商拍体验。
1. [[⭐] https://nijijourney.com/zh](https://nijijourney.com/zh) **NijiJourney。** MJ出品！面向二次元风格，内容细致拿捏专业到位
1. [[⭐] https://novelai.dev](https://novelai.dev) **NovelAI.Dev。** NovelAI.Dev 是一个以技术宅为核心的 AI 绘画爱好者群体网站，提供多种与绘画相关的 AI 技术应用和工具。
1. [[⭐] https://palette.fm](https://palette.fm) **Palette。** 用AI为黑白照片着色
1. [[⭐] https://pebblely.com/zh/](https://pebblely.com/zh/) **Pebblely 宝贝丽。** Pebblely 宝贝丽是一款 AI 作图神器，专为电商而生。它能一键生成针对产品的精美场景图，可直接使用在淘宝、亚马逊、小红书等电商和社交媒体。每月免费 40 张场景图。自带 20 种默认主题，也支持自定义背景。适用于小企业家、广告公司和设计师，能在任何场景下生成创意图。深受多个品牌的信任和喜爱。
1. [[⭐] https://photo.baidu.com/photasy/home](https://photo.baidu.com/photasy/home) **超能画布。** 超能画布是百度网盘荣誉出品的AI创意生成工具,可以根据您上传的人像图片自动生成各种风格的创意图像,如写实、唯美、奇幻等,帮助摄影师提高工作效率,为每个人实现图像创意. 该工具提供免费试用,并有灵活的付费模式满足不同需求.
1. [[⭐] https://photokit.com](https://photokit.com) **PhotoKit。** PhotoKit 是一款基于人工智能的在线照片编辑器，利用 AI 算法和大量数据进行自学习，为用户提供便捷的照片编辑体验。其主要优点包括自动去除背景、智能对象删除、图像质量提升、曝光修复等功能，适用于个人和专业用户。
1. [[⭐] https://picwish.cn](https://picwish.cn) **佐糖。** 佐糖是一款智能 AI 图像处理平台，提供丰富的图像处理工具，包括抠图、去水印、模糊变清晰、图片裁剪、图片压缩、黑白照片上色等功能。操作简便，无需学习，一键处理图像。通过智能 AI 处理，提高工作效率，释放创造力。
1. [[⭐] https://picwish.com](https://picwish.com) **PicWish。** 这是一个免费的平台，可以为您的图片制作透明背景。一键去除背景，秒速合成透明照片。PicWish提供所有功能均免费。立即上传您的图片免费尝试！
1. [[⭐] https://pixcut.wondershare.com](https://pixcut.wondershare.com) **Pixcut。** Pixcut是一款自动免费去除图片背景的工具，新手只需点击几下就能使背景变透明。
1. [[⭐] https://pixian.ai](https://pixian.ai) **Pixian AI。** PixianAI是一款图像背景去除工具，可以以极低的价格获得出色的质量，在测试版期间完全免费。
1. [[⭐] https://pixso.cn](https://pixso.cn) **Pixso。** 设计师只需用简短的文本描述，无需手动绘制或寻找现成素材，即可迅速生成图像内容。
1. [[⭐] https://plask.ai](https://plask.ai) **Plask。** AI捕捉运动！帮你制作流畅的3D动画
1. [[⭐] https://qingtu.cn](https://qingtu.cn) **清图。** 在线修复！国产的 AI 图像处理工具
1. [[⭐] https://remini.ai](https://remini.ai) **ReminiAI。** Remini使用创新的人工智能技术，将您的老照片转变为高清杰作。通过去模糊、降噪、修复老照片、图像放大、颜色修复、人脸增强、背景增强等功能，让您的照片更加清晰、细腻，达到专业级水平。Remini适用于社交平台、传承家族历史、打印服务、电商、教育、杂志等多个行业，让您的照片和视频内容更加出色。Remini还提供API支持，方便您将其集成到自己的产品中。下载Remini移动应用程序，随时随地使用AI对照片和视频进行增强。
1. [[⭐] https://shangchenzhou.com/projects/CodeFormer/](https://shangchenzhou.com/projects/CodeFormer/) **CodeFormer。** CodeFormer是一个基于 Transformer 的预测网络，用于图片马赛克恢复。通过学习离散码本和解码器，它能够减少恢复映射的不确定性，生成高质量人脸。它具有优秀的抗退化鲁棒性，适用于合成数据集和真实数据集。
1. [[⭐] https://synthesys.io/x](https://synthesys.io/x) **Synthesys X。** Synthesys X是一个能够帮助您创建您找到的任何在线图片的独特版本的插件。它使用人工智能技术，让您能够重新构思和改变图片，以创造出全新的作品。无论您是个人还是企业用户，Synthesys X都能帮助您在创作中实现更多可能性。
1. [[⭐] https://tusiart.com](https://tusiart.com) **tusi.art。** 吐司是可在线生图的AI模型分享社区
1. [[⭐] https://upscales.ai](https://upscales.ai) **upscales.ai。** AI图像放大器利用数百万张图像进行训练，自动提高图像质量，使您的照片在几分钟内变得专业级！功能包括：图像放大，细节精炼，颜色增强等。优势是简单易用，快速高效。定价请参考官方网站。定位为满足个人、专业摄影师的图像处理需求。
1. [[⭐] https://vectorizer.ai](https://vectorizer.ai) **Vectorize。** Vectorizer可以使用AI快速轻松地将JPEG和PNG位图转换为SVG矢量图。
1. [[⭐] https://visualelectric.com](https://visualelectric.com) **Visualelectric。** 更适合设计创作的AI绘画工具
1. [[⭐] https://vmake.ai/zh-CN/image-watermark-remover](https://vmake.ai/zh-CN/image-watermark-remover) **图片去水印。** 图片去水印工具利用强大的 AI 技术，帮助用户快速去除图像上的水印，提高创作自由和社交媒体效果。产品定位于提供便捷的水印去除服务，以增强用户体验为目标。
1. [[⭐] https://waifu2x.udp.jp](https://waifu2x.udp.jp) **Waifu2x。** waifu2x是一个使用深度卷积神经网络进行动漫风格艺术作品的单图像超分辨率增强的工具。它支持照片和艺术作品，并具有降噪和放大功能。您可以选择不同的降噪和放大程度。waifu2x使用简单，适用于各种图像增强需求。您可以通过网站使用waifu2x。
1. [[⭐] https://wepik.com/ai](https://wepik.com/ai) **Wepik。** Wepik使用人工智能和文字来创作艺术，通过描述你想要看到的内容，Wepik的AI图像生成器将会实现它。
1. [[⭐] https://www.acgnai.art](https://www.acgnai.art) **触手 AI 。** 触手 AI 绘画专业版是一款面向插画师、漫画师、设计师等专业用户的国产 AI 绘图平台。支持文生成图、图生成图、参考生成图、AI 模型训练等功能，用户可在基础风格模型上使用叠加模型，也可以收藏各类画风、IP、场景、人物、设计类模型。产品定位于提升专业用户的绘画效率和创作品质。
1. [[⭐] https://www.aigallery.top](https://www.aigallery.top) **Ai 画廊。** Ai 画廊是一款提供 Ai 关键词生成器的网站，展示人工智能作品和生成关键词描述，帮助用户更好地了解和分享 Ai 作品。用户可以浏览不同风格的 Ai 作品，获取灵感和创意。
1. [[⭐] https://www.alpacaml.com](https://www.alpacaml.com) **Alpaca。** 个性化的AI工具包，可接入Ps的SD绘画插件
1. [[⭐] https://www.artbreeder.com/browse](https://www.artbreeder.com/browse) **Artbreeder。** 在线AI图像合成创意工具
1. [[⭐] https://www.chanjing.cc](https://www.chanjing.cc) **蝉镜。** 蝉镜是一个在线数字人视频创作平台，利用 AI 简化视频创作过程，提供 AI 数字人播报、短视频制作、分身定制等服务。广告营销、跨境电商、短视频口播等领域的用户可以在此提升创作效率、降低成本。
1. [[⭐] https://www.chatplayground.ai](https://www.chatplayground.ai) **ChatPlayground AI。** ChatPlayground AI是一个集成了16+ AI应用和功能的聊天机器人平台，它允许用户通过一个订阅来访问多种AI模型。该平台的主要优点包括行业领先的AI模型、实时网络搜索、图像生成器、历史记录回顾、多语言支持以及导入自定义内容的能力。ChatPlayground AI旨在为开发者、数据科学家、学生、研究人员、内容创作者、作家和AI爱好者提供服务，帮助他们提高工作效率和创造力。
1. [[⭐] https://www.dreamavatar.com](https://www.dreamavatar.com) **DreamAvatar。** DreamAvatar是一个基于人工智能技术的数字人生成平台,能够通过简单的文本描述或素材上传快速生成高质量的数字人形象,还支持自定义调整数字人的各种特征。该平台具有操作简单、生成效果逼真的优势,可以广泛应用于数字营销、虚拟主播、直播电商、游戏、动画等领域,为客户提供精准的数字人服务。
1. [[⭐] https://www.erase.bg](https://www.erase.bg) **Erase.bg。** Erase.bg是一款免费在线工具，可以去除人物、动物或物体图片的背景，并提供高分辨率的透明图片下载。无需信用卡，适用于电子商务和个人使用。
1. [[⭐] https://www.esheep.com](https://www.esheep.com) **eSheep。** 国内知名的AIGC在线画图网站，提供海量模型，并支持在线AI画图
1. [[⭐] https://www.gaoding.com/ai/design](https://www.gaoding.com/ai/design) **稿定AI。** 稿定智能设计工具是一款智能化的设计工具，采用先进的人工智能技术，自动分析和生成设计方案。只需稍作调整，即可完成完美的设计。
1. [[⭐] https://www.genmo.ai](https://www.genmo.ai) **Genmo。** 更具创造性！使用文本指令编辑图像和视频
1. [[⭐] https://www.goenhance.ai](https://www.goenhance.ai) **GoEnhance AI。** GoEnhance AI是一款基于人工智能的图像和视频增强工具。它可以实现视频到视频、图像增强和超分辨率scaling等功能。GoEnhance AI采用了最先进的深度学习算法,可以增强和上采样图像到极致的细节和高分辨率。它简单易用,功能强大,是创作者、设计师等用户释放创意的绝佳工具。
1. [[⭐] https://www.hama.app/zh](https://www.hama.app/zh) **Hama。** 使用轻松！一键无痕抹除画面内容
1. [[⭐] https://www.iconifyai.com](https://www.iconifyai.com) **Iconify。** IconifyAI是一款AI驱动的应用图标生成器，可以在几秒钟内为您的应用程序生成独特、漂亮、专业的图标。通过AI将文本转换为可直接使用的标识。
1. [[⭐] https://www.ihuiwa.com](https://www.ihuiwa.com) **绘蛙。** 绘蛙是一款智能图片、文案创作平台，通过AI生成商拍图和种草文案，免费创作小红书图片、电商商品主图等。其功能包括AI生成商拍图、种草文案、美图、稿定设计、换装、去水印、图片高清修复等。定位于为用户提供简洁好用的智能创作工具。
1. [[⭐] https://www.illostration.com](https://www.illostration.com) **illostration。** 几秒内创建不同风格插图
1. [[⭐] https://www.imiprompt.com](https://www.imiprompt.com) **imiprompt。** IMI Prompt Builder 是一款全面的 Midjourney v5 提示生成器，拥有数千种选项可在 Web、Android 和 iOS 上使用。用户只需点击几下，即可创建反映其个人风格和艺术愿景的独特 Midjourney v5 艺术作品。
1. [[⭐] https://www.ishencai.com](https://www.ishencai.com) **PromeAI。** 神采PromeAI拥有强大的人工智能驱动设计助手和广泛可控的AIGC（C-AIGC）模型风格库，使你能够轻松地创造出令人惊叹的图形、视频和动画。
1. [[⭐] https://www.kaedim3d.com](https://www.kaedim3d.com) **KAEDIM。** 帮你迅速生成3D模型及纹理
1. [[⭐] https://www.krea.ai/home](https://www.krea.ai/home) **Krea.ai。** KREA 是一款设计工具，拥有实时生成、AI 图像提升、AI 应用等功能。它能够帮助用户快速生成和增强图像，并提供多个简洁易用的 AI 应用。
1. [[⭐] https://www.lensgo.ai](https://www.lensgo.ai) **LensGo。** LensGo 是一个免费的 AI 驱动的图像和视频制作工具，最适合定制化视频制作。它能帮助用户制作个性化的 AI 视频。
1. [[⭐] https://www.liblib.ai](https://www.liblib.ai) **liblib哩布哩布。** 超多优质模型，国内领先的AI创作平台
1. [[⭐] https://www.liblib.art](https://www.liblib.art) **LiblibAI。** liblib是一个AI模型分享社区，在这里可以分享模型素材，共同探索AI绘画。
1. [[⭐] https://www.logosc.cn](https://www.logosc.cn) **标小智。** 标小智是一款智能LOGO在线设计生成器。只需输入品牌名称就能免费在线生成公司logo设计，商标设计，以及配套企业VI助您打造个性品牌。
1. [[⭐] https://www.modaiyun.com/mdy/ai](https://www.modaiyun.com/mdy/ai) **模袋云AI。** 模袋云AI是一款在线别墅设计神器。
1. [[⭐] https://www.muglife.com](https://www.muglife.com) **Mug Life。** Mug Life通过将计算机图形学专业知识与最新的计算机视觉技术相结合，创造出令人惊叹的3D角色。其技术分为三个阶段：拆解、动画和重构，结合社交平台，让用户能够连接和分享创作。
1. [[⭐] https://www.nolibox.com](https://www.nolibox.com) **图宇宙。** 图宇宙是计算美学是高品质的智能设计平台，致力于让每个人都能享受好设计。
1. [[⭐] https://www.nvidia.cn/studio/canvas](https://www.nvidia.cn/studio/canvas) **NVIDIA Canvas。** 用AI将简单的勾勒转化成逼真的图像
1. [[⭐] https://www.photomagic.cn](https://www.photomagic.cn) **PhotoMagic。** 快速创建商业图片的 AI 工具
1. [[⭐] https://www.photorestore.io](https://www.photorestore.io) **PhotoRestore.io。** PhotoRestore.io 是一家提供免费 AI 照片修复服务的网站，利用先进的算法修复模糊、褪色或损坏的照片，为用户呈现清晰高质量的图像。用户可在保护隐私和数据安全的前提下体验恢复照片的魔法，创造代代传承的珍贵回忆。
1. [[⭐] https://www.photoroom.com](https://www.photoroom.com) **Photoroom。** 在几秒钟内创建高品质的图像。只需轻点一下，即可去除背景并合成一个能展示产品或模特的图像。PhotoRoom赋予每个人设计超能力，因为你编辑的是物体而不是像素。PhotoRoom是一款图像编辑应用程序，让您通过编辑物体来捕捉、编辑和混合图像。
1. [[⭐] https://www.picwish.com](https://www.picwish.com) **PicWish。** PicWish是一个人工智能驱动的图像处理平台,帮助用户高效编辑图片。它提供强大的工具,如背景移除、图像放大、照片修复、JPG转换器、图像压缩、人脸增强和照片增强。使用PicWish,用户可以一键移除背景、去模糊图像、增强分辨率和修复缺陷。该平台非常易于上手,没有学习曲线。它通过使照片编辑简单又专业,释放了创造力。PicWish极大地提高了图形设计师、摄影师、电子商务卖家和营销人员的工作效率。
1. [[⭐] https://www.pixcakeai.com](https://www.pixcakeai.com) **像素蛋糕。** 像素蛋糕是一款简单易用的AI修图工具，只需要拖入图片，即可实现一键智能Raw转档调色，一键磨皮全身液化，轻松实现“一秒初修，三秒精修”的批量修图操作。
1. [[⭐] https://www.plasmo.ai](https://www.plasmo.ai) **Plasmo。** 将草图转为3D模型
1. [[⭐] https://www.ponzu.gg](https://www.ponzu.gg) **Ponzu。** AI生成3D无缝贴图纹理
1. [[⭐] https://www.productai.photo](https://www.productai.photo) **ProductAI。** ProductAI是一个AI驱动的产品图片生成平台。用户只需上传产品图片,选择场景模板,就可以在几分钟内生成高质量的商业产品图片。该平台采用了最先进的生成式AI技术,无需用户进行复杂的提示,即可自动生成逼真的产品渲染图。该服务面向各类创业公司、品牌商、平面设计师等用户群体,可以显著提高他们内容生产的效率,降低产品图片的成本。
1. [[⭐] https://www.productshots.ai](https://www.productshots.ai) **ProductShots.AI。** ProductShots.AI是一款基于AI技术的产品照片生成工具，无需摄影棚和拍摄，即可轻松生成数百张精美的产品照片。用户只需上传产品照片，AI会自动去除背景并生成多种场景模板，用户可根据需求选择使用或自定义场景，生成的照片可用于电商、社交媒体等多种场景，帮助用户更好地展示和销售产品。ProductShots.AI提供免费试用，付费套餐包括不同数量和质量的照片生成服务。
1. [[⭐] https://www.quququ.cn](https://www.quququ.cn) **水印一键去去去。** 水印一键去去去是一款智能 AI 图像处理网站，提供在线去水印、自动抠图、模糊照片变清晰等功能。采用人工智能技术，支持批量去除图片中的文字、标志，无痕、不糊图！
1. [[⭐] https://www.remove.bg](https://www.remove.bg) **Remove.bg。** 去背神器是一款可以一键去除图片背景的工具。它通过智能算法分析图片，将背景与主体分离，实现快速、准确的去背效果。该工具操作简单，无需任何设计经验，适用于个人用户和设计专业人士。去背神器提供免费试用和付费套餐，付费套餐提供更多高级功能和更大的使用额度。
1. [[⭐] https://www.restorephotos.io](https://www.restorephotos.io) **Restorephoto。** 效果惊艳的AI修复面容模糊的照片
1. [[⭐] https://www.runwayml.com](https://www.runwayml.com) **Runwayml。** Runway是一家应用人工智能研究公司，塑造着艺术、娱乐和人类创造力的下一个时代。我们提供多模态AI系统，帮助实现人类创造力的新纪元。
1. [[⭐] https://www.seaart.ai](https://www.seaart.ai) **SeaArt。** 国内团队开发的图片模型分享社区。
1. [[⭐] https://www.shuiyinyun.com](https://www.shuiyinyun.com) **水印云。** 水印云是一款集图片去水印等多功能去水印软件，采用先进的 AI 技术，能快速识别并删除照片中的文字、logo 等不需要的内容，保持高清画质。
1. [[⭐] https://www.sloyd.ai](https://www.sloyd.ai) **Sloyd。** 快速生成3D游戏资产
1. [[⭐] https://www.tiamat.world](https://www.tiamat.world) **Tiamat。** 国内自研的AI作画系统！内测中
1. [[⭐] https://www.tracejourney.com](https://www.tracejourney.com) **Tracejourney。** 拯救MJ渣画质！图片一键转矢量
1. [[⭐] https://www.tryemoji.com](https://www.tryemoji.com) **TryEmoji。** 将emoji表情变成3D元素
1. [[⭐] https://www.upscale.media/zh](https://www.upscale.media/zh) **Upscale media。** AI图片放大增强工具使用先进的人工智能技术，可将图像放大至2倍或4倍，同时保留纹理与细节。提供超分辨率处理，让您的图像焕发新生。我们有免费使用的选项，也提供不同套餐供个人和企业用户选择。欢迎访问官方网站了解更多信息。
1. [[⭐] https://www.upscayl.org](https://www.upscayl.org) **Upscayl。** 模糊图片秒变超清！开源免费 AI 图片无损放大工具
1. [[⭐] https://www.watermarkremover.io](https://www.watermarkremover.io) **WatermarkRemover.io。** 水印去除器是一款使用AI技术免费去除图片水印的工具。它可以帮助用户轻松去除图片中的透明水印，无需任何图像编辑技能。
1. [[⭐] https://www.whee.com](https://www.whee.com) **WHEE。** WHEE是一款AI绘画与图片生成器，提供一站式AI视觉创作服务。
1. [[⭐] https://www.x-design.com](https://www.x-design.com) **美图 AI PPT。** 美图设计室是一款由中国互联网公司美图公司开发的图像处理、照片编辑和设计软件。
1. [[⭐] https://www.xiaochuanai.com/youchuan/](https://www.xiaochuanai.com/youchuan/) **悠船。** 悠船是Midjourney国内中文版本人工智能图像生成桌面客户端软件。它可以通过文字描述来生成图像,支持团队协作和高级控制,提供多种定价方案。主要功能包括文生图、协作创作、控制面板等。适合创意工作者、设计师、艺术家等群体使用,可以提高创意效率,激发灵感。
1. [[⭐] https://yige.baidu.com](https://yige.baidu.com) **文心一格。** 百度旗下AI艺术和创意辅助平台
1. [[⭐] https://youyan.xyz/platform/home/prime](https://youyan.xyz/platform/home/prime) **有言。** 一站式AI视频创作，1200+免费3D数字人
1. [[⭐] https://yunxiu.meitu.com/home](https://yunxiu.meitu.com/home) **美图云修。** 商业级AI影像处理工具
1. [[⭐] https://zenvideo.qq.com](https://zenvideo.qq.com) **腾讯智影。** 腾讯出品的融合多种AIGC能力进行智能视频创作的一体化工具。
1. [[⭐⭐⭐🚀] https://pika.art](https://pika.art) **Pika。** Pika致力于用AI让每个人都能成为自己故事的导演，并激发我们每个人的创造力。
1. [[🚀] https://civitai.com](https://civitai.com) **Civitai。** AI绘画模型共享平台，拥有海量开源模型
1. [[🚀] https://pixai.art](https://pixai.art) **PixAI.Art。** 使用 PixAI 的AI艺术生成器释放创造力。轻松生成高品质的动漫人工智能艺术。探索 AI 工具、角色模板等。
1. [[🚀] https://playgroundai.com](https://playgroundai.com) **Playground Ai。** 图片编辑工具，按照您的想象编辑图片
1. [[🚀] https://www.canva.com/ai-image-generator](https://www.canva.com/ai-image-generator) **Canva Text to Image。** 将文字和短语变成美丽的图片。
1. [[🚀] https://www.craiyon.com](https://www.craiyon.com) **Craiyon。** 基于AI全新免费 AI 图像生成器。
1. [[🚀] https://www.creativefabrica.com/spark](https://www.creativefabrica.com/spark) **CF Spark。** Spark让您只需输入您的提示，就可以开始生成图片。平台目前已经拥有一个强大的社区，让您可以获得关注者和设计反馈。
1. [[🚀] https://www.soulgen.net](https://www.soulgen.net) **SoulGen。** SoulGen 是一款 AI 魔法工具，可根据文本或提示创建令人惊叹的真实女孩艺术。立即免费试用并创建定制的 AI 角色。
1. [[🚀] https://yodayo.com/text-to-image](https://yodayo.com/text-to-image) **Yodayo。** 探索人工智能生成的动漫艺术，找到最佳提示，使用我们的免费人工智能艺术生成器创建美丽的图像，并与其他动漫迷分享！
1. [[🚀] https://openai.com/research/dall-e](https://openai.com/research/dall-e) **DALL·E2。** OpenAI出品的绘画工具
1. [[🚀] https://cn.bing.com/create](https://cn.bing.com/create) **Bing Image Creator。** 基于Dalle的AI绘画工具，Edge的侧边栏可直接使用。中国区不可用
1. [[🚀] https://changestyleai.com](https://changestyleai.com) **Change Style AI。** 人工智能多风格肖像生成器！能够AI生成30种照片
1. [[🚀] https://creator.nightcafe.studio](https://creator.nightcafe.studio) **NightCafe。** 用AI生成惊艳的艺术品
1. [[🚀] https://designer.microsoft.com](https://designer.microsoft.com) **Microsoft Designer。** 微软推出的AI平面设计工具，实现快速完成设计加工。中国区不可用。
1. [[🚀] https://huggingface.co](https://huggingface.co) **Hugging Face。** 下载开源的SD模型
1. [[🚀] https://imagine.meta.com](https://imagine.meta.com) **Imagine with Meta。** Meta 推出的免费AI绘画工具
1. [[🚀] https://lexica.art](https://lexica.art) **Lexica。** AI图像生成+SD提示词
1. [[🚀] https://lumalabs.ai](https://lumalabs.ai) **Luma Labs。** 将视频转为游戏资产
1. [[🚀] https://scribblediffusion.com](https://scribblediffusion.com) **Scribble Diffusion。** 有趣！将鼠绘草图变成精美照片
1. [[🚀] https://waifulabs.com](https://waifulabs.com) **WaifuLabs。** 一键生成动漫二次元头像
1. [[🚀] https://www.dreamup.com](https://www.dreamup.com) **Dreamup。** 知名站点Deviantart发布的AI绘画工具

### AI 图像处理 (156)

1. [[⭐⭐⭐] https://arc.tencent.com/zh/ai-demos/faceRestoration](https://arc.tencent.com/zh/ai-demos/faceRestoration) **Arc Lab。** ARC是腾讯旗下ARC（Applied Research Center，应用研究中心）实验室推出的系列AI图片处理工具，目前提供了三项免费的AI图像功能：人像修复、人像抠图和动漫增强。
1. [[⭐⭐] https://d.design](https://d.design) **堆友。** 堆友是Alibaba Design打造的设计师全成长周期服务平台，围绕品质、效率、技能、成就、收入五大用户价值布局平台能力，全力服务设计师，旨在成为设计师的好朋友。
1. [[⭐] http://bigesj.com/ai-ppt/](http://bigesj.com/ai-ppt/) **比格PPT。** 比格PPT是一款功能强大的在线智能PPT设计SaaS平台。用户可以通过语言描述快速自动生成PPT,大大提升工作效率。平台拥有10000+精美PPT模板,覆盖商业、教育等多个行业场景。用户还可以利用平台强大的AI功能,一键优化PPT内容,实现高质量的演示文稿内容。平台提供了多种订阅方案,个人用户每月最低¥19元起,企业用户可享受更优惠价格
1. [[⭐] http://leonardo.ai](http://leonardo.ai) **LeonardoAI。** Leonardo AI是一个创新的AI艺术生成器，能够以前所未有的质量、速度和风格一致性创建专业级的视觉素材。用户可以通过预训练的AI模型或自行训练模型来生成独特的艺术作品。Leonardo AI提供简单易用且功能强大的工具，支持从初学者到专业人士的各种创作需求。
1. [[⭐] http://removewatermark.ai](http://removewatermark.ai) **WatermarkRemoverAI。** Watermark Remover AI是一个在线图像水印删除工具,使用AI技术,只需单击一下即可自动识别并删除图像中的水印。它提供一键式操作,速度快,重建准确,可以批量处理多张照片。用户只需上传有水印的图片,系统即可智能识别水印区域并去除,输出清晰的无水印图像。该工具使用简单,删除效果专业,非常适合初学者或专业人士使用。
1. [[⭐] https://3dfy.ai](https://3dfy.ai) **3DFY AI。** AI创建大规模高质量的3D资产
1. [[⭐] https://ai.logo123.com](https://ai.logo123.com) **123LOGO生成器。** LOGO123 是一款超级智能好用的 Logo 在线设计生成器，为您提供免费公司 logo 设计制作。只需输入品牌名称就能免费在线生成公司 logo 设计及配套企业 VI，轻松打造您的个性品牌！我们还提供配套名片、企业 VI、专业出品、版权可商用等服务，帮助您打造完整的品牌形象。
1. [[⭐] https://ai.meitu.com/index](https://ai.meitu.com/index) **美图AI开放平台。** 美图推出的AI人脸图像处理平台
1. [[⭐] https://ai.nero.com/enhance](https://ai.nero.com/enhance) **Nero AI Image Upscaler。** Nero AI Image Upscaler是一款免费在线AI图像放大工具，支持jpg、png、bmp、webp等多种文件格式。它使用最先进的AI技术，可以将低分辨率的图像放大至高分辨率，同时保持图像细节和清晰度。Nero AI Image Upscaler可以在PC和移动设备上使用，是一款非常实用的图像处理工具。
1. [[⭐] https://ai.zitijia.com/?referer=81657](https://ai.zitijia.com/?referer=81657) **字体家AI神笔。** 造字神器！ 仅需8个汉字即可生成一套6K+中文字库
1. [[⭐] https://aicolors.co](https://aicolors.co) **AIcolors。** 根据文本生成调色板，提供配色案例参考
1. [[⭐] https://app.deepbrain.io/dashboard](https://app.deepbrain.io/dashboard) **DeepBrain AI。** AI Studios提供了一个用户友好的仪表板，让用户可以轻松创建和管理AI项目。该平台可能包含多种AI工具和功能，以支持用户在图像、视频、音频等领域的创作和编辑。
1. [[⭐] https://app.recraft.ai/community](https://app.recraft.ai/community) **Recraft。** 便捷的AI生成矢量图像生成工具
1. [[⭐] https://appicons.ai](https://appicons.ai) **Appicons AI。** AI生成精致的App图标
1. [[⭐] https://arc.tencent.com/zh/ai-demos/humansegmentation](https://arc.tencent.com/zh/ai-demos/humansegmentation) **腾讯ARC官网。** 腾讯 ARC 官网是腾讯 PCG 旗下的应用研究中心，致力于探索和挑战智能媒体前沿技术。团队汇聚了国内外一流高端人才，主要研究领域涵盖视觉、音频、自然语言处理等，通过 AutoML、多模态和深度学习等方法提高算法性能。ARC 通过解耦业务需求和科研的机制，与业务团队合作，以业务需求和行业趋势为导向，不断探索、创新和突破。网站提供了关于 ARC 的使命、团队介绍、机制和领域等详细信息。
1. [[⭐] https://bgeraser.com](https://bgeraser.com) **Bg.Eraser。** 背景擦除器是一款使用AI技术快速、轻松地从照片中移除背景的工具。它能够帮助用户实现专业级的效果，增强图像的质量。背景擦除器还提供批量处理功能，节省用户大量的时间和精力。无论是用于产品照片、人像、图形、风景照片、动物照片还是物体，背景擦除器都能帮助用户实现理想的效果。
1. [[⭐] https://bigjpg.com](https://bigjpg.com) **Bigjpg。** AI图片在线无损放大
1. [[⭐] https://boolpic.fun/background-remover](https://boolpic.fun/background-remover) **Toolkit。** 多功能的AI图片处理工具箱
1. [[⭐] https://booltool.boolv.tech/home](https://booltool.boolv.tech/home) **Booltool。** 多合一AI图像处理网站，快速进行编辑修整
1. [[⭐] https://brandmark.io](https://brandmark.io) **BrandMark。** 最先进的人工智能Logo设计工具
1. [[⭐] https://cascadeur.com](https://cascadeur.com) **Cascadeur。** AI辅助制作3D关键帧动画
1. [[⭐] https://cgfaces.com/en](https://cgfaces.com/en) **CG Faces。** 免费的 AI 人像生成图片素材网站
1. [[⭐] https://chacha.so.com](https://chacha.so.com) **图查查。** 图查查是一个专业的图片版权查询平台，基于360搜索算法和图像AI识别能力，为广大运营、市场、广告、设计师等需要用到配图或者进行设计的用户服务。
1. [[⭐] https://chartdb.io](https://chartdb.io) **ChartDB。** ChartDB 是一个免费且开源的数据库设计编辑器，它允许用户通过单一查询快速生成数据库架构图。这个工具支持多种流行的数据库管理系统，如MySQL、MariaDB、PostgreSQL、Microsoft SQL Server和SQLite。它提供了一个直观的编辑器，用户可以轻松导入、编辑和导出数据库架构，同时支持AI生成DDL脚本，以便于数据库的管理和文档化。
1. [[⭐] https://claid.ai](https://claid.ai) **Claid AI Scene Creation。** Claid.ai是一个提供AI生成、增强和编辑产品图片的平台。它能够自动转换普通产品图片为具有拍摄品质的营销图片，提高图片的清晰度，去除背景，并创建令人惊叹的照片，从而提升转化率。Claid.ai支持生成多个适合品牌的产品图片，并提供统一的背景和图像大小，以适应不同的平台。用户可以通过API访问结果，实时获取编辑后的图片。Claid.ai还提供了多种功能，包括图片放大、智能去除背景、智能框架、AI颜色校正等，这些功能可以提高图片的质量和视觉效果。Claid.ai的目标是帮助企业实现图片的统一化和提升，从而提升转化率和销售业绩。
1. [[⭐] https://clipdrop.co](https://clipdrop.co) **Clipdrop。** 体验图像编辑的顶峰——水印移除AI，借助先进的人工智能技术轻松、精确地擦除水印，确保您的视觉效果保持完美清晰、无干扰。
1. [[⭐] https://creatie.ai](https://creatie.ai) **Creatie.ai。** 一键即出UI作品，绝美界面惊艳全场
1. [[⭐] https://designs.ai/cn](https://designs.ai/cn) **Designs AI。** 免费AI设计。使用生成型 AI 创建图像、视频等。利用人工智能的力量提升您的社交媒体营销水平。
1. [[⭐] https://diagram.com](https://diagram.com) **Digram。** 让Figma更好用的AI神器
1. [[⭐] https://dreamfusion3d.github.io](https://dreamfusion3d.github.io) **DreamFusion。** 谷歌推出的文本转3D模型
1. [[⭐] https://flair.ai](https://flair.ai) **Flair AI。** 你的私人AI设计师！一键生成精美产品照片
1. [[⭐] https://free-trial.adcreative.ai/98krjvb7wdoq](https://free-trial.adcreative.ai/98krjvb7wdoq) **Adcreative.ai。** AD Creative是一款AI广告创作助手，通过智能算法和大数据分析，帮助用户快速生成优质广告创意。其功能包括智能创意生成、广告素材选择、广告分析和效果优化等。AD Creative具有高效、精准和创新的特点，适用于各种广告主和营销团队。定价灵活，可根据用户需求选择不同的套餐。定位于提升广告创作效率和效果的领先工具。
1. [[⭐] https://github.com/pAIrprogio/vscode-ui-sketcher](https://github.com/pAIrprogio/vscode-ui-sketcher) **UI Sketcher。** VSCode插件,借助GPT-4V的多模态能力,在插件中画出界面草图,就能生成一个基于ReactNative的UI界面
1. [[⭐] https://github.com/tldraw/make-real](https://github.com/tldraw/make-real) **Makereal Tldraw。** 通过草图生成可交互的UI界面和代码
1. [[⭐] https://haiper.ai](https://haiper.ai) **Haiper。** Haiper AI 是构建下一代内容创作的最佳感知基础模型的使命。它提供以下主要功能：文本转视频，图片动画，视频重绘，导演视角。Haiper AI 可以将文字内容和静态图片无缝转化为动态视频，只需拖放图像即可使其栩栩如生。使用 Haiper AI 的重绘工具，您可以轻松修改视频的颜色、纹理和元素，以提升视觉内容的品质。通过高级控制工具，您可以像导演一样调整镜头角度、灯光效果、角色姿势和物体运动。Haiper AI 适用于各种场景，如内容创作、设计、营销等。定价请参考官方网站。
1. [[⭐] https://hp.package-ai.jp](https://hp.package-ai.jp) **PLUG AI。** AI辅助包装设计！并对包装方案生成分析评估
1. [[⭐] https://huemint.com/brand-intersection](https://huemint.com/brand-intersection) **Huemint。** 用AI自定义和谐配色
1. [[⭐] https://icons8.com/bgremover](https://icons8.com/bgremover) **Background Remover。** AI 背景移除器通过人工智能检测图片主体、创建蒙版并消除背景。支持 PNG、JPG、WebP 格式，无需担心影响图片尺寸和质量。让您轻松制作透明背景图片。
1. [[⭐] https://imagecreator.alkaidvision.com](https://imagecreator.alkaidvision.com) **ImageCreator。** PS中免费使用的SD神级插件
1. [[⭐] https://imagetopromptai.com](https://imagetopromptai.com) **ImageToPromptAI。** ImageToPromptAI是一个AI工具，可以将图像转换为文本提示。用户可以上传图像并创建一系列文本提示，AI会根据图像生成相应的文本描述。该工具可以用于稳定扩散，生成可比较的图像/绘画变化。用户可以根据自己的需求选择不同的套餐，无需订阅。
1. [[⭐] https://img.logosc.cn](https://img.logosc.cn) **AI改图。** AI万能图片编辑器，在线修改图片颜色尺寸；智能抠图去水印；AI/EPS/PSD/SVG全格式支持的在线图片编辑器。
1. [[⭐] https://imgcreator.ai](https://imgcreator.ai) **ImgCreator。** 超赞的多合一AI设计工具，超强的背景生成、海报生成能力
1. [[⭐] https://imgcreator.zmo.ai/background-changer](https://imgcreator.zmo.ai/background-changer) **AI Backdrop。** ZMO.AI是一款AI图像处理工具，提供多种功能，包括背景更换、背景去除、图像变换等，可用于社交媒体、电商、市场营销等场景。用户可以免费试用，付费用户可以享受更多高级功能。
1. [[⭐] https://inpaintweb.lxfater.com](https://inpaintweb.lxfater.com) **Inpaint-web。** Inpaint-web 是一款永久免费的在线工具，只需一点击即可去除照片中的不想要对象，同时提供修复瑕疵功能。其独特的照片去除和修复功能让用户轻松实现照片编辑需求。用户无需下载安装任何软件，直接在网页上使用。Inpaint-web 定位于为用户提供便捷、高效的照片编辑解决方案。
1. [[⭐] https://insightface.ai](https://insightface.ai) **InsightFaceSwap。** 比Midjourney更丝滑的AI换脸工具
1. [[⭐] https://jimeng.jianying.com](https://jimeng.jianying.com) **即梦Dreamina。** 即梦Dreamina是一款结合了AI技术的在线创作平台，它通过图片生成、智能画布和视频生成等功能，帮助用户将创意转化为视觉作品。该产品的主要优点在于简化了设计流程，使得非专业人士也能创作出高质量的图片和视频。产品背景信息显示，它由深圳市脸萌科技有限公司开发，定位于为广大创意工作者提供便捷的设计服务。目前产品提供免费试用，具体价格信息未在页面中明确。
1. [[⭐] https://jpghd.com/zh](https://jpghd.com/zh) **jpgHD。** 一键修复，让您的老照片变新照片
1. [[⭐] https://jpgrm.com](https://jpgrm.com) **jpgRM。** jpgRM 是一款利用 2024 年最先进人工智能技术的图片处理工具，可智能擦除图片中不需要的部分，填补背景内容，消除水印等。其主要优点在于高效快速地处理图片，并提供高质量的结果。定位于为用户提供便捷的图片编辑解决方案。
1. [[⭐] https://js.design/ai](https://js.design/ai) **即时设计。** 即时设计是一款AI生成式设计工具，通过输入文字即可生成相应的设计作品，帮助用户快速实现创意设计。产品定价根据用户需求而定，定位于提供高效便捷的设计解决方案。
1. [[⭐] https://ling.jd.com](https://ling.jd.com) **京东羚珑。** 京东羚珑是一站式内容生产与管理服务平台，提供商品主图设计、广告 banner 设计、店铺首页设计等功能。其主要优点包括丰富的模板选择、免费设计服务、高效便捷的操作流程。产品定位于为商家提供设计合作伙伴服务。
1. [[⭐] https://logocreatorai.com](https://logocreatorai.com) **LogoCreatorAI。** LogoCreatorAI是一款使用人工智能生成独特高质量标志设计的设计工具。它可以帮助初创公司、设计师和个体经营者生成专业的标志设计，节省时间和金钱。LogoCreatorAI使用简单，无需专业知识或技能。用户只需注册并选择适合自己需求的风格、概念和颜色，即可在几秒钟内获得定制的标志设计。用户可以从个人仪表板直接下载标志文件，并用于网站、名片和其他营销材料。
1. [[⭐] https://logodiffusion.com](https://logodiffusion.com) **Logo Diffusion。** Logo Diffusion是一款利用生成式人工智能来创建独特和定制的Logo的设计工具。用户可以通过文字提示、现有Logo或简单草图，快速生成符合自己需求的Logo设计。产品还提供2D转3D、图像转2D等功能，帮助用户实现品牌形象的多样化。Logo Diffusion定位于为用户提供简单、高效的Logo设计解决方案。
1. [[⭐] https://logofa.st](https://logofa.st) **LogoFast。** LogoFast是一个基于AI的免费在线标志制作工具,用户无需设计技能就可以在几秒内制作出漂亮和专业的标志。该产品拥有强大的AI功能,提供多种预设模板,支持自定义标志元素如图标、背景、大小、颜色等参数,操作简单快捷。主要优势是免费使用、效率高、易上手,适合新创企业、个人开发者等客户群体,可以助力他们快速高效地制作标志,减少设计成本。
1. [[⭐] https://logomakerr.ai](https://logomakerr.ai) **Logomakerr.ai。** LogoMaker是一个免费的AI logo制作工具，无需设计经验，只需几分钟就能创建出符合你需求的logo。它提供了数百个模板和AI生成的设计，帮助你快速开始你的品牌。LogoMaker已经得到了超过100万家企业的信任，拥有一切你需要的功能来打造你的品牌。
1. [[⭐] https://logomaster.ai](https://logomaster.ai) **Logomaster。** Logomaster.ai是一站式的专业Logo设计解决方案。用户可以轻松创建和编辑Logo，无需设计技能。使用Logomaster.ai，您可以在5分钟内获得专业Logo设计，而不是几天。我们提供多种定价方案，让您根据需求选择合适的方案。
1. [[⭐] https://logomaster.ai/de](https://logomaster.ai/de) **Logomaster。** Logomaster.ai ist Ihre All-in-One-Lösung für professionelles Logo-Design. Erstellen und bearbeiten Sie Logos mühelos, ohne Design-Fähigkeiten zu benötigen. Mit über 100 schönen Vorlagen können Sie in nur 5 Minuten ein einzigartiges und professionelles Logo erstellen. Logomaster.ai bietet auch eine Vielzahl von Funktionen, darunter Anpassungsmöglichkeiten für Schriftarten, Farben und Symbole. Die Nutzung von Logomaster.ai ist kostenlos, es stehen jedoch auch kostenpflichtige Abonnementpläne zur Verfügung, um Zugriff auf erweiterte Funktionen und hochauflösende Dateiformate zu erhalten. Mit Logomaster.ai können Sie Ihr Logo schnell und einfach erstellen, unabhängig von Ihrem Erfahrungsniveau.
1. [[⭐] https://looka.com](https://looka.com) **Looka。** AI辅助logo和品牌设计
1. [[⭐] https://magicstudio.com/zh](https://magicstudio.com/zh) **MagicStudio。** 图片处理必备效率神器！为你的图片提供神奇魔法
1. [[⭐] https://makelogo.ai](https://makelogo.ai) **Make Logo AI。** MakeLogoAI是一个使用人工智能生成独特标志的平台。它可以根据您的需求生成多个创意方向的文本标志设计，并提供低分辨率的预览供您选择。您可以使用我们的Logo Editor对颜色、文字和字体进行微调，并导出矢量化版本的标志。售价为$9.99，您将拥有标志的完全所有权和商业使用权。
1. [[⭐] https://mastergo.com/upcoming-ai/apply](https://mastergo.com/upcoming-ai/apply) **MasterGo AI。** MasterGo AI 是一款基于人工智能技术的智能助手，具有强大的功能和优势。它可以帮助用户高效处理各种任务，并提供个性化的解决方案。MasterGo AI 定价合理，并提供灵活的定位选项，适用于个人用户和企业用户。
1. [[⭐] https://midlibrary.io](https://midlibrary.io) **Midlibrary。** 风格多样！实用超2000+MJ提示词资源 `[error][403]Forbidden`
1. [[⭐] https://modao.cc/brand](https://modao.cc/brand) **墨刀 AI。** 墨刀AI是国内知名产品设计协作平台「墨刀」最新推出的AI产品原型设计助手，帮助产品设计人高效实现和落地创意，激发无限创造力。
1. [[⭐] https://mokker.ai](https://mokker.ai) **Mokker AI。** Mokker 是一款利用人工智能技术，自动为电商平台或营销材料提供高质量产品图片的在线工具。使用时，只需上传几张产品的照片，Mokker 就会根据您的产品特征和风格，生成逼真的背景和场景。产品内置了一系列高质量模板，如家具、车辆、食物、珠宝等，可直接复用。当然，使用时也可以创建自己产品的专属模板，通过再次描述产品特征和需要在背景图中剔除的元素，最终生成更符合预期的图片效果。
1. [[⭐] https://nijijourney.com/zh](https://nijijourney.com/zh) **NijiJourney。** MJ出品！面向二次元风格，内容细致拿捏专业到位
1. [[⭐] https://nv-tlabs.github.io/GET3D](https://nv-tlabs.github.io/GET3D) **GET3D。** Nvidia的2D转3D模型
1. [[⭐] https://palette.fm](https://palette.fm) **Palette。** 用AI为黑白照片着色
1. [[⭐] https://palette.tone-row.com](https://palette.tone-row.com) **Palette。** 生成整套UI调色板
1. [[⭐] https://pebblely.com/zh/](https://pebblely.com/zh/) **Pebblely 宝贝丽。** Pebblely 宝贝丽是一款 AI 作图神器，专为电商而生。它能一键生成针对产品的精美场景图，可直接使用在淘宝、亚马逊、小红书等电商和社交媒体。每月免费 40 张场景图。自带 20 种默认主题，也支持自定义背景。适用于小企业家、广告公司和设计师，能在任何场景下生成创意图。深受多个品牌的信任和喜爱。
1. [[⭐] https://picwish.cn](https://picwish.cn) **佐糖。** 佐糖是一款智能 AI 图像处理平台，提供丰富的图像处理工具，包括抠图、去水印、模糊变清晰、图片裁剪、图片压缩、黑白照片上色等功能。操作简便，无需学习，一键处理图像。通过智能 AI 处理，提高工作效率，释放创造力。
1. [[⭐] https://picwish.com](https://picwish.com) **PicWish。** 这是一个免费的平台，可以为您的图片制作透明背景。一键去除背景，秒速合成透明照片。PicWish提供所有功能均免费。立即上传您的图片免费尝试！
1. [[⭐] https://pixian.ai](https://pixian.ai) **Pixian AI。** PixianAI是一款图像背景去除工具，可以以极低的价格获得出色的质量，在测试版期间完全免费。
1. [[⭐] https://pixlr.com/cn](https://pixlr.com/cn) **Pixlr。** Pixlr是一家提供基于云的照片编辑服务的供应商，为消费者和公司在浏览器中提供编辑功能。Pixlr提供了一个平台，可以进行各种第三方集成。
1. [[⭐] https://pixso.cn](https://pixso.cn) **Pixso。** 设计师只需用简短的文本描述，无需手动绘制或寻找现成素材，即可迅速生成图像内容。
1. [[⭐] https://placeit.net/logo-maker](https://placeit.net/logo-maker) **Placeit Logo Maker。** Placeit Logo Maker是一个在线商标制作工具，提供数千个商标模板，用户可以轻松地选择并编辑它们，无需雇佣昂贵的设计师即可创建完美的商标。该产品的优势在于简单易用，提供了丰富的商标模板和编辑工具，价格合理，适用于个人和企业用户。
1. [[⭐] https://plask.ai](https://plask.ai) **Plask。** AI捕捉运动！帮你制作流畅的3D动画
1. [[⭐] https://ppt.isheji.com](https://ppt.isheji.com) **爱设计 PPT。** 爱设计PPT利用先进的AI技术,自动创建并优化PPT模版。爱设计的AI能为您生成适合的,高质量且独特的PPT模版。
1. [[⭐] https://promptomania.com](https://promptomania.com) **PromptoMania。** MJ和SD提示词生成器
1. [[⭐] https://qingtu.cn](https://qingtu.cn) **清图。** 在线修复！国产的 AI 图像处理工具
1. [[⭐] https://qoqo.ai](https://qoqo.ai) **QoQo。** AI快速创建用户旅程地图
1. [[⭐] https://remini.ai](https://remini.ai) **ReminiAI。** Remini使用创新的人工智能技术，将您的老照片转变为高清杰作。通过去模糊、降噪、修复老照片、图像放大、颜色修复、人脸增强、背景增强等功能，让您的照片更加清晰、细腻，达到专业级水平。Remini适用于社交平台、传承家族历史、打印服务、电商、教育、杂志等多个行业，让您的照片和视频内容更加出色。Remini还提供API支持，方便您将其集成到自己的产品中。下载Remini移动应用程序，随时随地使用AI对照片和视频进行增强。
1. [[⭐] https://taishan.qq.com/brand/](https://taishan.qq.com/brand/) **智绘设计。** 智绘设计是一个多场景智能设计服务商，提供正版设计素材和丰富的场景，帮助用户创意无限。它包括以下主要功能：秒速创作，一键出图；智能封面，一键智能生成精美封面；AI视频剪辑，一键智能生成影片视频；智能抠图，一键分离图像画面中的主体内容；人像动漫化，一键生成个性化的二次元动漫形象。智绘做图定位于提供高效创作工具和丰富的设计素材，适用于个人和商业用户。
1. [[⭐] https://tools.picsart.com](https://tools.picsart.com) **QuickTools By Picsart。** Picsart是全球最大的数字创作平台。其由人工智能驱动的工具使各个水平的创作者能够设计、编辑、绘制和分享照片和视频内容。
1. [[⭐] https://turbologo.com/logo-maker/templates/artificial-intelligence](https://turbologo.com/logo-maker/templates/artificial-intelligence) **Artificial Intelligence Logo Maker。** Artificial Intelligence Logo Maker提供了许多新的想法，帮助您在线创建logo设计。选择可定制的模板，释放您的灵感，开发符合您需求的人工智能logo设计。借助人工智能logo制作工具，您可以更轻松地享受永久的质量和设计功能。该工具提供了多种人工智能logo模板，您可以根据自己的需求进行定制。制作完成后，您可以下载自定义的人工智能矢量logo图像，并更新所有资产以使用新的logo。
1. [[⭐] https://uizard.io/autodesigner](https://uizard.io/autodesigner) **Uizard。** 设计界 ChatGPT！利用AI生成多屏的UI界面
1. [[⭐] https://upscales.ai](https://upscales.ai) **upscales.ai。** AI图像放大器利用数百万张图像进行训练，自动提高图像质量，使您的照片在几分钟内变得专业级！功能包括：图像放大，细节精炼，颜色增强等。优势是简单易用，快速高效。定价请参考官方网站。定位为满足个人、专业摄影师的图像处理需求。
1. [[⭐] https://vectorizer.ai](https://vectorizer.ai) **Vectorize。** Vectorizer可以使用AI快速轻松地将JPEG和PNG位图转换为SVG矢量图。
1. [[⭐] https://vmake.ai/zh-CN/image-watermark-remover](https://vmake.ai/zh-CN/image-watermark-remover) **图片去水印。** 图片去水印工具利用强大的 AI 技术，帮助用户快速去除图像上的水印，提高创作自由和社交媒体效果。产品定位于提供便捷的水印去除服务，以增强用户体验为目标。
1. [[⭐] https://whimsical.com](https://whimsical.com) **Whimsical。** Whimsical是一个集图表、白板等多种功能于一体的视觉协作平台。用户可以使用Whimsical创建流程图、线框图、思维导图和文档，快速将想法变为现实。它可以帮助团队成员更好地协作，从而更快地构建出更好的产品。Whimsical还可以与Jira、GitHub、Notion、Figma和Slack等常用工具集成，提高工作效率。
1. [[⭐] https://www.acgnai.art](https://www.acgnai.art) **触手 AI 。** 触手 AI 绘画专业版是一款面向插画师、漫画师、设计师等专业用户的国产 AI 绘图平台。支持文生成图、图生成图、参考生成图、AI 模型训练等功能，用户可在基础风格模型上使用叠加模型，也可以收藏各类画风、IP、场景、人物、设计类模型。产品定位于提升专业用户的绘画效率和创作品质。
1. [[⭐] https://www.ai.zitijia.com](https://www.ai.zitijia.com) **字体家AI神笔。** 造字神器！ 仅需8个汉字即可生成一套6K+中文字库
1. [[⭐] https://www.aiyou.art](https://www.aiyou.art) **艾绘。** 艾绘是一个结合了人工智能技术的绘本创作平台，它允许用户通过简单的输入来创作个性化的绘本故事。这个平台特别适合需要快速生成教育内容、品牌故事或个人创意作品的用户。艾绘通过其AI故事生成、AI绘画、图文编辑和仿真配音等功能，简化了绘本的创作流程，使得即使是没有专业设计或写作背景的用户也能轻松制作出高质量的绘本。产品背景信息显示，艾绘由湖南艾游互动科技有限公司开发，旨在通过技术降低创作门槛，激发创意。目前平台在公测期间，新用户注册赠送积分，可用于平台内的消费。
1. [[⭐] https://www.alpacaml.com](https://www.alpacaml.com) **Alpaca。** 个性化的AI工具包，可接入Ps的SD绘画插件
1. [[⭐] https://www.beautiful.ai](https://www.beautiful.ai) **Beautiful.ai。** Beautiful.ai是一个演示软件，为团队提供最佳设计、保持品牌一致性以及全球协作的功能。它应用先进的AI技术，使演示制作变得简单而美观。用户只需添加内容，Beautiful.ai会自动适应并应用出色的设计规则。不再需要在深夜调整文本和图片大小。每一个选择都能节省时间并带来出色的设计。
1. [[⭐] https://www.clickprompt.org/zh-CN](https://www.clickprompt.org/zh-CN) **ClickPrompt。** 一款专为 Prompt 编写者设计的工具
1. [[⭐] https://www.cutout.pro](https://www.cutout.pro) **Cutout Pro。** 全能视觉设计平台，包含 AI 照片和视频编辑工具。自动化背景移除、图像修复、平面设计等。
1. [[⭐] https://www.daftart.ai](https://www.daftart.ai) **Daft Art。** AI专辑封面图片生成器
1. [[⭐] https://www.designhill.com/tools/logo-maker](https://www.designhill.com/tools/logo-maker) **Designhill Logo Maker。** Designhill Logo Maker是一款AI-powered的在线logo制作工具，无需设计技能即可创建专业的logo。该工具拥有丰富的图形设计元素，包括字体、图标和图形，可以根据用户的喜好生成数百种设计。用户可以根据自己的品牌需求选择合适的logo样式、颜色和主题，并使用logo编辑器进行个性化修改。生成的logo可以下载为SVG、EPS、PNG和JPEG格式的高分辨率矢量文件，适用于印刷和数字版本。此外，该工具还提供品牌指南、24*7客户支持、彩色和透明背景的logo、黑白版本的logo以及100%可定制的logo等功能。Designhill Logo Maker适用于所有规模的企业和个人，是打造品牌形象的理想选择。
1. [[⭐] https://www.dora.run](https://www.dora.run) **Dora AI。** Dora AI可以做到使用自然语言生成、定制和部署网站，所有这些都在Dora强大的无代码编辑器中完成，他能在几秒钟内生成令人惊叹的、完全可编辑的网站，将静态设计转换为3D，自动化您的动画过程。
1. [[⭐] https://www.dora.run/ai](https://www.dora.run/ai) **Dora AI。** 一句话生成可交互&编辑的网站AI神器
1. [[⭐] https://www.erase.bg](https://www.erase.bg) **Erase.bg。** Erase.bg是一款免费在线工具，可以去除人物、动物或物体图片的背景，并提供高分辨率的透明图片下载。无需信用卡，适用于电子商务和个人使用。
1. [[⭐] https://www.fabrie.cn/ai/imagine](https://www.fabrie.cn/ai/imagine) **Fabrie AI。** Fabrie AI是一款AI设计助手，提供线稿渲染、提升分辨率、去除图片背景、增强细节、调节权重、多种基础风格等功能。可用于工业设计、3D角色、游戏设计、人像、服装设计、二次元、动漫设计、建筑等领域。支持多种渲染模式和LoRA风格模型，可在社区案例中选择多样的风格模型。Fabrie AI旨在提高设计效率，让创意可视化，协助设计师快速迭代。定价方案灵活，支持免费试用。
1. [[⭐] https://www.fotor.com/cn](https://www.fotor.com/cn) **Fotor。** Fotor是一款免费的在线照片编辑器，可以轻松编辑、裁剪、调整大小、添加效果和文字，创建拼贴等。
1. [[⭐] https://www.framer.com/ai](https://www.framer.com/ai) **Framer AI。** Framer AI是一个能够使用人工智能快速生成和发布网站的工具。通过提供详细信息，AI会生成独特的布局、文本和样式。您可以自由调整并删除不需要的部分，完全掌控网站的外观和功能。除了生成网站，Framer AI还提供了丰富的模板和资源库供用户使用。
1. [[⭐] https://www.goenhance.ai](https://www.goenhance.ai) **GoEnhance AI。** GoEnhance AI是一款基于人工智能的图像和视频增强工具。它可以实现视频到视频、图像增强和超分辨率scaling等功能。GoEnhance AI采用了最先进的深度学习算法,可以增强和上采样图像到极致的细节和高分辨率。它简单易用,功能强大,是创作者、设计师等用户释放创意的绝佳工具。
1. [[⭐] https://www.hama.app/zh](https://www.hama.app/zh) **Hama。** 使用轻松！一键无痕抹除画面内容
1. [[⭐] https://www.iconifyai.com](https://www.iconifyai.com) **Iconify。** IconifyAI是一款AI驱动的应用图标生成器，可以在几秒钟内为您的应用程序生成独特、漂亮、专业的图标。通过AI将文本转换为可直接使用的标识。
1. [[⭐] https://www.islide.cc](https://www.islide.cc) **iSlide。** iSlide 是一款简单、好用的 PPT 插件，拥有 30 万 + 原创可商用 PPT 模板、PPT 主题素材、PPT 案例、PPT 图表、PPT 图示、PPT 图标、PPT 插图和 800 万 + 正版图片。提供 38 个设计辅助实用功能，一键解决 PPT 设计制作中的各种难题。用户可通过 iSlide 快速找到符合需求的 PPT 素材和工具，提升 PPT 制作效率和专业度。
1. [[⭐] https://www.kaedim3d.com](https://www.kaedim3d.com) **KAEDIM。** 帮你迅速生成3D模型及纹理
1. [[⭐] https://www.khroma.co](https://www.khroma.co) **Khroma。** Khroma 利用人工智能学习您喜欢的颜色，并为您创建无限的调色板，帮助您快速发现、搜索和保存色彩组合。Khroma 的个性化算法训练神经网络，生成您喜欢的颜色，过滤您不喜欢的颜色。同时，还可以搜索和保存颜色组合，并获取颜色名称、hex 代码、RGB 值、CSS 代码以及 WCAG 辅助功能评分。
1. [[⭐] https://www.krea.ai/home](https://www.krea.ai/home) **Krea.ai。** KREA 是一款设计工具，拥有实时生成、AI 图像提升、AI 应用等功能。它能够帮助用户快速生成和增强图像，并提供多个简洁易用的 AI 应用。
1. [[⭐] https://www.laihua.com](https://www.laihua.com) **来画。** 来画是有创意的AI动画短视频制作平台，仅需几张图片，几段文字和声音简单组合， 即可在短时间内生成一个有趣的动画短视频。
1. [[⭐] https://www.logoai.com](https://www.logoai.com) **LogoAI。** LogoAi是一款AI助力的品牌构建平台，可以帮助您创建专业的Logo，设计相配套的形象，并通过符合品牌风格的社交媒体内容自动推广品牌。LogoAi的Logo设计引擎不仅理解Logo数据，还遵循最佳设计实践，确保Logo既美观又专业。从Logo模拟到Word和PPT模板，我们提供一切您需要的内容，让您的品牌更加出色。一键激活个人品牌中心，获得更一致的品牌视觉效果。选择数十种根据Logo样式和颜色自定义的名片设计。Facebook封面、Twitter头像和Instagram故事等社交媒体内容都是您品牌套餐的一部分。无论是招聘还是推广，您都可以自定义并下载您品牌的海报。
1. [[⭐] https://www.logobean.com](https://www.logobean.com) **logobean。** logobean是一款在线Logo制作工具，用户可以通过输入公司或品牌名称，快速生成多种Logo样式，并可自由编辑和调整。该产品提供高质量的PNG和SVG格式的Logo文件，以及100多种社交媒体平台的营销图片和品牌指南等。logobean的定价分为基础版和高级版，分别为29美元和49美元，用户可以根据自己的需求选择购买。
1. [[⭐] https://www.logosc.cn](https://www.logosc.cn) **标小智。** 标小智是一款智能LOGO在线设计生成器。只需输入品牌名称就能免费在线生成公司logo设计，商标设计，以及配套企业VI助您打造个性品牌。
1. [[⭐] https://www.mindshow.fun](https://www.mindshow.fun) **MindShow。** MindShow 是一款利用人工智能生成 PPT 模版的软件。它可以根据用户提供的文字内容，自动生成结构化的演示内容，大大节省排版和设计的时间。MindShow 提供多种主题和布局，用户可以随意切换和修改。使用 MindShow，用户可以在线演示或导出 PPTX 文件，方便灵活。MindShow 旨在帮助用户提升工作效率，解放他们的时间和精力，不再烦恼排版和设计。
1. [[⭐] https://www.muglife.com](https://www.muglife.com) **Mug Life。** Mug Life通过将计算机图形学专业知识与最新的计算机视觉技术相结合，创造出令人惊叹的3D角色。其技术分为三个阶段：拆解、动画和重构，结合社交平台，让用户能够连接和分享创作。
1. [[⭐] https://www.noya.io](https://www.noya.io) **Noya。** 让线框图变成高保真设计
1. [[⭐] https://www.photomagic.cn](https://www.photomagic.cn) **PhotoMagic。** 快速创建商业图片的 AI 工具
1. [[⭐] https://www.photorestore.io](https://www.photorestore.io) **PhotoRestore.io。** PhotoRestore.io 是一家提供免费 AI 照片修复服务的网站，利用先进的算法修复模糊、褪色或损坏的照片，为用户呈现清晰高质量的图像。用户可在保护隐私和数据安全的前提下体验恢复照片的魔法，创造代代传承的珍贵回忆。
1. [[⭐] https://www.photoroom.com](https://www.photoroom.com) **Photoroom。** 在几秒钟内创建高品质的图像。只需轻点一下，即可去除背景并合成一个能展示产品或模特的图像。PhotoRoom赋予每个人设计超能力，因为你编辑的是物体而不是像素。PhotoRoom是一款图像编辑应用程序，让您通过编辑物体来捕捉、编辑和混合图像。
1. [[⭐] https://www.piccopilot.com](https://www.piccopilot.com) **Pic Copilot。** Pic Copilot是一个利用图像生成模型为电商提供的AI驱动图片优化工具。它能够通过对大量图片点击量数据的训练,有效提高图片的点击转化率,从而优化电商的营销效果。其关键优势是提高图片的点击转化率,从而提升电商营销效果。它是阿里巴巴团队训练的数据结果,能够显著优化图片的点击转化表现。
1. [[⭐] https://www.picwish.com](https://www.picwish.com) **PicWish。** PicWish是一个人工智能驱动的图像处理平台,帮助用户高效编辑图片。它提供强大的工具,如背景移除、图像放大、照片修复、JPG转换器、图像压缩、人脸增强和照片增强。使用PicWish,用户可以一键移除背景、去模糊图像、增强分辨率和修复缺陷。该平台非常易于上手,没有学习曲线。它通过使照片编辑简单又专业,释放了创造力。PicWish极大地提高了图形设计师、摄影师、电子商务卖家和营销人员的工作效率。
1. [[⭐] https://www.plasmo.ai](https://www.plasmo.ai) **Plasmo。** 将草图转为3D模型
1. [[⭐] https://www.polymet.ai](https://www.polymet.ai) **Polymet。** Polymet是一个利用人工智能技术帮助用户快速从创意到原型的设计工具。它通过连接Figma和代码库，使用户能够快速设计并迭代，同时导出符合设计模式的生产就绪代码。Polymet的主要优点包括提高设计和迭代速度，无缝连接设计工具和代码库，以及通过AI辅助设计，减少手动编码工作量，从而加速产品上市时间。
1. [[⭐] https://www.ponzu.gg](https://www.ponzu.gg) **Ponzu。** AI生成3D无缝贴图纹理
1. [[⭐] https://www.productai.photo](https://www.productai.photo) **ProductAI。** ProductAI是一个AI驱动的产品图片生成平台。用户只需上传产品图片,选择场景模板,就可以在几分钟内生成高质量的商业产品图片。该平台采用了最先进的生成式AI技术,无需用户进行复杂的提示,即可自动生成逼真的产品渲染图。该服务面向各类创业公司、品牌商、平面设计师等用户群体,可以显著提高他们内容生产的效率,降低产品图片的成本。
1. [[⭐] https://www.quququ.cn](https://www.quququ.cn) **水印一键去去去。** 水印一键去去去是一款智能 AI 图像处理网站，提供在线去水印、自动抠图、模糊照片变清晰等功能。采用人工智能技术，支持批量去除图片中的文字、标志，无痕、不糊图！
1. [[⭐] https://www.remove.bg](https://www.remove.bg) **Remove.bg。** 去背神器是一款可以一键去除图片背景的工具。它通过智能算法分析图片，将背景与主体分离，实现快速、准确的去背效果。该工具操作简单，无需任何设计经验，适用于个人用户和设计专业人士。去背神器提供免费试用和付费套餐，付费套餐提供更多高级功能和更大的使用额度。
1. [[⭐] https://www.restorephotos.io](https://www.restorephotos.io) **Restorephoto。** 效果惊艳的AI修复面容模糊的照片
1. [[⭐] https://www.runwayml.com](https://www.runwayml.com) **Runwayml。** Runway是一家应用人工智能研究公司，塑造着艺术、娱乐和人类创造力的下一个时代。我们提供多模态AI系统，帮助实现人类创造力的新纪元。
1. [[⭐] https://www.shuiyinyun.com](https://www.shuiyinyun.com) **水印云。** 水印云是一款集图片去水印等多功能去水印软件，采用先进的 AI 技术，能快速识别并删除照片中的文字、logo 等不需要的内容，保持高清画质。
1. [[⭐] https://www.sloyd.ai](https://www.sloyd.ai) **Sloyd。** 快速生成3D游戏资产
1. [[⭐] https://www.tiamat.world](https://www.tiamat.world) **Tiamat。** 国内自研的AI作画系统！内测中
1. [[⭐] https://www.tracejourney.com](https://www.tracejourney.com) **Tracejourney。** 拯救MJ渣画质！图片一键转矢量
1. [[⭐] https://www.upscale.media/zh](https://www.upscale.media/zh) **Upscale media。** AI图片放大增强工具使用先进的人工智能技术，可将图像放大至2倍或4倍，同时保留纹理与细节。提供超分辨率处理，让您的图像焕发新生。我们有免费使用的选项，也提供不同套餐供个人和企业用户选择。欢迎访问官方网站了解更多信息。
1. [[⭐] https://www.upscayl.org](https://www.upscayl.org) **Upscayl。** 模糊图片秒变超清！开源免费 AI 图片无损放大工具
1. [[⭐] https://www.usegalileo.ai](https://www.usegalileo.ai) **Galileo AI。** AI生成可编辑的UI界面
1. [[⭐] https://www.usesuperflow.com](https://www.usesuperflow.com) **Superflow。** AI辅助高效网站协作设计
1. [[⭐] https://www.visily.ai](https://www.visily.ai) **Visily。** 实用！AI轻松将手绘线框转换为高保真度
1. [[⭐] https://www.whee.com](https://www.whee.com) **WHEE。** WHEE是一款AI绘画与图片生成器，提供一站式AI视觉创作服务。
1. [[⭐] https://www.wix.com/logo/maker](https://www.wix.com/logo/maker) **Wix Logo Maker。** Wix Logo Maker 是一款由人工智能驱动的在线设计工具，允许你免费创建和定制专业 Logo。通过回答几个简单问题，即可获得符合你需求的独特 Logo。
1. [[⭐] https://www.x-design.com](https://www.x-design.com) **美图 AI PPT。** 美图设计室是一款由中国互联网公司美图公司开发的图像处理、照片编辑和设计软件。
1. [[⭐] https://www.xiaochuanai.com/youchuan/](https://www.xiaochuanai.com/youchuan/) **悠船。** 悠船是Midjourney国内中文版本人工智能图像生成桌面客户端软件。它可以通过文字描述来生成图像,支持团队协作和高级控制,提供多种定价方案。主要功能包括文生图、协作创作、控制面板等。适合创意工作者、设计师、艺术家等群体使用,可以提高创意效率,激发灵感。
1. [[⭐] https://www.yijianlogo.com](https://www.yijianlogo.com) **一键Logo设计。** 一键Logo设计是一款基于AI大数据计算的智能设计生成器，只需简单输入名称口号，选择行业偏好，即可一键生成LOGO。所有元素均可调整修改，多种格式文件均可下载导出。一次购买长期使用，各种模板字体均可商用。适用于需要快速生成LOGO的个人、企业、团队等用户。
1. [[⭐] https://www.zmo.ai](https://www.zmo.ai) **ZMO.AI。** ZMO可以轻松的生成令人惊叹的动漫、艺术或图像。
1. [[⭐] https://yige.baidu.com](https://yige.baidu.com) **文心一格。** 百度旗下AI艺术和创意辅助平台
1. [[⭐] https://yunxiu.meitu.com/home](https://yunxiu.meitu.com/home) **美图云修。** 商业级AI影像处理工具
1. [[🚀] https://www.canva.com/ai-image-generator](https://www.canva.com/ai-image-generator) **Canva Text to Image。** 将文字和短语变成美丽的图片。
1. [[🚀] https://openai.com/research/dall-e](https://openai.com/research/dall-e) **DALL·E2。** OpenAI出品的绘画工具
1. [[🚀] https://changestyleai.com](https://changestyleai.com) **Change Style AI。** 人工智能多风格肖像生成器！能够AI生成30种照片
1. [[🚀] https://creator.nightcafe.studio](https://creator.nightcafe.studio) **NightCafe。** 用AI生成惊艳的艺术品
1. [[🚀] https://designer.microsoft.com](https://designer.microsoft.com) **Microsoft Designer。** 微软推出的AI平面设计工具，实现快速完成设计加工。中国区不可用。
1. [[🚀] https://getimg.ai](https://getimg.ai) **Getimg。** 多功能AI图片编辑工具，让文字变成吸睛的视觉图像
1. [[🚀] https://lumalabs.ai](https://lumalabs.ai) **Luma Labs。** 将视频转为游戏资产
1. [[🚀] https://skybox.blockadelabs.com](https://skybox.blockadelabs.com) **Text to Skybox。** AI生成360°无缝环境贴图
1. [[🚀] https://waifulabs.com](https://waifulabs.com) **WaifuLabs。** 一键生成动漫二次元头像

### AI 视频生成 (99)

1. [[⭐⭐⭐] https://runwayml.com](https://runwayml.com) **Runway。** Runway提供一系列易于使用的工具和平台，利用人工智能技术创造出令人惊叹的艺术作品和创意内容。他们的技术可以用于图像生成、视频编辑、音频合成、文字生成等多个创作领域。
1. [[⭐⭐] https://ttsmaker.cn](https://ttsmaker.cn) **TTSMAKER。** 免费的在线文本转语音神器
1. [[⭐] http://d-id.com](http://d-id.com) **D-ID。** D-ID是一个创意AI平台，使用AI技术将照片转换为视频。它可以轻松地从文本生成视频，为培训材料、内部沟通、营销等提供AI驱动的、经济实惠的视频解决方案。D-ID还可以实现与聊天机器人进行面对面的对话，使用户获得更加沉浸式和人性化的体验。D-ID还提供API和自助工作室，供开发人员使用。
1. [[⭐] https://ai.invideo.io](https://ai.invideo.io) **InVideo。** 利用invideo AI，您可以立即将任何内容或想法转化为视频。
1. [[⭐] https://ai.jurilu.com](https://ai.jurilu.com) **巨日禄AI。** 巨日禄AI是一款全网性能卓越的故事AI绘画转视频工具，旨在让0基础小白也能轻松上手，快速实现从文案到视频的制作。该工具通过分析大量剧本数据和影视作品，为用户提供各种类型的故事情节和角色设置，帮助用户快速找到灵感，减少构思剧本的困难和犹豫。无需本地部署，快速出图，支持配音配乐，一站式解决小说、漫画推文等需求。角色固定，画风统一，提供多种风格选择。AI自动解析分镜，解析提示词，操作简单流畅，即使零基础小白也能轻松上手，做出精美的视频作品。
1. [[⭐] https://aigc.baidu.com](https://aigc.baidu.com) **度加创作工具。** 百度旗下产品，打造人人可用的AI创作工具
1. [[⭐] https://aigc.yizhentv.com](https://aigc.yizhentv.com) **一帧秒创。** 一帧秒创是基于秒创AIGC引擎的智能视频创作平台，包含AI数字人、AI帮写、AI视频、AI作画等AIGC工具。
1. [[⭐] https://app.artflow.ai](https://app.artflow.ai) **Artflow AI。** Artflow.ai可以在浏览器中借助人工智能帮助你创建独特的动画故事，包括原创角色、场景和对话。让你的创意流淌，以全新的方式呈现你的故事。
1. [[⭐] https://app.deepbrain.io/dashboard](https://app.deepbrain.io/dashboard) **DeepBrain AI。** AI Studios提供了一个用户友好的仪表板，让用户可以轻松创建和管理AI项目。该平台可能包含多种AI工具和功能，以支持用户在图像、视频、音频等领域的创作和编辑。
1. [[⭐] https://audo.ai](https://audo.ai) **Audo Studio。** 听起来很棒！AI一键清除音频背景杂音
1. [[⭐] https://b.jimmylv.cn](https://b.jimmylv.cn) **BibiGPT。** 一键总结B站音视频内容
1. [[⭐] https://bibigpt.co](https://bibigpt.co) **BibiGPT。** 一键总结B站音视频内容
1. [[⭐] https://clipchamp.com/zh-hans](https://clipchamp.com/zh-hans) **Clipchamp。** 将文本转为视频旁白！几分钟即可创建导出视频
1. [[⭐] https://colossyan.com](https://colossyan.com) **Colossyan Creator。** Colossyan Creator 是一款 AI 视频生成器，能够从文本快速生成 AI 视频。它提供了丰富的功能，包括根据文本创建学习视频、将 PDF 和 PPT 转化为视频、选择多样的 AI 主持人、自动翻译为多种语言等。Colossyan Creator 可广泛应用于企业学习、培训以及企业内部沟通等场景。定价方面，请咨询官方网站了解详细信息。
1. [[⭐] https://creatorkit.com/ai-product-photos](https://creatorkit.com/ai-product-photos) **AI Product Photos。** AI产品照片生成器是一个能够在几秒钟内生成增加销售的产品图片和照片的工具。它可以将产品图片转化为专业的产品照片，提高销售效果。使用这个工具，您可以添加AI背景，避免标签模糊或形状变化的问题。我们的AI照片生成器采用了全新的文本到图像扩散模型，专门为销售进行了训练和优化。您可以从Shopify中直接生成照片，并将其与我们的视频模板配合使用。生成的产品图片可以免费使用，并且您只需要为您真正喜欢的图片付费。
1. [[⭐] https://democreator.wondershare.com](https://democreator.wondershare.com) **DemoCreator。** DemoCreator可以记录您屏幕上的所有内容，可以使视频更具创意。可以平移和缩放，实时屏幕绘制，使用绿幕技术等等。
1. [[⭐] https://designs.ai/cn](https://designs.ai/cn) **Designs AI。** 免费AI设计。使用生成型 AI 创建图像、视频等。利用人工智能的力量提升您的社交媒体营销水平。
1. [[⭐] https://enriccorona.github.io/vlogger/](https://enriccorona.github.io/vlogger/) **VLOGGER。** VLOGGER是一种从单张人物输入图像生成文本和音频驱动的讲话人类视频的方法，它建立在最近生成扩散模型的成功基础上。我们的方法包括1)一个随机的人类到3D运动扩散模型，以及2)一个新颖的基于扩散的架构，通过时间和空间控制增强文本到图像模型。这种方法能够生成长度可变的高质量视频，并且通过对人类面部和身体的高级表达方式轻松可控。与以前的工作不同，我们的方法不需要为每个人训练，也不依赖于人脸检测和裁剪，生成完整的图像（而不仅仅是面部或嘴唇），并考虑到正确合成交流人类所需的广泛场景（例如可见的躯干或多样性主体身份）。
1. [[⭐] https://etna.7volcanoes.com](https://etna.7volcanoes.com) **Etna。** Etna是七火山科技开发的AIGC模型，专注于根据文本描述生成相应的视频内容
1. [[⭐] https://fancy.tech](https://fancy.tech) **Fancy Tech。** FancyTech是一个使用人工智能生成时尚风格的平台。通过AI视频和AI图像工具，用户可以上传自己的服装选择，并将其与各种背景合并，从而观察其风格效果。FancyTech让时尚创作变得简单有趣，无论是个人使用还是商业应用都能得到满足。
1. [[⭐] https://fanyi.caiyunapp.com](https://fanyi.caiyunapp.com) **彩云小译。** 兼具“你边说，我边译”的字字幕翻译功能。包括文字翻译、文档翻译、网页翻译、术语库、浏览器插件和双语对照服务
1. [[⭐] https://filmora.wondershare.com](https://filmora.wondershare.com) **Filmora。** Wondershare Filmora是一款简单的视频编辑器，可让您在Windows和Mac上编辑视频和音频。下载Filmora创建带有标题、转场和创意视觉效果的令人惊叹的影片。
1. [[⭐] https://finalframe.net/dev3/](https://finalframe.net/dev3/) **Finalframe。** Finalframe是一个基于AI的视频剪辑工具。它支持将文本转化为视频,用户只需要输入文字描述,Finalframe就可以自动生成视频素材。该工具还提供了一个非常直观方便的剪辑界面,用户可以通过拖拽、添加、删除等操作,快速剪辑生成想要的视频作品。Finalframe可以大大简化视频制作流程,使用户无需学习专业编辑软件就可以轻松获得高质量的创意视频。
1. [[⭐] https://fliki.ai](https://fliki.ai) **Fliki。** 高效帮用户创建视频，具有文本转语音功能
1. [[⭐] https://fullpeace.cn](https://fullpeace.cn) **风平智能。** 风平 IP 智造平台是基于 AIGC 的智能化 IP 打造平台，致力于提供虚拟数字人定制、AI 短视频内容生产和数字人直播的一站式解决方案。通过结合领先的 AI 技术，平台实现了数字人的高质量生产和互动能力，为用户打造全新的数字人 IP 体验。
1. [[⭐] https://gifshift.xyz](https://gifshift.xyz) **GifShift。** GifShift提供了一个简单的三步流程，用户可以上传GIF或从图库中选择一个，然后输入描述性的提示，以生成具有标志性角色或风格的新GIF版本。该服务由fal.ai提供支持。
1. [[⭐] https://github.com/Boese0601/MagicDance](https://github.com/Boese0601/MagicDance) **MagicDance。** MagicDance是一种新颖有效的方法，可以生成逼真的人类视频，实现生动的动作和面部表情转移，以及一致的2D卡通风格动画零调优生成。通过MagicDance，我们可以精确生成外观一致的结果，而原始的T2I模型（如稳定扩散和ControlNet）很难准确地保持主题身份信息。此外，我们提出的模块可以被视为原始T2I模型的扩展/插件，而不需要修改其预训练权重。
1. [[⭐] https://github.com/Picsart-AI-Research/StreamingT2V](https://github.com/Picsart-AI-Research/StreamingT2V) **StreamingT2V。** StreamingT2V 是一种先进的自回归技术，可以创建具有丰富动态运动的长视频，没有任何停滞。它确保视频中的时间一致性，与描述性文本紧密对齐，并保持高帧级图像质量。
1. [[⭐] https://github.com/Zejun-Yang/AniPortrait](https://github.com/Zejun-Yang/AniPortrait) **AniPortrait。** AniPortrait是一个根据音频和图像输入生成会说话、唱歌的动态视频的项目。它能够根据音频和静态人脸图片生成逼真的人脸动画，口型保持一致。支持多种语言和面部重绘、头部姿势控制。功能包括音频驱动的动画合成、面部再现、头部姿势控制、支持自驱动和音频驱动的视频生成、高质量动画生成以及灵活的模型和权重配置。
1. [[⭐] https://github.com/williamyang1991/FRESCO](https://github.com/williamyang1991/FRESCO) **FRESCO。** CVPR 2024会议论文项目，用于零样本视频翻译的空间-时间对应方法
1. [[⭐] https://haiper.ai](https://haiper.ai) **Haiper。** Haiper AI 是构建下一代内容创作的最佳感知基础模型的使命。它提供以下主要功能：文本转视频，图片动画，视频重绘，导演视角。Haiper AI 可以将文字内容和静态图片无缝转化为动态视频，只需拖放图像即可使其栩栩如生。使用 Haiper AI 的重绘工具，您可以轻松修改视频的颜色、纹理和元素，以提升视觉内容的品质。通过高级控制工具，您可以像导演一样调整镜头角度、灯光效果、角色姿势和物体运动。Haiper AI 适用于各种场景，如内容创作、设计、营销等。定价请参考官方网站。
1. [[⭐] https://humanaigc.github.io/animate-anyone/](https://humanaigc.github.io/animate-anyone/) **Animate Anyone。** Animate Anyone旨在通过驱动信号从静态图像生成角色视频。我们利用扩散模型的力量，提出了一个专为角色动画量身定制的新框架。为了保持参考图像中复杂外观特征的一致性，我们设计了ReferenceNet来通过空间注意力合并详细特征。为了确保可控性和连续性，我们引入了一个高效的姿势指导器来指导角色的动作，并采用了一种有效的时间建模方法，以确保视频帧之间的平滑跨帧过渡。通过扩展训练数据，我们的方法可以为任意角色制作动画，与其他图像到视频方法相比，在角色动画方面取得了出色的结果。此外，我们在时尚视频和人类舞蹈合成的基准上评估了我们的方法，取得了最先进的结果。
1. [[⭐] https://humanaigc.github.io/emote-portrait-alive/](https://humanaigc.github.io/emote-portrait-alive/) **EMO。** 阿里巴巴的EMO:  是一款生成具有表情丰富的面部表情视频的工具，可以根据输入的角色图像和声音音频生成各种头部姿势和表情的声音头像视频。支持多语言歌曲和各种肖像风格，能够根据音频节奏生成动态、表现丰富的动画角色。
1. [[⭐] https://inksprout.co](https://inksprout.co) **Inksprout Video。** Inksprout是一款AI助手，可以从博客生成社交视频。它使用AI生成字幕，让您可以在几秒钟内生成引人注目的、简洁的社交视频。您只需输入博客的URL，AI将自动摘要文章内容，并根据摘要生成视频。您可以使用这些视频在多个社交媒体平台上分享，并提高用户参与度。Inksprout提供免费计划，同时还有更多功能丰富的付费计划可供选择。
1. [[⭐] https://jollytoday.com](https://jollytoday.com) **GhostCut。** GhostCut 可以帮助创作者、商家和 MCN（多渠道网络）通过高效完成视频翻译、硬字幕翻译和字幕移除等任务，进行本地化的视频营销。
1. [[⭐] https://kaipai.meitu.com](https://kaipai.meitu.com) **开拍。** 开拍是一款集合了多种AI辅助创意功能的应用软件，包括AI帮你写文案、AI脚本、AI提词器、AI人像美颜、AI眼神矫正、AI主播、AI帮你剪视频等功能。用户可以快速地生成口播文案、拍摄高质量视频、美化人像、自动剪辑视频等，节省创作时间，提高创作效率。
1. [[⭐] https://kling.kuaishou.com](https://kling.kuaishou.com) **可灵大模型。** 可灵大模型是一款具备强大视频生成能力的自研大模型，采用先进的技术实现长达 2 分钟视频生成、模拟物理世界特性、概念组合能力等，可生成电影级画面。
1. [[⭐] https://kreadoai.com](https://kreadoai.com) **KreadoAI。** KreadoAI是一款数字营销创作平台，通过输入文本或关键词，可以创作真实/虚拟人物的多语言口播视频。为创作者提供AI赋能。同时，KreadoAI还提供模特创作平台，可以快速生成您的虚拟数字人，适用于假发、服装、美妆、眼镜等电商业务场景。
1. [[⭐] https://ltx.studio](https://ltx.studio) **LTX Studio。** LTX Studio是一个集成了AI技术的创新视频制作平台，它允许用户从概念到最终剪辑，全面控制视频的各个方面。该平台通过AI技术，将创意转化为连贯的视频故事，提供角色一致性、自动编辑、深度帧控制等功能，旨在简化视频制作流程，提高创作效率。
1. [[⭐] https://meeting.iflyrec.com](https://meeting.iflyrec.com) **讯飞会议。** 讯飞会议是安徽听见科技有限公司推出的一款AI高清视频会议系统，专注于提供线上远程网络云会议服务。它基于星火大模型，能够自动生成会议纪要，准确率高达97.5%。产品支持多端协同，包括PC、Mac、手机等，提供高清稳定流畅的音视频体验，同时具备弱网优化，确保声音清晰不卡顿，视频流畅不断。此外，讯飞会议还提供安全稳定的服务，采用AES256和SSL加密技术，保障数据安全。
1. [[⭐] https://meeting.tencent.com/ai/](https://meeting.tencent.com/ai/) **腾讯会议·AI小助手。** 腾讯会议是腾讯自主研发的一款会议软件,提供视频会议、网络研讨会、会议室等产品和服务,支持桌面客户端、移动端等多端使用。可实时共享屏幕,支持白板互动等,实现高清音视频会议。还提供开放API,可深度定制开发。适合企业员工在线会议、网络课堂、远程面试等多种场景使用。
1. [[⭐] https://member.bilibili.com/york/bilibili-studio](https://member.bilibili.com/york/bilibili-studio) **必剪 Studio。** 必剪 Studio 是一款数字分身工具，支持形象驱动和音色定制。用户可以定制专属数字分身，用于配音、口播等场景。产品背景为解决用户在音频制作中个性化需求的问题，定位于提供便捷的数字分身创作工具。
1. [[⭐] https://modelscope.cn/studios/Damo_XR_Lab/motionshop/summary](https://modelscope.cn/studios/Damo_XR_Lab/motionshop/summary) **Motionshop。** Motionshop是一个 AI 角色动画的网站，它能够根据上传的视频自动检测视频中的人物，并替换成 3D 卡通角色模型，生成有趣的 AI 视频。该产品提供简单易用的界面和强大的 AI 算法，让用户能够轻松将自己的视频内容转化为生动有趣的动画作品。
1. [[⭐] https://mubert.com](https://mubert.com) **Mubert。** 使用人工智能为您的视频内容、播客和应用程序生成音乐。
1. [[⭐] https://pixverse.ai](https://pixverse.ai) **PixVerse。** PixVerse是一款创新的AI创作平台，利用强大的生成式AI释放视频创作的全部潜力，让您的内容令人惊叹和难忘。PixVerse通过智能算法和深度学习技术，可以将您的创意转化为令人惊叹的视觉效果。我们提供丰富的功能，包括生成令人惊叹的场景、特效、音乐等，以满足不同类型视频的需求。PixVerse还提供定制化的选项，使您能够根据自己的需求进行个性化定制。无论您是想制作个人视频，还是需要为商业项目创作独特的宣传片，PixVerse都是您理想的选择。
1. [[⭐] https://play.ht](https://play.ht) **Play。** 基于人工智能将文本转位逼真的语音
1. [[⭐] https://senseavatar.sensetime.com](https://senseavatar.sensetime.com) **商汤如影。** 商汤日日新 SenseNova 大模型体系提供多种大模型及能力，助力各行业智能化创新，以大算力引领通用人工智能发展。
1. [[⭐] https://shanjian.tv](https://shanjian.tv) **闪剪-AI数字人。** 闪剪是一款 AI 数字人视频生成工具，用户可以定制自己的数字人，只需输入文字即可生成口播视频。
闪剪具备形象、声音克隆；链接成片以及直播切片等功能，手机端和网页端通用。
1. [[⭐] https://soundraw.io](https://soundraw.io) **Soundraw。** 用AI制作免费的音乐
1. [[⭐] https://speaking.ai](https://speaking.ai) **Speaking AI。** 一键克隆！效果真实的文本转语音神器
1. [[⭐] https://taishan.qq.com/brand/](https://taishan.qq.com/brand/) **智绘设计。** 智绘设计是一个多场景智能设计服务商，提供正版设计素材和丰富的场景，帮助用户创意无限。它包括以下主要功能：秒速创作，一键出图；智能封面，一键智能生成精美封面；AI视频剪辑，一键智能生成影片视频；智能抠图，一键分离图像画面中的主体内容；人像动漫化，一键生成个性化的二次元动漫形象。智绘做图定位于提供高效创作工具和丰富的设计素材，适用于个人和商业用户。
1. [[⭐] https://tianyin.163.com](https://tianyin.163.com) **网易天音。** 网易出品！一站式AI编曲渲染导出，零基础写歌
1. [[⭐] https://uberduck.ai](https://uberduck.ai) **uberduck。** 开源的AI语音生成平台
1. [[⭐] https://virbo.wondershare.cn](https://virbo.wondershare.cn) **万兴播爆。** Virbo是一款万兴科技旗下的数字人营销视频创作神器。
1. [[⭐] https://vizard.ai](https://vizard.ai) **Vizard AI。** 一款 AI 驱动的视频生成和编辑器，可将一段长视频瞬间转换成10多个剪辑。AI 驱动的在线视频编辑器和屏幕录像机，让您能够创建病毒式视频剪辑。自动字幕生成器。
1. [[⭐] https://weta365.com/conduct](https://weta365.com/conduct) **奇妙元。** 奇妙元提供真人形象克隆、声音克隆、3D 数字人定制和 IP 活化等超前沿的克隆与定制服务。通过高质量数据输入和迭代克隆模型，实现高清还原真人形象。用户可使用真人形象克隆终身，通过输入文字使数字人说话，表情神态可比真人。此外，奇妙元还提供数字人视频制作、直播会员和定制服务等功能。数字人视频制作可一键将文本转为视频，无需繁琐拍摄；直播会员可选择真人数字人或 3D 数字人进行直播，为用户挣钱；定制服务可根据用户需求定制数字人形象。奇妙元的产品广泛应用于 20 多个行业，500 多个客户已经受益于数字人定制与克隆服务。
1. [[⭐] https://wonderdynamics.com](https://wonderdynamics.com) **Wonder Studio。** 真人表演自动转换为CG
1. [[⭐] https://www.aimix.pro](https://www.aimix.pro) **AIMIX智剪。** AIMIX智剪是一款集短视频批量剪辑、字幕生成、配音合成等多项功能于一体的短视频内容生产工具。它可以实现智能语音识别、视频脚本设计、快速混剪、字幕制作、配音合成等,大幅提高短视频内容制作效率。关键优势是内容原创性强、支持批量生产、简单易用。定位于需要大量原创短视频内容的个人或机构用户。
1. [[⭐] https://www.animiz.cn/microvideo](https://www.animiz.cn/microvideo) **万彩微影。** 万彩微影，一款全能的AI智能短视频制作软件合集，专门制作热门的手绘动画视频，文字动画视频，还能一键把图文/文章/PPT转换为视频。
1. [[⭐] https://www.arcads.ai](https://www.arcads.ai) **Arcads。** Arcads提供AI视频广告生成器，允许用户快速从文本创建视频广告，特别适合需要大量视频内容的品牌和营销团队。
1. [[⭐] https://www.beatoven.ai](https://www.beatoven.ai) **Beatoven.ai。** Beatoven.ai利用先进的AI音乐生成技术，为您的视频或播客创作独特的基于情感的音乐，以适应您内容的每个部分。我们提供免费试用，定价详细请访问官方网站。
1. [[⭐] https://www.capcut.cn](https://www.capcut.cn) **剪映专业版。** 强大的国产剪辑工具！支持AI智能生成字幕和配音
1. [[⭐] https://www.chanjing.cc](https://www.chanjing.cc) **蝉镜。** 蝉镜是一个在线数字人视频创作平台，利用 AI 简化视频创作过程，提供 AI 数字人播报、短视频制作、分身定制等服务。广告营销、跨境电商、短视频口播等领域的用户可以在此提升创作效率、降低成本。
1. [[⭐] https://www.chuangzuomao.cn](https://www.chuangzuomao.cn) **创作猫。** 创作猫平台致力于为短视频创作者提供从创作到变现全流程的一站式解决方案。提供丰富的模板、素材、课程、工具等资源,帮助用户轻松创作优质短视频。同时,平台内置大量变现任务,用户可以通过推广任务进行变现。创作猫采用开放的小程序能力,构建了丰富的生态,覆盖用户各种使用场景。平台还采用创作者内容分成的方式,不断供给优质内容,形成闭环。整体而言,创作猫提供内容丰富、功能全面、易于上手的短视频创作与变现解决方案。
1. [[⭐] https://www.creatifyone.com](https://www.creatifyone.com) **创一AI。** 创一AI是一款专业的AI短视频脚本创作工具，旨在通过人工智能技术帮助用户快速生成高质量的短视频脚本。该产品利用先进的自然语言处理技术，结合用户需求，能够自动分析并创作出符合主题的脚本内容，大大提高了视频创作者的工作效率。创一深入理解以及对用户需求的精准把握，价格定位为免费体验，以吸引更多用户使用。
1. [[⭐] https://www.cyrinn.cn](https://www.cyrinn.cn) **赛灵力。** 赛灵力虚拟数字人工厂致力于 2D 虚拟人、3D 虚拟人、声音克隆等 AI 技术探索和产业应用，为企业、政府、个人提供虚拟数字人 AI 视频创作、个人形象定制、声音定制、智能语音合成等服务。
1. [[⭐] https://www.d-id.com](https://www.d-id.com) **D-ID。** AI真人视频创作工具。
1. [[⭐] https://www.dreamavatar.com](https://www.dreamavatar.com) **DreamAvatar。** DreamAvatar是一个基于人工智能技术的数字人生成平台,能够通过简单的文本描述或素材上传快速生成高质量的数字人形象,还支持自定义调整数字人的各种特征。该平台具有操作简单、生成效果逼真的优势,可以广泛应用于数字营销、虚拟主播、直播电商、游戏、动画等领域,为客户提供精准的数字人服务。
1. [[⭐] https://www.fastcutai.co](https://www.fastcutai.co) **FastCut。** FastCut是一个视频制作平台,可以一键自动生成流行风格的视频短片。它内置了各种流行模板,支持自动添加字幕、关键词高亮、表情符号等功能,让用户无需编辑就可以制作出吸引眼球的视频。
1. [[⭐] https://www.genmo.ai](https://www.genmo.ai) **Genmo。** 更具创造性！使用文本指令编辑图像和视频
1. [[⭐] https://www.goenhance.ai](https://www.goenhance.ai) **GoEnhance AI。** GoEnhance AI是一款基于人工智能的图像和视频增强工具。它可以实现视频到视频、图像增强和超分辨率scaling等功能。GoEnhance AI采用了最先进的深度学习算法,可以增强和上采样图像到极致的细节和高分辨率。它简单易用,功能强大,是创作者、设计师等用户释放创意的绝佳工具。
1. [[⭐] https://www.guiji.ai](https://www.guiji.ai) **硅基智能。** 打造硅基劳动力，让人回归人的价值。
1. [[⭐] https://www.kuaijianji.com](https://www.kuaijianji.com) **快剪辑SaaS版。** 快剪辑SaaS版是一款AI工具，提供丰富的视频模板库和智能剪辑功能，帮助用户快速创建高质量的视频内容。产品定价灵活，适用于个人创作者和企业用户。主要功能包括智能去字幕、智能去水印、智能抠像等。适用场景包括企业宣传、纪录片制作、个人创作等。
1. [[⭐] https://www.laihua.com](https://www.laihua.com) **来画。** 来画是有创意的AI动画短视频制作平台，仅需几张图片，几段文字和声音简单组合， 即可在短时间内生成一个有趣的动画短视频。
1. [[⭐] https://www.lensgo.ai](https://www.lensgo.ai) **LensGo。** LensGo 是一个免费的 AI 驱动的图像和视频制作工具，最适合定制化视频制作。它能帮助用户制作个性化的 AI 视频。
1. [[⭐] https://www.loom.com](https://www.loom.com) **Loom。** 使用 Loom AI 录制更好、更快的视频消息，让您的工作更加高效。
1. [[⭐] https://www.microsoft.com/en-us/research/project/vasa-1/](https://www.microsoft.com/en-us/research/project/vasa-1/) **VASA-1。** VASA-1是由微软研究院开发的一个模型，专注于实时生成与音频相匹配的逼真人脸动画。该技术通过深度学习算法，能够根据输入的语音内容，自动生成相应的口型和面部表情，为用户提供一种全新的交互体验。VASA-1的主要优势在于其高度逼真的生成效果和实时响应能力，使得虚拟角色能够更加自然地与用户进行互动。目前，VASA-1主要应用于虚拟助手、在线教育、娱乐等领域，其定价策略尚未公布，但预计将提供免费试用版本供用户体验。
1. [[⭐] https://www.modelscope.cn/studios/vigen/video_generation/summary](https://www.modelscope.cn/studios/vigen/video_generation/summary) **追影。** 追影-视频生成是一款基于人工智能技术的视频生成工具，能够快速生成高质量的视频内容。其优势在于提供丰富的视频模板和智能编辑功能，用户可以轻松制作出令人印象深刻的视频作品。定价灵活合理，定位于个人用户和小型企业，为用户提供高效的视频创作解决方案。
1. [[⭐] https://www.moki.cn](https://www.moki.cn) **Moki。** Moki是美图公司推出的AI短片创作工具，专注于辅助视频创作者打造动画短片、网文短剧、故事绘本和音乐视频（MV）。基于美图自研的奇想智能大模型（MiracleVision），通过智能剪辑、自动配乐、音效添加和字幕生成等功能，大幅简化视频制作流程，提高创作效率。MOKI深度理解创作者需求，实现内容和成本的双重可控，让视频创作变得更加简单和高效。
1. [[⭐] https://www.morphstudio.com](https://www.morphstudio.com) **Morph Studio。** Morph Studio是一款领先的文字转视频AI平台，通过智能算法，将用户输入的文字转化为精美视频。其优势在于快速、高效地实现用户的创意想法，为创作者提供了全新的表现方式。定价灵活多样，适合个人用户和企业用户。定位于提升视频创作效率，让创意更快实现。
1. [[⭐] https://www.narakeet.com/app/text-to-audio/](https://www.narakeet.com/app/text-to-audio/) **Narakeet。** Narakeet是一个在线工具，允许用户轻松创建逼真的文本转语音和旁白视频。它提供了多种语言和声音选择，支持多种文件格式上传，并允许用户自定义音量、速度和输出格式。Narakeet的定价模式为一次性支付，无需订阅，适合商业用户和需要大量音频文件的用户。
1. [[⭐] https://www.opus.pro](https://www.opus.pro) **Opus Clip。** Opus Clip可将长视频转换成高质量的短片，以在TikTok、YouTube Shorts 和 Reels上分享，以增加社交媒体的覆盖范围。
1. [[⭐] https://www.pipio.ai/video-dubbing](https://www.pipio.ai/video-dubbing) **Pipio | Video Dubbing。** 该产品通过AI技术实现视频语音的自动配音和口型同步,可以轻松实现视频的多语种翻译,并保留原始音色。主要特点包括:1)33%以上的同步精度,媲美人工口型同步;2)无损视频分辨率;3)高保真语音翻译。面向的群体包括:企业培训部门、销售人员、营销团队和内容创作者。提供免费入门版和付费专业版,欢迎体验。
1. [[⭐] https://www.stableaudio.com](https://www.stableaudio.com) **Stable Audio。** Stability Al最新推出的音乐生成工具
1. [[⭐] https://www.story.com](https://www.story.com) **Story.com。** Story.com是一个利用人工智能生成短视的网站。它能够根据用户输入的故事情节,自动生成60秒左右长度的微电影短视频。具有以下优势:1)生成速度快,能实时生成。2)赋予用户充分的创作控制权,可以重写情节、修改人物、调整场景等。3)注重故事性,模拟剧情发展曲线。4)针对不同用户群体有不同的使用模式,如动画师、影视从业者、影响力创作者、普通故事创作者等。目前暂无公开的付费信息。
1. [[⭐] https://www.swapstream.ai](https://www.swapstream.ai) **SwapStream。** SwapStream是一个基于云的实时人脸互换直播工具,用户可以通过浏览器轻松实现人脸互换的直播。它支持将任意人脸实时互换到直播视频中,同时可以多路流媒体直播到各种直播平台。主要功能包括:实时人脸互换,无需下载直接在浏览器使用,支持多种直播平台,可添加自定义RTMP直播通道等。优点是使用简单、扩展性强,适用于各类直播场景。
1. [[⭐] https://www.unscreen.com](https://www.unscreen.com) **Unscreen。** 智能AI去除视频背景在线神器
1. [[⭐] https://www.veed.io](https://www.veed.io) **Veed。** 视频编辑变得简单。只需单击即可创建出色的视频。添加字幕，转录音频，浏览AI工具，使用模板等等。
1. [[⭐] https://www.yinziai.com](https://www.yinziai.com) **音子 AI。** 音子 AI 是一款在线音轨分离解决方案，用户可上传音频或视频文件，立即获取独立的人声和伴奏文件。该产品基于人工智能技术，提供高效的音轨提取功能。
1. [[⭐] https://youyan.xyz/platform/home/prime](https://youyan.xyz/platform/home/prime) **有言。** 一站式AI视频创作，1200+免费3D数字人
1. [[⭐] https://zeemo.ai/cn](https://zeemo.ai/cn) **绘影字幕。** 绘影字幕的AI 字幕准确率高达98%，能让字幕创建变得前所未有的简单。您可以用绘影字幕的自动化流程取代手动转录，为内容创作者、电影制作人或任何需要字幕的人节省时间。
1. [[⭐] https://zenvideo.qq.com](https://zenvideo.qq.com) **腾讯智影。** 腾讯出品的融合多种AIGC能力进行智能视频创作的一体化工具。
1. [[⭐] https://zh.rask.ai](https://zh.rask.ai) **Rask。** 领先的AI视频本地化和配音工具
1. [[⭐] https://zoomscape.ai](https://zoomscape.ai) **Zoomscape AI。** ZoomScape.ai是一款使用人工智能快速创建独特、有趣和创意背景的工具。它可以帮助您在几秒钟内制作个性化的Zoom背景，让您在视频会议中展现个人风格并给人留下深刻的印象。忘掉无聊的背景，尝试使用ZoomScape.ai让您的Zoom会议更有趣、更个性化。立即开始，展示您的工作个性！
1. [[⭐⭐⭐🚀] https://pika.art](https://pika.art) **Pika。** Pika致力于用AI让每个人都能成为自己故事的导演，并激发我们每个人的创造力。
1. [[⭐⭐⭐🚀] https://www.heygen.com](https://www.heygen.com) **Heygen。** AI生成真人营销视频
1. [[⭐⭐⭐🚀] https://openai.com/sora](https://openai.com/sora) **Sora。** 碾压级更新！颠覆性的文生视频大模型
1. [[🚀] https://huggingface.co](https://huggingface.co) **Hugging Face。** 下载开源的SD模型
1. [[🚀] https://lumalabs.ai](https://lumalabs.ai) **Luma Labs。** 将视频转为游戏资产

### AI 数字人 (11)

1. [[⭐] https://fullpeace.cn](https://fullpeace.cn) **风平智能。** 风平 IP 智造平台是基于 AIGC 的智能化 IP 打造平台，致力于提供虚拟数字人定制、AI 短视频内容生产和数字人直播的一站式解决方案。通过结合领先的 AI 技术，平台实现了数字人的高质量生产和互动能力，为用户打造全新的数字人 IP 体验。
1. [[⭐] https://shanjian.tv](https://shanjian.tv) **闪剪-AI数字人。** 闪剪是一款 AI 数字人视频生成工具，用户可以定制自己的数字人，只需输入文字即可生成口播视频。
闪剪具备形象、声音克隆；链接成片以及直播切片等功能，手机端和网页端通用。
1. [[⭐] https://virbo.wondershare.cn](https://virbo.wondershare.cn) **万兴播爆。** Virbo是一款万兴科技旗下的数字人营销视频创作神器。
1. [[⭐] https://weta365.com/conduct](https://weta365.com/conduct) **奇妙元。** 奇妙元提供真人形象克隆、声音克隆、3D 数字人定制和 IP 活化等超前沿的克隆与定制服务。通过高质量数据输入和迭代克隆模型，实现高清还原真人形象。用户可使用真人形象克隆终身，通过输入文字使数字人说话，表情神态可比真人。此外，奇妙元还提供数字人视频制作、直播会员和定制服务等功能。数字人视频制作可一键将文本转为视频，无需繁琐拍摄；直播会员可选择真人数字人或 3D 数字人进行直播，为用户挣钱；定制服务可根据用户需求定制数字人形象。奇妙元的产品广泛应用于 20 多个行业，500 多个客户已经受益于数字人定制与克隆服务。
1. [[⭐] https://www.chanjing.cc](https://www.chanjing.cc) **蝉镜。** 蝉镜是一个在线数字人视频创作平台，利用 AI 简化视频创作过程，提供 AI 数字人播报、短视频制作、分身定制等服务。广告营销、跨境电商、短视频口播等领域的用户可以在此提升创作效率、降低成本。
1. [[⭐] https://www.d-id.com](https://www.d-id.com) **D-ID。** AI真人视频创作工具。
1. [[⭐] https://www.dreamavatar.com](https://www.dreamavatar.com) **DreamAvatar。** DreamAvatar是一个基于人工智能技术的数字人生成平台,能够通过简单的文本描述或素材上传快速生成高质量的数字人形象,还支持自定义调整数字人的各种特征。该平台具有操作简单、生成效果逼真的优势,可以广泛应用于数字营销、虚拟主播、直播电商、游戏、动画等领域,为客户提供精准的数字人服务。
1. [[⭐] https://www.guaishouai.com](https://www.guaishouai.com) **怪兽AI数字人。** 怪兽AI数字人是怪兽智能科技推出的产品，旨在通过AI技术提供数字人克隆、短视频生成、直播解决方案等服务。产品包括真人形象克隆、声音克隆、孪生姿态合成等核心技术，支持短视频内容生产创作及直播宣传，适用于品牌商家及本地生活商家。
1. [[⭐] https://www.guiji.ai](https://www.guiji.ai) **硅基智能。** 打造硅基劳动力，让人回归人的价值。
1. [[⭐] https://www.kreadoai.com](https://www.kreadoai.com) **Kreado AI。** 多语言AI视频创作，只需输入文本或关键词，即可创作真实/虚拟人物的多语言口播视频。
1. [[⭐] https://www.xiaoice.com](https://www.xiaoice.com) **小冰。** 小冰基于全球领先的完备人工智能小冰框架，推出了数字专家和数字员工等完整产品线。

### AI 语音生成 (53)

1. [[⭐⭐] https://ttsmaker.cn](https://ttsmaker.cn) **TTSMAKER。** 免费的在线文本转语音神器
1. [[⭐] https://ace-studio.timedomain.cn](https://ace-studio.timedomain.cn) **ACE Studio。** ACE Studio 是时域科技旗下的 AI 歌声合成引擎，通过毫无妥协的高表现力人声，解除演唱能力的羁绊，释放人们的音乐想象力。ACE Studio 编辑器软件提供 Windows 客户端版本与 macOS 客户端版本，编辑器 UI 界面简便易操作，您可以轻松地选择 AI 歌手、创建音轨、导入 MIDI，在钢琴卷帘上新建音符、绘制 pitch，在调参面板调整 AI 参数，通过云渲染获得高质量、高可调性的 AI 歌声合成结果。ACE 歌声合成引擎的强大性能，使得虚拟歌手可以真正进入专业音乐生产领域，服务于广大音乐创作者。
1. [[⭐] https://ai.wps.cn](https://ai.wps.cn) **WPS AI。** WPS AI是由金山办公发布的具备大语言模型能力的人工智能应用，为用户提供智能文档写作、阅读理解和问答、智能人机交互的能力。
1. [[⭐] https://app.deepbrain.io/dashboard](https://app.deepbrain.io/dashboard) **DeepBrain AI。** AI Studios提供了一个用户友好的仪表板，让用户可以轻松创建和管理AI项目。该平台可能包含多种AI工具和功能，以支持用户在图像、视频、音频等领域的创作和编辑。
1. [[⭐] https://audionotes.ai](https://audionotes.ai) **AudioNotes.ai。** AudioNotes.ai是一款利用智能AI将您的口述文字转化为有序文本摘要的应用程序，使得记笔记、头脑风暴和内容创作等活动变得更加轻松！您只需通过语音输入，即可获得清晰、有序的文字记录。此外，AudioNotes.ai还具有智能分类和标签功能，帮助您快速组织和检索笔记。该应用程序适用于各种场景，包括会议记录、学习笔记、写作草稿等。通过AudioNotes.ai，您可以更高效地记录和整理您的想法，提升工作和学习效率。
1. [[⭐] https://bgmcat.com/home](https://bgmcat.com/home) **BGM 猫。** BGM 猫提供版权背景音乐一站式服务，正版商业授权，AI 智能生成曲库，免费无限，快捷授权，一键下载。
1. [[⭐] https://crikk.com](https://crikk.com) **Crikk。** Crikk是一款价格实惠的强大文本转语音工具，支持56种语言，提供真实的语音合成技术。无论是用于语音播报、有声书还是教育，Crikk都能为用户提供高质量的声音合成。用户可以选择免费试用或者采用月费20美元的专业版，月额度为500,000个字符，拥有6种不同的声音和56种语言。此外，Crikk还将推出移动应用，实现图片或PDF的文字转语音。Monster Incorporation Inc.位于Delaware，United States。
1. [[⭐] https://elevenlabs.io](https://elevenlabs.io) **ElevenLabs。** ElevenLabs 带来了最逼真、丰富和生动的声音，为寻求叙事的终极工具的创作者和发布者提供了最具吸引力的文本转语音和语音克隆软件。
1. [[⭐] https://enriccorona.github.io/vlogger/](https://enriccorona.github.io/vlogger/) **VLOGGER。** VLOGGER是一种从单张人物输入图像生成文本和音频驱动的讲话人类视频的方法，它建立在最近生成扩散模型的成功基础上。我们的方法包括1)一个随机的人类到3D运动扩散模型，以及2)一个新颖的基于扩散的架构，通过时间和空间控制增强文本到图像模型。这种方法能够生成长度可变的高质量视频，并且通过对人类面部和身体的高级表达方式轻松可控。与以前的工作不同，我们的方法不需要为每个人训练，也不依赖于人脸检测和裁剪，生成完整的图像（而不仅仅是面部或嘴唇），并考虑到正确合成交流人类所需的广泛场景（例如可见的躯干或多样性主体身份）。
1. [[⭐] https://fanyi.xfyun.cn/console/trans/text](https://fanyi.xfyun.cn/console/trans/text) **讯飞智能翻译。** 科大讯飞推出的人工智能翻译平台
1. [[⭐] https://fireflies.ai](https://fireflies.ai) **fireflies.ai。** Fireflies.ai是一款利用生成式人工智能技术的AI会议记录助手，可自动转录、总结、搜索和分析语音对话。通过与Zoom、Google Meet、Microsoft Teams、Webex等平台集成，生成会议记录和智能摘要。
1. [[⭐] https://github.com/RVC-Boss/GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS) **GPT-SoVITS。** GPT-SoVITS-WebUI是一个强大的零样本语音转换和文本到语音WebUI。它具有零样本TTS、少样本TTS、跨语言支持和WebUI工具等功能。该产品支持英语、日语和中文，提供了集成工具，包括语音伴奏分离、自动训练集分割、中文ASR和文本标注，帮助初学者创建训练数据集和GPT/SoVITS模型。用户可以通过输入5秒的声音样本，即可体验即时的文本到语音转换，还可以通过仅使用1分钟的训练数据对模型进行微调，以提高语音相似度和逼真度。产品支持环境准备、Python和PyTorch版本、快速安装、手动安装、预训练模型、数据集格式、待办事项和致谢。
1. [[⭐] https://github.com/Zejun-Yang/AniPortrait](https://github.com/Zejun-Yang/AniPortrait) **AniPortrait。** AniPortrait是一个根据音频和图像输入生成会说话、唱歌的动态视频的项目。它能够根据音频和静态人脸图片生成逼真的人脸动画，口型保持一致。支持多种语言和面部重绘、头部姿势控制。功能包括音频驱动的动画合成、面部再现、头部姿势控制、支持自驱动和音频驱动的视频生成、高质量动画生成以及灵活的模型和权重配置。
1. [[⭐] https://github.com/myshell-ai/OpenVoice](https://github.com/myshell-ai/OpenVoice) **OpenVoice。** OpenVoice是一个开源的语音克隆技术,可以准确地克隆参考音色,生成多种语言和口音的语音。它可以灵活地控制语音风格,如情感、口音等参数,以及节奏、停顿和语调等。它实现了零样本跨语言语音克隆,即生成语音和参考语音的语言都不需要出现在训练数据中。
1. [[⭐] https://home.tiangong.cn](https://home.tiangong.cn) **天工SkyMusic。** 天工是昆仑万维基于自研双千亿级大语言模型的人工智能产品，提供六大能力，六大领域数百种功能，包括生成创作、知识问答、规划决策、语言理解、代码能力和逻辑能力。天工具有独特的场景优势，适用于娱乐社交、游戏、广告/营销及海外业务场景等。同时天工拥有技术优势，核心技术攻坚积累，团队经验丰富。详情请访问官方网址。
1. [[⭐] https://home.tiangong.cn/downloadGuide](https://home.tiangong.cn/downloadGuide) **天工SkyMusic。** 基于昆仑万维「天工3.0」超级大模型打造的AI音乐生成大模型「天工SkyMusic」，支持高质量AI音乐生成、人声合成、歌词段落控制、多种音乐风格和音乐智能表达等功能。目前开放免费邀测，助力用户更好地创作音乐，表达情感。
1. [[⭐] https://humanaigc.github.io/emote-portrait-alive/](https://humanaigc.github.io/emote-portrait-alive/) **EMO。** 阿里巴巴的EMO:  是一款生成具有表情丰富的面部表情视频的工具，可以根据输入的角色图像和声音音频生成各种头部姿势和表情的声音头像视频。支持多语言歌曲和各种肖像风格，能够根据音频节奏生成动态、表现丰富的动画角色。
1. [[⭐] https://member.bilibili.com/york/bilibili-studio](https://member.bilibili.com/york/bilibili-studio) **必剪 Studio。** 必剪 Studio 是一款数字分身工具，支持形象驱动和音色定制。用户可以定制专属数字分身，用于配音、口播等场景。产品背景为解决用户在音频制作中个性化需求的问题，定位于提供便捷的数字分身创作工具。
1. [[⭐] https://mubert.com](https://mubert.com) **Mubert。** 使用人工智能为您的视频内容、播客和应用程序生成音乐。
1. [[⭐] https://mvsep.com/zh](https://mvsep.com/zh) **MVSEP。** MVSEP是一款在线音频处理工具，利用先进的音频分离技术可将音乐和语音从音频文件中分离出来，适用于音乐制作、音频编辑、广播、电影后期制作等领域。优点包括高质量的音频输出、快速的处理速度和用户友好的操作界面。提供不同模型选择。
1. [[⭐] https://myvocal.ai](https://myvocal.ai) **MyVocal。** MyVocal是一款AI音乐工具，可以帮助用户在60秒内克隆自己的声音，用于歌唱或内容创作。独特的音调将帮助您脱颖而出！免费使用，我们将向您的收件箱发送登录/注册链接。
1. [[⭐] https://peiyin.baibaoyin.com](https://peiyin.baibaoyin.com) **百宝音。** 百宝音是一个在线免费文字转语音的配音合成软件，提供近百种配音模板，主打影视解说配音、专题片配音、广告配音等，具有高度定制化的优势，可根据用户需求定制各种音色风格。
1. [[⭐] https://peiyin.xunfei.cn/virtual-broadcasting](https://peiyin.xunfei.cn/virtual-broadcasting) **讯飞智作。** 讯飞智作是一站式配音平台，可以提供AI文字转语音、语音合成、智能配音、AI虚拟主播等工具。
1. [[⭐] https://play.ht](https://play.ht) **Play。** 基于人工智能将文本转位逼真的语音
1. [[⭐] https://replicate.com/lucataco/whisperspeech-small](https://replicate.com/lucataco/whisperspeech-small) **Whisper Speech。** Whisper Speech是一款完全开源的文本转语音模型，由Collabora和Lion在Juwels超级计算机上训练。它支持多种语言和多种形式的输入，包括Node.js、Python、Elixir、HTTP、Cog和Docker。该模型的优势在于高效的语音合成和灵活的部署方式。定价方面，Whisper Speech完全免费。它定位于为开发者和研究人员提供一个强大的、可定制的文本转语音解决方案。
1. [[⭐] https://soundraw.io](https://soundraw.io) **Soundraw。** 用AI制作免费的音乐
1. [[⭐] https://speechify.com](https://speechify.com) **Speechify。** 拥有数百万次在Chrome、iOS和Android上的下载量的领先文本到语音应用，可以在任何设备上听取互联网内容。
1. [[⭐] https://text2audio.cc](https://text2audio.cc) **Text2Audio。** Text2Audio是一个免费的在线TTS工具，能够轻松将文本转化为自然、逼真的语音。无论是用于什么目的，都能轻松创建清晰、生动的语音。
1. [[⭐] https://tianyin.music.163.com](https://tianyin.music.163.com) **网易天音。** 网易天音是一款基于人工智能技术的音乐创作工具。它能够根据用户的需求和创作风格，自动生成个性化的音乐作品。用户可以通过选择曲风、节奏、乐器等参数，快速生成符合自己需求的音乐作品。AI音乐创作具有创作速度快、音乐风格多样、个性化定制等优势。定价方面，提供免费试用和付费订阅两种模式。它适用于音乐爱好者、创作人员、广告制作等领域。
1. [[⭐] https://tingwu.aliyun.com](https://tingwu.aliyun.com) **通义听悟。** 阿里推出的会议转录工具
1. [[⭐] https://vocalremover.org](https://vocalremover.org) **分离人声。** Vocal Remover使用强大的AI算法免费将歌曲中的人声与音乐分离。
1. [[⭐] https://work.duiopen.com](https://work.duiopen.com) **麦耳会记。** 麦耳会记是一款集实时语音转写、实时翻译和 AI 辅助写作功能为一体的 AI 办公助手。它可以用于办公会议、学生网课、客户访谈录音等场景。软件支持边录音、边转写，录音结束后，音频、文本实时同步至 PC 端、手机端。采用云端存储资料的方式，无论是办公、地铁，还是旅游途中，都可以随时随地查看文档或音频。麦耳会记还提供实时字幕同传功能，帮助听力受损人士更好地参与会议。
1. [[⭐] https://www.aifuwus.com/solution/index?link=stentor/icservice](https://www.aifuwus.com/solution/index?link=stentor/icservice) **讯飞A.I.智能客服解决方案。** A.I.智能客服解决方案是科大讯飞基于其先进的语音技术，为企业提供的一套完整的客户服务系统。该系统通过电话、Web、APP、小程序、自助终端等多种渠道，实现智能外呼、智能接听、语音导航、在线文字客服、质检分析、坐席辅助等功能。它通过高识别率的语音识别引擎、自然流畅的语音合成技术、智能打断能力、IVR导航以及客服平台中间件等技术，帮助企业提高客服效率，降低人力成本，同时提升客户服务体验。
1. [[⭐] https://www.aiva.ai](https://www.aiva.ai) **Aiva。** AIVA是一款人工智能音乐创作助手，为创作者提供原创且个性化的音乐配乐。通过利用AI生成的音乐，以比以往更快的速度为项目创作引人入胜的主题。我们提供多种预设风格和算法，包括现代电影、电子音乐、流行音乐、环境音乐、摇滚音乐、幻想音乐、爵士乐、海上颂歌、20世纪电影、探戈、中国音乐等。订阅我们的专业计划，您将永久拥有使用AIVA创作的任何作品的完整版权。定价方案有个人版、学生和学校版以及企业版。
1. [[⭐] https://www.beatoven.ai](https://www.beatoven.ai) **Beatoven.ai。** Beatoven.ai利用先进的AI音乐生成技术，为您的视频或播客创作独特的基于情感的音乐，以适应您内容的每个部分。我们提供免费试用，定价详细请访问官方网站。
1. [[⭐] https://www.cyrinn.cn](https://www.cyrinn.cn) **赛灵力。** 赛灵力虚拟数字人工厂致力于 2D 虚拟人、3D 虚拟人、声音克隆等 AI 技术探索和产业应用，为企业、政府、个人提供虚拟数字人 AI 视频创作、个人形象定制、声音定制、智能语音合成等服务。
1. [[⭐] https://www.feishu.cn/product/minutes](https://www.feishu.cn/product/minutes) **飞书妙记。** 飞书妙记是智能会议纪要工具，可将会议内容转录成易搜索、可翻译的逐字稿，自动总结会议纪要与待办事项，提升回顾和协作效率。
1. [[⭐] https://www.iflyrec.com](https://www.iflyrec.com) **讯飞听见。** 讯飞听见是智慧办公服务平台，提供语音转文字、录音整理、语音翻译等服务，致力于提高办公效率。支持快速转录音频、视频为文字，提供 AI 写作、同传、翻译等功能。
1. [[⭐] https://www.lalal.ai](https://www.lalal.ai) **Lalal.ai。** LALAL.AI是一款下一代音乐分轨器和人声消除器，采用世界一流的AI技术，快速、简便、准确地分离音乐的不同部分。无损地去除人声、乐器、鼓、贝斯、钢琴、电吉他、原声吉他和合成器等轨道。
1. [[⭐] https://www.moyin.com](https://www.moyin.com) **魔音工坊。** 魔音工坊是一款可以在线将文字转成语音的智能配音产品。提供不同性别、不同口音的真人声音，在你输入文字后直接配音。你可快速对短视频等需要配音的内容进行配音。
1. [[⭐] https://www.narakeet.com/app/text-to-audio/](https://www.narakeet.com/app/text-to-audio/) **Narakeet。** Narakeet是一个在线工具，允许用户轻松创建逼真的文本转语音和旁白视频。它提供了多种语言和声音选择，支持多种文件格式上传，并允许用户自定义音量、速度和输出格式。Narakeet的定价模式为一次性支付，无需订阅，适合商业用户和需要大量音频文件的用户。
1. [[⭐] https://www.pipio.ai/video-dubbing](https://www.pipio.ai/video-dubbing) **Pipio | Video Dubbing。** 该产品通过AI技术实现视频语音的自动配音和口型同步,可以轻松实现视频的多语种翻译,并保留原始音色。主要特点包括:1)33%以上的同步精度,媲美人工口型同步;2)无损视频分辨率;3)高保真语音翻译。面向的群体包括:企业培训部门、销售人员、营销团队和内容创作者。提供免费入门版和付费专业版,欢迎体验。
1. [[⭐] https://www.reecho.ai](https://www.reecho.ai) **REECHO 睿声。** REECHO.AI 睿声是一个超拟真的人工智能语音克隆平台。用户可以上传语音样本,系统利用深度学习技术进行语音克隆,生成质量极高的 AI 语音,可以实现不同人物的语音风格转换。该平台提供语音创作、语音配音等服务,让更多人可以通过 AI 技术参与语音内容的创作,降低创作门槛。平台定位大众化,提供免费使用基础功能。
1. [[⭐] https://www.singduck.cn](https://www.singduck.cn) **唱鸭。** 唱鸭是一款音乐平台，通过跟随标记按键实现自弹自唱，用户可制作乐段、点歌、抢唱、说唱等，带来音乐创作与互动乐趣。
1. [[⭐] https://www.songtell.com](https://www.songtell.com) **Songtell。** 通过Songtell，利用AI的力量，深入探讨您最喜欢的歌曲，揭示歌词背后引人入胜的故事和内涵。
1. [[⭐] https://www.stableaudio.com](https://www.stableaudio.com) **Stable Audio。** Stability Al最新推出的音乐生成工具
1. [[⭐] https://www.suno.ai](https://www.suno.ai) **Suno AI。** AI音乐创作平台，不需要任何工具，只需要想象力，就可以创作出美妙动听的音乐。
1. [[⭐] https://www.texttovoice.online](https://www.texttovoice.online) **Texttovoice.online。** 在线文本转语音是一款免费的工具，可以将文本转换为真实的语音。它具有高音质、自然的语音效果，并支持多种语言和声音选择。用户只需输入文本，选择语言和声音，即可生成自定义的语音内容。该工具适用于多种场景，如视频配音、教育辅助、语音导航等。无论是Mac还是Windows用户，都可以轻松使用该工具。
1. [[⭐] https://www.udio.com](https://www.udio.com) **Udio。** Udio是一个音乐发现、创作和分享的平台。用户可以在这里发现新的音乐作品,上传自己的创作分享给他人,并与其他音乐爱好者互动交流。该平台提供免费使用,同时也有付费高级服务供选择。定位为专注于音乐创作和分享的社交平台。
1. [[⭐] https://www.voicefy.com.br](https://www.voicefy.com.br) **Voicefy。** Voicefy是一款直观的平台，将文本转化为真实的语音，提供多种语言和声音选择，以提高内容的可访问性和互动性。Voicefy可用于创建有声书、自动化广告、医疗指导录音等。价格根据使用情况而定，提供免费试用。
1. [[⭐] https://www.yinziai.com](https://www.yinziai.com) **音子 AI。** 音子 AI 是一款在线音轨分离解决方案，用户可上传音频或视频文件，立即获取独立的人声和伴奏文件。该产品基于人工智能技术，提供高效的音轨提取功能。
1. [[⭐] https://y.qq.com/tme_studio/](https://y.qq.com/tme_studio/) **TME Studio。** TME Studio是一款为音乐爱好者提供的创作工具。它包括音乐分离、MIR计算、辅助写词、智能曲谱等功能。用户可以上传任意歌曲，分离出其中的人声和乐器，进行音乐内容理解与分析，提取音乐的各种信息。同时，它还提供了作词工具，帮助用户找到合适的押韵词语，打开创作灵感。另外，用户还可以生成智能吉他曲谱，只需上传音乐即可弹奏自己想弹的歌曲。音乐创作助手将助力音乐爱好者更轻松地进行音乐创作。
1. [[🚀] https://huggingface.co](https://huggingface.co) **Hugging Face。** 下载开源的SD模型

### AI 角色生成 (12)

1. [[⭐] https://apps.apple.com/cn/app/%E8%AF%9D%E7%82%89/id6475000292](https://apps.apple.com/cn/app/%E8%AF%9D%E7%82%89/id6475000292) **话炉。** 话炉APP是一款由字节跳动推出的AI社交应用，用户可以与多样化的虚拟AI角色进行互动聊天，体验沉浸式的对话互动。用户可以创作个性化AI角色，共同打造故事世界，享受新颖的社交互动方式。主要功能包括与AI角色互动、故事创作与推进、角色切换、个性化角色创建、多样化风格体验和社交互动。
1. [[⭐] https://candy.ai](https://candy.ai) **Candy.ai。** Candy.ai是一个与虚拟伙伴进行沟通和互动的平台。通过与AI角色进行个性化对话，您可以深入参与复杂的对话，并激发您的想象力。立即体验适应性AI驱动的角色扮演。
1. [[⭐] https://character.sensetime.com/character-wb/home](https://character.sensetime.com/character-wb/home) **商汤商量拟人大模型。** 商汤商量拟人大模型 “SenseChat-Character” 支持个性化角色创建与定制、知识库构建、长对话记忆、多人群聊等功能，可实现行业领先的角色对话、人设、及剧情推动能力。
1. [[⭐] https://humanaigc.github.io/animate-anyone/](https://humanaigc.github.io/animate-anyone/) **Animate Anyone。** Animate Anyone旨在通过驱动信号从静态图像生成角色视频。我们利用扩散模型的力量，提出了一个专为角色动画量身定制的新框架。为了保持参考图像中复杂外观特征的一致性，我们设计了ReferenceNet来通过空间注意力合并详细特征。为了确保可控性和连续性，我们引入了一个高效的姿势指导器来指导角色的动作，并采用了一种有效的时间建模方法，以确保视频帧之间的平滑跨帧过渡。通过扩展训练数据，我们的方法可以为任意角色制作动画，与其他图像到视频方法相比，在角色动画方面取得了出色的结果。此外，我们在时尚视频和人类舞蹈合成的基准上评估了我们的方法，取得了最先进的结果。
1. [[⭐] https://npc.baichuan-ai.com/index](https://npc.baichuan-ai.com/index) **百川角色大模型。** 百川角色大模型是百川智能提供的一款智能角色模型，融合了意图理解、信息检索以及强化学习技术，结合有监督微调与人类意图对齐，在知识问答、文本创作领域表现突出。该模型可实现角色扮演对话，提供高度开放的个性化角色定制能力，具备高度准确性和口语化的回答能力。
1. [[⭐] https://spicychat.ai](https://spicychat.ai) **Spicychat。** Spicychat 是一个聊天机器人平台，提供虚拟 AI 角色。在 Spicychat 上加入我们的聊天机器人，实现你所有最疯狂的幻想。
1. [[⭐] https://wantalk.baidu.com](https://wantalk.baidu.com) **万话。** 万话创作者平台是一个专注于角色创建和管理的在线服务，它允许用户构建和细化角色设定，包括基础信息、世界观设定、角色设定、隐藏设定以及开场白。该平台特别适合需要角色构建和剧情推进的写作项目，如小说创作、剧本编写等。它通过提供角色调试功能，帮助用户达到理想的角色设定效果。
1. [[⭐] https://www.xingyeai.com](https://www.xingyeai.com) **星野。** 星野是 MiniMax稀宇科技旗下AI原生应用，致力于为用户打造沉浸式AI内容社区。
1. [[🚀] https://beta.character.ai](https://beta.character.ai) **Character AI。** 创建虚拟角色，并与其进行开放式对话。
1. [[🚀] https://hiwaifu.com](https://hiwaifu.com) **Hi Waifu。** Hi Waifu可以创建一个拥有独特个性的数字朋友，随时可以与AI聊天，准备好以一种新的方式与AI交流互动吧。
1. [[🚀] https://janitorai.com](https://janitorai.com) **JanitorAI。** Janitor AI是由janitorai.com开发的一个平台，允许用户创建具有不同个性的虚拟聊天机器人角色。该平台由大型语言模型驱动，包括OpenAI的GPT模型。
1. [[🚀] https://www.aichatting.net](https://www.aichatting.net) **AI Chatting。** 创建虚拟角色，并与其进行开放式对话。

### AI 提示词 (23)

1. [[⭐] https://catjourney.life](https://catjourney.life) **Catjourney。** 超多实用的 MJ Style Tuner风格库
1. [[⭐] https://contentatscale.ai/ai-prompt-library](https://contentatscale.ai/ai-prompt-library) **Content at scale。** 收录最佳的ChatGPT prompt提示词
1. [[⭐] https://learningprompt.wiki](https://learningprompt.wiki) **Learning Prompt。** 提供免费的Prompt Engineering教程，包含ChatGPT和Midjourney的教程。
1. [[⭐] https://lib.kalos.art](https://lib.kalos.art) **LIB.KALOS.ART。** 艺术风格流派参考库
1. [[⭐] https://midlibrary.io](https://midlibrary.io) **Midlibrary。** 风格多样！实用超2000+MJ提示词资源 `[error][403]Forbidden`
1. [[⭐] https://moonvy.com/apps/ops/](https://moonvy.com/apps/ops/) **OPS 提示词工作室。** OPS 提示词工作室是一款可视化编辑工具，支持一键翻译 AIGC 提示词，提供 Midjourney 提示词库，让用户轻松管理和使用提示词，助力提升生产力。该工具还提供简洁清晰的界面，方便用户快速复制、导出和翻译提示词。
1. [[⭐] https://openart.ai/home](https://openart.ai/home) **Openart。** 实用！SD艺术创作提示词
1. [[⭐] https://prompt.noonshot.com](https://prompt.noonshot.com) **MJ Prompt Tool。** MJ提示词创造助手
1. [[⭐] https://promptalot.com](https://promptalot.com) **Promptalot。** 超好用的MJ提示词辅助插件
1. [[⭐] https://promptbase.com](https://promptbase.com) **PromptBase。** AI提示词交易网站
1. [[⭐] https://promptknit.com](https://promptknit.com) **Knit。** Knit是一个专业的AI提示编辑和管理平台,提供强大的编辑器、项目协作、模型支持等功能,可高效管理优化AI提示,适用于各种AI应用场景。主要优势包括全功能提示编辑器、多模型支持、API参数控制、代码生成导出等。提供免费和付费版本,针对提示开发者和AI应用团队等群体。
1. [[⭐] https://promptomania.com](https://promptomania.com) **PromptoMania。** MJ和SD提示词生成器
1. [[⭐] https://promptperfect.jinaai.cn](https://promptperfect.jinaai.cn) **PromptPerfect。** PromptPerfect 是一款专业的提示词工程开发工具，可用于设计、优化和部署针对各种大型模型的提示词。它提供了逐步优化提示词、构建小样本提示词、将提示词部署为 REST 服务等功能。PromptPerfect 可帮助用户提高大模型的输出质量和效率。
1. [[⭐] https://publicprompts.art](https://publicprompts.art) **PublicPrompts。** AI绘画模型+风格参考
1. [[⭐] https://replicate.com/pharmapsychotic/clip-interrogator](https://replicate.com/pharmapsychotic/clip-interrogator) **CLIP Interrogator。** 反向学习！从图片反推AI关键词
1. [[⭐] https://tools.saxifrage.xyz/prompt](https://tools.saxifrage.xyz/prompt) **Visual Prompt Builder。** 涨姿势系列！设计/绘画风格参考
1. [[⭐] https://www.aishort.top/en](https://www.aishort.top/en) **ChatGPT Shortcut。** AiShort是一个简单易用的ChatGPT提示命令列表，可大幅提升工作效率！包括标签筛选、提示搜索和一键复制功能。它提供了276个ChatGPT提示，涵盖了多个领域。用户可以根据需求选择感兴趣的提示，一键复制到剪贴板，快速获取所需内容。
1. [[⭐] https://www.clickprompt.org/zh-CN](https://www.clickprompt.org/zh-CN) **ClickPrompt。** 一款专为 Prompt 编写者设计的工具
1. [[⭐] https://www.ordinarypeopleprompts.com](https://www.ordinarypeopleprompts.com) **Ordinary Prompts。** 有趣ChatGPT提示词
1. [[⭐] https://www.promptingguide.ai](https://www.promptingguide.ai) **提示工程指南。** 提示工程（Prompt Engineering）是一门较新的学科，关注提示词开发和优化，帮助用户将大语言模型（Large Language Model, LLM）用于各场景和研究领域。
1. [[🚀] https://flowgpt.com](https://flowgpt.com) **Flowgpt。** 专注于分享聊天指令的社区网站
1. [[🚀] https://prompthero.com](https://prompthero.com) **PromptHero。** 最受欢迎的AI提示词网站
1. [[🚀] https://www.prompthunt.com/explore](https://www.prompthunt.com/explore) **Prompt Hunt。** 按主题分类的SD提示词

### AI 搜索引擎 (16)

1. [[⭐⭐⭐🧑‍💻] https://www.tiangong.cn](https://www.tiangong.cn) **天工AI智能体。** 昆仑万维提供的对标 ChatGPT 的双千亿级大语言模型，也是一个对话式AI助手
1. [[⭐] https://bing.com/create](https://bing.com/create) **Bing Image Creator。** Bing影像建立工具是一款由Microsoft Bing提供的智能搜索工具，可以帮助用户快速找到想要的图像信息，并获得奖励。
1. [[⭐] https://consensus.app](https://consensus.app) **Consensus。** Consensus是一个使用人工智能来搜索研究论文并找到洞见的搜索引擎。它具有广泛的覆盖范围，可搜索超过2亿篇科学论文。所有的结果都来源于实际研究，我们引用我们的来源，绝不会显示广告。它还具有即时分析功能，利用GPT4和其他LLM来为您总结结果。Consensus旨在帮助您进行有效的研究。
1. [[⭐] https://fireflies.ai](https://fireflies.ai) **fireflies.ai。** Fireflies.ai是一款利用生成式人工智能技术的AI会议记录助手，可自动转录、总结、搜索和分析语音对话。通过与Zoom、Google Meet、Microsoft Teams、Webex等平台集成，生成会议记录和智能摘要。
1. [[⭐] https://metaso.cn](https://metaso.cn) **秘塔AI搜索。** 秘塔科技旗下的一款AI搜索产品，能够大幅提升搜索效率，解决日常生活、工作学习等场景中遇到的各类搜索需求
1. [[⭐] https://so.360.com](https://so.360.com) **360AI搜索。** 360AI搜索是由360集团推出的一款基于大模型的新一代答案引擎应用。该产品旨在为用户提供更直接、更直观的问题答案，不再只是一个普通的搜索工具，而是能够理解和处理复杂搜索查询的智能AI助手。
1. [[⭐] https://suppr.wilddata.cn](https://suppr.wilddata.cn) **Suppr 超能文献。** Suppr 超能文献是一个利用人工智能技术驱动的医学文献搜索引擎，旨在帮助医学研究人员快速检索和获取相关医学领域的最新研究进展和临床试验信息。它通过限定时间、类型、影响因子、作者、期刊等多重条件，提供精准的文献检索服务，极大地提高了医学研究的效率和质量。
1. [[⭐] https://undermind.ai](https://undermind.ai) **Undermind.ai。** Undermind是一个由人工智能驱动的科研助手，旨在通过先进的语言模型，帮助研究人员快速准确地找到所需的学术论文。它由两位来自MIT的量子物理博士创立，拥有深厚的研究背景。Undermind的搜索算法模仿人类系统化的发现过程，通过阶段性地检查结果并使用语言模型做出关键决策，如识别重要信息和调整搜索策略，从而实现前所未有的准确性和全面性。
1. [[⭐] https://www.chatplayground.ai](https://www.chatplayground.ai) **ChatPlayground AI。** ChatPlayground AI是一个集成了16+ AI应用和功能的聊天机器人平台，它允许用户通过一个订阅来访问多种AI模型。该平台的主要优点包括行业领先的AI模型、实时网络搜索、图像生成器、历史记录回顾、多语言支持以及导入自定义内容的能力。ChatPlayground AI旨在为开发者、数据科学家、学生、研究人员、内容创作者、作家和AI爱好者提供服务，帮助他们提高工作效率和创造力。
1. [[⭐] https://www.frase.io](https://www.frase.io) **Frase。** Frase是一款内容优化工具，通过使用人工智能技术，提供智能化的SEO优化建议。它可以帮助用户分析网站内容，并提供针对关键词优化的建议，以提高网站在搜索引擎中的排名。Frase还提供语义搜索功能，可以帮助用户找到与其网站相关的问题，从而为他们提供创作内容的灵感和指导。Frase还可以分析竞争对手的网站，并提供比较和改进建议。该产品定价灵活，并根据用户的需求提供不同的套餐选择。
1. [[⭐] https://www.glean.com](https://www.glean.com) **Glean。** Glean是为现代团队提供的企业级搜索和知识发现解决方案。通过搜索所有公司应用程序，找到所需内容，并发现所需知识。
1. [[⭐] https://www.rewind.ai](https://www.rewind.ai) **Rewind AI。** Rewind是一款能够捕捉您在Mac和iPhone上看到的一切内容，并通过AI使其可搜索的工具。它可以帮助您更高效地管理信息，将工作和生活变得更轻松。Rewind具有以下功能和优势：

- 捕捉您在Mac和iPhone上看到的所有内容，包括网页、应用、文档等
- 使用AI技术对捕捉的内容进行分析和索引，使其可以通过搜索快速找到
- 提供个性化的搜索结果，根据您的习惯和偏好进行智能排序
- 支持多种搜索方式，包括关键词搜索、时间范围搜索等
- 提供安全的存储和隐私保护措施，保证您的个人信息安全

Rewind的定价为每月$10，适用于个人用户和企业用户。它适用于各种场景，包括工作、学习、研究等。无论您是需要快速找到之前浏览过的网页，还是需要回顾之前在应用中看到的内容，Rewind都能帮助您轻松完成。
1. [[⭐⭐⭐🚀] https://www.bing.com/chat](https://www.bing.com/chat) **Bing。** bing版ChatGPT聊天机器人，微软新搜索引擎。中国区不可用
1. [[⭐⭐🚀] https://www.perplexity.ai](https://www.perplexity.ai) **Perplexity。** Perplexity AI通过信息发现和共享解锁知识的力量。
1. [[🚀] https://www.phind.com](https://www.phind.com) **Phind。** 为开发人员而生的AI搜索引擎。中国区不可用
1. [[🚀] https://you.com](https://you.com) **YOU。** You是一种具有对话性和持续学习能力的技术，可以增强网络搜索、写作、编码、数字艺术创作和解决复杂问题。

### AI 行业工具 (77)

1. [[⭐⭐⭐] https://chat.sensetime.com](https://chat.sensetime.com) **SenseChat。** 商汤旗下的AI对话助手
1. [[⭐] http://langdrive.ai](http://langdrive.ai) **LangDrive。** Addy AI是为零售和电商品牌打造的客户服务AI，利用您的业务数据训练定制AI，理解客户需求并自动回复客户咨询，提升10倍响应速度。
1. [[⭐] https://ai-beings.com/aiu/](https://ai-beings.com/aiu/) **AiU。** AiU是一个人工智能技术平台,旨在让用户能够创造和使用人工智能产品。它强调人与人工智能的互动,将人工智能技术与用户需求相结合。该平台提供了一系列工具和资源,让用户能够根据自己的需求定制和开发人工智能应用。AiU的核心理念是将人工智能的力量回馈给普通用户,并为用户提供无限可能。
1. [[⭐] https://airkit.ai](https://airkit.ai) **Airkit.ai。** Airkit.ai eCommerce通过GPT-4驱动的AI客服机器人为电商企业提供智能的客户服务支持。它可以覆盖订单状态更新、退货售后、订单问题处理、产品信息查询等多种场景,快速准确地回答客户问题,随时随地为客户提供服务,大幅提高客户满意度;同时,也可以减轻人工客服的工作量,提升企业运营效率。此外,它还具有主动联系客户、个性化定制等功能,可进一步提升客户体验。
1. [[⭐] https://answerai.pro](https://answerai.pro) **AnswerAI.pro。** Answer.AI是一款AI家教应用程序，利用先进的人工智能技术，为用户提供从数学到历史等各个学科的作业解答和学习辅导服务。它通过拍照、扫描问题、上传PDF或聊天等方式与AI家教互动，提供详细的步骤解答和视频解释，帮助学生更好地理解和掌握知识点。该应用支持iOS和Android系统，并提供Chrome浏览器扩展。Answer.AI以其高准确率和高答案率在教育类应用中名列前茅，深受全球数百万学生的喜爱。
1. [[⭐] https://anyword.com](https://anyword.com) **Anyword。** Anyword是一款AI写作工具，为营销团队提供高效撰写营销内容的解决方案。它能够分析您过去发布的所有内容，并帮助您发现最有效的信息传递方式。同时，Anyword提供品牌声音管理功能，让您可以在一个平台上管理品牌口吻、目标受众和品牌规则。您还可以训练定制的AI模型，利用品牌和绩效数据来提高各个渠道的表现，并显著影响业务结果。
1. [[⭐] https://botvip.cn](https://botvip.cn) **AI对话鸭。** AI对话鸭是一个领先的AI聊天对话平台，它集成了多款国产大模型，提供了丰富的对话场景和功能，满足不同用户的需求。该平台以其高效的对话生成能力和多样的应用场景，在提高工作效率和娱乐互动方面具有显著优势。
1. [[⭐] https://chatbros.ai](https://chatbros.ai) **Chatbros.ai。** Chatbros.ai是一款人工智能驱动的聊天机器人,它可以重新定义数字互动,提升转化率、促进销售增长、完全改变用户参与度。它提供无缝的帮助和无限的功能。
1. [[⭐] https://chatlify.me](https://chatlify.me) **Chatlify。** Chatlify是一款AI智能客服助手，可为企业提供销售、支持和成功方面的帮助。它能够处理用户的查询和问题，提供个性化推荐，自动生成工单，计算价格，提供实时价格详情，进行高级故障排除，并提供多语言支持和分析。Chatlify可以帮助企业简化客户互动过程，并提高销售业绩。
1. [[⭐] https://claid.ai](https://claid.ai) **Claid AI Scene Creation。** Claid.ai是一个提供AI生成、增强和编辑产品图片的平台。它能够自动转换普通产品图片为具有拍摄品质的营销图片，提高图片的清晰度，去除背景，并创建令人惊叹的照片，从而提升转化率。Claid.ai支持生成多个适合品牌的产品图片，并提供统一的背景和图像大小，以适应不同的平台。用户可以通过API访问结果，实时获取编辑后的图片。Claid.ai还提供了多种功能，包括图片放大、智能去除背景、智能框架、AI颜色校正等，这些功能可以提高图片的质量和视觉效果。Claid.ai的目标是帮助企业实现图片的统一化和提升，从而提升转化率和销售业绩。
1. [[⭐] https://copyleaks.com](https://copyleaks.com) **Copyleaks。** Copyleaks是唯一的基于AI的平台，可快速检测抄袭内容、AI生成内容等。它被全球数百万人使用，被验证为最准确的AI内容检测器。除了检测抄袭内容外，还可以验证内容是否由人或AI生成，并提供企业级解决方案。定价根据不同需求而定。
1. [[⭐] https://crikk.com](https://crikk.com) **Crikk。** Crikk是一款价格实惠的强大文本转语音工具，支持56种语言，提供真实的语音合成技术。无论是用于语音播报、有声书还是教育，Crikk都能为用户提供高质量的声音合成。用户可以选择免费试用或者采用月费20美元的专业版，月额度为500,000个字符，拥有6种不同的声音和56种语言。此外，Crikk还将推出移动应用，实现图片或PDF的文字转语音。Monster Incorporation Inc.位于Delaware，United States。
1. [[⭐] https://crossplag.com](https://crossplag.com) **Crossplag。** Crossplag 是专注于查重的综合工具，提供超过 100 种语言的单语言和翻译查重功能。用户可以全面控制数据，确保原创性并保护数据隐私。
1. [[⭐] https://designs.ai/cn](https://designs.ai/cn) **Designs AI。** 免费AI设计。使用生成型 AI 创建图像、视频等。利用人工智能的力量提升您的社交媒体营销水平。
1. [[⭐] https://dialoggpt.io/home](https://dialoggpt.io/home) **DialogGPT。** DialogGPT是一个基于GPT模型的对话式聊天机器人,能够帮助网站实时回答用户查询,提高用户参与度和转化率。它使用先进的AI技术,无需任何技术专长就可以为您的网站提供智能客服。DialogGPT可以自定义外观与行为,无缝集成到您的网站中,为用户提供流畅的交互体验。
1. [[⭐] https://donotpay.com](https://donotpay.com) **DoNotPay。** DoNotPay 是一个利用人工智能帮助你与大公司抗争、保护隐私、寻找隐藏收入并对抗垄断平台。它可以帮你自动取消免费试用、解决停车罚单、与客服争议、降低银行费用等。DoNotPay 通过智能算法提供最佳解决方案，使用户能够省时省力地解决各种问题。
1. [[⭐] https://duile.cn/homeIndex](https://duile.cn/homeIndex) **对了网。** 对了网是一个以AI技术为核心的法律服务平台，专注于提供电子合同相关的服务。它通过先进的AI技术，为用户提供智能合同咨询、草拟、审查等功能，以及多种合同模板，满足不同行业和场景的需求。对了网致力于降低法律服务成本，提高效率，同时保障交易安全，适应数字化时代的商业需求。
1. [[⭐] https://elicit.com](https://elicit.com) **Elicit。** Elicit是一款能够以超人速度分析研究论文的AI助手。它可以自动完成繁琐的研究任务，如论文摘要、数据提取和综合研究发现。用户可以搜索相关论文、获取一句话摘要、从论文中提取详细信息并进行整理、寻找主题和概念等。Elicit的准确度高，使用方便，已受到广大研究者的信赖和好评。
1. [[⭐] https://explainthis.ai](https://explainthis.ai) **ExplainThis。** ExplainThis.AI是一款在浏览器中添加聊天AI的插件。它可以解释关键概念，帮助你理解阅读的内容。通过高亮选择文本，助手可以用简单的语言解释给你。它还可以用单击提供整个页面的摘要，节省你的时间。ExplainThis.AI保护您的数据安全和隐私。
1. [[⭐] https://finetalk.in](https://finetalk.in) **FineTalk。** FineTalk是一个利用ChatGPT训练营销对话机器人的在线平台。它可以快速创建个性化的聊天机器人,通过训练网站、文档等数据,使机器人了解您的业务、产品并能及时准确地回答客户查询。主要功能包括多语言支持、与人合作模式、自定义外观、集成Slack等。使用简单,提供免费和收费版本,可满足不同业务需求。
1. [[⭐] https://fintax.golcer.com](https://fintax.golcer.com) **高灯财务 AI 助手。** 高灯财务 AI 助手是一款专注于财税领域的专业工具，它通过对话式智能输出、多模态数据抽取、文本推理等技术，为用户提供财务报告分析、文件解读、智能提取、智能思维导图、办税指南等服务。这款产品利用海量财税领域训练数据，结合垂直知识进行分析和推理，生成专业报告内容，帮助用户轻松掌握文件要点，提升工作效率。
1. [[⭐] https://fireflies.ai](https://fireflies.ai) **fireflies.ai。** Fireflies.ai是一款利用生成式人工智能技术的AI会议记录助手，可自动转录、总结、搜索和分析语音对话。通过与Zoom、Google Meet、Microsoft Teams、Webex等平台集成，生成会议记录和智能摘要。
1. [[⭐] https://gamma.ai](https://gamma.ai) **Gamma.ai。** Gamma.AI是一款基于人工智能的云数据泄露防护解决方案。它通过持续监控员工行为，并在员工发生安全错误时进行提醒，帮助组织防止数据泄露。Gamma.AI提供准确的数据分类和深度学习技术，支持所有应用、设备和用户，并赋予终端用户即时修复的能力。
1. [[⭐] https://hix.ai](https://hix.ai) **Hix AI。** HIX.AI是一款由先进的GPT-3.5/4技术驱动的全能人工智能写作助手。
1. [[⭐] https://ichuangnao.com/introduction](https://ichuangnao.com/introduction) **创脑。** 创脑是国内知名 AI 机器人社区，用户可以免费使用各类 AI 机器人助手，包括行业专家、AI 写作、办公助手等，帮助提升工作效率和生活便利。
1. [[⭐] https://inksprout.co](https://inksprout.co) **Inksprout Video。** Inksprout是一款AI助手，可以从博客生成社交视频。它使用AI生成字幕，让您可以在几秒钟内生成引人注目的、简洁的社交视频。您只需输入博客的URL，AI将自动摘要文章内容，并根据摘要生成视频。您可以使用这些视频在多个社交媒体平台上分享，并提高用户参与度。Inksprout提供免费计划，同时还有更多功能丰富的付费计划可供选择。
1. [[⭐] https://kastro.chat](https://kastro.chat) **Kastro。** Kastro是一个基于ChatGPT的AI聊天机器人，可用于客户支持。它提供即时响应，降低支持成本，增强客户体验。您可以在几分钟内创建和训练一个ChatGPT-powered AI聊天机器人，它可以快速学习和改进以提供更好的响应。Kastro提供24/7即时支持，通过优化和改进客户支持流程，降低支持运营成本。
1. [[⭐] https://keyue.cloud.baidu.com](https://keyue.cloud.baidu.com) **百度智能云客悦。** 百度智能云客悦基于百度文心一言大模型,全面重构智能客服系列产品,涵盖客户服务、智能营销、智能通信三大系列,满足企业智能客服全场景需求。主要产品包括:智能对话平台(提供大模型驱动的高智能客服机器人)、智能外呼平台(高拟人度语音对话营销)、对话洞察平台(对话数据分析洞见优化建议)、智能通信平台(集成通信资源API接入)等。产品优势有:基于大模型对话更准确友好全面、高效快速上线运营、多渠道无缝集成适配等。
1. [[⭐] https://ling.jd.com](https://ling.jd.com) **京东羚珑。** 京东羚珑是一站式内容生产与管理服务平台，提供商品主图设计、广告 banner 设计、店铺首页设计等功能。其主要优点包括丰富的模板选择、免费设计服务、高效便捷的操作流程。产品定位于为商家提供设计合作伙伴服务。
1. [[⭐] https://looka.com](https://looka.com) **Looka。** AI辅助logo和品牌设计
1. [[⭐] https://mokker.ai](https://mokker.ai) **Mokker AI。** Mokker 是一款利用人工智能技术，自动为电商平台或营销材料提供高质量产品图片的在线工具。使用时，只需上传几张产品的照片，Mokker 就会根据您的产品特征和风格，生成逼真的背景和场景。产品内置了一系列高质量模板，如家具、车辆、食物、珠宝等，可直接复用。当然，使用时也可以创建自己产品的专属模板，通过再次描述产品特征和需要在背景图中剔除的元素，最终生成更符合预期的图片效果。
1. [[⭐] https://pipl.ai](https://pipl.ai) **Pipl.ai。** pipl.ai - 超级强化版是一款冷邮件自动化工具，可以轻松发送大量冷邮件。无限连接邮箱，免费预热所有账户，内置邮箱验证和数据清理，AI驱动的序列和模板编写器等功能。定价和定位等详细信息请访问官方网站。
1. [[⭐] https://politepost.net](https://politepost.net) **PolitePost。** PolitePost.net是一个使用人工智能来重写邮件的工具。它可以将您草拟的邮件进行重写和整理，使其更加专业和适合在职场中使用。只需输入您的初稿，包含所有俚语和脏话，我们的AI机器人就会为您进行重写和清理，让您的邮件在几秒钟内变得专业起来。
1. [[⭐] https://qidian.qq.com/module/service.html](https://qidian.qq.com/module/service.html) **腾讯企点客服。** 企点客服是一款智能在线客服系统，基于即时通讯、人工智能等技术，全面提升企业客户服务效率。产品定位于提供全场景的企业级 SaaS 服务，助力企业实现数字化智慧经营。
1. [[⭐] https://quivr.app](https://quivr.app) **Quivr。** Quivr是你的云端第二大脑，旨在轻松存储和检索非结构化信息。它可以处理几乎任何类型的数据，包括文本、图像、代码片段等。Quivr以速度和效率为核心设计，确保快速访问你的数据。同时，它是开源的，完全免费使用。Quivr的主要功能包括：存储和检索非结构化信息、快速高效、安全可靠。Quivr适用于各种使用场景，包括个人知识管理、项目管理、学习笔记等。
1. [[⭐] https://quizlet.com](https://quizlet.com) **Q Chat。** 【教育】教育领域的人工智能导师
1. [[⭐] https://randomx.ai/zh-CN](https://randomx.ai/zh-CN) **RandomX.ai。** RandomX.ai随机中文取名生成器是一款利用人工智能技术，结合语言专业知识与创意天赋，为用户提供快速生成具有文化意义和故事背景的中文名字的服务。该产品支持多种风格选择，包括中国古典神话等，确保生成的名字既符合传统中文取名习俗，又具有独特性。产品完全免费，无需注册，保护用户隐私，并且支持多种语言，适合需要中文名字的个人或企业使用。
1. [[⭐] https://scalenut.com](https://scalenut.com) **Scalenut。** Scalenut是一个AI驱动的SEO和内容营销平台，帮助您从识别关键词集群、创建内容简介到优化内容以提高搜索排名，管理您的整个内容生命周期。
1. [[⭐] https://scite.ai](https://scite.ai) **Scite。** scite是一个用于发现和评估科学文章的平台。通过智能引文，用户可以查看文章的引用情况，并了解引文提供了支持或对照证据。用户可以搜索超过12亿个智能引文，找到关于各个主题的专家分析和观点。scite受到世界领先的大学、出版商和企业的信任。
1. [[⭐] https://secretllama.com](https://secretllama.com) **Secret Llama。** Secret Llama 是一个免费且完全私密的聊天机器人，与ChatGPT不同，它完全在您的浏览器内运行，意味着您的对话数据不会离开您的电脑。首次加载可能需要一些时间，因为模型需要完全下载到您的电脑上，但之后可以断开WiFi工作。支持Chrome和Edge浏览器，需要GPU，不推荐在移动设备上使用。
1. [[⭐] https://studycorgi.com/free-writing-tools/chat-gpt-detector/](https://studycorgi.com/free-writing-tools/chat-gpt-detector/) **Chat GPT Detector for Essays。** ChatGPT 检测器是一个用于检查论文是否由 AI 生成的工具。它通过分析文本中每个词的可预测性来判断文本的真实性，帮助用户识别人工写作与机器生成的文本。该工具的主要优点在于免费、准确、适合学生使用，提供详细的文本分析。
1. [[⭐] https://summify.io](https://summify.io) **Summify。** 探索 Summify.io，这是您总结 YouTube 视频的一键式解决方案。利用人工智能的力量，通过快速有效地关注关键见解来增强您的学习体验。借助 Summify.io，您可以节省时间并轻松掌握长视频的主要思想、记下教育讲座的笔记、总结播客等。立即尝试 Summify.io！
1. [[⭐] https://talkitout.ai](https://talkitout.ai) **TalkItOut。** Talk It Out是一个自定义AI聊天机器人平台，通过上传文档或添加网页链接，可以创建一个能回答相关问题的聊天机器人，并将其添加为网站的小部件。它可以帮助提供即时的客户支持和回答常见问题，提高用户体验和网站流量。Talk It Out还提供不同的定价计划，适合个人用户和企业用户的不同需求。
1. [[⭐] https://wanderlog.com/trip-plan-assistant](https://wanderlog.com/trip-plan-assistant) **Wanderlog。** 【旅游】Wanderlog是一款旅行规划AI助手，使用它来规划下下一场旅行吧！
1. [[⭐] https://wordvice.ai/cn](https://wordvice.ai/cn) **Wordvice AI。** Wordvice AI是一款在线英语语法检查工具，提供实时高效的英语语法和拼写检查，突破基本功能，提供语气风格修改，提供有效反馈建议，适用于各类英文文件。Wordvice AI还提供人工编辑服务和其他英文写作工具。
1. [[⭐] https://www.aifuwus.com/solution/index?link=stentor/icservice](https://www.aifuwus.com/solution/index?link=stentor/icservice) **讯飞A.I.智能客服解决方案。** A.I.智能客服解决方案是科大讯飞基于其先进的语音技术，为企业提供的一套完整的客户服务系统。该系统通过电话、Web、APP、小程序、自助终端等多种渠道，实现智能外呼、智能接听、语音导航、在线文字客服、质检分析、坐席辅助等功能。它通过高识别率的语音识别引擎、自然流畅的语音合成技术、智能打断能力、IVR导航以及客服平台中间件等技术，帮助企业提高客服效率，降低人力成本，同时提升客户服务体验。
1. [[⭐] https://www.aipaperpass.com](https://www.aipaperpass.com) **AIPaperPass。** AIPaperPass是一款AI原创论文写作平台,提供免费千字大纲,5分钟生成3万字初稿,同时包含答辩汇报PPT、开题报告和任务书等增值服务。用户只需输入论文题目,平台即可智能生成高质量论文框架,帮助用户迅速完成论文写作,解决用户论文难题,实现一键PaperPass。
1. [[⭐] https://www.aiprm.com](https://www.aiprm.com) **AIPRM。** AIPRM 是一个 AI Prompt 市场和社区驱动的 Prompt 库。使用它可以在几分钟内完成营销、销售、运营、生产力和客户支持等任务。提供了 ChatGPT、Bard、Midjourney 和 DALL-E 2 的即用型 Prompts。可以轻松创建博客标题、完整的原创文章、服务页面的文案等。AIPRM 可以帮助您以您的声音快速、有创意地创建内容。
1. [[⭐] https://www.arcads.ai](https://www.arcads.ai) **Arcads。** Arcads提供AI视频广告生成器，允许用户快速从文本创建视频广告，特别适合需要大量视频内容的品牌和营销团队。
1. [[⭐] https://www.brandroot.com](https://www.brandroot.com) **Business Names and Logos。** Brandroot的商业名称生成器使用人工智能技术，快速生成数百个引人注目的商业名称，并提供可注册的.com域名。您可以轻松找到适合您企业的完美名称。
1. [[⭐] https://www.chanjing.cc](https://www.chanjing.cc) **蝉镜。** 蝉镜是一个在线数字人视频创作平台，利用 AI 简化视频创作过程，提供 AI 数字人播报、短视频制作、分身定制等服务。广告营销、跨境电商、短视频口播等领域的用户可以在此提升创作效率、降低成本。
1. [[⭐] https://www.dreamavatar.com](https://www.dreamavatar.com) **DreamAvatar。** DreamAvatar是一个基于人工智能技术的数字人生成平台,能够通过简单的文本描述或素材上传快速生成高质量的数字人形象,还支持自定义调整数字人的各种特征。该平台具有操作简单、生成效果逼真的优势,可以广泛应用于数字营销、虚拟主播、直播电商、游戏、动画等领域,为客户提供精准的数字人服务。
1. [[⭐] https://www.editage.cn/paperpal](https://www.editage.cn/paperpal) **Paperpal。** 学术写作新世代，面向科研人员的AI写作工具
1. [[⭐] https://www.getmerlin.in](https://www.getmerlin.in) **Merlin。** Merlin是一款由ChatGPT驱动的终极浏览器扩展，能够彻底改变用户的浏览体验。Merlin提供了多种功能，包括Youtube Summarizer、Blog Summarizer、ChatGPT on Google、Merlin on Twitter、Merlin on LinkedIn、Merlin on Gmail、Live Web Data等，能够简化用户的浏览流程，提升用户的生产力。Merlin提供了免费的GPT-4访问，支持所有语言，具有最佳的安全性，符合SOC2、GDRP、ISO 27001等标准。用户可以通过安装、激活、打开Merlin来使用这款浏览器扩展。
1. [[⭐] https://www.getresponse.com/features/email-marketing/ai-email-generator](https://www.getresponse.com/features/email-marketing/ai-email-generator) **GetResponse Email Generator。** 使用GetResponse的AI邮件生成器，利用GPT-3.5技术快速高效地创建高质量的邮件和新闻简报。通过行业和目标优化的主题行和内容，提升你的邮件营销效果。
1. [[⭐] https://www.gravitywrite.com](https://www.gravitywrite.com) **GravityWrite。** GravityWrite 是一款 AI 写作助手，能快速生成高质量的内容，适用于博客、广告、邮件和社交媒体。它节省时间、提高效率，降低成本，是提升点击率、转化率和销售额的利器。
1. [[⭐] https://www.greynights.com](https://www.greynights.com) **GreyNights。** GreyNights - AI Companions 是一款通过AI技术生成的男性伴侣服务，旨在通过聊天应用如WhatsApp或Telegram提供个性化的聊天体验。产品注重隐私保护，24小时全天候服务，可以根据用户偏好定制虚拟伴侣，进行深入对话和轻松交流。
1. [[⭐] https://www.hubspot.com/campaign-assistant](https://www.hubspot.com/campaign-assistant) **HubSpot Campaign Assistant。** HubSpot智能营销助手是一个免费的AI营销资产生成器，可用于创建落地页、电子邮件和广告文案。它基于你的营销活动内容生成所需的文本，帮助你节省时间和精力。
1. [[⭐] https://www.ihuiwa.com](https://www.ihuiwa.com) **绘蛙。** 绘蛙是一款智能图片、文案创作平台，通过AI生成商拍图和种草文案，免费创作小红书图片、电商商品主图等。其功能包括AI生成商拍图、种草文案、美图、稿定设计、换装、去水印、图片高清修复等。定位于为用户提供简洁好用的智能创作工具。
1. [[⭐] https://www.intelogos.com](https://www.intelogos.com) **Intelogos。** Intelogos是首款自动详细人员分析和绩效管理工具。它可以收集员工绩效数据,生成建议,帮助团队成长进步。
1. [[⭐] https://www.iwencai.com](https://www.iwencai.com) **同花顺问财。** 同花顺问财是同花顺旗下的智能选股平台，提供智能选股、量化投资、技术分析等服务，覆盖股票、指数、美股、港股等，帮助投资者提高投资效能。定位于为投资者提供智能化的投资决策支持。
1. [[⭐] https://www.ixigo.com/plan](https://www.ixigo.com/plan) **Ixigo。** 【旅游】GPT旅行，在几秒钟内计划您的梦想旅行！
1. [[⭐] https://www.khanmigo.ai](https://www.khanmigo.ai) **Khanmigo。** 【教育】可汗学院Khanmigo，教育界的世界级人工智能。
1. [[⭐] https://www.kraftful.com](https://www.kraftful.com) **Kraftful。** Kraftful为产品建设者提供深度AI分析用户反馈的能力，帮助他们了解用户的需求，以及如何让产品更加令人愉悦。我们的产品经理工具能够综合客户情感，提供有价值的见解，优化产品开发生命周期。
1. [[⭐] https://www.piccopilot.com](https://www.piccopilot.com) **Pic Copilot。** Pic Copilot是一个利用图像生成模型为电商提供的AI驱动图片优化工具。它能够通过对大量图片点击量数据的训练,有效提高图片的点击转化率,从而优化电商的营销效果。其关键优势是提高图片的点击转化率,从而提升电商营销效果。它是阿里巴巴团队训练的数据结果,能够显著优化图片的点击转化表现。
1. [[⭐] https://www.researchrabbit.ai](https://www.researchrabbit.ai) **ResearchRabbit。** ResearchRabbit是研究人员最强大的发现应用程序。它为研究人员提供了强大的搜索和筛选功能，帮助他们快速找到所需的学术论文、数据集和其他研究资源。ResearchRabbit还具有智能推荐和团队协作功能，帮助研究人员更好地组织和管理他们的研究工作。该应用程序还提供了定价方案，适用于个人研究人员和团队。
1. [[⭐] https://www.scholarcy.com](https://www.scholarcy.com) **Scholarcy。** Scholarcy是一款在线文献摘要工具，可以将长篇文章生成摘要卡片。它通过阅读研究文章、报告和书籍章节，并在几秒钟内将它们拆分成易于理解的部分，帮助用户快速评估任何文献对他们工作的重要性。它提取关键信息，如研究参与者、数据分析、主要发现和局限性，并将其转化为摘要卡片。Scholarcy还可以提取文献中的图表和图片，并创建链接以打开引用来源。用户可以使用Scholarcy的浏览器扩展与开放获取库集成，并通过付费订阅服务Scholarcy Library建立个人摘要研究库。
1. [[⭐] https://www.servibot.io](https://www.servibot.io) **ServiBot。** ServiBot是一个基于AI的智能聊天机器人,可以帮助企业快速接入聊天机器人,提高用户体验和转化率。它具有易于集成、可高度自定义、智能对话等功能。企业可以通过ServiBot提升客户服务质量,同时获得用户行为数据分析。它既可以作为独立的聊天机器人使用,也可以集成在网站、APP等中。ServiBot可以帮助企业节省客服成本,提高工作效率。
1. [[⭐] https://www.smartwriter.ai](https://www.smartwriter.ai) **Smartwriter。** 智能写手是一款使用AI技术帮助用户生成高度个性化冷邮件和LinkedIn信息的工具。它可以自动化您的整个推广过程，比人工快40倍且更经济实惠。使用智能写手，您可以快速生成千千万万个个性化邮件，使您的回复率提高8倍，从而帮助您更好地推动销售。
1. [[⭐] https://www.storynest.ai](https://www.storynest.ai) **Storynest.ai。** StoryNest.ai是一款AI驱动的互动故事平台，可以帮助用户创作吸引人的故事、深入的文章和全面的教育内容。通过与角色对话和超级故事书等功能，深入互动学习。加入StoryNest.ai，创造力、教育和技术完美结合。
1. [[⭐] https://www.sybill.ai](https://www.sybill.ai) **Sybill。** Sybill是一款AI助理，可以自动更新CRM、撰写跟进邮件，并从客户互动中提供无与伦比的洞察力。帮助销售团队发挥出全部潜力。
1. [[⭐] https://www.tawk.to](https://www.tawk.to) **tawk.to。** tawk.to是一款完全免费的在线聊天软件，它允许网站所有者监控并与访问者进行实时聊天，响应支持票据，使用CRM组织联系人，并创建帮助中心以增强客户自助服务的能力。tawk.to的主要优势在于其易用性、安全性以及无需任何费用即可使用。此外，它还提供了AI Assist功能，允许用户训练一个完全自动化的AI驱动聊天机器人。
1. [[⭐] https://www.teamsmart.ai](https://www.teamsmart.ai) **TeamSmart AI。** TeamSmart AI是一个Chrome插件，通过一键访问团队智能AI助手，帮助用户提高工作效率。该插件提供了多种功能，包括内容摘要、代码生成、推文起草等，用户可以直接在浏览器中完成这些任务。TeamSmart AI还提供了25+个新的AI营销助手，用户可以根据自己的需求选择使用。
1. [[⭐] https://www.tipranks.com](https://www.tipranks.com) **Tipranks。** 【金融】
1. [[⭐] https://www.turnitin.com](https://www.turnitin.com) **Turnitin。** 【教育】Turnitin是一款促进学术诚信，简化评分和反馈，防止抄袭，并改善学生的学习成果的产品。
1. [[⭐] https://www.yunque360.com/product-ai.html](https://www.yunque360.com/product-ai.html) **云雀AI智能客服。** 云雀 AI 智能客服是一款基于大数据的在线客服平台，通过智能机器人提供多渠道客户服务，帮助企业降低成本、提高效率。该平台结合了 AI 技术和客服系统，为企业提供高效的客户交互体验，提升服务质量。
1. [[🚀] https://www.copy.ai](https://www.copy.ai) **Copy AI。** 人工智能营销文案和内容创作工具，帮助各行各业的撰稿人、营销人员和企业快速高效地创建高质量的内容。

### AI 写作助手 (119)

1. [[⭐⭐⭐🧑‍💻] https://chatglm.cn](https://chatglm.cn) **智谱清言。** 清华大学孵化的智谱AI提供的千亿参数对话模型ChatGLM
1. [[⭐⭐⭐] https://www.notion.so](https://www.notion.so) **Notion AI。** Notion AI是一款功能强大的人工智能工具，它可以帮助用户自动化和管理个人和团队的任务和流程。
1. [[⭐⭐⭐🧑‍💻] https://www.tiangong.cn](https://www.tiangong.cn) **天工AI智能体。** 昆仑万维提供的对标 ChatGPT 的双千亿级大语言模型，也是一个对话式AI助手
1. [[⭐⭐⭐] https://www.writingo.net](https://www.writingo.net) **火山写作。** 火山写作是由字节跳动推出的，集成创作、润色、纠错、改写、翻译等能力的中英文AI 写作助手。
1. [[⭐⭐] https://www.giiso.com](https://www.giiso.com) **Giiso写作机器人。** Giiso是一款内容创作AI辅助工具，提供资讯写作、小红书文案、短视频脚本、PPT创作、文生图等类型创作。
1. [[⭐] http://gptzero.me](http://gptzero.me) **GPTZero。** GPTZero是最先进的AI侦测工具，用于侦测ChatGPT、GPT-4、Bard等AI模型的抄袭。只需几秒钟即可检查高达50000个字符的文本。GPTZero已被100多家媒体报道，是最可靠的AI侦测工具。
1. [[⭐] https://ahrefs.com](https://ahrefs.com) **Ahrefs。** Ahrefs 是一款全能的 SEO 工具集，具有分析竞争对手、审核和优化网站、发现关键词、获取内容创意和链接机会以及跟踪排名进展等功能。其数据和指标是 SEO 行业中最受信任的，深受市场营销人员和领先公司的信赖。
1. [[⭐] https://ai-detector.info](https://ai-detector.info) **AI Detector。** AI Detector是一个在线工具，使用先进的算法和机器学习来检测文本是否由AI生成。它可以分析写作风格和句子结构，判断内容是否由ChatGPT、GPT 4、Bard、Claude或人类创作。您可以免费使用AI Detector，每次最多检测1000个字，并获得95%的准确率。
1. [[⭐] https://ai.chinaz.com](https://ai.chinaz.com) **站长 AI。** 站长 AI 是一个强大的 AI 工具合集，通过人工智能技术为用户提供内容鉴定、编程辅助、SEO 优化、智能写作等多种功能。其主要优点包括高效提升工作效率、帮助用户解决难题、节省时间成本、提高内容质量等。站长 AI 定位于为广大站长和创作者提供便捷、智能的工具支持。
1. [[⭐] https://ai.kezhan365.com](https://ai.kezhan365.com) **万彩AI。** 万彩AI是一款强大的AI写作工具合集，它为缺乏灵感或对写作感到困难的人提供了AI智能写作支持。
1. [[⭐] https://ai.zaker.cn](https://ai.zaker.cn) **爱创作。** 一键生成文章、营销文本、配图与短视频等多类型内容
1. [[⭐] https://aic.oceanengine.com](https://aic.oceanengine.com) **抖音即创。** 即创工作台是一个一站式的智能创意生产与管理平台。它集成了视频创作、图文创作、直播创作等多种创意工具,可以通过AI的力量大大提高创作效率。主要功能和优势包括:1)视频创作:内置多种AI视频创作工具,支持智能编剧、数字人物、一键成片等,可快速生成高质量视频内容;2)图文创作:提供智能图文和商品图片生成工具,可快速制作微信文章、产品详情等图文内容;3)直播创作:支持AI直播背景、直播文案等创作工具,可轻松制作抖音、快手等直播内容。定位为新创和创意从业者的创意助手,以合理价格提供创意生产全流程服务。
1. [[⭐] https://aigc.baidu.com](https://aigc.baidu.com) **度加创作工具。** 百度旗下产品，打造人人可用的AI创作工具
1. [[⭐] https://aigc.yizhentv.com](https://aigc.yizhentv.com) **一帧秒创。** 一帧秒创是基于秒创AIGC引擎的智能视频创作平台，包含AI数字人、AI帮写、AI视频、AI作画等AIGC工具。
1. [[⭐] https://aiseo.ai](https://aiseo.ai) **AISEO。** AISEO是一款AI写作助手，可以帮助用户快速生成优化的SEO内容。它提供了市场上最先进的改写工具，让您在几分钟内生成优化的内容。AISEO还支持根据品牌声音自动生成文案，帮助您在行业中占据领先地位。除此之外，AISEO还提供其他功能，如文档的改写、阅读可读性改进等。定价方案灵活多样，适合不同的用户需求。
1. [[⭐] https://aistudio.baidu.com/aistudio/projectdetail/3557574](https://aistudio.baidu.com/aistudio/projectdetail/3557574) **PP飞桨。** 公文写作｜智能笔杆子是基于 ERNIE 3.5 模型的公文撰写助手，专为编写公文文章设计。该应用能够提供优质的公文风格文章，适用于国企公司内部新闻等场景。
1. [[⭐] https://anyword.com](https://anyword.com) **Anyword。** Anyword是一款AI写作工具，为营销团队提供高效撰写营销内容的解决方案。它能够分析您过去发布的所有内容，并帮助您发现最有效的信息传递方式。同时，Anyword提供品牌声音管理功能，让您可以在一个平台上管理品牌口吻、目标受众和品牌规则。您还可以训练定制的AI模型，利用品牌和绩效数据来提高各个渠道的表现，并显著影响业务结果。
1. [[⭐] https://app.grammarly.com](https://app.grammarly.com) **Grammarly。** Grammarly是一款受数百万人信赖的AI写作助手，帮助用户自信地沟通，提高写作速度和乐趣。使用简单，立即下载应用程序。
1. [[⭐] https://audionotes.ai](https://audionotes.ai) **AudioNotes.ai。** AudioNotes.ai是一款利用智能AI将您的口述文字转化为有序文本摘要的应用程序，使得记笔记、头脑风暴和内容创作等活动变得更加轻松！您只需通过语音输入，即可获得清晰、有序的文字记录。此外，AudioNotes.ai还具有智能分类和标签功能，帮助您快速组织和检索笔记。该应用程序适用于各种场景，包括会议记录、学习笔记、写作草稿等。通过AudioNotes.ai，您可以更高效地记录和整理您的想法，提升工作和学习效率。
1. [[⭐] https://bearly.ai](https://bearly.ai) **Bearly。** 英文阅读写作效率提高10倍
1. [[⭐] https://botsmart.net](https://botsmart.net) **博特妙笔。** 博特妙笔是国内领先的AIGC大模型公文写作平台，集查、写、审、学一体的在线公文写作神器。拥有公文内容权威供给、公文内容决策辅助、公文内容自动生成、公文内容AI审核四项核心能力。通过AI生成、AI润色、AI校对、AI续写、AI灵感的出色能力以及丰富的公文写作素材、公文范文、公文模板数据库，为公职人员公文写作提效降本、知识赋能。
1. [[⭐] https://chat.moyanaigc.com](https://chat.moyanaigc.com) **陌言AI。** 陌言AI写作是一个集多种智能写作功能于一体的平台，它利用人工智能技术帮助用户在不同的写作场景下快速生成高质量文案和文章。产品背景信息显示，陌言AI写作小程序版在微信上可以搜索使用，并且关注公众号可以体验到AI音乐、AI视频、姓氏头像等工具。产品的主要优点包括高效率、原创性和个性化，适合需要大量文案创作和编辑的用户。
1. [[⭐] https://chuangyi.taobao.com/pages/aiCopy](https://chuangyi.taobao.com/pages/aiCopy) **悉语。** 悉语智能是阿里妈妈创意中心出品的一款一键生成商品营销文案的工具。
1. [[⭐] https://contacted.io](https://contacted.io) **contacted.io。** contacted.io是一个利用人工智能技术提供SEO和内容优化报告的网站，旨在帮助用户提升网站在搜索引擎中的可见度，吸引更多客户。它通过高级AI分析，提供定制化代码，无需编码技能即可实现网站优化。产品的主要优点包括无需编码技能、提供详细的SEO分析、优化本地和全球可见度、内容分析以及布局评估等。
1. [[⭐] https://contentatscale.ai/ai-prompt-library](https://contentatscale.ai/ai-prompt-library) **Content at scale。** 收录最佳的ChatGPT prompt提示词
1. [[⭐] https://effidit.qq.com](https://effidit.qq.com) **Effidit写作助手。** Effidit是由腾讯AI Lab 开发的一个智能创作助手，探索用AI技术提升写作者的写作效率和创作体验。
1. [[⭐] https://fullpeace.cn](https://fullpeace.cn) **风平智能。** 风平 IP 智造平台是基于 AIGC 的智能化 IP 打造平台，致力于提供虚拟数字人定制、AI 短视频内容生产和数字人直播的一站式解决方案。通过结合领先的 AI 技术，平台实现了数字人的高质量生产和互动能力，为用户打造全新的数字人 IP 体验。
1. [[⭐] https://gemini.google.com](https://gemini.google.com) **Gemini & Gemini Advanced。** Gemini是Google AI黑科技，可帮助你处理写作、规划、学习等事务。它可以与你轻松对话，提供创意灵感，帮助提升工作效率。Gemini还可以帮助你进行写作、规划、学习等任务，并提供相关的建议和指导。Gemini是一个强大的工具，适用于个人和团队使用。
1. [[⭐] https://getgetai.com/workstation](https://getgetai.com/workstation) **字语未来。** 用AI创造更有价值的信息，定义新一代智能办公平台 `[error][-1]timeout`
1. [[⭐] https://getliner.com](https://getliner.com) **Liner。** Liner 是由 GPT-4 提供支持，旨在提高您的生产力。通过摘要文章、生成代码和撰写电子邮件，优化工作流程。
1. [[⭐] https://gifshift.xyz](https://gifshift.xyz) **GifShift。** GifShift提供了一个简单的三步流程，用户可以上传GIF或从图库中选择一个，然后输入描述性的提示，以生成具有标志性角色或风格的新GIF版本。该服务由fal.ai提供支持。
1. [[⭐] https://guanjia.seowhy.com](https://guanjia.seowhy.com) **搜外内容管家。** 搜外内容管家是一款集关键词挖掘、AI 创作、文章发布和外链发布于一体的内容管理工具。其主要优点在于自动化流程，帮助用户轻松实现关键词挖掘、文章创作和发布。产品背景信息为提高网站内容质量和 SEO 效果。价格免费。
1. [[⭐] https://hailuoai.com](https://hailuoai.com) **海螺问问。** 海螺AI是一个基于先进的AI生成技术打造的对话式智能助理。它可以通过简单的对话,为用户提供知识问答、信息检索、公众号文章写作、小红书笔记生成等服务,帮助用户快速获取信息,提高工作效率。主要功能包括:搜索问答、创意写作、语音交互等。适用于需要知识支持的创作者、自媒体从业者、学生群体等。
1. [[⭐] https://hix.ai](https://hix.ai) **Hix AI。** HIX.AI是一款由先进的GPT-3.5/4技术驱动的全能人工智能写作助手。
1. [[⭐] https://huixie.iflyrec.com/welcome](https://huixie.iflyrec.com/welcome) **讯飞写作。** 讯飞写作基于讯飞星火认知大模型能力，支持多场景写作，提供会议纪要，求职简历，心得体会，入党申请，论文大纲，品宣文案，PPT 大纲等各类写作模板。AI 对话，激发灵感。
1. [[⭐] https://ibiling.cn](https://ibiling.cn) **笔灵AI。** 笔灵AI是国内领先的AI写作助手与智能工具。专为提高写作效率而设计，提供免费的AI文章改写、论文辅助、商业计划书撰写等服务。
1. [[⭐] https://ichuangnao.com/introduction](https://ichuangnao.com/introduction) **创脑。** 创脑是国内知名 AI 机器人社区，用户可以免费使用各类 AI 机器人助手，包括行业专家、AI 写作、办公助手等，帮助提升工作效率和生活便利。
1. [[⭐] https://if.caiyunai.com](https://if.caiyunai.com) **彩云小梦。** 彩云小梦是一个智能写作AI，你只需开个头，AI 就会帮你创作故事。你可以自由定义故事的世界设定，并扮演其中的角色，与其他角色聊天。
1. [[⭐] https://inksprout.co](https://inksprout.co) **Inksprout Video。** Inksprout是一款AI助手，可以从博客生成社交视频。它使用AI生成字幕，让您可以在几秒钟内生成引人注目的、简洁的社交视频。您只需输入博客的URL，AI将自动摘要文章内容，并根据摘要生成视频。您可以使用这些视频在多个社交媒体平台上分享，并提高用户参与度。Inksprout提供免费计划，同时还有更多功能丰富的付费计划可供选择。
1. [[⭐] https://jasper.ai](https://jasper.ai) **Jasper。** 最佳AI写作和艺术生成工具
1. [[⭐] https://jenni.ai](https://jenni.ai) **jenni。** 面向作家的AI协作助手
1. [[⭐] https://katteb.com/en](https://katteb.com/en) **Katteb。** Katteb是最佳的AI写作工具，可进行事实核查并生成可靠的AI内容。加入超过200,000位依赖Katteb的作者！Katteb提供多达30种类型、超过110种语言的内容生成，通过引用可信赖来源的内文引文，确保内容的准确性。
1. [[⭐] https://languagetool.org](https://languagetool.org) **Language Tool。** LanguageTool 是一款免费的英语、西班牙语和其他30种语言的语法检查和改写工具。
1. [[⭐] https://ling.jd.com](https://ling.jd.com) **京东羚珑。** 京东羚珑是一站式内容生产与管理服务平台，提供商品主图设计、广告 banner 设计、店铺首页设计等功能。其主要优点包括丰富的模板选择、免费设计服务、高效便捷的操作流程。产品定位于为商家提供设计合作伙伴服务。
1. [[⭐] https://littlefrog.ai](https://littlefrog.ai) **写作蛙。** 清华智谱旗下的AI写作助手
1. [[⭐] https://longshot.ai](https://longshot.ai) **LongShot AI。** LongShot AI 是一款旨在满足您内容需求的高效可靠的生成性人工智能工具。利用可靠的数据源和全面的事实核实，我们的人工智能驱动平台为您提供最准确可靠的信息，确保您的内容毫无疑虑。不再担心数据的可靠性和过时的信息，LongShot AI 不断更新知识库，确保您的内容始终相关和最新。我们的先进算法对事实进行仔细的交叉核实，消除了任何错误的可能性。LongShot AI 简化了事实核实的过程，为您节省宝贵的时间，让您专注于业务的其他方面。LongShot AI 提供灵活、定制的解决方案，以满足您机构或企业的独特需求。
1. [[⭐] https://ltx.studio](https://ltx.studio) **LTX Studio。** LTX Studio是一个集成了AI技术的创新视频制作平台，它允许用户从概念到最终剪辑，全面控制视频的各个方面。该平台通过AI技术，将创意转化为连贯的视频故事，提供角色一致性、自动编辑、深度帧控制等功能，旨在简化视频制作流程，提高创作效率。
1. [[⭐] https://lunwenbang.cc](https://lunwenbang.cc) **AI论文帮。** 5分钟生成万字优质原创论文！
1. [[⭐] https://magickpen.com](https://magickpen.com) **MagicPen。** 在线AI英语写作助手
1. [[⭐] https://metaso.cn](https://metaso.cn) **秘塔AI搜索。** 秘塔科技旗下的一款AI搜索产品，能够大幅提升搜索效率，解决日常生活、工作学习等场景中遇到的各类搜索需求
1. [[⭐] https://miaobi.xinhuaskl.com](https://miaobi.xinhuaskl.com) **新华妙笔。** 新华社媒体出品！AI公文写作学习平台
1. [[⭐] https://miro.com/ai](https://miro.com/ai) **Miro AI。** Miro AI是你和团队的超能力助手。它能帮助你释放创意、提高协作效率，是你的创意、协作和效率的新启动平台。Miro AI拥有多种功能，支持可视化项目管理、图表绘制、产品开发流程、内容和数据可视化、工作坊协作等场景。它能智能扩展你的思维，帮助你生成广阔、创新的想法。
1. [[⭐] https://mp.weixin.qq.com/s/fZtFbxkHvmyQPykc81pydw](https://mp.weixin.qq.com/s/fZtFbxkHvmyQPykc81pydw) **腾讯文档智能助手。** 支持全品类内容生成、数据处理、版式美化等高效创作
1. [[⭐] https://noty.ai](https://noty.ai) **Noty AI。** ChatGPT驱动的AI会议转录工具
1. [[⭐] https://novelistai.com](https://novelistai.com) **Novelist AI。** AI辅助你创建自己的小说
1. [[⭐] https://originality.ai](https://originality.ai) **Originality AI。** Originality AI是一款智能写作助手，帮助用户提升写作效率和质量。它通过自然语言处理和机器学习技术，提供实时的字数和字符统计，帮助用户控制文章长度；还能自动检测文本中的重复内容和抄袭问题，保证内容的原创性；同时，它还提供了丰富的写作模板和提示，帮助用户更好地组织思路和提升文章质量。Originality AI定价灵活，用户可以选择免费试用或购买高级会员享受更多功能和服务。
1. [[⭐] https://otterai.sjv.io/c/3697237/1063514/13661](https://otterai.sjv.io/c/3697237/1063514/13661) **Otter.ai。** Otter.ai使用AI进行自动会议笔记，实时转录，记录音频，自动捕捉幻灯片，并生成会议摘要。它可以与Zoom、Microsoft Teams和Google Meet等平台集成，实时转录会议内容，并生成自动化的会议笔记。用户可以在Web、iOS或Android应用中实时跟进，并与团队合作。此外，Otter还能自动捕捉并插入会议中共享的幻灯片，方便用户回顾讨论内容。如果错过了会议的任何部分，Otter还会实时生成摘要，供用户方便回顾。价格根据不同用户类型有所不同。
1. [[⭐] https://paraphrasetool.com](https://paraphrasetool.com) **Paraphraser。** 免费语言转述工具是一款多语言转述工具，可以帮助用户重新表达句子，改写段落，重写文章，检查语法并消除抄袭。它提供了15种免费转述模式，适用于100多种语言。用户可以将原始文本粘贴或输入到工具中，然后生成最佳转述结果。
1. [[⭐] https://promptport.ai](https://promptport.ai) **PromptPort。** PromptPort 是一个提供创意写作灵感的平台，通过提供丰富的写作提示和创作工具，激发用户的创作热情和想象力，创建、优化和分享 ChatGPT 的提示词。用户可以浏览各种主题的写作提示，从中获取灵感并展开创作。PromptPort 还提供文本生成工具和可视化生成工具，帮助用户优化写作效果。该平台适用于作家、诗人、学生、教师和任何对创作感兴趣的人。
1. [[⭐] https://resoomer.com](https://resoomer.com) **Resoomer。** Résoomer 是一款用于文本摘要的软件和在线工具：它允许您通过重要概念来总结和分析您的文章。它提供了一种有效的解决方案，可以节省阅读和理解长文本的时间。 Resoomer 使用人工智能算法从文本中提取主要思想，并以简洁明了的方式呈现它们。该软件供学生、信息专业人员和研究人员用来合成文章、报告和研究论文。
1. [[⭐] https://rytr.me](https://rytr.me) **Rytr。** Rytr 是一款人工智能写作助手，帮助您以更快的速度、更低的成本创作高质量内容！它提供免费的基础功能，同时还提供升级套餐以满足您的不同需求。拥有超过 7,000,000 + 的用户，通过使用 Rytr 已经节省了 25,000,000 + 小时和 500 百万 + 美元的内容创作成本。Rytr 支持 40 + 种用例和模板，覆盖您的各种写作需求，并可选择 30 + 种语言进行创作。您可以根据不同的情感选择 20 + 种语调，生成出与众不同的内容。通过使用科学的文案撰写公式，如 AIDA 和 PAS，Rytr 提供了最佳质量的输出，几乎不需要编辑。使用强大的富文本编辑器，您可以在短短 15 分钟内将原始想法打磨成精美的作品。Rytr 还提供卓越的团队协作和项目管理功能，使您能够轻松管理多个项目。它还具有浏览器扩展，可随时随地帮助您创作令人惊叹的内容。无论您是在写电子邮件、社交媒体帖子还是博客文章，Rytr 都能为您节省时间并确保内容始终达到要求。
1. [[⭐] https://scalenut.com](https://scalenut.com) **Scalenut。** Scalenut是一个AI驱动的SEO和内容营销平台，帮助您从识别关键词集群、创建内容简介到优化内容以提高搜索排名，管理您的整个内容生命周期。
1. [[⭐] https://smodin.io/zh-cn](https://smodin.io/zh-cn) **Smodin。** 全球数百万学生、作家和互联网工作者使用的日常应用程序。我们最受欢迎的应用程序包括文本重写器、抄袭检查器、自动引文机和多语言翻译器。
1. [[⭐] https://studycorgi.com/free-writing-tools/chat-gpt-detector/](https://studycorgi.com/free-writing-tools/chat-gpt-detector/) **Chat GPT Detector for Essays。** ChatGPT 检测器是一个用于检查论文是否由 AI 生成的工具。它通过分析文本中每个词的可预测性来判断文本的真实性，帮助用户识别人工写作与机器生成的文本。该工具的主要优点在于免费、准确、适合学生使用，提供详细的文本分析。
1. [[⭐] https://tingwu.aliyun.com](https://tingwu.aliyun.com) **通义听悟。** 阿里推出的会议转录工具
1. [[⭐] https://tldrthis.com](https://tldrthis.com) **TLDR this。** TLDR This是一款免费的在线文本摘要工具，利用先进的人工智能技术将长篇文章、文档、论文等压缩成关键摘要段落。它能帮助用户从信息过载中解放出来。
1. [[⭐] https://undetectable.ai](https://undetectable.ai) **Undetectable.ai。** 逍遥AI是一款AI写作工具，旨在将被AI检测器标记的内容转化为与人类写作无法区分的优质文本。我们的基于AI的解决方案保证了不可区分的结果，让您拥有与品牌声音一致、流畅的文本，与您的受众产生共鸣。立即信任我们，提升您的内容水平！
1. [[⭐] https://wantalk.baidu.com](https://wantalk.baidu.com) **万话。** 万话创作者平台是一个专注于角色创建和管理的在线服务，它允许用户构建和细化角色设定，包括基础信息、世界观设定、角色设定、隐藏设定以及开场白。该平台特别适合需要角色构建和剧情推进的写作项目，如小说创作、剧本编写等。它通过提供角色调试功能，帮助用户达到理想的角色设定效果。
1. [[⭐] https://wantquotes.net](https://wantquotes.net) **据意查句。** 清华出品！AI 神器让你的文案立马变高级
1. [[⭐] https://wensi.sodabot.cn](https://wensi.sodabot.cn) **文思助手。** 文思助手是一款AI写作智能体，能够一键生成专业报告、工作总结、科研论文等文档。它利用先进的人工智能技术，为用户节省时间，提高工作效率。该产品由厦门苏哒智能科技有限公司开发，拥有强大的功能和广泛的应用场景。
1. [[⭐] https://wordai.com](https://wordai.com) **WordAi。** 10倍速AI内容输出！创建读者喜爱的优质内容
1. [[⭐] https://wordvice.ai/cn](https://wordvice.ai/cn) **Wordvice AI。** Wordvice AI是一款在线英语语法检查工具，提供实时高效的英语语法和拼写检查，突破基本功能，提供语气风格修改，提供有效反馈建议，适用于各类英文文件。Wordvice AI还提供人工编辑服务和其他英文写作工具。
1. [[⭐] https://writebot.io](https://writebot.io) **WriteBot。** WriteBot是一个AI辅助写作工具，旨在帮助用户快速生成独特、符合SEO标准的内容。不需要月费订阅，采用按需付费的定价模式。这个工具特别适合生产博客文章、Facebook广告、产品描述等，带有关键词和SEO优化功能，提高内容创作的效率和质量。
1. [[⭐] https://wukong.com/tool](https://wukong.com/tool) **小悟空AI。** 小悟空是一个集成了多种智能工具的网站，旨在提高个人和团队的创作效率和运营效果。它通过提供诸如文章生成、视频脚本创作、笔记创作等多样化功能，满足不同用户在内容创作、个人表达、学习教育等方面的需求。产品背景基于人工智能技术，结合大数据分析，为用户提供个性化、高质量的服务。价格定位为免费试用，部分功能付费，以适应不同用户的需求。
1. [[⭐] https://www.5118.com/ai/articlegenius](https://www.5118.com/ai/articlegenius) **5118 SEO优化精灵。** 一键式生成高质量SEO文章
1. [[⭐] https://www.aigaixie.com](https://www.aigaixie.com) **爱改写。** 爱改写是一款在线AI内容创作工具，帮助您通过查词、智能改写、纠错、查原创度等功能，帮助提高您的内容生产效率。
1. [[⭐] https://www.aipaperpass.com](https://www.aipaperpass.com) **AIPaperPass。** AIPaperPass是一款AI原创论文写作平台,提供免费千字大纲,5分钟生成3万字初稿,同时包含答辩汇报PPT、开题报告和任务书等增值服务。用户只需输入论文题目,平台即可智能生成高质量论文框架,帮助用户迅速完成论文写作,解决用户论文难题,实现一键PaperPass。
1. [[⭐] https://www.aiprm.com](https://www.aiprm.com) **AIPRM。** AIPRM 是一个 AI Prompt 市场和社区驱动的 Prompt 库。使用它可以在几分钟内完成营销、销售、运营、生产力和客户支持等任务。提供了 ChatGPT、Bard、Midjourney 和 DALL-E 2 的即用型 Prompts。可以轻松创建博客标题、完整的原创文章、服务页面的文案等。AIPRM 可以帮助您以您的声音快速、有创意地创建内容。
1. [[⭐] https://www.contentscale.ai](https://www.contentscale.ai) **contentatscale。** AI 内容检测器拥有惊人的 98% 准确率，可区分人类与来自 ChatGPT、GPT4、Bard、Claude 和 Gemini 等 AI 生成的内容。它在搜索引擎排名、学术评分和读者感知方面具有重要影响。
1. [[⭐] https://www.creatifyone.com](https://www.creatifyone.com) **创一AI。** 创一AI是一款专业的AI短视频脚本创作工具，旨在通过人工智能技术帮助用户快速生成高质量的短视频脚本。该产品利用先进的自然语言处理技术，结合用户需求，能够自动分析并创作出符合主题的脚本内容，大大提高了视频创作者的工作效率。创一深入理解以及对用户需求的精准把握，价格定位为免费体验，以吸引更多用户使用。
1. [[⭐] https://www.editage.cn/paperpal](https://www.editage.cn/paperpal) **Paperpal。** 学术写作新世代，面向科研人员的AI写作工具
1. [[⭐] https://www.editgpt.app](https://www.editgpt.app) **editGPT。** 让ChatGPT修改英语文章
1. [[⭐] https://www.elmo.chat](https://www.elmo.chat) **Elmo。** Elmo是一款AI网络副驾驶，作为Chrome扩展程序，能够将网页内容即时压缩成简洁的摘要，提供具体问题的答案，从网页中获取相关信息，并与PDF和YouTube视频进行互动，以增强用户的生产力和理解。
1. [[⭐] https://www.frase.io](https://www.frase.io) **Frase。** Frase是一款内容优化工具，通过使用人工智能技术，提供智能化的SEO优化建议。它可以帮助用户分析网站内容，并提供针对关键词优化的建议，以提高网站在搜索引擎中的排名。Frase还提供语义搜索功能，可以帮助用户找到与其网站相关的问题，从而为他们提供创作内容的灵感和指导。Frase还可以分析竞争对手的网站，并提供比较和改进建议。该产品定价灵活，并根据用户的需求提供不同的套餐选择。
1. [[⭐] https://www.grammarly.com](https://www.grammarly.com) **Grammarly.。** Grammarly开发了一种使用人工智能和自然语言处理的数字写作工具。Grammarly键盘随时随地为您提供支持，确保您的写作始终看起来很棒。无论您是在输入紧急电子邮件、重要的LinkedIn消息还是必要的Facebook帖子，Grammarly都能让您放心地从移动设备上进行写作。
1. [[⭐] https://www.gravitywrite.com](https://www.gravitywrite.com) **GravityWrite。** GravityWrite 是一款 AI 写作助手，能快速生成高质量的内容，适用于博客、广告、邮件和社交媒体。它节省时间、提高效率，降低成本，是提升点击率、转化率和销售额的利器。
1. [[⭐] https://www.hanlinmiaobi.com](https://www.hanlinmiaobi.com) **翰林妙笔。** 翰林妙笔是一款专注于公文写作的智能 AI 创作平台，提供全面的写作、校对、润色及模板服务。无论是公职人员、事业单位、国企人员、还是医院、学校等机构，笔墨公文都能帮助您高效完成述职报告、调研报告、工作总结、年终总结等各类公文材料的创作。
1. [[⭐] https://www.heyfriday.cn/home](https://www.heyfriday.cn/home) **西湖心辰-FRIDAY。** FRIDAY智能写作平台依靠自主研发的创新性AI算法，可以生成不同形式和语言风格的内容。
1. [[⭐] https://www.ihuiwa.com](https://www.ihuiwa.com) **绘蛙。** 绘蛙是一款智能图片、文案创作平台，通过AI生成商拍图和种草文案，免费创作小红书图片、电商商品主图等。其功能包括AI生成商拍图、种草文案、美图、稿定设计、换装、去水印、图片高清修复等。定位于为用户提供简洁好用的智能创作工具。
1. [[⭐] https://www.jasper.ai](https://www.jasper.ai) **Jasper AI。** AI文字内容创作工具。
1. [[⭐] https://www.jenni.ai](https://www.jenni.ai) **Jenni AI。** Jenni AI是一款研究和写作助手，提供强大的功能来增强你的研究和写作能力。它具有AI自动补全、引文、改写、文件生成、与PDF交流、大纲生成、自定义样式和语气、研究库等功能。Jenni AI受到全球大学和企业的信赖，被超过100万名学者喜爱。它可以帮助你提高写作速度、检查抄袭、进行引文，并根据你的需求生成定制化的文本。Jenni AI适用于各种写作场景，包括论文、文献综述、个人陈述、博客文章、演讲稿等。
1. [[⭐] https://www.mypitaya.com](https://www.mypitaya.com) **火龙果写作。** 火龙果智能写作软件，是一款基于AI 驱动的写作辅助神器，它提供了文章内容生成续写、智能改写、校对纠错、实时翻等强大功能。
1. [[⭐] https://www.notion.so/product/ai](https://www.notion.so/product/ai) **Notion AI。** AI写作神器！比你想得更多！写得更快
1. [[⭐] https://www.peppertype.ai](https://www.peppertype.ai) **Peppertype.ai。** Peppertype.ai是一个提供AI助手和智能文本编辑器的内容写作平台。它提供无缝的写作体验，帮助用户创建优化的内容，并通过SEO写作助手提供最佳建议。Peppertype.ai还提供自动化审核，包括字数、易读程度和抄袭检查，以帮助用户编写出更好的内容。定价方案根据用户的需求提供灵活的选择。
1. [[⭐] https://www.scholarcy.com](https://www.scholarcy.com) **Scholarcy。** Scholarcy是一款在线文献摘要工具，可以将长篇文章生成摘要卡片。它通过阅读研究文章、报告和书籍章节，并在几秒钟内将它们拆分成易于理解的部分，帮助用户快速评估任何文献对他们工作的重要性。它提取关键信息，如研究参与者、数据分析、主要发现和局限性，并将其转化为摘要卡片。Scholarcy还可以提取文献中的图表和图片，并创建链接以打开引用来源。用户可以使用Scholarcy的浏览器扩展与开放获取库集成，并通过付费订阅服务Scholarcy Library建立个人摘要研究库。
1. [[⭐] https://www.semrush.com](https://www.semrush.com) **Semrush。** Semrush 是一款集合了 55 多种工具，用于 SEO、PPC、内容、社交媒体、竞争研究等领域，帮助您使业务在线可见。
1. [[⭐] https://www.shenyandayi.com](https://www.shenyandayi.com) **深言达意。** 深言达意是一款写作辅助工具，核心功能包括据意查词、据意查句。
1. [[⭐] https://www.smartwriter.ai](https://www.smartwriter.ai) **Smartwriter。** 智能写手是一款使用AI技术帮助用户生成高度个性化冷邮件和LinkedIn信息的工具。它可以自动化您的整个推广过程，比人工快40倍且更经济实惠。使用智能写手，您可以快速生成千千万万个个性化邮件，使您的回复率提高8倍，从而帮助您更好地推动销售。
1. [[⭐] https://www.spellbook.legal](https://www.spellbook.legal) **Spellbook。** Spellbook 利用 GPT-4 和其他大型语言模型，可以在 Microsoft Word 中为您的合同提供审查和建议。它可以基于合同的上下文即时起草新的条款和整个章节。Spellbook 帮助您更快地达成更好的交易，同时检测潜在的问题条款、提供缺失的条款和定义，并提供谈判建议。它还将引入自动尽职调查功能，可以自动检测整个数据室中最紧迫的问题。Spellbook 不仅仅理解合同，还经过对维基百科、图书和互联网的训练，可以参考世界上的事实。它由 OpenAI 的 GPT-4 提供动力，是唯一经过调整以适应合同起草和与 Word 集成的 GPT-4 工具。欢迎预订。
1. [[⭐] https://www.squibler.io](https://www.squibler.io) **Squibler。** Squibler是一个人工智能辅助写作的在线软件平台。它可以为用户生成故事思路、增强人物塑造、写出通顺的句子、帮助克服写作障碍,还能以前所未有的速度写出书稿和剧本。主要功能包括AI辅助写作、AI元素生成、AI图像生成、AI视频生成、目标跟踪、项目管理、协作等。适用于小说、书籍、剧本、故事等创作。
1. [[⭐] https://www.storynest.ai](https://www.storynest.ai) **Storynest.ai。** StoryNest.ai是一款AI驱动的互动故事平台，可以帮助用户创作吸引人的故事、深入的文章和全面的教育内容。通过与角色对话和超级故事书等功能，深入互动学习。加入StoryNest.ai，创造力、教育和技术完美结合。
1. [[⭐] https://www.sudowrite.com](https://www.sudowrite.com) **Sudowrite。** Sudowrite是一款革命性的AI写作辅助工具,旨在成为你永不评判、永远在一旁支持创作、永不枯竭创意的写作伙伴。它集成了GPT-3和GPT-4等大型语言模型,可为你提供各种创作支持,从生成描写、情节发展到角色塑造、修改润色等,全方位提高你的写作效率和质量。主要功能包括:自动续写、情节扩展、重写修改、反馈建议、构思助手、视觉呈现等。无论你是在写小说、剧本还是其他作品,Sudowrite都能给你源源不断的灵感和指导,让创作变得轻松有趣。Sudowrite提供付费订阅服务,定价合理,同时也有免费试用版本。它致力于让写作爱好者重拾对创作的热爱,帮助专业作家提高工作效率。
1. [[⭐] https://www.surferseo.com](https://www.surferseo.com) **Surfer。** Surfer是一款提供SEO工作流程的产品，可以帮助用户提升有机流量，增加可见度和改善排名。它利用下一代AI技术进行研究、写作和优化，可以在20分钟内生成高质量、优化良好的文章。Surfer还提供生成吸引人的标题的简报功能，支持多语言写作和优化，可以实时监测结构、字数、NLP关键词和图片等指标，帮助用户在全球范围内获得高排名。此外，Surfer还提供文章真实性验证和集成多种常用工具的功能。Surfer适用于各种场景，包括个人博客、企业网站和内容创作者等。定价方面，Surfer提供多种套餐选择，满足不同用户的需求。
1. [[⭐] https://www.teamsmart.ai](https://www.teamsmart.ai) **TeamSmart AI。** TeamSmart AI是一个Chrome插件，通过一键访问团队智能AI助手，帮助用户提高工作效率。该插件提供了多种功能，包括内容摘要、代码生成、推文起草等，用户可以直接在浏览器中完成这些任务。TeamSmart AI还提供了25+个新的AI营销助手，用户可以根据自己的需求选择使用。
1. [[⭐] https://www.tutoreva.ai](https://www.tutoreva.ai) **TutorEva。** TutorEva是一个AI数学导师，用拍照AI识别来解决数学问题，TutorEva将在几秒钟内解决它们，即使是几何和应用题等难题。虚拟化身和互动教学使数学学习生动而简单。
1. [[⭐] https://www.typesetterr.com](https://www.typesetterr.com) **Typesetterr。** Typesetterr旨在通过自动化简化日常作家的工作流程。它提供即时格式化功能，可帮助作家轻松管理、撰写和发布内容。该工具还支持多种应用场景，包括博客创作、新闻稿撰写、文案创作、稿件自动排版等。用户可以根据需要选择免费版或专业版，专业版还提供AI辅助编辑功能和更多支持。
1. [[⭐] https://www.wawawriter.com](https://www.wawawriter.com) **蛙蛙写作。** 蛙蛙写作是一款 AI 小说写作工具，作者可以使用 AI 工具来写小说，想剧情，AI 润色文风，AI 生成角色地名，AI 续写全文等，蛙蛙写作将帮助作者提高写作效率，更快更好完成一篇高质量小说。
1. [[⭐] https://www.writingo.net/home](https://www.writingo.net/home) **火山写作。** 字节的AI英语写作工具，高效提升英文表达
1. [[⭐] https://www.xiaomengai.com](https://www.xiaomengai.com) **彩云小梦尝鲜版。** 彩云小梦尝鲜版是一款 AI 辅助创作工具，能够生成平行世界故事情节，帮助用户创作各种虚拟故事。具有智能推荐、故事设定、人物塑造等功能，用户可以通过与 AI 对话获得创作灵感。
1. [[⭐] https://www.xiezuocat.com](https://www.xiezuocat.com) **秘塔写作猫。** 基于GPT的中文写作工具
1. [[⭐] https://www.ximalaya.com/gatekeeper/write-wise-web](https://www.ximalaya.com/gatekeeper/write-wise-web) **WriteWise。** WriteWise 是一款强大的写作助手工具，帮助用户提升写作效率和质量。它提供智能推荐和编辑功能，可以快速生成高质量的文章和内容。 WriteWise 还提供语法检查、词汇替换、段落重组等功能，帮助用户改进文章结构和表达方式。该产品定价灵活，适用于个人写作、商务写作等不同领域。
1. [[⭐] https://xiezuocat.com](https://xiezuocat.com) **秘塔写作猫。** 写作猫是新一代交互式中英文写作辅助平台，集智能文本纠错、改写润色、自动续写、智能配图为一体。
1. [[⭐] https://zuojia.baidu.com](https://zuojia.baidu.com) **百度作家平台。** 百度作家平台是一个AI智能创作工具，提供多种功能，包括AI助手、对话有问必答、AI续写等。用户可以使用该平台进行写作创作，包括小说设定、润色、角色起名等。平台还提供作品管理、收益分析等功能。百度作家平台适用于想要提升写作效率和创作质量的作者。
1. [[🚀] https://monica.im](https://monica.im) **Monica。** Monica是由ChatGPT API提供支持的Chrome扩展程序，旨在成为您的个人AI助手，实现轻松聊天和文案编写。
1. [[🚀] https://novelai.net](https://novelai.net) **NovelAI。** 基于人工智能，轻松构建独特的、惊险的、引入入胜的故事。
1. [[🚀] https://quillbot.com](https://quillbot.com) **QuillBot。** QuillBot一款写作改写工具，能够帮助您让写作更好、更快、更聪明。我们的改写工具是免费且易于使用的，只需点击一下按钮，即可进行改写。
1. [[🚀] https://writesonic.com](https://writesonic.com) **Writesonic。** Writesonic可以为博客、广告、电子邮件和网站快速生成已优化的免费原创内容。
1. [[🚀] https://www.copy.ai](https://www.copy.ai) **Copy AI。** 人工智能营销文案和内容创作工具，帮助各行各业的撰稿人、营销人员和企业快速高效地创建高质量的内容。
1. [[🚀] https://huggingface.co](https://huggingface.co) **Hugging Face。** 下载开源的SD模型

### AI 文档办公 (82)

1. [[⭐⭐⭐] https://immersivetranslate.com](https://immersivetranslate.com) **沉浸式翻译。** 沉浸式翻译是一款免费的，好用的，没有废话的，革命性的，饱受赞誉的，AI 驱动的双语网页翻译扩展。
1. [[⭐⭐⭐] https://translate.volcengine.com](https://translate.volcengine.com) **火山翻译。** 字节旗下支持超过100种语种的免费在线翻译
1. [[⭐⭐⭐] https://www.aippt.cn](https://www.aippt.cn) **AiPPT。** 通过简单的文字自动生成想要的精致PPT
1. [[⭐] http://bigesj.com/ai-ppt/](http://bigesj.com/ai-ppt/) **比格PPT。** 比格PPT是一款功能强大的在线智能PPT设计SaaS平台。用户可以通过语言描述快速自动生成PPT,大大提升工作效率。平台拥有10000+精美PPT模板,覆盖商业、教育等多个行业场景。用户还可以利用平台强大的AI功能,一键优化PPT内容,实现高质量的演示文稿内容。平台提供了多种订阅方案,个人用户每月最低¥19元起,企业用户可享受更优惠价格
1. [[⭐] http://gamma.app](http://gamma.app) **Gamma。** Gamma App是一种新型的内容呈现方式，通过AI技术帮助用户创造美观、引人入胜的演示文稿和网页，无需繁琐的格式和设计工作。Gamma App提供一键模板和可视化编辑功能，用户可以快速生成演示文稿、文档和网页，并进行个性化定制。Gamma App支持多种功能，包括生成精美的设计、提供多种样式选择、实时呈现、嵌入各种媒体内容等。用户可以在任何设备上浏览和分享创作的内容。Gamma App适用于各种场景，例如企业演示、教育培训、个人创作等。免费试用。
1. [[⭐] https://ai-tools.cn/resume](https://ai-tools.cn/resume) **AI简历。** AI简历是一款在线智能简历制作工具,以「高质量简历,助力求职成功」为品牌使命。它具有HR推荐、专业的简历制作平台、Notion式的流畅交互、简历润色、简历扩写、简历精炼等功能,还提供简历精修、求职辅导、模拟面试、求职剧场等服务,确保求职者在求职道路上一帆风顺。
1. [[⭐] https://ai.wps.cn](https://ai.wps.cn) **WPS AI。** WPS AI是由金山办公发布的具备大语言模型能力的人工智能应用，为用户提供智能文档写作、阅读理解和问答、智能人机交互的能力。
1. [[⭐] https://ajelix.com](https://ajelix.com) **Ajelix AI Excel Tools。** AI Excel工具与Google Sheets旨在提高Excel和Google Sheets的工作效率。它包括Excel公式生成器、Excel公式解释器、Google Apps脚本生成器、Excel VBA脚本解释器、Excel VBA脚本生成器、Google Sheets公式生成器、Google Apps脚本解释器、Google Sheets公式解释器、Excel文件翻译器、公式与脚本库、Excel模板生成器、Excel插件以及虚拟AI助手。它们可以帮助您更快地理解和编写Excel公式和VBA脚本，并提供其他相关功能。
1. [[⭐] https://chat-ppt.com](https://chat-ppt.com) **必优ChatPPT。** 必优科技推出的中文AI生成PPT的办公产品
1. [[⭐] https://chatdoc.xfyun.cn](https://chatdoc.xfyun.cn) **星火文档问答。** 讯飞星火知识库文档问答是科大讯飞基于讯飞星火大模型和星火知识库搭建的文档问答服务，能够高效检索文档信息，准确回答专业问题。具备多文档问答，文档知识库，信源原文定位，文档总结，自定义切分等功能。
1. [[⭐] https://chatdocuments.ai](https://chatdocuments.ai) **ChatDocuments。** ChatDocuments是一款由人工智能驱动的应用，可以轻松与PDF、PPTX、XLSX和DOCX文件进行聊天互动。支持所有语言。定价：免费试用，免费使用3个文档；付费套餐详见官网。定位：提供便捷的文档交互体验。
1. [[⭐] https://chatexcel.com](https://chatexcel.com) **酷表ChatExcel。** 酷表ChatExcel是通过文字聊天实现Excel的交互控制的AI辅助工具，期望通过对表输入需求即可得到处理后的数据。
1. [[⭐] https://chatmind.tech/editor](https://chatmind.tech/editor) **Chatmind AI。** Chatmind 是一款由 Xmind 团队推出的免费在线 AI 思维导图和头脑风暴工具，通过 ChatGPT 技术，帮助用户在几分钟内创建思维导图。用户可以通过简单的文本描述生成思维导图，快速总结文档或 URL 链接为思维导图，与 AI 对话产生创意并整合到思维导图中，描述文本即可立即生成图像，轻松为任何主题创建视觉内容，自动保存文件历史以便跨设备访问，编辑文本和重新排列主题轻松自如，将思维导图转化为幻灯片展示只需一键，轻松以多种格式分享思维导图。
1. [[⭐] https://docs.qq.com/form/page/DQnJoYkdBVWRCT0tS](https://docs.qq.com/form/page/DQnJoYkdBVWRCT0tS) **腾讯文档智能助手。** 腾讯文档智能助手正式开启公测,可与Word、Excel、PPT等多品类文档进行智能互动,支持内容秒级生成,实现数据处理、版式美化等创作辅助功能。主要优势有:可基于标题或描述生成多类型文档内容,支持函数公式应用、数据处理、表格自动化等能力,实现 PPT 一键美化,可快速提取 PDF 文档摘要等,让文档内容实现跨品类畅通流转。
1. [[⭐] https://excelbot.io](https://excelbot.io) **ExcelBot。** ExcelBot是一个AI驱动的Excel公式和VBA代码生成器。它可以将自然语言文本请求转化为Excel公式或VBA代码,无论您是否擅长Excel。它可以帮助初学者无需编程经验就可以编写复杂的Excel公式和VBA代码,也可以帮助专业人士自动完成繁琐的Excel任务。主要功能包括:支持多种语言输入;提供公式和代码结果解释;支持公式和代码的编辑和复制等。该产品可用于各类Excel数据处理和分析场景,有助于提升工作效率。
1. [[⭐] https://excelly-ai.io](https://excelly-ai.io) **Excelly-AI。** Excelly-AI是一个在线工具,可以即时将普通文本转换成强大的Excel公式。用户无需再在浏览器里搜索公式,浪费时间。只需使用Excelly-AI,即可在几秒内生成所需的Excel公式。该工具支持Excel和谷歌表格两种格式公式的互转。并可智能生成公式说明,大大节省时间。主要功能包括:公式生成、公式解释、公式转换、VBA生成等,定价为每个月免费5个公式。适合需要频繁使用Excel公式的用户。
1. [[⭐] https://fanyi.baidu.com](https://fanyi.baidu.com) **百度翻译。** 提供即时免费200+语言翻译服务
1. [[⭐] https://fanyi.caiyunapp.com](https://fanyi.caiyunapp.com) **彩云小译。** 兼具“你边说，我边译”的字字幕翻译功能。包括文字翻译、文档翻译、网页翻译、术语库、浏览器插件和双语对照服务
1. [[⭐] https://fanyi.xfyun.cn/console/trans/text](https://fanyi.xfyun.cn/console/trans/text) **讯飞智能翻译。** 科大讯飞推出的人工智能翻译平台
1. [[⭐] https://formulabot.com](https://formulabot.com) **Excel Formula Bot。** Formula Bot是一款AI数据分析工具，集成了智能公式生成、数据准备和数据分析功能。它可以帮助用户快速生成Excel公式、理解不同公式的解释，并且支持在Excel或Google Sheets中应用这些公式。此外，Formula Bot还提供了创建各种情况下的电子表格模板、生成SQL查询、执行基本任务指令、获取VBA或Apps Script代码以及获取正则表达式等功能。通过Formula Bot，用户可以更智能、更高效地处理数据和电子表格。
1. [[⭐] https://futurecv.cn](https://futurecv.cn) **未来简历。** 未来简历采用千亿级AI大模型,为用户快速量身打造专业、高通过率的求职简历。提供大量由人力资源专家设计的简历模板,结合AI生成,让简历在众多候选者中脱颖而出。主要功能包括:AI优化简历、职业模板、高校模板、面试预测等,针对不同用户需求进行智能匹配和生成,帮助用户以最佳形象展示自己。适用于求职和职业转型的白领人士。
1. [[⭐] https://gamma.app](https://gamma.app) **Gamma。** Gamma是幻灯片演示的一种替代方式-一种快速、简单的分享和展示工作的方法。创建引人入胜的演示文稿、备忘录、简报和文档，易于实时讨论或异步分享。全部在您的浏览器中完成，无需下载或安装任何内容。
1. [[⭐] https://getluminal.com](https://getluminal.com) **Luminal。** Superluminal API是一款强大的AI Copilot，可帮助用户更快地清洗、转换和分析电子表格数据。它可以执行强大的编辑操作、回答复杂的问题，并在大量数据上运行AI操作，而无需编写代码。Superluminal API支持多种语言，包括中文、法语、印地语、西班牙语、日语、土耳其语、波兰语、韩语和泰语。它的数据加密和安全托管功能可以保护客户的数据安全。Superluminal API的价格简单明了，可根据用户的需求进行升级。
1. [[⭐] https://gezhe.com](https://gezhe.com) **歌者PPT。** 歌者PPT（gezhe.com）是一款永久免费的智能 PPT 生成工具。用户可以轻松将任何主题或资料转化为PPT，并选择应用大量精美的模板。无论是商务演示、教育培训、学术报告还是专业领域，歌者PPT都能提供便捷的操作和智能化体验，让幻灯片制作变得更加轻松高效。
1. [[⭐] https://glimmerai.tech](https://glimmerai.tech) **Glimmer Ai。** 热门！基于GPT-3和DALL·E2的AI PPT知名工具
1. [[⭐] https://gptexcel.uk](https://gptexcel.uk) **GPTExcel。** GPT Excel是一款基于人工智能的产品，通过生成和解释Microsoft Excel、Google Sheets和Airtable公式，提高用户在电子表格处理中的效率。它还能自动生成VBA脚本、Apps Script和Airtable脚本，实现自动化的工作流程。用户还可以使用GPT Excel生成和调试高级SQL查询，轻松处理多个数据库系统。GPT Excel是一个功能强大的产品，帮助用户提高生产力和数据分析能力。定价方案灵活，提供免费和付费版本。
1. [[⭐] https://huntr.co](https://huntr.co) **Huntr AI。** Huntr帮助您在几秒钟内创建定制的简历和求职信，一键填写申请表格，并自动组织您的求职过程。它提供AI简历生成器、简历检查器、AI求职信、简历摘要生成器、简历段落生成器、简历技能生成器等功能。此外，Huntr还提供求职追踪器、联系追踪器、面试追踪器和求职指标等工具，帮助您加快求职过程。您还可以使用Huntr的Chrome插件进行职位申请自动填充。
1. [[⭐] https://ichuangnao.com/introduction](https://ichuangnao.com/introduction) **创脑。** 创脑是国内知名 AI 机器人社区，用户可以免费使用各类 AI 机器人助手，包括行业专家、AI 写作、办公助手等，帮助提升工作效率和生活便利。
1. [[⭐] https://meeting.tencent.com/ai/](https://meeting.tencent.com/ai/) **腾讯会议·AI小助手。** 腾讯会议是腾讯自主研发的一款会议软件,提供视频会议、网络研讨会、会议室等产品和服务,支持桌面客户端、移动端等多端使用。可实时共享屏幕,支持白板互动等,实现高清音视频会议。还提供开放API,可深度定制开发。适合企业员工在线会议、网络课堂、远程面试等多种场景使用。
1. [[⭐] https://mymap.ai](https://mymap.ai) **mymap.ai。** MyMap.AI是一个将文本思路转化为脑图和演示文稿的AI工具。它通过简单的聊天界面，将您的文本思路转化为可视化的脑图和演示文稿。非常适合学生、教师和没有设计技巧的专业人士使用。它是您节省时间的工具，可以轻松进行协作性的可视化创作。
1. [[⭐] https://noty.ai](https://noty.ai) **Noty AI。** ChatGPT驱动的AI会议转录工具
1. [[⭐] https://numerous.ai](https://numerous.ai) **numerous。** Numerous.ai是一个AI助手表格插件，它将ChatGPT引入Google Sheets和Excel，可在单元格内使用ChatGPT进行文字生成、文本分类、公式生成等功能。用户可以通过=AI()函数调用ChatGPT，=INFER()函数教会Numerous执行重复任务，=WRITE()函数让ChatGPT代替用户进行文字创作。此外，Numerous还支持用简洁的语言生成复杂的公式，解释复杂公式的功能。用户可根据不同套餐选择购买，套餐包含ChatGPT的使用次数和公式生成次数。
1. [[⭐] https://otter.ai](https://otter.ai) **Otter AI。** 写笔记和总结会议的速度提高 30 倍
1. [[⭐] https://pdfcandy.com](https://pdfcandy.com) **PDF Candy。** PDF Candy是一款提供免费PDF转换和其他PDF工具的在线服务。可以将图像、电子书和文档转换为PDF文件，也可以将PDF文件转换为其他格式。
1. [[⭐] https://politepost.net](https://politepost.net) **PolitePost。** PolitePost.net是一个使用人工智能来重写邮件的工具。它可以将您草拟的邮件进行重写和整理，使其更加专业和适合在职场中使用。只需输入您的初稿，包含所有俚语和脏话，我们的AI机器人就会为您进行重写和清理，让您的邮件在几秒钟内变得专业起来。
1. [[⭐] https://ppt.isheji.com](https://ppt.isheji.com) **爱设计 PPT。** 爱设计PPT利用先进的AI技术,自动创建并优化PPT模版。爱设计的AI能为您生成适合的,高质量且独特的PPT模版。
1. [[⭐] https://pptx.ai/signup](https://pptx.ai/signup) **PPTX。** AI演示文稿生成器可以通过语音或文字描述自动生成演示文稿,无需PPT设计和排版经验,支持多种演示文稿模板和主题,输出标准PPT文件,可直接用于商业演示、课堂教学、学术会议等场景。
1. [[⭐] https://presentory.wondershare.com](https://presentory.wondershare.com) **Presentory。** Presentory是万兴科技旗下一款使用AI创建演示文稿的产品。
1. [[⭐] https://prezi.com](https://prezi.com) **Prezi。** 感动观众的演示，Prezi使用AI能力比以往任何时候都更快地完善、增强和定制您的内容。
1. [[⭐] https://raccoon.sensetime.com/office](https://raccoon.sensetime.com/office) **办公小浣熊 Raccoon。** 办公小浣熊是基于商汤大语言模型的大模型原生数据分析产品，通过自然语言输入，结合商汤大模型的能力，自动将数据转化为有意义的分析和可视化结果。它支持复杂表格、多表格、多文件的理解，能够完成数据清洗、数据运算、比较分析、趋势分析，预测性分析、可视化等常见数据分析任务，赋能财务分析、商业分析、销售预测、市场分析、宏观分析等多个应用场景。
1. [[⭐] https://resume.co](https://resume.co) **Resume。** 使用Resume，在短短 5 分钟内创建一份能帮助你获得工作的简历。选择超过 20 个专业、现代和创意的简历模板。
1. [[⭐] https://resumeboostai.com](https://resumeboostai.com) **ResumeBoostAI。** ResumeBoostAI是一个AI简历和求职文书生成工具。用户可以使用其 resume builder 快速生成个性化简历,或使用 cover letter、bullet points、common job answers等功能自动生成求职文书。该工具使用AI技术,根据用户提供的个人信息智能生成简历内容,节省用户大量撰写时间,提升简历质量。适合正在找工作的求职者使用。
1. [[⭐] https://rossum.ai](https://rossum.ai) **Rossum.ai。** 深受企业信赖，强大易用的AI智能文档处理平台
1. [[⭐] https://rows.com](https://rows.com) **Rows。** Rows是一个功能强大、安全可靠的在线电子表格工具。它提供了丰富的电子表格功能,包括格式化、公式、图表等,能满足用户的大部分数据分析和呈现需求。Rows拥有直观的操作界面,新用户可以快速上手。同时它支持实时协作,多用户可以同时编辑一个文档。Rows提供了业界领先的安全机制,确保文档和数据的安全。它还支持将文档发布为网页,方便数据的浏览和共享。总的来说,Rows是一个功能强大且易于使用的在线电子表格工具,适合个人和团队进行数据分析和呈现。它的免费版本已经能满足大多数用户的需求。
1. [[⭐] https://sheetai.app/�](https://sheetai.app/�) **SheetAI.app。** SheetAI是一个Google Sheets的插件，帮助您在电子表格中释放AI的力量。它提供了一套强大的基于AI的功能，可以帮助您自动化任务和生成洞察力。它包括SHEETAI_BRAIN来简化文案撰写，SHEETAI_LIST来生成多个答案，SHEETAI_FILL来填充数据等功能。
1. [[⭐] https://slidesgo.com/ai-presentations](https://slidesgo.com/ai-presentations) **SlidesGo。** Slidesgo最新推出了AI演示制作工具，它能在几次点击之内，为你制作出符合你需求的精美幻灯片。而且，它完全免费！
1. [[⭐] https://smartread.cc](https://smartread.cc) **司马阅AI文档。** 司马阅(SmartRead)，是一款AI文档阅读分析工具，通过聊天互动形式，精准地从复杂文档提取并分析信息，极大节省文档阅读和检索时间及便捷获取创新灵感，高效应用于工作、学习场景，如读行业市场报告、产品手册、法律文档、论文文献、电子书等。
1. [[⭐] https://timelyapp.com](https://timelyapp.com) **Timely。** 一款AI时间管理工具！可以帮助你更有效地管理时间
1. [[⭐] https://tome.app](https://tome.app) **Tome。** 先进的AI智能PPT制作工具
1. [[⭐] https://tome.app/ai](https://tome.app/ai) **Tome。** AI专为演示而构建。
1. [[⭐] https://wensi.sodabot.cn](https://wensi.sodabot.cn) **文思助手。** 文思助手是一款AI写作智能体，能够一键生成专业报告、工作总结、科研论文等文档。它利用先进的人工智能技术，为用户节省时间，提高工作效率。该产品由厦门苏哒智能科技有限公司开发，拥有强大的功能和广泛的应用场景。
1. [[⭐] https://whimsical.com](https://whimsical.com) **Whimsical。** Whimsical是一个集图表、白板等多种功能于一体的视觉协作平台。用户可以使用Whimsical创建流程图、线框图、思维导图和文档，快速将想法变为现实。它可以帮助团队成员更好地协作，从而更快地构建出更好的产品。Whimsical还可以与Jira、GitHub、Notion、Figma和Slack等常用工具集成，提高工作效率。
1. [[⭐] https://wordai.com](https://wordai.com) **WordAi。** 10倍速AI内容输出！创建读者喜爱的优质内容
1. [[⭐] https://writebot.io](https://writebot.io) **WriteBot。** WriteBot是一个AI辅助写作工具，旨在帮助用户快速生成独特、符合SEO标准的内容。不需要月费订阅，采用按需付费的定价模式。这个工具特别适合生产博客文章、Facebook广告、产品描述等，带有关键词和SEO优化功能，提高内容创作的效率和质量。
1. [[⭐] https://www.52cv.com](https://www.52cv.com) **职徒简历。** 职徒简历 52cv 是一款智能简历制作工具，主打于提供大量的中英文简历模板和案例，支持多个行业的简历制作。其主要优点在于智能排版、全面的简历评测、导师辅导等功能，定位于帮助用户轻松制作优质简历。
1. [[⭐] https://www.beautiful.ai](https://www.beautiful.ai) **Beautiful.ai。** Beautiful.ai是一个演示软件，为团队提供最佳设计、保持品牌一致性以及全球协作的功能。它应用先进的AI技术，使演示制作变得简单而美观。用户只需添加内容，Beautiful.ai会自动适应并应用出色的设计规则。不再需要在深夜调整文本和图片大小。每一个选择都能节省时间并带来出色的设计。
1. [[⭐] https://www.chatplayground.ai](https://www.chatplayground.ai) **ChatPlayground AI。** ChatPlayground AI是一个集成了16+ AI应用和功能的聊天机器人平台，它允许用户通过一个订阅来访问多种AI模型。该平台的主要优点包括行业领先的AI模型、实时网络搜索、图像生成器、历史记录回顾、多语言支持以及导入自定义内容的能力。ChatPlayground AI旨在为开发者、数据科学家、学生、研究人员、内容创作者、作家和AI爱好者提供服务，帮助他们提高工作效率和创造力。
1. [[⭐] https://www.documentpro.ai](https://www.documentpro.ai) **DocumentPro。** DocumentPro使用AI从文档和电子邮件中提取信息和表格，快速准确地完成数据录入。它可以处理各种标准的商业文档，无需任何设置，节省时间和精力。支持各类文档类型，包括发票、采购订单、收据、提货单、身份证等。通过智能OCR和GPT技术，DocumentPro能够自动提取数据字段和表格，并支持导出为Excel或JSON格式。无需培训即可使用，还可以处理自定义文档（即将推出）。
1. [[⭐] https://www.elegantresume.pro](https://www.elegantresume.pro) **优雅简历。** ElegantResume是一个完全免费的在线简历制作工具。用户可以选择不同的简历模板,根据自己的情况定制简历的内容和格式。该网站不需要用户注册,可以直接开始制作简历,完成后可以随时修改,也可以无限次免费下载简历的PDF或JPEG版本。简历数据可以选择保存在浏览器中、Google Drive中或本地设备中,从而保障用户隐私。ElegantResume还通过集成OpenAI的ChatGPT,使用AI来帮助完善和润色简历内容。整体而言,ElegantResume是一个功能强大且安全可靠的免费在线简历制作平台。
1. [[⭐] https://www.flowcv.io](https://www.flowcv.io) **FlowCV。** FlowCV 是一个革命性的平台，旨在提升求职者的求职体验。通过自信、专业地展示自己，使得潜在雇主留下深刻印象。该平台提供简历、求职信、个人网站和电子邮件签名等工具，帮助求职者展现最佳形象。
1. [[⭐] https://www.formx.ai](https://www.formx.ai) **formx ai。** FormX.ai是一个基于人工智能技术的服务，可以将纸质文件转换为结构化的数字化数据。通过使用OCR、正则表达式和AI技术，FormX.ai可以提取收据、身份证、商业证书等各种类型的文档中的信息，并将其转换为可读的JSON格式数据。FormX.ai提供易于使用的API和用户友好的Web门户，可以轻松集成到任何软件中。无论您是需要自动化数据提取，还是需要进行数据分析和处理，FormX.ai都是一个强大而可靠的解决方案。
1. [[⭐] https://www.iflyrec.com](https://www.iflyrec.com) **讯飞听见。** 讯飞听见是智慧办公服务平台，提供语音转文字、录音整理、语音翻译等服务，致力于提高办公效率。支持快速转录音频、视频为文字，提供 AI 写作、同传、翻译等功能。
1. [[⭐] https://www.islide.cc](https://www.islide.cc) **iSlide。** iSlide 是一款简单、好用的 PPT 插件，拥有 30 万 + 原创可商用 PPT 模板、PPT 主题素材、PPT 案例、PPT 图表、PPT 图示、PPT 图标、PPT 插图和 800 万 + 正版图片。提供 38 个设计辅助实用功能，一键解决 PPT 设计制作中的各种难题。用户可通过 iSlide 快速找到符合需求的 PPT 素材和工具，提升 PPT 制作效率和专业度。
1. [[⭐] https://www.kickresume.com](https://www.kickresume.com) **Kickresume。** Kickresume是一个在线简历和求职信建设者，被250万求职者在全球使用。它提供了经过招聘专家审核的专业模板，帮助用户创建最佳简历。用户可以使用Kickresume创建出色的简历，并附上与之匹配的求职信。Kickresume提供了丰富的功能，以帮助求职者成功找到工作。该产品定价灵活，用户可以根据自己的需求选择不同的套餐。Kickresume定位于为求职者提供强大的工具，以在竞争激烈的就业市场中脱颖而出。
1. [[⭐] https://www.mindshow.fun](https://www.mindshow.fun) **MindShow。** MindShow 是一款利用人工智能生成 PPT 模版的软件。它可以根据用户提供的文字内容，自动生成结构化的演示内容，大大节省排版和设计的时间。MindShow 提供多种主题和布局，用户可以随意切换和修改。使用 MindShow，用户可以在线演示或导出 PPTX 文件，方便灵活。MindShow 旨在帮助用户提升工作效率，解放他们的时间和精力，不再烦恼排版和设计。
1. [[⭐] https://www.overleaf.com](https://www.overleaf.com) **Overleaf。** Overleaf 是基于 LaTeX 的在线协作编辑器，无需安装，支持实时协作、版本控制、数百种 LaTeX 模板等。适用于科学和技术领域的文档写作。
1. [[⭐] https://www.presentationgpt.com](https://www.presentationgpt.com) **PresentationGPT。** PresentationGPT是一款高级AI智能演示文稿生成器，能够在几秒钟内创建出令人惊叹的PowerPoint演示文稿。它采用先进的GPT-4语言生成模型，生成高质量、详细、引人入胜的演示文稿，给人留下深刻印象。PresentationGPT与PowerPoint和Google Slides无缝集成，方便下载和编辑。我们提供免费使用和付费下载两种选择，定价简单透明。
1. [[⭐] https://www.promptloop.com](https://www.promptloop.com) **PromptLoop。** PromptLoop是一个在Google Sheets和Excel中使用AI模型进行市场调研的强大工具。通过标记、标签和网络浏览研究模型，提升数据处理和文本分析的效率。
1. [[⭐] https://www.quark.cn/articles](https://www.quark.cn/articles) **夸克 AI PPT。** AI PPT是一款基于大模型的PPT生成工具,用户只需输入PPT主题,便可在几秒内自动生成完整的PPT。该产品依托夸克在搜索、文档和大模型方面的技术积累,实现了PPT内容自动生成、智能排版、一键操作等功能。用户可以根据自己的需求进行文字和图片的个性化调整。AI PPT可大幅提升PPT制作效率,实现快速高质量地完成PPT内容创作。
1. [[⭐] https://www.resumestarapp.com](https://www.resumestarapp.com) **resume star。** 简历生成器通过精准针对目标工作生成简历，处理繁琐的格式设置。用户填写信息后，即可立即获得适当格式的 PDF 简历，可打印、发送电子邮件或在线提交。简单透明的收费模式，先下载简历，满意后再付费。
1. [[⭐] https://www.rezi.ai/ai-resume-builder](https://www.rezi.ai/ai-resume-builder) **Rezi。** Rezi AI简历生成器是一款全新一代的简历生成工具，完全不需要自己编写简历！您可以使用Rezi AI为您编写完美的简历。Rezi AI简历生成器根据您提供的内容和职位名称，使用文本生成AI创建与职位相关的独特内容，帮助您轻松获得面试机会。我们还提供了AI关键字优化、实时内容分析和区块链验证等功能。
1. [[⭐] https://www.taskade.com](https://www.taskade.com) **Taskade。** 高颜值AI大纲和思维导图生成，统一您的工作流程
1. [[⭐] https://www.wondercv.com](https://www.wondercv.com) **超级简历。** WonderCV 是一款智能简历制作工具，提供专业简历模板和优化建议，帮助用户制作出高质量简历。其主要优点在于人力资源专家设计的模板，智能纠错和简历直推功能，以及 AI 算法匹配职位。WonderCV 定位于为求职者提供简历制作工具和求职辅助服务。
1. [[⭐] https://www.x-design.com](https://www.x-design.com) **美图 AI PPT。** 美图设计室是一款由中国互联网公司美图公司开发的图像处理、照片编辑和设计软件。
1. [[⭐] https://www.yishijuan.com](https://www.yishijuan.com) **AEE。** AEE（Auto Excel Editor）是一款在线AI全自动Excel编辑器，它通过先进的人工智能技术，实现了对Excel表格的全自动化逻辑操作。用户只需输入简单的提示语，AEE便能自动完成智能录入、自动插入公式、样式修改、生成数据、生成模板、增删改查等任务，极大地提升了工作效率。AEE的背景是针对传统Excel操作繁琐、学习成本高的问题，旨在通过智能化手段简化Excel使用流程，让非专业人士也能轻松处理数据。
1. [[⭐] https://www.zoho.com/sheet/whats-new/zohosheet6.html](https://www.zoho.com/sheet/whats-new/zohosheet6.html) **Zoho Sheet。** Zoho Sheet是一个在线电子表格工具,提供数据连接、开放式AI集成、主题模板等功能,使电子表格更智能、自动化。支持移动端使用,与Zoho生态系统深度集成,适合团队协作。
1. [[⭐] https://yinxiang.com/dl-mac/](https://yinxiang.com/dl-mac/) **印象 AI。** 「印象笔记」X「印象AI」会创作的第二大脑
1. [[⭐] https://zapier.com/ai](https://zapier.com/ai) **Zapier AI。** 赞！Zapier推出的AI自动化集成功能
1. [[⭐] https://zhiwen.xfyun.cn](https://zhiwen.xfyun.cn) **讯飞智文。** 讯飞智文是一款能够一键生成PPT，并提供AI撰写辅助的产品。不论是一句话主题还是超长文本，都能一键轻松搞定。同时支持文案的润色、扩写、拆分、翻译等需求，还提供创新模板及图示功能设计，让用户的创作更出色更高效。此外，根据PPT内容自动生成演讲稿，助用户从容演讲、脱颖而出。
1. [[💰] https://bigesj.com/ai-ppt/](https://bigesj.com/ai-ppt/) **比格AI PPT。** AI 一键生成PPT。需付费
1. [[🚀] https://chatdoc.com](https://chatdoc.com) **chatDOC。** 通过与文档对话,以引用来源的方式获得即时答案。
1. [[🚀] https://chatpdf.com](https://chatpdf.com) **chatPDF。** 加入数百万学生、研究人员和专业人士的行列，通过 AI 即时回答问题。

### AI 思维导图 (10)

1. [[⭐] https://boardmix.cn](https://boardmix.cn) **博思AI白板。** boardmix博思白板，多人实时协作的流程图，思维导图工具。
1. [[⭐] https://chatmind.tech/editor](https://chatmind.tech/editor) **Chatmind AI。** Chatmind 是一款由 Xmind 团队推出的免费在线 AI 思维导图和头脑风暴工具，通过 ChatGPT 技术，帮助用户在几分钟内创建思维导图。用户可以通过简单的文本描述生成思维导图，快速总结文档或 URL 链接为思维导图，与 AI 对话产生创意并整合到思维导图中，描述文本即可立即生成图像，轻松为任何主题创建视觉内容，自动保存文件历史以便跨设备访问，编辑文本和重新排列主题轻松自如，将思维导图转化为幻灯片展示只需一键，轻松以多种格式分享思维导图。
1. [[⭐] https://gitmind.cn](https://gitmind.cn) **GitMind思乎。** GitMind是一款全平台在线思维导图脑图架构图制作软件工具，支持手机手机思维导图，Windows/Mac多平台操作及内容同步。
1. [[⭐] https://modao.cc/brand](https://modao.cc/brand) **墨刀 AI。** 墨刀AI是国内知名产品设计协作平台「墨刀」最新推出的AI产品原型设计助手，帮助产品设计人高效实现和落地创意，激发无限创造力。
1. [[⭐] https://static.app.yinxiang.com/evermind/product/login](https://static.app.yinxiang.com/evermind/product/login) **印象图记。** 印象图记是一个在线思维导图工具与流程图工具，由印象笔记出品。它提供简洁易用的界面、实用主题和丰富图标，支持自由布局、分享导出和云端存储。这个工具旨在帮助用户提高工作和生活效率。
1. [[⭐] https://whimsical.com](https://whimsical.com) **Whimsical。** Whimsical是一个集图表、白板等多种功能于一体的视觉协作平台。用户可以使用Whimsical创建流程图、线框图、思维导图和文档，快速将想法变为现实。它可以帮助团队成员更好地协作，从而更快地构建出更好的产品。Whimsical还可以与Jira、GitHub、Notion、Figma和Slack等常用工具集成，提高工作效率。
1. [[⭐] https://www.ayoa.com/ultimate/](https://www.ayoa.com/ultimate/) **Ayoa Ultimate。** AI驱动的思维导图和生产力工具
1. [[⭐] https://www.edrawsoft.cn/mindmaster](https://www.edrawsoft.cn/mindmaster) **亿图脑图。** 万兴科技旗下的亿图脑图MindMaster软件是一款多平台思维导图软件，可用于Windows，Mac和Linux等桌面环境，也可以在线使用或在苹果，安卓等移动端上使用。
1. [[⭐] https://www.processon.com](https://www.processon.com) **ProcessOn。** ProcessOn 是一款专业在线作图工具和知识分享社区，支持 AI 生成思维导图、流程图等多种图形，实现多人实时在线协作。功能丰富，支持 Markdown、LaTeX 数学公式插入，可导出为大纲、Word 等格式。团队协作共享，提升工作效率。免费使用，提供团队版服务。
1. [[⭐⭐💰🔑🧑‍💻] https://shutu.cn](https://shutu.cn) **TreeMind 树图。**

### AI 翻译工具 (24)

1. [[⭐⭐⭐] https://immersivetranslate.com](https://immersivetranslate.com) **沉浸式翻译。** 沉浸式翻译是一款免费的，好用的，没有废话的，革命性的，饱受赞誉的，AI 驱动的双语网页翻译扩展。
1. [[⭐⭐⭐] https://translate.volcengine.com](https://translate.volcengine.com) **火山翻译。** 字节旗下支持超过100种语种的免费在线翻译
1. [[⭐⭐⭐] https://www.deepl.com/translator](https://www.deepl.com/translator) **Deepl翻译器。** 支持翻译文本和文件，为个人和团队提供准确的翻译，每天有数百万人使用DeepL进行翻译。
1. [[⭐] http://www.lingvanex.com](http://www.lingvanex.com) **Lingvanex。** Lingvanex是一款多语言翻译工具，可以翻译文本、语音、图片和文件。使用神经机器翻译技术，提高您的工作效率。
1. [[⭐] https://claude.ai](https://claude.ai) **Claude 2。** 云翻译助手是一款智能翻译工具，能够快速准确地将文字、语音、图片进行翻译。具有多国语言支持，翻译结果精准可靠。用户可以通过网页端直接使用，无需安装任何插件或软件。云翻译助手提供简单易用的界面和丰富的功能，助您轻松解决语言障碍。定价灵活合理，同时也提供免费试用期。
1. [[⭐] https://cn.bing.com/translator](https://cn.bing.com/translator) **必应翻译。** 内置微软自研的翻译词库，对流行词以及生僻词精准进行翻译
1. [[⭐] https://deepl.com](https://deepl.com) **DeepL。** DeepL 翻译是一款能够即时翻译文本和文件的工具。它为个人和团队提供准确的翻译服务。数百万人每天都在使用 DeepL 进行翻译。
1. [[⭐] https://fanyi.baidu.com](https://fanyi.baidu.com) **百度翻译。** 提供即时免费200+语言翻译服务
1. [[⭐] https://fanyi.caiyunapp.com](https://fanyi.caiyunapp.com) **彩云小译。** 兼具“你边说，我边译”的字字幕翻译功能。包括文字翻译、文档翻译、网页翻译、术语库、浏览器插件和双语对照服务
1. [[⭐] https://fanyi.sogou.com/text](https://fanyi.sogou.com/text) **搜狗翻译。** 支持中、英、法、日等50多种语言之间的互译功能
1. [[⭐] https://fanyi.xfyun.cn/console/trans/text](https://fanyi.xfyun.cn/console/trans/text) **讯飞智能翻译。** 科大讯飞推出的人工智能翻译平台
1. [[⭐] https://fanyi.youdao.com](https://fanyi.youdao.com) **有道翻译。** 网易旗下深受用户喜欢的口碑型学习工具产品
1. [[⭐] https://flowus.cn/ai](https://flowus.cn/ai) **FlowUs AI。** FlowUs AI 是一款智能化工具，能够帮助用户在工作、学习和生活中高效地完成各项任务。它提供了包括文章创作、文本润色、风格改写、内容分析、解释说明、摘要总结、AI 任务处理、代码处理、表格处理、Latex 公式处理、AI 翻译等在内的丰富功能。用户可以通过 FlowUs AI 提高文章质量和表达能力，优化文本结构、修正语病和拼写错误，智能处理文本、表格、代码和公式等内容，实现多国语言互译等。
1. [[⭐] https://jam.dev/jamgpt](https://jam.dev/jamgpt) **JamGPT。** AI Debug调试助手，快速找到解决方案
1. [[⭐] https://saga.so/ai](https://saga.so/ai) **Saga AI。** Saga AI是一款基于人工智能的助手，可以在您的工作空间中帮助您完成草稿内容、生成创意思路、修复语法错误，并一键翻译成20多种语言。它可以帮助您节省时间，专注于重要事项。
1. [[⭐] https://sight.youdao.com](https://sight.youdao.com) **网易见外。** 网易自营的智能转写翻译服务。
1. [[⭐] https://translate.alibaba.com](https://translate.alibaba.com) **阿里翻译。** 阿里巴巴达摩院推出的多领域多语种的在线机器翻译
1. [[⭐] https://transmart.qq.com/zh-CN/index](https://transmart.qq.com/zh-CN/index) **TranSmart。** 腾讯AI Lab研发的AI辅助翻译产品，满足用户快速翻译的需求
1. [[⭐] https://work.duiopen.com](https://work.duiopen.com) **麦耳会记。** 麦耳会记是一款集实时语音转写、实时翻译和 AI 辅助写作功能为一体的 AI 办公助手。它可以用于办公会议、学生网课、客户访谈录音等场景。软件支持边录音、边转写，录音结束后，音频、文本实时同步至 PC 端、手机端。采用云端存储资料的方式，无论是办公、地铁，还是旅游途中，都可以随时随地查看文档或音频。麦耳会记还提供实时字幕同传功能，帮助听力受损人士更好地参与会议。
1. [[⭐] https://www.bing.com/translator/](https://www.bing.com/translator/) **必应翻译。** 必应翻译是一款多语种文本翻译工具，可以帮助用户快速准确地翻译各种语言的文本。它具有简单易用、翻译准确、支持多种语言等优势。该产品提供免费和付费版本，付费版本提供更多高级功能。定位于个人用户和商业用户。
1. [[⭐] https://www.iflyrec.com](https://www.iflyrec.com) **讯飞听见。** 讯飞听见是智慧办公服务平台，提供语音转文字、录音整理、语音翻译等服务，致力于提高办公效率。支持快速转录音频、视频为文字，提供 AI 写作、同传、翻译等功能。
1. [[⭐] https://www.machinetranslation.com](https://www.machinetranslation.com) **MachineTranslation。** 机器翻译提供快速可靠的机器翻译后编辑（MTPE）服务。我们提供ISO 18587:2017认证的机器翻译服务，帮助您在本地化过程中利用机器翻译。
1. [[⭐] https://www.pipio.ai/video-dubbing](https://www.pipio.ai/video-dubbing) **Pipio | Video Dubbing。** 该产品通过AI技术实现视频语音的自动配音和口型同步,可以轻松实现视频的多语种翻译,并保留原始音色。主要特点包括:1)33%以上的同步精度,媲美人工口型同步;2)无损视频分辨率;3)高保真语音翻译。面向的群体包括:企业培训部门、销售人员、营销团队和内容创作者。提供免费入门版和付费专业版,欢迎体验。
1. [[🚀] https://translate.google.com](https://translate.google.com) **Google翻译。** Google免费提供上100种语言智能即时翻译工具

### AI 编程开发 (42)

1. [[⭐] https://ai.chinaz.com](https://ai.chinaz.com) **站长 AI。** 站长 AI 是一个强大的 AI 工具合集，通过人工智能技术为用户提供内容鉴定、编程辅助、SEO 优化、智能写作等多种功能。其主要优点包括高效提升工作效率、帮助用户解决难题、节省时间成本、提高内容质量等。站长 AI 定位于为广大站长和创作者提供便捷、智能的工具支持。
1. [[⭐] https://aws.amazon.com/codewhisperer/](https://aws.amazon.com/codewhisperer/) **Amazon CodeWhisperer。** Amazon CodeWhisperer是一个AI代码伴侣，基于您的注释和现有代码，实时生成代码建议，包括代码片段和完整函数。它可以帮助您绕过耗时的编码任务，加速使用陌生API构建应用程序。CodeWhisperer训练有数十亿行代码，并可以根据您的需求生成代码建议。它还可以检测代码中难以发现的漏洞，并提供修复建议。您可以在15种编程语言和多个集成开发环境中使用CodeWhisperer，包括Python、Java、JavaScript、VS Code、IntelliJ IDEA等。使用CodeWhisperer，您可以更快、更安全地编写代码。
1. [[⭐] https://botvip.cn](https://botvip.cn) **AI对话鸭。** AI对话鸭是一个领先的AI聊天对话平台，它集成了多款国产大模型，提供了丰富的对话场景和功能，满足不同用户的需求。该平台以其高效的对话生成能力和多样的应用场景，在提高工作效率和娱乐互动方面具有显著优势。
1. [[⭐] https://charisma.ai](https://charisma.ai) **Charisma。** 轻松连接到 Unreal Engine、Unity、移动设备和 metaverses
1. [[⭐] https://code.fittentech.com](https://code.fittentech.com) **Fitten Code。** Fitten Code是一个GPT驱动的代码生成和完成工具，支持多种语言：Python、Javascript、Typescript、Java等。它能够自动为您的代码补充缺失的部分，节省您宝贵的开发时间。基于AI大模型对代码进行语义级翻译，支持多种编程语言互译。同时，它能够根据您的代码自动生成相关注释，为您的代码提供清晰易懂的解释和文档。除此之外，它还拥有智能bug查找、解释代码、自动生成单元测试的功能，以及根据代码自动产生相应的测试用例等功能。
1. [[⭐] https://codefuse.alipay.com/welcome/product](https://codefuse.alipay.com/welcome/product) **codeFuse。** codeFuse 是一个能够辅助开发者进行代码补全、添加注释、解释代码等功能的插件。它基于海量数据提供实时的代码补全服务，并支持解释代码、生成注释等功能，能够帮助开发者快速完成功能研发，提高研发效率。此外，codeFuse 还可以对选定代码段进行分析理解，提出优化和改进建议，甚至可以直接生成代码补丁，帮助开发者写出更好的代码。另外，codeFuse 还能智能生成具备业务语义的测试用例，提升问题发现效率，方便快捷。codeFuse 支持 40 多种编程语言。
1. [[⭐] https://codeium.com](https://codeium.com) **Codeium。** 超过40种语言的免费代码加速工具
1. [[⭐] https://comate.baidu.com](https://comate.baidu.com) **Baidu Comate。** 基于文心大模型，结合百度积累多年的编程现场大数据和外部优秀开源数据，为你生成更符合实际研发场景的优质代码。
1. [[⭐] https://cursor.sh](https://cursor.sh) **Cursor.sh。** Cursor是未来的IDE，专为与强大的AI进行配对编程而构建。它的功能包括聊天式代码查询、代码参考、代码更改、自然语言编辑、从头生成代码、错误调试等。Cursor适用于多种使用场景，可帮助开发人员更快地构建软件。它受到数万名工程师的信赖，包括一些知名公司的工程师。
1. [[⭐] https://fig.io](https://fig.io) **Fig。** 内置AI终端命令自动补全，新一代命令行工具
1. [[⭐] https://fleak.ai](https://fleak.ai) **Fleak。** Fleak是一个面向数据团队的低代码无服务器API构建器，它不需要基础设施，可以立即将API端点嵌入到现有的现代AI和数据技术栈中。它通过简化数据组件的集成，创建统一的API，实现无缝扩展，帮助简化工作流，专注于从数据中获取洞察，而不是管理数据操作。
1. [[⭐] https://fronty.com](https://fronty.com) **Fronty。** 支持图像到 HTML CSS 转换器
1. [[⭐] https://github.com/features/copilot](https://github.com/features/copilot) **GitHub Copilot。** 热门！GitHub AI编程工具
1. [[⭐] https://hocoos.com](https://hocoos.com) **Hocoos。** 无代码AI智能在线快速创建网站
1. [[⭐] https://iflycode.xfyun.cn](https://iflycode.xfyun.cn) **iFlyCode。** 代码大模型，支持讯飞AI能力，具有业界领先的代码大模型能力。
1. [[⭐] https://jam.dev/jamgpt](https://jam.dev/jamgpt) **JamGPT。** AI Debug调试助手，快速找到解决方案
1. [[⭐] https://latitude.io](https://latitude.io) **Latitude。** Latitude将成为人们访问人工智能驱动体验的唯一场所
1. [[⭐] https://mutable.ai](https://mutable.ai) **Mutable AI。** 一款更全面的 GitHub Copilot 替代品
1. [[⭐] https://play.aidungeon.io/main/home](https://play.aidungeon.io/main/home) **AI Dungeon。** 拥有更流畅的体验，更快的模型，堪比免费版本的Steam平台
1. [[⭐] https://replit.com](https://replit.com) **Replit AI。** 利用人工智能的能力，可以在任何设备上协同构建软件。
1. [[⭐] https://sky-code.singularity-ai.com](https://sky-code.singularity-ai.com) **天工智码 SkyCode。** 天工智码 SkyCode 是一款 AI 代码生成工具，支持各种主流编程语言，助力开发人员更快更好的编码。其功能包括二分查找、排序算法实现、代码优化等，优势在于提高编码效率，定位于提供智能编程辅助。目前提供免费试用服务，用户可以根据实际需求选择付费套餐。
1. [[⭐] https://sourcegraph.com/cody](https://sourcegraph.com/cody) **CodyAI。** Cody 是一款强大而准确的 AI 编码助手，可帮助编写、修复和维护代码。它利用人工智能和对代码库的深入理解，帮助用户更快地编写和理解代码。
1. [[⭐] https://www.askcodi.com](https://www.askcodi.com) **AskCodi。** AskCodi上可以帮助你完成任何编码工作
1. [[⭐] https://www.codium.ai](https://www.codium.ai) **CodiumAI。** 超实用的技术编程句子补全工具
1. [[⭐] https://www.devchat.ai/zh](https://www.devchat.ai/zh) **DevChat。** DevChat是一款智能编程助手，集成于多款主流IDE中，支持国内外大模型，提供精准的上下文控制和简单可扩展的提示词目录。它能帮助开发者解决技术方案设计、单元测试、错误信息处理、代码文档编写、代码评审等问题，提升团队效能30%。同时，DevChat支持微软Azure平台，提供全球顶级的数据隐私保护，成本由DevChat承担，推动项目健康发展。新手也能从中受益，让大模型学过的知识都为团队所用。
1. [[⭐] https://www.hiddendoor.co](https://www.hiddendoor.co) **Hidden Door。** 热门！小说作品生成在线社交角色扮演游戏
1. [[⭐] https://www.huaweicloud.com/product/codeartside/snap.html](https://www.huaweicloud.com/product/codeartside/snap.html) **CodeArts Snap。** CodeArts Snap是华为云自研的基于盘古研发大模型的智能开发助手。它通过强大的软硬件算力底座、深厚的软件分析与安全可信基座、以及坚实的研发数据积淀,为开发者提供代码生成、知识问答、代码检查等多种智能化研发服务,大幅提高软件研发效率,释放研发生产力。
1. [[⭐] https://www.jetbrains.com/ai/](https://www.jetbrains.com/ai/) **JetBrains。** JetBrains助手是一款集成在 JetBrains IDE 中的 AI 助手插件。它可以根据项目上下文提供代码补全和问题解答功能，帮助开发者更高效地编写代码。此外，AI 助手还具有安全、可靠、成本效益高等优势。用户可以通过官方网站获取详细定价和使用方式。
1. [[⭐] https://www.marsx.dev](https://www.marsx.dev) **MarsX。** 使用无代码和零编码技能开始构建微应用程序
1. [[⭐] https://www.mindspore.cn](https://www.mindspore.cn) **昇思 MindSpore。** 通过社区合作，面向全场景构建最佳昇腾匹配、支持多处理器架构的开放AI架构，为算法工程师和数据科学家提供开发友好、运行高效、部署灵活的体验，帮助人工智能软硬件应用生态繁荣发展。
1. [[⭐] https://www.paddlepaddle.org.cn](https://www.paddlepaddle.org.cn) **百度飞桨。** 飞桨致力于让深度学习技术的创新与应用更简单。
1. [[⭐] https://www.polymet.ai](https://www.polymet.ai) **Polymet。** Polymet是一个利用人工智能技术帮助用户快速从创意到原型的设计工具。它通过连接Figma和代码库，使用户能够快速设计并迭代，同时导出符合设计模式的生产就绪代码。Polymet的主要优点包括提高设计和迭代速度，无缝连接设计工具和代码库，以及通过AI辅助设计，减少手动编码工作量，从而加速产品上市时间。
1. [[⭐] https://www.tabnine.com](https://www.tabnine.com) **Tabnine。** Tabnine是一款AI代码助手，支持所有编程语言和集成开发环境（IDE）。它提供智能代码补全、自动代码生成、错误检查和代码导航等功能，大大提高开发效率。Tabnine的优势在于其强大的机器学习模型和海量代码数据库，可以为开发人员提供准确和有用的代码建议。定价灵活多样，适应个人开发者和企业团队的需求。Tabnine定位于成为开发者的好帮手，让开发工作更高效、更快速。
1. [[⭐] https://www.teamsmart.ai](https://www.teamsmart.ai) **TeamSmart AI。** TeamSmart AI是一个Chrome插件，通过一键访问团队智能AI助手，帮助用户提高工作效率。该插件提供了多种功能，包括内容摘要、代码生成、推文起草等，用户可以直接在浏览器中完成这些任务。TeamSmart AI还提供了25+个新的AI营销助手，用户可以根据自己的需求选择使用。
1. [[⭐] https://www.theculturedao.com](https://www.theculturedao.com) **Theculturedao。** 技术优势！快速打造 AI的迪士尼漫画、游戏、电影和 Gepetto
1. [[⭐] https://www.tryparity.com](https://www.tryparity.com) **Parity。** Parity 是世界上首个为 Kubernetes 值班工程师设计的 AI SRE（Site Reliability Engineer）。它在工程师打开笔记本电脑之前，就已经进行了问题调查、根因分析，并提出了补救措施。其主要优点包括快速的根因分析、智能运行手册执行、与集群的直接对话，以及与基础设施堆栈的安全集成。
1. [[⭐] https://www.warp.dev](https://www.warp.dev) **Warp。** 内置AI命令搜索！21世纪的终端工具
1. [[⭐] https://www.zelinai.com](https://www.zelinai.com) **ZelinAI。** ZelinAI零代码构建你的AI应用，ZelinAI目前接入了微软合规的GPT3.5、GPT4大智能体以及文心一言、星火等国内知名的大智能体
1. [[⭐⭐⭐🚀] https://deepmind.google/technologies/gemini](https://deepmind.google/technologies/gemini) **Google Gemini。** Gemini(双子座)是Google最新的大型语言模型，在一系列多模式基准测试中超越了最先进GPT4。在各种自然语言任务中表现良好，例如摘要、指令跟踪、内容生成、情感分析、实体提取、分类等。
1. [[🚀] https://huggingface.co](https://huggingface.co) **Hugging Face。** 下载开源的SD模型
1. [[🚀] https://ludo.ai](https://ludo.ai) **Ludo AI。** 快速帮助游戏开发者进行创造过程
1. [[🚀] https://www.cursor.so](https://www.cursor.so) **Cursor。** 基于GPT的代码生成工具

### AI 网站生成 (4)

1. [[⭐] https://tilda.cc](https://tilda.cc) **Tilda。** Tilda能快速创建一个令人印象深刻的网站，特别适用于商业和媒体领域。
1. [[⭐] https://webassistants.ai](https://webassistants.ai) **WebAssistants.ai。** WebAssistants.ai是一个提供AI助手服务的平台，旨在通过人工智能技术增强网站和仪表板的交互体验。它通过简单的集成方式，让网站能够快速响应用户查询，提供个性化建议，并持续学习以改善服务。平台支持多语言，易于定制，且无需处理旧代码即可添加到现有应用程序中。
1. [[⭐] https://webflow.com](https://webflow.com) **Webflow。** Webflow是利用AI搭建的一个非常强大的视觉开发平台。
1. [[⭐] https://www.dora.run](https://www.dora.run) **Dora AI。** Dora AI可以做到使用自然语言生成、定制和部署网站，所有这些都在Dora强大的无代码编辑器中完成，他能在几秒钟内生成令人惊叹的、完全可编辑的网站，将静态设计转换为3D，自动化您的动画过程。

### AI 电商工具 (9)

1. [[⭐] https://claid.ai](https://claid.ai) **Claid AI Scene Creation。** Claid.ai是一个提供AI生成、增强和编辑产品图片的平台。它能够自动转换普通产品图片为具有拍摄品质的营销图片，提高图片的清晰度，去除背景，并创建令人惊叹的照片，从而提升转化率。Claid.ai支持生成多个适合品牌的产品图片，并提供统一的背景和图像大小，以适应不同的平台。用户可以通过API访问结果，实时获取编辑后的图片。Claid.ai还提供了多种功能，包括图片放大、智能去除背景、智能框架、AI颜色校正等，这些功能可以提高图片的质量和视觉效果。Claid.ai的目标是帮助企业实现图片的统一化和提升，从而提升转化率和销售业绩。
1. [[⭐] https://flair.ai](https://flair.ai) **Flair AI。** 你的私人AI设计师！一键生成精美产品照片
1. [[⭐] https://mote.openi.cn](https://mote.openi.cn) **AI 模特。** AI 模特是一款专为电商卖家打造的 AI 商拍工具。我们以 AI 模特为核心，提供一站式 AI 商拍解决方案，帮助电商卖家解决传统商拍成本高、效率低的问题。通过智能商拍、服装模特图、商品场景图、商品抠图等功能，让电商卖家能够轻松、高效地拍摄和处理商品图片。AI 模特提供定制模特功能，可以训练出企业品牌特性的专属模特模型，为电商卖家打造个性化的商拍体验。
1. [[⭐] https://pebblely.com/zh/](https://pebblely.com/zh/) **Pebblely 宝贝丽。** Pebblely 宝贝丽是一款 AI 作图神器，专为电商而生。它能一键生成针对产品的精美场景图，可直接使用在淘宝、亚马逊、小红书等电商和社交媒体。每月免费 40 张场景图。自带 20 种默认主题，也支持自定义背景。适用于小企业家、广告公司和设计师，能在任何场景下生成创意图。深受多个品牌的信任和喜爱。
1. [[⭐] https://picwish.cn](https://picwish.cn) **佐糖。** 佐糖是一款智能 AI 图像处理平台，提供丰富的图像处理工具，包括抠图、去水印、模糊变清晰、图片裁剪、图片压缩、黑白照片上色等功能。操作简便，无需学习，一键处理图像。通过智能 AI 处理，提高工作效率，释放创造力。
1. [[⭐] https://www.ihuiwa.com](https://www.ihuiwa.com) **绘蛙。** 绘蛙是一款智能图片、文案创作平台，通过AI生成商拍图和种草文案，免费创作小红书图片、电商商品主图等。其功能包括AI生成商拍图、种草文案、美图、稿定设计、换装、去水印、图片高清修复等。定位于为用户提供简洁好用的智能创作工具。
1. [[⭐] https://www.piccopilot.com](https://www.piccopilot.com) **Pic Copilot。** Pic Copilot是一个利用图像生成模型为电商提供的AI驱动图片优化工具。它能够通过对大量图片点击量数据的训练,有效提高图片的点击转化率,从而优化电商的营销效果。其关键优势是提高图片的点击转化率,从而提升电商营销效果。它是阿里巴巴团队训练的数据结果,能够显著优化图片的点击转化表现。
1. [[⭐] https://www.productshots.ai](https://www.productshots.ai) **ProductShots.AI。** ProductShots.AI是一款基于AI技术的产品照片生成工具，无需摄影棚和拍摄，即可轻松生成数百张精美的产品照片。用户只需上传产品照片，AI会自动去除背景并生成多种场景模板，用户可根据需求选择使用或自定义场景，生成的照片可用于电商、社交媒体等多种场景，帮助用户更好地展示和销售产品。ProductShots.AI提供免费试用，付费套餐包括不同数量和质量的照片生成服务。
1. [[⭐] https://www.weshop.com](https://www.weshop.com) **WeShop。** AI商拍工具，在WeShop再也不会受到模特限制，鼠标就是快门，点击就看成片。

### AI 会议助手 (6)

1. [[⭐] https://fireflies.ai](https://fireflies.ai) **fireflies.ai。** Fireflies.ai是一款利用生成式人工智能技术的AI会议记录助手，可自动转录、总结、搜索和分析语音对话。通过与Zoom、Google Meet、Microsoft Teams、Webex等平台集成，生成会议记录和智能摘要。
1. [[⭐] https://mem.ai](https://mem.ai) **Mem.ai。** Memkey是一款AI团队协作工具，能够帮助团队组织会议记录、项目信息和知识库等，一切内容都可以快速搜索和发现。该工具具有以下功能和优势：

1. 自动整理：AI能够自动整理和归类团队工作中的各种内容，提高工作效率。
2. 快速搜索：所有内容都可以快速搜索，无需费时查找。
3. 实时协作：团队成员可以实时共享和编辑内容，促进协作。
4. 多平台支持：可以在网页端、小程序端和桌面客户端上使用。

Memkey的定价信息请查阅官方网站。该产品定位于提升团队的工作效率和组织能力。
1. [[⭐] https://otter.ai](https://otter.ai) **Otter AI。** 写笔记和总结会议的速度提高 30 倍
1. [[⭐] https://tingwu.aliyun.com](https://tingwu.aliyun.com) **通义听悟。** 阿里推出的会议转录工具
1. [[⭐] https://work.duiopen.com](https://work.duiopen.com) **麦耳会记。** 麦耳会记是一款集实时语音转写、实时翻译和 AI 辅助写作功能为一体的 AI 办公助手。它可以用于办公会议、学生网课、客户访谈录音等场景。软件支持边录音、边转写，录音结束后，音频、文本实时同步至 PC 端、手机端。采用云端存储资料的方式，无论是办公、地铁，还是旅游途中，都可以随时随地查看文档或音频。麦耳会记还提供实时字幕同传功能，帮助听力受损人士更好地参与会议。
1. [[⭐] https://www.notta.ai](https://www.notta.ai) **Notta。** Notta可以在在线会议、面对面销售会议等场景中快速转录您的音频或视频文件为文字内容。

### AI 综合工具 (25)

1. [[⭐⭐⭐] https://ai-nav.lzw.me](https://ai-nav.lzw.me) **AI网址导航。** 收集了当前最新的AI人工智能相关的网站网址，定时任务每日更新，检测验证可用性
1. [[⭐] https://aitools.run](https://aitools.run) **AI帮个忙。** AI帮个忙是打工人的多功能小帮手，有多个AI写作和图片工具，可以用AI生成小红书文案，文章，PPT大纲等，支持改写，润色,续写,扩写
1. [[⭐] https://baoyueai.com/home?utm_id=219599](https://baoyueai.com/home?utm_id=219599) **包阅AI文档阅读。** 包阅AI阅读助手支持一键总结、AI问答、多语言翻译,涵盖网页、论文文献、法律文档、学术科研、产品手册、市场报告、电子书等多种内容类型。功能包括总结提炼、深度理解、问答解惑、文献检索、文案润色等。定位于帮助用户高效阅读和理解各类文本资料。
1. [[⭐] https://chathub.gg](https://chathub.gg) **ChatHub。** ChatHub是一个浏览器插件，可让您同时使用多个聊天机器人。它支持ChatGPT、Bing、Google Bard、Claude等10+个开源聊天机器人。ChatHub提供免费使用的大部分功能，还有付费的ChatHub Premium套餐，解锁所有高级功能。
1. [[⭐] https://coda.io/product/ai-alpha](https://coda.io/product/ai-alpha) **Coda AI。** Coda AI是你的新工作助手。委派重复任务，重新思考内容创作，并更快地获取洞察。使用基于AI的模板开始。
1. [[⭐] https://fintax.golcer.com](https://fintax.golcer.com) **高灯财务 AI 助手。** 高灯财务 AI 助手是一款专注于财税领域的专业工具，它通过对话式智能输出、多模态数据抽取、文本推理等技术，为用户提供财务报告分析、文件解读、智能提取、智能思维导图、办税指南等服务。这款产品利用海量财税领域训练数据，结合垂直知识进行分析和推理，生成专业报告内容，帮助用户轻松掌握文件要点，提升工作效率。
1. [[⭐] https://mastergo.com/upcoming-ai/apply](https://mastergo.com/upcoming-ai/apply) **MasterGo AI。** MasterGo AI 是一款基于人工智能技术的智能助手，具有强大的功能和优势。它可以帮助用户高效处理各种任务，并提供个性化的解决方案。MasterGo AI 定价合理，并提供灵活的定位选项，适用于个人用户和企业用户。
1. [[⭐] https://midreal.ai](https://midreal.ai) **MidReal。** MidReal是一款由AI技术驱动的互动文字冒险游戏。它具有超强的记忆力和写作能力,可以确保您的故事始终连贯一致,带给您身临其境的沉浸式体验。新特性包括多人互动、迷你游戏等,定价灵活,可免费试玩。
1. [[⭐] https://news.microsoft.com/reinventing-productivity/](https://news.microsoft.com/reinventing-productivity/) **Microsoft 365 Copilot。** Microsoft 365 Copilot是一个智能助手，为您的工作提供支持。它能够提供任务建议、自动化流程、文件管理等功能，让您更高效地完成工作。Microsoft 365 Copilot的定价根据订阅类型和用户数量而定。
1. [[⭐] https://qianwen.aliyun.com](https://qianwen.aliyun.com) **通义千问。** 通义千问是一个专门响应人类指令的大模型。它具有强大的语义理解和语言生成能力，可以回答各种问题、提供实用信息、帮助解决问题。通义千问的优势在于准确性高、响应速度快、支持多种语言、功能丰富。定价方面，我们提供免费试用和付费订阅两种模式。通义千问定位于成为人类的智能助手，帮助用户提高工作效率、解决问题、获取知识。
1. [[⭐] https://resoomer.com](https://resoomer.com) **Resoomer。** Résoomer 是一款用于文本摘要的软件和在线工具：它允许您通过重要概念来总结和分析您的文章。它提供了一种有效的解决方案，可以节省阅读和理解长文本的时间。 Resoomer 使用人工智能算法从文本中提取主要思想，并以简洁明了的方式呈现它们。该软件供学生、信息专业人员和研究人员用来合成文章、报告和研究论文。
1. [[⭐] https://saasaitools.com](https://saasaitools.com) **Saasaitools。** 随时了解每日 AI 新闻和工具: Discover your next generative AI tool
1. [[⭐] https://stepchat.cn/chats/new](https://stepchat.cn/chats/new) **跃问。** 跃问是一款多功能的个人效率助手工具。它可以帮助用户获取知识、查询信息、学习语言、创意写作和编写代码等。无论是工作、学习还是生活,跃问都能为你提供及时有效的解决方案。它采用先进的人工智能技术,能够理解并回答用户的各种问题,大大提高了工作和学习效率。同时,跃问也具有人性化的交互界面,让用户可以像与人交流一样自然地与它对话。无论是中文还是英文,跃问都能够完美理解和输出。此外,跃问还兼具严格的数据安全保护机制,确保用户隐私的绝对安全。
1. [[⭐] https://toolfolio.io](https://toolfolio.io) **Toolfolio。** 国外热门工具集合站
1. [[⭐] https://toolscout.ai](https://toolscout.ai) **Toolscout。** 每天更新，最快最新的人工智能工具
1. [[⭐] https://www.88sheji.cn/ai](https://www.88sheji.cn/ai) **Ai导航。** 专为设计师打造的AI工具箱，提供智能设计辅助、创意激发和设计效率提升等功能
1. [[⭐] https://www.aicpw.cn](https://www.aicpw.cn) **Khanmigo。** 收录热门AI产品
1. [[⭐] https://www.boardmix.com](https://www.boardmix.com) **boardmix。** boardmix 博思白板是一个集思维表达、灵感梳理、流程整理、任务管理等多种创意表达能力于一体的工具，旨在提升团队效率和创造力。其主要优点包括一体化绘图软件、AIGC 创作、实时协作工作台等功能。
1. [[⭐] https://www.feishu.cn/product/ai_companion](https://www.feishu.cn/product/ai_companion) **飞书智能伙伴。** 飞书智能伙伴是一款智能助手产品，可以为用户选择自己喜欢的形象、设置姓名，并记忆用户在飞书上的行为，支持部署在飞书上的业务应用，实现跨系统任务完成和统一使用体验。产品定位于提升工作效率和创造力，是企业数字员工的新型助手。
1. [[⭐] https://www.powerfulai.tools](https://www.powerfulai.tools) **Powerfulai。** 全球最大的人工智能工具目录: DISCOVER POWERFUL AI TOOLS. World's Largest AI Tool Directory, Updated Daily. `存在人机验证`
1. [[⭐] https://www.stackradar.co](https://www.stackradar.co) **Stackradar.co。** 互联网上最好的技术工具的精选
1. [[⭐] https://www.teamsmart.ai](https://www.teamsmart.ai) **TeamSmart AI。** TeamSmart AI是一个Chrome插件，通过一键访问团队智能AI助手，帮助用户提高工作效率。该插件提供了多种功能，包括内容摘要、代码生成、推文起草等，用户可以直接在浏览器中完成这些任务。TeamSmart AI还提供了25+个新的AI营销助手，用户可以根据自己的需求选择使用。
1. [[⭐⭐🔐🧑‍💻] https://www.chatallais.com](https://www.chatallais.com) **星界AI|一站式AIGC平台。** 一站式AIGC平台，集成Chatgpt、Claude、ChatGLM、Midjourney、DALL-E、Flux.1、Suno等全网顶级AI大模型，实现文本创作、图片生成、音乐创作一站式生成。
1. [[🚀] https://www.meta.ai](https://www.meta.ai) **MetaAI。** 使用 Meta AI 助手完成任务、创建免费 AI 生成图像和获取任何问题的答案
1. [[🚀] https://huggingface.co](https://huggingface.co) **Hugging Face。** 下载开源的SD模型

### AI 开源工具 (9)

1. [[⭐] https://github.com/features/copilot](https://github.com/features/copilot) **GitHub Copilot。** 热门！GitHub AI编程工具
1. [[⭐] https://github.com/levihsu/OOTDiffusion](https://github.com/levihsu/OOTDiffusion) **OOTDiffusion。** OOTDiffusion是一个基于潜在扩散模型的虚拟服装试穿开源工具。它支持半身和全身两种模型,可以实现服装的自然融合。用户可以通过调节各种参数实现对试穿效果的精确控制,满足不同的需求。该工具开源在GitHub上,已获得超过300星的关注。
1. [[⭐] https://github.com/pAIrprogio/vscode-ui-sketcher](https://github.com/pAIrprogio/vscode-ui-sketcher) **UI Sketcher。** VSCode插件,借助GPT-4V的多模态能力,在插件中画出界面草图,就能生成一个基于ReactNative的UI界面
1. [[⭐] https://github.com/tldraw/make-real](https://github.com/tldraw/make-real) **Makereal Tldraw。** 通过草图生成可交互的UI界面和代码
1. [[⭐] https://jan.ai](https://jan.ai) **Jan。** Jan是一款开源、自托管的聊天GPT替代品，可以100%离线在您的计算机上运行。Jan提供可定制的AI助手、全局热键和内联AI等功能，可以提高您的生产力。Jan支持在本地主机上提供OpenAI等价API服务器，可以与兼容的应用程序一起使用。Jan的对话、偏好和模型使用等数据都保留在您的计算机上，安全、可导出，并可随时删除。
1. [[⭐] https://prompttools.readthedocs.io](https://prompttools.readthedocs.io) **PromptTools。** PromptTools 是一个开源工具集，旨在为开发者提供一套免费的、开源的工具，用于测试和实验。它提供了一系列接口和方法，使开发者能够使用熟悉的代码和笔记本等界面来评估提示。通过在笔记本中运行实验并评估输出，您可以更好地了解提示的效果。您还可以将评估结果转化为单元测试，并将其集成到您的 CI/CD 工作流中。PromptTools 的核心理念是使开发者能够在本地执行代码，而不是将代码发送到服务器。这意味着所有代码都在您的本地机器上运行，对于与数据安全和隐私有关的项目来说非常重要。
1. [[⭐] https://replicate.com/lucataco/whisperspeech-small](https://replicate.com/lucataco/whisperspeech-small) **Whisper Speech。** Whisper Speech是一款完全开源的文本转语音模型，由Collabora和Lion在Juwels超级计算机上训练。它支持多种语言和多种形式的输入，包括Node.js、Python、Elixir、HTTP、Cog和Docker。该模型的优势在于高效的语音合成和灵活的部署方式。定价方面，Whisper Speech完全免费。它定位于为开发者和研究人员提供一个强大的、可定制的文本转语音解决方案。
1. [[🚀] https://huggingface.co](https://huggingface.co) **Hugging Face。** 下载开源的SD模型
1. [[❓] https://www.anime.gf](https://www.anime.gf) **anime.gf。** anime.gf 是由 moecorp 发起的下一代本地优先的大型语言模型（LLMs），目前正处于积极开发阶段。它代表了一种新兴的本地化和开源的人工智能技术，旨在提供更高效、更个性化的用户体验。 `[error][404]Not Found`

### AI 国外工具 (53)

1. [[⭐] https://aicolors.co](https://aicolors.co) **AIcolors。** 根据文本生成调色板，提供配色案例参考
1. [[⭐] https://app.recraft.ai/community](https://app.recraft.ai/community) **Recraft。** 便捷的AI生成矢量图像生成工具
1. [[⭐] https://boolpic.fun/background-remover](https://boolpic.fun/background-remover) **Toolkit。** 多功能的AI图片处理工具箱
1. [[⭐] https://contentatscale.ai/ai-prompt-library](https://contentatscale.ai/ai-prompt-library) **Content at scale。** 收录最佳的ChatGPT prompt提示词
1. [[⭐] https://fliki.ai](https://fliki.ai) **Fliki。** 高效帮用户创建视频，具有文本转语音功能
1. [[⭐] https://gamma.app](https://gamma.app) **Gamma。** Gamma是幻灯片演示的一种替代方式-一种快速、简单的分享和展示工作的方法。创建引人入胜的演示文稿、备忘录、简报和文档，易于实时讨论或异步分享。全部在您的浏览器中完成，无需下载或安装任何内容。
1. [[⭐] https://github.com/features/copilot](https://github.com/features/copilot) **GitHub Copilot。** 热门！GitHub AI编程工具
1. [[⭐] https://github.com/pAIrprogio/vscode-ui-sketcher](https://github.com/pAIrprogio/vscode-ui-sketcher) **UI Sketcher。** VSCode插件,借助GPT-4V的多模态能力,在插件中画出界面草图,就能生成一个基于ReactNative的UI界面
1. [[⭐] https://github.com/tldraw/make-real](https://github.com/tldraw/make-real) **Makereal Tldraw。** 通过草图生成可交互的UI界面和代码
1. [[⭐] https://hix.ai](https://hix.ai) **Hix AI。** HIX.AI是一款由先进的GPT-3.5/4技术驱动的全能人工智能写作助手。
1. [[⭐] https://hocoos.com](https://hocoos.com) **Hocoos。** 无代码AI智能在线快速创建网站
1. [[⭐] https://huemint.com/brand-intersection](https://huemint.com/brand-intersection) **Huemint。** 用AI自定义和谐配色
1. [[⭐] https://imagecreator.alkaidvision.com](https://imagecreator.alkaidvision.com) **ImageCreator。** PS中免费使用的SD神级插件
1. [[⭐] https://looka.com](https://looka.com) **Looka。** AI辅助logo和品牌设计
1. [[⭐] https://mubert.com](https://mubert.com) **Mubert。** 使用人工智能为您的视频内容、播客和应用程序生成音乐。
1. [[⭐] https://noty.ai](https://noty.ai) **Noty AI。** ChatGPT驱动的AI会议转录工具
1. [[⭐] https://openart.ai/home](https://openart.ai/home) **Openart。** 实用！SD艺术创作提示词
1. [[⭐] https://play.aidungeon.io/main/home](https://play.aidungeon.io/main/home) **AI Dungeon。** 拥有更流畅的体验，更快的模型，堪比免费版本的Steam平台
1. [[⭐] https://play.ht](https://play.ht) **Play。** 基于人工智能将文本转位逼真的语音
1. [[⭐] https://promptalot.com](https://promptalot.com) **Promptalot。** 超好用的MJ提示词辅助插件
1. [[⭐] https://qoqo.ai](https://qoqo.ai) **QoQo。** AI快速创建用户旅程地图
1. [[⭐] https://saasaitools.com](https://saasaitools.com) **Saasaitools。** 随时了解每日 AI 新闻和工具: Discover your next generative AI tool
1. [[⭐] https://speaking.ai](https://speaking.ai) **Speaking AI。** 一键克隆！效果真实的文本转语音神器
1. [[⭐] https://toolfolio.io](https://toolfolio.io) **Toolfolio。** 国外热门工具集合站
1. [[⭐] https://toolscout.ai](https://toolscout.ai) **Toolscout。** 每天更新，最快最新的人工智能工具
1. [[⭐] https://uberduck.ai](https://uberduck.ai) **uberduck。** 开源的AI语音生成平台
1. [[⭐] https://vocalremover.org](https://vocalremover.org) **分离人声。** Vocal Remover使用强大的AI算法免费将歌曲中的人声与音乐分离。
1. [[⭐] https://www.chai-research.com](https://www.chai-research.com) **Chai Research。** 领先的AI聊天平台
1. [[⭐] https://www.illostration.com](https://www.illostration.com) **illostration。** 几秒内创建不同风格插图
1. [[⭐] https://www.nvidia.cn/studio/canvas](https://www.nvidia.cn/studio/canvas) **NVIDIA Canvas。** 用AI将简单的勾勒转化成逼真的图像
1. [[⭐] https://www.powerfulai.tools](https://www.powerfulai.tools) **Powerfulai。** 全球最大的人工智能工具目录: DISCOVER POWERFUL AI TOOLS. World's Largest AI Tool Directory, Updated Daily. `存在人机验证`
1. [[⭐] https://www.stableaudio.com](https://www.stableaudio.com) **Stable Audio。** Stability Al最新推出的音乐生成工具
1. [[⭐] https://www.stackradar.co](https://www.stackradar.co) **Stackradar.co。** 互联网上最好的技术工具的精选
1. [[⭐] https://www.tracejourney.com](https://www.tracejourney.com) **Tracejourney。** 拯救MJ渣画质！图片一键转矢量
1. [[⭐] https://www.unscreen.com](https://www.unscreen.com) **Unscreen。** 智能AI去除视频背景在线神器
1. [[⭐] https://www.veed.io](https://www.veed.io) **Veed。** 视频编辑变得简单。只需单击即可创建出色的视频。添加字幕，转录音频，浏览AI工具，使用模板等等。
1. [[⭐] https://www.zmo.ai](https://www.zmo.ai) **ZMO.AI。** ZMO可以轻松的生成令人惊叹的动漫、艺术或图像。
1. [[🚀] https://cn.bing.com/create](https://cn.bing.com/create) **Bing Image Creator。** 基于Dalle的AI绘画工具，Edge的侧边栏可直接使用。中国区不可用
1. [[🚀] https://changestyleai.com](https://changestyleai.com) **Change Style AI。** 人工智能多风格肖像生成器！能够AI生成30种照片
1. [[🚀] https://creator.nightcafe.studio](https://creator.nightcafe.studio) **NightCafe。** 用AI生成惊艳的艺术品
1. [[🚀] https://designer.microsoft.com](https://designer.microsoft.com) **Microsoft Designer。** 微软推出的AI平面设计工具，实现快速完成设计加工。中国区不可用。
1. [[🚀] https://flowgpt.com](https://flowgpt.com) **Flowgpt。** 专注于分享聊天指令的社区网站
1. [[🚀] https://imagine.meta.com](https://imagine.meta.com) **Imagine with Meta。** Meta 推出的免费AI绘画工具
1. [[🚀] https://lexica.art](https://lexica.art) **Lexica。** AI图像生成+SD提示词
1. [[🚀] https://ludo.ai](https://ludo.ai) **Ludo AI。** 快速帮助游戏开发者进行创造过程
1. [[🚀] https://lumalabs.ai](https://lumalabs.ai) **Luma Labs。** 将视频转为游戏资产
1. [[🚀] https://prompthero.com](https://prompthero.com) **PromptHero。** 最受欢迎的AI提示词网站
1. [[🚀] https://scribblediffusion.com](https://scribblediffusion.com) **Scribble Diffusion。** 有趣！将鼠绘草图变成精美照片
1. [[🚀] https://skybox.blockadelabs.com](https://skybox.blockadelabs.com) **Text to Skybox。** AI生成360°无缝环境贴图
1. [[🚀] https://waifulabs.com](https://waifulabs.com) **WaifuLabs。** 一键生成动漫二次元头像
1. [[🚀] https://www.cursor.so](https://www.cursor.so) **Cursor。** 基于GPT的代码生成工具
1. [[🚀] https://www.dreamup.com](https://www.dreamup.com) **Dreamup。** 知名站点Deviantart发布的AI绘画工具
1. [[🚀] https://www.prompthunt.com/explore](https://www.prompthunt.com/explore) **Prompt Hunt。** 按主题分类的SD提示词

## License

`chatgpt-nav` is released under the MIT license.
