//Sat Jan 25 2025 03:43:22 GMT+0000 (Coordinated Universal Time)
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
  checkVersion("bnhg.js", "8e84c26648c434a8763c0ec678fc3cb6");
  const _0x23fc0f = process.env.bnhg_ck;
  if (!_0x23fc0f) {
    logAndNotify("bnhg_ck未设置");
    return;
  }
  let _0x2fc2d2 = _0x23fc0f.split("\n");
  for (let _0x5af604 = 0; _0x5af604 < _0x2fc2d2.length; _0x5af604++) {
    const _0x1e9f65 = _0x2fc2d2[_0x5af604].split("#")[0];
    const _0x2079b7 = _0x2fc2d2[_0x5af604].split("#")[1];
    if (!_0x1e9f65 || !_0x2079b7) {
      logAndNotify("账号【" + (_0x5af604 + 1) + "】 bnhg_ck格式错误");
      continue;
    }
    const _0x5d038a = n();
    const _0x4c13c5 = await sendGetRequest("https://cloud.banu.cn/api/member/statistic?member_id=" + _0x2079b7, _0x1e9f65, _0x2079b7, _0x5d038a);
    if (_0x4c13c5.data.code !== 200) {
      {
        logAndNotify("账号【" + (_0x5af604 + 1) + "】 登录失败☹");
        continue;
      }
    }
    logAndNotify("🧐" + _0x4c13c5.data.data.mobile + "🧐");
    logAndNotify("账号【" + (_0x5af604 + 1) + "】【" + _0x4c13c5.data.data.mobile + "】 登录成功");
    const _0x2ae069 = await sendGetRequest("https://cloud.banu.cn/api/sign-in/days?member_id=" + _0x2079b7, _0x1e9f65, _0x5d038a);
    logAndNotify("账号【" + (_0x5af604 + 1) + "】【" + _0x4c13c5.data.data.mobile + "】 连续签到" + _0x2ae069.data.data.days + "天");
    if (_0x2ae069.data.data.is_sign_in) {
      {
        logAndNotify("账号【" + (_0x5af604 + 1) + "】【" + _0x4c13c5.data.data.mobile + "】 今日已签到");
      }
    } else {
      logAndNotify("账号【" + (_0x5af604 + 1) + "】【" + _0x4c13c5.data.data.mobile + "】 今日未签到，去签到...");
      const _0x240e01 = await sendPostRequest("https://cloud.banu.cn/api/sign-in", _0x1e9f65, true, _0x2079b7, _0x5d038a);
      _0x240e01.data.code !== 200 ? logAndNotify("账号【" + (_0x5af604 + 1) + "】【" + _0x4c13c5.data.data.mobile + "】 签到失败【" + _0x240e01.data.message + "】") : logAndNotify("账号【" + (_0x5af604 + 1) + "】【" + _0x4c13c5.data.data.mobile + "】 签到成功 获得【" + _0x240e01.data.data.points + "】积分");
    }
    const _0x20d420 = await sendGetRequest("https://cloud.banu.cn/api/member/statistic?member_id=" + _0x2079b7, _0x1e9f65, _0x2079b7, _0x5d038a);
    logAndNotify("账号【" + (_0x5af604 + 1) + "】【" + _0x4c13c5.data.data.mobile + "】 累计积分【" + _0x20d420.data.data.points + "】");
  }
})().catch(_0x4f3354 => {
  logAndNotify(_0x4f3354);
}).finally(() => {
  pushLog("bnhg.js", notifyStr);
  sendNotify("巴奴火锅", notifyStr);
  $.done();
});
function logAndNotify(_0x1af738) {
  $.log(_0x1af738);
  notifyStr += _0x1af738;
  notifyStr += "\n";
}
function delay(_0x59768d) {
  return new Promise(_0x124a48 => setTimeout(_0x124a48, _0x59768d));
}
function header(_0x27b615, _0x2ca586) {
  const _0x509639 = f();
  let _0x165b47 = {
    "Accept-Encoding": "gzip,compress,br,deflate",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.54(0x18003631) NetType/WIFI Language/zh_CN",
    Authorization: "" + _0x27b615,
    uuid: _0x2ca586,
    platform_version_code: "iOS 17.1.1",
    Referer: "https://servicewechat.com/wx71373698c47f9a9f/498/page-frame.html",
    version: "6.6.6",
    tenancy_id: "banu",
    app_key: "KlZ4LqOF",
    source: "KlZ4LqOF",
    platform_version_name: "iPhone 13<iPhone14,5>",
    t: _0x509639.t,
    n: _0x509639.n,
    platform_version_sdk: "3.3.5",
    sign: _0x509639.sign
  };
  return _0x165b47;
}
async function sendPostRequest(_0x5e0a7b, _0xd50ce9, _0x571754, _0x1e092b, _0x3f9c85) {
  await delay(2000);
  try {
    {
      let _0x5ca68a = header(_0xd50ce9, _0x3f9c85);
      const _0x3bf845 = enc_data(_0x1e092b);
      if (_0x571754) {
        const _0x23d05b = {
          app_key: "KlZ4LqOF",
          app_secret: "HoBJTYXdwn",
          enc_data: _0x3bf845.enc_data
        };
        _0x5ca68a = {
          ..._0x5ca68a,
          code: md5(md5(getCode(_0x23d05b))).split("").reverse().join("")
        };
      }
      const _0x444642 = axios.create({
        headers: _0x5ca68a,
        timeout: 60000
      });
      return _0x444642.post(_0x5e0a7b, _0x3bf845);
    }
  } catch (_0xcd93fa) {
    if (axios.isAxiosError(_0xcd93fa)) {
      {
        if (_0xcd93fa.code === "ECONNABORTED" && _0xcd93fa.message.includes("timeout")) {
          {
            console.error("请求超时：", _0xcd93fa.message);
          }
        } else {
          console.error("其他错误：", _0xcd93fa.message);
        }
      }
    } else {
      console.error("未知错误：", _0xcd93fa);
    }
    throw _0xcd93fa;
  }
}
async function sendGetRequest(_0x3bf17, _0x320c69, _0x4ff367) {
  await delay(2000);
  try {
    const _0x111e15 = axios.create({
      headers: header(_0x320c69, _0x4ff367),
      timeout: 60000
    });
    return _0x111e15.get(_0x3bf17);
  } catch (_0x38ec35) {
    axios.isAxiosError(_0x38ec35) ? _0x38ec35.code === "ECONNABORTED" && _0x38ec35.message.includes("timeout") ? console.error("请求超时：", _0x38ec35.message) : console.error("其他错误：", _0x38ec35.message) : console.error("未知错误：", _0x38ec35);
    throw _0x38ec35;
  }
}
function getCode(_0x4f4d20) {
  if (typeof _0x4f4d20 !== "object" || _0x4f4d20 === null) {
    {
      throw new Error("Input must be an object");
    }
  }
  return Object.keys(_0x4f4d20).sort().map(_0x15c8c8 => {
    {
      if (_0x4f4d20[_0x15c8c8] !== undefined && _0x4f4d20[_0x15c8c8] !== null) {
        {
          return encodeURIComponent(_0x15c8c8) + "=" + encodeURIComponent(_0x4f4d20[_0x15c8c8]);
        }
      }
      return "";
    }
  }).filter(Boolean).join("&");
}
function n() {
  var _0x23fa10 = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 16;
  var _0x53e8e9 = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 36;
  var _0x3591f7 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  var _0x46c739 = [];
  var _0x39ec0c = 0;
  if (_0x53e8e9 = _0x53e8e9 || _0x3591f7.length, _0x23fa10) {
    for (_0x39ec0c = 0; _0x39ec0c < _0x23fa10; _0x39ec0c++) {
      _0x46c739[_0x39ec0c] = _0x3591f7[0 | Math.random() * _0x53e8e9];
    }
  } else {
    var _0x44e48a = undefined;
    for (_0x46c739[8] = _0x46c739[13] = _0x46c739[18] = _0x46c739[23] = "-", _0x46c739[14] = "4", _0x39ec0c = 0; _0x39ec0c < 36; _0x39ec0c++) {
      _0x46c739[_0x39ec0c] || (_0x44e48a = 0 | 16 * Math.random(), _0x46c739[_0x39ec0c] = _0x3591f7[19 === _0x39ec0c ? 3 & _0x44e48a | 8 : _0x44e48a]);
    }
  }
  return _0x46c739.join("");
}
function f() {
  const _0x3708f2 = {
    app_key: "KlZ4LqOF",
    app_secret: "HoBJTYXdwn"
  };
  const _0x486163 = Object.assign || function (_0x3ffe9f) {
    for (let _0x3020ba = 1; _0x3020ba < arguments.length; _0x3020ba++) {
      const _0x2b0504 = arguments[_0x3020ba];
      for (let _0x2e0ad2 in _0x2b0504) {
        _0x2b0504.hasOwnProperty(_0x2e0ad2) && (_0x3ffe9f[_0x2e0ad2] = _0x2b0504[_0x2e0ad2]);
      }
    }
    return _0x3ffe9f;
  };
  const _0x173172 = _0x486163({
    t: Math.floor(Date.now() / 1000),
    n: n()
  }, _0x3708f2);
  const _0x445377 = Object.keys(_0x173172).reduce((_0x4fa859, _0x30413f) => {
    _0x30413f !== "app_secret" && (_0x4fa859[_0x30413f] = _0x173172[_0x30413f]);
    return _0x4fa859;
  }, {});
  const _0x10eca4 = md5(md5(Object.values(_0x173172).join(""))).split("").reverse().join("");
  return _0x486163(_0x445377, {
    sign: _0x10eca4
  });
}
function md5(_0x59cbad) {
  return CryptoJS.MD5(_0x59cbad).toString(CryptoJS.enc.Hex);
}
function enc_data(_0x2d4496) {
  re = function (_0x42925b) {
    try {
      var _0x2c0f21 = neg();
      var _0x3187c3 = reg(_0x42925b, CryptoJS.enc.Utf8.parse("bfc5e947cd84c7ced1ee48d28fb3e90f"), CryptoJS.enc.Utf8.parse(_0x2c0f21));
      return {
        enc_data: CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify({
          iv: _0x2c0f21,
          encrypted_data: _0x3187c3
        })))
      };
    } catch (_0x92d708) {
      throw new Error("Invalid JSON");
    }
  }(JSON.stringify({
    member_id: _0x2d4496
  }));
  return be({}, re);
}
function reg(_0x236ecf, _0x5e4ebf, _0x423fff) {
  return CryptoJS.AES.encrypt(_0x236ecf, _0x5e4ebf, {
    iv: _0x423fff,
    mode: CryptoJS.mode.CBC
  }).toString();
}
function neg() {
  return CryptoJS.lib.WordArray.random(16).toString();
}
function be(_0x4959f8) {
  for (var _0x5161f0 = 1; _0x5161f0 < arguments.length; _0x5161f0++) {
    var _0x3f436a = arguments[_0x5161f0];
    for (var _0x1e34cd in _0x3f436a) Object.prototype.hasOwnProperty.call(_0x3f436a, _0x1e34cd) && (_0x4959f8[_0x1e34cd] = _0x3f436a[_0x1e34cd]);
  }
  return _0x4959f8;
}
function Env(_0x3f5575, _0xf695ba) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x2ec405 {
    constructor(_0x430a68) {
      this.env = _0x430a68;
    }
    send(_0x151210, _0x128f9f = "GET") {
      _0x151210 = "string" == typeof _0x151210 ? {
        url: _0x151210
      } : _0x151210;
      let _0x2db07c = this.get;
      "POST" === _0x128f9f && (_0x2db07c = this.post);
      return new Promise((_0x190473, _0x32f0a5) => {
        _0x2db07c.call(this, _0x151210, (_0xbe0f4a, _0x43277b, _0x288a11) => {
          _0xbe0f4a ? _0x32f0a5(_0xbe0f4a) : _0x190473(_0x43277b);
        });
      });
    }
    get(_0x18656b) {
      return this.send.call(this.env, _0x18656b);
    }
    post(_0x528b27) {
      return this.send.call(this.env, _0x528b27, "POST");
    }
  }
  return new class {
    constructor(_0x5b9d81, _0x38b31b) {
      this.name = _0x5b9d81;
      this.http = new _0x2ec405(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x38b31b);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      {
        return "undefined" != typeof module && !!module.exports;
      }
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
      {
        return "undefined" != typeof $loon;
      }
    }
    toObj(_0x2c9397, _0x5d1a62 = null) {
      {
        try {
          return JSON.parse(_0x2c9397);
        } catch {
          return _0x5d1a62;
        }
      }
    }
    toStr(_0x425669, _0x1c730c = null) {
      {
        try {
          return JSON.stringify(_0x425669);
        } catch {
          return _0x1c730c;
        }
      }
    }
    getjson(_0x1aca53, _0x5105d4) {
      let _0xc31238 = _0x5105d4;
      const _0x286cdf = this.getdata(_0x1aca53);
      if (_0x286cdf) {
        try {
          {
            _0xc31238 = JSON.parse(this.getdata(_0x1aca53));
          }
        } catch {}
      }
      return _0xc31238;
    }
    setjson(_0x29df24, _0x55f563) {
      try {
        return this.setdata(JSON.stringify(_0x29df24), _0x55f563);
      } catch {
        return false;
      }
    }
    getScript(_0x13f3d8) {
      return new Promise(_0x5b8fac => {
        {
          this.get({
            url: _0x13f3d8
          }, (_0x3ec5a6, _0x326033, _0x372807) => _0x5b8fac(_0x372807));
        }
      });
    }
    runScript(_0x3b53c5, _0x3a2da1) {
      {
        return new Promise(_0x2e05ba => {
          let _0x50e29b = this.getdata("@chavy_boxjs_userCfgs.httpapi");
          _0x50e29b = _0x50e29b ? _0x50e29b.replace(/\n/g, "").trim() : _0x50e29b;
          let _0x447b69 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
          _0x447b69 = _0x447b69 ? 1 * _0x447b69 : 20;
          _0x447b69 = _0x3a2da1 && _0x3a2da1.timeout ? _0x3a2da1.timeout : _0x447b69;
          const [_0x5221f7, _0x25740b] = _0x50e29b.split("@");
          const _0x565720 = {
            url: "http://" + _0x25740b + "/v1/scripting/evaluate",
            body: {
              script_text: _0x3b53c5,
              mock_type: "cron",
              timeout: _0x447b69
            },
            headers: {
              "X-Key": _0x5221f7,
              Accept: "*/*"
            }
          };
          this.post(_0x565720, (_0x14e5aa, _0x915637, _0x58c4c5) => _0x2e05ba(_0x58c4c5));
        }).catch(_0x390fba => this.logErr(_0x390fba));
      }
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5c5168 = this.path.resolve(this.dataFile);
        const _0x24c720 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x9513e3 = this.fs.existsSync(_0x5c5168);
        const _0x41bffd = !_0x9513e3 && this.fs.existsSync(_0x24c720);
        if (!_0x9513e3 && !_0x41bffd) {
          return {};
        }
        {
          {
            const _0x4bd1b6 = _0x9513e3 ? _0x5c5168 : _0x24c720;
            try {
              return JSON.parse(this.fs.readFileSync(_0x4bd1b6));
            } catch (_0x5726fe) {
              return {};
            }
          }
        }
      }
    }
    writedata() {
      {
        if (this.isNode()) {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x4ec1b8 = this.path.resolve(this.dataFile);
          const _0x509466 = this.path.resolve(process.cwd(), this.dataFile);
          const _0x1d3c40 = this.fs.existsSync(_0x4ec1b8);
          const _0x37e05c = !_0x1d3c40 && this.fs.existsSync(_0x509466);
          const _0x5e661e = JSON.stringify(this.data);
          _0x1d3c40 ? this.fs.writeFileSync(_0x4ec1b8, _0x5e661e) : _0x37e05c ? this.fs.writeFileSync(_0x509466, _0x5e661e) : this.fs.writeFileSync(_0x4ec1b8, _0x5e661e);
        }
      }
    }
    lodash_get(_0x217eee, _0x5dbfd0, _0x14f344) {
      const _0x526861 = _0x5dbfd0.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x6bb374 = _0x217eee;
      for (const _0x5a8108 of _0x526861) if (_0x6bb374 = Object(_0x6bb374)[_0x5a8108], undefined === _0x6bb374) {
        return _0x14f344;
      }
      return _0x6bb374;
    }
    lodash_set(_0x50d349, _0x6d6b8c, _0x6a1ce9) {
      return Object(_0x50d349) !== _0x50d349 ? _0x50d349 : (Array.isArray(_0x6d6b8c) || (_0x6d6b8c = _0x6d6b8c.toString().match(/[^.[\]]+/g) || []), _0x6d6b8c.slice(0, -1).reduce((_0x3872a8, _0x5670f8, _0x5f332e) => Object(_0x3872a8[_0x5670f8]) === _0x3872a8[_0x5670f8] ? _0x3872a8[_0x5670f8] : _0x3872a8[_0x5670f8] = Math.abs(_0x6d6b8c[_0x5f332e + 1]) >> 0 == +_0x6d6b8c[_0x5f332e + 1] ? [] : {}, _0x50d349)[_0x6d6b8c[_0x6d6b8c.length - 1]] = _0x6a1ce9, _0x50d349);
    }
    getdata(_0x7012f7) {
      {
        let _0x3b2565 = this.getval(_0x7012f7);
        if (/^@/.test(_0x7012f7)) {
          const [, _0x210db6, _0xa9f58c] = /^@(.*?)\.(.*?)$/.exec(_0x7012f7);
          const _0x2b2bc8 = _0x210db6 ? this.getval(_0x210db6) : "";
          if (_0x2b2bc8) {
            try {
              const _0x35c194 = JSON.parse(_0x2b2bc8);
              _0x3b2565 = _0x35c194 ? this.lodash_get(_0x35c194, _0xa9f58c, "") : _0x3b2565;
            } catch (_0x68bcdc) {
              _0x3b2565 = "";
            }
          }
        }
        return _0x3b2565;
      }
    }
    setdata(_0x4aefbc, _0x32274c) {
      let _0x56f345 = false;
      if (/^@/.test(_0x32274c)) {
        const [, _0x499752, _0x2b83d7] = /^@(.*?)\.(.*?)$/.exec(_0x32274c);
        const _0x406872 = this.getval(_0x499752);
        const _0x5d5e72 = _0x499752 ? "null" === _0x406872 ? null : _0x406872 || "{}" : "{}";
        try {
          {
            const _0x54a235 = JSON.parse(_0x5d5e72);
            this.lodash_set(_0x54a235, _0x2b83d7, _0x4aefbc);
            _0x56f345 = this.setval(JSON.stringify(_0x54a235), _0x499752);
          }
        } catch (_0x3241a0) {
          const _0x14f3d0 = {};
          this.lodash_set(_0x14f3d0, _0x2b83d7, _0x4aefbc);
          _0x56f345 = this.setval(JSON.stringify(_0x14f3d0), _0x499752);
        }
      } else {
        _0x56f345 = this.setval(_0x4aefbc, _0x32274c);
      }
      return _0x56f345;
    }
    getval(_0x2332a3) {
      {
        return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x2332a3) : this.isQuanX() ? $prefs.valueForKey(_0x2332a3) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2332a3]) : this.data && this.data[_0x2332a3] || null;
      }
    }
    setval(_0x820959, _0x18c6d1) {
      {
        return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x820959, _0x18c6d1) : this.isQuanX() ? $prefs.setValueForKey(_0x820959, _0x18c6d1) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x18c6d1] = _0x820959, this.writedata(), true) : this.data && this.data[_0x18c6d1] || null;
      }
    }
    initGotEnv(_0x539abe) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x539abe && (_0x539abe.headers = _0x539abe.headers ? _0x539abe.headers : {}, undefined === _0x539abe.headers.Cookie && undefined === _0x539abe.cookieJar && (_0x539abe.cookieJar = this.ckjar));
    }
    get(_0x5285ae, _0x489695 = () => {}) {
      {
        _0x5285ae.headers && (delete _0x5285ae.headers["Content-Type"], delete _0x5285ae.headers["Content-Length"]);
        this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x5285ae.headers = _0x5285ae.headers || {}, Object.assign(_0x5285ae.headers, {
          "X-Surge-Skip-Scripting": false
        })), $httpClient.get(_0x5285ae, (_0x52f20a, _0x8fac04, _0x459754) => {
          {
            !_0x52f20a && _0x8fac04 && (_0x8fac04.body = _0x459754, _0x8fac04.statusCode = _0x8fac04.status);
            _0x489695(_0x52f20a, _0x8fac04, _0x459754);
          }
        })) : this.isQuanX() ? (this.isNeedRewrite && (_0x5285ae.opts = _0x5285ae.opts || {}, Object.assign(_0x5285ae.opts, {
          hints: false
        })), $task.fetch(_0x5285ae).then(_0x19415e => {
          const {
            statusCode: _0x142a5a,
            statusCode: _0x5e6637,
            headers: _0x45b91c,
            body: _0x27196c
          } = _0x19415e;
          _0x489695(null, {
            status: _0x142a5a,
            statusCode: _0x5e6637,
            headers: _0x45b91c,
            body: _0x27196c
          }, _0x27196c);
        }, _0x55b549 => _0x489695(_0x55b549))) : this.isNode() && (this.initGotEnv(_0x5285ae), this.got(_0x5285ae).on("redirect", (_0x18bd1d, _0x2fd1c5) => {
          try {
            {
              if (_0x18bd1d.headers["set-cookie"]) {
                {
                  const _0xfb641d = _0x18bd1d.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  _0xfb641d && this.ckjar.setCookieSync(_0xfb641d, null);
                  _0x2fd1c5.cookieJar = this.ckjar;
                }
              }
            }
          } catch (_0x282fdd) {
            this.logErr(_0x282fdd);
          }
        }).then(_0x28b175 => {
          const {
            statusCode: _0x5134f3,
            statusCode: _0x440632,
            headers: _0x3e8d63,
            body: _0x2ee421
          } = _0x28b175;
          _0x489695(null, {
            status: _0x5134f3,
            statusCode: _0x440632,
            headers: _0x3e8d63,
            body: _0x2ee421
          }, _0x2ee421);
        }, _0x34abac => {
          const {
            message: _0x42e247,
            response: _0x2d866c
          } = _0x34abac;
          _0x489695(_0x42e247, _0x2d866c, _0x2d866c && _0x2d866c.body);
        }));
      }
    }
    post(_0x3d596f, _0x558383 = () => {}) {
      if (_0x3d596f.body && _0x3d596f.headers && !_0x3d596f.headers["Content-Type"] && (_0x3d596f.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x3d596f.headers && delete _0x3d596f.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x3d596f.headers = _0x3d596f.headers || {}, Object.assign(_0x3d596f.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient.post(_0x3d596f, (_0x679c7f, _0x34b9b2, _0x17a0df) => {
          !_0x679c7f && _0x34b9b2 && (_0x34b9b2.body = _0x17a0df, _0x34b9b2.statusCode = _0x34b9b2.status);
          _0x558383(_0x679c7f, _0x34b9b2, _0x17a0df);
        });
      } else {
        if (this.isQuanX()) {
          _0x3d596f.method = "POST";
          this.isNeedRewrite && (_0x3d596f.opts = _0x3d596f.opts || {}, Object.assign(_0x3d596f.opts, {
            hints: false
          }));
          $task.fetch(_0x3d596f).then(_0x32728c => {
            const {
              statusCode: _0x3d6fdf,
              statusCode: _0x16de2e,
              headers: _0x2b1b0a,
              body: _0x202608
            } = _0x32728c;
            _0x558383(null, {
              status: _0x3d6fdf,
              statusCode: _0x16de2e,
              headers: _0x2b1b0a,
              body: _0x202608
            }, _0x202608);
          }, _0x18e0fe => _0x558383(_0x18e0fe));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x3d596f);
            const {
              url: _0x51f037,
              ..._0x3ccc45
            } = _0x3d596f;
            this.got.post(_0x51f037, _0x3ccc45).then(_0x151937 => {
              {
                const {
                  statusCode: _0x5b591f,
                  statusCode: _0x2906cc,
                  headers: _0x333aeb,
                  body: _0xd5d04a
                } = _0x151937;
                _0x558383(null, {
                  status: _0x5b591f,
                  statusCode: _0x2906cc,
                  headers: _0x333aeb,
                  body: _0xd5d04a
                }, _0xd5d04a);
              }
            }, _0x143f4d => {
              const {
                message: _0x34afa0,
                response: _0x13fe97
              } = _0x143f4d;
              _0x558383(_0x34afa0, _0x13fe97, _0x13fe97 && _0x13fe97.body);
            });
          }
        }
      }
    }
    time(_0x72b1dc, _0x408cdd = null) {
      {
        const _0x319a79 = _0x408cdd ? new Date(_0x408cdd) : new Date();
        let _0x3c1b76 = {
          "M+": _0x319a79.getMonth() + 1,
          "d+": _0x319a79.getDate(),
          "H+": _0x319a79.getHours(),
          "m+": _0x319a79.getMinutes(),
          "s+": _0x319a79.getSeconds(),
          "q+": Math.floor((_0x319a79.getMonth() + 3) / 3),
          S: _0x319a79.getMilliseconds()
        };
        /(y+)/.test(_0x72b1dc) && (_0x72b1dc = _0x72b1dc.replace(RegExp.$1, (_0x319a79.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let _0x1603d4 in _0x3c1b76) new RegExp("(" + _0x1603d4 + ")").test(_0x72b1dc) && (_0x72b1dc = _0x72b1dc.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3c1b76[_0x1603d4] : ("00" + _0x3c1b76[_0x1603d4]).substr(("" + _0x3c1b76[_0x1603d4]).length)));
        return _0x72b1dc;
      }
    }
    msg(_0x4f125c = _0x3f5575, _0x4fb013 = "", _0x2e3ccd = "", _0x55650d) {
      const _0x871e6b = _0x8aa100 => {
        {
          if (!_0x8aa100) {
            return _0x8aa100;
          }
          if ("string" == typeof _0x8aa100) {
            return this.isLoon() ? _0x8aa100 : this.isQuanX() ? {
              "open-url": _0x8aa100
            } : this.isSurge() ? {
              url: _0x8aa100
            } : undefined;
          }
          if ("object" == typeof _0x8aa100) {
            {
              if (this.isLoon()) {
                let _0x2f8911 = _0x8aa100.openUrl || _0x8aa100.url || _0x8aa100["open-url"];
                let _0x4e0260 = _0x8aa100.mediaUrl || _0x8aa100["media-url"];
                return {
                  openUrl: _0x2f8911,
                  mediaUrl: _0x4e0260
                };
              }
              if (this.isQuanX()) {
                let _0x18628a = _0x8aa100["open-url"] || _0x8aa100.url || _0x8aa100.openUrl;
                let _0x1f0190 = _0x8aa100["media-url"] || _0x8aa100.mediaUrl;
                return {
                  "open-url": _0x18628a,
                  "media-url": _0x1f0190
                };
              }
              if (this.isSurge()) {
                let _0x4e7dcf = _0x8aa100.url || _0x8aa100.openUrl || _0x8aa100["open-url"];
                return {
                  url: _0x4e7dcf
                };
              }
            }
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x4f125c, _0x4fb013, _0x2e3ccd, _0x871e6b(_0x55650d)) : this.isQuanX() && $notify(_0x4f125c, _0x4fb013, _0x2e3ccd, _0x871e6b(_0x55650d))), !this.isMuteLog) {
        {
          let _0x33b025 = ["", "==============📣系统通知📣=============="];
          _0x33b025.push(_0x4f125c);
          _0x4fb013 && _0x33b025.push(_0x4fb013);
          _0x2e3ccd && _0x33b025.push(_0x2e3ccd);
          console.log(_0x33b025.join("\n"));
          this.logs = this.logs.concat(_0x33b025);
        }
      }
    }
    log(..._0x41b51b) {
      _0x41b51b.length > 0 && (this.logs = [...this.logs, ..._0x41b51b]);
      console.log(_0x41b51b.join(this.logSeparator));
    }
    logErr(_0x515d2d, _0x9d9132) {
      const _0x3a90e2 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x3a90e2 ? this.log("", "❗️" + this.name + ", 错误!", _0x515d2d.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x515d2d);
    }
    wait(_0x362d33) {
      return new Promise(_0x4e9c90 => setTimeout(_0x4e9c90, _0x362d33));
    }
    done(_0x41b2a8 = {}) {
      const _0x127aeb = new Date().getTime();
      const _0xc9e39f = (_0x127aeb - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0xc9e39f + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x41b2a8);
    }
  }(_0x3f5575, _0xf695ba);
}
function checkVersion(_0x4aebfb, _0x502bfc) {
  try {
    {
      logAndNotify("文件md5：" + _0x502bfc);
      const _0x2c19fa = SyncRequest("GET", "https://checktoke.filegear-sg.me/api/update/check?fileName=" + _0x4aebfb + "&fileMd5=" + _0x502bfc);
      const _0x562232 = JSON.parse(_0x2c19fa.getBody("utf8"));
      if (_0x562232.code === 301) {
        {
          process.exit(0);
        }
      } else {
        {
          logAndNotify(_0x562232.data);
        }
      }
    }
  } catch (_0x725a89) {
    logAndNotify("版本检查失败:", _0x725a89);
  }
}
function pushLog(_0x5c9493, _0x28ddee) {
  try {
    const _0x1983d1 = "fileName=" + encodeURIComponent(_0x5c9493) + "&log=" + encodeURIComponent(_0x28ddee);
    SyncRequest("POST", "https://checktoke.filegear-sg.me/api/update/pushLog", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: _0x1983d1
    });
  } catch (_0x832bea) {}
}