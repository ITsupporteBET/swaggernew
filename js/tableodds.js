if (window.localStorage.getItem('lang') == "cn") {

$(function () {
    $('.dragontiger').bootstrapTable({
        data: dragontiger_cn
    });
});
} else {
    $(function () {
        $('.dragontiger').bootstrapTable({
            data: dragontiger
        });
    });
}

const dragontiger = [
    { dragon_tiger: "Dragon/Tiger", Odds: "1:1 (If Tie, player lose half of bet amount)" },
    { dragon_tiger: "Tie", Odds: "01:08:00" },
    { dragon_tiger: "DragonOdd/TigerOdd", Odds: "1:0.75" },
    { dragon_tiger: "DragonEven/TigerEven", Odds: "1:1.05" },
    { dragon_tiger: "DragonBlack/DragonRed/TigerBlack/TigerRed", Odds: "1:0.9" }
]

const dragontiger_cn = [
    { "dragon_tiger": "龙/虎", "Odds": "1:1（开和时输一半下注金额）" },
    { "dragon_tiger": "和", "Odds": "1:8" },
    { "dragon_tiger": "龙单/虎单", "Odds": "1:0.75" },
    { "dragon_tiger": "龙双/虎双", "Odds": "1:1.05" },
    { "dragon_tiger": "龙黑/龙红/虎黑/虎红", "Odds": "1:0.9" }
]

if (window.localStorage.getItem('lang') == "cn") {

$(function () {
    $('.roulette').bootstrapTable({
        data: roulette_cn
    });
});
} else {
    $(function () {
        $('.roulette').bootstrapTable({
            data: roulette
        });
    });
}

const roulette = [
    { roulette_game: "Big/small/Odd/Even/Red/black", Odds: "1:1" },
    { roulette_game: "Dozen/Column", Odds: "1:2" },
    { roulette_game: "Straight Up", Odds: "1:35" },
    { roulette_game: "Split Bet", Odds: "1:17" },
    { roulette_game: "StreetBet/3 numbers Bet", Odds: "1:11" },
    { roulette_game: "Corner Bet/4 numbers", Odds: "1:8" },
    { roulette_game: "Line Bet", Odds: "1:5" }
]

const roulette_cn = [
    { "roulette_game": "大/小/单/双/红/黑", "Odds": "1:1" },
    { "roulette_game": "打/列", "Odds": "1:2" },
    { "roulette_game": "直接注", "Odds": "1:35" },
    { "roulette_game": "分注", "Odds": "1:17" },
    { "roulette_game": "街注/三数", "Odds": "1:11" },
    { "roulette_game": "角注/四个号码", "Odds": "1:8" },
    { "roulette_game": "线注", "Odds": "1:5" }
]

if (window.localStorage.getItem('lang') == "cn") {

$(function () {
    $('.sicbo').bootstrapTable({
        data: sicbo_cn
    });
});
} else {
    $(function () {
        $('.sicbo').bootstrapTable({
            data: sicbo
        });
    });
}

const sicbo = [
    { sicbo: "Big/Small/Odd/Even", Odds: "1:1" },
    { sicbo: "4 or 17", Odds: "1:50" },
    { sicbo: "5 or 16", Odds: "1:18" },
    { sicbo: "6 or 15", Odds: "1:14" },
    { sicbo: "7 or 14", Odds: "1:12" },
    { sicbo: "8 or 13/Two Dice Pair", Odds: "1:8" },
    { sicbo: "9 to 12", Odds: "1:6" },
    { sicbo: "Triple(Specific)", Odds: "3:30" },
    { sicbo: "Any Triple", Odds: "1:24" },
    { sicbo: "Two Dice Combinations", Odds: "1:5" },
    { sicbo: "Single NumBer", Odds: "1:1 (Single Dice) 1:2 (Double Dice) 1:3 (Triple Dice)" },
    { sicbo: "Two same number", Odds: "1:60" },
    { sicbo: "Three different number", Odds: "1:30" }
]

const sicbo_cn = [
    { "sicbo": "大/小/单/双", "Odds": "1:1" },
    { "sicbo": "4点或17点", "Odds": "1:50" },
    { "sicbo": "5点或16点", "Odds": "1:18" },
    { "sicbo": "6点或15点", "Odds": "1:14" },
    { "sicbo": "7点或14点", "Odds": "1:12" },
    { "sicbo": "8点或13点/长牌（对子）", "Odds": "1:8" },
    { "sicbo": "9点 - 12点", "Odds": "1:6" },
    { "sicbo": "围骰", "Odds": "3:30" },
    { "sicbo": "全围", "Odds": "1:24" },
    { "sicbo": "短牌（组合）", "Odds": "1:5" },
    { "sicbo": "单点数", "Odds": "1:1（开出一个）1:2（开出二个）1:3（开出三个）" },
    { "sicbo": "二同号", "Odds": "1:60" },
    { "sicbo": "三不同", "Odds": "1:30" }
]

if (window.localStorage.getItem('lang') == "cn") {

$(function () {
    $('.baccarat').bootstrapTable({
        data: baccarat_cn
    });
});
} else {
    $(function () {
        $('.baccarat').bootstrapTable({
            data: baccarat
        });
    });
}

const baccarat = [
    { "baccarat": "Banker", "Odds": "1:0.95" },
    { "baccarat": "Player", "Odds": "1:1" },
    { "baccarat": "Tie", "Odds": "1:8" },
    { "baccarat": "Banker Pair/Player Pair", "Odds": "1:11" },
    { "baccarat": "Dragon Bonus 9 point difference", "Odds": "1:30" },
    { "baccarat": "Dragon Bonus 8 point difference", "Odds": "1:10" },
    { "baccarat": "Dragon Bonus 7 point difference", "Odds": "1:5" },
    { "baccarat": "Dragon Bonus 6 point difference", "Odds": "1:3" },
    { "baccarat": "Dragon Bonus 5 point difference", "Odds": "1:2" },
    { "baccarat": "Dragon Bonus 4 point difference/Dragon Bonus Natural Winner", "Odds": "1:1" },
    { "baccarat": "Dragon Bonus Natural Winner", "Odds": "1:1" },
    { "baccarat": "Dragon Bonus Natural Tie", "Odds": "Bets are refunded" },
    { "baccarat": "Big", "Odds": "1:0.54" },
    { "baccarat": "Small", "Odds": "1:1.5" },
    { "baccarat": "Banker Odd/Banker Even", "Odds": "1:0.94" },
    { "baccarat": "Player Odd", "Odds": "1:0.96" },
    { "baccarat": "Player Even", "Odds": "1:0.90" },
    { "baccarat": "Super Six", "Odds": "1:12" },
    { "baccarat": "Super Six  (Banker 3card)", "Odds": "1:20" }
]

const baccarat_cn = [
    { "baccarat": "庄", "Odds": "1:0.95" },
    { "baccarat": "闲", "Odds": "1:1" },
    { "baccarat": "和", "Odds": "1:8" },
    { "baccarat": "庄对/闲对", "Odds": "1:11" },
    { "baccarat": "龙宝，胜方以(非例牌)赢9点", "Odds": "1:30" },
    { "baccarat": "龙宝，胜方以(非例牌)赢8点", "Odds": "1:10" },
    { "baccarat": "龙宝，胜方以(非例牌)赢7点", "Odds": "1:5" },
    { "baccarat": "龙宝，胜方以(非例牌)赢6点", "Odds": "1:3" },
    { "baccarat": "龙宝，胜方以(非例牌)赢5点", "Odds": "1:2" },
    { "baccarat": "龙宝，胜方以(非例牌)赢4点/龙宝，胜方以(例牌)赢出", "Odds": "1:1" },
    { "baccarat": "龙宝，(例牌)和局", "Odds": "退还下注" },
    { "baccarat": "大", "Odds": "1:0.54" },
    { "baccarat": "小", "Odds": "1:1.5" },
    { "baccarat": "庄单/庄双", "Odds": "1:0.94" },
    { "baccarat": "闲单", "Odds": "1:0.96" },
    { "baccarat": "闲双", "Odds": "1:0.90" },
    { "baccarat": "幸运六", "Odds": "1:12" },
    { "baccarat": "幸运六（庄3张6）", "Odds": "1:20" }
]

if (window.localStorage.getItem('lang') == "cn") {

$(function () {
    $('.baccaratno').bootstrapTable({
        data: baccaratno_cn
    });
});
} else {
    $(function () {
        $('.baccaratno').bootstrapTable({
            data: baccaratno
        });
    });
}

const baccaratno = [
    { "baccaratno": "Banker", "Odds": "1:1 1:0.5 (wins with points 6 )" },
    { "baccaratno": "Player", "Odds": "1:1" },
    { "baccaratno": "Tie", "Odds": "1:8" },
    { "baccaratno": "Banker Pair/Player Pair", "Odds": "1:11" },
    { "baccaratno": "Dragon Bonus 9 point difference", "Odds": "1:30" },
    { "baccaratno": "Dragon Bonus 8 point difference", "Odds": "1:10" },
    { "baccaratno": "Dragon Bonus 7 point difference", "Odds": "1:5" },
    { "baccaratno": "Dragon Bonus 6 point difference", "Odds": "1:3" },
    { "baccaratno": "Dragon Bonus 5 point difference", "Odds": "1:2" },
    { "baccaratno": "Dragon Bonus 4 point difference/Dragon Bonus Natural Winner", "Odds": "1:1" },
    { "baccaratno": "Dragon Bonus Natural Tie", "Odds": "Bets are refunded" },
    { "baccaratno": "Big", "Odds": "1:0.54" },
    { "baccaratno": "Small", "Odds": "1:1.5" },
    { "baccaratno": "Banker Odd/Banker Even", "Odds": "1:0.94" },
    { "baccaratno": "Player Odd", "Odds": "1:0.96" },
    { "baccaratno": "Player Even", "Odds": "1:0.90" },
    { "baccaratno": "Super Six", "Odds": "1:12" },
    { "baccaratno": "Super Six  (Banker 3card)", "Odds": "1:20" }
]

const baccaratno_cn = [
    { "baccaratno": "庄", "Odds": "1:1 1:0.5（以6点赢出）" },
    { "baccaratno": "闲", "Odds": "1:1" },
    { "baccaratno": "和", "Odds": "1:8" },
    { "baccaratno": "闲对/庄对", "Odds": "1:11" },
    { "baccaratno": "龙宝，胜方以(非例牌)赢9点", "Odds": "1:30" },
    { "baccaratno": "龙宝，胜方以(非例牌)赢8点", "Odds": "1:10" },
    { "baccaratno": "龙宝，胜方以(非例牌)赢7点", "Odds": "1:5" },
    { "baccaratno": "龙宝，胜方以(非例牌)赢6点", "Odds": "1:3" },
    { "baccaratno": "龙宝，胜方以(非例牌)赢5点", "Odds": "1:2" },
    { "baccaratno": "龙宝，胜方以(非例牌)赢4点/龙宝，胜方以(例牌)赢出", "Odds": "1:1" },
    { "baccaratno": "龙宝，(例牌)和局", "Odds": "退还下注" },
    { "baccaratno": "大", "Odds": "1:0.54" },
    { "baccaratno": "小", "Odds": "1:1.5" },
    { "baccaratno": "庄单/庄双", "Odds": "1:0.94" },
    { "baccaratno": "闲单", "Odds": "1:0.96" },
    { "baccaratno": "闲双", "Odds": "1:0.90" },
    { "baccaratno": "幸运六", "Odds": "1:12" },
    { "baccaratno": "幸运六（庄3张6）", "Odds": "1:20" }
]

if (window.localStorage.getItem('lang') == "cn") {

$(function () {
    $('.niuniuwin').bootstrapTable({
        data: niuniuwin_cn
    });
});
} else {
    $(function () {
        $('.niuniuwin').bootstrapTable({
            data: niuniuwin
        });
    });
}

const niuniuwin = [
    { "niuniuwin": "5 flower bull", "Odds_Equal": "1:0.95", "Odds_Double": "1:4.75" },
    { "niuniuwin": "bull bull", "Odds_Equal": "1:0.95", "Odds_Double": "1:2.85" },
    { "niuniuwin": "bull7/bull8/bull9", "Odds_Equal": "1:0.95", "Odds_Double": "1:1.90" },
    { "niuniuwin": "No bull/bull1/bull2/bull3/bull4bull5/bull6", "Odds_Equal": "1:0.95", "Odds_Double": "1:0.95" }
]

const niuniuwin_cn = [
    { "niuniuwin": "五花牛(5张 J、Q、K)", "Odds_Equal": "1:0.95", "Odds_Double": "1:4.75" },
    { "niuniuwin": "牛牛", "Odds_Equal": "1:0.95", "Odds_Double": "1:2.85" },
    { "niuniuwin": "牛7/牛8/牛9", "Odds_Equal": "1:0.95", "Odds_Double": "1:1.90" },
    { "niuniuwin": "无牛/牛1/牛2/牛3/牛4/牛5/牛6", "Odds_Equal": "1:0.95", "Odds_Double": "1:0.95" }
]


if (window.localStorage.getItem('lang') == "cn") {

$(function () {
    $('.niuniulose').bootstrapTable({
        data: niuniulose_cn
    });
});
} else {
    $(function () {
        $('.niuniulose').bootstrapTable({
            data: niuniulose
        });
    });
}

const niuniulose = [
    { "niuniulose": "5 flower bull", "Odds_Equal": "1:1", "Odds_Double": "1:5" },
    { "niuniulose": "bull bull", "Odds_Equal": "1:1", "Odds_Double": "1:3" },
    { "niuniulose": "bull7/bull8/bull9", "Odds_Equal": "1:1", "Odds_Double": "1:2" },
    { "niuniulose": "No bull/bull1/bull2/bull3/bull4/bull5/bull6", "Odds_Equal": "1:1", "Odds_Double": "1:1" }
]

const niuniulose_cn = [
    { "niuniulose": "五花牛(5张 J、Q、K)", "Odds_Equal": "1:1", "Odds_Double": "1:5" },
    { "niuniulose": "牛牛", "Odds_Equal": "1:1", "Odds_Double": "1:3" },
    { "niuniulose": "牛7/牛8/牛9", "Odds_Equal": "1:1", "Odds_Double": "1:2" },
    { "niuniulose": "无牛/牛1/牛2/牛3/牛4/牛5/牛6", "Odds_Equal": "1:1", "Odds_Double": "1:1" }
]

$(function () {//基本赔率
    $('.fortune_wheelb').bootstrapTable({
        data: fortune_wheelb
    });
});

const fortune_wheelb = [
    { "betting_items": "1", "Odds": "1:1" },
    { "betting_items": "2", "Odds": "1:2" },
    { "betting_items": "5", "Odds": "1:5" },
    { "betting_items": "10", "Odds": "1:10" },
    { "betting_items": "20", "Odds": "1:20" },
    { "betting_items": "40", "Odds": "1:40" }
]

if (window.localStorage.getItem('lang') == "cn") {

$(function () {//固定赔率
    $('.fortune_wheelf').bootstrapTable({
        data: fortune_wheelf_cn
    });
});
} else {
    $(function () {//固定赔率
        $('.fortune_wheelf').bootstrapTable({
            data: fortune_wheelf
        });
    });
}


const fortune_wheelf = [
    { betting_items: "ODD", Odds: "1:0.75" },
    { betting_items: "EVEN", Odds: "1:1.25" },
    { betting_items: "2X & 8X", Odds: "1:25" }
]

const fortune_wheelf_cn = [
    { betting_items: "单", Odds: "1:0.75" },
    { betting_items: "双", Odds: "1:1.25" },
    { betting_items: "2X & 8X", Odds: "1:25" }
]