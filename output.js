//Fri Dec 06 2024 03:57:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _url = window["location"]["href"];
var awp_ws_url = "ws://127.0.0.1:6651/ws";
var awp_url = "http://127.0.0.1:6651/plugin";
if (_url["indexOf"]("https") == 0) {
  awp_url = "https://local.zsignyun.com:6652/plugin";
  awp_ws_url = "wss://local.zsignyun.com:6652/ws";
}
var timeouts = 36000000;
var _awp_allWebPlugin_ = null;
const _awp_bro_Alert = window["alert"];
const _awp_bro_Confirm = window["confirm"];
const _awp_bro_Prompt = window["prompt"];
function SendXMLHttpRequest(_0x59cb8d, _0x38f010, _0x480d00, _0xa1c7e4) {
  var _0x395c8d = new XMLHttpRequest();
  _0x395c8d["open"]("POST", awp_url, _0x480d00);
  if (_0x480d00 == ![]) try {
    _0x395c8d["timeout"] = timeouts;
  } catch (_0x55e4cd) {
    console["log"]("xhr.timeout fail");
  }
  _0x395c8d["setRequestHeader"]("Accept", "application/json; charset=utf-8");
  _0x395c8d["setRequestHeader"]("X-Requested-With", "XMLHttpRequest");
  _0x395c8d["setRequestHeader"]("Content-Type", "application/json;charset=utf-8");
  if (_0x480d00 == ![]) _0x395c8d["send"](JSON["stringify"](_0xa1c7e4));
  return _0x395c8d;
}
class allWebPlugin {
  constructor() {
    this["HostCnts"] = [];
    this["_usePluginUI"] = ![];
    this["_pluginUtility"] = null;
    this["_httpClient"] = null;
    this["_blInit"] = ![];
    this["_ActivateContainer"] = null;
    this["isFirefox"] = window["navigator"]["userAgent"]["toLowerCase"]()["indexOf"]("firefox");
    _awp_allWebPlugin_ = this;
  }
  ["getExploreName"]() {
    var _0x1ad833 = navigator["userAgent"];
    if (_0x1ad833["indexOf"]("Opera") > -1 || _0x1ad833["indexOf"]("OPR") > -1) {
      return "Opera";
    } else if (_0x1ad833["indexOf"]("compatible") > -1 && _0x1ad833["indexOf"]("MSIE") > -1) {
      return "IE";
    } else if (_0x1ad833["indexOf"]("Edge") > -1) {
      return "Edge";
    } else if (_0x1ad833["indexOf"]("Edg") > -1) {
      return "Edge";
    } else if (_0x1ad833["indexOf"]("Firefox") > -1) {
      return "Firefox";
    } else if (_0x1ad833["indexOf"]("Safari") > -1 && _0x1ad833["indexOf"]("Chrome") == -1) {
      return "Safari";
    } else if (_0x1ad833["indexOf"]("Chrome") > -1 && _0x1ad833["indexOf"]("Safari") > -1) {
      return "Chrome";
    } else if (!!window["ActiveXObject"] || "ActiveXObject" in window) {
      return "IE>=11";
    } else {
      return "Unkonwn";
    }
  }
  ["createContainer"](_0x337a5e, _0x514049, _0x3b9e11, _0x51a593, _0x4eb5c1) {
    if (_0x51a593 === undefined || _0x51a593 == null) _0x51a593 = !![];
    if (_0x4eb5c1 == undefined || _0x4eb5c1 == null) _0x4eb5c1 = !![];
    var _0x16089b = window["devicePixelRatio"] || window["webkitDevicePixelRatio"] || window["mozDevicePixelRatio"] || 1;
    var _0x2d1f88 = window["screenX"] | window["screenLeft"];
    var _0x1fd80d = window["screenY"] | window["screenTop"];
    var _0x56fb91 = window["outerWidth"];
    var _0x537e87 = window["outerHeight"];
    var _0x137089 = this["getExploreName"]();
    var _0x53182f = document["title"];
    var _0x2209ed = _0x337a5e["getBoundingClientRect"]();
    var _0x3d7fe6 = _0x2209ed["left"];
    var _0x2175ff = _0x2209ed["top"];
    var _0x2de3b8 = _0x2209ed["width"];
    var _0x10d0b0 = _0x2209ed["height"];
    var _0x20bd83 = {
      "cmd": "CreateContainer",
      "progid": _0x514049,
      "lic": _0x3b9e11,
      "dpi": _0x16089b,
      "left": _0x2d1f88,
      "top": _0x1fd80d,
      "width": _0x56fb91,
      "height": _0x537e87,
      "name": _0x137089,
      "title": _0x53182f,
      "cleft": _0x3d7fe6,
      "ctop": _0x2175ff,
      "cwidth": _0x2de3b8,
      "cheight": _0x10d0b0
    };
    var _0x2ee5ae = "";
    var _0x4b19c1 = null;
    var _0x3a07ad = SendXMLHttpRequest("POST", awp_url, ![], _0x20bd83);
    if (_0x3a07ad["status"] === 200) {
      var _0x7d6c16 = JSON["parse"](_0x3a07ad["responseText"]);
      if (_0x7d6c16["code"] == 0) {
        _0x2ee5ae = _0x7d6c16["pcid"];
        _awp_allWebPlugin_["Init"]();
        _0x4b19c1 = new PluginHostCnt(_0x2ee5ae, new allWebPluginUI(awp_ws_url + "?pcid=" + _0x2ee5ae, awp_url, _0x337a5e, _0x2ee5ae, _0x51a593));
        _awp_allWebPlugin_["HostCnts"]["push"](_0x4b19c1);
        _awp_allWebPlugin_["ActivateContainer"] = _0x4b19c1;
        _awp_allWebPlugin_["_usePluginUI"] = _0x4eb5c1;
      } else {
        alert(_0x7d6c16["msg"]);
      }
    } else {
      alert("net error: " + _0x3a07ad["status"]);
    }
    return _0x4b19c1;
  }
  ["destroyContainer"](_0x5e1729) {
    var _0xc141c0 = null;
    if (_0x5e1729 === null || _0x5e1729["pcid"] === null) return;
    _0x5e1729["UI"]["ShowUI"](![]);
    _0x5e1729["destroyContainer"]();
    if (this["_ActivateContainer"] === _0x5e1729) this["_ActivateContainer"] = null;
    for (let _0x2907dd = 0; _0x2907dd < this["HostCnts"]["length"]; _0x2907dd++) {
      const _0x217667 = this["HostCnts"][_0x2907dd];
      if (_0x217667["pcid"] === _0x5e1729["pcid"]) {
        this["HostCnts"]["splice"](_0x2907dd, 1);
        break;
      }
    }
  }
  ["destroyAllContainer"]() {
    for (let _0x184d3e = 0; _0x184d3e < this["HostCnts"]["length"]; _0x184d3e++) {
      const _0x42c937 = this["HostCnts"][_0x184d3e];
      if (_0x42c937 != null) {
        _0x42c937["destroyContainer"]();
      }
    }
    this["_ActivateContainer"] = null;
  }
  get ["ActivateContainer"]() {
    return this["_ActivateContainer"];
  }
  set ["ActivateContainer"](_0x3b9428) {
    this["_ActivateContainer"] = _0x3b9428;
  }
  ["ActivateContainerByPCID"](_0xade188) {
    for (let _0x548e3f = 0; _0x548e3f < this["HostCnts"]["length"]; _0x548e3f++) {
      const _0x50c50a = this["HostCnts"][_0x548e3f];
      if (_0x50c50a != null && _0x50c50a["pcid"] === _0xade188) {
        this["_ActivateContainer"] = this["HostCnts"][_0x548e3f];
        break;
      }
    }
  }
  ["IsNewVersion"](_0x497598) {
    var _0x307d76 = {
      "cmd": "IsNewVersion",
      "ver": _0x497598
    };
    var _0xbda3d2 = ![];
    var _0xd1a808 = SendXMLHttpRequest("POST", awp_url, ![], _0x307d76);
    if (_0xd1a808["status"] === 200) {
      var _0x5f593e = JSON["parse"](_0xd1a808["responseText"]);
      if (_0x5f593e["code"] == 0) {
        _0xbda3d2 = !![];
      } else {
        _0xbda3d2 = ![];
      }
    } else {
      _0xbda3d2 = ![];
    }
    return _0xbda3d2;
  }
  ["GetVersion"]() {
    var _0x1d4c72 = {
      "cmd": "GetVersion"
    };
    var _0x2e52f3 = "";
    var _0x12bdc9 = SendXMLHttpRequest("POST", awp_url, ![], _0x1d4c72);
    if (_0x12bdc9["status"] === 200) {
      var _0x256f02 = JSON["parse"](_0x12bdc9["responseText"]);
      if (_0x256f02["code"] == 0) {
        _0x2e52f3 = _0x256f02["msg"];
      } else {
        _0x2e52f3 = "";
      }
    } else {}
    return _0x2e52f3;
  }
  ["IsInstall"]() {
    var _0x4c53e2 = {
      "cmd": "IsInstall"
    };
    var _0x3663d2 = ![];
    var _0xa25116 = SendXMLHttpRequest("POST", awp_url, ![], _0x4c53e2);
    if (_0xa25116["status"] === 200) {
      var _0x1a7c7c = JSON["parse"](_0xa25116["responseText"]);
      _0x3663d2 = !![];
    } else {
      console["error"]("Error: " + _0xa25116["status"]);
    }
    return _0x3663d2;
  }
  ["UpdateVersion"](_0xde21a) {
    var _0x37374b = {
      "cmd": "UpdateVersion",
      "src": _0xde21a
    };
    return new Promise(function (_0x5bbf77, _0x1edcf5) {
      var _0xc4ba16 = SendXMLHttpRequest("POST", awp_url, !![]);
      _0xc4ba16["onreadystatechange"] = function () {
        if (_0xc4ba16["readyState"] === XMLHttpRequest["DONE"]) {
          if (_0xc4ba16["status"] === 200) {
            var _0x17ad69 = JSON["parse"](_0xc4ba16["responseText"]);
            _0x5bbf77(_0x17ad69);
          } else {
            _0x1edcf5(_0xc4ba16["status"]);
          }
        }
      };
      _0xc4ba16["send"](JSON["stringify"](_0x37374b));
    });
  }
  ["ShowUI"](_0x3c6c9d) {
    for (let _0x4aacc2 = 0; _0x4aacc2 < this["HostCnts"]["length"]; _0x4aacc2++) {
      const _0x4eb358 = this["HostCnts"][_0x4aacc2];
      if (_0x4eb358 != null) {
        _0x4eb358["UI"]["ShowUI"](_0x3c6c9d);
      }
    }
  }
  ["Init"]() {
    if (this["_blInit"]) return;
    window["alert"] = function (_0x5e97f5) {
      var _0x162e63;
      if (_awp_allWebPlugin_["_usePluginUI"] && _awp_allWebPlugin_["ActivateContainer"] != null) {
        _0x162e63 = _awp_allWebPlugin_["ActivateContainer"]["getPluginUtility"]()["Alert"](_0x5e97f5);
      } else {
        _awp_allWebPlugin_["ShowUI"](![]);
        _0x162e63 = _awp_bro_Alert(_0x5e97f5);
        _awp_allWebPlugin_["ShowUI"](!![]);
      }
      return _0x162e63;
    };
    window["confirm"] = function (_0x5db88f) {
      var _0x33071f;
      if (_awp_allWebPlugin_["_usePluginUI"] && _awp_allWebPlugin_["ActivateContainer"] != null) {
        _0x33071f = _awp_allWebPlugin_["ActivateContainer"]["getPluginUtility"]()["Confirm"](_0x5db88f);
      } else {
        _awp_allWebPlugin_["ShowUI"](![]);
        _0x33071f = _awp_bro_Confirm(_0x5db88f);
        _awp_allWebPlugin_["ShowUI"](!![]);
      }
      return _0x33071f;
    };
    window["prompt"] = function (_0x368822, _0x37bc9c) {
      var _0x254172;
      if (_awp_allWebPlugin_["_usePluginUI"] && _awp_allWebPlugin_["ActivateContainer"] != null) {
        _0x254172 = _awp_allWebPlugin_["ActivateContainer"]["getPluginUtility"]()["Prompt"](_0x368822, _0x37bc9c);
      } else {
        _awp_allWebPlugin_["ShowUI"](![]);
        _0x254172 = _awp_bro_Prompt(_0x368822, _0x37bc9c);
        _awp_allWebPlugin_["ShowUI"](!![]);
      }
      return _0x254172;
    };
    setInterval(this["check_allWebPlugin_Status_Timer"], 3000);
    window["addEventListener"]("beforeunload", this["onBeforeunload"]["bind"](this), ![]);
    window["addEventListener"]("unload", this["onBeforeunload"]["bind"](this), ![]);
    window["addEventListener"]("resize", this["onWindowResize"]["bind"](this));
    if (document["addEventListener"]) document["addEventListener"]("visibilitychange", this["onShowUI"]["bind"](this));else document["attachEvent"]("onvisibilitychange", this["onShowUI"]["bind"](this));
    if (!this["isFirefox"]) {
      if (window["pageXOffset"] != undefined) document["addEventListener"]("scroll", this["onScrollEvent"]["bind"](this));else window["addEventListener"]("scroll", this["onScrollEvent"]["bind"](this));
    } else {
      document["addEventListener"]("scroll", this["onScrollEvent"]["bind"](this));
    }
    this["_blInit"] = !![];
  }
  ["check_allWebPlugin_Status_Timer"]() {
    for (let _0x3e7bfe = 0; _0x3e7bfe < _awp_allWebPlugin_["HostCnts"]["length"]; _0x3e7bfe++) {
      const _0x1a436d = _awp_allWebPlugin_["HostCnts"][_0x3e7bfe];
      if (_0x1a436d != null) {
        if (_0x1a436d["UI"] === null || _0x1a436d["UI"] === undefined || _0x1a436d["UI"]["sock"] === null || _0x1a436d["UI"]["sock"] === undefined) continue;
        if (_0x1a436d["UI"]["sock"]["readyState"] === _0x1a436d["UI"]["sock"]["CLOSED"]) _0x1a436d["UI"]["Run"]();
        if (document["visibilityState"] === "visible") {
          _0x1a436d["UI"]["SynchUI"](_0x1a436d["UI"]["blForceShowUI"]);
          _0x1a436d["UI"]["onUpdatePosition"](0);
        } else {
          _0x1a436d["UI"]["SynchUI"](![]);
        }
      }
    }
  }
  ["onBeforeunload"](_0x3bf6d6) {
    var _0x395497 = "";
    for (let _0xc29285 = 0; _0xc29285 < _awp_allWebPlugin_["HostCnts"]["length"]; _0xc29285++) {
      const _0x25946f = _awp_allWebPlugin_["HostCnts"][_0xc29285];
      if (_0x25946f != null) {
        _0x395497 += _0x25946f["pcid"] + ";";
      }
    }
    var _0x3db4a4 = {
      "cmd": "DestroyContainer",
      "pcid": _0x395497
    };
    navigator["sendBeacon"](awp_url, JSON["stringify"](_0x3db4a4));
  }
  ["onShowUI"](_0x242ad9) {
    for (let _0x2b07dd = 0; _0x2b07dd < _awp_allWebPlugin_["HostCnts"]["length"]; _0x2b07dd++) {
      const _0x4001c3 = _awp_allWebPlugin_["HostCnts"][_0x2b07dd];
      if (_0x4001c3) {
        if (_0x4001c3["UI"] === null || _0x4001c3["UI"] === undefined || _0x4001c3["UI"]["sock"] === null || _0x4001c3["UI"]["sock"] === undefined) continue;
        if (_0x4001c3["UI"]["sock"]["readyState"] === _0x4001c3["UI"]["sock"]["CLOSED"]) _0x4001c3["UI"]["Run"]();
        if (document["visibilityState"] === "visible") {
          _0x4001c3["UI"]["onUpdatePosition"](0);
        }
        if (_0x4001c3["UI"]["blForceShowUI"] == !![]) _0x4001c3["UI"]["ShowUI"](document["visibilityState"] === "hidden" ? ![] : !![]);else _0x4001c3["UI"]["ShowUI"](![]);
      }
    }
  }
  ["onScrollEvent"](_0x199f52) {
    for (let _0x4ada40 = 0; _0x4ada40 < _awp_allWebPlugin_["HostCnts"]["length"]; _0x4ada40++) {
      const _0x1c0777 = _awp_allWebPlugin_["HostCnts"][_0x4ada40];
      if (_0x1c0777) {
        if (_0x1c0777["UI"] === null || _0x1c0777["UI"] === undefined || _0x1c0777["UI"]["sock"] === null || _0x1c0777["UI"]["sock"] === undefined) continue;
        if (_0x1c0777["UI"]["sock"]["readyState"] === _0x1c0777["UI"]["sock"]["CLOSED"]) _0x1c0777["UI"]["Run"]();
        if (document["visibilityState"] === "visible" && _0x1c0777["UI"]["blForceShowUI"] == !![]) {
          _0x1c0777["UI"]["ShowUI"](!![]);
          _0x1c0777["UI"]["onUpdatePosition"](0);
        } else {
          _0x1c0777["UI"]["ShowUI"](![]);
        }
      }
    }
  }
  ["onWindowResize"](_0x4bfbd1) {
    for (let _0x3aea76 = 0; _0x3aea76 < _awp_allWebPlugin_["HostCnts"]["length"]; _0x3aea76++) {
      const _0x54e724 = _awp_allWebPlugin_["HostCnts"][_0x3aea76];
      if (_0x54e724) {
        if (_0x54e724["UI"] === null || _0x54e724["UI"] === undefined || _0x54e724["UI"]["sock"] === null || _0x54e724["UI"]["sock"] === undefined) continue;
        if (_0x54e724["UI"]["sock"]["readyState"] === _0x54e724["UI"]["sock"]["CLOSED"]) _0x54e724["Run"]();
        if (document["visibilityState"] === "visible" && _0x54e724["UI"]["blForceShowUI"] == !![]) {
          _0x54e724["UI"]["ShowUI"](!![]);
          _0x54e724["UI"]["onUpdatePosition"](1);
        } else {
          _0x54e724["UI"]["ShowUI"](![]);
        }
      }
    }
  }
}
class PluginHostCnt {
  constructor(_0x9209c0, _0x4d0b61) {
    if (_0x9209c0 == undefined) _0x9209c0 = "";
    if (_0x4d0b61 === undefined) _0x4d0b61 = null;
    this["pcid"] = _0x9209c0;
    this["UI"] = _0x4d0b61;
    this["_msg"] = "";
    this["_ObjectAx"] = null;
    if (this["UI"]) {
      this["UI"]["Run"]();
    }
  }
  ["get_msg"]() {
    return this["_msg"];
  }
  ["get_pcid"]() {
    return this["pcid"];
  }
  ["getExploreName"]() {
    var _0xa33007 = navigator["userAgent"];
    if (_0xa33007["indexOf"]("Opera") > -1 || _0xa33007["indexOf"]("OPR") > -1) {
      return "Opera";
    } else if (_0xa33007["indexOf"]("compatible") > -1 && _0xa33007["indexOf"]("MSIE") > -1) {
      return "IE";
    } else if (_0xa33007["indexOf"]("Edge") > -1) {
      return "Edge";
    } else if (_0xa33007["indexOf"]("Edg") > -1) {
      return "Edge";
    } else if (_0xa33007["indexOf"]("Firefox") > -1) {
      return "Firefox";
    } else if (_0xa33007["indexOf"]("Safari") > -1 && _0xa33007["indexOf"]("Chrome") == -1) {
      return "Safari";
    } else if (_0xa33007["indexOf"]("Chrome") > -1 && _0xa33007["indexOf"]("Safari") > -1) {
      return "Chrome";
    } else if (!!window["ActiveXObject"] || "ActiveXObject" in window) {
      return "IE>=11";
    } else {
      return "Unkonwn";
    }
  }
  ["createContainer"](_0x412f45, _0x144906, _0x264a95, _0x29b184, _0x2d4729) {
    if (_0x29b184 === undefined || _0x29b184 == null) _0x29b184 = !![];
    if (_0x2d4729 == undefined || _0x2d4729 == null) _0x2d4729 = !![];
    if (_awp_allWebPlugin_ == null) _awp_allWebPlugin_ = new allWebPlugin();
    var _0x333676 = window["devicePixelRatio"] || window["webkitDevicePixelRatio"] || window["mozDevicePixelRatio"] || 1;
    var _0x3f7f78 = window["screenX"] | window["screenLeft"];
    var _0x2aa086 = window["screenY"] | window["screenTop"];
    var _0x1cb00c = window["outerWidth"];
    var _0x5e16f1 = window["outerHeight"];
    var _0x4088ec = this["getExploreName"]();
    var _0x52e963 = document["title"];
    var _0x23ae4e = _0x412f45["getBoundingClientRect"]();
    var _0x5e74dd = _0x23ae4e["left"];
    var _0x260c2e = _0x23ae4e["top"];
    var _0xdba179 = _0x23ae4e["width"];
    var _0x3249d9 = _0x23ae4e["height"];
    var _0x2f4abe = {
      "cmd": "CreateContainer",
      "progid": _0x144906,
      "lic": _0x264a95,
      "dpi": _0x333676,
      "left": _0x3f7f78,
      "top": _0x2aa086,
      "width": _0x1cb00c,
      "height": _0x5e16f1,
      "name": _0x4088ec,
      "title": _0x52e963,
      "cleft": _0x5e74dd,
      "ctop": _0x260c2e,
      "cwidth": _0xdba179,
      "cheight": _0x3249d9
    };
    var _0x389973 = "";
    var _0x1e951d = ![];
    var _0x175477 = null;
    this["pcid"] = "";
    var _0x26ec9d = SendXMLHttpRequest("POST", awp_url, ![], _0x2f4abe);
    if (_0x26ec9d["status"] === 200) {
      var _0x5919cf = JSON["parse"](_0x26ec9d["responseText"]);
      if (_0x5919cf["code"] == 0) {
        _0x389973 = _0x5919cf["pcid"];
        _awp_allWebPlugin_["Init"]();
        _0x175477 = new allWebPluginUI(awp_ws_url + "?pcid=" + _0x389973, awp_url, _0x412f45, _0x389973, _0x29b184);
        _0x1e951d = !![];
      } else {
        alert(_0x5919cf["msg"]);
      }
    } else {
      console["error"]("net error: " + _0x26ec9d["status"]);
    }
    this["UI"] = _0x175477;
    if (this["UI"] != null) {
      this["UI"]["Run"]();
      _awp_allWebPlugin_["_usePluginUI"] = _0x2d4729;
      _awp_allWebPlugin_["HostCnts"]["push"](this);
      _awp_allWebPlugin_["ActivateContainer"] = this;
    }
    this["pcid"] = _0x389973;
    return _0x1e951d;
  }
  ["destroyContainer"]() {
    var _0x1feac8 = {
      "cmd": "DestroyContainer",
      "pcid": this["pcid"]
    };
    var _0x2e524b = SendXMLHttpRequest("POST", awp_url, ![], _0x1feac8);
    if (_0x2e524b["status"] === 200) {
      var _0x162044 = JSON["parse"](_0x2e524b["responseText"]);
    } else {
      console["error"]("Error: " + _0x2e524b["status"]);
    }
  }
  ["IsNewVersion"](_0x2b9cf7) {
    var _0x1e7f58 = {
      "cmd": "IsNewVersion",
      "ver": _0x2b9cf7
    };
    var _0x1511ae = ![];
    var _0x5899e8 = SendXMLHttpRequest("POST", awp_url, ![], _0x1e7f58);
    if (_0x5899e8["status"] === 200) {
      var _0x347b60 = JSON["parse"](_0x5899e8["responseText"]);
      if (_0x347b60["code"] == 0) _0x1511ae = !![];
    } else {
      console["error"]("Error: " + _0x5899e8["status"]);
    }
    return _0x1511ae;
  }
  ["GetVersion"]() {
    var _0x41c98d = {
      "cmd": "GetVersion"
    };
    var _0xfae6c9 = "";
    var _0x115f46 = SendXMLHttpRequest("POST", awp_url, ![], _0x41c98d);
    if (_0x115f46["status"] === 200) {
      var _0xc465b3 = JSON["parse"](_0x115f46["responseText"]);
      if (_0xc465b3["code"] == 0) _0xfae6c9 = _0xc465b3["msg"];
    } else {
      console["error"]("Error: " + _0x115f46["status"]);
    }
    return _0xfae6c9;
  }
  ["IsInstall"]() {
    var _0x423913 = {
      "cmd": "IsInstall"
    };
    var _0x14c735 = ![];
    var _0x4ace46 = SendXMLHttpRequest("POST", awp_url, ![], _0x423913);
    if (_0x4ace46["status"] === 200) {
      _0x14c735 = !![];
    } else {
      console["error"]("Error: " + _0x4ace46["status"]);
    }
    return _0x14c735;
  }
  ["UpdateVersion"](_0x52435b) {
    var _0x387b6e = {
      "cmd": "UpdateVersion",
      "src": _0x52435b
    };
    return new Promise(function (_0x52f81d, _0xb37d1d) {
      var _0x3a4d38 = SendXMLHttpRequest("POST", awp_url, !![]);
      _0x3a4d38["onreadystatechange"] = function () {
        if (_0x3a4d38["readyState"] === XMLHttpRequest["DONE"]) {
          if (_0x3a4d38["status"] === 200) {
            var _0x573a1e = JSON["parse"](_0x3a4d38["responseText"]);
            _0x52f81d(_0x573a1e);
          } else {
            console["error"]("Error: " + _0x3a4d38["status"]);
            _0xb37d1d(_0x3a4d38["status"]);
          }
        }
      };
      _0x3a4d38["send"](JSON["stringify"](_0x387b6e));
    });
  }
  ["createPlugin"](_0x1a74c9, _0x425114) {
    if (_0x425114 === undefined) _0x425114 = "";
    this["clsID"] = _0x1a74c9;
    var _0x4ac032 = null;
    if (this["pcid"] == "") return _0x4ac032;
    var _0x3db2ac = {
      "cmd": "CreatePlugin",
      "clsid": _0x1a74c9,
      "params": _0x425114,
      "pcid": this["pcid"]
    };
    var _0x367cfb = this;
    var _0x22b2a8 = SendXMLHttpRequest("POST", awp_url, ![], _0x3db2ac);
    if (_0x22b2a8["status"] === 200) {
      var _0x4e5df6 = JSON["parse"](_0x22b2a8["responseText"]);
      if (_0x4e5df6["code"] == 0) _0x4ac032 = _0x4e5df6;else {
        alert(_0x4e5df6["msg"]);
        console["log"](_0x4e5df6["msg"]);
      }
    } else {
      console["error"]("Error: " + _0x22b2a8["status"]);
    }
    return _0x4ac032;
  }
  ["createProxyPlugin"](_0x36550b, _0x405de8) {
    if (_0x405de8 === undefined) _0x405de8 = "";
    this["clsID"] = _0x36550b;
    var _0x3d7a74 = null;
    if (this["pcid"] == "") return _0x3d7a74;
    var _0x3cbf7f = {
      "cmd": "CreatePlugin",
      "clsid": _0x36550b,
      "params": _0x405de8,
      "pcid": this["pcid"]
    };
    var _0x1560b5 = SendXMLHttpRequest("POST", awp_url, ![], _0x3cbf7f);
    if (_0x1560b5["status"] === 200) {
      var _0x17d85e = JSON["parse"](_0x1560b5["responseText"]);
      if (_0x17d85e["code"] == 0) {
        _0x3d7a74 = new Proxy(new AxObject(_0x3cbf7f["pcid"], _0x17d85e["ret"]["v"], _0x17d85e["ret"]["t"]), AxObjectHandle);
      } else {
        alert(_0x17d85e["msg"]);
        console["log"](_0x17d85e["msg"]);
      }
    } else {
      console["error"]("Error: " + _0x1560b5["status"]);
    }
    this["_ObjectAx"] = _0x3d7a74;
    return _0x3d7a74;
  }
  get ["ObjectAx"]() {
    return this["_ObjectAx"];
  }
  set ["ObjectAx"](_0x2aef80) {
    this["_ObjectAx"] = _0x2aef80;
  }
  ["getHttpClient"]() {
    var _0x26c429 = null;
    if (this["pcid"] == "") return _0x26c429;
    if (this["_httpClient"] != null) return this["_httpClient"];
    var _0x56a2fd = {
      "cmd": "GetObject",
      "name": "httpclient",
      "pcid": this["pcid"]
    };
    var _0x4e793d = SendXMLHttpRequest("POST", awp_url, ![], _0x56a2fd);
    if (_0x4e793d["status"] === 200) {
      var _0x4eff32 = JSON["parse"](_0x4e793d["responseText"]);
      _0x26c429 = new httpclient(_0x4eff32["pcid"], _0x4eff32["ret"]["v"]);
    } else {
      console["error"]("Error: " + _0x4e793d["status"]);
    }
    this["_httpClient"] = _0x26c429;
    return _0x26c429;
  }
  ["getPluginUtility"]() {
    var _0x239671 = null;
    if (this["_pluginUtility"] != null) return this["_pluginUtility"];
    if (this["pcid"] == "") return _0x239671;
    var _0x5ab337 = {
      "cmd": "GetObject",
      "name": "pluginutility",
      "pcid": this["pcid"]
    };
    var _0x3eb899 = SendXMLHttpRequest("POST", awp_url, ![], _0x5ab337);
    if (_0x3eb899["status"] === 200) {
      var _0x2632bc = JSON["parse"](_0x3eb899["responseText"]);
      _0x239671 = new PluginUtility(_0x2632bc["pcid"], _0x2632bc["ret"]["v"]);
    } else {
      console["error"]("Error: " + _0x3eb899["status"]);
    }
    this["_pluginUtility"] = _0x239671;
    return _0x239671;
  }
  ["RegisterEvent"](_0x2ebeb8) {
    var _0x5e24dc;
    var _0x4cbe9c = {
      "cmd": "CCmd",
      "pcid": this["pcid"],
      "fun": "RegisterEvent",
      "params": [_0x2ebeb8]
    };
    var _0xd70ce0 = ![];
    var _0x317231 = SendXMLHttpRequest("POST", awp_url, ![], _0x4cbe9c);
    if (_0x317231["status"] === 200) {
      var _0x378e93 = JSON["parse"](_0x317231["responseText"]);
      if (_0x378e93["code"] === 0) {
        _0xd70ce0 = !![];
      }
    } else {
      console["error"]("Error: " + _0x317231["status"]);
    }
    return _0xd70ce0;
  }
}
class NObject {
  constructor(_0x572f10, _0x6cd2db) {
    this["pcid"] = _0x572f10;
    this["obj"] = _0x6cd2db;
    this["msg"] = "";
  }
  ["InvokeObject"]() {
    var _0x14c33b;
    if (arguments["length"] < 1) return _0x14c33b;
    var _0x4ff02a = [];
    for (var _0x206a0c = 1; _0x206a0c < arguments["length"]; _0x206a0c++) {
      if (typeof arguments[_0x206a0c] === "object" && arguments[_0x206a0c] !== null) {
        var _0x2500c8 = arguments[_0x206a0c]["obj"];
        var _0x101036 = {
          "obj": _0x2500c8
        };
        _0x4ff02a["push"](_0x101036);
      } else {
        if (arguments[_0x206a0c] === undefined) arguments[_0x206a0c] = null;
        _0x4ff02a["push"](arguments[_0x206a0c]);
      }
    }
    var _0x1ae972 = {
      "cmd": "InvokePlugin",
      "pcid": this["pcid"],
      "obj": this["obj"],
      "fun": arguments[0],
      "params": _0x4ff02a
    };
    var _0x36af2c = SendXMLHttpRequest("POST", awp_url, ![], _0x1ae972);
    if (_0x36af2c["status"] === 200) {
      var _0x4ba767 = JSON["parse"](_0x36af2c["responseText"]);
      if (_0x4ba767["code"] == 0) {
        _0x14c33b = _0x4ba767["ret"];
      } else {
        this["msg"] = _0x4ba767["msg"];
        console["log"]("Invoke Start-\n");
        console["log"](_0x1ae972);
        console["log"](_0x4ba767);
        console["log"]("Invoke End-\n");
      }
    } else {
      console["error"]("Error: " + _0x36af2c["status"]);
    }
    return _0x14c33b;
  }
  ["get_pcid"]() {
    return this["pcid"];
  }
  ["get_obj"]() {
    return this["obj"];
  }
  ["get_msg"]() {
    return this["msg"];
  }
}
class AxObject {
  constructor(_0xbf6d2, _0x3ba75d, _0x25a439) {
    this["pcid"] = _0xbf6d2;
    this["obj"] = _0x3ba75d;
    this["objtype"] = _0x25a439;
    this["msg"] = "";
    this["code"] = 0;
  }
  ["Invoke"]() {
    var _0x2e57b7;
    var _0x1fe2b8;
    if (arguments["length"] < 1) return _0x2e57b7;
    var _0x306794 = [];
    if (arguments[1] instanceof Array) {
      for (var _0x5cf58e = 0; _0x5cf58e < arguments[1]["length"]; _0x5cf58e++) {
        if (typeof arguments[1][_0x5cf58e] === "object" && arguments[1][_0x5cf58e] !== null) {
          var _0x3451eb = arguments[1][_0x5cf58e]["obj"];
          var _0x3f0f7a = {
            "obj": _0x3451eb
          };
          _0x306794["push"](_0x3f0f7a);
        } else {
          if (arguments[1][_0x5cf58e] === undefined) arguments[1][_0x5cf58e] = null;
          _0x306794["push"](arguments[1][_0x5cf58e]);
        }
      }
    } else {
      for (var _0x5cf58e = 1; _0x5cf58e < arguments["length"]; _0x5cf58e++) {
        if (typeof arguments[_0x5cf58e] === "object" && arguments[_0x5cf58e] !== null) {
          var _0x3451eb = arguments[_0x5cf58e]["obj"];
          var _0x3f0f7a = {
            "obj": _0x3451eb
          };
          _0x306794["push"](_0x3f0f7a);
        } else {
          if (arguments[_0x5cf58e] === undefined) arguments[_0x5cf58e] = null;
          _0x306794["push"](arguments[_0x5cf58e]);
        }
      }
    }
    var _0x413fab = {
      "cmd": "InvokePlugin",
      "pcid": this["pcid"],
      "obj": this["obj"],
      "fun": arguments[0],
      "params": _0x306794
    };
    var _0x30bc53 = SendXMLHttpRequest("POST", awp_url, ![], _0x413fab);
    if (_0x30bc53["status"] === 200) {
      var _0x75bbd = JSON["parse"](_0x30bc53["responseText"]);
      _0x1fe2b8 = _0x75bbd["code"];
      if (_0x75bbd["code"] == 0) {
        _0x2e57b7 = _0x75bbd["ret"];
      } else {
        this["msg"] = _0x75bbd["msg"];
        console["log"]("Invoke Start-\n");
        console["log"](_0x413fab);
        console["log"](_0x75bbd);
        console["log"]("Invoke End-\n");
      }
    } else {
      console["error"]("Error: " + _0x30bc53["status"]);
    }
    this["code"] = _0x1fe2b8;
    return _0x2e57b7;
  }
  ["InvokeProp"]() {
    var _0x3f4c3c;
    var _0x338a2f;
    if (arguments["length"] < 1) return _0x3f4c3c;
    var _0x2f9f01 = [];
    if (arguments[1] instanceof Array) {
      for (var _0x5442d3 = 0; _0x5442d3 < arguments[1]["length"]; _0x5442d3++) {
        if (typeof arguments[1][_0x5442d3] === "object" && arguments[1][_0x5442d3] !== null) {
          var _0x2bb22e = arguments[1][_0x5442d3]["obj"];
          var _0x205b70 = {
            "obj": _0x2bb22e
          };
          _0x2f9f01["push"](_0x205b70);
        } else {
          if (arguments[1][_0x5442d3] === undefined) arguments[1][_0x5442d3] = null;
          _0x2f9f01["push"](arguments[1][_0x5442d3]);
        }
      }
    } else {
      for (var _0x5442d3 = 1; _0x5442d3 < arguments["length"]; _0x5442d3++) {
        if (typeof arguments[_0x5442d3] === "object" && arguments[_0x5442d3] !== null) {
          var _0x2bb22e = arguments[_0x5442d3]["obj"];
          var _0x205b70 = {
            "obj": _0x2bb22e
          };
          _0x2f9f01["push"](_0x205b70);
        } else {
          if (arguments[_0x5442d3] === undefined) arguments[_0x5442d3] = null;
          _0x2f9f01["push"](arguments[_0x5442d3]);
        }
      }
    }
    var _0x106612 = {
      "cmd": "InvokePlugin",
      "pcid": this["pcid"],
      "obj": this["obj"],
      "fun": arguments[0],
      "params": _0x2f9f01
    };
    var _0x3cfc14 = SendXMLHttpRequest("POST", awp_url, ![], _0x106612);
    if (_0x3cfc14["status"] === 200) {
      var _0x3bce29 = JSON["parse"](_0x3cfc14["responseText"]);
      _0x338a2f = _0x3bce29["code"];
      if (_0x3bce29["code"] == 0) {
        _0x3f4c3c = _0x3bce29["ret"];
      } else if (_0x3bce29["code"] = 1011) {
        this["msg"] = _0x3bce29["msg"];
      } else {
        this["msg"] = _0x3bce29["msg"];
        console["log"]("Invoke Start-\n");
        console["log"](_0x106612);
        console["log"](_0x3bce29);
        console["log"]("Invoke End-\n");
      }
    } else {
      console["error"]("Error: " + _0x3cfc14["status"]);
      this["msg"] = _0x3cfc14["status"];
    }
    this["code"] = _0x338a2f;
    return _0x3f4c3c;
  }
  ["get_pcid"]() {
    return this["pcid"];
  }
  ["get_obj"]() {
    return this["obj"];
  }
  ["get_msg"]() {
    return this["msg"];
  }
}
const AxObjectHandle = {
  "AxObj": [],
  "findAxObj": function (_0x1ba81c, _0x23e7de) {
    var _0x5c2fd5 = null;
    for (let _0x1dca29 = 0; _0x1dca29 < AxObjectHandle["AxObj"]["length"]; _0x1dca29++) {
      const _0x14b8d0 = AxObjectHandle["AxObj"][_0x1dca29];
      if (_0x14b8d0 != null && _0x14b8d0["pcid"] === _0x1ba81c && _0x14b8d0["obj"] === _0x23e7de) {
        _0x5c2fd5 = _0x14b8d0;
        break;
      }
    }
    return _0x5c2fd5;
  },
  "get": function (_0x1468c3, _0x1b1b20) {
    const _0x5f0954 = function (..._0x2365de) {
      var _0x48b487 = _0x1468c3["InvokeProp"]("wget_" + _0x1b1b20, _0x2365de);
      var _0x12360f;
      if (_0x48b487 === undefined || _0x48b487 === null || typeof _0x48b487 !== "object") return _0x48b487;
      if (_0x48b487["v"] === null || _0x48b487["v"] === undefined) {
        return undefined;
      }
      if ((_0x12360f = AxObjectHandle["findAxObj"](_0x1468c3["get_pcid"](), _0x48b487["v"])) !== null) {
        return _0x12360f;
      } else {
        _0x12360f = new Proxy(new AxObject(_0x1468c3["get_pcid"](), _0x48b487["v"], _0x48b487["t"]), AxObjectHandle);
        AxObjectHandle["AxObj"]["push"](_0x12360f);
        return _0x12360f;
      }
    };
    const _0x56c4ce = function (..._0x460fd9) {
      var _0x29c374 = _0x1468c3["Invoke"](_0x1b1b20, _0x460fd9);
      var _0x4de431;
      if (_0x29c374 === undefined || _0x29c374 === null || typeof _0x29c374 !== "object") return _0x29c374;
      if (_0x29c374["v"] === null || _0x29c374["v"] === undefined) {
        return undefined;
      }
      if ((_0x4de431 = AxObjectHandle["findAxObj"](_0x1468c3["get_pcid"](), _0x29c374["v"])) !== null) {
        return _0x4de431;
      } else {
        _0x4de431 = new Proxy(new AxObject(_0x1468c3["get_pcid"](), _0x29c374["v"], _0x29c374["t"]), AxObjectHandle);
        AxObjectHandle["AxObj"]["push"](_0x4de431);
        return _0x4de431;
      }
    };
    const _0x5ac2c6 = function (..._0x2a4fcb) {
      var _0x1e130b;
      var _0x7a4356 = _0x1b1b20["substr"](0, _0x1b1b20["length"] - 5);
      var _0x5bfef4 = [];
      for (var _0x5bcd97 = 0; _0x5bcd97 < _0x2a4fcb["length"]; _0x5bcd97++) {
        if (typeof _0x2a4fcb[_0x5bcd97] === "object" && _0x2a4fcb[_0x5bcd97] !== null) {
          var _0x13597b = _0x2a4fcb[_0x5bcd97]["obj"];
          var _0x2259bb = {
            "obj": _0x13597b
          };
          _0x5bfef4["push"](_0x2259bb);
        } else {
          if (_0x2a4fcb[_0x5bcd97] === undefined) _0x2a4fcb[_0x5bcd97] = null;
          _0x5bfef4["push"](_0x2a4fcb[_0x5bcd97]);
        }
      }
      var _0x432a98 = {
        "cmd": "InvokePlugin",
        "pcid": this["pcid"],
        "obj": this["obj"],
        "fun": _0x7a4356,
        "params": _0x5bfef4
      };
      return new Promise(function (_0x3e2ac4, _0x2ebac1) {
        var _0x406e30 = SendXMLHttpRequest("POST", awp_url, !![]);
        _0x406e30["onreadystatechange"] = function () {
          if (_0x406e30["readyState"] === XMLHttpRequest["DONE"]) {
            if (_0x406e30["status"] === 200) {
              var _0x3a4902 = JSON["parse"](_0x406e30["responseText"]);
              if (_0x3a4902["code"] == 0) {
                _0x1e130b = _0x3a4902["ret"];
                var _0x245162 = null;
                if (_0x1e130b === undefined || _0x1e130b === null || typeof _0x1e130b !== "object") _0x3e2ac4(_0x1e130b);
                if (_0x1e130b["v"] === null || _0x1e130b["v"] === undefined) {
                  _0x3e2ac4(undefined);
                } else if ((_0x245162 = AxObjectHandle["findAxObj"](_0x1468c3["get_pcid"](), _0x1e130b["v"])) !== null) {
                  _0x3e2ac4(_0x245162);
                } else {
                  _0x245162 = new Proxy(new AxObject(_0x1468c3["get_pcid"](), _0x1e130b["v"], _0x1e130b["t"]), AxObjectHandle);
                  AxObjectHandle["AxObj"]["push"](_0x245162);
                  _0x3e2ac4(_0x245162);
                }
              } else {
                this["msg"] = _0x3a4902["msg"];
                console["log"]("Invoke Start-\n");
                console["log"](_0x432a98);
                console["log"](_0x3a4902);
                console["log"]("Invoke End-\n");
                _0x2ebac1(_0x3a4902);
              }
            } else {
              console["error"]("Error: " + _0x406e30["status"]);
            }
          }
        };
        _0x406e30["send"](JSON["stringify"](_0x432a98));
      });
    };
    if (_0x1b1b20 in _0x1468c3) {
      return _0x1468c3[_0x1b1b20];
    } else {
      var _0x474ff0;
      if (typeof _0x1b1b20 === "string" && typeof _0x1468c3[_0x1b1b20] !== "function") {
        var _0x33d03b = _0x1b1b20["slice"](-5);
        var _0x218c09;
        if (_0x33d03b == "_Asyn") {
          _0x218c09 = _0x5ac2c6;
        } else {
          _0x218c09 = _0x56c4ce;
        }
        _0x1468c3[_0x1b1b20] = _0x218c09;
        return _0x1468c3[_0x1b1b20];
      }
      return _0x474ff0;
    }
  },
  "set": function (_0x2ab1a2, _0x4c55a4, _0xb38543) {
    var _0x113784 = "put_" + _0x4c55a4;
    _0x2ab1a2["Invoke"](_0x113784, _0xb38543);
    return !![];
  },
  "has": function (_0x17c661, _0x34f1b8) {
    return _0x34f1b8 in _0x17c661;
  }
};
class PluginUtility extends NObject {
  constructor(_0x5625cb, _0x26c0b0) {
    super(_0x5625cb, _0x26c0b0);
  }
  ["GetTempFileName"](_0x54190c, _0xeacfd6) {
    return this["InvokeObject"]("GetTempFileName", _0x54190c, _0xeacfd6);
  }
  ["GetTempPath"]() {
    return this["InvokeObject"]("GetTempPath");
  }
  ["CreateDirectory"](_0x3836d0) {
    return this["InvokeObject"]("CreateDirectory", _0x3836d0);
  }
  ["DeleteFile"](_0xb62a5) {
    return this["InvokeObject"]("DeleteFile", _0xb62a5);
  }
  ["ClearDirectory"](_0x42a140) {
    return this["InvokeObject"]("ClearDirectory", _0x42a140);
  }
  ["GetFileSize"](_0x2be49c) {
    return this["InvokeObject"]("GetFileSize", _0x2be49c);
  }
  ["FilePathExists"](_0x1886ca) {
    return this["InvokeObject"]("FilePathExists", _0x1886ca);
  }
  ["DirectoryExists"](_0x11baf9) {
    return this["InvokeObject"]("DirectoryExists", _0x11baf9);
  }
  ["Alert"](_0x431801) {
    var _0x55695b = 0;
    var _0x3aaaf3 = document["title"] === "" ? "allWebPluin\u4E2D\u95F4\u4EF6-\u63D0\u793A" : document["title"] + "-\u63D0\u793A";
    var _0x2eaae3 = 0;
    var _0x44a82f = {
      "cmd": "InvokePlugin",
      "pcid": this["pcid"],
      "obj": this["obj"],
      "fun": "ShowMessage",
      "params": [_0x431801, _0x3aaaf3, _0x2eaae3]
    };
    var _0x43dab5 = SendXMLHttpRequest("POST", awp_url, ![], _0x44a82f);
    if (_0x43dab5["status"] === 200) {
      var _0x3b7451 = JSON["parse"](_0x43dab5["responseText"]);
      _0x55695b = _0x3b7451["ret"];
    } else {
      console["error"]("Error: " + _0x43dab5["status"]);
    }
    return _0x55695b;
  }
  ["Confirm"](_0x5bf542) {
    var _0x2e0c72 = 0;
    var _0x1248a0 = document["title"] === "" ? "allWebPluin\u4E2D\u95F4\u4EF6-\u786E\u8BA4" : document["title"] + "-\u786E\u8BA4";
    var _0x24df41 = 1;
    var _0x1f7301 = {
      "cmd": "InvokePlugin",
      "pcid": this["pcid"],
      "obj": this["obj"],
      "fun": "ShowMessage",
      "params": [_0x5bf542, _0x1248a0, _0x24df41]
    };
    var _0x2c0bf0 = SendXMLHttpRequest("POST", awp_url, ![], _0x1f7301);
    if (_0x2c0bf0["status"] === 200) {
      var _0x3818e7 = JSON["parse"](_0x2c0bf0["responseText"]);
      _0x2e0c72 = _0x3818e7["ret"];
    } else {
      console["error"]("Error: " + _0x2c0bf0["status"]);
    }
    return _0x2e0c72 == 1 ? !![] : ![];
  }
  ["Prompt"](_0x146ed8, _0x3cf00c) {
    var _0x99f3be;
    var _0x136079 = document["title"] === "" ? "allWebPluin\u4E2D\u95F4\u4EF6-\u8BF7\u8F93\u5165" : document["title"] + "-\u8BF7\u8F93\u5165";
    var _0xb4f18c = {
      "cmd": "InvokePlugin",
      "pcid": this["pcid"],
      "obj": this["obj"],
      "fun": "Prompt",
      "params": [_0x146ed8, _0x3cf00c, _0x136079]
    };
    var _0x5aff5f = SendXMLHttpRequest("POST", awp_url, ![], _0xb4f18c);
    if (_0x5aff5f["status"] === 200) {
      var _0x1ee426 = JSON["parse"](_0x5aff5f["responseText"]);
      if (_0x1ee426["ret"]["code"] == 1) {
        _0x99f3be = _0x1ee426["ret"]["value"];
      }
    } else {
      console["error"]("Error: " + _0x5aff5f["status"]);
    }
    return _0x99f3be;
  }
  ["GetLocalOpenDialog"](_0x3c2f1b) {
    var _0x28408e = {
      "cmd": "InvokePlugin",
      "pcid": this["pcid"],
      "obj": this["obj"],
      "fun": "GetLocalOpenDialog",
      "params": [_0x3c2f1b]
    };
    return new Promise(function (_0x35c090, _0xba7154) {
      var _0x1c58be = SendXMLHttpRequest("POST", awp_url, !![]);
      _0x1c58be["onreadystatechange"] = function () {
        if (_0x1c58be["readyState"] === XMLHttpRequest["DONE"]) {
          if (_0x1c58be["status"] === 200) {
            var _0x5f5611 = JSON["parse"](_0x1c58be["responseText"]);
            _0x35c090(_0x5f5611["ret"]);
          } else {
            _0xba7154(_0x1c58be["status"]);
          }
        }
      };
      _0x1c58be["send"](JSON["stringify"](_0x28408e));
    });
  }
  ["GetLocalSaveDialog"](_0x58c371) {
    var _0x5268f7 = {
      "cmd": "InvokePlugin",
      "pcid": this["pcid"],
      "obj": this["obj"],
      "fun": "GetLocalSaveDialog",
      "params": [_0x58c371]
    };
    return new Promise(function (_0x3a68d5, _0xe5042f) {
      var _0x4c61e0 = SendXMLHttpRequest("POST", awp_url, !![]);
      _0x4c61e0["onreadystatechange"] = function () {
        if (_0x4c61e0["readyState"] === XMLHttpRequest["DONE"]) {
          if (_0x4c61e0["status"] === 200) {
            var _0x3eb244 = JSON["parse"](_0x4c61e0["responseText"]);
            _0x3a68d5(_0x3eb244["ret"]);
          } else {
            _0xe5042f(_0x4c61e0["status"]);
          }
        }
      };
      _0x4c61e0["send"](JSON["stringify"](_0x5268f7));
    });
  }
  ["ShowMessage"](_0x2d5228, _0x347589, _0x34e5f9) {
    if (_0x347589 === undefined) _0x347589 = document["title"] === "" ? "allWebPlugin" : document["title"];
    if (_0x34e5f9 === undefined) _0x34e5f9 = 0;
    var _0x247be1 = {
      "cmd": "InvokePlugin",
      "pcid": this["pcid"],
      "obj": this["obj"],
      "fun": "ShowMessage",
      "params": [_0x2d5228, _0x347589, _0x34e5f9]
    };
    return new Promise(function (_0x47f03e, _0x4dc9b5) {
      var _0x4ba815 = SendXMLHttpRequest("POST", awp_url, !![]);
      _0x4ba815["onreadystatechange"] = function () {
        if (_0x4ba815["readyState"] === XMLHttpRequest["DONE"]) {
          if (_0x4ba815["status"] === 200) {
            var _0x5c6909 = JSON["parse"](_0x4ba815["responseText"]);
            _0x47f03e(_0x5c6909["ret"]);
          } else {
            _0x4dc9b5(_0x4ba815["status"]);
          }
        }
      };
      _0x4ba815["send"](JSON["stringify"](_0x247be1));
    });
  }
  ["ExecuteApp"](_0x38fc5c, _0x45c0a7) {
    var _0x132f0a = {
      "cmd": "InvokePlugin",
      "pcid": this["pcid"],
      "obj": this["obj"],
      "fun": "ExecuteApp",
      "params": [_0x38fc5c, _0x45c0a7]
    };
    return new Promise(function (_0xd8f8cd, _0x3e85e6) {
      var _0x209b54 = SendXMLHttpRequest("POST", awp_url, !![]);
      _0x209b54["onreadystatechange"] = function () {
        if (_0x209b54["readyState"] === XMLHttpRequest["DONE"]) {
          if (_0x209b54["status"] === 200) {
            var _0x105ee1 = JSON["parse"](_0x209b54["responseText"]);
            _0xd8f8cd(_0x105ee1["ret"]);
          } else {
            _0x3e85e6(_0x209b54["status"]);
          }
        }
      };
      _0x209b54["send"](JSON["stringify"](_0x132f0a));
    });
  }
  ["IsExistApp"](_0x56d634) {
    return this["InvokeObject"]("IsExistApp", _0x56d634);
  }
  ["KillApp"](_0x501fab) {
    return this["InvokeObject"]("KillApp", _0x501fab);
  }
}
class httpclient extends NObject {
  constructor(_0x516200, _0x1aee0f) {
    super(_0x516200, _0x1aee0f);
  }
  ["Open"](_0x58e769, _0x13adab, _0x26d611, _0x5497f8, _0x324c92) {
    return this["InvokeObject"]("Open", _0x58e769, _0x13adab, _0x26d611, _0x5497f8, _0x324c92);
  }
  ["Close"]() {
    return this["InvokeObject"]("Close");
  }
  ["SetRequestHeader"](_0x35f88e, _0x2b342f) {
    return this["InvokeObject"]("SetRequestHeader", _0x35f88e, _0x2b342f);
  }
  ["Send"]() {
    var _0xb31e6a = this;
    return new Promise(function (_0x3b7a08, _0x1429a1) {
      var _0x16a2be = _0xb31e6a["InvokeObject"]("Send");
      if (_0x16a2be === undefined) {
        _0x1429a1(_0xb31e6a["get_msg"]());
      } else {
        _0x3b7a08(_0x16a2be);
      }
    });
  }
  ["AddForm"](_0xc4f4ce, _0x3ca509) {
    return this["InvokeObject"]("AddForm", _0xc4f4ce, _0x3ca509);
  }
  ["AddFile"](_0x598b9d, _0x1fb274) {
    return this["InvokeObject"]("AddFile", _0x598b9d, _0x1fb274);
  }
  ["Clear"]() {
    return this["InvokeObject"]("Clear");
  }
  ["GetStatus"]() {
    return this["InvokeObject"]("GetStatus");
  }
  ["GetStatusText"]() {
    return this["InvokeObject"]("GetStatusText");
  }
  ["GetResponseText"]() {
    return this["InvokeObject"]("GetResponseText");
  }
  ["GetResponseHeader"](_0x1f43fd) {
    return this["InvokeObject"]("GetResponseHeader", _0x1f43fd);
  }
  ["GetAllResponseHeaders"]() {
    return this["InvokeObject"]("GetAllResponseHeaders");
  }
  ["GetErrorCode"]() {
    return this["InvokeObject"]("GetErrorCode");
  }
  ["GetErrorText"]() {
    return this["InvokeObject"]("GetErrorText");
  }
  get ["ShowProgressUI"]() {
    return this["InvokeObject"]("GetShowProgressUI");
  }
  set ["ShowProgressUI"](_0x5978d6) {
    return this["InvokeObject"]("PutShowProgressUI", _0x5978d6);
  }
  ["AddString"](_0x1eec16) {
    return this["InvokeObject"]("AddString", _0x1eec16);
  }
  ["SetHttpTimeOut"](_0x2cd084) {
    return this["InvokeObject"]("SetHttpTimeOut", _0x2cd084);
  }
  ["SetCookie"](_0x443a2b) {
    return this["InvokeObject"]("SetCookie", _0x443a2b);
  }
  ["ResponseSaveToFile"](_0x5463be) {
    return this["InvokeObject"]("ResponseSaveToFile", _0x5463be);
  }
}