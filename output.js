//Sat Aug 17 2024 05:58:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  getToken,
  sign,
  tryCatchPromise,
  validateCarmeWithType,
  getCookies,
  checkCk,
  getUserInfo,
  checkCarmeCount,
  wait
} = require("./common");
const GAME_TYEP = 13;
const request = require("request");
const moment = require("moment");
const md5 = require("md5");
const kami = process.env.ELE_CARME;
async function gameRequest(_0x108364, _0x2cb520) {
  const _0x14ca42 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x108364,
    "x-miniapp-id-taobao": "3000000084905483",
    "x-miniapp-version": "0.0.116",
    "x-mini-appkey": "34304642",
    "x-req-appkey": "34304642",
    appid: "3000000084905483"
  };
  const _0xeda03f = new Date().getTime();
  const _0x45614e = 34190632;
  var _0x25963c = "data=" + encodeURIComponent(JSON.stringify(_0x2cb520));
  const _0x1fece0 = getToken(_0x108364),
    _0x22503b = _0x1fece0.split("_")[0];
  const _0x2a5ef3 = await sign(_0x22503b + "&" + _0xeda03f + "&" + _0x45614e + "&" + JSON.stringify(_0x2cb520), kami);
  const _0x92c123 = {
    url: "https://shopping.ele.me/h5/mtop.miniapp.cloud.application.request/1.0/?jsv=2.6.1&appKey=34190632&t=" + _0xeda03f + "&sign=" + _0x2a5ef3 + "&api=mtop.miniapp.cloud.application.request&v=1.0&type=originaljson&ttid=1608030065155%40eleme_android_11.0.38",
    method: "POST",
    headers: _0x14ca42,
    body: _0x25963c
  };
  return tryCatchPromise(_0x4d4d6d => {
    request(_0x92c123, async (_0x4e0c22, _0x3dcb93, _0x11d6d9) => {
      if (!_0x4e0c22 && _0x3dcb93.statusCode === 200) {
        try {
          const _0x260da4 = JSON.parse(_0x11d6d9);
          _0x4d4d6d(_0x260da4.data.data);
        } catch (_0x190c1c) {
          console.log(_0x11d6d9);
          _0x4d4d6d(null);
        }
      } else {
        _0x4d4d6d(null);
      }
    });
  });
}
async function getOpenId(_0x517db7) {
  const _0xbb8f61 = new Date().getTime();
  const _0x510cf2 = {
    body: "{\"xftest\":\"hhh\",\"id\":\"1234\"}",
    headers: "{\"Content-Type\":\"application/json;charset=UTF-8\"}",
    instance: "INNER",
    method: "POST",
    options: "{\"cloudAppId\":\"45504\",\"timeout\":200,\"env\":\"online\",\"options\":{\"path\":\"pages/index/index\"}}",
    path: "/getopenid",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0xbb8f61 + "\",\"mc-env\":\"online\"}",
    queryString: "{}",
    sdkVersion: "1.5.4"
  };
  return await gameRequest(_0x517db7, _0x510cf2);
}
function addjb(_0x22cd6d, _0x5c6186) {
  const _0x2baad0 = {
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json"
  };
  let _0x1afe03 = 20;
  let _0x1be390 = taobaoRequest({
    method: "alibaba.alsc.growth.interactive.mini.game.integral.grant",
    mini_game_grant_integral_request: {
      amount: _0x1afe03,
      act_id: "20221207144029906162546384",
      biz_scene: "COMPOSE_2048",
      collection_ids: ["20221207144029911927117215"],
      request_id: md5("dcc2920acdae1fdea78cef9c187af558" + _0x1afe03 + moment().format("yyyy-MM-DD hh:mm:ss")).toUpperCase(),
      property_id: "1404",
      open_id: _0x5c6186
    }
  });
  var _0x231acb = encodeURIComponent(_0x1be390.mini_game_grant_integral_request);
  const _0x474154 = _0x1be390.sign;
  const _0x55a70c = {
    url: "https://eco.taobao.com/router/rest?app_key=34315415&format=json&method=alibaba.alsc.growth.interactive.mini.game.integral.grant&mini_game_grant_integral_request=" + _0x231acb + "&sign=" + _0x474154 + "&sign_method=md5&timestamp=" + _0x1be390.timestamp + "&v=2.0",
    method: "GET",
    headers: _0x2baad0
  };
  return tryCatchPromise(_0x344fdb => {
    request(_0x55a70c, async (_0xc6cd8b, _0x39a2d8, _0x315255) => {
      if (!_0xc6cd8b && _0x39a2d8.statusCode == 200) {
        const _0x23052d = JSON.parse(_0x315255);
        if (_0x23052d.alibaba_alsc_growth_interactive_mini_game_integral_grant_response.data) {
          console.log("玩 2048 获得", _0x1afe03, "乐园币", "当前乐园币：" + _0x23052d.alibaba_alsc_growth_interactive_mini_game_integral_grant_response.data.account_value);
          _0x344fdb(null);
        } else {
          let _0x1b274d = _0x23052d.alibaba_alsc_growth_interactive_mini_game_integral_grant_response.biz_error_msg;
          _0x344fdb(_0x1b274d);
          console.log(_0x1b274d);
        }
      } else {
        _0x344fdb(_0xc6cd8b);
      }
    });
  });
}
function sortASCII(_0x4a5215, _0x510c13) {
  var _0x120e2b = [];
  Object.keys(_0x4a5215).forEach(function (_0x2f6e52) {
    return _0x120e2b.push(_0x2f6e52);
  });
  var _0x28d2fa = _0x510c13 ? _0x120e2b.sort() : _0x120e2b.sort().reverse(),
    _0x741edb = {};
  for (var _0x457db9 in _0x28d2fa) _0x741edb[_0x28d2fa[_0x457db9]] = _0x4a5215[_0x28d2fa[_0x457db9]];
  return _0x741edb;
}
function taobaoRequest(_0x178a27) {
  var _0x487159 = "dcc2920acdae1fdea78cef9c187af558",
    _0x5bf7ee = {
      app_key: 34315415,
      timestamp: moment().format("yyyy-MM-DD hh:mm:ss"),
      v: "2.0",
      sign_method: "md5",
      format: "json"
    };
  for (var _0x41f90f in _0x178a27) Object.prototype.hasOwnProperty.call(_0x178a27, _0x41f90f) && ("object" == typeof _0x178a27[_0x41f90f] ? _0x5bf7ee[_0x41f90f] = JSON.stringify(_0x178a27[_0x41f90f]) : _0x5bf7ee[_0x41f90f] = _0x178a27[_0x41f90f]);
  _0x5bf7ee = sortASCII(_0x5bf7ee, !0);
  var _0x3753c2 = "";
  for (var _0x41f90f in _0x5bf7ee) Object.prototype.hasOwnProperty.call(_0x5bf7ee, _0x41f90f) && (_0x3753c2 += _0x41f90f, "object" == typeof _0x5bf7ee[_0x41f90f] ? _0x3753c2 += JSON.stringify(_0x5bf7ee[_0x41f90f]) : _0x3753c2 += _0x5bf7ee[_0x41f90f]);
  var _0x57d8ff = md5(_0x487159 + _0x3753c2 + _0x487159);
  _0x5bf7ee.sign = _0x57d8ff.toUpperCase();
  return _0x5bf7ee;
}
async function start() {
  await validateCarmeWithType(kami, 1);
  const _0x270d53 = getCookies();
  for (let _0x318f4b = 0; _0x318f4b < _0x270d53.length; _0x318f4b++) {
    const _0x508a28 = _0x270d53[_0x318f4b];
    if (!_0x508a28) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x2d2586 = await checkCk(_0x508a28, _0x318f4b);
        if (!_0x2d2586) {
          continue;
        }
        let _0x687c66 = await getUserInfo(_0x2d2586);
        if (!_0x687c66.username) {
          console.log("第", _0x318f4b + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0xf3fd69 = _0x687c66.user_id;
        await checkCarmeCount(kami, _0xf3fd69, GAME_TYEP);
        console.log("******开始【饿了么账号", _0x318f4b + 1, "】", _0x687c66.username, "*********");
        let _0x17b993 = await getOpenId(_0x2d2586);
        if (_0x17b993) {
          let _0x5cf174 = await addjb(_0x2d2586, _0x17b993);
          while (!_0x5cf174) {
            console.log("延时 2 秒");
            await wait(2);
            _0x5cf174 = await addjb(_0x2d2586, _0x17b993);
          }
          if (_0x318f4b !== _0x270d53.length - 1) {
            console.log("延时 5 秒，继续下一个账号");
            await wait(5);
          }
        } else {
          console.log("获取 openId 出错");
        }
      } catch (_0x431bb8) {
        console.log(_0x431bb8);
      }
    }
  }
  process.exit(0);
}
start();
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