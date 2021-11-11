if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.baccarat').bootstrapTable({
            data: baccarat_cn
        });
    });
} else {
    $(function () {
        $('.baccarat').bootstrapTable({
            data: baccarat
        });
    });
}

const baccarat = [{
    betCode: "60",
    description: "player"
},
{
    betCode: "66",
    description: "player pair"
},
{
    betCode: "68",
    description: "tie"
},
{
    betCode: "80",
    description: "banker"
},
{
    betCode: "88",
    description: "banker pair"
},
{
    betCode: "86",
    description: "bankerLucky6"
},
{
    betCode: "81",
    description: "bankerDragonBonus"
},
{
    betCode: "61",
    description: "playerDragonBonus"
},
{
    betCode: "70",
    description: "big"
},
{
    betCode: "71",
    description: "small"
},
{
    betCode: "82",
    description: "bankerOdd"
},
{
    betCode: "83",
    description: "bankerEven"
},
{
    betCode: "62",
    description: "playerOdd"
},
{
    betCode: "63",
    description: "playerEven"
}
]

const baccarat_cn = [{
    "betCode": "60",
    "description": "闲"
},
{
    "betCode": "66",
    "description": "闲对"
},
{
    "betCode": "68",
    "description": "和"
},
{
    "betCode": "80",
    "description": "庄"
},
{
    "betCode": "88",
    "description": "庄对"
},
{
    "betCode": "86",
    "description": "幸運六"
},
{
    "betCode": "81",
    "description": "庄龙宝"
},
{
    "betCode": "61",
    "description": "闲龙宝"
},
{
    "betCode": "70",
    "description": "大"
},
{
    "betCode": "71",
    "description": "小"
},
{
    "betCode": "82",
    "description": "庄单"
},
{
    "betCode": "83",
    "description": "庄双"
},
{
    "betCode": "62",
    "description": "闲单"
},
{
    "betCode": "63",
    "description": "闲双"
}
]

if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.dragonTiger').bootstrapTable({
            data: dragonTiger_cn
        });
    });
} else {
    $(function () {
        $('.dragonTiger').bootstrapTable({
            data: dragonTiger
        });
    });
}

const dragonTiger = [{
    betCode: "10",
    description: "dragon"
},
{
    betCode: "11",
    description: "tiger"
},
{
    betCode: "68",
    description: "tie"
},
{
    betCode: "12",
    description: "dragonOdd"
},
{
    betCode: "13",
    description: "dragonEven"
},
{
    betCode: "14",
    description: "tigerOdd"
},
{
    betCode: "15",
    description: "tigerEven"
},
{
    betCode: "16",
    description: "dragonBlack"
},
{
    betCode: "17",
    description: "dragonRed"
},
{
    betCode: "18",
    description: "tigerBlack"
},
{
    betCode: "19",
    description: "tigerRed"
}
]

const dragonTiger_cn = [{
    "betCode": "10",
    "description": "龙"
},
{
    "betCode": "11",
    "description": "虎"
},
{
    "betCode": "68",
    "description": "和"
},
{
    "betCode": "12",
    "description": "龙单"
},
{
    "betCode": "13",
    "description": "龙双"
},
{
    "betCode": "14",
    "description": "虎单"
},
{
    "betCode": "15",
    "description": "虎双"
},
{
    "betCode": "16",
    "description": "龙黑"
},
{
    "betCode": "17",
    "description": "龙红"
},
{
    "betCode": "18",
    "description": "虎黑"
},
{
    "betCode": "19",
    "description": "虎红"
},
{
    "betCode": "63",
    "description": "闲双"
}
]

if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.sicbo').bootstrapTable({
            data: sicbo_cn
        });
    });
} else {
    $(function () {
        $('.sicbo').bootstrapTable({
            data: sicbo
        });
    });
}

const sicbo = [{
    betCode: "100",
    description: "odd"
},
{
    betCode: "101",
    description: "even"
},
{
    betCode: "102",
    description: "big"
},
{
    betCode: "103",
    description: "small"
},
{
    betCode: "104",
    description: "pair 1"
},
{
    betCode: "105",
    description: "pair 2"
},
{
    betCode: "106",
    description: "pair 3"
},
{
    betCode: "107",
    description: "pair 4"
},
{
    betCode: "108",
    description: "pair 5"
},
{
    betCode: "109",
    description: "pair 6"
},
{
    betCode: "110",
    description: "triple 1"
},
{
    betCode: "111",
    description: "triple 2"
},
{
    betCode: "112",
    description: "triple 3"
},
{
    betCode: "113",
    description: "triple 4"
},
{
    betCode: "114",
    description: "triple 5"
},
{
    betCode: "115",
    description: "triple 6"
},
{
    betCode: "116",
    description: "triple All"
},
{
    betCode: "117",
    description: "4 point"
},
{
    betCode: "118",
    description: "5 point"
},
{
    betCode: "119",
    description: "6 point"
},
{
    betCode: "120",
    description: "7 point"
},
{
    betCode: "121",
    description: "8 point"
},
{
    betCode: "125",
    description: "9 point"
},
{
    betCode: "126",
    description: "10 point"
},
{
    betCode: "127",
    description: "11 point"
},
{
    betCode: "128",
    description: "12 point"
},
{
    betCode: "129",
    description: "13 point"
},
{
    betCode: "130",
    description: "14 point"
},
{
    betCode: "131",
    description: "15 point"
},
{
    betCode: "132",
    description: "16 point"
},
{
    betCode: "133",
    description: "17 point"
},
{
    betCode: "134",
    description: "single point 1"
},
{
    betCode: "135",
    description: "single point 2"
},
{
    betCode: "136",
    description: "single point 3"
},
{
    betCode: "137",
    description: "single point 4"
},
{
    betCode: "138",
    description: "single point 5"
},
{
    betCode: "139",
    description: "single point 6"
},
{
    betCode: "140",
    description: "combinations 1-2"
},
{
    betCode: "141",
    description: "combinations 1-3"
},
{
    betCode: "142",
    description: "combinations 1-4"
},
{
    betCode: "143",
    description: "combinations 1-5"
},
{
    betCode: "144",
    description: "combinations 1-6"
},
{
    betCode: "145",
    description: "combinations 2-3"
},
{
    betCode: "146",
    description: "combinations 2-4"
},
{
    betCode: "147",
    description: "combinations 2-5"
},
{
    betCode: "148",
    description: "combinations 2-6"
},
{
    betCode: "149",
    description: "combinations 3-4"
},
{
    betCode: "150",
    description: "combinations 3-5"
},
{
    betCode: "151",
    description: "combinations 3-6"
},
{
    betCode: "152",
    description: "combinations 4-5"
},
{
    betCode: "153",
    description: "combinations 4-6"
},
{
    betCode: "154",
    description: "combinations 5-6"
},
{
    betCode: "155",
    description: "two same number"
},
{
    betCode: "156",
    description: "three different numbers"
}
]

const sicbo_cn = [{
    "betCode": "100",
    "description": "单"
},
{
    "betCode": "101",
    "description": "双"
},
{
    "betCode": "102",
    "description": "大"
},
{
    "betCode": "103",
    "description": "小"
},
{
    "betCode": "104",
    "description": "对子1"
},
{
    "betCode": "105",
    "description": "对子2"
},
{
    "betCode": "106",
    "description": "对子3"
},
{
    "betCode": "107",
    "description": "对子4"
},
{
    "betCode": "108",
    "description": "对子5"
},
{
    "betCode": "109",
    "description": "对子6"
},
{
    "betCode": "110",
    "description": "围骰1"
},
{
    "betCode": "111",
    "description": "围骰2"
},
{
    "betCode": "112",
    "description": "围骰3"
},
{
    "betCode": "113",
    "description": "围骰4"
},
{
    "betCode": "114",
    "description": "围骰5"
},
{
    "betCode": "115",
    "description": "围骰6"
},
{
    "betCode": "116",
    "description": "全围"
},
{
    "betCode": "117",
    "description": "4点"
},
{
    "betCode": "118",
    "description": "5点"
},
{
    "betCode": "119",
    "description": "6点"
},
{
    "betCode": "120",
    "description": "7点"
},
{
    "betCode": "121",
    "description": "8点"
},
{
    "betCode": "125",
    "description": "9点"
},
{
    "betCode": "126",
    "description": "10点"
},
{
    "betCode": "127",
    "description": "11点"
},
{
    "betCode": "128",
    "description": "12点"
},
{
    "betCode": "129",
    "description": "13点"
},
{
    "betCode": "130",
    "description": "14点"
},
{
    "betCode": "131",
    "description": "15点"
},
{
    "betCode": "132",
    "description": "16点"
},
{
    "betCode": "133",
    "description": "17点"
},
{
    "betCode": "134",
    "description": "单点数1"
},
{
    "betCode": "135",
    "description": "单点数2"
},
{
    "betCode": "136",
    "description": "单点数3"
},
{
    "betCode": "137",
    "description": "单点数4"
},
{
    "betCode": "138",
    "description": "单点数5"
},
{
    "betCode": "139",
    "description": "单点数6"
},
{
    "betCode": "140",
    "description": "组合1-2"
},
{
    "betCode": "141",
    "description": "组合1-3"
},
{
    "betCode": "142",
    "description": "组合1-4"
},
{
    "betCode": "143",
    "description": "组合1-5"
},
{
    "betCode": "144",
    "description": "组合1-6"
},
{
    "betCode": "145",
    "description": "组合2-3"
},
{
    "betCode": "146",
    "description": "组合2-4"
},
{
    "betCode": "147",
    "description": "组合2-5"
},
{
    "betCode": "148",
    "description": "组合2-6"
},
{
    "betCode": "149",
    "description": "组合3-4"
},
{
    "betCode": "150",
    "description": "组合3-5"
},
{
    "betCode": "151",
    "description": "组合3-6"
},
{
    "betCode": "152",
    "description": "组合4-5"
},
{
    "betCode": "153",
    "description": "组合4-6"
},
{
    "betCode": "154",
    "description": "组合5-6"
},
{
    "betCode": "155",
    "description": "二同号"
},
{
    "betCode": "156",
    "description": "三不同"
}
]

if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.roulette').bootstrapTable({
            data: roulette_cn
        });
    });
} else {
    $(function () {
        $('.roulette').bootstrapTable({
            data: roulette
        });
    });
}

const roulette = [{
    betCode: "200",
    description: "straight up / Fortune roulette Straight Up"
},
{
    betCode: "201",
    description: "split bet"
},
{
    betCode: "202",
    description: "street bet"
},
{
    betCode: "203",
    description: "corner bet"
},
{
    betCode: "204",
    description: "Three Numbers 3 numbers bet"
},
{
    betCode: "205",
    description: "Four Numbers 4 numbers bet"
},
{
    betCode: "206",
    description: "line bet"
},
{
    betCode: "207",
    description: "column bet"
},
{
    betCode: "208",
    description: "dozen bet"
},
{
    betCode: "209",
    description: "red"
},
{
    betCode: "210",
    description: "black"
},
{
    betCode: "211",
    description: "odd"
},
{
    betCode: "212",
    description: "even"
},
{
    betCode: "213",
    description: "big"
},
{
    betCode: "214",
    description: "small"
}
]

const roulette_cn = [{
    "betCode": "200",
    "description": "直接注 / 财富轮盘直接注"
},
{
    "betCode": "201",
    "description": "分注"
},
{
    "betCode": "202",
    "description": "街注"
},
{
    "betCode": "203",
    "description": "角注"
},
{
    "betCode": "204",
    "description": "三数"
},
{
    "betCode": "205",
    "description": "四号码"
},
{
    "betCode": "206",
    "description": "线注"
},
{
    "betCode": "207",
    "description": "列注"
},
{
    "betCode": "208",
    "description": "打注"
},
{
    "betCode": "209",
    "description": "红"
},
{
    "betCode": "210",
    "description": "黑"
},
{
    "betCode": "211",
    "description": "单"
},
{
    "betCode": "212",
    "description": "双"
},
{
    "betCode": "213",
    "description": "大"
},
{
    "betCode": "214",
    "description": "小"
}
]

if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.bullbull').bootstrapTable({
            data: bullbull_cn
        });
    });
} else {
    $(function () {
        $('.bullbull').bootstrapTable({
            data: bullbull
        });
    });
}

const bullbull = [{
    betCode: "301",
    description: "player 1 equal"
},
{
    betCode: "302",
    description: "player 1 double"
},
{
    betCode: "303",
    description: "player 2 equal"
},
{
    betCode: "304",
    description: "player 2 double"
},
{
    betCode: "305",
    description: "player 3 equal"
},
{
    betCode: "306",
    description: "player 3 double"
},
{
    betCode: "300",
    description: "banker win"
}
]

const bullbull_cn = [{
    "betCode": "301",
    "description": "闲家1号 平倍"
},
{
    "betCode": "302",
    "description": "闲家1号 翻倍"
},
{
    "betCode": "303",
    "description": "闲家2号 平倍"
},
{
    "betCode": "304",
    "description": "闲家2号 翻倍"
},
{
    "betCode": "305",
    "description": "闲家3号 平倍"
},
{
    "betCode": "306",
    "description": "闲家3号 翻倍"
},
{
    "betCode": "300",
    "description": "庄赢(仅提供显示结果)"
}
]

if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.Fortune_Wheel').bootstrapTable({
            data: Fortune_Wheel_cn
        });
    });
} else {
    $(function () {
        $('.Fortune_Wheel').bootstrapTable({
            data: Fortune_Wheel
        });
    });
}

const Fortune_Wheel = [{
    "betCode": "400",
    "description": "number1"
},
{
    "betCode": "401",
    "description": "number2"
},
{
    "betCode": "402",
    "description": "number5"
},
{
    "betCode": "403",
    "description": "number10"
},
{
    "betCode": "404",
    "description": "number20"
},
{
    "betCode": "405",
    "description": "number40"
},
{
    "betCode": "406",
    "description": "2X & 8X"
},
{
    "betCode": "407",
    "description": "Odd"
},
{
    "betCode": "408",
    "description": "Even"
}
]

const Fortune_Wheel_cn = [{
    "betCode": "400",
    "description": "号码1"
},
{
    "betCode": "401",
    "description": "号码2"
},
{
    "betCode": "402",
    "description": "号码5"
},
{
    "betCode": "403",
    "description": "号码10"
},
{
    "betCode": "404",
    "description": "号码20"
},
{
    "betCode": "405",
    "description": "号码40"
},
{
    "betCode": "406",
    "description": "2X & 8X"
},
{
    "betCode": "407",
    "description": "单"
},
{
    "betCode": "408",
    "description": "双"
}
]

if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.ticket_TicketType').bootstrapTable({
            data: ticket_TicketType_cn
        });
    });
} else {
    $(function () {
        $('.ticket_TicketType').bootstrapTable({
            data: ticket_TicketType
        });
    });
}

const ticket_TicketType = [];

const ticket_TicketType_cn = [{
    "bid": "300101",
    "description": "eBET 3D"
},
{
    "bid": "300301",
    "description": "eBET 11选5"
},
{
    "bid": "300401",
    "description": "eBET 快3"
},
{
    "bid": "300201",
    "description": "eBET 时时彩"
},
{
    "bid": "300501",
    "description": "eBET PK10"
}
];

if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.ticket_GameType').bootstrapTable({
            data: ticket_GameType_cn
        });
    });
} else {
    $(function () {
        $('.ticket_GameType').bootstrapTable({
            data: ticket_GameType
        });
    });
}

const ticket_GameType = [];

const ticket_GameType_cn = [
    { "Key": "1", "description": "两面" },
    { "Key": "12", "description": "色波" },
    { "Key": "16", "description": "和值" },
    { "Key": "17", "description": "和值包三" },
    { "Key": "18", "description": "龙虎" },
    { "Key": "22", "description": "豹子" },
    { "Key": "25", "description": "对子" },
    { "Key": "28", "description": "顺子" },
    { "Key": "35", "description": "三星直选" },
    { "Key": "36", "description": "三星组三" },
    { "Key": "37", "description": "三星组六" },
    { "Key": "38", "description": "前二直选" },
    { "Key": "39", "description": "前二组选" },
    { "Key": "40", "description": "后二直选" },
    { "Key": "41", "description": "后二组选" },
    { "Key": "42", "description": "和值组三" },
    { "Key": "43", "description": "和值组六" },
    { "Key": "44", "description": "定位胆" },
    { "Key": "45", "description": "一码不定位" },
    { "Key": "46", "description": "二码不定位" },
    { "Key": "47", "description": "前二两面" },
    { "Key": "48", "description": "后二两面" },
    { "Key": "49", "description": "一码不定位" },
    { "Key": "50", "description": "二码不定位" },
    { "Key": "501", "description": "五星直选" },
    { "Key": "502", "description": "五星组选120" },
    { "Key": "503", "description": "五星组选60" },
    { "Key": "504", "description": "五星组选30" },
    { "Key": "505", "description": "五星组选20" },
    { "Key": "506", "description": "五星组选10" },
    { "Key": "507", "description": "五星组选5" },
    { "Key": "509", "description": "前四直选" },
    { "Key": "510", "description": "前四组选24" },
    { "Key": "511", "description": "前四组选12" },
    { "Key": "512", "description": "前四组选6" },
    { "Key": "513", "description": "前四组选4" },
    { "Key": "515", "description": "后四直选" },
    { "Key": "516", "description": "后四组选24" },
    { "Key": "517", "description": "后四组选12" },
    { "Key": "518", "description": "后四组选6" },
    { "Key": "519", "description": "后四组选4" },
    { "Key": "521", "description": "前三直选" },
    { "Key": "522", "description": "前三直选和值" },
    { "Key": "523", "description": "前三跨度" },
    { "Key": "524", "description": "前三组选6" },
    { "Key": "525", "description": "前三组选3" },
    { "Key": "526", "description": "前三组选和值" },
    { "Key": "527", "description": "前三包胆" },
    { "Key": "528", "description": "前三和值尾数" },
    { "Key": "529", "description": "前三特殊号码" },
    { "Key": "531", "description": "中三直选" },
    { "Key": "532", "description": "中三直选和值" },
    { "Key": "533", "description": "中三跨度" },
    { "Key": "534", "description": "中三组选6" },
    { "Key": "535", "description": "中三组选3" },
    { "Key": "536", "description": "中三组选和值" },
    { "Key": "537", "description": "中三包胆" },
    { "Key": "538", "description": "中三和值尾数" },
    { "Key": "539", "description": "中三特殊号码" },
    { "Key": "541", "description": "后三直选" },
    { "Key": "542", "description": "后三直选和值" },
    { "Key": "543", "description": "后三跨度" },
    { "Key": "544", "description": "后三组选6" },
    { "Key": "545", "description": "后三组选3" },
    { "Key": "546", "description": "后三组选和值" },
    { "Key": "547", "description": "后三包胆" },
    { "Key": "548", "description": "后三和值尾数" },
    { "Key": "549", "description": "后三特殊号码" },
    { "Key": "551", "description": "前二直选和值" },
    { "Key": "552", "description": "前二跨度" },
    { "Key": "553", "description": "前二组选和值" },
    { "Key": "554", "description": "前二包胆" },
    { "Key": "556", "description": "后二直选和值" },
    { "Key": "557", "description": "后二跨度" },
    { "Key": "558", "description": "后二组选和值" },
    { "Key": "559", "description": "后二包胆" },
    { "Key": "561", "description": "五星一码不定位" },
    { "Key": "562", "description": "五星二码不定位" },
    { "Key": "563", "description": "五星三码不定位" },
    { "Key": "564", "description": "前四一码不定位" },
    { "Key": "566", "description": "前四二码不定位" },
    { "Key": "567", "description": "后四一码不定位" },
    { "Key": "568", "description": "后四二码不定位" },
    { "Key": "569", "description": "前三一码不定位" },
    { "Key": "570", "description": "前三二码不定位" },
    { "Key": "571", "description": "后三一码不定位" },
    { "Key": "572", "description": "后三二码不定位" },
    { "Key": "574", "description": "前三大小单双" },
    { "Key": "575", "description": "后三大小单双" },
    { "Key": "576", "description": "前二大小单双" },
    { "Key": "577", "description": "后二大小单双" },
    { "Key": "578", "description": "一帆风顺" },
    { "Key": "579", "description": "好事成双" },
    { "Key": "580", "description": "三星报喜" },
    { "Key": "581", "description": "四季发财" },
    { "Key": "583", "description": "任二直选" },
    { "Key": "584", "description": "任二直选和值" },
    { "Key": "585", "description": "任二组选" },
    { "Key": "586", "description": "任二组选和值" },
    { "Key": "587", "description": "任三直选" },
    { "Key": "588", "description": "任三直选和值" },
    { "Key": "589", "description": "任三组选6" },
    { "Key": "590", "description": "任三组选3" },
    { "Key": "591", "description": "任三组选和值" },
    { "Key": "592", "description": "任四直选" },
    { "Key": "593", "description": "任四组选24" },
    { "Key": "594", "description": "任四组选12" },
    { "Key": "595", "description": "任四组选6" },
    { "Key": "596", "description": "任四组选4" },
    { "Key": "597", "description": "第一球" },
    { "Key": "598", "description": "第二球" },
    { "Key": "599", "description": "第三球" },
    { "Key": "600", "description": "第四球" },
    { "Key": "601", "description": "第五球" },
    { "Key": "602", "description": "全五中一" },
    { "Key": "603", "description": "龙虎和" },
    { "Key": "604", "description": "特殊号码" },
    { "Key": "605", "description": "牛牛" },
    { "Key": "606", "description": "梭哈" },
    { "Key": "643", "description": "和值两面" },
    { "Key": "746", "description": "前三组选" },
    { "Key": "747", "description": "前三胆拖" },
    { "Key": "748", "description": "中三组选" },
    { "Key": "749", "description": "中三胆拖" },
    { "Key": "750", "description": "后三组选" },
    { "Key": "751", "description": "后三胆拖" },
    { "Key": "752", "description": "前二胆拖" },
    { "Key": "753", "description": "后二胆拖" },
    { "Key": "754", "description": "前三不定位" },
    { "Key": "755", "description": "中三不定位" },
    { "Key": "756", "description": "后三不定位" },
    { "Key": "759", "description": "猜单双" },
    { "Key": "760", "description": "猜中位" },
    { "Key": "761", "description": "任选一中一" },
    { "Key": "762", "description": "任选二中二" },
    { "Key": "763", "description": "任选三中三" },
    { "Key": "764", "description": "任选四中四" },
    { "Key": "765", "description": "任选五中五" },
    { "Key": "766", "description": "任选六中五" },
    { "Key": "767", "description": "任选七中五" },
    { "Key": "768", "description": "任选八中五" },
    { "Key": "769", "description": "前三直选组合" },
    { "Key": "770", "description": "中三直选组合" },
    { "Key": "771", "description": "后三直选组合" },
    { "Key": "812", "description": "前一直选" },
    { "Key": "813", "description": "前四直选" },
    { "Key": "814", "description": "前五直选" },
    { "Key": "815", "description": "冠军" },
    { "Key": "816", "description": "亚军" },
    { "Key": "817", "description": "季军" },
    { "Key": "818", "description": "第四名" },
    { "Key": "819", "description": "第五名" },
    { "Key": "820", "description": "第六名" },
    { "Key": "821", "description": "第七名" },
    { "Key": "822", "description": "第八名" },
    { "Key": "823", "description": "第九名" },
    { "Key": "824", "description": "第十名" },
    { "Key": "825", "description": "冠亚和值" },
    { "Key": "826", "description": "冠亚和值两面" },
    { "Key": "827", "description": "冠亚组合" },
    { "Key": "945", "description": "三同号" },
    { "Key": "946", "description": "三不同号" },
    { "Key": "947", "description": "三不同号胆拖" },
    { "Key": "948", "description": "三连号" },
    { "Key": "949", "description": "二同号复选" },
    { "Key": "950", "description": "二同号单选" },
    { "Key": "951", "description": "二不同号复选" },
    { "Key": "952", "description": "二不同号胆拖" },
    { "Key": "953", "description": "三军" },
    { "Key": "954", "description": "围骰" },
    { "Key": "955", "description": "长牌" },
    { "Key": "956", "description": "短牌" },
    { "Key": "995", "description": "点数" }];

if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.ticket_PickType').bootstrapTable({
            data: ticket_PickType_cn
        });
    });
} else {
    $(function () {
        $('.ticket_PickType').bootstrapTable({
            data: ticket_PickType
        });
    });
}

const ticket_PickType = [];

const ticket_PickType_cn = [
    { "Key": "1", "description": "两面" },
    { "Key": "12", "description": "色波" },
    { "Key": "16", "description": "和值" },
    { "Key": "17", "description": "和值包三" },
    { "Key": "23", "description": "豹子通选" },
    { "Key": "24", "description": "豹子单选" },
    { "Key": "26", "description": "对子通选" },
    { "Key": "27", "description": "对子单选" },
    { "Key": "29", "description": "顺子通选" },
    { "Key": "30", "description": "顺子单选" },
    { "Key": "31", "description": "一球vs二球" },
    { "Key": "32", "description": "一球vs三球" },
    { "Key": "33", "description": "二球vs三球" },
    { "Key": "35", "description": "三星直选" },
    { "Key": "36", "description": "三星组三" },
    { "Key": "37", "description": "三星组六" },
    { "Key": "38", "description": "前二直选" },
    { "Key": "39", "description": "前二组选" },
    { "Key": "40", "description": "后二直选" },
    { "Key": "41", "description": "后二组选" },
    { "Key": "42", "description": "和值组三" },
    { "Key": "43", "description": "和值组六" },
    { "Key": "45", "description": "一码不定位" },
    { "Key": "46", "description": "二码不定位" },
    { "Key": "47", "description": "前二两面" },
    { "Key": "48", "description": "后二两面" },
    { "Key": "49", "description": "一码不定位" },
    { "Key": "50", "description": "二码不定位" },
    { "Key": "51", "description": "百位" },
    { "Key": "52", "description": "十位" },
    { "Key": "53", "description": "个位" },
    { "Key": "55", "description": "百位" },
    { "Key": "56", "description": "十位" },
    { "Key": "57", "description": "个位" },
    { "Key": "501", "description": "五星直选" },
    { "Key": "502", "description": "五星组选120" },
    { "Key": "503", "description": "五星组选60" },
    { "Key": "504", "description": "五星组选30" },
    { "Key": "505", "description": "五星组选20" },
    { "Key": "506", "description": "五星组选10" },
    { "Key": "507", "description": "五星组选5" },
    { "Key": "509", "description": "前四直选" },
    { "Key": "510", "description": "前四组选24" },
    { "Key": "511", "description": "前四组选12" },
    { "Key": "512", "description": "前四组选6" },
    { "Key": "513", "description": "前四组选4" },
    { "Key": "515", "description": "后四直选" },
    { "Key": "516", "description": "后四组选24" },
    { "Key": "517", "description": "后四组选12" },
    { "Key": "518", "description": "后四组选6" },
    { "Key": "519", "description": "后四组选4" },
    { "Key": "521", "description": "前三直选" },
    { "Key": "522", "description": "前三直选和值" },
    { "Key": "523", "description": "前三跨度" },
    { "Key": "524", "description": "前三组选6" },
    { "Key": "525", "description": "前三组选3" },
    { "Key": "526", "description": "前三组选和值" },
    { "Key": "527", "description": "前三包胆" },
    { "Key": "528", "description": "前三和值尾数" },
    { "Key": "529", "description": "前三特殊号码" },
    { "Key": "531", "description": "中三直选" },
    { "Key": "532", "description": "中三直选和值" },
    { "Key": "533", "description": "中三跨度" },
    { "Key": "534", "description": "中三组选6" },
    { "Key": "535", "description": "中三组选3" },
    { "Key": "536", "description": "中三组选和值" },
    { "Key": "537", "description": "中三包胆" },
    { "Key": "538", "description": "中三和值尾数" },
    { "Key": "539", "description": "中三特殊号码" },
    { "Key": "541", "description": "后三直选" },
    { "Key": "542", "description": "后三直选和值" },
    { "Key": "543", "description": "后三跨度" },
    { "Key": "544", "description": "后三组选6" },
    { "Key": "545", "description": "后三组选3" },
    { "Key": "546", "description": "后三组选和值" },
    { "Key": "547", "description": "后三包胆" },
    { "Key": "548", "description": "后三和值尾数" },
    { "Key": "549", "description": "后三特殊号码" },
    { "Key": "551", "description": "前二直选和值" },
    { "Key": "552", "description": "前二跨度" },
    { "Key": "553", "description": "前二组选和值" },
    { "Key": "554", "description": "前二包胆" },
    { "Key": "556", "description": "后二直选和值" },
    { "Key": "557", "description": "后二跨度" },
    { "Key": "558", "description": "后二组选和值" },
    { "Key": "559", "description": "后二包胆" },
    { "Key": "561", "description": "五星一码不定位" },
    { "Key": "562", "description": "五星二码不定位" },
    { "Key": "563", "description": "五星三码不定位" },
    { "Key": "564", "description": "前四一码不定位" },
    { "Key": "566", "description": "前四二码不定位" },
    { "Key": "567", "description": "后四一码不定位" },
    { "Key": "568", "description": "后四二码不定位" },
    { "Key": "569", "description": "前三一码不定位" },
    { "Key": "570", "description": "前三二码不定位" },
    { "Key": "571", "description": "后三一码不定位" },
    { "Key": "572", "description": "后三二码不定位" },
    { "Key": "574", "description": "前三大小单双" },
    { "Key": "575", "description": "后三大小单双" },
    { "Key": "576", "description": "前二大小单双" },
    { "Key": "577", "description": "后二大小单双" },
    { "Key": "578", "description": "一帆风顺" },
    { "Key": "579", "description": "好事成双" },
    { "Key": "580", "description": "三星报喜" },
    { "Key": "581", "description": "四季发财" },
    { "Key": "583", "description": "任二直选" },
    { "Key": "584", "description": "任二直选和值" },
    { "Key": "585", "description": "任二组选" },
    { "Key": "586", "description": "任二组选和值" },
    { "Key": "587", "description": "任三直选" },
    { "Key": "588", "description": "任三直选和值" },
    { "Key": "589", "description": "任三组选6" },
    { "Key": "590", "description": "任三组选3" },
    { "Key": "591", "description": "任三组选和值" },
    { "Key": "592", "description": "任四直选" },
    { "Key": "593", "description": "任四组选24" },
    { "Key": "594", "description": "任四组选12" },
    { "Key": "595", "description": "任四组选6" },
    { "Key": "596", "description": "任四组选4" },
    { "Key": "602", "description": "全五中一" },
    { "Key": "606", "description": "梭哈" },
    { "Key": "623", "description": "一球vs四球" },
    { "Key": "624", "description": "一球vs五球" },
    { "Key": "625", "description": "二球vs四球" },
    { "Key": "626", "description": "二球vs五球" },
    { "Key": "627", "description": "三球vs四球" },
    { "Key": "628", "description": "三球vs五球" },
    { "Key": "629", "description": "四球vs五球" },
    { "Key": "643", "description": "和值两面" },
    { "Key": "644", "description": "数字" },
    { "Key": "645", "description": "两面" },
    { "Key": "739", "description": "万位" },
    { "Key": "740", "description": "千位" },
    { "Key": "744", "description": "数字" },
    { "Key": "745", "description": "两面" },
    { "Key": "746", "description": "前三组选" },
    { "Key": "747", "description": "前三胆拖" },
    { "Key": "748", "description": "中三组选" },
    { "Key": "749", "description": "中三胆拖" },
    { "Key": "750", "description": "后三组选" },
    { "Key": "751", "description": "后三胆拖" },
    { "Key": "752", "description": "前二胆拖" },
    { "Key": "753", "description": "后二胆拖" },
    { "Key": "754", "description": "前三不定位" },
    { "Key": "755", "description": "中三不定位" },
    { "Key": "756", "description": "后三不定位" },
    { "Key": "759", "description": "猜单双" },
    { "Key": "760", "description": "猜中位" },
    { "Key": "761", "description": "任选一中一" },
    { "Key": "762", "description": "任选二中二" },
    { "Key": "763", "description": "任选三中三" },
    { "Key": "764", "description": "任选四中四" },
    { "Key": "765", "description": "任选五中五" },
    { "Key": "766", "description": "任选六中五" },
    { "Key": "767", "description": "任选七中五" },
    { "Key": "768", "description": "任选八中五" },
    { "Key": "769", "description": "前三直选组合" },
    { "Key": "770", "description": "中三直选组合" },
    { "Key": "771", "description": "后三直选组合" },
    { "Key": "812", "description": "前一直选" },
    { "Key": "813", "description": "前四直选" },
    { "Key": "814", "description": "前五直选" },
    { "Key": "815", "description": "冠军" },
    { "Key": "816", "description": "亚军" },
    { "Key": "817", "description": "季军" },
    { "Key": "818", "description": "第四名" },
    { "Key": "819", "description": "第五名" },
    { "Key": "820", "description": "第六名" },
    { "Key": "821", "description": "第七名" },
    { "Key": "822", "description": "第八名" },
    { "Key": "823", "description": "第九名" },
    { "Key": "824", "description": "第十名" },
    { "Key": "825", "description": "冠亚和值" },
    { "Key": "826", "description": "冠亚和值两面" },
    { "Key": "827", "description": "冠亚组合" },
    { "Key": "828", "description": "第一球VS第十球" },
    { "Key": "829", "description": "第二球VS第九球" },
    { "Key": "830", "description": "第三球VS第八球" },
    { "Key": "831", "description": "第四球VS第七球" },
    { "Key": "832", "description": "第五球VS第六球" },
    { "Key": "945", "description": "三同号" },
    { "Key": "946", "description": "三不同号" },
    { "Key": "947", "description": "三不同号胆拖" },
    { "Key": "948", "description": "三连号" },
    { "Key": "949", "description": "二同号复选" },
    { "Key": "950", "description": "二同号单选" },
    { "Key": "951", "description": "二不同号复选" },
    { "Key": "952", "description": "二不同号胆拖" },
    { "Key": "953", "description": "三军" },
    { "Key": "954", "description": "围骰" },
    { "Key": "955", "description": "长牌" },
    { "Key": "956", "description": "短牌" },
    { "Key": "959", "description": "三同号通选" },
    { "Key": "960", "description": "三连号通选" },
    { "Key": "961", "description": "全骰" }
];

if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.ticket_PickValue').bootstrapTable({
            data: ticket_PickValue_cn
        });
    });
} else {
    $(function () {
        $('.ticket_PickValue').bootstrapTable({
            data: ticket_PickValue
        });
    });
}

const ticket_PickValue = [];

const ticket_PickValue_cn = [
    { "Key": "2", "description": "大" },
    { "Key": "3", "description": "小" },
    { "Key": "4", "description": "极大" },
    { "Key": "5", "description": "极小" },
    { "Key": "6", "description": "大双" },
    { "Key": "7", "description": "小双" },
    { "Key": "8", "description": "大单" },
    { "Key": "9", "description": "小单" },
    { "Key": "10", "description": "单" },
    { "Key": "11", "description": "双" },
    { "Key": "13", "description": "红波" },
    { "Key": "14", "description": "蓝波" },
    { "Key": "15", "description": "绿波" },
    { "Key": "19", "description": "龙" },
    { "Key": "20", "description": "虎" },
    { "Key": "21", "description": "和" },
    { "Key": "22", "description": "豹子" },
    { "Key": "23", "description": "豹子通选" },
    { "Key": "25", "description": "对子" },
    { "Key": "26", "description": "对子通选" },
    { "Key": "28", "description": "顺子" },
    { "Key": "29", "description": "顺子通选" },
    { "Key": "100", "description": "" },
    { "Key": "101", "description": "" },
    { "Key": "102", "description": "" },
    { "Key": "103", "description": "" },
    { "Key": "104", "description": "" },
    { "Key": "105", "description": "" },
    { "Key": "106", "description": "" },
    { "Key": "107", "description": "" },
    { "Key": "108", "description": "" },
    { "Key": "109", "description": "" },
    { "Key": "110", "description": "" },
    { "Key": "111", "description": "" },
    { "Key": "112", "description": "" },
    { "Key": "113", "description": "" },
    { "Key": "114", "description": "" },
    { "Key": "115", "description": "" },
    { "Key": "116", "description": "" },
    { "Key": "117", "description": "" },
    { "Key": "118", "description": "" },
    { "Key": "119", "description": "" },
    { "Key": "120", "description": "" },
    { "Key": "121", "description": "" },
    { "Key": "122", "description": "" },
    { "Key": "123", "description": "" },
    { "Key": "124", "description": "" },
    { "Key": "125", "description": "" },
    { "Key": "126", "description": "" },
    { "Key": "127", "description": "" },
    { "Key": "200", "description": "" },
    { "Key": "201", "description": "" },
    { "Key": "202", "description": "" },
    { "Key": "203", "description": "" },
    { "Key": "204", "description": "" },
    { "Key": "205", "description": "" },
    { "Key": "206", "description": "" },
    { "Key": "207", "description": "" },
    { "Key": "208", "description": "" },
    { "Key": "209", "description": "" },
    { "Key": "300", "description": "" },
    { "Key": "301", "description": "" },
    { "Key": "302", "description": "" },
    { "Key": "303", "description": "" },
    { "Key": "304", "description": "" },
    { "Key": "305", "description": "" },
    { "Key": "306", "description": "" },
    { "Key": "307", "description": "" },
    { "Key": "308", "description": "" },
    { "Key": "309", "description": "" },
    { "Key": "400", "description": "" },
    { "Key": "401", "description": "" },
    { "Key": "402", "description": "" },
    { "Key": "403", "description": "" },
    { "Key": "404", "description": "" },
    { "Key": "405", "description": "" },
    { "Key": "406", "description": "" },
    { "Key": "407", "description": "" },
    { "Key": "408", "description": "" },
    { "Key": "409", "description": "" },
    { "Key": "418", "description": "尾大" },
    { "Key": "419", "description": "尾小" },
    { "Key": "607", "description": "牛一" },
    { "Key": "608", "description": "牛二" },
    { "Key": "609", "description": "牛三" },
    { "Key": "610", "description": "牛四" },
    { "Key": "612", "description": "牛五" },
    { "Key": "613", "description": "牛六" },
    { "Key": "614", "description": "牛七" },
    { "Key": "615", "description": "牛八" },
    { "Key": "616", "description": "牛九" },
    { "Key": "617", "description": "牛牛" },
    { "Key": "618", "description": "没牛" },
    { "Key": "619", "description": "牛大" },
    { "Key": "620", "description": "牛小" },
    { "Key": "621", "description": "牛单" },
    { "Key": "622", "description": "牛双" },
    { "Key": "630", "description": "杂六" },
    { "Key": "631", "description": "半顺" },
    { "Key": "632", "description": "五条" },
    { "Key": "633", "description": "四条" },
    { "Key": "634", "description": "葫芦" },
    { "Key": "635", "description": "三条" },
    { "Key": "636", "description": "两对" },
    { "Key": "637", "description": "一对" },
    { "Key": "638", "description": "散号" },
    { "Key": "640", "description": "质" },
    { "Key": "641", "description": "合" },
    { "Key": "805", "description": "五双零单" },
    { "Key": "806", "description": "四双一单" },
    { "Key": "807", "description": "三双两单" },
    { "Key": "808", "description": "三单两双" },
    { "Key": "809", "description": "四单一双" },
    { "Key": "810", "description": "五单零双" },
    { "Key": "900", "description": "" },
    { "Key": "901", "description": "" },
    { "Key": "902", "description": "" },
    { "Key": "903", "description": "" },
    { "Key": "904", "description": "" },
    { "Key": "905", "description": "" },
    { "Key": "906", "description": "" },
    { "Key": "907", "description": "" },
    { "Key": "908", "description": "" },
    { "Key": "909", "description": "" },
    { "Key": "910", "description": "" },
    { "Key": "911", "description": "" },
    { "Key": "912", "description": "" },
    { "Key": "913", "description": "" },
    { "Key": "914", "description": "" },
    { "Key": "915", "description": "" },
    { "Key": "916", "description": "" },
    { "Key": "917", "description": "" },
    { "Key": "918", "description": "" },
    { "Key": "919", "description": "" },
    { "Key": "920", "description": "" },
    { "Key": "921", "description": "" },
    { "Key": "922", "description": "" },
    { "Key": "923", "description": "" },
    { "Key": "924", "description": "" },
    { "Key": "925", "description": "" },
    { "Key": "926", "description": "" },
    { "Key": "927", "description": "" },
    { "Key": "928", "description": "" },
    { "Key": "929", "description": "" },
    { "Key": "930", "description": "" },
    { "Key": "931", "description": "" },
    { "Key": "932", "description": "" },
    { "Key": "933", "description": "" },
    { "Key": "934", "description": "" },
    { "Key": "935", "description": "" },
    { "Key": "936", "description": "" },
    { "Key": "937", "description": "" },
    { "Key": "938", "description": "" },
    { "Key": "939", "description": "" },
    { "Key": "940", "description": "" },
    { "Key": "941", "description": "" },
    { "Key": "942", "description": "" },
    { "Key": "943", "description": "" },
    { "Key": "944", "description": "" },
    { "Key": "959", "description": "三同号通选" },
    { "Key": "960", "description": "三连号通选" },
    { "Key": "961", "description": "全骰" },
    { "Key": "971", "description": "" },
    { "Key": "972", "description": "" },
    { "Key": "973", "description": "" },
    { "Key": "974", "description": "" },
    { "Key": "975", "description": "" },
    { "Key": "976", "description": "" }
];


//blackjack 電子21

if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.blackjack').bootstrapTable({
            data: blackjack_cn
        });
    });
} else {
    $(function () {
        $('.blackjack').bootstrapTable({
            data: blackjack
        });
    });
}

const blackjack = [
    { "code": "6011", "description": "player1 Hand1 Win" },
    { "code": "6012", "description": "player1 Hand2 Win" },
    { "code": "6021", "description": "player2 Hand1 Win" },
    { "code": "6022", "description": "player2 Hand2 Win" },
    { "code": "6031", "description": "player3 Hand1 Win" },
    { "code": "6032", "description": "player3 Hand2 Win" },
    { "code": "6041", "description": "player4 Hand1 Win" },
    { "code": "6042", "description": "player4 Hand2 Win" },
    { "code": "6051", "description": "player5 Hand1 Win" },
    { "code": "6052", "description": "player5 Hand2 Win" },
    { "code": "6061", "description": "player6 Hand1 Win" },
    { "code": "6062", "description": "player6 Hand2 Win" },
    { "code": "6071", "description": "player7 Hand1 Win" },
    { "code": "6072", "description": "player7 Hand2 Win" },
    { "code": "601168", "description": "player1 Hand1 Draw" },
    { "code": "601268", "description": "player1 Hand2 Draw" },
    { "code": "602168", "description": "player2 Hand1 Draw" },
    { "code": "602268", "description": "player2 Hand2 Draw" },
    { "code": "603168", "description": "player3 Hand1 Draw" },
    { "code": "603268", "description": "player3 Hand2 Draw" },
    { "code": "604168", "description": "player4 Hand1 Draw" },
    { "code": "604268", "description": "player4 Hand2 Draw" },
    { "code": "605168", "description": "player5 Hand1 Draw" },
    { "code": "605268", "description": "player5 Hand2 Draw" },
    { "code": "606168", "description": "player6 Hand1 Draw" },
    { "code": "606268", "description": "player6 Hand2 Draw" },
    { "code": "607168", "description": "player7 Hand1 Draw" },
    { "code": "607268", "description": "player7 Hand2 Draw" },
    { "code": "801", "description": "banker" },
    { "code": "8068", "description": "banker Draw" },
    { "code": "802", "description": "insurance" },
    { "code": "6001", "description": "(Reserved item)" },
    { "code": "6002", "description": "(Reserved item)" },
    { "code": "6003", "description": "(Reserved item)" }
]

const blackjack_cn = [
    { "code": "6011", "description": "座位 1 的 第 1 手牌 贏局" },
    { "code": "6012", "description": "座位 1 的 第 2 手牌 贏局" },
    { "code": "6021", "description": "座位 2 的 第 1 手牌 贏局" },
    { "code": "6022", "description": "座位 2 的 第 2 手牌 贏局" },
    { "code": "6031", "description": "座位 3 的 第 1 手牌 贏局" },
    { "code": "6032", "description": "座位 3 的 第 2 手牌 贏局" },
    { "code": "6041", "description": "座位 4 的 第 1 手牌 贏局" },
    { "code": "6042", "description": "座位 4 的 第 2 手牌 贏局" },
    { "code": "6051", "description": "座位 5 的 第 1 手牌 贏局" },
    { "code": "6052", "description": "座位 5 的 第 2 手牌 贏局" },
    { "code": "6061", "description": "座位 6 的 第 1 手牌 贏局" },
    { "code": "6062", "description": "座位 6 的 第 2 手牌 贏局" },
    { "code": "6071", "description": "座位 7 的 第 1 手牌 贏局" },
    { "code": "6072", "description": "座位 7 的 第 2 手牌 贏局" },
    { "code": "601168", "description": "座位 1 的 第 1 手牌 和局" },
    { "code": "601268", "description": "座位 1 的 第 2 手牌 和局" },
    { "code": "602168", "description": "座位 2 的 第 1 手牌 和局" },
    { "code": "602268", "description": "座位 2 的 第 2 手牌 和局" },
    { "code": "603168", "description": "座位 3 的 第 1 手牌 和局" },
    { "code": "603268", "description": "座位 3 的 第 2 手牌 和局" },
    { "code": "604168", "description": "座位 4 的 第 1 手牌 和局" },
    { "code": "604268", "description": "座位 4 的 第 2 手牌 和局" },
    { "code": "605168", "description": "座位 5 的 第 1 手牌 和局" },
    { "code": "605268", "description": "座位 5 的 第 2 手牌 和局" },
    { "code": "606168", "description": "座位 6 的 第 1 手牌 和局" },
    { "code": "606268", "description": "座位 6 的 第 2 手牌 和局" },
    { "code": "607168", "description": "座位 7 的 第 1 手牌 和局" },
    { "code": "607268", "description": "座位 7 的 第 2 手牌 和局" },
    { "code": "801", "description": "庄家 贏局(仅提供显示结果)" },
    { "code": "8068", "description": "庄家 和局(仅提供显示结果)" },
    { "code": "802", "description": "保險" },
    { "code": "6001", "description": "(保留项)" },
    { "code": "6002", "description": "(保留项)" },
    { "code": "6003", "description": "(保留项)" }
]

//Live Blackjack

if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.liveblackjack').bootstrapTable({
            data: liveblackjack_cn
        });
    });
} else {
    $(function () {
        $('.liveblackjack').bootstrapTable({
            data: liveblackjack
        });
    });
}

const liveblackjack = [
    { "code": "6011", "description": "player1 Hand1" },
    { "code": "6012", "description": "player1 Hand2" },
    { "code": "6021", "description": "player2 Hand1" },
    { "code": "6022", "description": "player2 Hand2" },
    { "code": "6031", "description": "player3 Hand1" },
    { "code": "6032", "description": "player3 Hand2" },
    { "code": "6041", "description": "player4 Hand1" },
    { "code": "6042", "description": "player4 Hand2" },
    { "code": "6051", "description": "player5 Hand1" },
    { "code": "6052", "description": "player5 Hand2" },
    { "code": "6061", "description": "player6 Hand1" },
    { "code": "6062", "description": "player6 Hand2" },
    { "code": "6071", "description": "player7 Hand1" },
    { "code": "6072", "description": "player7 Hand2" },
    { "code": "60112", "description": "player1 Hand1 Double" },
    { "code": "60122", "description": "player1 Hand2 Double" },
    { "code": "60212", "description": "player2 Hand1 Double" },
    { "code": "60222", "description": "player2 Hand2 Double" },
    { "code": "60312", "description": "player3 Hand1 Double" },
    { "code": "60322", "description": "player3 Hand2 Double" },
    { "code": "60412", "description": "player4 Hand1 Double" },
    { "code": "60422", "description": "player4 Hand2 Double" },
    { "code": "60512", "description": "player5 Hand1 Double" },
    { "code": "60522", "description": "player5 Hand2 Double" },
    { "code": "60612", "description": "player6 Hand1 Double" },
    { "code": "60622", "description": "player6 Hand2 Double" },
    { "code": "60712", "description": "player7 Hand1 Double" },
    { "code": "60722", "description": "player7 Hand2 Double" },
    { "code": "60100", "description": "player1 Insurance" },
    { "code": "60200", "description": "player2 Insurance" },
    { "code": "60300", "description": "player3 Insurance" },
    { "code": "60400", "description": "player4 Insurance" },
    { "code": "60500", "description": "player5 Insurance" },
    { "code": "60600", "description": "player6 Insurance" },
    { "code": "60700", "description": "player7 Insurance" },
    { "code": "60101", "description": "player1 Pairs" },
    { "code": "60201", "description": "player2 Pairs" },
    { "code": "60301", "description": "player3 Pairs" },
    { "code": "60401", "description": "player4 Pairs" },
    { "code": "60501", "description": "player5 Pairs" },
    { "code": "60601", "description": "player6 Pairs" },
    { "code": "60701", "description": "player7 Pairs" },
    { "code": "60102", "description": "player1 ThreeCard" },
    { "code": "60202", "description": "player2 ThreeCard" },
    { "code": "60302", "description": "player3 ThreeCard" },
    { "code": "60402", "description": "player4 ThreeCard" },
    { "code": "60502", "description": "player5 ThreeCard" },
    { "code": "60602", "description": "player6 ThreeCard" },
    { "code": "60702", "description": "player7 ThreeCard" }
]

const liveblackjack_cn = [
    { "code": "6011", "description": "座位 1 的第 1 手牌" },
    { "code": "6012", "description": "座位 1 的第 2 手牌" },
    { "code": "6021", "description": "座位 2 的第 1 手牌" },
    { "code": "6022", "description": "座位 2 的第 2 手牌" },
    { "code": "6031", "description": "座位 3 的第 1 手牌" },
    { "code": "6032", "description": "座位 3 的第 2 手牌" },
    { "code": "6041", "description": "座位 4 的第 1 手牌" },
    { "code": "6042", "description": "座位 4 的第 2 手牌" },
    { "code": "6051", "description": "座位 5 的第 1 手牌" },
    { "code": "6052", "description": "座位 5 的第 2 手牌" },
    { "code": "6061", "description": "座位 6 的第 1 手牌" },
    { "code": "6062", "description": "座位 6 的第 2 手牌" },
    { "code": "6071", "description": "座位 7 的第 1 手牌" },
    { "code": "6072", "description": "座位 7 的第 2 手牌" },
    { "code": "60112", "description": "座位 1 的第 1 手牌 加倍" },
    { "code": "60122", "description": "座位 1 的第 2 手牌 加倍" },
    { "code": "60212", "description": "座位 2 的第 1 手牌 加倍" },
    { "code": "60222", "description": "座位 2 的第 2 手牌 加倍" },
    { "code": "60312", "description": "座位 3 的第 1 手牌 加倍" },
    { "code": "60322", "description": "座位 3 的第 2 手牌 加倍" },
    { "code": "60412", "description": "座位 4 的第 1 手牌 加倍" },
    { "code": "60422", "description": "座位 4 的第 2 手牌 加倍" },
    { "code": "60512", "description": "座位 5 的第 1 手牌 加倍" },
    { "code": "60522", "description": "座位 5 的第 2 手牌 加倍" },
    { "code": "60612", "description": "座位 6 的第 1 手牌 加倍" },
    { "code": "60622", "description": "座位 6 的第 2 手牌 加倍" },
    { "code": "60712", "description": "座位 7 的第 1 手牌 加倍" },
    { "code": "60722", "description": "座位 7 的第 2 手牌 加倍" },
    { "code": "60100", "description": "座位 1 有买 保险" },
    { "code": "60200", "description": "座位 2 有买 保险" },
    { "code": "60300", "description": "座位 3 有买 保险" },
    { "code": "60400", "description": "座位 4 有买 保险" },
    { "code": "60500", "description": "座位 5 有买 保险" },
    { "code": "60600", "description": "座位 6 有买 保险" },
    { "code": "60700", "description": "座位 7 有买 保险" },
    { "code": "60101", "description": "座位 1 出现 对子" },
    { "code": "60201", "description": "座位 2 出现 对子" },
    { "code": "60301", "description": "座位 3 出现 对子" },
    { "code": "60401", "description": "座位 4 出现 对子" },
    { "code": "60501", "description": "座位 5 出现 对子" },
    { "code": "60601", "description": "座位 6 出现 对子" },
    { "code": "60701", "description": "座位 7 出现 对子" },
    { "code": "60102", "description": "座位 1 出现 21+3" },
    { "code": "60202", "description": "座位 2 出现 21+3" },
    { "code": "60302", "description": "座位 3 出现 21+3" },
    { "code": "60402", "description": "座位 4 出现 21+3" },
    { "code": "60502", "description": "座位 5 出现 21+3" },
    { "code": "60602", "description": "座位 6 出现 21+3" },
    { "code": "60702", "description": "座位 7 出现 21+3" }
]
