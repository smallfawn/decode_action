//Sun Aug 11 2024 06:22:13 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  getEnvsByName,
  DisableCk,
  EnableCk,
  updateEnv,
  updateEnv11,
  getEnvByUserId
} = require("./ql");
const {
  wait,
  checkCk,
  validateCarmeWithType,
  invalidCookieNotify,
  getUserInfo,
  runOne,
  getCookieMap
} = require("./common.js");
const _0x11f78e = require("moment");
function _0x543ec4(_0x3fdeea, _0x4dabab) {
  return Math.floor(Math.random() * (_0x4dabab - _0x3fdeea + 1) + _0x3fdeea);
}
function _0x389941(_0x1daaab) {
  let _0x59299c = "";
  for (let [_0x7cf76, _0x5050e8] of _0x1daaab) {
    _0x59299c += encodeURIComponent(_0x7cf76) + "=" + encodeURIComponent(_0x5050e8) + ";";
  }
  return _0x59299c;
}
async function _0x179175(_0x2afd75, _0x2c035c, _0x3898fc) {
  let _0x1723ee = await runOne(_0x2c035c, _0x3898fc);
  if (_0x1723ee && _0x1723ee.data) {
    let _0x56dfb3 = _0x1723ee.data;
    if (_0x56dfb3.code === 3000) {
      let _0x152e9a = JSON.parse(_0x56dfb3.returnValue.data);
      const _0x120021 = _0x152e9a.expires;
      const _0x3e21d8 = _0x11f78e(_0x120021 * 1000).format("YYYY-MM-DD HH:mm:ss");
      let _0xcf2e0a = getCookieMap(_0x2c035c);
      let _0x1e14a1 = JSON.parse(_0x56dfb3.returnValue.extMap.eleExt);
      for (let _0x325327 = 0; _0x325327 < _0x1e14a1.length; _0x325327++) {
        let _0x296965 = _0x1e14a1[_0x325327];
        if (_0x296965.name === "SID") {
          _0xcf2e0a.SID = _0x296965.value;
          break;
        }
      }
      let _0x5a92f2 = await runOne(_0x2c035c, _0xcf2e0a.get("SID"));
      if (!_0x5a92f2) {
        return;
      }
      _0xcf2e0a.cookie2 = _0x56dfb3.returnValue.sid;
      let _0xf79b29 = _0x389941(_0xcf2e0a);
      if (_0x2afd75.id) {
        await updateEnv11(_0xf79b29, _0x2afd75.id, _0x2afd75.remarks);
      } else {
        await updateEnv(_0xf79b29, _0x2afd75._id, _0x2afd75.remarks);
      }
      let _0x88e06c = _0xcf2e0a.get("USERID");
      let _0x2704d2 = await getEnvByUserId(_0x88e06c);
      if (_0x2704d2) {
        console.log("检测到 elmqqck，将进行同步刷新");
        if (_0x2704d2.id) {
          await updateEnv11(_0xf79b29, _0x2704d2.id, _0x2704d2.remarks, "elmqqck");
        } else {
          await updateEnv(_0xf79b29, _0x2704d2._id, _0x2704d2.remarks, "elmqqck");
        }
      }
      let _0x4bf6e8 = "刷新成功，ck 有效期为：" + _0x3e21d8;
      console.log(_0x4bf6e8);
      return _0x4bf6e8;
    } else {
      if (_0x56dfb3.message) {
        console.log(_0x56dfb3.message);
      } else {
        console.log(_0x1723ee.ret[0]);
      }
      return null;
    }
  }
}
(async function _0x1f3fe2() {
  const _0xbb1015 = process.env.ELE_CARME;
  await validateCarmeWithType(_0xbb1015, 1);
  const _0x29805f = await getEnvsByName("elmck");
  for (let _0x4b02a3 = 0; _0x4b02a3 < _0x29805f.length; _0x4b02a3++) {
    let _0x55e0ac = _0x29805f[_0x4b02a3].value;
    if (!_0x55e0ac) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        var _0x108a11 = 0;
        if (_0x29805f[_0x4b02a3]._id) {
          _0x108a11 = _0x29805f[_0x4b02a3]._id;
        }
        if (_0x29805f[_0x4b02a3].id) {
          _0x108a11 = _0x29805f[_0x4b02a3].id;
        }
        _0x55e0ac = _0x55e0ac.replace(/\s/g, "");
        let _0x36f4c6 = await checkCk(_0x55e0ac, _0x4b02a3);
        if (!_0x36f4c6) {
          let _0x2b2e4a = await _0x179175(_0x29805f[_0x4b02a3], _0x55e0ac);
          if (_0x2b2e4a && _0x2b2e4a.indexOf("刷新成功") !== -1) {
            await EnableCk(_0x108a11);
            console.log("第", _0x4b02a3 + 1, "账号正常😁\n");
          } else {
            const _0x4fe156 = await DisableCk(_0x108a11);
            if (_0x4fe156.code === 200) {
              console.log("第", _0x4b02a3 + 1, "账号失效！已🈲用");
            } else {
              console.log("第", _0x4b02a3 + 1, "账号失效！请重新登录！！！😭");
            }
            await invalidCookieNotify(_0x55e0ac, _0x29805f[_0x4b02a3].remarks);
          }
        } else {
          let _0x305e95 = await getUserInfo(_0x55e0ac);
          if (!_0x305e95.username) {
            let _0x21bffb = await _0x179175(_0x29805f[_0x4b02a3], _0x55e0ac);
            if (_0x21bffb && _0x21bffb.indexOf("刷新成功") !== -1) {
              await EnableCk(_0x108a11);
              console.log("第", _0x4b02a3 + 1, "账号正常😁\n");
            } else {
              const _0x54a0b8 = await DisableCk(_0x108a11);
              if (_0x54a0b8.code === 200) {
                console.log("第", _0x4b02a3 + 1, "账号失效！已🈲用");
              } else {
                console.log("第", _0x4b02a3 + 1, "账号失效！请重新登录！！！😭");
              }
            }
            await invalidCookieNotify(_0x55e0ac, _0x29805f[_0x4b02a3].remarks);
          } else {
            await _0x179175(_0x29805f[_0x4b02a3], _0x55e0ac, getCookieMap(_0x55e0ac).get("SID"));
            await EnableCk(_0x108a11);
            console.log("第", _0x4b02a3 + 1, "账号正常🎉🎉\n");
          }
        }
      } catch (_0xaa7585) {
        console.log(_0xaa7585);
      }
    }
    await wait(_0x543ec4(2, 3));
  }
  process.exit(0);
})();
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