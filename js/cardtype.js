if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.cardtype').bootstrapTable({
            data: cardtype_cn
        });
    });
} else {
    $(function () {
        $('.cardtype').bootstrapTable({
            data: cardtype
        });
    });
}



const cardtype = [{
        club: "2c = 0",
        diamond: "2d = 13",
        heart: "2h = 26",
        spades: "2s = 39"
    },
    {
        club: "3c = 1",
        diamond: "3d = 14",
        heart: "3h = 27",
        spades: "3s = 40"
    },
    {
        club: "4c = 2",
        diamond: "4d = 15",
        heart: "4h = 28",
        spades: "4s = 41"
    },
    {
        club: "5c = 3",
        diamond: "5d = 16",
        heart: "5h = 29",
        spades: "5s = 42"
    },
    {
        club: "6c = 4",
        diamond: "6d = 17",
        heart: "6h = 30",
        spades: "6s = 43"
    },
    {
        club: "7c = 5",
        diamond: "7d = 18",
        heart: "7h = 31",
        spades: "7s = 44"
    },
    {
        club: "8c = 6",
        diamond: "8d = 19",
        heart: "8h = 32",
        spades: "8s = 45"
    },
    {
        club: "9c = 7",
        diamond: "9d = 20",
        heart: "9h = 33",
        spades: "9s = 46"
    },
    {
        club: "Tc = 8",
        diamond: "Td = 21",
        heart: "Th = 34",
        spades: "Ts = 47"
    },
    {
        club: "Jc = 9",
        diamond: "Jd = 22",
        heart: "Jh = 35",
        spades: "Js = 48"
    },
    {
        club: "Qc = 10",
        diamond: "Qd = 23",
        heart: "Qh = 36",
        spades: "Qs = 49"
    },
    {
        club: "Kc = 11",
        diamond: "Kd = 24",
        heart: "Kh = 37",
        spades: "Ks = 50"
    },
    {
        club: "Ac = 12",
        diamond: "Ad = 25",
        heart: "Ah = 38",
        spades: "As = 51"
    }
]

const cardtype_cn = [{
        "club": "2c = 0",
        "diamond": "2d = 13",
        "heart": "2h = 26",
        "spades": "2s = 39"
    },
    {
        "club": "3c = 1",
        "diamond": "3d = 14",
        "heart": "3h = 27",
        "spades": "3s = 40"
    },
    {
        "club": "4c = 2",
        "diamond": "4d = 15",
        "heart": "4h = 28",
        "spades": "4s = 41"
    },
    {
        "club": "5c = 3",
        "diamond": "5d = 16",
        "heart": "5h = 29",
        "spades": "5s = 42"
    },
    {
        "club": "6c = 4",
        "diamond": "6d = 17",
        "heart": "6h = 30",
        "spades": "6s = 43"
    },
    {
        "club": "7c = 5",
        "diamond": "7d = 18",
        "heart": "7h = 31",
        "spades": "7s = 44"
    },
    {
        "club": "8c = 6",
        "diamond": "8d = 19",
        "heart": "8h = 32",
        "spades": "8s = 45"
    },
    {
        "club": "9c = 7",
        "diamond": "9d = 20",
        "heart": "9h = 33",
        "spades": "9s = 46"
    },
    {
        "club": "Tc = 8",
        "diamond": "Td = 21",
        "heart": "Th = 34",
        "spades": "Ts = 47"
    },
    {
        "club": "Jc = 9",
        "diamond": "Jd = 22",
        "heart": "Jh = 35",
        "spades": "Js = 48"
    },
    {
        "club": "Qc = 10",
        "diamond": "Qd = 23",
        "heart": "Qh = 36",
        "spades": "Qs = 49"
    },
    {
        "club": "Kc = 11",
        "diamond": "Kd = 24",
        "heart": "Kh = 37",
        "spades": "Ks = 50"
    },
    {
        "club": "Ac = 12",
        "diamond": "Ad = 25",
        "heart": "Ah = 38",
        "spades": "As = 51"
    }
]