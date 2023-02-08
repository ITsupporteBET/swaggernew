if (window.localStorage.getItem('lang') == "cn") {
  $(function () {
    $('.type').bootstrapTable({//事務類型
        data: type_cn
    });
  });
} else {
  $(function () {
    $('.type').bootstrapTable({//事務類型
        data: type
    });
  });
}
const type = [
  {
    "Code": 1,
    "Type": "Bet",
    "description": "This type is normal game bet type",
    "Occurrence": "When the player clicks to confirm the bet, the relevant record will be recorded."
  },
  {
    "Code": 2,
    "Type": "Payout",
    "description": "This type is normal game payout type",
    "Occurrence": "Pay to the user after the end of the round calculation"
  },
  {
    "Code": 3,
    "Type": "Tips",
    "description": "This type is player give dealer's award<br>(Only VIP tables can give rewards)",
    "Occurrence": "Rewarding the dealer during the betting period"
  },
  {
    "Code": 6,
    "Type": "Bet Award",
    "description": "This award is player bet accumulation to a target, will give use this type to award",
    "Occurrence": "1. Set the fulfillment conditions in the ebet backend\n2. After the condition is met, send automatically"
  },
  {
    "Code": 8,
    "Type": "Match Fee",
    "description": "When the player enters the room, a registration fee will be deducted",
    "Occurrence": "Registration fee to participate in any contest"
  },
  {
    "Code": 9,
    "Type": "Match Refund",
    "description": "When the player’s remaining amount in the match game will be returned to the player’s wallet.",
    "Occurrence": "Return of the gold after the competition mode contest"
  },
  {
    "Code": 11,
    "Type": "RefundwhenBetErr",
    "description": "This type is currently only sent when the withholding is successful but the bet fails.",
    "Occurrence": "An error occurred during the bet and the deducted portion was returned"
  },
  {
    "Code": 12,
    "Type": "bonusWin",
    "description": "Jackpot bonus",
    "Occurrence": "Sent when the jackpot is won (slots only)"
  },
  {
    "Code": 14,
    "Type": "MatchAward",
    "description": "match game bonus giving (Please search with 15 together when taking the information.)",
    "Occurrence": "Send rewards by ebet backend"
  },
  {
    "Code": 15,
    "Type": "getBackMatchAward",
    "description": "match game bonus retrieve (Please search with 14 together when taking the information.)",
    "Occurrence": "If there is a problem with the ebet backend sending a reward, use this type to cancel related rewards"
  },
  {
    "Code": 22,
    "Type": "swrefund",
    "description": "This type is bet fail refund.<br>For query use only",
    "Occurrence": "The channel returns the status that has been processed in the refund request and the ebet record is refunded"
  },
  {
    "Code": 23,
    "Type": "Lucky Red Packet",
    "description": "Lucky Red Packet",
    "Occurrence": "1. ebet personnel set conditions on the backend<br>2. Randomly send after reaching the condition"
  },
  {
    "Code": 24,
    "Type": "Limited Red Packet",
    "description": "Limited Red Packet",
    "Occurrence": "1. ebet personnel set conditions on the backend<br>2. Randomly send after reaching the condition"
  },
  {
    "Code": 27,
    "Type": "withholding",
    "description": "Withholding",
    "Occurrence": "The amount deducted in advance when betting on a specified bet item"
  },
  {
    "Code": 28,
    "Type": "withholdingRefund",
    "description": "Withholding Refund",
    "Occurrence": "Return the remaining pre-deductible amount"
  },
  {
    "Code": 30,
    "Type": "Channel lucky Red Packet",
    "description": "Lucky Red Packet",
    "Occurrence": "1.Types of activities that can be started on the eBET backend<br>2. Randomly send after reaching the condition"
  },
  {
    "Code": 31,
    "Type": "Channel limited Red Packet",
    "description": "Limited Red Packet",
    "Occurrence": "1. Types of activities that can be started on the eBET backend<br>2. Randomly send after reaching the condition"
  },
  {
    "Code": 37,
    "Type": "Reissue difference amount",
    "description": "Reissue the difference after the correction round result",
    "Occurrence": "After the round result is corrected, the payout amount needs to be recalculated and the difference reissued"
  },
  {
    "Code": 38,
    "Type": "Treasure",
    "description": "eBET event: Treasure",
    "Occurrence": "Treasure bonus will be issued at the end of the round"
  },
  {
    "Code": 41,
    "Type": "Rebate",
    "description": "eBET event: Treasure",
    "Occurrence": "The system will return rebate to the player according to the percentage set in the background according to the player's betting amount, but the additional amount must be paid by the channel self"
  }
]

const type_cn = [
  { "Code": "1", "Type": "投注", "description": "用户进行投注的纪录", "Occurrence": "当玩家点击确认下注时会记录相关" },
  { "Code": "2", "Type": "派彩", "description": "派彩给用户的纪录", "Occurrence": "在牌局结束计算后派彩给用户" },
  { "Code": "3", "Type": "打赏", "description": "用户打赏荷官的纪录 （仅VIP桌可以打赏）", "Occurrence": "在投注期间打赏给荷官" },
  { "Code": "4", "Type": "轉入", "description": "转入金额到用户钱包", "Occurrence": "在充值api中，金额为正数的纪录" },
  { "Code": "5", "Type": "轉出", "description": "从用户钱包转出金额", "Occurrence": "在充值api中，金额为负数的纪录" },
  { "Code": "6", "Type": "投注奖励", "description": "达成条件后赠送的奖励", "Occurrence": "1.在ebet后台设定达成条件<br>2.投注到达成条件后自动发送" },
  { "Code": "8", "Type": "大赛报名费", "description": "大赛报名费", "Occurrence": "参加任意大赛的报名费用" },
  { "Code": "9", "Type": "大赛持有金返还", "description": "比拼大赛持有金返还", "Occurrence": "比拼模式大赛结束后返还持有金" },
  { "Code": "11", "Type": "下注错误退还", "description": "下注错误退还", "Occurrence": "在投注期间发生错误，返还已扣除的部分" },
  { "Code": "12", "Type": "bonusWin", "description": "Jackpot獎池中獎", "Occurrence": "Jackpot獎池中獎時發送(僅老虎機)" },
  { "Code": "14", "Type": "大赛派彩", "description": "大赛派彩（和15一起捞取）", "Occurrence": "由ebet后台发送大赛奖励" },
  { "Code": "15", "Type": "大赛奖金取回", "description": "大赛奖金取回（和14一起捞取）", "Occurrence": "若ebet后台发送大赛奖励有问题时， 使用这个事物类型取消相关奖励" },
  { "Code": "22", "Type": "下注失败退款", "description": "下注失败已经退还的纪录（仅供查询用）", "Occurrence": "渠道在退款请求中返回已处理，ebet纪录为已退款的状态" },
  { "Code": "23", "Type": "幸运红包", "description": "发送幸运红包的纪录", "Occurrence": "1.ebet人员在后台设定达成条件<br>2.达到条件后随机发送" },
  { "Code": "24", "Type": "限量红包", "description": "发送限量红包的纪录", "Occurrence": "1.ebet人员在后台设定达成条件<br>2.达到条件后随机发送" },
  { "Code": "27", "Type": "预扣", "description": "预扣", "Occurrence": "投注指定投注项目时，预先扣除的金额" },
  { "Code": "28", "Type": "预扣返还", "description": "预扣返还", "Occurrence": "返还剩余的预先扣除金额" },
  { "Code": "30", "Type": "渠道幸运红包", "description": "发送幸运红包的纪录", "Occurrence": "1.在ebet后台设定达成条件<br>2.达到条件后随机发送" },
  { "Code": "31", "Type": "渠道限量红包", "description": "发送限量红包的纪录", "Occurrence": "1.在ebet后台设定达成条件<br>2.达到条件后随机发送" },
  { "Code": "37", "Type": "补发金额", "description": "补发牌局结果修正后的差额", "Occurrence": "牌局结果修正后需重新计算派彩金额并补发差额" },
  { "Code": "38", "Type": "宝箱奖金发派", "description": "宝箱活动的奖金发派", "Occurrence": "牌局结束后会发放宝箱活动的奖金" },
  { "Code": "41", "Type": "返水", "description": "系统会根据玩家的投注额，照后台设定的百分比去返水给玩家，但这额外的金额须由渠道方自行支付", "Occurrence": "牌局结束后会发放宝箱活动的奖金" }
]