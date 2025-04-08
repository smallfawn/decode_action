//Tue Apr 08 2025 08:30:05 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function result22(_0x5b0328) {
  if (_0x5b0328.data.code == 501) {
    titleText2.text("非法请求！请返回");
    $("#myModal2").show();
    timerTask2();
    return;
  }
  if (_0x5b0328.data.code == 150) {
    $("#myModal").show();
    timerTask();
    return;
  }
  if (_0x5b0328.data.code == 300) {
    overTask("已完成", "任务已完成，请返回。", "任务经完成！请返回");
    return;
  }
  _0x5b0328.data.code == 200 && (sessionStorage.setItem(START_NUM, _0x5b0328.data.startNum), sessionStorage.setItem(END_NUM, _0x5b0328.data.endNum), sessionStorage.setItem("ffb", _0x5b0328.data.ffb), readArt(_0x5b0328.data.url));
}