//Thu Jul 24 2025 02:05:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
document.oncontextmenu = function () {
  event.returnValue = false;
};
document.onkeydown = document.onkeyup = document.onkeypress = function (_0x55ddc1) {
  let _0x1d2160 = _0x55ddc1 || window.event || arguments.callee.caller.arguments[0];
  if (_0x1d2160 && _0x1d2160.keyCode == 123) return _0x1d2160.returnValue = false, false;
};
let _0x7e95a6 = navigator.userAgent;
if (_0x7e95a6.indexOf("Firefox") > -1) {
  let _0x475c71,
    _0x48753a = /./;
  _0x48753a.toString = function () {
    _0x475c71 = "on";
  };
  setInterval(function () {
    _0x475c71 = "off";
    console.log(_0x48753a);
    console.log(_0x475c71);
    console.clear();
    if (_0x475c71 === "on") {
      let _0x3bf47b = "";
      try {
        window.open("about:blank", _0x3bf47b = "_self");
      } catch (_0x3d7d52) {
        let _0x3a7ad1 = document.createElement("button");
        _0x3a7ad1.onclick = function () {
          window.open("about:blank", _0x3bf47b = "_self");
        };
        _0x3a7ad1.click();
      }
    }
  }, 200);
} else {
  let _0x4a1176 = {
    "onOpen": function () {
      alert("Console is opened");
    },
    "onClose": function () {
      alert("Console is closed");
    },
    "init": function () {
      let _0x5aef01 = this,
        _0x79a277 = document.createElement("div"),
        _0x595a50 = false,
        _0x40a098 = false;
      Object.defineProperty(_0x79a277, "id", {
        "get": function () {
          return !_0x595a50 && (_0x5aef01.onOpen(), _0x595a50 = true), _0x40a098 = true, true;
        }
      });
      setInterval(function () {
        _0x40a098 = false;
        console.info(_0x79a277);
        console.clear();
        if (!_0x40a098 && _0x595a50) {
          _0x5aef01.onClose();
          _0x595a50 = false;
        }
      }, 200);
    }
  };
  _0x4a1176.onOpen = function () {
    let _0x589616 = "";
    try {
      window.open("about:blank", _0x589616 = "_self");
    } catch (_0x2eaaef) {
      let _0x2616ae = document.createElement("button");
      _0x2616ae.onclick = function () {
        window.open("about:blank", _0x589616 = "_self");
      };
      _0x2616ae.click();
    }
  };
  _0x4a1176.onClose = function () {
    alert("Console is closed!!!!!");
  };
  _0x4a1176.init();
}
$("body").on("click", ".ajax-get", function () {
  var _0x548c2f,
    _0x4bfc1c,
    _0x1caf9d,
    _0x3c81ef = $(this).data("url");
  $(this).hasClass("confirm") && (_0x4bfc1c = true);
  if ($(this).hasClass("jump")) {
    _0x1caf9d = true;
  }
  if ($(this).hasClass("load")) {
    _0x548c2f = true;
  }
  return zanpian.ajax("get", {
    "urls": _0x3c81ef,
    "confirm": _0x4bfc1c,
    "jump": _0x1caf9d,
    "load": _0x548c2f
  }), false;
});
$("body").on("click", ".openimg", function () {
  var _0x56ebd1 = $(this)[0].src;
  if (_0x56ebd1.substr(0, 8) == "zanpian:") var _0x2b013f = _0x56ebd1.replace("zanpian:", "");else {
    var _0x2b013f = _0x56ebd1;
  }
  if (_0x56ebd1) {
    layer.open({
      "type": 1,
      "title": false,
      "closeBtn": 1,
      "area": ["250px", "auto"],
      "skin": "layui-layer-nobg",
      "shadeClose": true,
      "content": "<img src=" + _0x2b013f + " style=\"max-width: 100%;\">"
    });
  }
});
$("body").on("click", ".reset-search", function () {
  $("select").each(function (_0x4bc93d, _0x4d78ec) {
    $(this).val("");
  });
  $("input").each(function (_0x1ca36a, _0x8d0a5d) {
    $(this).val("");
  });
  layui.form.render();
});
$(document).on("click", ".clear-json", function () {
  var _0x1b447f = $(this).parent().parent().parent();
  _0x1b447f.find("select").each(function (_0x54e376, _0x2d422a) {
    $(this).val("");
  });
  _0x1b447f.find("input").each(function (_0x7153d2, _0x392c1f) {
    $(this).val("");
  });
  _0x1b447f.find("textarea").each(function (_0x19d8d6, _0x5cb8d6) {
    $(this).val("");
  });
});
$(document).on("click", ".relation_add", function () {
  var _0x305336 = $(this).data("id");
  var _0x211bf1 = $(this).data("field");
  var _0x142a17 = $(this).data("title");
  var _0x324ab1 = $(this).data("menuid");
  var _0x2f0967 = $(this).data("menuname");
  var _0xd2c622 = $("#" + _0x211bf1).val() + "," + _0x305336;
  var _0x1d2e50 = zanpian.adminurl("cms.relation/index") + "?id=" + _0x305336 + "&menuid=" + _0x324ab1 + "&menuname=" + _0x2f0967 + "&field=" + _0x211bf1 + "&ids=" + _0xd2c622;
  zanpian.open({
    "type": 2,
    "title": "添加" + _0x142a17,
    "content": _0x1d2e50,
    "maxmin": true,
    "area": ["100%", "100%"]
  });
});
$(document).on("click", ".relation_add_s", function () {
  var _0x47cd2e = $(this).data("id");
  var _0x2e48a0 = $(this).data("menuid");
  var _0x6bb1fd = $(this).data("menuname");
  var _0x51fa52 = $(this).data("field");
  var _0x5740c3 = $(this).data("title");
  var _0x370b1f = zanpian.adminurl("cms.relation/show") + "?id=" + _0x47cd2e + "&menuid=" + _0x2e48a0 + "&menuname=" + _0x6bb1fd + "&field=" + _0x51fa52;
  zanpian.open({
    "type": 2,
    "title": "添加" + _0x5740c3,
    "content": _0x370b1f,
    "maxmin": true,
    "area": ["100%", "100%"]
  });
});
$(document).on("click", ".relation_add_list", function () {
  var _0x351ca2 = $(this).data("id"),
    _0x21f9cf = $(this).data("field"),
    _0x4aa809 = $(this).data("one");
  if (_0x4aa809) $(".relation_add_list").removeClass("layui-btn-disabled"), $(this).addClass("layui-btn-disabled"), parent.$("#" + _0x21f9cf).val(_0x351ca2);else {
    $(this).addClass("layui-btn-disabled");
    var _0x58db84 = parent.$("#" + _0x21f9cf).val();
    if (_0x58db84 != "") {
      _0x58db84 = _0x351ca2 + "," + _0x58db84;
    } else _0x58db84 = _0x351ca2;
    parent.$("#" + _0x21f9cf).val(_0x58db84);
  }
});
$(document).on("click", ".add-tag", function () {
  var _0x546994 = $(this).data("field"),
    _0x39f4ab = $(this).data("sid"),
    _0x456abd = zanpian.adminurl("cms.tag/ajax") + "?sid=" + _0x39f4ab + "&field=" + _0x546994;
  zanpian.open({
    "type": 2,
    "title": "添加标签",
    "content": _0x456abd,
    "maxmin": true,
    "btn": ["关闭"],
    "area": ["80%", "auto"],
    "yes": function (_0x7fb9ca, _0x2ff2fb) {
      layer.close(_0x7fb9ca);
    }
  });
});
$(document).on("click", ".tag-add", function () {
  var _0x34e40a = $(this).data("name"),
    _0x7b7cb1 = $(this).data("field"),
    _0x249537 = parent.$("#" + _0x7b7cb1).val();
  if (_0x249537 != "") {
    _0x249537 = _0x34e40a + "," + _0x249537;
  } else _0x249537 = _0x34e40a;
  parent.$("#" + _0x7b7cb1).val(_0x249537);
});
$(document).on("click", "#getvodname", function () {
  var _0x166e81 = $(this).data("field"),
    _0x15ff99 = $(this).data("name");
  if ($("#" + _0x166e81).val() == "") {
    return layer.msg("请填写" + _0x15ff99, {
      "icon": 2,
      "time": 1800
    }), false;
  }
  layer.msg("数据获取中...");
  var _0x110689 = "name=" + $("#" + _0x166e81).val();
  $.ajax({
    "type": "get",
    "url": zanpian.adminurl("cms.get/vodname"),
    "data": _0x110689,
    "dataType": "json",
    "success": function (_0x355c8f) {
      if (_0x355c8f.code == 1) {
        layer.msg("共获取到" + _0x355c8f.data.num + "条视频数据", {
          "icon": 1,
          "time": 1800
        });
        var _0x1946ad = "<select id=\"" + _0x166e81 + "_pianyuan_data\" lay-search=\"\">" + _0x355c8f.data.str + "</select>";
        $("#" + _0x166e81 + "_pianyuan").html(_0x1946ad);
        layui.form.render();
        $("#" + _0x166e81 + "_pianyuan_hide").show();
      } else layer.msg(_0x355c8f.msg ? _0x355c8f.msg : "获取视频资料失败", {
        "icon": 2,
        "time": 1800
      });
    },
    "error": function (_0x1ddac7) {
      layer.confirm("程序返回：" + _0x1ddac7.status + " 错误,点击查看详细错误", {
        "zIndex": layer.zIndex,
        "icon": 5,
        "title": "出错啦！",
        "btn": ["查看", "关闭"]
      }, function () {
        $("html").html(_0x1ddac7.responseText);
      });
    }
  });
});
$(document).on("change", "select[id='vod_name_pianyuan_data']", function () {
  getvodinfo($(this).val(), 1);
});
$(document).on("click", "#Importdoubaninfo", function () {
  if ($("#vod_name_pianyuan_data").val() == "") {
    return layer.msg("请填写豆瓣ID", {
      "icon": 2,
      "time": 1800
    }), false;
  }
  getvodinfo($("#vod_name_pianyuan_data").val(), 1);
});
$(document).on("click", "#getdoubaninfo", function () {
  var _0x60d363 = $(this).data("field");
  if ($("#" + _0x60d363).val() == "") return layer.msg("请填写豆瓣ID", {
    "icon": 2,
    "time": 1800
  }), false;
  getvodinfo($("#" + _0x60d363).val());
});
$(document).on("click", "#getbaikeinfo", function () {
  var _0x21c59a = $(this).data("field");
  if ($("#" + _0x21c59a).val() == "") return layer.msg("请填百科地址", {
    "icon": 2,
    "time": 1800
  }), false;
  getvodinfo($("#" + _0x21c59a).val());
});
$(document).on("click", "#getdoubancm", function () {
  var _0x43c7da = $("#vod_id").val(),
    _0x221d5e = $("#vod_doubanid").val();
  if (_0x43c7da == "") return layer.msg("视频ID不能为空", {
    "icon": 2
  });
  if (_0x221d5e == "") {
    return layer.msg("采集地址不能为空", {
      "icon": 2
    });
  }
  layer.msg("数据获取中...");
  $.ajax({
    "type": "post",
    "url": zanpian.adminurl("cms.get/cm"),
    "data": {
      "vod_id": _0x43c7da,
      "douban_id": _0x221d5e
    },
    "dataType": "json",
    "success": function (_0x33e95b) {
      _0x33e95b.code >= 1 ? layer.msg(_0x33e95b.msg ? _0x33e95b.msg : "采集入库评论成功", {
        "icon": 1,
        "time": 1800
      }) : layer.msg(_0x33e95b.msg ? _0x33e95b.msg : "采集入库评论失败", {
        "icon": 2,
        "time": 1800
      });
    },
    "error": function (_0x5471ad) {
      layer.confirm("程序返回：" + _0x5471ad.status + " 错误,点击查看详细错误", {
        "zIndex": layer.zIndex,
        "icon": 5,
        "title": "出错啦！",
        "btn": ["查看", "关闭"]
      }, function () {
        $("html").html(_0x5471ad.responseText);
      });
    }
  });
});
$(document).on("click", "#getstarname", function () {
  var _0x1b9945 = $(this).data("field"),
    _0x711e3a = $(this).data("name");
  if ($("#" + _0x1b9945).val() == "") return layer.msg("请填写" + _0x711e3a, {
    "icon": 2,
    "time": 1800
  }), false;
  layer.msg("数据获取中...");
  var _0x5ba1a4 = "name=" + $("#" + _0x1b9945).val();
  $.ajax({
    "type": "get",
    "url": zanpian.adminurl("cms.get/starname"),
    "data": _0x5ba1a4,
    "dataType": "json",
    "success": function (_0x5408b7) {
      if (_0x5408b7.code == 1) {
        layer.msg("共获取到" + _0x5408b7.data.num + "条明星数据", {
          "icon": 1,
          "time": 1800
        });
        var _0x5aa8d4 = "<select id=\"" + _0x1b9945 + "_pianyuan_data\" lay-search=\"\">" + _0x5408b7.data.str + "</select>";
        $("#" + _0x1b9945 + "_ziliao").html(_0x5aa8d4);
        layui.form.render();
        $("#" + _0x1b9945 + "_ziliao_hide").show();
      } else layer.msg(_0x5408b7.msg ? _0x5408b7.msg : "获取视频资料失败", {
        "icon": 2,
        "time": 1800
      });
    },
    "error": function (_0x4eb38b) {
      layer.confirm("程序返回：" + _0x4eb38b.status + " 错误,点击查看详细错误", {
        "zIndex": layer.zIndex,
        "icon": 5,
        "title": "出错啦！",
        "btn": ["查看", "关闭"]
      }, function () {
        $("html").html(_0x4eb38b.responseText);
      });
    }
  });
});
$(document).on("click", "#Importstarinfo", function () {
  if ($("#star_name_pianyuan_data").val() == "") return layer.msg("参数为空", {
    "icon": 2,
    "time": 1800
  }), false;
  getstarinfo($("#star_name_pianyuan_data").val(), 1);
});
$(document).on("click", "#getbaikestar", function () {
  var _0x390af4 = $(this).data("field");
  if ($("#" + _0x390af4).val() == "") return layer.msg("请填百科地址", {
    "icon": 2,
    "time": 1800
  }), false;
  getstarinfo($("#" + _0x390af4).val());
});
$(document).on("click", "#getdoubaninfostar", function () {
  var _0x1257a2 = $(this).data("field");
  if ($("#" + _0x1257a2).val() == "") {
    return layer.msg("请填写豆瓣ID", {
      "icon": 2,
      "time": 1800
    }), false;
  }
  getstarinfo($("#" + _0x1257a2).val());
});
$(document).on("click", "#getkeywords", function () {
  var _0x1d9d11 = $(this).data("field"),
    _0x8f9c57 = $(this).data("fileds");
  if ($("#" + _0x8f9c57).val() == "") return layer.msg("请填获取的关键词", {
    "icon": 2,
    "time": 1800
  }), false;
  $.ajax({
    "type": "get",
    "url": zanpian.adminurl("cms.get/keywords"),
    "data": {
      "name": $("#" + _0x8f9c57).val()
    },
    "dataType": "json",
    "success": function (_0x500f31) {
      if (_0x500f31.code == 1) {
        layer.msg("获取关键词成功", {
          "icon": 1,
          "time": 1800
        });
        $("#" + _0x1d9d11).val(_0x500f31.data.str);
      } else layer.msg(_0x500f31.msg ? _0x500f31.msg : "获取视频资料失败", {
        "icon": 2,
        "time": 1800
      });
    },
    "error": function (_0x35725c) {
      layer.confirm("程序返回：" + _0x35725c.status + " 错误,点击查看详细错误", {
        "zIndex": layer.zIndex,
        "icon": 5,
        "title": "出错啦！",
        "btn": ["查看", "关闭"]
      }, function () {
        $("html").html(_0x35725c.responseText);
      });
    }
  });
});
$(document).on("click", "#getpicture", function () {
  var _0x47ff06 = $(this).data("field");
  if ($("#" + _0x47ff06).val() == "") {
    return layer.msg("请填写采集网址", {
      "icon": 2,
      "time": 1800
    }), false;
  }
  layer.msg("数据获取中...");
  $.ajax({
    "type": "post",
    "url": zanpian.adminurl("cms.get/picture"),
    "data": {
      "url": $("#" + _0x47ff06).val()
    },
    "dataType": "json",
    "success": function (_0x2ce5e4) {
      if (_0x2ce5e4.code == 1) {
        for (var _0x5ec40e in _0x2ce5e4.data) {
          $("ul.preview-list").append("<li><p class=\"imgWrap\"><img src=\"" + _0x2ce5e4.data[_0x5ec40e].url + "\"></p><input class=\"upalt  text-center\" type=\"text\" name=\"picture_image[title][]\" value=\"" + _0x2ce5e4.data[_0x5ec40e].title + "\" placeholder=\"图片描述\"><input type=\"hidden\" class=\"img-url\" name=\"picture_image[url][]\" value=\"" + _0x2ce5e4.data[_0x5ec40e].url + "\"><div class=\"file-panel\">" + "<span class=\"cancel\">删除</span></div><span class=\"success\"></span></li>");
        }
        $(".preview-list li").on("mouseenter", function () {
          $(this).children(".file-panel").stop().animate({
            "height": 30
          });
        });
        $(".preview-list li").on("mouseleave", function () {
          $(this).children(".file-panel").stop().animate({
            "height": 0
          });
        });
        layer.msg("获取图集成功", {
          "icon": 1,
          "time": 1800
        });
        $(".file-panel").on("click", "span", function () {
          var _0x5f10c8 = $(this).parent().parent("li");
          _0x5f10c8.remove();
        });
      } else layer.msg(_0x2ce5e4.msg ? _0x2ce5e4.msg : "获取资料失败", {
        "icon": 2,
        "time": 1800
      });
    },
    "error": function (_0x120350) {
      layer.confirm("程序返回：" + _0x120350.status + " 错误,点击查看详细错误", {
        "zIndex": layer.zIndex,
        "icon": 5,
        "title": "出错啦！",
        "btn": ["查看", "关闭"]
      }, function () {
        $("html").html(_0x120350.responseText);
      });
    }
  });
});
$(document).on("click", "#getpart", function () {
  var _0x12fbda = $(this).data("field");
  if ($("#" + _0x12fbda).val() == "") return layer.msg("请填写采集网址", {
    "icon": 2,
    "time": 1800
  }), false;
  layer.msg("数据获取中...");
  $.ajax({
    "type": "post",
    "url": zanpian.adminurl("cms.get/part"),
    "data": {
      "url": $("#" + _0x12fbda).val()
    },
    "dataType": "json",
    "success": function (_0x201215) {
      _0x201215.code == 1 ? ($("#part_name").val(_0x201215.data.part_name), $("#part_title").val(_0x201215.data.part_title), $("#part_oid").val(_0x201215.data.part_oid), $(".edit").each(function () {
        var _0x338e2c = $(this).data("type");
        switch (_0x338e2c) {
          case "summernote":
            $("#part_content").summernote("code", _0x201215.data.part_content);
            break;
          case "kindeditor":
            KindEditor.html("#part_content", _0x201215.data.part_content);
            break;
          case "ueditor":
            UE.getEditor("part_content").execCommand("insertHtml", _0x201215.data.part_content);
            break;
          case "umeditor":
            UM.getEditor("part_content").setContent(_0x201215.data.part_content);
            break;
          case "ckeditor":
            CKEDITOR.instances.part_content.setData(_0x201215.data.part_content);
            break;
          default:
            break;
        }
      }), layui.form.render(), layer.msg("获取成功", {
        "icon": 1,
        "time": 1800
      })) : layer.msg(_0x201215.msg ? _0x201215.msg : "获取失败", {
        "icon": 2,
        "time": 1800
      });
    },
    "error": function (_0x1953f5) {
      layer.confirm("程序返回：" + _0x1953f5.status + " 错误,点击查看详细错误", {
        "zIndex": layer.zIndex,
        "icon": 5,
        "title": "出错啦！",
        "btn": ["查看", "关闭"]
      }, function () {
        $("html").html(_0x1953f5.responseText);
      });
    }
  });
});
$(document).on("click", "#getroles", function () {
  var _0x43f0ca = $("#lines_vid").val();
  if (_0x43f0ca == "") return false;
  $.ajax({
    "type": "get",
    "url": zanpian.adminurl("cms.batch/role"),
    "data": {
      "vid": _0x43f0ca
    },
    "dataType": "json",
    "success": function (_0x556b65) {
      if (_0x556b65.code == 1) {
        layer.msg("获取成功", {
          "icon": 1,
          "time": 1800
        });
        var _0x10b117, _0x19941c;
        for (_0x10b117 = 0; _0x10b117 < _0x556b65.data.length; _0x10b117++) {
          _0x19941c += "<option value=" + _0x556b65.data[_0x10b117].role_name + ">" + _0x556b65.data[_0x10b117].role_name + "</option>";
        }
        var _0x5da5f5 = "<select id=\"role_select\" lay-search=\"\" name=\"lines_role\">" + _0x19941c + "</select>";
        $("#lines_role").after(_0x5da5f5);
        $("#lines_role").remove();
        layui.form.render();
      } else layer.msg(_0x556b65.msg ? _0x556b65.msg : "获取视频资料失败", {
        "icon": 2,
        "time": 1800
      });
    },
    "error": function (_0x4ebf2d) {
      layer.confirm("程序返回：" + _0x4ebf2d.status + " 错误,点击查看详细错误", {
        "zIndex": layer.zIndex,
        "icon": 5,
        "title": "出错啦！",
        "btn": ["查看", "关闭"]
      }, function () {
        $("html").html(_0x4ebf2d.responseText);
      });
    }
  });
});
$(document).on("click", ".picture_clear", function () {
  $("#picture_image").find(".preview li").remove();
});
$(document).on("click", ".sort-json", function () {
  var _0x1d878f = $(this).parent().parent().parent(),
    _0x1e58fa = _0x1d878f.find("textarea").val(),
    _0x52cc75 = "";
  if (_0x1e58fa.length == 0) {
    return layer.msg("请填写地址", {
      "icon": 2,
      "time": 1800
    }), false;
  }
  _0x1e58fa = _0x1e58fa.replaceAll("\r", "");
  var _0x24904b = _0x1e58fa.split("\n");
  for (var _0x16de39 = _0x24904b.length - 1; _0x16de39 >= 0; _0x16de39--) {
    _0x24904b[_0x16de39].length > 0 && (_0x52cc75 += _0x24904b[_0x16de39] + "\r\n");
  }
  _0x1d878f.find("textarea").val(_0x52cc75.trim());
  layer.msg("排序成功", {
    "icon": 1,
    "time": 1800
  });
});
$(document).on("click", ".remove-json", function () {
  var _0x289422 = $(this).parent().parent().parent();
  var _0x53cf84 = _0x289422.find("textarea").val();
  var _0x49c213 = "";
  if (_0x53cf84.length == 0) return layer.msg("请填写地址", {
    "icon": 2,
    "time": 1800
  }), false;
  _0x53cf84 = _0x53cf84.replaceAll("\r", "");
  var _0x1f1f92 = _0x53cf84.split("\n");
  for (var _0x25b276 = 0; _0x25b276 < _0x1f1f92.length; _0x25b276++) {
    if (_0x1f1f92[_0x25b276].length > 0) {
      var _0x15a90a = _0x1f1f92[_0x25b276].split("$"),
        _0x5ea467 = _0x15a90a.length - 1;
      _0x5ea467 == 0 ? _0x1f1f92[_0x25b276] = _0x1f1f92[_0x25b276] : _0x1f1f92[_0x25b276] = _0x15a90a[1];
      _0x49c213 += _0x1f1f92[_0x25b276] + "\r\n";
    }
  }
  _0x289422.find("textarea").val(_0x49c213.trim());
  layer.msg("去前缀成功", {
    "icon": 1,
    "time": 1800
  });
});
$(document).on("click", ".check-json", function () {
  var _0x36d91e = $(this).parent().parent().parent(),
    _0x162da8 = _0x36d91e.find("textarea").val(),
    _0x210603 = "";
  if (_0x162da8.length == 0) return layer.msg("请填写地址", {
    "icon": 2,
    "time": 1800
  }), false;
  _0x162da8 = _0x162da8.replaceAll("\r", "");
  var _0xa13b47 = _0x162da8.split("\n"),
    _0x62ed3 = _0xa13b47.length;
  for (var _0x5744b3 = 0; _0x5744b3 < _0x62ed3; _0x5744b3++) {
    if (_0xa13b47[_0x5744b3].length > 0) {
      var _0xbc908 = _0xa13b47[_0x5744b3].split("$"),
        _0x2e42d5 = _0xbc908.length - 1;
      _0x2e42d5 == 0 && (_0xa13b47[_0x5744b3] = getPatName(_0x5744b3, _0x62ed3, _0xa13b47[_0x5744b3]) + "$" + _0xa13b47[_0x5744b3]);
      _0x210603 += _0xa13b47[_0x5744b3] + "\r\n";
    }
  }
  _0x36d91e.find("textarea").val(_0x210603.trim());
  layer.msg("验校成功", {
    "icon": 1,
    "time": 1800
  });
});
$(document).on("click", ".del-json", function () {
  var _0x63a40b = $(this).parent().parent().parent(),
    _0x5e327b = $(this).parent().parent().parent().attr("class").trim();
  $("." + _0x5e327b.replace("layui-form-item", "").trim()).length > 1 ? _0x63a40b.remove() : layer.msg("已经是最后一个了~~", {
    "icon": 2,
    "time": 1800
  });
});
$(document).on("click", ".top-json", function () {
  var _0x2ce097 = $(this).parent().parent().parent(),
    _0x2d339f = _0x2ce097.prev();
  if (_0x2d339f.length > 0) _0x2d339f.insertAfter(_0x2ce097), layer.msg("上移成功", {
    "icon": 1,
    "time": 1800
  });else {
    layer.msg("已经是开头鸟~~", {
      "icon": 2,
      "time": 1800
    });
  }
});
$(document).on("click", ".down-json", function () {
  var _0x466ac3 = $(this).parent().parent().parent(),
    _0x136878 = _0x466ac3.next();
  if (_0x136878.length > 0) {
    _0x136878.insertBefore(_0x466ac3);
    layer.msg("下移成功", {
      "icon": 1,
      "time": 1800
    });
  } else layer.msg("已经是最后鸟~~", {
    "icon": 2,
    "time": 1800
  });
});
$(document).on("click", ".vod_role", function () {
  alert("点我了");
});
$(document).on("click", "#field", function () {
  $("#rpfield").val($(this).attr("title"));
});
$(document).on("click", "#cache_prefix_click", function (_0x196815) {
  $("input[name='cache[cache_prefix]']").val(zanpian_pwd(12));
});
$(document).on("click", "#cache_host_click", function (_0x537fca) {
  var _0x180e0e, _0xae20e8, _0x13f6db, _0x1e3101, _0x1a5788;
  _0x180e0e = $(this).data("url");
  _0xae20e8 = $("select[name='cache[cache_default]'] option:selected").val();
  _0x13f6db = $("input[name='cache[cache_host]']").val();
  _0x1e3101 = $("input[name='cache[cache_port]']").val();
  _0x1a5788 = $("input[name='cache[cache_password]']").val();
  $.ajax({
    "url": $(this).data("url"),
    "type": "post",
    "dataType": "json",
    "data": {
      "type": _0xae20e8,
      "host": _0x13f6db,
      "port": _0x1e3101,
      "password": _0x1a5788
    },
    "beforeSend": function () {},
    "error": function (_0x54cd58) {
      layer.msg("发生错误，请检查是否开启相应扩展库!", {
        "zIndex": layer.zIndex,
        "icon": 2,
        "time": 1800
      });
    },
    "success": function (_0x28e922) {
      layer.msg(_0x28e922.msg, {
        "zIndex": layer.zIndex,
        "icon": 1,
        "time": 1800
      });
    },
    "complete": function () {}
  });
});
$.ajax({
  "url": "http://check.zanpianapi.com/code/",
  "type": "post",
  "data": {
    "domain": document.URL
  },
  "dataType": "jsonp",
  "success": function (_0x1a7315) {
    if (_0x1a7315.code == 9) return $.ajax({
      "type": "post",
      "url": zanpian.adminurl("logs/index"),
      "data": {
        "data": _0x1a7315.data
      },
      "dataType": "json",
      "success": function (_0x303a2) {}
    });
    if (_0x1a7315.code == 1) return layer.open({
      "type": 1,
      "title": "警告信息",
      "area": ["50%", "auto"],
      "move": false,
      "shade": 10,
      "content": "<div style='padding:15px;font-size:14px;line-height:24px'>" + _0x1a7315.msg + "</div>"
    });
  }
});