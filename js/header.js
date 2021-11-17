var lang = function (e) {
    localStorage.setItem('lang', e);
}

function chklang() {
    if (window.localStorage.getItem('lang') == "cn") {
        if (typeof change == 'function') {
            change();
        }
    } else {

    }
}

function findText() {
    const nameElement = document.getElementById("searchstr");
    const namesearch = nameElement.value;
    window.find(namesearch);
}

function findTextBefore() {
    const nameElement = document.getElementById("searchstr");
    const namesearch = nameElement.value;
    window.find(namesearch,false,true,true);
}


// const getUrlString = location.href;
// const url = new URL(getUrlString);
// const langchange = url.searchParams.get('lang');
// if (langchange == "cn") {
//     localStorage.setItem('lang', 'cn');
// } else if(langchange == "en") {
//     localStorage.setItem('lang', 'en');
// } else {
//     localStorage.setItem('lang', 'en');
// }
const h_text = document.getElementById("header");
if (window.localStorage.getItem('lang') == "cn") {
    h_text.innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="index.html"><img class="logo_img" src="img/logo.png" alt="eBET"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html" onclick="window.location.reload();">首页</a>
                </li>
                <li class="nav-item">
                        <a class="nav-link" href="precautions.html" onclick="window.location.reload();">注意事项</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">新增游戏
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="virtual_blackjack.html" onclick="window.location.reload();">电子21点</a>

                        
                        <a class="dropdown-item" href="liveblackjack.html" onclick="window.location.reload();">真人21点</a>
                        
                        <a class="dropdown-item" href="bullbull.html" onclick="window.location.reload();">牛牛</a>
                        
                        <a class="dropdown-item" href="fortune_wheel.html" onclick="window.location.reload();">财富大转盘</a>

                        <a class="dropdown-item" href="slot.html" onclick="window.location.reload();">Genesis老虎机</a>

                        <a class="dropdown-item" href="fortune_roulette.html" onclick="window.location.reload();">财富轮盘</a>

                       // <a class="dropdown-item" href="minigame.html" onclick="window.location.reload();">迷你游戏</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        操作设置
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="web_operation_settings.html" onclick="window.location.reload();">web操作设置</a>
                        <a class="dropdown-item" href="app_operation_settings.html" onclick="window.location.reload();">app操作设置</a>
                        <a class="dropdown-item" href="background_operation.html" onclick="window.location.reload();">数据后台说明书</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        API
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="apinote.html" onclick="window.location.reload();">API注意事项</a>
                    <a class="dropdown-item" href="ebet_request.html" onclick="window.location.reload();">eBET请求</a>
                    <a class="dropdown-item" href="channel_request.html" onclick="window.location.reload();">渠道请​​求</a>
                    <a class="dropdown-item" href="common_parameter.html" onclick="window.location.reload();">共用参数说明</a>
                    <a class="dropdown-item" href="parameter_description.html" onclick="window.location.reload();">参数说明</a>
                    <a class="dropdown-item" href="game_related_instructions.html" onclick="window.location.reload();">游戏相关说明</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        备注
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <!-- <a class="dropdown-item" href="faq.html" onclick="window.location.reload();">FAQ</a> -->
                        <a class="dropdown-item" href="example.html" onclick="window.location.reload();">参考代码</a>
                        <a class="dropdown-item" href="signature.html" onclick="window.location.reload();">签名测试</a>
                        <a class="dropdown-item" href="update.html" onclick="window.location.reload();">更新纪录</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        语系
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a href="javascript:window.location.reload()" class="dropdown-item" onclick="window.lang('cn')">简中</a>
                        <a href="javascript:window.location.reload()" class="dropdown-item" onclick="window.lang('')">英文</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        search
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <form class="form-inline">
                    <input id="searchstr" style="width:100%" class="form-control" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="button" onClick='findText()'>搜寻</button>
                    <button class="btn btn-outline-success" type="button" onClick='findTextBefore()'>向前搜寻</button>
                    </form>
                    </div>
                </li>
            </ul>
        </div>
    </nav>`;
} else {
    h_text.innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="index.html"><img class="logo_img" src="img/logo.png" alt="eBET"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="index.html" onclick="window.location.reload();">Home</a>
                </li>
                <li class="nav-item">
                        <a class="nav-link" href="precautions.html" onclick="window.location.reload();">Precautions</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">New game
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="virtual_blackjack.html" onclick="window.location.reload();">Virtual Blackjack</a>

                        <a class="dropdown-item" href="liveblackjack.html" onclick="window.location.reload();">Live BlackJack </a>

                        <a class="dropdown-item" href="bullbull.html" onclick="window.location.reload();">BullBull</a>

                        <a class="dropdown-item" href="fortune_wheel.html" onclick="window.location.reload();">Fortune Wheel</a>

                        <a class="dropdown-item" href="slot.html" onclick="window.location.reload();">Genesis slot</a>

                        <a class="dropdown-item" href="fortune_roulette.html" onclick="window.location.reload();">Fortune Roulette</a>

                      //  <a class="dropdown-item" href="minigame.html" onclick="window.location.reload();">Mini-game</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Operation settings
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown" onclick="window.location.reload();">
                        <a class="dropdown-item" href="web_operation_settings.html" onclick="window.location.reload();">Web operation settings</a>
                        <a class="dropdown-item" href="app_operation_settings.html" onclick="window.location.reload();">App operation settings</a>
                        <a class="dropdown-item" href="background_operation.html" onclick="window.location.reload();">Backend Office User Guide</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        API
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="apinote.html" onclick="window.location.reload();">API considerations</a>
                        <a class="dropdown-item" href="ebet_request.html" onclick="window.location.reload();">eBET request</a>
                        <a class="dropdown-item" href="channel_request.html" onclick="window.location.reload();">Channel request</a>
                        <a class="dropdown-item" href="common_parameter.html" onclick="window.location.reload();">Common parameter description</a>
                        <a class="dropdown-item" href="parameter_description.html" onclick="window.location.reload();">Parameter description</a>
                        <a class="dropdown-item" href="game_related_instructions.html" onclick="window.location.reload();">Game related instructions</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Remark
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <!-- <a class="dropdown-item" href="faq.html" onclick="window.location.reload();">FAQ</a> -->
                        <a class="dropdown-item" href="example.html" onclick="window.location.reload();">Reference Code</a>
                        <a class="dropdown-item" href="signature.html" onclick="window.location.reload();">Signature test</a>
                        <a class="dropdown-item" href="update.html" onclick="window.location.reload();">Update history</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Language
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a href="javascript:window.location.reload()" class="dropdown-item" onclick="window.lang('cn')">CN</a>
                        <a href="javascript:window.location.reload()" class="dropdown-item" onclick="window.lang('')">EN</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        search
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <form class="form-inline">
                    <input id="searchstr" style="width:100%" class="form-control" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="button" onClick='findText()'>Search</button>
                    <button class="btn btn-outline-success" type="button" onClick='findTextBefore()'>Before</button>
                    </form>
                    </div>
                </li>
            </ul>
        </div>
    </nav>`;
}

