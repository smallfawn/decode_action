//Wed Aug 28 2024 03:54:31 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.local.get(null, function (_0x1b8ea2) {
    const _0x4fec69 = document.getElementById("screenshotList");
    Object.keys(_0x1b8ea2).forEach(function (_0x3ab031) {
      if (_0x3ab031.startsWith("screenshot_")) {
        const _0x5ad855 = document.createElement("img");
        _0x5ad855.src = _0x1b8ea2[_0x3ab031];
        _0x5ad855.alt = "Screenshot";
        _0x5ad855.style.maxWidth = "100%";
        _0x4fec69.appendChild(_0x5ad855);
        _0x4fec69.appendChild(document.createElement("br"));
      }
    });
  });
});