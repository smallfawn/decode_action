//Sat Jan 18 2025 08:58:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var EC = {
  "isSlid": true,
  "Width": $(window).width(),
  "Init": function () {
    EC.Init.LazyLoad = new LazyLoad({});
    $("#dsSo").click(function () {
      EC.Empty($(".search-box .input").val()) && (event.preventDefault(), _EC.Pop.Msg(language["48"], "", "error"));
    });
    EC.Style.Footer();
    $(".gen-history").click(function () {
      $(".pop-2").addClass("show").siblings(".box-bg2").show();
      EC.Init.LazyLoad.update();
      $("body").css({
        "height": "100%",
        "width": "100%",
        "overflow": "hidden"
      });
    });
    $(".pop-bj").click(function () {
      $(".pop-list-body").removeClass("show").siblings(".box-bg2").hide();
      $("body").css({
        "height": "",
        "width": "",
        "overflow": ""
      });
    });
    $(".pop-2 span").click(function () {
      $(this).addClass("on").siblings().removeClass("on");
      let _0x4646c4 = $(".pop-2 span").index(this),
        _0x4f9f07 = $(".history").eq(_0x4646c4);
      _0x4f9f07.fadeIn(800).siblings().hide();
      _0x4f9f07.addClass("check").siblings().removeClass("check");
      if (EC.Empty(EC.Cookie.Get("user_id"))) {
        $(".user-history").html("<div class=\"null cor5\"><img src=\"" + maccms.path2 + "static/ds5/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["0"] + "</span></div>" + "<a href=\"javascript:\" class=\"button top30 head-user\" style=\"width:100%\">" + language["1"] + "</a>");
      } else {
        $(".user-history li").length === 0 && EC.Ajax(maccms.path + "/index.php/api/history", "post", "json", "", function (_0x2616ca) {
          if (_0x2616ca.code === 1) {
            let _0x57912b = "";
            $.each(_0x2616ca.list, function (_0x142943, _0x2d3a70) {
              _0x57912b += "<li><a class=\"history-a flex\" href=\"" + _0x2d3a70.data.link + "\" target=\"video\" title=\"" + _0x2d3a70.data.name + "\"><img class=\"lazy lazy1\" referrerpolicy=\"no-referrer\" alt=\"" + _0x2d3a70.data.name + "\" data-src=\"" + _0x2d3a70.data.pic + "\"/>" + "<div class=\"history-r\"><div class=\"hide2\">" + _0x2d3a70.data.name + "</div><div><span class=\"cor5\">" + _0x2d3a70.data.type.type_name + "</span></div></div></a></li>";
            });
            $(".user-history ul").html(_0x57912b);
            EC.Init.LazyLoad.update();
            Number($(".lang-bnt").length) === 1 && zh_tranBody();
          } else $(".user-history ul").html(EC.History.Msg);
        });
      }
    });
    $(".user-share-button").click(function () {
      EC.Pop.Show($(".user-share-html").html(), language["3"], function () {});
    });
    let _0x39df82 = $(".gen-loading"),
      _0x4c4450 = _0x39df82.data("time");
    setTimeout(function () {
      $(".gen-loading").fadeOut("slow");
    }, _0x4c4450);
    $(".head-more-a").hover(function () {
      $(".nav-more").html("&#xe564;");
      $(".head-more").show();
    }, function () {
      $(".nav-more").html("&#xe563;");
      $(".head-more").hide();
    });
    let _0x118876 = null,
      _0x557990 = $(".head"),
      _0x3a299c = $(".row-2 .tim-box"),
      _0x3ac2a8 = null;
    _0x557990.length > 0 && (_0x118876 = _0x557990.offset().top);
    if (_0x3a299c.length > 0) {
      _0x3ac2a8 = _0x3a299c.eq(_0x3a299c.length - 1).offset().top;
    }
    $(window).scroll(EC.debounce(function () {
      let _0x2a93b8 = $(this).scrollTop();
      _0x557990.toggleClass("head-b", _0x2a93b8 > _0x118876).css("position", _0x2a93b8 > _0x118876 ? "fixed" : "");
      _0x2a93b8 > 300 ? $(".top").fadeIn(600) : $(".top").fadeOut(600);
      EC.Width > 991 && (_0x2a93b8 > _0x3ac2a8 ? _0x3a299c.eq(_0x3a299c.length - 1).css({
        "position": "fixed",
        "top": "100px",
        "width": $(".row-2").width()
      }) : _0x3a299c.eq(_0x3a299c.length - 1).css({
        "position": "",
        "top": "",
        "width": ""
      }));
    }, 50));
    $(".top").click(function () {
      $("html,body").animate({
        "scrollTop": 0
      }, 500);
      _0x557990.removeClass("head-b").css({
        "position": ""
      });
    });
    if (Number($(".slid-e").length) === 1) {
      let _0x474e3a = new Swiper(".swiper3", {
        "loop": true,
        "slidesPerView": 1,
        "pagination": {
          "el": ".swiper-pagination"
        },
        "navigation": {
          "nextEl": ".swiper-button-next",
          "prevEl": ".swiper-button-prev"
        },
        "on": {
          "slideChangeTransitionStart": function () {
            _0x131ed8();
            $(".muted").off("click");
            $(".toReplay").off("click");
            $(".slid-e-video").removeClass("v-show");
            $(".slid-e-bj").removeClass("v-hidden");
          },
          "slideChangeTransitionEnd": function () {
            $(".wap-hide").is(":hidden") == false && EC.isSlid && (EC.isSlid = false, setTimeout(function () {
              EC.isSlid = true;
              _0x4258e5();
            }, 1000));
          }
        }
      });
      function _0x131ed8() {
        let _0x5b4e64 = Array.from(document.getElementsByClassName("preview"));
        for (let _0x5e9dbf = 0; _0x5e9dbf < _0x5b4e64.length; _0x5e9dbf++) {
          const _0x5a5ebd = _0x5b4e64[_0x5e9dbf];
          _0x5a5ebd.pause();
          _0x5a5ebd.currentTime = 0;
        }
      }
      let _0x399a3c = 0;
      function _0x4258e5() {
        let _0x569ce7 = document.querySelector(".slid-e").querySelector(".swiper-slide-active").querySelector("video"),
          _0x53d579 = $(".slid-e .swiper-slide-active");
        if (~~_0x569ce7.duration > 10) {
          _0x53d579.find(".slid-e-video").addClass("v-show");
          _0x53d579.find(".slid-e-bj").addClass("v-hidden");
          _0x569ce7.muted ? $(".muted .fa").removeClass("ds-shengyin").addClass("ds-liulan") : $(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin");
          $(".muted").click(function () {
            if (_0x569ce7.muted) $(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin"), _0x569ce7.muted = false, _0x399a3c = 1;else {
              $(".muted .fa").removeClass("ds-shengyin").addClass("ds-liulan");
              _0x569ce7.muted = true;
              _0x399a3c = 0;
            }
          });
          if (_0x399a3c === 1) {
            $(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin");
            _0x569ce7.muted = false;
          }
          $(".toReplay").click(function () {
            _0x53d579.find(".slid-e-video").addClass("v-show");
            _0x53d579.find(".slid-e-bj").addClass("v-hidden");
            _0x569ce7.currentTime = 0;
            _0x569ce7.play();
          });
          _0x569ce7.play();
          _0x569ce7.addEventListener("ended", function () {
            _0x53d579.find(".slid-e-video").removeClass("v-show");
            _0x53d579.find(".slid-e-bj").removeClass("v-hidden");
            _0x474e3a.slideNext();
          });
        } else setTimeout(function () {
          _0x474e3a.slideNext();
        }, 6000);
      }
    }
    let _0x5860c1 = $("#height_limit");
    _0x5860c1.height() >= 80 && (_0x5860c1.addClass("occlusion"), $(".text-open").show());
    $(".tim-bnt").click(function () {
      if (_0x5860c1.hasClass("height_rel")) $(".tim-bnt").html("<i class=\"fa r6 ease\">&#xe563;</i>" + language["4"]), _0x5860c1.removeClass("height_rel"), _0x5860c1.addClass("occlusion");else {
        $(".tim-bnt").html("<i class=\"fa r6 ease\">&#xe564;</i>" + language["5"]);
        _0x5860c1.addClass("height_rel");
        _0x5860c1.removeClass("occlusion");
      }
    });
    EC.Swiper.Navs();
    EC.Swiper.Slide();
    EC.Swiper.Roll();
    EC.Actor.Detail();
    $(".gen-left-list").click(function () {
      let _0x235c52 = $(".head-more").html(),
        _0x57b21c = "bold0",
        _0x3b01f7 = "wap-show1",
        _0xabf7cc = $(".head-nav");
      _0xabf7cc.hasClass("bold1") && (_0x57b21c = "bold1");
      _0xabf7cc.hasClass("wap-show0") && (_0x3b01f7 = "wap-show0");
      EC.Pop.Drawer("<div class='drawer-nav drawer-scroll " + _0x57b21c + " " + _0x3b01f7 + "'><div class='drawer-scroll-list'>" + _0x235c52 + "</div></div>", function () {
        let _0x333ac5 = $(".gen-account-menu").html();
        $(".drawer-list-box").prepend("<div class='drawer-menu cor2'>" + _0x333ac5 + "</div>");
      });
    });
    $(".playBut").click(function () {
      let _0xf47f76 = $(this).attr("data-url");
      $(".play-advance .topfadeInUp").html("<video id=\"xkPlayer\" width=\"100%\" height=\"100%\" controls preload=\"auto\" autoplay><source src=\"" + _0xf47f76 + "\" type=\"video/mp4\"></video>");
      $(".play-advance").show();
    });
    $(".play-advance .box-bg,.play-advance .mfp-close").click(function () {
      let _0x3c2654 = document.getElementById("xkPlayer");
      _0x3c2654.currentTime = 0;
      _0x3c2654.pause();
      $(".play-advance").hide();
      $(".mfp-iframe").remove();
    });
    $(".deployment").click(function () {
      let _0x15eb04 = $(".info-parameter").html();
      EC.Pop.Drawer(_0x15eb04, function () {
        $(".drawer-list-box").addClass("drawer-list-b bj3");
        $(document).on("click", ".drawer-of", function () {
          EC.Pop.DrawerDel();
        });
      });
    });
    $(".wap-diy-vod-e .vod-link").hover(function () {
      $(this).addClass("box");
      $(this).children(".vod-no-dom-show").hide();
      $(this).children(".vod-no-dom").show();
    }, function () {
      $(this).removeClass("box");
      $(this).children(".vod-no-dom-show").show();
      $(this).children(".vod-no-dom").hide();
    });
    $("#BuyPopEdom").click(function () {
      let _0x30cfef = $(this);
      _0x30cfef.attr("data-id") && confirm(language["6"]) && EC.Ajax(maccms.path + "/index.php/user/ajax_buy_popedom.html?id=" + _0x30cfef.attr("data-id") + "&mid=" + _0x30cfef.attr("data-mid") + "&sid=" + _0x30cfef.attr("data-sid") + "&nid=" + _0x30cfef.attr("data-nid") + "&type=" + _0x30cfef.attr("data-type"), "get", "json", "", function (_0xe48dbf) {
        _0x30cfef.addClass("disabled");
        _EC.Pop.Msg(_0xe48dbf.msg);
        Number(_0xe48dbf.code) === 1 && top.location.reload();
        _0x30cfef.removeClass("disabled");
      });
    });
    $("#check").click(function () {
      let _0x4c62b5 = $(this);
      if (_0x4c62b5.attr("data-id")) {
        EC.Ajax(maccms.path + "/index.php/ajax/pwd.html?id=" + _0x4c62b5.attr("data-id") + "&mid=" + _0x4c62b5.attr("data-mid") + "&type=" + _0x4c62b5.attr("data-type") + "&pwd=" + _0x4c62b5.parents("form").find("input[name=\"pwd\"]").val(), "get", "json", "", function (_0x394dd0) {
          _0x4c62b5.addClass("disabled");
          _EC.Pop.Msg(_0x394dd0.msg);
          Number(_0x394dd0.code) === 1 && location.reload();
          _0x4c62b5.removeClass("disabled");
        });
      }
    });
    switch (maccms.aid) {
      case "12":
      case "11":
        let _0x35ddc9 = $("#dataList");
        if (_0x35ddc9.length > 0) {
          let _0x19244c = _0x35ddc9.data(),
            _0x490e10 = {
              "type": _0x19244c.type,
              "class": _0x19244c.class,
              "area": _0x19244c.area,
              "lang": _0x19244c.lang,
              "version": _0x19244c.version,
              "state": _0x19244c.state,
              "letter": _0x19244c.letter
            };
          $(".ec-casc-list .swiper-slide").click(function () {
            $(this).addClass("nav-dt").siblings().removeClass("nav-dt");
            EC.Swiper.Navs();
            _0x490e10[$(this).data("type")] = $(this).data("val");
            if (EC.Empty($(this).data("type"))) return;
            _0x35ddc9.html("");
            HTML.Skeleton(_0x35ddc9, 3, _0x19244c.tpl);
            EC.flow.get(_0x490e10, _0x35ddc9, _0x19244c, function () {});
          });
          $(".site-tabs a").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            if (Number($("#dataList .null").length) === 1) return;
            _0x490e10.by = $(this).data("type");
            _0x35ddc9.html("");
            HTML.Skeleton(_0x35ddc9, 3, _0x19244c.tpl);
            EC.flow.get(_0x490e10, _0x35ddc9, _0x19244c, function () {});
          });
          HTML.Skeleton(_0x35ddc9, 3, _0x19244c.tpl);
          _0x490e10[$(this).data("type")] = $(this).data("val");
          EC.flow.get(_0x490e10, _0x35ddc9, _0x19244c, function () {});
        }
        break;
      case "14":
      case "104":
      case "15":
        $(".anthology-tab a").click(function () {
          $(this).addClass("on nav-dt").siblings().removeClass("on nav-dt");
          let _0x4732c9 = $(".anthology-tab a").index(this),
            _0x3e1f12 = $(".anthology-list .none").eq(_0x4732c9);
          _0x3e1f12.fadeIn(800).siblings().hide();
          _0x3e1f12.addClass("dx").siblings().removeClass("dx");
          EC.Swiper.Navs();
        }), $("#zxdaoxu").each(function () {
          $(this).on("click", function (_0x4e3f91) {
            _0x4e3f91.preventDefault();
            $(".dx").each(function () {
              let _0x23071d = $(this).find("li");
              for (let _0x491a99 = 0, _0x3160a8 = _0x23071d.length - 1; _0x491a99 < _0x3160a8;) {
                let _0x16c1d6 = _0x23071d.eq(_0x491a99).clone(true),
                  _0x352648 = _0x23071d.eq(_0x3160a8).replaceWith(_0x16c1d6);
                _0x23071d.eq(_0x491a99).replaceWith(_0x352648);
                ++_0x491a99;
                --_0x3160a8;
              }
            });
          });
        }), $("#role .public-list-box").click(function () {
          let _0xcd7f99 = $(this).index(),
            _0x33b151 = $("#role .cor5").eq(_0xcd7f99).text(),
            _0x48bda1 = $("#role .time-title").eq(_0xcd7f99).text(),
            _0x4b5b64 = $("#role .lazy").eq(_0xcd7f99).data(),
            _0xbbbb1c = _0x4b5b64.text;
          if (_0xbbbb1c.length < 1) {
            _0xbbbb1c = language["7"];
          }
          let _0x4077aa = "<div class=\"role-card\"><div class=\"card-top flex\"><div class=\"left\"><img class=\"lazy\" src=\"" + _0x4b5b64.src + "\" alt=\"" + _0x48bda1 + "\"></div>\n" + "<div class=\"right\"><p>" + _0x48bda1 + "</p><p class=\"cor5\">" + _0x33b151 + "</p></div></div> \n" + "<div class=\"card-bottom\"><p class=\"card-title\">" + language["8"] + "</p><div class=\"card-text cor5\">" + _0xbbbb1c + "</div></div></div>";
          EC.Pop.Show(_0x4077aa, language["9"], function () {});
        }), $(".vod-detail .vod-detail-bnt .button").click(function () {
          location.href = $(".anthology-list-play a").eq(0).attr("href");
        }), $(".player-button-ac").click(function () {
          $(".anthology-list").toggleClass("player-list-ac");
        }), $(".play-tips-bnt").click(function () {
          $(".tips-box").slideToggle();
          $(".charge,.player-share-box").hide();
        }), $(".ec-report").click(function () {
          let _0x5ec59 = $(this).data();
          EC.Gbook.Report(_0x5ec59);
        }), $(".charge-button").click(function () {
          $(".charge").fadeToggle();
          $(".player-share-box,.tips-box").hide();
        });
        $(".comment-form").length < 1 && (EC.Comment.Login = $(this).data().login, EC.Comment.Verify = $(this).data().verify, EC.Comment.Init(), EC.Comment.Show(1));
        $("#expand_details").click(function () {
          $(".player-vod-box").hide();
          $(".player-list-box").hide();
          $(".player-details-box").show();
        }), $(".player-close").click(function () {
          $(".player-vod-box").show();
          $(".player-list-box").show();
          $(".player-details-box").hide();
          $(".player-return .none").hide();
          $(".player-vod-no1").show();
          $(".player-vod-no2").html("<div class=\"top40\"><div class=\"loading\"><span></span><span></span><span></span><span></span><span></span></div></div>").hide();
        }), $(".player-vod-no1 .public-list-box").click(function () {
          $(".player-return .none").show();
          $(".player-vod-no1").hide();
          $(".player-vod-no2").show();
          EC.Ajax(maccms.path + "/index.php/api/actor_vod_player_api?id=" + $(this).attr("data-id"), "get", "json", "", function (_0xe9b372) {
            if (Number(_0xe9b372.code) === 1) {
              let _0x3dbf38 = "";
              $.each(_0xe9b372.list, function (_0x5efb98, _0x50210d) {
                _0x3dbf38 = _0x3dbf38 + "<div class=\"public-list-box public-pic-b\"><div class=\"public-list-div\"><a class=\"public-list-exp\" href=\"" + _0x50210d.url + "\" title=\"" + _0x50210d.name + "\">" + "<img referrerpolicy=\"no-referrer\" class=\"lazy lazy1 gen-movie-img " + maccms.vod_mask + "\" alt=\"" + language["10"] + "\" data-src=\"" + _0x50210d.pic + "\" /></a>\n" + "<i class=\"collection fa\" data-type=\"2\" data-mid=\"" + maccms.mid + "\" data-id=\"" + _0x50210d.id + "\">&#xe577;</i></div>\n" + "<div class=\"public-list-button\"><a target=\"_blank\" class=\"time-title hide ft4\" href=\"" + _0x50210d.url + "\" title=\"" + _0x50210d.name + "\">" + _0x50210d.name + "</a></div></div>";
              });
              $(".player-vod-no2").html("<div class=\"role-card top20\">" + _0xe9b372.html + "</div><div class=\"title-m cor4\"><h5>" + language["11"] + "</h5></div><div class=\"flex wrap border-box hide-b-16 wap-diy-vod-a\">" + _0x3dbf38 + "</div>");
              EC.Init.LazyLoad.update();
            } else _EC.Pop.Msg(language["12"], "", "error");
          });
        }), $(".player-return .none").click(function () {
          $(this).hide();
          $(".player-vod-no1").show();
          $(".player-vod-no2").html("<div class=\"top40\"><div class=\"loading\"><span></span><span></span><span></span><span></span><span></span></div></div>").hide();
        });
        if (Number(maccms.jx) === 1) {
          let _0x40070e = $(".line-switch");
          EC.player.player_jx(_0x40070e.attr("data-api"), _0x40070e.attr("data-url"));
          $(".vod-playerUrl").click(function () {
            _0x40070e.html("");
            EC.player.player_jx(_0x40070e.attr("data-api"), $(this).attr("data-form"));
          });
          $(document).on("click", ".line-switch a", function () {
            $(this).addClass("bj2").siblings().removeClass("bj2");
            maccms.jx_index = $(this).index();
            $("#playleft iframe").attr("src", $(this).attr("data-api") + MacPlayer.PlayUrl);
            _EC.Pop.Msg(language["13"], "", "success");
          });
        }
        break;
      case "4":
        EC.Gbook.Init();
        break;
      case "24":
        $(".tim-content img").touchTouch();
        let _0x1fec5 = $(".ds-comment");
        Number(_0x1fec5.length) === 1 && (EC.Comment.Login = _0x1fec5.data().login, EC.Comment.Verify = _0x1fec5.data().verify, EC.Comment.Init(), EC.Comment.Show(1));
        break;
      case "21":
        let _0x5e77cb = $("#dataList");
        if (_0x5e77cb.length > 0) {
          let _0x6e0c1b = _0x5e77cb.data();
          HTML.Skeleton(_0x5e77cb, 3, _0x6e0c1b.tpl);
          let _0x4a9faf = {
            "type": _0x6e0c1b.type
          };
          EC.flow.get(_0x4a9faf, _0x5e77cb, _0x6e0c1b, function () {
            EC.Swiper.Roll();
          });
        }
        break;
      case "23":
        let _0x1791f0 = $("#dataList");
        if (_0x1791f0.length > 0) {
          let _0x1e0ec8 = _0x1791f0.data();
          HTML.Skeleton(_0x1791f0, 3, _0x1e0ec8.tpl);
          let _0xfb3a95 = {
            "wd": _0x1e0ec8.type,
            "tag": _0x1e0ec8.wdtag
          };
          EC.flow.get(_0xfb3a95, _0x1791f0, _0x1e0ec8, function () {
            EC.Swiper.Roll();
          });
        }
        break;
      case "84":
        $(".art-so-tag").click(function () {
          let _0x2dd555 = $("#dataList"),
            _0x4972e7 = _0x2dd555.data();
          _0x2dd555.html("");
          HTML.Skeleton(_0x2dd555, 3, _0x4972e7.tpl);
          let _0x4ac9d6 = {
            "wd": _0x4972e7.type,
            "tag": _0x4972e7.wdtag
          };
          EC.flow.get(_0x4ac9d6, _0x2dd555, _0x4972e7, function () {
            EC.Swiper.Roll();
          });
        });
        break;
      case "82":
        let _0x7345de = $("#dataList");
        if (_0x7345de.length > 0) {
          let _0x1bf24a = _0x7345de.data(),
            _0x4d05f7 = {
              "type": _0x1bf24a.type
            };
          $(".ec-casc-list .swiper-slide").click(function () {
            $(this).addClass("nav-dt").siblings().removeClass("nav-dt");
            EC.Swiper.Navs();
            _0x4d05f7[$(this).data("type")] = $(this).data("val");
            _0x7345de.html("");
            HTML.Skeleton(_0x7345de, 3, _0x1bf24a.tpl);
            EC.flow.get(_0x4d05f7, _0x7345de, _0x1bf24a, function () {});
          });
          HTML.Skeleton(_0x7345de, 3, _0x1bf24a.tpl);
          _0x4d05f7[$(this).data("type")] = $(this).data("val");
          EC.flow.get(_0x4d05f7, _0x7345de, _0x1bf24a, function () {});
        }
        break;
      case "302":
        let _0x5734b9 = $("#dataList");
        if (_0x5734b9.length > 0) {
          let _0xa8fd81 = _0x5734b9.data(),
            _0x5e1a66 = {};
          $(".ec-casc-list .swiper-slide").click(function () {
            $(".swiper-slide").removeClass("nav-dt");
            $(this).addClass("nav-dt");
            EC.Swiper.Navs();
            _0x5e1a66.type = $(this).data("id");
            _0x5734b9.html("");
            HTML.Skeleton(_0x5734b9, 3, _0xa8fd81.tpl);
            EC.flow.get(_0x5e1a66, _0x5734b9, _0xa8fd81, function () {});
          });
          HTML.Skeleton(_0x5734b9, 3, _0xa8fd81.tpl);
          _0x5e1a66[$(this).data("type")] = $(this).data("val");
          EC.flow.get(_0x5e1a66, _0x5734b9, _0xa8fd81, function () {});
        }
        break;
    }
    Number(maccms.mid) === 11 && ($(".web-so-btn").click(function () {
      let _0x4fb4bc = $(".website-val").val();
      if (_0x4fb4bc) {
        window.open($(".website-filter-grid .action").attr("data-url") + _0x4fb4bc);
      } else {
        _EC.Pop.Msg(language["14"], "", "error");
      }
    }), $(".website-filter-grid .icon").click(function () {
      $(".website-filter-grid .action").removeClass("action");
      $(this).addClass("action");
    }), $(".togo").click(function () {
      let _0x3c14a8 = $(this).attr("data-id"),
        _0x302908 = $(this).attr("data-mi");
      Number(_0x302908) === 1 ? _EC.Pop.Msg(language["15"], "", "error") : EC.Ajax(maccms.path + "/index.php/api/website?id=" + _0x3c14a8, "get", "json", "", function (_0x23c523) {
        _0x23c523.smg === 1 ? EC.Pop.Show("<div class=\"website-title\">" + _0x23c523.data.website_name + "</div><div class=\"card-text cor5\"><p>" + _0x23c523.data.website_blurb + "</p><p>" + _0x23c523.data.website_content + "</p></div><div class=\"flex website-tag top20\">" + _0x23c523.data.website_tag + "</div>", language["20"], function () {}) : _EC.Pop.Msg(language["15"], "", "error");
      });
    }), $("#tou_gao").click(function () {
      if (Number(EC.User.IsLogin) === 0) {
        EC.User.Login();
        return;
      }
      EC.Pop.Show("<form class=\"tg-form\"><p class=\"cor5 top10\">" + language["16"] + "</p><div class=\"region nav-link textarea bj\">\n" + "<textarea class=\"tg-content cor5\" name=\"gbook_content\" style=\"width:100%;height:100%\"></textarea>\n" + "</div><div class=\"flex\"><input type=\"text\" class=\"input bj br cor5\" name=\"verify\" value=\"\" maxlength=\"4\" size=\"20\">\n" + "<img class=\"ds-verify-img\" src=\"/index.php/verify/index.html\" alt=\"" + language["19"] + "\" onclick=\"this.src = this.src+'?'\"></div>\n" + "<input type=\"button\" class=\"tg-submit button top20 submit_btn\" style=\"width:100%\" value=\"" + language["17"] + "\"></form>", language["18"], function () {
        $(".tg-submit").click(function () {
          EC.Gbook.Tg();
        });
      });
    }));
    $("#website_user").click(function () {
      $.ajax({
        "url": window.location.href + "&pdw=" + $("#website_password").val(),
        "type": "post",
        "dataType": "json",
        "success": function (_0x460b0e) {
          if (Number(_0x460b0e.smg) === 1) {
            window.location.replace(_0x460b0e.url);
          } else window.location.replace("https://www.kugou.com/song/#hash=8C1A6044DDF1650A82B42769C47FD645&album_id=501600");
        }
      });
    });
    $(".jp-download").click(function () {
      let _0x480723 = "<p class=\"cor5 top10\">" + language["21"] + "</p><div class=\"region nav-link textarea bj\"><textarea id=\"bar2\" class=\"cor5\" style=\"width:100%;height:100%\">" + language["22"] + "《" + ecData.list[ecData.playid].name + "》" + language["23"] + ecData.list[ecData.playid].url + "</textarea></div>\n" + "<button type=\"button\" class=\"button copyBtn\" style=\"width:100%\" data-clipboard-action=\"copy\" data-clipboard-target=\"#bar2\">" + language["24"] + "</button>";
      EC.Pop.Show(_0x480723, language["25"], function () {
        $(document).on("click", ".copyBtn", function () {
          _EC.Pop.Msg(language["26"], "", "success");
          $(".window").remove();
        });
      });
    });
    $(".ds-pop").length > 0 && EC.Empty(EC.Cookie.Get("ecPopup")) && (EC.Cookie.Set("ecPopup", 1, 1), $("#notice").show(), $("#notice .box-bg,#notice .button").click(function () {
      $("#notice").hide();
    }));
    $(".player-switch").click(function () {
      let _0xba4fb6 = $(".player");
      _0xba4fb6.hasClass("player-switch-box") ? ($(this).html("&#xe565;"), _0xba4fb6.removeClass("player-switch-box")) : ($(this).html("&#xe566;"), _0xba4fb6.addClass("player-switch-box"));
    });
    const _0x306c95 = " %c \u77ED\u89C6\u4E3B\u9898 by \u8349\u6839\xAE %c QQ602524950|906259831\uFF08\u4E25\u7981\u5229\u7528\u4E3B\u9898\u5EFA\u8BBE\u8FDD\u6CD5\u7F51\u7AD9\uFF09 ";
    console.log("\n" + _0x306c95 + "\n", "color: #fadfa3; background: #030307; padding:5px 0; font-size:18px;", "background: #fadfa3; padding:5px 0; font-size:18px;");
    if ($(".week-title").length > 0) {
      let _0xf91679 = ["一", "二", "三", "四", "五", "六", "日"],
        _0x2f3886 = new Date().getDay();
      _0x2f3886 === 0 && (_0x2f3886 = 7);
      let _0x52f703 = $("#week-list" + _0x2f3886),
        _0x21a925 = _0x52f703.children();
      _0x52f703.show();
      $(".week-bj").addClass("week-" + _0x2f3886);
      $(".week-key" + _0x2f3886).addClass("tim");
      let _0x6541c = $("#dataList"),
        _0x31662e = _0x6541c.data(),
        _0x4f15e6 = {
          "weekday": _0xf91679[_0x2f3886 - 1],
          "num": _0x31662e.num,
          "by": _0x31662e.by,
          "type": _0x31662e.type
        };
      HTML.Skeleton(_0x21a925, 3, "vod");
      _0x2f767c(_0x4f15e6, _0x21a925, _0x31662e);
      $(".week-title .week-select a").click(function () {
        $(this).addClass("tim").siblings().removeClass("tim");
        let _0x21e475 = $(this).data();
        $(".week-bj").removeClass("week-1 week-2 week-3 week-4 week-5 week-6 week-7").addClass("week-" + _0x21e475.index);
        $(".wow").hide();
        _0x52f703 = $("#week-list" + _0x21e475.index);
        _0x52f703.show();
        _0x21a925 = _0x52f703.children();
        if (_0x21a925.html().length > 50) return;
        _0x4f15e6.weekday = _0x21e475.val;
        HTML.Skeleton(_0x21a925, 3, "vod");
        _0x2f767c(_0x4f15e6, _0x21a925, _0x31662e);
      });
    }
    function _0x2f767c(_0x443ecc, _0xe45067, _0xc05e4a) {
      setTimeout(function () {
        let _0x6f9e8 = [],
          _0x276416 = Math.round(new Date() / 1000),
          _0x28247e = _0x443ecc;
        _0x28247e.time = _0x276416;
        _0x28247e.key = EC.Md5(_0x276416);
        EC.Ajax(_0xc05e4a.api, "post", "json", _0x28247e, function (_0x2e856f) {
          if (Number(_0x2e856f.code) === 1) {
            _0x6f9e8 = HTML.Art(_0x2e856f, _0xc05e4a);
            if (EC.flow.empty(_0x2e856f.list.length, _0xe45067)) return;
            _0xe45067.html(_0x6f9e8.join(""));
            EC.Init.LazyLoad.update();
            EC.Style.Footer();
            $(".lang-bnt").length === 1 && zh_tranBody();
          } else Number(_0x2e856f.code) === 2 ? $(".flow-more").html(_0x2e856f.msg) : _EC.Pop.Msg(language["27"] + _0x2e856f.msg, "", "error");
        }, function () {
          _EC.Pop.Msg(language["28"], "", "error");
        });
      }, 100);
    }
  },
  "Style": {
    "Init": function () {
      let _0x51043b = $(".theme-style"),
        _0x43d840 = EC.Cookie.Get("ec-wap_style");
      if (!EC.Empty(_0x43d840)) {
        $("body").attr("class", _0x43d840);
        if (_0x43d840 === "theme1") {
          _0x51043b.html("&#xe574;").attr("data-id", 1);
        } else _0x51043b.html("&#xe575;").attr("data-id", 2);
      }
      _0x51043b.click(function () {
        EC.Style.Switch(_0x51043b);
      });
    },
    "Set": function (_0x26b976) {
      EC.Cookie.Set("ec-wap_style", _0x26b976);
    },
    "Switch": function (_0x403848) {
      let _0x511207 = _0x403848.attr("data-id");
      Number(_0x511207) === 1 ? ($("body").attr("class", "theme2"), _0x403848.html("&#xe575;").attr("data-id", 2), EC.Style.Set("theme2")) : ($("body").attr("class", "theme1"), _0x403848.html("&#xe574;").attr("data-id", 1), EC.Style.Set("theme1"));
    },
    "Footer": function () {
      $(".footer").removeClass("footerLess");
      $(document.body).height() < $(window).height() ? $(".footer").addClass("footerLess") : $(".footer").removeClass("footerLess");
    }
  },
  "Cookie": {
    "Set": function (_0x4a9564, _0x5d4351, _0x7e3766) {
      let _0x3d441c = new Date();
      _0x3d441c.setTime(_0x3d441c.getTime() + _0x7e3766 * 24 * 60 * 60 * 1000);
      document.cookie = _0x4a9564 + "=" + encodeURIComponent(_0x5d4351) + ";path=/;expires=" + _0x3d441c.toUTCString();
    },
    "Get": function (_0x476d53) {
      let _0x271bf1 = document.cookie.match(new RegExp("(^| )" + _0x476d53 + "=([^;]*)(;|$)"));
      if (_0x271bf1 != null) return decodeURIComponent(_0x271bf1[2]);
    },
    "Del": function (_0x4c11d7) {
      let _0x3332db = new Date();
      _0x3332db.setTime(_0x3332db.getTime() - 1);
      let _0x11d270 = this.Get(_0x4c11d7);
      _0x11d270 != null && (document.cookie = _0x4c11d7 + "=" + encodeURIComponent(_0x11d270) + ";path=/;expires=" + _0x3332db.toUTCString());
    }
  },
  "Empty": function (_0x518960) {
    return _0x518960 == null || _0x518960 === "";
  },
  "debounce": function (_0x4c2613, _0x2e70c4) {
    let _0x5c25d4 = null;
    return function () {
      let _0x4e4468 = this,
        _0x124180 = arguments;
      clearTimeout(_0x5c25d4);
      _0x5c25d4 = setTimeout(function () {
        _0x4c2613.apply(_0x4e4468, _0x124180);
      }, _0x2e70c4);
    };
  },
  "GoBack": function () {
    let _0xe919bf = document.domain;
    document.referrer.indexOf(_0xe919bf) > 0 ? history.back() : window.location = "//" + _0xe919bf;
  },
  "Ajax": function (_0x12b643, _0x2aa594, _0x375e3e, _0x48b22b, _0x4ebba1, _0x5ee37f, _0x35671d) {
    _0x2aa594 = _0x2aa594 || "get";
    _0x375e3e = _0x375e3e || "json";
    _0x48b22b = _0x48b22b || "";
    _0x5ee37f = _0x5ee37f || "";
    _0x35671d = _0x35671d || "";
    $.ajax({
      "url": _0x12b643,
      "type": _0x2aa594,
      "dataType": _0x375e3e,
      "data": _0x48b22b,
      "timeout": 5000,
      "beforeSend": function (_0x82c453) {},
      "error": function (_0x237b88, _0x324bf8, _0x3d150a) {
        if (_0x5ee37f) _0x5ee37f(_0x237b88, _0x324bf8, _0x3d150a);
      },
      "success": function (_0x1b1140) {
        _0x4ebba1(_0x1b1140);
      },
      "complete": function (_0x18f47f, _0x36bd9f) {
        if (_0x35671d) _0x35671d(_0x18f47f, _0x36bd9f);
      }
    });
  },
  "flow": {
    "load": function (_0x579677) {
      _0x579677 = _0x579677 || {};
      let _0x241cfe = this,
        _0x5ede87 = 0,
        _0x24b266,
        _0x333af2,
        _0x1e991e,
        _0x333349 = $(_0x579677.elem);
      if (!_0x333349[0]) return;
      let _0x34d3d7 = $(_0x579677.scrollElem || document),
        _0x1aea91 = _0x579677.mb || 50,
        _0x5c1a89 = "isAuto" in _0x579677 ? _0x579677.isAuto : true,
        _0x185598 = _0x579677.end || language["29"],
        _0x4e3780 = _0x579677.scrollElem && _0x579677.scrollElem !== document,
        _0x3f359a = "<i class=\"fa ds-jiantouyou\"></i>" + language["30"],
        _0x71f13c = $("<div class=\"flow-more cor5\"><a href=\"javascript:;\">" + _0x3f359a + "</a></div>");
      !_0x333349.find(".flow-more")[0] && _0x333349.append(_0x71f13c);
      let _0x3b9635 = function (_0x539a64, _0x3985cd) {
          if (Number(_0x5ede87) === 1) {
            $(".flow-more").siblings().remove();
          }
          _0x539a64 = $(_0x539a64);
          _0x71f13c.before(_0x539a64);
          _0x3985cd = Number(_0x3985cd) === 0 ? true : null;
          _0x3985cd ? _0x71f13c.html(_0x185598) : _0x71f13c.find("a").html(_0x3f359a);
          _0x333af2 = _0x3985cd;
          _0x24b266 = null;
          EC.Init.LazyLoad.update();
        },
        _0x4e05cd = function () {
          _0x24b266 = true;
          _0x71f13c.find("a").html("<i class=\"loading3\"></i>" + language["31"]);
          typeof _0x579677.done === "function" && _0x579677.done(++_0x5ede87, _0x3b9635, _0x333349);
        };
      _0x4e05cd();
      _0x71f13c.find("a").on("click", function () {
        if (_0x333af2) return;
        _0x24b266 || _0x4e05cd();
      });
      if (!_0x5c1a89) return _0x241cfe;
      return _0x34d3d7.off("scroll"), _0x34d3d7.on("scroll", function () {
        let _0x237fe2 = $(this),
          _0x22fe13 = _0x237fe2.scrollTop();
        if (_0x1e991e) clearTimeout(_0x1e991e);
        if (_0x333af2 || !_0x333349.width()) return;
        _0x1e991e = setTimeout(function () {
          let _0x2d4c80 = _0x4e3780 ? _0x237fe2.height() : $(window).height(),
            _0x5e7667 = _0x4e3780 ? _0x237fe2.prop("scrollHeight") : document.documentElement.scrollHeight;
          _0x5e7667 - _0x22fe13 - _0x2d4c80 <= _0x1aea91 && (_0x24b266 || _0x4e05cd());
        }, 100);
      }), _0x241cfe;
    },
    "empty": function (_0x161b2b, _0x36bf2e) {
      if (Number(_0x161b2b) === 0) return _0x36bf2e.html("<div class=\"null cor5\"><img src=\"" + maccms.path2 + "static/ds5/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["32"] + "</span></div>"), true;
      return false;
    },
    "get": function (_0x2504fe, _0x221e36, _0x40bc77, _0x2a2160) {
      _0x221e36.length > 0 && EC.flow.load({
        "elem": "#dataList",
        "isAuto": _0x40bc77.pattern,
        "end": _0x40bc77.txt,
        "done": function (_0x569701, _0x4f239a, _0x49e7cc) {
          setTimeout(function () {
            let _0x4678f4 = [],
              _0x35e22d = Math.ceil(new Date().getTime() / 1000),
              _0x5aebb9 = $.extend(_0x2504fe, {
                "page": _0x569701,
                "time": _0x35e22d,
                "key": EC.Md5(_0x35e22d)
              });
            EC.Ajax(_0x40bc77.api, "post", "json", _0x5aebb9, function (_0x37c5cc) {
              if (Number(_0x37c5cc.code) === 1) {
                if (EC.flow.empty(_0x37c5cc.list.length, _0x49e7cc)) return;
                _0x4678f4 = HTML.Art(_0x37c5cc, _0x40bc77);
                _0x4f239a(_0x4678f4.join(""), _0x569701 < _0x37c5cc.pagecount);
                _0x2a2160();
                EC.Style.Footer();
                $(".lang-bnt").length === 1 && zh_tranBody();
              } else Number(_0x37c5cc.code) === 2 ? $(".flow-more").html(_0x37c5cc.msg) : _EC.Pop.Msg(language["27"] + _0x37c5cc.msg, "", "error");
            }, function () {
              _EC.Pop.Msg(language["28"], "", "error");
            });
          }, 100);
        }
      });
    }
  },
  "Copy": {
    "Init": function () {
      EC.Width < 767 ? ($(".play-score").click(function () {
        EC.Pop.Show($("#rating").prop("outerHTML"), "为本片评分", function () {});
      }), $(".vod-detail-share").click(function () {
        $(".vod-detail .share-box").remove();
        let _0x343809 = "<div class=\"cor5 radius\"><span class=\"share-tips\">" + language["34"] + "</span><span id=\"bar\" class=\"share-url bj cor5\">" + window.location.href + $(document).attr("title") + "</span><button type=\"button\" class=\"share-copy bj2 ho radius copyBtn\" data-clipboard-action=\"copy\" data-clipboard-target=\"#bar\">" + language["35"] + "</button></div>";
        EC.Pop.Show(_0x343809, language["18"], function () {
          $(document).on("click", ".copyBtn", function () {
            _EC.Pop.Msg(language["36"], "", "success");
            $(".window").remove();
          });
        });
        new ClipboardJS(".copyBtn");
      })) : ($(".share-url").html(window.location.href + $(document).attr("title")), new ClipboardJS(".copyBtn"), EC.Copy.Qrcode(), $(".vod-detail-share").hover(function () {
        $(".vod-detail .share-box").show();
        $(document).on("click", ".copyBtn", function () {
          $(".vod-detail .share-box").hide();
          _EC.Pop.Msg(language["36"], "", "success");
        });
      }, function () {
        $(".vod-detail .share-box").hide();
      }));
      $(".player-share-button").click(function () {
        $(".player-share-box").fadeToggle();
        $(".charge,.tips-box").hide();
        $(".player-share-box .copyBtn").click(function () {
          _EC.Pop.Msg(language["36"], "", "success");
          $(".player-share-box").slideUp();
        });
      });
      let _0x1a9fd2 = new ClipboardJS(".CopyUel");
      $(".CopyUel").click(function () {
        _0x1a9fd2.on("success", function () {
          _EC.Pop.Msg(language["37"], "", "success");
        });
        _0x1a9fd2.on("error", function () {
          _EC.Pop.Msg(language["38"], "", "error");
        });
      });
    },
    "Qrcode": function () {
      $(".hl-cans").each(function () {
        if ($(this).length) {
          $(this).qrcode({
            "width": 120,
            "height": 120,
            "text": encodeURI(window.location.href)
          });
          function _0x2c9fa5(_0x1e7c6a) {
            let _0x379186 = new Image();
            return _0x379186.src = _0x1e7c6a.toDataURL("image/png"), _0x379186;
          }
          let _0x4af277 = $("canvas")[0],
            _0x40f2d1 = _0x2c9fa5(_0x4af277);
          $(this).next(".share-pic").append(_0x40f2d1);
        }
      });
    }
  },
  "Swiper": {
    "Navs": function () {
      new Swiper(".nav-swiper", {
        "observer": true,
        "freeMode": true,
        "slidesPerView": "auto",
        "direction": "horizontal",
        "on": {
          "init": function () {
            EC.Swiper.Nav(this.$el, this.$wrapperEl, this.virtualSize);
          },
          "observerUpdate": function () {
            EC.Swiper.Nav(this.$el, this.$wrapperEl, this.virtualSize);
          }
        }
      });
    },
    "Nav": function (_0x27b524, _0x246378, _0xd7ed6c) {
      if (_0x27b524.find(".nav-dt").length > 0) {
        let _0x103fe9 = _0x27b524.find(".nav-dt").outerWidth(true),
          _0x17c8e2 = _0x27b524.find(".nav-dt")[0].offsetLeft,
          _0x534961 = _0x246378.parent().outerWidth(true),
          _0x20392d = parseInt(_0xd7ed6c);
        _0x246378.transition(300);
        if (_0x17c8e2 < (_0x534961 - parseInt(_0x103fe9)) / 2) {
          _0x246378.transform("translate3d(0px,0px,0px)");
        } else {
          if (_0x17c8e2 > _0x20392d - (parseInt(_0x103fe9) + _0x534961) / 2) _0x246378.transform("translate3d(" + (_0x534961 - _0x20392d) + "px,0px,0px)");else {
            _0x246378.transform("translate3d(" + ((_0x534961 - parseInt(_0x103fe9)) / 2 - _0x17c8e2) + "px,0px,0px)");
          }
        }
      }
    },
    "Slide": function () {
      new Swiper(".slide-swiper", {
        "autoplay": true,
        "loop": true,
        "slidesPerView": 1,
        "navigation": {
          "nextEl": ".swiper-button-next",
          "prevEl": ".swiper-button-prev"
        }
      });
      new Swiper(".mySwiper", {
        "loop": true,
        "autoplay": true,
        "clickable": true,
        "slidesPerView": 1,
        "pagination": {
          "el": ".swiper-pagination"
        },
        "navigation": {
          "nextEl": ".swiper-button-next",
          "prevEl": ".swiper-button-prev"
        }
      });
      new Swiper(".slide-swiper2", {
        "autoplay": {
          "disableOnInteraction": false
        },
        "navigation": {
          "nextEl": ".swiper-button-next",
          "prevEl": ".swiper-button-prev"
        },
        "loop": true,
        "slidesPerView": 1,
        "on": {
          "init": function () {
            let _0x3fc490 = $(".lazy-p").eq(1).css("backgroundImage");
            $(".slide-time-ios").css("backgroundImage", _0x3fc490);
          },
          "slideChangeTransitionEnd": function () {
            let _0x3af5d6 = $(".lazy-p").eq(this.realIndex - 1).css("backgroundImage");
            $(".slide-time-ios").css("backgroundImage", _0x3af5d6);
          }
        }
      });
    },
    "Roll": function () {
      new Swiper(".roll", {
        "paginationClickable": true,
        "slidesPerView": "auto"
      });
    }
  },
  "Actor": {
    "Detail": function () {
      new Swiper(".list-swiper", {
        "slidesPerView": "auto",
        "slidesPerGroup": 1,
        "observer": true,
        "navigation": {
          "nextEl": ".swiper-button-next",
          "prevEl": ".swiper-button-prev"
        }
      });
      let _0x516b21 = $(".star-works .actor-api");
      _0x516b21.length > 0 && ($(".star-works .public-list-box").length > 0 ? _0xc64ddc($(".star-active").attr("data-actor")) : $(".star-works").hide());
      $(".star-works-top .public-list-box").click(function () {
        $(this).addClass("star-active").siblings().removeClass("star-active");
        _0xc64ddc($(this).attr("data-actor"));
      });
      function _0xc64ddc(_0x2a9da7) {
        let _0x45f6e7 = "";
        for (let _0x48041b = 0; _0x48041b < 9; _0x48041b++) {
          _0x45f6e7 = _0x45f6e7 + "<div class=\"public-list-box public-pic-b swiper-slide\"><div class=\"public-list-div\">" + "<a class=\"public-list-exp\"><div class=\"lazy box\"><span class=\"loadIcon spin-dot-spin\"><i class=\"spin-dot-item\"></i><i class=\"spin-dot-item\"></i>" + "<i class=\"spin-dot-item\"></i><i class=\"spin-dot-item\"></i></span></div></a></div><div class=\"public-list-button\"><a class=\"time-title box radius\"></a>" + "</div></div>";
        }
        _0x516b21.html(_0x45f6e7);
        EC.Ajax(maccms.path + "/index.php/api/actor_vod_api?name=" + _0x2a9da7, "get", "json", "", function (_0x399f06) {
          if (Number(_0x399f06.code) === 1) {
            _0x45f6e7 = "";
            $.each(_0x399f06.list, function (_0x582dab, _0x2de36a) {
              _0x45f6e7 = _0x45f6e7 + "    <div class=\"public-list-box public-pic-" + _0x399f06.ajax.vod_pic + " swiper-slide\">\n" + "        <div class=\"public-list-div public-list-bj\">\n" + "            <a" + HTML.Target(_0x399f06.ajax.vod_target) + " class=\"public-list-exp\" href=\"" + _0x2de36a.url + "\">\n" + "                <img referrerpolicy=\"no-referrer\" class=\"lazy lazy1 gen-movie-img " + maccms.vod_mask + "\" alt=\"" + _0x2de36a.name + "\" data-src=\"" + _0x2de36a.pic + "\" />" + "                <span class=\"public-bg\"></span>\n" + "                <span class=\"public-play\"><i class=\"fa\">&#xe593;</i></span>\n" + "            </a>\n" + "        </div>\n" + "        <div class=\"public-list-button\"><a" + HTML.Target(_0x399f06.ajax.vod_target) + " class=\"time-title ft4 hide\" href=\"" + _0x2de36a.url + "\" title=\"" + _0x2de36a.name + "\">" + _0x2de36a.name + "</a></div>" + "    </div>";
            });
            _0x516b21.html(_0x45f6e7);
            EC.Init.LazyLoad.update();
            $(".lang-bnt").length === 1 && zh_tranBody();
          } else _EC.Pop.Msg(language["39"], "", "error");
        });
      }
    }
  },
  "Pop": {
    "Uid": "DCC147D11943AF75",
    "Drawer": function (_0x19ce9, _0x19b5f0) {
      if ($(".drawer-list").length > 0) {
        _EC.Pop.Msg(language["40"], "", "error");
        return;
      }
      $("body").append("<div class=\"drawer-list\"><div class=\"drawer-list-bg box-bg ease\" style=\"display:none\"></div><div class=\"drawer-list-box bj3\"></div></div>");
      $(".drawer-list-box").html(_0x19ce9);
      _0x19b5f0();
      setTimeout(function () {
        $(".drawer-list-bg").css({
          "display": "block"
        });
        $("body").css({
          "height": "100%",
          "width": "100%",
          "overflow": "hidden"
        });
        $(".drawer-list").addClass("drawer-show");
      }, 0);
      $(".drawer-list-bg").on("click", function () {
        EC.Pop.DrawerDel();
      }).on("touchmove", function () {
        EC.Pop.DrawerDel();
      });
    },
    "DrawerDel": function () {
      $(".drawer-list-box").addClass("drawer-out");
      $("body").css({
        "height": "",
        "width": "",
        "overflow": ""
      });
      $(".drawer-list-bg").css({
        "display": "none"
      });
      setTimeout(function () {
        $(".drawer-list").remove();
      }, 100);
    },
    "Show": function (_0x504ed9, _0x48033b, _0x228ab9) {
      if (Number($(".window").length) !== 1) {
        EC.Pop.RemoveWin();
      }
      $("body").append("<div class=\"window\"><div class=\"box-bg\"></div><div class=\"window-box\"><div class=\"topfadeInUp animated bj3 cor4\"><div class=\"window-title rel\"><h2 class=\"subscript ft6 br\"></h2><a class=\"window-off fa ds-guanbi\"></a></div><div class=\"window-content\"></div></div></div></div>");
      $(".window .subscript").html(_0x48033b);
      $(".window-content").html(_0x504ed9);
      $(".window-box").addClass("window-show");
      $(document).on("click", ".box-bg", function () {
        $(this).parent().remove();
      });
      $(document).on("click", ".window-off", function () {
        $(this).parent().parent().parent().parent().remove();
      });
      _0x228ab9();
    },
    "RemoveWin": function () {
      $(".window").remove();
    }
  },
  "Toggle": function () {
    $(".switch-button a").click(function () {
      $(this).addClass("selected").siblings().removeClass("selected");
      let _0x54a5e4 = $(".switch-button a").index(this),
        _0x17fe6c = $(".switch-box .check").eq(_0x54a5e4);
      _0x17fe6c.fadeIn(800).siblings().hide();
      _0x17fe6c.addClass("selected").siblings().removeClass("selected");
    });
  },
  "player": {
    "player_jx": function (_0x3a365a, _0x1778db) {
      let _0x3df9b0 = {},
        _0x22a242 = _0x3a365a.split("#");
      for (let _0x45be6f = 0; _0x45be6f < _0x22a242.length; _0x45be6f++) {
        let _0x541572 = _0x22a242[_0x45be6f].split("$"),
          _0x230855 = _0x541572[1].split(",");
        for (let _0x354a9b = 0; _0x354a9b < _0x230855.length; _0x354a9b++) {
          _0x3df9b0.hasOwnProperty(_0x230855[_0x354a9b]) ? _0x3df9b0[_0x230855[_0x354a9b]][Object.keys(_0x3df9b0[_0x230855[_0x354a9b]]).length] = {
            "name": _0x541572[0],
            "api": _0x541572[2]
          } : _0x3df9b0[_0x230855[_0x354a9b]] = {
            0: {
              "name": _0x541572[0],
              "api": _0x541572[2]
            }
          };
        }
      }
      let _0x434435 = "";
      for (let _0x1351c3 in _0x3df9b0) {
        if (_0x1351c3 == _0x1778db) {
          let _0x4f9206 = _0x3df9b0[_0x1351c3];
          for (let _0xef8057 = 0; _0xef8057 < Object.keys(_0x4f9206).length; _0xef8057++) {
            !EC.Empty(maccms.jx_index) && _0xef8057 == maccms.jx_index ? _0x434435 = _0x434435 + "<a class=\"box radius hide border bj2\" href=\"javascript:\" data-api=\"" + _0x4f9206[_0xef8057].api + "\">" + _0x4f9206[_0xef8057].name + "</a>" : _0x434435 = _0x434435 + "<a class=\"box radius hide border\" href=\"javascript:\" data-api=\"" + _0x4f9206[_0xef8057].api + "\">" + _0x4f9206[_0xef8057].name + "</a>";
          }
        }
      }
      _0x434435.length > 1 && $(".line-switch").html(_0x434435);
    }
  },
  "User": {
    "BoxShow": 0,
    "IsLogin": 0,
    "Init": function () {
      !EC.Empty(EC.Cookie.Get("user_id")) && (EC.User.IsLogin = 1);
      $(document).on("click", ".head-user", function () {
        EC.Empty(EC.Cookie.Get("user_id")) ? EC.User.Login() : window.location.href = $(this).attr("data-url");
      });
      $(document).on("click", ".head-user-out", function () {
        EC.User.Logout();
      });
    },
    "Login": function () {
      EC.Ajax(maccms.path + "/index.php/user/ajax_login", "post", "json", "", function (_0x156ef) {
        EC.Pop.Show(_0x156ef, language["41"], function () {
          $("body").on("click", "#wp-submit", function () {
            $(this).unbind("click");
            EC.Ajax(maccms.path + "/index.php/user/login", "post", "json", $(".login-form").serialize(), function (_0x456bc8) {
              _EC.Pop.Msg(_0x456bc8.msg, "", "error");
              Number(_0x456bc8.code) === 1 && location.reload();
            });
          });
        });
      }, function () {
        _EC.Pop.Msg(language["42"], "", "error");
      });
    },
    "Logout": function () {
      $(this).unbind("click");
      EC.Ajax(maccms.path + "/index.php/user/logout", "post", "json", "", function (_0x2852fb) {
        _EC.Pop.Msg(_0x2852fb.msg);
        Number(_0x2852fb.code) === 1 && location.reload();
      });
    },
    "Collection": function () {
      $("body").on("click", ".collection", function () {
        if (Number(EC.User.IsLogin) === 0) {
          EC.User.Login();
          return;
        }
        let _0xcac6f0 = $(this);
        if (_0xcac6f0.attr("data-id")) {
          EC.Ajax(maccms.path + "/index.php/user/ajax_ulog/?ac=set&mid=" + _0xcac6f0.attr("data-mid") + "&id=" + _0xcac6f0.attr("data-id") + "&type=" + _0xcac6f0.attr("data-type"), "get", "json", "", function () {
            _EC.Pop.Msg(language["61"]);
          });
        }
      });
    }
  },
  "Ulog": {
    "Init": function () {
      EC.Ulog.Set();
    },
    "Set": function () {
      let _0x9e46c0 = $(".ds-log-set");
      _0x9e46c0.attr("data-mid") && $.get(maccms.path + "/index.php/api/ulog/?ac=set&mid=" + _0x9e46c0.attr("data-mid") + "&id=" + _0x9e46c0.attr("data-id") + "&sid=" + _0x9e46c0.attr("data-sid") + "&nid=" + _0x9e46c0.attr("data-nid") + "&type=" + _0x9e46c0.attr("data-type"));
    }
  },
  "Hits": {
    "Init": function () {
      let _0x554e9c = $(".ds-hits");
      if (Number(_0x554e9c.length) === 0) {
        return;
      }
      EC.Ajax(maccms.path + "/index.php/ajax/hits?mid=" + _0x554e9c.attr("data-mid") + "&id=" + _0x554e9c.attr("data-id") + "&type=update", "get", "json", "", function (_0x2f3d4b) {
        Number(_0x2f3d4b.code) === 1 && $(".ds-hits").each(function (_0x34c6db) {
          let _0x239f1d = $(".ds-hits").eq(_0x34c6db).attr("data-type");
          _0x239f1d !== "insert" && $("." + _0x239f1d).html(eval("(r.data." + _0x239f1d + ")"));
        });
      });
    }
  },
  "Md5": function (_0xc01beb) {
    return hex_md5("DS" + _0xc01beb + EC.Pop.Uid);
  },
  "Score": function () {
    let _0x23cf52 = 0;
    $(document).on("click", "#rating li", function () {
      if (_0x23cf52 > 0) _EC.Pop.Msg(language["43"]);else {
        let _0x513706 = $("#rating").data();
        EC.Ajax(maccms.path + "/index.php/ajax/score?mid=" + _0x513706.mid + "&id=" + _0x513706.id + "&score=" + $(this).attr("val") * 2, "post", "json", "", function (_0x1b05cf) {
          _EC.Pop.Msg(_0x1b05cf.msg);
          _0x23cf52 = 1;
        }, function () {
          _EC.Pop.Msg(language["44"], "", "error");
        });
      }
      $(this).nextAll().removeClass("active");
      $(this).prevAll().addClass("active");
      $(this).addClass("active");
    });
  },
  "History": {
    "BoxShow": 0,
    "Limit": 30,
    "Days": 7,
    "Json": "",
    "Msg": "<div class=\"null cor5\"><img src=\"" + maccms.path2 + "static/ds5/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["45"] + "</span></div>",
    "Init": function () {
      let _0x32f6e1 = [];
      if (this.Json) _0x32f6e1 = this.Json;else {
        let _0x1f9b16 = EC.Cookie.Get("mac_history");
        !EC.Empty(_0x1f9b16) && (_0x32f6e1 = eval(_0x1f9b16));
      }
      let _0x4d0905 = "";
      if (_0x32f6e1.length > 0) {
        for (let _0x158bbc = 0; _0x158bbc < _0x32f6e1.length; _0x158bbc++) {
          _0x4d0905 += "<li><a class=\"history-a flex\" href=\"" + _0x32f6e1[_0x158bbc].link + "\" target=\"video\" title=\"" + _0x32f6e1[_0x158bbc].name + "\"><img class=\"lazy lazy1\" referrerpolicy=\"no-referrer\" alt=\"" + _0x32f6e1[_0x158bbc].name + "\" data-src=\"" + _0x32f6e1[_0x158bbc].pic + "\"/>" + "<div class=\"history-r\"><div class=\"hide2\">" + _0x32f6e1[_0x158bbc].name + "</div><div><span class=\"cor5\">" + _0x32f6e1[_0x158bbc].mid + "</span></div></div></a></li>";
        }
      } else _0x4d0905 += this.Msg;
      $(".locality-history ul").html(_0x4d0905);
      $("#l_history").click(function () {
        EC.History.Clear();
      });
      let _0x4ec261 = $(".ds-history-set");
      _0x4ec261.attr("data-name") && EC.History.Set(_0x4ec261.attr("data-name"), _0x4ec261.attr("data-link"), _0x4ec261.attr("data-pic"), _0x4ec261.attr("data-mid"));
    },
    "Set": function (_0x38e93a, _0x317ace, _0x5083c5, _0x32c022) {
      !_0x317ace && (_0x317ace = document.URL);
      let _0x1a31a9 = EC.Cookie.Get("mac_history"),
        _0x430551 = "";
      if (!EC.Empty(_0x1a31a9)) {
        this.Json = eval(_0x1a31a9);
        for (let _0x322886 = 0; _0x322886 < this.Json.length; _0x322886++) {
          if (this.Json[_0x322886].link === _0x317ace) return false;
        }
        _0x430551 = "{log:[{\"name\":\"" + _0x38e93a + "\",\"link\":\"" + _0x317ace + "\",\"pic\":\"" + _0x5083c5 + "\",\"mid\":\"" + _0x32c022 + "\"},";
        for (let _0x497213 = 0; _0x497213 < this.Json.length; _0x497213++) {
          if (_0x497213 <= this.Limit && this.Json[_0x497213]) {
            let _0x58fe97 = this.Json[_0x497213].name;
            if (_0x58fe97 === _0x38e93a) {} else _0x430551 += "{\"name\":\"" + this.Json[_0x497213].name + "\",\"link\":\"" + this.Json[_0x497213].link + "\",\"pic\":\"" + this.Json[_0x497213].pic + "\",\"mid\":\"" + this.Json[_0x497213].mid + "\"},";
          } else break;
        }
        _0x430551 = _0x430551.substring(0, _0x430551.lastIndexOf(","));
        _0x430551 += "]}";
      } else _0x430551 = "{log:[{\"name\":\"" + _0x38e93a + "\",\"link\":\"" + _0x317ace + "\",\"pic\":\"" + _0x5083c5 + "\",\"mid\":\"" + _0x32c022 + "\"}]}";
      this.Json = eval(_0x430551);
      EC.Cookie.Set("mac_history", _0x430551, this.Days);
    },
    "Clear": function () {
      EC.Cookie.Del("mac_history");
      $(".locality-history ul").html(this.Msg);
    }
  },
  "Remaining": function (_0xd12a9a, _0x44cb6d, _0x3ea7bd) {
    let _0x5a32df = _0x44cb6d - $(_0xd12a9a).val().length;
    _0x5a32df < 0 && (_0x5a32df = 0, $(_0xd12a9a).val($(_0xd12a9a).val().substr(0, 200)));
    $(_0x3ea7bd).text(_0x5a32df);
  },
  "Digg": function () {
    $("body").on("click", ".digg-link", function () {
      let _0x32c92c = $(this);
      _0x32c92c.attr("data-id") && EC.Ajax(maccms.path + "/index.php/ajax/digg.html?mid=" + _0x32c92c.attr("data-mid") + "&id=" + _0x32c92c.attr("data-id") + "&type=" + _0x32c92c.attr("data-type"), "get", "json", "", function (_0x1bcc83) {
        _0x32c92c.addClass("disabled");
        if (Number(_0x1bcc83.code) === 1) {
          if (_0x32c92c.attr("data-type") === "up") _0x32c92c.find(".digg-num").html(_0x1bcc83.data.up);else {
            _0x32c92c.find(".digg-num").html(_0x1bcc83.data.down);
          }
        } else _EC.Pop.Msg(_0x1bcc83.msg);
      });
    });
  },
  "Gbook": {
    "Login": 0,
    "Verify": 0,
    "Init": function () {
      let _0x31d53c = $(".gbook-form").data();
      EC.Gbook.Login = _0x31d53c.login;
      EC.Gbook.Verify = _0x31d53c.verify;
      let _0x42fc2a = $("body");
      _0x42fc2a.on("keyup", ".gbook-content", function () {
        EC.Remaining($(this), 200, ".gbook_remaining");
      });
      _0x42fc2a.on("focus", ".gbook-content", function () {
        Number(EC.Gbook.Login) === 1 && Number(EC.User.IsLogin) !== 1 && EC.User.Login();
      });
      _0x42fc2a.on("click", ".gbook-submit", function () {
        EC.Gbook.Submit();
      });
    },
    "Show": function (_0x386431) {
      EC.Ajax(maccms.path + "/index.php/gbook/index?page=" + _0x386431, "post", "json", "", function (_0x1a26c5) {
        $(".mac_gbook_box").html(_0x1a26c5);
      }, function () {
        $(".mac_gbook_box").html(language["49"]);
      });
    },
    "Submit": function () {
      if (EC.Empty($(".gbook-content").val())) return _EC.Pop.Msg(language["50"], "", "error"), false;
      EC.Ajax(maccms.path + "/index.php/gbook/saveData", "post", "json", $(".gbook-form").serialize(), function (_0x45fd91) {
        _EC.Pop.Msg(_0x45fd91.msg);
        Number(_0x45fd91.code) === 1 ? location.reload() : Number(EC.Gbook.Verify) === 1 && EC.Verify.Refresh();
      });
    },
    "Tg": function () {
      if (EC.Empty($(".tg-content").val())) return _EC.Pop.Msg(language["51"], "", "error"), false;
      EC.Ajax(maccms.path + "/index.php/api/tougao", "post", "json", $(".tg-form").serialize(), function (_0x17d657) {
        _EC.Pop.Msg(_0x17d657.msg);
        Number(_0x17d657.code) === 1 ? location.reload() : EC.Verify.Refresh();
      });
    },
    "Report": function (_0x3f0a72) {
      EC.Ajax(maccms.path + "/index.php/gbook/report.html?id=" + _0x3f0a72.id + "&name=" + encodeURIComponent(_0x3f0a72.url + location.href), "post", "json", "", function (_0x40744c) {
        EC.Pop.Show(_0x40744c, language["52"], function () {
          let _0x111cfa = $(".gbook-form").data();
          EC.Gbook.Login = _0x111cfa.login;
          EC.Gbook.Verify = _0x111cfa.verify;
          EC.Gbook.Init();
        });
      }, function () {
        _EC.Pop.Msg(language["49"], "", "error");
      });
    }
  },
  "Comment": {
    "Login": 0,
    "Verify": 0,
    "Init": function () {
      let _0xa96c9b = $("body");
      _0xa96c9b.on("click", ".comment-face-box img", function () {
        let _0x40958b = $(this).parent().parent().parent().parent().find(".comment-content");
        $(_0x40958b).val($(_0x40958b).val() + "[em:" + $(this).attr("data-id") + "]");
      });
      _0xa96c9b.on("click", ".comment-face-panel", function () {
        $(this).parent().parent().find(".comment-face-box").fadeToggle();
      });
      _0xa96c9b.on("click", ".face-close", function () {
        $(".comment-face-box").hide();
      });
      _0xa96c9b.on("click", ".comment-page", function () {
        EC.Comment.Show($(this).attr("data-page"));
      });
      _0xa96c9b.on("keyup", ".comment-content", function () {
        EC.Remaining($(this), 200, $(".comment-remaining"));
      });
      _0xa96c9b.on("focus", ".comment-content", function () {
        Number(EC.Comment.Login) === 1 && Number(EC.User.IsLogin) !== 1 && EC.User.Login();
      });
      _0xa96c9b.on("click", ".comment-report", function () {
        let _0x3884cf = $(this);
        $(this).attr("data-id") && EC.Ajax(maccms.path + "/index.php/comment/report.html?id=" + _0x3884cf.attr("data-id"), "get", "json", "", function (_0x31da4f) {
          _0x3884cf.addClass("disabled");
          _EC.Pop.Msg(language["53"], "", "success");
        });
      });
      _0xa96c9b.on("click", ".comment-reply-button", function () {
        let _0x41fc1a = $(this);
        if (_0x41fc1a.attr("data-id")) {
          let _0x2a9441 = _0x41fc1a.html();
          $(".comment-reply-form").remove();
          if (_0x2a9441 === language["54"]) {
            return _0x41fc1a.html("&#xe573;"), false;
          }
          let _0x58a853 = $(".comment-form").prop("outerHTML"),
            _0x3c0d09 = $(_0x58a853);
          _0x3c0d09.addClass("comment-reply-form");
          _0x3c0d09.find("input[name=\"comment_pid\"]").val(_0x41fc1a.attr("data-id"));
          _0x41fc1a.parent().parent().after(_0x3c0d09);
          $(".comment-reply-button").html("&#xe573;");
          _0x41fc1a.html(language["54"]);
        }
      });
      _0xa96c9b.on("click", ".comment-submit", function () {
        let _0x195baa = $(this);
        EC.Comment.Submit(_0x195baa);
      });
    },
    "Show": function (_0x56e2fd) {
      let _0x2ecf4a = $(".ds-comment");
      _0x2ecf4a.length > 0 && EC.Ajax(maccms.path + "/index.php/comment/ajax.html?rid=" + _0x2ecf4a.attr("data-id") + "&mid=" + _0x2ecf4a.attr("data-mid") + "&page=" + _0x56e2fd, "get", "json", "", function (_0x377bba) {
        $(".ds-comment").html(_0x377bba);
        $(".lang-bnt").length === 1 && zh_tranBody();
      }, function () {
        _EC.Pop.Msg(language["49"], "", "error");
      });
    },
    "Submit": function (_0x2436e7) {
      let _0xdbfafa = _0x2436e7.parents("form");
      if ($(_0xdbfafa).find(".comment-content").val() === "") return _EC.Pop.Msg(language["55"], "", "error"), false;
      let _0x26be45 = $(".ds-comment").data();
      if (EC.Empty(_0x26be45.mid)) return _EC.Pop.Msg(language["56"], "", "error"), false;
      if (EC.Empty(_0x26be45.id)) return _EC.Pop.Msg(language["57"], "", "error"), false;
      EC.Ajax(maccms.path + "/index.php/comment/saveData", "post", "json", $(_0xdbfafa).serialize() + "&comment_mid=" + _0x26be45.mid + "&comment_rid=" + _0x26be45.id, function (_0x1a4b07) {
        _EC.Pop.Msg(_0x1a4b07.msg);
        Number(_0x1a4b07.code) === 1 ? EC.Comment.Show(1) : Number(EC.Comment.Verify) === 1 && EC.Verify.Refresh();
      });
    }
  },
  "Verify": {
    "Init": function () {
      EC.Verify.Click();
      $(".verify-submit").click(function () {
        let _0x663d0d = $("input[name=\"verify\"]").val();
        EC.Ajax(maccms.path + "/index.php/ajax/verify_check?type=" + $(this).data("type") + "&verify=" + _0x663d0d, "post", "json", "", function (_0x632f91) {
          if (Number(_0x632f91.code) === 1) {
            location.reload();
          } else _EC.Pop.Msg(_0x632f91.msg), EC.Verify.Refresh();
        }, function () {
          _EC.Pop.Msg(language["58"], "", "error");
          EC.Verify.Refresh();
        });
      });
    },
    "Click": function () {
      $("body").on("click", "img.ds-verify-img", function () {
        $(this).attr("src", maccms.path + "/index.php/verify/index.html?r=" + Math.random());
      });
    },
    "Refresh": function () {
      $(".ds-verify-img").attr("src", maccms.path + "/index.php/verify/index.html?r=" + Math.random());
    },
    "Show": function () {
      return "<img class=\"ds-verify-img\" src=\"" + maccms.path + "/index.php/verify/index.html?\" alt=\"" + language["19"] + "\" title=\"" + language["59"] + "\">";
    }
  },
  "QiAnDao": {
    "Fun": function (_0x576d01) {
      let _0x430b45 = $("#qiAnDao-list"),
        _0x39f93b = "",
        _0x5f4be3 = new Date(),
        _0x5d2b72 = new Date(_0x5f4be3.getFullYear(), parseInt(_0x5f4be3.getMonth()), 1).getDay(),
        _0x1d2759 = new Date(_0x5f4be3.getFullYear(), parseInt(_0x5f4be3.getMonth() + 1), 0),
        _0x49e75a = _0x1d2759.getDate();
      $(".qiAnDao-bj").text(_0x5f4be3.getMonth() + 1);
      for (let _0x3b35b1 = 0; _0x3b35b1 < 42; _0x3b35b1++) {
        _0x39f93b += "<li></li>";
      }
      _0x430b45.html(_0x39f93b);
      let _0x33b9db = _0x430b45.find("li");
      for (let _0x28e918 = 0; _0x28e918 < _0x49e75a; _0x28e918++) {
        let _0x3b0438 = parseInt(_0x28e918 + 1);
        _0x33b9db.eq(_0x28e918 + _0x5d2b72).html("<em>" + _0x3b0438 + "</em>").addClass("date" + _0x3b0438);
        if (_0x576d01.length > 0) {
          for (let _0x8a9d4b = 0; _0x8a9d4b < _0x576d01.length; _0x8a9d4b++) {
            _0x3b0438 === _0x576d01[_0x8a9d4b] && _0x33b9db.eq(_0x28e918 + _0x5d2b72).addClass("nav-dt");
          }
        }
      }
      $(".qiAnDao-con").after("<style>#qiAnDao-list li:nth-child(n+" + (_0x49e75a + _0x5d2b72 + 1) + ") {display: none}</style>").addClass("qiAnDao-show");
      $(".date" + _0x5f4be3.getDate() + ":not(.nav-dt)").addClass("able-qiAnDao");
      $(".qiAnDao-top,.able-qiAnDao").click(function () {
        EC.Ajax(maccms.path + "/index.php/qian/sign", "get", "json", "", function (_0x246432) {
          if (Number(_0x246432.code) === 0) {
            _EC.Pop.Msg(_0x246432.msg, "", "error");
          } else _EC.Pop.Msg(language["60"] + _0x246432.reward, "", "success"), $(".able-qiAnDao").addClass("nav-dt"), $(".qiAnDao-top").addClass("nav-dt");
        }, function () {
          _EC.Pop.Msg(r.msg, "", "error");
        });
      });
      $(".qiAnDao-gz-bnt").click(function () {
        $(".qiAnDao-bottom").show();
      });
      $(".qiAnDao-bottom a").click(function () {
        $(".qiAnDao-bottom").hide();
      });
      $(".qiAnDao-gz-off").click(function () {
        $(".qiAnDao-con").hide();
      });
    },
    "Init": function () {
      $(".qiAnDao_bnt").click(function () {
        if (Number(EC.User.IsLogin) === 0) {
          EC.User.Login();
          return;
        }
        Number($(".qiAnDao-show").length) === 0 ? ($("#qiAnDao_2,.qiAnDao-top").hide(), $("#qiAnDao_1,.qiAnDao-con").show(), EC.Ajax(maccms.path + "/index.php/qian/days", "get", "json", "", function (_0x2984f7) {
          Number(_0x2984f7.code) === 1 ? (EC.QiAnDao.Fun(_0x2984f7.data), setTimeout(function () {
            $("#qiAnDao_2,.qiAnDao-top").show();
            $("#qiAnDao_1").hide();
          }, 1000)) : ($(".qiAnDao-con").hide(), _EC.Pop.Msg(_0x2984f7.msg, "", "error"));
        }, function () {
          $("#qiAnDao_1").html(language["42"]);
        })) : $(".qiAnDao-show").show();
      });
    }
  }
};
$(function () {
  EC.Style.Init();
  EC.Init();
  EC.Verify.Init();
  EC.User.Init();
  EC.History.Init();
  EC.Digg();
  EC.Score();
  EC.Copy.Init();
  EC.User.Collection();
  EC.Ulog.Init();
  EC.Hits.Init();
  EC.Toggle();
  EC.QiAnDao.Init();
});