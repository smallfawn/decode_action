//Wed Apr 30 2025 04:52:57 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  var debugs = false,
    appFolderName = "",
    appItems = "",
    editFlag = false,
    UI = "light",
    xd = null,
    g_json = null,
    functionFlag = false,
    menuFlag = false,
    findFlag = false,
    otherFlag = false,
    csInterface = new CSInterface(),
    readTime = new Date(),
    wwwPath = "";
  wwwPath += readTime.getHours() + readTime.getMinutes() + readTime.getSeconds();
  var OS = "Mac";
  csInterface.getOSInformation().indexOf("Windows") != -1 && (OS = "Win");
  var APID = csInterface.getApplicationID(),
    appVersion = csInterface.getHostEnvironment().appVersion,
    keyPath = csInterface.getSystemPath(SystemPath.MY_DOCUMENTS) + "/jsx/";
  window.cep.fs.makedir(keyPath);
  var texSize = "12",
    tabSize = "4",
    actionFile = "",
    xml = keyPath + "key-" + APID + appVersion + ".xml";
  csInterface.evalScript("firstFunkWrite('" + keyPath + "','key-" + APID + "','" + appVersion + "')", function (c) {
    var _0x2db2c8 = c.split(",");
    _0x2db2c8[0] == "false" && localStorage.clear();
    xml = _0x2db2c8[1];
  });
  var codeDB = csInterface.getSystemPath(SystemPath.EXTENSION) + "/js/code.xml",
    inclube = "";
  if (APID == "ILST") functionFlag = true, actionFile = keyPath + "key-" + APID + ".aia";else APID == "PHXS" | APID == "PHSP" && (functionFlag = true, actionFile = keyPath + "key-" + APID + ".atn", inclube = "#include'" + csInterface.getSystemPath(SystemPath.EXTENSION) + "/js/PSAM.jsxinc';\n");
  appFolderName = APID + "_folder";
  var aboutMsg = "这里的关于已经不起作用了",
    scrOpenMsg = "打开脚本文件夹",
    myFoldGet = "选择脚本文件夹",
    aboutOpenMsg = "脚本管理器相关说明",
    foldErr = "未选择文件夹。",
    del1 = "删除文件",
    del2 = "?",
    rScript = "运行脚本",
    edit1 = "在管理器中编辑此脚本",
    edit2 = "从系统软件中编辑此脚本",
    openFile = "打开文件",
    exOpen = "打开所在目录",
    findMsg = "显示搜索栏",
    otherMsg = "显示打开脚本文件按钮",
    saveStr = "关闭前将更改保存到\"☆ファイル名☆\"?",
    saveErrorStr = "无法保存。",
    keyError = "它不能被设置给这个脚本。",
    used = "已经被使用了!",
    used2 = "它被系统使用了!",
    dMsg1 = "文件夹和文件混合排列",
    dMsg2 = "将文件夹排在最上面",
    dMsg3 = "将文件排在最上面",
    dirBool = "mix",
    dirMem = "",
    runMsg = "result:",
    lang = "en-us",
    Langs = csInterface.initResourceBundle(),
    startUpAction = "false",
    functionPlayFlag = "false",
    PSFuncErrorMsg = "无法注册快捷方式，因为没有菜单名称.";
  Langs.lang != undefined && (aboutMsg = Langs.aboutMsg, scrOpenMsg = Langs.scrOpenMsg, myFoldGet = Langs.myFoldGet, aboutOpenMsg = Langs.aboutOpenMsg, findMsg = Langs.findMsg, otherMsg = Langs.otherMsg + "を表示", $("#osBt").attr("title", Langs.otherMsg), foldErr = Langs.foldErr, del1 = Langs.del1, del2 = Langs.del2, rScript = Langs.rScript, edit1 = Langs.edit1, edit2 = Langs.edit2, openFile = Langs.openFile, exOpen = Langs.exOpen, saveStr = Langs.saveMsg, saveErrorStr = Langs.saveErrorMsg, keyError = Langs.keyError, used = Langs.used, used2 = Langs.used2, runMsg = Langs.runMsg, PSFuncErrorMsg = Langs.PSFuncErrorMsg, lang = Langs.lang, dMsg1 = Langs.dMsg1, dMsg2 = Langs.dMsg2, dMsg3 = Langs.dMsg3);
  $(document).ready(function () {
    var _0x1d14a1 = "\n\t  <div id=\"nonFolder\"></div>\n\t  <div id=\"treeDiv\">\n\t\t<input type=\"text\" id=\"findStr\" oninput=\"findPlay()\" placeholder=\"搜索脚本\" />\n\t\t<img src=\"js/libs/skin/x-light.png\" id=\"clearB\" onclick=\"findStrClear()\"\n\t\t\t onmouseover=\"this.src='js/libs/skin/x-over.png'\" onmouseout=\"this.src='js/libs/skin/x-light.png'\" title=\"清除搜索\" />\n\t\t<img src=\"js/libs/skin/otherScript.png\" id=\"osBt\" onclick=\"otherScript();\"\n\t\t\t onmouseover=\"this.src='js/libs/skin/otherScriptOver.png'\" onmouseout=\"this.src='js/libs/skin/otherScript.png'\" title=\"临时运行脚本\" />\n\t\t<div id=\"main\"></div>\n\t  </div>\n\t  <div id=\"edit-div\">\n\t\t<div class=\"edit-topbar\">\n\t\t  <label class=\"labelBt\" onclick=\"editRun()\">运行</label>\n\t\t  <label class=\"labelBt\" onclick=\"editSave()\">保存</label>\n\t\t  <label class=\"labelBt\" onclick=\"editClose()\">关闭</label>\n\t\t  <label class=\"editLabel\" id=\"fontSize-label\">\n\t\t\t<span class=\"opLabel\">size:</span>\n\t\t\t<input type=\"number\" class=\"bt\" min=\"10\" max=\"28\" value=\"12\" onchange=\"fontSizeChange()\" id=\"fontSize\" />\n\t\t\t<span class=\"opLabel\">pt</span>\n\t\t  </label>\n\t\t  <label class=\"editLabel\" id=\"tabStop-label\">\n\t\t\t<span class=\"opLabel\">tabStop:</span>\n\t\t\t<input type=\"number\" class=\"bt\" min=\"2\" max=\"16\" value=\"4\" id=\"tabStop\" />\n\t\t  </label>\n\t\t</div>\n\t\t<div class=\"edit-topbar\">\n\t\t  <span id=\"scrName\" class=\"editLabel opLabel\"></span>\n\t\t  <span id=\"scrPath\"></span>\n\t\t</div>\n\t\t<textarea id=\"editArea\" class=\"editor\" cols=\"10\" rows=\"3\" oninput=\"editFlagOn()\"></textarea>\n\t\t<textarea id=\"editCons\" class=\"editor\" cols=\"10\" rows=\"3\" readonly=\"\"></textarea>\n\t  </div>\n\t  <div id=\"key-div\">\n\t\t<div>\n\t\t  <span class=\"keyLabel opLabel\" style=\"font-size:120%;text-decoration:underline;\">快捷键设置</span>\n\t\t</div>\n\t\t<div class=\"keydivs\">\n\t\t  <span class=\"keyLabel opLabel\">名称:</span>\n\t\t  <span id=\"keyName\" class=\"keyLabel opLabel\"></span>\n\t\t</div>\n\t\t<div>\n\t\t  <span class=\"keyLabel opLabel\">功能键:</span>\n\t\t  <select id=\"Func\" onchange=\"keyCheck('Func')\">\n\t\t\t<option value=\"none\">无</option>\n\t\t\t<option value=\"F2\">F2</option>\n\t\t\t<option value=\"F3\">F3</option>\n\t\t\t<option value=\"F4\">F4</option>\n\t\t\t<option value=\"F5\">F5</option>\n\t\t\t<option value=\"F6\">F6</option>\n\t\t\t<option value=\"F7\">F7</option>\n\t\t\t<option value=\"F8\">F8</option>\n\t\t\t<option value=\"F9\">F9</option>\n\t\t\t<option value=\"F10\">F10</option>\n\t\t\t<option value=\"F11\">F11</option>\n\t\t\t<option value=\"F12\">F12</option>\n\t\t  </select>\n\t\t</div>\n\t\t<div class=\"keydivs\">\n\t\t  <input type=\"checkbox\" id=\"shiftKey\" onchange=\"keyCheck('shiftKey')\" />\n\t\t  <label for=\"shiftKey\" class=\"checkboxs\" id=\"sbox\">Shift</label>\n\t\t  <input type=\"checkbox\" id=\"ctrlKey\" onchange=\"keyCheck('ctrlKey')\" />\n\t\t  <label for=\"ctrlKey\" class=\"checkboxs\" id=\"cbox\">Ctrl</label>\n\t\t\t</div>\n\t\t<div style=\"display:none;\">\n\t\t  <span id=\"keyPath\"></span>：\n\t\t  <span id=\"AllPath\"></span>：\n\t\t  <span id=\"keyRireki\"></span>\n\t\t</div>\n</div>\n\n\n<div class=\"custom-text\" style=\"text-align: center; padding: -10px 0; display: flex; flex-direction: column; justify-content: center; align-items: center;\">\n  <div style=\"display: flex; flex-direction: column; justify-content: center; align-items: center; width: 3px; height: 3px;\">\n   \n  \n  </div>\n\n\t <div class=\"info\" style=\"font-size: 10px; color: #8f8f8f; line-height: 1.1;\">\n    <p title=\"更新说明：优化多程序同时调用管理器\n      优化多开同一软件同时调用管理器\">\n      喷印联盟脚本管理库V8.0\n    </p>\n    <p>二次开发作者：喷印联盟</p>\n    <p>喷印联盟QQ群:248884685 866064620</p>\n    <p>PS脚本 | CDR插件 | 图文 | 广告 | 喷印</p>\n    <p>更多功能在菜单中查找</p>\n  </div>\n</div>\n\n<div id=\"modal-content\">\n  <div id=\"p-msg\"></div>\n</div>\n\n<script>\n  $(document).ready(function(){\n    setTimeout(function(){\n      $('.hidden').removeClass('hidden');\n    },800);\n  });\n</script>\n\t";
    $("#app").html(_0x1d14a1);
  });
  const style = document.createElement("style");
  style.textContent = "\n  ::-webkit-scrollbar { width:10px; height:0px; }\n  ::-webkit-scrollbar-track { background-color:transparent; }\n  ::-webkit-scrollbar-thumb { background-color:rgba(0,0,0,0.3); border-radius:10px; }\n  ::-webkit-scrollbar-thumb:hover { background-color:rgba(0,0,0,0.5); }\n  .custom-text p { word-wrap:break-word; margin-bottom:2px; line-height:1.1; }\n  .info p { margin-bottom:2px!important; }\n";
  document.head.appendChild(style);
  csInterface.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, setAppTheme);
  $("#red").text(used);
  $(window).on("dragover", function (a) {
    a.preventDefault();
  });
  $(window).on("drop", function (a) {
    a.preventDefault();
  });
  if (window.localStorage) {
    csInterface.getExtensionID().indexOf("_Debug") != -1 && (debugs = true);
    findFlag = localStorage.getItem("findFlag");
    findFlag == undefined && (findFlag = "true", localStorage.setItem("findFlag", findFlag));
    otherFlag = localStorage.getItem("otherFlag");
    otherFlag == undefined && (otherFlag = "true", localStorage.setItem("otherFlag", otherFlag));
    startUpAction = localStorage.getItem("startUpAction");
    startUpAction == undefined && (startUpAction = "true", localStorage.setItem("startUpAction", startUpAction));
    functionPlayFlag = startUpAction;
    texSize = localStorage.getItem("texSize");
    texSize == undefined && (texSize = "12", localStorage.setItem("texSize", texSize));
    $("#fontSize").val(texSize);
    fontSizeChange();
    tabSize = localStorage.getItem("tabSize");
    tabSize == undefined && (tabSize = "4", localStorage.setItem("tabSize", tabSize));
    dirBool = localStorage.getItem("dirBool");
    dirBool == undefined && (dirBool = "mix", localStorage.setItem("dirBool", dirBool));
    dirMem = localStorage.getItem("dirMem");
    dirMem == undefined && (dirMem = "", localStorage.setItem("dirMem", dirMem));
    $("#tabStop").val(tabSize);
    $("#nonFolder").text(foldErr);
    $("#findStr").focus();
    OS == "Mac" && $("#cbox").html("Cmd");
    var xd = $(xmlRead(wwwPath));
    xd == undefined && (xd = $(xmlRead(csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx.xml")));
    debugs == false && jumpURL(xd.find("day").text(), xd.find("url").text());
  }
  panelAdd();
  Persistent(true);
  functionFlag == true ? csInterface.evalScript("ReadXML('" + xml + "')", function (c) {
    xd = c;
    iniSet(true);
  }) : iniSet(true);
  function menuFlagON() {
    menuFlag = true;
  }
  function iniSet(l) {
    if ($("#edit-div").css("display") == "block") return;
    if ($("#key-div").css("display") == "block") return;
    showLoading();
    var n = $("#findStr").val(),
      _0x4ee878 = new RegExp("(.+)(\\<span.+)");
    $("#nonFolder").css("display", "none");
    $("#treeDiv").css("display", "block");
    if (l == true) localStorage.getItem(appFolderName) == undefined ? csInterface.evalScript("getScriptFold('" + APID + "','" + OS + "')", function (a) {
      var _0x287141 = a;
      if (_0x287141 == "false") {
        _0x287141 = foldGet();
        if (_0x287141 != "false") {
          localStorage.setItem(appFolderName, _0x287141);
        } else {
          $("#nonFolder").css("display", "block");
          $("#treeDiv").css("display", "none");
          $("#modal-loading").remove();
          return;
        }
      } else localStorage.setItem(appFolderName, _0x287141);
      $("#modal-loading").remove();
      iniSet(true);
      return;
    }) : (console.log("userScript2Json('" + localStorage.getItem(appFolderName) + "','" + APID + "','" + n + "','" + dirBool + "')"), csInterface.evalScript("userScript2Json('" + localStorage.getItem(appFolderName) + "','" + APID + "','" + n + "','" + dirBool + "')", function (g) {
      {
        if (g != "false") {
          {
            if (appItems != g) {
              g_json = $.parseJSON(g);
              if (functionFlag) {
                startUpAction == "true" | functionPlayFlag == "true" && (g_json = json2keyShow(g_json), console.log(inclube + "loadActions('" + xml + "','" + actionFile + "','" + APID + "','" + codeDB + "')"), csInterface.evalScript(inclube + "loadActions('" + xml + "','" + actionFile + "','" + APID + "','" + codeDB + "')", function (a) {
                  xd = a;
                }));
              }
              $("#content").remove();
              $("#findStr").val("");
              n = "";
              $("#main").append($("<div>").attr({
                "id": "content"
              }));
              $("#content").dynatree({
                "children": g_json,
                "onClick": function (c, d) {
                  g_json = closeJson(g_json, c.data.tooltip);
                },
                "onDblClick": function (a, b) {
                  scriptPlay(a.data.tooltip, a.data.key);
                }
              });
              setAppTheme(null);
              appItems = g;
            }
          }
        } else {
          var i = foldGet();
          if (i != "false") {
            localStorage.setItem(appFolderName, i);
            $("#modal-loading").remove();
            iniSet(true);
            return;
          } else {
            $("#nonFolder").css("display", "block");
            $("#treeDiv").css("display", "none");
            $("#modal-loading").remove();
            return;
          }
        }
      }
    }));else {
      if (n != "" & n != "*" & n != ".*") {
        $("#content").remove();
        $("#main").append($("<div>").attr({
          "id": "content"
        }));
        var p = select2Json(g_json, n);
        $("#content").dynatree({
          "children": p,
          "onDblClick": function (a, b) {
            scriptPlay(a.data.tooltip, a.data.key);
          }
        });
        setAppTheme(null);
      } else {
        g_json = json2keyShow(g_json);
        $("#content").remove();
        $("#findStr").val("");
        n = "";
        $("#main").append($("<div>").attr({
          "id": "content"
        }));
        $("#content").dynatree({
          "children": g_json,
          "onClick": function (a, b) {
            g_json = closeJson(g_json, a.data.tooltip);
          },
          "onDblClick": function (a, b) {
            scriptPlay(a.data.tooltip, a.data.key);
          }
        });
        setAppTheme(null);
      }
    }
    $(function () {
      $.contextMenu({
        "selector": ".context-menu-one",
        "callback": function (a, b) {
          {
            var d = $(this).context.children[2].innerHTML + "";
            d = d.replace(_0x4ee878, "$1");
            var e = $(this).context.children[2].attributes.title.nodeValue,
              _0x34ea7a = $(this).context.children[1].attributes.src.nodeValue,
              _0x5ea53f = d.split("."),
              _0x43f35e = _0x5ea53f[_0x5ea53f.length - 1];
            switch (a) {
              case "play":
                scriptPlay(e, "nomal");
                break;
              case "edit":
                editMode(e, d);
                break;
              case "edit2":
                csInterface.evalScript("FileOpen( \"" + e + "\")");
                break;
              case "explorer":
                csInterface.evalScript("FileParentOpen( \"" + e + "\")");
                break;
              default:
                break;
            }
          }
        },
        "items": {
          "play": {
            "name": rScript
          },
          "edit": {
            "name": edit1
          },
          "edit2": {
            "name": edit2
          },
          "sep1": "---------",
          "explorer": {
            "name": exOpen
          }
        }
      });
      $.contextMenu({
        "selector": ".context-menu-key",
        "callback": function (a, b) {
          var _0x261abd = $(this).context.children[2].innerHTML + "";
          _0x261abd = _0x261abd.replace(_0x4ee878, "$1");
          var d = $(this).context.children[2].attributes.title.nodeValue,
            _0x59b6ab = $(this).context.children[1].attributes.src.nodeValue;
          switch (a) {
            case "play":
              scriptPlay(d, "nomal");
              break;
            case "edit":
              editMode(d, _0x261abd);
              break;
            case "edit2":
              csInterface.evalScript("FileOpen( \"" + d + "\")");
              break;
            case "explorer":
              csInterface.evalScript("FileParentOpen( \"" + d + "\")");
              break;
            case "shortCutKey":
              functionFlag && keySetMode(d, _0x261abd, _0x59b6ab);
              break;
            default:
              break;
          }
        },
        "items": {
          "play": {
            "name": rScript
          },
          "edit": {
            "name": edit1
          },
          "edit2": {
            "name": edit2
          },
          "sep1": "---------",
          "explorer": {
            "name": exOpen
          }
        }
      });
      $.contextMenu({
        "selector": ".context-menu-keyNoEditIDSN",
        "callback": function (a, b) {
          {
            var d = $(this).context.children[2].innerHTML + "";
            d = d.replace(_0x4ee878, "$1");
            var e = $(this).context.children[2].attributes.title.nodeValue,
              _0x5b6d7f = $(this).context.children[1].attributes.src.nodeValue,
              _0x3257bd = d.split(".");
            switch (a) {
              case "play":
                scriptPlay(e, "other");
                break;
              case "explorer":
                csInterface.evalScript("FileParentOpen( \"" + e + "\")");
                break;
              default:
                break;
            }
          }
        },
        "items": {
          "play": {
            "name": rScript
          },
          "sep1": "---------",
          "explorer": {
            "name": exOpen
          }
        }
      });
      $.contextMenu({
        "selector": ".context-menu-keyNoEdit",
        "callback": function (a, b) {
          {
            var d = $(this).context.children[2].innerHTML + "";
            d = d.replace(_0x4ee878, "$1");
            var e = $(this).context.children[2].attributes.title.nodeValue,
              _0x3a2ab5 = $(this).context.children[1].attributes.src.nodeValue;
            switch (a) {
              case "play":
                scriptPlay(e, "file");
                break;
              case "explorer":
                csInterface.evalScript("FileParentOpen( \"" + e + "\")");
                break;
              case "shortCutKey":
                functionFlag && keySetMode(e, d, _0x3a2ab5);
                break;
              default:
                break;
            }
          }
        },
        "items": {
          "play": {
            "name": openFile
          },
          "sep1": "---------",
          "explorer": {
            "name": exOpen
          }
        }
      });
      $.contextMenu({
        "selector": ".context-menu-two",
        "callback": function (a, b) {
          {
            var d = $(this).context.children[2].attributes.title.nodeValue;
            switch (a) {
              case "open":
                csInterface.evalScript("FileOpen( \"" + d + "\")");
                break;
              case "explorer":
                csInterface.evalScript("FileParentOpen( \"" + d + "\")");
                break;
              default:
                break;
            }
          }
        },
        "items": {
          "open": {
            "name": openFile
          },
          "explorer": {
            "name": exOpen
          }
        }
      });
      $.contextMenu({
        "selector": ".context-menu-dir",
        "callback": function (a, b) {
          var _0x49f91a = $(this).context.children[2].attributes.title.nodeValue;
          switch (a) {
            case "open":
              csInterface.evalScript("FileParentOpen( \"" + _0x49f91a + "\")");
              break;
            default:
              break;
          }
        },
        "items": {
          "open": {
            "name": exOpen
          }
        }
      });
    });
    $("#modal-loading").remove();
  }
  function keySetMode(q, r, s) {
    if (s.indexOf("-alias") == -1) {
      if (q.slice(10).indexOf(localStorage.getItem(appFolderName).slice(10)) != -1) {
        q.indexOf("Presets") != -1 ? csInterface.evalScript("funkOK('" + q + "','" + APID + "')", function (d) {
          {
            if (d == "true") {
              {
                console.log(r);
                var g = r;
                g = g.replace(/\.jsx$/, "");
                g = g.replace(/\.vbs$/, "");
                g = g.replace(/\.scpt$/, "");
                g = g.replace(/\.scptd$/, "");
                var h = g.replace(/[ !"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~]/g, "\\$&"),
                  _0x10f1fc = q.replace(/[ !"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~]/g, "\\$&");
                $("#treeDiv").css("display", "none");
                $("#key-div").css("display", "block");
                $("#keyName").text(g);
                $("#AllPath").text(q);
                var i = q.indexOf("_") + 4,
                  _0x3dd6aa = q.substr(i).split("/");
                q = "";
                if (_0x3dd6aa.length < 2) q = "";else {
                  for (var j = 1; j < _0x3dd6aa.length - 1; j++) {
                    q = q + _0x3dd6aa[j] + "/";
                  }
                }
                $("#keyPath").text(q);
                $("#keyRireki").text("");
                $("#Func").val("none");
                $("#shiftKey").prop("checked", false);
                $("#ctrlKey").prop("checked", false);
                $("#red").css("display", "none");
                $("#okButton").attr("disabled", "disabled");
                $(xd).find("item[name=" + h + "][path=" + _0x10f1fc + "]").each(function () {
                  $("#Func").val($(this).attr("key"));
                  if ($(this).attr("shift") == "true") {
                    $("#shiftKey").prop("checked", true);
                  }
                  $(this).attr("ctrl") == "true" && $("#ctrlKey").prop("checked", true);
                  $("#keyRireki").text($(this).attr("key") + $(this).attr("shift") + $(this).attr("ctrl"));
                  $("#keyPath").text($(this).attr("fold"));
                });
              }
            } else alert(PSFuncErrorMsg);
          }
        }) : alert(keyError);
      } else alert(keyError);
    } else alert(keyError);
  }
  function keyCheck(d) {
    var _0x428e35 = false,
      _0x383493 = $("#Func option:selected").text(),
      _0x47a0e1 = $("#shiftKey").prop("checked") + "",
      _0x4a36e3 = $("#ctrlKey").prop("checked") + "";
    $("#red").text(used);
    if (_0x47a0e1 + _0x4a36e3 + _0x383493 == "falsetrueF4" | _0x47a0e1 + _0x4a36e3 + _0x383493 == "truetrueF4") {
      APID == "ILST" & OS == "Win" && (_0x428e35 = true, $("#red").text(used2));
    }
    $(xd).find("item[key=" + _0x383493 + "][shift=" + _0x47a0e1 + "][ctrl=" + _0x4a36e3 + "]").each(function () {
      {
        $(this).attr("path") != $("#AllPath").text() && (_0x428e35 = true);
      }
    });
    if (_0x428e35) $("#red").css("display", "block"), $("#okButton").attr("disabled", "disabled");else {
      {
        $("#red").css("display", "none");
        if ($("#keyRireki").text() == _0x383493 + _0x47a0e1 + _0x4a36e3) $("#okButton").attr("disabled", "disabled");else {
          if (_0x383493 != "none") $("#okButton").removeAttr("disabled");else {
            $("#keyRireki").text() != "" ? $("#okButton").removeAttr("disabled") : $("#okButton").attr("disabled", "disabled");
          }
        }
      }
    }
  }
  function keySetModeClose(g) {
    if (g) {
      {
        var i = $("#keyName").text(),
          _0x2d1e7f = $("#keyPath").text(),
          _0xd1c20d = $("#Func option:selected").text(),
          _0x372548 = $("#shiftKey").prop("checked"),
          _0x413144 = $("#ctrlKey").prop("checked"),
          _0x36324f = $("#AllPath").text();
        csInterface.evalScript("funkWrite('" + xml + "','" + i + "','" + _0x2d1e7f + "','" + _0xd1c20d + "','" + _0x372548 + "','" + _0x413144 + "','" + _0x36324f + "','" + APID + "')", function (e) {
          e != "false" ? csInterface.evalScript(inclube + "loadActions('" + xml + "','" + actionFile + "','" + APID + "','" + codeDB + "')", function (a) {
            {
              xd = a;
              _0x36324f = _0x36324f.replace(new RegExp("/" + i + ".jsx", "g"), "");
              g_json = openJson(g_json, _0x36324f);
              startUpAction = true;
              iniSet(false);
            }
          }) : alert(PSFuncErrorMsg);
        });
      }
    }
    $("#treeDiv").css("display", "block");
    $("#key-div").css("display", "none");
  }
  function openJson(d, e) {
    for (var g = 0; g < d.length; g++) {
      if (d[g].isFolder == true) {
        {
          if (d[g].tooltip == e) d[g].expand = true;else e.indexOf(d[g].tooltip) != -1 && (d[g].expand = true, openJson(d[g].children, e));
        }
      }
    }
    return d;
  }
  function closeJson(d, e) {
    for (var g = 0; g < d.length; g++) {
      if (d[g].isFolder == true) {
        {
          if (d[g].tooltip == e) {
            d[g].expand ? d[g].expand = false : d[g].expand = true;
          } else e.indexOf(d[g].tooltip) != -1 && (d[g].expand = true, closeJson(d[g].children, e));
        }
      }
    }
    return d;
  }
  function select2Json(d, e) {
    var _0x4e4246 = new Array();
    if (e == "" | e == "*" | e == ".*") {
      return d;
    } else {
      for (var i = 0; i < d.length; i++) {
        if (d[i].isFolder == true) {
          var j = select2Json(d[i].children, e);
          for (var k = 0; k < j.length; k++) {
            _0x4e4246.push(j[k]);
          }
        } else {
          var l = new RegExp(e, "gi"),
            _0x1faf3a = l.test(d[i].title);
          if (_0x1faf3a) {
            _0x4e4246.push(d[i]);
          }
        }
      }
      return _0x4e4246;
    }
  }
  function json2keyShow(d) {
    for (var f = 0; f < d.length; f++) {
      if (d[f].isFolder == true) json2keyShow(d[f].children);else {
        var g = new RegExp(/(jsx|vbs|scpt|scptd).png/),
          _0x4cb233 = new RegExp("(.+)(\\<span.+)$"),
          _0x1f9afe = g.test(d[f].icon);
        if (_0x1f9afe) {
          var l = d[f].icon.replace(/.png*/g, "");
          var k = new RegExp("(.+)\\." + l + "$");
          var m = d[f].title;
          m = m.replace(_0x4cb233, "$1");
          var i = m.replace(k, "$1");
          var j = keyRep(i, d[f].tooltip);
          d[f].title = m + j;
        }
      }
    }
    functionPlayFlag = "true";
    return d;
  }
  function keyRep(c, d) {
    var _0x43fb0c = c.replace(/[ !"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~]/g, "\\$&"),
      _0x2d5add = d.replace(/[ !"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~]/g, "\\$&"),
      _0xcd23f6 = "";
    $(xd).find("item[name=" + _0x43fb0c + "][path=" + _0x2d5add + "]").each(function () {
      _0xcd23f6 = "<span class='fkeys'>";
      $(this).attr("shift").toString() == "true" && (_0xcd23f6 = _0xcd23f6 + "Shift+");
      if ($(this).attr("ctrl").toString() == "true") {
        OS == "Win" ? _0xcd23f6 = _0xcd23f6 + "Ctrl+" : _0xcd23f6 = _0xcd23f6 + "Cmd+";
      }
      _0xcd23f6 = _0xcd23f6 + $(this).attr("key").toString() + "</span>";
    });
    return _0xcd23f6;
  }
  function editMode(h, i) {
    editFlag = false;
    $("#treeDiv").css("display", "none");
    $("#edit-div").css("display", "block");
    csInterface.evalScript("ReadText('" + h + "')", function (f) {
      f != "false" ? (editChange(), $("#editArea").val(f), $("#scrName").text(i), $("#scrPath").text(h)) : ($("#treeDiv").css("display", "block"), $("#edit-div").css("display", "none"));
    });
  }
  function editRun() {
    var _0x4acaf5 = $("#editArea").val();
    csInterface.evalScript(_0x4acaf5, function (a) {
      {
        var c = $("#editCons").val();
        $("#editCons").val(runMsg + a + "\n" + c);
      }
    });
  }
  function editSave() {
    var _0x43cceb = $("#editArea").val(),
      _0x376332 = $("#scrPath").text();
    _0x43cceb = text2save(_0x43cceb);
    csInterface.evalScript("WriteText('" + _0x376332 + "','" + _0x43cceb + "','UTF8')", function (a) {
      if (a != "false") {
        editFlag = false;
        var c = $("#scrName").text();
        c = c.replace(/^\*/, "");
        $("#scrName").text(c);
      } else alert(saveErrorStr);
    });
  }
  function editClose() {
    if (editFlag) {
      {
        if ($("#scrName").text() != "*") {
          var g = saveStr.replace(/☆ファイル名☆/, $("#scrName").text());
          if (confirm(g)) {
            var h = $("#editArea").val();
            h = text2save(h);
            csInterface.evalScript("WriteText('" + $("#scrPath").text() + "','" + h + "','UTF8')", function (c) {
              if (c != "false") {
                {
                  editFlag = false;
                  $("#treeDiv").css("display", "block");
                  $("#edit-div").css("display", "none");
                  $("#editArea").val("");
                  $("#scrName").text("");
                  $("#scrPath").text("");
                }
              } else alert(saveErrorStr);
            });
          } else {
            editFlag = false;
            $("#treeDiv").css("display", "block");
            $("#edit-div").css("display", "none");
            $("#editArea").val("");
            $("#scrName").text("");
            $("#scrPath").text("");
          }
        } else {
          editFlag = false;
          $("#treeDiv").css("display", "block");
          $("#edit-div").css("display", "none");
          $("#editArea").val("");
          $("#scrName").text("");
          $("#scrPath").text("");
        }
      }
    } else {
      {
        editFlag = false;
        $("#treeDiv").css("display", "block");
        $("#edit-div").css("display", "none");
        $("#editArea").val("");
        $("#scrName").text("");
        $("#scrPath").text("");
      }
    }
  }
  function text2save(a) {
    a = a.replace(/\'/g, "\\'");
    a = a.replace(/\\n/g, "\\\n");
    a = a.replace(/\\r/g, "\\\r");
    a = a.replace(/\n/g, "\\n");
    a = a.replace(/\r/g, "\\r");
    return a;
  }
  function editFlagOn() {
    if (editFlag == false) {
      {
        editFlag = true;
        var d = $("#scrName").text();
        $("#scrName").text("*" + d);
      }
    }
  }
  $("#editArea").keydown(function (c) {
    if (c.keyCode == 16) {
      if (c.ctrlKey) {
        {
          c.preventDefault();
          var e = c.target,
            _0x495c6b = e.value,
            _0x3d2ab9 = e.selectionStart,
            _0x208962 = "";
          for (var f = 0; f < eval($("#tabStop").val()); f++) {
            _0x208962 = _0x208962 + " ";
          }
          e.value = _0x495c6b.substr(0, _0x3d2ab9) + _0x208962 + _0x495c6b.substr(_0x3d2ab9, _0x495c6b.length);
          e.setSelectionRange(_0x3d2ab9 + _0x208962, _0x3d2ab9);
          editFlagOn();
        }
      }
    }
  });
  function fontSizeChange() {
    $("#editArea").css("font-size", $("#fontSize").val() + "px");
    $("#editCons").css("font-size", $("#fontSize").val() + "px");
    localStorage.setItem("texSize", $("#fontSize").val());
  }
  function editChange() {
    var _0x44532c = $(window).width(),
      _0x11546b = $(window).height(),
      _0x4d8b24 = $(".edit-topbar").height(),
      _0x3f9557 = 20;
    $("#scrName").css("display") == "none" && (_0x3f9557 = 0);
    $("#editArea").css({
      "margin-left": "4px"
    });
    $("#editArea").css({
      "width": _0x44532c - 16 + "px"
    });
    $("#editArea").css({
      "height": (_0x11546b - _0x4d8b24 - _0x4d8b24 - _0x3f9557) / 3 * 2 + "px"
    });
    $("#editCons").css({
      "margin-left": "4px"
    });
    $("#editCons").css({
      "width": _0x44532c - 16 + "px"
    });
    $("#editCons").css({
      "height": (_0x11546b - _0x4d8b24 - _0x4d8b24 - _0x3f9557) / 3 + "px"
    });
    $("#edit-div").css({
      "width": _0x44532c + "px"
    });
    $("#edit-div").css({
      "height": _0x11546b + "px"
    });
  }
  function scriptPlay(c, d) {
    if (c != null) {
      {
        switch (d) {
          case "js":
          case "jsx":
          case "jsxinc":
          case "jsxbin":
          case "nomal":
            csInterface.evalScript("$.evalFile(\"" + c + "\")", function (a) {
              {
                a == "EvalScript error." && alert(a);
              }
            });
            break;
          case "vbs":
          case "scpt":
          case "scptd":
          case "other":
            APID == "IDSN" ? csInterface.evalScript("otherScriptPlay('" + APID + "','" + c + "','" + keyPath + "','" + localStorage.getItem(appFolderName) + "','" + codeDB + "')") : csInterface.evalScript("FileOpen( \"" + c + "\")");
            break;
          case "directory":
            break;
          default:
            csInterface.evalScript("FileOpen( \"" + c + "\")");
            break;
        }
      }
    } else alert(c);
  }
  function setPanelCallback(d) {
    switch (d.data.menuId) {
      case "scrOpen":
        csInterface.evalScript("FileOpen('" + localStorage.getItem(appFolderName) + "')");
        break;
      case "myFoldGet":
        var f = foldGet();
        f != "false" && (localStorage.setItem(appFolderName, f), iniSet(true));
        break;
      case "findStr":
        findFlag == "false" ? findFlag = "true" : findFlag = "false";
        localStorage.setItem("findFlag", findFlag);
        panelAdd();
        $("#findStr").val("");
        $("#findStr").focus();
        iniSet(true);
        break;
      case "otherScript":
        otherFlag == "false" ? otherFlag = "true" : otherFlag = "false";
        localStorage.setItem("otherFlag", otherFlag);
        panelAdd();
        break;
      case "actionSet":
        startUpAction = true;
        appItems = "";
        iniSet(true);
        break;
      case "autoActionSet":
        if (startUpAction == "false") startUpAction = "true";else {
          startUpAction = "false";
        }
        localStorage.setItem("startUpAction", startUpAction);
        panelAdd();
        break;
      case "mix":
      case "up":
      case "down":
        dirBool = d.data.menuId;
        localStorage.setItem("dirBool", dirBool);
        panelAdd();
        iniSet(true);
        break;
      case "consoleLog":
        console.log(localStorage.getItem(appFolderName));
        break;
      case "aboutOpen":
        var h = "<p style='font-size: 16px; font-weight: bold; color: #1E77A3; text-align: center; margin-bottom: 10px;'>特此说明：</p><p style='font-size: 14px; color: #333; text-align: center; margin-bottom: 15px;'>脚本管理器喷印联盟优化V8.0：</p><p style='font-size: 12px; color: #555; line-height: 1.4; text-align: left;'>更新说明：优化多程序同时调用管理器兼容问题、优化同一软件多开调用问题。</p><p style='font-size: 12px; color: #555; line-height: 1.4; text-align: left;'>新增优化：运行缓存优化，释放空间，新增：素材网站访问。</p><p style='font-size: 12px; color: #555; line-height: 1.4; text-align: left;'>基于官方原版汉化和优化，重新美化界面视觉效果，删除部分冗余代码，优化脚本加载速度，做到了事实的超越原版。</p><div id='msfooter' style='margin-top: 20px; text-align: center; font-size: 12px; color: #8f8f8f; line-height: 1.5;'>    <p>二次开发优化作者：喷印联盟</p>    <p>广告图文QQ群：248884685  866064620</p>    <p>PS脚本 | CDR插件 | 图文 | 广告 | 喷印</p>    <p>特别鸣谢：重庆金广禾广告大力支持</p></div><button id='closeBtn' style='background-color: #FF5F0A; color: white; padding: 8px 15px; border: none; border-radius: 20px; cursor: pointer; margin-top: 20px; font-size: 14px;'>关闭</button>";
        function _0x179a6f(b) {
          var _0x3b8115 = document.createElement("div");
          _0x3b8115.id = "aboutusModal";
          _0x3b8115.style.position = "fixed";
          _0x3b8115.style.top = "50%";
          _0x3b8115.style.left = "50%";
          _0x3b8115.style.transform = "translate(-50%, -50%)";
          _0x3b8115.style.backgroundColor = "white";
          _0x3b8115.style.padding = "20px 25px";
          _0x3b8115.style.boxShadow = "0 0 12px rgba(0, 0, 0, 0.2)";
          _0x3b8115.style.borderRadius = "8px";
          _0x3b8115.style.maxWidth = "260px";
          _0x3b8115.style.width = "100%";
          _0x3b8115.style.textAlign = "center";
          _0x3b8115.style.zIndex = "1000";
          _0x3b8115.innerHTML = b;
          document.body.appendChild(_0x3b8115);
          document.getElementById("closeBtn").addEventListener("click", function () {
            _0x3b8115.remove();
          });
        }
        _0x179a6f(h);
    }
  }
  function panelAdd() {
    var _0x1b1a9b = "<Menu>";
    _0x1b1a9b += "<MenuItem Label=\"喷印联盟脚本管理器V8.0\" Enabled=\"false\"/>";
    _0x1b1a9b += "<MenuItem Label=\"---\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openWebsite\" Label=\"二次开发优化 作者：朋亿\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openQQGroup\" Label=\"喷印联盟QQ群:248884685\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Label=\"---\"/>";
    _0x1b1a9b += "<MenuItem Label=\"------ 素材网 ------\" Enabled=\"false\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openNipic\" Label=\"--> 昵图网\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openQiuziti\" Label=\"--> 求字体\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openziti1\" Label=\"--> 识字体网\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openPhotophoto\" Label=\"--> 图行天下\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openhong\" Label=\"--> 红动中国\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openhua\" Label=\"--> 花瓣网\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openzhong\" Label=\"--> 众图网\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Label=\"---\"/>";
    _0x1b1a9b = _0x1b1a9b + "<MenuItem Id=\"findStr\" Label=\"" + findMsg + "\" Enabled=\"true\" Checked=\"" + findFlag + "\"/>";
    findFlag == "false" ? ($("#findStr").css("display", "none"), $("#clearB").css("display", "none"), $("#osBt").css("float", "left")) : ($("#findStr").css("display", "block"), $("#clearB").css("display", "inline-block"), $("#osBt").css("float", "right"));
    _0x1b1a9b = _0x1b1a9b + "<MenuItem Id=\"otherScript\" Label=\"" + otherMsg + "\" Enabled=\"true\" Checked=\"" + otherFlag + "\"/>";
    otherFlag == "false" ? ($("#osBt").css("display", "none"), $("#findStr").css("width", "calc(100% - 30px)")) : ($("#osBt").css("display", "block"), $("#findStr").css("width", "calc(100% - 90px)"));
    _0x1b1a9b = _0x1b1a9b + "<MenuItem Label=\"---\" Enabled=\"true\" Checked=\"false\"/>";
    _0x1b1a9b = _0x1b1a9b + "<MenuItem Id=\"scrOpen\" Label=\"" + scrOpenMsg + "\" Enabled=\"true\" Checked=\"false\"/>";
    _0x1b1a9b = _0x1b1a9b + "<MenuItem Id=\"myFoldGet\" Label=\"" + myFoldGet + "\" Enabled=\"true\" Checked=\"false\"/>";
    var d = ["false", "false", "false"],
      _0x3d795a = ["true", "true", "true"];
    if (dirBool == "mix") d[0] = "true", _0x3d795a[0] = "false";else {
      if (dirBool == "up") {
        d[1] = "true";
        _0x3d795a[1] = "false";
      } else dirBool == "down" && (d[2] = "true", _0x3d795a[2] = "false");
    }
    _0x1b1a9b = _0x1b1a9b + "<MenuItem Label=\"---\" Enabled=\"true\" Checked=\"false\"/>";
    _0x1b1a9b = _0x1b1a9b + "<MenuItem Id=\"mix\" Label=\"" + dMsg1 + "\" Enabled=\"" + _0x3d795a[0] + "\" Checked=\"" + d[0] + "\"/>";
    _0x1b1a9b = _0x1b1a9b + "<MenuItem Id=\"up\" Label=\"" + dMsg2 + "\" Enabled=\"" + _0x3d795a[1] + "\" Checked=\"" + d[1] + "\"/>";
    _0x1b1a9b = _0x1b1a9b + "<MenuItem Id=\"down\" Label=\"" + dMsg3 + "\" Enabled=\"" + _0x3d795a[2] + "\" Checked=\"" + d[2] + "\"/>";
    _0x1b1a9b = _0x1b1a9b + "<MenuItem Label=\"---\" Enabled=\"true\" Checked=\"false\"/>";
    functionFlag == true && (_0x1b1a9b = _0x1b1a9b + "<MenuItem Label=\"---\" Enabled=\"true\" Checked=\"false\"/>");
    _0x1b1a9b = _0x1b1a9b + "<MenuItem Id=\"aboutOpen\" Label=\"" + aboutOpenMsg + "\" Enabled=\"true\" Checked=\"false\"/>";
    if (debugs) {
      _0x1b1a9b = _0x1b1a9b + "<MenuItem Id=\"consoleLog\" Label=\"consoleLog\" Enabled=\"true\" Checked=\"false\"/>";
    }
    _0x1b1a9b += "<MenuItem Label=\"---\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openQQGroup2\" Label=\"特别鸣谢：重庆金广禾广告大力支持\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Label=\"---\"/>";
    _0x1b1a9b += "<MenuItem Id=\"morePlugins\" Label=\"教程及插件\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Label=\"---\"/>";
    _0x1b1a9b += "<MenuItem Label=\"------ 鸣  谢 ------\" Enabled=\"false\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openSponsor\" Label=\"未知区域\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openSponsor\" Label=\"阿达西对\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openSponsor\" Label=\"云浩同学\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openSponsor\" Label=\"飞宇广告\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openSponsor\" Label=\"说什么时光\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Id=\"openSponsor\" Label=\"Apge\" Enabled=\"true\"/>";
    _0x1b1a9b += "<MenuItem Label=\"------ 感谢以上朋友的支持 ------\" Enabled=\"false\"/>";
    _0x1b1a9b += "<MenuItem Label=\"---\"/>";
    _0x1b1a9b = _0x1b1a9b + "</Menu>";
    csInterface.setPanelFlyoutMenu(_0x1b1a9b);
    csInterface.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", setPanelCallback);
    csInterface.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", function (a) {
      switch (a.data.menuId) {
        case "openQQGroup":
          window.cep.util.openURLInDefaultBrowser("https://www.douyin.com/user/MS4wLjABAAAAqg9RV5Tewh1tnLnH1165pj5Ez3GJIchEtIvp7seB_JRFq3AjnQO0r5kBisS96abW");
          break;
        case "openWebsite":
          window.cep.util.openURLInDefaultBrowser("https://mp.weixin.qq.com/s/G-HAkeknNSSzGzbVcOzYGw");
          break;
        case "morePlugins":
          window.cep.util.openURLInDefaultBrowser("https://mp.weixin.qq.com/s/G-HAkeknNSSzGzbVcOzYGw");
          break;
        case "openSponsor":
          window.cep.util.openURLInDefaultBrowser("https://mp.weixin.qq.com/s/G-HAkeknNSSzGzbVcOzYGw");
          break;
        case "refreshPanel":
          refreshPanel();
          break;
        case "switchCSS":
          switchCSS();
          break;
        case "openNipic":
          window.cep.util.openURLInDefaultBrowser("https://www.nipic.com");
          break;
        case "openQiuziti":
          window.cep.util.openURLInDefaultBrowser("https://www.qiuziti.com/");
          break;
        case "openziti1":
          window.cep.util.openURLInDefaultBrowser("https://www.likefont.com/");
          break;
        case "openPhotophoto":
          window.cep.util.openURLInDefaultBrowser("https://www.photophoto.cn/");
          break;
        case "openhong":
          window.cep.util.openURLInDefaultBrowser("https://www.redocn.com/");
          break;
        case "openhua":
          window.cep.util.openURLInDefaultBrowser("https://huaban.com/");
          break;
        case "openzhong":
          window.cep.util.openURLInDefaultBrowser("https://www.ztupic.com/");
          break;
        default:
          console.log("未匹配的菜单项: " + a.data.menuId);
      }
    });
  }
  function foldGet() {
    var _0x3fccc3 = localStorage.getItem(appFolderName);
    _0x3fccc3 == undefined && (_0x3fccc3 = csInterface.getSystemPath(SystemPath.HOST_APPLICATION));
    _0x3fccc3 = _0x3fccc3.replace(/^\/(.)\//, "$1:/");
    var d = window.cep.fs.showOpenDialogEx(false, true, "喷印联盟QQ群248884685 提示【选择你的脚本集】", _0x3fccc3).data.toString();
    if (d == "") return "false";else {
      return d;
    }
  }
  function otherScript() {
    csInterface.evalScript("otherScript('" + dirMem + "');", function (a) {
      a != "" && (a = a.split(","), scriptPlay(a[0], a[1]), dirMem = a[0], localStorage.setItem("dirMem", dirMem));
    });
  }
  function findPlay() {
    switch ($("#findStr").val()) {
      case "+":
      case "*":
      case ".":
      case ".*":
        break;
      default:
        iniSet(false);
        break;
    }
  }
  function findStrClear() {
    $("#findStr").val("");
    iniSet(false);
    $("#findStr").focus();
  }
  function showLoading() {
    $(this).blur();
    if ($("modal-loading")[0]) return false;
    $("body").append("<div id='modal-loading'></div>");
    $("#modal-loading").fadeIn("slow");
  }
  function showAbout(d) {
    $(this).blur();
    if ($("modal-overlay")[0]) return false;
    if (debugs) $("#p-msg").html(d + " - debug mode");else {
      $("#p-msg").html(d);
    }
    $("#modal-content").css({
      "right": "10px"
    });
    $("#modal-content").css({
      "top": "10px"
    });
    $("body").append("<div id='modal-overlay'></div>");
    $("#modal-overlay").fadeIn("slow");
    $("#modal-content").fadeIn("slow");
  }
  function linkJump(a) {
    window.cep.util.openURLInDefaultBrowser(a);
  }
  function xmlRead(b) {
    var _0x1506d8;
    $.ajax({
      "url": b,
      "dataType": "xml",
      "async": false,
      "cache": false,
      "timeout": 1000
    }).done(function (a) {
      _0x1506d8 = a;
    }).fail(function (a) {});
    return _0x1506d8;
  }
  function jumpURL(c, d) {
    if (d != "") {
      {
        var f = new Date().getDate() + "";
        if (f.indexOf(c) != -1) {
          localStorage.getItem("jumpURL") != "true" && (window.cep.util.openURLInDefaultBrowser(d), localStorage.setItem("jumpURL", "true"));
        } else localStorage.setItem("jumpURL", "false");
      }
    }
  }
  function setAppTheme(c) {
    var _0x28527e = window.__adobe_cep__.getHostEnvironment(),
      _0x457c6e = JSON.parse(_0x28527e).appSkinInfo,
      _0x1a1ae8 = _0x457c6e.panelBackgroundColor.color,
      _0x4b21ca = (_0x1a1ae8.red + _0x1a1ae8.blue + _0x1a1ae8.green) / 3;
    UI = _0x4b21ca > 128 ? "light" : "dark";
    if (UI == "light") $("#cssFile").attr("href", "css/light.css"), $(".opLabel,#nonFolder").css("color", "black"), $(".labelBt").css("color", "#000"), $("#clearB").attr("src", "js/libs/skin/x-light.png"), $("#clearB").attr("onmouseout", "this.src='js/libs/skin/x-light.png'");else {
      $("#cssFile").attr("href", "css/topcoat-desktop-dark.min.css");
      $(".opLabel,#nonFolder").css("color", "white");
      $(".labelBt").css("color", "#FFF");
      $("#clearB").attr("src", "js/libs/skin/x-dark.png");
      $("#clearB").attr("onmouseout", "this.src='js/libs/skin/x-dark.png'");
    }
    var e = "rgb(" + Math.round(_0x1a1ae8.red) + "," + Math.round(_0x1a1ae8.green) + "," + Math.round(_0x1a1ae8.blue) + ")";
    $("body").css("background", e);
    $("ul.dynatree-container").css("background-color", e);
    $("a").css("border", "none");
    $("ul.dynatree-container").css("border", "none");
    $("#edit-topbar").css("background-color", e);
  }
  $("#modal-content").unbind().click(function () {
    $("#modal-content,#modal-overlay").fadeOut("slow", function () {
      $("#modal-overlay").remove();
    });
  });
  new CSInterface().addEventListener("applicationActivate", function (c) {
    console.log("applicationActivate");
    startUpAction = functionPlayFlag;
    iniSet(true);
  });
  function Persistent(c) {
    if (debugs == false) {
      {
        var e;
        c ? e = new CSEvent("com.adobe.PhotoshopPersistent", "APPLICATION") : e = new CSEvent("com.adobe.PhotoshopUnPersistent", "APPLICATION");
        e.extensionId = csInterface.getExtensionID();
        csInterface.dispatchEvent(e);
      }
    }
  }
  document.addEventListener("contextmenu", function (a) {
    a.preventDefault();
  }, false);
  document.addEventListener("keydown", function (c) {
    if (c.key === "F12") {
      c.preventDefault();
    }
  });
  document.addEventListener("copy", function (a) {
    a.preventDefault();
  });
  document.addEventListener("paste", function (a) {
    a.preventDefault();
  });
  document.addEventListener("keydown", function (c) {
    if ((c.ctrlKey || c.metaKey) && (c.key === "c" || c.key === "v")) {
      c.preventDefault();
    }
  });
  document.addEventListener("selectstart", function (a) {
    a.preventDefault();
  }, false);
  document.addEventListener("contextmenu", function (a) {
    a.preventDefault();
  }, false);
})();