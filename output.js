//Fri Feb 28 2025 10:05:13 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
const crypto = require("crypto");
function MD5(_0x5a208f) {
  return crypto.createHash("MD5").update(_0x5a208f).digest("hex");
}
function getSign(_0x5abdd2) {
  const _0x170742 = {
    xxnXM: function (_0x362ec0, _0x23ceec) {
      return _0x362ec0(_0x23ceec);
    },
    vqUpG: function (_0x168858, _0x533ee3) {
      return _0x168858 + _0x533ee3;
    }
  };
  const _0x3eb98c = {
    naQgS: function (_0x2d0baf, _0x219b6b) {
      return _0x170742.xxnXM(_0x2d0baf, _0x219b6b);
    },
    qTJeO: function (_0x11a892, _0x3d8bed) {
      return _0x170742.vqUpG(_0x11a892, _0x3d8bed);
    },
    sZvLP: function (_0x3267fe, _0x1a23d6) {
      return _0x170742.vqUpG(_0x3267fe, _0x1a23d6);
    }
  };
  let _0x293b67 = _0x3eb98c.naQgS(MD5, _0x5abdd2);
  let _0x2b48bc = _0x293b67.substr(0, 1);
  let _0x525c90 = _0x293b67.substr(-1, 1);
  let _0x42a4d4 = _0x3eb98c.qTJeO(_0x2b48bc, _0x525c90);
  return _0x3eb98c.naQgS(MD5, _0x3eb98c.sZvLP(_0x5abdd2, _0x42a4d4));
}
async function getSig56(_0x14ec0e = {}, _0x487b78 = null, _0x364978 = "get", _0x3a4346 = "json", _0x46bc45) {
  const _0x55e112 = {
    HDvzU: function (_0x158edf, _0x4cc759) {
      return _0x158edf(_0x4cc759);
    },
    rEGVb: "path",
    YWMtn: function (_0xc92bfe, _0x4860f3) {
      return _0xc92bfe !== _0x4860f3;
    },
    haXAr: "smallfawn",
    RMIkF: "http://yi100.top:5666/sig56",
    jdwOb: "POST"
  };
  if (!process.env.kuaishou_speed_openbox || !process.env.kuaishou_speed) {
    return "";
  }
  const _0x435567 = _0x55e112.HDvzU(require, _0x55e112.rEGVb);
  if (!_0x55e112.YWMtn(_0x435567.resolve(__dirname).indexOf(_0x55e112.haXAr), -1)) {
    return "";
  }
  let _0x33c575 = _0x55e112.RMIkF;
  try {
    const _0x5731dc = {
      Cookie: _0x46bc45
    };
    const _0x53d18d = {
      query: _0x14ec0e,
      data: _0x487b78,
      method: _0x364978,
      type: _0x3a4346
    };
    let _0x5271c6 = {
      url: _0x33c575,
      headers: _0x5731dc,
      method: _0x55e112.jdwOb,
      data: _0x53d18d
    };
    _0x5271c6.headers.sign = _0x55e112.HDvzU(getSign, JSON.stringify(_0x5271c6.data));
    let {
      data: _0x24d848
    } = await axios.request(_0x5271c6);
    return _0x24d848 ? _0x24d848.s3 ? _0x24d848.s3 : false : false;
  } catch (_0x4b3ff6) {
    return false;
  }
}
async function getSig68(_0x436b98 = {}, _0x2d2370 = null, _0x36f559 = "get", _0xe0bac5 = "json", _0x55f1a7) {
  const _0x4bda6c = {
    QrVmW: function (_0x373cbb, _0x430bd2) {
      return _0x373cbb(_0x430bd2);
    },
    LffHi: "path",
    pPscH: function (_0xa0d139, _0x58a1bd) {
      return _0xa0d139 !== _0x58a1bd;
    },
    EpMNd: "smallfawn",
    FPvyT: "http://yi100.top:5666/sig68",
    PpBHM: "POST"
  };
  if (!process.env.kuaishou_speed_openbox || !process.env.kuaishou_speed) {
    return "";
  }
  const _0x14fcf8 = _0x4bda6c.QrVmW(require, _0x4bda6c.LffHi);
  if (!_0x4bda6c.pPscH(_0x14fcf8.resolve(__dirname).indexOf(_0x4bda6c.EpMNd), -1)) {
    return "";
  }
  let _0x157a3b = _0x4bda6c.FPvyT;
  try {
    const _0x353e95 = {
      Cookie: _0x55f1a7,
      sign: ""
    };
    const _0x27341d = {
      query: _0x436b98,
      data: _0x2d2370,
      method: _0x36f559,
      type: _0xe0bac5
    };
    let _0x229309 = {
      url: _0x157a3b,
      headers: _0x353e95,
      method: _0x4bda6c.PpBHM,
      data: _0x27341d
    };
    _0x229309.headers.sign = _0x4bda6c.QrVmW(getSign, JSON.stringify(_0x229309.data));
    let {
      data: _0x478622
    } = await axios.request(_0x229309);
    return _0x478622 ? _0x478622.s3 ? _0x478622.s3 : false : false;
  } catch (_0x53dce6) {
    return false;
  }
}
(function (_0x12c663, _0x2975d7, _0x2453fb) {
  _0x2453fb = "al";
  try {
    _0x2453fb += "ert";
    _0x2975d7 = encode_version;
    if (!(typeof _0x2975d7 !== "undefined" && _0x2975d7 === "jsjiami.com.v5")) {
      _0x12c663[_0x2453fb]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x227781) {
    _0x12c663[_0x2453fb]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";