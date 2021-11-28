function Dictionary(){
    this.add = add;
    this.datastore = new Object();
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.length = length;
    this.count = count;
    this.clear = clear;
    this.sort = sort;
    this.getAll = getAll;
}

function getAll(){
    var keys = Array();
    for (var key in this.datastore) {
        keys.push( key );
    }
    return keys;
}

function add(key, value){
    this.datastore[key] = value;
}

function find(key){
    return this.datastore[key];
}

function remove(key){
    delete this.datastore[key];
}

function count(){
    var n = 0;
    for (var key in this.datastore) {
        ++n;
    }
    return n;
}

function showAll(){
    var html="";
    for (var key in this.datastore) {
        html+="<tr><td>" + key + "</td><td>"+this.datastore[key]+"</td></tr>";
    }
    return html;
}

function sort(){
    var keys = Array();
    for (var key in this.datastore) {
        keys.push( key );
    }
    keys.sort();
    for (var i=0; i<keys.length; i++) {
        document.write(keys[i] + '->' + this.datastore[keys[i]]);
        document.write('<br>');
    }
}

function clear(){
    for (var key in this.datastore) {
        delete this.datastore[key];
    }
}
var quary_set = new Dictionary();
var primary_diagnosis = new Dictionary();
var differential_diagnosis = new Dictionary();
var diagnosis = new Dictionary();
var treatment_set = new Dictionary();
var times = new Dictionary();





/*问诊数据*/
quary_set.add("您好，我是您宝宝的主治医生，我叫xxx。",{answer:"医生您好。",score:0})
quary_set.add("宝宝叫什么名字？是男孩还是女孩啊？",{answer:"叫王xx,是个男孩。",score:0})
quary_set.add("宝宝多大了？",{answer:"三个月了。",score:0.5})
quary_set.add("是哪里人？",{answer:"本地人",score:0})
quary_set.add("宝宝怎么了，哪里不舒服？",{answer:" 我发现他每次哭闹的时候,靠近大腿根部都有个包。",score:1})
quary_set.add("左侧还是右侧？",{answer:" 右侧。",score:0.5})
quary_set.add("从什么时候开始的/发病多久了？",{answer:" 小的时候没太明显,最近一个月才发现。",score:0.5})
quary_set.add("第一次发现的时候有什么诱因吗？",{answer:" 就是孩子不小心磕到头了,当时哭的特别凶,然后就发现了。",score:0.5})
quary_set.add("包块大约有多大？",{answer:" 鹌鹑蛋那么大。",score:0.5})
quary_set.add("包块是一直存在吗？有没有消失的时候？",{answer:" 哭的时候明显,安静、躺下的时候就消失了。",score:0.5})
quary_set.add("包块的触感如何？质地怎么样？",{answer:" 挺软的,摸的时候还有咕噜声。",score:0.5})
quary_set.add("每次发病包块的大小有变化吗？有无变大或缩小？",{answer:" 大小没什么变化。",score:0.5})
quary_set.add("有没有发现阴囊不对称的情况？",{answer:" 没仔细观察过。",score:0.5})
quary_set.add("除了腹股沟包块，还有什么其他症状？",{answer:" 有时候哭的时间久了还会吐。",score:0.5})
quary_set.add("呕吐物是什么内容？",{answer:" 前一顿吃的奶。",score:0.5})
quary_set.add("是流出来的还是喷出来的？",{answer:" 正常吐出来的。",score:0.5})
quary_set.add("吐的量多不多？",{answer:" 不太多。",score:0})
quary_set.add("有没有发烧呢？",{answer:" 没有",score:0.5})
quary_set.add("有没有咳嗽咳痰？",{answer:" 没有",score:0.5})
quary_set.add("有没有腹胀、腹痛、停止排气排便？",{answer:" 没有",score:0.5})
quary_set.add("有没有拉肚子？",{answer:" 没有",score:0.5})
quary_set.add("大便颜色怎么样？有没有血？",{answer:" 颜色正常,没有血。",score:0.5})
quary_set.add("排尿怎么样？",{answer:" 正常。",score:0})
quary_set.add("尿频尿急尿痛？",{answer:" 没有。",score:0})
quary_set.add("在哪里看过医生吗？",{answer:" 没有。",score:0.5})
quary_set.add("下了什么诊断吗？",{answer:" 没有。",score:0})
quary_set.add("做过哪些检查？",{answer:" 没有。",score:0})
quary_set.add("检查结果如何？",{answer:" 不详。",score:0})
quary_set.add("给了什么治疗？",{answer:" 没有。",score:0})
quary_set.add("治疗效果如何？",{answer:" 不详",score:0})
quary_set.add("这段时间精神状态怎么样？",{answer:" 跟往常差不多,只是经常哭。",score:0.5})
quary_set.add("出生后怎么喂养呢？",{answer:" 喂母乳。",score:0.5})
quary_set.add("吃的好吗？吃的量多吗？",{answer:" 吃的挺好的,量也正常。",score:0})
quary_set.add("体重增长了吗？",{answer:" 长得不是很快。",score:0.5})


quary_set.add("宝宝有没有感冒或感染之类的？",{answer:" 没有。",score:0.5})
quary_set.add("以前得过什么病吗？",{answer:" 没有。",score:0.5})
quary_set.add("做过什么手术吗？",{answer:" 没有。",score:0.5})
quary_set.add("受过什么外伤吗？",{answer:" 没有。",score:0.5})
quary_set.add("手术什么时候做的，术后恢复怎么样？",{answer:" 不详。",score:0})
quary_set.add("输过血吗？",{answer:" 没有。",score:0})
quary_set.add("疫苗接种情况？",{answer:" 该打的都打了,没漏过,都按时打的,没有不良反应。",score:0})
quary_set.add("有无药物、食物过敏史？",{answer:" 没有。",score:0.5})
quary_set.add("感染过寄生虫吗？",{answer:" 没有。",score:0})
quary_set.add("是否得过传染病？例如肝炎、结核病等？",{answer:" 没有。",score:0})



quary_set.add("近期到外地去过吗？",{answer:" 没有。",score:0})
quary_set.add("家里或产妇密切接触的人中有没有饲养宠物（如鸽子、猫狗等）？",{answer:" 没有。",score:0})
quary_set.add("近期接触过特殊的东西吗？（比如：发霉的东西、花粉、油烟及刺激性气味、或者平时接触过的物质）",{answer:" 没有。",score:0})
quary_set.add("居住环境怎么样？有没有放射性或污染性物质？",{answer:" 生活环境挺好的,没有接触放射性和污染性物质。",score:0})



quary_set.add("家族中有没有什么遗传病呢？",{answer:" 没有。",score:0.5})
quary_set.add("父母的年龄是多少？",{answer:" 他爸爸今年29,我27。",score:0})
quary_set.add("父母的职业？",{answer:" 他爸爸是公务员,我是学校老师。",score:0})
quary_set.add("父母的健康情况怎样？",{answer:" 都挺健康的。",score:0})
quary_set.add("父母有没有梅毒、疱疹、衣原体等传染病史？",{answer:" 没有。",score:0})
quary_set.add("父母是否近亲结婚？",{answer:" 非近亲结婚。",score:0})
quary_set.add("母亲有过流产史吗？",{answer:" 没有",score:0.5})
quary_set.add("母亲孕期有无感染性疾病史？",{answer:" 没有。",score:0.5})
quary_set.add("母亲孕期用过什么药物吗？临产前用过什么药物？",{answer:" 没有。",score:0.5})
quary_set.add("母亲孕期定期做产检吗？在哪里做的？",{answer:"按时产检,就在这个医院。",score:0.5})
quary_set.add("母亲孕期有没有胎膜早破的情况？",{answer:"没有。",score:0.5})
quary_set.add("母亲孕期产检有无高血压、糖尿病？",{answer:" 没有。",score:0.5})
quary_set.add("母亲孕期饮酒、吸烟吗？",{answer:" 不吸烟,不饮酒。",score:0})
quary_set.add("宝宝在哪里出生的？",{answer:" 医院出生的。",score:0})
quary_set.add("宝宝出生时情况是怎样？有没有窒息什么的？",{answer:"出生很顺利,没有窒息。",score:0.5})
quary_set.add("宝宝出生后的Apgar评分是多少？",{answer:" 1分钟10分；5分钟10分。",score:0.5})
quary_set.add("宝宝出生时是第几胎？第几产？",{answer:" 第一胎,第一产。",score:0.5})
quary_set.add("宝宝出生时是否足月？",{answer:"是。",score:0.5})
quary_set.add("孩子出生时是顺产还是剖腹产？",{answer:" 剖腹产。",score:0.5})
quary_set.add("孩子出生时体重？",{answer:" 3.6kg",score:0.5})
quary_set.add("孩子脐带脱落情况？有没有渗血或化脓？",{answer:"生后10天左右,脐带自己掉了。没渗血也没化脓。",score:0})
quary_set.add("运动、智力方面和同岁孩子一样吗？",{answer:" 一样的,孩子挺聪明的,运动发育也很好。",score:0})
quary_set.add("母亲是什么血型，宝宝又是什么血型知道吗？",{answer:" 我是O型血,宝宝不知道。",score:0})




/*生命体征数据*/
quary_set.add("体温",{answer:"36.8℃",score:2})
quary_set.add("脉搏",{answer:"118次/分",score:1})
quary_set.add("呼吸",{answer:"40次/分",score:2})
quary_set.add("血压",{answer:"95/45mmHg",score:0})
quary_set.add("体重",{answer:"6.3kg",score:1})
quary_set.add("身高",{answer:"62cm",score:0})
quary_set.add("发育与体型",{answer:"正常",score:0})
quary_set.add("营养状态",{answer:"营养良好",score:1})
quary_set.add("意识状态",{answer:"意识清醒",score:0})
quary_set.add("语调与语态",{answer:"哭声响亮",score:0})
quary_set.add("面容与表情",{answer:"正常面容",score:0})
quary_set.add("体位",{answer:"自主体位",score:0})
quary_set.add("姿势及步态",{answer:"正常",score:0})
quary_set.add("皮肤",{answer:"皮肤正常，温暖有弹性，无水肿、皮疹、瘀点、紫癜等",score:1})

quary_set.add("全身",{answer:"未触及肿大淋巴结",score:0})

quary_set.add("头（头发区域）-视诊",{answer:"头颅大小正常，囟门无凹陷及隆起。",score:1})
quary_set.add("双眼-视诊",{answer:"眼睑无内翻、下垂，结膜无充血、水肿，巩膜无黄染，双侧瞳孔等大等圆",score:0})
quary_set.add("双耳-视诊",{answer:"耳廓无畸形，外耳道无分泌物",score:0})
quary_set.add("鼻-视诊",{answer:"鼻中隔无偏曲，无鼻翼扇动",score:0})
quary_set.add("口-视诊",{answer:"口唇无发绀，粘膜颜色正常，牙龈粉红，未见水肿。",score:0})
quary_set.add("头（头发区域）-触诊",{answer:"头皮光滑柔软；未见破损；大小和轮廓正常，无明显畸形。",score:0})
quary_set.add("双眼-视力表",{answer:"不配合",score:0})
quary_set.add("双眼-眼球运动",{answer:"灵活",score:0})
quary_set.add("双眼-集合反射",{answer:"不配合",score:0})
quary_set.add("双眼-检眼镜",{answer:"不配合",score:0})
quary_set.add("左眼-手电筒",{answer:"直接、间接对光反射灵敏",score:0})
quary_set.add("右眼-手电筒",{answer:"直接、间接对光反射灵敏",score:0})
quary_set.add("双耳-音叉",{answer:"听力正常",score:0})
quary_set.add("双耳-检耳镜",{answer:"鼓膜完整，无粘连",score:0})
quary_set.add("口-嗅诊",{answer:"无异味",score:0})
quary_set.add("口-压舌板",{answer:"咽反射正常，咽部无充血，扁桃体无肿大。",score:0})
quary_set.add("面部-做动作",{answer:"不配合",score:0})

quary_set.add("颈部-视诊",{answer:"颈部对称，活动自如，气管居中，甲状腺无肿大，未见颈静脉怒张，未见其他肿块。",score:0})
quary_set.add("颈动脉区-听诊",{answer:"未闻及血管杂音",score:0})
quary_set.add("甲状腺区-听诊",{answer:"未闻及血管杂音",score:0})
quary_set.add("甲状腺区-触诊",{answer:"未触及肿大及肿物",score:0})

quary_set.add("胸部-视诊",{answer:"呼吸40次/分，胸廓对称，无畸形，肋间隙无增宽，节律规整",score:0})
quary_set.add("乳房-视诊",{answer:"乳房对称，乳头无回缩及分泌物",score:0})
quary_set.add("心前区-视诊",{answer:"无异常隆起",score:0})
quary_set.add("胸部-触诊",{answer:"语颤正常、无胸膜摩擦感、无皮下捻发感，无压痛",score:0})
quary_set.add("乳房-触诊",{answer:"无压痛，未触及肿块",score:0})
quary_set.add("心前区-触诊",{answer:"心尖搏动正常，无震颤，无心包摩擦感",score:0})
quary_set.add("胸部-叩诊",{answer:"全肺叩诊呈清音，肺上、下界位置正常，肺下界移动度5cm",score:0})
quary_set.add("心前区-叩诊",{answer:"未查",score:0})
quary_set.add("左肺尖-听诊",{answer:"呼吸音清，未闻及干湿性啰音",score:0})
quary_set.add("右肺尖-听诊",{answer:"呼吸音清，未闻及干湿性啰音",score:0})
quary_set.add("左前胸-听诊",{answer:"呼吸音清，未闻及干湿性啰音",score:0})
quary_set.add("右前胸-听诊",{answer:"呼吸音清，未闻及干湿性啰音",score:0})
quary_set.add("左侧胸-听诊",{answer:"呼吸音清，未闻及干湿性啰音",score:0})
quary_set.add("右侧胸-听诊",{answer:"呼吸音清，未闻及干湿性啰音",score:0})
quary_set.add("左上背部-听诊",{answer:"呼吸音清，未闻及干湿性啰音",score:0})
quary_set.add("右上背部-听诊",{answer:"呼吸音清，未闻及干湿性啰音",score:0})
quary_set.add("左下背部-听诊",{answer:"呼吸音清，未闻及干湿性啰音",score:0})
quary_set.add("右下背部-听诊",{answer:"呼吸音清，未闻及干湿性啰音",score:0})
quary_set.add("二尖瓣听诊区-听诊",{answer:"心率118次/分，可闻及2/6级柔和、吹风样杂音",score:0})
quary_set.add("肺动脉瓣听诊区-听诊",{answer:"心率118次/分，律齐，心音正常，未闻及额外心音、病理性杂音",score:0})
quary_set.add("主动脉瓣听诊区-听诊",{answer:"心率118次/分，律齐，心音正常，未闻及额外心音、病理性杂音",score:0})
quary_set.add("主动脉瓣第二听诊区-听诊",{answer:"心率118次/分，律齐，心音正常，未闻及额外心音、病理性杂音",score:0})
quary_set.add("三尖瓣听诊区-听诊",{answer:"心率118次/分，律齐，心音正常，未闻及额外心音、病理性杂音",score:0})

quary_set.add("腹部-视诊",{answer:"无腹部膨隆，未见胃肠型及蠕动波，无静脉曲张，右腹股沟区可见一“鹌鹑卵”大小肿块",score:3})
quary_set.add("腹部-听诊",{answer:"肠鸣音6次/分，未闻及血管杂音",score:1})
quary_set.add("腹部-叩诊",{answer:"全腹叩诊呈鼓音，移动性浊音阴性，脾脏、肝脏无叩击痛。",score:1})
quary_set.add("肋脊角-叩诊",{answer:"无叩击痛",score:0})
quary_set.add("腹部-触诊",{answer:"腹软，右腹股沟区有压痛，无反跳痛及肌紧张。肝脾肋下未及，Murphy征阴性。右腹股沟区可触及一“鹌鹑卵”大小肿物，质软、光滑有弹性、边界不清，有丝绸摩擦感，手可协助还纳至腹腔。",score:3})

quary_set.add("男生殖器-视诊",{answer:"发育正常，右侧阴囊略大",score:2})
quary_set.add("肛门-视诊",{answer:"无明显异常",score:0})
quary_set.add("男生殖器-触诊",{answer:"阴囊触痛阳性，阴囊内可触及睾丸",score:2})
quary_set.add("肛门-指诊",{answer:"无明显异常",score:0})

quary_set.add("脊柱-视诊",{answer:"生理弯曲存在，脊柱活动度正常，无活动受限",score:0})
quary_set.add("双上肢-视诊",{answer:"肩关节、肘关节、腕关节形态正常，无畸形，活动正常，无活动受限",score:0})
quary_set.add("双下肢-视诊",{answer:"髋关节、膝关节、踝关节形态正常，无畸形，活动正常，无活动受限",score:0})
quary_set.add("脊柱-触诊",{answer:"不配合",score:0})
quary_set.add("双上肢-触诊",{answer:"无压痛",score:0})
quary_set.add("双下肢-触诊",{answer:"无压痛",score:0})
quary_set.add("脊柱-叩诊",{answer:"不配合",score:0})
quary_set.add("四肢-肌力",{answer:"不配合",score:0})
quary_set.add("四肢-肌张力",{answer:"不配合",score:0})

quary_set.add("双眼-棉签",{answer:"角膜反射存在",score:0})
quary_set.add("腹部-棉签",{answer:"腹壁反射上 左侧++ 右侧++；腹壁反射中 左侧++ 右侧++；腹壁反射下 左侧++ 右侧++",score:0})
quary_set.add("双足-棉签",{answer:"Babinski征阴性",score:0})
quary_set.add("双肘-叩诊锤",{answer:"左右均正常",score:0})
quary_set.add("双膝-叩诊锤",{answer:"左右均正常",score:0})
quary_set.add("",{answer:"",score:0})

quary_set.add("其他浅反射",{answer:"提睾反射、跖反射、肛门反射均存在",score:0})
quary_set.add("其他深反射",{answer:"左右肱三头肌反射、桡骨膜反射、跟腱反射均正常，踝阵挛、髌阵挛均阴性",score:0})
quary_set.add("脑膜刺激征",{answer:"阴性",score:0})
quary_set.add("共济检查",{answer:"不配合",score:0})
quary_set.add("浅感觉",{answer:"不配合",score:0})
quary_set.add("深感觉",{answer:"不配合",score:0})
quary_set.add("复合感觉",{answer:"不配合",score:0})







/*辅助检查数据*/
quary_set.add("颅脑CT平扫",{answer:"img/spermary_result.jpg",score:0})
quary_set.add("颅脑CT平扫",{answer:"img/CT/颅脑CT.jpg",score:0})
quary_set.add("颅脑增强扫描",{answer:"img/CT/颅脑增强.jpg",score:0})
quary_set.add("颈部CT平扫",{answer:"img/CT/颈部CT.jpg",score:0})
quary_set.add("胸部CT平扫",{answer:"img/CT/胸部CT.jpg",score:0})
quary_set.add("腹部CT平扫",{answer:"img/CT/腹部CT.jpg",score:0})
quary_set.add("盆腔CT平扫",{answer:"img/CT/盆腔CT.jpg",score:0})
quary_set.add("上肢CT扫描",{answer:"img/CT/上肢CT.jpg",score:0})
quary_set.add("下肢CT扫描",{answer:"img/CT/下肢CT.jpg",score:0})
quary_set.add("关节CT检查",{answer:"img/CT/关节CT.jpg",score:0})
quary_set.add("颈椎CT平扫",{answer:"img/CT/颈椎CT.jpg",score:0})
quary_set.add("胸椎CT扫描",{answer:"img/CT/胸椎CT.jpg",score:0})
quary_set.add("腰椎CT扫描",{answer:"img/CT/腰椎CT.jpg",score:0})
// MRI：
quary_set.add("颅内Willis动脉环MRI血管成像",{answer:"img/MRI/颅内Willis.jpg",score:0})
quary_set.add("颅脑MRI扫描",{answer:"img/MRI/颅脑MRI.jpg",score:0})
quary_set.add("颈部MRI扫描",{answer:"img/MRI/颈部MRI.jpg",score:0})
quary_set.add("颈部MRI血管成像",{answer:"img/MRI/颈部MRI血管成像（MRA）检查报告单.jpg",score:0})
quary_set.add("胸部MRI扫描",{answer:"img/MRI/胸部MRI.jpg",score:0})
quary_set.add("腹部MRI扫描",{answer:"img/MRI/腹部MRI扫描检查报告单.jpg",score:0})
quary_set.add("盆腔MRI扫描",{answer:"img/MRI/盆腔MRI扫描检查报告单.jpg",score:0})
quary_set.add("臂部MRI扫描",{answer:"img/MRI/臂部MRI扫描检查报告单.jpg",score:0})
quary_set.add("肩关节MRI检查",{answer:"img/MRI/肩关节MRI检查报告单.jpg",score:0})
quary_set.add("髋关节MRI检查",{answer:"img/MRI/髋关节MRI检查检查报告单.jpg",score:0})
quary_set.add("膝关节MRI检查",{answer:"img/MRI/膝关节MRI检查检查报告单.jpg",score:0})
quary_set.add("下肢MRI扫描",{answer:"img/MRI/下肢MRI扫描检查报告单.jpg",score:0})
quary_set.add("胸椎MRI扫描",{answer:"img/MRI/胸椎MRI扫描检查报告单.jpg",score:0})
quary_set.add("腰椎MRI扫描",{answer:"img/MRI/腰椎MRI扫描检查报告单.jpg",score:0})

// PET-CT:
quary_set.add("PET-CT",{answer:"img/PET-CT/PET-CT.jpg",score:0})

// X线：
quary_set.add("头颅平片",{answer:"img/X线/头颅平片检查报告单.jpg",score:0})
quary_set.add("颞下颌关节片",{answer:"img/X线/颞下颌关节片检查报告单.jpg",score:0})
quary_set.add("肩关节片",{answer:"img/X线/肩关节片检查报告单.jpg",score:0})
quary_set.add("胸部平片",{answer:"img/X线/胸部平片检查报告单.jpg",score:0})
quary_set.add("头颅平片",{answer:"img/X线/头颅平片检查报告单.jpg",score:0})
quary_set.add("肩关节片",{answer:"img/X线/肩关节片检查报告单.jpg",score:0})
quary_set.add("腹部平片",{answer:"img/X线/腹部平片检查报告单.jpg",score:0})
quary_set.add("上消化道摄影检查",{answer:"img/X线/上消化道摄影检查检查报告单.jpg",score:0})
quary_set.add("下消化道摄影检查",{answer:"img/X线/下消化道造影检查报告单.jpg",score:0})
quary_set.add("食管钡餐透视",{answer:"img/X线/食管钡餐透视检查报告单.jpg",score:0})
quary_set.add("钡灌肠",{answer:"img/X线/钡灌肠检查报告单.jpg",score:0})
quary_set.add("骨盆X线检查",{answer:"img/X线/骨盆X线检查检查报告单.jpg",score:0})
quary_set.add("颈椎片",{answer:"img/X线/颈椎片检查报告单.jpg",score:0})
quary_set.add("腰椎片",{answer:"img/X线/腰椎片检查报告单.jpg",score:0})
quary_set.add("骶椎片",{answer:"img/X线/骶椎片检查报告单.jpg",score:0})
quary_set.add("骨密度测定",{answer:"img/X线/骨密度测定检查报告单.jpg",score:0})
quary_set.add("股骨片",{answer:"img/X线/股骨片检查报告单.jpg",score:0})
quary_set.add("髋关节片",{answer:"img/X线/髋关节片检查报告单.jpg",score:0})
quary_set.add("上肢平片",{answer:"img/X线/上肢平片检查报告单.jpg",score:0})
quary_set.add("下肢平片",{answer:"img/X线/下肢平片检查报告单.jpg",score:0})
quary_set.add("心血管造影",{answer:"img/X线/心血管造影检查报告单.jpg",score:0})

// 常见病原菌：
quary_set.add("单纯疱疹病毒DNA",{answer:"img/常见病原菌/单纯疱疹病毒DNA.jpg",score:0})
quary_set.add("肥达反应",{answer:"img/常见病原菌/肥达反应.jpg",score:0})
quary_set.add("肺炎支原体补体结合试验",{answer:"img/常见病原菌/肺炎支原体补体结合试验.jpg",score:0})
quary_set.add("骨髓细菌培养",{answer:"img/常见病原菌/骨髓细菌培养.jpg",score:0})
quary_set.add("呼吸道合胞病毒",{answer:"img/常见病原菌/呼吸道合胞病毒抗体.jpg",score:0})
quary_set.add("结核分枝杆菌抗体",{answer:"img/常见病原菌/结核分枝杆菌抗体.jpg",score:0})
quary_set.add("流感病毒抗体",{answer:"img/常见病原菌/流感病毒抗体.jpg",score:0})
quary_set.add("外斐试验",{answer:"img/常见病原菌/外斐试验.jpg",score:0})
quary_set.add("腺病毒抗体",{answer:"img/常见病原菌/腺病毒抗体.jpg",score:0})
quary_set.add("血细菌培养",{answer:"img/常见病原菌/血细菌培养.jpg",score:0})
quary_set.add("厌氧菌测验",{answer:"img/常见病原菌/厌氧菌测验.jpg",score:0})
quary_set.add("咽拭子细菌培养",{answer:"img/常见病原菌/咽拭子细菌培养.jpg",score:0})
quary_set.add("幽门螺旋杆菌检测",{answer:"img/常见病原菌/幽门螺旋杆菌检测.jpg",score:0})
quary_set.add("支原体的血清学检测",{answer:"img/常见病原菌/支原体的血清学检测.jpg",score:0})

// 超声：
quary_set.add("消化系超声",{answer:"img/超声/消化系超声检查报告单.jpg",score:0})
quary_set.add("泌尿系超声",{answer:"img/超声/泌尿系超声检查报告单.jpg",score:0})
quary_set.add("胃肠道超声",{answer:"img/超声/胃肠道超声检查报告单.jpg",score:0})
quary_set.add("阑尾",{answer:"img/超声/阑尾超声检查报告单.jpg",score:0})
quary_set.add("心脏超声",{answer:"img/超声/心脏超声检查报告单.jpg",score:0})
quary_set.add("甲状腺彩超",{answer:"img/超声/甲状腺超声检查报告单.jpg",score:0})
quary_set.add("乳腺彩超",{answer:"img/超声/乳腺超声检查报告单.jpg",score:0})
quary_set.add("颈部淋巴结彩超",{answer:"img/超声/颈部淋巴结超声检查报告单.jpg",score:0})
quary_set.add("腹股沟区淋巴结彩超",{answer:"img/超声/腹股沟区超声检查报告单.jpg",score:5})
quary_set.add("腋窝淋巴结彩超",{answer:"img/超声/腋窝淋巴结超声检查报告单.jpg",score:0})
quary_set.add("锁骨上淋巴结彩超",{answer:"img/超声/锁骨上淋巴结超声检查报告单.jpg",score:0})
quary_set.add("上肢动脉彩色多普勒超声",{answer:"img/超声/上肢动脉彩色多普勒超声检查报告单.jpg",score:0})
quary_set.add("上肢静脉彩色多普勒超声",{answer:"img/超声/上肢静脉彩色多普勒检查报告单.jpg",score:0})
quary_set.add("下肢动脉彩色多普勒超声",{answer:"img/超声/下肢动脉彩色多普勒超声检查报告单.jpg",score:0})
quary_set.add("下肢静脉彩色多普勒超声",{answer:"img/超声/下肢静脉彩色多普勒超声检查报告单.jpg",score:0})
quary_set.add("睾丸超声",{answer:"img/超声/睾丸超声检查报告单.jpg",score:5})



// 电生理：
quary_set.add("肌电图检查",{answer:"img/电生理/肌电图检查报告单.jpg",score:0})
quary_set.add("脑电图检查",{answer:"img/电生理/脑电图检查报告单.jpg",score:0})
quary_set.add("脑电地形图扫描检查",{answer:"img/电生理/脑电地形图扫描检查报告单.jpg",score:0})
quary_set.add("心电图检查",{answer:"img/电生理/心电图检查报告单.jpg",score:0})

// 活检：
quary_set.add("直肠活检",{answer:"img/活检/直肠活检.jpg",score:0})
quary_set.add("支气管活检",{answer:"img/活检/支气管活检.jpg",score:0})
quary_set.add("胃活检",{answer:"img/活检/胃活检.jpg",score:0})
quary_set.add("肾活检",{answer:"img/活检/肾活检.jpg",score:0})
quary_set.add("食管活检",{answer:"img/活检/食管活检.jpg",score:0})
quary_set.add("淋巴结活检",{answer:"img/活检/淋巴结活检.jpg",score:0})
quary_set.add("结肠活检",{answer:"img/活检/结肠活检.jpg",score:0})
quary_set.add("甲状腺活检",{answer:"img/活检/甲状腺活检.jpg",score:0})
quary_set.add("骨髓活检",{answer:"img/活检/骨髓活检.jpg",score:0})
quary_set.add("肝活检",{answer:"img/活检/肝活检.jpg",score:0})
quary_set.add("肺活检",{answer:"img/活检/肺活检.jpg",score:0})
quary_set.add("骨髓涂片",{answer:"img/活检/骨髓涂片.jpg",score:0})
quary_set.add("膀胱活检",{answer:"img/活检/膀胱活检.jpg",score:0})



// 内镜：

quary_set.add("关节镜",{answer:"img/内镜/关节镜.jpg",score:0})
quary_set.add("肾盂镜",{answer:"img/内镜/肾盂镜.jpg",score:0})
quary_set.add("下消化道内窥镜检查",{answer:"img/内镜/下消化道内窥镜检查.jpg",score:0})
quary_set.add("支气管镜检查",{answer:"img/内镜/支气管镜检查.jpg",score:0})


// 实验室检查：
quary_set.add("血糖及代谢产物",{answer:"img/实验室检查/血糖及代谢产物.jpg",score:0})
quary_set.add("血型",{answer:"img/实验室检查/血型.jpg",score:0})
quary_set.add("血脂",{answer:"img/实验室检查/血脂.jpg",score:0})
quary_set.add("离子",{answer:"img/实验室检查/离子.png",score:0})
quary_set.add("凝血",{answer:"img/实验室检查/凝血.jpg",score:0})
quary_set.add("肝功能",{answer:"img/实验室检查/肝功.jpg",score:0})
quary_set.add("乙型肝炎",{answer:"img/实验室检查/乙型肝炎.jpg",score:0})
quary_set.add("肾功能",{answer:"img/实验室检查/肾功.jpg",score:0})
quary_set.add("尿常规",{answer:"img/实验室检查/尿常规.png",score:0})
quary_set.add("尿沉渣定量尿液镜检",{answer:"img/实验室检查/尿沉渣定量.jpg",score:0})
quary_set.add("尿液其他检查",{answer:"img/实验室检查/尿液其他检查.jpg",score:0})
quary_set.add("便常规",{answer:"img/实验室检查/便常规.jpg",score:0})
quary_set.add("红细胞沉降率",{answer:"img/实验室检查/红细胞沉降率.jpg",score:0})
quary_set.add("血流变",{answer:"img/实验室检查/血流变.jpg",score:0})
quary_set.add("C反应蛋白",{answer:"img/实验室检查/C反应蛋白.jpg",score:0})
quary_set.add("血清淀粉酶",{answer:"img/实验室检查/血清淀粉酶.jpg",score:0})
quary_set.add("血清补体检测",{answer:"img/实验室检查/血清补体检测.jpg",score:0})
quary_set.add("血清免疫球蛋白",{answer:"img/实验室检查/血清免疫球蛋白.jpg",score:0})
quary_set.add("自身抗体检测",{answer:"img/实验室检查/自身抗体检测.jpg",score:0})
quary_set.add("利钠肽",{answer:"img/实验室检查/利钠肽.jpg",score:0})
quary_set.add("心肌酶和心肌蛋白",{answer:"img/实验室检查/心肌酶和心肌蛋白.jpg",score:0})
quary_set.add("心脏平板运动试验",{answer:"img/实验室检查/心脏平板运动试验.jpg",score:0})
quary_set.add("血气分析",{answer:"img/实验室检查/血气分析.jpg",score:0})
quary_set.add("肺功能",{answer:"img/实验室检查/肺功能.jpg",score:0})
quary_set.add("痰液检查",{answer:"img/实验室检查/痰液检查.jpg",score:0})
quary_set.add("性传播疾病病原体",{answer:"img/实验室检查/性传播疾病病原体.jpg",score:0})
quary_set.add("阴道分泌物检测",{answer:"img/实验室检查/阴道分泌物检测.jpg",score:0})
quary_set.add("肿瘤标志物",{answer:"img/实验室检查/肿瘤标志物.jpg",score:0})
quary_set.add("脑脊液",{answer:"img/实验室检查/脑脊液.jpg",score:0})
quary_set.add("甲状腺功能",{answer:"img/实验室检查/甲状腺功能.jpg",score:0})
quary_set.add("甲状腺激素其他检查",{answer:"img/实验室检查/甲状腺激素其他检查.jpg",score:0})
quary_set.add("细胞免疫检测",{answer:"img/实验室检查/细胞免疫检测.jpg",score:0})
quary_set.add("狼疮",{answer:"img/实验室检查/狼疮.jpg",score:0})
quary_set.add("微量元素",{answer:"img/实验室检查/微量元素.jpg",score:0})
quary_set.add("血清铁及代谢产物",{answer:"img/实验室检查/血清铁及其代谢产物.jpg",score:0})


// 腹腔镜检查：
quary_set.add("腹腔镜探查",{answer:"img/腹腔镜探查/腹腔镜探查.jpg",score:5})







/*诊断结果*/
primary_diagnosis.add("右侧腹股沟肿物",3);
primary_diagnosis.add("右腹股沟肿物",3);
primary_diagnosis.add("右侧腹股沟斜疝",3);
primary_diagnosis.add("右腹股沟斜疝",3);
primary_diagnosis.add("右侧腹股沟疝",3);
primary_diagnosis.add("腹股沟肿物",2);
primary_diagnosis.add("腹股沟斜疝",2);
primary_diagnosis.add("腹股沟疝",2);



differential_diagnosis.add("鞘膜积液",2.5);
differential_diagnosis.add("睾丸下降不全",2.5);
differential_diagnosis.add("睾丸肿瘤",2.5);
differential_diagnosis.add("睾丸扭转",2.5);


diagnosis.add("右侧腹股沟斜疝",10);
diagnosis.add("右腹股沟斜疝",10);





/*治疗措施*/
treatment_set.add("儿科护理常规",3);
treatment_set.add("二级护理",3);
treatment_set.add("普通饮食",3);
treatment_set.add("自由体位",3);
treatment_set.add("腹腔镜下疝囊高位结扎术",5);
treatment_set.add("腹腔镜下疝囊高位结扎术",5);
treatment_set.add("预防性抗生素治疗",3);



// 次数限制
times.add("treatment_general",1);
times.add("treatment_level",1);
times.add("treatment_food",1);
times.add("treatment_action",1);
times.add("treatment_gross",10);
times.add("primary_diagnosis",1);
times.add("quary_no",45);
times.add("physical_no",18);
times.add("auxiliary_no",8);
times.add("DDX_no",1);

/*times.add("treatment_general",999);
times.add("treatment_level",999);
times.add("treatment_food",999);
times.add("treatment_action",999);
times.add("treatment_gross",999);
times.add("primary_diagnosis",999);
times.add("quary_no",999);
times.add("physical_no",999);
times.add("auxiliary_no",999);*/
