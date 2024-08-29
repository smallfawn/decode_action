//Thu Aug 29 2024 07:08:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const bdy_0x2b2e6c = require("axios"),
  bdy_0x481ad9 = require("https"),
  bdy_0x553939 = require("crypto-js");
class bdy_0x51f77c {
  constructor() {}
  TDEncrypt(_0x50e97e) {
    _0x50e97e = JSON.stringify(_0x50e97e);
    _0x50e97e = encodeURIComponent(_0x50e97e);
    var _0x1f7cdb = "",
      _0x39db93 = 0;
    do {
      var _0x33186b = _0x50e97e.charCodeAt(_0x39db93++),
        _0x2a1d93 = _0x50e97e.charCodeAt(_0x39db93++),
        _0x2dc1ec = _0x50e97e.charCodeAt(_0x39db93++),
        _0x4f41df = _0x33186b >> 2;
      _0x33186b = (_0x33186b & 3) << 4 | _0x2a1d93 >> 4;
      var _0x84ea63 = (_0x2a1d93 & 15) << 2 | _0x2dc1ec >> 6,
        _0x3e6399 = _0x2dc1ec & 63;
      isNaN(_0x2a1d93) ? _0x84ea63 = _0x3e6399 = 64 : isNaN(_0x2dc1ec) && (_0x3e6399 = 64);
      _0x1f7cdb += "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x4f41df) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x33186b) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x84ea63) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(_0x3e6399);
    } while (_0x39db93 < _0x50e97e.length);
    return _0x1f7cdb + "/";
  }
  async jddToken(_0x22233d, _0x52624d = "https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html", _0x32f9cf = "s") {
    let _0x1e8bac = {
        pin: "",
        oid: "",
        bizId: "jd-babelh5",
        fc: "",
        mode: "strict",
        p: _0x32f9cf,
        fp: "88233dc0b0cbdde7c72de37df22ed935",
        ctype: 1,
        v: "3.2.1.1",
        f: "3",
        o: _0x52624d.substring("https://".length),
        qs: "",
        jsTk: "",
        qi: ""
      },
      _0x2035ac = this.getRandomInteger(393, 450),
      _0x2e2ec4 = this.getRandomInteger(800, 900);
    const _0x3a483f = {
      tdHash: ""
    };
    const _0x5bb227 = {
      compatMode: "CSS1Compat"
    };
    const _0x2e1bc8 = {
      devicePixelRatio: 2.75,
      screenTop: 0,
      screenLeft: 0
    };
    const _0x275d4d = {
      availHeight: _0x2e2ec4,
      availWidth: _0x2035ac,
      colorDepth: 24,
      height: _0x2e2ec4,
      width: _0x2035ac,
      pixelDepth: 24
    };
    const _0x55b2c9 = {
      cookie: true,
      localStorage: true,
      sessionStorage: true,
      globalStorage: false,
      indexedDB: true
    };
    let _0x33e90e = {
        ts: {
          deviceTime: new Date().getTime(),
          deviceEndTime: new Date().getTime() + this.getRandomInteger(100, 200)
        },
        ca: _0x3a483f,
        m: _0x5bb227,
        fo: ["Bauhaus 93", "Casual"],
        n: {
          vendorSub: "",
          productSub: "20030107",
          vendor: "Apple Computer, Inc.",
          maxTouchPoints: 1,
          hardwareConcurrency: 8,
          cookieEnabled: true,
          appCodeName: "Mozilla",
          appName: "Netscape",
          appVersion: _0x22233d.split("M/")[1] || "",
          platform: "NA",
          product: "Gecko",
          userAgent: _0x22233d,
          language: "zh-CN",
          onLine: true,
          webdriver: false,
          javaEnabled: false,
          deviceMemory: 8,
          enumerationOrder: ["vendorSub", "productSub", "vendor", "maxTouchPoints", "userActivation", "doNotTrack", "geolocation", "connection", "plugins", "mimeTypes", "webkitTemporaryStorage", "webkitPersistentStorage", "hardwareConcurrency", "cookieEnabled", "appCodeName", "appName", "appVersion", "platform", "product", "userAgent", "language", "languages", "onLine", "webdriver", "getBattery", "getGamepads", "javaEnabled", "sendBeacon", "vibrate", "scheduling", "mediaCapabilities", "locks", "wakeLock", "usb", "clipboard", "credentials", "keyboard", "mediaDevices", "storage", "serviceWorker", "deviceMemory", "bluetooth", "getUserMedia", "requestMIDIAccess", "requestMediaKeySystemAccess", "webkitGetUserMedia", "clearAppBadge", "setAppBadge"]
        },
        p: [],
        w: _0x2e1bc8,
        s: _0x275d4d,
        sc: {
          ActiveBorder: "rgb(118, 118, 118)",
          ActiveCaption: "rgb(0, 0, 0)",
          AppWorkspace: "rgb(255, 255, 255)",
          Background: "rgb(255, 255, 255)",
          ButtonFace: "rgb(239, 239, 239)",
          ButtonHighlight: "rgb(239, 239, 239)",
          ButtonShadow: "rgb(239, 239, 239)",
          ButtonText: "rgb(0, 0, 0)",
          CaptionText: "rgb(0, 0, 0)",
          GrayText: "rgb(128, 128, 128)",
          Highlight: "rgba(51, 181, 229, 0.4)",
          HighlightText: "rgb(255, 255, 255)",
          InactiveBorder: "rgb(118, 118, 118)",
          InactiveCaption: "rgb(255, 255, 255)",
          InactiveCaptionText: "rgb(128, 128, 128)",
          InfoBackground: "rgb(255, 255, 255)",
          InfoText: "rgb(0, 0, 0)",
          Menu: "rgb(255, 255, 255)",
          MenuText: "rgb(0, 0, 0)",
          Scrollbar: "rgb(255, 255, 255)",
          ThreeDDarkShadow: "rgb(118, 118, 118)",
          ThreeDFace: "rgb(239, 239, 239)",
          ThreeDHighlight: "rgb(118, 118, 118)",
          ThreeDLightShadow: "rgb(118, 118, 118)",
          ThreeDShadow: "rgb(118, 118, 118)",
          Window: "rgb(255, 255, 255)",
          WindowFrame: "rgb(118, 118, 118)",
          WindowText: "rgb(0, 0, 0)"
        },
        ss: _0x55b2c9,
        tz: -480,
        lil: "",
        wil: ""
      },
      _0x99e59a = this.TDEncrypt(_0x33e90e),
      _0x28073b = "https://gia.jd.com/jsTk.do?a=" + this.TDEncrypt(_0x1e8bac);
    const _0x215b0a = {
      d: _0x99e59a
    };
    const _0x36c9cb = {
      d: _0x99e59a
    };
    let {
      status: _0x264ac9,
      data: _0x520ad1
    } = await bdy_0x2b2e6c({
      url: _0x28073b,
      method: "POST",
      data: Object.keys(_0x215b0a).map(_0x20829e => _0x20829e + "=" + encodeURIComponent(_0x36c9cb[_0x20829e])).join("&")
    });
    if (_0x264ac9 === 200 && _0x520ad1.data) {
      return _0x520ad1.data;
    } else {
      return null;
    }
  }
  get_agent() {
    let _0x38e963 = "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA";
    const _0x3e9ca1 = {
      ciphers: _0x38e963,
      minVersion: "TLSv1.3"
    };
    return new bdy_0x481ad9.Agent(_0x3e9ca1);
  }
  cpstr = "TLS_AES_256_GCM_SHA384:TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384";
  Check_Login(_0x5d0be3, _0xf41eb9) {
    return new Promise(_0xfe608b => {
      const _0x5082e2 = {
        Cookie: _0x5d0be3,
        referer: "https://h5.m.jd.com/",
        "User-Agent": _0xf41eb9
      };
      const _0x20b1be = {
        url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
        headers: _0x5082e2,
        timeout: 10000
      };
      $.get(_0x20b1be, (_0x5134cb, _0x51c977, _0x1715f0) => {
        try {
          if (_0x1715f0) {
            _0x1715f0 = JSON.parse(_0x1715f0);
            if (!(_0x1715f0.islogin === "1")) {
              _0x1715f0.islogin === "0" && ($.isLogin = false);
            }
          }
        } catch (_0x34d9de) {
          console.log(_0x34d9de);
        } finally {
          _0xfe608b();
        }
      });
    });
  }
  Get_Code() {
    const _0x566411 = {
      url: "",
      timeout: 30000
    };
    return new Promise(_0x5079b1 => {
      $.get(_0x566411, async (_0x477cec, _0x11477c, _0xed1894) => {
        try {
          if (_0x477cec) {
            console.log("\n服务连接失败，终止执行！");
            process.exit(111);
          } else {
            if (_0xed1894) {
              _0xed1894 = JSON.parse(_0xed1894);
              if (_0xed1894.code === 200) {
                authcode = _0xed1894.data;
              }
            }
          }
        } catch (_0x35808a) {
          $.logErr(_0x35808a, _0x11477c);
        } finally {
          _0x5079b1(authcode);
        }
      });
    });
  }
  getRandomInteger(_0x534c48, _0x259b9a) {
    return Math.floor(Math.random() * (_0x259b9a - _0x534c48 + 1)) + _0x534c48;
  }
  Format_Date(_0x33e219) {
    _0x33e219 = new Date(_0x33e219);
    const _0x37ba83 = _0x33e219.getFullYear(),
      _0x4442b4 = ("0" + (_0x33e219.getMonth() + 1)).slice(-2),
      _0x4b09a6 = ("0" + _0x33e219.getDate()).slice(-2),
      _0x22b199 = ("0" + _0x33e219.getHours()).slice(-2),
      _0x21d405 = ("0" + _0x33e219.getMinutes()).slice(-2),
      _0x5c74c2 = ("0" + _0x33e219.getSeconds()).slice(-2);
    return _0x37ba83 + "/" + _0x4442b4 + "/" + _0x4b09a6 + " " + _0x22b199 + ":" + _0x21d405 + ":" + _0x5c74c2;
  }
  jsonfomat(_0x199fa8) {
    if (typeof _0x199fa8 == "string") {
      try {
        return JSON.parse(_0x199fa8);
      } catch (_0x471375) {
        console.log(_0x471375);
        $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
        return [];
      }
    }
  }
  aesDecrypt(_0x507068) {
    let _0x36f1e2 = bdy_0x553939.enc.Utf8.parse("40d9d9a0b49d1384"),
      _0x2d04e1 = bdy_0x553939.enc.Utf8.parse("1111111111111111"),
      _0x47ed86 = bdy_0x553939.enc.Hex.parse(_0x507068),
      _0x1e4df1 = bdy_0x553939.enc.Base64.stringify(_0x47ed86),
      _0x614bc5 = bdy_0x553939.AES.decrypt(_0x1e4df1, _0x36f1e2, {
        iv: _0x2d04e1,
        mode: bdy_0x553939.mode.CBC,
        padding: bdy_0x553939.pad.Pkcs7
      }),
      _0x53e8a7 = _0x614bc5.toString(bdy_0x553939.enc.Utf8);
    return _0x53e8a7.toString();
  }
  aesEncrypt(_0x47b4ba) {
    let _0x3c11f1 = bdy_0x553939.enc.Utf8.parse("40d9d9a0b49d1384"),
      _0x190ea7 = bdy_0x553939.enc.Utf8.parse(_0x47b4ba),
      _0x39d64a = bdy_0x553939.AES.encrypt(_0x190ea7, _0x3c11f1, {
        iv: bdy_0x553939.enc.Utf8.parse("1111111111111111".substr(0, 16)),
        mode: bdy_0x553939.mode.CBC,
        padding: bdy_0x553939.pad.Pkcs7
      });
    return _0x39d64a.ciphertext.toString();
  }
  getUA_bak() {
    const _0x3cc0ac = {
      A: "K",
      B: "L",
      C: "M",
      D: "N",
      E: "O",
      F: "P",
      G: "Q",
      H: "R",
      I: "S",
      J: "T",
      K: "A",
      L: "B",
      M: "C",
      N: "D",
      O: "E",
      P: "F",
      Q: "G",
      R: "H",
      S: "I",
      T: "J",
      e: "o",
      f: "p",
      g: "q",
      h: "r",
      i: "s",
      j: "t",
      k: "u",
      l: "v",
      m: "w",
      n: "x",
      o: "e",
      p: "f",
      q: "g",
      r: "h",
      s: "i",
      t: "j",
      u: "k",
      v: "l",
      w: "m",
      x: "n"
    };
    let _0x32af83 = ["MI9 Build/QKQ1.190825.002", "MI8 Build/OPM1.171019.026", "HLK-AL00 Build/HONORHLK-AL00", "SM-G9750 Build/QP1A.190711.020", "LIO-AL00 Build/HUAWEILIO-AL00", "ELE-AL00 Build/HUAWEIELE-AL00", "ANE-AL00 Build/HUAWEIANE-AL00", "22021211RC Build/SKQ1.211006.001"],
      _0xc74e0b = ["9", "10", "11", "12", "13"],
      _0x5af8d3 = ["11.2.8", "11.2.6", "11.2.5", "11.2.4", "11.2.3", "11.1.4", "11.1.3", "11.2.0", "11.3.0"],
      _0x4d76a7 = ["98413", "98416", "98415", "98417", "98450", "98527"];
    $.dv = _0x32af83[Math.floor(Math.random() * _0x32af83.length)];
    $.iv = _0xc74e0b[Math.floor(Math.random() * _0xc74e0b.length)];
    $.av = _0x5af8d3[Math.floor(Math.random() * _0x5af8d3.length)];
    $.bv = _0x4d76a7[Math.floor(Math.random() * _0x4d76a7.length)];
    getstr = function (_0x4d5c17) {
      let _0x2818e8 = "",
        _0xe2bf05 = "0123456789abcdef";
      for (let _0x4f4156 = 0; _0x4f4156 < _0x4d5c17; _0x4f4156++) {
        let _0x5df0cc = Math.round(Math.random() * (_0xe2bf05.length - 1));
        _0x2818e8 += _0xe2bf05.substring(_0x5df0cc, _0x5df0cc + 1);
      }
      return _0x2818e8;
    };
    let _0x3a2610 = Buffer.from(getstr(16)).toString("base64"),
      _0x56a058 = Buffer.from(getstr(16)).toString("base64"),
      _0x3468cf = Buffer.from($.iv).toString("base64").split("").map(_0x2bf4bb => _0x3cc0ac[_0x2bf4bb] || _0x2bf4bb).join(""),
      _0xb16e0 = Buffer.from("31").toString("base64").split("").map(_0x4fa796 => _0x3cc0ac[_0x4fa796] || _0x4fa796).join("");
    _0x56a058 = _0x56a058.split("").map(_0x30c36c => _0x3cc0ac[_0x30c36c] || _0x30c36c).join("");
    _0x3a2610 = _0x3a2610.split("").map(_0x135e22 => _0x3cc0ac[_0x135e22] || _0x135e22).join("");
    const _0x244265 = {
      sv: _0x3468cf,
      ad: _0x3a2610,
      od: _0x56a058,
      ov: _0xb16e0,
      ud: _0x3a2610
    };
    let _0xaec8dc = encodeURIComponent(JSON.stringify({
      hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
      ts: Date.now(),
      ridx: -1,
      cipher: _0x244265,
      ciphertype: 5,
      version: "1.2.0",
      appname: "com.jingdong.app.mall"
    }));
    $.UA = "jdapp;android;" + $.av + ";;;appBuild/" + $.bv + ";ef/1;ep/" + _0xaec8dc + ";jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android " + $.iv + "; " + $.dv + "; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046141 Mobile Safari/537.36";
  }
  uuid(_0x2112a9) {
    let _0x185f04 = "0123456789abcdef",
      _0x38b299 = "";
    for (let _0x41be83 = 0; _0x41be83 < _0x2112a9; _0x41be83++) {
      _0x38b299 += _0x185f04[Math.ceil(100000000 * Math.random()) % _0x185f04.length];
    }
    return _0x38b299;
  }
  UUID(_0x7d2f69 = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", _0xea6688 = 0) {
    let _0xbd3099 = "";
    return _0x7d2f69.replace(/[xy]/g, function (_0xbaf471) {
      var _0x1e9899 = Math.random() * 16 | 0,
        _0x27b285 = _0xbaf471 == "x" ? _0x1e9899 : _0x1e9899 & 3 | 8;
      if (_0xea6688) {
        _0xbd3099 = _0x27b285.toString(36).toUpperCase();
      } else {
        _0xbd3099 = _0x27b285.toString(36);
      }
      return _0xbd3099;
    });
  }
  jsonParse(_0x1015ff) {
    try {
      _0x1015ff = JSON.parse(_0x1015ff);
    } catch (_0x573a05) {
      let _0x2bc3f2 = match([/^try\s*\{\s*\n*\s*(\w+)/, /^(\w+)\s*\n*\s*\(/], _0x1015ff);
      if (_0x2bc3f2) {
        let _0x4e1a08 = "",
          _0x310df9 = _0x1015ff.replace(_0x2bc3f2, "tempdata=");
        eval(_0x310df9);
        _0x4e1a08 && (_0x1015ff = _0x4e1a08);
      }
    }
    return _0x1015ff;
  }
  dymatch(_0x57e867, _0x37046e) {
    _0x57e867 = _0x57e867 instanceof Array ? _0x57e867 : [_0x57e867];
    for (let _0x26ba15 of _0x57e867) {
      let _0x4c02cf = _0x26ba15.exec(_0x37046e);
      if (_0x4c02cf) {
        let _0x5b19ce = _0x4c02cf.length;
        if (_0x5b19ce == 1) {
          return _0x4c02cf;
        } else {
          if (_0x5b19ce == 2) {
            return _0x4c02cf[1];
          } else {
            let _0x1d49a3 = [];
            for (let _0xb0aeac = 1; _0xb0aeac < _0x5b19ce; _0xb0aeac++) {
              _0x1d49a3.push(_0x4c02cf[_0xb0aeac]);
            }
            return _0x1d49a3;
          }
        }
      }
    }
    return "";
  }
  getExtract(_0x11121f) {
    const _0x4ee5a7 = (_0xdca539, _0xa7918d) => Math.floor(Math.random() * (_0xa7918d - _0xdca539) + _0xdca539);
    let _0x187cc0 = _0x4ee5a7(0, _0x11121f.length);
    return _0x11121f.splice(_0x187cc0, 1);
  }
  getRandomEle(_0x35a855, _0x8d8da0) {
    const _0x1f32bf = _0x35a855.slice().sort(() => Math.random() - 0.5);
    return _0x1f32bf.slice(0, _0x8d8da0);
  }
  SecToTime(_0x3752b8) {
    const _0x149a53 = Math.floor(_0x3752b8 / 3600),
      _0x56ed81 = Math.floor(_0x3752b8 % 3600 / 60),
      _0x4d14d0 = _0x3752b8 % 60;
    return _0x149a53 + "小时" + _0x56ed81 + "分" + _0x4d14d0 + "秒";
  }
  chanel() {
    console.log("问题反馈 => https://t.me/dylan_jdpro");
  }
  getUA(_0x56c633, _0x4ff450) {
    const _0x16598d = {
      A: "K",
      B: "L",
      C: "M",
      D: "N",
      E: "O",
      F: "P",
      G: "Q",
      H: "R",
      I: "S",
      J: "T",
      K: "A",
      L: "B",
      M: "C",
      N: "D",
      O: "E",
      P: "F",
      Q: "G",
      R: "H",
      S: "I",
      T: "J",
      e: "o",
      f: "p",
      g: "q",
      h: "r",
      i: "s",
      j: "t",
      k: "u",
      l: "v",
      m: "w",
      n: "x",
      o: "e",
      p: "f",
      q: "g",
      r: "h",
      s: "i",
      t: "j",
      u: "k",
      v: "l",
      w: "m",
      x: "n"
    };
    const _0x88e513 = {
      ud: "",
      sv: "",
      iad: ""
    };
    let _0x3c1a4a = this.getRandomEle([12, 13, 14, 15, 16], 1) + "." + this.getRandomEle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1) + "." + this.getRandomEle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1),
      _0x7a044c = this.getRandomEle([12], 1) + "." + this.getRandomEle([0, 1, 2, 3, 4, 5, 6, 7, 8], 1) + "." + this.getRandomEle([0, 1, 2, 3, 4, 5], 1),
      _0x10b633 = this.getRandomEle([4, 5, 6], 1) + "." + this.getRandomEle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1) + "." + this.getRandomEle([0, 1, 2, 3, 4, 5], 1),
      _0x10124b = {
        ciphertype: 5,
        cipher: _0x88e513,
        ts: parseInt(new Date().getTime() / 1000),
        hdid: "",
        version: "1.0.3",
        appname: "",
        ridx: -1
      };
    _0x10124b.cipher.sv = new Buffer.from(_0x3c1a4a).toString("base64").split("").map(_0x42048c => _0x16598d[_0x42048c] || _0x42048c).join("");
    _0x10124b.cipher.ud = new Buffer.from(bdy_0x553939.SHA1(_0x4ff450).toString() || this.uuid(40)).toString("base64").split("").map(_0x13927c => _0x16598d[_0x13927c] || _0x13927c).join("");
    _0x10124b.appname = "com.360buy.jdmobile";
    _0x10124b.hdid = "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=";
    let _0x2e1df9 = "jdapp;iPhone;" + _0x7a044c + ";;;M/5.0;appBuild/168841;jdSupportDarkMode/0;ef/1;ep/" + encodeURIComponent(JSON.stringify(_0x10124b)) + ";Mozilla/5.0 (iPhone; CPU iPhone OS " + _0x3c1a4a.replace(/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
    _0x10124b.appname = "com.jd.jdmobilelite";
    _0x10124b.hdid = "ViZLFbOc+bY6wW3m9/8iSFjgglIbmHPOGSM9aXIoBes=";
    _0x10124b.ridx = 1;
    let _0x1e073d = "jdltapp;iPhone;" + _0x10b633 + ";;;M/5.0;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;hasOCPay/0;appBuild/1338;supportBestPay/0;jdSupportDarkMode/0;ef/1;ep/" + encodeURIComponent(JSON.stringify(_0x10124b)) + ";Mozilla/5.0 (iPhone; CPU iPhone OS " + _0x3c1a4a.replace(/\./g, "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
    return _0x56c633 ? _0x1e073d : _0x2e1df9;
  }
  buildck(_0x131814) {
    let _0x353720 = "",
      _0x5c7046 = "jd.com",
      _0x55c301 = 15552000000,
      _0x55880a = 1800000,
      _0x3cca6b = _0x5e1ca5(_0x5c7046),
      _0x4356ad = _0x2ad259(),
      _0x4488f5 = parseInt(new Date().getTime() / 1000),
      _0x48554c = _0x4356ad;
    function _0x2ad259() {
      return new Date().getTime() + "" + parseInt(2147483647 * Math.random());
    }
    function _0x46f019(_0x1f2f39, _0x16aa34, _0x2e4aad, _0x17d873) {
      if (_0x1f2f39) {
        var _0x4658da = "";
        if (_0x17d873) {
          var _0x345885 = new Date();
          _0x345885.setTime(_0x345885.getTime() + _0x17d873);
          _0x4658da = ";expires=" + _0x345885.toGMTString();
        }
        _0x353720 += _0x1f2f39 + "=" + _0x16aa34 + ";";
      }
    }
    function _0x5e1ca5(_0x1b1c5e) {
      let _0x169d8f,
        _0x1e2563 = 1,
        _0x243869 = 0;
      if (_0x1b1c5e) {
        for (_0x1e2563 = 0, _0x169d8f = _0x1b1c5e.length - 1; 0 <= _0x169d8f; _0x169d8f--) {
          _0x1e2563 = 0 !== (_0x243869 = 266338304 & (_0x1e2563 = (_0x1e2563 << 6 & 268435455) + (_0x243869 = _0x1b1c5e.charCodeAt(_0x169d8f)) + (_0x243869 << 14))) ? _0x1e2563 ^ _0x243869 >> 21 : _0x1e2563;
        }
      }
      return _0x1e2563;
    }
    function _0x414bbf(_0x418de6, _0xfb8416) {
      _0x418de6 = encodeURIComponent([_0xfb8416, "direct", "-", "none", "-", new Date().getTime()].join("|"));
      let _0x4d2a0d = _0x1a32e6(10) && (!_0x418de6 || 400 < _0x418de6.length) ? _0xfb8416 + "|direct|-|none|-|" + new Date().getTime() : _0x418de6;
      _0x46f019("__jdv", _0x4d2a0d, _0x5c7046, 86400000);
    }
    function _0x1a32e6(_0x209d4e) {
      if (100 <= _0x209d4e) {
        return !0;
      }
      let _0x1bfeb9 = _0x48554c,
        _0x465483 = _0x1bfeb9.substr(_0x1bfeb9.length - 2);
      return !!_0x465483 && 1 * _0x465483 < _0x209d4e;
    }
    _0x46f019("__jda", [_0x3cca6b, _0x4356ad, _0x4488f5, _0x4488f5, _0x4488f5, 1 || 1].join("."), _0x5c7046, _0x55c301);
    _0x46f019("__jdb", [_0x3cca6b, 1, _0x4356ad + "|" + 1, _0x4488f5].join("."), _0x5c7046, _0x55880a);
    _0x414bbf("", _0x3cca6b);
    _0x46f019("__jdc", _0x3cca6b, _0x5c7046);
    _0x46f019("mba_muid", encodeURI(_0x4356ad), _0x5c7046);
    return _0x131814 + ";" + _0x353720;
  }
}
module.exports = new bdy_0x51f77c();