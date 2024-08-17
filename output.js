//Sat Aug 17 2024 09:25:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function checkDate(_0x1093c2) {
  const _0x372295 = new Date();
  const _0x51057c = _0x372295 - new Date(_0x1093c2);
  const _0x40d8e0 = _0x51057c / (1000 * 3600 * 24);
  if (_0x40d8e0 > 10) {
    alert("出错了~ 请联系客服处理");
    return false;
  }
  return true;
}