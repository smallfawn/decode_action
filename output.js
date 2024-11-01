//Fri Nov 01 2024 01:39:36 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function en(_0x14e586) {
  for (var _0x286090 = "", _0xd4a30e = "0123456789", _0x31de21 = _0xd4a30e.length, _0x25c148 = 0; _0x25c148 < _0x14e586; _0x25c148++) {
    _0x286090 += _0xd4a30e.charAt(Math.floor(Math.random() * _0x31de21));
  }
  return _0x286090;
}
function on(_0x4d99cb) {
  return _0x4d99cb ? (2 * Math.floor(5 * Math.random()) + 1).toString() + en(15) : (2 * Math.floor(5 * Math.random())).toString() + en(15);
}
var V = {
  _x64Add: function (_0x234eeb, _0x3f838b) {
    _0x234eeb = [_0x234eeb[0] >>> 16, 65535 & _0x234eeb[0], _0x234eeb[1] >>> 16, 65535 & _0x234eeb[1]];
    _0x3f838b = [_0x3f838b[0] >>> 16, 65535 & _0x3f838b[0], _0x3f838b[1] >>> 16, 65535 & _0x3f838b[1]];
    var _0x4432f1 = [0, 0, 0, 0];
    _0x4432f1[3] += _0x234eeb[3] + _0x3f838b[3];
    _0x4432f1[2] += _0x4432f1[3] >>> 16;
    _0x4432f1[3] &= 65535;
    _0x4432f1[2] += _0x234eeb[2] + _0x3f838b[2];
    _0x4432f1[1] += _0x4432f1[2] >>> 16;
    _0x4432f1[2] &= 65535;
    _0x4432f1[1] += _0x234eeb[1] + _0x3f838b[1];
    _0x4432f1[0] += _0x4432f1[1] >>> 16;
    _0x4432f1[1] &= 65535;
    _0x4432f1[0] += _0x234eeb[0] + _0x3f838b[0];
    _0x4432f1[0] &= 65535;
    return [_0x4432f1[0] << 16 | _0x4432f1[1], _0x4432f1[2] << 16 | _0x4432f1[3]];
  },
  _x64Multiply: function (_0x402e33, _0x27cb7c) {
    _0x402e33 = [_0x402e33[0] >>> 16, 65535 & _0x402e33[0], _0x402e33[1] >>> 16, 65535 & _0x402e33[1]];
    _0x27cb7c = [_0x27cb7c[0] >>> 16, 65535 & _0x27cb7c[0], _0x27cb7c[1] >>> 16, 65535 & _0x27cb7c[1]];
    var _0x1edbea = [0, 0, 0, 0];
    _0x1edbea[3] += _0x402e33[3] * _0x27cb7c[3];
    _0x1edbea[2] += _0x1edbea[3] >>> 16;
    _0x1edbea[3] &= 65535;
    _0x1edbea[2] += _0x402e33[2] * _0x27cb7c[3];
    _0x1edbea[1] += _0x1edbea[2] >>> 16;
    _0x1edbea[2] &= 65535;
    _0x1edbea[2] += _0x402e33[3] * _0x27cb7c[2];
    _0x1edbea[1] += _0x1edbea[2] >>> 16;
    _0x1edbea[2] &= 65535;
    _0x1edbea[1] += _0x402e33[1] * _0x27cb7c[3];
    _0x1edbea[0] += _0x1edbea[1] >>> 16;
    _0x1edbea[1] &= 65535;
    _0x1edbea[1] += _0x402e33[2] * _0x27cb7c[2];
    _0x1edbea[0] += _0x1edbea[1] >>> 16;
    _0x1edbea[1] &= 65535;
    _0x1edbea[1] += _0x402e33[3] * _0x27cb7c[1];
    _0x1edbea[0] += _0x1edbea[1] >>> 16;
    _0x1edbea[1] &= 65535;
    _0x1edbea[0] += _0x402e33[0] * _0x27cb7c[3] + _0x402e33[1] * _0x27cb7c[2] + _0x402e33[2] * _0x27cb7c[1] + _0x402e33[3] * _0x27cb7c[0];
    _0x1edbea[0] &= 65535;
    return [_0x1edbea[0] << 16 | _0x1edbea[1], _0x1edbea[2] << 16 | _0x1edbea[3]];
  },
  _x64Rotl: function (_0x22bb11, _0x21aa33) {
    return 32 == (_0x21aa33 %= 64) ? [_0x22bb11[1], _0x22bb11[0]] : _0x21aa33 < 32 ? [_0x22bb11[0] << _0x21aa33 | _0x22bb11[1] >>> 32 - _0x21aa33, _0x22bb11[1] << _0x21aa33 | _0x22bb11[0] >>> 32 - _0x21aa33] : (_0x21aa33 -= 32, [_0x22bb11[1] << _0x21aa33 | _0x22bb11[0] >>> 32 - _0x21aa33, _0x22bb11[0] << _0x21aa33 | _0x22bb11[1] >>> 32 - _0x21aa33]);
  },
  _x64LeftShift: function (_0x11c863, _0x513b9d) {
    return 0 == (_0x513b9d %= 64) ? _0x11c863 : _0x513b9d < 32 ? [_0x11c863[0] << _0x513b9d | _0x11c863[1] >>> 32 - _0x513b9d, _0x11c863[1] << _0x513b9d] : [_0x11c863[1] << _0x513b9d - 32, 0];
  },
  _x64Xor: function (_0x2d6c60, _0x17fa26) {
    return [_0x2d6c60[0] ^ _0x17fa26[0], _0x2d6c60[1] ^ _0x17fa26[1]];
  },
  _x64Fmix: function (_0x416673) {
    _0x416673 = this._x64Xor(_0x416673, [0, _0x416673[0] >>> 1]);
    _0x416673 = this._x64Multiply(_0x416673, [4283543511, 3981806797]);
    _0x416673 = this._x64Xor(_0x416673, [0, _0x416673[0] >>> 1]);
    _0x416673 = this._x64Multiply(_0x416673, [3301882366, 444984403]);
    return this._x64Xor(_0x416673, [0, _0x416673[0] >>> 1]);
  },
  hash128: function (_0x6a6192, _0x4609b4) {
    _0x4609b4 = _0x4609b4 || 0;
    for (var _0x23f65a = (_0x6a6192 = _0x6a6192 || "").length % 16, _0x33a5b1 = _0x6a6192.length - _0x23f65a, _0x27c3fb = [0, _0x4609b4], _0x316c69 = [0, _0x4609b4], _0xcedd07 = [0, 0], _0x2ac3fa = [0, 0], _0x49e2df = [2277735313, 289559509], _0x214fe0 = [1291169091, 658871167], _0x3cecc8 = 0; _0x3cecc8 < _0x33a5b1; _0x3cecc8 += 16) {
      _0xcedd07 = [255 & _0x6a6192.charCodeAt(_0x3cecc8 + 4) | (255 & _0x6a6192.charCodeAt(_0x3cecc8 + 5)) << 8 | (255 & _0x6a6192.charCodeAt(_0x3cecc8 + 6)) << 16 | (255 & _0x6a6192.charCodeAt(_0x3cecc8 + 7)) << 24, 255 & _0x6a6192.charCodeAt(_0x3cecc8) | (255 & _0x6a6192.charCodeAt(_0x3cecc8 + 1)) << 8 | (255 & _0x6a6192.charCodeAt(_0x3cecc8 + 2)) << 16 | (255 & _0x6a6192.charCodeAt(_0x3cecc8 + 3)) << 24];
      _0x2ac3fa = [255 & _0x6a6192.charCodeAt(_0x3cecc8 + 12) | (255 & _0x6a6192.charCodeAt(_0x3cecc8 + 13)) << 8 | (255 & _0x6a6192.charCodeAt(_0x3cecc8 + 14)) << 16 | (255 & _0x6a6192.charCodeAt(_0x3cecc8 + 15)) << 24, 255 & _0x6a6192.charCodeAt(_0x3cecc8 + 8) | (255 & _0x6a6192.charCodeAt(_0x3cecc8 + 9)) << 8 | (255 & _0x6a6192.charCodeAt(_0x3cecc8 + 10)) << 16 | (255 & _0x6a6192.charCodeAt(_0x3cecc8 + 11)) << 24];
      _0xcedd07 = this._x64Multiply(_0xcedd07, _0x49e2df);
      _0xcedd07 = this._x64Rotl(_0xcedd07, 31);
      _0xcedd07 = this._x64Multiply(_0xcedd07, _0x214fe0);
      _0x27c3fb = this._x64Xor(_0x27c3fb, _0xcedd07);
      _0x27c3fb = this._x64Rotl(_0x27c3fb, 27);
      _0x27c3fb = this._x64Add(_0x27c3fb, _0x316c69);
      _0x27c3fb = this._x64Add(this._x64Multiply(_0x27c3fb, [0, 5]), [0, 1390208809]);
      _0x2ac3fa = this._x64Multiply(_0x2ac3fa, _0x214fe0);
      _0x2ac3fa = this._x64Rotl(_0x2ac3fa, 33);
      _0x2ac3fa = this._x64Multiply(_0x2ac3fa, _0x49e2df);
      _0x316c69 = this._x64Xor(_0x316c69, _0x2ac3fa);
      _0x316c69 = this._x64Rotl(_0x316c69, 31);
      _0x316c69 = this._x64Add(_0x316c69, _0x27c3fb);
      _0x316c69 = this._x64Add(this._x64Multiply(_0x316c69, [0, 5]), [0, 944331445]);
    }
    switch (_0xcedd07 = [0, 0], _0x2ac3fa = [0, 0], _0x23f65a) {
      case 15:
        _0x2ac3fa = this._x64Xor(_0x2ac3fa, this._x64LeftShift([0, _0x6a6192.charCodeAt(_0x3cecc8 + 14)], 48));
      case 14:
        _0x2ac3fa = this._x64Xor(_0x2ac3fa, this._x64LeftShift([0, _0x6a6192.charCodeAt(_0x3cecc8 + 13)], 40));
      case 13:
        _0x2ac3fa = this._x64Xor(_0x2ac3fa, this._x64LeftShift([0, _0x6a6192.charCodeAt(_0x3cecc8 + 12)], 32));
      case 12:
        _0x2ac3fa = this._x64Xor(_0x2ac3fa, this._x64LeftShift([0, _0x6a6192.charCodeAt(_0x3cecc8 + 11)], 24));
      case 11:
        _0x2ac3fa = this._x64Xor(_0x2ac3fa, this._x64LeftShift([0, _0x6a6192.charCodeAt(_0x3cecc8 + 10)], 16));
      case 10:
        _0x2ac3fa = this._x64Xor(_0x2ac3fa, this._x64LeftShift([0, _0x6a6192.charCodeAt(_0x3cecc8 + 9)], 8));
      case 9:
        _0x2ac3fa = this._x64Xor(_0x2ac3fa, [0, _0x6a6192.charCodeAt(_0x3cecc8 + 8)]);
        _0x2ac3fa = this._x64Multiply(_0x2ac3fa, _0x214fe0);
        _0x2ac3fa = this._x64Rotl(_0x2ac3fa, 33);
        _0x2ac3fa = this._x64Multiply(_0x2ac3fa, _0x49e2df);
        _0x316c69 = this._x64Xor(_0x316c69, _0x2ac3fa);
      case 8:
        _0xcedd07 = this._x64Xor(_0xcedd07, this._x64LeftShift([0, _0x6a6192.charCodeAt(_0x3cecc8 + 7)], 56));
      case 7:
        _0xcedd07 = this._x64Xor(_0xcedd07, this._x64LeftShift([0, _0x6a6192.charCodeAt(_0x3cecc8 + 6)], 48));
      case 6:
        _0xcedd07 = this._x64Xor(_0xcedd07, this._x64LeftShift([0, _0x6a6192.charCodeAt(_0x3cecc8 + 5)], 40));
      case 5:
        _0xcedd07 = this._x64Xor(_0xcedd07, this._x64LeftShift([0, _0x6a6192.charCodeAt(_0x3cecc8 + 4)], 32));
      case 4:
        _0xcedd07 = this._x64Xor(_0xcedd07, this._x64LeftShift([0, _0x6a6192.charCodeAt(_0x3cecc8 + 3)], 24));
      case 3:
        _0xcedd07 = this._x64Xor(_0xcedd07, this._x64LeftShift([0, _0x6a6192.charCodeAt(_0x3cecc8 + 2)], 16));
      case 2:
        _0xcedd07 = this._x64Xor(_0xcedd07, this._x64LeftShift([0, _0x6a6192.charCodeAt(_0x3cecc8 + 1)], 8));
      case 1:
        _0xcedd07 = this._x64Xor(_0xcedd07, [0, _0x6a6192.charCodeAt(_0x3cecc8)]);
        _0xcedd07 = this._x64Multiply(_0xcedd07, _0x49e2df);
        _0xcedd07 = this._x64Rotl(_0xcedd07, 31);
        _0xcedd07 = this._x64Multiply(_0xcedd07, _0x214fe0);
        _0x27c3fb = this._x64Xor(_0x27c3fb, _0xcedd07);
    }
    _0x27c3fb = this._x64Xor(_0x27c3fb, [0, _0x6a6192.length]);
    _0x316c69 = this._x64Xor(_0x316c69, [0, _0x6a6192.length]);
    _0x27c3fb = this._x64Add(_0x27c3fb, _0x316c69);
    _0x316c69 = this._x64Add(_0x316c69, _0x27c3fb);
    _0x27c3fb = this._x64Fmix(_0x27c3fb);
    _0x316c69 = this._x64Fmix(_0x316c69);
    _0x27c3fb = this._x64Add(_0x27c3fb, _0x316c69);
    _0x316c69 = this._x64Add(_0x316c69, _0x27c3fb);
    return ("00000000" + (_0x27c3fb[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x27c3fb[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x316c69[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (_0x316c69[1] >>> 0).toString(16)).slice(-8);
  }
};
function nn(_0x7f6ae3, _0x27509b) {
  var _0x3c9553 = "",
    _0x16f5b9 = 0;
  for (_0x16f5b9 = 0; _0x16f5b9 < _0x7f6ae3.length; _0x16f5b9++) {
    var _0x54cc13 = _0x7f6ae3.charAt(_0x16f5b9);
    _0x3c9553 += _0x27509b.charAt("0123456789-".indexOf(_0x54cc13));
  }
  return _0x3c9553;
}
function _typeof(_0x2b94db) {
  return _0x2b94db && "function" == typeof Symbol && _0x2b94db.constructor === Symbol && _0x2b94db !== Symbol.prototype ? "symbol" : typeof _0x2b94db;
}
function rn() {
  var _0x848934,
    _0x92fc19 = new Date().getTime();
  try {
    _0x848934 = performance && performance.now && 1000 * performance.now() || 0;
  } catch (_0x4a06bb) {
    _0x848934 = new Date().getTime().toString().slice(-9);
  }
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (_0x178df4) {
    var _0x48576e = 16 * Math.random();
    0 < _0x92fc19 ? (_0x48576e = (_0x92fc19 + _0x48576e) % 16 | 0, _0x92fc19 = Math.floor(_0x92fc19 / 16)) : (_0x48576e = (_0x848934 + _0x48576e) % 16 | 0, _0x848934 = Math.floor(_0x848934 / 16));
    return ("x" === _0x178df4 ? _0x48576e : 3 & _0x48576e | 8).toString(16);
  });
}
var kn = {};
function sign(_0x3b67a6, _0x908df5) {
  null !== _0x908df5 && "" !== _0x908df5 || (_0x908df5 = rn());
  var _0x5f106e;
  if (_0x3b67a6.query && "object" === Rn(_0x3b67a6.query) || _0x3b67a6.body && "string" === _typeof(_0x3b67a6.body)) {
    var _0x589e22 = "";
    if (_0x3b67a6.body) {
      _0x589e22 = _0x3b67a6.body;
    } else {
      for (var _0x1a9bad = Object.keys(_0x3b67a6.query).sort(), _0x2bb3c9 = {}, _0x540384 = 0; _0x540384 < _0x1a9bad.length; _0x540384++) {
        if ("string" !== n(_0x3b67a6.query[_0x1a9bad[_0x540384]]) && null !== _0x3b67a6.query[_0x1a9bad[_0x540384]]) {
          return {
            code: 2002,
            msg: "query的value值含有非字符串类型"
          };
        }
        _0x2bb3c9[_0x1a9bad[_0x540384]] = null === _0x3b67a6.query[_0x1a9bad[_0x540384]] ? "" : _0x3b67a6.query[_0x1a9bad[_0x540384]];
      }
      _0x5f106e = _0x2bb3c9;
      _0x589e22 = Object.entries(_0x5f106e).map(function (_0x3fb64e) {
        var _0x45bbae = U(_0x3fb64e, 2);
        return "" + _0x45bbae[0] + _0x45bbae[1];
      }).join("");
    }
    _0x3b67a6.path in kn ? kn[_0x3b67a6.path] += 1 : kn[_0x3b67a6.path] = 1;
    var _0x12ca67 = function (_0x25dc5a) {
      var _0x458f6c;
      _0x458f6c = 254 < _0x25dc5a ? "ff" : 2 === _0x25dc5a.toString(16).length ? _0x25dc5a.toString(16) : "0" + _0x25dc5a.toString(16);
      var _0x1a990e = new Date().getTime().toString().slice(-10),
        _0x40c599 = nn(_0x1a990e, "wtuosgjkxbm"),
        _0x44adb8 = Math.floor(90 * Math.random()) + 10,
        _0x44cf81 = 1 + (((Number(_0x44adb8) + Number(_0x1a990e)) % 256).toString() + _0x44adb8.toString() + _0x1a990e).slice(0, 10) + _0x458f6c + _0x44adb8,
        _0x1a91f2 = V.hash128(_0x44cf81).slice(8, 16);
      return _0x458f6c + 1 .toString(16) + _0x44adb8 + _0x40c599 + _0x1a91f2;
    }(kn[_0x3b67a6.path]);
    if (23 !== _0x12ca67.length) {
      return {
        code: 2003,
        msg: "ts不符合规范"
      };
    }
    var _0x170f5b = encodeURIComponent(_0x589e22 + _0x12ca67).replace(/%20/g, "+").replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/~/g, "%7E");
    if (w = V.hash128(_0x170f5b) + _0x908df5, 64 !== w.length) {
      return {
        code: 2004,
        msg: "sign1不符合规范"
      };
    }
    temp = on(!1);
    var _0x4c90ec = V.hash128(w + _0x3b67a6.path).slice(-16) + temp,
      _0x5f1c06 = V.hash128(_0x908df5 + "4").slice(-16) + _0x4c90ec;
    if (48 !== _0x5f1c06.length) {
      return {
        code: 2005,
        msg: "sign2不符合规范"
      };
    }
    var _0x4a3980 = V.hash128(_0x5f1c06);
    if (32 !== _0x4a3980.length) {
      return {
        code: 2006,
        msg: "sign3不符合规范"
      };
    }
    var _0x17a66f = "m" + w + _0x12ca67 + _0x5f1c06 + _0x4a3980;
    return 168 !== _0x17a66f.length ? {
      code: 2008,
      msg: "finalSign不符合规范"
    } : {
      code: 0,
      sign: _0x17a66f,
      cid: _0x908df5
    };
  }
  return {
    code: 2001,
    msg: "请传入合法的query或者body"
  };
}
function td_sign(body, _0x2df3b9, url) {
  param = {
    path: url,
    body: JSON.stringify(body)
  };
  return sign(param, _0x2df3b9);
}
console.log(td_sign({}, "", "new/sg/order/create_order"));