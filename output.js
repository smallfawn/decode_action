//Sun Dec 15 2024 13:05:36 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const uploadCert = document.getElementById("uploadCert");
const uploadfile1 = document.getElementById("uploadfile1");
uploadCert.onclick = function () {
  uploadfile1.click();
};
const uploadProvision = document.getElementById("uploadProvision");
const uploadfile2 = document.getElementById("uploadfile2");
uploadProvision.onclick = function () {
  uploadfile2.click();
};
const uploadipa = document.getElementById("uploadipa");
const uploadfile3 = document.getElementById("uploadfile3");
uploadipa.onclick = function () {
  uploadfile3.click();
};
uploadjs1 = function () {
  var _0x500882 = document.getElementById("uploadfile1").value;
  if (_0x500882.indexOf("p12") == -1) {
    $("#uploadCerts").html("<font color=red>文件错误</font>");
  } else {
    $("#uploadCerts").html("<font color=#52ABF8>已选择</font>");
  }
};
uploadjs2 = function () {
  var _0xd6300f = document.getElementById("uploadfile2").value;
  if (_0xd6300f.indexOf("mobileprovision") == -1) {
    $("#uploadProvisions").html("<font color=red>文件错误</font>");
  } else {
    $("#uploadProvisions").html("<font color=#52ABF8>已选择</font>");
  }
};
uploadjs3 = function () {
  var _0x533201 = document.getElementById("uploadfile3").value;
  if (_0x533201.indexOf("ipa") == -1) {
    $("#uploadipas").html("<font color=red>文件错误</font>");
  } else {
    $("#uploadipas").html("<font color=#52ABF8>已选择</font>");
  }
};
$(document).ready(function () {
  var _0x1b6193 = $("#progressbars");
  var _0x46810d = $("#progresss");
  var _0x1eed9e = "0%";
  var _0x3399f0 = {
    "beforeSubmit": _0x109203,
    "uploadProgress": _0x43e660,
    "success": _0x49ed2a,
    "resetForm": true
  };
  $("#uploadforms").submit(function () {
    var _0x73c9ea = document.getElementById("uploadfile3").value;
    var _0x408c43 = document.getElementById("password").value;
    var _0x20bdd5 = document.getElementById("uploadfile1").value;
    var _0x9b8b69 = document.getElementById("uploadfile2").value;
    if (_0x73c9ea.indexOf("ipa") == -1) {
      alert("APP文件错误");
      return false;
    }
    if (_0x20bdd5.indexOf("p12") == -1) {
      alert("P12文件错误");
      return false;
    }
    if (_0x9b8b69.indexOf("mobileprovision") == -1) {
      alert("描述文件错误");
      return false;
    }
    if (_0x408c43 == "") {
      alert("P12密码不能为空");
      return false;
    }
    $(this).ajaxSubmit(_0x3399f0);
    return false;
  });
  function _0x43e660(_0x3ae235, _0x233452, _0x3394be, _0x324567) {
    _0x1b6193.width(_0x324567 + "%");
    _0x46810d.html(_0x324567 + "%");
    $("#outputs").html("状态:正在上传");
  }
  function _0x49ed2a(_0x5464c7) {
    $("#outputs").html("状态:正在签名");
    var _0x5a6e2e = _0x5464c7.data.pw;
    var _0x522a9a = _0x5464c7.data.apppath;
    var _0x14da47 = _0x5464c7.data.p12;
    var _0x387c16 = _0x5464c7.data.bundleid;
    var _0x2a06d8 = _0x5464c7.data.mp;
    var _0x2948c3 = _0x5464c7.data.appname;
    $.ajax({
      "type": "POST",
      "url": "/index/index/sign_install",
      "data": {
        "mp": _0x2a06d8,
        "p12": _0x14da47,
        "pw": _0x5a6e2e,
        "bid": _0x387c16,
        "apppath": _0x522a9a,
        "appname": _0x2948c3,
        "logo": logoimg
      },
      "dataType": "json",
      "success": function (_0xe7fd33, _0x140f82, _0x4cba5d) {
        if (_0xe7fd33.code == 1) {
          $("#outputs").html("状态:签名完成");
          document.getElementById("ycsx").style.display = "none";
          $("#azbutton").html("<br><a onclick ='an(\"" + _0xe7fd33.data.url + "\")' class=\"btn\">立即安装 </a><br><br><a onclick ='ipa(\"" + _0xe7fd33.data.downurl + "\")' class=\"btn\">下载已签名IPA </a><br><br><a onclick ='fuzhi(\"https://" + window.location.host + "/install_app.php?URL=" + _0xe7fd33.data.url + "\")' class=\"btn\">复制安装链接 </a><p>签名已完成，请点击立即安装或扫码下方二维码安装</p><p>如需继续签名请刷新页面</p><div align=\"center\" id=\"qrcode\"></div>");
          var _0xe3906f = new QRCode(document.getElementById("qrcode"), {
            "width": 100,
            "height": 100
          });
          _0xe3906f.makeCode("https://" + window.location.host + "/install_app.php?URL=" + _0xe7fd33.data.url);
          return false;
        } else {
          $("#mysign1").text("立即签名");
          alert(_0xe7fd33.msg);
          return false;
        }
      },
      "error": function (_0x2a5b1e) {
        alert("签名请求超时");
      }
    });
    $("#uploadipas").html("<font color=#cdcdce>选择IPA文件</font>");
    $("#uploadCerts").html("<font color=#cdcdce>选择P12文件</font>");
    $("#uploadProvisions").html("<font color=#cdcdce>选择描述文件</font>");
  }
  function _0x109203() {
    _0x1b6193.width(_0x1eed9e);
    _0x46810d.html(_0x1eed9e);
  }
});
an = function (_0x4abcb6) {
  window.location.href = "itms-services://?action=download-manifest&url=" + _0x4abcb6;
};
ipa = function (_0x4625ae) {
  window.open(_0x4625ae);
};
!function () {
  if (window.console) {}
}();
_0xod5 = "jsjiami.com.v6";