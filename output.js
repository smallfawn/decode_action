//Thu Jan 16 2025 13:01:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _hmt = _hmt || [];
(function () {
  var _0x57fe11 = document.createElement("script");
  _0x57fe11.src = "https://hm.baidu.com/hm.js?181a4f7246bcbfb9ea9a35896398488e";
  var _0x5d5c24 = document.getElementsByTagName("script")[0];
  _0x5d5c24.parentNode.insertBefore(_0x57fe11, _0x5d5c24);
})();
if (iframe == "no") {
  var jssdk = data.jssdk,
    share_switch = "1";
  wx.config({
    debug: false,
    appId: jssdk.appId,
    timestamp: jssdk.timestamp,
    nonceStr: jssdk.nonceStr,
    signature: jssdk.signature,
    jsApiList: ["updateAppMessageShareData", "updateTimelineShareData", "hideAllNonBaseMenuItem"]
  });
  wx.ready(function () {
    var _0x28d6ea = {
      imgUrl: jssdk.imgUrl,
      link: jssdk.url,
      desc: jssdk.desc,
      title: jssdk.title,
      success: function () {}
    };
    if (share_switch == "0") {
      wx.hideAllNonBaseMenuItem();
    } else {
      wx.updateAppMessageShareData(_0x28d6ea);
      wx.updateTimelineShareData(_0x28d6ea);
    }
  });
  wx.error(function (_0x231397) {
    console.log("config信息验证失败：" + _0x231397);
  });
}
var music1 = document.getElementById("music1");
document.addEventListener("DOMContentLoaded", function () {
  function _0x306092() {
    music1.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
      music1.play();
    }, false);
  }
  _0x306092();
});
$("html").one("touchstart", function () {
  music1.play();
});
window.onload = function () {
  $("body").addClass("loaded");
  $("#loader-wrapper .load_title").remove();
  $("#music_play").click(function () {
    music1.paused ? (music1.play(), $(this).attr("src", "index/common/images/yinyue.png")) : (music1.pause(), $(this).attr("src", "index/common/images/yinyue1.png"));
  });
  if (danmu_set.danmu_open == 1) {
    danmu();
    setInterval(function () {
      danmu();
    }, danmu_set.danmu_time * 1000);
  } else {
    danmu_set.danmu_open == 2 && $(".scrollDiv").Scroll({
      line: 1,
      speed: 500,
      timer: 2000,
      up: "but_up",
      down: "but_down"
    });
  }
};
function danmu() {
  $(".danmu-1").css("animation", "");
  $(".danmu-1").each(function (_0x12ccf2, _0x31ef89) {
    var _0x5d3767 = $(_0x31ef89).width();
    var _0x55ca94 = Math.random() * danmu_set.danmu_height + "rem";
    $(_0x31ef89).css({
      right: -(_0x5d3767 + 50),
      top: _0x55ca94
    });
    var _0x18eddd = [9, 11, 13, 15, 17];
    var _0x4c6ac4 = Math.floor(Math.random() * 5);
    $(_0x31ef89).css({
      animation: "ani " + _0x18eddd[_0x4c6ac4] + "s linear " + _0x12ccf2 * danmu_set.danmu_yanchi + "s 1",
      "-webkit-animation": "ani " + _0x18eddd[_0x4c6ac4] + "s linear " + _0x12ccf2 * danmu_set.danmu_yanchi + "s 1"
    });
  });
}
danmu_set.danmu_open == 2 && function (_0x5f3f7d) {
  _0x5f3f7d.fn.extend({
    Scroll: function (_0x267823, _0x1f0a82) {
      if (!_0x267823) {
        var _0x267823 = {};
      }
      var _0x39ae19 = _0x5f3f7d("#" + _0x267823.up),
        _0x2b8e8a = _0x5f3f7d("#" + _0x267823.down),
        _0x2db172,
        _0xc661d0 = this.eq(0).find("ul:first"),
        _0x166eec = _0xc661d0.find("li:first").height(),
        _0x59f4ea = _0x267823.line ? parseInt(_0x267823.line, 10) : parseInt(this.height() / _0x166eec, 10),
        _0x2307d4 = _0x267823.speed ? parseInt(_0x267823.speed, 10) : 500;
      timer = _0x267823.timer;
      if (_0x59f4ea == 0) {
        _0x59f4ea = 1;
      }
      var _0x189d8e = 0 - _0x59f4ea * _0x166eec,
        _0x41741e = function () {
          _0x39ae19.unbind("click", _0x41741e);
          _0xc661d0.animate({
            marginTop: _0x189d8e
          }, _0x2307d4, function () {
            for (i = 1; i <= _0x59f4ea; i++) {
              _0xc661d0.find("li:first").appendTo(_0xc661d0);
            }
            _0xc661d0.css({
              marginTop: 0
            });
            _0x39ae19.bind("click", _0x41741e);
          });
        },
        _0x5614af = function () {
          _0x2b8e8a.unbind("click", _0x5614af);
          for (i = 1; i <= _0x59f4ea; i++) {
            _0xc661d0.find("li:last").show().prependTo(_0xc661d0);
          }
          _0xc661d0.css({
            marginTop: _0x189d8e
          });
          _0xc661d0.animate({
            marginTop: 0
          }, _0x2307d4, function () {
            _0x2b8e8a.bind("click", _0x5614af);
          });
        },
        _0x1f930b = function () {
          if (timer) {
            _0x2db172 = window.setInterval(_0x41741e, timer);
          }
        },
        _0x1547df = function () {
          if (timer) {
            window.clearInterval(_0x2db172);
          }
        };
      _0xc661d0.hover(_0x1547df, _0x1f930b).mouseout();
      _0x39ae19.css("cursor", "pointer").click(_0x41741e).hover(_0x1547df, _0x1f930b);
      _0x2b8e8a.css("cursor", "pointer").click(_0x5614af).hover(_0x1547df, _0x1f930b);
    }
  });
}(jQuery);