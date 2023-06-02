if (window.localStorage.getItem('lang') == "cn") {

$(function () {
    $('.ebetlanguage').bootstrapTable({//語系
        data: language_cn
    });
});
} else {
    $(function () {
        $('.ebetlanguage').bootstrapTable({//語系
            data: language
        });
    });
}

const language= [
    {
        "language": "zh_cn",
        "description": "Chinese Simplified"
    },
    {
        "language": "zh_tw",
        "description": "Chinese Traditional"
    },
    {
        "language": "zh_hk",
        "description": "Cantonese"
    },
    {
        "language": "en_us",
        "description": "English"
    },
    {
        "language": "ms_my",
        "description": "Bahasa Melayu"
    },
    {
        "language": "vi_vn",
        "description": "Ting Vit"
    },
    // {
    //     "language": "ko_kr",
    //     "description": "Korean"
    // },
    {
        "language": "ta_in",
        "description": "Tamil language"
    },
    {
        "language": "ja_jp",
        "description": "Japanese"
    },
    {
        "language": "in_id",
        "description": "Indonesian"
    },
    {
        "language": "th_th",
        "description": "Thai"
    },
    {
        "language": "es_es",
        "description": "Spanish"
    },
    {
        "language": "my_mm",
        "description": "Burmese"
    },
    {
        "language": "pt_pt",
        "description": "Portugal"
    },
    {
        "language": "km_kh",
        "description": "Cambodia"
    },
    {
        "language": "hi_in",
        "description": "Hindī"
    },
    {
        "language": "tr_tr",
        "description": "Turkish"
    },
    {
        "language": "de_de",
        "description": "German"
    },
    {
        "language": "fr_fr",
        "description": "French"
    }
]

const language_cn = [
    { "language": "zh_cn", "description": "简体中文" },
    { "language": "zh_tw", "description": "繁体中文" },
    { "language": "zh_hk", "description": "粤语" },
    { "language": "en_us", "description": "英文" },
    { "language": "ms_my", "description": "马来文" },
    { "language": "vi_vn", "description": "越南语" },
    // { "language": "ko_kr", "description": "韩文" },
    { "language": "ta_in", "description": "坦米尔语" },
    { "language": "ja_jp", "description": "日语" },
    { "language": "in_id", "description": "印度尼西亚文" },
    { "language": "th_th", "description": "泰文" },
    { "language": "es_es", "description": "西班牙语" },
    { "language": "my_mm", "description": "缅甸语" },
    { "language": "pt_pt", "description": "葡萄牙語" },
    { "language": "km_kh", "description": "高棉語" },
    { "language": "hi_in", "description": "天城语" },
    { "language": "fr_fr", "description": "法语" },
    { "language": "de_de", "description": "德语" },
    { "language": "tr_tr", "description": "土耳其语" }

]

if (window.localStorage.getItem('lang') == "cn") {//slot language 參數

    $(function () {
        $('.slotlanguage').bootstrapTable({//語系
            data: slotlanguage_cn
        });
    });
    } else {
        $(function () {
            $('.slotlanguage').bootstrapTable({//語系
                data: slotlanguage
            });
        });
    }


    const slotlanguage_cn = [
        { "language": "zh-hans", "description": "简体中文" },
        { "language": "en", "description": "英文" },
        // { "language": "vi", "description": "越南语" },
        // { "language": "th", "description": "泰文" },
        // { "language": "ru", "description": "俄语" },
        // { "language": "pt", "description": "葡萄牙語" },
        // { "language": "jp", "description": "日语" },
        // { "language": "in", "description": "印尼语" },
        // { "language": "es", "description": "西班牙语" }
    ]

    const slotlanguage = [
        { "language": "zh-hans", "description": "Chinese Simplified" },
        { "language": "en", "description": "English" },
        // { "language": "vi", "description": "Ting Vit" },
        // { "language": "th", "description": "Thai" },
        // { "language": "ru", "description": "Russian" },
        // { "language": "pt", "description": "Portugal" },
        // { "language": "jp", "description": "Japanese" },
        // { "language": "in", "description": "Indonesian" },
        // { "language": "es", "description": "Spanish" }
    ]