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
                    <a class="nav-link" href="index.html">首页</a>
                </li>
                <li class="nav-item">
                        <a class="nav-link" href="precautions.html?ran=" onclick="this.href+=Math.random();">注意事项</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">新增游戏
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="blackjack.html">电子21点</a>

                        
                        <!--
                        <a class="dropdown-item" href="liveblackjack.html">真人21点</a>
                        -->
                        
                        <a class="dropdown-item" href="bullbull.html">牛牛</a>
                        
                        <!--
                        <a class="dropdown-item" href="fortune_wheel.html">财富大转盘</a>
                        -->
                        <a class="dropdown-item" href="slot.html">Genesis老虎机</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        操作设置
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="web_operation_settings.html">web操作设置</a>
                        <a class="dropdown-item" href="app_operation_settings.html">app操作设置</a>
                        <a class="dropdown-item" href="background_operation.html">数据后台说明书</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        API
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="apinote.html">API注意事项</a>
                    <a class="dropdown-item" href="ebet_request.html">eBET请求</a>
                    <a class="dropdown-item" href="channel_request.html">渠道请​​求</a>
                    <a class="dropdown-item" href="common_parameter.html">共用参数说明</a>
                    <a class="dropdown-item" href="parameter_description.html">参数说明</a>
                    <a class="dropdown-item" href="game_related_instructions.html">游戏相关说明</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        备注
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <!-- <a class="dropdown-item" href="faq.html">FAQ</a> -->
                        <a class="dropdown-item" href="example.html">参考代码</a>
                        <a class="dropdown-item" href="update.html">更新纪录</a>
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
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                        <a class="nav-link" href="precautions.html">Precautions</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">New game
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="blackjack.html">BlackJack</a>

                        <!--
                        <a class="dropdown-item" href="liveblackjack.html">Live BlackJack </a>
                        -->

                        <a class="dropdown-item" href="bullbull.html">BullBull</a>

                        <!--
                        <a class="dropdown-item" href="fortune_wheel.html">Fortune Wheel</a>
                        -->
                        <a class="dropdown-item" href="slot.html">Genesis slot</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Operation settings
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="web_operation_settings.html">Web operation settings</a>
                        <a class="dropdown-item" href="app_operation_settings.html">App operation settings</a>
                        <a class="dropdown-item" href="background_operation.html">Backend Office User Guide</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        API
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="apinote.html">API considerations</a>
                        <a class="dropdown-item" href="ebet_request.html">eBET request</a>
                        <a class="dropdown-item" href="channel_request.html">Channel request</a>
                        <a class="dropdown-item" href="common_parameter.html">Common parameter description</a>
                        <a class="dropdown-item" href="parameter_description.html">Parameter description</a>
                        <a class="dropdown-item" href="game_related_instructions.html">Game related instructions</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Remark
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <!-- <a class="dropdown-item" href="faq.html">FAQ</a> -->
                        <a class="dropdown-item" href="example.html">Reference Code</a>
                        <a class="dropdown-item" href="update.html">Update history</a>
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

