//Sat Jun 29 2024 12:04:29 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
$("#submitBTN").click(function () {
  loadingdata = "程序正在运行中……";
  compact = $("#compact").is(":checked");
  $("#compiler-textarea-result").val(loadingdata);
  code = editor1.getValue();
  if (code) {
    var _0xa70145 = JavaScriptObfuscator.obfuscate(code, {
      compact: compact,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 1,
      numbersToExpressions: true,
      simplify: true,
      stringArrayShuffle: true,
      splitStrings: true,
      stringArrayThreshold: 1
    });
    editor2.getDoc().setValue(_0xa70145.getObfuscatedCode());
  }
  $("#compact").click(function () {
    $("#submitBTN").click();
  });
});
new ClipboardJS("#copycode", {
  text: function (_0x9feb32) {
    return editor2.getDoc().getValue();
  }
}).on("success", function (_0x583f9d) {
  $("#copycode").text("已复制");
  selectAll();
  setTimeout(function () {
    $("#copycode").html("<i class=\"fa fa-copy\"></i> 复制代码");
  }, 2000);
  _0x583f9d.clearSelection();
}).on("error", function (_0x2493f4) {
  alert("Error!");
});
function selectAll() {
  editor2 && editor2.execCommand("selectAll");
}
function clearAll() {
  editor1 && editor2 && (editor1.setValue(""), editor2.setValue(""));
}
function changeToFileContent(_0x42a176) {
  var _0x3e2581 = _0x42a176.files[0];
  if (_0x3e2581) {
    var _0x466bde = new FileReader();
    _0x466bde.readAsText(_0x3e2581, "UTF-8");
    _0x466bde.onload = function (_0x286369) {
      editor1 && editor1.setValue(_0x286369.target.result);
    };
  }
}