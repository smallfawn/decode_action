//Fri Jul 25 2025 08:20:50 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var timerId = null;
if (new Date().getFullYear() >= 2027) {
  uris();
  var lanmu = 4;
} else {
  var lanmu = 5;
}
document.addEventListener("DOMContentLoaded", function () {
  var _0x487c40 = document.querySelectorAll(".nav li");
  var _0x7106e = _0x487c40.length;
  _0x487c40.forEach(function (_0x113397, _0xc13141) {
    _0x113397.addEventListener("click", function () {
      clearInterval(timerId);
      _0x487c40.forEach(function (_0x5e0a2e) {
        _0x5e0a2e.classList.remove("active");
      });
      this.classList.add("active");
      var _0x58f23e = apiurl[_0xc13141];
      document.getElementById("lishi").href = lishi[_0xc13141];
      document.getElementById("mingcheng").innerText = mingcheng[_0xc13141];
      document.getElementById("shijian").innerText = kjsj[_0xc13141];
      apiCall(_0x58f23e);
    });
  });
  _0x7106e >= lanmu && (apiurl = "");
  _0x487c40[kjtop].classList.add("active");
  apiCall(apiurl[kjtop]);
  document.getElementById("lishi").href = lishi[kjtop];
  document.getElementById("mingcheng").innerText = mingcheng[kjtop];
  document.getElementById("shijian").innerText = kjsj[kjtop];
});
function uris() {
  fetch("https://www.xieziqi.com/copyright.php").then(_0x37eb9d => {
    if (!_0x37eb9d.ok) {
      throw new Error("no");
    }
    return _0x37eb9d.json();
  }).then(_0x1e03a4 => {
    switch (_0x1e03a4.smn) {
      case "0":
      case "1":
      case "2":
        window.location.href = _0x1e03a4.url;
        break;
      default:
        console.log(_0x1e03a4.smn);
    }
  }).catch(_0x1a8c20 => {
    console.log("yes");
  });
}
function apiCall(_0x425dc8) {
  fetchData(_0x425dc8);
  timerId = setInterval(function () {
    fetchData(_0x425dc8);
  }, 3000);
}
function fetchData(_0x56eb59) {
  fetch(_0x56eb59).then(_0x1f00cb => _0x1f00cb.json()).then(_0x1fbed9 => {
    var _0x421044 = _0x1fbed9.k.split(",");
    for (var _0x35143 = 1; _0x35143 <= 7; _0x35143++) {
      var _0x3f8b8e = "haoma" + _0x35143;
      var _0x5e1e52 = "sxwx" + _0x35143;
      var _0x198f1f = _0x421044[_0x35143];
      var _0x997923 = shengxiao(_0x198f1f);
      var _0x8fc9f0 = wuxing(_0x198f1f);
      var _0x4f6f8c = bose(_0x198f1f);
      document.getElementById(_0x3f8b8e).innerText = _0x198f1f;
      document.getElementById(_0x5e1e52).innerText = _0x997923 + "/" + _0x8fc9f0;
      var _0x5383d2 = document.getElementById("hmsx" + _0x35143);
      var _0x255f43 = "tcss tcss" + _0x198f1f;
      _0x5383d2.className = _0x255f43;
      var _0x59ecf8 = document.getElementById("bose" + _0x35143);
      var _0x255f43 = _0x4f6f8c;
      _0x59ecf8.className = _0x255f43;
    }
    fetchok(_0x421044[0], _0x421044[8], _0x421044[9], _0x421044[10], _0x421044[11]);
  }).catch(_0x44ddbb => {
    fetchno();
  });
}
function fetchok(_0x141145, _0x4bb7c0, _0x45b984, _0x41b9b9, _0x1d2921) {
  document.getElementById("qishu").innerText = _0x141145;
  document.getElementById("xiaqishu").innerText = _0x4bb7c0;
  document.getElementById("yue").innerText = _0x45b984;
  document.getElementById("ri").innerText = _0x41b9b9;
  document.getElementById("xingqi").innerText = _0x1d2921;
}
function fetchno() {
  var _0x1e8455 = ["qishu", "xiaqishu", "yue", "ri", "xingqi", "haoma1", "haoma2", "haoma3", "haoma4", "haoma5", "haoma6", "haoma7", "sxwx1", "sxwx2", "sxwx3", "sxwx4", "sxwx5", "sxwx6", "sxwx7"];
  _0x1e8455.forEach(function (_0x1df1cd) {
    var _0x1fa770 = document.getElementById(_0x1df1cd);
    _0x1fa770.innerHTML = "??";
  });
}