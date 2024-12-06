//Fri Dec 06 2024 15:09:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
console.log("配置代理池: OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL");
console.log("配置api代理: OPENCARD_API_PROXY_URL");
let proenv_0x5c4f78 = false;
if (!process.env.OPENCARD_API_PROXY_URL) {
  if (process.env.OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL) {
    proenv_0x5c4f78 = true;
    require("global-agent/bootstrap");
    global.GLOBAL_AGENT.HTTP_PROXY = process.env.OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL || "";
  }
}
let proenv_0x544a8e = false;
if (process.env.OPENCARD_API_PROXY_URL) {
  proenv_0x544a8e = true;
  your_proxy_url = process.env.OPENCARD_API_PROXY_URL;
}
console.log("配置代理池: " + (proenv_0x5c4f78 == true ? "已配置" : "未配置") + " ");
console.log("配置api代理: " + (proenv_0x544a8e == true ? "已配置" : "未配置"));
const proenv_0x5c1959 = $.isNode() ? require("./jdCookie.js") : "";
const proenv_0x348488 = $.isNode() ? require("./sendNotify") : "";
const proenv_0x199c5d = require("axios");
const proenv_0x40114a = require("tunnel");
const proenv_0x1200e5 = require("./utils/proenv/proenv.js");
const proenv_0x5d0bdb = require("./utils/proenv/proecy.js");
let proenv_0x15748f = [],
  proenv_0x499eff = "";
let proenv_0x10970d = process.env.jd_jingyun_draw_urls ? process.env.jd_jingyun_draw_urls : "";
let proenv_0x30720f = process.env.jd_jingyun_openCard ? process.env.jd_jingyun_openCard : 1;
$.shopid = "";
let proenv_0x2e486e = "jdapp;android;11.1.4;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM00 Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36";
let proenv_0x44b7cd = "http://hz.feverrun.top:99/share/card/getToken";
if ($.isNode()) {
  Object.keys(proenv_0x5c1959).forEach(_0x25f4f3 => {
    proenv_0x15748f.push(proenv_0x5c1959[_0x25f4f3]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  proenv_0x15748f = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...proenv_0x32064d($.getdata("CookiesJD") || "[]").map(_0x4900dd => _0x4900dd.cookie)].filter(_0x58ab05 => !!_0x58ab05);
}
allMessage = "";
message = "";
$.hotFlag = false;
$.outFlag = false;
$.activityEnd = false;
$.interfaceNameList = [];
$.drawOne = false;
$.shareUserId = "";
let proenv_0x30ae14 = "";
let proenv_0x277a73 = "",
  proenv_0x3519bc = "",
  proenv_0x4c4bd8 = "";
!(async () => {
  if (process.env.PRO_REDIS_URL) {
    try {
      $.redis = require("redis");
      pro_redis_url = process.env.PRO_REDIS_URL;
      const _0x13f785 = {
        url: pro_redis_url
      };
      $.client = $.redis.createClient(_0x13f785);
      if ($.client) {
        console.log("本地Redis已检测到配置链接");
        await $.client.connect();
      }
    } catch (_0x228e37) {
      console.log(_0x228e37);
      console.log("本地Redis连接失败, 退出执行！！！");
      process.exit(1);
    }
  }
  if (!proenv_0x15748f[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    process.exit(1);
    return;
  }
  if (!proenv_0x10970d) {
    console.log("【问题反馈】https://t.me/proenvc ");
    console.log("export jd_jingyun_draw_urls=\"xxx\" 未设置 退出！！！");
    process.exit(1);
    return;
  }
  let _0x59c6c2 = [];
  if (proenv_0x10970d.indexOf("\n") > -1) {
    _0x59c6c2 = proenv_0x10970d.split("\n");
  } else {
    if (proenv_0x10970d.indexOf("@") > -1) {
      _0x59c6c2 = proenv_0x10970d.split("@");
    } else {
      _0x59c6c2 = proenv_0x10970d.split("@");
    }
  }
  await proenv_0x1200e5.needAl(true);
  await proenv_0x1200e5.getTG();
  for (let _0x35b822 = 0; _0x35b822 < _0x59c6c2.length; _0x35b822++) {
    allMessage = "";
    message = "";
    console.log();
    $.activityUrl = _0x59c6c2[_0x35b822];
    try {
      $.activityId = (await proenv_0x5d0bdb.getUrlKeyValue("id", $.activityUrl)) || "";
      $.userId = (await proenv_0x5d0bdb.getUrlKeyValue("userId", $.activityUrl)) || "";
    } catch (_0x1de25e) {}
    if (!$.activityId || !$.userId) {
      console.log("活动链接填写的有问题");
      continue;
    }
    console.log("活动id: " + $.activityId);
    console.log("活动地址: " + $.activityUrl);
    $.activityEnd = false;
    for (let _0x575bf1 = 0; _0x575bf1 < proenv_0x15748f.length; _0x575bf1++) {
      message = "";
      proenv_0x499eff = proenv_0x15748f[_0x575bf1];
      originCookie = proenv_0x15748f[_0x575bf1];
      if (proenv_0x499eff) {
        $.UserName = decodeURIComponent(proenv_0x499eff.match(/pt_pin=([^; ]+)(?=;?)/) && proenv_0x499eff.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x575bf1 + 1;
        message = "";
        $.bean = 0;
        $.hotFlag = false;
        $.nickName = "";
        $.isLogin = true;
        $.continueFlag = false;
        console.log("******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********");
        $.UA = await proenv_0x1200e5.getUA($.UserName);
        $.uuid = proenv_0x4afd3f("xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx");
        await proenv_0x671e33();
        await proenv_0x534244();
      }
      if ($.outFlag || $.activityEnd) {
        break;
      }
      if (proenv_0x544a8e == true || proenv_0x5c4f78 == true) {
        await $.wait(parseInt(Math.random() * 200 + 200, 10));
      } else {
        await $.wait(parseInt(Math.random() * 1500 + 1500, 10));
      }
    }
    if (proenv_0x544a8e == true || proenv_0x5c4f78 == true) {
      await $.wait(parseInt(Math.random() * 200 + 200, 10));
    } else {
      await $.wait(parseInt(Math.random() * 1500 + 1500, 10));
    }
    if ($.isNode() && allMessage) {
      allMessage += "\n活动地址:" + $.activityUrl + "\n";
      $.msg($.name, "", "" + allMessage);
      if ($.isNode()) {
        await proenv_0x348488.sendNotify("" + $.name, "" + allMessage);
      }
      allMessage = "";
    }
  }
  if ($.outFlag) {
    let _0x6ae3c7 = "此ip已被限制，请过10分钟后再执行脚本";
    $.msg($.name, "", "" + _0x6ae3c7);
  }
  allMessage;
  process.exit(1);
})().catch(_0x19ca8a => $.logErr(_0x19ca8a)).finally(() => $.done());
async function proenv_0x671e33() {
  try {
    $.ERR_BAD_REQUEST = 0;
    $.hasEnd = false;
    $.openFlag = false;
    $.endTime = 0;
    $.Token = "";
    $.IsvToken = "";
    $.Pin = "";
    $.aesBuyerNick = "";
    $.startTime = 0;
    $.endTime = 0;
    $.openCard = 0;
    $.isLogin = true;
    $.myTeamLog = "";
    $.surPlusTeamNum = 0;
    $.isNeedFavourite = 1;
    $.isFavouriteShop = false;
    $.isEnd = 0;
    $.loadFrontAward = [];
    $.taskList = [];
    $.giveTimes = 0;
    $.breakFlag = false;
    if (proenv_0x544a8e == true) {
      await proenv_0x221262();
      if ($.getIpStatus == false) {
        await proenv_0x221262();
        console.log("代理获取失败，跳过此次执行！");
        return;
      }
    }
    $.isvObfuscator = "";
    await proenv_0x167bac();
    if (!$.IsvToken) {
      console.log("获取[token]失败！");
      return;
    }
    await proenv_0x13ba39("login");
    if (!$.aesBuyerNick) {
      console.log("获取buyerNick, 异常退出执行");
      return;
    }
    await proenv_0x13ba39("loadFrontAct");
    await proenv_0x13ba39("reportPVUV");
    if ($.index == 1 && $.isLogin == false) {
      process.exit(1);
    }
    if ($.isEnd == 1) {
      $.activityEnd = true;
      console.log("活动已结束");
      message += "活动已结束";
      return;
    }
    if ($.isLogin == false) {
      return;
    }
    if ($.index == 1) {
      console.log("开始时间: " + proenv_0x1200e5.timeFormat($.startTime));
      console.log("结束时间: " + proenv_0x1200e5.timeFormat($.endTime));
      console.log("活动规则： " + $.actRule);
    }
    if ($.startTime && Date.now() < $.startTime) {
      console.log("活动未开始");
      $.activityEnd = true;
      message += "活动未开始";
      return;
    }
    if ($.hasEnd === true || $.endTime && Date.now() > $.endTime) {
      $.activityEnd = true;
      console.log("活动已结束");
      message += "活动已结束";
      return;
    }
    if ($.openCard == 0) {
      if (proenv_0x30720f == 1) {
        $.shopactivityId = "";
        $.joinVenderId = $.venderId;
        await proenv_0x13ba39("getShopOpenCardInfo");
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        await proenv_0x13ba39("bindWithVender");
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        if ($.errorJoinShop.indexOf("开卡失败，请稍后重试~") > -1 || $.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1 || $.errorJoinShop.indexOf("加入店铺会员失败") > -1) {
          console.log("第1次重试");
          await proenv_0x13ba39("getShopOpenCardInfo");
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
          await proenv_0x13ba39("bindWithVender");
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
          return;
        }
        if ($.index != 1) {
          $.openFlag = true;
        }
      } else {
        return;
      }
    } else {
      console.log("已开卡: " + $.venderId);
    }
    if ($.isNeedFavourite == 1 && $.isFavouriteShop == false) {
      $.actionType = "favouriteShop";
      await proenv_0x13ba39("reportActionLog");
    } else {
      console.log("已关注店铺");
    }
    await proenv_0x13ba39("loadFrontAward");
    if ($.loadFrontAward.length >= 1) {
      console.log("奖励列表: ");
      for (let _0x22b963 of $.loadFrontAward) {
        console.log(_0x22b963.awardName + " 共" + _0x22b963.awardTotalQuantity + "份, 还剩" + _0x22b963.awardSurplusQuantity + "份");
      }
    }
    await proenv_0x13ba39("showTaskList");
    if ($.taskList.length >= 1) {
      for (let _0x27fa7a of $.taskList) {
        if (_0x27fa7a.isFinish == 1) {
          console.log("任务: " + _0x27fa7a.missionNameTemp + " - 已完成");
        } else {
          switch (_0x27fa7a.conditionType) {
            case "initial":
              break;
            case "singleOrder":
              console.log("任务: " + _0x27fa7a.missionNameTemp + " - 不做");
              break;
            case "favouriteShop":
              console.log("任务: " + _0x27fa7a.missionNameTemp + " - 去做");
              $.conditionType = "favouriteShop";
              await proenv_0x13ba39("completeActivityTask");
              break;
            case "joinMember":
              break;
            case "addCart":
              console.log("任务: " + _0x27fa7a.missionNameTemp + " - 去做");
              $.conditionType = "addCart";
              $.oneClick = 1;
              $.skuId = null;
              await proenv_0x13ba39("completeActivityTask");
              break;
            case "shareAct":
              $.conditionType = "shareAct";
              await proenv_0x13ba39("completeActivityTask");
              break;
            case "helpMemberCrowd":
              console.log("任务: " + _0x27fa7a.missionNameTemp + " - 不做");
              break;
            case "pointExchange":
              console.log("任务: " + _0x27fa7a.missionNameTemp + " - 不做");
              break;
          }
        }
      }
    }
    await proenv_0x13ba39("getDrawTimes");
    console.log("抽奖次数: " + $.giveTimes + "次");
    if ($.giveTimes >= 1) {
      for (let _0x24b212 = 0; _0x24b212 < $.giveTimes; _0x24b212++) {
        console.log("抽奖: " + (_0x24b212 + 1));
        await proenv_0x13ba39("postDraw");
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        if ($.breakFlag == true) {
          break;
        }
      }
    } else {
      console.log("暂无抽奖机会");
    }
    await proenv_0x13ba39("loadMyAwardLog");
    if ($.activityEnd === true) {
      console.log("来迟了，活动结束了，豆子干了！！！");
      return;
    }
    if ($.outFlag) {
      console.log("此ip已被限制，请过10分钟后再执行脚本\n");
      return;
    }
  } catch (_0x34e9e5) {
    console.log(_0x34e9e5.message);
  }
}
async function proenv_0x13ba39(_0x1a23f3) {
  if ($.outFlag || $.continueFlag) {
    return;
  }
  let _0x2197a8 = "";
  let _0x1a3fed = "post";
  switch (_0x1a23f3) {
    case "isvObfuscator":
      let _0x114463 = await proenv_0x4119be();
      url = "https://api.m.jd.com/client.action?functionId=isvObfuscator&lmt=0&" + _0x114463;
      _0x2197a8 = {};
      break;
    case "login":
      url = "https://jingyun-rc.isvjcloud.com/front/fans/login";
      const _0x1ae183 = {
        envInfo: "",
        id: $.activityId,
        method: "/front/fans/login",
        source: "01",
        token: $.IsvToken,
        userId: $.userId
      };
      const _0x1d1730 = {
        sign: "111111",
        sysmethod: "/front/fans/login",
        timestamp: 123456
      };
      const _0x181e50 = {
        appJsonParams: _0x1ae183,
        sysParams: _0x1d1730
      };
      _0x2197a8 = _0x181e50;
      break;
    case "reportActionLog":
      url = "https://jingyun-rc.isvjcloud.com/front/activity/reportActionLog";
      const _0x29c9cc = {
        actionType: $.actionType,
        buyerNick: $.aesBuyerNick,
        id: $.activityId,
        method: "/front/activity/reportActionLog",
        userId: $.userId
      };
      const _0x4f51f1 = {
        sign: "111111",
        sysmethod: "/front/activity/reportActionLog",
        timestamp: 123456
      };
      const _0x3ff699 = {
        appJsonParams: _0x29c9cc,
        sysParams: _0x4f51f1
      };
      _0x2197a8 = _0x3ff699;
      break;
    case "loadFrontAct":
      url = "https://jingyun-rc.isvjcloud.com/front/activity/loadFrontAct";
      const _0xb1aee9 = {
        buyerNick: $.aesBuyerNick,
        id: $.activityId,
        method: "/front/activity/loadFrontAct",
        userId: $.userId
      };
      const _0x160bf4 = {
        sign: "111111",
        sysmethod: "/front/activity/loadFrontAct",
        timestamp: 123456
      };
      const _0x383bc0 = {
        appJsonParams: _0xb1aee9,
        sysParams: _0x160bf4
      };
      _0x2197a8 = _0x383bc0;
      break;
    case "reportPVUV":
      url = "https://jingyun-rc.isvjcloud.com/front/activity/reportPVUV";
      const _0x4f45e3 = {
        buyerNick: $.aesBuyerNick,
        id: $.activityId,
        method: "/front/activity/reportPVUV",
        userId: $.userId
      };
      const _0x50e536 = {
        sign: "111111",
        sysmethod: "/front/activity/reportPVUV",
        timestamp: 123456
      };
      const _0x2bd1b0 = {
        appJsonParams: _0x4f45e3,
        sysParams: _0x50e536
      };
      _0x2197a8 = _0x2bd1b0;
      break;
    case "loadFrontAward":
      url = "https://jingyun-rc.isvjcloud.com/front/activity/loadFrontAward";
      const _0x57537f = {
        buyerNick: $.aesBuyerNick,
        id: $.activityId,
        method: "/front/activity/loadFrontAward",
        userId: $.userId
      };
      const _0xf093cf = {
        sign: "111111",
        sysmethod: "/front/activity/loadFrontAward",
        timestamp: 123456
      };
      const _0x51e845 = {
        appJsonParams: _0x57537f,
        sysParams: _0xf093cf
      };
      _0x2197a8 = _0x51e845;
      break;
    case "showTaskList":
      url = "https://jingyun-rc.isvjcloud.com/front/task/showTaskList";
      const _0x5c6669 = {
        buyerNick: $.aesBuyerNick,
        id: $.activityId,
        method: "/front/activity/showTaskList",
        userId: $.userId
      };
      const _0x17f02c = {
        sign: "111111",
        sysmethod: "/front/activity/showTaskList",
        timestamp: 123456
      };
      const _0x869b33 = {
        appJsonParams: _0x5c6669,
        sysParams: _0x17f02c
      };
      _0x2197a8 = _0x869b33;
      break;
    case "loadFrontItems":
      url = "https://jingyun-rc.isvjcloud.com/front/activity/loadFrontItems";
      const _0x5540f7 = {
        buyerNick: $.aesBuyerNick,
        id: $.activityId,
        method: "/front/activity/loadFrontItems",
        userId: 1000080364
      };
      const _0x20a938 = {
        sign: "111111",
        sysmethod: "/front/activity/loadFrontItems",
        timestamp: 123456
      };
      const _0x54f6b5 = {
        appJsonParams: _0x5540f7,
        sysParams: _0x20a938
      };
      _0x2197a8 = _0x54f6b5;
      break;
    case "loadMyAwardLog":
      url = "https://jingyun-rc.isvjcloud.com/front/activity/loadMyAwardLog";
      const _0x40a3a6 = {
        buyerNick: $.aesBuyerNick,
        current: 1,
        id: $.activityId,
        method: "/front/activity/loadMyAwardLog",
        pageSize: 10,
        userId: $.userId
      };
      const _0x2ad14a = {
        sign: "111111",
        sysmethod: "/front/activity/loadMyAwardLog",
        timestamp: 123456
      };
      const _0x202f69 = {
        appJsonParams: _0x40a3a6,
        sysParams: _0x2ad14a
      };
      _0x2197a8 = _0x202f69;
      break;
    case "completeActivityTask":
      url = "https://jingyun-rc.isvjcloud.com/front/task/completeActivityTask";
      if ($.conditionType == "addCart") {
        const _0x2c5ff2 = {
          buyerNick: $.aesBuyerNick,
          conditionType: $.conditionType,
          id: $.activityId,
          method: "/front/task/completeActivityTask",
          oneClick: $.oneClick,
          skuId: $.skuId,
          userId: $.userId
        };
        const _0x1a6537 = {
          sign: "111111",
          sysmethod: "/front/task/completeActivityTask",
          timestamp: 123456
        };
        const _0x5b2fa0 = {
          appJsonParams: _0x2c5ff2,
          sysParams: _0x1a6537
        };
        _0x2197a8 = _0x5b2fa0;
      } else {
        const _0x22ff51 = {
          buyerNick: $.aesBuyerNick,
          conditionType: $.conditionType,
          id: $.activityId,
          method: "/front/task/completeActivityTask",
          userId: $.userId
        };
        const _0x39bfbc = {
          sign: "111111",
          sysmethod: "/front/task/completeActivityTask",
          timestamp: 123456
        };
        const _0x59da2c = {
          appJsonParams: _0x22ff51,
          sysParams: _0x39bfbc
        };
        _0x2197a8 = _0x59da2c;
      }
      break;
    case "getDrawTimes":
      url = "https://jingyun-rc.isvjcloud.com/front/activity/getDrawTimes";
      const _0x4cf8b1 = {
        buyerNick: $.aesBuyerNick,
        id: $.activityId,
        method: "/front/activity/getDrawTimes",
        userId: $.userId
      };
      const _0x5b60ac = {
        sign: "111111",
        sysmethod: "/front/activity/getDrawTimes",
        timestamp: 123456
      };
      const _0x4df2b9 = {
        appJsonParams: _0x4cf8b1,
        sysParams: _0x5b60ac
      };
      _0x2197a8 = _0x4df2b9;
      break;
    case "postDraw":
      url = "https://jingyun-rc.isvjcloud.com/front/activity/postDraw";
      const _0x5205fb = {
        buyerNick: $.aesBuyerNick,
        drawTimes: 1,
        id: $.activityId,
        method: "/front/activity/postDraw",
        userId: $.userId
      };
      const _0x3c4f3d = {
        sign: "111111",
        sysmethod: "/front/activity/postDraw",
        timestamp: 123456
      };
      const _0x45cf04 = {
        appJsonParams: _0x5205fb,
        sysParams: _0x3c4f3d
      };
      _0x2197a8 = _0x45cf04;
      break;
    case "getShopOpenCardInfo":
      if (!$.joinVenderId) {
        console.log("没有开卡id");
        break;
      }
      const _0x2047b9 = {
        venderId: $.joinVenderId,
        channel: 102,
        payUpShop: true,
        queryVersion: "10.5.2",
        appid: "27004",
        needSecurity: true,
        bizId: "shopmember_m_jd_com"
      };
      _0x2197a8 = _0x2047b9;
      h5st = await proenv_0x7223a7("27004", _0x2197a8);
      h5st = encodeURIComponent(h5st);
      await $.wait(parseInt(Math.random() * 250 + 150, 10));
      url = "https://api.m.jd.com/client.action?functionId=getShopOpenCardInfo&body=" + encodeURIComponent(JSON.stringify(_0x2197a8)) + "&t=" + Date.now() + "&appid=shopmember_m_jd_com&clientVersion=9.2.0&client=H5&area=1_72_2799_0&uuid=88888&h5st=" + h5st + "&x-api-eid-token=";
      _0x2197a8 = "";
      break;
    case "bindWithVender":
      if (!$.joinVenderId) {
        console.log("没有开卡id");
        break;
      }
      _0x1a3fed = "post";
      if ($.shopactivityId == "") {
        const _0x6ac4f1 = {
          venderId: $.joinVenderId,
          shopId: $.joinVenderId,
          bindByVerifyCodeFlag: 1,
          registerExtend: {},
          writeChildFlag: 0,
          channel: 102,
          appid: "27004",
          needSecurity: true,
          bizId: "shopmember_m_jd_com"
        };
        _0x2197a8 = _0x6ac4f1;
      } else {
        const _0x5bd490 = {
          venderId: $.joinVenderId,
          shopId: $.joinVenderId,
          bindByVerifyCodeFlag: 1,
          registerExtend: {},
          writeChildFlag: 0,
          activityId: $.shopactivityId,
          channel: 102,
          appid: "27004",
          needSecurity: true,
          bizId: "shopmember_m_jd_com"
        };
        _0x2197a8 = _0x5bd490;
      }
      h5st = await proenv_0x7223a7("27004", _0x2197a8);
      h5st = encodeURIComponent(h5st);
      await $.wait(parseInt(Math.random() * 250 + 150, 10));
      url = "https://api.m.jd.com/client.action?functionId=bindWithVender&body=" + encodeURIComponent(JSON.stringify(_0x2197a8)) + "&t=" + Date.now() + "&appid=shopmember_m_jd_com&clientVersion=9.2.0&client=H5&area=1_72_2799_0&uuid=88888&h5st=" + h5st + "&x-api-eid-token=";
      _0x2197a8 = "";
      break;
    default:
      console.log("" + _0x1a23f3);
  }
  let _0x202b0d = proenv_0x2d2643(_0x1a23f3, url, _0x2197a8, _0x1a3fed);
  if (proenv_0x544a8e == true || proenv_0x5c4f78 == true) {
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
  } else {
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
  }
  options = {};
  if (proenv_0x544a8e == true) {
    const _0x23878e = {
      host: $.ip,
      port: $.ipo
    };
    const _0x2916db = {
      proxy: _0x23878e
    };
    const _0x1a6ac1 = {
      host: $.ip,
      port: $.ipo
    };
    const _0x33e11b = {
      proxy: _0x1a6ac1
    };
    const _0xf7988f = {
      headers: _0x202b0d.headers,
      timeout: _0x202b0d.timeout,
      proxy: false,
      httpAgent: proenv_0x40114a.httpOverHttp(_0x2916db),
      httpsAgent: proenv_0x40114a.httpsOverHttp(_0x33e11b)
    };
    options = _0xf7988f;
  } else {
    const _0x27e16b = {
      headers: _0x202b0d.headers,
      timeout: _0x202b0d.timeout
    };
    options = _0x27e16b;
  }
  if (_0x1a3fed.toLowerCase().includes("post")) {
    return proenv_0x199c5d.post(url, _0x2197a8, options).then(function (_0x183f89) {
      _0x183f89 = proenv_0x4cda8d(_0x183f89);
      if (_0x183f89) {
        proenv_0x3a3f65(_0x1a23f3, _0x183f89);
      }
    }).catch(async function (_0x444e28) {
      if (_0x444e28.response) {
        console.log(_0x444e28.response.status);
        if (!(proenv_0x544a8e == true || proenv_0x5c4f78 == true)) {
          if (_0x444e28.response.status == "493") {
            console.log("ip可能已经被限制， 过十分钟再来！！！");
            $.outFlag = true;
            process.exit(1);
          }
        }
        _0x444e28.response.status == "403";
      }
      console.log("错误码1: " + _0x1a23f3 + " - " + _0x444e28.code);
      if (_0x444e28.code == "ECONNABORTED" || _0x444e28.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x1a23f3) || _0x444e28.code == "ERR_BAD_RESPONSE") {
        if ($.ERR_BAD_REQUEST >= 5) {
          $.ERR_BAD_REQUEST = 0;
        } else {
          $.ERR_BAD_REQUEST += 1;
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
          await proenv_0x13ba39(_0x1a23f3);
        }
      }
      if (_0x444e28.code == "ECONNRESET") {
        await $.wait(parseInt(Math.random() * 500 + 350, 10));
        if (proenv_0x544a8e == true) {
          $.getIpStatus = true;
          await proenv_0x221262();
          await proenv_0x13ba39(_0x1a23f3);
        }
      }
    });
  } else {
    if (_0x1a3fed.toLowerCase().includes("get")) {
      return proenv_0x199c5d.get(url, options).then(function (_0x1dd38b) {
        _0x1dd38b = proenv_0x4cda8d(_0x1dd38b);
        if (_0x1dd38b) {
          proenv_0x3a3f65(_0x1a23f3, _0x1dd38b);
        }
      }).catch(async function (_0x1ee7f8) {
        if (_0x1ee7f8.response) {
          console.log(_0x1ee7f8.response.status);
          if (!(proenv_0x544a8e == true || proenv_0x5c4f78 == true)) {
            if (_0x1ee7f8.response.status == "493") {
              console.log("ip可能已经被限制， 过十分钟再来！！！");
              $.outFlag = true;
              process.exit(1);
            }
          }
          _0x1ee7f8.response.status == "403";
        }
        console.log("错误码1: " + _0x1a23f3 + " - " + _0x1ee7f8.code);
        if (_0x1ee7f8.code == "ECONNABORTED" || _0x1ee7f8.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x1a23f3) || _0x1ee7f8.code == "ERR_BAD_RESPONSE") {
          if ($.ERR_BAD_REQUEST >= 5) {
            $.ERR_BAD_REQUEST = 0;
          } else {
            $.ERR_BAD_REQUEST += 1;
            await $.wait(parseInt(Math.random() * 500 + 500, 10));
            await proenv_0x13ba39(_0x1a23f3);
          }
        }
        if (_0x1ee7f8.code == "ECONNRESET") {
          await $.wait(parseInt(Math.random() * 500 + 350, 10));
          if (proenv_0x544a8e == true) {
            $.getIpStatus = true;
            await proenv_0x221262();
            await proenv_0x13ba39(_0x1a23f3);
          }
        }
      });
    }
  }
}
function proenv_0x3a3f65(_0x569c2e, _0x301047) {
  let _0x39912b = "";
  try {
    if (!["accessLog", "attendLog", "getCk", "drawContent", "accessLogWithAD", "accessLog"].includes(_0x569c2e)) {
      if (_0x301047) {
        _0x39912b = JSON.parse(_0x301047);
      }
    }
  } catch (_0x408442) {
    console.log(_0x569c2e + " 执行任务异常");
    console.log(_0x301047 + "===>" + _0x408442);
    $.runFalag = false;
  }
  try {
    switch (_0x569c2e) {
      case "isvObfuscator":
        if (_0x39912b && _0x39912b.code == 0 && _0x39912b.token) {
          $.IsvToken = _0x39912b.token || "";
        } else {
          console.log(_0x39912b.message);
          $.isvObfuscator = _0x39912b.message || "";
          $.IsvToken = "";
        }
        break;
      case "login":
        if (_0x39912b.code == "200" && _0x39912b.result) {
          $.aesBuyerNick = _0x39912b.result.aesBuyerNick || "";
          $.buyerNick = _0x39912b.result.buyerNick || "";
          $.openCard = _0x39912b.result.openCard || 0;
        } else {
          console.log(_0x301047);
        }
        break;
      case "reportActionLog":
        if (_0x39912b.code == "200" && _0x39912b.result) {
          if ($.actionType == "favouriteShop") {
            console.log("关注成功");
          }
        } else {
          if (_0x39912b.code == "F00001") {
            console.log(_0x39912b.message || "");
            $.isLogin = false;
          } else {
            console.log(_0x39912b.code + " - " + _0x39912b.message);
          }
        }
        break;
      case "reportPVUV":
        break;
      case "loadFrontAct":
        if (_0x39912b.code == "200" && _0x39912b.result) {
          $.shopId = _0x39912b.result.user.shopId || "";
          $.venderId = _0x39912b.result.user.venderId || "";
          $.userId = $.venderId;
          activity = _0x39912b.result.activity || "";
          if (activity != "") {
            $.startTime = activity.startTime || 0;
            $.endTime = activity.endTime || 0;
            $.actName = activity.actName || "";
            $.actRule = activity.remark || "";
            $.isNeedFavourite = activity.isNeedFavourite || 0;
            $.isEnd = activity.isEnd || 0;
          }
          $.isFansSignUp = _0x39912b.result.isFansSignUp || false;
          $.isFavouriteShop = _0x39912b.result.isFavouriteShop || false;
          $.isHaveHelpLog = _0x39912b.result.isHaveHelpLog || false;
          $.isReceiveAward = _0x39912b.result.isReceiveAward || false;
        } else {
          if (_0x39912b.code == "F00001") {
            console.log(_0x39912b.message || "");
            $.isLogin = false;
          }
        }
        break;
      case "loadFrontAward":
        if (_0x39912b.code == "200" && _0x39912b.result) {
          $.loadFrontAward = _0x39912b.result || [];
        }
        break;
      case "showTaskList":
        if (_0x39912b.code == "200" && _0x39912b.result) {
          $.taskList = _0x39912b.result.taskList || [];
        }
        break;
      case "loadFrontItems":
        _0x39912b.code == "200" && _0x39912b.result;
        break;
      case "loadMyAwardLog":
        if (_0x39912b.code == "200" && _0x39912b.result) {
          let _0x243f2b = _0x39912b.result.list || [];
          console.log("我的奖励: ");
          if (_0x243f2b.length >= 1) {
            let _0x46bc31 = "";
            for (let _0x142bfa of _0x243f2b) {
              _0x46bc31 += _0x142bfa.awardName + ", ";
            }
            console.log(_0x46bc31);
          }
        }
        break;
      case "completeActivityTask":
        if (_0x39912b.code == "200" && _0x39912b.result) {
          console.log(_0x39912b.result.msg);
        }
        break;
      case "getDrawTimes":
        if (_0x39912b.code == "200" && _0x39912b.result) {
          $.giveTimes = _0x39912b.result.giveTimes || 0;
        }
        break;
      case "postDraw":
        if (_0x39912b.code == "200" && _0x39912b.result) {
          if (_0x301047.indexOf("dmAward") > -1) {
            dmAward = _0x39912b.result.dmAward || "";
            if (dmAward != "") {
              console.log("获得: " + (dmAward.awardName || "空气"));
              message += "获得: " + (dmAward.awardName || "空气");
            }
          }
        } else {
          if (_0x39912b.code == "F00001") {
            console.log(_0x39912b.message || "");
            $.isLogin = false;
          } else {
            console.log(_0x39912b.code + " - " + _0x39912b.message);
            if (_0x301047.indexOf("已达到单日最大抽奖次数") > -1) {
              $.breakFlag = true;
            }
          }
        }
        break;
      case "getShopOpenCardInfo":
        if (_0x301047) {
          _0x301047 = _0x301047 && _0x301047.match(/jsonp_.*?\((.*?)\);/) && _0x301047.match(/jsonp_.*?\((.*?)\);/)[1] || _0x301047;
          _0x39912b = JSON.parse(_0x301047);
          if (_0x39912b && _0x39912b.success == true) {
            openCardStatus = _0x39912b.result[0].userInfo.openCardStatus || 0;
            venderCardName = _0x39912b.result[0].shopMemberCardInfo.venderCardName || "";
            if (openCardStatus === 1) {
              console.log("已入会: " + $.joinVenderId + " - " + venderCardName);
            } else {
              if (openCardStatus == 0) {
                console.log("去开卡: " + $.joinVenderId + " - " + venderCardName);
              }
            }
            $.shopactivityId = _0x39912b.result[0].interestsRuleList && _0x39912b.result[0].interestsRuleList[0] && _0x39912b.result[0].interestsRuleList[0].interestsInfo && _0x39912b.result[0].interestsRuleList[0].interestsInfo.activityId || "";
          } else {
            _0x39912b.busiCode == "9001";
            _0x39912b.busiCode == "1";
          }
        }
        break;
      case "bindWithVender":
        if (_0x301047) {
          _0x301047 = _0x301047 && _0x301047.match(/jsonp_.*?\((.*?)\);/) && _0x301047.match(/jsonp_.*?\((.*?)\);/)[1] || _0x301047;
          _0x301047.indexOf("加入店铺会员成功") > -1 || _0x301047.indexOf("已经是本店会员") > -1;
          _0x301047.indexOf("活动太火爆，请稍后再试") > -1;
          _0x39912b = JSON.parse(_0x301047);
          if (_0x39912b && _0x39912b.success === true) {
            if (_0x39912b.busiCode == 0) {
              console.log("" + _0x39912b.message);
            } else {
              console.log(_0x39912b.busiCode + ": " + _0x39912b.message);
            }
            $.errorJoinShop = _0x39912b.message || "";
            if (_0x39912b.result && _0x39912b.result.giftInfo) {
              for (let _0x235875 of _0x39912b.result.giftInfo.giftList) {
                console.log("入会获得: " + _0x235875.discountString + _0x235875.prizeName + _0x235875.secondLineDesc);
              }
            }
          } else {
            if (_0x39912b && typeof _0x39912b == "object" && _0x39912b.message) {
              $.errorJoinShop = _0x39912b.message || "";
              console.log(_0x39912b.busiCode + ": " + _0x39912b.message);
              _0x39912b.busiCode == "2001";
              _0x39912b.busiCode == "9002";
              _0x39912b.busiCode == "9003";
              _0x39912b.busiCode == "0";
            } else {
              console.log(_0x301047);
            }
          }
        }
        break;
      default:
        console.log(_0x569c2e + "-> " + JSON.stringify(_0x39912b));
    }
  } catch (_0x521d29) {
    console.log(_0x521d29);
  }
}
function proenv_0x2d2643(_0x47284c, _0x52098d, _0x14aebb, _0x43bf4b = "post") {
  const _0x5e3c60 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    Connection: "keep-alive",
    "Content-Type": "application/json;",
    Origin: "https://jingyun-rc.isvjcloud.com",
    Cookie: proenv_0x499eff,
    "User-Agent": $.UA,
    "X-Requested-With": "com.jingdong.app.mall"
  };
  let _0x2c837 = _0x5e3c60;
  if (_0x52098d.indexOf("https://jingyun-rc.isvjcloud.com") > -1) {
    _0x2c837.Referer = "" + $.activityUrl;
  }
  if ($.aesBuyerNick != "") {
    _0x2c837.jyf = $.aesBuyerNick;
  }
  if (_0x43bf4b.toLowerCase().includes("post")) {
    _0x2c837["Content-Type"] = "application/json;";
  }
  if (["getShopOpenCardInfo", "bindWithVender"].includes(_0x47284c)) {
    const _0x579488 = {
      Accept: "*/*",
      "User-Agent": $.UA,
      "content-type": "application/x-www-form-urlencoded",
      "x-rp-client": "h5_1.0.0",
      "x-referer-page": "https://pages.jd.com/member/shopcard",
      origin: "https://pages.jd.com",
      "X-Requested-With": "com.jingdong.app.mall",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      Referer: "https://pages.jd.com/",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      Cookie: proenv_0x499eff
    };
    _0x2c837 = _0x579488;
  }
  if (proenv_0x277a73 != "") {
    _0x2c837.nonce = proenv_0x277a73;
  }
  if (proenv_0x3519bc != "") {
    _0x2c837.ts = proenv_0x3519bc;
  }
  if (proenv_0x4c4bd8 != "") {
    _0x2c837.s = proenv_0x4c4bd8;
  }
  const _0x51bff1 = {
    url: _0x52098d,
    headers: _0x2c837,
    body: _0x14aebb,
    timeout: 30000
  };
  return _0x51bff1;
}
function proenv_0x386f75(_0x3accbe) {
  _0x3accbe = _0x3accbe || 32;
  let _0x96ecb1 = "abcdef0123456789",
    _0x522b52 = _0x96ecb1.length,
    _0x39dae0 = "";
  for (i = 0; i < _0x3accbe; i++) {
    _0x39dae0 += _0x96ecb1.charAt(Math.floor(Math.random() * _0x522b52));
  }
  return _0x39dae0;
}
function proenv_0x32064d(_0x5c557d) {
  if (typeof _0x5c557d == "string") {
    try {
      return JSON.parse(_0x5c557d);
    } catch (_0x148885) {
      console.log(_0x148885);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function proenv_0x4cda8d(_0x59685d) {
  proenv_0x44e702(_0x59685d);
  if (_0x59685d.status == 200 && _0x59685d.data) {
    _0x59685d = _0x59685d.data;
    if (typeof _0x59685d == "object") {
      return JSON.stringify(_0x59685d);
    } else {
      return _0x59685d;
    }
  } else {
    return "";
  }
}
function proenv_0x44e702(_0x4c80f5) {
  if (_0x4c80f5.headers._nonce && _0x4c80f5.headers._ts && _0x4c80f5.headers._s) {
    proenv_0x277a73 = _0x4c80f5.headers._nonce;
    proenv_0x3519bc = _0x4c80f5.headers._ts;
    proenv_0x4c4bd8 = _0x4c80f5.headers._s;
  }
}
function proenv_0x4afd3f(_0x1675a9 = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0x24c7fa = 0) {
  return _0x1675a9.replace(/[xy]/g, function (_0x8612a0) {
    var _0x545674 = 16 * Math.random() | 0,
      _0x1c3bb7 = "x" == _0x8612a0 ? _0x545674 : 3 & _0x545674 | 8;
    uuid = _0x24c7fa ? _0x1c3bb7.toString(36).toUpperCase() : _0x1c3bb7.toString(36);
    return uuid;
  });
}
function proenv_0x435dc9(_0x2f4174, _0x559b12) {
  return Math.floor(Math.random() * (_0x559b12 - _0x2f4174)) + _0x2f4174;
}
async function proenv_0x7223a7(_0x20a912, _0x15fbb4) {
  return new Promise(_0x5646a2 => {
    const _0x3952fb = {
      "User-Agent": "jdapp;android;11.4.1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o410 Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36"
    };
    const _0x1bfd76 = {
      url: "http://hz.feverrun.top:99/share/card/getH5st410",
      body: "bid=" + _0x20a912 + "&body=" + JSON.stringify(_0x15fbb4),
      headers: _0x3952fb,
      timeout: 60000
    };
    $.post(_0x1bfd76, (_0x1a0776, _0x2891f7, _0x1b5462) => {
      try {
        if (_0x1a0776) {
          console.log("请求失败，请检查网路");
          console.log(_0x1a0776);
        } else {
          try {
            _0x1b5462 = _0x1b5462;
          } catch (_0x29f9a2) {
            _0x1b5462 = "";
          }
        }
      } catch (_0x5700b5) {} finally {
        _0x5646a2(_0x1b5462 || "");
      }
    });
  });
}
async function proenv_0x4119be() {
  return new Promise(_0x5384f9 => {
    const _0xdf2ecb = {
      "User-Agent": proenv_0x2e486e
    };
    const _0xf48410 = {
      url: proenv_0x44b7cd + "?type=lzkj",
      headers: _0xdf2ecb,
      timeout: 60000
    };
    $.get(_0xf48410, (_0x4a6b5f, _0x54922a, _0x14e550) => {
      try {
        if (_0x4a6b5f) {
          console.log("请求失败，请检查网路");
        } else {
          try {
            _0x14e550 = JSON.parse(_0x14e550);
            if (_0x14e550.code == 0) {
              _0x14e550 = _0x14e550.data;
            } else {
              _0x14e550 = "";
            }
          } catch (_0x14edd0) {
            _0x14e550 = "";
          }
        }
      } catch (_0x323c9e) {} finally {
        _0x5384f9(_0x14e550 || "");
      }
    });
  });
}
async function proenv_0x487de0(_0x4d29c0, _0x804a98) {
  await $.wait(parseInt(Math.random() * 500 + 500, 10));
  return new Promise(_0x124f6b => {
    const _0x257530 = {
      url: "http://hz.feverrun.top:99/share/sub/subIsvToken",
      body: "pin=" + encodeURIComponent(_0x4d29c0) + "&token=" + _0x804a98,
      headers: {},
      timeout: 60000
    };
    _0x257530.headers["User-Agent"] = "jdapp;android;11.5.0;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36";
    $.post(_0x257530, (_0x2727a7, _0x548a7e, _0x39d9c7) => {
      try {
        if (_0x2727a7) {
          console.log("缓存token失败2");
          _0x39d9c7 = "";
        } else {
          try {
            _0x39d9c7 = _0x39d9c7;
          } catch (_0x305514) {
            _0x39d9c7 = "";
          }
        }
      } catch (_0x4ed95c) {
        _0x39d9c7 = "";
      } finally {
        _0x124f6b(_0x39d9c7 || "");
      }
    });
  });
}
async function proenv_0x7e8edf(_0x9b3bed) {
  await $.wait(parseInt(Math.random() * 500 + 500, 10));
  if ($.client) {
    return new Promise(async _0x23e35f => {
      data = await $.client.get(_0x9b3bed);
      _0x23e35f(data || "");
    });
  } else {
    return new Promise(_0x5c9d90 => {
      const _0x510d0c = {
        url: "http://hz.feverrun.top:99/share/get/getIsvToken",
        body: "pin=" + encodeURIComponent(_0x9b3bed),
        headers: {},
        timeout: 60000
      };
      _0x510d0c.headers["User-Agent"] = "jdapp;android;11.5.0;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36";
      $.post(_0x510d0c, (_0x1ebd9d, _0x55b555, _0x8677f9) => {
        try {
          if (_0x1ebd9d) {
            console.log("缓存token失败1");
            _0x8677f9 = "";
          } else {
            try {
              _0x8677f9 = _0x8677f9;
            } catch (_0x5bdcf8) {
              _0x8677f9 = "";
            }
          }
        } catch (_0x5cb5da) {
          _0x8677f9 = "";
        } finally {
          _0x5c9d90(_0x8677f9 || "");
        }
      });
    });
  }
}
function proenv_0x4361e3(_0x3c371e) {
  var _0x303a45 = _0x3c371e + "=";
  var _0x5415ac = proenv_0x30ae14.split(";");
  for (var _0x1dd524 = 0; _0x1dd524 < _0x5415ac.length; _0x1dd524++) {
    var _0x573a1a = _0x5415ac[_0x1dd524].trim();
    if (_0x573a1a.indexOf(_0x303a45) === 0) {
      return _0x573a1a.substring(_0x303a45.length, _0x573a1a.length);
    }
  }
  return "";
}
async function proenv_0x167bac() {
  if ($.client) {
    return new Promise(async _0x1d6720 => {
      $token = await proenv_0x7e8edf(encodeURIComponent($.UserName));
      if ($token != "") {
        console.log("读取缓存token成功");
        $.IsvToken = $token;
      } else {
        for (let _0xf612ed = 0; _0xf612ed < 1; _0xf612ed++) {
          await proenv_0x13ba39("isvObfuscator");
          if ($.IsvToken != "" && $.IsvToken != undefined) {
            console.log("缓存token成功");
            await $.client.set(encodeURIComponent($.UserName), $.IsvToken);
            await $.client.expire(encodeURIComponent($.UserName), 1740);
            break;
          } else {
            console.log("缓存token失败" + (_0xf612ed + 1));
          }
          if ($.isvObfuscator.indexOf("参数异常") > -1) {
            break;
          }
        }
      }
      _0x1d6720();
    });
  } else {
    return new Promise(async _0x1404da => {
      $token = await proenv_0x7e8edf(encodeURIComponent($.UserName));
      if ($token != "") {
        console.log("读取缓存token成功");
        $.IsvToken = $token;
      } else {
        for (let _0x377134 = 0; _0x377134 < 1; _0x377134++) {
          await proenv_0x13ba39("isvObfuscator");
          if ($.IsvToken != "" && $.IsvToken != undefined) {
            console.log("缓存token成功");
            await proenv_0x487de0(encodeURIComponent($.UserName), $.IsvToken);
            break;
          } else {
            console.log("缓存token失败" + (_0x377134 + 1));
          }
          if ($.isvObfuscator.indexOf("参数异常") > -1) {
            break;
          }
        }
      }
      _0x1404da();
    });
  }
}
async function proenv_0x221262() {
  return new Promise(async _0x497e96 => {
    try {
      await $.wait(parseInt(Math.random() * 250 + 150, 10));
      let _0x257a28 = await proenv_0x57da66();
      if (_0x257a28 != "") {
        $.getIpStatus = true;
        console.log("当前: " + _0x257a28);
        ips = _0x257a28.split(":");
        $.ip = ips[0];
        $.ipo = ips[1];
        await $.wait(parseInt(Math.random() * 250 + 150, 10));
      } else {
        $.getIpStatus = false;
        console.log("代理获取失败");
      }
    } catch (_0x5038f7) {
      $.getIpStatus = false;
      console.log("代理获取失败");
    }
    if ($.getIpStatus == false) {
      try {
        await $.wait(parseInt(Math.random() * 250 + 150, 10));
        let _0x3e862b = await proenv_0x57da66();
        if (_0x3e862b != "") {
          $.getIpStatus = true;
          console.log("当前: " + _0x3e862b);
          ips = _0x3e862b.split(":");
          $.ip = ips[0];
          $.ipo = ips[1];
          await $.wait(parseInt(Math.random() * 250 + 150, 10));
        } else {
          $.getIpStatus = false;
          console.log("代理获取失败");
        }
      } catch (_0x417ea1) {
        $.getIpStatus = false;
        console.log("代理获取失败");
      }
    }
    if ($.getIpStatus == false) {
      console.log("代理获取失败，跳过此次执行！");
      _0x497e96(false);
    } else {
      _0x497e96(true);
    }
  });
}
function proenv_0x57da66() {
  try {
    return new Promise(_0x1a08bd => {
      const _0x200afd = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/538.38"
      };
      const _0x497466 = {
        url: your_proxy_url,
        headers: _0x200afd,
        timeout: 30000
      };
      $.get(_0x497466, (_0x39dc35, _0x10f319, _0x42632f) => {
        try {
          if (_0x39dc35) {
            console.log("获取Ip失败");
          } else {
            try {
              if (_0x42632f.indexOf("\r\n") > -1) {
                _0x42632f = _0x42632f.split("\r\n");
                if (_0x42632f.length >= 1) {
                  _0x42632f = _0x42632f[0];
                }
              } else {
                if (_0x42632f.indexOf("\n") > -1) {
                  _0x42632f = _0x42632f.split("\n");
                  if (_0x42632f.length >= 1) {
                    _0x42632f = _0x42632f[0];
                  }
                } else {
                  if (_0x42632f.indexOf("\r") > -1) {
                    _0x42632f = _0x42632f.split("\r");
                    if (_0x42632f.length >= 1) {
                      _0x42632f = _0x42632f[0];
                    }
                  } else {
                    if (_0x42632f.indexOf("\t") > -1) {
                      _0x42632f = _0x42632f.split("\t");
                      if (_0x42632f.length >= 1) {
                        _0x42632f = _0x42632f[0];
                      }
                    }
                  }
                }
              }
            } catch (_0x22711b) {
              _0x42632f = "";
            }
          }
        } catch (_0x294d91) {} finally {
          _0x1a08bd(_0x42632f || "");
        }
      });
    });
  } catch (_0x48e9fd) {
    console.log(_0x48e9fd.message);
  }
}
async function proenv_0x534244() {
  if ($.isNode()) {
    if (message) {
      $.msg($.name, "", "【京东账号" + $.index + "】" + $.UserName + " " + message + " \n");
      allMessage += "【京东账号" + $.index + "】" + $.UserName + " " + message + ($.index !== proenv_0x15748f.length ? "\n" : "");
    } else {
      allMessage += "";
    }
  }
}