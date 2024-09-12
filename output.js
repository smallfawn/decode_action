//Thu Sep 12 2024 08:37:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  sign,
  getToken,
  wait,
  checkCk,
  validateCarmeWithType,
  User_Agent,
  getCookies,
  checkCarmeCount,
  getUserInfo,
  tryCatchPromise,
  getCookieMap
} = require("./common.js");
const {
  sendNotify
} = require("./sendNotify1.js");
const _0x3ee842 = require("moment");
const _0x43a291 = require("request");
const _0xf58a19 = 10;
const _0x55733f = "\u5F02\u5E38";
let _0x31839a = getCookies();
const _0x46e8ae = process.env.ELE_CARME;
var _0x2c5f85 = "| \u6635\u79F0          | \u4E50\u56ED\u5E01    | \u603B\u5403\u8D27\u8C46 |\u4F59\u989D |\n| ------------- | ------------------ | ---------|---------|\n";
function _0x15e7a0() {
  return _0x3ee842().format("YYYY-MM-DD");
}
function _0x23f651() {
  var _0x1b2b0a = new Date(),
    _0x1344ed = _0x1b2b0a.getMonth() + 1,
    _0x3be63e = _0x1b2b0a.getDate();
  _0x1344ed <= 9 && (_0x1344ed = "0" + _0x1344ed);
  _0x3be63e <= 9 && (_0x3be63e = "0" + _0x3be63e);
  return _0x1b2b0a.getFullYear() + "-" + _0x1344ed + "-" + _0x3be63e;
}
function _0x1fb425(_0x1a7133) {
  const _0x879662 = {
    url: "https://httpizza.ele.me/walletUserV2/storedcard/queryBalanceBycardType?cardType=platform",
    headers: {}
  };
  _0x879662.headers.Cookie = _0x1a7133;
  _0x879662.headers["User-Agent"] = User_Agent;
  _0x879662.headers.referer = "https://r.ele.me/alsc-wallet/home.html?channel=grzx";
  return tryCatchPromise(_0x171e05 => {
    _0x43a291(_0x879662, async (_0x3c1e94, _0x7b3e1d, _0x1d7b01) => {
      if (!_0x3c1e94 && _0x7b3e1d.statusCode == 200) {
        const _0x1c177e = JSON.parse(_0x1d7b01);
        try {
          _0x171e05(_0x1c177e.data.totalAmount);
        } catch (_0x22658b) {
          console.log(_0x1d7b01);
          _0x171e05(null);
        }
      } else {
        _0x171e05(null);
      }
    });
  });
}
function _0xe7326c(_0x120afa) {
  const _0x1b9ec9 = {
    Cookie: _0x120afa,
    "User-Agent": User_Agent
  };
  const _0x244676 = {
    url: "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?latitude=30.153352&limit=20&longitude=104.153352&offset=0",
    headers: _0x1b9ec9
  };
  return tryCatchPromise(_0x131e5d => {
    _0x43a291(_0x244676, async (_0x14f786, _0x49345d, _0x618a68) => {
      if (!_0x14f786 && _0x49345d.statusCode == 200) {
        const _0x18bbc7 = JSON.parse(_0x618a68);
        try {
          _0x131e5d(_0x18bbc7.peaCount);
        } catch (_0x3df62f) {
          console.log(_0x618a68);
          _0x131e5d(null);
        }
      } else {
        _0x131e5d(null);
      }
    });
  });
}
async function _0xc1502e(_0x160c7f) {
  const _0x3562ed = {
    "content-type": "application/json",
    Cookie: _0x160c7f,
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36"
  };
  s = _0x3562ed;
  r = "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?offset=0&limit=100&longitude=39.916527&latitude=116.397128";
  const _0x48f96f = {
    url: r,
    headers: s
  };
  return tryCatchPromise(_0x74a4a1 => {
    _0x43a291(_0x48f96f, async (_0x52123b, _0x42a22e, _0x5dd484) => {
      if (!_0x52123b && _0x42a22e.statusCode == 200) {
        const _0xdaab51 = JSON.parse(_0x5dd484);
        try {
          for (var _0x1d6792 = _0x23f651(), _0x1c93be = _0xdaab51.records, _0x33b6c4 = 0, _0x3c813c = 0; _0x3c813c < _0x1c93be.length; _0x3c813c++) {
            _0x1c93be[_0x3c813c].createdTime.indexOf(_0x1d6792) > -1 && 1 == _0x1c93be[_0x3c813c].optType && (_0x33b6c4 += _0x1c93be[_0x3c813c].count);
          }
          _0x74a4a1(_0x33b6c4);
        } catch (_0x545707) {
          console.log(_0x5dd484);
          _0x74a4a1(null);
        }
      } else {
        _0x74a4a1(null);
      }
    });
  });
}
async function _0x2e425a(_0x46ff2a) {
  const _0x4f9ca3 = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"ggetGold\"}",
    bizMethod: "queryIndex"
  };
  const _0x39444a = await _0x1df2c9(_0x46ff2a, _0x4f9ca3);
  return _0x39444a.num;
}
async function _0x1df2c9(_0x396c11, _0x1e34ac) {
  const _0x1c07f0 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x396c11,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x9ef4df = new Date().getTime();
  const _0x582767 = 12574478;
  var _0x2fb2c6 = "data=" + encodeURIComponent(JSON.stringify(_0x1e34ac));
  const _0x4e6fdb = getToken(_0x396c11),
    _0x460c4b = _0x4e6fdb.split("_")[0];
  const _0x1d360e = await sign(_0x460c4b + "&" + _0x9ef4df + "&" + _0x582767 + "&" + JSON.stringify(_0x1e34ac), _0x46e8ae);
  const _0x26d10c = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x9ef4df + "&sign=" + _0x1d360e + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: _0x1c07f0,
    body: _0x2fb2c6
  };
  return tryCatchPromise(_0x46952e => {
    _0x43a291(_0x26d10c, async (_0x1ea0a1, _0x266ff8, _0x582388) => {
      if (!_0x1ea0a1 && _0x266ff8.statusCode == 200) {
        try {
          const _0x3cb15f = JSON.parse(_0x582388);
          const _0x470a8b = JSON.parse(_0x3cb15f.data.data);
          _0x46952e(_0x470a8b);
        } catch (_0x1d36db) {
          console.log(_0x582388);
          _0x46952e(null);
        }
      } else {
        _0x46952e(null);
      }
    });
  });
}
async function _0xf7ccac(_0x1e0e27, _0x54f7f5) {
  const _0x4e034e = {
    authority: "mtop.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x1e0e27,
    origin: "https://tb.ele.me",
    pragma: "no-cache",
    referer: "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x1d1a7b = {
    templateId: "1404",
    bizScene: "game_center",
    convertType: "GAME_CENTER",
    startTime: _0x15e7a0() + " 00:00:00",
    pageNo: _0x54f7f5,
    pageSize: "20"
  };
  const _0xa0411f = new Date().getTime();
  const _0x2b5c72 = 12574478;
  var _0x1a5ddd = "data=" + encodeURIComponent(JSON.stringify(_0x1d1a7b));
  const _0x267792 = getToken(_0x1e0e27),
    _0x1c4025 = _0x267792.split("_")[0];
  const _0x26ba75 = await sign(_0x1c4025 + "&" + _0xa0411f + "&" + _0x2b5c72 + "&" + JSON.stringify(_0x1d1a7b), _0x46e8ae);
  const _0x421606 = {
    url: "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.querypropertydetail/1.0/?jsv=2.7.1&appKey=12574478&t=" + _0xa0411f + "&sign=" + _0x26ba75 + "&api=mtop.koubei.interaction.center.common.querypropertydetail&v=1.0",
    method: "POST",
    headers: _0x4e034e,
    body: _0x1a5ddd
  };
  return tryCatchPromise(_0x51e67c => {
    _0x43a291(_0x421606, async (_0x451736, _0x3352bc, _0x15e984) => {
      if (!_0x451736 && _0x3352bc.statusCode === 200) {
        const _0x1fab8a = JSON.parse(_0x15e984);
        try {
          if (_0x1fab8a.data) {
            var _0x5192ab = 0;
            for (let _0xadb515 = 0; _0xadb515 < _0x1fab8a.data.list.length; _0xadb515++) {
              const _0x4b4d8f = _0x1fab8a.data.list[_0xadb515];
              if (_0x4b4d8f.detailType === "GRANT" && _0x4b4d8f.gmtModified.indexOf(_0x15e7a0()) !== -1) {
                _0x5192ab += Number(_0x4b4d8f.amount);
              }
            }
          }
          _0x51e67c(_0x5192ab);
        } catch (_0x2b9b54) {
          console.log(_0x15e984);
        }
        _0x51e67c(_0x1fab8a);
      } else {
        _0x51e67c(null);
      }
    });
  });
}
async function _0x378f6c(_0x429356, _0x16a72b) {
  const _0x220a27 = getCookieMap(_0x429356);
  if (!_0x220a27.has("wxUid")) {
    console.log("\u6CA1\u6709\u83B7\u53D6\u5230\u63A8\u9001 uid\uFF0C\u4E0D\u63A8\u9001\u6D88\u606F\n");
  } else {
    await sendNotify("\u997F\u4E86\u4E48\u8D44\u4EA7\u63A8\u9001", _0x16a72b, {
      uid: _0x220a27.get("wxUid")
    });
  }
}
async function _0x163ae7() {
  await validateCarmeWithType(_0x46e8ae, 1);
  for (let _0x3913fc = 0; _0x3913fc < _0x31839a.length; _0x3913fc++) {
    let _0x1e1848 = _0x31839a[_0x3913fc];
    _0x1e1848 = await checkCk(_0x1e1848);
    if (!_0x1e1848) {
      continue;
    }
    let _0x17b596 = await getUserInfo(_0x1e1848);
    if (!_0x17b596.encryptMobile) {
      console.log("\u7B2C", _0x3913fc + 1, "\u8D26\u53F7\u5931\u6548\uFF01\u8BF7\u91CD\u65B0\u767B\u5F55\uFF01\uFF01\uFF01\uD83D\uDE2D");
      continue;
    }
    const _0x4feeeb = _0x17b596.localId;
    await checkCarmeCount(_0x46e8ae, _0x4feeeb, _0xf58a19);
    console.log("******\u5F00\u59CB\u3010\u997F\u4E86\u4E48\u8D26\u53F7", _0x3913fc + 1, "\u3011", _0x17b596.encryptMobile, "*********");
    let _0x42bffc = await _0x1fb425(_0x1e1848);
    if (_0x42bffc != null) {
      _0x42bffc = _0x55733f;
    } else {
      _0x42bffc = _0x42bffc / 100;
    }
    let _0x524645 = await _0xe7326c(_0x1e1848);
    if (!_0x524645) {
      _0x524645 = _0x55733f;
    }
    let _0x14465a = await _0xf7ccac(_0x1e1848, 1);
    await wait(1);
    let _0x221f17 = await _0xf7ccac(_0x1e1848, 2);
    await wait(1);
    let _0x101b47 = await _0xf7ccac(_0x1e1848, 3);
    await wait(1);
    let _0x51d93b = await _0xf7ccac(_0x1e1848, 4);
    await wait(1);
    let _0x2e48f2 = await _0xf7ccac(_0x1e1848, 5);
    let _0x30b429 = _0x14465a + _0x221f17 + _0x101b47 + _0x51d93b + _0x2e48f2;
    if (!_0x30b429) {
      _0x30b429 = _0x55733f;
    }
    var _0x4b0682 = await _0x2e425a(_0x1e1848);
    if (!_0x4b0682) {
      _0x4b0682 = _0x55733f;
    }
    console.log("\u4E50\u56ED\u5E01\uFF1A" + _0x30b429);
    console.log("\u5F53\u524D\u4E50\u56ED\u5E01\uFF1A" + _0x4b0682);
    console.log("\u603B\u5403\u8D27\u8C46\uFF1A" + _0x524645);
    console.log("\u4F59\u989D\uFF1A" + _0x42bffc);
    var _0x3ec5bd = "###\u8D44\u4EA7\u63A8\u9001\n" + _0x2c5f85 + "|" + _0x17b596.encryptMobile + "|" + _0x30b429 + "/" + _0x4b0682 + "|" + _0x524645 + "|" + _0x42bffc + "|";
    await _0x378f6c(_0x1e1848, _0x3ec5bd);
    await wait(10);
  }
  process.exit(0);
}
_0x163ae7();
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
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
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