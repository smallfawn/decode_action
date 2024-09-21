//Sat Sep 21 2024 14:21:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x4e60a6 = $.isNode() ? require("./jdCookie") : "",
  _0x2431a6 = require("./function/dylib"),
  _0xa6c372 = require("./function/dylans"),
  _0x368e61 = require("child_process").execSync,
  _0xecc138 = require("fs"),
  _0x44fff4 = process.env.DY_DEBUG == "true" ? true : false,
  _0x5b11c8 = __dirname + "/rs_dpqd_tokens.json";
let _0x28fce4 = [],
  _0x3a9753 = "",
  _0x27d98,
  _0x1016cf = 0,
  _0x1ca782 = null,
  _0x47f036 = ["6F6AC93814CB680EA1C2F65574813586"];
const _0x15dea6 = "https://api.m.jd.com/api?appid=interCenter_shopSign",
  _0x38ced8 = new Date();
_0x38ced8.setDate(_0x38ced8.getDate() + 1);
_0x38ced8.setHours(0, 0, 0, 0);
if (process.env.DY_PROXY) try {
  ccc = require("./function/proxy.js");
  $.dget = ccc.intoRequest($.get.bind($));
  $.dpost = ccc.intoRequest($.post.bind($));
} catch {
  $.dget = $.get;
  $.dpost = $.post;
} else $.dpost = $.post, $.dget = $.get;
if ($.isNode()) {
  Object.keys(_0x4e60a6).forEach(_0x400d6e => {
    _0x28fce4.push(_0x4e60a6[_0x400d6e]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
} else {
  let _0x237198 = $.getdata("CookiesJD") || "[]";
  _0x237198 = _0x208599(_0x237198);
  _0x28fce4 = _0x237198.map(_0x260a27 => _0x260a27.cookie);
  _0x28fce4.reverse();
  _0x28fce4.push(...[$.getdata("CookieJD2"), $.getdata("CookieJD")]);
  _0x28fce4.reverse();
  _0x28fce4 = _0x28fce4.filter(_0x431816 => _0x431816 !== "" && _0x431816 !== null && _0x431816 !== undefined);
}
let _0x54cd27 = [],
  _0x58f00f = [],
  _0x36cc74 = 0;
process.env.jd_dpqd_tokens && (process.env.jd_dpqd_tokens.indexOf("\n") > -1 || process.env.jd_dpqd_tokens.indexOf("&") > -1 || process.env.jd_dpqd_tokens.indexOf(",") > -1 ? _0x54cd27 = process.env.jd_dpqd_tokens.split(/[,&\n]/) : _0x54cd27.push(process.env.jd_dpqd_tokens), _0x47f036 = _0x54cd27);
let _0x4f13e9 = _0xecc138.existsSync("/ql/data/config") ? "/ql/data/config/config.sh" : "/ql/config/config.sh";
!(async () => {
  if (!_0x28fce4[0]) {
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  $.log("\n当前版本：20240803 ");
  console.log("403需换ip或等会在执行，支持DY_PROXY");
  console.log("TG频道：https://t.me/dylan_jdpro\n");
  $.TokenLists = [];
  $.TokenLists.push(..._0x47f036);
  $.TokenLists = [...new Set($.TokenLists)].filter(_0x1cd917 => !!_0x1cd917 && _0x1cd917.length === 32);
  $.index = 1;
  if ($.TokenLists.length === 0) {
    console.log("无店铺签到token，退出！");
    return;
  } else console.log("共" + $.TokenLists.length + "个店铺，开始查询...");
  _0x1ca782 = new Map();
  _0x254f5f();
  await _0x29e6a9();
  try {
    _0x36cc74 = _0x58f00f.length;
    for (let _0x2bed81 of _0x58f00f) {
      _0x368e61("sed -i \"s!" + _0x2bed81 + "!!g\" " + _0x4f13e9);
    }
  } catch (_0x164d0b) {}
  let _0x1b801d = Object.fromEntries(_0x1ca782);
  _0xecc138.writeFileSync(_0x5b11c8, JSON.stringify(_0x1b801d, null, 2));
  $.log("\n查询信息缓存成功，去执行店铺签到吧！");
  console.log("\n" + (_0x36cc74 > 0 ? _0x36cc74 + "个失效token，变量已移除" : ""));
})().catch(_0x303cd7 => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x303cd7 + "!", "");
}).finally(() => {
  $.done();
});
async function _0x29e6a9() {
  for (var _0x312191 = 0; _0x312191 < $.TokenLists.length; _0x312191++) {
    $.activityId = "";
    $.venderId = "";
    $.tasklist = [];
    $.info = {};
    $.prize = "";
    _0x1016cf = 0;
    if ($.TokenLists[_0x312191] == "") {
      continue;
    }
    _0x254f5f();
    console.log("\n店铺->" + (_0x312191 + 1) + "：" + $.TokenLists[_0x312191]);
    await _0x58c6e3($.TokenLists[_0x312191]);
    if ($.venderId == "") {
      continue;
    } else {
      await _0x9a85d7($.venderId);
      const _0x45f6c1 = {};
      _0x45f6c1.index = $.index++;
      _0x45f6c1.shopName = $.shopname;
      _0x45f6c1.venderId = $.venderId;
      _0x45f6c1.activityId = $.activityId;
      _0x45f6c1.startTime = _0x2431a6.Format_Date($.stime);
      _0x45f6c1.endTime = _0x2431a6.Format_Date($.etime);
      _0x45f6c1.prize = $.prize;
      _0x1ca782.set($.TokenLists[_0x312191], _0x45f6c1);
    }
    await $.wait(1000);
  }
}
async function _0x58c6e3(_0x164129) {
  let _0x5aabd2 = {
      "token": "" + _0x164129,
      "venderId": ""
    },
    _0x21f2a0 = {
      "appId": "4da33",
      "functionId": "interact_center_shopSign_getActivityInfo",
      "body": _0x5aabd2,
      "appid": "interCenter_shopSign",
      "clientVersion": $.UA.split(";")[2],
      "client": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  return _0x5aabd2 = await _0xa6c372.getbody(_0x21f2a0), new Promise(_0x5c3f28 => {
    const _0x1fcbba = {
      "url": "https://api.m.jd.com/api?loginType=2&" + _0x5aabd2,
      "headers": {
        "accept": "*/*",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "ciphers": _0x2431a6.cpstr
    };
    $.dget(_0x1fcbba, (_0x338175, _0x119a25, _0x5bd2c6) => {
      try {
        if (_0x338175) console.log("查询店铺API请求失败‼️"), console.log(_0x338175);else {
          _0x44fff4 && console.log(_0x5bd2c6);
          _0x5bd2c6 = JSON.parse(_0x5bd2c6);
          if (_0x5bd2c6.code == 402) {
            $.venderId = "";
            console.log("活动已失效");
            $.activityEnd = true;
            _0x58f00f.push(_0x164129);
          } else {
            $.venderId = _0x5bd2c6.data.venderId;
            $.activityId = _0x5bd2c6.data.id;
            $.stime = _0x5bd2c6.data.startTime;
            $.etime = _0x5bd2c6.data.endTime;
            console.log("开始时间：" + _0x2431a6.Format_Date($.stime) + (Date.now() - $.stime > 86400000 ? "" : "") + "\n结束时间：" + _0x2431a6.Format_Date($.etime));
            let _0x50361f = [..._0x5bd2c6.data.prizeRuleList, ..._0x5bd2c6.data.continuePrizeRuleList];
            for (let _0x4305b5 = 0; _0x4305b5 < _0x50361f.length; _0x4305b5++) {
              const _0x537d8e = _0x50361f[_0x4305b5].level;
              for (let _0x280159 of _0x50361f[_0x4305b5].prizeList) {
                if (_0x280159.type == 4) {
                  if (_0x4305b5 != _0x50361f.length - 1) {
                    $.prize += "" + (_0x537d8e == 0 ? "每天" : _0x537d8e + "天") + _0x280159.discount + "豆" + _0x280159.number + ("份" + (_0x280159.status === 5 ? "(无)" : "") + "|");
                  } else $.prize += "" + (_0x537d8e == 0 ? "每天" : _0x537d8e + "天") + _0x280159.discount + "豆" + _0x280159.number + ("份" + (_0x280159.status === 5 ? "(无)" : ""));
                } else {
                  if (_0x280159.type == 14) _0x4305b5 != _0x50361f.length - 1 ? $.prize += _0x537d8e + "天" + _0x280159.discount / 100 + "红包" + _0x280159.number + ("份" + (_0x280159.status === 5 ? "(无)" : "") + "|") : $.prize += _0x537d8e + "天" + _0x280159.discount / 100 + "红包" + _0x280159.number + ("份" + (_0x280159.status === 5 ? "(无)" : ""));else {
                    if (_0x280159.type == 10) {
                      if (_0x4305b5 != _0x50361f.length - 1) $.prize += _0x537d8e + "天" + _0x280159.discount + "E卡" + _0x280159.number + ("份" + (_0x280159.status === 5 ? "(无)" : "") + "|");else {
                        $.prize += _0x537d8e + "天" + _0x280159.discount + "E卡" + _0x280159.number + ("份" + (_0x280159.status === 5 ? "(无)" : ""));
                      }
                    } else {
                      if (_0x280159.type == 1) {} else {}
                    }
                  }
                }
              }
            }
            !$.prize && ($.prize = "无豆无红包E卡，有积分优惠券！");
            console.log("签到奖品：" + $.prize);
          }
        }
      } catch (_0x3f48ae) {
        $.logErr(_0x3f48ae, _0x119a25);
      } finally {
        _0x5c3f28(_0x5bd2c6);
      }
    });
  });
}
async function _0x9a85d7(_0x12ce73) {
  if (!_0x12ce73) console.log("店铺名称：未获取到！\n店铺链接：未获取到！");
  return new Promise(_0x1c29a0 => {
    const _0x4403bf = {
      "url": "https://api.m.jd.com/client.action?functionId=whx_getMShopDetail&body=%7B%22venderId%22%3A%22" + _0x12ce73 + "%22%2C%22stamp%22%3A%221%22%2C%22%24taroTimestamp%22%3A" + new Date().valueOf() + "%2C%22source%22%3A%22m-shop%22%7D&t=" + new Date().valueOf() + "&appid=shop_view&clientVersion=11.0.0&client=wh5&area=1_72_2799_0&uuid=16630119447091257705224",
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
    $.dget(_0x4403bf, (_0x53a3b7, _0x1e77dd, _0x2c1e51) => {
      try {
        if (_0x53a3b7) {
          console.log("查询店铺名称API请求失败‼️");
          console.log(_0x53a3b7);
        } else _0x2c1e51 = JSON.parse(_0x2c1e51), $.shopname = _0x2c1e51.data.shopBaseInfo.shopName, console.log("店铺名称：" + $.shopname + "\n店铺链接：https://shop.m.jd.com/?venderId=" + _0x12ce73), _0x27d98 += "【" + $.shopname + "】";
      } catch (_0x17f1fb) {
        $.logErr(_0x17f1fb, _0x1e77dd);
      } finally {
        _0x1c29a0(_0x2c1e51);
      }
    });
  });
}
async function _0x5ef228(_0x3a0437) {
  return new Promise(_0x1e884f => {
    const _0x506cc0 = {
      "url": _0x15dea6 + "&t=" + Date.now() + "&loginType=2&functionId=interact_center_shopSign_getActivityInfo&body={%22token%22:%22" + _0x3a0437 + "%22,%22venderId%22:%22%22}&jsonp=jsonp1005",
      "headers": {
        "accept": "accept",
        "accept-encoding": "gzip, deflate",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x3a9753,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      }
    };
    $.dget(_0x506cc0, (_0xaf644a, _0x193143, _0x34954e) => {
      try {
        if (_0xaf644a) console.log("查询活动信息API请求失败‼️"), console.log(_0xaf644a);else {
          _0x34954e = JSON.parse(/{(.*)}/g.exec(_0x34954e)[0]);
          $.activityId = _0x34954e.data?.["id"];
          if (!$.activityId) return;
          let _0x4f2d17 = _0x34954e.data.startTime,
            _0x2e4d27 = _0x34954e.data.endTime;
          console.log("开始时间：" + new Date(parseInt(_0x4f2d17)).toLocaleString() + "\n结束时间：" + new Date(parseInt(_0x2e4d27)).toLocaleString());
          for (let _0x2e69b0 = 0; _0x2e69b0 < _0x34954e.data.continuePrizeRuleList.length; _0x2e69b0++) {
            const _0x3b5f7d = _0x34954e.data.continuePrizeRuleList[_0x2e69b0].level;
            for (let _0x1e1757 of _0x34954e.data.continuePrizeRuleList[_0x2e69b0].prizeList) {
              if (_0x1e1757.type == 4) _0x2e69b0 != _0x34954e.data.continuePrizeRuleList.length - 1 ? $.prize += _0x3b5f7d + "天" + _0x1e1757.discount + "豆" + _0x1e1757.number + "份|" : $.prize += _0x3b5f7d + "天" + _0x1e1757.discount + "豆" + _0x1e1757.number + "份";else {
                if (_0x1e1757.type == 14) _0x2e69b0 != _0x34954e.data.continuePrizeRuleList.length - 1 ? $.prize += _0x3b5f7d + "天" + _0x1e1757.discount / 100 + "红包" + _0x1e1757.number + "份|" : $.prize += _0x3b5f7d + "天" + _0x1e1757.discount / 100 + "红包" + _0x1e1757.number + "份";else {}
              }
            }
          }
          !$.prize && ($.prize = "无豆无红包，可能积分E卡优惠券！");
          console.log("簽到奖励：" + $.prize);
        }
      } catch (_0x5934af) {
        $.logErr(_0x5934af, _0x193143);
      } finally {
        _0x1e884f(_0x34954e);
      }
    });
  });
}
async function _0x42a573(_0x1967a5, _0x2b7ac8, _0x1c74a6, _0x1f0ee9, _0x29446b, _0x44de95) {
  let _0x220737 = {
      "token": "" + _0x1f0ee9,
      "venderId": $.venderId,
      "activityId": _0x29446b,
      "type": 56,
      "actionType": 7
    },
    _0x553a50 = {
      "appId": "4da33",
      "functionId": "interact_center_shopSign_signCollectGift",
      "body": _0x220737,
      "appid": "interCenter_shopSign",
      "clientVersion": $.UA.split(";")[2],
      "client": "ios",
      "user": $.UserName,
      "code": 1,
      "ua": $.UA
    };
  return _0x220737 = await _0xa6c372.getbody(_0x553a50), new Promise(_0x5e9ce1 => {
    const _0x17f704 = {
      "url": "https://api.m.jd.com/api?loginType=2&" + _0x220737,
      "headers": {
        "accept": "accept",
        "accept-encoding": "gzip, deflate",
        "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "cookie": _0x1967a5,
        "referer": "https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=" + _0x1f0ee9 + "&sceneval=2",
        "User-Agent": _0x44de95
      }
    };
    $.get(_0x17f704, async (_0xb99be7, _0x1a8c7d, _0xd8703a) => {
      try {
        if (_0xb99be7) console.log("签到API请求失败‼️"), console.log(_0xb99be7);else {
          _0xd8703a = JSON.parse(_0xd8703a);
          if (_0xd8703a.success && _0xd8703a.success === true) {
            let _0x4913e8 = 0;
            for (let _0x13bade of _0xd8703a.data) {
              for (i of _0x13bade.prizeList) switch (i.type) {
                case 4:
                  _0x4913e8 += i.discount;
                  break;
              }
            }
            let _0x485224 = await _0x49ecbf(_0x1967a5, _0x1f0ee9);
            console.log("┗━[" + _0x2b7ac8 + "][" + _0x1c74a6 + "] 签到成功" + (_0x4913e8 > 0 ? "，获得" + _0x4913e8 + "京豆🥔，" : "，") + "已签" + (_0x485224.data?.["days"] || "?") + "天");
            _0x1016cf = 0;
          } else {
            if (_0xd8703a.msg) {
              let _0x59c4e1 = await _0x49ecbf(_0x1967a5, _0x1f0ee9);
              if (_0xd8703a.msg.includes("已经")) {
                console.log("┗━[" + _0x2b7ac8 + "][" + _0x1c74a6 + "] 今日已签过！已签" + (_0x59c4e1.data?.["days"] || "?") + "天");
              } else $.log("┗━[" + _0x2b7ac8 + "][" + _0x1c74a6 + "] " + _0xd8703a.msg);
            } else {
              console.log("┗━[" + _0x2b7ac8 + "][" + _0x1c74a6 + "] 签到失败,重試❗️❗️❗️");
              _0x1016cf++;
              if (_0x1016cf > 20) return;
              await $.wait(500);
              await _0x42a573(_0x1967a5, _0x2b7ac8, _0x1c74a6, _0x1f0ee9, _0x29446b, _0x44de95);
            }
          }
        }
      } catch (_0x4d4f0e) {
        $.logErr(_0x4d4f0e, _0x1a8c7d);
      } finally {
        _0x5e9ce1(_0xd8703a);
      }
    });
  });
}
async function _0x49ecbf(_0x1d65bc, _0x265535) {
  return new Promise(_0x1e9495 => {
    const _0x3e881f = {
      "url": _0x15dea6 + "&t=" + Date.now() + "&loginType=2&functionId=interact_center_shopSign_getSignRecord&body={%22token%22:%22" + _0x265535 + "%22,%22venderId%22:%22%22,%22activityId%22:%22%22,%22type%22:56}&jsonp=jsonp1006",
      "headers": {
        "accept": "application/json",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        "cookie": _0x1d65bc,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      }
    };
    $.get(_0x3e881f, (_0x1d5716, _0x18f271, _0x1a3e44) => {
      try {
        _0x1d5716 ? (console.log("API请求失败‼️"), console.log(_0x1d5716)) : _0x1a3e44 = JSON.parse(/{(.*)}/g.exec(_0x1a3e44)[0]);
      } catch (_0x22498d) {
        $.logErr(_0x22498d, _0x18f271);
      } finally {
        _0x1e9495(_0x1a3e44);
      }
    });
  });
}
function _0x22b6b1() {
  return new Promise(_0x1a27df => {
    const _0x42d97f = {
      "url": "https://lite-msg.m.jd.com/client.action?functionId=msgEntranceV1",
      "headers": {
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x42d97f, (_0x825f84, _0x317760, _0x4941cb) => {
      try {
        if (_0x4941cb) {
          _0x4941cb = JSON.parse(_0x4941cb);
          $.difftime = Date.now() - _0x4941cb.timestamp;
        }
      } catch (_0x206fd2) {
        console.log(_0x206fd2);
      } finally {
        _0x1a27df();
      }
    });
  });
}
async function _0xd1a044() {
  $.isNode() && ($.msg($.name, "", "【京东账号" + $.index + "】" + $.nickName + "\n" + _0x27d98), allMessage += "【京东账号" + $.index + "】" + $.nickName + "\n" + _0x27d98 + ($.index !== _0x28fce4.length ? "\n\n" : ""));
}
function _0x5aa1d0() {
  return new Promise(_0x49e360 => {
    const _0x19165d = {
      "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      "headers": {
        "Cookie": _0x3a9753,
        "referer": "https://h5.m.jd.com/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    $.get(_0x19165d, (_0x402d52, _0x2bc2a2, _0x28daf4) => {
      try {
        if (_0x28daf4) {
          _0x28daf4 = JSON.parse(_0x28daf4);
          if (_0x28daf4.islogin === "1") {} else _0x28daf4.islogin === "0" && ($.isLogin = false);
        }
      } catch (_0x2312e4) {
        console.log(_0x2312e4);
      } finally {
        _0x49e360();
      }
    });
  });
}
function _0x208599(_0x1e185c) {
  if (typeof _0x1e185c == "string") try {
    return JSON.parse(_0x1e185c);
  } catch (_0x6659d2) {
    return console.log(_0x6659d2), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
function _0x33ecbb(_0x450d08) {
  _0x450d08 = _0x450d08 || 32;
  let _0x322b23 = "abcdef0123456789",
    _0x2b23e5 = _0x322b23.length,
    _0x256d3e = "";
  for (i = 0; i < _0x450d08; i++) _0x256d3e += _0x322b23.charAt(Math.floor(Math.random() * _0x2b23e5));
  return _0x256d3e;
}
function _0x254f5f() {
  $.UA = "jdapp;iPhone;10.2.2;13.1.2;" + _0x33ecbb(40) + ";M/5.0;network/wifi;ADID/;model/iPhone8,1;addressid/2308460611;appBuild/167863;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
}