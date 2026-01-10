//Sat Jan 10 2026 07:51:48 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const originalLog = console.log;
let globalLogs = [];
console.log = function (..._0xefcc98) {
  const _0xff5587 = new Date();
  const _0x32dfc5 = [_0xff5587.getFullYear(), String(_0xff5587.getMonth() + 1).padStart(2, "0"), String(_0xff5587.getDate()).padStart(2, "0")].join("-") + " " + [String(_0xff5587.getHours()).padStart(2, "0"), String(_0xff5587.getMinutes()).padStart(2, "0"), String(_0xff5587.getSeconds()).padStart(2, "0")].join(":");
  const _0x3ba975 = "[" + _0x32dfc5 + "] " + _0xefcc98.map(String).join(" ");
  globalLogs.push(_0x3ba975);
  originalLog(_0x3ba975);
};
const {
  sendNotify
} = require("./sendNotify.js");
async function validateLkey() {
  try {
    {
      const _0x1b64d1 = {
        timeout: 10000
      };
      const _0x1d64c3 = await axios.get("https://gitee.com/xingxing666666/log/raw/master/Lkey.log", _0x1b64d1);
      const _0x535c3f = _0x1d64c3.data;
      let _0x47ef91 = "";
      _0x535c3f.includes("Lkey=") ? _0x47ef91 = _0x535c3f.split("Lkey=")[1].split("\n")[0].trim() : _0x47ef91 = _0x535c3f.trim();
      const _0x540e7a = process.env.Lkey;
      if (!_0x540e7a || _0x540e7a !== _0x47ef91) {
        console.log("❌ 未设置环境变量Lkey或Lkey的值不正确");
        console.log("💡 关注公众号【帅气的林老师】发送[key]免费获取");
        console.log("📧 或者联系作者获取有效的Lkey");
        return false;
      }
      console.log("✅ Lkey验证通过");
      return true;
    }
  } catch (_0x58f072) {
    {
      console.error("❌ 获取Lkey失败:", _0x58f072.message);
      console.log("💡 关注公众号【帅气的林老师】发送[key]免费获取");
      console.log("📧 或者联系作者获取有效的Lkey");
      return false;
    }
  }
}
const CryptoJS = require("crypto-js");
const crypto = require("crypto");
const axios = require("axios").default;
const fs = require("fs");
const JSEncrypt = require("node-jsencrypt");
let tool_pubKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB";
const tool_decrypt = new JSEncrypt();
const tool_mySetTimeout = setTimeout.bind(globalThis);
function encrypt_req(_0xbe8011, _0x45403b, _0x58d6f0) {
  var _0x2e5e6b = CryptoJS.enc.Utf8.parse(_0x58d6f0);
  var _0x23499f = CryptoJS.enc.Utf8.parse(_0xbe8011);
  var _0x4281fb = CryptoJS.TripleDES.encrypt(_0x2e5e6b, _0x23499f, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Utf8.parse(_0x45403b)
  });
  return _0x4281fb.ciphertext.toString();
}
function decrypt_req(_0x4ea639, _0x1998c6, _0x240191) {
  var _0x54a218 = CryptoJS.enc.Utf8.parse(_0x4ea639);
  var _0x1c2920 = CryptoJS.enc.Hex.parse(_0x240191);
  var _0x240191 = CryptoJS.enc.Base64.stringify(_0x1c2920);
  var _0x19578d = CryptoJS.TripleDES.decrypt(_0x240191, _0x54a218, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
    iv: CryptoJS.enc.Utf8.parse(_0x1998c6)
  });
  return CryptoJS.enc.Utf8.stringify(_0x19578d).toString();
}
function encrypt_aes(_0x313627, _0x30adaa = "34d7cb0bcdf07523") {
  typeof _0x313627 != "string" && (_0x313627 = JSON.stringify(_0x313627));
  var _0x299238 = CryptoJS.enc.Utf8.parse(_0x30adaa);
  var _0x7607a = CryptoJS.enc.Utf8.parse(_0x313627);
  return CryptoJS.AES.encrypt(_0x7607a, _0x299238, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).ciphertext.toString();
}
function encrypt_aes_base64(_0x5e58f8, _0x468c06 = "34d7cb0bcdf07523") {
  if (typeof _0x5e58f8 != "string") {
    {
      _0x5e58f8 = JSON.stringify(_0x5e58f8);
    }
  }
  var _0x110fa9 = CryptoJS.enc.Utf8.parse(_0x468c06);
  var _0x181ee4 = CryptoJS.enc.Utf8.parse(_0x5e58f8);
  return CryptoJS.AES.encrypt(_0x181ee4, _0x110fa9, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
}
function encrypt_rsa_hex(_0x66094f) {
  const _0x322a98 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6\nJGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65\ndU8rjC/ridwhw9ffW2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORc\nAdcbpk2L+udld5kZNwIDAQAB\n-----END PUBLIC KEY-----";
  const _0x2260c8 = crypto.createPublicKey(_0x322a98);
  typeof _0x66094f != "string" && (_0x66094f = JSON.stringify(_0x66094f));
  let _0x200984 = _0x66094f;
  let _0x56be4f = "";
  for (let _0x3aa8df = 0; _0x3aa8df < Math.ceil(_0x200984.length / 32); _0x3aa8df++) {
    {
      let _0x288aa7;
      if (_0x3aa8df == 0) {
        _0x288aa7 = _0x200984.substring(0, 32);
      } else {
        if (_0x3aa8df == Math.ceil(_0x200984.length / 32) - 1) {
          {
            _0x288aa7 = _0x200984.substring(32 * _0x3aa8df);
          }
        } else {
          _0x288aa7 = _0x200984.substring(32 * _0x3aa8df, 32 * (_0x3aa8df + 1));
        }
      }
      _0x56be4f += crypto.publicEncrypt({
        key: _0x2260c8,
        padding: crypto.constants.RSA_PKCS1_PADDING
      }, Buffer.from(_0x288aa7)).toString("hex");
    }
  }
  return _0x56be4f;
}
function TIMEstamp() {
  let _0x2af778 = new Date();
  var _0x36289d = _0x2af778.getFullYear();
  var _0x373e38 = _0x2af778.getMonth() + 1;
  var _0x45dc64 = _0x2af778.getDate();
  var _0x541e7a = _0x2af778.getHours();
  var _0xe7bdf1 = _0x2af778.getMinutes();
  var _0x594398 = _0x2af778.getSeconds();
  _0x373e38 = _0x373e38 < 10 ? "0" + _0x373e38 : _0x373e38;
  _0x45dc64 = _0x45dc64 < 10 ? "0" + _0x45dc64 : _0x45dc64;
  _0x541e7a = _0x541e7a < 10 ? "0" + _0x541e7a : _0x541e7a;
  _0xe7bdf1 = _0xe7bdf1 < 10 ? "0" + _0xe7bdf1 : _0xe7bdf1;
  _0x594398 = _0x594398 < 10 ? "0" + _0x594398 : _0x594398;
  return _0x36289d + "" + _0x373e38 + "" + _0x45dc64 + "" + _0x541e7a + "" + _0xe7bdf1 + "" + _0x594398;
}
function envtime(_0x4306ca, _0xe666e8 = null) {
  const _0x3cd454 = _0xe666e8 ? new Date(_0xe666e8) : new Date();
  let _0x4aff89 = {
    "M+": _0x3cd454.getMonth() + 1,
    "d+": _0x3cd454.getDate(),
    "H+": _0x3cd454.getHours(),
    "m+": _0x3cd454.getMinutes(),
    "s+": _0x3cd454.getSeconds(),
    "q+": Math.floor((_0x3cd454.getMonth() + 3) / 3),
    S: _0x3cd454.getMilliseconds()
  };
  if (/(y+)/.test(_0x4306ca)) {
    {
      _0x4306ca = _0x4306ca.replace(RegExp.$1, (_0x3cd454.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
  }
  for (let _0x2160ae in _0x4aff89) {
    {
      if (new RegExp("(" + _0x2160ae + ")").test(_0x4306ca)) {
        {
          _0x4306ca = _0x4306ca.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4aff89[_0x2160ae] : ("00" + _0x4aff89[_0x2160ae]).substr(("" + _0x4aff89[_0x2160ae]).length));
        }
      }
    }
  }
  return _0x4306ca;
}
function maskPhone(_0x33d3d1) {
  return _0x33d3d1.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3");
}
function wait(_0xa8d466) {
  return new Promise(function (_0x2cc8ab) {
    tool_mySetTimeout(_0x2cc8ab, _0xa8d466);
  });
}
function TIMEstamp1() {
  let _0x250eee = new Date();
  var _0xff95bf = _0x250eee.getFullYear();
  var _0x4a5992 = _0x250eee.getMonth() + 1;
  var _0xbde5be = _0x250eee.getDate();
  var _0x2fb897 = _0x250eee.getHours();
  var _0x5c8c77 = _0x250eee.getMinutes();
  var _0x288ce6 = _0x250eee.getSeconds();
  _0x4a5992 = _0x4a5992 < 10 ? "0" + _0x4a5992 : _0x4a5992;
  _0xbde5be = _0xbde5be < 10 ? "0" + _0xbde5be : _0xbde5be;
  _0x2fb897 = _0x2fb897 < 10 ? "0" + _0x2fb897 : _0x2fb897;
  _0x5c8c77 = _0x5c8c77 < 10 ? "0" + _0x5c8c77 : _0x5c8c77;
  _0x288ce6 = _0x288ce6 < 10 ? "0" + _0x288ce6 : _0x288ce6;
  return _0xff95bf + "-" + _0x4a5992 + "-" + _0xbde5be + " " + _0x2fb897 + ":" + _0x5c8c77 + ":" + _0x288ce6;
}
async function waitt(_0x55a02c) {
  const _0x58fe5e = Date.now();
  while (Date.now() - _0x58fe5e < _0x55a02c) {
    await new Promise(_0x2ff0db => process.nextTick(_0x2ff0db));
  }
}
function randomString(_0x3bccbe) {
  var _0x29d380 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var _0x36db13 = "";
  for (var _0x28d502 = _0x3bccbe; _0x28d502 > 0; --_0x28d502) {
    _0x36db13 += _0x29d380[Math.floor(Math.random() * _0x29d380.length)];
  }
  return _0x36db13;
}
async function sendMsg(_0x1e713b, _0x280210, _0x865457 = "", _0x12d77d = "") {
  const _0x3f1a1c = {
    url: "https://wxpusher.zjiecode.com/api/send/message",
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      appToken: _0x865457,
      content: String(_0x1e713b),
      summary: _0x280210,
      contentType: 1,
      topicIds: [],
      uids: [_0x12d77d],
      verifyPayType: "2"
    }
  };
  try {
    {
      await axios(_0x3f1a1c);
      console.log("Message sent successfully");
    }
  } catch (_0x3354d1) {
    console.error("Failed to send message:", _0x3354d1);
  }
}
async function loginPhone(_0x5e7f96, _0x426dd3, _0x38d3cb, _0x4e109f = false) {
  try {
    {
      tool_decrypt.setPrivateKey(tool_pubKey);
      let _0x29d4bc = TIMEstamp();
      let _0x33700c = randomString(16);
      let _0x374723 = tool_decrypt.encrypt("iPhone 14 15.4." + _0x33700c.substring(0, 12) + _0x5e7f96 + _0x29d4bc + _0x426dd3 + "0$$$0.");
      let _0x13a2e2 = "";
      for (let _0x8e7cdf of _0x5e7f96) {
        {
          if (_0x8e7cdf <= 7) {
            _0x13a2e2 += String(Number(_0x8e7cdf) + 2);
          } else {
            {
              if (_0x8e7cdf == 8) {
                {
                  _0x13a2e2 += ":";
                }
              } else {
                _0x8e7cdf == 9 && (_0x13a2e2 += ";");
              }
            }
          }
        }
      }
      const _0x54d8a9 = {
        code: "userLoginNormal",
        timestamp: _0x29d4bc,
        broadAccount: "",
        broadToken: "",
        clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
        shopId: "20002",
        source: "110003",
        sourcePassword: "Sid98s",
        token: "",
        userLoginName: _0x5e7f96
      };
      const _0x37e8da = {
        attach: "test",
        fieldData: {}
      };
      _0x37e8da.fieldData.loginType = "4";
      _0x37e8da.fieldData.accountType = "";
      _0x37e8da.fieldData.loginAuthCipherAsymmertric = _0x374723;
      _0x37e8da.fieldData.deviceUid = _0x33700c;
      _0x37e8da.fieldData.phoneNum = _0x13a2e2;
      _0x37e8da.fieldData.isChinatelecom = "0";
      _0x37e8da.fieldData.systemVersion = "15.4.0";
      _0x37e8da.fieldData.authentication = _0x426dd3;
      let _0x43a38e = {
        headerInfos: _0x54d8a9,
        content: _0x37e8da
      };
      if (!_0x38d3cb || _0x4e109f) {
        {
          let _0x468d1f = {
            url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
            method: "POST",
            data: _0x43a38e
          };
          let _0x49b994 = await axios(_0x468d1f);
          try {
            {
              const _0xe5e8ee = {
                ..._0x49b994.data.responseData.data.loginSuccessResult
              };
              _0x38d3cb = _0xe5e8ee;
            }
          } catch (_0x52b8df) {
            {
              return false;
            }
          }
        }
      }
      const _0x1b9a1b = {
        ..._0x38d3cb
      };
      let _0x1d4b65 = _0x1b9a1b;
      let _0x223113 = _0x38d3cb.token;
      let _0x321140 = _0x38d3cb.userId;
      _0x29d4bc = TIMEstamp();
      _0x43a38e = "<Request>\n            <HeaderInfos>\n                <Code>getSingle</Code>\n                <Timestamp>" + _0x29d4bc + "</Timestamp>\n                <BroadAccount></BroadAccount>\n                <BroadToken></BroadToken>\n                <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                <ShopId>20002</ShopId>\n                <Source>110003</Source>\n                <SourcePassword>Sid98s</SourcePassword>\n                <Token>" + _0x223113 + "</Token>\n                <UserLoginName>" + _0x5e7f96 + "</UserLoginName>\n            </HeaderInfos>\n            <Content>\n                <Attach>test</Attach>\n                <FieldData>\n                    <TargetId>" + encrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x321140) + "</TargetId>\n                    <Url>4a6862274835b451</Url>\n                </FieldData>\n            </Content>\n        </Request>";
      const _0x2decd0 = {
        url: "https://appgologin.189.cn:9031/map/clientXML",
        method: "post",
        data: _0x43a38e,
        headers: {}
      };
      _0x2decd0.headers["Content-Type"] = "application/xml;charset=utf-8";
      options = _0x2decd0;
      let _0x3f577f = await axios(options);
      if (String(_0x3f577f.data).includes("过期") || String(_0x3f577f.data).includes("校验错误")) {
        {
          return await loginPhone(_0x5e7f96, _0x426dd3, _0x38d3cb, true);
        }
      }
      let _0x163b76 = _0x3f577f.data.split("<Ticket>")[1].split("</Ticket>")[0];
      let _0x261141 = decrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x163b76);
      _0x1d4b65.uid = _0x261141;
      _0x1d4b65.password = _0x426dd3;
      _0x1d4b65.phoneNbr = _0x5e7f96;
      return _0x1d4b65;
    }
  } catch (_0x23348e) {
    return false;
  }
}
async function loginPhoneTwo(_0x29de96, _0x36d8ec, _0x490d21, _0x429dcf = "./Cache.json", _0x1f0e7f = false) {
  try {
    {
      tool_decrypt.setPrivateKey(tool_pubKey);
      let _0x55a961 = TIMEstamp();
      let _0x354ce6 = randomString(16);
      let _0x395137 = tool_decrypt.encrypt("iPhone 14 15.4." + _0x354ce6.substring(0, 12) + _0x29de96 + _0x55a961 + _0x36d8ec + "0$$$0.");
      let _0x4165f5 = "";
      for (let _0x3e7665 of _0x29de96) {
        {
          if (_0x3e7665 <= 7) {
            _0x4165f5 += String(Number(_0x3e7665) + 2);
          } else {
            {
              if (_0x3e7665 == 8) {
                {
                  _0x4165f5 += ":";
                }
              } else {
                if (_0x3e7665 == 9) {
                  {
                    _0x4165f5 += ";";
                  }
                }
              }
            }
          }
        }
      }
      const _0x2d4e7f = {
        code: "userLoginNormal",
        timestamp: _0x55a961,
        broadAccount: "",
        broadToken: "",
        clientType: "#9.6.1#channel50#iPhone 14 Pro Max#",
        shopId: "20002",
        source: "110003",
        sourcePassword: "Sid98s",
        token: "",
        userLoginName: _0x29de96
      };
      const _0x54b64d = {
        attach: "test",
        fieldData: {}
      };
      _0x54b64d.fieldData.loginType = "4";
      _0x54b64d.fieldData.accountType = "";
      _0x54b64d.fieldData.loginAuthCipherAsymmertric = _0x395137;
      _0x54b64d.fieldData.deviceUid = _0x354ce6;
      _0x54b64d.fieldData.phoneNum = _0x4165f5;
      _0x54b64d.fieldData.isChinatelecom = "0";
      _0x54b64d.fieldData.systemVersion = "15.4.0";
      _0x54b64d.fieldData.authentication = _0x36d8ec;
      let _0x13e66c = {
        headerInfos: _0x2d4e7f,
        content: _0x54b64d
      };
      if (!_0x490d21[_0x29de96] || _0x1f0e7f) {
        {
          let _0x5b67c2 = {
            url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
            method: "POST",
            data: _0x13e66c
          };
          let _0x404cd9 = await axios(_0x5b67c2);
          const _0x4348fa = {
            ..._0x404cd9.data.responseData.data.loginSuccessResult
          };
          _0x490d21[_0x29de96] = _0x4348fa;
          console.log("写入缓存成功");
        }
      }
      const _0x3384f5 = {
        ..._0x490d21[_0x29de96]
      };
      let _0x49a171 = _0x3384f5;
      fs.writeFileSync(_0x429dcf, JSON.stringify(_0x490d21, null, 4), "utf8");
      let _0x91b4cb = _0x490d21[_0x29de96].token;
      let _0xcd494 = _0x490d21[_0x29de96].userId;
      _0x55a961 = TIMEstamp();
      _0x13e66c = "<Request>\n            <HeaderInfos>\n                <Code>getSingle</Code>\n                <Timestamp>" + _0x55a961 + "</Timestamp>\n                <BroadAccount></BroadAccount>\n                <BroadToken></BroadToken>\n                <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                <ShopId>20002</ShopId>\n                <Source>110003</Source>\n                <SourcePassword>Sid98s</SourcePassword>\n                <Token>" + _0x91b4cb + "</Token>\n                <UserLoginName>" + _0x29de96 + "</UserLoginName>\n            </HeaderInfos>\n            <Content>\n                <Attach>test</Attach>\n                <FieldData>\n                    <TargetId>" + encrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0xcd494) + "</TargetId>\n                    <Url>4a6862274835b451</Url>\n                </FieldData>\n            </Content>\n        </Request>";
      const _0xab86f0 = {
        url: "https://appgologin.189.cn:9031/map/clientXML",
        method: "post",
        data: _0x13e66c,
        headers: {}
      };
      _0xab86f0.headers["Content-Type"] = "application/xml;charset=utf-8";
      options = _0xab86f0;
      let _0xbe8875 = await axios(options);
      if (String(_0xbe8875.data).includes("过期") || String(_0xbe8875.data).includes("校验错误")) {
        {
          return await loginPhone(_0x29de96, _0x36d8ec, _0x490d21, _0x429dcf, true);
        }
      }
      let _0x1dc567 = _0xbe8875.data.split("<Ticket>")[1].split("</Ticket>")[0];
      let _0x33474a = decrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x1dc567);
      _0x49a171.uid = _0x33474a;
      _0x49a171.password = _0x36d8ec;
      return _0x49a171;
    }
  } catch (_0x22b3b6) {
    {
      console.log(_0x22b3b6);
      return false;
    }
  }
}
axios.defaults.headers.common["User-Agent"] = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1";
axios.defaults.withCredentials = false;
const pubKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB";
const decrypt = new JSEncrypt();
decrypt.setPrivateKey(pubKey);
let userPhone = [];
let Cache = {};
const ChacePath = "Cache.json";
process?.["env"]?.["chinaTelecomAccount"] ? process.env.chinaTelecomAccount.split("&").forEach(_0x30577b => {
  if (_0x30577b) {
    {
      const [_0x460916, _0x55b970] = _0x30577b.split("#");
      if (_0x460916 && _0x55b970) {
        {
          const _0x2d5ff2 = {
            phone: _0x460916,
            password: _0x55b970
          };
          userPhone.push(_0x2d5ff2);
        }
      }
    }
  }
}) : (console.log("未找到环境变量，请设置环境变量 chinaTelecomAccount（格式：手机号1#密码1&手机号2#密码2）"), process.exit(1));
async function loginPhoneMain(_0x5b0312, _0x4a5126) {
  try {
    {
      const _0x4dcb90 = TIMEstamp();
      const _0x5a8570 = randomString(16);
      const _0x2a0f57 = decrypt.encrypt("iPhone 14 15.4." + _0x5a8570.substring(0, 12) + _0x5b0312 + _0x4dcb90 + _0x4a5126 + "0$$$0.");
      let _0x5c4454 = "";
      for (const _0x530e39 of _0x5b0312) {
        {
          if (_0x530e39 <= 7) {
            _0x5c4454 += String(Number(_0x530e39) + 2);
          } else {
            if (_0x530e39 === "8") {
              {
                _0x5c4454 += ":";
              }
            } else {
              if (_0x530e39 === "9") {
                {
                  _0x5c4454 += ";";
                }
              }
            }
          }
        }
      }
      if (!Cache[_0x5b0312]) {
        {
          const _0x459be0 = {
            code: "userLoginNormal",
            timestamp: _0x4dcb90,
            broadAccount: "",
            broadToken: "",
            clientType: "#10.5.0#channel50#iPhone 14 Pro Max#",
            shopId: "20002",
            source: "110003",
            sourcePassword: "Sid98s",
            token: "",
            userLoginName: _0x5c4454
          };
          const _0x44f841 = {
            headerInfos: _0x459be0,
            content: {
              attach: "test",
              fieldData: {
                loginType: "4",
                accountType: "",
                loginAuthCipherAsymmertric: _0x2a0f57,
                deviceUid: _0x5a8570,
                phoneNum: _0x5c4454,
                isChinatelecom: "0",
                systemVersion: "15.4.0",
                authentication: Array.from(_0x4a5126).map(_0x4974c6 => String.fromCharCode(_0x4974c6.charCodeAt(0) + 2)).join("")
              }
            }
          };
          const _0x53aa2a = {
            Cookie: ""
          };
          const _0x56983f = await axios({
            url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
            method: "POST",
            data: _0x44f841,
            headers: _0x53aa2a
          });
          const _0x232de0 = {
            ..._0x56983f.data.responseData.data.loginSuccessResult
          };
          Cache[_0x5b0312] = _0x232de0;
          fs.writeFileSync(ChacePath, JSON.stringify(Cache), "utf8");
        }
      }
      const _0xce6d1d = Cache[_0x5b0312].token;
      const _0x4904dc = Cache[_0x5b0312].userId;
      const _0x25216c = "<Request>\n            <HeaderInfos>\n                <Code>getSingle</Code>\n                <Timestamp>" + TIMEstamp() + "</Timestamp>\n                <BroadAccount></BroadAccount>\n                <BroadToken></BroadToken>\n                <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                <ShopId>20002</ShopId>\n                <Source>110003</Source>\n                <SourcePassword>Sid98s</SourcePassword>\n                <Token>" + _0xce6d1d + "</Token>\n                <UserLoginName>" + _0x5b0312 + "</UserLoginName>\n            </HeaderInfos>\n            <Content>\n                <Attach>test</Attach>\n                <FieldData>\n                    <TargetId>" + encrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x4904dc) + "</TargetId>\n                    <Url>4a6862274835b451</Url>\n                </FieldData>\n            </Content>\n        </Request>";
      const _0x5e75f9 = await axios({
        url: "https://appgologin.189.cn:9031/map/clientXML",
        method: "POST",
        data: _0x25216c,
        headers: {
          "Content-Type": "application/xml;charset=utf-8",
          Cookie: ""
        }
      });
      if (String(_0x5e75f9.data).includes("过期") || String(_0x5e75f9.data).includes("校验错误")) {
        {
          delete Cache[_0x5b0312];
          fs.writeFileSync(ChacePath, JSON.stringify(Cache), "utf8");
          return await loginPhoneMain(_0x5b0312, _0x4a5126);
        }
      }
      const _0x5d060a = _0x5e75f9.data.split("<Ticket>")[1].split("</Ticket>")[0];
      const _0x3049e6 = decrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x5d060a);
      const _0x484977 = {
        ...Cache[_0x5b0312],
        uid: _0x3049e6,
        password: _0x4a5126,
        phoneNbr: _0x5b0312
      };
      return _0x484977;
    }
  } catch (_0x1e910d) {
    console.error("账号 " + maskPhone(_0x5b0312) + " 登录失败:", _0x1e910d.message);
    return false;
  }
}
function aesEcbEncrypt(_0x1bac9e, _0x3ebc05) {
  if (![16, 24, 32].includes(_0x3ebc05.length)) {
    {
      throw new Error("AES密钥长度必须为16/24/32字节");
    }
  }
  const _0x3867e8 = CryptoJS.enc.Utf8.parse(_0x3ebc05);
  const _0x246a85 = CryptoJS.AES.encrypt(_0x1bac9e, _0x3867e8, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return _0x246a85.toString();
}
async function userLogin(_0x1d58e0) {
  try {
    {
      const _0x45ecb1 = {
        ticket: _0x1d58e0.uid,
        backUrl: "https%3A%2F%2Fwapact.189.cn%3A9001",
        platformCode: "P201010301",
        loginType: 2
      };
      const _0x334ee8 = aesEcbEncrypt(JSON.stringify(_0x45ecb1), "telecom_wap_2018");
      const _0x1a14b0 = await axios({
        url: "https://wapact.189.cn:9001/unified/user/login",
        method: "POST",
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36",
          "Content-Type": "application/json;charset=UTF-8",
          Accept: "application/json, text/javascript, */*; q=0.01",
          Cookie: ""
        },
        transformRequest: (_0x29dcbc, _0x141b2a) => {
          {
            const _0x13d449 = _0x141b2a["Content-Type"]?.["includes"]("application/json");
            return typeof _0x29dcbc === "string" && _0x13d449 ? _0x29dcbc : _0x29dcbc;
          }
        },
        data: _0x334ee8
      });
      _0x1d58e0.Authorization = "Bearer " + _0x1a14b0.data.biz.token;
      await queryInfo(_0x1d58e0);
    }
  } catch (_0x51269d) {
    console.error("账号 " + maskPhone(_0x1d58e0.phoneNbr) + " 统一登录失败:", _0x51269d.message);
  }
}
async function queryInfo(_0x576769) {
  try {
    {
      const _0x5bf4bd = await axios({
        url: "https://wapact.189.cn:9001/gateway/golden/api/queryTurnTable?userType=1&_=" + new Date().valueOf(),
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36",
          Cookie: "",
          Authorization: _0x576769.Authorization
        }
      });
      await handleLottery(_0x576769, _0x5bf4bd.data.biz.wzTurntable.code);
    }
  } catch (_0x321ae8) {
    console.error("账号 " + maskPhone(_0x576769.phoneNbr) + " 查询转盘失败:", _0x321ae8.message);
  }
}
async function handleLottery(_0x3c351b, _0x10336b) {
  try {
    {
      const _0x1a4ea8 = await axios({
        url: "https://wapact.189.cn:9001/gateway/standQuery/detail/check?activityId=" + _0x10336b + "&_=" + new Date().valueOf(),
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36",
          Cookie: "",
          Authorization: _0x3c351b.Authorization
        }
      });
      const {
        userMaximum: _0x3d1b75,
        userCount: _0x2a41f9
      } = _0x1a4ea8.data.biz.resultInfo;
      const _0x5d8cb6 = _0x3d1b75 - _0x2a41f9;
      console.log("账号 " + maskPhone(_0x3c351b.phoneNbr) + " 金豆转盘可抽奖次数:", _0x5d8cb6);
      if (_0x5d8cb6 > 0) {
        {
          for (let _0x2436c8 = 0; _0x2436c8 < _0x5d8cb6; _0x2436c8++) {
            {
              let _0x14d2be = 0;
              while (_0x14d2be < 1) {
                {
                  try {
                    {
                      const _0x49cc9c = {
                        activityId: _0x10336b
                      };
                      const _0x256c3f = await axios({
                        url: "https://wapact.189.cn:9001/gateway/golden/api/lottery",
                        method: "POST",
                        headers: {
                          "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36",
                          Cookie: "",
                          Authorization: _0x3c351b.Authorization
                        },
                        data: _0x49cc9c
                      });
                      console.log("第 " + (_0x2436c8 + 1) + " 次抽奖结果:", _0x256c3f.data?.["biz"]?.["resultInfo"]?.["title"] || "抽奖失败");
                      await waitt(3000);
                      break;
                    }
                  } catch (_0x150aa0) {
                    {
                      _0x14d2be++;
                      console.error("第 " + (_0x2436c8 + 1) + " 次抽奖重试:", _0x150aa0.message);
                      await waitt(3000);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } catch (_0x1a71af) {
    {
      console.error("账号 " + maskPhone(_0x3c351b.phoneNbr) + " 抽奖处理失败:", _0x1a71af.message);
    }
  }
}
async function ssoHomLogin(_0x404a6d) {
  try {
    {
      const _0x25222e = await axios({
        url: "https://wappark.189.cn/jt-sign/ssoHomLogin?ticket=" + _0x404a6d,
        method: "GET",
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36",
          Cookie: ""
        }
      });
      return _0x25222e.data;
    }
  } catch (_0x427e16) {
    {
      console.error("SSO登录失败:", _0x427e16.message);
      return null;
    }
  }
}
async function webSign(_0x17f77b, _0x510575) {
  try {
    {
      const _0xd4de9a = {
        phone: _0x17f77b.phoneNbr,
        sysType: "",
        date: new Date().getTime()
      };
      const _0x3368b9 = await axios({
        url: "https://wappark.189.cn/jt-sign/webSign/sign",
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          sign: _0x510575.sign,
          Cookie: ""
        },
        data: {
          encode: encrypt_aes(_0xd4de9a)
        }
      });
      console.log("账号 " + maskPhone(_0x17f77b.phoneNbr) + " 签到结果:", _0x3368b9.data.data.msg);
    }
  } catch (_0x39d996) {
    {
      console.error("账号 " + maskPhone(_0x17f77b.phoneNbr) + " 签到失败:", _0x39d996.message);
    }
  }
}
async function userStatusInfo(_0x1b6dee, _0x105f2a) {
  try {
    {
      const _0x204131 = {
        phone: _0x1b6dee.phoneNbr
      };
      const _0x45120d = await axios({
        url: "https://wappark.189.cn/jt-sign/api/home/userStatusInfo",
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          sign: _0x105f2a.sign,
          Cookie: ""
        },
        data: {
          para: encrypt_rsa_hex(_0x204131)
        }
      });
      console.log("账号 " + maskPhone(_0x1b6dee.phoneNbr) + " 连签7天进度:", _0x45120d.data.data.signDay);
      _0x45120d.data.data.signDay === "7" && (console.log("开始领取连签7天奖励"), await exchangePrize(_0x1b6dee, _0x105f2a, "7"));
    }
  } catch (_0xf6d3c5) {
    console.error("账号 " + maskPhone(_0x1b6dee.phoneNbr) + " 查询连签状态失败:", _0xf6d3c5.message);
  }
}
async function continueSignDays(_0x6ef50d, _0x261d5e) {
  try {
    {
      const _0x493591 = {
        phone: _0x6ef50d.phoneNbr
      };
      const _0x39ed32 = await axios({
        url: "https://wappark.189.cn/jt-sign/webSign/continueSignDays",
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          sign: _0x261d5e.sign,
          Cookie: ""
        },
        data: {
          para: encrypt_rsa_hex(_0x493591)
        }
      });
      console.log("账号 " + maskPhone(_0x6ef50d.phoneNbr) + " 累签天数:", _0x39ed32.data.continueSignDays);
      const _0x5d34b0 = _0x39ed32.data.continueSignDays;
      if (_0x5d34b0 === "15" || _0x5d34b0 === "28") {
        {
          console.log("开始领取累签" + _0x5d34b0 + "天奖励");
          await waitt(3000);
          await exchangePrize(_0x6ef50d, _0x261d5e, _0x5d34b0);
        }
      }
    }
  } catch (_0x34dfd1) {
    {
      console.error("账号 " + maskPhone(_0x6ef50d.phoneNbr) + " 查询累签状态失败:", _0x34dfd1.message);
    }
  }
}
async function exchangePrize(_0x31b9cf, _0x5bbb83, _0x5005cd) {
  try {
    {
      const _0x2b18c2 = {
        phone: _0x31b9cf.phoneNbr,
        type: _0x5005cd
      };
      const _0x12d006 = await axios({
        url: "https://wappark.189.cn/jt-sign/webSign/exchangePrize",
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          sign: _0x5bbb83.sign,
          Cookie: ""
        },
        data: {
          para: encrypt_rsa_hex(_0x2b18c2)
        }
      });
      console.log("连签" + _0x5005cd + "天奖励领取结果:", _0x12d006.data?.["prizeDetail"]?.["biz"]?.["winTitle"] || _0x12d006.data.resoultMsg || _0x12d006.data.msg);
    }
  } catch (_0x49dcaa) {
    {
      console.error("连签" + _0x5005cd + "天奖励领取失败:", _0x49dcaa.message);
      await waitt(2000);
      await exchangePrize(_0x31b9cf, _0x5bbb83, _0x5005cd);
    }
  }
}
async function getTakList(_0x1eaf08, _0xe4455f) {
  try {
    {
      const _0x36b63f = {
        phone: _0x1eaf08.phoneNbr,
        shopId: "20001",
        type: "hg_qd_zrwzjd"
      };
      const _0x1e3451 = await axios({
        url: "https://wappark.189.cn/jt-sign/webSign/homepage",
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          sign: _0xe4455f.sign,
          Cookie: ""
        },
        data: {
          para: encrypt_rsa_hex(_0x36b63f)
        }
      });
      for (const _0x111dd6 of _0x1e3451.data.data.biz.adItems) {
        {
          const {
            taskState: _0x582477,
            contentOne: _0x36a244,
            title: _0x2e5415
          } = _0x111dd6;
          ["0", "1"].includes(_0x582477) && _0x36a244 === "18" && (console.log("开始完成任务: " + _0x2e5415), await polymerize(_0x1eaf08, _0xe4455f, _0x111dd6), await waitt(1500));
        }
      }
    }
  } catch (_0x1adfe4) {
    console.error("账号 " + maskPhone(_0x1eaf08.phoneNbr) + " 任务处理失败:", _0x1adfe4.message);
  }
}
async function polymerize(_0x1cc414, _0x17274b, _0x35a8bf) {
  try {
    {
      const _0x3c6c80 = {
        phone: _0x1cc414.phoneNbr,
        jobId: _0x35a8bf.taskId
      };
      const _0x60dec = await axios({
        url: "https://wappark.189.cn/jt-sign/webSign/polymerize",
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          sign: _0x17274b.sign,
          Cookie: ""
        },
        data: {
          para: encrypt_rsa_hex(_0x3c6c80)
        }
      });
      console.log(_0x35a8bf.title + " 完成结果:", _0x60dec.data.resoultMsg);
    }
  } catch (_0x533042) {
    {
      console.error(_0x35a8bf.title + " 完成失败:", _0x533042.message);
    }
  }
}
async function food(_0x26eea7, _0x51c162) {
  try {
    {
      const _0x25dc03 = {
        phone: _0x26eea7.phoneNbr
      };
      const _0x575f93 = 10;
      for (let _0x384e28 = 1; _0x384e28 <= _0x575f93; _0x384e28++) {
        {
          try {
            {
              const _0x4ad052 = await axios({
                url: "https://wappark.189.cn/jt-sign/paradise/food",
                method: "POST",
                headers: {
                  "Content-Type": "application/json;charset=utf-8",
                  sign: _0x51c162.sign,
                  Cookie: ""
                },
                data: {
                  para: encrypt_rsa_hex(_0x25dc03)
                }
              });
              console.log("第 " + _0x384e28 + " 次喂食结果:", _0x4ad052.data.resoultMsg);
              if (_0x4ad052.data.resoultMsg === "今天已达到最大喂食次数") {
                {
                  console.log("今日喂食次数已达上限");
                  break;
                }
              }
              _0x384e28 < _0x575f93 && (await waitt(1000));
            }
          } catch (_0x41a04c) {
            {
              console.error("第 " + _0x384e28 + " 次喂食失败:", _0x41a04c.message);
              break;
            }
          }
        }
      }
    }
  } catch (_0x3492f8) {
    {
      console.error("账号 " + maskPhone(_0x26eea7.phoneNbr) + " 喂食功能失败:", _0x3492f8.message);
    }
  }
}
async function month_jml_preCost(_0x187e81) {
  try {
    {
      const _0x5129cf = await axios({
        url: "https://wappark.189.cn/jt-sign/short/message/preCost",
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Cookie: ""
        },
        data: {
          phone: encrypt_aes(_0x187e81.phoneNbr),
          activityCode: "shortMesssge"
        }
      });
      if (_0x5129cf.data.resoultCode === "0") {
        {
          const _0x3bccb4 = _0x5129cf.data.data.resoultMsg || "领取成功";
          const _0x1aaefc = _0x5129cf.data.resoultMsg;
          await month_jml_userCost(_0x187e81, _0x3bccb4, _0x1aaefc);
          await month_jml_receive(_0x187e81, _0x1aaefc);
          await month_jml_getCount(_0x187e81, _0x1aaefc);
          await month_jml_refresh(_0x187e81, _0x1aaefc);
        }
      }
    }
  } catch (_0x58875b) {
    console.error("账号 " + maskPhone(_0x187e81.phoneNbr) + " 每月见面礼处理失败:", _0x58875b.message);
  }
}
async function month_jml_userCost(_0x4fdee4, _0x3a6fca, _0x57f9cf) {
  try {
    {
      const _0x17af58 = await axios({
        url: "https://wappark.189.cn/jt-sign/short/message/userCost",
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Cookie: ""
        },
        data: {
          phone: encrypt_aes(_0x4fdee4.phoneNbr),
          activityCode: "shortMesssge",
          flag: _0x57f9cf
        }
      });
      _0x17af58.data.resoultCode === "0" && console.log("见面礼" + _0x3a6fca + ":", _0x17af58.data.data.map(_0x12a7e1 => _0x12a7e1.pizeName));
    }
  } catch (_0x2f9c32) {
    console.error("month_jml_userCost 失败:", _0x2f9c32.message);
  }
}
async function month_jml_receive(_0x284b4c, _0x2b0502) {
  try {
    const _0x5f5315 = {
      phone: _0x284b4c.phoneNbr,
      flag: _0x2b0502
    };
    const _0x5e36e6 = await axios({
      url: "https://wappark.189.cn/jt-sign/lottery/receive",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x5f5315)
      }
    });
    if (_0x5e36e6.data.code === "0") {
      {
        console.log("领取APP抽奖次数成功");
      }
    } else {
      console.log("领取APP抽奖次数失败: " + _0x5e36e6.data.msg);
    }
  } catch (_0x3bfbc5) {
    console.error("month_jml_receive 失败:", _0x3bfbc5.message);
  }
}
async function month_jml_getCount(_0x513961, _0xc9c6a7) {
  const _0x167ae4 = [202201, 202202, 202203];
  try {
    const _0x46b0c4 = {
      phone: _0x513961.phoneNbr,
      flag: _0xc9c6a7
    };
    const _0x38fa5f = await axios({
      url: "https://wappark.189.cn/jt-sign/lottery/getCount",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x46b0c4)
      }
    });
    if (_0x38fa5f.data.code === "0") {
      const _0x3f0a31 = _0x38fa5f.data.video.map(_0xbda3ad => _0xbda3ad.videoType) || [];
      const _0x107091 = _0x167ae4.filter(_0x429a98 => !_0x3f0a31.includes(_0x429a98));
      let _0x4ac41c = false;
      for (const _0x6dddf8 of _0x107091) {
        if (_0x4ac41c) {
          const _0x3ca85a = Math.floor(Math.random() * 5000) + 3000;
          await waitt(_0x3ca85a);
        }
        await month_jml_addVideoCount(_0x513961, _0x6dddf8, _0xc9c6a7);
        _0x4ac41c = true;
      }
    } else {
      console.log("查询看视频得抽奖机会失败: " + _0x38fa5f.data.msg);
    }
  } catch (_0x5dc4fd) {
    console.log("month_jml_getCount 失败: " + _0x5dc4fd.message);
  }
}
async function month_jml_addVideoCount(_0x5306bd, _0x2c290b, _0x43499a) {
  try {
    const _0x37128c = {
      phone: _0x5306bd.phoneNbr,
      videoType: _0x2c290b,
      flag: _0x43499a
    };
    const _0x3a15e7 = await axios({
      url: "https://wappark.189.cn/jt-sign/lottery/addVideoCount",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x37128c)
      }
    });
    _0x3a15e7.data.code === "0" ? console.log("看视频" + _0x2c290b + "得抽奖机会成功") : console.log("看视频" + _0x2c290b + "得抽奖次数失败: " + _0x3a15e7.data.msg);
  } catch (_0x1e1b13) {
    console.log("month_jml_addVideoCount 失败: " + _0x1e1b13.message);
  }
}
async function month_jml_refresh(_0x2dfd67, _0x7f23e0) {
  try {
    const _0xebc3d2 = {
      phone: _0x2dfd67.phoneNbr,
      flag: _0x7f23e0
    };
    const _0x9eb7dd = await axios({
      url: "https://wappark.189.cn/jt-sign/lottery/refresh",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0xebc3d2)
      }
    });
    if (_0x9eb7dd.data.rNumber) {
      let _0xc3278 = _0x9eb7dd.data.rNumber || 0;
      console.log("可抽奖" + _0xc3278 + "次");
      let _0x5cfac0 = false;
      while (_0xc3278-- > 0) {
        if (_0x5cfac0) {
          const _0x317579 = Math.floor(Math.random() * 5000) + 5000;
          await waitt(_0x317579);
        }
        await month_jml_lotteryRevice(_0x2dfd67, _0x7f23e0);
        _0x5cfac0 = true;
      }
    } else {
      console.log("查询抽奖次数失败");
    }
  } catch (_0x31f3d9) {
    console.log("month_jml_refresh 失败: " + _0x31f3d9.message);
  }
}
async function month_jml_lotteryRevice(_0x2ec3b9, _0x214b7d) {
  try {
    const _0x42cfeb = {
      phone: _0x2ec3b9.phoneNbr,
      flag: _0x214b7d
    };
    const _0xb9b58b = await axios({
      url: "https://wappark.189.cn/jt-sign/lottery/lotteryRevice",
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Cookie: ""
      },
      data: {
        para: encrypt_rsa_hex(_0x42cfeb)
      }
    });
    _0xb9b58b.data.code === "0" ? console.log("每月见面礼抽奖结果: " + _0xb9b58b.data.rname) : console.log("每月见面礼抽奖失败: " + _0xb9b58b.data.msg);
  } catch (_0x55c811) {
    console.log("month_jml_lotteryRevice 失败: " + _0x55c811.message);
  }
}
async function main(_0x17d9b4, _0x5bc284) {
  try {
    const _0x615d02 = await loginPhoneMain(_0x17d9b4, _0x5bc284);
    if (!_0x615d02) {
      console.log("账号 " + maskPhone(_0x17d9b4) + " 登录失败，跳过后续操作");
      return;
    }
    await userLogin(_0x615d02);
    const _0x4068fa = await ssoHomLogin(_0x615d02.uid);
    if (_0x4068fa) {
      await webSign(_0x615d02, _0x4068fa);
      await userStatusInfo(_0x615d02, _0x4068fa);
      await waitt(3000);
      await continueSignDays(_0x615d02, _0x4068fa);
      await getTakList(_0x615d02, _0x4068fa);
      await food(_0x615d02, _0x4068fa);
    }
    await waitt(2000);
  } catch (_0x2dde42) {
    console.error("账号 " + maskPhone(_0x17d9b4) + " 主流程失败:", _0x2dde42.message);
  }
}
async function begin() {
  const _0x305d75 = await validateLkey();
  if (!_0x305d75) {
    console.log("❌ Lkey验证失败，脚本停止运行");
    const _0x401c20 = globalLogs.join("\n");
    await sendNotify("电信任务提醒", "❌ Lkey验证失败\n\n" + _0x401c20);
    process.exit(1);
  }
  try {
    Cache = JSON.parse(fs.readFileSync(ChacePath, "utf8"));
  } catch (_0x184887) {
    fs.writeFileSync(ChacePath, JSON.stringify({}), "utf8");
    Cache = {};
  }
  console.log("✅ Lkey验证通过，开始执行任务");
  console.log("📱 共找到" + userPhone.length + "个账号，开始执行任务");
  try {
    for (let _0x5e479a = 0; _0x5e479a < userPhone.length; _0x5e479a++) {
      const _0x56b42f = userPhone[_0x5e479a];
      console.log("\n====== 账号[" + (_0x5e479a + 1) + "] " + maskPhone(_0x56b42f.phone) + " ======");
      await main(_0x56b42f.phone, _0x56b42f.password);
    }
    const _0x2845cf = globalLogs.join("\n");
    await sendNotify("电信任务完成通知", _0x2845cf);
    console.log("📧 所有任务完成，日志已推送");
  } catch (_0x252409) {
    console.error("全局执行错误:", _0x252409.message);
    const _0x1e9a8f = globalLogs.join("\n");
    await sendNotify("电信任务错误通知", "❌ 执行过程中出现错误\n\n" + _0x1e9a8f);
  } finally {
    process.exit(0);
  }
}
begin();