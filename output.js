//Tue Jul 15 2025 15:05:03 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function _calMyqlChar(_0x1bde3c) {
  if (!_0x1bde3c) {
    return 0;
  }
  let _0x9044fe = _0x1bde3c.split("");
  let _0x2600de = 0;
  for (var _0x5a8854 in _0x9044fe) {
    {
      _0x2600de += _0x9044fe[_0x5a8854].charCodeAt();
    }
  }
  return _0x2600de;
}
function _getMyqlcRealStr(_0x32f761) {
  if (!_0x32f761) {
    return null;
  }
  const _0x589ff3 = "s8db41whij9xzn0pa3q5u7glmyof2ret6vck";
  let _0x3a1974 = "";
  let _0x5a26c8 = _0x32f761.split("");
  for (var _0x8c8fbe in _0x5a26c8) {
    let _0x2b5148 = _0x589ff3.indexOf(_0x5a26c8[_0x8c8fbe]);
    if (_0x2b5148 < 0 || _0x2b5148 > _0x589ff3.length) {
      return null;
    }
    if (_0x2b5148 < 10) {
      _0x3a1974 = _0x3a1974 + _0x2b5148 + "";
    } else {
      _0x2b5148 = _0x2b5148 + 97 - 10;
      _0x3a1974 = _0x3a1974 + String.fromCharCode(_0x2b5148);
    }
  }
  return _0x3a1974;
}
function getQmExpireDate(_0x151956, _0x3754e2) {
  try {
    {
      const _0x22a3cb = "ddi4vgek41dih|";
      if (_0x22a3cb.indexOf(_0x151956) > -1) {
        {
          return false;
        }
      }
      const _0x5dfbe2 = [88239, 54342, 52312, 7212, 2356, 23256, 34353, 41515, 24124, 32323];
      let _0x2469d1 = _getMyqlcRealStr(_0x151956);
      let _0x427ccc = parseInt(_0x2469d1.substring(11, 12));
      let _0x558d60 = _0x2469d1.substring(4, 8);
      if (_calMyqlChar(_0x2469d1.substring(0, 12)) % 10 != parseInt(_0x2469d1.substring(12, 13))) {
        return false;
      }
      let _0x16449b = parseInt(_0x2469d1.substring(0, 1));
      if (_0x3754e2 && _0x3754e2 != _0x16449b) {
        return false;
      }
      let _0x45b03c = parseInt(_0x2469d1.substring(1, 4) + _0x2469d1.substring(8, 11)) - _0x5dfbe2[_0x16449b - 1] - _0x427ccc + "";
      let _0x1065a7 = "20" + _0x45b03c.substring(0, 2) + "/" + _0x45b03c.substring(2, 4) + "/" + _0x45b03c.substring(4, 6) + " " + "23:59:59";
      if (new Date(_0x1065a7).getTime() < new Date().getTime()) {
        {
          return false;
        }
      } else {
        return true;
      }
    }
  } catch (_0xc9529d) {
    return false;
  }
}
_0xod2 = "jsjiami.com.v6";