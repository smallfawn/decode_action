//Sun Jun 01 2025 09:35:39 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function checkCurrentUrl() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (_0x1a2a86) {
    var _0x1a2a86 = _0x1a2a86[0].url.includes("channels.weixin.qq.com/platform/post/list");
    var _0x381a59 = document.querySelector("#urlStatus span");
    _0x1a2a86 ? (_0x381a59.textContent = "已在视频号助手页面", _0x381a59.style.color = "#07c160") : (_0x381a59.textContent = "未在视频号助手页面", _0x381a59.style.color = "#f86228");
  });
}
function saveSettings(_0x668450) {
  chrome.storage.sync.set(_0x668450);
}
function loadSettings() {
  chrome.storage.sync.get(["flowRate"], function (_0x250d7f) {
    document.getElementById("flowRate").checked = _0x250d7f.flowRate || false;
  });
}
function checkUpdateStatus() {
  chrome.storage.local.get(["updateAvailable", "newVersion", "updateUrl", "releaseNotes"], _0x100359 => {
    var _0x43fed7;
    var _0x4dc2fb;
    var _0x5573c1;
    _0x100359.updateAvailable && (_0x43fed7 = document.getElementById("updateNotice"), _0x4dc2fb = document.getElementById("updateLink"), _0x5573c1 = document.getElementById("releaseNotes"), _0x43fed7.style.display = "block", _0x4dc2fb.href = _0x100359.updateUrl, _0x5573c1.textContent = _0x100359.releaseNotes);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  console.log("Popup loaded");
  checkCurrentUrl();
  loadSettings();
  checkUpdateStatus();
  let _0x50cb69 = document.getElementById("flowRate");
  chrome.storage.sync.get(["monitoringEnabled"], function (_0xf68d50) {
    _0x50cb69.checked = _0xf68d50.monitoringEnabled || false;
  });
  _0x50cb69.addEventListener("change", _0x4030f9 => {
    let _0x4c7c7e = _0x4030f9.target.checked;
    chrome.storage.sync.set({
      monitoringEnabled: _0x4c7c7e
    });
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (_0x5bd678) {
      chrome.tabs.sendMessage(_0x5bd678[0].id, {
        type: "TOGGLE_FLOW_RATE",
        enabled: _0x4c7c7e
      });
    });
  });
});