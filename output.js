//Fri Aug 09 2024 07:42:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function bdy_0x79d404(_0x5c35f2) {
  let _0x2feca8 = "";
  switch (_0x5c35f2) {
    case [_0x2feca8]:
      const _0x9dfc65 = {
        ed: ed
      };
      _0xf1f6le = _0x9dfc65;
      break;
    case [_0x2feca8]:
      const _0xaacbb7 = {
        bd: bd
      };
      _0xf1f6lc = _0xaacbb7;
      break;
    case [_0x2feca8]:
      const _0x324136 = {
        ed: ed
      };
      _0xf1f6lf = _0x324136;
      break;
    case [_0x2feca8]:
      const _0x17c363 = {
        ed: ed
      };
      _0xf1f6lg = _0x17c363;
      break;
    case [_0x2feca8]:
      const _0x239043 = {
        ed: ed
      };
      _0xf1f6lv = _0x239043;
      break;
  }
}
var bdy_0x2dc142 = require("crypto-js"),
  bdy_0x5f4c8b = {};
const bdy_0x4ef7cc = require("got"),
  bdy_0x2b56a3 = ["w", "m", "0", "!", "@", "w", "-", "s", "#", "l", "l", "1", "f", "l", "o", "("],
  bdy_0x29f152 = {},
  bdy_0x15be46 = bdy_0x2b56a3.reverse().join("");
function bdy_0x2f4e77() {
  var _0x9ac16,
    _0x1139e6 = arguments.length > 0 && "undefined" !== arguments[0] ? arguments[0] : {},
    _0x366b3e = _0x1139e6.size,
    _0x4f9936 = "undefined" === _0x366b3e ? 10 : _0x366b3e,
    _0x20cd19 = _0x1139e6.num,
    _0x56a319 = "";
  if (_0x20cd19 && "string" == typeof _0x20cd19) {
    _0x9ac16 = _0x20cd19;
  }
  for (; _0x4f9936--;) {
    _0x56a319 += _0x9ac16[Math.floor(Math.random() * _0x9ac16.length)];
  }
  return _0x56a319;
}
function bdy_0x419a9e(_0x32b81e) {
  let _0x3ece1a = _0x32b81e.type,
    _0x4d8b69 = "",
    _0x29f44e = _0x32b81e.customDict;
  if (_0x29f44e && "string" == typeof _0x29f44e) {
    _0x3ece1a = _0x29f44e;
  } else {
    switch (_0x3ece1a) {
      case "alphabet":
        _0x3ece1a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "max":
        _0x3ece1a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
        break;
      case "number":
      default:
        _0x3ece1a = "0123456789";
    }
  }
  for (; _0x32b81e.size--;) {
    _0x4d8b69 += _0x3ece1a[Math.random() * _0x3ece1a.length | 0];
  }
  return _0x4d8b69;
}
for (let bdy_0x60230f of ["HmacMD5", "HmacSHA1", "HmacSHA256", "HmacSHA512"]) {
  bdy_0x5f4c8b[bdy_0x60230f] = function (_0x264bae, _0x3a67a2) {
    return bdy_0x2dc142[bdy_0x60230f](_0x264bae + "7n5<G*", _0x3a67a2.slice(0, 5).split("").map(_0x6cd46d => String.fromCharCode(158 - _0x6cd46d.charCodeAt(0))).reverse().join("") + _0x3a67a2.slice(5));
  };
}
for (let bdy_0x439f64 of ["MD5", "SHA1", "SHA256", "SHA512"]) {
  bdy_0x5f4c8b[bdy_0x439f64] = function (_0x281602) {
    return bdy_0x2dc142[bdy_0x439f64](_0x281602 + "7n5<G*");
  };
}
const bdy_0x3c760d = {
  local_key_1: bdy_0x5f4c8b.MD5,
  local_key_2: bdy_0x5f4c8b.SHA256,
  local_key_3: bdy_0x5f4c8b.HmacSHA256
};
function bdy_0x4414d0(_0x8a222b, _0x5c4575, _0x326f01, _0x84403c) {
  function _0x2b843b(_0x554814) {
    return (_0x554814 + String.prototype.slice.call("===", (_0x554814.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/");
  }
  const _0x575a5c = "" + _0x8a222b + _0x5c4575 + _0x326f01 + _0x84403c + "Mp(2C1",
    _0x45ee1a = bdy_0x2dc142.enc.Utf8.stringify(bdy_0x2dc142.enc.Base64.parse(_0x2b843b(bdy_0x2241e0(_0x8a222b, 16, 28)))),
    _0x4ae73d = _0x45ee1a.match(/^[123]([x+][123])+/);
  let _0x1604f4 = "";
  if (_0x4ae73d) {
    const _0xa642e5 = _0x4ae73d[0].split("");
    let _0x2889ba = "";
    Array.prototype.forEach.call(_0xa642e5, _0x104f3f => {
      if (isNaN(_0x104f3f)) {
        if (["+", "x"].includes(_0x104f3f)) {
          _0x2889ba = _0x104f3f;
        }
      } else {
        const _0x199c4a = "local_key_" + _0x104f3f;
        if (bdy_0x3c760d[_0x199c4a]) {
          switch (_0x2889ba) {
            case "+":
              _0x1604f4 = "" + _0x1604f4 + bdy_0x2ee552(_0x199c4a, _0x575a5c, _0x8a222b);
              break;
            case "x":
              _0x1604f4 = bdy_0x2ee552(_0x199c4a, _0x1604f4, _0x8a222b);
              break;
            default:
              _0x1604f4 = bdy_0x2ee552(_0x199c4a, _0x575a5c, _0x8a222b);
          }
        }
      }
    });
  }
  return _0x1604f4;
}
function bdy_0x2ee552(_0x50a8f1, _0x59d6c0, _0x1738d0) {
  let _0x37dfdf = bdy_0x3c760d[_0x50a8f1];
  return _0x50a8f1 === "local_key_3" ? _0x37dfdf(_0x59d6c0, _0x1738d0).toString(bdy_0x2dc142.enc.Hex) : _0x37dfdf(_0x59d6c0).toString(bdy_0x2dc142.enc.Hex);
}
function bdy_0x7f38a6(_0x2c5189, _0x401e63) {
  let _0x568293 = 1,
    _0x1923b7 = 0,
    _0x34e872 = _0x2c5189.length,
    _0x2b5765 = 0;
  "number" == typeof _0x401e63 && (_0x568293 = 65535 & _0x401e63, _0x1923b7 = _0x401e63 >>> 16 & 65535);
  for (let _0x4367cc = 0; _0x4367cc < _0x34e872;) {
    for (_0x2b5765 = Math.min(_0x34e872 - _0x4367cc, 3850) + _0x4367cc; _0x4367cc < _0x2b5765; _0x4367cc++) {
      _0x1923b7 += _0x568293 += 255 & _0x2c5189[_0x4367cc];
    }
    _0x568293 = 15 * (_0x568293 >>> 16) + (65535 & _0x568293);
    _0x1923b7 = 15 * (_0x1923b7 >>> 16) + (65535 & _0x1923b7);
  }
  return _0x1923b7 % 65521 << 16 | _0x568293 % 65521;
}
function bdy_0x589a6c(_0x31a92e, _0x34b9e9) {
  let _0x46cd8f = 1,
    _0xbc1074 = 0,
    _0xf07cc8 = _0x31a92e.length,
    _0xcec88f = 0,
    _0x3cab2c = 0,
    _0x2cbbb2 = 0;
  "number" == typeof _0x34b9e9 && (_0x46cd8f = 65535 & _0x34b9e9, _0xbc1074 = _0x34b9e9 >>> 16);
  for (let _0x4993b1 = 0; _0x4993b1 < _0xf07cc8;) {
    for (_0xcec88f = Math.min(_0xf07cc8 - _0x4993b1, 3850); _0xcec88f > 0;) {
      (_0x3cab2c = _0x31a92e.charCodeAt(_0x4993b1++)) < 128 ? _0x46cd8f += _0x3cab2c : _0x3cab2c < 2048 ? (_0xbc1074 += _0x46cd8f += 192 | _0x3cab2c >> 6 & 31, --_0xcec88f, _0x46cd8f += 128 | 63 & _0x3cab2c) : _0x3cab2c >= 55296 && _0x3cab2c < 57344 ? (_0xbc1074 += _0x46cd8f += 240 | (_0x3cab2c = 64 + (1023 & _0x3cab2c)) >> 8 & 7, --_0xcec88f, _0xbc1074 += _0x46cd8f += 128 | _0x3cab2c >> 2 & 63, --_0xcec88f, _0xbc1074 += _0x46cd8f += 128 | (_0x2cbbb2 = 1023 & _0x31a92e.charCodeAt(_0x4993b1++)) >> 6 & 15 | (3 & _0x3cab2c) << 4, --_0xcec88f, _0x46cd8f += 128 | 63 & _0x2cbbb2) : (_0xbc1074 += _0x46cd8f += 224 | _0x3cab2c >> 12 & 15, --_0xcec88f, _0xbc1074 += _0x46cd8f += 128 | _0x3cab2c >> 6 & 63, --_0xcec88f, _0x46cd8f += 128 | 63 & _0x3cab2c);
      _0xbc1074 += _0x46cd8f;
      --_0xcec88f;
    }
    _0x46cd8f = 15 * (_0x46cd8f >>> 16) + (65535 & _0x46cd8f);
    _0xbc1074 = 15 * (_0xbc1074 >>> 16) + (65535 & _0xbc1074);
  }
  return _0xbc1074 % 65521 << 16 | _0x46cd8f % 65521;
}
function bdy_0x2241e0(_0x11014a, _0x2d0e90, _0xd42b5) {
  if (_0x11014a) {
    return String.prototype.slice.call(_0x11014a, _0x2d0e90, _0xd42b5);
  }
  return "";
}
function bdy_0x2e7a50(_0x21a779) {
  var _0x5596dd = {
    magic: "tk",
    version: "03" || "02",
    platform: "w",
    expires: "41",
    producer: "l",
    expr: bdy_0x591598(),
    cipher: bdy_0x5b84f1(_0x21a779),
    adler32: bdy_0x37b8b3(_0x5596dd.magic + _0x5596dd.version + _0x5596dd.platform + _0x5596dd.expires + _0x5596dd.producer + _0x5596dd.expr + _0x5596dd.cipher)
  };
  return _0x5596dd.magic + _0x5596dd.version + _0x5596dd.platform + _0x5596dd.adler32 + _0x5596dd.expires + _0x5596dd.producer + _0x5596dd.expr + _0x5596dd.cipher;
}
function bdy_0x369850(_0x59b2f3) {
  var _0x13e9b2 = new Uint8Array(_0x59b2f3.length);
  Array.prototype.forEach.call(_0x13e9b2, function (_0x1a71b7, _0x248b92, _0x59ac45) {
    _0x59ac45[_0x248b92] = _0x59b2f3.charCodeAt(_0x248b92);
  });
  return bdy_0x3e854c(_0x13e9b2);
}
function bdy_0x3e854c(_0x30e8db) {
  return Array.prototype.map.call(_0x30e8db, function (_0x3a7df7) {
    var _0x53b2f3 = "00" + (_0x3a7df7 & 255).toString(16);
    return _0x53b2f3.slice(-2);
  }).join("");
}
function bdy_0x2c5430(_0x22b3cc) {
  return bdy_0x3e854c(bdy_0x215645(_0x22b3cc));
}
function bdy_0x5b84f1(_0x1f0fbb) {
  const _0x391f5b = {
    size: 32,
    dictType: "max",
    customDict: null
  };
  bdy_0x3b09e3(_0x391f5b);
  var _0x138766 = "",
    _0x4a1029 = Date.now(),
    _0x13a20f = "FX",
    _0x3c3904 = "4*iK&33Z|+6)",
    _0x5e9de7 = bdy_0x2ea25a(_0x1f0fbb, _0x4a1029, _0x13a20f, _0x3c3904);
  _0x138766 += bdy_0x369850(_0x5e9de7);
  _0x138766 += bdy_0x369850(_0x13a20f);
  _0x138766 += bdy_0x369850(_0x3c3904);
  _0x138766 += bdy_0x2c5430(_0x4a1029);
  _0x138766 += bdy_0x369850(_0x1f0fbb);
  var _0x5dfd8b = bdy_0x2dc142.enc.Hex.parse(_0x138766),
    _0x3b5739 = bdy_0x2dc142.AES.encrypt(_0x5dfd8b, bdy_0x2dc142.enc.Utf8.parse("gs8&99W04zm5U>Rz"), {
      iv: bdy_0x2dc142.enc.Utf8.parse("0102030405060708")
    });
  return bdy_0x4af231(bdy_0x2dc142.enc.Base64.stringify(_0x3b5739.ciphertext));
}
function bdy_0x4af231(_0xcf3ee3) {
  return _0xcf3ee3.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function bdy_0x2ea25a(_0x2a886c, _0x58d775, _0x3464d2, _0x2833fa) {
  var _0x480cc4 = new Uint8Array(16);
  Array.prototype.forEach.call(_0x480cc4, function (_0x323161, _0x501bcc, _0x21cd39) {
    _0x21cd39[_0x501bcc] = _0x2a886c.charCodeAt(_0x501bcc);
  });
  var _0x5c9206 = bdy_0x215645(_0x58d775),
    _0x554fa2 = new Uint8Array(2);
  Array.prototype.forEach.call(_0x554fa2, function (_0x42f84c, _0x5dedeb, _0x1763bd) {
    _0x1763bd[_0x5dedeb] = _0x3464d2.charCodeAt(_0x5dedeb);
  });
  var _0x532864 = new Uint8Array(12);
  Array.prototype.forEach.call(_0x532864, function (_0x1f46bc, _0x46b7d2, _0x5e2918) {
    _0x5e2918[_0x46b7d2] = _0x2833fa.charCodeAt(_0x46b7d2);
  });
  var _0x461887 = new Uint8Array(38);
  _0x461887.set(_0x554fa2);
  _0x461887.set(_0x532864, 2);
  _0x461887.set(_0x5c9206, 14);
  _0x461887.set(_0x480cc4, 22);
  var _0x24fd16 = bdy_0x7f38a6(_0x461887);
  _0x24fd16 >>>= 0;
  var _0x431bab = "00000000" + _0x24fd16.toString(16);
  return _0x431bab.substr(_0x431bab.length - 8);
}
function bdy_0x215645(_0x46289e) {
  var _0x3f94f6 = void 0;
  _0x3f94f6 = new ArrayBuffer(2);
  new DataView(_0x3f94f6).setInt16(0, 256, !0);
  var _0x240904 = new Int16Array(_0x3f94f6)[0] === 256;
  var _0x45f906 = Math.floor(_0x46289e / Math.pow(2, 32));
  var _0x59c3c1 = _0x46289e % Math.pow(2, 32);
  var _0x53628d = new ArrayBuffer(8);
  var _0x178860 = new DataView(_0x53628d);
  _0x240904 ? (_0x178860.setUint32(0, _0x59c3c1, _0x240904), _0x178860.setUint32(4, _0x45f906, _0x240904)) : (_0x178860.setUint32(0, _0x45f906, _0x240904), _0x178860.setUint32(4, _0x59c3c1, _0x240904));
  return new Uint8Array(_0x53628d);
}
function bdy_0x591598() {
  const _0x198bc1 = {
    size: 32,
    dictType: "max",
    customDict: null
  };
  var _0x18a0d9 = bdy_0x3b09e3(_0x198bc1),
    _0x1e4f43 = ["1", "2", "3"];
  for (var _0xa3f795 = ["+", "x"], _0xf2fe02 = 2 + Math.floor(Math.random() * 4), _0x4618f2 = "", _0x209723 = 0; _0x209723 < _0xf2fe02; _0x209723++) {
    _0x4618f2 += _0x1e4f43[Math.floor(Math.random() * 3)];
    _0x209723 < _0xf2fe02 - 1 && (_0x4618f2 += _0xa3f795[Math.floor(Math.random() * 2)]);
  }
  _0x4618f2.length < 9 && (_0x4618f2 += _0x18a0d9.substr(0, 9 - _0x4618f2.length));
  var _0x59e896 = bdy_0x2dc142.enc.Utf8.parse(_0x4618f2),
    _0x5f05ed = bdy_0x2dc142.enc.Base64.stringify(_0x59e896);
  return bdy_0x4af231(_0x5f05ed);
}
function bdy_0x3b09e3() {
  var _0x1e089d,
    _0x528271 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    _0x556db5 = _0x528271.size,
    _0x3004df = void 0 === _0x556db5 ? 10 : _0x556db5,
    _0x37c094 = _0x528271.dictType,
    _0x398f95 = void 0 === _0x37c094 ? "number" : _0x37c094,
    _0x19bce0 = _0x528271.customDict,
    _0x243a4a = "";
  if (_0x19bce0 && "string" == typeof _0x19bce0) {
    _0x1e089d = _0x19bce0;
  } else {
    switch (_0x398f95) {
      case "alphabet":
        _0x1e089d = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        break;
      case "max":
        _0x1e089d = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
        break;
      default:
        _0x1e089d = "0123456789";
    }
  }
  for (; _0x3004df--;) {
    _0x243a4a += _0x1e089d[Math.random() * _0x1e089d.length | 0];
  }
  return _0x243a4a;
}
function bdy_0x37b8b3(_0x4cb9a4) {
  var _0xf3d3 = bdy_0x589a6c(_0x4cb9a4) >>> 0,
    _0x12c43b = "00000000" + _0xf3d3.toString(16);
  return _0x12c43b.substr(_0x12c43b.length - 8);
}
function bdy_0x1cee52() {
  var _0xc71409 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now(),
    _0x6398b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd",
    _0x59eb11 = new Date(_0xc71409),
    _0x2fd7f1 = _0x6398b,
    _0x5a23ce = {
      "M+": _0x59eb11.getMonth() + 1,
      "d+": _0x59eb11.getDate(),
      "D+": _0x59eb11.getDate(),
      "h+": _0x59eb11.getHours(),
      "H+": _0x59eb11.getHours(),
      "m+": _0x59eb11.getMinutes(),
      "s+": _0x59eb11.getSeconds(),
      "w+": _0x59eb11.getDay(),
      "q+": Math.floor((_0x59eb11.getMonth() + 3) / 3),
      "S+": _0x59eb11.getMilliseconds()
    };
  /(y+)/i.test(_0x2fd7f1) && (_0x2fd7f1 = _0x2fd7f1.replace(RegExp.$1, "".concat(_0x59eb11.getFullYear()).substr(4 - RegExp.$1.length)));
  Object.keys(_0x5a23ce).forEach(function (_0x69442a) {
    if (new RegExp("(".concat(_0x69442a, ")")).test(_0x2fd7f1)) {
      var _0x134310 = "S+" === _0x69442a ? "000" : "00";
      _0x2fd7f1 = _0x2fd7f1.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5a23ce[_0x69442a] : "".concat(_0x134310).concat(_0x5a23ce[_0x69442a]).substr("".concat(_0x5a23ce[_0x69442a]).length));
    }
  });
  return _0x2fd7f1;
}
function bdy_0x4f5c58(_0x3dd158, _0x4affe4, _0x3a489a, _0xbb9b2f) {
  let _0x1ba793 = {
    version: "4.7",
    fp: _0x4affe4,
    appId: _0x3dd158,
    timestamp: Date.now(),
    platform: "web",
    expandParams: "",
    fv: "h5_file_v4.7.4"
  };
  _0x1ba793.expandParams = _0xbb9b2f || "";
  const _0x542fb8 = {
    Host: "cactus.jd.com",
    "Content-Type": "application/json",
    "User-agent": _0x3a489a
  };
  let _0x315b2f = {
    url: "https://cactus.jd.com/request_algo?g_ty=ajax",
    body: JSON.stringify(_0x1ba793),
    headers: _0x542fb8,
    timeout: 30000
  };
  return new Promise(async _0x1b41aa => {
    bdy_0x1d49a3(_0x315b2f, (_0x4a73b9, _0x4b1dac, _0x46cddb) => {
      try {
        if (_0x4a73b9) {
          console.log("" + JSON.stringify(_0x4a73b9));
          console.log("algo请求失败，请检查网路重试");
        } else {
          _0x46cddb = JSON.parse(_0x46cddb);
          _0x46cddb = _0x46cddb.data.result;
        }
      } catch (_0xe62a62) {
        console(_0xe62a62, _0x4b1dac);
      } finally {
        _0x1b41aa(_0x46cddb);
      }
    });
  });
}
function bdy_0x140cd8(_0x439507) {
  let _0x4e64c5 = _0x439507.size,
    _0x383775 = _0x439507.num,
    _0x47f172 = _0x383775,
    _0x10236b = "";
  for (; _0x4e64c5--;) {
    _0x10236b += _0x47f172[Math.random() * _0x47f172.length | 0];
  }
  return _0x10236b;
}
function bdy_0x22f274(_0x256e29, _0x3587b4) {
  for (let _0x37c88b = 0; _0x37c88b < _0x3587b4.length; _0x37c88b++) {
    let _0x5572fd = _0x256e29.indexOf(_0x3587b4[_0x37c88b]);
    _0x5572fd !== -1 && (_0x256e29 = _0x256e29.replace(_0x3587b4[_0x37c88b], ""));
  }
  return _0x256e29;
}
function bdy_0x4d5fa1(_0xf67269, _0x497eb0) {
  let _0x175852 = [],
    _0x11e936 = _0xf67269.length;
  for (let _0x23fde9 = 0; _0x23fde9 < 10; _0x23fde9++) {
    let _0x4f3e6a = _0xf67269[_0x23fde9];
    if (Math.random() * _0x11e936 < _0x497eb0 && (_0x175852.push(_0x4f3e6a), --_0x497eb0 == 0)) {
      break;
    }
    _0x11e936--;
  }
  let _0x30e491 = "";
  for (let _0x5f1942 = 0; _0x5f1942 < _0x175852.length; _0x5f1942++) {
    let _0x408faa = Math.random() * (_0x175852.length - _0x5f1942) | 0;
    _0x30e491 += _0x175852[_0x408faa];
    _0x175852[_0x408faa] = _0x175852[_0x175852.length - _0x5f1942 - 1];
  }
  return _0x30e491;
}
function bdy_0x5af17e() {
  let _0xd19b97 = "1uct6d0jhq",
    _0x40f902 = bdy_0x4d5fa1(_0xd19b97, 5),
    _0x230e0b = Math.random() * 10 | 0,
    _0x3b1ea7 = bdy_0x22f274(_0xd19b97, _0x40f902),
    _0x142e65 = {
      size: _0x230e0b,
      num: _0x3b1ea7
    };
  let _0x4f17ab = bdy_0x140cd8(_0x142e65) + _0x40f902 + bdy_0x140cd8({
      size: 10 - _0x230e0b,
      num: _0x3b1ea7
    }) + _0x230e0b,
    _0x11faac = _0x4f17ab.split(""),
    _0x144b7a = _0x11faac.slice(0, 15),
    _0x3e96e1 = _0x11faac.slice(15),
    _0x577703 = [];
  for (; _0x144b7a.length > 0;) {
    _0x577703.push((35 - parseInt(_0x144b7a.pop(), 36)).toString(36));
  }
  _0x577703 = _0x577703.concat(_0x3e96e1);
  let _0x42c92e = _0x577703.join("");
  return _0x42c92e;
}
function bdy_0x439df7(_0x160156) {
  let _0x240069 = _0x160156.size,
    _0xf9e3e7 = _0x160156.num,
    _0x37111b = "";
  for (; _0x240069--;) {
    _0x37111b += _0xf9e3e7[Math.random() * _0xf9e3e7.length | 0];
  }
  return _0x37111b;
}
class bdy_0x5c8ef6 {
  constructor(_0x1e6889, _0x1f1cff, _0x2a2386) {
    this[_0x1e6889] = _0x1e6889;
    this.ua = _0x1f1cff;
    this.fp = _0x2a2386 || this.__genFp();
  }
  __genFp() {
    let _0x2cf519 = "0123456789",
      _0x5d65c9 = 13,
      _0x429a7a = "";
    for (; _0x5d65c9--;) {
      _0x429a7a += _0x2cf519[Math.random() * _0x2cf519.length | 0];
    }
    return (_0x429a7a + Date.now()).slice(0, 16);
  }
  async __genAlgo() {
    this.time = Date.now();
    this.timestamp = format(this.time, "yyyyMMddHHmmssSSS");
    let {
      data: _0x5777ce
    } = await axios.post("https://cactus.jd.com/request_algo?g_ty=ajax", {
      version: "4.7",
      fp: this.fp,
      appId: this[appId].toString(),
      timestamp: this.time,
      platform: "web",
      expandParams: ""
    }, {
      headers: {
        Host: "cactus.jd.com",
        accept: "application/json",
        "content-type": "application/json",
        "user-agent": this.ua
      }
    });
    this.tk = _0x5777ce.data.result.tk;
    this.rd = _0x5777ce.data.result.algo.match(/rd='(.*)'/)[1];
    this.enc = _0x5777ce.data.result.algo.match(/algo\.(.*)\(/)[1];
  }
  __genKey(_0x22203e, _0x5ea650, _0x2d7532, _0x436038, _0x3316db) {
    let _0x2dea5c = "" + _0x22203e + _0x5ea650 + _0x2d7532 + _0x436038 + this.rd;
    return _0x3316db[this.enc](_0x2dea5c, _0x22203e);
  }
  __genH5st(_0x3490a5) {
    let _0x2b3506 = this.__genKey(this.tk, this.fp, this.timestamp, this[appId], CryptoJS).toString(CryptoJS.enc.Hex),
      _0x21ba18 = "";
    for (let _0x43411e of Object.keys(_0x3490a5)) {
      _0x43411e === "body" ? _0x21ba18 += _0x43411e + ":" + CryptoJS.SHA256(_0x3490a5[_0x43411e]).toString(CryptoJS.enc.Hex) + "&" : _0x21ba18 += _0x43411e + ":" + _0x3490a5[_0x43411e] + "&";
    }
    _0x21ba18 = _0x21ba18.slice(0, -1);
    _0x21ba18 = CryptoJS.HmacSHA256(_0x21ba18, _0x2b3506).toString(CryptoJS.enc.Hex);
    return encodeURIComponent(this.timestamp + ";" + this.fp + ";" + this[appId].toString() + ";" + this.tk + ";" + _0x21ba18 + ";3.0;" + this.time.toString());
  }
}
bdy_0x79d404(1);
async function bdy_0x57852c() {
  let {
    body: _0x43a7ea,
    ua: _0x3d90e9,
    user: _0x127f65,
    clientVersion: _0x52291f,
    client: _0x3d4502,
    functionId: _0x490c82,
    appId: _0x38def1,
    code: _0xd22a01,
    appid: _0x24243f,
    xcr: _0x348f9a,
    nco: _0x1892d2
  } = arguments[0];
  const _0x14350d = {
    size: _0x1892d2 || 12,
    type: "max"
  };
  let _0x35dbd2 = bdy_0x419a9e(_0x14350d),
    _0x4664d4 = bdy_0x419a9e({
      size: _0x1892d2 || 12,
      type: "max"
    });
  (!bdy_0x29f152[_0x38def1] || _0x348f9a || bdy_0x29f152[_0x38def1].user != _0x127f65) && (bdy_0x29f152[_0x38def1] = {}, bdy_0x29f152[_0x38def1].fp = bdy_0x5af17e());
  _0x43a7ea = typeof _0x43a7ea !== "string" ? JSON.stringify(_0x43a7ea) : _0x43a7ea;
  let _0xbac045 = ["wc", "wd", "l", "ls", "ml", "pl", "av", "ua", "sua", "pp", "extend", "pp1", "w", "h", "ow", "oh", "url", "og", "pf", "pr", "re", "random"],
    _0x58cb5c = {};
  const _0x5ac92d = {
    wd: 0,
    l: 0,
    ls: 0,
    wk: 0,
    bu1: "0.1.7",
    bu2: -1,
    bu3: 50,
    bu4: 0,
    b5: 0
  };
  let _0x3f6ffe = [1, 0, "zh-CN", "zh-CN,en-US", 0, 0, _0x3d90e9.match(/(?<=\/)[0-9]\.0[^'"\n]+/g)[0], _0x3d90e9, _0x3d90e9.match(/\(([^\)]+)\)/)[1], {}, _0x5ac92d, "", 393, 873, 393, 779, "", "", "", 2.75, "", _0x35dbd2];
  for (let _0x18d2ec in _0xbac045) {
    _0x58cb5c[_0xbac045[_0x18d2ec]] = _0x3f6ffe[_0x18d2ec];
  }
  const _0x595aae = {
    referer: "",
    v: "h5_file_v4.7.4",
    ai: _0x38def1,
    fp: bdy_0x29f152[_0x38def1].fp
  };
  const _0x5bcb74 = {
    ..._0x58cb5c,
    ..._0x595aae
  };
  let _0x58c599 = _0x5bcb74,
    _0x21becf = new Date().getTime();
  bdy_0x29f152[_0x38def1].tk = bdy_0x2e7a50(bdy_0x29f152[_0x38def1].fp);
  bdy_0x29f152[_0x38def1].user = _0x127f65;
  let _0x2b8af9 = new Date().getTime(),
    _0x3a2ff8 = bdy_0x1cee52(_0x2b8af9, "yyyyMMddhhmmssSSS"),
    _0x1fb9fb = _0x3a2ff8 + "47",
    _0x36887f = bdy_0x4414d0(bdy_0x29f152[_0x38def1].tk, bdy_0x29f152[_0x38def1].fp, _0x1fb9fb, _0x38def1);
  const _0x25a394 = {
    appid: _0x24243f,
    functionId: _0x490c82,
    body: _0x43a7ea
  };
  _0xd22a01 && (_0x25a394.t = _0x21becf);
  _0x52291f && (_0x25a394.clientVersion = _0x52291f);
  _0x3d4502 && (_0x25a394.client = _0x3d4502);
  let _0x166f6b = _0x25a394,
    _0x5a167a = ["appid", "body", "client", "clientVersion", "functionId", "t"],
    _0x5cf746 = _0x5a167a.filter(_0x77da4a => _0x25a394[_0x77da4a]).map(_0x39c394 => _0x39c394 + ":" + (_0x39c394 == "body" ? bdy_0x2dc142.SHA256(_0x25a394[_0x39c394]).toString() : _0x25a394[_0x39c394])).join("&"),
    _0x37c196 = bdy_0x2dc142.MD5(_0x36887f + _0x5cf746 + _0x36887f + "7n5<G*").toString(bdy_0x2dc142.enc.Hex),
    _0x49836a = bdy_0x2dc142.MD5(_0x36887f + ("appid:" + _0x24243f + "&functionId:" + _0x490c82) + _0x36887f + "7n5<G*").toString(bdy_0x2dc142.enc.Hex),
    _0x5509b7 = "",
    _0x3b85e7 = {
      sua: _0x3d90e9.match(/\(([^\)]+)\)/)[1],
      pp: {}
    };
  _0x3b85e7.pp.p1 = _0x127f65;
  const _0x1a3625 = {
    wd: 0,
    l: 0,
    ls: 0,
    wk: 0,
    bu1: "0.1.7",
    bu2: -1,
    bu3: 75,
    bu4: 0,
    bu5: 0,
    bu6: 20
  };
  _0x3b85e7.extend = _0x1a3625;
  _0x3b85e7.random = _0x4664d4;
  _0x3b85e7.v = "h5_file_v4.7.4";
  _0x3b85e7.fp = bdy_0x29f152[_0x38def1].fp;
  let _0x2bed59 = bdy_0x2dc142.AES.encrypt(JSON.stringify(_0x3b85e7, null, 2), bdy_0x2dc142.enc.Utf8.parse("X[FMV04Nfvd?Y6M_"), {
    iv: bdy_0x2dc142.enc.Utf8.parse("0102030405060708"),
    mode: bdy_0x2dc142.mode.CBC,
    padding: bdy_0x2dc142.pad.Pkcs7
  });
  _0x5509b7 = bdy_0xea2f35(_0x2bed59);
  let _0x59bf39 = [_0x3a2ff8, bdy_0x29f152[_0x38def1].fp, _0x38def1, bdy_0x29f152[_0x38def1].tk, _0x37c196, 4.7, _0x2b8af9, _0x5509b7, _0x49836a].join(";"),
    _0x4a84bc = Object.entries(_0x166f6b).map(([_0x252d96, _0x4d7084]) => _0x252d96 + "=" + (typeof _0x4d7084 == "string" ? encodeURIComponent(_0x4d7084) : encodeURIComponent(JSON.stringify(_0x4d7084)))).join("&");
  return _0x4a84bc + "&h5st=" + encodeURIComponent(_0x59bf39);
}
function bdy_0xea2f35(_0x139119) {
  let _0x1f29f7 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".split("").filter(Boolean),
    _0x709710 = "WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX".split("").filter(Boolean),
    _0xf320b4 = Object.fromEntries(_0x1f29f7.map((_0x64f85f, _0x487993) => [_0x64f85f, _0x709710[_0x487993]])),
    _0x9115f9 = _0x139119.ciphertext.toString();
  var _0x25e96a = 3 - _0x139119.ciphertext.sigBytes % 3;
  for (let _0x1e80ca of Array(_0x25e96a)) {
    _0x9115f9 += "0" + _0x25e96a;
  }
  let _0x2bd16f = new Buffer.from(_0x9115f9, "hex").toString("Base64").split("").reverse().join("");
  return _0x2bd16f.split("").map(_0x164a18 => _0xf320b4[_0x164a18] || _0x164a18).join("").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function bdy_0x1d49a3(_0x3c5861, _0x516d37 = () => {}) {
  const {
    url: _0x4fe5de,
    ..._0x2aafe6
  } = _0x3c5861;
  bdy_0x4ef7cc.post(_0x4fe5de, _0x2aafe6).then(_0x478402 => {
    const {
        statusCode: _0x3b85ab,
        statusCode: _0x227e9c,
        headers: _0x153823,
        body: _0x16ba59
      } = _0x478402,
      _0x19224d = {
        status: _0x3b85ab,
        statusCode: _0x227e9c,
        headers: _0x153823,
        body: _0x16ba59
      };
    _0x516d37(null, _0x19224d, _0x16ba59);
  }, _0x5f4413 => {
    const {
      message: _0x3aa8ea,
      response: _0x54002b
    } = _0x5f4413;
    _0x516d37(_0x3aa8ea, _0x54002b, _0x54002b && _0x54002b.body);
  });
}
const bdy_0x4744e6 = {
  getbody: bdy_0x57852c,
  H5ST: bdy_0x5c8ef6
};
module.exports = bdy_0x4744e6;