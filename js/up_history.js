if (window.localStorage.getItem('lang') == "cn") {

    $(function () {
        $('.up_his').bootstrapTable({
            data: up_his_cn
        });
    });
} else {
    $(function () {
        $('.up_his').bootstrapTable({
            data: up_his
        });
    });
}
const up_his = [{
    update_time: "2020/Feb/20",
    update_member: "leo",
    update_description: `
Add relevant API descriptions for Fortune Wheel<br>
Add the parameter maxPayout of userbethistory for Fortune Wheel<br>
Add the parameter of getbetlimit for Fortune Wheel<br>
Add the parameter of updatebetlimit for Fortune Wheel<br>
Add API loginslot: It can login to slot games directly<br>
Add API slotgamelist: It can get the list of slot games<br>
Add API callback: Apply for OAuth login<br>
Add languages: German, French, Turkish<br>`
}, {
    update_time: "2020/Feb/27",
    update_member: "leo",
    update_description: `
Add relevant API descriptions for Lottery<br>
Add gameType descriptions for Lottery<br>
Add tableType descriptions for Lottery<br>
`
}, {
    update_time: "2020/Mar/12",
    update_member: "leo",
    update_description: `
    Update web operation settings descriptions for Leave the game jump page<br>`
}, {
    update_time: "2020/Mar/19",
    update_member: "leo",
    update_description: `
    Adjust increaseCredit request parameters<br>`
}, {
    update_time: "2020/May/15",
    update_member: "leo",
    update_description: `
    Add the new common parameter type=37<br>`
}, {
    update_time: "2020/June/04",
    update_member: "leo",
    update_description: `
    Add currencies: Peso mexicano ,Nuevo Sol ,Peso colombiano<br>`
}, {
    update_time: "2020/June/18",
    update_member: "leo",
    update_description: `
    Optimizing recharge process<br>
    Add precautions description<br>`
}, {
    update_time: "2020/July/24",
    update_member: "leo",
    update_description: `
    Adjust support currency<br>
    <br>
    Add currency<br>
    KZT(Kazakhstani Tenge)<br>
    TND(TND)<br>
    CAD(Canadian Dollar)<br>
    <br>
    Because Restricted Areas<br>
    Remove currency<br>
    TWD(Taiwan Doller)<br>
    HKD(Hong Kong Dollars)<br>
    USD(United States Dollar)<br>
    `
}, {
    update_time: "2020/Sep/16",
    update_member: "leo",
    update_description: `
    Because Restricted Areas<br>
    Remove currency<br>
    KHR(Cambodian Riel<br>`
}, {
    update_time: "2020/OCT/26",
    update_member: "leo",
    update_description: `
    API increaseCredit brokerageRequired update instructions<br>
    Adjust support currency<br>
    <br>
    Add currency<br>
    NOK(Norwegian krone)<br>
    NZD(New Zealand dollar)<br>
    CHF(Swiss franc)<br>
    DKK(Danish krone)<br>
    SEK(Swedish krona)<br>
    ZAR(South African rand)<br>
    `
}, {
    update_time: "2020/NOV/13",
    update_member: "leo",
    update_description: `
    Add Token login example<br>
    Add new channel request error code<br>`
}, {
    update_time: "2020/DEC/10",
    update_member: "leo",
    update_description: `
    Add API :netCheck<br>`
}, {
    update_time: "2020/DEC/18",
    update_member: "leo",
    update_description: `
    Bullbull and Fortune wheel were removed.<br>`
}, {
    update_time: "2020/DEC/30",
    update_member: "leo",
    update_description: `
    Add increaseCredit description<br>
    Add Treasure parameter<br>
    `
}, {
    update_time: "2021/JAN/07",
    update_member: "leo",
    update_description: `
    Added increaseCredit detail parameter<br>
    betStopTime<br>
    matchId<br>
    `
}, {
    update_time: "2021/JAN/20",
    update_member: "leo",
    update_description: `
    1. Update userbethistory description<br>
    2. Added increaseCredit request parameter<br>
    3. Added autoBatchRefund request parameter<br>
    `
}, {
    update_time: "2021/MAY/24",
    update_member: "leo",
    update_description: `
    Remove the slot game trial mode, dgt=6, gameType=6<br>
    `
}, {
    update_time: "2021/MAY/27",
    update_member: "leo",
    update_description: `
    Add relevant API descriptions for rechargestatus<br>
    `
}, {
    update_time: "2021/JUL/15",
    update_member: "leo",
    update_description: `
    Add relevant API descriptions for BullBull<br>
    `
}, {
    update_time: "2021/JUL/28",
    update_member: "leo",
    update_description: `
    Add relevant API descriptions for Genesis slot<br>
    `
}, {
    update_time: "2021/SEP/23",
    update_member: "leo",
    update_description: `
    Add relevant API parameter descriptions for Virtual Blackjack & Live Blackjack<br>
    `
}, {
    update_time: "2021/OCT/20",
    update_member: "leo",
    update_description: `
    Update userbetsummary parameter<br>
    Add relevant API parameter descriptions for Fortune Roulette<br>
    `
}, {
    update_time: "2021/NOV/17",
    update_member: "leo",
    update_description: `
    Add relevant API descriptions for Mini-game<br>
    `
}, {
    update_time: "2021/DEC/22",
    update_member: "leo",
    update_description: `
    Single wallet / Transfer Wallet:<br>
    Update “totaluserbetsummary" response parameter "gameName"<br>
    Update “userbethistory" response parameter "gameName"<br>
    `
}
]


const up_his_cn = [

    {
        update_time: "2020/Feb/27",
        update_member: "leo",
        update_description: `
        增加游戏财富大转盘的相关说明<br>
        增加userbethistory的回传参数：maxPayout：财富大转盘相关<br>
        增加getbetlimit的回传参数：财富大转盘相关<br>
        增加updatebetlimit的请求参数：财富大转盘相关<br>
        增加API loginslot：它可以直接登入slot游戏<br>
        增加API slotgamelist：它可以取得slot游戏清单<br>
        增加API callback：用于OAuth登入<br>
        增加语系：德语、法语、土耳其语<br>`
    }, {
        update_time: "2020/Feb/27",
        update_member: "leo",
        update_description: `
        增加游戏彩票的相关说明<br>
        增加gameType彩票的相关说明<br>
        增加tableType彩票的相关说明<br>
        `
    }, {
        update_time: "2020/Mar/12",
        update_member: "leo",
        update_description: `
        更新离开游戏后的介面说明<br>`
    }, {
        update_time: "2020/Mar/19",
        update_member: "leo",
        update_description: `
        調整increaseCredit請求參數<br>`
    }, {
        update_time: "2020/May/15",
        update_member: "leo",
        update_description: `
        新增事务类型type=37<br>`
    }, {
        update_time: "2020/June/04",
        update_member: "leo",
        update_description: `
        新增币种：墨西哥比索、秘鲁新索尔、哥伦比亚比索<br>`
    }, {
        update_time: "2020/June/18",
        update_member: "leo",
        update_description: `
        优化充值流程<br>
        新增注意事项说明<br>`
    }, {
        update_time: "2020/July/24",
        update_member: "leo",
        update_description: `
        调整支援币种<br>
        <br>
        新增币种<br>
        KZT(哈萨克斯坦坚戈)<br>
        TND(突尼斯第纳尔)<br>
        CAD(加拿大元)<br>
        <br>
        因为限制地区<br>
        移除币种<br>
        TWD(新台币)<br>
        HKD(港币)<br>
        USD(美元)<br>
        `
    }, {
        update_time: "2020/Sep/16",
        update_member: "leo",
        update_description: `
        因为限制地区<br>
        移除币种<br>
        KHR(柬埔寨瑞尔)<br>`
    }, {
        update_time: "2020/OCT/26",
        update_member: "leo",
        update_description: `
        API increaseCredit brokerageRequired 更新说明<br>
        调整支援币种<br>
        <br>
        新增币种<br>
        NOK(挪威克朗)<br>
        NZD(新西兰元)<br>
        CHF(瑞士法郎)<br>
        DKK(丹麦克朗)<br>
        SEK(瑞典克朗)<br>
        ZAR(南非兰特)<br>
        `
    }, {
        update_time: "2020/NOV/13",
        update_member: "leo",
        update_description: `
        新增Token登入范例<br>
        新增渠道请求错误代码<br>`
    }, {
        update_time: "2020/DEC/10",
        update_member: "leo",
        update_description: `
        新增的API :netCheck<br>`
    }, {
        update_time: "2020/DEC/18",
        update_member: "leo",
        update_description: `
        移除牛牛和财富大转盘<br>`
    }, {
        update_time: "2020/DEC/30",
        update_member: "leo",
        update_description: `
        新增increaseCredit说明<br>
        新增宝箱活动参数<br>
        `
    }, {
        update_time: "2021/JAN/07",
        update_member: "leo",
        update_description: `
        新增increaseCredit detail参数<br>
        betStopTime<br>
        matchId<br>
        `
    }, {
        update_time: "2021/JAN/20",
        update_member: "leo",
        update_description: `
        1. userbethistory 更新说明<br>
        2. 新增 increaseCredit 请求参数<br>
        3. 新增 autoBatchRefund 请求参数<br>
        `
    }, {
        update_time: "2021/MAY/24",
        update_member: "leo",
        update_description: `
        移除老虎机试玩模式, dgt=6, gameType=6<br>
        `
    }, {
        update_time: "2021/MAY/27",
        update_member: "leo",
        update_description: `
        rechargestatus 更新说明<br>
        `
    }, {
        update_time: "2021/JUL/15",
        update_member: "leo",
        update_description: `
        增加游戏牛牛的相关说明<br>
        `
    }, {
        update_time: "2021/JUL/28",
        update_member: "leo",
        update_description: `
        增加游戏Genesis老虎机游戏相关说明<br>
        `
    }, {
        update_time: "2021/SEP/23",
        update_member: "leo",
        update_description: `
        增加游戏电子21点，真人21点相关参数<br>
        `
    }, {
        update_time: "2021/OCT/27",
        update_member: "leo",
        update_description: `
        更新userbetsummary相关参数<br>
        增加游戏财富轮盘相关参数<br>
        `
    }, {
        update_time: "2021/NOV/03",
        update_member: "leo",
        update_description: `
        更新updatebetlimit财富轮盘相关参数<br>
        更新totaluserbetsummary相关参数<br>
        增加API updateBatchBetlimit<br>
        `
    }, {
        update_time: "2021/NOV/17",
        update_member: "leo",
        update_description: `
        增加游戏迷你游戏相关参数<br>
        `
    }, {
        update_time: "2021/DEC/22",
        update_member: "leo",
        update_description: `
        单钱包 / 转帐钱包：<br>
        更新API：「 totaluserbetsummary 」的回传参数 ：gameName<br>
        更新API：「 userbethistory 」的回传参数 ：gameName<br>
        `
    }
]