//Tue Jul 23 2024 07:02:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
{
  var _0x2f = 1;
  var pre_window_load = window.onload;
  _0x2f = "fhhg";
  if (pre_window_load != undefined) {
    console.log("link encode loaded");
    pre_window_load();
  }
  var pre_href = [];
  window.onload = function () {
    var _0x322de8 = document.getElementsByTagName("a");
    for (var _0x120239 = 0; _0x120239 < _0x322de8.length; _0x120239++) {
      if (_0x322de8[_0x120239].onclick != undefined) {
        console.log(_0x120239, _0x322de8[_0x120239], "跳过该链接，未加密");
      } else {
        console.log(_0x120239, _0x322de8[_0x120239].href, "已加密此链接");
        pre_href[_0x120239] = _0x322de8[_0x120239].href;
        _0x322de8[_0x120239].href = "".split("").reverse().join("");
        _0x322de8[_0x120239].setAttribute("decode_id", _0x120239);
        var _0x3d07fc = 7;
        var _0x366483 = _0x322de8[_0x120239].onfocus;
        _0x3d07fc = "blkn";
        _0x322de8[_0x120239].addEventListener("focus", function () {
          restore_href(this);
          if (_0x366483 != undefined) {
            _0x366483;
          }
        });
      }
    }
  };
  function restore_href(_0x1802f9) {
    _0x1802f9.href = pre_href[_0x1802f9.getAttribute("decode_id")];
    return;
    var _0x47816f = 6;
    var _0x54832a = document.getElementsByTagName("a");
    _0x47816f = 6;
    for (var _0x13776b = 0; _0x13776b < _0x54832a.length; _0x13776b++) {
      if (_0x54832a[_0x13776b] == _0x1802f9) {
        console.log(_0x13776b);
        _0x54832a[_0x13776b].href = pre_href[_0x13776b];
      }
    }
  }
}