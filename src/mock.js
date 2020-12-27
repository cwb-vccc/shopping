import Mock from 'mockjs'

//模拟用户信息
Mock.mock('/user',/post|get/i,
    {
        'username':'cwb',
        'password':'092218202'
    }
)
//模拟主页数据
Mock.mock('/getItem',/post|get/i,function(option){
    if (option.body == 'build') {
        return Mock.mock({
            iteBan:'1-1',
            data:[{
                'imgid':101,
                'text':'万代售 假面骑士build腰带 创骑DX 天才瓶'
            },{
                'imgid':102,
                'text':'万代售 假面骑士build腰带 创骑DX 星云枪'
            },{
                'imgid':103,
                'text':'万代售 假面骑士build腰带 创骑DX BUILD变身腰带'
            },{
                'imgid':104,
                'text':'万代售 假面骑士build腰带 创骑DX 鳄霸满瓶'
            },{
                'imgid':105,
                'text':'万代售 假面骑士build腰带 创骑DX 黑洞扳机'
            }]  
        })
    }
    if(option.body == 'saber'){
        return Mock.mock({
            iteBan:'1-2',
            data:[{
                'imgid':201,
                'text':'万代 假面骑士Saber圣刃 龙纹骑士升级联动'
            },{
                'imgid':202,
                'text':'万代 假面骑士Saber圣刃 saber-驱动器豪华版'
            },{
                'imgid':203,
                'text':'万代 假面骑士Saber圣刃 邪王飞龙-王剑'
            },{
                'imgid':204,
                'text':'万代 假面骑士Saber圣刃 土豪剑激土-变身'
            },{
                'imgid':205,
                'text':'万代 假面骑士Saber圣刃 狮子大战记升级联动'
            }]
        })
    }
    if (option.body == 'zero.one') {
        return Mock.mock({
            iteBan:'1-3',
            data:[{
                'imgid':301,
                'text':'万代 假面骑士01变身腰带 飞电01驱动器 全新'
            },{
                'imgid':302,
                'text':'万代 假面骑士01变身腰带 飞电01驱动器豪华版 全新'
            },{
                'imgid':303,
                'text':'万代 假面骑士01变身腰带 01射击野狼腰带 全新'
            },{
                'imgid':304,
                'text':'万代 假面骑士01变身腰带 千骑哉亚驱动器 全新'
            },{
                'imgid':305,
                'text':'万代 假面骑士01变身腰带 燃烧猎鹰腰带 全新'
            }]  
        })
    }
    if (option.body == 'z.i.o') {
        return Mock.mock({
            iteBan:'1-4',
            data:[{
                'imgid':401,
                'text':'万代 假面骑士ZIO变身腰带 时王变身腰带+ZIO表盘'
            },{
                'imgid':402,
                'text':'万代 假面骑士ZIO变身腰带 时王崇皇手表 全新'
            },{
                'imgid':403,
                'text':'万代 假面骑士ZIO变身腰带 逢魔时王腰带 全新'
            },{
                'imgid':404,
                'text':'万代 假面骑士ZIO变身腰带 沃兹WOZ腰带 全新'
            },{
                'imgid':405,
                'text':'万代 假面骑士ZIO变身腰带 复活者表盘 全新'
            }]  
        })
    }
    if (option.body == '真骨雕') {
        return Mock.mock({
            iteBan:'1-5',
            data:[{
                'imgid':501,
                'text':'假面骑士真骨雕手办 现货 沃兹+支架 精美盒装'
            },{
                'imgid':502,
                'text':'假面骑士真骨雕手办 现货 冰冻暴雪红爹 精美盒装'
            },{
                'imgid':503,
                'text':'假面骑士真骨雕手办 现货 兔兔形态 精美盒装'
            },{
                'imgid':504,
                'text':'假面骑士真骨雕手办 现货 老司机+支架 精美盒装'
            },{
                'imgid':505,
                'text':'假面骑士真骨雕手办 现货 熔岩龙+支架 精美盒装'
            }]  
        })
    }
})
//模拟详情页数据
Mock.mock('/getItemInfo',/post|get/i,function(option){
    if (option.body == 101) {
        return Mock.mock({
            itemDesc:'万代售 假面骑士build腰带 创骑DX 天才瓶',
            itemDiscount :'满500减20！！！',
            itemPrice:560,
            itemFullPrice:580,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'120',
            fullSales:'160',
            fullPL:'6',
            itemImg:[{
                'imgid':'111',
            },{
                'imgid':'121',
            },{
                'imgid':'131',
            },{
                'imgid':'141',
            }]
        })
    }
    if (option.body == 102) {
        return Mock.mock({
            itemDesc:'万代售 假面骑士build腰带 创骑DX 星云枪',
            itemDiscount :'满500减20！！！',
            itemPrice:480,
            itemFullPrice:500,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'120',
            fullSales:'240',
            fullPL:'5',
            itemImg:[{
                'imgid':'112',
            },{
                'imgid':'122',
            },{
                'imgid':'132',
            },{
                'imgid':'142',
            }]
        })
    }
    if (option.body == 103) {
        return Mock.mock({
            itemDesc:'万代售 假面骑士build腰带 创骑DX BUILD变身腰带',
            itemDiscount :'满500减20！！！',
            itemPrice:700,
            itemFullPrice:720,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'46',
            fullSales:'210',
            fullPL:'52',
            itemImg:[{
                'imgid':'113',
            },{
                'imgid':'123',
            },{
                'imgid':'133',
            },{
                'imgid':'143',
            }]
        })
    }
    if (option.body == 104) {
        return Mock.mock({
            itemDesc:'万代售 假面骑士build腰带 创骑DX 鳄霸满瓶',
            itemDiscount :'满500减20！！！',
            itemPrice:280,
            itemFullPrice:280,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'50',
            fullSales:'60',
            fullPL:'7',
            itemImg:[{
                'imgid':'114',
            },{
                'imgid':'124',
            },{
                'imgid':'134',
            },{
                'imgid':'144',
            }]
        })
    }
    if (option.body == 105) {
        return Mock.mock({
            itemDesc:'万代售 假面骑士build腰带 创骑DX 黑洞扳机',
            itemDiscount :'满500减20！！！',
            itemPrice:630,
            itemFullPrice:650,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'60',
            fullSales:'510',
            fullPL:'30',
            itemImg:[{
                'imgid':'115',
            },{
                'imgid':'125',
            },{
                'imgid':'135',
            },{
                'imgid':'145',
            }]
        })
    }
    if (option.body == 201) {
        return Mock.mock({
            itemDesc:'万代 假面骑士Saber圣刃 龙纹骑士升级联动',
            itemDiscount :'满500减20！！！',
            itemPrice:560,
            itemFullPrice:580,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'120',
            fullSales:'160',
            fullPL:'6',
            itemImg:[{
                'imgid':'211',
            },{
                'imgid':'221',
            },{
                'imgid':'231',
            },{
                'imgid':'241',
            }]
        })
    }
    if (option.body == 202) {
        return Mock.mock({
            itemDesc:'万代 假面骑士Saber圣刃 saber-驱动器豪华版',
            itemDiscount :'满500减20！！！',
            itemPrice:480,
            itemFullPrice:500,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'120',
            fullSales:'240',
            fullPL:'5',
            itemImg:[{
                'imgid':'212',
            },{
                'imgid':'222',
            },{
                'imgid':'232',
            },{
                'imgid':'242',
            }]
        })
    }
    if (option.body == 203) {
        return Mock.mock({
            itemDesc:'万代 假面骑士Saber圣刃 邪王飞龙-王剑',
            itemDiscount :'满500减20！！！',
            itemPrice:700,
            itemFullPrice:720,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'46',
            fullSales:'210',
            fullPL:'52',
            itemImg:[{
                'imgid':'213',
            },{
                'imgid':'223',
            },{
                'imgid':'233',
            },{
                'imgid':'243',
            }]
        })
    }
    if (option.body == 204) {
        return Mock.mock({
            itemDesc:'万代 假面骑士Saber圣刃 土豪剑激土-变身',
            itemDiscount :'满500减20！！！',
            itemPrice:280,
            itemFullPrice:280,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'50',
            fullSales:'60',
            fullPL:'7',
            itemImg:[{
                'imgid':'214',
            },{
                'imgid':'224',
            },{
                'imgid':'234',
            },{
                'imgid':'244',
            }]
        })
    }
    if (option.body == 205) {
        return Mock.mock({
            itemDesc:'万代 假面骑士Saber圣刃 狮子大战记升级联动',
            itemDiscount :'满500减20！！！',
            itemPrice:630,
            itemFullPrice:650,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'60',
            fullSales:'510',
            fullPL:'30',
            itemImg:[{
                'imgid':'215',
            },{
                'imgid':'225',
            },{
                'imgid':'235',
            },{
                'imgid':'245',
            }]
        })
    }
    if (option.body == 301) {
        return Mock.mock({
            itemDesc:'万代 假面骑士01变身腰带 飞电01驱动器 全新',
            itemDiscount :'满500减20！！！',
            itemPrice:560,
            itemFullPrice:580,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'120',
            fullSales:'160',
            fullPL:'6',
            itemImg:[{
                'imgid':'311',
            },{
                'imgid':'321',
            },{
                'imgid':'331',
            },{
                'imgid':'341',
            }]
        })
    }
    if (option.body == 302) {
        return Mock.mock({
            itemDesc:'万代 假面骑士01变身腰带 飞电01驱动器豪华版 全新',
            itemDiscount :'满500减20！！！',
            itemPrice:480,
            itemFullPrice:500,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'120',
            fullSales:'240',
            fullPL:'5',
            itemImg:[{
                'imgid':'312',
            },{
                'imgid':'322',
            },{
                'imgid':'332',
            },{
                'imgid':'342',
            }]
        })
    }
    if (option.body == 303) {
        return Mock.mock({
            itemDesc:'万代 假面骑士01变身腰带 01射击野狼腰带 全新',
            itemDiscount :'满500减20！！！',
            itemPrice:700,
            itemFullPrice:720,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'46',
            fullSales:'210',
            fullPL:'52',
            itemImg:[{
                'imgid':'313',
            },{
                'imgid':'323',
            },{
                'imgid':'333',
            },{
                'imgid':'343',
            }]
        })
    }
    if (option.body == 304) {
        return Mock.mock({
            itemDesc:'万代 假面骑士01变身腰带 千骑哉亚驱动器 全新',
            itemDiscount :'满500减20！！！',
            itemPrice:280,
            itemFullPrice:280,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'50',
            fullSales:'60',
            fullPL:'7',
            itemImg:[{
                'imgid':'314',
            },{
                'imgid':'324',
            },{
                'imgid':'334',
            },{
                'imgid':'344',
            }]
        })
    }
    if (option.body == 305) {
        return Mock.mock({
            itemDesc:'万代 假面骑士01变身腰带 燃烧猎鹰腰带 全新',
            itemDiscount :'满500减20！！！',
            itemPrice:630,
            itemFullPrice:650,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'60',
            fullSales:'510',
            fullPL:'30',
            itemImg:[{
                'imgid':'315',
            },{
                'imgid':'325',
            },{
                'imgid':'335',
            },{
                'imgid':'345',
            }]
        })
    }
    if (option.body == 401) {
        return Mock.mock({
            itemDesc:'万代 假面骑士ZIO变身腰带 时王变身腰带+ZIO表盘',
            itemDiscount :'满500减20！！！',
            itemPrice:560,
            itemFullPrice:580,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'120',
            fullSales:'160',
            fullPL:'6',
            itemImg:[{
                'imgid':'411',
            },{
                'imgid':'421',
            },{
                'imgid':'431',
            },{
                'imgid':'441',
            }]
        })
    }
    if (option.body == 402) {
        return Mock.mock({
            itemDesc:'万代 假面骑士ZIO变身腰带 时王崇皇手表 全新',
            itemDiscount :'满500减20！！！',
            itemPrice:480,
            itemFullPrice:500,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'120',
            fullSales:'240',
            fullPL:'5',
            itemImg:[{
                'imgid':'412',
            },{
                'imgid':'422',
            },{
                'imgid':'432',
            },{
                'imgid':'442',
            }]
        })
    }
    if (option.body == 403) {
        return Mock.mock({
            itemDesc:'万代 假面骑士ZIO变身腰带 逢魔时王腰带 全新',
            itemDiscount :'满500减20！！！',
            itemPrice:700,
            itemFullPrice:720,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'46',
            fullSales:'210',
            fullPL:'52',
            itemImg:[{
                'imgid':'413',
            },{
                'imgid':'423',
            },{
                'imgid':'433',
            },{
                'imgid':'443',
            }]
        })
    }
    if (option.body == 404) {
        return Mock.mock({
            itemDesc:'万代 假面骑士ZIO变身腰带 沃兹WOZ腰带 全新',
            itemDiscount :'满500减20！！！',
            itemPrice:280,
            itemFullPrice:280,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'50',
            fullSales:'60',
            fullPL:'7',
            itemImg:[{
                'imgid':'414',
            },{
                'imgid':'424',
            },{
                'imgid':'434',
            },{
                'imgid':'444',
            }]
        })
    }
    if (option.body == 405) {
        return Mock.mock({
            itemDesc:'万代 假面骑士ZIO变身腰带 复活者表盘 全新',
            itemDiscount :'满500减20！！！',
            itemPrice:630,
            itemFullPrice:650,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'60',
            fullSales:'510',
            fullPL:'30',
            itemImg:[{
                'imgid':'415',
            },{
                'imgid':'425',
            },{
                'imgid':'435',
            },{
                'imgid':'445',
            }]
        })
    }
    if (option.body == 501) {
        return Mock.mock({
            itemDesc:'假面骑士真骨雕手办 现货 沃兹+支架 精美盒装',
            itemDiscount :'满500减20！！！',
            itemPrice:560,
            itemFullPrice:580,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'120',
            fullSales:'160',
            fullPL:'6',
            itemImg:[{
                'imgid':'511',
            },{
                'imgid':'521',
            },{
                'imgid':'531',
            },{
                'imgid':'541',
            }]
        })
    }
    if (option.body == 502) {
        return Mock.mock({
            itemDesc:'假面骑士真骨雕手办 现货 冰冻暴雪红爹 精美盒装',
            itemDiscount :'满500减20！！！',
            itemPrice:480,
            itemFullPrice:500,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'120',
            fullSales:'240',
            fullPL:'5',
            itemImg:[{
                'imgid':'512',
            },{
                'imgid':'522',
            },{
                'imgid':'532',
            },{
                'imgid':'542',
            }]
        })
    }
    if (option.body == 503) {
        return Mock.mock({
            itemDesc:'假面骑士真骨雕手办 现货 兔兔形态 精美盒装',
            itemDiscount :'满500减20！！！',
            itemPrice:700,
            itemFullPrice:720,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'46',
            fullSales:'210',
            fullPL:'52',
            itemImg:[{
                'imgid':'513',
            },{
                'imgid':'523',
            },{
                'imgid':'533',
            },{
                'imgid':'543',
            }]
        })
    }
    if (option.body == 504) {
        return Mock.mock({
            itemDesc:'假面骑士真骨雕手办 现货 老司机+支架 精美盒装',
            itemDiscount :'满500减20！！！',
            itemPrice:280,
            itemFullPrice:280,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'50',
            fullSales:'60',
            fullPL:'7',
            itemImg:[{
                'imgid':'514',
            },{
                'imgid':'524',
            },{
                'imgid':'534',
            },{
                'imgid':'544',
            }]
        })
    }
    if (option.body == 505) {
        return Mock.mock({
            itemDesc:'假面骑士真骨雕手办 现货 熔岩龙+支架 精美盒装',
            itemDiscount :'满500减20！！！',
            itemPrice:630,
            itemFullPrice:650,
            itemBan:[{name:'日版'},{name:'国行'}],
            itemType:[{name:'全新'},{name:'二手'}],
            sales:'60',
            fullSales:'510',
            fullPL:'30',
            itemImg:[{
                'imgid':'515',
            },{
                'imgid':'525',
            },{
                'imgid':'535',
            },{
                'imgid':'545',
            }]
        })
    }
    return Mock.mock({
        //商品简介
        itemDesc:'暂无数据',
        //商品优惠
        itemDiscount :'暂无数据',
        //商品价格
        itemPrice:'暂无数据',
        //商品原价
        itemFullPrice:'暂无数据',
        //商品颜色
        itemColor:[],
        //商品类别
        itemType:[],
        //月销量
        sales:'0',
        //累计销量
        fullSales:'0',
        //累计评价
        fullPL:'0',
        //商品图片
        itemImg:[]
    })
})