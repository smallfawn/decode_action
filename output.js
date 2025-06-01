//Sun Jun 01 2025 09:33:03 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
chrome.runtime.onMessage.addListener((_0xd9b0d, _0x285acc, _0x1b752e) => {
  "UPDATE_TAB_TITLE" === _0xd9b0d.type && (console.log("UPDATE_TAB_TITLE", _0xd9b0d.title), chrome.tabs.update(_0x285acc.tab.id, {
    title: _0xd9b0d.title
  }));
  "DEBUG" === _0xd9b0d.type && console.log(_0xd9b0d.message);
  "SHOW_NOTIFICATION" === _0xd9b0d.type && (_0x285acc = "notification_" + Date.now(), chrome.notifications.create(_0x285acc, _0xd9b0d.notification));
});
let VERSION_CHECK_INTERVAL = 60;
let VERSION_CHECK_URL = "https://www.073955.com/helper/main/version.json";
async function checkUpdate() {
  try {
    var _0xf7f636 = await (await fetch(VERSION_CHECK_URL)).json();
    var _0x114d3a = chrome.runtime.getManifest().version;
    _0xf7f636.version > _0x114d3a && chrome.storage.local.set({
      updateAvailable: true,
      newVersion: _0xf7f636.version,
      updateUrl: _0xf7f636.downloadUrl,
      releaseNotes: _0xf7f636.releaseNotes
    });
  } catch (_0x22a224) {
    console.error("Update check failed:", _0x22a224);
  }
}
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("checkUpdate", {
    periodInMinutes: VERSION_CHECK_INTERVAL
  });
});
chrome.alarms.onAlarm.addListener(_0x2643e3 => {
  "checkUpdate" === _0x2643e3.name && checkUpdate();
});
chrome.notifications.onClicked.addListener(_0xa1f04a => {
  chrome.tabs.query({
    url: "https://channels.weixin.qq.com/*"
  }, _0x532cf4 => {
    0 < _0x532cf4.length && (chrome.tabs.update(_0x532cf4[0].id, {
      active: true
    }), chrome.windows.update(_0x532cf4[0].windowId, {
      focused: true
    }));
  });
  chrome.notifications.clear(_0xa1f04a);
});