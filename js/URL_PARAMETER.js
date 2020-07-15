
const URL_PARAMETER = [{
    "title": "进入特定游戏桌列表",
    "help_message": "若想进入特定游戏，则下列参数择一加入连结即可",
    "parameter_name": "gameType",
    "parameter_description": "请参考gameType表。/n此参数适用任意平台页面且输入一个参数值为独立介面。/n此参数可输入多个参数值，进入ebet游戏后只会显示特定游戏。",
    "parameter_example": "http://<provide by ebet>&gameType=1"

}, {
    "title": "进入特定游戏桌",
    "help_message": "",
    "parameter_name": "tableCode",
    "parameter_description": "可直接进入指定的游戏桌，tableCode详细清单请和客服人员索取。/n此参数请勿和gameType并用",
    "parameter_example": "http://<provide by ebet>&tableCode=1"

}, {
    "title": "介面设置",
    "help_message": "",
    "parameter_name": "orientation",
    "parameter_description": "未携带该参数时，进入游戏时会提示选择画面呈现方式/n携带该参数进入游戏后，玩家仍可以在设置变更呈现方式",
    "parameter_example": "http://<provide by ebet>&orientation=1"

}, {
    "title": "语言设置",
    "help_message": "",
    "parameter_name": "language",
    "parameter_description": "携带该参数并在后端设定开放语言，可以使介面变更语言/n请参考language表",
    "parameter_example": "http://<provide by ebet>&language=zh_cn"
}, {
    "title": "试玩登入",
    "help_message": "",
    "parameter_name": "mode",
    "parameter_description": "携带该字串(mode=trial)可以直接使用试玩帐号登入游戏",
    "parameter_example": "http://<provide by ebet>&mode=trial"

}, {
    "title": "离开游戏后跳转的连结",
    "help_message": "",
    "parameter_name": "exitUrl",
    "parameter_description": "携带该参数并在后面添加离开的网址，就可以在玩家退出或断线游戏时，进入指定页面。/n离开的网址需要做encode，例如：https://www.google.com => https%3A%2F%2Fwww.google.com/n要使用此参数有问题时，请和ebet技术人员请求协助确认/n",
    "parameter_example": "http://<provide by ebet>&exitUrl=<provide by channel>"
}]



