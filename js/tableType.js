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
    { code: "4", GameType: "Dice game" },
    { code: "5", GameType: "Slot" },
    { code: "8", GameType: "BullBull" },
    { code: "23",GameType: "Fortune Wheel"}, 
    { code: "24",GameType: "Virtual BlackJack" },
    { code: "25",GameType: "Live BlackJack" },
    { code: "27",GameType: "Mini-game" },
    { code: "29",GameType: "Live PokDeng" },
    { code: "30",GameType: "Board Game"}
]

const tableType_cn = [
    { "code": "1", "GameType": "百家乐" },
    { "code": "2", "GameType": "龙虎" },
    { "code": "3", "GameType": "轮盘" },
    { "code": "4", "GameType": "骰子游戏" },
    { "code": "5", "GameType": "老虎机" },
    { "code": "8", "GameType": "牛牛" },
    { "code": "23", "GameType": "财富大转盘" },
    { "code": "24", "GameType": "电子21点" },
    { "code": "25", "GameType": "真人21点" },
    { "code": "27", "GameType": "迷你游戏" },
    { "code": "29", "GameType": "真人博丁" },
    { "code": "30", "GameType": "棋牌游戏" }
]