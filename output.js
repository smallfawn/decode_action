//Fri Aug 30 2024 06:43:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("霸王茶姬"),
  axios = require("axios"),
  {
    sendNotify
  } = require("./sendNotify"),
  SyncRequest = require("sync-request"),
  CryptoJS = require("crypto-js");
let notifyStr = "",
  appid = atob("d3hhZmVjNmY4NDIyY2IzNTdi");
(async () => {
  checkVersion("bwcj.js", "f0c0df0477100e136665b6ea7748a480");
  const _0x46ceed = process.env.bwcj_ck;
  if (!_0x46ceed) {
    logAndNotify("bwcj_ck");
    return;
  }
  let _0x4eafbb = _0x46ceed.replaceAll("&", "\n").split("\n");
  for (let _0x2e5056 = 0; _0x2e5056 < _0x4eafbb.length; _0x2e5056++) {
    if (_0x4eafbb[_0x2e5056].indexOf("#") === -1) {
      logAndNotify("账号【" + (_0x2e5056 + 1) + "】 ck格式有变化，新版本需要有userId");
      continue;
    }
    const _0x395b4f = _0x4eafbb[_0x2e5056].split("#")[0],
      _0x390b74 = _0x4eafbb[_0x2e5056].split("#")[1];
    logAndNotify("🧐" + _0x390b74 + "🧐");
    const _0x54aa49 = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x395b4f);
    if (!_0x54aa49.data.status) {
      logAndNotify("账号【" + (_0x2e5056 + 1) + "】 登录失败☹");
      continue;
    }
    const _0x5d70f2 = new Date().getTime(),
      _0x5d0bc8 = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/takePartInSign", _0x395b4f, {
        activityId: "947079313798000641",
        appid: appid,
        storeId: 49006,
        timestamp: _0x5d70f2,
        signature: sgin(_0x5d70f2, _0x390b74),
        store_id: 49006
      });
    if (!_0x5d0bc8.data.status) {
      logAndNotify("账号【" + (_0x2e5056 + 1) + "】 签到失败：【" + _0x5d0bc8.data.message + "】");
    }
    const _0x377a1c = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userSignStatistics", _0x395b4f, {
      activityId: "947079313798000641",
      appid: appid
    });
    _0x377a1c.data.status && (logAndNotify("账号【" + (_0x2e5056 + 1) + "】 连续签到" + _0x377a1c.data.data.signDays + "天"), _0x377a1c.data.data.signStatus != 1 && logAndNotify("账号【" + (_0x2e5056 + 1) + "】 签到状态异常"));
    const _0x7b7313 = await sendGetRequest("https://webapi2.qmai.cn/web/catering2-apiserver/crm/customer-center?appid=" + appid, _0x395b4f);
    if (_0x7b7313.data.status) {
      logAndNotify("账号【" + (_0x2e5056 + 1) + "】 积分：【" + _0x7b7313.data.data.customerAssertInfo.integral + "】");
    }
    const _0x5c0b14 = await sendPostRequest("https://webapi2.qmai.cn/web/cmk-center/sign/userReward", _0x395b4f, {
      activityId: "947079313798000641",
      appid: appid,
      pageNo: 1,
      pageSize: 30
    });
    if (_0x5c0b14.data.status) {
      const _0xe7ef07 = _0x5c0b14.data.data.list;
      for (let _0x1f5e5b = 0; _0x1f5e5b < _0xe7ef07.length; _0x1f5e5b++) {
        _0xe7ef07[_0x1f5e5b].rewardType === 1 && logAndNotify("账号【" + (_0x2e5056 + 1) + "】 奖品领取时间【" + _0xe7ef07[_0x1f5e5b].date + "】【" + _0xe7ef07[_0x1f5e5b].rewardName + "】");
      }
    }
  }
})().catch(_0x11cc69 => {
  logAndNotify(_0x11cc69);
}).finally(() => {
  sendNotify("霸王茶姬", notifyStr);
  $.done();
});
function sendPostRequest(_0x299317, _0x564954, _0x565e32) {
  const _0x377ade = {
      scene: 1027,
      "Qm-From": "wechat",
      "store-id": 49006,
      "Qm-User-Token": "Rh04KAYDEaKbwudXc4e07Hkxm-dTiq9E8c42AXW4e-VXV7Vw9FPYkL9hHzo3MlD2",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
    },
    _0x33bc28 = {
      ..._0x377ade,
      ...{
        "Qm-User-Token": _0x564954
      }
    },
    _0x3252c2 = axios.create({
      headers: _0x33bc28
    });
  return _0x3252c2.post(_0x299317, _0x565e32);
}
function sendGetRequest(_0x1c3657, _0x4461af) {
  const _0x1909e7 = {
      scene: 1027,
      "Qm-From": "wechat",
      "store-id": 49006,
      "Qm-User-Token": "Rh04KAYDEaKbwudXc4e07Hkxm-dTiq9E8c42AXW4e-VXV7Vw9FPYkL9hHzo3MlD2",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wxafec6f8422cb357b/175/page-frame.html"
    },
    _0x4ab871 = {
      ..._0x1909e7,
      ...{
        "Qm-User-Token": _0x4461af
      }
    },
    _0x1dbd93 = axios.create({
      headers: _0x4ab871
    });
  return _0x1dbd93.get(_0x1c3657);
}
function logAndNotify(_0x4468c0) {
  1;
  $.log(_0x4468c0);
  notifyStr += _0x4468c0;
  notifyStr += "\n";
}
function sgin(_0x5af992, _0x2a7d9a) {
  var _0x28eb99 = "947079313798000641";
  var _0x5e8b7f = 49006;
  var _0x59f3df = _0x5e8b7f ? _0x5e8b7f.toString() : undefined;
  var _0x4bd550 = {
    activityId: _0x28eb99,
    sellerId: _0x59f3df,
    timestamp: _0x5af992,
    userId: _0x2a7d9a
  };
  var _0x171e19 = Object.keys(_0x4bd550).sort();
  var _0x412671 = _0x171e19.reduce(function (_0x766d6d, _0x39b2c9) {
    _0x766d6d[_0x39b2c9] = _0x4bd550[_0x39b2c9];
    return _0x766d6d;
  }, {});
  var _0x9dde72 = Object.entries(_0x412671).map(function (_0xd40cbc) {
    var [_0x49687e, _0x329650] = _0xd40cbc;
    return _0x49687e + "=" + _0x329650;
  }).join("&") + "&key=" + _0x28eb99.split("").reverse().join("");
  var _0xef0abc = CryptoJS.MD5(_0x9dde72).toString(CryptoJS.enc.Hex).toUpperCase();
  return _0xef0abc;
}
function Env(_0x228828, _0x4ce317) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x3e68fe {
    constructor(_0x23166a) {
      this.env = _0x23166a;
    }
    send(_0x2fcaa8, _0x53081c = "GET") {
      _0x2fcaa8 = "string" == typeof _0x2fcaa8 ? {
        url: _0x2fcaa8
      } : _0x2fcaa8;
      let _0x2ee1e2 = this.get;
      "POST" === _0x53081c && (_0x2ee1e2 = this.post);
      return new Promise((_0x320107, _0x2a12c7) => {
        _0x2ee1e2.call(this, _0x2fcaa8, (_0x14efd8, _0x27a18c, _0xb94505) => {
          _0x14efd8 ? _0x2a12c7(_0x14efd8) : _0x320107(_0x27a18c);
        });
      });
    }
    get(_0x51ce90) {
      return this.send.call(this.env, _0x51ce90);
    }
    post(_0x37cb0f) {
      return this.send.call(this.env, _0x37cb0f, "POST");
    }
  }
  return new class {
    constructor(_0x395779, _0x3252e6) {
      this.name = _0x395779;
      this.http = new _0x3e68fe(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x3252e6);
      this.log("", "🔔" + this.name + ", 开始!");
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
    toObj(_0x60b2ad, _0x4f746c = null) {
      try {
        return JSON.parse(_0x60b2ad);
      } catch {
        return _0x4f746c;
      }
    }
    toStr(_0x3c27f0, _0x5cfe5f = null) {
      try {
        return JSON.stringify(_0x3c27f0);
      } catch {
        return _0x5cfe5f;
      }
    }
    getjson(_0x530726, _0x1f93b6) {
      let _0x21d9df = _0x1f93b6;
      const _0x449b4e = this.getdata(_0x530726);
      if (_0x449b4e) {
        try {
          _0x21d9df = JSON.parse(this.getdata(_0x530726));
        } catch {}
      }
      return _0x21d9df;
    }
    setjson(_0x261c7a, _0x40b0b6) {
      try {
        return this.setdata(JSON.stringify(_0x261c7a), _0x40b0b6);
      } catch {
        return !1;
      }
    }
    getScript(_0x3d43a5) {
      return new Promise(_0x3b2d0f => {
        this.get({
          url: _0x3d43a5
        }, (_0x1e73d9, _0x48afc0, _0x350de5) => _0x3b2d0f(_0x350de5));
      });
    }
    runScript(_0x8361ac, _0xaf1c08) {
      return new Promise(_0x3fff8a => {
        let _0x4dc322 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x4dc322 = _0x4dc322 ? _0x4dc322.replace(/\n/g, "").trim() : _0x4dc322;
        let _0x17fea3 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x17fea3 = _0x17fea3 ? 1 * _0x17fea3 : 20;
        _0x17fea3 = _0xaf1c08 && _0xaf1c08.timeout ? _0xaf1c08.timeout : _0x17fea3;
        const [_0x4a4db2, _0x54d1b3] = _0x4dc322.split("@"),
          _0xbabb8 = {
            url: "http://" + _0x54d1b3 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x8361ac,
              mock_type: "cron",
              timeout: _0x17fea3
            },
            headers: {
              "X-Key": _0x4a4db2,
              Accept: "*/*"
            }
          };
        this.post(_0xbabb8, (_0x4f4f37, _0x3f2593, _0x453349) => _0x3fff8a(_0x453349));
      }).catch(_0x597147 => this.logErr(_0x597147));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x34f6e1 = this.path.resolve(this.dataFile),
          _0x15860c = this.path.resolve(process.cwd(), this.dataFile),
          _0x3f8bc5 = this.fs.existsSync(_0x34f6e1),
          _0x111e19 = !_0x3f8bc5 && this.fs.existsSync(_0x15860c);
        if (!_0x3f8bc5 && !_0x111e19) {
          return {};
        }
        {
          const _0x17af21 = _0x3f8bc5 ? _0x34f6e1 : _0x15860c;
          try {
            return JSON.parse(this.fs.readFileSync(_0x17af21));
          } catch (_0x37e868) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x376027 = this.path.resolve(this.dataFile),
          _0x1a91b3 = this.path.resolve(process.cwd(), this.dataFile),
          _0x3db5b2 = this.fs.existsSync(_0x376027),
          _0x421415 = !_0x3db5b2 && this.fs.existsSync(_0x1a91b3),
          _0x569229 = JSON.stringify(this.data);
        _0x3db5b2 ? this.fs.writeFileSync(_0x376027, _0x569229) : _0x421415 ? this.fs.writeFileSync(_0x1a91b3, _0x569229) : this.fs.writeFileSync(_0x376027, _0x569229);
      }
    }
    lodash_get(_0x3ce0a7, _0xb16a29, _0x446803) {
      const _0x33125b = _0xb16a29.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3e2d80 = _0x3ce0a7;
      for (const _0x456fb6 of _0x33125b) if (_0x3e2d80 = Object(_0x3e2d80)[_0x456fb6], void 0 === _0x3e2d80) {
        return _0x446803;
      }
      return _0x3e2d80;
    }
    lodash_set(_0xae1451, _0x1c50ad, _0x1c7b18) {
      return Object(_0xae1451) !== _0xae1451 ? _0xae1451 : (Array.isArray(_0x1c50ad) || (_0x1c50ad = _0x1c50ad.toString().match(/[^.[\]]+/g) || []), _0x1c50ad.slice(0, -1).reduce((_0x5137f6, _0x4fab30, _0x536f10) => Object(_0x5137f6[_0x4fab30]) === _0x5137f6[_0x4fab30] ? _0x5137f6[_0x4fab30] : _0x5137f6[_0x4fab30] = Math.abs(_0x1c50ad[_0x536f10 + 1]) >> 0 == +_0x1c50ad[_0x536f10 + 1] ? [] : {}, _0xae1451)[_0x1c50ad[_0x1c50ad.length - 1]] = _0x1c7b18, _0xae1451);
    }
    getdata(_0x9db9ac) {
      let _0x2d65bc = this.getval(_0x9db9ac);
      if (/^@/.test(_0x9db9ac)) {
        const [, _0x54b79f, _0x352a45] = /^@(.*?)\.(.*?)$/.exec(_0x9db9ac),
          _0x339a8c = _0x54b79f ? this.getval(_0x54b79f) : "";
        if (_0x339a8c) {
          try {
            const _0x47d91e = JSON.parse(_0x339a8c);
            _0x2d65bc = _0x47d91e ? this.lodash_get(_0x47d91e, _0x352a45, "") : _0x2d65bc;
          } catch (_0xaee850) {
            _0x2d65bc = "";
          }
        }
      }
      return _0x2d65bc;
    }
    setdata(_0x1437b2, _0x205a81) {
      let _0x368543 = !1;
      if (/^@/.test(_0x205a81)) {
        const [, _0xfd135a, _0x4a7bb8] = /^@(.*?)\.(.*?)$/.exec(_0x205a81),
          _0x28087e = this.getval(_0xfd135a),
          _0x34b066 = _0xfd135a ? "null" === _0x28087e ? null : _0x28087e || "{}" : "{}";
        try {
          const _0x2fd5ba = JSON.parse(_0x34b066);
          this.lodash_set(_0x2fd5ba, _0x4a7bb8, _0x1437b2);
          _0x368543 = this.setval(JSON.stringify(_0x2fd5ba), _0xfd135a);
        } catch (_0x1b65aa) {
          const _0x5e3455 = {};
          this.lodash_set(_0x5e3455, _0x4a7bb8, _0x1437b2);
          _0x368543 = this.setval(JSON.stringify(_0x5e3455), _0xfd135a);
        }
      } else {
        _0x368543 = this.setval(_0x1437b2, _0x205a81);
      }
      return _0x368543;
    }
    getval(_0x414871) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x414871) : this.isQuanX() ? $prefs.valueForKey(_0x414871) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x414871]) : this.data && this.data[_0x414871] || null;
    }
    setval(_0x52dda4, _0x4a2d9b) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x52dda4, _0x4a2d9b) : this.isQuanX() ? $prefs.setValueForKey(_0x52dda4, _0x4a2d9b) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4a2d9b] = _0x52dda4, this.writedata(), !0) : this.data && this.data[_0x4a2d9b] || null;
    }
    initGotEnv(_0x14df10) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x14df10 && (_0x14df10.headers = _0x14df10.headers ? _0x14df10.headers : {}, void 0 === _0x14df10.headers.Cookie && void 0 === _0x14df10.cookieJar && (_0x14df10.cookieJar = this.ckjar));
    }
    get(_0x534dd, _0x32d3db = () => {}) {
      _0x534dd.headers && (delete _0x534dd.headers["Content-Type"], delete _0x534dd.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x534dd.headers = _0x534dd.headers || {}, Object.assign(_0x534dd.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x534dd, (_0x210acc, _0x49a5c9, _0x3f0d82) => {
        !_0x210acc && _0x49a5c9 && (_0x49a5c9.body = _0x3f0d82, _0x49a5c9.statusCode = _0x49a5c9.status);
        _0x32d3db(_0x210acc, _0x49a5c9, _0x3f0d82);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x534dd.opts = _0x534dd.opts || {}, Object.assign(_0x534dd.opts, {
        hints: !1
      })), $task.fetch(_0x534dd).then(_0x5e7b2f => {
        const {
          statusCode: _0x286615,
          statusCode: _0x4bcba7,
          headers: _0x468490,
          body: _0x2f3cfc
        } = _0x5e7b2f;
        _0x32d3db(null, {
          status: _0x286615,
          statusCode: _0x4bcba7,
          headers: _0x468490,
          body: _0x2f3cfc
        }, _0x2f3cfc);
      }, _0x3f805a => _0x32d3db(_0x3f805a))) : this.isNode() && (this.initGotEnv(_0x534dd), this.got(_0x534dd).on("redirect", (_0x7ad4ac, _0x5914cf) => {
        try {
          if (_0x7ad4ac.headers["set-cookie"]) {
            const _0x242de6 = _0x7ad4ac.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x242de6 && this.ckjar.setCookieSync(_0x242de6, null);
            _0x5914cf.cookieJar = this.ckjar;
          }
        } catch (_0x50ef59) {
          this.logErr(_0x50ef59);
        }
      }).then(_0x5e2be2 => {
        const {
          statusCode: _0x3dafaf,
          statusCode: _0x4a31cf,
          headers: _0x4428c1,
          body: _0x571021
        } = _0x5e2be2;
        _0x32d3db(null, {
          status: _0x3dafaf,
          statusCode: _0x4a31cf,
          headers: _0x4428c1,
          body: _0x571021
        }, _0x571021);
      }, _0x5ebd86 => {
        const {
          message: _0x5ace27,
          response: _0x339e17
        } = _0x5ebd86;
        _0x32d3db(_0x5ace27, _0x339e17, _0x339e17 && _0x339e17.body);
      }));
    }
    post(_0x3fb37d, _0x1bc906 = () => {}) {
      if (_0x3fb37d.body && _0x3fb37d.headers && !_0x3fb37d.headers["Content-Type"] && (_0x3fb37d.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x3fb37d.headers && delete _0x3fb37d.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x3fb37d.headers = _0x3fb37d.headers || {}, Object.assign(_0x3fb37d.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x3fb37d, (_0x5517f5, _0x520890, _0x2ceeff) => {
          !_0x5517f5 && _0x520890 && (_0x520890.body = _0x2ceeff, _0x520890.statusCode = _0x520890.status);
          _0x1bc906(_0x5517f5, _0x520890, _0x2ceeff);
        });
      } else {
        if (this.isQuanX()) {
          _0x3fb37d.method = "POST";
          this.isNeedRewrite && (_0x3fb37d.opts = _0x3fb37d.opts || {}, Object.assign(_0x3fb37d.opts, {
            hints: !1
          }));
          $task.fetch(_0x3fb37d).then(_0x585161 => {
            const {
              statusCode: _0x5e2918,
              statusCode: _0x15133d,
              headers: _0x12d978,
              body: _0x193959
            } = _0x585161;
            _0x1bc906(null, {
              status: _0x5e2918,
              statusCode: _0x15133d,
              headers: _0x12d978,
              body: _0x193959
            }, _0x193959);
          }, _0x3dffa1 => _0x1bc906(_0x3dffa1));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x3fb37d);
            const {
              url: _0x1e2e4b,
              ..._0x215f1f
            } = _0x3fb37d;
            this.got.post(_0x1e2e4b, _0x215f1f).then(_0x4e02d5 => {
              const {
                statusCode: _0x8314dd,
                statusCode: _0xc943dc,
                headers: _0x289cc1,
                body: _0x2b7a8d
              } = _0x4e02d5;
              _0x1bc906(null, {
                status: _0x8314dd,
                statusCode: _0xc943dc,
                headers: _0x289cc1,
                body: _0x2b7a8d
              }, _0x2b7a8d);
            }, _0x4ebc0f => {
              const {
                message: _0xd4310c,
                response: _0x24db4c
              } = _0x4ebc0f;
              _0x1bc906(_0xd4310c, _0x24db4c, _0x24db4c && _0x24db4c.body);
            });
          }
        }
      }
    }
    time(_0x191429, _0x170446 = null) {
      const _0x3c8d68 = _0x170446 ? new Date(_0x170446) : new Date();
      let _0x493b50 = {
        "M+": _0x3c8d68.getMonth() + 1,
        "d+": _0x3c8d68.getDate(),
        "H+": _0x3c8d68.getHours(),
        "m+": _0x3c8d68.getMinutes(),
        "s+": _0x3c8d68.getSeconds(),
        "q+": Math.floor((_0x3c8d68.getMonth() + 3) / 3),
        S: _0x3c8d68.getMilliseconds()
      };
      /(y+)/.test(_0x191429) && (_0x191429 = _0x191429.replace(RegExp.$1, (_0x3c8d68.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x56c79e in _0x493b50) new RegExp("(" + _0x56c79e + ")").test(_0x191429) && (_0x191429 = _0x191429.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x493b50[_0x56c79e] : ("00" + _0x493b50[_0x56c79e]).substr(("" + _0x493b50[_0x56c79e]).length)));
      return _0x191429;
    }
    msg(_0x106cc4 = _0x228828, _0x618e0b = "", _0x3c7a8d = "", _0x2cbd38) {
      const _0x13d31e = _0x588157 => {
        if (!_0x588157) {
          return _0x588157;
        }
        if ("string" == typeof _0x588157) {
          return this.isLoon() ? _0x588157 : this.isQuanX() ? {
            "open-url": _0x588157
          } : this.isSurge() ? {
            url: _0x588157
          } : void 0;
        }
        if ("object" == typeof _0x588157) {
          if (this.isLoon()) {
            let _0x43caba = _0x588157.openUrl || _0x588157.url || _0x588157["open-url"],
              _0x10106f = _0x588157.mediaUrl || _0x588157["media-url"];
            return {
              openUrl: _0x43caba,
              mediaUrl: _0x10106f
            };
          }
          if (this.isQuanX()) {
            let _0x23e944 = _0x588157["open-url"] || _0x588157.url || _0x588157.openUrl,
              _0xd32509 = _0x588157["media-url"] || _0x588157.mediaUrl;
            return {
              "open-url": _0x23e944,
              "media-url": _0xd32509
            };
          }
          if (this.isSurge()) {
            let _0x2aa774 = _0x588157.url || _0x588157.openUrl || _0x588157["open-url"];
            return {
              url: _0x2aa774
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x106cc4, _0x618e0b, _0x3c7a8d, _0x13d31e(_0x2cbd38)) : this.isQuanX() && $notify(_0x106cc4, _0x618e0b, _0x3c7a8d, _0x13d31e(_0x2cbd38))), !this.isMuteLog) {
        let _0x22df3f = ["", "==============📣系统通知📣=============="];
        _0x22df3f.push(_0x106cc4);
        _0x618e0b && _0x22df3f.push(_0x618e0b);
        _0x3c7a8d && _0x22df3f.push(_0x3c7a8d);
        console.log(_0x22df3f.join("\n"));
        this.logs = this.logs.concat(_0x22df3f);
      }
    }
    log(..._0x30cce7) {
      _0x30cce7.length > 0 && (this.logs = [...this.logs, ..._0x30cce7]);
      console.log(_0x30cce7.join(this.logSeparator));
    }
    logErr(_0x31ade5, _0x153a7a) {
      const _0x457fb8 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x457fb8 ? this.log("", "❗️" + this.name + ", 错误!", _0x31ade5.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x31ade5);
    }
    wait(_0x233488) {
      return new Promise(_0x2ddde6 => setTimeout(_0x2ddde6, _0x233488));
    }
    done(_0xc853a2 = {}) {
      const _0x499526 = new Date().getTime(),
        _0x363cf8 = (_0x499526 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x363cf8 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0xc853a2);
    }
  }(_0x228828, _0x4ce317);
}
function checkVersion(_0x46b5d2, _0x3ab796) {
  try {
    logAndNotify("文件md5：" + _0x3ab796);
    const _0x56c5a6 = SyncRequest("GET", "https://checktoke.filegear-sg.me/api/update/check?fileName=" + _0x46b5d2 + "&fileMd5=" + _0x3ab796),
      _0x221b3f = JSON.parse(_0x56c5a6.getBody("utf8"));
    _0x221b3f.code === 301 ? process.exit(0) : logAndNotify(_0x221b3f.data);
  } catch (_0x45fcec) {
    logAndNotify("版本检查失败:", _0x45fcec);
  }
}