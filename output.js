//Wed Oct 30 2024 09:44:07 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
Array.prototype.unique3 = function () {
  var _0x53dbf9 = [],
    _0x1e49c3 = {};
  for (var _0x30f758 = 0; _0x30f758 < this.length; _0x30f758++) {
    if (!_0x1e49c3[this[_0x30f758]]) {
      _0x53dbf9.push(this[_0x30f758]);
      _0x1e49c3[this[_0x30f758]] = true;
    }
  }
  return _0x53dbf9;
};
Array.prototype.remove = function (_0x477826) {
  var _0x49e088 = this.indexOf(_0x477826);
  _0x49e088 > -1 && this.splice(_0x49e088, 1);
};
var shengxiaoV = function (_0x4352d9) {
    var _0xae36ab = _0x4352d9.split(","),
      _0x35cc2f = _0xae36ab[6],
      _0x49f4e1 = _0xae36ab.unique3();
    _0x49f4e1.remove(_0x35cc2f);
    var _0x2ef4df = _0x49f4e1[0] + "-" + _0x49f4e1[1] + "-" + _0x35cc2f;
    return _0x2ef4df;
  },
  danshuang = function (_0x29b4fd) {
    if (_0x29b4fd % 2 == 1) return "单";else {
      return "双";
    }
  },
  daxiao = function (_0x10f50a) {
    if (_0x10f50a < 25) {
      return "小";
    } else {
      return "大";
    }
  };
function removeValues(_0x3bcd80, _0x3e4336) {
  var _0x4a0a20 = new Array();
  for (var _0x4d1011 of _0x3bcd80) {
    !_0x3e4336.includes(_0x4d1011) && _0x4a0a20.push(_0x4d1011);
  }
  return _0x4a0a20;
}
function getRandomArrayItems(_0x56d356, _0x49756e) {
  var _0x160ef7 = _0x56d356,
    _0x39fa38 = new Array();
  for (var _0x4672c6 = 0; _0x4672c6 < _0x49756e; ++_0x4672c6) {
    var _0x409a09 = Math.floor(Math.random() * _0x160ef7.length);
    if (_0x39fa38.includes(_0x160ef7[_0x409a09])) {
      continue;
    }
    _0x39fa38.push(_0x160ef7[_0x409a09]);
    _0x160ef7.splice(_0x409a09, 1);
  }
  return _0x39fa38;
}
var maN = function (_0x1ae9ce, _0x41e97c) {
    var _0x37f44c = _0x1ae9ce.num.split(",");
    var _0x201a2a = removeValues(_0x37f44c, _0x37f44c[6]);
    var _0x28b30d = getRandomArrayItems(_0x201a2a, _0x41e97c);
    var _0xc8ecbc = "";
    for (var _0x1d5ea9 = 0; _0x1d5ea9 < _0x41e97c; _0x1d5ea9++) {
      _0xc8ecbc += _0x28b30d[_0x1d5ea9] + ",";
    }
    _0xc8ecbc += _0x37f44c[6];
    return _0xc8ecbc;
  },
  weiN = function (_0x22a96b, _0x40d5f1) {
    var _0x4d7fcc = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      _0x2e0038 = _0x22a96b.num.split(","),
      _0x5d8a95 = getWei(_0x2e0038[6]),
      _0x18480d = removeValues(_0x4d7fcc, _0x5d8a95),
      _0x2e68c6 = getRandomArrayItems(_0x18480d, _0x40d5f1),
      _0x49db6e = "";
    for (var _0x1cfa14 = 0; _0x1cfa14 < _0x40d5f1; _0x1cfa14++) {
      _0x49db6e += _0x2e68c6[_0x1cfa14] + ",";
    }
    return _0x49db6e += _0x5d8a95, _0x49db6e;
  },
  getWei = function (_0x5eba23) {
    var _0x4a8d46 = parseInt(_0x5eba23);
    if (_0x4a8d46 < 10) {
      return _0x4a8d46 + "";
    } else return _0x5eba23.substring(1, 2);
  },
  html_ = "",
  tableHead = function (_0x28d93d) {
    html_ = "";
    html_ += "<div class=\"tableContent\">";
    if (_0x28d93d < 100) html_ += "\t<p>0" + _0x28d93d + "</p>";else {
      html_ += "\t<p>" + _0x28d93d + "</p>";
    }
    return html_ += "\t<p>???</p>", html_ += "\t<p>???</p>", html_ += "\t<p>开???</p>", html_ += "\t<p class=\"result\"> <img class=\"Plugin_float_weixin\" src=\"cdn/yongzhe/imgs/add.png\" alt=\"\"></p>", html_ += "</div>", html_;
  },
  tips = function (_0x7ffa50, _0x34b284) {
    html_ = "";
    console.log(_0x34b284);
    console.log(_0x7ffa50);
    for (var _0x15b425 in _0x7ffa50) {
      if (_0x15b425 < 3) {
        var _0x3bc4bc = _0x7ffa50[_0x15b425].shengxiao.split(","),
          _0x5c6342 = _0x7ffa50[_0x15b425].num.split(",");
        html_ += _0x34b284 + _0x7ffa50[_0x15b425].qishu + "期：" + _0x5c6342[1] + "-" + _0x5c6342[4] + "-" + _0x5c6342[6] + " 开《" + _0x3bc4bc[6] + _0x5c6342[6] + "》准<br>";
      }
    }
    return html_;
  },
  sanxiaosanma = function (_0x4c4ab9) {
    html_ = "";
    for (var _0x1fcd67 in _0x4c4ab9) {
      if (_0x1fcd67 == 0) {
        var _0x1a7535 = parseInt(_0x4c4ab9[_0x1fcd67].qishu);
        _0x1a7535++;
        html_ += tableHead(_0x1a7535);
      }
      if (_0x1fcd67 < 10) {
        var _0xf5a303 = _0x4c4ab9[_0x1fcd67].shengxiao.split(",");
        var _0xcdb04a = _0x4c4ab9[_0x1fcd67].num.split(",");
        html_ += "<div class=\"tableContent\">";
        html_ += "\t<p>" + _0x4c4ab9[_0x1fcd67].qishu + "</p>";
        html_ += "\t<p>" + shengxiaoV(_0x4c4ab9[_0x1fcd67].shengxiao) + "</p>";
        html_ += "\t<p>" + _0xcdb04a[1] + "-" + _0xcdb04a[4] + "-" + _0xcdb04a[6] + "</p>";
        html_ += "\t<p>" + _0xf5a303[6] + _0xcdb04a[6] + "</p>";
        html_ += "\t<p class=\"result\">&#31934;&#20934;</p>";
        html_ += "</div>";
      }
    }
    return html_;
  },
  yixiaodanshuang = function (_0x3a7cef) {
    html_ = "";
    for (var _0x442f8f in _0x3a7cef) {
      if (_0x442f8f == 0) {
        var _0x22ad41 = parseInt(_0x3a7cef[_0x442f8f].qishu);
        _0x22ad41++;
        html_ += tableHead(_0x22ad41);
      }
      if (_0x442f8f < 10) {
        var _0x2ff3ac = _0x3a7cef[_0x442f8f].shengxiao.split(",");
        var _0x50c9eb = _0x3a7cef[_0x442f8f].num.split(",");
        html_ += "<div class=\"tableContent\">";
        html_ += "\t<p>" + _0x3a7cef[_0x442f8f].qishu + "</p>";
        html_ += "\t<p>" + _0x2ff3ac[6] + "</p>";
        html_ += "\t<p>" + danshuang(_0x50c9eb[6]) + "</p>";
        html_ += "\t<p>" + _0x2ff3ac[6] + _0x50c9eb[6] + "</p>";
        html_ += "\t<p class=\"result\">&#31934;&#20934;</p>";
        html_ += "</div>";
      }
    }
    return html_;
  };
$(function () {
  $(".k-am-1 > .table").append(sanxiaosanma(amHistoryJson.data));
  $(".k-am-2 > .table").append(yixiaodanshuang(amHistoryJson.data));
  $("#am_tips").html(tips(amHistoryJson.data, "澳门"));
  $(".k-am1-1 > .table").append(sanxiaosanma(amHistoryJson1.data));
  $(".k-am1-2 > .table").append(yixiaodanshuang(amHistoryJson1.data));
  $("#am_tips1").html(tips(amHistoryJson1.data, "新澳门"));
  $(".k-hk-1 > .table").append(sanxiaosanma(xgHistoryJson.data));
  $(".k-hk-2 > .table").append(yixiaodanshuang(xgHistoryJson.data));
  $("#hk_tips").html(tips(xgHistoryJson.data, "香港"));
  var _0x55c838 = document.location.hostname;
  _0x55c838.indexOf("www.") > -1 && (_0x55c838 = _0x55c838.replace("www.", ""));
  var _0x25cafd = _0x55c838.split(".");
  try {
    $("#domain_n").html(_0x25cafd[0]);
    $("#domain_p").html("." + _0x25cafd[1]);
  } catch (_0x56fca0) {}
  try {
    document.getElementById("pop-cpt").style.display = "block";
  } catch (_0x243b48) {}
});