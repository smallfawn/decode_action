//Thu Jun 05 2025 08:15:42 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const sortByKey = (_0x3f50ba, _0x1be3b8, _0x47a7a1) => _0x1be3b8.sort(({
    [_0x3f50ba]: _0x46a3d7
  }, {
    [_0x3f50ba]: _0x40dcfb
  }) => _0x47a7a1(_0x46a3d7, _0x40dcfb)),
  hlsDecodeAction = function (_0x1d40f8, _0xe812c2) {
    const _0x2e82d3 = new Hls({
      "debug": false,
      "p2pConfig": {
        "logLevel": false,
        "live": false
      }
    });
    _0x2e82d3.loadSource(_0xe812c2);
    _0x2e82d3.attachMedia(_0x1d40f8);
    _0x2e82d3.on(Hls.Events.MANIFEST_PARSED, function () {
      _0x1d40f8.play();
    });
    _0x2e82d3.p2pEngine.on("stats", function ({
      totalHTTPDownloaded: _0x46660f,
      totalP2PDownloaded: _0x5d164f,
      totalP2PUploaded: _0x311b03
    }) {
      {
        let _0x4692a2 = _0x46660f + _0x5d164f,
          _0x446a5b = "p2p ratio: " + Math.round(_0x5d164f / _0x4692a2 * 100) + "%, saved traffic: " + _0x5d164f + "KB, uploaded: " + _0x311b03 + "KB";
        console.log(_0x446a5b);
      }
    });
  };
document.domain.indexOf("player.ikmz.cc") < 0 && document.domain.indexOf("player.mcue.cc") < 0 && (window.location.href = "//rinima.com");
function player(_0x4806b4) {
  let _0x166b53 = decrypt(_0x4806b4.url);
  if (isEmpty(_0x166b53)) return TheError(), false;
  MPlayer(_0x166b53, _0x4806b4);
}
function MPlayer(_0x2609bc, _0x33be5e) {
  $("#loading").remove();
  let _0x24b27c = _0x33be5e.next,
    _0x55791e = _0x33be5e.vkey,
    _0x4c72fc = _0x33be5e.title,
    _0x1c6bb8 = _0x33be5e.logo;
  $("body").append("<div id=\"mui-player\" class=\"content\"> <template slot=\"nextMedia\">\n<svg t=\"1584686776454\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1682\" width=\"22\" height=\"22\"><path d=\"M783.14692466 563.21664097L240.85307534 879.55472126c-39.1656664 24.10194914-90.38230866-6.02548665-90.38230865-51.21664226v-632.676158c0-45.19115433 51.21664097-75.31859011 90.38230865-51.21664226l542.29384932 316.33808029c39.1656664 21.08920518 39.1656664 81.34407804 0 102.43328194z\" p-id=\"1683\" fill=\"#ffffff\"></path><path d=\"M873.52923331 734.94302767c0 42.17841036-39.1656664 78.33133408-90.38230865 78.33133407s-90.38230866-36.15292371-90.38230735-78.33133407V289.05697233c0-42.17841036 39.1656664-78.33133408 90.38230735-78.33133407s90.38230866 36.15292371 90.38230865 78.33133407v445.88605534z\" p-id=\"1684\" fill=\"#ffffff\"></path></svg>\n</template></div>");
  var _0x1f81a7 = {
    "container": "#mui-player",
    "themeColor": _0x33be5e.theme,
    "poster": _0x33be5e.poster,
    "src": _0x2609bc,
    "title": _0x4c72fc,
    "autoplay": true,
    "initFullFixed": true,
    "preload": "auto",
    "autoOrientaion": true,
    "dragSpotShape": "square",
    "lang": "zh-cn",
    "volume": "1",
    "custom": {
      "footerControls": [{
        "slot": "nextMedia",
        "position": "left",
        "tooltip": "下一集",
        "oftenShow": true,
        "click": function (_0x3d1226) {
          top.location.href = _0x24b27c;
        },
        "style": {}
      }]
    },
    "videoAttribute": [{
      "attrKey": "webkit-playsinline",
      "attrValue": "webkit-playsinline"
    }, {
      "attrKey": "playsinline",
      "attrValue": "playsinline"
    }, {
      "attrKey": "x5-video-player-type",
      "attrValue": "h5-page"
    }],
    "plugins": [new MuiPlayerDesktopPlugin({
      "leaveHiddenControls": true,
      "fullScaling": 1,
      "contextmenu": [{
        "name": "mycopyright",
        "context": _0x33be5e.contextmenu,
        "zIndex": 0,
        "show": true,
        "click": function (_0x5dcc85) {
          top.location.href = _0x33be5e.contextlink;
        }
      }]
    }), new MuiPlayerMobilePlugin({
      "key": "01I01I01H01J01L01K01J01I01K01J01H01D01J01G01E",
      "showMenuButton": true
    })]
  };
  if (_0x2609bc.indexOf(".m3u8") > 0) Hls.isSupported() && Hls.WEBRTC_SUPPORT ? (console.log("P2P ON"), _0x1f81a7.parse = {
    "customKernel": hlsDecodeAction
  }) : _0x1f81a7.parse = {
    "type": "hls",
    "loader": Hls,
    "config": {
      "debug": false
    }
  };else _0x2609bc.indexOf(".flv") > 0 && (_0x1f81a7.parse = {
    "type": "flv",
    "loader": flvjs,
    "config": {
      "cors": true
    }
  });
  var _0x2f7ce1 = new MuiPlayer(_0x1f81a7);
  _0x2f7ce1.on("ready", function () {
    {
      var _0x4a1122 = _0x2f7ce1.video(),
        _0x54d18b = localStorage.getItem(_0x55791e);
      _0x4a1122.addEventListener("loadedmetadata", function () {
        this.currentTime = _0x54d18b;
      });
      _0x4a1122.addEventListener("timeupdate", function () {
        var _0x5e5f21 = Math.floor(_0x4a1122.currentTime);
        localStorage.setItem(_0x55791e, _0x5e5f21);
      });
      _0x4a1122.addEventListener("ended", function () {
        localStorage.removeItem(_0x55791e);
        !!_0x24b27c && (top.location.href = _0x24b27c);
      });
      _0x4a1122.addEventListener("play", function () {
        $("#player_pauses").length > 0 && $("#player_pauses").remove();
      });
      _0x4a1122.addEventListener("pause", function (_0x3707c9) {
        {
          if (_0x33be5e.ad.on == "1" && isEmpty(_0x33be5e.ad.img) == false) {
            let _0x33e8a2 = "<div id=\"player_pauses\"><div class=\"tip\"><a style=\"color:#ffffff;cursor:pointer;\" onclick=\"javascript:turnoff('player_pauses')\" title=\"点击关闭\">关闭 ✖</a></div><a href=\"" + _0x33be5e.ad.url + "\" target=\"_blank\"><img src=\"" + _0x33be5e.ad.img + "\"></a></div>";
            $(".player-wrapper").append(_0x33e8a2);
          }
        }
      });
      if (isEmpty(_0x1c6bb8) == false) {
        $(".player-wrapper").append("<img src=\"" + _0x1c6bb8 + "\" class=\"logo\">");
      }
      isEmpty(_0x24b27c) && $(".footer-control[slot='nextMedia']").remove();
    }
  });
  _0x2f7ce1.on("ready", function () {
    _0x2f7ce1.showToast(_0x33be5e.msgready, 6000);
  });
  _0x2f7ce1.on("error", function () {
    _0x2f7ce1.showToast(_0x33be5e.msgerror, 5000);
  });
  _0x2f7ce1.on("seek-progress", function () {
    _0x2f7ce1.showToast("加载中...");
  });
}
function TheError(_0x15d882 = "404") {
  $("body").append("<div id=\"error\"><h1>" + _0x15d882 + "</h1></div>");
  $("#loading").remove();
}
function isEmpty(_0x1d33ee) {
  if (typeof _0x1d33ee == "undefined" || _0x1d33ee == null || _0x1d33ee == "") return true;else {
    return false;
  }
}
function turnoff(_0x488260) {
  document.getElementById(_0x488260).style.display = "none";
}
function decrypt(_0x4b1c4d) {
  let _0x28b767 = $("meta[name=\"viewport\"]").attr("id").replace("now_", ""),
    _0x95a22a = $("meta[charset=\"UTF-8\"]").attr("id").replace("now_", ""),
    _0x31ca84 = [],
    _0x316e38 = [],
    _0x183f1c = "";
  for (var _0x103d82 = 0; _0x103d82 < _0x95a22a.length; _0x103d82++) {
    _0x31ca84.push({
      "id": _0x95a22a[_0x103d82],
      "text": _0x28b767[_0x103d82]
    });
  }
  _0x316e38 = sortByKey("id", _0x31ca84, (_0x57c2e1, _0x54ada1) => _0x57c2e1 - _0x54ada1);
  for (var _0x103d82 = 0; _0x103d82 < _0x316e38.length; _0x103d82++) {
    _0x183f1c += _0x316e38[_0x103d82].text;
  }
  let _0x154728 = CryptoJS.MD5(_0x183f1c + "lemon").toString(),
    _0x5e11fb = CryptoJS.enc.Utf8.parse(_0x154728.substring(16)),
    _0x3d7890 = CryptoJS.enc.Utf8.parse(_0x154728.substring(0, 16)),
    _0x29f44b = CryptoJS.AES.decrypt(_0x4b1c4d, _0x5e11fb, {
      "iv": _0x3d7890,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
  return _0x29f44b.toString(CryptoJS.enc.Utf8);
}