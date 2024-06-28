//Fri Jun 28 2024 06:36:09 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("🍕达美乐披萨"),
  ckName = "dlm_data";
$.host = ($.isNode() ? process.env.dlm_game : $.getdata("dlm_game")) || "";
$.gameDate = ($.isNode() ? process.env.dlm_date : $.getdata("dlm_date")) || "";
$.score = $.toObj($.isNode() ? process.env.dlm_score : $.getdata("dlm_score")) || "false";
$.rewardList = $.toObj($.isNode() ? process.env.dlm_reward : $.getdata("dlm_reward")) || {};
const Notify = 1;
const notify = $.isNode() ? require("./sendNotify") : "";
let userCookie = $.toObj($.isNode() ? process.env[ckName] : $.getdata(ckName)) || [];
$.userList = [];
$.userIdx = 0;
$.notifyMsg = [];
async function main() {
  console.log("\n================== 任务 ==================\n");
  if (!$.host) {
    return $.msg($.name, "⚠️ Script run error", "未获取活动id，请先完成一次游戏获取token");
  }
  $.host = $.host.split(",");
  $.log("当前拥有的活动id: " + $.host);
  for (let _0xbbd4b2 of $.userList) {
    try {
      if (_0xbbd4b2.ckStatus) {
        $.log("========================================");
        let _0x4fee01 = [];
        for (let _0x1c868f of $.host) {
          console.log("账号[" + _0xbbd4b2.index + "][" + _0x1c868f + "] 开始执行任务...");
          _0xbbd4b2.drawStatus = true;
          let _0x275c1a = await _0xbbd4b2.getGameSatuts(_0x1c868f);
          if (!_0x275c1a) {
            continue;
          }
          await _0xbbd4b2.getGameSatuts(_0x1c868f);
          await _0xbbd4b2.todoList(_0x1c868f);
          _0x4fee01.push(_0x1c868f);
          $.log("========================================");
        }
        $.log("所有活动处理完毕");
        $.setdata(_0x4fee01.join(","), "dlm_game");
      } else {
        $.notifyMsg.push("❌账号" + _0xbbd4b2.index + " >> Check ck error!");
      }
    } catch (_0xc4dfd8) {
      $.log(_0xc4dfd8);
    }
  }
  $.setjson($.rewardList, "dlm_reward");
}
class UserInfo {
  constructor(_0x588007) {
    this.index = ++$.userIdx;
    this.openid = "" + _0x588007.userId;
    this.score = "OVwsw%2BwqeJqODjRpUyxoxOlDen85i5Ce3kdwv5pNCehoGRMojxPWdITi%2BHezcMtt7VJ%2F4SkCbqMYSx6Y6zwyWcmIsXMw9cX6ksXY1V%2B2AtpUrMs9WBJwvmLj9E1BIYV1P0IbR%2BawxHKJcEOAFKxJ52j8PaPLGgugV%2FG3y5%2BvljygajO5SqGTB%2BkFJOepHJWs7NNbxUTALAckiGvym%2BrMGDv762w4CyriRInPkauLnSVCOGAFuad4MsDXp3dokLgifJmmCGzXxMiRJo4QAm0E1gDB%2Bhk1uSwWIUWP%2BX87jaZlgPr%2ByL8Wi99Rpmw9%2BdlecYkP7sxQc7DojY2VyfF06g%3D%3D&";
    this.body = _0x588007.token;
    this.ckStatus = true;
    this.drawStatus = true;
    this.sharingStatus = true;
    const _0xe7ca23 = {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.42(0x18002a2c) NetType/WIFI Language/zh_CN",
      "Content-Type": "application/x-www-form-urlencoded"
    };
    this.headers = _0xe7ca23;
  }
  getRandomTime() {
    return randomInt(1000, 3000);
  }
  async gameDone(_0x4e8c17) {
    try {
      let _0x58fd04 = $.score != "false" ? $.queryStr({
        openid: this.openid,
        score: this.score,
        tempId: "null"
      }) : this.body;
      const _0x2aa6d1 = {
        url: "https://game.dominos.com.cn/" + _0x4e8c17 + "/game/gameDone",
        headers: this.headers,
        body: _0x58fd04
      };
      let _0x588aac = await httpRequest(_0x2aa6d1);
      if (_0x588aac?.["statusCode"] == 0) {
        console.log("账号[" + this.index + "][" + _0x4e8c17 + "] 抽奖成功!获得" + _0x588aac?.["content"]?.["name"]);
        let _0x5bf348 = _0x588aac?.["content"]["name"]["replace"](/(奖\-[1-9]\：|奖\：)/g, "奖 ")["replace"]("一张", "")["replace"]("1份", "")["replace"]("1张", "");
        $.rewardList[_0x588aac?.["content"]["id"]] = _0x5bf348;
      } else {
        console.log("账号[" + this.index + "][" + _0x4e8c17 + "] " + _0x588aac?.["errorMessage"]);
        this.drawStatus = false;
      }
    } catch (_0x35fc9f) {
      console.log(_0x35fc9f);
    }
  }
  async sharingDone(_0x55de80) {
    try {
      const _0x5e330b = {
        url: "https://game.dominos.com.cn/" + _0x55de80 + "/game/sharingDone",
        headers: this.headers,
        body: "openid=" + this.openid + "&from=1&target=0"
      };
      let _0x513359 = await httpRequest(_0x5e330b);
      if (_0x513359?.["statusCode"] == 0) {
        console.log("账号[" + this.index + "][" + _0x55de80 + "] 分享成功,抽奖次数+" + _0x513359?.["content"]?.["gameNum"]);
      } else {
        console.log("账号[" + this.index + "][" + _0x55de80 + "] " + _0x513359?.["errorMessage"]);
        this.sharingStatus = false;
      }
    } catch (_0x240928) {
      console.log(_0x240928);
    }
  }
  async todoList(_0x107013) {
    let _0x4e09e2 = 1;
    do {
      await this.sharingDone(_0x107013);
    } while (this.sharingStatus && _0x4e09e2++ <= 10);
    _0x4e09e2 = 0;
    do {
      await this.gameDone(_0x107013);
    } while (this.drawStatus && _0x4e09e2++ <= 12);
    await this.point(_0x107013);
  }
  async getGameSatuts(_0x57a236) {
    try {
      const _0x8c7ec9 = {
        url: "https://game.dominos.com.cn/" + _0x57a236 + "/getUser?openid=" + this.openid,
        headers: this.headers
      };
      let _0x18edd3 = (await httpRequest(_0x8c7ec9)) ?? "本期活动已经结束";
      if (_0x18edd3?.["statusCode"] == 0) {
        return true;
      }
      console.log("账号[" + this.index + "][" + _0x57a236 + "] 本期活动已结束，跳过任务");
    } catch (_0x1119b0) {
      console.log(_0x1119b0);
    }
  }
  async point(_0x1cf70b) {
    try {
      const _0xe1b1ff = {
        url: "https://game.dominos.com.cn/" + _0x1cf70b + "/game/myPrize?openid=" + this.openid + "&pageSize=1000&pageNum=1",
        headers: this.headers
      };
      let _0x10809c = await httpRequest(_0xe1b1ff);
      if (_0x10809c?.["statusCode"] == 0) {
        let _0xd2eba = $.SakuraUtils.getTotal(_0x10809c?.["content"]["filter"](_0x442a9d => parseInt(_0x442a9d.num) >= 1), "id");
        DoubleLog("账号[" + $.SakuraUtils.phone_num(_0x10809c?.["extra"]) + "][" + _0x1cf70b + "] 奖品:");
        const _0x6beb90 = {
          "001": _0x48e30e.ajnXp,
          "002": _0x48e30e.eMGKB,
          "003": _0x48e30e.TusiI,
          "004": _0x48e30e.feqjr,
          "005": _0x48e30e.QoviK
        };
        _0x6beb90["001"] = "一等奖";
        _0x6beb90["002"] = "二等奖";
        _0x6beb90["003"] = "三等奖";
        _0x6beb90["004"] = "四等奖";
        _0x6beb90["005"] = "五等奖";
        _0x6beb90["005"] = "五等奖";
        _0x6beb90["006"] = "五等奖";
        _0x6beb90["007"] = "五等奖";
        _0x6beb90["008"] = "五等奖";
        _0x6beb90["009"] = "五等奖";
        let _0x3e32b6 = _0x6beb90;
        _0xd2eba = _0xd2eba.sort((_0x1d4dbe, _0x2da2f6) => parseInt(_0x1d4dbe.name) - parseInt(_0x2da2f6.name));
        for (let _0x2d70bf of _0xd2eba) {
          $.rewardList[_0x2d70bf.name] ? DoubleLog($.rewardList[_0x2d70bf.name] + "x" + _0x2d70bf.value) : DoubleLog(_0x3e32b6[_0x2d70bf.name] + " 免费未知奖品券x" + _0x2d70bf.value);
        }
      } else {
        console.log("❌" + _0x10809c?.["errorMessage"]);
      }
    } catch (_0x3b913e) {
      console.log(_0x3b913e);
    }
  }
}
async function getCookie() {
  try {
    if ($request && $request.method === "OPTIONS") {
      return;
    }
    const {
      openid: _0x304c21
    } = UrlToJson($request.body) ?? {};
    let _0x23315f = /^https:\/\/game\.dominos\.com\.cn\/(.+)\/game\/gameDone/;
    const [, _0xfa3eb6] = _0x23315f.exec($request.url);
    if (!($request.body && _0xfa3eb6)) {
      throw new Error("❌获取签到Cookie失败!");
    }
    const _0x48819b = {
      userId: _0x304c21,
      token: $request.body,
      userName: _0x304c21
    };
    userCookie = $.toObj(userCookie) || [];
    const _0x47ac11 = userCookie.findIndex(_0x2c17b1 => _0x2c17b1.userId == _0x48819b.userId);
    userCookie[_0x47ac11] ? userCookie[_0x47ac11] = _0x48819b : userCookie.push(_0x48819b);
    $.setdata(_0xfa3eb6, "dlm_game");
    $.setjson(userCookie, ckName);
    $.msg($.name, "🎉获取签到Cookie成功!", "openid: " + _0x304c21 + "\ngame: " + _0xfa3eb6);
  } catch (_0x2cb067) {
    throw _0x2cb067;
  }
}
!(async () => {
  if (typeof $request != "undefined") {
    await getCookie();
    return;
  }
  if (!(await loadModule())) {
    throw new Error("❌加载模块失败，请检查模块路径是否正常");
  }
  await checkEnv();
  await main();
})().catch(_0x22d900 => $.notifyMsg.push(_0x22d900.message || _0x22d900)).finally(async () => {
  await SendMsg($.notifyMsg.join("\n"));
  $.done();
});
function UrlToJson(_0x2bbe5d) {
  let _0x4d8917 = _0x2bbe5d.split("&"),
    _0x27119e = {};
  for (let _0x280d66 of _0x4d8917) {
    let _0x5e97fc = _0x280d66.split("="),
      _0x39535e = _0x5e97fc[0],
      _0x1e6b54 = decodeURIComponent(_0x5e97fc[1]);
    _0x27119e["" + _0x39535e] = _0x1e6b54;
  }
  return _0x27119e;
}
function DoubleLog(_0x4e8eae) {
  $.isNode() ? _0x4e8eae && (console.log("" + _0x4e8eae), $.notifyMsg.push("" + _0x4e8eae)) : (console.log("" + _0x4e8eae), $.notifyMsg.push("" + _0x4e8eae));
}
function randomInt(_0x1c8171, _0x358abd) {
  return Math.round(Math.random() * (_0x358abd - _0x1c8171) + _0x1c8171);
}
async function SendMsg(_0x148fec) {
  if (!_0x148fec) {
    return;
  }
  Notify > 0 ? $.isNode() ? await notify.sendNotify($.name, _0x148fec) : $.msg($.name, $.gameDate ? "活动时间:" + $.gameDate : "", _0x148fec) : console.log(_0x148fec);
}
async function loadModule() {
  $.SakuraUtils = await loadSakuraUtils();
  return $.SakuraUtils ? true : false;
}
async function checkEnv() {
  try {
    if (!userCookie?.length) {
      throw new Error("no available accounts found");
    }
    $.log(`\n[INFO] 检测到 ${userCookie?.length ?? 0} 个账号\n`);
    $.userList.push(...userCookie.map(o => new UserInfo(o)).filter(Boolean));
  } catch (o) {
    throw o;
  }
}
async function loadSakuraUtils() {
  let code = ($.isNode() ? process.env.SakuraUtil_code : $.getdata("SakuraUtil_code")) || "";
  if (code && Object.keys(code).length) {
    console.log(`✅${$.name}:缓存中存在SakuraUtil代码,跳过下载`);
    eval(code);
    return creatUtils();
  }
  console.log(`🚀${$.name}:开始下载SakuraUtil代码`);
  return new Promise(async resolve => {
    $.getScript("https://cdn.jsdelivr.net/gh/Sliverkiss/QuantumultX@main/Utils/SakuraUtil.js").then(fn => {
      $.setdata(fn, "SakuraUtil_code");
      eval(fn);
      const SakuraUtil = creatUtils();
      console.log(`✅SakuraUtil加载成功,请继续`);
      resolve(SakuraUtil);
    });
  });
}
function httpRequest(options, method) {
  typeof method === "undefined" ? "body" in options ? method = "post" : method = "get" : method = method;
  return new Promise(resolve => {
    $[method](options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${method}请求失败`);
          $.logErr(err);
        } else {
          if (data) {
            typeof $.toObj(data) == "object" ? data = $.toObj(data) : data = data;
            resolve(data);
          } else {
            console.log(`请求api返回数据为空，请检查自身原因`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function Env(t, e) {
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
        s.call(this, t, (t, s, o) => {
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
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
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
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
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
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
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
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
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
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
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
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}