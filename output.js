//Wed Aug 28 2024 03:56:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function sendMessageToBackground(_0x5bdff4) {
  const _0x3d5c50 = {
    type: _0x5bdff4
  };
  chrome.runtime.sendMessage(_0x3d5c50);
}
const bestScoreButton = document.getElementById("BestScore"),
  bestCompleteScoreButton = document.getElementById("BestCompleteScore"),
  ScoreButton = document.getElementById("Score"),
  stopTaskButton = document.getElementById("StopTask"),
  activate = document.getElementById("Activate"),
  clear = document.getElementById("Clear");
document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.sync.get("expiration_date", function (_0x533b7e) {
    const _0x3a1a54 = _0x533b7e.expiration_date || "";
    document.getElementById("EndTimeDisplay").textContent = "到期时间: " + _0x3a1a54;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.sync.get("executeStatus", function (_0x38b50f) {
    const _0x1be19e = _0x38b50f.executeStatus || "未运行",
      _0x379ef4 = document.getElementById("ExecuteStatus");
    _0x379ef4.textContent = _0x1be19e;
    if (_0x1be19e === "任务进行中") {
      _0x379ef4.style.color = "green";
    } else {
      _0x379ef4.style.color = "red";
    }
  });
});
bestScoreButton.addEventListener("click", () => {
  sendMessageToBackground("startBestScore");
  bestScoreButton.disabled = true;
  bestCompleteScoreButton.disabled = true;
  ScoreButton.disabled = true;
  stopTaskButton.disabled = false;
});
bestCompleteScoreButton.addEventListener("click", () => {
  sendMessageToBackground("startBestCompleteScore");
  bestScoreButton.disabled = true;
  bestCompleteScoreButton.disabled = true;
  ScoreButton.disabled = true;
  stopTaskButton.disabled = false;
});
ScoreButton.addEventListener("click", () => {
  sendMessageToBackground("startScore");
  bestScoreButton.disabled = true;
  bestCompleteScoreButton.disabled = true;
  ScoreButton.disabled = true;
  stopTaskButton.disabled = false;
});
stopTaskButton.addEventListener("click", () => {
  sendMessageToBackground("stopTask");
  bestCompleteScoreButton.disabled = false;
  bestScoreButton.disabled = false;
});
activate.addEventListener("click", () => {
  sendMessageToBackground("reload");
});
clear.addEventListener("click", () => {
  sendMessageToBackground("clear");
});
document.getElementById("viewScreenshots").addEventListener("click", function () {
  window.open(new URL("background.html", document.baseURI).href, "_blank");
});