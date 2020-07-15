if (window.localStorage.getItem('lang') == "cn") {

    $(function () {
        $('.niuniuresult').bootstrapTable({
            data: niuniuresult_cn
        });
    });
} else {
    $(function () {
        $('.niuniuresult').bootstrapTable({
            data: niuniuresult
        });
    });
}



const niuniuresult = [{
        code: "1",
        description: "5 flower bull"
    },
    {
        code: "20",
        description: "bullbull"
    },
    {
        code: "19",
        description: "bull 9"
    },
    {
        code: "18",
        description: "bull 8"
    },
    {
        code: "17",
        description: "bull 7"
    },
    {
        code: "16",
        description: "bull 6"
    },
    {
        code: "15",
        description: "bull 5"
    },
    {
        code: "14",
        description: "bull 4"
    },
    {
        code: "13",
        description: "bull 3"
    },
    {
        code: "12",
        description: "bull 2"
    },
    {
        code: "11",
        description: "bull 1"
    },
    {
        code: "3",
        description: "no bull"
    }
]

const niuniuresult_cn = [{
        "code": "1",
        "description": "五花牛(5張J,Q,K)"
    },
    {
        "code": "20",
        "description": "牛牛"
    },
    {
        "code": "19",
        "description": "牛9"
    },
    {
        "code": "18",
        "description": "牛8"
    },
    {
        "code": "17",
        "description": "牛7"
    },
    {
        "code": "16",
        "description": "牛6"
    },
    {
        "code": "15",
        "description": "牛5"
    },
    {
        "code": "14",
        "description": "牛4"
    },
    {
        "code": "13",
        "description": "牛3"
    },
    {
        "code": "12",
        "description": "牛2"
    },
    {
        "code": "11",
        "description": "牛1"
    },
    {
        "code": "3",
        "description": "无牛"
    }
]