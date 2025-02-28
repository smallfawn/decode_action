//Fri Feb 28 2025 10:01:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
const crypto = require("crypto");
function MD5(_0x2ea37a) {
  return crypto.createHash("MD5").update(_0x2ea37a).digest("hex");
}
function getSign(_0x33348a) {
  const _0x5c0f56 = {
    xxnXM: function (_0x17ed9c, _0x2e8e21) {
      return _0x17ed9c(_0x2e8e21);
    },
    vqUpG: function (_0x179cf, _0x13fe58) {
      {
        return _0x179cf + _0x13fe58;
      }
    }
  };
  const _0x1c8f9d = {
    naQgS: function (_0x2fcf92, _0x128cbc) {
      return _0x5c0f56.xxnXM(_0x2fcf92, _0x128cbc);
    },
    qTJeO: function (_0x33ec67, _0x1e20c3) {
      {
        return _0x5c0f56.vqUpG(_0x33ec67, _0x1e20c3);
      }
    },
    sZvLP: function (_0x454ee3, _0x3e1b5a) {
      return _0x5c0f56.vqUpG(_0x454ee3, _0x3e1b5a);
    }
  };
  let _0x36d250 = _0x1c8f9d.naQgS(MD5, _0x33348a);
  let _0x597094 = _0x36d250.substr(0, 1);
  let _0x57c3ed = _0x36d250.substr(-1, 1);
  let _0x5adcf6 = _0x1c8f9d.qTJeO(_0x597094, _0x57c3ed);
  return _0x1c8f9d.naQgS(MD5, _0x1c8f9d.sZvLP(_0x33348a, _0x5adcf6));
}
async function getSig56(_0xce9d13 = {}, _0x42a89b = null, _0x2150e8 = "get", _0x18165f = "json", _0x2e6177) {
  const _0x285946 = {
    HDvzU: function (_0x275d65, _0x569709) {
      {
        return _0x275d65(_0x569709);
      }
    },
    rEGVb: "path",
    YWMtn: function (_0x47b77f, _0x9402ae) {
      return _0x47b77f !== _0x9402ae;
    },
    haXAr: "smallfawn",
    RMIkF: "http://yi100.top:5666/sig56",
    jdwOb: "POST"
  };
  if (!process.env.kuaishou_speed_openbox || !process.env.kuaishou_speed) {
    return "";
  }
  const _0x247c07 = _0x285946.HDvzU(require, _0x285946.rEGVb);
  if (!_0x285946.YWMtn(_0x247c07.resolve(__dirname).indexOf(_0x285946.haXAr), -1)) {
    return "";
  }
  let _0x321d3f = _0x285946.RMIkF;
  try {
    {
      {
        {
          {
            {
              const _0x3cbad5 = {
                Cookie: _0x2e6177
              };
              const _0x3c9a71 = {
                query: _0xce9d13,
                data: _0x42a89b,
                method: _0x2150e8,
                type: _0x18165f
              };
              let _0x2c31d9 = {
                url: _0x321d3f,
                headers: _0x3cbad5,
                method: _0x285946.jdwOb,
                data: _0x3c9a71
              };
              _0x2c31d9.headers.sign = _0x285946.HDvzU(getSign, JSON.stringify(_0x2c31d9.data));
              let {
                data: _0x176176
              } = await axios.request(_0x2c31d9);
              return _0x176176 ? _0x176176.s3 ? _0x176176.s3 : false : false;
            }
          }
        }
      }
    }
  } catch (_0x44f6b7) {
    {
      {
        {
          {
            {
              return false;
            }
          }
        }
      }
    }
  }
}
async function getSig68(_0x368c89 = {}, _0x2ffea8 = null, _0x341046 = "get", _0x598643 = "json", _0x507043) {
  const _0x2f7dfe = {
    QrVmW: function (_0x41ac8f, _0x2e96b2) {
      {
        return _0x41ac8f(_0x2e96b2);
      }
    },
    LffHi: "path",
    pPscH: function (_0x1a8c08, _0x573c74) {
      {
        return _0x1a8c08 !== _0x573c74;
      }
    },
    EpMNd: "smallfawn",
    FPvyT: "http://yi100.top:5666/sig68",
    PpBHM: "POST"
  };
  if (!process.env.kuaishou_speed_openbox || !process.env.kuaishou_speed) {
    return "";
  }
  const _0x63fde9 = _0x2f7dfe.QrVmW(require, _0x2f7dfe.LffHi);
  if (!_0x2f7dfe.pPscH(_0x63fde9.resolve(__dirname).indexOf(_0x2f7dfe.EpMNd), -1)) {
    return "";
  }
  let _0x53b1a3 = _0x2f7dfe.FPvyT;
  try {
    {
      {
        const _0x577a29 = {
          Cookie: _0x507043,
          sign: ""
        };
        const _0x397e71 = {
          query: _0x368c89,
          data: _0x2ffea8,
          method: _0x341046,
          type: _0x598643
        };
        let _0x42e23f = {
          url: _0x53b1a3,
          headers: _0x577a29,
          method: _0x2f7dfe.PpBHM,
          data: _0x397e71
        };
        _0x42e23f.headers.sign = _0x2f7dfe.QrVmW(getSign, JSON.stringify(_0x42e23f.data));
        let {
          data: _0x145275
        } = await axios.request(_0x42e23f);
        return _0x145275 ? _0x145275.s3 ? _0x145275.s3 : false : false;
      }
    }
  } catch (_0x1b8335) {
    {
      return false;
    }
  }
}
(function (_0x3dc61c, _0x57ea46, _0x35e88c) {
  _0x35e88c = "al";
  try {
    {
      _0x35e88c += "ert";
      _0x57ea46 = encode_version;
      if (!(typeof _0x57ea46 !== "undefined" && _0x57ea46 === "jsjiami.com.v5")) {
        _0x3dc61c[_0x35e88c]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x366690) {
    _0x3dc61c[_0x35e88c]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";