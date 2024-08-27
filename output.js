//Tue Aug 27 2024 00:49:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "星芽免费短剧";
VALY = ["xymfdj"];
CK = "";
let _0x514890 = process.env.weixinToken,
  _0x475b4f = process.env.kxsssdl,
  _0x2fbf07 = "https://speciesweb.whjzjx.cn";
const _0x327f58 = "1.1",
  _0x1b47ef = ["\n", "@"],
  _0x123507 = 0;
usid = 0;
class _0xb7dbde {
  constructor(_0x43aa90) {
    this.device_id = _0x43aa90.split("#")[0];
    this.authorization11 = _0x43aa90.split("#")[1];
    this.num = ++usid;
    this.headers2 = {
      "authorization": this.authorization11,
      "user_agent": "Mozilla/5.0 (Linux; Android 13; 23013RK75C Build/TKQ1.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.97 Mobile Safari/537.36",
      "device_id": this.device_id,
      "user-agent": "okhttp/4.10.0"
    };
  }
  async ["hqdl"]() {
    let _0x2a8938 = await $.task("get", _0x475b4f, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x2a8938.split("\n")[0];
    console.log("账号" + this.num + "：代理IP：" + this.dlip);
  }
  async ["user_task_list"]() {
    await $.wait(3000);
    await this.baoxing();
    await this.kanshipinid();
  }
  async ["login"]() {
    let _0x16cd21 = await this.task("post", "https://app.whjzjx.cn/v1/account/login", this.headers2, "device=" + this.device_id);
    _0x16cd21.status == 0 ? (this.login = true, this.authorization = _0x16cd21.data.token, console.log("data：" + this.authorization), await this.login11()) : (this.login = false, console.log("账号" + this.num + "：" + _0x16cd21.msg), await this.wxpusher(_0x16cd21.msg));
  }
  async ["login11"]() {
    this.headers = {
      "User-Agent": "Mozilla/5.0 (Linux; Android 13; 23013RK75C Build/TKQ1.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.97 Mobile Safari/537.36 _dsbridge",
      "device_id": this.device_id,
      "authorization": this.authorization,
      "user_agent": "Mozilla/5.0 (Linux; Android 13; 23013RK75C Build/TKQ1.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.97 Mobile Safari/537.36 _dsbridge"
    };
    let _0x4f3e8b = await this.task("get", _0x2fbf07 + "/v1/sign/info?device_id=" + this.device_id, this.headers);
    if (_0x4f3e8b.code == "ok") {
      this.login = true;
      this.num = _0x4f3e8b.data.account_id;
      console.log("账号:" + this.num + "  金额：" + _0x4f3e8b.data.cash_remain);
    } else this.login = false, console.log("账号" + this.num + "：" + _0x4f3e8b.msg), await this.wxpusher(_0x4f3e8b.msg);
  }
  async ["wxpusher"](_0x568a06) {
    let _0x206f16 = {
        "X-Requested-With": "com.tencent.mm",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
      },
      _0x1c4743 = await this.task("get", "https://wxpusher.zjiecode.com/api/send/message/?appToken=" + _0x514890.split("#")[0] + "&content=" + encodeURI("" + NAME + _0x568a06) + "&uid=" + _0x514890.split("#")[1], _0x206f16);
    if (_0x1c4743.code == 1000) {
      console.log("微信通知" + _0x1c4743.msg);
    } else console.log("微信通知失败");
  }
  async ["baoxing"]() {
    for (let _0x1cb07e = 1; _0x1cb07e <= 10; _0x1cb07e++) {
      await this.qiandaoguafen();
    }
  }
  async ["qiandaoguafen"]() {
    let _0x1b7d7a = await this.task("post", _0x2fbf07 + "/v1/box/open", this.headers, "{\"config_id\":3}");
    _0x1b7d7a.code == "ok" ? (console.log(this.num + "：宝箱" + _0x1b7d7a.data.coin_val + "金币"), await $.wait($.RT(1000, 3000)), await this.baoxiangguang(_0x1b7d7a.data.coin_val)) : console.log(this.num + "：宝箱" + _0x1b7d7a.msg);
  }
  async ["baoxiangguang"](_0x46b7a) {
    let _0x41ae56 = await this.task("post", _0x2fbf07 + "/v1/box/view_ad", this.headers, "{\"config_id\":3,\"coin_val\":" + _0x46b7a + ",\"ad_num\":1}");
    if (_0x41ae56.code == "ok") console.log(this.num + "：宝箱广告" + _0x41ae56.data.coin_val + "金币"), await $.wait(30000);else {
      console.log("账号" + this.num + "：宝箱广告" + _0x41ae56.msg);
    }
  }
  async ["kanjuqing"]() {
    let _0x355c86 = await this.task("post", _0x2fbf07 + "/v1/sign/report", this.headers, "{\"type\":2}");
    if (_0x355c86.code == "ok") {
      let _0x185df0 = 0;
      for (let _0x44cc4e = 0; _0x44cc4e < _0x355c86.data.info.length; _0x44cc4e++) {
        if (_0x355c86.data.info[_0x44cc4e].is_use) {
          _0x185df0++;
        }
      }
      await this.kanju(_0x185df0 + 2);
    } else console.log("账号" + this.num + "：看剧情况" + _0x355c86.msg);
  }
  async ["kanju"](_0x129ba5) {
    let _0x5e6032 = await this.task("post", _0x2fbf07 + "/v1/sign", this.headers, "{\"type\":2,\"make\":" + _0x129ba5 + "}");
    if (_0x5e6032.code == "ok") console.log(this.num + "：看剧" + _0x5e6032.data.coin_val + "金币");else {
      console.log("账号" + this.num + "：看剧" + _0x5e6032.msg);
    }
  }
  async ["chifanbutei"]() {
    let _0x5c7b8d = await this.task("post", _0x2fbf07 + "/v1/task/meal", this.headers, "{\"type\":3,\"claim_status\":2}");
    _0x5c7b8d.code == "ok" ? console.log(this.num + "：吃饭" + _0x5c7b8d.data.coin_val + "金币") : console.log("账号" + this.num + "：吃饭" + _0x5c7b8d.msg);
  }
  async ["chifanbuteiguangguao"]() {
    let _0x3c6b47 = await this.task("post", _0x2fbf07 + "/v1/task/meal/ad", this.headers, "{\"type\":3,\"claim_status\":2}");
    _0x3c6b47.code == "ok" ? console.log(this.num + "：吃饭广告" + _0x3c6b47.data.coin_val + "金币") : console.log("账号" + this.num + "：吃饭广告" + _0x3c6b47.msg);
  }
  async ["kanshipinid"]() {
    for (let _0x2e021d = 1; _0x2e021d <= 10; _0x2e021d++) {
      await this.kanshipin(_0x2e021d);
    }
  }
  async ["kanshipin"](_0x1e4c35) {
    let _0x4d638b = await this.task("post", _0x2fbf07 + "/v1/sign", this.headers, "{\"type\":4,\"mark\":" + _0x1e4c35 + "}");
    _0x4d638b.code == "ok" ? console.log(this.num + "：看视频" + _0x4d638b.data.species + "金币") : console.log("账号" + this.num + "：看视频" + _0x4d638b.msg);
  }
  async ["xinxi"]() {
    let _0x405e0c = await this.task("get", _0x2fbf07 + "/v1/sign/info?device_id=" + this.device_id, this.headers);
    if (_0x405e0c.code == "ok") console.log("账号:" + this.num + "  今日" + _0x405e0c.data.species + "金币，金额：" + _0x405e0c.data.cash_remain);else {
      console.log("账号" + this.num + "：" + _0x405e0c);
    }
  }
  async ["task"](_0x2861a6, _0x37dd8c, _0x5a0e49, _0x50185e) {
    _0x2861a6 == "delete" ? _0x2861a6 = _0x2861a6.toUpperCase() : _0x2861a6 = _0x2861a6;
    const _0x3e62c3 = require("request");
    _0x2861a6 == "post" && (delete _0x5a0e49["Content-Type"], delete _0x5a0e49["content-type"], delete _0x5a0e49["Content-Length"], delete _0x5a0e49["content-length"], $.safeGet(_0x50185e) ? _0x5a0e49["content-type"] = "application/json;charset=utf-8" : _0x5a0e49["content-type"] = "application/x-www-form-urlencoded", _0x50185e && (_0x5a0e49["content-length"] = $.lengthInUtf8Bytes(_0x50185e)));
    _0x2861a6 == "get" && (delete _0x5a0e49["Content-Type"], delete _0x5a0e49["content-length"], delete _0x5a0e49["content-type"], delete _0x5a0e49["Content-Length"]);
    _0x5a0e49.Host = _0x37dd8c.replace("//", "/").split("/")[1];
    if (_0x475b4f == undefined) {
      if (_0x2861a6.indexOf("T") < 0) var _0x42cae7 = {
        "url": _0x37dd8c,
        "headers": _0x5a0e49,
        "body": _0x50185e,
        "timeout": 20000
      };else {
        var _0x42cae7 = {
          "url": _0x37dd8c,
          "headers": _0x5a0e49,
          "form": JSON.parse(_0x50185e),
          "timeout": 20000
        };
      }
    } else {
      if (_0x2861a6.indexOf("T") < 0) var _0x42cae7 = {
        "url": _0x37dd8c,
        "headers": _0x5a0e49,
        "body": _0x50185e,
        "proxy": "http://" + this.dlip,
        "timeout": 20000
      };else var _0x42cae7 = {
        "url": _0x37dd8c,
        "headers": _0x5a0e49,
        "form": JSON.parse(_0x50185e),
        "proxy": "http://" + this.dlip,
        "timeout": 20000
      };
    }
    return new Promise(async _0xda06a3 => {
      _0x3e62c3[_0x2861a6.toLowerCase()](_0x42cae7, async (_0x3e7a9a, _0x9eb20f, _0x1c115e) => {
        try {
          _0x123507 == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x42cae7)), console.log("==================返回=================="), console.log(_0x1c115e));
        } catch (_0x577526) {} finally {
          return !_0x3e7a9a ? $.safeGet(_0x1c115e) ? _0x1c115e = JSON.parse(_0x1c115e) : _0x1c115e = _0x1c115e : _0x475b4f == undefined ? (console.log("请检查网络设置"), _0x1c115e = JSON.parse("{\"code\":\"99\"}")) : (await this.hqdl(), _0x1c115e = await this.task(_0x2861a6, _0x37dd8c, _0x5a0e49, _0x50185e)), _0xda06a3(_0x1c115e);
        }
      });
    });
  }
}
$ = _0x5a1661();
!(async () => {
  console.log("[" + NAME + "] " + $.timenow(3) + ":" + $.timenow(4) + ":" + $.timenow(5));
  await $.ExamineCookie();
  if (_0x475b4f == undefined) {
    console.log("当前使用本地网络运行脚本");
    console.log("\n-------- 用户信息 --------");
    await $.Multithreading("login");
    let _0x2900ec = $.cookie_list.filter(_0x232c5 => _0x232c5.login == true);
    if (_0x2900ec.length == 0) {
      console.log("Cookie格式错误 或 账号被禁封");
      return;
    } else {
      console.log("\n-------- 任务列表 --------");
      await $.Multithreading("user_task_list");
      console.log("\n-------- 运行结果 --------");
    }
    for (let _0x405429 of $.cookie_list) {
      _0x405429.xinxi();
    }
  } else {
    console.log("当前使用代理网络运行脚本");
    await $.Multithreading("hqdl");
    console.log("\n-------- 用户信息 --------");
    await $.Multithreading("login");
    let _0x3420cb = $.cookie_list.filter(_0xf4b5f7 => _0xf4b5f7.login == true);
    if (_0x3420cb.length == 0) {
      console.log("Cookie格式错误 或 账号被禁封");
      return;
    } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
    for (let _0xd4ad8a of $.cookie_list) {
      _0xd4ad8a.xinxi();
    }
  }
})().catch(_0x5ce62d => {
  console.log(_0x5ce62d);
}).finally(() => {});
function _0x5a1661() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x59427b, _0x390014, _0x19e114) {
      let _0x214547 = [];
      !_0x19e114 && (_0x19e114 = 1);
      while (_0x19e114--) {
        for (let _0x5ada64 of $.cookie_list) {
          _0x214547.push(_0x5ada64[_0x59427b](_0x390014));
        }
      }
      await Promise.allSettled(_0x214547);
    }
    ["ExamineCookie"]() {
      let _0xe3fd2 = process.env[VALY] || CK,
        _0x80080d = 0;
      if (_0xe3fd2) {
        for (let _0x8a8755 of _0x1b47ef) {
          if (_0xe3fd2.includes(_0x8a8755)) {
            this.splitor = _0x8a8755;
            break;
          }
        }
        for (let _0x1945a8 of _0xe3fd2.split(this.splitor).filter(_0x175e48 => !!_0x175e48)) {
          $.cookie_list.push(new _0xb7dbde(_0x1945a8));
        }
        _0x80080d = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      return console.log("共找到" + _0x80080d + "个账号"), $.cookie_list;
    }
    ["task"](_0x501030, _0xe5e338, _0x23a6e4, _0x26da24, _0x46dda4) {
      if (_0x501030 == "delete") _0x501030 = _0x501030.toUpperCase();else {
        _0x501030 = _0x501030;
      }
      return _0x501030 == "post" && (delete _0x23a6e4["content-type"], delete _0x23a6e4["Content-type"], delete _0x23a6e4["content-Type"], $.safeGet(_0x26da24) ? _0x23a6e4["Content-Type"] = "application/json;charset=UTF-8" : _0x23a6e4["Content-Type"] = "application/x-www-form-urlencoded", _0x26da24 && (_0x23a6e4["Content-Length"] = $.lengthInUtf8Bytes(_0x26da24))), _0x501030 == "get" && (delete _0x23a6e4["content-type"], delete _0x23a6e4["Content-type"], delete _0x23a6e4["content-Type"], delete _0x23a6e4["Content-Length"]), _0x23a6e4.Host = _0xe5e338.replace("//", "/").split("/")[1], new Promise(async _0x371980 => {
        if (_0x501030.indexOf("T") < 0) var _0x43be02 = {
          "url": _0xe5e338,
          "headers": _0x23a6e4,
          "body": _0x26da24,
          "proxy": "http://" + _0x46dda4
        };else var _0x43be02 = {
          "url": _0xe5e338,
          "headers": _0x23a6e4,
          "form": JSON.parse(_0x26da24),
          "proxy": "http://" + _0x46dda4
        };
        !_0x46dda4 && delete _0x43be02.proxy;
        this.request[_0x501030.toLowerCase()](_0x43be02, (_0x42f51a, _0x3c508c, _0x5bf7fb) => {
          try {
            _0x5bf7fb && _0x123507 == 1 && (console.log("================ 请求 ================"), console.log(_0x43be02), console.log("================ 返回 ================"), $.safeGet(_0x5bf7fb) ? console.log(JSON.parse(_0x5bf7fb)) : console.log(_0x5bf7fb));
          } catch (_0x577b62) {
            console.log(_0x577b62, _0xe5e338 + "\n" + _0x23a6e4);
          } finally {
            let _0x2bd6c4 = "";
            if (!_0x42f51a) {
              if ($.safeGet(_0x5bf7fb)) _0x2bd6c4 = JSON.parse(_0x5bf7fb);else _0x5bf7fb.indexOf("/") != -1 && _0x5bf7fb.indexOf("+") != -1 ? _0x2bd6c4 = $.decrypts(_0x5bf7fb) : _0x2bd6c4 = _0x5bf7fb;
            } else _0x2bd6c4 = _0xe5e338 + "   API请求失败，请检查网络重试\n" + _0x42f51a;
            return _0x371980(_0x2bd6c4);
          }
        });
      });
    }
    ["task2"](_0xf56364, _0x370cc3, _0x4e9003, _0x20afaa, _0x3aef67) {
      _0xf56364 == "delete" ? _0xf56364 = _0xf56364.toUpperCase() : _0xf56364 = _0xf56364;
      _0xf56364 == "post" && (delete _0x4e9003["content-type"], delete _0x4e9003["Content-type"], delete _0x4e9003["content-Type"], $.safeGet(_0x20afaa) ? _0x4e9003["Content-Type"] = "application/json;charset=UTF-8" : _0x4e9003["Content-Type"] = "application/x-www-form-urlencoded", _0x20afaa && (_0x4e9003["Content-Length"] = $.lengthInUtf8Bytes(_0x20afaa)));
      _0xf56364 == "get" && (delete _0x4e9003["content-type"], delete _0x4e9003["Content-type"], delete _0x4e9003["content-Type"], delete _0x4e9003["Content-Length"]);
      _0x4e9003.Host = _0x370cc3.replace("//", "/").split("/")[1];
      if (_0xf56364.indexOf("T") < 0) var _0x211884 = {
        "url": _0x370cc3,
        "headers": _0x4e9003,
        "body": _0x20afaa
      };else var _0x211884 = {
        "url": _0x370cc3,
        "headers": _0x4e9003,
        "form": JSON.parse(_0x20afaa)
      };
      return new Promise(async _0x1212a4 => {
        this.request[_0xf56364.toLowerCase()](_0x211884, (_0x1bb8c5, _0x5dc1c2, _0x3fb179) => {
          try {
            if (_0x3fb179) {
              _0x123507 == 1 && (console.log("================ 请求 ================"), console.log(_0x211884), console.log("================ 返回 ================"), $.safeGet(_0x3fb179) ? console.log(JSON.parse(_0x3fb179)) : console.log(_0x3fb179));
            }
          } catch (_0x4d512a) {
            console.log(_0x4d512a, _0x370cc3 + "\n" + _0x4e9003);
          } finally {
            let _0x3f4c58 = "";
            if (!_0x1bb8c5) {
              if ($.safeGet(_0x3fb179)) {
                _0x3f4c58 = _0x3fb179;
              } else {
                if (_0x3fb179.indexOf("/") != -1 && _0x3fb179.indexOf("+") != -1) _0x3f4c58 = $.decrypts(_0x3fb179);else {
                  _0x3f4c58 = _0x3fb179;
                }
              }
            } else _0x3f4c58 = _0x370cc3 + "   API请求失败，请检查网络重试\n" + _0x1bb8c5;
            return _0x1212a4(_0x3f4c58);
          }
        });
      });
    }
    ["lengthInUtf8Bytes"](_0x4dc573) {
      let _0x10d9b6 = encodeURIComponent(_0x4dc573).match(/%[89ABab]/g);
      return _0x4dc573.length + (_0x10d9b6 ? _0x10d9b6.length : 0);
    }
    ["randomArr"](_0x489317) {
      return _0x489317[parseInt(Math.random() * _0x489317.length, 10)];
    }
    ["wait"](_0x2a66f2) {
      return new Promise(_0x54ad06 => setTimeout(_0x54ad06, _0x2a66f2));
    }
    ["time"](_0x1b5821) {
      return _0x1b5821 == 10 ? Math.round(+new Date() / 1000) : +new Date();
    }
    ["timenow"](_0x52581e) {
      let _0x211c6a = new Date();
      if (_0x52581e == undefined) {
        let _0x289934 = new Date(),
          _0x21d5a3 = _0x289934.getFullYear() + "-",
          _0x219b8a = (_0x289934.getMonth() + 1 < 10 ? "0" + (_0x289934.getMonth() + 1) : _0x289934.getMonth() + 1) + "-",
          _0x2c7c45 = _0x289934.getDate() + " ",
          _0x1746d8 = _0x289934.getHours() + ":",
          _0x5af394 = _0x289934.getMinutes() + ":",
          _0x426a84 = _0x289934.getSeconds() + 1 < 10 ? "0" + _0x289934.getSeconds() : _0x289934.getSeconds();
        return _0x21d5a3 + _0x219b8a + _0x2c7c45 + _0x1746d8 + _0x5af394 + _0x426a84;
      } else {
        if (_0x52581e == 0) return _0x211c6a.getFullYear();else {
          if (_0x52581e == 1) return _0x211c6a.getMonth() + 1 < 10 ? "0" + (_0x211c6a.getMonth() + 1) : _0x211c6a.getMonth() + 1;else {
            if (_0x52581e == 2) return _0x211c6a.getDate();else {
              if (_0x52581e == 3) {
                return _0x211c6a.getHours();
              } else {
                if (_0x52581e == 4) {
                  return _0x211c6a.getMinutes();
                } else {
                  if (_0x52581e == 5) return _0x211c6a.getSeconds() + 1 < 10 ? "0" + _0x211c6a.getSeconds() : _0x211c6a.getSeconds();
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x58035f) {
      try {
        if (typeof JSON.parse(_0x58035f) == "object") {
          return true;
        }
      } catch (_0x1da0e1) {
        return false;
      }
    }
    ["SJS"](_0x4b919c, _0x3394c8) {
      if (_0x3394c8 == 0) {
        let _0x912190 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0xe7cc4d = _0x912190.length,
          _0x27da32 = "";
        for (let _0x20f52c = 0; _0x20f52c < _0x4b919c; _0x20f52c++) {
          _0x27da32 += _0x912190.charAt(Math.floor(Math.random() * _0xe7cc4d));
        }
        return _0x27da32;
      } else {
        if (_0x3394c8 == 1) {
          let _0x1b1241 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x6f774 = _0x1b1241.length,
            _0x5cb043 = "";
          for (let _0x352bc8 = 0; _0x352bc8 < _0x4b919c; _0x352bc8++) {
            _0x5cb043 += _0x1b1241.charAt(Math.floor(Math.random() * _0x6f774));
          }
          return _0x5cb043;
        } else {
          let _0x425a1c = "0123456789",
            _0x3352d2 = _0x425a1c.length,
            _0xf36bd = "";
          for (let _0x21ee9f = 0; _0x21ee9f < _0x4b919c; _0x21ee9f++) {
            _0xf36bd += _0x425a1c.charAt(Math.floor(Math.random() * _0x3352d2));
          }
          return _0xf36bd;
        }
      }
    }
    ["udid"](_0x12b656) {
      function _0x50d641() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x294a84 = _0x50d641() + _0x50d641() + "-" + _0x50d641() + "-" + _0x50d641() + "-" + _0x50d641() + "-" + _0x50d641() + _0x50d641() + _0x50d641();
      return _0x12b656 == 0 ? _0x294a84.toUpperCase() : _0x294a84.toLowerCase();
    }
    ["encodeUnicode"](_0x5c233f) {
      var _0x22dd4c = [];
      for (var _0x1ee173 = 0; _0x1ee173 < _0x5c233f.length; _0x1ee173++) {
        _0x22dd4c[_0x1ee173] = ("00" + _0x5c233f.charCodeAt(_0x1ee173).toString(16)).slice(-4);
      }
      return "\\u" + _0x22dd4c.join("\\u");
    }
    ["decodeUnicode"](_0x5d7874) {
      return _0x5d7874 = _0x5d7874.replace(/\\u/g, "%u"), unescape(unescape(_0x5d7874));
    }
    ["RT"](_0x467148, _0x81c592) {
      return Math.round(Math.random() * (_0x81c592 - _0x467148) + _0x467148);
    }
    ["arrNull"](_0x557054) {
      var _0x28aa06 = _0x557054.filter(_0x5a20f1 => {
        return _0x5a20f1 && _0x5a20f1.trim();
      });
      return _0x28aa06;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x1cc9a1 = $.nowtime();
      return JSON.stringify(_0x1cc9a1).indexOf(" ") >= 0 && (_0x1cc9a1 = _0x1cc9a1.replace(" ", "T")), new Date(_0x1cc9a1).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x102f0d, _0x4168e4, _0x5d82b1, _0x38ff8e) {
      return _0x38ff8e == 0 ? JSON.stringify(_0x102f0d.split(_0x4168e4).reduce((_0x401b9e, _0x32ba63) => {
        let _0x4dc1bd = _0x32ba63.split(_0x5d82b1);
        return _0x401b9e[_0x4dc1bd[0].trim()] = _0x4dc1bd[1].trim(), _0x401b9e;
      }, {})) : _0x102f0d.split(_0x4168e4).reduce((_0x428cc3, _0x50c191) => {
        let _0x571c01 = _0x50c191.split(_0x5d82b1);
        return _0x428cc3[_0x571c01[0].trim()] = _0x571c01[1].trim(), _0x428cc3;
      }, {});
    }
    ["MD5Encrypt"](_0x1fd140, _0x17153a) {
      if (_0x1fd140 == 0) return this.CryptoJS.MD5(_0x17153a).toString().toLowerCase();else {
        if (_0x1fd140 == 1) {
          return this.CryptoJS.MD5(_0x17153a).toString().toUpperCase();
        } else {
          if (_0x1fd140 == 2) {
            return this.CryptoJS.MD5(_0x17153a).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x1fd140 == 3) return this.CryptoJS.MD5(_0x17153a).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x3f80d3, _0x418745, _0x5a8e8a) {
      if (_0x3f80d3 == 0) {
        return this.CryptoJS[_0x418745](_0x5a8e8a).toString(this.CryptoJS.enc.Base64);
      } else return this.CryptoJS[_0x418745](_0x5a8e8a).toString();
    }
    ["HmacSHA_Encrypt"](_0x29871a, _0x47c575, _0x34ea2f, _0xb9ee76) {
      return _0x29871a == 0 ? this.CryptoJS[_0x47c575](_0x34ea2f, _0xb9ee76).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x47c575](_0x34ea2f, _0xb9ee76).toString();
    }
    ["Base64"](_0x4b8f6f, _0x4d0281) {
      if (_0x4b8f6f == 0) {
        return this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x4d0281));
      } else return this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x4d0281));
    }
    ["DecryptCrypto"](_0x1c10d5, _0x523afd, _0x4f9d01, _0x557b38, _0x54742b, _0x2979c1, _0x216d2e) {
      if (_0x1c10d5 == 0) {
        const _0x312c17 = this.CryptoJS[_0x523afd].encrypt(this.CryptoJS.enc.Utf8.parse(_0x54742b), this.CryptoJS.enc.Utf8.parse(_0x2979c1), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x216d2e),
          "mode": this.CryptoJS.mode[_0x4f9d01],
          "padding": this.CryptoJS.pad[_0x557b38]
        });
        return _0x312c17.toString();
      } else {
        const _0xd83f01 = this.CryptoJS[_0x523afd].decrypt(_0x54742b, this.CryptoJS.enc.Utf8.parse(_0x2979c1), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x216d2e),
          "mode": this.CryptoJS.mode[_0x4f9d01],
          "padding": this.CryptoJS.pad[_0x557b38]
        });
        return _0xd83f01.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x371397, _0x2413fe) {
      const _0x23417f = require("node-rsa");
      let _0xad78e6 = new _0x23417f("-----BEGIN PUBLIC KEY-----\n" + _0x2413fe + "\n-----END PUBLIC KEY-----");
      return _0xad78e6.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0xad78e6.encrypt(_0x371397, "base64", "utf8");
    }
    ["SHA_RSA"](_0x2a993a, _0x2b0378) {
      let _0x450908 = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x2b0378, 76) + "\n-----END PRIVATE KEY-----"),
        _0x2df3cb = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x2df3cb.init(_0x450908);
      _0x2df3cb.updateString(_0x2a993a);
      let _0x52fe2c = _0x2df3cb.sign(),
        _0x175154 = this.Sha_Rsa.hextob64u(_0x52fe2c);
      return _0x175154;
    }
  }();
}
async function _0x4e77bd(_0x262d75, _0x31c41f) {
  const _0x454d03 = require("node-rsa");
  let _0xb36bb7 = new _0x454d03("-----BEGIN PUBLIC KEY-----\n" + _0x31c41f + "\n-----END PUBLIC KEY-----");
  return _0xb36bb7.setOptions({
    "encryptionScheme": "pkcs1"
  }), _0xb36bb7.encrypt(_0x262d75, "base64", "utf8");
}
async function _0xb534d9() {
  let _0x209994 = await $.task("get", "https://gitee.com/xiaogangg/cg/raw/changgu/banben.json", {
      "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
    }),
    _0x4dcbab = _0x209994[NAME];
  console.log("脚本版本：" + _0x327f58 + "   最新版本：" + _0x4dcbab);
}