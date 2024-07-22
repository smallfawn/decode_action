//Mon Jul 22 2024 06:14:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
'ui';

importClass(android["view"]["View"]);
importClass(android["graphics"]["Color"]);
var mdd = require("./amudt.js");
var aes = require("./aauets.js");
var 全_脚本标题 = "\u968F\u7F18\u6F02\u6D41\u74F6V1.0";
var 全_Q群 = "\u6682\u65E0";
var 全_作者 = "9944760";
var 全_任务 = "\u89C2\u770B\u89C6\u9891|\u5237\u6D3B\u8DC3\u5EA6";
var 日志引擎,
  脚本引擎,
  脚本监听 = ![],
  全_代码,
  tokenkey,
  devices = 取机器码(),
  音乐引擎;
ui["statusBarColor"](Color["parseColor"]("#fdfcf5"));
activity["getWindow"]()["getDecorView"]()["setSystemUiVisibility"](View["SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN"] | View["SYSTEM_UI_FLAG_LIGHT_STATUS_BAR"]);
登录界面();
function 登录界面() {
  ui["layout"](" <frame>\n            <vertical>\n                <vertical w=\"*\" h=\"*\" gravity=\"center\">\n                    <img id=\"yy\" src=\"file://images/tou.jpg\" gravity=\"center_vertical\" scaleType=\"fitXY\" w=\"80\" h=\"80\" circle=\"true\" />\n                    <card cardBackgroundColor=\"#808080\" alpha=\"0.8\" w=\"*\" h=\"48\" margin=\"10 20 10 10\" cardElevation=\"0\" >\n                        <card alpha=\"1\" margin=\"1 1 1 1\" w=\"*\" h=\"*\" cardElevation=\"2\" >\n                            <horizontal gravity=\"center_vertical\">\n                                <input id=\"code\" singleLine=\"true\" gravity=\"center\" hint=\"\u8BF7\u8F93\u5165\u5361\u5BC6...\" bg=\"#FFFFFF\" textSize=\"14sp\" layout_weight=\"1\" />\n                                <button id=\"\u8FDB\u5165\" h=\"*\" backgroundTint=\"#c9ee9e\" marginLeft=\"5\" text=\"\u8FDB\u5165\" textSize=\"15\" textStyle=\"bold\" cornerRadius=\"0\" textColor=\"#0f2000\" />\n                            </horizontal>\n                        </card>\n                    </card>\n                </vertical>\n            </vertical >\n        </frame >");
  ui["\u8FDB\u5165"]["on"]("click", () => {
    let _0x15231d = ui["code"]["getText"]();
    if (_0x15231d == "") {
      toastLog("\u8BF7\u586B\u5199\u5361\u5BC6!");
      return;
    }
    ;
    写配置("\u7F6A\u8FC7", "token", _0x15231d);
    加载界面();
  });
  ui["code"]["setText"](读配置("\u7F6A\u8FC7", "token", ""));
}
function 加载界面() {
  ui["layout"]("<frame>\n            <vertical>\n                <vertical w=\"*\" h=\"*\" gravity=\"center\">\n                    <img id=\"yy\" src=\"file://images/tou.jpg\" gravity=\"center_vertical\" scaleType=\"fitXY\" w=\"80\" h=\"80\" circle=\"true\" />\n                    <progressbar gravity=\"center_vertical\" />\n                    <text text=\"\u6B63\u5728\u521D\u59CB\u5316\u811A\u672C...\" textSize=\"16sp\" gravity=\"center\" />\n                </vertical>\n            </vertical >\n        </frame >");
  let _0x2b0372 = 读配置("\u7F6A\u8FC7", "token", "");
  setTimeout(function () {
    let _0x2332c5 = "";
    let _0x5e91c9 = 验证卡密(_0x2b0372, "verss", devices);
    if (_0x5e91c9) {
      let _0x16cc75 = keyaa(_0x2b0372);
      try {
        _0x2332c5 = aes["AES_Decrypt"](_0x5e91c9, _0x16cc75);
        全_代码 = _0x2332c5;
        tokenkey = _0x2b0372;
        toastLog("\u811A\u672C\u521D\u59CB\u5316\u6210\u529F\uFF01");
        功能界面();
      } catch (_0x111eb4) {
        log("\u521D\u59CB\u5316\u5931\u8D25\uFF01");
        登录界面();
      }
      ;
    } else {
      log("\u521D\u59CB\u53161\u5931\u8D25\uFF01");
      登录界面();
    }
    ;
  }, 2500);
}
function 功能界面() {
  ui["layout"]("<frame>\n            <vertical>\n                <appbar w=\"*\" h=\"auto\" bg=\"#ffffff\" >//\u6807\u9898\u680F\u80CC\u666F\u989C\u8272\n                    <toolbar id=\"toolbar\" title=\"\" marginTop=\"30\">\n                        <text layout_gravity=\"center\" textSize=\"20sp\" textColor=\"#000000\" text=\"{{\u5168_\u811A\u672C\u6807\u9898}}\" />\n                        <img id=\"yy\" src=\"file://images/tou.jpg\" layout_gravity=\"right\" scaleType=\"fitXY\" w=\"40\" h=\"40\" circle=\"true\" />\n                    </toolbar>\n                </appbar>\n                <TextView id=\"\u516C\u544A\u6807\u7B7E\" singleLine=\"true\" ellipsize=\"marquee\" focusable=\"true\" hint=\"\" textColor=\"#2E8B57\" textSize=\"16dp\" />\n                <tabs id=\"\u6807\u7B7E\u680F\" h=\"20\" bg=\"#ffffff\" /> //\u6807\u7B7E\u680F\u80CC\u666F\u989C\u8272\n                <viewpager id=\"\u5BFC\u822A\u680F\" >\n                    <frame>//\u7B2C\u4E00\u4E2A\u6807\u7B7E\u9875\u5934\n                        <vertical padding=\"16dp\">//\u5782\u76F4\u5E03\u5C40\u5934\n\n                            <card padding=\"2dp\" cardBackgroundColor=\"#808080\" alpha=\"0.8\" h=\"auto\" cardElevation=\"0\">//\u5782\u76F4\u5E03\u5C40\u5934\n                                <card alpha=\"1\" margin=\"1 1 1 1\" cardElevation=\"2\" >//\u5782\u76F4\u5E03\u5C40\u5934\n                                    <horizontal gravity=\"center_vertical\">\n                                        <Switch margin=\"12 0\" layout_weight=\"1\" id=\"\u65E0\u969C\u788D\u6743\u9650\" text=\"\u65E0\u969C\u788D\u6743\u9650\" textSize=\"15sp\" checked=\"{{auto.service != null}}\" />\n                                        <Switch margin=\"12 0\" layout_weight=\"1\" id=\"\u60AC\u6D6E\u7A97\u6743\u9650\" text=\"\u60AC\u6D6E\u7A97\u6743\u9650\" textSize=\"15sp\" checked=\"{{\u662F\u5426\u6709\u60AC\u6D6E\u7A97\u6743\u9650()}}\" />\n                                    </horizontal>\n                                </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                            </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                            <card marginTop=\"2dp\" cardBackgroundColor=\"#808080\" alpha=\"0.8\" h=\"auto\" cardElevation=\"0\">//\u5782\u76F4\u5E03\u5C40\u5934\n                                <card alpha=\"1\" margin=\"1 1 1 1\" cardElevation=\"2\" >//\u5782\u76F4\u5E03\u5C40\u5934\n                                    <horizontal gravity=\"center_vertical\">\n                                        <Switch margin=\"12 0\" layout_weight=\"1\" id=\"\u524D\u53F0\u670D\u52A1\" text=\"\u524D\u53F0\u670D\u52A1  \" textSize=\"15sp\" checked=\"{{\u662F\u5426\u6709\u524D\u53F0\u670D\u52A1()}}\" />\n                                        <Switch margin=\"12 0\" layout_weight=\"1\" id=\"\u7A33\u5B9A\u6A21\u5F0F\" text=\"\u7A33\u5B9A\u6A21\u5F0F  \" textSize=\"15sp\" checked=\"{{\u662F\u5426\u6709\u7A33\u5B9A\u6A21\u5F0F()}}\" />\n                                    </horizontal>\n                                </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                            </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                            //\u8B66\u544A\n                            <card marginTop=\"10dp\" cardBackgroundColor=\"#808080\" alpha=\"0.8\" h=\"auto\" cardElevation=\"0\">//\u5782\u76F4\u5E03\u5C40\u5934\n                                <card alpha=\"1\" margin=\"1 1 1 1\" cardElevation=\"2\" >//\u5782\u76F4\u5E03\u5C40\u5934\n                                    <vertical >//\u5782\u76F4\u5E03\u5C40\u5934//\u5782\u76F4\u5E03\u5C40\u5934\n                                        <text margin=\"12 0\" text=\"(1)\u8BF7\u5F00\u542F\u4E0A\u65B94\u4E2A\u670D\u52A1\" textSize=\"15sp\" textColor=\"#000000\" />\n                                        <text margin=\"12 0\" text=\"(2)\u672C\u811A\u672C\u4E3A\u6A21\u62DF\u70B9\u51FB\" textSize=\"15sp\" textColor=\"#000000\" />\n                                        <horizontal marginTop=\"2dp\">\n                                            <radio margin=\"5 0\" id=\"\u52FE\u9009\u6846_\u7528\u6237\u534F\u8BAE\" text=\"\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\" color=\"#757575\" />\n                                            <text id=\"\u6807\u7B7E_\u7528\u6237\u534F\u8BAE\" text=\"\u7528\u6237\u534F\u8BAE\" textColor=\"#007aff\" layout_weight=\"1\" />\n                                            <frame layout_weight=\"1\">\n                                            </frame>\n                                        </horizontal>\n                                    </vertical>\n                                </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                            </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n\n                            <card marginTop=\"10dp\" cardBackgroundColor=\"#808080\" alpha=\"0.8\" w=\"*\" cardElevation=\"0\">//\u5782\u76F4\u5E03\u5C40\u5934\n                                <card alpha=\"1\" margin=\"1 1 1 1\" cardElevation=\"2\" >//\u5782\u76F4\u5E03\u5C40\u5934\n                                    <button id=\"\u542F\u52A8\u60AC\u6D6E\u7403\" w=\"*\" text=\"\u542F\u52A8\u60AC\u6D6E\u7403/\u4FDD\u5B58\u914D\u7F6E\" h=\"auto\" backgroundTint=\"#c9ee9e\" marginLeft=\"5\" textSize=\"15\" textStyle=\"bold\" textColor=\"#0f2000\" />\n                                </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                            </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                            //\u63A7\u5236\u53F0\n                            <card marginTop=\"10dp\" cardBackgroundColor=\"#808080\" alpha=\"0.8\" w=\"*\" cardElevation=\"0\">//\u5782\u76F4\u5E03\u5C40\u5934\n                                <card alpha=\"1\" margin=\"1 1 1 1\" cardElevation=\"2\" >//\u5782\u76F4\u5E03\u5C40\u5934\n                                    <frame h=\"*\">\n                                        <vertical padding=\"5dp\" >\n                                            <globalconsole id=\"globalconsole\" w=\"*\" h=\"*\" bg=\"#00000000\" textColor=\"#000000\" />\n                                        </vertical>\n                                        <fab id=\"\u6E05\u7A7A\u63A7\u5236\u53F0\" src=\"@drawable/ic_close_black_48dp\" w=\"auto\" h=\"auto\" layout_gravity=\"bottom|right\" margin=\"16\" bg=\"#000000\" tint=\"#ffffff\" />\n                                    </frame>\n                                </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                            </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                        </vertical>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                    </frame>//\u7B2C\u4E00\u4E2A\u6807\u7B7E\u9875\u5C3E\n\n                    <frame>//\u7B2C\u4E8C\u4E2A\u6807\u7B7E\u9875\u5934\n                        <scroll layout_weight=\"1\">\n                            <vertical h=\"*\" padding=\"16dp\">\n\n                                <card marginTop=\"10dp\" cardBackgroundColor=\"#808080\" alpha=\"0.8\" h=\"auto\" cardElevation=\"0\">//\u5782\u76F4\u5E03\u5C40\u5934\n                                    <card alpha=\"1\" margin=\"1 1 1 1\" cardElevation=\"2\" >//\u5782\u76F4\u5E03\u5C40\u5934\n                                        <vertical >//\u5782\u76F4\u5E03\u5C40\u5934//\u5782\u76F4\u5E03\u5C40\u5934\n                                            <horizontal gravity=\"center_vertical\">\n                                                <text textSize=\"20dp\" text=\"\u667A\u80FDAI\u56DE\u590D\u8BBE\u7F6E\" textColor=\"#2288ff\" marginLeft=\"8dp\" />\n                                                <frame layout_weight=\"1\" h=\"20dp\">\n                                                </frame>\n                                                <text textSize=\"15sp\" text=\"apikey\u5230\u7F51\u7AD9\u83B7\u53D6\" textColor=\"#222222\" marginLeft=\"8dp\" />\n                                            </horizontal>\n                                            <horizontal marginTop=\"2dp\">\n                                                <input id=\"\u8F93\u5165\u6846_apikey\" textSize=\"15sp\" singleLine=\"true\" w=\"0\" layout_weight=\"1\" gravity=\"center|top\" hint=\"\u8BF7\u8FD9\u91CC\u586B\u5199ApiKey\" textColor=\"#0000FF\" />\n                                            </horizontal>\n                                        </vertical>\n                                    </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                                </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n\n                                <card marginTop=\"10dp\" cardBackgroundColor=\"#808080\" alpha=\"0.8\" h=\"auto\" cardElevation=\"0\">//\u5782\u76F4\u5E03\u5C40\u5934\n                                    <card alpha=\"1\" margin=\"1 1 1 1\" cardElevation=\"2\" >//\u5782\u76F4\u5E03\u5C40\u5934\n                                        <vertical >//\u5782\u76F4\u5E03\u5C40\u5934//\u5782\u76F4\u5E03\u5C40\u5934\n                                            <horizontal gravity=\"center_vertical\">\n                                                <text textSize=\"20dp\" text=\"AI\u89D2\u8272\u8BBE\u5B9A\" textColor=\"#2288ff\" marginLeft=\"8dp\" />\n                                                <frame layout_weight=\"1\" h=\"20dp\">\n                                                </frame>\n                                                <text textSize=\"15sp\" text=\"\u5C3D\u91CF\u8BE6\u7EC6\u7F16\u5199\" textColor=\"#222222\" marginLeft=\"8dp\" />\n                                            </horizontal>\n                                            <horizontal marginTop=\"2dp\">\n                                                <input id=\"\u8F93\u5165\u6846_\u89D2\u8272\u8BBE\u5B9A\" textSize=\"15sp\" h=\"150\" layout_weight=\"1\" gravity=\"left|top\" hint=\"\u8FD9\u91CC\u586B\u5199\u89D2\u8272\u8BBE\u5B9A\uFF0C\u6BD4\u5982\u6027\u522B\uFF0C\u540D\u5B57\uFF0C\u751F\u65E5\uFF0C\u5BB6\u4E61\uFF0C\u7231\u597D\u7B49\u7B49\u4E4B\u7C7B\" textColor=\"#0000FF\" />\n                                            </horizontal>\n                                        </vertical>\n                                    </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                                </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n\n                                <card marginTop=\"10dp\" cardBackgroundColor=\"#808080\" alpha=\"0.8\" h=\"auto\" cardElevation=\"0\">//\u5782\u76F4\u5E03\u5C40\u5934\n                                    <card alpha=\"1\" margin=\"1 1 1 1\" cardElevation=\"2\" >//\u5782\u76F4\u5E03\u5C40\u5934\n                                        <vertical >//\u5782\u76F4\u5E03\u5C40\u5934//\u5782\u76F4\u5E03\u5C40\u5934\n                                            <horizontal gravity=\"center_vertical\">\n                                                <text textSize=\"20dp\" text=\"\u6253\u62DB\u547C\u8BBE\u7F6E\" textColor=\"#2288ff\" marginLeft=\"8dp\" />\n                                                <frame layout_weight=\"1\" h=\"20dp\">\n                                                </frame>\n                                                <text textSize=\"15sp\" text=\"\u6253\u62DB\u547C\u76F8\u5173\" textColor=\"#222222\" marginLeft=\"8dp\" />\n                                            </horizontal>\n                                            <horizontal marginTop=\"2dp\">\n                                                <input id=\"\u8F93\u5165\u6846_\u62DB\u547C\u6B21\u6570\" textSize=\"15sp\" inputType=\"number\" singleLine=\"true\" w=\"0\" layout_weight=\"1\" gravity=\"center|top\" hint=\"\u7279\u6B8A\u6B21\u6570:\u7A7A\u767D=\u4E0D\u6253\u62DB\u547C,0=\u65E0\u9650\u6B21\" textColor=\"#0000FF\" />\n                                            </horizontal>\n                                            <horizontal marginTop=\"2dp\">\n                                                <input id=\"\u8F93\u5165\u6846_\u62DB\u547C\u8BCD\" textSize=\"15sp\"  singleLine=\"true\" w=\"0\" layout_weight=\"1\" gravity=\"center|top\" hint=\"\u5411AI\u53D1\u9001\u7684\u5185\u5BB9\uFF0CAI\u56DE\u590D\u540E\u7684\u8BED\u53E5\u7528\u4E8E\u6253\u62DB\u547C\" textColor=\"#0000FF\" />\n                                            </horizontal>\n                                        </vertical>\n                                    </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                                </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n\n                            </vertical>\n                        </scroll>\n\n                    </frame>//\u7B2C\u4E8C\u4E2A\u6807\u7B7E\u9875\u5C3E\n                    <frame>//\u7B2C\u4E09\u4E2A\u6807\u7B7E\u9875\u5934\n                        <vertical h=\"*\" padding=\"16dp\">\n\n                            <card marginTop=\"10dp\" cardBackgroundColor=\"#808080\" alpha=\"0.8\" h=\"*\" cardElevation=\"0\">//\u5782\u76F4\u5E03\u5C40\u5934\n                                <card alpha=\"1\" margin=\"1 1 1 1\" cardElevation=\"2\" >//\u5782\u76F4\u5E03\u5C40\u5934\n                                    <vertical >//\u5782\u76F4\u5E03\u5C40\u5934//\u5782\u76F4\u5E03\u5C40\u5934\n                                        <text textSize=\"20dp\" text=\"\u5565\u90FD\u6CA1\u6709\" textColor=\"#2288ff\" marginLeft=\"8dp\" />\n                                    </vertical>\n                                </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                            </card>//\u5782\u76F4\u5E03\u5C40\u5C3E\n\n                        </vertical>//\u5782\u76F4\u5E03\u5C40\u5C3E\n                    </frame>//\u7B2C\u4E09\u4E2A\u6807\u7B7E\u9875\u5C3E\n                </viewpager>\n            </vertical>\n        </frame >");
  activity["setSupportActionBar"](ui["toolbar"]);
  ui["\u5BFC\u822A\u680F"]["setTitles"](["\u8FD0\u884C\u754C\u9762", "\u53C2\u6570\u914D\u7F6E", "\u4F7F\u7528\u8BF4\u660E"]);
  ui["\u6807\u7B7E\u680F"]["setupWithViewPager"](ui["\u5BFC\u822A\u680F"]);
  ui["\u6807\u7B7E\u680F"]["setTabTextColors"](Color["parseColor"]("#436915"), Color["parseColor"]("#0f2000"));
  ui["\u6807\u7B7E\u680F"]["setSelectedTabIndicatorColor"](Color["parseColor"]("#0f2000"));
  ui["\u516C\u544A\u6807\u7B7E"]["setText"]("               \u672C\u8F6F\u4EF6\u4EC5\u4F9B\u6B8B\u969C\u4EBA\u58EB\u5A31\u4E50\u4F7F\u7528\uFF0C\u4EC5\u9650\u5728\u6CD5\u5F8B\u5141\u8BB8\u8303\u56F4\u5185\u4F7F\u7528\uFF0C\u5207\u52FF\u7528\u4E8E\u975E\u6CD5\u4EE5\u53CA\u5546\u4E1A\u7528\u9014!  \u5426\u5219\uFF0C\u7528\u6237\u4F7F\u7528\u672C\u8F6F\u4EF6\u9020\u6210\u7684\u4E00\u5207\u540E\u679C\u7686\u7531\u7528\u6237\u81EA\u884C\u627F\u62C5\uFF0C\u4E0E\u672C\u8F6F\u4EF6\u4F5C\u8005\u65E0\u5173!  \u8BF7\u4E8E24\u5C0F\u65F6\u5185\u5220\u9664!");
  ui["\u516C\u544A\u6807\u7B7E"]["setSelected"](!![]);
  ui["emitter"]["on"]("resume", () => {
    ui["\u65E0\u969C\u788D\u6743\u9650"]["checked"] = 是否有无障碍权限();
    ui["\u524D\u53F0\u670D\u52A1"]["checked"] = 是否有前台服务();
    let _0x562cf0 = 是否有悬浮窗权限();
    ui["\u60AC\u6D6E\u7A97\u6743\u9650"]["checked"] = _0x562cf0;
    if (_0x562cf0 == !![]) {
      ui["\u7A33\u5B9A\u6A21\u5F0F"]["checked"] = 是否有稳定模式();
    }
  });
  ui["\u65E0\u969C\u788D\u6743\u9650"]["on"]("click", () => {
    if (!是否有无障碍权限()) {
      toastLog("\u6CA1\u6709\u65E0\u969C\u788D\u6743\u9650,\u5C06\u8DF3\u8F6C\u5230\u5F00\u542F\u65E0\u969C\u788D\u6743\u9650\u754C\u9762");
      申请无障碍权限();
    } else {
      toastLog("\u5DF2\u7ECF\u6709\u4E86\u65E0\u969C\u788D\u6743\u9650\uFF01");
      ui["\u65E0\u969C\u788D\u6743\u9650"]["checked"] = !![];
    }
  });
  ui["\u60AC\u6D6E\u7A97\u6743\u9650"]["on"]("check", function (_0x21b13d) {
    if (!是否有悬浮窗权限()) {
      toastLog("\u6CA1\u6709\u60AC\u6D6E\u7A97\u6743\u9650,\u5C06\u8DF3\u8F6C\u5230\u5F00\u542F\u60AC\u6D6E\u7A97\u6743\u9650\u754C\u9762");
      申请悬浮窗权限();
    } else {
      toastLog("\u5DF2\u7ECF\u6709\u4E86\u60AC\u6D6E\u7A97\u6743\u9650\uFF01");
      ui["\u60AC\u6D6E\u7A97\u6743\u9650"]["checked"] = !![];
    }
  });
  ui["\u524D\u53F0\u670D\u52A1"]["on"]("check", function (_0x38476b) {
    开启前台服务(_0x38476b);
  });
  ui["\u7A33\u5B9A\u6A21\u5F0F"]["on"]("check", function (_0xca2398) {
    if (_0xca2398 == ![]) {
      开启稳定模式(![]);
    } else {
      if (是否有悬浮窗权限()) {
        dialogs["build"]({
          "title": "\u7A33\u5B9A\u6A21\u5F0F",
          "content": "\u7A33\u5B9A\u6A21\u5F0F\u901A\u8FC7\u7701\u7565\u5E03\u5C40\u7EC6\u8282\u4F7F\n\u811A\u672C\u6293\u53D6\u5E03\u5C40\u65F6\u66F4\u7A33\u5B9A\uFF0C\u4F46\u540C\n\u65F6\u83B7\u53D6\u5230\u7684\u5C4F\u5E55\u4E0A\u7684\u63A7\u4EF6\u53EF\u80FD\n\u4F1A\u51CF\u5C11\u3002\n\n\u91CD\u65B0\u542F\u52A8\u65E0\u969C\u788D\u670D\u52A1\u624D\u80FD\u751F\n\u6548\uFF0C",
          "positive": "\u786E\u5B9A",
          "neutral": "\u53D6\u6D88"
        })["on"]("positive", _0x51cf3b => {
          开启稳定模式(!![]);
        })["on"]("neutral", _0x12f6eb => {
          ui["\u7A33\u5B9A\u6A21\u5F0F"]["checked"] = ![];
        })["show"]();
      } else {
        toastLog("\u8BF7\u5F00\u542F\u60AC\u6D6E\u7A97\u6743\u9650\uFF01");
      }
    }
  });
  ui["\u6E05\u7A7A\u63A7\u5236\u53F0"]["on"]("click", () => {
    ui["globalconsole"]["clear"]();
    files["write"](console["getGlobalLogConfig"]()["file"], "");
  });
  ui["\u52FE\u9009\u6846_\u7528\u6237\u534F\u8BAE"]["on"]("click", () => {
    if (是否有悬浮窗权限()) {
      dialogs["build"]({
        "title": "\u514D\u8D23\u58F0\u660E",
        "content": "\u672C\u8F6F\u4EF6\u4EC5\u4F9B\u6B8B\u969C\u4EBA\u58EB\u5A31\u4E50\u4F7F\u7528!\n\n\u4EC5\u9650\u5728\u6CD5\u5F8B\u5141\u8BB8\u8303\u56F4\u5185\u4F7F\u7528!\n\u5207\u52FF\u7528\u4E8E\u975E\u6CD5\u4EE5\u53CA\u5546\u4E1A\u7528\u9014!\n\u5426\u5219\uFF0C\u7528\u6237\u4F7F\u7528\u672C\u8F6F\u4EF6\u9020\u6210\u7684\u4E00\u5207\u540E\u679C\u7686\u7531\u7528\u6237\u81EA\u884C\u627F\u62C5\uFF0C\u4E0E\u672C\u8F6F\u4EF6\u4F5C\u8005\u65E0\u5173!\n\n\u8BF7\u4E8E24\u5C0F\u65F6\u5185\u5220\u9664!\n\u672C\u8F6F\u4EF6\u610F\u5728\u6A21\u62DF\u4EBA\u7C7B\u624B\u52A8\u64CD\u4F5C\u7684\u8FC7\u7A0B\uFF0C\u5176\u8FC7\u7A0B\u4E0D\u6D89\u53CA\u975E\u6CD5\u83B7\u53D6\u670D\u52A1\u5668\u6570\u636E\u884C\u4E3A!\n\u5982\u8FDB\u5165\u8F6F\u4EF6\u5219\u8868\u793A\u540C\u610F\u6B64\u534F\u8BAE\uFF0C\u5982\u4E0D\u540C\u610F\u8BF7\u9000\u51FA\u5E76\u5378\u8F7D\u6B64\u8F6F\u4EF6\uFF0C\u5982\u6B64\u8F6F\u4EF6\u6709\u4FB5\u72AF\u5230\u60A8\u7684\u6743\u76CA\uFF0C\u8BF7\u7ACB\u5373\u8054\u7CFB\u672C\u4EBA\u5220\u9664\u656C\u8BF7\u8C05\u89E3\uFF0C\u4F46\u4E0D\u8D54\u507F!\n\n\u63A5\u811A\u672C\u5B9A\u5236\n\n\u6700\u7EC8\u89E3\u91CA\u6743\u7531\u4F5C\u8005\u6240\u6709",
        "positive": "\u540C\u610F",
        "neutral": "\u62D2\u7EDD"
      })["on"]("positive", _0x57c7bb => {
        写配置("\u7F6A\u8FC7", "\u534F\u8BAE", !![]);
      })["on"]("neutral", _0x434c10 => {
        ui["\u52FE\u9009\u6846_\u7528\u6237\u534F\u8BAE"]["checked"] = ![];
      })["show"]();
    } else {
      ui["\u52FE\u9009\u6846_\u7528\u6237\u534F\u8BAE"]["checked"] = ![];
      toastLog("\u8BF7\u5F00\u542F\u60AC\u6D6E\u7A97\u6743\u9650\uFF01");
    }
  });
  ui["\u6807\u7B7E_\u7528\u6237\u534F\u8BAE"]["on"]("click", () => {
    dialogs["build"]({
      "title": "\u514D\u8D23\u58F0\u660E",
      "content": "\u672C\u8F6F\u4EF6\u4EC5\u4F9B\u6B8B\u969C\u4EBA\u58EB\u5A31\u4E50\u4F7F\u7528!\n\n\u4EC5\u9650\u5728\u6CD5\u5F8B\u5141\u8BB8\u8303\u56F4\u5185\u4F7F\u7528!\n\u5207\u52FF\u7528\u4E8E\u975E\u6CD5\u4EE5\u53CA\u5546\u4E1A\u7528\u9014!\n\u5426\u5219\uFF0C\u7528\u6237\u4F7F\u7528\u672C\u8F6F\u4EF6\u9020\u6210\u7684\u4E00\u5207\u540E\u679C\u7686\u7531\u7528\u6237\u81EA\u884C\u627F\u62C5\uFF0C\u4E0E\u672C\u8F6F\u4EF6\u4F5C\u8005\u65E0\u5173!\n\n\u8BF7\u4E8E24\u5C0F\u65F6\u5185\u5220\u9664!\n\u672C\u8F6F\u4EF6\u610F\u5728\u6A21\u62DF\u4EBA\u7C7B\u624B\u52A8\u64CD\u4F5C\u7684\u8FC7\u7A0B\uFF0C\u5176\u8FC7\u7A0B\u4E0D\u6D89\u53CA\u975E\u6CD5\u83B7\u53D6\u670D\u52A1\u5668\u6570\u636E\u884C\u4E3A!\n\u5982\u8FDB\u5165\u8F6F\u4EF6\u5219\u8868\u793A\u540C\u610F\u6B64\u534F\u8BAE\uFF0C\u5982\u4E0D\u540C\u610F\u8BF7\u9000\u51FA\u5E76\u5378\u8F7D\u6B64\u8F6F\u4EF6\uFF0C\u5982\u6B64\u8F6F\u4EF6\u6709\u4FB5\u72AF\u5230\u60A8\u7684\u6743\u76CA\uFF0C\u8BF7\u7ACB\u5373\u8054\u7CFB\u672C\u4EBA\u5220\u9664\u656C\u8BF7\u8C05\u89E3\uFF0C\u4F46\u4E0D\u8D54\u507F!\n\n\u63A5\u811A\u672C\u5B9A\u5236\n\n\u6700\u7EC8\u89E3\u91CA\u6743\u7531\u4F5C\u8005\u6240\u6709",
      "positive": "\u786E\u5B9A"
    })["show"]();
  });
  ui["\u542F\u52A8\u60AC\u6D6E\u7403"]["on"]("click", () => {
    if (悬浮球启动判断()) {
      _0x39ac06();
      fb["show"]();
      toastLog("\u60AC\u6D6E\u7403\u5DF2\u542F\u52A8\uFF01");
    }
  });
  function _0x39ac06() {
    写配置("\u7F6A\u8FC7", "\u8F93\u5165\u6846_\u62DB\u547C\u6B21\u6570", ui["\u8F93\u5165\u6846_\u62DB\u547C\u6B21\u6570"]["getText"]());
    写配置("\u7F6A\u8FC7", "\u8F93\u5165\u6846_apikey", ui["\u8F93\u5165\u6846_apikey"]["getText"]());
    写配置("\u7F6A\u8FC7", "\u8F93\u5165\u6846_\u89D2\u8272\u8BBE\u5B9A", ui["\u8F93\u5165\u6846_\u89D2\u8272\u8BBE\u5B9A"]["getText"]());
    写配置("\u7F6A\u8FC7", "\u8F93\u5165\u6846_\u62DB\u547C\u8BCD", ui["\u8F93\u5165\u6846_\u62DB\u547C\u8BCD"]["getText"]());
  }
  function _0x3a6a5d() {
    ui["\u52FE\u9009\u6846_\u7528\u6237\u534F\u8BAE"]["checked"] = 读配置("\u7F6A\u8FC7", "\u534F\u8BAE", ![]);
    ui["\u8F93\u5165\u6846_\u62DB\u547C\u6B21\u6570"]["setText"](读配置("\u7F6A\u8FC7", "\u8F93\u5165\u6846_\u62DB\u547C\u6B21\u6570", ""));
    ui["\u8F93\u5165\u6846_apikey"]["setText"](读配置("\u7F6A\u8FC7", "\u8F93\u5165\u6846_apikey", ""));
    ui["\u8F93\u5165\u6846_\u89D2\u8272\u8BBE\u5B9A"]["setText"](读配置("\u7F6A\u8FC7", "\u8F93\u5165\u6846_\u89D2\u8272\u8BBE\u5B9A", ""));
    ui["\u8F93\u5165\u6846_\u62DB\u547C\u8BCD"]["setText"](读配置("\u7F6A\u8FC7", "\u8F93\u5165\u6846_\u62DB\u547C\u8BCD", ""));
  }
  ;
  _0x3a6a5d();
}
;
function 悬浮球启动判断() {
  if (ui["\u65E0\u969C\u788D\u6743\u9650"]["checked"] == ![]) {
    toastLog("\u8BF7\u5F00\u542F[\u65E0\u969C\u788D\u6743\u9650]\u6743\u9650\uFF01");
    return ![];
  }
  ;
  if (ui["\u60AC\u6D6E\u7A97\u6743\u9650"]["checked"] == ![]) {
    toastLog("\u8BF7\u5F00\u542F[\u60AC\u6D6E\u7A97\u6743\u9650]\u6743\u9650\uFF01");
    return ![];
  }
  ;
  if (ui["\u52FE\u9009\u6846_\u7528\u6237\u534F\u8BAE"]["checked"] == ![]) {
    toastLog("\u8BF7\u540C\u610F[\u7528\u6237\u534F\u8BAE]\u624D\u53EF\u4EE5\u4F7F\u7528\uFF01");
    return ![];
  }
  ;
  if (ui["\u8F93\u5165\u6846_apikey"]["getText"]() == "") {
    toastLog("\u8BF7\u586B\u5199[ApiKey]\uFF01");
    return ![];
  }
  ;
  if (ui["\u8F93\u5165\u6846_\u89D2\u8272\u8BBE\u5B9A"]["getText"]() == "") {
    toastLog("\u8BF7\u586B\u5199[\u89D2\u8272\u8BBE\u5B9A]\uFF01");
    return ![];
  }
  ;
  if (ui["\u8F93\u5165\u6846_\u62DB\u547C\u8BCD"]["getText"]() == "") {
    toastLog("\u8BF7\u586B\u5199[\u8F93\u5165\u6846_\u62DB\u547C\u8BCD]\uFF01");
    return ![];
  }
  ;
  return !![];
}
function 判断启动配置() {
  let _0xc84127 = 读配置("\u7F6A\u8FC7", "\u534F\u8BAE", ![]);
  let _0x4e2b29 = 读配置("\u7F6A\u8FC7", "\u8F93\u5165\u6846_apikey", "");
  let _0x239b63 = 读配置("\u7F6A\u8FC7", "\u8F93\u5165\u6846_\u89D2\u8272\u8BBE\u5B9A", "");
  if (_0xc84127 == ![]) {
    toastLog("\u6CA1\u6709\u540C\u610F\u7528\u6237\u534F\u8BAE\uFF0C\u811A\u672C\u65E0\u6CD5\u4F7F\u7528\uFF01");
    return ![];
  }
  ;
  if (_0x4e2b29 == "") {
    toastLog("ApiKey\u4E0D\u80FD\u7A7A\u767D\uFF0C\u8BF7\u5230\u667A\u8C31\u7F51\u83B7\u53D6\uFF01");
    return ![];
  }
  ;
  if (_0x239b63 == "") {
    toastLog("\u89D2\u8272\u8BBE\u5B9A\u4E0D\u80FD\u7A7A\u767D\uFF0C\u8BF7\u81EA\u5DF1\u7F16\u8F91\u4E00\u5957\uFF01");
    return ![];
  }
  ;
  return !![];
}
function 是否有无障碍权限() {
  return auto["service"] != null;
}
function 申请无障碍权限() {
  app["startActivity"]({
    "action": "android.settings.ACCESSIBILITY_SETTINGS"
  });
}
function 是否有悬浮窗权限() {
  return new android["provider"]["Settings"]()["canDrawOverlays"](context);
}
function 申请悬浮窗权限() {
  var _0x31d10d = new Intent();
  _0x31d10d["setAction"]("android.settings.action.MANAGE_OVERLAY_PERMISSION");
  activity["getEventEmitter"]()["on"]("activity_result", function (_0x482a28, _0x520546, _0x9be69c) {});
  activity["startActivityForResult"](_0x31d10d, 8000);
}
function 是否有前台服务() {
  return $settings["isEnabled"]("foreground_service");
}
function 开启前台服务(_0x282910) {
  $settings["setEnabled"]("foreground_service", _0x282910);
}
function 是否有稳定模式() {
  return $settings["isEnabled"]("stable_mode");
}
function 开启稳定模式(_0x3f3b3a) {
  $settings["setEnabled"]("stable_mode", _0x3f3b3a);
}
function 写配置(_0x153ca0, _0x29ec1e, _0x3116a3) {
  const _0x5bb3be = storages["create"](_0x153ca0);
  _0x5bb3be["put"](_0x29ec1e, _0x3116a3);
}
function 读配置(_0x555cb2, _0x48cf5c, _0x7572b5) {
  const _0x2dd3cc = storages["create"](_0x555cb2);
  if (_0x2dd3cc["contains"](_0x48cf5c)) {
    return _0x2dd3cc["get"](_0x48cf5c, _0x7572b5);
  }
  ;
  写配置(_0x555cb2, _0x48cf5c, _0x7572b5);
  return _0x7572b5;
}
var {
  FloatButton,
  FloatButtonConfig
} = require("./FloatButton/init");
let fb = new FloatButton();
FloatButtonConfig["time"]["direction"] = 510;
fb["on"]("create", function () {
  fb["setIcon"]("file://./images/xuanfu.png");
  fb["setColor"]("#FFFFFF");
  fb["setAllButtonSize"](42);
  fb["addItem"]("\u6253\u5F00\u811A\u672C\u754C\u9762")["setIcon"]("@drawable/ic_perm_identity_black_48dp")["setTint"]("#FFFFFF")["setColor"]("#009687");
  fb["addItem"]("\u65E5\u5FD7\u60AC\u6D6E\u7A97")["toCheckbox"](_0x549691 => {
    _0x549691["icon1"]("@drawable/ic_assignment_black_48dp")["tint1"]("#FFFFFF")["color1"]("#2F4F4F");
    _0x549691["icon2"]("@drawable/ic_assignment_black_48dp")["tint2"]("#FFFFFF")["color2"]("#ED524E");
  });
  fb["addItem"]("\u542F\u52A8\u811A\u672C")["toCheckbox"](_0x5c8e73 => {
    _0x5c8e73["icon1"]("@drawable/ic_play_arrow_black_48dp")["tint1"]("#FFFFFF")["color1"]("#41A4F5");
    _0x5c8e73["icon2"]("@drawable/ic_stop_black_48dp")["tint2"]("#FFFFFF")["color2"]("#ED524E");
  });
  fb["addItem"]("\u64AD\u653E\u97F3\u4E50")["toCheckbox"](_0x56174e => {
    _0x56174e["icon1"]("file://./images/mius.png")["tint1"]("#FFFFFF")["color1"]("#6B238E");
    _0x56174e["icon2"]("file://./images/mius.png")["tint2"]("#FFFFFF")["color2"]("#ED524E");
  });
  fb["addItem"]("\u7ED3\u675F\u811A\u672C")["setIcon"]("@drawable/ic_clear_black_48dp")["setTint"]("#FFFFFF")["setColor"]("#fbd834");
  fb["setAutoCloseMenuTime"](2000);
});
fb["on"]("show", () => {});
fb["on"]("hide", () => {});
fb["on"]("item_click", (_0x1adb33, _0x454faa, _0x7b0c3c) => {
  if (_0x454faa == "\u542F\u52A8\u811A\u672C") {
    if (_0x7b0c3c == ![]) {
      if (脚本引擎) {
        脚本引擎["getEngine"]()["forceStop"]();
      }
      ;
      脚本引擎 = null;
      toastLog("\u811A\u672C\u5DF2\u7ED3\u675F\uFF01");
      if (脚本监听 == !![]) {
        脚本监听 = ![];
        return;
      }
      ;
    } else {
      if (验证卡密(tokenkey, "vers", devices)) {
        let _0x4277bc = engines["execScript"]("zui", 全_代码);
        if (_0x4277bc == ![]) {
          脚本引擎 = null;
          toastLog("\u811A\u672C\u542F\u52A8\u5931\u8D25\uFF01");
          let _0x471293 = fb["getViewUtil"]("\u542F\u52A8\u811A\u672C");
          _0x471293["setChecked"](![]);
          return;
        } else {
          脚本引擎 = _0x4277bc;
          toastLog("\u811A\u672C\u542F\u52A8\u6210\u529F\uFF01");
        }
      } else {
        脚本引擎 = null;
        let _0x3c2c58 = fb["getViewUtil"]("\u542F\u52A8\u811A\u672C");
        _0x3c2c58["setChecked"](![]);
        return;
      }
    }
    ;
  } else if (_0x454faa == "\u7ED3\u675F\u811A\u672C") {
    exit();
  } else if (_0x454faa == "\u6253\u5F00\u811A\u672C\u754C\u9762") {
    app["launchPackage"]("suiyuan.zuiguo.com");
    toastLog("\u5DF2\u6253\u5F00\u811A\u672C\u754C\u9762");
  } else if (_0x454faa == "\u65E5\u5FD7\u60AC\u6D6E\u7A97") {
    if (_0x7b0c3c == ![]) {
      日志引擎["getEngine"]()["forceStop"]();
      日志引擎 = null;
    } else {
      let _0x9ca556 = $files["path"]("./log.js");
      日志引擎 = engines["execScriptFile"](_0x9ca556);
      if (!日志引擎) {
        日志引擎 = null;
        return;
      } else {
        toastLog("\u65E5\u5FD7\u5DF2\u6253\u5F00");
      }
      ;
    }
    ;
  } else if (_0x454faa == "\u64AD\u653E\u97F3\u4E50") {
    if (_0x7b0c3c == !![]) {
      if (音乐播放() != !![]) {
        let _0x2602d4 = fb["getViewUtil"]("\u64AD\u653E\u97F3\u4E50");
        _0x2602d4["setChecked"](![]);
      } else {
        音乐线程();
      }
    } else {
      音乐停止();
    }
  }
});
events["on"]("exit", function () {
  console["hide"]();
  if (脚本引擎 != null) {
    脚本引擎["getEngine"]()["forceStop"]();
  }
  ;
  if (日志引擎 != null) {
    日志引擎["getEngine"]()["forceStop"]();
  }
  ;
  if (音乐引擎) {
    音乐引擎["stop"]();
    音乐引擎["release"]();
  }
});
events["on"]("reply", function () {
  log("\u811A\u672C\u7ED3\u675F\u5DF2\u6536\u5230");
});
function 结束指定脚本引擎(_0x5ea9da) {
  var _0x16fd83 = engines["all"]();
  var _0x419a29 = _0x16fd83["length"];
  for (var _0x3b59f2 = 0; _0x3b59f2 < _0x419a29; _0x3b59f2++) {
    var _0x2a10a5 = _0x16fd83[_0x3b59f2];
    if (_0x2a10a5["source"] == _0x5ea9da) {
      _0x2a10a5["forceStop"]();
    }
  }
}
events["broadcast"]["on"]("start_end", function () {
  脚本监听 = !![];
  设置悬浮窗按钮状态();
});
function 设置悬浮窗按钮状态() {
  let _0x4f48f3 = fb["getViewUtil"]("\u542F\u52A8\u811A\u672C");
  _0x4f48f3["setChecked"](![]);
}
;
function 音乐播放() {
  try {
    let _0x11a2b5 = getMusicUrl();
    if (_0x11a2b5[1] != "") {
      toastLog("\u64AD\u653E[" + _0x11a2b5[1] + "] \u4F5C\u8005:" + _0x11a2b5[2]);
      音乐引擎 = new android["media"]["MediaPlayer"]();
      音乐引擎["setDataSource"](_0x11a2b5[0]);
      音乐引擎["prepare"]();
      音乐引擎["start"]();
      return !![];
    } else {
      return ![];
    }
  } catch (_0x1a0401) {
    log(_0x1a0401);
    toastLog("\u97F3\u4E50\u64AD\u653E\u5F02\u5E38");
    return ![];
  }
  ;
}
function getMusicUrl() {
  let _0x140702 = "";
  let _0x4af0ff = "";
  let _0x18b359 = "";
  try {
    http["__okhttp__"]["setTimeout"](10000);
    let _0x54dcaf = "https://api.kit9.cn/api/netease_cloud_random_music/api.php";
    let _0x33829a = http["get"](_0x54dcaf);
    if (_0x33829a["statusCode"] == 200) {
      let _0x25fdcd = _0x33829a["body"]["json"]();
      if (_0x25fdcd["code"] == 200) {
        _0x140702 = _0x25fdcd["data"]["music_address"];
        _0x4af0ff = _0x25fdcd["data"]["music_songname"];
        _0x18b359 = _0x25fdcd["data"]["music_author"];
      } else {
        toastLog("\u83B7\u53D6\u97F3\u4E50\u5931\u8D25:" + e);
      }
      ;
    } else {
      toastLog("\u83B7\u53D6\u97F3\u4E50\u5931\u8D25:" + e);
    }
    ;
  } catch (_0x31ba75) {
    toastLog("\u83B7\u53D6\u97F3\u4E50\u5931\u8D25:" + _0x31ba75);
  }
  ;
  return [_0x140702, _0x4af0ff, _0x18b359];
}
function 音乐停止() {
  if (音乐引擎) {
    if (音乐引擎["isPlaying"]()) {
      音乐引擎["stop"]();
      音乐引擎["release"]();
    }
    音乐引擎 = null;
  }
  toastLog("\u5DF2\u505C\u6B62\u64AD\u653E");
}
function 音乐线程() {
  threads["start"](function () {
    if (音乐引擎) {
      while (!![]) {
        if (音乐引擎) {
          if (音乐引擎["isPlaying"]() != !![]) {
            break;
          }
        } else {
          break;
        }
        sleep(2000);
      }
      ;
      let _0x5ec7f2 = fb["getViewUtil"]("\u64AD\u653E\u97F3\u4E50");
      _0x5ec7f2["setChecked"](![]);
    }
    ;
  });
}
function 验证卡密(_0x4cc2c8, _0x2dda2c, _0x1d0dc8) {
  let _0x445eff = {
    "Content-Type": "application/json"
  };
  let _0x1f9f48 = "http://47.109.49.62:9000/static/yanzheng.php";
  let _0x58c251 = {
    "token": _0x4cc2c8,
    "version": _0x2dda2c,
    "device": _0x1d0dc8,
    "name": "\u7A83\u8BED"
  };
  http["__okhttp__"]["setTimeout"](10000);
  let _0x2cdce8 = threads["disposable"]();
  let _0x2e1078 = threads["start"](function () {
    try {
      let _0x125091 = http["postJson"](_0x1f9f48, _0x58c251);
      if (_0x125091["statusCode"] != 200) {
        console["log"]("\u9A8C\u8BC1\u5F02\u5E38:" + _0x125091["statusCode"]);
        _0x2cdce8["setAndNotify"](![]);
      } else {
        let _0x271dc4 = _0x125091["body"]["json"]();
        if (_0x271dc4["code"] == 1) {
          if (_0x2dda2c == "verss") {
            _0x2cdce8["setAndNotify"](_0x271dc4["msg"]);
          } else {
            _0x2cdce8["setAndNotify"](!![]);
          }
        } else {
          let _0xb52d47 = _0x271dc4["msg"];
          if (_0xb52d47["indexOf"]("\u9080\u8BF7\u7801") != -1) {
            _0xb52d47 = _0xb52d47["replace"](/\邀请码/g, "\u5361\u5BC6");
          }
          ;
          toastLog(_0xb52d47);
          _0x2cdce8["setAndNotify"](![]);
        }
        ;
      }
      ;
    } catch (_0x6dfce0) {
      toastLog("\u9A8C\u8BC1\u5F02\u5E38:", _0x6dfce0);
      _0x2cdce8["setAndNotify"](![]);
    }
    ;
  });
  _0x2e1078["join"]();
  let _0x48c061 = _0x2cdce8["blockedGet"]();
  return _0x48c061;
}
function 取机器码() {
  var _0x4f3c0b = device["brand"];
  var _0x46779b = device["model"];
  var _0x54c67f = device["getMacAddress"]();
  if (_0x4f3c0b == "" || _0x46779b == "" || _0x54c67f == "") {
    toastLog("\u8BBE\u5907\u7801\u83B7\u53D6\u5931\u8D25\uFF01");
    return "";
  }
  var _0x11029a = mdd["MD5_Encrypt"](_0x4f3c0b + "|" + _0x46779b + "|" + _0x54c67f);
  return _0x4f3c0b + "|" + _0x46779b + "|" + _0x11029a;
}
function keyaa(_0x2641c6) {
  var _0x305bce = "";
  if (_0x2641c6["length"] > 16) {
    _0x305bce = _0x2641c6["slice"](0, 16);
  } else if (_0x2641c6["length"] == 16) {
    _0x305bce = _0x2641c6;
  } else {
    var _0x46a3c5 = "";
    var _0x346dc1 = 16 - _0x2641c6["length"];
    for (var _0xe35e13 = 0; _0xe35e13 < _0x346dc1; _0xe35e13++) {
      _0x46a3c5 += "0";
    }
    ;
    _0x305bce = _0x2641c6 + _0x46a3c5;
  }
  ;
  return _0x305bce;
}