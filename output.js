//Sun Jul 21 2024 13:30:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const bdy_0x55aeb7 = require("crypto-js"),
  bdy_0x4b9c23 = require("got"),
  bdy_0x411172 = process.env.SIGN_URL ? process.env.SIGN_URL : "";
bdy_0x411172 ? console.log("🈯当前使用指定sign：" + bdy_0x411172 + "\n") : console.log("♻️当前使用内置sign(推荐)，自定义变量SIGN_URL\n");
function bdy_0x2e8175(_0x3a9049 = "") {
  return _0x3a9049;
}
function bdy_0x16634d(_0x34bfb7) {
  let _0x581744 = [];
  for (let _0x2d699 of _0x34bfb7.split("")) {
    let _0x440d39 = _0x2d699.charCodeAt();
    _0x581744 = _0x581744.concat([(_0x440d39 & 128) >> 7, (_0x440d39 & 64) >> 6, (_0x440d39 & 32) >> 5, (_0x440d39 & 16) >> 4, (_0x440d39 & 8) >> 3, (_0x440d39 & 4) >> 2, (_0x440d39 & 2) >> 1, _0x440d39 & 1]);
  }
  return _0x581744;
}
function bdy_0x2120eb(_0x292177) {
  let _0x163cda = Array.from({
    length: parseInt(_0x292177.length / 8)
  }).map(_0x52efa4 => 0);
  for (let _0x18913e in _0x163cda) {
    _0x163cda[_0x18913e] = _0x292177[_0x18913e * 8] << 7 | _0x292177[_0x18913e * 8 + 1] << 6 | _0x292177[_0x18913e * 8 + 2] << 5 | _0x292177[_0x18913e * 8 + 3] << 4 | _0x292177[_0x18913e * 8 + 4] << 3 | _0x292177[_0x18913e * 8 + 5] << 2 | _0x292177[_0x18913e * 8 + 6] << 1 | _0x292177[_0x18913e * 8 + 7];
  }
  return bdy_0x2e8175(_0x163cda);
}
function bdy_0x13a82f(_0x1b3562) {
  let _0x527e21 = [55, 146, 68, 104, 165, 61, 204, 127, 187, 15, 217, 136, 238, 154, 233, 90],
    _0x37ce7a = "80306f4370b39fd5630ad0529f77adb6";
  const _0x48e44e = {
    length: _0x1b3562.length
  };
  let _0x5ec87b = Array.from(_0x48e44e).map(_0x20df94 => 0),
    _0x3009cc,
    _0x4bae5e,
    _0x59744e,
    _0x413b7d;
  for (i in _0x5ec87b) {
    _0x3009cc = _0x1b3562[i].charCodeAt();
    _0x59744e = _0x527e21[i & 15];
    _0x413b7d = _0x37ce7a[i & 7].charCodeAt();
    _0x3009cc = _0x59744e ^ _0x3009cc;
    _0x3009cc = _0x3009cc ^ _0x413b7d;
    _0x3009cc = _0x3009cc + _0x59744e;
    _0x59744e = _0x59744e ^ _0x3009cc;
    _0x4bae5e = _0x37ce7a[i & 7].charCodeAt();
    _0x59744e = _0x59744e ^ _0x4bae5e;
    _0x5ec87b[i] = _0x59744e & 255;
  }
  return bdy_0x2e8175(_0x5ec87b);
}
function bdy_0x10c9b0(_0x3cd538) {
  let _0x4774ea = [[0, 0], [1, 4], [2, 61], [3, 15], [4, 56], [5, 40], [6, 6], [7, 59], [8, 62], [9, 58], [10, 17], [11, 2], [12, 12], [13, 8], [14, 32], [15, 60], [16, 13], [17, 45], [18, 34], [19, 14], [20, 36], [21, 21], [22, 22], [23, 39], [24, 23], [25, 25], [26, 26], [27, 20], [28, 1], [29, 33], [30, 46], [31, 55], [32, 35], [33, 24], [34, 57], [35, 19], [36, 53], [37, 37], [38, 38], [39, 5], [40, 30], [41, 41], [42, 42], [43, 18], [44, 47], [45, 27], [46, 9], [47, 44], [48, 51], [49, 7], [50, 49], [51, 63], [52, 28], [53, 43], [54, 54], [55, 52], [56, 31], [57, 10], [58, 29], [59, 11], [60, 3], [61, 16], [62, 50], [63, 48]],
    _0x1bd5b1 = bdy_0x16634d(_0x3cd538),
    _0xb21dd4 = Array.from({
      length: _0x1bd5b1.length
    }).map(_0x2beae5 => 0);
  for (let _0x3f022e in _0xb21dd4) {
    _0xb21dd4[_0x4774ea[_0x3f022e][1]] = _0x1bd5b1[_0x4774ea[_0x3f022e][0]];
  }
  return bdy_0x2120eb(_0xb21dd4);
}
switch (bdy_0x411172) {
  case "nb":
    const bdy_0x31d678 = {
      nb: nb
    };
    _0xf1f6le = bdy_0x31d678;
    break;
}
function bdy_0x5446dc(_0x394223) {
  let _0x33ffd6 = [[0, 6, 0, 1], [1, 4, 1, 0], [2, 5, 0, 1], [3, 0, 0, 1], [4, 2, 0, 1], [5, 3, 0, 1], [6, 1, 1, 0], [7, 7, 0, 1]],
    _0x11f545 = bdy_0x16634d(_0x394223),
    _0x31e6be = [0, 0, 0, 0, 0, 0, 0, 0];
  for (var _0x1e7268 in _0x31e6be) {
    _0x11f545[_0x1e7268] == 0 ? _0x31e6be[_0x33ffd6[_0x1e7268][1]] = _0x33ffd6[_0x1e7268][2] : _0x31e6be[_0x33ffd6[_0x1e7268][1]] = _0x33ffd6[_0x1e7268][3];
  }
  return bdy_0x2120eb(_0x31e6be);
}
function bdy_0x10e63d(_0x152ac4) {
  let _0x1d8878 = [];
  for (let _0x52846c = 0; _0x52846c < _0x152ac4.length; _0x52846c += 8) {
    let _0x2be613 = _0x152ac4.slice(_0x52846c, _0x52846c + 8);
    _0x2be613.length == 1 ? _0x1d8878 = _0x1d8878.concat(bdy_0x5446dc(_0x2be613)) : _0x1d8878 = _0x1d8878.concat(bdy_0x10c9b0(_0x2be613));
  }
  return _0x1d8878;
}
function bdy_0x1d5769(_0x178fc3, _0x47f571, _0x4b065b) {
  let _0x1702fd = [0, 1, 2];
  _0x4b065b == 1 && (_0x1702fd = [1, 2, 0]);
  _0x4b065b == 2 && (_0x1702fd = [2, 0, 1]);
  let _0x49a6c9 = _0x1702fd[_0x47f571];
  if (_0x49a6c9 == 0) {
    return bdy_0x10e63d(_0x178fc3);
  }
  if (_0x49a6c9 == 2) {
    return bdy_0x13a82f(_0x178fc3);
  }
}
function bdy_0x5a9e14(_0x43a777) {
  let _0x3be945 = "",
    _0x222d77 = [],
    _0x200bc4 = "";
  const _0x362f43 = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/";
  for (let _0x299288 = 0; _0x299288 < _0x43a777.length; _0x299288++) {
    _0x3be945 += ("00000000" + _0x43a777.charCodeAt(_0x299288).toString(2)).slice(-8);
  }
  for (let _0x135935 = 0; _0x135935 < _0x3be945.length; _0x135935 += 6) {
    _0x222d77.push("000000" + _0x3be945.substr(_0x135935, 6));
  }
  for (let _0x1c9e09 = 0; _0x1c9e09 < _0x222d77.length; _0x1c9e09++) {
    _0x200bc4 += _0x362f43[parseInt(_0x222d77[_0x1c9e09], 2)];
  }
  if (_0x200bc4.length % 4 == 2) {
    _0x200bc4 += "==";
  } else {
    _0x200bc4.length % 4 == 3 && (_0x200bc4 += "=");
  }
  return _0x200bc4;
}
function bdy_0xdc8cfa(_0x54fd79) {
  let _0x4f61ce = {
    hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
    ts: Date.now(),
    ridx: -1,
    cipher: {
      area: "CP8mXzLpCK==",
      d_model: "UwVubWvBDNLJ",
      wifiBssid: "dW5hbw93bq==",
      osVersion: "CJS=",
      d_brand: "WQvrb21f",
      screen: "CtS3DsenCNqm",
      uuid: bdy_0x5a9e14(_0x54fd79),
      aid: bdy_0x5a9e14(_0x54fd79),
      openudid: bdy_0x5a9e14(_0x54fd79)
    },
    ciphertype: 5,
    version: "1.2.0",
    appname: "com.jingdong.app.mall"
  };
  return encodeURIComponent(JSON.stringify(_0x4f61ce));
}
function bdy_0x552be2() {
  var _0x3e6777 = new Date().getTime();
  typeof performance !== "undefined" && typeof performance.now === "function" && (_0x3e6777 += performance.now());
  var _0x23d045 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x1e5740) {
    var _0x59131b = (_0x3e6777 + Math.random() * 16) % 16 | 0;
    _0x3e6777 = Math.floor(_0x3e6777 / 16);
    return (_0x1e5740 == "x" ? _0x59131b : _0x59131b & 3 | 8).toString(16);
  });
  return _0x23d045;
}
async function bdy_0x10942c(_0x411cdf, _0x25420e, _0x5f27f4, _0x43f22c) {
  if (bdy_0x411172 != "" && _0x43f22c == undefined) {
    const _0x2592d4 = {
      fn: _0x411cdf,
      body: _0x25420e
    };
    const _0x20cf6a = {
      limit: 1,
      methods: ["GET", "POST"]
    };
    const _0x487d04 = {
      request: 30000
    };
    let _0x6209a6 = await bdy_0x4b9c23.post(bdy_0x411172, {
      json: _0x2592d4,
      retry: _0x20cf6a,
      hooks: {
        beforeRetry: [(_0x25f2cb, _0x1da741) => {
          _0x1da741;
        }]
      },
      timeout: _0x487d04
    }).json().catch(_0x558a33 => {
      console.log(_0x558a33.message);
      console.log("指定sign获取失败,请检查！\n");
      return "";
    });
    if (_0x6209a6?.["body"]) {
      return _0x6209a6?.["body"];
    } else {
      if (_0x6209a6?.["data"]?.["convertUrl"]) {
        return _0x6209a6?.["data"]?.["convertUrl"];
      }
    }
  } else {
    let _0x2ba43d = "android",
      _0x290c38 = _0x5f27f4 || "12.2.2",
      _0x562894 = [[0, 2], [1, 1], [2, 0]],
      _0x556268,
      _0x3c16de;
    [_0x556268, _0x3c16de] = _0x562894[Math.floor(Math.random() * _0x562894.length)];
    let _0x86b7a0 = "1" + _0x556268 + _0x3c16de,
      _0x5ba164 = new Date().getTime();
    _0x25420e = typeof _0x25420e == "string" ? _0x25420e : JSON.stringify(_0x25420e);
    let _0x4e5d0e = new Buffer.from(_0x25420e).toString("latin1"),
      _0x5a9148 = bdy_0x552be2(),
      _0x3720fc = bdy_0xdc8cfa(_0x5a9148),
      _0xdc9aa5 = "functionId=" + _0x411cdf + "&body=" + _0x4e5d0e + "&uuid=" + _0x5a9148 + "&client=" + _0x2ba43d + "&clientVersion=" + _0x290c38 + "&st=" + _0x5ba164 + "&sv=" + _0x86b7a0,
      _0x4ea8f7 = bdy_0x1d5769(_0xdc9aa5, _0x556268, _0x3c16de),
      _0x467cf3 = new Buffer.from(_0x4ea8f7).toString("base64"),
      _0x594d5e = bdy_0x55aeb7.MD5(_0x467cf3).toString();
    return "clientVersion=" + _0x290c38 + "&client=" + _0x2ba43d + "&networkType=wifi&ef=1&ep=" + _0x3720fc + "&st=" + _0x5ba164 + "&sign=" + _0x594d5e + "&sv=" + _0x86b7a0 + "&body=" + encodeURIComponent(_0x25420e);
  }
}
async function bdy_0x39c4f8(_0x4015c6, _0x2db4c7, _0x12cc57) {
  const _0x25075a = {
    fn: _0x4015c6,
    body: _0x2db4c7
  };
  let _0x31775c = "";
  _0x12cc57 && (_0x25075a.ver = _0x12cc57);
  const _0x1f3ae5 = {
    beforeRetry: [(_0x5cc8e4, _0xe3de6d) => {
      _0xe3de6d;
    }]
  };
  const _0x2587a7 = {
    request: 30000
  };
  _0x31775c = await bdy_0x4b9c23.post("https://6dy.jdpro.site/sign", {
    json: _0x25075a,
    retry: {
      limit: 1,
      methods: ["GET", "POST"]
    },
    hooks: _0x1f3ae5,
    timeout: _0x2587a7
  }).json().catch(async _0x31eaa7 => {
    console.log("获取失败\n");
  });
  return _0x31775c.body;
}
async function bdy_0x2183e2(_0x45e189, _0x5417e8) {
  const _0x578dab = {
    fn: _0x45e189,
    body: _0x5417e8
  };
  const _0xd00c2f = {
    limit: 1,
    methods: ["GET", "POST"]
  };
  const _0x165084 = {
    beforeRetry: [(_0xad6cd, _0x5c2e5a) => {
      _0x5c2e5a;
    }]
  };
  const _0x886473 = {
    request: 30000
  };
  const _0x5ef6a4 = {
    json: _0x578dab,
    retry: _0xd00c2f,
    hooks: _0x165084,
    timeout: _0x886473
  };
  let _0x52bfea = await bdy_0x4b9c23.post("http://api.nolanstore.cc/sign", _0x5ef6a4).json().catch(_0x45e84c => {
    console.log(_0x45e84c.message);
    console.log("sign获取失败,请检查网络！\n");
  });
  return _0x52bfea.body;
}
const bdy_0x28f464 = {
  getbody: bdy_0x10942c,
  getbody2: bdy_0x2183e2,
  getbody3: bdy_0x39c4f8
};
module.exports = bdy_0x28f464;