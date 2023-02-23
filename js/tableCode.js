if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.tableCode').bootstrapTable({//游戏类型
            data: tableType_cn
        });
    });
} else {
    $(function () {
        $('.tableCode').bootstrapTable({//游戏类型
            data: tableType
        });
    });
}


const tableCode = [
    { code: "virtual_blackjack", GameType: "Virtual Blackjack" },
    { code: "pokdeng", GameType: "Virtual PokDeng" },
    { code: "texas", GameType: "Texas Hold'em" }
]

const tableCode_cn = [
    { "code": "virtual_blackjack", "GameType": "电子21点" },
    { "code": "pokdeng", "GameType": "电子博丁" },
    { "code": "texas", "GameType": "德州扑克" }
]