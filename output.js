//Tue Aug 06 2024 10:04:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0xedd975 = new _0xcb0fd8("联通云盘抽奖"),
  _0x4a5ebe = 1,
  _0x29ff2d = 0,
  {
    v4: _0x409369
  } = require("uuid"),
  _0xd9290d = require("crypto"),
  _0x3319bf = _0x409369();
let _0x9d21b3 = process.env.chinaUnicomCookie,
  _0x19994a = "",
  _0x8f9bae = "";
ckArr = _0x9d21b3.split("&");
_0x3a5f33("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = _0x9d21b3.split("&");
  await _0x20b44c();
  for (let _0x209a50 = 0; _0x209a50 < ckArr.length; _0x209a50++) {
    let _0x160040 = _0x209a50 + 1;
    console.log("------------- 开始【第 " + _0x160040 + " 个账号】-------------");
    _0x8f9bae = ckArr[_0x209a50].split("&");
    _0x3a5f33("【debug】 这是你第 " + _0x160040 + " 账号信息:\n " + _0x8f9bae);
    await _0x32279e();
    await _0xedd975.wait(1 * 2000);
    if (!num1) {
      console.log("当前online过期，跳过...");
      continue;
    }
    const _0x30bdff = _0x5039b9(),
      _0x57abe0 = require("axios");
    let _0x3c9ca8 = {
      "method": "GET",
      "url": "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm?appName=shouting&clientid=1001000003&to_url=https://panservice.mail.wo.cn/h5/activitymobile/turn-template?activityId%3D6",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0400}",
        "Cookie": "PvSessionId=" + _0x30bdff + "" + _0x3319bf + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0400; city=036|" + cityCode + "|90063345|-99;devicedId=" + _0x3319bf + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      },
      "maxRedirects": 0
    };
    await _0x57abe0.request(_0x3c9ca8).catch(_0x23b123 => {
      wenb = _0x23b123.request.res.rawHeaders[13];
      ticket1 = wenb.match(/ticket=([^&]+)/);
      ticket = ticket1[1];
    });
    console.log("" + num1 + "抽奖");
    await _0xedd975.wait(1 * 1000);
    req = Math.floor(89999 * Math.random()) + 100000;
    sjc13 = Math.round(new Date().getTime()).toString();
    const _0x253d5 = "HandheldHallAutoLogin" + sjc13 + "" + req + "100002",
      _0x367434 = _0xd9290d.createHash("md5");
    _0x367434.update(_0x253d5);
    md5Hash = _0x367434.digest("hex");
    await _0x28d785();
    await _0x586e63();
    await _0x310f14();
    await _0x113c61();
  }
  await _0x17c393(_0x19994a);
})().catch(_0x456874 => _0xedd975.logErr(_0x456874)).finally(() => _0xedd975.done());
async function _0x28d785() {
  let _0x39ac2a = {
      "url": "https://panservice.mail.wo.cn/wohome/dispatcher",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "accessToken": "",
        "Content-Type": "application/json",
        "client-Id": "1001000003",
        "Origin": "https://panservice.mail.wo.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0602}",
        "access-token": "",
        "Host": "panservice.mail.wo.cn",
        "X-YP-Client-Id": "1001000003",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\"header\": {\"key\": \"HandheldHallAutoLogin\",\"resTime\": " + sjc13 + ",\"reqSeq\": " + req + ",\"channel\": \"100002\",\"version\": \"\",\"sign\": \"" + md5Hash + "\"},\"body\": {\"clientId\": \"1001000003\",\"ticket\": \"" + ticket + "\"}}"
    },
    _0x4e2e4e = await _0x1c5418(_0x39ac2a, "token");
  token = _0x4e2e4e.RSP.DATA.token;
}
async function _0x586e63() {
  let _0x570ac9 = {
      "url": "https://panservice.mail.wo.cn/wohome/v1/lottery",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "Origin": "https://panservice.mail.wo.cn",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/2.2.8 (iPhone; iOS 16.3.1)",
        "Client-Id": "10086",
        "Access-Token": token,
        "Host": "panservice.mail.wo.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\"bizKey\": \"newLottery\",\"bizObject\": {\"lottery\": {\"activityId\": \"mcGM6BOC2/XPOJnsZQYjNw==\",\"type\": 3}}}"
    },
    _0x96765 = await _0x1c5418(_0x570ac9, "ll");
  try {
    if (_0x96765.result.prizeName === null) console.log("已经抽过奖了");else {
      qgid = _0x96765.result.prizeName;
      console.log("本次运行获得：" + qgid);
    }
  } catch (_0x201440) {}
}
async function _0x310f14() {
  let _0x21ddd6 = {
      "url": "https://panservice.mail.wo.cn/activity/v1/times?activityId=gAV4huOZ9VWPxSBWKUxZsQ%3D%3D",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "clientId": "1001000165",
        "source-type": "woapi",
        "X-YP-Access-Token": token,
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/2.2.8 (iPhone; iOS 16.3.1)",
        "token": token,
        "Host": "panservice.mail.wo.cn",
        "X-YP-Client-Id": "1001000165",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      }
    },
    _0x1d6aea = await _0x5a96db(_0x21ddd6, "ll");
  try {
    if (_0x1d6aea.DATA.times > 0) {
      for (var _0x1ba496 = 0; _0x1ba496 < _0x1d6aea.DATA.times; _0x1ba496++) {
        await _0x3538d1();
        await _0xedd975.wait(1 * 1000);
      }
      await _0x293684();
      await _0xedd975.wait(1 * 1000);
      await _0x3538d1();
      await _0xedd975.wait(1 * 1000);
    } else {
      console.log("本月已经砸过金蛋了");
    }
  } catch (_0x4b75fa) {}
}
async function _0x3538d1() {
  let _0x8b0f71 = {
      "url": "https://panservice.mail.wo.cn/wohome/v1/lottery",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/2.2.8 (iPhone; iOS 16.3.1)",
        "Client-Id": "1001000235",
        "Access-Token": token,
        "Host": "panservice.mail.wo.cn",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Accept": "application/json, text/plain, */*"
      },
      "body": "{\"bizKey\": \"newLottery\",\"bizObject\": {\"lottery\": {\"activityId\": \"gAV4huOZ9VWPxSBWKUxZsQ==\",\"type\": 3}}}"
    },
    _0x3fb86c = await _0x1c5418(_0x8b0f71, "ll");
  try {
    _0x3fb86c.result.prizeName === null ? console.log("已经砸完金蛋了") : (qgid = _0x3fb86c.result.prizeName, console.log("砸金蛋获得：" + qgid));
  } catch (_0x342846) {}
}
async function _0x293684() {
  let _0x117ddd = {
    "url": "https://panservice.mail.wo.cn/wohome/open/v1/woFileTransfer",
    "headers": {
      "Connection": "keep-alive",
      "Accept-Encoding": "gzip, deflate, br",
      "Content-Type": "application/json",
      "Origin": "https://panservice.mail.wo.cn",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/2.2.8 (iPhone; iOS 16.3.1)",
      "Client-Id": "1001000235",
      "Access-Token": token,
      "Host": "panservice.mail.wo.cn",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Accept": "application/json, text/plain, */*"
    },
    "body": "{\n  \"clientId\": \"1001000235\",\n  \"activityId\": \"gAV4huOZ9VWPxSBWKUxZsQ==\",\n  \"fileName\": \"一闪一闪亮晶晶\",\n  \"usedCount\": \"1800+\",\n  \"fileSize\": \"2173604300\",\n  \"fileUniqueValue\": \"P6SpjnIyU2Fz1PAv6iVzrj5xCV6fEyUJHEr1RtTbNVObsRzZs6njDQ==\",\n  \"fileDetailLink\": \"mY4D7v2FId7ytLBD3r1AVS+wHvHIg8LhyntboS5TxI251Bd1LYIbE2f+l44xKmtac9HgJ0XA96F9h+3Q6P4SlBAlBKm5XWr+hJ96TBTriuUfkOcos8xP+UmG2YBkQO6CCvmcDku12im+666Vu9rJZMmcp6EMGo4QO/mGCLlsIydnr08ibor48535nSxwgO6g5hiKDb1kkK0=\"\n}"
  };
}
async function _0x113c61() {
  let _0x53dabd = {
      "url": "https://panservice.mail.wo.cn/wohome/v1/lottery",
      "headers": {
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) LianTongYunPan/2.2.8 (iPhone; iOS 16.3.1)",
        "Client-Id": "10086",
        "Access-Token": token,
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      },
      "body": "{\"bizKey\": \"newLottery\",\"bizObject\": {\"lottery\": {\"activityId\": \"6\",\"type\": 3}}}"
    },
    _0x214a75 = await _0x1c5418(_0x53dabd, "ll");
  try {
    if (_0x214a75.result.id === null) {
      console.log("转盘已经抽过奖了");
    } else qgid = _0x214a75.result.prizeName, console.log("转盘获得：" + qgid);
  } catch (_0x5744e3) {}
}
async function _0x32279e() {
  let _0x55ed3f = {
      "url": "https://m.client.10010.com/mobileService/onLine.htm",
      "headers": {
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Host": "m.client.10010.com",
        "User-Agent": "ChinaUnicom.x CFNetwork iOS/16.3.1 unicom{version:iphone_c@11.0400}",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9"
      },
      "body": "deviceModel=iPhone&step=background&token_online=" + _0x8f9bae + "&version=iphone_c%4011.0400"
    },
    _0x329fcb = await _0x1c5418(_0x55ed3f, "获取");
  try {
    t3_token = _0x329fcb.t3_token;
    private_token = _0x329fcb.private_token;
    ecs_token = _0x329fcb.ecs_token;
    num1 = _0x329fcb.list[0].num;
    cityCode = _0x329fcb.list[0].cityCode;
  } catch (_0x51c238) {}
}
async function _0x44df38() {
  let _0x47ace5 = {
      "url": "https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
      }
    },
    _0x274fc9 = await _0x5a96db(_0x47ace5, "获取网络时间");
  try {
    shijian = _0x274fc9.data.t;
  } catch (_0x3faeb8) {}
}
async function _0x20b44c() {
  let _0x4756e3 = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    _0x4fd725 = await _0x5a96db(_0x4756e3, "ll");
  hqsjc = _0x4fd725.ymsjc;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  if (hqsjc > dqsjc) console.log("当前脚本有效期至" + _0x5bbc55(hqsjc));else {
    console.error("脚本参数已过期");
    process.exit();
  }
}
async function _0x48a870(_0xcbf490, _0x47adaf) {
  return new Promise(_0x5896a6 => {
    let _0x138240 = [];
    if (_0xcbf490) {
      if (_0xcbf490.indexOf("@") !== -1) _0xcbf490.split("@").forEach(_0x5adea1 => {
        _0x138240.push(_0x5adea1);
      });else {
        if (_0xcbf490.indexOf("\n") !== -1) _0xcbf490.split("\n").forEach(_0x1ea2be => {
          _0x138240.push(_0x1ea2be);
        });else {
          _0x138240.push(_0xcbf490);
        }
      }
      _0x5896a6(_0x138240);
    } else console.log("\n 【" + _0xedd975.name + "】：未填写变量 " + _0x47adaf);
  });
}
async function _0x17c393(_0x122c3c) {
  if (!_0x122c3c) return;
  if (_0x4a5ebe > 0) {
    if (_0xedd975.isNode()) {
      let _0x253d5f = require("./sendNotify");
      await _0x253d5f.sendNotify(_0xedd975.name, _0x122c3c);
    } else _0xedd975.msg(_0x122c3c);
  } else console.log(_0x122c3c);
}
function _0xe18fd2(_0x4e3802) {
  _0x4e3802 = _0x4e3802 || 32;
  let _0x440f12 = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    _0x177c9b = _0x440f12.length,
    _0x1e1e42 = "";
  for (i = 0; i < _0x4e3802; i++) _0x1e1e42 += _0x440f12.charAt(Math.floor(Math.random() * _0x177c9b));
  return _0x1e1e42;
}
let _0x463996 = "";
function _0x45d5a0(_0x57cef8) {
  _0x463996 = _0x57cef8;
}
function _0x2093bd(_0x271026) {
  if (_0x463996 === _0x271026) {
    console.log("Reached mark " + _0x271026);
  } else console.log("Invalid mark: " + _0x271026);
}
function _0x5bbc55(_0x766002) {
  var _0x15fb99 = new Date(_0x766002 * 1000);
  var _0x464a0f = _0x15fb99.getFullYear();
  var _0x1fbe4d = String(_0x15fb99.getMonth() + 1).padStart(2, "0");
  var _0x2c1b0f = String(_0x15fb99.getDate()).padStart(2, "0");
  var _0x590826 = String(_0x15fb99.getHours()).padStart(2, "0");
  var _0x283300 = String(_0x15fb99.getMinutes()).padStart(2, "0");
  var _0x31b827 = String(_0x15fb99.getSeconds()).padStart(2, "0");
  var _0x127815 = _0x464a0f + "-" + _0x1fbe4d + "-" + _0x2c1b0f + " " + _0x590826 + ":" + _0x283300 + ":" + _0x31b827;
  return _0x127815;
}
function _0x4f2edd(_0x4672a0, _0x389c91) {
  return Math.round(Math.random() * (_0x389c91 - _0x4672a0) + _0x4672a0);
}
function _0x570bf4() {
  const _0x3831ce = new Date(),
    _0x497d3a = _0x3831ce.getHours(),
    _0x1f6f24 = new Date(_0x3831ce.getFullYear(), _0x3831ce.getMonth(), _0x3831ce.getDate(), _0x497d3a + 1, 0, 0, 0);
  return _0x1f6f24.getTime();
}
function _0x4b3b3f() {
  const _0x13d8a1 = new Date(),
    _0x4ab723 = _0x13d8a1.getMinutes(),
    _0x37c609 = new Date(_0x13d8a1.getFullYear(), _0x13d8a1.getMonth(), _0x13d8a1.getDate(), _0x13d8a1.getHours(), _0x4ab723 === 0 ? 1 : _0x4ab723 + 1, 0, 0);
  return _0x37c609.getMinutes() === 0 && _0x37c609.getHours() !== _0x13d8a1.getHours() && _0x37c609.setDate(_0x13d8a1.getDate() + (_0x37c609.getHours() === 0 ? 1 : 0)), _0x37c609.getTime();
}
function _0x34acea() {
  return Math.round(new Date().getTime()).toString();
}
function _0x5039b9() {
  const _0x2775d7 = new Date(),
    _0x27f403 = String(_0x2775d7.getFullYear()).padStart(4, "0"),
    _0x190d12 = String(_0x2775d7.getMonth() + 1).padStart(2, "0"),
    _0x5d100e = String(_0x2775d7.getDate()).padStart(2, "0"),
    _0x59b48c = String(_0x2775d7.getHours()).padStart(2, "0"),
    _0x7214ad = String(_0x2775d7.getMinutes()).padStart(2, "0"),
    _0x4cff95 = String(_0x2775d7.getSeconds()).slice(0, 2);
  return _0x27f403 + _0x190d12 + _0x5d100e + _0x59b48c + _0x7214ad + _0x4cff95;
}
function _0x37bd88() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function _0x3e9062() {
  let _0x252233 = new Date();
  return h = _0x252233.getHours(), h;
}
function _0x5f2123() {
  let _0x175b87 = new Date();
  return m = _0x175b87.getMinutes(), m;
}
function _0x4d65f2(_0x40e94b = 3 * 1000) {
  return new Promise(_0x4417af => {
    let _0x3437f9 = {
      "url": "https://keai.icu/apiwyy/api"
    };
    _0xedd975.get(_0x3437f9, async (_0x41138a, _0x572252, _0xb5c409) => {
      try {
        _0xb5c409 = JSON.parse(_0xb5c409);
        console.log("\n 【网抑云时间】: " + _0xb5c409.content + "  by--" + _0xb5c409.music);
      } catch (_0xb17980) {
        _0xedd975.logErr(_0xb17980, _0x572252);
      } finally {
        _0x4417af();
      }
    }, _0x40e94b);
  });
}
async function _0x5a96db(_0x6ee804, _0x54323a, _0x4b40a3 = 3 * 1000) {
  return new Promise(_0x432b02 => {
    let _0x12e9a1 = _0x6ee804;
    if (!_0x54323a) {
      let _0x39802a = arguments.callee.toString(),
        _0x1a30ba = /function\s*(\w*)/i,
        _0x158d7c = _0x1a30ba.exec(_0x39802a);
      _0x54323a = _0x158d7c[1];
    }
    _0x29ff2d && (console.log("\n 【debug】=============== 这是 " + _0x54323a + " 请求 url ==============="), console.log(_0x12e9a1));
    _0xedd975.get(_0x12e9a1, async (_0x2f4596, _0x368c8f, _0x55b12b) => {
      try {
        _0x29ff2d && (console.log("\n\n 【debug】===============这是 " + _0x54323a + " 返回data=============="), console.log(_0x55b12b), console.log("======"), console.log(JSON.parse(_0x55b12b)));
        let _0x1805b9 = JSON.parse(_0x55b12b);
        _0x432b02(_0x1805b9);
      } catch (_0x42556a) {
        console.log(_0x2f4596, _0x368c8f);
        console.log("\n " + _0x54323a + " 失败了!请稍后尝试!!");
        _0x19994a += "\n " + _0x54323a + " 失败了!请稍后尝试!!";
      } finally {
        _0x432b02();
      }
    }, _0x4b40a3);
  });
}
async function _0x1c5418(_0x1e05c4, _0x345ef9, _0x2225df = 2 * 100) {
  return new Promise(_0xca7703 => {
    let _0x460229 = _0x1e05c4;
    if (!_0x345ef9) {
      let _0x55e317 = arguments.callee.toString(),
        _0x555a9f = /function\s*(\w*)/i,
        _0x1ef15a = _0x555a9f.exec(_0x55e317);
      _0x345ef9 = _0x1ef15a[1];
    }
    _0x29ff2d && (console.log("\n 【debug】=============== 这是 " + _0x345ef9 + " 请求 url ==============="), console.log(_0x460229));
    _0xedd975.post(_0x460229, async (_0x33dbe1, _0x192bda, _0x22fd6d) => {
      try {
        if (_0x29ff2d) {
          console.log("\n\n 【debug】===============这是 " + _0x345ef9 + " 返回data==============");
          console.log(_0x22fd6d);
          console.log("======");
          console.log(JSON.parse(_0x22fd6d));
        }
        let _0x4f87ff = JSON.parse(_0x22fd6d);
        _0xca7703(_0x4f87ff);
      } catch (_0x483aa5) {
        console.log("\n " + _0x345ef9 + " 失败了!请稍后尝试!!");
        _0x19994a += "\n " + _0x345ef9 + " 失败了!请稍后尝试!!";
      } finally {
        _0xca7703();
      }
    }, _0x2225df);
  });
}
function _0x3a5f33(..._0x3d3523) {
  _0x29ff2d && console.log(..._0x3d3523);
}
function _0x670b3f(_0x2d618f) {
  function _0x360ec1(_0x1927b8, _0x3a3612) {
    return _0x1927b8 << _0x3a3612 | _0x1927b8 >>> 32 - _0x3a3612;
  }
  function _0x3df28e(_0xda348c, _0x325331) {
    var _0x4bfdce, _0x3c4c21, _0x50e437, _0x52f9e3, _0x48552e;
    return _0x50e437 = 2147483648 & _0xda348c, _0x52f9e3 = 2147483648 & _0x325331, _0x4bfdce = 1073741824 & _0xda348c, _0x3c4c21 = 1073741824 & _0x325331, _0x48552e = (1073741823 & _0xda348c) + (1073741823 & _0x325331), _0x4bfdce & _0x3c4c21 ? 2147483648 ^ _0x48552e ^ _0x50e437 ^ _0x52f9e3 : _0x4bfdce | _0x3c4c21 ? 1073741824 & _0x48552e ? 3221225472 ^ _0x48552e ^ _0x50e437 ^ _0x52f9e3 : 1073741824 ^ _0x48552e ^ _0x50e437 ^ _0x52f9e3 : _0x48552e ^ _0x50e437 ^ _0x52f9e3;
  }
  function _0x57ead3(_0x447d8e, _0x429053, _0x30f3f2) {
    return _0x447d8e & _0x429053 | ~_0x447d8e & _0x30f3f2;
  }
  function _0x22f34e(_0x55da65, _0x399f2b, _0x12c0de) {
    return _0x55da65 & _0x12c0de | _0x399f2b & ~_0x12c0de;
  }
  function _0x324f7d(_0x48d1a1, _0x5498af, _0x119dfe) {
    return _0x48d1a1 ^ _0x5498af ^ _0x119dfe;
  }
  function _0x299dfb(_0x1b6883, _0x125c32, _0x504632) {
    return _0x125c32 ^ (_0x1b6883 | ~_0x504632);
  }
  function _0x4d7a33(_0x456403, _0x53c842, _0x134fce, _0x3de742, _0x4ba460, _0x1640e6, _0x5dca2b) {
    return _0x456403 = _0x3df28e(_0x456403, _0x3df28e(_0x3df28e(_0x57ead3(_0x53c842, _0x134fce, _0x3de742), _0x4ba460), _0x5dca2b)), _0x3df28e(_0x360ec1(_0x456403, _0x1640e6), _0x53c842);
  }
  function _0x1c62a5(_0x1e38f4, _0x5461ef, _0x4244a7, _0x49c34c, _0x9086ba, _0x444f8a, _0x14e90c) {
    return _0x1e38f4 = _0x3df28e(_0x1e38f4, _0x3df28e(_0x3df28e(_0x22f34e(_0x5461ef, _0x4244a7, _0x49c34c), _0x9086ba), _0x14e90c)), _0x3df28e(_0x360ec1(_0x1e38f4, _0x444f8a), _0x5461ef);
  }
  function _0x28555a(_0x2b20fe, _0x487be0, _0x8f0e4c, _0x2e5ccb, _0x22ef8f, _0x31f95f, _0x1bfcd0) {
    return _0x2b20fe = _0x3df28e(_0x2b20fe, _0x3df28e(_0x3df28e(_0x324f7d(_0x487be0, _0x8f0e4c, _0x2e5ccb), _0x22ef8f), _0x1bfcd0)), _0x3df28e(_0x360ec1(_0x2b20fe, _0x31f95f), _0x487be0);
  }
  function _0x4434ed(_0x5b13c5, _0x2e791d, _0x37b106, _0x535ed0, _0x472afe, _0x283855, _0xff8a4a) {
    return _0x5b13c5 = _0x3df28e(_0x5b13c5, _0x3df28e(_0x3df28e(_0x299dfb(_0x2e791d, _0x37b106, _0x535ed0), _0x472afe), _0xff8a4a)), _0x3df28e(_0x360ec1(_0x5b13c5, _0x283855), _0x2e791d);
  }
  function _0x29abbc(_0x913e6e) {
    for (var _0x35d22c, _0x5dced0 = _0x913e6e.length, _0x330742 = _0x5dced0 + 8, _0x1406f7 = (_0x330742 - _0x330742 % 64) / 64, _0x22ac07 = 16 * (_0x1406f7 + 1), _0x26ec7b = new Array(_0x22ac07 - 1), _0x4da72e = 0, _0x35c1a5 = 0; _0x5dced0 > _0x35c1a5;) _0x35d22c = (_0x35c1a5 - _0x35c1a5 % 4) / 4, _0x4da72e = _0x35c1a5 % 4 * 8, _0x26ec7b[_0x35d22c] = _0x26ec7b[_0x35d22c] | _0x913e6e.charCodeAt(_0x35c1a5) << _0x4da72e, _0x35c1a5++;
    return _0x35d22c = (_0x35c1a5 - _0x35c1a5 % 4) / 4, _0x4da72e = _0x35c1a5 % 4 * 8, _0x26ec7b[_0x35d22c] = _0x26ec7b[_0x35d22c] | 128 << _0x4da72e, _0x26ec7b[_0x22ac07 - 2] = _0x5dced0 << 3, _0x26ec7b[_0x22ac07 - 1] = _0x5dced0 >>> 29, _0x26ec7b;
  }
  function _0x1c9c34(_0x311fa0) {
    var _0x36b658,
      _0x4f7bfa,
      _0x5119d8 = "",
      _0x29609f = "";
    for (_0x4f7bfa = 0; 3 >= _0x4f7bfa; _0x4f7bfa++) _0x36b658 = _0x311fa0 >>> 8 * _0x4f7bfa & 255, _0x29609f = "0" + _0x36b658.toString(16), _0x5119d8 += _0x29609f.substr(_0x29609f.length - 2, 2);
    return _0x5119d8;
  }
  function _0x26691b(_0x327d55) {
    _0x327d55 = _0x327d55.replace(/\r\n/g, "\n");
    for (var _0x469547 = "", _0x3846ba = 0; _0x3846ba < _0x327d55.length; _0x3846ba++) {
      var _0x59b64a = _0x327d55.charCodeAt(_0x3846ba);
      128 > _0x59b64a ? _0x469547 += String.fromCharCode(_0x59b64a) : _0x59b64a > 127 && 2048 > _0x59b64a ? (_0x469547 += String.fromCharCode(_0x59b64a >> 6 | 192), _0x469547 += String.fromCharCode(63 & _0x59b64a | 128)) : (_0x469547 += String.fromCharCode(_0x59b64a >> 12 | 224), _0x469547 += String.fromCharCode(_0x59b64a >> 6 & 63 | 128), _0x469547 += String.fromCharCode(63 & _0x59b64a | 128));
    }
    return _0x469547;
  }
  var _0x500211,
    _0x5ecb83,
    _0x33e45c,
    _0x2b2482,
    _0x289e15,
    _0x525136,
    _0x18a75d,
    _0x196d58,
    _0x1ec7b3,
    _0x4d8014 = [],
    _0xaddbf9 = 7,
    _0x4bfc50 = 12,
    _0x4be9e1 = 17,
    _0x1bcbdb = 22,
    _0x33d23b = 5,
    _0x29d8f5 = 9,
    _0x17919a = 14,
    _0x21fb4c = 20,
    _0x51a0f5 = 4,
    _0x32d817 = 11,
    _0xea3886 = 16,
    _0x21f3ed = 23,
    _0x32a3b4 = 6,
    _0x448e3b = 10,
    _0xc3a7c5 = 15,
    _0x425ebc = 21;
  for (_0x2d618f = _0x26691b(_0x2d618f), _0x4d8014 = _0x29abbc(_0x2d618f), _0x525136 = 1732584193, _0x18a75d = 4023233417, _0x196d58 = 2562383102, _0x1ec7b3 = 271733878, _0x500211 = 0; _0x500211 < _0x4d8014.length; _0x500211 += 16) _0x5ecb83 = _0x525136, _0x33e45c = _0x18a75d, _0x2b2482 = _0x196d58, _0x289e15 = _0x1ec7b3, _0x525136 = _0x4d7a33(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 0], _0xaddbf9, 3614090360), _0x1ec7b3 = _0x4d7a33(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 1], _0x4bfc50, 3905402710), _0x196d58 = _0x4d7a33(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 2], _0x4be9e1, 606105819), _0x18a75d = _0x4d7a33(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 3], _0x1bcbdb, 3250441966), _0x525136 = _0x4d7a33(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 4], _0xaddbf9, 4118548399), _0x1ec7b3 = _0x4d7a33(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 5], _0x4bfc50, 1200080426), _0x196d58 = _0x4d7a33(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 6], _0x4be9e1, 2821735955), _0x18a75d = _0x4d7a33(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 7], _0x1bcbdb, 4249261313), _0x525136 = _0x4d7a33(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 8], _0xaddbf9, 1770035416), _0x1ec7b3 = _0x4d7a33(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 9], _0x4bfc50, 2336552879), _0x196d58 = _0x4d7a33(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 10], _0x4be9e1, 4294925233), _0x18a75d = _0x4d7a33(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 11], _0x1bcbdb, 2304563134), _0x525136 = _0x4d7a33(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 12], _0xaddbf9, 1804603682), _0x1ec7b3 = _0x4d7a33(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 13], _0x4bfc50, 4254626195), _0x196d58 = _0x4d7a33(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 14], _0x4be9e1, 2792965006), _0x18a75d = _0x4d7a33(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 15], _0x1bcbdb, 1236535329), _0x525136 = _0x1c62a5(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 1], _0x33d23b, 4129170786), _0x1ec7b3 = _0x1c62a5(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 6], _0x29d8f5, 3225465664), _0x196d58 = _0x1c62a5(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 11], _0x17919a, 643717713), _0x18a75d = _0x1c62a5(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 0], _0x21fb4c, 3921069994), _0x525136 = _0x1c62a5(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 5], _0x33d23b, 3593408605), _0x1ec7b3 = _0x1c62a5(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 10], _0x29d8f5, 38016083), _0x196d58 = _0x1c62a5(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 15], _0x17919a, 3634488961), _0x18a75d = _0x1c62a5(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 4], _0x21fb4c, 3889429448), _0x525136 = _0x1c62a5(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 9], _0x33d23b, 568446438), _0x1ec7b3 = _0x1c62a5(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 14], _0x29d8f5, 3275163606), _0x196d58 = _0x1c62a5(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 3], _0x17919a, 4107603335), _0x18a75d = _0x1c62a5(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 8], _0x21fb4c, 1163531501), _0x525136 = _0x1c62a5(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 13], _0x33d23b, 2850285829), _0x1ec7b3 = _0x1c62a5(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 2], _0x29d8f5, 4243563512), _0x196d58 = _0x1c62a5(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 7], _0x17919a, 1735328473), _0x18a75d = _0x1c62a5(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 12], _0x21fb4c, 2368359562), _0x525136 = _0x28555a(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 5], _0x51a0f5, 4294588738), _0x1ec7b3 = _0x28555a(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 8], _0x32d817, 2272392833), _0x196d58 = _0x28555a(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 11], _0xea3886, 1839030562), _0x18a75d = _0x28555a(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 14], _0x21f3ed, 4259657740), _0x525136 = _0x28555a(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 1], _0x51a0f5, 2763975236), _0x1ec7b3 = _0x28555a(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 4], _0x32d817, 1272893353), _0x196d58 = _0x28555a(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 7], _0xea3886, 4139469664), _0x18a75d = _0x28555a(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 10], _0x21f3ed, 3200236656), _0x525136 = _0x28555a(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 13], _0x51a0f5, 681279174), _0x1ec7b3 = _0x28555a(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 0], _0x32d817, 3936430074), _0x196d58 = _0x28555a(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 3], _0xea3886, 3572445317), _0x18a75d = _0x28555a(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 6], _0x21f3ed, 76029189), _0x525136 = _0x28555a(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 9], _0x51a0f5, 3654602809), _0x1ec7b3 = _0x28555a(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 12], _0x32d817, 3873151461), _0x196d58 = _0x28555a(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 15], _0xea3886, 530742520), _0x18a75d = _0x28555a(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 2], _0x21f3ed, 3299628645), _0x525136 = _0x4434ed(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 0], _0x32a3b4, 4096336452), _0x1ec7b3 = _0x4434ed(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 7], _0x448e3b, 1126891415), _0x196d58 = _0x4434ed(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 14], _0xc3a7c5, 2878612391), _0x18a75d = _0x4434ed(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 5], _0x425ebc, 4237533241), _0x525136 = _0x4434ed(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 12], _0x32a3b4, 1700485571), _0x1ec7b3 = _0x4434ed(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 3], _0x448e3b, 2399980690), _0x196d58 = _0x4434ed(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 10], _0xc3a7c5, 4293915773), _0x18a75d = _0x4434ed(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 1], _0x425ebc, 2240044497), _0x525136 = _0x4434ed(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 8], _0x32a3b4, 1873313359), _0x1ec7b3 = _0x4434ed(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 15], _0x448e3b, 4264355552), _0x196d58 = _0x4434ed(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 6], _0xc3a7c5, 2734768916), _0x18a75d = _0x4434ed(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 13], _0x425ebc, 1309151649), _0x525136 = _0x4434ed(_0x525136, _0x18a75d, _0x196d58, _0x1ec7b3, _0x4d8014[_0x500211 + 4], _0x32a3b4, 4149444226), _0x1ec7b3 = _0x4434ed(_0x1ec7b3, _0x525136, _0x18a75d, _0x196d58, _0x4d8014[_0x500211 + 11], _0x448e3b, 3174756917), _0x196d58 = _0x4434ed(_0x196d58, _0x1ec7b3, _0x525136, _0x18a75d, _0x4d8014[_0x500211 + 2], _0xc3a7c5, 718787259), _0x18a75d = _0x4434ed(_0x18a75d, _0x196d58, _0x1ec7b3, _0x525136, _0x4d8014[_0x500211 + 9], _0x425ebc, 3951481745), _0x525136 = _0x3df28e(_0x525136, _0x5ecb83), _0x18a75d = _0x3df28e(_0x18a75d, _0x33e45c), _0x196d58 = _0x3df28e(_0x196d58, _0x2b2482), _0x1ec7b3 = _0x3df28e(_0x1ec7b3, _0x289e15);
  var _0x421226 = _0x1c9c34(_0x525136) + _0x1c9c34(_0x18a75d) + _0x1c9c34(_0x196d58) + _0x1c9c34(_0x1ec7b3);
  return _0x421226.toLowerCase();
}
function _0xcb0fd8(_0x47cad3, _0x1c7447) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x39da6f {
    constructor(_0x21a648) {
      this.env = _0x21a648;
    }
    ["send"](_0x480a99, _0x1f0f12 = "GET") {
      _0x480a99 = "string" == typeof _0x480a99 ? {
        "url": _0x480a99
      } : _0x480a99;
      let _0x352556 = this.get;
      return "POST" === _0x1f0f12 && (_0x352556 = this.post), new Promise((_0x3927d5, _0x144ba5) => {
        _0x352556.call(this, _0x480a99, (_0x4c36e4, _0x1a6128, _0xef6bf7) => {
          _0x4c36e4 ? _0x144ba5(_0x4c36e4) : _0x3927d5(_0x1a6128);
        });
      });
    }
    ["get"](_0x292a3d) {
      return this.send.call(this.env, _0x292a3d);
    }
    ["post"](_0x4bbd8c) {
      return this.send.call(this.env, _0x4bbd8c, "POST");
    }
  }
  return new class {
    constructor(_0x531045, _0x4bc51c) {
      this.name = _0x531045;
      this.http = new _0x39da6f(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x4bc51c);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x581188, _0x206f8f = null) {
      try {
        return JSON.parse(_0x581188);
      } catch {
        return _0x206f8f;
      }
    }
    ["toStr"](_0x82d83c, _0x47b01b = null) {
      try {
        return JSON.stringify(_0x82d83c);
      } catch {
        return _0x47b01b;
      }
    }
    ["getjson"](_0x503ad2, _0x400993) {
      let _0x1a86b1 = _0x400993;
      const _0x22c3e0 = this.getdata(_0x503ad2);
      if (_0x22c3e0) try {
        _0x1a86b1 = JSON.parse(this.getdata(_0x503ad2));
      } catch {}
      return _0x1a86b1;
    }
    ["setjson"](_0x445f36, _0x3e8fd2) {
      try {
        return this.setdata(JSON.stringify(_0x445f36), _0x3e8fd2);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x45844b) {
      return new Promise(_0x1470ce => {
        this.get({
          "url": _0x45844b
        }, (_0x23e370, _0x3100ad, _0x35ff1a) => _0x1470ce(_0x35ff1a));
      });
    }
    ["runScript"](_0x42e340, _0x6f4e7a) {
      return new Promise(_0x44a7e4 => {
        let _0x5f0bd7 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x5f0bd7 = _0x5f0bd7 ? _0x5f0bd7.replace(/\n/g, "").trim() : _0x5f0bd7;
        let _0x261b0c = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x261b0c = _0x261b0c ? 1 * _0x261b0c : 20;
        _0x261b0c = _0x6f4e7a && _0x6f4e7a.timeout ? _0x6f4e7a.timeout : _0x261b0c;
        const [_0xae7ad7, _0x5e50ba] = _0x5f0bd7.split("@"),
          _0x578b8c = {
            "url": "http://" + _0x5e50ba + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x42e340,
              "mock_type": "cron",
              "timeout": _0x261b0c
            },
            "headers": {
              "Accept": "*/*"
            }
          };
        this.post(_0x578b8c, (_0x55dee3, _0x12b5bf, _0x2e6325) => _0x44a7e4(_0x2e6325));
      }).catch(_0x4c203f => this.logErr(_0x4c203f));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4571f6 = this.path.resolve(this.dataFile),
          _0x2d3885 = this.path.resolve(process.cwd(), this.dataFile),
          _0x20d3ce = this.fs.existsSync(_0x4571f6),
          _0x364dd5 = !_0x20d3ce && this.fs.existsSync(_0x2d3885);
        if (!_0x20d3ce && !_0x364dd5) return {};
        {
          const _0xf16c9 = _0x20d3ce ? _0x4571f6 : _0x2d3885;
          try {
            return JSON.parse(this.fs.readFileSync(_0xf16c9));
          } catch (_0x5c5db9) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5d665f = this.path.resolve(this.dataFile),
          _0x2694d3 = this.path.resolve(process.cwd(), this.dataFile),
          _0x56c065 = this.fs.existsSync(_0x5d665f),
          _0x112572 = !_0x56c065 && this.fs.existsSync(_0x2694d3),
          _0x1a0ced = JSON.stringify(this.data);
        _0x56c065 ? this.fs.writeFileSync(_0x5d665f, _0x1a0ced) : _0x112572 ? this.fs.writeFileSync(_0x2694d3, _0x1a0ced) : this.fs.writeFileSync(_0x5d665f, _0x1a0ced);
      }
    }
    ["lodash_get"](_0x3ea51a, _0x32caca, _0x5da953) {
      const _0x3e17db = _0x32caca.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x2165ff = _0x3ea51a;
      for (const _0x53b6bf of _0x3e17db) if (_0x2165ff = Object(_0x2165ff)[_0x53b6bf], void 0 === _0x2165ff) return _0x5da953;
      return _0x2165ff;
    }
    ["lodash_set"](_0x5616fa, _0xb5d824, _0x3f283b) {
      return Object(_0x5616fa) !== _0x5616fa ? _0x5616fa : (Array.isArray(_0xb5d824) || (_0xb5d824 = _0xb5d824.toString().match(/[^.[\]]+/g) || []), _0xb5d824.slice(0, -1).reduce((_0x227a14, _0x401787, _0x24f1b4) => Object(_0x227a14[_0x401787]) === _0x227a14[_0x401787] ? _0x227a14[_0x401787] : _0x227a14[_0x401787] = Math.abs(_0xb5d824[_0x24f1b4 + 1]) >> 0 == +_0xb5d824[_0x24f1b4 + 1] ? [] : {}, _0x5616fa)[_0xb5d824[_0xb5d824.length - 1]] = _0x3f283b, _0x5616fa);
    }
    ["getdata"](_0x1e76f8) {
      let _0x2ad630 = this.getval(_0x1e76f8);
      if (/^@/.test(_0x1e76f8)) {
        const [, _0x1a5159, _0x29cd4d] = /^@(.*?)\.(.*?)$/.exec(_0x1e76f8),
          _0x2ed8db = _0x1a5159 ? this.getval(_0x1a5159) : "";
        if (_0x2ed8db) try {
          const _0x41cdb9 = JSON.parse(_0x2ed8db);
          _0x2ad630 = _0x41cdb9 ? this.lodash_get(_0x41cdb9, _0x29cd4d, "") : _0x2ad630;
        } catch (_0x1ee4c8) {
          _0x2ad630 = "";
        }
      }
      return _0x2ad630;
    }
    ["setdata"](_0x5b0a07, _0x537490) {
      let _0x5bbcd0 = false;
      if (/^@/.test(_0x537490)) {
        const [, _0x24c102, _0x46d8bf] = /^@(.*?)\.(.*?)$/.exec(_0x537490),
          _0x4d8050 = this.getval(_0x24c102),
          _0xd0b511 = _0x24c102 ? "null" === _0x4d8050 ? null : _0x4d8050 || "{}" : "{}";
        try {
          const _0x26fecd = JSON.parse(_0xd0b511);
          this.lodash_set(_0x26fecd, _0x46d8bf, _0x5b0a07);
          _0x5bbcd0 = this.setval(JSON.stringify(_0x26fecd), _0x24c102);
        } catch (_0x5b48d3) {
          const _0x514347 = {};
          this.lodash_set(_0x514347, _0x46d8bf, _0x5b0a07);
          _0x5bbcd0 = this.setval(JSON.stringify(_0x514347), _0x24c102);
        }
      } else _0x5bbcd0 = this.setval(_0x5b0a07, _0x537490);
      return _0x5bbcd0;
    }
    ["getval"](_0x155928) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x155928) : this.isQuanX() ? $prefs.valueForKey(_0x155928) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x155928]) : this.data && this.data[_0x155928] || null;
    }
    ["setval"](_0x379761, _0x19b1f1) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x379761, _0x19b1f1) : this.isQuanX() ? $prefs.setValueForKey(_0x379761, _0x19b1f1) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x19b1f1] = _0x379761, this.writedata(), !0) : this.data && this.data[_0x19b1f1] || null;
    }
    ["initGotEnv"](_0x11bad3) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x11bad3 && (_0x11bad3.headers = _0x11bad3.headers ? _0x11bad3.headers : {}, void 0 === _0x11bad3.headers.Cookie && void 0 === _0x11bad3.cookieJar && (_0x11bad3.cookieJar = this.ckjar));
    }
    ["get"](_0x31f395, _0x21f951 = () => {}) {
      _0x31f395.headers && (delete _0x31f395.headers["Content-Type"], delete _0x31f395.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x31f395.headers = _0x31f395.headers || {}, Object.assign(_0x31f395.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x31f395, (_0x2d4e69, _0x36ab15, _0x13fddf) => {
        !_0x2d4e69 && _0x36ab15 && (_0x36ab15.body = _0x13fddf, _0x36ab15.statusCode = _0x36ab15.status);
        _0x21f951(_0x2d4e69, _0x36ab15, _0x13fddf);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x31f395.opts = _0x31f395.opts || {}, Object.assign(_0x31f395.opts, {
        "hints": !1
      })), $task.fetch(_0x31f395).then(_0x1c9f44 => {
        const {
          statusCode: _0x585d38,
          statusCode: _0x351f2d,
          headers: _0x125948,
          body: _0x3472a8
        } = _0x1c9f44;
        _0x21f951(null, {
          "status": _0x585d38,
          "statusCode": _0x351f2d,
          "headers": _0x125948,
          "body": _0x3472a8
        }, _0x3472a8);
      }, _0x5222fc => _0x21f951(_0x5222fc))) : this.isNode() && (this.initGotEnv(_0x31f395), this.got(_0x31f395).on("redirect", (_0xbd45e0, _0x1f7c16) => {
        try {
          if (_0xbd45e0.headers["set-cookie"]) {
            const _0x331049 = _0xbd45e0.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x331049 && this.ckjar.setCookieSync(_0x331049, null);
            _0x1f7c16.cookieJar = this.ckjar;
          }
        } catch (_0x7b5c47) {
          this.logErr(_0x7b5c47);
        }
      }).then(_0x5afa8a => {
        const {
          statusCode: _0x4493ea,
          statusCode: _0x5add3b,
          headers: _0x4c079f,
          body: _0x5e4494
        } = _0x5afa8a;
        _0x21f951(null, {
          "status": _0x4493ea,
          "statusCode": _0x5add3b,
          "headers": _0x4c079f,
          "body": _0x5e4494
        }, _0x5e4494);
      }, _0xbdb87f => {
        const {
          message: _0x22f023,
          response: _0x10453d
        } = _0xbdb87f;
        _0x21f951(_0x22f023, _0x10453d, _0x10453d && _0x10453d.body);
      }));
    }
    ["post"](_0x554b56, _0x3f6592 = () => {}) {
      if (_0x554b56.body && _0x554b56.headers && !_0x554b56.headers["Content-Type"] && (_0x554b56.headers["Content-Type"] = "application/json;charset=utf-8"), _0x554b56.headers && delete _0x554b56.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x554b56.headers = _0x554b56.headers || {}, Object.assign(_0x554b56.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x554b56, (_0x437f00, _0x171e15, _0x548158) => {
        !_0x437f00 && _0x171e15 && (_0x171e15.body = _0x548158, _0x171e15.statusCode = _0x171e15.status);
        _0x3f6592(_0x437f00, _0x171e15, _0x548158);
      });else {
        if (this.isQuanX()) _0x554b56.method = "POST", this.isNeedRewrite && (_0x554b56.opts = _0x554b56.opts || {}, Object.assign(_0x554b56.opts, {
          "hints": !1
        })), $task.fetch(_0x554b56).then(_0xb11eaa => {
          const {
            statusCode: _0x34fa77,
            statusCode: _0x69d3c8,
            headers: _0x279e0a,
            body: _0x30fae0
          } = _0xb11eaa;
          _0x3f6592(null, {
            "status": _0x34fa77,
            "statusCode": _0x69d3c8,
            "headers": _0x279e0a,
            "body": _0x30fae0
          }, _0x30fae0);
        }, _0x366871 => _0x3f6592(_0x366871));else {
          if (this.isNode()) {
            this.initGotEnv(_0x554b56);
            const {
              url: _0x1a32c9,
              ..._0x12fbc1
            } = _0x554b56;
            this.got.post(_0x1a32c9, _0x12fbc1).then(_0x281071 => {
              const {
                statusCode: _0x1e91e7,
                statusCode: _0xec5745,
                headers: _0x12027d,
                body: _0x5c6468
              } = _0x281071;
              _0x3f6592(null, {
                "status": _0x1e91e7,
                "statusCode": _0xec5745,
                "headers": _0x12027d,
                "body": _0x5c6468
              }, _0x5c6468);
            }, _0x26ebdc => {
              const {
                message: _0x1b4a45,
                response: _0x533c77
              } = _0x26ebdc;
              _0x3f6592(_0x1b4a45, _0x533c77, _0x533c77 && _0x533c77.body);
            });
          }
        }
      }
    }
    ["time"](_0x4d988e, _0x514287 = null) {
      const _0x4e4039 = _0x514287 ? new Date(_0x514287) : new Date();
      let _0x2d0365 = {
        "M+": _0x4e4039.getMonth() + 1,
        "d+": _0x4e4039.getDate(),
        "H+": _0x4e4039.getHours(),
        "m+": _0x4e4039.getMinutes(),
        "s+": _0x4e4039.getSeconds(),
        "q+": Math.floor((_0x4e4039.getMonth() + 3) / 3),
        "S": _0x4e4039.getMilliseconds()
      };
      /(y+)/.test(_0x4d988e) && (_0x4d988e = _0x4d988e.replace(RegExp.$1, (_0x4e4039.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x51657d in _0x2d0365) new RegExp("(" + _0x51657d + ")").test(_0x4d988e) && (_0x4d988e = _0x4d988e.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2d0365[_0x51657d] : ("00" + _0x2d0365[_0x51657d]).substr(("" + _0x2d0365[_0x51657d]).length)));
      return _0x4d988e;
    }
    ["msg"](_0x15ada5 = _0x47cad3, _0x4672fa = "", _0x4c5b64 = "", _0x29f08d) {
      const _0x7378c8 = _0xd0b0aa => {
        if (!_0xd0b0aa) return _0xd0b0aa;
        if ("string" == typeof _0xd0b0aa) return this.isLoon() ? _0xd0b0aa : this.isQuanX() ? {
          "open-url": _0xd0b0aa
        } : this.isSurge() ? {
          "url": _0xd0b0aa
        } : void 0;
        if ("object" == typeof _0xd0b0aa) {
          if (this.isLoon()) {
            let _0x50bb45 = _0xd0b0aa.openUrl || _0xd0b0aa.url || _0xd0b0aa["open-url"],
              _0x392cf1 = _0xd0b0aa.mediaUrl || _0xd0b0aa["media-url"];
            return {
              "openUrl": _0x50bb45,
              "mediaUrl": _0x392cf1
            };
          }
          if (this.isQuanX()) {
            let _0x4d4d9e = _0xd0b0aa["open-url"] || _0xd0b0aa.url || _0xd0b0aa.openUrl,
              _0x144e13 = _0xd0b0aa["media-url"] || _0xd0b0aa.mediaUrl;
            return {
              "open-url": _0x4d4d9e,
              "media-url": _0x144e13
            };
          }
          if (this.isSurge()) {
            let _0x233bf6 = _0xd0b0aa.url || _0xd0b0aa.openUrl || _0xd0b0aa["open-url"];
            return {
              "url": _0x233bf6
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x15ada5, _0x4672fa, _0x4c5b64, _0x7378c8(_0x29f08d)) : this.isQuanX() && $notify(_0x15ada5, _0x4672fa, _0x4c5b64, _0x7378c8(_0x29f08d))), !this.isMuteLog) {
        let _0x4484da = ["", "==============📣系统通知📣=============="];
        _0x4484da.push(_0x15ada5);
        _0x4672fa && _0x4484da.push(_0x4672fa);
        _0x4c5b64 && _0x4484da.push(_0x4c5b64);
        console.log(_0x4484da.join("\n"));
        this.logs = this.logs.concat(_0x4484da);
      }
    }
    ["log"](..._0x3aaac8) {
      _0x3aaac8.length > 0 && (this.logs = [...this.logs, ..._0x3aaac8]);
      console.log(_0x3aaac8.join(this.logSeparator));
    }
    ["logErr"](_0xf7314a, _0x2b0b36) {
      const _0x57579b = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x57579b ? this.log("", "❗️" + this.name + ", 错误!", _0xf7314a.stack) : this.log("", "❗️" + this.name + ", 错误!", _0xf7314a);
    }
    ["wait"](_0x59946c) {
      return new Promise(_0x47672a => setTimeout(_0x47672a, _0x59946c));
    }
    ["done"](_0x54f097 = {}) {
      const _0x39d523 = new Date().getTime(),
        _0x5c1c35 = (_0x39d523 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x5c1c35 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x54f097);
    }
  }(_0x47cad3, _0x1c7447);
}