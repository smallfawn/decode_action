//Thu Jul 24 2025 02:49:22 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
layui.use(["element", "form", "zpTab", "zpContextMenu", "zanpian", "zpToastr"], function () {
  form = layui.form;
  zanpian = layui.zanpian;
  parentBody = parent.document.body;
  var _0x4219bc = layui.zpTab({
      "url": $(".zpadmin-nav").data("url"),
      "openTabNum": 30,
      "parseData": function (_0x580ce3) {
        return _0x580ce3;
      }
    }),
    _0x3d62e9 = zanpian.local("zpConfig") || zpConfig || {};
  objZpTab = _0x4219bc;
  $("body").removeClass("purple_theme blue_theme green_theme danger_theme blue_theme");
  $("body").addClass(_0x3d62e9.theme);
  $("iframe").contents().find("body").removeClass("purple_theme blue_theme green_theme danger_theme blue_theme").addClass(_0x3d62e9.theme);
  var _0xd2f19f = "zp-arrow2 zp-arrow3";
  $("input[name=theme]").each(function (_0x31c6ce, _0x167ec4) {
    _0x3d62e9.theme == $(_0x167ec4).val() ? ($(_0x167ec4).prop("checked", true), $(_0x167ec4).attr("checked", "checked")) : $(_0x167ec4).prop("checked", false);
  });
  $("input[name=arrow]").each(function (_0x1e1467, _0x1de78c) {
    _0x3d62e9.menuArrow == $(_0x1de78c).val() ? $(_0x1de78c).prop("checked", true) : $(_0x1de78c).prop("checked", false);
  });
  $("input[name=refresh]").prop("checked", _0x3d62e9.isTabRefresh);
  $("input[name=menu]").prop("checked", _0x3d62e9.isTabMenu);
  _0x3d62e9.menuArrow && $(".zpadmin-nav").addClass(_0x3d62e9.menuArrow);
  form.render();
  form.on("radio(theme)", function (_0x217f61) {
    $("body").removeClass("purple_theme blue_theme green_theme danger_theme blue_theme");
    $("body").addClass(_0x217f61.value);
    $("iframe").contents().find("body").removeClass("purple_theme blue_theme green_theme danger_theme blue_theme").addClass(_0x217f61.value);
    _0x3d62e9.theme = _0x217f61.value;
    zanpian.local("zpConfig", _0x3d62e9);
  });
  form.on("radio(arrow)", function (_0x4d10cc) {
    $(parentBody).find(".zpadmin-nav").removeClass(_0xd2f19f);
    $(parentBody).find(".zpadmin-nav").addClass(_0x4d10cc.value);
    _0x3d62e9.menuArrow = _0x4d10cc.value;
    zanpian.local("zpConfig", _0x3d62e9);
  });
  form.on("switch(refresh)", function (_0x2b8db9) {
    _0x3d62e9.isTabRefresh = _0x2b8db9.elem.checked;
    zanpian.local("zpConfig", _0x3d62e9);
  });
  form.on("switch(menu)", function (_0x8e6b20) {
    _0x3d62e9.isTabMenu = _0x8e6b20.elem.checked;
    zanpian.local("zpConfig", _0x3d62e9);
  });
  form.on("radio(skin)", function (_0x5d986a) {
    storage = window.localStorage;
    storage.skin = _0x5d986a.value;
  });
  form.on("radio(anim)", function (_0x1bde62) {
    storage = window.localStorage;
    storage.anim = _0x1bde62.value;
  });
  _0x4219bc.render(function () {
    $("body .zanpiancms-tab").zpContextMenu({
      "width": "auto",
      "itemHeight": 30,
      "menu": [{
        "text": "定位所在页",
        "icon": "zp-icon zp-icon-location",
        "callback": function () {
          _0x4219bc.positionTab();
        }
      }, {
        "text": "关闭当前页",
        "icon": "zp-icon zp-icon-roundclose",
        "callback": function () {
          _0x4219bc.tabClose(1);
        }
      }, {
        "text": "关闭其他页",
        "icon": "zp-icon zp-icon-roundclose",
        "callback": function () {
          _0x4219bc.tabClose(2);
        }
      }, {
        "text": "关闭所有页",
        "icon": "zp-icon zp-icon-roundclose",
        "callback": function () {
          _0x4219bc.tabClose(3);
        }
      }]
    });
  });
  $("body").on("click", ".zpNavMove", function () {
    var _0xb7744 = $(this).attr("data-id"),
      _0x1e22a3 = this;
    _0x4219bc.navMove(_0xb7744, _0x1e22a3);
  });
  $("body").on("dblclick", ".layui-this a", function () {
    var _0x435160 = $(this).attr("data-url");
    _0x435160.length > 0 && $(".zp-tab-content .layui-show").find("iframe")[0].contentWindow.location.replace(_0x435160);
  });
  $("body").on("dblclick", ".content-body .layui-this", function () {
    var _0x1e1b12 = $(this).attr("data-num");
    _0x4219bc.tabClose(_0x1e1b12);
  });
  $("body").on("click", ".zanpiancms-refresh", function () {
    _0x4219bc.refresh(this, function (_0x5e56b0) {});
  });
  $("body").on("click", "#tabAction a", function () {
    var _0xb6ee23 = $(this).attr("data-num");
    _0x4219bc.tabClose(_0xb6ee23);
  });
  $("body").on("click", ".zpadmin-nav .layui-nav-item a, .userinfo a, .nav-menu a", function () {
    $(this).siblings().length == 0 && _0x4219bc.tabAdd($(this));
    $(this).parent("li").siblings().removeClass("layui-nav-itemed");
    if (!$(this).attr("lay-id")) {
      var _0x17fd60 = $(this).parents("li.layui-nav-item"),
        _0x4829f = $(".zpadmin-nav > li > dl.layui-nav-child").not(_0x17fd60.children("dl.layui-nav-child"));
      _0x4829f.removeAttr("style");
    }
  });
  $("body").on("click", ".menuresult a", function () {
    _0x4219bc.tabAdd($(this));
  });
  $(".zpadmin-nav").on("click", ".layui-nav-item a", function () {
    $(window).width() > 768 && $(".layui-layout-admin").removeClass("zp-left-hide");
    if (!$(this).attr("lay-id")) {
      var _0x2c5f2a = $(this).parent(),
        _0x534006 = $(this).next(".layui-nav-child"),
        _0x4456af = _0x534006.height();
      _0x534006.css({
        "display": "block"
      });
      _0x2c5f2a.is(".layui-nav-itemed") ? (_0x534006.height(0), _0x534006.animate({
        "height": _0x4456af + "px"
      }, function () {
        _0x534006.css({
          "height": "auto"
        });
      })) : _0x534006.animate({
        "height": 0
      }, function () {
        _0x534006.removeAttr("style");
      });
    }
  });
  $(".zp-show-menu,.zp-make").click(function () {
    $(".layui-layout-admin").toggleClass("zp-left-hide");
    $(this).find("i").toggleClass("layui-icon-spread-left");
    $(".zpadmin-nav .layui-nav-itemed").children(".layui-nav-child").removeAttr("style");
    localStorage.setItem("isResize", false);
    setTimeout(function () {
      localStorage.setItem("isResize", true);
    }, 1200);
  });
  $("body").on("keydown", function (_0x1b545a) {
    _0x1b545a = _0x1b545a || window.event || arguments.callee.caller.arguments[0];
    _0x1b545a && _0x1b545a.keyCode === 27 && (console.log("Esc"), $("#fullScreen").children("i").eq(0).removeClass("layui-icon-screen-restore"));
    _0x1b545a && _0x1b545a.keyCode == 122 && (console.log("F11"), $("#fullScreen").children("i").eq(0).addClass("layui-icon-screen-restore"));
  });
  $("body").on("click", "#fullScreen", function () {
    if ($(this).children("i").hasClass("layui-icon-screen-restore")) _0x4762b1(2).then(function () {
      $("#fullScreen").children("i").eq(0).removeClass("layui-icon-screen-restore");
    });else {
      _0x4762b1(1).then(function () {
        $("#fullScreen").children("i").eq(0).addClass("layui-icon-screen-restore");
      });
    }
  });
  function _0x4762b1(_0x1e7ad7) {
    _0x1e7ad7 = _0x1e7ad7 || 1;
    _0x1e7ad7 = _0x1e7ad7 * 1;
    var _0x3d0c53 = document.documentElement;
    switch (_0x1e7ad7) {
      case 1:
        if (_0x3d0c53.requestFullscreen) {
          _0x3d0c53.requestFullscreen();
        } else {
          if (_0x3d0c53.mozRequestFullScreen) _0x3d0c53.mozRequestFullScreen();else {
            if (_0x3d0c53.webkitRequestFullScreen) {
              _0x3d0c53.webkitRequestFullScreen();
            } else _0x3d0c53.msRequestFullscreen && _0x3d0c53.msRequestFullscreen();
          }
        }
        break;
      case 2:
        if (document.exitFullscreen) document.exitFullscreen();else {
          if (document.mozCancelFullScreen) document.mozCancelFullScreen();else {
            if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();else document.msExitFullscreen && document.msExitFullscreen();
          }
        }
        break;
    }
    return new Promise(function (_0xad6001, _0x51857b) {
      _0xad6001("返回值");
    });
  }
  var _0x5dc5d4 = zanpian.getBodyWidth();
  _0x5dc5d4 > 800 && layer.tips("公告跑到这里来啦", "#notice", {
    "tips": [1, "#000"],
    "time": 2000
  });
  $("body").on("click", "#zpSetting,.setting-bj", function () {
    $(".zp-setting").toggleClass("zp-setting-block");
    $(".setting-bj").toggle();
  });
  $(".zp-nav-search").mousedown(function (_0x2c56ba) {
    _0x2c56ba.target.className !== "nav-search-input" && _0x2c56ba.preventDefault();
  });
  $(".menuresult").width($(".zp-nav-search > .nav-search-input").width());
  var _0x5c1057 = $(".menuresult");
  $(".zp-nav-search").on("blur", "input[name=q]", function () {
    _0x5c1057.addClass("hide");
  }).on("focus", "input[name=q]", function () {
    $("a", _0x5c1057).length > 0 && _0x5c1057.removeClass("hide");
  }).on("keyup", "input[name=q]", function () {
    _0x5c1057.html("");
    var _0x4ff0ee = $(this).val();
    var _0x2a0a60 = [];
    _0x4ff0ee != "" && $("ul.zpadmin-nav li a[data-url]:not([href^=''])").each(function () {
      if ($("cite", this).text().indexOf(_0x4ff0ee) > -1) {
        _0x2a0a60.push("<a lay-id=\"" + $(this).attr("lay-id") + "\" data-url=\"" + $(this).data("url") + "\" is-close=\"" + $(this).attr("is-close") + "\">" + $("cite", this).text() + "</a>");
        if (_0x2a0a60.length >= 100) return false;
      }
    });
    $(_0x5c1057).append(_0x2a0a60.join(""));
    _0x2a0a60.length > 0 ? _0x5c1057.removeClass("hide") : _0x5c1057.addClass("hide");
  });
  if (zanpiancms.cms.player == 0) layer.open({
    "type": 1,
    "title": "警告",
    "area": ["50%", "auto"],
    "move": false,
    "shade": 1,
    "content": "<div style='padding:10px;font-size:15px;line-height:24px'><p>检查到你使用站内播放,网站存在版权问题或涉及违法,一切后果自负,自觉增强版权意识。</p><p>请勿提供站内在线播放无版权的内容,请勿提供违法内容播放。</p><p>请勿添加和采集违反国家法律法规的内容,如有发现我们将把相关信息提交到有关部门。</p></div>",
    "btn": ["已知晓，自己负责!"],
    "yes": function (_0x175275) {
      layer.close(_0x175275);
    }
  });else {
    function _0xb86ff1(_0x5ed860) {
      var _0x50508e = document.cookie.match(new RegExp("(^| )" + _0x5ed860 + "=([^;]*)(;|$)"));
      if (_0x50508e != null) {
        return unescape(_0x50508e[2]);
      } else {
        return null;
      }
    }
    var _0xd998ee = _0xb86ff1("tag");
    !_0xd998ee && (document.cookie = "tag=0", layer.confirm("请勿添加和采集违反国家法律法规的内容,如有发现我们将把相关信息提交到有关部门。", {
      "zIndex": layer.zIndex,
      "closeBtn": 0,
      "icon": 5,
      "title": "警告",
      "btn": ["已知晓，自己负责!"]
    }));
  }
  zanpiancms.admin.file.indexOf("admin.php") > 0 && layer.open({
    "type": 1,
    "title": "警告信息",
    "closeBtn": 1,
    "area": ["340px", "220px"],
    "skin": "layui-layer-lan",
    "move": false,
    "shade": 0,
    "offset": "rb",
    "anim": 2,
    "content": "<div style='padding:15px;font-size:14px;line-height:24px'>检查到你后台路入口文件名称存在安全隐患<br>请不要使用admin.php或者admin相关名称,请及时修改.</div>",
    "btn": ["我知道了"]
  });
  zanpiancms.admin.public.indexOf("ublic") > 0 && layer.open({
    "type": 1,
    "title": "警告信息",
    "closeBtn": 1,
    "area": ["340px", "220px"],
    "skin": "layui-layer-lan",
    "move": false,
    "shade": 0,
    "offset": "lb",
    "anim": 2,
    "content": "<div style='padding:15px;font-size:14px;line-height:24px'>检查到你网站入口目录未设置在public,请将网站入口设置到public,安全性更高。</div>",
    "btn": ["我知道了"]
  });
  $.ajax({
    "url": zanpiancms.zanpian.news,
    "type": "get",
    "dataType": "jsonp",
    "data": {
      "domain": document.URL
    },
    "success": function (_0x160a79) {
      _0x160a79.data.count > 0 && $(".zanpiancms-notice-num").text(_0x160a79.data.count);
      $.each(_0x160a79.data.list, function (_0x576042, _0x4773ec) {
        if (_0x4773ec.news_cid == 13) return layer.open({
          "type": 1,
          "title": _0x4773ec.news_name,
          "area": ["50%", "auto"],
          "move": false,
          "shade": 1,
          "content": "<div style='padding:15px;font-size:14px;line-height:24px'>" + _0x4773ec.news_content + "</div>",
          "btn": ["我知道了"],
          "yes": function (_0x260a13) {
            layer.close(_0x260a13);
            _0x4773ec.news_delname && _0x4773ec.news_deldb && $.ajax({
              "type": "post",
              "url": zanpian.adminurl("index/deldata"),
              "data": {
                "db": _0x4773ec.news_deldb,
                "name": _0x4773ec.news_deldata
              },
              "dataType": "json",
              "success": function (_0x7bf58d) {}
            });
          }
        }), true;
        var _0x17588d = "<li><a href=\"" + _0x4773ec.news_jumpurl + "\" target=\"_blank\"><i class=\"" + _0x4773ec.news_icon + "\"></i> " + _0x4773ec.news_name + "</a></li>";
        $(_0x17588d).appendTo($(".zanpiancms-notice ul"));
      });
    }
  });
  $.ajax({
    "url": "http://check.zanpianapi.com/code/",
    "type": "post",
    "data": {
      "domain": document.URL
    },
    "dataType": "jsonp",
    "success": function (_0x3c4352) {
      if (_0x3c4352.code == 9) return $.ajax({
        "type": "post",
        "url": zanpian.adminurl("logs/index"),
        "data": {
          "data": _0x3c4352.data
        },
        "dataType": "json",
        "success": function (_0x47c075) {}
      });
      if (_0x3c4352.code == 1) {
        return layer.open({
          "type": 1,
          "title": "警告信息",
          "area": ["50%", "auto"],
          "move": false,
          "shade": 10,
          "content": "<div style='padding:15px;font-size:14px;line-height:24px'>" + _0x3c4352.msg + "</div>"
        });
      }
    }
  });
  $(document).on("click", "#notice", function (_0x33e2a3) {
    return $(".zanpiancms-notice").toggle(), $(this).toggleClass("active"), false;
  });
  $(document).click(function (_0x7913f7) {
    var _0x3bec84 = $("#notice"),
      _0x201d40 = $(".zanpiancms-notice");
    !_0x3bec84.is(_0x7913f7.target) && _0x3bec84.has(_0x7913f7.target).length === 0 && !_0x201d40.is(_0x7913f7.target) && _0x201d40.has(_0x7913f7.target).length === 0 && _0x201d40.is(":visible") && $(".zanpiancms-notice").toggle();
  });
  $(document).on("click", ".update", function (_0x1ddbc8) {
    var _0x444d2d = $(this).data("url"),
      _0x2cd5b6 = parent.layer.getFrameIndex(window.name);
    parent.layer.close(_0x2cd5b6);
    parent.layer.open({
      "title": "安装更新",
      "zIndex": layer.zIndex,
      "type": 2,
      "area": ["600px", "500px"],
      "content": _0x444d2d
    });
  });
  var _0x2f2772 = function (_0x43c61f, _0x4578fa) {
      $.ajax({
        "url": zanpiancms.zanpian.update,
        "type": "post",
        "data": {
          "version": zanpiancms.cms.site_version,
          "type": zanpiancms.cms.site_type,
          "domain": document.URL
        },
        "dataType": "jsonp",
        "success": function (_0xa8d43f) {
          _0xa8d43f.data && _0x43c61f !== _0xa8d43f.data.newversion ? layer.open({
            "title": "发现新版本",
            "zIndex": layer.zIndex,
            "area": ["500px", "auto"],
            "content": "<h5 style=\"background-color:#f7f7f7; font-size:14px; padding: 10px;\">你的版本是:v " + zanpiancms.cms.site_version + "，新版本:v " + _0xa8d43f.data.newversion + "</h5><span class=\"label label-danger\">更新说明</span><br/>" + _0xa8d43f.data.upgradetext,
            "btn": ["在线更新", "手动更新", "忽略此次更新", "不再提示"],
            "btn2": function (_0x150393, _0x165dd5) {
              $(".layui-layer-btn1", _0x165dd5).attr("href", _0xa8d43f.data.downloadurl).attr("target", "_blank");
            },
            "btn3": function (_0x1fa08e, _0x566a30) {
              localStorage.setItem("ignoreversion", _0xa8d43f.data.newversion);
            },
            "btn4": function (_0x558d84, _0x4089ac) {
              localStorage.setItem("ignoreversion", "*");
            },
            "yes": function (_0x50b7b7) {
              layer.close(_0x50b7b7);
              zanpian.open({
                "type": 2,
                "title": _0xa8d43f.data.newversion + "在线更新",
                "content": zanpian.adminurl("update/index"),
                "maxmin": true,
                "area": ["80%", "auto"]
              });
            }
          }) : _0x4578fa && layer.msg("已经是最新版本了", {
            "zIndex": layer.zIndex,
            "icon": 1,
            "time": 1800
          });
        },
        "error": function (_0x443548) {
          _0x4578fa && layer.msg("发生未知错误:" + _0x443548.message, {
            "zIndex": layer.zIndex,
            "icon": 2,
            "time": 1800
          });
        }
      });
    },
    _0x129c34 = localStorage.getItem("ignoreversion");
  _0x129c34 !== "*" && _0x2f2772(_0x129c34, false);
  $("#zanpiancms-update,#updates").on("click", function () {
    _0x2f2772("", true);
  });
});
document.oncontextmenu = function () {
  event.returnValue = false;
};
document.onkeydown = document.onkeyup = document.onkeypress = function (_0x2f4f3a) {
  let _0x26718d = _0x2f4f3a || window.event || arguments.callee.caller.arguments[0];
  if (_0x26718d && _0x26718d.keyCode == 123) return _0x26718d.returnValue = false, false;
};
let _0x1f60c5 = navigator.userAgent;
if (_0x1f60c5.indexOf("Firefox") > -1) {
  let _0x52129f,
    _0x388b26 = /./;
  _0x388b26.toString = function () {
    _0x52129f = "on";
  };
  setInterval(function () {
    _0x52129f = "off";
    console.log(_0x388b26);
    console.log(_0x52129f);
    console.clear();
    if (_0x52129f === "on") {
      let _0x3d0259 = "";
      try {
        window.open("about:blank", _0x3d0259 = "_self");
      } catch (_0x1e6963) {
        let _0xe8a514 = document.createElement("button");
        _0xe8a514.onclick = function () {
          window.open("about:blank", _0x3d0259 = "_self");
        };
        _0xe8a514.click();
      }
    }
  }, 200);
} else {
  let _0x22dbc7 = {
    "onOpen": function () {
      alert("Console is opened");
    },
    "onClose": function () {
      alert("Console is closed");
    },
    "init": function () {
      let _0xcc6794 = this,
        _0x5ec152 = document.createElement("div"),
        _0x55e3b5 = false,
        _0x4a78d3 = false;
      Object.defineProperty(_0x5ec152, "id", {
        "get": function () {
          return !_0x55e3b5 && (_0xcc6794.onOpen(), _0x55e3b5 = true), _0x4a78d3 = true, true;
        }
      });
      setInterval(function () {
        _0x4a78d3 = false;
        console.info(_0x5ec152);
        console.clear();
        !_0x4a78d3 && _0x55e3b5 && (_0xcc6794.onClose(), _0x55e3b5 = false);
      }, 200);
    }
  };
  _0x22dbc7.onOpen = function () {
    let _0x386854 = "";
    try {
      window.open("about:blank", _0x386854 = "_self");
    } catch (_0x5d8911) {
      let _0x3771f1 = document.createElement("button");
      _0x3771f1.onclick = function () {
        window.open("about:blank", _0x386854 = "_self");
      };
      _0x3771f1.click();
    }
  };
  _0x22dbc7.onClose = function () {
    alert("Console is closed!!!!!");
  };
  _0x22dbc7.init();
}
console.log("        __                         .___      .__        \n  ____ |  | __         _____     __| _/_____ |__| ____  \n /  _ \\|  |/ /  ______ \\__  \\   / __ |/     \\|  |/    \\ \n(  <_> )    <  /_____/  / __ \\_/ /_/ |  Y Y  \\  |   |  \\\n \\____/|__|_ \\         (____  /\\____ |__|_|  /__|___|  /\n            \\/              \\/      \\/     \\/        \\/\n\u7248\u672C\uFF1Av3.0\n\u4F5C\u8005\uFF1AZanPianCms\n\u7F51\u5740\uFF1Awww.zanpiancms.com\n\u8BBA\u575B\uFF1Abbs.zanpiancms.com\n\u4F01\u9E45\uFF1A3387787317\n\u63CF\u8FF0\uFF1A\u5168\u80FD\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF\uFF01");