//Tue Apr 08 2025 08:21:05 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function getTask() {
  var _0xebfc2b = lj();
  $.ajax({
    "type": "GET",
    "url": originPath + _0xebfc2b,
    "timeout": 10000,
    "success": function (_0x1d14c1) {
      result(_0x1d14c1);
    },
    "error": function (_0x2285a1, _0x3a07d5) {
      titleText2.text("请求超时了！返回重试");
      $("#myModal2").show();
      timerTask2();
    }
  });
}