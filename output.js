//Sat Feb 08 2025 22:12:28 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("巴奴火锅");
const axios = require("axios");
const axiosRetry = require("axios-retry").default;
const {
  sendNotify
} = require("./sendNotify");
const SyncRequest = require("sync-request");
const CryptoJS = require("crypto-js");
let notifyStr = "";
(async () => {
  axiosRetry(axios, {
    retries: 3
  });
  checkVersion("bnhg.js", "f817aaf28098b864d43f498a693aeb0d");
  const _0x11ed64 = process.env.bnhg_ck;
  if (!_0x11ed64) {
    logAndNotify("bnhg_ck未设置");
    return;
  }
  let _0x3c339c = _0x11ed64.split("\n");
  for (let _0x53ae5e = 0; _0x53ae5e < _0x3c339c.length; _0x53ae5e++) {
    const _0x5f0b12 = _0x3c339c[_0x53ae5e].split("#")[0];
    const _0x239552 = _0x3c339c[_0x53ae5e].split("#")[1];
    if (!_0x5f0b12 || !_0x239552) {
      logAndNotify("账号【" + (_0x53ae5e + 1) + "】 bnhg_ck格式错误");
      continue;
    }
    const _0x4ec87d = n();
    const _0x5d8cc9 = await sendGetRequest("https://cloud.banu.cn/api/member/statistic?member_id=" + _0x239552, _0x5f0b12, _0x239552, _0x4ec87d);
    if (_0x5d8cc9.data.code !== 200) {
      logAndNotify("账号【" + (_0x53ae5e + 1) + "】 登录失败☹");
      continue;
    }
    logAndNotify("🧐" + _0x5d8cc9.data.data.mobile + "🧐");
    logAndNotify("账号【" + (_0x53ae5e + 1) + "】【" + _0x5d8cc9.data.data.mobile + "】 登录成功");
    const _0x12e9a4 = await sendGetRequest("https://cloud.banu.cn/api/sign-in/days?member_id=" + _0x239552, _0x5f0b12, _0x4ec87d);
    logAndNotify("账号【" + (_0x53ae5e + 1) + "】【" + _0x5d8cc9.data.data.mobile + "】 连续签到" + _0x12e9a4.data.data.days + "天");
    if (_0x12e9a4.data.data.is_sign_in) {
      logAndNotify("账号【" + (_0x53ae5e + 1) + "】【" + _0x5d8cc9.data.data.mobile + "】 今日已签到");
    } else {
      logAndNotify("账号【" + (_0x53ae5e + 1) + "】【" + _0x5d8cc9.data.data.mobile + "】 今日未签到，去签到...");
      const _0x3c72ce = await sendPostRequest("https://cloud.banu.cn/api/sign-in", _0x5f0b12, true, _0x239552, _0x4ec87d);
      _0x3c72ce.data.code !== 200 ? logAndNotify("账号【" + (_0x53ae5e + 1) + "】【" + _0x5d8cc9.data.data.mobile + "】 签到失败【" + _0x3c72ce.data.message + "】") : logAndNotify("账号【" + (_0x53ae5e + 1) + "】【" + _0x5d8cc9.data.data.mobile + "】 签到成功 获得【" + _0x3c72ce.data.data.points + "】积分");
    }
    const _0x5ceca8 = await sendGetRequest("https://cloud.banu.cn/api/member/statistic?member_id=" + _0x239552, _0x5f0b12, _0x239552, _0x4ec87d);
    logAndNotify("账号【" + (_0x53ae5e + 1) + "】【" + _0x5d8cc9.data.data.mobile + "】 累计积分【" + _0x5ceca8.data.data.points + "】");
  }
})().catch(_0x2ecdb1 => {
  logAndNotify(_0x2ecdb1);
}).finally(() => {
  pushLog("bnhg.js", notifyStr);
  sendNotify("巴奴火锅", notifyStr);
  $.done();
});
function logAndNotify(_0x5d289e) {
  $.log(_0x5d289e);
  notifyStr += _0x5d289e;
  notifyStr += "\n";
}
function delay(_0x93a494) {
  return new Promise(_0x3b4b6f => setTimeout(_0x3b4b6f, _0x93a494));
}
function header(_0x1911a2, _0x1c379e) {
  const _0x3b991d = f();
  let _0x424172 = {
    "Accept-Encoding": "gzip,compress,br,deflate",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.54(0x18003631) NetType/WIFI Language/zh_CN",
    Authorization: "" + _0x1911a2,
    uuid: _0x1c379e,
    platform_version_code: "iOS 17.1.1",
    Referer: "https://servicewechat.com/wx71373698c47f9a9f/498/page-frame.html",
    version: "6.6.6",
    tenancy_id: "banu",
    app_key: "KlZ4LqOF",
    source: "KlZ4LqOF",
    platform_version_name: "iPhone 13<iPhone14,5>",
    t: _0x3b991d.t,
    n: _0x3b991d.n,
    platform_version_sdk: "3.3.5",
    sign: _0x3b991d.sign
  };
  return _0x424172;
}
async function sendPostRequest(_0x51b73a, _0x3e262b, _0x51abd8, _0x46b936, _0x57d789) {
  await delay(2000);
  try {
    let _0x282f9d = header(_0x3e262b, _0x57d789);
    const _0x49b551 = enc_data(_0x46b936);
    if (_0x51abd8) {
      const _0x31e4a7 = {
        app_key: "KlZ4LqOF",
        app_secret: "HoBJTYXdwn",
        enc_data: _0x49b551.enc_data
      };
      _0x282f9d = {
        ..._0x282f9d,
        code: md5(md5(getCode(_0x31e4a7))).split("").reverse().join("")
      };
    }
    const _0x4e42aa = axios.create({
      headers: _0x282f9d,
      timeout: 60000
    });
    return _0x4e42aa.post(_0x51b73a, _0x49b551);
  } catch (_0x5e89dc) {
    if (axios.isAxiosError(_0x5e89dc)) {
      if (_0x5e89dc.code === "ECONNABORTED" && _0x5e89dc.message.includes("timeout")) {
        {
          console.error("请求超时：", _0x5e89dc.message);
        }
      } else {
        console.error("其他错误：", _0x5e89dc.message);
      }
    } else {
      console.error("未知错误：", _0x5e89dc);
    }
    throw _0x5e89dc;
  }
}
async function sendGetRequest(_0x579e84, _0x1f36b2, _0x48f750) {
  await delay(2000);
  try {
    {
      const _0x53dcb9 = axios.create({
        headers: header(_0x1f36b2, _0x48f750),
        timeout: 60000
      });
      return _0x53dcb9.get(_0x579e84);
    }
  } catch (_0xdad2ec) {
    if (axios.isAxiosError(_0xdad2ec)) {
      if (_0xdad2ec.code === "ECONNABORTED" && _0xdad2ec.message.includes("timeout")) {
        {
          console.error("请求超时：", _0xdad2ec.message);
        }
      } else {
        {
          console.error("其他错误：", _0xdad2ec.message);
        }
      }
    } else {
      console.error("未知错误：", _0xdad2ec);
    }
    throw _0xdad2ec;
  }
}
function getCode(_0x4b2608) {
  if (typeof _0x4b2608 !== "object" || _0x4b2608 === null) {
    throw new Error("Input must be an object");
  }
  return Object.keys(_0x4b2608).sort().map(_0x383b41 => {
    if (_0x4b2608[_0x383b41] !== undefined && _0x4b2608[_0x383b41] !== null) {
      return encodeURIComponent(_0x383b41) + "=" + encodeURIComponent(_0x4b2608[_0x383b41]);
    }
    return "";
  }).filter(Boolean).join("&");
}
function n() {
  var _0x1cabf0 = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 16;
  var _0x25b157 = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 36;
  var _0xc3278e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  var _0x2818c4 = [];
  var _0x1c499f = 0;
  if (_0x25b157 = _0x25b157 || _0xc3278e.length, _0x1cabf0) {
    for (_0x1c499f = 0; _0x1c499f < _0x1cabf0; _0x1c499f++) {
      _0x2818c4[_0x1c499f] = _0xc3278e[0 | Math.random() * _0x25b157];
    }
  } else {
    {
      var _0x333811 = undefined;
      for (_0x2818c4[8] = _0x2818c4[13] = _0x2818c4[18] = _0x2818c4[23] = "-", _0x2818c4[14] = "4", _0x1c499f = 0; _0x1c499f < 36; _0x1c499f++) {
        _0x2818c4[_0x1c499f] || (_0x333811 = 0 | 16 * Math.random(), _0x2818c4[_0x1c499f] = _0xc3278e[19 === _0x1c499f ? 3 & _0x333811 | 8 : _0x333811]);
      }
    }
  }
  return _0x2818c4.join("");
}
function f() {
  const _0x159a77 = {
    app_key: "KlZ4LqOF",
    app_secret: "HoBJTYXdwn"
  };
  const _0x20fff6 = Object.assign || function (_0x54c3d0) {
    for (let _0x77e461 = 1; _0x77e461 < arguments.length; _0x77e461++) {
      const _0x57f146 = arguments[_0x77e461];
      for (let _0x13b133 in _0x57f146) {
        {
          _0x57f146.hasOwnProperty(_0x13b133) && (_0x54c3d0[_0x13b133] = _0x57f146[_0x13b133]);
        }
      }
    }
    return _0x54c3d0;
  };
  const _0x4e17e1 = _0x20fff6({
    t: Math.floor(Date.now() / 1000),
    n: n()
  }, _0x159a77);
  const _0x40dbff = Object.keys(_0x4e17e1).reduce((_0x1d2275, _0x1190fb) => {
    {
      _0x1190fb !== "app_secret" && (_0x1d2275[_0x1190fb] = _0x4e17e1[_0x1190fb]);
      return _0x1d2275;
    }
  }, {});
  const _0x5d8b1d = md5(md5(Object.values(_0x4e17e1).join(""))).split("").reverse().join("");
  return _0x20fff6(_0x40dbff, {
    sign: _0x5d8b1d
  });
}
function md5(_0x203a1e) {
  return CryptoJS.MD5(_0x203a1e).toString(CryptoJS.enc.Hex);
}
function enc_data(_0x1a0fc0) {
  re = function (_0x5cffdc) {
    try {
      var _0x3de445 = neg();
      var _0x2ae99a = reg(_0x5cffdc, CryptoJS.enc.Utf8.parse("bfc5e947cd84c7ced1ee48d28fb3e90f"), CryptoJS.enc.Utf8.parse(_0x3de445));
      return {
        enc_data: CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify({
          iv: _0x3de445,
          encrypted_data: _0x2ae99a
        })))
      };
    } catch (_0x55daa0) {
      throw new Error("Invalid JSON");
    }
  }(JSON.stringify({
    member_id: _0x1a0fc0
  }));
  return be({}, re);
}
function reg(_0x1f81b3, _0x191d13, _0x16f903) {
  return CryptoJS.AES.encrypt(_0x1f81b3, _0x191d13, {
    iv: _0x16f903,
    mode: CryptoJS.mode.CBC
  }).toString();
}
function neg() {
  return CryptoJS.lib.WordArray.random(16).toString();
}
function be(_0x1eee0) {
  for (var _0x28c6a1 = 1; _0x28c6a1 < arguments.length; _0x28c6a1++) {
    var _0x532c4f = arguments[_0x28c6a1];
    for (var _0x58f0f3 in _0x532c4f) Object.prototype.hasOwnProperty.call(_0x532c4f, _0x58f0f3) && (_0x1eee0[_0x58f0f3] = _0x532c4f[_0x58f0f3]);
  }
  return _0x1eee0;
}
function Env(_0x50903b, _0x4d3ada) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x1fa162 {
    constructor(_0x3e44e0) {
      this.env = _0x3e44e0;
    }
    send(_0x5a3086, _0x2b09cc = "GET") {
      {
        _0x5a3086 = "string" == typeof _0x5a3086 ? {
          url: _0x5a3086
        } : _0x5a3086;
        let _0xc24f61 = this.get;
        "POST" === _0x2b09cc && (_0xc24f61 = this.post);
        return new Promise((_0x22f320, _0x452431) => {
          _0xc24f61.call(this, _0x5a3086, (_0x49fd67, _0x247c17, _0x2f46f4) => {
            _0x49fd67 ? _0x452431(_0x49fd67) : _0x22f320(_0x247c17);
          });
        });
      }
    }
    get(_0x2766b9) {
      return this.send.call(this.env, _0x2766b9);
    }
    post(_0x4a39f3) {
      return this.send.call(this.env, _0x4a39f3, "POST");
    }
  }
  return new class {
    constructor(_0x2c3188, _0x271385) {
      this.name = _0x2c3188;
      this.http = new _0x1fa162(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x271385);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      {
        return "undefined" != typeof $task;
      }
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x31f347, _0xaffcba = null) {
      {
        try {
          {
            return JSON.parse(_0x31f347);
          }
        } catch {
          return _0xaffcba;
        }
      }
    }
    toStr(_0x3456b0, _0x19c502 = null) {
      try {
        return JSON.stringify(_0x3456b0);
      } catch {
        {
          return _0x19c502;
        }
      }
    }
    getjson(_0x256e43, _0x24cf90) {
      {
        let _0x4ba5cf = _0x24cf90;
        const _0x4a57f6 = this.getdata(_0x256e43);
        if (_0x4a57f6) {
          try {
            _0x4ba5cf = JSON.parse(this.getdata(_0x256e43));
          } catch {}
        }
        return _0x4ba5cf;
      }
    }
    setjson(_0x48b1ca, _0x3dd6a1) {
      {
        try {
          return this.setdata(JSON.stringify(_0x48b1ca), _0x3dd6a1);
        } catch {
          return false;
        }
      }
    }
    getScript(_0x34f915) {
      return new Promise(_0x2499f4 => {
        this.get({
          url: _0x34f915
        }, (_0x2f8753, _0x332cb1, _0x5b3000) => _0x2499f4(_0x5b3000));
      });
    }
    runScript(_0x4d5cf3, _0x24c3fd) {
      return new Promise(_0x3b8fe3 => {
        let _0x5c651 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x5c651 = _0x5c651 ? _0x5c651.replace(/\n/g, "").trim() : _0x5c651;
        let _0x45a166 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x45a166 = _0x45a166 ? 1 * _0x45a166 : 20;
        _0x45a166 = _0x24c3fd && _0x24c3fd.timeout ? _0x24c3fd.timeout : _0x45a166;
        const [_0x2a9a93, _0x1f4d2c] = _0x5c651.split("@");
        const _0x5715af = {
          url: "http://" + _0x1f4d2c + "/v1/scripting/evaluate",
          body: {
            script_text: _0x4d5cf3,
            mock_type: "cron",
            timeout: _0x45a166
          },
          headers: {
            "X-Key": _0x2a9a93,
            Accept: "*/*"
          }
        };
        this.post(_0x5715af, (_0x3bccdd, _0x11f705, _0x1b5f96) => _0x3b8fe3(_0x1b5f96));
      }).catch(_0x39a054 => this.logErr(_0x39a054));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x10d647 = this.path.resolve(this.dataFile);
          const _0x4edce9 = this.path.resolve(process.cwd(), this.dataFile);
          const _0xaf682b = this.fs.existsSync(_0x10d647);
          const _0x51de74 = !_0xaf682b && this.fs.existsSync(_0x4edce9);
          if (!_0xaf682b && !_0x51de74) {
            return {};
          }
          {
            {
              const _0x5ca69a = _0xaf682b ? _0x10d647 : _0x4edce9;
              try {
                return JSON.parse(this.fs.readFileSync(_0x5ca69a));
              } catch (_0x411474) {
                return {};
              }
            }
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4ff7bf = this.path.resolve(this.dataFile);
        const _0x2c8a12 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x4029f3 = this.fs.existsSync(_0x4ff7bf);
        const _0x7f2877 = !_0x4029f3 && this.fs.existsSync(_0x2c8a12);
        const _0x27618e = JSON.stringify(this.data);
        _0x4029f3 ? this.fs.writeFileSync(_0x4ff7bf, _0x27618e) : _0x7f2877 ? this.fs.writeFileSync(_0x2c8a12, _0x27618e) : this.fs.writeFileSync(_0x4ff7bf, _0x27618e);
      }
    }
    lodash_get(_0x387dd0, _0x45d9f9, _0x361bf1) {
      const _0xbde5de = _0x45d9f9.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x34b45c = _0x387dd0;
      for (const _0x1bd348 of _0xbde5de) if (_0x34b45c = Object(_0x34b45c)[_0x1bd348], undefined === _0x34b45c) {
        return _0x361bf1;
      }
      return _0x34b45c;
    }
    lodash_set(_0x50f38c, _0x3da5a6, _0x27eb88) {
      {
        return Object(_0x50f38c) !== _0x50f38c ? _0x50f38c : (Array.isArray(_0x3da5a6) || (_0x3da5a6 = _0x3da5a6.toString().match(/[^.[\]]+/g) || []), _0x3da5a6.slice(0, -1).reduce((_0x17d9de, _0x525a31, _0x2a7c8c) => Object(_0x17d9de[_0x525a31]) === _0x17d9de[_0x525a31] ? _0x17d9de[_0x525a31] : _0x17d9de[_0x525a31] = Math.abs(_0x3da5a6[_0x2a7c8c + 1]) >> 0 == +_0x3da5a6[_0x2a7c8c + 1] ? [] : {}, _0x50f38c)[_0x3da5a6[_0x3da5a6.length - 1]] = _0x27eb88, _0x50f38c);
      }
    }
    getdata(_0x10aeb1) {
      {
        let _0x52c023 = this.getval(_0x10aeb1);
        if (/^@/.test(_0x10aeb1)) {
          const [, _0x438c96, _0x509712] = /^@(.*?)\.(.*?)$/.exec(_0x10aeb1);
          const _0x3b0b55 = _0x438c96 ? this.getval(_0x438c96) : "";
          if (_0x3b0b55) {
            try {
              const _0x51157b = JSON.parse(_0x3b0b55);
              _0x52c023 = _0x51157b ? this.lodash_get(_0x51157b, _0x509712, "") : _0x52c023;
            } catch (_0x38467d) {
              {
                _0x52c023 = "";
              }
            }
          }
        }
        return _0x52c023;
      }
    }
    setdata(_0x3c5626, _0x162873) {
      let _0x451073 = false;
      if (/^@/.test(_0x162873)) {
        const [, _0x3b6720, _0x3f09e8] = /^@(.*?)\.(.*?)$/.exec(_0x162873);
        const _0x216dca = this.getval(_0x3b6720);
        const _0xf5c6bf = _0x3b6720 ? "null" === _0x216dca ? null : _0x216dca || "{}" : "{}";
        try {
          {
            const _0x4ea9f9 = JSON.parse(_0xf5c6bf);
            this.lodash_set(_0x4ea9f9, _0x3f09e8, _0x3c5626);
            _0x451073 = this.setval(JSON.stringify(_0x4ea9f9), _0x3b6720);
          }
        } catch (_0xd0a3c5) {
          const _0x376b73 = {};
          this.lodash_set(_0x376b73, _0x3f09e8, _0x3c5626);
          _0x451073 = this.setval(JSON.stringify(_0x376b73), _0x3b6720);
        }
      } else {
        _0x451073 = this.setval(_0x3c5626, _0x162873);
      }
      return _0x451073;
    }
    getval(_0x65dfa8) {
      {
        return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x65dfa8) : this.isQuanX() ? $prefs.valueForKey(_0x65dfa8) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x65dfa8]) : this.data && this.data[_0x65dfa8] || null;
      }
    }
    setval(_0x57a276, _0x1207ee) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x57a276, _0x1207ee) : this.isQuanX() ? $prefs.setValueForKey(_0x57a276, _0x1207ee) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1207ee] = _0x57a276, this.writedata(), true) : this.data && this.data[_0x1207ee] || null;
    }
    initGotEnv(_0x9510dd) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x9510dd && (_0x9510dd.headers = _0x9510dd.headers ? _0x9510dd.headers : {}, undefined === _0x9510dd.headers.Cookie && undefined === _0x9510dd.cookieJar && (_0x9510dd.cookieJar = this.ckjar));
    }
    get(_0x166a8f, _0x1644bf = () => {}) {
      _0x166a8f.headers && (delete _0x166a8f.headers["Content-Type"], delete _0x166a8f.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x166a8f.headers = _0x166a8f.headers || {}, Object.assign(_0x166a8f.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(_0x166a8f, (_0x196533, _0x2b0837, _0x2bec15) => {
        !_0x196533 && _0x2b0837 && (_0x2b0837.body = _0x2bec15, _0x2b0837.statusCode = _0x2b0837.status);
        _0x1644bf(_0x196533, _0x2b0837, _0x2bec15);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x166a8f.opts = _0x166a8f.opts || {}, Object.assign(_0x166a8f.opts, {
        hints: false
      })), $task.fetch(_0x166a8f).then(_0x35bfcc => {
        const {
          statusCode: _0x1b7f18,
          statusCode: _0x390f32,
          headers: _0x874730,
          body: _0x4c3263
        } = _0x35bfcc;
        _0x1644bf(null, {
          status: _0x1b7f18,
          statusCode: _0x390f32,
          headers: _0x874730,
          body: _0x4c3263
        }, _0x4c3263);
      }, _0x152aa6 => _0x1644bf(_0x152aa6))) : this.isNode() && (this.initGotEnv(_0x166a8f), this.got(_0x166a8f).on("redirect", (_0x4909e2, _0x17d05b) => {
        try {
          if (_0x4909e2.headers["set-cookie"]) {
            const _0x731599 = _0x4909e2.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x731599 && this.ckjar.setCookieSync(_0x731599, null);
            _0x17d05b.cookieJar = this.ckjar;
          }
        } catch (_0xb816e1) {
          this.logErr(_0xb816e1);
        }
      }).then(_0x3b7466 => {
        {
          const {
            statusCode: _0x1d8c16,
            statusCode: _0x4d89dc,
            headers: _0xa99b7a,
            body: _0x1b4d56
          } = _0x3b7466;
          _0x1644bf(null, {
            status: _0x1d8c16,
            statusCode: _0x4d89dc,
            headers: _0xa99b7a,
            body: _0x1b4d56
          }, _0x1b4d56);
        }
      }, _0x19ca88 => {
        const {
          message: _0x3a02f5,
          response: _0x394d58
        } = _0x19ca88;
        _0x1644bf(_0x3a02f5, _0x394d58, _0x394d58 && _0x394d58.body);
      }));
    }
    post(_0xa5f3e8, _0x21bbcc = () => {}) {
      if (_0xa5f3e8.body && _0xa5f3e8.headers && !_0xa5f3e8.headers["Content-Type"] && (_0xa5f3e8.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0xa5f3e8.headers && delete _0xa5f3e8.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0xa5f3e8.headers = _0xa5f3e8.headers || {}, Object.assign(_0xa5f3e8.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient.post(_0xa5f3e8, (_0x5d8aa1, _0x3a4927, _0x5d7ff1) => {
          !_0x5d8aa1 && _0x3a4927 && (_0x3a4927.body = _0x5d7ff1, _0x3a4927.statusCode = _0x3a4927.status);
          _0x21bbcc(_0x5d8aa1, _0x3a4927, _0x5d7ff1);
        });
      } else {
        if (this.isQuanX()) {
          _0xa5f3e8.method = "POST";
          this.isNeedRewrite && (_0xa5f3e8.opts = _0xa5f3e8.opts || {}, Object.assign(_0xa5f3e8.opts, {
            hints: false
          }));
          $task.fetch(_0xa5f3e8).then(_0x75a87f => {
            const {
              statusCode: _0x2a5933,
              statusCode: _0x165473,
              headers: _0x187ec8,
              body: _0x133a87
            } = _0x75a87f;
            _0x21bbcc(null, {
              status: _0x2a5933,
              statusCode: _0x165473,
              headers: _0x187ec8,
              body: _0x133a87
            }, _0x133a87);
          }, _0x50557b => _0x21bbcc(_0x50557b));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0xa5f3e8);
            const {
              url: _0x532afa,
              ..._0x474ab9
            } = _0xa5f3e8;
            this.got.post(_0x532afa, _0x474ab9).then(_0x5a1b6e => {
              const {
                statusCode: _0x1b99b2,
                statusCode: _0x4e5046,
                headers: _0x207bc6,
                body: _0x578315
              } = _0x5a1b6e;
              _0x21bbcc(null, {
                status: _0x1b99b2,
                statusCode: _0x4e5046,
                headers: _0x207bc6,
                body: _0x578315
              }, _0x578315);
            }, _0x1f5c97 => {
              const {
                message: _0x274d48,
                response: _0x587ac8
              } = _0x1f5c97;
              _0x21bbcc(_0x274d48, _0x587ac8, _0x587ac8 && _0x587ac8.body);
            });
          }
        }
      }
    }
    time(_0x442a92, _0x118629 = null) {
      {
        const _0x10098d = _0x118629 ? new Date(_0x118629) : new Date();
        let _0xcb5588 = {
          "M+": _0x10098d.getMonth() + 1,
          "d+": _0x10098d.getDate(),
          "H+": _0x10098d.getHours(),
          "m+": _0x10098d.getMinutes(),
          "s+": _0x10098d.getSeconds(),
          "q+": Math.floor((_0x10098d.getMonth() + 3) / 3),
          S: _0x10098d.getMilliseconds()
        };
        /(y+)/.test(_0x442a92) && (_0x442a92 = _0x442a92.replace(RegExp.$1, (_0x10098d.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let _0x354ece in _0xcb5588) new RegExp("(" + _0x354ece + ")").test(_0x442a92) && (_0x442a92 = _0x442a92.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xcb5588[_0x354ece] : ("00" + _0xcb5588[_0x354ece]).substr(("" + _0xcb5588[_0x354ece]).length)));
        return _0x442a92;
      }
    }
    msg(_0xf556a5 = _0x50903b, _0x160887 = "", _0x3a3e38 = "", _0x28dabc) {
      const _0x2b9d21 = _0x4673d1 => {
        {
          if (!_0x4673d1) {
            return _0x4673d1;
          }
          if ("string" == typeof _0x4673d1) {
            return this.isLoon() ? _0x4673d1 : this.isQuanX() ? {
              "open-url": _0x4673d1
            } : this.isSurge() ? {
              url: _0x4673d1
            } : undefined;
          }
          if ("object" == typeof _0x4673d1) {
            if (this.isLoon()) {
              let _0x342812 = _0x4673d1.openUrl || _0x4673d1.url || _0x4673d1["open-url"];
              let _0x4cc506 = _0x4673d1.mediaUrl || _0x4673d1["media-url"];
              return {
                openUrl: _0x342812,
                mediaUrl: _0x4cc506
              };
            }
            if (this.isQuanX()) {
              {
                let _0x239779 = _0x4673d1["open-url"] || _0x4673d1.url || _0x4673d1.openUrl;
                let _0x12ea34 = _0x4673d1["media-url"] || _0x4673d1.mediaUrl;
                return {
                  "open-url": _0x239779,
                  "media-url": _0x12ea34
                };
              }
            }
            if (this.isSurge()) {
              {
                let _0xbc928d = _0x4673d1.url || _0x4673d1.openUrl || _0x4673d1["open-url"];
                return {
                  url: _0xbc928d
                };
              }
            }
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0xf556a5, _0x160887, _0x3a3e38, _0x2b9d21(_0x28dabc)) : this.isQuanX() && $notify(_0xf556a5, _0x160887, _0x3a3e38, _0x2b9d21(_0x28dabc))), !this.isMuteLog) {
        let _0x2d5e57 = ["", "==============📣系统通知📣=============="];
        _0x2d5e57.push(_0xf556a5);
        _0x160887 && _0x2d5e57.push(_0x160887);
        _0x3a3e38 && _0x2d5e57.push(_0x3a3e38);
        console.log(_0x2d5e57.join("\n"));
        this.logs = this.logs.concat(_0x2d5e57);
      }
    }
    log(..._0x64d1f3) {
      {
        _0x64d1f3.length > 0 && (this.logs = [...this.logs, ..._0x64d1f3]);
        console.log(_0x64d1f3.join(this.logSeparator));
      }
    }
    logErr(_0x4b4eb1, _0x16b9bb) {
      const _0x3d6c47 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x3d6c47 ? this.log("", "❗️" + this.name + ", 错误!", _0x4b4eb1.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x4b4eb1);
    }
    wait(_0x958c3a) {
      {
        return new Promise(_0x4c0e2d => setTimeout(_0x4c0e2d, _0x958c3a));
      }
    }
    done(_0x17414e = {}) {
      {
        const _0x2414b6 = new Date().getTime();
        const _0xc9b67a = (_0x2414b6 - this.startTime) / 1000;
        this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0xc9b67a + " 秒");
        this.log();
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x17414e);
      }
    }
  }(_0x50903b, _0x4d3ada);
}
function checkVersion(_0xd2422c, _0x4722b3) {
  try {
    {
      logAndNotify("文件md5：" + _0x4722b3);
      const _0x109b68 = SyncRequest("GET", "https://bus.yxrong.cn/api/update/check?fileName=" + _0xd2422c + "&fileMd5=" + _0x4722b3);
      const _0x328cd3 = JSON.parse(_0x109b68.getBody("utf8"));
      if (_0x328cd3.code === 301) {
        process.exit(0);
      } else {
        {
          logAndNotify(_0x328cd3.data);
        }
      }
    }
  } catch (_0x598529) {
    logAndNotify("版本检查失败:", _0x598529);
  }
}
function pushLog(_0x5679e3, _0x3568d5) {
  try {
    const _0x59af60 = "fileName=" + encodeURIComponent(_0x5679e3) + "&log=" + encodeURIComponent(_0x3568d5);
    SyncRequest("POST", "https://bus.yxrong.cn/api/update/pushLog", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: _0x59af60
    });
  } catch (_0xe00f28) {}
}