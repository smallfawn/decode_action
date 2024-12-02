//Mon Dec 02 2024 05:07:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
$(document).ready(function () {
  'use strict';

  var _0x1405af = $(window),
    _0x3c9ec7 = "010-89177861",
    _0x1b9351 = "/",
    _0x3c155a = $("body");
  $(".T-header .num").length && (_0x3c9ec7 = $(".T-header .num").text(), $(".T-footer .Ftel").html(_0x3c9ec7));
  _0x3c155a.on("mouseenter mouseleave", ".has-sub-nav", function (_0x134b29) {
    var _0xc315b5 = $(_0x134b29.target).closest(".has-sub-nav");
    _0xc315b5.addClass("show");
    _0x3c155a.addClass("show");
    setTimeout(function () {
      _0xc315b5[_0xc315b5.is(":hover") ? "addClass" : "removeClass"]("show");
      _0x3c155a[_0xc315b5.is(":hover") ? "addClass" : "removeClass"]("show");
    }, 150);
  });
  $(".background-image-holder").each(function () {
    var _0x14253d = $(this).find("img").attr("src");
    $(this).css("background-image", "url(\"" + _0x14253d + "\")");
    $(this).find("img").hide();
  });
  var _0x103c26 = $("[data-animate]");
  if (_0x103c26.length > 0) {
    _0x103c26.each(function () {
      var _0x5a5a22 = $(this),
        _0x5a39cc = _0x5a5a22.attr("data-animate-out"),
        _0x471d7 = _0x5a5a22.attr("data-delay"),
        _0x654242 = _0x5a5a22.attr("data-delay-out"),
        _0x43b02e = 0,
        _0x4c055c = 3000;
      _0x471d7 ? _0x43b02e = Number(_0x471d7) + 500 : _0x43b02e = 500;
      _0x5a39cc && _0x654242 && (_0x4c055c = Number(_0x654242) + _0x43b02e);
      if (!_0x5a5a22.hasClass("animated")) {
        _0x5a5a22.addClass("not-animated");
        var _0x136439 = _0x5a5a22.attr("data-animate");
        _0x5a5a22.appear(function () {
          setTimeout(function () {
            _0x5a5a22.removeClass("not-animated").addClass(_0x136439 + " animated");
          }, _0x43b02e);
          _0x5a39cc && setTimeout(function () {
            _0x5a5a22.removeClass(_0x136439).addClass(_0x5a39cc);
          }, _0x4c055c);
        }, {
          "accX": 0,
          "accY": -120
        }, "easeInCubic");
      }
    });
  }
  $(".sticker").stick_in_parent({
    "offset_top": 0
  });
  $(".mudi-price").each(function () {
    var _0xdfedbf = $(this),
      _0x524804 = _0xdfedbf.children("span").html();
    if (isNaN(_0x524804) || _0x524804 == "0") {
      _0xdfedbf.addClass("no");
    }
  });
  $(".date-downcount").each(function () {
    var _0x133bf2 = $(this),
      _0xed431f = _0x133bf2.attr("data-date");
    if (!_0xed431f) {
      _0xed431f = new Date();
      var _0x166f17 = 10,
        _0x5d71c0 = _0xed431f.getMonth(),
        _0xc70593 = _0xed431f.getFullYear(),
        _0x49bd97 = " 12:00:00";
      _0x5d71c0 == "11" ? (_0x5d71c0 = 1, _0xc70593 += 1) : _0x5d71c0 += 2;
      _0x133bf2.downCount({
        "date": _0x5d71c0 + "/" + _0x166f17 + "/" + _0xc70593 + _0x49bd97
      });
    } else _0xed431f = _0xed431f + " 23:59:59", _0x133bf2.downCount({
      "date": _0xed431f
    });
  });
  $(".autoMenu").each(function () {
    var _0x1b2e81 = $(this);
    _0x1b2e81.find("li").length > 0 && _0x1b2e81.addClass("show");
  });
  $(".navbar a.link,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
    "highlightSelector": "a.link",
    "offset": 0,
    "scrollSpeed": 500,
    "scrollEasing": "easeInOutExpo"
  });
  $("[data-scrollto]").click(function () {
    var _0x59f84a = $(this),
      _0x3e9526 = _0x59f84a.attr("data-scrollto"),
      _0x5887f7 = _0x59f84a.attr("data-speed"),
      _0x2b140f = _0x59f84a.attr("data-offset"),
      _0x56a501 = _0x59f84a.attr("data-easing");
    return !_0x5887f7 && (_0x5887f7 = 800), !_0x2b140f && (_0x2b140f = 50), !_0x56a501 && (_0x56a501 = "easeOutQuad"), $("html,body").stop(true).animate({
      "scrollTop": $(_0x3e9526).offset().top - Number(_0x2b140f)
    }, Number(_0x5887f7), _0x56a501), false;
  });
  $("#T-A_2023 img").each(function () {
    var _0x2dcc1b = $(this).attr("title"),
      _0x5dd885 = $(this).attr("src"),
      _0x41a7ea = $(this).attr("height");
    _0x2dcc1b && (_0x2dcc1b = "<i class='news-pic-title'>" + _0x2dcc1b + "</i>", $(this).after(_0x2dcc1b));
    _0x41a7ea && $(this).attr("height", "auto");
    var _0x512455 = "<a class=\"spotlight\" href=\"" + _0x5dd885 + "\"></a>";
    $(this).wrap(_0x512455);
  });
  if ($("#T-A_2023").length && $("#T-A-ban").length) {
    var _0x4b63fe = $("#T-A_2023"),
      _0x3e6861 = $("#T-A-ban"),
      _0x2d20f2 = _0x3e6861.data("img"),
      _0x3b7387 = _0x3e6861.data("title"),
      _0x2dd5a9 = _0x3e6861.data("url"),
      _0x3264e2 = _0x3e6861.data("desc"),
      _0x678224 = "<div class=\"relation_ban\"><div class=\"img\"><img src=\"" + _0x2d20f2 + "\"></div><div class=\"txt\"><div class=\"title\">" + _0x3b7387 + "</div><div class=\"desc\">" + _0x3264e2 + "</div><div class=\"btn-wrap\"><a href=\"" + _0x2dd5a9 + "\" target=\"_blank\">查看详情</a><span>咨询客服</span></div></div>",
      _0x1f7c1b = _0x4b63fe.find("p").length;
    _0x1f7c1b > 2 ? _0x4b63fe.find("p").eq(parseInt(_0x1f7c1b / 2) - 1).after(_0x678224) : _0x4b63fe.find("p").eq(0).after(_0x678224);
  }
  $(".Tian-sfq").slide({
    "titCell": ".title",
    "targetCell": ".desc",
    "defaultIndex": 0,
    "effect": "slideDown",
    "delayTime": 120,
    "easing": "easeOutCirc"
  });
  $(".Tian-sslid").slide({
    "defaultIndex": 1
  });
  $(".Tsx-swiper_2023").each(function (_0x935a0a) {
    var _0x3800b4 = $(this),
      _0x324f3a = _0x3800b4.data("direction"),
      _0x4faebc = _0x3800b4.data("slidesperview"),
      _0x1a1cd9 = _0x3800b4.data("speed"),
      _0x2167ee = _0x3800b4.data("spacebetween"),
      _0xb6d06 = _0x3800b4.data("autoplay"),
      _0x594c9c = _0x3800b4.data("loop");
    !_0x4faebc && (_0x4faebc = 1);
    !_0x1a1cd9 && (_0x1a1cd9 = 800);
    !_0x2167ee && (_0x2167ee = 0);
    !_0x324f3a && (_0x324f3a = "horizontal");
    _0xb6d06 && (_0xb6d06 = Number(_0xb6d06));
    if (!_0x594c9c) {
      _0x594c9c = false;
    }
    if (_0xb6d06) var _0x59ea18 = new Swiper($(this), {
      "direction": _0x324f3a,
      "speed": Number(_0x1a1cd9),
      "autoplay": {
        "delay": _0xb6d06,
        "disableOnInteraction": false
      },
      "loop": _0x594c9c,
      "slidesPerView": _0x4faebc,
      "spaceBetween": Number(_0x2167ee),
      "pagination": {
        "el": ".swiper-pagination",
        "clickable": true
      },
      "navigation": {
        "nextEl": ".swiper-button-next",
        "prevEl": ".swiper-button-prev"
      }
    });else {
      var _0x59ea18 = new Swiper($(this), {
        "direction": _0x324f3a,
        "speed": Number(_0x1a1cd9),
        "loop": _0x594c9c,
        "slidesPerView": _0x4faebc,
        "spaceBetween": Number(_0x2167ee),
        "pagination": {
          "el": ".swiper-pagination",
          "clickable": true
        },
        "navigation": {
          "nextEl": ".swiper-button-next",
          "prevEl": ".swiper-button-prev"
        }
      });
    }
    return;
  });
  var _0x431b9d = new Swiper(".shengtai-swiper-header", {
    "slidesPerView": "auto"
  });
  $(".T-footer_sticker").each(function () {
    var _0x5e6d85 = $(this),
      _0xcb2626 = new Date().getDay(),
      _0x5b9c24 = _0x1b9351 + "bjlypc-static/images/T-rand-ban/kf-" + _0xcb2626 + ".png",
      _0x2139f3 = "选墓就找北京陵园网",
      _0x39e1cd = "<span>陵园专车免费接送</span><span>购墓100%享优惠</span><span>顾问全程解惑答疑</span>",
      _0x124c1b = _0x3c9ec7,
      _0xc82ed1 = "咨询陵园客服",
      _0x5c49df = "点击查看详情",
      _0x1b1e12 = "",
      _0x2fd304 = "";
    _0x3c155a.hasClass("T-fuwu_body") && (_0x2139f3 = "24小时殡葬服务", _0x39e1cd = "<span>专业团队 1小时到达</span><span>全程陪同办理</span><span>协议保障 收费透明</span>", _0x5b9c24 = _0x1b9351 + "bjlypc-static/images/T-rand-ban/kf-fuwu-1.png", _0xc82ed1 = "咨询服务顾问");
    if (_0x3c155a.hasClass("T-yongpin_body")) {
      _0x2139f3 = "殡葬用品同城闪送";
      _0x5b9c24 = _0x1b9351 + "bjlypc-static/images/T-rand-ban/kf-yongpin-1.png";
      _0x39e1cd = "<span>真材实料 假一赔十</span><span>用心设计匠心制作</span><span>北京城区可闪送</span>";
      _0xc82ed1 = "咨询用品顾问";
    }
    _0x5e6d85.data("title") && (_0x2139f3 = _0x5e6d85.data("title"));
    if (_0x5e6d85.data("tel")) {
      _0x124c1b = _0x5e6d85.data("tel");
    }
    _0x5e6d85.data("desc") && (_0x39e1cd = _0x5e6d85.data("desc"));
    _0x5e6d85.data("zxbtntxt") && (_0xc82ed1 = _0x5e6d85.data("zxbtntxt"));
    _0x5e6d85.data("img") && _0x5e6d85.data("img").length > 10 && (_0x5b9c24 = _0x5e6d85.data("img"), _0x5e6d85.addClass("tsx_c"));
    if (_0x5e6d85.data("img") && _0x5e6d85.data("btnlink")) {}
    _0x1b1e12 = "<span class=\"btn btn-zixun\" onclick=\"return ECHAT.iconChat(this)\">" + _0xc82ed1 + "</span>";
    _0x5e6d85.data("zxbtnhide") && (_0x1b1e12 = "");
    (_0x3c155a.hasClass("T-lingyuan_body") || _0x3c155a.hasClass("T-muxing_body")) && (_0x1b1e12 = "<a href=\"#yuyue-dialog\" data-toggle=\"modal\" class=\"btn btn-red\"><i class=\"ly-jiaoche mr-1\"></i>预约看墓</a>" + _0x1b1e12);
    _0x5e6d85.data("btnlink") && (_0x1b1e12 = "<a class=\"btn btn-gold\" href=\"" + _0x5e6d85.data("btnlink") + "\" target=\"_blank\">" + _0x5c49df + "</a>" + _0x1b1e12);
    _0x2fd304 = "<div class=\"T-container\"><div class=\"img\"><img src=\"" + _0x5b9c24 + "\"/></div><div class=\"title\">" + _0x2139f3 + "</div><div class=\"desc\">" + _0x39e1cd + "</div><div class=\"telnum\">" + _0x124c1b + "</div><div class=\"btnwrap\">" + _0x1b1e12 + "</div></div>";
    _0x2fd304.length && _0x5e6d85.append(_0x2fd304);
  });
  if ($(".T-footer .footer_img_a").length) {
    var _0x128b52 = "<svg class=\"c-badge-outline\" data-scroll-id=\"badge-scroll\" width=\"10cm\" height=\"10cm\" viewBox=\"0 0 1000 1000\" preserveAspectRatio=\"xMinYMin\"><defs><path id=\"TextPath\" d=\"M 250 500 A 250,250 0 1 1 250 500.0001\" /></defs><text class=\"circle-text\" x=\"90\" y=\"0\" text-anchor=\"middle\"><textPath xlink:href=\"#TextPath\" startOffset=\"50%\">beijinglingyuan.com</textPath></text></svg><div class=\"hello\">R</div>";
    $(".T-footer .footer_img_a").append(_0x128b52);
  }
  _0x3c155a.hasClass("T-fuwu_body") && ($(".T-footer .Ftitle_a").html("北京陵园网<sup>®</sup>陪您一同送别亲人"), $(".T-footer .Ftitle_b").html("24小时全程服务，逝者安息，生者安心"), $(".T-footer .Ftitle_d").html("服务专员为您详细解答殡葬服务一条龙流程"));
  _0x3c155a.hasClass("T-yongpin_body") && ($(".T-footer .Ftitle_a").html("北京陵园网<sup>®</sup>提供优质骨灰盒及寿衣"), $(".T-footer .Ftitle_b").html("上百个品种，良心选料、精心设计，匠心制造"), $(".T-footer .Ftitle_d").html("销售专员为您详细解答如何选骨灰盒、寿衣等殡葬用品"));
  _0x3c155a.hasClass("T-haisa_body") && ($(".T-footer .Ftitle_a").html("北京陵园网<sup>®</sup>提供高效的付费海撒服务"), $(".T-footer .Ftitle_b").html("无需户口 无需等待 告别喧嚣拥挤 包船海撒"), $(".T-footer .Ftitle_d").html("服务专员为您详细介绍海撒套餐服务内容"));
  _0x1405af.on("scroll", function () {
    $(this).scrollTop() > 100 ? ($(".gotop_btn").addClass("active"), $(".lingyuan-nav_wrap").addClass("active")) : ($(".gotop_btn").removeClass("active"), $(".lingyuan-nav_wrap").removeClass("active"));
    if ($(".c-badge-outline").length) {
      $(".c-badge-outline").css("transform", "rotate(" + $(this).scrollTop() + "deg)");
    }
  });
  setTimeout(function () {
    $(".T-footer_sticker").addClass("active");
  }, 1500);
  $(".tsx_online").each(function () {
    var _0xb53a7e = $(this),
      _0x973381 = "return ECHAT.customMiniChat()";
    _0xb53a7e.attr("onClick", _0x973381);
  });
  var _0x46f92e = $("#bx-list").imagesLoaded(function () {
      _0x46f92e.isotope({
        "itemSelector": ".col"
      });
    }),
    _0x44a6d9 = {};
  $(".mx-filter").on("click", "li", function (_0x32234c) {
    var _0x139f96 = $(_0x32234c.currentTarget);
    var _0x37b0f6 = _0x139f96.parents(".button-group");
    var _0x4c4cfc = _0x37b0f6.attr("data-filter-group");
    _0x44a6d9[_0x4c4cfc] = _0x139f96.attr("data-filter");
    var _0x1dc448 = _0x4a6173(_0x44a6d9);
    _0x46f92e.isotope({
      "filter": _0x1dc448
    });
    $("#bx-list").height() < 100 ? $(".mx-tips-text").addClass("active") : $(".mx-tips-text").removeClass("active");
  });
  $(".button-group").each(function (_0x2e61b4, _0x39a01d) {
    var _0x5b53a1 = $(_0x39a01d);
    _0x5b53a1.on("click", "li", function (_0x32be75) {
      _0x5b53a1.find(".active").removeClass("active");
      var _0x3fded7 = $(_0x32be75.currentTarget);
      _0x3fded7.addClass("active");
    });
  });
  function _0x4a6173(_0xcf73b6) {
    var _0x12eebd = "";
    for (var _0x1fe5b3 in _0xcf73b6) {
      _0x12eebd += _0xcf73b6[_0x1fe5b3];
    }
    return _0x12eebd;
  }
  $(".button-group").children("li:not(.active)").each(function () {
    var _0x19e2b6 = $(this),
      _0x10237c = _0x19e2b6.attr("data-filter"),
      _0x239eb2 = Number($("#bx-list").find(_0x10237c).length);
    _0x19e2b6.append("<span>(" + _0x239eb2 + ")</span>");
  });
  var _0x31619a = [{
    "txt": "外地户口可以在北京购买墓地吗？",
    "url": ""
  }, {
    "txt": "购买优惠 致电010-8917 7861",
    "url": ""
  }, {
    "txt": "怎么预约陵园的看墓专车",
    "url": ""
  }, {
    "txt": "看墓专车真的是免费的吗？",
    "url": ""
  }, {
    "txt": "海撒最低5800元 3天内可出海",
    "url": ""
  }, {
    "txt": "生态葬墓型价格贵吗？",
    "url": "/zhuanti/shengtaizang.html"
  }, {
    "txt": "北京陵园网值得家属信赖",
    "url": ""
  }, {
    "txt": "殡葬一条龙都有哪些服务",
    "url": "/binyifuwu/"
  }, {
    "txt": "骨灰盒怎么购买？",
    "url": "/binzangyongpin/"
  }];
  $(".T-side-ban").each(function () {
    var _0x439cbc = $(this),
      _0x4a3eaf = parseInt(Math.random() * _0x31619a.length),
      _0x57d602 = _0x1b9351 + "bjlypc-static/images/T-rand-ban/side_" + parseInt(Math.random() * 3 + 1) + ".jpg",
      _0x4900da = _0x31619a[_0x4a3eaf].txt,
      _0x2682d3 = _0x31619a[_0x4a3eaf].url,
      _0x522a67 = "";
    _0x2682d3.length < 1 ? _0x522a67 = "<div class=\"txt\" onclick=\"return ECHAT.iconChat(this)\"><p>" + _0x4900da + "</p><span>点击了解</span></div>" : _0x522a67 = "<a class=\"txt\" target=\"_blank\" href=\"" + _0x2682d3 + "\"><p>" + _0x4900da + "</p><span>点击了解</span></a>";
    _0x439cbc.append(_0x522a67);
    _0x439cbc.find("img").attr("src", _0x57d602);
  });
  $("[data-toggle=\"modal\"]").on("click", function (_0x5e52ee) {
    var _0x532bad = $(this).data("effect");
    if (!_0x532bad) {
      _0x532bad = "fadein";
    }
    Custombox.open({
      "target": this.getAttribute("href"),
      "effect": _0x532bad,
      "overlayClose": false
    });
    _0x5e52ee.preventDefault();
  });
  if (_0x3c155a.hasClass("T-lingyuan_body") || _0x3c155a.hasClass("T-muxing_body") || _0x3c155a.hasClass("T-zhuanche_body")) {
    var _0x4b7ad5 = "<div id=\"yuyue-dialog\" class=\"dialog-message\"><button type=\"button\" class=\"close\" onclick=\"Custombox.close();\">×</button><div class=\"modal-title\"></div><div class=\"modal-body\"><form><div class=\"yuyue-form\"><div class=\"row gutters-5\"><div class=\"col-3 text-right mb-4\">手机号码：</div><div class=\"yuyue-tel col-5 mb-4\"><input type=\"text\" placeholder=\"请输入11位手机号\" class=\"form-control tel-num\"><div class=\"err\"></div></div><div class=\"col-4 yuyue-getcode mb-4\"><span class=\"btn btn-primary btn-getcode w-100\">获取验证码</span></div></div><div class=\"row gutters-5\"><div class=\"text-right col-3 mb-4\">验证码：</div><div class=\"yuyue-code-input col-5 mb-4\"><input type=\"text\" placeholder=\"请输入验证码\" class=\"form-control code-num\"><div class=\"err\"></div></div></div><div class=\"row gutters-5\"><div class=\"col-5 offset-3\"><a href=\"#\" class=\"btn btn-red submit w-100\">立即预约</a></div></div></div></form><div class=\"dialog-sucess\"><p class=\"h2\">恭喜您！预约成功!</p><p>北京陵园网客服稍后将会与您联系！请注意接听！</p><a class=\"btn btn-primary btn-160\"  onclick=\"Custombox.close();\">确定</a></div></div></div><div id=\"youhui-dialog\" class=\"dialog-message\"><button type=\"button\" class=\"close\" onclick=\"Custombox.close();\">×</button><div class=\"modal-title\"></div><div class=\"modal-body\"><form><div class=\"yuyue-form\"><div class=\"row gutters-5\"><div class=\"col-3 text-right mb-4\">手机号码：</div><div class=\"yuyue-tel col-5 mb-4\"><input type=\"text\" placeholder=\"请输入11位手机号\" class=\"form-control tel-num\"><div class=\"err\"></div></div><div class=\"yuyue-getcode col-4 mb-4\"><span class=\"btn btn-primary btn-getcode w-100\">获取验证码</span></div></div><div class=\"row gutters-5\"><div class=\"col-3 text-right mb-4\">验证码：</div><div class=\"yuyue-code-input col-5 mb-4\"><input type=\"text\" placeholder=\"请输入验证码\" class=\"form-control code-num\"><div class=\"err\"></div></div></div><div class=\"row gutters-5\"><div class=\"col-5 offset-3\"><a href=\"#\" class=\"btn btn-red w-100 submit\">立即领取</a></div></div></div></form><div class=\"dialog-sucess\"><p class=\"h2\">恭喜您，您的购墓优惠已完成验证。</p><p>北京陵园网客服将会与您联系！告知优惠的具体详情及使用情况。</p><a class=\"btn btn-primary btn-160\"  onclick=\"Custombox.close();\">确定</a></div></div></div>";
    $(".T-footer").length && $(".T-footer").after(_0x4b7ad5);
  }
});
$(window).load(function () {
  'use strict';

  $(".xiangao").each(function () {
    var _0x3dc340 = $(this),
      _0x171e4a = _0x3dc340.parent().actual("height"),
      _0x2c9f30 = "<div class=\"article-more-btn\" title=\"点击展开看全部\"><span class=\"btn btn-primary btn-small\"></span></div>";
    if (_0x3dc340.actual("height") > _0x171e4a) {
      _0x3dc340.after(_0x2c9f30);
    }
  });
  $(".article-more-btn").on("click", function () {
    var _0x1b4e92 = $(this).parent();
    _0x1b4e92.toggleClass("open");
    $(this).toggleClass("open");
  });
  $(".tsx_dpdesc").each(function () {
    var _0xf2ec2 = $(this),
      _0x580374 = _0xf2ec2.parent().actual("height"),
      _0x2b42c3 = "<div class=\"dp-moreread\"><span>... 展开</span></div>";
    _0xf2ec2.actual("height") > _0x580374 && _0xf2ec2.after(_0x2b42c3);
  });
  $(".dp-moreread").on("click", function () {
    var _0xd5512b = $(this).parent();
    _0xd5512b.addClass("open");
    $(this).remove();
  });
  $(".map-tab .map-tab-item").click(function () {
    var _0x386341 = $(this);
    _0x386341.addClass("active").siblings().removeClass("active");
    _0x386341.siblings().children(".luxian").removeProp("checked");
    _0x386341.children(".luxian").prop("checked", "false");
  });
  var _0x319ccb = $("#zhongdian").val();
  $("#route-switch").click(function () {
    var _0x81bdd8 = $("#qidian"),
      _0x5e5ec5 = $("#zhongdian"),
      _0x16bd2f = _0x81bdd8.val(),
      _0x2d08f4 = _0x5e5ec5.val();
    _0x81bdd8.val(_0x2d08f4);
    _0x5e5ec5.val(_0x16bd2f);
    _0x81bdd8.val() == _0x319ccb ? _0x81bdd8.attr("disabled", "disabled") : _0x81bdd8.removeAttr("disabled");
    _0x5e5ec5.val() == _0x319ccb ? _0x5e5ec5.attr("disabled", "disabled") : _0x5e5ec5.removeAttr("disabled");
  });
});