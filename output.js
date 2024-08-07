//Wed Aug 07 2024 07:08:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {
  "use strict";

  function _0x205fx1() {
    addictionPreventionMsg = "";
    addictionPreventionResetTime = -1;
    addictionPreventionSurplusTime = -1;
    addictionPreventionUserInfo = {
      "userRealName": 1,
      "userRealAge": 21,
      "userIsVisitor": false
    };
    if (clientType !== 3 && _0x5f31ba([32, 188959, 32, 188953, 38, 37]) !== clientType && clientType !== 7) {
      countServer.cumulativeEffectiveTime = () => {
        return 0;
      };
    }
    addictionPreventionUserInfo.userIsVisitor = false;
    addictionPreventionUserInfo.userRealAge = 21;
    addictionPreventionUserInfo.userRealName = 1;
    commonPlayer.loginStatus = true;
    commonPlayer.platform = 4;
    commonPlayer.rotate_screen = true;
    commonPlayer.gameMenu.fullScreen = true;
    firstSave = true;
    gLoadAssets.otherSceneUI.NewMall = false;
    gLoadAssets.otherSceneUI.SSavefile = false;
    gLoadAssets.otherSceneUI.STitle = true;
    isM = false;
    isSCUI = false;
    mark.H5 = true;
    mark.WEB = false;
    GloableData.getInstance().userData.isLogin = true;
  }
  var _0x205fx2 = setInterval(_0x205fx1, 1000);
  setTimeout(() => {
    clearInterval(_0x205fx2);
    console.log("Execution stopped after 15 seconds.");
  }, 15000);
  var _0x205fx3 = document.createElement("button"),
    _0x205fx4 = document.createElement("button");
  function _0x205fx5(_0x205fx6) {
    console.log(_0x205fx6);
  }
  function _0x205fx7(_0x205fx8) {
    _0x205fx5("Node 1 test passed");
    _0x205fx5("Executing commands:", _0x205fx8);
    eval(_0x205fx8);
  }
  function _0x205fx9(_0x205fx8, _0x205fx2, _0x205fxa = 30) {
    setTimeout(function () {
      if (typeof GloableData !== "undefined") {
        _0x205fx7(_0x205fx8);
      } else {
        if (_0x205fxa > 0) {
          _0x205fx5("GloableData is not defined yet. Retrying in 1 second. Retry count: " + (30 - _0x205fxa));
          setTimeout(function () {
            _0x205fx9(_0x205fx8, _0x205fx2, _0x205fxa - 1);
          }, _0x205fx2);
        } else {
          _0x205fx5("Failed to retrieve GloableData.");
        }
      }
    }, 450);
  }
  let _0x205fxb = false;
  const _0x205fxc = () => {
      if (!_0x205fxb) {
        _0x205fxd();
      } else {
        _0x205fxe();
      }
    },
    _0x205fxd = () => {
      const _0x205fx11 = document.documentElement;
      _0x205fxb = true;
      _0x205fx3.style.display = "none";
      if (_0x205fx11.requestFullscreen) {
        _0x205fx11.requestFullscreen();
      } else {
        if (_0x205fx11.mozRequestFullScreen) {
          _0x205fx11.mozRequestFullScreen();
        } else {
          if (_0x205fx11.webkitRequestFullscreen) {
            _0x205fx11.webkitRequestFullscreen();
          }
        }
      }
      if (screen.orientation?.[["lock"]("landscape")]) {}
    },
    _0x205fxe = () => {
      _0x205fxb = false;
      _0x205fx3.style.display = "block";
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else {
        if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else {
          if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          }
        }
      }
      if (screen.orientation?.[["unlock"]()]) {}
    },
    _0x205fxf = () => {
      if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
        _0x205fxb = true;
        _0x205fx3.style.display = "none";
        _0x205fx10();
      } else {
        _0x205fxb = false;
        _0x205fx3.style.display = "block";
        _0x205fx10();
      }
    },
    _0x205fx10 = () => {
      if (_0x205fxb) {
        _0x205fx4.style.display = "block";
      } else {
        _0x205fx4.style.display = "none";
      }
    };
  var _0x205fx12 = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (_0x205fx13, _0x205fx14) {
    if (_0x205fx14.match(/^https:\/\/www\.66rpg\.com\/ajax\/TryPlay\/get_try_play_/)) {
      console.log("Blocked AJAX request:", _0x205fx14);
      return;
    }
    _0x205fx12.apply(this, arguments);
  };
  function _0x205fx15() {
    var _0x205fx8 = "";
    for (let _0x205fx16 = 1; _0x205fx16 <= 40; _0x205fx16++) {
      _0x205fx8 += "GloableData.getInstance().mallBuyItem[" + _0x205fx16 + "] = { id: " + _0x205fx16 + ", count: -66666, max: 8886 }; ";
    }
    _0x205fx9(_0x205fx8, 100);
  }
  function _0x205fx17() {
    for (let _0x205fx16 = 0; _0x205fx16 < localStorage.length; _0x205fx16++) {
      const _0x205fx18 = localStorage.key(_0x205fx16),
        _0x205fx19 = localStorage.getItem(_0x205fx18);
      console.log("Key: " + _0x205fx18 + ", Value: " + _0x205fx19);
    }
  }
  function _0x205fx1a() {
    Object.defineProperty(window, "debugger", {
      "get": function () {
        return undefined;
      },
      "set": function () {}
    });
    _0x205fx5("Node 2 test passed");
    _0x205fx15();
  }
  _0x205fx1a();
  (function () {
    Function.prototype.__constructor_back = Function.prototype.constructor;
    Function.prototype.constructor = function () {
      if (arguments && typeof arguments[0] === "string") {
        if (arguments[0] === "debugger") {
          return;
        }
      }
      return Function.prototype.constructor_back.apply(this, arguments);
    };
  })();
  document.addEventListener("fullscreenchange", _0x205fxf);
  document.addEventListener("webkitfullscreenchange", _0x205fxf);
  document.addEventListener("mozfullscreenchange", _0x205fxf);
  setTimeout(function () {
    var _0x205fx1b = localStorage.getItem("lastInputValue");
    if (_0x205fx1b !== null) {
      _0x205fx1d(parseInt(_0x205fx1b));
    }
    _0x205fx3.textContent = "累充数值ruan";
    _0x205fx3.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    _0x205fx3.style.color = "#ffffff";
    _0x205fx3.style.border = "none";
    _0x205fx3.style.zIndex = "9999";
    _0x205fx3.style.borderRadius = "0";
    _0x205fx3.style.padding = "10px";
    _0x205fx3.style.position = "fixed";
    _0x205fx3.style.top = "5px";
    _0x205fx3.style.right = "10px";
    _0x205fx3.style.select = "none";
    _0x205fx3.style.border = "none";
    _0x205fx3.style.cursor = "pointer";
    document.body.appendChild(_0x205fx3);
    _0x205fx3.addEventListener("click", function () {
      var _0x205fx1c = prompt("qr\n输入鲜花数量", localStorage.getItem("lastInputValue"));
      _0x205fx1c = parseInt(_0x205fx1c);
      if (!isNaN(_0x205fx1c) && _0x205fx1c > 0) {
        localStorage.setItem("lastInputValue", _0x205fx1c);
        _0x205fx1d(_0x205fx1c);
        _0x205fxc();
      } else {
        if (_0x205fx1c === null) {
          var _0x205fx1b = localStorage.getItem("lastInputValue");
          if (_0x205fx1b !== null) {
            _0x205fx1d(parseInt(_0x205fx1b));
          }
          _0x205fxc();
        } else {
          alert("输入正确鲜花数值");
        }
      }
    });
    _0x205fx4.style.position = "fixed";
    _0x205fx4.style.zIndex = "9999";
    _0x205fx4.style.top = "10px";
    _0x205fx4.style.left = "10px";
    _0x205fx4.textContent = "退出全屏qr";
    _0x205fx4.style.userSelect = "none";
    _0x205fx4.style.display = "none";
    _0x205fx4.addEventListener("click", _0x205fxe);
    document.body.appendChild(_0x205fx4);
    function _0x205fx1d(_0x205fx1c) {
      if (typeof userData !== "undefined") {
        userData.totalFlower = _0x205fx1c;
      }
      if (typeof gIndex !== "undefined") {
        gIndex = "1676647";
      }
    }
  }, 100);
})();