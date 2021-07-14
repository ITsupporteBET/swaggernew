if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.tableType').bootstrapTable({//游戏类型
            data: tableType_cn
        });
    });
} else {
    $(function () {
        $('.tableType').bootstrapTable({//游戏类型
            data: tableType
        });
    });
}


const tableType = [
    { code: "1", GameType: "Baccarat" },
    { code: "2", GameType: "Dragon Tiger" },
    { code: "3", GameType: "Roulette" },
    { code: "4", GameType: "Sic Bo (Dice)" },
    { code: "5", GameType: "Slot" },
    // {code: "6",GameType: "Trial slot"}, 
    // { code: "7", GameType: "Blockchain baccarat" },
    { code: "8", GameType: "BullBull" },
    // { code: "22", GameType: "Lottery" },
    // {code: "23",GameType: "Fortune Wheel"}, 
    { code: "24", GameType: "Black Jack" },
    { code: "25", GameType: "Live Black Jack" }
]

const tableType_cn = [
    { "code": "1", "GameType": "百家乐" },
    { "code": "2", "GameType": "龙虎" },
    { "code": "3", "GameType": "轮盘" },
    { "code": "4", "GameType": "骰宝" },
    { "code": "5", "GameType": "老虎机" },
    // { "code": "6", "GameType": "试玩老虎机" },
    // { "code": "7", "GameType": "区块链百家乐" },
    { "code": "8", "GameType": "牛牛" },
    // { "code": "22", "GameType": "彩票" },
    // { "code": "23", "GameType": "财富大转盘" },
    { "code": "24", "GameType": "21点(电子)" },
    { "code": "25", "GameType": "真人21点" }
]