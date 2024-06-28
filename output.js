//Fri Jun 28 2024 05:12:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x4ad89a = _0x413a5c("电信营业厅"),
  _0x1940ba = require("got"),
  _0x1bd57c = require("fs"),
  _0x560a4f = require("crypto-js"),
  {
    CookieJar: _0x27278b
  } = require("tough-cookie"),
  _0x58b99d = "chinaTelecom",
  _0x16e65e = /[\n\&\@]/,
  _0x1fe35c = [_0x58b99d + "Account"],
  _0xf8cb4c = 30000,
  _0x209ea1 = 3;
const _0x1611f2 = _0x58b99d + "Rpc",
  _0x1193e9 = process.env[_0x1611f2],
  _0x5319be = 5.06,
  _0x1c064b = "chinaTelecom",
  _0x75bdeb = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0xda0a92 = "JinDouMall";
let _0x4ec3ac = {};
const _0x3e4639 = "./chinaTelecom_cache.json",
  _0x1a4e32 = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
  _0x59b9af = "34d7cb0bcdf07523",
  _0x47e649 = "1234567`90koiuyhgtfrdewsaqaqsqde",
  _0x3fd8de = "\0\0\0\0\0\0\0\0",
  _0x998794 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB",
  _0x48bab2 = "-----BEGIN PUBLIC KEY-----\n" + _0x998794 + "\n-----END PUBLIC KEY-----",
  _0x334767 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB",
  _0x5742da = "-----BEGIN PUBLIC KEY-----\n" + _0x334767 + "\n-----END PUBLIC KEY-----",
  _0x592a4e = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB",
  _0x1c99c0 = "-----BEGIN PUBLIC KEY-----\n" + _0x592a4e + "\n-----END PUBLIC KEY-----",
  _0x5070c6 = require("node-rsa");
let _0x57d843 = new _0x5070c6(_0x48bab2);
const _0x31517e = {
  encryptionScheme: "pkcs1"
};
_0x57d843.setOptions(_0x31517e);
let _0x35c9ff = new _0x5070c6(_0x5742da);
const _0x1c9033 = {
  encryptionScheme: "pkcs1"
};
_0x35c9ff.setOptions(_0x1c9033);
let _0x10b3a5 = new _0x5070c6(_0x1c99c0);
const _0x2fb7f8 = {
  encryptionScheme: "pkcs1"
};
_0x10b3a5.setOptions(_0x2fb7f8);
const _0x57e139 = [202201, 202202, 202203],
  _0x98515c = 5;
function _0x2b5c5c(_0x63fe9, _0x38337f, _0x3d35c5, _0x1a68dd, _0x1d4ca7, _0x45e959) {
  return _0x560a4f[_0x63fe9].encrypt(_0x560a4f.enc.Utf8.parse(_0x1a68dd), _0x560a4f.enc.Utf8.parse(_0x1d4ca7), {
    mode: _0x560a4f.mode[_0x38337f],
    padding: _0x560a4f.pad[_0x3d35c5],
    iv: _0x560a4f.enc.Utf8.parse(_0x45e959)
  }).ciphertext.toString(_0x560a4f.enc.Hex);
}
function _0x4f48c0(_0xd4fe5, _0x2595c9, _0x25de75, _0x10b7c8, _0x31496a, _0xfa9f15) {
  return _0x560a4f[_0xd4fe5].decrypt({
    ciphertext: _0x560a4f.enc.Hex.parse(_0x10b7c8)
  }, _0x560a4f.enc.Utf8.parse(_0x31496a), {
    mode: _0x560a4f.mode[_0x2595c9],
    padding: _0x560a4f.pad[_0x25de75],
    iv: _0x560a4f.enc.Utf8.parse(_0xfa9f15)
  }).toString(_0x560a4f.enc.Utf8);
}
function _0x356838() {
  try {
    _0x1bd57c.writeFileSync(_0x3e4639, JSON.stringify(_0x4ec3ac, null, 4), "utf-8");
  } catch (_0xbf20f3) {
    console.log("保存缓存出错");
  }
}
function _0x464d32() {
  try {
    _0x4ec3ac = JSON.parse(_0x1bd57c.readFileSync(_0x3e4639, "utf-8"));
  } catch (_0x15b975) {
    console.log("读取缓存出错, 新建一个token缓存");
    _0x356838();
  }
}
class _0x5668b9 {
  constructor() {
    this.index = _0x4ad89a.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x275e35 = {
      limit: 0
    };
    const _0x286628 = {
      Connection: "keep-alive"
    };
    const _0x1023f1 = {
      retry: _0x275e35,
      timeout: _0xf8cb4c,
      followRedirect: false,
      ignoreInvalidCookies: true,
      headers: _0x286628
    };
    this.got = _0x1940ba.extend(_0x1023f1);
  }
  log(_0x2c0073, _0x585cf1 = {}) {
    var _0x51e7cc = "",
      _0x4e4923 = _0x4ad89a.userCount.toString().length;
    if (this.index) {
      _0x51e7cc += "账号[" + _0x4ad89a.padStr(this.index, _0x4e4923) + "]";
    }
    if (this.name) {
      _0x51e7cc += "[" + this.name + "]";
    }
    _0x4ad89a.log(_0x51e7cc + _0x2c0073, _0x585cf1);
  }
  async request(_0x57568b) {
    const _0x18c727 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x48c673 = ["TimeoutError"];
    var _0x2eff5a = null,
      _0x5562c2 = 0,
      _0x1b10bb = _0x57568b.fn || _0x57568b.url;
    _0x57568b.method = _0x57568b?.["method"]?.["toUpperCase"]() || "GET";
    let _0x3ae63c;
    while (_0x5562c2 < _0x209ea1) {
      try {
        _0x5562c2++;
        _0x3ae63c = null;
        let _0x31eefe = null,
          _0x121ebd = _0x57568b?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0xf8cb4c,
          _0x4f2043 = false;
        await new Promise(async _0x17c01d => {
          setTimeout(() => {
            _0x4f2043 = true;
            _0x17c01d();
          }, _0x121ebd);
          await this.got(_0x57568b).then(_0x5224f3 => {
            _0x2eff5a = _0x5224f3;
          }, _0xf0299 => {
            _0x31eefe = _0xf0299;
            _0x2eff5a = _0xf0299.response;
            _0x3ae63c = _0x31eefe?.["code"];
          });
          _0x17c01d();
        });
        if (_0x4f2043) {
          this.log("[" + _0x1b10bb + "]请求超时(" + _0x121ebd / 1000 + "秒)，重试第" + _0x5562c2 + "次");
        } else {
          if (_0x48c673.includes(_0x31eefe?.["name"])) {
            this.log("[" + _0x1b10bb + "]请求超时(" + _0x31eefe.code + ")，重试第" + _0x5562c2 + "次");
          } else {
            if (_0x18c727.includes(_0x31eefe?.["code"])) {
              this.log("[" + _0x1b10bb + "]请求错误(" + _0x31eefe.code + ")，重试第" + _0x5562c2 + "次");
            } else {
              let _0x3b57f4 = _0x2eff5a?.["statusCode"] || 999,
                _0x1c489e = _0x3b57f4 / 100 | 0;
              if (_0x1c489e > 3) {
                this.log("请求[" + _0x1b10bb + "]返回[" + _0x3b57f4 + "]");
              }
              if (_0x1c489e <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x3a4d71) {
        _0x3a4d71.name == "TimeoutError" ? this.log("[" + _0x1b10bb + "]请求超时，重试第" + _0x5562c2 + "次") : this.log("[" + _0x1b10bb + "]请求错误(" + _0x3a4d71.message + ")，重试第" + _0x5562c2 + "次");
      }
    }
    if (_0x2eff5a == null) {
      return Promise.resolve({
        statusCode: _0x3ae63c || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x1b61c1,
      headers: _0x2523d2,
      body: _0x5d77f3
    } = _0x2eff5a;
    if (_0x5d77f3) {
      try {
        _0x5d77f3 = JSON.parse(_0x5d77f3);
      } catch {}
    }
    const _0x439064 = {
      statusCode: _0x1b61c1,
      headers: _0x2523d2,
      result: _0x5d77f3
    };
    return Promise.resolve(_0x439064);
  }
}
let _0x20b120 = new _0x5668b9();
class _0x1e5f34 extends _0x5668b9 {
  constructor(_0x5f4dd9) {
    super();
    let _0x5857ac = _0x5f4dd9.split("#");
    this.name = _0x5857ac[0];
    this.passwd = _0x5857ac?.[1] || "";
    this.uuid = [_0x4ad89a.randomPattern("xxxxxxxx"), _0x4ad89a.randomPattern("xxxx"), _0x4ad89a.randomPattern("4xxx"), _0x4ad89a.randomPattern("xxxx"), _0x4ad89a.randomPattern("xxxxxxxxxxxx")];
    this.cookieJar = new _0x27278b();
    this.can_feed = true;
    this.jml_tokenFlag = "";
    this.mall_token = "";
    const _0x855bef = {
      Connection: "keep-alive",
      "User-Agent": _0x1a4e32
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x855bef
    });
  }
  load_token() {
    let _0x5d036e = false;
    _0x4ec3ac[this.name] && (this.userId = _0x4ec3ac[this.name].userId, this.token = _0x4ec3ac[this.name].token, this.log("读取到缓存token"), _0x5d036e = true);
    return _0x5d036e;
  }
  encode_phone() {
    let _0x389971 = this.name.split("");
    for (let _0x37c8b2 in _0x389971) {
      _0x389971[_0x37c8b2] = String.fromCharCode(_0x389971[_0x37c8b2].charCodeAt(0) + 2);
    }
    return _0x389971.join("");
  }
  encode_aes(_0x480464) {
    return _0x2b5c5c("AES", "ECB", "Pkcs7", _0x480464, _0x59b9af, 0);
  }
  get_mall_headers() {
    const _0x24501e = {
      "Content-Type": "application/json;charset=utf-8",
      Accept: "application/json, text/javascript, */*; q=0.01",
      Authorization: this.mall_token ? "Bearer " + this.mall_token : "",
      "X-Requested-With": "XMLHttpRequest"
    };
    return _0x24501e;
  }
  async login(_0x3b7f61 = {}) {
    let _0x15db84 = false;
    try {
      let _0x5ea05 = _0x4ad89a.time("yyyyMMddhhmmss"),
        _0x1e70c7 = "iPhone 14 15.4." + this.uuid.slice(0, 2).join("") + this.name + _0x5ea05 + this.passwd + "0$$$0.",
        _0x488b71 = {
          fn: "login",
          method: "post",
          url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
          json: {
            headerInfos: {
              code: "userLoginNormal",
              timestamp: _0x5ea05,
              broadAccount: "",
              broadToken: "",
              clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
              shopId: "20002",
              source: "110003",
              sourcePassword: "Sid98s",
              token: "",
              userLoginName: this.name
            },
            content: {
              attach: "test",
              fieldData: {
                loginType: "4",
                accountType: "",
                loginAuthCipherAsymmertric: _0x57d843.encrypt(_0x1e70c7, "base64"),
                deviceUid: this.uuid.slice(0, 3).join(""),
                phoneNum: this.encode_phone(),
                isChinatelecom: "0",
                systemVersion: "15.4.0",
                authentication: this.passwd
              }
            }
          }
        },
        {
          result: _0x27e1ac,
          statusCode: _0x24b847
        } = await this.request(_0x488b71),
        _0x5494a1 = _0x4ad89a.get(_0x27e1ac?.["responseData"], "resultCode", -1);
      if (_0x5494a1 == "0000") {
        let {
          userId = "",
          token = ""
        } = _0x27e1ac?.["responseData"]?.["data"]?.["loginSuccessResult"] || {};
        this.userId = userId;
        this.token = token;
        this.log("使用服务密码登录成功");
        _0x4ec3ac[this.name] = {
          token: token,
          userId: userId,
          t: Date.now()
        };
        _0x356838();
        _0x15db84 = true;
      } else {
        let _0x29e1dd = _0x27e1ac?.["msg"] || _0x27e1ac?.["responseData"]?.["resultDesc"] || _0x27e1ac?.["headerInfos"]?.["reason"] || "";
        this.log("服务密码登录失败[" + _0x5494a1 + "]: " + _0x29e1dd);
      }
    } catch (_0x4557b0) {
      console.log(_0x4557b0);
    } finally {
      return _0x15db84;
    }
  }
  async get_ticket(_0x1483d5 = {}) {
    let _0x3f9427 = "";
    try {
      let _0x2edc12 = "\n            <Request>\n                <HeaderInfos>\n                    <Code>getSingle</Code>\n                    <Timestamp>" + _0x4ad89a.time("yyyyMMddhhmmss") + "</Timestamp>\n                    <BroadAccount></BroadAccount>\n                    <BroadToken></BroadToken>\n                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                    <ShopId>20002</ShopId>\n                    <Source>110003</Source>\n                    <SourcePassword>Sid98s</SourcePassword>\n                    <Token>" + this.token + "</Token>\n                    <UserLoginName>" + this.name + "</UserLoginName>\n                </HeaderInfos>\n                <Content>\n                    <Attach>test</Attach>\n                    <FieldData>\n                        <TargetId>" + _0x2b5c5c("TripleDES", "CBC", "Pkcs7", this.userId, _0x47e649, _0x3fd8de) + "</TargetId>\n                        <Url>4a6862274835b451</Url>\n                    </FieldData>\n                </Content>\n            </Request>";
      let _0x3f4203 = {
          fn: "get_ticket",
          method: "post",
          url: "https://appgologin.189.cn:9031/map/clientXML",
          body: _0x2edc12
        },
        {
          result: _0x31934a,
          statusCode: _0x55910d
        } = await this.request(_0x3f4203);
      if (_0x31934a) {
        let _0x53a4b7 = _0x31934a.match(/\<Ticket\>(\w+)\<\/Ticket\>/);
        if (_0x53a4b7) {
          let _0x3352ab = _0x53a4b7[1];
          _0x3f9427 = _0x4f48c0("TripleDES", "CBC", "Pkcs7", _0x3352ab, _0x47e649, _0x3fd8de);
          this.ticket = _0x3f9427;
        }
      }
      !_0x3f9427 && (!_0x1483d5.retry && (await this.login()) ? (_0x1483d5.retry = true, _0x3f9427 = await this.get_ticket(_0x1483d5)) : (this.log("没有获取到ticket[" + _0x55910d + "]: "), _0x31934a && this.log(": " + JSON.stringify(_0x31934a))));
    } catch (_0x13d3a3) {
      console.log(_0x13d3a3);
    } finally {
      return _0x3f9427;
    }
  }
  async get_sign(_0x192864 = {}) {
    let _0x364f40 = false;
    try {
      const _0x2e2410 = {
        ticket: this.ticket
      };
      let _0x223595 = {
          fn: "login",
          method: "get",
          url: "https://wapside.189.cn:9001/jt-sign/ssoHomLogin",
          searchParams: _0x2e2410
        },
        {
          result: _0x410695,
          statusCode: _0x4c44d1
        } = await this.request(_0x223595),
        _0x1de977 = _0x4ad89a.get(_0x410695, "resoultCode", _0x4c44d1);
      _0x1de977 == 0 ? (_0x364f40 = _0x410695?.["sign"], this.sign = _0x364f40, this.got = this.got.extend({
        headers: {
          sign: this.sign
        }
      })) : this.log("获取sign失败[" + _0x1de977 + "]: " + JSON.stringify(_0x410695 || ""));
    } catch (_0x2fc077) {
      console.log(_0x2fc077);
    } finally {
      return _0x364f40;
    }
  }
  encrypt_para(_0x5a8679) {
    let _0x47e5a6 = typeof _0x5a8679 == "string" ? _0x5a8679 : JSON.stringify(_0x5a8679);
    return _0x35c9ff.encrypt(_0x47e5a6, "hex");
  }
  async userCoinInfo(_0x1b9479 = false, _0x15e0c7 = {}) {
    try {
      let _0x229457 = {
          phone: this.name
        },
        _0x51b0c4 = {
          fn: "userCoinInfo",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/api/home/userCoinInfo",
          json: {
            para: this.encrypt_para(_0x229457)
          }
        },
        {
          result: _0x1287ee,
          statusCode: _0x272afe
        } = await this.request(_0x51b0c4),
        _0x38f3ee = _0x4ad89a.get(_0x1287ee, "resoultCode", _0x272afe);
      if (_0x38f3ee == 0) {
        this.coin = _0x1287ee?.["totalCoin"] || 0;
        if (_0x1b9479) {
          const _0x5c9851 = {
            notify: true
          };
          this.log("金豆余额: " + this.coin, _0x5c9851);
          if (_0x1287ee.amountEx) {
            let _0x867dfe = _0x4ad89a.time("yyyy-MM-dd", _0x1287ee.expireDate);
            const _0x53fc74 = {
              notify: true
            };
            _0x4ad89a.log("-- [" + _0x867dfe + "]将过期" + _0x1287ee.amountEx + "金豆", _0x53fc74);
          }
        }
      } else {
        let _0x10224a = _0x1287ee?.["msg"] || _0x1287ee?.["resoultMsg"] || _0x1287ee?.["error"] || "";
        this.log("查询账户金豆余额错误[" + _0x38f3ee + "]: " + _0x10224a);
      }
    } catch (_0x3b93e7) {
      console.log(_0x3b93e7);
    }
  }
  async userStatusInfo(_0x2f3059 = {}) {
    try {
      let _0x551102 = {
          phone: this.name
        },
        _0x32d1c6 = {
          fn: "userStatusInfo",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/api/home/userStatusInfo",
          json: {
            para: this.encrypt_para(_0x551102)
          }
        };
      {
        let {
            result: _0x166b3d,
            statusCode: _0x3a283f
          } = await this.request(_0x4ad89a.copy(_0x32d1c6)),
          _0xb5dd56 = _0x4ad89a.get(_0x166b3d, "resoultCode", _0x3a283f);
        if (_0xb5dd56 == 0) {
          let {
            isSign: _0x4ab164
          } = _0x166b3d?.["data"];
          _0x4ab164 ? this.log("今天已签到") : await this.doSign();
        } else {
          let _0x1c950b = _0x166b3d?.["msg"] || _0x166b3d?.["resoultMsg"] || _0x166b3d?.["error"] || "";
          this.log("查询账户签到状态错误[" + _0xb5dd56 + "]: " + _0x1c950b);
        }
      }
      {
        let {
            result: _0x340cca,
            statusCode: _0x4c8d5d
          } = await this.request(_0x4ad89a.copy(_0x32d1c6)),
          _0x16f612 = _0x4ad89a.get(_0x340cca, "resoultCode", _0x4c8d5d);
        if (_0x16f612 == 0) {
          let {
            continuousDay: _0x16c135,
            signDay: _0x1b160d,
            isSeven: _0x5b48ef
          } = _0x340cca?.["data"];
          this.log("已签到" + _0x1b160d + "天, 连签" + _0x16c135 + "天");
          _0x5b48ef && (await this.exchangePrize());
        } else {
          let _0x29c4dd = _0x340cca?.["msg"] || _0x340cca?.["resoultMsg"] || _0x340cca?.["error"] || "";
          this.log("查询账户签到状态错误[" + _0x16f612 + "]: " + _0x29c4dd);
        }
      }
    } catch (_0x5a91fb) {
      console.log(_0x5a91fb);
    }
  }
  async continueSignDays(_0x9946bc = {}) {
    try {
      let _0x2b3291 = {
          phone: this.name
        },
        _0x539252 = {
          fn: "continueSignDays",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/continueSignDays",
          json: {
            para: this.encrypt_para(_0x2b3291)
          }
        },
        {
          result: _0x6371a6,
          statusCode: _0x21bfbb
        } = await this.request(_0x539252),
        _0x5545d0 = _0x4ad89a.get(_0x6371a6, "resoultCode", _0x21bfbb);
      if (_0x5545d0 == 0) {
        this.log("抽奖连签天数: " + (_0x6371a6?.["continueSignDays"] || 0) + "天");
        if (_0x6371a6?.["continueSignDays"] == 15) {
          const _0xbcab11 = {
            type: "15"
          };
          await this.exchangePrize(_0xbcab11);
        } else {
          if (_0x6371a6?.["continueSignDays"] == 28) {
            const _0x71c225 = {
              type: "28"
            };
            await this.exchangePrize(_0x71c225);
          }
        }
      } else {
        let _0x4f160b = _0x6371a6?.["msg"] || _0x6371a6?.["resoultMsg"] || _0x6371a6?.["error"] || "";
        this.log("查询抽奖连签天数错误[" + _0x5545d0 + "]: " + _0x4f160b);
      }
    } catch (_0x222e1a) {
      console.log(_0x222e1a);
    }
  }
  async continueSignRecords(_0x220450 = {}) {
    try {
      let _0x1f495a = {
          phone: this.name
        },
        _0x7bbc4b = {
          fn: "continueSignRecords",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/continueSignRecords",
          json: {
            para: this.encrypt_para(_0x1f495a)
          }
        },
        {
          result: _0x2a67c4,
          statusCode: _0x1a4f3
        } = await this.request(_0x7bbc4b),
        _0xe28dd = _0x4ad89a.get(_0x2a67c4, "resoultCode", _0x1a4f3);
      if (_0xe28dd == 0) {
        if (_0x2a67c4?.["continue15List"]?.["length"]) {
          const _0x46d516 = {
            type: "15"
          };
          await this.exchangePrize(_0x46d516);
        }
        if (_0x2a67c4?.["continue28List"]?.["length"]) {
          const _0x86f78f = {
            type: "28"
          };
          await this.exchangePrize(_0x86f78f);
        }
      } else {
        let _0x1a9b77 = _0x2a67c4?.["msg"] || _0x2a67c4?.["resoultMsg"] || _0x2a67c4?.["error"] || "";
        this.log("查询连签抽奖状态错误[" + _0xe28dd + "]: " + _0x1a9b77);
      }
    } catch (_0x130208) {
      console.log(_0x130208);
    }
  }
  async doSign(_0x20a789 = {}) {
    try {
      let _0x1f4fff = {
          phone: this.name,
          date: Date.now(),
          sysType: "20002"
        },
        _0x518e6b = {
          fn: "doSign",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/sign",
          json: {
            encode: this.encode_aes(JSON.stringify(_0x1f4fff))
          }
        },
        {
          result: _0x45fe57,
          statusCode: _0x42745
        } = await this.request(_0x518e6b),
        _0x2ab364 = _0x4ad89a.get(_0x45fe57, "resoultCode", _0x42745);
      if (_0x2ab364 == 0) {
        let _0x37722e = _0x4ad89a.get(_0x45fe57?.["data"], "code", -1);
        if (_0x37722e == 1) {
          const _0x2f022c = {
            notify: true
          };
          this.log("签到成功，获得" + (_0x45fe57?.["data"]?.["coin"] || 0) + "金豆", _0x2f022c);
          await this.userStatusInfo();
        } else {
          const _0x4ab9ee = {
            notify: true
          };
          this.log("签到失败[" + _0x37722e + "]: " + _0x45fe57.data.msg, _0x4ab9ee);
        }
      } else {
        let _0x3f15f9 = _0x45fe57?.["msg"] || _0x45fe57?.["resoultMsg"] || _0x45fe57?.["error"] || "";
        this.log("签到错误[" + _0x2ab364 + "]: " + _0x3f15f9);
      }
    } catch (_0x434028) {
      console.log(_0x434028);
    }
  }
  async exchangePrize(_0x4c7dde = {}) {
    try {
      let _0x46142c = _0x4ad89a.pop(_0x4c7dde, "type", "7");
      let _0x5e97b7 = {
          phone: this.name,
          type: _0x46142c
        },
        _0x330999 = {
          fn: "exchangePrize",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/exchangePrize",
          json: {
            para: this.encrypt_para(_0x5e97b7)
          }
        },
        {
          result: _0xae4a1e,
          statusCode: _0xba2806
        } = await this.request(_0x330999),
        _0x3878ac = _0x4ad89a.get(_0xae4a1e, "resoultCode", _0xba2806);
      if (_0x3878ac == 0) {
        let _0x5c2170 = _0x4ad89a.get(_0xae4a1e?.["prizeDetail"], "code", -1);
        if (_0x5c2170 == 0) {
          const _0x319a92 = {
            notify: true
          };
          this.log("连签" + _0x46142c + "天抽奖: " + _0xae4a1e?.["prizeDetail"]?.["biz"]?.["winTitle"], _0x319a92);
        } else {
          let _0x29d797 = _0xae4a1e?.["prizeDetail"]?.["err"] || "";
          const _0x34e48b = {
            notify: true
          };
          this.log("连签" + _0x46142c + "天抽奖失败[" + _0x5c2170 + "]: " + _0x29d797, _0x34e48b);
        }
      } else {
        let _0x3eb998 = _0xae4a1e?.["msg"] || _0xae4a1e?.["resoultMsg"] || _0xae4a1e?.["error"] || "";
        this.log("连签" + _0x46142c + "天抽奖错误[" + _0x3878ac + "]: " + _0x3eb998);
      }
    } catch (_0x1528a7) {
      console.log(_0x1528a7);
    }
  }
  async homepage(_0x1fe0cc, _0x5d8210 = {}) {
    try {
      let _0x5488f9 = {
          phone: this.name,
          shopId: "20001",
          type: _0x1fe0cc
        },
        _0xea6a44 = {
          fn: "homepage",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/homepage",
          json: {
            para: this.encrypt_para(_0x5488f9)
          }
        },
        {
          result: _0x5e0974,
          statusCode: _0x3d5875
        } = await this.request(_0xea6a44),
        _0x5675e1 = _0x4ad89a.get(_0x5e0974, "resoultCode", _0x3d5875);
      if (_0x5675e1 == 0) {
        let _0x250a47 = _0x4ad89a.get(_0x5e0974?.["data"]?.["head"], "code", -1);
        if (_0x250a47 == 0) {
          for (let _0x45e71c of _0x5e0974?.["data"]?.["biz"]?.["adItems"] || []) {
            if (["0", "1"].includes(_0x45e71c?.["taskState"])) {
              switch (_0x45e71c.contentOne) {
                case "3":
                  {
                    if (_0x45e71c?.["rewardId"]) {
                      await this.receiveReward(_0x45e71c);
                    }
                    break;
                  }
                case "5":
                  {
                    await this.openMsg(_0x45e71c);
                    break;
                  }
                case "6":
                  {
                    await this.sharingGetGold();
                    break;
                  }
                case "10":
                case "13":
                  {
                    if (!this.xtoken) {
                      await this.get_usercode();
                    }
                    this.xtoken && (await this.watchLiveInit());
                    break;
                  }
                case "18":
                  {
                    await this.polymerize(_0x45e71c);
                    break;
                  }
                default:
                  {
                    break;
                  }
              }
            }
          }
        } else {
          let _0x19658a = _0x5e0974?.["data"]?.["head"]?.["err"] || "";
          this.log("获取任务列表失败[" + _0x250a47 + "]: " + _0x19658a);
        }
      } else {
        this.log("获取任务列表错误[" + _0x5675e1 + "]");
      }
    } catch (_0x57d915) {
      console.log(_0x57d915);
    }
  }
  async receiveReward(_0x210b9d, _0x3b9914 = {}) {
    try {
      let _0x931850 = _0x210b9d?.["title"]?.["split"](" ")?.[0];
      let _0x2529f3 = {
          phone: this.name,
          rewardId: _0x210b9d?.["rewardId"] || ""
        },
        _0x2ded47 = {
          fn: "receiveReward",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/receiveReward",
          json: {
            para: this.encrypt_para(_0x2529f3)
          }
        },
        {
          result: _0x4de8f1,
          statusCode: _0x5c5bb8
        } = await this.request(_0x2ded47),
        _0x486b03 = _0x4ad89a.get(_0x4de8f1, "resoultCode", _0x5c5bb8);
      if (_0x486b03 == 0) {
        this.log("领取任务[" + _0x931850 + "]奖励成功: " + _0x4de8f1?.["resoultMsg"]);
      } else {
        let _0x459254 = _0x4de8f1?.["msg"] || _0x4de8f1?.["resoultMsg"] || _0x4de8f1?.["error"] || "";
        this.log("领取任务[" + _0x931850 + "]奖励错误[" + _0x486b03 + "]: " + _0x459254);
      }
    } catch (_0x38eb5f) {
      console.log(_0x38eb5f);
    }
  }
  async openMsg(_0x18f538, _0x350df4 = {}) {
    try {
      let _0x34d76a = _0x18f538?.["title"]?.["split"](" ")?.[0];
      let _0x44a78f = {
          phone: this.name
        },
        _0x69c660 = {
          fn: "openMsg",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/openMsg",
          json: {
            para: this.encrypt_para(_0x44a78f)
          }
        },
        {
          result: _0x100a47,
          statusCode: _0x371365
        } = await this.request(_0x69c660),
        _0x64796a = _0x4ad89a.get(_0x100a47, "resoultCode", _0x371365);
      if (_0x64796a == 0) {
        this.log("完成任务[" + _0x34d76a + "]成功: " + _0x100a47?.["resoultMsg"]);
      } else {
        let _0x51ea29 = _0x100a47?.["msg"] || _0x100a47?.["resoultMsg"] || _0x100a47?.["error"] || "";
        this.log("完成任务[" + _0x34d76a + "]错误[" + _0x64796a + "]: " + _0x51ea29);
      }
    } catch (_0x4e7b37) {
      console.log(_0x4e7b37);
    }
  }
  async polymerize(_0xebeb10, _0x5bfab5 = {}) {
    try {
      let _0x2dbde3 = _0xebeb10?.["title"]?.["split"](" ")?.[0];
      let _0x1d5dc7 = {
          phone: this.name,
          jobId: _0xebeb10.taskId
        },
        _0x5a1f36 = {
          fn: "polymerize",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/webSign/polymerize",
          json: {
            para: this.encrypt_para(_0x1d5dc7)
          }
        },
        {
          result: _0x4054c4,
          statusCode: _0x335cb4
        } = await this.request(_0x5a1f36),
        _0x50013b = _0x4ad89a.get(_0x4054c4, "resoultCode", _0x335cb4);
      if (_0x50013b == 0) {
        this.log("完成任务[" + _0x2dbde3 + "]成功: " + _0x4054c4?.["resoultMsg"]);
      } else {
        let _0xe76e11 = _0x4054c4?.["msg"] || _0x4054c4?.["resoultMsg"] || _0x4054c4?.["error"] || "";
        this.log("完成任务[" + _0x2dbde3 + "]错误[" + _0x50013b + "]: " + _0xe76e11);
      }
    } catch (_0x295f1c) {
      console.log(_0x295f1c);
    }
  }
  async food(_0x10b56a, _0x346ff8 = {}) {
    try {
      let _0x1e816c = {
          phone: this.name
        },
        _0x134ca4 = {
          fn: "food",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/food",
          json: {
            para: this.encrypt_para(_0x1e816c)
          }
        },
        {
          result: _0x1ff18c,
          statusCode: _0x18ade9
        } = await this.request(_0x134ca4),
        _0x4b4005 = _0x4ad89a.get(_0x1ff18c, "resoultCode", _0x18ade9);
      if (_0x4b4005 == 0) {
        this.log("第" + _0x10b56a + "次喂食: " + (_0x1ff18c?.["resoultMsg"] || "成功"));
        if (_0x1ff18c?.["levelUp"]) {
          let _0x571070 = _0x1ff18c?.["currLevelRightList"][0]?.["level"];
          const _0x21eed8 = {
            notify: true
          };
          this.log("宠物已升级到[LV." + _0x571070 + "], 获得: " + _0x1ff18c?.["currLevelRightList"][0]?.["righstName"], _0x21eed8);
        }
      } else {
        let _0xbb77c8 = _0x1ff18c?.["msg"] || _0x1ff18c?.["resoultMsg"] || _0x1ff18c?.["error"] || "";
        this.log("第" + _0x10b56a + "次喂食失败[" + _0x4b4005 + "]: " + _0xbb77c8);
        _0xbb77c8?.["includes"]("最大喂食次数") && (this.can_feed = false);
      }
    } catch (_0x30c60e) {
      console.log(_0x30c60e);
    }
  }
  async getParadiseInfo(_0x557838 = {}) {
    try {
      let _0x1164f6 = {
          phone: this.name
        },
        _0x334292 = {
          fn: "getParadiseInfo",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/getParadiseInfo",
          json: {
            para: this.encrypt_para(_0x1164f6)
          }
        };
      {
        let {
            result: _0x21598a,
            statusCode: _0x37186f
          } = await this.request(_0x334292),
          _0x2f842f = _0x4ad89a.get(_0x21598a, "resoultCode", _0x37186f);
        if (_0x2f842f == 0) {
          let _0xda0706 = _0x21598a?.["userInfo"]?.["levelInfoMap"];
          this.level = _0xda0706?.["level"];
          for (let _0x1efbb3 = 1; _0x1efbb3 <= 10 && this.can_feed; _0x1efbb3++) {
            await this.food(_0x1efbb3);
          }
        } else {
          let _0x168e68 = _0x21598a?.["msg"] || _0x21598a?.["resoultMsg"] || _0x21598a?.["error"] || "";
          this.log("查询宠物等级失败[" + _0x2f842f + "]: " + _0x168e68);
          return;
        }
      }
      {
        let {
            result: _0x1f6417,
            statusCode: _0xf5ab9
          } = await this.request(_0x334292),
          _0x5d3212 = _0x4ad89a.get(_0x1f6417, "resoultCode", _0xf5ab9);
        if (_0x5d3212 == 0) {
          let _0x2dbb5b = _0x1f6417?.["userInfo"]?.["levelInfoMap"];
          this.level = _0x2dbb5b?.["level"];
          const _0x5d4ca1 = {
            notify: true
          };
          this.log("宠物等级[Lv." + _0x2dbb5b?.["level"] + "], 升级进度: " + _0x2dbb5b?.["growthValue"] + "/" + _0x2dbb5b?.["fullGrowthCoinValue"], _0x5d4ca1);
        } else {
          let _0x163176 = _0x1f6417?.["msg"] || _0x1f6417?.["resoultMsg"] || _0x1f6417?.["error"] || "";
          this.log("查询宠物等级失败[" + _0x5d3212 + "]: " + _0x163176);
          return;
        }
      }
    } catch (_0x6d42c7) {
      console.log(_0x6d42c7);
    }
  }
  async getLevelRightsList(_0x1a6181 = {}) {
    try {
      let _0x1097cf = {
          phone: this.name
        },
        _0x6f8838 = {
          fn: "getLevelRightsList",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/getLevelRightsList",
          json: {
            para: this.encrypt_para(_0x1097cf)
          }
        },
        {
          result: _0x251c3e,
          statusCode: _0x3d0763
        } = await this.request(_0x6f8838);
      if (_0x251c3e?.["currentLevel"]) {
        let _0x675cdf = _0x251c3e?.["currentLevel"] || 6,
          _0x562b9c = false,
          _0x1af58d = "V" + _0x675cdf;
        for (let _0x51d008 of _0x251c3e[_0x1af58d] || []) {
          let _0x276843 = _0x51d008?.["righstName"] || "";
          if (this.coin < _0x51d008.costCoin) {
            continue;
          }
          (_0x276843?.["match"](/\d+元话费/) || _0x276843?.["match"](/专享\d+金豆/)) && (await this.getConversionRights(_0x51d008, _0x562b9c)) && (_0x562b9c = true);
        }
      } else {
        let _0x5b0432 = _0x251c3e?.["msg"] || _0x251c3e?.["resoultMsg"] || _0x251c3e?.["error"] || "";
        this.log("查询宠物兑换权益失败: " + _0x5b0432);
      }
    } catch (_0x5f2d60) {
      console.log(_0x5f2d60);
    }
  }
  async getConversionRights(_0xe249e6, _0x13ebbe, _0x5c9a8c = {}) {
    let _0x4f830f = false;
    try {
      let _0x23f553 = _0xe249e6?.["righstName"] || "";
      let _0x9174fd = {
          phone: this.name,
          rightsId: _0xe249e6.id,
          receiveCount: _0xe249e6.receiveType
        },
        _0x5b27f0 = {
          fn: "getConversionRights",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/getConversionRights",
          json: {
            para: this.encrypt_para(_0x9174fd)
          }
        },
        {
          result: _0x1c7cd4,
          statusCode: _0x2df45d
        } = await this.request(_0x5b27f0),
        _0x254280 = _0x4ad89a.get(_0x1c7cd4, "code", _0x4ad89a.get(_0x1c7cd4, "resoultCode", _0x2df45d));
      if (_0x254280 == 200) {
        if (!(_0x1c7cd4?.["rightsStatus"]?.["includes"]("已兑换") || _0x1c7cd4?.["rightsStatus"]?.["includes"]("已领取"))) {
          _0x4f830f = true;
          if (_0x13ebbe) {
            await _0x4ad89a.wait(3000);
          }
          await this.conversionRights(_0xe249e6);
        }
      } else {
        let _0x2840bd = _0x1c7cd4?.["msg"] || _0x1c7cd4?.["resoultMsg"] || _0x1c7cd4?.["error"] || "";
        this.log("查询权益[" + _0x23f553 + "]失败[" + _0x254280 + "]: " + _0x2840bd);
      }
    } catch (_0x43c8b2) {
      console.log(_0x43c8b2);
    } finally {
      return _0x4f830f;
    }
  }
  async conversionRights(_0x2b6e0e, _0x49a532 = {}) {
    try {
      let _0x52de22 = _0x2b6e0e?.["righstName"] || "";
      let _0x329993 = {
          phone: this.name,
          rightsId: _0x2b6e0e.id
        },
        _0x4264c7 = {
          fn: "conversionRights",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/paradise/conversionRights",
          json: {
            para: this.encrypt_para(_0x329993)
          }
        },
        {
          result: _0x4f61db,
          statusCode: _0x2ad9dc
        } = await this.request(_0x4264c7),
        _0x23e545 = _0x4ad89a.get(_0x4f61db, "resoultCode", _0x2ad9dc);
      if (_0x23e545 == 0) {
        this.log("兑换权益[" + _0x52de22 + "]成功");
      } else {
        let _0x4751b6 = _0x4f61db?.["msg"] || _0x4f61db?.["resoultMsg"] || _0x4f61db?.["error"] || "";
        this.log("兑换权益[" + _0x52de22 + "]失败[" + _0x23e545 + "]: " + _0x4751b6);
      }
    } catch (_0x276c2f) {
      console.log(_0x276c2f);
    }
  }
  async get_usercode(_0x1dd07f = {}) {
    try {
      const _0x38d23a = {
        fn: "get_usercode",
        method: "get",
        url: "https://xbk.189.cn/xbkapi/api/auth/jump",
        searchParams: {}
      };
      _0x38d23a.searchParams.userID = this.ticket;
      _0x38d23a.searchParams.version = "9.3.3";
      _0x38d23a.searchParams.type = "room";
      _0x38d23a.searchParams.l = "renwu";
      let _0x231304 = _0x38d23a,
        {
          statusCode: _0x172e33,
          headers: _0x12ffde
        } = await this.request(_0x231304),
        _0x480aab = _0x12ffde?.["location"]?.["match"](/usercode=(\w+)/);
      _0x480aab ? await this.codeToken(_0x480aab[1]) : this.log("获取code失败[" + _0x172e33 + "]");
    } catch (_0x2e6cc0) {
      console.log(_0x2e6cc0);
    }
  }
  async codeToken(_0x8b29c9, _0x2d92a5 = {}) {
    try {
      const _0x4ab04b = {
        usercode: _0x8b29c9
      };
      let _0x24bbd5 = {
          fn: "codeToken",
          method: "post",
          url: "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
          json: _0x4ab04b
        },
        {
          result: _0x3b4ce7,
          statusCode: _0x222275
        } = await this.request(_0x24bbd5),
        _0x22baaa = _0x4ad89a.get(_0x3b4ce7, "code", -1);
      if (_0x22baaa == 0) {
        this.xtoken = _0x3b4ce7?.["data"]?.["token"];
        this.got = this.got.extend({
          headers: {
            Authorization: "Bearer " + _0x10b3a5.encrypt(this.xtoken, "base64")
          }
        });
      } else {
        let _0x2931d3 = _0x3b4ce7?.["msg"] || _0x3b4ce7?.["resoultMsg"] || _0x3b4ce7?.["error"] || _0x3b4ce7?.["msg"] || "";
        this.log("获取token失败[" + _0x22baaa + "]: " + _0x2931d3);
      }
    } catch (_0x835681) {
      console.log(_0x835681);
    }
  }
  async watchLiveInit(_0x5eef75 = {}) {
    try {
      let _0x41b097 = Math.floor(Math.random() * 1000) + 1000;
      const _0x39cb3b = {
        period: 1,
        liveId: _0x41b097
      };
      let _0x4410b9 = {
          fn: "watchLiveInit",
          method: "post",
          url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLiveInit",
          json: _0x39cb3b
        },
        {
          result: _0x3bb4ab,
          statusCode: _0x28e7a3
        } = await this.request(_0x4410b9),
        _0x2e834c = _0x4ad89a.get(_0x3bb4ab, "code", -1);
      if (_0x2e834c == 0) {
        await _0x4ad89a.wait(15000);
        await this.watchLive(_0x41b097, _0x3bb4ab?.["data"]);
      } else {
        let _0x596d4d = _0x3bb4ab?.["msg"] || _0x3bb4ab?.["resoultMsg"] || _0x3bb4ab?.["error"] || _0x3bb4ab?.["msg"] || "";
        this.log("开始观看直播[" + _0x41b097 + "]失败[" + _0x2e834c + "]: " + _0x596d4d);
      }
    } catch (_0x2522d6) {
      console.log(_0x2522d6);
    }
  }
  async watchLive(_0x4fd8b6, _0x4c00c6, _0x652974 = {}) {
    try {
      const _0x1698e6 = {
        period: 1,
        liveId: _0x4fd8b6,
        key: _0x4c00c6
      };
      let _0x4ca4f1 = {
          fn: "watchLive",
          method: "post",
          url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchLive",
          json: _0x1698e6
        },
        {
          result: _0x3995cb,
          statusCode: _0x2ceb3b
        } = await this.request(_0x4ca4f1),
        _0x434aa8 = _0x4ad89a.get(_0x3995cb, "code", -1);
      if (_0x434aa8 == 0) {
        this.log("观看直播[" + _0x4fd8b6 + "]成功");
        await this.watchLiveInit();
      } else {
        let _0x103566 = _0x3995cb?.["msg"] || _0x3995cb?.["resoultMsg"] || _0x3995cb?.["error"] || _0x3995cb?.["msg"] || "";
        this.log("观看直播[" + _0x4fd8b6 + "]失败[" + _0x434aa8 + "]: " + _0x103566);
      }
    } catch (_0x1a1fac) {
      console.log(_0x1a1fac);
    }
  }
  async watchVideo(_0x346122, _0x20e380 = {}) {
    try {
      const _0x4024bc = {
        articleId: _0x346122
      };
      let _0x40cecd = {
          fn: "watchVideo",
          method: "post",
          url: "https://xbk.189.cn/xbkapi/lteration/liveTask/index/watchVideo",
          json: _0x4024bc
        },
        {
          result: _0x28a313,
          statusCode: _0x4ff01c
        } = await this.request(_0x40cecd),
        _0x390ba5 = _0x4ad89a.get(_0x28a313, "code", -1);
      if (_0x390ba5 == 0) {
        this.log("观看短视频[" + _0x346122 + "]成功");
      } else {
        let _0xdbf5a = _0x28a313?.["msg"] || _0x28a313?.["resoultMsg"] || _0x28a313?.["error"] || _0x28a313?.["msg"] || "";
        this.log("观看短视频[" + _0x346122 + "]失败[" + _0x390ba5 + "]: " + _0xdbf5a);
      }
    } catch (_0x3f458e) {
      console.log(_0x3f458e);
    }
  }
  async like(_0x4230f7, _0x22becf = {}) {
    try {
      const _0x233463 = {
        account: this.name,
        liveId: _0x4230f7
      };
      let _0x2c8a4a = {
          fn: "like",
          method: "post",
          url: "https://xbk.189.cn/xbkapi/lteration/room/like",
          json: _0x233463
        },
        {
          result: _0x1ffd08,
          statusCode: _0x1b7428
        } = await this.request(_0x2c8a4a),
        _0x1454d9 = _0x4ad89a.get(_0x1ffd08, "code", -1);
      if (_0x1454d9 == 0) {
        this.log("点赞直播间[" + _0x4230f7 + "]成功");
      } else {
        let _0x31e4d9 = _0x1ffd08?.["msg"] || _0x1ffd08?.["resoultMsg"] || _0x1ffd08?.["error"] || _0x1ffd08?.["msg"] || "";
        this.log("点赞直播间[" + _0x4230f7 + "]失败[" + _0x1454d9 + "]: " + _0x31e4d9);
      }
    } catch (_0x3690db) {
      console.log(_0x3690db);
    }
  }
  async sharingGetGold(_0x53e712 = {}) {
    try {
      let _0x2ce286 = {
          fn: "sharingGetGold",
          method: "post",
          url: "https://appfuwu.189.cn:9021/query/sharingGetGold",
          json: {
            headerInfos: {
              code: "sharingGetGold",
              timestamp: _0x4ad89a.time("yyyyMMddhhmmss"),
              broadAccount: "",
              broadToken: "",
              clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
              shopId: "20002",
              source: "110003",
              sourcePassword: "Sid98s",
              token: this.token,
              userLoginName: this.name
            },
            content: {
              attach: "test",
              fieldData: {
                shareSource: "3",
                userId: this.userId,
                account: this.encode_phone()
              }
            }
          }
        },
        {
          result: _0x451a71,
          statusCode: _0x13a07f
        } = await this.request(_0x2ce286),
        _0x31df74 = _0x4ad89a.get(_0x451a71?.["responseData"], "resultCode", -1);
      if (_0x31df74 == "0000") {
        this.log("分享成功");
      } else {
        let _0x55024a = _0x451a71?.["msg"] || _0x451a71?.["responseData"]?.["resultDesc"] || _0x451a71?.["error"] || _0x451a71?.["msg"] || "";
        this.log("分享失败[" + _0x31df74 + "]: " + _0x55024a);
      }
    } catch (_0x2e1550) {
      console.log(_0x2e1550);
    }
  }
  async month_jml_preCost(_0x130dc9 = {}) {
    try {
      let _0x396e98 = {
          fn: "month_jml_preCost",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/short/message/preCost",
          json: {
            phone: this.encode_aes(this.name),
            activityCode: "shortMesssge"
          }
        },
        {
          result: _0x2a2bba,
          statusCode: _0x265563
        } = await this.request(_0x396e98),
        _0x18b2d8 = _0x4ad89a.get(_0x2a2bba, "resoultCode", _0x265563);
      if (_0x18b2d8 == 0) {
        let _0x2500b3 = _0x2a2bba?.["data"]?.["resoultMsg"] || "领取成功";
        this.jml_tokenFlag = _0x2a2bba?.["resoultMsg"];
        await this.month_jml_userCost(_0x2500b3);
        await this.month_jml_receive();
        await this.month_jml_getCount();
        await this.month_jml_refresh();
      } else {
        let _0x6aa04 = _0x2a2bba?.["msg"] || _0x2a2bba?.["resoultMsg"] || _0x2a2bba?.["error"] || "";
        this.log("每月见面礼登录失败[" + _0x18b2d8 + "]: " + _0x6aa04);
      }
    } catch (_0x15f106) {
      console.log(_0x15f106);
    }
  }
  async month_jml_userCost(_0x2afa47, _0xba24c3 = {}) {
    try {
      let _0x52f157 = {
          fn: "month_jml_userCost",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/short/message/userCost",
          json: {
            phone: this.encode_aes(this.name),
            activityCode: "shortMesssge",
            flag: this.jml_tokenFlag
          }
        },
        {
          result: _0x19439c,
          statusCode: _0x513c42
        } = await this.request(_0x52f157),
        _0x36baf2 = _0x4ad89a.get(_0x19439c, "resoultCode", _0x513c42);
      if (_0x36baf2 == 0) {
        let _0x29274d = _0x19439c?.["data"]?.["map"](_0x9e87cc => "[" + _0x9e87cc.pizeName + "]") || [];
        this.log("见面礼" + _0x2afa47 + ": " + _0x29274d.join(", "));
      } else {
        let _0x338776 = _0x19439c?.["msg"] || _0x19439c?.["resoultMsg"] || _0x19439c?.["error"] || "";
        this.log("领取每月见面礼失败[" + _0x36baf2 + "]: " + _0x338776);
      }
    } catch (_0x2f23fc) {
      console.log(_0x2f23fc);
    }
  }
  async month_jml_receive(_0x5f25cd = {}) {
    try {
      let _0x29b0c9 = {
          phone: this.name,
          flag: this.jml_tokenFlag
        },
        _0x18a828 = {
          fn: "month_jml_receive",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/receive",
          json: {
            para: this.encrypt_para(_0x29b0c9)
          }
        },
        {
          result: _0x4870d5,
          statusCode: _0x300eba
        } = await this.request(_0x18a828),
        _0x2d4215 = _0x4ad89a.get(_0x4870d5, "code", -1);
      if (_0x2d4215 == 0) {
        this.log("领取APP抽奖次数成功");
      } else {
        let _0x1e7247 = _0x4870d5?.["msg"] || _0x4870d5?.["resoultMsg"] || _0x4870d5?.["error"] || "";
        this.log("领取APP抽奖次数失败[" + _0x2d4215 + "]: " + _0x1e7247);
      }
    } catch (_0xf50e55) {
      console.log(_0xf50e55);
    }
  }
  async month_jml_getCount(_0x3fde5a = {}) {
    try {
      let _0x3b36d3 = {
          phone: this.name,
          flag: this.jml_tokenFlag
        },
        _0x4bb28e = {
          fn: "month_jml_getCount",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/getCount",
          json: {
            para: this.encrypt_para(_0x3b36d3)
          }
        },
        {
          result: _0x32df98,
          statusCode: _0x100713
        } = await this.request(_0x4bb28e),
        _0x461925 = _0x4ad89a.get(_0x32df98, "code", -1);
      if (_0x461925 == 0) {
        let _0x1d30cc = _0x32df98?.["video"]?.["map"](_0x472059 => _0x472059.videoType) || [],
          _0x54bfda = _0x57e139.filter(_0x107644 => !_0x1d30cc.includes(_0x107644)),
          _0xf7e498 = false;
        for (let _0x5a3205 of _0x54bfda) {
          if (_0xf7e498) {
            let _0x26cc6b = Math.floor(Math.random() * 5000) + 3000;
            await _0x4ad89a.wait(_0x26cc6b);
          }
          await this.month_jml_addVideoCount(_0x5a3205);
          _0xf7e498 = true;
        }
      } else {
        let _0x820ed = _0x32df98?.["msg"] || _0x32df98?.["resoultMsg"] || _0x32df98?.["error"] || "";
        this.log("查询看视频得抽奖机会次数失败[" + _0x461925 + "]: " + _0x820ed);
      }
    } catch (_0x4f96ed) {
      console.log(_0x4f96ed);
    }
  }
  async month_jml_addVideoCount(_0x19ec38, _0x33c8a4 = {}) {
    try {
      let _0x219381 = {
          phone: this.name,
          videoType: _0x19ec38,
          flag: this.jml_tokenFlag
        },
        _0x43ecfd = {
          fn: "month_jml_addVideoCount",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/addVideoCount",
          json: {
            para: this.encrypt_para(_0x219381)
          }
        },
        {
          result: _0x536396,
          statusCode: _0x4076e7
        } = await this.request(_0x43ecfd),
        _0x5ac6ef = _0x4ad89a.get(_0x536396, "code", -1);
      if (_0x5ac6ef == 0) {
        this.log("看视频[" + _0x19ec38 + "]得抽奖机会成功");
      } else {
        let _0x362ca6 = _0x536396?.["msg"] || _0x536396?.["resoultMsg"] || _0x536396?.["error"] || "";
        this.log("看视频[" + _0x19ec38 + "]得抽奖机会失败[" + _0x5ac6ef + "]: " + _0x362ca6);
      }
    } catch (_0x50694c) {
      console.log(_0x50694c);
    }
  }
  async month_jml_refresh(_0x3071d2 = {}) {
    try {
      let _0x3d2385 = {
          phone: this.name,
          flag: this.jml_tokenFlag
        },
        _0x20f333 = {
          fn: "month_jml_refresh",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/refresh",
          json: {
            para: this.encrypt_para(_0x3d2385)
          }
        },
        {
          result: _0x249fb2,
          statusCode: _0x167eca
        } = await this.request(_0x20f333),
        _0x55e184 = _0x4ad89a.get(_0x249fb2, "code", -1);
      if (_0x55e184 == -1) {
        let _0x3614d1 = _0x249fb2?.["rNumber"] || 0;
        this.log("可以抽奖" + _0x3614d1 + "次");
        let _0x1b670a = false;
        while (_0x3614d1-- > 0) {
          if (_0x1b670a) {
            let _0x281414 = Math.floor(Math.random() * 5000) + 3000;
            await _0x4ad89a.wait(_0x281414);
          }
          await this.month_jml_lotteryRevice();
          _0x1b670a = true;
        }
      } else {
        let _0x453c69 = _0x249fb2?.["msg"] || _0x249fb2?.["resoultMsg"] || _0x249fb2?.["error"] || "";
        this.log("查询抽奖次数失败[" + _0x55e184 + "]: " + _0x453c69);
      }
    } catch (_0x4a56f9) {
      console.log(_0x4a56f9);
    }
  }
  async month_jml_lotteryRevice(_0x1843da = {}) {
    try {
      let _0x9aecb1 = {
          phone: this.name,
          flag: this.jml_tokenFlag
        },
        _0x1889f1 = {
          fn: "month_jml_lotteryRevice",
          method: "post",
          url: "https://wapside.189.cn:9001/jt-sign/lottery/lotteryRevice",
          json: {
            para: this.encrypt_para(_0x9aecb1)
          }
        },
        {
          result: _0x43fcb5,
          statusCode: _0x1d840a
        } = await this.request(_0x1889f1),
        _0x475442 = _0x4ad89a.get(_0x43fcb5, "code", -1);
      if (_0x475442 == 0) {
        let {
          rname: _0x45ecf8,
          id: _0x3ec22c
        } = _0x43fcb5;
        const _0x409fbe = {
          notify: true
        };
        this.log("每月见面礼抽奖: " + _0x45ecf8, _0x409fbe);
      } else {
        let _0x9cbd39 = _0x43fcb5?.["msg"] || _0x43fcb5?.["resoultMsg"] || _0x43fcb5?.["error"] || "";
        this.log("每月见面礼抽奖失败[" + _0x475442 + "]: " + _0x9cbd39);
      }
    } catch (_0x110056) {
      console.log(_0x110056);
    }
  }
  async rpc_request(_0x218240, _0x50ea77 = "get", _0x5047fc = null) {
    const _0x374759 = new Error(),
      _0x25a3ca = _0x374759.stack,
      _0x16ef13 = _0x25a3ca.split("\n"),
      _0x265baf = _0x16ef13?.[2]?.["match"](/UserClass\.(\w+)/)?.[1] || "rpc";
    let _0x424deb = {
      fn: _0x265baf,
      method: "post",
      url: _0x1193e9,
      json: {
        key: _0xda0a92,
        method: _0x50ea77,
        url: _0x218240.toString(),
        headers: this.get_mall_headers(),
        data: JSON.stringify(_0x5047fc)
      }
    };
    return await this.request(_0x424deb);
  }
  async auth_login(_0x19cbb3 = {}) {
    let _0x3e8f4f = false;
    try {
      let _0x283008 = this.ticket,
        _0x20e820 = new URL("https://wapact.189.cn:9001/unified/user/login"),
        _0x29d068 = {
          ticket: _0x283008,
          backUrl: encodeURIComponent("https://wapact.189.cn:9001/JinDouMall/JinDouMall_luckDraw.html?ticket=" + _0x283008),
          platformCode: "P201010301",
          loginType: 2
        },
        {
          result: _0x28044a,
          statusCode: _0x4b4fe6
        } = await this.rpc_request(_0x20e820, "POST", _0x29d068),
        _0x44a947 = _0x4ad89a.get(_0x28044a, "code", _0x4b4fe6);
      if (_0x44a947 == 0) {
        let {
          token: _0x5b1bca,
          sessionId: _0x54e81d
        } = _0x28044a?.["biz"];
        this.mall_token = _0x5b1bca;
        _0x3e8f4f = true;
      } else {
        let _0x1f9687 = _0x4ad89a.get(_0x28044a, "message", "");
        this.log("商城登录失败[" + _0x44a947 + "]: " + _0x1f9687);
      }
    } catch (_0x52388e) {
      console.log(_0x52388e);
    } finally {
      return _0x3e8f4f;
    }
  }
  async queryInfo(_0x5c3fe1 = {}) {
    try {
      let _0x134746 = new URL("https://wapact.189.cn:9001/gateway/golden/api/queryInfo");
      _0x134746.searchParams.append("_", Date.now().toString());
      let {
          result: _0x1f17d1,
          statusCode: _0x15a787
        } = await this.rpc_request(_0x134746),
        _0x513184 = _0x4ad89a.get(_0x1f17d1, "code", _0x15a787);
      if (_0x513184 == 0) {
        this.coin = _0x1f17d1?.["biz"]?.["amountTotal"] || this.coin;
        await this.queryTurnTable();
      } else {
        let _0x5baac8 = _0x4ad89a.get(_0x1f17d1, "message", "");
        this.log("查询商城状态失败[" + _0x513184 + "]: " + _0x5baac8);
      }
    } catch (_0x39b3c4) {
      console.log(_0x39b3c4);
    }
  }
  async queryTurnTable(_0x53a3db = {}) {
    try {
      let _0x524d9a = new URL("https://wapact.189.cn:9001/gateway/golden/api/queryTurnTable");
      _0x524d9a.searchParams.append("userType", "1");
      _0x524d9a.searchParams.append("_", Date.now().toString());
      let {
          result: _0x2d94bd,
          statusCode: _0x354589
        } = await this.rpc_request(_0x524d9a),
        _0x4c549b = _0x4ad89a.get(_0x2d94bd, "code", _0x354589);
      if (_0x4c549b == 0) {
        let _0x36c751 = _0x2d94bd?.["biz"]?.["xiaoHaoCount"] || 20,
          _0x2f17dd = _0x2d94bd?.["biz"]?.["wzTurntable"]?.["code"] || "";
        _0x2f17dd ? await this.lottery_check(_0x2f17dd, _0x36c751) : this.log("没有获取到转盘抽奖ID");
      } else {
        let _0x44aaf9 = _0x4ad89a.get(_0x2d94bd, "message", "");
        this.log("获取转盘抽奖活动失败[" + _0x4c549b + "]: " + _0x44aaf9);
      }
    } catch (_0x14f7b8) {
      console.log(_0x14f7b8);
    }
  }
  async lottery_check(_0x17c4ca, _0x553698, _0x248cfb = {}) {
    try {
      let _0x12731a = new URL("https://wapact.189.cn:9001/gateway/stand/detail/check");
      _0x12731a.searchParams.append("activityId", _0x17c4ca);
      _0x12731a.searchParams.append("_", Date.now().toString());
      let {
          result: _0x52434c,
          statusCode: _0x21d0c0
        } = await this.rpc_request(_0x12731a),
        _0x2ba180 = _0x4ad89a.get(_0x52434c, "code", _0x21d0c0);
      if (_0x2ba180 == 0) {
        let _0x58c29c = _0x52434c?.["biz"]?.["resultInfo"]?.["chanceCount"] || 0;
        this.log("转盘可以抽奖" + _0x58c29c + "次, 消耗金豆" + _0x553698 + "/" + this.coin);
        let _0x884411 = false;
        while (_0x58c29c-- > 0 && this.coin >= _0x553698) {
          if (_0x884411) {
            await _0x4ad89a.wait(3000);
          }
          _0x884411 = true;
          await this.lottery_do(_0x17c4ca, _0x553698);
        }
      } else {
        let _0x554772 = _0x4ad89a.get(_0x52434c, "message", "");
        this.log("查询转盘抽奖次数失败[" + _0x2ba180 + "]: " + _0x554772);
      }
    } catch (_0x1cf99a) {
      console.log(_0x1cf99a);
    }
  }
  async lottery_do(_0x2149df, _0x3eed4c = {}) {
    try {
      let _0x4c4723 = new URL("https://wapact.189.cn:9001/gateway/golden/api/lottery");
      let _0x3072ed = {
          activityId: _0x2149df
        },
        {
          result: _0x30828e,
          statusCode: _0x4baae1
        } = await this.rpc_request(_0x4c4723, "POST", _0x3072ed),
        _0x1af360 = _0x4ad89a.get(_0x30828e, "code", _0x4baae1);
      if (_0x1af360 == 0) {
        this.coin = _0x30828e?.["biz"]?.["amountTotal"] || this.coin - xiaoHaoCount;
        let _0x151bd1 = _0x30828e?.["biz"]?.["resultCode"],
          _0x449eef = "";
        switch (_0x151bd1) {
          case "0":
            {
              let _0xdf2719 = _0x30828e?.["biz"]?.["resultInfo"]?.["winTitle"] || "空气";
              const _0x259efa = {
                notify: true
              };
              this.log("转盘抽奖: " + _0xdf2719, _0x259efa);
              return;
            }
          case "412":
            {
              _0x449eef = "抽奖次数已达上限";
              break;
            }
          case "413":
          case "420":
            {
              _0x449eef = "金豆不足";
              break;
            }
          default:
            {
              this.log(": " + JSON.stringify(_0x30828e));
              _0x449eef = "未知原因";
              break;
            }
        }
        this.log("转盘抽奖失败[" + _0x151bd1 + "]: " + _0x449eef);
      } else {
        let _0x4d6c04 = _0x4ad89a.get(_0x30828e, "message", "");
        this.log("转盘抽奖错误[" + _0x1af360 + "]: " + _0x4d6c04);
      }
    } catch (_0x115997) {
      console.log(_0x115997);
    }
  }
  async userTask() {
    const _0x520353 = {
      notify: true
    };
    _0x4ad89a.log("\n======= 账号[" + this.index + "][" + this.name + "] =======", _0x520353);
    if (!this.load_token() && !(await this.login())) {
      return;
    }
    if (!(await this.get_ticket())) {
      return;
    }
    if (!(await this.get_sign())) {
      return;
    }
    await this.userCoinInfo();
    await this.getLevelRightsList();
    await this.month_jml_preCost();
    await this.userStatusInfo();
    await this.continueSignRecords();
    await this.homepage("hg_qd_zrwzjd");
    await this.getParadiseInfo();
    if (_0x1193e9) {
      await this.userLotteryTask();
    }
    await this.userCoinInfo(true);
  }
  async userLotteryTask() {
    if (!(await this.auth_login())) {
      return;
    }
    await this.queryInfo();
  }
}
!(async () => {
  if (!(await _0x118fe0())) {
    return;
  }
  _0x4ad89a.read_env(_0x1e5f34);
  _0x464d32();
  for (let _0x42e60f of _0x4ad89a.userList) {
    await _0x42e60f.userTask();
  }
})().catch(_0x4c391c => _0x4ad89a.log(_0x4c391c)).finally(() => _0x4ad89a.exitNow());
async function _0x118fe0(_0x51f7e1 = 0) {
  let _0x420dec = false;
  try {
    let _0x41fa13 = {
        fn: "auth",
        method: "get",
        url: _0x75bdeb,
        timeout: 20000
      },
      {
        statusCode: _0x1c29a0,
        result: _0x454400
      } = await _0x20b120.request(_0x41fa13);
    if (_0x1c29a0 != 200) {
      _0x51f7e1++ < _0x98515c && (_0x420dec = await _0x118fe0(_0x51f7e1));
      return _0x420dec;
    }
    if (_0x454400?.["code"] == 0) {
      _0x454400 = JSON.parse(_0x454400.data.file.data);
      if (_0x454400?.["commonNotify"] && _0x454400.commonNotify.length > 0) {
        const _0x4b7046 = {
          notify: true
        };
        _0x4ad89a.log(_0x454400.commonNotify.join("\n") + "\n", _0x4b7046);
      }
      _0x454400?.["commonMsg"] && _0x454400.commonMsg.length > 0 && _0x4ad89a.log(_0x454400.commonMsg.join("\n") + "\n");
      if (_0x454400[_0x1c064b]) {
        let _0x119309 = _0x454400[_0x1c064b];
        _0x119309.status == 0 ? _0x5319be >= _0x119309.version ? (_0x420dec = true, _0x4ad89a.log(_0x119309.msg[_0x119309.status]), _0x4ad89a.log(_0x119309.updateMsg), _0x4ad89a.log("现在运行的脚本版本是：" + _0x5319be + "，最新脚本版本：" + _0x119309.latestVersion)) : _0x4ad89a.log(_0x119309.versionMsg) : _0x4ad89a.log(_0x119309.msg[_0x119309.status]);
      } else {
        _0x4ad89a.log(_0x454400.errorMsg);
      }
    } else {
      _0x51f7e1++ < _0x98515c && (_0x420dec = await _0x118fe0(_0x51f7e1));
    }
  } catch (_0x4dd5cf) {
    _0x4ad89a.log(_0x4dd5cf);
  } finally {
    return _0x420dec;
  }
}
function _0x413a5c(_0x2ba500) {
  return new class {
    constructor(_0x54fa4b) {
      this.name = _0x54fa4b;
      this.startTime = Date.now();
      const _0x56d584 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x56d584);
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
    log(_0x5f359b, _0x4c6e07 = {}) {
      let _0x5a9941 = {
        console: true
      };
      Object.assign(_0x5a9941, _0x4c6e07);
      if (_0x5a9941.time) {
        let _0xa778e1 = _0x5a9941.fmt || "hh:mm:ss";
        _0x5f359b = "[" + this.time(_0xa778e1) + "]" + _0x5f359b;
      }
      if (_0x5a9941.notify) {
        this.notifyStr.push(_0x5f359b);
      }
      if (_0x5a9941.console) {
        console.log(_0x5f359b);
      }
    }
    get(_0x4bda3c, _0xb5da05, _0x396e51 = "") {
      let _0x12211e = _0x396e51;
      _0x4bda3c?.["hasOwnProperty"](_0xb5da05) && (_0x12211e = _0x4bda3c[_0xb5da05]);
      return _0x12211e;
    }
    pop(_0x9afc20, _0x11478a, _0x210ae4 = "") {
      let _0x2eb81f = _0x210ae4;
      _0x9afc20?.["hasOwnProperty"](_0x11478a) && (_0x2eb81f = _0x9afc20[_0x11478a], delete _0x9afc20[_0x11478a]);
      return _0x2eb81f;
    }
    copy(_0x5c3d65) {
      return Object.assign({}, _0x5c3d65);
    }
    read_env(_0xae9ea8) {
      let _0x1d489e = _0x1fe35c.map(_0x2fd935 => process.env[_0x2fd935]);
      for (let _0x5edc1e of _0x1d489e.filter(_0x5448d8 => !!_0x5448d8)) {
        for (let _0x398ded of _0x5edc1e.split(_0x16e65e).filter(_0x3bbd6c => !!_0x3bbd6c)) {
          if (this.userList.includes(_0x398ded)) {
            continue;
          }
          this.userList.push(new _0xae9ea8(_0x398ded));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x300616 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x1fe35c.map(_0x46eb4b => "[" + _0x46eb4b + "]").join("或"), _0x300616);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x4a259f, _0x52dab3 = null) {
      let _0x2ed207 = _0x52dab3 ? new Date(_0x52dab3) : new Date(),
        _0x49cbb8 = {
          "M+": _0x2ed207.getMonth() + 1,
          "d+": _0x2ed207.getDate(),
          "h+": _0x2ed207.getHours(),
          "m+": _0x2ed207.getMinutes(),
          "s+": _0x2ed207.getSeconds(),
          "q+": Math.floor((_0x2ed207.getMonth() + 3) / 3),
          S: this.padStr(_0x2ed207.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x4a259f) && (_0x4a259f = _0x4a259f.replace(RegExp.$1, (_0x2ed207.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x2eca02 in _0x49cbb8) new RegExp("(" + _0x2eca02 + ")").test(_0x4a259f) && (_0x4a259f = _0x4a259f.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x49cbb8[_0x2eca02] : ("00" + _0x49cbb8[_0x2eca02]).substr(("" + _0x49cbb8[_0x2eca02]).length)));
      return _0x4a259f;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x5a620c = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x5a620c.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0xafd9bc, _0x51267f, _0x5a3658 = {}) {
      let _0xc348cb = _0x5a3658.padding || "0",
        _0x1eaf9c = _0x5a3658.mode || "l",
        _0xc30bd4 = String(_0xafd9bc),
        _0x513477 = _0x51267f > _0xc30bd4.length ? _0x51267f - _0xc30bd4.length : 0,
        _0x4b66ef = "";
      for (let _0x1d2a18 = 0; _0x1d2a18 < _0x513477; _0x1d2a18++) {
        _0x4b66ef += _0xc348cb;
      }
      _0x1eaf9c == "r" ? _0xc30bd4 = _0xc30bd4 + _0x4b66ef : _0xc30bd4 = _0x4b66ef + _0xc30bd4;
      return _0xc30bd4;
    }
    json2str(_0x706f1f, _0x27dcbf, _0x4fbdd3 = false) {
      let _0x90986a = [];
      for (let _0x575c21 of Object.keys(_0x706f1f).sort()) {
        let _0x4b9e9f = _0x706f1f[_0x575c21];
        if (_0x4b9e9f && _0x4fbdd3) {
          _0x4b9e9f = encodeURIComponent(_0x4b9e9f);
        }
        _0x90986a.push(_0x575c21 + "=" + _0x4b9e9f);
      }
      return _0x90986a.join(_0x27dcbf);
    }
    str2json(_0xe47492, _0x17ebea = false) {
      let _0x47066a = {};
      for (let _0x4d180d of _0xe47492.split("&")) {
        if (!_0x4d180d) {
          continue;
        }
        let _0x40941a = _0x4d180d.indexOf("=");
        if (_0x40941a == -1) {
          continue;
        }
        let _0x5beb23 = _0x4d180d.substr(0, _0x40941a),
          _0x12874e = _0x4d180d.substr(_0x40941a + 1);
        if (_0x17ebea) {
          _0x12874e = decodeURIComponent(_0x12874e);
        }
        _0x47066a[_0x5beb23] = _0x12874e;
      }
      return _0x47066a;
    }
    randomPattern(_0xd6bdaa, _0x3ccea3 = "abcdef0123456789") {
      let _0x2f4d5f = "";
      for (let _0x1efa6c of _0xd6bdaa) {
        if (_0x1efa6c == "x") {
          _0x2f4d5f += _0x3ccea3.charAt(Math.floor(Math.random() * _0x3ccea3.length));
        } else {
          _0x1efa6c == "X" ? _0x2f4d5f += _0x3ccea3.charAt(Math.floor(Math.random() * _0x3ccea3.length)).toUpperCase() : _0x2f4d5f += _0x1efa6c;
        }
      }
      return _0x2f4d5f;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x568740, _0x3c2d2b = "abcdef0123456789") {
      let _0x17a2bf = "";
      for (let _0x4d5c2f = 0; _0x4d5c2f < _0x568740; _0x4d5c2f++) {
        _0x17a2bf += _0x3c2d2b.charAt(Math.floor(Math.random() * _0x3c2d2b.length));
      }
      return _0x17a2bf;
    }
    randomList(_0x234c1d) {
      let _0x5d79d8 = Math.floor(Math.random() * _0x234c1d.length);
      return _0x234c1d[_0x5d79d8];
    }
    wait(_0x320af3) {
      return new Promise(_0x4b3fd7 => setTimeout(_0x4b3fd7, _0x320af3));
    }
    async exitNow() {
      await this.showmsg();
      let _0x4d39f1 = Date.now(),
        _0x4e201a = (_0x4d39f1 - this.startTime) / 1000;
      this.log("");
      const _0x38acbb = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x4e201a + "秒", _0x38acbb);
      process.exit(0);
    }
    normalize_time(_0x4b31d6, _0x5d37ef = {}) {
      let _0x4fb159 = _0x5d37ef.len || this.default_timestamp_len;
      _0x4b31d6 = _0x4b31d6.toString();
      let _0x289fe0 = _0x4b31d6.length;
      while (_0x289fe0 < _0x4fb159) {
        _0x4b31d6 += "0";
      }
      _0x289fe0 > _0x4fb159 && (_0x4b31d6 = _0x4b31d6.slice(0, 13));
      return parseInt(_0x4b31d6);
    }
    async wait_until(_0x315c4a, _0x2fc5db = {}) {
      let _0x3f9168 = _0x2fc5db.logger || this,
        _0x34d795 = _0x2fc5db.interval || this.default_wait_interval,
        _0x3157a1 = _0x2fc5db.limit || this.default_wait_limit,
        _0xb697ba = _0x2fc5db.ahead || this.default_wait_ahead;
      if (typeof _0x315c4a == "string" && _0x315c4a.includes(":")) {
        if (_0x315c4a.includes("-")) {
          _0x315c4a = new Date(_0x315c4a).getTime();
        } else {
          let _0x3a3baa = this.time("yyyy-MM-dd ");
          _0x315c4a = new Date(_0x3a3baa + _0x315c4a).getTime();
        }
      }
      let _0x1ba7a0 = this.normalize_time(_0x315c4a) - _0xb697ba,
        _0x32dd5f = this.time("hh:mm:ss.S", _0x1ba7a0),
        _0x30049e = Date.now();
      _0x30049e > _0x1ba7a0 && (_0x1ba7a0 += 86400000);
      let _0x26d06e = _0x1ba7a0 - _0x30049e;
      if (_0x26d06e > _0x3157a1) {
        const _0x4a05f0 = {
          time: true
        };
        _0x3f9168.log("离目标时间[" + _0x32dd5f + "]大于" + _0x3157a1 / 1000 + "秒,不等待", _0x4a05f0);
      } else {
        const _0x1a8de7 = {
          time: true
        };
        _0x3f9168.log("离目标时间[" + _0x32dd5f + "]还有" + _0x26d06e / 1000 + "秒,开始等待", _0x1a8de7);
        while (_0x26d06e > 0) {
          let _0x2af83a = Math.min(_0x26d06e, _0x34d795);
          await this.wait(_0x2af83a);
          _0x30049e = Date.now();
          _0x26d06e = _0x1ba7a0 - _0x30049e;
        }
        const _0x22089d = {
          time: true
        };
        _0x3f9168.log("已完成等待", _0x22089d);
      }
    }
    async wait_gap_interval(_0x1512d0, _0xddd39f) {
      let _0x5776b1 = Date.now() - _0x1512d0;
      _0x5776b1 < _0xddd39f && (await this.wait(_0xddd39f - _0x5776b1));
    }
  }(_0x2ba500);
}