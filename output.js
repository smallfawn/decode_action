//Fri Jun 28 2024 07:47:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("顺丰速运"),
  ckName = "sfsy_data",
  userCookie = $.toObj($.isNode() ? process.env[ckName] : $.getdata(ckName)) || [];
$.userIdx = 0;
$.userList = [];
$.notifyMsg = [];
$.succCount = 0;
const notify = $.isNode() ? require("./sendNotify") : "";
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
$.is_bee = ($.isNode() ? process.env.sfsy_bee : $.getdata("sfsy_bee")) || "false";
$.is_account = ($.isNode() ? process.env.sliverkiss_account : $.getdata("sliverkiss_account")) || "false";
$.unTaskList = ["完成连签7天", "参与积分活动", "每月累计寄件", "完成每月任务", "与好友微信分享会员福利", "DAILY_VIP_TASK_TYPE", "去新增一个收件偏好", "用行业模板寄件下单", "用积分兑任意礼品", "领任意生活特权福利", "设置你的顺丰ID"];
async function main() {
  if ($.userList.length > 5 && $.is_account == "false") {
    return;
  }
  for (let _0x16bed4 of $.userList) {
    try {
      await _0x16bed4.refresh_cookie();
      if (_0x16bed4.ckStatus) {
        let {
          usablePoint: _0x49b989
        } = await _0x16bed4.queryUserInfo();
        await _0x16bed4.superWelfare_receiveRedPacket();
        await _0x16bed4.automaticSignFetchPackage();
        await _0x16bed4.memberDay_index();
        if ($.is_bee != "false") {
          await _0x16bed4.bee_indexData();
        }
        await _0x16bed4.coupon_list();
        let _0x3bac91 = await _0x16bed4.queryUserInfo();
        $.succCount++;
        DoubleLog("[" + _0x16bed4.userName + "] 积分+" + (_0x3bac91?.["usablePoint"] - 0 - _0x49b989 ?? 0) + "  蜂蜜+" + ($.beeHoney ?? 0));
      } else {
        DoubleLog("⛔️ 「" + (_0x16bed4.userName ?? "账号" + index) + "」签到失败, 用户需要去登录");
      }
    } catch (_0x4c5880) {
      throw _0x4c5880;
    }
  }
  $.title = "共" + $.userList.length + "个账号,成功" + $.succCount + "个,失败" + ($.userList.length - 0 - $.succCount) + "个";
  await sendMsg($.notifyMsg.join("\n"), {
    $media: $.avatar
  });
}
const _0x5ee1f2 = {
  token: "wwesldfs29aniversaryvdld29",
  sysCode: "MCS-MIMP-CORE",
  channel: "wxwd26mem1"
};
class UserInfo {
  constructor(_0x1398b2) {
    this.index = ++$.userIdx;
    this.token = "" || _0x1398b2.token || _0x1398b2;
    this.sfsyUrl = _0x1398b2.token;
    this.userId = "" || _0x1398b2.userId;
    this.deviceId = randomPattern("xxxxxxxx-xxxx-xxxx");
    this.memberDay_black = false;
    this.memberDay_redPacket_drewToday = false;
    this.memberDay_redPacket_map = {};
    this.userIdList = [];
    this.userName = _0x1398b2.userName;
    this.avatar = _0x1398b2.avatar;
    this.ckStatus = true;
    this.baseUrl = "";
    this.headers = {};
    this.fetch = async _0x453f87 => {
      try {
        if (typeof _0x453f87 === "string") {
          _0x453f87 = {
            url: _0x453f87
          };
        }
        if (_0x453f87?.["url"]?.["startsWith"]("/") || _0x453f87?.["url"]?.["startsWith"](":")) {
          _0x453f87.url = this.baseUrl + _0x453f87.url;
        }
        const _0x31991c = {
          ..._0x453f87,
          headers: _0x453f87.headers || this.headers,
          url: _0x453f87.url
        };
        const _0x1f1611 = await Request(_0x31991c);
        debug(_0x1f1611, _0x453f87?.["url"]?.["replace"](/\/+$/, "")["substring"](_0x453f87?.["url"]?.["lastIndexOf"]("/") + 1));
        return _0x1f1611;
      } catch (_0x18e12b) {
        this.ckStatus = false;
        $.log("[" + (this.userName || this.index) + "][ERROR] 请求发起失败!" + _0x18e12b + "\n");
      }
    };
  }
  async refresh_cookie() {
    try {
      const _0x31094a = {
        url: this.sfsyUrl,
        type: "get",
        resultType: "all",
        followRedirect: false
      };
      let _0x3f5a16 = await this.fetch(_0x31094a),
        _0x1bea50 = ObjectKeys2LowerCase(_0x3f5a16?.["headers"]),
        _0x478f9f = getQueries(_0x1bea50.location);
      debug(_0x478f9f);
      if (_0x3f5a16.status != 302) {
        throw "登录失败";
      }
      this.userName = _0x478f9f.mobile;
      $.log("[" + (this.userName || this.index) + "][INFO] 登录成功");
      return _0x478f9f;
    } catch (_0x1868e4) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x1868e4 + "\n");
    }
  }
  getSign(_0x1f30dc = _0x5ee1f2) {
    let _0xca45f7 = Date.now(),
      {
        token: _0x11283d,
        sysCode: _0x1966ab,
        channel: _0x3a5f23
      } = _0x1f30dc,
      _0x333657 = "token=" + _0x11283d + "&timestamp=" + _0xca45f7 + "&sysCode=" + _0x1966ab,
      _0x353638 = $.CryptoJS.MD5(_0x333657).toString($.CryptoJS.enc.Hex);
    const _0x315559 = {
      platform: "MINI_PROGRAM",
      channel: _0x3a5f23,
      sysCode: _0x1966ab,
      timestamp: _0xca45f7,
      signature: _0x353638
    };
    return _0x315559;
  }
  async queryUserInfo() {
    try {
      const _0x241c0a = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberIntegral~userInfoService~queryUserInfo",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {
          sysCode: "ESG-CEMP-CORE",
          optionalColumns: ["usablePoint", "cycleSub", "leavePoint"],
          token: "zeTLTYeG0bLetfRk"
        }
      };
      let _0x1256c3 = await this.fetch(_0x241c0a);
      if (_0x1256c3.success) {
        const {
            usablePoint: _0x3d2df2,
            cycleSub: _0xf1ccaa,
            leavePoint: _0x2d8b77,
            pointClearCycle: _0xb958b9
          } = _0x1256c3.obj,
          _0x3a7573 = this.userName || this.index;
        let _0x57b12b = "[" + _0x3a7573 + "][INFO] 积分: " + _0x3d2df2;
        const _0x47460e = _0x2d8b77 - _0xf1ccaa,
          _0x4a1647 = new Date(_0xb958b9 + " 00:00:00");
        _0x4a1647.setFullYear(_0x4a1647.getFullYear() + 1);
        _0x47460e > 0 && _0x4a1647.getTime() > Date.now() && (_0x57b12b += ", 有" + _0x47460e + "积分将在" + _0x4a1647.toLocaleDateString("zh-CN") + "过期");
        $.log(_0x57b12b);
      }
      return _0x1256c3.obj;
    } catch (_0x5e2037) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x5e2037 + "\n");
    }
  }
  async superWelfare_receiveRedPacket() {
    try {
      const _0x30b3c7 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberActLengthy~redPacketActivityService~superWelfare~receiveRedPacket",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {
          channel: "czflqdlhbxcx"
        }
      };
      let _0x3397f9 = await this.fetch(_0x30b3c7);
      if (_0x3397f9.success) {
        let _0x11d053 = _0x3397f9.obj.giftList;
        if (_0x3397f9.obj.extraGiftList?.["length"]) {
          _0x11d053 = _0x11d053.concat(_0x3397f9.obj.extraGiftList);
        }
        const _0xf39a7e = _0x11d053.map(_0x51f3dc => _0x51f3dc.giftName).join(", "),
          _0x143aa0 = _0x3397f9.obj.receiveStatus == 1 ? "领取成功" : "已领取过";
        $.log("[" + (this.userName || this.index) + "][INFO] 超值福利签到[" + _0x143aa0 + "]: " + _0xf39a7e);
      } else {
        $.log("[" + (this.userName || this.index) + "][ERROR] 超值福利签到失败: " + (_0x3397f9.errorMessage || JSON.stringify(_0x3397f9) || "无返回"));
      }
    } catch (_0x1c0f12) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x1c0f12 + "\n");
    }
  }
  async automaticSignFetchPackage(_0x1a694a = {}) {
    try {
      const _0x14998e = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskSignPlusService~automaticSignFetchPackage",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {
          comeFrom: _0x1a694a.comeFrom || "vioin",
          channelFrom: _0x1a694a.channelFrom || "SFAPP"
        }
      };
      let _0x538948 = await this.fetch(_0x14998e);
      if (!_0x538948?.["success"]) {
        throw new Error("查询签到失败: " + (_0x538948.errorMessage || JSON.stringify(_0x538948) || "无返回"));
      }
      if (_0x538948.obj.hasFinishSign) {
        $.log("[" + (this.userName || this.index) + "][INFO] 今天已签到");
      } else {
        if (_0x538948.obj.integralTaskSignPackageVOList?.["length"]) {
          const _0x3d58cb = _0x538948.obj.integralTaskSignPackageVOList.map(_0x887b20 => _0x887b20.packetName).join(", ");
          $.log("[" + (this.userName || this.index) + "][INFO] 签到获得: " + _0x3d58cb);
        }
      }
      await this.queryPointTaskAndSignFromES();
      const _0x4f393e = {
        channelType: 3
      };
      await this.queryPointTaskAndSignFromES(_0x4f393e);
      await this.queryUserInfo();
    } catch (_0x27bae3) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x27bae3 + "\n");
    }
  }
  async queryPointTaskAndSignFromES(_0x4e67ea = {}) {
    try {
      const _0x3ea330 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~queryPointTaskAndSignFromES",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {
          deviceId: this.deviceId,
          channelType: String(_0x4e67ea.channelType || 1)
        }
      };
      let _0x1cdfaa = await this.fetch(_0x3ea330);
      if (!_0x1cdfaa?.["success"]) {
        throw new Error("[" + (this.userName || this.index) + "][ERROR] 查询任务失败: " + (_0x1cdfaa.errorMessage || JSON.stringify(_0x1cdfaa) || "无返回"));
      }
      for (const _0x25b1a3 of _0x1cdfaa.obj.taskTitleLevels) {
        switch (_0x25b1a3.status) {
          case 2:
            if ($.unTaskList.includes(_0x25b1a3.title)) {
              break;
            }
            await this.finishTask(_0x25b1a3);
          case 1:
            await this.fetchIntegral(_0x25b1a3);
            break;
          case 3:
            break;
          default:
            $.log("[" + (this.userName || this.index) + "][ERROR] 任务[" + _0x25b1a3.title + "] -- 未知状态[" + _0x25b1a3.status + "]");
            break;
        }
      }
    } catch (_0x489823) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x489823 + "\n");
    }
  }
  async finishTask(_0x313223) {
    try {
      const _0x55dbf4 = {
        taskCode: _0x313223.taskCode
      };
      const _0x81a16b = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonRoutePost/memberEs/taskRecord/finishTask",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: _0x55dbf4
      };
      let _0x49f1ac = await this.fetch(_0x81a16b);
      if (!_0x49f1ac.success) {
        throw new Error("完成任务[" + _0x313223.title + "]失败: " + (_0x49f1ac.errorMessage || JSON.stringify(_0x49f1ac) || "无返回"));
      }
      $.log("[" + (this.userName || this.index) + "][INFO] 完成任务[" + _0x313223.title + "]成功");
    } catch (_0x4d36af) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x4d36af + "\n");
    }
  }
  async fetchIntegral(_0xa141e) {
    try {
      const _0x42d9ee = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~integralTaskStrategyService~fetchIntegral",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {
          strategyId: _0xa141e.strategyId,
          taskId: _0xa141e.taskId,
          taskCode: _0xa141e.taskCode,
          deviceId: this.deviceId
        }
      };
      let _0x58f8cf = await this.fetch(_0x42d9ee);
      if (!_0x58f8cf.success) {
        throw new Error("领取任务[" + _0xa141e.title + "]奖励失败: " + (_0x58f8cf.errorMessage || JSON.stringify(_0x58f8cf) || "无返回"));
      }
      $.log("[" + (this.userName || this.index) + "][INFO] 领取任务[" + _0xa141e.title + "]奖励: " + _0x58f8cf.obj.point + "积分");
    } catch (_0x4a1dd3) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x4a1dd3 + "\n");
    }
  }
  async memberDay_task(_0x318242 = {}) {
    const _0x1bec08 = new Date().getDate();
    if (_0x1bec08 >= 26 && _0x1bec08 <= 28) {
      await this.memberDay_index();
    }
  }
  async memberDay_index() {
    try {
      const _0x45c7b7 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayIndexService~index",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {}
      };
      let _0x4a223d = await this.fetch(_0x45c7b7);
      if (_0x4a223d?.["success"]) {
        let {
          lotteryNum = 0
        } = _0x4a223d.obj || {};
        await this.memberDay_redPacketReceivedStatus();
        $.log("[" + (this.userName || this.index) + "][ERROR] 会员日可以抽奖" + lotteryNum + "次");
        while (lotteryNum-- > 0) {
          await this.memberDay_lottery();
        }
        if (this.memberDay_black) {
          return;
        }
        await this.memberDay_taskList();
        if (this.memberDay_black) {
          return;
        }
        await this.memberDay_redPacketStatus();
      } else {
        const _0x3e3473 = _0x4a223d?.["errorMessage"] || (_0x4a223d ? JSON.stringify(_0x4a223d) : "无返回");
        $.log("[" + (this.userName || this.index) + "][ERROR] 查询会员日失败: " + _0x3e3473);
        _0x3e3473?.["includes"]("没有资格参与活动") && (this.memberDay_black = true, $.log("[" + (this.userName || this.index) + "][ERROR] 会员日任务风控"));
      }
    } catch (_0x172476) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x172476 + "\n");
    }
  }
  async memberDay_redPacketReceivedStatus() {
    try {
      const _0x1d9627 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~redPacketReceivedStatus",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {}
      };
      let _0x2a85a2 = await this.fetch(_0x1d9627);
      if (_0x2a85a2?.["success"]) {
        for (let _0x331535 of _0x2a85a2?.["obj"] || []) {
          if (_0x331535.received) {
            continue;
          }
          let _0x453e01 = new Date().getHours();
          if (_0x331535.receiveHour === _0x453e01) {
            await this.memberDay_receiveRedPacket(_0x331535.receiveHour);
          }
        }
      } else {
        let _0x3fb90b = _0x2a85a2?.["errorMessage"] || (_0x2a85a2 ? JSON.stringify(_0x2a85a2) : "无返回");
        $.log("[" + (this.userName || this.index) + "][ERROR] 会员日查询整点领红包失败: " + _0x3fb90b);
        if (_0x3fb90b.includes("没有资格参与活动")) {
          this.memberDay_black = true;
          $.log("[" + (this.userName || this.index) + "][ERROR] 会员日任务风控");
        }
      }
    } catch (_0x533d54) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x533d54 + "\n");
    }
  }
  async memberDay_receiveRedPacket(_0x5f5635) {
    try {
      const _0x233940 = {
        receiveHour: _0x5f5635
      };
      const _0x2e4fb0 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayTaskService~receiveRedPacket",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: _0x233940
      };
      let _0x492f8c = await this.fetch(_0x2e4fb0);
      if (_0x492f8c?.["success"]) {
        $.log("[" + (this.userName || this.index) + "][INFO] 会员日领取" + _0x5f5635 + "点红包成功");
      } else {
        let _0x212d12 = _0x492f8c?.["errorMessage"] || (_0x492f8c ? JSON.stringify(_0x492f8c) : "无返回");
        $.log("[" + (this.userName || this.index) + "][ERROR] 会员日领取" + _0x5f5635 + "点红包失败: " + _0x212d12);
        _0x212d12.includes("没有资格参与活动") && (this.memberDay_black = true, $.log("[" + (this.userName || this.index) + "][ERROR] 会员日任务风控"));
      }
    } catch (_0x57d4c2) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x57d4c2 + "\n");
    }
  }
  async memberDay_lottery() {
    try {
      const _0x276b2b = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayLotteryService~lottery",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {}
      };
      let _0x47164f = await this.fetch(_0x276b2b);
      if (_0x47164f?.["success"]) {
        let {
          productName = "空气"
        } = _0x47164f?.["obj"] || {};
        const _0x3e3f6a = {
          notify: true
        };
        $.log("[" + (this.userName || this.index) + "][INFO] 会员日抽奖: " + productName, _0x3e3f6a);
      } else {
        let _0x343cd9 = _0x47164f?.["errorMessage"] || (_0x47164f ? JSON.stringify(_0x47164f) : "无返回");
        $.log("[" + (this.userName || this.index) + "][ERROR] 会员日抽奖失败: " + _0x343cd9);
        if (_0x343cd9.includes("没有资格参与活动")) {
          this.memberDay_black = true;
          $.log("[" + (this.userName || this.index) + "][ERROR] 会员日任务风控");
        }
      }
    } catch (_0x32c696) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x32c696 + "\n");
    }
  }
  async memberDay_taskList() {
    try {
      const _0xd6977b = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~taskList",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {
          activityCode: "MEMBER_DAY",
          channelType: "MINI_PROGRAM"
        }
      };
      let _0x39c679 = await this.fetch(_0xd6977b);
      if (_0x39c679?.["success"]) {
        let _0x402431 = _0x39c679?.["obj"] || [];
        for (let _0x3852b3 of _0x402431.filter(_0xa5cb50 => _0xa5cb50.status == 1)) {
          if (this.memberDay_black) {
            return;
          }
          await this.memberDay_fetchMixTaskReward(_0x3852b3);
        }
        for (let _0x6139df of _0x402431.filter(_0x46e068 => _0x46e068.status == 2)) {
          if (this.memberDay_black) {
            return;
          }
          switch (_0x6139df.taskType) {
            case "SEND_SUCCESS":
            case "INVITEFRIENDS_PARTAKE_ACTIVITY":
            case "OPEN_SVIP":
            case "OPEN_NEW_EXPRESS_CARD":
            case "OPEN_FAMILY_CARD":
            case "CHARGE_NEW_EXPRESS_CARD":
            case "INTEGRAL_EXCHANGE":
              break;
            default:
              for (let _0x3164e7 = 0; _0x3164e7 < _0x6139df.restFinishTime && !this.memberDay_black; _0x3164e7++) {
                await this.memberDay_finishTask(_0x6139df);
              }
              break;
          }
        }
      } else {
        let _0x521474 = _0x39c679?.["errorMessage"] || (_0x39c679 ? JSON.stringify(_0x39c679) : "无返回");
        $.log("[" + (this.userName || this.index) + "][ERROR] 查询会员日任务失败: " + _0x521474);
        if (_0x521474.includes("没有资格参与活动")) {
          this.memberDay_black = true;
          $.log("[" + (this.userName || this.index) + "][ERROR] 会员日任务风控");
        }
      }
    } catch (_0x1e5450) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x1e5450 + "\n");
    }
  }
  async memberDay_fetchMixTaskReward(_0x2a9d18) {
    try {
      const _0x5bb957 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~activityTaskService~fetchMixTaskReward",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {
          taskType: _0x2a9d18.taskType,
          activityCode: "MEMBER_DAY",
          channelType: "MINI_PROGRAM"
        }
      };
      let _0x4346ca = await this.fetch(_0x5bb957);
      if (_0x4346ca?.["success"]) {
        $.log("[" + (this.userName || this.index) + "][INFO] 领取会员日任务[" + _0x2a9d18.taskName + "]奖励成功");
      } else {
        let _0x38771c = _0x4346ca?.["errorMessage"] || (_0x4346ca ? JSON.stringify(_0x4346ca) : "无返回");
        $.log("[" + (this.userName || this.index) + "][ERROR] 领取会员日任务奖励失败: " + _0x38771c);
        _0x38771c.includes("没有资格参与活动") && (this.memberDay_black = true, $.log("[" + (this.userName || this.index) + "][ERROR] 会员日任务风控"));
      }
    } catch (_0x19e963) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x19e963 + "\n");
    }
  }
  async memberDay_finishTask(_0x983421) {
    try {
      const _0x854875 = {
        taskCode: _0x983421.taskCode
      };
      const _0xa45251 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: _0x854875
      };
      let _0x233ecc = await this.fetch(_0xa45251);
      if (_0x233ecc?.["success"]) {
        $.log("[" + (this.userName || this.index) + "][INFO] 完成会员日任务[" + _0x983421.taskName + "]成功");
        await this.memberDay_fetchMixTaskReward(_0x983421);
      } else {
        let _0x4b08c4 = _0x233ecc?.["errorMessage"] || (_0x233ecc ? JSON.stringify(_0x233ecc) : "无返回");
        $.log("[" + (this.userName || this.index) + "][ERROR] 完成会员日任务[" + _0x983421.taskName + "]失败: " + _0x4b08c4);
        _0x4b08c4.includes("没有资格参与活动") && (this.memberDay_black = true, $.log("[" + (this.userName || this.index) + "][ERROR] 会员日任务风控"));
      }
    } catch (_0x15a574) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x15a574 + "\n");
    }
  }
  async memberDay_redPacketStatus() {
    try {
      const _0x4263e7 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketStatus",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {}
      };
      let _0x3a4d0f = await this.fetch(_0x4263e7);
      if (_0x3a4d0f?.["success"]) {
        let {
          drewToday: _0x439fe3,
          packetList: _0x3f5438
        } = _0x3a4d0f?.["obj"];
        this.memberDay_redPacket_drewToday = _0x439fe3;
        for (let _0xfac880 of _0x3f5438) {
          this.memberDay_redPacket_map[_0xfac880.level] = _0xfac880.count;
        }
        let _0x44ede7 = 8;
        for (let _0x4270ee = 1; _0x4270ee < _0x44ede7; _0x4270ee++) {
          let _0xc1af18 = this.memberDay_redPacket_map[_0x4270ee] || 0;
          while (_0xc1af18 >= 2) {
            await this.memberDay_redPacketMerge(_0x4270ee);
            _0xc1af18 -= 2;
          }
        }
        let _0x229986 = [],
          _0x14e894 = 0;
        for (let _0x48a6af in this.memberDay_redPacket_map) {
          if (!this.memberDay_redPacket_map[_0x48a6af]) {
            continue;
          }
          _0x229986.push("[" + _0x48a6af + "级]X" + this.memberDay_redPacket_map[_0x48a6af]);
          let _0x8e3fb2 = parseInt(_0x48a6af);
          if (_0x8e3fb2 < _0x44ede7) {
            _0x14e894 += 1 << _0x8e3fb2 - 1;
          }
        }
        $.log("[" + (this.userName || this.index) + "][INFO] 会员日合成列表: " + _0x229986.join(", "));
        if (this.memberDay_redPacket_map[_0x44ede7]) {
          $.log("[" + (this.userName || this.index) + "][INFO] 会员日已拥有[" + _0x44ede7 + "级]红包X" + this.memberDay_redPacket_map[_0x44ede7]);
          await this.memberDay_redPacketDraw(_0x44ede7);
        } else {
          let _0x779223 = _0x44ede7 - _0x14e894;
          $.log("[" + (this.userName || this.index) + "][INFO] 会员日距离[" + _0x44ede7 + "级]红包还差: [1级]红包X" + _0x779223);
        }
      } else {
        let _0x384cb6 = _0x3a4d0f?.["errorMessage"] || (_0x3a4d0f ? JSON.stringify(_0x3a4d0f) : "无返回");
        $.log("[" + (this.userName || this.index) + "][ERROR] 查询会员日合成失败" + _0x384cb6);
        _0x384cb6.includes("没有资格参与活动") && (this.memberDay_black = true, $.log("[" + (this.userName || this.index) + "][ERROR] 会员日任务风控"));
      }
    } catch (_0x57cd99) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x57cd99 + "\n");
    }
  }
  async memberDay_redPacketMerge(_0x426862) {
    try {
      const _0x242125 = {
        level: _0x426862,
        num: 2
      };
      const _0x22a267 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketMerge",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: _0x242125
      };
      let _0x1d382e = await this.fetch(_0x22a267);
      if (_0x1d382e?.["success"]) {
        $.log("[" + (this.userName || this.index) + "][INFO] 会员日合成: [" + _0x426862 + "级]红包X2 -> [" + (_0x426862 + 1) + "级]红包");
        this.memberDay_redPacket_map[_0x426862] -= 2;
        !this.memberDay_redPacket_map[_0x426862 + 1] && (this.memberDay_redPacket_map[_0x426862 + 1] = 0);
        this.memberDay_redPacket_map[_0x426862 + 1]++;
      } else {
        let _0x32aea5 = _0x1d382e?.["errorMessage"] || (_0x1d382e ? JSON.stringify(_0x1d382e) : "无返回");
        $.log("[" + (this.userName || this.index) + "][ERROR] 会员日合成两个[" + _0x426862 + "级]红包失败: " + _0x32aea5);
        if (_0x32aea5.includes("没有资格参与活动")) {
          this.memberDay_black = true;
          $.log("[" + (this.userName || this.index) + "][ERROR] 会员日任务风控");
        }
      }
    } catch (_0x1b12db) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x1b12db + "\n");
    }
  }
  async memberDay_redPacketDraw(_0x4f2162) {
    try {
      const _0x4adaa5 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~memberDayPacketService~redPacketDraw",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {
          level: _0x4f2162.toString()
        }
      };
      let _0x5d690f = await this.fetch(_0x4adaa5);
      if (_0x5d690f?.["success"]) {
        let _0xf4df4a = _0x5d690f?.["obj"]?.["map"](_0x5be5e8 => _0x5be5e8.couponName) || [];
        $.log("[" + (this.userName || this.index) + "][INFO] 会员日提取[" + _0x4f2162 + "级]红包: " + (_0xf4df4a.join(", ") || "空气"));
      } else {
        let _0x569021 = _0x5d690f?.["errorMessage"] || (_0x5d690f ? JSON.stringify(_0x5d690f) : "无返回");
        $.log("[" + (this.userName || this.index) + "][ERROR] 会员日提取[" + _0x4f2162 + "级]红包失败: " + _0x569021);
        _0x569021.includes("没有资格参与活动") && (this.memberDay_black = true, $.log("[" + (this.userName || this.index) + "][ERROR] 会员日任务风控"));
      }
    } catch (_0x3845eb) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x3845eb + "\n");
    }
  }
  async bee_indexData() {
    try {
      let _0x55aee5 = randomList(this.userIdList.filter(_0x52ef50 => _0x52ef50 !== this.userId));
      const _0x1a5a1b = {
        inviteUserId: _0x55aee5
      };
      const _0x51c4e1 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~indexData",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: _0x1a5a1b
      };
      let _0x9132c0 = await this.fetch(_0x51c4e1);
      if (_0x9132c0?.["success"]) {
        let {
          friendAwards = [],
          gameNum = 0,
          usableHoney = 0,
          capacity = 0
        } = _0x9132c0?.["obj"];
        $.beeHoney = usableHoney;
        friendAwards.length > 0 && $.log("[" + (this.userName || this.index) + "][INFO] 获得奖励: " + friendAwards.map(_0x4814e7 => _0x4814e7.name).join(", "));
        $.log("[" + (this.userName || this.index) + "][INFO] 可以进行采蜜冒险 " + gameNum + " 次");
        while (gameNum-- > 0) {
          await this.bee_gameReport();
        }
        await this.bee_taskDetail();
      } else {
        $.log("[" + (this.userName || this.index) + "][ERROR] 进入采蜜游戏主页失败: " + (_0x9132c0?.["errorMessage"] || (_0x9132c0 ? JSON.stringify(_0x9132c0) : "无返回")));
        return;
      }
      let _0x38aa5d = await this.fetch(_0x51c4e1);
      if (_0x38aa5d?.["success"]) {
        for (let _0x1d4b0b of _0x38aa5d?.["obj"]?.["taskDetail"] || []) {
          await this.bee_receiveHoney(_0x1d4b0b);
        }
      } else {
        $.log("[" + (this.userName || this.index) + "][ERROR] 获取采蜜任务详情失败: " + (_0x38aa5d?.["errorMessage"] || (_0x38aa5d ? JSON.stringify(_0x38aa5d) : "无返回")));
        return;
      }
      let _0x53af1c = await this.fetch(_0x51c4e1);
      if (_0x53af1c?.["success"]) {
        $.log("[" + (this.userName || this.index) + "][INFO] 采蜜游戏丰蜜: " + (_0x53af1c?.["obj"]?.["usableHoney"] || 0));
        $.beeHoney = _0x53af1c?.["obj"]["usableHoney"] - $.beeHoney;
      } else {
        $.log("[" + (this.userName || this.index) + "][ERROR] 获取采蜜游戏丰蜜失败: " + (_0x53af1c?.["errorMessage"] || (_0x53af1c ? JSON.stringify(_0x53af1c) : "无返回")));
        return;
      }
    } catch (_0x5d19c9) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x5d19c9 + "\n");
    }
  }
  async bee_taskDetail() {
    try {
      const _0x3e602a = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~taskDetail",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {}
      };
      let _0x301612 = await this.fetch(_0x3e602a);
      if (_0x301612?.["success"]) {
        for (let _0x2a4e39 of _0x301612.obj.list) {
          if (!_0x2a4e39.taskCode) {
            continue;
          }
          switch (_0x2a4e39.status) {
            case 2:
              if ($.unTaskList.includes(_0x2a4e39.taskType)) {
                break;
              }
              await this.bee_finishTask(_0x2a4e39);
            case 1:
            case 3:
              break;
            default:
              $.log("[" + (this.userName || this.index) + "][ERROR] 任务[" + _0x2a4e39.title + "] -- 未知状态[" + _0x2a4e39.status + "]");
              break;
          }
        }
      } else {
        $.log("[" + (this.userName || this.index) + "][ERROR] 查询任务失败: " + (_0x301612?.["errorMessage"] || (_0x301612 ? JSON.stringify(_0x301612) : "无返回")));
      }
    } catch (_0x475124) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x475124 + "\n");
    }
  }
  async bee_expand() {
    try {
      const _0x4b98c7 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeApiService~expand",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: {}
      };
      let _0x1a2be3 = await this.fetch(_0x4b98c7);
      if (!_0x1a2be3?.["success"]) {
        throw new Error("采蜜扩容失败: " + (_0x1a2be3?.["errorMessage"] || _0x1a2be3));
      }
      $.log("[" + (this.userName || this.index) + "][INFO] " + "采蜜扩容成功");
    } catch (_0x4322b8) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x4322b8 + "\n");
    }
  }
  async bee_finishTask(_0x5ba214) {
    try {
      const _0x31487d = {
        taskCode: _0x5ba214.taskCode
      };
      const _0x581153 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberEs~taskRecord~finishTask",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: _0x31487d
      };
      let _0x2f733d = await this.fetch(_0x581153);
      if (!_0x2f733d?.["success"]) {
        throw new Error("完成采蜜任务失败: " + (_0x2f733d?.["errorMessage"] || _0x2f733d));
      }
      $.log("[" + (this.userName || this.index) + "][INFO] " + "完成采蜜任务[" + _0x5ba214.taskType + "]成功");
    } catch (_0x4a5b93) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x4a5b93 + "\n");
    }
  }
  async bee_receiveHoney(_0x452797) {
    try {
      const _0x4856cc = {
        taskType: _0x452797.type
      };
      const _0x1f2d5c = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeIndexService~receiveHoney",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: _0x4856cc
      };
      let _0x59ecaf = await this.fetch(_0x1f2d5c);
      if (!_0x59ecaf?.["success"]) {
        throw new Error("领取[" + _0x452797.type + "]奖励失败: " + ("" + (_0x59ecaf?.["errorMessage"] || _0x59ecaf)));
      }
      $.log("[" + (this.userName || this.index) + "][INFO] " + "领取[" + _0x452797.type + "]奖励获得: " + _0x452797.value + "丰蜜");
    } catch (_0x34837d) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x34837d + "\n");
    }
  }
  async bee_gameReport() {
    try {
      let _0x2a083d = 20;
      const _0x46349f = {
        gatherHoney: _0x2a083d
      };
      const _0x62f9b8 = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/commonPost/~memberNonactivity~receiveExchangeGameService~gameReport",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: _0x46349f
      };
      let _0x4dabb1 = await this.fetch(_0x62f9b8);
      if (!_0x4dabb1?.["success"]) {
        throw new Error("采蜜冒险失败: " + (_0x4dabb1?.["errorMessage"] || _0x4dabb1));
      }
      $.log("[" + (this.userName || this.index) + "][INFO] 采蜜冒险获得" + _0x2a083d + "丰蜜");
    } catch (_0x3015a9) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x3015a9 + "\n");
    }
  }
  async coupon_list(_0x263942 = 1, _0x2027fe = 100) {
    try {
      const _0x1baeb7 = {
        couponType: "",
        pageNo: _0x263942,
        pageSize: _0x2027fe
      };
      const _0x23977a = {
        url: "https://mcs-mimp-web.sf-express.com/mcs-mimp/coupon/available/list",
        type: "post",
        headers: {
          ...this.getSign()
        },
        dataType: "json",
        body: _0x1baeb7
      };
      let _0x3824b6 = await this.fetch(_0x23977a);
      if (!_0x3824b6.success) {
        throw new Error("查询账号券失败: " + (_0x3824b6.errorMessage || JSON.stringify(_0x3824b6) || "无返回"));
      }
      let _0x3dd68e = _0x3824b6?.["obj"] || [],
        _0x4d7ab6 = _0x3dd68e.filter(_0x34e7f4 => _0x34e7f4.couponType === "1" && _0x34e7f4.pledgeAmt >= 8);
      _0x4d7ab6.length > 0 && ($.log("[" + (this.userName || this.index) + "][INFO] 大额优惠券:"), $.log(_0x4d7ab6.map(_0x19d03a => "[" + (this.userName || this.index) + "][INFO] " + _0x19d03a.couponName + ", 过期时间: " + _0x19d03a.invalidTm).join("\n")));
    } catch (_0x315b4a) {
      this.ckStatus = false;
      $.log("[" + (this.userName || this.index) + "][ERROR] " + _0x315b4a + "\n");
    }
  }
}
async function getCookie() {
  try {
    if ($request && $request.method === "OPTIONS") {
      return;
    }
    const _0x589f43 = ObjectKeys2LowerCase($response.headers) ?? {};
    if (!_0x589f43) {
      throw new Error("错误的运行方式，请切换到cron环境");
    }
    let _0x2effa6 = getQueries(_0x589f43.location);
    $.log($.toStr(_0x2effa6));
    $.log($.toStr(_0x589f43));
    const _0x16c667 = {
        userId: _0x2effa6.userId,
        token: $request.url,
        userName: _0x2effa6?.["mobile"]
      },
      _0x426ee9 = userCookie.findIndex(_0x5375a2 => _0x5375a2.userId == _0x16c667.userId);
    userCookie[_0x426ee9] ? userCookie[_0x426ee9] = _0x16c667 : userCookie.push(_0x16c667);
    $.setjson(userCookie, ckName);
    $.msg($.name, "🎉账号[" + _0x16c667.userName + "]更新token成功!", "");
  } catch (_0x3ade75) {
    throw _0x3ade75;
  }
}
function randomPattern(_0x3c17a7, _0x8d884 = "abcdef0123456789") {
  return _0x3c17a7.split("").map(_0x4bec48 => {
    if (_0x4bec48 === "x") {
      return _0x8d884.charAt(Math.floor(Math.random() * _0x8d884.length));
    } else {
      return _0x4bec48 === "X" ? _0x8d884.charAt(Math.floor(Math.random() * _0x8d884.length)).toUpperCase() : _0x4bec48;
    }
  }).join("");
}
function phone_num(_0x591173) {
  if (_0x591173.length == 11) {
    let _0x236732 = _0x591173.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x236732;
  } else {
    return _0x591173;
  }
}
async function loadCryptoJS() {
  let _0x506037 = ($.isNode() ? require("crypto-js") : $.getdata("CryptoJS_code")) || "";
  if ($.isNode()) {
    return _0x506037;
  }
  if (_0x506037 && Object.keys(_0x506037).length) {
    console.log("[INFO] 缓存中存在CryptoJS代码, 跳过下载\n");
    eval(_0x506037);
    return createCryptoJS();
  }
  console.log("[INFO] 开始下载CryptoJS代码\n");
  return new Promise(async _0x4915bc => {
    $.getScript("https://cdn.jsdelivr.net/gh/Sliverkiss/QuantumultX@main/Utils/CryptoJS.min.js").then(_0x1915b9 => {
      $.setdata(_0x1915b9, "CryptoJS_code");
      eval(_0x1915b9);
      const _0x32addd = createCryptoJS();
      console.log("[INFO] CryptoJS加载成功, 请继续\n");
      _0x4915bc(_0x32addd);
    });
  });
}
function getQueries(_0x34a312) {
  const [, _0x5a8c5a] = _0x34a312.split("?");
  return _0x5a8c5a ? _0x5a8c5a.split("&").reduce((_0x38438c, _0x1be0b6) => {
    const [_0x4568e6, _0x33c983] = _0x1be0b6.split("=");
    _0x38438c[_0x4568e6] = _0x33c983;
    return _0x38438c;
  }, {}) : {};
}
function randomList(_0x217c5b) {
  if (!_0x217c5b.length) {
    return null;
  }
  let _0x464f34 = Math.floor(Math.random() * _0x217c5b.length);
  return _0x217c5b[_0x464f34];
}
function copy(_0x5ce176) {
  return Object.assign({}, _0x5ce176);
}
!(async () => {
  try {
    typeof $request != "undefined" ? await getCookie() : ($.CryptoJS = await loadCryptoJS(), await checkEnv(), await main());
  } catch (_0x52bf35) {
    throw _0x52bf35;
  }
})().catch(_0x376214 => {
  $.logErr(_0x376214);
  $.msg($.name, "⛔️ script run error!", _0x376214.message || _0x376214);
}).finally(async () => {
  const _0x13f7ef = {
    ok: 1
  };
  $.done(_0x13f7ef);
});
async function sendMsg(a, e) {
  a && ($.isNode() ? await notify.sendNotify($.name, a) : $.msg($.name, $.title || "", a, e));
}
function DoubleLog(o) {
  o && ($.log(`${o}`), $.notifyMsg.push(`${o}`));
}
async function checkEnv() {
  try {
    if (!userCookie?.length) {
      throw new Error("no available accounts found");
    }
    $.log(`\n[INFO] 检测到 ${userCookie?.length ?? 0} 个账号\n`);
    $.userList.push(...userCookie.map(o => new UserInfo(o)).filter(Boolean));
  } catch (o) {
    throw o;
  }
}
function debug(g, e = "debug") {
  "true" === $.is_debug && ($.log(`\n-----------${e}------------\n`), $.log("string" == typeof g ? g : $.toStr(g) || `debug error => t=${g}`), $.log(`\n-----------${e}------------\n`));
}
function ObjectKeys2LowerCase(obj) {
  return !obj ? {} : Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.toLowerCase(), v]));
}
async function Request(t) {
  "string" == typeof t && (t = {
    url: t
  });
  try {
    if (!t?.url) {
      throw new Error("[URL][ERROR] 缺少 url 参数");
    }
    let {
      url: o,
      type: e,
      headers: r = {},
      body: s,
      params: a,
      dataType: n = "form",
      resultType: u = "data"
    } = t;
    const p = e ? e?.toLowerCase() : "body" in t ? "post" : "get",
      c = o.concat("post" === p ? "?" + $.queryStr(a) : ""),
      i = t.timeout ? $.isSurge() ? t.timeout / 1000 : t.timeout : 10000;
    "json" === n && (r["Content-Type"] = "application/json;charset=UTF-8");
    const y = "string" == typeof s ? s : s && "form" == n ? $.queryStr(s) : $.toStr(s),
      l = {
        ...t,
        ...(t?.opts ? t.opts : {}),
        url: c,
        headers: r,
        ...("post" === p && {
          body: y
        }),
        ...("get" === p && a && {
          params: a
        }),
        timeout: i
      },
      m = $.http[p.toLowerCase()](l).then(t => "data" == u ? $.toObj(t.body) || t.body : $.toObj(t) || t).catch(t => $.log(`[${p.toUpperCase()}][ERROR] ${t}\n`));
    return Promise.race([new Promise((t, o) => setTimeout(() => o("当前请求已超时"), i)), m]);
  } catch (t) {
    console.log(`[${p.toUpperCase()}][ERROR] ${t}\n`);
  }
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      const i = new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
      return t.timeout ? ((t, e = 1000) => Promise.race([t, new Promise((t, s) => {
        setTimeout(() => {
          s(new Error("请求超时"));
        }, e);
      })]))(i, t.timeout) : i;
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            policy: "DIRECT",
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}