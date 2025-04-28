//Mon Apr 28 2025 09:47:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
threads.start(function () {
  var _0x1923c6 = {
    "Authorization": "Basic " + java.lang.String(android.util.Base64.encode(java.lang.String("3422" + ddyst.get("ddyb") + "@" + ddyst.get("ddyu").slice(10, 16) + ":a925bg73itq" + ddyst.get("ddyc")).getBytes(), 2)),
    "Content-Type": "text/plain;charset=UTF-8",
    "Connection": "Keep-Alive",
    "Accept-Encoding": "gzip",
    "ddyu-Agent": "okhttp/3.12.1"
  };
  if (name == "上传日志") {
    {
      var _0x5ea1fb = "未激活用户";
      storage.get("引流激活码") != undefined && (_0x5ea1fb = storage.get("引流激活码"));
      if (files.exists(日志路径)) {
        if (files.read(日志路径).length > 0) {
          var _0x2bcf65 = http.request("http://dav.jianguoyun.com/dav/bug/" + _0x5ea1fb + tu["软件名字"] + "_40.js", {
            "method": "PUT",
            "headers": _0x1923c6,
            "body": files.read(日志路径)
          });
        }
      }
    }
  } else {
    var _0x2ba6a2 = {
      "method": "POST",
      "contentType": "application/json",
      "body": JSON.stringify({
        "body": "222",
        "body1": "222"
      })
    };
    try {
      var _0x2dd3df = http.request("https://env-00jxhaxsxvvv.dev-hz.cloudbasefunction.cn/readCeshiJs", _0x2ba6a2);
      if (_0x2dd3df.statusCode == 200) {
        var _0x240e14 = _0x2dd3df.body.json();
        if (_0x240e14.success) {
          tu["全部常见问题"] = JSON.parse(_0x240e14.content)[0];
          tu["软件更新日志"] = JSON.parse(_0x240e14.content)[1];
          tu["全部功能说明"] = JSON.parse(_0x240e14.content)[3];
          tu["软件更新日志"] = tu["软件更新日志"].reverse();
          var _0x4dd402 = JSON.parse(_0x240e14.content)[2];
          for (fv = 0; fv < 全部功能.length; fv++) {
            for (kapp = 0; kapp < _0x4dd402.length; kapp++) {
              (_0x4dd402[kapp]["软件名字"] == 全部功能[fv]["全名"] || _0x4dd402[kapp]["软件名字"] == 全部功能[fv].name) && tu["要求版本"].push(_0x4dd402[kapp]);
            }
          }
        } else log("数据获取失败(nosuccess)");
      } else log("数据获取失败(200)");
    } catch (_0x2b1847) {
      log("数据获取失败(error)" + _0x2b1847);
    }
  }
});