//Fri Mar 21 2025 03:58:52 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
var _0x2ebd45 = function () {
  var _0x1581f8 = true;
  return function (_0x4f746c, _0x3bd381) {
    var _0x5d17ce = _0x1581f8 ? function () {
      if (_0x3bd381) {
        var _0x160138 = _0x3bd381.apply(_0x4f746c, arguments);
        _0x3bd381 = null;
        return _0x160138;
      }
    } : function () {};
    _0x1581f8 = false;
    return _0x5d17ce;
  };
}();
var _0x5e294c = _0x2ebd45(this, function () {
  var _0x1db465 = function () {
    return "dev";
  };
  var _0x1d143b = function () {
    return "window";
  };
  var _0x885a3 = function () {
    var _0x34367d = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
    return !_0x34367d.test(_0x1db465.toString());
  };
  var _0x1d4612 = function () {
    var _0x2afeb2 = new RegExp("(\\\\[x|u](\\w){2,4})+");
    return _0x2afeb2.test(_0x1d143b.toString());
  };
  var _0x12a23a = function (_0x2740db) {
    var _0xb9c371 = 0 >> 1 + NaN;
    if (_0x2740db.indexOf("i" === _0xb9c371)) {
      _0x3b8316(_0x2740db);
    }
  };
  var _0x3b8316 = function (_0x244ef2) {
    var _0x4d606e = 3 >> 1 + NaN;
    if (_0x244ef2.indexOf("true"[3]) !== _0x4d606e) {
      _0x12a23a(_0x244ef2);
    }
  };
  if (!_0x885a3()) {
    if (!_0x1d4612()) {
      _0x12a23a("indеxOf");
    } else {
      _0x12a23a("indexOf");
    }
  } else {
    _0x12a23a("indеxOf");
  }
});
_0x5e294c();
var currNumber = [];
var zhushus = [];
var rates = k3lotteryrates.rates;
var minMoney = 1;
var maxbeishu = 10000;
var lastMoney = 0;
var inputVal = "";
$(function () {
  console.log("  ___   _____ _____ _                 _ ");
  console.log(" / _ \\ |____ /  __ \\ |               | |");
  console.log("/ /_\\ \\    / / /  \\/ | ___  _   _  __| |");
  console.log("|  _  |    \\ \\ |   | |/ _ \\| | | |/ _` |");
  console.log("| | | |.___/ / \\__/\\ | (_) | |_| | (_| |");
  console.log("\\_| |_/\\____/ \\____/_|\\___/ \\__,_|\\__,_|--爱尚互联 30041321-小爱2020-12-10");
  getUserBetsListToday(lotteryname);
  function _0x1621a4() {
    var _0x1b3732 = $(this).attr("lottery_code");
    _0x1b3732 = "xy28_tm";
    $(".lottery-number").find("span[way-data=\"tabDoc\"]").html("至少选择一个和值，竞猜开奖号码三位数字之和。");
  }
  _0x1621a4();
  $(document).on("click", ".play_select_tit li", function () {
    {
      $(this).addClass("ssc-selected").siblings("li").removeClass("ssc-selected");
      lottery_code = $(this).attr("lottery_code");
      $(".g_Number_Section > div." + lottery_code).show().siblings("div").hide();
      var _0x46c7c6 = $(this).text();
      $(".play_wanfa string").text(_0x46c7c6);
      $("body").removeClass("niubihh");
      $(".play_select_insert").removeClass("linearTop ");
      $(".play_select_insert").addClass("linearBottom");
      setTimeout(function () {
        $(".alert_bj").hide();
        $(".play_select_insert").hide();
        $(".play_select_insert").removeClass("linearBottom ");
        $(".play_select_insert").addClass("linearTop");
      }, 200);
      var _0x392f35 = $(this).attr("lottery_code");
      switch (_0x392f35) {
        case "xy28_tm":
          $(".lottery-number").find("span[way-data=\"tabDoc\"]").html("至少选择一个和值，竞猜开奖号码三位数字之和。");
          break;
        case "xy28_tmbs":
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("可选取三个和值,当中任何一个与开奖号码三位数字之和相同即中奖。赔率" + rates[_0x392f35].rate + "倍");
          break;
        case "xy28_bs":
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("所选波色与开奖和值结果相同即中奖，结果为黑波，视为不中奖。");
          break;
        case "xy28_hunhe":
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("开奖号码三个数字和符合所选取注数规则即中奖。");
          break;
      }
    }
  });
  $(document).on("click", ".play_select_tit li", function () {
    $(".selectNumber").removeClass("ssc-curr-z");
  });
  if ($(".selectMultipInput").val() <= 1) {
    {
      $(".reduce").addClass("noReduce");
    }
  }
  $(".reduce").on("click", function () {
    {
      _0x20d406("-");
      countMoney();
    }
  });
  $(".selectMultiple .add").on("click", function () {
    _0x20d406("+");
    countMoney();
  });
  $(".selectMultipInput").on("change", function () {
    _0x20d406();
    countMoney();
  });
  $(".selectMultipleCon").on("change", function () {
    {
      countMoney();
    }
  });
  function _0x20d406(_0x1e68ac) {
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
      if ("+" == _0x1e68ac) {
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
        if ("-" == _0x1e68ac) {
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
    var _0x3fd180 = $(".yBettingLists").find(".yBettingList");
    var _0x1ef2ce = $(this).parent().attr("id");
    var _0x2971ef = 0;
    _0x3fd180.each(function (_0x1052ec) {
      {
        if (_0x1ef2ce == orderList[_0x1052ec].trano) {
          {
            _0x2971ef = _0x1052ec;
          }
        }
      }
    });
    orderList.splice(_0x2971ef, 1);
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
});
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
    });
  });
  $("#lanIconNumbere").text(parseInt($("#lanIconNumbere").text()) + 1);
}
function currList() {
  var _0x352fd1 = [];
  $(".ssc-ct-content").each(function (_0x4f9715) {
    {
      var _0x5a339d = [];
      $(this).find(".ssc-curr-z").each(function (_0x497e9f) {
        {
          _0x5a339d.push($(this).attr("data-number"));
        }
      });
      _0x352fd1.push(_0x5a339d);
    }
  });
  return _0x352fd1;
}
function countFun() {
  switch (lottery_code) {
    case "xy28_tm":
      zhushus.length = currNumber[0].length;
      break;
    case "xy28_tmbs":
      zhushus.length = combine(currNumber[1], 3).length;
      break;
    case "xy28_bs":
      zhushus.length = currNumber[2].length;
      break;
    case "xy28_hunhe":
      zhushus.length = currNumber[3].length;
      break;
  }
}
function countMoney() {
  var _0x342fec = parseInt(zhushus.length);
  var _0x6f4c29 = parseInt($(".selectMultipInput").val());
  var _0x28266d = parseFloat($(".selectMultipleCon").val());
  var _0x5157d2 = _0x342fec * minMoney * _0x6f4c29 * _0x28266d;
  lastMoney = _0x5157d2.toFixed(3);
  $(".zhushu").text(_0x342fec);
  $(".selectMultipleOldMoney").text(lastMoney);
  $(".hemaijinerMoney").text(lastMoney);
}
function combine(_0xee85fb, _0x3683fa) {
  var _0x21a82b = [];
  (function f(_0x14704e, _0x3f6e3e, _0x2cc461) {
    if (_0x2cc461 == 0) {
      return _0x21a82b.push(_0x14704e);
    }
    for (var _0x20322a = 0, _0x24e160 = _0x3f6e3e.length; _0x20322a <= _0x24e160 - _0x2cc461; _0x20322a++) {
      f(_0x14704e.concat(_0x3f6e3e[_0x20322a]), _0x3f6e3e.slice(_0x20322a + 1), _0x2cc461 - 1);
    }
  })([], _0xee85fb, _0x3683fa);
  return _0x21a82b;
}
function setytotal_money() {
  var _0x4a480f = 0;
  var _0x3b574e = 0;
  var _0x74c613 = 0;
  var _0x44d0ac = 0;
  $(".orderprice").each(function (_0x41da3c) {
    {
      _0x4a480f = isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
      _0x3b574e += isNaN(parseInt($(".ys_zhushu em").eq(_0x41da3c).text())) ? 0 : parseInt($(".ys_zhushu em").eq(_0x41da3c).text());
      _0x44d0ac = isNaN(parseInt($(".ys_zhushu em").eq(_0x41da3c).text())) ? 0 : parseInt($(".ys_zhushu em").eq(_0x41da3c).text());
      _0x74c613 += _0x4a480f * _0x44d0ac;
    }
  });
  if (isNaN(_0x4a480f)) {
    _0x4a480f = 0;
  }
  $("#f_gameOrder_amount").text(_0x74c613);
  $("#f_gameOrder_lotterys_num").text(_0x3b574e);
}
$(document).on("click", ".xy28_tm .selectNumber", function () {
  xy28_tm($(this));
});
var xy28_tm = function (_0x12228f) {
  var _0x36e9f1 = _0x12228f.attr("playid");
  _0x12228f.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "xy28_tm_addbtn('" + _0x36e9f1 + "')");
};
var xy28_tm_addbtn = function (_0x55e52a) {
  $(".xy28_tm .selectNumber.ssc-curr-z").each(function () {
    {
      var _0x55505e = $(this);
      var _0x32aae2 = _0x55505e.text();
      var _0x48a8f0 = _0x55505e.attr("data-number");
      var _0x55e52a = _0x55505e.attr("playid");
      addtotouzhu(_0x55e52a, _0x48a8f0, 1);
      setytotal_money();
    }
  });
  $(".xy28_tm .ssc-curr-z").removeClass("ssc-curr-z");
};
$(document).on("click", ".xy28_tmbs .selectNumber", function () {
  xy28_tmbs($(this));
});
var xy28_tmbs = function (_0x26df64) {
  var _0x11bf50 = _0x26df64.text();
  var _0x42db42 = _0x26df64.attr("data-number");
  var _0x148dcf = _0x26df64.attr("playid");
  _0x26df64.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "xy28_tmbs_addbtn('" + _0x148dcf + "')");
};
var xy28_tmbs_addbtn = function (_0x5895fa) {
  var _0x3380e1 = [];
  $("div." + _0x5895fa + " .selectNumber").each(function () {
    {
      var _0x18f8cf = $(this);
      if (_0x18f8cf.hasClass("ssc-curr-z")) {
        {
          var _0x2948b5 = _0x18f8cf.attr("data-number");
          _0x3380e1.push(_0x2948b5);
        }
      }
    }
  });
  if (_0x3380e1.length >= 3) {
    {
      addtotouzhu(_0x5895fa, _0x3380e1.join(","), combine(currNumber[1], 3).length, 1);
    }
  } else {
    hsycmserror("选择的投注号码不完整", -1);
  }
  $("div." + _0x5895fa + " .selectNumber").removeClass("ssc-curr-z");
  setytotal_money();
};
$(document).on("click", ".xy28_bs .selectNumber", function () {
  xy28_bs($(this));
});
var xy28_bs = function (_0x289840) {
  var _0x1537df = _0x289840.attr("playid");
  _0x289840.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "xy28_bs_addbtn('" + _0x1537df + "')");
};
var xy28_bs_addbtn = function (_0x17c925) {
  $(".xy28_bs .selectNumber.ssc-curr-z").each(function () {
    {
      var _0x157071 = $(this);
      var _0x425a15 = _0x157071.text();
      var _0x413432 = _0x157071.attr("data-number");
      var _0x17c925 = _0x157071.attr("playid");
      addtotouzhu(_0x17c925, _0x413432, 1);
      setytotal_money();
    }
  });
  $(".xy28_bs .ssc-curr-z").removeClass("ssc-curr-z");
};
$(document).on("click", ".xy28_hunhe .selectNumber", function () {
  xy28_hunhe($(this));
});
var xy28_hunhe = function (_0x352c95) {
  var _0x5d24e9 = _0x352c95.attr("playid");
  _0x352c95.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "xy28_hunhe_addbtn('" + _0x5d24e9 + "')");
};
var xy28_hunhe_addbtn = function (_0x2cd88c) {
  $(".xy28_hunhe .selectNumber.ssc-curr-z").each(function () {
    {
      var _0x1f0c97 = $(this);
      var _0x304211 = _0x1f0c97.text();
      var _0x12d939 = _0x1f0c97.attr("data-number");
      var _0x2cd88c = _0x1f0c97.attr("playid");
      addtotouzhu(_0x2cd88c, _0x12d939, 1);
      setytotal_money();
    }
  });
  $(".xy28_hunhe .ssc-curr-z").removeClass("ssc-curr-z");
};
var orderList = new Array();
var addtotouzhu = function (_0x1adf59, _0x32c934, _0x4779a5, _0x160db0) {
  var _0x3e4c7f = $(".selectMultipInput").val();
  var _0x414f9c = $(".selectMultipleCon").find("option:selected").text();
  var _0xf28b5a = $(".selectMultipleCon").val();
  var _0x38c939 = rates[_0x1adf59];
  console.log(_0x38c939);
  if (parseInt(_0x38c939.minjj) < 1) {
    _0x38c939.minjj = 1;
  }
  if (parseInt(_0x38c939.maxprize) < 1) {
    _0x38c939.maxprize = 30000;
  }
  var _0x3b3581 = generateMixed(20);
  var _0x2d616f = $(".xiad-left dl");
  var _0x590e07 = _0x38c939.playid + "###" + _0x32c934;
  var _0x6ae403 = $(".xiad-left dl dd[orderDetail='" + _0x590e07 + "']");
  var _0x152bdf = "";
  if (_0x160db0 == 1 || _0x160db0 == true) {
    {
      _0x152bdf = "[" + _0x32c934 + "]";
    }
  }
  if (_0x6ae403.length > 0) {
    var _0x18f1a2 = parseInt(_0x6ae403.find("input.orderprice").val()) + 1;
    var _0x18052a = accMul(_0x18f1a2, _0x38c939.rate);
    _0x6ae403.find("input.orderprice").val(_0x18f1a2).focus();
    _0x6ae403.find(".order_money").text(_0x18052a.toFixed(3));
    currNumber = [];
    zhushus = [];
    $(".zhushu").text("0");
    $(".selectMultipleOldMoney").text("0.00");
    _0x3b3581 = _0x6ae403.attr("id");
    if (orderList.length >= 1) {
      for (var _0x392087 in orderList) {
        if (orderList[_0x392087].trano == _0x3b3581) {
          orderList[_0x392087].price = _0x18f1a2;
        }
      }
    }
    return false;
  } else {
    {
      var _0x3dfb4f = {
        trano: _0x3b3581,
        playtitle: _0x38c939.title,
        playid: _0x38c939.playid,
        number: _0x32c934,
        zhushu: _0x4779a5 ? parseInt(_0x4779a5) : 1,
        price: parseInt(_0x4779a5) * parseInt(_0x3e4c7f) * parseInt(_0x414f9c),
        minxf: _0x38c939.minxf,
        totalzs: _0x38c939.totalzs,
        maxjj: _0x38c939.maxjj,
        minjj: _0x38c939.minjj,
        maxzs: _0x38c939.maxzs,
        rate: _0x38c939.rate,
        jine: parseInt(_0x3e4c7f) * parseInt(_0x414f9c)
      };
      orderList.unshift(_0x3dfb4f);
    }
  }
  addNumberLanAn();
  console.log(orderList);
  var _0x3a0fcd = accMul(_0x38c939.minxf, _0x38c939.rate);
  var _0x4630d6 = _0x4779a5 ? parseInt(_0x4779a5) : 1;
  console.log(_0x3a0fcd);
  var _0x17312f = "<div class=\"yBettingList gamezhui\" id=\"" + _0x3b3581 + "\">" + "<div class=\"gamezhui-1\">" + "<span><i style=\"color: #ae995c;\"class=\"iconfont\">&#xe606; </i>" + _0x38c939.title + "</span><a class=\"sc\"><i class=\"iconfont\">&#xe630;</i></a>" + "</div>" + "<div class=\"gamezhui-2\">" + "<span class=\"gamezhui-h\">" + _0x32c934 + "</span>" + "<span class=\"gamezhui-m\">" + _0x4779a5 + "注," + _0x3e4c7f + "倍," + _0x414f9c + "=" + parseInt(_0x4779a5) * parseInt(_0x3e4c7f) * parseInt(_0x414f9c) + "元</span>" + "</div>" + "<div id=\"betting_money\" style=\"display: none;\">" + lastMoney + "</div>";
  $(".yBettingLists").append(_0x17312f);
  currNumber = [];
  zhushus = [];
  $(".zhushu").text("0");
  $(".selectMultipleOldMoney").text("0.00");
};
$(document).on("click", ".kuaijie", function () {
  $(".addtobetbtn").click();
  if (orderList.length < 1) {
    {
      hsycmserror("请选择投注号码", -1);
      return false;
    }
  }
  var _0x463595 = "<div class=\"hsycms-model-btn confirm\"><button type=\"button\" class=\"cancel\">取消</button><button type=\"button\" class=\"ok\">确定</button></div>";
  $("#confirm").append(_0x463595);
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
    $("#mask-confirm").hide();
    $("#confirm").hide();
    $(".confirm").remove();
    if (!user) {
      hsycmserror("请先登陆", -1);
    }
    $.ajax({
      type: "POST",
      url: apirooturl + "cpbuy",
      data: {
        orderList: orderList,
        expect: lottery.currFullExpect,
        lotteryname: lotteryname
      },
      success: function (_0x222586) {
        if (_0x222586.sign) {
          $("#orderlist_clear").click();
          $(".kuaijie").css({
            background: "#7b7b87"
          });
          $(".hemai").css({
            background: "#7b7b87"
          });
          hsycms("投注成功", 1);
        } else {
          hsycmserror(_0x222586.message, -1);
        }
      }
    });
  });
  var _0x3fb9e7 = 0;
  for (var _0x345dcb = 0; _0x345dcb < orderList.length; _0x345dcb++) {
    var _0x41f141 = orderList[_0x345dcb];
    var _0x2e33cb = rates[_0x41f141.playid];
    var _0x36124f = Number(_0x41f141.yjf);
    var _0x5082ae = _0x41f141.number;
    _0x3fb9e7 += _0x36124f;
  }
  $("#Orderdetailtotalprice").text(_0x3fb9e7.toFixed(3));
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
    {
      hsycmserror("发起合买只能投注一种玩法");
      return false;
    }
  }
  var _0x57fa62 = 0;
  var _0x2537f3 = 0;
  var _0x5eae1b = Number($("#fsInput").val());
  var _0x3119c9 = Number($("#rgInput").val());
  var _0x29027f = Number($("#bdInput").val());
  var _0xcea621 = Number($("#isbaodi").hasClass("active"));
  var _0x29964a = Number($(".leixing .active").attr("num"));
  for (var _0x25fe51 = 0; _0x25fe51 < orderList.length; _0x25fe51++) {
    {
      var _0x5e6aa0 = orderList[_0x25fe51];
      var _0xfc9fe2 = rates[_0x5e6aa0.playid];
      var _0x23a82e = Number(_0x5e6aa0.yjf);
      var _0x31eed8 = _0x5e6aa0.number;
      _0x57fa62 += _0x23a82e;
    }
  }
  if (_0x5eae1b < 1) {
    {
      hsycmserror("您要分成的份数必须大于等于1");
      $("#fsInput").focus();
      return false;
    }
  } else {
    if (_0x57fa62.toFixed(2) / _0x5eae1b < 1) {
      hsycmserror("每份金额必须大于等于1元！");
      $("#fsInput").focus();
      return false;
    } else {
      if (_0x3119c9 < _0x5eae1b * 0.02) {
        hsycmserror("您要认购的份数至少应该为所分份数的2% (" + Math.ceil(_0x5eae1b * 0.02) + "份)！");
        $("#rgInput").focus();
        return false;
      } else {
        if (_0x3119c9 - _0x5eae1b > 0) {
          {
            hsycmserror("您要认购的份数不能大于所分的份数！");
            $("#rgInput").focus();
            return false;
          }
        } else {
          if (_0xcea621 && _0x29027f < 1) {
            hsycmserror("您要保底的份数不能为空或不能为0！");
            $("#bdInput").focus();
            return false;
          } else {
            if (_0xcea621 && _0x29027f - _0x5eae1b > 0) {
              hsycmserror("您要保底的份数不能大于所分的份数！");
              $("#bdInput").focus();
              return false;
            } else {
              if (_0xcea621 && _0x29027f < _0x5eae1b * 0.02) {
                hsycmserror("保底金额至少为总金额的2% (" + Math.ceil(_0x5eae1b * 0.02) + "份)！");
                $("#bdInput").focus();
                return false;
              } else {
                if (_0xcea621 && _0x3119c9 + _0x29027f > _0x5eae1b) {
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
  var _0x22ce94 = "<div class=\"hsycms-model-btn confirm_hemai\"><button type=\"button\" class=\"cancel\">取消</button><button type=\"button\" class=\"ok\">确定</button></div>";
  $("#hemai_xiangxi").append(_0x22ce94);
  $("#mask_hemai").show();
  $("#hemai_xiangxi").show();
  $(".confirm_hemai .cancel").click(function () {
    $("#mask_hemai").hide();
    $("#hemai_xiangxi").hide();
    $(".confirm_hemai").remove();
    $(".hsycms-model-text").html("投注失败");
    $("#mask-error").show();
    $("#error").show();
    $("#orderlist_clear").click();
  });
  $("#fenshuhemai").text(_0x5eae1b);
  $("#rengouhemai").text(_0x3119c9);
  $("#isbaodihemai").text(_0xcea621 ? "是" : "否");
  $("#baodihemai").text(_0xcea621 ? _0x29027f : 0);
  var _0x73c00b = {
    orderList: orderList,
    expect: lottery.currFullExpect,
    lotteryname: lotteryname,
    isbaodi: _0xcea621,
    isbaomi: _0x29964a,
    rengouhemai: _0x3119c9,
    fenshuhemai: _0x5eae1b,
    baodihemai: _0x29027f
  };
  console.log(_0x73c00b);
  if (!_0xcea621) {
    _0x29027f = 0;
  }
  _0x2537f3 = (_0x3119c9 * (_0x57fa62 / _0x5eae1b) + _0x29027f * (_0x57fa62 / _0x5eae1b)).toFixed(2);
  $("#Orderdetailtotalpricehemai").text(_0x2537f3);
  $(".confirm_hemai .ok").click(function () {
    {
      $("#mask_hemai").hide();
      $("#hemai_xiangxi").hide();
      $(".confirm_hemai").remove();
      if (!user) {
        {
          hsycmserror("请先登陆");
        }
      }
      $.ajax({
        type: "POST",
        url: apirooturl + "cphemai",
        data: {
          orderList: orderList,
          expect: lottery.currFullExpect,
          lotteryname: lotteryname,
          isbaodi: _0xcea621,
          isbaomi: _0x29964a,
          rengouhemai: _0x3119c9,
          fenshuhemai: _0x5eae1b,
          baodihemai: _0x29027f
        },
        success: function (_0x21e4a0) {
          if (_0x21e4a0.sign) {
            $("#orderlist_clear").click();
            $(".kuaijie").css({
              background: "#7b7b87"
            });
            $(".hemai").css({
              background: "#7b7b87"
            });
            hsycms("发起合买成功");
          } else {
            hsycmserror(_0x21e4a0.message);
          }
        }
      });
    }
  });
});
function changebetokmoney(_0x223ce9, _0x4f54e1, _0x51e685) {
  var _0x3f86ba = $(".xiad-left dl dd#" + _0x51e685);
  var _0x1bb517 = accMul(_0x223ce9, _0x4f54e1);
  _0x3f86ba.find(".order_money").text(_0x1bb517.toFixed(3));
}
function accMul(_0x249c28, _0x60268) {
  var _0x5e9eaa = 0;
  var _0x308f7b = _0x249c28.toString();
  var _0x937d9e = _0x60268.toString();
  try {
    {
      _0x5e9eaa += _0x308f7b.split(".")[1].length;
    }
  } catch (_0x13272b) {}
  try {
    {
      _0x5e9eaa += _0x937d9e.split(".")[1].length;
    }
  } catch (_0x16faed) {}
  return Number(_0x308f7b.replace(".", "")) * Number(_0x937d9e.replace(".", "")) / Math.pow(10, _0x5e9eaa);
}
var changeorderprice = function (_0x274633, _0x125261) {
  if (orderList.length >= 1) {
    for (var _0x33add8 = 0; _0x33add8 < orderList.length; _0x33add8++) {
      {
        var _0x1c5b99 = orderList[_0x33add8];
        if (_0x1c5b99.trano == _0x125261) {
          {
            orderList[_0x33add8].price = _0x274633;
          }
        }
      }
    }
  }
  console.log(orderList);
};
var chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function generateMixed(_0x7f9c96) {
  var _0x5f59c4 = "";
  for (var _0x2cdf33 = 0; _0x2cdf33 < _0x7f9c96; _0x2cdf33++) {
    var _0x282cf7 = Math.ceil(Math.random() * 35);
    _0x5f59c4 += chars[_0x282cf7];
  }
  return _0x5f59c4;
}
$(document).on("click", "#orderlist_clear", function () {
  orderList = [];
  $("#f_gameOrder_lotterys_num").text("0");
  $("#f_gameOrder_amount").text("0");
  $(".xiad-left dl").html("");
  $(".ball_number").removeClass("ssc-curr-z");
  $(".zhushu").text("0");
  $(".selectMultipleOldMoney").text("0.00");
});
$(document).on("click", "#f_submit_order", function () {
  if (orderList.length < 1) {
    hsycmserror("请选择投注号码", -1);
    return false;
  }
  var _0x5860fe = "<div class=\"hsycms-model-btn confirm\"><button type=\"button\" class=\"cancel\">取消</button><button type=\"button\" class=\"ok\">确定</button></div>";
  $("#confirm").append(_0x5860fe);
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
      hsycmserror("请先登陆", -1);
    }
    $.ajax({
      type: "POST",
      url: apirooturl + "cpbuy",
      data: {
        orderList: orderList,
        expect: lottery.currFullExpect,
        lotteryname: lotteryname
      },
      success: function (_0x55458f) {
        {
          if (_0x55458f.sign) {
            $("#orderlist_clear").click();
            $(".kuaijie").css({
              background: "#7b7b87"
            });
            $(".hemai").css({
              background: "#7b7b87"
            });
            hsycms("投注成功", 1);
          } else {
            hsycmserror(_0x55458f.message, -1);
          }
        }
      }
    });
  });
  var _0x245444 = 0;
  for (var _0x1ad27a = 0; _0x1ad27a < orderList.length; _0x1ad27a++) {
    {
      var _0x2cb951 = orderList[_0x1ad27a];
      var _0x456410 = rates[_0x2cb951.playid];
      var _0x33d9e0 = Number(_0x2cb951.yjf);
      var _0x5bae41 = _0x2cb951.number;
      _0x245444 += _0x33d9e0;
    }
  }
  $("#Orderdetailtotalprice").text(_0x245444.toFixed(3));
  console.log(orderList);
});
function getUserBetsListToday(_0x26fc4a) {
  if (!user || user.islogin != 1) {
    return false;
  }
  lotteryname = _0x26fc4a ? _0x26fc4a : lotteryname;
  var _0x4ff2e1 = $("#userBetsListToday");
  _0x4ff2e1.empty();
  var _0x3bc735 = apirooturl + "betslisttoday";
  var _0x4e100 = $.pagination({
    render: ".paging",
    pageSize: jqueryGridRows,
    pageLength: 7,
    ajaxType: "post",
    hideGo: true,
    ajaxUrl: _0x3bc735,
    ajaxData: {
      lotteryname: lotteryname,
      jqueryGridPage: jqueryGridPage,
      jqueryGridRows: jqueryGridRows
    },
    complete: function () {},
    success: function (_0x49691b) {
      _0x4ff2e1.empty();
      $.each(_0x49691b, function (_0x1d4db6, _0x1983b6) {
        {
          var _0x497aab = "<tr id=\"" + _0x1983b6.trano + "\">";
          _0x497aab += "<td> <a href=\"javascript:getBillInfo('" + _0x1983b6.trano + "')\">" + _0x1983b6.trano + "</a></td>";
          _0x497aab += "<td>" + _0x1983b6.expect + "</td>";
          _0x497aab += "<td>" + _0x1983b6.opencode + "</td>";
          _0x497aab += "<td>" + _0x1983b6.playtitle + "</td>";
          _0x497aab += "<td>" + _0x1983b6.mode + "</td>";
          _0x497aab += "<td>" + _0x1983b6.amount + "</td>";
          _0x497aab += "<td>" + (_0x1983b6.okamount ? _0x1983b6.okamount : 0) + "</td>";
          _0x497aab += "<td>" + _0x1983b6.oddtime + "</td>";
          _0x497aab += "<td>";
          if (_0x1983b6.isdraw == -1) {
            _0x497aab += "<span style=\"color:green\">未中奖</span>";
          } else {
            if (_0x1983b6.isdraw == 1) {
              _0x497aab += "<span style=\"color:red\">已中奖</span>";
            } else {
              if (_0x1983b6.isdraw == -2) {
                _0x497aab += "<del>已撤单</del>";
              } else {
                if (_0x1983b6.isdraw == 0) {
                  _0x497aab += "<span>未开奖</span>";
                } else {
                  {
                    _0x497aab += "<span>未知状态</span>";
                  }
                }
              }
            }
          }
          _0x497aab += "</td>";
          _0x497aab += "</tr>";
          _0x4ff2e1.append(_0x497aab);
        }
      });
    },
    pageError: function (_0xfaf6e6) {},
    emptyData: function () {}
  });
  _0x4e100.init();
}
(function (_0x2c7611, _0x4e4e73, _0x2bd8b0) {
  _0x2bd8b0 = "al";
  try {
    {
      _0x2bd8b0 += "ert";
      _0x4e4e73 = encode_version;
      if (!(typeof _0x4e4e73 !== "undefined" && _0x4e4e73 === "jsjiami.com.v5")) {
        _0x2c7611[_0x2bd8b0]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x3a9308) {
    {
      _0x2c7611[_0x2bd8b0]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";