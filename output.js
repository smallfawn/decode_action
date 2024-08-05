//Mon Aug 05 2024 09:12:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x167f87 = new _0x22eb2a("联通云盘抽奖"),
  _0x1a1711 = 1,
  _0x60cff9 = 0,
  {
    v4: _0x497e42
  } = require("uuid"),
  _0xca9034 = require("crypto"),
  _0x1e97bc = _0x497e42();
let _0x5c3e0b = process.env.chinaUnicomCookie,
  _0x32251d = "",
  _0x3bc1c7 = "";
ckArr = _0x5c3e0b.split("&");
_0x22544("【debug】 这是你的账号数组:\n " + ckArr);
!(async () => {
  ckArr = _0x5c3e0b.split("&");
  await _0x31dcba();
  for (let _0x1a09dd = 0; _0x1a09dd < ckArr.length; _0x1a09dd++) {
    let _0x37c805 = _0x1a09dd + 1;
    console.log("------------- 开始【第 " + _0x37c805 + " 个账号】-------------");
    _0x3bc1c7 = ckArr[_0x1a09dd].split("&");
    _0x22544("【debug】 这是你第 " + _0x37c805 + " 账号信息:\n " + _0x3bc1c7);
    await _0x22654c();
    await _0x167f87.wait(1 * 2000);
    const _0x237aed = _0x463770(),
      _0x2ceac8 = require("axios");
    let _0xe9e94 = {
      "method": "GET",
      "url": "https://m.client.10010.com/mobileService/openPlatform/openPlatLineNew.htm?appName=shouting&clientid=1001000003&to_url=https://panservice.mail.wo.cn/h5/activitymobile/turn-template?activityId%3D6",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0400}",
        "Cookie": "PvSessionId=" + _0x237aed + "" + _0x1e97bc + ";c_mobile=" + num1 + "; c_version=iphone_c@11.0400; city=036|" + cityCode + "|90063345|-99;devicedId=" + _0x1e97bc + "; ecs_token=" + ecs_token + ";t3_token=" + t3_token + ""
      },
      "maxRedirects": 0
    };
    await _0x2ceac8.request(_0xe9e94).catch(_0x2bdf88 => {
      wenb = _0x2bdf88.request.res.rawHeaders[13];
      ticket1 = wenb.match(/ticket=([^&]+)/);
      ticket = ticket1[1];
    });
    console.log("" + num1 + "抽奖");
    await _0x167f87.wait(1 * 1000);
    req = Math.floor(89999 * Math.random()) + 100000;
    sjc13 = Math.round(new Date().getTime()).toString();
    const _0x44a29d = "HandheldHallAutoLogin" + sjc13 + "" + req + "100002",
      _0x3f2615 = _0xca9034.createHash("md5");
    _0x3f2615.update(_0x44a29d);
    md5Hash = _0x3f2615.digest("hex");
    await _0x343470();
    await _0x364d39();
  }
  await _0x18d33c(_0x32251d);
})().catch(_0x459dc4 => _0x167f87.logErr(_0x459dc4)).finally(() => _0x167f87.done());
async function _0x343470() {
  let _0x2fb0f9 = {
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
    _0x149450 = await _0x100f78(_0x2fb0f9, "token");
  token = _0x149450.RSP.DATA.token;
}
async function _0x364d39() {
  let _0x3767c2 = {
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
    _0x36bf22 = await _0x100f78(_0x3767c2, "ll");
  try {
    _0x36bf22.result.prizeName === null ? console.log("已经抽过奖了") : (qgid = _0x36bf22.result.prizeName, console.log("本次运行获得：" + qgid));
  } catch (_0x46f8c3) {}
}
async function _0x22654c() {
  let _0x1e5468 = {
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
      "body": "deviceModel=iPhone&step=background&token_online=" + _0x3bc1c7 + "&version=iphone_c%4011.0400"
    },
    _0xe360a9 = await _0x100f78(_0x1e5468, "获取");
  t3_token = _0xe360a9.t3_token;
  private_token = _0xe360a9.private_token;
  ecs_token = _0xe360a9.ecs_token;
  num1 = _0xe360a9.list[0].num;
  cityCode = _0xe360a9.list[0].cityCode;
}
async function _0x4da001() {
  let _0x221ad3 = {
      "url": "https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko)"
      }
    },
    _0x3935f7 = await _0x2ef572(_0x221ad3, "获取网络时间");
  try {
    shijian = _0x3935f7.data.t;
  } catch (_0x46c44b) {}
}
async function _0x31dcba() {
  let _0x26ec8d = {
      "url": "https://gitee.com/kele2233/genxin/raw/master/ydid.json",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.43(0x18002b2d) NetType/WIFI Language/zh_CN"
      }
    },
    _0xb57eb8 = await _0x2ef572(_0x26ec8d, "ll");
  hqsjc = _0xb57eb8.ymsjc;
  dqsjc = Math.round(new Date().getTime() / 1000).toString();
  hqsjc > dqsjc ? console.log("当前脚本有效期至" + _0x5164b7(hqsjc)) : (console.error("脚本参数已过期"), process.exit());
}
async function _0x19a169(_0x707183, _0x215095) {
  return new Promise(_0x4a72f8 => {
    let _0x2c64f1 = [];
    if (_0x707183) {
      if (_0x707183.indexOf("@") !== -1) _0x707183.split("@").forEach(_0x2b666f => {
        _0x2c64f1.push(_0x2b666f);
      });else _0x707183.indexOf("\n") !== -1 ? _0x707183.split("\n").forEach(_0x5ad590 => {
        _0x2c64f1.push(_0x5ad590);
      }) : _0x2c64f1.push(_0x707183);
      _0x4a72f8(_0x2c64f1);
    } else console.log("\n 【" + _0x167f87.name + "】：未填写变量 " + _0x215095);
  });
}
async function _0x18d33c(_0x3415eb) {
  if (!_0x3415eb) return;
  if (_0x1a1711 > 0) {
    if (_0x167f87.isNode()) {
      let _0x2c68fa = require("./sendNotify");
      await _0x2c68fa.sendNotify(_0x167f87.name, _0x3415eb);
    } else _0x167f87.msg(_0x3415eb);
  } else console.log(_0x3415eb);
}
function _0x588c13(_0x3d131e) {
  _0x3d131e = _0x3d131e || 32;
  let _0x2b0a2e = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
    _0x2b3f7f = _0x2b0a2e.length,
    _0x1e9af0 = "";
  for (i = 0; i < _0x3d131e; i++) _0x1e9af0 += _0x2b0a2e.charAt(Math.floor(Math.random() * _0x2b3f7f));
  return _0x1e9af0;
}
let _0x5b989c = "";
function _0x1d498e(_0x47b33f) {
  _0x5b989c = _0x47b33f;
}
function _0x1cc1c3(_0x2011dd) {
  _0x5b989c === _0x2011dd ? console.log("Reached mark " + _0x2011dd) : console.log("Invalid mark: " + _0x2011dd);
}
function _0x5164b7(_0x2d6ccf) {
  var _0x3d9f85 = new Date(_0x2d6ccf * 1000);
  var _0x1ecc0f = _0x3d9f85.getFullYear();
  var _0x980d42 = String(_0x3d9f85.getMonth() + 1).padStart(2, "0");
  var _0x11927f = String(_0x3d9f85.getDate()).padStart(2, "0");
  var _0x3cd4c2 = String(_0x3d9f85.getHours()).padStart(2, "0");
  var _0x525a57 = String(_0x3d9f85.getMinutes()).padStart(2, "0");
  var _0x49477c = String(_0x3d9f85.getSeconds()).padStart(2, "0");
  var _0x1d9a36 = _0x1ecc0f + "-" + _0x980d42 + "-" + _0x11927f + " " + _0x3cd4c2 + ":" + _0x525a57 + ":" + _0x49477c;
  return _0x1d9a36;
}
function _0x31b464(_0x9f555f, _0x587d64) {
  return Math.round(Math.random() * (_0x587d64 - _0x9f555f) + _0x9f555f);
}
function _0x385adb() {
  const _0x33a426 = new Date(),
    _0x152277 = _0x33a426.getHours(),
    _0x3c5602 = new Date(_0x33a426.getFullYear(), _0x33a426.getMonth(), _0x33a426.getDate(), _0x152277 + 1, 0, 0, 0);
  return _0x3c5602.getTime();
}
function _0x294ff6() {
  const _0x2af1b6 = new Date(),
    _0x20aa10 = _0x2af1b6.getMinutes(),
    _0x2eece7 = new Date(_0x2af1b6.getFullYear(), _0x2af1b6.getMonth(), _0x2af1b6.getDate(), _0x2af1b6.getHours(), _0x20aa10 === 0 ? 1 : _0x20aa10 + 1, 0, 0);
  return _0x2eece7.getMinutes() === 0 && _0x2eece7.getHours() !== _0x2af1b6.getHours() && _0x2eece7.setDate(_0x2af1b6.getDate() + (_0x2eece7.getHours() === 0 ? 1 : 0)), _0x2eece7.getTime();
}
function _0x99228f() {
  return Math.round(new Date().getTime()).toString();
}
function _0x463770() {
  const _0x539c9c = new Date(),
    _0x44e944 = String(_0x539c9c.getFullYear()).padStart(4, "0"),
    _0x1f8826 = String(_0x539c9c.getMonth() + 1).padStart(2, "0"),
    _0x4d6fbe = String(_0x539c9c.getDate()).padStart(2, "0"),
    _0x5e414d = String(_0x539c9c.getHours()).padStart(2, "0"),
    _0x799c2e = String(_0x539c9c.getMinutes()).padStart(2, "0"),
    _0xfecfe7 = String(_0x539c9c.getSeconds()).slice(0, 2);
  return _0x44e944 + _0x1f8826 + _0x4d6fbe + _0x5e414d + _0x799c2e + _0xfecfe7;
}
function _0x56db4b() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function _0x46333d() {
  let _0x2d3278 = new Date();
  return h = _0x2d3278.getHours(), h;
}
function _0x570343() {
  let _0x5c35cf = new Date();
  return m = _0x5c35cf.getMinutes(), m;
}
function _0x1557b8(_0x5cdd92 = 3 * 1000) {
  return new Promise(_0x442adc => {
    let _0x1729c0 = {
      "url": "https://keai.icu/apiwyy/api"
    };
    _0x167f87.get(_0x1729c0, async (_0x15419d, _0x4148ef, _0xd9b0ff) => {
      try {
        _0xd9b0ff = JSON.parse(_0xd9b0ff);
        console.log("\n 【网抑云时间】: " + _0xd9b0ff.content + "  by--" + _0xd9b0ff.music);
      } catch (_0x10c0b4) {
        _0x167f87.logErr(_0x10c0b4, _0x4148ef);
      } finally {
        _0x442adc();
      }
    }, _0x5cdd92);
  });
}
async function _0x2ef572(_0x4d9d41, _0x4ba909, _0x459bdf = 3 * 1000) {
  return new Promise(_0x49fc12 => {
    let _0x4a8f8d = _0x4d9d41;
    if (!_0x4ba909) {
      let _0x2b094b = arguments.callee.toString(),
        _0x4de5da = /function\s*(\w*)/i,
        _0x28b367 = _0x4de5da.exec(_0x2b094b);
      _0x4ba909 = _0x28b367[1];
    }
    _0x60cff9 && (console.log("\n 【debug】=============== 这是 " + _0x4ba909 + " 请求 url ==============="), console.log(_0x4a8f8d));
    _0x167f87.get(_0x4a8f8d, async (_0x518e79, _0x74ad1f, _0x4d646e) => {
      try {
        _0x60cff9 && (console.log("\n\n 【debug】===============这是 " + _0x4ba909 + " 返回data=============="), console.log(_0x4d646e), console.log("======"), console.log(JSON.parse(_0x4d646e)));
        let _0x412a28 = JSON.parse(_0x4d646e);
        _0x49fc12(_0x412a28);
      } catch (_0x52788c) {
        console.log(_0x518e79, _0x74ad1f);
        console.log("\n " + _0x4ba909 + " 失败了!请稍后尝试!!");
        _0x32251d += "\n " + _0x4ba909 + " 失败了!请稍后尝试!!";
      } finally {
        _0x49fc12();
      }
    }, _0x459bdf);
  });
}
async function _0x100f78(_0xbcb94, _0x433cf0, _0x478312 = 2 * 100) {
  return new Promise(_0x4bc98a => {
    let _0x4aaa7e = _0xbcb94;
    if (!_0x433cf0) {
      let _0x35ba20 = arguments.callee.toString(),
        _0x1fb290 = /function\s*(\w*)/i,
        _0x4ddbb7 = _0x1fb290.exec(_0x35ba20);
      _0x433cf0 = _0x4ddbb7[1];
    }
    _0x60cff9 && (console.log("\n 【debug】=============== 这是 " + _0x433cf0 + " 请求 url ==============="), console.log(_0x4aaa7e));
    _0x167f87.post(_0x4aaa7e, async (_0x84a647, _0x3adbf4, _0x548c88) => {
      try {
        _0x60cff9 && (console.log("\n\n 【debug】===============这是 " + _0x433cf0 + " 返回data=============="), console.log(_0x548c88), console.log("======"), console.log(JSON.parse(_0x548c88)));
        let _0xd75530 = JSON.parse(_0x548c88);
        _0x4bc98a(_0xd75530);
      } catch (_0x50c1b2) {
        console.log("\n " + _0x433cf0 + " 失败了!请稍后尝试!!");
        _0x32251d += "\n " + _0x433cf0 + " 失败了!请稍后尝试!!";
      } finally {
        _0x4bc98a();
      }
    }, _0x478312);
  });
}
function _0x22544(..._0x225a8a) {
  _0x60cff9 && console.log(..._0x225a8a);
}
function _0x2404d5(_0x19432c) {
  function _0x1c8da9(_0x320dc5, _0x4b0c14) {
    return _0x320dc5 << _0x4b0c14 | _0x320dc5 >>> 32 - _0x4b0c14;
  }
  function _0x2a2e3a(_0x1d387f, _0x399ad1) {
    var _0x263890, _0x25256d, _0x2be4db, _0x48b418, _0x48d06f;
    return _0x2be4db = 2147483648 & _0x1d387f, _0x48b418 = 2147483648 & _0x399ad1, _0x263890 = 1073741824 & _0x1d387f, _0x25256d = 1073741824 & _0x399ad1, _0x48d06f = (1073741823 & _0x1d387f) + (1073741823 & _0x399ad1), _0x263890 & _0x25256d ? 2147483648 ^ _0x48d06f ^ _0x2be4db ^ _0x48b418 : _0x263890 | _0x25256d ? 1073741824 & _0x48d06f ? 3221225472 ^ _0x48d06f ^ _0x2be4db ^ _0x48b418 : 1073741824 ^ _0x48d06f ^ _0x2be4db ^ _0x48b418 : _0x48d06f ^ _0x2be4db ^ _0x48b418;
  }
  function _0x4dac1b(_0x272280, _0x3d5178, _0x2539a0) {
    return _0x272280 & _0x3d5178 | ~_0x272280 & _0x2539a0;
  }
  function _0x395dce(_0x2a238a, _0x9c422c, _0x42111) {
    return _0x2a238a & _0x42111 | _0x9c422c & ~_0x42111;
  }
  function _0x59371a(_0x82251a, _0x518644, _0x32f883) {
    return _0x82251a ^ _0x518644 ^ _0x32f883;
  }
  function _0x32d4f1(_0x40de09, _0x1e3100, _0x16ea6a) {
    return _0x1e3100 ^ (_0x40de09 | ~_0x16ea6a);
  }
  function _0x5a6638(_0x1e5706, _0x2eeaad, _0x195032, _0x54e159, _0x1b6c64, _0x5b0cac, _0x5aefdf) {
    return _0x1e5706 = _0x2a2e3a(_0x1e5706, _0x2a2e3a(_0x2a2e3a(_0x4dac1b(_0x2eeaad, _0x195032, _0x54e159), _0x1b6c64), _0x5aefdf)), _0x2a2e3a(_0x1c8da9(_0x1e5706, _0x5b0cac), _0x2eeaad);
  }
  function _0x5782c1(_0x5f0cbf, _0x84fd3b, _0x1faaac, _0xc30013, _0x591063, _0x1451e5, _0x476516) {
    return _0x5f0cbf = _0x2a2e3a(_0x5f0cbf, _0x2a2e3a(_0x2a2e3a(_0x395dce(_0x84fd3b, _0x1faaac, _0xc30013), _0x591063), _0x476516)), _0x2a2e3a(_0x1c8da9(_0x5f0cbf, _0x1451e5), _0x84fd3b);
  }
  function _0x4ec527(_0x1ae217, _0x4bb226, _0x11c9ec, _0x591a27, _0x2fe021, _0x7dfbe2, _0xe74571) {
    return _0x1ae217 = _0x2a2e3a(_0x1ae217, _0x2a2e3a(_0x2a2e3a(_0x59371a(_0x4bb226, _0x11c9ec, _0x591a27), _0x2fe021), _0xe74571)), _0x2a2e3a(_0x1c8da9(_0x1ae217, _0x7dfbe2), _0x4bb226);
  }
  function _0x2155e4(_0x585d42, _0x1d98db, _0x2579a0, _0x411b2e, _0x3c97f8, _0x3be51b, _0x39bfa8) {
    return _0x585d42 = _0x2a2e3a(_0x585d42, _0x2a2e3a(_0x2a2e3a(_0x32d4f1(_0x1d98db, _0x2579a0, _0x411b2e), _0x3c97f8), _0x39bfa8)), _0x2a2e3a(_0x1c8da9(_0x585d42, _0x3be51b), _0x1d98db);
  }
  function _0x5247ce(_0x442de9) {
    for (var _0x3b09ec, _0x41ae9d = _0x442de9.length, _0x35eee0 = _0x41ae9d + 8, _0x8a3ea6 = (_0x35eee0 - _0x35eee0 % 64) / 64, _0x43c4b9 = 16 * (_0x8a3ea6 + 1), _0x3ba2be = new Array(_0x43c4b9 - 1), _0x86b99b = 0, _0x425ccf = 0; _0x41ae9d > _0x425ccf;) _0x3b09ec = (_0x425ccf - _0x425ccf % 4) / 4, _0x86b99b = _0x425ccf % 4 * 8, _0x3ba2be[_0x3b09ec] = _0x3ba2be[_0x3b09ec] | _0x442de9.charCodeAt(_0x425ccf) << _0x86b99b, _0x425ccf++;
    return _0x3b09ec = (_0x425ccf - _0x425ccf % 4) / 4, _0x86b99b = _0x425ccf % 4 * 8, _0x3ba2be[_0x3b09ec] = _0x3ba2be[_0x3b09ec] | 128 << _0x86b99b, _0x3ba2be[_0x43c4b9 - 2] = _0x41ae9d << 3, _0x3ba2be[_0x43c4b9 - 1] = _0x41ae9d >>> 29, _0x3ba2be;
  }
  function _0x5201fa(_0x9e30e4) {
    var _0x3a8b25,
      _0x7f73e7,
      _0x3c10d1 = "",
      _0x1a794f = "";
    for (_0x7f73e7 = 0; 3 >= _0x7f73e7; _0x7f73e7++) _0x3a8b25 = _0x9e30e4 >>> 8 * _0x7f73e7 & 255, _0x1a794f = "0" + _0x3a8b25.toString(16), _0x3c10d1 += _0x1a794f.substr(_0x1a794f.length - 2, 2);
    return _0x3c10d1;
  }
  function _0x499d64(_0x314f57) {
    _0x314f57 = _0x314f57.replace(/\r\n/g, "\n");
    for (var _0x18b7de = "", _0x46c5be = 0; _0x46c5be < _0x314f57.length; _0x46c5be++) {
      var _0x272936 = _0x314f57.charCodeAt(_0x46c5be);
      128 > _0x272936 ? _0x18b7de += String.fromCharCode(_0x272936) : _0x272936 > 127 && 2048 > _0x272936 ? (_0x18b7de += String.fromCharCode(_0x272936 >> 6 | 192), _0x18b7de += String.fromCharCode(63 & _0x272936 | 128)) : (_0x18b7de += String.fromCharCode(_0x272936 >> 12 | 224), _0x18b7de += String.fromCharCode(_0x272936 >> 6 & 63 | 128), _0x18b7de += String.fromCharCode(63 & _0x272936 | 128));
    }
    return _0x18b7de;
  }
  var _0xa37c17,
    _0x3f080d,
    _0x5a69af,
    _0xcab7c5,
    _0x55bed6,
    _0x4a5208,
    _0x3734be,
    _0x441336,
    _0x3fac15,
    _0x312027 = [],
    _0x128764 = 7,
    _0x202ff7 = 12,
    _0xbdc410 = 17,
    _0x1e75d8 = 22,
    _0x47c778 = 5,
    _0xb01faa = 9,
    _0xa2ce6b = 14,
    _0xeb7881 = 20,
    _0x29349a = 4,
    _0x1330fe = 11,
    _0x2796d5 = 16,
    _0x1fcbb3 = 23,
    _0x46b608 = 6,
    _0x167e95 = 10,
    _0x3423b7 = 15,
    _0x478e46 = 21;
  for (_0x19432c = _0x499d64(_0x19432c), _0x312027 = _0x5247ce(_0x19432c), _0x4a5208 = 1732584193, _0x3734be = 4023233417, _0x441336 = 2562383102, _0x3fac15 = 271733878, _0xa37c17 = 0; _0xa37c17 < _0x312027.length; _0xa37c17 += 16) _0x3f080d = _0x4a5208, _0x5a69af = _0x3734be, _0xcab7c5 = _0x441336, _0x55bed6 = _0x3fac15, _0x4a5208 = _0x5a6638(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 0], _0x128764, 3614090360), _0x3fac15 = _0x5a6638(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 1], _0x202ff7, 3905402710), _0x441336 = _0x5a6638(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 2], _0xbdc410, 606105819), _0x3734be = _0x5a6638(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 3], _0x1e75d8, 3250441966), _0x4a5208 = _0x5a6638(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 4], _0x128764, 4118548399), _0x3fac15 = _0x5a6638(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 5], _0x202ff7, 1200080426), _0x441336 = _0x5a6638(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 6], _0xbdc410, 2821735955), _0x3734be = _0x5a6638(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 7], _0x1e75d8, 4249261313), _0x4a5208 = _0x5a6638(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 8], _0x128764, 1770035416), _0x3fac15 = _0x5a6638(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 9], _0x202ff7, 2336552879), _0x441336 = _0x5a6638(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 10], _0xbdc410, 4294925233), _0x3734be = _0x5a6638(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 11], _0x1e75d8, 2304563134), _0x4a5208 = _0x5a6638(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 12], _0x128764, 1804603682), _0x3fac15 = _0x5a6638(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 13], _0x202ff7, 4254626195), _0x441336 = _0x5a6638(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 14], _0xbdc410, 2792965006), _0x3734be = _0x5a6638(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 15], _0x1e75d8, 1236535329), _0x4a5208 = _0x5782c1(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 1], _0x47c778, 4129170786), _0x3fac15 = _0x5782c1(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 6], _0xb01faa, 3225465664), _0x441336 = _0x5782c1(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 11], _0xa2ce6b, 643717713), _0x3734be = _0x5782c1(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 0], _0xeb7881, 3921069994), _0x4a5208 = _0x5782c1(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 5], _0x47c778, 3593408605), _0x3fac15 = _0x5782c1(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 10], _0xb01faa, 38016083), _0x441336 = _0x5782c1(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 15], _0xa2ce6b, 3634488961), _0x3734be = _0x5782c1(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 4], _0xeb7881, 3889429448), _0x4a5208 = _0x5782c1(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 9], _0x47c778, 568446438), _0x3fac15 = _0x5782c1(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 14], _0xb01faa, 3275163606), _0x441336 = _0x5782c1(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 3], _0xa2ce6b, 4107603335), _0x3734be = _0x5782c1(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 8], _0xeb7881, 1163531501), _0x4a5208 = _0x5782c1(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 13], _0x47c778, 2850285829), _0x3fac15 = _0x5782c1(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 2], _0xb01faa, 4243563512), _0x441336 = _0x5782c1(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 7], _0xa2ce6b, 1735328473), _0x3734be = _0x5782c1(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 12], _0xeb7881, 2368359562), _0x4a5208 = _0x4ec527(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 5], _0x29349a, 4294588738), _0x3fac15 = _0x4ec527(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 8], _0x1330fe, 2272392833), _0x441336 = _0x4ec527(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 11], _0x2796d5, 1839030562), _0x3734be = _0x4ec527(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 14], _0x1fcbb3, 4259657740), _0x4a5208 = _0x4ec527(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 1], _0x29349a, 2763975236), _0x3fac15 = _0x4ec527(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 4], _0x1330fe, 1272893353), _0x441336 = _0x4ec527(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 7], _0x2796d5, 4139469664), _0x3734be = _0x4ec527(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 10], _0x1fcbb3, 3200236656), _0x4a5208 = _0x4ec527(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 13], _0x29349a, 681279174), _0x3fac15 = _0x4ec527(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 0], _0x1330fe, 3936430074), _0x441336 = _0x4ec527(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 3], _0x2796d5, 3572445317), _0x3734be = _0x4ec527(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 6], _0x1fcbb3, 76029189), _0x4a5208 = _0x4ec527(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 9], _0x29349a, 3654602809), _0x3fac15 = _0x4ec527(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 12], _0x1330fe, 3873151461), _0x441336 = _0x4ec527(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 15], _0x2796d5, 530742520), _0x3734be = _0x4ec527(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 2], _0x1fcbb3, 3299628645), _0x4a5208 = _0x2155e4(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 0], _0x46b608, 4096336452), _0x3fac15 = _0x2155e4(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 7], _0x167e95, 1126891415), _0x441336 = _0x2155e4(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 14], _0x3423b7, 2878612391), _0x3734be = _0x2155e4(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 5], _0x478e46, 4237533241), _0x4a5208 = _0x2155e4(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 12], _0x46b608, 1700485571), _0x3fac15 = _0x2155e4(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 3], _0x167e95, 2399980690), _0x441336 = _0x2155e4(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 10], _0x3423b7, 4293915773), _0x3734be = _0x2155e4(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 1], _0x478e46, 2240044497), _0x4a5208 = _0x2155e4(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 8], _0x46b608, 1873313359), _0x3fac15 = _0x2155e4(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 15], _0x167e95, 4264355552), _0x441336 = _0x2155e4(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 6], _0x3423b7, 2734768916), _0x3734be = _0x2155e4(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 13], _0x478e46, 1309151649), _0x4a5208 = _0x2155e4(_0x4a5208, _0x3734be, _0x441336, _0x3fac15, _0x312027[_0xa37c17 + 4], _0x46b608, 4149444226), _0x3fac15 = _0x2155e4(_0x3fac15, _0x4a5208, _0x3734be, _0x441336, _0x312027[_0xa37c17 + 11], _0x167e95, 3174756917), _0x441336 = _0x2155e4(_0x441336, _0x3fac15, _0x4a5208, _0x3734be, _0x312027[_0xa37c17 + 2], _0x3423b7, 718787259), _0x3734be = _0x2155e4(_0x3734be, _0x441336, _0x3fac15, _0x4a5208, _0x312027[_0xa37c17 + 9], _0x478e46, 3951481745), _0x4a5208 = _0x2a2e3a(_0x4a5208, _0x3f080d), _0x3734be = _0x2a2e3a(_0x3734be, _0x5a69af), _0x441336 = _0x2a2e3a(_0x441336, _0xcab7c5), _0x3fac15 = _0x2a2e3a(_0x3fac15, _0x55bed6);
  var _0x10125b = _0x5201fa(_0x4a5208) + _0x5201fa(_0x3734be) + _0x5201fa(_0x441336) + _0x5201fa(_0x3fac15);
  return _0x10125b.toLowerCase();
}
function _0x22eb2a(_0x745ea7, _0x509d5b) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x4d907a {
    constructor(_0x2ca3e9) {
      this.env = _0x2ca3e9;
    }
    ["send"](_0xd238d, _0x64327 = "GET") {
      _0xd238d = "string" == typeof _0xd238d ? {
        "url": _0xd238d
      } : _0xd238d;
      let _0x2fa65f = this.get;
      return "POST" === _0x64327 && (_0x2fa65f = this.post), new Promise((_0x28d26e, _0x40635f) => {
        _0x2fa65f.call(this, _0xd238d, (_0x349b9e, _0xb7778, _0x414acd) => {
          _0x349b9e ? _0x40635f(_0x349b9e) : _0x28d26e(_0xb7778);
        });
      });
    }
    ["get"](_0x91d42d) {
      return this.send.call(this.env, _0x91d42d);
    }
    ["post"](_0x433495) {
      return this.send.call(this.env, _0x433495, "POST");
    }
  }
  return new class {
    constructor(_0x4f4e4e, _0x5e823c) {
      this.name = _0x4f4e4e;
      this.http = new _0x4d907a(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x5e823c);
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
    ["toObj"](_0x5088a1, _0x1765a4 = null) {
      try {
        return JSON.parse(_0x5088a1);
      } catch {
        return _0x1765a4;
      }
    }
    ["toStr"](_0xbdba14, _0x2a9621 = null) {
      try {
        return JSON.stringify(_0xbdba14);
      } catch {
        return _0x2a9621;
      }
    }
    ["getjson"](_0x42f016, _0xc94201) {
      let _0x1da7ff = _0xc94201;
      const _0xce7039 = this.getdata(_0x42f016);
      if (_0xce7039) try {
        _0x1da7ff = JSON.parse(this.getdata(_0x42f016));
      } catch {}
      return _0x1da7ff;
    }
    ["setjson"](_0x579388, _0x4ae0ee) {
      try {
        return this.setdata(JSON.stringify(_0x579388), _0x4ae0ee);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x5b14fe) {
      return new Promise(_0xdeecca => {
        this.get({
          "url": _0x5b14fe
        }, (_0x5aa85b, _0x4992d7, _0x4d9128) => _0xdeecca(_0x4d9128));
      });
    }
    ["runScript"](_0x16c5a0, _0x1d22fb) {
      return new Promise(_0x1652c1 => {
        let _0x5e4394 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x5e4394 = _0x5e4394 ? _0x5e4394.replace(/\n/g, "").trim() : _0x5e4394;
        let _0x62d722 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x62d722 = _0x62d722 ? 1 * _0x62d722 : 20;
        _0x62d722 = _0x1d22fb && _0x1d22fb.timeout ? _0x1d22fb.timeout : _0x62d722;
        const [_0x355a2d, _0x412bea] = _0x5e4394.split("@"),
          _0x455b4e = {
            "url": "http://" + _0x412bea + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x16c5a0,
              "mock_type": "cron",
              "timeout": _0x62d722
            },
            "headers": {
              "Accept": "*/*"
            }
          };
        this.post(_0x455b4e, (_0x2af1e5, _0x23d327, _0x5c092f) => _0x1652c1(_0x5c092f));
      }).catch(_0x4e12ea => this.logErr(_0x4e12ea));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3893ee = this.path.resolve(this.dataFile),
          _0x40b553 = this.path.resolve(process.cwd(), this.dataFile),
          _0xe97212 = this.fs.existsSync(_0x3893ee),
          _0x1ce3ca = !_0xe97212 && this.fs.existsSync(_0x40b553);
        if (!_0xe97212 && !_0x1ce3ca) return {};
        {
          const _0x254d03 = _0xe97212 ? _0x3893ee : _0x40b553;
          try {
            return JSON.parse(this.fs.readFileSync(_0x254d03));
          } catch (_0xd2c29) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x388ba8 = this.path.resolve(this.dataFile),
          _0x433869 = this.path.resolve(process.cwd(), this.dataFile),
          _0x4974c6 = this.fs.existsSync(_0x388ba8),
          _0x5f38d8 = !_0x4974c6 && this.fs.existsSync(_0x433869),
          _0x5e488f = JSON.stringify(this.data);
        _0x4974c6 ? this.fs.writeFileSync(_0x388ba8, _0x5e488f) : _0x5f38d8 ? this.fs.writeFileSync(_0x433869, _0x5e488f) : this.fs.writeFileSync(_0x388ba8, _0x5e488f);
      }
    }
    ["lodash_get"](_0x588ae8, _0xf1bf4c, _0x538cb6) {
      const _0x2b2e46 = _0xf1bf4c.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x6a19d3 = _0x588ae8;
      for (const _0x3a7bb7 of _0x2b2e46) if (_0x6a19d3 = Object(_0x6a19d3)[_0x3a7bb7], void 0 === _0x6a19d3) return _0x538cb6;
      return _0x6a19d3;
    }
    ["lodash_set"](_0x5dbbf9, _0x4aab8f, _0x3bf0a8) {
      return Object(_0x5dbbf9) !== _0x5dbbf9 ? _0x5dbbf9 : (Array.isArray(_0x4aab8f) || (_0x4aab8f = _0x4aab8f.toString().match(/[^.[\]]+/g) || []), _0x4aab8f.slice(0, -1).reduce((_0x404d05, _0x5440ab, _0x43de2d) => Object(_0x404d05[_0x5440ab]) === _0x404d05[_0x5440ab] ? _0x404d05[_0x5440ab] : _0x404d05[_0x5440ab] = Math.abs(_0x4aab8f[_0x43de2d + 1]) >> 0 == +_0x4aab8f[_0x43de2d + 1] ? [] : {}, _0x5dbbf9)[_0x4aab8f[_0x4aab8f.length - 1]] = _0x3bf0a8, _0x5dbbf9);
    }
    ["getdata"](_0x259882) {
      let _0x15885d = this.getval(_0x259882);
      if (/^@/.test(_0x259882)) {
        const [, _0x3de625, _0x251495] = /^@(.*?)\.(.*?)$/.exec(_0x259882),
          _0xc51e70 = _0x3de625 ? this.getval(_0x3de625) : "";
        if (_0xc51e70) try {
          const _0x21c1ae = JSON.parse(_0xc51e70);
          _0x15885d = _0x21c1ae ? this.lodash_get(_0x21c1ae, _0x251495, "") : _0x15885d;
        } catch (_0x4c1ec1) {
          _0x15885d = "";
        }
      }
      return _0x15885d;
    }
    ["setdata"](_0x84a874, _0x484865) {
      let _0x4f7c78 = false;
      if (/^@/.test(_0x484865)) {
        const [, _0x4f4529, _0x34129a] = /^@(.*?)\.(.*?)$/.exec(_0x484865),
          _0x927d45 = this.getval(_0x4f4529),
          _0x1cfbf2 = _0x4f4529 ? "null" === _0x927d45 ? null : _0x927d45 || "{}" : "{}";
        try {
          const _0x48409e = JSON.parse(_0x1cfbf2);
          this.lodash_set(_0x48409e, _0x34129a, _0x84a874);
          _0x4f7c78 = this.setval(JSON.stringify(_0x48409e), _0x4f4529);
        } catch (_0x380de7) {
          const _0x1e61e5 = {};
          this.lodash_set(_0x1e61e5, _0x34129a, _0x84a874);
          _0x4f7c78 = this.setval(JSON.stringify(_0x1e61e5), _0x4f4529);
        }
      } else _0x4f7c78 = this.setval(_0x84a874, _0x484865);
      return _0x4f7c78;
    }
    ["getval"](_0x48e308) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x48e308) : this.isQuanX() ? $prefs.valueForKey(_0x48e308) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x48e308]) : this.data && this.data[_0x48e308] || null;
    }
    ["setval"](_0x196a09, _0x4fdae3) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x196a09, _0x4fdae3) : this.isQuanX() ? $prefs.setValueForKey(_0x196a09, _0x4fdae3) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4fdae3] = _0x196a09, this.writedata(), !0) : this.data && this.data[_0x4fdae3] || null;
    }
    ["initGotEnv"](_0x574bd6) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x574bd6 && (_0x574bd6.headers = _0x574bd6.headers ? _0x574bd6.headers : {}, void 0 === _0x574bd6.headers.Cookie && void 0 === _0x574bd6.cookieJar && (_0x574bd6.cookieJar = this.ckjar));
    }
    ["get"](_0x38cb47, _0x50b8fa = () => {}) {
      _0x38cb47.headers && (delete _0x38cb47.headers["Content-Type"], delete _0x38cb47.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x38cb47.headers = _0x38cb47.headers || {}, Object.assign(_0x38cb47.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x38cb47, (_0x884585, _0xe096a3, _0x49fd7a) => {
        !_0x884585 && _0xe096a3 && (_0xe096a3.body = _0x49fd7a, _0xe096a3.statusCode = _0xe096a3.status);
        _0x50b8fa(_0x884585, _0xe096a3, _0x49fd7a);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x38cb47.opts = _0x38cb47.opts || {}, Object.assign(_0x38cb47.opts, {
        "hints": !1
      })), $task.fetch(_0x38cb47).then(_0x416534 => {
        const {
          statusCode: _0x175dd9,
          statusCode: _0x5462c2,
          headers: _0x5f166e,
          body: _0x8bbf07
        } = _0x416534;
        _0x50b8fa(null, {
          "status": _0x175dd9,
          "statusCode": _0x5462c2,
          "headers": _0x5f166e,
          "body": _0x8bbf07
        }, _0x8bbf07);
      }, _0x51300f => _0x50b8fa(_0x51300f))) : this.isNode() && (this.initGotEnv(_0x38cb47), this.got(_0x38cb47).on("redirect", (_0x240576, _0x554abb) => {
        try {
          if (_0x240576.headers["set-cookie"]) {
            const _0x474e5c = _0x240576.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x474e5c && this.ckjar.setCookieSync(_0x474e5c, null);
            _0x554abb.cookieJar = this.ckjar;
          }
        } catch (_0x4244b3) {
          this.logErr(_0x4244b3);
        }
      }).then(_0x30e8a5 => {
        const {
          statusCode: _0x584ab1,
          statusCode: _0x4a6324,
          headers: _0x90f5bc,
          body: _0x4eb7cb
        } = _0x30e8a5;
        _0x50b8fa(null, {
          "status": _0x584ab1,
          "statusCode": _0x4a6324,
          "headers": _0x90f5bc,
          "body": _0x4eb7cb
        }, _0x4eb7cb);
      }, _0x2e30ee => {
        const {
          message: _0x569f4a,
          response: _0xd12073
        } = _0x2e30ee;
        _0x50b8fa(_0x569f4a, _0xd12073, _0xd12073 && _0xd12073.body);
      }));
    }
    ["post"](_0x38ef61, _0x2bb33a = () => {}) {
      if (_0x38ef61.body && _0x38ef61.headers && !_0x38ef61.headers["Content-Type"] && (_0x38ef61.headers["Content-Type"] = "application/json;charset=utf-8"), _0x38ef61.headers && delete _0x38ef61.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x38ef61.headers = _0x38ef61.headers || {}, Object.assign(_0x38ef61.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x38ef61, (_0x77e5a6, _0xbba10a, _0x481c9e) => {
        !_0x77e5a6 && _0xbba10a && (_0xbba10a.body = _0x481c9e, _0xbba10a.statusCode = _0xbba10a.status);
        _0x2bb33a(_0x77e5a6, _0xbba10a, _0x481c9e);
      });else {
        if (this.isQuanX()) _0x38ef61.method = "POST", this.isNeedRewrite && (_0x38ef61.opts = _0x38ef61.opts || {}, Object.assign(_0x38ef61.opts, {
          "hints": !1
        })), $task.fetch(_0x38ef61).then(_0x5bfbac => {
          const {
            statusCode: _0x2a4994,
            statusCode: _0x282a46,
            headers: _0x39418c,
            body: _0x46e971
          } = _0x5bfbac;
          _0x2bb33a(null, {
            "status": _0x2a4994,
            "statusCode": _0x282a46,
            "headers": _0x39418c,
            "body": _0x46e971
          }, _0x46e971);
        }, _0xdacaaf => _0x2bb33a(_0xdacaaf));else {
          if (this.isNode()) {
            this.initGotEnv(_0x38ef61);
            const {
              url: _0x1e3855,
              ..._0x31c0cf
            } = _0x38ef61;
            this.got.post(_0x1e3855, _0x31c0cf).then(_0x48665e => {
              const {
                statusCode: _0x2b610d,
                statusCode: _0x4861b7,
                headers: _0x1caf9b,
                body: _0x15b4f0
              } = _0x48665e;
              _0x2bb33a(null, {
                "status": _0x2b610d,
                "statusCode": _0x4861b7,
                "headers": _0x1caf9b,
                "body": _0x15b4f0
              }, _0x15b4f0);
            }, _0x4dc7b0 => {
              const {
                message: _0x65d24f,
                response: _0x7a65f7
              } = _0x4dc7b0;
              _0x2bb33a(_0x65d24f, _0x7a65f7, _0x7a65f7 && _0x7a65f7.body);
            });
          }
        }
      }
    }
    ["time"](_0x51f4d8, _0x4bf18a = null) {
      const _0x363cf9 = _0x4bf18a ? new Date(_0x4bf18a) : new Date();
      let _0x4e0278 = {
        "M+": _0x363cf9.getMonth() + 1,
        "d+": _0x363cf9.getDate(),
        "H+": _0x363cf9.getHours(),
        "m+": _0x363cf9.getMinutes(),
        "s+": _0x363cf9.getSeconds(),
        "q+": Math.floor((_0x363cf9.getMonth() + 3) / 3),
        "S": _0x363cf9.getMilliseconds()
      };
      /(y+)/.test(_0x51f4d8) && (_0x51f4d8 = _0x51f4d8.replace(RegExp.$1, (_0x363cf9.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3ed893 in _0x4e0278) new RegExp("(" + _0x3ed893 + ")").test(_0x51f4d8) && (_0x51f4d8 = _0x51f4d8.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4e0278[_0x3ed893] : ("00" + _0x4e0278[_0x3ed893]).substr(("" + _0x4e0278[_0x3ed893]).length)));
      return _0x51f4d8;
    }
    ["msg"](_0x47d69e = _0x745ea7, _0x2144ef = "", _0x1ab18f = "", _0x5cf7e8) {
      const _0x450c21 = _0x507c46 => {
        if (!_0x507c46) return _0x507c46;
        if ("string" == typeof _0x507c46) return this.isLoon() ? _0x507c46 : this.isQuanX() ? {
          "open-url": _0x507c46
        } : this.isSurge() ? {
          "url": _0x507c46
        } : void 0;
        if ("object" == typeof _0x507c46) {
          if (this.isLoon()) {
            let _0x590bbc = _0x507c46.openUrl || _0x507c46.url || _0x507c46["open-url"],
              _0x1f29f6 = _0x507c46.mediaUrl || _0x507c46["media-url"];
            return {
              "openUrl": _0x590bbc,
              "mediaUrl": _0x1f29f6
            };
          }
          if (this.isQuanX()) {
            let _0x1cc886 = _0x507c46["open-url"] || _0x507c46.url || _0x507c46.openUrl,
              _0x43d808 = _0x507c46["media-url"] || _0x507c46.mediaUrl;
            return {
              "open-url": _0x1cc886,
              "media-url": _0x43d808
            };
          }
          if (this.isSurge()) {
            let _0x73a5e = _0x507c46.url || _0x507c46.openUrl || _0x507c46["open-url"];
            return {
              "url": _0x73a5e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x47d69e, _0x2144ef, _0x1ab18f, _0x450c21(_0x5cf7e8)) : this.isQuanX() && $notify(_0x47d69e, _0x2144ef, _0x1ab18f, _0x450c21(_0x5cf7e8))), !this.isMuteLog) {
        let _0x3999f7 = ["", "==============📣系统通知📣=============="];
        _0x3999f7.push(_0x47d69e);
        _0x2144ef && _0x3999f7.push(_0x2144ef);
        _0x1ab18f && _0x3999f7.push(_0x1ab18f);
        console.log(_0x3999f7.join("\n"));
        this.logs = this.logs.concat(_0x3999f7);
      }
    }
    ["log"](..._0x4b424e) {
      _0x4b424e.length > 0 && (this.logs = [...this.logs, ..._0x4b424e]);
      console.log(_0x4b424e.join(this.logSeparator));
    }
    ["logErr"](_0x360288, _0x404976) {
      const _0x41ac43 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x41ac43 ? this.log("", "❗️" + this.name + ", 错误!", _0x360288.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x360288);
    }
    ["wait"](_0x5c7600) {
      return new Promise(_0xee9342 => setTimeout(_0xee9342, _0x5c7600));
    }
    ["done"](_0x378cbc = {}) {
      const _0x38ac73 = new Date().getTime(),
        _0x248a62 = (_0x38ac73 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x248a62 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x378cbc);
    }
  }(_0x745ea7, _0x509d5b);
}