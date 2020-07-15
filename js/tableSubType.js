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
    GameType: "General Table"
}, {
    code: "1",
    GameType: "VIP Table"
}]

const tableSubType_cn = [
    { "code": "0", "GameType": "一般桌" },
    { "code": "1", "GameType": "VIP桌" }
]