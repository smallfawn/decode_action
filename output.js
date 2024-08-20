//Tue Aug 20 2024 13:42:22 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _0x5711d3 = function () {
    var _0xc017a9 = true;
    return function (_0xad6c9e, _0x179f0e) {
      var _0x4545c9 = _0xc017a9 ? function () {
        if (_0x179f0e) {
          var _0x46ea39 = _0x179f0e.apply(_0xad6c9e, arguments);
          _0x179f0e = null;
          return _0x46ea39;
        }
      } : function () {};
      _0xc017a9 = false;
      return _0x4545c9;
    };
  }(),
  _0x7ac0aa = _0x5711d3(this, function () {
    var _0x424f7f = function () {
      var _0x224ee0 = _0x424f7f.constructor("return /\" + this + \"/")().constructor("^([^ ]+( +[^ ]+)+)+[^ ]}");
      return !_0x224ee0.test(_0x7ac0aa);
    };
    return _0x424f7f();
  });
_0x7ac0aa();
const $ = new Env("点点兼职"),
  axios = require("axios");
let request = require("request");
var _0x4dd5d8 = {
  jar: true
};
request = request.defaults(_0x4dd5d8);
const {
    log
  } = console,
  Notify = 1,
  debug = 0;
let ddjzhd = ($.isNode() ? process.env.ddjzhd : $.getdata("ddjzhd")) || "",
  ddjzhdArr = [],
  data = "",
  iddd = "",
  idd = "2257,2057,1807,2129,2383,2164,1970,2076",
  idArray = idd.split(","),
  randomId = idArray[Math.floor(Math.random() * idArray.length)],
  msg = "";
!(async () => {
  if (typeof $request !== "undefined") {
    await GetRewrite();
  } else {
    if (!(await Envs())) {
      return;
    } else {
      log("\n\n=============================================    \n脚本执行 - 北京时间(UTC+8)：" + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + " \n=============================================\n");
      log("\n=================== 共找到 " + ddjzhdArr.length + " 个账号 ===================");
      debug && log("【debug】 这是你的全部账号数组:\n " + ddjzhdArr);
      for (let _0x141b35 = 0; _0x141b35 < ddjzhdArr.length; _0x141b35++) {
        let _0x5f08c3 = _0x141b35 + 1;
        log("\n==== 开始【第 " + _0x5f08c3 + " 个账号】====\n");
        ddjzhd = ddjzhdArr[_0x141b35].split("#");
        await login1();
        await checkin1();
        await checkin2();
        await checkin5();
        await checkin6();
      }
      await SendMsg(msg);
    }
  }
})().catch(_0x35c3de => log(_0x35c3de)).finally(() => $.done());
async function login() {
  return new Promise(_0x5695a2 => {
    var _0x396d30 = {
      method: "POST",
      url: "https://mili.shensemiao.com/index.php",
      params: {},
      headers: {},
      data: "id=" + randomId + "&pattern=signin&patternid=1&wcs=1&wdfb="
    };
    _0x396d30.headers.Host = "mili.shensemiao.com";
    _0x396d30.headers["Content-Type"] = "application/x-www-form-urlencoded";
    _0x396d30.headers.Accept = "*/*";
    _0x396d30.headers["Accept-Encoding"] = "gzip, deflate, br";
    _0x396d30.headers["User-Agent"] = "PostmanRuntime-ApipostRuntime/1.1.0";
    _0x396d30.headers.Connection = "keep-alive";
    _0x396d30.params.v = "1";
    _0x396d30.params.appid = "4";
    _0x396d30.params.appsecret = "PHPCMF19F5DF41B263B";
    _0x396d30.params.api_auth_code = "" + ddjzhd[0];
    _0x396d30.params.api_auth_uid = "" + ddjzhd[1];
    _0x396d30.params.s = "Yhxcx";
    _0x396d30.params.c = "home";
    _0x396d30.params.m = "fb_detail";
    debug && (log("\n【debug】=============== 这是请求url ==============="), log(JSON.stringify(_0x396d30)));
    axios.request(_0x396d30).then(async function (_0x4bd02f) {
      try {
        data = _0x4bd02f.data;
        debug && (log("\n【debug】===============这是返回data=============="), log(JSON.stringify(data)));
        log(data.msg);
      } catch (_0x5b783f) {
        log("异常：" + _0x5b783f);
      }
    }).catch(function (_0x41b17f) {
      console.error("请求异常：" + _0x41b17f);
    }).then(() => {
      _0x5695a2();
    });
  });
}
async function checkin1() {
  return new Promise(_0x21fccc => {
    var _0x822320 = {
      method: "POST",
      url: "https://mili.shensemiao.com/index.php",
      params: {},
      headers: {},
      data: "id=" + randomId + "&pattern=signin&patternid=1&wcs=1&wdfb="
    };
    _0x822320.headers.Host = "mili.shensemiao.com";
    _0x822320.headers["Content-Type"] = "application/x-www-form-urlencoded";
    _0x822320.headers.Accept = "*/*";
    _0x822320.headers["Accept-Encoding"] = "gzip, deflate, br";
    _0x822320.headers["User-Agent"] = "PostmanRuntime-ApipostRuntime/1.1.0";
    _0x822320.headers.Connection = "keep-alive";
    _0x822320.params.v = "1";
    _0x822320.params.appid = "4";
    _0x822320.params.appsecret = "PHPCMF19F5DF41B263B";
    _0x822320.params.api_auth_code = "" + ddjzhd[0];
    _0x822320.params.api_auth_uid = "" + ddjzhd[1];
    _0x822320.params.s = "member";
    _0x822320.params.app = "Yhxcx";
    _0x822320.params.c = "qd";
    _0x822320.params.m = "sign_in";
    axios.request(_0x822320).then(async function (_0x56bb1d) {
      try {
        data = _0x56bb1d.data;
        debug && (log("\n\n【debug】===============这是 返回data=============="), log(JSON.stringify(_0x56bb1d.data)));
        log(data.msg);
      } catch (_0x45ddcb) {
        log("异常：" + data + "，原因：" + data.message);
      }
    }).catch(function (_0x10f84e) {
      console.error(_0x10f84e);
    }).then(_0x2b4ce9 => {
      _0x21fccc();
    });
  });
}
async function checkin2() {
  return new Promise(_0x3e5b99 => {
    var _0xe77d02 = {
      method: "POST",
      url: "https://mili.shensemiao.com/index.php",
      params: {},
      headers: {},
      data: "id=" + randomId + "&fblx=1&wcs=0&theway=signin&search=1"
    };
    _0xe77d02.headers.Host = "mili.shensemiao.com";
    _0xe77d02.headers["Content-Type"] = "application/x-www-form-urlencoded";
    _0xe77d02.headers.Accept = "*/*";
    _0xe77d02.headers["Accept-Encoding"] = "gzip, deflate, br";
    _0xe77d02.headers["User-Agent"] = "PostmanRuntime-ApipostRuntime/1.1.0";
    _0xe77d02.headers.Connection = "keep-alive";
    _0xe77d02.params.v = "1";
    _0xe77d02.params.appid = "4";
    _0xe77d02.params.appsecret = "PHPCMF19F5DF41B263B";
    _0xe77d02.params.api_auth_code = "" + ddjzhd[0];
    _0xe77d02.params.api_auth_uid = "" + ddjzhd[1];
    _0xe77d02.params.s = "member";
    _0xe77d02.params.app = "Yhxcx";
    _0xe77d02.params.c = "qd";
    _0xe77d02.params.m = "sign_in";
    axios.request(_0xe77d02).then(async function (_0x46062b) {
      try {
        data = _0x46062b.data;
        const _0x394b8e = data.data.llurl,
          _0x2c4426 = _0x394b8e.match(/id=(\d{4})/);
        if (_0x2c4426) {
          iddd = _0x2c4426[1];
          log(iddd);
          await checkin3();
          await checkin4();
        } else {
          log("ID not found in llurl.");
        }
      } catch (_0x3a0b8a) {
        log("异常：" + _0x3a0b8a);
      }
    }).catch(function (_0x80f099) {
      console.error("请求异常：" + _0x80f099);
    }).then(() => {
      _0x3e5b99();
    });
  });
}
async function checkin3() {
  return new Promise(_0x34249d => {
    var _0x4de223 = {
      method: "POST",
      url: "https://mili.shensemiao.com/index.php",
      params: {},
      headers: {},
      data: "id=" + iddd + "&pattern=signin&patternid=1&wcs=1&wdfb="
    };
    _0x4de223.headers.Host = "mili.shensemiao.com";
    _0x4de223.headers["Content-Type"] = "application/x-www-form-urlencoded";
    _0x4de223.headers.Accept = "*/*";
    _0x4de223.headers["Accept-Encoding"] = "gzip, deflate, br";
    _0x4de223.headers["User-Agent"] = "PostmanRuntime-ApipostRuntime/1.1.0";
    _0x4de223.headers.Connection = "keep-alive";
    _0x4de223.params.v = "1";
    _0x4de223.params.appid = "4";
    _0x4de223.params.appsecret = "PHPCMF19F5DF41B263B";
    _0x4de223.params.api_auth_code = "" + ddjzhd[0];
    _0x4de223.params.api_auth_uid = "" + ddjzhd[1];
    _0x4de223.params.s = "Yhxcx";
    _0x4de223.params.c = "home";
    _0x4de223.params.m = "fb_detail";
    debug && (log("\n【debug】=============== 这是请求url ==============="), log(JSON.stringify(_0x4de223)));
    axios.request(_0x4de223).then(async function (_0x4ea7e4) {
      try {
        data = _0x4ea7e4.data;
        log(data.msg);
      } catch (_0x2f625e) {
        log("异常：" + _0x2f625e);
      }
    }).catch(function (_0x54f6ea) {
      console.error("请求异常：" + _0x54f6ea);
    }).then(() => {
      _0x34249d();
    });
  });
}
async function checkin4() {
  return new Promise(_0x41708e => {
    var _0x32ed01 = {
      method: "POST",
      url: "https://mili.shensemiao.com/index.php",
      params: {},
      headers: {},
      data: "id=" + iddd + "&fblx=1&wcs=1&theway=signin&search=1"
    };
    _0x32ed01.headers.Host = "mili.shensemiao.com";
    _0x32ed01.headers["Content-Type"] = "application/x-www-form-urlencoded";
    _0x32ed01.headers.Accept = "*/*";
    _0x32ed01.headers["Accept-Encoding"] = "gzip, deflate, br";
    _0x32ed01.headers["User-Agent"] = "PostmanRuntime-ApipostRuntime/1.1.0";
    _0x32ed01.headers.Connection = "keep-alive";
    _0x32ed01.params.v = "1";
    _0x32ed01.params.appid = "4";
    _0x32ed01.params.appsecret = "PHPCMF19F5DF41B263B";
    _0x32ed01.params.api_auth_code = "" + ddjzhd[0];
    _0x32ed01.params.api_auth_uid = "" + ddjzhd[1];
    _0x32ed01.params.s = "member";
    _0x32ed01.params.app = "Yhxcx";
    _0x32ed01.params.c = "qd";
    _0x32ed01.params.m = "sign_in";
    var _0x5af919 = _0x32ed01;
    debug && (log("\n【debug】=============== 这是请求url ==============="), log(JSON.stringify(_0x5af919)));
    axios.request(_0x5af919).then(async function (_0x55f703) {
      try {
        data = _0x55f703.data;
        debug && (log("\n【debug】===============这是返回data=============="), log(JSON.stringify(data)));
        log(data.msg);
      } catch (_0x186c07) {
        log("异常：" + _0x186c07);
      }
    }).catch(function (_0x5c30b3) {
      console.error("请求异常：" + _0x5c30b3);
    }).then(() => {
      _0x41708e();
    });
  });
}
async function checkin5() {
  return new Promise(_0x344ed5 => {
    var _0x536db9 = {
      v: "1",
      appid: "4",
      appsecret: "PHPCMF19F5DF41B263B",
      api_auth_code: "" + ddjzhd[0],
      api_auth_uid: "" + ddjzhd[1],
      s: "member",
      app: "yhxcx",
      c: "tg",
      m: "wallet"
    };
    var _0xe130c2 = {
      Host: "mili.shensemiao.com",
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "User-Agent": "PostmanRuntime-ApipostRuntime/1.1.0",
      Connection: "keep-alive"
    };
    var _0x401fbf = {
      method: "POST",
      url: "https://mili.shensemiao.com/index.php",
      params: _0x536db9,
      headers: _0xe130c2,
      data: "theway=initialization&search=1"
    };
    axios.request(_0x401fbf).then(async function (_0x249ba4) {
      try {
        data = _0x249ba4.data;
        debug && (log("\n【debug】===============这是返回data=============="), log(JSON.stringify(data)));
        log("当前余额:" + data.data.tgprice);
      } catch (_0x1f41fe) {
        log("异常：" + _0x1f41fe);
      }
    }).catch(function (_0x5e8190) {
      console.error("请求异常：" + _0x5e8190);
    }).then(() => {
      _0x344ed5();
    });
  });
}
async function checkin6() {
  return new Promise(_0x42bd90 => {
    var _0x51ae3e = {
      method: "POST",
      url: "https://mili.shensemiao.com/index.php",
      params: {},
      headers: {},
      data: "step=0"
    };
    _0x51ae3e.headers.Host = "mili.shensemiao.com";
    _0x51ae3e.headers["Content-Type"] = "application/x-www-form-urlencoded";
    _0x51ae3e.headers.Accept = "*/*";
    _0x51ae3e.headers["Accept-Encoding"] = "gzip, deflate, br";
    _0x51ae3e.headers["User-Agent"] = "PostmanRuntime-ApipostRuntime/1.1.0";
    _0x51ae3e.headers.Connection = "keep-alive";
    _0x51ae3e.params.v = "1";
    _0x51ae3e.params.appid = "4";
    _0x51ae3e.params.appsecret = "PHPCMF19F5DF41B263B";
    _0x51ae3e.params.api_auth_code = "" + ddjzhd[0];
    _0x51ae3e.params.api_auth_uid = "" + ddjzhd[1];
    _0x51ae3e.params.s = "member";
    _0x51ae3e.params.app = "yhxcx";
    _0x51ae3e.params.c = "home";
    _0x51ae3e.params.m = "account";
    var _0x415a2c = _0x51ae3e;
    axios.request(_0x415a2c).then(async function (_0x566a4b) {
      try {
        data = _0x566a4b.data;
        log("当前手机号:" + data.data.fillin.phone);
      } catch (_0xc50125) {
        log("异常：" + _0xc50125);
      }
    }).catch(function (_0x5f7acf) {
      console.error("请求异常：" + _0x5f7acf);
    }).then(() => {
      _0x42bd90();
    });
  });
}
async function login1() {
  return new Promise(_0x905249 => {
    var _0x509e8d = {
      method: "POST",
      url: "https://mili.shensemiao.com/index.php",
      params: {},
      headers: {},
      data: "sourceid=137303&theway=submit&search=1"
    };
    _0x509e8d.headers.Host = "mili.shensemiao.com";
    _0x509e8d.headers["Content-Type"] = "application/x-www-form-urlencoded";
    _0x509e8d.headers.Accept = "*/*";
    _0x509e8d.headers["Accept-Encoding"] = "gzip, deflate, br";
    _0x509e8d.headers["User-Agent"] = "PostmanRuntime-ApipostRuntime/1.1.0";
    _0x509e8d.headers.Connection = "keep-alive";
    _0x509e8d.params.v = "1";
    _0x509e8d.params.appid = "4";
    _0x509e8d.params.appsecret = "PHPCMF19F5DF41B263B";
    _0x509e8d.params.api_auth_code = "" + ddjzhd[0];
    _0x509e8d.params.api_auth_uid = "" + ddjzhd[1];
    _0x509e8d.params.s = "member";
    _0x509e8d.params.app = "yhxcx";
    _0x509e8d.params.c = "tg";
    _0x509e8d.params.m = "invite";
    debug && (log("\n【debug】=============== 这是请求url ==============="), log(JSON.stringify(_0x509e8d)));
    axios.request(_0x509e8d).then(async function (_0x77cc9) {
      try {
        data = _0x77cc9.data;
        debug && (log("\n【debug】===============这是返回data=============="), log(JSON.stringify(data)));
        await login();
      } catch (_0x21ead8) {
        log("异常：" + _0x21ead8);
      }
    }).catch(function (_0x98ae8e) {
      console.error("请求异常：" + _0x98ae8e);
    }).then(() => {
      _0x905249();
    });
  });
}
async function Envs() {
  if (ddjzhd) {
    if (ddjzhd.indexOf("&") != -1) {
      ddjzhd.split("&").forEach(_0x389a32 => {
        ddjzhdArr.push(_0x389a32);
      });
    } else {
      if (ddjzhd.indexOf("\n") != -1) {
        ddjzhd.split("\n").forEach(_0x3bed67 => {
          ddjzhdArr.push(_0x3bed67);
        });
      } else {
        ddjzhdArr.push(ddjzhd);
      }
    }
  } else {
    log("\n 【" + $.name + "】：未填写变量 ddjzhd");
    return;
  }
  return true;
}
function addNotifyStr(_0x455b07, _0x5523bf = true) {
  _0x5523bf && log(_0x455b07 + "\n");
  msg += _0x455b07 + "\n";
}
async function SendMsg(_0x2e0f59) {
  if (!_0x2e0f59) {
    return;
  }
  if ($.isNode()) {
    var _0x14bea2 = require("./sendNotify");
    await _0x14bea2.sendNotify($.name, _0x2e0f59);
  } else {
    $.msg(_0x2e0f59);
  }
}
function randomString(_0x259539) {
  for (var _0x38fcec = _0x259539 > 0 && void 0 !== _0x259539 ? _0x259539 : 21, _0x5612ad = ""; _0x5612ad.length < _0x38fcec;) {
    _0x5612ad += Math.random().toString(36).slice(2);
  }
  return _0x5612ad.slice(0, _0x38fcec);
}
function randomnum(_0x5b9328) {
  _0x5b9328 = _0x5b9328 || 32;
  var _0x3abd09 = "1234567890",
    _0x3ca8ee = _0x3abd09.length,
    _0x334e77 = "";
  for (i = 0; i < _0x5b9328; i++) {
    _0x334e77 += _0x3abd09.charAt(Math.floor(Math.random() * _0x3ca8ee));
  }
  return _0x334e77;
}
function Env(_0x15253a, _0x1084eb) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x3e95a4 {
    constructor(_0xef8746) {
      this.env = _0xef8746;
    }
    send(_0x54eea5, _0x4d9265 = "GET") {
      _0x54eea5 = "string" == typeof _0x54eea5 ? {
        url: _0x54eea5
      } : _0x54eea5;
      let _0x140b28 = this.get;
      "POST" === _0x4d9265 && (_0x140b28 = this.post);
      return new Promise((_0x18c3ce, _0x4c949e) => {
        _0x140b28.call(this, _0x54eea5, (_0x314526, _0x15ada3, _0x124ae2) => {
          _0x314526 ? _0x4c949e(_0x314526) : _0x18c3ce(_0x15ada3);
        });
      });
    }
    get(_0x2d191c) {
      return this.send.call(this.env, _0x2d191c);
    }
    post(_0x4e6fe9) {
      return this.send.call(this.env, _0x4e6fe9, "POST");
    }
  }
  return new class {
    constructor(_0x5d9557, _0x3c9458) {
      this.name = _0x5d9557;
      this.http = new _0x3e95a4(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x3c9458);
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
    toObj(_0x38e54c, _0x22fb2d = null) {
      try {
        return JSON.parse(_0x38e54c);
      } catch {
        return _0x22fb2d;
      }
    }
    toStr(_0x5322c9, _0xf6fbc9 = null) {
      try {
        return JSON.stringify(_0x5322c9);
      } catch {
        return _0xf6fbc9;
      }
    }
    getjson(_0x2a4de1, _0x1d327a) {
      let _0x5863f0 = _0x1d327a;
      const _0x1547b7 = this.getdata(_0x2a4de1);
      if (_0x1547b7) {
        try {
          _0x5863f0 = JSON.parse(this.getdata(_0x2a4de1));
        } catch {}
      }
      return _0x5863f0;
    }
    setjson(_0x4c9c9f, _0x30a2b7) {
      try {
        return this.setdata(JSON.stringify(_0x4c9c9f), _0x30a2b7);
      } catch {
        return !1;
      }
    }
    getScript(_0x53d196) {
      return new Promise(_0x2de037 => {
        var _0x2a39e6 = {
          url: _0x53d196
        };
        this.get(_0x2a39e6, (_0x27b818, _0x28f706, _0x1987a4) => _0x2de037(_0x1987a4));
      });
    }
    runScript(_0xc059e1, _0x43ca5c) {
      return new Promise(_0x24847e => {
        let _0x5348a7 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x5348a7 = _0x5348a7 ? _0x5348a7.replace(/\n/g, "").trim() : _0x5348a7;
        let _0x357e65 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x357e65 = _0x357e65 ? 1 * _0x357e65 : 20;
        _0x357e65 = _0x43ca5c && _0x43ca5c.timeout ? _0x43ca5c.timeout : _0x357e65;
        var _0x3d52e3 = {
          script_text: _0xc059e1,
          mock_type: "cron",
          timeout: _0x357e65
        };
        const [_0xa2439c, _0x572cf3] = _0x5348a7.split("@"),
          _0x42f724 = {
            url: "http://" + _0x572cf3 + "/v1/scripting/evaluate",
            body: _0x3d52e3,
            headers: {
              "X-Key": _0xa2439c,
              Accept: "*/*"
            }
          };
        this.post(_0x42f724, (_0xaaf0b4, _0x66eb4d, _0x1c06d7) => _0x24847e(_0x1c06d7));
      }).catch(_0x1b89b6 => this.logErr(_0x1b89b6));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x339ff4 = this.path.resolve(this.dataFile),
          _0x34c2e4 = this.path.resolve(process.cwd(), this.dataFile),
          _0x55a8e0 = this.fs.existsSync(_0x339ff4),
          _0xd1a4ef = !_0x55a8e0 && this.fs.existsSync(_0x34c2e4);
        if (!_0x55a8e0 && !_0xd1a4ef) {
          return {};
        }
        {
          const _0x3dfc5a = _0x55a8e0 ? _0x339ff4 : _0x34c2e4;
          try {
            return JSON.parse(this.fs.readFileSync(_0x3dfc5a));
          } catch (_0xc29abd) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xe44825 = this.path.resolve(this.dataFile),
          _0xc4580f = this.path.resolve(process.cwd(), this.dataFile),
          _0x1fbdce = this.fs.existsSync(_0xe44825),
          _0xc3e715 = !_0x1fbdce && this.fs.existsSync(_0xc4580f),
          _0x5265af = JSON.stringify(this.data);
        _0x1fbdce ? this.fs.writeFileSync(_0xe44825, _0x5265af) : _0xc3e715 ? this.fs.writeFileSync(_0xc4580f, _0x5265af) : this.fs.writeFileSync(_0xe44825, _0x5265af);
      }
    }
    lodash_get(_0xf8e0d1, _0x17864c, _0x208d40) {
      const _0x48c694 = _0x17864c.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x34c78d = _0xf8e0d1;
      for (const _0x56b869 of _0x48c694) if (_0x34c78d = Object(_0x34c78d)[_0x56b869], void 0 === _0x34c78d) {
        return _0x208d40;
      }
      return _0x34c78d;
    }
    lodash_set(_0x525788, _0x36d0c7, _0x5f47e2) {
      return Object(_0x525788) !== _0x525788 ? _0x525788 : (Array.isArray(_0x36d0c7) || (_0x36d0c7 = _0x36d0c7.toString().match(/[^.[\]]+/g) || []), _0x36d0c7.slice(0, -1).reduce((_0x52c043, _0x192e10, _0x5fecca) => Object(_0x52c043[_0x192e10]) === _0x52c043[_0x192e10] ? _0x52c043[_0x192e10] : _0x52c043[_0x192e10] = Math.abs(_0x36d0c7[_0x5fecca + 1]) >> 0 == +_0x36d0c7[_0x5fecca + 1] ? [] : {}, _0x525788)[_0x36d0c7[_0x36d0c7.length - 1]] = _0x5f47e2, _0x525788);
    }
    getdata(_0xafb9ea) {
      let _0xadadaa = this.getval(_0xafb9ea);
      if (/^@/.test(_0xafb9ea)) {
        const [, _0x3ef1a0, _0x3182d9] = /^@(.*?)\.(.*?)$/.exec(_0xafb9ea),
          _0x284062 = _0x3ef1a0 ? this.getval(_0x3ef1a0) : "";
        if (_0x284062) {
          try {
            const _0x2ba862 = JSON.parse(_0x284062);
            _0xadadaa = _0x2ba862 ? this.lodash_get(_0x2ba862, _0x3182d9, "") : _0xadadaa;
          } catch (_0x256927) {
            _0xadadaa = "";
          }
        }
      }
      return _0xadadaa;
    }
    setdata(_0x2fdda0, _0x23d433) {
      let _0x295e6e = !1;
      if (/^@/.test(_0x23d433)) {
        const [, _0x1bb2e9, _0x299932] = /^@(.*?)\.(.*?)$/.exec(_0x23d433),
          _0x2b8935 = this.getval(_0x1bb2e9),
          _0x1dfae3 = _0x1bb2e9 ? "null" === _0x2b8935 ? null : _0x2b8935 || "{}" : "{}";
        try {
          const _0x15b09a = JSON.parse(_0x1dfae3);
          this.lodash_set(_0x15b09a, _0x299932, _0x2fdda0);
          _0x295e6e = this.setval(JSON.stringify(_0x15b09a), _0x1bb2e9);
        } catch (_0x55c34d) {
          const _0x56a204 = {};
          this.lodash_set(_0x56a204, _0x299932, _0x2fdda0);
          _0x295e6e = this.setval(JSON.stringify(_0x56a204), _0x1bb2e9);
        }
      } else {
        _0x295e6e = this.setval(_0x2fdda0, _0x23d433);
      }
      return _0x295e6e;
    }
    getval(_0x275806) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x275806) : this.isQuanX() ? $prefs.valueForKey(_0x275806) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x275806]) : this.data && this.data[_0x275806] || null;
    }
    setval(_0x1e52c3, _0x1028c4) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x1e52c3, _0x1028c4) : this.isQuanX() ? $prefs.setValueForKey(_0x1e52c3, _0x1028c4) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1028c4] = _0x1e52c3, this.writedata(), !0) : this.data && this.data[_0x1028c4] || null;
    }
    initGotEnv(_0x1afb47) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x1afb47 && (_0x1afb47.headers = _0x1afb47.headers ? _0x1afb47.headers : {}, void 0 === _0x1afb47.headers.Cookie && void 0 === _0x1afb47.cookieJar && (_0x1afb47.cookieJar = this.ckjar));
    }
    get(_0x22846e, _0x35ed0f = () => {}) {
      var _0x565971 = {
        "X-Surge-Skip-Scripting": !1
      };
      var _0x2ddfbe = {
        hints: !1
      };
      _0x22846e.headers && (delete _0x22846e.headers["Content-Type"], delete _0x22846e.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x22846e.headers = _0x22846e.headers || {}, Object.assign(_0x22846e.headers, _0x565971)), $httpClient.get(_0x22846e, (_0x475ead, _0x1778e6, _0x2db563) => {
        !_0x475ead && _0x1778e6 && (_0x1778e6.body = _0x2db563, _0x1778e6.statusCode = _0x1778e6.status);
        _0x35ed0f(_0x475ead, _0x1778e6, _0x2db563);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x22846e.opts = _0x22846e.opts || {}, Object.assign(_0x22846e.opts, _0x2ddfbe)), $task.fetch(_0x22846e).then(_0x2f38c8 => {
        const {
          statusCode: _0x1bc7ce,
          statusCode: _0x1433bd,
          headers: _0x50d493,
          body: _0x437dbe
        } = _0x2f38c8;
        var _0x391526 = {
          status: _0x1bc7ce,
          statusCode: _0x1433bd,
          headers: _0x50d493,
          body: _0x437dbe
        };
        _0x35ed0f(null, _0x391526, _0x437dbe);
      }, _0x255188 => _0x35ed0f(_0x255188))) : this.isNode() && (this.initGotEnv(_0x22846e), this.got(_0x22846e).on("redirect", (_0x3ef495, _0x4101a2) => {
        try {
          if (_0x3ef495.headers["set-cookie"]) {
            const _0x27ec8e = _0x3ef495.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x27ec8e && this.ckjar.setCookieSync(_0x27ec8e, null);
            _0x4101a2.cookieJar = this.ckjar;
          }
        } catch (_0x537587) {
          this.logErr(_0x537587);
        }
      }).then(_0x316448 => {
        const {
          statusCode: _0x45699b,
          statusCode: _0x20c18e,
          headers: _0x3338b6,
          body: _0xae31dc
        } = _0x316448;
        var _0x301c76 = {
          status: _0x45699b,
          statusCode: _0x20c18e,
          headers: _0x3338b6,
          body: _0xae31dc
        };
        _0x35ed0f(null, _0x301c76, _0xae31dc);
      }, _0x4fbf17 => {
        const {
          message: _0x153d4b,
          response: _0x145047
        } = _0x4fbf17;
        _0x35ed0f(_0x153d4b, _0x145047, _0x145047 && _0x145047.body);
      }));
    }
    post(_0x3ea3a1, _0x290118 = () => {}) {
      var _0x9b7f21 = {
        "X-Surge-Skip-Scripting": !1
      };
      var _0x115496 = {
        hints: !1
      };
      if (_0x3ea3a1.body && _0x3ea3a1.headers && !_0x3ea3a1.headers["Content-Type"] && (_0x3ea3a1.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x3ea3a1.headers && delete _0x3ea3a1.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x3ea3a1.headers = _0x3ea3a1.headers || {}, Object.assign(_0x3ea3a1.headers, _0x9b7f21));
        $httpClient.post(_0x3ea3a1, (_0x112e04, _0xc550d1, _0x970cf) => {
          !_0x112e04 && _0xc550d1 && (_0xc550d1.body = _0x970cf, _0xc550d1.statusCode = _0xc550d1.status);
          _0x290118(_0x112e04, _0xc550d1, _0x970cf);
        });
      } else {
        if (this.isQuanX()) {
          _0x3ea3a1.method = "POST";
          this.isNeedRewrite && (_0x3ea3a1.opts = _0x3ea3a1.opts || {}, Object.assign(_0x3ea3a1.opts, _0x115496));
          $task.fetch(_0x3ea3a1).then(_0x440f42 => {
            const {
              statusCode: _0x325596,
              statusCode: _0x5d3fde,
              headers: _0x5ba024,
              body: _0xd20ade
            } = _0x440f42;
            var _0x4f8615 = {
              status: _0x325596,
              statusCode: _0x5d3fde,
              headers: _0x5ba024,
              body: _0xd20ade
            };
            _0x290118(null, _0x4f8615, _0xd20ade);
          }, _0x2f88fe => _0x290118(_0x2f88fe));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x3ea3a1);
            const {
              url: _0x4aae27,
              ..._0x5c2794
            } = _0x3ea3a1;
            this.got.post(_0x4aae27, _0x5c2794).then(_0x2c033c => {
              const {
                statusCode: _0x1bb218,
                statusCode: _0xcdb2ae,
                headers: _0x11670e,
                body: _0x323c3e
              } = _0x2c033c;
              var _0x1659a0 = {
                status: _0x1bb218,
                statusCode: _0xcdb2ae,
                headers: _0x11670e,
                body: _0x323c3e
              };
              _0x290118(null, _0x1659a0, _0x323c3e);
            }, _0x2d11f3 => {
              const {
                message: _0x31e352,
                response: _0x709c5e
              } = _0x2d11f3;
              _0x290118(_0x31e352, _0x709c5e, _0x709c5e && _0x709c5e.body);
            });
          }
        }
      }
    }
    time(_0x776f1b, _0x43885a = null) {
      const _0x5a246e = _0x43885a ? new Date(_0x43885a) : new Date();
      var _0x275ae6 = {
        "M+": _0x5a246e.getMonth() + 1,
        "d+": _0x5a246e.getDate(),
        "H+": _0x5a246e.getHours(),
        "m+": _0x5a246e.getMinutes(),
        "s+": _0x5a246e.getSeconds(),
        "q+": Math.floor((_0x5a246e.getMonth() + 3) / 3),
        S: _0x5a246e.getMilliseconds()
      };
      /(y+)/.test(_0x776f1b) && (_0x776f1b = _0x776f1b.replace(RegExp.$1, (_0x5a246e.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x245d6c in _0x275ae6) new RegExp("(" + _0x245d6c + ")").test(_0x776f1b) && (_0x776f1b = _0x776f1b.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x275ae6[_0x245d6c] : ("00" + _0x275ae6[_0x245d6c]).substr(("" + _0x275ae6[_0x245d6c]).length)));
      return _0x776f1b;
    }
    msg(_0x59f2b2 = _0x15253a, _0x393ba5 = "", _0x55e7e5 = "", _0x187490) {
      const _0x4299a6 = _0x44200a => {
        if (!_0x44200a) {
          return _0x44200a;
        }
        if ("string" == typeof _0x44200a) {
          return this.isLoon() ? _0x44200a : this.isQuanX() ? {
            "open-url": _0x44200a
          } : this.isSurge() ? {
            url: _0x44200a
          } : void 0;
        }
        if ("object" == typeof _0x44200a) {
          if (this.isLoon()) {
            let _0x5523e5 = _0x44200a.openUrl || _0x44200a.url || _0x44200a["open-url"],
              _0x4f7a43 = _0x44200a.mediaUrl || _0x44200a["media-url"];
            var _0x36094b = {
              openUrl: _0x5523e5,
              mediaUrl: _0x4f7a43
            };
            return _0x36094b;
          }
          if (this.isQuanX()) {
            let _0x4e1915 = _0x44200a["open-url"] || _0x44200a.url || _0x44200a.openUrl,
              _0x24b75e = _0x44200a["media-url"] || _0x44200a.mediaUrl;
            var _0x756790 = {
              "open-url": _0x4e1915,
              "media-url": _0x24b75e
            };
            return _0x756790;
          }
          if (this.isSurge()) {
            let _0x32e9cc = _0x44200a.url || _0x44200a.openUrl || _0x44200a["open-url"];
            var _0x309326 = {
              url: _0x32e9cc
            };
            return _0x309326;
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x59f2b2, _0x393ba5, _0x55e7e5, _0x4299a6(_0x187490)) : this.isQuanX() && $notify(_0x59f2b2, _0x393ba5, _0x55e7e5, _0x4299a6(_0x187490))), !this.isMuteLog) {
        let _0x4d1145 = ["", "==============📣系统通知📣=============="];
        _0x4d1145.push(_0x59f2b2);
        _0x393ba5 && _0x4d1145.push(_0x393ba5);
        _0x55e7e5 && _0x4d1145.push(_0x55e7e5);
        console.log(_0x4d1145.join("\n"));
        this.logs = this.logs.concat(_0x4d1145);
      }
    }
    log(..._0x740a46) {
      _0x740a46.length > 0 && (this.logs = [...this.logs, ..._0x740a46]);
      console.log(_0x740a46.join(this.logSeparator));
    }
    logErr(_0x4f9a66, _0x4497da) {
      const _0x173eda = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x173eda ? this.log("", "❗️" + this.name + ", 错误!", _0x4f9a66.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x4f9a66);
    }
    wait(_0x2f39f7) {
      return new Promise(_0x16a1fc => setTimeout(_0x16a1fc, _0x2f39f7));
    }
    done(_0x3adbde = {}) {
      const _0x44e109 = new Date().getTime(),
        _0x498eca = (_0x44e109 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x498eca + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x3adbde);
    }
  }(_0x15253a, _0x1084eb);
}