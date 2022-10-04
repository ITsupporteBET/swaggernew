if (window.localStorage.getItem('lang') == "cn") {
$(function () {
    $('.tableSubType').bootstrapTable({//桌子类型
        data: tableSubType_cn
    });
});
} else {
    $(function () {
        $('.tableSubType').bootstrapTable({//桌子类型
            data: tableSubType
        });
    });
}


const tableSubType = [
    { "code": "0","GameType": "Common", "TableType": "General Table" },
    { "code": "1","GameType": "Baccarat", "TableType": "VIP Table" },
    { "code": "1","GameType": "Roulette", "TableType": "Fortune Roulette" },
    { "code": "1","GameType": "Dice game", "TableType": "Hi-Lo" }
]

const tableSubType_cn = [
    { "code": "0","GameType": "共同", "TableType": "一般桌" },
    { "code": "1","GameType": "百家乐", "TableType": "VIP桌" },
    { "code": "1","GameType": "轮盘", "TableType": "财富轮盘" },
    { "code": "1","GameType": "骰子游戏", "TableType": "Hi-Lo" }
]