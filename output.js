//Sat Mar 22 2025 01:07:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
$(function () {
  function _0x1c72dc(_0x2ba890) {
    var _0xf79727 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var _0xdd54cd,
      _0x4356aa,
      _0x3c6736,
      _0x444c73,
      _0x5799af,
      _0x582152,
      _0x420099,
      _0xe80067,
      _0x51d7ca = 0,
      _0x367e8d = 0,
      _0xc87c7 = "",
      _0x250acf = [];
    if (!_0x2ba890) {
      return _0x2ba890;
    }
    _0x2ba890 += "";
    do {
      _0x444c73 = _0xf79727.indexOf(_0x2ba890.charAt(_0x51d7ca++));
      _0x5799af = _0xf79727.indexOf(_0x2ba890.charAt(_0x51d7ca++));
      _0x582152 = _0xf79727.indexOf(_0x2ba890.charAt(_0x51d7ca++));
      _0x420099 = _0xf79727.indexOf(_0x2ba890.charAt(_0x51d7ca++));
      _0xe80067 = _0x444c73 << 18 | _0x5799af << 12 | _0x582152 << 6 | _0x420099;
      _0xdd54cd = _0xe80067 >> 16 & 255;
      _0x4356aa = _0xe80067 >> 8 & 255;
      _0x3c6736 = _0xe80067 & 255;
      if (_0x582152 == 64) {
        {
          _0x250acf[_0x367e8d++] = String.fromCharCode(_0xdd54cd);
        }
      } else if (_0x420099 == 64) {
        _0x250acf[_0x367e8d++] = String.fromCharCode(_0xdd54cd, _0x4356aa);
      } else {
        _0x250acf[_0x367e8d++] = String.fromCharCode(_0xdd54cd, _0x4356aa, _0x3c6736);
      }
    } while (_0x51d7ca < _0x2ba890.length);
    _0xc87c7 = _0x250acf.join("");
    return _0xc87c7;
  }
  var _0x4a0135 = $(".readerContainer").data("id");
  var _0x3d1d18 = ["c21raHkyNTg=", "c21rZDk1ZnY=", "bWQ0OTY5NTI=", "Y2Rjc2R3cQ==", "dmJmc2EyNTY=", "Y2F3ZjE1MWM=", "Y2Q1NmN2ZGE=", "OGtpaG50OQ==", "ZHNvMTV0bG8=", "NWtvNnBsaHk="][_0x4a0135];
  var _0x3af5f6 = _0x1c72dc(_0x3d1d18);
  var _0x2155fc = _0x1c72dc(__c0rst96);
  var _0x393370 = _0x3af5f6.length;
  var _0x1e348e = "";
  for (_0x45856e = 0; _0x45856e < _0x2155fc.length; _0x45856e++) {
    k = _0x45856e % _0x393370;
    _0x1e348e += String.fromCharCode(_0x2155fc.charCodeAt(_0x45856e) ^ _0x3af5f6.charCodeAt(k));
  }
  var _0x2eb701 = _0x1c72dc(_0x1e348e);
  var _0x409eb8 = JSON.parse(_0x2eb701);
  var _0x542701 = _0x409eb8.length;
  var _0x255baf = "";
  for (var _0x45856e = 0; _0x45856e < _0x542701; _0x45856e++) {
    {
      _0x255baf = _0x255baf + "<div class=\"chapter-img-box\"><img data-src=\"" + _0x409eb8[_0x45856e] + "\" src=\"/static/images/load.gif\"></div>";
    }
  }
  $(".main_img").append(_0x255baf);
});
_0xod6 = "jsjiami.com.v6";