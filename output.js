//Thu Jan 16 2025 13:33:07 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
$(document).ready(function () {
  _0x17d811({
    "companyName": "<strong>干娱科技旗下梦幻大极品1yn.com</strong>",
    "ICP": "<a href='https://beian.miit.gov.cn/' style='text-decoration:underline;'>ICP备案号：渝ICP备2023012306号-1</a>",
    "textColor": "#716858",
    "aColor": "#fbdab9",
    "aHoverColor": "#deb41d",
    "background": "#000"
  });
  $(".gamePicShow").hotNews();
  $(".gamePlayShow").find(".swiper").gameSwiper({
    "autoplay": {
      "delay": 6000
    },
    "pagination": {
      "el": ".swiper-pagination",
      "clickable": true
    },
    "navigation": {
      "nextEl": ".gamePlayShow .swiper-button-next",
      "prevEl": ".gamePlayShow .swiper-button-prev"
    }
  });
  $(".module-banner").bannerSlide();
  $("#gameMap").swiperTab();
  $(".table-style").showGameEquipment();
  $(".form-select").each(function (_0x56289a, _0x1ee03d) {
    $(_0x1ee03d).formSelect();
  });
  if (!/msie [6|7|8|9]/i.test(navigator.userAgent)) {
    $("#music").music();
  }
  $("#Floatingbar").on("click", "._btn_showhidden", function () {
    var _0x5baa4f = $(this).text();
    if (_0x5baa4f == "收起 >") {
      $(this).text("展开 <");
      $("#Floatingbar").stop(true, false).animate({
        "right": "-148px"
      }, 300);
    } else {
      $(this).text("收起 >");
      $("#Floatingbar").stop(true, false).animate({
        "right": "0px"
      }, 300);
    }
  });
  $(".btn_backtop,.btnBackTop").on("click", function () {
    $("html,body").animate({
      "scrollTop": 0
    }, 1000);
    return false;
  });
});
$.fn.music = function () {
  var _0x3fcaf2 = $(this);
  if (_0x3fcaf2.length == 0) return false;
  var _0x34ba1c = _0x3fcaf2.find("audio"),
    _0x54e71e = $(".music-img");
  _0x34ba1c[0].load();
  _0x34ba1c[0].play();
  document.addEventListener("WeixinJSBridgeReady", function () {
    _0x34ba1c.play();
  }, false);
  _0x3fcaf2.find(".music").click(function () {
    if (_0x54e71e.is(".ro")) {
      _0x54e71e.removeClass("ro");
      _0x34ba1c[0].pause();
    } else {
      _0x54e71e.addClass("ro");
      _0x34ba1c[0].play();
    }
  });
};
$.fn.formSelect = function () {
  var _0x4f85dd = this;
  if (_0x4f85dd.length === 0) {
    return;
  }
  var _0x294612 = _0x4f85dd.find("._selectName");
  var _0x1c66f5 = _0x4f85dd.find("._selectList");
  var _0x5244ff = _0x1c66f5.find("span");
  var _0x301a68 = _0x294612.find("input[type=\"hidden\"]");
  var _0x5c0a15 = parseInt(_0x1c66f5.attr("data-maxshow")) || 5;
  var _0x4e39d0 = "";
  var _0x49c1da = _0x5244ff.filter("._default");
  if (_0x49c1da.length > 0) {
    _0x4e39d0 = _0x49c1da.text();
    defaultFormVal = _0x49c1da.data("value");
  }
  if (_0x4e39d0 !== "") {
    _0x294612.find("strong").text(_0x4e39d0);
    _0x301a68.val(defaultFormVal);
  }
  _0x4f85dd.bind("mouseenter", function () {
    $(this).addClass("__active");
    if (_0x3df7ce == 0) {
      _0x3df7ce = _0x5244ff.first().outerHeight();
      _0x1c66f5.css("max-height", _0x3df7ce * _0x5c0a15);
    }
  });
  _0x4f85dd.bind("mouseleave", function () {
    $(this).removeClass("__active");
  });
  _0x5244ff.on("click", function () {
    var _0x39bb37 = $(this).text();
    var _0x311b2b = $(this).data("value");
    _0x294612.find("strong").text(_0x39bb37);
    _0x301a68.val(_0x311b2b);
    _0x4f85dd.removeClass("__active");
  });
  var _0x3df7ce = _0x5244ff.first().outerHeight();
  _0x1c66f5.css("max-height", _0x3df7ce * _0x5c0a15);
  return _0x4f85dd;
};
$.fn.showGameEquipment = function () {
  var _0x4b3a17 = this;
  if (!_0x4b3a17.length) {
    return;
  }
  var _0x3bc0ee = $("._showBigPic");
  var _0x38f282 = _0x4b3a17.find("li[data-bigpic]");
  var _0x3b26fb = "";
  _0x38f282.hover(function () {
    _0x3b26fb = $(this).data("bigpic");
    if (typeof _0x3b26fb === "undefined") {
      _0x3bc0ee.hide();
      console.log("没有大图地址");
      return;
    }
    _0x3bc0ee.show();
    _0x3bc0ee.find("img").attr("src", _0x3b26fb);
    var _0x3c2482 = {};
    var _0x33efc1 = new Image();
    _0x33efc1.src = _0x3b26fb;
    _0x33efc1.onload = function () {
      _0x3c2482 = {
        "width": _0x33efc1.width,
        "height": _0x33efc1.height
      };
    };
    $(document).on("mousemove.zbShow", function (_0xac8902) {
      var _0x30df2b = $(window).scrollTop();
      var _0x154984 = $(window).height();
      if (_0x3c2482.height + _0xac8902.pageY - _0x30df2b > _0x154984) {
        _0x3bc0ee.css({
          "top": _0xac8902.pageY - _0x30df2b - _0x3c2482.height - 20,
          "left": _0xac8902.pageX + 20
        });
      } else {
        _0x3bc0ee.css({
          "top": _0xac8902.pageY - _0x30df2b + 20,
          "left": _0xac8902.pageX + 20
        });
      }
    });
  }, function () {
    _0x3bc0ee.hide();
    $(document).off("mousemove.zbShow");
  });
};
$.fn.swiperTab = function () {
  var _0x463fc5 = this;
  if (!_0x463fc5.length) {
    return;
  }
  var _0x13dade = _0x463fc5.find("._more");
  var _0x5cc4be = _0x463fc5.find(".item-gamemap--group .item-gamemap");
  var _0x1e0f49 = _0x463fc5.find(".swiper-container");
  var _0x233c21 = new Swiper(_0x1e0f49, {
    "slidesPerView": 1,
    "spaceBetween": 0,
    "autoHeight": true,
    "loop": true
  });
  _0x5cc4be.on("click", function (_0x51d1f8) {
    _0x51d1f8.preventDefault();
    var _0x4a1f12 = $(this).index();
    _0x233c21.slideToLoop(_0x4a1f12);
    $(this).addClass("_active").siblings().removeClass("_active");
    var _0x41be39 = $(this).find("a").attr("data-morelink");
    _0x13dade.attr("href", _0x41be39);
  });
  _0x233c21.on("slideChange", function () {
    var _0xa70f4b = _0x233c21.realIndex;
    var _0x7edd23 = _0x5cc4be.filter(":eq(" + _0xa70f4b + ")");
    var _0x1f63c1 = _0x7edd23.find("a").attr("data-morelink");
    _0x13dade.attr("href", _0x1f63c1);
    _0x7edd23.addClass("_active").siblings().removeClass("_active");
  });
};
$.fn.bannerSlide = function () {
  var _0x2ed3a1 = this;
  if (!_0x2ed3a1.length) {
    return;
  }
  _0x2ed3a1.each(function (_0x524009, _0x56d299) {
    var _0x4ca3a0 = $(_0x56d299).find(".swiper");
    var _0x50d732 = new Swiper(_0x4ca3a0, {
      "navigation": {
        "nextEl": ".swiper-button-next",
        "prevEl": ".swiper-button-prev"
      }
    });
    _0x50d732.on("slideChange", function () {
      $(_0x56d299).find(".module-banner-nav li").eq(_0x50d732.activeIndex).addClass("active").siblings().removeClass("active");
    });
    setTimeout(() => {
      _0x50d732.slideTo(0);
    }, 300);
    $(_0x56d299).find(".module-banner-nav li").bind("click", function () {
      $(this).addClass("active").siblings().removeClass("active");
      _0x50d732.slideTo($(this).index());
    });
  });
};
$.fn.gameSwiper = function (_0x141f00) {
  var _0xd1f383 = this;
  if (_0xd1f383.length === 0) {
    return;
  }
  if (typeof _0x141f00 != "undefined") {
    new Swiper(_0xd1f383, _0x141f00);
  } else {
    new Swiper(_0xd1f383, {
      "effect": "fade",
      "lazy": true,
      "pagination": {
        "el": ".swiper-pagination",
        "type": "fraction"
      },
      "navigation": {
        "nextEl": ".swiper-button-next",
        "prevEl": ".swiper-button-prev"
      }
    });
  }
};
$.fn.hotNews = function () {
  var _0x515661 = $(this);
  if (_0x515661.length == 0) return false;
  new Swiper(_0x515661.find(".swiper"), {
    "autoplay": 3000,
    "pagination": {
      "el": ".swiper-pagination",
      "clickable": true
    },
    "navigation": {
      "nextEl": ".gamePicShow .swiper-button-next",
      "prevEl": ".gamePicShow .swiper-button-prev"
    },
    "autoplay": true,
    "slidesPerView": 3,
    "spaceBetween": 26,
    "pagination": false
  });
};
$.fn.Tab = function (_0xdddfc9) {
  var _0x1d7c1b = $(this);
  var _0x3a3329 = _0xdddfc9.labselect.replace(".", "");
  if (_0x1d7c1b.length == 0) return false;
  if (_0x1d7c1b.find(_0xdddfc9.lilab).length == 0) return false;
  _0x1d7c1b.each(function (_0x4b388d, _0x43e9e4) {
    _0x1d7c1b = $(this);
    if (_0x1d7c1b.find(_0xdddfc9.labselect).length == 0) {
      _0x1d7c1b.find(_0xdddfc9.lilab + ":eq(0)").addClass(_0x3a3329);
    }
    _0x1d7c1b.find(_0xdddfc9.lilab).each(function (_0x4b388d, _0x43e9e4) {
      if (!$(this).is(_0xdddfc9.labselect)) {
        _0x1d7c1b.siblings(_0xdddfc9.Tabname + ":eq(" + _0x4b388d + ")").hide();
      }
    });
    _0x1d7c1b.find(_0xdddfc9.lilab).bind(_0xdddfc9.labaction + ".action", function () {
      var _0x4b388d = $(this).index();
      if (_0x1d7c1b.siblings(_0xdddfc9.Tabname + ":visible").is(":animated")) {
        return false;
      }
      if ($(this).is(_0xdddfc9.labselect)) return false;
      var _0xbd18ec = $(this).siblings(_0xdddfc9.labselect).index();
      $(this).addClass(_0x3a3329).siblings().removeClass(_0x3a3329);
      _0xdddfc9.animate(_0x4b388d, _0xbd18ec, _0xdddfc9.animatename);
      return _0xdddfc9.labaction == "click" ? false : true;
    });
    _0xdddfc9.animate = function (_0x4b388d, _0x2c54d1, _0x3893f5) {
      switch (_0x3893f5) {
        case "fade":
          _0x1d7c1b.siblings(_0xdddfc9.Tabname + ":visible").hide();
          _0x1d7c1b.siblings(_0xdddfc9.Tabname + ":eq(" + _0x4b388d + ")").fadeIn(_0xdddfc9.animateTime);
          break;
        case "scroll_x":
          _0x1d7c1b.parent().css({
            "position": "relative",
            "overflow": "hidden"
          });
          var _0x440a0f = _0x1d7c1b.siblings(_0xdddfc9.Tabname + ":visible");
          var _0x212a22 = "100%",
            _0x4ff650 = "100%";
          if (_0x2c54d1 > _0x4b388d) {
            _0x212a22 = "100%";
            _0x4ff650 = "-100%";
          } else {
            _0x212a22 = "-100%";
            _0x4ff650 = "100%";
          }
          if (_0xdddfc9.mode == "delay") {
            _0x440a0f.css({
              "position": "relative",
              "width": "100%"
            }).stop(true, false).animate({
              "left": _0x212a22,
              "opacity": 0
            }, _0xdddfc9.animateTime, function () {
              $(this).css({
                "position": "static",
                "left": "auto",
                "opacity": 1,
                "display": "none"
              });
            });
            setTimeout(function () {
              _0x1d7c1b.siblings(_0xdddfc9.Tabname + ":eq(" + _0x4b388d + ")").css({
                "position": "relative",
                "left": _0x4ff650,
                "display": "block",
                "opacity": 0
              }).stop(true, false).animate({
                "left": 0,
                "opacity": 1
              }, _0xdddfc9.animateTime, function () {
                $(this).css({
                  "top": 0,
                  "position": "static"
                });
              });
            }, _0xdddfc9.animateTime);
          } else {
            _0x440a0f.css({
              "position": "absolute",
              "width": "100%",
              "left": _0x440a0f.position().left,
              "top": _0x440a0f.position().top
            }).stop(true, false).animate({
              "left": _0x212a22,
              "opacity": 0
            }, _0xdddfc9.animateTime, function () {
              $(this).css({
                "position": "relative",
                "top": "auto",
                "left": "auto",
                "opacity": 1,
                "display": "none"
              });
            });
            _0x1d7c1b.siblings(_0xdddfc9.Tabname + ":eq(" + _0x4b388d + ")").css({
              "position": "relative",
              "left": _0x4ff650,
              "display": "block",
              "opacity": 0
            }).stop(true, false).animate({
              "left": 0,
              "opacity": 1
            }, _0xdddfc9.animateTime, function () {
              $(this).css({
                "top": 0,
                "position": "relative"
              });
            });
          }
          break;
        case "none":
          _0x1d7c1b.siblings(_0xdddfc9.Tabname + ":visible").hide();
          _0x1d7c1b.siblings(_0xdddfc9.Tabname + ":eq(" + _0x4b388d + ")").show();
          break;
      }
    };
  });
};
var _0x17d811 = function (_0x263476) {
  var _0x22c458 = {
    "companyName": "自定义",
    "textColor": "#c4c4c3",
    "aColor": "#f8e28d",
    "aHoverColor": "#c7171a",
    "footerStyle": _0x113e31,
    "background": "#000000",
    "zindex": 14900
  };
  _0x263476 = $.extend({}, _0x22c458, _0x263476);
  var _0x113e31 = "<style id='footerStyle' type='text/css'>#footer{position:relative!important;height:66px;min-width:1350px;z-index:" + _0x263476.zindex + "!important;background-color:" + _0x263476.background + ";line-height:66px;color:" + _0x263476.textColor + ";font-size:12px;margin-left:auto;margin-right:auto;}" + "#footer p._copyright{float:left;}" + "#footer p._copyright strong{color:#fbdab9;}" + "#footer p._copyright a{color:#716858;}" + "#footer p._copyright a:hover{color:#9e9688;}" + "#footer p._technology{float:right;}" + "#footer p._technology a{color:" + _0x263476.aColor + ";text-decoration:underline;font-weight:bold;font-family:'Times New Roman', Times, serif;}" + "#footer p._technology a:hover{color:" + _0x263476.aHoverColor + ";}" + "</style>";
  var _0x4994f1 = "display:block!important;position:relative!important;";
  var _0x1ac750 = "<footer id=\"footer\" style=\"z-index:" + _0x263476.zindex + "!important;" + _0x4994f1 + "\">{footerContent}</footer>";
  var _0x26cf8c = _0x263476.companyName;
  var _0xe6026 = new Date();
  var _0x2eaf04 = _0xe6026.getFullYear();
  var _0x1588f1 = "<div class=\"center\"  style=\"" + _0x4994f1 + "margin:0 auto!important;\"><p class=\"_copyright\"  style=\"" + _0x4994f1 + "margin:0!important;\">COPYRIGHT &copy; 2003-" + _0x2eaf04 + "  ALL RIGHTS RESERVED. " + _0x26cf8c + " 版权所有   " + _0x263476.ICP + "</p><p  style=\"" + _0x4994f1 + "margin:0!important;\" class=\"_technology\">本站由  <a href=\"http://douglass.cn\" target=\"_blank\" title=\"斌宸道格拉斯\">DOUGLASS.CN</a>  独家设计制作</p>";
  var _0x2f24e2 = {
    "index": _0x263476.zindex,
    "style": _0x113e31,
    "htmls": _0x1ac750,
    "htmlContent": _0x1588f1,
    "selfhtml": _0x1ac750.replace("{footerContent}", _0x1588f1)
  };
  $.fn.footer(_0x2f24e2);
};
$.fn.footer = function (_0x472491) {
  return function (_0x472491) {
    var _0x129682 = false;
    var _0x1c1939 = function () {
      $("#footer").empty().remove();
      $("head").append(_0x472491.style);
      $("body").append(_0x472491.selfhtml);
    };
    var _0x4bff9a = function () {
      $("body>*").each(function () {
        var _0x168fd0 = parseInt($(this).css("z-index"));
        if (_0x168fd0 > _0x472491.index) {
          $(this).remove();
        }
      });
    };
    var _0x224e4d = function () {
      $("body>* div").each(function () {
        var _0x429435 = $(this).css("position").toLowerCase(),
          _0x29f9bc = parseInt($(this).css("z-index"));
        if (_0x429435 == "fixed" && _0x29f9bc > _0x472491.index) {
          $(this).remove();
        }
      });
      _0x129682 = false;
    };
    var _0x5cea0a = function (_0x343d0d, _0x5c0c28) {
      return Math.floor(Math.random() * (_0x5c0c28 - _0x343d0d + 1) + _0x343d0d);
    };
    var _0x45b187 = function () {
      var _0x17531f = $("#footer");
      var _0x30503d = $("#footerStyle");
      if (_0x17531f.length === 0) {
        $("body").append(_0x472491.selfhtml);
      }
      if (_0x30503d.length === 0) {
        $("head").append(_0x472491.style);
      }
      if (!_0x17531f.is(":visited")) {
        _0x17531f.show();
      }
      if (_0x17531f.css("position").toLowerCase() != "relative") {
        _0x17531f.css({
          "position": "relative!important",
          "margin": "0",
          "bottom": 0,
          "width": "100%",
          "left": 0
        });
      }
    };
    setInterval(function () {
      if (_0x129682 === false) {
        _0x45b187();
      }
    }, _0x5cea0a(800, 1000));
    setInterval(function () {
      _0x129682 = true;
      var _0x5e4113 = $("#footer");
      if (_0x5e4113.length > 0) {
        _0x5e4113.html(_0x472491.htmlContent);
        _0x224e4d();
      }
    }, _0x5cea0a(2000, 6000));
    _0x1c1939();
    _0x4bff9a();
  }(_0x472491);
};