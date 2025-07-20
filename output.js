//Sun Jul 20 2025 13:29:58 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0xe8c8d1 = function () {
  let _0x3d94c2 = true;
  return function (_0x39ab8c, _0x1d3998) {
    {
      const _0x5d00ed = _0x3d94c2 ? function () {
        if (_0x1d3998) {
          const _0x6443f9 = _0x1d3998.apply(_0x39ab8c, arguments);
          _0x1d3998 = null;
          return _0x6443f9;
        }
      } : function () {};
      _0x3d94c2 = false;
      return _0x5d00ed;
    }
  };
}();
const _0x24bb87 = _0xe8c8d1(this, function () {
  const _0x366a61 = function () {};
  const _0x31fb39 = function () {
    let _0x33cc95;
    try {
      _0x33cc95 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x3bd59f) {
      _0x33cc95 = window;
    }
    return _0x33cc95;
  };
  const _0x25c024 = _0x31fb39();
  if (!_0x25c024.console) {
    _0x25c024.console = function (_0x348111) {
      {
        const _0x5c5182 = {
          log: _0x348111,
          warn: _0x348111,
          debug: _0x348111,
          info: _0x348111,
          error: _0x348111,
          exception: _0x348111,
          table: _0x348111,
          trace: _0x348111
        };
        return _0x5c5182;
      }
    }(_0x366a61);
  } else {
    _0x25c024.console.log = _0x366a61;
    _0x25c024.console.warn = _0x366a61;
    _0x25c024.console.debug = _0x366a61;
    _0x25c024.console.info = _0x366a61;
    _0x25c024.console.error = _0x366a61;
    _0x25c024.console.exception = _0x366a61;
    _0x25c024.console.table = _0x366a61;
    _0x25c024.console.trace = _0x366a61;
  }
});
_0x24bb87();
window.onload = function () {
  try {
    document.body.style.display = "flex";
    var _0x4c4771 = getQueryString("d");
    var _0x571973 = getQueryString("title");
    if (_0x571973) {
      {
        window.document.title = _0x571973;
      }
    } else {
      {
        window.document.title = "在线客服";
      }
    }
    _0x4c4771 = decodeURIComponent(_0x4c4771);
    var _0x113bff = xorDecrypt(_0x4c4771);
    if (isHttpOrHttpsUrl(_0x113bff)) {
      const _0x50a2c7 = new URL(_0x113bff).hostname;
      if (!_0x50a2c7.includes(".vvira.cn") && !_0x50a2c7.includes(".pbwnl.com") && !_0x50a2c7.includes(".mhner.cn")) {
        return;
      }
      const _0x3b731b = document.documentElement.clientHeight;
      document.getElementById("dnrhca").style.display = "none";
      const _0x5739e6 = document.createElement("iframe");
      _0x5739e6.src = _0x113bff;
      _0x5739e6.frameBorder = "0";
      _0x5739e6.scrolling = "auto";
      _0x5739e6.style.width = "100%";
      _0x5739e6.style.height = _0x3b731b;
      _0x5739e6.style.border = "none";
      _0x5739e6.style.zIndex = "9999";
      _0x5739e6.sandbox = "allow-same-origin allow-scripts allow-top-navigation allow-forms allow-popups";
      document.getElementById("overlay").appendChild(_0x5739e6);
    }
  } catch (_0x578a63) {}
};
function getQueryString(_0x93f38d) {
  var _0x115599 = new RegExp("(^|&)" + _0x93f38d + "=([^&]*)(&|$)");
  var _0x56ea71 = window.location.search.substr(1).match(_0x115599);
  if (_0x56ea71 != null) {
    return decodeURI(_0x56ea71[2]);
  }
  return "";
}
function isHttpOrHttpsUrl(_0x587d0f) {
  if (typeof _0x587d0f !== "string") {
    return false;
  }
  if (_0x587d0f.startsWith("http://") || _0x587d0f.startsWith("https://")) {
    return true;
  }
  return false;
}
function xorDecrypt(_0x8a6722) {
  let _0x3a168b = "gotojiam";
  let _0x47b000 = atob(_0x8a6722);
  let _0x5ae55f = "";
  let _0x3ed5bd = _0x3a168b.length;
  for (let _0x21adc5 = 0; _0x21adc5 < _0x47b000.length; _0x21adc5++) {
    {
      let _0x56fdb2 = String.fromCharCode(_0x47b000.charCodeAt(_0x21adc5) ^ _0x3a168b.charCodeAt(_0x21adc5 % _0x3ed5bd));
      _0x5ae55f += _0x56fdb2;
    }
  }
  return _0x5ae55f;
}