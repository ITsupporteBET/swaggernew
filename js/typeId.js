if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.typeId').bootstrapTable({//多钱包类型
            data: typeId_cn
        });
    });
} else {
    $(function () {
        $('.typeId').bootstrapTable({//多钱包类型
            data: typeId
        });
    });
}
const typeId = [{
    "code": 0,
    "description": "General Wallet (Including wallet for all games)"
},
{
    "code": 1,
    "description": "Live Wallet (Including wallets that are filled with live dealer interactive games, such as: Baccarat...etc)"
},
{
    "code": 2,
    "description": "No Dealer Wallet (No real-person interactive games, eg slot machine...etc)"
},
{
    "code": 3,
    "description": "Battle wallet,temporarily not open for use."
},
{
    "code": 4,
    "description": "Casino wallet,temporarily not open for use."
},
{
    "code": 5,
    "description": "Sports wallet,temporarily not open for use."
},
{
    "code": 6,
    "description": "Lottery wallet, temporarily not open for use."
}
]

const typeId_cn = [
    { "code": "0", "description": "通用钱包，所有游戏的钱包" },
    { "code": "1", "description": "真人钱包，与真人荷官互动游戏的钱包，例如：百家乐…etc" },
    { "code": "2", "description": "电子钱包，没有真人互动的游戏，例如：老虎机…etc" },
    { "code": "3", "description": "对战钱包，暂时不开放使用" },
    { "code": "4", "description": "赌场钱包，暂时不开放使用" },
    { "code": "5", "description": "体育钱包，暂时不开放使用" },
    { "code": "6", "description": "彩票钱包，暂时不开放使用" }
]
