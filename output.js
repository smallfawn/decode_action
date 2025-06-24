//Tue Jun 24 2025 11:02:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x445924 = function () {
  let _0x18bc08 = true;
  return function (_0x293ad0, _0x591ac5) {
    const _0x39bd0b = _0x18bc08 ? function () {
      if (_0x591ac5) {
        const _0xee55eb = _0x591ac5.apply(_0x293ad0, arguments);
        _0x591ac5 = null;
        return _0xee55eb;
      }
    } : function () {};
    _0x18bc08 = false;
    return _0x39bd0b;
  };
}();
const _0x42a84b = _0x445924(this, function () {
  const _0x196312 = function () {};
  let _0x3c1d61;
  try {
    const _0x26681f = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x3c1d61 = _0x26681f();
  } catch (_0x691a19) {
    _0x3c1d61 = window;
  }
  if (!_0x3c1d61.console) {
    _0x3c1d61.console = function (_0x2357f4) {
      {
        const _0x43db6f = {
          log: _0x2357f4,
          warn: _0x2357f4,
          debug: _0x2357f4,
          info: _0x2357f4,
          error: _0x2357f4,
          exception: _0x2357f4,
          table: _0x2357f4,
          trace: _0x2357f4
        };
        return _0x43db6f;
      }
    }(_0x196312);
  } else {
    {
      _0x3c1d61.console.log = _0x196312;
      _0x3c1d61.console.warn = _0x196312;
      _0x3c1d61.console.debug = _0x196312;
      _0x3c1d61.console.info = _0x196312;
      _0x3c1d61.console.error = _0x196312;
      _0x3c1d61.console.exception = _0x196312;
      _0x3c1d61.console.table = _0x196312;
      _0x3c1d61.console.trace = _0x196312;
    }
  }
});
_0x42a84b();
window.onload = function () {
  try {
    {
      document.body.style.display = "flex";
      var _0xff7c82 = getQueryString("d");
      var _0x17f36c = getQueryString("title");
      if (_0x17f36c) {
        {
          window.document.title = _0x17f36c;
        }
      } else {
        window.document.title = "在线客服";
      }
      _0xff7c82 = decodeURIComponent(_0xff7c82);
      var _0x4e6c6b = xorDecrypt(_0xff7c82);
      if (isHttpOrHttpsUrl(_0x4e6c6b)) {
        const _0x470f05 = new URL(_0x4e6c6b).hostname;
        if (!_0x470f05.includes(".vvira.cn") && !_0x470f05.includes(".mhner.cn") && !_0x470f05.includes(".sqigm.cn") && !_0x470f05.includes(".odnio.cn")) {
          return;
        }
        const _0x1b9d6a = document.documentElement.clientHeight;
        document.getElementById("dnrhca").style.display = "none";
        const _0x4700b2 = document.createElement("iframe");
        _0x4700b2.src = _0x4e6c6b;
        _0x4700b2.frameBorder = "0";
        _0x4700b2.scrolling = "auto";
        _0x4700b2.style.width = "100%";
        _0x4700b2.style.height = _0x1b9d6a;
        _0x4700b2.style.border = "none";
        _0x4700b2.style.zIndex = "9999";
        _0x4700b2.sandbox = "allow-same-origin allow-scripts allow-top-navigation allow-forms allow-popups";
        document.getElementById("overlay").appendChild(_0x4700b2);
      }
    }
  } catch (_0x45bab6) {}
};
function getQueryString(_0x3ae9a1) {
  var _0x585a7d = new RegExp("(^|&)" + _0x3ae9a1 + "=([^&]*)(&|$)");
  var _0x2477f0 = window.location.search.substr(1).match(_0x585a7d);
  if (_0x2477f0 != null) {
    return decodeURI(_0x2477f0[2]);
  }
  return "";
}
function isHttpOrHttpsUrl(_0x47e39e) {
  if (typeof _0x47e39e !== "string") {
    {
      return false;
    }
  }
  if (_0x47e39e.startsWith("http://") || _0x47e39e.startsWith("https://")) {
    {
      return true;
    }
  }
  return false;
}
function xorDecrypt(_0x1463b7) {
  let _0x2f40d6 = "gotojiam";
  let _0x245875 = atob(_0x1463b7);
  let _0x33e320 = "";
  let _0x58ba08 = _0x2f40d6.length;
  for (let _0x27aa8a = 0; _0x27aa8a < _0x245875.length; _0x27aa8a++) {
    let _0x5d0e18 = String.fromCharCode(_0x245875.charCodeAt(_0x27aa8a) ^ _0x2f40d6.charCodeAt(_0x27aa8a % _0x58ba08));
    _0x33e320 += _0x5d0e18;
  }
  return _0x33e320;
}