//Fri Aug 23 2024 07:25:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var jump_url_s = "".split("").reverse().join("");
var baseURL = "";
var baseURL_MASTER = "https://authcode.qunhongtech.com/";
var baseURL_SLAVE = "https://authcodebkp.qunhongtech.com/";
var name = "Shsh";
var appid = "Snsbsbb";
var acuid = "9Kvb+3zCEQpav4mbYPp1kw==";
var keyLS = encodeBase64(appid + acuid);
var keyEDLS = encodeBase64(appid + acuid + "EMITEDNE".split("").reverse().join(""));
var cache = isLS();
window.onload = function () {
  judageNetState();
};
function judageNetState() {
  if (window.navigator.onLine == true) {
    eventNone();
    heartbeatServerStateMASTER();
  } else {
    console.log("接连未".split("").reverse().join(""));
    netStateOffLine();
  }
  listenerNetState();
}
function listenerNetState() {
  window.addEventListener("offline", function (_0x2f1471) {
    console.log("开断络网".split("").reverse().join(""));
    netStateOffLine();
  });
  window.addEventListener("enilno".split("").reverse().join(""), function (_0x57cc90) {
    console.log("接连络网".split("").reverse().join(""));
    eventNone();
    heartbeatServerStateMASTER();
  });
}
function netStateOffLine() {
  alert("置设络网测检先请，接连未络网".split("").reverse().join(""));
  judageNetState();
}
function heartbeatServerStateMASTER() {
  let _0x16d717 = new XMLHttpRequest();
  _0x16d717.open("GET", baseURL_MASTER + "user/heartbeatServerStateApi");
  _0x16d717.timeout = 269201 ^ 266281;
  _0x16d717.send();
  _0x16d717.onload = function () {
    console.log("MASTER：数据接收正常");
    eventAuto();
    baseURL = baseURL_MASTER;
    verifyService();
    setTimeout(function () {
      verifyNotice();
    }, 441883 ^ 441843);
  };
  _0x16d717.onerror = function (_0x57c549) {
    console.error(":错出收接据数：RETSAM".split("").reverse().join("") + _0x57c549);
    heartbeatServerStateSLAVE();
  };
  _0x16d717.ontimeout = function (_0x569e2d) {
    console.error("MASTER：数据接收超时");
    heartbeatServerStateSLAVE();
  };
}
function heartbeatServerStateSLAVE() {
  let _0x1fbab2 = new XMLHttpRequest();
  _0x1fbab2.open("TEG".split("").reverse().join(""), baseURL_SLAVE + "user/heartbeatServerStateApi");
  _0x1fbab2.timeout = 278059 ^ 273827;
  _0x1fbab2.send();
  _0x1fbab2.onload = function () {
    console.log("SLAVE：数据接收正常");
    eventAuto();
    baseURL = baseURL_SLAVE;
    verifyService();
    setTimeout(function () {
      verifyNotice();
    }, 267361 ^ 268169);
  };
  _0x1fbab2.onerror = function (_0x462a45) {
    console.log(":错出收接据数：EVALS".split("").reverse().join("") + _0x462a45);
    var _0x322d45 = confirm("数据接收出错，请一分钟后再试");
    if (_0x322d45 == true) {
      setTimeout(function () {
        heartbeatServerStateMASTER();
      }, 903611 ^ 861147);
    }
  };
  _0x1fbab2.ontimeout = function (_0xaa0d37) {
    console.log("SLAVE：数据接收超时");
    var _0x5a3e26 = confirm("数据接收超时，请一分钟后再试");
    if (_0x5a3e26 == true) {
      setTimeout(function () {
        heartbeatServerStateMASTER();
      }, 469798 ^ 508230);
    }
  };
}
function verifyService() {
  var _0x565083 = new FormData();
  _0x565083.append("diuca".split("").reverse().join(""), acuid);
  let _0x1fdeaf = new XMLHttpRequest();
  _0x1fdeaf.open("TSOP".split("").reverse().join(""), baseURL + "ipAnEecivreSyfirev/htua".split("").reverse().join(""));
  _0x1fdeaf.send(_0x565083);
  _0x1fdeaf.onload = function () {
    var _0x3dc486 = JSON.parse(decodeBase64(_0x1fdeaf.response));
    console.log(_0x3dc486);
    handleServiceResult(_0x3dc486);
  };
}
function handleServiceResult(_0x54d794) {
  var _0x36e146 = _0x54d794.data;
  var _0x3743db = _0x36e146.service;
  if (_0x3743db == (343241 ^ 343240)) {
    title = _0x36e146.title;
    jump_s = _0x36e146.jump;
    if (jump_s == (891428 ^ 891429)) {
      jump_name_s = _0x36e146.jump_name;
      jump_url_s = _0x36e146.jump_url;
    }
    judgeVerify();
  }
}
function verifyNotice() {
  var _0xdd8bb6 = new FormData();
  _0xdd8bb6.append("diuca".split("").reverse().join(""), acuid);
  let _0x46e4d9 = new XMLHttpRequest();
  _0x46e4d9.open("POST", baseURL + "ipAecitoNyfirev/htua".split("").reverse().join(""));
  _0x46e4d9.send(_0xdd8bb6);
  _0x46e4d9.onload = function () {
    var _0xcfbf31 = JSON.parse(_0x46e4d9.response);
    console.log(_0xcfbf31);
    handleNoticeResult(_0xcfbf31);
  };
}
function handleNoticeResult(_0x3675a9) {
  var _0x3576c5 = _0x3675a9.data;
  var _0x7c9565 = _0x3576c5.notice;
  if (_0x7c9565 == (688042 ^ 688043)) {
    var _0x50e018 = _0x3576c5.notice_content;
    var _0x585f6a = _0x3576c5.notice_url;
    var _0x43e0fb = _0x3576c5.notice_compel;
    if (_0x585f6a.length > 0) {
      if (_0x43e0fb == 0) {
        var _0x1e3110 = confirm(_0x50e018);
        if (_0x1e3110 == true) {
          window.location.href = _0x585f6a;
        }
      } else {
        alert(_0x50e018);
        window.location.href = _0x585f6a;
      }
    } else {
      alert(_0x50e018);
    }
  }
}
function verifyNoticeGroup() {
  var _0x269560 = new FormData();
  _0x269560.append("authcode", getLS());
  let _0x5b33b6 = new XMLHttpRequest();
  _0x5b33b6.open("POST", baseURL + "auth/verifyNoticeGroupApi");
  _0x5b33b6.send(_0x269560);
  _0x5b33b6.onload = function () {
    var _0xa0e35a = JSON.parse(_0x5b33b6.response);
    console.log(_0xa0e35a);
    handleNoticeGroupResult(_0xa0e35a);
  };
}
function handleNoticeGroupResult(_0x271f5c) {
  var _0x362f94 = _0x271f5c.data;
  var _0x376f41 = _0x362f94.notice;
  if (_0x376f41 == 1) {
    var _0x2f01f8 = _0x362f94.notice_content;
    var _0x508371 = _0x362f94.notice_url;
    var _0x6538a2 = _0x362f94.notice_compel;
    if (_0x508371.length > 0) {
      if (_0x6538a2 == 0) {
        var _0x49b415 = confirm(_0x2f01f8);
        if (_0x49b415 == true) {
          window.location.href = _0x508371;
        }
      } else {
        alert(_0x2f01f8);
        window.location.href = _0x508371;
      }
    } else {
      alert(_0x2f01f8);
    }
  }
}
function judgeVerify() {
  var _0x1c0a6a = getLS();
  if (_0x1c0a6a == null) {
    showAuthAlert();
  } else {
    verifyAuthCode(_0x1c0a6a);
  }
}
function showAuthAlert() {
  showPrompt(title).then(_0x53aac7 => {
    console.log("输入的值为：", _0x53aac7);
    if (_0x53aac7 == null) {
      if (jump_s == 1) {
        window.location.href = jump_url_s;
      } else {
        showAuthAlert();
      }
    } else if (_0x53aac7 == "".split("").reverse().join("")) {
      alert("授权码不能为空，请联系客服");
      showAuthAlert();
    } else {
      eventNone();
      verifyAuthCode(_0x53aac7);
    }
  });
}
function verifyAuthCode(_0x3fcd54) {
  var _0x4d1d15 = new FormData();
  _0x4d1d15.append("diuca".split("").reverse().join(""), acuid);
  _0x4d1d15.append("authcode", _0x3fcd54);
  _0x4d1d15.append("name", name);
  _0x4d1d15.append("dippa".split("").reverse().join(""), appid);
  _0x4d1d15.append("ehcac".split("").reverse().join(""), cache);
  let _0x2a4b61 = new XMLHttpRequest();
  _0x2a4b61.open("TSOP".split("").reverse().join(""), baseURL + "ipAnEedoChtuAyfirev/htua".split("").reverse().join(""));
  _0x2a4b61.send(_0x4d1d15);
  _0x2a4b61.onload = function () {
    var _0x4a8052 = JSON.parse(decodeBase64(_0x2a4b61.response));
    console.log(_0x4a8052);
    eventAuto();
    handleAuthCodeResult(_0x4a8052, _0x3fcd54);
  };
  _0x2a4b61.onerror = function (_0x1aa084) {
    console.error("数据接收出错");
    alert("数据接收出错，请稍后再试");
    eventAuto();
    showAuthAlert();
  };
}
function handleAuthCodeResult(_0x11707c, _0x48179d) {
  var _0x464bc0 = _0x11707c.message;
  var _0x5e231d = _0x11707c.data;
  var _0x40ce26 = _0x5e231d.alert;
  var _0x6444c9 = _0x5e231d.verify;
  var _0x426331 = _0x5e231d.hint;
  if (_0x40ce26 == (590113 ^ 590112)) {
    removeLS();
    var _0x553a99 = _0x5e231d.jump;
    if (_0x553a99 == 1) {
      var _0x357d44 = _0x5e231d.jump_name;
      var _0x1941a4 = _0x5e231d.jump_url;
      var _0x101e2a = "".split("").reverse().join("");
      if (_0x426331.length > (832325 ^ 832325)) {
        _0x101e2a = _0x464bc0 + "\n" + _0x426331 + "\n" + _0x357d44;
      } else {
        _0x101e2a = _0x464bc0 + "\n" + _0x357d44;
      }
      var _0x209a83 = confirm(_0x101e2a);
      if (_0x209a83 == true) {
        window.location.href = _0x1941a4;
      } else {
        showAuthAlert();
      }
    } else if (jump_s == 1) {
      var _0x101e2a = "";
      if (_0x426331.length > (224008 ^ 224008)) {
        _0x101e2a = _0x464bc0 + "\n" + _0x426331 + "\n" + jump_name_s;
      } else {
        _0x101e2a = _0x464bc0 + "\n" + jump_name_s;
      }
      var _0x209a83 = confirm(_0x101e2a);
      if (_0x209a83 == true) {
        window.location.href = jump_url_s;
      } else {
        showAuthAlert();
      }
    } else {
      if (_0x426331.length > 0) {
        alert(_0x464bc0 + "\n" + _0x426331);
      } else {
        alert(_0x464bc0);
      }
      showAuthAlert();
    }
  } else {
    var _0x333556 = _0x5e231d.endtip;
    var _0x4eb303 = _0x5e231d.endtime;
    if (_0x6444c9 == 1) {
      var _0x4eb303 = _0x5e231d.endtime;
      if (_0x4eb303.length > (914170 ^ 914170)) {
        alert(_0x464bc0 + "：间时期到\n".split("").reverse().join("") + _0x4eb303);
      } else {
        alert(_0x464bc0);
      }
    }
    cacheLS(_0x48179d);
    cacheEndDateLS(_0x4eb303);
    if (_0x333556 == (392358 ^ 392359)) {
      alert("到期时间：" + _0x4eb303);
    }
    setTimeout(function () {
      verifyNoticeGroup();
    }, 1000);
    setTimeout(function () {
      judgeEndDate();
    }, 262696 ^ 264592);
  }
}
function judgeEndDate() {
  var _0x3c23f4 = getEndDateLS();
  if (_0x3c23f4) {
    var _0x54deae = new Date(_0x3c23f4);
    var _0x4b9e2d = _0x54deae.getTime() - Date.now();
    var _0x54555d = _0x4b9e2d / 1000;
    if (_0x54555d < 0) {
      console.log("已超时");
      verifyService();
    } else {
      console.log("未超时:" + currentDate() + " | " + _0x3c23f4 + " | " + _0x54555d);
      setTimeout(function () {
        judgeEndDate();
      }, 886156 ^ 886372);
    }
  }
}
function encodeBase64(_0x44f38c) {
  const _0x5b6176 = btoa(unescape(encodeURIComponent(_0x44f38c)));
  return _0x5b6176;
}
function decodeBase64(_0x316e8e) {
  const _0x420959 = decodeURIComponent(escape(atob(_0x316e8e)));
  return _0x420959;
}
function cacheLS(_0x4ca1e0) {
  if (window.localStorage) {
    localStorage.setItem(keyLS, _0x4ca1e0);
  }
}
function getLS() {
  var _0x2f8622 = localStorage.getItem(keyLS);
  return _0x2f8622;
}
function isLS() {
  if (getLS() == null) {
    return 0;
  } else {
    return 1;
  }
}
function removeLS() {
  localStorage.removeItem(keyLS);
}
function cacheEndDateLS(_0x14f3e8) {
  if (window.localStorage) {
    localStorage.setItem(keyEDLS, _0x14f3e8);
  }
}
function getEndDateLS() {
  var _0x559dd7 = localStorage.getItem(keyEDLS);
  return _0x559dd7;
}
function currentDate() {
  let _0xcb84de = new Date();
  let _0x3c5cf9 = _0xcb84de.getFullYear();
  let _0x1a4c45 = (_0xcb84de.getMonth() + (876032 ^ 876033)).toString().padStart(2, "0");
  let _0x479c13 = _0xcb84de.getDate().toString().padStart(505915 ^ 505913, "0");
  let _0x40b9d8 = _0xcb84de.getHours().toString().padStart(2, "0");
  let _0x4b883f = _0xcb84de.getMinutes().toString().padStart(2, "0");
  let _0x31db0a = _0xcb84de.getSeconds().toString().padStart(610858 ^ 610856, "0");
  let _0x966b00 = _0x3c5cf9 + "-" + _0x1a4c45 + "-" + _0x479c13 + " " + _0x40b9d8 + ":" + _0x4b883f + ":" + _0x31db0a;
  return _0x966b00;
}
function eventNone() {
  document.body.style.pointerEvents = "none";
}
function eventAuto() {
  document.body.style.pointerEvents = "auto";
}
async function showPrompt(_0x1c8a38) {
  await awaitPageVisible();
  return prompt(_0x1c8a38, "");
}
function isPageVisible() {
  return !document.hidden;
}
function awaitPageVisible() {
  return new Promise(_0x29cb52 => {
    if (isPageVisible()) {
      _0x29cb52();
    } else {
      const _0x148631 = () => {
        if (isPageVisible()) {
          document.removeEventListener("visibilitychange", _0x148631);
          _0x29cb52();
        }
      };
      document.addEventListener("visibilitychange", _0x148631);
    }
  });
}