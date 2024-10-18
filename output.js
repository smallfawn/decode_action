//Fri Oct 18 2024 03:22:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
if ($request.method.toUpperCase() !== "OPTIONS") {
  let body = $request.body,
    _body = JSON.parse(body),
    headers = $request.headers,
    url = $request.url;
  _body.market && (_body.market = "NG");
  _body.locale && (_body.locale = "en-NG");
  _body.friendlyName && (url.includes("appId=storeCart") ? _body.friendlyName = "cart-save-for-later-NG" : _body.friendlyName = "cart-NG");
  headers["X-MS-Market"] && (headers["X-MS-Market"] = "NG");
  headers["x-ms-market"] && (headers["x-ms-market"] = "NG");
  $done({
    "headers": headers,
    "body": JSON.stringify(_body)
  });
} else $done({});