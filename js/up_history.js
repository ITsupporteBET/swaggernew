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
const up_his = [
    {
        update_time: "20221122",
        update_member: "leo",
        update_description: `
        Affected API: <br>
        userbethistory
        Address: userbethistory >> API Responses >> "betHistories" >> "providerId" <br>
        Single wallet/Transfer Wallet: Add API "userbethistory" new response parameter <br>
        <br>Added sub-channel related instructions<br>
        `
    },
    {
        update_time: "20221012",
        update_member: "leo",
        update_description: `
        API: <br>
        updatebetlimit、updateBatchBetlimit: <br>
        Adjust some request parameter names: allow to use the original request parameter name or use the response parameter name of getbetlimit.<br>
        Single wallet/Transfer Wallet: No affect<br>
        `
    },
    {
        update_time: "20221006",
        update_member: "leo",
        update_description: `
        Update Genesis Slot Game Restricted Area<br>
        `
    },
    {
        update_time: "20221004",
        update_member: "leo",
        update_description: `
        Add relevant API descriptions for Board Game - Virtual PokDeng<br>
        Add Channel Red Packet parameter<br>
        `
    },
    {
        update_time: "20220921",
        update_member: "leo",
        update_description: `
        Affected API: <br>
        userbethistory
        Address: userbethistory >> API Responses >> "betHistories" >> "brokerageRequired" <br>
        Single wallet/Transfer Wallet: Add API "userbethistory" new response parameter <br>
        `
    },
    {
        update_time: "20220916",
        update_member: "leo",
        update_description: `
        Add relevant API descriptions for Dice Game - Hi-Lo<br>
        `
    },
    {
        update_time: "20220629",
        update_member: "leo",
        update_description: `
        Affected API: <br>
        userbethistory
        Address: userbethistory >> API Responses >> "betHistories" >> "niuniuWithHoldingTotal" and "niuniuWithHoldingDetail" <br>
        Both Single Wallet and Transfer Wallet require changing the parameter, please see the changes below. <br>
        Single wallet/Transfer Wallet:
        "niuniuWithHoldingTotal" => "withHoldingTotal" <br>
        "niuniuWithHoldingDetail" => "withHoldingDetail" <br>
        `
    },
    {
        update_time: "20220518",
        update_member: "leo",
        update_description: `
        API：<br>
        getroomlist<br>
        eBET partners will be able to get the TableList & TableStatus that you using at any time.<br>
        <br>
        Single wallet/Transfer Wallet: No affect<br>
        `
    },
    {
    update_time: "20220505",
    update_member: "leo",
    update_description: `
    Affected API: <br>
    increaseCredit
    Address: increaseCredit > API Request > detail > betList > odds <br>
    Single wallet: Update API “increaseCredit" parameter when payout(type=2) request description<br>
    Transfer Wallet: No affect<br>
    <br>
    userbethistory<br>
    Address: userbethistory > API Response > betHistories > oddsMap <br>
    Single wallet: Add API "userbethistory" new response parameter <br>
    Transfer Wallet:Add API "userbethistory" new response parameter <br>
    `
}, 
{
    update_time: "20220420",
    update_member: "leo",
    update_description: `
    Affected API:<br>
    Single wallet: Add “increaseCredit" new parameter when payout(type=2) request<br>
    API > increaseCredit > detail > betList > validBet<br>
    Transfer Wallet: No affect<br>
    `
}, 
{
    update_time: "20220217",
    update_member: "leo",
    update_description: `
    Single wallet: Add “increaseCredit" new parameter for Mini-game<br>
    Transfer Wallet: No affect<br>
    `
}, 
{
    update_time: "20220208",
    update_member: "leo",
    update_description: `
    Single wallet：<br>
    Update “userbetsummary" new response parameter "totalBalance"<br>
    Add new api "launchUrl" for channel request<br>
    <br>
    Transfer wallet：<br>
    Update “userbetsummary" new response parameter "totalBalance"<br>
    Add new api "launchUrl" for channel request<br>
    `
},
{
    update_time: "20220112",
    update_member: "leo",
    update_description: `
    Single wallet：<br>
    Update “increaseCredit" response parameter "：refund (When type=28 for BullBull)<br>
    `
}, 
{
    update_time: "20211222",
    update_member: "leo",
    update_description: `
    Single wallet / Transfer Wallet:<br>
    Update “totaluserbetsummary" response parameter "gameName"<br>
    Update “userbethistory" response parameter "gameName"<br>
    `
}, 
{
    update_time: "20211117",
    update_member: "leo",
    update_description: `
    Add relevant API descriptions for Mini-game<br>
    `
}, 
{
    update_time: "20211020",
    update_member: "leo",
    update_description: `
    Update userbetsummary parameter<br>
    Add relevant API parameter descriptions for Fortune Roulette<br>
    `
}, 
{
    update_time: "20210923",
    update_member: "leo",
    update_description: `
    Add relevant API parameter descriptions for Virtual Blackjack & Live Blackjack<br>
    `
},
{
    update_time: "20210628",
    update_member: "leo",
    update_description: `
    Add relevant API descriptions for Genesis slot<br>
    `
}, 
{
    update_time: "20210615",
    update_member: "leo",
    update_description: `
    Add relevant API descriptions for BullBull<br>
    `
}, 
{
    update_time: "20210327",
    update_member: "leo",
    update_description: `
    Add relevant API descriptions for rechargestatus<br>
    `
}, 
{
    update_time: "20210324",
    update_member: "leo",
    update_description: `
    Remove the slot game trial mode, dgt=6, gameType=6<br>
    `
},
{
    update_time: "20201230",
    update_member: "leo",
    update_description: `
    Add increaseCredit description<br>
    Add Treasure parameter<br>
    `
}, 
{
    update_time: "20201218",
    update_member: "leo",
    update_description: `
    Bullbull and Fortune wheel were removed.<br>`
}, 
{
    update_time: "20201210",
    update_member: "leo",
    update_description: `
    Add API :netCheck<br>`
}, 
{
    update_time: "20201113",
    update_member: "leo",
    update_description: `
    Add Token login example<br>
    Add new channel request error code<br>`
}, 
{
    update_time: "20201026",
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
    BDT(Bangladeshi taka)<br>
    PKR(Pakistani Rupee)<br>
    SZL(Lilangeni)<br>
    UAH(Hryvnia)<br>    
    `
}, 
{
    update_time: "20200916",
    update_member: "leo",
    update_description: `
    Because Restricted Areas<br>
    Remove currency<br>
    KHR(Cambodian Riel<br>`
}, 
{
    update_time: "20200724",
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
}, 
{
    update_time: "20200618",
    update_member: "leo",
    update_description: `
    Optimizing recharge process<br>
    Add precautions description<br>`
}, 
{
    update_time: "20200604",
    update_member: "leo",
    update_description: `
    Add currencies: Peso mexicano ,Nuevo Sol ,Peso colombiano<br>`
}, 
{
    update_time: "20200319",
    update_member: "leo",
    update_description: `
    Adjust increaseCredit request parameters<br>`
}, 
{
    update_time: "20200312",
    update_member: "leo",
    update_description: `
    Update web operation settings descriptions for Leave the game jump page<br>`
}, 
{
    update_time: "20200227",
    update_member: "leo",
    update_description: `
    Add relevant API descriptions for Lottery<br>
    Add gameType descriptions for Lottery<br>
    Add tableType descriptions for Lottery<br>
`
}, 
{
    update_time: "20200220",
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
},
{
    update_time: "20210107",
    update_member: "leo",
    update_description: `
    Added increaseCredit detail parameter<br>
    betStopTime<br>
    matchId<br>
    `
}, 
{
    update_time: "20210120",
    update_member: "leo",
    update_description: `
    1. Update userbethistory description<br>
    2. Added increaseCredit request parameter<br>
    3. Added autoBatchRefund request parameter<br>
    `
}
]


const up_his_cn = [
    {
        update_time: "20221122",
        update_member: "leo",
        update_description: `
        Affected API: <br>
        userbethistory
        userbethistory >> API Responses >> "betHistories" >> "providerId" <br>
        单钱包/转帐钱包：userbethistory新增回传参数<br>
        <br>新增子渠道相关说明<br>
        `
    },
    {
        update_time: "20221012",
        update_member: "leo",
        update_description: `
        API: <br>
        updatebetlimit、updateBatchBetlimit: <br>
        调整部分请求参数名称：允许择一使用原本的请求参数名称或使用getbetlimit的回应参数名称。<br>
        单钱包/转帐钱包：不受影响<br>
        `
    },
    {
        update_time: "20221006",
        update_member: "leo",
        update_description: `
        更新Genesis老虎机游戏限制地区<br>
        `
    },
    {
        update_time: "20221004",
        update_member: "leo",
        update_description: `
        增加棋牌游戏 - 电子博丁的相关说明<br>
        新增渠道红包活动参数<br>
        `
    },
    {
        update_time: "20220921",
        update_member: "leo",
        update_description: `
        Affected API: <br>
        userbethistory
        userbethistory >> API Responses >> "betHistories" >> "brokerageRequired" <br>
        单钱包/转帐钱包：userbethistory新增回传参数<br>
        `
    },
    {
        update_time: "20220916",
        update_member: "leo",
        update_description: `
        增加骰子游戏 - Hi-Lo的相关说明<br>
        `
    },
    {
        update_time: "20220629",
        update_member: "leo",
        update_description: `
        API：<br>
        userbethistory
        userbethistory >> API Responses >> "betHistories" >> "niuniuWithHoldingTotal" & "niuniuWithHoldingDetail" <br>
        对于单钱包及转账钱包：eBET Responses 變更参数名稱 <br>
        "niuniuWithHoldingTotal" => "withHoldingTotal" <br>
        "niuniuWithHoldingDetail" => "withHoldingDetail" <br>
        `
    },
    {
        update_time: "20220518",
        update_member: "leo",
        update_description: `
        API：<br>
        getroomlist<br>
        易博将添加一项全新 API"getroomlist"，合作伙伴们将可随时获取您正使用中的桌台清单及状态。<br>
        <br>
        单钱包/转帐钱包：不受影响<br>
        `
    },
    {
        update_time: "20220505",
        update_member: "leo",
        update_description: `
        API：<br>
        increaseCredit<br>
        increaseCredit > API Request > detail > betList > odds <br>
        单钱包：eBET请求API "increaseCredit" 派彩请求(type=2)更新参数说明<br>
        转帐钱包：无影响<br>
        <br>
        userbethistory<br>
        userbethistory > API Response > betHistories > oddsMap <br>
        单钱包/转帐钱包：userbethistory新增回传参数<br>
        `
    }, 
    {
        update_time: "20220420",
        update_member: "leo",
        update_description: `
        API：<br>
        单钱包:eBET请求API "increaseCredit" 派彩请求(type=2)新增相关参数<br>
        API > increaseCredit > detail > betList > validBet<br>
        转帐钱包：无影响<br>
        `
    }, 
    {
        update_time: "20220317",
        update_member: "leo",
        update_description: `
        共同API：渠道请求API "launchUrl" 更新回传相关参数 : launchUrl<br>
        `
    },
    {
        update_time: "20220302",
        update_member: "leo",
        update_description: `
        单钱包:eBET请求API "increaseCredit" 迷你游戏新增相关参数<br>
        转帐钱包：无影响<br>
        `
    },
    {
        update_time: "20220217",
        update_member: "leo",
        update_description: `
        单钱包 及 转帐钱包：<br>
        更新API"launchUrl"请求参数："currency" 及 "china"<br>
        - 渠道请求参数"currency"更改为必要添加。<br>
        - 新增渠道请求之参数"china"。<br>
        `
    }, 
    {
        update_time: "20220208",
        update_member: "leo",
        update_description: `
        单钱包：<br>
        API "userbetsummary" 新增回传相关参数 "totalBalance"<br>
        新增渠道请求API "launchUrl"<br>
        <br>
        转帐钱包：
        API "userbetsummary" 新增回传相关参数 "totalBalance"<br>
        新增渠道请求API "launchUrl"<br>
        `
    }, 
    {
        update_time: "20220129",
        update_member: "leo",
        update_description: `
        API: <br>
        userbethistory <br>
        userbethistory >> API Responses >> "betHistories" >> "niuniuWithHoldingTotal" & "niuniuWithHoldingDetail" <br>
        对于单钱包及转账钱包：eBET Responses 變更参数名稱 <br>
        "niuniuWithHoldingTotal" => "withHoldingTotal" <br>
        "niuniuWithHoldingDetail" => "withHoldingDetail" <br>
        `
    },
    {
        update_time: "20220112",
        update_member: "leo",
        update_description: `
        单钱包：<br>
        更新API：「 increaseCredit 」的回传参数 ：refund (When type=28 for BullBull)<br>
        `
    },
    {
        update_time: "20211222",
        update_member: "leo",
        update_description: `
        单钱包 / 转帐钱包：<br>
        更新API：「 totaluserbetsummary 」的回传参数 ：gameName<br>
        更新API：「 userbethistory 」的回传参数 ：gameName<br>
        `
    }, 
    {
        update_time: "20211117",
        update_member: "leo",
        update_description: `
        增加游戏迷你游戏相关参数<br>
        `
    }, 
    {
        update_time: "20211103",
        update_member: "leo",
        update_description: `
        更新updatebetlimit财富轮盘相关参数<br>
        更新totaluserbetsummary相关参数<br>
        增加API updateBatchBetlimit<br>
        `
    }, 
    {
        update_time: "20211027",
        update_member: "leo",
        update_description: `
        更新userbetsummary相关参数<br>
        增加游戏财富轮盘相关参数<br>
        `
    }, 
    {
        update_time: "20210923",
        update_member: "leo",
        update_description: `
        增加游戏电子21点，真人21点相关参数<br>
        `
    }, 
    {
        update_time: "20210628",
        update_member: "leo",
        update_description: `
        增加游戏Genesis老虎机游戏相关说明<br>
        `
    }, 
    {
        update_time: "20210615",
        update_member: "leo",
        update_description: `
        增加游戏牛牛的相关说明<br>
        `
    }, 
    {
        update_time: "20210527",
        update_member: "leo",
        update_description: `
        rechargestatus 更新说明<br>
        `
    }, 
    {
        update_time: "20210524",
        update_member: "leo",
        update_description: `
        移除老虎机试玩模式, dgt=6, gameType=6<br>
        `
    }, 
    {
        update_time: "20210120",
        update_member: "leo",
        update_description: `
        1. userbethistory 更新说明<br>
        2. 新增 increaseCredit 请求参数<br>
        3. 新增 autoBatchRefund 请求参数<br>
        `
    }, 
    {
        update_time: "20210107",
        update_member: "leo",
        update_description: `
        新增increaseCredit detail参数<br>
        betStopTime<br>
        matchId<br>
        `
    }, 
    {
        update_time: "20201230",
        update_member: "leo",
        update_description: `
        新增increaseCredit说明<br>
        新增宝箱活动参数<br>
        `
    }, 
    {
        update_time: "20201218",
        update_member: "leo",
        update_description: `
        移除牛牛和财富大转盘<br>`
    }, 
    {
        update_time: "20201210",
        update_member: "leo",
        update_description: `
        新增的API :netCheck<br>`
    }, 
    {
        update_time: "20201113",
        update_member: "leo",
        update_description: `
        新增Token登入范例<br>
        新增渠道请求错误代码<br>`
    }, 
    {
        update_time: "20201026",
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
        BDT(孟加拉塔卡)<br>
        PKR(巴基斯坦卢比)<br>
        SZL(斯威士兰里兰吉尼)<br>
        UAH(格里夫纳)<br>
        `
    }, 
    {
        update_time: "20200916",
        update_member: "leo",
        update_description: `
        因为限制地区<br>
        移除币种<br>
        KHR(柬埔寨瑞尔)<br>`
    }, 
    {
        update_time: "20200724",
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
    },
    {
        update_time: "20200618",
        update_member: "leo",
        update_description: `
        优化充值流程<br>
        新增注意事项说明<br>`
    }, 
    {
        update_time: "20200604",
        update_member: "leo",
        update_description: `
        新增币种：墨西哥比索、秘鲁新索尔、哥伦比亚比索<br>`
    }, 
    {
        update_time: "20200515",
        update_member: "leo",
        update_description: `
        新增事务类型type=37<br>`
    }, 
    {
        update_time: "20200319",
        update_member: "leo",
        update_description: `
        調整increaseCredit請求參數<br>`
    }, 
    {
        update_time: "20200312",
        update_member: "leo",
        update_description: `
        更新离开游戏后的介面说明<br>`
    }, 
    {
        update_time: "20200227",
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
    },
    {
        update_time: "20200227",
        update_member: "leo",
        update_description: `
        增加游戏彩票的相关说明<br>
        增加gameType彩票的相关说明<br>
        增加tableType彩票的相关说明<br>
        `
    }
]