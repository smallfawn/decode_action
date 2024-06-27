const _0x503289 = _0x2473fd("电信兑换签到话费"),
  _0x36b590 = require("got"),
  {
    CookieJar: _0x520a32
  } = require("tough-cookie"),
  _0x4aa136 = "chinaTelecom",
  _0x48e1ed = ["\n", "&", "@"],
  _0xc2bc18 = [_0x4aa136 + "Account"],
  _0xda5fd8 = 8000,
  _0x8a6f0d = 3;
let _0x19953f = null;
const _0x27d748 = process.env[_0x4aa136 + "Proxy"] || process.env.LEAF_DEBUG_PROXY || "",
  _0x378489 = "iPhone 14 Pro Max/9.6.1",
  _0xbe1db7 = 10,
  _0x1643b7 = 5,
  _0xa335b9 = 15,
  _0x46095 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB",
  _0x489164 = "-----BEGIN PUBLIC KEY-----\n" + _0x46095 + "\n-----END PUBLIC KEY-----",
  _0x43d11a = require("node-rsa");
let _0x5081c4 = new _0x43d11a(_0x489164);
const _0x132ae2 = {
  encryptionScheme: "pkcs1"
};
_0x5081c4.setOptions(_0x132ae2);
const _0x558ab7 = 2.04,
  _0x1204e2 = "chinaTelecomExchange",
  _0x592c57 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x55d1ae = 13,
  _0x1a53d6 = 1000,
  _0x46b291 = 3600000,
  _0x3ae7d9 = 0;
class _0x770e22 {
  constructor() {
    this.index = _0x503289.userIdx++;
    this.name = "";
    this.valid = true;
    const _0x11c22b = {
      limit: 0
    };
    const _0x520e03 = {
      connection: "keep-alive"
    };
    const _0x3c5996 = {
      retry: _0x11c22b,
      timeout: _0xda5fd8,
      followRedirect: false,
      headers: _0x520e03
    };
    this.got = _0x36b590.extend(_0x3c5996);
  }
  log(_0x30129e, _0x3b4efb = {}) {
    var _0x12a078 = "",
      _0x57a6a0 = _0x503289.userCount.toString().length;
    if (this.index) {
      _0x12a078 += "账号[" + _0x503289.padStr(this.index, _0x57a6a0) + "]";
    }
    if (this.name) {
      _0x12a078 += "[" + this.name + "]";
    }
    _0x503289.log(_0x12a078 + _0x30129e, _0x3b4efb);
  }
  async request(_0x43b1d5) {
    var _0x1b128c = null,
      _0x553a27 = 0,
      _0x573457 = _0x43b1d5.fn || _0x43b1d5.url;
    _0x43b1d5.method = _0x43b1d5?.["method"]?.["toUpperCase"]() || "GET";
    if (_0x27d748) {
      if (!_0x19953f) {
        var _0xf088a9 = require("https-proxy-agent");
        _0x19953f = new _0xf088a9(_0x27d748);
      }
      const _0x14c243 = {
        http: _0x19953f,
        https: _0x19953f
      };
      _0x43b1d5.agent = _0x14c243;
      const _0x3b4dfd = {
        rejectUnauthorized: false
      };
      _0x43b1d5.https = _0x3b4dfd;
    }
    while (_0x553a27++ < _0x8a6f0d) {
      try {
        await this.got(_0x43b1d5).then(_0x22d889 => {
          _0x1b128c = _0x22d889;
        }, _0x2280ff => {
          _0x1b128c = _0x2280ff.response;
        });
        if ((_0x1b128c?.["statusCode"] / 100 | 0) <= 4) {
          break;
        }
      } catch (_0x445b41) {
        _0x445b41.name == "TimeoutError" ? this.log("[" + _0x573457 + "]请求超时，重试第" + _0x553a27 + "次") : this.log("[" + _0x573457 + "]请求错误(" + _0x445b41.message + ")，重试第" + _0x553a27 + "次");
      }
    }
    const _0x5ab380 = {
      statusCode: -1,
      headers: null,
      result: null
    };
    if (_0x1b128c == null) {
      return Promise.resolve(_0x5ab380);
    }
    let {
      statusCode: _0xa6d2af,
      headers: _0xdb988c,
      body: _0x559ba6
    } = _0x1b128c;
    if (_0x559ba6) {
      try {
        _0x559ba6 = JSON.parse(_0x559ba6);
      } catch {}
    }
    const _0x47d54c = {
      statusCode: _0xa6d2af,
      headers: _0xdb988c,
      result: _0x559ba6
    };
    return Promise.resolve(_0x47d54c);
  }
}
let _0x48168d = new _0x770e22();
class _0x199ede extends _0x770e22 {
  constructor(_0xaade4a) {
    super();
    let _0x1faf7c = _0xaade4a.split("#");
    this.name = _0x1faf7c[0];
    this.passwd = _0x1faf7c[1];
    const _0x2ed63e = {
      Connection: "keep-alive",
      "User-Agent": _0x378489
    };
    const _0x26f6aa = {
      headers: _0x2ed63e
    };
    this.got = this.got.extend(_0x26f6aa);
  }
  encrypt_para(_0x38f45e) {
    return _0x5081c4.encrypt(JSON.stringify(_0x38f45e), "hex");
  }
  async activityMsg(_0x2e2540 = 0, _0x3a356 = {}) {
    try {
      let _0x220ac1 = {
          phone: this.name
        },
        _0x2e8d19 = {
          fn: "userCoinInfo",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/reward/activityMsg",
          json: {
            para: this.encrypt_para(_0x220ac1)
          }
        },
        {
          result: _0x49d610
        } = await this.request(_0x2e8d19);
      if (_0x49d610?.["totalDay"]) {
        const _0x3ef159 = {
          notify: true
        };
        this.log("已连续签到: " + (_0x49d610?.["totalDay"] || 0) + "天", _0x3ef159);
        this.rewardId = _0x49d610?.["date"]?.["id"] || "";
      } else {
        if (!_0x49d610?.["code"] && _0x2e2540 <= _0x1643b7) {
          _0x2e2540++;
          await this.activityMsg(_0x2e2540);
        } else {
          const _0x33368e = {
            notify: true
          };
          this.log("查询签到信息失败: " + (_0x49d610?.["resoultMsg"] || _0x49d610?.["error"] || ""), _0x33368e);
        }
      }
    } catch (_0x42d7ac) {
      console.log(_0x42d7ac);
    }
  }
  async convertReward(_0x40f855 = 0, _0x2502c6 = {}) {
    if (!this.rewardId) {
      return;
    }
    try {
      let _0x218516 = {
          phone: this.name,
          rewardId: this.rewardId,
          month: _0x503289.time("yyyyMM")
        },
        _0x5be7d9 = {
          fn: "convertReward",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/reward/convertReward",
          json: {
            para: this.encrypt_para(_0x218516)
          }
        },
        {
          result: _0x3cc0a1
        } = await this.request(_0x5be7d9);
      if (_0x3cc0a1?.["code"] == 0) {
        const _0x37ad16 = {
          notify: true
        };
        this.log("兑换连签话费成功", _0x37ad16);
      } else {
        let _0x15b284 = _0x3cc0a1?.["msg"] || _0x3cc0a1?.["resoultMsg"] || _0x3cc0a1?.["error"] || "";
        if (_0x40f855++ <= _0xa335b9 && (!_0x3cc0a1?.["code"] || _0x15b284?.["includes"]("兑换失败") || _0x15b284?.["includes"]("频繁"))) {
          this.log("第" + _0x40f855 + "次兑换失败[" + (_0x3cc0a1?.["code"] || "无返回") + "]: " + _0x15b284);
          await _0x503289.wait(12000);
          await this.convertReward(_0x40f855);
        } else {
          const _0x52b5ab = {
            notify: true
          };
          this.log("第" + _0x40f855 + "次兑换失败[" + _0x3cc0a1?.["code"] + "]: " + _0x15b284, _0x52b5ab);
        }
      }
    } catch (_0x1df7ac) {
      console.log(_0x1df7ac);
    }
  }
}
!(async () => {
  if (!(await _0x59256c())) {
    return;
  }
  _0x503289.read_env(_0x199ede);
  let _0x5aab3d = [];
  for (let _0x44c1b4 of _0x503289.userList) {
    _0x5aab3d.push(_0x44c1b4.activityMsg());
  }
  await Promise.all(_0x5aab3d);
  let _0x2b00f9 = _0x503289.userList.filter(_0x54bf83 => _0x54bf83.rewardId);
  if (!_0x2b00f9.length) {
    return;
  }
  _0x5aab3d = [];
  await _0x503289.wait_until("12:00:00");
  for (let _0x46fe98 of _0x2b00f9) {
    _0x5aab3d.push(_0x46fe98.convertReward());
  }
  await Promise.all(_0x5aab3d);
})().catch(_0x155a0b => _0x503289.log(_0x155a0b)).finally(() => _0x503289.exitNow());
async function _0x59256c(_0x2869fc = 0) {
  let _0x2ae24c = false;
  try {
    let _0x28d5f4 = {
        fn: "auth",
        method: "get",
        url: _0x592c57,
        timeout: 20000
      },
      {
        statusCode: _0x1f054a,
        result: _0x3a9b1f
      } = await _0x48168d.request(_0x28d5f4);
    if (_0x1f054a != 200) {
      _0x2869fc++ < _0xbe1db7 && (_0x2ae24c = await _0x59256c(_0x2869fc));
      return _0x2ae24c;
    }
    if (_0x3a9b1f?.["code"] == 0) {
      _0x3a9b1f = JSON.parse(_0x3a9b1f.data.file.data);
      if (_0x3a9b1f?.["commonNotify"] && _0x3a9b1f.commonNotify.length > 0) {
        const _0x54d1c2 = {
          notify: true
        };
        _0x503289.log(_0x3a9b1f.commonNotify.join("\n") + "\n", _0x54d1c2);
      }
      _0x3a9b1f?.["commonMsg"] && _0x3a9b1f.commonMsg.length > 0 && _0x503289.log(_0x3a9b1f.commonMsg.join("\n") + "\n");
      if (_0x3a9b1f[_0x1204e2]) {
        let _0x1517dc = _0x3a9b1f[_0x1204e2];
        _0x1517dc.status == 0 ? _0x558ab7 >= _0x1517dc.version ? (_0x2ae24c = true, _0x503289.log(_0x1517dc.msg[_0x1517dc.status]), _0x503289.log(_0x1517dc.updateMsg), _0x503289.log("现在运行的脚本版本是：" + _0x558ab7 + "，最新脚本版本：" + _0x1517dc.latestVersion)) : _0x503289.log(_0x1517dc.versionMsg) : _0x503289.log(_0x1517dc.msg[_0x1517dc.status]);
      } else {
        _0x503289.log(_0x3a9b1f.errorMsg);
      }
    } else {
      _0x2869fc++ < _0xbe1db7 && (_0x2ae24c = await _0x59256c(_0x2869fc));
    }
  } catch (_0x560df4) {
    _0x503289.log(_0x560df4);
  } finally {
    return _0x2ae24c;
  }
}
function _0x2473fd(_0x1382f3) {
  return new class {
    constructor(_0x214e59) {
      this.name = _0x214e59;
      this.startTime = Date.now();
      const _0x270334 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x270334);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x9a3227, _0x207ba2 = {}) {
      let _0x34a1de = {
        console: true
      };
      Object.assign(_0x34a1de, _0x207ba2);
      if (_0x34a1de.time) {
        let _0x579836 = _0x34a1de.fmt || "hh:mm:ss";
        _0x9a3227 = "[" + this.time(_0x579836) + "]" + _0x9a3227;
      }
      if (_0x34a1de.notify) {
        this.notifyStr.push(_0x9a3227);
      }
      if (_0x34a1de.console) {
        console.log(_0x9a3227);
      }
    }
    read_env(_0x184708) {
      let _0x40f303 = _0xc2bc18.map(_0x5ab017 => process.env[_0x5ab017]);
      for (let _0x16168c of _0x40f303.filter(_0x373807 => !!_0x373807)) {
        let _0x230424 = _0x48e1ed.filter(_0x23d49e => _0x16168c.includes(_0x23d49e)),
          _0x10ae62 = _0x230424.length > 0 ? _0x230424[0] : _0x48e1ed[0];
        for (let _0x3d8439 of _0x16168c.split(_0x10ae62).filter(_0x3df2dd => !!_0x3df2dd)) {
          this.userList.push(new _0x184708(_0x3d8439));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x2b762f = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0xc2bc18.map(_0x4c5a42 => "[" + _0x4c5a42 + "]").join("或"), _0x2b762f);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async threads(_0x17810e, _0x111f6e, _0x171b2e = {}) {
      while (_0x111f6e.idx < _0x503289.userList.length) {
        let _0x406b73 = _0x503289.userList[_0x111f6e.idx++];
        if (!_0x406b73.valid) {
          continue;
        }
        await _0x406b73[_0x17810e](_0x171b2e);
      }
    }
    async threadTask(_0x4b8d97, _0x440645) {
      let _0x260536 = [];
      let _0x5227ff = {
        idx: 0
      };
      while (_0x440645--) {
        _0x260536.push(this.threads(_0x4b8d97, _0x5227ff));
      }
      await Promise.all(_0x260536);
    }
    time(_0x5b2aea, _0x2ccff4 = null) {
      let _0x6cb6e5 = _0x2ccff4 ? new Date(_0x2ccff4) : new Date(),
        _0x5a01dd = {
          "M+": _0x6cb6e5.getMonth() + 1,
          "d+": _0x6cb6e5.getDate(),
          "h+": _0x6cb6e5.getHours(),
          "m+": _0x6cb6e5.getMinutes(),
          "s+": _0x6cb6e5.getSeconds(),
          "q+": Math.floor((_0x6cb6e5.getMonth() + 3) / 3),
          S: this.padStr(_0x6cb6e5.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x5b2aea) && (_0x5b2aea = _0x5b2aea.replace(RegExp.$1, (_0x6cb6e5.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x4457d6 in _0x5a01dd) new RegExp("(" + _0x4457d6 + ")").test(_0x5b2aea) && (_0x5b2aea = _0x5b2aea.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5a01dd[_0x4457d6] : ("00" + _0x5a01dd[_0x4457d6]).substr(("" + _0x5a01dd[_0x4457d6]).length)));
      return _0x5b2aea;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x522fb1 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x522fb1.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x438c8d, _0x1a8925, _0x525424 = {}) {
      let _0x4cc722 = _0x525424.padding || "0",
        _0x5403e5 = _0x525424.mode || "l",
        _0x2a9301 = String(_0x438c8d),
        _0x3fdeef = _0x1a8925 > _0x2a9301.length ? _0x1a8925 - _0x2a9301.length : 0,
        _0x322910 = "";
      for (let _0x39f2c3 = 0; _0x39f2c3 < _0x3fdeef; _0x39f2c3++) {
        _0x322910 += _0x4cc722;
      }
      _0x5403e5 == "r" ? _0x2a9301 = _0x2a9301 + _0x322910 : _0x2a9301 = _0x322910 + _0x2a9301;
      return _0x2a9301;
    }
    json2str(_0xed03d6, _0xd48e3e, _0x126d56 = false) {
      let _0x2ab025 = [];
      for (let _0x476c18 of Object.keys(_0xed03d6).sort()) {
        let _0x20d955 = _0xed03d6[_0x476c18];
        if (_0x20d955 && _0x126d56) {
          _0x20d955 = encodeURIComponent(_0x20d955);
        }
        _0x2ab025.push(_0x476c18 + "=" + _0x20d955);
      }
      return _0x2ab025.join(_0xd48e3e);
    }
    str2json(_0x2c6549, _0x542e37 = false) {
      let _0x5f3def = {};
      for (let _0x2da1a3 of _0x2c6549.split("&")) {
        if (!_0x2da1a3) {
          continue;
        }
        let _0x280757 = _0x2da1a3.indexOf("=");
        if (_0x280757 == -1) {
          continue;
        }
        let _0x1f0841 = _0x2da1a3.substr(0, _0x280757),
          _0x5cac41 = _0x2da1a3.substr(_0x280757 + 1);
        if (_0x542e37) {
          _0x5cac41 = decodeURIComponent(_0x5cac41);
        }
        _0x5f3def[_0x1f0841] = _0x5cac41;
      }
      return _0x5f3def;
    }
    randomPattern(_0x3ce270, _0x23798e = "abcdef0123456789") {
      let _0x10db59 = "";
      for (let _0x5324a0 of _0x3ce270) {
        if (_0x5324a0 == "x") {
          _0x10db59 += _0x23798e.charAt(Math.floor(Math.random() * _0x23798e.length));
        } else {
          _0x5324a0 == "X" ? _0x10db59 += _0x23798e.charAt(Math.floor(Math.random() * _0x23798e.length)).toUpperCase() : _0x10db59 += _0x5324a0;
        }
      }
      return _0x10db59;
    }
    randomUuid() {
      return [this.randomPattern("xxxxxxxx"), this.randomPattern("xxxx"), this.randomPattern("4xxx"), this.randomPattern("xxxx"), this.randomPattern("xxxxxxxxxxxx")];
    }
    randomString(_0x9c0f07, _0x47e6b8 = "abcdef0123456789") {
      let _0x42f748 = "";
      for (let _0x4b14cb = 0; _0x4b14cb < _0x9c0f07; _0x4b14cb++) {
        _0x42f748 += _0x47e6b8.charAt(Math.floor(Math.random() * _0x47e6b8.length));
      }
      return _0x42f748;
    }
    randomList(_0x80f04d) {
      let _0x3e20e9 = Math.floor(Math.random() * _0x80f04d.length);
      return _0x80f04d[_0x3e20e9];
    }
    wait(_0x113c75) {
      return new Promise(_0x33c370 => setTimeout(_0x33c370, _0x113c75));
    }
    async exitNow() {
      await this.showmsg();
      let _0x18d7ef = Date.now(),
        _0x3632cc = (_0x18d7ef - this.startTime) / 1000;
      this.log("");
      const _0x16aafd = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x3632cc + "秒", _0x16aafd);
      process.exit(0);
    }
    normalize_time(_0x120556, _0x170e14 = {}) {
      let _0x33fd0b = _0x170e14.len || _0x55d1ae;
      _0x120556 = _0x120556.toString();
      let _0x552921 = _0x120556.length;
      while (_0x552921 < _0x33fd0b) {
        _0x120556 += "0";
      }
      _0x552921 > _0x33fd0b && (_0x120556 = _0x120556.slice(0, 13));
      return parseInt(_0x120556);
    }
    async wait_until(_0x2c1c1d, _0x2f227c = {}) {
      let _0x4f58d2 = _0x2f227c.logger || this,
        _0x451e7f = _0x2f227c.interval || _0x1a53d6,
        _0x407795 = _0x2f227c.limit || _0x46b291,
        _0x2ee0ca = _0x2f227c.ahead || _0x3ae7d9;
      if (typeof _0x2c1c1d == "string" && _0x2c1c1d.includes(":")) {
        if (_0x2c1c1d.includes("-")) {
          _0x2c1c1d = new Date(_0x2c1c1d).getTime();
        } else {
          let _0x3bff93 = this.time("yyyy-MM-dd ");
          _0x2c1c1d = new Date(_0x3bff93 + _0x2c1c1d).getTime();
        }
      }
      let _0x5cf84b = this.normalize_time(_0x2c1c1d) - _0x2ee0ca,
        _0x1a8a2f = this.time("hh:mm:ss.S", _0x5cf84b),
        _0x22223b = Date.now();
      _0x22223b > _0x5cf84b && (_0x5cf84b += 86400000);
      let _0x356fe8 = _0x5cf84b - _0x22223b;
      if (_0x356fe8 > _0x407795) {
        const _0x3adb7f = {
          time: true
        };
        _0x4f58d2.log("离目标时间[" + _0x1a8a2f + "]大于" + _0x407795 / 1000 + "秒,不等待", _0x3adb7f);
      } else {
        const _0x233847 = {
          time: true
        };
        _0x4f58d2.log("离目标时间[" + _0x1a8a2f + "]还有" + _0x356fe8 / 1000 + "秒,开始等待", _0x233847);
        while (_0x356fe8 > 0) {
          let _0x464bea = Math.min(_0x356fe8, _0x451e7f);
          await this.wait(_0x464bea);
          _0x22223b = Date.now();
          _0x356fe8 = _0x5cf84b - _0x22223b;
        }
        const _0x242212 = {
          time: true
        };
        _0x4f58d2.log("已完成等待", _0x242212);
      }
    }
  }(_0x1382f3);
}