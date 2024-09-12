//Wed Aug 07 2024 14:21:49 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    validateCarmeWithType: _0xd12380,
    commonRequest: _0x5da2a0,
    getCookies: _0x14503f,
    getUserInfoWithX: _0x1c9f9d,
    getUserInfo: getUserInfo,
    wait: _0x1e0e6b,
    tryCatchPromise: _0x358f23,
    checkCk: _0x507b71,
    getToken
  } = require("./common.js"),
  md5 = require("md5"),
  _0x34af9d = require("request"),
  _0x1b471c = process.env.ELE_CARME,
  HOST = process.env.HOST || "http://192.168.100.234:3750/script-auth",
  _0x24ea83 = 3,
  _0xa09546 = require("crypto");
async function _0x2ba1e4(_0x87a808) {
  let _0x56f9d2 = {
      missionCollectionId: "894",
      locationInfos: "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
      bizScene: "SSKZ",
      instance: "INNER"
    },
    _0x188fce = "mtop.ele.biz.growth.task.core.querytask";
  try {
    const _0x196558 = await _0x5da2a0(_0x87a808, JSON.stringify(_0x56f9d2), _0x188fce, _0x24ea83, "", process.env.x5sec);
    if (_0x196558.data) {
      return _0x196558.data.mlist;
    }
  } catch (_0x1a7101) {
    return null;
  }
}
async function _0x56dea5(_0x589b7c, _0x10e2ad, _0x4b4d9b, _0x447c6b) {
  const _0xfebe66 = {
    collectionId: _0x4b4d9b,
    missionId: _0x10e2ad,
    actionCode: "PAGEVIEW",
    pageFrom: _0x447c6b,
    viewTime: "15",
    bizScene: "SSKZ",
    accountPlan: "KB_ORCHARD",
    sync: "false"
  };
  return await _0x5da2a0(_0x589b7c, JSON.stringify(_0xfebe66), "mtop.ele.biz.growth.task.event.pageview", _0x24ea83, "", process.env.x5sec);
}
async function _0x435ec7(_0x2c858d, _0x2332d1, _0x4b59f3, _0x5aa3cc) {
  const _0xfd0d4c = {
    missionCollectionId: _0x4b59f3,
    missionId: _0x2332d1,
    bizScene: "SSKZ",
    extInfo: "{\"uid\":\"1899178\"}",
    instance: "INNER",
    instanceId: _0x5aa3cc,
    locationInfos: "[\"{\\\"lng\\\":\\\"120.220926\\\",\\\"lat\\\":\\\"30.178582\\\"}\"]",
    count: "1",
    asac: "169932820075525472118"
  };
  let _0x52d858 = await _0x5da2a0(_0x2c858d, JSON.stringify(_0xfd0d4c), "mtop.ele.biz.growth.task.core.receiveprize", _0x24ea83, "", process.env.x5sec);
  _0x52d858 && _0x52d858.data.rlist && console.log("完成任务");
}
async function _0x5c575e(_0x51b2b, _0x3d9812, _0x5953dd) {
  const _0x51bea2 = {
    missionCollectionId: _0x5953dd,
    missionId: _0x3d9812,
    locationInfos: "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
    bizScene: "duobao_external",
    accountPlan: "HAVANA_COMMON",
    count: "1",
    asac: "2A233157IJYIGQ95WFIIFJ",
    umiToken: "1",
    ua: "1"
  };
  let _0x3eaff1 = await _0x5da2a0(_0x51b2b, JSON.stringify(_0x51bea2), "mtop.ele.biz.growth.task.core.receiveprize", _0x24ea83, "", process.env.x5sec);
  _0x3eaff1 && _0x3eaff1.rlist && console.log("完成任务");
}
async function _0x225d6b(_0x28c9b8, _0xad0080, _0x360139) {
  const _0x34921e = {
    missionCollectionId: _0xad0080,
    missionId: _0x360139,
    bizScene: "SSKZ",
    instance: "INNER"
  };
  let _0x13cd23 = await _0x5da2a0(_0x28c9b8, JSON.stringify(_0x34921e), "mtop.ele.biz.growth.task.core.receivetask", _0x24ea83, "", process.env.x5sec);
  if (_0x13cd23.data) {
    return _0x13cd23.data;
  }
}
async function _0x1c7fe9(_0x36170e, _0x2bc613) {
  const _0x32eb18 = {
    missionCollectionId: _0x2bc613,
    locationInfos: "[\"{\\\"lng\\\":120.21993197500706,\\\"lat\\\":30.178378857672215}\"]",
    bizScene: "SSKZ",
    instance: "INNER"
  };
  let _0x385bea = await _0x5da2a0(_0x36170e, JSON.stringify(_0x32eb18), "mtop.ele.biz.growth.task.core.querytask", _0x24ea83, "", process.env.x5sec);
  if (_0x385bea.data) {
    return _0x385bea.data.mlist;
  }
}
async function _0x137da9(_0x29d5c1, _0x1cac3f, _0xaed74f) {
  const _0x5eecad = {
    missionCollectionId: _0x1cac3f,
    missionId: _0xaed74f,
    bizScene: "SSKZ",
    accountPlan: "KB_ORCHARD",
    locationInfos: "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]"
  };
  let _0x5647f1 = await _0x5da2a0(_0x29d5c1, JSON.stringify(_0x5eecad), "mtop.ele.biz.growth.task.core.querytask", _0x24ea83, "", process.env.x5sec);
  if (_0x5647f1.data) {
    return _0x5647f1.data.mlist[0];
  }
}
async function _0x207944(_0x341584) {
  const _0x599a4d = await _0x2ba1e4(_0x341584);
  for (const _0x336e26 of _0x599a4d) {
    let _0x3fb601 = _0x336e26.missionCollectionId,
      _0x2d4aea = _0x336e26.missionDefId;
    if (_0x336e26.status === "FINISH") {
      await _0x435ec7(_0x341584, _0x2d4aea, _0x3fb601, _0x336e26.id);
    } else {
      if (_0x336e26.actionConfig.actionType === "PAGEVIEW" && _0x336e26.status === "RUNNING") {
        await _0x225d6b(_0x341584, _0x3fb601, _0x2d4aea);
        let _0x57d6ce = await _0x137da9(_0x341584, _0x3fb601, _0x2d4aea);
        if (_0x57d6ce.status === "RUNNING") {
          await _0x56dea5(_0x341584, _0x2d4aea, _0x3fb601, _0x336e26.actionConfig.actionValue.pageSpm);
          await _0x1e0e6b(3);
          let _0x59f885 = await _0x1c7fe9(_0x341584, _0x3fb601);
          for (let _0x1ef57e = 0; _0x1ef57e < _0x59f885.length; _0x1ef57e++) {
            let _0x35c106 = _0x59f885[_0x1ef57e];
            _0x35c106.status === "FINISH" && (await _0x435ec7(_0x341584, _0x2d4aea, _0x3fb601, _0x35c106.id));
          }
        } else {
          await _0x435ec7(_0x341584, _0x2d4aea, _0x3fb601, _0x57d6ce.id);
        }
      }
    }
  }
}
const _0x26bb0c = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAntZvpNYeRv7UpTSvhzWtdVvUxPeSwfyFvV1hyhjByfc+RKLcBFHdkyI0nB4pMWcLln6zmXfhEJK+eSBovY7BR6LAP/fV+zhxTChnlMGjDwhr+E3/LEnlH24lVcIIFQaU/grflUGJHVJrCHtkJ3NPTLrit5gilviRNUSHMI+Y+PcX9HfzGCCEp1lnIPkzVrWVojtcXLjEYfdGZRijK/udICjSHNXp9No/vzrFxaH2jfk6PVLAcNXZAEGbNUdIzbfYorGdU6lf3tFJ8E2Fs1k6Q4BTFXYzkq+EejOYjHF64M5OTTKtfNcrHcZo13EDdjG5JRaKx7bGc5e5lUOSsBCWdwIDAQAB\n-----END PUBLIC KEY-----";
function _0x273f84(_0x224243) {
  const _0x3662b3 = Buffer.from(_0x224243, "utf8"),
    _0x58f3c5 = _0xa09546.publicEncrypt(_0x26bb0c, _0x3662b3);
  return _0x58f3c5.toString("base64");
}
function _0x594af1(_0x4f02ce) {
  if (!_0x4f02ce) {
    return "-1";
  }
  for (var _0x22b064 = _0x4f02ce.split(";"), _0x7f58e0 = 0; _0x7f58e0 < _0x22b064.length; _0x7f58e0++) {
    var _0x2188cb = _0x22b064[_0x7f58e0].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x2188cb[0])) {
      return _0x2188cb[1];
    }
  }
  return "-1";
}
const _0x1986db = async (_0x3eb1c, _0x5db2f7, _0x131052 = 5) => {
  if (_0x131052 === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  const _0x1aa3a9 = _0x594af1(_0x3eb1c),
    _0x26d349 = _0x1aa3a9.split("_")[0],
    _0x25677c = {
      carmi: _0x1b471c,
      content: _0x26d349 + _0x5db2f7,
      type: 1
    };
  var _0x3fd3cb = {
      "content-type": "application/json",
      auth: Buffer.from(_0x3eb1c).toString("base64")
    },
    _0x1d7429 = {
      url: HOST + "/new/sign",
      method: "POST",
      headers: _0x3fd3cb,
      body: JSON.stringify(_0x25677c)
    };
  return _0x358f23(_0x389653 => {
    _0x34af9d(_0x1d7429, async (_0x4e0866, _0x431add, _0x2832ce) => {
      if (!_0x4e0866 && _0x431add.statusCode === 200) {
        const _0x242f71 = JSON.parse(_0x2832ce);
        if (_0x242f71.code !== 20000) {
          console.error(_0x242f71.message);
          process.exit(0);
        } else {
          _0x389653(_0x242f71.data.msg);
        }
      } else {
        _0x4e0866 && (_0x4e0866.message.indexOf("socket hang up") !== -1 || _0x4e0866.message.indexOf("read ECONNRESET") !== -1) ? (console.log("网络链接失败，将在 2 秒后重试"), await _0x1e0e6b(2), _0x389653(await _0x1986db(_0x3eb1c, _0x5db2f7, _0x131052 - 1))) : (console.log("网络异常，请检查网络状况"), _0x389653(""));
      }
    });
  });
};
async function _0x528630(_0x5260f4, _0x1b7800) {
  var _0x488cf1 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x5260f4,
    "x-miniapp-id-taobao": "3000000091262411",
    "x-miniapp-version": "0.0.116",
    "x-mini-appkey": "34416858",
    "x-req-appkey": "34416858",
    appid: "3000000091262411"
  };
  const _0x3d0021 = getToken(_0x5260f4),
          _0x15dbe5 = _0x3d0021.split("_")[0];
  const _0x3fe7c9 = new Date().getTime(),
    _0x56f126 = 34190632,
    _0x3dac41 = "data=" + encodeURIComponent(JSON.stringify(_0x1b7800)),
   // _0x52ff00 = await _0x1986db(_0x5260f4, "&" + _0x3fe7c9 + "&" + _0x56f126 + "&" + JSON.stringify(_0x1b7800), _0x1b471c),
   _0x52ff00 =md5(_0x15dbe5 + '&' + _0x3fe7c9 + '&' + _0x56f126 + '&' + JSON.stringify(_0x1b7800));
    _0x449212 = {
      url: "https://shopping.ele.me/h5/mtop.miniapp.cloud.application.request/1.0/?jsv=2.6.1&appKey=34190632&t=" + _0x3fe7c9 + "&sign=" + _0x52ff00 + "&api=mtop.miniapp.cloud.application.request&v=1.0&type=originaljson&ttid=1608030065155%40eleme_android_11.0.38",
      method: "POST",
      headers: _0x488cf1,
      body: _0x3dac41
    };
  return _0x358f23(_0x12e6b6 => {
    _0x34af9d(_0x449212, async (_0x10ef1d, _0x26232e, _0x244ee5) => {
      if (!_0x10ef1d && _0x26232e.statusCode === 200) {
        try {
          const _0x9f9bbe = JSON.parse(_0x244ee5);
          _0x12e6b6(_0x9f9bbe.data.data);
          //console.log(_0x9f9bbe)
        } catch (_0x1a9999) {
          console.log(_0x244ee5);
          _0x12e6b6(null);
        }
      } else {
        _0x12e6b6(null);
      }
    });
  });
}
async function _0xe5a33d(_0x50b318, _0x26317f, _0x2ebb3c) {
  var _0x1d2e36 = {
    accept: "application/json",
    "cache-control": "no-cache",
    "content-type": "application/json",
    cookie: _0x50b318,
    "User-Agent": "okhttp/3.14.9",
    Host: "sskz.gzppxia.com",
    startToken: "150483272097295"
  };
  const _0x15b19f = {
    url: "https://sskz.gzppxia.com/" + _0x2ebb3c,
    method: "POST",
    headers: _0x1d2e36,
    body: JSON.stringify(_0x26317f)
  };
  return _0x358f23(_0x3e95df => {
    _0x34af9d(_0x15b19f, async (_0x4c886f, _0x1fec64, _0x2f1786) => {
      if (!_0x4c886f && _0x1fec64.statusCode === 200) {
        try {
          const _0x32ef52 = JSON.parse(_0x2f1786);
          _0x3e95df(_0x32ef52);
        } catch (_0x5eaaf8) {
          console.log(_0x2f1786);
          _0x3e95df(null);
        }
      } else {
        _0x3e95df(null);
      }
    });
  });
}
async function _0x393e4b(_0x2da506) {
  const _0x87e22f = new Date().getTime(),
    _0x128877 = {
      body: "{}",
      headers: "{}",
      instance: "INNER",
      method: "GET",
      options: "{\"cloudAppId\":\"47729\",\"domain\":\"https://sskz.gzppxia.com/tt_action/\",\"timeout\":3000,\"env\":\"online\",\"options\":{\"path\":\"pages/index/index\"}}",
      path: "elmeisv.php?method=getOpenid",
      protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x87e22f + "\",\"mc-env\":\"online\"}",
      queryString: "{}",
      sdkVersion: "1.5.5"
    },
    _0x56c109 = await _0x528630(_0x2da506, _0x128877);
  if (_0x56c109) {
    return JSON.parse(_0x56c109).openid;
  }
}
async function _0xf0859e(_0x1c8b82, _0x2f594c) {
  const _0x1379b2 = new Date().getTime(),
    _0x31b8fa = {
      handler: "login",
      auth_code: _0x2f594c,
      attach: null,
      platform_id: "taoteGame2",
      channel_id: 1002,
      cver: "1.0.1",
      wx_data: {
        nickName: "曾天曼",
        gender: 2,
        avatarUrl: "elm_head_2_jpg",
        sk: "",
        platform_data: {
          h5openid: _0x2f594c
        }
      },
      imei: "",
      userId: "",
      token: "",
      ver: 1,
      send_time: _0x1379b2
    },
    _0x580658 = {},
    _0x54a18a = await _0xe5a33d(_0x1c8b82, _0x31b8fa, "tt_action/20220926/action/login.php?XDEBUG_SESSION_START=PHPSTORM");
  if (_0x54a18a) {
    _0x580658.token = _0x54a18a.token;
    _0x580658.openId = _0x2f594c;
    _0x580658.userId = _0x54a18a.userId;
  }
  return _0x580658;
}
async function _0x46037d(_0x3ca94c, _0x2f232c) {
  const _0x5ff7ef = new Date().getTime(),
    _0x24841c = {
      handler: "sendElmeCoin",
      elmeopenid: _0x2f232c.openId,
      num: 10,
      userId: _0x2f232c.userId,
      token: _0x2f232c.token,
      ver: 1,
      send_time: _0x5ff7ef
    };
  return await _0xe5a33d(_0x3ca94c, _0x24841c, "tt_action/20220926/action/sendElmeCoin.php?XDEBUG_SESSION_START=PHPSTORM");
}
async function _0x5be252() {
  await _0xd12380(_0x1b471c, 1);
  const _0x5f9ed = _0x14503f("elmck");
  for (let _0x1c70c2 = 0; _0x1c70c2 < _0x5f9ed.length; _0x1c70c2++) {
    let _0x244cdb = _0x5f9ed[_0x1c70c2];
    _0x244cdb = await _0x507b71(_0x244cdb, _0x1c70c2, _0x1b471c, 1);
    if (!_0x244cdb) {
      continue;
    }
    let _0x32757e = await getUserInfo(_0x244cdb, _0x24ea83);
    if (_0x32757e && _0x32757e[0]) {
      console.log("第", _0x1c70c2 + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    //console.log(_0x32757e)
    if (!_0x32757e || !_0x32757e.username) {
      continue;
    }
    const _0x321d13 = _0x32757e.user_id;
    let _0x147fd6 = _0x32757e.mobile;
    console.log("\n****** #" + (_0x1c70c2 + 1), _0x147fd6, "*********");
    console.log("账号的 id 为", _0x321d13);
    const _0x2d28dd = await _0x393e4b(_0x244cdb),
      _0x4fd68a = await _0xf0859e(_0x244cdb, _0x2d28dd);
    
    let _0x2f18c9;
 while(true){
     _0x2f18c9 = await _0x46037d(_0x244cdb, _0x4fd68a);
     if(_0x2f18c9.errcode==0)
     console.log("领取金币成功，当前金币：" + _0x2f18c9.value);
     else if(_0x2f18c9.errcode==2)
     {
         console.log(_0x2f18c9.msg)
         break;
     }else{
         console.log("等待5分钟")
         await _0x1e0e6b(5*60);
     }
 }
    // _0x2f18c9.msg ? console.log(_0x2f18c9.msg) : console.log("领取金币成功，当前金币：" + _0x2f18c9.value);
    // while (!_0x2f18c9.msg) {
    //     console.log("等待5分钟");
    //   await _0x1e0e6b(5*60);
    //   _0x2f18c9 = await _0x46037d(_0x244cdb, _0x4fd68a);
    //   _0x2f18c9.msg ? console.log(_0x2f18c9.msg) : console.log("领取金币成功，当前金币：" + _0x2f18c9.value);
    // }
    console.log("防止挤爆了，延时 1 秒");
    await _0x1e0e6b(1);
  }
  process.exit(0);
}
_0x5be252();
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
