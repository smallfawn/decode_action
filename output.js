//Thu Jul 18 2024 06:06:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  validateCarmeWithType,
  getCookies,
  getUserInfoWithX,
  wait,
  tryCatchPromise,
  checkCk
} = require("./common.js");
const _0x1f2bbb = require("request");
const _0x35cf7b = process.env.ELE_CARME;
const _0x124113 = 23;
const _0x2ca998 = require("crypto");
const _0x3c5996 = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAntZvpNYeRv7UpTSvhzWtdVvUxPeSwfyFvV1hyhjByfc+RKLcBFHdkyI0nB4pMWcLln6zmXfhEJK+eSBovY7BR6LAP/fV+zhxTChnlMGjDwhr+E3/LEnlH24lVcIIFQaU/grflUGJHVJrCHtkJ3NPTLrit5gilviRNUSHMI+Y+PcX9HfzGCCEp1lnIPkzVrWVojtcXLjEYfdGZRijK/udICjSHNXp9No/vzrFxaH2jfk6PVLAcNXZAEGbNUdIzbfYorGdU6lf3tFJ8E2Fs1k6Q4BTFXYzkq+EejOYjHF64M5OTTKtfNcrHcZo13EDdjG5JRaKx7bGc5e5lUOSsBCWdwIDAQAB\n-----END PUBLIC KEY-----";
function _0x431873(_0x11dd81) {
  const _0x1cc592 = Buffer.from(_0x11dd81, "utf8");
  const _0x5294b6 = _0x2ca998.publicEncrypt(_0x3c5996, _0x1cc592);
  return _0x5294b6.toString("base64");
}
function _0x212620(_0x387e15) {
  if (!_0x387e15) {
    return "-1";
  }
  for (var _0x5ba7ce = _0x387e15.split(";"), _0x3f2055 = 0; _0x3f2055 < _0x5ba7ce.length; _0x3f2055++) {
    var _0x7e1a12 = _0x5ba7ce[_0x3f2055].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x7e1a12[0])) {
      return _0x7e1a12[1];
    }
  }
  return "-1";
}
const _0xda06b = async (_0x4a1fcc, _0x30435c, _0x32dc71 = 5) => {
  if (_0x32dc71 === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  const _0x25000d = _0x212620(_0x4a1fcc),
    _0x3418c5 = _0x25000d.split("_")[0];
  const _0x4e7606 = {
    carmi: _0x35cf7b,
    content: _0x431873(_0x3418c5) + _0x30435c,
    type: 1
  };
  const _0x18cd34 = {
    "content-type": "application/json"
  };
  const _0x461f5c = {
    url: "http://api.94wan.fun/new/sign",
    method: "POST",
    headers: _0x18cd34,
    body: JSON.stringify(_0x4e7606)
  };
  return tryCatchPromise(_0x285eb8 => {
    _0x1f2bbb(_0x461f5c, async (_0x2b3182, _0x25b5cd, _0x931d41) => {
      if (!_0x2b3182 && _0x25b5cd.statusCode === 200) {
        const _0xe3c0f6 = JSON.parse(_0x931d41);
        if (_0xe3c0f6.code !== 20000) {
          console.error(_0xe3c0f6.message);
          process.exit(0);
        } else {
          _0x285eb8(_0xe3c0f6.data.msg);
        }
      } else {
        if (_0x2b3182 && (_0x2b3182.message.indexOf("socket hang up") !== -1 || _0x2b3182.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await wait(2);
          _0x285eb8(await _0xda06b(_0x4a1fcc, _0x30435c, _0x32dc71 - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          _0x285eb8("");
        }
      }
    });
  });
};
async function _0x3c8059(_0xc91e4d, _0x30c44b) {
  const _0x530727 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0xc91e4d,
    "x-miniapp-id-taobao": "3000000091262411",
    "x-miniapp-version": "0.0.116",
    "x-mini-appkey": "34416858",
    "x-req-appkey": "34416858",
    appid: "3000000091262411"
  };
  const _0x331a7f = new Date().getTime();
  const _0x2d09d4 = 34190632;
  const _0xec1fc4 = "data=" + encodeURIComponent(JSON.stringify(_0x30c44b));
  const _0x39b275 = await _0xda06b(_0xc91e4d, "&" + _0x331a7f + "&" + _0x2d09d4 + "&" + JSON.stringify(_0x30c44b), _0x35cf7b);
  const _0x490b06 = {
    url: "https://shopping.ele.me/h5/mtop.miniapp.cloud.application.request/1.0/?jsv=2.6.1&appKey=34190632&t=" + _0x331a7f + "&sign=" + _0x39b275 + "&api=mtop.miniapp.cloud.application.request&v=1.0&type=originaljson&ttid=1608030065155%40eleme_android_11.0.38",
    method: "POST",
    headers: _0x530727,
    body: _0xec1fc4
  };
  return tryCatchPromise(_0x4dc1ca => {
    _0x1f2bbb(_0x490b06, async (_0x26c42a, _0x3047c1, _0x45e8d3) => {
      if (!_0x26c42a && _0x3047c1.statusCode === 200) {
        try {
          const _0x1c8f9d = JSON.parse(_0x45e8d3);
          _0x4dc1ca(_0x1c8f9d.data.data);
        } catch (_0x1a89ed) {
          console.log(_0x45e8d3);
          _0x4dc1ca(null);
        }
      } else {
        _0x4dc1ca(null);
      }
    });
  });
}
async function _0x3a98e1(_0x36bb7a, _0x36fed9, _0x5bbba1) {
  const _0x3c3761 = {
    accept: "application/json",
    "cache-control": "no-cache",
    "content-type": "application/json",
    cookie: _0x36bb7a,
    "User-Agent": "okhttp/3.14.9",
    Host: "sskz.gzppxia.com",
    startToken: "150483272097295"
  };
  const _0x523016 = {
    url: "https://sskz.gzppxia.com/" + _0x5bbba1,
    method: "POST",
    headers: _0x3c3761,
    body: JSON.stringify(_0x36fed9)
  };
  return tryCatchPromise(_0x270fa0 => {
    _0x1f2bbb(_0x523016, async (_0x2ca504, _0xd089e2, _0x429bc2) => {
      if (!_0x2ca504 && _0xd089e2.statusCode === 200) {
        try {
          const _0x3b9311 = JSON.parse(_0x429bc2);
          _0x270fa0(_0x3b9311);
        } catch (_0x201395) {
          console.log(_0x429bc2);
          _0x270fa0(null);
        }
      } else {
        _0x270fa0(null);
      }
    });
  });
}
async function _0xe659df(_0x4f9c57) {
  const _0x20eda6 = new Date().getTime();
  const _0x488142 = {
    body: "{}",
    headers: "{}",
    instance: "INNER",
    method: "GET",
    options: "{\"cloudAppId\":\"47729\",\"domain\":\"https://sskz.gzppxia.com/tt_action/\",\"timeout\":3000,\"env\":\"online\",\"options\":{\"path\":\"pages/index/index\"}}",
    path: "elmeisv.php?method=getOpenid",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x20eda6 + "\",\"mc-env\":\"online\"}",
    queryString: "{}",
    sdkVersion: "1.5.5"
  };
  const _0x164168 = await _0x3c8059(_0x4f9c57, _0x488142);
  if (_0x164168) {
    return JSON.parse(_0x164168).openid;
  }
}
async function _0x133c0c(_0x3f23d9, _0x31648b) {
  const _0x24f905 = new Date().getTime();
  const _0x51a084 = {
    handler: "login",
    auth_code: _0x31648b,
    attach: null,
    platform_id: "taoteGame2",
    channel_id: 1002,
    cver: "1.0.1",
    wx_data: {},
    imei: "",
    userId: "",
    token: "",
    ver: 1,
    send_time: _0x24f905
  };
  _0x51a084.wx_data.nickName = "曾天曼";
  _0x51a084.wx_data.gender = 2;
  _0x51a084.wx_data.avatarUrl = "elm_head_2_jpg";
  _0x51a084.wx_data.sk = "";
  _0x51a084.wx_data.platform_data = {};
  _0x51a084.wx_data.platform_data.h5openid = _0x31648b;
  const _0x4d21ea = {};
  const _0x5a26eb = await _0x3a98e1(_0x3f23d9, _0x51a084, "tt_action/20220926/action/login.php?XDEBUG_SESSION_START=PHPSTORM");
  if (_0x5a26eb) {
    _0x4d21ea.token = _0x5a26eb.token;
    _0x4d21ea.openId = _0x31648b;
    _0x4d21ea.userId = _0x5a26eb.userId;
  }
  return _0x4d21ea;
}
async function _0x8382d2(_0x2488d1, _0x467353) {
  const _0x5fe3a3 = new Date().getTime();
  const _0x17ac6a = {
    handler: "sendElmeCoin",
    elmeopenid: _0x467353.openId,
    num: 10,
    userId: _0x467353.userId,
    token: _0x467353.token,
    ver: 1,
    send_time: _0x5fe3a3
  };
  return await _0x3a98e1(_0x2488d1, _0x17ac6a, "tt_action/20220926/action/sendElmeCoin.php?XDEBUG_SESSION_START=PHPSTORM");
}
async function _0x781899() {
  await validateCarmeWithType(_0x35cf7b, 1);
  const _0x1f6b8f = getCookies("elmck");
  for (let _0x1bc07a = 0; _0x1bc07a < _0x1f6b8f.length; _0x1bc07a++) {
    let _0xcdbf89 = _0x1f6b8f[_0x1bc07a];
    _0xcdbf89 = await checkCk(_0xcdbf89, _0x1bc07a, _0x35cf7b, 1);
    if (!_0xcdbf89) {
      continue;
    }
    let _0x1fa2e4 = await getUserInfoWithX(_0xcdbf89, _0x124113);
    if (_0x1fa2e4 && _0x1fa2e4[0]) {
      console.log("第", _0x1bc07a + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    if (!_0x1fa2e4 || !_0x1fa2e4.userName) {
      continue;
    }
    const _0x46a220 = _0x1fa2e4.localId;
    let _0x1cf9b9 = _0x1fa2e4.encryptMobile;
    console.log("\n****** #" + (_0x1bc07a + 1), _0x1cf9b9, "*********");
    console.log("账号的 id 为", _0x46a220);
    const _0x34fdcf = await _0xe659df(_0xcdbf89);
    const _0x38f4c6 = await _0x133c0c(_0xcdbf89, _0x34fdcf);
    let _0x56f647 = await _0x8382d2(_0xcdbf89, _0x38f4c6);
    if (_0x56f647.errcode) {
      console.log(_0x56f647.errcode);
    } else {
      console.log("领取金币成功，当前金币：" + _0x56f647.value);
    }
    while (!_0x56f647.errcode) {
      await wait(1);
      _0x56f647 = await _0x8382d2(_0xcdbf89, _0x38f4c6);
      if (_0x56f647.errcode) {
        console.log(_0x56f647.errcode);
      } else {
        console.log("领取金币成功，当前金币：" + _0x56f647.value);
      }
    }
    console.log("防止挤爆了，延时 1 秒");
    await wait(1);
  }
  process.exit(0);
}
_0x781899();
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}