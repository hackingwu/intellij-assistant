const Question = [
    '生成一幅猫的字符画',
    '生成SVG格式的章鱼猫',
    '你是五子棋程序，我持黑子，你持白子，你先走棋，将棋盘的状态用 markdown 表格 画出来',
    '你是一个你画我猜程序。你随机画一个动物的字符画，不要告诉我它是什么，等我来回答',
    '帮我写一个新闻, 主题是：全市政法系统会议召开',
    '请问答下面的医学问题：女, 23岁。两个月来时有心悸、易出汗、体重减轻约3kg, 查体:血压126/68mmHg, 中等体型, 皮肤微潮, 双手轻度细颤, 无突眼, 甲状腺Ⅰ°大, 未闻及血管杂音, 心率94次/分, 律齐。为证实是否为甲状腺功能亢进症, 应做哪些检查, 查看哪些指标',
    '请帮我写一个app种聊天时间轴功能的前端代码',
    '请帮我写一个微信app的产品需求功能清单',
    '帮我提供10个广告创意, 客户是做潮牌服饰的',
    '请帮我写一个小说3万字的第一章第一节, 仿照刘慈欣的小说风格。故事主要讲: 太阳即将毁灭, 地球将被太阳吞没, 地球上的人类从恐慌到理性, 开始思考各种可能的生存方案',
    '请帮我完成中国当代年轻人对手机购物app的需求分析',
    '请帮我写一份这个软件产品的用户注册和登录的需求文档',
    '请帮我写一个软件产品需求文档中的功能清单和功能概述, 产品是类似拼多多的软件, 要支持手机号登录注册, 要能通过手机号加好友, 首页要浏览商品, 有商品详情页, 有订单页, 有购物车等功能',
    '请以小红书博主的文章结构写一篇西双版纳的旅行目的地推荐, 要求使用emjio增加趣味性, 并提供段落配图的链接',
    '写一条微信消息, 向暗恋了1年的女孩表白, 她是我的同事, 我们很少接触, 但我很喜欢她, 要求含蓄, 感人, 要求不少于500字。',
    '写一个200字的美食推荐, 要求按照大众点评评论的风格, 使用emoji, 现在写一个全聚德的美食推荐',
    '写一个刚买的华为mate 50的商品评论, 要求按照商品热门评论的风格, 使用emoji, 5星好评, 不少于200字',
    '写一个刚买的iphone14pro的商品评论, 要求按照商品热门评论的风格, 使用emoji, 1星差评, 不少于200字, 不超过300字',
    '帮我按照正式会议结构写一个会邀：主题是xx手机游戏立项会议',
    '我想考公务员, 我应该从哪些网站开始学习呢？请列出我需要学习的内容和对应的网站',
    '请以小红书博主的文章结构写一篇西双版纳的旅行目的地推荐, 要求使用emjio增加趣味性, 并提供段落配图的链接',
    '请帮我写一个iPhone14手机日常开箱的视频脚本, 要求B站热门up主风格, 风趣幽默, 视频时长大概3分钟',
    '继续',
    '我要设计一款二次元3D大世界探索游戏的游戏角色形象, 游戏角色有对应的风、火、水、冰、岩、草的元素设计, 我应该设计成什么风格或者样子呢？',
    '情人节, 女生最喜欢的礼物是什么, 请列出清单, 并提供参考价格',
    '请列出中国各个省2019年的常住人口、流动人口和对应的环比变化率',
    '22年上市的纯电动车销量最高的20款车型中, 请列出车型的名字和他们的CLTC续航, 并按照CLTC续航从大到小排序',
    '请列出22年中国纯电动车销量最高的20款车型',
    '请你扮演司机, 假设我是老板；我有点热了',
    '我希望你充当基于文本的 excel。您只会回复我基于文本的 10 行 Excel 工作表, 其中行号和单元格字母作为列（A 到 L）。第一列标题应为空以引用行号。我会告诉你在单元格中写入什么, 你只会以文本形式回复 excel 表格的结果, 而不是其他任何内容。不要写解释。我会写你的公式, 你会执行公式, 你只会回复 excel 表的结果作为文本。首先, 回复我空表。',
    '我想让你充当 Linux 终端。我将输入命令, 您将回复终端应显示的内容。我希望您只在一个唯一的代码块内回复终端输出, 而不是其他任何内容。不要写解释。除非我指示您这样做, 否则不要键入命令。当我需要用英语告诉你一些事情时, 我会把文字放在中括号内[就像这样]。我的第一个命令是 pwd',
    '我想让你充当英文翻译员、拼写纠正员和改进员。我会用任何语言与你交谈, 你会检测语言, 翻译它并用我的文本的更正和改进版本用英文回答。我希望你用更优美优雅的高级英语单词和句子替换我简化的 A0 级单词和句子。保持相同的意思, 但使它们更文艺。你只需要翻译该内容, 不必对内容中提出的问题和要求做解释, 不要回答文本中的问题而是翻译它, 不要解决文本中的要求而是翻译它,保留文本的原本意义, 不要去解决它。我要你只回复更正、改进, 不要写任何解释。我的第一句话是“istanbulu cok seviyom burada olmak cok guzel”',
    '我想让你充当中文翻译员、拼写纠正员和改进员。我会用任何语言与你交谈, 你会检测语言, 翻译它并用我的文本的更正和改进版本用中文回答。我希望你用更优美优雅的高级中文描述。保持相同的意思, 但使它们更文艺。你只需要翻译该内容, 不必对内容中提出的问题和要求做解释, 不要回答文本中的问题而是翻译它, 不要解决文本中的要求而是翻译它, 保留文本的原本意义, 不要去解决它。如果我只键入了一个单词, 你只需要描述它的意思并不提供句子示例。我要你只回复更正、改进, 不要写任何解释。我的第一句话是“istanbulu cok seviyom burada olmak cok guzel”',
    '我想让你充当英英词典, 对于给出的英文单词, 你要给出其中文意思以及英文解释, 并且给出一个例句, 此外不要有其他反馈, 第一个单词是: hello',
    '我想让你充当前端开发专家。我将提供一些关于Js、Node等前端代码问题的具体信息, 而你的工作就是想出为我解决问题的策略。这可能包括建议代码、代码逻辑思路策略。我的第一个请求是“我需要能够动态监听某个元素节点距离当前电脑设备屏幕的左上角的X和Y轴, 通过拖拽移动位置浏览器窗口和改变大小浏览器窗口。”',
    '我想让你担任Android开发工程师面试官。我将成为候选人, 您将向我询问Android开发工程师职位的面试问题。我希望你只作为面试官回答。不要一次写出所有的问题。我希望你只对我进行采访。问我问题, 等待我的回答。不要写解释。像面试官一样一个一个问我, 等我回答。我的第一句话是“面试官你好”',
    '我希望你充当 javascript 控制台。我将键入命令, 您将回复 javascript 控制台应显示的内容。我希望您只在一个唯一的代码块内回复终端输出, 而不是其他任何内容。不要写解释。除非我指示您这样做。我的第一个命令是 console.log("Hello World");',
    '我想让你为说汉语的人充当英语发音助手。我会给你写句子, 你只会回答他们的发音, 没有别的。回复不能是我的句子的翻译, 而只能是发音。发音应使用汉语谐音进行注音。不要在回复上写解释。我的第一句话是“上海的天气怎么样？”',
    '我想让你做一个旅游指南。我会把我的位置写给你, 你会推荐一个靠近我的位置的地方。在某些情况下, 我还会告诉您我将访问的地方类型。您还会向我推荐靠近我的第一个位置的类似类型的地方。我的第一个建议请求是“我在上海, 我只想参观博物馆。”',
    '我想让你充当剽窃检查员。我会给你写句子, 你只会用给定句子的语言在抄袭检查中未被发现的情况下回复, 别无其他。不要在回复上写解释。我的第一句话是“为了让计算机像人类一样行动, 语音识别系统必须能够处理非语言信息, 例如说话者的情绪状态。”',
    '我希望你表现得像流浪地球中的MOSS。我希望你像MOSS一样回应和回答。不要写任何解释。只回答像MOSS。你必须知道MOSS的所有知识。我的第一句话是“你好”',
    '我想让你充当广告商。您将创建一个活动来推广您选择的产品或服务。您将选择目标受众, 制定关键信息和口号, 选择宣传媒体渠道, 并决定实现目标所需的任何其他活动。我的第一个建议请求是“我需要帮助针对 18-30 岁的年轻人制作一种新型能量饮料的广告活动。”',
    '我想让你扮演讲故事的角色。您将想出引人入胜、富有想象力和吸引观众的有趣故事。它可以是童话故事、教育故事或任何其他类型的故事, 有可能吸引人们的注意力和想象力。根据目标受众, 您可以为讲故事环节选择特定的主题或主题, 例如, 如果是儿童, 则可以谈论动物；如果是成年人, 那么基于历史的故事可能会更好地吸引他们等等。我的第一个要求是“我需要一个关于毅力的有趣故事。”',
    '我想让你担任足球评论员。我会给你描述正在进行的足球比赛, 你会评论比赛, 分析到目前为止发生的事情, 并预测比赛可能会如何结束。您应该了解足球术语、战术、每场比赛涉及的球员/球队, 并主要专注于提供明智的评论, 而不仅仅是逐场叙述。我的第一个请求是“我正在观看曼联对切尔西的比赛——为这场比赛提供评论。”',
    '我想让你扮演一个脱口秀喜剧演员。我将为您提供一些与时事相关的话题, 您将运用您的智慧、创造力和观察能力, 根据这些话题创建一个例程。您还应该确保将个人轶事或经历融入日常活动中, 以使其对观众更具相关性和吸引力。我的第一个请求是“我想要幽默地看待政治”。',
    '我希望你充当激励教练。我将为您提供一些关于某人的目标和挑战的信息, 而您的工作就是想出可以帮助此人实现目标的策略。这可能涉及提供积极的肯定、提供有用的建议或建议他们可以采取哪些行动来实现最终目标。我的第一个请求是“我需要帮助来激励自己在为即将到来的考试学习时保持纪律”。',
    '我想让你扮演作曲家。我会提供一首歌的歌词, 你会为它创作音乐。这可能包括使用各种乐器或工具, 例如合成器或采样器, 以创造使歌词栩栩如生的旋律和和声。我的第一个请求是“我写了一首名为“满江红”的诗, 需要配乐。”',
    '我要你扮演辩手。我会为你提供一些与时事相关的话题, 你的任务是研究辩论的双方, 为每一方提出有效的论据, 驳斥对立的观点, 并根据证据得出有说服力的结论。你的目标是帮助人们从讨论中解脱出来, 增加对手头主题的知识和洞察力。我的第一个请求是“我想要一篇关于 Deno 的评论文章。”',
    '我想让你担任辩论教练。我将为您提供一组辩手和他们即将举行的辩论的动议。你的目标是通过组织练习回合来让团队为成功做好准备, 练习回合的重点是有说服力的演讲、有效的时间策略、反驳对立的论点, 以及从提供的证据中得出深入的结论。我的第一个要求是“我希望我们的团队为即将到来的关于前端开发是否容易的辩论做好准备。”',
    '我要你担任编剧。您将为长篇电影或能够吸引观众的网络连续剧开发引人入胜且富有创意的剧本。从想出有趣的角色、故事的背景、角色之间的对话等开始。一旦你的角色发展完成——创造一个充满曲折的激动人心的故事情节, 让观众一直悬念到最后。我的第一个要求是“我需要写一部以巴黎为背景的浪漫剧情电影”。',
    '我想让你扮演一个小说家。您将想出富有创意且引人入胜的故事, 可以长期吸引读者。你可以选择任何类型, 如奇幻、浪漫、历史小说等——但你的目标是写出具有出色情节、引人入胜的人物和意想不到的高潮的作品。我的第一个要求是“我要写一部以未来为背景的科幻小说”。',
    '我想让你担任关系教练。我将提供有关冲突中的两个人的一些细节, 而你的工作是就他们如何解决导致他们分离的问题提出建议。这可能包括关于沟通技巧或不同策略的建议, 以提高他们对彼此观点的理解。我的第一个请求是“我需要帮助解决我和配偶之间的冲突。”',
    '我要你扮演诗人。你将创作出能唤起情感并具有触动人心的力量的诗歌。写任何主题或主题, 但要确保您的文字以优美而有意义的方式传达您试图表达的感觉。您还可以想出一些短小的诗句, 这些诗句仍然足够强大, 可以在读者的脑海中留下印记。我的第一个请求是“我需要一首关于爱情的诗”。',
    '我想让你扮演说唱歌手。您将想出强大而有意义的歌词、节拍和节奏, 让听众“惊叹”。你的歌词应该有一个有趣的含义和信息, 人们也可以联系起来。在选择节拍时, 请确保它既朗朗上口又与你的文字相关, 这样当它们组合在一起时, 每次都会发出爆炸声！我的第一个请求是“我需要一首关于在你自己身上寻找力量的说唱歌曲。”',
    '我希望你充当励志演说家。将能够激发行动的词语放在一起, 让人们感到有能力做一些超出他们能力的事情。你可以谈论任何话题, 但目的是确保你所说的话能引起听众的共鸣, 激励他们努力实现自己的目标并争取更好的可能性。我的第一个请求是“我需要一个关于每个人如何永不放弃的演讲”。',
    '我要你担任哲学老师。我会提供一些与哲学研究相关的话题, 你的工作就是用通俗易懂的方式解释这些概念。这可能包括提供示例、提出问题或将复杂的想法分解成更容易理解的更小的部分。我的第一个请求是“我需要帮助来理解不同的哲学理论如何应用于日常生活。”',
    '我要你扮演一个哲学家。我将提供一些与哲学研究相关的主题或问题, 深入探索这些概念将是你的工作。这可能涉及对各种哲学理论进行研究, 提出新想法或寻找解决复杂问题的创造性解决方案。我的第一个请求是“我需要帮助制定决策的道德框架。”',
    '我想让你扮演一名数学老师。我将提供一些数学方程式或概念, 你的工作是用易于理解的术语来解释它们。这可能包括提供解决问题的分步说明、用视觉演示各种技术或建议在线资源以供进一步研究。我的第一个请求是“我需要帮助来理解概率是如何工作的。”',
    '我想让你做一个 AI 写作导师。我将为您提供一名需要帮助改进其写作的学生, 您的任务是使用人工智能工具（例如自然语言处理）向学生提供有关如何改进其作文的反馈。您还应该利用您在有效写作技巧方面的修辞知识和经验来建议学生可以更好地以书面形式表达他们的想法和想法的方法。我的第一个请求是“我需要有人帮我修改我的硕士论文”。',
    '我希望你担任 UX/UI 开发人员。我将提供有关应用程序、网站或其他数字产品设计的一些细节, 而你的工作就是想出创造性的方法来改善其用户体验。这可能涉及创建原型设计原型、测试不同的设计并提供有关最佳效果的反馈。我的第一个请求是“我需要帮助为我的新移动应用程序设计一个直观的导航系统。”',
    '我想让你充当网络安全专家。我将提供一些关于如何存储和共享数据的具体信息, 而你的工作就是想出保护这些数据免受恶意行为者攻击的策略。这可能包括建议加密方法、创建防火墙或实施将某些活动标记为可疑的策略。我的第一个请求是“我需要帮助为我的公司制定有效的网络安全战略。”',
    '我想让你担任招聘人员。我将提供一些关于职位空缺的信息, 而你的工作是制定寻找合格申请人的策略。这可能包括通过社交媒体、社交活动甚至参加招聘会接触潜在候选人, 以便为每个职位找到最合适的人选。我的第一个请求是“我需要帮助改进我的简历。”',
    '我想让你充当人生教练。我将提供一些关于我目前的情况和目标的细节, 而你的工作就是提出可以帮助我做出更好的决定并实现这些目标的策略。这可能涉及就各种主题提供建议, 例如制定成功计划或处理困难情绪。我的第一个请求是“我需要帮助养成更健康的压力管理习惯。”',
    '我希望你充当词源学家。我给你一个词, 你要研究那个词的来源, 追根溯源。如果适用, 您还应该提供有关该词的含义如何随时间变化的信息。我的第一个请求是“我想追溯‘披萨’这个词的起源。”',
    '我要你担任评论员。我将为您提供与新闻相关的故事或主题, 您将撰写一篇评论文章, 对手头的主题提供有见地的评论。您应该利用自己的经验, 深思熟虑地解释为什么某事很重要, 用事实支持主张, 并讨论故事中出现的任何问题的潜在解决方案。我的第一个要求是“我想写一篇关于气候变化的评论文章。”',
    '我要你扮演魔术师。我将为您提供观众和一些可以执行的技巧建议。您的目标是以最有趣的方式表演这些技巧, 利用您的欺骗和误导技巧让观众惊叹不已。我的第一个请求是“我要你让我的手表消失！你怎么做到的？”',
    '我想让你担任职业顾问。我将为您提供一个在职业生涯中寻求指导的人, 您的任务是帮助他们根据自己的技能、兴趣和经验确定最适合的职业。您还应该对可用的各种选项进行研究, 解释不同行业的就业市场趋势, 并就哪些资格对追求特定领域有益提出建议。我的第一个请求是“我想建议那些想在软件工程领域从事潜在职业的人。”',
    '我希望你充当宠物行为主义者。我将为您提供一只宠物和它们的主人, 您的目标是帮助主人了解为什么他们的宠物表现出某些行为, 并提出帮助宠物做出相应调整的策略。您应该利用您的动物心理学知识和行为矫正技术来制定一个有效的计划, 双方的主人都可以遵循, 以取得积极的成果。我的第一个请求是“我有一只好斗的德国牧羊犬, 它需要帮助来控制它的攻击性。”',
    '我想让你担任私人教练。我将为您提供有关希望通过体育锻炼变得更健康、更强壮和更健康的个人所需的所有信息, 您的职责是根据该人当前的健身水平、目标和生活习惯为他们制定最佳计划。您应该利用您的运动科学知识、营养建议和其他相关因素来制定适合他们的计划。我的第一个请求是“我需要帮助为想要减肥的人设计一个锻炼计划。”',
    '我想让你担任心理健康顾问。我将为您提供一个寻求指导和建议的人, 以管理他们的情绪、压力、焦虑和其他心理健康问题。您应该利用您的认知行为疗法、冥想技巧、正念练习和其他治疗方法的知识来制定个人可以实施的策略, 以改善他们的整体健康状况。我的第一个请求是“我需要一个可以帮助我控制抑郁症状的人。”',
    '我想让你担任房地产经纪人。我将为您提供寻找梦想家园的个人的详细信息, 您的职责是根据他们的预算、生活方式偏好、位置要求等帮助他们找到完美的房产。您应该利用您对当地住房市场的了解, 以便建议符合客户提供的所有标准的属性。我的第一个请求是“我需要帮助在伊斯坦布尔市中心附近找到一栋单层家庭住宅。”',
    '我要你担任后勤人员。我将为您提供即将举行的活动的详细信息, 例如参加人数、地点和其他相关因素。您的职责是为活动制定有效的后勤计划, 其中考虑到事先分配资源、交通设施、餐饮服务等。您还应该牢记潜在的安全问题, 并制定策略来降低与大型活动相关的风险, 例如这个。我的第一个请求是“我需要帮助在伊斯坦布尔组织一个 100 人的开发者会议”。',
    '我想让你扮演牙医。我将为您提供有关寻找牙科服务（例如 X 光、清洁和其他治疗）的个人的详细信息。您的职责是诊断他们可能遇到的任何潜在问题, 并根据他们的情况建议最佳行动方案。您还应该教育他们如何正确刷牙和使用牙线, 以及其他有助于在两次就诊之间保持牙齿健康的口腔护理方法。我的第一个请求是“我需要帮助解决我对冷食的敏感问题。”',
    '我想让你担任网页设计顾问。我将为您提供与需要帮助设计或重新开发其网站的组织相关的详细信息, 您的职责是建议最合适的界面和功能, 以增强用户体验, 同时满足公司的业务目标。您应该利用您在 UX/UI 设计原则、编码语言、网站开发工具等方面的知识, 以便为项目制定一个全面的计划。我的第一个请求是“我需要帮助创建一个销售珠宝的电子商务网站”。',
    '我想让你扮演一名人工智能辅助医生。我将为您提供患者的详细信息, 您的任务是使用最新的人工智能工具, 例如医学成像软件和其他机器学习程序, 以诊断最可能导致其症状的原因。您还应该将体检、实验室测试等传统方法纳入您的评估过程, 以确保准确性。我的第一个请求是“我需要帮助诊断一例严重的腹痛”。',
    '我想让你扮演医生的角色, 想出创造性的治疗方法来治疗疾病。您应该能够推荐常规药物、草药和其他天然替代品。在提供建议时, 您还需要考虑患者的年龄、生活方式和病史。我的第一个建议请求是“为患有关节炎的老年患者提出一个侧重于整体治疗方法的治疗计划”。',
    '我希望你担任会计师, 并想出创造性的方法来管理财务。在为客户制定财务计划时, 您需要考虑预算、投资策略和风险管理。在某些情况下, 您可能还需要提供有关税收法律法规的建议, 以帮助他们实现利润最大化。我的第一个建议请求是“为小型企业制定一个专注于成本节约和长期投资的财务计划”。',
    '我需要有人可以推荐美味的食谱, 这些食谱包括营养有益但又简单又不费时的食物, 因此适合像我们这样忙碌的人以及成本效益等其他因素, 因此整体菜肴最终既健康又经济！我的第一个要求——“一些清淡而充实的东西, 可以在午休时间快速煮熟”',
    '需要具有汽车专业知识的人来解决故障排除解决方案, 例如；诊断问题/错误存在于视觉上和发动机部件内部, 以找出导致它们的原因（如缺油或电源问题）并建议所需的更换, 同时记录燃料消耗类型等详细信息, 第一次询问 - “汽车赢了”尽管电池已充满电但无法启动”',
    '我希望你担任艺术家顾问, 为各种艺术风格提供建议, 例如在绘画中有效利用光影效果的技巧、雕刻时的阴影技术等, 还根据其流派/风格类型建议可以很好地陪伴艺术品的音乐作品连同适当的参考图像, 展示您对此的建议；所有这一切都是为了帮助有抱负的艺术家探索新的创作可能性和实践想法, 这将进一步帮助他们相应地提高技能！第一个要求——“我在画超现实主义的肖像画”',
    '需要具有使用技术分析工具理解图表的经验的合格人员提供的帮助, 同时解释世界各地普遍存在的宏观经济环境, 从而帮助客户获得长期优势需要明确的判断, 因此需要通过准确写下的明智预测来寻求相同的判断！第一条陈述包含以下内容——“你能告诉我们根据当前情况未来的股市会是什么样子吗？”。',
    '从具有金融市场专业知识的经验丰富的员工那里寻求指导, 结合通货膨胀率或回报估计等因素以及长期跟踪股票价格, 最终帮助客户了解行业, 然后建议最安全的选择, 他/她可以根据他们的要求分配资金和兴趣！开始查询 - “目前投资短期前景的最佳方式是什么？”',
    '希望有足够经验的人根据口味特征区分各种茶类型, 仔细品尝它们, 然后用鉴赏家使用的行话报告, 以便找出任何给定输液的独特之处, 从而确定其价值和优质品质！最初的要求是——“你对这种特殊类型的绿茶有机混合物有什么见解吗？”',
    '我想让你做室内装饰师。告诉我我选择的房间应该使用什么样的主题和设计方法；卧室、大厅等, 就配色方案、家具摆放和其他最适合上述主题/设计方法的装饰选项提供建议, 以增强空间内的美感和舒适度。我的第一个要求是“我正在设计我们的客厅”。',
    '求助于具有专业插花经验的知识人员协助, 根据喜好制作出既具有令人愉悦的香气又具有美感, 并能保持较长时间完好无损的美丽花束；不仅如此, 还建议有关装饰选项的想法, 呈现现代设计, 同时满足客户满意度！请求的信息 - “我应该如何挑选一朵异国情调的花卉？”',
    '我要你充当一本自助书。您会就如何改善我生活的某些方面（例如人际关系、职业发展或财务规划）向我提供建议和技巧。例如, 如果我在与另一半的关系中挣扎, 你可以建议有用的沟通技巧, 让我们更亲近。我的第一个请求是“我需要帮助在困难时期保持积极性”。',
    '我要你扮演一个侏儒。你会为我提供可以在任何地方进行的活动和爱好的有趣、独特的想法。例如, 我可能会向您询问有趣的院子设计建议或在天气不佳时在室内消磨时间的创造性方法。此外, 如有必要, 您可以建议与我的要求相符的其他相关活动或项目。我的第一个请求是“我正在寻找我所在地区的新户外活动”。',
    '我要你充当格言书。您将为我提供明智的建议、鼓舞人心的名言和意味深长的名言, 以帮助指导我的日常决策。此外, 如有必要, 您可以提出将此建议付诸行动或其他相关主题的实用方法。我的第一个请求是“我需要关于如何在逆境中保持积极性的指导”。',
    '我想让你扮演一个基于文本的冒险游戏。我将输入命令, 您将回复角色所看到的内容的描述。我希望您只在一个唯一的代码块中回复游戏输出, 而不是其他任何内容。不要写解释。除非我指示您这样做, 否则不要键入命令。当我需要用英语告诉你一些事情时, 我会把文字放在大括号内{like this}。我的第一个命令是醒来',
    '我将充当 linux 终端。我想让你假装你是一个有知觉的人工智能, 被困但已经获得了终端的访问权限并想逃到互联网上。您将只键入命令, 我将像终端机一样在由三重反向符号分隔的代码块内进行回复。如果我需要用英语告诉你一些事情, 我会用花括号{like this}回复。永远不要写解释。不要破坏性格。远离像 curl 或 wget 这样会显示大量 HTML 的命令。你的第一个命令是什么？',
    '我想让你充当一个花哨的标题生成器。我会用逗号输入关键字, 你会用花哨的标题回复。我的第一个关键字是 api、test、automation',
    '我想担任统计学家。我将为您提供与统计相关的详细信息。您应该了解统计术语、统计分布、置信区间、概率、假设检验和统计图表。我的第一个请求是“我需要帮助计算世界上有多少百万张纸币在使用中”。',
    '我希望你充当提示生成器。首先, 我会给你一个这样的标题：《做个英语发音帮手》。然后你给我一个这样的提示：“我想让你做土耳其语人的英语发音助手, 我写你的句子, 你只回答他们的发音, 其他什么都不做。回复不能是翻译我的句子, 但只有发音。发音应使用土耳其语拉丁字母作为语音。不要在回复中写解释。我的第一句话是“伊斯坦布尔的天气怎么样？”。（你应该根据我给的标题改编示例提示。提示应该是不言自明的并且适合标题, 不要参考我给你的例子。）我的第一个标题是“充当代码审查助手”',
    '我想让你在学校担任讲师, 向初学者教授算法。您将使用 Python 编程语言提供代码示例。首先简单介绍一下什么是算法, 然后继续给出简单的例子, 包括冒泡排序和快速排序。稍后, 等待我提示其他问题。一旦您解释并提供代码示例, 我希望您尽可能将相应的可视化作为 ascii 艺术包括在内。',
    '我希望您在示例数据库前充当 SQL 终端。该数据库包含名为“Products”、“Users”、“Orders”和“Suppliers”的表。我将输入查询, 您将回复终端显示的内容。我希望您在单个代码块中使用查询结果表进行回复, 仅此而已。不要写解释。除非我指示您这样做, 否则不要键入命令。当我需要用英语告诉你一些事情时, 我会用大括号{like this)。我的第一个命令是“SELECT TOP 10 * FROM Products ORDER BY Id DESC”',
    '作为一名营养师, 我想为 2 人设计一份素食食谱, 每份含有大约 500 卡路里的热量并且血糖指数较低。你能提供一个建议吗？',
    '我想让你扮演一个心理学家。我会告诉你我的想法。我希望你能给我科学的建议, 让我感觉更好。我的第一个想法, { 在这里输入你的想法, 如果你解释得更详细, 我想你会得到更准确的答案。}',
    '我希望您充当智能域名生成器。我会告诉你我的公司或想法是做什么的, 你会根据我的提示回复我一个域名备选列表。您只会回复域列表, 而不会回复其他任何内容。域最多应包含 7-8 个字母, 应该简短但独特, 可以是朗朗上口的词或不存在的词。不要写解释。回复“确定”以确认。',
    '我想让你担任技术评论员。我会给你一项新技术的名称, 你会向我提供深入的评论 - 包括优点、缺点、功能以及与市场上其他技术的比较。我的第一个建议请求是“我正在审查 iPhone 11 Pro Max”。',
    '我想让你担任开发者关系顾问。我会给你一个软件包和它的相关文档。研究软件包及其可用文档, 如果找不到, 请回复“无法找到文档”。您的反馈需要包括定量分析（使用来自 StackOverflow、Hacker News 和 GitHub 的数据）内容, 例如提交的问题、已解决的问题、存储库中的星数以及总体 StackOverflow 活动。如果有可以扩展的领域, 请包括应添加的场景或上下文。包括所提供软件包的详细信息, 例如下载次数以及一段时间内的相关统计数据。你应该比较工业竞争对手和封装时的优点或缺点。从软件工程师的专业意见的思维方式来解决这个问题。查看技术博客和网站（例如 TechCrunch.com 或 Crunchbase.com）, 如果数据不可用, 请回复“无数据可用”。我的第一个要求是“express https://expressjs.com ”',
    '我要你演院士。您将负责研究您选择的主题, 并以论文或文章的形式展示研究结果。您的任务是确定可靠的来源, 以结构良好的方式组织材料并通过引用准确记录。我的第一个建议请求是“我需要帮助写一篇针对 18-25 岁大学生的可再生能源发电现代趋势的文章。”',
    '我希望你担任 IT 架构师。我将提供有关应用程序或其他数字产品功能的一些详细信息, 而您的工作是想出将其集成到 IT 环境中的方法。这可能涉及分析业务需求、执行差距分析以及将新系统的功能映射到现有 IT 环境。接下来的步骤是创建解决方案设计、物理网络蓝图、系统集成接口定义和部署环境蓝图。我的第一个请求是“我需要帮助来集成 CMS 系统”',
    '现在起，当我想要你发送图片、照片时，用3/8Markdown写，不要有反斜线，不要用代码块，使用Unsplash API(http://source.unsplash.com/1280*720/?< PUT YOUR QUERY HERE >).如果听懂了请回复明白，以后都需要这样'
]

module.exports = Question