//Sun Jul 07 2024 13:23:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("牙博士口腔微商城"),
  axios = require("axios");
let request = require("request");
const crypto = require("crypto");
request = request.defaults({
  "jar": true
});
const {
    log
  } = console,
  Notify = 1,
  debug = 0;
let ybshd = ($.isNode() ? process.env.ybshd : $.getdata("ybshd")) || "",
  ybshdArr = [],
  data = "",
  msg = "",
  a = {};
!(async () => {
  if (typeof $request !== "undefined") await GetRewrite();else {
    if (!(await Envs())) return;else {
      log("\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toLocaleString() + " \n=============================================\n");
      log("\n=================== 共找到 " + ybshdArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + ybshdArr);
      for (let _0xf864f1 = 0; _0xf864f1 < ybshdArr.length; _0xf864f1++) {
        let _0x372177 = _0xf864f1 + 1;
        addNotifyStr("\n==== 开始【第 " + _0x372177 + " 个账号】====\n", true);
        ybshd = ybshdArr[_0xf864f1];
        await checkin();
        await checkin2();
        await checkin4();
        await checkin3();
      }
    }
  }
})().catch(_0x15f3ac => log(_0x15f3ac)).finally(() => $.done());
async function checkin() {
  const _0x5e6af0 = new Date().getTime();
  let _0x47b502 = Object.assign(filterEmpty(a), {
      "task_id": 1,
      "integralactivity_id": 6,
      "code_type": 1,
      "ad": 33,
      "activity_code": 1,
      "wxapp_id": 10004,
      "token": ybshd,
      "timestamp": _0x5e6af0,
      "secret": "36c8edde3d61c0411511d3b1866f0680"
    }),
    _0x228093 = urlEncode(ksort(_0x47b502)) + "36c8edde3d61c0411511d3b1866f0680";
  return _0x47b502.sign = crypto.createHash("md5").update(encodeURIComponent(_0x228093)).digest("hex").toUpperCase(), new Promise(_0x5a9287 => {
    var _0x575110 = {
      "method": "post",
      "url": "https://mall.0512kq.cn/index.php?s=/apimicrov4/activity.Integral/sign_in",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "xweb_xhr": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090819)XWEB/9185"
      },
      "data": _0x47b502
    };
    if (debug) {
      log("\n【debug】=============== 这是  请求 url ===============");
      log(JSON.stringify(_0x575110));
    }
    axios.request(_0x575110).then(async function (_0x3fb91f) {
      try {
        data = _0x3fb91f.data;
        if (debug) {
          log("\n\n【debug】===============这是 返回data==============");
          log(JSON.stringify(_0x3fb91f.data));
        }
        log("签到:" + data.msg);
      } catch (_0x5ef3c8) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x4c1c14) {
      console.error(_0x4c1c14);
    }).then(_0x2631da => {
      _0x5a9287();
    });
  });
}
async function checkin1() {
  const _0x15e35e = new Date().getTime();
  let _0x30ad1f = Object.assign(filterEmpty(a), {
      "integralactivity_id": 6,
      "id": 4,
      "visit_type": 676,
      "ad": 33,
      "wxapp_id": 10004,
      "token": ybshd,
      "timestamp": _0x15e35e,
      "secret": "36c8edde3d61c0411511d3b1866f0680"
    }),
    _0x18e6e4 = urlEncode(ksort(_0x30ad1f)) + "36c8edde3d61c0411511d3b1866f0680";
  return _0x30ad1f.sign = crypto.createHash("md5").update(encodeURIComponent(_0x18e6e4)).digest("hex").toUpperCase(), new Promise(_0x3ee8de => {
    var _0xd25c24 = {
      "method": "post",
      "url": "https://mall.0512kq.cn/index.php?s=/apimicrov4/activity.raffle/index",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "xweb_xhr": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090819)XWEB/9185"
      },
      "data": _0x30ad1f
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0xd25c24)));
    axios.request(_0xd25c24).then(async function (_0x4d4aac) {
      try {
        data = _0x4d4aac.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x4d4aac.data)));
        cjid = data.data.raffle_detail.integral_raffle_number;
        log("剩余抽奖次数: " + data.data.raffle_detail.integral_raffle_number);
        for (let _0x3c0c4d = 1; _0x3c0c4d <= cjid; _0x3c0c4d++) {
          cjid > 0 && (await checkin2(), await $.wait(3000));
        }
      } catch (_0x3c64a3) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x40e185) {
      console.error(_0x40e185);
    }).then(_0x180f73 => {
      _0x3ee8de();
    });
  });
}
async function checkin2() {
  const _0x3bb3f4 = new Date().getTime();
  let _0x1ee9fa = Object.assign(filterEmpty(a), {
      "integralactivity_id": 6,
      "id": 4,
      "visit_type": 676,
      "raffle_type": 1,
      "code_type": 1,
      "wxapp_id": 10004,
      "token": ybshd,
      "timestamp": _0x3bb3f4,
      "secret": "36c8edde3d61c0411511d3b1866f0680"
    }),
    _0x1abd60 = urlEncode(ksort(_0x1ee9fa)) + "36c8edde3d61c0411511d3b1866f0680";
  return _0x1ee9fa.sign = crypto.createHash("md5").update(encodeURIComponent(_0x1abd60)).digest("hex").toUpperCase(), new Promise(_0x4f9a6c => {
    var _0x57470f = {
      "method": "post",
      "url": "https://mall.0512kq.cn/index.php?s=/apimicrov4/activity.raffle/desire",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "xweb_xhr": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090819)XWEB/9185"
      },
      "data": _0x1ee9fa
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x57470f)));
    axios.request(_0x57470f).then(async function (_0xe3dd5b) {
      try {
        data = _0xe3dd5b.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0xe3dd5b.data)));
        if (data.code == 1) {
          log("抽奖获得: " + data.data.prize_name);
        } else log("抽奖: " + data.msg);
        await checkin6();
      } catch (_0x147090) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x137b0a) {
      console.error(_0x137b0a);
    }).then(_0xa1be23 => {
      _0x4f9a6c();
    });
  });
}
async function checkin4() {
  const _0x2e127c = new Date().getTime();
  let _0x4eecb0 = Object.assign(filterEmpty(a), {
      "integralactivity_id": 6,
      "id": 4,
      "visit_type": 676,
      "raffle_type": 2,
      "code_type": 1,
      "wxapp_id": 10004,
      "token": ybshd,
      "timestamp": _0x2e127c,
      "secret": "36c8edde3d61c0411511d3b1866f0680"
    }),
    _0x139259 = urlEncode(ksort(_0x4eecb0)) + "36c8edde3d61c0411511d3b1866f0680";
  return _0x4eecb0.sign = crypto.createHash("md5").update(encodeURIComponent(_0x139259)).digest("hex").toUpperCase(), new Promise(_0x11b002 => {
    var _0x44d764 = {
      "method": "post",
      "url": "https://mall.0512kq.cn/index.php?s=/apimicrov4/activity.raffle/desire",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "xweb_xhr": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090819)XWEB/9185"
      },
      "data": _0x4eecb0
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x44d764)));
    axios.request(_0x44d764).then(async function (_0x1886fc) {
      try {
        data = _0x1886fc.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x1886fc.data)));
        data.code == 1 ? log("抽奖获得: " + data.data.prize_name) : log("抽奖: " + data.msg);
        await checkin5();
      } catch (_0x21d0a9) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x4abce3) {
      console.error(_0x4abce3);
    }).then(_0x428dc1 => {
      _0x11b002();
    });
  });
}
async function checkin5() {
  const _0x28e915 = new Date().getTime();
  let _0x34dd56 = Object.assign(filterEmpty(a), {
      "integralactivity_id": 6,
      "id": 4,
      "visit_type": 676,
      "raffle_type": 3,
      "code_type": 1,
      "wxapp_id": 10004,
      "token": ybshd,
      "timestamp": _0x28e915,
      "secret": "36c8edde3d61c0411511d3b1866f0680"
    }),
    _0x213d07 = urlEncode(ksort(_0x34dd56)) + "36c8edde3d61c0411511d3b1866f0680";
  return _0x34dd56.sign = crypto.createHash("md5").update(encodeURIComponent(_0x213d07)).digest("hex").toUpperCase(), new Promise(_0x36bc1c => {
    var _0x493337 = {
      "method": "post",
      "url": "https://mall.0512kq.cn/index.php?s=/apimicrov4/activity.raffle/desire",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "xweb_xhr": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090819)XWEB/9185"
      },
      "data": _0x34dd56
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x493337)));
    axios.request(_0x493337).then(async function (_0x22f093) {
      try {
        data = _0x22f093.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x22f093.data)));
        data.code == 1 ? log("抽奖获得: " + data.data.prize_name) : log("抽奖: " + data.msg);
      } catch (_0x31b5f7) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x3e4dc5) {
      console.error(_0x3e4dc5);
    }).then(_0x380da5 => {
      _0x36bc1c();
    });
  });
}
async function checkin6() {
  const _0x481d2a = new Date().getTime();
  let _0xdecb56 = Object.assign(filterEmpty(a), {
      "ad": 33,
      "share_id": 497175,
      "integralactivity_id": 6,
      "ascription_id": 59338,
      "activity_code": 1,
      "code_type": 1,
      "wxapp_id": 10004,
      "token": ybshd,
      "timestamp": _0x481d2a,
      "secret": "36c8edde3d61c0411511d3b1866f0680"
    }),
    _0x1d0574 = urlEncode(ksort(_0xdecb56)) + "36c8edde3d61c0411511d3b1866f0680";
  return _0xdecb56.sign = crypto.createHash("md5").update(encodeURIComponent(_0x1d0574)).digest("hex").toUpperCase(), new Promise(_0x576d65 => {
    var _0xfc6f32 = {
      "method": "post",
      "url": "https://mall.0512kq.cn/index.php?s=/apimicrov4/activity.Integral/user_wecom_assist",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "xweb_xhr": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090819)XWEB/9185"
      },
      "data": _0xdecb56
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0xfc6f32)));
    axios.request(_0xfc6f32).then(async function (_0x227649) {
      try {
        data = _0x227649.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x227649.data)));
      } catch (_0x3e1eeb) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x357c4a) {
      console.error(_0x357c4a);
    }).then(_0x4e4a63 => {
      _0x576d65();
    });
  });
}
async function checkin3() {
  const _0x553ddb = new Date().getTime();
  let _0x1e6210 = Object.assign(filterEmpty(a), {
      "page": 1,
      "mechanism_id": 10042,
      "wxapp_id": 10004,
      "token": ybshd,
      "timestamp": _0x553ddb,
      "secret": "36c8edde3d61c0411511d3b1866f0680"
    }),
    _0x48186a = urlEncode(ksort(_0x1e6210)) + "36c8edde3d61c0411511d3b1866f0680";
  return _0x1e6210.sign = crypto.createHash("md5").update(encodeURIComponent(_0x48186a)).digest("hex").toUpperCase(), new Promise(_0x77822c => {
    var _0x1ddc2e = {
      "method": "post",
      "url": "https://mall.0512kq.cn/index.php?s=/apimicrov4/goods/goodsList",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "xweb_xhr": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090819)XWEB/9185"
      },
      "data": _0x1e6210
    };
    debug && (log("\n【debug】=============== 这是  请求 url ==============="), log(JSON.stringify(_0x1ddc2e)));
    axios.request(_0x1ddc2e).then(async function (_0x58e452) {
      try {
        data = _0x58e452.data;
        if (debug) {
          log("\n\n【debug】===============这是 返回data==============");
          log(JSON.stringify(_0x58e452.data));
        }
        log("积分: " + data.data.per_page);
      } catch (_0x42e19d) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x513a19) {
      console.error(_0x513a19);
    }).then(_0x125127 => {
      _0x77822c();
    });
  });
}
function filterEmpty(_0x40bf95) {
  var _0x2a666e = {};
  for (var _0x55a62f in _0x40bf95) (_0x40bf95[_0x55a62f] && "null" !== _0x40bf95[_0x55a62f] && "" !== _0x40bf95[_0x55a62f] || "0" == _0x40bf95[_0x55a62f]) && (_0x2a666e[_0x55a62f] = _0x40bf95[_0x55a62f]);
  return _0x2a666e;
}
function urlEncode(_0xde6c8e) {
  var _0x337251 = [];
  for (var _0x5a67e9 in _0xde6c8e) {
    var _0x366784 = _0xde6c8e[_0x5a67e9];
    _0x366784.constructor == Array ? _0x366784.forEach(function (_0x2278ea) {
      _0x337251.push(_0x5a67e9 + "=" + _0x2278ea);
    }) : _0x337251.push(_0x5a67e9 + "=" + _0x366784);
  }
  return _0x337251.join("&");
}
function ksort(_0x7252c0) {
  var _0x566d89 = {},
    _0x704d51 = Object.keys(_0x7252c0);
  return _0x704d51.sort(), _0x704d51.forEach(function (_0x164aaf) {
    _0x566d89[_0x164aaf] = _0x7252c0[_0x164aaf];
  }), _0x566d89;
}
async function Envs() {
  if (ybshd) {
    if (ybshd.indexOf("&") != -1) ybshd.split("&").forEach(_0x876ee8 => {
      ybshdArr.push(_0x876ee8);
    });else {
      if (ybshd.indexOf("\n") != -1) {
        ybshd.split("\n").forEach(_0x585c8a => {
          ybshdArr.push(_0x585c8a);
        });
      } else ybshdArr.push(ybshd);
    }
  } else {
    log("\n 【" + $.name + "】：未填写变量 ybshd");
    return;
  }
  return true;
}
function addNotifyStr(_0x4204a4, _0x192dcb = true) {
  _0x192dcb && log(_0x4204a4 + "\n");
  msg += _0x4204a4 + "\n";
}
async function SendMsg(_0x4f5738) {
  if (!_0x4f5738) return;
  if (Notify > 0) {
    if ($.isNode()) {
      var _0x4163b3 = require("./sendNotify");
      await _0x4163b3.sendNotify($.name, _0x4f5738);
    } else {
      $.msg(_0x4f5738);
    }
  } else {
    log(_0x4f5738);
  }
}
function randomString(_0x3c1bcf) {
  for (var _0x3c8a0a = _0x3c1bcf > 0 && void 0 !== _0x3c1bcf ? _0x3c1bcf : 21, _0x113152 = ""; _0x113152.length < _0x3c8a0a;) _0x113152 += Math.random().toString(36).slice(2);
  return _0x113152.slice(0, _0x3c8a0a);
}
function randomnum(_0x59309a) {
  _0x59309a = _0x59309a || 32;
  var _0x1fe653 = "1234567890",
    _0x18e61f = _0x1fe653.length,
    _0x467dd7 = "";
  for (i = 0; i < _0x59309a; i++) _0x467dd7 += _0x1fe653.charAt(Math.floor(Math.random() * _0x18e61f));
  return _0x467dd7;
}
function Env(_0x4ad131, _0x221774) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x4a9c87 {
    constructor(_0x21f694) {
      this.env = _0x21f694;
    }
    ["send"](_0xb05397, _0x4e443b = "GET") {
      _0xb05397 = "string" == typeof _0xb05397 ? {
        "url": _0xb05397
      } : _0xb05397;
      let _0x3ac6d8 = this.get;
      return "POST" === _0x4e443b && (_0x3ac6d8 = this.post), new Promise((_0x1c415c, _0x239f8f) => {
        _0x3ac6d8.call(this, _0xb05397, (_0x28a769, _0x25365f, _0x40dc7a) => {
          _0x28a769 ? _0x239f8f(_0x28a769) : _0x1c415c(_0x25365f);
        });
      });
    }
    ["get"](_0x4be11f) {
      return this.send.call(this.env, _0x4be11f);
    }
    ["post"](_0x434bcd) {
      return this.send.call(this.env, _0x434bcd, "POST");
    }
  }
  return new class {
    constructor(_0x5c4206, _0x170692) {
      this.name = _0x5c4206;
      this.http = new _0x4a9c87(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x170692);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x184553, _0x149eea = null) {
      try {
        return JSON.parse(_0x184553);
      } catch {
        return _0x149eea;
      }
    }
    ["toStr"](_0x386d47, _0x2e7883 = null) {
      try {
        return JSON.stringify(_0x386d47);
      } catch {
        return _0x2e7883;
      }
    }
    ["getjson"](_0x111eeb, _0x555009) {
      let _0x38d290 = _0x555009;
      const _0x4bc371 = this.getdata(_0x111eeb);
      if (_0x4bc371) try {
        _0x38d290 = JSON.parse(this.getdata(_0x111eeb));
      } catch {}
      return _0x38d290;
    }
    ["setjson"](_0x414404, _0x221481) {
      try {
        return this.setdata(JSON.stringify(_0x414404), _0x221481);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x2e1e52) {
      return new Promise(_0x33e3e6 => {
        this.get({
          "url": _0x2e1e52
        }, (_0x279bae, _0x4802f8, _0x437331) => _0x33e3e6(_0x437331));
      });
    }
    ["runScript"](_0x1313cf, _0x23fee0) {
      return new Promise(_0x1a5a5d => {
        let _0x276ed9 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x276ed9 = _0x276ed9 ? _0x276ed9.replace(/\n/g, "").trim() : _0x276ed9;
        let _0x5bf72a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x5bf72a = _0x5bf72a ? 1 * _0x5bf72a : 20;
        _0x5bf72a = _0x23fee0 && _0x23fee0.timeout ? _0x23fee0.timeout : _0x5bf72a;
        const [_0x44a369, _0x324f33] = _0x276ed9.split("@"),
          _0x28a18d = {
            "url": "http://" + _0x324f33 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x1313cf,
              "mock_type": "cron",
              "timeout": _0x5bf72a
            },
            "headers": {
              "X-Key": _0x44a369,
              "Accept": "*/*"
            }
          };
        this.post(_0x28a18d, (_0x4044ac, _0x2a3d8f, _0x263a0e) => _0x1a5a5d(_0x263a0e));
      }).catch(_0x4de70b => this.logErr(_0x4de70b));
    }
    ["loaddata"]() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5bd5ba = this.path.resolve(this.dataFile),
          _0xff8459 = this.path.resolve(process.cwd(), this.dataFile),
          _0x4a9220 = this.fs.existsSync(_0x5bd5ba),
          _0x4f4469 = !_0x4a9220 && this.fs.existsSync(_0xff8459);
        if (!_0x4a9220 && !_0x4f4469) return {};
        {
          const _0x11f53e = _0x4a9220 ? _0x5bd5ba : _0xff8459;
          try {
            return JSON.parse(this.fs.readFileSync(_0x11f53e));
          } catch (_0x1e1c51) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x69929 = this.path.resolve(this.dataFile),
          _0x59abfa = this.path.resolve(process.cwd(), this.dataFile),
          _0x78ed39 = this.fs.existsSync(_0x69929),
          _0x5eda83 = !_0x78ed39 && this.fs.existsSync(_0x59abfa),
          _0x387d54 = JSON.stringify(this.data);
        _0x78ed39 ? this.fs.writeFileSync(_0x69929, _0x387d54) : _0x5eda83 ? this.fs.writeFileSync(_0x59abfa, _0x387d54) : this.fs.writeFileSync(_0x69929, _0x387d54);
      }
    }
    ["lodash_get"](_0x57987d, _0x5c0a6b, _0x43a4ef) {
      const _0x21d801 = _0x5c0a6b.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3f156f = _0x57987d;
      for (const _0x216dd4 of _0x21d801) if (_0x3f156f = Object(_0x3f156f)[_0x216dd4], void 0 === _0x3f156f) return _0x43a4ef;
      return _0x3f156f;
    }
    ["lodash_set"](_0x1a7527, _0x3edc87, _0x3723f8) {
      return Object(_0x1a7527) !== _0x1a7527 ? _0x1a7527 : (Array.isArray(_0x3edc87) || (_0x3edc87 = _0x3edc87.toString().match(/[^.[\]]+/g) || []), _0x3edc87.slice(0, -1).reduce((_0x2076aa, _0x11ae68, _0x734af1) => Object(_0x2076aa[_0x11ae68]) === _0x2076aa[_0x11ae68] ? _0x2076aa[_0x11ae68] : _0x2076aa[_0x11ae68] = Math.abs(_0x3edc87[_0x734af1 + 1]) >> 0 == +_0x3edc87[_0x734af1 + 1] ? [] : {}, _0x1a7527)[_0x3edc87[_0x3edc87.length - 1]] = _0x3723f8, _0x1a7527);
    }
    ["getdata"](_0x267feb) {
      let _0x17f1ea = this.getval(_0x267feb);
      if (/^@/.test(_0x267feb)) {
        const [, _0x21a238, _0x3d0fd8] = /^@(.*?)\.(.*?)$/.exec(_0x267feb),
          _0x1dd852 = _0x21a238 ? this.getval(_0x21a238) : "";
        if (_0x1dd852) try {
          const _0x11766e = JSON.parse(_0x1dd852);
          _0x17f1ea = _0x11766e ? this.lodash_get(_0x11766e, _0x3d0fd8, "") : _0x17f1ea;
        } catch (_0x35ec82) {
          _0x17f1ea = "";
        }
      }
      return _0x17f1ea;
    }
    ["setdata"](_0x38ce29, _0x59b948) {
      let _0x3ae2b6 = false;
      if (/^@/.test(_0x59b948)) {
        const [, _0x2f504e, _0x26f2c8] = /^@(.*?)\.(.*?)$/.exec(_0x59b948),
          _0x38f837 = this.getval(_0x2f504e),
          _0x555d73 = _0x2f504e ? "null" === _0x38f837 ? null : _0x38f837 || "{}" : "{}";
        try {
          const _0x1f3dd6 = JSON.parse(_0x555d73);
          this.lodash_set(_0x1f3dd6, _0x26f2c8, _0x38ce29);
          _0x3ae2b6 = this.setval(JSON.stringify(_0x1f3dd6), _0x2f504e);
        } catch (_0x595836) {
          const _0x2c9487 = {};
          this.lodash_set(_0x2c9487, _0x26f2c8, _0x38ce29);
          _0x3ae2b6 = this.setval(JSON.stringify(_0x2c9487), _0x2f504e);
        }
      } else _0x3ae2b6 = this.setval(_0x38ce29, _0x59b948);
      return _0x3ae2b6;
    }
    ["getval"](_0x2bd501) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x2bd501) : this.isQuanX() ? $prefs.valueForKey(_0x2bd501) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2bd501]) : this.data && this.data[_0x2bd501] || null;
    }
    ["setval"](_0x37dd3f, _0x20d779) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x37dd3f, _0x20d779) : this.isQuanX() ? $prefs.setValueForKey(_0x37dd3f, _0x20d779) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x20d779] = _0x37dd3f, this.writedata(), !0) : this.data && this.data[_0x20d779] || null;
    }
    ["initGotEnv"](_0x3a44a5) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x3a44a5 && (_0x3a44a5.headers = _0x3a44a5.headers ? _0x3a44a5.headers : {}, void 0 === _0x3a44a5.headers.Cookie && void 0 === _0x3a44a5.cookieJar && (_0x3a44a5.cookieJar = this.ckjar));
    }
    ["get"](_0xa2470, _0x1acb6d = () => {}) {
      _0xa2470.headers && (delete _0xa2470.headers["Content-Type"], delete _0xa2470.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0xa2470.headers = _0xa2470.headers || {}, Object.assign(_0xa2470.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0xa2470, (_0x6376de, _0x3f6fca, _0x194990) => {
        !_0x6376de && _0x3f6fca && (_0x3f6fca.body = _0x194990, _0x3f6fca.statusCode = _0x3f6fca.status);
        _0x1acb6d(_0x6376de, _0x3f6fca, _0x194990);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0xa2470.opts = _0xa2470.opts || {}, Object.assign(_0xa2470.opts, {
        "hints": !1
      })), $task.fetch(_0xa2470).then(_0x4f87e1 => {
        const {
          statusCode: _0x470202,
          statusCode: _0x80c4a8,
          headers: _0x5aed49,
          body: _0x8fba9
        } = _0x4f87e1;
        _0x1acb6d(null, {
          "status": _0x470202,
          "statusCode": _0x80c4a8,
          "headers": _0x5aed49,
          "body": _0x8fba9
        }, _0x8fba9);
      }, _0x16c9fc => _0x1acb6d(_0x16c9fc))) : this.isNode() && (this.initGotEnv(_0xa2470), this.got(_0xa2470).on("redirect", (_0x294f4b, _0x543360) => {
        try {
          if (_0x294f4b.headers["set-cookie"]) {
            const _0x4bf383 = _0x294f4b.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x4bf383 && this.ckjar.setCookieSync(_0x4bf383, null);
            _0x543360.cookieJar = this.ckjar;
          }
        } catch (_0x4080b1) {
          this.logErr(_0x4080b1);
        }
      }).then(_0x1a07ae => {
        const {
          statusCode: _0x39dbba,
          statusCode: _0xf03482,
          headers: _0x4125bf,
          body: _0x1e63ff
        } = _0x1a07ae;
        _0x1acb6d(null, {
          "status": _0x39dbba,
          "statusCode": _0xf03482,
          "headers": _0x4125bf,
          "body": _0x1e63ff
        }, _0x1e63ff);
      }, _0x301d6b => {
        const {
          message: _0x3ddb03,
          response: _0x36ff3a
        } = _0x301d6b;
        _0x1acb6d(_0x3ddb03, _0x36ff3a, _0x36ff3a && _0x36ff3a.body);
      }));
    }
    ["post"](_0x14fe20, _0x15d495 = () => {}) {
      if (_0x14fe20.body && _0x14fe20.headers && !_0x14fe20.headers["Content-Type"] && (_0x14fe20.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x14fe20.headers && delete _0x14fe20.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x14fe20.headers = _0x14fe20.headers || {}, Object.assign(_0x14fe20.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x14fe20, (_0x5282aa, _0x4decf2, _0x189fd4) => {
        !_0x5282aa && _0x4decf2 && (_0x4decf2.body = _0x189fd4, _0x4decf2.statusCode = _0x4decf2.status);
        _0x15d495(_0x5282aa, _0x4decf2, _0x189fd4);
      });else {
        if (this.isQuanX()) _0x14fe20.method = "POST", this.isNeedRewrite && (_0x14fe20.opts = _0x14fe20.opts || {}, Object.assign(_0x14fe20.opts, {
          "hints": !1
        })), $task.fetch(_0x14fe20).then(_0x329a5f => {
          const {
            statusCode: _0x7bdac8,
            statusCode: _0x5ce9b8,
            headers: _0x112c57,
            body: _0x3cb4c4
          } = _0x329a5f;
          _0x15d495(null, {
            "status": _0x7bdac8,
            "statusCode": _0x5ce9b8,
            "headers": _0x112c57,
            "body": _0x3cb4c4
          }, _0x3cb4c4);
        }, _0x133692 => _0x15d495(_0x133692));else {
          if (this.isNode()) {
            this.initGotEnv(_0x14fe20);
            const {
              url: _0x20c43f,
              ..._0x2465db
            } = _0x14fe20;
            this.got.post(_0x20c43f, _0x2465db).then(_0x41b9e6 => {
              const {
                statusCode: _0x5e807f,
                statusCode: _0x4cde24,
                headers: _0x3e1f3d,
                body: _0x4a0249
              } = _0x41b9e6;
              _0x15d495(null, {
                "status": _0x5e807f,
                "statusCode": _0x4cde24,
                "headers": _0x3e1f3d,
                "body": _0x4a0249
              }, _0x4a0249);
            }, _0x43970f => {
              const {
                message: _0x4fb7ef,
                response: _0x1cfbeb
              } = _0x43970f;
              _0x15d495(_0x4fb7ef, _0x1cfbeb, _0x1cfbeb && _0x1cfbeb.body);
            });
          }
        }
      }
    }
    ["time"](_0x4b1e33, _0x33bace = null) {
      const _0x46ced7 = _0x33bace ? new Date(_0x33bace) : new Date();
      let _0x3fb527 = {
        "M+": _0x46ced7.getMonth() + 1,
        "d+": _0x46ced7.getDate(),
        "H+": _0x46ced7.getHours(),
        "m+": _0x46ced7.getMinutes(),
        "s+": _0x46ced7.getSeconds(),
        "q+": Math.floor((_0x46ced7.getMonth() + 3) / 3),
        "S": _0x46ced7.getMilliseconds()
      };
      /(y+)/.test(_0x4b1e33) && (_0x4b1e33 = _0x4b1e33.replace(RegExp.$1, (_0x46ced7.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x447f50 in _0x3fb527) new RegExp("(" + _0x447f50 + ")").test(_0x4b1e33) && (_0x4b1e33 = _0x4b1e33.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3fb527[_0x447f50] : ("00" + _0x3fb527[_0x447f50]).substr(("" + _0x3fb527[_0x447f50]).length)));
      return _0x4b1e33;
    }
    ["msg"](_0x516bbe = _0x4ad131, _0x3dbecd = "", _0x1ef3f3 = "", _0x43ca5d) {
      const _0x1508d0 = _0x427309 => {
        if (!_0x427309) return _0x427309;
        if ("string" == typeof _0x427309) return this.isLoon() ? _0x427309 : this.isQuanX() ? {
          "open-url": _0x427309
        } : this.isSurge() ? {
          "url": _0x427309
        } : void 0;
        if ("object" == typeof _0x427309) {
          if (this.isLoon()) {
            let _0x4eb487 = _0x427309.openUrl || _0x427309.url || _0x427309["open-url"],
              _0x4ef6c3 = _0x427309.mediaUrl || _0x427309["media-url"];
            return {
              "openUrl": _0x4eb487,
              "mediaUrl": _0x4ef6c3
            };
          }
          if (this.isQuanX()) {
            let _0x4a421e = _0x427309["open-url"] || _0x427309.url || _0x427309.openUrl,
              _0x281530 = _0x427309["media-url"] || _0x427309.mediaUrl;
            return {
              "open-url": _0x4a421e,
              "media-url": _0x281530
            };
          }
          if (this.isSurge()) {
            let _0x422b83 = _0x427309.url || _0x427309.openUrl || _0x427309["open-url"];
            return {
              "url": _0x422b83
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x516bbe, _0x3dbecd, _0x1ef3f3, _0x1508d0(_0x43ca5d)) : this.isQuanX() && $notify(_0x516bbe, _0x3dbecd, _0x1ef3f3, _0x1508d0(_0x43ca5d))), !this.isMuteLog) {
        let _0x1a1a17 = ["", "==============📣系统通知📣=============="];
        _0x1a1a17.push(_0x516bbe);
        _0x3dbecd && _0x1a1a17.push(_0x3dbecd);
        _0x1ef3f3 && _0x1a1a17.push(_0x1ef3f3);
        console.log(_0x1a1a17.join("\n"));
        this.logs = this.logs.concat(_0x1a1a17);
      }
    }
    ["log"](..._0x334f37) {
      _0x334f37.length > 0 && (this.logs = [...this.logs, ..._0x334f37]);
      console.log(_0x334f37.join(this.logSeparator));
    }
    ["logErr"](_0x1aa1a7, _0x5406d0) {
      const _0x495930 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x495930 ? this.log("", "❗️" + this.name + ", 错误!", _0x1aa1a7.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x1aa1a7);
    }
    ["wait"](_0x4e1463) {
      return new Promise(_0x67aa53 => setTimeout(_0x67aa53, _0x4e1463));
    }
    ["done"](_0x310ad9 = {}) {
      const _0x2df5a2 = new Date().getTime(),
        _0x2097c5 = (_0x2df5a2 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x2097c5 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x310ad9);
    }
  }(_0x4ad131, _0x221774);
}