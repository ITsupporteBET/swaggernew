if (window.localStorage.getItem('lang') == "cn") {

$(function () {
    $('.currency').bootstrapTable({//幣種
        data: currency_cn
    });
});
} else {
    $(function () {
        $('.currency').bootstrapTable({//幣種
            data: currency
        });
    });
}

const currency =
    [
        { "currency": "AUD", "description": "Australian dollar" },
        { "currency": "BND", "description": "Brunei dollar" },
        { "currency": "BRL", "description": "Brazilian real" },
        { "currency": "CNY", "description": "RMB" },
        { "currency": "EUR", "description": "Euro" },
        { "currency": "GBP", "description": "Pound sterling" },
        { "currency": "ID2", "description": "Indonesian Rupiah" },
        { "currency": "IDR", "description": "Indonesian Rupiah (1:1000)" },
        { "currency": "INR", "description": "Indian rupee" },
        { "currency": "JPY", "description": "JPY" },
        { "currency": "KES", "description": "Kenyan shilling" },
        { "currency": "KHR", "description": "Cambodian riel" },
        { "currency": "MMK", "description": "Myanma kyat" },
        { "currency": "MYR", "description": "Malaysia Ringgit" },
        { "currency": "PLN", "description": "Polish złoty" },
        { "currency": "RON", "description": "Romanian new leu" },
        { "currency": "RUB", "description": "Russian ruble" },
        { "currency": "THB", "description": "Thai baht" },
        { "currency": "TMT", "description": "Turkmenistan Manat" },
        { "currency": "TRY", "description": "Turkish lira" },
        { "currency": "USD", "description": "USD" },
        { "currency": "VN2", "description": "Vietnamese dong" },
        { "currency": "VND", "description": "Vietnamese dong (1:1000)" },
        { "currency": "ADA", "description": "ADA" },
        { "currency": "GCO", "description": "SSG Coin" },
        { "currency": "TRX", "description": "TRX" },
        { "currency": "UBT", "description": "BTC (1:1000000)" },
        { "currency": "UST", "description": "UST" },
        { "currency": "MXN", "description": "Peso mexicano" },
        { "currency": "PEN", "description": "Nuevo Sol" },
        { "currency": "COP", "description": "Peso colombiano" },
        { "currency": "MBCH", "description": "MillionBitcoinCash" },
        { "currency": "MLTC", "description": "MillionLiteCoin" },
        { "currency": "KZT", "description": "Kazakhstani Tenge" },
        { "currency": "TND", "description": "TND" }
    ]

const currency_cn = [
    { "currency": "AUD", "description": "澳元" },
    { "currency": "BND", "description": "汶莱" },
    { "currency": "BRL", "description": "巴西雷亚尔" },
    { "currency": "CNY", "description": "人民币" },
    { "currency": "EUR", "description": "欧元" },
    { "currency": "GBP", "description": "英镑" },
    { "currency": "ID2", "description": "印尼盾" },
    { "currency": "IDR", "description": "毫印尼盾" },
    { "currency": "INR", "description": "印度" },
    { "currency": "JPY", "description": "日元" },
    { "currency": "KES", "description": "肯亚先令" },
    { "currency": "KHR", "description": "柬埔寨瑞尔" },
    { "currency": "MMK", "description": "缅元" },
    { "currency": "MYR", "description": "马来西亚林吉特" },
    { "currency": "PLN", "description": "波兰" },
    { "currency": "RON", "description": "罗马尼亚" },
    { "currency": "RUB", "description": "俄罗斯" },
    { "currency": "THB", "description": "泰铢" },
    { "currency": "TMT", "description": "土库曼斯坦马纳特" },
    { "currency": "TRY", "description": "土耳其" },
    { "currency": "USD", "description": "美元" },
    { "currency": "VN2", "description": "越南盾" },
    { "currency": "VND", "description": "毫越南盾" },
    { "currency": "ADA", "description": "卡尔达诺币" },
    { "currency": "GCO", "description": "SSG金币" },
    { "currency": "TRX", "description": "波场币" },
    { "currency": "UBT", "description": "微比特" },
    { "currency": "UST", "description": "泰达币" },
    { "currency": "MXN", "description": "墨西哥比索" },
    { "currency": "PEN", "description": "秘鲁新索尔" },
    { "currency": "COP", "description": "哥伦比亚比索" },
    { "currency": "MBCH", "description": "毫比特币现金" },
    { "currency": "MLTC", "description": "毫莱特币" },
    { "currency": "KZT", "description": "哈萨克斯坦坚戈" },
    { "currency": "TND", "description": "突尼斯第纳尔" }

]