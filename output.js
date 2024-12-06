//Fri Dec 06 2024 03:59:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
class WSrunner {
  constructor(_0x49d0c5) {
    this["wsurl"] = _0x49d0c5;
  }
  ["Run"]() {
    try {
      this["sock"] = new WebSocket(this["wsurl"]);
    } catch (_0x4103e6) {}
    this["sock"]["binaryType"] = "arraybuffer";
    this["sock"]["onopen"] = this["onWSopen"]["bind"](this);
    this["sock"]["onclose"] = this["onWSclose"]["bind"](this);
    this["sock"]["onmessage"] = this["onWSmsg"]["bind"](this);
    this["sock"]["onerror"] = this["onWSerr"]["bind"](this);
  }
}
class allWebPluginUI extends WSrunner {
  constructor(_0x3f7ea3, _0x3fd218, _0x154e19, _0x2c8239, _0x4e260f) {
    super(_0x3f7ea3);
    this["pcid"] = _0x2c8239;
    this["canvas"] = _0x154e19;
    this["httpurl"] = _0x3fd218;
    this["bFixSize"] = _0x4e260f;
    this["blForceShowUI"] = !![];
    this["cctx"] = _0x154e19["getContext"]("2d");
    this["cctx"]["strokeStyle"] = "rgba(16,16,16,0)";
    this["cctx"]["FillStyle"] = "rgba(16,16,16,0)";
    this["dpr"] = window["devicePixelRatio"] || window["webkitDevicePixelRatio"] || window["mozDevicePixelRatio"] || 1;
    if (this["bFixSize"] == !![]) {
      this["canvasW"] = this["canvas"]["width"];
      this["canvasH"] = this["canvas"]["height"];
      this["canvas"]["style"]["width"] = this["canvas"]["width"] + "px";
      this["canvas"]["style"]["height"] = this["canvas"]["height"] + "px";
      this["canvas"]["width"] = this["dpr"] * this["canvasW"];
      this["canvas"]["height"] = this["dpr"] * this["canvasH"];
    } else {
      this["canvas"]["width"] = this["canvas"]["clientWidth"] * this["dpr"];
      this["canvas"]["height"] = this["canvas"]["clientHeight"] * this["dpr"];
    }
    this["mX"] = 0;
    this["mY"] = 0;
    this["open"] = ![];
    this["alertmsg"] = "";
    this["mouseDownStatus"] = {};
    this["msie"] = window["navigator"]["userAgent"]["indexOf"]("MSIE ");
    this["trident"] = window["navigator"]["userAgent"]["indexOf"]("Trident/");
    this["isFirefox"] = window["navigator"]["userAgent"]["toLowerCase"]()["indexOf"]("firefox");
    this["canvas"]["addEventListener"]("mousemove", this["onMm"]["bind"](this));
    this["canvas"]["addEventListener"]("dblclick", this["onMdclk"]["bind"](this));
    this["canvas"]["addEventListener"]("mousedown", this["onMd"]["bind"](this));
    this["canvas"]["addEventListener"]("mouseup", this["onMu"]["bind"](this));
    this["canvas"]["addEventListener"]("mousewheel", this["onMw"]["bind"](this));
    this["canvas"]["addEventListener"]("mouseleave", this["onMouseLeave"]["bind"](this));
  }
  ["Disconnect"]() {
    this["_reset"]();
  }
  ["fillRect"]() {
    this["cctx"]["fillStyle"] = "#f0f0f0";
    var _0x44915e = this["canvas"]["width"];
    var _0x58ebb9 = this["canvas"]["height"];
    this["cctx"]["fillRect"](0, 0, _0x44915e, _0x58ebb9);
    this["cctx"]["fillStyle"] = "#333333";
    this["cctx"]["font"] = "30px \u6977\u4F53";
    this["cctx"]["fillText"]("\u63D2\u4EF6\u663E\u793A\u533A\u57DF", _0x44915e / 2 - 3 * 30, _0x58ebb9 / 2 - 60);
    this["cctx"]["fillText"]("\u70B9\u51FB\u8FD9\u91CC\uFF0C\u7ACB\u5373\u663E\u793A\u63D2\u4EF6", _0x44915e / 2 - 5 * 30, _0x58ebb9 / 2 - 10);
    this["cctx"]["fillStyle"] = "#ee0000";
    this["cctx"]["font"] = "16px \u6977\u4F53";
    this["cctx"]["fillText"]("\u4E3A\u4E86\u907F\u514D\u53EF\u80FD\u906E\u6321\u6D4F\u89C8\u5668\u754C\u9762\uFF0C\u63D2\u4EF6\u88AB\u9690\u85CF\u3002\u70B9\u51FB\u9875\u9762\u5C06\u8FD8\u539F\u63D2\u4EF6\u754C\u9762\u3002", _0x44915e / 2 - 16 * 17, _0x58ebb9 / 2 + 20);
  }
  ["_reset"]() {
    if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
      this["sock"]["close"]();
    }
    this["cctx"]["clearRect"](0, 0, this["canvas"]["width"], this["canvas"]["height"]);
    document["title"] = document["title"]["replace"](/:.*/, ": offline");
    this["canvas"]["style"]["cursor"] = "none";
  }
  ["onMdclk"](_0x5c3fd5) {
    var _0x360c0e, _0x5d9bcb, _0x2d8c64, _0x504a2e, _0x56c850;
    _0x5c3fd5["preventDefault"]();
    var _0x5f3b2e = this["CheckKeyStatus"](_0x5c3fd5);
    if (_awp_allWebPlugin_) _awp_allWebPlugin_["ActivateContainerByPCID"](this["pcid"]);
    {
      _0x2d8c64 = this["msie"] > 0 || this["trident"] > 0 ? _0x5c3fd5["layerX"] - _0x5c3fd5["currentTarget"]["offsetLeft"] : _0x5c3fd5["layerX"];
      _0x504a2e = this["msie"] > 0 || this["trident"] > 0 ? _0x5c3fd5["layerY"] - _0x5c3fd5["currentTarget"]["offsetTop"] : _0x5c3fd5["layerY"];
    }
    this["mX"] = _0x2d8c64;
    this["mY"] = _0x504a2e;
    _0x56c850 = this["_mB"](_0x5c3fd5);
    if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
      _0x360c0e = new ArrayBuffer(20);
      _0x5d9bcb = new Uint32Array(_0x360c0e);
      _0x5d9bcb[0] = 0;
      _0x5d9bcb[1] = 1024 | _0x56c850;
      _0x5d9bcb[2] = _0x2d8c64;
      _0x5d9bcb[3] = _0x504a2e;
      _0x5d9bcb[4] = _0x5f3b2e;
      this["sock"]["send"](_0x360c0e);
    }
  }
  ["onMm"](_0x3556a2) {
    var _0x49eaa3, _0x39190b, _0x27149c, _0x11dd27;
    var _0x41820b = this["CheckKeyStatus"](_0x3556a2);
    _0x3556a2["preventDefault"]();
    {
      _0x27149c = this["msie"] > 0 || this["trident"] > 0 ? _0x3556a2["layerX"] - _0x3556a2["currentTarget"]["offsetLeft"] : _0x3556a2["layerX"];
      _0x11dd27 = this["msie"] > 0 || this["trident"] > 0 ? _0x3556a2["layerY"] - _0x3556a2["currentTarget"]["offsetTop"] : _0x3556a2["layerY"];
    }
    this["mX"] = _0x27149c;
    this["mY"] = _0x11dd27;
    if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
      _0x49eaa3 = new ArrayBuffer(20);
      _0x39190b = new Uint32Array(_0x49eaa3);
      _0x39190b[0] = 0;
      _0x39190b[1] = 2048;
      _0x39190b[2] = _0x27149c;
      _0x39190b[3] = _0x11dd27;
      _0x39190b[4] = _0x41820b;
      this["sock"]["send"](_0x49eaa3);
    }
  }
  ["onMd"](_0x5327f3) {
    var _0x5a8ca3, _0xdfdb99, _0x46fc04, _0x3a7fe3, _0x22380a;
    var _0x4796c7 = this["CheckKeyStatus"](_0x5327f3);
    if (_awp_allWebPlugin_) _awp_allWebPlugin_["ActivateContainerByPCID"](this["pcid"]);
    if (_0x5327f3["preventDefault"]) _0x5327f3["preventDefault"]();
    if (_0x5327f3["stopPropagation"]) _0x5327f3["stopPropagation"]();
    if (_0x5327f3["rightClick"] && _0x5327f3["control"] && _0x5327f3["alt"]) {
      return;
    }
    _0x46fc04 = this["msie"] > 0 || this["trident"] > 0 ? _0x5327f3["layerX"] - _0x5327f3["currentTarget"]["offsetLeft"] : _0x5327f3["layerX"];
    _0x3a7fe3 = this["msie"] > 0 || this["trident"] > 0 ? _0x5327f3["layerY"] - _0x5327f3["currentTarget"]["offsetTop"] : _0x5327f3["layerY"];
    _0x22380a = this["_mB"](_0x5327f3);
    if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
      _0x5a8ca3 = new ArrayBuffer(20);
      _0xdfdb99 = new Uint32Array(_0x5a8ca3);
      _0xdfdb99[0] = 0;
      _0xdfdb99[1] = 32768 | _0x22380a;
      _0xdfdb99[2] = _0x46fc04;
      _0xdfdb99[3] = _0x3a7fe3;
      _0xdfdb99[4] = _0x4796c7;
      this["sock"]["send"](_0x5a8ca3);
      this["mouseDownStatus"][_0x22380a] = !![];
    }
  }
  ["onMu"](_0x391329, _0x49be69, _0x5703d1) {
    var _0x44f494, _0x4305d7, _0x49be69, _0x5703d1, _0xa598d5;
    var _0x1ed90e = this["CheckKeyStatus"](_0x391329);
    _0x391329["preventDefault"]();
    {
      _0x49be69 = this["msie"] > 0 || this["trident"] > 0 ? _0x391329["layerX"] - _0x391329["currentTarget"]["offsetLeft"] : _0x391329["layerX"];
      _0x5703d1 = this["msie"] > 0 || this["trident"] > 0 ? _0x391329["layerY"] - _0x391329["currentTarget"]["offsetTop"] : _0x391329["layerY"];
      console["log"]("onMu: X" + _0x49be69 + "  Y:" + _0x5703d1);
    }
    _0xa598d5 = this["_mB"](_0x391329);
    if (this["aMF"]) {}
    if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
      _0x44f494 = new ArrayBuffer(20);
      _0x4305d7 = new Uint32Array(_0x44f494);
      _0x4305d7[0] = 0;
      _0x4305d7[1] = _0xa598d5;
      _0x4305d7[2] = _0x49be69;
      _0x4305d7[3] = _0x5703d1;
      _0x4305d7[4] = _0x1ed90e;
      this["sock"]["send"](_0x44f494);
      this["mouseDownStatus"][_0xa598d5] = ![];
    }
  }
  ["onMw"](_0x4db9cd) {
    var _0x1168cf, _0x540de3, _0x37414c, _0x4e26b9;
    _0x4db9cd["preventDefault"]();
    var _0x4ee2c6 = this["CheckKeyStatus"](_0x4db9cd);
    _0x37414c = this["msie"] > 0 || this["trident"] > 0 ? _0x4db9cd["layerX"] - _0x4db9cd["currentTarget"]["offsetLeft"] : _0x4db9cd["layerX"];
    _0x4e26b9 = this["msie"] > 0 || this["trident"] > 0 ? _0x4db9cd["layerY"] - _0x4db9cd["currentTarget"]["offsetTop"] : _0x4db9cd["layerY"];
    if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
      _0x1168cf = new ArrayBuffer(20);
      _0x540de3 = new Uint32Array(_0x1168cf);
      _0x540de3[0] = 0;
      _0x540de3[1] = 512 | (_0x4db9cd["wheel"] > 0 ? 135 : 392);
      _0x540de3[2] = _0x37414c;
      _0x540de3[3] = _0x4e26b9;
      _0x540de3[4] = _0x4ee2c6;
      this["sock"]["send"](_0x1168cf);
    }
  }
  ["onMouseLeave"](_0x179676) {
    var _0xde4563, _0x2bbf56;
    for (var _0x5883bc in this["mouseDownStatus"]) {
      if (this["mouseDownStatus"][_0x5883bc]) {
        var _0x356b1f = this["msie"] > 0 || this["trident"] > 0 ? _0x179676["layerX"] - _0x179676["currentTarget"]["offsetLeft"] : _0x179676["layerX"];
        var _0x17cb92 = this["msie"] > 0 || this["trident"] > 0 ? _0x179676["layerY"] - _0x179676["currentTarget"]["offsetTop"] : _0x179676["layerY"];
        if (_0x356b1f < 0) _0x356b1f = 0;
        if (_0x17cb92 < 0) _0x17cb92 = 0;
        var _0x34f638 = _0x5883bc;
        var _0x225091 = this["CheckKeyStatus"](_0x179676);
        if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
          _0xde4563 = new ArrayBuffer(20);
          _0x2bbf56 = new Uint32Array(_0xde4563);
          _0x2bbf56[0] = 0;
          _0x2bbf56[1] = _0x34f638;
          _0x2bbf56[2] = _0x356b1f;
          _0x2bbf56[3] = _0x17cb92;
          _0x2bbf56[4] = _0x225091;
          this["sock"]["send"](_0xde4563);
          this["mouseDownStatus"][_0x34f638] = ![];
        }
      }
    }
  }
  ["hasVerticalScrollbar"]() {
    if (document["body"]["style"]["overflowY"] === "hidden") return ![];
    if (document["documentElement"]["clientHeight"]) return document["body"]["scrollHeight"] > document["documentElement"]["clientHeight"];
    return document["body"]["scrollHeight"] > window["innerHeight"];
  }
  ["hasHorizontalScrollbar"]() {
    if (document["body"]["style"]["overflowX"] === "hidden") return ![];
    if (document["documentElement"]["clientWidth"]) return document["body"]["scrollWidth"] > document["documentElement"]["clientWidth"];
    return document["body"]["scrollWidth"] > window["innerWidth"];
  }
  ["getScrollbarWidth"]() {
    var _0x2d93ad = document["createElement"]("div");
    _0x2d93ad["style"]["cssText"] = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
    document["body"]["appendChild"](_0x2d93ad);
    var _0x5c27a9 = _0x2d93ad["offsetWidth"] - _0x2d93ad["clientWidth"];
    document["body"]["removeChild"](_0x2d93ad);
    return _0x5c27a9;
  }
  ["sendCanvasPosCmd"](_0x530ab7, _0x5a325d, _0x9364fd, _0x6bde8c, _0x1df442, _0xb84670, _0x464be4, _0x29fc6a, _0x4cee2a, _0x558359, _0x53cc43, _0x1d56b8) {
    var _0x5300a0 = {
      "fun": "UpdateCanvasPositionCmd",
      "params": [_0x530ab7, _0x5a325d, _0x9364fd, _0x6bde8c, _0x1df442, _0xb84670, _0x464be4, _0x29fc6a, _0x4cee2a, _0x558359, _0x53cc43, _0x1d56b8]
    };
    if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
      var _0x5b7ced = JSON["stringify"](_0x5300a0);
      var _0x240b9d = _0x5b7ced["length"];
      var _0x3a5366 = new ArrayBuffer(4 * _0x240b9d + 4);
      var _0x2ca165 = new Uint32Array(_0x3a5366);
      _0x2ca165[0] = 6;
      for (var _0x912816 = 0; _0x912816 < _0x240b9d; _0x912816++) {
        _0x2ca165[_0x912816 + 1] = _0x5b7ced["charCodeAt"](_0x912816);
      }
      this["sock"]["send"](_0x3a5366);
    }
  }
  ["CheckKeyStatus"](_0x7de982) {
    var _0x3befba = 0;
    if (_0x7de982["altKey"]) {
      _0x3befba |= 1;
    }
    if (_0x7de982["ctrlKey"]) {
      _0x3befba |= 2;
    }
    if (_0x7de982["metaKey"]) {
      _0x3befba |= 4;
    }
    if (_0x7de982["shiftKey"]) {
      _0x3befba |= 8;
    }
    if (_0x7de982["getModifierState"]("CapsLock")) {
      _0x3befba |= 16;
    }
    return _0x3befba;
  }
  ["onUpdatePosition"](_0x6f78bb) {
    if (this["blForceShowUI"] == ![]) return;
    this["dpr"] = window["devicePixelRatio"] || window["webkitDevicePixelRatio"] || window["mozDevicePixelRatio"] || 1;
    if (this["bFixSize"] == !![]) {
      this["canvas"]["style"]["width"] = this["canvasW"] + "px";
      this["canvas"]["style"]["height"] = this["canvasH"] + "px";
      this["canvas"]["width"] = this["canvasW"] * this["dpr"];
      this["canvas"]["height"] = this["canvasH"] * this["dpr"];
    } else {}
    var _0x497b4c = this["canvas"]["getBoundingClientRect"]();
    var _0x5a9a3a = this["getScrollbarWidth"]();
    var _0x1994e8 = 0;
    if (this["hasHorizontalScrollbar"]()) _0x1994e8 = 1;
    if (this["hasVerticalScrollbar"]()) {
      _0x1994e8 = _0x1994e8 == 0 ? 2 : 3;
    }
    var _0x14f452 = 0;
    var _0x164b16 = 0;
    var _0x29f613 = window;
    if (window["parent"] && window["parent"] != window && typeof window["parent"]["getFramePos"] === "function") {
      window["parent"]["getFramePos"]();
      _0x14f452 = window["parent"]["frameX"];
      _0x164b16 = window["parent"]["frameY"];
      _0x29f613 = window["parent"];
    }
    this["sendCanvasPosCmd"](_0x497b4c["left"] + _0x14f452, _0x497b4c["top"] + _0x164b16, _0x497b4c["width"], _0x497b4c["height"], this["dpr"], _0x1994e8, _0x5a9a3a, _0x29f613["outerWidth"], _0x29f613["outerHeight"], _0x29f613["innerWidth"], _0x29f613["innerHeight"], _0x6f78bb);
  }
  ["setCanvasSize"](_0x5bc92b, _0x245aec) {
    this["canvasW"] = _0x5bc92b;
    this["canvasH"] = _0x245aec;
    this["dpr"] = window["devicePixelRatio"] || window["webkitDevicePixelRatio"] || window["mozDevicePixelRatio"] || 1;
    this["bFixSize"] = !![];
    this["canvas"]["style"]["width"] = this["canvas"]["width"] + "px";
    this["canvas"]["style"]["height"] = this["canvas"]["height"] + "px";
    this["canvas"]["width"] = this["dpr"] * this["canvasW"];
    this["canvas"]["height"] = this["dpr"] * this["canvasH"];
    var _0x30817d = this["canvas"]["getBoundingClientRect"]();
    var _0xbb7086 = this["getScrollbarWidth"]();
    var _0xd0a13b = 0;
    if (this["hasHorizontalScrollbar"]()) _0xd0a13b = 1;
    if (this["hasVerticalScrollbar"]()) {
      _0xd0a13b = _0xd0a13b == 0 ? 2 : 3;
    }
    var _0x8c7e1f = 0;
    var _0x12587f = 0;
    var _0x1f34fe = window;
    if (window["parent"] && window["parent"] != window) {
      window["parent"]["getFramePos"]();
      _0x8c7e1f = window["parent"]["frameX"];
      _0x12587f = window["parent"]["frameY"];
      _0x1f34fe = window["parent"];
    }
    this["sendCanvasPosCmd"](_0x30817d["left"] + _0x8c7e1f, _0x30817d["top"] + _0x12587f, _0x30817d["width"], _0x30817d["height"], this["dpr"], _0xd0a13b, _0xbb7086, _0x1f34fe["outerWidth"], _0x1f34fe["outerHeight"], _0x1f34fe["innerWidth"], _0x1f34fe["innerHeight"]);
  }
  ["ShowUI"](_0x59a072) {
    var _0x54304a = {
      "fun": "ShowUI",
      "params": [_0x59a072]
    };
    if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
      var _0x55d5af = JSON["stringify"](_0x54304a);
      var _0x57bbe7 = _0x55d5af["length"];
      var _0x3798e6 = new ArrayBuffer(4 * _0x57bbe7 + 4);
      var _0x506060 = new Uint32Array(_0x3798e6);
      _0x506060[0] = 6;
      for (var _0x1cfee6 = 0; _0x1cfee6 < _0x57bbe7; _0x1cfee6++) {
        _0x506060[_0x1cfee6 + 1] = _0x55d5af["charCodeAt"](_0x1cfee6);
      }
      this["sock"]["send"](_0x3798e6);
    }
  }
  ["SynchUI"](_0x5b2fe6) {
    var _0x3ae624 = {
      "fun": "SynchUI",
      "params": [_0x5b2fe6]
    };
    if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
      var _0x143f0a = JSON["stringify"](_0x3ae624);
      var _0x306872 = _0x143f0a["length"];
      var _0x4b32db = new ArrayBuffer(4 * _0x306872 + 4);
      var _0x5d512b = new Uint32Array(_0x4b32db);
      _0x5d512b[0] = 6;
      for (var _0x23d3b7 = 0; _0x23d3b7 < _0x306872; _0x23d3b7++) {
        _0x5d512b[_0x23d3b7 + 1] = _0x143f0a["charCodeAt"](_0x23d3b7);
      }
      this["sock"]["send"](_0x4b32db);
    }
  }
  ["ForceShowUI"](_0x52b34f) {
    this["blForceShowUI"] = _0x52b34f;
    var _0x5f4fec = {
      "fun": "ForceShowUI",
      "params": [_0x52b34f]
    };
    if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
      var _0x9cb88a = JSON["stringify"](_0x5f4fec);
      var _0x597dd1 = _0x9cb88a["length"];
      var _0x31fe7f = new ArrayBuffer(4 * _0x597dd1 + 4);
      var _0x1c3cb9 = new Uint32Array(_0x31fe7f);
      _0x1c3cb9[0] = 6;
      for (var _0x306213 = 0; _0x306213 < _0x597dd1; _0x306213++) {
        _0x1c3cb9[_0x306213 + 1] = _0x9cb88a["charCodeAt"](_0x306213);
      }
      this["sock"]["send"](_0x31fe7f);
    }
  }
  ["EnabledCanvas"](_0x32b7e4) {
    this["blForceShowUI"] = !_0x32b7e4;
    var _0x543d70 = {
      "fun": "EnabledCanvas",
      "params": [_0x32b7e4]
    };
    if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
      var _0xaffe87 = JSON["stringify"](_0x543d70);
      var _0x738b6f = _0xaffe87["length"];
      var _0x2ef7eb = new ArrayBuffer(4 * _0x738b6f + 4);
      var _0x726b4e = new Uint32Array(_0x2ef7eb);
      _0x726b4e[0] = 6;
      for (var _0x594d5a = 0; _0x594d5a < _0x738b6f; _0x594d5a++) {
        _0x726b4e[_0x594d5a + 1] = _0xaffe87["charCodeAt"](_0x594d5a);
      }
      this["sock"]["send"](_0x2ef7eb);
    }
  }
  ["ShowMsg"](_0x37d9bf) {
    this["alertmsg"] = _0x37d9bf;
    var _0x1a57c5 = {
      "fun": "ShowMsg",
      "params": []
    };
    if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
      var _0x3c5bf1 = JSON["stringify"](_0x1a57c5);
      var _0x5d0a68 = _0x3c5bf1["length"];
      var _0x1fae8b = new ArrayBuffer(4 * _0x5d0a68 + 4);
      var _0x2d7826 = new Uint32Array(_0x1fae8b);
      _0x2d7826[0] = 6;
      for (var _0x49a62f = 0; _0x49a62f < _0x5d0a68; _0x49a62f++) {
        _0x2d7826[_0x49a62f + 1] = _0x3c5bf1["charCodeAt"](_0x49a62f);
      }
      this["sock"]["send"](_0x1fae8b);
    }
  }
  ["UpdateTitle"](_0x559149) {
    var _0x1c4bc7 = new awpBase64();
    var _0x2d9347 = _0x1c4bc7["encode"](_0x559149);
    var _0x84d228 = {
      "fun": "UpdateTitle",
      "params": [_0x2d9347]
    };
    if (this["sock"]["readyState"] == this["sock"]["OPEN"]) {
      var _0x9f2cd6 = JSON["stringify"](_0x84d228);
      var _0x2d82c7 = _0x9f2cd6["length"];
      var _0x59367a = new ArrayBuffer(4 * _0x2d82c7 + 4);
      var _0x363509 = new Uint32Array(_0x59367a);
      _0x363509[0] = 6;
      for (var _0x16c2d1 = 0; _0x16c2d1 < _0x2d82c7; _0x16c2d1++) {
        _0x363509[_0x16c2d1 + 1] = _0x9f2cd6["charCodeAt"](_0x16c2d1);
      }
      this["sock"]["send"](_0x59367a);
    }
  }
  ["onUpdateUI"]() {
    if (document["visibilityState"] === "hidden") {
      this["ShowUI"](![]);
    } else {
      this["onUpdatePosition"](0);
    }
  }
  ["onWSmsg"](_0x58f3ff) {
    switch (typeof _0x58f3ff["data"]) {
      case "object":
        {
          var _0x4ff2e7 = new Uint32Array(_0x58f3ff["data"], 0, 1);
          switch (_0x4ff2e7[0]) {
            case 1:
              {
                if (this["bFixSize"] == !![]) {
                  var _0x43210d = new Uint32Array(_0x58f3ff["data"], 0, 5);
                  if (_0x43210d[1] == 0) {
                    var _0x471e6d = new Uint8Array(_0x58f3ff["data"], 20);
                    var _0x4ee17f = new Blob([_0x471e6d], {
                      "type": "image/jpg"
                    });
                    createImageBitmap(_0x4ee17f)["then"](_0x40f7d1 => {
                      this["cctx"]["drawImage"](_0x40f7d1, 0, 0, _0x40f7d1["width"], _0x40f7d1["height"], 0, 0, this["canvas"]["width"], this["canvas"]["height"]);
                    });
                  }
                }
                console["log"]("ws event 1\n");
              }
              break;
            case 2:
              {
                var _0x2dcc74 = _awp_allWebPlugin_["ActivateContainer"];
                _awp_allWebPlugin_["ActivateContainerByPCID"](this["pcid"]);
                var _0x31ffe4 = new Uint8Array(_0x58f3ff["data"], 8);
                const _0x31e95a = new TextDecoder("utf-8");
                const _0x2a48ff = _0x31e95a["decode"](_0x31ffe4);
                var _0x5e2486 = _0x2a48ff["indexOf"]("(");
                var _0x196d34 = _0x2a48ff["slice"](0, _0x5e2486);
                if (typeof window[_0x196d34] === "function") eval(_0x2a48ff);
                _awp_allWebPlugin_["ActivateContainer"] = _0x2dcc74;
                console["log"]("ws event 2\n");
              }
              break;
            case 3:
              {
                this["onUpdateUI"]();
                this["fillRect"]();
                console["log"]("ws event 3\n");
              }
              break;
            case 4:
              {
                this["fillRect"]();
                console["log"]("ws event 4\n");
              }
              break;
            case 5:
              {
                var _0x43210d = new Uint32Array(_0x58f3ff["data"]);
                if (_0x43210d[1] == 0) {
                  this["onUpdatePosition"](1);
                }
                this["fillRect"]();
                console["log"]("ws event 5\n");
              }
              break;
            case 6:
              {
                if (document["visibilityState"] === "visible") {
                  this["onUpdatePosition"](0);
                }
                this["ShowUI"](document["visibilityState"] === "hidden" ? ![] : !![]);
                console["log"]("ws event 6\n");
              }
              break;
            case 7:
              {
                alert(this["alertmsg"]);
                this["EnabledCanvas"](![]);
                console["log"]("ws event 7\n");
              }
              break;
            case 8:
              {
                var _0x250c3a = document["activeElement"];
                if (_0x250c3a) _0x250c3a["blur"]();
                if (_awp_allWebPlugin_) _awp_allWebPlugin_["ActivateContainerByPCID"](this["pcid"]);
                console["log"]("ws event 8\n");
              }
              break;
          }
        }
        break;
    }
  }
  ["onWSopen"](_0x8ea2f) {
    this["open"] = !![];
    if (this["blForceShowUI"] == ![]) {
      this["ForceShowUI"](![]);
    } else if (document["visibilityState"] === "visible") {
      this["ShowUI"](!![]);
      this["onUpdatePosition"](0);
    }
    if (document["visibilityState"] === "hidden") {
      this["ShowUI"](![]);
    }
  }
  ["onWSclose"](_0x36548d) {
    if (!this["isFirefox"]) {
      if (!_0x36548d["wasClean"] && !this["open"]) {}
    }
    this["open"] = ![];
    this["_reset"]();
  }
  ["onWSerr"](_0x14cfd7) {
    this["open"] = ![];
    switch (this["sock"]["readyState"]) {
      case this["sock"]["CONNECTING"]:
        break;
    }
    this["_reset"]();
  }
  ["_mB"](_0x4b87c4) {
    if (this["aMF"]) {
      return this["aMF"];
    }
    var _0x27de27;
    if ("event" in _0x4b87c4 && "button" in _0x4b87c4) {
      _0x27de27 = _0x4b87c4["button"];
    } else {
      _0x27de27 = _0x4b87c4["rightClick"] ? 2 : 0;
    }
    switch (_0x27de27) {
      case 0:
        return 4096;
      case 1:
        return 16384;
      case 2:
        return 8192;
    }
    return 4096;
  }
}
class awpBase64 {
  constructor() {
    this["_keyStr"] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  }
  ["encode"](_0x21888a) {
    let _0xd9c6b6 = "";
    let _0x5bc2d0, _0x1d12fe, _0x4cd6ec, _0x1046a9, _0x371692, _0x359473, _0x5d3924;
    let _0x1bd9d2 = 0;
    _0x21888a = this["_utf8_encode"](_0x21888a);
    while (_0x1bd9d2 < _0x21888a["length"]) {
      _0x5bc2d0 = _0x21888a["charCodeAt"](_0x1bd9d2++);
      _0x1d12fe = _0x21888a["charCodeAt"](_0x1bd9d2++);
      _0x4cd6ec = _0x21888a["charCodeAt"](_0x1bd9d2++);
      _0x1046a9 = _0x5bc2d0 >> 2;
      _0x371692 = (_0x5bc2d0 & 3) << 4 | _0x1d12fe >> 4;
      _0x359473 = (_0x1d12fe & 15) << 2 | _0x4cd6ec >> 6;
      _0x5d3924 = _0x4cd6ec & 63;
      if (isNaN(_0x1d12fe)) {
        _0x359473 = _0x5d3924 = 64;
      } else if (isNaN(_0x4cd6ec)) {
        _0x5d3924 = 64;
      }
      _0xd9c6b6 = _0xd9c6b6 + this["_keyStr"]["charAt"](_0x1046a9) + this["_keyStr"]["charAt"](_0x371692) + this["_keyStr"]["charAt"](_0x359473) + this["_keyStr"]["charAt"](_0x5d3924);
    }
    return _0xd9c6b6;
  }
  ["decode"](_0x434b7c) {
    let _0x19bc5e = "";
    let _0x1779e0, _0x303de1, _0x361035;
    let _0x4ef2bd, _0x386b9a, _0x4191ba, _0x3d2139;
    let _0x22c684 = 0;
    _0x434b7c = _0x434b7c["replace"](/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x22c684 < _0x434b7c["length"]) {
      _0x4ef2bd = this["_keyStr"]["indexOf"](_0x434b7c["charAt"](_0x22c684++));
      _0x386b9a = this["_keyStr"]["indexOf"](_0x434b7c["charAt"](_0x22c684++));
      _0x4191ba = this["_keyStr"]["indexOf"](_0x434b7c["charAt"](_0x22c684++));
      _0x3d2139 = this["_keyStr"]["indexOf"](_0x434b7c["charAt"](_0x22c684++));
      _0x1779e0 = _0x4ef2bd << 2 | _0x386b9a >> 4;
      _0x303de1 = (_0x386b9a & 15) << 4 | _0x4191ba >> 2;
      _0x361035 = (_0x4191ba & 3) << 6 | _0x3d2139;
      _0x19bc5e = _0x19bc5e + String["fromCharCode"](_0x1779e0);
      if (_0x4191ba != 64) {
        _0x19bc5e = _0x19bc5e + String["fromCharCode"](_0x303de1);
      }
      if (_0x3d2139 != 64) {
        _0x19bc5e = _0x19bc5e + String["fromCharCode"](_0x361035);
      }
    }
    _0x19bc5e = Base64["_utf8_decode"](_0x19bc5e);
    return _0x19bc5e;
  }
  ["_utf8_encode"](_0x8b880a) {
    _0x8b880a = _0x8b880a["replace"](/\r\n/g, "\n");
    let _0x10e37b = "";
    for (let _0x2d2a93 = 0; _0x2d2a93 < _0x8b880a["length"]; _0x2d2a93++) {
      let _0x29707c = _0x8b880a["charCodeAt"](_0x2d2a93);
      if (_0x29707c < 128) {
        _0x10e37b += String["fromCharCode"](_0x29707c);
      } else if (_0x29707c > 127 && _0x29707c < 2048) {
        _0x10e37b += String["fromCharCode"](_0x29707c >> 6 | 192);
        _0x10e37b += String["fromCharCode"](_0x29707c & 63 | 128);
      } else {
        _0x10e37b += String["fromCharCode"](_0x29707c >> 12 | 224);
        _0x10e37b += String["fromCharCode"](_0x29707c >> 6 & 63 | 128);
        _0x10e37b += String["fromCharCode"](_0x29707c & 63 | 128);
      }
    }
    return _0x10e37b;
  }
  ["_utf8_decode"](_0x4763cd) {
    let _0x5958ca = "";
    let _0x56968d = 0;
    let _0x6e3c78 = c1 = c2 = 0;
    while (_0x56968d < _0x4763cd["length"]) {
      _0x6e3c78 = _0x4763cd["charCodeAt"](_0x56968d);
      if (_0x6e3c78 < 128) {
        _0x5958ca += String["fromCharCode"](_0x6e3c78);
        _0x56968d++;
      } else if (_0x6e3c78 > 191 && _0x6e3c78 < 224) {
        c2 = _0x4763cd["charCodeAt"](_0x56968d + 1);
        _0x5958ca += String["fromCharCode"]((_0x6e3c78 & 31) << 6 | c2 & 63);
        _0x56968d += 2;
      } else {
        c2 = _0x4763cd["charCodeAt"](_0x56968d + 1);
        c3 = _0x4763cd["charCodeAt"](_0x56968d + 2);
        _0x5958ca += String["fromCharCode"]((_0x6e3c78 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
        _0x56968d += 3;
      }
    }
    return _0x5958ca;
  }
}