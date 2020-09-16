if (window.localStorage.getItem('lang') == "cn") {
    $(function () {
        $('.config').bootstrapTable({
            data: config_cn
        });
    });
} else {
    $(function () {
        $('.config').bootstrapTable({
            data: config
        });
    });
}

const config = [{
    config_name: "Recommended internet speed",
    config_value: `
    PC（HD）: > 8Mbps<br>
    PC（SD）:（No SD option）<br>
    h5（HD） :  > 5Mbps<br>
    h5 （SD）:  > 4Mbps<br>
    No video： <  2Mb/s<br>`
}, {
    config_name: "Recommended mobile version",
    config_value: `
    iOS 11.3 or later<br>
    Android 8 or later<br>`
}, {
    config_name: "Recommended browser",
    config_value: `
    Chrome<br>
    Safari<br>`
}, {
    config_name: "System requirements",
    config_value: `
    Windows <br>
    -Windows 7, Windows 8, Windows 8.1, Windows 10 or later<br>
    -An Intel Pentium 4 processor or later that's SSE2 capable<br>
    -RAM 8G or above<br>
    Mac<br>
    -OS X Yosemite 10.10 or later<br>
    Linux<br>
    -64-bit Ubuntu 14.04+, Debian 8+, openSUSE 13.3+, or Fedora Linux 24+<br>
    -An Intel Pentium 4 processor or later that's SSE2 capable<br>`
}]

const config_cn = [{
    config_name: "建议网络速度",
    config_value: `
    PC（高清）: > 8Mbps<br>
    PC（标清）: 无标清选项<br>
    h5（高清）:  > 5Mbps<br>
    h5（标清）:  > 4Mbps<br>
    无画面： <  2Mbps<br>`
}, {
    config_name: "建议手机版本",
    config_value: `
    iOS 11.3以上<br>
    Android 8以上<br>`
}, {
    config_name: "建议浏览器",
    config_value: `
    Chrome<br>
    Safari<br>`
}, {
    config_name: "系统需求",
    config_value: `
    Windows <br>
    -Windows 7、Windows 8、Windows 8.1 或 Windows 10 以上版本<br>
    -Intel Pentium 4 以上版本处理器 (可支持 SSE2)<br>
    -RAM 8G以上<br>
    Mac<br>
    -OS X Yosemite 10.10 以上版本<br>
    Linux<br>
    -64 位 Ubuntu 14.04 以上版本、Debian 8 以上版本、openSUSE 13.3 以上版本或 Fedora Linux 24 以上版本<br>
    -Intel Pentium 4 以上版本处理器 (可支持 SSE2)<br>`
}]