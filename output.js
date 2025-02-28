//Fri Feb 28 2025 11:01:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const crypto = require("crypto");
function MD5(_0x3582b8) {
  return crypto.createHash("MD5").update(_0x3582b8).digest("hex");
}
function getSign(_0x3d3a73) {
  let _0x174a2b = MD5(_0x3d3a73);
  let _0x285f90 = _0x174a2b.substr(0, 1);
  let _0x5d6c68 = _0x174a2b.substr(-1, 1);
  let _0x155e5a = _0x285f90 + _0x5d6c68;
  return MD5(_0x3d3a73 + _0x155e5a);
}
async function getSig56(_0x4dd35d = {}, _0x314ec6 = null, _0x1fefd6 = "get", _0x36824c = "json", _0x275ba8) {
  if (!process.env.kuaishou_speed_openbox || !process.env.kuaishou_speed) {
    return "";
  }
  const _0x44ccc3 = require("path");
  if (!(_0x44ccc3.resolve(__dirname).indexOf("smallfawn") !== -1)) {
    return "";
  }
  let _0x350e87 = "http://yi100.top:5666/sig56";
  try {
    {
      const _0xe5a85c = {
        Cookie: _0x275ba8
      };
      const _0x47c647 = {
        query: _0x4dd35d,
        data: _0x314ec6,
        method: _0x1fefd6,
        type: _0x36824c
      };
      let _0x31f90e = {
        url: _0x350e87,
        headers: _0xe5a85c,
        method: "POST",
        data: _0x47c647
      };
      _0x31f90e.headers.sign = getSign(JSON.stringify(_0x31f90e.data));
      let {
        data: _0x3f9437
      } = await axios.request(_0x31f90e);
      return _0x3f9437 ? _0x3f9437.s3 ? _0x3f9437.s3 : false : false;
    }
  } catch (_0x2bd529) {
    {
      return false;
    }
  }
}
async function getSig68(_0x3d319d = {}, _0x2c2fd1 = null, _0x5a57ad = "get", _0x500dc9 = "json", _0x46a3af) {
  if (!process.env.kuaishou_speed_openbox || !process.env.kuaishou_speed) {
    return "";
  }
  const _0x4e4bff = require("path");
  if (!(_0x4e4bff.resolve(__dirname).indexOf("smallfawn") !== -1)) {
    return "";
  }
  let _0x48f0f4 = "http://yi100.top:5666/sig68";
  try {
    {
      const _0x4f1802 = {
        Cookie: _0x46a3af,
        sign: ""
      };
      const _0xf0dcbf = {
        query: _0x3d319d,
        data: _0x2c2fd1,
        method: _0x5a57ad,
        type: _0x500dc9
      };
      let _0x48121d = {
        url: _0x48f0f4,
        headers: _0x4f1802,
        method: "POST",
        data: _0xf0dcbf
      };
      _0x48121d.headers.sign = getSign(JSON.stringify(_0x48121d.data));
      let {
        data: _0x3276cb
      } = await axios.request(_0x48121d);
      return _0x3276cb ? _0x3276cb.s3 ? _0x3276cb.s3 : false : false;
    }
  } catch (_0x2fe28a) {
    return false;
  }
}