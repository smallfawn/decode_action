//Tue Jul 23 2024 15:45:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let XMlayEr = {
  "isMobile": function () {
    var Iiii1lli = navigator.userAgent;
    return /(Windows Phone|iPod|iPad)/.test(Iiii1lli) ? 0 : 1;
  },
  "decrypt": function (ii1i11iI, l1liili, I1IiIlI1) {
    let II1lI11I = CryptoJS.AES.decrypt(ii1i11iI, CryptoJS.enc.Utf8.parse(l1liili), {
      "iv": CryptoJS.enc.Utf8.parse(I1IiIlI1),
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
    return II1lI11I.toString(CryptoJS.enc.Utf8);
  },
  "error": function (iIlIli1I) {
    $("#player").hide();
    $("#loading").hide();
    $("body").append("<div id=\"error\"><h1>" + iIlIli1I + "</h1></div>");
  },
  "AjaxData": function (Iii1Iiii, iiilIi1i) {
    $.ajaxSettings.timeout = "6000";
    $.ajaxSettings.async = true;
    $.post("https://122.228.8.29:4433/xmflv.js", Iii1Iiii, function (l111iI1) {
      l111iI1.success == "1" ? iiilIi1i(l111iI1) : XMlayEr.error(l111iI1.msg);
    }, "json").error(function (Iliiiiil, Il1Iii1l, iIi1ii1i) {
      $.post("https://cache.m3u8.pw/xmflv.js", Iii1Iiii, function (iilI1IIl) {
        iilI1IIl.success == "1" ? iiilIi1i(iilI1IIl) : XMlayEr.error(iilI1IIl.msg);
      }, "json").error(function (IiI1l1i1, iillliii, IiIlilIi) {
        XMlayEr.error("接口请求失败,请尝试刷新重试");
      });
    });
  },
  "XMlayEr": function () {
    var iIil1li = new URLSearchParams(location.search);
    if (iIil1li.get("wap")) var Ii1lll11 = iIil1li.get("wap");else var Ii1lll11 = XMlayEr.isMobile();
    XMlayEr.next0 = iIil1li.get("next");
    var I111ill = Date.now(),
      lllIIlIl = sign(hex_md5(I111ill + url));
    XMlayEr.AjaxData({
      "wap": Ii1lll11,
      "url": url,
      "time": I111ill,
      "key": lllIIlIl
    }, function (iiIlI11I) {
      aes_key = iiIlI11I.aes_key;
      aes_iv = iiIlI11I.aes_iv;
      XMlayEr.name = iiIlI11I.name;
      XMlayEr.type = iiIlI11I.type;
      XMlayEr.vurl = XMlayEr.decrypt(iiIlI11I.url, aes_key, aes_iv);
      XMlayEr.next = XMlayEr.decrypt(iiIlI11I.next, aes_key, aes_iv);
      XMlayEr.html = XMlayEr.decrypt(iiIlI11I.html, aes_key, aes_iv);
      XMlayEr.dmid = iiIlI11I.dmid;
      XMlayEr.ggdmapi = iiIlI11I.ggdmapi;
      XMlayEr.load();
    });
  },
  "empty": function (Ii1l1iil) {
    return Ii1l1iil == null || Ii1l1iil === "";
  },
  "cookie": {
    "Set": function (iii1l1i, IliIi1I1, iI1lIiiI = 7, Ill11ii = "1") {
      if (Ill11ii === "1") localStorage.setItem(iii1l1i, IliIi1I1);else {
        let liIiiI1l = new Date();
        liIiiI1l.setTime(liIiiI1l.getTime() + iI1lIiiI * 24 * 60 * 60 * 1000);
        document.cookie = iii1l1i + "=" + encodeURIComponent(IliIi1I1) + ";path=/;expires=" + liIiiI1l.toUTCString();
      }
    },
    "Get": function (l1lilllI, lliII1ii = "1") {
      if (lliII1ii === "1") return localStorage.getItem(l1lilllI);else {
        let iIii1iiI = document.cookie.match(new RegExp("(^| )" + l1lilllI + "=([^;]*)(;|$)"));
        if (iIii1iiI != null) return decodeURIComponent(iIii1iiI[2]);
      }
    },
    "Del": function (l1i1il1I, Il1ii111 = "1") {
      if (Il1ii111 === "1") {
        localStorage.removeItem(l1i1il1I);
      } else {
        let iIllI1il = new Date();
        iIllI1il.setTime(iIllI1il.getTime() - 1);
        let llii1lll = this.Get(l1i1il1I, 2);
        if (llii1lll != null) {
          document.cookie = l1i1il1I + "=" + encodeURIComponent(llii1lll) + ";path=/;expires=" + iIllI1il.toUTCString();
        }
      }
    }
  },
  "play": function () {
    let l1ii1I = {
      "container": "#player",
      "contextmenu": [],
      "autoplay": false
    };
    l1ii1I.flip = true;
    l1ii1I.hotkey = true;
    l1ii1I.autoplay = true;
    l1ii1I.playbackRate = true;
    l1ii1I.aspectRatio = true;
    l1ii1I.screenshot = false;
    l1ii1I.pip = true;
    l1ii1I.fullscreen = true;
    l1ii1I.miniProgressBar = true;
    l1ii1I.fastForward = true;
    l1ii1I.airplay = true;
    l1ii1I.autoOrientation = true;
    let iiiIl1lI = XMlayEr.vurl,
      IIiii1ll = XMlayEr.type;
    l1ii1I.lang = "zh-cn";
    l1ii1I.theme = "#CC6633";
    l1ii1I.volume = Number(0.8);
    l1ii1I.setting = true;
    l1ii1I.url = iiiIl1lI;
    if (IIiii1ll === "flv") l1ii1I.type = "flv", l1ii1I.customType = {
      "flv": function lI1Ill(IiilIi11, lIIIIIIl, Iili1iI) {
        if (flvjs.isSupported()) {
          const iI1Iil11 = flvjs.createPlayer({
            "type": "flv",
            "url": lIIIIIIl
          });
          iI1Iil11.attachMediaElement(IiilIi11);
          iI1Iil11.load();
          Iili1iI.flv = iI1Iil11;
          Iili1iI.once("url", () => iI1Iil11.destroy());
          Iili1iI.once("destroy", () => iI1Iil11.destroy());
        } else {
          Iili1iI.notice.show = "Unsupported playback format: flv";
        }
      }
    };else {
      if (IIiii1ll === "m3u8" || IIiii1ll === "hls") {
        l1ii1I.type = "m3u8";
        l1ii1I.customType = {
          "m3u8": function I1Il111I(liI1ilII, lII1l11I, iIIl11Il) {
            if (Hls.isSupported()) {
              const I1IIiIli = new Hls();
              I1IIiIli.loadSource(lII1l11I);
              I1IIiIli.attachMedia(liI1ilII);
              iIIl11Il.hls = I1IIiIli;
              iIIl11Il.once("url", () => I1IIiIli.destroy());
              iIIl11Il.once("destroy", () => I1IIiIli.destroy());
            } else {
              if (liI1ilII.canPlayType("application/vnd.apple.mpegurl")) {
                liI1ilII.src = lII1l11I;
              } else iIIl11Il.notice.show = "Unsupported playback format: m3u8";
            }
          }
        };
      }
    }
    XMlayEr.void = new Artplayer(l1ii1I);
    $(document).on("click", ".yxq-vod-list", function () {
      var III1IIIl = $(".yxq-listbox");
      if (III1IIIl.length > 0) {
        $(".vodlist-of,.r-button").toggle();
        if ($(".yxq-stting").length > 0) {
          III1IIIl.removeClass("yxq-stting");
        } else {
          III1IIIl.addClass("yxq-stting");
        }
      } else III1IIIl.addClass("yxq-stting");
    });
  },
  "load": function () {
    XMlayEr.play();
    let l1ilI1iI = "#CC6633",
      llIll111 = ".s-on svg circle,.s-on svg path{fill:" + l1ilI1iI + "!important}.t-color{color:" + l1ilI1iI + "}.t-bj{background-color:" + l1ilI1iI + "}.ec-subtitle p{color: #fff; font-size: 1.6vw;background:#000c;}" + XMlayEr.header.logoCss() + "@media (max-width: 767px){.player-logo{width:100px}}";
    $("head").append("<style>" + llIll111 + "</style>");
    box.children().append("<div class=\"lock-box\"></div><div class=\"ec-danMa text\"><div class=\"ec-danMa-item ec-danMa-item--demo\"></div></div><div class=\"ec-subtitle\"></div><div class=\"header ease flex between\"><div class=\"player-title\"></div><div class=\"flex qoe-normal\" style=\"display:none\"><div class=\"kui-time\"></div><div class=\"batteryShape\"><div class=\"level\"><div class=\"percentage\"></div></div></div></div></div><div class=\"dm-box flex dm-wap\"><div class=\"dm-box-left flex\"><div class=\"dm-box-cc\" data-id=\"0\"></div><div class=\"dm-box-set\"></div><div class=\"dm-set-box ec-box\"><div id=\"dm_n1\" class=\"dm-set-list ds-set-show\">\n<div class=\"flex between\" data-id=\"1\"><div class=\"dm-set-label\">\u5F39\u5E55\u901F\u5EA6</div><div class=\"set-toggle flex\"><span>\u9002\u4E2D</span></div></div>\n<div class=\"flex between\" data-id=\"2\"><div class=\"dm-set-label\">\u5B57\u4F53\u5927\u5C0F</div><div class=\"set-toggle flex\"><span>\u9ED8\u8BA4</span></div></div>\n<div class=\"flex between\" data-id=\"3\"><div class=\"dm-set-label\">\u4E0D\u900F\u660E\u5EA6</div><div class=\"set-toggle flex\"><span>100%</span></div></div>\n<div class=\"flex between\"  data-id=\"4\"><div class=\"dm-set-label\">\u5F39\u5E55\u8303\u56F4</div><div class=\"set-toggle flex\"><span>3/4</span></div></div></div></div></div>\n<div class=\"dm-input-box flex-auto\"><div class=\"dm-box-t\"><div class=\"dm-style-box ec-box\"><div class=\"dm-style-title\">\u5F39\u5E55\u65B9\u5411</div><div class=\"content_dmP-1 flex\">\n<div class=\"item on-1\" data-type=\"right\">\u6EDA\u52A8<i></i></div><div class=\"item\" data-type=\"top\">\u9876\u90E8<i></i></div><div class=\"item\" data-type=\"bottom\">\u5E95\u90E8<i></i></div></div>\n<div class=\"dm-style-title\">\u5F39\u5E55\u989C\u8272</div><div class=\"content_dmP-2 flex\"><div class=\"item on-1\">\u9ED8\u8BA4<i></i></div><div class=\"item\" data-color=\"#02CC92\" style=\"color:#02CC92;border-color:#02CC92;\">\u9752\u8349\u7EFF<i></i></div>\n<div class=\"item\" data-color=\"#03A5FF\"  style=\"color:#03A5FF;border-color:#03A5FF;\">\u9999\u83C7\u84DD<i></i></div><div class=\"item\" data-color=\"#FF893B\"  style=\"color:#FF893B;border-color:#FF893B;\">\u6696\u9633\u6A59<i></i></div>\n<div class=\"item\" data-color=\"#FC265E\"  style=\"color:#FC265E;border-color:#FC265E;\">\u559C\u5E86\u7EA2<i></i></div><div class=\"item\" data-color=\"#BE8DF7\"  style=\"color:#BE8DF7;border-color:#BE8DF7;\">\u9500\u9B42\u7D2B<i></i></div>\n</div></div><img alt=\"\u5F39\u5E55\u989C\u8272\" class=\"dm-box-t-img\" src=\"https://img.alicdn.com/imgextra/i2/O1CN01KdGeoZ25bCijuGQzn_!!6000000007544-2-tps-69-66.png\"></div><input class=\"dm-input\" type=\"text\" data-time=\"10\" autocomplete=\"off\" placeholder=\"\u6765\u53D1\u4E2A\u5F39\u5E55\u5427~\" maxlength=\"22\">\n<button class=\"dm-send t-bj\" data-balloon=\"\u53D1\u9001\" data-balloon-pos=\"up\">\u53D1\u9001</button></div></div><div class=\"player-list-off off\"></div><div class=\"ec-box player-list\"><div class=\"new-check\"><div class=\"new-body\"></div></div></div><div class=\"ec-remember\"></div><div class=\"broadside seat1\"></div>");
    $(".art-controls-right").prepend("<div class=\"art-control dm-bnt hint--rounded hint--top\" data-index=\"20\" aria-label=\"\u53D1\u5F39\u5E55\"><i class=\"art-icon\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M833.94335938 148.30859375H190.05664062c-39.28710938 0-71.19140625 31.90429688-71.19140624 71.19140625V689.5390625c0 39.28710938 31.90429688 71.19140625 71.19140625 71.19140625h169.45312499l131.13281251 107.05078125c6.50390625 5.2734375 14.32617188 7.91015625 22.23632812 7.91015625 7.82226563 0 15.73242188-2.63671875 22.1484375-7.91015625l131.8359375-107.05078125h166.9921875c39.28710938 0 71.19140625-31.90429688 71.19140625-71.19140625V219.5c0.08789063-39.28710938-31.90429688-71.19140625-71.10351563-71.19140625z m0.87890624 541.23046875c0 0.43945313-0.43945313 0.87890625-0.87890625 0.87890625H654.47070313c-8.0859375 0-15.90820313 2.8125-22.14843751 7.91015625L512.96679688 795.18359375 394.31445312 698.328125c-6.24023438-5.09765625-14.15039063-7.91015625-22.23632812-7.91015625H190.05664062c-0.43945313 0-0.87890625-0.43945313-0.87890624-0.87890625V219.5c0-0.43945313 0.43945313-0.87890625 0.87890625-0.87890625h643.79882812c0.43945313 0 0.87890625 0.43945313 0.87890625 0.87890625V689.5390625z\"></path><path d=\"M345.09570312 455.3984375m-43.94531249 0a43.9453125 43.9453125 0 1 0 87.89062499 0 43.9453125 43.9453125 0 1 0-87.890625 0Z\"></path><path d=\"M512.96679688 455.3984375m-43.9453125 0a43.9453125 43.9453125 0 1 0 87.89062499 0 43.9453125 43.9453125 0 1 0-87.890625 0Z\"></path><path d=\"M681.01367188 455.3984375m-43.94531251 0a43.9453125 43.9453125 0 1 0 87.89062501 0 43.9453125 43.9453125 0 1 0-87.890625 0Z\"></path></svg></i></div><div class=\"art-control content-bnt hint--rounded hint--top\" data-index=\"20\" aria-label=\"\u5B57\u5E55\u5F00\u5173\"><i class=\"art-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z\"></path></svg></i></div>");
    XMlayEr.LoadAnimation();
    XMlayEr.header.Init();
    $(".content-bnt").remove();
    XMlayEr.danMu.Init();
    XMlayEr.list.html();
    XMlayEr.list.next();
    XMlayEr.list.autoNext();
    XMlayEr.broadside();
    XMlayEr.void.on("video:timeupdate", function () {
      let lI11lli = XMlayEr.void.currentTime;
      XMlayEr.cookie.Set(url, lI11lli, 7, 2);
    });
    XMlayEr.void.on("video:ended", function () {
      XMlayEr.cookie.Del(url, 2);
    });
  },
  "tips": {
    "removeMsg": function () {
      $(".pop-msg").remove();
    },
    "msg": function (iIiliill, I1l1i11l) {
      let I1lIlliI = I1l1i11l || 3000;
      $(".pop-msg").length > 0 && XMlayEr.tips.removeMsg();
      box.children().append("<div class=\"pop-msg vague4\"><div class=\"pop-content\"></div></div>");
      $(".pop-msg .pop-content").html(iIiliill);
      setTimeout(XMlayEr.tips.removeMsg, I1lIlliI);
    }
  },
  "header": {
    "Init": function () {
      this.marquee();
      this.title(XMlayEr.name);
      this.time();
      this.qfe();
    },
    "logoCss": function () {
      switch (1) {
        case "1":
          return ".player-logo{left: 20px;top: 20px;width: 15%;}";
        case "2":
          return ".player-logo{right: 20px;top: 20px;width: 15%;}";
        case "3":
          return ".player-logo{left: 20px;bottom: 80px;width: 15%;}";
        default:
          return ".player-logo{right: 20px;bottom: 80px;width: 15%;}";
      }
    },
    "marquee": function () {
      box.children().append("<div class=\"bullet-screen\" style=\"animation: bullet 10s linear infinite;color:#E50916</div>");
      setTimeout(function () {
        $(".bullet-screen").remove();
      }, 60 * 1000);
      XMlayEr.void.on("pause", function () {
        $(".bullet-screen").css("animation-play-state", "paused");
      });
      XMlayEr.void.on("play", function () {
        $(".bullet-screen").css("animation-play-state", "running");
      });
    },
    "time": function () {
      let llllIlll = new Date(),
        Ii1Ill1l = llllIlll.getHours() < 10 ? "0" + llllIlll.getHours() : llllIlll.getHours(),
        ii11Illi = llllIlll.getMinutes() < 10 ? "0" + llllIlll.getMinutes() : llllIlll.getMinutes();
      $(".kui-time").text(Ii1Ill1l + ":" + ii11Illi);
      setTimeout(function () {
        XMlayEr.header.time();
      }, 1000);
      XMlayEr.void.on("fullscreen", function (lIIIii11) {
        lIIIii11 ? $(".header .qoe-normal").show() : $(".header .qoe-normal").hide();
      });
    },
    "qfe": function () {
      try {
        navigator.getBattery().then(function (l1ii1Ili) {
          let IiiIll1l = l1ii1Ili.level * 100 + "%",
            IliiliIi = $(".percentage");
          IiiIll1l === "10%" ? IliiliIi.css({
            "background-color": "red",
            "width": IiiIll1l
          }) : IliiliIi.css("width", IiiIll1l);
          $(".batteryShape").show();
          l1ii1Ili.addEventListener("levelchange", function () {
            this.qfe();
          });
        });
      } catch (lIIl1ll) {
        console.log("该浏览器不支持电量显示");
      }
    },
    "title": function (Ii1iiil1) {
      $(".player-title").text(Ii1iiil1);
      XMlayEr.header.onShowNameTipsMouseenter();
    },
    "onShowNameTipsMouseenter": function () {
      let ll1lIliI = document.querySelector(".player-title");
      if (ll1lIliI.scrollWidth > ll1lIliI.offsetWidth) {
        function iIlilI() {
          ll1lIliI.innerHTML = ll1lIliI.innerHTML.slice(1) + ll1lIliI.innerHTML[0];
        }
        setInterval(iIlilI, 200);
      }
    }
  },
  "subtitle": {
    "hide": false,
    "Init": function (iil1llii) {
      const llI1li1i = document.getElementsByTagName("video"),
        l1Iil1II = document.createElement("track");
      $(".content-bnt").click(function () {
        $(".ec-subtitle").toggle();
        XMlayEr.subtitle.hide === false ? ($(this).css("opacity", "0.6"), XMlayEr.subtitle.hide = true) : ($(this).css("opacity", ""), XMlayEr.subtitle.hide = false);
      });
      l1Iil1II.default = !0;
      l1Iil1II.kind = "metadata";
      llI1li1i[0].appendChild(l1Iil1II);
      fetch(iil1llii.url).then(Iili111l => Iili111l.arrayBuffer()).then(I111Ii1I => {
        const I1il1iil = new TextDecoder(iil1llii.encoding).decode(I111Ii1I);
        switch (iil1llii.type || this.getExt(iil1llii.url)) {
          case "srt":
            return this.text.vttToBlob(this.text.srtToVtt(I1il1iil));
          case "ass":
            return this.text.vttToBlob(this.text.assToVtt(I1il1iil));
          case "vtt":
            return this.text.vttToBlob(I1il1iil);
          default:
            return iil1llii.url;
        }
      }).then(lIliii1l => {
        l1Iil1II.default = true;
        l1Iil1II.kind = "metadata";
        l1Iil1II.src = lIliii1l.toString();
        l1Iil1II.track.mode = "hidden";
        l1Iil1II.addEventListener("cuechange", this.text.update);
      }).catch(iillI => {
        XMlayEr.tips.msg("字幕加载失败!!!");
        throw iillI;
      });
    },
    "text": {
      "fixSrt": function (iiIIIl1i) {
        return iiIIIl1i.replace(/(\d\d:\d\d:\d\d)[,.](\d+)/g, (lli1llIi, Iiii1iII, IIiIIi) => {
          let ll1ii111 = IIiIIi.slice(0, 3);
          return IIiIIi.length === 1 && (ll1ii111 = IIiIIi + "00"), IIiIIi.length === 2 && (ll1ii111 = IIiIIi + "0"), Iiii1iII + "," + ll1ii111;
        });
      },
      "srtToVtt": function (ilIiIIlI) {
        return "WEBVTT \r\n\r\n".concat(this.fixSrt(ilIiIIlI).replace(/\{\\([ibu])\}/g, "</$1>").replace(/\{\\([ibu])1\}/g, "<$1>").replace(/\{([ibu])\}/g, "<$1>").replace(/\{\/([ibu])\}/g, "</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2").replace(/{[\s\S]*?}/g, "").concat("\r\n\r\n"));
      },
      "vttToBlob": function (lIIil1ii) {
        return URL.createObjectURL(new Blob([lIIil1ii], {
          "type": "text/vtt"
        }));
      },
      "assToVtt": function (i1I111) {
        const III1i1i = new RegExp("Dialogue:\\s\\d,(\\d+:\\d\\d:\\d\\d.\\d\\d),(\\d+:\\d\\d:\\d\\d.\\d\\d),([^,]*),([^,]*),(?:[^,]*,){4}([\\s\\S]*)$", "i");
        function ilii1lll(iilIi = "") {
          return iilIi.split(/[:.]/).map((l1lI1I1, lilliI1I, lIlliIl) => {
            if (lilliI1I === lIlliIl.length - 1) {
              if (l1lI1I1.length === 1) {
                return "." + l1lI1I1 + "00";
              }
              if (l1lI1I1.length === 2) {
                return "." + l1lI1I1 + "0";
              }
            } else {
              if (l1lI1I1.length === 1) return (lilliI1I === 0 ? "0" : ":0") + l1lI1I1;
            }
            return lilliI1I === 0 ? l1lI1I1 : lilliI1I === lIlliIl.length - 1 ? "." + l1lI1I1 : ":" + l1lI1I1;
          }).join("");
        }
        return "WEBVTT\n\n" + i1I111.split(/\r?\n/).map(l1iii1l1 => {
          const iilIi1l = l1iii1l1.match(III1i1i);
          if (!iilIi1l) return null;
          return {
            "start": ilii1lll(iilIi1l[1].trim()),
            "end": ilii1lll(iilIi1l[2].trim()),
            "text": iilIi1l[5].replace(/{[\s\S]*?}/g, "").replace(/(\\N)/g, "\n").trim().split(/\r?\n/).map(iii1Iiii => iii1Iiii.trim()).join("\n")
          };
        }).filter(il11II1 => il11II1).map((lIIIIl, ilIiilIi) => {
          if (lIIIIl) {
            return ilIiilIi + 1 + "\n" + lIIIIl.start + " --> " + lIIIIl.end + "\n" + lIIIIl.text;
          }
          return "";
        }).filter(I111lIi => I111lIi.trim()).join("\n\n");
      },
      "update": function () {
        const il111lII = document.getElementsByTagName("video"),
          llII1l1i = il111lII[0].textTracks[0].activeCues[0],
          II1Iil = document.querySelector(".ec-subtitle");
        II1Iil.innerHTML = "";
        llII1l1i && (II1Iil.innerHTML = llII1l1i.text.split(/\r?\n/).map(iIlI1IlI => "<p>" + function (i1llili1) {
          return i1llili1.replace(/[&<>'"]/g, Iiili11I => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            "\"": "&quot;"
          })[Iiili11I] || Iiili11I);
        }(iIlI1IlI) + "</p>").join(""));
      }
    },
    "getExt": function (i1l1llll) {
      return i1l1llll.includes("?") ? n(i1l1llll.split("?")[0]) : i1l1llll.includes("#") ? n(i1l1llll.split("#")[0]) : i1l1llll.trim().toLowerCase().split(".").pop();
    }
  },
  "danMu": {
    "dm_api": [],
    "dan": [],
    "time": "",
    "danTunnel": {
      "right": {},
      "top": {},
      "bottom": {}
    },
    "container": null,
    "paused": true,
    "off": false,
    "showing": true,
    "speedRate": 0.4,
    "unlimited": false,
    "height": 15,
    "opacity": 1,
    "danIndex": 0,
    "Init": function () {
      let lliIllii = $(".dm-box");
      this.off = true;
      this.api();
      this.container = document.querySelector(".ec-danMa");
      let lIililli = getComputedStyle(document.getElementsByClassName("ec-danMa")[0], null)["font-size"],
        IIiIii1 = lIililli.slice(0, -2);
      this.height = Number(IIiIii1) + 6;
      for (let I1I1lI1i = [], lII111I = 0; lII111I < this.dm_api.length; ++lII111I) this.apiBackend.read(this.dm_api[lII111I][2], function (l1i1Ii1l) {
        return function (Iiilll1I, llI1iiII) {
          Iiilll1I ? (Iiilll1I.response, I1I1lI1i[l1i1Ii1l] = []) : (I1I1lI1i[l1i1Ii1l] = llI1iiII ? llI1iiII.map(function (IIlil1I1) {
            return {
              "time": IIlil1I1[0],
              "type": IIlil1I1[1],
              "color": IIlil1I1[2],
              "author": IIlil1I1[3],
              "text": IIlil1I1[4].indexOf("777ys") != -1 ? "68yy.com 全网影视在线看🎬" : IIlil1I1[4],
              "size": IIlil1I1[7]
            };
          }) : [], I1I1lI1i[l1i1Ii1l] = I1I1lI1i[l1i1Ii1l], XMlayEr.danMu.readAllEndpoints(I1I1lI1i));
        };
      }(lII111I));
      this.content();
      XMlayEr.void.on("play", function () {
        XMlayEr.danMu.paused = false;
        $(".ec-danMa").addClass("dm-show");
      });
      XMlayEr.void.on("pause", function () {
        XMlayEr.danMu.paused = true;
        $(".ec-danMa").removeClass("dm-show");
      });
      switch ("1") {
        case "0":
          lliIllii.hide();
          break;
        case "2":
          lliIllii.hide(), XMlayEr.void.on("fullscreen", function (i1IiilIi) {
            i1IiilIi ? lliIllii.show() : lliIllii.hide();
          });
          break;
      }
      XMlayEr.void.on("seek", function () {
        XMlayEr.danMu.seek();
      });
    },
    "api": function () {
      let IlI1llII = XMlayEr.dmid,
        ii1IiI1i = XMlayEr.ggdmapi ? "#1$" + XMlayEr.ggdmapi : "",
        Ili1li1 = "0$https://dmku.m3u8.pw/?ac=dm" + ii1IiI1i,
        i1IIi1i1 = Ili1li1.split("#"),
        ilIiIlI = [];
      for (let iIIi1lli = 0; iIIi1lli < i1IIi1i1.length; iIIi1lli++) {
        let iIi11iiI = i1IIi1i1[iIIi1lli].split("$"),
          iI1I1i1I = "",
          iIii1iii = "";
        switch (iIi11iiI["0"]) {
          case "1":
            iIii1iii = IlI1llII;
            break;
          default:
            iIii1iii = IlI1llII, iI1I1i1I = "&id=" + iIii1iii;
            break;
        }
        ilIiIlI[iIIi1lli] = [iIi11iiI["0"], iIi11iiI["1"], iIi11iiI["1"] + iI1I1i1I, iIii1iii];
      }
      this.dm_api = ilIiIlI;
    },
    "apiBackend": {
      "read": function (l1l1l1il, I1i1li1) {
        this.api(l1l1l1il, null, function (Ill1ill1, IiI11IiI) {
          I1i1li1(null, IiI11IiI.danmuku);
        }, function (i1111iiI, IllI11) {
          I1i1li1({
            "status": i1111iiI.status,
            "response": IllI11
          });
        }, function (Il1111lI) {
          I1i1li1({
            "status": Il1111lI.status,
            "response": null
          });
        });
      },
      "send": function (Il1iI1iI, ii11lI1) {
        this.api(XMlayEr.danMu.dm_api[0][1], Il1iI1iI, function () {
          console.log("发送弹幕成功");
          XMlayEr.tips.msg("您的弹幕已送达");
          ii11lI1(Il1iI1iI);
        }, function (i11iiII1, IliliIli) {
          XMlayEr.tips.msg(IliliIli.msg);
        }, function (IIilIi11) {
          console.log("Request was unsuccessful: " + IIilIi11.status);
        });
      },
      "api": function (iiIIIiiI, Ii1iIIli, iIl1IllI, ii11iiI1, i1l1iIlI) {
        let ilIIIIii = new XMLHttpRequest();
        ilIIIIii.onreadystatechange = function () {
          if (4 === ilIIIIii.readyState) {
            if (ilIIIIii.status >= 200 && ilIIIIii.status < 300 || 304 === ilIIIIii.status) {
              let iII111i = JSON.parse(ilIIIIii.responseText);
              return 23 !== iII111i.code ? ii11iiI1(ilIIIIii, iII111i) : iIl1IllI(ilIIIIii, iII111i);
            }
            i1l1iIlI(ilIIIIii);
          }
        };
        ilIIIIii.open(null !== Ii1iIIli ? "POST" : "GET", iiIIIiiI, !0);
        ilIIIIii.send(null !== Ii1iIIli ? JSON.stringify(Ii1iIIli) : null);
      }
    },
    "readAllEndpoints": function (iIiIi1il) {
      let Ili1illi = this;
      Ili1illi.dan = [].concat.apply([], iIiIi1il).sort(function (iI1iilIl, iiiilIi) {
        return iI1iilIl.time - iiiilIi.time;
      });
      window.requestAnimationFrame(function () {
        Ili1illi.frame();
      });
    },
    "frame": function () {
      if (this.dan.length && !XMlayEr.danMu.paused && this.showing) {
        let i11I11I1 = this.dan[this.danIndex];
        const iiliIil1 = [];
        while (i11I11I1 && XMlayEr.void.video.currentTime > parseFloat(i11I11I1.time)) {
          iiliIil1.push(i11I11I1);
          i11I11I1 = this.dan[++this.danIndex];
        }
        this.draw(iiliIil1);
      }
      window.requestAnimationFrame(() => {
        this.frame();
      });
    },
    "number2Color": function (iiiliill) {
      return "#" + ("00000" + iiiliill.toString()).slice(-6);
    },
    "number2Type": function (ilI1ilIl) {
      switch (ilI1ilIl) {
        case 0:
        case "right":
          return "right";
        case 1:
        case "top":
          return "top";
        case 2:
        case "bottom":
          return "bottom";
        default:
          return "right";
      }
    },
    "_measure": function (l1lIlIi) {
      if (!this.context) {
        const llliI11I = getComputedStyle(this.container.getElementsByClassName("ec-danMa-item")[0], null);
        this.context = document.createElement("canvas").getContext("2d");
        this.context.font = llliI11I.getPropertyValue("font");
      }
      return this.context.measureText(l1lIlIi).width;
    },
    "_danAnimation": function (lII11il) {
      const l11IlIiI = this.speedRate || 1,
        lIll1Ii1 = !!XMlayEr.void.fullscreen,
        Illl1I1i = {
          "top": (lIll1Ii1 ? 6 : 4) / l11IlIiI + "s",
          "right": (lIll1Ii1 ? 8 : 5) / l11IlIiI + "s",
          "bottom": (lIll1Ii1 ? 6 : 4) / l11IlIiI + "s"
        };
      return Illl1I1i[lII11il];
    },
    "seek": function () {
      if (!this.off) {
        return;
      }
      this.clear();
      for (let ll1l1l1i = 0; ll1l1l1i < this.dan.length; ll1l1l1i++) {
        if (this.dan[ll1l1l1i].time >= XMlayEr.void.video.currentTime) {
          this.danIndex = ll1l1l1i;
          break;
        }
        this.danIndex = this.dan.length;
      }
    },
    "clear": function () {
      this.danTunnel = {
        "right": {},
        "top": {},
        "bottom": {}
      };
      this.danIndex = 0;
      this.container.innerHTML = "<div class=\"ec-danMa-item ec-danMa-item--demo\"></div>";
    },
    "draw": function (i11Ii1ii) {
      if (this.showing) {
        const iI1IiI1 = this.height,
          IIl1I1l1 = this.container.offsetWidth,
          IliIlIIi = this.container.offsetHeight,
          IilI1i11 = parseInt(IliIlIIi) / parseInt(iI1IiI1),
          IIii1I1I = llili1ii => {
            const i1l1IilI = llili1ii.offsetWidth || parseInt(llili1ii.style.width),
              IlI11Ii = llili1ii.getBoundingClientRect().right || this.container.getBoundingClientRect().right + i1l1IilI;
            return this.container.getBoundingClientRect().right - IlI11Ii;
          },
          Ililil = Iiiillll => (IIl1I1l1 + Iiiillll) / 5,
          IiIl1lI1 = (IIi11i, I1II11ll, illi11l1) => {
            const IIiI11ll = IIl1I1l1 / Ililil(illi11l1);
            for (let IiIIIi1l = 0; this.unlimited || IiIIIi1l < IilI1i11; IiIIIi1l++) {
              const IiIIIi1i = this.danTunnel[I1II11ll][IiIIIi1l + ""];
              if (IiIIIi1i && IiIIIi1i.length) {
                if (I1II11ll !== "right") {
                  continue;
                }
                for (let lllIi1li = 0; lllIi1li < IiIIIi1i.length; lllIi1li++) {
                  const iilIl11I = IIii1I1I(IiIIIi1i[lllIi1li]) - 10;
                  if (iilIl11I <= IIl1I1l1 - IIiI11ll * Ililil(parseInt(IiIIIi1i[lllIi1li].style.width)) || iilIl11I <= 0) {
                    break;
                  }
                  if (lllIi1li === IiIIIi1i.length - 1) return this.danTunnel[I1II11ll][IiIIIi1l + ""].push(IIi11i), IIi11i.addEventListener("animationend", () => {
                    this.danTunnel[I1II11ll][IiIIIi1l + ""].splice(0, 1);
                  }), IiIIIi1l % IilI1i11;
                }
              } else return this.danTunnel[I1II11ll][IiIIIi1l + ""] = [IIi11i], IIi11i.addEventListener("animationend", () => {
                this.danTunnel[I1II11ll][IiIIIi1l + ""].splice(0, 1);
              }), IiIIIi1l % IilI1i11;
            }
            return -1;
          };
        Object.prototype.toString.call(i11Ii1ii) !== "[object Array]" && (i11Ii1ii = [i11Ii1ii]);
        const I1l1illI = document.createDocumentFragment();
        for (let iI111ll1 = 0; iI111ll1 < i11Ii1ii.length; iI111ll1++) {
          i11Ii1ii[iI111ll1].type = this.number2Type(i11Ii1ii[iI111ll1].type);
          !i11Ii1ii[iI111ll1].color && (i11Ii1ii[iI111ll1].color = 16777215);
          const Iil11ll1 = document.createElement("div");
          Iil11ll1.classList.add("ec-danMa-item");
          Iil11ll1.classList.add("ec-danMa-" + i11Ii1ii[iI111ll1].type);
          if (i11Ii1ii[iI111ll1].border) {
            Iil11ll1.innerHTML = "<span style=\"border:" + i11Ii1ii[iI111ll1].border + "\">" + i11Ii1ii[iI111ll1].text + "</span>";
          } else {
            Iil11ll1.innerHTML = i11Ii1ii[iI111ll1].text;
          }
          Iil11ll1.style.opacity = this.opacity;
          Iil11ll1.style.color = this.number2Color(i11Ii1ii[iI111ll1].color);
          Iil11ll1.addEventListener("animationend", () => {
            this.container.removeChild(Iil11ll1);
          });
          const I1lil1ii = this._measure(i11Ii1ii[iI111ll1].text);
          let l1I1Ii1;
          switch (i11Ii1ii[iI111ll1].type) {
            case "right":
              l1I1Ii1 = IiIl1lI1(Iil11ll1, i11Ii1ii[iI111ll1].type, I1lil1ii);
              if (l1I1Ii1 >= 0) {
                Iil11ll1.style.width = I1lil1ii + 1 + "px";
                Iil11ll1.style.top = iI1IiI1 * l1I1Ii1 + "px";
              }
              break;
            case "top":
              l1I1Ii1 = IiIl1lI1(Iil11ll1, i11Ii1ii[iI111ll1].type);
              if (l1I1Ii1 >= 0) {
                Iil11ll1.style.top = iI1IiI1 * l1I1Ii1 + "px";
              }
              break;
            case "bottom":
              l1I1Ii1 = IiIl1lI1(Iil11ll1, i11Ii1ii[iI111ll1].type);
              l1I1Ii1 >= 0 && (Iil11ll1.style.bottom = iI1IiI1 * l1I1Ii1 + "px");
              break;
            default:
              XMlayEr.tips.msg("Can't handled danMa type: " + i11Ii1ii[iI111ll1].type);
          }
          l1I1Ii1 >= 0 && (Iil11ll1.classList.add("ec-danMa-move"), Iil11ll1.style.animationDuration = this._danAnimation(i11Ii1ii[iI111ll1].type), I1l1illI.appendChild(Iil11ll1));
        }
        return this.container.appendChild(I1l1illI), I1l1illI;
      }
    },
    "htmlEncode": function (l1ii1ll) {
      return l1ii1ll.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2f;");
    },
    "hide": function () {
      this.showing = false;
      this.clear();
    },
    "show": function () {
      this.seek();
      this.showing = true;
    },
    "send": function (iili1i1i) {
      var iii1li1i = document.referrer;
      if (iii1li1i == "") {
        iii1li1i = document.URL;
      }
      const IlIlIilI = {
        "text": iili1i1i.text,
        "color": iili1i1i.color,
        "type": iili1i1i.type,
        "time": XMlayEr.void.video.currentTime,
        "player": XMlayEr.danMu.dm_api[0][3],
        "size": "32px",
        "referer": iii1li1i
      };
      this.apiBackend.send(IlIlIilI, function (I11iIIi1) {
        XMlayEr.danMu.dan.splice(this.danIndex, 0, I11iIIi1);
        XMlayEr.danMu.danIndex++;
        const illliI = {
          "text": XMlayEr.danMu.htmlEncode(I11iIIi1.text),
          "color": I11iIIi1.color,
          "type": I11iIIi1.type,
          "border": "2px solid #24a5ff"
        };
        XMlayEr.danMu.draw(illliI);
        let iIliI1ii = $(".dm-input");
        iIliI1ii.val("");
        let lI1lilII = setInterval(function () {
          let l1llliI1 = Number(iIliI1ii.data("time")) - 1;
          iIliI1ii.data("time", l1llliI1).attr("placeholder", l1llliI1 + "s后解除冻结").attr("disabled", true);
          if (l1llliI1 <= 0) {
            iIliI1ii.data("time", 10).attr("placeholder", "来发个弹幕吧~").attr("disabled", false);
            clearInterval(lI1lilII);
          }
        }, 1000);
      });
    },
    "getFontSize": function (iiIIil1I) {
      const iiI1ll1i = function (llIii1i, Illll1Ii, iIlI11iI) {
          return Math.max(Math.min(llIii1i, Math.max(Illll1Ii, iIlI11iI)), Math.min(Illll1Ii, iIlI11iI));
        },
        i1li1Ill = document.getElementById("player").clientWidth;
      if (typeof iiIIil1I === "number") return iiI1ll1i(iiIIil1I, 12, i1li1Ill);
      if (typeof iiIIil1I === "string" && iiIIil1I.endsWith("%")) {
        const l1III1iI = parseFloat(iiIIil1I) / 100;
        return iiI1ll1i(i1li1Ill * l1III1iI, 12, i1li1Ill);
      }
      return iiIIil1I;
    },
    "set": function (iliIlilI, I1I1iiI1, ilIii111) {
      ilIii111 && XMlayEr.cookie.Set("d_set" + iliIlilI, [iliIlilI, I1I1iiI1, ilIii111], 7);
      switch (iliIlilI) {
        case 1:
          {
            this.speedRate = I1I1iiI1;
            break;
          }
        case 2:
          {
            let I11llIl1 = this.getFontSize(I1I1iiI1);
            $(".ec-danMa").css("font-size", I11llIl1);
            this.height = I11llIl1 + 5;
            break;
          }
        case 3:
          {
            this.opacity = I1I1iiI1;
            break;
          }
        case 4:
          {
            $(".ec-danMa").css("bottom", I1I1iiI1);
            break;
          }
        default:
          break;
      }
    },
    "content": function () {
      $(".dm-bnt").click(function () {
        $(".art-bottom").hide();
        $(".dm-box").removeClass("dm-wap");
        $(".player-list-off").addClass("dm-off").removeClass("off");
        $(".dm-off").click(function () {
          $(".art-bottom").show();
          $(".dm-box").addClass("dm-wap");
          $(".player-list-off").removeClass("dm-off").addClass("off");
        });
      });
      $(".art-bottom,.dm-box-cc").click(function () {
        $(".dm-set-box,.dm-style-box").removeClass("ec-show");
      });
      let lI1I1Il1 = $(".dm-box-cc"),
        Ii1i1il = XMlayEr.cookie.Get("dm-box-cc"),
        il1Ilii1 = XMlayEr.cookie.Get("content_dmP-1"),
        I1IIl11i = XMlayEr.cookie.Get("content_dmP-2"),
        IlliliI = $(".content_dmP-1 .item"),
        iiI1iilI = $(".content_dmP-2 .item"),
        lIiIIIiI = function (I11il1I, lII1iIl1, I11IlIII) {
          (I11il1I !== undefined || I11il1I !== "") && lII1iIl1.eq(I11il1I).addClass("on-1").siblings().removeClass("on-1");
          lII1iIl1.click(function () {
            $(this).addClass("on-1").siblings().removeClass("on-1");
            XMlayEr.cookie.Set(I11IlIII, $("." + I11IlIII + " .item").index(this), 7);
          });
        };
      lIiIIIiI(il1Ilii1, IlliliI, "content_dmP-1");
      lIiIIIiI(I1IIl11i, iiI1iilI, "content_dmP-2");
      $(".dm-box-t-img").click(function () {
        $(".dm-set-box").removeClass("ec-show");
        $(".dm-style-box").toggleClass("ec-show");
      });
      let I1iil1l1 = function () {
        let I1i1IIil = $(".content_dmP-2 .on-1").data("color"),
          iiliIIi1 = $(".content_dmP-1 .on-1").data("type"),
          IillIll1 = $(".dm-input").val();
        if (XMlayEr.empty(IillIll1)) {
          XMlayEr.tips.msg("要输入弹幕内容啊喂");
        } else {
          if (IillIll1.length > 22) {
            XMlayEr.tips.msg("弹幕内容长度最大30位!!!");
          } else {
            XMlayEr.danMu.send({
              "text": IillIll1,
              "color": I1i1IIil,
              "type": iiliIIi1
            });
          }
        }
      };
      $(".dm-input").keydown(function (ilII1l1l) {
        ilII1l1l.keyCode === 13 && I1iil1l1();
      });
      $(".dm-send").click(function () {
        I1iil1l1();
      });
      Ii1i1il === "1" && (XMlayEr.danMu.hide(), lI1I1Il1.addClass("dm-box-cc2").data("id", "1"));
      lI1I1Il1.click(function () {
        $(this).data("id") === "1" ? (XMlayEr.danMu.show(), XMlayEr.cookie.Del("dm-box-cc"), $(this).removeClass("dm-box-cc2").data("id", "0")) : (XMlayEr.danMu.hide(), XMlayEr.cookie.Set("dm-box-cc", "1", 7), $(this).addClass("dm-box-cc2").data("id", "1"));
      });
      let i1lilI1i = [["弹幕速度", "极慢", "较慢", "适中", "极快", "较快"], ["字体大小", "默认", "极小", "较小", "适中", "较大", "极大"], ["不透明度", "100%", "75%", "50%", "25%", "0%"], ["弹幕范围", "1/4", "半屏", "3/4"]],
        iIlIilII = [["", "0.5", "0.8", "1", "1.5", "2"], ["", XMlayEr.danMu.height, "1%", "2%", "3%", "4%", "5%"], ["", "1", "0.75", "0.5", "0.25", "0"], ["", "60%", "45%", "10%"]];
      $(".set-toggle").append("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z\"></path></svg>");
      let lIl11il = "",
        llilIIli = null;
      for (let l1li1ii1 = 0; l1li1ii1 < i1lilI1i.length; l1li1ii1++) {
        let l1il1lI1 = "";
        for (let II1lII1 = 0; II1lII1 < i1lilI1i[l1li1ii1].length; II1lII1++) {
          if (II1lII1 === 0) l1il1lI1 = l1il1lI1 + "<div class=\"flex between br\"><span class=\"dm-set-label flex\"><i><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z\"></path></svg></i>" + i1lilI1i[l1li1ii1][II1lII1] + "</span></div>";else {
            l1il1lI1 = l1il1lI1 + "<div class=\"flex between dm-n2\" data-time=\"" + iIlIilII[l1li1ii1][II1lII1] + "\"><span class=\"dm-set-label flex\"><i></i>" + i1lilI1i[l1li1ii1][II1lII1] + "</span></div>";
          }
        }
        lIl11il = lIl11il + "<div class=\"dm-set-list\">" + l1il1lI1 + "</div>";
        let lIIiIi = XMlayEr.cookie.Get("d_set" + (l1li1ii1 + 1));
        if (lIIiIi) {
          let i11I11ii = lIIiIi.split(",");
          XMlayEr.danMu.set(Number(i11I11ii[0]), i11I11ii[1]);
          $(".dm-set-box .dm-set-list").eq(0).children().eq(l1li1ii1).find("span").text(i11I11ii[2]);
        }
      }
      $(".dm-set-box").append(lIl11il);
      $(".dm-box-set").click(function () {
        $(".dm-style-box").removeClass("ec-show");
        $(".dm-set-box").toggleClass("ec-show");
      });
      $("#dm_n1 .between").click(function () {
        let li1iilIi = $(this).data("id");
        $(".dm-set-box .dm-set-list").eq(li1iilIi).addClass("ds-set-show").siblings().removeClass("ds-set-show");
        llilIIli = li1iilIi;
      });
      $(".dm-set-box .br").click(function () {
        $(".dm-set-box .dm-set-list").eq(0).addClass("ds-set-show").siblings().removeClass("ds-set-show");
      });
      $(".dm-n2").click(function () {
        let l111l1lI = $(this).text(),
          i1i1Iiii = $(".dm-set-box .dm-set-list");
        i1i1Iiii.eq(0).children().eq(llilIIli - 1).find("span").text(l111l1lI);
        i1i1Iiii.eq(0).addClass("ds-set-show").siblings().removeClass("ds-set-show");
        let ili1i1ll = $(this).data("time");
        if (l111l1lI !== "默认") {
          XMlayEr.danMu.set(llilIIli, ili1i1ll, l111l1lI);
        } else XMlayEr.cookie.Del("d_set2");
      });
    }
  },
  "list": {
    "html": function () {
      if (XMlayEr.html) {
        let iIii1I = "<div class=\"art-control yxq-vod-list\" data-index=\"50\"><i class=\"art-icon hint--rounded hint--top\" aria-label=\"选集\"><svg t=\"1697209271632\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"12264\" width=\"18\" height=\"18\"><path d=\"M62 152h105.356v105.356h-105.356v-105.356zM263.937 152h698.063v105.356h-698.063v-105.356zM62 459.237h105.356v105.356h-105.356v-105.356zM263.937 459.237h698.063v105.356h-698.063v-105.356zM62 766.644h105.356v105.356h-105.356v-105.356zM263.937 766.644h698.063v105.356h-698.063v-105.356z\" p-id=\"12265\" fill=\"#ffffff\"></path></svg></i></div>";
        $(".art-control-playAndPause").after(iIii1I);
        $(".yxq-vod-list").click(function () {
          XMlayEr.VodList.initial();
        });
      }
    },
    "next": function () {
      if (XMlayEr.next0 || XMlayEr.next) {
        let ll111iI1 = "<div class=\"art-control ec-next\" data-index=\"40\"><i class=\"art-icon hint--rounded hint--top\" aria-label=\"下一集\"><svg t=\"1697202769049\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"4237\" width=\"41\" height=\"41\"><path d=\"M853.333333 204.8h-68.266666c-20.48 0-34.133333 13.653333-34.133334 34.133333v546.133334c0 17.066667 17.066667 34.133333 34.133334 34.133333h68.266666c20.48 0 34.133333-13.653333 34.133334-34.133333V238.933333c0-20.48-17.066667-34.133333-34.133334-34.133333zM614.4 467.626667L256 235.52C208.213333 204.8 170.666667 228.693333 170.666667 283.306667v484.693333c0 58.026667 37.546667 78.506667 85.333333 47.786667l358.4-238.933334c47.786667-30.72 47.786667-78.506667 0-109.226666z\" fill=\"#ffffff\" p-id=\"4238\"></path></svg></i></div>";
        $(".art-control-playAndPause").after(ll111iI1);
        $(".ec-next").click(function () {
          if (XMlayEr.next0) top.location.href = XMlayEr.next0;else {
            self.location.href = XMlayEr.next;
          }
        });
      }
    },
    "autoNext": function () {
      XMlayEr.void.on("video:ended", function () {
        if (!!XMlayEr.next0 || !!XMlayEr.next) {
          box.children().append("<div class=\"pop-msg vague2 again\"><div class=\"again-icon\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1007.4674 42.036669c-12.751909-12.751909-38.255728-12.751909-51.007638 0l-95.63932 95.63932c-57.383592-57.383592-133.895048-95.63932-210.406505-121.143139C376.247886-53.602651 95.70588 105.796216 19.194424 373.586313c-76.511456 274.166051 82.887411 554.708057 350.677507 631.219513 274.166051 76.511456 554.708057-82.887411 631.219514-350.677507 12.751909-38.255728-12.751909-76.511456-51.007638-89.263366s-76.511456 12.751909-89.263365 51.007637c-25.503819 89.263366-89.263366 165.774822-165.774822 216.78246-172.150776 102.015275-395.30919 38.255728-497.324465-133.895049-82.887411-140.271003-63.759547-312.421779 44.631683-433.564918 133.895048-146.646958 369.805371-159.398867 516.452329-19.127864l-114.767184 114.767184c-6.375955 6.375955-6.375955 12.751909-6.375955 19.127864 0 19.127864 19.127864 38.255728 38.255728 38.255728h312.42178c12.751909 0 31.879773-12.751909 31.879773-31.879773V67.540488c0-6.375955-6.375955-12.751909-12.751909-25.503819z\"></path></svg></div><div class=\"pop-content\"><span id=\"count2\">5</span>s后自动播放下一集</div></div>");
          $(".pause-ad").remove();
          let I1ili1II = setTimeout(function () {
            if (XMlayEr.next0) {
              top.location.href = XMlayEr.next0;
            } else self.location.href = XMlayEr.next;
          }, 5 * 1000);
          $(".again").click(function () {
            clearTimeout(I1ili1II);
            $(".again").remove();
            XMlayEr.void.play();
          });
          XMlayEr.void.on("play", function () {
            clearTimeout(I1ili1II);
            $(".again").remove();
          });
        }
      });
    }
  },
  "broadside": function () {
    let ilII1lIi = $(".broadside");
    ilII1lIi.append("<div class=\"ec-lock\" data-id=\"1\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M800 448H704V320c0-106.4-85.6-192-192-192S320 213.6 320 320h64c0-70.4 57.6-128 128-128s128 57.6 128 128v128H224c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32V480c0-17.6-14.4-32-32-32zM512 736c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z\"></path></svg></div>");
    let I111IIll = $(".ec-lock");
    I111IIll.click(function () {
      Number(I111IIll.data("id")) === 1 ? (I111IIll.html("<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M800 448H704V320c0-106.4-85.6-192-192-192S320 213.6 320 320v128H224c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32V480c0-17.6-14.4-32-32-32zM512 736c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m128-288H384V320c0-70.4 57.6-128 128-128s128 57.6 128 128v128z\"></path></svg>").data("id", "2"), box.addClass("lock-hide")) : (I111IIll.html("<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M800 448H704V320c0-106.4-85.6-192-192-192S320 213.6 320 320h64c0-70.4 57.6-128 128-128s128 57.6 128 128v128H224c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h576c17.6 0 32-14.4 32-32V480c0-17.6-14.4-32-32-32zM512 736c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z\"></path></svg>").data("id", "1"), box.removeClass("lock-hide"));
    });
    ilII1lIi.append("<div class=\"ec-change\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-0.4-12.6 6.1l-0.2 64c-118.6 0.5-235.8 53.4-314.6 154.2-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-0.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8zM880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32z m-44 402H396V494h440v326z\"></path></svg></div>");
    let l11Ili1l = 0,
      lIIl1Il = $("video");
    $(".ec-change").click(function () {
      switch (l11Ili1l) {
        case 0:
          lIIl1Il.addClass("along1"), ++l11Ili1l;
          break;
        case 1:
          lIIl1Il.removeClass("along1"), ++l11Ili1l, lIIl1Il.addClass("along2");
          break;
        case 2:
          lIIl1Il.removeClass("along2"), ++l11Ili1l, lIIl1Il.addClass("along3");
          break;
        case 3:
          lIIl1Il.removeClass("along3"), l11Ili1l = 0;
          break;
      }
    });
    ilII1lIi.append("<div class=\"ec-pip\" data-id=\"1\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M849.5 174.5a37.50000029 37.50000029 0 0 1 37.50000029 37.50000029v262.49999942h-75.00000058V249.49999971H212.00000029v525.00000058h225v74.99999971H174.5a37.50000029 37.50000029 0 0 1-37.50000029-37.50000029V212.00000029a37.50000029 37.50000029 0 0 1 37.50000029-37.50000029h675z m0 375.00000029a37.50000029 37.50000029 0 0 1 37.50000029 37.49999942v225a37.50000029 37.50000029 0 0 1-37.50000029 37.50000029h-299.99999971a37.50000029 37.50000029 0 0 1-37.50000029-37.50000029v-225a37.50000029 37.50000029 0 0 1 37.50000029-37.49999942h299.99999971z\"></path></svg></div>");
    let I11iI1I1 = $("video")[0];
    $(".ec-pip").click(async () => {
      try {
        if (document.pictureInPictureEnabled && !I11iI1I1.disablePictureInPicture) {
          if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
          } else await I11iI1I1.requestPictureInPicture();
        } else {
          if (I11iI1I1.webkitSupportsPresentationMode && typeof I11iI1I1.webkitSetPresentationMode === "function") I11iI1I1.webkitSetPresentationMode(I11iI1I1.webkitPresentationMode === "picture-in-picture" ? "inline" : "picture-in-picture");else {
            $(".ec-pip").hide();
          }
        }
      } catch (iIIiilII) {
        $(".ec-pip").hide();
        throw iIIiilII;
      }
    });
  },
  "secondToTime": function (i1i11lIi) {
    const llIIi1il = I1I1Ii11 => I1I1Ii11 < 10 ? "0" + I1I1Ii11 : String(I1I1Ii11),
      I1i1lliI = Math.floor(i1i11lIi / 3600),
      lIiIllII = Math.floor((i1i11lIi - I1i1lliI * 3600) / 60),
      i1Il1I1l = Math.floor(i1i11lIi - I1i1lliI * 3600 - lIiIllII * 60);
    return (I1i1lliI > 0 ? [I1i1lliI, lIiIllII, i1Il1I1l] : [lIiIllII, i1Il1I1l]).map(llIIi1il).join(":");
  },
  "VodList": {
    "initial": () => {
      if ($(".yxq-listbox").length < 1) {
        let III1llI = $(".art-video-player");
        III1llI.prepend("<div class=\"vodlist-of danmu-hide\" style=\"display: none;\"></div><div class=\"yxq-listbox\"><div class=\"anthology-wrap\"></div></div></div>");
      }
      $(document).on("click", ".vodlist-of", function () {
        XMlayEr.VodList.Off();
      });
      if ($(".normal-title-wrap").length < 1) {
        let IliI1iIi = $(".anthology-wrap");
        if (XMlayEr.html != "") IliI1iIi.html(XMlayEr.html);else {
          IliI1iIi.html("<div class=\"yxq-show\">没获取到选集内容</div>");
        }
      }
    },
    "Off": () => {
      $(".vodlist-of,.r-button").hide();
      $(".yxq-listbox").removeClass("yxq-stting");
    },
    "Tab": () => {
      $(".yxq-list").toggle();
      XMlayEr.VodList.TabList();
    },
    "TabList": () => {
      $(".yxq-list a").click(function () {
        $(this).addClass("yxq-this").siblings().removeClass("yxq-this");
        let Il1I1lII = $(".yxq-list a").index(this),
          ilIii1l = $(".scroll-area .yxq-selset-list").eq(Il1I1lII);
        ilIii1l.addClass("yxq-show").siblings().removeClass("yxq-show");
        $(".yxq-list").hide();
      });
    },
    "Next": IIIi1iII => {
      console.log(IIIi1iII);
      self.location.href = IIIi1iII;
    }
  },
  "LoadAnimation": function () {
    $("#loading").hide();
    XMlayEr.void.play();
    let i1Ill1l = Number(XMlayEr.cookie.Get(url, 2)),
      Ili1ii1 = XMlayEr.secondToTime(i1Ill1l),
      i11i = 5;
    if (i11i === 5) {
      if (Ili1ii1 !== "00:00" && Ili1ii1 !== "NaN:NaN") {
        $(".ec-remember").html("<i class=\"art-icon art-icon-close s-on\"><svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m571.733 512 268.8-268.8c17.067-17.067 17.067-42.667 0-59.733-17.066-17.067-42.666-17.067-59.733 0L512 452.267l-268.8-268.8c-17.067-17.067-42.667-17.067-59.733 0-17.067 17.066-17.067 42.666 0 59.733l268.8 268.8-268.8 268.8c-17.067 17.067-17.067 42.667 0 59.733 8.533 8.534 19.2 12.8 29.866 12.8s21.334-4.266 29.867-12.8l268.8-268.8 268.8 268.8c8.533 8.534 19.2 12.8 29.867 12.8s21.333-4.266 29.866-12.8c17.067-17.066 17.067-42.666 0-59.733L571.733 512z\"></path></svg></i>上次看到<em>" + Ili1ii1 + "</em><span class=\"t-color\">继续上次播放</span>").show();
        $(".ec-remember span").click(function () {
          $(".ec-remember").html("<p></p>").hide();
          XMlayEr.void.currentTime = i1Ill1l;
        });
        $(".ec-remember svg").click(function () {
          $(".ec-remember").html("<p></p>").hide();
        });
        let l111llIi = setTimeout(function () {
          $(".ec-remember").html("<p></p>").hide();
          clearTimeout(l111llIi);
        }, 6000);
      }
    }
  }
};
var OriginTitile = document.title,
  titleTime;
document.addEventListener("visibilitychange", function () {
  document.hidden ? (document.title = "o(╥﹏╥)o你去哪了？快回来！- " + OriginTitile, clearTimeout(titleTime)) : (document.title = "๑乛◡乛๑亲爱的，欢迎回来~• - " + OriginTitile, titleTime = setTimeout(function () {
    document.title = OriginTitile;
  }, 1500));
});