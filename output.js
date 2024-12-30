//Mon Dec 30 2024 01:24:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("益禾堂");
const axios = require("axios");
const axiosRetry = require("axios-retry").default;
const {
  sendNotify
} = require("./sendNotify");
const SyncRequest = require("sync-request");
let notifyStr = "";
var ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c11)XWEB/11275";
(async () => {
  axiosRetry(axios, {
    retries: 3
  });
  const _0x42a8e6 = checkVersion("yht.js", "1aa3ea7dedca6e09ef9470d8ec23be31");
  let _0x8bb918 = [];
  const _0x101e61 = process.env.yht_invite_id;
  _0x101e61 && (_0x8bb918 = _0x101e61.split(","));
  logAndNotify("益禾堂 助力码:【" + _0x8bb918.join("、") + "】");
  if (_0x42a8e6) {
    {
      _0x8bb918.push(..._0x42a8e6.split(","));
    }
  }
  const _0x2b68b4 = process.env.yht_ck;
  const _0x163388 = process.env.yht_showinviteId;
  if (!_0x2b68b4) {
    logAndNotify("请先设置环境变量 yht_ck");
    return;
  }
  const _0x3927b7 = !!_0x163388;
  let _0xfced3e = _0x2b68b4.replaceAll("&", "\n").split("\n");
  for (let _0x18d72a = 0; _0x18d72a < _0xfced3e.length; _0x18d72a++) {
    {
      const _0x1bedf1 = _0xfced3e[_0x18d72a];
      const _0x34c6a7 = await sendGetRequest("https://webapi.qmai.cn/web/catering/crm/personal-info", _0x1bedf1);
      if (!_0x34c6a7.data.status) {
        logAndNotify("账号【" + (_0x18d72a + 1) + "】 登录失败☹");
        continue;
      }
      logAndNotify("🧐" + _0x34c6a7.data.data.mobilePhone + "🧐");
      const _0x35d7b2 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/takePartInNurture", _0x1bedf1, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5"
      });
      if (_0x35d7b2.data.status) {
        logAndNotify("账号【" + (_0x18d72a + 1) + "】 开启种树成功");
        logAndNotify("账号【" + (_0x18d72a + 1) + "】 userId=【" + _0x35d7b2.data.data.userId + "】");
      } else {
        {
          logAndNotify("账号【" + (_0x18d72a + 1) + "】 忽略此提示【" + _0x35d7b2.data.message + "】");
        }
      }
      const _0x54c31c = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/giveAmount", _0x1bedf1, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5"
      });
      const _0x5a0f39 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/task/taskInfo", _0x1bedf1, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5"
      });
      logAndNotify("账号【" + (_0x18d72a + 1) + "】 被助力次数:【" + _0x5a0f39.data.data.dailyInviteNum + "】");
      const _0x4e9844 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/stageInfo", _0x1bedf1, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5"
      });
      let _0x56aed4 = 0;
      if (_0x4e9844.data.status) {
        const _0x4d2f04 = _0x4e9844.data.data;
        _0x4d2f04.level === 3 ? logAndNotify("账号【" + (_0x18d72a + 1) + "】 当前是【" + _0x4d2f04.name + "】 可以领取奖励了") : (_0x56aed4 = _0x4d2f04.upgradeThreshold - _0x4d2f04.nutrientUsed, logAndNotify("账号【" + (_0x18d72a + 1) + "】 当前是【" + _0x4d2f04.name + "】, 再施肥【" + _0x56aed4 + "】次 成为【" + _0x4d2f04.nextName + "】"));
      }
      const _0x473990 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/activityInfo", _0x1bedf1, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5"
      });
      const _0x7b9a42 = _0x473990.data.data.nurtureStageVo;
      logAndNotify("账号【" + (_0x18d72a + 1) + "】 剩余肥料【" + _0x7b9a42.nutrientRemaining + "】");
      if (_0x56aed4 < _0x7b9a42.nutrientRemaining) {
        logAndNotify("账号【" + (_0x18d72a + 1) + "】 本次只需要施肥【" + _0x56aed4 + "】次即可完成任务，请及时领取奖励！！！！！！！！！！！！！！！");
      } else {
        {
          _0x56aed4 = _0x7b9a42.nutrientRemaining;
        }
      }
      for (let _0x102ab9 = 0; _0x102ab9 < _0x56aed4; _0x102ab9++) {
        const _0x165195 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/add/nutrient", _0x1bedf1, {
          activityId: "1025694534292430849",
          appid: "wx4080846d0cec2fd5"
        });
        if (_0x165195.data.status) {
          {
            logAndNotify("账号【" + (_0x18d72a + 1) + "】 施肥【" + (_0x102ab9 + 1) + "】次成功");
          }
        } else {
          logAndNotify("账号【" + (_0x18d72a + 1) + "】 施肥【" + (_0x102ab9 + 1) + "】次失败");
        }
      }
      const _0x4e6ebe = new Date().getDay();
      if (_0x4e6ebe === 2) {
        {
          const _0x6d5fb3 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/receive/takePartInReceive", _0x1bedf1, {
            activityId: "1038508490954362881",
            timestamp: "",
            signature: "",
            qzGtd: "",
            gdtVid: "",
            data: "",
            version: 1,
            appid: "wx4080846d0cec2fd5"
          });
          _0x6d5fb3.data.status ? logAndNotify("账号【" + (_0x18d72a + 1) + "】 领卷成功") : logAndNotify("账号【" + (_0x18d72a + 1) + "】 领卷失败，可以忽略: " + _0x6d5fb3.data.message);
        }
      }
      const _0x4a6fa0 = await sendPostRequest("https://webapi.qmai.cn/web/catering/crm/coupon/list", _0x1bedf1, {
        pageNo: 1,
        pageSize: 1000,
        useStatus: 0,
        appid: "wx4080846d0cec2fd5"
      });
      if (_0x4a6fa0.data.status) {
        logAndNotify("账号【" + (_0x18d72a + 1) + "】 优惠卷总数量: " + _0x4a6fa0.data.data.totalNum);
        for (const _0x50a43a of _0x4a6fa0.data.data.data) {
          {
            logAndNotify("账号【" + (_0x18d72a + 1) + "】 优惠卷: " + _0x50a43a.title + " 有效期【" + _0x50a43a.expireDesc + "】");
          }
        }
      } else {
        logAndNotify("账号【" + (_0x18d72a + 1) + "】 获取优惠卷失败: " + _0x4a6fa0.data.message);
      }
      logAndNotify("账号【" + (_0x18d72a + 1) + "】 开始助力其他人");
      for (const _0x139511 of _0x8bb918) {
        const _0x2d8218 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/task/userHelp", _0x1bedf1, {
          activityId: "1025694534292430849",
          appid: "wx4080846d0cec2fd5",
          inviteUserId: _0x139511
        });
        if (_0x2d8218.data.status) {
          if (_0x3927b7) {
            logAndNotify("账号【" + (_0x18d72a + 1) + "】 【" + _0x139511 + "】 助力成功");
          } else {
            {
              logAndNotify("账号【" + (_0x18d72a + 1) + "】 助力成功");
            }
          }
        } else {
          _0x3927b7 ? logAndNotify("账号【" + (_0x18d72a + 1) + "】 【" + _0x139511 + "】 助力失败: " + _0x2d8218.data.message) : logAndNotify("账号【" + (_0x18d72a + 1) + "】 助力失败: " + _0x2d8218.data.message);
          if (_0x2d8218.data.message === "今日助力次数已达上限") {
            break;
          }
        }
      }
    }
  }
})().catch(_0x2a6d4f => {
  logAndNotify(_0x2a6d4f);
}).finally(() => {
  pushLog("yht.js", notifyStr);
  sendNotify("益禾堂", notifyStr);
  $.done();
});
async function sendPostRequest(_0x16d3c0, _0x9a1aed, _0x582a92) {
  try {
    await delay(500);
    const _0x5218c3 = {
      "Qm-From": "wechat",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wx4080846d0cec2fd5/391/page-frame.html",
      "User-Agent": ua,
      xweb_xhr: 1
    };
    const _0x59918a = {
      ..._0x5218c3,
      ...{
        "Qm-User-Token": _0x9a1aed
      }
    };
    const _0x57c67f = axios.create({
      headers: _0x59918a,
      timeout: 60000
    });
    return _0x57c67f.post(_0x16d3c0, _0x582a92);
  } catch (_0x499277) {
    if (axios.isAxiosError(_0x499277)) {
      {
        _0x499277.code === "ECONNABORTED" && _0x499277.message.includes("timeout") ? console.error("请求超时：", _0x499277.message) : console.error("其他错误：", _0x499277.message);
      }
    } else {
      console.error("未知错误：", _0x499277);
    }
    throw _0x499277;
  }
}
async function sendGetRequest(_0x1930db, _0x17f749) {
  try {
    await delay(500);
    const _0x4b0820 = {
      "Qm-From": "wechat",
      "Qm-From-Type": "catering",
      Referer: "https://servicewechat.com/wx4080846d0cec2fd5/391/page-frame.html",
      "User-Agent": ua,
      xweb_xhr: 1
    };
    const _0x1c2492 = {
      ..._0x4b0820,
      ...{
        "Qm-User-Token": _0x17f749
      }
    };
    const _0x2e8811 = axios.create({
      headers: _0x1c2492,
      timeout: 60000
    });
    return _0x2e8811.get(_0x1930db);
  } catch (_0x3e7ac2) {
    {
      if (axios.isAxiosError(_0x3e7ac2)) {
        {
          _0x3e7ac2.code === "ECONNABORTED" && _0x3e7ac2.message.includes("timeout") ? console.error("请求超时：", _0x3e7ac2.message) : console.error("其他错误：", _0x3e7ac2.message);
        }
      } else {
        console.error("未知错误：", _0x3e7ac2);
      }
      throw _0x3e7ac2;
    }
  }
}
function logAndNotify(_0x6230d) {
  $.log(_0x6230d);
  notifyStr += _0x6230d;
  notifyStr += "\n";
}
function delay(_0x331e1f) {
  return new Promise(_0x4ba149 => setTimeout(_0x4ba149, _0x331e1f));
}
function Env(_0x1e338f, _0xdedc2e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x38a4f3 {
    constructor(_0x285f13) {
      this.env = _0x285f13;
    }
    send(_0x348817, _0x363600 = "GET") {
      _0x348817 = "string" == typeof _0x348817 ? {
        url: _0x348817
      } : _0x348817;
      let _0x340b3d = this.get;
      "POST" === _0x363600 && (_0x340b3d = this.post);
      return new Promise((_0x14d862, _0x3370d1) => {
        _0x340b3d.call(this, _0x348817, (_0x5eef6e, _0x29964a, _0x4b3418) => {
          _0x5eef6e ? _0x3370d1(_0x5eef6e) : _0x14d862(_0x29964a);
        });
      });
    }
    get(_0x555f2d) {
      return this.send.call(this.env, _0x555f2d);
    }
    post(_0x266cd6) {
      return this.send.call(this.env, _0x266cd6, "POST");
    }
  }
  return new class {
    constructor(_0x23702e, _0x53fc75) {
      {
        this.name = _0x23702e;
        this.http = new _0x38a4f3(this);
        this.data = null;
        this.dataFile = "box.dat";
        this.logs = [];
        this.isMute = false;
        this.isNeedRewrite = false;
        this.logSeparator = "\n";
        this.startTime = new Date().getTime();
        Object.assign(this, _0x53fc75);
        this.log("", "🔔" + this.name + ", 开始!");
      }
    }
    isNode() {
      {
        return "undefined" != typeof module && !!module.exports;
      }
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
    toObj(_0x28cff1, _0xdfedf3 = null) {
      {
        try {
          {
            return JSON.parse(_0x28cff1);
          }
        } catch {
          return _0xdfedf3;
        }
      }
    }
    toStr(_0x1e2558, _0x38f4b0 = null) {
      {
        try {
          return JSON.stringify(_0x1e2558);
        } catch {
          return _0x38f4b0;
        }
      }
    }
    getjson(_0x921447, _0x284caa) {
      let _0x3ffb70 = _0x284caa;
      const _0x5e9505 = this.getdata(_0x921447);
      if (_0x5e9505) {
        try {
          _0x3ffb70 = JSON.parse(this.getdata(_0x921447));
        } catch {}
      }
      return _0x3ffb70;
    }
    setjson(_0x1d958b, _0xfb5be5) {
      try {
        return this.setdata(JSON.stringify(_0x1d958b), _0xfb5be5);
      } catch {
        return false;
      }
    }
    getScript(_0x19eb52) {
      {
        return new Promise(_0x405783 => {
          this.get({
            url: _0x19eb52
          }, (_0x48768f, _0x5c8ed3, _0x38117d) => _0x405783(_0x38117d));
        });
      }
    }
    runScript(_0x2b82a6, _0x3ba00e) {
      return new Promise(_0x29b5b3 => {
        let _0x4761b3 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x4761b3 = _0x4761b3 ? _0x4761b3.replace(/\n/g, "").trim() : _0x4761b3;
        let _0x24fe08 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x24fe08 = _0x24fe08 ? 1 * _0x24fe08 : 20;
        _0x24fe08 = _0x3ba00e && _0x3ba00e.timeout ? _0x3ba00e.timeout : _0x24fe08;
        const [_0x2bc529, _0x1c53a1] = _0x4761b3.split("@");
        const _0x773433 = {
          url: "http://" + _0x1c53a1 + "/v1/scripting/evaluate",
          body: {
            script_text: _0x2b82a6,
            mock_type: "cron",
            timeout: _0x24fe08
          },
          headers: {
            "X-Key": _0x2bc529,
            Accept: "*/*"
          }
        };
        this.post(_0x773433, (_0x3a18be, _0x1e1b72, _0xa02341) => _0x29b5b3(_0xa02341));
      }).catch(_0x18258f => this.logErr(_0x18258f));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        {
          this.fs = this.fs ? this.fs : require("fs");
          this.path = this.path ? this.path : require("path");
          const _0x47ed43 = this.path.resolve(this.dataFile);
          const _0x1f1c1f = this.path.resolve(process.cwd(), this.dataFile);
          const _0x4b56f9 = this.fs.existsSync(_0x47ed43);
          const _0x49009e = !_0x4b56f9 && this.fs.existsSync(_0x1f1c1f);
          if (!_0x4b56f9 && !_0x49009e) {
            return {};
          }
          {
            const _0x2d610f = _0x4b56f9 ? _0x47ed43 : _0x1f1c1f;
            try {
              return JSON.parse(this.fs.readFileSync(_0x2d610f));
            } catch (_0x474a4c) {
              return {};
            }
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x45df50 = this.path.resolve(this.dataFile);
        const _0x223901 = this.path.resolve(process.cwd(), this.dataFile);
        const _0xdcbe92 = this.fs.existsSync(_0x45df50);
        const _0x1b28b9 = !_0xdcbe92 && this.fs.existsSync(_0x223901);
        const _0x16bc70 = JSON.stringify(this.data);
        _0xdcbe92 ? this.fs.writeFileSync(_0x45df50, _0x16bc70) : _0x1b28b9 ? this.fs.writeFileSync(_0x223901, _0x16bc70) : this.fs.writeFileSync(_0x45df50, _0x16bc70);
      }
    }
    lodash_get(_0x5b3e22, _0x3efeba, _0x36c29e) {
      const _0x1b305 = _0x3efeba.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3eecad = _0x5b3e22;
      for (const _0x2fe3fe of _0x1b305) if (_0x3eecad = Object(_0x3eecad)[_0x2fe3fe], undefined === _0x3eecad) {
        return _0x36c29e;
      }
      return _0x3eecad;
    }
    lodash_set(_0x3e4f96, _0x1e03ab, _0x36fe0a) {
      return Object(_0x3e4f96) !== _0x3e4f96 ? _0x3e4f96 : (Array.isArray(_0x1e03ab) || (_0x1e03ab = _0x1e03ab.toString().match(/[^.[\]]+/g) || []), _0x1e03ab.slice(0, -1).reduce((_0x3aff4e, _0x4c047c, _0x3bde33) => Object(_0x3aff4e[_0x4c047c]) === _0x3aff4e[_0x4c047c] ? _0x3aff4e[_0x4c047c] : _0x3aff4e[_0x4c047c] = Math.abs(_0x1e03ab[_0x3bde33 + 1]) >> 0 == +_0x1e03ab[_0x3bde33 + 1] ? [] : {}, _0x3e4f96)[_0x1e03ab[_0x1e03ab.length - 1]] = _0x36fe0a, _0x3e4f96);
    }
    getdata(_0x424897) {
      let _0xe740d7 = this.getval(_0x424897);
      if (/^@/.test(_0x424897)) {
        {
          const [, _0x1d2153, _0xd51c66] = /^@(.*?)\.(.*?)$/.exec(_0x424897);
          const _0x9bfcbd = _0x1d2153 ? this.getval(_0x1d2153) : "";
          if (_0x9bfcbd) {
            try {
              {
                const _0x670a93 = JSON.parse(_0x9bfcbd);
                _0xe740d7 = _0x670a93 ? this.lodash_get(_0x670a93, _0xd51c66, "") : _0xe740d7;
              }
            } catch (_0x534ce9) {
              _0xe740d7 = "";
            }
          }
        }
      }
      return _0xe740d7;
    }
    setdata(_0x2fe843, _0x175f80) {
      {
        let _0x3629da = false;
        if (/^@/.test(_0x175f80)) {
          const [, _0xf15f25, _0x3db12b] = /^@(.*?)\.(.*?)$/.exec(_0x175f80);
          const _0x45093e = this.getval(_0xf15f25);
          const _0x5f55a5 = _0xf15f25 ? "null" === _0x45093e ? null : _0x45093e || "{}" : "{}";
          try {
            const _0x2ed258 = JSON.parse(_0x5f55a5);
            this.lodash_set(_0x2ed258, _0x3db12b, _0x2fe843);
            _0x3629da = this.setval(JSON.stringify(_0x2ed258), _0xf15f25);
          } catch (_0x1d39fc) {
            const _0x4822d3 = {};
            this.lodash_set(_0x4822d3, _0x3db12b, _0x2fe843);
            _0x3629da = this.setval(JSON.stringify(_0x4822d3), _0xf15f25);
          }
        } else {
          _0x3629da = this.setval(_0x2fe843, _0x175f80);
        }
        return _0x3629da;
      }
    }
    getval(_0x906a32) {
      {
        return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x906a32) : this.isQuanX() ? $prefs.valueForKey(_0x906a32) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x906a32]) : this.data && this.data[_0x906a32] || null;
      }
    }
    setval(_0x2a511, _0x29d7f1) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x2a511, _0x29d7f1) : this.isQuanX() ? $prefs.setValueForKey(_0x2a511, _0x29d7f1) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x29d7f1] = _0x2a511, this.writedata(), true) : this.data && this.data[_0x29d7f1] || null;
    }
    initGotEnv(_0x3c700b) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x3c700b && (_0x3c700b.headers = _0x3c700b.headers ? _0x3c700b.headers : {}, undefined === _0x3c700b.headers.Cookie && undefined === _0x3c700b.cookieJar && (_0x3c700b.cookieJar = this.ckjar));
    }
    get(_0x51de2c, _0xafed69 = () => {}) {
      {
        _0x51de2c.headers && (delete _0x51de2c.headers["Content-Type"], delete _0x51de2c.headers["Content-Length"]);
        this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x51de2c.headers = _0x51de2c.headers || {}, Object.assign(_0x51de2c.headers, {
          "X-Surge-Skip-Scripting": false
        })), $httpClient.get(_0x51de2c, (_0x435158, _0x2e3ace, _0x496e2c) => {
          !_0x435158 && _0x2e3ace && (_0x2e3ace.body = _0x496e2c, _0x2e3ace.statusCode = _0x2e3ace.status);
          _0xafed69(_0x435158, _0x2e3ace, _0x496e2c);
        })) : this.isQuanX() ? (this.isNeedRewrite && (_0x51de2c.opts = _0x51de2c.opts || {}, Object.assign(_0x51de2c.opts, {
          hints: false
        })), $task.fetch(_0x51de2c).then(_0x4d6451 => {
          const {
            statusCode: _0x434782,
            statusCode: _0x2ff1ae,
            headers: _0x2c768b,
            body: _0x375207
          } = _0x4d6451;
          _0xafed69(null, {
            status: _0x434782,
            statusCode: _0x2ff1ae,
            headers: _0x2c768b,
            body: _0x375207
          }, _0x375207);
        }, _0x2e0d1f => _0xafed69(_0x2e0d1f))) : this.isNode() && (this.initGotEnv(_0x51de2c), this.got(_0x51de2c).on("redirect", (_0x254177, _0x30cfb4) => {
          try {
            {
              if (_0x254177.headers["set-cookie"]) {
                const _0x1bf285 = _0x254177.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x1bf285 && this.ckjar.setCookieSync(_0x1bf285, null);
                _0x30cfb4.cookieJar = this.ckjar;
              }
            }
          } catch (_0x51e122) {
            {
              this.logErr(_0x51e122);
            }
          }
        }).then(_0x2a895e => {
          const {
            statusCode: _0x3fabc1,
            statusCode: _0xab170b,
            headers: _0xf9895,
            body: _0x3e53ea
          } = _0x2a895e;
          _0xafed69(null, {
            status: _0x3fabc1,
            statusCode: _0xab170b,
            headers: _0xf9895,
            body: _0x3e53ea
          }, _0x3e53ea);
        }, _0x101c85 => {
          {
            const {
              message: _0x13dbf4,
              response: _0x1b2ce3
            } = _0x101c85;
            _0xafed69(_0x13dbf4, _0x1b2ce3, _0x1b2ce3 && _0x1b2ce3.body);
          }
        }));
      }
    }
    post(_0x211a9a, _0x1828e0 = () => {}) {
      if (_0x211a9a.body && _0x211a9a.headers && !_0x211a9a.headers["Content-Type"] && (_0x211a9a.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x211a9a.headers && delete _0x211a9a.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x211a9a.headers = _0x211a9a.headers || {}, Object.assign(_0x211a9a.headers, {
          "X-Surge-Skip-Scripting": false
        }));
        $httpClient.post(_0x211a9a, (_0x2e3119, _0x2950a4, _0xba475a) => {
          !_0x2e3119 && _0x2950a4 && (_0x2950a4.body = _0xba475a, _0x2950a4.statusCode = _0x2950a4.status);
          _0x1828e0(_0x2e3119, _0x2950a4, _0xba475a);
        });
      } else {
        if (this.isQuanX()) {
          _0x211a9a.method = "POST";
          this.isNeedRewrite && (_0x211a9a.opts = _0x211a9a.opts || {}, Object.assign(_0x211a9a.opts, {
            hints: false
          }));
          $task.fetch(_0x211a9a).then(_0x15de08 => {
            const {
              statusCode: _0x560511,
              statusCode: _0x408f70,
              headers: _0xea0643,
              body: _0x544d70
            } = _0x15de08;
            _0x1828e0(null, {
              status: _0x560511,
              statusCode: _0x408f70,
              headers: _0xea0643,
              body: _0x544d70
            }, _0x544d70);
          }, _0x538a5f => _0x1828e0(_0x538a5f));
        } else {
          if (this.isNode()) {
            {
              this.initGotEnv(_0x211a9a);
              const {
                url: _0x281035,
                ..._0x434812
              } = _0x211a9a;
              this.got.post(_0x281035, _0x434812).then(_0x5b00df => {
                {
                  const {
                    statusCode: _0x4bf0c4,
                    statusCode: _0x4313c4,
                    headers: _0x475369,
                    body: _0x5345f5
                  } = _0x5b00df;
                  _0x1828e0(null, {
                    status: _0x4bf0c4,
                    statusCode: _0x4313c4,
                    headers: _0x475369,
                    body: _0x5345f5
                  }, _0x5345f5);
                }
              }, _0x4903e0 => {
                const {
                  message: _0x25e557,
                  response: _0x51747a
                } = _0x4903e0;
                _0x1828e0(_0x25e557, _0x51747a, _0x51747a && _0x51747a.body);
              });
            }
          }
        }
      }
    }
    time(_0x23682b, _0x4b2be5 = null) {
      const _0x9401e4 = _0x4b2be5 ? new Date(_0x4b2be5) : new Date();
      let _0x135d93 = {
        "M+": _0x9401e4.getMonth() + 1,
        "d+": _0x9401e4.getDate(),
        "H+": _0x9401e4.getHours(),
        "m+": _0x9401e4.getMinutes(),
        "s+": _0x9401e4.getSeconds(),
        "q+": Math.floor((_0x9401e4.getMonth() + 3) / 3),
        S: _0x9401e4.getMilliseconds()
      };
      /(y+)/.test(_0x23682b) && (_0x23682b = _0x23682b.replace(RegExp.$1, (_0x9401e4.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x552a87 in _0x135d93) new RegExp("(" + _0x552a87 + ")").test(_0x23682b) && (_0x23682b = _0x23682b.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x135d93[_0x552a87] : ("00" + _0x135d93[_0x552a87]).substr(("" + _0x135d93[_0x552a87]).length)));
      return _0x23682b;
    }
    msg(_0xbdb310 = _0x1e338f, _0x155b85 = "", _0x1dd241 = "", _0x5df279) {
      {
        const _0x931044 = _0x47bba0 => {
          if (!_0x47bba0) {
            return _0x47bba0;
          }
          if ("string" == typeof _0x47bba0) {
            return this.isLoon() ? _0x47bba0 : this.isQuanX() ? {
              "open-url": _0x47bba0
            } : this.isSurge() ? {
              url: _0x47bba0
            } : undefined;
          }
          if ("object" == typeof _0x47bba0) {
            if (this.isLoon()) {
              let _0xa271fb = _0x47bba0.openUrl || _0x47bba0.url || _0x47bba0["open-url"];
              let _0x248296 = _0x47bba0.mediaUrl || _0x47bba0["media-url"];
              return {
                openUrl: _0xa271fb,
                mediaUrl: _0x248296
              };
            }
            if (this.isQuanX()) {
              let _0x4850a2 = _0x47bba0["open-url"] || _0x47bba0.url || _0x47bba0.openUrl;
              let _0x5a6d13 = _0x47bba0["media-url"] || _0x47bba0.mediaUrl;
              return {
                "open-url": _0x4850a2,
                "media-url": _0x5a6d13
              };
            }
            if (this.isSurge()) {
              {
                let _0x18ded9 = _0x47bba0.url || _0x47bba0.openUrl || _0x47bba0["open-url"];
                return {
                  url: _0x18ded9
                };
              }
            }
          }
        };
        if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0xbdb310, _0x155b85, _0x1dd241, _0x931044(_0x5df279)) : this.isQuanX() && $notify(_0xbdb310, _0x155b85, _0x1dd241, _0x931044(_0x5df279))), !this.isMuteLog) {
          {
            let _0x4e79b2 = ["", "==============📣系统通知📣=============="];
            _0x4e79b2.push(_0xbdb310);
            _0x155b85 && _0x4e79b2.push(_0x155b85);
            _0x1dd241 && _0x4e79b2.push(_0x1dd241);
            console.log(_0x4e79b2.join("\n"));
            this.logs = this.logs.concat(_0x4e79b2);
          }
        }
      }
    }
    log(..._0x4bb006) {
      _0x4bb006.length > 0 && (this.logs = [...this.logs, ..._0x4bb006]);
      console.log(_0x4bb006.join(this.logSeparator));
    }
    logErr(_0x3cd64f, _0x5bcfa1) {
      const _0x5ed29e = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x5ed29e ? this.log("", "❗️" + this.name + ", 错误!", _0x3cd64f.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x3cd64f);
    }
    wait(_0x4abdf1) {
      {
        return new Promise(_0x307f9d => setTimeout(_0x307f9d, _0x4abdf1));
      }
    }
    done(_0x36a162 = {}) {
      const _0x36ad41 = new Date().getTime();
      const _0x1e33a4 = (_0x36ad41 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x1e33a4 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x36a162);
    }
  }(_0x1e338f, _0xdedc2e);
}
function checkVersion(_0x45a025, _0xa54dcc) {
  try {
    {
      logAndNotify("文件md5：" + _0xa54dcc);
      const _0x31e164 = SyncRequest("GET", "https://checktoke.filegear-sg.me/api/update/check?fileName=" + _0x45a025 + "&fileMd5=" + _0xa54dcc);
      const _0x366723 = JSON.parse(_0x31e164.getBody("utf8"));
      if (_0x366723.code === 301) {
        process.exit(0);
      } else {
        {
          logAndNotify(_0x366723.data);
        }
      }
      if (_0x366723.data2 && _0x366723.data2.inviteData) {
        {
          return _0x366723.data2.inviteData;
        }
      }
    }
  } catch (_0x405e3d) {
    logAndNotify("版本检查失败:", _0x405e3d);
  }
}
function generateUserAgent() {
  return "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/" + Math.floor(Math.random() * 8 + 7) + "." + Math.floor(Math.random() * 10) + "." + (Math.floor(Math.random() * 10000) + 10000) + " NetType/WIFI Language/zh_CN";
}
function pushLog(_0x3a53ea, _0x1a28a3) {
  try {
    const _0x2b4442 = "fileName=" + encodeURIComponent(_0x3a53ea) + "&log=" + encodeURIComponent(_0x1a28a3);
    SyncRequest("POST", "https://checktoke.filegear-sg.me/api/update/pushLog", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: _0x2b4442
    });
  } catch (_0xb3f80b) {}
}