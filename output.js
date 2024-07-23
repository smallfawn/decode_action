//Tue Jul 23 2024 15:57:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function (Ii1l11, IIlii1, iiI1lI) {
  IIlii1(Ii1l11.CryptoJS);
})(this, function (i1111i) {
  return function () {
    var ilIIil = i1111i,
      lIili1 = ilIIil.lib,
      li1l = lIili1.Base,
      iliiII = lIili1.WordArray,
      iiI1li = ilIIil.algo,
      IIliii = iiI1li.SHA1,
      i1111I = iiI1li.HMAC,
      IliIl1 = iiI1li.PBKDF3 = li1l.extend({
        "cfg": li1l.extend({
          "keySize": 128 / 32,
          "hasher": IIliii,
          "iterations": 1
        }),
        "init": function (ll1lll) {
          this.cfg = this.cfg.extend(ll1lll);
        },
        "compute": function (Illlil, I1iili) {
          var ilIIi1 = this.cfg;
          var l111i = i1111I.create(ilIIi1.hasher, Illlil);
          var lIl1ll = iliiII.create();
          var Ii1III = iliiII.create([1]);
          var Ii111 = lIl1ll.words;
          var Il1I1 = Ii1III.words;
          var lIilii = ilIIi1.keySize;
          var lIilil = ilIIi1.iterations;
          while (Ii111.length < lIilii) {
            var i1lll = l111i.update(I1iili).finalize(Ii1III);
            l111i.reset();
            var Il1II = i1lll.words;
            var i11111 = Il1II.length;
            var lIl1li = i1lll;
            for (var Ii11I = 1; Ii11I < lIilil; Ii11I++) {
              lIl1li = l111i.finalize(lIl1li);
              l111i.reset();
              var I1iill = lIl1li.words;
              for (var i1lli = 0; i1lli < i11111; i1lli++) {
                Il1II[i1lli] ^= I1iill[i1lli];
              }
            }
            lIl1ll.concat(i1lll);
            Il1I1[0]++;
          }
          lIl1ll.sigBytes = lIilii * 4;
          return lIl1ll;
        }
      });
    ilIIil.PBKDF3 = function (I1iilI, Ii1II1, lilili) {
      return IliIl1.create(lilili).compute(I1iilI, Ii1II1);
    };
  }(), i1111i.PBKDF3;
});
var I1iiiI = $("#jquery_jplayer", parent.document),
  iiI1il = {
    "cssSelectorAncestor": "#jp_container",
    "supplied": "mp3"
  },
  iiI1ii = CryptoJS,
  I1iii1,
  lilii1,
  iIiii1 = parent.tingid,
  ll1lil = parent.novel_id;
I1iiiI.jPlayer(iiI1il);
var OD = Math.floor(Math.random() * 10),
  GL = MobileDevice.getGlRenderer();
var I1Illi,
  IIlilI,
  Illlli,
  lilii1,
  llli1l,
  lI1ii1,
  llli1i = document.getElementById("audio");
typeof iIiii1 != "undefined" && typeof ll1lil != "undefined" && iiI1l1(iIiii1, ll1lil);
function iiI1l1(IilI1, l1lI1) {
  (function () {})();
  if (typeof sgin === "undefined" || sgin.length != "32") {
    top.location.href = "https://m.baidu.com/error.jsp";
  }
  var l1liil = CryptoJS.MD5(IilI1 + "**" + sgin + "**" + l1lI1).toString(),
    i1ll1 = Number(Math.round(new Date() / 1000)).toString(16),
    lilI1I = /Mali|Adreno|NATT|IMG|Power/i.test(GL);
  if (lilI1I) return;
  $.ajax({
    "url": "/apiP1.php?id=" + IilI1 + "&pid=" + l1lI1,
    "type": "get",
    "async": false,
    "headers": {
      "s1": l1liil.substr(9, 17),
      "s2": i1ll1
    },
    "success": function (liIlIi) {
      liIlIi.state == "success" && i11lI1(liIlIi);
    }
  });
}
function i11lI1(liIlIl) {
  if (liIlIl === undefined) return;
  var i11ii = liIlIl.playlist;
  I1iii1 = {
    "title": liIlIl.title,
    "author": liIlIl.author,
    "announcer": liIlIl.announcer,
    "bookurl": liIlIl.bookurl,
    "image": liIlIl.image,
    "bookid": iIiii1,
    "pid": ll1lil,
    "name": i11ii.name,
    "url": i11ii.url,
    "prev": i11ii.prev,
    "npid": i11ii.npid,
    "next": i11ii.next,
    "file": i11ii.file,
    "src": i11ii.src,
    "status": i11ii.atp,
    "apiurl": iiI1ii.enc.Base64.parse(i11ii.apiurl).toString(iiI1ii.enc.Utf8)
  };
  $(".img-box img", parent.document).attr("src", I1iii1.image);
  $(".top-set", parent.document).text(I1iii1.name);
  $(".txt-box p:eq(1) em:eq(0)", parent.document).text(I1iii1.announcer);
  liIlIl = "";
  OD % 2 != 0 && (llli1i.src = CryptoJS.enc.Base64.parse(I1iii1.src).toString(CryptoJS.enc.Utf8), llli1i.load());
  if (I1iii1.file != "") {
    I1Illi = ilIIiI(I1iii1.file);
    IIlilI = iiI1ii.enc.Base64.parse(I1Illi).toString(iiI1ii.enc.Utf8);
    if (IIlilI.includes("://") || IIlilI.includes("$")) lilii1 = IIlilI;else {
      var lIiIi = IIlilI.substr(-1),
        Il1i = IIlilI.substr(0, lIiIi * 8),
        lIiIl = IIlilI.substr(-2, 1),
        iiil1l;
      Illlli = IIlilI.substr(Il1i.length, 32);
      lilii1 = IIlilI.substr(Il1i.length + Illlli.length, IIlilI.length - Il1i.length - Illlli.length - 2);
      iiil1l = iiI1ii.PBKDF3("Áf÷ÁfN[ÜقراءةÛ3", iiI1ii.enc.Hex.parse(Il1i), {
        "keySize": 4,
        "iterations": lIiIl,
        "hasher": iiI1ii.algo.SHA256
      });
      lilii1 = iiI1ii.enc.Base64.parse(liliiI(iiil1l)).toString(iiI1ii.enc.Utf8);
    }
    llli1l = lilii1.split("$");
    I1iii1.file = "";
  }
  if (llli1l === undefined) return;
  parent.PlayHistoryClass.Add(I1iii1);
  parent.PlayHistoryClass.Add({
    "name": "index_setID",
    "bookid": iIiii1
  });
  if (llli1l[1] !== undefined && I1iii1.apiurl !== "") lI1ii1 = llli1l[0].split("_"), $.ajax({
    "type": "get",
    "url": I1iii1.apiurl,
    "data": "file=" + encodeURIComponent(lI1ii1[0]) + "&r1=" + lI1ii1[1],
    "dataType": "jsonp",
    "success": function (IIiilI) {
      if (IIiilI.status == 0) lilii1 = IIiilI.src, lIl1ii();else {
        if (IIiilI.status == 2) {
          I1iii1.status = 0;
          lilii1 = IIiilI.src;
          lIl1ii();
        } else parent.alert("资源解析失败！");
      }
    }
  });else {
    lIl1ii();
  }
}
function liliiI(liIIil) {
  return iiI1ii.AES.decrypt(ilIIiI(lilii1), liIIil, {
    "iv": iiI1ii.enc.Hex.parse(Illlli),
    "mode": iiI1ii.mode.CBC
  }).toString(iiI1ii.enc.Utf8);
}
function ilIIiI(IIiili) {
  if (IIiili == null) return;else return IIiili.split("").reverse().join("");
}
function lIl1ii() {
  I1iiiI.jPlayer("setMedia", {
    "mp3": lilii1
  });
  I1iiiI.jPlayer("playbackRate", parent.sp);
  I1iiiI.jPlayer("play");
  lilii1 = "";
  llli1l = "";
}
I1iiiI.bind($.jPlayer.event.play, function (illii1) {
  $(".jp-info .img-box", parent.document).removeAttr("style").css({
    "animation": "Circle 10s linear infinite 0s forwards"
  });
  $("#item" + ll1lil, parent.document).removeClass("section-pause");
});
I1iiiI.bind($.jPlayer.event.pause, function (Iii1iI) {
  $(".jp-info .img-box", parent.document).removeAttr("style").css({
    "animation": "Circle 10s linear infinite 0s forwards",
    "animation-play-state": "paused"
  });
  $("#item" + ll1lil, parent.document).addClass("section-pause");
});
I1iiiI.bind($.jPlayer.event.waiting, function (IIiiii) {
  $("#Loading", parent.document).css("height", "auto");
});
I1iiiI.on($.jPlayer.event.canplay, function (illiiI) {
  OD % 2 == 0 && llli1i.getAttribute("src") === "" && (llli1i.src = CryptoJS.enc.Base64.parse(I1iii1.src).toString(CryptoJS.enc.Utf8), llli1i.load());
  $("#Loading", parent.document).css("height", "0px");
});
I1iiiI.bind($.jPlayer.event.error, function (i11Iil) {
  switch (i11Iil.jPlayer.error.type) {
    case $.jPlayer.error.URL:
      $("#Loading", parent.document).css("color", "red"), $("#Loading span", parent.document).text("播放资源损坏了！请见谅");
      break;
  }
});
I1iiiI.on($.jPlayer.event.ended, function (Il1iIi) {
  if (I1iii1.status > 0) {
    I1iii1.next.toString() !== "javascript:void(0);" ? parent.slefurl(I1iii1.next) : parent.slefurl(I1iii1.bookurl);
  } else parent.alert("您的访问过于频繁，请等待数个小时后再次访问"), I1iiiI.jPlayer("stop");
});
function playbackRate(lIi1ll) {
  I1iiiI.jPlayer("playbackRate", lIi1ll);
}
$(".jp-prev", parent.document).click(function () {
  parent.slefurl(I1iii1.prev);
});
$(".jp-next", parent.document).click(function () {
  parent.slefurl(I1iii1.next);
});