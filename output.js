//Mon Feb 17 2025 03:03:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x2b8185 = function () {
  let _0x2fac98 = true;
  return function (_0x240655, _0x5aeaa2) {
    const _0x5b1d98 = _0x2fac98 ? function () {
      if (_0x5aeaa2) {
        const _0x5593d4 = _0x5aeaa2.apply(_0x240655, arguments);
        _0x5aeaa2 = null;
        return _0x5593d4;
      }
    } : function () {};
    _0x2fac98 = false;
    return _0x5b1d98;
  };
}();
(function () {
  _0x2b8185(this, function () {
    const _0x4494e6 = new RegExp("function *\\( *\\)"),
      _0x2058af = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
      _0x59276b = _0x3b9230("init");
    !_0x4494e6.test(_0x59276b + "chain") || !_0x2058af.test(_0x59276b + "input") ? _0x59276b("0") : _0x3b9230();
  })();
})();
const _0xdd376c = new _0x2f0742("鸿星尔克签到"),
  _0x202255 = "hxek",
  _0x8312d6 = 1;
(function () {
  const _0x150320 = function () {
      let _0x5ba9d5;
      try {
        _0x5ba9d5 = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x2a4bb5) {
        _0x5ba9d5 = window;
      }
      return _0x5ba9d5;
    },
    _0x264182 = _0x150320();
  _0x264182.setInterval(_0x3b9230, 2000);
})();
let _0x2585cd = ["@", "\n"],
  _0x7ee1f1 = "&",
  _0x1c15e9 = "0.0.1",
  _0x1697e0 = "";
async function _0x212835() {
  await _0x2f4898("smallfawn/QLScriptPublic@main/hxek.js");
  await _0x5f8626();
  _0xdd376c.DoubleLog("---------------------------");
  let _0x42e10f = [];
  for (let _0x3e0746 of _0xdd376c.userList) {
    _0x42e10f.push(await _0x3e0746.sign());
    await _0xdd376c.wait(1000);
  }
  await Promise.all(_0x42e10f);
}
class _0x3fd251 {
  constructor(_0x584301) {
    this.index = ++_0xdd376c.userIdx;
    this.ck = _0x584301.split(_0x7ee1f1)[0];
    this.ckStatus = true;
  }
  async ["sign"]() {
    try {
      let _0x12fb9a = {
          "method": "POST",
          "url": "https://hope.demogic.com/gic-wx-app/member_sign.json?memberId=" + ("" + this.ck),
          "headers": {
            "Accept": "*/*",
            "Content-Type": "application/json",
            "User-Agent": _0x310e39(),
            "Connection": "keep-alive"
          }
        },
        _0x5d3eac = await _0x34553e(_0x12fb9a);
      _0x5d3eac.errcode == 0 ? _0xdd376c.DoubleLog("账号[" + this.index + "]  今天是第" + _0x5d3eac.response.memberSign.moreDays + "天签到 今日已签到成功,目前已连续签到" + _0x5d3eac.response.memberSign.continuousCount + "天  总积分" + _0x5d3eac.response.points + "🎉") : _0xdd376c.DoubleLog("账号[" + this.index + "] " + _0x5d3eac.errmsg);
    } catch (_0x4c3892) {
      console.log(_0x4c3892);
    }
  }
}
function _0x310e39() {
  const _0xe8c8f0 = ["14_0", "13_6", "13_5_1", "13_5", "13_0"],
    _0x527184 = ["iPhone X", "iPhone XR", "iPhone 11", "iPhone 11 Pro", "iPhone 12 Pro"],
    _0x5bf1bb = _0xe8c8f0[Math.floor(Math.random() * _0xe8c8f0.length)],
    _0x21b168 = _0x527184[Math.floor(Math.random() * _0x527184.length)];
  return "Mozilla/5.0 (iPhone; CPU iPhone OS " + _0x5bf1bb + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1";
}
!(async () => {
  if (!(await _0x5823bb())) return;
  _0xdd376c.userList.length > 0 && (await _0x212835());
  await _0xdd376c.SendMsg(_0x1697e0);
})().catch(_0x4908b9 => console.log(_0x4908b9)).finally(() => _0xdd376c.done());
async function _0x5823bb() {
  let _0x25848e = (_0xdd376c.isNode() ? process.env[_0x202255] : _0xdd376c.getdata(_0x202255)) || "";
  if (_0x25848e) {
    let _0x52c2e7 = _0x2585cd[0];
    for (let _0x3b8420 of _0x2585cd) if (_0x25848e.indexOf(_0x3b8420) > -1) {
      _0x52c2e7 = _0x3b8420;
      break;
    }
    for (let _0x1344d3 of _0x25848e.split(_0x52c2e7)) _0x1344d3 && _0xdd376c.userList.push(new _0x3fd251(_0x1344d3));
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0xdd376c.userList.length + "个账号");
  return true;
}
function _0x34553e(_0x3d2fad, _0x506920 = null) {
  _0x506920 = _0x3d2fad.method ? _0x3d2fad.method.toLowerCase() : _0x3d2fad.body ? "post" : "get";
  return new Promise(_0x3d904c => {
    _0xdd376c[_0x506920](_0x3d2fad, (_0x8c510, _0x32016, _0x46b051) => {
      if (_0x8c510) console.log(_0x506920 + "请求失败"), _0xdd376c.logErr(_0x8c510);else {
        if (_0x46b051) {
          try {
            _0x46b051 = JSON.parse(_0x46b051);
          } catch (_0x12716c) {}
          _0x3d904c(_0x46b051);
        } else console.log("请求api返回数据为空，请检查自身原因");
      }
      _0x3d904c();
    });
  });
}
function _0x2f4898(_0x2dbbfa, _0x1ace2f = 3000) {
  return new Promise(_0x596951 => {
    const _0x163c94 = {
      "url": "https://fastly.jsdelivr.net/gh/" + _0x2dbbfa
    };
    _0xdd376c.get(_0x163c94, (_0x3f6a89, _0x4def7d, _0x266d76) => {
      try {
        const _0x9c5610 = /scriptVersionNow\s*=\s*(["'`])([\d.]+)\1/,
          _0x1fd209 = _0x266d76.match(_0x9c5610),
          _0x240740 = _0x1fd209 ? _0x1fd209[2] : "";
        console.log("\n====== 当前版本：" + _0x1c15e9 + " 📌 最新版本：" + _0x240740 + " ======");
      } catch (_0x5be41) {
        _0xdd376c.logErr(_0x5be41, _0x4def7d);
      }
      _0x596951();
    }, _0x1ace2f);
  });
}
async function _0x5f8626() {
  try {
    const _0xe5a16c = ["https://fastly.jsdelivr.net/gh/smallfawn/Note@main/Notice.json", "https://gcore.jsdelivr.net/gh/smallfawn/Note@main/Notice.json", "https://cdn.jsdelivr.net/gh/smallfawn/Note@main/Notice.json", "https://ghproxy.com/https://raw.githubusercontent.com/smallfawn/Note/main/Notice.json", "https://gitee.com/smallfawn/Note/raw/master/Notice.json"];
    let _0x4e7bf8 = null;
    for (const _0xda66b4 of _0xe5a16c) {
      const _0x4c20b9 = {
          "url": _0xda66b4,
          "headers": {
            "User-Agent": ""
          }
        },
        _0x351329 = await _0x34553e(_0x4c20b9);
      if (_0x351329 && "notice" in _0x351329) {
        _0x4e7bf8 = _0x351329.notice.replace(/\n/g, "\n");
        break;
      }
    }
    _0x4e7bf8 && _0xdd376c.DoubleLog(_0x4e7bf8);
  } catch (_0x501bc7) {
    console.log(_0x501bc7);
  }
}
function _0x2f0742(_0x2b077f, _0x4f974f) {
  class _0x1567a3 {
    constructor(_0x451978) {
      this.env = _0x451978;
    }
    ["send"](_0x439262, _0x3b18b3 = "GET") {
      _0x439262 = "string" == typeof _0x439262 ? {
        "url": _0x439262
      } : _0x439262;
      let _0x354828 = this.get;
      "POST" === _0x3b18b3 && (_0x354828 = this.post);
      return new Promise((_0x312286, _0x190334) => {
        _0x354828.call(this, _0x439262, (_0x4ee04e, _0x413d8a, _0x2e06b5) => {
          _0x4ee04e ? _0x190334(_0x4ee04e) : _0x312286(_0x413d8a);
        });
      });
    }
    ["get"](_0x3e10bb) {
      return this.send.call(this.env, _0x3e10bb);
    }
    ["post"](_0x3245c6) {
      return this.send.call(this.env, _0x3245c6, "POST");
    }
  }
  return new class {
    constructor(_0x24cd86, _0x348a83) {
      this.userList = [];
      this.userIdx = 0;
      this.name = _0x24cd86;
      this.http = new _0x1567a3(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x348a83);
      this.log("", "🔔" + this.name + ",开始!");
    }
    ["getEnv"]() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    ["isNode"]() {
      return "Node.js" === this.getEnv();
    }
    ["isQuanX"]() {
      return "Quantumult X" === this.getEnv();
    }
    ["isSurge"]() {
      return "Surge" === this.getEnv();
    }
    ["isLoon"]() {
      return "Loon" === this.getEnv();
    }
    ["isShadowrocket"]() {
      return "Shadowrocket" === this.getEnv();
    }
    ["isStash"]() {
      return "Stash" === this.getEnv();
    }
    ["toObj"](_0x290689, _0x503453 = null) {
      try {
        return JSON.parse(_0x290689);
      } catch {
        return _0x503453;
      }
    }
    ["toStr"](_0x379281, _0xb50721 = null) {
      try {
        return JSON.stringify(_0x379281);
      } catch {
        return _0xb50721;
      }
    }
    ["getjson"](_0x5750de, _0x51af57) {
      let _0x317625 = _0x51af57;
      const _0x35e23a = this.getdata(_0x5750de);
      if (_0x35e23a) try {
        _0x317625 = JSON.parse(this.getdata(_0x5750de));
      } catch {}
      return _0x317625;
    }
    ["setjson"](_0x33c9a1, _0x1333d3) {
      try {
        return this.setdata(JSON.stringify(_0x33c9a1), _0x1333d3);
      } catch {
        return false;
      }
    }
    ["getScript"](_0x55ff62) {
      return new Promise(_0x2cbd67 => {
        this.get({
          "url": _0x55ff62
        }, (_0x19b46f, _0x2c8d5f, _0x142451) => _0x2cbd67(_0x142451));
      });
    }
    ["runScript"](_0x13cb8a, _0x3a3100) {
      return new Promise(_0x158c95 => {
        let _0x386309 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x386309 = _0x386309 ? _0x386309.replace(/\n/g, "").trim() : _0x386309;
        let _0x5cfcf1 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x5cfcf1 = _0x5cfcf1 ? 1 * _0x5cfcf1 : 20;
        _0x5cfcf1 = _0x3a3100 && _0x3a3100.timeout ? _0x3a3100.timeout : _0x5cfcf1;
        const [_0x408c0a, _0x185e1c] = _0x386309.split("@"),
          _0xd4f552 = {
            "url": "http://" + _0x185e1c + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x13cb8a,
              "mock_type": "cron",
              "timeout": _0x5cfcf1
            },
            "headers": {
              "X-Key": _0x408c0a,
              "Accept": "*/*"
            },
            "timeout": _0x5cfcf1
          };
        this.post(_0xd4f552, (_0x406fd6, _0x395523, _0x1a3c73) => _0x158c95(_0x1a3c73));
      }).catch(_0x2f6325 => this.logErr(_0x2f6325));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x107fee = this.path.resolve(this.dataFile),
          _0xa5b883 = this.path.resolve(process.cwd(), this.dataFile),
          _0x8ef5d0 = this.fs.existsSync(_0x107fee),
          _0x518e8a = !_0x8ef5d0 && this.fs.existsSync(_0xa5b883);
        if (!_0x8ef5d0 && !_0x518e8a) return {};
        {
          const _0x3ca897 = _0x8ef5d0 ? _0x107fee : _0xa5b883;
          try {
            return JSON.parse(this.fs.readFileSync(_0x3ca897));
          } catch (_0x3de460) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4b927f = this.path.resolve(this.dataFile),
          _0x2b327f = this.path.resolve(process.cwd(), this.dataFile),
          _0x355579 = this.fs.existsSync(_0x4b927f),
          _0x23264f = !_0x355579 && this.fs.existsSync(_0x2b327f),
          _0x2736e4 = JSON.stringify(this.data);
        _0x355579 ? this.fs.writeFileSync(_0x4b927f, _0x2736e4) : _0x23264f ? this.fs.writeFileSync(_0x2b327f, _0x2736e4) : this.fs.writeFileSync(_0x4b927f, _0x2736e4);
      }
    }
    ["lodash_get"](_0x34723b, _0x26a601, _0x3e762a) {
      const _0xbb435f = _0x26a601.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0xcc1568 = _0x34723b;
      for (const _0x501ca0 of _0xbb435f) if (_0xcc1568 = Object(_0xcc1568)[_0x501ca0], undefined === _0xcc1568) return _0x3e762a;
      return _0xcc1568;
    }
    ["lodash_set"](_0x4a083f, _0x3255fd, _0x5deb1a) {
      return Object(_0x4a083f) !== _0x4a083f ? _0x4a083f : (Array.isArray(_0x3255fd) || (_0x3255fd = _0x3255fd.toString().match(/[^.[\]]+/g) || []), _0x3255fd.slice(0, -1).reduce((_0x3936e6, _0x780ef1, _0x54d871) => Object(_0x3936e6[_0x780ef1]) === _0x3936e6[_0x780ef1] ? _0x3936e6[_0x780ef1] : _0x3936e6[_0x780ef1] = Math.abs(_0x3255fd[_0x54d871 + 1]) >> 0 == +_0x3255fd[_0x54d871 + 1] ? [] : {}, _0x4a083f)[_0x3255fd[_0x3255fd.length - 1]] = _0x5deb1a, _0x4a083f);
    }
    ["getdata"](_0x478e0d) {
      let _0x134575 = this.getval(_0x478e0d);
      if (/^@/.test(_0x478e0d)) {
        const [, _0x384b6b, _0x140a62] = /^@(.*?)\.(.*?)$/.exec(_0x478e0d),
          _0x50c70e = _0x384b6b ? this.getval(_0x384b6b) : "";
        if (_0x50c70e) try {
          const _0x22203e = JSON.parse(_0x50c70e);
          _0x134575 = _0x22203e ? this.lodash_get(_0x22203e, _0x140a62, "") : _0x134575;
        } catch (_0x2c07b9) {
          _0x134575 = "";
        }
      }
      return _0x134575;
    }
    ["setdata"](_0xafed80, _0x2c809c) {
      let _0x2be4ee = false;
      if (/^@/.test(_0x2c809c)) {
        const [, _0x329b98, _0xb5549a] = /^@(.*?)\.(.*?)$/.exec(_0x2c809c),
          _0x292feb = this.getval(_0x329b98),
          _0xd5c42 = _0x329b98 ? "null" === _0x292feb ? null : _0x292feb || "{}" : "{}";
        try {
          const _0x12abb4 = JSON.parse(_0xd5c42);
          this.lodash_set(_0x12abb4, _0xb5549a, _0xafed80);
          _0x2be4ee = this.setval(JSON.stringify(_0x12abb4), _0x329b98);
        } catch (_0x396917) {
          const _0x531a63 = {};
          this.lodash_set(_0x531a63, _0xb5549a, _0xafed80);
          _0x2be4ee = this.setval(JSON.stringify(_0x531a63), _0x329b98);
        }
      } else _0x2be4ee = this.setval(_0xafed80, _0x2c809c);
      return _0x2be4ee;
    }
    ["getval"](_0x3a5c5a) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0x3a5c5a);
        case "Quantumult X":
          return $prefs.valueForKey(_0x3a5c5a);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0x3a5c5a];
        default:
          return this.data && this.data[_0x3a5c5a] || null;
      }
    }
    ["setval"](_0x254cf4, _0x27f77a) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x254cf4, _0x27f77a);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x254cf4, _0x27f77a);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x27f77a] = _0x254cf4;
          this.writedata();
          return true;
        default:
          return this.data && this.data[_0x27f77a] || null;
      }
    }
    ["initGotEnv"](_0x53e2d1) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x53e2d1 && (_0x53e2d1.headers = _0x53e2d1.headers ? _0x53e2d1.headers : {}, undefined === _0x53e2d1.headers.Cookie && undefined === _0x53e2d1.cookieJar && (_0x53e2d1.cookieJar = this.ckjar));
    }
    ["get"](_0xf0ac3a, _0x34ac5e = () => {}) {
      switch (_0xf0ac3a.headers && (delete _0xf0ac3a.headers["Content-Type"], delete _0xf0ac3a.headers["Content-Length"], delete _0xf0ac3a.headers["content-type"], delete _0xf0ac3a.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0xf0ac3a.headers = _0xf0ac3a.headers || {}, Object.assign(_0xf0ac3a.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(_0xf0ac3a, (_0x129cf0, _0x2f2076, _0x8104bf) => {
            !_0x129cf0 && _0x2f2076 && (_0x2f2076.body = _0x8104bf, _0x2f2076.statusCode = _0x2f2076.status ? _0x2f2076.status : _0x2f2076.statusCode, _0x2f2076.status = _0x2f2076.statusCode);
            _0x34ac5e(_0x129cf0, _0x2f2076, _0x8104bf);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0xf0ac3a.opts = _0xf0ac3a.opts || {}, Object.assign(_0xf0ac3a.opts, {
            "hints": false
          }));
          $task.fetch(_0xf0ac3a).then(_0x3afd55 => {
            const {
              statusCode: _0x46eed7,
              statusCode: _0x2830fe,
              headers: _0x4f1ddd,
              body: _0x4fe281,
              bodyBytes: _0x498e3a
            } = _0x3afd55;
            _0x34ac5e(null, {
              "status": _0x46eed7,
              "statusCode": _0x2830fe,
              "headers": _0x4f1ddd,
              "body": _0x4fe281,
              "bodyBytes": _0x498e3a
            }, _0x4fe281, _0x498e3a);
          }, _0x256d12 => _0x34ac5e(_0x256d12 && _0x256d12.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x29674b = require("iconv-lite");
          this.initGotEnv(_0xf0ac3a);
          this.got(_0xf0ac3a).on("redirect", (_0x2037be, _0x126d31) => {
            try {
              if (_0x2037be.headers["set-cookie"]) {
                const _0xf43d8c = _0x2037be.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0xf43d8c && this.ckjar.setCookieSync(_0xf43d8c, null);
                _0x126d31.cookieJar = this.ckjar;
              }
            } catch (_0x336b3f) {
              this.logErr(_0x336b3f);
            }
          }).then(_0x33da5f => {
            const {
                statusCode: _0x508c5b,
                statusCode: _0x5cb730,
                headers: _0x5d7cec,
                rawBody: _0x2a3c5f
              } = _0x33da5f,
              _0x35e780 = _0x29674b.decode(_0x2a3c5f, this.encoding);
            _0x34ac5e(null, {
              "status": _0x508c5b,
              "statusCode": _0x5cb730,
              "headers": _0x5d7cec,
              "rawBody": _0x2a3c5f,
              "body": _0x35e780
            }, _0x35e780);
          }, _0x564db0 => {
            const {
              message: _0x179a55,
              response: _0x14a094
            } = _0x564db0;
            _0x34ac5e(_0x179a55, _0x14a094, _0x14a094 && _0x29674b.decode(_0x14a094.rawBody, this.encoding));
          });
      }
    }
    ["post"](_0x3d406f, _0x1fb9c6 = () => {}) {
      const _0x39ae3d = _0x3d406f.method ? _0x3d406f.method.toLocaleLowerCase() : "post";
      switch (_0x3d406f.body && _0x3d406f.headers && !_0x3d406f.headers["Content-Type"] && !_0x3d406f.headers["content-type"] && (_0x3d406f.headers["content-type"] = "application/x-www-form-urlencoded"), _0x3d406f.headers && (delete _0x3d406f.headers["Content-Length"], delete _0x3d406f.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x3d406f.headers = _0x3d406f.headers || {}, Object.assign(_0x3d406f.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[_0x39ae3d](_0x3d406f, (_0x2bf0a1, _0x37565c, _0x2b1b79) => {
            !_0x2bf0a1 && _0x37565c && (_0x37565c.body = _0x2b1b79, _0x37565c.statusCode = _0x37565c.status ? _0x37565c.status : _0x37565c.statusCode, _0x37565c.status = _0x37565c.statusCode);
            _0x1fb9c6(_0x2bf0a1, _0x37565c, _0x2b1b79);
          });
          break;
        case "Quantumult X":
          _0x3d406f.method = _0x39ae3d;
          this.isNeedRewrite && (_0x3d406f.opts = _0x3d406f.opts || {}, Object.assign(_0x3d406f.opts, {
            "hints": false
          }));
          $task.fetch(_0x3d406f).then(_0x488b38 => {
            const {
              statusCode: _0x1e1c9b,
              statusCode: _0x10a4fd,
              headers: _0x58c940,
              body: _0x3fc24a,
              bodyBytes: _0x38566f
            } = _0x488b38;
            _0x1fb9c6(null, {
              "status": _0x1e1c9b,
              "statusCode": _0x10a4fd,
              "headers": _0x58c940,
              "body": _0x3fc24a,
              "bodyBytes": _0x38566f
            }, _0x3fc24a, _0x38566f);
          }, _0x5d1c16 => _0x1fb9c6(_0x5d1c16 && _0x5d1c16.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x11ee90 = require("iconv-lite");
          this.initGotEnv(_0x3d406f);
          const {
            url: _0x2362ec,
            ..._0x4460ae
          } = _0x3d406f;
          this.got[_0x39ae3d](_0x2362ec, _0x4460ae).then(_0x529178 => {
            const {
                statusCode: _0xb41543,
                statusCode: _0x558cfc,
                headers: _0x1b3a30,
                rawBody: _0x53210b
              } = _0x529178,
              _0x7b4603 = _0x11ee90.decode(_0x53210b, this.encoding);
            _0x1fb9c6(null, {
              "status": _0xb41543,
              "statusCode": _0x558cfc,
              "headers": _0x1b3a30,
              "rawBody": _0x53210b,
              "body": _0x7b4603
            }, _0x7b4603);
          }, _0x222f7c => {
            const {
              message: _0x2e6063,
              response: _0x2f303b
            } = _0x222f7c;
            _0x1fb9c6(_0x2e6063, _0x2f303b, _0x2f303b && _0x11ee90.decode(_0x2f303b.rawBody, this.encoding));
          });
      }
    }
    ["time"](_0x470f6d, _0x1c46da = null) {
      const _0x46fcbe = _0x1c46da ? new Date(_0x1c46da) : new Date();
      let _0x2527a3 = {
        "M+": _0x46fcbe.getMonth() + 1,
        "d+": _0x46fcbe.getDate(),
        "H+": _0x46fcbe.getHours(),
        "m+": _0x46fcbe.getMinutes(),
        "s+": _0x46fcbe.getSeconds(),
        "q+": Math.floor((_0x46fcbe.getMonth() + 3) / 3),
        "S": _0x46fcbe.getMilliseconds()
      };
      /(y+)/.test(_0x470f6d) && (_0x470f6d = _0x470f6d.replace(RegExp.$1, (_0x46fcbe.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x43190f in _0x2527a3) new RegExp("(" + _0x43190f + ")").test(_0x470f6d) && (_0x470f6d = _0x470f6d.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2527a3[_0x43190f] : ("00" + _0x2527a3[_0x43190f]).substr(("" + _0x2527a3[_0x43190f]).length)));
      return _0x470f6d;
    }
    ["queryStr"](_0x245897) {
      let _0x3df525 = "";
      for (const _0xfe3f66 in _0x245897) {
        let _0x881f90 = _0x245897[_0xfe3f66];
        null != _0x881f90 && "" !== _0x881f90 && ("object" == typeof _0x881f90 && (_0x881f90 = JSON.stringify(_0x881f90)), _0x3df525 += _0xfe3f66 + "=" + _0x881f90 + "&");
      }
      _0x3df525 = _0x3df525.substring(0, _0x3df525.length - 1);
      return _0x3df525;
    }
    ["msg"](_0xfce48e = _0x2b077f, _0x4f6c8a = "", _0x312414 = "", _0x5c40dd) {
      const _0x745cb5 = _0x5d8e17 => {
        switch (typeof _0x5d8e17) {
          case undefined:
            return _0x5d8e17;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  "url": _0x5d8e17
                };
              case "Loon":
              case "Shadowrocket":
                return _0x5d8e17;
              case "Quantumult X":
                return {
                  "open-url": _0x5d8e17
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
                  let _0x15640a = _0x5d8e17.url || _0x5d8e17.openUrl || _0x5d8e17["open-url"];
                  return {
                    "url": _0x15640a
                  };
                }
              case "Loon":
                {
                  let _0x9fb36e = _0x5d8e17.openUrl || _0x5d8e17.url || _0x5d8e17["open-url"],
                    _0x4fb56c = _0x5d8e17.mediaUrl || _0x5d8e17["media-url"];
                  return {
                    "openUrl": _0x9fb36e,
                    "mediaUrl": _0x4fb56c
                  };
                }
              case "Quantumult X":
                {
                  let _0xf90a7d = _0x5d8e17["open-url"] || _0x5d8e17.url || _0x5d8e17.openUrl,
                    _0x8d7c71 = _0x5d8e17["media-url"] || _0x5d8e17.mediaUrl,
                    _0x5d286e = _0x5d8e17["update-pasteboard"] || _0x5d8e17.updatePasteboard;
                  return {
                    "open-url": _0xf90a7d,
                    "media-url": _0x8d7c71,
                    "update-pasteboard": _0x5d286e
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          $notification.post(_0xfce48e, _0x4f6c8a, _0x312414, _0x745cb5(_0x5c40dd));
          break;
        case "Quantumult X":
          $notify(_0xfce48e, _0x4f6c8a, _0x312414, _0x745cb5(_0x5c40dd));
          break;
        case "Node.js":
      }
      if (!this.isMuteLog) {
        let _0x2e6212 = ["", "==============📣系统通知📣=============="];
        _0x2e6212.push(_0xfce48e);
        _0x4f6c8a && _0x2e6212.push(_0x4f6c8a);
        _0x312414 && _0x2e6212.push(_0x312414);
        console.log(_0x2e6212.join("\n"));
        this.logs = this.logs.concat(_0x2e6212);
      }
    }
    ["log"](..._0x5dbfff) {
      _0x5dbfff.length > 0 && (this.logs = [...this.logs, ..._0x5dbfff]);
      console.log(_0x5dbfff.join(this.logSeparator));
    }
    ["logErr"](_0x15a98d, _0xd27e8c) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ",错误!", _0x15a98d);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ",错误!", _0x15a98d.stack);
      }
    }
    ["wait"](_0x2dbba3) {
      return new Promise(_0x327c37 => setTimeout(_0x327c37, _0x2dbba3));
    }
    ["DoubleLog"](_0x5eba71) {
      this.isNode() ? _0x5eba71 && (console.log("" + _0x5eba71), _0x1697e0 += "\n " + _0x5eba71) : (console.log("" + _0x5eba71), _0x1697e0 += "\n " + _0x5eba71);
    }
    async ["SendMsg"](_0x39f9aa) {
      if (!_0x39f9aa) return;
      if (_0x8312d6 > 0) {
        if (this.isNode()) {
          var _0x5c7040 = require("./sendNotify");
          await _0x5c7040.sendNotify(this.name, _0x39f9aa);
        } else this.msg(this.name, "", _0x39f9aa);
      } else console.log(_0x39f9aa);
    }
    ["done"](_0x559753 = {}) {
      const _0x3c3bba = new Date().getTime(),
        _0x2ee978 = (_0x3c3bba - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ",结束!🕛" + _0x2ee978 + "秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x559753);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x2b077f, _0x4f974f);
}
function _0x3b9230(_0x1b6fdb) {
  function _0xe60723(_0x35d5a7) {
    if (typeof _0x35d5a7 === "string") return function (_0x5c9a92) {}.constructor("while (true) {}").apply("counter");else ("" + _0x35d5a7 / _0x35d5a7).length !== 1 || _0x35d5a7 % 20 === 0 ? function () {
      return true;
    }.constructor("debugger").call("action") : function () {
      return false;
    }.constructor("debugger").apply("stateObject");
    _0xe60723(++_0x35d5a7);
  }
  try {
    if (_0x1b6fdb) return _0xe60723;else _0xe60723(0);
  } catch (_0x5be6b9) {}
}