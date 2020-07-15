$(function () {
    $('.platform').bootstrapTable({//游戏平台
        data: platform
    });
});


const platform = [{
    code: "-1",
    deviceType: "Other"
}, {
    code: "0",
    deviceType: "Android"
}, {
    code: "1",
    deviceType: "iOS"
}, {
    code: "2",
    deviceType: "Mobile H5"
}, {
    code: "3",
    deviceType: "PC H5"
}]