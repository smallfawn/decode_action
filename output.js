//Thu Jul 18 2024 15:23:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  tryCatchPromise,
  validateCarmeWithType,
  getCookies,
  checkCk,
  getUserInfo,
  wait,
  sign
} = require("./common");
const _0x377db5 = 19;
const _0x474d05 = require("request");
const _0x3e756f = require("md5");
let _0x38207a = 1;
let _0x4e56d7;
const _0x347735 = process.env.ELE_CARME;
let _0x59276b;
async function _0x5efbc2(_0x1f8369) {
  let _0x5123dc = await _0x26f4aa("mtop.alsc.playgame.common.real.name.authentication", _0x1f8369, 1);
  return _0x5123dc.authentication;
}
async function _0x274abd(_0x205406) {
  const _0x51d08e = new Date().getTime();
  const _0x4a6101 = {
    reqIdx: _0x38207a,
    time: _0x51d08e
  };
  let _0x53f029 = await _0x26f4aa("mtop.miniapp.cloud.application.request", _0x205406, 2, _0x4a6101);
  if (_0x53f029) {
    return _0x53f029.data;
  }
  return null;
}
async function _0x2e7075(_0x2f111b) {
  const _0x142a48 = new Date().getTime();
  _0x38207a++;
  const _0x3e59ce = {
    reqIdx: _0x38207a,
    gameId: _0x2e88e4,
    token: _0x531a62,
    time: _0x142a48
  };
  return await _0x26f4aa("mtop.miniapp.cloud.application.request", _0x2f111b, 4, _0x3e59ce);
}
async function _0xfae947(_0x599b7d) {
  const _0x526903 = new Date().getTime();
  _0x38207a++;
  const _0x44d6b7 = {
    reqIdx: _0x38207a,
    gameId: _0x2e88e4,
    token: _0x531a62,
    time: _0x526903
  };
  let _0x1394e8 = await _0x26f4aa("mtop.miniapp.cloud.application.request", _0x599b7d, 7, _0x44d6b7);
  let _0x2368f1 = _0x1394e8.data;
  if (_0x2368f1) {
    try {
      let _0x3c60c4 = _0x2368f1.taskInfo.dailyTasks;
      if (_0x3c60c4) {
        for (const _0x270729 of Object.keys(_0x3c60c4)) {
          const _0x587f58 = _0x3c60c4[_0x270729];
          if (_0x587f58.type === 3 && !_0x587f58.haveGotReward) {
            let _0xb52f7 = await _0x518f1b(_0x599b7d, _0x270729);
            if (_0xb52f7.data) {
              console.log("领取任务奖励完成，当前乐园币", _0xb52f7.data.elemCoin);
            }
          }
        }
      }
    } catch (_0x49faad) {}
  }
}
async function _0x518f1b(_0x33cc2d, _0x54f064) {
  const _0x36844e = new Date().getTime();
  _0x38207a++;
  const _0x22e111 = {
    taskId: _0x54f064,
    reqIdx: _0x38207a,
    gameId: _0x2e88e4,
    token: _0x531a62,
    time: _0x36844e
  };
  return await _0x26f4aa("mtop.miniapp.cloud.application.request", _0x33cc2d, 8, _0x22e111);
}
async function _0x30b905(_0x233c55, _0x42d25f) {
  const _0x29cc31 = new Date().getTime();
  _0x38207a++;
  const _0x51c272 = {
    pos: JSON.stringify(_0x42d25f),
    reqIdx: _0x38207a,
    gameId: _0x2e88e4,
    token: _0x531a62,
    time: _0x29cc31
  };
  let _0x11e9ed = await _0x26f4aa("mtop.miniapp.cloud.application.request", _0x233c55, 5, _0x51c272);
  if (_0x11e9ed.data) {
    for (let _0x24e9d3 = 0; _0x24e9d3 < _0x56aaf0.length; _0x24e9d3++) {
      let _0x48b8f8 = _0x56aaf0[_0x24e9d3];
      if (_0x11e9ed.data.piece.pieceId === _0x48b8f8.pieceId) {
        _0x56aaf0[_0x24e9d3] = _0x11e9ed.data.piece;
      }
    }
    console.log("售卖植物，当前金币", _0x11e9ed.data.coin);
  }
  return _0x11e9ed;
}
function _0x4bf840(_0x17c91f) {
  if (!_0x17c91f) {
    return "-1";
  }
  for (var _0x377fa0 = _0x17c91f.split(";"), _0x582af0 = 0; _0x582af0 < _0x377fa0.length; _0x582af0++) {
    var _0x537ee4 = _0x377fa0[_0x582af0].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x537ee4[0])) {
      return _0x537ee4[1];
    }
  }
  return "-1";
}
async function _0x26f4aa(_0x285ca2, _0x20c4f7, _0x183391, _0x189373 = {}) {
  const _0x2da924 = {
    accept: "application/json",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x20c4f7,
    "x-miniapp-id-taobao": "3000000088680964",
    "x-miniapp-version": "0.0.24",
    "x-mini-appkey": "34351764",
    "x-miniapp-env": "{\"nbsn\":\"ONLINE\",\"nbsource\":\"online\"}",
    "x-req-appkey": "34351764",
    "x-open-biz": "mini-app",
    "x-open-biz-data": "%7B%22appId%22%3A%223000000088680964%22%2C%22invokerAppId%22%3A%223000000088680964%22%2C%22viaFusionApp%22%3Atrue%7D",
    "x-exttype": "isv_open_api",
    appid: "3000000088680964"
  };
  _0x189373.userId = _0x4e56d7.toString();
  const _0x45cd12 = new Date().getTime();
  const _0x428a77 = 34351764;
  const _0x2cd43e = _0x4bf840(_0x20c4f7),
    _0x2c5200 = _0x2cd43e.split("_")[0];
  const _0x223216 = await sign(_0x377db5, _0x183391, _0x428a77, _0x2c5200, _0x45cd12, _0x189373);
  const _0x126e9a = _0x223216.sign;
  const _0x114357 = {
    url: "https://shopping.ele.me/h5/" + _0x285ca2 + "/1.0/?jsv=2.6.1&appKey=34351764&t=" + _0x45cd12 + "&sign=" + _0x126e9a + "&api=" + _0x285ca2 + "&v=1.0&type=originaljson&ttid=1608030065155%40eleme_android_11.0.38",
    method: "POST",
    headers: _0x2da924,
    body: "data=" + _0x223216.content
  };
  return tryCatchPromise(_0x564592 => {
    _0x474d05(_0x114357, async (_0x587a74, _0x62f287, _0x1ad135) => {
      if (!_0x587a74 && _0x62f287.statusCode === 200) {
        try {
          const _0x20ce6d = JSON.parse(_0x1ad135);
          _0x564592(_0x20ce6d.data.data);
        } catch (_0x47f91f) {
          console.log(_0x1ad135);
          _0x564592(null);
        }
      } else {
        _0x564592(null);
      }
    });
  });
}
let _0x2e88e4;
let _0x531a62;
let _0x56aaf0 = [];
let _0x224547 = [];
let _0x3ebe91 = [];
async function _0x30a48f(_0x5440ba, _0x529da1) {
  await _0x508f84(_0x529da1);
  await _0x21ff6f(_0x5440ba);
  await _0x2e7075(_0x5440ba);
  let _0x4355d6 = await _0x292f1d(_0x5440ba);
  while (_0x4355d6 === 0) {
    let _0x4ace15 = await _0x274abd(_0x5440ba);
    await _0x508f84(_0x4ace15);
    _0x4355d6 = await _0x292f1d(_0x5440ba);
  }
  await _0xfae947(_0x5440ba);
}
async function _0x508f84(_0xeab7ce) {
  _0x2e88e4 = null;
  _0x531a62 = null;
  _0x56aaf0 = [];
  _0x224547 = [];
  _0x3ebe91 = [];
  _0x2e88e4 = _0xeab7ce.gameId;
  _0x531a62 = _0xeab7ce.token;
  _0x59276b = _0xeab7ce.cropInfo.ownCropMap;
  let _0x4beb5d = _0xeab7ce.gardenInfo.checkerboard;
  for (let _0x433b8e = 0; _0x433b8e < _0x4beb5d.length; _0x433b8e++) {
    let _0x4a1571 = _0x4beb5d[_0x433b8e];
    for (let _0x28f0d2 = 0; _0x28f0d2 < _0x4a1571.length; _0x28f0d2++) {
      let _0x37fc77 = _0x4a1571[_0x28f0d2];
      if (!_0x37fc77.isLock) {
        _0x56aaf0.push(_0x37fc77);
      }
    }
  }
  Object.keys(_0x59276b).forEach(_0xbc9cdb => {
    let _0x3de129 = _0x59276b[_0xbc9cdb];
    if (_0x3de129.seeds.length > 0) {
      let _0x33d46e = _0x29e374(_0x3de129.queryId);
      if (_0x33d46e) {
        _0x33d46e.seeds = _0x3de129.seeds;
        _0x3ebe91.push(_0x33d46e);
      }
    }
  });
  _0x224547 = _0xeab7ce.orderInfo.orderArray;
}
async function _0x230a7c(_0x6504c5) {
  for (let _0x4371aa = 0; _0x4371aa < _0x3ebe91.length; _0x4371aa++) {
    let _0x9ecfd = _0x3ebe91[_0x4371aa];
    if (!_0x9ecfd) {
      console.log("需要解锁新母体植物");
      return;
    }
    let _0xc2223a = [];
    for (let _0x1d45b8 = 0; _0x1d45b8 < _0x56aaf0.length; _0x1d45b8++) {
      let _0x3448cb = _0x56aaf0[_0x1d45b8];
      if (!_0x3448cb.cropQueryId) {
        const _0x1b9538 = {
          producedCrop: {}
        };
        _0x1b9538.type = 2;
        _0x1b9538.pos1 = _0x9ecfd.pos;
        _0x1b9538.pos2 = _0x3448cb.pos;
        _0x1b9538.timestamp = new Date().getTime();
        _0x1b9538.producedCrop.queryId = _0xc53da4(_0x59276b, 1);
        _0x1b9538.producedCrop.cropId = _0x9ecfd.seeds[0];
        _0xc2223a.push(_0x1b9538);
      }
    }
    if (_0xc2223a.length > 0) {
      console.log("开始种植新的植物");
      let _0x1ed8d7 = await _0x27ef0e(_0x6504c5, _0xc2223a);
      if (_0x1ed8d7 === -1) {
        return -1;
      } else {
        if (_0x1ed8d7 === 1 || _0x1ed8d7 == null) {
          continue;
        }
      }
      return 0;
    }
  }
}
async function _0x292f1d(_0x483668) {
  for (let _0x44f280 = 0; _0x44f280 < _0x56aaf0.length; _0x44f280++) {
    let _0x434e5b = _0x56aaf0[_0x44f280];
    if (_0x434e5b.cropQueryId) {
      if (_0x59276b[_0x434e5b.cropQueryId].type === 1) {
        await _0x30b905(_0x483668, _0x434e5b.pos);
      }
    }
  }
  return await _0x230a7c(_0x483668);
}
async function _0x21ff6f(_0x26b16a) {
  const _0x584827 = new Date().getTime();
  _0x38207a++;
  const _0x26e68e = {
    reqIdx: _0x38207a,
    gameId: _0x2e88e4,
    token: _0x531a62,
    time: _0x584827
  };
  let _0x32f1a7 = await _0x26f4aa("mtop.miniapp.cloud.application.request", _0x26b16a, 3, _0x26e68e);
  return _0x32f1a7;
}
function _0x29e374(_0xa076b1) {
  for (let _0x10aa3a = 0; _0x10aa3a < _0x56aaf0.length; _0x10aa3a++) {
    let _0x503f57 = _0x56aaf0[_0x10aa3a];
    if (_0x503f57.cropQueryId === _0xa076b1) {
      return _0x503f57;
    }
  }
  return null;
}
function _0xc53da4(_0x3daaf8, _0x4e0895) {
  var _0x286e67 = _0x52554(Date.now(), Math.random());
  if (!_0x3daaf8 || !_0x3daaf8[_0x286e67] || !_0x4e0895 || _0x4e0895 <= 0) {
    return _0x286e67;
  }
  for (var _0x2df9ed = 0; _0x2df9ed < _0x4e0895; _0x2df9ed++) {
    if (!_0x3daaf8[_0x286e67 = _0x52554(Date.now(), Math.random())]) {
      return _0x286e67;
    }
    console.error("generate id failed, retry:" + (_0x2df9ed + 1) + "/" + _0x4e0895);
  }
}
function _0x52554() {
  for (var _0x536ff4 = [], _0x5e91c8 = 0; _0x5e91c8 < arguments.length; _0x5e91c8++) {
    _0x536ff4[_0x5e91c8] = arguments[_0x5e91c8];
  }
  return _0x3e756f(_0x536ff4.join("+")).toString();
}
async function _0x27ef0e(_0x488f71, _0x23ee5c) {
  await wait(3);
  _0x38207a++;
  let _0x1d2184 = JSON.stringify(_0x23ee5c);
  const _0xedd8bb = {
    cmdsStr: _0x1d2184,
    reqIdx: _0x38207a,
    gameId: _0x2e88e4,
    token: _0x531a62,
    time: Date.now()
  };
  let _0x5e0047 = await _0x26f4aa("mtop.miniapp.cloud.application.request", _0x488f71, 6, _0xedd8bb);
  if (_0x5e0047) {
    let _0x5b9588 = _0x5e0047.data;
    if (!_0x5b9588) {
      console.log(_0x5e0047);
      return null;
    }
    if (_0x5b9588.dayUsedEnergyNum) {
      console.log("今日消耗的体力为：" + _0x5b9588.dayUsedEnergyNum);
      if (_0x5b9588.dayUsedEnergyNum > 299) {
        await _0xfae947(_0x488f71);
        console.log("今日所有乐园币任务已完成");
        return -1;
      }
    }
    let _0x599b0b = _0x5b9588.changedPieceList;
    if (_0x599b0b.length === 0) {
      if (_0x5b9588.energy === 0) {
        console.log("体力不足");
        return -1;
      } else {
        console.log("种植失败，稍后重试");
        return 1;
      }
    }
    if (_0x599b0b) {
      for (let _0x4b5e60 = 0; _0x4b5e60 < _0x599b0b.length; _0x4b5e60++) {
        let _0x468cac = _0x599b0b[_0x4b5e60];
        for (let _0x527a8d = 0; _0x527a8d < _0x56aaf0.length; _0x527a8d++) {
          let _0x5552bc = _0x56aaf0[_0x527a8d];
          if (_0x468cac.pieceId === _0x5552bc.pieceId) {
            _0x56aaf0[_0x527a8d] = _0x468cac;
          }
        }
      }
    }
    let _0x4888ce = _0x5b9588.changedCropMap;
    if (_0x4888ce) {
      Object.keys(_0x4888ce).forEach(_0x3db4c5 => {
        if (_0x59276b[_0x3db4c5]) {
          if (_0x4888ce[_0x3db4c5].isDelete) {
            delete _0x59276b[_0x3db4c5];
          } else {
            _0x59276b[_0x3db4c5] = _0x4888ce[_0x3db4c5].cropInfo;
          }
        } else {
          _0x59276b[_0x3db4c5] = _0x4888ce[_0x3db4c5].cropInfo;
        }
      });
    }
  }
  return _0x5e0047;
}
async function _0x37c821() {
  await validateCarmeWithType(_0x347735, 1);
  const _0x2cbf0d = getCookies();
  for (let _0x19cd08 = 0; _0x19cd08 < _0x2cbf0d.length; _0x19cd08++) {
    const _0x226d88 = _0x2cbf0d[_0x19cd08];
    if (!_0x226d88) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x40ad93 = await checkCk(_0x226d88, _0x19cd08);
        if (!_0x40ad93) {
          continue;
        }
        let _0x1513bd = await getUserInfo(_0x40ad93);
        if (!_0x1513bd.username) {
          console.log("第", _0x19cd08 + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        _0x4e56d7 = _0x1513bd.user_id;
        console.log("******开始【饿了么账号", _0x19cd08 + 1, "】", _0x1513bd.username, "*********");
        _0x38207a = 1;
        let _0x42e5fb = await _0x5efbc2(_0x40ad93);
        if (!_0x42e5fb) {
          console.log("请完成实名认证后再来玩游戏");
          continue;
        }
        let _0x3529fc = await _0x274abd(_0x40ad93);
        if (_0x3529fc.gardenInfo.level < 4) {
          console.log("请先玩到 4 级再运行脚本");
          continue;
        }
        await _0x30a48f(_0x40ad93, _0x3529fc);
      } catch (_0x2ec74c) {
        console.log(_0x2ec74c);
      }
    }
  }
  process.exit(0);
}
_0x37c821();
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