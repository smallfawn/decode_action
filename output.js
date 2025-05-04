//Sun May 04 2025 11:24:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var currentURL = window.location.href,
  url = new URL(currentURL),
  lastSixChars = url.searchParams.get("vid"),
  urlprefix = "https://saas.11811.cn",
  img = urlprefix + "/zndl/safe.png",
  ajax_url = urlprefix + "/zndl/api/Redirect/GetCardInfo?code=" + lastSixChars;
lastSixChars ? $.ajax({
  "url": ajax_url,
  "dataType": "jsonp",
  "jsonpCallback": "handleJSONPResponse",
  "success": function (_0x57b796) {
    console.log("AJAX Success:", _0x57b796);
    if (_0x57b796.code == 200) {
      if (_0x57b796.title == "外链过期" && _0x57b796.plain_url == "") {
        alert("外链链接已过期！");
        return false;
      }
      const _0x48a031 = _0x57b796.title,
        _0x247b9c = _0x57b796.img;
      $("title").text(_0x48a031);
      var _0x5d24ea = document.querySelector("meta[name=\"description\"]");
      _0x5d24ea.setAttribute("content", _0x57b796.content);
      var _0x4c9985 = $("<link>");
      _0x4c9985.attr("rel", "shortcut icon");
      _0x4c9985.attr("href", _0x247b9c);
      $("head").append(_0x4c9985);
      var _0x3b1110 = _0x57b796.plain_url;
      $("#app").html("<iframe src=\"" + _0x3b1110 + "\" style=\"display:block;\"></iframe>");
    } else {
      if (_0x57b796.code == 201) {
        {
          const _0x44e8b3 = _0x57b796.title,
            _0x4f127d = _0x57b796.img;
          $("title").text(_0x44e8b3);
          var _0x5d24ea = document.querySelector("meta[name=\"description\"]");
          _0x5d24ea.setAttribute("content", _0x57b796.content);
          var _0x4c9985 = $("<link>");
          _0x4c9985.attr("rel", "shortcut icon");
          _0x4c9985.attr("href", _0x4f127d);
          $("head").append(_0x4c9985);
          var _0x3b1110 = _0x57b796.plain_url;
          $("#app").html("<iframe src=\"" + _0x3b1110 + "\" style=\"display:block;\"></iframe>");
        }
      } else {
        if (_0x57b796.code == 0) {
          alert(_0x57b796.title);
        }
      }
    }
  },
  "error": function (_0x1a7aa0, _0x14e7a5, _0x5aa5ec) {
    console.log("AJAX Error:", _0x14e7a5, _0x5aa5ec);
    alert("���Ӵ�����ʹ���µ����ӣ�");
  }
}) : alert("卡片链接错误！");