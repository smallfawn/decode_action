//Wed May 28 2025 10:17:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function (_0xbce620) {
  function _0x5823e2(_0xc2cfa4, _0x1b5489) {
    var _0x5058b2 = (_0xc2cfa4 & 65535) + (_0x1b5489 & 65535);
    var _0x25a503 = (_0xc2cfa4 >> 16) + (_0x1b5489 >> 16) + (_0x5058b2 >> 16);
    return _0x25a503 << 16 | _0x5058b2 & 65535;
  }
  function _0xd67b99(_0x4d7b06, _0x1e20ab) {
    return _0x4d7b06 << _0x1e20ab | _0x4d7b06 >>> 32 - _0x1e20ab;
  }
  function _0x1d8359(_0xfaedcc, _0x1747fc, _0x23d5bb, _0xf7f856, _0x542e65, _0x3d4904) {
    return _0x5823e2(_0xd67b99(_0x5823e2(_0x5823e2(_0x1747fc, _0xfaedcc), _0x5823e2(_0xf7f856, _0x3d4904)), _0x542e65), _0x23d5bb);
  }
  function _0x3975ee(_0xf20310, _0x41bdc4, _0x5ac8ae, _0x54c4d6, _0x16ce69, _0x2b7a00, _0x5994f9) {
    return _0x1d8359(_0x41bdc4 & _0x5ac8ae | ~_0x41bdc4 & _0x54c4d6, _0xf20310, _0x41bdc4, _0x16ce69, _0x2b7a00, _0x5994f9);
  }
  function _0xfcccc2(_0x59f080, _0x3fe464, _0x5cf94d, _0x3e0dc2, _0x17ff75, _0x22a8ec, _0x5006cc) {
    return _0x1d8359(_0x3fe464 & _0x3e0dc2 | _0x5cf94d & ~_0x3e0dc2, _0x59f080, _0x3fe464, _0x17ff75, _0x22a8ec, _0x5006cc);
  }
  function _0x228d98(_0x73eb29, _0x2a1a66, _0x445431, _0x359768, _0x195fbe, _0x4d0107, _0x3f516d) {
    return _0x1d8359(_0x2a1a66 ^ _0x445431 ^ _0x359768, _0x73eb29, _0x2a1a66, _0x195fbe, _0x4d0107, _0x3f516d);
  }
  function _0x2a216f(_0x16334f, _0x434b02, _0x219621, _0x1ee9c7, _0x295c60, _0x38fd29, _0x4e07a2) {
    return _0x1d8359(_0x219621 ^ (_0x434b02 | ~_0x1ee9c7), _0x16334f, _0x434b02, _0x295c60, _0x38fd29, _0x4e07a2);
  }
  function _0x33db19(_0xeb899c, _0x4f2414) {
    _0xeb899c[_0x4f2414 >> 5] |= 128 << _0x4f2414 % 32;
    _0xeb899c[(_0x4f2414 + 64 >>> 9 << 4) + 14] = _0x4f2414;
    var _0xa34369;
    var _0x10e1e;
    var _0x480b4e;
    var _0x2e36eb;
    var _0x5e0533;
    var _0x172cd6 = 1732584193;
    var _0x52dcf2 = -271733879;
    var _0x29a63a = -1732584194;
    var _0x42b338 = 271733878;
    for (_0xa34369 = 0; _0xa34369 < _0xeb899c.length; _0xa34369 += 16) {
      _0x10e1e = _0x172cd6;
      _0x480b4e = _0x52dcf2;
      _0x2e36eb = _0x29a63a;
      _0x5e0533 = _0x42b338;
      _0x172cd6 = _0x3975ee(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369], 7, -680876936);
      _0x42b338 = _0x3975ee(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 1], 12, -389564586);
      _0x29a63a = _0x3975ee(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 2], 17, 606105819);
      _0x52dcf2 = _0x3975ee(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 3], 22, -1044525330);
      _0x172cd6 = _0x3975ee(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 4], 7, -176418897);
      _0x42b338 = _0x3975ee(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 5], 12, 1200080426);
      _0x29a63a = _0x3975ee(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 6], 17, -1473231341);
      _0x52dcf2 = _0x3975ee(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 7], 22, -45705983);
      _0x172cd6 = _0x3975ee(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 8], 7, 1770035416);
      _0x42b338 = _0x3975ee(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 9], 12, -1958414417);
      _0x29a63a = _0x3975ee(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 10], 17, -42063);
      _0x52dcf2 = _0x3975ee(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 11], 22, -1990404162);
      _0x172cd6 = _0x3975ee(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 12], 7, 1804603682);
      _0x42b338 = _0x3975ee(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 13], 12, -40341101);
      _0x29a63a = _0x3975ee(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 14], 17, -1502002290);
      _0x52dcf2 = _0x3975ee(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 15], 22, 1236535329);
      _0x172cd6 = _0xfcccc2(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 1], 5, -165796510);
      _0x42b338 = _0xfcccc2(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 6], 9, -1069501632);
      _0x29a63a = _0xfcccc2(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 11], 14, 643717713);
      _0x52dcf2 = _0xfcccc2(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369], 20, -373897302);
      _0x172cd6 = _0xfcccc2(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 5], 5, -701558691);
      _0x42b338 = _0xfcccc2(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 10], 9, 38016083);
      _0x29a63a = _0xfcccc2(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 15], 14, -660478335);
      _0x52dcf2 = _0xfcccc2(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 4], 20, -405537848);
      _0x172cd6 = _0xfcccc2(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 9], 5, 568446438);
      _0x42b338 = _0xfcccc2(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 14], 9, -1019803690);
      _0x29a63a = _0xfcccc2(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 3], 14, -187363961);
      _0x52dcf2 = _0xfcccc2(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 8], 20, 1163531501);
      _0x172cd6 = _0xfcccc2(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 13], 5, -1444681467);
      _0x42b338 = _0xfcccc2(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 2], 9, -51403784);
      _0x29a63a = _0xfcccc2(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 7], 14, 1735328473);
      _0x52dcf2 = _0xfcccc2(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 12], 20, -1926607734);
      _0x172cd6 = _0x228d98(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 5], 4, -378558);
      _0x42b338 = _0x228d98(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 8], 11, -2022574463);
      _0x29a63a = _0x228d98(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 11], 16, 1839030562);
      _0x52dcf2 = _0x228d98(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 14], 23, -35309556);
      _0x172cd6 = _0x228d98(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 1], 4, -1530992060);
      _0x42b338 = _0x228d98(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 4], 11, 1272893353);
      _0x29a63a = _0x228d98(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 7], 16, -155497632);
      _0x52dcf2 = _0x228d98(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 10], 23, -1094730640);
      _0x172cd6 = _0x228d98(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 13], 4, 681279174);
      _0x42b338 = _0x228d98(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369], 11, -358537222);
      _0x29a63a = _0x228d98(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 3], 16, -722521979);
      _0x52dcf2 = _0x228d98(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 6], 23, 76029189);
      _0x172cd6 = _0x228d98(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 9], 4, -640364487);
      _0x42b338 = _0x228d98(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 12], 11, -421815835);
      _0x29a63a = _0x228d98(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 15], 16, 530742520);
      _0x52dcf2 = _0x228d98(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 2], 23, -995338651);
      _0x172cd6 = _0x2a216f(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369], 6, -198630844);
      _0x42b338 = _0x2a216f(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 7], 10, 1126891415);
      _0x29a63a = _0x2a216f(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 14], 15, -1416354905);
      _0x52dcf2 = _0x2a216f(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 5], 21, -57434055);
      _0x172cd6 = _0x2a216f(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 12], 6, 1700485571);
      _0x42b338 = _0x2a216f(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 3], 10, -1894986606);
      _0x29a63a = _0x2a216f(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 10], 15, -1051523);
      _0x52dcf2 = _0x2a216f(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 1], 21, -2054922799);
      _0x172cd6 = _0x2a216f(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 8], 6, 1873313359);
      _0x42b338 = _0x2a216f(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 15], 10, -30611744);
      _0x29a63a = _0x2a216f(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 6], 15, -1560198380);
      _0x52dcf2 = _0x2a216f(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 13], 21, 1309151649);
      _0x172cd6 = _0x2a216f(_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338, _0xeb899c[_0xa34369 + 4], 6, -145523070);
      _0x42b338 = _0x2a216f(_0x42b338, _0x172cd6, _0x52dcf2, _0x29a63a, _0xeb899c[_0xa34369 + 11], 10, -1120210379);
      _0x29a63a = _0x2a216f(_0x29a63a, _0x42b338, _0x172cd6, _0x52dcf2, _0xeb899c[_0xa34369 + 2], 15, 718787259);
      _0x52dcf2 = _0x2a216f(_0x52dcf2, _0x29a63a, _0x42b338, _0x172cd6, _0xeb899c[_0xa34369 + 9], 21, -343485551);
      _0x172cd6 = _0x5823e2(_0x172cd6, _0x10e1e);
      _0x52dcf2 = _0x5823e2(_0x52dcf2, _0x480b4e);
      _0x29a63a = _0x5823e2(_0x29a63a, _0x2e36eb);
      _0x42b338 = _0x5823e2(_0x42b338, _0x5e0533);
    }
    return [_0x172cd6, _0x52dcf2, _0x29a63a, _0x42b338];
  }
  function _0x487cd3(_0x2f68d5) {
    var _0x543c2b;
    var _0x13647 = "";
    var _0x4b3a2d = _0x2f68d5.length * 32;
    for (_0x543c2b = 0; _0x543c2b < _0x4b3a2d; _0x543c2b += 8) {
      _0x13647 += String.fromCharCode(_0x2f68d5[_0x543c2b >> 5] >>> _0x543c2b % 32 & 255);
    }
    return _0x13647;
  }
  function _0x2e1836(_0x1e0ff6) {
    var _0x2d4283;
    var _0x17ab7d = [];
    _0x17ab7d[(_0x1e0ff6.length >> 2) - 1] = undefined;
    for (_0x2d4283 = 0; _0x2d4283 < _0x17ab7d.length; _0x2d4283 += 1) {
      _0x17ab7d[_0x2d4283] = 0;
    }
    var _0x59260e = _0x1e0ff6.length * 8;
    for (_0x2d4283 = 0; _0x2d4283 < _0x59260e; _0x2d4283 += 8) {
      _0x17ab7d[_0x2d4283 >> 5] |= (_0x1e0ff6.charCodeAt(_0x2d4283 / 8) & 255) << _0x2d4283 % 32;
    }
    return _0x17ab7d;
  }
  function _0x6f30d9(_0x460381) {
    return _0x487cd3(_0x33db19(_0x2e1836(_0x460381), _0x460381.length * 8));
  }
  function _0x1599c1(_0x33df95, _0xda4f6e) {
    var _0x599b50;
    var _0x2ed424 = _0x2e1836(_0x33df95);
    var _0x2e10cc = [];
    var _0x1d80a2 = [];
    var _0x59eddc;
    _0x2e10cc[15] = _0x1d80a2[15] = undefined;
    _0x2ed424.length > 16 && (_0x2ed424 = _0x33db19(_0x2ed424, _0x33df95.length * 8));
    for (_0x599b50 = 0; _0x599b50 < 16; _0x599b50 += 1) {
      _0x2e10cc[_0x599b50] = _0x2ed424[_0x599b50] ^ 909522486;
      _0x1d80a2[_0x599b50] = _0x2ed424[_0x599b50] ^ 1549556828;
    }
    _0x59eddc = _0x33db19(_0x2e10cc.concat(_0x2e1836(_0xda4f6e)), 512 + _0xda4f6e.length * 8);
    return _0x487cd3(_0x33db19(_0x1d80a2.concat(_0x59eddc), 640));
  }
  function _0x3eafd3(_0xb0d57b) {
    var _0x4171cd = "0123456789abcdef";
    var _0x22e9a5 = "";
    var _0x4016e0;
    var _0x3effd5;
    for (_0x3effd5 = 0; _0x3effd5 < _0xb0d57b.length; _0x3effd5 += 1) {
      _0x4016e0 = _0xb0d57b.charCodeAt(_0x3effd5);
      _0x22e9a5 += _0x4171cd.charAt(_0x4016e0 >>> 4 & 15) + _0x4171cd.charAt(_0x4016e0 & 15);
    }
    return _0x22e9a5;
  }
  function _0x51c8ce(_0x3e7861) {
    return unescape(encodeURIComponent(_0x3e7861));
  }
  function _0x4e6834(_0x51b882) {
    return _0x6f30d9(_0x51c8ce(_0x51b882));
  }
  function _0x5b906b(_0x3c1020) {
    return _0x3eafd3(_0x4e6834(_0x3c1020));
  }
  function _0x3b5f72(_0x421fea, _0x3e2d72) {
    return _0x1599c1(_0x51c8ce(_0x421fea), _0x51c8ce(_0x3e2d72));
  }
  function _0x494a90(_0x513288, _0x476533) {
    return _0x3eafd3(_0x3b5f72(_0x513288, _0x476533));
  }
  function _0x587ef7(_0xa79de9, _0x1215b7, _0x5cd03f) {
    if (!_0x1215b7) {
      if (!_0x5cd03f) {
        return _0x5b906b(_0xa79de9);
      }
      return _0x4e6834(_0xa79de9);
    }
    if (!_0x5cd03f) {
      return _0x494a90(_0x1215b7, _0xa79de9);
    }
    return _0x3b5f72(_0x1215b7, _0xa79de9);
  }
  typeof define === "function" && define.amd ? define(function () {
    return _0x587ef7;
  }) : typeof module === "object" && module.exports ? module.exports = _0x587ef7 : _0xbce620.md5 = _0x587ef7;
})(this);
Ext.apply(Ext, {
  setCookie: function (_0x1af00c, _0x506b25) {
    var _0x5bae60 = arguments;
    var _0x1a86e9 = arguments.length;
    var _0x150593 = _0x1a86e9 > 2 ? _0x5bae60[2] : null;
    var _0x4212b1 = _0x1a86e9 > 3 ? _0x5bae60[3] : "/";
    var _0x3b9e5c = _0x1a86e9 > 4 ? _0x5bae60[4] : null;
    var _0x35ace4 = _0x1a86e9 > 5 ? _0x5bae60[5] : false;
    document.cookie = _0x1af00c + "=" + escape(_0x506b25) + (_0x150593 === null ? "" : "; expires=" + _0x150593.toGMTString()) + (_0x4212b1 === null ? "" : "; path=" + _0x4212b1) + (_0x3b9e5c === null ? "" : "; domain=" + _0x3b9e5c) + (_0x35ace4 === true ? "; secure" : "");
  },
  getCookie: function (_0x39f323, _0x1c44b3) {
    var _0x164fc6 = _0x39f323 + "=";
    var _0x588f70 = _0x164fc6.length;
    var _0x3e0316 = document.cookie.length;
    var _0x2315af = 0;
    var _0x3fc5d3 = 0;
    while (_0x2315af < _0x3e0316) {
      _0x3fc5d3 = _0x2315af + _0x588f70;
      if (document.cookie.substring(_0x2315af, _0x3fc5d3) == _0x164fc6) {
        return this.getCookieVal(_0x3fc5d3);
      }
      _0x2315af = document.cookie.indexOf(" ", _0x2315af) + 1;
      if (_0x2315af === 0) {
        break;
      }
    }
    return _0x1c44b3;
  },
  getCookieVal: function (_0x4bc708) {
    var _0x3d8b70 = document.cookie.indexOf(";", _0x4bc708);
    _0x3d8b70 == -1 && (_0x3d8b70 = document.cookie.length);
    return unescape(document.cookie.substring(_0x4bc708, _0x3d8b70));
  }
});
Ext.define("ans.VideoJs", {
  videoJs: null,
  mixins: {
    observable: "Ext.util.Observable"
  },
  constructor: function (_0xfa3622) {
    _0xfa3622 = _0xfa3622 || {};
    var _0x1ec360 = this;
    _0x1ec360.addEvents(["seekstart"]);
    _0x1ec360.mixins.observable.constructor.call(_0x1ec360, _0xfa3622);
    var _0x2af4ff = _0xfa3622 && _0xfa3622.callbackfn ? _0xfa3622.callbackfn : function () {};
    var _0x3de44f = videojs(_0xfa3622.videojs, _0x1ec360.params2VideoOpt(_0xfa3622.params), _0x2af4ff);
    _0x3de44f.spacePlay = true;
    _0x3de44f.videoFaceCaptureEnc = _0xfa3622.params.videoFaceCaptureEnc;
    _0x3de44f.eventCount = 0;
    Ext.fly(_0xfa3622.videojs).on("contextmenu", function (_0x3c9e9c) {
      _0x3c9e9c.preventDefault();
    });
    $(".video-js").attr("tabindex", 1);
    $(".vjs-big-play-button").on("click", function (_0x19d321) {
      $(".video-js").focus();
    });
    Ext.fly(_0xfa3622.videojs).on("keydown", function (_0x466ccf) {
      (_0x466ccf.keyCode == 32 || _0x466ccf.keyCode == 107) && _0x466ccf.preventDefault();
      if (_0x466ccf.keyCode == 32) {
        _0x3de44f.paused() && _0x3de44f.spacePlay ? _0x3de44f.play() : _0x3de44f.pause();
      } else {
        if (_0x466ccf.keyCode == 37 || _0x466ccf.keyCode == 39) {
          var _0x6de64 = _0xfa3622.params.enableFastForward;
          var _0x2c14dd = _0xfa3622.params.jobid;
          if (typeof _0x6de64 != "undefined" && _0x6de64 === 0 && typeof _0x2c14dd != "undefined" && _0x2c14dd != "" && window.parent.parent.location.href.indexOf("studentstudy") > -1) {
            videojs("video").tipFun(_0x466ccf.keyCode);
          } else {
            if (_0x466ccf.keyCode == 37) {
              var _0x76d7bf = parseInt(_0x3de44f.currentTime());
              var _0xcd8012 = _0x76d7bf - 5 < 0 ? 0 : _0x76d7bf - 5;
              _0x3de44f.currentTime(_0xcd8012);
            } else {
              if (_0x466ccf.keyCode == 39) {
                var _0x76d7bf = parseInt(_0x3de44f.currentTime());
                var _0xcd8012 = _0x76d7bf + 5 > duration ? duration : _0x76d7bf + 5;
                _0x3de44f.currentTime(_0xcd8012);
              }
            }
          }
        }
      }
    });
    _0x3de44f.videoJsResolutionSwitcher && _0x3de44f.on("resolutionchange", function () {
      var _0x2bd4ee = _0x3de44f.currentResolution();
      var _0x1bd104 = _0x2bd4ee.sources ? _0x2bd4ee.sources[0].res : false;
      Ext.setCookie("resolution", _0x1bd104);
    });
    _0x3de44f.videoJsPlayLine && _0x3de44f.on("playlinechange", function () {
      var _0x4eee1d = _0x3de44f.currentPlayline();
      Ext.setCookie("net", _0x4eee1d.net);
    });
    var _0x546ce2 = _0xfa3622.params && _0xfa3622.params.doublespeed ? 2 : 1;
    var _0x23b035 = true;
    _0x3de44f.on("ratechange", function () {
      var _0x5c41d8 = _0x3de44f.playbackRate();
      _0x5c41d8 > _0x546ce2 ? (_0x3de44f.pause(), _0x3de44f.playbackRate(1)) : Ext.setCookie("doubleSpeedValue", _0x5c41d8);
      if (typeof aplus_queue != "undefined" && !_0x23b035) {
        var _0x383937 = _0xfa3622.params && _0xfa3622.params.aplus_video_id ? _0xfa3622.params.aplus_video_id : "";
        var _0x246c7b = _0xfa3622.params && _0xfa3622.params.aplus_resource_id ? _0xfa3622.params.aplus_resource_id : "";
        var _0x5e45a4 = _0xfa3622.params && _0xfa3622.params.knowledgename ? _0xfa3622.params.knowledgename : "";
        var _0x5d91b2 = _0xfa3622.params && _0xfa3622.params.coursename ? _0xfa3622.params.coursename : "";
        aplus_queue.push({
          action: "aplus.record",
          arguments: ["video_speed_click", "CLK", {
            video_name: _0x5e45a4,
            video_id: _0x383937,
            resource_id: _0x246c7b,
            resource_name: _0x5d91b2,
            speed_type: _0x3de44f.playbackRate()
          }]
        });
      }
      _0x23b035 = false;
    });
    _0x3de44f.on("play", function () {
      try {
        $(".video-js").focus();
        if (_0xfa3622.params && _0xfa3622.params.doublespeed && parseInt(_0xfa3622.params.doublespeed) === 1) {
          var _0x42ad9c = Ext.getCookie("doubleSpeedValue", 1);
          _0x3de44f.playbackRate(_0x42ad9c);
        }
        $(".vjs-playback-rate").removeClass("vjs-hidden");
        $(".vjs-playback-rate .vjs-menu .vjs-menu-content li").length == 0 && ($(".vjs-playback-rate-value").css("opacity", "0.4"), $(".vjs-playback-rate .vjs-menu .vjs-menu-content").css("border", "none"), $(".vjs-playback-rate .vjs-menu .vjs-menu-content").css("padding", "0"));
      } catch (_0x2c50b7) {
        console.log(_0x2c50b7);
      }
    });
    _0x3de44f.on("ended", function () {
      try {
        _0xfa3622.params.enableFastForward = 1;
        _0x3de44f.finished = true;
        _0x3de44f.disableSeek(false);
        $(".vjs-progress-control").unbind("click");
      } catch (_0x37322c) {
        console.log(_0x37322c);
      }
    });
    _0x3de44f.on("volumechange", function () {
      $(".vjs-volume-panel .vjs-mute-control").hasClass("vjs-vol-0") ? $(".vjs-volume-vertical .vjsVolumeText").text("0%") : $(".vjs-volume-vertical .vjsVolumeText").text(Math.floor(_0x3de44f.volume() * 100) + "%");
    });
    _0x3de44f.ready(function () {
      $(".vjs-volume-vertical").append("<span class=\"vjsVolumeText\">" + Math.floor(_0x3de44f.volume() * 100) + "%</span>");
      (_0xfa3622.params && _0xfa3622.params.deviceType == 1 || parent.parent.location.href.indexOf("/castscreen/teacherstudy") > -1) && $(".vjs-poster").after("<div class=\"vjs-bgmark\"></div>");
    });
  },
  params2VideoOpt: function (_0x567d97) {
    var _0x10f9f0 = typeof _0x567d97.cpi == "undefined" ? 0 : _0x567d97.cpi;
    var _0x3c9d8d = [];
    var _0x5e0c7f = _0x567d97.cdnPrefix || _0x567d97.public_cdn_prefix;
    if (typeof _0x5e0c7f != "undefined" && _0x5e0c7f.length > 0) {
      for (var _0x2e7e36 = 0; _0x2e7e36 < _0x5e0c7f.length; _0x2e7e36++) {
        var _0x21017a = _0x2e7e36 + 1;
        var _0x4ef719 = {
          indexorder: _0x2e7e36,
          label: isEn ? "Line " + _0x21017a : "公网" + _0x21017a,
          ispublic: true,
          net: "p" + _0x21017a,
          prefix: _0x5e0c7f[_0x2e7e36]
        };
        _0x3c9d8d.push(_0x4ef719);
      }
    } else {
      _0x3c9d8d = [{
        indexorder: 0,
        label: isEn ? "Line 1" : "公网1",
        url: ServerHosts.s1_HOST,
        ispublic: true,
        net: "p1"
      }, {
        indexorder: 1,
        label: isEn ? "Line 2" : "公网2",
        url: ServerHosts.s2_HOST,
        ispublic: true,
        net: "p2"
      }];
    }
    _0x567d97 && (_0x567d97.cFid == "29271" || Ext.getCookie("fid") == "29271") && _0x567d97.deviceType == 1 && (_0x3c9d8d = []);
    if (_0x567d97.cdn) {
      for (var _0x2e7e36 = 0; _0x2e7e36 < _0x567d97.cdn.length; _0x2e7e36++) {
        var _0x1bc6d6 = _0x567d97.cdn[_0x2e7e36];
        _0x1bc6d6.net = "s" + _0x2e7e36;
      }
      try {
        top.window.app && top.window.app == 2 ? _0x3c9d8d = _0x3c9d8d.concat(_0x567d97.cdn) : _0x3c9d8d = _0x3c9d8d.concat(_0x567d97.cdn).sort(function (_0x2704db, _0x5303c8) {
          return _0x2704db.indexorder - _0x5303c8.indexorder;
        });
      } catch (_0x367524) {
        _0x3c9d8d = _0x3c9d8d.concat(_0x567d97.cdn);
      }
    }
    function _0x22a840(_0x27dd86) {
      if (_0x567d97 && (_0x567d97.cFid == "29271" || Ext.getCookie("fid") == "29271") && _0x567d97.deviceType == 1 && _0x27dd86.length > 0) {
        return _0x27dd86[0];
      }
      var _0x4dc4ca = Ext.getCookie("net", "p1");
      var _0x5c2a78 = [];
      for (var _0x2a23b8 = 0; _0x2a23b8 < _0x27dd86.length; _0x2a23b8++) {
        if (_0x27dd86[_0x2a23b8].net == _0x4dc4ca) {
          _0x5c2a78 = _0x27dd86[_0x2a23b8];
          break;
        }
      }
      return _0x5c2a78;
    }
    function _0x547eb7(_0x51d502, _0x506246, _0x35529b) {
      return ServerHosts.HLS_ANS_HOST + "/hls/m3u8/" + _0x51d502 + "/" + _0x506246 + ".m3u8?cdn=" + encodeURIComponent(_0x35529b);
    }
    function _0x7b5a7a(_0x3e1fca, _0x4b774a) {
      var _0x2713ed = _0x3e1fca.src.substring(_0x3e1fca.src.indexOf("."));
      var _0x43fd64 = _0x3e1fca.src;
      typeof _0x4b774a.prefix != "undefined" && (_0x43fd64 = location.protocol + "//" + _0x4b774a.prefix + _0x2713ed);
      if (_0x4b774a.ispublic) {
        return {
          src: _0x43fd64,
          type: "video/mp4",
          res: _0x3e1fca.res
        };
      } else {
        var _0x377280 = _0x2713ed.indexOf("/");
        var _0x253139 = _0x2713ed.substr(_0x377280);
        return {
          src: _0x4b774a.url + "/s1.ananas.chaoxing.com" + _0x253139,
          type: "video/mp4",
          res: _0x3e1fca.res
        };
      }
    }
    var _0x3c3fdb = [];
    var _0x22af75 = Ext.getCookie("resolution", 360);
    !_0x567d97.rootPath && (_0x567d97.rootPath = "/mooc-ans");
    _0x567d97.http && _0x3c3fdb.push({
      src: _0x567d97.http,
      type: "video/mp4",
      label: isEn ? "SD" : "标清",
      resolution: "sd",
      res: 360
    });
    _0x567d97.httphd && (_0x3c3fdb.push({
      src: _0x567d97.httphd,
      type: "video/mp4",
      label: isEn ? "HD" : "高清",
      resolution: "hd",
      res: 720
    }), _0x22af75 = Ext.getCookie("resolution", 720));
    _0x567d97.httpshd && _0x3c3fdb.push({
      src: _0x567d97.httpshd,
      type: "video/mp4",
      label: isEn ? "UHD" : "超高清",
      resolution: "shd",
      res: 1080
    });
    _0x567d97.httpmd && _0x3c3fdb.push({
      src: _0x567d97.httpmd,
      type: "video/mp4",
      label: isEn ? "Extreme speed" : "极速",
      resolution: "md",
      res: 240
    });
    if (_0x3c3fdb.length == 1) {
      var _0x1bc6d6 = _0x3c3fdb[0];
      _0x1bc6d6.label = isEn ? "HD" : "高清";
    }
    var _0x3a735a = false;
    for (var _0x2e7e36 = 0; _0x2e7e36 < _0x3c3fdb.length; _0x2e7e36++) {
      if (_0x3c3fdb[_0x2e7e36].res == _0x22af75) {
        _0x3a735a = true;
        break;
      }
    }
    !_0x3a735a && (_0x22af75 = 360);
    var _0x40e539 = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid);
    var _0x5d2a08 = function (_0x3a49dc, _0x540e02, _0xe5425a, _0x3640bf) {
      try {
        if (typeof top.hasJobLimit != "undefined" && top.hasJobLimit === true && isUnFinishJob()) {
          return;
        }
        if (typeof top.videoTimeLimit != "undefined" && top.videoTimeLimit === true && isUnFinishJob()) {
          return;
        }
      } catch (_0x5230c3) {
        console.log(_0x5230c3);
      }
      if (_0x40e539) {
        return;
      }
      var _0x1580a6 = this;
      !_0x1580a6.logCount && (_0x1580a6.logCount = 0);
      videojs.xhr({
        uri: _0x540e02,
        headers: {
          "Content-Type": "application/json"
        }
      }, function (_0x1e62cb, _0x3a910d) {
        _0x1580a6.logCount++;
        if (_0x3a910d.statusCode == 200) {
          _0x1580a6.logCount = 0;
          if (_0x3a910d.body.indexOf("isPassed") < 0) {
            window.parent && window.parent.location.reload();
            return;
          }
          eval("var d=" + _0x3a910d.body);
          if (d.isPassed) {
            try {
              typeof d.hasJobLimit != "undefined" && d.hasJobLimit === true && (top.allowNextVideo = false, top.hasJobLimit = true);
              typeof d.videoTimeLimit != "undefined" && d.videoTimeLimit === true && (top.allowNextVideo = false, top.videoTimeLimit = true);
            } catch (_0x5668ca) {
              console.log(_0x5668ca);
            }
            _0x3640bf();
          } else {
            !_0xe5425a && _0x3640bf();
          }
          return;
        }
        if (_0x1580a6.logCount >= 4) {
          _0x1580a6.logCount = 0;
          _0x3a49dc.pause();
          if (_0x3a910d.statusCode != 0) {
            if (_0x3a910d.statusCode == 202 || _0x3a910d.statusCode == 302) {
              try {
                parent.location.reload();
              } catch (_0x315594) {
                console.log(_0x315594.message);
              }
            } else {
              if (_0x3a910d.statusCode == 403) {
                try {
                  var _0x52dd68 = _0x3a910d.body;
                  var _0x2e3e1e = _0x52dd68.indexOf("很抱歉，您没有权限访问这个页面") + 16;
                  var _0x42c853 = _0x2e3e1e + 6;
                  var _0x18523e = _0x52dd68.substring(_0x2e3e1e, _0x42c853);
                  alert("视频播放异常，请刷新重试 (" + _0x18523e + ")");
                } catch (_0x572820) {
                  alert("服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e: " + _0x3a910d.statusCode + ")");
                  console.log(_0x572820);
                }
              } else {
                alert("服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e: " + _0x3a910d.statusCode + ")");
              }
            }
          } else {
            alert("您的网络不稳定，请您稍后继续...");
          }
        }
      });
    };
    var _0x5a1806 = function (_0x442abd, _0x2f35b6, _0x6c1027, _0x3bd115) {
      if (!_0x567d97.reportUrl) {
        return;
      }
      if (_0x567d97.isFiled == 1 || _0x567d97.state == 1) {
        return;
      }
      var _0x23924e = "[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]";
      var _0x223541 = (_0x567d97.startTime || "0") + "_" + (_0x567d97.endTime || _0x567d97.duration);
      var _0x70a2c2 = 0;
      var _0x1306e5;
      _0x6c1027.toString().indexOf("-") != -1 ? (_0x1306e5 = _0x6c1027.split("-"), _0x1306e5.length == 2 && (_0x70a2c2 = parseInt(_0x1306e5[1]) * 1000)) : _0x70a2c2 = _0x6c1027 * 1000;
      if (_0x70a2c2 == _0x567d97.duration * 1000 && _0x2f35b6 == 2) {
        return;
      }
      var _0x30175c = Ext.String.format(_0x23924e, _0x567d97.clazzId, _0x567d97.userid, _0x567d97.jobid || "", _0x567d97.objectId, _0x70a2c2, "d_yHJ!$pdA~5", _0x567d97.duration * 1000, _0x223541);
      var _0x94c84e = [_0x567d97.reportUrl, "/", _0x567d97.dtoken, "?clazzId=", _0x567d97.clazzId, "&playingTime=", _0x6c1027, "&duration=", _0x567d97.duration, "&clipTime=", _0x223541, "&objectId=", _0x567d97.objectId, "&otherInfo=", _0x567d97.otherInfo, "&jobid=", _0x567d97.jobid, "&userid=", _0x567d97.userid, "&isdrag=", _0x2f35b6, "&view=pc", "&enc=", md5(_0x30175c), "&rt=", _0x567d97.rt, "&videoFaceCaptureEnc=", _0x442abd.videoFaceCaptureEnc, "&dtype=Video", "&_t=", new Date().getTime(), "&attDuration=", _0x567d97.attDuration, "&attDurationEnc=", _0x567d97.attDurationEnc].join("");
      _0x5d2a08(_0x442abd, _0x94c84e, _0x567d97.jobid, _0x3bd115);
    };
    return {
      language: "zh-CN",
      poster: _0x567d97.screenshot,
      controls: true,
      preload: "none",
      sources: _0x3c3fdb,
      playlines: _0x3c9d8d,
      playbackRates: _0x567d97.doublespeed != 0 ? _0x567d97 && _0x567d97.cFid != "259036" ? [0.75, 1, 1.25, 1.5, 2] : [0.75, 1, 1.25, 1.5] : false,
      textTrackDisplay: true,
      controlBar: {
        volumePanel: {
          inline: false
        },
        children: ["playToggle", "playbackRateMenuButton", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "volumePanel", "subsCapsButton", "fullscreenToggle", "videoJsPlayLine"]
      },
      plugins: {
        videoJsResolutionSwitcher: {
          default: _0x22af75,
          dynamicLabel: true,
          customSourcePicker: function (_0x2db172, _0x386516, _0xbe4639) {
            var _0x46690c = _0x2db172.currentPlayline();
            _0x2db172.src(_0x386516.map(function (_0x1b1ec5) {
              return _0x7b5a7a(_0x1b1ec5, _0x46690c);
            }));
            if (typeof aplus_queue != "undefined") {
              function _0x215508() {
                var _0x4def2 = "";
                for (var _0x382871 = 1; _0x382871 <= 32; _0x382871++) {
                  var _0x2ebe81 = Math.floor(Math.random() * 16).toString(16);
                  _0x4def2 += _0x2ebe81;
                  (_0x382871 == 8 || _0x382871 == 12 || _0x382871 == 16 || _0x382871 == 20) && (_0x4def2 += "-");
                }
                return _0x4def2;
              }
              typeof aplus_queue != "undefined" && aplus_queue.push({
                action: "aplus.record",
                arguments: ["video_positive_load", "CLK", {
                  video_name: _0x567d97.knowledgename || "",
                  video_id: _0x567d97.aplus_video_id || "",
                  resource_id: _0x567d97.aplus_resource_id || "",
                  resource_name: _0x567d97.coursename || "",
                  video_duration: _0x567d97.duration,
                  request_id: _0x215508()
                }]
              });
            }
            return _0x2db172;
          }
        },
        studyControl: {
          enableSwitchWindow: _0x567d97.enableSwitchWindow
        },
        seekBarControl: {
          objectId: _0x567d97.objectId,
          headOffset: _0x567d97.headOffset,
          enableFastForward: _0x567d97.enableFastForward,
          isSendLog: !!parent.AttachmentSetting && _0x567d97.control,
          reportTimeInterval: _0x567d97.reportTimeInterval,
          isShowDanmu: _0x567d97.danmaku,
          chapterCapture: _0x567d97.chapterCapture || 0,
          captureInterval: _0x567d97.captureInterval || 600,
          chapterCollectionType: _0x567d97.chapterCollectionType || 0,
          startCapture: _0x567d97.startCapture,
          endCapture: _0x567d97.endCapture,
          playAginCapture: _0x567d97.playAginCapture,
          playingCapture: _0x567d97.playingCapture,
          playingLoopCapture: _0x567d97.playingLoopCapture,
          duration: _0x567d97.duration,
          isSupportFace: _0x567d97.isSupportFace || false,
          isShowFaceCollection: _0x567d97.isShowFaceCollection,
          jumpTimePointList: _0x567d97.jumpTimePointList,
          videoFaceCaptureEnc: _0x567d97.videoFaceCaptureEnc,
          randomCaptureTime: _0x567d97.randomCaptureTime,
          attachmentId: _0x567d97.aId,
          aplusVideoId: _0x567d97.aplus_video_id || "",
          aplusResourseId: _0x567d97.aplus_resource_id || "",
          aplusVideoName: _0x567d97.knowledgename || "",
          aplusResourceName: _0x567d97.coursename || "",
          sourcePlayer: "video",
          deviceType: _0x567d97.deviceType || 0,
          danmuSet: _0x567d97.danmaku || 0,
          aiVideoInterpret: _0x567d97.aiVideoInterpret || 0,
          _jobId: _0x567d97._jobId || "",
          cookieFid: _0x567d97.cFid,
          sendLog: function (_0x32feac, _0x201a61, _0x3149a0, _0x2a07dd) {
            if (this.isSendLog !== true) {
              return;
            }
            var _0x5e3c43 = 0;
            switch (_0x201a61) {
              case "playing":
                _0x5e3c43 = 0;
                break;
              case "drag":
                _0x5e3c43 = 1;
                break;
              case "play":
                _0x5e3c43 = 3;
                break;
              case "pause":
                _0x5e3c43 = 2;
                break;
              case "ended":
                _0x5e3c43 = 4;
                break;
            }
            var _0x5d3f60 = this;
            _0x5a1806(_0x32feac, _0x5e3c43, _0x3149a0, function () {
              try {
                _0x5e3c43 === 4 && typeof _0x2a07dd != "undefined" && (_0x2a07dd.sendDataLog("ended"), _0x32feac.isFullscreen() && closeFullScreen && closeFullScreen(), _0x2a07dd.playNextVideo(_0x5d3f60.attachmentId));
              } catch (_0x1de809) {
                console.log(_0x1de809);
              }
              window.proxy_completed && window.proxy_completed();
            });
          }
        },
        timelineObjects: {
          begins: _0x567d97.begins,
          ends: _0x567d97.ends,
          url: _0x567d97.rootPath + "/richvideo/initdatawithviewerV2?mid=" + _0x567d97.mid + "&cpi=" + _0x567d97.cpi + "&classid=" + _0x567d97.clazzId + "&courseid=" + _0x567d97.courseid,
          quizErrorReportUrl: _0x567d97.rootPath + "/question/addquestionerror?classid=" + _0x567d97.clazzId + "&cpi=" + _0x567d97.cpi,
          validationUrl2: _0x567d97.rootPath + "/question/quiz-validation?classid=" + _0x567d97.clazzId + "&cpi=" + _0x10f9f0 + "&objectid=" + _0x567d97.objectId,
          quizRightCountUrl: _0x567d97.rootPath + "/question/quiz-rightcount?classid=" + _0x567d97.clazzId + "&cpi=" + _0x10f9f0,
          isPortal: _0x567d97.isPortal
        },
        customIframePlugin: {
          eventArray: _0x567d97.eventArray,
          supportHeartbeat: _0x567d97.supportHeartbeat,
          courseid: _0x567d97.courseid,
          clazzId: _0x567d97.clazzId,
          userId: _0x567d97.userid,
          cookieFid: _0x567d97.cookieFid,
          knowledgeid: _0x567d97.knowledgeid,
          objectid: _0x567d97.objectid,
          playTime: _0x567d97.playTime,
          videoEnc: _0x567d97.videoEnc,
          headOffset: _0x567d97.headOffset
        },
        customIframePluginV2: {
          eventArray: _0x567d97.eventArray,
          supportVideoPluginV1: _0x567d97.supportVideoPluginV1,
          courseid: _0x567d97.courseid,
          clazzId: _0x567d97.clazzId,
          userId: _0x567d97.userid,
          cookieFid: _0x567d97.cookieFid,
          knowledgeid: _0x567d97.knowledgeid,
          objectid: _0x567d97.objectid,
          playTime: _0x567d97.playTime,
          videoEnc: _0x567d97.videoEnc,
          headOffset: _0x567d97.headOffset,
          realHeadOffset: _0x567d97.realHeadOffset
        },
        subtitle: {
          translate: _0x567d97.chapterVideoTranslate,
          subtitleUrl: _0x567d97.rootPath + "/richvideo/allsubtitle?mid=" + _0x567d97.mid + "&objectid=" + (typeof _0x567d97.objectId != "undefined" ? _0x567d97.objectId : _0x567d97.objectid) + "&courseid=" + _0x567d97.courseid,
          subtitle: "/ananas/video-editor/sub?objectid=" + _0x567d97.subobjectid,
          cookieFid: _0x567d97.cFid,
          deviceType: _0x567d97.deviceType || 0
        },
        marker: {
          url: !_0x567d97.isNotMark ? "/ananas/getpoints?courseid=" + _0x567d97.courseid + "&mid=" + _0x567d97.mid : "",
          ff: _0x567d97.enableFastForward,
          videoTopicCloud: _0x567d97.videoTopicCloud,
          aiVideoInterpret: _0x567d97.aiVideoInterpret || 0
        },
        videoJsPlayLine: {
          defaults: _0x22a840(_0x3c9d8d),
          dynamicLabel: true,
          customSourcePicker: function (_0x24d5f6, _0x2e7b6d, _0x577d9a) {
            var _0x63b9fd = _0x24d5f6.currentResolution().sources[0];
            _0x24d5f6.src(_0x7b5a7a(_0x63b9fd, _0x2e7b6d));
            return _0x24d5f6;
          }
        },
        videoSelfSetting: {
          cookieFid: _0x567d97.cFid,
          subtitle: {
            translate: _0x567d97.chapterVideoTranslate,
            subtitleUrl: _0x567d97.rootPath + "/richvideo/allsubtitle?mid=" + _0x567d97.mid + "&objectid=" + (typeof _0x567d97.objectId != "undefined" ? _0x567d97.objectId : _0x567d97.objectid) + "&courseid=" + _0x567d97.courseid,
            subtitle: "/ananas/video-editor/sub?objectid=" + _0x567d97.subobjectid
          },
          deviceType: _0x567d97.deviceType || 0,
          playlineDefault: _0x22a840(_0x3c9d8d),
          resolutionDefault: _0x22af75,
          hideHotBtn: _0x567d97.duration < 120 || parent.parent.location.href.indexOf("nodedetailcontroller/visitnodedetail") > -1 || parent.parent.location.href.indexOf("/mycourse/micro-node-preview") > -1 || _0x567d97.ut == "t" || parent.parent.location.href.indexOf("teacherstudy") > -1
        }
      }
    };
  }
});
Object.defineProperty(ans.VideoJs.prototype, "params2VideoOpt", {
  configurable: false,
  writable: false
});
Object.freeze(ans.VideoJs.prototype.params2VideoOpt);
(function () {
  var _0x534a18 = videojs.getPlugin("plugin");
  var _0x3794b5 = videojs.extend(_0x534a18, {
    constructor: function (_0x298d7a, _0x1d56a4) {
      _0x534a18.call(this, _0x298d7a, _0x1d56a4);
      var _0x16f1e0 = this;
      var _0x520b21 = _0x1d56a4.mouseElTarget;
      var _0x58cb5e = 1;
      _0x1d56a4.enableSwitchWindow !== 1 && (_0x58cb5e = 0);
      if (!_0x520b21) {
        try {
          _0x520b21 = window.top ? window.top : window.document;
        } catch (_0x2e675f) {
          _0x520b21 = window.parent ? window.parent : window.document;
        }
      }
      try {
        Ext.fly(_0x520b21).on("mouseout", function (_0x5863cc) {
          _0x5863cc = _0x5863cc ? _0x5863cc : window.event;
          var _0x14877b = _0x5863cc.relatedTarget || _0x5863cc.toElement;
          !_0x14877b && _0x58cb5e != 1 && (_0x298d7a.pause(), _0x298d7a.spacePlay = false);
        });
        Ext.fly(_0x520b21).on("mouseover", function (_0x5e5481) {
          _0x5e5481 = _0x5e5481 ? _0x5e5481 : window.event;
          var _0x5e5c36 = _0x5e5481.relatedTarget || _0x5e5481.toElement;
          _0x5e5c36 && (_0x298d7a.spacePlay = true);
        });
      } catch (_0x16393a) {
        console.log(_0x16393a.message);
      }
      _0x16f1e0.singleton(_0x298d7a);
    },
    singleton: function (_0x4679d8) {
      var _0x5c5758 = this;
      var _0x8c7261 = parseInt(Math.random() * 9999999);
      _0x4679d8.on("play", function () {
        Ext.setCookie("videojs_id", _0x8c7261);
      });
      _0x4679d8.setInterval(function () {
        var _0x4f785c = Ext.getCookie("videojs_id");
        typeof _0x4f785c != "undefined" && _0x4f785c != _0x8c7261 && _0x4679d8.pause();
      }, 1000);
    }
  });
  videojs.registerPlugin("studyControl", _0x3794b5);
})();
(function () {
  var _0x1cd56a = videojs.getComponent("SeekBar");
  var _0x5616db = videojs.extend(_0x1cd56a, {
    constructor: function (_0xc54aa7, _0x2cf4cf) {
      _0x1cd56a.call(this, _0xc54aa7, _0x2cf4cf);
      var _0x12202e = this;
      _0xc54aa7.ignorePause = false;
      _0xc54aa7.seekLog = false;
      _0xc54aa7.firstSeek = true;
      _0xc54aa7.disableSeek = function (_0x4ea0a7) {
        _0x12202e.disableSeek(_0x4ea0a7);
      };
      _0xc54aa7.onlyBackward = function (_0x41c99a) {
        _0x12202e.onlyBackward(_0x41c99a);
      };
      _0xc54aa7.getSeekBar = function () {
        return _0x12202e;
      };
      _0x12202e.on("slideractive", function () {
        _0xc54aa7.trigger("seekstart");
        _0xc54aa7.ignorePause = true;
        _0xc54aa7.ignorePlay = true;
        _0xc54aa7.ignoreSeek = false;
      });
      _0x12202e.on("sliderinactive", function () {
        _0xc54aa7.trigger("seekend");
        _0xc54aa7.ignoreSeek = false;
      });
      _0x12202e.maxPercent = 0;
      _0xc54aa7.on("timeupdate", function () {
        _0x12202e.maxPercent = Math.max(_0x12202e.getPercent(), _0x12202e.maxPercent);
      });
    },
    getCurrentTime_: function () {
      return this.player_.currentTime();
    },
    getMaxPercent: function () {
      return this.maxPercent;
    },
    isBackward: function (_0x1b96ca) {
      return this.maxPercent > this.calculateDistance(_0x1b96ca);
    },
    handleMouseDown: function (_0x458a32) {
      if (this._onlyBackward) {
        if (!this.isBackward(_0x458a32)) {
          return;
        }
      }
      if (this._disableSeek === true) {
        return;
      }
      _0x1cd56a.prototype.handleMouseDown.call(this, _0x458a32);
    },
    handleMouseMove: function (_0x3b8a0b) {
      if (this._disableSeek === true) {
        return;
      }
      if (this._onlyBackward) {
        if (!this.isBackward(_0x3b8a0b)) {
          return;
        }
      }
      _0x1cd56a.prototype.handleMouseMove.call(this, _0x3b8a0b);
    },
    handleMouseUp: function (_0x5e7ce9) {
      if (this._disableSeek === true) {
        return;
      }
      if (this._onlyBackward) {
        if (!this.isBackward(_0x5e7ce9)) {
          return;
        }
      }
      _0x1cd56a.prototype.handleMouseUp.call(this, _0x5e7ce9);
    },
    disableSeek: function (_0xb5fbd4) {
      var _0x4901e7 = this;
      _0x4901e7._disableSeek = _0xb5fbd4 !== false;
      _0x4901e7._disableSeek ? _0x4901e7.disable() : _0x4901e7.enable();
    },
    onlyBackward: function (_0xf07a8d) {
      var _0x460296 = this;
      _0x460296._onlyBackward = _0xf07a8d !== false;
    }
  });
  videojs.registerComponent("SeekBar", _0x5616db);
})();
(function () {
  var _0x576620 = videojs.getPlugin("plugin");
  var _0x2ceb22 = videojs.extend(_0x576620, {
    constructor: function (_0x4c5cf1, _0x26f842) {
      _0x576620.call(this, _0x4c5cf1, _0x26f842);
      var _0x2dbb54 = this;
      _0x2dbb54.objectId = _0x26f842.objectId;
      _0x2dbb54.firstClick = true;
      _0x2dbb54.isSendLog_ = !!_0x26f842.isSendLog;
      _0x2dbb54.isShowDanmu_ = !!_0x26f842.isShowDanmu;
      _0x2dbb54.damuLastGetTime = 0;
      _0x2dbb54.firstPlay = true;
      _0x2dbb54.firstPlayFace = true;
      _0x2dbb54.pausePlayFace = false;
      _0x2dbb54.playingFace = false;
      _0x2dbb54.playingFaceTime = 0;
      _0x2dbb54.chapterCapture = _0x26f842.chapterCapture || 0;
      _0x2dbb54.captureInterval = _0x26f842.captureInterval * 60 || 600;
      _0x2dbb54.chapterCollectionType = _0x26f842.chapterCollectionType || 0;
      _0x2dbb54.isSupportFace = _0x26f842.isSupportFace;
      _0x2dbb54.isAlertTip = false;
      _0x2dbb54.startCapture = _0x26f842.startCapture;
      _0x2dbb54.endCapture = _0x26f842.endCapture;
      _0x2dbb54.playAginCapture = _0x26f842.playAginCapture;
      _0x2dbb54.playingCapture = _0x26f842.playingCapture;
      _0x2dbb54.playingLoopCapture = _0x26f842.playingLoopCapture;
      _0x2dbb54.isShowFaceCollection = _0x26f842.isShowFaceCollection;
      _0x2dbb54.duration = _0x26f842.duration;
      _0x2dbb54.jumpTimePointList = _0x26f842.jumpTimePointList;
      _0x2dbb54.loopCaptureInterval = _0x26f842.randomCaptureTime;
      _0x2dbb54.randomCaptureTime = _0x26f842.randomCaptureTime;
      _0x2dbb54.videoFaceCaptureEnc = _0x26f842.videoFaceCaptureEnc;
      _0x2dbb54.attachmentId = _0x26f842.attachmentId;
      _0x2dbb54.aplusVideoId = _0x26f842.aplusVideoId;
      _0x2dbb54.aplusResourseId = _0x26f842.aplusResourseId;
      _0x2dbb54.aplusVideoName = _0x26f842.aplusVideoName;
      _0x2dbb54.aplusResourceName = _0x26f842.aplusResourceName;
      _0x2dbb54.cookieFid = _0x26f842.cookieFid || "";
      _0x4c5cf1.dragCutOffTime = _0x26f842.headOffset ? _0x26f842.headOffset : 0;
      _0x4c5cf1.canDragSeekBar = false;
      _0x4c5cf1.playStatus = "start";
      _0x2dbb54.danmuSet = _0x26f842.danmuSet;
      _0x2dbb54.deviceType = _0x26f842.deviceType || 0;
      _0x2dbb54._jobId = _0x26f842._jobId || "";
      !_0x26f842.sendLog && (_0x26f842.sendLog = function () {});
      _0x26f842.headOffset && _0x4c5cf1.currentTime(_0x26f842.headOffset);
      function _0x392f3c() {
        typeof aplus_queue != "undefined" && aplus_queue.push({
          action: "aplus.record",
          arguments: ["heartbeat", "CLK", {
            video_name: _0x2dbb54.aplusVideoName,
            video_id: _0x2dbb54.aplusVideoId,
            resource_id: _0x2dbb54.aplusResourseId,
            resource_name: _0x2dbb54.aplusResourceName,
            request_id: _0x2dbb54.getNewGuid()
          }]
        });
      }
      var _0x5b2729 = null;
      var _0x3e6525 = 0;
      var _0x5e5b1b = 0;
      var _0x54dc71 = _0x26f842.reportTimeInterval || 60;
      var _0x5b13f9 = _0x54dc71 * 1000;
      var _0x3a44a7 = function (_0xaabec3, _0x46655c, _0x1ad625) {
        var _0x222f66 = $(".vjs-tip2");
        _0x222f66.find(".vjs-tip-inner2").text(_0x1ad625);
        _0x222f66.css({
          left: _0xaabec3 / _0x46655c.duration() * 100 + "%",
          "margin-left": -parseFloat(_0x222f66.width()) / 2 - 5 + "px",
          visibility: "visible"
        });
        $(".vjs-default-skin").removeClass("vjs-user-inactive");
        $(".vjs-default-skin").addClass("vjs-user-active");
        setTimeout(function () {
          _0x222f66.css("visibility", "hidden");
        }, 2000);
      };
      var _0x554b39 = function (_0x380db8, _0x4d94dd, _0x8e94d1) {
        if (!_0x2dbb54.isSendLog_) {
          return;
        }
        var _0x513d27 = _0x2dbb54.now_() - _0x3e6525;
        (_0x513d27 > _0x5b13f9 || _0x4d94dd === true) && (typeof _0x8e94d1 != "undefined" ? _0x26f842.sendLog(_0x4c5cf1, _0x380db8, _0x8e94d1, _0x2dbb54) : _0x26f842.sendLog(_0x4c5cf1, _0x380db8, _0x2dbb54.sec_(_0x4c5cf1), _0x2dbb54), _0x3e6525 = _0x2dbb54.now_());
      };
      var _0x1e4eb1 = function (_0x551815) {
        return _0x551815 && _0x551815.sort && _0x551815.sort(function (_0x34ab91, _0x30252f) {
          return parseInt(_0x34ab91) - parseInt(_0x30252f);
        });
      };
      var _0x427cc0 = function (_0x5e4147) {
        try {
          var _0x53d14a = _0x5e4147.otherPointTimes;
          if (_0x53d14a.length === 0) {
            return -1;
          }
          _0x53d14a = _0x1e4eb1(_0x53d14a);
          return _0x53d14a[0];
        } catch (_0x1664c2) {
          console.log(_0x1664c2);
        }
        return -1;
      };
      var _0x3583b2 = function (_0x4f5c09) {
        try {
          var _0x1df062 = _0x4f5c09.otherPointTimes;
          var _0x2e342d = _0x1df062.length;
          if (_0x2e342d === 0) {
            return -1;
          }
          _0x1df062 = _0x1e4eb1(_0x1df062);
          return _0x1df062[_0x2e342d - 1];
        } catch (_0xbb8595) {
          console.log(_0xbb8595);
        }
        return -1;
      };
      var _0x398365 = function (_0x5b39db, _0x3f4060) {
        try {
          var _0x452b4e = _0x5b39db.currentTime();
          if (_0x3f4060.enableFastForward == 1 && typeof parent.curMicroTopicId != "undefined" && parent.curMicroTopicId > 0 && _0x452b4e <= 1 && !(_0x3f4060.headOffset > 0)) {
            var _0x5d1adc = $(".topicId" + parent.curMicroTopicId).length;
            _0x5d1adc > 0 && $(".topicId" + parent.curMicroTopicId).each(function () {
              if ($(this).hasClass("markertime")) {
                var _0x4e0b16 = $(this).attr("data-marker-time");
                if (typeof _0x4e0b16 != "undefined" && _0x4e0b16 > 0) {
                  _0x5b39db.ignoreSeek = false;
                  _0x5b39db.switchStatus = true;
                  _0x5b39db.currentTime(_0x4e0b16);
                  return;
                }
              }
            });
          }
        } catch (_0x473e66) {
          console.log(_0x473e66);
        }
        try {
          if (!_0x5b39db.paused() && typeof _0x5b39db.eventPoints != "undefined") {
            var _0x1e8c44 = _0x5b39db.currentTime();
            var _0x7301f3 = 0;
            _0x5b39db.eventPoints.forEach(function (_0x1aff21) {
              _0x1aff21.text == "片头" && (_0x7301f3 = _0x1aff21.time);
            });
            if (_0x3f4060.headOffset > 0 && _0x3f4060.headOffset < _0x7301f3) {
              return;
            }
            if (_0x7301f3 > 0 && parseInt(_0x1e8c44) === 0) {
              var _0x24caee = parseInt(_0x427cc0(_0x5b39db));
              if (_0x24caee >= 0 && _0x7301f3 > _0x24caee) {
                return;
              }
              _0x5b39db.ignoreSeek = false;
              _0x5b39db.switchStatus = true;
              _0x5b39db.currentTime(_0x7301f3);
              _0x3a44a7(_0x7301f3, _0x5b39db, "已跳过片头");
            }
          }
        } catch (_0x8570a1) {
          console.log(_0x8570a1);
        }
        try {
          var _0x329656 = 0;
          if (!_0x5b39db.paused() && typeof _0x5b39db.eventPoints != "undefined") {
            var _0x1e8c44 = _0x5b39db.currentTime();
            _0x5b39db.eventPoints.forEach(function (_0x2662dd) {
              _0x2662dd.text == "片尾" && (_0x329656 = _0x2662dd.time);
            });
            if (_0x3f4060.headOffset > _0x329656) {
              return;
            }
            var _0x276c6b = parseInt(_0x1e8c44);
            if (_0x329656 > 0 && _0x276c6b === _0x329656) {
              var _0x12be51 = parseInt(_0x3583b2(_0x5b39db));
              if (_0x12be51 >= 0 && _0x329656 < _0x12be51) {
                return;
              }
              _0x5b39db.ignoreSeek = false;
              _0x5b39db.switchStatus = true;
              _0x5b39db.currentTime(_0x3f4060.duration);
              _0x3a44a7(_0x276c6b, _0x5b39db, "已跳过片尾");
            }
          }
        } catch (_0xdeac55) {
          console.log(_0xdeac55);
        }
      };
      _0x4c5cf1.on("play", function () {
        if (_0x26f842.enableFastForward != 1 && !_0x4c5cf1.finished) {
          var _0x13117a = _0x4c5cf1.currentTime();
          var _0x2a9c23 = _0x26f842.headOffset ? _0x26f842.headOffset : 0;
          var _0x44e1e5 = Math.max(_0x2a9c23, _0x4c5cf1.dragCutOffTime);
          parseInt(_0x13117a) > _0x44e1e5 && (_0x13117a != 0 && _0x4c5cf1.currentTime(_0x44e1e5), bindVjsClick && bindVjsClick());
        }
        try {
          if (typeof parent.supportH5Screen != "undefined" && parent.supportH5Screen == true) {
            typeof parent.playVideoScreen != "undefined" ? parent.playVideoScreen(_0x2dbb54.objectId) : top.openScreen();
            return;
          }
        } catch (_0x5a1925) {
          console.log(_0x5a1925);
        }
        try {
          top.configFullScreen && reSizeVideoWindow();
        } catch (_0x43aea1) {
          console.log(_0x43aea1);
        }
        _0x4c5cf1.playStatus = "play";
        if (_0x2dbb54.deviceType == 2) {
          $("#reader .videoMaskDiv").remove();
          if ($(".barMask").length == 0) {
            var _0x2666b7 = "<div class=\"barMask\"></div>";
            $(".vjs-control-bar").append(_0x2666b7);
          }
        }
        if (_0x2dbb54.deviceType == 1 && $(".vjs-fullscreen-control-self").length == 0 && navigator.userAgent.indexOf("chaoxingWisdomClass/ChaoXingClass") < 0) {
          var _0x297038 = "<span class='vjs-fullscreen-control-self' title='" + (isEn ? "Fullscreen" : "全屏") + "'><i></i></span>";
          $(".vjs-control-bar").append(_0x297038);
          $(".vjs-control-bar .vjs-fullscreen-control").remove();
          $(".vjs-fullscreen-control-self").click(function () {
            toggleFullScreen();
          });
        }
        parent.parent.videoPlayingFrame = window.frameElement;
        if (parent.parent.MultiEditor && parent.parent.insertEditorScreenShot || parent.MultiEditor && parent.insertEditorScreenShot) {
          if (_0x2dbb54.deviceType == 1) {
            var _0x58fa92 = "<span class=\"vjs-screen-shot\" title=\"" + (isEn ? "Screenshot" : "截屏") + "\"></span>";
            if ($(".vjs-control-bar .vjs-screen-shot").length == 0) {
              $(".vjs-control-bar").append(_0x58fa92);
              var _0x2e3fdf = $("#video_html5_api").height();
              var _0x3fb474 = parseInt(_0x2e3fdf) / 2;
              $(".vjs-control-bar .vjs-screen-shot").css("top", _0x3fb474 + "px");
              $(".vjs-control-bar .vjs-screen-shot").click(function () {
                parent.parent.getClazzNote && parent.parent.getClazzNote();
                parent.parent.changePan && parent.parent.changePan("3");
                $("#editor1 .edui-for-screenshot").show();
                parent.parent.videoNoteFrame = window.frameElement;
                $(".formTopic", parent.parent.document).slideDown(300);
                parent.parent.insertEditorScreenShot && parent.parent.insertEditorScreenShot();
              });
            }
          } else {
            if (_0x2dbb54.deviceType == 2) {
              var _0x58fa92 = "<span class=\"vjs-screen-shot\" title=\"" + (isEn ? "Screenshot" : "截屏") + "\"></span><span class=\"vjs-screen-more\" title=\"" + (isEn ? "More" : "更多") + "\"></span>";
              $(".vjs-control-bar .vjs-screen-shot").length == 0 && ($(".vjs-control-bar").append(_0x58fa92), $(".vjs-control-bar .vjs-screen-shot").css("top", "90px"));
              $(".vjs-control-bar .vjs-screen-shot").off("click").click(function () {
                (isFullScreenStatus() || isFullScreen) && ($(".vjs-fullscreen-control").click(), $(".writeDanmu").hide(), $(".fastBox span").removeClass("full"), $(".fastBox").removeClass("full"), $(".vjs-fullscreen-control").removeClass("full"), $(".video-js .vjs-paused .vjs-icon-placeholder").removeClass("full"), $(".video-js .vjs-play-control.vjs-playing .vjs-icon-placeholder").removeClass("full"), $(".vjs-screen-shot").css("top", "90px"), $(".vjs-screen-shot").css("margin-top", "-13px"));
                parent.videoScreenFrame = window.frameElement;
                parent.insertEditorScreenShot && parent.insertEditorScreenShot();
              });
              $(".vjs-screen-more").off("click").click(function (_0xbe2e42) {
                try {
                  _0x47d1ff(_0xbe2e42);
                } catch (_0x220145) {
                  console.log(_0x220145);
                }
              });
              $(".moreSettings").bind("click", function (_0x1109bd) {
                _0x1109bd = _0x1109bd || event;
                stopFunc(_0x1109bd);
              });
            }
          }
        }
        if ("video" == _0x26f842.sourcePlayer && parent.parent.showAiAssistant == "true") {
          if ($(".video_ai_btns").length == 0 && _0x26f842.aiVideoInterpret == 1) {
            var _0x14f886 = "<div class=\"video_btns video_ai_btns\"><div class=\"operate_btn ai_quick_look\"><img src=\"/ananas/modules/video/abstract.png\" alt=\"\"><p>速览</p></div></div>";
            $(".vjs-control-bar").append(_0x14f886);
            $(".vjs-control-bar .ai_quick_look").click(function () {
              $(".prev_video_right").css({
                display: "inline-block"
              });
              $(".prev_video_right").animate({
                width: "468px"
              }, 100);
              var _0x274d31 = $(".main").width();
              var _0x4a3be9 = _0x274d31 - 468;
              var _0x493e53 = 700;
              typeof parent.curMicroTopicId != "undefined" && parent.curMicroTopicId > 0 && (_0x493e53 = 450);
              _0x4a3be9 < _0x493e53 ? _0x4a3be9 = _0x493e53 : _0x4a3be9 = _0x274d31 - 468;
              $(".prev_video_left").addClass("expand");
              $(".prev_video_left .pack-btn").hide();
              _0x4a3be9 == _0x493e53 && ($(window.frameElement).width(_0x4a3be9 + 468 + "px"), $(window.frameElement).addClass("openVideoInterpretFrame"));
              setBtnPosition();
            });
          }
        }
        if ("video" == _0x26f842.sourcePlayer && parent.parent.showAiAssistantTch == "true" && parent.parent.location.href.indexOf("studentstudy") > -1) {
          if ($(".video_ai_btns").length == 0) {
            var _0xa67d49 = "<div class=\"video_btns video_ai_btns\"><div class=\"operate_btn ai_quiz\"><img src=\"/ananas/modules/video/quiz.png\" alt=\"\"><p>不懂</p></div></div>";
            $(".vjs-control-bar").append(_0xa67d49);
          } else {
            if ($(".video_ai_btns .ai_quiz").length == 0) {
              var _0xa67d49 = "<div class=\"operate_btn ai_quiz\"><img src=\"/ananas/modules/video/quiz.png\" alt=\"\"><p>不懂</p></div>";
              $(".video_ai_btns").append(_0xa67d49);
            }
          }
          $(".vjs-control-bar .ai_quiz").click(function () {
            parent.parent.showAiAssistantTch == "true" && (parent.parent.ai_jobId = _0x2dbb54._jobId, parent.parent.ai_pageNum = _0x2dbb54.sec_(_0x4c5cf1), parent.parent.chaoxingRobot ? parent.parent.chaoxingRobot._openWin() : parent.parent.CozeBotSDK && (parent.parent.aiShotFrame = window.frameElement, parent.parent.openCozeBotForVideo(window.frameElement)));
          });
        }
        _0x2dbb54.deviceType == 1 && setBtnPosition();
        _0x2dbb54.danmuSet == 1 && !_0x4c5cf1.ignorePlay && _0x2dbb54.getDanmuList("play", _0x4c5cf1);
        cancelOneSpan = false;
        leftcancel = false;
        _0x2dbb54.firstPlay && (typeof aplus_queue != "undefined" && aplus_queue.push({
          action: "aplus.record",
          arguments: ["video_positive_pybk", "OTHER", {
            video_name: _0x2dbb54.aplusVideoName,
            video_id: _0x2dbb54.aplusVideoId,
            resource_id: _0x2dbb54.aplusResourseId,
            resource_name: _0x2dbb54.aplusResourceName,
            request_id: _0x2dbb54.getNewGuid()
          }]
        }), typeof showHotMap == "function" && showHotMap());
        try {
          if (typeof top.hasJobLimit != "undefined" && top.hasJobLimit === true && _0x2dbb54.firstClick && isUnFinishJob()) {
            _0x2dbb54.firstClick = false;
            _0x4c5cf1.pause();
            checkJobCountLimit(_0x4c5cf1, 0);
            return;
          }
          if (typeof top.videoTimeLimit != "undefined" && top.videoTimeLimit === true && _0x2dbb54.firstClick && isUnFinishJob()) {
            _0x2dbb54.firstClick = false;
            _0x4c5cf1.pause();
            checkJobCountLimit(_0x4c5cf1, 1);
            return;
          }
        } catch (_0x16f178) {
          console.log(_0x16f178);
        }
        _0x2dbb54.isAlertTip = false;
        !_0x4c5cf1.ignorePlay && !_0x2dbb54.firstPlay && typeof aplus_queue != "undefined" && aplus_queue.push({
          action: "aplus.record",
          arguments: ["continue_pybk_click", "CLK", {
            video_name: _0x2dbb54.aplusVideoName,
            video_id: _0x2dbb54.aplusVideoId,
            resource_id: _0x2dbb54.aplusResourseId,
            resource_name: _0x2dbb54.aplusResourceName
          }]
        });
        if (_0x2dbb54.chapterCapture == 0 || !_0x2dbb54.isSupportFace || !_0x2dbb54.isShowFaceCollection) {
          !_0x4c5cf1.ignorePlay ? (_0x554b39("play", true), _0x4c5cf1.ignoreSeek = true) : (_0x4c5cf1.ignorePlay = false, _0x4c5cf1.ignoreSeek = false, _0x4c5cf1.seekLog = false);
          _0x2dbb54.sendDataLog("play");
          _0x2dbb54.receiveStudyLog();
          _0x2dbb54.firstPlay = false;
          _0x2dbb54.pausePlayFace = true;
        } else {
          if (_0x2dbb54.chapterCapture == 1) {
            if (_0x2dbb54.firstPlay) {
              var _0x27a5d1 = _0x2dbb54.sec_(_0x4c5cf1);
              if (_0x27a5d1 == 0 && (_0x2dbb54.startCapture == 1 || typeof _0x2dbb54.startCapture == "undefined") && _0x2dbb54.firstPlayFace) {
                _0x2dbb54.playingFaceTime = _0x27a5d1;
                _0x2dbb54.playingFace = false;
                var _0x30a4a9 = _0x2dbb54.faceCollection("play", _0x4c5cf1, _0x2dbb54.chapterCollectionType, 0);
                if (_0x30a4a9 != 1) {
                  return;
                }
              }
              !_0x4c5cf1.ignorePlay ? (_0x554b39("play", true), _0x4c5cf1.ignoreSeek = true) : (_0x4c5cf1.ignorePlay = false, _0x4c5cf1.ignoreSeek = false, _0x4c5cf1.seekLog = false);
              _0x2dbb54.sendDataLog("play");
              _0x2dbb54.receiveStudyLog();
              _0x2dbb54.firstPlay = false;
              _0x2dbb54.pausePlayFace = true;
            } else {
              if (_0x2dbb54.playAginCapture == 1 && !_0x4c5cf1.ignorePlay && _0x2dbb54.pausePlayFace) {
                _0x2dbb54.playingFaceTime = _0x2dbb54.sec_(_0x4c5cf1);
                _0x2dbb54.playingFace = false;
                _0x2dbb54.faceCollection("aginPlay", _0x4c5cf1, _0x2dbb54.chapterCollectionType, -2);
                return;
              }
              _0x2dbb54.pausePlayFace = true;
            }
          }
        }
        typeof aplus_queue != "undefined" && (_0x5b2729 = setInterval(_0x392f3c, 20000));
        _0x2dbb54.seekLog = false;
      });
      var _0x2db0d7 = _0x4c5cf1.textTracks();
      var _0x431d0c = 1;
      function _0x47d1ff(_0x178f04) {
        $(".landscapeMask").hide();
        var _0x3c1faf = _0x4c5cf1.options_.playlines;
        var _0x2abcb9 = _0x4c5cf1.options_.sources;
        var _0x1590e8 = _0x4c5cf1.currentResolution().label;
        var _0x3bc495 = {};
        $.each(_0x2abcb9, function (_0x233cbc, _0x3a33e6) {
          _0x3bc495[_0x3a33e6.label] = _0x233cbc;
        });
        var _0x591486 = 0;
        $(".video_setting_hotmap .zmSwitch").hasClass("swithOn") ? ($(".quxian .switch").addClass("on"), $("#hot_map_main").show(), _0x591486 = 1) : ($(".quxian .switch").removeClass("on"), $("#hot_map_main").hide(), _0x591486 = 0);
        _0x431d0c = 0;
        $.each(_0x2db0d7, function (_0x644989, _0x9da838) {
          _0x9da838.mode == "showing" && _0x431d0c == "0" ? _0x431d0c = 1 : _0x9da838.mode == "showing" && _0x431d0c == "1" && (_0x9da838.mode = "disabled");
        });
        var _0x2606dd = 0;
        if (_0x3c1faf) {
          var _0x268368 = _0x4c5cf1.currentPlayline().label;
          for (var _0xe9a2b3 = 0; _0xe9a2b3 < _0x3c1faf.length; _0xe9a2b3++) {
            _0x3c1faf[_0xe9a2b3].label === _0x268368 && (_0x2606dd = _0xe9a2b3);
            _0x3c1faf[_0xe9a2b3].indexorder = _0xe9a2b3;
          }
        }
        if ($("#reader").hasClass("fullReader")) {
          $(".moreSettings").show();
          _0xac8a74(_0x3c1faf);
          _0x2017ff(_0x2abcb9, _0x3bc495, _0x1590e8);
          $(".quxian .switch").off("click").click(function () {
            $(this).hasClass("on") ? ($(this).removeClass("on"), $(".video_setting_hotmap .zmSwitch").removeClass("swithOn"), $("#hot_map_main").hide(), _0x591486 = 0) : ($(this).addClass("on"), $(".video_setting_hotmap .zmSwitch").addClass("swithOn"), $("#hot_map_main").show(), _0x591486 = 1);
          });
          _0x19fbf0();
          _0x178f04 = _0x178f04 || event;
          stopFunc(_0x178f04);
          return;
        }
        var _0x45d975 = _0x27df58(_0x4c5cf1);
        var _0xe659c2 = 0;
        $(".quxian").css("display") === "none" && (_0xe659c2 = 1);
        parent.moreSettingsShow(window.self, _0x3c1faf, _0x2606dd, _0x2abcb9, _0x3bc495, _0x1590e8, _0x591486, _0x2db0d7, _0x431d0c, videoName, _0x2dbb54.duration, _0x45d975, _0xe659c2);
      }
      function _0x27df58(_0xab59bf) {
        var _0x5d2178 = "/ananas/modules/video/wx/images/defautPosterUrl.png";
        _0xab59bf && _0xab59bf.poster_ && (_0x5d2178 = _0xab59bf.poster_);
        return _0x5d2178;
      }
      function _0x19fbf0() {
        var _0x1b6feb = $(".moduleUlTracks");
        _0x1b6feb.empty();
        if (!_0x2db0d7 || _0x2db0d7.length === 0) {
          $(".zimuBx").hide();
          return;
        } else {
          $(".zimuBx").show();
        }
        _0x431d0c == "1" ? ($(".zimuBx .switch").addClass("on"), $(".zimuBx ul").show()) : ($(".zimuBx .switch").removeClass("on"), $(".zimuBx ul").hide());
        $.each(_0x2db0d7, function (_0x4ce355, _0x276619) {
          var _0x5bd540 = $("<li>").text(_0x276619.label);
          _0x5bd540.attr("label", _0x276619.label);
          _0x276619.mode == "showing" && _0x5bd540.addClass("selected");
          _0x1b6feb.append(_0x5bd540);
        });
        $(".zimuBx .switch").off("click").click(function () {
          for (var _0x567775 = 0; _0x567775 < _0x2db0d7.length; _0x567775++) {
            var _0x2eea88 = _0x2db0d7[_0x567775];
            _0x2eea88.mode = "disabled";
          }
          $(this).hasClass("on") ? ($(this).removeClass("on"), $(".zimuBx ul").hide(), _0x431d0c = 0) : (_0x431d0c = 1, $(this).addClass("on"), $(".zimuBx ul").show(), _0x2db0d7[0].mode = "showing", $(".moduleUlTracks li").removeClass("selected"), $(".moduleUlTracks li:first").addClass("selected"));
        });
        $(".moduleUlTracks li").off("click").click(function () {
          $(".moduleUlTracks li").removeClass("selected");
          $(this).addClass("selected");
          var _0x42fbac = $(this).attr("label");
          for (var _0x124294 = 0; _0x124294 < _0x2db0d7.length; _0x124294++) {
            var _0x279333 = _0x2db0d7[_0x124294];
            _0x279333.mode = "disabled";
            _0x279333.kind == "subtitles" && _0x279333.label == _0x42fbac && (_0x279333.mode = "showing");
          }
        });
      }
      function _0x2017ff(_0x518da6, _0x555e74, _0x40d797) {
        var _0xf3a99e = $(".moduleUlResolution");
        _0xf3a99e.empty();
        $.each(_0x518da6, function (_0x460f06, _0x45ee91) {
          var _0x3d06b3 = $("<li>").text(_0x45ee91.label);
          _0x3d06b3.attr("indexorder", _0x460f06);
          _0x555e74[_0x40d797] == _0x460f06 && _0x3d06b3.addClass("selected");
          _0xf3a99e.append(_0x3d06b3);
        });
        $(".moduleUlResolution li").off("click").click(function (_0x491eba) {
          $(this).siblings().removeClass("selected");
          $(this).addClass("selected");
          var _0x136a2f = $(this).attr("indexorder");
          _0x4c5cf1.selectResolution(_0x136a2f);
        });
      }
      function _0xac8a74(_0x2693ff) {
        var _0x312f6c = $(".moduleUlLine");
        _0x312f6c.empty();
        $.each(_0x2693ff, function (_0x2728a0, _0x3bba5a) {
          var _0x33c50f = $("<li>").text(_0x3bba5a.label);
          _0x33c50f.attr("indexorder", _0x3bba5a.indexorder);
          var _0x1fd697 = _0x4c5cf1.currentPlayline().indexorder;
          !_0x1fd697 && (_0x1fd697 = 0);
          _0x3bba5a.indexorder === _0x1fd697 && _0x33c50f.addClass("selected");
          _0x312f6c.append(_0x33c50f);
        });
        $(".moduleUlLine li").off("click").click(function (_0x44ecb5) {
          $(this).siblings().removeClass("selected");
          $(this).addClass("selected");
          var _0x1d0833 = $(this).attr("indexorder");
          _0x4c5cf1.selectCDN(_0x1d0833);
        });
      }
      _0x4c5cf1.tipFun = function (_0x7e1de6) {
        var _0x4930c2 = _0x2dbb54.sec_(_0x4c5cf1);
        if (_0x7e1de6 == 37) {
          var _0x3a640f = _0x4930c2 - 5 < 0 ? 0 : _0x4930c2 - 5;
          _0x4c5cf1.currentTime(_0x3a640f);
        } else {
          if (_0x7e1de6 == 39) {
            if (_0x4930c2 + 5 < _0x4c5cf1.dragCutOffTime) {
              _0x4c5cf1.currentTime(_0x4930c2 + 5);
            } else {
              _0x4c5cf1.currentTime(_0x4c5cf1.dragCutOffTime);
              if (!$(".toolTipBox1").is(":visible")) {
                $(".toolTipBox1").html($("#tipDiv .toolTipBox1").html());
                var _0x11f092 = $("#video_html5_api").height();
                $(".toolTipBox1").css("top", parseInt(_0x11f092 / 2) + "px");
                $(".toolTipBox1").show();
                setTimeout(function () {
                  $(".toolTipBox1").hide();
                }, 800);
              }
            }
          }
        }
      };
      _0x4c5cf1.on("seeked", function () {
        _0x2dbb54.deviceType == 2 && $(".channel").empty();
        _0x4c5cf1.playStatus = "seeked";
        if (_0x26f842.enableFastForward != 1 && !_0x4c5cf1.switchStatus && !_0x4c5cf1.finished) {
          var _0x53d805 = _0x4c5cf1.currentTime();
          var _0x208e50 = _0x26f842.headOffset ? _0x26f842.headOffset : 0;
          max = Math.max(_0x208e50, _0x4c5cf1.dragCutOffTime);
          if (parseInt(_0x53d805) > max) {
            _0x4c5cf1.canDragSeekBar = false;
            _0x53d805 != 0 && _0x4c5cf1.currentTime(max);
            bindVjsClick && bindVjsClick();
            return;
          } else {
            if (_0x53d805 == max) {
              return;
            } else {
              _0x53d805 < max && (_0x4c5cf1.canDragSeekBar = true);
            }
          }
        }
        !_0x4c5cf1.seekLog && (_0x4c5cf1.seekStartTime = _0x5e5b1b);
        if (!_0x4c5cf1.ignoreSeek) {
          if (!_0x4c5cf1.seekLog) {
            _0x4c5cf1.firstSeek && (_0x554b39("drag", true, _0x4c5cf1.seekStartTime + "-" + _0x2dbb54.sec_(_0x4c5cf1)), _0x4c5cf1.firstSeek = false);
            function _0x43df76() {
              _0x554b39("drag", true, _0x4c5cf1.seekStartTime + "-" + _0x2dbb54.sec_(_0x4c5cf1));
              document.removeEventListener("mouseup", _0x43df76);
            }
            document.addEventListener("mouseup", _0x43df76);
            _0x2dbb54.danmuSet == 1 && _0x2dbb54.getDanmuList("seeked", _0x4c5cf1);
          }
          "video" == _0x26f842.sourcePlayer && (typeof aplus_queue != "undefined" && aplus_queue.push({
            action: "aplus.record",
            arguments: ["time_shift_click", "OTHER", {
              video_name: _0x2dbb54.aplusVideoName,
              video_id: _0x2dbb54.aplusVideoId,
              resource_id: _0x2dbb54.aplusResourseId,
              resource_name: _0x2dbb54.aplusResourceName,
              time_shift_time: _0x5e5b1b + "",
              time_shift_duration: Math.abs(parseInt(_0x2dbb54.sec_(_0x4c5cf1)) - parseInt(_0x5e5b1b))
            }]
          }), typeof aplus_queue != "undefined" && aplus_queue.push({
            action: "aplus.record",
            arguments: ["video_progress_drag", "OTHER", {
              video_name: _0x2dbb54.aplusVideoName,
              video_id: _0x2dbb54.aplusVideoId,
              resource_id: _0x2dbb54.aplusResourseId,
              resource_name: _0x2dbb54.aplusResourceName
            }]
          }));
        } else {
          _0x4c5cf1.ignoreSeek = false;
        }
        _0x5e5b1b = _0x2dbb54.sec_(_0x4c5cf1);
        _0x4c5cf1.ignorePlay = true;
        _0x4c5cf1.seekLog = true;
        delete _0x4c5cf1.switchStatus;
      });
      _0x4c5cf1.on("pause", function () {
        _0x4c5cf1.playStatus = "pause";
        !_0x4c5cf1.ignorePause ? (_0x554b39("pause", true), _0x4c5cf1.ignorePlay = false, _0x4c5cf1.ignoreSeek = false, _0x4c5cf1.seekLog = false, typeof aplus_queue != "undefined" && aplus_queue.push({
          action: "aplus.record",
          arguments: ["video_pause_click", "CLK", {
            video_name: _0x2dbb54.aplusVideoName,
            video_id: _0x2dbb54.aplusVideoId,
            resource_id: _0x2dbb54.aplusResourseId,
            resource_name: _0x2dbb54.aplusResourceName
          }]
        })) : _0x4c5cf1.ignorePause = false;
        _0x2dbb54.sendDataLog("pause");
        cancelOneSpan = true;
        leftcancel = true;
        _0x5b2729 && clearInterval(_0x5b2729);
      });
      _0x4c5cf1.on("timeupdate", function () {
        _0x4c5cf1.playStatus = "playing";
        var _0x4dfb5f = _0x2dbb54.sec_(_0x4c5cf1);
        _0x4dfb5f > _0x4c5cf1.dragCutOffTime && _0x4dfb5f - _0x4c5cf1.dragCutOffTime < 2 && (_0x4c5cf1.dragCutOffTime = _0x4dfb5f);
        if (_0x2dbb54.isSupportFace && _0x2dbb54.isShowFaceCollection && _0x2dbb54.chapterCapture == 1 && _0x2dbb54.playingCapture == 1 && _0x2dbb54.playingFace) {
          _0x2dbb54.playingFace = false;
          if (_0x2dbb54.playingLoopCapture == 1) {
            if (_0x4dfb5f == _0x2dbb54.loopCaptureInterval) {
              var _0xc5c8a9 = _0x2dbb54.faceCollection("playing", _0x4c5cf1, _0x2dbb54.chapterCollectionType, -1, _0x4dfb5f);
              if (_0xc5c8a9 != 1) {
                return;
              }
            }
          } else {
            if (_0x4dfb5f >= _0x2dbb54.captureInterval && _0x4dfb5f % _0x2dbb54.captureInterval == 0) {
              var _0xc5c8a9 = _0x2dbb54.faceCollection("playing", _0x4c5cf1, _0x2dbb54.chapterCollectionType, _0x4dfb5f);
              if (_0xc5c8a9 != 1) {
                return;
              }
            }
          }
        }
        !_0x2dbb54.playingFace && _0x4dfb5f >= _0x2dbb54.playingFaceTime && (_0x2dbb54.playingFace = true);
        if ("video" == _0x26f842.sourcePlayer && typeof parent.videoTrialDuration != "undefined" && parent.videoTrialDuration != "-1") {
          var _0x147422 = parseInt(parent.videoTrialDuration) * 60;
          if (_0x147422 < _0x2dbb54.sec_(_0x4c5cf1) && !_0x2dbb54.isAlertTip) {
            _0x4c5cf1.pause();
            alert("视频只允许试看" + parent.videoTrialDuration + "分钟");
            _0x2dbb54.isAlertTip = true;
            return;
          }
        }
        _0x2dbb54.danmuSet == 1 && parseInt(_0x4c5cf1.currentTime()) >= _0x2dbb54.damuLastGetTime && _0x2dbb54.getDanmuList("timeupdate", _0x4c5cf1);
        _0x2dbb54.danmuDisplay(_0x4c5cf1);
        if (_0x3e6525 == 0) {
          _0x398365(_0x4c5cf1, _0x26f842);
          return;
        }
        _0x2dbb54.sec_(_0x4c5cf1) - _0x5e5b1b <= 1 && !_0x4c5cf1.ignorePlay && (_0x5e5b1b = _0x2dbb54.sec_(_0x4c5cf1));
        _0x554b39("playing");
        _0x398365(_0x4c5cf1, _0x26f842);
      });
      _0x4c5cf1.on("ended", function () {
        _0x4c5cf1.playStatus = "ended";
        _0x2dbb54.isShowFaceCollection && _0x2dbb54.chapterCapture == 1 && _0x2dbb54.endCapture == 1 && _0x2dbb54.faceCollection("ended", _0x4c5cf1, _0x2dbb54.chapterCollectionType, _0x2dbb54.duration);
        _0x554b39("ended", true);
        typeof aplus_queue != "undefined" && aplus_queue.push({
          action: "aplus.record",
          arguments: ["video_end_click", "CLK", {
            video_name: _0x2dbb54.aplusVideoName,
            video_id: _0x2dbb54.aplusVideoId,
            resource_id: _0x2dbb54.aplusResourseId,
            resource_name: _0x2dbb54.aplusResourceName,
            request_id: _0x2dbb54.getNewGuid(),
            pybk_duration: _0x2dbb54.duration,
            full_play_count: 1
          }]
        });
        _0x5b2729 && clearInterval(_0x5b2729);
        cancelOneSpan = false;
        leftcancel = false;
        _0x4c5cf1.seekLog = false;
      });
    },
    sec_: function (_0x1a5216) {
      return parseInt(_0x1a5216.currentTime());
    },
    now_: function () {
      return new Date().getTime();
    },
    isSendLog: function (_0x19e9a5) {
      _0x19e9a5 && (this.isSendLog_ = !!_0x19e9a5);
      return this.isSendLog_;
    },
    sendDataLog: function (_0x52fa44) {
      var _0x36a0cb = _0x52fa44 == "pause" || _0x52fa44 == "end" ? 2 : 1;
      typeof sendReadZTMediaLog != "undefined" && sendReadZTMediaLog(_0x36a0cb);
    },
    receiveStudyLog: function () {
      typeof receiveStudyLog != "undefined" && setTimeout(function () {
        receiveStudyLog();
      }, 50);
    },
    getDanmuList: function (_0xb49bc8, _0x264bb9) {
      if (!this.isShowDanmu_) {
        return;
      }
      var _0x292c42 = this.sec_(_0x264bb9);
      if (_0xb49bc8 == "pause") {
        this.damuLastGetTime = 0;
        setTimeout(function () {
          getDanmuByTime(_0xb49bc8, 0);
        }, 200);
        return;
      }
      _0xb49bc8 == "seeked" && this.danmuSet == 1 && $(".channel").empty();
      typeof getDanmuByTime != "undefined" && setTimeout(function () {
        getDanmuByTime(_0xb49bc8, _0x292c42);
      }, 200);
      this.damuLastGetTime = _0x292c42 + 59;
    },
    danmuDisplay: function (_0x3ef6eb) {
      if (!this.isShowDanmu_) {
        return;
      }
      var _0x2e0799 = this.sec_(_0x3ef6eb);
      typeof danmuPlay != "undefined" && danmuPlay(_0x2e0799);
    },
    timer: function (_0x507940) {},
    faceCollection: function (_0x118325, _0x230a7f, _0x2c2673, _0x509c33) {
      if (_0x509c33 != -2) {
        var _0x388300 = this.jumpTimePointList;
        if (typeof _0x388300 != "undefined") {
          try {
            if (_0x388300.includes(_0x509c33)) {
              this.firstPlayFace = false;
              this.pausePlayFace = false;
              this.playingFace = false;
              return 1;
            }
          } catch (_0x54b617) {}
        }
      }
      _0x118325 == "play" ? typeof startFaceCollection != "undefined" && (_0x230a7f.pause(), startFaceCollection(_0x230a7f, _0x2c2673, this, _0x509c33)) : _0x118325 == "ended" ? typeof startFaceCollection != "undefined" && (_0x230a7f.pause(), startFaceCollection(_0x230a7f, _0x2c2673, this, _0x509c33)) : _0x118325 == "playing" ? (typeof startFaceCollection != "undefined" && (_0x230a7f.pause(), this.playingFaceTime = this.sec_(_0x230a7f), startFaceCollection(_0x230a7f, _0x2c2673, this, _0x509c33), this.playingFace = false), this.pausePlayFace = false) : _0x118325 == "aginPlay" && (typeof startFaceCollection != "undefined" && (_0x230a7f.pause(), startFaceCollection(_0x230a7f, _0x2c2673, this, _0x509c33)), this.pausePlayFace = false);
    },
    playNextVideo: function (_0x9344d1) {
      if (typeof chapterPlayNextVideo != "undefined") {
        if (typeof top.allowNextVideo != "undefined" && top.allowNextVideo === false) {
          top.hasJobLimit === true ? top.showJobLimitTip() : top.showVideoTimeLimitTip();
          return;
        }
        chapterPlayNextVideo(_0x9344d1);
      }
    },
    getNewGuid: function () {
      var _0x1bc249 = "";
      for (var _0xa5abb7 = 1; _0xa5abb7 <= 32; _0xa5abb7++) {
        var _0x162642 = Math.floor(Math.random() * 16).toString(16);
        _0x1bc249 += _0x162642;
        (_0xa5abb7 == 8 || _0xa5abb7 == 12 || _0xa5abb7 == 16 || _0xa5abb7 == 20) && (_0x1bc249 += "-");
      }
      return _0x1bc249;
    }
  });
  videojs.registerPlugin("seekBarControl", _0x2ceb22);
})();
Ext.define("ans.videojs.TimelineObjectsBg", {
  extend: "Ext.Component",
  cls: "ans-timelineobjectsbg",
  hidden: true
});
Ext.define("ans.videojs.VideoQuiz", {
  extend: "Ext.Component",
  xtype: "videoquiz",
  cls: "ans-videoquiz",
  renderTpl: ["<div class=\"tkTopic\">", "<tpl if=\"dtype=='InteractiveQuiz'\">", "<div class=\"tkTopic_numbar fr\">" + langMap.qTotal + " {interactiveQuestionCount}" + langMap.qs + "<span id=\"rightAnswerNum\">，" + langMap.qAnsweR + " <i id=\"rightNum\"></i> " + langMap.qs + "</span></div>", "</tpl> ", "<div class=\"tkTopic_title\"><tpl if=\"questionType=='多选题'\">" + langMap.multiQuestion + "<tpl elseif=\"questionType=='单选题'\">" + langMap.singleQuestion + "<tpl else>" + langMap.trueQuestion + "</tpl></div>", "<div class=\"tkTopic_con tkScroll\">", "<div class=\"tkItem\">", "<div class=\"tkItem_title\">{description}</div>", "<ul class=\"tkItem_ul\">", "<tpl for=\"options\">", "<li class=\"ans-videoquiz-opt\"><label>", "<span class=\"tkRadio\"><input <tpl if=\"parent.isPortal\">disabled</tpl> type=\"{[parent.questionType==\"多选题\"?\"checkbox\":\"radio\"]}\" <tpl if=\"parent.dtype=='InteractiveQuiz'\">{[this.getChecked(parent.answerContent, values.name, parent.dtype)]}</tpl> name=\"ans-videoquiz-opt\" value=\"{isRight}\"/><i></i></span>", "{name}、{description}", "</label></li>", "</tpl> ", "</ul>", "</div>", "</div>", "<div class=\"tkTopic_oper\">", "<a class=\"ans-videoquiz-submit bntLinear fr\" id=\"videoquiz-submit\">" + langMap.submitBtn + "</a>", "<a class=\"ans-videoquiz-submit bntLinear fr\" id=\"videoquiz-submitting\" style=\"display:none\">" + langMap.Submitting + "</a>", "<a class=\"ans-videoquiz-continue bntLinear fr\" id=\"videoquiz-continue\"><tpl if=\"dtype=='InteractiveQuiz'\">" + langMap.continueStudy + "<tpl else>" + langMap.continue2 + "</tpl></a>", "<tpl if=\"dtype=='InteractiveQuiz'\">", "<a class=\"bntWhiteBorder ans-videoquiz-back fr\" id=\"knowledgeBack\">" + langMap.lookBack + "</a>", "</tpl>", "<tpl if=\"dtype=='InteractiveQuiz'\"><span id=\"spanHas\" class=\"rightInfo\"></span><tpl else><span class=\"spanHas fr\" id=\"spanHas\">" + langMap.answerR + "</span></tpl>", "<span class=\"spanNot fr\" id=\"spanNot\"><tpl if=\"dtype=='InteractiveQuiz'\">" + langMap.keepGood + "<tpl else>" + langMap.answerErr + "</tpl></span>", "<span class=\"spanNotBack fr\" id=\"spanNotBack\"><tpl if=\"dtype=='InteractiveQuiz'\">" + langMap.keepGood + "<tpl else>" + langMap.answerErr + "，</tpl>" + langMap.backView + " {errorBackTime} " + langMap.backMinutes + "</span>", "<tpl if=\"dtype=='InteractiveQuiz'\">", "<span class=\"spanNotBack fr\" id=\"spanNotBackPoint\">" + langMap.keepGood + "</span>", "<a class=\"spanHref fl\" href=\"javascript:\" id=\"viewAnalysis\">" + langMap.viewAnalysis + "</a>", "</div>", "<div class=\"tkParsing\" id=\"tkParsing\">", "<a class=\"tkParsing_dele\" id=\"tkParsingDele\" href=\"javascript:\"></a>", "<div class=\"tkParsing_screll tkParsing_con\" id=\"tkParsing_con\"></div>", "</tpl>", "</div>", "</div>", {
    getChecked: function (_0x4cc7db, _0x2281c0, _0x1b6ed0) {
      try {
        if (typeof _0x4cc7db != "undefined") {
          return _0x4cc7db.indexOf(_0x2281c0) != -1 && _0x1b6ed0 == "InteractiveQuiz" ? "checked=\"checked\"" : "";
        }
        return "";
      } catch (_0xd0e956) {
        console.log(_0xd0e956);
      }
    }
  }],
  renderSelectors: {
    submitEl: "a.ans-videoquiz-submit",
    continueEl: "a.ans-videoquiz-continue",
    scrollEl: "div.tkScroll",
    backEl: "a.ans-videoquiz-back",
    tkParseScrollEl: "div.tkParsing_screll",
    viewAnalysisEl: "a.spanHref",
    delAnalysisEl: "a.tkParsing_dele",
    btnDivEl: "div.tkTopic_oper"
  },
  afterRender: function () {
    var _0x16b7c4 = this;
    var _0x5c3903 = _0x16b7c4.renderData;
    var _0xd10ee5 = _0x16b7c4.quizRightCountUrl;
    var _0x6ecf17 = _0x5c3903.isPortal;
    !_0x6ecf17 && typeof _0xd10ee5 != "undefined" && Ext.Ajax.request({
      url: _0xd10ee5,
      params: {
        eventid: _0x5c3903.resourceId,
        memberinfo: _0x5c3903.memberinfo
      },
      method: "get",
      success: function (_0x376bc3) {
        var _0x4a4b51 = Ext.decode(_0x376bc3.responseText);
        _0x4a4b51.status && (Ext.get("rightNum").setHTML(_0x4a4b51.rightAnswerCount), Ext.get("rightAnswerNum").setStyle("display", "inline-block"));
      }
    });
    _0x16b7c4.callParent(arguments);
    var _0x72a647 = _0x16b7c4.scrollEl;
    var _0x555eb6 = $(_0x72a647.dom).niceScroll({
      cursorborder: "",
      cursorwidth: 6,
      cursorcolor: "#A5A5A5",
      boxzoom: false,
      autohidemode: false
    });
    setInterval(function () {
      $(_0x72a647.dom).getNiceScroll().resize();
    }, 300);
    _0x16b7c4.scroller = _0x555eb6;
    if (_0x6ecf17) {
      _0x16b7c4.btnDivEl.remove();
      setTimeout(function () {
        _0x16b7c4.fireEvent("continue");
      }, 3000);
      return;
    }
    _0x16b7c4.submitEl.on("click", function () {
      _0x16b7c4.checkResult();
    });
    _0x16b7c4.continueEl.on("click", function () {
      try {
        top.configFullScreen && exitMediumSizeWindow();
      } catch (_0x5b1532) {
        console.log(_0x5b1532);
      }
      _0x16b7c4.fireEvent("continue");
    });
    _0x16b7c4.backEl && _0x16b7c4.backEl.on("click", function () {
      _0x16b7c4.onerror && _0x16b7c4.onerror();
      try {
        top.configFullScreen && exitMediumSizeWindow();
      } catch (_0x8c2c69) {
        console.log(_0x8c2c69);
      }
      _0x16b7c4.fireEvent("continue");
    });
    _0x16b7c4.viewAnalysisEl && _0x16b7c4.viewAnalysisEl.on("click", function () {
      Ext.get("tkParsing").setStyle("display", "inline-block");
    });
    _0x16b7c4.delAnalysisEl && _0x16b7c4.delAnalysisEl.on("click", function () {
      Ext.get("tkParsing").setStyle("display", "none");
    });
  },
  checkResult: function () {
    var _0x261c13 = this;
    var _0x492cc9 = Ext.query("input", _0x261c13.el.dom);
    var _0x53fd3c = true;
    var _0x210b5e = _0x261c13.renderData;
    var _0x13176e = _0x210b5e.options;
    var _0x5f32e4 = [];
    var _0x120aec = _0x261c13.quizErrorReportUrl;
    var _0x4eee36 = _0x261c13.validationUrl2;
    var _0x1e3705 = _0x210b5e.dtype;
    if (window.parent.location.href.indexOf("nodedetailcontroller/visitnodedetail") > -1 || window.parent.location.href.indexOf("/micro-node-detail") > -1) {
      try {
        top.configFullScreen && exitMediumSizeWindow();
      } catch (_0x39768e) {
        console.log(_0x39768e);
      }
      _0x261c13.fireEvent("continue");
      return;
    }
    Ext.each(_0x492cc9, function (_0x73e721, _0x33bd87) {
      _0x73e721.checked && _0x5f32e4.push(_0x13176e[_0x33bd87].name);
    });
    Ext.get("videoquiz-submit").setStyle("display", "none");
    Ext.get("videoquiz-submitting").setStyle("display", "block");
    if (typeof _0x4eee36 != "undefined") {
      var _0xc7fdff = _0x5f32e4.join(",");
      Ext.Ajax.request({
        url: _0x4eee36,
        params: {
          eventid: _0x210b5e.resourceId,
          memberinfo: _0x210b5e.memberinfo,
          answerContent: _0xc7fdff
        },
        method: "get",
        success: function (_0x382971) {
          Ext.get("videoquiz-submit").setStyle("display", "block");
          Ext.get("videoquiz-submitting").setStyle("display", "none");
          _0x210b5e.answerContent = _0xc7fdff;
          var _0x1be37f = Ext.decode(_0x382971.responseText);
          var _0x1cc7b9 = typeof _0x1be37f.isRight === "undefined" ? false : _0x1be37f.isRight;
          !_0x1cc7b9 ? _0x1e3705 == "InteractiveQuiz" ? (_0x210b5e.errorBack && _0x210b5e.errorBack == 1 && (_0x210b5e.errorBackTime && _0x210b5e.errorBackTime > 0 || _0x210b5e.eBstartPoint && _0x210b5e.eBstartPoint != "") && (Ext.get("spanNotBackPoint").setStyle("display", "block"), Ext.get("videoquiz-submit").setStyle("display", "none"), Ext.get("knowledgeBack").setStyle("display", "block")), _0x210b5e.errorContinue && _0x210b5e.errorContinue == 1 ? (Ext.get("spanNotBackPoint").setStyle("display", "block"), Ext.get("videoquiz-continue").setStyle("display", "block")) : _0x210b5e.errorMustBack && _0x210b5e.errorMustBack == 1 ? (Ext.get("spanNotBackPoint").setStyle("display", "block"), Ext.get("videoquiz-continue").setStyle("display", "none")) : (Ext.get("videoquiz-submit").setStyle("display", "block"), Ext.get("spanNotBackPoint").setStyle("display", "block"))) : _0x210b5e.errorBackTime && _0x210b5e.errorBackTime > 0 ? (Ext.get("spanNotBack").setStyle("display", "block"), Ext.get("videoquiz-submit").setStyle("display", "none"), Ext.get("videoquiz-continue").setStyle("display", "block")) : Ext.get("spanNot").setStyle("display", "block") : (Ext.get("spanHas").setStyle("display", "block"), _0x1e3705 == "InteractiveQuiz" && (Ext.get("videoquiz-continue").setStyle("display", "block"), Ext.get("knowledgeBack").setStyle("display", "none"), Ext.get("videoquiz-submit").setStyle("display", "none"), Ext.get("spanNot").setStyle("display", "none"), Ext.get("spanNotBack").setStyle("display", "none"), Ext.get("spanNotBackPoint").setStyle("display", "none")));
          if (_0x1be37f.status) {
            if (_0x1e3705 == "InteractiveQuiz") {
              _0x1be37f.rightAnswerCount && (Ext.get("rightNum").setHTML(_0x1be37f.rightAnswerCount), Ext.get("rightAnswerNum").setStyle("display", "inline-block"));
              var _0x2e5069 = "";
              var _0x3d968d = false;
              _0x1be37f.testAnalysis ? _0x1be37f.showAnswer && _0x1be37f.showAnswer > 0 ? (_0x2e5069 += langMap.correctAnswer + "：" + _0x1be37f.rightContent, _0x2e5069 += "</br>" + langMap.Analysis + "：" + _0x1be37f.testAnalysis, Ext.get("viewAnalysis").setStyle("display", "block"), _0x3d968d = true) : _0x1be37f.isRight && (_0x2e5069 += langMap.Analysis + "：" + _0x1be37f.testAnalysis, Ext.get("viewAnalysis").setStyle("display", "block"), _0x3d968d = true) : _0x1be37f.showAnswer && _0x1be37f.showAnswer > 0 ? (Ext.get("tkParsingDele").setStyle("display", "none"), Ext.get("viewAnalysis").setStyle("display", "none"), _0x2e5069 += langMap.correctAnswer + "：" + _0x1be37f.rightContent, _0x3d968d = true) : Ext.get("viewAnalysis").setStyle("display", "none");
              if (_0x3d968d) {
                Ext.get("tkParsing_con").setHTML(_0x2e5069);
                Ext.get("tkParsing").setStyle("display", "inline-block");
                var _0x3559a0 = _0x261c13.tkParseScrollEl;
                var _0x729dad = $(_0x3559a0.dom).niceScroll({
                  cursorborder: "",
                  cursorwidth: 6,
                  cursorcolor: "#A5A5A5",
                  boxzoom: false,
                  autohidemode: true
                });
                _0x261c13.tkParseScroll = _0x729dad;
              }
            }
            if (_0x1be37f.isRight && _0x1e3705 == "InteractiveQuiz") {
              if (typeof _0x1be37f.showTip != "undefined" && _0x1be37f.showTip) {
                var _0x44ae25 = _0x1be37f.percent;
                try {
                  var _0x7b86bb = Ext.getCookie("fid", 0);
                  _0x44ae25 = parseInt(_0x44ae25);
                  _0x7b86bb == "179952" && _0x44ae25 > 0 && (_0x44ae25 = 90 + _0x44ae25 * 0.1);
                } catch (_0x447db2) {
                  console.log(_0x447db2);
                }
                Ext.get("spanHas").setHTML("<span class=\"spanHas fr\" style='display:block'><span id=\"InteractiveQuizTip\">" + langMap.corretTip1 + langMap.corretTip2 + _0x44ae25 + langMap.corretTip3 + "</span></span>");
              } else {
                Ext.get("spanHas").setHTML("<span class=\"spanHas fr\" style='display:block'><span id=\"InteractiveQuizTip\">" + langMap.corretTip1 + "</span></span>");
              }
            }
          }
          !_0x1cc7b9 && _0x261c13.onerror && _0x1e3705 != "InteractiveQuiz" && _0x261c13.onerror();
          !_0x1cc7b9 && _0x210b5e.errorContinue == 1 && (_0x53fd3c = true, Ext.get("videoquiz-submit").setStyle("display", "none"), Ext.get("videoquiz-continue").setStyle("display", "block"));
          if (_0x1cc7b9 && Ext.get("videoquiz-continue").getStyle("display") == "none") {
            try {
              top.configFullScreen && exitMediumSizeWindow();
            } catch (_0xd02aa) {
              console.log(_0xd02aa);
            }
            _0x261c13.fireEvent("continue");
          }
        },
        error: function () {
          Ext.get("videoquiz-submit").setStyle("display", "block");
          Ext.get("videoquiz-submitting").setStyle("display", "none");
          _0x261c13.onerror && _0x1e3705 != "InteractiveQuiz" && _0x261c13.onerror();
        }
      });
    }
    return _0x53fd3c;
  },
  continueFun: function () {
    var _0x330ac3 = this;
    _0x330ac3.fireEvent("continue");
  }
});
Ext.define("ans.videojs.VideoImg", {
  extend: "Ext.Component",
  xtype: "videoimg",
  renderTpl: ["<div class=\"sp_video_pic\">", "<img src=\"{src}\" class=\"sp_video_img\" />", "<a class=\"jb_btn jb_btn_92 fs14 sp_video_pic_dele2\" style=\"position:absolute;bottom:14px;right:20px;z-index:6;\" href=\"javascript:\">" + langMap.continueStudy + "</a>", "</div>"],
  renderSelectors: {
    closeEl: "a.sp_video_pic_dele2"
  },
  afterRender: function () {
    var _0x5aac58 = this;
    _0x5aac58.callParent(arguments);
    try {
      var _0x427e23 = document.querySelector(".sp_video_img");
      _0x427e23.addEventListener("load", function () {
        _0x427e23.naturalWidth >= _0x427e23.naturalHeight ? _0x427e23.naturalWidth >= 400 && (_0x427e23.style.maxWidth = "70%", _0x427e23.style.maxHeight = "70%", _0x427e23.style.height = "auto") : _0x427e23.naturalHeight >= 400 && (_0x427e23.style.maxHeight = "70%", _0x427e23.style.maxWidth = "70%", _0x427e23.style.width = "auto");
      });
    } catch (_0x521b4b) {
      console.log(_0x521b4b);
    }
    _0x5aac58.el.on("click", function () {
      try {
        top.configFullScreen && exitMediumSizeWindow();
      } catch (_0xd0d50a) {
        console.log(_0xd0d50a);
      }
      _0x5aac58.fireEvent("continue");
    });
    _0x5aac58.closeEl.on("click", function () {
      try {
        top.configFullScreen && exitMediumSizeWindow();
      } catch (_0x249399) {
        console.log(_0x249399);
      }
      _0x5aac58.fireEvent("continue");
    });
  }
});
Ext.define("ans.videojs.VideoAnnotation", {
  extend: "Ext.Component",
  xtype: "videoannotation",
  cls: "ans-videoannotation",
  width: "259px",
  model: false,
  renderTpl: ["<div class=\"comment_icon\"><img src=\"/ananas/modules/video/pz_icon.png\"/></div>", "<div class=\"comment_box\" style=\"display:block\">", "<div class=\"comment_tit\"><a href=\"javascript:;\" class=\"stow_icon fr\"><img src=\"/ananas/modules/video/stow_icon.png\" /></a><p class=\"fl\">[" + langMap.Annotations + "]</p></div>", "<p class=\"comment_con\">{description}</p>", "<a href=\"javascript:;\" class=\"continueLearn fr\">" + langMap.continueStudy + "</a>", "</div>"],
  renderSelectors: {
    stowEl: "a.stow_icon",
    commentOpenEl: "div.comment_icon",
    boxEl: "div.comment_box",
    continueEl: "a.continueLearn"
  },
  afterRender: function () {
    var _0x18eaca = this;
    var _0x39d6bb = _0x18eaca.commentOpenEl;
    var _0x555100 = _0x18eaca.boxEl;
    _0x18eaca.callParent(arguments);
    _0x39d6bb.on("click", function () {
      _0x39d6bb.setStyle("display", "none");
      _0x555100.setStyle("display", "block");
      $(".comment_con").getNiceScroll().resize();
    });
    _0x18eaca.stowEl.on("click", function () {
      _0x555100.setStyle("display", "none");
      _0x39d6bb.setStyle("display", "block");
    });
    _0x18eaca.continueEl.on("click", function () {
      try {
        top.configFullScreen && exitMediumSizeWindow();
      } catch (_0x1e6210) {
        console.log(_0x1e6210);
      }
      _0x18eaca.fireEvent("continue");
    });
    var _0x578267 = $(".comment_con").niceScroll({
      cursorborder: "",
      cursorwidth: "8px",
      cursorcolor: "#ACB4BF",
      boxzoom: false,
      autohidemode: true
    });
    _0x18eaca.scroller = _0x578267;
  }
});
Ext.define("ans.videojs.VideoPpt", {
  extend: "Ext.Component",
  xtype: "videoppt",
  cls: "ans-videoppt",
  width: "100%",
  model: false,
  renderTpl: ["<div class=\"sp_video_ppt_pic\" id=\"sp_video_ppt_pic\">", "<img src=\"{src}\" class=\"sp_video_img\" style=\"width: 100%;\"/>", "<a class=\"sp_size_big\" id=\"sp_size_big\" href=\"javascript:;\"></a>", "<a class=\"sp_size_small\" href=\"javascript:;\" style=\"display:none;\" id=\"sp_size_small\"></a>", "</div>"],
  renderSelectors: {
    pptPicEl: "div.sp_video_ppt_pic",
    sizeBigEl: "a.sp_size_big",
    sizeSmallEl: "a.sp_size_small"
  },
  afterRender: function () {
    var _0x13d417 = this;
    _0x13d417.callParent(arguments);
    try {
      dragFn && dragFn("#sp_video_ppt_pic", "#video_html5_api");
    } catch (_0x1d8744) {
      console.log(_0x1d8744);
    }
    var _0x1f2701 = Ext.get("video_html5_api").getStyle("height");
    var _0x15d36c = Ext.get("video_html5_api").getStyle("width");
    var _0x2f568c = parseInt(_0x1f2701) > parseInt(_0x15d36c);
    _0x2f568c ? Ext.get("sp_video_ppt_pic").addCls("sp_video_ppt_pic_w") : Ext.get("sp_video_ppt_pic").addCls("sp_video_ppt_pic_h");
    function _0x3ab99b() {
      Ext.get("sp_size_big").setStyle("display", "none");
      Ext.get("sp_size_small").setStyle("display", "block");
    }
    function _0x6a324f() {
      Ext.get("sp_size_big").setStyle("display", "block");
      Ext.get("sp_size_small").setStyle("display", "none");
    }
    _0x13d417.sizeBigEl.on("click", function (_0x5ce409) {
      _0x5ce409.stopPropagation();
      _0x2f568c ? _0x13d417.pptPicEl.toggleCls("sp_ppt_pic_fullScreen1") : _0x13d417.pptPicEl.toggleCls("sp_ppt_pic_fullScreen");
      _0x3ab99b();
    });
    _0x13d417.sizeSmallEl.on("click", function (_0x1fa5a2) {
      _0x1fa5a2.stopPropagation();
      _0x2f568c ? _0x13d417.pptPicEl.toggleCls("sp_ppt_pic_fullScreen1") : _0x13d417.pptPicEl.toggleCls("sp_ppt_pic_fullScreen");
      _0x6a324f();
    });
    _0x13d417.sizeBigEl.on("touchend", function (_0x2434d1) {
      _0x2434d1.stopPropagation();
      _0x2f568c ? _0x13d417.pptPicEl.toggleCls("sp_ppt_pic_fullScreen1") : _0x13d417.pptPicEl.toggleCls("sp_ppt_pic_fullScreen");
      _0x3ab99b();
    });
    _0x13d417.sizeSmallEl.on("touchend", function (_0x19c18d) {
      _0x19c18d.stopPropagation();
      _0x2f568c ? _0x13d417.pptPicEl.toggleCls("sp_ppt_pic_fullScreen1") : _0x13d417.pptPicEl.toggleCls("sp_ppt_pic_fullScreen");
      _0x6a324f();
    });
  }
});
Ext.define("ans.videojs.TimelineObjects", {
  extend: "Ext.container.Container",
  cls: "ans-timelineobjects",
  autoScroll: true,
  hidden: true,
  hideMode: "visibility",
  constructor: function (_0x592432) {
    var _0xed1b45 = this;
    _0xed1b45.callParent(arguments);
    _0xed1b45.bg = Ext.create("ans.videojs.TimelineObjectsBg", {
      renderTo: _0x592432.renderTo
    });
    _0xed1b45.objects = _0x592432.objects && _0x592432.objects.sort ? _0xed1b45.sort_(_0x592432.objects) : [];
    _0xed1b45.current = 0;
    _0xed1b45.showAnnotation = false;
  },
  hideTimeline: function () {
    var _0x3b5b3b = this;
    _0x3b5b3b.showAnnotation && (_0x3b5b3b.hide(), _0x3b5b3b.showAnnotation = false);
  },
  showObject: function (_0x4a1ee0, _0x1b68f0, _0x406aa5) {
    var _0x42ab2b = this;
    var _0x50f324 = _0x42ab2b.getBox();
    var _0x47ac0b = _0x42ab2b.items.getAt(0);
    var _0x1afe6a;
    var _0x1f788a = function () {
      _0x1afe6a.destroy();
      _0x42ab2b.hide();
      _0x4a1ee0.play();
      try {
        typeof _0x4a1ee0.eventCount != "undefined" && (_0x4a1ee0.eventCount = _0x4a1ee0.eventCount - 1);
      } catch (_0x193720) {
        console.log(_0x193720);
      }
    };
    _0x47ac0b != null && _0x47ac0b.destroy();
    if (_0x406aa5) {
      _0x406aa5.description && (_0x406aa5.description = _0x42ab2b.htmlEncodeByRegExp(_0x406aa5.description));
      if (_0x406aa5.options && _0x406aa5.options.length > 0) {
        for (let _0x51ae3a = 0; _0x51ae3a < _0x406aa5.options.length; _0x51ae3a++) {
          _0x406aa5.options[_0x51ae3a].description && (_0x406aa5.options[_0x51ae3a].description = _0x42ab2b.htmlEncodeByRegExp(_0x406aa5.options[_0x51ae3a].description));
        }
      }
    }
    if (_0x1b68f0 == "IMG") {
      var _0x395972 = {
        src: _0x406aa5.url.replace(/origin/, _0x50f324.width + "_" + _0x50f324.height)
      };
      _0x1afe6a = _0x42ab2b.add({
        xtype: "videoimg",
        renderData: _0x395972
      });
      try {
        typeof _0x4a1ee0.eventCount != "undefined" && (_0x4a1ee0.eventCount += 1);
      } catch (_0x36d0c8) {
        console.log(_0x36d0c8);
      }
    }
    if (_0x1b68f0 == "QUIZ") {
      var _0x26068c = function () {};
      if (_0x406aa5.errorBackTime && _0x406aa5.errorBackTime > 0) {
        var _0x35ea35 = _0x406aa5.errorBackTime * 60;
        _0x26068c = function () {
          var _0x13494a = Math.max(_0x4a1ee0.currentTime() - _0x35ea35, 0);
          _0x4a1ee0.switchStatus = true;
          _0x4a1ee0.currentTime(_0x13494a);
        };
      }
      _0x406aa5.isPortal = _0x42ab2b.isPortal;
      _0x1afe6a = _0x42ab2b.add({
        xtype: "videoquiz",
        renderData: _0x406aa5,
        quizErrorReportUrl: _0x42ab2b.quizErrorReportUrl,
        validationUrl2: _0x42ab2b.validationUrl2,
        onerror: _0x26068c
      });
      try {
        typeof _0x4a1ee0.eventCount != "undefined" && (_0x4a1ee0.eventCount += 1);
      } catch (_0x5df60d) {
        console.log(_0x5df60d);
      }
    }
    if (_0x1b68f0 == "InteractiveQuiz") {
      var _0x26068c = function () {};
      if (_0x406aa5.errorBackTime && _0x406aa5.errorBackTime > 0) {
        var _0x35ea35 = _0x406aa5.errorBackTime * 60;
        _0x26068c = function () {
          var _0x358787 = Math.max(_0x4a1ee0.currentTime() - _0x35ea35, 0);
          _0x4a1ee0.switchStatus = true;
          _0x4a1ee0.currentTime(_0x358787);
        };
      }
      if (_0x406aa5.errorBack == 1 && _0x406aa5.eBstartPoint != "") {
        var _0x35ea35 = 0;
        var _0x598579 = _0x406aa5.eBstartPoint.split(":");
        var _0xcd8d39 = _0x598579.length;
        _0xcd8d39 > 0 && (_0xcd8d39 == 1 ? _0x35ea35 = parseInt(_0x598579[0]) * 60 : _0xcd8d39 == 2 && (_0x35ea35 = parseInt(_0x598579[0]) * 60 + parseInt(_0x598579[1])));
        _0x26068c = function () {
          _0x4a1ee0.switchStatus = true;
          _0x4a1ee0.currentTime(_0x35ea35);
        };
      }
      _0x406aa5.dtype = "InteractiveQuiz";
      _0x406aa5.isPortal = _0x42ab2b.isPortal;
      _0x1afe6a = _0x42ab2b.add({
        xtype: "videoquiz",
        renderData: _0x406aa5,
        quizErrorReportUrl: _0x42ab2b.quizErrorReportUrl,
        validationUrl2: _0x42ab2b.validationUrl2,
        quizRightCountUrl: _0x42ab2b.quizRightCountUrl,
        onerror: _0x26068c
      });
      try {
        typeof _0x4a1ee0.eventCount != "undefined" && (_0x4a1ee0.eventCount += 1);
      } catch (_0x6f5306) {
        console.log(_0x6f5306);
      }
    }
    if (_0x1b68f0 == "PPT") {
      if (_0x406aa5.fp == 0) {
        return;
      }
      var _0xc3ea81 = _0x406aa5.url;
      _0x406aa5.thumb ? _0xc3ea81 = _0x406aa5.thumb + _0x406aa5.pageNo + ".png" : _0xc3ea81 = _0xc3ea81.replace(/swfv2\/.*$/, "thumb/" + _0x406aa5.fp + ".png");
      var _0x395972 = {
        src: _0xc3ea81
      };
      _0x1afe6a = _0x42ab2b.add({
        xtype: "videoppt",
        renderData: _0x395972
      });
    }
    if (_0x1b68f0 == "SyncAnnotationEvent") {
      _0x1afe6a = _0x42ab2b.add({
        xtype: "videoannotation",
        renderData: _0x406aa5
      });
      try {
        typeof _0x4a1ee0.eventCount != "undefined" && (_0x4a1ee0.eventCount += 1);
      } catch (_0x554359) {
        console.log(_0x554359);
      }
      _0x4a1ee0.pause();
      _0x42ab2b.showAnnotation = true;
    }
    if (!_0x1afe6a) {
      return;
    }
    _0x1afe6a.on("continue", function () {
      _0x1f788a();
    });
    var _0x3b1446 = !(_0x1afe6a.model === false);
    _0x42ab2b.showModel(_0x3b1446, _0x1b68f0);
    _0x3b1446 && _0x4a1ee0.pause();
    _0x1b68f0 == "PPT" ? Ext.select(".ans-timelineobjects").setStyle("position", "unset") : Ext.select(".ans-timelineobjects").setStyle("position", "absolute");
  },
  htmlEncodeByRegExp: function (_0x526a81) {
    var _0x15ad36 = "";
    if (_0x526a81.length == 0) {
      return "";
    }
    _0x15ad36 = _0x526a81.replace(/&/g, "&amp;");
    _0x15ad36 = _0x15ad36.replace(/</g, "&lt;");
    _0x15ad36 = _0x15ad36.replace(/>/g, "&gt;");
    _0x15ad36 = _0x15ad36.replace(/\'/g, "&#39;");
    _0x15ad36 = _0x15ad36.replace(/\"/g, "&quot;");
    return _0x15ad36;
  },
  showModel: function (_0x5bea61, _0x5800a4) {
    try {
      top.configFullScreen && _0x5800a4 != "PPT" && mediumSizeWindow();
    } catch (_0x195163) {
      console.log(_0x195163);
    }
    var _0x3be643 = this;
    _0x3be643.show();
    if (_0x5800a4 == "SyncAnnotationEvent") {
      var _0x31b3b9 = $("#video_html5_api").height();
      Ext.select(".comment_box").setStyle("height", _0x31b3b9 + "px");
    }
    _0x5bea61 ? (_0x3be643.removeCls("ans-timelineobjects-autosize"), _0x3be643.setAutoScroll(true), _0x3be643.bg.show()) : (_0x3be643.addCls("ans-timelineobjects-autosize"), _0x3be643.setAutoScroll(false));
  },
  hide: function () {
    this.callParent(arguments);
    this.bg.hide.apply(this.bg, arguments);
  },
  updateTime: function (_0x5ea489, _0x19fd51) {
    if (this.current >= this.objects.length || _0x5ea489.scrubbing()) {
      return;
    }
    var _0x284078 = this;
    var _0x14a9e5 = _0x284078.objects[_0x284078.current];
    var _0x3d15cc = _0x14a9e5.style;
    var _0x4dea70 = _0x14a9e5.datas[0];
    _0x19fd51 >= _0x4dea70.startTime && (_0x284078.current++, setTimeout(function () {
      _0x284078.showObject(_0x5ea489, _0x3d15cc, _0x4dea70);
    }, 20));
  },
  resetTime: function (_0x5989b3, _0x296bb9) {
    var _0x2a16d4 = this;
    var _0x43cc8f;
    for (_0x43cc8f = 0; _0x43cc8f < _0x2a16d4.objects.length; _0x43cc8f++) {
      var _0x4bb803 = _0x2a16d4.objects[_0x43cc8f].datas[0].startTime;
      if (_0x296bb9 <= _0x4bb803) {
        break;
      }
    }
    _0x2a16d4.current = _0x43cc8f;
  },
  sort_: function (_0x1815bb) {
    return _0x1815bb && _0x1815bb.sort && _0x1815bb.sort(function (_0x2f9396, _0x3527a6) {
      var _0x271451 = _0x2f9396.datas[0].startTime;
      var _0x2a6ec5 = _0x3527a6.datas[0].startTime;
      return _0x271451 - _0x2a6ec5;
    });
  }
});
(function () {
  var _0x3ec822 = videojs.getPlugin("plugin");
  var _0x39b95f = videojs.extend(_0x3ec822, {
    constructor: function (_0x1b4186, _0x5292c8) {
      _0x3ec822.call(this, _0x1b4186, _0x5292c8);
      if (!_0x5292c8.url) {
        return;
      }
      var _0x2f2969 = function (_0x5868d7) {
        try {
          var _0x2b93c8 = _0x5868d7.datas;
          if (_0x2b93c8 && _0x2b93c8.length > 0) {
            return _0x2b93c8[0].startTime;
          }
        } catch (_0x65040a) {
          console.log(_0x65040a);
        }
        return -1;
      };
      var _0x53446a = this;
      _0x1b4186.eventPoints = [];
      _0x1b4186.otherPointTimes = [];
      var _0x5e5c13 = [];
      if (_0x5292c8.begins && _0x5292c8.begins > 0) {
        var _0x285dc6 = {
          time: _0x5292c8.begins,
          text: langMap.videoTitles
        };
        _0x5e5c13.push(_0x285dc6);
      }
      if (_0x5292c8.ends && _0x5292c8.ends > 0) {
        var _0x285dc6 = {
          time: _0x5292c8.ends,
          text: langMap.videoTrailer
        };
        _0x5e5c13.push(_0x285dc6);
      }
      _0x1b4186.eventPoints = _0x5e5c13;
      Ext.Ajax.request({
        url: _0x5292c8.url,
        async: false,
        success: function (_0xc0e6b1) {
          if (_0xc0e6b1.status != 200) {
            return;
          }
          eval("var data=" + _0xc0e6b1.responseText);
          if (data && data.length > 0) {
            var _0x542592 = [];
            for (var _0x286dce = 0; _0x286dce < data.length; _0x286dce++) {
              var _0x25d42b = data[_0x286dce];
              if (_0x25d42b.style == "InteractiveQuiz") {
                var _0x5e442d = _0x25d42b.datas;
                if (_0x5e442d && _0x5e442d.length > 0) {
                  var _0xa49d93 = {
                    time: _0x5e442d[0].startTime,
                    text: langMap.InteractiveQuizzes
                  };
                }
                _0x542592.push(_0xa49d93);
              }
              var _0x584691 = _0x2f2969(_0x25d42b);
              _0x584691 >= 0 && _0x1b4186.otherPointTimes.push(_0x584691);
            }
            _0x542592.forEach(function (_0x1a1c8b) {
              _0x1b4186.eventPoints.push(_0x1a1c8b);
            });
          }
          var _0x1de524 = Ext.create("ans.videojs.TimelineObjects", {
            renderTo: _0x1b4186.el_,
            quizErrorReportUrl: _0x5292c8.quizErrorReportUrl,
            validationUrl2: _0x5292c8.validationUrl2,
            quizRightCountUrl: _0x5292c8.quizRightCountUrl,
            isPortal: _0x5292c8.isPortal,
            objects: data
          });
          _0x1b4186.timeline = _0x1de524;
          _0x1b4186.on("play", function () {
            _0x1de524.resetTime(_0x1b4186, _0x1b4186.currentTime());
            _0x1de524.hideTimeline();
          });
          _0x1b4186.on("seekend", function () {
            _0x1de524.resetTime(_0x1b4186, _0x1b4186.currentTime());
            _0x1de524.hideTimeline();
          });
          _0x1b4186.on("timeupdate", function () {
            !_0x1b4186.paused() && (_0x1de524.updateTime(_0x1b4186, _0x1b4186.currentTime()), _0x1de524.hideTimeline());
          });
          _0x1b4186.on("keydown", function (_0x285a8e) {
            setTimeout(function () {
              _0x285a8e.keyCode == 37 ? (_0x1de524.resetTime(_0x1b4186, _0x1b4186.currentTime()), _0x1de524.hideTimeline()) : _0x285a8e.keyCode == 39 && (_0x1de524.resetTime(_0x1b4186, _0x1b4186.currentTime()), _0x1de524.hideTimeline());
            }, 50);
          });
        }
      });
    }
  });
  videojs.registerPlugin("timelineObjects", _0x39b95f);
})();
Ext.define("ans.videojs.customIframe", {
  extend: "Ext.Component",
  xtype: "customIframe",
  renderTpl: ["<iframe src=\"{src}\" class=\"configIframe\" style=\"height: 100%;width: 100%;left: 0;top: 0;right: 0;bottom: 0; background: rgba(0,0,0,.6);\"></iframe>"],
  afterRender: function () {
    var _0x1e35c8 = this;
    _0x1e35c8.callParent(arguments);
    window.addEventListener("message", function (_0x113166) {
      typeof _0x113166.data != "undefined" && _0x113166.data.opType === "closeIframe" && _0x1e35c8.fireEvent("continue");
    });
  }
});
Ext.define("ans.videojs.CustomIframe", {
  extend: "Ext.container.Container",
  cls: "ans-customIframe",
  autoScroll: true,
  hidden: true,
  hideMode: "visibility",
  constructor: function (_0x54add6) {
    var _0x420050 = this;
    _0x420050.callParent(arguments);
    _0x420050.supportHeartbeat = false;
    _0x420050.courseid = "";
    _0x420050.clazzId = "";
    _0x420050.knowledgeid = "";
    _0x420050.objectid = "";
    _0x420050.playTime = 0;
    _0x420050.requesting = false;
    _0x420050.eventArray = [];
    _0x420050.userId = "";
    _0x420050.cookieFid = "";
    _0x420050.headOffset = "";
    typeof _0x54add6.userId != "undefined" && (_0x420050.userId = _0x54add6.userId);
    typeof _0x54add6.cookieFid != "undefined" && (_0x420050.cookieFid = _0x54add6.cookieFid);
    typeof _0x54add6.headOffset != "undefined" && (_0x420050.headOffset = _0x54add6.headOffset);
    typeof _0x54add6.eventArray != "undefined" && (_0x420050.eventArray = _0x54add6.eventArray);
    typeof _0x54add6.supportHeartbeat != "undefined" && (_0x420050.supportHeartbeat = _0x54add6.supportHeartbeat);
    typeof _0x54add6.courseid != "undefined" && (_0x420050.courseid = _0x54add6.courseid);
    typeof _0x54add6.clazzId != "undefined" && (_0x420050.clazzId = _0x54add6.clazzId);
    typeof _0x54add6.knowledgeid != "undefined" && (_0x420050.knowledgeid = _0x54add6.knowledgeid);
    typeof _0x54add6.objectid != "undefined" && (_0x420050.objectid = _0x54add6.objectid);
    _0x420050.lastHeartbeat = 0;
    _0x420050.lastShowIFrame = 0;
    _0x420050.objects = _0x54add6.objects && _0x54add6.objects.sort ? _0x420050.sort_(_0x54add6.objects) : [];
    _0x420050.eventArray.forEach(function (_0x2ed7a0) {
      var _0x40d49d = parseInt(_0x2ed7a0.eventIntervalType);
      _0x40d49d === 0 ? (_0x2ed7a0.lastHeartbeat = 0, _0x2ed7a0.pauseTimeRange = 0, _0x2ed7a0.pauseTimeStamp = -1, _0x2ed7a0.requesting = false) : _0x40d49d === 1 && (_0x2ed7a0.timeArray = sortArray(_0x2ed7a0.timeArray), _0x2ed7a0.index = 0);
    });
  },
  showIFrame: function (_0x4e9823, _0xf1d68e, _0x2ecf19) {
    try {
      var _0x272d5d = this;
      parseInt(_0xf1d68e) === 1 ? _0x272d5d.showObject(_0x4e9823, "customIframe", _0x2ecf19) : parseInt(_0xf1d68e) === 2 && showPopIframe(_0x2ecf19, _0x4e9823);
    } catch (_0x25cadb) {
      console.log(_0x25cadb);
    }
  },
  deleteTemporaryEvent: function () {
    try {
      this.eventArray.forEach(function (_0x473519, _0xb07732, _0x2b081f) {
        typeof _0x473519.temporaryEvent != "undefined" && _0x473519.temporaryEvent && _0x2b081f.splice(_0xb07732, 1);
      });
    } catch (_0x6eb555) {
      console.log(_0x6eb555);
    }
  },
  initHeartbeat: function (_0x4a8f46, _0x4fa2fd, _0x15625f) {
    var _0x120e80 = this;
    if (typeof _0x4a8f46 == "undefined" || _0x4a8f46 == "") {
      return;
    }
    Ext.Ajax.request({
      url: _0x4a8f46,
      params: {
        uid: _0x120e80.userId,
        schoolId: _0x120e80.cookieFid,
        moocClassId: _0x120e80.clazzId,
        moocCourseId: _0x120e80.courseid,
        chapterId: _0x120e80.knowledgeid,
        objectId: _0x120e80.objectid,
        videoProgress: _0x120e80.headOffset,
        totalVideoDuration: window.duration,
        enc: _0x120e80.videoEnc
      },
      method: "get",
      success: function (_0x4fc1e0) {
        try {
          var _0xe0c8df = eval("(" + _0x4fc1e0.responseText + ")");
          if (typeof _0xe0c8df.result !== "undefined" && parseInt(_0xe0c8df.result) === 1) {
            if (_0xe0c8df.showPop && typeof _0xe0c8df.event != "undefined") {
              var _0x1d657b = _0xe0c8df.event.url + "?uid=" + _0x120e80.userId + "&schoolId=" + _0x120e80.cookieFid + "&moocClassId=" + _0x120e80.clazzId + "&moocCourseId=" + _0x120e80.courseid + "&chapterId=" + _0x120e80.knowledgeid + "&objectId=" + _0x120e80.objectid + "&videoProgress=" + _0x120e80.headOffset + "&totalVideoDuration=" + window.duration + "&enc=" + _0x120e80.videoEnc;
              var _0x13a474 = {
                url: _0x1d657b,
                temporaryEvent: true,
                eventInterval: 0,
                eventType: _0xe0c8df.event.eventType,
                eventIntervalType: 0,
                requesting: false,
                lastHeartbeat: 0
              };
              _0x120e80.eventArray.push(_0x13a474);
            }
          } else {
            typeof _0xe0c8df.errorCode != "undefined" && alert("同步学习数据失败，错误码：" + _0xe0c8df.errorCode);
          }
          typeof _0x15625f != "undefined" && (_0x15625f.requesting = false, console.log("requesting: false"));
        } catch (_0x3a3035) {
          console.log(_0x3a3035);
        }
      },
      failure: function () {
        typeof _0x15625f != "undefined" && (_0x15625f.requesting = false);
        console.log("heartbeatUrl request error");
      }
    });
  },
  seekVideoTime: function (_0xeaed84, _0xa75412) {
    try {
      var _0x559d98 = this;
      typeof _0x559d98.cmp != "undefined" && _0x559d98.cmp != null && (_0x559d98.cmp.destroy(), _0x559d98.hide(), _0xeaed84.eventCount = _0xeaed84.eventCount - 1, _0xeaed84.eventCount <= 0 && (_0xeaed84.currentTime(_0xa75412), _0xeaed84.play()));
    } catch (_0x1accae) {
      console.log(_0x1accae);
    }
  },
  showObject: function (_0x1fc1cb, _0x16381f, _0x334fc2) {
    var _0x4f56c4 = this;
    var _0x4f2d04 = _0x4f56c4.items.getAt(0);
    var _0x4e2f7c;
    var _0x47ac83 = function (_0x2f9680) {
      _0x4e2f7c.destroy();
      _0x4f56c4.hide();
      _0x2f9680.eventCount = _0x2f9680.eventCount - 1;
      _0x2f9680.eventCount <= 0 && _0x2f9680.play();
    };
    _0x4f2d04 != null && _0x4f2d04.destroy();
    _0x4f56c4.cmp = null;
    _0x16381f == "customIframe" && (_0x4e2f7c = _0x4f56c4.add({
      xtype: "customIframe",
      renderData: {
        src: _0x334fc2
      }
    }), _0x1fc1cb.eventCount += 1);
    if (!_0x4e2f7c) {
      return;
    }
    _0x4e2f7c.on("continue", function () {
      _0x47ac83(_0x1fc1cb);
    });
    var _0x260613 = !(_0x4e2f7c.model === false);
    _0x4f56c4.showModel(_0x260613);
    _0x4f56c4.cmp = _0x4e2f7c;
    _0x260613 && _0x1fc1cb.pause();
  },
  showModel: function (_0x2e73bb) {
    var _0x563bff = this;
    _0x563bff.show();
    _0x2e73bb ? (_0x563bff.removeCls("ans-timelineobjects-autosize"), _0x563bff.setAutoScroll(true)) : (_0x563bff.addCls("ans-timelineobjects-autosize"), _0x563bff.setAutoScroll(false));
  },
  hide: function () {
    this.callParent(arguments);
  },
  updateTime: function (_0x2bdcf8, _0x151939) {
    try {
      if (this.supportHeartbeat && isStuViewPage() && !_0x2bdcf8.paused()) {
        var _0x422b0f = new Date().getTime();
        var _0x4e5e9a = this;
        var _0x808203 = 0;
        for (var _0x43245a = 0; _0x43245a < _0x4e5e9a.eventArray.length; _0x43245a++) {
          var _0x18d8a0 = _0x4e5e9a.eventArray[_0x43245a];
          var _0x3f91c5 = parseInt(_0x18d8a0.eventType);
          var _0x5ce9dd = parseInt(_0x18d8a0.eventIntervalType);
          if (_0x5ce9dd === 0) {
            if (_0x3f91c5 === 0 && _0x18d8a0.requesting || _0x2bdcf8.scrubbing()) {
              continue;
            }
            var _0x1283f1 = _0x422b0f - _0x18d8a0.lastHeartbeat;
            _0x18d8a0.pauseTimeRange > 0 && (_0x1283f1 = _0x1283f1 - _0x18d8a0.pauseTimeRange);
            var _0x3a1c2e = _0x1283f1 / 1000;
            _0x3a1c2e = parseInt(_0x3a1c2e);
            if (_0x3a1c2e >= _0x18d8a0.eventInterval) {
              if (_0x3f91c5 === 1 || _0x3f91c5 === 2) {
                _0x808203++;
                if (_0x808203 > 1) {
                  break;
                }
              }
              _0x18d8a0.pauseTimeRange = 0;
              _0x18d8a0.lastHeartbeat = _0x422b0f;
              _0x3f91c5 === 0 ? (_0x18d8a0.requesting = true, _0x4e5e9a.initHeartbeat(_0x18d8a0.url, _0x2bdcf8, _0x18d8a0)) : (_0x3f91c5 === 1 || _0x3f91c5 === 2) && (_0x4e5e9a.showIFrame(_0x2bdcf8, _0x3f91c5, _0x18d8a0.url), typeof _0x18d8a0.temporaryEvent != "undefined" && _0x18d8a0.temporaryEvent && _0x4e5e9a.deleteTemporaryEvent());
            }
          } else {
            if (_0x5ce9dd === 1) {
              if (_0x18d8a0.index >= _0x18d8a0.timeArray.length || _0x2bdcf8.scrubbing()) {
                continue;
              }
              var _0xb71175 = _0x18d8a0.timeArray[_0x18d8a0.index];
              if (typeof _0xb71175 == "undefined") {
                continue;
              }
              if (_0x151939 >= parseInt(_0xb71175)) {
                if (_0x3f91c5 === 1 || _0x3f91c5 === 2) {
                  _0x808203++;
                  if (_0x808203 > 1) {
                    break;
                  }
                }
                _0x18d8a0.index++;
                var _0x526206 = _0x18d8a0.url;
                _0x3f91c5 === 0 ? _0x4e5e9a.initHeartbeat(_0x526206, _0x2bdcf8) : (_0x3f91c5 === 1 || _0x3f91c5 === 2) && _0x4e5e9a.showIFrame(_0x2bdcf8, _0x3f91c5, _0x526206);
              }
            }
          }
        }
      }
    } catch (_0x17ff03) {
      console.log(_0x17ff03);
    }
  },
  resetTime: function (_0x4eed6b, _0x26590e) {
    try {
      var _0x19bd12 = this;
      var _0x253559;
      for (_0x253559 = 0; _0x253559 < _0x19bd12.eventArray.length; _0x253559++) {
        var _0x5dcbf2 = _0x19bd12.eventArray[_0x253559];
        if (parseInt(_0x5dcbf2.eventIntervalType) === 1) {
          for (var _0x5ba034 = 0; _0x5ba034 < _0x5dcbf2.timeArray.length; _0x5ba034++) {
            var _0x15831e = _0x5dcbf2.timeArray[_0x5ba034];
            if (_0x26590e <= _0x15831e) {
              break;
            }
          }
          _0x5dcbf2.index = _0x5ba034;
        }
      }
    } catch (_0x3a11c4) {
      console.log(_0x3a11c4);
    }
  }
});
function sortArray(_0x5ec4ab) {
  try {
    return _0x5ec4ab && _0x5ec4ab.sort && _0x5ec4ab.sort(function (_0x52af92, _0x3780c8) {
      return _0x52af92 - _0x3780c8;
    });
  } catch (_0x35b370) {
    console.log(_0x35b370);
  }
  return _0x5ec4ab;
}
(function () {
  var _0xd5da34 = videojs.getPlugin("plugin");
  var _0x404812 = videojs.extend(_0xd5da34, {
    constructor: function (_0x419953, _0xea5f61) {
      if (typeof _0xea5f61.supportHeartbeat == "undefined" || !_0xea5f61.supportHeartbeat) {
        return;
      }
      _0xd5da34.call(this, _0x419953, _0xea5f61);
      _0x419953.pauseTimeStamp = 0;
      _0x419953.pauseTimeRange = 0;
      var _0x250783 = null;
      try {
        _0x250783 = Ext.create("ans.videojs.CustomIframe", {
          renderTo: _0x419953.el_,
          supportHeartbeat: _0xea5f61.supportHeartbeat,
          eventArray: _0xea5f61.eventArray,
          courseid: _0xea5f61.courseid,
          clazzId: _0xea5f61.clazzId,
          knowledgeid: _0xea5f61.knowledgeid,
          objectid: _0xea5f61.objectid,
          videoEnc: _0xea5f61.videoEnc,
          userId: _0xea5f61.userId,
          cookieFid: _0xea5f61.cookieFid,
          headOffset: _0xea5f61.headOffset
        });
      } catch (_0x19d1d6) {
        console.log(_0x19d1d6);
      }
      if (_0x250783 == null) {
        return;
      }
      _0x419953.on("play", function () {
        try {
          var _0x38a304 = new Date().getTime();
          _0x250783.eventArray.forEach(function (_0x5eb057) {
            var _0x2cfa89 = parseInt(_0x5eb057.eventIntervalType);
            if (_0x2cfa89 === 0) {
              if (_0x5eb057.pauseTimeStamp > 0) {
                _0x5eb057.pauseTimeStamp < _0x5eb057.lastHeartbeat && (_0x5eb057.pauseTimeStamp = _0x5eb057.lastHeartbeat);
                var _0x310fbe = _0x38a304 - _0x5eb057.pauseTimeStamp;
                _0x5eb057.pauseTimeRange += _0x310fbe;
              }
              _0x5eb057.pauseTimeStamp = 0;
            }
          });
          _0x250783.resetTime(_0x419953, _0x419953.currentTime());
        } catch (_0x46a0ee) {
          console.log(_0x46a0ee);
        }
      });
      _0x419953.on("seekend", function () {
        _0x250783.resetTime(_0x419953, _0x419953.currentTime());
      });
      _0x419953.on("pause", function () {
        try {
          var _0x68020e = new Date().getTime();
          _0x250783.eventArray.forEach(function (_0x1c7598) {
            var _0x3ab17b = parseInt(_0x1c7598.eventIntervalType);
            _0x3ab17b === 0 && (_0x1c7598.pauseTimeStamp = _0x68020e);
          });
        } catch (_0x1a1b97) {
          console.log(_0x1a1b97);
        }
      });
      _0x419953.on("timeupdate", function () {
        try {
          !_0x419953.paused() && _0x250783.updateTime(_0x419953, parseInt(_0x419953.currentTime()));
          _0x250783.playTime = _0x419953.currentTime();
        } catch (_0x2a6971) {
          console.log(_0x2a6971);
        }
      });
      window.addEventListener("message", function (_0x36d6b2) {
        try {
          if (!_0xea5f61.supportHeartbeat || !isStuViewPage()) {
            return;
          }
          var _0x37166d = _0x36d6b2.data;
          if (typeof _0x37166d == "undefined") {
            _0x250783.resetDiv(_0x419953);
            return;
          }
          var _0x81a920 = parseInt(_0xea5f61.duration);
          if (_0x37166d.opType === "fastForward") {
            var _0x1a619a = _0x37166d.value;
            if (typeof _0x1a619a === "undefined") {
              _0x250783.resetDiv(_0x419953);
              return;
            }
            _0x1a619a = parseInt(_0x1a619a);
            if (!(_0x1a619a > 0)) {
              _0x250783.resetDiv(_0x419953);
              return;
            }
            _0x419953.ignoreSeek = false;
            _0x419953.switchStatus = true;
            var _0x26d695 = _0x419953.currentTime();
            _0x26d695 = parseInt(_0x26d695);
            var _0x4d5f43 = _0x26d695 + _0x1a619a;
            if (_0x4d5f43 > _0x81a920) {
              _0x250783.resetDiv(_0x419953);
              return;
            }
            _0x250783.seekVideoTime(_0x419953, _0x4d5f43);
            return;
          }
          if (_0x37166d.opType === "videoStartTime") {
            var _0x1a619a = _0x37166d.value;
            if (typeof _0x1a619a === "undefined") {
              _0x250783.resetDiv(_0x419953);
              return;
            }
            _0x1a619a = parseInt(_0x1a619a);
            if (!(_0x1a619a >= 0) || _0x1a619a > _0x81a920) {
              _0x250783.resetDiv(_0x419953);
              return;
            }
            _0x419953.ignoreSeek = false;
            _0x419953.switchStatus = true;
            _0x250783.seekVideoTime(_0x419953, _0x1a619a);
          }
        } catch (_0x1d46df) {
          console.log(_0x1d46df);
        }
      });
    }
  });
  videojs.registerPlugin("customIframePlugin", _0x404812);
})();
Ext.define("ans.videojs.customIframeV2", {
  extend: "Ext.Component",
  xtype: "customIframeV2",
  renderTpl: ["<iframe src=\"{src}\" class=\"configIframe\" style=\"height: 100%;width: 100%;left: 0;top: 0;right: 0;bottom: 0; background: rgba(0,0,0,.6);\"></iframe>"],
  afterRender: function () {
    var _0x49c907 = this;
    _0x49c907.callParent(arguments);
    window.addEventListener("message", function (_0x333a04) {
      try {
        typeof _0x333a04.data != "undefined" && typeof _0x333a04.data.eventType != "undefined" && _0x333a04.data.eventType === "closeInnerPagePop" && _0x49c907.fireEvent("continue");
      } catch (_0x2d255d) {
        console.log(_0x2d255d);
      }
    });
  }
});
Ext.define("ans.videojs.CustomIframeV2", {
  extend: "Ext.container.Container",
  cls: "ans-customIframeV2",
  autoScroll: true,
  hidden: true,
  hideMode: "visibility",
  constructor: function (_0x4dda82) {
    var _0x2c025b = this;
    _0x2c025b.callParent(arguments);
    _0x2c025b.firstClick = true;
    _0x2c025b.supportVideoPluginV1 = false;
    _0x2c025b.isStuH5Page = false;
    _0x2c025b.courseid = "";
    _0x2c025b.clazzId = "";
    _0x2c025b.knowledgeid = "";
    _0x2c025b.objectid = "";
    _0x2c025b.playTime = 0;
    _0x2c025b.eventArray = [];
    _0x2c025b.userId = "";
    _0x2c025b.cookieFid = "";
    _0x2c025b.headOffset = "";
    _0x2c025b.realHeadOffset = 0;
    typeof _0x4dda82.userId != "undefined" && (_0x2c025b.userId = _0x4dda82.userId);
    typeof _0x4dda82.cookieFid != "undefined" && (_0x2c025b.cookieFid = _0x4dda82.cookieFid);
    typeof _0x4dda82.headOffset != "undefined" && (_0x2c025b.headOffset = _0x4dda82.headOffset);
    typeof _0x4dda82.realHeadOffset != "undefined" && (_0x2c025b.realHeadOffset = _0x4dda82.realHeadOffset);
    typeof _0x4dda82.eventArray != "undefined" && (_0x2c025b.eventArray = _0x4dda82.eventArray);
    typeof _0x4dda82.supportVideoPluginV1 != "undefined" && (_0x2c025b.supportVideoPluginV1 = _0x4dda82.supportVideoPluginV1);
    typeof _0x4dda82.isStuH5Page != "undefined" && (_0x2c025b.isStuH5Page = _0x4dda82.isStuH5Page);
    typeof _0x4dda82.courseid != "undefined" && (_0x2c025b.courseid = _0x4dda82.courseid);
    typeof _0x4dda82.clazzId != "undefined" && (_0x2c025b.clazzId = _0x4dda82.clazzId);
    typeof _0x4dda82.knowledgeid != "undefined" && (_0x2c025b.knowledgeid = _0x4dda82.knowledgeid);
    typeof _0x4dda82.objectid != "undefined" && (_0x2c025b.objectid = _0x4dda82.objectid);
    _0x2c025b.lastHeartbeat = 0;
    _0x2c025b.lastShowIFrame = 0;
    _0x2c025b.objects = _0x4dda82.objects && _0x4dda82.objects.sort ? _0x2c025b.sort_(_0x4dda82.objects) : [];
    _0x2c025b.eventArray.forEach(function (_0x2ec8b7) {
      var _0x1c94f4 = parseInt(_0x2ec8b7.eventIntervalType);
      _0x1c94f4 === 0 ? (_0x2ec8b7.lastHeartbeat = 0, _0x2ec8b7.pauseTimeRange = 0, _0x2ec8b7.pauseTimeStamp = -1) : _0x1c94f4 === 1 && (_0x2ec8b7.timeArray = sortArray(_0x2ec8b7.timeArray), _0x2ec8b7.index = 0);
    });
  },
  showIFrame: function (_0x3f16a3, _0x5e870f, _0x53b36a) {
    try {
      var _0x39090b = this;
      parseInt(_0x5e870f) === 1 ? _0x39090b.showObject(_0x3f16a3, "customIframeV2", _0x53b36a) : parseInt(_0x5e870f) === 2 && showPopIframe(_0x53b36a, _0x3f16a3);
    } catch (_0x3c04d6) {
      console.log(_0x3c04d6);
    }
  },
  deleteTemporaryEvent: function () {
    try {
      this.eventArray.forEach(function (_0x52ccdf, _0x2baf57, _0x26b151) {
        typeof _0x52ccdf.temporaryEvent != "undefined" && _0x52ccdf.temporaryEvent && _0x26b151.splice(_0x2baf57, 1);
      });
    } catch (_0x592afb) {
      console.log(_0x592afb);
    }
  },
  pushVideoInfo2Window: function (_0x2c7882, _0x5bbc21) {
    var _0x277ae6 = this;
    var _0x3f57f9 = {
      eventType: _0x2c7882,
      videoMessage: {
        fid: _0x277ae6.cookieFid,
        uid: _0x277ae6.userId,
        moocClassId: _0x277ae6.clazzId,
        moocCourseId: _0x277ae6.courseid,
        chapterId: _0x277ae6.knowledgeid,
        objectId: _0x277ae6.objectid,
        videoProgress: _0x5bbc21,
        totalVideoDuration: window.duration,
        headOffset: _0x277ae6.realHeadOffset,
        enc: _0x277ae6.videoEnc
      }
    };
    pushVideoInfo(_0x3f57f9);
  },
  seekVideoTime: function (_0x3a5e04, _0x133532) {
    try {
      var _0x5c719a = this;
      typeof _0x5c719a.cmp != "undefined" && _0x5c719a.cmp != null && (_0x5c719a.cmp.destroy(), _0x5c719a.hide(), _0x3a5e04.eventCount = _0x3a5e04.eventCount - 1, _0x3a5e04.eventCount <= 0 && (_0x3a5e04.currentTime(_0x133532), _0x3a5e04.play()));
    } catch (_0x35d06a) {
      console.log(_0x35d06a);
    }
  },
  showObject: function (_0x357b00, _0x9dee4a, _0x519a63) {
    var _0x3ac374 = this;
    var _0x138ea2 = _0x3ac374.items.getAt(0);
    var _0x122339;
    var _0x41da27 = function (_0x396ba6) {
      _0x122339.destroy();
      _0x3ac374.hide();
      _0x396ba6.eventCount = _0x396ba6.eventCount - 1;
      _0x396ba6.eventCount <= 0 && _0x396ba6.play();
    };
    _0x138ea2 != null && _0x138ea2.destroy();
    _0x3ac374.cmp = null;
    _0x9dee4a == "customIframeV2" && (_0x122339 = _0x3ac374.add({
      xtype: "customIframeV2",
      renderData: {
        src: _0x519a63
      }
    }), _0x357b00.eventCount += 1);
    if (!_0x122339) {
      return;
    }
    _0x122339.on("continue", function () {
      _0x41da27(_0x357b00);
    });
    var _0x4dfc73 = !(_0x122339.model === false);
    _0x3ac374.showModel(_0x4dfc73);
    _0x3ac374.cmp = _0x122339;
    _0x4dfc73 && _0x357b00.pause();
  },
  showModel: function (_0x482407) {
    var _0x190ff8 = this;
    _0x190ff8.show();
    _0x482407 ? (_0x190ff8.removeCls("ans-timelineobjects-autosize"), _0x190ff8.setAutoScroll(true)) : (_0x190ff8.addCls("ans-timelineobjects-autosize"), _0x190ff8.setAutoScroll(false));
  },
  hide: function () {
    this.callParent(arguments);
  },
  updateTime: function (_0x35f380, _0x5580d8) {
    try {
      if (this.supportVideoPluginV1 && (isStuViewPage() || this.isStuH5Page) && !_0x35f380.paused()) {
        var _0x8575ec = new Date().getTime();
        var _0x23f438 = this;
        var _0x2a5ac1 = 0;
        for (var _0x2a25ce = 0; _0x2a25ce < _0x23f438.eventArray.length; _0x2a25ce++) {
          var _0x46315f = _0x23f438.eventArray[_0x2a25ce];
          var _0x4cbc17 = parseInt(_0x46315f.eventType);
          var _0x104eed = parseInt(_0x46315f.eventIntervalType);
          if (_0x104eed === 0) {
            if (_0x35f380.scrubbing()) {
              continue;
            }
            var _0x722d70 = _0x46315f.lastHeartbeat == 0;
            var _0x4175cc = _0x8575ec - _0x46315f.lastHeartbeat;
            _0x46315f.pauseTimeRange > 0 && (_0x4175cc = _0x4175cc - _0x46315f.pauseTimeRange);
            var _0x19ec27 = _0x4175cc / 1000;
            _0x19ec27 = parseInt(_0x19ec27);
            if (_0x19ec27 >= _0x46315f.eventInterval) {
              if (_0x4cbc17 === 1 || _0x4cbc17 === 2) {
                _0x2a5ac1++;
                if (_0x2a5ac1 > 1) {
                  break;
                }
              }
              _0x46315f.pauseTimeRange = 0;
              _0x46315f.lastHeartbeat = _0x8575ec;
              _0x4cbc17 === 0 ? !_0x722d70 && _0x23f438.pushVideoInfo2Window("playing", _0x35f380.currentTime()) : (_0x4cbc17 === 1 || _0x4cbc17 === 2) && (_0x23f438.showIFrame(_0x35f380, _0x4cbc17, _0x46315f.url), typeof _0x46315f.temporaryEvent != "undefined" && _0x46315f.temporaryEvent && _0x23f438.deleteTemporaryEvent());
            }
          } else {
            if (_0x104eed === 1) {
              if (_0x46315f.index >= _0x46315f.timeArray.length || _0x35f380.scrubbing()) {
                continue;
              }
              var _0x5dc111 = _0x46315f.timeArray[_0x46315f.index];
              if (typeof _0x5dc111 == "undefined") {
                continue;
              }
              if (_0x5580d8 >= parseInt(_0x5dc111)) {
                if (_0x4cbc17 === 1 || _0x4cbc17 === 2) {
                  _0x2a5ac1++;
                  if (_0x2a5ac1 > 1) {
                    break;
                  }
                }
                _0x46315f.index++;
                var _0x5ebbfa = _0x46315f.url;
                _0x4cbc17 === 0 ? _0x23f438.pushVideoInfo2Window("playing", _0x35f380.currentTime()) : (_0x4cbc17 === 1 || _0x4cbc17 === 2) && _0x23f438.showIFrame(_0x35f380, _0x4cbc17, _0x5ebbfa);
              }
            }
          }
        }
      }
    } catch (_0x42d082) {
      console.log(_0x42d082);
    }
  },
  resetTime: function (_0x4e49c3, _0x4dc1c6) {
    try {
      var _0x1a6fdf = this;
      var _0x10a76f;
      for (_0x10a76f = 0; _0x10a76f < _0x1a6fdf.eventArray.length; _0x10a76f++) {
        var _0x4e123b = _0x1a6fdf.eventArray[_0x10a76f];
        if (parseInt(_0x4e123b.eventIntervalType) === 1) {
          for (var _0x2c059c = 0; _0x2c059c < _0x4e123b.timeArray.length; _0x2c059c++) {
            var _0x3ee812 = _0x4e123b.timeArray[_0x2c059c];
            if (_0x4dc1c6 <= _0x3ee812) {
              break;
            }
          }
          _0x4e123b.index = _0x2c059c;
        }
      }
    } catch (_0x101303) {
      console.log(_0x101303);
    }
  }
});
function sortArray(_0x2b383b) {
  try {
    return _0x2b383b && _0x2b383b.sort && _0x2b383b.sort(function (_0x4e72fa, _0x2b84a3) {
      return _0x4e72fa - _0x2b84a3;
    });
  } catch (_0x55da11) {
    console.log(_0x55da11);
  }
  return _0x2b383b;
}
(function () {
  var _0x119c6a = videojs.getPlugin("plugin");
  var _0x3903ac = videojs.extend(_0x119c6a, {
    constructor: function (_0x38de8b, _0x3e83fb) {
      if (typeof _0x3e83fb.supportVideoPluginV1 == "undefined" || !_0x3e83fb.supportVideoPluginV1) {
        return;
      }
      _0x119c6a.call(this, _0x38de8b, _0x3e83fb);
      _0x38de8b.pauseTimeStamp = 0;
      _0x38de8b.pauseTimeRange = 0;
      var _0x5830b3 = null;
      try {
        _0x5830b3 = Ext.create("ans.videojs.CustomIframeV2", {
          renderTo: _0x38de8b.el_,
          supportVideoPluginV1: _0x3e83fb.supportVideoPluginV1,
          eventArray: _0x3e83fb.eventArray,
          courseid: _0x3e83fb.courseid,
          clazzId: _0x3e83fb.clazzId,
          knowledgeid: _0x3e83fb.knowledgeid,
          objectid: _0x3e83fb.objectid,
          videoEnc: _0x3e83fb.videoEnc,
          userId: _0x3e83fb.userId,
          cookieFid: _0x3e83fb.cookieFid,
          headOffset: _0x3e83fb.headOffset,
          realHeadOffset: _0x3e83fb.realHeadOffset
        });
      } catch (_0xab2219) {
        console.log(_0xab2219);
      }
      if (_0x5830b3 == null) {
        return;
      }
      _0x38de8b.on("play", function () {
        if (typeof parent.parent.frameInitSuccess != "undefined" && parent.parent.frameInitSuccess == false) {
          alert("配置文件加载中,请稍后重新播放");
          _0x38de8b.pause();
          return;
        }
        !_0x5830b3.firstClick ? _0x5830b3.pushVideoInfo2Window("continuePlay", _0x38de8b.currentTime()) : _0x5830b3.pushVideoInfo2Window("play", _0x38de8b.currentTime());
        _0x5830b3.firstClick = false;
        try {
          var _0x3da5f4 = new Date().getTime();
          _0x5830b3.eventArray.forEach(function (_0x5eb8bf) {
            var _0xd36c65 = parseInt(_0x5eb8bf.eventIntervalType);
            if (_0xd36c65 === 0) {
              if (_0x5eb8bf.pauseTimeStamp > 0) {
                _0x5eb8bf.pauseTimeStamp < _0x5eb8bf.lastHeartbeat && (_0x5eb8bf.pauseTimeStamp = _0x5eb8bf.lastHeartbeat);
                var _0x30d278 = _0x3da5f4 - _0x5eb8bf.pauseTimeStamp;
                _0x5eb8bf.pauseTimeRange += _0x30d278;
              }
              _0x5eb8bf.pauseTimeStamp = 0;
            }
          });
          _0x5830b3.resetTime(_0x38de8b, _0x38de8b.currentTime());
        } catch (_0x5bafa8) {
          console.log(_0x5bafa8);
        }
      });
      _0x38de8b.on("seekend", function () {
        _0x5830b3.resetTime(_0x38de8b, _0x38de8b.currentTime());
      });
      _0x38de8b.on("pause", function () {
        try {
          if (typeof parent.parent.frameInitSuccess != "undefined" && parent.parent.frameInitSuccess == false) {
            return;
          }
          _0x38de8b.currentTime() < window.duration && _0x5830b3.pushVideoInfo2Window("pause", _0x38de8b.currentTime());
          var _0x3508d2 = new Date().getTime();
          _0x5830b3.eventArray.forEach(function (_0x230417) {
            var _0x326e5e = parseInt(_0x230417.eventIntervalType);
            _0x326e5e === 0 && (_0x230417.pauseTimeStamp = _0x3508d2);
          });
        } catch (_0x340e71) {
          console.log(_0x340e71);
        }
      });
      _0x38de8b.on("timeupdate", function () {
        try {
          !_0x38de8b.paused() && _0x5830b3.updateTime(_0x38de8b, parseInt(_0x38de8b.currentTime()));
          _0x5830b3.playTime = _0x38de8b.currentTime();
        } catch (_0x19dd8e) {
          console.log(_0x19dd8e);
        }
      });
      _0x38de8b.on("ended", function () {
        _0x5830b3.pushVideoInfo2Window("end", _0x38de8b.currentTime());
      });
      window.addEventListener("message", function (_0x13d265) {
        try {
          if (!_0x3e83fb.supportVideoPluginV1 || !isStuViewPage()) {
            return;
          }
          var _0xa209da = _0x13d265.data;
          if (typeof _0xa209da == "undefined") {
            return;
          }
          if (typeof _0xa209da.eventType == "undefined") {
            return;
          }
          var _0x33282d = _0xa209da.eventType;
          var _0x30dad4 = _0xa209da.pageUrl;
          if (_0x33282d == "outPagePop") {
            if (_0x38de8b.paused()) {
              return;
            }
            if (typeof _0x30dad4 == "undefined") {
              return;
            }
            showPopIframe(_0x30dad4, _0x38de8b);
            return;
          }
          if (_0x33282d == "innerPagePop") {
            if (_0x38de8b.paused()) {
              return;
            }
            if (typeof _0x30dad4 == "undefined") {
              return;
            }
            _0x5830b3.showObject(_0x38de8b, "customIframeV2", _0x30dad4);
          }
        } catch (_0x2b0aac) {
          console.log(_0x2b0aac);
        }
      });
    }
  });
  videojs.registerPlugin("customIframePluginV2", _0x3903ac);
})();
function resultFormat(_0x261290) {
  if (_0x261290 < 0) {
    return "NaN";
  }
  var _0x584363 = parseInt(_0x261290 / 3600);
  _0x584363 == 0 ? _0x584363 = "" : _0x584363 = _0x584363 < 10 ? "0" + _0x584363 : _0x584363;
  var _0x1480a7 = parseInt((_0x261290 - _0x584363 * 3600) / 60);
  _0x1480a7 < 10 && (_0x1480a7 = "0" + _0x1480a7);
  var _0x5ed692 = parseInt((_0x261290 - _0x584363 * 3600) % 60);
  _0x5ed692 < 10 && (_0x5ed692 = "0" + _0x5ed692);
  return _0x584363 > 0 ? _0x584363 + ":" + _0x1480a7 + ":" + _0x5ed692 : _0x1480a7 + ":" + _0x5ed692;
}
(function () {
  var _0x754d6d = videojs.getPlugin("plugin");
  var _0x522867 = videojs.extend(_0x754d6d, {
    constructor: function (_0x3bcfa7, _0x57c03d) {
      _0x754d6d.call(this, _0x3bcfa7, _0x57c03d);
      if (!_0x57c03d.url) {
        return;
      }
      var _0x1107f8 = this;
      Ext.Ajax.request({
        url: _0x57c03d.url,
        async: false,
        success: function (_0x2cb3d2) {
          if (_0x2cb3d2.status != 200) {
            return;
          }
          eval("var data=" + _0x2cb3d2.responseText);
          if (!data.status) {
            return;
          }
          var _0x5685d4 = videojs("video");
          if (_0x5685d4 && typeof _0x5685d4.markers === "function") {
            var _0x2c7e2b = _0x3bcfa7.eventPoints;
            _0x2c7e2b.push.apply(_0x2c7e2b, data.list);
            _0x5685d4.markers({
              markerTip: {
                display: true,
                text: function (_0x39cbe0) {
                  return (typeof _0x39cbe0.type != undefined && _0x39cbe0.type == "KnowledgePoint" ? langMap.knowledgePoint + ": " : "") + _0x39cbe0.text;
                }
              },
              vjsProgressWidth: parseInt(Ext.get("video_html5_api").getStyle("width")) - 40,
              markers: _0x2c7e2b,
              onMarkerClick: function (_0x11accc) {
                if (_0x57c03d.ff != 1) {
                  return false;
                }
                var _0x7f3073 = $(this).data("marker-key");
                _0x3bcfa7.currentTime(_0x11accc.time);
                return false;
              }
            });
          }
          if (data.list && data.list.length > 0) {
            var _0x5730a1 = [];
            var _0x23f370 = {};
            for (var _0x16faf6 = 0; _0x16faf6 < data.list.length; _0x16faf6++) {
              var _0x4f51fa = data.list[_0x16faf6];
              var _0x44da55 = _0x4f51fa.text;
              if (!_0x23f370[_0x44da55]) {
                var _0x4ed2d1 = [];
                _0x4ed2d1.push(_0x4f51fa);
                _0x23f370[_0x44da55] = _0x4ed2d1;
                _0x5730a1.push(_0x44da55);
              } else {
                var _0x4f67b6 = _0x23f370[_0x44da55];
                _0x4f67b6.push(_0x4f51fa);
                _0x23f370[_0x44da55] = _0x4f67b6;
              }
            }
            function _0x2cc73d(_0x44a5ee) {
              var _0x5f23a6 = "<div class=\"zsCloud_box\"><h2 class=\"zsCloud_seltime\">选择时间</h2><div class=\"zsCloud_div\"><div class=\"zsCloud_div_list\">";
              for (var _0x63b2bc = 0; _0x63b2bc < _0x44a5ee.length; _0x63b2bc++) {
                var _0x5428a9 = _0x44a5ee[_0x63b2bc];
                var _0x239878 = Ext.fly(_0x424a25.elements[0]).select(".topicId" + _0x5428a9.topicid + ":not(.markertime)");
                var _0x19f16b = videojs.formatTime(_0x5428a9.time);
                _0x239878 && _0x239878.elements[0] && _0x239878.elements[0].parentElement.remove();
                _0x5f23a6 += "<div class=\"zsCloud_item topicId" + _0x5428a9.topicid + "\" data-marker-time=\"" + _0x5428a9.time + "\" title=\"" + _0x19f16b + "\" onclick=\"markersPlayer(this)\">" + _0x19f16b + "</div>";
              }
              _0x5f23a6 += "</div></div></div>";
              return _0x5f23a6;
            }
            var _0x424a25 = Ext.select(".zsCloud.old .zsCloud_ul");
            _0x57c03d.aiVideoInterpret == 1 && (_0x424a25 = Ext.select(".zsCloud.new .zsCloud_ul"));
            if (_0x424a25 && _0x424a25.elements[0]) {
              var _0x599ec5;
              for (var _0x444797 = 0; _0x444797 < _0x5730a1.length; _0x444797++) {
                var _0x79da3e = _0x5730a1[_0x444797];
                var _0x1cdd98 = _0x23f370[_0x79da3e];
                var _0x434cdd = "";
                if (_0x1cdd98) {
                  if (_0x1cdd98.length == 1) {
                    var _0x3da08a = _0x1cdd98[0];
                    var _0x41e7da = Ext.fly(_0x424a25.elements[0]).select(".topicId" + _0x3da08a.topicid + ":not(.markertime)");
                    var _0x6e5a60 = videojs.formatTime(_0x3da08a.time);
                    _0x41e7da && _0x41e7da.elements[0] && _0x41e7da.elements[0].parentElement.remove();
                    _0x434cdd = "<li><span class='topicId" + _0x3da08a.topicid + " markertime' data-marker-time='" + _0x3da08a.time + "' title='" + _0x3da08a.text + "' onclick='markersPlayer(this)'>" + _0x3da08a.text + "</span></li>";
                  } else {
                    _0x434cdd = "<li class=\"zsCloud_select\"><span class=\"zsCloud_span\" title=\"" + _0x79da3e + "\">" + _0x79da3e + "</span>";
                    _0x1cdd98 && _0x1cdd98.length > 0 ? _0x434cdd += _0x2cc73d(_0x1cdd98) : _0x434cdd += "</li>";
                  }
                }
                _0x599ec5 ? _0x599ec5 = Ext.DomHelper.insertHtml("afterEnd", _0x599ec5.elements[0], _0x434cdd) : _0x599ec5 = Ext.DomHelper.insertHtml("afterBegin", _0x424a25.elements[0], _0x434cdd);
                _0x599ec5 = Ext.fly(_0x599ec5).select("");
              }
            }
            _0x57c03d.videoTopicCloud && _0x57c03d.videoTopicCloud == 1 && (Ext.select(".zsCloud.old .zsCloud_down").setStyle("display", "block"), Ext.select(".zsCloud.old .zsCloud_body").setStyle("display", "block"));
          }
          _0x57c03d.aiVideoInterpret == 1 && _0x57c03d.videoTopicCloud && _0x57c03d.videoTopicCloud == 1 && Ext.select(".zsCloud.new .zsCloud_body").setStyle("display", "block");
          var _0x2b40ca = new Map();
          var _0x3bb91b = new Array();
          if (data.list && data.list.length > 0) {
            for (var _0x16faf6 = 0; _0x16faf6 < data.list.length; _0x16faf6++) {
              var _0x286606 = data.list[_0x16faf6].topicid;
              var _0xeb2b8d = _0x2b40ca.get(_0x286606);
              !_0xeb2b8d && (_0xeb2b8d = {}, _0xeb2b8d.text = data.list[_0x16faf6].text, _0xeb2b8d.time = data.list[_0x16faf6].time, _0xeb2b8d.topicid = data.list[_0x16faf6].topicid, _0xeb2b8d.weight = 0, _0xeb2b8d.html = {
                "data-marker-time": data.list[_0x16faf6].time,
                onclick: "markersPlayer(this)"
              }, _0x2b40ca.set(_0x286606, _0xeb2b8d), _0x3bb91b.push(_0xeb2b8d));
              _0xeb2b8d.weight += 1;
            }
          }
          $(function () {
            _0x3bb91b.length != 0 && ($("#word_cloud").html(""), $("#word_cloud").jQCloud(_0x3bb91b), $("#word_cloud_new").html(""), $("#word_cloud_new").jQCloud(_0x3bb91b));
            function _0x369213(_0x31dcb4) {
              $(_0x31dcb4).niceScroll({
                cursorborder: "",
                cursorwidth: 8,
                cursorcolor: "#DADFE6",
                boxzoom: false,
                autohidemode: true
              });
              setInterval(function () {
                $(_0x31dcb4).getNiceScroll().resize();
              }, 300);
            }
            $(".zsCloud_box").each(function (_0x183082) {
              $(this).find(".zsCloud_div").attr("id", "zsCloud_div_" + _0x183082);
              _0x369213("#zsCloud_div_" + _0x183082);
            });
          });
          $(".zsCloud_down").click(function () {
            var _0x31a2c5 = $(".zsCloud_body");
            _0x31a2c5.is(":visible") ? (_0x31a2c5.hide(), $(this).addClass("zsCloud_up"), $(this).text("展开")) : (_0x31a2c5.show(), $(this).removeClass("zsCloud_up"), $(this).text("收起"));
          });
        }
      });
    }
  });
  videojs.registerPlugin("marker", _0x522867);
})();
(function () {
  var _0x217fd2 = videojs.getPlugin("plugin");
  var _0x1c0f90 = videojs.extend(_0x217fd2, {
    constructor: function (_0x38409e, _0x1bd10a) {
      _0x217fd2.call(this, _0x38409e, _0x1bd10a);
      var _0x569b40 = this;
      var _0x43fca1 = _0x1bd10a.subtitleUrl;
      var _0x321a91 = function (_0x422e60) {
        var _0x3591e6 = _0x422e60.match(/support\/(\w+).\w+/);
        if (_0x3591e6) {
          return ServerHosts.PARENT_HOST + "/ananas/video-editor/sub?objectid=" + _0x3591e6[1];
        }
      };
      var _0x4c2249 = function (_0x44213e, _0x3223c7, _0x152807) {
        _0x38409e.addRemoteTextTrack({
          kind: "subtitles",
          srclang: "cn",
          label: _0x44213e,
          src: _0x3223c7,
          default: _0x152807
        }, true);
      };
      _0x38409e.ready(function () {
        if (_0x1bd10a.deviceType == 1) {
          return;
        }
        _0x43fca1 && Ext.Ajax.request({
          url: _0x43fca1,
          success: function (_0x27b6da) {
            if (_0x27b6da.status != 200) {
              return;
            }
            eval("var subs=" + _0x27b6da.responseText);
            var _0x187335 = 0;
            var _0x543660 = 0;
            subs.length > 0 && Ext.each(subs, function (_0x5db5bd) {
              _0x1bd10a.translate == 1 && _0x5db5bd.name == "English" ? (_0x5db5bd.selected = true, _0x543660 = _0x187335) : _0x5db5bd.selected = false;
              _0x4c2249(_0x5db5bd.name, _0x321a91(_0x5db5bd.url), _0x5db5bd.selected);
              _0x187335++;
            });
            _0x1bd10a.translate == 1 && (Ext.select(".vjs-subs-caps-button .vjs-icon-placeholder").setHTML(isEn ? "Translate" : "翻译"), Ext.select(".vjs-subs-caps-button .vjs-icon-placeholder").addCls("vjs-hide-content"));
            setTimeout(function () {
              var _0x369e20 = _0x38409e.textTracks();
              _0x1bd10a.translate == 1 ? _0x369e20 && _0x369e20[_0x543660] ? _0x369e20[_0x543660].mode = "showing" : _0x369e20 && _0x369e20[0] && (_0x369e20[0].mode = "showing") : _0x369e20 && _0x369e20[0] && (_0x369e20[0].mode = "showing");
            }, 500);
          }
        });
        var _0x3c1b0b = _0x38409e.textTrackSettings;
        _0x3c1b0b.setValues({
          backgroundColor: "#000",
          backgroundOpacity: "0",
          edgeStyle: "uniform"
        });
        _0x3c1b0b.updateDisplay();
      });
    }
  });
  videojs.registerPlugin("subtitle", _0x1c0f90);
})();
(function () {
  (function (_0x5c4a95, _0x494209) {
    var _0x304e9c = {};
    var _0x3cafa1;
    var _0x467e18;
    var _0x48b484;
    var _0x176c73;
    var _0x3ec270;
    var _0x446a4b = _0x494209.getComponent("MenuButton");
    var _0x1fdef5 = _0x494209.extend(_0x446a4b, {
      constructor: function (_0x4f2ac6, _0x4caef7, _0x45059f) {
        this.label = _0x45059f;
        _0x446a4b.call(this, _0x4f2ac6, _0x4caef7);
        this.controlText("Setting");
        this.el().appendChild(_0x45059f);
      }
    });
    function _0x556c29(_0x17fa91, _0x46df79) {
      var _0x258bf2 = _0x46df79.subtitle || {};
      if (_0x258bf2) {
        var _0xd95046 = _0x258bf2.subtitleUrl;
        var _0xa825e3 = _0x258bf2.translate;
        var _0x5db392 = function (_0x1f4ae1) {
          var _0x4da705 = _0x1f4ae1.match(/support\/(\w+).\w+/);
          if (_0x4da705) {
            return ServerHosts.PARENT_HOST + "/ananas/video-editor/sub?objectid=" + _0x4da705[1];
          }
        };
        var _0x190561 = function (_0xb59653, _0x43cfec, _0x1ded00) {
          _0x17fa91.addRemoteTextTrack({
            kind: "subtitles",
            srclang: "cn",
            label: _0xb59653,
            src: _0x43cfec,
            default: _0x1ded00
          }, true);
        };
      }
      _0x17fa91.ready(function () {
        var _0x4b8cbb = _0x46df79.playlineDefault;
        var _0x42ac09 = _0x46df79.resolutionDefault;
        var _0x356fa9 = _0x46df79.hideHotBtn;
        var _0x38bfd3 = document.createElement("li");
        var _0x464fbe = document.createElement("div");
        _0x464fbe.className = "vjs_base_setting";
        var _0x168424 = "";
        var _0x2c096c = _0x17fa91.options_.playlines;
        if (_0x2c096c.length > 0) {
          var _0x3b7800 = "<div class='videoTitle'><span>" + langMap.VideoLines + "</span></div><ul class=\"video_line video_playline\">";
          for (var _0x104314 = 0; _0x104314 < _0x2c096c.length; _0x104314++) {
            var _0x4df432 = _0x2c096c[_0x104314];
            _0x3b7800 += "<li index='" + _0x104314 + "' class='vjs-sub-item" + (_0x4b8cbb.label == _0x4df432.label ? " active" : "") + "'>" + _0x4df432.label + "</li>";
          }
          _0x3b7800 += "</ul>";
          _0x168424 += _0x3b7800;
        }
        var _0x1da640 = _0x17fa91.options_.sources;
        if (_0x1da640.length > 0) {
          var _0x512c50 = "<div class='videoTitle vjs-sub-title'><span>" + langMap.VideoClarity + "</span></div><ul class=\"video_line video_resolution\">";
          for (var _0x104314 = 0; _0x104314 < _0x1da640.length; _0x104314++) {
            var _0x16098f = _0x1da640[_0x104314];
            _0x512c50 += "<li index='" + _0x104314 + "' class='vjs-sub-item" + (_0x42ac09 == _0x16098f.res ? " active" : "") + "'>" + _0x16098f.label + "</li>";
          }
          _0x512c50 += "</ul>";
          _0x168424 += _0x512c50;
        }
        _0x464fbe.innerHTML = _0x168424;
        _0x38bfd3.appendChild(_0x464fbe);
        var _0x40e99c = document.createElement("div");
        _0x40e99c.className = "vjs_advanced_setting";
        _0x38bfd3.appendChild(_0x40e99c);
        Ext.select(".vjs-self-setting .vjs-menu-content").appendChild(_0x38bfd3);
        var _0x33773e = document.createElement("div");
        _0x33773e.className = "video_setting_hotmap";
        _0x356fa9 && (_0x33773e.style.display = "none");
        _0x33773e.innerHTML = "<div class=\"videoTitle vjs_hotmap_title\"><span>" + langMap.viewHeart + "</span><div class=\"zmSwitch swithOn hotmapSwitch\"></div></div>";
        _0x464fbe.appendChild(_0x33773e);
        _0xd95046 && _0x46df79.deviceType == 1 && Ext.Ajax.request({
          url: _0xd95046,
          success: function (_0x239818) {
            if (_0x239818.status != 200) {
              return;
            }
            var _0x5ea074 = eval("(" + _0x239818.responseText + ")");
            var _0x20d847 = 0;
            var _0x519e1d = 0;
            if (_0x5ea074.length > 0) {
              Ext.select(".vjs-control-bar .vjs-self-setting").setStyle("display", "block");
              var _0x6afdae = document.createElement("div");
              _0x6afdae.className = "videoTitle vjs-sub-title";
              _0x6afdae.innerHTML = "<span>" + langMap.Subtitles + "</span><div class=\"zmSwitch swithOn\"></div>";
              _0x464fbe.appendChild(_0x6afdae);
              var _0x3e24d3 = document.createElement("ul");
              _0x3e24d3.className = "vjs-sub-ul video_line zmList clearfix";
              Ext.each(_0x5ea074, function (_0x213b83) {
                var _0x52befc = document.createElement("li");
                _0x52befc.className = "vjs-sub-item";
                _0x52befc.innerHTML = _0x213b83.name;
                _0xa825e3 == 1 && _0x213b83.name == "English" ? (_0x213b83.selected = true, _0x519e1d = _0x20d847, _0x52befc.className = "vjs-sub-item active") : _0x213b83.selected = false;
                _0x52befc.setAttribute("label", _0x213b83.name);
                _0x190561(_0x213b83.name, _0x5db392(_0x213b83.url), _0x213b83.selected);
                _0x3e24d3.appendChild(_0x52befc);
                _0x20d847++;
              });
              _0x464fbe.appendChild(_0x3e24d3);
              var _0x17becb = document.createElement("div");
              _0x17becb.className = "vjs-sub-setting-btn videoTitle toHighSetting";
              _0x17becb.innerHTML = "<span>" + langMap.advancedetting + "</span><span class=\"rightArrow\"></span>";
              _0x464fbe.appendChild(_0x17becb);
              Ext.select(".vjs-self-setting .vjs-sub-title .zmSwitch").on("click", function (_0x370e76) {
                Ext.get(this).hasCls("swithOn") ? (Ext.get(this).removeCls("swithOn"), Ext.select(".zmList").setStyle("display", "none"), Ext.select(".vjs-text-track-display").setStyle("display", "none")) : (Ext.get(this).addCls("swithOn"), Ext.select(".zmList").setStyle("display", "block"), Ext.select(".vjs-text-track-display").setStyle("display", "block"));
              });
              _0xa825e3 != 1 && Ext.get(Ext.select(".vjs-sub-ul .vjs-sub-item").elements[0]).addCls("active");
              Ext.select(".vjs-sub-ul .vjs-sub-item").on("click", function (_0x450757) {
                Ext.select(".vjs-sub-ul .vjs-sub-item").removeCls("active");
                Ext.get(this).addCls("active");
                var _0x4b8de3 = Ext.get(this).getAttribute("label");
                _0x467e18 && (_0x467e18.mode = "disabled");
                var _0x217596 = _0x17fa91.textTracks();
                var _0x4e16d5;
                for (var _0x5bdcf5 = 0; _0x5bdcf5 < _0x217596.length; _0x5bdcf5++) {
                  var _0x24de67 = _0x217596[_0x5bdcf5];
                  _0x24de67.kind === "subtitles" && _0x24de67.label === _0x4b8de3 && (_0x24de67.mode = "showing", _0x4e16d5 = _0x24de67, _0x467e18 = _0x24de67, _0x4e16d5.addEventListener("cuechange", _0x17fa91.textTrackDisplay.updateDisplay));
                }
              });
              _0x40e99c.innerHTML = "<div class=\"toZimuBx\">\n\t\t\t\t\t\t\t\t<span class=\"toZimu\"><span class=\"rightArrow\"></span>" + langMap.moreSubSettings + "</span>\n\t\t\t\t\t\t\t\t<span class=\"resetBtn\">" + langMap.reset + "</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"itemLineBx marTop24\">\n\t\t\t\t\t\t\t\t<span class=\"leftFontWid\">" + langMap.textColr + "</span>\n\t\t\t\t\t\t\t\t<div class=\"rightbox\">\n\t\t\t\t\t\t\t\t\t<div class=\"selectBox vjs_font_color\">\n\t\t\t\t\t\t\t\t\t\t<p>" + langMap.White + "</p>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#000\" p_txt=\"" + langMap.Black + "\" class=\"active\"><a href=\"javascript:void(0)\">" + langMap.Black + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#FFF\" p_txt=\"" + langMap.White + "\"><a href=\"javascript:void(0)\">" + langMap.White + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#F00\" p_txt=\"" + langMap.Red + "\"><a href=\"javascript:void(0)\">" + langMap.Red + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#0F0\" p_txt=\"" + langMap.Green + "\"><a href=\"javascript:void(0)\">" + langMap.Green + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#00F\" p_txt=\"" + langMap.Blue + "\"><a href=\"javascript:void(0)\">" + langMap.Blue + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#FF0\" p_txt=\"" + langMap.Yellow + "\"><a href=\"javascript:void(0)\">" + langMap.Yellow + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#F0F\" p_txt=\"" + langMap.Magenta + "\"><a href=\"javascript:void(0)\">" + langMap.Magenta + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#0FF\" p_txt=\"" + langMap.Cyan + "\"><a href=\"javascript:void(0)\">" + langMap.Cyan + "</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"itemLineBx marTop12\">\n\t\t\t\t\t\t\t\t<span class=\"leftFontWid\">" + langMap.textOpacity + "</span>\n\t\t\t\t\t\t\t\t<div class=\"rightbox\">\n\t\t\t\t\t\t\t\t\t<div class=\"dragBx\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"dragCon\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragClick\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"blueLine fontBule\" style=\"width: 100%\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragStart\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragEnd\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dragCircle\" id=\"1\" style=\"left:110px\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<span class=\"dragFont fontTran\">100%</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"itemLineBx marTop24\">\n\t\t\t\t\t\t\t\t<span class=\"leftFontWid\">" + langMap.backgroundColor + "</span>\n\t\t\t\t\t\t\t\t<div class=\"rightbox\">\n\t\t\t\t\t\t\t\t\t<div class=\"selectBox vjs_bgc\">\n\t\t\t\t\t\t\t\t\t\t<p>" + langMap.Black + "</p>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#000\" p_txt=\"" + langMap.Black + "\" class=\"active\"><a href=\"javascript:void(0)\">" + langMap.Black + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#FFF\" p_txt=\"" + langMap.White + "\"><a href=\"javascript:void(0)\">" + langMap.White + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#F00\" p_txt=\"" + langMap.Red + "\"><a href=\"javascript:void(0)\">" + langMap.Red + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#0F0\" p_txt=\"" + langMap.Green + "\"><a href=\"javascript:void(0)\">" + langMap.Green + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#00F\" p_txt=\"" + langMap.Blue + "\"><a href=\"javascript:void(0)\">" + langMap.Blue + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#FF0\" p_txt=\"" + langMap.Yellow + "\"><a href=\"javascript:void(0)\">" + langMap.Yellow + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#F0F\" p_txt=\"" + langMap.Magenta + "\"><a href=\"javascript:void(0)\">" + langMap.Magenta + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#0FF\" p_txt=\"" + langMap.Cyan + "\"><a href=\"javascript:void(0)\">" + langMap.Cyan + "</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"itemLineBx marTop12\">\n\t\t\t\t\t\t\t\t<span class=\"leftFontWid\">" + langMap.backgroundOpacity + "</span>\n\t\t\t\t\t\t\t\t<div class=\"rightbox\">\n\t\t\t\t\t\t\t\t\t<div class=\"dragBx\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"dragCon\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragClick\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"blueLine bgBlue\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragStart\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragMiddle\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragEnd\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dragCircle\" id=\"2\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<span class=\"dragFont bgTran\">0%</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"itemLineBx marTop24\">\n\t\t\t\t\t\t\t\t<span class=\"leftFontWid\">" + langMap.windowColor + "</span>\n\t\t\t\t\t\t\t\t<div class=\"rightbox\">\n\t\t\t\t\t\t\t\t\t<div class=\"selectBox vjs_view_color\">\n\t\t\t\t\t\t\t\t\t\t<p>" + langMap.Black + "</p>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#000\" p_txt=\"" + langMap.Black + "\" class=\"active\"><a href=\"javascript:void(0)\">" + langMap.Black + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#FFF\" p_txt=\"" + langMap.White + "\"><a href=\"javascript:void(0)\">" + langMap.White + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#F00\" p_txt=\"" + langMap.Red + "\"><a href=\"javascript:void(0)\">" + langMap.Red + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#0F0\" p_txt=\"" + langMap.Green + "\"><a href=\"javascript:void(0)\">" + langMap.Green + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#00F\" p_txt=\"" + langMap.Blue + "\"><a href=\"javascript:void(0)\">" + langMap.Blue + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#FF0\" p_txt=\"" + langMap.Yellow + "\"><a href=\"javascript:void(0)\">" + langMap.Yellow + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#F0F\" p_txt=\"" + langMap.Magenta + "\"><a href=\"javascript:void(0)\">" + langMap.Magenta + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"#0FF\" p_txt=\"" + langMap.Cyan + "\"><a href=\"javascript:void(0)\">" + langMap.Cyan + "</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"itemLineBx marTop12\">\n\t\t\t\t\t\t\t\t<span class=\"leftFontWid\">" + langMap.windowOpacity + "</span>\n\t\t\t\t\t\t\t\t<div class=\"rightbox\">\n\t\t\t\t\t\t\t\t\t<div class=\"dragBx\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"dragCon\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragClick\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"blueLine viewBlue\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragStart\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragMiddle\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragEnd\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dragCircle\" id=\"3\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<span class=\"dragFont viewTran\">0%</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"videoTitle marTop24 fontBord\">\n\t\t\t\t\t\t\t\t<span>" + langMap.textStroke + "</span>\n\t\t\t\t\t\t\t\t<div class=\"zmSwitch swithOn\"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ul class=\"video_line fontBordList\">\n\t\t\t\t\t\t\t\t<li class=\"active\" data=\"uniform\">" + langMap.None + "</li>\n\t\t\t\t\t\t\t\t<li data=\"raised\">" + langMap.Raised + "</li>\n\t\t\t\t\t\t\t\t<li data=\"depressed\">" + langMap.Depressed + "</li>\n\t\t\t\t\t\t\t\t<li data=\"uniform\">" + langMap.Uniform + "</li>\n\t\t\t\t\t\t\t\t<li data=\"dropshadow\">" + langMap.Dropshadow + "</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"itemLineBx marTop24\">\n\t\t\t\t\t\t\t\t<span class=\"leftFontWid\">" + langMap.fontFamily + "</span>\n\t\t\t\t\t\t\t\t<div class=\"rightbox\">\n\t\t\t\t\t\t\t\t\t<div class=\"selectBox vjs_sub_fontfamily\">\n\t\t\t\t\t\t\t\t\t\t<p value=\"0\" title=\"" + langMap.Typeface + "\">" + langMap.Typeface + "</p>\n\t\t\t\t\t\t\t\t\t\t<ul style=\"bottom:30px;top:auto\">\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"proportionalSansSerif\" class=\"active\" p_txt=\"" + langMap["ProportionalSans-Serif"] + "\"><a href=\"javascript:void(0)\">" + langMap["ProportionalSans-Serif"] + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"monospaceSansSerif\" p_txt=\"" + langMap["MonospaceSans-Serif"] + "\"><a href=\"javascript:void(0)\">" + langMap["MonospaceSans-Serif"] + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"proportionalSerif\" p_txt=\"" + langMap.ProportionalSerif + "\"><a href=\"javascript:void(0)\">" + langMap.ProportionalSerif + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"monospaceSerif\" p_txt=\"" + langMap.MonospaceSerif + "\"><a href=\"javascript:void(0)\">" + langMap.MonospaceSerif + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"casual\" p_txt=\"" + langMap.Casual + "\"><a href=\"javascript:void(0)\">" + langMap.Casual + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"script\" p_txt=\"" + langMap.Script + "\"><a href=\"javascript:void(0)\">" + langMap.Script + "</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data=\"small-caps\" p_txt=\"" + langMap.SmallCaps + "\"><a href=\"javascript:void(0)\">" + langMap.SmallCaps + "</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"itemLineBx marTop24\">\n\t\t\t\t\t\t\t\t<span class=\"leftFontWid\">" + langMap.subtitlePosition + "</span>\n\t\t\t\t\t\t\t\t<div class=\"rightbox\">\n\t\t\t\t\t\t\t\t\t<div class=\"dragBx\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"dragCon\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragClick\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"blueLine zmBlue\" style=\"width: 55%\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragStart\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragMiddle\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"dragEnd\"></span>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dragCircle zmpDragCircle\" style=\"left:50px\" id=\"4\"></div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<span class=\"zmdragFont\">" + langMap.moderate + "</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>";
              function _0x2e9a79() {
                return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || null;
              }
              function _0x3e971e() {
                return !!(document.webkitIsFullScreen || _0x2e9a79());
              }
              function _0xb2fb5f(_0x1321ee, _0x2b6f3b, _0x5a72e0) {
                if (!(_0x1321ee && _0x2b6f3b && _0x5a72e0)) {
                  return;
                }
                if (_0x2b6f3b == "subPosition") {
                  _0x5a72e0 == "0" ? _0x3e971e() ? document.querySelector(".vjs-text-track-display").style.setProperty("bottom", "10px", "important") : document.querySelector(".vjs-text-track-display").style.setProperty("bottom", "10px", "important") : _0x5a72e0 == "0.5" ? _0x3e971e() ? document.querySelector(".vjs-text-track-display").style.setProperty("bottom", "50px", "important") : document.querySelector(".vjs-text-track-display").style.setProperty("bottom", "40px", "important") : _0x5a72e0 == "1" && (_0x3e971e() ? document.querySelector(".vjs-text-track-display").style.setProperty("bottom", "100px", "important") : document.querySelector(".vjs-text-track-display").style.setProperty("bottom", "80px", "important"));
                  var _0x4464d5 = _0x1321ee.textTrackSettings;
                  _0x4464d5.updateDisplay();
                  return;
                }
                _0x2b6f3b == "fontPercent" && (_0x5a72e0 = parseFloat(_0x5a72e0));
                var _0x4464d5 = _0x1321ee.textTrackSettings;
                var _0x276147 = _0x4464d5.getValues();
                _0x276147[_0x2b6f3b] = _0x5a72e0;
                _0x4464d5.setValues(_0x276147);
                _0x4464d5.updateDisplay();
              }
              function _0x56984d() {
                var _0x4d6456 = _0x17fa91.textTrackSettings;
                _0x48b484 = _0x4d6456.getValues();
                if (_0x48b484) {
                  var _0x2e0765 = _0x48b484.color || "#FFF";
                  var _0x3f22c5 = Ext.select(".vjs_font_color li").elements;
                  Ext.select(".vjs_font_color li").removeCls("active");
                  var _0x126460 = "";
                  Ext.each(_0x3f22c5, function (_0xcea159) {
                    _0xcea159.getAttribute("data") == _0x2e0765 && (Ext.get(_0xcea159).addCls("active"), _0x126460 = _0xcea159.getAttribute("p_txt"));
                  });
                  Ext.select(".vjs_font_color p").setHTML(_0x126460);
                  Ext.select(".vjs_font_color p").elements[0].setAttribute("value", _0x2e0765);
                  var _0x271fd5 = _0x48b484.textOpacity || "1";
                  _0x271fd5 == "0.5" ? (Ext.select("#1").setStyle("left", "0"), Ext.select(".fontTran").setHTML("50%"), Ext.select(".fontBule").setStyle("width", "0%")) : _0x271fd5 == "1" && (Ext.select("#1").setStyle("left", "110px"), Ext.select(".fontTran").setHTML("100%"), Ext.select(".fontBule").setStyle("width", "100%"));
                  var _0x57429f = _0x48b484.fontFamily || "Microsoft YaHei";
                  var _0x28ef39 = Ext.select(".vjs_sub_fontfamily li").elements;
                  Ext.select(".vjs_sub_fontfamily li").removeCls("active");
                  var _0x367920 = "";
                  Ext.each(_0x28ef39, function (_0xa2266b) {
                    _0xa2266b.getAttribute("data") == _0x57429f && (Ext.get(_0xa2266b).addCls("active"), _0x367920 = _0xa2266b.getAttribute("p_txt"));
                  });
                  Ext.select(".vjs_sub_fontfamily p").setHTML(_0x367920);
                  Ext.select(".vjs_sub_fontfamily p").elements[0].setAttribute("title", _0x367920);
                  Ext.select(".vjs_sub_fontfamily p").elements[0].setAttribute("value", _0x57429f);
                  var _0x179730 = _0x48b484.backgroundColor || "#000";
                  var _0x596a49 = Ext.select(".vjs_bgc li").elements;
                  Ext.select(".vjs_bgc li").removeCls("active");
                  var _0x35324b = "";
                  Ext.each(_0x596a49, function (_0x2a3a2c) {
                    _0x2a3a2c.getAttribute("data") == _0x179730 && (Ext.get(_0x2a3a2c).addCls("active"), _0x35324b = _0x2a3a2c.getAttribute("p_txt"));
                  });
                  Ext.select(".vjs_bgc p").setHTML(_0x35324b);
                  Ext.select(".vjs_bgc p").elements[0].setAttribute("value", _0x179730);
                  var _0x2f968e = _0x48b484.backgroundOpacity || "0";
                  _0x2f968e == "0" ? (Ext.select("#2").setStyle("left", "0"), Ext.select(".bgTran").setHTML("0%"), Ext.select(".bgBlue").setStyle("width", "0%")) : _0x2f968e == "1" ? (Ext.select("#2").setStyle("left", "110px"), Ext.select(".bgTran").setHTML("100%"), Ext.select(".bgBlue").setStyle("width", "100%")) : _0x2f968e == "0.5" && (Ext.select("#2").setStyle("left", "55px"), Ext.select(".bgTran").setHTML("50%"), Ext.select(".bgBlue").setStyle("width", "55%"));
                  var _0x28f034 = _0x48b484.windowColor || "#000";
                  var _0xcb6e5e = Ext.select(".vjs_view_color li").elements;
                  Ext.select(".vjs_view_color li").removeCls("active");
                  var _0x32594c = "";
                  Ext.each(_0xcb6e5e, function (_0xf06b1d) {
                    _0xf06b1d.getAttribute("data") == _0x28f034 && (Ext.get(_0xf06b1d).addCls("active"), _0x32594c = _0xf06b1d.getAttribute("p_txt"));
                  });
                  Ext.select(".vjs_view_color p").setHTML(_0x32594c);
                  Ext.select(".vjs_view_color p").elements[0].setAttribute("value", _0x28f034);
                  var _0x31d995 = _0x48b484.windowOpacity || "0";
                  _0x31d995 == "0" ? (Ext.select("#3").setStyle("left", "0"), Ext.select(".viewTran").setHTML("0%"), Ext.select(".viewBlue").setStyle("width", "0%")) : _0x2f968e == "1" ? (Ext.select("#3").setStyle("left", "110px"), Ext.select(".viewTran").setHTML("100%"), Ext.select(".viewBlue").setStyle("width", "100%")) : _0x2f968e == "0.5" && (Ext.select("#3").setStyle("left", "55px"), Ext.select(".viewTran").setHTML("50%"), Ext.select(".viewBlue").setStyle("width", "55%"));
                }
              }
              isEn && Ext.select(".fontBordList li").setStyle("width", "90px");
              Ext.select(".toHighSetting").on("click", function () {
                _0x56984d();
                Ext.select(".vjs_base_setting").setStyle("display", "none");
                Ext.select(".vjs_advanced_setting").setStyle("display", "block");
              });
              $(".vjs-self-setting").hover(function () {
                $(".vjs-self-setting .vjs-menu").css("display", "block");
              }, function () {
                $(".vjs-self-setting .vjs-menu").css("display", "none");
              });
              Ext.select(".resetBtn").on("click", function () {
                var _0x5f52aa = _0x494209("video");
                var _0x445752 = _0x5f52aa.textTrackSettings;
                _0x445752.setValues(_0x176c73);
                _0x445752.updateDisplay();
                _0x56984d();
                $(".fontBordList li").removeClass("active");
                $(".fontBordList li").eq(0).addClass("active");
                _0xb2fb5f(_0x5f52aa, "edgeStyle", "uniform");
                Ext.select(".zmpDragCircle").setStyle("left", "55px");
                Ext.select(".zmBlue").setStyle("width", "55%");
                Ext.select(".zmdragFont").setHTML(langMap.moderate);
                _0xb2fb5f(_0x5f52aa, "subPosition", "0.5");
              });
              Ext.select(".toZimu").on("click", function () {
                Ext.select(".vjs_base_setting").setStyle("display", "block");
                Ext.select(".vjs_advanced_setting").setStyle("display", "none");
              });
              $(".selectBox").click(function () {
                var _0x1701a8 = $(this).find("ul");
                var _0x236e2a = _0x1701a8.css("display");
                _0x236e2a = _0x236e2a == "block" ? 0 : 1;
                $(".selectBox ul").css("display", "none");
                _0x236e2a ? (_0x1701a8.css("display", "block"), $(this).addClass("dropDown"), _0x236e2a = 0, _0x1701a8.find("li").each(function () {
                  _0x236e2a += $(this).height();
                }), _0x1701a8.css("display", "none"), _0x236e2a > 200 && (_0x1701a8.css("height", 200), _0x1701a8.css("overflow", "auto")), _0x1701a8.slideDown(100)) : (_0x1701a8.slideUp(), $(this).removeClass("dropDown"));
                return false;
              });
              $(".selectBox ul li").on("click", function () {
                var _0x3c1adb = $(this).parent().parent().find("p");
                _0x3c1adb.text($(this).find("a").text());
                _0x3c1adb.attr("value", $(this).attr("data"));
                $(this).addClass("active").siblings().removeClass("active");
                var _0x2111c2 = $(this).parent().parent();
                var _0x3e0fec = _0x494209("video");
                $(_0x2111c2).hasClass("vjs_fontsize") ? _0xb2fb5f(_0x3e0fec, "fontPercent", $(this).attr("data")) : $(_0x2111c2).hasClass("vjs_font_color") ? _0xb2fb5f(_0x3e0fec, "color", $(this).attr("data")) : $(_0x2111c2).hasClass("vjs_sub_fontfamily") ? _0xb2fb5f(_0x3e0fec, "fontFamily", $(this).attr("data")) : $(_0x2111c2).hasClass("vjs_bgc") ? _0xb2fb5f(_0x3e0fec, "backgroundColor", $(this).attr("data")) : $(_0x2111c2).hasClass("vjs_view_color") && _0xb2fb5f(_0x3e0fec, "windowColor", $(this).attr("data"));
              });
              $(document).mouseup(function (_0x4149bf) {
                $(".selectBox ul").slideUp();
                $(".selectBox").removeClass("dropDown");
              });
              $(".fontBord .zmSwitch").click(function () {
                $(this).hasClass("swithOn") ? ($(this).removeClass("swithOn"), $(".fontBordList").hide()) : ($(this).addClass("swithOn"), $(".fontBordList").show());
              });
              $(".fontBordList li").click(function () {
                $(".fontBordList li").removeClass("active");
                $(this).addClass("active");
                var _0x41770d = $(this).attr("data");
                var _0x3dd905 = _0x494209("video");
                _0xb2fb5f(_0x3dd905, "edgeStyle", _0x41770d);
              });
              var _0x77ef6f = false;
              var _0x24f4ce;
              var _0x5b297b = 0;
              var _0x3effaf;
              var _0xf6c1e6 = document.getElementsByClassName("dragCircle");
              var _0x45f53e;
              var _0x15004a;
              for (var _0x4e6186 = 0; _0x4e6186 < _0xf6c1e6.length; _0x4e6186++) {
                var _0x32b84c = _0xf6c1e6[_0x4e6186];
                _0x32b84c.addEventListener("mousedown", function (_0x41e8ba) {
                  _0x77ef6f = true;
                  _0x24f4ce = _0x41e8ba.clientX - _0x41e8ba.srcElement.offsetLeft;
                  _0x3effaf = _0x5b297b;
                  _0x15004a = _0x41e8ba.srcElement.getAttribute("id");
                });
              }
              document.addEventListener("mouseup", function () {
                _0x45f53e = document.getElementById(_0x15004a);
                var _0x355df7 = _0x494209("video");
                _0x77ef6f = false;
                var _0x262a0b = "";
                _0x15004a == "1" ? _0x262a0b = "textOpacity" : _0x15004a == "2" ? _0x262a0b = "backgroundOpacity" : _0x15004a == 3 ? _0x262a0b = "windowOpacity" : _0x15004a == 4 && (_0x262a0b = "subPosition");
                if (_0x15004a == 1) {
                  _0x5b297b < 55 ? (_0x5b297b = 0, _0x45f53e.style.left = _0x5b297b + "px", $(_0x45f53e).parent(".dragCon").find(".blueLine").css("width", "0%"), _0x45f53e.parentNode.parentNode.children[1].innerHTML = "50%", _0xb2fb5f(_0x355df7, _0x262a0b, "0.5")) : _0x5b297b > 55 && (_0x5b297b = 110, _0x45f53e.style.left = _0x5b297b + "px", $(_0x45f53e).parent(".dragCon").find(".blueLine").css("width", "100%"), _0x45f53e.parentNode.parentNode.children[1].innerHTML = "100%", _0xb2fb5f(_0x355df7, _0x262a0b, "1"));
                  return;
                }
                _0x3effaf < _0x5b297b && _0x5b297b < 55 ? (_0x5b297b = 55, _0x45f53e.style.left = _0x5b297b + "px", $(_0x45f53e).parent(".dragCon").find(".blueLine").css("width", "55%"), _0x45f53e.parentNode.parentNode.children[1].innerHTML = _0x15004a == 4 ? langMap.moderate : "50%", _0xb2fb5f(_0x355df7, _0x262a0b, "0.5")) : _0x3effaf < _0x5b297b && _0x5b297b > 55 ? (_0x5b297b = 110, _0x45f53e.style.left = _0x5b297b + "px", $(_0x45f53e).parent(".dragCon").find(".blueLine").css("width", "100%"), _0x45f53e.parentNode.parentNode.children[1].innerHTML = _0x15004a == 4 ? langMap.sHigh : "100%", _0xb2fb5f(_0x355df7, _0x262a0b, "1")) : _0x3effaf > _0x5b297b && _0x5b297b > 55 ? (_0x5b297b = 55, _0x45f53e.style.left = _0x5b297b + "px", $(_0x45f53e).parent(".dragCon").find(".blueLine").css("width", "55%"), _0x45f53e.parentNode.parentNode.children[1].innerHTML = _0x15004a == 4 ? langMap.moderate : "50%", _0xb2fb5f(_0x355df7, _0x262a0b, "0.5")) : (_0x3effaf > _0x5b297b || _0x3effaf == _0x5b297b) && _0x5b297b < 55 && (_0x5b297b = 0, _0x45f53e.style.left = _0x5b297b + "px", $(_0x45f53e).parent(".dragCon").find(".blueLine").css("width", "0%"), _0x45f53e.parentNode.parentNode.children[1].innerHTML = _0x15004a == 4 ? langMap.sLow : "0%", _0xb2fb5f(_0x355df7, _0x262a0b, "0"));
              });
              document.addEventListener("mousemove", function (_0x39346f) {
                _0x45f53e = document.getElementById(_0x15004a);
                _0x77ef6f && (_0x5b297b = _0x39346f.clientX - _0x24f4ce, _0x5b297b <= 0 ? (_0x5b297b = 0, _0x45f53e.style.left = _0x5b297b + "px", $(_0x45f53e).parent(".dragCon").find(".blueLine").css("width", "0%"), _0x45f53e.parentNode.parentNode.children[1].innerHTML = _0x15004a == 4 ? langMap.sLow : _0x15004a == 1 ? "50%" : "0%") : _0x5b297b >= 110 ? (_0x5b297b = 110, _0x45f53e.style.left = _0x5b297b + "px", $(_0x45f53e).parent(".dragCon").find(".blueLine").css("width", "100%"), _0x45f53e.parentNode.parentNode.children[1].innerHTML = _0x15004a == 4 ? langMap.sHigh : "100%") : (_0x45f53e.style.left = _0x5b297b + "px", $(_0x45f53e).parent(".dragCon").find(".blueLine").css("width", parseFloat(_0x5b297b / 110) * 100 + "%")));
              });
              $(".dragClick").click(function (_0x9c6005) {
                var _0x8774d9 = $(this).parents(".rightbox").offset().left;
                var _0x42855b = _0x9c6005.pageX - _0x8774d9;
                var _0x566e46 = $(this).parents(".rightbox").find(".dragCircle").css("left");
                var _0x1a0a9c = parseInt(_0x566e46);
                var _0x3bfd17 = $(this).parent(".dragCon").find(".dragCircle").attr("id");
                var _0x154ec4 = document.getElementById(_0x3bfd17);
                var _0x43de25 = _0x494209("video");
                _0x77ef6f = false;
                var _0x19b9cf = "";
                var _0x4d2032 = "";
                _0x3bfd17 == "1" ? _0x4d2032 = "textOpacity" : _0x3bfd17 == "2" ? _0x4d2032 = "backgroundOpacity" : _0x3bfd17 == 3 ? _0x4d2032 = "windowOpacity" : _0x3bfd17 == 4 && (_0x4d2032 = "subPosition");
                if (_0x42855b > _0x1a0a9c) {
                  if (_0x3bfd17 == 1) {
                    _0x42855b < 55 ? ($(this).parent(".dragCon").find(".dragCircle").css("left", "0px"), $(this).parent(".dragCon").find(".blueLine").css("width", "0%"), $(this).parents(".dragBx").find(".dragFont").text("50%"), _0xb2fb5f(_0x43de25, _0x4d2032, "0.5")) : _0x42855b > 55 && ($(this).parent(".dragCon").find(".dragCircle").css("left", "110px"), $(this).parent(".dragCon").find(".blueLine").css("width", "100%"), $(this).parents(".dragBx").find(".dragFont").text("100%"), _0xb2fb5f(_0x43de25, _0x4d2032, "1"));
                    return;
                  }
                  _0x42855b < 70 ? ($(this).parent(".dragCon").find(".dragCircle").css("left", "55px"), _0x19b9cf = _0x3bfd17 == 4 ? langMap.moderate : "50%", $(this).parents(".dragBx").find(".dragFont").text(_0x19b9cf), $(this).parents(".dragBx").find(".zmdragFont").text(_0x19b9cf), $(_0x154ec4).parent(".dragCon").find(".blueLine").css("width", "55%"), _0xb2fb5f(_0x43de25, _0x4d2032, "0.5")) : ($(this).parent(".dragCon").find(".dragCircle").css("left", "110px"), _0x19b9cf = _0x3bfd17 == 4 ? langMap.sHigh : "100%", $(this).parents(".dragBx").find(".dragFont").text(_0x19b9cf), $(this).parents(".dragBx").find(".zmdragFont").text(_0x19b9cf), $(_0x154ec4).parent(".dragCon").find(".blueLine").css("width", "100%"), _0xb2fb5f(_0x43de25, _0x4d2032, "1"));
                } else {
                  if (_0x3bfd17 == 1) {
                    _0x42855b < 55 ? ($(this).parent(".dragCon").find(".dragCircle").css("left", "0px"), $(this).parent(".dragCon").find(".blueLine").css("width", "0%"), $(this).parents(".dragBx").find(".dragFont").text("50%"), _0xb2fb5f(_0x43de25, _0x4d2032, "0.5")) : _0x42855b > 55 && ($(this).parent(".dragCon").find(".dragCircle").css("left", "110px"), $(this).parent(".dragCon").find(".blueLine").css("width", "100%"), $(this).parents(".dragBx").find(".dragFont").text("100%"), _0xb2fb5f(_0x43de25, _0x4d2032, "1"));
                    return;
                  }
                  _0x42855b < 55 ? ($(this).parent(".dragCon").find(".dragCircle").css("left", "0px"), _0x19b9cf = _0x3bfd17 == 4 ? langMap.sLow : "0%", $(this).parents(".dragBx").find(".dragFont").text(_0x19b9cf), $(this).parents(".dragBx").find(".zmdragFont").text(_0x19b9cf), $(_0x154ec4).parent(".dragCon").find(".blueLine").css("width", "0%"), _0xb2fb5f(_0x43de25, _0x4d2032, "0")) : ($(this).parent(".dragCon").find(".dragCircle").css("left", "55px"), _0x19b9cf = _0x3bfd17 == 4 ? langMap.moderate : "50%", $(this).parents(".dragBx").find(".dragFont").text(_0x19b9cf), $(this).parents(".dragBx").find(".zmdragFont").text(_0x19b9cf), $(_0x154ec4).parent(".dragCon").find(".blueLine").css("width", "55%"), _0xb2fb5f(_0x43de25, _0x4d2032, "0.5"));
                }
              });
            }
            setTimeout(function () {
              var _0x23542c = _0x17fa91.textTracks();
              _0xa825e3 == 1 ? _0x23542c && _0x23542c[_0x519e1d] ? (_0x23542c[_0x519e1d].mode = "showing", _0x467e18 = _0x23542c[_0x519e1d]) : _0x23542c && _0x23542c[0] && (_0x23542c[0].mode = "showing", _0x467e18 = _0x23542c[0]) : _0x23542c && _0x23542c[0] && (_0x23542c[0].mode = "showing", _0x467e18 = _0x23542c[0]);
            }, 500);
          }
        });
        var _0x45f406 = _0x17fa91.textTrackSettings;
        _0x45f406.setValues({
          backgroundColor: "#000",
          backgroundOpacity: "0",
          edgeStyle: "uniform"
        });
        _0x45f406.updateDisplay();
        _0x176c73 = _0x45f406.getValues();
        _0x3ec270 = $(".vjs-text-track-display>div>div>div").css("font-size");
        Ext.select(".vjs-self-setting .video_playline li").on("click", function (_0x588ff3) {
          Ext.select(".vjs-self-setting .video_playline li").removeCls("active");
          var _0x346282 = Ext.get(this).getAttribute("index");
          _0x17fa91.selectCDN(parseInt(_0x346282));
          Ext.get(this).addCls("active");
        });
        Ext.select(".vjs-self-setting .video_resolution li").on("click", function (_0xde3a80) {
          Ext.select(".vjs-self-setting .video_resolution li").removeCls("active");
          var _0x45957e = Ext.get(this).getAttribute("index");
          _0x17fa91.selectResolution(parseInt(_0x45957e));
          Ext.get(this).addCls("active");
        });
      });
    }
    _0x3cafa1 = function (_0x2d224a) {
      var _0x468cdf = this;
      var _0x58fce0 = document.createElement("span");
      _0x494209.dom.addClass(_0x58fce0, "vjs-setting-button-label");
      var _0x373e0e = new _0x1fdef5(_0x468cdf, _0x2d224a, _0x58fce0);
      _0x494209.dom.addClass(_0x373e0e.el(), "vjs-self-setting");
      _0x373e0e.show();
      _0x468cdf.ready(function () {
        _0x468cdf.controlBar.videoSelfSetting = _0x468cdf.controlBar.el_.insertBefore(_0x373e0e.el_, _0x468cdf.controlBar.getChild("fullscreenToggle").el_);
        _0x468cdf.controlBar.videoSelfSetting.dispose = function () {
          this.parentNode.removeChild(this);
        };
        Ext.select(".vjs-subs-caps-button").setStyle("display", "none");
        _0x556c29(_0x468cdf, _0x2d224a);
      });
    };
    _0x494209.registerPlugin("videoSelfSetting", _0x3cafa1);
  })(window, videojs);
})();
Ext.define("ans.videojs.ErrorDisplay", {
  extend: "Ext.Component",
  xtype: "vjserrdisplay",
  cls: "ans-vjserrdisplay",
  renderTpl: ["<div class=\"ans-vjserrdisplay-title\">{errorMsg}</div>", "<ul class=\"ans-vjserrdisplay-opts\">", "您可以尝试其他线路: ", "<tpl for=\"playlines\">", "<li class=\"ans-vjserrdisplay-opt\"><label>", "<input type=\"radio\" name=\"ans-vjserrdisplay-opt\" {[xindex-1 === parent.selectedIndex ? \"checked disabled\":\"\"]}>", "{label}", "</label></li>", "</tpl> ", "</ul>"],
  renderSelectors: {
    errorMsgEl: "div.ans-vjserrdisplay-title"
  },
  afterRender: function () {
    var _0x29b350 = this;
    _0x29b350.callParent(arguments);
    var _0x579755 = Ext.query("input", _0x29b350.el.dom);
    Ext.each(_0x579755, function (_0x370826, _0x365ec8) {
      Ext.fly(_0x370826).on("click", function () {
        _0x29b350.onSelected(_0x365ec8);
      });
    });
    try {
      typeof createVideoTask === "function" ? createVideoTask() : console.log("createVideoTask函数不存在！");
    } catch (_0x13df39) {}
    try {
      if (typeof aplus_queue != "undefined") {
        var _0x221f51 = parent.AttachmentSetting;
        if (_0x221f51) {
          var _0x136474 = _0x221f51.aplus_video_id;
          var _0x562b5d = _0x221f51.aplus_resource_id;
          var _0x5e7ca3 = _0x221f51.knowledgename;
          var _0x5af1b4 = _0x221f51.coursename;
          aplus_queue.push({
            action: "aplus.record",
            arguments: ["pybk_error", "OTHER", {
              video_name: _0x5e7ca3,
              video_id: _0x136474,
              resource_id: _0x562b5d,
              resource_name: _0x5af1b4
            }]
          });
        }
      }
    } catch (_0x4a7252) {}
  },
  setErrorMsg: function (_0xe4f7f6) {
    Ext.fly(this.errorMsgEl).setHTML(_0xe4f7f6);
  }
});
Ext.define("ans.videojs.ErrorNote", {
  extend: "Ext.Component",
  cls: "ans-vjserrdisplay",
  renderTpl: ["<div class=\"ans-vjserrdisplay-title\">播放出现异常。</div>"]
});
(function () {
  var _0x515a61 = videojs.getComponent("ErrorDisplay");
  var _0x5922d9 = videojs.extend(_0x515a61, {
    constructor: function (_0x4e0558, _0x424047) {
      _0x515a61.call(this, _0x4e0558, _0x424047);
    },
    colse: function () {
      _0x515a61.prototype.colse.call(this);
      me.ansErrorDisplay && (me.ansErrorDisplay.destroy(), me.ansErrorDisplay = null);
    },
    fill: function () {
      _0x515a61.prototype.fill.call(this);
      var _0x536ce4 = this;
      var _0x3c801a = _0x536ce4.player_;
      var _0x2ca96a = _0x3c801a.options_.playlines;
      var _0x168234 = Ext.query(".vjs-modal-dialog-content", _0x536ce4.el_)[0];
      _0x536ce4.ansErrorDisplay && (_0x536ce4.ansErrorDisplay.destroy(), delete _0x536ce4.ansErrorDisplay);
      if (!_0x3c801a.selectCDN || !_0x2ca96a) {
        _0x536ce4.ansErrorDisplay = Ext.create("ans.videojs.ErrorNote", {
          renderTo: _0x536ce4.el_
        });
        return;
      }
      var _0xd91022 = _0x3c801a.currentPlayline();
      var _0x37f5a0 = 0;
      Ext.each(_0x2ca96a, function (_0x2d5b75, _0x4a02e1) {
        _0xd91022 == _0x2d5b75 && (_0x37f5a0 = _0x4a02e1);
      });
      _0x536ce4.ansErrorDisplay = Ext.create("ans.videojs.ErrorDisplay", {
        renderTo: _0x536ce4.el_,
        onSelected: function (_0x5568d8) {
          _0x3c801a.selectCDN(_0x5568d8);
          _0x536ce4.close();
          Ext.select(".vjs-self-setting .video_playline li").removeCls("active");
          Ext.fly(Ext.select(".vjs-self-setting .video_playline li").elements[_0x5568d8]).addCls("active");
        },
        renderData: {
          playlines: _0x2ca96a,
          errorMsg: _0x536ce4.content(),
          selectedIndex: _0x37f5a0
        }
      });
    }
  });
  videojs.registerComponent("ErrorDisplay", _0x5922d9);
})();
(function () {
  var _0x59d10b = null;
  typeof window.videojs === "undefined" && typeof require === "function" ? _0x59d10b = require("video.js") : _0x59d10b = window.videojs;
  (function (_0x6772e6, _0x3018bf) {
    var _0x444840 = {};
    var _0x368600;
    var _0x5c8e85 = {};
    var _0x448e46 = {};
    function _0x1cdd36(_0x6d3db6, _0x206217, _0x3bcab6, _0xa3112b) {
      _0x5c8e85 = {
        label: _0x3bcab6,
        sources: _0x206217
      };
      if (typeof _0xa3112b === "function") {
        return _0xa3112b(_0x6d3db6, _0x206217, _0x3bcab6);
      }
      _0x6d3db6.src(_0x206217.map(function (_0x217ebd) {
        return {
          src: _0x217ebd.src,
          type: _0x217ebd.type,
          res: _0x217ebd.res
        };
      }));
      return _0x6d3db6;
    }
    var _0x385193 = _0x3018bf.getComponent("MenuItem");
    var _0x215153 = _0x3018bf.extend(_0x385193, {
      constructor: function (_0x4e8b43, _0x37de31, _0x218bb8, _0xb54d3) {
        this.onClickListener = _0x218bb8;
        this.label = _0xb54d3;
        _0x385193.call(this, _0x4e8b43, _0x37de31);
        this.src = _0x37de31.src;
        this.on("click", this.onClick);
        this.on("touchstart", this.onClick);
        _0x37de31.initialySelected && (this.showAsLabel(), this.selected(true), this.addClass("vjs-selected"));
      },
      showAsLabel: function () {
        this.label && (this.label.innerHTML = this.options_.label);
      },
      onClick: function (_0x3d4a28) {
        this.onClickListener(this);
        var _0x321202 = this.player_.currentTime();
        var _0xfebb38 = this.player_.paused();
        this.showAsLabel();
        this.addClass("vjs-selected");
        !_0xfebb38 && this.player_.bigPlayButton.hide();
        typeof _0x3d4a28 !== "function" && typeof this.options_.customSourcePicker === "function" && (_0x3d4a28 = this.options_.customSourcePicker);
        var _0x3eda06 = "loadeddata";
        this.player_.techName_ !== "Youtube" && this.player_.preload() === "none" && this.player_.techName_ !== "Flash" && (_0x3eda06 = "timeupdate");
        _0x1cdd36(this.player_, this.src, this.options_.label, _0x3d4a28).one(_0x3eda06, function () {
          var _0x4b177f = this.player_;
          _0x4b177f.switchStatus = true;
          _0x4b177f.currentTime(_0x321202);
          !_0xfebb38 && _0x4b177f.play();
          _0x4b177f.trigger("resolutionchange");
        });
      }
    });
    _0x3018bf.registerComponent("ResolutionMenuItem", _0x215153);
    var _0x507373 = _0x3018bf.getComponent("MenuButton");
    var _0x27595a = _0x3018bf.extend(_0x507373, {
      constructor: function (_0x49f7bb, _0x3ac3b0, _0x309b30, _0x1952b3) {
        this.sources = _0x3ac3b0.sources;
        this.label = _0x1952b3;
        this.label.innerHTML = _0x3ac3b0.initialySelectedLabel;
        _0x507373.call(this, _0x49f7bb, _0x3ac3b0, _0x309b30);
        this.controlText("Quality");
        if (_0x309b30.dynamicLabel) {
          this.el().appendChild(_0x1952b3);
        } else {
          var _0x1ca41f = document.createElement("span");
          _0x3018bf.dom.addClass(_0x1ca41f, "vjs-resolution-button-staticlabel");
          this.el().appendChild(_0x1ca41f);
        }
      },
      createItems: function () {
        var _0x2e1ac8 = [];
        var _0x4012c7 = this.sources && this.sources.label || {};
        var _0x55af83 = function (_0xfd7a69) {
          _0x2e1ac8.map(function (_0x4edc45) {
            _0x4edc45.selected(_0x4edc45 === _0xfd7a69);
            _0x4edc45.removeClass("vjs-selected");
          });
        };
        for (var _0x355472 in _0x4012c7) {
          _0x4012c7.hasOwnProperty(_0x355472) && (_0x2e1ac8.push(new _0x215153(this.player_, {
            label: _0x355472,
            src: _0x4012c7[_0x355472],
            initialySelected: _0x355472 === this.options_.initialySelectedLabel,
            customSourcePicker: this.options_.customSourcePicker
          }, _0x55af83, this.label)), _0x448e46[_0x355472] = _0x2e1ac8[_0x2e1ac8.length - 1]);
        }
        return _0x2e1ac8;
      }
    });
    _0x368600 = function (_0x5943e4) {
      var _0x507bac = _0x3018bf.mergeOptions(_0x444840, _0x5943e4);
      var _0x2a5f46 = this;
      var _0x2aeb91 = document.createElement("span");
      var _0x2cb4fb = {};
      _0x3018bf.dom.addClass(_0x2aeb91, "vjs-resolution-button-label");
      _0x2a5f46.updateSrc = function (_0xfb1550) {
        if (!_0xfb1550) {
          return _0x2a5f46.src();
        }
        _0x2a5f46.controlBar.resolutionSwitcher && (_0x2a5f46.controlBar.resolutionSwitcher.dispose(), delete _0x2a5f46.controlBar.resolutionSwitcher);
        _0xfb1550 = _0xfb1550.sort(_0x572aab);
        _0x2cb4fb = _0x23b207(_0xfb1550);
        var _0x43eec6 = _0x35b5ca(_0x2cb4fb, _0xfb1550);
        var _0x10a311 = new _0x27595a(_0x2a5f46, {
          sources: _0x2cb4fb,
          initialySelectedLabel: _0x43eec6.label,
          initialySelectedRes: _0x43eec6.res,
          customSourcePicker: _0x507bac.customSourcePicker
        }, _0x507bac, _0x2aeb91);
        _0x2a5f46.selectResolution = function (_0x2e06b1) {
          _0x10a311.items[_0x2e06b1].onClick(_0x507bac.customSourcePicker);
          _0x2a5f46.play();
        };
        _0x3018bf.dom.addClass(_0x10a311.el(), "vjs-resolution-button");
        _0x2a5f46.controlBar.resolutionSwitcher = _0x2a5f46.controlBar.el_.insertBefore(_0x10a311.el_, _0x2a5f46.controlBar.getChild("fullscreenToggle").el_);
        _0x2a5f46.controlBar.resolutionSwitcher.dispose = function () {
          this.parentNode.removeChild(this);
        };
        Ext.select(".vjs-resolution-button").setStyle("display", "none");
        return _0x1cdd36(_0x2a5f46, _0x43eec6.sources, _0x43eec6.label, _0x507bac.customSourcePicker);
      };
      _0x2a5f46.currentResolution = function (_0x3e0b49, _0x242a18) {
        if (_0x3e0b49 == null) {
          return _0x5c8e85;
        }
        _0x448e46[_0x3e0b49] != null && _0x448e46[_0x3e0b49].onClick(_0x242a18);
        return _0x2a5f46;
      };
      _0x2a5f46.getGroupedSrc = function () {
        return _0x2cb4fb;
      };
      function _0x572aab(_0x56d89d, _0x52be08) {
        if (!_0x56d89d.res || !_0x52be08.res) {
          return 0;
        }
        return +_0x52be08.res - +_0x56d89d.res;
      }
      function _0x23b207(_0x1c2378) {
        var _0x2f7ae4 = {
          label: {},
          res: {},
          type: {}
        };
        _0x1c2378.map(function (_0x26aaef) {
          _0x922660(_0x2f7ae4, "label", _0x26aaef);
          _0x922660(_0x2f7ae4, "res", _0x26aaef);
          _0x922660(_0x2f7ae4, "type", _0x26aaef);
          _0x236cbd(_0x2f7ae4, "label", _0x26aaef);
          _0x236cbd(_0x2f7ae4, "res", _0x26aaef);
          _0x236cbd(_0x2f7ae4, "type", _0x26aaef);
        });
        return _0x2f7ae4;
      }
      function _0x922660(_0x247eaa, _0x560b65, _0x232822) {
        _0x247eaa[_0x560b65][_0x232822[_0x560b65]] == null && (_0x247eaa[_0x560b65][_0x232822[_0x560b65]] = []);
      }
      function _0x236cbd(_0x36e186, _0x477fb9, _0x1e03e8) {
        _0x36e186[_0x477fb9][_0x1e03e8[_0x477fb9]].push(_0x1e03e8);
      }
      function _0x35b5ca(_0x215d8f, _0x1271b0) {
        var _0x58be4c = _0x507bac.default;
        var _0x4b39bb = "";
        _0x58be4c === "high" ? (_0x58be4c = _0x1271b0[0].res, _0x4b39bb = _0x1271b0[0].label) : _0x58be4c === "low" || _0x58be4c == null || !_0x215d8f.res[_0x58be4c] ? (_0x58be4c = _0x1271b0[_0x1271b0.length - 1].res, _0x4b39bb = _0x1271b0[_0x1271b0.length - 1].label) : _0x215d8f.res[_0x58be4c] && (_0x4b39bb = _0x215d8f.res[_0x58be4c][0].label);
        return {
          res: _0x58be4c,
          label: _0x4b39bb,
          sources: _0x215d8f.res[_0x58be4c]
        };
      }
      _0x2a5f46.ready(function () {
        _0x2a5f46.options_.sources.length > 0 && _0x2a5f46.setTimeout(function () {
          _0x2a5f46.updateSrc(_0x2a5f46.options_.sources);
        }, 1);
      });
    };
    _0x3018bf.registerPlugin("videoJsResolutionSwitcher", _0x368600);
  })(window, _0x59d10b);
})();
(function () {
  (function (_0x1e9e63, _0x31a370) {
    var _0x5cc60f = {};
    var _0x325ad0;
    var _0x844b21 = {};
    var _0x502bf1 = {};
    function _0x41c7d0(_0x1fa813, _0x406a5b, _0x4e5e04, _0x4ee0e3) {
      _0x844b21 = _0x406a5b;
      if (typeof _0x4ee0e3 === "function") {
        return _0x4ee0e3(_0x1fa813, _0x406a5b, _0x4e5e04);
      }
      return _0x1fa813;
    }
    var _0x1086e5 = _0x31a370.getComponent("ResolutionMenuItem");
    var _0x33ba0e = _0x31a370.extend(_0x1086e5, {
      onClick: function (_0x336f09) {
        this.onClickListener(this);
        var _0x76eaae = this.player_.currentTime();
        var _0x565688 = this.player_.paused();
        this.showAsLabel();
        this.addClass("vjs-selected");
        !_0x565688 && this.player_.bigPlayButton.hide();
        typeof _0x336f09 !== "function" && typeof this.options_.customSourcePicker === "function" && (_0x336f09 = this.options_.customSourcePicker);
        var _0x496020 = "loadeddata";
        this.player_.techName_ !== "Youtube" && this.player_.preload() === "none" && this.player_.techName_ !== "Flash" && (_0x496020 = "timeupdate");
        var _0x503d44 = _0x41c7d0(this.player_, this.src, this.options_.label, _0x336f09);
        _0x503d44 && _0x503d44.one(_0x496020, function () {
          _0x503d44.switchStatus = true;
          _0x503d44.currentTime(_0x76eaae);
          !_0x565688 && _0x503d44.play();
          _0x503d44.trigger("playlinechange");
        });
      }
    });
    var _0x46eae8 = _0x31a370.getComponent("MenuButton");
    var _0x2a3cd8 = _0x31a370.extend(_0x46eae8, {
      constructor: function (_0x56c932, _0x2c9921, _0x31bcdf, _0x5f2094) {
        this.playlines = _0x2c9921.playlines;
        this.label = _0x5f2094;
        this.label.innerHTML = _0x2c9921.initialySelectedLabel;
        _0x46eae8.call(this, _0x56c932, _0x2c9921, _0x31bcdf);
        this.controlText("Playline");
        if (_0x31bcdf.dynamicLabel) {
          this.el().appendChild(_0x5f2094);
        } else {
          var _0x227e26 = document.createElement("span");
          _0x31a370.addClass(_0x227e26, "vjs-resolution-button-staticlabel");
          this.el().appendChild(_0x227e26);
        }
      },
      createItems: function () {
        var _0x25ac47 = [];
        var _0x387998 = this.playlines || [];
        var _0x412dd9 = function (_0x2c1acc) {
          _0x25ac47.map(function (_0x5974fa) {
            _0x5974fa.selected(_0x5974fa === _0x2c1acc);
            _0x5974fa.removeClass("vjs-selected");
          });
        };
        for (var _0x580ca5 = 0; _0x580ca5 < _0x387998.length; _0x580ca5++) {
          var _0x15154b = _0x387998[_0x580ca5].label;
          _0x25ac47.push(new _0x33ba0e(this.player_, {
            label: _0x15154b,
            src: _0x387998[_0x580ca5],
            initialySelected: _0x15154b === this.options_.initialySelectedLabel,
            customSourcePicker: this.options_.customSourcePicker
          }, _0x412dd9, this.label));
          _0x502bf1[_0x15154b] = _0x25ac47[_0x25ac47.length - 1];
        }
        return _0x25ac47;
      }
    });
    _0x325ad0 = function (_0x2dab2d) {
      var _0x1d957e = _0x31a370.mergeOptions(_0x154ca1, _0x2dab2d);
      var _0x363192 = this;
      var _0x421e7a = document.createElement("span");
      var _0x19f0ab = _0x363192.options_.playlines;
      var _0x154ca1 = _0x1d957e.defaults;
      _0x31a370.dom.addClass(_0x421e7a, "vjs-resolution-button-label");
      var _0x4fe50d = new _0x2a3cd8(_0x363192, {
        playlines: _0x19f0ab,
        initialySelectedLabel: _0x154ca1 ? _0x154ca1.label : _0x19f0ab[0].label,
        initialySelectedUrl: _0x154ca1 ? _0x154ca1.url : _0x19f0ab[0].url,
        customSourcePicker: _0x1d957e.customSourcePicker
      }, _0x1d957e, _0x421e7a);
      _0x31a370.dom.addClass(_0x4fe50d.el(), "vjs-resolution-button");
      _0x31a370.dom.addClass(_0x4fe50d.el(), "vjs-playline-button");
      _0x4fe50d.show();
      _0x363192.selectCDN = function (_0x3107c6) {
        _0x4fe50d.items[_0x3107c6].onClick(_0x1d957e.customSourcePicker);
        _0x363192.play();
      };
      _0x19f0ab.length > 0 && (_0x154ca1 ? _0x844b21 = _0x154ca1 : _0x844b21 = _0x19f0ab[0]);
      _0x363192.currentPlayline = function () {
        return _0x844b21;
      };
      _0x363192.ready(function () {
        _0x363192.controlBar.videoJsPlayLine = _0x363192.controlBar.el_.insertBefore(_0x4fe50d.el_, _0x363192.controlBar.getChild("fullscreenToggle").el_);
        _0x363192.controlBar.videoJsPlayLine.dispose = function () {
          this.parentNode.removeChild(this);
        };
        Ext.select(".vjs-resolution-button").setStyle("display", "none");
      });
    };
    _0x31a370.registerPlugin("videoJsPlayLine", _0x325ad0);
  })(window, videojs);
})();
Ext.define("ans.AudioJs", {
  videoJs: null,
  mixins: {
    observable: "Ext.util.Observable"
  },
  constructor: function (_0x5c38fa) {
    _0x5c38fa = _0x5c38fa || {};
    var _0x476c2f = this;
    _0x476c2f.addEvents(["seekstart"]);
    _0x476c2f.mixins.observable.constructor.call(_0x476c2f, _0x5c38fa);
    var _0x5773be = videojs(_0x5c38fa.videojs, _0x476c2f.params2VideoOpt(_0x5c38fa.params), function () {});
    _0x5773be.duration(_0x5c38fa.params.duration);
    Ext.fly(_0x5c38fa.videojs).on("contextmenu", function (_0x440231) {
      _0x440231.preventDefault();
    });
    Ext.fly(_0x5c38fa.videojs).on("keydown", function (_0x3d4c0d) {
      (_0x3d4c0d.keyCode == 32 || _0x3d4c0d.keyCode == 37 || _0x3d4c0d.keyCode == 39) && _0x3d4c0d.preventDefault();
      _0x3d4c0d.keyCode == 32 && (_0x5773be.paused() ? _0x5773be.play() : _0x5773be.pause());
    });
  },
  params2VideoOpt: function (_0x134d78) {
    var _0x4b88dc = [];
    !_0x134d78.rootPath && (_0x134d78.rootPath = "");
    _0x134d78.http && _0x4b88dc.push({
      src: _0x134d78.http,
      type: "audio/mp3"
    });
    var _0x5969a2 = function (_0x53a11c, _0x22391f, _0x362287) {
      var _0x3a8350 = this;
      !_0x3a8350.logCount && (_0x3a8350.logCount = 0);
      videojs.xhr({
        uri: _0x22391f,
        headers: {
          "Content-Type": "application/json"
        }
      }, function (_0x30a9d1, _0x5c0020) {
        _0x3a8350.logCount++;
        if (_0x5c0020.statusCode == 200) {
          _0x3a8350.logCount = 0;
          if (_0x5c0020.body.indexOf("isPassed") < 0) {
            window.parent && window.parent.location.reload();
            return;
          }
          eval("var d=" + _0x5c0020.body);
          d.isPassed && _0x362287();
          return;
        }
        _0x3a8350.logCount >= 4 && (_0x3a8350.logCount = 0, _0x53a11c.pause(), _0x5c0020.statusCode != 0 ? alert("服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e: " + _0x5c0020.statusCode + ")") : alert("您的网络不稳定，请您稍后继续..."));
      });
    };
    var _0x30905d = function (_0x14bfae, _0x1df791, _0x3389bd, _0x1c392) {
      if (!_0x134d78.reportUrl) {
        return;
      }
      if (_0x134d78.isFiled == 1 || _0x134d78.state == 1) {
        return;
      }
      var _0x419248 = "[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]";
      var _0x31050a = (_0x134d78.startTime || "0") + "_" + (_0x134d78.endTime || _0x134d78.duration);
      var _0x351c3b = 0;
      var _0x2dcc9e;
      _0x3389bd.toString().indexOf("-") != -1 ? (_0x2dcc9e = _0x3389bd.split("-"), _0x2dcc9e.length == 2 && (_0x351c3b = parseInt(_0x2dcc9e[1]) * 1000)) : _0x351c3b = _0x3389bd * 1000;
      if (_0x351c3b == _0x134d78.duration * 1000 && _0x1df791 == 2) {
        return;
      }
      var _0x310e5e = Ext.String.format(_0x419248, _0x134d78.clazzId, _0x134d78.userid, _0x134d78.jobid ? _0x134d78.jobid : "", _0x134d78.objectId, _0x351c3b, "d_yHJ!$pdA~5", _0x134d78.duration * 1000, _0x31050a);
      var _0x404299 = [_0x134d78.reportUrl, "/", _0x134d78.dtoken, "?clazzId=", _0x134d78.clazzId, "&playingTime=", _0x3389bd, "&duration=", _0x134d78.duration, "&clipTime=", _0x31050a, "&objectId=", _0x134d78.objectId, "&otherInfo=", _0x134d78.otherInfo, "&jobid=", _0x134d78.jobid, "&userid=", _0x134d78.userid, "&isdrag=", _0x1df791, "&view=pc", "&enc=", md5(_0x310e5e), "&rt=", _0x134d78.rt, "&dtype=Audio", "&_t=", new Date().getTime()].join("");
      _0x5969a2(_0x14bfae, _0x404299, _0x1c392);
    };
    return {
      language: "zh-CN",
      controls: true,
      preload: "none",
      bigPlayButton: false,
      sources: _0x4b88dc,
      textTrackDisplay: true,
      controlBar: {
        volumePanel: {
          inline: true
        },
        children: ["playToggle", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "volumePanel"]
      },
      plugins: {
        audioNote: {
          title: _0x134d78.filename
        },
        studyControl: {
          enableSwitchWindow: 1
        },
        seekBarControl: {
          headOffset: _0x134d78.headOffset,
          enableFastForward: _0x134d78.enableFastForward,
          isSendLog: !!parent.AttachmentSetting && _0x134d78.control,
          reportTimeInterval: _0x134d78.reportTimeInterval,
          sourcePlayer: "audio",
          sendLog: function (_0x4d01d7, _0x1123fd, _0xc8cc8a) {
            if (this.isSendLog !== true) {
              return;
            }
            var _0x2b77fd = 0;
            switch (_0x1123fd) {
              case "playing":
                _0x2b77fd = 0;
                break;
              case "drag":
                _0x2b77fd = 1;
                break;
              case "play":
                _0x2b77fd = 3;
                break;
              case "pause":
                _0x2b77fd = 2;
                break;
              case "ended":
                _0x2b77fd = 4;
                break;
            }
            _0x30905d(_0x4d01d7, _0x2b77fd, _0xc8cc8a, function () {
              window.proxy_completed && window.proxy_completed();
            });
          }
        }
      }
    };
  }
});
Ext.define("ans.AudioJsNew", {
  videoJs: null,
  mixins: {
    observable: "Ext.util.Observable"
  },
  constructor: function (_0x52ed4d) {
    _0x52ed4d = _0x52ed4d || {};
    var _0x3229e5 = this;
    _0x3229e5.addEvents(["seekstart"]);
    _0x3229e5.mixins.observable.constructor.call(_0x3229e5, _0x52ed4d);
    var _0x4fb781 = videojs(_0x52ed4d.videojs, _0x3229e5.params2VideoOpt(_0x52ed4d.params), function () {});
    var _0x1b0175 = function (_0x24b4a5) {
      var _0x2e5f2b = _0x24b4a5 / 3600;
      var _0x28731c = Math.floor(_0x2e5f2b);
      var _0x1bdb08 = _0x24b4a5 % 3600 / 60;
      var _0x2ccc83 = Math.floor(_0x1bdb08);
      var _0x4aa56f = Math.ceil(_0x24b4a5 % 3600 % 60);
      _0x4aa56f > 59 && (_0x4aa56f = 0, _0x2ccc83 = Math.ceil(_0x1bdb08));
      _0x2ccc83 > 59 && (_0x2ccc83 = 0, _0x28731c = Math.ceil(_0x2e5f2b));
      return (_0x28731c == 0 ? "" : _0x28731c > 0 && _0x28731c.toString().length < 2 ? "0" + _0x28731c + ":" : _0x28731c + ":") + (_0x2ccc83.toString().length < 2 ? "0" + _0x2ccc83 : _0x2ccc83) + ":" + (_0x4aa56f.toString().length < 2 ? "0" + _0x4aa56f : _0x4aa56f);
    };
    _0x4fb781.duration(_0x52ed4d.params.duration);
    _0x52ed4d.params.headOffset && (_0x4fb781.currentTime(_0x52ed4d.params.headOffset), Ext.select(".vjs-current-time-display").setHTML(_0x1b0175(_0x52ed4d.params.headOffset)));
    _0x52ed4d.params.control && _0x52ed4d.params.doublespeed != 1 && !_0x52ed4d.params.isPass && _0x4fb781.controlBar.getChild("playbackRateMenuButton").disable();
    $(_0x4fb781.controlBar.progressControl.el_).find(".vjs-play-progress").append("<i></i>");
    _0x4fb781.controlBar.addChild("button", {
      el: videojs.createEl("button", {
        id: "vjs-fast-replay-button",
        title: langMap.back10,
        className: "vjs-icon-previous-item vjs-fast-replay-button vjs-control vjs-button",
        innerHTML: "<span aria-hidden=\"true\" class=\"vjs-icon-placeholder\"></span><span class=\"vjs-control-text\" aria-live=\"polite\">快退</span>",
        onclick: function () {
          (_0x52ed4d.params.enableFastForward == 1 || _0x4fb781.switchStatus || _0x4fb781.finished) && _0x4fb781.currentTime(_0x4fb781.currentTime() - 10);
        }
      })
    });
    _0x4fb781.controlBar.addChild("button", {
      text: "快进",
      el: videojs.createEl("button", {
        id: "vjs-fast-forward-button",
        title: langMap.fast10,
        className: "vjs-icon-next-item vjs-fast-forward-button vjs-control vjs-button",
        innerHTML: "<span aria-hidden=\"true\" class=\"vjs-icon-placeholder\"></span><span class=\"vjs-control-text\" aria-live=\"polite\">快进</span>",
        onclick: function () {
          (_0x52ed4d.params.enableFastForward == 1 || _0x4fb781.switchStatus || _0x4fb781.finished) && _0x4fb781.currentTime(_0x4fb781.currentTime() + 10);
        }
      })
    });
    _0x52ed4d.params.control && _0x52ed4d.params.enableFastForward != 1 && !_0x4fb781.switchStatus && !_0x4fb781.finished && (_0x4fb781.controlBar.getChildById("vjs-fast-replay-button").disable(), _0x4fb781.controlBar.getChildById("vjs-fast-forward-button").disable());
    Ext.fly(_0x52ed4d.videojs).on("contextmenu", function (_0x27cc2c) {
      _0x27cc2c.preventDefault();
    });
    Ext.fly(_0x52ed4d.videojs).on("keydown", function (_0x1e16c0) {
      (_0x1e16c0.keyCode == 32 || _0x1e16c0.keyCode == 37 || _0x1e16c0.keyCode == 39) && _0x1e16c0.preventDefault();
      _0x1e16c0.keyCode == 32 && (_0x4fb781.paused() ? _0x4fb781.play() : _0x4fb781.pause());
    });
  },
  params2VideoOpt: function (_0x4079be) {
    var _0x59ca33 = [];
    !_0x4079be.rootPath && (_0x4079be.rootPath = "");
    _0x4079be.http && _0x59ca33.push({
      src: _0x4079be.http,
      type: "audio/mp3"
    });
    var _0x24c2c7 = function (_0x552745, _0x4540bf, _0x2c2e88) {
      var _0x21a2a2 = this;
      !_0x21a2a2.logCount && (_0x21a2a2.logCount = 0);
      videojs.xhr({
        uri: _0x4540bf,
        headers: {
          "Content-Type": "application/json"
        }
      }, function (_0x27f402, _0x18e3b8) {
        _0x21a2a2.logCount++;
        if (_0x18e3b8.statusCode == 200) {
          _0x21a2a2.logCount = 0;
          if (_0x18e3b8.body.indexOf("isPassed") < 0) {
            window.parent && window.parent.location.reload();
            return;
          }
          eval("var d=" + _0x18e3b8.body);
          d.isPassed && (_0x552745.finished = true, _0x552745.controlBar.getChild("playbackRateMenuButton").enable(), _0x552745.controlBar.getChildById("vjs-fast-replay-button").enable(), _0x552745.controlBar.getChildById("vjs-fast-forward-button").enable(), _0x2c2e88());
          return;
        }
        _0x21a2a2.logCount >= 4 && (_0x21a2a2.logCount = 0, _0x552745.pause(), _0x18e3b8.statusCode != 0 ? alert("服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e: " + _0x18e3b8.statusCode + ")") : alert("您的网络不稳定，请您稍后继续..."));
      });
    };
    var _0x465031 = function (_0x19f0bf, _0x2c4b62, _0x5f1b6b, _0xc86b29) {
      if (!_0x4079be.reportUrl) {
        return;
      }
      if (_0x4079be.isFiled == 1 || _0x4079be.state == 1) {
        return;
      }
      var _0x17ce7f = "[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]";
      var _0x3eda01 = (_0x4079be.startTime || "0") + "_" + (_0x4079be.endTime || _0x4079be.duration);
      var _0x3efc36 = 0;
      var _0x30ce1e;
      _0x5f1b6b.toString().indexOf("-") != -1 ? (_0x30ce1e = _0x5f1b6b.split("-"), _0x30ce1e.length == 2 && (_0x3efc36 = parseInt(_0x30ce1e[1]) * 1000)) : _0x3efc36 = _0x5f1b6b * 1000;
      if (_0x3efc36 == _0x4079be.duration * 1000 && _0x2c4b62 == 2) {
        return;
      }
      var _0x7ec215 = Ext.String.format(_0x17ce7f, _0x4079be.clazzId, _0x4079be.userid, _0x4079be.jobid ? _0x4079be.jobid : "", _0x4079be.objectId, _0x3efc36, "d_yHJ!$pdA~5", _0x4079be.duration * 1000, _0x3eda01);
      var _0x3b8fa1 = [_0x4079be.reportUrl, "/", _0x4079be.dtoken, "?clazzId=", _0x4079be.clazzId, "&playingTime=", _0x5f1b6b, "&duration=", _0x4079be.duration, "&clipTime=", _0x3eda01, "&objectId=", _0x4079be.objectId, "&otherInfo=", _0x4079be.otherInfo, "&jobid=", _0x4079be.jobid, "&userid=", _0x4079be.userid, "&isdrag=", _0x2c4b62, "&view=pc", "&enc=", md5(_0x7ec215), "&rt=", _0x4079be.rt, "&dtype=Audio", "&_t=", new Date().getTime()].join("");
      _0x24c2c7(_0x19f0bf, _0x3b8fa1, _0xc86b29);
    };
    return {
      language: "zh-CN",
      controls: true,
      preload: "none",
      bigPlayButton: false,
      sources: _0x59ca33,
      textTrackDisplay: true,
      controlBar: {
        playToggle: true,
        children: ["playToggle", "currentTimeDisplay", "progressControl", "durationDisplay", {
          name: "playbackRateMenuButton",
          playbackRates: [0.5, 1, 1.25, 1.5, 2]
        }]
      },
      plugins: {
        audioNote: {
          title: _0x4079be.filename
        },
        studyControl: {
          enableSwitchWindow: 1
        },
        seekBarControl: {
          headOffset: _0x4079be.headOffset,
          enableFastForward: _0x4079be.enableFastForward,
          isSendLog: !!parent.AttachmentSetting && _0x4079be.control,
          reportTimeInterval: _0x4079be.reportTimeInterval,
          sourcePlayer: "audio",
          sendLog: function (_0x4b3d06, _0x3801eb, _0xffe19e) {
            if (this.isSendLog !== true) {
              return;
            }
            var _0x3ef2b6 = 0;
            switch (_0x3801eb) {
              case "playing":
                _0x3ef2b6 = 0;
                break;
              case "drag":
                _0x3ef2b6 = 1;
                break;
              case "play":
                _0x3ef2b6 = 3;
                break;
              case "pause":
                _0x3ef2b6 = 2;
                break;
              case "ended":
                _0x3ef2b6 = 4;
                break;
            }
            _0x465031(_0x4b3d06, _0x3ef2b6, _0xffe19e, function () {
              window.proxy_completed && window.proxy_completed();
            });
          }
        }
      }
    };
  }
});
Ext.define("ans.videojs.AudioNote", {
  extend: "Ext.Component",
  cls: "ans-audionote"
});
(function () {
  var _0x32e684 = videojs.getPlugin("plugin");
  var _0x57d92b = videojs.extend(_0x32e684, {
    constructor: function (_0x26147e, _0x3d2248) {
      _0x32e684.call(this, _0x26147e, _0x3d2248);
      Ext.create("ans.videojs.AudioNote", {
        renderTo: _0x26147e.el_,
        html: _0x3d2248.title
      });
    }
  });
  videojs.registerPlugin("audioNote", _0x57d92b);
})();