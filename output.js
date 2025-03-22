//Sat Mar 22 2025 08:12:15 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
var _0x1d2076 = function () {
  var _0x37bedf = true;
  return function (_0x4fd0e3, _0x197b33) {
    var _0x42ec6c = _0x37bedf ? function () {
      if (_0x197b33) {
        var _0x1e4d72 = _0x197b33.apply(_0x4fd0e3, arguments);
        _0x197b33 = null;
        return _0x1e4d72;
      }
    } : function () {};
    _0x37bedf = false;
    return _0x42ec6c;
  };
}();
var _0x2e3351 = _0x1d2076(this, function () {
  var _0xdcad2c = function () {
    return "dev";
  };
  var _0x3c3a98 = function () {
    return "window";
  };
  var _0x51ef2b = function () {
    var _0x16fd8b = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
    return !_0x16fd8b.test(_0xdcad2c.toString());
  };
  var _0x2ba463 = function () {
    var _0x112bcc = new RegExp("(\\\\[x|u](\\w){2,4})+");
    return _0x112bcc.test(_0x3c3a98.toString());
  };
  var _0x25da2d = function (_0x214082) {
    var _0x3d73c5 = 0 >> 1 + NaN;
    if (_0x214082.indexOf("i" === _0x3d73c5)) {
      _0x392625(_0x214082);
    }
  };
  var _0x392625 = function (_0x1f1a31) {
    var _0x3eff4a = 3 >> 1 + NaN;
    if (_0x1f1a31.indexOf("true"[3]) !== _0x3eff4a) {
      _0x25da2d(_0x1f1a31);
    }
  };
  if (!_0x51ef2b()) {
    if (!_0x2ba463()) {
      _0x25da2d("indеxOf");
    } else {
      _0x25da2d("indexOf");
    }
  } else {
    _0x25da2d("indеxOf");
  }
});
_0x2e3351();
var lottery;
var ckTimer;
var betting_sum = 0;
var ClockEnv = {
  num: 3,
  numRange: "1-6"
};
var openCodeTimeOut = null;
var openexpect = 0;
var rates = null;
var ratesArr = [];
var maxRates = 0;
var lotteryname = lotteryinfo.name;
var ethdxZhushu;
var currNumber = [];
var zhushus = [];
var minMoney = 1;
var lastMoney = 0;
function countMoney() {
  var _0x21045a = parseInt(zhushus.length);
  var _0x20a58d = parseInt($(".selectMultipInput").val());
  var _0x380994 = parseFloat($(".selectMultipleCon").val());
  var _0x3473bb = _0x21045a * minMoney * _0x20a58d * _0x380994;
  lastMoney = _0x3473bb.toFixed(2);
  $(".zhushu").text(_0x21045a);
  $(".selectMultipleOldMoney").text(lastMoney);
  $(".hemaijinerMoney").text(lastMoney);
}
function combines(_0x1a4dea, _0x16a2f3) {
  var _0x149e9e = [];
  (function f(_0x12a08f, _0x5327e3, _0x585a83) {
    {
      if (_0x585a83 == 0) {
        return _0x149e9e.push(_0x12a08f);
      }
      for (var _0x2e0592 = 0, _0x2b7714 = _0x5327e3.length; _0x2e0592 <= _0x2b7714 - _0x585a83; _0x2e0592++) {
        {
          f(_0x12a08f.concat(_0x5327e3[_0x2e0592]), _0x5327e3.slice(_0x2e0592 + 1), _0x585a83 - 1);
        }
      }
    }
  })([], _0x1a4dea, _0x16a2f3);
  return _0x149e9e;
}
function countFun() {
  var _0x2ff33e = [];
  $(".k3ethdx ul:eq(0) .ball_number").each(function () {
    {
      var _0x26136d = $(this);
      if (_0x26136d.hasClass("curr")) {
        var _0x53d1a2 = _0x26136d.attr("ball-number");
        _0x2ff33e.push(_0x53d1a2);
      }
    }
  });
  var _0x2bbd08 = [];
  $(".k3ethdx ul:eq(1) .ball_number").each(function () {
    var _0x1aaa36 = $(this);
    if (_0x1aaa36.hasClass("curr")) {
      var _0x480442 = _0x1aaa36.attr("ball-number");
      _0x2bbd08.push(_0x480442);
    }
  });
  var _0x5cc00d = DescartesAlgorithm(_0x2ff33e, _0x2bbd08);
  var _0x288763 = [];
  for (var _0x5b548f = 0; _0x5b548f < _0x5cc00d.length; _0x5b548f++) {
    {
      var _0xc6810b = _0x5cc00d[_0x5b548f][0];
      var _0x52ccde = _0x5cc00d[_0x5b548f][1];
      if (!(_0xc6810b.indexOf(_0x52ccde) >= 0)) {
        _0x288763[_0x5b548f] = _0x5cc00d[_0x5b548f][0] + "" + _0x5cc00d[_0x5b548f][1];
      }
    }
  }
  _0x288763 = filterArray(_0x288763);
  switch (lottery_code) {
    case "k3hzzx":
      zhushus.length = currNumber[0].length;
      break;
    case "k3sthtx":
      zhushus.length = currNumber[1].length;
      break;
    case "k3sthdx":
      zhushus.length = currNumber[2].length;
      break;
    case "k3sbthbz":
      zhushus.length = combines(currNumber[3], 3).length;
      break;
    case "k3slhtx":
      zhushus.length = currNumber[4].length;
      break;
    case "k3ethfx":
      zhushus.length = currNumber[5].length;
      break;
    case "k3ethdx":
      zhushus.length = _0x5cc00d.length;
      break;
    case "k3ebthbz":
      zhushus.length = combines(currNumber[8], 2).length;
      break;
    case "k3hhm":
      zhushus.length = currNumber[9].length;
      break;
  }
}
function currList() {
  var _0x56ab00 = [];
  $(".ball_list_ul").each(function (_0x7f0890) {
    var _0x3c1fce = [];
    $(this).find(".curr").each(function (_0x557540) {
      _0x3c1fce.push($(this).attr("ball-number"));
    });
    _0x56ab00.push(_0x3c1fce);
  });
  return _0x56ab00;
}
$(document).on("click", ".k3hzzx .ball_number", function () {
  k3hzzx($(this));
});
var k3hzzx = function (_0xc6f2e7) {
  if (rates == null) {
    return false;
  }
  var _0x2390ec = _0xc6f2e7.attr("playid");
  _0xc6f2e7.toggleClass("curr");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "k3hzzx_addbtn('" + _0x2390ec + "')");
};
var k3hzzx_addbtn = function (_0x222c6a) {
  $(".k3hzzx .ball_number.curr").each(function () {
    {
      var _0x396aef = $(this);
      var _0x37cf86 = _0x396aef.text();
      var _0x3831e2 = _0x396aef.attr("ball-number");
      var _0x222c6a = _0x396aef.attr("playid");
      addtotouzhu(_0x222c6a, _0x3831e2, 1);
    }
  });
  $(".k3hzzx .curr").removeClass("curr");
};
$(document).on("click", ".k3sthtx .ball_number", function () {
  k3sthtx($(this));
});
var k3sthtx = function (_0xb3f054) {
  if (rates == null) {
    return false;
  }
  var _0x3689ff = _0xb3f054.attr("playid");
  _0xb3f054.toggleClass("curr");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "k3sthtx_addbtn('" + _0x3689ff + "')");
};
var k3sthtx_addbtn = function (_0x56f61a) {
  $(".k3sthtx .ball_number.curr").each(function () {
    var _0x2a899d = $(this);
    var _0x35b8d9 = _0x2a899d.text();
    var _0x4d06f8 = _0x2a899d.attr("ball-number");
    var _0x56f61a = _0x2a899d.attr("playid");
    addtotouzhu(_0x56f61a, _0x4d06f8, 1);
  });
  $(".k3sthtx .curr").removeClass("curr");
};
$(document).on("click", ".k3sthdx .ball_number,.k3ethfx .ball_number", function () {
  k3sthdx_1_2_3($(this));
});
var k3sthdx_1_2_3 = function (_0x454f0a) {
  if (rates == null) {
    return false;
  }
  var _0x5eda7f = _0x454f0a.text();
  var _0x4a37d2 = _0x454f0a.attr("ball-number");
  var _0x1d44e3 = _0x454f0a.attr("playid");
  _0x454f0a.toggleClass("curr");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "k3sthdx_1_2_3_addbtn('" + _0x1d44e3 + "')");
};
var k3sthdx_1_2_3_addbtn = function (_0x4837b3) {
  var _0x11aa89 = [];
  $("div." + _0x4837b3 + " .ball_number").each(function () {
    var _0x518d2f = $(this);
    if (_0x518d2f.hasClass("curr")) {
      var _0x3a2d4d = _0x518d2f.attr("ball-number");
      _0x11aa89.push(_0x3a2d4d);
    }
  });
  if (_0x11aa89.length > 0) {
    {
      addtotouzhu(_0x4837b3, _0x11aa89.join("#"), _0x11aa89.length, 1);
    }
  } else {
    {
      hsycmserror("请选择要投注的号码");
    }
  }
  $("div." + _0x4837b3 + " .ball_number").removeClass("curr");
};
$(document).on("click", ".k3sbthbz .ball_number", function () {
  k3sbthbz($(this));
});
var k3sbthbz = function (_0x1f40ac) {
  if (rates == null) {
    {
      return false;
    }
  }
  var _0x4b775a = _0x1f40ac.text();
  var _0x24eeca = _0x1f40ac.attr("ball-number");
  var _0x220821 = _0x1f40ac.attr("playid");
  _0x1f40ac.toggleClass("curr");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "k3sbthbz_addbtn('" + _0x220821 + "')");
};
var k3sbthbz_addbtn = function (_0x1b3275) {
  var _0x1fcd0b = [];
  $("div." + _0x1b3275 + " .ball_number").each(function () {
    var _0x4b7c54 = $(this);
    if (_0x4b7c54.hasClass("curr")) {
      var _0x29ac2c = _0x4b7c54.attr("ball-number");
      _0x1fcd0b.push(_0x29ac2c);
    }
  });
  if (_0x1fcd0b.length >= 3) {
    var _0x933ad2 = combine(_0x1fcd0b, 3);
    if (_0x933ad2.length == 1) {
      {
        addtotouzhu(_0x1b3275, _0x933ad2.join("#"), _0x933ad2.length, 1);
      }
    } else {
      {
        addtotouzhu(_0x1b3275, _0x933ad2.join("#"), _0x933ad2.length, 1);
      }
    }
  } else {
    {
      hsycmserror("选择的投注号码不完整");
    }
  }
  $("div." + _0x1b3275 + " .ball_number").removeClass("curr");
};
$(document).on("click", ".k3slhtx .ball_number", function () {
  k3slhtx($(this));
});
var k3slhtx = function (_0x20a9b6) {
  if (rates == null) {
    {
      return false;
    }
  }
  var _0x34dc8b = _0x20a9b6.attr("playid");
  _0x20a9b6.toggleClass("curr");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "k3slhtx_addbtn('" + _0x34dc8b + "')");
};
var k3slhtx_addbtn = function (_0x2d6043) {
  $(".k3slhtx .ball_number.curr").each(function () {
    {
      var _0x95151a = $(this);
      var _0x2d3c86 = _0x95151a.text();
      var _0x36c2b9 = _0x95151a.attr("ball-number");
      var _0x2d6043 = _0x95151a.attr("playid");
      addtotouzhu(_0x2d6043, _0x36c2b9, 1);
    }
  });
  $(".k3slhtx .curr").removeClass("curr");
};
$(document).on("click", ".k3ethdx .ball_number", function () {
  var _0x708a4b = $(this).attr("ball-number");
  var _0x238dc3 = $(this).parents("ul").index();
  if (_0x238dc3 == 0) {
    {
      $(".k3ethdx ul:eq(1) a").each(function (_0x293dcb) {
        var _0x434eca = $(this).attr("ball-number");
        if ($(this).hasClass("curr") && parseInt(_0x434eca + "" + _0x434eca) == parseInt(_0x708a4b)) {
          $(this).removeClass("curr");
        }
      });
    }
  } else {
    if (_0x238dc3 == 1) {
      $(".k3ethdx ul:eq(0) a").each(function (_0x5eba17) {
        {
          var _0x3e87a1 = $(this).attr("ball-number");
          if ($(this).hasClass("curr") && parseInt(_0x3e87a1) == parseInt(_0x708a4b + "" + _0x708a4b)) {
            {
              $(this).removeClass("curr");
            }
          }
        }
      });
    }
  }
  k3ethdx($(this));
});
var k3ethdx = function (_0x17e0f3) {
  if (rates == null) {
    {
      return false;
    }
  }
  var _0x18989b = _0x17e0f3.text();
  var _0x5d8638 = _0x17e0f3.attr("ball-number");
  var _0x33b5be = _0x17e0f3.attr("playid");
  _0x17e0f3.toggleClass("curr");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "k3ethdx_addbtn('" + _0x33b5be + "')");
};
var k3ethdx_addbtn = function (_0x1dccc0) {
  var _0x55f255 = [];
  $("div." + _0x1dccc0 + "  ul:eq(0) .ball_number").each(function () {
    var _0x2cd527 = $(this);
    if (_0x2cd527.hasClass("curr")) {
      {
        var _0x5a41ac = _0x2cd527.attr("ball-number");
        _0x55f255.push(_0x5a41ac);
      }
    }
  });
  var _0x4e27d0 = [];
  $("div." + _0x1dccc0 + "  ul:eq(1) .ball_number").each(function () {
    {
      var _0x1f18d1 = $(this);
      if (_0x1f18d1.hasClass("curr")) {
        var _0x509065 = _0x1f18d1.attr("ball-number");
        _0x4e27d0.push(_0x509065);
      }
    }
  });
  if (_0x55f255.length < 1 || _0x4e27d0.length < 1) {
    hsycmserror("选择的投注号码不完整");
  }
  var _0x2f8fd0 = DescartesAlgorithm(_0x55f255, _0x4e27d0);
  console.log(_0x2f8fd0.length);
  var _0x1caa13 = [];
  for (var _0x256305 = 0; _0x256305 < _0x2f8fd0.length; _0x256305++) {
    var _0xd5417d = _0x2f8fd0[_0x256305][0];
    var _0x552975 = _0x2f8fd0[_0x256305][1];
    if (!(_0xd5417d.indexOf(_0x552975) >= 0)) {
      _0x1caa13[_0x256305] = _0x2f8fd0[_0x256305][0] + "" + _0x2f8fd0[_0x256305][1];
    }
  }
  _0x1caa13 = filterArray(_0x1caa13);
  if (_0x1caa13.length >= 1) {
    {
      addtotouzhu(_0x1dccc0, _0x1caa13.join("#"), _0x1caa13.length, 1);
    }
  } else {
    {
      hsycmserror("选择的投注号码不完整");
    }
  }
  $("div." + _0x1dccc0 + " .ball_number").removeClass("curr");
};
$(document).on("click", ".k3ebthbz .ball_number", function () {
  k3ebthbz($(this));
});
var k3ebthbz = function (_0x3f6705) {
  if (rates == null) {
    {
      return false;
    }
  }
  var _0x4ffdac = _0x3f6705.text();
  var _0x2c0598 = _0x3f6705.attr("ball-number");
  var _0x50886f = _0x3f6705.attr("playid");
  _0x3f6705.toggleClass("curr");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "k3ebthbz_addbtn('" + _0x50886f + "')");
};
var k3ebthbz_addbtn = function (_0x34e9ea) {
  var _0x32591c = [];
  $("div." + _0x34e9ea + " .ball_number").each(function () {
    var _0x4bd95e = $(this);
    if (_0x4bd95e.hasClass("curr")) {
      {
        var _0x550fc4 = _0x4bd95e.attr("ball-number");
        _0x32591c.push(_0x550fc4);
      }
    }
  });
  if (_0x32591c.length >= 2) {
    var _0x459f7a = combine(_0x32591c, 2);
    if (_0x459f7a.length == 1) {
      addtotouzhu(_0x34e9ea, _0x459f7a.join("#"), _0x459f7a.length, 1);
    } else {
      {
        addtotouzhu(_0x34e9ea, _0x459f7a.join("#"), _0x459f7a.length, 1);
      }
    }
  } else {
    hsycmserror("选择的投注号码不完整");
  }
  $("div." + _0x34e9ea + " .ball_number").removeClass("curr");
};
$(document).on("click", ".k3hhm .selectNumber", function () {
  k3hhm($(this));
});
var k3hhm = function (_0x2718c0) {
  if (rates == null) {
    {
      return false;
    }
  }
  var _0x1200c4 = _0x2718c0.attr("playid");
  _0x2718c0.toggleClass("curr");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "k3hhm_addbtn('" + _0x1200c4 + "')");
};
var k3hhm_addbtn = function (_0x5be867) {
  $(".k3hhm .selectNumber.curr").each(function () {
    {
      var _0x5a60f4 = $(this);
      var _0x3d5ae1 = _0x5a60f4.text();
      var _0x55dcbd = _0x5a60f4.attr("ball-number");
      var _0x5be867 = _0x5a60f4.attr("playid");
      if (_0x5be867 == "hhmhong4hong") {
        var _0xfebab = $(".k3hhm .selectNumberSum.curr");
        if (_0xfebab.length != 4) {
          {
            hsycmserror("选择的投注号码不完整(请先选择4个号码)", -1);
            return false;
          }
        }
        var _0x291022 = [];
        _0xfebab.each(function () {
          _0x291022.push($(this).attr("ball-number"));
        });
        _0x55dcbd = _0x291022.join(",");
      }
      if (_0x5be867 == "hhmhong4hei") {
        {
          var _0xfebab = $(".k3hhm .selectNumberSum.curr");
          if (_0xfebab.length != 4) {
            hsycmserror("选择的投注号码不完整(请先选择4个号码)", -1);
            return false;
          }
          var _0x291022 = [];
          _0xfebab.each(function () {
            _0x291022.push($(this).attr("ball-number"));
          });
          _0x55dcbd = _0x291022.join(",");
        }
      }
      if (_0x5be867 == "hhmhong5hei") {
        var _0xfebab = $(".k3hhm .selectNumberSum.curr");
        if (_0xfebab.length != 5) {
          {
            hsycmserror("选择的投注号码不完整(请先选择5个号码)");
            return false;
          }
        }
        var _0x291022 = [];
        _0xfebab.each(function () {
          _0x291022.push($(this).attr("ball-number"));
        });
        _0x55dcbd = _0x291022.join(",");
      }
      addtotouzhu(_0x5be867, _0x55dcbd, 1);
    }
  });
  $(".k3hhm .curr").removeClass("curr");
};
function addNumberLanAn() {
  $(".lanIconNumber").show();
  $("#lanIconNumberss").animate({
    left: "303",
    top: "-50px"
  }, 500, function () {
    $(this).animate({
      top: "10px",
      opacity: "0"
    }, 500, function () {
      {
        $(this).css("display", "none");
        $(".kuaijie").css({
          background: "#434354"
        });
        $(".hemai").css({
          background: "#434354"
        });
        $(this).css({
          left: "28px",
          top: "10px",
          opacity: "100"
        });
      }
    });
  });
  $("#lanIconNumbere").text(parseInt($("#lanIconNumbere").text()) + 1);
}
var orderList = new Array();
var addtotouzhu = function (_0x54cc31, _0x78db86, _0x57b25a) {
  if (rates == null) {
    return false;
  }
  var _0x1c0ed4 = $(".yBettingList");
  var _0x40cab5 = $(".selectMultipInput").val();
  var _0x2e7759 = $(".selectMultipleCon").find("option:selected").text();
  var _0x176148 = $(".selectMultipleCon").val();
  var _0x195d58 = rates[_0x54cc31];
  var _0x18c793 = generateMixed(20);
  if (parseInt(_0x195d58.minjj) < 1) {
    _0x195d58.minjj = 1;
  }
  if (parseInt(_0x195d58.maxprize) < 1) {
    _0x195d58.maxprize = 30000;
  }
  var _0x2a5672 = {
    trano: _0x18c793,
    playtitle: _0x195d58.title,
    playid: _0x195d58.playid,
    number: _0x78db86,
    zhushu: _0x57b25a ? parseInt(_0x57b25a) : 1,
    price: parseInt(_0x40cab5) * parseInt(_0x2e7759),
    minxf: _0x195d58.minxf,
    totalzs: _0x195d58.totalzs,
    maxjj: _0x195d58.maxjj,
    minjj: _0x195d58.minjj,
    maxzs: _0x195d58.maxzs,
    rate: _0x195d58.rate,
    jine: parseInt(_0x40cab5) * parseInt(_0x2e7759)
  };
  orderList.unshift(_0x2a5672);
  addNumberLanAn();
  var _0x7f3d4b = accMul(_0x195d58.minxf, _0x195d58.rate);
  var _0x2df729 = _0x57b25a ? parseInt(_0x57b25a) : 1;
  console.log(_0x7f3d4b);
  var _0x210f4f = "<div class=\"yBettingList gamezhui\" id=\"" + _0x18c793 + "\">" + "<div class=\"gamezhui-1\">" + "<span><i style=\"color: #ae995c;\"class=\"iconfont\">&#xe606; </i>" + _0x195d58.title + "</span><a class=\"sc\"><i class=\"iconfont\">&#xe630;</i></a>" + "</div>" + "<div class=\"gamezhui-2\">" + "<span class=\"gamezhui-h\">" + _0x78db86 + "</span>" + "<span class=\"gamezhui-m\">" + _0x57b25a + "注," + _0x40cab5 + "倍," + _0x2e7759 + "=" + parseInt(_0x57b25a) * parseInt(_0x40cab5) * parseInt(_0x2e7759) + "元</span>" + "</div>" + "<div id=\"betting_money\" style=\"display: none;\">" + lastMoney + "</div>";
  $(".yBettingLists").append(_0x210f4f);
  currNumber = [];
  zhushus = [];
  $(".zhushu").text("0");
  $(".selectMultipleOldMoney").text("0.00");
};
$(document).on("click", "#f_submit_order", function () {
  if (orderList.length < 1) {
    hsycmserror("请选择投注号码", -1);
    return false;
  }
  var _0x1cd214 = "<div class=\"hsycms-model-btn confirm\"><button type=\"button\" class=\"cancel\">取消</button><button type=\"button\" class=\"ok\">确定</button></div>";
  $("#confirm").append(_0x1cd214);
  $("#mask-confirm").show();
  $("#confirm").show();
  $(".confirm .cancel").click(function () {
    $("#mask-confirm").hide();
    $("#confirm").hide();
    $(".confirm").remove();
    $(".hsycms-model-text").html("投注失败");
    $("#mask-error").show();
    $("#error").show();
  });
  $(".confirm .ok").click(function () {
    $("#mask-confirm").hide();
    $("#confirm").hide();
    $(".confirm").remove();
    if (!user) {
      {
        hsycmserror("请先登陆", -1);
      }
    }
    $.ajax({
      type: "POST",
      url: apirooturl + "cpbuy",
      data: {
        orderList: orderList,
        expect: lottery.currFullExpect,
        lotteryname: lotteryname
      },
      success: function (_0x20b009) {
        if (_0x20b009.sign) {
          {
            $("#orderlist_clear").click();
            $(".kuaijie").css({
              background: "#7b7b87"
            });
            $(".hemai").css({
              background: "#7b7b87"
            });
            hsycms("投注成功", 1);
          }
        } else {
          hsycmserror(_0x20b009.message, -1);
        }
      }
    });
  });
  var _0x131bf6 = 0;
  for (var _0x35f195 = 0; _0x35f195 < orderList.length; _0x35f195++) {
    var _0x552509 = orderList[_0x35f195];
    var _0x3571fa = rates[_0x552509.playid];
    var _0x521efd = Number(_0x552509.price);
    var _0x50afac = _0x552509.number;
    _0x131bf6 += _0x521efd;
  }
  $("#Orderdetailtotalprice").text(_0x131bf6.toFixed(3));
  console.log(orderList);
});
$(document).on("click", ".kuaijie", function () {
  $(".addtobetbtn").click();
  if (orderList.length < 1) {
    {
      hsycmserror("请选择投注号码", -1);
      return false;
    }
  }
  var _0x26d9a3 = "<div class=\"hsycms-model-btn confirm\"><button type=\"button\" class=\"cancel\">取消</button><button type=\"button\" class=\"ok\">确定</button></div>";
  $("#confirm").append(_0x26d9a3);
  $("#mask-confirm").show();
  $("#confirm").show();
  $(".confirm .cancel").click(function () {
    $("#mask-confirm").hide();
    $("#confirm").hide();
    $(".confirm").remove();
    $(".hsycms-model-text").html("投注失败");
    $("#orderlist_clear").click();
    $("#mask-error").show();
    $("#error").show();
  });
  $(".confirm .ok").click(function () {
    {
      $("#mask-confirm").hide();
      $("#confirm").hide();
      $(".confirm").remove();
      if (!user) {
        {
          hsycmserror("请先登陆", -1);
        }
      }
      $.ajax({
        type: "POST",
        url: apirooturl + "cpbuy",
        data: {
          orderList: orderList,
          expect: lottery.currFullExpect,
          lotteryname: lotteryname
        },
        success: function (_0x3cc494) {
          {
            if (_0x3cc494.sign) {
              {
                $("#orderlist_clear").click();
                $(".kuaijie").css({
                  background: "#7b7b87"
                });
                $(".hemai").css({
                  background: "#7b7b87"
                });
                hsycms("投注成功", 1);
              }
            } else {
              hsycmserror(_0x3cc494.message, -1);
            }
          }
        }
      });
    }
  });
  var _0x52cadc = 0;
  for (var _0x4f9d24 = 0; _0x4f9d24 < orderList.length; _0x4f9d24++) {
    var _0x48fb24 = orderList[_0x4f9d24];
    var _0x141323 = rates[_0x48fb24.playid];
    var _0x586379 = Number(_0x48fb24.price);
    var _0x36423f = _0x48fb24.number;
    _0x52cadc += _0x586379;
  }
  $("#Orderdetailtotalprice").text(_0x52cadc.toFixed(3));
  console.log(orderList);
});
$(document).on("click", ".hemai", function () {
  $(".addtobetbtn").click();
  if (orderList.length < 1) {
    hsycmserror("请选择投注号码", -1);
    return false;
  }
  $(".faqihemai").show();
  $(".alert_bj").show();
  $("body").addClass("niubihh");
  SetHM();
});
$(document).on("click", ".noe", function () {
  $(".faqihemai").removeClass("linearTop ");
  $(".faqihemai").addClass("linearBottom");
  setTimeout(function () {
    $("body").removeClass("niubihh");
    $(".alert_bj").hide();
    $(".faqihemai").hide();
    $("#orderlist_clear").click();
    $(".faqihemai").removeClass("linearBottom ");
    $(".faqihemai").addClass("linearTop");
  }, 200);
});
$(document).on("click", "#buy_hemai", function () {
  if (orderList.length < 1) {
    {
      hsycmserror("请选择投注号码");
      return false;
    }
  }
  if (orderList.length > 1) {
    hsycmserror("发起合买只能投注一种玩法");
    return false;
  }
  var _0x49d447 = 0;
  var _0xa7c029 = 0;
  var _0x5b6f51 = Number($("#fsInput").val());
  var _0x31d1d3 = Number($("#rgInput").val());
  var _0x13f525 = Number($("#bdInput").val());
  var _0x57d60d = Number($("#isbaodi").hasClass("active"));
  var _0x2e9004 = Number($(".leixing .active").attr("num"));
  for (var _0x47e5b5 = 0; _0x47e5b5 < orderList.length; _0x47e5b5++) {
    {
      var _0x12212a = orderList[_0x47e5b5];
      var _0x1be18f = rates[_0x12212a.playid];
      var _0x4509fe = Number(_0x12212a.price);
      var _0x46c268 = _0x12212a.number;
      _0x49d447 += _0x4509fe;
    }
  }
  if (_0x5b6f51 < 1) {
    hsycmserror("您要分成的份数必须大于等于1");
    $("#fsInput").focus();
    return false;
  } else {
    if (_0x49d447.toFixed(2) / _0x5b6f51 < 1) {
      hsycmserror("每份金额必须大于等于1元！");
      $("#fsInput").focus();
      return false;
    } else {
      if (_0x31d1d3 < _0x5b6f51 * 0.02) {
        hsycmserror("您要认购的份数至少应该为所分份数的2% (" + Math.ceil(_0x5b6f51 * 0.02) + "份)！");
        $("#rgInput").focus();
        return false;
      } else {
        if (_0x31d1d3 - _0x5b6f51 > 0) {
          {
            hsycmserror("您要认购的份数不能大于所分的份数！");
            $("#rgInput").focus();
            return false;
          }
        } else {
          if (_0x57d60d && _0x13f525 < 1) {
            {
              hsycmserror("您要保底的份数不能为空或不能为0！");
              $("#bdInput").focus();
              return false;
            }
          } else {
            if (_0x57d60d && _0x13f525 - _0x5b6f51 > 0) {
              {
                hsycmserror("您要保底的份数不能大于所分的份数！");
                $("#bdInput").focus();
                return false;
              }
            } else {
              if (_0x57d60d && _0x13f525 < _0x5b6f51 * 0.02) {
                hsycmserror("保底金额至少为总金额的2% (" + Math.ceil(_0x5b6f51 * 0.02) + "份)！");
                $("#bdInput").focus();
                return false;
              } else {
                if (_0x57d60d && _0x31d1d3 + _0x13f525 > _0x5b6f51) {
                  {
                    hsycmserror("您要认购的份数和保底的份数之和不能大于所分的份数！");
                    $("#bdInput").focus();
                    return false;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  var _0x4072f3 = "<div class=\"hsycms-model-btn confirm_hemai\"><button type=\"button\" class=\"cancel\">取消</button><button type=\"button\" class=\"ok\">确定</button></div>";
  $("#hemai_xiangxi").append(_0x4072f3);
  $("#mask_hemai").show();
  $("#hemai_xiangxi").show();
  $(".confirm_hemai .cancel").click(function () {
    {
      $("#mask_hemai").hide();
      $("#hemai_xiangxi").hide();
      $(".confirm_hemai").remove();
      $(".hsycms-model-text").html("投注失败");
      $("#mask-error").show();
      $("#error").show();
      $("#orderlist_clear").click();
    }
  });
  $("#fenshuhemai").text(_0x5b6f51);
  $("#rengouhemai").text(_0x31d1d3);
  $("#isbaodihemai").text(_0x57d60d ? "是" : "否");
  $("#baodihemai").text(_0x57d60d ? _0x13f525 : 0);
  var _0x2866dc = {
    orderList: orderList,
    expect: lottery.currFullExpect,
    lotteryname: lotteryname,
    isbaodi: _0x57d60d,
    isbaomi: _0x2e9004,
    rengouhemai: _0x31d1d3,
    fenshuhemai: _0x5b6f51,
    baodihemai: _0x13f525
  };
  console.log(_0x2866dc);
  if (!_0x57d60d) {
    _0x13f525 = 0;
  }
  _0xa7c029 = (_0x31d1d3 * (_0x49d447 / _0x5b6f51) + _0x13f525 * (_0x49d447 / _0x5b6f51)).toFixed(2);
  $("#Orderdetailtotalpricehemai").text(_0xa7c029);
  $(".confirm_hemai .ok").click(function () {
    $("#mask_hemai").hide();
    $("#hemai_xiangxi").hide();
    $(".confirm_hemai").remove();
    if (!user) {
      hsycmserror("请先登陆");
    }
    $.ajax({
      type: "POST",
      url: apirooturl + "cphemai",
      data: {
        orderList: orderList,
        expect: lottery.currFullExpect,
        lotteryname: lotteryname,
        isbaodi: _0x57d60d,
        isbaomi: _0x2e9004,
        rengouhemai: _0x31d1d3,
        fenshuhemai: _0x5b6f51,
        baodihemai: _0x13f525
      },
      success: function (_0x157b7c) {
        if (_0x157b7c.sign) {
          {
            $("#orderlist_clear").click();
            $(".kuaijie").css({
              background: "#7b7b87"
            });
            $(".hemai").css({
              background: "#7b7b87"
            });
            hsycms("发起合买成功");
          }
        } else {
          hsycmserror(_0x157b7c.message);
        }
      }
    });
  });
});
$(function () {
  console.log("  ___   _____ _____ _                 _ ");
  console.log(" / _ \\ |____ /  __ \\ |               | |");
  console.log("/ /_\\ \\    / / /  \\/ | ___  _   _  __| |");
  console.log("|  _  |    \\ \\ |   | |/ _ \\| | | |/ _` |");
  console.log("| | | |.___/ / \\__/\\ | (_) | |_| | (_| |");
  console.log("\\_| |_/\\____/ \\____/_|\\___/ \\__,_|\\__,_|--爱尚互联 30041321-小爱2020-12-10");
  Gameinit(lotteryname);
  lotteryrates();
  function _0x2aa848() {
    {
      var _0x1054bc = $(this).attr("lottery_code");
      _0x1054bc = "k3hzzx";
      $(".lottery-number").find("span[way-data=\"tabDoc\"]").html("猜3个开奖号相加的和,3-10为小,11-18为大");
    }
  }
  _0x2aa848();
  if ($(".selectMultipInput").val() <= 1) {
    {
      $(".reduce").addClass("noReduce");
    }
  }
  $(".reduce").on("click", function () {
    _0x12eb22("-");
    countMoney();
  });
  $(".selectMultiple .add").on("click", function () {
    {
      _0x12eb22("+");
      countMoney();
    }
  });
  $(".selectMultipInput").on("change", function () {
    {
      _0x12eb22();
      countMoney();
    }
  });
  $(".selectMultipleCon").on("change", function () {
    countMoney();
  });
  function _0x12eb22(_0x3726b4) {
    {
      inputVal = isNaN(parseInt($(".selectMultipInput").val())) ? 1 : parseInt($(".selectMultipInput").val());
      maxbeishu = 100000;
      if (inputVal <= 1) {
        $(".selectMultipInput").val(1);
        $(".reduce").addClass("noReduce");
      }
      if (inputVal > maxbeishu) {
        {
          $(".selectMultipInput").val(maxbeishu);
          $(".reduce").removeClass("noReduce");
          $(".selectMultiple .add").addClass("noReduce");
          return;
        }
      }
      if ("+" == _0x3726b4) {
        inputVal++;
        if (inputVal >= maxbeishu) {
          {
            $(".selectMultipInput").val(maxbeishu);
            $(".selectMultiple .add").addClass("noReduce");
            return;
          }
        }
        $(".selectMultiple .add").removeClass("noReduce");
        $(".selectMultipInput").val(inputVal);
      } else {
        if ("-" == _0x3726b4) {
          inputVal--;
          if (inputVal <= 1) {
            $(".selectMultipInput").val(1);
            $(".reduce").addClass("noReduce");
            return;
          }
          $(".reduce").removeClass("noReduce");
          $(".selectMultipInput").val(inputVal);
        }
      }
      if (inputVal > 1 && inputVal < maxbeishu) {
        $(".reduce").removeClass("noReduce");
      }
      if (inputVal < maxbeishu) {
        {
          $(".selectMultiple .add").removeClass("noReduce");
        }
      }
    }
  }
  $(".yBettingLists").on("click", ".sc", function () {
    {
      var _0xd409ba = $(".yBettingLists").find(".yBettingList");
      var _0x18a4db = $(this).parent().attr("id");
      var _0x171f5d = 0;
      _0xd409ba.each(function (_0x593435) {
        if (_0x18a4db == orderList[_0x593435].trano) {
          _0x171f5d = _0x593435;
        }
      });
      orderList.splice(_0x171f5d, 1);
      $(this).parents(".yBettingList").remove();
      $("#lanIconNumbere").text($(".yBettingLists").find(".yBettingList").length);
      if ($(".yBettingLists").find(".yBettingList").length <= 0) {
        $("#lanIconNumbere").css("display", "none");
        $(".kuaijie").css({
          background: "#7b7b87"
        });
        $(".hemai").css({
          background: "#7b7b87"
        });
      }
    }
  });
  $("#orderlist_clear").on("click", function () {
    $(".yBettingLists").html("");
    $(".kuaijie").css({
      background: "#7b7b87"
    });
    $(".hemai").css({
      background: "#7b7b87"
    });
    $("#lanIconNumbere").text("0").css("display", "none");
    orderList = [];
  });
  $(document).on("click", ".play_select_tit li", function () {
    $(this).addClass("ssc-selected").siblings("li").removeClass("ssc-selected");
    lottery_code = $(this).attr("lottery_code");
    $(".lottery-number > div." + lottery_code).show().siblings("div").hide();
    $(".ball_number").removeClass("curr");
    currNumber = currList();
    countFun();
    countMoney();
    var _0x4d605b = $(this).text();
    $(".play_wanfa string").text(_0x4d605b);
    $("body").removeClass("niubihh");
    $(".play_select_insert").removeClass("linearTop ");
    $(".play_select_insert").addClass("linearBottom");
    setTimeout(function () {
      $(".alert_bj").hide();
      $(".play_select_insert").hide();
      $(".play_select_insert").removeClass("linearBottom ");
      $(".play_select_insert").addClass("linearTop");
    }, 200);
    var _0x3469ad = $(this).attr("lottery_code");
    switch (_0x3469ad) {
      case "k3hzzx":
        $(".lottery-number").find("span[way-data=\"tabDoc\"]").html("猜3个开奖号相加的和,3-10为小,11-18为大");
        break;
      case "k3sthtx":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("对所有相同的三个号码（111、222、333、444、555、666）进行投注，任意号码开出，即为中奖。奖金" + rates[_0x3469ad].rate + "倍");
        break;
      case "k3sthdx":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("对相同的三个号码（111、222、333、444、555、666）中的任意一个进行投注，所选号码开出，即为中奖。奖金" + rates[_0x3469ad].rate + "倍");
        break;
      case "k3sbthbz":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从1～6中任选3个或多个号码，所选号码与开奖号码的3个号码相同，即为中奖。奖金" + rates[_0x3469ad].rate + "倍");
        break;
      case "k3slhtx":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("对所有3个相连的号码（123、234、345、456）进行投注，任意号码开出，即为中奖。奖金" + rates[_0x3469ad].rate + "倍");
        break;
      case "k3ethfx":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从11～66中任选1个或多个号码，选号与奖号（包含11～66，不限顺序）相同，即为中奖。奖金" + rates[_0x3469ad].rate + "倍");
        break;
      case "k3ethdx":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("选择1对相同号码和1个不同号码投注，选号与奖号相同，即为中奖，奖金" + rates[_0x3469ad].rate + "倍");
        break;
      case "k3ebthbz":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从1～6中任选2个或多个号码，所选号码与开奖号码任意2个号码相同，即为中奖。奖金" + rates[_0x3469ad].rate + "倍");
        break;
      case "k3hhm":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从1～6中任选2个或多个号码，所选号码与开奖号码任意2个号码相同，即为中奖。奖金" + rates[_0x3469ad].rate + "倍");
        break;
    }
  });
  function _0x31c988(_0x49c62b) {
    if (orderList.length <= 0) {
      return false;
    }
    for (var _0x47fed2 = 0; _0x47fed2 < orderList.length; _0x47fed2++) {
      {
        if (orderList[_0x47fed2].playid == _0x49c62b) {
          {
            orderList.splice(_0x47fed2, 1);
          }
        }
      }
    }
    return orderList;
  }
});
function max_number(_0x566796) {
  var _0x2a942b = _0x566796[0];
  var _0x6ba75a = _0x566796.length;
  for (var _0x40546d = 1; _0x40546d < _0x6ba75a; _0x40546d++) {
    if (_0x566796[_0x40546d] >= _0x2a942b) {
      {
        _0x2a942b = _0x566796[_0x40546d];
      }
    }
  }
  return _0x2a942b;
}
function lottery_multiple(_0x26d053, _0xf1fe3e) {
  var _0xeb05f3 = true;
  _0x26d053 = parseFloat(_0x26d053);
  if (_0xf1fe3e) {
    {
      for (var _0x1ef32a = 0; _0x1ef32a < ratesArr.length; _0x1ef32a++) {
        if (ratesArr[_0x1ef32a] == _0xf1fe3e) {
          {
            ratesArr.splice(_0x1ef32a, 1);
          }
        }
      }
      maxRates = max_number(ratesArr);
      if (orderList[0].playid == "k3sbthbz") {
        maxRates = _0x26d053;
      }
      if (orderList[0].playid == "k3sthdx") {
        maxRates = _0x26d053;
      }
      if (orderList[0].playid == "k3ethfx") {
        {
          maxRates = _0x26d053;
        }
      }
      if (orderList[0].playid == "k3ebthbz") {
        maxRates = _0x26d053;
      }
      if (orderList[0].playid == "k3ethdx") {
        maxRates = _0x26d053;
      }
      return;
    }
  }
  if (ratesArr.length > 0) {
    for (var _0x1ef32a = 0; _0x1ef32a < ratesArr.length; _0x1ef32a++) {
      {
        if (ratesArr[_0x1ef32a] == _0x26d053) {
          _0xeb05f3 = false;
        }
      }
    }
    if (_0xeb05f3) {
      ratesArr.push(_0x26d053);
    }
  } else {
    {
      ratesArr.push(_0x26d053);
    }
  }
  maxRates = max_number(ratesArr);
}
function array_max(_0x499255) {
  var _0x5c33e7 = _0x499255[0];
  for (var _0x39e731 in _0x499255) {
    if (_0x499255[_0x39e731] > _0x5c33e7) {
      _0x5c33e7 = _0x499255[_0x39e731];
    }
  }
  return _0x5c33e7;
}
function lottery_yuji_money(_0x487c6e) {
  var _0x296828 = [];
  var _0x2a0c7b = $(".lottery_input").val() / 1;
  var _0x184d08 = 0;
  var _0x11cbf9 = 0;
  var _0x77e3c2 = 0;
  var _0x2a0ef5 = 0;
  for (var _0x1d0d84 = 0; _0x1d0d84 < orderList.length; _0x1d0d84++) {
    orderList[_0x1d0d84].price = _0x2a0c7b;
    _0x296828.push(orderList[_0x1d0d84].rate / 1);
    _0x2a0ef5 = orderList[_0x1d0d84].rate / 1;
    _0x11cbf9 += orderList[_0x1d0d84].price / 1 * (orderList[_0x1d0d84].zhushu / 1);
    _0x184d08 += orderList[_0x1d0d84].zhushu / 1;
  }
  _0x77e3c2 = array_max(_0x296828);
  console.log(_0x77e3c2);
  _0x77e3c2 = _0x2a0c7b * _0x77e3c2;
  _0x77e3c2 = _0x77e3c2.toFixed(3);
  $(".lottery_input_text").html("最高可中<em style=\"color:#f4c829;\" class=\"max_money\">" + _0x77e3c2 + "</em>元");
  $(".betting_sum").html(_0x184d08);
  $(".betting_sum_moery").html(_0x11cbf9);
}
function isNull(_0x2d03f4) {
  return _0x2d03f4 == "" || _0x2d03f4 == undefined || _0x2d03f4 == null ? false : _0x2d03f4;
}
var betting_sum_moery = 0;
function lottery_touzhufn(_0x26f12b, _0x209a43) {
  console.log(11);
  var _0x18c11d = $("#lottery_sum_old_b").find(".lottery_sum_old");
  var _0x29085f;
  if (_0x18c11d.length > 0) {
    _0x18c11d.each(function (_0x190471) {
      {
        if ($(this).attr("lottery_sum") == _0x26f12b) {
          {
            _0x29085f = $(this).attr("lottery_sum");
          }
        }
      }
    });
    if (_0x29085f == _0x26f12b) {
      {
        $("#lottery_sum_old_b").find(".lottery_sum_old[lottery_sum=\"" + _0x29085f + "\"]").remove();
        if (orderList[0].playid == "k3sbthbz" || orderList[0].playid == "k3ebthbz") {
          {
            $(".betting_sum").text(_0x209a43);
            betting_sum = _0x209a43;
          }
        } else {
          if (orderList[0].playid == "k3ethdx") {
            {
              $(".betting_sum").text(ethdxZhushu);
            }
          } else {
            betting_sum = parseInt(_0x209a43);
            $(".betting_sum").text(betting_sum);
          }
        }
        betting_sum_moery = isNaN(parseInt($(".lottery_input").val())) ? 0 : parseInt($(".lottery_input").val());
        $(".betting_sum_moery").text(betting_sum_moery * betting_sum);
        lottery_multiple(orderList[0].rate, orderList[0].rate);
      }
    } else {
      {
        if (orderList[0].playid == "k3sbthbz" || orderList[0].playid == "k3ebthbz") {
          {
            $(".betting_sum").text(_0x209a43);
            betting_sum = _0x209a43;
          }
        } else {
          if (orderList[0].playid == "k3ethdx") {
            $(".betting_sum").text(ethdxZhushu);
          } else {
            betting_sum = parseInt(_0x209a43);
            $(".betting_sum").text(betting_sum);
          }
        }
        $("#lottery_sum_old_b").append("<em class=\"lottery_sum_old\" lottery_sum=\"" + _0x26f12b + "\"  >" + _0x26f12b + "</em>");
        betting_sum_moery = isNaN(parseInt($(".lottery_input").val())) ? 0 : parseInt($(".lottery_input").val());
        $(".betting_sum_moery").text(betting_sum_moery * betting_sum);
        lottery_multiple(orderList[0].rate);
      }
    }
  } else {
    {
      if (orderList[0].playid == "k3sbthbz" || orderList[0].playid == "k3ebthbz") {
        {
          $(".betting_sum").text(_0x209a43);
          betting_sum = _0x209a43;
        }
      } else {
        if (orderList[0].playid == "k3ethdx") {
          $(".betting_sum").text(ethdxZhushu);
        } else {
          {
            betting_sum = parseInt(_0x209a43);
            $(".betting_sum").text(betting_sum);
          }
        }
      }
      $("#lottery_sum_old_b").append("<em class=\"lottery_sum_old\" lottery_sum=\"" + _0x26f12b + "\"  >" + _0x26f12b + "</em>");
      betting_sum_moery = isNaN(parseInt($(".lottery_input").val())) ? 0 : parseInt($(".lottery_input").val());
      $(".betting_sum_moery").text(betting_sum_moery * betting_sum);
      lottery_multiple(orderList[0].rate);
    }
  }
}
$(document).on("click", "[data-setbetmoney]", function () {
  var _0x443e24 = $(this).attr("data-setbetmoney");
  var _0x1553e4 = $(this).attr("data-trano");
  var _0x52cc52 = $(this).attr("data-zhushu");
  var _0x29afd6 = $("#usebetting_moneys");
  var _0x2c67e0 = 0;
  if (_0x29afd6.val() == "" || parseInt(_0x29afd6.val()) < 1) {
    _0x2c67e0 = _0x443e24;
  } else {
    {
      _0x2c67e0 = parseInt(_0x29afd6.val()) + parseInt(_0x443e24);
    }
  }
  _0x29afd6.val(_0x2c67e0);
  changebetokmoney(_0x2c67e0, _0x52cc52);
  changeorderprice(_0x2c67e0, _0x1553e4);
});
function accMul(_0x3096bb, _0x86757f) {
  var _0x47ffa4 = 0;
  var _0x39d03e = _0x3096bb.toString();
  var _0x16b6de = _0x86757f.toString();
  try {
    _0x47ffa4 += _0x39d03e.split(".")[1].length;
  } catch (_0x2b5809) {}
  try {
    _0x47ffa4 += _0x16b6de.split(".")[1].length;
  } catch (_0x3fbd71) {}
  return Number(_0x39d03e.replace(".", "")) * Number(_0x16b6de.replace(".", "")) / Math.pow(10, _0x47ffa4);
}
function changebetokmoney(_0x1b2b49, _0x23a64b) {
  var _0x7b851 = accMul(_0x1b2b49, _0x23a64b);
  $("#ordertotalprice").text(_0x7b851.toFixed(3));
}
var changeorderprice = function (_0x39cb11, _0x59540c) {
  if (orderList.length >= 1) {
    for (var _0x1eda61 = 0; _0x1eda61 < orderList.length; _0x1eda61++) {
      {
        var _0x3b1f45 = orderList[_0x1eda61];
        if (_0x3b1f45.trano == _0x59540c) {
          orderList[_0x1eda61].price = _0x39cb11;
        }
      }
    }
  }
};
function GamePageSwitchToggle() {
  $("#PageSwitch").toggle();
  if ($("#PageSwitch").hasClass("yyplay_select_container")) {
    $(".theme-red .title").find(".icon-sanjiaoxing").css("transform", "rotate(360deg)");
    $("#PageSwitch").removeClass("yyplay_select_container");
  } else {
    $(".theme-red .title").find(".icon-sanjiaoxing").css("transform", "rotate(180deg)");
    $("#PageSwitch").addClass("yyplay_select_container");
  }
}
var chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function generateMixed(_0x35476f) {
  var _0x2c35bf = "";
  for (var _0x349fb9 = 0; _0x349fb9 < _0x35476f; _0x349fb9++) {
    var _0x5c3478 = Math.ceil(Math.random() * 35);
    _0x2c35bf += chars[_0x5c3478];
  }
  return _0x2c35bf;
}
var Gameinit = function (_0x21ed4c) {
  clearInterval(openCodeTimeOut);
  lotteryname = _0x21ed4c;
  lotterytimes(_0x21ed4c);
  lotteryopencodes(_0x21ed4c);
  getUserBetsListToday(_0x21ed4c);
};
var yIndex = 1;
var lotterytimesId;
var lotterytimes = function (_0xcda510) {
  clearTimeout(lotterytimesId);
  var _0x2310d8 = null;
  var _0x47f378 = null;
  var _0x21b4b9 = apirooturl + "lotterytimes";
  $.post(_0x21b4b9, {
    lotteryname: _0xcda510
  }, function (_0x4baea1) {
    var _0x3840da = {
      IIGRG: function _0x19228a(_0x1f6945, _0x4a563a) {
        return _0x1f6945(_0x4a563a);
      }
    };
    if (_0x4baea1.sign == true) {
      lottery = _0x4baea1.data;
      way.set("showExpect", lottery);
      if (yIndex > 1) {
        var _0x368134 = 9;
        $(function () {
          if (_0x368134 == 9) {
            var _0x273c8e = setInterval(function () {
              {
                if (_0x368134 == 0) {
                  $(".alerts button").html("确定(" + _0x368134 + "秒后自动关闭)");
                  $(".alerts button").click();
                  _0x368134 = 9;
                  clearInterval(_0x273c8e);
                } else {
                  $(".alerts button").html("确定(" + _0x368134 + "秒后自动关闭)");
                  _0x368134--;
                }
              }
            }, 1000);
          }
        });
        hsycmss("<span style=\"color:red;\">" + lottery.lastFullExpect + "</span>期已截止<br />当前期号<span style=\"color:red;\">" + lottery.currFullExpect + "</span><br />投注时请注意期号");
      }
      yIndex++;
      if (lottery.remainTime && eval(lottery.remainTime) > 1) {
        {
          countdownTime(lottery.remainTime, lotterytimes, _0xcda510);
          _0x2310d8 = lottery.lastFullExpect;
          _0x47f378 = lottery.openRemainTime;
          if (_0x2310d8) {
            clearTimeout(openCodeTimeOut);
            $("[way-data='showExpect.currFullExpect']").text(lottery.currFullExpect);
            openexpect = lottery.lastFullExpect;
            ckTimer = true;
            start();
            openCodeTimeOut = setTimeout(function () {
              loadopencode(_0xcda510);
            }, 5000);
          }
        }
      } else {
        if (lottery.currFullExpect == "000000") {
          _0x2310d8 = lottery.lastFullExpect;
        } else {
          lotterytimesId = setTimeout(function () {
            _0x3840da.IIGRG(lotterytimes, _0xcda510);
          }, 5000);
        }
      }
    } else {
      if (_0x4baea1.sign == false) {
        lotterytimesId = setTimeout(function () {
          {
            lotterytimes(_0xcda510);
          }
        }, 5000);
      }
    }
  }, "json");
};
var lotteryopencodesid;
var lotteryopencodes = function (_0x296fce) {
  clearTimeout(lotteryopencodesid);
  var _0x2ca59f = apirooturl + "lotteryopencodes";
  var _0x2c8e60 = "";
  var _0x35c21e = $("#fn_getoPenGame").find("tbody");
  _0x35c21e.html("");
  $.post(_0x2ca59f, {
    lotteryname: _0x296fce
  }, function (_0x4aa62d) {
    var _0x3f820a = {
      Ygsts: function _0x52bf88(_0x524318) {
        return _0x524318();
      }
    };
    if (_0x4aa62d.sign == true) {
      var _0x5921a8 = _0x4aa62d.data;
      for (var _0x55aaf5 in _0x5921a8) {
        var _0x53aa26 = _0x5921a8[_0x55aaf5];
        if (!_0x53aa26.opencode) {
          _0x53aa26.opencode = "0,0,0";
        }
        var _0x4f9fc9 = _0x53aa26.opencode.split(",");
        var _0x2ac289 = parseInt(_0x4f9fc9[0]) + parseInt(_0x4f9fc9[1]) + parseInt(_0x4f9fc9[2]);
        var _0x46aadd = "";
        var _0x57b805 = "";
        if (_0x2ac289 > 10) {
          _0x46aadd = "<i>大</i>";
        } else {
          _0x46aadd = "<i>小</i>";
        }
        if (_0x2ac289 % 2 != 0) {
          _0x57b805 = "<i>单</i>";
        } else {
          _0x57b805 = "<i>双</i>";
        }
        var _0x35ffd5 = _0x53aa26.opencode;
        _0x35ffd5 = _0x35ffd5.split(",");
        var _0x41ee19 = "";
        for (var _0x5bc7cc in _0x35ffd5) {
          _0x41ee19 += "<b class=\"bet-item\"><i data-v-e60a1042=\"\" class=\"Dice Dice" + _0x35ffd5[_0x5bc7cc] + "\"></i></b>";
        }
        _0x2c8e60 += "<div class=\"lotterys\"><div class=\"rq\">第 " + _0x53aa26.expect + " 期</div><div class=\"hm\">" + _0x41ee19 + "</div><div class=\"k3hz\"><em class=\"k3hz_1\">" + _0x2ac289 + "</em><em class=\"k3hz_2\">" + _0x46aadd + "</em><em class=\"k3hz_3\">" + _0x57b805 + "</em></div></div>";
      }
      _0x35c21e.html(_0x2c8e60);
    } else {
      if (_0x4aa62d.sign == false) {
        lotteryopencodesid = setTimeout(function () {
          _0x3f820a.Ygsts(lotteryopencodes);
        }, 5000);
      }
    }
  }, "json");
};
var lotteryratesId;
var lotteryrates = function () {
  clearTimeout(lotteryratesId);
  rates = k3lotteryrates.rates;
  $.each(rates, function (_0x3ba1ba, _0x434c18) {
    var _0x3627aa = _0x434c18.playid;
    $(".ball_aid[rate_" + _0x3627aa + "]").text("赔率" + _0x434c18.rate);
  });
};
var loadopencodecount = 0;
var loadopencode = function (_0x4f30c5) {
  var _0x387beb = apirooturl + "loadopencode";
  var _0x5216a8 = false;
  clearTimeout(openCodeTimeOut);
  $.ajax({
    type: "post",
    url: _0x387beb,
    data: {
      lotteryname: _0x4f30c5,
      expect: openexpect
    },
    cache: false,
    dataType: "json",
    success: function (_0x3daa10) {
      if (_0x3daa10.sign == true) {
        if (_0x3daa10.data.opencode.length > 0) {
          loadopencodecount = 0;
          if (openCodeTimeOut) {
            clearTimeout(openCodeTimeOut);
          }
          var _0x221c33 = way.get("showExpect.lastFullExpect");
          if (_0x221c33 == openexpect) {
            var _0x4357e7 = _0x3daa10.data.opencode;
            var _0x5e504b = _0x4357e7.split(",");
            stopLottery(_0x4357e7);
            lotteryopencodes(_0x4f30c5);
            getUserBetsListToday();
          }
        } else {
          _0x5216a8 = true;
        }
        var _0x221c33 = way.get("showExpect.expect");
        if (_0x221c33 == openexpect && _0x3daa10.data.opencode.length <= 0) {
          if (openCodeTimeOut) {
            clearTimeout(openCodeTimeOut);
          }
          openCodeTimeOut = setInterval(function () {
            {
              loadopencode(_0x4f30c5, openexpect);
            }
          }, 5000);
        }
      } else {
        loadopencodecount++;
        if (loadopencodecount <= 80) {
          openCodeTimeOut = setInterval(function () {
            loadopencode(_0x4f30c5, openexpect);
          }, 5000);
        } else {
          {
            window.location.reload();
          }
        }
      }
    },
    error: function () {
      openCodeTimeOut = setTimeout(function () {
        loadopencode(_0x4f30c5, openexpect);
      }, 5000);
    }
  });
};
function openResult() {}
var jqueryGridPage = 1;
var jqueryGridRows = 10;
function getUserBetsListToday(_0x594fab) {
  if (!user || user.islogin != 1) {
    return false;
  }
  lotteryname = _0x594fab ? _0x594fab : lotteryname;
  var _0x919429 = $("#userbetshistorylist");
  _0x919429.empty();
  var _0x46176e = apirooturl + "betslisttoday";
  var _0x1212d4 = $.pagination({
    render: ".paging",
    pageSize: jqueryGridRows,
    pageLength: 3,
    ajaxType: "post",
    hideGo: true,
    ajaxUrl: _0x46176e,
    ajaxData: {
      lotteryname: lotteryname,
      jqueryGridPage: jqueryGridPage,
      jqueryGridRows: jqueryGridRows
    },
    complete: function () {},
    success: function (_0x1e94dc) {
      {
        _0x919429.empty();
        var _0x296861 = "<tr><td>期号</td><td>投注金额</td><td>奖金</td><td>操作</td></tr>";
        _0x919429.append(_0x296861);
        $.each(_0x1e94dc, function (_0x5dfe89, _0x34fb35) {
          var _0x5553c4 = "";
          _0x5553c4 += "<tr id=\"" + _0x34fb35.trano + "\">";
          _0x5553c4 += "<td>" + _0x34fb35.expect + "</td>";
          _0x5553c4 += "<td>" + _0x34fb35.amount + "</td>";
          if (_0x34fb35.isdraw == 0) {
            {
              _0x5553c4 += "<td><t style=\"color:#fff\">等待开奖</t></td>";
            }
          } else {
            {
              _0x5553c4 += "<td>" + (_0x34fb35.okamount ? _0x34fb35.okamount : 0) + "</td>";
            }
          }
          if (_0x34fb35.isdraw == -1) {
            _0x5553c4 += "<td><t style=\"color:#fff\">未中奖</t></td>";
          } else {
            if (_0x34fb35.isdraw == 1) {
              _0x5553c4 += "<td><t style=\"color:red\">已中奖</t></td>";
            } else {
              if (_0x34fb35.isdraw == -2) {
                _0x5553c4 += "<td style=\"color:#fff\"><del>已撤单</del></td>";
              } else {
                if (_0x34fb35.isdraw == 0) {
                  _0x5553c4 += "<td><t class=\"state\" onclick=\"javascript:getBillInfo('" + _0x34fb35.trano + "')\" style=\"color:red;cursor:pointer;\">撤单</t></td>";
                } else {
                  _0x5553c4 += "<td><t>未知状态</t></td>";
                }
              }
            }
          }
          _0x5553c4 += "</tr>";
          _0x919429.append(_0x5553c4);
        });
      }
    },
    pageError: function (_0x4f62dc) {},
    emptyData: function () {}
  });
  _0x1212d4.init();
}
var CDTime = null;
function countdownTime(_0x135cae, _0x698cec, _0x15a299) {
  var _0x3624cc;
  var _0x3d8a18;
  var _0x37eedb;
  var _0x4b1028;
  var _0x51ce13;
  var _0x13a415;
  var _0x3cc1ea;
  var _0x33ae80;
  var _0xd53dc6;
  var _0x5a97d1;
  if (CDTime) {
    clearInterval(CDTime);
  }
  var _0x525731 = new Date();
  _0x4b1028 = _0x135cae * 1000;
  var _0xa2ab6f = _0x525731.getTime() + _0x4b1028;
  if (_0x4b1028 > 0) {
    _0x3624cc = Math.floor(_0x4b1028 / 1000 / 60 / 60 % 24);
    if (_0x3624cc < 10) {
      {
        _0x51ce13 = "0";
        _0x33ae80 = "" + _0x3624cc;
      }
    } else {
      {
        _0x51ce13 = "" + Math.floor(_0x3624cc / 10);
        _0x33ae80 = "" + _0x3624cc % 10;
      }
    }
    _0x3d8a18 = Math.floor(_0x4b1028 / 1000 / 60 % 60);
    if (_0x3d8a18 < 10) {
      {
        _0x13a415 = "0";
        _0xd53dc6 = "" + _0x3d8a18;
      }
    } else {
      {
        _0x13a415 = "" + Math.floor(_0x3d8a18 / 10);
        _0xd53dc6 = "" + _0x3d8a18 % 10;
      }
    }
    _0x37eedb = Math.floor(_0x4b1028 / 1000 % 60);
    if (_0x37eedb < 10) {
      {
        _0x3cc1ea = "0";
        _0x5a97d1 = "" + _0x37eedb;
      }
    } else {
      _0x3cc1ea = "" + Math.floor(_0x37eedb / 10);
      _0x5a97d1 = "" + _0x37eedb % 10;
    }
    way.set("gametimes", _0x51ce13 + _0x33ae80 + ":" + _0x13a415 + _0xd53dc6 + ":" + _0x3cc1ea + _0x5a97d1);
    $(".gametimes").text(_0x51ce13 + _0x33ae80 + ":" + _0x13a415 + _0xd53dc6 + ":" + _0x3cc1ea + _0x5a97d1);
    way.set("gametimes.h", _0x51ce13 + _0x33ae80);
    way.set("gametimes.m", _0x13a415 + _0xd53dc6);
    way.set("gametimes.s", _0x3cc1ea + _0x5a97d1);
    CDTime = setInterval(function () {
      _0x4b1028 = _0xa2ab6f - new Date().getTime();
      if (_0x4b1028 >= 0) {
        {
          _0x3624cc = Math.floor(_0x4b1028 / 1000 / 60 / 60 % 24);
          if (_0x3624cc < 10) {
            _0x51ce13 = "0";
            _0x33ae80 = "" + _0x3624cc;
          } else {
            {
              _0x51ce13 = "" + Math.floor(_0x3624cc / 10);
              _0x33ae80 = "" + _0x3624cc % 10;
            }
          }
          _0x3d8a18 = Math.floor(_0x4b1028 / 1000 / 60 % 60);
          if (_0x3d8a18 < 10) {
            _0x13a415 = "0";
            _0xd53dc6 = "" + _0x3d8a18;
          } else {
            _0x13a415 = "" + Math.floor(_0x3d8a18 / 10);
            _0xd53dc6 = "" + _0x3d8a18 % 10;
          }
          _0x37eedb = Math.floor(_0x4b1028 / 1000 % 60);
          if (_0x37eedb < 10) {
            _0x3cc1ea = "0";
            _0x5a97d1 = "" + _0x37eedb;
          } else {
            {
              _0x3cc1ea = "" + Math.floor(_0x37eedb / 10);
              _0x5a97d1 = "" + _0x37eedb % 10;
            }
          }
          way.set("gametimes", _0x51ce13 + _0x33ae80 + ":" + _0x13a415 + _0xd53dc6 + ":" + _0x3cc1ea + _0x5a97d1);
          $(".gametimes").text(_0x51ce13 + _0x33ae80 + ":" + _0x13a415 + _0xd53dc6 + ":" + _0x3cc1ea + _0x5a97d1);
          way.set("gametimes.h", _0x51ce13 + _0x33ae80);
          way.set("gametimes.m", _0x13a415 + _0xd53dc6);
          way.set("gametimes.s", _0x3cc1ea + _0x5a97d1);
        }
      } else {
        {
          clearInterval(CDTime);
          eval(_0x698cec)(_0x15a299);
        }
      }
    }, 500);
  } else {
    eval(_0x698cec)(_0x15a299);
  }
}
function start() {
  var _0x3e9f5c = ClockEnv.numRange.split("-");
  if (ckTimer) {
    {
      openLottery(ClockEnv.num, _0x3e9f5c[1]);
    }
  }
}
var T10;
var T9;
var T8;
var T7;
var T6;
var T5;
var T4;
var T3;
var T2;
var T1;
function openLottery(_0x36c4f0, _0x1f8eb3) {
  if (T10) {
    {
      clearInterval(T10);
      way.set("showExpect.openCode10", " ");
    }
  }
  if (T9) {
    clearInterval(T9);
    way.set("showExpect.openCode9", " ");
  }
  if (T8) {
    clearInterval(T8);
    way.set("showExpect.openCode8", " ");
  }
  if (T7) {
    clearInterval(T7);
    way.set("showExpect.openCode7", " ");
  }
  if (T6) {
    clearInterval(T6);
    way.set("showExpect.openCode6", " ");
  }
  if (T5) {
    clearInterval(T5);
    way.set("showExpect.openCode5", " ");
  }
  if (T4) {
    {
      clearInterval(T4);
      way.set("showExpect.openCode4", " ");
    }
  }
  if (T3) {
    clearInterval(T3);
    way.set("showExpect.openCode3", " ");
  }
  if (T2) {
    {
      clearInterval(T2);
      way.set("showExpect.openCode2", " ");
    }
  }
  if (T1) {
    clearInterval(T1);
    way.set("showExpect.openCode1", " ");
  }
  var _0x5b38f9 = $("#qiuanimation3");
  if (_0x5b38f9.length > 0) {
    {
      _0x5b38f9.hide();
      _0x5b38f9.find("div.bigone").empty();
      _0x5b38f9.find("div.bigone").hide();
    }
  }
  var _0x139e79 = $("#qiuanimation5");
  if (_0x139e79.length > 0) {
    {
      _0x139e79.hide();
      _0x139e79.find("div.bigone").empty();
      _0x139e79.find("div.bigone").hide();
    }
  }
  $(".kaijq").find("ul").hide();
  if (_0x36c4f0 == 3) {
    {
      $(".lotter-bigqiu3").show();
    }
  } else {
    if (_0x36c4f0 == 5) {
      {
        $(".lotter-bigqiu5").show();
      }
    } else {
      if (_0x36c4f0 == 8) {
        $(".lotter-bigsmll8").show();
      } else {
        if (_0x36c4f0 == 10) {
          $(".lotter-bigsmll10").show();
        }
      }
    }
  }
  Lottery(_0x36c4f0, _0x1f8eb3);
}
function Lottery(_0x1acf9c, _0x467f72) {
  if (_0x1acf9c >= 10) {
    T10 = window.setInterval(function () {
      {
        openLottery10(_0x467f72);
      }
    }, 50);
  }
  if (_0x1acf9c >= 9) {
    T9 = window.setInterval(function () {
      openLottery9(_0x467f72);
    }, 50);
  }
  if (_0x1acf9c >= 8) {
    {
      T8 = window.setInterval(function () {
        openLottery8(_0x467f72);
      }, 50);
    }
  }
  if (_0x1acf9c >= 7) {
    T7 = window.setInterval(function () {
      openLottery7(_0x467f72);
    }, 50);
  }
  if (_0x1acf9c >= 6) {
    {
      T6 = window.setInterval(function () {
        {
          openLottery6(_0x467f72);
        }
      }, 50);
    }
  }
  if (_0x1acf9c >= 5) {
    T5 = window.setInterval(function () {
      openLottery5(_0x467f72);
    }, 50);
  }
  if (_0x1acf9c >= 4) {
    T4 = window.setInterval(function () {
      openLottery4(_0x467f72);
    }, 50);
  }
  if (_0x1acf9c >= 3) {
    T3 = window.setInterval(function () {
      openLottery3(_0x467f72);
    }, 50);
  }
  if (_0x1acf9c >= 2) {
    T2 = window.setInterval(function () {
      openLottery2(_0x467f72);
    }, 50);
  }
  if (_0x1acf9c >= 1) {
    {
      T1 = window.setInterval(function () {
        openLottery1(_0x467f72);
      }, 50);
    }
  }
}
function openLottery1(_0x47cc7b) {
  $("[way-data=\"showExpect.openCode1\"]").html("<b class=\"bet-item\"><i data-v-e60a1042=\"\" class=\"Dice Dice" + Math.round(Math.random() * (_0x47cc7b - 1) + 1) + "\"></i></b>");
}
function openLottery2(_0x37e195) {
  $("[way-data=\"showExpect.openCode2\"]").html("<b class=\"bet-item\"><i data-v-e60a1042=\"\" class=\"Dice Dice" + Math.round(Math.random() * (_0x37e195 - 1) + 1) + "\"></i></b>");
}
function openLottery3(_0x299a07) {
  $("[way-data=\"showExpect.openCode3\"]").html("<b class=\"bet-item\"><i data-v-e60a1042=\"\" class=\"Dice Dice" + Math.round(Math.random() * (_0x299a07 - 1) + 1) + "\"></i></b>");
}
function stopLottery(_0xa529c0) {
  var _0xe09f7e = _0xa529c0.split(",");
  if (_0xe09f7e.length >= 10) {
    setTimeout(function () {
      clearInterval(T10);
      way.set("showExpect.openCode10", _0xe09f7e[9] + "");
    }, 4000);
  }
  if (_0xe09f7e.length >= 9) {
    setTimeout(function () {
      clearInterval(T9);
      way.set("showExpect.openCode9", _0xe09f7e[8] + "");
    }, 4000);
  }
  if (_0xe09f7e.length >= 8) {
    {
      setTimeout(function () {
        clearInterval(T8);
        way.set("showExpect.openCode8", _0xe09f7e[7] + "");
      }, 4000);
    }
  }
  if (_0xe09f7e.length >= 7) {
    {
      setTimeout(function () {
        clearInterval(T7);
        way.set("showExpect.openCode7", _0xe09f7e[6] + "");
      }, 3500);
    }
  }
  if (_0xe09f7e.length >= 6) {
    {
      setTimeout(function () {
        clearInterval(T6);
        way.set("showExpect.openCode6", _0xe09f7e[5] + "");
      }, 3000);
    }
  }
  if (_0xe09f7e.length >= 5) {
    {
      setTimeout(function () {
        {
          clearInterval(T5);
          way.set("showExpect.openCode5", _0xe09f7e[4] + "");
        }
      }, 2500);
    }
  }
  if (_0xe09f7e.length >= 4) {
    setTimeout(function () {
      clearInterval(T4);
      way.set("showExpect.openCode4", _0xe09f7e[3] + "");
    }, 2000);
  }
  if (_0xe09f7e.length >= 3) {
    setTimeout(function () {
      clearInterval(T3);
      $("[way-data=\"showExpect.openCode3\"]").html("<b class=\"bet-item\"><i data-v-e60a1042=\"\" class=\"Dice Dice" + _0xe09f7e[2] + "\"></i></b>");
    }, 1500);
  }
  if (_0xe09f7e.length >= 2) {
    setTimeout(function () {
      {
        clearInterval(T2);
        $("[way-data=\"showExpect.openCode2\"]").html("<b class=\"bet-item\"><i data-v-e60a1042=\"\" class=\"Dice Dice" + _0xe09f7e[1] + "\"></i></b>");
      }
    }, 1000);
  }
  if (_0xe09f7e.length >= 1) {
    setTimeout(function () {
      {
        clearInterval(T1);
        $("[way-data=\"showExpect.openCode1\"]").html("<b class=\"bet-item\"><i data-v-e60a1042=\"\" class=\"Dice Dice" + _0xe09f7e[0] + "\"></i></b>");
      }
    }, 200);
  }
}
function strCut(_0x500931, _0x26cd24) {
  var _0x542eaf = _0x500931.length;
  if (_0x542eaf == 0) {
    return false;
  }
  var _0x205c0f = Math.ceil(_0x542eaf / _0x26cd24);
  var _0x1559c0 = Array();
  for (var _0x55ca0e = 0; _0x55ca0e < _0x205c0f; _0x55ca0e++) {
    _0x1559c0[_0x55ca0e] = _0x500931.substr(_0x55ca0e * _0x26cd24, _0x26cd24);
  }
  return _0x1559c0;
}
function Sames(_0x34275b, _0x425433) {
  var _0x47ba22 = 0;
  for (i = 0; i < _0x34275b.length; i++) {
    {
      var _0x471679 = 0;
      for (j = 0; j < _0x425433.length; j++) {
        {
          if (_0x34275b[i] - _0x425433[j] == 0) {
            _0x471679 = 1;
          }
        }
      }
      if (_0x471679 == 1) {
        _0x47ba22 += 1;
      }
    }
  }
  return _0x47ba22;
}
function Combination(_0x56d4b1, _0x4d07b2) {
  _0x4d07b2 = parseInt(_0x4d07b2);
  _0x56d4b1 = parseInt(_0x56d4b1);
  if (_0x4d07b2 < 0 || _0x56d4b1 < 0) {
    return false;
  }
  if (_0x4d07b2 == 0 || _0x56d4b1 == 0) {
    return 1;
  }
  if (_0x4d07b2 > _0x56d4b1) {
    return 0;
  }
  if (_0x4d07b2 > _0x56d4b1 / 2) {
    {
      _0x4d07b2 = _0x56d4b1 - _0x4d07b2;
    }
  }
  var _0x3d1485 = 0;
  for (i = _0x56d4b1; i >= _0x56d4b1 - _0x4d07b2 + 1; i--) {
    _0x3d1485 += Math.log(i);
  }
  for (i = _0x4d07b2; i >= 1; i--) {
    _0x3d1485 -= Math.log(i);
  }
  _0x3d1485 = Math.exp(_0x3d1485);
  return Math.round(_0x3d1485);
}
function filterArray(_0x205de) {
  var _0x2de028 = 0;
  var _0x37db38 = _0x205de.length;
  var _0x4e402d = new Array();
  for (var _0x53e977 = 0; _0x53e977 < _0x37db38; _0x53e977++) {
    {
      for (var _0xe048e1 = _0x53e977 + 1; _0xe048e1 < _0x37db38; _0xe048e1++) {
        if (_0x205de[_0x53e977] == _0x205de[_0xe048e1]) {
          _0x205de[_0x53e977] = null;
          break;
        }
      }
    }
  }
  for (var _0x53e977 = 0; _0x53e977 < _0x37db38; _0x53e977++) {
    {
      if (_0x205de[_0x53e977]) {
        _0x4e402d[_0x2de028++] = _0x205de[_0x53e977];
      }
    }
  }
  return _0x4e402d;
}
function isRepeat(_0x128d3d) {
  var _0x2ddeb1 = {};
  for (var _0x4a5f65 in _0x128d3d) {
    if (_0x2ddeb1[_0x128d3d[_0x4a5f65]]) {
      return true;
    }
    _0x2ddeb1[_0x128d3d[_0x4a5f65]] = true;
  }
  return false;
}
function DescartesAlgorithm() {
  var _0x2ac7f1;
  var _0x5cf2ad;
  var _0x419c53 = [];
  var _0x498d55 = [];
  var _0x50ee5f = [];
  if (arguments.length == 1) {
    {
      if (!Array.isArray(arguments[0])) {
        return [arguments[0]];
      } else {
        {
          return arguments[0];
        }
      }
    }
  }
  if (arguments.length > 2) {
    {
      for (_0x2ac7f1 = 0; _0x2ac7f1 < arguments.length - 1; _0x2ac7f1++) {
        _0x419c53[_0x2ac7f1] = arguments[_0x2ac7f1];
      }
      _0x498d55 = arguments[_0x2ac7f1];
      return arguments.callee(arguments.callee.apply(null, _0x419c53), _0x498d55);
    }
  }
  if (Array.isArray(arguments[0])) {
    _0x419c53 = arguments[0];
  } else {
    _0x419c53 = [arguments[0]];
  }
  if (Array.isArray(arguments[1])) {
    {
      _0x498d55 = arguments[1];
    }
  } else {
    _0x498d55 = [arguments[1]];
  }
  for (_0x2ac7f1 = 0; _0x2ac7f1 < _0x419c53.length; _0x2ac7f1++) {
    {
      for (_0x5cf2ad = 0; _0x5cf2ad < _0x498d55.length; _0x5cf2ad++) {
        {
          if (Array.isArray(_0x419c53[_0x2ac7f1])) {
            {
              _0x50ee5f.push(_0x419c53[_0x2ac7f1].concat(_0x498d55[_0x5cf2ad]));
            }
          } else {
            _0x50ee5f.push([_0x419c53[_0x2ac7f1], _0x498d55[_0x5cf2ad]]);
          }
        }
      }
    }
  }
  return _0x50ee5f;
}
function combine(_0x352692, _0x17f936) {
  var _0x2b3ddc = [];
  (function f(_0x4c2659, _0x2c95d4, _0x42a091) {
    if (_0x42a091 == 0) {
      return _0x2b3ddc.push(_0x4c2659);
    }
    for (var _0x4dc3d0 = 0, _0x33afc3 = _0x2c95d4.length; _0x4dc3d0 <= _0x33afc3 - _0x42a091; _0x4dc3d0++) {
      f(_0x4c2659.concat(_0x2c95d4[_0x4dc3d0]), _0x2c95d4.slice(_0x4dc3d0 + 1), _0x42a091 - 1);
    }
  })([], _0x352692, _0x17f936);
  return _0x2b3ddc;
}
function permutation(_0x55636c, _0x3e6595) {
  var _0x398674 = [];
  (function f(_0x3bf274, _0x3b526d, _0x103e40) {
    if (_0x103e40 == 0) {
      return _0x398674.push(_0x3bf274);
    }
    for (var _0x4dfee8 = 0, _0x27af6e = _0x3b526d.length; _0x4dfee8 < _0x27af6e; _0x4dfee8++) {
      f(_0x3bf274.concat(_0x3b526d[_0x4dfee8]), _0x3b526d.slice(0, _0x4dfee8).concat(_0x3b526d.slice(_0x4dfee8 + 1)), _0x103e40 - 1);
    }
  })([], _0x55636c, _0x3e6595);
  return _0x398674;
}
(function (_0x49f8a6, _0x381cea, _0x4f783a) {
  _0x4f783a = "al";
  try {
    {
      _0x4f783a += "ert";
      _0x381cea = encode_version;
      if (!(typeof _0x381cea !== "undefined" && _0x381cea === "jsjiami.com.v5")) {
        {
          _0x49f8a6[_0x4f783a]("删除版本号，js会定期弹窗，还请支持我们的工作");
        }
      }
    }
  } catch (_0x35f439) {
    _0x49f8a6[_0x4f783a]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";