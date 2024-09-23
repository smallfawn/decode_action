//Mon Sep 23 2024 14:05:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
var $blin = $(".light p"),
  $prize = $(".play li").not("#btn"),
  $btn = $("#btn"),
  length = $prize.length,
  bool = true,
  mark = 8,
  timer;
function init() {
  timer = setInterval(function () {
    $blin.toggleClass("blin");
    length++;
    length %= 8;
    $prize.eq(length - 1).removeClass("select");
    $prize.eq(length).addClass("select");
    mark++;
    mark %= 8;
  }, 1000);
}
$btn.click(function () {
  if (!bool) {
    return;
  }
  bool = false;
  lottery();
});
function animate() {
  return function () {
    $blin.toggleClass("blin");
    length++;
    length %= 8;
    $prize.eq(length - 1).removeClass("select");
    $prize.eq(length).addClass("select");
  };
}
function wintip() {
  $mask.show();
  $winning.addClass("reback");
  setTimeout(function () {
    $card.addClass("pull");
  }, 500);
  $("#close,.win,.btn").click(function () {
    $mask.hide();
    $winning.removeClass("reback");
    $card.removeClass("pull");
    $("#roll").hide();
    $("#win").show();
  });
}
var lotteryFunc = function (_0x31cec9, _0x5d97ac, _0x403b3e, _0xbd964b) {
  if (_0x31cec9 < 13) {
    $("#card .win").css("background-image", "url(" + _0xbd964b + ")");
    clearInterval(timer);
    var _0x1b8dbb = 0;
    if (_0x5d97ac > mark) {
      _0x1b8dbb = _0x5d97ac - mark;
    } else {
      if (_0x5d97ac < mark) {
        _0x1b8dbb = 8 - (mark - _0x5d97ac);
      }
    }
    mark += _0x1b8dbb;
    mark %= 8;
    _0x1b8dbb += 32;
    for (var _0x199c45 = 1; _0x199c45 <= _0x1b8dbb; _0x199c45++) {
      setTimeout(animate(), 2 * _0x199c45 * _0x199c45);
    }
    setTimeout(function () {
      setTimeout(function () {
        bool = true;
        wintip();
      }, 1000);
    }, 2 * _0x1b8dbb * _0x1b8dbb);
    document.getElementById("winprize").innerHTML = "恭喜您中得<font style=\"color:red\">" + _0x403b3e + "</font><br><img style=\"display:block;height:120; margin:5px auto\" src=\"" + _0xbd964b + "\" height=\"120\">";
  } else {
    clearInterval(timer);
    var _0x20a33c = 0;
    if (_0x5d97ac > mark) {
      _0x20a33c = _0x5d97ac - mark;
    } else {
      if (_0x5d97ac < mark) {
        _0x20a33c = 8 - (mark - _0x5d97ac);
      }
    }
    mark += _0x20a33c;
    mark %= 8;
    _0x20a33c += 32;
    for (var _0x40ec94 = 1; _0x40ec94 <= _0x20a33c; _0x40ec94++) {
      setTimeout(animate(), 2 * _0x40ec94 * _0x40ec94);
    }
    setTimeout(function () {
      setTimeout(function () {
        swal(_0x403b3e).then(_0x44b2a4 => {
          bool = true;
          clearInterval(timer);
          init();
        });
      }, 1000);
    }, 2 * _0x20a33c * _0x20a33c);
  }
};
function lottery() {
  $.post("?act=lottery", {}, function (_0x51438c, _0x13edd8) {
    if (_0x13edd8 == "success") {
      if (_0x51438c.res == "needverify") {
        $("#roll").slideToggle(500);
        $("#verify_form").slideToggle(500);
        return false;
      }
      if (_0x51438c.state == "success") {
        sncode = _0x51438c.pic;
        awards = parseInt(_0x51438c.res);
        angle = _0x51438c.angle - 1;
        text = _0x51438c.msg;
        lotteryFunc(awards, angle, text, sncode);
      }
    } else {
      alert2("操作失败：" + _0x51438c + "\n状态：" + _0x13edd8);
    }
  }, "json");
}
$("#checkprize").click(function () {
  if ($("#checkpwd").val() == "" || true) {
    if (confirm("确认领奖后兑奖码将失效，请确认？")) {
      $(this).unbind("click");
      $.post("?u=cab1ab8ffbddc5bb728bf615c52ee2c0&lid=96&checkprize=1", {}, function (_0x5cb418, _0x841490) {
        if (_0x841490 == "success") {
          if (_0x5cb418 == "1") {
            alert("兑奖成功！");
            location.replace("?u=cab1ab8ffbddc5bb728bf615c52ee2c0&lid=96");
          }
        }
      });
    }
  } else {
    alert2("领奖密码不正确，请重新输入！");
  }
});
$(".exchange_gift").click(function () {
  if ($("#checkpwd0").val() == "" || true) {
    if (confirm("是否确认核销？")) {
      var _0x4da079 = $(this);
      _0x4da079.unbind("click");
      $.post("?lid=96&exchangeid=" + _0x4da079.data("id"), {}, function (_0x24004c, _0x59a6ed) {
        if (_0x59a6ed == "success") {
          if (_0x24004c == "1") {
            alert2("兑奖成功！");
            _0x4da079.removeClass("pxbtn2").addClass("pxbtn3").val("已发奖");
          }
        }
      });
    }
  } else {
    $("#inputpwd").show();
  }
});
var saveinginfo = 0;
$("#submitinfo").click(function () {
  if (saveinginfo == 1) {
    return;
  }
  if ($("#field1").val() == "") {
    alert2("请填写姓名");
    return;
  }
  if ($("#field2").val() == "") {
    alert2("请填写手机");
    return;
  }
  var _0x175671 = $("#field2").val();
  var _0x33b9db = _0x175671.match(/^1[3456789][0-9]{9}$/);
  if (!_0x33b9db) {
    alert2("请填写正确的手机");
    return;
  }
  saveinginfo = 1;
  var _0x9743bf = {
    field1: $("#field1").val(),
    field2: $("#field2").val(),
    field3: $("#field3").val(),
    field4: $("#field4").val(),
    field5: $("#field5").val()
  };
  $.post("?act=add", _0x9743bf, function (_0x1c1bfc, _0x137db4) {
    if (_0x1c1bfc.state == "success") {
      alert("提交成功");
      location.replace("?");
    } else {
      alert("提交失败，请稍候重试");
    }
  }, "json");
});
$("#submitinfo2").click(function () {
  if ($("#field1").val() == "") {
    alert2("请填写姓名");
    return;
  }
  if ($("#field2").val() == "") {
    alert2("请填写手机");
    return;
  }
  var _0x5152b9 = $("#field2").val();
  var _0x14469f = _0x5152b9.match(/^1[3456789][0-9]{9}$/);
  if (!_0x14469f) {
    alert2("请填写正确的手机");
    return;
  }
  var _0x6cb40c = {
    field1: $("#field1").val(),
    field2: $("#field2").val(),
    field3: $("#field3").val(),
    field4: $("#field4").val(),
    field5: $("#field5").val()
  };
  $(this).unbind("click");
  $.post("?saveinfo2=cab1ab8ffbddc5bb728bf615c52ee2c0&lid=96&update=1", _0x6cb40c, function (_0xa42c51, _0x32fcba) {
    if (_0xa42c51.errcode == 0) {
      alert("中奖信息提交成功，请商家进行确认兑奖");
      location.replace("?u=cab1ab8ffbddc5bb728bf615c52ee2c0&lid=96");
    } else {
      alert2("提交失败，请稍候重试");
    }
  }, "json");
});
$("#verify").click(function () {
  if ($("#verify_code").val() == "") {
    alert2("请输入抽奖码");
    return;
  }
  var _0x22a99 = {
    verify: $("#verify_code").val()
  };
  $.post("?act=cjm", _0x22a99, function (_0x569ae0, _0x443a75) {
    if (_0x569ae0.state == "success") {
      $("#verify_form").slideToggle(500);
      $("#roll").slideToggle(500);
      $("#verify_form").hide();
      location.replace("?");
    } else {
      alert(_0x569ae0.msg);
    }
  }, "json");
});
var phonecode = "";
var timer;
var cnt = 60;
var fetched = 0;
var $phone = $("#field");
$("#fetchCode").on("touchstart", function (_0x52cd7e) {
  if (/^1[3456789][0-9]{9}$/.test($phone.val()) == false) {
    alert("请填写正确的手机号码");
    $phone.focus();
    return;
  }
  if (cnt !== 60) {
    return;
  }
  cnt--;
  var _0x46524d = $(this);
  $.post("?act=fetchCode&u=cab1ab8ffbddc5bb728bf615c52ee2c0&lid=96&hash=&phone=" + $phone.val(), {}, function (_0x181674, _0x3924ab) {
    if (_0x181674.errcode == 0) {
      phonecode = _0x181674.code;
      console.log(phonecode);
    }
  }, "json");
  fetched = 1;
  _0x46524d.removeClass("pxbtn").addClass("pxbtn4").val("重新获取(" + cnt + ")");
  timer = setInterval("countDown()", 1000);
});
function countDown() {
  if (cnt <= 1) {
    clearInterval(timer);
    $("#fetchCode").removeClass("pxbtn4").addClass("pxbtn").val("获取验证码");
    cnt = 60;
  } else {
    cnt--;
    $("#fetchCode").val("重新获取(" + cnt + ")");
  }
}
var saveinginfo0 = 0;
$("#submit_info_btn").click(function () {
  if (saveinginfo0 == 1) {
    return;
  }
  if ($("#field1").val() == "") {
    alert2("请填写姓名");
    return;
  }
  if ($("#field2").val() == "") {
    alert2("请填写手机");
    return;
  }
  var _0x574207 = $("#field2").val();
  var _0x43045c = _0x574207.match(/^1[3456789][0-9]{9}$/);
  if (!_0x43045c) {
    alert2("请填写正确的手机");
    return;
  }
  saveinginfo0 = 1;
  var _0x20106c = {
    field1: $("#field1").val(),
    field2: $("#field2").val(),
    field3: $("#field3").val(),
    field4: $("#field4").val(),
    field5: $("#field5").val()
  };
  $.post("?act=saveinfo0&u=cab1ab8ffbddc5bb728bf615c52ee2c0&lid=96&hash=", _0x20106c, function (_0x37d7c0, _0x52cce7) {
    if (_0x37d7c0.errcode == 0) {
      $("#submit_info_form").slideToggle(500).hide();
      $("#roll").slideToggle(500);
      bool = true;
    } else {
      if (_0x37d7c0.errcode == 1) {
        alert("此抽奖码已被使用");
        location.replace("?u=cab1ab8ffbddc5bb728bf615c52ee2c0&lid=96");
      } else {
        if (_0x37d7c0.errcode == -1) {
          alert("抽奖码错误");
          location.replace("?u=cab1ab8ffbddc5bb728bf615c52ee2c0&lid=96");
        } else {
          if (_0x37d7c0.errcode == 2) {
            alert2("手机验证码不正确！");
            saveinginfo0 = 0;
          } else {
            if (_0x37d7c0.errcode == 3) {
              alert("手机验证码已过期！");
              location.replace("?u=cab1ab8ffbddc5bb728bf615c52ee2c0&lid=96");
            } else {
              alert2("提交失败，请稍候重试");
            }
          }
        }
      }
    }
  }, "json");
});
$("#signBtn").click(function () {
  var _0x5ccb00 = $(this);
  _0x5ccb00.unbind("click");
  $.post("?act=signup&openid=cab1ab8ffbddc5bb728bf615c52ee2c0&lid=96&add2=0", {}, function (_0x197a90, _0x1200a1) {
    if (_0x197a90.errcode == 0) {
      alert2("签到成功，增加0积分！");
      $("#curtimes6").text(parseInt($("#curtimes6").text()) + 0);
      _0x5ccb00.val("今日已签到").removeClass("pxbtn").addClass("pxbtn4");
      bool = true;
    }
  }, "json");
});
function alert2(_0x224db1) {
  swal(_0x224db1);
}
(function (_0x1d6032, _0x4d2aaa, _0x2b491e) {
  _0x2b491e = "al";
  try {
    _0x2b491e += "ert";
    _0x4d2aaa = encode_version;
    if (!(typeof _0x4d2aaa !== "undefined" && _0x4d2aaa === "jsjiami.com.v5")) {
      _0x1d6032[_0x2b491e]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x12bad8) {
    _0x1d6032[_0x2b491e]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";