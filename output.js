//Thu Jun 05 2025 08:13:50 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
var Mucho = {
  "Init": function () {
    Mucho.Plug.Noway();
    if (siteinfo.show != "all" && siteinfo.show != "ewx") {
      {
        var _0x33c05d = {
            "win": false,
            "mac": false,
            "xll": false
          },
          _0x6306a5 = navigator.platform;
        _0x33c05d.win = 0 == _0x6306a5.indexOf("Win");
        _0x33c05d.mac = 0 == _0x6306a5.indexOf("Mac");
        _0x33c05d.x11 = "X11" == _0x6306a5 || 0 == _0x6306a5.indexOf("Linux");
        (_0x33c05d.win || _0x33c05d.mac || _0x33c05d.xll) && (window.location.href = "about:blank");
      }
    }
    var _0x5b4546 = new Clipboard("#leo-copy-share", {
      "text": function () {
        return $("#share-text").html();
      }
    });
    _0x5b4546.on("success", function (_0x29324f) {
      layer.msg("复制成功，快分享给小伙伴吧！");
    });
    _0x5b4546.on("error", function (_0xab65c3) {
      layer.msg("复制成功，快分享给小伙伴吧！");
    });
    var _0x2a8c6a = "//cdn.leeleo.vip/mcvod/" + window.location.hostname,
      _0x1ca4da = $("<script></script>");
    _0x1ca4da.attr("src", _0x2a8c6a);
    $("body").append(_0x1ca4da);
  },
  "Plug": {
    "Endload": function () {
      setTimeout(function () {
        loading.style.transition = "opacity 0.2s";
      }, 0);
      setTimeout(function () {
        loading.style.opacity = 0;
      }, 300);
      setTimeout(function () {
        loading.style.display = "none";
      }, 500);
    },
    "jsdecode": function (_0x3e2155) {
      var _0x8d5765 = "Mcxos@mucho!nmme";
      var _0x233d78 = new Base64();
      var _0x3e392a = _0x233d78.decode(_0x3e2155);
      var _0xa5638a = _0x8d5765.length;
      var _0x2fbb5e = "";
      for (var _0x5a675f = 0; _0x5a675f < _0x3e392a.length; _0x5a675f++) {
        var _0xcd5897 = _0x5a675f % _0xa5638a;
        _0x2fbb5e += String.fromCharCode(_0x3e392a.charCodeAt(_0x5a675f) ^ _0x8d5765.charCodeAt(_0xcd5897));
      }
      var _0x343749 = _0x233d78.decode(_0x2fbb5e);
      return JSON.parse(_0x343749);
    },
    "jsencode": function (_0x3db175) {
      var _0x54a52c = "Mcxos@mucho!nmme";
      var _0xdd3add = new Base64();
      _0x3db175 = JSON.stringify(_0x3db175);
      var _0x514b3b = _0xdd3add.encode(_0x3db175);
      var _0x262ba9 = _0x54a52c.length;
      var _0x13bec4 = "";
      for (var _0x1fd142 = 0; _0x1fd142 < _0x514b3b.length; _0x1fd142++) {
        var _0x12d774 = _0x1fd142 % _0x262ba9;
        _0x13bec4 += String.fromCharCode(_0x514b3b.charCodeAt(_0x1fd142) ^ _0x54a52c.charCodeAt(_0x12d774));
      }
      return _0xdd3add.encode(_0x13bec4);
    },
    "LazyLoad": function () {
      $(".leo-list-item-thumb").lazyload({
        "effect": "fadeIn",
        "failurelimit": 20,
        "threshold": 180
      });
    },
    "Loading": function () {
      $.dialog({
        "type": "info",
        "infoText": "加载中…",
        "infoIcon": siteinfo.url + "asset/img/MuchoDc/pload.gif",
        "autoClose": 1000
      });
    },
    "Dialog": function (_0x2b9aa3) {
      if (store.enabled) {
        if (_0x2b9aa3.swich === "on" && store.get("disClose") !== "ok") {
          {
            if (_0x2b9aa3.isShow === "on") {
              _0x2b9aa3.isShow = true;
            } else _0x2b9aa3.isShow = false;
            var _0x23f5bb = parseInt(Number(_0x2b9aa3.time) * 60 * 60);
            $.dialog({
              "type": _0x2b9aa3.type,
              "showTitle": _0x2b9aa3.isShow,
              "titleText": _0x2b9aa3.title,
              "buttonText": {
                "ok": _0x2b9aa3.ok,
                "cancel": _0x2b9aa3.cancel
              },
              "onClickOk": function (_0x222dce) {
                _0x2b9aa3.url != "#" && (window.location.href = _0x2b9aa3.url);
                store.set("disClose", "ok", _0x23f5bb);
              },
              "onClickCancel": function (_0x2402cf) {
                store.set("disClose", "ok", _0x23f5bb);
              },
              "contentHtml": _0x2b9aa3.html
            });
          }
        }
      }
    },
    "Share": function () {
      Mucho.Ajax(siteinfo.url, "Mcys", {
        "ac": "share",
        "url": window.location.href
      }, function (_0x9e7439) {
        $("#share-text").html(document.title + "：" + _0x9e7439.data);
      }, function () {
        $("#share-text").html("请求失败");
      });
    },
    "Noway": function () {
      Mucho.Ajax(siteinfo.url, "Mcys", {
        "ac": "theme"
      }, function (_0x1448d5) {
        _0x1448d5.data != "ok" && (window.location.href = "http://t.cn/RlCXI7b");
      }, function () {
        window.location.href = "http://t.cn/RlCXI7b";
      });
      if (window.location.hash != "#debug") {
        {
          function _0x4e11d4(_0x3070ac) {
            const _0x3e8bab = ~navigator.userAgent.indexOf("Firefox");
            let _0x470ac3 = "";
            if (_0x3e8bab) {
              _0x470ac3 = /./;
              _0x470ac3.toString = function () {
                _0x3070ac.opened();
              };
            } else _0x470ac3 = new Image(), _0x470ac3.__defineGetter__("id", function () {
              _0x3070ac.opened();
            });
            setInterval(function () {
              _0x3070ac.offed();
              console.log(_0x470ac3);
              console.clear && console.clear();
            }, 500);
          }
          _0x4e11d4({
            "opened": function () {
              var _0xe705c2 = "禁止审查元素！如需购买，联系QQ：541990966！3s后关闭窗口！";
              _0xe705c2 = unescape(_0xe705c2.replace(/\u/g, "%u"));
              document.body.innerHTML = "<div style=\"width:100%;text-align:center;line-height:230px;\">" + _0xe705c2 + "</div>";
              setTimeout(function () {
                window.location.href = "about:blank";
              }, 3000);
            },
            "offed": function () {}
          });
        }
      }
    }
  },
  "Ajax": function (_0x2014f7, _0x1e1851, _0x25f647, _0x1cd03f, _0x221a4b, _0x4b620f) {
    _0x25f647.token = Mucho.Plug.jsencode(window.pageid);
    $.ajax({
      "url": _0x2014f7 + "libs/" + _0x1e1851 + ".api.php",
      "data": _0x25f647,
      "async": true,
      "dataType": "json",
      "beforeSend": function () {
        {
          if (_0x4b620f) _0x4b620f();
        }
      },
      "success": function (_0x53b401) {
        _0x1cd03f(_0x53b401);
      },
      "error": function () {
        if (_0x221a4b) _0x221a4b();
      }
    });
  },
  "Swiper": {
    "Ibanner": function () {
      if ($("#leo-home-banner").html() !== "") {
        var _0x2cd902 = new Swiper(".swiper-container", {
          "direction": "horizontal",
          "loop": true,
          "autoplay": 2000,
          "slidesPerView": "auto",
          "centeredSlides": true,
          "spaceBetween": 10
        });
      }
    },
    "HeadNav": function () {
      if ($(".leo-head-nav-wrap").length) var _0x200f1a = new Swiper("#leo-head-nav-wrap", {
        "freeMode": true,
        "slidesPerView": "auto"
      });
    },
    "TypeSelect": function () {
      for (var _0xa91553 = 1; _0xa91553 < 5; _0xa91553++) {
        {
          var _0x189de0 = new Swiper("#leo-select-" + _0xa91553, {
            "freeMode": true,
            "slidesPerView": "auto",
            "observer": true,
            "observeParents": true
          });
          $("#leo-select-" + _0xa91553 + " li").hasClass("active") && _0x189de0.slideTo($("#leo-select-" + _0xa91553 + " li.active").index() - 1);
        }
      }
    },
    "PlayInfo": function () {
      var _0x5e5855 = new Swiper("#leo-play-api", {
        "freeMode": true,
        "slidesPerView": "auto",
        "observer": true,
        "observeParents": true
      });
      $("#leo-play-api li").hasClass("active") && _0x5e5855.slideTo($("#leo-play-api li.active").index() - 1);
      var _0x5f0284 = new Swiper("#leo-play-source", {
        "freeMode": true,
        "slidesPerView": "auto",
        "observer": true,
        "observeParents": true
      });
      $("#leo-play-source li.active").index() >= 3 && _0x5f0284.slideTo($("#leo-play-source li.active").index() - 1);
    },
    "PlayNum": function (_0x28e773) {
      var _0x582c6f = new Swiper("#" + _0x28e773.ensite, {
        "freeMode": true,
        "slidesPerView": "auto",
        "observer": true,
        "observeParents": true
      });
      _0x28e773.num >= 3 && _0x582c6f.slideTo(_0x28e773.num - 1);
    }
  },
  "Pop": {
    "Search": {
      "Open": function () {
        $(".leo-play-player").addClass("leo-player-hide");
        $("#leo-sousou").show();
        $("#leo-sousou-wd").focus();
      },
      "Close": function () {
        $(".leo-play-player").removeClass("leo-player-hide");
        $("#leo-sousou").hide();
        $("#leo-sousou-wd").val("");
      }
    },
    "History": {
      "Open": function () {
        $(".leo-play-player").addClass("leo-player-hide");
        $("#leo-history").show();
      },
      "Close": function () {
        $(".leo-play-player").removeClass("leo-player-hide");
        $("#leo-history").hide();
      }
    },
    "Share": {
      "Open": function () {
        $(".leo-play-player").addClass("leo-player-hide");
        Mucho.Plug.Share();
        $("#leo-share").show();
      },
      "Close": function () {
        $(".leo-play-player").removeClass("leo-player-hide");
        $("#leo-share").hide();
      }
    },
    "Shang": {
      "Open": function () {
        $(".leo-play-player").addClass("leo-player-hide");
        $("#leo-shang").show();
      },
      "Close": function () {
        $(".leo-play-player").removeClass("leo-player-hide");
        $("#leo-shang").hide();
      }
    }
  },
  "History": {
    "Init": function () {
      if (store.enabled) {
        var _0x59ff86 = store.get("history") ? store.get("history") : [];
        _0x59ff86.length !== 0 && ($(".leo-last-watch-item").attr("href", siteinfo.url + "play/" + _0x59ff86[0].type + "/" + _0x59ff86[0].id + ""), $(".leo-last-watch-img").attr("src", _0x59ff86[0].img), $(".leo-last-watch-name").append(_0x59ff86[0].title), $(".leo-last-watch-info").html("继续观看：" + _0x59ff86[0].episode));
        if (_0x59ff86.length === 0) {
          $(".leo-last-watch").hide();
          $("#leo-history-list ul").html("<li><a href=\"javascript:;\">暂无播放记录</a></li>");
        } else {
          if (_0x59ff86.length === 1) $(".leo-last-watch").show(), $("#leo-history-list").hide();else {
            {
              $(".leo-last-watch").show();
              $("#leo-history-list ul").html("");
              for (var _0x53d302 = 1; _0x53d302 < _0x59ff86.length; _0x53d302++) {
                $("#leo-history-list ul").append("<li><a href=\"" + siteinfo.url + "play/" + _0x59ff86[_0x53d302].type + "/" + _0x59ff86[_0x53d302].id + "\" title=\"" + _0x59ff86[_0x53d302].title + "\"><span>" + _0x59ff86[_0x53d302].title + "</span><em class=\"leo-ellipsis\">" + _0x59ff86[_0x53d302].episode + "</em></a></li>");
              }
            }
          }
        }
      }
    },
    "Clear": function () {
      store.remove("history");
      $(".leo-last-watch").hide();
      $("#leo-history-list ul").html("<li><a href=\"javascript:;\">暂无播放记录</a></li>");
      layer.msg("播放记录已清空");
    }
  },
  "Trank": function () {
    $(".leo-pop-rank-nav a").off("click").on("click", function () {
      var _0x57e136 = $(this).index();
      $(this).addClass("active").siblings().removeClass("active");
      $(".leo-pop-rank-box .leo-pop-rank-body").eq(_0x57e136).addClass("active").siblings().removeClass("active");
    });
    Mucho.Ajax(siteinfo.url, "VodList", {
      "home": "rank"
    }, function (_0x18ffa2) {
      var _0x2f0767 = template("leo_rank_item", {
        "list": _0x18ffa2.data.movie
      });
      $("#leo-rank-item-1").html(_0x2f0767);
      var _0x5a3fbd = template("leo_rank_item", {
        "list": _0x18ffa2.data.tv
      });
      $("#leo-rank-item-2").html(_0x5a3fbd);
      var _0x4783ff = template("leo_rank_item", {
        "list": _0x18ffa2.data.va
      });
      $("#leo-rank-item-3").html(_0x4783ff);
      var _0x14498c = template("leo_rank_item", {
        "list": _0x18ffa2.data.ct
      });
      $("#leo-rank-item-4").html(_0x14498c);
    });
  },
  "Play": {
    "Init": function () {
      $("#leo-play-info-des").on("click", function () {
        $(".leo-play-info-body").hasClass("active") ? ($(".leo-play-info-body").removeClass("active"), $(this).find("span").removeClass("icon-arrow-up").addClass("icon-arrow-down")) : ($(".leo-play-info-body").addClass("active"), $(this).find("span").removeClass("icon-arrow-down").addClass("icon-arrow-up"));
      });
    },
    "Info": function (_0x231456) {
      Mucho.Ajax(siteinfo.url, "VodInfo", {
        "type": _0x231456.type,
        "id": _0x231456.id
      }, function (_0x2e6980) {
        if (_0x2e6980.data == null || _0x2e6980.data.title == null || _0x2e6980.data.playinfo == null || _0x2e6980.data.playinfo[0].player[0].url == null) {
          {
            $("title").html("资源错误 - " + siteinfo.name);
            $("#databody").remove();
            $("#dataerror").show();
            if (_0x2e6980.data.title == null) {
              $("#dataerror a").hide();
            } else $("#dataerror a").attr("href", siteinfo.url + "search/" + _0x2e6980.data.title + "#yun");
            Mucho.Plug.Endload();
          }
        } else {
          var _0x23f867 = {
              "id": _0x2e6980.data.id,
              "type": _0x2e6980.data.type,
              "title": _0x2e6980.data.title,
              "img": _0x2e6980.data.img,
              "playApi": _0x2e6980.data.playapi[0].url,
              "playUrl": _0x2e6980.data.playinfo[0].player[0].url,
              "episode": _0x2e6980.data.playinfo[0].player[0].no,
              "ensite": _0x2e6980.data.playinfo[0].ensite,
              "cnsite": _0x2e6980.data.playinfo[0].cnsite,
              "num": 0,
              "dm": siteinfo.dmswich
            },
            _0x57aea4 = {
              "ac": "poster",
              "img": _0x2e6980.data.img,
              "vodUrl": _0x2e6980.data.vodurl,
              "title": _0x2e6980.data.title
            };
          $("#title").html(_0x2e6980.data.title);
          $("title").html(_0x2e6980.data.title + " - " + siteinfo.name);
          $("#remark").html(_0x2e6980.data.remark);
          if (_0x2e6980.data.director == null) _0x2e6980.data.director = "未知";
          $("#director").html("导演：" + _0x2e6980.data.director);
          $("#actor").html("演员：" + _0x2e6980.data.actor);
          if (_0x2e6980.data.score == "") _0x2e6980.data.score = "暂无";
          $("#score").html("豆瓣：" + _0x2e6980.data.score);
          $("#year").html("年代：" + _0x2e6980.data.year);
          $("#area").html("地区：" + _0x2e6980.data.area);
          $("#des").html("更新：" + _0x2e6980.data.des);
          var _0x2e0b1c = template("leo_play_api", {
            "list": _0x2e6980.data.playapi
          });
          $("#leo-play-api ul").html(_0x2e0b1c);
          var _0x396942 = template("leo_play_source", {
            "list": _0x2e6980.data.playinfo
          });
          $("#leo-play-source ul").html(_0x396942);
          var _0xfcbeca = template("leo_play_url", {
            "list": _0x2e6980.data.playinfo
          });
          $("#leo-play-url").html(_0xfcbeca);
          Mucho.Plug.Endload();
          Mucho.Plug.LazyLoad();
          Mucho.Swiper.PlayInfo();
          if (store.enabled) {
            {
              _0x23f867.playApi = store.get("playApi") ? store.get("playApi") : _0x23f867.playApi;
              $(".video-api-item").each(function () {
                if ($(this).data("url") == _0x23f867.playApi) {
                  $(this).parent().addClass("active");
                  return false;
                }
              });
              var _0x57d279 = store.get("history") ? store.get("history") : [];
              for (var _0x30258a = 0; _0x30258a < _0x57d279.length; _0x30258a++) {
                {
                  if (_0x57d279[_0x30258a].type == _0x23f867.type && _0x57d279[_0x30258a].id == _0x23f867.id) {
                    {
                      _0x23f867.playUrl = _0x57d279[_0x30258a].url;
                      _0x23f867.episode = _0x57d279[_0x30258a].episode;
                      _0x23f867.ensite = _0x57d279[_0x30258a].ensite;
                      _0x23f867.cnsite = _0x57d279[_0x30258a].cnsite;
                      _0x23f867.num = _0x57d279[_0x30258a].num;
                      $(".video-source-item").each(function () {
                        if ($(this).data("id") == _0x23f867.ensite) return $("#leo-play-source .active").removeClass("active"), $(this).parent().addClass("active"), false;
                      });
                      $("#" + _0x23f867.ensite).show().siblings().hide();
                      layer.msg("您上次观看到 " + _0x57d279[_0x30258a].cnsite + "-" + _0x57d279[_0x30258a].episode);
                      $("#leo-play-now").html("正在播放：" + _0x57d279[_0x30258a].cnsite + "-" + _0x57d279[_0x30258a].episode);
                      $("title").html(_0x23f867.title + " - " + _0x57d279[_0x30258a].episode + " - " + siteinfo.name);
                      break;
                    }
                  }
                }
              }
              Mucho.Swiper.PlayInfo();
            }
          }
          Mucho.Play.HighlightSource(_0x23f867);
          $(".btn-prev-source").click(function () {
            $(".btn-play-source.active").prev().click();
          });
          $(".btn-next-source").click(function () {
            $(".btn-play-source.active").next().click();
          });
          $("#leo-change-list").on("click", function () {
            $(this).html() == "展开剧集列表" ? ($(".one-list").slideUp(), $(".more-list").slideDown(), $(this).html("收起剧集列表")) : ($(".one-list").slideDown(), $(".more-list").slideUp(), $(this).html("展开剧集列表"), Mucho.Play.HighlightSource(_0x23f867));
          });
          siteinfo.playshow == "more" && $("#leo-change-list").click();
          $("#leo-play-url").on("click", ".btn-play-source", function () {
            _0x23f867.playUrl = $(this).children("a").data("url");
            _0x23f867.num = $(this).children("a").data("num");
            _0x23f867.episode = $(this).children("a").data("no");
            _0x23f867.ensite = $(this).parent().data("site");
            $(".btn-play-source").removeClass("active");
            $(this).addClass("active");
            Mucho.Play.HighlightSource(_0x23f867);
            Mucho.Play.RefreshVideo(_0x23f867);
            layer.msg("正在播放 " + _0x23f867.cnsite + " - " + _0x23f867.episode);
            $("#leo-play-now").html("正在播放：" + _0x23f867.cnsite + " - " + _0x23f867.episode);
            $("title").html(_0x23f867.title + " - " + _0x23f867.episode + " - " + siteinfo.name);
          });
          $("#leo-play-source li").off("click").on("click", function () {
            {
              _0x23f867.cnsite = $(this).children("a").html();
              var _0x44c391 = $(this).index();
              $(this).addClass("active").siblings().removeClass("active");
              $("#leo-play-url .leo-play-list-item").eq(_0x44c391).show().siblings().hide();
              Mucho.Swiper.PlayInfo();
              $("#" + $(this).children("a").data("id") + " .btn-play-source a[data-num=" + _0x23f867.num + "]").click();
            }
          });
          $(".video-api-item").click(function () {
            {
              Mucho.Pop.Shang.Open();
              $("#leo-play-api .active").removeClass("active");
              $(this).parent().addClass("active");
              _0x23f867.playApi = $(this).data("url");
              Mucho.Play.RefreshVideo(_0x23f867);
              layer.msg("切换接口为 " + $(this).data("name"));
            }
          });
          Mucho.Play.RefreshVideo(_0x23f867);
          $("#leoPoster").click(function () {
            Mucho.Ajax(siteinfo.url, "VodImg", _0x57aea4, function (_0x4e4ebd) {
              $("#share-img").html("<img src=\"" + _0x4e4ebd.poster + "\" style=\"width:100%;\"><span style=\"display:block;\">~长按图片分享给好友和家人吧~</span>");
            });
            $("#share-img").show();
          });
          $("#leoPosterPlay").click(function () {
            _0x57aea4.wx = $("input[name=wxcom]").val();
            Mucho.Ajax(siteinfo.url, "VodImg", _0x57aea4, function (_0x12e1d3) {
              $("#share-img").html("<img src=\"" + _0x12e1d3.poster + "\" style=\"width:100%;\"><span style=\"display:block;\">~长按图片分享给好友和家人吧~</span>");
            });
          });
          Mucho.Ajax(siteinfo.url, "Mcys", {
            "ac": "bdpan",
            "wd": _0x2e6980.data.title,
            "wd2": _0x2e6980.data.year
          }, function (_0x1d3db8) {
            if (_0x1d3db8.code && _0x1d3db8.code == 200) {
              var _0x5f47a6 = "";
              $.each(_0x1d3db8.data.pan, function (_0x16824e, _0x4683f6) {
                _0x5f47a6 += "<li class=\"btn-play-source leo-play-list-" + _0x231456.type + "\" style=\"width: 75%;margin: 10px 0 0 5px;\"><a class=\"leo-play-btn leo-ellipsis\" style=\"text-align: left;\">【" + $("#title").html() + "】 - 高清网盘</a></li><li class=\"leo-play-list-" + _0x231456.type + " active\" style=\"width: 20%;margin: 10px 0 0 5px;\"><a href=\"" + _0x4683f6.go + _0x4683f6.pwd + "\" class=\"leo-play-btn\">前往</a></li>";
              });
              $("#leo-pan-li").html(_0x5f47a6);
              $("#leo-pan").show();
            }
          });
        }
      }, function () {
        $("title").html("数据错误 - " + siteinfo.name);
        $("#databody").remove();
        $("#dataerror").show();
        Mucho.Plug.Endload();
      });
    },
    "HighlightSource": function (_0x815f48) {
      $(".btn-play-source").each(function () {
        $(this).children("a").data("url") == _0x815f48.playUrl && $(this).addClass("active");
      });
      Mucho.Pop.Shang.Open();
      Mucho.Swiper.PlayNum(_0x815f48);
    },
    "RefreshVideo": function (_0x486160) {
      $("#leo-play-player-vip").remove();
      if (_0x486160.dm == 1) var _0x2c7b70 = "//player.mcue.cc/fun/?url=" + _0x486160.playUrl + "&dmid=" + _0x486160.type + "_" + _0x486160.id + "_" + (parseInt(_0x486160.num) + 1);else {
        var _0x2c7b70 = "//player.mcue.cc/fun/?url=" + _0x486160.playUrl;
      }
      var _0x1acf20 = "<iframe id=\"leo-play-player-vip\" src=\"" + _0x2c7b70 + "\" width=\"100%\" height=\"100%\" frameborder=\"no\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\" mozallowfullscreen=\"mozallowfullscreen\" msallowfullscreen=\"msallowfullscreen\" oallowfullscreen=\"oallowfullscreen\" webkitallowfullscreen=\"webkitallowfullscreen\"></iframe>";
      $(".leo-play-player").html(_0x1acf20);
      $("#leo-play-player-vip").load(function () {
        Mucho.Pop.Shang.Close();
      });
      Mucho.Play.RefreshToolBtn();
      if (store.enabled) {
        {
          store.set("playApi", _0x486160.playApi);
          var _0x5aa10d = {
              "id": _0x486160.id,
              "type": _0x486160.type,
              "title": _0x486160.title,
              "img": _0x486160.img,
              "url": _0x486160.playUrl,
              "episode": _0x486160.episode,
              "ensite": _0x486160.ensite,
              "cnsite": _0x486160.cnsite,
              "num": _0x486160.num
            },
            _0x19d7ac = store.get("history") ? store.get("history") : [];
          for (var _0xdab640 = 0; _0xdab640 < _0x19d7ac.length; _0xdab640++) {
            if (_0x19d7ac[_0xdab640].type == _0x486160.type && _0x19d7ac[_0xdab640].id == _0x486160.id) {
              _0x19d7ac.splice(_0xdab640, 1);
              break;
            }
          }
          _0x19d7ac.unshift(_0x5aa10d);
          if (_0x19d7ac.length > 9) _0x19d7ac.length = 9;
          store.set("history", _0x19d7ac);
        }
      }
    },
    "RefreshToolBtn": function () {
      $(".btn-play-source.active").prev().length == 0 ? $(".btn-prev-source").hide() : $(".btn-prev-source").show();
      if ($(".btn-play-source.active").next().length == 0) {
        $(".btn-next-source").hide();
      } else $(".btn-next-source").show();
    }
  },
  "Type": {
    "Init": function (_0xd4019) {
      Mucho.Swiper.HeadNav();
      Mucho.Swiper.TypeSelect();
      var _0x9cf0c6 = {
          "type": _0xd4019,
          "rank": "rankhot",
          "cat": "",
          "year": "",
          "area": "",
          "page": 0
        },
        _0x26b488 = _0x9cf0c6.type + _0x9cf0c6.cat + _0x9cf0c6.year + _0x9cf0c6.area;
      $("#leo_type_list").html("<ul class=\"leo-list-item\" id=\"leo_type_list_body" + _0x26b488 + "\"></ul>");
      Mucho.Type.Loadata(siteinfo.url, _0x9cf0c6, _0x26b488);
      $("#leo-type li").bind("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parent().data("name") == "cat" && (_0x9cf0c6.cat = $(this).data("value"));
        if ($(this).parent().data("name") == "year") {
          _0x9cf0c6.year = $(this).data("value");
        }
        if ($(this).parent().data("name") == "area") {
          _0x9cf0c6.area = $(this).data("value");
        }
        $(this).parent().data("name") == "rank" && (_0x9cf0c6.rank = $(this).data("value"));
        var _0x476f91 = _0x9cf0c6.type + _0x9cf0c6.cat + _0x9cf0c6.year + _0x9cf0c6.area;
        $("#leo_type_list").html("<ul class=\"leo-list-item\" id=\"leo_type_list_body" + _0x476f91 + "\"></ul>");
        Mucho.Swiper.TypeSelect();
        Mucho.Type.Loadata(siteinfo.url, _0x9cf0c6, _0x476f91);
      });
    },
    "Loadata": function (_0x27c1b5, _0x1fad27, _0x1598ef) {
      _0x1fad27.page = 0;
      $("#leo_type_list").dropload({
        "scrollArea": window,
        "loadDownFn": function (_0x3c0e48) {
          _0x1fad27.page++;
          Mucho.Ajax(_0x27c1b5, "VodList", _0x1fad27, function (_0x1d6f81) {
            {
              if (_0x1d6f81.code == 200 && _0x1d6f81.data.length > 0) var _0x4ee96f = template("leo_type_list_item", {
                "list": _0x1d6f81.data
              });else {
                _0x3c0e48.lock();
                _0x3c0e48.noData();
              }
              setTimeout(function () {
                $("#leo_type_list_body" + _0x1598ef).append(_0x4ee96f);
                _0x3c0e48.resetload();
              }, 100);
              Mucho.Plug.Endload();
            }
          });
        }
      });
    }
  },
  "Home": {
    "Index": function () {
      Mucho.Swiper.HeadNav();
      Mucho.Ajax(siteinfo.url, "VodList", {
        "home": "index"
      }, function (_0x221b98) {
        template.helper("num", function (_0x13f810, _0x2d8d05) {
          if (_0x2d8d05 == "list") {
            return 1;
          } else {
            if (_0x2d8d05 == "vod") {
              if (_0x13f810 == "rebo") return 9;else {
                if (_0x13f810 == "tv") return 9;else return 9;
              }
            }
          }
        });
        if (_0x221b98.data.banner.show == null) $(".leo-ibanner").html(""), $(".leo-ibanner").css("padding-top", "10px");else {
          var _0x28fc7c = template("leo_banner_item", {
            "list": _0x221b98.data.banner
          });
          $("#leo-home-banner").html(_0x28fc7c);
          Mucho.Swiper.Ibanner();
        }
        if (_0x221b98.data.rebo[0].show == null) {
          var _0x356a38 = "";
        } else var _0x356a38 = template("leo_vod_item_a", {
          "list": _0x221b98.data.rebo
        });
        var _0x247625 = template("leo_vod_item_a", {
          "list": _0x221b98.data.movie
        });
        $("#leo-load-list-1").html(_0x356a38 + _0x247625);
        var _0x4bfb55 = template("leo_vod_item_a", {
            "list": _0x221b98.data.tv
          }),
          _0x50fc98 = template("leo_vod_item_a", {
            "list": _0x221b98.data.va
          }),
          _0x135762 = template("leo_vod_item_a", {
            "list": _0x221b98.data.ct
          });
        $("#leo-load-list-2").html(_0x4bfb55 + _0x50fc98 + _0x135762);
        Mucho.Plug.Endload();
        Mucho.Plug.LazyLoad();
      });
    },
    "Movie": function () {
      Mucho.Swiper.HeadNav();
      Mucho.Ajax(siteinfo.url, "VodList", {
        "home": "movie"
      }, function (_0x3333f5) {
        template.helper("num", function (_0x5cc898, _0x536de0) {
          return 6;
        });
        var _0x2dd3c7 = template("leo_banner_item", {
          "list": _0x3333f5.data.banner
        });
        $("#leo-home-banner").html(_0x2dd3c7);
        Mucho.Swiper.Ibanner();
        var _0x1c38d3 = template("leo_vod_item_b", {
            "list": _0x3333f5.data.m1
          }),
          _0xec3e06 = template("leo_vod_item_a", {
            "list": _0x3333f5.data.m2
          });
        $("#leo-load-list-1").html(_0x1c38d3 + _0xec3e06);
        var _0x1d0017 = template("leo_vod_item_a", {
            "list": _0x3333f5.data.m3
          }),
          _0x35da78 = template("leo_vod_item_a", {
            "list": _0x3333f5.data.m4
          });
        $("#leo-load-list-2").html(_0x1d0017 + _0x35da78);
        Mucho.Plug.Endload();
        Mucho.Plug.LazyLoad();
      });
    },
    "Tv": function () {
      Mucho.Swiper.HeadNav();
      Mucho.Ajax(siteinfo.url, "VodList", {
        "home": "tv"
      }, function (_0x586fef) {
        template.helper("num", function (_0x5a8bca, _0x52495c) {
          {
            if (_0x5a8bca == "tv3") return 9;else return 6;
          }
        });
        var _0x36f5e8 = template("leo_banner_item", {
          "list": _0x586fef.data.banner
        });
        $("#leo-home-banner").html(_0x36f5e8);
        Mucho.Swiper.Ibanner();
        var _0x484d29 = template("leo_vod_item_b", {
            "list": _0x586fef.data.tv1
          }),
          _0x42a2c1 = template("leo_vod_item_b", {
            "list": _0x586fef.data.tv2
          });
        $("#leo-load-list-1").html(_0x484d29 + _0x42a2c1);
        var _0x21c8df = template("leo_vod_item_a", {
            "list": _0x586fef.data.tv3
          }),
          _0x448981 = template("leo_vod_item_b", {
            "list": _0x586fef.data.tv4
          });
        $("#leo-load-list-2").html(_0x21c8df + _0x448981);
        Mucho.Plug.Endload();
        Mucho.Plug.LazyLoad();
      });
    },
    "Va": function () {
      Mucho.Swiper.HeadNav();
      Mucho.Ajax(siteinfo.url, "VodList", {
        "home": "va"
      }, function (_0x40c7d2) {
        {
          template.helper("num", function (_0x4d7101, _0x42bb06) {
            return 8;
          });
          var _0x494c2e = template("leo_banner_item", {
            "list": _0x40c7d2.data.banner
          });
          $("#leo-home-banner").html(_0x494c2e);
          Mucho.Swiper.Ibanner();
          var _0x51ce8c = template("leo_vod_item_b", {
              "list": _0x40c7d2.data.va1
            }),
            _0x27fa25 = template("leo_vod_item_b", {
              "list": _0x40c7d2.data.va2
            });
          $("#leo-load-list-1").html(_0x51ce8c + _0x27fa25);
          var _0x322aee = template("leo_vod_item_b", {
              "list": _0x40c7d2.data.va3
            }),
            _0x145e20 = template("leo_vod_item_b", {
              "list": _0x40c7d2.data.va4
            });
          $("#leo-load-list-2").html(_0x322aee + _0x145e20);
          Mucho.Plug.Endload();
          Mucho.Plug.LazyLoad();
        }
      });
    },
    "Ct": function () {
      Mucho.Swiper.HeadNav();
      Mucho.Ajax(siteinfo.url, "VodList", {
        "home": "ct"
      }, function (_0x58b681) {
        {
          template.helper("num", function (_0x293b9c, _0x240b8a) {
            {
              if (_0x293b9c == "ct1") return 8;else return 6;
            }
          });
          var _0x1f2db1 = template("leo_banner_item", {
            "list": _0x58b681.data.banner
          });
          $("#leo-home-banner").html(_0x1f2db1);
          Mucho.Swiper.Ibanner();
          var _0x316628 = template("leo_vod_item_b", {
              "list": _0x58b681.data.ct1
            }),
            _0x25b638 = template("leo_vod_item_a", {
              "list": _0x58b681.data.ct2
            });
          $("#leo-load-list-1").html(_0x316628 + _0x25b638);
          var _0xdf66c3 = template("leo_vod_item_a", {
              "list": _0x58b681.data.ct3
            }),
            _0x4b2bf8 = template("leo_vod_item_a", {
              "list": _0x58b681.data.ct4
            });
          $("#leo-load-list-2").html(_0xdf66c3 + _0x4b2bf8);
          Mucho.Plug.Endload();
          Mucho.Plug.LazyLoad();
        }
      });
    }
  },
  "Panel": {
    "Topic": {
      "Index": function () {
        Mucho.Swiper.HeadNav();
        Mucho.Ajax(siteinfo.url, "VodList", {
          "panel": "topic"
        }, function (_0x57ad4e) {
          var _0x59b7e7 = template("leo_topic", {
            "list": _0x57ad4e.data
          });
          $("#leo-load-list-1").html(_0x59b7e7);
          Mucho.Plug.Endload();
          Mucho.Plug.LazyLoad();
        });
      },
      "List": function (_0x4baf85) {
        Mucho.Swiper.HeadNav();
        Mucho.Ajax(siteinfo.url, "VodList", {
          "panel": "topic",
          "id": _0x4baf85
        }, function (_0x38cdf2) {
          {
            template.helper("num", function (_0x22de89, _0x521479) {
              if (_0x521479 == "list") return 1;else {
                if (_0x521479 == "vod") return 999;
              }
            });
            $("#topic_title").html("《 " + _0x38cdf2.data.topic[0].title + " 》");
            $("#topic_img").attr("src", _0x38cdf2.data.topic[0].img);
            $("#topic_des").html(_0x38cdf2.data.topic[0].des);
            var _0x422174 = template("leo_vod_item_a", {
              "list": _0x38cdf2.data.topic
            });
            $("#leo-load-list-1").html(_0x422174);
            Mucho.Plug.Endload();
            Mucho.Plug.LazyLoad();
          }
        });
      }
    },
    "Live": function () {
      Mucho.Swiper.HeadNav();
      Mucho.Swiper.TypeSelect();
      $("#leo-type li").bind("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
        var _0x406e7f = $(this).data("value");
        $("#leo_type_list").html("<ul class=\"leo-list-item\" id=\"leo_type_list_body\"></ul>");
        Mucho.Swiper.TypeSelect();
        Mucho.Panel.Loadata(_0x406e7f);
      });
      Mucho.Panel.Loadata(0);
    },
    "Loadata": function (_0x5b6dca) {
      Mucho.Ajax(siteinfo.url, "VodList", {
        "panel": "live",
        "id": _0x5b6dca
      }, function (_0x28c1ed) {
        template.helper("num", function (_0x5eaeda, _0x2835ca) {
          if (_0x2835ca == "list") return 1;else {
            if (_0x2835ca == "vod") {
              return 999;
            }
          }
        });
        var _0x29ad49 = template("leo_vod_item_b", {
          "list": _0x28c1ed.data.live
        });
        $("#leo_type_list_body").html(_0x29ad49);
        Mucho.Plug.Endload();
        Mucho.Plug.LazyLoad();
      });
    }
  },
  "Search": {
    "Init": function () {
      Mucho.Search.Lenovo();
      _0x549a2b();
      function _0x549a2b() {
        $("#leo-sousou-storage").html("");
        $("#leo-sousou-blank").show();
        if (store.enabled) {
          var _0x509327 = store.get("hiskey") ? store.get("hiskey") : [];
          if (_0x509327 !== 0) {
            for (var _0xcc6976 = 0; _0xcc6976 < _0x509327.length; _0xcc6976++) {
              $("#leo-sousou-storage").append("<a href=\"javascript:;\" class=\"leo-ellipsis\">" + _0x509327[_0xcc6976].key + "</a>");
              _0x509327[_0xcc6976] !== "" && $("#leo-sousou-blank").hide();
            }
          }
        }
        $("#leo-sousou-storage a").click(function () {
          var _0x2bb55a = $(this).text();
          $("#leo-sousou-wd").val(_0x2bb55a);
          $("#Search").click();
        });
      }
      $("#Search").click(function () {
        {
          var _0x39ef81 = {
            "key": $("#leo-sousou-wd").val()
          };
          if (!_0x39ef81.key) {
            layer.msg("搜索内容不能为空哦");
            return false;
          } else layer.msg("正在搜索中"), $("#leo-sousou-form").submit();
          var _0x2ed268 = store.get("hiskey") ? store.get("hiskey") : [];
          if (_0x2ed268 !== 0) {
            for (var _0x2def0c = 0; _0x2def0c < _0x2ed268.length; _0x2def0c++) {
              if (_0x2ed268[_0x2def0c].key == _0x39ef81.key) {
                _0x2ed268.splice(_0x2def0c, 1);
                break;
              }
            }
          }
          _0x2ed268.unshift(_0x39ef81);
          if (_0x2ed268.length > 6) _0x2ed268.length = 6;
          store.set("hiskey", _0x2ed268);
          _0x549a2b();
          Mucho.Pop.Search.Close();
        }
      });
      $("#leo-sousou-form").keydown(function () {
        {
          if (event.keyCode == 13) return $("#Search").click(), false;
        }
      });
      $("#leo-sousou-delete").click(function () {
        store.remove("hiskey");
        layer.msg("搜索记录已清空");
        _0x549a2b();
      });
    },
    "Lenovo": function () {
      $("#leo-sousou-wd").bind("input propertychange", function () {
        Mucho.Ajax(siteinfo.url, "VodList", {
          "lenovo": $("#leo-sousou-wd").val()
        }, function (_0x154926) {
          {
            _0x154926.data = Mucho.Plug.jsdecode(_0x154926.data);
            if (_0x154926.data != null && _0x154926.data.length > 9) _0x154926.data.length = 8;
            var _0xc275ec = "<div class=\"leo-pop-item\"><div class=\"leo-pop-rank-box\"><ul class=\"leo-pop-rank-item-2\" id=\"leo-lenovo-item\">";
            _0xc275ec += template("leo_lenovo_item", {
              "list": _0x154926.data
            });
            _0xc275ec += "</ul></div></div><script>$(\"#leo-lenovo-item li\").on(\"click\", function() {var txt = $(this).html();$(\"#leo-sousou-wd\").val(txt);$(\"#Search\").click();});</script>";
            $("#leo-sousou-wd").val() !== "" ? $("#leo-load-lenovo").html(_0xc275ec) : $("#leo-load-lenovo").html("");
          }
        });
      });
    },
    "LoadCount": function (_0x4e5eee) {
      Mucho.Ajax(siteinfo.url, "VodList", {
        "search": _0x4e5eee
      }, function (_0x3c2ed8) {
        {
          _0x3c2ed8.data = Mucho.Plug.jsdecode(_0x3c2ed8.data);
          $("#leo-vod-360").html(_0x3c2ed8.data.vod_all[0].count);
          $("#leo-vod-yun").html(_0x3c2ed8.data.vod_yun[0].count);
          template.helper("num", function (_0x5357ab, _0xfb2eb9) {
            {
              if (_0xfb2eb9 == "list") return 1;else {
                if (_0xfb2eb9 == "vod") return 20;
              }
            }
          });
          var _0x32e769 = template("leo_vod_item_s", {
            "list": _0x3c2ed8.data.vod_all
          });
          $("#leo-load-list-1").html(_0x32e769);
          var _0x3d3073 = template("leo_vod_item_s", {
            "list": _0x3c2ed8.data.vod_yun
          });
          $("#leo-load-list-2").html(_0x3d3073);
          Mucho.Plug.Endload();
          Mucho.Plug.LazyLoad();
        }
      }, function () {
        $("#leo-load-list-1").html("<div class=\"leo-load-item\"><img src=\"" + siteinfo.url + "asset/img/MuchoDc/error.gif\"><span>加载失败啦，刷新试试~</span></div>");
      }, function () {
        $("#leo-load-list-1").html("<div class=\"leo-load-item\"><img src=\"" + siteinfo.url + "asset/img/MuchoDc/loading.gif\"><span>正在加载中…</span></div>");
      });
    }
  }
};
$(function () {
  Mucho.Init();
  Mucho.History.Init();
  Mucho.Plug.Dialog(dialog);
  Mucho.Search.Init();
});