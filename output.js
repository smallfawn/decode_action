//Fri Feb 28 2025 09:57:32 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const crypto = require("crypto");
function MD5(_0x11ac3f) {
  return crypto.createHash("MD5").update(_0x11ac3f).digest("hex");
}
function getSign(_0x24a790) {
  const _0x5bd1b6 = {
    naQgS: function (_0x2c3d58, _0x4c14dd) {
      return _0x2c3d58(_0x4c14dd);
    },
    qTJeO: function (_0x2ccadf, _0x2befd4) {
      {
        return _0x2ccadf + _0x2befd4;
      }
    },
    sZvLP: function (_0x13db24, _0x474534) {
      return _0x13db24 + _0x474534;
    }
  };
  let _0x4d2699 = _0x5bd1b6.naQgS(MD5, _0x24a790);
  let _0x1219e7 = _0x4d2699.substr(0, 1);
  let _0x3ea713 = _0x4d2699.substr(-1, 1);
  let _0x502482 = _0x5bd1b6.qTJeO(_0x1219e7, _0x3ea713);
  return _0x5bd1b6.naQgS(MD5, _0x5bd1b6.sZvLP(_0x24a790, _0x502482));
}
async function getSig56(_0x33bcd9 = {}, _0x5cf537 = null, _0x1cfb1d = "get", _0x101b42 = "json", _0x2951ea) {
  if (!process.env.kuaishou_speed_openbox || !process.env.kuaishou_speed) {
    return "";
  }
  const _0x32948c = require("path");
  if (!(_0x32948c.resolve(__dirname).indexOf("smallfawn") !== -1)) {
    return "";
  }
  let _0x20b761 = "http://yi100.top:5666/sig56";
  try {
    {
      {
        {
          const _0x394825 = {
            Cookie: _0x2951ea
          };
          const _0x12696c = {
            query: _0x33bcd9,
            data: _0x5cf537,
            method: _0x1cfb1d,
            type: _0x101b42
          };
          let _0xcbdfcf = {
            url: _0x20b761,
            headers: _0x394825,
            method: "POST",
            data: _0x12696c
          };
          _0xcbdfcf.headers.sign = getSign(JSON.stringify(_0xcbdfcf.data));
          let {
            data: _0x56218e
          } = await axios.request(_0xcbdfcf);
          return _0x56218e ? _0x56218e.s3 ? _0x56218e.s3 : false : false;
        }
      }
    }
  } catch (_0x532cf4) {
    {
      {
        {
          return false;
        }
      }
    }
  }
}
async function getSig68(_0x478873 = {}, _0x393a10 = null, _0x4c5c36 = "get", _0x47c97d = "json", _0x3d699c) {
  if (!process.env.kuaishou_speed_openbox || !process.env.kuaishou_speed) {
    {
      return "";
    }
  }
  const _0x2c61eb = require("path");
  if (!(_0x2c61eb.resolve(__dirname).indexOf("smallfawn") !== -1)) {
    return "";
  }
  let _0x321f24 = "http://yi100.top:5666/sig68";
  try {
    {
      const _0x43df97 = {
        Cookie: _0x3d699c,
        sign: ""
      };
      const _0x5538f4 = {
        query: _0x478873,
        data: _0x393a10,
        method: _0x4c5c36,
        type: _0x47c97d
      };
      let _0xf995da = {
        url: _0x321f24,
        headers: _0x43df97,
        method: "POST",
        data: _0x5538f4
      };
      _0xf995da.headers.sign = getSign(JSON.stringify(_0xf995da.data));
      let {
        data: _0xbb5a25
      } = await axios.request(_0xf995da);
      return _0xbb5a25 ? _0xbb5a25.s3 ? _0xbb5a25.s3 : false : false;
    }
  } catch (_0x1087f6) {
    return false;
  }
}