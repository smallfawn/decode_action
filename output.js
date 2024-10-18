//Fri Oct 18 2024 04:37:32 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
if ($request.method.toUpperCase() !== "OPTIONS") {
  let storedCartId = $persistentStore.read("cartId");
  if (storedCartId) {
    let body = JSON.parse($request.body);
    body.cartId ? (body.cartId = storedCartId, $notification.post("XBOX", "执行成功", "")) : $notification.post("XBOX", "执行失败", "");
    $done({
      "body": JSON.stringify(body)
    });
  } else $notification.post("XBOX", "执行成功", ""), $done({});
} else $done({});