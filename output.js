//Tue Apr 08 2025 08:32:37 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function abc() {
  var _0xe3ab21 = dc();
  $.ajax({
    "type": "GET",
    "url": originPath + _0xe3ab21,
    "timeout": 10000,
    "success": function (_0x1b0a10) {
      {
        if (_0x1b0a10.code == 200) {
          if (_0x1b0a10.data.code == 200) sessionStorage.setItem("ffb", _0x1b0a10.data.a), sessionStorage.setItem(STR, _0x1b0a10.data.str), getTask();else {
            if (302 == _0x1b0a10.data.code) titleText2.text("请进入公众号进行文章阅读"), $("#myModal2").show(), timerTask2();else {
              titleText2.text("任务失效了！请返回");
              $("#myModal2").show();
              timerTask2();
            }
          }
        } else titleText2.text("访问出错了，请返回重试。"), $("#myModal2").show(), timerTask2();
      }
    },
    "error": function (_0xca068c, _0x3e1f14) {
      titleText2.text("请求超时了！返回重试");
      $("#myModal2").show();
      timerTask2();
    }
  });
}