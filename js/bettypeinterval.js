if (window.localStorage.getItem('lang') == "cn") {

$(function () {
    $('.streetbet').bootstrapTable({
        data: streetbet_cn
    });
});
} else {
    $(function () {
        $('.streetbet').bootstrapTable({
            data: streetbet
        });
    });
}

const streetbet = [
    { betTypeInterval: "0", number: "1,2,3" },
    { betTypeInterval: "1", number: "4,5,6" },
    { betTypeInterval: "2", number: "7,8,9" },
    { betTypeInterval: "3", number: "10,11,12" },
    { betTypeInterval: "4", number: "13,14,15" },
    { betTypeInterval: "5", number: "16,17,18" },
    { betTypeInterval: "6", number: "19,20,21" },
    { betTypeInterval: "7", number: "22,23,24" },
    { betTypeInterval: "8", number: "25,26,27" },
    { betTypeInterval: "9", number: "28,29,30" },
    { betTypeInterval: "10", number: "31,32,33" },
    { betTypeInterval: "11", number: "34,35,36" },

]

const streetbet_cn = [
    { "betTypeInterval": "0", "number": "1,2,3" },
    { "betTypeInterval": "1", "number": "4,5,6" },
    { "betTypeInterval": "2", "number": "7,8,9" },
    { "betTypeInterval": "3", "number": "10,11,12" },
    { "betTypeInterval": "4", "number": "13,14,15" },
    { "betTypeInterval": "5", "number": "16,17,18" },
    { "betTypeInterval": "6", "number": "19,20,21" },
    { "betTypeInterval": "7", "number": "22,23,24" },
    { "betTypeInterval": "8", "number": "25,26,27" },
    { "betTypeInterval": "9", "number": "28,29,30" },
    { "betTypeInterval": "10", "number": "31,32,33" },
    { "betTypeInterval": "11", "number": "34,35,36" }
]
if (window.localStorage.getItem('lang') == "cn") {
$(function () {
    $('.cornerbet').bootstrapTable({
        data: cornerbet_cn
    });
});
} else {
    $(function () {
        $('.cornerbet').bootstrapTable({
            data: cornerbet
        });
    });
}

const cornerbet = [
    { betTypeInterval: "0,0", number: "1,2,4,5" },
    { betTypeInterval: "0,1", number: "2,3,5,6" },
    { betTypeInterval: "1,0", number: "4,5,7,8" },
    { betTypeInterval: "1,1", number: "5,6,8,9" },
    { betTypeInterval: "2,0", number: "7,8,10,11" },
    { betTypeInterval: "2,1", number: "8,9,11,12" },
    { betTypeInterval: "3,0", number: "10,11,13,14" },
    { betTypeInterval: "3,1", number: "11,12,14,15" },
    { betTypeInterval: "4,0", number: "13,14,16,17" },
    { betTypeInterval: "4,1", number: "14,15,17,18" },
    { betTypeInterval: "5,0", number: "16,17,19,20" },
    { betTypeInterval: "5,1", number: "17,18,20,21" },
    { betTypeInterval: "6,0", number: "19,20,22,23" },
    { betTypeInterval: "6,1", number: "20,21,23,24" },
    { betTypeInterval: "7,0", number: "22,23,25,26" },
    { betTypeInterval: "7,1", number: "23,24,26,27" },
    { betTypeInterval: "8,0", number: "25,26,28,29" },
    { betTypeInterval: "8,1", number: "26,27,29,30" },
    { betTypeInterval: "9,0", number: "28,29,31,32" },
    { betTypeInterval: "9,1", number: "29,30,32,33" },
    { betTypeInterval: "10,0", number: "31,32,34,35" },
    { betTypeInterval: "10,1", number: "32,33,35,36" }
]

const cornerbet_cn = [
    { "betTypeInterval": "0,0", "number": "1,2,4,5" },
    { "betTypeInterval": "0,1", "number": "2,3,5,6" },
    { "betTypeInterval": "1,0", "number": "4,5,7,8" },
    { "betTypeInterval": "1,1", "number": "5,6,8,9" },
    { "betTypeInterval": "2,0", "number": "7,8,10,11" },
    { "betTypeInterval": "2,1", "number": "8,9,11,12" },
    { "betTypeInterval": "3,0", "number": "10,11,13,14" },
    { "betTypeInterval": "3,1", "number": "11,12,14,15" },
    { "betTypeInterval": "4,0", "number": "13,14,16,17" },
    { "betTypeInterval": "4,1", "number": "14,15,17,18" },
    { "betTypeInterval": "5,0", "number": "16,17,19,20" },
    { "betTypeInterval": "5,1", "number": "17,18,20,21" },
    { "betTypeInterval": "6,0", "number": "19,20,22,23" },
    { "betTypeInterval": "6,1", "number": "20,21,23,24" },
    { "betTypeInterval": "7,0", "number": "22,23,25,26" },
    { "betTypeInterval": "7,1", "number": "23,24,26,27" },
    { "betTypeInterval": "8,0", "number": "25,26,28,29" },
    { "betTypeInterval": "8,1", "number": "26,27,29,30" },
    { "betTypeInterval": "9,0", "number": "28,29,31,32" },
    { "betTypeInterval": "9,1", "number": "29,30,32,33" },
    { "betTypeInterval": "10,0", "number": "31,32,34,35" },
    { "betTypeInterval": "10,1", "number": "32,33,35,36" }
]

if (window.localStorage.getItem('lang') == "cn") {

$(function () {
    $('.linebet').bootstrapTable({
        data: linebet_cn
    });
});
} else {
    $(function () {
        $('.linebet').bootstrapTable({
            data: linebet
        });
    });
}

const linebet = [
    { betTypeInterval: "0", number: "1,2,3,4,5,6" },
    { betTypeInterval: "1", number: "4,5,6,7,8,9'" },
    { betTypeInterval: "2", number: "7,8,9,10,11,12" },
    { betTypeInterval: "3", number: "10,11,12,13,14,15" },
    { betTypeInterval: "4", number: "13,14,15,16,17,18" },
    { betTypeInterval: "5", number: "16,17,18,19,20,21" },
    { betTypeInterval: "6", number: "19,20,21,22,23,24" },
    { betTypeInterval: "7", number: "22,23,24,25,26,27" },
    { betTypeInterval: "8", number: "25,26,27,28,29,30" },
    { betTypeInterval: "9", number: "28,29,30,31,32,33" },
    { betTypeInterval: "10", number: "31,32,33,34,35,36" },
    { betTypeInterval: "6,1", number: "20,21,23,24" },
    { betTypeInterval: "7,0", number: "22,23,25,26" },
    { betTypeInterval: "7,1", number: "23,24,26,27" },
    { betTypeInterval: "8,0", number: "25,26,28,29" },
    { betTypeInterval: "8,1", number: "26,27,29,30" },
    { betTypeInterval: "9,0", number: "28,29,31,32" },
    { betTypeInterval: "9,1", number: "29,30,32,33" },
    { betTypeInterval: "10,0", number: "31,32,34,35" },
    { betTypeInterval: "10,1", number: "32,33,35,36" }
]

const linebet_cn = [
    { "betTypeInterval": "0", "number": "1,2,3,4,5,6" },
    { "betTypeInterval": "1", "number": "4,5,6,7,8,9" },
    { "betTypeInterval": "2", "number": "7,8,9,10,11,12" },
    { "betTypeInterval": "3", "number": "10,11,12,13,14,15" },
    { "betTypeInterval": "4", "number": "13,14,15,16,17,18" },
    { "betTypeInterval": "5", "number": "16,17,18,19,20,21" },
    { "betTypeInterval": "6", "number": "19,20,21,22,23,24" },
    { "betTypeInterval": "7", "number": "22,23,24,25,26,27" },
    { "betTypeInterval": "8", "number": "25,26,27,28,29,30" },
    { "betTypeInterval": "9", "number": "28,29,30,31,32,33" },
    { "betTypeInterval": "10", "number": "31,32,33,34,35,36" }
]

if (window.localStorage.getItem('lang') == "cn") {

$(function () {
    $('.columnbet').bootstrapTable({
        data: columnbet_cn
    });
});
} else {
    $(function () {
        $('.columnbet').bootstrapTable({
            data: columnbet
        });
    });
}

const columnbet = [
    { betTypeInterval: "0", number: "1st Col(1,4,7,10,13,16,19,22,25,28,31,34)" },
    { betTypeInterval: "1", number: "2nd Col(2,5,8,11,14,17,20,23,26,29,32,25)" },
    { betTypeInterval: "2", number: "3rd Col(3,6,9,12,15,18,21,24,27,30,33,36)" }
]

const columnbet_cn = [
    { "betTypeInterval": "0", "number": "第一列(1,4,7,10,13,16,19,22,25,28,31,34)" },
    { "betTypeInterval": "1", "number": "第二列(2,5,8,11,14,17,20,23,26,29,32,25)" },
    { "betTypeInterval": "2", "number": "第三列(3,6,9,12,15,18,21,24,27,30,33,36)" }
]

if (window.localStorage.getItem('lang') == "cn") {

$(function () {
    $('.dozenbet').bootstrapTable({
        data: dozenbet_cn
    });
});
} else {
    $(function () {
        $('.dozenbet').bootstrapTable({
            data: dozenbet
        });
    });
}

const dozenbet = [
    { betTypeInterval: "0", number: "1st Dozen(1,2,3,4,5,6,7,8,9,10,11,12)" },
    { betTypeInterval: "1", number: "2nd Dozen(13,14,15,16,17,18,19,20,21,22,23,24)" },
    { betTypeInterval: "2", number: "3rd Dozen(25,26,27,28,29,30,31,32,33,34,35,36)" }
]

const dozenbet_cn = [
    { "betTypeInterval": "0", "number": "第一打(1,2,3,4,5,6,7,8,9,10,11,12)" },
    { "betTypeInterval": "1", "number": "第二打(13,14,15,16,17,18,19,20,21,22,23,24)" },
    { "betTypeInterval": "2", "number": "第三打(25,26,27,28,29,30,31,32,33,34,35,36)" }
]