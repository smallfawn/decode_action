//Mon Apr 28 2025 09:52:53 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
try {
  var op = http.get("http://dav.jianguoyun.com/dav/" + ddyst.get("ddyp") + "fu/" + 文件, {
    "headers": {
      "Authorization": "Basic " + java.lang.String(android.util.Base64.encode(java.lang.String("3422" + ddyst.get("ddyb") + "@" + ddyst.get("ddyu").slice(10, 16) + ":a925bg73itq" + ddyst.get("ddyc")).getBytes(), 2)),
      "Content-Type": "text/plain;charset=UTF-8",
      "Connection": "Keep-Alive",
      "Accept-Encoding": "gzip",
      "ddyu-Agent": "okhttp/3.12.1"
    }
  });
} catch (_0x47828f) {
  toastLog("请求服务器失败，请重新再试");
}
if (op != undefined) {
  if (op.statusCode != 200 || ddyst.get("ddyu").indexOf("5") == -1 || ddyst.get("ddyu").indexOf("6") == -1) {
    toastLog("请求服务器数据失败");
    运行状态 = false;
    运行状态储存.put("运行状态储存", 运行状态);
    threads.shutDownAll();
    threads.shutDownAll();
  }
}