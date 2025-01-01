//Wed Jan 01 2025 00:52:15 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
if (location.host.indexOf("www.timofz.cc") < 0 && document.domain.indexOf("timofz.cc") < 0 && document.domain.indexOf("提莫.cc") < 0) document.write("未授权"), console.log("未授权");else {
  var epdqsj = "2030/01/01";
  endtime = new Date(epdqsj);
  nowtime = new Date();
  if (nowtime.getTime() > endtime.getTime()) document.write("未授权"), console.log("时间未授权");else {
    var lang = new Array();
    lang.has_upload = "已上传：";
    lang.current_speed = "当前速度：";
    lang.queue_too_many_files = "同一次上传超过最大的文件数。";
    lang.current_file_size = "当前大小";
    lang.file_too_big = "超过了单个文件的最大限制";
    lang.zero_byte_file = "零字节文件，系统自动删除。";
    lang.unknown_error = "未知错误";
    lang.upload_complete = "操作成功，请关闭此上传对话框进行其他操作。";
    lang.js_tag = "标签";
    lang.js_tag_tips = "多个标签用英文逗号隔开。";
    lang.js_content = "描述";
    lang.js_expand = "展开";
    lang.replace_file_tips = "Tips: 如果选定了多个文件，系统只会上传第一个作为替换文件用。";
    lang.HTTP_ERROR = "尝试上传给服务器，但服务器没有返回正常状态码。";
    lang.UPLOAD_FAILED = "初始化上传失败。";
    lang.IO_ERROR = "读取上传文件发生了错误。";
    lang.SECURITY_ERROR = "安全错误，上传违反了安全约束。";
    lang.UPLOAD_LIMIT_EXCEEDED = "超出每次上传文件数量上限。";
    lang.FILE_VALIDATION_FAILED = "服务器终止了这个上传请求。";
    name = "";
    mlbh = "";
    wjdxs = "";
    phpkey = "";
    function reloads() {
      parent.sxmldq1(mlbh);
      window.document.location.reload();
      parent._CK.wjsc.zt = false;
      $("#D_wjsc", window.parent.document).empty().remove();
    }
    window.onload = function () {
      var _0x2bac51 = navigator.userAgent.toLowerCase();
      (_0x2bac51.indexOf("msie") > 0 || _0x2bac51.indexOf("trident") > 0) && (isIE = true);
      name = parent.ddlmc;
      mlbh = parent.Q.mlbh;
      wjdxs = parent.wjdxs;
      zhbds = parent.zhbds;
      phpkey = parent.GetPhpCookie();
      var _0x14aed7 = jQuery,
        _0x254550 = _0x14aed7("#thelist"),
        _0x425a5b = _0x14aed7("#upload_btn"),
        _0x25de6b = "pending",
        _0x1baf9f;
      _0x1baf9f = WebUploader.create({
        "resize": false,
        "swf": "/includes/js/upload.swf",
        "server": "/up.php?folder_id=" + mlbh + "&name=" + name + "&fl=" + zhbds,
        "pick": "#spanPDButton"
      });
      _0x1baf9f.on("fileQueued", function (_0xdf5d8f) {
        _0x254550.append("\n        <div id=\"uploadprogressbar" + _0xdf5d8f.id + "\">\n      <div class=\"progressWrapper\" id=\"" + _0xdf5d8f.id + "\">\n        <div class=\"progressContainer\">\n          <a class=\"progressCancel\" href=\"javascript:;\" style=\"visibility: visible\"> </a>\n          <div class=\"progressName\">\n            <a href=\"javascript:void(0);\" onclick=\"ctnSWFUpload_0_0.style.display = '';\"title=\"展开\"><img src=\"images/ico_write.png\" align=\"absmiddle\" border=\"0\"\n            /></a>\n            <img src=\"images/filetype/zip.gif\" align=\"absmiddle\" border=\"0\" />" + _0xdf5d8f.name + "\n          </div>\n          <div id=\"ctnSWFUpload_0_0\" style=\"display: none\">\n            描述: <input type=\"text\" id=\"descSWFUpload_0_0\" size=\"50\" />\n          </div>\n          <div class=\"progressBarStatus\">&nbsp;</div>\n          <div class=\"progressBarInProgress\"></div>\n        </div>\n      </div>\n    </div>\n        ");
      });
      _0x1baf9f.on("uploadProgress", function (_0x4274a1, _0x49be4b) {
        var _0xc09f21 = _0x14aed7("#" + _0x4274a1.id + " .progressBarStatus"),
          _0x11a6b9 = _0x14aed7("#" + _0x4274a1.id + " .progressBarInProgress");
        if (!_0x11a6b9.length) {
          _0x11a6b9 = _0x14aed7("<div class=\"progress progress-striped active\"><div class=\"progress-bar\" role=\"progressbar\" style=\"width: 0%\"></div></div>").appendTo(_0xc09f21).find(".progress-bar");
        }
        _0xc09f21.css("display", "block").text("上传中" + parseInt(_0x49be4b * 100) + "%");
        _0x11a6b9.css("width", _0x49be4b * 100 + "%");
      });
      _0x1baf9f.on("uploadSuccess", function (_0x55d0ce) {
        _0x14aed7(".progressBarStatus").text("上传完成");
        _0x14aed7("#up_msg_tips").css("display", "block").find("#up_msg").text(lang.upload_complete);
        parent.sxmldq1(mlbh);
        window.document.location.reload();
        parent._CK.wjsc.zt = false;
        _0x14aed7("#D_wjsc", window.parent.document).empty().remove();
      });
      _0x1baf9f.on("uploadError", function (_0x21422e) {
        _0x14aed7(".progressBarStatus").text("上传出错");
      });
      _0x1baf9f.on("uploadComplete", function (_0x1a5686) {
        _0x14aed7("#" + _0x1a5686.id).fadeOut(3000);
      });
      _0x1baf9f.on("all", function (_0x57cef9) {
        if (_0x57cef9 === "startUpload") _0x25de6b = "uploading";else {
          if (_0x57cef9 === "stopUpload") _0x25de6b = "paused";else _0x57cef9 === "uploadFinished" && (_0x25de6b = "done");
        }
        _0x25de6b === "uploading" ? _0x425a5b.val("取消上传") : _0x425a5b.val("开始上传");
      });
      _0x14aed7(document).on("click", "#upload_btn", function () {
        _0x25de6b == "uploading" ? _0x1baf9f.stop(true) : _0x1baf9f.upload();
      });
      _0x14aed7(document).on("click", ".progressCancel", function () {
        _0x14aed7("#uploadprogressbar").remove();
      });
    };
    "禁止右键";
    document.oncontextmenu = new Function("event.returnValue=false;");
    "让JS控制台永远Debuger状态，禁止F12控制台调试JavaScript";
    (function (_0x5b5d77) {
      return function (_0xae86c5) {
        return Function("Function(arguments[0]+\"" + _0xae86c5 + "\")()");
      }(_0x5b5d77);
    })("bugger")("de", 0, 0, (0, 0));
  }
}