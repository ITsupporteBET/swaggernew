if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.gameType').bootstrapTable({
            data: gameType_cn
        });
    });
} else {
    $(function () {
        $('.gameType').bootstrapTable({
            data: gameType
        });
    });
}

const gameType = [
    { "code": "0", "Description": "multi-Baccarat" },
    { "code": "1", "Description": "Baccarat" },
    { "code": "2", "Description": "Dragon Tiger" },
    { "code": "3", "Description": "Roulette" },
    { "code": "4", "Description": "Sic Bo (Dice)" },
    { "code": "5", "Description": "Slot" },
    // { "code": "6", "Description": "Trial slot" },
    // { "code": "7", "Description": "Blockchain baccarat" },
    { "code": "8", "Description": "BullBull" },
    { "code": "23", "Description": "Fortune Wheel" },
    { "code": "24", "Description": "Virtual Blackjack" },
    { "code": "25", "Description": "Live Blackjack" }
];

const gameType_cn = [
    { "code": "0", "Description": "多台" },
    { "code": "1", "Description": "百家乐" },
    { "code": "2", "Description": "龙虎" },
    { "code": "3", "Description": "轮盘" },
    { "code": "4", "Description": "骰宝" },
    { "code": "5", "Description": "老虎机" },
    // {"code": "6","Description": "试玩老虎机"},
    // { "code": "7", "Description": "区块链百家乐" },
    { "code": "8", "Description": "牛牛" },
    { "code": "23", "Description": "财富大转盘" },
    { "code": "24", "Description": "电子21点" },
    { "code": "25", "Description": "真人21点" }

];

if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.orientation').bootstrapTable({
            data: orientation_cn
        });
    });
} else {
    $(function () {
        $('.orientation').bootstrapTable({
            data: orientation
        });
    });
}


const orientation = [
    {
        "code": "1",
        "Description": "Horizontal screen",
        "Picture": "<img style=\"width: 100%;\" src=\"img/Horizontal.jpg\">"
    }
];

const orientation_cn = [
    {
        "code": "1",
        "Description": "横屏",
        "Picture": "<img style=\"width: auto;\" src=\"img/Horizontal.jpg\">"
    }
];
