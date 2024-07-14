//Sun Jul 14 2024 10:54:57 GMT+0000 (Coordinated Universal Time)
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
const _0x38436e = 12;
const _0x23dc98 = require("request");
const _0x5c30ec = process.env.ELE_CARME;
async function _0x58fe79(_0x1938bb) {
  const _0x213706 = new Date().getTime();
  const _0x1aea2b = {
    instance: "INNER",
    method: "GET",
    options: "{\"env\":\"online\"}",
    path: "/getCertificationInfo",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x213706 + "\",\"mc-env\":\"online\"}",
    queryString: "{}",
    sdkVersion: "1.5.4"
  };
  let _0x485b28 = await _0x2928b2(_0x1938bb, _0x1aea2b);
  return _0x485b28.authentication;
}
async function _0x2928b2(_0x383f4c, _0xcca1bd) {
  const _0x48e431 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x383f4c,
    "x-miniapp-id-taobao": "3000000078920071",
    "x-miniapp-version": "0.0.116",
    "x-mini-appkey": "34190632",
    "x-req-appkey": "34190632",
    appid: "3000000078920071"
  };
  const _0x5b0fb1 = new Date().getTime();
  const _0x41c3bc = 34190632;
  var _0x4f1c6f = "data=" + encodeURIComponent(JSON.stringify(_0xcca1bd));
  const _0x115515 = getToken(_0x383f4c),
    _0x322f91 = _0x115515.split("_")[0];
  const _0xe48caa = await sign(_0x322f91 + "&" + _0x5b0fb1 + "&" + _0x41c3bc + "&" + JSON.stringify(_0xcca1bd), _0x5c30ec);
  const _0x109901 = {
    url: "https://shopping.ele.me/h5/mtop.miniapp.cloud.application.request/1.0/?jsv=2.6.1&appKey=34190632&t=" + _0x5b0fb1 + "&sign=" + _0xe48caa + "&api=mtop.miniapp.cloud.application.request&v=1.0&type=originaljson&ttid=1608030065155%40eleme_android_11.0.38",
    method: "POST",
    headers: _0x48e431,
    body: _0x4f1c6f
  };
  return tryCatchPromise(_0x1993b3 => {
    _0x23dc98(_0x109901, async (_0x3c170f, _0x1a32da, _0x4ff6bf) => {
      if (!_0x3c170f && _0x1a32da.statusCode === 200) {
        try {
          const _0x2d4486 = JSON.parse(_0x4ff6bf);
          _0x1993b3(_0x2d4486.data.data);
        } catch (_0x5ad4f2) {
          console.log(_0x4ff6bf);
          _0x1993b3(null);
        }
      } else {
        _0x1993b3(null);
      }
    });
  });
}
async function _0x337fd4(_0x6031a9) {
  const _0x350363 = new Date().getTime();
  const _0x27835c = {
    instance: "INNER",
    method: "GET",
    options: "{\"env\":\"online\"}",
    path: "/enterHome",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x350363 + "\",\"mc-env\":\"online\"}",
    queryString: "{}",
    sdkVersion: "1.5.4"
  };
  const _0x1c3f14 = await _0x2928b2(_0x6031a9, _0x27835c);
  return _0x1c3f14.playerInfo;
}
async function _0x1c69aa(_0x574335) {
  const _0x4eb470 = new Date().getTime();
  const _0x308f36 = {
    instance: "INNER",
    method: "GET",
    options: "{\"env\":\"online\"}",
    path: "/getEventTasks",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x4eb470 + "\",\"mc-env\":\"online\"}",
    queryString: "{}",
    sdkVersion: "1.5.4"
  };
  let _0x43d3bb = await _0x2928b2(_0x574335, _0x308f36);
  return _0x43d3bb.taskList;
}
function _0x12353a(_0x32ea65, _0x284d9d = false) {
  let _0x1ad749 = true;
  for (let _0x279c39 = 0; _0x279c39 < _0x32ea65.length; _0x279c39++) {
    let _0x2dd094 = _0x32ea65[_0x279c39];
    let _0x46ce0e = _0x2dd094.finishStatus;
    let _0x32fd13 = _0x2dd094.actionType;
    if (_0x32fd13 === "score" && _0x284d9d) {
      continue;
    }
    if (!_0x46ce0e) {
      _0x1ad749 = _0x46ce0e;
      return _0x1ad749;
    }
  }
  return _0x1ad749;
}
function _0x1a7876(_0x44d189, _0x1c26ee) {
  var _0x4117e0 = Math.floor(Math.random() * (_0x1c26ee - _0x44d189 + 1) + _0x44d189);
  return _0x4117e0;
}
async function _0x1a5a37(_0x4953fd, _0x969ed3, _0x11435c, _0x5da44f) {
  const _0x4e16d3 = {
    body: "{\"level\":" + _0x11435c + ",\"itemBuy\":[],\"type\":\"" + _0x5da44f + "\"}",
    headers: "{\"Content-Type\":\"application/json;charset=UTF-8\"}",
    instance: "INNER",
    method: "POST",
    options: "{\"env\":\"online\"}",
    path: "/enterLevelNew",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + new Date().getTime() + "\",\"mc-env\":\"online\"}",
    queryString: "{\"playerToken\":\"" + _0x969ed3.playerId + new Date().getTime() + "\"}",
    sdkVersion: "1.5.4"
  };
  return await _0x2928b2(_0x4953fd, _0x4e16d3);
}
async function _0x20303c(_0x467ceb, _0xf5b55d) {
  const _0x523c44 = new Date().getTime();
}
async function _0x6aaa57(_0x3da9c0) {
  try {
    const _0x484e9e = new Date().getTime();
    const _0x151ffd = {
      instance: "INNER",
      method: "GET",
      options: "{\"env\":\"online\"}",
      path: "/getNewChallengeInfo",
      protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x484e9e + "\",\"mc-env\":\"online\"}",
      queryString: "{}",
      sdkVersion: "1.5.4"
    };
    const _0x385406 = await _0x2928b2(_0x3da9c0, _0x151ffd);
    return _0x385406.levelInfo.id;
  } catch (_0x77854a) {
    console.log("赛季挑战还未开始");
    return null;
  }
}
async function _0x547a04(_0x141422) {
  let _0x24ee75 = 1;
  let _0x22ee65 = await _0x337fd4(_0x141422);
  await wait(1);
  let _0x303b58 = await _0x1c69aa(_0x141422);
  if (!_0x303b58) {
    const _0x177d09 = _0x22ee65.level;
    if (_0x177d09 === 0) {
      console.log("该账号没有玩过美食摊，请玩过后在跑脚本");
    } else {
      console.log("获取任务列表失败，请稍后再试");
    }
    return;
  }
  let _0x7a0f55 = 1;
  let _0x1a93fe = 100;
  let _0x1dd6da = 100;
  let _0x1d9a36 = _0x12353a(_0x303b58);
  let _0x49ce2c = false;
  for (let _0x181dc6 = 0; _0x181dc6 < _0x303b58.length; _0x181dc6++) {
    let _0x3b7157 = _0x303b58[_0x181dc6];
    let _0x192c5d = _0x3b7157.actionType;
    let _0xb0f88c = _0x3b7157.finishStatus;
    let _0x53c01c = _0x3b7157.targetAmount;
    if (_0x192c5d === "hit" && _0xb0f88c === false) {
      _0x7a0f55 = _0x53c01c;
    } else {
      if (_0x192c5d === "customer" && _0xb0f88c === false) {
        _0x1a93fe = _0x53c01c;
      } else {
        if (_0x192c5d === "makeDishes" && _0xb0f88c === false) {
          _0x1dd6da = _0x53c01c;
        } else {
          if (_0x192c5d === "score") {
            _0x49ce2c = !_0xb0f88c;
          }
        }
      }
    }
  }
  let _0x115eea = false;
  while (!_0x1d9a36 && _0x24ee75 < 10) {
    _0x24ee75++;
    try {
      let _0x220eab = await _0x337fd4(_0x141422);
      const _0x14c26e = _0x220eab.level;
      let _0x28a68b = _0x14c26e + 1;
      await _0x20303c(_0x141422, _0x28a68b);
      let _0x2cb924 = _0x1a7876(10000, 30000);
      let _0x32e42c = _0x1a7876(30, 50);
      let _0x327bb8 = "GAME";
      if (_0x49ce2c && !_0x115eea) {
        _0x327bb8 = "DAILY_CHALLENGE";
        let _0x259099 = await _0x6aaa57(_0x141422);
        if (_0x259099 === null) {
          _0x327bb8 = "GAME";
          _0x115eea = true;
        } else {
          _0x28a68b = _0x259099;
        }
      }
      const _0x21d6c7 = await _0x1a5a37(_0x141422, _0x220eab, _0x28a68b, _0x327bb8);
      if (_0x21d6c7.errorMessage) {
        console.log(_0x21d6c7.errorMessage);
        break;
      }
      const _0xb189a8 = {
        body: "{\"level\":\"" + _0x28a68b + "\",\"finishLevel\":true,\"maxHit\":" + _0x7a0f55 + ",\"angry\":false,\"like\":" + _0x32e42c + ",\"score\":" + _0x2cb924 + ",\"playerHead\":\"https://gw.alicdn.com/imgextra/i2/O1CN01dU4q4e1xzSlu9tqun_!!6000000006514-2-tps-512-512.png\",\"playerName\":\"tb**cd6\",\"r\":[400,6000,104,4200,220,2290,98,2000,6000,420,4000,420,173,4000,630,200,210,4400,168,6000,600,400],\"levelType\":\"" + _0x327bb8 + "\",\"customerAmount\":" + _0x1a93fe + ",\"scorchDishes\": 0,\"wasteBins\":0,\"golds\":189,\"gem\":1,\"itemUsed\":[],\"itemBuy\":[],\"foods\":[{\"food\":\"doujiang\",\"amount\":" + _0x1dd6da + "},{\"food\":\"mianbing\",\"amount\":10},{\"food\":\"mianbing_shengcai_kaochang_shalajiang\",\"amount\":1},{\"food\":\"mianbing_shengcai_kaochang\",\"amount\":7},{\"food\":\"mianbing_kaochang\",\"amount\":1}]}",
        headers: "{\"Content-Type\":\"application/json;charset=UTF-8\"}",
        instance: "INNER",
        method: "POST",
        options: "{\"env\":\"online\"}",
        path: "/finishLevel",
        protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + new Date().getTime() + "\",\"mc-env\":\"online\"}",
        queryString: "{\"playerToken\":\"" + _0x220eab.playerId + new Date().getTime() + "\"}",
        sdkVersion: "1.5.4"
      };
      let _0x43d129 = await _0x2928b2(_0x141422, _0xb189a8);
      if (_0x43d129 && _0x43d129.errorMessage === "没有对应关卡") {
        console.log("你已通关");
        break;
      } else {
        if (_0x43d129.errorMessage) {
          console.log(_0x43d129.errorMessage);
          break;
        }
      }
      _0x303b58 = await _0x1c69aa(_0x141422);
      _0x1d9a36 = _0x12353a(_0x303b58, _0x115eea);
      for (let _0xe39dc = 0; _0xe39dc < _0x303b58.length; _0xe39dc++) {
        let _0x4bd0db = _0x303b58[_0xe39dc];
        let _0x172057 = _0x4bd0db.actionType;
        let _0x288835 = _0x4bd0db.finishStatus;
        let _0x56528e = _0x4bd0db.targetAmount;
        if (_0x172057 === "hit" && _0x288835 === false) {
          _0x7a0f55 = _0x56528e;
        } else {
          if (_0x172057 === "customer" && _0x288835 === false) {
            _0x1a93fe = _0x56528e;
          } else {
            if (_0x172057 === "makeDishes" && _0x288835 === false) {
              _0x1dd6da = _0x56528e;
            } else {
              if (_0x172057 === "score" && !_0x115eea) {
                _0x49ce2c = !_0x288835;
              }
            }
          }
        }
      }
      for (let _0x553676 = 0; _0x553676 < _0x303b58.length; _0x553676++) {
        let _0x101cc6 = _0x303b58[_0x553676];
        if (_0x101cc6.isAvailable) {
          const _0x321ee8 = await _0x5d6ac3(_0x141422, _0x101cc6.id);
          if (_0x321ee8) {
            console.log(_0x101cc6.description + "已完成，当前乐园币：" + _0x321ee8);
          }
        }
      }
    } catch (_0x347024) {
      console.log(_0x347024);
    }
  }
  if (_0x12353a(_0x303b58, _0x115eea)) {
    console.log("经营美食摊任务全部完成😄");
  }
}
async function _0x5d6ac3(_0x5ca30d, _0x48b1de) {
  const _0x21d91f = new Date().getTime();
  const _0x1b56f7 = {
    body: "{\"taskId\":" + _0x48b1de + "}",
    headers: "{\"Content-Type\":\"application/json;charset=UTF-8\"}",
    instance: "INNER",
    method: "POST",
    options: "{\"env\":\"online\"}",
    path: "/sendDish",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x21d91f + "\",\"mc-env\":\"online\"}",
    sdkVersion: "1.5.4"
  };
  return await _0x2928b2(_0x5ca30d, _0x1b56f7);
}
async function _0x51929f() {
  await validateCarmeWithType(_0x5c30ec, 1);
  const _0x457dfa = getCookies();
  for (let _0x3054fb = 0; _0x3054fb < _0x457dfa.length; _0x3054fb++) {
    const _0x4f239e = _0x457dfa[_0x3054fb];
    if (!_0x4f239e) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0xfe58ae = await checkCk(_0x4f239e, _0x3054fb);
        if (!_0xfe58ae) {
          continue;
        }
        let _0x13aa44 = await getUserInfo(_0xfe58ae);
        if (!_0x13aa44.username) {
          console.log("第", _0x3054fb + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0x2ed612 = _0x13aa44.user_id;
        await checkCarmeCount(_0x5c30ec, _0x2ed612, _0x38436e);
        console.log("******开始【饿了么账号", _0x3054fb + 1, "】", _0x13aa44.username, "*********");
        let _0x4c6f12 = await _0x58fe79(_0xfe58ae);
        if (!_0x4c6f12) {
          console.log("请完成实名认证后再来玩游戏");
          continue;
        }
        await _0x547a04(_0xfe58ae);
        if (_0x3054fb !== _0x457dfa.length - 1) {
          console.log("延时 5 秒");
          await wait(5);
        }
      } catch (_0x2cf95c) {
        console.log(_0x2cf95c);
      }
    }
  }
  process.exit(0);
}
_0x51929f();
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