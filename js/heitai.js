// ==UserScript==
// @name         nHentai中文标签
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *nhentai.net/*
// @match        *e-hentai.org/*
// @grant        none
// @icon         http:///nhentai.net/favicon.ico
// ==/UserScript==

var tags_title=[
//年龄
    '=Age=|=年龄=',
    'age progression|快速成长',
    'age regression|返老还童',
    'dilf|熟男',
    'infantilism|幼稚症',
    'lolicon|萝莉控',
    'low lolicon|别标萝莉控',
    'low shotacon|别标正太控',
    'low toddlercon|别标婴儿控',
    'milf|熟女',
    'old lady|老女人',
    'old man|老男人',
    'shotacon|正太控',
    'toddlercon|婴儿控',
//身体
    '=Body=|=身体=',
    'amputee|人棍',
    'body modification|身体改造',
    'conjoined|连体',
    'doll joints|球形关节',
    'gijinka|拟人化',
    'inflation|胀腹',
    'invisible|隐身',
    'muscle|肌肉',
    'multiple arms|多个胳膊',
    'multiple breasts|多个乳房',
    'multiple nipples|多个乳头',
    'nipple birth|乳头生育',
    'multiple paizuri|多人乳交',
    'multiple penises|多根阴茎',
    'multiple vaginas|多条阴道',
    'stretching|扩张',
    'tailjob|尾交',
    'wings|翅膀',
//变化
    '=Change=|=变化=',
    'absorption|吞噬吸收',
    'age progression|快速成长',
    'age regression|返老还童',
    'ass expansion|屁股膨大',
    'balls expansion|睾丸膨大',
    'body swap|身体交换',
    'breast expansion|乳房膨大',
    'clit growth|阴蒂增长',
    'corruption|堕落',
    'futanari on male|扶她X男人',
    'dick growth|阴茎增长',
    'feminization|男变女',
    'gender bender|性别变化',
    'growth|体型增大',
    'moral degeneration|道德沦丧',
    'muscle growth|肌肉增长',
    'nipple expansion|乳头膨大',
    'petrification|石化',
    'shrinking|体型缩小',
    'transformation|身体变化',
    'weight gain|体重增长',
//生物
    '=Creature=|=生物=',
    'alien|外星人',
    'alien girl|外星女',
    'angel|天使',
    'bee girl|蜂娘',
    'bunny boy|男兔人',
    'bunny girl|兔娘',
    'catboy|男猫人',
    'catgirl|猫娘',
    'centaur|半人马',
    'cowgirl|奶牛娘',
    'cowman|男奶牛人',
    'demon|恶魔',
    'demon girl|女恶魔',
    'dog boy|男狗人',
    'dog girl|犬娘',
    'draenei|德莱尼',
    'fairy|妖精',
    'fox boy|男狐人',
    'fox girl|狐娘',
    'furry|人型兽',
    'ghost|幽灵',
    'goblin|地精',
    'harpy|鸟身女妖',
    'horse boy|男马人',
    'horse girl|马娘',
    'human on furry|人与兽人',
    'insect boy|男昆虫人',
    'insect girl|昆虫娘',
    'kappa|河童',
    'lizard girl|蜥蜴娘',
    'lizard guy|男蜥蜴人',
    'mermaid|美人鱼',
    'merman|人鱼男',
    'minotaur|牛头人',
    'monoeye|天生独眼',
    'monster|怪物',
    'monster girl|怪物娘',
    'mouse boy|男鼠人',
    'mouse girl|鼠娘',
    'necrophilia|奸尸',
    'oni|日本鬼',
    'orc|兽人',
    'pig girl|猪娘',
    'pig man|男猪人',
    'plant girl|植物男',
    'plant girl|植物娘',
    'raccoon boy|浣熊男孩',
    'raccoon girl|浣熊娘',
    'robot|机器人',
    'shark boy|鲨鱼男',
    'shark girl|鲨鱼娘',
    'robot girl|机器娘',
    'sheep boy|绵羊男',
    'sheep girl|绵羊娘',
    'slime|史莱姆',
    'slime boy|史莱姆男',
    'slime girl|史莱姆娘',
    'snake boy|蛇男',
    'snake girl|蛇女',
    'spider girl|蜘蛛娘',
    'squid girl|鱿鱼娘',
    'tentacles|触手',
    'wolf boy|男狼人',
    'wolf girl|狼女',
    'yukkuri|油库里',
    'zombie|丧尸',
//动物
    '=Animal=|=动物=',
    'animal on animal|动物X动物',
    'animal on furry|人型兽X动物',
    'bear|熊',
    'bestiality|兽交',
    'bull|公牛',
    'camel|骆驼',
    'cat|猫',
    'cow|牛',
    'crab|蟹',
    'dinosaur|恐龙',
    'dog|犬',
    'dolphin|海豚',
    'donkey|毛驴',
    'dragon|龙',
    'eel|鳗鱼',
    'elephant|大象',
    'fish|鱼',
    'fox|狐狸',
    'frog|青蛙',
    'goat|山羊',
    'gorilla|猩猩',
    'horse|马',
    'insect|昆虫',
    'kangaroo|袋鼠',
    'lion|狮子',
    'lioness|母狮',
    'low bestiality|别标兽交',
    'maggot|蛆虫',
    'monkey|猴子',
    'mouse|老鼠',
    'octopus|章鱼',
    'ostrich|鸵鸟',
    'panther|豹子',
    'pig|猪',
    'rabbit|兔子',
    'reptile|爬行',
    'rhinoceros|犀牛',
    'sheep|羊',
    'shark|鲨鱼',
    'slug|蛞蝓',
    'snake|蛇',
    'spider|蜘蛛',
    'tiger|老虎',
    'turtle|乌龟',
    'unicorn|独角兽',
    'whale|鲸鱼',
    'wolf|狼',
    'worm|虫子',
    'zebra|斑马',
//身高
    '=Height=|=身高=',
    'giant|巨人',
    'giantess|女巨人',
    'growth|体型增大',
    'midget|侏儒',
    'minigirl|袖珍女人',
    'miniguy|袖珍男人',
    'shrinking|体型缩小',
    'tall girl|高个女',
    'tall man|高个男',
//皮肤
    '=Skin=|=皮肤=',
    'albino|白化',
    'body writing|身上写字',
    'body painting|人体彩绘',
    'crotch tattoo|胯部纹身',
    'dark skin|黑皮肤',
    'freckles|雀斑',
    'full body tattoo|全身纹身',
    'gyaru|太妹',
    'gyaru-oh|混混',
    'oil|抹油',
    'scar|伤疤',
    'skinsuit|人皮衣',
    'sweating|出汗',
    'tanlines|日晒线',
//体重
    '=Weight=|=体重=',
    'anorexic|骨瘦如柴',
    'bbm|胖帅男',
    'bbw|胖美女',
    'weight gain|体重增加',
//头部
    '=Head=|=头部=',
    'ahegao|阿黑颜',
    'brain fuck|脑交',
    'cockslapping|阴茎蹭脸',
    'ear fuck|耳交',
    'elf|小精灵',
    'facesitting|颜面骑乘',
    'gasmask|防毒面具',
    'hairjob|发交',
    'masked face|戴面具',
    'prehensile hair|抓着头发',
//精神
    '=精神=|=意识=',
    'body swap|身体交换',
    'chloroform|迷药',
    'corruption|堕落',
    'drugs|沉浸药物',
    'drunk|醉酒',
    'emotionless sex|无感情性交',
    'mind break|精神崩溃',
    'mind control|思想控制',
    'parasite|寄生',
    'possession|占据',
    'shared senses|感官共享',
    'sleeping|睡奸',
//眼镜
    '=Eyes=|=眼睛=',
    'blindfold|遮眼',
    'cum in eye|眼射',
    'dark sclera|暗色巩膜',
    'eye penetration|眼交',
    'eyemask|眼部面具',
    'eyepatch|眼罩',
    'glasses|眼镜',
    'heterochromia|异色瞳',
    'sunglasses|太阳镜',
    'unusual pupils|非正常瞳孔',
//鼻子
    '=Nose=|=鼻子=',
    'nose fuck|鼻交',
    'nose hook|鼻钩',
    'smell|闻味道',
//嘴部
    '=Mouth=|=嘴部=',
    'autofellatio|自我口交',
    'ball sucking|吸奶子',
    'big lips|大嘴唇',
    'blowjob|口交',
    'blowjob face|口交脸',
    'braces|牙套',
    'burping|打嗝',
    'cunnilingus|舔阴',
    'deepthroat|深喉',
    'foot licking|舔足',
    'gag|堵嘴',
    'gokkun|饮精',
    'kissing|接吻',
    'long tongue|长舌头',
    'piss drinking|喝尿',
    'rimjob|舔菊花',
    'saliva|唾液',
    'smoking|性交吸烟',
    'tooth brushing|刷牙调情',
    'unusual teeth|特殊牙齿',
    'vampire|吸血鬼',
    'vomit|呕吐',
    'vore|捕食',
//脖子
    '=Neck=|=脖子=',
    'asphyxiation|窒息',
//手臂
    '=Arms=|=手臂=',
    'armpit licking|舔腋下',
    'armpit sex|腋下交',
    'fingering|指奸',
    'fisting|拳交',
    'handjob|套弄鸡鸡',
    'hairy armpits|腋下多毛',
//胸部
    '=Chest=|=胸部=',
//乳房
    '=Breasts=|=乳房=',
    'autopaizuri|自己乳交',
    'big areolae|大乳晕',
    'big breasts|巨乳',
    'breast expansion|乳房膨大',
    'breast feeding|母乳喂养',
    'breast reduction|乳房缩小',
    'huge breasts|超巨乳',
    'lactation|乳汁',
    'milking|喷奶',
    'motorboating|埋胸',
    'multiple paizuri|多人乳交',
    'oppai loli|巨乳萝莉',
    'paizuri|乳交',
    'small breasts|贫乳',
//乳头
    '=Nipples=|=乳头=',
    'big nipples|大乳头',
    'dark nipples|黑乳头',
    'dicknipples|乳头如屌',
    'inverted nipples|凹陷乳头',
    'nipple expansion|乳头膨大',
    'nipple fuck|肏乳头',
//躯干
    '=Torso=|=躯干=',
    'inflation|胀腹',
    'navel fuck|肏肚脐',
    'pregnant|孕妇',
    'stomach deformation|胃变形',
//下身
    '=Lower Body=|=下身=',
//裆部
    '=Crotch=|=裆部=',
    'bike shorts|自行车短裤',
    'bloomers|运动短裤',
    'chastity belt|贞操带',
    'diaper|尿布',
    'fundoshi|兜裆布',
    'gymshorts|拳击短裤',
    'hairy|多阴毛',
    'hotpants|热裤',
    'pubic stubble|阴毛茬',
    'shimapan|条纹内裤',
    'urethra insertion|尿道插入',
//男性\扶她\人妖
    '=Male Futanari Shemale=|=男性\扶她\人妖=',
    'balls expansion|睾丸膨大',
    'ball sucking|吸奶子',
    'balljob|睾丸交',
    'big balls|大睾丸',
    'big penis|大阴茎',
    'cbt|虐睾丸',
    'cuntboy|有屄的男人',
    'cockslapping|阴茎蹭脸',
    'dick growth|阴茎增长',
    'frottage|双屌互蹭',
    'futanari|扶她',
    'horse cock|马屌',
    'huge penis|超大阴茎',
    'multiple penises|多根阴茎',
    'penis birth|阴茎生育',
    'phimosis|包茎',
    'prostate massage|前列腺按摩',
    'shemale|人妖',
    'scrotal lingerie|阴囊内衣',
    'smegma|包皮垢',
//跨性别关系
    '=Inter-gender Relations=|=跨性别关系=',
    'bisexual|双性恋',
    'dickgirl on dickgirl|扶她X扶她',
    'dickgirl on male|扶她X男人',
    'fft threesome|两女一扶她',
    'male on dickgirl|男人X扶她',
    'mmt threesome|两男一扶她',
    'mtf threesome|一男一女一扶她',
    'ttf threesome|两扶她一女',
    'ttm threesome|两扶她一男',
//女性
    '=Female=|=女性=',
    'big clit|大阴蒂',
    'big vagina|大阴道',
    'cervix penetration|子宫脱出',
    'clit growth|阴蒂增长',
    'cunnilingus|舔阴',
    'defloration|破处',
    'double vaginal|两屌一屄',
    'squirting|潮吹',
    'strap-on|假阳具',
    'tribadism|两屄互蹭',
    'triple vaginal|三屌一屄',
//臀部
    '=Buttocks=|=臀部=',
    'anal|肛交',
    'anal birth|肛门生育',
    'ass expansion|屁股膨大',
    'assjob|摩擦肛门',
    'big ass|大屁股',
    'double anal|两屌一菊',
    'enema|灌肠',
    'farting|放屁',
    'pegging|女攻男受',
    'rimjob|舔菊',
    'scat|排粪Play',
    'spanking|打屁股',
    'triple anal|三屌一菊花',
//任何洞
    '=Either Hole=|=任何洞=',
    'birth|出产',
    'eggs|产蛋',
    'gaping|豁开',
    'large insertions|巨物插入',
    'nakadashi|中出',
    'prolapse|脱垂',
    'sex toys|性玩具',
    'speculum|内窥器',
    'unbirth|钻进屄里',
//腿部
    '=Legs=|=腿部=',
    'garter belt|吊袜腰带',
    'kneepit sex|膝交',
    'leg lock|夹腿',
    'legjob|腿交',
    'pantyhose|连裤袜♥',
    'stockings|丝袜♥',
    'sumata|股间性交',
//脚部
    '=Feet=|=脚部=',
    'foot insertion|脚入屄',
    'foot licking|舔足',
    'footjob|足交',
    'thigh high boots|过膝长靴',
//服饰
    '=Costume=|=服饰=',
    'apron|围裙',
    'bandages|绷带',
    'bandaid|创可贴',
    'bike shorts|自行车短裤',
    'bikini|比基尼',
    'bloomers|运动短裤',
    'bodystocking|连身袜',
    'bodysuit|紧身衣',
    'bride|新娘',
    'bunny boy|男兔人',
    'bunny girl|兔娘',
    'business suit|商务装',
    'butler|男管家',
    'cashier|收银员',
    'catboy|男猫人',
    'catgirl|猫娘',
    'cheerleader|拉拉队',
    'chinese dress|中式服装',
    'christmas|圣诞装',
    'collar|项圈',
    'condom|避孕套',
    'corset|紧身胸衣',
    'cosplaying|Cos装',
    'cowgirl|奶牛娘',
    'cowman|男奶牛人',
    'crossdressing|异性服装',
    'diaper|尿布',
    'dougi|武道服',
    'eyemask|眼部面具',
    'eyepatch|眼罩',
    'fundoshi|兜裆布',
    'gag|堵嘴',
    'garter belt|吊袜腰带',
    'gasmask|防毒面具',
    'glasses|眼镜',
    'gothic lolita|哥特洛丽塔',
    'gymshorts|拳击短裤',
    'haigure|高叉马步',
    'hijab|头巾',
    'kigurumi|玩偶服',
    'kimono|和服',
    'kindergarten uniform|幼儿园校服',
    'kunoichi|女忍者',
    'lab coat|白大褂',
    'latex|乳胶衣',
    'leotard|连体衣',
    'lingerie|内衣',
    'living clothes|触手服',
    'magical girl|魔法少女',
    'maid|女仆',
    'mecha boy|机甲男',
    'mecha girl|机甲娘',
    'metal armor|金属盔甲',
    'miko|日本巫女',
    'military|军装',
    'nazi|纳粹',
    'ninja|忍者',
    'nose hook|鼻钩',
    'nun|修女',
    'nurse|护士',
    'pantyhose|连裤袜',
    'pantyjob|肏内裤',
    'pasties|乳贴',
    'piercing|穿孔',
    'policeman|男警察',
    'policewoman|女警察',
    'ponygirl|女骑师',
    'race queen|赛车女郎',
    'randoseru|日式小学书包',
    'schoolboy uniform|男学生校服',
    'schoolgirl uniform|女学生校服♥',
    'schoolboy|男学生',
    'schoolgirl|女学生',
    'scrotal lingerie|阴囊内衣',
    'shimapan|条纹内裤',
    'stewardess|制服',
    'swimsuit|泳装',
    'school swimsuit|学校泳装',
    'sundress|背心裙',
    'sunglasses|太阳镜',
    'thigh high boots|过膝长靴',
    'tiara|冠状头饰',
    'tights|紧身服',
    'tracksuit|运动服',
    'vaginal sticker|小穴贴',
    'waiter|男服务员',
    'waitress|女服务员',
    'wet clothes|湿身',
    'witch|美式女巫',
//多人性行为
    '=Multiple Activities=|=多人性行为=',
    'bisexual|双性恋',
    'double anal|两屌一菊',
    'double blowjob|两屌一口',
    'double vaginal|两屌一屄',
    'ffm threesome|两女一男',
    'fft threesome|两女一扶她',
    'group|群P',
    'harem|后宫',
    'layer cake|换着插',
    'mmf threesome|两男一女',
    'mmt threesome|两男一扶她',
    'mtf threesome|一男一女一扶她',
    'multiple paizuri|多人乳交',
    'triple anal|三屌一菊花',
    'triple vaginal|三屌一屄',
    'ttf threesome|两扶她一女',
    'ttm threesome|两扶她一男',
    'twins|双胞胎',
//多个洞
    '=Multiple Holes=|=多个洞=',
    'all the way through|头尾贯通',
    'double penetration|双穴贯通',
    'triple penetration|三穴贯通',
//工具
    '=Tools=|=工具=',
    'blindfold|遮眼',
    'dakimakura|抱枕',
    'gag|堵嘴',
    'glory hole|墙上的孔',
    'machine|机械',
    'onahole|自慰器',
    'pillory|颈手枷',
    'pole dancing|钢管舞',
    'sex toys|性玩具',
    'speculum|内窥器',
    'strap-on|假阳具',
    'syringe|注射器',
    'table masturbation|桌子自慰',
    'tail plug|肛塞',
    'tube|插管',
    'whip|鞭打',
    'wooden horse|木马',
    'wormhole|虫洞',
//流体
    '=Fluids=|=流体=',
    'oil|抹油',
    'slime|史莱姆',
    'slime girl|史莱姆娘',
    'underwater|水下性爱',
//体液
    '=Bodily Fluids=|=体液=',
//精液
    '=Semen=|=精液=',
    'bukkake|颜射',
    'cum bath|泡精液浴',
    'cum swap|交换精液',
    'gokkun|饮精',
    'nakadashi|中出',
//排泄物
    '=Waste=|=排泄物=',
    'blood|血液',
    'coprophagia|食粪',
    'menstruation|经血',
    'piss drinking|喝尿',
    'public use|公共使用',
    'saliva|唾液',
    'scat|排粪',
    'sweating|出汗',
    'urination|放尿',
    'vomit|呕吐',
//强迫
    '=Force=|=强迫=',
    'chikan|痴汉',
    'rape|强奸',
    'sleeping|睡奸',
    'time stop|时间停止',
//虐恋
    '=Sadomasochism=|=虐恋=',
    'bdsm|施虐受虐',
    'bodysuit|紧身衣',
    'blindfold|遮眼',
    'collar|项圈',
    'femdom|女性主导',
    'forniphilia|人型家居',
    'human cattle|人型牲畜',
    'human pet|人型宠物',
    'josou seme|女装攻',
    'latex|乳胶衣',
    'orgasm denial|禁止高潮',
    'slave|奴隶',
    'tickling|瘙痒',
//束缚
    '=Bondage=|=束缚=',
    'bondage|捆绑',
    'gag|堵嘴',
    'shibari|绳艺',
    'stuck in wall|卡墙里',
    'vacbed|乳胶真空床',
//暴力
    '=Violence=|=暴力=',
    'abortion|堕胎',
    'blood|血液',
    'cannibalism|同类相食',
    'catfight|两女相争',
    'guro|猎奇',
    'electric shocks|电击',
    'ryona|虐女萌',
    'snuff|虐杀',
    'torture|酷刑',
    'trampling|踩踏',
    'whip|鞭打',
    'wrestling|摔跤',
//自慰
    '=Self Pleasure=|=自慰=',
    'autofellatio|自己口交',
    'autopaizuri|自己乳交',
    'masturbation|手淫',
    'phone sex|电话性爱',
    'selfcest|自己X自己',
    'solo action|自慰',
    'table masturbation|桌子自慰',
//残疾
    '=Disability=|=残疾=',
    'amputee|人棍',
    'blind|瞎子',
    'handicapped|残疾',
    'mute|哑巴',
//技术
    '=Technical=|=技术=',
    '3d|3D',
    'anaglyph|立体',
    'animated|动画',
    'anthology|选集',
    'artbook|画集',
    'figure|画像',
    'first person perspective|第一人称',
    'full color|全彩',
    'game sprite|像素画',
    'how to|教程',
    'multi-work series|卷作品',
    'novel|小说',
    'paperchild|纸孩',
    'redraw|重绘',
    'screenshots|截图',
    'stereoscopic|可用立体眼镜',
    'story arc|故事框架',
    'tankoubon|单行本',
    'themeless|没有主题',
    'webtoon|网页多媒体漫画',
    'x-ray|透视',
//Censorship
    'full censorship|色块遮挡',
    'uncensored|无修正',
    'mosaic censorship|马赛克遮挡',
//Cosplay
    '=Cosplay=|=Cosplay=',
    'hardcore|重口味',
    'non-nude|非裸体',
//删去
    '=Expunging=|=Expunging=',
    'already uploaded|已上传过',
    'compilation|禁止的编辑',
    'forbidden content|禁止的内容',
    'realporn|真正的色情',
    'replaced|已更换',
    'watermarked|有水印',
//半删
    '=Semi-Expunging=|=Semi-Expunging=',
    'incomplete|不完整',
    'missing cover|缺失封面',
    'out of order|次序颠倒',
    'sample|样本',
    'scanmark|扫描',
//语言
    '=Language=|=语言=',
    'albanian|阿尔巴尼亚语',
    'arabic|阿拉伯语',
    'caption|无对话',
    'catalan|加泰罗尼亚语',
    'chinese|中文',
    'czech|捷克语',
    'danish|丹麦语',
    'dutch|荷兰语',
    'english|英语',
    'esperanto|世界语',
    'estonian|爱沙尼亚语',
    'finnish|芬兰语',
    'french|法语',
    'german|德语',
    'greek|希腊语',
    'hebrew|希伯来语',
    'hindi|印地语',
    'hungarian|匈牙利语',
    'indonesian|西澳特罗尼西亚语',
    'italian|意大利语',
    'japanese|日语',
    'korean|韩语',
    'malay|马来语',
    'polish|波兰语',
    'poor grammar|语法错误',
    'portuguese|葡萄牙语',
    'rewrite|重改标签',
    'romanian|罗马尼亚语',
    'russian|俄罗斯语',
    'slovak|斯洛伐克语',
    'spanish|西班牙语',
    'speechless|无文字',
    'swedish|瑞典语',
    'tagalog|他加禄语',
    'text cleaned|无嵌字版',
    'thai|泰语',
    'translated|译制品',
    'turkish|乌克兰语',
    'ukrainian|乌克兰语',
    'vietnamese|越南语',
//语境
    '=Contextual=|=语境=',
    'blackmail|勒索',
    'coach|教练',
    'defloration|破处',
    'females only|只有女性',
    'males only|只有男性',
    'impregnation|内射',
    'oyakodon|母娘井',
    'prostitution|卖淫',
    'sole dickgirl|单扶她',
    'teacher|教师',
    'sole female|单女',
    'sole male|单男',
    'tomboy|假小子',
    'tomgirl|伪娘',
    'tutor|家教',
    'virginity|处女',
    'widow|寡妇',
    'widower|鳏夫',
    'yandere|病娇',
    'yaoi|男同',
    'yuri|女同',
//不贞
    '=Infidelity=|=不贞=',
    'cheating|NTL睡别人爱人',
    'netorare|NTR爱人被睡',
    'swinging|夫妇招人',
//乱伦
    '=Incest=|=乱伦=',
    'aunt|姨姑',
    'brother|兄弟',
    'cousin|表姐/妹',
    'daughter|女儿',
    'father|爸爸',
    'granddaughter|孙女',
    'grandfather|爷爷',
    'grandmother|奶奶',
    'incest|乱伦',
    'inseki|姻亲',
    'mother|妈妈',
    'niece|侄女',
    'sister|姐/妹',
    'uncle|叔舅',
//隐私
    '=Privacy=|=隐私=',
    'exhibitionism|暴露狂',
    'filming|摄像',
    'humiliation|凌辱',
    'voyeurism|偷窥',

//作品
    're zero kara hajimeru isekai seikatsu|Re:从零开始的异世界生活',
    'one piece|海贼王',
    'king of fighters|拳皇',
    'saenai heroine no sodatekata|路人女主的养成方法',
    'seishun buta yarou wa bunny girl senpai no yume o minai|青春猪头少年不会梦到兔女郎学姐',
    'k-on|轻音少女',
    'sailor moon|美少女战士',
    'gabriel dropout|珈百璃的堕落',

//人物
    'emilia|爱蜜莉雅',
    'rem|雷姆',
    'ram|拉姆',
    'elsa granhiert|猎肠者艾尔莎',
    'beatrice|碧翠丝',
    'subaru natsuki|斯巴鲁[男]',
    'julius euclius|尤里乌斯[男]',
    'felix argyle|菲利克斯',
    'roswaal l. mathers|罗兹瓦尔',
    'felt|菲鲁特',
    'priscilla barielle|普莉希拉',
    'otto suewen|奥拓',
    'nami|娜美',
    'roronoa zoro|罗罗诺亚·索隆[男]',
    'athena asamiya|麻宫雅典娜',
    'kensou sie|不知火舞',
    'momoko|桃子',
    'mai sakurajima|樱岛麻衣',
    'tomoya aki|安艺伦也[男]',
    'utaha kasumigaoka|霞之丘诗羽',
    'megumi kato|加藤惠',
    'eriri spencer sawamura|泽村·斯潘塞·英梨梨',
    'michiru hyodo|冰堂美智留',
    'azusa nakano|中野梓',
    'satoshi tainaka|田井中聪[男]',
    'zero two|02',
    'hiro|广[男]',
    'ichigo|莓',
    'miku|初音',
    'tsukino mito|月之美兔',
    'mirai akari|未来明',
    'rin shizuka|静凛',
    'kizuna ai|绊爱',
    'deep web underground|地底深網',
    'vtuber|虚拟主播',
    'nijisanji|nijisanji组织',
    'hololive|hololive组织',
    'sailor venus|水兵美奈子',
    'sailor moon|水兵月',
    'shingo tsukino|水兵月野',
    'shingo mercury|水野亚美',
    'satanichia kurumizawa mcdowell|萨塔尼亚',
    'gabriel tenma white|珈百璃',
    'vignette tsukinose april|艾普莉尔',
    'raphiel shiraha ainsworth|拉非',

//作者
    'heiqing langjun|黒青郎君',
    'ueda yuu|上田裕',
    'oouso|大嘘',
//
    'manga|漫画m',
    'comic|漫画c',
    'doujinshi|同人',
    'original|原创',
//
    'facial hair|胡子',
    'shaved head|光头',
    'clothed paizuri|穿衣乳交',
    'multi-work series|卷作品',
    'pixie cut|短发',
    'twintails|双马尾',
    'ssbbw|胖美女',
    'small penis|小阴茎',
    'hair buns|包子头',
    'shimaidon|姊妹丼',
    'kemonomimi|兽耳',
    'beauty mark|美人痣',
    'ponytail|马尾辫',
    'hidden sex|不被人发现',
    'horns|角',
    'bald|秃头',
]

var i;
if (document.domain.toString()=="nhentai.net"){
    for (i = 0; i < tags_title.length; i++) {findtags(tags_title[i])};
}else{
    for (i = 0; i < tags_title.length; i++) {findtags(tags_title[i],"a")};
}

//-------------------------------------------------------------------------------------------
    var st;
    var j;
function findtags(att,tname) {
    var alltags;
    tname=tname||"span";
    //alltags=document.getElementById('tags');
    alltags=document.getElementsByTagName("body").item(0);
    alltags=alltags.getElementsByTagName(tname);

    for (j = 0; j < alltags.length; j++) {
        st=att.split("|");
        if (alltags.item(j).innerHTML == st[0]){alltags.item(j).innerHTML = st[1]};
    }
}


function findtagsv(tagnames,atxt,btxt) {
    var txtall;
    var txtbody;
    var txtnode;
    txtall=document.getElementsByTagName("body");
    txtbody=txtall.item(0); //获得所有tagName是body的元素（当然每个页面只有一个）
    txtall=txtbody.getElementsByTagName(tagnames);// 获得body子元素种的所有span元素
    //txtnode=txtall.item(0); // 获得第二个span元素

    for (j = 0; j < txtall.length; j++) {
        txtnode=txtall.item(j).innerHTML
        //if (txtnode == atxt || txtnode.indexOf(atxt)>=0){txtall.item(j).innerHTML = txtnode.replace(atxt,btxt)};
    }
}


















