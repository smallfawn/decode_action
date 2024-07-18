//Thu Jul 18 2024 15:03:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    validateCarmeWithType: _0x59ca05,
    getCookies: _0x2d9953,
    getUserInfoWithX: _0x52d5fd,
    wait: _0xaa119c,
    tryCatchPromise: _0x339cd2,
    checkCk: _0x2bc991
  } = require("./common.js"),
  _0x286a61 = require("request"),
  _0x127a18 = process.env.ELE_CARME,
  _0x5210b0 = 23,
  _0x3d6440 = require("md5"),
  _0x31a150 = require("crypto"),
  _0x5672ea = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAntZvpNYeRv7UpTSvhzWtdVvUxPeSwfyFvV1hyhjByfc+RKLcBFHdkyI0nB4pMWcLln6zmXfhEJK+eSBovY7BR6LAP/fV+zhxTChnlMGjDwhr+E3/LEnlH24lVcIIFQaU/grflUGJHVJrCHtkJ3NPTLrit5gilviRNUSHMI+Y+PcX9HfzGCCEp1lnIPkzVrWVojtcXLjEYfdGZRijK/udICjSHNXp9No/vzrFxaH2jfk6PVLAcNXZAEGbNUdIzbfYorGdU6lf3tFJ8E2Fs1k6Q4BTFXYzkq+EejOYjHF64M5OTTKtfNcrHcZo13EDdjG5JRaKx7bGc5e5lUOSsBCWdwIDAQAB\n-----END PUBLIC KEY-----";
function _0x5f671e(_0x5176e2) {
  const _0xa0b189 = Buffer.from(_0x5176e2, "utf8"),
    _0x30a2a1 = _0x31a150.publicEncrypt(_0x5672ea, _0xa0b189);
  return _0x30a2a1.toString("base64");
}
function _0x1a523b(_0x10b6c8) {
  if (!_0x10b6c8) {
    return "-1";
  }
  for (var _0x12eabb = _0x10b6c8.split(";"), _0x406903 = 0; _0x406903 < _0x12eabb.length; _0x406903++) {
    var _0x450595 = _0x12eabb[_0x406903].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x450595[0])) {
      return _0x450595[1];
    }
  }
  return "-1";
}
const _0x5cf4f4 = async (_0x2bc6f9, _0x1c444f, _0x42b574 = 5) => {
  const _0x255e82 = _0x1a523b(_0x2bc6f9),
    _0x192a0b = _0x255e82.split("_")[0];
  return _0x3d6440(_0x192a0b + _0x1c444f);
};
async function _0x389e0e(_0x46c612, _0x150ab1) {
  const _0x4dfa75 = {
      "authority": "shopping.ele.me",
      "accept": "application/json",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "cookie": _0x46c612,
      "x-miniapp-id-taobao": "3000000091262411",
      "x-miniapp-version": "0.0.116",
      "x-mini-appkey": "34416858",
      "x-req-appkey": "34416858",
      "appid": "3000000091262411"
    },
    _0x303357 = new Date().getTime(),
    _0x46d5fd = 34190632,
    _0xb1a4b3 = "data=" + encodeURIComponent(JSON.stringify(_0x150ab1)),
    _0x529b7d = await _0x5cf4f4(_0x46c612, "&" + _0x303357 + "&" + _0x46d5fd + "&" + JSON.stringify(_0x150ab1), _0x127a18),
    _0x2737f2 = {
      "url": "https://shopping.ele.me/h5/mtop.miniapp.cloud.application.request/1.0/?jsv=2.6.1&appKey=34190632&t=" + _0x303357 + "&sign=" + _0x529b7d + "&api=mtop.miniapp.cloud.application.request&v=1.0&type=originaljson&ttid=1608030065155%40eleme_android_11.0.38",
      "method": "POST",
      "headers": _0x4dfa75,
      "body": _0xb1a4b3
    };
  return _0x339cd2(_0x712b47 => {
    _0x286a61(_0x2737f2, async (_0x2ad7cf, _0x12230a, _0x4bc800) => {
      if (!_0x2ad7cf && _0x12230a.statusCode === 200) try {
        const _0x18c432 = JSON.parse(_0x4bc800);
        _0x712b47(_0x18c432.data.data);
      } catch (_0x24a035) {
        console.log(_0x4bc800);
        _0x712b47(null);
      } else {
        _0x712b47(null);
      }
    });
  });
}
async function _0x457235(_0x3e73c2, _0x41297f, _0x18d496) {
  const _0x2f8479 = {
      "accept": "application/json",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "cookie": _0x3e73c2,
      "User-Agent": "okhttp/3.14.9",
      "Host": "sskz.gzppxia.com",
      "startToken": "150483272097295"
    },
    _0x3d6fd6 = {
      "url": "https://sskz.gzppxia.com/" + _0x18d496,
      "method": "POST",
      "headers": _0x2f8479,
      "body": JSON.stringify(_0x41297f)
    };
  return _0x339cd2(_0x3a77cc => {
    _0x286a61(_0x3d6fd6, async (_0x10940a, _0x2890da, _0x5f1995) => {
      if (!_0x10940a && _0x2890da.statusCode === 200) try {
        const _0x4f973a = JSON.parse(_0x5f1995);
        _0x3a77cc(_0x4f973a);
      } catch (_0x27a6e2) {
        console.log(_0x5f1995);
        _0x3a77cc(null);
      } else _0x3a77cc(null);
    });
  });
}
async function _0x566cc1(_0x184c2c) {
  const _0x2809bb = new Date().getTime(),
    _0x26b748 = {
      "body": "{}",
      "headers": "{}",
      "instance": "INNER",
      "method": "GET",
      "options": "{\"cloudAppId\":\"47729\",\"domain\":\"https://sskz.gzppxia.com/tt_action/\",\"timeout\":3000,\"env\":\"online\",\"options\":{\"path\":\"pages/index/index\"}}",
      "path": "elmeisv.php?method=getOpenid",
      "protocols": "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x2809bb + "\",\"mc-env\":\"online\"}",
      "queryString": "{}",
      "sdkVersion": "1.5.5"
    },
    _0x2c0650 = await _0x389e0e(_0x184c2c, _0x26b748);
  if (_0x2c0650) return JSON.parse(_0x2c0650).openid;
}
async function _0x4e7ec3(_0x5ebbac, _0xee6b04) {
  const _0x342272 = new Date().getTime(),
    _0xb98c1c = {
      "handler": "login",
      "auth_code": _0xee6b04,
      "attach": null,
      "platform_id": "taoteGame2",
      "channel_id": 1002,
      "cver": "1.0.1",
      "wx_data": {},
      "imei": "",
      "userId": "",
      "token": "",
      "ver": 1,
      "send_time": _0x342272
    };
  _0xb98c1c.wx_data.nickName = "曾天曼";
  _0xb98c1c.wx_data.gender = 2;
  _0xb98c1c.wx_data.avatarUrl = "elm_head_2_jpg";
  _0xb98c1c.wx_data.sk = "";
  _0xb98c1c.wx_data.platform_data = {};
  _0xb98c1c.wx_data.platform_data.h5openid = _0xee6b04;
  const _0x3bdf8c = {},
    _0x14ba8b = await _0x457235(_0x5ebbac, _0xb98c1c, "tt_action/20220926/action/login.php?XDEBUG_SESSION_START=PHPSTORM");
  return _0x14ba8b && (_0x3bdf8c.token = _0x14ba8b.token, _0x3bdf8c.openId = _0xee6b04, _0x3bdf8c.userId = _0x14ba8b.userId), _0x3bdf8c;
}
async function _0x567544(_0x5299ba, _0xdf7c68) {
  const _0x141787 = new Date().getTime(),
    _0x176243 = {
      "handler": "sendElmeCoin",
      "elmeopenid": _0xdf7c68.openId,
      "num": 10,
      "userId": _0xdf7c68.userId,
      "token": _0xdf7c68.token,
      "ver": 1,
      "send_time": _0x141787
    };
  return await _0x457235(_0x5299ba, _0x176243, "tt_action/20220926/action/sendElmeCoin.php?XDEBUG_SESSION_START=PHPSTORM");
}
async function _0x98343b() {
  await _0x59ca05(_0x127a18, 1);
  const _0xd02a6 = _0x2d9953("elmck");
  for (let _0x6d3118 = 0; _0x6d3118 < _0xd02a6.length; _0x6d3118++) {
    let _0x367b10 = _0xd02a6[_0x6d3118];
    _0x367b10 = await _0x2bc991(_0x367b10, _0x6d3118, _0x127a18, 1);
    if (!_0x367b10) {
      continue;
    }
    let _0x1b5453 = await _0x52d5fd(_0x367b10, _0x5210b0);
    if (_0x1b5453 && _0x1b5453[0]) {
      console.log("第", _0x6d3118 + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    if (!_0x1b5453 || !_0x1b5453.userName) continue;
    const _0x39b81b = _0x1b5453.localId;
    let _0x529f90 = _0x1b5453.encryptMobile;
    console.log("\n****** #" + (_0x6d3118 + 1), _0x529f90, "*********");
    console.log("账号的 id 为", _0x39b81b);
    const _0x103ce8 = await _0x566cc1(_0x367b10),
      _0x44145f = await _0x4e7ec3(_0x367b10, _0x103ce8);
    let _0x4539d8 = await _0x567544(_0x367b10, _0x44145f);
    if (_0x4539d8.errcode) {
      console.log(_0x4539d8.errcode);
    } else console.log("领取金币成功，当前金币：" + _0x4539d8.value);
    while (!_0x4539d8.errcode) {
      await _0xaa119c(1);
      _0x4539d8 = await _0x567544(_0x367b10, _0x44145f);
      if (_0x4539d8.errcode) {
        console.log(_0x4539d8.errcode);
      } else console.log("领取金币成功，当前金币：" + _0x4539d8.value);
    }
    console.log("防止挤爆了，延时 1 秒");
    await _0xaa119c(1);
  }
  process.exit(0);
}
_0x98343b();
function _0x2eb139(_0x5e7b3a, _0x4c0bb9) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0xf2919e {
    constructor(_0xcde1e2) {
      this.env = _0xcde1e2;
    }
    ["send"](_0x1943a2, _0x29b722 = "GET") {
      _0x1943a2 = "string" == typeof _0x1943a2 ? {
        "url": _0x1943a2
      } : _0x1943a2;
      let _0x3c3dcd = this.get;
      return "POST" === _0x29b722 && (_0x3c3dcd = this.post), new Promise((_0x3324db, _0x2b60ea) => {
        _0x3c3dcd.call(this, _0x1943a2, (_0xb0c06d, _0x219044, _0x484b56) => {
          _0xb0c06d ? _0x2b60ea(_0xb0c06d) : _0x3324db(_0x219044);
        });
      });
    }
    ["get"](_0x48816b) {
      return this.send.call(this.env, _0x48816b);
    }
    ["post"](_0x1a95c6) {
      return this.send.call(this.env, _0x1a95c6, "POST");
    }
  }
  return new class {
    constructor(_0x42f315, _0x283525) {
      this.name = _0x42f315;
      this.http = new _0xf2919e(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x283525);
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
    ["toObj"](_0x4145f1, _0x20ef6f = null) {
      try {
        return JSON.parse(_0x4145f1);
      } catch {
        return _0x20ef6f;
      }
    }
    ["toStr"](_0x3f094a, _0x4905f9 = null) {
      try {
        return JSON.stringify(_0x3f094a);
      } catch {
        return _0x4905f9;
      }
    }
    ["getjson"](_0x366582, _0x47ae08) {
      let _0x1d60ab = _0x47ae08;
      const _0x1b1d1c = this.getdata(_0x366582);
      if (_0x1b1d1c) {
        try {
          _0x1d60ab = JSON.parse(this.getdata(_0x366582));
        } catch {}
      }
      return _0x1d60ab;
    }
    ["setjson"](_0xa59381, _0x3cdb91) {
      try {
        return this.setdata(JSON.stringify(_0xa59381), _0x3cdb91);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x2666a8) {
      return new Promise(_0x5f45b1 => {
        this.get({
          "url": _0x2666a8
        }, (_0x258fde, _0x32922c, _0x36d3d9) => _0x5f45b1(_0x36d3d9));
      });
    }
    ["runScript"](_0x20b7d4, _0x27c316) {
      return new Promise(_0x56c89c => {
        let _0x7bf14f = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x7bf14f = _0x7bf14f ? _0x7bf14f.replace(/\n/g, "").trim() : _0x7bf14f;
        let _0x48b321 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x48b321 = _0x48b321 ? 1 * _0x48b321 : 20;
        _0x48b321 = _0x27c316 && _0x27c316.timeout ? _0x27c316.timeout : _0x48b321;
        const [_0x3ac756, _0x18bb95] = _0x7bf14f.split("@"),
          _0x9ebadc = {
            "url": "http://" + _0x18bb95 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x20b7d4,
              "mock_type": "cron",
              "timeout": _0x48b321
            },
            "headers": {
              "X-Key": _0x3ac756,
              "Accept": "*/*"
            }
          };
        this.post(_0x9ebadc, (_0x5e4e49, _0x3a6e52, _0x303bfb) => _0x56c89c(_0x303bfb));
      }).catch(_0x4b4cce => this.logErr(_0x4b4cce));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x110620 = this.path.resolve(this.dataFile),
          _0x5b97e8 = this.path.resolve(process.cwd(), this.dataFile),
          _0x21b832 = this.fs.existsSync(_0x110620),
          _0x3015e1 = !_0x21b832 && this.fs.existsSync(_0x5b97e8);
        if (!_0x21b832 && !_0x3015e1) return {};
        {
          const _0x538270 = _0x21b832 ? _0x110620 : _0x5b97e8;
          try {
            return JSON.parse(this.fs.readFileSync(_0x538270));
          } catch (_0x215db) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x1ce6ff = this.path.resolve(this.dataFile),
          _0x3592ac = this.path.resolve(process.cwd(), this.dataFile),
          _0x51e9da = this.fs.existsSync(_0x1ce6ff),
          _0x5e19a6 = !_0x51e9da && this.fs.existsSync(_0x3592ac),
          _0x31ea90 = JSON.stringify(this.data);
        _0x51e9da ? this.fs.writeFileSync(_0x1ce6ff, _0x31ea90) : _0x5e19a6 ? this.fs.writeFileSync(_0x3592ac, _0x31ea90) : this.fs.writeFileSync(_0x1ce6ff, _0x31ea90);
      }
    }
    ["lodash_get"](_0x63bb24, _0x43ce6d, _0x33da7e) {
      const _0x56b409 = _0x43ce6d.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x458562 = _0x63bb24;
      for (const _0x313d50 of _0x56b409) if (_0x458562 = Object(_0x458562)[_0x313d50], void 0 === _0x458562) return _0x33da7e;
      return _0x458562;
    }
    ["lodash_set"](_0x22eab7, _0x1d9eae, _0x35549b) {
      return Object(_0x22eab7) !== _0x22eab7 ? _0x22eab7 : (Array.isArray(_0x1d9eae) || (_0x1d9eae = _0x1d9eae.toString().match(/[^.[\]]+/g) || []), _0x1d9eae.slice(0, -1).reduce((_0x17bcfd, _0x57f5a4, _0x4ff9a0) => Object(_0x17bcfd[_0x57f5a4]) === _0x17bcfd[_0x57f5a4] ? _0x17bcfd[_0x57f5a4] : _0x17bcfd[_0x57f5a4] = Math.abs(_0x1d9eae[_0x4ff9a0 + 1]) >> 0 == +_0x1d9eae[_0x4ff9a0 + 1] ? [] : {}, _0x22eab7)[_0x1d9eae[_0x1d9eae.length - 1]] = _0x35549b, _0x22eab7);
    }
    ["getdata"](_0x138b98) {
      let _0x1ac998 = this.getval(_0x138b98);
      if (/^@/.test(_0x138b98)) {
        const [, _0x314a92, _0x3262fc] = /^@(.*?)\.(.*?)$/.exec(_0x138b98),
          _0x24819e = _0x314a92 ? this.getval(_0x314a92) : "";
        if (_0x24819e) try {
          const _0x3e88a7 = JSON.parse(_0x24819e);
          _0x1ac998 = _0x3e88a7 ? this.lodash_get(_0x3e88a7, _0x3262fc, "") : _0x1ac998;
        } catch (_0x4a2c81) {
          _0x1ac998 = "";
        }
      }
      return _0x1ac998;
    }
    ["setdata"](_0x4506ce, _0x51c873) {
      let _0x428282 = false;
      if (/^@/.test(_0x51c873)) {
        const [, _0x4f7b4a, _0x2988e2] = /^@(.*?)\.(.*?)$/.exec(_0x51c873),
          _0x29a16f = this.getval(_0x4f7b4a),
          _0x477cc9 = _0x4f7b4a ? "null" === _0x29a16f ? null : _0x29a16f || "{}" : "{}";
        try {
          const _0x31b685 = JSON.parse(_0x477cc9);
          this.lodash_set(_0x31b685, _0x2988e2, _0x4506ce);
          _0x428282 = this.setval(JSON.stringify(_0x31b685), _0x4f7b4a);
        } catch (_0x142d3a) {
          const _0x5e5832 = {};
          this.lodash_set(_0x5e5832, _0x2988e2, _0x4506ce);
          _0x428282 = this.setval(JSON.stringify(_0x5e5832), _0x4f7b4a);
        }
      } else _0x428282 = this.setval(_0x4506ce, _0x51c873);
      return _0x428282;
    }
    ["getval"](_0x2cd53f) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x2cd53f) : this.isQuanX() ? $prefs.valueForKey(_0x2cd53f) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2cd53f]) : this.data && this.data[_0x2cd53f] || null;
    }
    ["setval"](_0x3fcfdd, _0x3f90cc) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x3fcfdd, _0x3f90cc) : this.isQuanX() ? $prefs.setValueForKey(_0x3fcfdd, _0x3f90cc) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3f90cc] = _0x3fcfdd, this.writedata(), !0) : this.data && this.data[_0x3f90cc] || null;
    }
    ["initGotEnv"](_0x3abb1f) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x3abb1f && (_0x3abb1f.headers = _0x3abb1f.headers ? _0x3abb1f.headers : {}, void 0 === _0x3abb1f.headers.Cookie && void 0 === _0x3abb1f.cookieJar && (_0x3abb1f.cookieJar = this.ckjar));
    }
    ["get"](_0x2adf5a, _0x42df0f = () => {}) {
      _0x2adf5a.headers && (delete _0x2adf5a.headers["Content-Type"], delete _0x2adf5a.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x2adf5a.headers = _0x2adf5a.headers || {}, Object.assign(_0x2adf5a.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x2adf5a, (_0x277a7a, _0x91c30f, _0x44d206) => {
        !_0x277a7a && _0x91c30f && (_0x91c30f.body = _0x44d206, _0x91c30f.statusCode = _0x91c30f.status);
        _0x42df0f(_0x277a7a, _0x91c30f, _0x44d206);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x2adf5a.opts = _0x2adf5a.opts || {}, Object.assign(_0x2adf5a.opts, {
        "hints": !1
      })), $task.fetch(_0x2adf5a).then(_0x1bf5de => {
        const {
          statusCode: _0xfe4762,
          statusCode: _0x30b849,
          headers: _0x218a10,
          body: _0x186b99
        } = _0x1bf5de;
        _0x42df0f(null, {
          "status": _0xfe4762,
          "statusCode": _0x30b849,
          "headers": _0x218a10,
          "body": _0x186b99
        }, _0x186b99);
      }, _0x3d1261 => _0x42df0f(_0x3d1261))) : this.isNode() && (this.initGotEnv(_0x2adf5a), this.got(_0x2adf5a).on("redirect", (_0x326871, _0x1163b0) => {
        try {
          if (_0x326871.headers["set-cookie"]) {
            const _0x46960c = _0x326871.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x46960c && this.ckjar.setCookieSync(_0x46960c, null);
            _0x1163b0.cookieJar = this.ckjar;
          }
        } catch (_0x5645a6) {
          this.logErr(_0x5645a6);
        }
      }).then(_0x3c5481 => {
        const {
          statusCode: _0x340a84,
          statusCode: _0x5406dd,
          headers: _0x3b4c2e,
          body: _0x5cb1aa
        } = _0x3c5481;
        _0x42df0f(null, {
          "status": _0x340a84,
          "statusCode": _0x5406dd,
          "headers": _0x3b4c2e,
          "body": _0x5cb1aa
        }, _0x5cb1aa);
      }, _0xdcae4f => {
        const {
          message: _0x578dce,
          response: _0x3f9877
        } = _0xdcae4f;
        _0x42df0f(_0x578dce, _0x3f9877, _0x3f9877 && _0x3f9877.body);
      }));
    }
    ["post"](_0x4b9349, _0x7c141c = () => {}) {
      if (_0x4b9349.body && _0x4b9349.headers && !_0x4b9349.headers["Content-Type"] && (_0x4b9349.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x4b9349.headers && delete _0x4b9349.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x4b9349.headers = _0x4b9349.headers || {}, Object.assign(_0x4b9349.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x4b9349, (_0x2cae0d, _0x30aa27, _0x2691fe) => {
          !_0x2cae0d && _0x30aa27 && (_0x30aa27.body = _0x2691fe, _0x30aa27.statusCode = _0x30aa27.status);
          _0x7c141c(_0x2cae0d, _0x30aa27, _0x2691fe);
        });
      } else {
        if (this.isQuanX()) {
          _0x4b9349.method = "POST";
          this.isNeedRewrite && (_0x4b9349.opts = _0x4b9349.opts || {}, Object.assign(_0x4b9349.opts, {
            "hints": !1
          }));
          $task.fetch(_0x4b9349).then(_0x3406b7 => {
            const {
              statusCode: _0x3b5d28,
              statusCode: _0x4985a7,
              headers: _0x50d908,
              body: _0x3ece7e
            } = _0x3406b7;
            _0x7c141c(null, {
              "status": _0x3b5d28,
              "statusCode": _0x4985a7,
              "headers": _0x50d908,
              "body": _0x3ece7e
            }, _0x3ece7e);
          }, _0x22cafd => _0x7c141c(_0x22cafd));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x4b9349);
            const {
              url: _0x4b1a4e,
              ..._0x5e0510
            } = _0x4b9349;
            this.got.post(_0x4b1a4e, _0x5e0510).then(_0x3ca266 => {
              const {
                statusCode: _0x2cc718,
                statusCode: _0x432831,
                headers: _0xdce893,
                body: _0x12fc0a
              } = _0x3ca266;
              _0x7c141c(null, {
                "status": _0x2cc718,
                "statusCode": _0x432831,
                "headers": _0xdce893,
                "body": _0x12fc0a
              }, _0x12fc0a);
            }, _0x115f7e => {
              const {
                message: _0x3b920a,
                response: _0x440f44
              } = _0x115f7e;
              _0x7c141c(_0x3b920a, _0x440f44, _0x440f44 && _0x440f44.body);
            });
          }
        }
      }
    }
    ["time"](_0x2d417e, _0x56c9d5 = null) {
      const _0x2acf29 = _0x56c9d5 ? new Date(_0x56c9d5) : new Date();
      let _0x4ff4ba = {
        "M+": _0x2acf29.getMonth() + 1,
        "d+": _0x2acf29.getDate(),
        "H+": _0x2acf29.getHours(),
        "m+": _0x2acf29.getMinutes(),
        "s+": _0x2acf29.getSeconds(),
        "q+": Math.floor((_0x2acf29.getMonth() + 3) / 3),
        "S": _0x2acf29.getMilliseconds()
      };
      /(y+)/.test(_0x2d417e) && (_0x2d417e = _0x2d417e.replace(RegExp.$1, (_0x2acf29.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x269d7c in _0x4ff4ba) new RegExp("(" + _0x269d7c + ")").test(_0x2d417e) && (_0x2d417e = _0x2d417e.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4ff4ba[_0x269d7c] : ("00" + _0x4ff4ba[_0x269d7c]).substr(("" + _0x4ff4ba[_0x269d7c]).length)));
      return _0x2d417e;
    }
    ["msg"](_0x3ddf4f = _0x5e7b3a, _0x9d2ff1 = "", _0x2dfbf0 = "", _0x1e43b1) {
      const _0x75dc36 = _0x5d1ac1 => {
        if (!_0x5d1ac1) return _0x5d1ac1;
        if ("string" == typeof _0x5d1ac1) return this.isLoon() ? _0x5d1ac1 : this.isQuanX() ? {
          "open-url": _0x5d1ac1
        } : this.isSurge() ? {
          "url": _0x5d1ac1
        } : void 0;
        if ("object" == typeof _0x5d1ac1) {
          if (this.isLoon()) {
            let _0xc5ba70 = _0x5d1ac1.openUrl || _0x5d1ac1.url || _0x5d1ac1["open-url"],
              _0xec24cb = _0x5d1ac1.mediaUrl || _0x5d1ac1["media-url"];
            return {
              "openUrl": _0xc5ba70,
              "mediaUrl": _0xec24cb
            };
          }
          if (this.isQuanX()) {
            let _0x305443 = _0x5d1ac1["open-url"] || _0x5d1ac1.url || _0x5d1ac1.openUrl,
              _0x41fe2a = _0x5d1ac1["media-url"] || _0x5d1ac1.mediaUrl;
            return {
              "open-url": _0x305443,
              "media-url": _0x41fe2a
            };
          }
          if (this.isSurge()) {
            let _0x5df0f0 = _0x5d1ac1.url || _0x5d1ac1.openUrl || _0x5d1ac1["open-url"];
            return {
              "url": _0x5df0f0
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x3ddf4f, _0x9d2ff1, _0x2dfbf0, _0x75dc36(_0x1e43b1)) : this.isQuanX() && $notify(_0x3ddf4f, _0x9d2ff1, _0x2dfbf0, _0x75dc36(_0x1e43b1))), !this.isMuteLog) {
        let _0x171d0e = ["", "==============📣系统通知📣=============="];
        _0x171d0e.push(_0x3ddf4f);
        _0x9d2ff1 && _0x171d0e.push(_0x9d2ff1);
        _0x2dfbf0 && _0x171d0e.push(_0x2dfbf0);
        console.log(_0x171d0e.join("\n"));
        this.logs = this.logs.concat(_0x171d0e);
      }
    }
    ["log"](..._0x5ebd60) {
      _0x5ebd60.length > 0 && (this.logs = [...this.logs, ..._0x5ebd60]);
      console.log(_0x5ebd60.join(this.logSeparator));
    }
    ["logErr"](_0x48f93a, _0x263df3) {
      const _0x1ed5f6 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x1ed5f6 ? this.log("", "❗️" + this.name + ", 错误!", _0x48f93a.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x48f93a);
    }
    ["wait"](_0x378697) {
      return new Promise(_0x47a1af => setTimeout(_0x47a1af, _0x378697));
    }
    ["done"](_0x95a635 = {}) {
      const _0x2caa65 = new Date().getTime(),
        _0x5884d4 = (_0x2caa65 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x5884d4 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x95a635);
    }
  }(_0x5e7b3a, _0x4c0bb9);
}