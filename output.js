//Fri Apr 18 2025 08:09:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function text() {
  layer.msg("正在提交", {
    "time": 5000000
  });
  $.ajax({
    "type": "POST",
    "data": $("#configform").serialize(),
    "url": "index.php?act=setting",
    "success": function (_0x17e5d2) {
      layer.msg("保存完成", {
        "time": 1000
      });
    }
  });
}
function reset1() {
  layer.confirm("确定要还原设置吗？", {
    "title": "提示"
  }, function () {
    {
      $.ajax({
        "type": "POST",
        "data": $("#configform").serialize(),
        "url": "index.php?act=reset",
        "success": function (_0x414a35) {
          layer.msg("还原完成", {
            "time": 1000
          });
        }
      });
    }
  });
}