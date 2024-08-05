//Mon Aug 05 2024 02:21:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x1b3bab = $.isNode() ? require("./jdCookie") : "",
  _0x5d83ab = require("./function/dylib"),
  _0x4e391e = require("./function/dylans"),
  _0x244237 = require("child_process").execSync,
  _0x1cce7c = require("fs"),
  _0xc442f9 = process.env.DY_DEBUG == "true" ? true : false,
  _0x3100dc = __dirname + "/rs_dpqd_tokens.json";
let _0x5d9dc1 = [],
  _0x199bcb = "",
  _0x330afd,
  _0x3ef572 = 0,
  _0x4eee36 = null,
  _0x33106b = ["6F6AC93814CB680EA1C2F65574813586"];
const _0x3b0987 = "https://api.m.jd.com/api?appid=interCenter_shopSign",
  _0x373ac0 = new Date();
_0x373ac0.setDate(_0x373ac0.getDate() + 1);
_0x373ac0.setHours(0, 0, 0, 0);
if (process.env.DY_PROXY) try {
  ccc = require("./function/proxy.js");
  $.dget = ccc.intoRequest($.get.bind($));
  $.dpost = ccc.intoRequest($.post.bind($));
} catch {
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
if ($.isNode()) {
  Object.keys(_0x1b3bab).forEach(_0x5f54d7 => {
    _0x5d9dc1.push(_0x1b3bab[_0x5f54d7]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else {
  let _0x20f744 = $.getdata("CookiesJD") || "[]";
  _0x20f744 = _0x44f152(_0x20f744);
  _0x5d9dc1 = _0x20f744.map(_0x2cbc61 => _0x2cbc61.cookie);
  _0x5d9dc1.reverse();
  _0x5d9dc1.push(...[$.getdata("CookieJD2"), $.getdata("CookieJD")]);
  _0x5d9dc1.reverse();
  _0x5d9dc1 = _0x5d9dc1.filter(_0x47bf9b => _0x47bf9b !== "" && _0x47bf9b !== null && _0x47bf9b !== undefined);
}
let _0x3e3b9b = [],
  _0x1596dd = [],
  _0x5628b3 = 0;
process.env.jd_dpqd_tokens && (process.env.jd_dpqd_tokens.indexOf("\n") > -1 || process.env.jd_dpqd_tokens.indexOf("&") > -1 || process.env.jd_dpqd_tokens.indexOf(",") > -1 ? _0x3e3b9b = process.env.jd_dpqd_tokens.split(/[,&\n]/) : _0x3e3b9b.push(process.env.jd_dpqd_tokens), _0x33106b = _0x3e3b9b);
let _0x43683f = _0x1cce7c.existsSync("/ql/data/config") ? "/ql/data/config/config.sh" : "/ql/config/config.sh";
!(async () => {
  if (!_0x5d9dc1[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  $.log("\n当前版本：20240802 ");
  console.log("403需换ip或等会在执行，支持DY_PROXY");
  console.log("TG频道：https://t.me/dylan_jdpro\n");
  $.TokenLists = [];
  $.TokenLists.push(..._0x33106b);
  $.TokenLists = [...new Set($.TokenLists)].filter(_0x4c5cb9 => !!_0x4c5cb9 && _0x4c5cb9.length === 32);
  $.index = 1;
  if ($.TokenLists.length === 0) {
    console.log("无店铺签到token，退出！");
    return;
  } else console.log("共" + $.TokenLists.length + "个店铺，开始查询...");
  _0x4eee36 = new Map();
  _0xaddfab();
  await _0x511159();
  try {
    _0x5628b3 = _0x1596dd.length;
    for (let _0x466d56 of _0x1596dd) {
      _0x244237("sed -i \"s!" + _0x466d56 + "!!g\" " + _0x43683f);
    }
  } catch (_0x1e1c08) {}
  let _0x5932c0 = Object.fromEntries(_0x4eee36);
  _0x1cce7c.writeFileSync(_0x3100dc, JSON.stringify(_0x5932c0, null, 2));
  $.log("\n查询信息缓存成功，去执行店铺签到吧！");
  console.log("\n" + (_0x5628b3 > 0 ? _0x5628b3 + "个失效token，变量已移除" : ""));
})().catch(_0x1efa27 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x1efa27 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x511159() {
  for (var _0x27d41a = 0; _0x27d41a < $.TokenLists.length; _0x27d41a++) {
    _0x199bcb = _0x5d9dc1[Math.floor(Math.random() * _0x5d9dc1.length)];
    $.activityId = "";
    $.venderId = "";
    $.tasklist = [];
    $.info = {};
    $.prize = "";
    _0x3ef572 = 0;
    if ($.TokenLists[_0x27d41a] == "") continue;
    _0xaddfab();
    console.log("\n店铺->" + (_0x27d41a + 1) + "：" + $.TokenLists[_0x27d41a]);
    await _0xe81a81($.TokenLists[_0x27d41a]);
    if ($.venderId == "") {
      continue;
    } else {
      await _0x1e4ef6($.venderId);
      const _0x2c9351 = {};
      _0x2c9351.index = $.index++;
      _0x2c9351.shopName = $.shopname;
      _0x2c9351.venderId = $.venderId;
      _0x2c9351.activityId = $.activityId;
      _0x2c9351.startTime = _0x5d83ab.Format_Date($.stime);
      _0x2c9351.endTime = _0x5d83ab.Format_Date($.etime);
      _0x2c9351.prize = $.prize;
      _0x4eee36.set($.TokenLists[_0x27d41a], _0x2c9351);
    }
    await $.wait(1000);
  }
}
async function _0xe81a81(_0xc7bba2) {
  let _0x17635d = {
      "token": "" + _0xc7bba2,
      "venderId": ""
    },
    _0x22b9b6 = {
      "appId": "4da33",
      "functionId": "interact_center_shopSign_getActivityInfo",
      "body": _0x17635d,
      "appid": "interCenter_shopSign",
      "clientVersion": $.UA.split(";")[2],
      "client": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  return _0x17635d = await _0x4e391e.getbody(_0x22b9b6), new Promise(_0x50f699 => {
    const _0x410483 = {
      "url": "https://api.m.jd.com/api?loginType=2&" + _0x17635d,
      "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x199bcb,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "ciphers": _0x5d83ab.cpstr
    };
    $.dget(_0x410483, (_0x3a0dc8, _0xba9ff6, _0x4eea08) => {
      try {
        if (_0x3a0dc8) console.log("查询店铺API请求失败‼️"), console.log(_0x3a0dc8);else {
          _0xc442f9 && console.log(_0x4eea08);
          _0x4eea08 = JSON.parse(_0x4eea08);
          if (_0x4eea08.code == 402) {
            $.venderId = "";
            console.log("活动已失效");
            $.activityEnd = true;
            _0x1596dd.push(_0xc7bba2);
          } else {
            $.venderId = _0x4eea08.data.venderId;
            $.activityId = _0x4eea08.data.id;
            $.stime = _0x4eea08.data.startTime;
            $.etime = _0x4eea08.data.endTime;
            console.log("开始时间：" + _0x5d83ab.Format_Date($.stime) + (Date.now() - $.stime > 86400000 ? "" : "") + "\n结束时间：" + _0x5d83ab.Format_Date($.etime));
            let _0x14e5bc = [..._0x4eea08.data.prizeRuleList, ..._0x4eea08.data.continuePrizeRuleList];
            for (let _0x439ecd = 0; _0x439ecd < _0x14e5bc.length; _0x439ecd++) {
              const _0x29b3e6 = _0x14e5bc[_0x439ecd].level;
              for (let _0x408ddf of _0x14e5bc[_0x439ecd].prizeList) {
                if (_0x408ddf.type == 4) _0x439ecd != _0x14e5bc.length - 1 ? $.prize += "" + (_0x29b3e6 == 0 ? "每天" : _0x29b3e6 + "天") + _0x408ddf.discount + "豆" + _0x408ddf.number + ("份" + (_0x408ddf.status === 5 ? "(无)" : "") + "|") : $.prize += "" + (_0x29b3e6 == 0 ? "每天" : _0x29b3e6 + "天") + _0x408ddf.discount + "豆" + _0x408ddf.number + ("份" + (_0x408ddf.status === 5 ? "(无)" : ""));else {
                  if (_0x408ddf.type == 14) _0x439ecd != _0x14e5bc.length - 1 ? $.prize += _0x29b3e6 + "天" + _0x408ddf.discount / 100 + "红包" + _0x408ddf.number + ("份" + (_0x408ddf.status === 5 ? "(无)" : "") + "|") : $.prize += _0x29b3e6 + "天" + _0x408ddf.discount / 100 + "红包" + _0x408ddf.number + ("份" + (_0x408ddf.status === 5 ? "(无)" : ""));else {
                    if (_0x408ddf.type == 10) _0x439ecd != _0x14e5bc.length - 1 ? $.prize += _0x29b3e6 + "天" + _0x408ddf.discount + "E卡" + _0x408ddf.number + ("份" + (_0x408ddf.status === 5 ? "(无)" : "") + "|") : $.prize += _0x29b3e6 + "天" + _0x408ddf.discount + "E卡" + _0x408ddf.number + ("份" + (_0x408ddf.status === 5 ? "(无)" : ""));else {
                      if (_0x408ddf.type == 1) {} else {}
                    }
                  }
                }
              }
            }
            !$.prize && ($.prize = "无豆无红包E卡，有积分优惠券！");
            console.log("签到奖品：" + $.prize);
          }
        }
      } catch (_0x4c1380) {
        $.logErr(_0x4c1380, _0xba9ff6);
      } finally {
        _0x50f699(_0x4eea08);
      }
    });
  });
}
async function _0x1e4ef6(_0x47cd2e) {
  if (!_0x47cd2e) console.log("店铺名称：未获取到！\n店铺链接：未获取到！");
  return new Promise(_0x59aa0b => {
    const _0x5e19c3 = {
      "url": "https://api.m.jd.com/client.action?functionId=whx_getMShopDetail&body=%7B%22venderId%22%3A%22" + _0x47cd2e + "%22%2C%22stamp%22%3A%221%22%2C%22%24taroTimestamp%22%3A" + new Date().valueOf() + "%2C%22source%22%3A%22m-shop%22%7D&t=" + new Date().valueOf() + "&appid=shop_view&clientVersion=11.0.0&client=wh5&area=1_72_2799_0&uuid=16630119447091257705224",
      "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "Referer": "https://shop.m.jd.com/",
        "User-Agent": $.UA
      }
    };
    $.dget(_0x5e19c3, (_0xe044, _0x36b701, _0x1dd623) => {
      try {
        _0xe044 ? (console.log("查询店铺名称API请求失败‼️"), console.log(_0xe044)) : (_0x1dd623 = JSON.parse(_0x1dd623), $.shopname = _0x1dd623.data.shopBaseInfo.shopName, console.log("店铺名称：" + $.shopname + "\n店铺链接：https://shop.m.jd.com/?venderId=" + _0x47cd2e), _0x330afd += "【" + $.shopname + "】");
      } catch (_0x5b0318) {
        $.logErr(_0x5b0318, _0x36b701);
      } finally {
        _0x59aa0b(_0x1dd623);
      }
    });
  });
}
async function _0x56d544(_0xf5631) {
  return new Promise(_0x21735c => {
    const _0x1ceb19 = {
      "url": _0x3b0987 + "&t=" + Date.now() + "&loginType=2&functionId=interact_center_shopSign_getActivityInfo&body={%22token%22:%22" + _0xf5631 + "%22,%22venderId%22:%22%22}&jsonp=jsonp1005",
      "headers": {
        "accept": "accept",
        "accept-encoding": "gzip, deflate",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x199bcb,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      }
    };
    $.dget(_0x1ceb19, (_0x44a273, _0x335072, _0x4d4009) => {
      try {
        if (_0x44a273) console.log("查询活动信息API请求失败‼️"), console.log(_0x44a273);else {
          _0x4d4009 = JSON.parse(/{(.*)}/g.exec(_0x4d4009)[0]);
          $.activityId = _0x4d4009.data?.["id"];
          if (!$.activityId) return;
          let _0x4f59dd = _0x4d4009.data.startTime,
            _0x471527 = _0x4d4009.data.endTime;
          console.log("开始时间：" + new Date(parseInt(_0x4f59dd)).toLocaleString() + "\n结束时间：" + new Date(parseInt(_0x471527)).toLocaleString());
          for (let _0x184c03 = 0; _0x184c03 < _0x4d4009.data.continuePrizeRuleList.length; _0x184c03++) {
            const _0x14f28c = _0x4d4009.data.continuePrizeRuleList[_0x184c03].level;
            for (let _0x5e1e05 of _0x4d4009.data.continuePrizeRuleList[_0x184c03].prizeList) {
              if (_0x5e1e05.type == 4) _0x184c03 != _0x4d4009.data.continuePrizeRuleList.length - 1 ? $.prize += _0x14f28c + "天" + _0x5e1e05.discount + "豆" + _0x5e1e05.number + "份|" : $.prize += _0x14f28c + "天" + _0x5e1e05.discount + "豆" + _0x5e1e05.number + "份";else {
                if (_0x5e1e05.type == 14) _0x184c03 != _0x4d4009.data.continuePrizeRuleList.length - 1 ? $.prize += _0x14f28c + "天" + _0x5e1e05.discount / 100 + "红包" + _0x5e1e05.number + "份|" : $.prize += _0x14f28c + "天" + _0x5e1e05.discount / 100 + "红包" + _0x5e1e05.number + "份";else {}
              }
            }
          }
          !$.prize && ($.prize = "无豆无红包，可能积分E卡优惠券！");
          console.log("簽到奖励：" + $.prize);
        }
      } catch (_0x529c96) {
        $.logErr(_0x529c96, _0x335072);
      } finally {
        _0x21735c(_0x4d4009);
      }
    });
  });
}
async function _0x38fefa(_0x58cea1, _0x1271d4, _0x2059d1, _0x2f7546, _0x20d42e, _0x5f9606) {
  let _0x13de8b = {
      "token": "" + _0x2f7546,
      "venderId": $.venderId,
      "activityId": _0x20d42e,
      "type": 56,
      "actionType": 7
    },
    _0x20175d = {
      "appId": "4da33",
      "functionId": "interact_center_shopSign_signCollectGift",
      "body": _0x13de8b,
      "appid": "interCenter_shopSign",
      "clientVersion": $.UA.split(";")[2],
      "client": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  return _0x13de8b = await _0x4e391e.getbody(_0x20175d), new Promise(_0x4e730d => {
    const _0x531407 = {
      "url": "https://api.m.jd.com/api?loginType=2&" + _0x13de8b,
      "headers": {
        "accept": "accept",
        "accept-encoding": "gzip, deflate",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x58cea1,
        "referer": "https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=" + _0x2f7546 + "&sceneval=2",
        "User-Agent": _0x5f9606
      }
    };
    $.get(_0x531407, async (_0x47f729, _0x5bb10e, _0x222ab4) => {
      try {
        if (_0x47f729) console.log("签到API请求失败‼️"), console.log(_0x47f729);else {
          _0x222ab4 = JSON.parse(_0x222ab4);
          if (_0x222ab4.success && _0x222ab4.success === true) {
            let _0x1dde90 = 0;
            for (let _0xdcc47e of _0x222ab4.data) {
              for (i of _0xdcc47e.prizeList) switch (i.type) {
                case 4:
                  _0x1dde90 += i.discount;
                  break;
              }
            }
            let _0x1b9134 = await _0x13e24b(_0x58cea1, _0x2f7546);
            console.log("┗━[" + _0x1271d4 + "][" + _0x2059d1 + "] 签到成功" + (_0x1dde90 > 0 ? "，获得" + _0x1dde90 + "京豆🥔，" : "，") + "已签" + (_0x1b9134.data?.["days"] || "?") + "天");
            _0x3ef572 = 0;
          } else {
            if (_0x222ab4.msg) {
              let _0x471ea8 = await _0x13e24b(_0x58cea1, _0x2f7546);
              _0x222ab4.msg.includes("已经") ? console.log("┗━[" + _0x1271d4 + "][" + _0x2059d1 + "] 今日已签过！已签" + (_0x471ea8.data?.["days"] || "?") + "天") : $.log("┗━[" + _0x1271d4 + "][" + _0x2059d1 + "] " + _0x222ab4.msg);
            } else {
              console.log("┗━[" + _0x1271d4 + "][" + _0x2059d1 + "] 签到失败,重試❗️❗️❗️");
              _0x3ef572++;
              if (_0x3ef572 > 20) return;
              await $.wait(500);
              await _0x38fefa(_0x58cea1, _0x1271d4, _0x2059d1, _0x2f7546, _0x20d42e, _0x5f9606);
            }
          }
        }
      } catch (_0x5c2a83) {
        $.logErr(_0x5c2a83, _0x5bb10e);
      } finally {
        _0x4e730d(_0x222ab4);
      }
    });
  });
}
async function _0x13e24b(_0x248656, _0x1c06bd) {
  return new Promise(_0x4a7e51 => {
    const _0x3b7fa1 = {
      "url": _0x3b0987 + "&t=" + Date.now() + "&loginType=2&functionId=interact_center_shopSign_getSignRecord&body={%22token%22:%22" + _0x1c06bd + "%22,%22venderId%22:%22%22,%22activityId%22:%22%22,%22type%22:56}&jsonp=jsonp1006",
      "headers": {
        "accept": "application/json",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        "cookie": _0x248656,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      }
    };
    $.get(_0x3b7fa1, (_0x14d162, _0x3f3d45, _0x5eb1d8) => {
      try {
        if (_0x14d162) {
          console.log("API请求失败‼️");
          console.log(_0x14d162);
        } else _0x5eb1d8 = JSON.parse(/{(.*)}/g.exec(_0x5eb1d8)[0]);
      } catch (_0x1a4fb7) {
        $.logErr(_0x1a4fb7, _0x3f3d45);
      } finally {
        _0x4a7e51(_0x5eb1d8);
      }
    });
  });
}
function _0x5400f8() {
  return new Promise(_0x1e7f45 => {
    const _0x2cff59 = {
      "url": "https://lite-msg.m.jd.com/client.action?functionId=msgEntranceV1",
      "headers": {
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x2cff59, (_0x4b503e, _0x47d063, _0x34eed1) => {
      try {
        _0x34eed1 && (_0x34eed1 = JSON.parse(_0x34eed1), $.difftime = Date.now() - _0x34eed1.timestamp);
      } catch (_0x5d6fb9) {
        console.log(_0x5d6fb9);
      } finally {
        _0x1e7f45();
      }
    });
  });
}
async function _0x21ff2c() {
  $.isNode() && ($.msg($.name, "", "【京东账号" + $.index + "】" + $.nickName + "\n" + _0x330afd), allMessage += "【京东账号" + $.index + "】" + $.nickName + "\n" + _0x330afd + ($.index !== _0x5d9dc1.length ? "\n\n" : ""));
}
function _0x348b44() {
  return new Promise(_0x514744 => {
    const _0x461107 = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x199bcb,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x461107, (_0x5dae8d, _0x2543ed, _0x1c2564) => {
      try {
        if (_0x1c2564) {
          _0x1c2564 = JSON.parse(_0x1c2564);
          if (_0x1c2564.islogin === "1") {} else _0x1c2564.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x958cf3) {
        console.log(_0x958cf3);
      } finally {
        _0x514744();
      }
    });
  });
}
function _0x44f152(_0x1fc5eb) {
  if (typeof _0x1fc5eb == "string") {
    try {
      return JSON.parse(_0x1fc5eb);
    } catch (_0xd6ca86) {
      return console.log(_0xd6ca86), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
    }
  }
}
function _0x4677fc(_0x385141) {
  _0x385141 = _0x385141 || 32;
  let _0x120668 = "abcdef0123456789",
    _0x5ab589 = _0x120668.length,
    _0xb178dc = "";
  for (i = 0; i < _0x385141; i++) _0xb178dc += _0x120668.charAt(Math.floor(Math.random() * _0x5ab589));
  return _0xb178dc;
}
function _0xaddfab() {
  $.UA = "jdapp;iPhone;10.2.2;13.1.2;" + _0x4677fc(40) + ";M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167863;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}