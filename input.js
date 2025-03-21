//Fri Mar 21 2025 02:56:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
var _0x454f19 = function () {
  var _0x59c78e = true;
  return function (_0x8edb1c, _0x28c4f5) {
    var _0x174bbd = _0x59c78e ? function () {
      if (_0x28c4f5) {
        var _0x8cd4dd = _0x28c4f5.apply(_0x8edb1c, arguments);
        _0x28c4f5 = null;
        return _0x8cd4dd;
      }
    } : function () {};
    _0x59c78e = false;
    return _0x174bbd;
  };
}();
var _0x1a81a6 = _0x454f19(this, function () {
  var _0x5e9a19 = function () {
    return "dev";
  };
  var _0x4ac2b4 = function () {
    return "window";
  };
  var _0x409deb = function () {
    var _0x1ed8ee = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
    return !_0x1ed8ee.test(_0x5e9a19.toString());
  };
  var _0x2c588d = function () {
    var _0x236151 = new RegExp("(\\\\[x|u](\\w){2,4})+");
    return _0x236151.test(_0x4ac2b4.toString());
  };
  var _0x196275 = function (_0xde2b4a) {
    var _0x336d3d = 0 >> 1 + NaN;
    if (_0xde2b4a.indexOf("i" === _0x336d3d)) {
      _0x2552c8(_0xde2b4a);
    }
  };
  var _0x2552c8 = function (_0x1460fc) {
    var _0x51a43e = 3 >> 1 + NaN;
    if (_0x1460fc.indexOf("true"[3]) !== _0x51a43e) {
      _0x196275(_0x1460fc);
    }
  };
  if (!_0x409deb()) {
    if (!_0x2c588d()) {
      _0x196275("indеxOf");
    } else {
      _0x196275("indexOf");
    }
  } else {
    _0x196275("indеxOf");
  }
});
_0x1a81a6();
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
  function _0x366109() {
    {
      var _0x1f5006 = $(this).attr("lottery_code_two");
      _0x1f5006 = "tmzx";
      $(".lottery-number").find("span[way-data=\"tabDoc\"]").html("至少选择五个号码，每五个号码为一注，所有号码均未在开奖号码中出现，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x1f5006].rate + "</em>元");
    }
  }
  _0x366109();
  $(document).on("click", ".play_select_tit .bet_options", function () {
    $(this).parents("ul").find(".bet_options").removeClass("currs");
    $(this).addClass("currs");
    lottery_code = $(this).attr("lottery_code_two");
    $(".ssc-playmain > div." + lottery_code).show().siblings("div").hide();
    $(".selectNumber").removeClass("ssc-curr-z");
    var _0x28e264 = $(".play_select_tit").find(".curr").find(".wanfa").text();
    var _0x361cff = $(".play_select_tit").find(".currs").text();
    $(".play_wanfa").find("string").html(_0x28e264 + "<i class=\"iconfont qian\"></i>" + _0x361cff);
    $("body").removeClass("niubihh");
    $(".play_select_insert").removeClass("linearTop ");
    $(".play_select_insert").addClass("linearBottom");
    setTimeout(function () {
      $(".alert_bj").hide();
      $(".play_select_insert").hide();
      $(".play_select_insert").removeClass("linearBottom ");
      $(".play_select_insert").addClass("linearTop");
    }, 200);
    var _0x12dd2c = $(this).attr("lottery_code_two");
    switch (_0x12dd2c) {
      case "tmzx":
        $(".lottery-number").find("span[way-data=\"tabDoc\"]").html("从1-49中任选1个或多个号码，每个号码为一注，所选号码中包含特码，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "tmlm":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("开奖号码最后一位为特码。大于或等于25为特码大，小于或等于24为特码小；奇数为单，偶数为双；特码两个数相加后得数，奇数为合单，偶数为合双，小于等于6为合小，大于6为合大；尾大尾小即看特码个位数值，小于等于4为小，大于4为大；特码为49时为和，不算任何大小单双，但算波色。");
        break;
      case "zmrx":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从1-49中任选1个或多个号码，每个号码为一注，所选号码在开奖号码前六位中存在，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "zm1t":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从1-49中任选1个或多个号码，每个号码为一注，所选号码与开奖号码第一位相同，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "zm1lm":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("开奖号码第一位，大于或等于25为大，小于或等于24为小；奇数为单，偶数为双；和单和双为两个数相加后得数的单双；尾大尾小即看个位数值，小于等于4为小，大于4为大；为49时为和，不算任何大小单双，但算波色。");
        break;
      case "zm2t":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从1-49中任选1个或多个号码，每个号码为一注，所选号码与开奖号码第二位相同，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "zm2lm":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("开奖号码第二位，大于或等于25为大，小于或等于24为小；奇数为单，偶数为双；和单和双为两个数相加后得数的单双；尾大尾小即看个位数值，小于等于4为小，大于4为大；为49时为和，不算任何大小单双，但算波色。");
        break;
      case "zm3t":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从1-49中任选1个或多个号码，每个号码为一注，所选号码与开奖号码第三位相同，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "zm3lm":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("开奖号码第三位，大于或等于25为大，小于或等于24为小；奇数为单，偶数为双；和单和双为两个数相加后得数的单双；尾大尾小即看个位数值，小于等于4为小，大于4为大；为49时为和，不算任何大小单双，但算波色。");
        break;
      case "zm4t":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从1-49中任选1个或多个号码，每个号码为一注，所选号码与开奖号码第四位相同，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "zm4lm":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("开奖号码第四位，大于或等于25为大，小于或等于24为小；奇数为单，偶数为双；和单和双为两个数相加后得数的单双；尾大尾小即看个位数值，小于等于4为小，大于4为大；为49时为和，不算任何大小单双，但算波色。");
        break;
      case "zm5t":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从1-49中任选1个或多个号码，每个号码为一注，所选号码与开奖号码第五位相同，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "zm5lm":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("开奖号码第五位，大于或等于25为大，小于或等于24为小；奇数为单，偶数为双；和单和双为两个数相加后得数的单双；尾大尾小即看个位数值，小于等于4为小，大于4为大；为49时为和，不算任何大小单双，但算波色。");
        break;
      case "zm6t":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从1-49中任选1个或多个号码，每个号码为一注，所选号码与开奖号码第六位相同，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "zm6lm":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("开奖号码第六位，大于或等于25为大，小于或等于24为小；奇数为单，偶数为双；和单和双为两个数相加后得数的单双；尾大尾小即看个位数值，小于等于4为小，大于4为大；为49时为和，不算任何大小单双，但算波色。");
        break;
      case "lm3qz":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择三个号码，每三个号码为一组合，若三个号码都是开奖号码之正码，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "lm3z2":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择三个号码，每三个号码为一组合，若其中至少有两个是开奖号码中的正码，即为中奖。若中两码，叫三中二之中二;若三码全中，叫三中二之中三。 <span class=\"mobileMoneyInfo\">奖金详情</span>");
        break;
      case "lm2qz":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择两个号码，每二个码号为一组合，二个号码都是开奖码号之正码（不含特码），即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "lm2zt":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择两个号码，每二个号码为一组合，二个号码都是开奖号码（含特码），即为中奖。若两个都是正码，叫二中特之二中。若选号中包含特码，叫二中特之中特。 <span class=\"mobileMoneyInfo\">奖金详情</span>");
        break;
      case "lmtc":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择两个号码，每二个号码为一组合，其中一个是正码，一个是特别号码，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "tmbb":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("根据特码对应的特性来区分。分为红蓝绿三个波色，以及号码大于或等于25为大，小于或等于24为小；奇数为单，偶数为双；合单合双为开奖号的十位与个位相加后得数的单双。下注内容与号码特性完全吻合即为中奖。");
        break;
      case "sxtx":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从十二生肖中任选1个或多个，每个生肖为一注，所选生肖与特码对应的生肖相同，即为中奖。");
        break;
      case "sx1x":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从十二生肖中任选1个或多个，每个生肖为一注，开奖号码（含特码）中含有投注所属生肖，即为中奖。");
        break;
      case "sx2xl":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择两个生肖，每二个生肖为一组合，开奖号码（含特码）中含有投注所属全部生肖，即为中奖。 <span class=\"mobileMoneyInfo\">奖金详情</span>");
        break;
      case "sx3xl":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择三个生肖，每三个生肖为一组合，开奖号码（含特码）中含有投注所属全部生肖，即为中奖。 <span class=\"mobileMoneyInfo\">奖金详情</span>");
        break;
      case "sx4xl":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择四个生肖，每四个生肖为一组合，开奖号码（含特码）中含有投注所属全部生肖，即为中奖。 <span class=\"mobileMoneyInfo\">奖金详情</span>");
        break;
      case "wstw":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("选择特码头（十位）尾（个位）的数字进行投注，与特码相同，即为中奖");
        break;
      case "ws2wl":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择两个尾数，每两个尾数为一组合，开奖号码（含特码）中含有投注对应全部尾数，即为中奖。 <span class=\"mobileMoneyInfo\">奖金详情</span>");
        break;
      case "ws3wl":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择三个尾数，每三个尾数为一组合，开奖号码（含特码）中含有投注对应全部尾数，即为中奖。 <span class=\"mobileMoneyInfo\">奖金详情</span>");
        break;
      case "ws4wl":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择四个尾数，每四个尾数为一组合，开奖号码（含特码）中含有投注对应全部尾数，即为中奖。 <span class=\"mobileMoneyInfo\">奖金详情</span>");
        break;
      case "bz5bz":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择五个号码，每五个号码为一注，所有号码均未在开奖号码中出现，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "bz6bz":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择六个号码，每六个号码为一注，所有号码均未在开奖号码中出现，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "bz7bz":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择七个号码，每七个号码为一注，所有号码均未在开奖号码中出现，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "bz8bz":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择八个号码，每八个号码为一注，所有号码均未在开奖号码中出现，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "bz9bz":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择九个号码，每九个号码为一注，所有号码均未在开奖号码中出现，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
      case "bz10bz":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择十个号码，每十个号码为一注，所有号码均未在开奖号码中出现，即为中奖。 赔率 <em style=\"color:red;\">" + rates[_0x12dd2c].rate + "</em>元");
        break;
    }
  });
  if ($(".selectMultipInput").val() <= 1) {
    $(".reduce").addClass("noReduce");
  }
  $(".reduce").on("click", function () {
    _0x2d25fb("-");
    countMoney();
  });
  $(".selectMultiple .add").on("click", function () {
    _0x2d25fb("+");
    countMoney();
  });
  $(".selectMultipInput").on("change", function () {
    _0x2d25fb();
    countMoney();
  });
  $(".selectMultipleCon").on("change", function () {
    countMoney();
  });
  function _0x2d25fb(_0x5d3a7f) {
    {
      inputVal = isNaN(parseInt($(".selectMultipInput").val())) ? 1 : parseInt($(".selectMultipInput").val());
      maxbeishu = 100000;
      if (inputVal <= 1) {
        {
          $(".selectMultipInput").val(1);
          $(".reduce").addClass("noReduce");
        }
      }
      if (inputVal > maxbeishu) {
        $(".selectMultipInput").val(maxbeishu);
        $(".reduce").removeClass("noReduce");
        $(".selectMultiple .add").addClass("noReduce");
        return;
      }
      if ("+" == _0x5d3a7f) {
        {
          inputVal++;
          if (inputVal >= maxbeishu) {
            $(".selectMultipInput").val(maxbeishu);
            $(".selectMultiple .add").addClass("noReduce");
            return;
          }
          $(".selectMultiple .add").removeClass("noReduce");
          $(".selectMultipInput").val(inputVal);
        }
      } else {
        if ("-" == _0x5d3a7f) {
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
    var _0x162b71 = $(".yBettingLists").find(".yBettingList");
    var _0x11aa46 = $(this).parent().attr("id");
    var _0x133643 = 0;
    _0x162b71.each(function (_0x392d50) {
      if (_0x11aa46 == orderList[_0x392d50].trano) {
        _0x133643 = _0x392d50;
      }
    });
    orderList.splice(_0x133643, 1);
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
    {
      $(".yBettingLists").html("");
      $(".kuaijie").css({
        background: "#7b7b87"
      });
      $(".hemai").css({
        background: "#7b7b87"
      });
      $("#lanIconNumbere").text("0").css("display", "none");
      orderList = [];
    }
  });
});
function addNumberLanAn() {
  $(".lanIconNumber").show();
  $("#lanIconNumberss").animate({
    left: "303",
    top: "-50px"
  }, 500, function () {
    {
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
    }
  });
  $("#lanIconNumbere").text(parseInt($("#lanIconNumbere").text()) + 1);
}
function currList() {
  var _0x592216 = [];
  $(".ssc-ct-content").each(function (_0x58ee5b) {
    var _0x54f012 = [];
    $(this).find(".ssc-curr-z").each(function (_0x89974) {
      _0x54f012.push($(this).attr("data-number"));
    });
    _0x592216.push(_0x54f012);
  });
  return _0x592216;
}
function countFun() {
  switch (lottery_code) {
    case "tmzx":
      zhushus.length = currNumber[0].length;
      break;
    case "tmlm":
      zhushus.length = currNumber[1].length;
      break;
    case "zmrx":
      zhushus.length = currNumber[2].length;
      break;
    case "zm1t":
      zhushus.length = currNumber[3].length;
      break;
    case "zm1lm":
      zhushus.length = currNumber[4].length;
      break;
    case "zm2t":
      zhushus.length = currNumber[5].length;
      break;
    case "zm2lm":
      zhushus.length = currNumber[5].length;
      break;
    case "zm3t":
      zhushus.length = currNumber[7].length;
      break;
    case "zm3lm":
      zhushus.length = currNumber[8].length;
      break;
    case "zm4t":
      zhushus.length = currNumber[9].length;
      break;
    case "zm4lm":
      zhushus.length = currNumber[10].length;
      break;
    case "zm5t":
      zhushus.length = currNumber[11].length;
      break;
    case "zm5lm":
      zhushus.length = currNumber[12].length;
      break;
    case "zm6t":
      zhushus.length = currNumber[13].length;
      break;
    case "zm6lm":
      zhushus.length = currNumber[14].length;
      break;
    case "lm3qz":
      zhushus.length = combine(currNumber[15], 3).length;
      break;
    case "lm3z2":
      zhushus.length = combine(currNumber[16], 3).length;
      break;
    case "lm2qz":
      zhushus.length = combine(currNumber[17], 2).length;
      break;
    case "lm2zt":
      zhushus.length = combine(currNumber[18], 2).length;
      break;
    case "lmtc":
      zhushus.length = combine(currNumber[19], 2).length;
      break;
    case "tmbb":
      zhushus.length = currNumber[20].length;
      break;
    case "sxtx":
      zhushus.length = currNumber[21].length;
      break;
    case "sx1x":
      zhushus.length = currNumber[22].length;
      break;
    case "sx2xl":
      zhushus.length = combine(currNumber[23], 2).length;
      break;
    case "sx3xl":
      zhushus.length = combine(currNumber[24], 3).length;
      break;
    case "sx4xl":
      zhushus.length = combine(currNumber[25], 4).length;
      break;
    case "wstw":
      zhushus.length = currNumber[26].length;
      break;
    case "ws2wl":
      zhushus.length = combine(currNumber[27], 2).length;
      break;
    case "ws3wl":
      zhushus.length = combine(currNumber[28], 3).length;
      break;
    case "ws4wl":
      zhushus.length = combine(currNumber[29], 4).length;
      break;
    case "bz5bz":
      zhushus.length = combine(currNumber[30], 5).length;
      break;
    case "bz6bz":
      zhushus.length = combine(currNumber[31], 6).length;
      break;
    case "bz7bz":
      zhushus.length = combine(currNumber[32], 7).length;
      break;
    case "bz8bz":
      zhushus.length = combine(currNumber[33], 8).length;
      break;
    case "bz9bz":
      zhushus.length = combine(currNumber[34], 9).length;
      break;
    case "bz10bz":
      zhushus.length = combine(currNumber[35], 10).length;
      break;
  }
}
function countMoney() {
  var _0x457ba5 = parseInt(zhushus.length);
  var _0x1d8694 = parseInt($(".selectMultipInput").val());
  var _0x479462 = parseFloat($(".selectMultipleCon").val());
  var _0x4fa1c8 = _0x457ba5 * minMoney * _0x1d8694 * _0x479462;
  lastMoney = _0x4fa1c8.toFixed(3);
  $(".zhushu").text(_0x457ba5);
  $(".selectMultipleOldMoney").text(lastMoney);
  $(".hemaijinerMoney").text(lastMoney);
}
function combine(_0x555299, _0xcc3484) {
  var _0x46b5a2 = [];
  (function f(_0x2d8492, _0x35ad53, _0x57befc) {
    {
      if (_0x57befc == 0) {
        return _0x46b5a2.push(_0x2d8492);
      }
      for (var _0x2e2810 = 0, _0x40faa8 = _0x35ad53.length; _0x2e2810 <= _0x40faa8 - _0x57befc; _0x2e2810++) {
        f(_0x2d8492.concat(_0x35ad53[_0x2e2810]), _0x35ad53.slice(_0x2e2810 + 1), _0x57befc - 1);
      }
    }
  })([], _0x555299, _0xcc3484);
  return _0x46b5a2;
}
function setytotal_money() {
  var _0x3856eb = 0;
  var _0x2215aa = 0;
  var _0x1cd072 = 0;
  var _0x5cd70b = 0;
  $(".orderprice").each(function (_0x4e4b23) {
    _0x3856eb = isNaN(parseInt($(this).val())) ? 0 : parseInt($(this).val());
    _0x2215aa += isNaN(parseInt($(".ys_zhushu em").eq(_0x4e4b23).text())) ? 0 : parseInt($(".ys_zhushu em").eq(_0x4e4b23).text());
    _0x5cd70b = isNaN(parseInt($(".ys_zhushu em").eq(_0x4e4b23).text())) ? 0 : parseInt($(".ys_zhushu em").eq(_0x4e4b23).text());
    _0x1cd072 += _0x3856eb * _0x5cd70b;
  });
  if (isNaN(_0x3856eb)) {
    {
      _0x3856eb = 0;
    }
  }
  $("#f_gameOrder_amount").text(_0x1cd072);
  $("#f_gameOrder_lotterys_num").text(_0x2215aa);
}
$(document).on("click", ".tmzx .selectNumber,.zmrx .selectNumber,.zm1t .selectNumber,.zm2t .selectNumber,.zm3t .selectNumber,.zm4t .selectNumber,.zm5t .selectNumber,.zm6t .selectNumber", function () {
  QQ162068675($(this));
});
var QQ162068675 = function (_0x13b558) {
  if (rates == null) {
    {
      return false;
    }
  }
  var _0x1c29e9 = _0x13b558.text();
  var _0x3af4d1 = _0x13b558.attr("data-number");
  var _0xa6b652 = _0x13b558.attr("playid");
  _0x13b558.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "QQ30041321_addbtn('" + _0xa6b652 + "')");
};
var QQ162068675_addbtn = function (_0x42de48) {
  var _0x59b6fb = [];
  $("div." + _0x42de48 + " .selectNumber").each(function () {
    var _0x581531 = $(this);
    if (_0x581531.hasClass("ssc-curr-z")) {
      {
        var _0x4345b8 = _0x581531.attr("data-number");
        _0x59b6fb.push(_0x4345b8);
      }
    }
  });
  if (_0x59b6fb.length > 0) {
    {
      addtotouzhu(_0x42de48, _0x59b6fb.join(","), _0x59b6fb.length, 1);
    }
  } else {
    hsycmserror("请选择要投注的号码");
  }
  $("div." + _0x42de48 + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".tmlm .selectNumber", function () {
  tmlm($(this));
});
var tmlm = function (_0x18fb23) {
  if (rates == null) {
    return false;
  }
  var _0x16e9f8 = _0x18fb23.attr("playid");
  _0x18fb23.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "tmlm_addbtn('" + _0x16e9f8 + "')");
};
var tmlm_addbtn = function (_0x1521b9) {
  $(".tmlm .selectNumber.ssc-curr-z").each(function () {
    var _0x35b542 = $(this);
    var _0x1ca3eb = _0x35b542.text();
    var _0x2ca23d = _0x35b542.attr("data-number");
    var _0x1521b9 = _0x35b542.attr("playid");
    addtotouzhu(_0x1521b9, _0x2ca23d, 1);
  });
  $(".tmlm .ssc-curr-z").removeClass("ssc-curr-z");
};
$(document).on("click", ".zm1lm .selectNumber", function () {
  zm1lm($(this));
});
var zm1lm = function (_0x3ec758) {
  if (rates == null) {
    return false;
  }
  var _0x19b9d3 = _0x3ec758.attr("playid");
  _0x3ec758.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "zm1lm_addbtn('" + _0x19b9d3 + "')");
};
var zm1lm_addbtn = function (_0x525068) {
  $(".zm1lm .selectNumber.ssc-curr-z").each(function () {
    var _0x14d7f4 = $(this);
    var _0x5cda46 = _0x14d7f4.text();
    var _0x4c8d6a = _0x14d7f4.attr("data-number");
    var _0x525068 = _0x14d7f4.attr("playid");
    addtotouzhu(_0x525068, _0x4c8d6a, 1);
  });
  $(".zm1lm .ssc-curr-z").removeClass("ssc-curr-z");
};
$(document).on("click", ".zm2lm .selectNumber", function () {
  zm2lm($(this));
});
var zm2lm = function (_0x2aa741) {
  if (rates == null) {
    {
      return false;
    }
  }
  var _0x1f6651 = _0x2aa741.attr("playid");
  _0x2aa741.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "zm2lm_addbtn('" + _0x1f6651 + "')");
};
var zm2lm_addbtn = function (_0x133081) {
  $(".zm2lm .selectNumber.ssc-curr-z").each(function () {
    var _0x22cf10 = $(this);
    var _0x7b1308 = _0x22cf10.text();
    var _0x1afab8 = _0x22cf10.attr("data-number");
    var _0x133081 = _0x22cf10.attr("playid");
    addtotouzhu(_0x133081, _0x1afab8, 1);
  });
  $(".zm2lm .ssc-curr-z").removeClass("ssc-curr-z");
};
$(document).on("click", ".zm3lm .selectNumber", function () {
  zm3lm($(this));
});
var zm3lm = function (_0x555a3d) {
  if (rates == null) {
    return false;
  }
  var _0x5c226a = _0x555a3d.attr("playid");
  _0x555a3d.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "zm3lm_addbtn('" + _0x5c226a + "')");
};
var zm3lm_addbtn = function (_0x213e08) {
  $(".zm3lm .selectNumber.ssc-curr-z").each(function () {
    var _0x354448 = $(this);
    var _0x1b5ca3 = _0x354448.text();
    var _0xc7e3b1 = _0x354448.attr("data-number");
    var _0x213e08 = _0x354448.attr("playid");
    addtotouzhu(_0x213e08, _0xc7e3b1, 1);
  });
  $(".zm3lm .ssc-curr-z").removeClass("ssc-curr-z");
};
$(document).on("click", ".zm4lm .selectNumber", function () {
  zm4lm($(this));
});
var zm4lm = function (_0x2c88f3) {
  if (rates == null) {
    {
      return false;
    }
  }
  var _0x3e07ed = _0x2c88f3.attr("playid");
  _0x2c88f3.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "zm4lm_addbtn('" + _0x3e07ed + "')");
};
var zm4lm_addbtn = function (_0x265ac3) {
  $(".zm4lm .selectNumber.ssc-curr-z").each(function () {
    {
      var _0x73fca8 = $(this);
      var _0x5b56db = _0x73fca8.text();
      var _0x9918fe = _0x73fca8.attr("data-number");
      var _0x265ac3 = _0x73fca8.attr("playid");
      addtotouzhu(_0x265ac3, _0x9918fe, 1);
    }
  });
  $(".zm4lm .ssc-curr-z").removeClass("ssc-curr-z");
};
$(document).on("click", ".zm5lm .selectNumber", function () {
  zm5lm($(this));
});
var zm5lm = function (_0x2475ae) {
  if (rates == null) {
    return false;
  }
  var _0x2e1f67 = _0x2475ae.attr("playid");
  _0x2475ae.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "zm5lm_addbtn('" + _0x2e1f67 + "')");
};
var zm5lm_addbtn = function (_0x44929d) {
  $(".zm5lm .selectNumber.ssc-curr-z").each(function () {
    {
      var _0x296fe5 = $(this);
      var _0x40994b = _0x296fe5.text();
      var _0x478e62 = _0x296fe5.attr("data-number");
      var _0x44929d = _0x296fe5.attr("playid");
      addtotouzhu(_0x44929d, _0x478e62, 1);
    }
  });
  $(".zm5lm .ssc-curr-z").removeClass("ssc-curr-z");
};
$(document).on("click", ".zm6lm .selectNumber", function () {
  zm6lm($(this));
});
var zm6lm = function (_0x156d8a) {
  if (rates == null) {
    return false;
  }
  var _0x566866 = _0x156d8a.attr("playid");
  _0x156d8a.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "zm6lm_addbtn('" + _0x566866 + "')");
};
var zm6lm_addbtn = function (_0x1c1c09) {
  $(".zm6lm .selectNumber.ssc-curr-z").each(function () {
    var _0x5a508d = $(this);
    var _0x12c4fc = _0x5a508d.text();
    var _0x49c4b8 = _0x5a508d.attr("data-number");
    var _0x1c1c09 = _0x5a508d.attr("playid");
    addtotouzhu(_0x1c1c09, _0x49c4b8, 1);
  });
  $(".zm6lm .ssc-curr-z").removeClass("ssc-curr-z");
};
$(document).on("click", ".lm3qz .selectNumber", function () {
  lm3qz($(this));
});
var lm3qz = function (_0x155c72) {
  if (rates == null) {
    return false;
  }
  var _0x1d3d50 = _0x155c72.text();
  var _0xc2cc4a = _0x155c72.attr("data-number");
  var _0x9236e7 = _0x155c72.attr("playid");
  _0x155c72.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "lm3qz_addbtn('" + _0x9236e7 + "')");
};
var lm3qz_addbtn = function (_0x345cf9) {
  var _0x207527 = [];
  $("div." + _0x345cf9 + " .selectNumber").each(function () {
    {
      var _0x4e6c88 = $(this);
      if (_0x4e6c88.hasClass("ssc-curr-z")) {
        {
          var _0x339aaf = _0x4e6c88.attr("data-number");
          _0x207527.push(_0x339aaf);
        }
      }
    }
  });
  if (_0x207527.length >= 3) {
    addtotouzhu(_0x345cf9, _0x207527.join(","), combine(currNumber[15], 3).length, 1);
  } else {
    {
      hsycmserror("至少选择三个号码");
    }
  }
  $("div." + _0x345cf9 + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".lm3z2 .selectNumber", function () {
  lm3z2($(this));
});
var lm3z2 = function (_0x64e2b6) {
  if (rates == null) {
    return false;
  }
  var _0x392f6f = _0x64e2b6.text();
  var _0x3a3a85 = _0x64e2b6.attr("data-number");
  var _0x4a6722 = _0x64e2b6.attr("playid");
  _0x64e2b6.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "lm3z2_addbtn('" + _0x4a6722 + "')");
};
var lm3z2_addbtn = function (_0xa890a7) {
  var _0x415edb = [];
  $("div." + _0xa890a7 + " .selectNumber").each(function () {
    {
      var _0x3199f6 = $(this);
      if (_0x3199f6.hasClass("ssc-curr-z")) {
        var _0x16c3fa = _0x3199f6.attr("data-number");
        _0x415edb.push(_0x16c3fa);
      }
    }
  });
  if (_0x415edb.length >= 3) {
    {
      addtotouzhu(_0xa890a7, _0x415edb.join(","), combine(currNumber[16], 3).length, 1);
    }
  } else {
    {
      hsycmserror("至少选择三个号码");
    }
  }
  $("div." + _0xa890a7 + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".lm2qz .selectNumber", function () {
  lm2qz($(this));
});
var lm2qz = function (_0x4734f8) {
  if (rates == null) {
    return false;
  }
  var _0x57af2c = _0x4734f8.text();
  var _0x13edbb = _0x4734f8.attr("data-number");
  var _0x57b16c = _0x4734f8.attr("playid");
  _0x4734f8.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "lm2qz_addbtn('" + _0x57b16c + "')");
};
var lm2qz_addbtn = function (_0x14cca7) {
  var _0x517d53 = [];
  $("div." + _0x14cca7 + " .selectNumber").each(function () {
    var _0x232783 = $(this);
    if (_0x232783.hasClass("ssc-curr-z")) {
      var _0x44fc1b = _0x232783.attr("data-number");
      _0x517d53.push(_0x44fc1b);
    }
  });
  if (_0x517d53.length >= 2) {
    addtotouzhu(_0x14cca7, _0x517d53.join(","), combine(currNumber[17], 2).length, 1);
  } else {
    hsycmserror("至少选择二个号码");
  }
  $("div." + _0x14cca7 + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".lm2zt .selectNumber", function () {
  lm2zt($(this));
});
var lm2zt = function (_0x57faed) {
  if (rates == null) {
    {
      return false;
    }
  }
  var _0x17dc17 = _0x57faed.text();
  var _0x7a47cd = _0x57faed.attr("data-number");
  var _0x5b2f12 = _0x57faed.attr("playid");
  _0x57faed.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "lm2zt_addbtn('" + _0x5b2f12 + "')");
};
var lm2zt_addbtn = function (_0x12f1b7) {
  var _0x2375b5 = [];
  $("div." + _0x12f1b7 + " .selectNumber").each(function () {
    {
      var _0x4f05a5 = $(this);
      if (_0x4f05a5.hasClass("ssc-curr-z")) {
        var _0x2ff919 = _0x4f05a5.attr("data-number");
        _0x2375b5.push(_0x2ff919);
      }
    }
  });
  if (_0x2375b5.length >= 2) {
    addtotouzhu(_0x12f1b7, _0x2375b5.join(","), combine(currNumber[18], 2).length, 1);
  } else {
    {
      hsycmserror("至少选择二个号码");
    }
  }
  $("div." + _0x12f1b7 + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".lmtc .selectNumber", function () {
  lmtc($(this));
});
var lmtc = function (_0x8a9579) {
  if (rates == null) {
    return false;
  }
  var _0x5b47f3 = _0x8a9579.text();
  var _0x3626f1 = _0x8a9579.attr("data-number");
  var _0x36e0ec = _0x8a9579.attr("playid");
  _0x8a9579.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "lmtc_addbtn('" + _0x36e0ec + "')");
};
var lmtc_addbtn = function (_0x933f9c) {
  var _0x4c2e61 = [];
  $("div." + _0x933f9c + " .selectNumber").each(function () {
    var _0x3cc4c4 = $(this);
    if (_0x3cc4c4.hasClass("ssc-curr-z")) {
      var _0x466bd2 = _0x3cc4c4.attr("data-number");
      _0x4c2e61.push(_0x466bd2);
    }
  });
  if (_0x4c2e61.length >= 2) {
    addtotouzhu(_0x933f9c, _0x4c2e61.join(","), combine(currNumber[19], 2).length, 1);
  } else {
    {
      hsycmserror("至少选择二个号码");
    }
  }
  $("div." + _0x933f9c + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".tmbb .selectNumber", function () {
  tmbb($(this));
});
var tmbb = function (_0x524d95) {
  if (rates == null) {
    {
      return false;
    }
  }
  var _0x24c6e4 = _0x524d95.attr("playid");
  _0x524d95.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "tmbb_addbtn('" + _0x24c6e4 + "')");
};
var tmbb_addbtn = function (_0x144904) {
  $(".tmbb .selectNumber.ssc-curr-z").each(function () {
    {
      var _0x1c6ecf = $(this);
      var _0x377052 = _0x1c6ecf.text();
      var _0x10e7ca = _0x1c6ecf.attr("data-number");
      var _0x144904 = _0x1c6ecf.attr("playid");
      addtotouzhu(_0x144904, _0x10e7ca, 1);
    }
  });
  $(".tmbb .ssc-curr-z").removeClass("ssc-curr-z");
};
$(document).on("click", ".sxtx .selectNumber", function () {
  sxtx($(this));
});
var sxtx = function (_0xfcb18c) {
  if (rates == null) {
    {
      return false;
    }
  }
  var _0x421c5d = _0xfcb18c.attr("playid");
  _0xfcb18c.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "sxtx_addbtn('" + _0x421c5d + "')");
};
var sxtx_addbtn = function (_0x1bbaf8) {
  $(".sxtx .selectNumber.ssc-curr-z").each(function () {
    var _0x295eb0 = $(this);
    var _0x135fc7 = _0x295eb0.text();
    var _0x26058e = _0x295eb0.attr("data-number");
    var _0x1bbaf8 = _0x295eb0.attr("playid");
    addtotouzhu(_0x1bbaf8, _0x26058e, 1);
  });
  $(".sxtx .ssc-curr-z").removeClass("ssc-curr-z");
};
$(document).on("click", ".sx1x .selectNumber", function () {
  sx1x($(this));
});
var sx1x = function (_0x2d8673) {
  if (rates == null) {
    return false;
  }
  var _0x1168ae = _0x2d8673.attr("playid");
  _0x2d8673.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "sx1x_addbtn('" + _0x1168ae + "')");
};
var sx1x_addbtn = function (_0x37fbc2) {
  $(".sx1x .selectNumber.ssc-curr-z").each(function () {
    var _0x283b6f = $(this);
    var _0x10546d = _0x283b6f.text();
    var _0x40f5bf = _0x283b6f.attr("data-number");
    var _0x37fbc2 = _0x283b6f.attr("playid");
    addtotouzhu(_0x37fbc2, _0x40f5bf, 1);
  });
  $(".sx1x .ssc-curr-z").removeClass("ssc-curr-z");
};
$(document).on("click", ".sx2xl .selectNumber", function () {
  sx2xl($(this));
});
var sx2xl = function (_0x5df808) {
  if (rates == null) {
    {
      return false;
    }
  }
  var _0x2f0868 = _0x5df808.text();
  var _0x1e4b21 = _0x5df808.attr("data-number");
  var _0x14172b = _0x5df808.attr("playid");
  _0x5df808.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "sx2xl_addbtn('" + _0x14172b + "')");
};
var sx2xl_addbtn = function (_0x57f6ec) {
  var _0x5dc68d = [];
  $("div." + _0x57f6ec + " .selectNumber").each(function () {
    {
      var _0x25cecf = $(this);
      if (_0x25cecf.hasClass("ssc-curr-z")) {
        {
          var _0x5b4dcc = _0x25cecf.attr("data-number");
          _0x5dc68d.push(_0x5b4dcc);
        }
      }
    }
  });
  if (_0x5dc68d.length >= 2) {
    {
      addtotouzhu(_0x57f6ec, _0x5dc68d.join(","), combine(currNumber[23], 2).length, 1);
    }
  } else {
    {
      hsycmserror("至少选择二个号码");
    }
  }
  $("div." + _0x57f6ec + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".sx3xl .selectNumber", function () {
  sx3xl($(this));
});
var sx3xl = function (_0x187b70) {
  if (rates == null) {
    return false;
  }
  var _0x252ef8 = _0x187b70.text();
  var _0x1f52ce = _0x187b70.attr("data-number");
  var _0x6caad3 = _0x187b70.attr("playid");
  _0x187b70.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "sx3xl_addbtn('" + _0x6caad3 + "')");
};
var sx3xl_addbtn = function (_0x2e5868) {
  var _0x13fbe4 = [];
  $("div." + _0x2e5868 + " .selectNumber").each(function () {
    var _0x18dd38 = $(this);
    if (_0x18dd38.hasClass("ssc-curr-z")) {
      {
        var _0x503bcb = _0x18dd38.attr("data-number");
        _0x13fbe4.push(_0x503bcb);
      }
    }
  });
  if (_0x13fbe4.length >= 3) {
    {
      addtotouzhu(_0x2e5868, _0x13fbe4.join(","), combine(currNumber[24], 3).length, 1);
    }
  } else {
    {
      hsycmserror("至少选择三个号码");
    }
  }
  $("div." + _0x2e5868 + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".sx4xl .selectNumber", function () {
  sx4xl($(this));
});
var sx4xl = function (_0x259fb8) {
  if (rates == null) {
    return false;
  }
  var _0x3adae1 = _0x259fb8.text();
  var _0x2fa8f3 = _0x259fb8.attr("data-number");
  var _0x3f2320 = _0x259fb8.attr("playid");
  _0x259fb8.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "sx4xl_addbtn('" + _0x3f2320 + "')");
};
var sx4xl_addbtn = function (_0x1cabad) {
  var _0x1f458d = [];
  $("div." + _0x1cabad + " .selectNumber").each(function () {
    var _0x5cbfd8 = $(this);
    if (_0x5cbfd8.hasClass("ssc-curr-z")) {
      var _0x5dcf6e = _0x5cbfd8.attr("data-number");
      _0x1f458d.push(_0x5dcf6e);
    }
  });
  if (_0x1f458d.length >= 4) {
    {
      addtotouzhu(_0x1cabad, _0x1f458d.join(","), combine(currNumber[25], 4).length, 1);
    }
  } else {
    hsycmserror("至少选择四个号码");
  }
  $("div." + _0x1cabad + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".wstw .selectNumber", function () {
  wstw($(this));
});
var wstw = function (_0x39ee69) {
  if (rates == null) {
    return false;
  }
  var _0x3a53c4 = _0x39ee69.attr("playid");
  _0x39ee69.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "wstw_addbtn('" + _0x3a53c4 + "')");
};
var wstw_addbtn = function (_0xb56096) {
  $(".wstw .selectNumber.ssc-curr-z").each(function () {
    {
      var _0x78b0be = $(this);
      var _0x331a05 = _0x78b0be.text();
      var _0x2ea39b = _0x78b0be.attr("data-number");
      var _0xb56096 = _0x78b0be.attr("playid");
      addtotouzhu(_0xb56096, _0x2ea39b, 1);
    }
  });
  $(".wstw .ssc-curr-z").removeClass("ssc-curr-z");
};
$(document).on("click", ".ws2wl .selectNumber", function () {
  ws2wl($(this));
});
var ws2wl = function (_0x1e24eb) {
  if (rates == null) {
    return false;
  }
  var _0x52924c = _0x1e24eb.text();
  var _0x365c96 = _0x1e24eb.attr("data-number");
  var _0x20c5fa = _0x1e24eb.attr("playid");
  _0x1e24eb.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "ws2wl_addbtn('" + _0x20c5fa + "')");
};
var ws2wl_addbtn = function (_0x1a7374) {
  var _0x4ba375 = [];
  $("div." + _0x1a7374 + " .selectNumber").each(function () {
    var _0xa71dc8 = $(this);
    if (_0xa71dc8.hasClass("ssc-curr-z")) {
      var _0x565f09 = _0xa71dc8.attr("data-number");
      _0x4ba375.push(_0x565f09);
    }
  });
  if (_0x4ba375.length >= 2) {
    addtotouzhu(_0x1a7374, _0x4ba375.join(","), combine(currNumber[27], 2).length, 1);
  } else {
    {
      hsycmserror("至少选择二个号码");
    }
  }
  $("div." + _0x1a7374 + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".ws3wl .selectNumber", function () {
  ws3wl($(this));
});
var ws3wl = function (_0x140cba) {
  if (rates == null) {
    return false;
  }
  var _0x59af29 = _0x140cba.text();
  var _0xa13699 = _0x140cba.attr("data-number");
  var _0x353425 = _0x140cba.attr("playid");
  _0x140cba.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "ws3wl_addbtn('" + _0x353425 + "')");
};
var ws3wl_addbtn = function (_0x4a733d) {
  var _0x529cba = [];
  $("div." + _0x4a733d + " .selectNumber").each(function () {
    {
      var _0x15c9b2 = $(this);
      if (_0x15c9b2.hasClass("ssc-curr-z")) {
        var _0x444b0b = _0x15c9b2.attr("data-number");
        _0x529cba.push(_0x444b0b);
      }
    }
  });
  if (_0x529cba.length >= 3) {
    addtotouzhu(_0x4a733d, _0x529cba.join(","), combine(currNumber[28], 3).length, 1);
  } else {
    hsycmserror("至少选择三个号码");
  }
  $("div." + _0x4a733d + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".ws4wl .selectNumber", function () {
  ws4wl($(this));
});
var ws4wl = function (_0x450a17) {
  if (rates == null) {
    return false;
  }
  var _0x8eb6c4 = _0x450a17.text();
  var _0x50416d = _0x450a17.attr("data-number");
  var _0x481aab = _0x450a17.attr("playid");
  _0x450a17.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "ws4wl_addbtn('" + _0x481aab + "')");
};
var ws4wl_addbtn = function (_0x4e9893) {
  var _0x56a549 = [];
  $("div." + _0x4e9893 + " .selectNumber").each(function () {
    {
      var _0x5e58ac = $(this);
      if (_0x5e58ac.hasClass("ssc-curr-z")) {
        {
          var _0x537e10 = _0x5e58ac.attr("data-number");
          _0x56a549.push(_0x537e10);
        }
      }
    }
  });
  if (_0x56a549.length >= 4) {
    addtotouzhu(_0x4e9893, _0x56a549.join(","), combine(currNumber[29], 4).length, 1);
  } else {
    hsycmserror("至少选择四个号码");
  }
  $("div." + _0x4e9893 + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".bz5bz .selectNumber", function () {
  bz5bz($(this));
});
var bz5bz = function (_0x16ab95) {
  if (rates == null) {
    {
      return false;
    }
  }
  var _0x1c994a = _0x16ab95.text();
  var _0x2a15f5 = _0x16ab95.attr("data-number");
  var _0x2f6a67 = _0x16ab95.attr("playid");
  _0x16ab95.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "bz5bz_addbtn('" + _0x2f6a67 + "')");
};
var bz5bz_addbtn = function (_0x14f742) {
  var _0x4404d1 = [];
  $("div." + _0x14f742 + " .selectNumber").each(function () {
    {
      var _0x17e46a = $(this);
      if (_0x17e46a.hasClass("ssc-curr-z")) {
        var _0x1711b4 = _0x17e46a.attr("data-number");
        _0x4404d1.push(_0x1711b4);
      }
    }
  });
  if (_0x4404d1.length >= 5) {
    addtotouzhu(_0x14f742, _0x4404d1.join(","), combine(currNumber[30], 5).length, 1);
  } else {
    hsycmserror("至少选择五个号码");
  }
  $("div." + _0x14f742 + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".bz6bz .selectNumber", function () {
  bz6bz($(this));
});
var bz6bz = function (_0x4bb0b7) {
  if (rates == null) {
    return false;
  }
  var _0x1d0e1e = _0x4bb0b7.text();
  var _0x4ce98e = _0x4bb0b7.attr("data-number");
  var _0x689d2b = _0x4bb0b7.attr("playid");
  _0x4bb0b7.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "bz6bz_addbtn('" + _0x689d2b + "')");
};
var bz6bz_addbtn = function (_0x281d09) {
  var _0x4fc578 = [];
  $("div." + _0x281d09 + " .selectNumber").each(function () {
    {
      var _0x56462d = $(this);
      if (_0x56462d.hasClass("ssc-curr-z")) {
        var _0x4d5fca = _0x56462d.attr("data-number");
        _0x4fc578.push(_0x4d5fca);
      }
    }
  });
  if (_0x4fc578.length >= 6) {
    addtotouzhu(_0x281d09, _0x4fc578.join(","), combine(currNumber[31], 6).length, 1);
  } else {
    hsycmserror("至少选择六个号码");
  }
  $("div." + _0x281d09 + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".bz7bz .selectNumber", function () {
  bz7bz($(this));
});
var bz7bz = function (_0x51f986) {
  if (rates == null) {
    return false;
  }
  var _0x21d7d0 = _0x51f986.text();
  var _0x5003de = _0x51f986.attr("data-number");
  var _0x4b570f = _0x51f986.attr("playid");
  _0x51f986.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "bz7bz_addbtn('" + _0x4b570f + "')");
};
var bz7bz_addbtn = function (_0x4376d2) {
  var _0x22f41b = [];
  $("div." + _0x4376d2 + " .selectNumber").each(function () {
    {
      var _0x2f7648 = $(this);
      if (_0x2f7648.hasClass("ssc-curr-z")) {
        var _0x3f09bb = _0x2f7648.attr("data-number");
        _0x22f41b.push(_0x3f09bb);
      }
    }
  });
  if (_0x22f41b.length >= 7) {
    {
      addtotouzhu(_0x4376d2, _0x22f41b.join(","), combine(currNumber[32], 7).length, 1);
    }
  } else {
    {
      hsycmserror("至少选择七个号码");
    }
  }
  $("div." + _0x4376d2 + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".bz8bz .selectNumber", function () {
  bz8bz($(this));
});
var bz8bz = function (_0x11f52c) {
  if (rates == null) {
    return false;
  }
  var _0x4b83f4 = _0x11f52c.text();
  var _0x27c28e = _0x11f52c.attr("data-number");
  var _0x418d41 = _0x11f52c.attr("playid");
  _0x11f52c.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "bz8bz_addbtn('" + _0x418d41 + "')");
};
var bz8bz_addbtn = function (_0x5284b6) {
  var _0x185134 = [];
  $("div." + _0x5284b6 + " .selectNumber").each(function () {
    var _0x163896 = $(this);
    if (_0x163896.hasClass("ssc-curr-z")) {
      {
        var _0x2e8baf = _0x163896.attr("data-number");
        _0x185134.push(_0x2e8baf);
      }
    }
  });
  if (_0x185134.length >= 8) {
    addtotouzhu(_0x5284b6, _0x185134.join(","), combine(currNumber[33], 8).length, 1);
  } else {
    hsycmserror("至少选择八个号码");
  }
  $("div." + _0x5284b6 + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".bz9bz .selectNumber", function () {
  bz9bz($(this));
});
var bz9bz = function (_0x4caa35) {
  if (rates == null) {
    return false;
  }
  var _0x39c4fe = _0x4caa35.text();
  var _0x29ab1c = _0x4caa35.attr("data-number");
  var _0x206c26 = _0x4caa35.attr("playid");
  _0x4caa35.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "bz9bz_addbtn('" + _0x206c26 + "')");
};
var bz9bz_addbtn = function (_0x29c1c2) {
  var _0x337db3 = [];
  $("div." + _0x29c1c2 + " .selectNumber").each(function () {
    {
      var _0x4aa660 = $(this);
      if (_0x4aa660.hasClass("ssc-curr-z")) {
        {
          var _0x4ac89a = _0x4aa660.attr("data-number");
          _0x337db3.push(_0x4ac89a);
        }
      }
    }
  });
  if (_0x337db3.length >= 9) {
    addtotouzhu(_0x29c1c2, _0x337db3.join(","), combine(currNumber[34], 9).length, 1);
  } else {
    hsycmserror("至少选择九个号码");
  }
  $("div." + _0x29c1c2 + " .selectNumber").removeClass("ssc-curr-z");
};
$(document).on("click", ".bz10bz .selectNumber", function () {
  bz10bz($(this));
});
var bz10bz = function (_0x50f96f) {
  if (rates == null) {
    return false;
  }
  var _0x347266 = _0x50f96f.text();
  var _0x1a2f20 = _0x50f96f.attr("data-number");
  var _0x527571 = _0x50f96f.attr("playid");
  _0x50f96f.toggleClass("ssc-curr-z");
  currNumber = currList();
  countFun();
  countMoney();
  $(".addtobetbtn").attr("onclick", "bz10bz_addbtn('" + _0x527571 + "')");
};
var bz10bz_addbtn = function (_0x3c99e5) {
  var _0x43f458 = [];
  $("div." + _0x3c99e5 + " .selectNumber").each(function () {
    {
      var _0x534ae7 = $(this);
      if (_0x534ae7.hasClass("ssc-curr-z")) {
        var _0x16e1ce = _0x534ae7.attr("data-number");
        _0x43f458.push(_0x16e1ce);
      }
    }
  });
  if (_0x43f458.length >= 10) {
    addtotouzhu(_0x3c99e5, _0x43f458.join(","), combine(currNumber[35], 10).length, 1);
  } else {
    {
      hsycmserror("至少选择十个号码");
    }
  }
  $("div." + _0x3c99e5 + " .selectNumber").removeClass("ssc-curr-z");
};
var orderList = new Array();
var addtotouzhu = function (_0x50ab7d, _0x58c918, _0x11d4f2, _0x2d5ec7) {
  var _0x5d0f7a = $(".selectMultipInput").val();
  var _0x146af5 = $(".selectMultipleCon").find("option:selected").text();
  var _0x1fad7e = $(".selectMultipleCon").val();
  var _0x55fc08 = rates[_0x50ab7d];
  console.log(_0x55fc08);
  if (parseInt(_0x55fc08.minjj) < 1) {
    _0x55fc08.minjj = 1;
  }
  if (parseInt(_0x55fc08.maxprize) < 1) {
    _0x55fc08.maxprize = 30000;
  }
  var _0x1f2978 = generateMixed(20);
  var _0x7516b = $(".xiad-left dl");
  var _0x3aa5a2 = _0x55fc08.playid + "###" + _0x58c918;
  var _0x288eb8 = $(".xiad-left dl dd[orderDetail='" + _0x3aa5a2 + "']");
  var _0x5d0703 = "";
  if (_0x2d5ec7 == 1 || _0x2d5ec7 == true) {
    {
      _0x5d0703 = "[" + _0x58c918 + "]";
    }
  }
  if (_0x288eb8.length > 0) {
    {
      var _0x29dd1e = parseInt(_0x288eb8.find("input.orderprice").val()) + 1;
      var _0xa73595 = accMul(_0x29dd1e, _0x55fc08.rate);
      _0x288eb8.find("input.orderprice").val(_0x29dd1e).focus();
      _0x288eb8.find(".order_money").text(_0xa73595.toFixed(3));
      currNumber = [];
      zhushus = [];
      $(".zhushu").text("0");
      $(".selectMultipleOldMoney").text("0.00");
      _0x1f2978 = _0x288eb8.attr("id");
      if (orderList.length >= 1) {
        for (var _0x4fefab in orderList) {
          if (orderList[_0x4fefab].trano == _0x1f2978) {
            {
              orderList[_0x4fefab].price = _0x29dd1e;
            }
          }
        }
      }
      return false;
    }
  } else {
    var _0x2cf6d0 = {
      trano: _0x1f2978,
      playtitle: _0x55fc08.title,
      playid: _0x55fc08.playid,
      number: _0x58c918,
      zhushu: _0x11d4f2 ? parseInt(_0x11d4f2) : 1,
      price: parseInt(_0x11d4f2) * parseInt(_0x5d0f7a) * parseInt(_0x146af5),
      minxf: _0x55fc08.minxf,
      totalzs: _0x55fc08.totalzs,
      maxjj: _0x55fc08.maxjj,
      minjj: _0x55fc08.minjj,
      maxzs: _0x55fc08.maxzs,
      rate: _0x55fc08.rate,
      jine: parseInt(_0x5d0f7a) * parseInt(_0x146af5)
    };
    orderList.unshift(_0x2cf6d0);
  }
  addNumberLanAn();
  console.log(orderList);
  var _0x462d82 = accMul(_0x55fc08.minxf, _0x55fc08.rate);
  var _0x2e4a21 = _0x11d4f2 ? parseInt(_0x11d4f2) : 1;
  console.log(_0x462d82);
  var _0x21340b = "<div class=\"yBettingList gamezhui\" id=\"" + _0x1f2978 + "\">" + "<div class=\"gamezhui-1\">" + "<span><i style=\"color: #ae995c;\"class=\"iconfont\">&#xe606; </i>" + _0x55fc08.title + "</span><a class=\"sc\"><i class=\"iconfont\">&#xe630;</i></a>" + "</div>" + "<div class=\"gamezhui-2\">" + "<span class=\"gamezhui-h\">" + _0x58c918 + "</span>" + "<span class=\"gamezhui-m\">" + _0x11d4f2 + "注," + _0x5d0f7a + "倍," + _0x146af5 + "=" + parseInt(_0x11d4f2) * parseInt(_0x5d0f7a) * parseInt(_0x146af5) + "元</span>" + "</div>" + "<div id=\"betting_money\" style=\"display: none;\">" + lastMoney + "</div>";
  $(".yBettingLists").append(_0x21340b);
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
  var _0x4e7c05 = "<div class=\"hsycms-model-btn confirm\"><button type=\"button\" class=\"cancel\">取消</button><button type=\"button\" class=\"ok\">确定</button></div>";
  $("#confirm").append(_0x4e7c05);
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
      success: function (_0x5035d5) {
        {
          if (_0x5035d5.sign) {
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
            hsycmserror(_0x5035d5.message, -1);
          }
        }
      }
    });
  });
  var _0x22a2b2 = 0;
  for (var _0x5c7ce7 = 0; _0x5c7ce7 < orderList.length; _0x5c7ce7++) {
    {
      var _0x59a5ef = orderList[_0x5c7ce7];
      var _0xdcdb44 = rates[_0x59a5ef.playid];
      var _0x522cbd = Number(_0x59a5ef.yjf);
      var _0x1015f9 = _0x59a5ef.number;
      _0x22a2b2 += _0x522cbd;
    }
  }
  $("#Orderdetailtotalprice").text(_0x22a2b2.toFixed(3));
  console.log(orderList);
});
$(document).on("click", ".hemai", function () {
  $(".addtobetbtn").click();
  if (orderList.length < 1) {
    {
      hsycmserror("请选择投注号码", -1);
      return false;
    }
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
    {
      $("body").removeClass("niubihh");
      $(".alert_bj").hide();
      $(".faqihemai").hide();
      $("#orderlist_clear").click();
      $(".faqihemai").removeClass("linearBottom ");
      $(".faqihemai").addClass("linearTop");
    }
  }, 200);
});
$(document).on("click", "#buy_hemai", function () {
  if (orderList.length < 1) {
    hsycmserror("请选择投注号码");
    return false;
  }
  if (orderList.length > 1) {
    hsycmserror("发起合买只能投注一种玩法");
    return false;
  }
  var _0x50b8e2 = 0;
  var _0x319513 = 0;
  var _0x1398a9 = Number($("#fsInput").val());
  var _0x4a0b43 = Number($("#rgInput").val());
  var _0x1a12ed = Number($("#bdInput").val());
  var _0x334dc3 = Number($("#isbaodi").hasClass("active"));
  var _0x3cb54a = Number($(".leixing .active").attr("num"));
  for (var _0x2af192 = 0; _0x2af192 < orderList.length; _0x2af192++) {
    var _0x5cac5f = orderList[_0x2af192];
    var _0x57e18a = rates[_0x5cac5f.playid];
    var _0x2ea8f7 = Number(_0x5cac5f.yjf);
    var _0x5fc2fd = _0x5cac5f.number;
    _0x50b8e2 += _0x2ea8f7;
  }
  if (_0x1398a9 < 1) {
    {
      hsycmserror("您要分成的份数必须大于等于1");
      $("#fsInput").focus();
      return false;
    }
  } else {
    if (_0x50b8e2.toFixed(2) / _0x1398a9 < 1) {
      hsycmserror("每份金额必须大于等于1元！");
      $("#fsInput").focus();
      return false;
    } else {
      if (_0x4a0b43 < _0x1398a9 * 0.02) {
        hsycmserror("您要认购的份数至少应该为所分份数的2% (" + Math.ceil(_0x1398a9 * 0.02) + "份)！");
        $("#rgInput").focus();
        return false;
      } else {
        if (_0x4a0b43 - _0x1398a9 > 0) {
          hsycmserror("您要认购的份数不能大于所分的份数！");
          $("#rgInput").focus();
          return false;
        } else {
          if (_0x334dc3 && _0x1a12ed < 1) {
            {
              hsycmserror("您要保底的份数不能为空或不能为0！");
              $("#bdInput").focus();
              return false;
            }
          } else {
            if (_0x334dc3 && _0x1a12ed - _0x1398a9 > 0) {
              hsycmserror("您要保底的份数不能大于所分的份数！");
              $("#bdInput").focus();
              return false;
            } else {
              if (_0x334dc3 && _0x1a12ed < _0x1398a9 * 0.02) {
                {
                  hsycmserror("保底金额至少为总金额的2% (" + Math.ceil(_0x1398a9 * 0.02) + "份)！");
                  $("#bdInput").focus();
                  return false;
                }
              } else {
                if (_0x334dc3 && _0x4a0b43 + _0x1a12ed > _0x1398a9) {
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
  var _0x4c7959 = "<div class=\"hsycms-model-btn confirm_hemai\"><button type=\"button\" class=\"cancel\">取消</button><button type=\"button\" class=\"ok\">确定</button></div>";
  $("#hemai_xiangxi").append(_0x4c7959);
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
  $("#fenshuhemai").text(_0x1398a9);
  $("#rengouhemai").text(_0x4a0b43);
  $("#isbaodihemai").text(_0x334dc3 ? "是" : "否");
  $("#baodihemai").text(_0x334dc3 ? _0x1a12ed : 0);
  var _0x6f7a6f = {
    orderList: orderList,
    expect: lottery.currFullExpect,
    lotteryname: lotteryname,
    isbaodi: _0x334dc3,
    isbaomi: _0x3cb54a,
    rengouhemai: _0x4a0b43,
    fenshuhemai: _0x1398a9,
    baodihemai: _0x1a12ed
  };
  console.log(_0x6f7a6f);
  if (!_0x334dc3) {
    _0x1a12ed = 0;
  }
  _0x319513 = (_0x4a0b43 * (_0x50b8e2 / _0x1398a9) + _0x1a12ed * (_0x50b8e2 / _0x1398a9)).toFixed(2);
  $("#Orderdetailtotalpricehemai").text(_0x319513);
  $(".confirm_hemai .ok").click(function () {
    {
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
          isbaodi: _0x334dc3,
          isbaomi: _0x3cb54a,
          rengouhemai: _0x4a0b43,
          fenshuhemai: _0x1398a9,
          baodihemai: _0x1a12ed
        },
        success: function (_0x1cd28d) {
          if (_0x1cd28d.sign) {
            $("#orderlist_clear").click();
            $(".kuaijie").css({
              background: "#7b7b87"
            });
            $(".hemai").css({
              background: "#7b7b87"
            });
            hsycms("发起合买成功");
          } else {
            hsycmserror(_0x1cd28d.message);
          }
        }
      });
    }
  });
});
function changebetokmoney(_0x301286, _0x1e7ce6, _0x3ed4ab) {
  var _0x41bfa9 = $(".xiad-left dl dd#" + _0x3ed4ab);
  var _0x3eee90 = accMul(_0x301286, _0x1e7ce6);
  _0x41bfa9.find(".order_money").text(_0x3eee90.toFixed(3));
}
function accMul(_0x2e9484, _0x34b702) {
  var _0x3ef74f = 0;
  var _0x3e17db = _0x2e9484.toString();
  var _0x208f5c = _0x34b702.toString();
  try {
    {
      _0x3ef74f += _0x3e17db.split(".")[1].length;
    }
  } catch (_0x2c6b70) {}
  try {
    _0x3ef74f += _0x208f5c.split(".")[1].length;
  } catch (_0x5cc5d6) {}
  return Number(_0x3e17db.replace(".", "")) * Number(_0x208f5c.replace(".", "")) / Math.pow(10, _0x3ef74f);
}
var changeorderprice = function (_0x381973, _0x4ac0cf) {
  if (orderList.length >= 1) {
    for (var _0x5d7fe9 = 0; _0x5d7fe9 < orderList.length; _0x5d7fe9++) {
      var _0x3f560f = orderList[_0x5d7fe9];
      if (_0x3f560f.trano == _0x4ac0cf) {
        orderList[_0x5d7fe9].price = _0x381973;
      }
    }
  }
  console.log(orderList);
};
var chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function generateMixed(_0x29c3b3) {
  var _0x3ea786 = "";
  for (var _0x506c54 = 0; _0x506c54 < _0x29c3b3; _0x506c54++) {
    {
      var _0x38c4fe = Math.ceil(Math.random() * 35);
      _0x3ea786 += chars[_0x38c4fe];
    }
  }
  return _0x3ea786;
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
  var _0x19e4bd = "<div class=\"hsycms-model-btn confirm\"><button type=\"button\" class=\"cancel\">取消</button><button type=\"button\" class=\"ok\">确定</button></div>";
  $("#confirm").append(_0x19e4bd);
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
      success: function (_0x3f5623) {
        {
          if (_0x3f5623.sign) {
            $("#orderlist_clear").click();
            $(".kuaijie").css({
              background: "#7b7b87"
            });
            $(".hemai").css({
              background: "#7b7b87"
            });
            hsycms("投注成功", 1);
          } else {
            {
              hsycmserror(_0x3f5623.message, -1);
            }
          }
        }
      }
    });
  });
  var _0xc3c0c = 0;
  for (var _0x20b525 = 0; _0x20b525 < orderList.length; _0x20b525++) {
    {
      var _0x180819 = orderList[_0x20b525];
      var _0x5d74d8 = rates[_0x180819.playid];
      var _0xb5a79d = Number(_0x180819.yjf);
      var _0x589df8 = _0x180819.number;
      _0xc3c0c += _0xb5a79d;
    }
  }
  $("#Orderdetailtotalprice").text(_0xc3c0c.toFixed(3));
  console.log(orderList);
});
(function (_0x3a9481, _0x50298a, _0x42e628) {
  _0x42e628 = "al";
  try {
    _0x42e628 += "ert";
    _0x50298a = encode_version;
    if (!(typeof _0x50298a !== "undefined" && _0x50298a === "jsjiami.com.v5")) {
      _0x3a9481[_0x42e628]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x3b3176) {
    {
      _0x3a9481[_0x42e628]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";
