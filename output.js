//Thu Aug 29 2024 06:59:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0xdfb49e = $.isNode() ? require("./jdCookie.js") : "",
  _0x4e5046 = require("./function/dylib.js"),
  _0x4f78dd = require("./USER_AGENTS");
let _0x6c2ef1 = "",
  _0xf0d10f = {};
if (process.env.DY_PROXY) try {
  require("https-proxy-agent");
  _0xf0d10f = require("./function/proxy.js");
  $.dget = _0xf0d10f.intoRequest($.get.bind($));
  $.dpost = _0xf0d10f.intoRequest($.post.bind($));
} catch {
  $.log("未安装https-proxy-agent依赖，无法启用代理");
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
let _0x26db09 = [],
  _0xf83319 = "",
  _0x22c8a3 = 0;
const {
  execSync: _0x5a3328
} = require("child_process");
if ($.isNode()) {
  Object.keys(_0xdfb49e).forEach(_0x4fb597 => {
    _0x26db09.push(_0xdfb49e[_0x4fb597]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x26db09 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x4e5d7f => _0x4e5d7f.cookie)].filter(_0x13c864 => !!_0x13c864);
const _0x446b32 = process.env.WYW_HELPTM ? process.env.WYW_HELPTM : "23",
  _0x26d631 = process.env.WYW_HELPCODE ? process.env.WYW_HELPCODE : "";
$.helpId = [];
$.fullId = [];
$.apiTokenObj = {};
$.banpin = [];
!(async () => {
  if (!_0x26db09[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  console.log("当前版本：20240815");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("环境变量：\n    WYW_HELPCODE='code1&code2' 多个&分割");
  _0x26d631 != "" && ($.helpId = _0x26d631.split("&"));
  $.helpId.length > 0 ? (console.log("\n\n开始助力..."), await _0x461722()) : console.log("未指定助力马，退出！");
})().catch(_0x409b15 => {
  return $.logErr(_0x409b15);
}).finally(() => {
  return $.done();
});
async function _0x461722() {
  for (let _0x415abe = 0; _0x415abe < _0x26db09.length; _0x415abe++) {
    $.UA = _0x4f78dd.UARAM ? _0x4f78dd.UARAM("", _0xf83319) : _0x4f78dd.USER_AGENT;
    _0xf83319 = _0x4e5046.buildck(_0x26db09[_0x415abe]);
    if (_0xf83319) {
      $.UserName = decodeURIComponent(_0xf83319.match(/pt_pin=([^; ]+)(?=;?)/) && _0xf83319.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x415abe + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      let _0x1b04d7 = await _0x4e5046.jddToken($.UA);
      if (_0x1b04d7) $.apitoken = _0x1b04d7.token;
      $.nonum = false;
      $.hphotflag = false;
      _0x22c8a3 = 0;
      $.UUID = _0x4e5046.UUID("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x5e91bf => !$.fullId.includes(_0x5e91bf)), $.fullId = []);
      _0xf0d10f.swip && (await _0xf0d10f.swip());
      for (let _0x56c7d5 of $.helpId) {
        $.itemId = _0x56c7d5;
        console.log("去助力 --> " + $.itemId);
        await _0x2ce07c("wanyiwan_assist");
        if ($.nonum || $.hphotflag || !$.isLogin) break;
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      }
      await $.wait(parseInt(Math.random() * 500 + 2000, 10));
      if ($.outFlag) break;
    }
  }
}
async function _0x1cdcf9() {
  try {
    $.taskList = [];
    $.isBan = false;
    $.signstatus = 0;
    await _0x2ce07c("wanyiwan_home");
    await $.wait(parseInt(Math.random() * 500 + 600, 10));
    $.signstatus == 0 ? (console.log("\n去签到..."), await _0x2ce07c("wanyiwan_sign")) : console.log("\n今日以签过!");
    if ($.isBan) {
      $.banpin.push($.UserName);
      return;
    }
    console.log("\n去做任务...");
    await _0x2ce07c("wanyiwan_task_list");
    for (let _0x4cd141 of $.taskList) {
      $.itemId = 0;
      $.encryptAssignmentId = _0x4cd141.encryptAssignmentId;
      $.taskType = _0x4cd141.taskType;
      let _0x3b378b = _0x4cd141.maxTimes - _0x4cd141.finishTimes;
      if (_0x4cd141.title.includes("邀请")) {
        if (_0x4cd141.status != 3) {
          $.helpId.push(_0x4cd141.taskDetail[0].itemId);
          console.log("入列邀请码：" + _0x4cd141.taskDetail[0].itemId);
        }
      }
      if (_0x4cd141.status == 2) {
        console.log("领取 " + _0x4cd141.title + " 奖励...");
        $.endflag = false;
        for (let _0x33d85c of Array(_0x4cd141.finishTimes)) {
          await _0x2ce07c("award");
          if ($.endflag) break;
          await $.wait(1500);
        }
        continue;
      } else {
        if (_0x4cd141.status == 3) {
          console.log(_0x4cd141.title + " ---- 已完成");
          continue;
        } else {
          if (/邀请|下单/.test(_0x4cd141.title)) continue;
        }
      }
      console.log("去做 " + _0x4cd141.title);
      for (let _0x56dd90 = 0; _0x56dd90 < _0x3b378b; _0x56dd90++) {
        _0x4cd141.taskDetail && ($.itemId = _0x4cd141.taskDetail[_0x56dd90].itemId);
        await _0x2ce07c("startTask");
        _0x4cd141.limitTime != 0 && (await $.wait(_0x4cd141.limitTime * 1000), await _0x2ce07c("endTask"));
        await $.wait(parseInt(Math.random() * 500 + 1000, 10));
        await _0x2ce07c("award");
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      }
      await $.wait(parseInt(Math.random() * 500 + 1500, 10));
    }
    await $.wait(parseInt(Math.random() * 500 + 2000, 10));
  } catch (_0x2ab1d2) {
    console.log(_0x2ab1d2);
  }
}
async function _0x2ce07c(_0x5cbb99) {
  if ($.outFlag || $.isban) return;
  let _0x424719 = "",
    _0x5278d3,
    _0x2894a5,
    _0x2ec445 = "post",
    _0x212f93 = "https://api.m.jd.com/client.action",
    _0x969942 = "signed_wh5";
  switch (_0x5cbb99) {
    case "wanyiwan_sign":
      _0x424719 = {
        "version": 1
      }, _0x5278d3 = "d12dd", _0x2894a5 = "wanyiwan_sign";
      break;
    case "wanyiwan_home":
      _0x424719 = {
        "outsite": 0,
        "firstCall": 1,
        "version": 1,
        "lbsSwitch": true
      }, _0x5278d3 = "c81ad", _0x2894a5 = "wanyiwan_home";
      break;
    case "wanyiwan_task_list":
      _0x424719 = {
        "version": 1,
        "lbsSwitch": false
      }, _0x2894a5 = "wanyiwan_task_list";
      break;
    case "apTaskList":
      _0x212f93 = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1", _0x2ec445 = "get";
      break;
    case "startTask":
      _0x424719 = {
        "itemId": $.itemId,
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "actionType": 1,
        "version": 1
      }, _0x5278d3 = "89db2", _0x2894a5 = "wanyiwan_do_task";
      break;
    case "endTask":
      _0x424719 = {
        "itemId": $.itemId,
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "actionType": 0,
        "version": 1
      }, _0x5278d3 = "89db2", _0x2894a5 = "wanyiwan_do_task";
      break;
    case "award":
      _0x424719 = {
        "taskType": $.taskType,
        "assignmentId": $.encryptAssignmentId,
        "version": 1
      }, _0x5278d3 = "d12dd", _0x2894a5 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      _0x424719 = {
        "inviteCode": $.itemId,
        "version": 4
      }, _0x2894a5 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x212f93 = "https://api.m.jd.com/api", _0x424719 = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ"
      }, _0x969942 = "activities_platform", _0x2894a5 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x212f93 = "https://api.m.jd.com/api", _0x424719 = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ",
        "turnNum": parseInt(_0x6c2ef1)
      }, _0x5278d3 = "614f1", _0x969942 = "activities_platform", _0x2894a5 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x212f93 = "https://api.m.jd.com/api", _0x424719 = {
        "linkId": "CDv-TaCmVcD0sxAI_HE2RQ"
      }, _0x5278d3 = "25fac", _0x969942 = "activities_platform", _0x2894a5 = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0x212f93 = "https://api.m.jd.com/api", _0x424719 = {
        "linkId": "aE-1vg6_no2csxgXFuv3Kg"
      }, _0x5278d3 = "5be1b", _0x969942 = "activity_platform_se", _0x2894a5 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x212f93 = "https://api.m.jd.com/api", _0x424719 = {
        "linkId": "aE-1vg6_no2csxgXFuv3Kg"
      }, _0x5278d3 = "89cfe", _0x969942 = "activity_platform_se", _0x2894a5 = "superRedBagDraw";
      break;
    default:
      console.log("错误" + _0x5cbb99);
  }
  if (_0x5278d3) {
    let _0x5efde8 = {
      "appId": _0x5278d3,
      "functionId": _0x2894a5,
      "body": _0x424719,
      "appid": _0x969942,
      "clientVersion": $.UA.split(";")[2],
      "client": "apple",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
    _0x424719 = await _0x1b1683(_0x5efde8);
    if (!_0x424719) return;
  } else _0x424719 && (_0x424719 = "functionId=" + _0x2894a5 + "&body=" + encodeURIComponent(JSON.stringify(_0x424719)) + "&t=" + Date.now() + "&appid=" + _0x969942 + "&client=apple&clientVersion=" + $.UA.split(";")[2] + "&h5st=null");
  let _0x92397a = _0x589133(_0x212f93, _0x424719),
    _0x4eee92 = await _0x13f019(_0x92397a, _0x2ec445);
  do {
    JSON.stringify(_0x4eee92).includes("重试") ? (_0x22c8a3++, await $.wait(1000), _0x4eee92 = await _0x13f019(_0x92397a, _0x2ec445)) : _0x22c8a3 = 0;
  } while (_0x22c8a3 > 0 & _0x22c8a3 < 4);
  _0x297e81(_0x5cbb99, _0x4eee92);
}
async function _0x13f019(_0x4c8c1e, _0xf4299e) {
  return new Promise(async _0x1e43b0 => {
    $["d" + _0xf4299e](_0x4c8c1e, async (_0x393de6, _0x43b35c, _0x2f825c) => {
      try {
        if (_0x393de6) console.log("" + $.toStr(_0x393de6, _0x393de6));else {
          if (_0x2f825c.includes("登录")) $.isLogin = false;
        }
      } catch (_0x2bc1fa) {
        console.log(_0x2bc1fa, _0x43b35c);
      } finally {
        _0x1e43b0(_0x2f825c);
      }
    });
  });
}
function _0xe6636(_0x4189a7) {
  let _0x1db27e = "";
  switch (type) {
    case [_0x1db27e]:
      const _0x3e205a = {
        "ed": ed
      };
      _0xf1f6le = _0x3e205a;
      break;
    case [_0x1db27e]:
      const _0x5f37e3 = {
        "bd": bd
      };
      _0xf1f6lc = _0x5f37e3;
      break;
    case [_0x1db27e]:
      const _0x4e1371 = {
        "ed": ed
      };
      _0xf1f6lf = _0x4e1371;
      break;
    case [_0x1db27e]:
      const _0x473e04 = {
        "ed": ed
      };
      _0xf1f6lg = _0x473e04;
      break;
    case [_0x1db27e]:
      const _0x328b61 = {
        "ed": ed
      };
      _0xf1f6lv = _0x328b61;
      break;
  }
}
async function _0x297e81(_0x1dbf88, _0x29bdc3) {
  let _0xf494a8 = "";
  try {
    _0xf494a8 = JSON.parse(_0x29bdc3);
  } catch (_0x5394fa) {
    console.log(_0x1dbf88 + " 执行任务异常");
  }
  try {
    switch (_0x1dbf88) {
      case "award":
        _0xf494a8.code == 0 ? _0xf494a8.data.bizCode == 0 ? console.log("任务完成，获得" + _0xf494a8.data.result.rewardCount + "奖票 🎫") : (console.log(_0xf494a8.data.bizCode, _0xf494a8.data.bizMsg), $.endflag = true) : console.log(_0xf494a8.message);
        break;
      case "wanyiwan_sign":
        if (_0xf494a8.code == 0) {
          if (_0xf494a8.data.bizCode == 0) console.log("签到成功,获得" + _0xf494a8.data.result.getScore + "奖票 🎫");else {
            if (_0xf494a8.data.bizCode == -10001) {
              console.log("该账户可能黑子！无法签到和任务！");
              $.isBan = true;
            } else console.log(_0xf494a8.data.bizMsg);
          }
        } else console.log(_0xf494a8.message);
        break;
      case "wanyiwan_assist":
        if (_0xf494a8.code == 0) {
          if (_0xf494a8.data.bizCode == 0) console.log("✔️ 助力成功"), $.nonum = true;else {
            if (_0xf494a8.data.bizMsg.includes("太多人") || _0xf494a8.data.bizMsg.includes("重复")) console.log("❌", _0xf494a8.data.bizCode, _0xf494a8.data.bizMsg), $.nonum = true;else {
              if (_0xf494a8.data.bizMsg.includes("已经完成")) console.log("❌", _0xf494a8.data.bizCode, _0xf494a8.data.bizMsg), $.fullId.push($.itemId);else _0xf494a8.data.bizMsg.includes("火爆") ? (console.log("❌", _0xf494a8.data.bizCode, _0xf494a8.data.bizMsg), $.hphotflag = true) : console.log("❌", _0xf494a8.data.bizCode, _0xf494a8.data.bizMsg);
            }
          }
        } else console.log("❌", _0xf494a8.code, _0xf494a8.message), _0xf494a8.message.includes("火爆") && ($.hphotflag = true);
        break;
      case "wanyiwan_home":
        if (_0xf494a8.code == 0) {
          if (_0xf494a8.data.bizCode == 0) {
            _0xf494a8.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0xf494a8.data.result.popWindows[0].getScore, "奖票 🎫");
            console.log("当前奖票总量：" + _0xf494a8.data.result.score + " 🎫");
            $.isLogin = _0xf494a8.data?.["result"]?.["isLogin"];
            $.taskList = _0xf494a8.data?.["result"]?.["taskBoard"] || [];
            $.signstatus = _0xf494a8.data?.["result"]?.["signBoard"]?.["status"] || 0;
          } else console.log(_0xf494a8.data.bizMsg);
        } else console.log(_0xf494a8.message);
        break;
      case "wanyiwan_task_list":
        if (_0xf494a8.code == 0) {
          _0xf494a8.data.bizCode == 0 ? $.taskList = _0xf494a8.data?.["result"]?.["taskList"] || [] : console.log(_0xf494a8.data.bizMsg);
        } else console.log(_0xf494a8.message);
        break;
      case "turnHappyHome":
        if (_0xf494a8.success) $.leftTime = _0xf494a8.data.leftTime;else {
          console.log(_0xf494a8.errMsg);
        }
        break;
      case "turnHappyDouble":
        if (_0xf494a8.success) _0xf494a8.data.rewardState == 1 ? (console.log("翻倍成功，获得 " + _0xf494a8.data.rewardValue + "奖票 🎫"), $.dbsuc = true) : ($.dbsuc = false, console.log("叼了，翻倍失败！再接再厉！"));else {
          console.log(_0xf494a8.errMsg);
          $.dbsuc = false;
        }
        break;
      case "superRedBagHome":
        _0xf494a8.success ? ($.sceneStatus = _0xf494a8.data.sceneStatus, $.nextLeftTime = _0xf494a8.data.nextLeftTime) : console.log(_0xf494a8.errMsg);
        break;
      case "superRedBagDraw":
        if (_0xf494a8.success) {
          $.shakeLeftTime = _0xf494a8.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0xf494a8.data;
          if (prizeDrawVo) {
            switch (prizeDrawVo.prizeType) {
              case 24:
                console.log("获得：" + prizeDrawVo.amount + "票奖 🎫"), $.sucdraw++;
                break;
              case 1:
                console.log("获得:" + prizeDrawVo.prizeConfigName);
                break;
              default:
                console.log(prizeDrawVo);
                break;
            }
          } else console.log(_0x29bdc3);
        } else console.log(_0xf494a8.errMsg);
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x1dbf88 + " -> " + _0x29bdc3);
    }
    typeof _0xf494a8 == "object" && _0xf494a8.errorMessage && _0xf494a8.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x1fa8bf) {
    console.log(_0x1dbf88 + " " + _0x1fa8bf);
  }
}
function _0x589133(_0x502e6d, _0x273b76) {
  _0x273b76 = _0x273b76 + "&rfs=0000&x-api-eid-token=" + $.apitoken;
  let _0x2d5ba2 = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    "Origin": "https://pro.m.jd.com",
    "Referer": "https://pro.m.jd.com/",
    "Cookie": _0xf83319,
    "User-Agent": $.UA,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "x-referer-page": "https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html",
    "request-from": "native",
    "x-rp-client": "h5_1.0.0"
  };
  return {
    "url": _0x502e6d,
    "headers": _0x2d5ba2,
    "timeout": 30000,
    "ciphers": _0x4e5046.cpstr,
    ...(_0x273b76 ? {
      "body": _0x273b76
    } : {})
  };
}
async function _0x3bc3ea() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + _0x117d91(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0x117d91(_0x210e17) {
  _0x210e17 = _0x210e17 || 32;
  let _0x4ab5cb = "abcdef0123456789",
    _0x1397b0 = _0x4ab5cb.length,
    _0x2205cd = "";
  for (i = 0; i < _0x210e17; i++) {
    _0x2205cd += _0x4ab5cb.charAt(Math.floor(Math.random() * _0x1397b0));
  }
  return _0x2205cd;
}
function _0x327b34(_0x4d0b07) {
  if (typeof _0x4d0b07 == "string") {
    try {
      return JSON.parse(_0x4d0b07);
    } catch (_0x3ba7ce) {
      return console.log(_0x3ba7ce), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
    }
  }
}
async function _0x135306() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x27099f => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x38ffc8 = {
      "venderId": "" + $.joinVenderId + "",
      "shopId": "" + $.joinVenderId + "",
      "bindByVerifyCodeFlag": 1,
      "registerExtend": {},
      "writeChildFlag": 0,
      "channel": 406
    };
    $.shopactivityId == "" && delete _0x38ffc8.activityId;
    let _0x3d7cb2 = {
      "appId": "27004",
      "fn": "bindWithVender",
      "body": _0x38ffc8,
      "apid": "shopmember_m_jd_com",
      "ver": "9.2.0",
      "cl": "H5",
      "user": $.UserName,
      "code": 0,
      "ua": $.UA
    };
    _0x38ffc8 = await dyy.getbody(_0x3d7cb2);
    const _0x1b5e1a = {
      "url": "https://api.m.jd.com/client.action?" + _0x38ffc8 + "&uuid=88888",
      "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0xf83319,
        "origin": "https://shopmember.m.jd.com/",
        "user-agent": $.UA
      },
      "timeout": 30000
    };
    $.dget(_0x1b5e1a, async (_0x5e0dff, _0x23d878, _0x585600) => {
      try {
        _0x585600 = _0x585600 && _0x585600.match(/jsonp_.*?\((.*?)\);/) && _0x585600.match(/jsonp_.*?\((.*?)\);/)[1] || _0x585600;
        let _0x49d4d9 = $.toObj(_0x585600, _0x585600);
        if (_0x49d4d9 && typeof _0x49d4d9 == "object") {
          if (_0x49d4d9 && _0x49d4d9.success === true) {
            console.log("    " + _0x49d4d9.message);
            $.errorJoinShop = _0x49d4d9.message;
            if (_0x49d4d9.result && _0x49d4d9.result.giftInfo) {
              for (let _0x5ed5e9 of _0x49d4d9.result.giftInfo.giftList) {
                console.log("\u5165\u4F1A\u83B7\u5F97:" + _0x5ed5e9.discountString + _0x5ed5e9.prizeName + _0x5ed5e9.secondLineDesc);
              }
            }
          } else _0x49d4d9 && typeof _0x49d4d9 == "object" && _0x49d4d9.message ? ($.errorJoinShop = _0x49d4d9.message, console.log("" + (_0x49d4d9.message || ""))) : console.log(_0x585600);
        } else console.log(_0x585600);
      } catch (_0x1d2139) {
        $.logErr(_0x1d2139, _0x23d878);
      } finally {
        _0x27099f();
      }
    });
  });
}
async function _0x5260a6() {
  return new Promise(async _0x1cf34d => {
    let _0x2a8332 = {
        "venderId": $.joinVenderId,
        "payUpShop": true,
        "queryVersion": "10.5.2",
        "appid": "ef79a",
        "needSecurity": true,
        "bizId": "shop_view_app",
        "channel": 406
      },
      _0x3bbee0 = {
        "appId": "ef79a",
        "fn": "getShopOpenCardInfo",
        "body": _0x2a8332,
        "apid": "jd_shop_member",
        "ver": "9.2.0",
        "cl": "H5",
        "user": $.UserName,
        "code": 0,
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
      };
    _0x2a8332 = await dyy.getbody(_0x3bbee0);
    const _0x36bb72 = {
      "url": "https://api.m.jd.com/client.action?" + _0x2a8332 + "&uuid=88888",
      "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0xf83319,
        "origin": "https://shopmember.m.jd.com/",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
      },
      "timeout": 60000
    };
    $.get(_0x36bb72, async (_0x1c0d29, _0x461b16, _0x24ae34) => {
      try {
        _0x24ae34 = _0x24ae34 && _0x24ae34.match(/jsonp_.*?\((.*?)\);/) && _0x24ae34.match(/jsonp_.*?\((.*?)\);/)[1] || _0x24ae34;
        let _0x40ae19 = $.toObj(_0x24ae34, _0x24ae34);
        if (_0x40ae19 && typeof _0x40ae19 == "object") _0x40ae19 && _0x40ae19.success == true && (console.log("去加入 -> " + (_0x40ae19.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x40ae19.result[0].interestsRuleList && _0x40ae19.result[0].interestsRuleList[0] && _0x40ae19.result[0].interestsRuleList[0].interestsInfo && _0x40ae19.result[0].interestsRuleList[0].interestsInfo.activityId || "");else {
          console.log(_0x24ae34);
        }
      } catch (_0x2055d9) {
        $.logErr(_0x2055d9, _0x461b16);
      } finally {
        _0x1cf34d();
      }
    });
  });
}
function _0x1b1683(_0x28084a) {
  let _0x57d602 = {
      "url": "http://121.40.162.127:9000/bdy_h5",
      "body": JSON.stringify(_0x28084a),
      "headers": {
        "Content-Type": "application/json"
      },
      "timeout": 10000
    },
    _0xafe403 = "";
  return new Promise(_0x8255de => {
    $.post(_0x57d602, (_0x3643cd, _0x5dc3ed, _0x33f627) => {
      try {
        if (_0x3643cd) {} else _0x33f627 = JSON.parse(_0x33f627), _0x33f627.code == 200 ? _0xafe403 = _0x33f627.data : $.log(_0x33f627.msg);
      } catch (_0x14a070) {
        console.log(_0x14a070, _0x5dc3ed);
      } finally {
        _0x8255de(_0xafe403);
      }
    });
  });
}
function _0x2c16f9(_0x241d01, _0x6c9741) {
  return Math.floor(Math.random() * (_0x6c9741 - _0x241d01)) + _0x241d01;
}
function _0x183289(_0x3a9bb0 = +new Date()) {
  var _0x5de7a9 = new Date(_0x3a9bb0 + 8 * 3600 * 1000);
  return _0x5de7a9.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0x312b84() {
  return new Promise(_0x220411 => {
    const _0x17f81e = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0xf83319,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x17f81e, (_0x597b8b, _0x21a9b5, _0x344a0e) => {
      try {
        if (_0x344a0e) {
          _0x344a0e = JSON.parse(_0x344a0e);
          if (_0x344a0e.islogin === "1") {} else _0x344a0e.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x3d1702) {
        console.log(_0x3d1702);
      } finally {
        _0x220411();
      }
    });
  });
}