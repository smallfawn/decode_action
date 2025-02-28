//Fri Feb 28 2025 09:47:09 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const crypto = require("crypto");
function MD5($OQQ$Q) {
  return crypto.createHash("MD5").update($OQQ$Q).digest("hex");
}
function getSign(OO00OQ0) {
  let $QQO0Q = MD5(OO00OQ0);
  let O$$Q = $QQO0Q.substr(0, 1);
  let QOQOOQO = $QQO0Q.substr(-1, 1);
  let Q0QQO0Q = O$$Q + QOQOOQO;
  return MD5(OO00OQ0 + Q0QQO0Q);
}
async function getSig56(O0OQQO = {}, OOQ$ = null, $$0 = "get", $O0QQ = "json", OO0$$0) {
  if (!process.env.kuaishou_speed_openbox || !process.env.kuaishou_speed) {
    return "";
  }
  const O000OOO = require("path");
  if (!(O000OOO.resolve(__dirname).indexOf("smallfawn") !== -1)) {
    return "";
  }
  let O0QQO$ = "http://yi100.top:5666/sig56";
  try {
    {
      const O0OQQQ = {
        "Cookie": OO0$$0
      };
      const OO0$QQ = {
        "query": O0OQQO,
        "data": OOQ$,
        "method": $$0,
        "type": $O0QQ
      };
      let OQO$$ = {
        "url": O0QQO$,
        "headers": O0OQQQ,
        "method": "POST",
        "data": OO0$QQ
      };
      OQO$$.headers.sign = getSign(JSON.stringify(OQO$$.data));
      let {
        data: _0x3f9437
      } = await axios.request(OQO$$);
      return _0x3f9437 ? _0x3f9437.s3 ? _0x3f9437.s3 : false : false;
    }
  } catch (QOOO000) {
    {
      {
        return false;
      }
    }
  }
}
async function getSig68(OOQQQ0Q = {}, Q$$0$O = null, O0O00OQ = "get", $$$OQQ = "json", $0O$O$) {
  if (!process.env.kuaishou_speed_openbox || !process.env.kuaishou_speed) {
    {
      return "";
    }
  }
  const O00OQ00 = require("path");
  if (!(O00OQ00.resolve(__dirname).indexOf("smallfawn") !== -1)) {
    return "";
  }
  let QO$QQ = "http://yi100.top:5666/sig68";
  try {
    {
      const OOOQ00O = {
        "Cookie": $0O$O$,
        "sign": ""
      };
      const Q0OOO0O = {
        "query": OOQQQ0Q,
        "data": Q$$0$O,
        "method": O0O00OQ,
        "type": $$$OQQ
      };
      let $$O$Q0 = {
        "url": QO$QQ,
        "headers": OOOQ00O,
        "method": "POST",
        "data": Q0OOO0O
      };
      $$O$Q0.headers.sign = getSign(JSON.stringify($$O$Q0.data));
      let {
        data: _0x3276cb
      } = await axios.request($$O$Q0);
      return _0x3276cb ? _0x3276cb.s3 ? _0x3276cb.s3 : false : false;
    }
  } catch (OOQOO0O) {
    return false;
  }
}
OＯ0$ = "jsjiami.com.v6";