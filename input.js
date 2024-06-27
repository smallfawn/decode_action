const _0x6ed4a1 = _0x4a89e9("望潮"),
  _0x20780b = require("got"),
  _0x3ee777 = require("crypto-js"),
  {
    CookieJar: _0x3841b1
  } = require("tough-cookie"),
  _0x2b4d57 = require("node-rsa"),
  _0x3ec11d = "wangchao",
  _0x591f35 = /[\n\&\@]/,
  _0x2c344a = [_0x3ec11d + "Account"],
  _0x51b407 = 20000,
  _0x173e6f = 3;
const _0x24be9c = 1.01,
  _0x46d779 = "wangchao",
  _0x24993a = "http://192.168.123.235/1.json",
  _0x4e5e55 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;;xsb;xsb_wangchao;5.3.3;Appstore;native_app",
  _0x34a356 = "https://xmt.taizhou.com.cn/readingAward/?gaze_control=01",
  _0x4a2157 = 5,
  _0x56b97d = "TlGFQAOlCIVxnKopQnW",
  _0x14df33 = 64,
  _0x3fa56f = 10019,
  _0x36d0e4 = "FR*r!isE5W",
  _0x2d953e = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB",
  _0x18eb96 = "-----BEGIN PUBLIC KEY-----\n" + _0x2d953e + "\n-----END PUBLIC KEY-----",
  _0xcfda1f = new _0x2b4d57(_0x18eb96),
  _0x5c52ca = {
    encryptionScheme: "pkcs1"
  };
_0xcfda1f.setOptions(_0x5c52ca);
let _0x4e18c5 = [];
class _0x83008c {
  constructor() {
    this.index = _0x6ed4a1.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x4a3494 = {
      limit: 0
    };
    const _0x1bffac = {
      Connection: "keep-alive"
    };
    const _0x5c6e49 = {
      retry: _0x4a3494,
      timeout: _0x51b407,
      followRedirect: false,
      headers: _0x1bffac
    };
    this.got = _0x20780b.extend(_0x5c6e49);
  }
  log(_0xa03233, _0x54356e = {}) {
    var _0x37e17e = "",
      _0x22f35f = _0x6ed4a1.userCount.toString().length;
    if (this.index) {
      _0x37e17e += "账号[" + _0x6ed4a1.padStr(this.index, _0x22f35f) + "]";
    }
    if (this.name) {
      _0x37e17e += "[" + this.name + "]";
    }
    _0x6ed4a1.log(_0x37e17e + _0xa03233, _0x54356e);
  }
  async request(_0x491add) {
    const _0x1a6b72 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0xd9d2f = ["TimeoutError"];
    var _0x3a0050 = null,
      _0x5ee790 = 0,
      _0x5e672a = _0x491add.fn || _0x491add.url;
    _0x491add.method = _0x491add?.["method"]?.["toUpperCase"]() || "GET";
    let _0x5f1dc1;
    while (_0x5ee790 < _0x173e6f) {
      try {
        _0x5ee790++;
        _0x5f1dc1 = null;
        let _0x10486a = null,
          _0x233676 = _0x491add?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x51b407,
          _0x40d467 = false;
        await new Promise(async _0x26e38a => {
          setTimeout(() => {
            _0x40d467 = true;
            _0x26e38a();
          }, _0x233676);
          await this.got(_0x491add).then(_0x362b42 => {
            _0x3a0050 = _0x362b42;
          }, _0x5ef372 => {
            _0x10486a = _0x5ef372;
            _0x3a0050 = _0x5ef372.response;
            _0x5f1dc1 = _0x10486a?.["code"];
          });
          _0x26e38a();
        });
        if (_0x40d467) {
          this.log("[" + _0x5e672a + "]请求超时(" + _0x233676 / 1000 + "秒)，重试第" + _0x5ee790 + "次");
        } else {
          if (_0xd9d2f.includes(_0x10486a?.["name"])) {
            this.log("[" + _0x5e672a + "]请求超时(" + _0x10486a.code + ")，重试第" + _0x5ee790 + "次");
          } else {
            if (_0x1a6b72.includes(_0x10486a?.["code"])) {
              this.log("[" + _0x5e672a + "]请求错误(" + _0x10486a.code + ")，重试第" + _0x5ee790 + "次");
            } else {
              let _0x35a66f = _0x3a0050?.["statusCode"] || 999,
                _0x1495e3 = _0x35a66f / 100 | 0;
              if (_0x1495e3 > 3) {
                this.log("请求[" + _0x5e672a + "]返回[" + _0x35a66f + "]");
              }
              if (_0x1495e3 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x37f898) {
        _0x37f898.name == "TimeoutError" ? this.log("[" + _0x5e672a + "]请求超时，重试第" + _0x5ee790 + "次") : this.log("[" + _0x5e672a + "]请求错误(" + _0x37f898.message + ")，重试第" + _0x5ee790 + "次");
      }
    }
    if (_0x3a0050 == null) {
      return Promise.resolve({
        statusCode: _0x5f1dc1 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x209fb8,
      headers: _0x5562ee,
      body: _0x3191f5
    } = _0x3a0050;
    if (_0x3191f5) {
      try {
        _0x3191f5 = JSON.parse(_0x3191f5);
      } catch {}
    }
    const _0x1c503f = {
      statusCode: _0x209fb8,
      headers: _0x5562ee,
      result: _0x3191f5
    };
    return Promise.resolve(_0x1c503f);
  }
}
let _0x113a39 = new _0x83008c();
class _0x37ec30 extends _0x83008c {
  constructor(_0x346dcb) {
    super();
    this.cookieJar = new _0x3841b1();
    let _0x45ab5a = _0x346dcb.split("#");
    this.name = _0x45ab5a[0];
    this.passwd = _0x45ab5a[1];
    this.sessionId = "64db3ad3bf15a44961512788";
    this.deviceId = _0x6ed4a1.randomUuid().toUpperCase();
    const _0x12073c = {
      "User-Agent": _0x4e5e55,
      Referer: _0x34a356
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x12073c
    });
  }
  get_sign(_0x499638 = {}) {
    const _0x25e42d = {
      salt: _0x56b97d
    };
    let _0xd70309 = Object.assign(_0x25e42d, _0x499638),
      _0x3b6a93 = [""];
    for (let _0x3103b7 of Object.keys(_0xd70309).sort()) {
      _0x3b6a93.push(_0xd70309[_0x3103b7].toString());
    }
    return _0x3ee777.MD5(_0x3b6a93.join("&&")).toString();
  }
  add_header(_0x1a5826) {
    let _0x38d225 = new URL(_0x1a5826.url),
      _0x33c4de = _0x38d225.pathname,
      _0x592500 = _0x6ed4a1.pop(_0x1a5826, "headers", {}),
      _0x318d04 = _0x6ed4a1.pop(_0x592500, "X-REQUEST-ID", _0x6ed4a1.randomUuid().toUpperCase()),
      _0x1ef5c8 = _0x6ed4a1.pop(_0x592500, "X-TIMESTAMP", Date.now()),
      _0x139cde = _0x33c4de + "&&" + this.sessionId + "&&" + _0x318d04 + "&&" + _0x1ef5c8 + "&&" + _0x36d0e4 + "&&" + _0x14df33,
      _0x11cf32 = _0x3ee777.SHA256(_0x139cde).toString();
    let _0x4a8654 = {
      "X-SESSION-ID": this.sessionId,
      "X-REQUEST-ID": _0x318d04,
      "X-TIMESTAMP": _0x1ef5c8,
      "X-TENANT-ID": _0x14df33,
      "X-SIGNATURE": _0x11cf32
    };
    _0x1a5826.headers = Object.assign(_0x592500, _0x4a8654);
  }
  async credential_auth(_0x1c05ce = {}) {
    let _0x44036f = false;
    try {
      let _0xe3ccef = "credential_auth",
        _0x2a6ced = {
          fn: _0xe3ccef,
          method: "post",
          url: "https://passport.tmuyun.com/web/oauth/credential_auth",
          form: {
            client_id: _0x3fa56f,
            password: _0xcfda1f.encrypt(this.passwd, "base64"),
            phone_number: this.name
          }
        },
        {
          result: _0x181053,
          statusCode: _0x1ec785
        } = await this.request(_0x2a6ced),
        _0x5f5b78 = _0x6ed4a1.get(_0x181053, "code", _0x1ec785);
      if (_0x5f5b78 == 0) {
        _0x44036f = await this.zbtxz_login(_0x181053?.["data"]?.["authorization_code"]?.["code"]);
      } else {
        let _0x552b35 = _0x6ed4a1.get(_0x181053, "msg", "");
        this.log("[" + _0xe3ccef + "]失败[" + _0x5f5b78 + "]: " + _0x552b35);
      }
    } catch (_0x146de9) {
      console.log(_0x146de9);
    } finally {
      return _0x44036f;
    }
  }
  async zbtxz_login(_0x282ed5, _0x318040 = {}) {
    let _0x565a0b = false;
    try {
      let _0x4bc1b4 = "zbtxz_login";
      const _0x5bb8bf = {
        code: _0x282ed5,
        token: "",
        type: -1,
        union_id: ""
      };
      let _0x2a5e61 = {
        fn: _0x4bc1b4,
        method: "post",
        url: "https://vapp.taizhou.com.cn/api/zbtxz/login",
        form: _0x5bb8bf
      };
      this.add_header(_0x2a5e61);
      let {
          result: _0x14d7b5,
          statusCode: _0x73f99f
        } = await this.request(_0x2a5e61),
        _0x323a5b = _0x6ed4a1.get(_0x14d7b5, "code", _0x73f99f);
      if (_0x323a5b == 0) {
        _0x565a0b = this.valid = true;
        let {
          id: _0x104a6b,
          account_id: _0x49ab11
        } = _0x14d7b5?.["data"]?.["session"];
        this.sessionId = _0x104a6b;
        this.account_id = _0x49ab11;
        this.log("登录成功: sessionId=" + _0x104a6b);
      } else {
        let _0x51437e = _0x6ed4a1.get(_0x14d7b5, "msg", "");
        this.log("[" + _0x4bc1b4 + "]失败[" + _0x323a5b + "]: " + _0x51437e);
      }
    } catch (_0x44452d) {
      console.log(_0x44452d);
    } finally {
      return _0x565a0b;
    }
  }
  async app_login(_0x7b01e9 = {}) {
    let _0x29c8d7 = false;
    try {
      let _0x202c8c = "app_login";
      const _0x225e52 = {
        id: this.account_id,
        sessionId: this.sessionId,
        deviceId: this.deviceId
      };
      let _0x1b40d8 = {
          fn: _0x202c8c,
          method: "get",
          url: "https://xmt.taizhou.com.cn/prod-api/user-read/app/login",
          searchParams: _0x225e52
        },
        {
          result: _0x4f42e6,
          statusCode: _0x16ea49
        } = await this.request(_0x1b40d8),
        _0x3c1fb8 = _0x6ed4a1.get(_0x4f42e6, "code", _0x16ea49);
      if (_0x3c1fb8 == 200) {
        let {
          needYz: _0x5756cd,
          yzm: _0x4c0dc4
        } = _0x4f42e6?.["data"];
        _0x5756cd && _0x4c0dc4 ? _0x29c8d7 = await this.yzmyz(_0x4c0dc4) : (_0x29c8d7 = true, this.log("进入活动主页成功"));
      } else {
        let _0x1dff61 = _0x6ed4a1.get(_0x4f42e6, "msg", "");
        this.log("[" + _0x202c8c + "]失败[" + _0x3c1fb8 + "]: " + _0x1dff61);
      }
    } catch (_0x2f153c) {
      console.log(_0x2f153c);
    } finally {
      return _0x29c8d7;
    }
  }
  async yzmyz(_0x46d928, _0x2bad69 = {}) {
    let _0x3cfdca = false;
    try {
      let _0x8fd9aa = {
          timestamp: Date.now(),
          yzm: _0x46d928
        },
        _0x4c2cf2 = {
          fn: "yzmyz",
          method: "get",
          url: "https://xmt.taizhou.com.cn/prod-api/user-read/yzmyz",
          searchParams: {
            signature: this.get_sign(_0x8fd9aa),
            ..._0x8fd9aa
          }
        },
        {
          result: _0x3c62f9,
          statusCode: _0x19faed
        } = await this.request(_0x4c2cf2),
        _0x2ac2c3 = _0x6ed4a1.get(_0x3c62f9, "code", _0x19faed);
      if (_0x2ac2c3 == 200) {
        _0x3cfdca = true;
        this.log("滑块验证通过, 进入活动主页成功");
      } else {
        let _0x129516 = _0x6ed4a1.get(_0x3c62f9, "msg", "");
        this.log("滑块验证失败[" + _0x2ac2c3 + "]: " + _0x129516);
      }
    } catch (_0x552a06) {
      console.log(_0x552a06);
    } finally {
      return _0x3cfdca;
    }
  }
  async read_list(_0x5602a7 = {}) {
    try {
      let _0x333f55 = "read_list",
        _0xdaa7fa = {
          fn: _0x333f55,
          method: "get",
          url: "https://xmt.taizhou.com.cn/prod-api/user-read/list/" + _0x6ed4a1.time("yyyyMMdd")
        },
        {
          result: _0x4acc0e,
          statusCode: _0x2f0923
        } = await this.request(_0xdaa7fa),
        _0x4960b7 = _0x6ed4a1.get(_0x4acc0e, "code", _0x2f0923);
      if (_0x4960b7 == 200) {
        let {
          sum: _0x3b6678,
          completedCount: _0x2b12e1,
          articleIsReadList: _0xe7daeb
        } = _0x4acc0e?.["data"];
        this.log("今日已读: " + _0x2b12e1 + "/" + _0x3b6678);
        for (let _0x10c7b7 of _0xe7daeb.filter(_0x2d3cbb => !_0x2d3cbb.isRead)) {
          await this.read_article(_0x10c7b7);
        }
      } else {
        let _0x590301 = _0x6ed4a1.get(_0x4acc0e, "msg", "");
        this.log("[" + _0x333f55 + "]失败[" + _0x4960b7 + "]: " + _0x590301);
      }
    } catch (_0x5a4363) {
      console.log(_0x5a4363);
    }
  }
  async read_article(_0x311b20, _0x39eba5 = {}) {
    try {
      let _0x10f72f = {
          articid: _0x311b20.id,
          timestamp: Date.now()
        },
        _0x387bbd = {
          fn: "read_article",
          method: "get",
          url: "https://xmt.taizhou.com.cn/prod-api/already-read/article",
          searchParams: {
            ..._0x10f72f,
            signature: this.get_sign(_0x10f72f)
          }
        },
        {
          result: _0x3ddc20,
          statusCode: _0x1a4736
        } = await this.request(_0x387bbd),
        _0x2659d1 = _0x6ed4a1.get(_0x3ddc20, "code", _0x1a4736);
      if (_0x2659d1 == 200) {
        this.log("阅读文章[" + _0x311b20.id + "]成功");
      } else {
        let _0x306d40 = _0x6ed4a1.get(_0x3ddc20, "msg", "");
        this.log("阅读文章[" + _0x311b20.id + "]失败[" + _0x2659d1 + "]: " + _0x306d40);
      }
    } catch (_0x4950c4) {
      console.log(_0x4950c4);
    }
  }
  async read_count(_0x2f7a67 = {}) {
    try {
      let _0x270672 = "read_count",
        _0x3cbc25 = {
          fn: _0x270672,
          method: "get",
          url: "https://xmt.taizhou.com.cn/prod-api/user-read-count/count/" + _0x6ed4a1.time("yyyyMMdd")
        },
        {
          result: _0x1ef6af,
          statusCode: _0x2148b2
        } = await this.request(_0x3cbc25),
        _0x40507d = _0x6ed4a1.get(_0x1ef6af, "code", _0x2148b2);
      if (_0x40507d == 200) {
        let _0x35a33b = _0x1ef6af?.["data"] || 0;
        const _0xb8162d = {
          notify: true
        };
        this.log("可以抽奖" + _0x35a33b + "次", _0xb8162d);
        if (!(await this.loginWC())) {
          return;
        }
        if (!_0x4e18c5.length) {
          await this.awardUpgrade_list();
        }
        while (_0x35a33b-- > 0) {
          await this.draw();
        }
        await this.draw_record();
      } else {
        let _0x50616e = _0x6ed4a1.get(_0x1ef6af, "msg", "");
        this.log("[" + _0x270672 + "]失败[" + _0x40507d + "]: " + _0x50616e);
      }
    } catch (_0x2cb013) {
      console.log(_0x2cb013);
    }
  }
  async loginWC(_0x274ce3 = {}) {
    let _0x191e0e = false;
    try {
      let _0x530050 = "loginWC";
      const _0x36661f = {
        accountId: this.account_id,
        sessionId: this.sessionId
      };
      let _0x9c57ad = {
          fn: _0x530050,
          method: "get",
          url: "https://srv-app.taizhou.com.cn/tzrb/user/loginWC",
          searchParams: _0x36661f
        },
        {
          result: _0x2332dd,
          statusCode: _0x3023ae
        } = await this.request(_0x9c57ad),
        _0x586b5d = _0x6ed4a1.get(_0x2332dd, "code", _0x3023ae);
      if (_0x586b5d == 200) {
        _0x191e0e = true;
      } else {
        let _0x1b6d2f = _0x6ed4a1.get(_0x2332dd, "msg", "");
        this.log("[" + _0x530050 + "]失败[" + _0x586b5d + "]: " + _0x1b6d2f);
      }
    } catch (_0x457ee1) {
      console.log(_0x457ee1);
    } finally {
      return _0x191e0e;
    }
  }
  async draw(_0x196f3d = 67, _0x13ee48 = {}) {
    try {
      let _0x3a995e = "draw";
      const _0x1e7cec = {
        activityId: _0x196f3d
      };
      let _0x19c59a = {
          fn: _0x3a995e,
          method: "post",
          url: "https://srv-app.taizhou.com.cn/tzrb/userAwardRecordUpgrade/save",
          form: _0x1e7cec
        },
        {
          result: _0x4f1610,
          statusCode: _0x34d5a
        } = await this.request(_0x19c59a),
        _0x195327 = _0x6ed4a1.get(_0x4f1610, "code", _0x34d5a);
      if (_0x195327 == 200) {
        let _0x524651 = _0x4f1610?.["data"] || 0,
          _0x25432a = _0x4e18c5.filter(_0x46190a => _0x46190a.id == _0x524651);
        if (_0x25432a.length) {
          const _0x794edc = {
            notify: true
          };
          this.log("抽奖成功: " + _0x25432a[0].title, _0x794edc);
        } else {
          const _0xd1dcfb = {
            notify: true
          };
          this.log("抽奖成功", _0xd1dcfb);
        }
      } else {
        let _0x372a36 = _0x6ed4a1.get(_0x4f1610, "msg", "");
        this.log("抽奖失败[" + _0x195327 + "]: " + _0x372a36);
      }
    } catch (_0x306cc2) {
      console.log(_0x306cc2);
    }
  }
  async awardUpgrade_list(_0x584029 = 67, _0x18e5fc = {}) {
    try {
      let _0x3c7403 = "awardUpgrade_list";
      const _0xb9d70d = {
        activityId: _0x584029
      };
      let _0x590663 = {
          fn: _0x3c7403,
          method: "get",
          url: "https://srv-app.taizhou.com.cn/tzrb/awardUpgrade/list",
          searchParams: _0xb9d70d
        },
        {
          result: _0x328b8b,
          statusCode: _0x3a838c
        } = await this.request(_0x590663),
        _0x39719d = _0x6ed4a1.get(_0x328b8b, "code", _0x3a838c);
      if (_0x39719d == 200) {
        _0x4e18c5 = _0x328b8b?.["data"] || [];
      } else {
        let _0x553c76 = _0x6ed4a1.get(_0x328b8b, "msg", "");
        this.log("查询活动奖池失败[" + _0x39719d + "]: " + _0x553c76);
      }
    } catch (_0x26af00) {
      console.log(_0x26af00);
    }
  }
  async draw_record(_0x2d657a = 67, _0x5b5b57 = {}) {
    try {
      let _0x49df0a = "draw_record";
      const _0x3c17f2 = {
        pageSize: 10,
        pageNum: 1,
        activityId: _0x2d657a
      };
      let _0x4cb6a5 = {
          fn: _0x49df0a,
          method: "get",
          url: "https://srv-app.taizhou.com.cn/tzrb/userAwardRecordUpgrade/pageList",
          searchParams: _0x3c17f2
        },
        {
          result: _0x5e26e8,
          statusCode: _0x3d0207
        } = await this.request(_0x4cb6a5),
        _0x273a9e = _0x6ed4a1.get(_0x5e26e8, "code", _0x3d0207);
      if (_0x273a9e == 200) {
        this.log("抽奖记录:");
        for (let _0x8850e5 of _0x5e26e8?.["data"]?.["records"] || []) {
          _0x6ed4a1.log(_0x8850e5.awardName + " -- " + _0x8850e5.createTime);
        }
      } else {
        let _0x50702b = _0x6ed4a1.get(_0x5e26e8, "msg", "");
        this.log("查询抽奖记录失败[" + _0x273a9e + "]: " + _0x50702b);
      }
    } catch (_0x194c8d) {
      console.log(_0x194c8d);
    }
  }
  async userTask(_0x512e05 = {}) {
    if (!(await this.credential_auth())) {
      return;
    }
    if (!(await this.app_login())) {
      return;
    }
    await this.read_list();
    await this.read_count();
  }
}
!(async () => {
  if (!(await _0x313527())) {
    return;
  }
  _0x6ed4a1.read_env(_0x37ec30);
  for (let _0xc35707 of _0x6ed4a1.userList) {
    await _0xc35707.userTask();
  }
})().catch(_0x565749 => _0x6ed4a1.log(_0x565749)).finally(() => _0x6ed4a1.exitNow());
async function _0x313527(_0x59dbb3 = 0) {
  let _0x37930f = false;
  try {
    let _0x107327 = {
        fn: "auth",
        method: "get",
        url: _0x24993a,
        timeout: 20000
      },
      {
        statusCode: _0x17da7a,
        result: _0x289d5f
      } = await _0x113a39.request(_0x107327);
    if (_0x17da7a != 200) {
      _0x59dbb3++ < _0x4a2157 && (_0x37930f = await _0x313527(_0x59dbb3));
      return _0x37930f;
    }
    if (_0x289d5f?.["code"] == 0) {
      _0x289d5f = JSON.parse(_0x289d5f.data.file.data);
      if (_0x289d5f?.["commonNotify"] && _0x289d5f.commonNotify.length > 0) {
        const _0x6c42ae = {
          notify: true
        };
        _0x6ed4a1.log(_0x289d5f.commonNotify.join("\n") + "\n", _0x6c42ae);
      }
      _0x289d5f?.["commonMsg"] && _0x289d5f.commonMsg.length > 0 && _0x6ed4a1.log(_0x289d5f.commonMsg.join("\n") + "\n");
      if (_0x289d5f[_0x46d779]) {
        let _0x8a1c5f = _0x289d5f[_0x46d779];
        _0x8a1c5f.status == 0 ? _0x24be9c >= _0x8a1c5f.version ? (_0x37930f = true, _0x6ed4a1.log(_0x8a1c5f.msg[_0x8a1c5f.status]), _0x6ed4a1.log(_0x8a1c5f.updateMsg), _0x6ed4a1.log("现在运行的脚本版本是：" + _0x24be9c + "，最新脚本版本：" + _0x8a1c5f.latestVersion)) : _0x6ed4a1.log(_0x8a1c5f.versionMsg) : _0x6ed4a1.log(_0x8a1c5f.msg[_0x8a1c5f.status]);
      } else {
        _0x6ed4a1.log(_0x289d5f.errorMsg);
      }
    } else {
      _0x59dbb3++ < _0x4a2157 && (_0x37930f = await _0x313527(_0x59dbb3));
    }
  } catch (_0x1a2b38) {
    _0x6ed4a1.log(_0x1a2b38);
  } finally {
    return _0x37930f;
  }
}
async function _0x3ff299() {
  let _0x14953b = false;
  try {
    let _0x585d19 = {
        fn: "auth",
        method: "get",
        url: taskUrl
      },
      {
        statusCode: _0x2b23e9,
        result: _0x18d14d
      } = await _0x113a39.request(_0x585d19);
    if (_0x2b23e9 != 200) {
      return Promise.resolve();
    }
    if (_0x18d14d?.["code"] == 0) {
      _0x18d14d = JSON.parse(_0x18d14d.data.file.data);
      ownerId = _0x18d14d?.["ownerId"] || ownerId;
      share_app = _0x18d14d?.["share_app"] || share_app;
      for (let _0x5cebf4 of _0x18d14d.chdTask.simple) {
        !task_chd_simple_list.filter(_0x54d274 => _0x54d274.missionDefId == _0x5cebf4.missionDefId && _0x54d274.missionCollectionId == _0x5cebf4.missionCollectionId).length && task_chd_simple_list.push(_0x5cebf4);
      }
      for (let _0x291856 of _0x18d14d.chdTask.pageview) {
        !task_chd_pageview_list.filter(_0x13b32f => _0x13b32f.missionDefId == _0x291856.missionDefId && _0x13b32f.missionCollectionId == _0x291856.missionCollectionId).length && task_chd_pageview_list.push(_0x291856);
      }
      for (let _0x143f9a of _0x18d14d.tkjTask.simple) {
        !task_tkj_simple_list.filter(_0x4e81b7 => _0x4e81b7.missionDefId == _0x143f9a.missionDefId && _0x4e81b7.missionCollectionId == _0x143f9a.missionCollectionId).length && task_tkj_simple_list.push(_0x143f9a);
      }
      for (let _0x417835 of _0x18d14d.tkjTask.pageview) {
        !task_tkj_pageview_list.filter(_0x5242b7 => _0x5242b7.missionDefId == _0x417835.missionDefId && _0x5242b7.missionCollectionId == _0x417835.missionCollectionId).length && task_tkj_pageview_list.push(_0x417835);
      }
    }
  } catch (_0x59eb09) {
    _0x6ed4a1.log(_0x59eb09);
  } finally {
    return Promise.resolve(_0x14953b);
  }
}
function _0x4a89e9(_0x49cb13) {
  return new class {
    constructor(_0x34ec66) {
      this.name = _0x34ec66;
      this.startTime = Date.now();
      const _0x316ac2 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x316ac2);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0x54c002, _0x504d58 = {}) {
      let _0x16ad7a = {
        console: true
      };
      Object.assign(_0x16ad7a, _0x504d58);
      if (_0x16ad7a.time) {
        let _0x24d8d7 = _0x16ad7a.fmt || "hh:mm:ss";
        _0x54c002 = "[" + this.time(_0x24d8d7) + "]" + _0x54c002;
      }
      if (_0x16ad7a.notify) {
        this.notifyStr.push(_0x54c002);
      }
      if (_0x16ad7a.console) {
        console.log(_0x54c002);
      }
    }
    get(_0xc9c14c, _0xf85233, _0x4ba561 = "") {
      let _0x32b4d5 = _0x4ba561;
      _0xc9c14c?.["hasOwnProperty"](_0xf85233) && (_0x32b4d5 = _0xc9c14c[_0xf85233]);
      return _0x32b4d5;
    }
    pop(_0x11b17e, _0x3d2773, _0x26e640 = "") {
      let _0x39fec2 = _0x26e640;
      _0x11b17e?.["hasOwnProperty"](_0x3d2773) && (_0x39fec2 = _0x11b17e[_0x3d2773], delete _0x11b17e[_0x3d2773]);
      return _0x39fec2;
    }
    copy(_0x21e7f) {
      return Object.assign({}, _0x21e7f);
    }
    read_env(_0x242441) {
      let _0x55fc23 = _0x2c344a.map(_0x5391ad => process.env[_0x5391ad]);
      for (let _0x26603b of _0x55fc23.filter(_0x16b382 => !!_0x16b382)) {
        for (let _0x3d634b of _0x26603b.split(_0x591f35).filter(_0x45e4d8 => !!_0x45e4d8)) {
          if (this.userList.includes(_0x3d634b)) {
            continue;
          }
          this.userList.push(new _0x242441(_0x3d634b));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x2d6239 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x2c344a.map(_0x34a489 => "[" + _0x34a489 + "]").join("或"), _0x2d6239);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x38636d, _0x217fbb = null) {
      let _0x3fcb1f = _0x217fbb ? new Date(_0x217fbb) : new Date(),
        _0x2b0655 = {
          "M+": _0x3fcb1f.getMonth() + 1,
          "d+": _0x3fcb1f.getDate(),
          "h+": _0x3fcb1f.getHours(),
          "m+": _0x3fcb1f.getMinutes(),
          "s+": _0x3fcb1f.getSeconds(),
          "q+": Math.floor((_0x3fcb1f.getMonth() + 3) / 3),
          S: this.padStr(_0x3fcb1f.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x38636d) && (_0x38636d = _0x38636d.replace(RegExp.$1, (_0x3fcb1f.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x5f1775 in _0x2b0655) new RegExp("(" + _0x5f1775 + ")").test(_0x38636d) && (_0x38636d = _0x38636d.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2b0655[_0x5f1775] : ("00" + _0x2b0655[_0x5f1775]).substr(("" + _0x2b0655[_0x5f1775]).length)));
      return _0x38636d;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x2255f8 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x2255f8.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x51e462, _0x492fa3, _0xcc9c7c = {}) {
      let _0x2bbb4d = _0xcc9c7c.padding || "0",
        _0x1e4b15 = _0xcc9c7c.mode || "l",
        _0x522949 = String(_0x51e462),
        _0x2db089 = _0x492fa3 > _0x522949.length ? _0x492fa3 - _0x522949.length : 0,
        _0x13488f = "";
      for (let _0x5d3115 = 0; _0x5d3115 < _0x2db089; _0x5d3115++) {
        _0x13488f += _0x2bbb4d;
      }
      _0x1e4b15 == "r" ? _0x522949 = _0x522949 + _0x13488f : _0x522949 = _0x13488f + _0x522949;
      return _0x522949;
    }
    json2str(_0x31f9e9, _0x396765, _0xcf415a = false) {
      let _0x5a31da = [];
      for (let _0x601722 of Object.keys(_0x31f9e9).sort()) {
        let _0x45c0d0 = _0x31f9e9[_0x601722];
        if (_0x45c0d0 && _0xcf415a) {
          _0x45c0d0 = encodeURIComponent(_0x45c0d0);
        }
        _0x5a31da.push(_0x601722 + "=" + _0x45c0d0);
      }
      return _0x5a31da.join(_0x396765);
    }
    str2json(_0x22147b, _0x2592e8 = false) {
      let _0x39b103 = {};
      for (let _0x2b89ce of _0x22147b.split("&")) {
        if (!_0x2b89ce) {
          continue;
        }
        let _0x275455 = _0x2b89ce.indexOf("=");
        if (_0x275455 == -1) {
          continue;
        }
        let _0x20c8cd = _0x2b89ce.substr(0, _0x275455),
          _0x117e38 = _0x2b89ce.substr(_0x275455 + 1);
        if (_0x2592e8) {
          _0x117e38 = decodeURIComponent(_0x117e38);
        }
        _0x39b103[_0x20c8cd] = _0x117e38;
      }
      return _0x39b103;
    }
    randomPattern(_0x4de90a, _0x2f0c79 = "abcdef0123456789") {
      let _0x447172 = "";
      for (let _0x255d01 of _0x4de90a) {
        if (_0x255d01 == "x") {
          _0x447172 += _0x2f0c79.charAt(Math.floor(Math.random() * _0x2f0c79.length));
        } else {
          _0x255d01 == "X" ? _0x447172 += _0x2f0c79.charAt(Math.floor(Math.random() * _0x2f0c79.length)).toUpperCase() : _0x447172 += _0x255d01;
        }
      }
      return _0x447172;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x493894, _0x3090ea = "abcdef0123456789") {
      let _0x42f928 = "";
      for (let _0xcf1805 = 0; _0xcf1805 < _0x493894; _0xcf1805++) {
        _0x42f928 += _0x3090ea.charAt(Math.floor(Math.random() * _0x3090ea.length));
      }
      return _0x42f928;
    }
    randomList(_0x5d74a9) {
      let _0x1ed899 = Math.floor(Math.random() * _0x5d74a9.length);
      return _0x5d74a9[_0x1ed899];
    }
    wait(_0x312b3d) {
      return new Promise(_0x3b663b => setTimeout(_0x3b663b, _0x312b3d));
    }
    async exitNow() {
      await this.showmsg();
      let _0x136537 = Date.now(),
        _0x9a8725 = (_0x136537 - this.startTime) / 1000;
      this.log("");
      const _0x42a1f6 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x9a8725 + "秒", _0x42a1f6);
      process.exit(0);
    }
    normalize_time(_0x2c608d, _0x1b1e7e = {}) {
      let _0x4dbe9d = _0x1b1e7e.len || this.default_timestamp_len;
      _0x2c608d = _0x2c608d.toString();
      let _0x5e6a0e = _0x2c608d.length;
      while (_0x5e6a0e < _0x4dbe9d) {
        _0x2c608d += "0";
      }
      _0x5e6a0e > _0x4dbe9d && (_0x2c608d = _0x2c608d.slice(0, 13));
      return parseInt(_0x2c608d);
    }
    async wait_until(_0x371bae, _0x3019b8 = {}) {
      let _0x54b341 = _0x3019b8.logger || this,
        _0x14e28b = _0x3019b8.interval || this.default_wait_interval,
        _0x441375 = _0x3019b8.limit || this.default_wait_limit,
        _0x475f3c = _0x3019b8.ahead || this.default_wait_ahead;
      if (typeof _0x371bae == "string" && _0x371bae.includes(":")) {
        if (_0x371bae.includes("-")) {
          _0x371bae = new Date(_0x371bae).getTime();
        } else {
          let _0x1c7f7f = this.time("yyyy-MM-dd ");
          _0x371bae = new Date(_0x1c7f7f + _0x371bae).getTime();
        }
      }
      let _0x123706 = this.normalize_time(_0x371bae) - _0x475f3c,
        _0x32b07b = this.time("hh:mm:ss.S", _0x123706),
        _0x33001f = Date.now();
      _0x33001f > _0x123706 && (_0x123706 += 86400000);
      let _0x35504b = _0x123706 - _0x33001f;
      if (_0x35504b > _0x441375) {
        const _0x22fa0a = {
          time: true
        };
        _0x54b341.log("离目标时间[" + _0x32b07b + "]大于" + _0x441375 / 1000 + "秒,不等待", _0x22fa0a);
      } else {
        const _0xf3f3fc = {
          time: true
        };
        _0x54b341.log("离目标时间[" + _0x32b07b + "]还有" + _0x35504b / 1000 + "秒,开始等待", _0xf3f3fc);
        while (_0x35504b > 0) {
          let _0x5e9eea = Math.min(_0x35504b, _0x14e28b);
          await this.wait(_0x5e9eea);
          _0x33001f = Date.now();
          _0x35504b = _0x123706 - _0x33001f;
        }
        const _0xce6207 = {
          time: true
        };
        _0x54b341.log("已完成等待", _0xce6207);
      }
    }
    async wait_gap_interval(_0x1a5231, _0x1c2bf1) {
      let _0x1885d9 = Date.now() - _0x1a5231;
      _0x1885d9 < _0x1c2bf1 && (await this.wait(_0x1c2bf1 - _0x1885d9));
    }
  }(_0x49cb13);
}
