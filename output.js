//Mon Aug 05 2024 01:29:32 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x9ddfbf = $.isNode() ? require("./sendNotify") : "",
  _0x2946b3 = $.isNode() ? require("./jdCookie.js") : "",
  _0x29c7c3 = require("./function/dylans"),
  _0x264141 = require("./USER_AGENTS"),
  _0x54d4af = require("./function/dylib");
let _0x3e8387 = true,
  _0x1f3136 = [],
  _0x35b11d = [],
  _0xfc84a3 = [],
  _0x1c8102 = [],
  _0x499a39 = {},
  _0x40d6c0 = [],
  _0x584117 = "",
  _0x410731 = "",
  _0x229170 = "",
  _0x811f17 = "",
  _0x334843;
const _0x1076b8 = process.env.DJGGLNUM || "9999",
  _0xe2029e = process.env.DJGGLLTNUM || "-1",
  _0x3421e9 = process.env.DJGGLDELAY || "1",
  _0x36b4df = process.env.TXDELAY || "5",
  _0x2bc8b6 = process.env.HLDELAY || "1",
  _0xf02d4e = process.env.TXIVAL || "1",
  _0x2eab8e = process.env.DJGGLTORED || false,
  _0x9f9ff7 = process.env.DJGGLTOPPIN || "",
  _0x255580 = process.env.TXSILENT || false,
  _0x2aad6e = process.env.DJGGLCODE || "",
  _0x3f0da2 = process.env.CXJLJQ_COUNT || "10",
  _0x12163c = process.env.TX_MODE || "0",
  _0xb8c4fa = process.env.CXJHELP_NODRAW || false,
  _0x5a80ee = process.env.NOTX ? process.env.NOTX : false;
if (process.env.DY_PROXY) try {
  _0x499a39 = require("./function/proxy.js");
  $.dget = _0x499a39.intoRequest($.get.bind($));
  $.dpost = _0x499a39.intoRequest($.post.bind($));
} catch {
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
if ($.isNode()) {
  Object.keys(_0x2946b3).forEach(_0x2e176c => {
    _0x40d6c0.push(_0x2946b3[_0x2e176c]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else _0x40d6c0 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x199592($.getdata("CookiesJD") || "[]").map(_0x3e6444 => _0x3e6444.cookie)].filter(_0x4eeaef => !!_0x4eeaef);
!(async () => {
  if (!_0x40d6c0[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  $.log("\n❗❗❗每天1次助力次数，0点刷新❗❗❗");
  $.log("\n当前版本：20240617");
  console.log("执行流程，车头开团--助力車頭--車頭抽獎--車頭提現");
  console.log("TG频道：https://t.me/dylan_jdpro");
  $.log("\n环境变量清单（可选项）：");
  $.log("  指定PIN车头：不指定默认CK1  DJGGLTOPPIN='jdpin'\n  指定助力CODE：都去助力TA  DJGGLCODE='xxx'\n  多少助力停止：默认9999个  DJGGLNUM='100'\n  抽奖次数：默认抽完  DJGGLLTNUM='200'\n  抽奖间隔：默认1秒  DJGGLDELAY='3'\n  提现间隔：默认5秒  TXDELAY='3'\n  助力间隔：默认1秒  HLDELAY='3'\n  提现模式：默认提当前，设置1查列表提现，TX_MODE='1'\n  提现范围：默认1天内，太大会403  TXIVAL='3'\n  开启提现到上限转红包：DJGGLTORED='true'\n  支持代理API： DY_PROXY='apiurl'\n  垃圾券数量：默认10次，CXJLJQ_COUNT='20'\n  关闭抽奖：默认助力完车头自动抽奖，CXJHELP_NODRAW='true'\n  关闭提现：NOTX='true'\n");
  let _0x30713f = await _0x289ba0();
  if (_0x9f9ff7) {
    console.log("\n已指定PIN：" + _0x9f9ff7);
    let _0x2f46eb = _0x40d6c0.findIndex(_0x31e230 => _0x31e230.includes(_0x9f9ff7));
    if (_0x2f46eb == -1) {
      console.log("运行的CK中没找到指定的PIN，停止执行");
      return;
    }
    _0x410731 = _0x40d6c0[_0x2f46eb];
  } else console.log("\n未指定PIN默认CK1车头"), _0x410731 = _0x40d6c0[0];
  _0x584117 = _0x410731;
  $.UserName = decodeURIComponent(_0x584117.match(/pt_pin=([^; ]+)(?=;?)/) && _0x584117.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
  $.isLogin = true;
  $.nickName = "";
  $.UA = _0x264141.UARAM ? _0x264141.UARAM() : _0x264141.USER_AGENT;
  console.log("\n————————————————————车头开团——————————————————————————");
  console.log("账号：" + ($.nickName || $.UserName));
  await _0x50bf52();
  if (!$.isLogin) {
    $.msg($.name, "【提示】cookie已失效", "账号" + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    $.isNode() && (await _0x9ddfbf.sendNotify($.name + "cookie已失效 - " + $.UserName, "账号 " + $.UserName + "\n请重新登录获取cookie"));
    return;
  }
  await _0x78508d(1);
  await $.wait(1000);
  if (_0x30713f.length != 0) {
    let _0x1cc73c = _0x30713f[Math.floor(Math.random() * _0x30713f.length)];
    console.log("车头去助力 -> 作者");
    $.UserName = decodeURIComponent(_0x584117.match(/pt_pin=([^; ]+)(?=;?)/) && _0x584117.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
    $.UA = _0x264141.UARAM ? _0x264141.UARAM() : _0x264141.USER_AGENT;
    await _0x43a202(_0x1cc73c);
    await $.wait(2000);
  }
  console.log("——————————————————————————————————————————————————————");
  console.log("\n\n———————————开始助力车头(助力间隔" + _0x2bc8b6 + "秒)—————————————");
  _0x2aad6e && (console.log("\n已指定助力CODE,那抛弃车头去助力TA"), _0x1f3136 = [], _0x1f3136.push(_0x2aad6e));
  _0x334843 = 0;
  for (let _0x574b96 of _0x1f3136) {
    if (_0x40d6c0.length === 1) {
      console.log("");
      break;
    }
    console.log("\n去助力-> " + _0x574b96);
    $.suc = 0;
    for (let _0x5ab9de = _0x334843; _0x5ab9de < _0x40d6c0.length; _0x5ab9de++) {
      if (_0x40d6c0[_0x5ab9de]) {
        _0x584117 = _0x40d6c0[_0x5ab9de];
        $.UserName = decodeURIComponent(_0x584117.match(/pt_pin=([^; ]+)(?=;?)/) && _0x584117.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x5ab9de + 1;
        $.isLogin = true;
        $.nickName = "";
        $.UA = _0x264141.UARAM ? _0x264141.UARAM() : _0x264141.USER_AGENT;
        console.log("\n开始【账号" + $.index + "】 " + ($.nickName || $.UserName) + "\n");
        await _0x43a202(_0x574b96);
        _0x499a39.swip && (await _0x499a39.swip());
        if ($.suc >= Number(_0x1076b8)) {
          $.log("已达目标助力数，跳出！");
          _0x334843 = _0x5ab9de + 1;
          break;
        }
        await $.wait(_0x2bc8b6 * 1000);
      }
    }
    if ($.index === _0x40d6c0.length) {
      console.log("\n没有可用于助力的ck，跳出！");
      break;
    }
  }
  if (_0xb8c4fa == "true") {
    console.log("\n已设置不自动抽奖提现");
    return;
  }
  console.log("\n\n—————————————————开始车头抽奖和提现—————————————————");
  _0xe2029e > -1 && console.log("\n已设置本次运行抽奖次数：" + _0xe2029e);
  let _0x3cbf1f = new Date();
  _0x3cbf1f.setDate(_0x3cbf1f.getDate() - _0xf02d4e);
  _0x584117 = _0x410731;
  $.UserName = decodeURIComponent(_0x584117.match(/pt_pin=([^; ]+)(?=;?)/) && _0x584117.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
  $.isLogin = true;
  $.nickName = "";
  $.fail = 0;
  _0x35b11d = [];
  _0xfc84a3 = [];
  txjscore = [];
  $.txj = true;
  $.fg = 1;
  $.txfull = false;
  $.nocashnum = 0;
  $.end = false;
  $.hotflag = false;
  $.toredfailnum = 0;
  $.txjsuc = false;
  $.banip = false;
  $.xcrflag = 1;
  $.UA = _0x264141.UARAM ? _0x264141.UARAM() : _0x264141.USER_AGENT;
  let _0x5e798a = await _0x78508d(0);
  await $.wait(1000);
  if (_0x5e798a.code != "0") return;
  $.log("本轮已抽奖次数：" + _0x5e798a.data.drawPrizeNum);
  $.log("本轮剩余抽奖次数：" + $.times);
  if (_0x5e798a.data.cashVo) {
    if (_0x5e798a.data?.["cashVo"]?.["state"] === 1) $.log("本轮兑换金进度：" + _0x5e798a.data.cashVo.amount + "/" + _0x5e798a.data.cashVo.totalAmount + "(-" + _0x5e798a.data.cashVo.leftAmount + ")");else _0x5e798a.data?.["cashVo"]?.["state"] === 3 && ($.log("本轮兑换金达成：" + _0x5e798a.data.cashVo.amount + "/" + _0x5e798a.data.cashVo.totalAmount), $.txj = false, $.txjsuc = true);
  } else $.txj = false;
  $.log("本轮结束时间： " + _0x543533(new Date(Date.now() + _0x5e798a.data.countDownTime)));
  for (let _0x1dc076 = 0; _0x1dc076 < (_0xe2029e > -1 && _0xe2029e < $.times ? _0xe2029e : $.times); _0x1dc076++) {
    process.stdout.write("\n第" + (_0x1dc076 + 1) + "次抽奖结果：");
    for (let _0x3ba035 of Array(1)) {
      await _0x344ca1(_0x3ba035 + 1);
      if (!$.hotflag) break;
      await $.wait(Math.random() * 500 + _0x3421e9 * 1000);
    }
    if ($.banip || !$.isLogin) break;
    if ($.end) {
      console.log("\n本轮结束了，开启新一轮");
      let _0x52f949 = await _0x78508d(0);
      _0x52f949.code == 0 && $.log("开启成功，结束时间： " + _0x543533(new Date(Date.now() + _0x52f949.data.countDownTime)));
    }
    $.txj && (await _0x48d090());
    await $.wait(Math.random() * 500 + _0x3421e9 * 1000);
    if ($.fail > _0x3f0da2) {
      $.log("连续垃圾券，不继续抽了");
      break;
    }
  }
  _0xfc84a3.length !== 0 && $.log("\n\n本次抽奖获得红包总计：" + _0xfc84a3.reduce((_0x27a9e2, _0x63eec8) => _0x27a9e2 + _0x63eec8 * 100, 0) / 100 + "元");
  _0x35b11d.length !== 0 && $.log("\n\n本次抽奖获得现金总计：" + _0x35b11d.reduce((_0x56edd4, _0x4888c1) => _0x56edd4 + _0x4888c1 * 100, 0) / 100 + "元");
  if (txjscore.length !== 0) {
    let _0x3fd2b5 = txjscore.reduce((_0x4a75af, _0xe31dc3) => _0x4a75af + _0xe31dc3 * 100, 0) / 100;
    $.log("\n\n本次抽奖获得兑换金：" + _0x3fd2b5 + "个, 平均" + (_0x3fd2b5 / (_0xe2029e > -1 ? Math.min.apply(null, [_0xe2029e, $.times]) : $.times)).toFixed(4) + "个/抽");
  }
  if (_0x5a80ee != "true") {
    if (new Date().getHours() < 6 && _0x255580) return;
    $.log("\n——————————————开始提现（间隔" + _0x36b4df + "秒）————————————————");
    $.log("\n当前提现模式：" + (_0x12163c == "1" ? _0xf02d4e + "天内历史" : "本次所抽现金"));
    $.log("上限转红包：" + (_0x2eab8e ? "开启" : "关闭(续期♻️)"));
    $.txsuc = [];
    $.toredsuc = [];
    $.failtxlist = [];
    $.banip = false;
    if (_0x12163c == "1") {
      for (let _0x20a569 = 0; _0x20a569 < 500; _0x20a569++) {
        if ($.nocashnum > 2 || $.toredfailnum > 4 || $.banip) break;
        process.stdout.write("\n" + (_0x20a569 + 1) + "页：");
        let _0x340cc1 = await _0xd38881(_0x20a569 + 1);
        _0x340cc1 == "" && (await $.wait(5000), await _0xd38881(_0x20a569 + 1));
        if (!$.baglist || $.baglist.length === 0) break;
        for (let _0xc8692e of $.baglist) {
          if (Math.max.apply(null, [new Date(_0xc8692e.createTime), new Date(_0xc8692e.startTime)]) < _0x3cbf1f || $.toredfailnum > 4) {
            $.nocashnum = 5;
            break;
          }
          if (_0xc8692e.prizeType == 4) {
            $.txfail = false;
            if (_0xc8692e.state == 0 || _0xc8692e.state == 2) {
              process.stdout.write("" + Number(_0xc8692e.amount));
              let _0x49cd3b = await _0x5473da(_0xc8692e, Number(_0xc8692e.amount));
              $.txfail && (await $.wait(5000), _0x49cd3b = await _0x5473da(_0xc8692e, Number(_0xc8692e.amount)));
              $.txfail && $.failtxlist.push(_0xc8692e);
              if (_0x49cd3b.data.message.includes("上限") && _0x2eab8e == "true" && $.toredfailnum < 5) await _0x28ab25(_0xc8692e, Number(_0xc8692e.amount));
              await $.wait(_0x36b4df * 1000);
            } else {
              if (_0xc8692e.state == 8) {}
            }
          }
        }
        await $.wait(3000);
      }
      $.banip = false;
      while ($.failtxlist.length > 0) {
        console.log("\n" + $.failtxlist.length);
        for (let _0x51d42b = 0; _0x51d42b < $.failtxlist.length;) {
          let _0x58024c = $.failtxlist[_0x51d42b];
          if (_0x58024c.prizeType == 4) {
            $.txfail = false;
            process.stdout.write("" + Number(_0x58024c.amount));
            let _0x4c4cb3 = await _0x5473da(_0x58024c, Number(_0x58024c.amount));
            $.txfail && (await $.wait(5000), _0x4c4cb3 = await _0x5473da(_0x58024c, Number(_0x58024c.amount)));
            $.txfail ? _0x51d42b++ : $.failtxlist.splice(_0x51d42b, 1);
            if (_0x4c4cb3.data.message.includes("上限") && _0x2eab8e == "true" && $.toredfailnum < 5) await _0x28ab25(_0x58024c, Number(_0x58024c.amount));
            await $.wait(_0x36b4df * 1000);
          }
        }
      }
    } else for (let _0x3a3582 = 0; _0x3a3582 < 1; _0x3a3582++) {
      if ($.nocashnum > 2 || $.toredfailnum > 4) break;
      while (_0x1c8102.length > 0) {
        console.log("\n" + _0x1c8102.length);
        for (let _0xb1c4f5 = 0; _0xb1c4f5 < _0x1c8102.length;) {
          let _0x26c042 = _0x1c8102[_0xb1c4f5];
          if (_0x26c042.prizeType == 4) {
            $.txfail = false;
            process.stdout.write("" + Number(_0x26c042.amount));
            let _0xdc4969 = await _0x5473da(_0x26c042, Number(_0x26c042.amount));
            $.txfail && (await $.wait(5000), _0xdc4969 = await _0x5473da(_0x26c042, Number(_0x26c042.amount)));
            $.txfail ? _0xb1c4f5++ : _0x1c8102.splice(_0xb1c4f5, 1);
            if (_0xdc4969.data.message.includes("上限") && _0x2eab8e == "true" && $.toredfailnum < 5) await _0x28ab25(_0x26c042, Number(_0x26c042.amount));
            await $.wait(_0x36b4df * 1000);
          }
        }
        await $.wait(2000);
      }
    }
    $.txsuc.length !== 0 && $.log("\n\n本次成功提现总计：" + $.txsuc.reduce((_0x163acc, _0x2bebbd) => _0x163acc + _0x2bebbd * 100, 0) / 100 + "元");
    $.toredsuc.length !== 0 && $.log("\n\n本次成功转红包总计：" + $.toredsuc.reduce((_0x2dc459, _0x25ca24) => _0x2dc459 + _0x25ca24 * 100, 0) / 100 + "元");
  } else $.log("\n\n⚠已设置不提现！");
  _0x1c8102 = [];
  await $.wait(2000);
})().catch(_0x2114da => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x2114da + "!", "");
}).finally(() => {
  $.done();
});
async function _0x78508d(_0x2d5c8f) {
  let _0x275f8b = {
      "linkId": "1v8ROyHv8LXPs559oaclNA",
      "inviter": ""
    },
    _0x3ff07a = {
      "appId": "eb67b",
      "functionId": "inviteFissionHome",
      "fn": "inviteFissionHome",
      "body": _0x275f8b,
      "appid": "activities_platform",
      "apid": "activities_platform",
      "clientVersion": $.UA.split(";")[2],
      "ver": $.UA.split(";")[2],
      "client": "ios",
      "cl": "ios",
      "user": $.UserName,
      "t": Date.now(),
      "code": 1,
      "xcr": $.xcrflag,
      "ua": $.UA
    };
  _0x275f8b = await _0x29c7c3.getbody(_0x3ff07a);
  if (!_0x275f8b) return;
  return new Promise(async _0x561801 => {
    $.dpost(_0x4308cc(_0x275f8b), async (_0x55afe5, _0x1f6bd8, _0x49ae78) => {
      try {
        if (_0x55afe5) console.log("" + JSON.stringify(_0x55afe5)), console.log("homeinfo请求失败，请检查网路重试");else {
          _0x49ae78 = JSON.parse(_0x49ae78);
          if (_0x49ae78.code == 0) {
            $.times = _0x49ae78.data.prizeNum;
            if (_0x2d5c8f) console.log("我的助力码：" + _0x49ae78.data.inviter);
            _0x1f3136.push(_0x49ae78.data.inviter);
          } else {
            console.log(_0x49ae78.errMsg);
          }
        }
      } catch (_0x289528) {
        $.logErr(_0x289528, _0x1f6bd8);
      } finally {
        _0x561801(_0x49ae78);
      }
    });
  });
}
async function _0x48d090() {
  let _0x1aea83 = {
      "linkId": "1v8ROyHv8LXPs559oaclNA"
    },
    _0x309259 = {
      "appId": "b8469",
      "functionId": "inviteFissionReceive",
      "fn": "inviteFissionReceive",
      "body": _0x1aea83,
      "appid": "activities_platform",
      "apid": "activities_platform",
      "clientVersion": $.UA.split(";")[2],
      "ver": $.UA.split(";")[2],
      "client": "ios",
      "cl": "ios",
      "user": $.UserName,
      "t": Date.now(),
      "code": 1,
      "xcr": $.xcrflag,
      "ua": $.UA
    };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0x1aea83 = await _0x29c7c3.getbody(_0x309259);
  if (!_0x1aea83) return;
  return new Promise(async _0xfafebb => {
    $.dpost(_0x4308cc(_0x1aea83), async (_0x25e1c4, _0x8c0283, _0x48a1b6) => {
      try {
        if (_0x25e1c4) console.log("" + JSON.stringify(_0x25e1c4)), console.log("receive请求失败，请检查网路重试"), _0x25e1c4.includes("403") && ($.banip = true);else {
          _0x48a1b6 = JSON.parse(_0x48a1b6);
          if (_0x48a1b6.code == 0) process.stdout.write("----兑换金" + _0x48a1b6.data.amount + "(+" + _0x48a1b6.data.receiveList[0].amount + ")"), txjscore.push(_0x48a1b6.data.receiveList[0].amount), _0x48a1b6.data?.["state"] == 3 && (process.stdout.write("----恭喜达成"), $.txj = false, $.txjsuc = true);else {
            if (_0x48a1b6.code == 80208) process.stdout.write("----送的抽奖次数没有兑换金");else _0x48a1b6.code == 80209 ? (process.stdout.write("----完成标识"), $.txj = false) : console.log(JSON.stringify(_0x48a1b6));
          }
        }
      } catch (_0x30d771) {
        $.logErr(_0x30d771, _0x8c0283);
      } finally {
        _0xfafebb(_0x48a1b6);
      }
    });
  });
}
async function _0x344ca1(_0x4859c9) {
  let _0x3fdcc5 = {
      "linkId": "1v8ROyHv8LXPs559oaclNA"
    },
    _0x460f7b = {
      "appId": "c02c6",
      "functionId": "inviteFissionDrawPrize",
      "fn": "inviteFissionDrawPrize",
      "body": _0x3fdcc5,
      "appid": "activities_platform",
      "apid": "activities_platform",
      "clientVersion": $.UA.split(";")[2],
      "ver": $.UA.split(";")[2],
      "client": "ios",
      "cl": "ios",
      "user": $.UserName,
      "t": Date.now(),
      "code": 1,
      "xcr": $.xcrflag,
      "ua": $.UA
    };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0x3fdcc5 = await _0x29c7c3.getbody(_0x460f7b);
  if (!_0x3fdcc5) return;
  return new Promise(async _0x6fe85b => {
    $.dpost(_0x4308cc(_0x3fdcc5), async (_0x1ed36d, _0x480ea0, _0x32f23b) => {
      try {
        if (_0x1ed36d) console.log("" + JSON.stringify(_0x1ed36d)), console.log("lottery请求失败，请检查网路重试"), _0x1ed36d.includes("403") && ($.banip = true);else {
          _0x32f23b = JSON.parse(_0x32f23b);
          if (_0x32f23b.code == 0) {
            const _0x468674 = _0x32f23b.data.prizeType;
            if (!_0x468674) fail++;
            switch (_0x468674) {
              case 1:
                process.stdout.write("垃.圾.券⚫"), $.txjsuc && $.fail++, $.fail++, $.hotflag = false;
                break;
              case 4:
                let _0x4cca3e = parseFloat(_0x32f23b.data.prizeValue).toFixed(2);
                process.stdout.write(_0x4cca3e + "现金💰️"), _0x35b11d.push(_0x4cca3e), _0x1c8102.push({
                  "prizeValue": _0x32f23b.data.prizeValue,
                  "id": _0x32f23b.data.id,
                  "poolBaseId": _0x32f23b.data.poolBaseId,
                  "prizeGroupId": _0x32f23b.data.prizeGroupId,
                  "prizeBaseId": _0x32f23b.data.prizeBaseId,
                  "prizeType": _0x32f23b.data.prizeType,
                  "amount": _0x32f23b.data.amount
                }), $.fail = 0, $.hotflag = false;
                break;
              case 2:
                let _0x1d22e0 = parseFloat(_0x32f23b.data.prizeValue).toFixed(2);
                process.stdout.write(_0x1d22e0 + "红包🧧"), _0xfc84a3.push(_0x1d22e0), $.fail = 0, $.hotflag = false;
                break;
              default:
                $.hotflag = false, console.log(JSON.stringify(_0x32f23b.data));
            }
          } else {
            if (_0x32f23b.errMsg.includes("火爆")) process.stdout.write("未中奖 "), $.hotflag = true;else {
              if (_0x32f23b.errMsg.includes("结束")) {
                $.end = true;
                $.hotflag = false;
                console.log(_0x32f23b.errMsg);
              } else _0x32f23b.errMsg.includes("未登录") ? ($.isLogin = false, $.hotflag = false, console.log(_0x32f23b.errMsg)) : ($.hotflag = false, console.log(_0x32f23b.errMsg));
            }
          }
        }
      } catch (_0x5bfd4a) {
        $.logErr(_0x5bfd4a, _0x480ea0);
      } finally {
        _0x6fe85b(_0x32f23b);
      }
    });
  });
}
async function _0xd38881(_0x5a0175) {
  let _0x46c6bd = {
      "pageNum": _0x5a0175,
      "pageSize": 100,
      "linkId": "1v8ROyHv8LXPs559oaclNA",
      "business": "fission"
    },
    _0x499d50 = {
      "appId": "f2b1d",
      "functionId": "superRedBagList",
      "fn": "superRedBagList",
      "body": _0x46c6bd,
      "appid": "activities_platform",
      "apid": "activities_platform",
      "clientVersion": $.UA.split(";")[2],
      "ver": $.UA.split(";")[2],
      "client": "ios",
      "cl": "ios",
      "user": $.UserName,
      "t": Date.now(),
      "code": 1,
      "xcr": $.xcrflag,
      "ua": $.UA
    };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0x46c6bd = await _0x29c7c3.getbody(_0x499d50);
  if (!_0x46c6bd) return;
  let _0x26225d = {
    "url": "https://api.m.jd.com/api",
    "body": _0x46c6bd + "&loginType=2&loginWQBiz=wegame&uuid=" + $.uuid + "&build=169088&screen=414*736&networkType=wifi&d_brand=iPhone&d_model=iPhone10,2&lang=zh_CN&osVersion=&partner=-1&cthr=1",
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "x-rp-client": "h5_1.0.0",
      "Accept-Language": "zh-cn",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/x-www-form-urlencoded",
      "Origin": "https://pro.m.jd.com",
      "User-Agent": $.UA,
      "Referer": "https://pro.m.jd.com/",
      "x-referer-page": "https://pro.m.jd.com/",
      "request-from": "native",
      "Cookie": _0x584117
    },
    "ciphers": _0x54d4af.cpstr
  };
  return new Promise(async _0x5854a2 => {
    $.dpost(_0x26225d, async (_0x2de767, _0x16e500, _0xb27131) => {
      try {
        if (_0x2de767) console.log("" + JSON.stringify(_0x2de767)), console.log(" API请求失败，请检查网路重试"), _0x2de767.includes("403") && ($.banip = true), _0xb27131 = "";else {
          _0xb27131 = JSON.parse(_0xb27131);
          _0xb27131.code == 0 ? $.baglist = _0xb27131.data.items : console.log(_0xb27131.errMsg);
        }
      } catch (_0x3875e2) {
        $.logErr(_0x3875e2, _0x16e500);
      } finally {
        _0x5854a2(_0xb27131);
      }
    });
  });
}
async function _0x43a202(_0x2a7c1e) {
  let _0x2334ec = {
      "linkId": "1v8ROyHv8LXPs559oaclNA",
      "isJdApp": true,
      "inviter": _0x2a7c1e
    },
    _0x431dbc = {
      "appId": "c5389",
      "functionId": "inviteFissionhelp",
      "fn": "inviteFissionhelp",
      "body": _0x2334ec,
      "appid": "activities_platform",
      "apid": "activities_platform",
      "clientVersion": $.UA.split(";")[2],
      "ver": $.UA.split(";")[2],
      "client": "ios",
      "cl": "ios",
      "user": $.UserName,
      "t": Date.now(),
      "code": 1,
      "xcr": 1,
      "ua": $.UA
    };
  _0x2334ec = await _0x29c7c3.getbody(_0x431dbc);
  if (!_0x2334ec) return;
  return new Promise(async _0x5d97c9 => {
    $.dpost(_0x4308cc(_0x2334ec), async (_0x3a2f5b, _0x414b25, _0x154822) => {
      try {
        if (_0x3a2f5b) console.log("" + JSON.stringify(_0x3a2f5b)), console.log("help请求失败，请检查网路重试"), _0x3a2f5b.includes("403") && ($.banip = true);else {
          _0x154822 = JSON.parse(_0x154822);
          if (_0x154822.code == 0) {
            if (!_0x154822.data.helpFlg) {
              $.log("结果：不能助力自己！");
              return;
            }
            if (_0x154822.data.helpResult == 1) $.suc++, console.log("结果：助力成功 ✅ " + ($.suc || ""));else {
              if (_0x154822.data.helpResult == 6) {
                console.log("结果：已经助力过TA！");
              } else {
                if (_0x154822.data.helpResult == 3) console.log("结果：没有次数！");else {
                  if (_0x154822.data.helpResult == 2) $.log("结果：太火爆了 💣"), $.hot = true;else {
                    if (_0x154822.data.helpResult == 4) $.log("结果：没有助力次数！");else _0x154822.data.helpResult == 8 ? $.log("结果：TA未开启新的一轮 💤") : console.log("结果：" + _0x154822.data?.["helpResult"]);
                  }
                }
              }
            }
          } else {
            console.log(_0x154822.errMsg);
          }
        }
      } catch (_0x4eb753) {
        $.logErr(_0x4eb753, _0x414b25);
      } finally {
        _0x5d97c9(_0x154822);
      }
    });
  });
}
async function _0x5473da(_0x2a0324, _0x34a9fd) {
  let _0x382fb3 = "functionId=apCashWithDraw&body={\"linkId\":\"1v8ROyHv8LXPs559oaclNA\",\"businessSource\":\"NONE\",\"base\":{\"id\":" + _0x2a0324.id + ",\"business\":\"fission\",\"poolBaseId\":" + _0x2a0324.poolBaseId + ",\"prizeGroupId\":" + _0x2a0324.prizeGroupId + ",\"prizeBaseId\":" + _0x2a0324.prizeBaseId + ",\"prizeType\":4}}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2],
    _0x367f4f = {
      "url": "https://api.m.jd.com/api",
      "body": _0x382fb3,
      "headers": {
        "Host": "api.m.jd.com",
        "Origin": "https://pro.m.jd.com",
        "Referer": "https://pro.m.jd.com/",
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": $.UA,
        "Cookie": _0x584117
      }
    };
  return new Promise(async _0x46c15a => {
    $.dpost(_0x367f4f, async (_0x8a0b75, _0x59db31, _0x4a3a9d) => {
      try {
        if (_0x8a0b75) console.log("" + JSON.stringify(_0x8a0b75)), console.log("apCashWithDraw请求失败，请检查网路重试"), _0x8a0b75.includes("403") && ($.banip = true);else {
          _0x4a3a9d = JSON.parse(_0x4a3a9d);
          if (_0x4a3a9d.code == 0) {
            if (_0x4a3a9d.data.message.indexOf("待发放") > -1) process.stdout.write("" + (!$.txfail ? "❌" : "❌ ")), $.txfail = true;else {
              if (_0x4a3a9d.data.message.includes("上限")) !_0x2eab8e && process.stdout.write("♻️ "), $.txfull = true, $.txfail = false;else _0x4a3a9d.data.message.includes("提现") ? (process.stdout.write("✔️ "), $.txsuc.push(_0x34a9fd), $.txfail = false) : console.log(_0x4a3a9d.data.message);
            }
          } else console.log(_0x4a3a9d.errMsg);
        }
      } catch (_0x38ee1e) {
        $.logErr(_0x38ee1e, _0x59db31);
      } finally {
        _0x46c15a(_0x4a3a9d || "");
      }
    });
  });
}
async function _0x28ab25(_0x7195fa, _0x33e052) {
  let _0x7d2d5a = "functionId=apRecompenseDrawPrize&body={\"drawRecordId\":" + _0x7195fa.id + ",\"business\":\"fission\",\"poolId\":" + _0x7195fa.poolBaseId + ",\"prizeGroupId\":" + _0x7195fa.prizeGroupId + ",\"prizeId\":" + _0x7195fa.prizeBaseId + ",\"linkId\":\"1v8ROyHv8LXPs559oaclNA\"}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2],
    _0x4f514c = {
      "url": "https://api.m.jd.com/api",
      "body": _0x7d2d5a,
      "headers": {
        "Host": "api.m.jd.com",
        "Origin": "https://pro.m.jd.com",
        "Referer": "https://pro.m.jd.com/",
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": $.UA,
        "Cookie": _0x584117
      }
    };
  return new Promise(async _0x26713a => {
    $.dpost(_0x4f514c, async (_0x7ba67f, _0x3514e9, _0x389e72) => {
      try {
        if (_0x7ba67f) console.log("" + JSON.stringify(_0x7ba67f)), console.log("apRecompenseDrawPrize 请求失败，请检查网路重试"), _0x7ba67f.includes("403") && ($.banip = true);else {
          _0x389e72 = JSON.parse(_0x389e72);
          if (_0x389e72.code == 0) {
            _0x389e72.data.resCode === "0" ? (process.stdout.write("🧧 "), $.toredsuc.push(_0x33e052)) : (process.stdout.write("❎ "), $.toredfailnum++);
          } else _0x389e72.errMsg === "失败" ? (process.stdout.write("❎ "), $.toredfailnum++) : console.log(_0x389e72.errMsg);
        }
      } catch (_0xac7c65) {
        $.logErr(_0xac7c65, _0x3514e9);
      } finally {
        _0x26713a(_0x389e72);
      }
    });
  });
}
function _0x4308cc(_0x2f9414) {
  return {
    "url": "https://api.m.jd.com/api?" + _0x2f9414,
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "x-rp-client": "h5_1.0.0",
      "Content-type": "application/x-www-form-urlencoded",
      "User-Agent": $.UA,
      "x-referer-page": "https://pro.m.jd.com/",
      "Origin": "https://pro.m.jd.com",
      "X-Requested-With": "com.jingdong.app.mall",
      "Referer": "https://pro.m.jd.com/",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cookie": _0x584117
    }
  };
}
function _0x50bf52() {
  return new Promise(_0x25bbe8 => {
    const _0x3d33af = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x584117,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x3d33af, (_0x440d32, _0x2a4b56, _0x2a66d7) => {
      try {
        if (_0x2a66d7) {
          _0x2a66d7 = JSON.parse(_0x2a66d7);
          if (_0x2a66d7.islogin === "1") {} else _0x2a66d7.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x4e5ac2) {
        console.log(_0x4e5ac2);
      } finally {
        _0x25bbe8();
      }
    });
  });
}
function _0x585d88() {
  return new Promise(_0x18582c => {
    if (!_0x3e8387) $.msg($.name, "", "" + _0x229170);else {
      $.log("京东账号" + $.index + $.nickName + "\n" + _0x229170);
    }
    _0x18582c();
  });
}
function _0xfc0c36(_0x3208b3) {
  try {
    if (typeof JSON.parse(_0x3208b3) == "object") return true;
  } catch (_0x58fbb9) {
    return console.log(_0x58fbb9), console.log("京东服务器访问数据为空，请检查自身设备网络情况"), false;
  }
}
function _0x289ba0() {
  let _0x40bec1 = {
    "url": "https://src-dy-server-dmujhfwxmu.cn-hangzhou.fcapp.run/djggl",
    "timeout": 30000
  };
  return new Promise(_0x1740d8 => {
    $.get(_0x40bec1, async (_0x4bfbbb, _0x38f79e, _0x338fcf) => {
      try {
        if (_0x4bfbbb) console.log("\n服务连接失败，终止执行！"), process.exit(111);else {
          if (_0x338fcf) {
            _0x338fcf = JSON.parse(_0x338fcf);
            if (_0x338fcf.code === 200) _0x811f17 = _0x338fcf.data;else {}
          }
        }
      } catch (_0x5d7cd1) {
        $.logErr(_0x5d7cd1, _0x38f79e);
      } finally {
        _0x1740d8(_0x811f17);
      }
    });
  });
}
function _0x543533(_0x1a3b69) {
  const _0x1d5f84 = _0x1a3b69.getFullYear(),
    _0x3b4a90 = ("0" + (_0x1a3b69.getMonth() + 1)).slice(-2),
    _0x9521ab = ("0" + _0x1a3b69.getDate()).slice(-2),
    _0x5e2bde = ("0" + _0x1a3b69.getHours()).slice(-2),
    _0x236da4 = ("0" + _0x1a3b69.getMinutes()).slice(-2),
    _0x1a34b0 = ("0" + _0x1a3b69.getSeconds()).slice(-2);
  return _0x1d5f84 + "/" + _0x3b4a90 + "/" + _0x9521ab + " " + _0x5e2bde + ":" + _0x236da4 + ":" + _0x1a34b0;
}
function _0x199592(_0x5d20b4) {
  if (typeof _0x5d20b4 == "string") {
    try {
      return JSON.parse(_0x5d20b4);
    } catch (_0x182d9b) {
      return console.log(_0x182d9b), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
    }
  }
}