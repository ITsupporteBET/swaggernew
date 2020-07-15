if (window.localStorage.getItem('lang') == "cn") {
$(function () {
    $('.betting_opposites').bootstrapTable({
        data: betting_opposites_cn
    });
});
} else {
    $(function () {
        $('.betting_opposites').bootstrapTable({
            data: betting_opposites
        });
    });
}

const betting_opposites = [
    {
        baccarat: "banker / player",
        dragon_tiger: "dragon / tiger",
        roulette: "Big / Small",
        sicbo: "Big / Small"
    },
    {
        baccarat: "bankerOdd / bankerEven",
        dragon_tiger: "DragonOdd / DragonEven",
        roulette: "Odd / Even",
        sicbo: "Odd / Even"
    },
    {
        baccarat: "playerOdd / playerEven",
        dragon_tiger: "TigerOdd / TigerEven",
        roulette: "Red / Black",
        sicbo: ""
    },
    {
        baccarat: "Big / Small",
        dragon_tiger: "DragonBlack / DragonRed",
        roulette: "",
        sicbo: ""
    },
    {
        baccarat: "",
        dragon_tiger: "TigerBlack / TigerRed",
        roulette: "",
        sicbo: ""
    }
]

const betting_opposites_cn = [
    { "baccarat": "庄 / 闲", "dragon_tiger": "龙 / 虎", "roulette": "大 / 小", "sicbo": "大 / 小" },
    { "baccarat": "庄单 / 庄双", "dragon_tiger": "龙单 / 龙双", "roulette": "单 / 双", "sicbo": "单 / 双" },
    { "baccarat": "闲单 / 闲双", "dragon_tiger": "虎单 / 虎双", "roulette": "紅 / 黑", "sicbo": "" },
    { "baccarat": "大 / 小", "dragon_tiger": "龙黑 / 龙红", "roulette": "", "sicbo": "" },
    { "baccarat": "", "dragon_tiger": "虎黑 / 虎红", "roulette": "", "sicbo": "" }
]