//Fri Oct 11 2024 06:43:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function check_line() {
  var _0x41144f = "";
  $("input[name='line']:checked").each(function () {
    _0x41144f += $(this).val() + ",";
  });
  return _0x41144f == "1,2,3,5," ? "" : _0x41144f.slice(0, -1);
}
function ip_list_sh() {
  $(".resolve_ip_list").is(":hidden") == false ? ($(".resolve_ip_list").hide(), $(".show_hide").html("展开<i class=\"feather icon-chevrons-down\"></i>")) : ($(".resolve_ip_list").show(), $(".show_hide").html("收起<i class=\"feather icon-chevrons-up\"></i>"));
}
function close_ip_list() {
  $(".resolve_ip_list").is(":hidden") == false && ($(".resolve_ip_list").hide(), $(".show_hide").html("展开<i class=\"feather icon-chevrons-down\"></i>"));
}
$("body").on("mousedown", ".clear_input", function (_0x5a432c) {
  if (_0x5a432c.which != "1") {
    return false;
  }
  $("#host").val("");
  setTimeout(function () {
    $("#host").focus();
  }, 100);
  $(this).hide();
});
$("#host").click(function () {
  load_history();
});
$("#host").blur(function () {
  $("#history-list").hide();
});
$("#host").bind("input propertychange", function () {
  $("#history-list").hide();
  $("#host").val() ? $(".clear_input").show() : $(".clear_input").hide();
});
$("body").on("mousedown", ".input_insert", function (_0xae4534) {
  if (_0xae4534.which != "1") {
    return false;
  }
  $("#host").val($(this).attr("host"));
  setTimeout(function () {
    $("#host").focus();
  }, 100);
  $(".clear_input").show();
});
$("body").on("mousedown", ".url-icon.del_host", function (_0x2f4ebd) {
  if (_0x2f4ebd.which != "1") {
    return false;
  }
  var _0x54e11a = $(this).attr("li_id");
  del_history(_0x54e11a);
  return false;
});
$("body").on("mousedown", ".url-icon.top_history", function (_0x10af9b) {
  if (_0x10af9b.which != "1") {
    return false;
  }
  var _0xfc3d83 = $(this).attr("li_id"),
    _0x3127f4 = get_host_history();
  _0x3127f4[_0xfc3d83].top == 99 ? _0x3127f4[_0xfc3d83].top = 0 : (_0x3127f4[_0xfc3d83].sort = 0, _0x3127f4[_0xfc3d83].top = 99);
  set_ls(_0x3127f4);
  load_history();
  return false;
});
function contact_master() {
  layer.open({
    type: 1,
    title: "",
    content: "<div class=\"card m-0\" style=\"width:400px;\">  <div class=\"card-body text-center p-0\"><div style=\"width: 100%;height: 80px;background-image: linear-gradient(to right, #003dc1 , #b5399a)\"></div> <img class=\"img-fluid img-thumbnail\" src=\"/frame/images/head_logo.jpg\" alt=\"Profile-user\" style=\"width:80px;height:80px;border-radius: 50%; margin-top: -40px; \">  <div class=\"mb-3\" style=\" margin-top: 10px; \"><span class=\"badge\" style=\" background-image: linear-gradient(to right, #ffcf3e , #f19204); color: #fff; \">功能建议、广告合作等，均可联系</span></div> <p>QQ：962922968<span class=\"ml-3\">邮箱：itdog-cn@qq.com</span></p></div> <div class=\"card-footer bg-inverse\"> <div class=\"row text-center\"> <div class=\"col\">  <button class=\"btn btn-primary btn-sm\" onclick=\"window.open('tencent://message/?uin=962922968');\"><i class=\"fab fa-qq\"></i> QQ临时会话</button> <button class=\"ml-2 copy_qq btn btn-primary btn-sm\"><i class=\"feather icon-copy\"></i> 复制QQ号码</button> </div>   </div> </div> </div>",
    closeBtn: 2
  });
}
function err_tip(_0x1a3424) {
  layer.open({
    title: false,
    content: "<i class=\"feather icon-info text-warning mr-2\" style=\"font-size:19px;vertical-align: middle;color:#ff9600!important\"></i>" + _0x1a3424,
    btnAlign: "c",
    anim: -1,
    isOutAnim: false
  });
}
function err_tip_more(_0x1db07d) {
  layer.open({
    title: false,
    content: "<i class=\"feather icon-info text-warning mr-2\" style=\"font-size:19px;vertical-align: middle;color:#ff9600!important\"></i>错误提示：<ul class=\"mt-2 mb-0 text-secondary\" style=\" font-size: 12px; letter-spacing: 1px; \">" + _0x1db07d + "</ul>",
    btnAlign: "c",
    anim: -1,
    isOutAnim: false,
    offset: "auto"
  });
}
function success_tip(_0x22a03, _0x21441f = "确定") {
  layer.open({
    title: false,
    btn: _0x21441f,
    content: "<div class=\"text-center text-secondary\" style=\"display: flex;justify-content: center;\"><i class=\"fas fa-check-circle text-success mr-2\" style=\"font-size:23px;vertical-align: middle;\"></i>" + _0x22a03 + "</div>",
    btnAlign: "c",
    anim: -1,
    isOutAnim: false
  });
}
$("#checkAll").click(function () {
  var _0x2bf921 = $("#checkAll").is(":checked");
  _0x2bf921 ? $("input[name='line']").prop("checked", true) : $("input[name='line']").prop("checked", false);
});
$("input[name='line']").click(function () {
  var _0x18e7c5 = $("input[name='line']:checked").length;
  _0x18e7c5 == 4 ? $("#checkAll").prop("checked", true) : $("#checkAll").prop("checked", false);
});
$("#marker_switch").change(function () {
  $(this).is(":checked") ? ($("#marker_ico").removeClass("text-secondary"), $("#marker_ico").addClass("text-danger"), option.series[1].data = marker_list, china_map.setOption(option), $.cookie("marker_switch", "true", {
    expires: 1000,
    path: "/"
  })) : ($("#marker_ico").removeClass("text-danger"), $("#marker_ico").addClass("text-secondary"), option.series[1].data = [], china_map.setOption(option), $.cookie("marker_switch", "false", {
    expires: 1000,
    path: "/"
  }));
});
$(document).ready(function () {
  function _0x538da7() {
    var _0x59c5ae = $(window).width(),
      _0x5bafa4 = $(window).height();
    if (_0x5bafa4 < 1000) {
      var _0x47a38b = (_0x5bafa4 - 390) / 2;
    } else {
      var _0x47a38b = 300;
    }
    _0x59c5ae >= 1500 ? ($(".lantern_left").css({
      position: "fixed",
      top: "25%"
    }), $(".lantern_right").css({
      position: "fixed",
      top: "25%"
    }), $(".back_top").css({
      position: "fixed",
      top: "calc(var(--custom-top-percent) + 400px)"
    }), $(".back_top_small").css({
      position: "fixed",
      top: "50%"
    })) : ($(".lantern_left").css({
      position: "absolute",
      top: $(window).scrollTop() + _0x47a38b + "px"
    }), $(".lantern_right").css({
      position: "absolute",
      top: $(window).scrollTop() + _0x47a38b + "px"
    }), $(".back_top").css({
      position: "absolute",
      top: $(window).scrollTop() + (_0x47a38b + 436) + "px"
    }), $(".back_top_small").css({
      position: "fixed",
      top: "50%"
    }));
  }
  _0x538da7();
  $(window).on("scroll", function () {
    _0x538da7();
  });
  $(window).resize(function () {
    _0x538da7();
  });
});
$(document).on("click", ".copy_qq", function () {
  navigator.clipboard.writeText("962922968").then(function () {
    layer.closeAll();
    layer.msg("<span style='color:#fff'><i class=\"fas fa-check-circle text-success\"></i>  QQ复制成功</span>", {
      time: 900
    });
  });
});
$(document).on("click", ".copy_ip", function () {
  navigator.clipboard.writeText($(".copy_ip").attr("copy-text")).then(function () {
    layer.msg("<span style='color:#fff'><i class=\"fas fa-check-circle text-success\"></i>  IP复制成功</span>", {
      time: 900
    });
  });
});
$(window).scroll(function () {
  $(this).scrollTop() > 200 ? $("#scroll-to-top").show() : $("#scroll-to-top").hide();
});
$("#scroll-to-top").click(function () {
  $("html, body").scrollTop(0);
});
$("#dns_server").click(function () {
  $(".dns-list").css("left", $("#dns_server").position().left);
  $(".dns-list").css("top", $("#dns_server").position().top + 36);
  $(".dns-list").show();
});
$("body").on("mousedown", ".dns-list ul li", function (_0x155e7c) {
  if (_0x155e7c.which != "1") {
    return false;
  }
  $("#dns_server").val($(this).attr("ip"));
  setTimeout(function () {
    $("#dns_server").focus();
  }, 100);
  $(".dns-list").hide();
});
$("#dns_server").bind("input propertychange", function () {
  $(".dns-list").hide();
});
$("#dns_server").blur(function () {
  $(".dns-list").hide();
});
$("input[name=\"dns_server_type\"]").change(function () {
  $(this).val() == "custom" ? $("#dns_server").attr("disabled", false) : ($("#dns_server").attr("disabled", true), $("#dns_server").val(""), $(".dns-list").hide());
});
function del_history(_0x52d78d) {
  var _0x2377cb = get_host_history();
  _0x2377cb.splice(_0x52d78d, 1);
  set_ls(_0x2377cb);
  load_history();
}
function get_host_history() {
  var _0x47a17f = localStorage.getItem("host_history");
  if (_0x47a17f !== null) {
    try {
      var _0x178fc5 = JSON.parse(_0x47a17f);
      return _0x178fc5;
    } catch (_0x2f972a) {
      return [];
    }
  } else {
    return [];
  }
}
function history_sort(_0x448f93) {
  _0x448f93.sort(function (_0x367ed5, _0x182493) {
    return _0x367ed5.top === _0x182493.top ? _0x367ed5.sort - _0x182493.sort : _0x367ed5.top - _0x182493.top;
  });
  _0x448f93.forEach(function (_0x8b558f, _0x54efd5) {
    _0x8b558f.sort = _0x54efd5 + 1;
  });
  var _0x1f5054 = 1;
  _0x448f93.forEach(function (_0x2128be) {
    _0x2128be.top !== 99 && (_0x2128be.top = _0x1f5054, _0x1f5054++);
  });
  return _0x448f93;
}
function add_history(_0x5c2326) {
  if (default_history != 1 && default_history != 2) {
    return false;
  }
  var _0x129206 = get_host_history(),
    _0x3689cf = {
      host: _0x5c2326,
      sort: 0,
      top: 99
    },
    _0xb1160a = 0;
  _0x129206.forEach(function (_0x3191db) {
    _0x3191db.top !== 99 && _0xb1160a++;
  });
  if (_0xb1160a >= 10) {
    return false;
  }
  var _0x327ed2 = false;
  _0x129206.forEach(function (_0x45acd3, _0x2a26bd) {
    _0x45acd3.host === _0x5c2326 && (_0x327ed2 = true, _0x45acd3.top == 99 && (_0x129206.splice(_0x2a26bd, 1), _0x129206.unshift(_0x3689cf), set_ls(_0x129206)));
  });
  if (_0x327ed2) {
    return false;
  }
  _0x129206.unshift(_0x3689cf);
  _0x129206.length > 10 && _0x129206.pop();
  set_ls(_0x129206);
}
function load_history() {
  if (default_history != 1 && default_history != 3) {
    return false;
  }
  var _0x9163e7 = "",
    _0x33cfa2 = get_host_history();
  $.each(_0x33cfa2, function (_0x32a83f, _0x515fcc) {
    var _0x26f0b9 = "";
    _0x515fcc.top != 99 && (_0x26f0b9 = "text-primary");
    _0x9163e7 = _0x9163e7 + "<li id=\"li_" + parseInt(_0x32a83f) + "\"><i class=\"url-icon del_host feather icon-trash-2\" li_id=\"" + parseInt(_0x32a83f) + "\" host=\"" + _0x515fcc.host + "\" title=\"删除记录\"></i><i class=\"url-icon top_history iconfont icon-zhiding1 " + _0x26f0b9 + "\" li_id=\"" + parseInt(_0x32a83f) + "\" host=\"" + _0x515fcc.host + "\" title=\"收藏置顶\"></i><a href=\"javascript:\" class=\"input_insert history-url\" host=\"" + _0x515fcc.host + "\">" + _0x515fcc.host + "</a></li>";
  });
  $("#history_ul").html(_0x9163e7);
  _0x33cfa2.length > 0 ? ($("#history-list").css("left", $("#host").position().left), $("#history-list").css("top", $("#host").position().top + 48), $("#history-list").show()) : $("#history-list").hide();
}
function set_ls(_0x1e0b7d) {
  var _0x43d077 = JSON.stringify(history_sort(_0x1e0b7d));
  localStorage.setItem("host_history", _0x43d077);
}
function init_user_config() {}
$(function () {
  setTimeout(function () {
    $(".loader-bg").fadeOut("slow", function () {
      $(this).remove();
    });
  }, 400);
  $(".nav-item").mouseover(function () {
    $.each($("li.nav-item"), function () {
      $(this).hasClass("default-menu") == false ? $(this).removeClass("pcoded-trigger").removeClass("active") : $(this).removeClass("pcoded-trigger");
    });
    $(this).addClass("pcoded-trigger").addClass("active");
  });
  $(".nav-item").mouseout(function () {
    $(this).hasClass("default-menu") == false ? $(this).removeClass("pcoded-trigger").removeClass("active") : $(this).removeClass("pcoded-trigger");
  });
  init_user_config();
});