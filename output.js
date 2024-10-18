//Fri Oct 18 2024 04:35:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function generateRandom16DigitNumber() {
  let _0x2fc4f3 = "";
  for (let _0x10ce2b = 0; _0x10ce2b < 8; _0x10ce2b++) {
    _0x2fc4f3 += Math.floor(Math.random() * 10).toString();
  }
  return _0x2fc4f3;
}
if ($request.method.toUpperCase() !== "OPTIONS") {
  let deviceid = $persistentStore.read("deviceid");
  !deviceid && (deviceid = generateRandom16DigitNumber(), $persistentStore.write(deviceid, "deviceid"));
  let url = "http://verify.idamie.com/family.php?id=" + deviceid;
  $httpClient.get(url, function (_0x3773c5, _0x44103a, _0x41186e) {
    if (_0x3773c5) $notification.post("XBOX", "设备验证失败", "您的设备id: " + deviceid), $done({});else {
      if (_0x41186e === "error") $notification.post("XBOX", "设备验证失败", "您的设备id: " + deviceid), $done({
        "$response": $response
      });else {
        if (_0x41186e === "true") {
          let _0x9ba736 = $response.body,
            _0x22ddec = JSON.parse(_0x9ba736);
          if (_0x22ddec.cart && _0x22ddec.cart.id) {
            let _0xac7044 = _0x22ddec.cart.id;
            $persistentStore.write(_0xac7044, "cartId");
            $notification.post("XBOX", "执行成功", "");
          } else $notification.post("XBOX", "执行失败", "");
          $done({
            "body": $response.body
          });
        } else $notification.post("XBOX", "设备验证失败", "您的设备id: " + deviceid), $done({});
      }
    }
  });
} else $done({});