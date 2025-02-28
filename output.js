//Fri Feb 28 2025 09:52:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
const crypto = require("crypto");
function MD5(_0x25996c) {
  return crypto.createHash("MD5").update(_0x25996c).digest("hex");
}
function getSign(_0x266d7e) {
  let _0x1ff88b = MD5(_0x266d7e);
  let _0x145a72 = _0x1ff88b.substr(0, 1);
  let _0x8f9f98 = _0x1ff88b.substr(-1, 1);
  let _0x62843c = _0x145a72 + _0x8f9f98;
  return MD5(_0x266d7e + _0x62843c);
}
async function getSig56(_0x4a38ca = {}, _0xac6f8b = null, _0x40a5ad = "get", _0x1add92 = "json", _0x3b6426) {
  if (!process.env.kuaishou_speed_openbox || !process.env.kuaishou_speed) {
    return "";
  }
  const _0x4e1d4c = require("path");
  if (!(_0x4e1d4c.resolve(__dirname).indexOf("smallfawn") !== -1)) {
    return "";
  }
  let _0x2e33df = "http://yi100.top:5666/sig56";
  try {
    {
      {
        const _0x5d394c = {
          Cookie: _0x3b6426
        };
        const _0x14d353 = {
          query: _0x4a38ca,
          data: _0xac6f8b,
          method: _0x40a5ad,
          type: _0x1add92
        };
        let _0xa53324 = {
          url: _0x2e33df,
          headers: _0x5d394c,
          method: "POST",
          data: _0x14d353
        };
        _0xa53324.headers.sign = getSign(JSON.stringify(_0xa53324.data));
        let {
          data: _0x3f9437
        } = await axios.request(_0xa53324);
        return _0x3f9437 ? _0x3f9437.s3 ? _0x3f9437.s3 : false : false;
      }
    }
  } catch (_0x225ea1) {
    {
      {
        {
          return false;
        }
      }
    }
  }
}
async function getSig68(_0x5d5e8e = {}, _0x1910da = null, _0x18ee92 = "get", _0x330f4d = "json", _0x237e6f) {
  if (!process.env.kuaishou_speed_openbox || !process.env.kuaishou_speed) {
    {
      {
        return "";
      }
    }
  }
  const _0x39340d = require("path");
  if (!(_0x39340d.resolve(__dirname).indexOf("smallfawn") !== -1)) {
    return "";
  }
  let _0x4e3ea8 = "http://yi100.top:5666/sig68";
  try {
    {
      const _0x5aaf2e = {
        Cookie: _0x237e6f,
        sign: ""
      };
      const _0x3f8481 = {
        query: _0x5d5e8e,
        data: _0x1910da,
        method: _0x18ee92,
        type: _0x330f4d
      };
      let _0x37613a = {
        url: _0x4e3ea8,
        headers: _0x5aaf2e,
        method: "POST",
        data: _0x3f8481
      };
      _0x37613a.headers.sign = getSign(JSON.stringify(_0x37613a.data));
      let {
        data: _0x3276cb
      } = await axios.request(_0x37613a);
      return _0x3276cb ? _0x3276cb.s3 ? _0x3276cb.s3 : false : false;
    }
  } catch (_0x3dcda4) {
    return false;
  }
}
OＯ0$ = "jsjiami.com.v6";
(function (_0x41598f, _0x43e9c7, _0x24b41b) {
  _0x24b41b = "al";
  try {
    {
      _0x24b41b += "ert";
      _0x43e9c7 = encode_version;
      if (!(typeof _0x43e9c7 !== "undefined" && _0x43e9c7 === "jsjiami.com.v5")) {
        _0x41598f[_0x24b41b]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x23daeb) {
    _0x41598f[_0x24b41b]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";