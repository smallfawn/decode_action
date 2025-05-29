//Thu May 29 2025 08:16:12 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var EC = {
  "isSlid": true,
  "Width": $(window).width(),
  "Init": function () {
    EC.Init.LazyLoad = new LazyLoad({});
    EC.Style.Footer();
    $(".gen-search").click(function () {
      $(".pop-1").addClass("show").siblings(".box-bg2").show();
      $("body").css({
        "height": "100%",
        "width": "100%",
        "overflow": "hidden"
      });
    });
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
      let _0x2a0be0 = $(".pop-2 span").index(this),
        _0x4fe4c1 = $(".history").eq(_0x2a0be0);
      _0x4fe4c1.fadeIn(800).siblings().hide();
      _0x4fe4c1.addClass("check").siblings().removeClass("check");
      if (EC.Empty(EC.Cookie.Get("user_id"))) {
        $(".user-history").html("<div class=\"null cor5\"><img src=\"" + maccms.path2 + "static/ds3/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["0"] + "</span></div>" + "<a href=\"javascript:\" class=\"button top30 head-user\" style=\"width:100%\">" + language["1"] + "</a>");
      } else $(".user-history li").length === 0 && EC.Ajax(maccms.path + "/index.php/api/history", "post", "json", "", function (_0x3d6181) {
        if (_0x3d6181.code === 1) {
          {
            let _0x5364ef = "";
            $.each(_0x3d6181.list, function (_0x58b1b2, _0x2d5569) {
              _0x5364ef += "<li><a class=\"history-a flex\" href=\"" + _0x2d5569.data.link + "\" target=\"video\" title=\"" + _0x2d5569.data.name + "\"><img class=\"lazy lazy1\" referrerpolicy=\"no-referrer\" alt=\"" + _0x2d5569.data.name + "\" data-src=\"" + _0x2d5569.data.pic + "\"/>" + "<div class=\"history-r\"><div class=\"hide2\">" + _0x2d5569.data.name + "</div><div><span class=\"cor5\">" + _0x2d5569.data.type.type_name + "</span></div></div></a></li>";
            });
            $(".user-history ul").html(_0x5364ef);
            EC.Init.LazyLoad.update();
            Number($(".lang-bnt").length) === 1 && zh_tranBody();
          }
        } else $(".user-history ul").html(EC.History.Msg);
      });
    });
    $(".user-share-button").click(function () {
      EC.Pop.Show($(".user-share-html").html(), language["3"], function () {});
    });
    setTimeout(function () {
      $(".gen-loading").fadeOut("slow");
    }, 200);
    $(".head-more-a").hover(function () {
      $(".nav-more").html("&#xe564;");
      $(".head-more").show();
    }, function () {
      $(".nav-more").html("&#xe563;");
      $(".head-more").hide();
    });
    let _0x314e31 = null,
      _0xc6cc19 = $(".head"),
      _0x136af1 = $(".row-2 .tim-box"),
      _0x51494c = null;
    _0xc6cc19.length > 0 && (_0x314e31 = _0xc6cc19.offset().top);
    _0x136af1.length > 0 && (_0x51494c = _0x136af1.eq(_0x136af1.length - 1).offset().top);
    $(window).scroll(EC.debounce(function () {
      let _0x5f3b75 = $(this).scrollTop();
      _0xc6cc19.toggleClass("head-b", _0x5f3b75 > _0x314e31).css("position", _0x5f3b75 > _0x314e31 ? "fixed" : "");
      _0x5f3b75 > 300 ? $(".top").fadeIn(600) : $(".top").fadeOut(600);
      _0x5f3b75 > _0x51494c ? _0x136af1.eq(_0x136af1.length - 1).css({
        "position": "fixed",
        "top": "100px",
        "width": $(".row-2").width()
      }) : _0x136af1.eq(_0x136af1.length - 1).css({
        "position": "",
        "top": "",
        "width": ""
      });
    }, 50));
    $(".top").click(function () {
      $("html,body").animate({
        "scrollTop": 0
      }, 500);
      _0xc6cc19.removeClass("head-b").css({
        "position": ""
      });
    });
    if (Number($(".slid-e").length) === 1) {
      let _0x6f8487 = new Swiper(".swiper3", {
        "loop": true,
        "slidesPerView": 1,
        "pagination": {
          "el": ".swiper-pagination"
        },
        "on": {
          "slideChangeTransitionStart": function () {
            _0x327bc1();
            $(".muted").off("click");
            $(".toReplay").off("click");
            $(".slid-e-video").removeClass("v-show");
            $(".slid-e-bj").removeClass("v-hidden");
          },
          "slideChangeTransitionEnd": function () {
            $(".wap-hide").is(":hidden") == false && EC.isSlid && (EC.isSlid = false, setTimeout(function () {
              EC.isSlid = true;
              _0x2eec86();
            }, 1000));
          }
        }
      });
      function _0x327bc1() {
        let _0x1aae48 = Array.from(document.getElementsByClassName("preview"));
        for (let _0x7f6eb8 = 0; _0x7f6eb8 < _0x1aae48.length; _0x7f6eb8++) {
          const _0x32dbbb = _0x1aae48[_0x7f6eb8];
          _0x32dbbb.pause();
          _0x32dbbb.currentTime = 0;
        }
      }
      let _0x5829c6 = 0;
      function _0x2eec86() {
        let _0x246170 = document.querySelector(".slid-e").querySelector(".swiper-slide-active").querySelector("video"),
          _0x437bcc = $(".slid-e .swiper-slide-active");
        ~~_0x246170.duration > 10 ? (_0x437bcc.find(".slid-e-video").addClass("v-show"), _0x437bcc.find(".slid-e-bj").addClass("v-hidden"), _0x246170.muted ? $(".muted .fa").removeClass("ds-shengyin").addClass("ds-liulan") : $(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin"), $(".muted").click(function () {
          {
            if (_0x246170.muted) $(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin"), _0x246170.muted = false, _0x5829c6 = 1;else {
              $(".muted .fa").removeClass("ds-shengyin").addClass("ds-liulan");
              _0x246170.muted = true;
              _0x5829c6 = 0;
            }
          }
        }), _0x5829c6 === 1 && ($(".muted .fa").removeClass("ds-liulan").addClass("ds-shengyin"), _0x246170.muted = false), $(".toReplay").click(function () {
          _0x437bcc.find(".slid-e-video").addClass("v-show");
          _0x437bcc.find(".slid-e-bj").addClass("v-hidden");
          _0x246170.currentTime = 0;
          _0x246170.play();
        }), _0x246170.play(), _0x246170.addEventListener("ended", function () {
          _0x437bcc.find(".slid-e-video").removeClass("v-show");
          _0x437bcc.find(".slid-e-bj").removeClass("v-hidden");
          _0x6f8487.slideNext();
        })) : setTimeout(function () {
          _0x6f8487.slideNext();
        }, 6000);
      }
    }
    let _0x4489f3 = $("#height_limit");
    _0x4489f3.height() >= 80 && (_0x4489f3.addClass("occlusion"), $(".text-open").show());
    $(".tim-bnt").click(function () {
      _0x4489f3.hasClass("height_rel") ? ($(".tim-bnt").html("<i class=\"fa r6 ease\">&#xe563;</i>" + language["4"]), _0x4489f3.removeClass("height_rel"), _0x4489f3.addClass("occlusion")) : ($(".tim-bnt").html("<i class=\"fa r6 ease\">&#xe564;</i>" + language["4"]), _0x4489f3.addClass("height_rel"), _0x4489f3.removeClass("occlusion"));
    });
    EC.Swiper.Navs();
    EC.Swiper.Slide();
    EC.Swiper.Roll();
    EC.Actor.Detail();
    $(".gen-left-list").click(function () {
      let _0x553d0d = $(".head-more").html(),
        _0x4dc890 = "bold0",
        _0x57f48b = "wap-show1",
        _0x175ad8 = $(".head-nav");
      _0x175ad8.hasClass("bold1") && (_0x4dc890 = "bold1");
      if (_0x175ad8.hasClass("wap-show0")) {
        _0x57f48b = "wap-show0";
      }
      EC.Pop.Drawer("<div class='drawer-nav drawer-scroll " + _0x4dc890 + " " + _0x57f48b + "'><div class='drawer-scroll-list'>" + _0x553d0d + "</div></div>", function () {
        let _0x3a8930 = $(".gen-account-menu").html();
        $(".drawer-list-box").prepend("<div class='drawer-menu cor2'>" + _0x3a8930 + "</div>");
      });
    });
    $(".playBut").click(function () {
      let _0x2a2bf1 = $(this).attr("data-url");
      $(".play-advance .topfadeInUp").html("<video id=\"xkPlayer\" width=\"100%\" height=\"100%\" controls preload=\"auto\" autoplay><source src=\"" + _0x2a2bf1 + "\" type=\"video/mp4\"></video>");
      $(".play-advance").show();
    });
    $(".play-advance .box-bg,.play-advance .mfp-close").click(function () {
      let _0x2d2b0d = document.getElementById("xkPlayer");
      _0x2d2b0d.currentTime = 0;
      _0x2d2b0d.pause();
      $(".play-advance").hide();
      $(".mfp-iframe").remove();
    });
    $(".deployment").click(function () {
      {
        let _0x39e728 = $(".info-parameter").html();
        EC.Pop.Drawer(_0x39e728, function () {
          $(".drawer-list-box").addClass("drawer-list-b bj3");
          $(document).on("click", ".drawer-of", function () {
            EC.Pop.DrawerDel();
          });
        });
      }
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
      {
        let _0x49b920 = $(this);
        _0x49b920.attr("data-id") && confirm(language["6"]) && EC.Ajax(maccms.path + "/index.php/user/ajax_buy_popedom.html?id=" + _0x49b920.attr("data-id") + "&mid=" + _0x49b920.attr("data-mid") + "&sid=" + _0x49b920.attr("data-sid") + "&nid=" + _0x49b920.attr("data-nid") + "&type=" + _0x49b920.attr("data-type"), "get", "json", "", function (_0x34cbd7) {
          _0x49b920.addClass("disabled");
          _EC.Pop.Msg(_0x34cbd7.msg);
          Number(_0x34cbd7.code) === 1 && top.location.reload();
          _0x49b920.removeClass("disabled");
        });
      }
    });
    $("#check").click(function () {
      let _0x479f8c = $(this);
      _0x479f8c.attr("data-id") && EC.Ajax(maccms.path + "/index.php/ajax/pwd.html?id=" + _0x479f8c.attr("data-id") + "&mid=" + _0x479f8c.attr("data-mid") + "&type=" + _0x479f8c.attr("data-type") + "&pwd=" + _0x479f8c.parents("form").find("input[name=\"pwd\"]").val(), "get", "json", "", function (_0x56c6cd) {
        _0x479f8c.addClass("disabled");
        _EC.Pop.Msg(_0x56c6cd.msg);
        Number(_0x56c6cd.code) === 1 && location.reload();
        _0x479f8c.removeClass("disabled");
      });
    });
    switch (maccms.aid) {
      case "12":
      case "11":
        let _0x49034e = $("#dataList");
        if (_0x49034e.length > 0) {
          let _0x4f4d23 = _0x49034e.data(),
            _0x5c434e = {
              "type": _0x4f4d23.type,
              "class": _0x4f4d23.class,
              "area": _0x4f4d23.area,
              "lang": _0x4f4d23.lang,
              "version": _0x4f4d23.version,
              "state": _0x4f4d23.state,
              "letter": _0x4f4d23.letter
            };
          $(".ec-casc-list .swiper-slide").click(function () {
            $(this).addClass("nav-dt").siblings().removeClass("nav-dt");
            EC.Swiper.Navs();
            _0x5c434e[$(this).data("type")] = $(this).data("val");
            if (EC.Empty($(this).data("type"))) return;
            _0x49034e.html("");
            HTML.Skeleton(_0x49034e, 3, _0x4f4d23.tpl);
            EC.flow.get(_0x5c434e, _0x49034e, _0x4f4d23, function () {});
          });
          $(".site-tabs a").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            if (Number($("#dataList .null").length) === 1) return;
            _0x5c434e.by = $(this).data("type");
            _0x49034e.html("");
            HTML.Skeleton(_0x49034e, 3, _0x4f4d23.tpl);
            EC.flow.get(_0x5c434e, _0x49034e, _0x4f4d23, function () {});
          });
          HTML.Skeleton(_0x49034e, 3, _0x4f4d23.tpl);
          _0x5c434e[$(this).data("type")] = $(this).data("val");
          EC.flow.get(_0x5c434e, _0x49034e, _0x4f4d23, function () {});
        }
        break;
      case "14":
      case "104":
      case "15":
        $(".anthology-tab a").click(function () {
          {
            $(this).addClass("on nav-dt").siblings().removeClass("on nav-dt");
            let _0x1ef41d = $(".anthology-tab a").index(this),
              _0x5752eb = $(".anthology-list .none").eq(_0x1ef41d);
            _0x5752eb.fadeIn(800).siblings().hide();
            _0x5752eb.addClass("dx").siblings().removeClass("dx");
            EC.Swiper.Navs();
          }
        });
        $("#zxdaoxu").each(function () {
          $(this).on("click", function (_0x447e1d) {
            _0x447e1d.preventDefault();
            $(".dx").each(function () {
              let _0x537e00 = $(this).find("li");
              for (let _0x473c36 = 0, _0x45590c = _0x537e00.length - 1; _0x473c36 < _0x45590c;) {
                let _0x9105f8 = _0x537e00.eq(_0x473c36).clone(true),
                  _0x353c7b = _0x537e00.eq(_0x45590c).replaceWith(_0x9105f8);
                _0x537e00.eq(_0x473c36).replaceWith(_0x353c7b);
                ++_0x473c36;
                --_0x45590c;
              }
            });
          });
        });
        $("#role .public-list-box").click(function () {
          {
            let _0x3a68a9 = $(this).index(),
              _0x1e0c8e = $("#role .cor5").eq(_0x3a68a9).text(),
              _0x1c4bad = $("#role .time-title").eq(_0x3a68a9).text(),
              _0x10c735 = $("#role .lazy").eq(_0x3a68a9).data(),
              _0x26a911 = _0x10c735.text;
            _0x26a911.length < 1 && (_0x26a911 = language["7"]);
            let _0x1ec399 = "<div class=\"role-card\"><div class=\"card-top flex\"><div class=\"left\"><img class=\"lazy\" src=\"" + _0x10c735.src + "\" alt=\"" + _0x1c4bad + "\"></div>\n" + "<div class=\"right\"><p>" + _0x1c4bad + "</p><p class=\"cor5\">" + _0x1e0c8e + "</p></div></div> \n" + "<div class=\"card-bottom\"><p class=\"card-title\">" + language["8"] + "</p><div class=\"card-text cor5\">" + _0x26a911 + "</div></div></div>";
            EC.Pop.Show(_0x1ec399, language["9"], function () {});
          }
        });
        $(".vod-detail .vod-detail-bnt .button").click(function () {
          location.href = $(".anthology-list-play a").eq(0).attr("href");
        });
        $(".player-button-ac").click(function () {
          $(".anthology-list").toggleClass("player-list-ac");
        });
        $(".play-tips-bnt").click(function () {
          $(".tips-box").slideToggle();
          $(".charge,.player-share-box").hide();
        });
        $(".ec-report").click(function () {
          let _0x2e62f0 = $(this).data();
          EC.Gbook.Report(_0x2e62f0);
        });
        $(".charge-button").click(function () {
          $(".charge").fadeToggle();
          $(".player-share-box,.tips-box").hide();
        });
        $(".player-comment").click(function () {
          $(".comment-form").length < 1 && (EC.Comment.Login = $(this).data().login, EC.Comment.Verify = $(this).data().verify, EC.Comment.Init(), EC.Comment.Show(1));
        });
        maccms.player_style && $(".comment-form").length < 1 && (EC.Comment.Login = $(this).data().login, EC.Comment.Verify = $(this).data().verify, EC.Comment.Init(), EC.Comment.Show(1));
        $("#expand_details").click(function () {
          $(".player-vod-box").hide();
          $(".player-list-box").hide();
          $(".player-details-box").show();
        });
        $(".player-close").click(function () {
          $(".player-vod-box").show();
          $(".player-list-box").show();
          $(".player-details-box").hide();
          $(".player-return .none").hide();
          $(".player-vod-no1").show();
          $(".player-vod-no2").html("<div class=\"top40\"><div class=\"loading\"><span></span><span></span><span></span><span></span><span></span></div></div>").hide();
        });
        $(".player-vod-no1 .public-list-box").click(function () {
          $(".player-return .none").show();
          $(".player-vod-no1").hide();
          $(".player-vod-no2").show();
          EC.Ajax(maccms.path + "/index.php/api/actor_vod_player_api?id=" + $(this).attr("data-id"), "get", "json", "", function (_0x446373) {
            if (Number(_0x446373.code) === 1) {
              let _0x55d878 = "";
              $.each(_0x446373.list, function (_0x4491ca, _0x18ecdc) {
                _0x55d878 = _0x55d878 + "<div class=\"public-list-box public-pic-b\"><div class=\"public-list-div\"><a class=\"public-list-exp\" href=\"" + _0x18ecdc.url + "\" title=\"" + _0x18ecdc.name + "\">" + "<img class=\"lazy lazy1 gen-movie-img " + maccms.vod_mask + "\" referrerpolicy=\"no-referrer\" alt=\"" + language["10"] + "\" data-src=\"" + _0x18ecdc.pic + "\" /></a>\n" + "<i class=\"collection fa\" data-type=\"2\" data-mid=\"" + maccms.mid + "\" data-id=\"" + _0x18ecdc.id + "\">&#xe577;</i></div>\n" + "<div class=\"public-list-button\"><a target=\"_blank\" class=\"time-title hide ft4\" href=\"" + _0x18ecdc.url + "\" title=\"" + _0x18ecdc.name + "\">" + _0x18ecdc.name + "</a></div></div>";
              });
              $(".player-vod-no2").html("<div class=\"role-card top20\">" + _0x446373.html + "</div><div class=\"title-m cor4\"><h5>" + language["11"] + "</h5></div><div class=\"flex wrap border-box hide-b-16 wap-diy-vod-a\">" + _0x55d878 + "</div>");
              EC.Init.LazyLoad.update();
            } else _EC.Pop.Msg(language["12"], "", "error");
          });
        });
        $(".player-return .none").click(function () {
          $(this).hide();
          $(".player-vod-no1").show();
          $(".player-vod-no2").html("<div class=\"top40\"><div class=\"loading\"><span></span><span></span><span></span><span></span><span></span></div></div>").hide();
        });
        if (Number(maccms.jx) === 1) {
          let _0x1871b4 = $(".line-switch");
          EC.player.player_jx(_0x1871b4.attr("data-api"), _0x1871b4.attr("data-url"));
          $(".vod-playerUrl").click(function () {
            _0x1871b4.html("");
            EC.player.player_jx(_0x1871b4.attr("data-api"), $(this).attr("data-form"));
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
        let _0x2c9bcf = $(".ds-comment");
        if (Number(_0x2c9bcf.length) === 1) {
          EC.Comment.Login = _0x2c9bcf.data().login;
          EC.Comment.Verify = _0x2c9bcf.data().verify;
          EC.Comment.Init();
          EC.Comment.Show(1);
        }
        break;
      case "21":
        let _0x561505 = $("#dataList");
        if (_0x561505.length > 0) {
          let _0x227bfa = _0x561505.data();
          HTML.Skeleton(_0x561505, 3, _0x227bfa.tpl);
          let _0x18dc6f = {
            "type": _0x227bfa.type
          };
          EC.flow.get(_0x18dc6f, _0x561505, _0x227bfa, function () {
            EC.Swiper.Roll();
          });
        }
        break;
      case "23":
        let _0xed8cf5 = $("#dataList");
        if (_0xed8cf5.length > 0) {
          let _0x387d91 = _0xed8cf5.data();
          HTML.Skeleton(_0xed8cf5, 3, _0x387d91.tpl);
          let _0x111027 = {
            "wd": _0x387d91.type,
            "tag": _0x387d91.wdtag
          };
          EC.flow.get(_0x111027, _0xed8cf5, _0x387d91, function () {
            EC.Swiper.Roll();
          });
        }
        break;
      case "84":
        $(".art-so-tag").click(function () {
          let _0x27412a = $("#dataList"),
            _0x529c0b = _0x27412a.data();
          _0x27412a.html("");
          HTML.Skeleton(_0x27412a, 3, _0x529c0b.tpl);
          let _0x39c853 = {
            "wd": _0x529c0b.type,
            "tag": _0x529c0b.wdtag
          };
          EC.flow.get(_0x39c853, _0x27412a, _0x529c0b, function () {
            EC.Swiper.Roll();
          });
        });
        break;
      case "82":
        let _0x320127 = $("#dataList");
        if (_0x320127.length > 0) {
          {
            let _0x3c577e = _0x320127.data(),
              _0x12f5cc = {
                "type": _0x3c577e.type
              };
            $(".ec-casc-list .swiper-slide").click(function () {
              $(this).addClass("nav-dt").siblings().removeClass("nav-dt");
              EC.Swiper.Navs();
              _0x12f5cc[$(this).data("type")] = $(this).data("val");
              _0x320127.html("");
              HTML.Skeleton(_0x320127, 3, _0x3c577e.tpl);
              EC.flow.get(_0x12f5cc, _0x320127, _0x3c577e, function () {});
            });
            HTML.Skeleton(_0x320127, 3, _0x3c577e.tpl);
            _0x12f5cc[$(this).data("type")] = $(this).data("val");
            EC.flow.get(_0x12f5cc, _0x320127, _0x3c577e, function () {});
          }
        }
        break;
      case "302":
        let _0x2dc71c = $("#dataList");
        if (_0x2dc71c.length > 0) {
          {
            let _0xaa8c90 = _0x2dc71c.data(),
              _0x22dcec = {};
            $(".ec-casc-list .swiper-slide").click(function () {
              $(".swiper-slide").removeClass("nav-dt");
              $(this).addClass("nav-dt");
              EC.Swiper.Navs();
              _0x22dcec.type = $(this).data("id");
              _0x2dc71c.html("");
              HTML.Skeleton(_0x2dc71c, 3, _0xaa8c90.tpl);
              EC.flow.get(_0x22dcec, _0x2dc71c, _0xaa8c90, function () {});
            });
            HTML.Skeleton(_0x2dc71c, 3, _0xaa8c90.tpl);
            _0x22dcec[$(this).data("type")] = $(this).data("val");
            EC.flow.get(_0x22dcec, _0x2dc71c, _0xaa8c90, function () {});
          }
        }
        break;
    }
    Number(maccms.mid) === 11 && ($(".web-so-btn").click(function () {
      let _0x265e6a = $(".website-val").val();
      if (_0x265e6a) {
        window.open($(".website-filter-grid .action").attr("data-url") + _0x265e6a);
      } else _EC.Pop.Msg(language["14"], "", "error");
    }), $(".website-filter-grid .icon").click(function () {
      $(".website-filter-grid .action").removeClass("action");
      $(this).addClass("action");
    }), $(".togo").click(function () {
      {
        let _0x5dff14 = $(this).attr("data-id"),
          _0x221a4f = $(this).attr("data-mi");
        Number(_0x221a4f) === 1 ? _EC.Pop.Msg(language["15"], "", "error") : EC.Ajax(maccms.path + "/index.php/api/website?id=" + _0x5dff14, "get", "json", "", function (_0x59506e) {
          {
            if (_0x59506e.smg === 1) EC.Pop.Show("<div class=\"website-title\">" + _0x59506e.data.website_name + "</div><div class=\"card-text cor5\"><p>" + _0x59506e.data.website_blurb + "</p><p>" + _0x59506e.data.website_content + "</p></div><div class=\"flex website-tag top20\">" + _0x59506e.data.website_tag + "</div>", language["20"], function () {});else {
              _EC.Pop.Msg(language["15"], "", "error");
            }
          }
        });
      }
    }), $("#tou_gao").click(function () {
      if (Number(EC.User.IsLogin) === 0) {
        EC.User.Login();
        return;
      }
      EC.Pop.Show("<form class=\"tg-form\"><p class=\"cor5 top10\">" + language["16"] + "</p><div class=\"region nav-link textarea border\">\n" + "<textarea class=\"tg-content cor5\" name=\"gbook_content\" style=\"width:100%;height:100%\"></textarea>\n" + "</div><div class=\"flex\"><input type=\"text\" class=\"input bj br cor5\" name=\"verify\" value=\"\" maxlength=\"4\" size=\"20\">\n" + "<img class=\"ds-verify-img\" src=\"/index.php/verify/index.html\" alt=\"" + language["19"] + "\" onclick=\"this.src = this.src+'?'\"></div>\n" + "<input type=\"button\" class=\"tg-submit button top20 submit_btn\" style=\"width:100%\" value=\"" + language["17"] + "\"></form>", language["18"], function () {
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
        "success": function (_0x5596fe) {
          Number(_0x5596fe.smg) === 1 ? window.location.replace(_0x5596fe.url) : window.location.replace("https://www.kugou.com/song/#hash=8C1A6044DDF1650A82B42769C47FD645&album_id=501600");
        }
      });
    });
    $(".jp-download").click(function () {
      let _0xebfb01 = "<p class=\"cor5 top10\">" + language["21"] + "</p><div class=\"region nav-link textarea bj\"><textarea id=\"bar2\" class=\"cor5\" style=\"width:100%;height:100%\">" + language["22"] + "《" + ecData.list[ecData.playid].name + "》" + language["23"] + ecData.list[ecData.playid].url + "</textarea></div>\n" + "<button type=\"button\" class=\"button copyBtn\" style=\"width:100%\" data-clipboard-action=\"copy\" data-clipboard-target=\"#bar2\">" + language["24"] + "</button>";
      EC.Pop.Show(_0xebfb01, language["25"], function () {
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
      let _0x4b8fd8 = $(".player");
      _0x4b8fd8.hasClass("player-switch-box") ? ($(this).html("&#xe565;"), _0x4b8fd8.removeClass("player-switch-box")) : ($(this).html("&#xe566;"), _0x4b8fd8.addClass("player-switch-box"));
    });
    const _0x5a4566 = " %c 短视主题 by 草根® %c QQ602524950|906259831（严禁利用主题建设违法网站）";
    console.log("\n" + _0x5a4566 + "\n", "color: #fadfa3; background: #030307; padding:5px 0; font-size:18px;", "background: #fadfa3; padding:5px 0; font-size:18px;");
    if ($(".week-title").length > 0) {
      let _0x2291dc = ["一", "二", "三", "四", "五", "六", "日"],
        _0x3393b0 = new Date().getDay();
      _0x3393b0 === 0 && (_0x3393b0 = 7);
      let _0x21882a = $("#week-list" + _0x3393b0),
        _0x2573e2 = _0x21882a.children();
      _0x21882a.show();
      $(".week-bj").addClass("week-" + _0x3393b0);
      $(".week-key" + _0x3393b0).addClass("tim");
      let _0x159c3d = $("#dataList"),
        _0x275c58 = _0x159c3d.data(),
        _0x375ef5 = {
          "weekday": _0x2291dc[_0x3393b0 - 1],
          "num": _0x275c58.num,
          "by": _0x275c58.by,
          "type": _0x275c58.type
        };
      HTML.Skeleton(_0x2573e2, 3, "vod");
      _0x1bfb33(_0x375ef5, _0x2573e2, _0x275c58);
      $(".week-title .week-select a").click(function () {
        {
          $(this).addClass("tim").siblings().removeClass("tim");
          let _0x1da00f = $(this).data();
          $(".week-bj").removeClass("week-1 week-2 week-3 week-4 week-5 week-6 week-7").addClass("week-" + _0x1da00f.index);
          $(".animated").hide();
          _0x21882a = $("#week-list" + _0x1da00f.index);
          _0x21882a.show();
          _0x2573e2 = _0x21882a.children();
          if (_0x2573e2.html().length > 50) return;
          _0x375ef5.weekday = _0x1da00f.val;
          HTML.Skeleton(_0x2573e2, 3, "vod");
          _0x1bfb33(_0x375ef5, _0x2573e2, _0x275c58);
        }
      });
    }
    function _0x1bfb33(_0x294bab, _0x106d1a, _0x53a1b7) {
      setTimeout(function () {
        let _0x44e83b = [],
          _0x3cc225 = Math.round(new Date() / 1000),
          _0x5de48c = _0x294bab;
        _0x5de48c.time = _0x3cc225;
        _0x5de48c.key = EC.Md5(_0x3cc225);
        EC.Ajax(_0x53a1b7.api, "post", "json", _0x5de48c, function (_0x46b9c2) {
          {
            if (Number(_0x46b9c2.code) === 1) {
              {
                _0x44e83b = HTML.Art(_0x46b9c2, _0x53a1b7);
                if (EC.flow.empty(_0x46b9c2.list.length, _0x106d1a)) return;
                _0x106d1a.html(_0x44e83b.join(""));
                EC.Init.LazyLoad.update();
                EC.Style.Footer();
                $(".lang-bnt").length === 1 && zh_tranBody();
              }
            } else Number(_0x46b9c2.code) === 2 ? $(".flow-more").html(_0x46b9c2.msg) : _EC.Pop.Msg(language["27"] + _0x46b9c2.msg, "", "error");
          }
        }, function () {
          _EC.Pop.Msg(language["28"], "", "error");
        });
      }, 100);
    }
  },
  "Style": {
    "Init": function () {
      let _0x2eea7b = $(".theme-style"),
        _0x842070 = EC.Cookie.Get("ec-wap_style");
      !EC.Empty(_0x842070) && ($("body").attr("class", _0x842070), _0x842070 === "theme1" ? _0x2eea7b.html("&#xe574;").attr("data-id", 1) : _0x2eea7b.html("&#xe575;").attr("data-id", 2));
      _0x2eea7b.click(function () {
        EC.Style.Switch(_0x2eea7b);
      });
    },
    "Set": function (_0x3ffd71) {
      EC.Cookie.Set("ec-wap_style", _0x3ffd71);
    },
    "Switch": function (_0x4d5b85) {
      let _0x11c166 = _0x4d5b85.attr("data-id");
      Number(_0x11c166) === 1 ? ($("body").attr("class", "theme2"), _0x4d5b85.html("&#xe575;").attr("data-id", 2), EC.Style.Set("theme2")) : ($("body").attr("class", "theme1"), _0x4d5b85.html("&#xe574;").attr("data-id", 1), EC.Style.Set("theme1"));
    },
    "Footer": function () {
      $(document.body).height() < $(window).height() ? $(".footer").addClass("footerLess") : $(".footer").removeClass("footerLess");
    }
  },
  "Cookie": {
    "Set": function (_0x4f15b3, _0xa8a3b7, _0x3c2e78) {
      let _0x580816 = new Date();
      _0x580816.setTime(_0x580816.getTime() + _0x3c2e78 * 24 * 60 * 60 * 1000);
      document.cookie = _0x4f15b3 + "=" + encodeURIComponent(_0xa8a3b7) + ";path=/;expires=" + _0x580816.toUTCString();
    },
    "Get": function (_0x1a3e87) {
      let _0x3d9156 = document.cookie.match(new RegExp("(^| )" + _0x1a3e87 + "=([^;]*)(;|$)"));
      if (_0x3d9156 != null) return decodeURIComponent(_0x3d9156[2]);
    },
    "Del": function (_0x3a402a) {
      let _0x49675b = new Date();
      _0x49675b.setTime(_0x49675b.getTime() - 1);
      let _0x4c6ab5 = this.Get(_0x3a402a);
      _0x4c6ab5 != null && (document.cookie = _0x3a402a + "=" + encodeURIComponent(_0x4c6ab5) + ";path=/;expires=" + _0x49675b.toUTCString());
    }
  },
  "Empty": function (_0xd119b7) {
    return _0xd119b7 == null || _0xd119b7 === "";
  },
  "debounce": function (_0x2ddae6, _0x36917d) {
    let _0x31c408 = null;
    return function () {
      {
        let _0x2d8e55 = this,
          _0x44e1f1 = arguments;
        clearTimeout(_0x31c408);
        _0x31c408 = setTimeout(function () {
          _0x2ddae6.apply(_0x2d8e55, _0x44e1f1);
        }, _0x36917d);
      }
    };
  },
  "GoBack": function () {
    let _0x3c54cc = document.domain;
    document.referrer.indexOf(_0x3c54cc) > 0 ? history.back() : window.location = "//" + _0x3c54cc;
  },
  "Ajax": function (_0xb711c1, _0x2eddcb, _0xcacc03, _0x3f9c20, _0x51e990, _0x42ad24, _0x3ef1a0) {
    _0x2eddcb = _0x2eddcb || "get";
    _0xcacc03 = _0xcacc03 || "json";
    _0x3f9c20 = _0x3f9c20 || "";
    _0x42ad24 = _0x42ad24 || "";
    _0x3ef1a0 = _0x3ef1a0 || "";
    $.ajax({
      "url": _0xb711c1,
      "type": _0x2eddcb,
      "dataType": _0xcacc03,
      "data": _0x3f9c20,
      "timeout": 5000,
      "beforeSend": function (_0x260271) {},
      "error": function (_0x527ad3, _0x1eab60, _0x5bd066) {
        if (_0x42ad24) _0x42ad24(_0x527ad3, _0x1eab60, _0x5bd066);
      },
      "success": function (_0x55cca3) {
        _0x51e990(_0x55cca3);
      },
      "complete": function (_0x69550c, _0x4536d5) {
        {
          if (_0x3ef1a0) _0x3ef1a0(_0x69550c, _0x4536d5);
        }
      }
    });
  },
  "flow": {
    "load": function (_0x2cd477) {
      _0x2cd477 = _0x2cd477 || {};
      let _0x2bde71 = this,
        _0x330fb3 = 0,
        _0x210d53,
        _0x2b40f5,
        _0x15c668,
        _0x51dcea = $(_0x2cd477.elem);
      if (!_0x51dcea[0]) return;
      let _0x3ba347 = $(_0x2cd477.scrollElem || document),
        _0x3459e0 = _0x2cd477.mb || 50,
        _0x29801e = "isAuto" in _0x2cd477 ? _0x2cd477.isAuto : true,
        _0x3903ad = _0x2cd477.end || language["29"],
        _0x14496c = _0x2cd477.scrollElem && _0x2cd477.scrollElem !== document,
        _0x154752 = "<i class=\"fa ds-jiantouyou\"></i>" + language["30"],
        _0x5d9798 = $("<div class=\"flow-more cor5\"><a href=\"javascript:;\">" + _0x154752 + "</a></div>");
      !_0x51dcea.find(".flow-more")[0] && _0x51dcea.append(_0x5d9798);
      let _0x1e6cfc = function (_0x5b1a25, _0x7b6a06) {
          Number(_0x330fb3) === 1 && $(".flow-more").siblings().remove();
          _0x5b1a25 = $(_0x5b1a25);
          _0x5d9798.before(_0x5b1a25);
          _0x7b6a06 = Number(_0x7b6a06) === 0 ? true : null;
          _0x7b6a06 ? _0x5d9798.html(_0x3903ad) : _0x5d9798.find("a").html(_0x154752);
          _0x2b40f5 = _0x7b6a06;
          _0x210d53 = null;
          EC.Init.LazyLoad.update();
        },
        _0x445c62 = function () {
          _0x210d53 = true;
          _0x5d9798.find("a").html("<i class=\"loading3\"></i>" + language["31"]);
          typeof _0x2cd477.done === "function" && _0x2cd477.done(++_0x330fb3, _0x1e6cfc, _0x51dcea);
        };
      _0x445c62();
      _0x5d9798.find("a").on("click", function () {
        if (_0x2b40f5) return;
        _0x210d53 || _0x445c62();
      });
      if (!_0x29801e) return _0x2bde71;
      _0x3ba347.off("scroll");
      _0x3ba347.on("scroll", function () {
        {
          let _0x48e0c7 = $(this),
            _0x42d854 = _0x48e0c7.scrollTop();
          if (_0x15c668) clearTimeout(_0x15c668);
          if (_0x2b40f5 || !_0x51dcea.width()) return;
          _0x15c668 = setTimeout(function () {
            let _0x48a6a5 = _0x14496c ? _0x48e0c7.height() : $(window).height(),
              _0x1702ca = _0x14496c ? _0x48e0c7.prop("scrollHeight") : document.documentElement.scrollHeight;
            _0x1702ca - _0x42d854 - _0x48a6a5 <= _0x3459e0 && (_0x210d53 || _0x445c62());
          }, 100);
        }
      });
      return _0x2bde71;
    },
    "empty": function (_0x1ac0a4, _0x144c44) {
      if (Number(_0x1ac0a4) === 0) return _0x144c44.html("<div class=\"null cor5\"><img src=\"" + maccms.path2 + "static/ds3/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["32"] + "</span></div>"), true;
      return false;
    },
    "get": function (_0xb8a7f8, _0x138814, _0x33d01e, _0xada6f8) {
      _0x138814.length > 0 && EC.flow.load({
        "elem": "#dataList",
        "isAuto": _0x33d01e.pattern,
        "end": _0x33d01e.txt,
        "done": function (_0x132c28, _0x1ee7a7, _0x5abca4) {
          setTimeout(function () {
            let _0x1c70e0 = [],
              _0x26ff0c = Math.ceil(new Date().getTime() / 1000),
              _0x360f58 = $.extend(_0xb8a7f8, {
                "page": _0x132c28,
                "time": _0x26ff0c,
                "key": EC.Md5(_0x26ff0c)
              });
            EC.Ajax(_0x33d01e.api, "post", "json", _0x360f58, function (_0x17af93) {
              if (Number(_0x17af93.code) === 1) {
                if (EC.flow.empty(_0x17af93.list.length, _0x5abca4)) return;
                _0x1c70e0 = HTML.Art(_0x17af93, _0x33d01e);
                _0x1ee7a7(_0x1c70e0.join(""), _0x132c28 < _0x17af93.pagecount);
                _0xada6f8();
                EC.Style.Footer();
                $(".lang-bnt").length === 1 && zh_tranBody();
              } else Number(_0x17af93.code) === 2 ? $(".flow-more").html(_0x17af93.msg) : _EC.Pop.Msg(language["27"] + _0x17af93.msg, "", "error");
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
        EC.Pop.Show($("#rating").prop("outerHTML"), language["33"], function () {});
      }), $(".vod-detail-share").click(function () {
        {
          $(".vod-detail .share-box").remove();
          let _0x193124 = "<div class=\"cor5 radius\"><span class=\"share-tips\">" + language["34"] + "</span><span id=\"bar\" class=\"share-url bj cor5\">" + window.location.href + $(document).attr("title") + "</span><button type=\"button\" class=\"share-copy bj2 ho radius copyBtn\" data-clipboard-action=\"copy\" data-clipboard-target=\"#bar\">" + language["35"] + "</button></div>";
          EC.Pop.Show(_0x193124, language["18"], function () {
            $(document).on("click", ".copyBtn", function () {
              _EC.Pop.Msg(language["36"], "", "success");
              $(".window").remove();
            });
          });
          new ClipboardJS(".copyBtn");
        }
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
      let _0x1c1d15 = new ClipboardJS(".CopyUel");
      $(".CopyUel").click(function () {
        _0x1c1d15.on("success", function () {
          _EC.Pop.Msg(language["37"], "", "success");
        });
        _0x1c1d15.on("error", function () {
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
          function _0x322e06(_0x4609a3) {
            {
              let _0x11faf4 = new Image();
              _0x11faf4.src = _0x4609a3.toDataURL("image/png");
              return _0x11faf4;
            }
          }
          let _0x24b256 = $("canvas")[0],
            _0x125738 = _0x322e06(_0x24b256);
          $(this).next(".share-pic").append(_0x125738);
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
    "Nav": function (_0x12b7c3, _0x37873c, _0x1a8843) {
      if (_0x12b7c3.find(".nav-dt").length > 0) {
        {
          let _0x4f67e9 = _0x12b7c3.find(".nav-dt").outerWidth(true),
            _0x45d4a9 = _0x12b7c3.find(".nav-dt")[0].offsetLeft,
            _0x5dbf70 = _0x37873c.parent().outerWidth(true),
            _0x34225f = parseInt(_0x1a8843);
          _0x37873c.transition(300);
          if (_0x45d4a9 < (_0x5dbf70 - parseInt(_0x4f67e9)) / 2) _0x37873c.transform("translate3d(0px,0px,0px)");else {
            if (_0x45d4a9 > _0x34225f - (parseInt(_0x4f67e9) + _0x5dbf70) / 2) _0x37873c.transform("translate3d(" + (_0x5dbf70 - _0x34225f) + "px,0px,0px)");else {
              _0x37873c.transform("translate3d(" + ((_0x5dbf70 - parseInt(_0x4f67e9)) / 2 - _0x45d4a9) + "px,0px,0px)");
            }
          }
        }
      }
    },
    "Slide": function () {
      new Swiper(".slide-swiper", {
        "autoplay": true,
        "loop": true,
        "slidesPerView": 1
      });
      new Swiper(".mySwiper", {
        "loop": true,
        "autoplay": true,
        "clickable": true,
        "slidesPerView": 1,
        "pagination": {
          "el": ".swiper-pagination"
        }
      });
      new Swiper(".slide-swiper2", {
        "autoplay": {
          "disableOnInteraction": false
        },
        "loop": true,
        "slidesPerView": 1,
        "on": {
          "init": function () {
            {
              let _0x2ee4fd = $(".lazy-p").eq(1).css("backgroundImage");
              $(".slide-time-ios").css("backgroundImage", _0x2ee4fd);
            }
          },
          "slideChangeTransitionEnd": function () {
            {
              let _0x22948b = $(".lazy-p").eq(this.realIndex - 1).css("backgroundImage");
              $(".slide-time-ios").css("backgroundImage", _0x22948b);
            }
          }
        }
      });
      let _0x29ed28 = new Swiper(".you-ku", {
        "loop": true,
        "slidesPerView": 1,
        "autoplay": {
          "disableOnInteraction": false
        },
        "pagination": {
          "el": ".swiper-pagination"
        },
        "on": {
          "slideNextTransitionEnd": function () {
            $(".slide-nav-list li").eq(this.realIndex).addClass("on").siblings().removeClass("on");
            _0x48d41d();
          }
        }
      });
      $(".slide-nav-list li").hover(function () {
        _0x29ed28.slideTo($(".slide-nav-list li").index(this) + 1, 1000, false);
        $(this).addClass("on").siblings().removeClass("on");
        _0x48d41d();
      });
      function _0x48d41d() {
        {
          let _0x555efa = $(".slid-g .swiper-slide-active .this-100").html();
          $(".slide-nav-link").html("<div class=\"this-100\">" + _0x555efa + "</div>");
        }
      }
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
        "slidesPerView": 3,
        "slidesPerGroup": 3,
        "observer": true,
        "navigation": {
          "nextEl": ".swiper-button-next",
          "prevEl": ".swiper-button-prev"
        },
        "breakpoints": {
          2200: {
            "slidesPerView": 10,
            "slidesPerGroup": 10
          },
          1934: {
            "slidesPerView": 9,
            "slidesPerGroup": 9
          },
          1692: {
            "slidesPerView": 8,
            "slidesPerGroup": 8
          },
          1330: {
            "slidesPerView": 7,
            "slidesPerGroup": 7
          },
          767: {
            "freeMode": true,
            "slidesPerView": "auto",
            "slidesPerGroup": 1
          }
        }
      });
      let _0xc0c90b = $(".star-works .actor-api");
      _0xc0c90b.length > 0 && ($(".star-works .public-list-box").length > 0 ? _0x414f74($(".star-active").attr("data-actor")) : $(".star-works").hide());
      $(".star-works-top .public-list-box").click(function () {
        $(this).addClass("star-active").siblings().removeClass("star-active");
        _0x414f74($(this).attr("data-actor"));
      });
      function _0x414f74(_0x49529a) {
        let _0x12d3aa = "";
        for (let _0xcc8c8c = 0; _0xcc8c8c < 9; _0xcc8c8c++) {
          _0x12d3aa = _0x12d3aa + "<div class=\"public-list-box public-pic-b swiper-slide\"><div class=\"public-list-div\">" + "<a class=\"public-list-exp\"><div class=\"lazy box\"><span class=\"loadIcon spin-dot-spin\"><i class=\"spin-dot-item\"></i><i class=\"spin-dot-item\"></i>" + "<i class=\"spin-dot-item\"></i><i class=\"spin-dot-item\"></i></span></div></a></div><div class=\"public-list-button\"><a class=\"time-title box radius\"></a>" + "</div></div>";
        }
        _0xc0c90b.html(_0x12d3aa);
        EC.Ajax(maccms.path + "/index.php/api/actor_vod_api?name=" + _0x49529a, "get", "json", "", function (_0x345444) {
          Number(_0x345444.code) === 1 ? (_0x12d3aa = "", $.each(_0x345444.list, function (_0x374e44, _0x58dff1) {
            _0x12d3aa = _0x12d3aa + "    <div class=\"public-list-box public-pic-" + _0x345444.ajax.vod_pic + " swiper-slide\">\n" + "        <div class=\"public-list-div public-list-bj\">\n" + "            <a" + HTML.Target(_0x345444.ajax.vod_target) + " class=\"public-list-exp\" href=\"" + _0x58dff1.url + "\">\n" + "                <img class=\"lazy lazy1 gen-movie-img " + maccms.vod_mask + "\" alt=\"" + _0x58dff1.name + "\" referrerpolicy=\"no-referrer\" data-src=\"" + _0x58dff1.pic + "\" />" + "                <span class=\"public-bg\"></span>\n" + "                <span class=\"public-play\"><i class=\"fa\">&#xe593;</i></span>\n" + "            </a>\n" + "        </div>\n" + "        <div class=\"public-list-button\"><a" + HTML.Target(_0x345444.ajax.vod_target) + " class=\"time-title ft4 hide\" href=\"" + _0x58dff1.url + "\" title=\"" + _0x58dff1.name + "\">" + _0x58dff1.name + "</a></div>" + "    </div>";
          }), _0xc0c90b.html(_0x12d3aa), EC.Init.LazyLoad.update(), $(".lang-bnt").length === 1 && zh_tranBody()) : _EC.Pop.Msg(language["39"], "", "error");
        });
      }
    }
  },
  "Pop": {
    "Uid": "DCC147D11943AF75",
    "Drawer": function (_0x543b38, _0x5346a2) {
      if ($(".drawer-list").length > 0) {
        _EC.Pop.Msg(language["40"], "", "error");
        return;
      }
      $("body").append("<div class=\"drawer-list\"><div class=\"drawer-list-bg box-bg ease\" style=\"display:none\"></div><div class=\"drawer-list-box bj3\"></div></div>");
      $(".drawer-list-box").html(_0x543b38);
      _0x5346a2();
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
    "Show": function (_0x218ec2, _0x48c631, _0x2a1029) {
      Number($(".window").length) !== 1 && EC.Pop.RemoveWin();
      $("body").append("<div class=\"window\"><div class=\"box-bg\"></div><div class=\"window-box\"><div class=\"topfadeInUp animated bj3 cor4\"><div class=\"window-title rel\"><h2 class=\"subscript ft4 br\"></h2><a class=\"window-off fa ds-guanbi\"></a></div><div class=\"window-content\"></div></div></div></div>");
      $(".window .subscript").html(_0x48c631);
      $(".window-content").html(_0x218ec2);
      $(".window-box").addClass("window-show");
      $(document).on("click", ".box-bg", function () {
        $(this).parent().remove();
      });
      $(document).on("click", ".window-off", function () {
        $(this).parent().parent().parent().parent().remove();
      });
      _0x2a1029();
    },
    "RemoveWin": function () {
      $(".window").remove();
    }
  },
  "Toggle": function () {
    $(".switch-button a").click(function () {
      $(this).addClass("selected").siblings().removeClass("selected");
      let _0x7c617c = $(".switch-button a").index(this),
        _0x32fcff = $(".switch-box .check").eq(_0x7c617c);
      _0x32fcff.fadeIn(800).siblings().hide();
      _0x32fcff.addClass("selected").siblings().removeClass("selected");
    });
  },
  "player": {
    "player_jx": function (_0xdebfa, _0x2d91dc) {
      let _0x42c98e = {},
        _0x2040b0 = EC.Cookie.Get("player_api");
      if (!EC.Empty(_0x2040b0)) _0x42c98e = JSON.parse(_0x2040b0);else {
        {
          let _0x4e4ba3 = _0xdebfa.split("#");
          for (let _0x45b131 = 0; _0x45b131 < _0x4e4ba3.length; _0x45b131++) {
            let _0x135770 = _0x4e4ba3[_0x45b131].split("$"),
              _0x17d24e = _0x135770[1].split(",");
            for (let _0xb2cdbe = 0; _0xb2cdbe < _0x17d24e.length; _0xb2cdbe++) {
              _0x42c98e.hasOwnProperty(_0x17d24e[_0xb2cdbe]) ? _0x42c98e[_0x17d24e[_0xb2cdbe]][Object.keys(_0x42c98e[_0x17d24e[_0xb2cdbe]]).length] = {
                "name": _0x135770[0],
                "api": _0x135770[2]
              } : _0x42c98e[_0x17d24e[_0xb2cdbe]] = {
                0: {
                  "name": _0x135770[0],
                  "api": _0x135770[2]
                }
              };
            }
          }
          EC.Cookie.Set("player_api", JSON.stringify(_0x42c98e));
        }
      }
      let _0x2ac570 = "";
      for (let _0xdf4e94 in _0x42c98e) {
        {
          if (_0xdf4e94 == _0x2d91dc) {
            {
              let _0xd91b01 = _0x42c98e[_0xdf4e94];
              for (let _0x23d79e = 0; _0x23d79e < Object.keys(_0xd91b01).length; _0x23d79e++) {
                !EC.Empty(maccms.jx_index) && _0x23d79e == maccms.jx_index ? _0x2ac570 = _0x2ac570 + "<a class=\"box radius hide border bj2\" href=\"javascript:\" data-api=\"" + _0xd91b01[_0x23d79e].api + "\">" + _0xd91b01[_0x23d79e].name + "</a>" : _0x2ac570 = _0x2ac570 + "<a class=\"box radius hide border\" href=\"javascript:\" data-api=\"" + _0xd91b01[_0x23d79e].api + "\">" + _0xd91b01[_0x23d79e].name + "</a>";
              }
            }
          }
        }
      }
      _0x2ac570.length > 1 && $(".line-switch").html(_0x2ac570);
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
      EC.Ajax(maccms.path + "/index.php/user/ajax_login", "post", "json", "", function (_0x6a3dcc) {
        EC.Pop.Show(_0x6a3dcc, language["41"], function () {
          $("body").on("click", "#wp-submit", function () {
            $(this).unbind("click");
            EC.Ajax(maccms.path + "/index.php/user/login", "post", "json", $(".login-form").serialize(), function (_0x134cad) {
              _EC.Pop.Msg(_0x134cad.msg, "", "error");
              Number(_0x134cad.code) === 1 && location.reload();
            });
          });
        });
      }, function () {
        _EC.Pop.Msg(language["42"], "", "error");
      });
    },
    "Logout": function () {
      $(this).unbind("click");
      EC.Ajax(maccms.path + "/index.php/user/logout", "post", "json", "", function (_0x197ff4) {
        _EC.Pop.Msg(_0x197ff4.msg);
        Number(_0x197ff4.code) === 1 && location.reload();
      });
    },
    "Collection": function () {
      $("body").on("click", ".collection", function () {
        if (Number(EC.User.IsLogin) === 0) {
          {
            EC.User.Login();
            return;
          }
        }
        let _0x43337f = $(this);
        _0x43337f.attr("data-id") && EC.Ajax(maccms.path + "/index.php/user/ajax_ulog/?ac=set&mid=" + _0x43337f.attr("data-mid") + "&id=" + _0x43337f.attr("data-id") + "&type=" + _0x43337f.attr("data-type"), "get", "json", "", function () {
          _EC.Pop.Msg("收藏成功");
        });
      });
    }
  },
  "Ulog": {
    "Init": function () {
      EC.Ulog.Set();
    },
    "Set": function () {
      let _0x2edb22 = $(".ds-log-set");
      _0x2edb22.attr("data-mid") && $.get(maccms.path + "/index.php/api/ulog/?ac=set&mid=" + _0x2edb22.attr("data-mid") + "&id=" + _0x2edb22.attr("data-id") + "&sid=" + _0x2edb22.attr("data-sid") + "&nid=" + _0x2edb22.attr("data-nid") + "&type=" + _0x2edb22.attr("data-type"));
    }
  },
  "Hits": {
    "Init": function () {
      let _0xc965b6 = $(".ds-hits");
      if (Number(_0xc965b6.length) === 0) {
        return;
      }
      EC.Ajax(maccms.path + "/index.php/ajax/hits?mid=" + _0xc965b6.attr("data-mid") + "&id=" + _0xc965b6.attr("data-id") + "&type=update", "get", "json", "", function (_0xf19a88) {
        Number(_0xf19a88.code) === 1 && $(".ds-hits").each(function (_0x43894b) {
          {
            let _0x154d7e = $(".ds-hits").eq(_0x43894b).attr("data-type");
            _0x154d7e !== "insert" && $("." + _0x154d7e).html(eval("(r.data." + _0x154d7e + ")"));
          }
        });
      });
    }
  },
  "Md5": function (_0x1a1b4d) {
    return hex_md5("DS" + _0x1a1b4d + EC.Pop.Uid);
  },
  "Score": function () {
    let _0x13feef = 0;
    $(document).on("click", "#rating li", function () {
      if (_0x13feef > 0) _EC.Pop.Msg(language["43"]);else {
        {
          let _0x129950 = $("#rating").data();
          EC.Ajax(maccms.path + "/index.php/ajax/score?mid=" + _0x129950.mid + "&id=" + _0x129950.id + "&score=" + $(this).attr("val") * 2, "post", "json", "", function (_0x4a22b9) {
            _EC.Pop.Msg(_0x4a22b9.msg);
            _0x13feef = 1;
          }, function () {
            _EC.Pop.Msg(language["44"], "", "error");
          });
        }
      }
      $(this).nextAll().removeClass("active");
      $(this).prevAll().addClass("active");
      $(this).addClass("active");
    });
  },
  "Suggest": {
    "Init": function (_0x16b609, _0x575c8f) {
      if (Number(maccms.so_off) === 1) try {
        $(_0x16b609).autocomplete(maccms.path + "/index.php/ajax/suggest?mid=" + _0x575c8f, {
          "inputClass": "search-input",
          "resultsClass": "results",
          "loadingClass": "loading",
          "appendTo": ".completion",
          "minChars": 1,
          "matchSubset": 0,
          "cacheLength": 10,
          "multiple": false,
          "matchContains": true,
          "autoFill": false,
          "dataType": "json",
          "parse": function (_0x339b25) {
            if (Number(_0x339b25.code) === 1) {
              let _0x23292b = [];
              $.each(_0x339b25.list, function (_0xfc4dae, _0x97700f) {
                _0x97700f.url = _0x339b25.url;
                _0x23292b[_0xfc4dae] = {
                  "data": _0x97700f
                };
              });
              return _0x23292b;
            } else {
              return {
                "data": ""
              };
            }
          },
          "formatItem": function (_0x485280) {
            return _0x485280.name;
          },
          "formatResult": function (_0x30dc2b) {
            return _0x30dc2b.text;
          }
        }).result(function (_0x46f774, _0x386a3b) {
          {
            $(_0x16b609).val(_0x386a3b.name);
            let _0x400267 = _0x386a3b.url.replace("mac_wd", encodeURIComponent(_0x386a3b.name));
            EC.Records.Set(_0x386a3b.name, _0x400267);
            location.href = _0x400267;
          }
        });
      } catch (_0x51a360) {}
    }
  },
  "History": {
    "BoxShow": 0,
    "Limit": 30,
    "Days": 7,
    "Json": "",
    "Msg": "<div class=\"null cor5\"><img src=\"" + maccms.path2 + "static/ds3/img/null.png\" alt=\"" + language["2"] + "\"><span>" + language["45"] + "</span></div>",
    "Init": function () {
      let _0xb720de = [];
      if (this.Json) _0xb720de = this.Json;else {
        {
          let _0x83bfd0 = EC.Cookie.Get("mac_history");
          !EC.Empty(_0x83bfd0) && (_0xb720de = eval(_0x83bfd0));
        }
      }
      let _0xea2303 = "";
      if (_0xb720de.length > 0) {
        for (let _0x212e86 = 0; _0x212e86 < _0xb720de.length; _0x212e86++) {
          _0xea2303 += "<li><a class=\"history-a flex\" href=\"" + _0xb720de[_0x212e86].link + "\" target=\"video\" title=\"" + _0xb720de[_0x212e86].name + "\"><img class=\"lazy lazy1\" referrerpolicy=\"no-referrer\" alt=\"" + _0xb720de[_0x212e86].name + "\" data-src=\"" + _0xb720de[_0x212e86].pic + "\"/>" + "<div class=\"history-r\"><div class=\"hide2\">" + _0xb720de[_0x212e86].name + "</div><div><span class=\"cor5\">" + _0xb720de[_0x212e86].mid + "</span></div></div></a></li>";
        }
      } else _0xea2303 += this.Msg;
      $(".locality-history ul").html(_0xea2303);
      $("#l_history").click(function () {
        EC.History.Clear();
      });
      let _0x1604d0 = $(".ds-history-set");
      _0x1604d0.attr("data-name") && EC.History.Set(_0x1604d0.attr("data-name"), _0x1604d0.attr("data-link"), _0x1604d0.attr("data-pic"), _0x1604d0.attr("data-mid"));
    },
    "Set": function (_0x5444d1, _0x4bf85b, _0x2bdde0, _0x5bda15) {
      !_0x4bf85b && (_0x4bf85b = document.URL);
      let _0x3fe158 = EC.Cookie.Get("mac_history"),
        _0x982858 = "";
      if (!EC.Empty(_0x3fe158)) {
        this.Json = eval(_0x3fe158);
        for (let _0x42a068 = 0; _0x42a068 < this.Json.length; _0x42a068++) {
          if (this.Json[_0x42a068].link === _0x4bf85b) return false;
        }
        _0x982858 = "{log:[{\"name\":\"" + _0x5444d1 + "\",\"link\":\"" + _0x4bf85b + "\",\"pic\":\"" + _0x2bdde0 + "\",\"mid\":\"" + _0x5bda15 + "\"},";
        for (let _0x4dbf0a = 0; _0x4dbf0a < this.Json.length; _0x4dbf0a++) {
          {
            if (_0x4dbf0a <= this.Limit && this.Json[_0x4dbf0a]) {
              let _0x1f7585 = this.Json[_0x4dbf0a].name;
              if (_0x1f7585 === _0x5444d1) {} else _0x982858 += "{\"name\":\"" + this.Json[_0x4dbf0a].name + "\",\"link\":\"" + this.Json[_0x4dbf0a].link + "\",\"pic\":\"" + this.Json[_0x4dbf0a].pic + "\",\"mid\":\"" + this.Json[_0x4dbf0a].mid + "\"},";
            } else break;
          }
        }
        _0x982858 = _0x982858.substring(0, _0x982858.lastIndexOf(","));
        _0x982858 += "]}";
      } else {
        _0x982858 = "{log:[{\"name\":\"" + _0x5444d1 + "\",\"link\":\"" + _0x4bf85b + "\",\"pic\":\"" + _0x2bdde0 + "\",\"mid\":\"" + _0x5bda15 + "\"}]}";
      }
      this.Json = eval(_0x982858);
      EC.Cookie.Set("mac_history", _0x982858, this.Days);
    },
    "Clear": function () {
      EC.Cookie.Del("mac_history");
      $(".locality-history ul").html(this.Msg);
    }
  },
  "Records": {
    "Limit": 8,
    "Days": 7,
    "Json": "",
    "Init": function () {
      EC.Records.Click();
      let _0x2a917c = [];
      if (this.Json) _0x2a917c = this.Json;else {
        let _0x4eafe6 = EC.Cookie.Get("DS_Records");
        !EC.Empty(_0x4eafe6) && (_0x2a917c = eval(_0x4eafe6));
      }
      if (_0x2a917c.length > 0) {
        {
          let _0x17ba4f = "";
          for (let _0x346b64 = 0; _0x346b64 < _0x2a917c.length; _0x346b64++) {
            _0x17ba4f += "<a href=\"" + _0x2a917c[_0x346b64].url + "?wd=" + _0x2a917c[_0x346b64].name + "\" class=\"public-list-b bj border\">" + _0x2a917c[_0x346b64].name + "</a>";
          }
          $(".records-list").html(_0x17ba4f);
        }
      } else $(".records-list").html("<span class=\"cor5\">" + language["46"] + "</span>");
      $(document).on("click", "#re_del", function () {
        EC.Records.Clear();
      });
    },
    "Set": function (_0x195772, _0x15d300) {
      let _0x282981 = EC.Cookie.Get("DS_Records"),
        _0x27e22c = {};
      if (!EC.Empty(_0x282981)) {
        {
          this.Json = eval(_0x282981);
          for (let _0x283607 = 0; _0x283607 < this.Json.length; _0x283607++) {
            if (this.Json[_0x283607].name === _0x195772) return false;
          }
          _0x27e22c = "{log:[{\"name\":\"" + _0x195772 + "\",\"url\":\"" + _0x15d300 + "\"},";
          for (let _0xadbb5e = 0; _0xadbb5e < this.Json.length; _0xadbb5e++) {
            if (_0xadbb5e <= this.Limit && this.Json[_0xadbb5e]) {
              let _0x471bcf = this.Json[_0xadbb5e].name;
              if (_0x471bcf === _0x195772) {} else _0x27e22c += "{\"name\":\"" + this.Json[_0xadbb5e].name + "\",\"url\":\"" + this.Json[_0xadbb5e].url + "\"},";
            } else {
              break;
            }
          }
          _0x27e22c = _0x27e22c.substring(0, _0x27e22c.lastIndexOf(","));
          _0x27e22c += "]}";
        }
      } else {
        _0x27e22c = "{log:[{\"name\":\"" + _0x195772 + "\",\"url\":\"" + _0x15d300 + "\"}]}";
      }
      this.Json = eval(_0x27e22c);
      EC.Cookie.Set("DS_Records", _0x27e22c, this.Days);
    },
    "Clear": function () {
      EC.Cookie.Del("DS_Records");
      $(".records-list").html("<span class=\"cor5\">" + language["47"] + "</span>");
    },
    "Click": function () {
      $(".head .this-select").click(function () {
        if ($(this).attr("data-id") === "1") {
          $(this).attr("data-id", "0").find("i").html("&#xe564;");
          let _0xd3429e = $(".select-list .ease").html();
          $(".head .this-search").append("<div class=\"this-search-select bj radius br cor4\">" + _0xd3429e + "</div>");
        } else $(this).attr("data-id", "1").find("i").html("&#xe563;"), $(".head .this-search-select").remove();
      });
      $("body").on("click", ".head .this-search-select span", function () {
        {
          let _0x5c89d5 = $(this).data();
          $(".head .this-select").html(_0x5c89d5.name + "<i class=\"fa\">&#xe563;</i>").attr("data-id", "1");
          $("#search2").attr("action", _0x5c89d5.url);
          $(".head .this-search-select").remove();
        }
      });
      $(".head .this-search .ds-sousuo").click(function () {
        let _0x3b8919 = $(".head .this-input").val(),
          _0x37fc99 = $("#search2").attr("action");
        if (EC.Empty(_0x3b8919)) event.preventDefault(), _EC.Pop.Msg(language["48"], "", "error");else {
          if ($(".lang-bnt").length === 1) {
            const _0x1e663a = transChinese(_0x3b8919);
            $(".head .this-input").val(_0x1e663a);
            _0x3b8919 = _0x1e663a;
          }
          EC.Records.Set(_0x3b8919, _0x37fc99);
        }
      });
      $(".head .this-input").click(function () {
        let _0x2cedbe = $(".public-list-new").html(),
          _0x4767c5 = $(".pop-list-body .wap-diy-vod-e").html();
        $(".head .this-search").append("<div class=\"this-search-get\"><div class=\"box radius\"><div>" + _0x2cedbe + "</div>" + "<div class=\"wap-diy-vod-e search-hot\">" + _0x4767c5 + "</div>" + "</div></div>");
      }).keydown(function () {
        $(".head .this-search-get").remove();
      });
      $(".head .this-search").mouseleave(function () {
        $(".head .this-search-get").remove();
      });
      $(".select-name").click(function () {
        $(this).attr("data-id") === "1" ? ($(this).attr("data-id", "0").children().html("&#xe564;"), $(".select-list").show()) : ($(this).attr("data-id", "1").children().html("&#xe563;"), $(".select-list").hide());
      });
      $(".select-list span").click(function () {
        {
          let _0x509e3c = $(this).data();
          $(".select-name").html(_0x509e3c.name + "<i class=\"fa cor4\">&#xe563;</i>").attr("data-id", "1");
          $("#search").attr("action", _0x509e3c.url);
          $(".select-list").hide();
        }
      });
      $(".search-input-sub").click(function () {
        {
          let _0xa421e = $(".search-input").val(),
            _0x52465c = $("#search").attr("action");
          if (EC.Empty(_0xa421e)) event.preventDefault(), _EC.Pop.Msg(language["48"], "", "error");else {
            {
              if ($(".lang-bnt").length === 1) {
                const _0x107674 = transChinese(_0xa421e);
                $(".search-input").val(_0x107674);
                _0xa421e = _0x107674;
              }
              EC.Records.Set(_0xa421e, _0x52465c);
            }
          }
        }
      });
    }
  },
  "Remaining": function (_0x228bc1, _0x192b99, _0x57d11b) {
    let _0x4ea7dc = _0x192b99 - $(_0x228bc1).val().length;
    _0x4ea7dc < 0 && (_0x4ea7dc = 0, $(_0x228bc1).val($(_0x228bc1).val().substr(0, 200)));
    $(_0x57d11b).text(_0x4ea7dc);
  },
  "Digg": function () {
    $("body").on("click", ".digg-link", function () {
      let _0x5d044a = $(this);
      _0x5d044a.attr("data-id") && EC.Ajax(maccms.path + "/index.php/ajax/digg.html?mid=" + _0x5d044a.attr("data-mid") + "&id=" + _0x5d044a.attr("data-id") + "&type=" + _0x5d044a.attr("data-type"), "get", "json", "", function (_0x77d1da) {
        _0x5d044a.addClass("disabled");
        Number(_0x77d1da.code) === 1 ? _0x5d044a.attr("data-type") === "up" ? _0x5d044a.find(".digg-num").html(_0x77d1da.data.up) : _0x5d044a.find(".digg-num").html(_0x77d1da.data.down) : _EC.Pop.Msg(_0x77d1da.msg);
      });
    });
  },
  "Gbook": {
    "Login": 0,
    "Verify": 0,
    "Init": function () {
      let _0x4bd68d = $(".gbook-form").data();
      EC.Gbook.Login = _0x4bd68d.login;
      EC.Gbook.Verify = _0x4bd68d.verify;
      let _0x9a7af2 = $("body");
      _0x9a7af2.on("keyup", ".gbook-content", function () {
        EC.Remaining($(this), 200, ".gbook_remaining");
      });
      _0x9a7af2.on("focus", ".gbook-content", function () {
        Number(EC.Gbook.Login) === 1 && Number(EC.User.IsLogin) !== 1 && EC.User.Login();
      });
      _0x9a7af2.on("click", ".gbook-submit", function () {
        EC.Gbook.Submit();
      });
    },
    "Show": function (_0x4d5300) {
      EC.Ajax(maccms.path + "/index.php/gbook/index?page=" + _0x4d5300, "post", "json", "", function (_0x191f1c) {
        $(".mac_gbook_box").html(_0x191f1c);
      }, function () {
        $(".mac_gbook_box").html(language["49"]);
      });
    },
    "Submit": function () {
      if (EC.Empty($(".gbook-content").val())) {
        _EC.Pop.Msg(language["50"], "", "error");
        return false;
      }
      EC.Ajax(maccms.path + "/index.php/gbook/saveData", "post", "json", $(".gbook-form").serialize(), function (_0xb92ae6) {
        _EC.Pop.Msg(_0xb92ae6.msg);
        Number(_0xb92ae6.code) === 1 ? location.reload() : Number(EC.Gbook.Verify) === 1 && EC.Verify.Refresh();
      });
    },
    "Tg": function () {
      if (EC.Empty($(".tg-content").val())) return _EC.Pop.Msg(language["51"], "", "error"), false;
      EC.Ajax(maccms.path + "/index.php/api/tougao", "post", "json", $(".tg-form").serialize(), function (_0x1b9a69) {
        _EC.Pop.Msg(_0x1b9a69.msg);
        Number(_0x1b9a69.code) === 1 ? location.reload() : EC.Verify.Refresh();
      });
    },
    "Report": function (_0x4807c0) {
      EC.Ajax(maccms.path + "/index.php/gbook/report.html?id=" + _0x4807c0.id + "&name=" + encodeURIComponent(_0x4807c0.url + location.href), "post", "json", "", function (_0x284ebb) {
        EC.Pop.Show(_0x284ebb, language["52"], function () {
          let _0x6dc4d = $(".gbook-form").data();
          EC.Gbook.Login = _0x6dc4d.login;
          EC.Gbook.Verify = _0x6dc4d.verify;
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
      let _0x21414e = $("body");
      _0x21414e.on("click", ".comment-face-box img", function () {
        {
          let _0x46292a = $(this).parent().parent().parent().parent().find(".comment-content");
          $(_0x46292a).val($(_0x46292a).val() + "[em:" + $(this).attr("data-id") + "]");
        }
      });
      _0x21414e.on("click", ".comment-face-panel", function () {
        $(this).parent().parent().find(".comment-face-box").fadeToggle();
      });
      _0x21414e.on("click", ".face-close", function () {
        $(".comment-face-box").hide();
      });
      _0x21414e.on("click", ".comment-page", function () {
        EC.Comment.Show($(this).attr("data-page"));
      });
      _0x21414e.on("keyup", ".comment-content", function () {
        EC.Remaining($(this), 200, $(".comment-remaining"));
      });
      _0x21414e.on("focus", ".comment-content", function () {
        Number(EC.Comment.Login) === 1 && Number(EC.User.IsLogin) !== 1 && EC.User.Login();
      });
      _0x21414e.on("click", ".comment-report", function () {
        let _0x98a888 = $(this);
        $(this).attr("data-id") && EC.Ajax(maccms.path + "/index.php/comment/report.html?id=" + _0x98a888.attr("data-id"), "get", "json", "", function (_0x3b8ba9) {
          _0x98a888.addClass("disabled");
          _EC.Pop.Msg(language["53"], "", "success");
        });
      });
      _0x21414e.on("click", ".comment-reply-button", function () {
        {
          let _0xead986 = $(this);
          if (_0xead986.attr("data-id")) {
            let _0x38a022 = _0xead986.html();
            $(".comment-reply-form").remove();
            if (_0x38a022 === language["54"]) return _0xead986.html("&#xe573;"), false;
            let _0x1ca706 = $(".comment-form").prop("outerHTML"),
              _0x47f0d3 = $(_0x1ca706);
            _0x47f0d3.addClass("comment-reply-form");
            _0x47f0d3.find("input[name=\"comment_pid\"]").val(_0xead986.attr("data-id"));
            _0xead986.parent().parent().after(_0x47f0d3);
            $(".comment-reply-button").html("&#xe573;");
            _0xead986.html(language["54"]);
          }
        }
      });
      _0x21414e.on("click", ".comment-submit", function () {
        let _0x40ad90 = $(this);
        EC.Comment.Submit(_0x40ad90);
      });
    },
    "Show": function (_0x297077) {
      let _0x5e2320 = $(".ds-comment");
      _0x5e2320.length > 0 && EC.Ajax(maccms.path + "/index.php/comment/ajax.html?rid=" + _0x5e2320.attr("data-id") + "&mid=" + _0x5e2320.attr("data-mid") + "&page=" + _0x297077, "get", "json", "", function (_0x1fe7f3) {
        $(".ds-comment").html(_0x1fe7f3);
        $(".lang-bnt").length === 1 && zh_tranBody();
      }, function () {
        _EC.Pop.Msg(language["49"], "", "error");
      });
    },
    "Submit": function (_0xd2bcc7) {
      let _0x5df98e = _0xd2bcc7.parents("form");
      if ($(_0x5df98e).find(".comment-content").val() === "") {
        _EC.Pop.Msg(language["55"], "", "error");
        return false;
      }
      let _0x1fad40 = $(".ds-comment").data();
      if (EC.Empty(_0x1fad40.mid)) {
        _EC.Pop.Msg(language["56"], "", "error");
        return false;
      }
      if (EC.Empty(_0x1fad40.id)) return _EC.Pop.Msg(language["57"], "", "error"), false;
      EC.Ajax(maccms.path + "/index.php/comment/saveData", "post", "json", $(_0x5df98e).serialize() + "&comment_mid=" + _0x1fad40.mid + "&comment_rid=" + _0x1fad40.id, function (_0xbf37b9) {
        _EC.Pop.Msg(_0xbf37b9.msg);
        if (Number(_0xbf37b9.code) === 1) {
          EC.Comment.Show(1);
        } else {
          if (Number(EC.Comment.Verify) === 1) {
            EC.Verify.Refresh();
          }
        }
      });
    }
  },
  "Verify": {
    "Init": function () {
      EC.Verify.Click();
      $(".verify-submit").click(function () {
        {
          let _0x50141f = $("input[name=\"verify\"]").val();
          EC.Ajax(maccms.path + "/index.php/ajax/verify_check?type=" + $(this).data("type") + "&verify=" + _0x50141f, "post", "json", "", function (_0x206cc3) {
            if (Number(_0x206cc3.code) === 1) location.reload();else {
              _EC.Pop.Msg(_0x206cc3.msg);
              EC.Verify.Refresh();
            }
          }, function () {
            _EC.Pop.Msg(language["58"], "", "error");
            EC.Verify.Refresh();
          });
        }
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
    "Fun": function (_0x1b7080) {
      let _0x432ae7 = $("#qiAnDao-list"),
        _0x5540a6 = "",
        _0x1f2719 = new Date(),
        _0x44f2d3 = new Date(_0x1f2719.getFullYear(), parseInt(_0x1f2719.getMonth()), 1).getDay(),
        _0x5cec52 = new Date(_0x1f2719.getFullYear(), parseInt(_0x1f2719.getMonth() + 1), 0),
        _0x225fdb = _0x5cec52.getDate();
      $(".qiAnDao-bj").text(_0x1f2719.getMonth() + 1);
      for (let _0xc0aef3 = 0; _0xc0aef3 < 42; _0xc0aef3++) {
        _0x5540a6 += "<li></li>";
      }
      _0x432ae7.html(_0x5540a6);
      let _0x5beed4 = _0x432ae7.find("li");
      for (let _0x10e8b6 = 0; _0x10e8b6 < _0x225fdb; _0x10e8b6++) {
        let _0xf0c23 = parseInt(_0x10e8b6 + 1);
        _0x5beed4.eq(_0x10e8b6 + _0x44f2d3).html("<em>" + _0xf0c23 + "</em>").addClass("date" + _0xf0c23);
        if (_0x1b7080.length > 0) for (let _0x55d661 = 0; _0x55d661 < _0x1b7080.length; _0x55d661++) {
          _0xf0c23 === _0x1b7080[_0x55d661] && _0x5beed4.eq(_0x10e8b6 + _0x44f2d3).addClass("nav-dt");
        }
      }
      $(".qiAnDao-con").after("<style>#qiAnDao-list li:nth-child(n+" + (_0x225fdb + _0x44f2d3 + 1) + ") {display: none}</style>").addClass("qiAnDao-show");
      $(".date" + _0x1f2719.getDate() + ":not(.nav-dt)").addClass("able-qiAnDao");
      $(".qiAnDao-top,.able-qiAnDao").click(function () {
        EC.Ajax(maccms.path + "/index.php/qian/sign", "get", "json", "", function (_0x1b3743) {
          Number(_0x1b3743.code) === 0 ? _EC.Pop.Msg(_0x1b3743.msg, "", "error") : (_EC.Pop.Msg(language["60"] + _0x1b3743.reward, "", "success"), $(".able-qiAnDao").addClass("nav-dt"), $(".qiAnDao-top").addClass("nav-dt"));
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
      $("#qiAnDao_bnt").click(function () {
        if (Number(EC.User.IsLogin) === 0) {
          {
            EC.User.Login();
            return;
          }
        }
        if (Number($(".qiAnDao-show").length) === 0) $("#qiAnDao_2,.qiAnDao-top").hide(), $("#qiAnDao_1,.qiAnDao-con").show(), EC.Ajax(maccms.path + "/index.php/qian/days", "get", "json", "", function (_0x18b956) {
          if (Number(_0x18b956.code) === 1) {
            EC.QiAnDao.Fun(_0x18b956.data);
            setTimeout(function () {
              $("#qiAnDao_2,.qiAnDao-top").show();
              $("#qiAnDao_1").hide();
            }, 1000);
          } else {
            $(".qiAnDao-con").hide();
            _EC.Pop.Msg(_0x18b956.msg, "", "error");
          }
        }, function () {
          $("#qiAnDao_1").html(language["42"]);
        });else {
          $(".qiAnDao-show").show();
        }
      });
    }
  }
};
$(function () {
  EC.Style.Init();
  EC.Init();
  EC.Verify.Init();
  EC.User.Init();
  EC.Records.Init();
  EC.Suggest.Init(".mac_wd", 1, "");
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