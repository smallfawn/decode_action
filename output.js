//Mon Aug 05 2024 14:30:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let appKey = "cpgpeo3dqusva28adh2g",
  AppSecret = "MLlpdEjQI0hW0XrjiMo50aDI2AQuk6Xc";
if (appKey == "" || AppSecret == "") {}
pjysdk = new PJYSDK(appKey, AppSecret);
pjysdk.debug = true;
let storagesConfig = storages.create("Operate"),
  accountStr = storagesConfig.get("curActiveCDKey", ""),
  curAccountStr = ui.accountInput.getText();
accountStr != "" && accountStr == curAccountStr && this.activeCDKey();
pjysdk.event.on("heartbeat_failed", function (_0x53a22e) {
  toastLog(_0x53a22e.message);
  if (_0x53a22e.code === 10214) {
    sleep(200);
    return;
  }
  log("心跳失败，尝试重登...");
  sleep(2000);
  let _0x58500a = pjysdk.CardLogin();
  if (_0x58500a.code == 0) log("重登成功");else {
    toastLog(_0x58500a.message);
    sleep(200);
  }
});
events.on("exit", function () {
  pjysdk.CardLogout();
  console.log("结束运行");
});