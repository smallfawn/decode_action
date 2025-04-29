//Tue Apr 29 2025 06:18:39 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function Tabs_btn_layout() {
  ui.Widget.call(this);
  this.defineAttr("data", (_0x145811, _0x14d540, _0x573689, _0xbde9f0) => {
    arr = tabs_data.data[_0x573689];
    _0x145811._text.setText(arr[0]);
    _0x145811._src.attr("src", arr[1]);
    tabs_view[tabs_view.length] = _0x145811;
    _0x573689 == selectView && (_0x145811._src.attr("tint", tabs_data.selectColor.on), _0x145811._text.setTextColor(colors.parseColor(tabs_data.selectColor.on)));
  });
}