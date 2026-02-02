//Mon Feb 02 2026 03:05:42 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "sojson.v5";
(function (_0x496653, _0x3fdde6) {
  var _0x126d1c = function () {
    var _0x28573c = true;
    return function (_0x402e75, _0x5c4cb1) {
      var _0x4a7c41 = _0x28573c ? function () {
        if (_0x5c4cb1) {
          var _0x3c8956 = _0x5c4cb1.apply(_0x402e75, arguments);
          _0x5c4cb1 = null;
          return _0x3c8956;
        }
      } : function () {};
      _0x28573c = false;
      return _0x4a7c41;
    };
  }();
  var _0x383222 = function () {
    var _0xf427cf = true;
    return function (_0x46ba00, _0x44375d) {
      var _0x3d168c = _0xf427cf ? function () {
        {
          if (_0x44375d) {
            {
              var _0x182377 = _0x44375d.apply(_0x46ba00, arguments);
              _0x44375d = null;
              return _0x182377;
            }
          }
        }
      } : function () {};
      _0xf427cf = false;
      return _0x3d168c;
    };
  }();
  var _0x142129 = _0x496653.document;
  var _0xb8a87f = _0x142129.documentElement;
  var _0x35ca8d = _0x142129.querySelector("meta[name=\"viewport\"]");
  var _0x3b0a6a = _0x142129.querySelector("meta[name=\"flexible\"]");
  var _0x3b0a16 = 0;
  var _0x4e1dc6 = 0;
  var _0x294b68;
  var _0x470744 = _0x3fdde6.flexible || (_0x3fdde6.flexible = {});
  if (_0x35ca8d) {
    var _0x665926 = _0x35ca8d.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
    if (_0x665926) {
      {
        _0x4e1dc6 = parseFloat(_0x665926[1]);
        _0x3b0a16 = parseInt(1 / _0x4e1dc6);
      }
    }
  } else {
    if (_0x3b0a6a) {
      var _0x43505d = _0x3b0a6a.getAttribute("content");
      if (_0x43505d) {
        var _0x54960c = _0x43505d.match(/initial\-dpr=([\d\.]+)/);
        var _0x48f99b = _0x43505d.match(/maximum\-dpr=([\d\.]+)/);
        if (_0x54960c) {
          {
            _0x3b0a16 = parseFloat(_0x54960c[1]);
            _0x4e1dc6 = parseFloat((1 / _0x3b0a16).toFixed(2));
          }
        }
        if (_0x48f99b) {
          _0x3b0a16 = parseFloat(_0x48f99b[1]);
          _0x4e1dc6 = parseFloat((1 / _0x3b0a16).toFixed(2));
        }
      }
    }
  }
  if (!_0x3b0a16 && !_0x4e1dc6) {
    var _0x4be28b = _0x496653.navigator.appVersion.match(/android/gi);
    var _0x3ba2e7 = _0x496653.navigator.appVersion.match(/iphone/gi);
    var _0x36d43c = _0x496653.devicePixelRatio;
    if (_0x3ba2e7) {
      {
        if (_0x36d43c >= 3 && (!_0x3b0a16 || _0x3b0a16 >= 3)) {
          {
            _0x3b0a16 = 3;
          }
        } else {
          if (_0x36d43c >= 2 && (!_0x3b0a16 || _0x3b0a16 >= 2)) {
            _0x3b0a16 = 2;
          } else {
            {
              _0x3b0a16 = 1;
            }
          }
        }
      }
    } else {
      _0x3b0a16 = 1;
    }
    _0x4e1dc6 = 1 / _0x3b0a16;
  }
  _0xb8a87f.setAttribute("data-dpr", _0x3b0a16);
  if (!_0x35ca8d) {
    _0x35ca8d = _0x142129.createElement("meta");
    _0x35ca8d.setAttribute("name", "viewport");
    _0x35ca8d.setAttribute("content", "initial-scale=" + _0x4e1dc6 + ", maximum-scale=" + _0x4e1dc6 + ", minimum-scale=" + _0x4e1dc6 + ", user-scalable=no");
    if (_0xb8a87f.firstElementChild) {
      _0xb8a87f.firstElementChild.appendChild(_0x35ca8d);
    } else {
      var _0x49b334 = _0x142129.createElement("div");
      _0x49b334.appendChild(_0x35ca8d);
      _0x142129.write(_0x49b334.innerHTML);
    }
  }
  function _0x27beee() {
    {
      var _0x801267 = _0x126d1c(this, function () {
        var _0x4f7f4e = function () {
          return "dev";
        };
        var _0x5940f1 = function () {
          return "window";
        };
        var _0x44839e = function () {
          var _0x2d8b71 = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
          return !_0x2d8b71.test(_0x4f7f4e.toString());
        };
        var _0x3e84f0 = function () {
          var _0x242dd0 = new RegExp("(\\\\[x|u](\\w){2,4})+");
          return _0x242dd0.test(_0x5940f1.toString());
        };
        var _0x3a2777 = function (_0x90de8) {
          var _0x513cb4 = 0 >> 1 + NaN;
          if (_0x90de8.indexOf("i" === _0x513cb4)) {
            _0x31256b(_0x90de8);
          }
        };
        var _0x31256b = function (_0x27bfcb) {
          var _0x1a80f0 = 3 >> 1 + NaN;
          if (_0x27bfcb.indexOf("true"[3]) !== _0x1a80f0) {
            _0x3a2777(_0x27bfcb);
          }
        };
        if (!_0x44839e()) {
          if (!_0x3e84f0()) {
            _0x3a2777("indеxOf");
          } else {
            _0x3a2777("indexOf");
          }
        } else {
          _0x3a2777("indеxOf");
        }
      });
      _0x801267();
      var _0x143994 = _0x383222(this, function () {
        var _0x37b30a = function () {};
        var _0x313255 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
        if (!_0x313255.console) {
          {
            _0x313255.console = function (_0xda5b12) {
              var _0x27749c = {};
              _0x27749c.log = _0xda5b12;
              _0x27749c.warn = _0xda5b12;
              _0x27749c.debug = _0xda5b12;
              _0x27749c.info = _0xda5b12;
              _0x27749c.error = _0xda5b12;
              _0x27749c.exception = _0xda5b12;
              _0x27749c.trace = _0xda5b12;
              return _0x27749c;
            }(_0x37b30a);
          }
        } else {
          _0x313255.console.log = _0x37b30a;
          _0x313255.console.warn = _0x37b30a;
          _0x313255.console.debug = _0x37b30a;
          _0x313255.console.info = _0x37b30a;
          _0x313255.console.error = _0x37b30a;
          _0x313255.console.exception = _0x37b30a;
          _0x313255.console.trace = _0x37b30a;
        }
      });
      _0x143994();
      var _0xfc33ce = _0xb8a87f.getBoundingClientRect().width;
      if (_0xfc33ce / _0x3b0a16 > 768) {
        {
          _0xfc33ce = 768 * _0x3b0a16;
        }
      }
      var _0x45c8ef = _0xfc33ce / 10;
      _0xb8a87f.style.fontSize = _0x45c8ef + "px";
      _0x470744.rem = _0x496653.rem = _0x45c8ef;
    }
  }
  _0x496653.addEventListener("resize", function () {
    clearTimeout(_0x294b68);
    _0x294b68 = setTimeout(_0x27beee, 300);
  }, false);
  _0x496653.addEventListener("pageshow", function (_0x4f02ef) {
    {
      if (_0x4f02ef.persisted) {
        clearTimeout(_0x294b68);
        _0x294b68 = setTimeout(_0x27beee, 300);
      }
    }
  }, false);
  _0x27beee();
  _0x470744.dpr = _0x496653.dpr = _0x3b0a16;
  _0x470744.refreshRem = _0x27beee;
  _0x470744.rem2px = function (_0x394aa5) {
    {
      var _0x1767e3 = parseFloat(_0x394aa5) * this.rem;
      if (typeof _0x394aa5 === "string" && _0x394aa5.match(/rem$/)) {
        {
          _0x1767e3 += "px";
        }
      }
      return _0x1767e3;
    }
  };
  _0x470744.px2rem = function (_0x3e4c0) {
    var _0x2cedfd = parseFloat(_0x3e4c0) / this.rem;
    if (typeof _0x3e4c0 === "string" && _0x3e4c0.match(/px$/)) {
      _0x2cedfd += "rem";
    }
    return _0x2cedfd;
  };
})(window, window.lib || (window.lib = {}));
if (!(typeof encode_version !== "undefined" && encode_version === "sojson.v5")) {
  window.alert("不能删除sojson.v5");
}
encode_version = "sojson.v5";