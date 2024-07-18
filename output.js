//Thu Jul 18 2024 06:11:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    tryCatchPromise: _0x3c1697,
    validateCarmeWithType: _0x1838d8,
    getCookies: _0x3d11d4,
    checkCk: _0x1ea36c,
    getUserInfo: _0x3683a6,
    checkCarmeCount: _0x411585,
    wait: _0x2563a2
  } = require("./common"),
  _0x4f28d4 = require("crypto"),
  _0x8b542c = 19,
  _0x3c7b91 = require("request"),
  _0x4d7f05 = require("md5");
let _0x39c5cf = 1;
const _0x5afa9f = process.env.ELE_CARME,
  HOST = process.env.HOST;
let _0x1d3131;
async function _0x322d63(_0x405254) {
  const _0x1fb68d = {
    bizScene: "ELEME_ELMYLY",
    instance: "INNER"
  };
  let _0x11e765 = await _0x1294c5("mtop.alsc.playgame.common.real.name.authentication", _0x405254, _0x1fb68d);
  return _0x11e765.authentication;
}
async function _0x2db845(_0x2a8711) {
  const _0x4c853c = new Date().getTime(),
    _0x3d2217 = {
      body: "{\"nickname\":\"普通玩家\",\"avatar\":\"998d3ad143b581e8f2a3866c1f8a783cjpeg\",\"inviterId\":\"\",\"inviterType\":0,\"shareTime\":0,\"debug\":null,\"reqIdx\":" + _0x39c5cf + ",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.6\"}",
      headers: "{\"content-type\":\"application/json;charset=UTF-8\"}",
      instance: "INNER",
      method: "POST",
      options: "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
      path: "/api/role/login",
      protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x4c853c + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
    };
  let _0x7ffc2b = await _0x1294c5("mtop.miniapp.cloud.application.request", _0x2a8711, _0x3d2217);
  if (_0x7ffc2b) {
    return _0x7ffc2b.data;
  }
  return null;
}
async function _0x5328bf(_0xdfb2a2) {
  const _0x79b174 = new Date().getTime();
  _0x39c5cf++;
  const _0x1ad576 = {
    body: "{\"reqIdx\":" + _0x39c5cf + ",\"gameId\":\"" + _0x2d3a3e + "\",\"token\":\"" + _0x2dfbfc + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.6\"}",
    headers: "{\"content-type\":\"application/json;charset=UTF-8\"}",
    instance: "INNER",
    method: "POST",
    options: "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    path: "/onlineB/api/game/getAllOpenActivityInfo",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x79b174 + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  return await _0x1294c5("mtop.miniapp.cloud.application.request", _0xdfb2a2, _0x1ad576);
}
async function _0x186efa(_0x3e899c, _0x3180a4, _0x1a1db4, _0x57bc1e = 1014, _0x1ab596) {
  const _0x5cee1c = new Date().getTime();
  _0x39c5cf++;
  const _0x527100 = {
    body: "{\"orderQueryId\":\"" + _0x3180a4 + "\",\"posArray\":" + JSON.stringify(_0x1a1db4) + ",\"customerId\":\"" + _0x57bc1e + "\",\"type\":" + _0x1ab596 + ",\"reqIdx\":" + _0x39c5cf + ",\"gameId\":\"" + _0x2d3a3e + "\",\"token\":\"" + _0x2dfbfc + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.6\"}",
    headers: "{\"content-type\":\"application/json;charset=UTF-8\"}",
    instance: "INNER",
    method: "POST",
    options: "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    path: "/api/game/completeOrder",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x5cee1c + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  let _0x273c65 = await _0x1294c5("mtop.miniapp.cloud.application.request", _0x3e899c, _0x527100);
  if (_0x273c65) {
    let _0x3497d5 = _0x273c65.data;
    if (!_0x3497d5) {
      console.log(_0x273c65);
      return null;
    }
    let _0x187d16 = _0x3497d5.updatePieceArray;
    if (_0x187d16) {
      for (let _0x4e18ae = 0; _0x4e18ae < _0x187d16.length; _0x4e18ae++) {
        let _0x48e2e8 = _0x187d16[_0x4e18ae];
        for (let _0x49bf20 = 0; _0x49bf20 < _0x19052a.length; _0x49bf20++) {
          let _0x49a1b2 = _0x19052a[_0x49bf20];
          _0x48e2e8.pieceId === _0x49a1b2.pieceId && (_0x19052a[_0x49bf20] = _0x48e2e8);
        }
      }
    }
    let _0x4d8342 = _0x3497d5.ownCropMap;
    _0x4d8342 && (_0x1d3131 = _0x4d8342);
    _0x3497d5.orderArray && (_0x2fc833 = _0x3497d5.orderArray);
  }
  return _0x273c65;
}
async function _0x4d51ea(_0x29dc0b) {
  const _0x1dd7a9 = new Date().getTime();
  _0x39c5cf++;
  const _0x3b098a = {
    body: "{\"reqIdx\":" + _0x39c5cf + ",\"gameId\":\"" + _0x2d3a3e + "\",\"token\":\"" + _0x2dfbfc + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.6\"}",
    headers: "{\"content-type\":\"application/json;charset=UTF-8\"}",
    instance: "INNER",
    method: "POST",
    options: "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    path: "/onlineB/api/task/getTasksList",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x1dd7a9 + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  let _0x3c0ed5 = await _0x1294c5("mtop.miniapp.cloud.application.request", _0x29dc0b, _0x3b098a),
    _0x98f07e = _0x3c0ed5.data;
  if (_0x98f07e) {
    try {
      let _0x20521d = _0x98f07e.taskInfo.dailyTasks;
      if (_0x20521d) {
        for (const _0x4df52e of Object.keys(_0x20521d)) {
          const _0x48b809 = _0x20521d[_0x4df52e];
          if (_0x48b809.type === 3 && !_0x48b809.haveGotReward) {
            let _0x454584 = await _0x5606d6(_0x29dc0b, _0x4df52e);
            _0x454584.data && console.log("领取任务奖励完成，当前乐园币", _0x454584.data.elemCoin);
          }
        }
      }
    } catch (_0x952e08) {}
  }
}
async function _0x5606d6(_0x2a879f, _0x409e82) {
  const _0x4b1a9a = new Date().getTime();
  _0x39c5cf++;
  const _0x2884f3 = {
    body: "{\"taskId\":" + _0x409e82 + ",\"taskType\":0,\"reqIdx\":" + _0x39c5cf + ",\"gameId\":\"" + _0x2d3a3e + "\",\"token\":\"" + _0x2dfbfc + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.6\"}",
    headers: "{\"content-type\":\"application/json;charset=UTF-8\"}",
    instance: "INNER",
    method: "POST",
    options: "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    path: "/api/task/getTaskAward",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x4b1a9a + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  return await _0x1294c5("mtop.miniapp.cloud.application.request", _0x2a879f, _0x2884f3);
}
async function _0x3aca26(_0x372008, _0x418458) {
  const _0x45fbad = new Date().getTime();
  _0x39c5cf++;
  const _0xdb4d2a = {
    body: "{\"pos\":" + JSON.stringify(_0x418458) + ",\"reqIdx\":" + _0x39c5cf + " ,\"gameId\":\"" + _0x2d3a3e + "\",\"token\":\"" + _0x2dfbfc + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.6\"}",
    headers: "{\"content-type\":\"application/json;charset=UTF-8\"}",
    instance: "INNER",
    method: "POST",
    options: "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    path: "/onlineB/api/game/cropSell",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x45fbad + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  let _0x3ab561 = await _0x1294c5("mtop.miniapp.cloud.application.request", _0x372008, _0xdb4d2a);
  if (_0x3ab561.data) {
    for (let _0x490a33 = 0; _0x490a33 < _0x19052a.length; _0x490a33++) {
      let _0x2a2f24 = _0x19052a[_0x490a33];
      _0x3ab561.data.piece.pieceId === _0x2a2f24.pieceId && (_0x19052a[_0x490a33] = _0x3ab561.data.piece);
    }
    console.log("售卖植物，当前金币", _0x3ab561.data.coin);
  }
  return _0x3ab561;
}
function _0x30b08e(_0xf63e1c) {
  if (!_0xf63e1c) {
    return "-1";
  }
  for (var _0x3c524d = _0xf63e1c.split(";"), _0x37190d = 0; _0x37190d < _0x3c524d.length; _0x37190d++) {
    var _0x1467e8 = _0x3c524d[_0x37190d].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x1467e8[0])) {
      return _0x1467e8[1];
    }
  }
  return "-1";
}
const _0x33de2c = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAntZvpNYeRv7UpTSvhzWtdVvUxPeSwfyFvV1hyhjByfc+RKLcBFHdkyI0nB4pMWcLln6zmXfhEJK+eSBovY7BR6LAP/fV+zhxTChnlMGjDwhr+E3/LEnlH24lVcIIFQaU/grflUGJHVJrCHtkJ3NPTLrit5gilviRNUSHMI+Y+PcX9HfzGCCEp1lnIPkzVrWVojtcXLjEYfdGZRijK/udICjSHNXp9No/vzrFxaH2jfk6PVLAcNXZAEGbNUdIzbfYorGdU6lf3tFJ8E2Fs1k6Q4BTFXYzkq+EejOYjHF64M5OTTKtfNcrHcZo13EDdjG5JRaKx7bGc5e5lUOSsBCWdwIDAQAB\n-----END PUBLIC KEY-----";
function _0x4eccfe(_0x4b8f92) {
  const _0x2580b2 = Buffer.from(_0x4b8f92, "utf8"),
    _0x4a8f5c = _0x4f28d4.publicEncrypt(_0x33de2c, _0x2580b2);
  return _0x4a8f5c.toString("base64");
}
const _0xb58311 = async (_0x402cc8, _0x41220, _0x9cb594 = 5) => {
  if (_0x9cb594 === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  const _0x3c3db0 = _0x30b08e(_0x402cc8),
    _0xbb037e = _0x3c3db0.split("_")[0],
    _0x4f71b6 = {
      carmi: _0x5afa9f,
      content: _0xbb037e + _0x41220,
      type: 1
    };
  var _0x231eb4 = {
      "content-type": "application/json",
      auth: Buffer.from(_0x402cc8).toString("base64")
    },
    _0x5a0e39 = {
      url: HOST + "/new/sign",
      method: "POST",
      headers: _0x231eb4,
      body: JSON.stringify(_0x4f71b6)
    };
  return _0x3c1697(_0x1a526a => {
    _0x3c7b91(_0x5a0e39, async (_0x4ae76e, _0x20df60, _0x3dbde1) => {
      if (!_0x4ae76e && _0x20df60.statusCode === 200) {
        const _0x1e692e = JSON.parse(_0x3dbde1);
        _0x1e692e.code !== 20000 ? (console.error(_0x1e692e.message), process.exit(0)) : _0x1a526a(_0x1e692e.data.msg);
      } else {
        _0x4ae76e && (_0x4ae76e.message.indexOf("socket hang up") !== -1 || _0x4ae76e.message.indexOf("read ECONNRESET") !== -1) ? (console.log("网络链接失败，将在 2 秒后重试"), await _0x2563a2(2), _0x1a526a(await _0xb58311(_0x402cc8, _0x41220, _0x9cb594 - 1))) : (console.log("网络异常，请检查网络状况"), _0x1a526a(""));
      }
    });
  });
};
async function _0x1294c5(_0x15edc9, _0x284adc, _0x5471f2) {
  var _0x146bc9 = {
    accept: "application/json",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x284adc,
    "x-miniapp-id-taobao": "3000000088680964",
    "x-miniapp-version": "0.0.19",
    "x-mini-appkey": "34351764",
    "x-miniapp-env": "{\"nbsn\":\"ONLINE\",\"nbsource\":\"online\"}",
    "x-req-appkey": "34351764",
    "x-open-biz": "mini-app",
    "x-open-biz-data": "%7B%22appId%22%3A%223000000088680964%22%2C%22invokerAppId%22%3A%223000000088680964%22%2C%22viaFusionApp%22%3Atrue%7D",
    "x-exttype": "isv_open_api",
    appid: "3000000088680964"
  };
  const _0x21a515 = new Date().getTime(),
    _0x2472ae = 34351764,
    _0x1a6f81 = "data=" + encodeURIComponent(JSON.stringify(_0x5471f2)),
    _0xb022c3 = await _0xb58311(_0x284adc, "&" + _0x21a515 + "&" + _0x2472ae + "&" + JSON.stringify(_0x5471f2)),
    _0x40338b = {
      url: "https://shopping.ele.me/h5/" + _0x15edc9 + "/1.0/?jsv=2.6.1&appKey=34351764&t=" + _0x21a515 + "&sign=" + _0xb022c3 + "&api=" + _0x15edc9 + "&v=1.0&type=originaljson&ttid=1608030065155%40eleme_android_11.0.38",
      method: "POST",
      headers: _0x146bc9,
      body: _0x1a6f81
    };
  return _0x3c1697(_0x5552a5 => {
    _0x3c7b91(_0x40338b, async (_0x2d4784, _0x4bc74f, _0x28f416) => {
      if (!_0x2d4784 && _0x4bc74f.statusCode === 200) {
        try {
          const _0x206f2e = JSON.parse(_0x28f416);
          _0x5552a5(_0x206f2e.data.data);
        } catch (_0x43cd3b) {
          console.log(_0x28f416);
          _0x5552a5(null);
        }
      } else {
        _0x5552a5(null);
      }
    });
  });
}
let _0x2d3a3e,
  _0x2dfbfc,
  _0x19052a = [],
  _0x2fc833 = [],
  _0x6cd8c9 = [];
async function _0x5803b7(_0x2efe0a) {
  let _0xe8bc5c = 0;
  for (let _0x5e35e8 = 0; _0x5e35e8 < _0x2fc833.length; _0x5e35e8++) {
    let _0x2fa472 = _0x2fc833[_0x5e35e8],
      _0x7f10bd = _0x2fa472.needCropIds;
    for (let _0xb7a717 = 0; _0xb7a717 < _0x7f10bd.length; _0xb7a717++) {
      let _0x683c04 = _0x7f10bd[_0xb7a717];
      _0xe8bc5c = await _0xd242e1(_0x2efe0a, _0x2fa472, _0x683c04);
      if (_0xe8bc5c === 3 || _0xe8bc5c === -1) {
        break;
      }
      while (_0xe8bc5c === 0) {
        _0xe8bc5c = await _0xd242e1(_0x2efe0a, _0x2fa472, _0x683c04);
      }
      if (_0xe8bc5c === 3 || _0xe8bc5c === -1) {
        break;
      }
    }
    _0xe8bc5c === 4 && (_0xe8bc5c = await _0x4a0cb1(_0x7f10bd, _0x2efe0a, _0x2fa472));
    if (_0xe8bc5c === 3 || _0xe8bc5c === -1) {
      break;
    }
  }
  return _0xe8bc5c;
}
async function _0xb4a5b7(_0x4c992a, _0x3fba42) {
  await _0x1b6f0d(_0x3fba42);
  await _0x5328bf(_0x4c992a);
  let _0x3d7635 = await _0xd242e1(_0x4c992a);
  while (_0x3d7635 === 0) {
    let _0x1cb459 = await _0x2db845(_0x4c992a);
    await _0x1b6f0d(_0x1cb459);
    _0x3d7635 = await _0xd242e1(_0x4c992a);
  }
  await _0x4d51ea(_0x4c992a);
}
async function _0x1b6f0d(_0x564574) {
  _0x2d3a3e = null;
  _0x2dfbfc = null;
  _0x19052a = [];
  _0x2fc833 = [];
  _0x6cd8c9 = [];
  _0x2d3a3e = _0x564574.gameId;
  _0x2dfbfc = _0x564574.token;
  _0x1d3131 = _0x564574.cropInfo.ownCropMap;
  let _0x24d374 = _0x564574.gardenInfo.checkerboard;
  for (let _0x4585d4 = 0; _0x4585d4 < _0x24d374.length; _0x4585d4++) {
    let _0x943af6 = _0x24d374[_0x4585d4];
    for (let _0x3f4bb1 = 0; _0x3f4bb1 < _0x943af6.length; _0x3f4bb1++) {
      let _0x420891 = _0x943af6[_0x3f4bb1];
      !_0x420891.isLock && _0x19052a.push(_0x420891);
    }
  }
  Object.keys(_0x1d3131).forEach(_0x2eef69 => {
    let _0x4fce3b = _0x1d3131[_0x2eef69];
    if (_0x4fce3b.seeds.length > 0) {
      let _0x1263db = _0x29e838(_0x4fce3b.queryId);
      _0x1263db && (_0x1263db.seeds = _0x4fce3b.seeds, _0x6cd8c9.push(_0x1263db));
    }
  });
  _0x2fc833 = _0x564574.orderInfo.orderArray;
}
async function _0x1ee66a(_0x5c926c, _0xaae673) {
  let _0x3e83b9 = _0x5c926c - 1,
    _0x4aa969 = _0x3e83b9.toString();
  while (_0x4aa969.substring(_0x4aa969.length - 2) !== "00") {
    let _0x378ee1,
      _0x3885c5,
      _0x282261 = [],
      _0x564a27 = 0;
    for (let _0x1eb51b = 0; _0x1eb51b < _0x19052a.length; _0x1eb51b++) {
      let _0xafe172 = _0x19052a[_0x1eb51b],
        _0x928244 = _0xafe172.cropQueryId;
      if (_0x928244) {
        let _0x12c3b9 = _0x1d3131[_0x928244];
        if (_0x12c3b9) {
          if (_0x12c3b9.id === _0x3e83b9) {
            _0x564a27 += 1;
            if (_0x564a27 % 2 === 0) {
              _0x3885c5 = _0xafe172.pos;
              let _0x374fcf = {
                type: 1,
                pos1: _0x378ee1,
                pos2: _0x3885c5,
                timestamp: Date.now(),
                isSkipLevel: false,
                surprisingCrop: null
              };
              if (!(_0x378ee1.x === _0x3885c5.x && _0x378ee1.y === _0x3885c5.y)) {
                _0x282261.push(_0x374fcf);
              }
            } else {
              _0x378ee1 = _0xafe172.pos;
            }
          }
        }
      }
    }
    _0x282261.length > 0 && (console.log("开始合成植物"), await _0x286ad5(_0xaae673, _0x282261), _0x282261 = []);
    _0x3e83b9 -= 1;
    _0x4aa969 = _0x3e83b9.toString();
  }
  return _0x3e83b9;
}
async function _0x4a0cb1(_0x285e3e, _0x42c965, _0x2c66d2) {
  let _0x2e1843 = true,
    _0x1e4dd7 = [];
  for (let _0xa3b88 = 0; _0xa3b88 < _0x285e3e.length; _0xa3b88++) {
    let _0x3506da = _0x285e3e[_0xa3b88],
      _0x2fb6a9 = _0x53c844(_0x3506da);
    if (!_0x2fb6a9) {
      _0x2e1843 = false;
      break;
    } else {
      _0x1e4dd7.push(_0x2fb6a9.pos);
    }
  }
  if (_0x2e1843) {
    let _0x34e3ef = await _0x186efa(_0x42c965, _0x2c66d2.queryId, _0x1e4dd7, _0x2c66d2.customerId, _0x2c66d2.type);
    if (_0x34e3ef) {
      console.log("完成订单，获得", _0x2c66d2.orderValue, "金币");
      return 3;
    }
  }
}
async function _0x5075f7(_0x5b286a) {
  for (let _0x450c64 = 0; _0x450c64 < _0x6cd8c9.length; _0x450c64++) {
    let _0x179e12 = _0x6cd8c9[_0x450c64];
    if (!_0x179e12) {
      console.log("需要解锁新母体植物");
      return;
    }
    let _0x3b27ca = [];
    for (let _0x58fc2a = 0; _0x58fc2a < _0x19052a.length; _0x58fc2a++) {
      let _0x4292c8 = _0x19052a[_0x58fc2a];
      if (!_0x4292c8.cropQueryId) {
        let _0x1e7b8a = {
          producedCrop: {},
          type: 2,
          pos1: _0x179e12.pos,
          pos2: _0x4292c8.pos,
          timestamp: new Date().getTime()
        };
        _0x1e7b8a.producedCrop.queryId = _0x5265ab(_0x1d3131, 1);
        _0x1e7b8a.producedCrop.cropId = _0x179e12.seeds[0];
        _0x3b27ca.push(_0x1e7b8a);
      }
    }
    if (_0x3b27ca.length > 0) {
      console.log("开始种植新的植物");
      let _0x22cd71 = await _0x286ad5(_0x5b286a, _0x3b27ca);
      if (_0x22cd71 === -1) {
        return -1;
      } else {
        if (_0x22cd71 === 1 || _0x22cd71 == null) {
          continue;
        }
      }
      return 0;
    }
  }
}
async function _0xd242e1(_0x5d3134) {
  for (let _0x48715c = 0; _0x48715c < _0x19052a.length; _0x48715c++) {
    let _0x5b8d2f = _0x19052a[_0x48715c];
    _0x5b8d2f.cropQueryId && _0x1d3131[_0x5b8d2f.cropQueryId].type === 1 && (await _0x3aca26(_0x5d3134, _0x5b8d2f.pos));
  }
  return await _0x5075f7(_0x5d3134);
}
async function _0x318541(_0x3b05fc) {
  const _0x571612 = new Date().getTime();
  _0x39c5cf++;
  const _0x2f5e8f = {
    body: "{\"type\":2,\"reqIdx\":" + _0x39c5cf + ",\"gameId\":\"" + _0x2d3a3e + "\",\"token\":\"" + _0x2dfbfc + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.6\"}",
    headers: "{\"content-type\":\"application/json;charset=UTF-8\"}",
    instance: "INNER",
    method: "POST",
    options: "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    path: "/onlineB/api/game/refresh",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x571612 + "\",\"mc-env\":\"online\",\"mc-network\":\"WIFI\"}"
  };
  let _0x36d7df = await _0x1294c5("mtop.miniapp.cloud.application.request", _0x3b05fc, _0x2f5e8f);
  return _0x36d7df;
}
function _0x53c844(_0x46ba87) {
  for (let _0x106b46 = 0; _0x106b46 < _0x19052a.length; _0x106b46++) {
    let _0x2e7e7e = _0x19052a[_0x106b46],
      _0x35c724 = _0x2e7e7e.cropQueryId;
    if (_0x35c724) {
      let _0x1e55a5 = _0x1d3131[_0x35c724];
      if (_0x1e55a5) {
        if (_0x1e55a5.id === _0x46ba87) {
          return _0x2e7e7e;
        }
      }
    }
  }
  return null;
}
function _0x250f3f(_0x43083c) {
  for (let _0x107891 = 0; _0x107891 < _0x6cd8c9.length; _0x107891++) {
    let _0xf5c405 = _0x6cd8c9[_0x107891];
    if (_0xf5c405.seeds[0].toString().substring(0, 4) === _0x43083c.toString().substring(0, 4)) {
      return _0xf5c405;
    }
  }
  return null;
}
function _0x29e838(_0x2aba43) {
  for (let _0x394399 = 0; _0x394399 < _0x19052a.length; _0x394399++) {
    let _0x322f2a = _0x19052a[_0x394399];
    if (_0x322f2a.cropQueryId === _0x2aba43) {
      return _0x322f2a;
    }
  }
  return null;
}
function _0x5265ab(_0x4af128, _0x132d80) {
  var _0x40ef8f = _0x8dbc27(Date.now(), Math.random());
  if (!_0x4af128 || !_0x4af128[_0x40ef8f] || !_0x132d80 || _0x132d80 <= 0) {
    return _0x40ef8f;
  }
  for (var _0x2d0424 = 0; _0x2d0424 < _0x132d80; _0x2d0424++) {
    if (!_0x4af128[_0x40ef8f = _0x8dbc27(Date.now(), Math.random())]) {
      return _0x40ef8f;
    }
    console.error("generate id failed, retry:" + (_0x2d0424 + 1) + "/" + _0x132d80);
  }
}
function _0x8dbc27() {
  for (var _0x509cce = [], _0x210619 = 0; _0x210619 < arguments.length; _0x210619++) {
    _0x509cce[_0x210619] = arguments[_0x210619];
  }
  return _0x4d7f05(_0x509cce.join("+")).toString();
}
async function _0x286ad5(_0x290573, _0x19464c) {
  await _0x2563a2(3);
  _0x39c5cf++;
  let _0x11c9d5 = JSON.stringify(_0x19464c);
  const _0x106cf3 = {
    body: "{\"cmds\":" + _0x11c9d5 + ",\"reqIdx\":" + _0x39c5cf + ",\"gameId\":\"" + _0x2d3a3e + "\",\"token\":\"" + _0x2dfbfc + "\",\"targetServer\":\"onlineB\",\"clientVersion\":\"v1.0.6\"}",
    headers: "{\"content-type\":\"application/json;charset=UTF-8\"}",
    instance: "INNER",
    method: "POST",
    options: "{\"cloudAppId\":\"47442\",\"timeout\":3000}",
    path: "/onlineB/api/game/cmdExec",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + Date.now() + "\",\"mc-env\":\"online\",\"mc-network\":\"NOTREACHABLE\"}"
  };
  let _0x27b8cf = await _0x1294c5("mtop.miniapp.cloud.application.request", _0x290573, _0x106cf3);
  if (_0x27b8cf) {
    let _0xb6a39e = _0x27b8cf.data;
    if (!_0xb6a39e) {
      console.log(_0x27b8cf);
      return null;
    }
    if (_0xb6a39e.dayUsedEnergyNum) {
      console.log("今日消耗的体力为：" + _0xb6a39e.dayUsedEnergyNum);
      if (_0xb6a39e.dayUsedEnergyNum > 299) {
        await _0x4d51ea(_0x290573);
        console.log("今日所有乐园币任务已完成");
        return -1;
      }
    }
    let _0x4fb182 = _0xb6a39e.changedPieceList;
    if (_0x4fb182.length === 0) {
      if (_0xb6a39e.energy === 0) {
        console.log("体力不足");
        return -1;
      } else {
        console.log("种植失败，稍后重试");
        return 1;
      }
    }
    if (_0x4fb182) {
      for (let _0x45d746 = 0; _0x45d746 < _0x4fb182.length; _0x45d746++) {
        let _0x51a2b5 = _0x4fb182[_0x45d746];
        for (let _0x1c0574 = 0; _0x1c0574 < _0x19052a.length; _0x1c0574++) {
          let _0x12cf35 = _0x19052a[_0x1c0574];
          _0x51a2b5.pieceId === _0x12cf35.pieceId && (_0x19052a[_0x1c0574] = _0x51a2b5);
        }
      }
    }
    let _0xcc0825 = _0xb6a39e.changedCropMap;
    _0xcc0825 && Object.keys(_0xcc0825).forEach(_0x376171 => {
      if (_0x1d3131[_0x376171]) {
        _0xcc0825[_0x376171].isDelete ? delete _0x1d3131[_0x376171] : _0x1d3131[_0x376171] = _0xcc0825[_0x376171].cropInfo;
      } else {
        _0x1d3131[_0x376171] = _0xcc0825[_0x376171].cropInfo;
      }
    });
  }
  return _0x27b8cf;
}
async function _0x4ffda9() {
  await _0x1838d8(_0x5afa9f, 1);
  const _0x48d9b0 = _0x3d11d4();
  for (let _0x411aa9 = 0; _0x411aa9 < _0x48d9b0.length; _0x411aa9++) {
    const _0xb9e21e = _0x48d9b0[_0x411aa9];
    if (!_0xb9e21e) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x82a8a8 = await _0x1ea36c(_0xb9e21e, _0x411aa9);
        if (!_0x82a8a8) {
          continue;
        }
        let _0xa3faa9 = await _0x3683a6(_0x82a8a8);
        if (!_0xa3faa9.username) {
          console.log("第", _0x411aa9 + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0x11741c = _0xa3faa9.user_id;
        await _0x411585(_0x5afa9f, _0x11741c, _0x8b542c);
        console.log("******开始【饿了么账号", _0x411aa9 + 1, "】", _0xa3faa9.username, "*********");
        _0x39c5cf = 1;
        let _0xac6463 = await _0x322d63(_0x82a8a8);
        if (!_0xac6463) {
          console.log("请完成实名认证后再来玩游戏");
          continue;
        }
        let _0x562f5b = await _0x2db845(_0x82a8a8);
        if (_0x562f5b?.["inUpgrade"] === false && _0x562f5b?.["banInfo"]?.["reason"]) {
          console.log(_0x562f5b.banInfo.reason);
          continue;
        }
        if (_0x562f5b.gardenInfo.level < 4) {
          console.log("请先玩到 4 级再运行脚本");
          continue;
        }
        await _0xb4a5b7(_0x82a8a8, _0x562f5b);
      } catch (_0x3ea458) {
        console.log(_0x3ea458);
      }
    }
  }
  process.exit(0);
}
_0x4ffda9();
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}