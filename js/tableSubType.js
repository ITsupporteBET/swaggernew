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


const tableSubType = [{
    code: "0",
    GameType: "Baccarat",
    TableType: "General Table"
}, {
    code: "1",
    GameType: "百家樂/n輪盤",
    TableType: "VIP Table"
}]

const tableSubType_cn = [
    { "code": "0","GameType": "共同", "TableType": "一般桌" },
    { "code": "1","GameType": "百家樂\n輪盤", "TableType": "VIP桌" }
]