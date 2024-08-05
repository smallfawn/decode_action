//Mon Aug 05 2024 01:57:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const bdy_0x447e42 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x42f354 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x26904d = require("./function/dylans"),
  bdy_0x351ff0 = require("./USER_AGENTS"),
  bdy_0x14e6c2 = require("./function/dylib");
let bdy_0x4952f3 = true,
  bdy_0x50f54e = [],
  bdy_0x351a8f = [],
  bdy_0x117437 = [],
  bdy_0x3820a5 = [],
  bdy_0x1fb4f3 = {},
  bdy_0x1c3c62 = [],
  bdy_0x3f614c = "",
  bdy_0x1a6a02 = "",
  bdy_0x4ef907 = "",
  bdy_0xf6c626 = "",
  bdy_0x572651;
const bdy_0xa278d6 = process.env.JDZHB2NUM || "9999",
  bdy_0x1fef7e = process.env.JDZHB2LTNUM || "-1",
  bdy_0x3b070f = process.env.JDZHB2DELAY || "1",
  bdy_0x2fda37 = process.env.TXDELAY || "5",
  bdy_0x166407 = process.env.HLDELAY || "1",
  bdy_0x3e5883 = process.env.TXIVAL || "1",
  bdy_0x3f4fe2 = process.env.JDZHB2TORED || false,
  bdy_0x1b58ed = process.env.JDZHB2TOPPIN || "",
  bdy_0x47d48d = process.env.TXSILENT || false,
  bdy_0x2ab400 = process.env.ZZHB2CODE || "",
  bdy_0x2d6755 = process.env.CXJLJQ_COUNT || "10",
  bdy_0x31b67c = process.env.TX_MODE || "0",
  bdy_0x386cff = process.env.CXJHELP_NODRAW || false,
  bdy_0x28ea05 = process.env.NOTX ? process.env.NOTX : false;
if (process.env.DY_PROXY) {
  try {
    bdy_0x1fb4f3 = require("./function/proxy.js");
    $.dget = bdy_0x1fb4f3.intoRequest($.get.bind($));
    $.dpost = bdy_0x1fb4f3.intoRequest($.post.bind($));
  } catch {
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
if ($.isNode()) {
  Object.keys(bdy_0x42f354).forEach(_0x15e65d => {
    bdy_0x1c3c62.push(bdy_0x42f354[_0x15e65d]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x1c3c62 = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...bdy_0x505699($.getdata("CookiesJD") || "[]").map(_0x2c6f5a => _0x2c6f5a.cookie)].filter(_0x1bf34e => !!_0x1bf34e);
}
!(async () => {
  if (!bdy_0x1c3c62[0]) {
    const _0x29df96 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x29df96);
    return;
  }
  $.log("\n❗❗❗每天1次助力次数，0点刷新❗❗❗");
  $.log("\n当前版本：20240617");
  console.log("执行流程，车头开团--助力車頭--車頭抽獎--車頭提現");
  console.log("TG频道：https://t.me/dylan_jdpro");
  $.log("\n环境变量清单（可选项）：");
  $.log("  指定PIN车头：不指定默认CK1  JDZHB2TOPPIN='jdpin'\n  指定助力CODE：都去助力TA  ZZHB2CODE='xxx'\n  多少助力停止：默认9999个  JDZHB2NUM='100'\n  抽奖次数：默认抽完  JDZHB2LTNUM='200'\n  抽奖间隔：默认1秒  JDZHB2DELAY='3'\n  提现间隔：默认5秒  TXDELAY='3'\n  助力间隔：默认1秒  HLDELAY='3'\n  提现模式：默认提当前，设置1查列表提现，TX_MODE='1'\n  提现范围：默认1天内，太大会403  TXIVAL='3'\n  开启提现到上限转红包：JDZHB2TORED='true'\n  支持代理API： DY_PROXY='apiurl'\n  垃圾券数量：默认10次，CXJLJQ_COUNT='20'\n  关闭抽奖：默认助力完车头自动抽奖，CXJHELP_NODRAW='true'\n  关闭提现：NOTX='true'\n");
  let _0x49a614 = await bdy_0x31f0e6();
  if (bdy_0x1b58ed) {
    console.log("\n已指定PIN：" + bdy_0x1b58ed);
    let _0x215b1a = bdy_0x1c3c62.findIndex(_0x5ed4d4 => _0x5ed4d4.includes(bdy_0x1b58ed));
    if (_0x215b1a == -1) {
      console.log("运行的CK中没找到指定的PIN，停止执行");
      return;
    }
    bdy_0x1a6a02 = bdy_0x1c3c62[_0x215b1a];
  } else {
    console.log("\n未指定PIN默认CK1车头");
    bdy_0x1a6a02 = bdy_0x1c3c62[0];
  }
  bdy_0x3f614c = bdy_0x1a6a02;
  $.UserName = decodeURIComponent(bdy_0x3f614c.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x3f614c.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
  $.isLogin = true;
  $.nickName = "";
  $.UA = bdy_0x351ff0.UARAM ? bdy_0x351ff0.UARAM() : bdy_0x351ff0.USER_AGENT;
  console.log("\n————————————————————车头开团——————————————————————————");
  console.log("账号：" + ($.nickName || $.UserName));
  await bdy_0x3d1301();
  if (!$.isLogin) {
    const _0x436af3 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】cookie已失效", "账号" + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0x436af3);
    $.isNode() && (await bdy_0x447e42.sendNotify($.name + "cookie已失效 - " + $.UserName, "账号 " + $.UserName + "\n请重新登录获取cookie"));
    return;
  }
  await bdy_0x53763c(1);
  await $.wait(1000);
  if (_0x49a614.length != 0) {
    let _0x542e2d = _0x49a614[Math.floor(Math.random() * _0x49a614.length)];
    console.log("车头去助力 -> 作者");
    $.UserName = decodeURIComponent(bdy_0x3f614c.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x3f614c.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
    $.UA = bdy_0x351ff0.UARAM ? bdy_0x351ff0.UARAM() : bdy_0x351ff0.USER_AGENT;
    await bdy_0x2e259e(_0x542e2d);
    await $.wait(2000);
  }
  console.log("——————————————————————————————————————————————————————");
  console.log("\n\n———————————开始助力车头(助力间隔" + bdy_0x166407 + "秒)—————————————");
  bdy_0x2ab400 && (console.log("\n已指定助力CODE,那抛弃车头去助力TA"), bdy_0x50f54e = [], bdy_0x50f54e.push(bdy_0x2ab400));
  bdy_0x572651 = 0;
  for (let _0x48391c of bdy_0x50f54e) {
    if (bdy_0x1c3c62.length === 1) {
      console.log("");
      break;
    }
    console.log("\n去助力-> " + _0x48391c);
    $.suc = 0;
    for (let _0x3944d5 = bdy_0x572651; _0x3944d5 < bdy_0x1c3c62.length; _0x3944d5++) {
      if (bdy_0x1c3c62[_0x3944d5]) {
        bdy_0x3f614c = bdy_0x1c3c62[_0x3944d5];
        $.UserName = decodeURIComponent(bdy_0x3f614c.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x3f614c.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x3944d5 + 1;
        $.isLogin = true;
        $.nickName = "";
        $.UA = bdy_0x351ff0.UARAM ? bdy_0x351ff0.UARAM() : bdy_0x351ff0.USER_AGENT;
        console.log("\n开始【账号" + $.index + "】 " + ($.nickName || $.UserName) + "\n");
        await bdy_0x2e259e(_0x48391c);
        bdy_0x1fb4f3.swip && (await bdy_0x1fb4f3.swip());
        if ($.suc >= Number(bdy_0xa278d6)) {
          $.log("已达目标助力数，跳出！");
          bdy_0x572651 = _0x3944d5 + 1;
          break;
        }
        await $.wait(bdy_0x166407 * 1000);
      }
    }
    if ($.index === bdy_0x1c3c62.length) {
      console.log("\n没有可用于助力的ck，跳出！");
      break;
    }
  }
  if (bdy_0x386cff == "true") {
    console.log("\n已设置不自动抽奖提现");
    return;
  }
  console.log("\n\n—————————————————开始车头抽奖和提现—————————————————");
  bdy_0x1fef7e > -1 && console.log("\n已设置本次运行抽奖次数：" + bdy_0x1fef7e);
  let _0x565506 = new Date();
  _0x565506.setDate(_0x565506.getDate() - bdy_0x3e5883);
  bdy_0x3f614c = bdy_0x1a6a02;
  $.UserName = decodeURIComponent(bdy_0x3f614c.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0x3f614c.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
  $.isLogin = true;
  $.nickName = "";
  $.fail = 0;
  bdy_0x351a8f = [];
  bdy_0x117437 = [];
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
  $.UA = bdy_0x351ff0.UARAM ? bdy_0x351ff0.UARAM() : bdy_0x351ff0.USER_AGENT;
  let _0x140aa1 = await bdy_0x53763c(0);
  await $.wait(1000);
  if (_0x140aa1.code != "0") {
    return;
  }
  $.log("本轮已抽奖次数：" + _0x140aa1.data.drawPrizeNum);
  $.log("本轮剩余抽奖次数：" + $.times);
  if (_0x140aa1.data.cashVo) {
    if (_0x140aa1.data?.["cashVo"]?.["state"] === 1) {
      $.log("本轮提现金进度：" + _0x140aa1.data.cashVo.amount + "/" + _0x140aa1.data.cashVo.totalAmount + "(-" + _0x140aa1.data.cashVo.leftAmount + ")");
    } else {
      if (_0x140aa1.data?.["cashVo"]?.["state"] === 3) {
        $.log("本轮提现金达成：" + _0x140aa1.data.cashVo.amount + "/" + _0x140aa1.data.cashVo.totalAmount);
        $.txj = false;
        $.txjsuc = true;
      }
    }
  } else {
    $.txj = false;
  }
  $.log("本轮结束时间： " + bdy_0x494669(new Date(Date.now() + _0x140aa1.data.countDownTime)));
  for (let _0x5e2942 = 0; _0x5e2942 < (bdy_0x1fef7e > -1 && bdy_0x1fef7e < $.times ? bdy_0x1fef7e : $.times); _0x5e2942++) {
    process.stdout.write("\n第" + (_0x5e2942 + 1) + "次抽奖结果：");
    for (let _0x137a3b of Array(1)) {
      await bdy_0x18012c(_0x137a3b + 1);
      if (!$.hotflag) {
        break;
      }
      await $.wait(Math.random() * 500 + bdy_0x3b070f * 1000);
    }
    if ($.banip || !$.isLogin) {
      break;
    }
    if ($.end) {
      console.log("\n本轮结束了，开启新一轮");
      let _0x166417 = await bdy_0x53763c(0);
      _0x166417.code == 0 && $.log("开启成功，结束时间： " + bdy_0x494669(new Date(Date.now() + _0x166417.data.countDownTime)));
    }
    $.txj && (await bdy_0x5c26b8());
    await $.wait(Math.random() * 500 + bdy_0x3b070f * 1000);
    if ($.fail > bdy_0x2d6755) {
      $.log("连续垃圾券，不继续抽了");
      break;
    }
  }
  bdy_0x117437.length !== 0 && $.log("\n\n本次抽奖获得红包总计：" + bdy_0x117437.reduce((_0x40ee8b, _0x25dcd6) => _0x40ee8b + _0x25dcd6 * 100, 0) / 100 + "元");
  bdy_0x351a8f.length !== 0 && $.log("\n\n本次抽奖获得现金总计：" + bdy_0x351a8f.reduce((_0x2e89a3, _0x4cb823) => _0x2e89a3 + _0x4cb823 * 100, 0) / 100 + "元");
  if (txjscore.length !== 0) {
    let _0x255575 = txjscore.reduce((_0x254246, _0x49c027) => _0x254246 + _0x49c027 * 100, 0) / 100;
    $.log("\n\n本次抽奖获得提现金：" + _0x255575 + "个, 平均" + (_0x255575 / (bdy_0x1fef7e > -1 ? Math.min.apply(null, [bdy_0x1fef7e, $.times]) : $.times)).toFixed(4) + "个/抽");
  }
  if (bdy_0x28ea05 != "true") {
    if (new Date().getHours() < 6 && bdy_0x47d48d) {
      return;
    }
    $.log("\n——————————————开始提现（间隔" + bdy_0x2fda37 + "秒）————————————————");
    $.log("\n当前提现模式：" + (bdy_0x31b67c == "1" ? bdy_0x3e5883 + "天内历史" : "本次所抽现金"));
    $.log("上限转红包：" + (bdy_0x3f4fe2 ? "开启" : "关闭(续期♻️)"));
    $.txsuc = [];
    $.toredsuc = [];
    $.failtxlist = [];
    $.banip = false;
    if (bdy_0x31b67c == "1") {
      for (let _0x2a54d3 = 0; _0x2a54d3 < 500; _0x2a54d3++) {
        if ($.nocashnum > 2 || $.toredfailnum > 4 || $.banip) {
          break;
        }
        process.stdout.write("\n" + (_0x2a54d3 + 1) + "页：");
        let _0x3e2072 = await bdy_0x4a40d9(_0x2a54d3 + 1);
        _0x3e2072 == "" && (await $.wait(5000), await bdy_0x4a40d9(_0x2a54d3 + 1));
        if (!$.baglist || $.baglist.length === 0) {
          break;
        }
        for (let _0x1d93db of $.baglist) {
          if (Math.max.apply(null, [new Date(_0x1d93db.createTime), new Date(_0x1d93db.startTime)]) < _0x565506 || $.toredfailnum > 4) {
            $.nocashnum = 5;
            break;
          }
          if (_0x1d93db.prizeType == 4) {
            $.txfail = false;
            if (_0x1d93db.state == 0 || _0x1d93db.state == 2) {
              process.stdout.write("" + Number(_0x1d93db.amount));
              let _0x42328d = await bdy_0x5648ae(_0x1d93db, Number(_0x1d93db.amount));
              $.txfail && (await $.wait(5000), _0x42328d = await bdy_0x5648ae(_0x1d93db, Number(_0x1d93db.amount)));
              $.txfail && $.failtxlist.push(_0x1d93db);
              if (_0x42328d.data.message.includes("上限") && bdy_0x3f4fe2 == "true" && $.toredfailnum < 5) {
                await bdy_0x34cca5(_0x1d93db, Number(_0x1d93db.amount));
              }
              await $.wait(bdy_0x2fda37 * 1000);
            } else {
              _0x1d93db.state == 8;
            }
          }
        }
        await $.wait(3000);
      }
      $.banip = false;
      while ($.failtxlist.length > 0) {
        console.log("\n" + $.failtxlist.length);
        for (let _0x5bfced = 0; _0x5bfced < $.failtxlist.length;) {
          let _0x2d6bb8 = $.failtxlist[_0x5bfced];
          if (_0x2d6bb8.prizeType == 4) {
            $.txfail = false;
            process.stdout.write("" + Number(_0x2d6bb8.amount));
            let _0x3c5eac = await bdy_0x5648ae(_0x2d6bb8, Number(_0x2d6bb8.amount));
            if ($.txfail) {
              await $.wait(5000);
              _0x3c5eac = await bdy_0x5648ae(_0x2d6bb8, Number(_0x2d6bb8.amount));
            }
            $.txfail ? _0x5bfced++ : $.failtxlist.splice(_0x5bfced, 1);
            if (_0x3c5eac.data.message.includes("上限") && bdy_0x3f4fe2 == "true" && $.toredfailnum < 5) {
              await bdy_0x34cca5(_0x2d6bb8, Number(_0x2d6bb8.amount));
            }
            await $.wait(bdy_0x2fda37 * 1000);
          }
        }
      }
    } else {
      for (let _0x323bb4 = 0; _0x323bb4 < 1; _0x323bb4++) {
        if ($.nocashnum > 2 || $.toredfailnum > 4) {
          break;
        }
        while (bdy_0x3820a5.length > 0) {
          console.log("\n" + bdy_0x3820a5.length);
          for (let _0xf8e80c = 0; _0xf8e80c < bdy_0x3820a5.length;) {
            let _0x1d854a = bdy_0x3820a5[_0xf8e80c];
            if (_0x1d854a.prizeType == 4) {
              $.txfail = false;
              process.stdout.write("" + Number(_0x1d854a.amount));
              let _0x4558a8 = await bdy_0x5648ae(_0x1d854a, Number(_0x1d854a.amount));
              if ($.txfail) {
                await $.wait(5000);
                _0x4558a8 = await bdy_0x5648ae(_0x1d854a, Number(_0x1d854a.amount));
              }
              $.txfail ? _0xf8e80c++ : bdy_0x3820a5.splice(_0xf8e80c, 1);
              if (_0x4558a8.data.message.includes("上限") && bdy_0x3f4fe2 == "true" && $.toredfailnum < 5) {
                await bdy_0x34cca5(_0x1d854a, Number(_0x1d854a.amount));
              }
              await $.wait(bdy_0x2fda37 * 1000);
            }
          }
          await $.wait(2000);
        }
      }
    }
    $.txsuc.length !== 0 && $.log("\n\n本次成功提现总计：" + $.txsuc.reduce((_0x3356b3, _0x74d9e2) => _0x3356b3 + _0x74d9e2 * 100, 0) / 100 + "元");
    $.toredsuc.length !== 0 && $.log("\n\n本次成功转红包总计：" + $.toredsuc.reduce((_0x20f1c0, _0x28ab9b) => _0x20f1c0 + _0x28ab9b * 100, 0) / 100 + "元");
  } else {
    $.log("\n\n⚠已设置不提现！");
  }
  bdy_0x3820a5 = [];
  await $.wait(2000);
})().catch(_0xe04f5e => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0xe04f5e + "!", "");
}).finally(() => {
  $.done();
});
async function bdy_0x53763c(_0x563651) {
  const _0x5de13 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    inviter: ""
  };
  let _0x3f2815 = _0x5de13,
    _0x4a54f3 = {
      appId: "eb67b",
      functionId: "inviteFissionHome",
      fn: "inviteFissionHome",
      body: _0x3f2815,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  _0x3f2815 = await bdy_0x26904d.getbody(_0x4a54f3);
  if (!_0x3f2815) {
    return;
  }
  return new Promise(async _0x3b5954 => {
    $.dpost(bdy_0x15f0f3(_0x3f2815), async (_0x59f0e4, _0x2f3397, _0x19df92) => {
      try {
        if (_0x59f0e4) {
          console.log("" + JSON.stringify(_0x59f0e4));
          console.log("homeinfo请求失败，请检查网路重试");
        } else {
          _0x19df92 = JSON.parse(_0x19df92);
          if (_0x19df92.code == 0) {
            $.times = _0x19df92.data.prizeNum;
            if (_0x563651) {
              console.log("我的助力码：" + _0x19df92.data.inviter);
            }
            bdy_0x50f54e.push(_0x19df92.data.inviter);
          } else {
            console.log(_0x19df92.errMsg);
          }
        }
      } catch (_0x29fe83) {
        $.logErr(_0x29fe83, _0x2f3397);
      } finally {
        _0x3b5954(_0x19df92);
      }
    });
  });
}
async function bdy_0x5c26b8() {
  const _0x258d02 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g"
  };
  let _0x239425 = _0x258d02,
    _0x1c9743 = {
      appId: "b8469",
      functionId: "inviteFissionReceive",
      fn: "inviteFissionReceive",
      body: _0x239425,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0x239425 = await bdy_0x26904d.getbody(_0x1c9743);
  if (!_0x239425) {
    return;
  }
  return new Promise(async _0x44cef9 => {
    $.dpost(bdy_0x15f0f3(_0x239425), async (_0x1fd013, _0x13a132, _0x49e0b2) => {
      try {
        if (_0x1fd013) {
          console.log("" + JSON.stringify(_0x1fd013));
          console.log("receive请求失败，请检查网路重试");
          _0x1fd013.includes("403") && ($.banip = true);
        } else {
          _0x49e0b2 = JSON.parse(_0x49e0b2);
          if (_0x49e0b2.code == 0) {
            process.stdout.write("----提现金" + _0x49e0b2.data.amount + "(+" + _0x49e0b2.data.receiveList[0].amount + ")");
            txjscore.push(_0x49e0b2.data.receiveList[0].amount);
            if (_0x49e0b2.data?.["state"] == 3) {
              process.stdout.write("----恭喜达成");
              $.txj = false;
              $.txjsuc = true;
            }
          } else {
            if (_0x49e0b2.code == 80208) {
              process.stdout.write("----送的抽奖次数没有提现金");
            } else {
              _0x49e0b2.code == 80209 ? (process.stdout.write("----完成标识"), $.txj = false) : console.log(JSON.stringify(_0x49e0b2));
            }
          }
        }
      } catch (_0x4860a7) {
        $.logErr(_0x4860a7, _0x13a132);
      } finally {
        _0x44cef9(_0x49e0b2);
      }
    });
  });
}
async function bdy_0x18012c(_0x4e616a) {
  const _0x25240a = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g"
  };
  let _0x4aba7c = _0x25240a,
    _0x35a5a6 = {
      appId: "c02c6",
      functionId: "inviteFissionDrawPrize",
      fn: "inviteFissionDrawPrize",
      body: _0x4aba7c,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0x4aba7c = await bdy_0x26904d.getbody(_0x35a5a6);
  if (!_0x4aba7c) {
    return;
  }
  return new Promise(async _0x951144 => {
    $.dpost(bdy_0x15f0f3(_0x4aba7c), async (_0x2833c6, _0x7a9619, _0x56eb43) => {
      try {
        if (_0x2833c6) {
          console.log("" + JSON.stringify(_0x2833c6));
          console.log("lottery请求失败，请检查网路重试");
          _0x2833c6.includes("403") && ($.banip = true);
        } else {
          _0x56eb43 = JSON.parse(_0x56eb43);
          if (_0x56eb43.code == 0) {
            const _0x54ef90 = _0x56eb43.data.prizeType;
            if (!_0x54ef90) {
              fail++;
            }
            switch (_0x54ef90) {
              case 1:
                process.stdout.write("垃.圾.券⚫");
                $.txjsuc && $.fail++;
                $.fail++;
                $.hotflag = false;
                break;
              case 4:
                let _0x53c7d2 = parseFloat(_0x56eb43.data.prizeValue).toFixed(2);
                process.stdout.write(_0x53c7d2 + "现金💰️");
                bdy_0x351a8f.push(_0x53c7d2);
                const _0x47ac20 = {
                  prizeValue: _0x56eb43.data.prizeValue,
                  id: _0x56eb43.data.id,
                  poolBaseId: _0x56eb43.data.poolBaseId,
                  prizeGroupId: _0x56eb43.data.prizeGroupId,
                  prizeBaseId: _0x56eb43.data.prizeBaseId,
                  prizeType: _0x56eb43.data.prizeType,
                  amount: _0x56eb43.data.amount
                };
                bdy_0x3820a5.push(_0x47ac20);
                $.fail = 0;
                $.hotflag = false;
                break;
              case 2:
                let _0x4826b3 = parseFloat(_0x56eb43.data.prizeValue).toFixed(2);
                process.stdout.write(_0x4826b3 + "红包🧧");
                bdy_0x117437.push(_0x4826b3);
                $.fail = 0;
                $.hotflag = false;
                break;
              default:
                $.hotflag = false;
                console.log(JSON.stringify(_0x56eb43.data));
            }
          } else {
            if (_0x56eb43.errMsg.includes("火爆")) {
              process.stdout.write("未中奖 ");
              $.hotflag = true;
            } else {
              if (_0x56eb43.errMsg.includes("结束")) {
                $.end = true;
                $.hotflag = false;
                console.log(_0x56eb43.errMsg);
              } else {
                _0x56eb43.errMsg.includes("未登录") ? ($.isLogin = false, $.hotflag = false, console.log(_0x56eb43.errMsg)) : ($.hotflag = false, console.log(_0x56eb43.errMsg));
              }
            }
          }
        }
      } catch (_0x1c6ffe) {
        $.logErr(_0x1c6ffe, _0x7a9619);
      } finally {
        _0x951144(_0x56eb43);
      }
    });
  });
}
async function bdy_0x4a40d9(_0x4a4dd4) {
  const _0x4ab29a = {
    pageNum: _0x4a4dd4,
    pageSize: 100,
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    business: "fission"
  };
  let _0x11e6ab = _0x4ab29a,
    _0x28d177 = {
      appId: "f2b1d",
      functionId: "superRedBagList",
      fn: "superRedBagList",
      body: _0x11e6ab,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0x11e6ab = await bdy_0x26904d.getbody(_0x28d177);
  if (!_0x11e6ab) {
    return;
  }
  const _0x129bad = {
    url: "https://api.m.jd.com/api",
    body: _0x11e6ab + "&loginType=2&loginWQBiz=wegame&uuid=" + $.uuid + "&build=169088&screen=414*736&networkType=wifi&d_brand=iPhone&d_model=iPhone10,2&lang=zh_CN&osVersion=&partner=-1&cthr=1",
    headers: {},
    ciphers: bdy_0x14e6c2.cpstr
  };
  _0x129bad.headers.Accept = "application/json, text/plain, */*";
  _0x129bad.headers["x-rp-client"] = "h5_1.0.0";
  _0x129bad.headers["Accept-Language"] = "zh-cn";
  _0x129bad.headers["Accept-Encoding"] = "gzip, deflate, br";
  _0x129bad.headers["Content-Type"] = "application/x-www-form-urlencoded";
  _0x129bad.headers.Origin = "https://pro.m.jd.com";
  _0x129bad.headers["User-Agent"] = $.UA;
  _0x129bad.headers.Referer = "https://pro.m.jd.com/";
  _0x129bad.headers["x-referer-page"] = "https://pro.m.jd.com/";
  _0x129bad.headers["request-from"] = "native";
  _0x129bad.headers.Cookie = bdy_0x3f614c;
  return new Promise(async _0x5db857 => {
    $.dpost(_0x129bad, async (_0x23f0a8, _0xd09b47, _0x4f4fa4) => {
      try {
        if (_0x23f0a8) {
          console.log("" + JSON.stringify(_0x23f0a8));
          console.log(" API请求失败，请检查网路重试");
          if (_0x23f0a8.includes("403")) {
            $.banip = true;
          }
          _0x4f4fa4 = "";
        } else {
          _0x4f4fa4 = JSON.parse(_0x4f4fa4);
          _0x4f4fa4.code == 0 ? $.baglist = _0x4f4fa4.data.items : console.log(_0x4f4fa4.errMsg);
        }
      } catch (_0x3db216) {
        $.logErr(_0x3db216, _0xd09b47);
      } finally {
        _0x5db857(_0x4f4fa4);
      }
    });
  });
}
async function bdy_0x2e259e(_0x598bbd) {
  const _0x148155 = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g",
    isJdApp: true,
    inviter: _0x598bbd
  };
  let _0x53492a = _0x148155,
    _0x5c976d = {
      appId: "c5389",
      functionId: "inviteFissionhelp",
      fn: "inviteFissionhelp",
      body: _0x53492a,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: 1,
      ua: $.UA
    };
  _0x53492a = await bdy_0x26904d.getbody(_0x5c976d);
  if (!_0x53492a) {
    return;
  }
  return new Promise(async _0x43b1aa => {
    $.dpost(bdy_0x15f0f3(_0x53492a), async (_0x32aecb, _0x570185, _0x3020f) => {
      try {
        if (_0x32aecb) {
          console.log("" + JSON.stringify(_0x32aecb));
          console.log("help请求失败，请检查网路重试");
          _0x32aecb.includes("403") && ($.banip = true);
        } else {
          _0x3020f = JSON.parse(_0x3020f);
          if (_0x3020f.code == 0) {
            if (!_0x3020f.data.helpFlg) {
              $.log("结果：不能助力自己！");
              return;
            }
            if (_0x3020f.data.helpResult == 1) {
              $.suc++;
              console.log("结果：助力成功 ✅ " + ($.suc || ""));
            } else {
              if (_0x3020f.data.helpResult == 6) {
                console.log("结果：已经助力过TA！");
              } else {
                if (_0x3020f.data.helpResult == 3) {
                  console.log("结果：没有次数！");
                } else {
                  if (_0x3020f.data.helpResult == 2) {
                    $.log("结果：太火爆了 💣");
                    $.hot = true;
                  } else {
                    if (_0x3020f.data.helpResult == 4) {
                      $.log("结果：没有助力次数！");
                    } else {
                      _0x3020f.data.helpResult == 8 ? $.log("结果：TA未开启新的一轮 💤") : console.log("结果：" + _0x3020f.data?.["helpResult"]);
                    }
                  }
                }
              }
            }
          } else {
            console.log(_0x3020f.errMsg);
          }
        }
      } catch (_0x468f10) {
        $.logErr(_0x468f10, _0x570185);
      } finally {
        _0x43b1aa(_0x3020f);
      }
    });
  });
}
async function bdy_0x5648ae(_0x53e63d, _0x368e18) {
  let _0x5eacca = "functionId=apCashWithDraw&body={\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\",\"businessSource\":\"NONE\",\"base\":{\"id\":" + _0x53e63d.id + ",\"business\":\"fission\",\"poolBaseId\":" + _0x53e63d.poolBaseId + ",\"prizeGroupId\":" + _0x53e63d.prizeGroupId + ",\"prizeBaseId\":" + _0x53e63d.prizeBaseId + ",\"prizeType\":4}}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  const _0x243c52 = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: bdy_0x3f614c
  };
  const _0x1d3845 = {
    url: "https://api.m.jd.com/api",
    body: _0x5eacca,
    headers: _0x243c52
  };
  return new Promise(async _0x38725b => {
    $.dpost(_0x1d3845, async (_0x1afa61, _0x1502b4, _0x1d0cf3) => {
      try {
        if (_0x1afa61) {
          console.log("" + JSON.stringify(_0x1afa61));
          console.log("apCashWithDraw请求失败，请检查网路重试");
          if (_0x1afa61.includes("403")) {
            $.banip = true;
          }
        } else {
          _0x1d0cf3 = JSON.parse(_0x1d0cf3);
          if (_0x1d0cf3.code == 0) {
            if (_0x1d0cf3.data.message.indexOf("待发放") > -1) {
              process.stdout.write("" + (!$.txfail ? "❌" : "❌ "));
              $.txfail = true;
            } else {
              if (_0x1d0cf3.data.message.includes("上限")) {
                !bdy_0x3f4fe2 && process.stdout.write("♻️ ");
                $.txfull = true;
                $.txfail = false;
              } else {
                _0x1d0cf3.data.message.includes("提现") ? (process.stdout.write("✔️ "), $.txsuc.push(_0x368e18), $.txfail = false) : console.log(_0x1d0cf3.data.message);
              }
            }
          } else {
            console.log(_0x1d0cf3.errMsg);
          }
        }
      } catch (_0x425a91) {
        $.logErr(_0x425a91, _0x1502b4);
      } finally {
        _0x38725b(_0x1d0cf3 || "");
      }
    });
  });
}
async function bdy_0x34cca5(_0x3e5603, _0x5d05aa) {
  let _0x1d521e = "functionId=apRecompenseDrawPrize&body={\"drawRecordId\":" + _0x3e5603.id + ",\"business\":\"fission\",\"poolId\":" + _0x3e5603.poolBaseId + ",\"prizeGroupId\":" + _0x3e5603.prizeGroupId + ",\"prizeId\":" + _0x3e5603.prizeBaseId + ",\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\"}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  const _0x1bf936 = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: bdy_0x3f614c
  };
  const _0x27efab = {
    url: "https://api.m.jd.com/api",
    body: _0x1d521e,
    headers: _0x1bf936
  };
  return new Promise(async _0x1e8cb3 => {
    $.dpost(_0x27efab, async (_0x4a3a9a, _0x5c9163, _0x1ab69f) => {
      try {
        if (_0x4a3a9a) {
          console.log("" + JSON.stringify(_0x4a3a9a));
          console.log("apRecompenseDrawPrize 请求失败，请检查网路重试");
          _0x4a3a9a.includes("403") && ($.banip = true);
        } else {
          _0x1ab69f = JSON.parse(_0x1ab69f);
          if (_0x1ab69f.code == 0) {
            if (_0x1ab69f.data.resCode === "0") {
              process.stdout.write("🧧 ");
              $.toredsuc.push(_0x5d05aa);
            } else {
              process.stdout.write("❎ ");
              $.toredfailnum++;
            }
          } else {
            if (_0x1ab69f.errMsg === "失败") {
              process.stdout.write("❎ ");
              $.toredfailnum++;
            } else {
              console.log(_0x1ab69f.errMsg);
            }
          }
        }
      } catch (_0x9fcdc9) {
        $.logErr(_0x9fcdc9, _0x5c9163);
      } finally {
        _0x1e8cb3(_0x1ab69f);
      }
    });
  });
}
function bdy_0x15f0f3(_0x465e36) {
  const _0x94f4f6 = {
    Accept: "application/json, text/plain, */*",
    "x-rp-client": "h5_1.0.0",
    "Content-type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    "x-referer-page": "https://pro.m.jd.com/",
    Origin: "https://pro.m.jd.com",
    "X-Requested-With": "com.jingdong.app.mall",
    Referer: "https://pro.m.jd.com/",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    Cookie: bdy_0x3f614c
  };
  const _0x1f803e = {
    url: "https://api.m.jd.com/api?" + _0x465e36,
    headers: _0x94f4f6
  };
  return _0x1f803e;
}
function bdy_0x3d1301() {
  return new Promise(_0x113d0c => {
    const _0x30d9d9 = {
      Cookie: bdy_0x3f614c,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x5abc04 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0x30d9d9,
      timeout: 10000
    };
    $.get(_0x5abc04, (_0x1f918f, _0x18438d, _0x177f3d) => {
      try {
        if (_0x177f3d) {
          _0x177f3d = JSON.parse(_0x177f3d);
          if (!(_0x177f3d.islogin === "1")) {
            _0x177f3d.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x4bbaa4) {
        console.log(_0x4bbaa4);
      } finally {
        _0x113d0c();
      }
    });
  });
}
function bdy_0x2357e0() {
  return new Promise(_0x529c45 => {
    !bdy_0x4952f3 ? $.msg($.name, "", "" + bdy_0x4ef907) : $.log("京东账号" + $.index + $.nickName + "\n" + bdy_0x4ef907);
    _0x529c45();
  });
}
function bdy_0x569d7e(_0x20cc97) {
  try {
    if (typeof JSON.parse(_0x20cc97) == "object") {
      return true;
    }
  } catch (_0x1374a0) {
    console.log(_0x1374a0);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function bdy_0x31f0e6() {
  const _0x2ceb12 = {
    url: "https://src-dy-server-dmujhfwxmu.cn-hangzhou.fcapp.run/zzhb2",
    timeout: 30000
  };
  return new Promise(_0x398524 => {
    $.get(_0x2ceb12, async (_0x3fdbbf, _0x446e48, _0x20138f) => {
      try {
        if (_0x3fdbbf) {
          console.log("\n服务连接失败，终止执行！");
          process.exit(111);
        } else {
          if (_0x20138f) {
            _0x20138f = JSON.parse(_0x20138f);
            if (_0x20138f.code === 200) {
              bdy_0xf6c626 = _0x20138f.data;
            }
          }
        }
      } catch (_0x531f52) {
        $.logErr(_0x531f52, _0x446e48);
      } finally {
        _0x398524(bdy_0xf6c626);
      }
    });
  });
}
function bdy_0x494669(_0x24d9b6) {
  const _0x4a4d52 = _0x24d9b6.getFullYear(),
    _0x1789f5 = ("0" + (_0x24d9b6.getMonth() + 1)).slice(-2),
    _0x2c9b3c = ("0" + _0x24d9b6.getDate()).slice(-2),
    _0x2f258a = ("0" + _0x24d9b6.getHours()).slice(-2),
    _0x25e974 = ("0" + _0x24d9b6.getMinutes()).slice(-2),
    _0xcb8991 = ("0" + _0x24d9b6.getSeconds()).slice(-2);
  return _0x4a4d52 + "/" + _0x1789f5 + "/" + _0x2c9b3c + " " + _0x2f258a + ":" + _0x25e974 + ":" + _0xcb8991;
}
function bdy_0x505699(_0x180040) {
  if (typeof _0x180040 == "string") {
    try {
      return JSON.parse(_0x180040);
    } catch (_0xf3974b) {
      console.log(_0xf3974b);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}