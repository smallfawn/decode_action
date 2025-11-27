//Thu Nov 27 2025 18:16:53 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const axios = require("axios"),
  CryptoJS = require("crypto-js"),
  fs = require("fs"),
  JSEncrypt = require("node-jsencrypt"),
  {
    v4
  } = require("uuid"),
  nodeRsa = require("node-rsa");
function validateDate() {
  const _0x41fc2b = new Date(),
    _0x288470 = new Date("2099-11-25");
  abc = "npm ERR!code 1\n        npm ERR!path / Users / a.aashiq / Desktop / Projects / sdqui / node_modules / node - sass\n        npm ERR!command failed\n        npm ERR!command sh - c node - gyp rebuild ^\n        npm ERR!1 error generated.\n        npm ERR!make: ** * [Release / obj.target / binding / src / binding.o] Error 1\n        npm ERR!gyp ERR!build error\n        npm ERR!gyp ERR!stack Error: \n        failed with exit code: 2\n        npm ERR!gyp ERR!stack at ChildProcess.onExit(/Users/a.aashiq / Desktop / Projects / sdqui / node_modules / node - gyp / lib / build.js: 262: 23)\n        npm ERR!gyp ERR!stack at ChildProcess.emit(node: events: 365: 28)\n        npm ERR!gyp ERR!stack at Process.ChildProcess._handle.onexit(node: internal / child_process: 290: 12)\n        npm ERR!gyp ERR!System Darwin 20.4 .0\n        npm ERR!gyp ERR!command \"/opt/homebrew/Cellar/node/16.2.0/bin/node\"\n        \"/Users/a.aashiq/Desktop/Projects/sdqui/node_modules/.bin/node-gyp\"\n        \"rebuild\"\n        npm ERR!gyp ERR!cwd / Users / a.aashiq / Desktop / Projects / sdqui / node_modules / node - sass\n        npm ERR!gyp ERR!node - v v16 .2 .0\n        npm ERR!gyp ERR!node - gyp - v v3 .8 .0\n        npm ERR!gyp ERR!not ok\n\n        npm ERR!A complete log of this run can be found in:";
  if (_0x41fc2b > _0x288470) {
    console.log(abc);
    return false;
  }
  return true;
}
async function validateLkey() {
  console.log("✅ 跳过Lkey验证");
  return true;
}
let pubKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB";
const decrypt = new JSEncrypt(),
  mySetTimeout = setTimeout.bind(globalThis);
var encrypt_req = function (_0x521d4f, _0x28a084, _0xd6d5f) {
    var _0x14921b = CryptoJS.enc.Utf8.parse(_0xd6d5f);
    var _0x54c57b = CryptoJS.enc.Utf8.parse(_0x521d4f);
    CryptoJS.DES;
    var _0x131fd3 = CryptoJS.TripleDES.encrypt(_0x14921b, _0x54c57b, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
      iv: CryptoJS.enc.Utf8.parse(_0x28a084)
    });
    return _0x131fd3.ciphertext.toString();
  },
  decrypt_req = function (_0x36a1fd, _0x4970a4, _0x1d3461) {
    var _0x35b25e = CryptoJS.enc.Utf8.parse(_0x36a1fd);
    var _0x302b5c = CryptoJS.enc.Hex.parse(_0x1d3461);
    var _0x1d3461 = CryptoJS.enc.Base64.stringify(_0x302b5c);
    var _0x4e1aac = CryptoJS.TripleDES.decrypt(_0x1d3461, _0x35b25e, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
      iv: CryptoJS.enc.Utf8.parse(_0x4970a4)
    });
    return CryptoJS.enc.Utf8.stringify(_0x4e1aac).toString();
  };
function TIMEstamp() {
  let _0x286134 = new Date();
  var _0x51dcad = _0x286134.getFullYear();
  var _0x38a308 = _0x286134.getMonth() + 1,
    _0x3197a5 = _0x286134.getDate();
  var _0x1f9d73 = _0x286134.getHours();
  var _0x2803e5 = _0x286134.getMinutes(),
    _0x2f4222 = _0x286134.getSeconds();
  if (_0x38a308 < 10) {
    _0x38a308 = "0" + _0x38a308;
  }
  if (_0x3197a5 < 10) {
    _0x3197a5 = "0" + _0x3197a5;
  }
  if (_0x1f9d73 < 10) {
    _0x1f9d73 = "0" + _0x1f9d73;
  }
  if (_0x2803e5 < 10) {
    _0x2803e5 = "0" + _0x2803e5;
  }
  if (_0x2f4222 < 10) {
    _0x2f4222 = "0" + _0x2f4222;
  }
  let _0x253a85 = _0x51dcad + "" + _0x38a308 + "" + _0x3197a5 + "" + _0x1f9d73 + "" + _0x2803e5 + "" + _0x2f4222;
  return _0x253a85;
}
function envtime(_0x1411c3, _0x2ef537 = null) {
  const _0x1aae32 = _0x2ef537 ? new Date(_0x2ef537) : new Date();
  let _0x1955d7 = {
    "M+": _0x1aae32.getMonth() + 1,
    "d+": _0x1aae32.getDate(),
    "H+": _0x1aae32.getHours(),
    "m+": _0x1aae32.getMinutes(),
    "s+": _0x1aae32.getSeconds(),
    "q+": Math.floor((_0x1aae32.getMonth() + 3) / 3),
    S: _0x1aae32.getMilliseconds()
  };
  if (/(y+)/.test(_0x1411c3)) {
    _0x1411c3 = _0x1411c3.replace(RegExp.$1, (_0x1aae32.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (let _0x4db0e1 in _0x1955d7) {
    if (new RegExp("(" + _0x4db0e1 + ")").test(_0x1411c3)) {
      _0x1411c3 = _0x1411c3.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x1955d7[_0x4db0e1] : ("00" + _0x1955d7[_0x4db0e1]).substr(("" + _0x1955d7[_0x4db0e1]).length));
    }
  }
  return _0x1411c3;
}
function maskPhone(_0x5296b8) {
  return _0x5296b8.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3");
}
function wait(_0x579efe) {
  return new Promise(function (_0x2253e1) {
    mySetTimeout(_0x2253e1, _0x579efe);
  });
}
function TIMEstamp1() {
  let _0x8850f4 = new Date();
  var _0x419b0e = _0x8850f4.getFullYear(),
    _0x3f2bdd = _0x8850f4.getMonth() + 1,
    _0x651d96 = _0x8850f4.getDate();
  var _0x31c3ec = _0x8850f4.getHours(),
    _0x183421 = _0x8850f4.getMinutes(),
    _0x9d5555 = _0x8850f4.getSeconds();
  if (_0x3f2bdd < 10) {
    _0x3f2bdd = "0" + _0x3f2bdd;
  }
  if (_0x651d96 < 10) {
    _0x651d96 = "0" + _0x651d96;
  }
  if (_0x31c3ec < 10) {
    _0x31c3ec = "0" + _0x31c3ec;
  }
  if (_0x183421 < 10) {
    _0x183421 = "0" + _0x183421;
  }
  if (_0x9d5555 < 10) {
    _0x9d5555 = "0" + _0x9d5555;
  }
  let _0x371148 = _0x419b0e + "-" + _0x3f2bdd + "-" + _0x651d96 + " " + _0x31c3ec + ":" + _0x183421 + ":" + _0x9d5555;
  return _0x371148;
}
async function waitt(_0x41d0d7) {
  const _0x3cf3aa = Date.now();
  while (Date.now() - _0x3cf3aa < _0x41d0d7) {
    await new Promise(_0x560cf8 => process.nextTick(_0x560cf8));
  }
}
function randomString(_0x499782) {
  var _0x268d4c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    _0x3547e0 = "";
  for (var _0x23aafd = _0x499782; _0x23aafd > 0; --_0x23aafd) {
    _0x3547e0 += _0x268d4c[Math.floor(Math.random() * _0x268d4c.length)];
  }
  return _0x3547e0;
}
async function sendMsg(_0x5d059f, _0x501c69, _0x3f3547 = "", _0x48cb55 = "") {
  const _0x34be87 = {
    url: "",
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    data: {
      appToken: _0x3f3547,
      content: String(_0x5d059f),
      summary: _0x501c69,
      contentType: 1,
      topicIds: [],
      uids: [_0x48cb55],
      verifyPayType: "2"
    }
  };
  try {
    await axios(_0x34be87);
    console.log("Message sent successfully");
  } catch (_0x1f0432) {
    console.error("Failed to send message:", _0x1f0432);
  }
}
async function loginPhone(_0x5acbee, _0x4902e0, _0x1b2843, _0x377875 = false) {
  try {
    decrypt.setPrivateKey(pubKey);
    let _0x2317cf = TIMEstamp(),
      _0x499220 = randomString(16),
      _0x36b0e8 = decrypt.encrypt("iPhone 14 15.4." + _0x499220.substring(0, 12) + _0x5acbee + _0x2317cf + _0x4902e0 + "0$$$0."),
      _0x1be0b2 = "";
    for (let _0x38acdf of _0x5acbee) {
      if (_0x38acdf <= 7) {
        _0x1be0b2 += String(Number(_0x38acdf) + 2);
      } else {
        if (_0x38acdf == 8) {
          _0x1be0b2 += ":";
        } else {
          if (_0x38acdf == 9) {
            _0x1be0b2 += ";";
          }
        }
      }
    }
    const _0x10553e = {
      code: "userLoginNormal",
      timestamp: _0x2317cf,
      broadAccount: "",
      broadToken: "",
      clientType: "#10.5.0#channel50#iPhone 14 Pro Max#",
      shopId: "20002",
      source: "110003",
      sourcePassword: "Sid98s",
      token: "",
      userLoginName: _0x1be0b2
    };
    let _0x57dd88 = {
      headerInfos: _0x10553e,
      content: {
        attach: "test",
        fieldData: {
          loginType: "4",
          accountType: "",
          loginAuthCipherAsymmertric: _0x36b0e8,
          deviceUid: _0x499220,
          phoneNum: _0x1be0b2,
          isChinatelecom: "0",
          systemVersion: "15.4.0",
          authentication: Array.from(_0x4902e0).map(_0x11464e => String.fromCharCode(_0x11464e.charCodeAt(0) + 2)).join("")
        }
      }
    };
    if (!_0x1b2843 || _0x377875) {
      const _0x49b0ed = {
        url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
        method: "POST",
        data: _0x57dd88
      };
      let _0x522e32 = await axios(_0x49b0ed);
      try {
        const _0x29bcbf = {
          ..._0x522e32.data.responseData.data.loginSuccessResult
        };
        _0x1b2843 = _0x29bcbf;
      } catch (_0x5847d6) {
        return false;
      }
    }
    const _0x319754 = {
      ..._0x1b2843
    };
    let _0x5cf5e1 = _0x319754,
      _0x5979ad = _0x1b2843.token,
      _0x5d0b10 = _0x1b2843.userId;
    _0x2317cf = TIMEstamp();
    _0x57dd88 = "<Request>\n                                <HeaderInfos>\n                                    <Code>getSingle</Code>\n                                    <Timestamp>" + _0x2317cf + "</Timestamp>\n                                    <BroadAccount></BroadAccount>\n                                    <BroadToken></BroadToken>\n                                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                                    <ShopId>20002</ShopId>\n                                    <Source>110003</Source>\n                                    <SourcePassword>Sid98s</SourcePassword>\n                                    <Token>" + _0x5979ad + "</Token>\n                                    <UserLoginName>" + _0x5acbee + "</UserLoginName>\n                                </HeaderInfos>\n                                <Content>\n                                    <Attach>test</Attach>\n                                    <FieldData>\n                                        <TargetId>" + encrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x5d0b10) + "</TargetId>\n                                        <Url>4a6862274835b451</Url>\n                                    </FieldData>\n                                </Content>\n                    </Request>";
    const _0x43573b = {
      url: "https://appgologin.189.cn:9031/map/clientXML",
      method: "post",
      data: _0x57dd88,
      headers: {}
    };
    _0x43573b.headers["Content-Type"] = "application/xml;charset=utf-8";
    options = _0x43573b;
    let _0x2779ce = await axios(options);
    if (String(_0x2779ce.data).includes("过期") || String(_0x2779ce.data).includes("校验错误")) {
      return await loginPhone(_0x5acbee, _0x4902e0, _0x1b2843, true);
    }
    let _0x125d37 = _0x2779ce.data.split("<Ticket>")[1].split("</Ticket>")[0],
      _0x125582 = decrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x125d37);
    _0x5cf5e1.uid = _0x125582;
    _0x5cf5e1.password = _0x4902e0;
    _0x5cf5e1.phoneNbr = _0x5acbee;
    return _0x5cf5e1;
  } catch (_0x3ef10c) {
    return false;
  }
}
async function loginPhoneTwo(_0x2e7668, _0x45fd86, _0x191f1b, _0x31a038 = "./Cache.json", _0x135214 = false) {
  try {
    decrypt.setPrivateKey(pubKey);
    let _0x3a33b0 = TIMEstamp(),
      _0x2d0908 = randomString(16),
      _0x217228 = decrypt.encrypt("iPhone 14 15.4." + _0x2d0908.substring(0, 12) + _0x2e7668 + _0x3a33b0 + _0x45fd86 + "0$$$0."),
      _0xa9a70f = "";
    for (let _0x5ac3f9 of _0x2e7668) {
      if (_0x5ac3f9 <= 7) {
        _0xa9a70f += String(Number(_0x5ac3f9) + 2);
      } else {
        if (_0x5ac3f9 == 8) {
          _0xa9a70f += ":";
        } else {
          if (_0x5ac3f9 == 9) {
            _0xa9a70f += ";";
          }
        }
      }
    }
    const _0x4016a3 = {
      code: "userLoginNormal",
      timestamp: _0x3a33b0,
      broadAccount: "",
      broadToken: "",
      clientType: "#10.5.0#channel50#iPhone 14 Pro Max#",
      shopId: "20002",
      source: "110003",
      sourcePassword: "Sid98s",
      token: "",
      userLoginName: _0xa9a70f
    };
    let _0xdc1912 = {
      headerInfos: _0x4016a3,
      content: {
        attach: "test",
        fieldData: {
          loginType: "4",
          accountType: "",
          loginAuthCipherAsymmertric: _0x217228,
          deviceUid: _0x2d0908,
          phoneNum: _0xa9a70f,
          isChinatelecom: "0",
          systemVersion: "15.4.0",
          authentication: Array.from(_0x45fd86).map(_0x324c46 => String.fromCharCode(_0x324c46.charCodeAt(0) + 2)).join("")
        }
      }
    };
    if (!_0x191f1b[_0x2e7668] || _0x135214) {
      const _0x10b359 = {
        url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
        method: "POST",
        data: _0xdc1912
      };
      let _0x3eb51f = await axios(_0x10b359);
      const _0xaf5286 = {
        ..._0x3eb51f.data.responseData.data.loginSuccessResult
      };
      _0x191f1b[_0x2e7668] = _0xaf5286;
      console.log("写入缓存成功");
    }
    const _0x2191fe = {
      ..._0x191f1b[_0x2e7668]
    };
    let _0x2b6f60 = _0x2191fe;
    fs.writeFileSync(_0x31a038, JSON.stringify(_0x191f1b, null, 4), "utf8");
    let _0x61a32f = _0x191f1b[_0x2e7668].token,
      _0x52d562 = _0x191f1b[_0x2e7668].userId;
    _0x3a33b0 = TIMEstamp();
    _0xdc1912 = "<Request>\n\t\t\t\t\t\t\t<HeaderInfos>\n\t\t\t\t\t\t\t\t<Code>getSingle</Code>\n\t\t\t\t\t\t\t\t<Timestamp>" + _0x3a33b0 + "</Timestamp>\n\t\t\t\t\t\t\t\t<BroadAccount></BroadAccount>\n\t\t\t\t\t\t\t\t<BroadToken></BroadToken>\n\t\t\t\t\t\t\t\t<ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n\t\t\t\t\t\t\t\t<ShopId>20002</ShopId>\n\t\t\t\t\t\t\t\t<Source>110003</Source>\n\t\t\t\t\t\t\t\t<SourcePassword>Sid98s</SourcePassword>\n\t\t\t\t\t\t\t\t<Token>" + _0x61a32f + "</Token>\n\t\t\t\t\t\t\t\t<UserLoginName>" + _0x2e7668 + "</UserLoginName>\n\t\t\t\t\t\t\t</HeaderInfos>\n\t\t\t\t\t\t\t<Content>\n\t\t\t\t\t\t\t\t<Attach>test</Attach>\n\t\t\t\t\t\t\t\t<FieldData>\n\t\t\t\t\t\t\t\t\t<TargetId>" + encrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x52d562) + "</TargetId>\n\t\t\t\t\t\t\t\t\t<Url>4a6862274835b451</Url>\n\t\t\t\t\t\t\t\t</FieldData>\n\t\t\t\t\t\t\t</Content>\n\t\t\t\t</Request>";
    const _0xe096d4 = {
      url: "https://appgologin.189.cn:9031/map/clientXML",
      method: "post",
      data: _0xdc1912,
      headers: {}
    };
    _0xe096d4.headers["Content-Type"] = "application/xml;charset=utf-8";
    options = _0xe096d4;
    let _0x1bae7d = await axios(options);
    if (String(_0x1bae7d.data).includes("过期") || String(_0x1bae7d.data).includes("校验错误")) {
      return await loginPhone(_0x2e7668, _0x45fd86, _0x191f1b, _0x31a038, true);
    }
    let _0x3da8a4 = _0x1bae7d.data.split("<Ticket>")[1].split("</Ticket>")[0],
      _0x4b9b39 = decrypt_req("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x3da8a4);
    _0x2b6f60.uid = _0x4b9b39;
    _0x2b6f60.password = _0x45fd86;
    return _0x2b6f60;
  } catch (_0x318a49) {
    console.log(_0x318a49);
    return false;
  }
}
function getTimestamp() {
  return TIMEstamp1();
}
const originalLog = console.log;
console.log = function (..._0x4b048b) {
  const _0x23bd53 = getTimestamp();
  originalLog("[" + _0x23bd53 + "]", ..._0x4b048b);
};
let userPhone = [];
const builtInAccounts = ["17755035658#551214", "15156033465#551214", "19159156276#551214", "13856090941#551214", "18075253368#551214", "18010919135#551214"];
builtInAccounts.forEach(_0x5c7198 => {
  if (_0x5c7198) {
    let _0x472d0a = _0x5c7198.split("#")[0],
      _0x558fc2 = _0x5c7198.split("#")[1];
    const _0x1d939d = {
      phone: _0x472d0a,
      password: _0x558fc2
    };
    userPhone.push(_0x1d939d);
  }
});
console.log(`✅ 已加载 ${userPhone.length} 个账号`);
let userName = "";
if (process?.["env"]?.["dxUserName1"] || "aaabbb") {
  userName = process?.["env"]?.["dxUserName1"] || "aaabbb";
} else {
  process.exit();
}
decrypt.setPrivateKey(pubKey);
let keyContent = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB",
  resKey = "-----BEGIN PUBLIC KEY-----\n" + keyContent + "\n-----END PUBLIC KEY-----",
  rsaJiami = new nodeRsa(resKey);
const _0x1e1fcf = {
  encryptionScheme: "pkcs1"
};
rsaJiami.setOptions(_0x1e1fcf);
let pushAppToken = "",
  liveListAll = [],
  isGetLive = false,
  pushArr = {},
  sendTxt = {},
  runGameId = [],
  Cache = {};
function retry(_0x408ea6 = 3, _0x14bc8c = 1000) {
  return function (_0x82b3c7) {
    return async function (..._0x4520db) {
      let _0x434c77;
      for (let _0x26c02f = 0; _0x26c02f < _0x408ea6; _0x26c02f++) {
        try {
          return await _0x82b3c7.apply(this, _0x4520db);
        } catch (_0x312efb) {
          _0x434c77 = _0x312efb;
          console.log("⚠️ 方法 " + (_0x82b3c7.name || "anonymous") + " 第 " + (_0x26c02f + 1) + " 次重试, 错误: " + _0x312efb.message);
          await new Promise(_0x495d2b => setTimeout(_0x495d2b, _0x14bc8c * (_0x26c02f + 1)));
        }
      }
      throw _0x434c77;
    };
  };
}
async function sendMsg(_0x3f3e2a, _0x2fd4fd) {
  try {
    console.log("📤 准备推送消息到uuid: " + _0x2fd4fd);
    const _0x799070 = {
      appToken: pushAppToken,
      content: _0x3f3e2a,
      summary: "星播客中奖",
      contentType: 2,
      topicIds: [],
      uids: [_0x2fd4fd],
      verifyPayType: "2"
    };
    const _0x17af16 = {
      url: "",
      method: "post",
      headers: {},
      data: _0x799070
    };
    _0x17af16.headers["Content-Type"] = "application/json";
    const _0x103095 = await axios(_0x17af16);
    console.log("📤 消息推送结果: " + (_0x103095.data.success ? "成功" : "失败") + "，响应:", _0x103095.data);
    return _0x103095.data;
  } catch (_0x1419ec) {
    console.error("❌ 消息推送失败:", _0x1419ec.message);
    throw _0x1419ec;
  }
}
async function getUsercode(_0x52118f) {
  console.log("🔑 开始获取usercode（ticket: " + _0x52118f.substring(0, 8) + "...）");
  return retry(5, 2000)(getUsercodeImpl).call(this, _0x52118f);
}
async function getUsercodeImpl(_0x43a26e) {
  const _0x26edeb = {
    method: "get",
    url: "https://xbk.189.cn/xbkapi/api/auth/jump",
    params: {},
    headers: {}
  };
  _0x26edeb.params.userID = _0x43a26e;
  _0x26edeb.params.version = "10.5.0";
  _0x26edeb.params.type = "room";
  _0x26edeb.params.l = "renwu";
  _0x26edeb.headers["User-Agent"] = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1";
  let _0x4f3531 = await axios(_0x26edeb),
    _0x4d3aad = _0x4f3531.request.path,
    _0x159ac2 = _0x4d3aad.split("?")[1].split("&"),
    _0x2f511d = "";
  _0x159ac2.map(_0x169736 => {
    if (_0x169736.split("=")[0] == "usercode") {
      _0x2f511d = _0x169736.split("=")[1];
    }
  });
  console.log("✅ 获取usercode成功（usercode: " + _0x2f511d.substring(0, 8) + "...）");
  return _0x2f511d;
}
async function getToken(_0xf8f43) {
  console.log("🔑 开始获取token（usercode: " + _0xf8f43.substring(0, 8) + "...）");
  return retry(5, 2000)(getTokenImpl).call(this, _0xf8f43);
}
async function getTokenImpl(_0x1626cd) {
  const _0x4407e1 = {
    usercode: _0x1626cd
  };
  const _0x32c934 = {
    method: "post",
    url: "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
    data: _0x4407e1
  };
  let _0x3b4190 = await axios(_0x32c934);
  console.log("✅ 获取token成功（token: " + _0x3b4190.data.data.token.substring(0, 8) + "...）");
  return _0x3b4190.data.data.token;
}
let cacheLive = [];
async function initFloor(_0xe9d928, _0x5da4bf, _0x5bc1dd, _0x5a0abd) {
  console.log("🏠 开始加载直播间数据（省份: " + _0xe9d928 + ", 页码: " + _0x5da4bf + ", khd: " + _0x5bc1dd + "）");
  return retry(3, 3000)(initFloorImpl).call(this, _0xe9d928, _0x5da4bf, _0x5bc1dd, _0x5a0abd);
}
async function initFloorImpl(_0xc66127, _0x3623f7, _0x1592a5, _0x6b5669) {
  if (_0xc66127 == 1 && _0x3623f7 == 1 && _0x1592a5 == 1) {
    cacheLive = [];
    console.log("🏠 初始化直播间数据：开始加载省份1的数据...");
  }
  return new Promise(async (_0x478677, _0x5351cd) => {
    try {
      const _0x196a2d = {
        method: "get",
        url: "https://xbk.189.cn/xbkapi/api/room/index/floor?provinceCode=" + (_0xc66127 < 10 ? "0" + _0xc66127 : _0xc66127 + "") + "&pageType=1&page=" + _0x3623f7 + "&khd=" + _0x1592a5,
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
          Authorization: "Bearer " + rsaJiami.encrypt(_0x6b5669, "base64")
        }
      };
      let _0x2187a6 = await axios(_0x196a2d),
        _0x4c9e79 = new Date().valueOf();
      _0x2187a6?.["data"]?.["data"]?.["map"](_0x2e8dac => {
        if (_0x2e8dac.liveType == 2 || _0x2e8dac.liveType == 1) {
          let _0x43759c = new Date(_0x2e8dac.liveStartTime.replace(/-/g, "/")).valueOf();
          if (_0x4c9e79 - 604800000 < _0x43759c) {
            cacheLive.push(_0x2e8dac);
          }
        }
      });
      async function _0x2c253c(_0x2cc967, _0x2c1ee5, _0x359e66, _0x17c51e) {
        try {
          _0x2c1ee5++;
          console.log("🏠 加载直播间数据：省份" + _0x2cc967 + "，第" + _0x2c1ee5 + "页");
          const _0x2f5e4b = {
            method: "get",
            url: "https://xbk.189.cn/xbkapi/api/room/index/floor?provinceCode=" + (_0x2cc967 < 10 ? "0" + _0x2cc967 : _0x2cc967 + "") + "&pageType=1&page=" + _0x2c1ee5 + "&khd=" + _0x359e66,
            headers: {
              "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
              Authorization: "Bearer " + rsaJiami.encrypt(_0x17c51e, "base64")
            }
          };
          let _0x4df32c = await axios(_0x2f5e4b),
            _0xd3af00 = new Date().valueOf(),
            _0x46ea9f = 0;
          _0x4df32c?.["data"]?.["data"]?.["map"](_0x135c4e => {
            if (_0x135c4e.liveType == 2 || _0x135c4e.liveType == 1) {
              let _0x4b358b = new Date(_0x135c4e.liveStartTime.replace(/-/g, "/")).valueOf();
              if (_0xd3af00 - 604800000 < _0x4b358b) {
                cacheLive.push(_0x135c4e);
              }
              _0x46ea9f++;
            }
          });
          console.log("🏠 第" + _0x2c1ee5 + "页加载完成，新增" + _0x46ea9f + "个有效直播间，累计" + cacheLive.length + "个");
          if (_0x46ea9f > 0) {
            await _0x2c253c(_0x2cc967, _0x2c1ee5, _0x359e66, _0x17c51e);
          } else {
            if (_0x359e66 == 1) {
              console.log("🏠 省份" + _0x2cc967 + "的khd=1加载完成，开始加载khd=2");
              _0x359e66 = 2;
              _0x478677(await initFloor(_0x2cc967, 1, _0x359e66, _0x17c51e));
            } else {
              if (_0x359e66 == 2) {
                console.log("🏠 省份" + _0x2cc967 + "的khd=2加载完成，开始处理数据");
                cacheLive = fn2(cacheLive);
                cacheLive.sort((_0x318dfc, _0x8d9ffb) => {
                  let _0x435a4c = new Date(_0x318dfc.liveStartTime.replace(/-/g, "/")).valueOf(),
                    _0x592301 = new Date(_0x8d9ffb.liveStartTime.replace(/-/g, "/")).valueOf();
                  return _0x435a4c - _0x592301;
                });
                cacheLive.sort((_0xa8a582, _0x514d5a) => {
                  return _0x514d5a.liveType - _0xa8a582.liveType;
                });
                console.log("✅ 直播间数据加载完成，共" + cacheLive.length + "个有效直播间（仅使用省份1数据）");
                fs.writeFileSync("./liveList.json", JSON.stringify(cacheLive), "utf8");
                liveListAll = JSON.parse(fs.readFileSync("./liveList.json", "utf8"));
                console.log("💾 直播间数据已写入本地文件，数量: " + liveListAll.length);
                isGetLive = true;
                _0x478677(cacheLive);
              }
            }
          }
        } catch (_0xf37d4c) {
          console.error("❌ 加载下一页直播间数据失败:", _0xf37d4c.message);
          await _0x2c253c(_0x2cc967, _0x2c1ee5, _0x359e66, _0x17c51e);
        }
      }
      await _0x2c253c(_0xc66127, _0x3623f7, _0x1592a5, _0x6b5669);
    } catch (_0x5055cf) {
      console.error("❌ 初始化直播间数据失败:", _0x5055cf.message);
      _0x478677(await initFloor(_0xc66127, _0x3623f7, _0x1592a5, _0x6b5669));
    }
  });
}
async function getGoodList(_0xef9a7f, _0x446c44, _0x41bf23) {
  console.log("🛒 获取直播间商品：liveId=" + _0xef9a7f + "，第" + _0x446c44 + "页");
  return retry(3, 2000)(getGoodListImpl).call(this, _0xef9a7f, _0x446c44, _0x41bf23);
}
async function getGoodListImpl(_0x3fe8ce, _0xdc0639, _0x49f0cc) {
  try {
    const _0x1aaacc = {
      method: "get",
      url: "https://xbk.189.cn/xbkapi/lteration/room/getLiveGoodsList?liveId=" + _0x3fe8ce + "&list_type=ordinary&page=" + _0xdc0639,
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
        Authorization: "Bearer " + rsaJiami.encrypt(_0x49f0cc, "base64")
      }
    };
    let _0x4802ec = await axios(_0x1aaacc);
    console.log("🛒 直播间商品获取成功：liveId=" + _0x3fe8ce + "，第" + _0xdc0639 + "页，共" + (_0x4802ec.data?.["data"]?.["count"] || 0) + "个商品");
    return _0x4802ec.data;
  } catch (_0x38e923) {
    console.error("❌ 获取直播间商品列表失败:", _0x38e923.message);
    throw _0x38e923;
  }
}
async function getFile() {
  console.log("📷 开始获取验证码图片");
  return retry(5, 1000)(getFileImpl).call(this);
}
async function getFileImpl() {
  const _0xd35388 = v4(),
    _0x495bc4 = {
      url: "https://xbk.189.cn/xbkapi/api/auth/captcha?guid=" + _0xd35388,
      method: "GET",
      responseType: "arraybuffer"
    };
  let _0x367c05 = await axios(_0x495bc4);
  const _0x4fe526 = Buffer.from(_0x367c05.data, "binary").toString("base64");
  console.log("📷 验证码图片获取成功");
  return {
    file: _0x367c05.data,
    base64: "data:image/png;base64," + _0x4fe526,
    uuid: _0xd35388
  };
}
async function getOcr() {
  console.log("🔍 开始识别验证码");
  return retry(5, 1000)(getOcrImpl).call(this);
}
async function getOcrImpl() {
  let _0xe9498b = await getFile();
  const _0x4ef3b8 = process?.["env"]?.["dxocr"] || "http://221.224.163.211:7777";
  console.log("🔍从环境变量dxocr获取OCR服务URL，如果没有设置则默认使用我的！");
  const _0x5e2651 = {
    image: _0xe9498b.base64,
    userName: userName
  };
  const _0x41b7c5 = {
    url: "" + _0x4ef3b8,
    method: "post",
    headers: {},
    data: _0x5e2651
  };
  _0x41b7c5.headers["Content-Type"] = "application/x-www-form-urlencoded";
  let _0x4bc960 = await axios(_0x41b7c5);
  if (_0x4bc960.data.code == 200) {
    let _0x1fdc9b = _0x4bc960.data.data,
      _0x4f2b42 = _0x1fdc9b.split("="),
      _0x18ebcc = "";
    _0x4f2b42.length > 1 ? _0x18ebcc = _0x4f2b42[0] : _0x18ebcc = _0x1fdc9b.split("x")[0] + "+" + _0x1fdc9b.split("x")[1];
    let _0x148ddd = eval("" + _0x18ebcc);
    console.log("🔍 验证码识别成功：计算结果=" + _0x148ddd);
    const _0x2b4542 = {
      data: _0x148ddd,
      uuid: _0xe9498b.uuid
    };
    return _0x2b4542;
  }
  throw new Error("OCR识别失败");
}
async function lotteryDo(_0x359b67, _0x1bb316, _0x1e2928, _0x2f82ce, _0xde2aef) {
  console.log("🎰 开始抽奖：liveId=" + _0x359b67 + "，active_code=" + _0x1bb316 + "，手机号=" + maskPhone(_0x2f82ce));
  try {
    let _0x350ea6 = await getOcr();
    const _0x4cfaac = {
      active_code: _0x1bb316,
      captcha: _0x350ea6.data,
      guid: _0x350ea6.uuid,
      liveId: _0x359b67,
      period: "1"
    };
    let _0x490e1b = {
        method: "post",
        url: "https://xbk.189.cn/xbkapi/active/v2/lottery/do",
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
          Authorization: "Bearer " + rsaJiami.encrypt(_0x1e2928, "base64")
        },
        data: _0x4cfaac
      },
      _0x4ebe0a = await axios(_0x490e1b);
    if (_0x4ebe0a?.["data"]?.["msg"] === "success") {
      const _0x188d66 = _0x4ebe0a?.["data"]?.["data"]?.["title"];
      console.log("🎉 抽奖成功！手机号: " + maskPhone(_0x2f82ce) + ", 获得: " + _0x188d66);
      if (!pushArr[_0xde2aef]) {
        pushArr[_0xde2aef] = {};
      }
      pushArr[_0xde2aef][_0x2f82ce] = "<div>手机号: " + maskPhone(_0x2f82ce) + ",抽奖成功, 获得:<span style=\"color: red;\">" + _0x188d66 + "</span></div>";
    } else {
      if (_0x4ebe0a?.["data"]?.["msg"] === "抽奖机会不足") {
        console.log("⚠️ 抽奖机会不足：手机号=" + maskPhone(_0x2f82ce));
      } else {
        if (_0x4ebe0a?.["data"]?.["msg"] === "图形验证码校验未通过") {
          console.log("⚠️ 图形验证码校验未通过，重试：手机号=" + maskPhone(_0x2f82ce));
          await wait(6000);
          await lotteryDo(_0x359b67, _0x1bb316, _0x1e2928, _0x2f82ce, _0xde2aef);
        } else {
          _0x4ebe0a?.["data"]?.["msg"]?.["includes"]("操作过于频繁") ? (console.log("⚠️ 操作过于频繁，重试：手机号=" + maskPhone(_0x2f82ce)), await wait(6000), await lotteryDo(_0x359b67, _0x1bb316, _0x1e2928, _0x2f82ce, _0xde2aef)) : console.log("🎰 抽奖结果：" + (_0x4ebe0a?.["data"]?.["data"]?.["title"] || _0x4ebe0a?.["data"]?.["msg"]) + "，手机号=" + maskPhone(_0x2f82ce));
        }
      }
    }
  } catch (_0x1229ad) {
    console.error("❌ 抽奖过程错误：" + _0x1229ad.message + "，手机号=" + maskPhone(_0x2f82ce));
    await wait(6000);
    await lotteryDo(_0x359b67, _0x1bb316, _0x1e2928, _0x2f82ce, _0xde2aef);
  }
}
function extractNumbersWithDecimalsAndNegatives(_0x24b482) {
  const _0x75268b = /-?\d+(\.\d+)?/g,
    _0x6f3f2a = _0x24b482.match(_0x75268b);
  return _0x6f3f2a ? _0x6f3f2a.map(Number) : [];
}
async function getStart(_0x52b0c6) {
  console.log("🔍 开始检查可抽奖活动");
  let _0x47862c = [];
  let _0x3b20ab = JSON.parse(JSON.stringify(liveListAll));
  console.log("🔍 开始检查直播间商品（共" + _0x3b20ab.length + "个直播间）");
  try {
    let _0x14e3f6 = _0x3b20ab.map(async _0x3f3c39 => {
      let _0x1c8953 = await getGoodList(_0x3f3c39.liveId, 1, _0x52b0c6);
      if (_0x1c8953?.["data"]?.["list"]?.["length"] == _0x1c8953?.["data"]?.["count"]) {
        _0x1c8953?.["data"]?.["list"]?.["map"](async _0x33faba => {
          if (_0x33faba.activeCode && !runGameId.includes(_0x33faba.activeCode)) {
            _0x33faba.liveId = _0x3f3c39?.["liveId"];
            _0x47862c.push(_0x33faba);
            console.log("🎁 发现新的可抽奖活动：liveId=" + _0x33faba.liveId + "，直播间名称=" + _0x3f3c39.title + "，activeCode=" + _0x33faba.activeCode);
            runGameId.push(_0x33faba.activeCode);
          } else {
            if (_0x33faba.activeCode) {
              console.log("ℹ️ 已抽取过的活动，跳过：activeCode=" + _0x33faba.activeCode);
            }
          }
        });
      } else {
        console.log("⚠️ 直播间商品数量不一致：liveId=" + _0x3f3c39.liveId + "，返回" + (_0x1c8953?.["data"]?.["list"]?.["length"] || 0) + "个，实际" + (_0x1c8953?.["data"]?.["count"] || 0) + "个");
      }
    });
    await Promise.all(_0x14e3f6);
    const _0x4681d1 = _0x47862c.reduce((_0x5713cb, _0x1b899d) => {
      const _0x3571a2 = _0x1b899d.liveId + "-" + _0x1b899d.activeCode;
      if (!_0x5713cb.some(_0x583d75 => _0x583d75.liveId + "-" + _0x583d75.activeCode === _0x3571a2)) {
        _0x5713cb.push(_0x1b899d);
      }
      return _0x5713cb;
    }, []);
    console.log("🔍 可抽奖活动检查完成，共发现" + _0x4681d1.length + "个新活动");
    if (_0x4681d1.length > 0) {
      await goAllLottery(_0x4681d1);
    } else {
      console.log("🔍 未发现新的可抽奖活动");
    }
    return _0x4681d1;
  } catch (_0x16cfef) {
    console.error("❌ 获取可抽奖活动错误:", _0x16cfef.message);
    return [];
  }
}
function fn2(_0xc646f4) {
  let _0x27fcc6 = [];
  let _0x1a3d11 = {};
  for (let _0x486d69 = 0; _0x486d69 < _0xc646f4.length; _0x486d69++) {
    if (!_0x1a3d11[_0xc646f4[_0x486d69].liveId]) {
      _0x27fcc6.push(_0xc646f4[_0x486d69]);
      _0x1a3d11[_0xc646f4[_0x486d69].liveId] = true;
    }
  }
  return _0x27fcc6;
}
async function getLiveList(_0x46d930, _0x848b48, _0xd3fed4) {
  console.log("📱 开始获取直播间列表（手机号：" + maskPhone(_0x46d930) + "）");
  try {
    let _0x1ba7fa = await loginPhone(_0x46d930, _0x848b48, _0xd3fed4);
    if (!_0x1ba7fa) {
      console.log("❌ 登录失败，无法获取直播间（手机号：" + maskPhone(_0x46d930) + "）");
      getlive("init");
      return;
    }
    let _0x11511f = await getUsercode(_0x1ba7fa.uid),
      _0x380095 = await getToken(_0x11511f);
    console.log("✅ 登录成功，开始初始化直播间数据（手机号：" + maskPhone(_0x46d930) + "）");
    await initFloor(1, 1, 1, _0x380095);
  } catch (_0x212704) {
    console.error("❌ 获取直播间列表错误：" + _0x212704.message + "（手机号：" + maskPhone(_0x46d930) + "）");
  }
}
async function getlive(_0x2b35ff) {
  console.log("🏠 开始获取直播间数据（类型：" + _0x2b35ff + "）");
  try {
    if (_0x2b35ff == "init") {
      console.log("🏠 初始化直播间数据：使用随机账号");
      let _0x3c14b4 = Math.floor(Math.random() * userPhone.length),
        _0x327b1a = userPhone[_0x3c14b4];
      await getLiveList(_0x327b1a.phone, _0x327b1a.password, _0x327b1a.loginObj);
    } else {
      let _0x15ae2c = Math.floor(Math.random() * userPhone.length),
        _0x12f3ed = userPhone[_0x15ae2c];
      if (_0x12f3ed.xbkToken) {
        console.log("🏠 使用已有token更新直播间（手机号：" + maskPhone(_0x12f3ed.phone) + "）");
        await initFloor(1, 1, 1, _0x12f3ed.xbkToken);
      } else {
        console.log("🏠 账号token不存在，重新初始化");
        getlive("init");
      }
    }
  } catch (_0x1a0901) {
    console.error("❌ 获取直播间错误：" + _0x1a0901.message);
  }
}
async function getGood() {
  console.log("⏰ 触发检查可抽奖活动（每10秒一次）");
  try {
    if (isStart) {
      console.log("⏰ 抽奖流程正在进行中，跳过本次检查");
      return;
    }
    if (userPhone.length === 0) {
      console.log("❌ 没有可用账号，无法检查抽奖活动");
      return;
    }
    let _0x2aca22 = Math.floor(Math.random() * userPhone.length),
      _0x26d50f = userPhone[_0x2aca22];
    if (_0x26d50f.xbkToken) {
      console.log("🔍 使用账号" + maskPhone(_0x26d50f.phone) + "检查可抽奖活动");
      await getStart(_0x26d50f.xbkToken);
    } else {
      console.log("⚠️ 账号" + maskPhone(_0x26d50f.phone) + "未登录，尝试重新登录");
      await allLogin();
      getGood();
    }
  } catch (_0x89f82f) {
    console.error("❌ 检查抽奖活动错误：" + _0x89f82f.message);
    setTimeout(getGood, 5000);
  }
}
let isStart = false;
async function goAllLottery(_0x389203) {
  console.log("🎯 开始处理抽奖活动（共" + _0x389203.length + "个活动）");
  try {
    if (_0x389203.length === 0) {
      console.log("🎯 没有可抽奖的活动，结束流程");
      return;
    }
    isStart = true;
    console.log("🎯 开始执行抽奖，共" + _0x389203.length + "个活动需要处理");
    for (let _0x806e8f = 0; _0x806e8f < _0x389203.length; _0x806e8f++) {
      const _0x3592fa = _0x389203[_0x806e8f];
      console.log("🎯 处理第" + (_0x806e8f + 1) + "/" + _0x389203.length + "个活动：liveId=" + _0x3592fa.liveId + "，activeCode=" + _0x3592fa.activeCode);
      for (const _0x2e7b3e of userPhone) {
        if (_0x2e7b3e.xbkToken && _0x2e7b3e.isDo) {
          const _0x48bc06 = await getLotteryChance(_0x2e7b3e.xbkToken, _0x3592fa.activeCode);
          console.log("ℹ️ 账号" + maskPhone(_0x2e7b3e.phone) + "有" + _0x48bc06 + "次抽奖机会");
          for (let _0x32cece = 0; _0x32cece < _0x48bc06; _0x32cece++) {
            console.log("🎰 账号" + maskPhone(_0x2e7b3e.phone) + "的第" + (_0x32cece + 1) + "/" + _0x48bc06 + "次抽奖（活动" + (_0x806e8f + 1) + "/" + _0x389203.length + "）");
            await lotteryDo(_0x3592fa.liveId, _0x3592fa.activeCode, _0x2e7b3e.xbkToken, _0x2e7b3e.phone, _0x2e7b3e.uid);
            await wait(4000);
          }
        } else {
          if (!_0x2e7b3e.xbkToken) {
            console.log("⚠️ 账号" + maskPhone(_0x2e7b3e.phone) + "未获取到token，跳过抽奖");
          } else {
            if (!_0x2e7b3e.isDo) {
              console.log("⚠️ 账号" + maskPhone(_0x2e7b3e.phone) + "已达抽奖上限，跳过");
            }
          }
        }
      }
    }
    console.log("🎯 所有抽奖活动处理完毕，准备推送结果");
    for (let _0x4ecde4 in pushArr) {
      let _0x12f066 = "",
        _0x3fa058 = 0;
      for (let _0x4cd4d2 in pushArr[_0x4ecde4]) {
        _0x12f066 += pushArr[_0x4ecde4][_0x4cd4d2];
        let _0x4d3b24 = extractNumbersWithDecimalsAndNegatives(pushArr[_0x4ecde4][_0x4cd4d2]);
        _0x3fa058 += _0x4d3b24[_0x4d3b24.length - 1] || 0;
      }
      if (_0x3fa058 > 0) {
        _0x12f066 += _0x3fa058 + "元话费";
        sendTxt[_0x4ecde4] = _0x12f066;
        console.log("📝 准备推送的中奖结果：" + _0x12f066.substring(0, 50) + "...");
      }
    }
    pushArr = {};
    isStart = false;
    console.log("🎯 所有抽奖活动处理完成");
  } catch (_0x28dc4b) {
    console.error("❌ 抽奖流程严重错误：" + _0x28dc4b.message);
    isStart = false;
    setTimeout(() => {
      if (_0x389203 && _0x389203.length > 0) {
        goAllLottery(_0x389203);
      }
    }, 60000);
  }
}
async function getUserAll() {
  console.log("📋 开始初始化用户数据");
  try {
    try {
      Cache = JSON.parse(fs.readFileSync("./Cache.json", "utf8"));
      console.log("📋 成功加载缓存数据");
    } catch (_0x4cc845) {
      console.log("📋 缓存文件不存在，创建新缓存");
      fs.writeFileSync("./Cache.json", JSON.stringify({}), "utf8");
      Cache = {};
    }
    console.log("📋 共获取到" + userPhone.length + "个账号");
    await allLogin();
    if (liveListAll.length === 0 && !isGetLive) {
      console.log("🏠 本地无直播间数据，开始初始化");
      const _0x3ce30a = userPhone.find(_0x244dab => _0x244dab.xbkToken);
      if (_0x3ce30a) {
        await initFloor(1, 1, 1, _0x3ce30a.xbkToken);
      } else {
        console.log("❌ 没有可用的已登录账号，无法初始化直播间");
      }
    }
  } catch (_0x3e22c2) {
    console.error("❌ 初始化用户数据错误：" + _0x3e22c2.message);
    setTimeout(getUserAll, 300000);
  }
}
async function prizeList(_0x6c0268, _0x10b694, _0x21a425) {
  console.log("🎁 获取活动奖品列表：active_code=" + _0x10b694);
  return retry(3, 1000)(prizeListImpl).call(this, _0x6c0268, _0x10b694, _0x21a425);
}
async function prizeListImpl(_0x2ba7fc, _0x823d4c, _0x2e5b84) {
  const _0x4f8e94 = {
    method: "get",
    url: "https://xbk.189.cn/xbkapi/active/v2/lottery/prizeList?active_code=" + _0x823d4c + "&liveId=" + _0x2e5b84 + "&period=1",
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
      Authorization: "Bearer " + rsaJiami.encrypt(_0x2ba7fc, "base64")
    }
  };
  let _0x53c933 = await axios(_0x4f8e94);
  let _0x419b52 = 0;
  _0x53c933?.["data"]?.["data"]?.["map"](_0x4103f0 => {
    let _0x377df2 = _0x4103f0.text.match(/\d+/g);
    if (_0x377df2 && _0x419b52 < Number(_0x377df2[0])) {
      _0x419b52 = Number(_0x377df2[0]);
    }
  });
  console.log("🎁 活动最大奖品金额：" + _0x419b52 + "元");
  return _0x419b52;
}
async function getLotteryChance(_0x400f5f, _0x404413) {
  console.log("🎫 查询抽奖次数：active_code=" + _0x404413);
  return retry(3, 1000)(getLotteryChanceImpl).call(this, _0x400f5f, _0x404413);
}
async function getLotteryChanceImpl(_0xfc4862, _0x2b7cc8) {
  const _0x308224 = {
    method: "get",
    url: "https://xbk.189.cn/xbkapi/active/v2/lottery/getLotteryChance?active_code=" + _0x2b7cc8,
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
      Authorization: "Bearer " + rsaJiami.encrypt(_0xfc4862, "base64")
    }
  };
  let _0x52e108 = await axios(_0x308224);
  const _0x7a068e = _0x52e108.data?.["data"] || 0;
  console.log("🎫 抽奖次数查询结果：" + _0x7a068e + "次");
  return _0x7a068e;
}
async function getMyWinList(_0x42067b) {
  console.log("🏆 查询本月中奖记录");
  return retry(3, 1000)(getMyWinListImpl).call(this, _0x42067b);
}
async function getMyWinListImpl(_0x5d0ba3) {
  try {
    const _0x4b1df2 = {
      method: "get",
      url: "https://xbk.189.cn/xbkapi/active/v2/lottery/getMyWinList?page=1&give_status=200&activeCode=",
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
        Authorization: "Bearer " + rsaJiami.encrypt(_0x5d0ba3, "base64")
      }
    };
    let _0x5dcc75 = await axios(_0x4b1df2),
      _0x1bc1e3 = 0;
    const _0x237c5c = new Date();
    _0x5dcc75?.["data"]?.["data"]?.["map"](_0x13fb76 => {
      const _0xf2924c = new Date(_0x13fb76.win_time),
        _0x7af656 = _0xf2924c.getFullYear() === _0x237c5c.getFullYear() && _0xf2924c.getMonth() === _0x237c5c.getMonth();
      if (_0x7af656 && String(_0x13fb76.title).includes("话费")) {
        _0x1bc1e3 += 1;
      }
    });
    console.log("🏆 本月话费中奖次数：" + _0x1bc1e3 + "次（超过4次将限制抽奖）");
    return _0x1bc1e3 >= 4;
  } catch (_0x1166a9) {
    console.error("❌ 获取中奖记录失败:", _0x1166a9.message);
    return true;
  }
}
async function allLogin() {
  console.log("🔐 开始检查所有账号状态（共" + userPhone.length + "个）");
  try {
    let _0x56bda1 = userPhone.map(async (_0x5b5875, _0x3c31f5) => {
      try {
        if (!_0x5b5875.time) {
          console.log("🔐 账号" + maskPhone(_0x5b5875.phone) + "：首次登录");
          let _0x1672ce = await loginPhoneTwo(_0x5b5875.phone, _0x5b5875.password, Cache);
          userPhone[_0x3c31f5].time = new Date().valueOf();
          if (!_0x1672ce) {
            console.log("❌ 账号" + maskPhone(_0x5b5875.phone) + "登录失败");
            userPhone[_0x3c31f5].isLogin = false;
            return;
          }
          let _0x3f8d29 = await getUsercode(_0x1672ce.uid),
            _0x1200aa = await getToken(_0x3f8d29);
          userPhone[_0x3c31f5].xbkToken = _0x1200aa;
          userPhone[_0x3c31f5].isDo = await getMyWinList(_0x1200aa);
          userPhone[_0x3c31f5].isLogin = true;
          console.log("✅ 账号" + maskPhone(_0x5b5875.phone) + "登录成功");
          if (!isGetLive && liveListAll.length == 0) {
            isGetLive = true;
            console.log("🏠 使用账号" + maskPhone(_0x5b5875.phone) + "初始化直播间数据");
            await initFloor(1, 1, 1, _0x1200aa);
          }
        } else {
          if (_0x5b5875.time && new Date().valueOf() - _0x5b5875.time > 43200000) {
            console.log("🔐 账号" + maskPhone(_0x5b5875.phone) + "：token过期（>12小时），重新登录");
            let _0x106957 = await loginPhoneTwo(_0x5b5875.phone, _0x5b5875.password, Cache);
            userPhone[_0x3c31f5].time = new Date().valueOf();
            if (!_0x106957) {
              console.log("❌ 账号" + maskPhone(_0x5b5875.phone) + "重新登录失败");
              userPhone[_0x3c31f5].isLogin = false;
              return;
            }
            let _0xcce9d9 = await getUsercode(_0x106957.uid),
              _0x27d946 = await getToken(_0xcce9d9);
            userPhone[_0x3c31f5].xbkToken = _0x27d946;
            userPhone[_0x3c31f5].isDo = await getMyWinList(_0x27d946);
            userPhone[_0x3c31f5].isLogin = true;
            console.log("✅ 账号" + maskPhone(_0x5b5875.phone) + "重新登录成功");
          } else {
            if (_0x5b5875.time && new Date().valueOf() - _0x5b5875.time > 21600000 && !_0x5b5875.isLogin) {
              console.log("🔐 账号" + maskPhone(_0x5b5875.phone) + "：未登录（>6小时），尝试登录");
              let _0x2060a2 = await loginPhoneTwo(_0x5b5875.phone, _0x5b5875.password, Cache);
              userPhone[_0x3c31f5].time = new Date().valueOf();
              if (!_0x2060a2) {
                console.log("❌ 账号" + maskPhone(_0x5b5875.phone) + "登录失败");
                userPhone[_0x3c31f5].isLogin = false;
                return;
              }
              let _0x5bbf81 = await getUsercode(_0x2060a2.uid),
                _0x145300 = await getToken(_0x5bbf81);
              userPhone[_0x3c31f5].xbkToken = _0x145300;
              userPhone[_0x3c31f5].isDo = await getMyWinList(_0x145300);
              userPhone[_0x3c31f5].isLogin = true;
              console.log("✅ 账号" + maskPhone(_0x5b5875.phone) + "登录成功");
            } else {
              console.log("ℹ️ 账号" + maskPhone(_0x5b5875.phone) + "状态正常（无需重新登录）");
            }
          }
        }
      } catch (_0x371aff) {
        console.error("❌ 处理账号" + maskPhone(_0x5b5875.phone) + "错误：" + _0x371aff.message);
      }
    });
    await Promise.all(_0x56bda1);
    const _0x30e562 = userPhone.filter(_0x5b0909 => _0x5b0909.isLogin && _0x5b0909.xbkToken);
    console.log("🔐 所有账号检查完毕，活跃账号数量：" + _0x30e562.length + "/" + userPhone.length);
    return _0x30e562.length > 0;
  } catch (_0x3d1fb7) {
    console.error("❌ 批量登录错误：" + _0x3d1fb7.message);
    return false;
  }
}
(async () => {
  console.log("🚀 脚本启动，开始初始化...");
  if (!validateDate()) {
    process.exit(1);
    return;
  }
  if (!(await validateLkey())) {
    process.exit(1);
    return;
  }
  try {
    await getUserAll();
    try {
      liveListAll = JSON.parse(fs.readFileSync("./liveList.json", "utf8"));
      console.log("💾 读取本地直播间数据成功（" + liveListAll.length + "个）");
    } catch (_0x22173f) {
      console.log("💾 本地直播间数据不存在，将重新获取");
      fs.writeFileSync("./liveList.json", JSON.stringify([]), "utf8");
      liveListAll = [];
    }
    if (liveListAll.length === 0) {
      console.log("🏠 本地直播间数据为空，开始初始化加载（仅加载省份1）");
      const _0xbef3bf = userPhone.find(_0x3a94b8 => _0x3a94b8.xbkToken);
      if (_0xbef3bf) {
        await initFloor(1, 1, 1, _0xbef3bf.xbkToken);
      }
    } else {
      console.log("🏠 本地直播间数据有效");
      const _0x5c9d61 = fs.statSync("./liveList.json"),
        _0x22414f = new Date(_0x5c9d61.mtime),
        _0x18974b = new Date(),
        _0x4fadcb = (_0x18974b - _0x22414f) / 3600000;
      if (_0x4fadcb > 2) {
        console.log("⏰ 直播间数据已超过2小时，需要重新获取（当前已" + Math.floor(_0x4fadcb) + "小时）");
        const _0x73477b = userPhone.find(_0x36d602 => _0x36d602.xbkToken);
        if (_0x73477b) {
          await initFloor(1, 1, 1, _0x73477b.xbkToken);
        }
      } else {
        console.log("⏰ 直播间数据较新（" + Math.floor(_0x4fadcb) + "小时前），使用缓存");
        setTimeout(getGood, 2000);
      }
    }
  } catch (_0x49f772) {
    console.error("❌ 脚本初始化严重错误：" + _0x49f772.message);
    console.log("⏰ 1分钟后将重试初始化");
    setTimeout(() => process.exit(1), 60000);
  }
})();
setInterval(async () => {
  console.log("⏰ 定时任务：每小时更新直播间和账号列表（触发）");
  await getUserAll();
  getlive();
}, 3600000);
setInterval(() => {
  console.log("⏰ 定时任务：每10秒检查可抽奖活动（即将触发）");
  !isStart ? getGood() : console.log("⏰ 抽奖流程进行中，跳过本次定时检查");
}, 300000);
setInterval(() => {
  console.log("⏰ 定时任务：每10分钟清空抽奖记录（触发）");
  runGameId = [];
  console.log("✅ 抽奖记录已清空");
}, 600000);
setInterval(async () => {
  console.log("⏰ 定时任务：每分钟检查推送消息（触发）");
  if (!isStart) {
    let _0x3e7f5a = Object.keys(sendTxt);
    if (_0x3e7f5a.length > 0) {
      console.log("📤 发现" + _0x3e7f5a.length + "条待推送消息");
      for (let _0x160e32 in sendTxt) {
        QLAPI.notify('电信星播客', sendTxt[_0x160e32]);
        await wait(3000);
      }
      sendTxt = {};
      console.log("📤 所有消息推送完成");
    } else {
      console.log("📤 没有待推送的消息");
    }
  } else {
    console.log("⏰ 抽奖流程进行中，暂不推送消息");
  }
}, 60000);