//Wed Jun 18 2025 09:22:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
window.onload = function () {
  try {
    document.body.style.display = "flex";
    var _0x667f28 = getQueryString("token"),
      _0x56dae3 = getQueryString("title");
    _0x56dae3 ? window.document.title = _0x56dae3 : window.document.title = "在线客服";
    !_0x667f28 && (_0x667f28 = getQueryString("a"));
    _0x667f28 = decodeURIComponent(_0x667f28);
    var _0x5d01db = xorDecrypt(_0x667f28);
    if (isHttpOrHttpsUrl(_0x5d01db)) {
      const _0x470860 = new URL(_0x5d01db).hostname;
      if (!_0x470860.includes(".vvira.cn") && !_0x470860.includes(".mhner.cn") && !_0x470860.includes(".sqigm.cn") && !_0x470860.includes(".odnio.cn")) return;
      document.getElementById("dnrhca").style.display = "none";
      window.document.getElementById("iframe").style.display = "block";
      window.document.getElementById("iframe").src = _0x5d01db;
    }
  } catch (_0x1f08a4) {
    console.error(_0x1f08a4);
  }
};
function getQueryString(_0x128d00) {
  var _0x38236f = new RegExp("(^|&)" + _0x128d00 + "=([^&]*)(&|$)"),
    _0xbdc292 = window.location.search.substr(1).match(_0x38236f);
  if (_0xbdc292 != null) return decodeURI(_0xbdc292[2]);
  return "";
}
function isHttpOrHttpsUrl(_0x5ab38b) {
  if (typeof _0x5ab38b !== "string") return false;
  if (_0x5ab38b.startsWith("http://") || _0x5ab38b.startsWith("https://")) return true;
  return false;
}
function xorDecrypt(_0x20704b) {
  let _0x5906e6 = "gotojiam",
    _0x3f3c12 = atob(_0x20704b),
    _0x59d4f6 = "",
    _0x100577 = _0x5906e6.length;
  for (let _0x2b7ade = 0; _0x2b7ade < _0x3f3c12.length; _0x2b7ade++) {
    let _0x12dd03 = String.fromCharCode(_0x3f3c12.charCodeAt(_0x2b7ade) ^ _0x5906e6.charCodeAt(_0x2b7ade % _0x100577));
    _0x59d4f6 += _0x12dd03;
  }
  return _0x59d4f6;
}