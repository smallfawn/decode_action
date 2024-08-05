//Mon Aug 05 2024 02:01:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x598e15 = $.isNode() ? require("./jdCookie.js") : "",
  _0xbf092b = $.isNode() ? require("./sendNotify") : "",
  _0xbe7811 = require("./function/dylank"),
  _0x92143b = require("./function/dylany");
if (process.env.DY_PROXY) try {
  require("https-proxy-agent");
  ccc = require("./function/proxy.js");
  $.dget = ccc.intoRequest($.get.bind($));
  $.dpost = ccc.intoRequest($.post.bind($));
} catch {
  $.log("未安装https-proxy-agent依赖，无法启用代理");
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
let _0x279998 = [],
  _0x5244fa = "",
  _0x4bc42c = "",
  _0x547592 = "",
  _0x40d1a3 = {},
  _0x131a8e = process.env.opencard_draw || "5",
  _0x381dcd = process.env.opencard_banpin || "",
  _0x2e2e3e = "5c2a8e917888477da156a96e99056c29",
  _0x59a7a2 = 100,
  _0x22f188 = "https://lzdz-isv.isvjcloud.com/m/1000074146/2024/90524080301/",
  _0x24a7d4 = /\/m\/(\d+)\/(\w+)/,
  _0x56fb28 = 14;
$.activityId = "90524080301";
$.userId = "1000074146";
$.hotFlag = false;
$.outFlag = false;
$.activityEnd = false;
$.followShop = 0;
$.addCart = 0;
if ($.isNode()) {
  Object.keys(_0x598e15).forEach(_0x1e2b3c => {
    _0x279998.push(_0x598e15[_0x1e2b3c]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x279998 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x271942 => _0x271942.cookie)].filter(_0x36131a => !!_0x36131a);
$.shareUuid = [_0x2e2e3e][_0x1c3145(0, [_0x2e2e3e].length)];
const _0x17cdc5 = new Date();
_0x17cdc5.setDate(_0x17cdc5.getDate() + 1);
_0x17cdc5.setHours(0, 0, 0, 0);
!(async () => {
  if (!_0x279998[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  await _0x576cf1();
  $.log("支持API代理 DY_PROXY");
  for (let _0x3f4534 = 0; _0x3f4534 < _0x279998.length; _0x3f4534++) {
    _0x5244fa = _0x279998[_0x3f4534];
    originCookie = _0x279998[_0x3f4534];
    if (_0x5244fa) {
      $.UserName = decodeURIComponent(_0x5244fa.match(/pt_pin=([^; ]+)(?=;?)/) && _0x5244fa.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x3f4534 + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      if (_0x381dcd.indexOf($.UserName) > -1) {
        console.log("黑名单pin,跳出！");
        continue;
      }
      _0x251d56();
      await _0xea158();
      if (!$.isLogin) {
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        $.isNode() && (await _0xbf092b.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie"));
        continue;
      }
      await _0x4e4990();
      if ($.outFlag || $.activityEnd) break;
    }
    await $.wait(2000);
    $.index % 5 == 0 && (console.log("\n休息一下，可持续发展......"), await $.wait(parseInt(Math.random() * 2000 + 8000, 10)));
  }
  if ($.outFlag) {
    let _0x25ee17 = "此ip已被限制，请过10分钟后再执行脚本";
    $.msg($.name, "", "" + _0x25ee17);
    $.isNode() && (await _0xbf092b.sendNotify("" + $.name, "" + _0x25ee17));
  }
  _0x4bc42c && $.msg($.name, "", "" + _0x4bc42c);
})().catch(_0x1fb5c3 => {
  return $.logErr(_0x1fb5c3);
}).finally(() => {
  return $.done();
});
async function _0x4e4990() {
  try {
    $.hasEnd = false;
    $.endTime = 0;
    $.followShop = 0;
    $.addCart = 0;
    $.Token = "";
    $.Pin = "";
    _0x547592 = "";
    $.Token = await _0xbe7811(_0x5244fa, "https://lzdz-isv.isvjcloud.com");
    if ($.Token == "") {
      console.log("获取Token失败");
      return;
    }
    for (let _0xbf54b1 of Array(3)) {
      await _0xf0f5db();
      if (_0x547592) break;
      await $.wait(1000);
    }
    if (!_0x547592) {
      console.log("获取cookie失败");
      return;
    }
    if ($.activityEnd === true) {
      return;
    }
    if ($.outFlag) {
      console.log("此ip已被限制，请过10分钟后再执行脚本\n");
      return;
    }
    await _0x2a5b7a("getMyCidPing");
    if (!$.Pin) {
      console.log("获取Pin失败");
      return;
    }
    await _0x2a5b7a("init");
    await _0x2a5b7a("accessLogWithAD");
    await _0x2a5b7a("getUserInfo");
    await _0x2a5b7a("activityContent");
    await _0x2a5b7a("drawContent");
    if ($.hotFlag) return;
    if (!$.uuid) {
      console.log("获取uid失败");
      return;
    }
    if ($.hasEnd === true || $.endTime && Date.now() > $.endTime) {
      $.activityEnd = true;
      console.log("活动结束！！！");
      return;
    } else {
      $.index == 1 && console.log($.activityName);
      $.index == 1 && console.log("结束时间：" + _0x25b368($.endTime));
    }
    if ($.openList.length != 0) {
      console.log("\n去开卡...");
      for (let _0x1a1722 of $.openList) {
        $.shopactivityId = "";
        $.joinVenderId = _0x1a1722.venderId;
        for (let _0x43c0c3 of Array(3)) {
          await _0x2fdb8d();
          await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
          if ($.errorJoinShop.indexOf("失败") == -1 || $.errorJoinShop.indexOf("火爆") == -1) break;
        }
        if ($.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1) {
          console.log("可能开卡黑了,跳出");
          return;
        }
        await $.wait(parseInt(Math.random() * 1000 + 500, 10));
        await _0x2a5b7a("activityContent");
        await _0x2a5b7a("drawContent");
        ($.openCardBeans > 0 || $.openCardScore > 0) && console.log("开卡获得：" + ($.openCardBeans > 0 ? $.openCardBeans + "京豆 " : "") + ($.openCardScore > 0 ? $.openCardScore + "积分 " : ""));
      }
    } else console.log("\n已开卡");
    if (!$.taskBeansStatus && !$.outFlag || 1) await _0x2a5b7a("takeCoupon"), await $.wait(parseInt(Math.random() * 1000 + 800, 10));else {}
    $.param = $.vipList[0];
    await _0x2a5b7a("scanshop");
    await $.wait(parseInt(Math.random() * 1000 + 500, 10));
    await $.wait(parseInt(Math.random() * 1000 + 500, 10));
    await _0x2a5b7a("activityContent");
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
    await _0x2a5b7a("myInfo");
    if (_0x131a8e || 1) {
      console.log("\n去抽奖...");
      $.runFalag = true;
      let _0x34a8f2 = parseInt($.totalscore / _0x59a7a2);
      console.log("剩余积分" + $.totalscore);
      console.log("可抽奖次数:" + _0x34a8f2);
      for (let _0x5c5e51 = 0; _0x34a8f2--; _0x5c5e51++) {
        console.log("第 " + (_0x5c5e51 + 1) + " 次抽奖:");
        await _0x2a5b7a("startDraw");
        if ($.runFalag == false) break;
        if (Number(_0x34a8f2) <= 0) break;
        if (_0x5c5e51 >= _0x131a8e) break;
        await $.wait(parseInt(Math.random() * 1500 + 1000, 10));
      }
    }
    if ($.outFlag) {
      console.log("此ip已被限制，请过10分钟后再执行脚本\n");
      return;
    }
    await _0x2a5b7a("myprize");
    await $.wait(parseInt(Math.random() * 1000 + 500, 10));
    console.log("\n剩余积分 -> " + $.totalscore);
    console.log("当前助力 -> " + $.shareUuid);
    $.index == 1 && ($.shareUuid = $.uuid, console.log("后面的号都会助力 -> " + $.shareUuid));
    await $.wait(parseInt(Math.random() * 1000 + 500, 10));
  } catch (_0x13c62c) {
    console.log(_0x13c62c);
  }
}
async function _0x2a5b7a(_0x48b41f) {
  if ($.outFlag) return;
  let _0x4c59e7 = "https://lzdz-isv.isvjcloud.com",
    _0x46917e = "/uinion/plus2505",
    _0x5ab412 = "",
    _0x19cc5b = "",
    _0x3fb680 = "POST";
  switch (_0x48b41f) {
    case "isvObfuscator":
      _0x19cc5b = "https://api.m.jd.com/client.action?functionId=isvObfuscator", _0x5ab412 = "";
      break;
    case "getSimpleActInfoVo":
      _0x19cc5b = _0x4c59e7 + "/dz/common/getSimpleActInfoVo", _0x5ab412 = "activityId=" + $.activityId;
      break;
    case "getMyPing":
      _0x19cc5b = _0x4c59e7 + "/customer/getMyPing", _0x5ab412 = "userId=" + ($.userId || "") + "&token=" + $.Token + "&fromType=APP";
      break;
    case "getMyCidPing":
      _0x19cc5b = _0x4c59e7 + "/customer/getMyCidPing", _0x5ab412 = "userId=" + ($.userId || "") + "&token=" + $.Token + "&fromType=APP&activityId=" + $.activityId + "&pin=";
      break;
    case "init":
      _0x19cc5b = _0x4c59e7 + "/dingzhi/taskact/common/init", _0x5ab412 = "activityId=" + $.activityId + "&dzActivityType=0&pin=";
      break;
    case "accessLogWithAD":
      _0x19cc5b = _0x4c59e7 + "/common/accessLogWithAD";
      let _0x117cdb = _0x4c59e7 + "/m/unite/dzlh0001/?activityId=" + $.activityId + "&venderId=" + $.userId + "&adSource=&shareUuid=" + $.shareUuid + "&sid=&un_area=";
      _0x5ab412 = "venderId=" + ($.userId || "") + "&code=99&pin=" + encodeURIComponent($.Pin) + "&activityId=" + $.activityId + "&pageUrl=" + encodeURIComponent(_0x117cdb) + "&subType=app&adSource=";
      break;
    case "getUserInfo":
      _0x19cc5b = _0x4c59e7 + "/wxActionCommon/getUserInfo", _0x5ab412 = "pin=" + encodeURIComponent($.Pin);
      break;
    case "activityContent":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/activityContent", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&pinImg=" + encodeURIComponent($.attrTouXiang) + "&nick=" + encodeURIComponent($.nickname) + "&cjyxPin=&cjhyPin=&shareUuid=" + $.shareUuid;
      break;
    case "drawContent":
      _0x19cc5b = _0x4c59e7 + "/dingzhi/taskact/common/drawContent", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "myprize":
      _0x19cc5b = _0x4c59e7 + "/dingzhi/bd/common/myprize", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "startDraw":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/draw", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.uuid;
      break;
    case "scanshop":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/doTask", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&taskId=scanshop&param=" + $.param;
      break;
    case "followGood":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/saveTask", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.uuid + "&taskType=22&taskValue=22";
      break;
    case "addCart":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/doTask", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&taskId=scanshop&param=1000106864";
      break;
    case "browseGoods":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/saveTask", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.uuid + "&taskType=5&taskValue=" + $.goodId;
      break;
    case "browseShops":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/saveTask", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.uuid + "&taskType=14&taskValue=" + $.shopId;
      break;
    case "awardGift":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/saveTask", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.uuid + "&taskType=18&taskValue=18";
      break;
    case "fanbei":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/saveTask", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.uuid + "&taskType=17&taskValue=1";
      break;
    case "takeCoupon":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/takeCoupon", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "initOpenCard":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/initOpenCard", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&shareUuid=" + $.shareUuid;
      break;
    case "myInfo":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/myInfo", _0x5ab412 = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "getShareRecord":
      _0x19cc5b = _0x4c59e7 + "/dingzhi/taskact/common/getShareRecord", _0x5ab412 = "activityId=" + $.activityId + "&actorUuid=" + $.uuid + "&pin=" + encodeURIComponent($.Pin) + "&num=50";
      break;
    case "getprize":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/getPrize", _0x5ab412 = "activityId=" + $.activityId + "&actorUuid=" + $.uuid + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "exchange":
      _0x19cc5b = _0x4c59e7 + "/dingzhi" + _0x46917e + "/exchangePrize", _0x5ab412 = "activityId=" + $.activityId + "&prizeId=" + _0x56fb28 + "&pin=" + encodeURIComponent($.Pin);
      break;
    default:
      console.log("错误" + _0x48b41f);
  }
  let _0x3052b2 = _0x5694c4(_0x19cc5b, _0x5ab412, _0x3fb680);
  return new Promise(async _0x9080b2 => {
    $.dpost(_0x3052b2, async (_0x20eb38, _0x178075, _0x21bead) => {
      try {
        if (_0x20eb38) {
          if (_0x178075 && typeof _0x178075.statusCode != "undefined") {
            _0x178075.statusCode == 493 && (console.log("此ip已被限制，请过10分钟后再执行脚本\n"), $.outFlag = true);
          }
          if (_0x178075 && typeof _0x178075.statusCode == 502 || _0x20eb38.includes("Timeout")) {
            await _0x2a5b7a(_0x48b41f);
            return;
          }
          console.log("" + $.toStr(_0x20eb38, _0x20eb38));
        } else {
          if (_0x21bead.includes("DOCTYPE")) {
            await _0x2a5b7a(_0x48b41f);
            return;
          }
          _0x1ac5aa(_0x178075);
          _0x13424b(_0x48b41f, _0x21bead);
        }
      } catch (_0x1f62a4) {
        console.log(_0x1f62a4, _0x178075);
      } finally {
        _0x9080b2();
      }
    });
  });
}
async function _0x13424b(_0x486f39, _0x5cb959) {
  let _0x3fdf9e = "";
  try {
    (_0x486f39 != "accessLogWithAD" || _0x486f39 != "drawContent") && _0x5cb959 && (_0x3fdf9e = JSON.parse(_0x5cb959));
  } catch (_0x172017) {
    console.log(_0x486f39 + " 执行任务异常");
  }
  try {
    switch (_0x486f39) {
      case "isvObfuscator":
        if (typeof _0x3fdf9e == "object") {
          if (_0x3fdf9e.errcode == 0) typeof _0x3fdf9e.token != "undefined" && ($.Token = _0x3fdf9e.token);else {
            if (_0x3fdf9e.message) {
              console.log("isvObfuscator " + (_0x3fdf9e.message || ""));
            } else console.log(_0x5cb959);
          }
        } else {}
        break;
      case "getSimpleActInfoVo":
        if (typeof _0x3fdf9e == "object") _0x3fdf9e.result && _0x3fdf9e.result === true ? (typeof _0x3fdf9e.data.shopId != "undefined" && ($.shopId = _0x3fdf9e.data.shopId), typeof _0x3fdf9e.data.venderId != "undefined" && ($.venderId = _0x3fdf9e.data.venderId)) : _0x3fdf9e.errorMessage ? console.log("" + _0x486f39 + (_0x3fdf9e.errorMessage || "")) : console.log("" + _0x486f39 + _0x5cb959);else {}
        break;
      case "init":
        if (_0x3fdf9e.result == true && _0x3fdf9e.data) {
          $.userId = _0x3fdf9e.data.userId;
          $.venderId = _0x3fdf9e.data.venderId;
          $.jdActivityId = _0x3fdf9e.data.jdActivityId;
          $.activityType = _0x3fdf9e.data.activityType;
          $.endTime = _0x3fdf9e.data.endTime;
        }
        break;
      case "myInfo":
        _0x3fdf9e.result == true && _0x3fdf9e.data && ($.totalscore = _0x3fdf9e.data.score);
        break;
      case "getMyPing":
        if (typeof _0x3fdf9e == "object") _0x3fdf9e.result && _0x3fdf9e.result === true ? (_0x3fdf9e.data && typeof _0x3fdf9e.data.secretPin != "undefined" && ($.Pin = _0x3fdf9e.data.secretPin), _0x3fdf9e.data && typeof _0x3fdf9e.data.nickname != "undefined" && ($.nickname = _0x3fdf9e.data.nickname)) : _0x3fdf9e.errorMessage ? console.log("" + _0x486f39 + (_0x3fdf9e.errorMessage || "")) : console.log("" + _0x486f39 + _0x5cb959);else {}
        break;
      case "getMyCidPing":
        if (typeof _0x3fdf9e == "object") _0x3fdf9e.result && _0x3fdf9e.result === true ? (_0x3fdf9e.data && typeof _0x3fdf9e.data.secretPin != "undefined" && ($.Pin = _0x3fdf9e.data.secretPin), _0x3fdf9e.data && typeof _0x3fdf9e.data.nickname != "undefined" && ($.nickname = _0x3fdf9e.data.nickname)) : _0x3fdf9e.errorMessage ? console.log("" + _0x486f39 + (_0x3fdf9e.errorMessage || "")) : console.log("" + _0x486f39 + _0x5cb959);else {}
        break;
      case "getUserInfo":
        if (typeof _0x3fdf9e == "object") _0x3fdf9e.result && _0x3fdf9e.result === true ? _0x3fdf9e.data && typeof _0x3fdf9e.data.yunMidImageUrl != "undefined" && ($.attrTouXiang = _0x3fdf9e.data.yunMidImageUrl || "https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png") : _0x3fdf9e.errorMessage ? console.log("" + _0x486f39 + (_0x3fdf9e.errorMessage || "")) : console.log("" + _0x486f39 + _0x5cb959);else {}
        break;
      case "activityContent":
        if (typeof _0x3fdf9e == "object") {
          if (_0x3fdf9e.result && _0x3fdf9e.result === true) {
            $.activityName = _0x3fdf9e.data.activityName;
            $.uuid = _0x3fdf9e.data.uid || "";
            $.followstatus = _0x3fdf9e.data.followstatus;
            $.openCardStatus = _0x3fdf9e.data.openCardStatus;
            $.hasFollow = _0x3fdf9e.data.hasFollow;
            $.jdActivityId = _0x3fdf9e.data.jdActivityId;
            $.endTime = _0x3fdf9e.data.endTime || _0x3fdf9e.data.activityVo && _0x3fdf9e.data.activityVo.endTime || _0x3fdf9e.data.activity.endTime || 0;
            $.venderId = _0x3fdf9e.data.userId;
            $.isPlus = _0x3fdf9e.data.isPlus;
            $.helpFriendStatus = _0x3fdf9e.data.helpFriendStatus;
            $.vipList = _0x3fdf9e.data.vipList;
            $.venderList = _0x3fdf9e.data.venderList;
            $.openList = $.venderList.filter(_0x9992f7 => !$.vipList.includes(_0x9992f7.venderId));
          } else _0x3fdf9e.errorMessage ? console.log("" + _0x486f39 + (_0x3fdf9e.errorMessage || "")) : console.log("" + _0x486f39 + _0x5cb959);
        } else {}
        break;
      case "myprize":
        if (typeof _0x3fdf9e == "object") {
          if (_0x3fdf9e.result && _0x3fdf9e.result === true) {
            if (typeof _0x3fdf9e.data == "object") {
              const _0x4f3604 = [];
              for (let _0x5a5495 of _0x3fdf9e.data) {
                _0x4f3604.push(_0x5a5495.rewardName);
              }
              _0x4f3604.length != 0 && console.log("\n我的奖品：" + JSON.stringify(_0x4f3604));
            } else console.log(_0x5cb959);
          } else _0x3fdf9e.errorMessage ? ($.runFalag = false, console.log(_0x3fdf9e.errorMessage || "")) : console.log(_0x5cb959);
        } else console.log(_0x5cb959);
        break;
      case "takeCoupon":
        if (typeof _0x3fdf9e == "object") {
          if (_0x3fdf9e.result && _0x3fdf9e.result === true) typeof _0x3fdf9e.data == "object" ? _0x3fdf9e.data.taskPrize.score > 0 || _0x3fdf9e.data.taskPrize.bean > 0 ? (_0x3fdf9e.data.taskPrize.score > 0 && console.log("获得plus币：" + _0x3fdf9e.data.taskPrize.score), _0x3fdf9e.data.taskPrize.bean > 0 && console.log("获得京豆：" + _0x3fdf9e.data.taskPrize.bean + "🥔")) : console.log(JSON.stringify(_0x3fdf9e.data)) : console.log(_0x5cb959);else _0x3fdf9e.errorMessage ? ($.runFalag = false, console.log(_0x3fdf9e.errorMessage || "")) : console.log(_0x5cb959);
        } else console.log(_0x5cb959);
        break;
      case "scanshop":
      case "followGood":
      case "addCart":
      case "browseGoods":
        if (typeof _0x3fdf9e == "object") {
          if (_0x3fdf9e.result && _0x3fdf9e.result === true) {
            if (typeof _0x3fdf9e.data == "object") {
              if (_0x3fdf9e.data.score > 0 || _0x3fdf9e.data.bean > 0) {
                _0x3fdf9e.data.score > 0 && console.log("获得plus币：" + _0x3fdf9e.data.score);
                _0x3fdf9e.data.bean > 0 && console.log("获得京豆：" + _0x3fdf9e.data.bean + "🥔");
              } else console.log(JSON.stringify(_0x3fdf9e.data));
            } else console.log(_0x5cb959);
          } else _0x3fdf9e.errorMessage ? ($.runFalag = false, console.log(_0x3fdf9e.errorMessage || "")) : console.log(_0x5cb959);
        } else console.log(_0x5cb959);
        break;
      case "startDraw":
        if (typeof _0x3fdf9e == "object") {
          if (_0x3fdf9e.result && _0x3fdf9e.result === true) console.log(_0x5cb959);else _0x3fdf9e.errorMessage ? ($.runFalag = false, console.log(_0x3fdf9e.errorMessage || "")) : console.log(_0x5cb959);
        } else console.log(_0x5cb959);
        break;
      case "getShareRecord":
        if (typeof _0x3fdf9e == "object") {
          if (_0x3fdf9e.result && _0x3fdf9e.result === true && _0x3fdf9e.data) {
            $.ShareCount = _0x3fdf9e.data.length;
          } else _0x3fdf9e.errorMessage ? console.log("" + _0x486f39 + (_0x3fdf9e.errorMessage || "")) : console.log("" + _0x486f39 + _0x5cb959);
        } else {}
        break;
      case "initOpenCard":
        if (typeof _0x3fdf9e == "object") {
          if (_0x3fdf9e.result && _0x3fdf9e.result === true && _0x3fdf9e.data) {
            $.shopCardList = _0x3fdf9e.data.openInfo || [];
            $.allOpenCard = _0x3fdf9e.data.allOpenCard || false;
            $.openList = $.shopCardList.filter(_0x216ac9 => !_0x216ac9.openStatus);
            $.openCardBeans = _0x3fdf9e.data.openCardBeans || 0;
            $.openCardScore = _0x3fdf9e.data.openCardScore || 0;
          }
        } else {}
        break;
      case "getprize":
        if (typeof _0x3fdf9e == "object") {
          if (_0x3fdf9e.result && _0x3fdf9e.result === true && _0x3fdf9e.data) {
            let _0x52f8bc = _0x3fdf9e.data.exchangePriceList || [];
            for (let _0x5db1cd of _0x52f8bc) {
              $.log("" + (_0x5db1cd.prizeName + " " + _0x5db1cd.prizeId + " " + _0x5db1cd.priceNum + " " + _0x5db1cd.prizeScore));
            }
          }
        } else {}
        break;
      case "accessLogWithAD":
      case "drawContent":
        break;
      default:
        console.log(_0x486f39 + " -> " + _0x5cb959);
    }
    typeof _0x3fdf9e == "object" && _0x3fdf9e.errorMessage && _0x3fdf9e.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x14c782) {
    console.log(_0x486f39 + " " + _0x14c782);
  }
}
function _0x5694c4(_0x12530c, _0xa15cb0, _0x559467 = "POST") {
  let _0x1b75bd = {
    "Accept": "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Content-Type": "application/x-www-form-urlencoded",
    "Cookie": _0x5244fa,
    "User-Agent": $.UA
  };
  return _0x12530c.indexOf("https://lzdz-isv.isvjcloud.com") > -1 && (_0x1b75bd.Referer = _0x22f188, _0x1b75bd.Cookie = "AUTH_C_USER=" + ($.Pin || "") + ";" + _0x547592), {
    "url": _0x12530c,
    "method": _0x559467,
    "headers": _0x1b75bd,
    "body": _0xa15cb0,
    "timeout": 30000
  };
}
function _0xf0f5db() {
  return new Promise(async _0x27fdb7 => {
    let _0x1ec659 = {
      "url": "https://lzdz-isv.isvjcloud.com/wxCommonInfo/token?t=" + Date.now(),
      "followRedirect": false,
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Content-Type": "application/x-www-form-urlencoded",
        "Cookie": _0x5244fa,
        "Referer": _0x22f188,
        "User-Agent": $.UA
      },
      "timeout": 30000
    };
    $.dget(_0x1ec659, async (_0x588cac, _0x4d121f, _0x4622ba) => {
      try {
        _0x588cac ? (_0x4d121f && typeof _0x4d121f.statusCode != "undefined" && _0x4d121f.statusCode == 493 && (console.log("此ip已被限制，请过10分钟后再执行脚本\n"), $.outFlag = true), console.log("" + $.toStr(_0x588cac))) : _0x1ac5aa(_0x4d121f);
      } catch (_0x523abf) {
        $.logErr(_0x523abf, _0x4d121f);
      } finally {
        _0x27fdb7();
      }
    });
  });
}
function _0x1ac5aa(_0x11a505) {
  if (_0x11a505.headers["set-cookie"]) {
    _0x5244fa = originCookie + ";";
    for (let _0x89f8e1 of _0x11a505.headers["set-cookie"]) {
      _0x40d1a3[_0x89f8e1.split(";")[0].substr(0, _0x89f8e1.split(";")[0].indexOf("="))] = _0x89f8e1.split(";")[0].substr(_0x89f8e1.split(";")[0].indexOf("=") + 1);
    }
    for (const _0xd85421 of Object.keys(_0x40d1a3)) {
      _0x5244fa += _0xd85421 + "=" + _0x40d1a3[_0xd85421] + ";";
    }
    _0x547592 = _0x5244fa;
  }
}
async function _0x251d56() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + _0x2c3a0c(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function _0x2c3a0c(_0x28a4c8) {
  _0x28a4c8 = _0x28a4c8 || 32;
  let _0x498f5d = "abcdef0123456789",
    _0x3896b2 = _0x498f5d.length,
    _0x32d5d9 = "";
  for (i = 0; i < _0x28a4c8; i++) {
    _0x32d5d9 += _0x498f5d.charAt(Math.floor(Math.random() * _0x3896b2));
  }
  return _0x32d5d9;
}
function _0xc215ba(_0x547d1e) {
  if (typeof _0x547d1e == "string") try {
    return JSON.parse(_0x547d1e);
  } catch (_0x3f0ed8) {
    return console.log(_0x3f0ed8), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
async function _0x2fdb8d() {
  if (!$.joinVenderId) return;
  return new Promise(async _0x38fb0f => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    await _0x3868f9();
    let _0x51a023 = {
      "venderId": "" + $.joinVenderId + "",
      "shopId": "" + $.joinVenderId + "",
      "bindByVerifyCodeFlag": 1,
      "registerExtend": {},
      "writeChildFlag": 0,
      "activityId": "" + $.shopactivityId + "",
      "channel": 406
    };
    $.shopactivityId == "" && delete _0x51a023.activityId;
    let _0xd78b6e = {
      "appId": "8adfb",
      "fn": "bindWithVender",
      "body": _0x51a023,
      "apid": "jd_shop_member",
      "ver": "9.2.0",
      "cl": "H5",
      "user": $.UserName,
      "code": 0,
      "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x51a023 = await _0x92143b.getbody(_0xd78b6e);
    const _0x904964 = {
      "url": "https://api.m.jd.com/client.action?" + _0x51a023 + "&uuid=88888",
      "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x5244fa,
        "origin": "https://shopmember.m.jd.com/",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
      },
      "timeout": 30000
    };
    $.dget(_0x904964, async (_0x2c5c23, _0x2649cf, _0xb832f5) => {
      try {
        _0xb832f5 = _0xb832f5 && _0xb832f5.match(/jsonp_.*?\((.*?)\);/) && _0xb832f5.match(/jsonp_.*?\((.*?)\);/)[1] || _0xb832f5;
        let _0x209332 = $.toObj(_0xb832f5, _0xb832f5);
        if (_0x209332 && typeof _0x209332 == "object") {
          if (_0x209332 && _0x209332.success === true) {
            console.log("    " + _0x209332.message);
            $.errorJoinShop = _0x209332.message;
            if (_0x209332.result && _0x209332.result.giftInfo) for (let _0x5bc078 of _0x209332.result.giftInfo.giftList) {
              console.log("\u5165\u4F1A\u83B7\u5F97:" + _0x5bc078.discountString + _0x5bc078.prizeName + _0x5bc078.secondLineDesc);
            }
          } else _0x209332 && typeof _0x209332 == "object" && _0x209332.message ? ($.errorJoinShop = _0x209332.message, console.log("" + (_0x209332.message || ""))) : console.log(_0xb832f5);
        } else console.log(_0xb832f5);
      } catch (_0x544d07) {
        $.logErr(_0x544d07, _0x2649cf);
      } finally {
        _0x38fb0f();
      }
    });
  });
}
async function _0x3868f9() {
  return new Promise(async _0x174bb8 => {
    let _0x318854 = {
        "venderId": $.joinVenderId,
        "payUpShop": true,
        "queryVersion": "10.5.2",
        "appid": "ef79a",
        "needSecurity": true,
        "bizId": "shop_view_app",
        "channel": 406
      },
      _0x12e671 = {
        "appId": "ef79a",
        "fn": "getShopOpenCardInfo",
        "body": _0x318854,
        "apid": "jd_shop_member",
        "ver": "9.2.0",
        "cl": "H5",
        "user": $.UserName,
        "code": 0,
        "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
      };
    _0x318854 = await _0x92143b.getbody(_0x12e671);
    const _0x11eabb = {
      "url": "https://api.m.jd.com/client.action?" + _0x318854 + "&uuid=88888",
      "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x5244fa,
        "origin": "https://shopmember.m.jd.com/",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
      },
      "timeout": 60000
    };
    $.dget(_0x11eabb, async (_0x2e30c6, _0x4ebf46, _0x1c4f85) => {
      try {
        _0x1c4f85 = _0x1c4f85 && _0x1c4f85.match(/jsonp_.*?\((.*?)\);/) && _0x1c4f85.match(/jsonp_.*?\((.*?)\);/)[1] || _0x1c4f85;
        let _0x3215ef = $.toObj(_0x1c4f85, _0x1c4f85);
        _0x3215ef && typeof _0x3215ef == "object" ? _0x3215ef && _0x3215ef.success == true && (console.log("去加入 -> " + (_0x3215ef.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x3215ef.result[0].interestsRuleList && _0x3215ef.result[0].interestsRuleList[0] && _0x3215ef.result[0].interestsRuleList[0].interestsInfo && _0x3215ef.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x1c4f85);
      } catch (_0x1acf48) {
        $.logErr(_0x1acf48, _0x4ebf46);
      } finally {
        _0x174bb8();
      }
    });
  });
}
function _0x1c3145(_0x57b3e8, _0x1ac7fc) {
  return Math.floor(Math.random() * (_0x1ac7fc - _0x57b3e8)) + _0x57b3e8;
}
function _0x25b368(_0x1a9f91 = +new Date()) {
  var _0x569bdc = new Date(_0x1a9f91 + 8 * 3600 * 1000);
  return _0x569bdc.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function _0x218216() {
  return new Promise(_0xbfd009 => {
    const _0x414f6f = {
      "url": _0x22f188,
      "headers": {
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x414f6f, async (_0x3dc4ad, _0x479d3a, _0x35d6a2) => {
      try {
        _0x35d6a2 && (_0x35d6a2.match(/lzdz1\S+index\S+js/i) && ($.indexjs = _0x35d6a2.match(/lzdz1\S+index\S+js/i)[0]), await _0x59710a());
      } catch (_0xf312c8) {
        console.log(_0xf312c8);
      } finally {
        _0xbfd009();
      }
    });
  });
}
function _0x59710a() {
  return new Promise(_0x5014bf => {
    const _0x3f11b1 = {
      "url": "https://" + $.indexjs,
      "headers": {
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x3f11b1, (_0x22cc17, _0x1cab08, _0x24ccf2) => {
      try {
        _0x24ccf2 && ($.goodlist = eval(_0x24ccf2.match(/allAddSkuList:(\[[\s\S]*?}\]),/i)[1]) || []);
      } catch (_0x3aa9f6) {
        console.log(_0x3aa9f6);
      } finally {
        _0x5014bf();
      }
    });
  });
}
function _0x576cf1() {
  return new Promise(_0x30f09d => {
    const _0xc44fe0 = {
      "url": "https://lite-msg.m.jd.com/client.action?functionId=msgEntranceV1",
      "headers": {
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0xc44fe0, (_0x3d661a, _0x1a5e03, _0xd9c58c) => {
      try {
        _0xd9c58c && (_0xd9c58c = JSON.parse(_0xd9c58c), $.difftime = Date.now() - _0xd9c58c.timestamp);
      } catch (_0x2f9191) {
        console.log(_0x2f9191);
      } finally {
        _0x30f09d();
      }
    });
  });
}
function _0xea158() {
  return new Promise(_0x2c6d2c => {
    const _0xd49d3b = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x5244fa,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0xd49d3b, (_0x3fdbe5, _0x444e08, _0x1063fc) => {
      try {
        if (_0x1063fc) {
          _0x1063fc = JSON.parse(_0x1063fc);
          if (_0x1063fc.islogin === "1") {} else _0x1063fc.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x24d013) {
        console.log(_0x24d013);
      } finally {
        _0x2c6d2c();
      }
    });
  });
}