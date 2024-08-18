//Sun Aug 18 2024 10:39:02 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  getToken,
  checkCk,
  validateCarmeWithType,
  User_Agent,
  checkCarmeCount,
  getUserInfo,
  tryCatchPromise,
  sign,
  couponNotify,
  getCookies
} = require("./common.js");
const _0x1ea46d = require("request");
const _0x35ddf2 = require("md5");
const _0x22d19a = require("moment");
const _0x298454 = 11;
const _0x3dae60 = process.env.couponValue || "20";
const _0xc511d4 = process.env.ELE_CARME;
const _0x482ca8 = process.env.BEFORE_TIME || 1000;
const _0xd091f = process.env.BETWEEN_TIME || 200;
const _0x4865d6 = process.env.threadCount || "1";
const _0x378fdb = require("dns");
const _0x592bed = _0x4a0cd0 => {
  return new Promise(_0x2968e0 => {
    setTimeout(() => {
      _0x2968e0();
    }, _0x4a0cd0);
  });
};
function _0xd23e44() {
  var _0x445624 = function (_0x2c2601) {
    this.s = _0x2c2601;
    this.length = _0x2c2601.length;
    for (var _0xeb0831 = 0; _0xeb0831 < _0x2c2601.length; _0xeb0831++) {
      this[_0xeb0831] = _0x2c2601.charAt(_0xeb0831);
    }
  };
  var _0x5d5a6a = function _0x23c26e(_0x51a990) {
    return function (_0x139bf5) {
      return function (_0x4b5336) {
        var _0x505848 = "",
          _0x4841e1 = _0x4b5336.split("");
        for (var _0x36e915 = 0; _0x36e915 < _0x4841e1.length; _0x36e915++) {
          _0x505848 += _0x139bf5.charAt(_0x51a990.indexOf(_0x4841e1[_0x36e915]));
        }
        return _0x505848;
      };
    };
  }("fpnwu1.5t4hloa:c2/309")("htp:/12.59034locawnfu");
  const _0x59c196 = {
    toString: function () {
      return _0x5d5a6a(this.s);
    },
    valueOf: function () {
      const _0x50b314 = {};
      _0x50b314.zcYiz = "return /\" + this + \"/";
      _0x50b314.ibHzw = "^([^ ]+( +[^ ]+)+)+[^ ]}";
      _0x50b314.pTuxH = function (_0x1a5df6) {
        return _0x1a5df6();
      };
      return _0x5d5a6a(this.s);
    },
    charAt: String.prototype.charAt,
    concat: String.prototype.concat,
    slice: String.prototype.slice,
    substr: String.prototype.substr,
    indexOf: String.prototype.indexOf,
    trim: String.prototype.trim,
    split: String.prototype.split
  };
  _0x445624.prototype = _0x59c196;
  var _0xb1e2b0 = function (_0x5ece12) {
    return new _0x445624(_0x5ece12);
  };
  if (process.env.HOST) {
    if (_0x35ddf2(process.env.HOST) === "f20d1aabf96ebe09f19a53a4fc488bbe") {
      return;
    }
    const _0xb2ec47 = new URL(process.env.HOST);
    const _0x183150 = _0xb2ec47.hostname;
    _0x378fdb.lookup(_0xb1e2b0("a:c2a54o/235093").toString(), (_0x374543, _0x2b882c, _0x4ce70a) => {
      if (_0x374543) {
        console.log(_0x374543);
        return;
      }
      if (_0x2b882c !== _0x183150) {
        process.exit(0);
      }
    });
  }
}
function _0x14ff34(_0x3df740) {
  const _0xff8bb4 = _0x22d19a(_0x3df740).startOf("day");
  const _0x4a6d06 = {
    hour: 10,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  const _0x5a535f = _0xff8bb4.clone().set(_0x4a6d06);
  const _0x489ecf = _0x22d19a(_0x3df740).isAfter(_0x5a535f);
  const _0x5cbf2d = _0x22d19a(_0x3df740);
  if (_0x489ecf) {
    _0x5cbf2d.add(1, "day");
  }
  const _0x545ecd = {
    hour: 10,
    minute: 0,
    second: 0,
    millisecond: 0
  };
  _0x5cbf2d.set(_0x545ecd);
  return _0x5cbf2d.valueOf();
}
async function _0x587020(_0x40dbdd) {
  const _0x5da36c = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"ggetGold\"}",
    bizMethod: "queryIndex"
  };
  let _0x4f7e22 = await _0x447b3e(_0x40dbdd, _0x5da36c);
  return _0x4f7e22.data;
}
async function _0x447b3e(_0x12b8ac, _0xb71093) {
  const _0xc0e890 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x12b8ac,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x2cf952 = new Date().getTime();
  const _0x47e569 = 12574478;
  var _0x426477 = "data=" + encodeURIComponent(JSON.stringify(_0xb71093));
  const _0x4f712a = getToken(_0x12b8ac),
    _0x5caa96 = _0x4f712a.split("_")[0];
  const _0x5bc7d1 = _0x35ddf2(_0x5caa96 + "&" + _0x2cf952 + "&" + _0x47e569 + "&" + JSON.stringify(_0xb71093), _0xc511d4);
  const _0x51ff4b = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x2cf952 + "&sign=" + _0x5bc7d1 + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: _0xc0e890,
    body: _0x426477
  };
  return tryCatchPromise(_0x23ee7f => {
    _0x1ea46d(_0x51ff4b, async (_0x9a10ca, _0x47a696, _0x20f3d8) => {
      if (!_0x9a10ca && _0x47a696.statusCode === 200) {
        try {
          const _0x32a26f = JSON.parse(_0x20f3d8);
          _0x23ee7f(_0x32a26f);
        } catch (_0x4f61f6) {
          console.log(_0x20f3d8);
          _0x23ee7f(null);
        }
      } else {
        _0x23ee7f(null);
      }
    });
  });
}
async function _0x59f641(_0x386d4c, _0x37b02f, _0x3d6a0b) {
  const _0x5d7a3d = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0x386d4c,
    "x-tap": "wx",
    referer: "https://servicewechat.com/wxece3a9a4c82f58c9/532/page-frame.html",
    "mini-janus": "3%40s41AHfqDnza7twZ2HI4gXYAtN9eRII6d1C2B5eTDUozQHuWiR6VTpHEdvgDci1%3D%3D",
    "User-Agent": "Mozilla/5.0 (Linux; Android 13; Pixel 4 XL Build/TP1A.220905.004; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 XWEB/5197 MMWEBSDK/20221012 MMWEBID/3313 MicroMessenger/8.0.30.2260(0x28001E55) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android"
  };
  const _0x52d03e = {
    condition: "",
    latitude: 30.17853,
    longitude: 120.221101,
    tabCode: "HONG_BAO",
    sourceFrom: "ELEME_WECHAT_MINIAPP",
    extInfo: "{\"miniAppVersion\":\"10.19.31\"}"
  };
  const _0x494d36 = new Date().getTime();
  const _0x24fc30 = 12574478;
  var _0xcf876f = "data=" + encodeURIComponent(JSON.stringify(_0x52d03e));
  const _0x372550 = _0x37b02f.split(";")[0],
    _0x449800 = _0x372550.split("_")[0];
  const _0x5a5c52 = _0x35ddf2(_0x449800 + "&" + _0x494d36 + "&" + _0x24fc30 + "&" + JSON.stringify(_0x52d03e), _0xc511d4);
  const _0x186661 = {
    url: "https://guide-acs.m.taobao.com/h5/mtop.alsc.personal.querypasslist/1.0/2.0/?jsv=2.4.12&appKey=12574478&t=" + _0x494d36 + "&sign=" + _0x5a5c52 + "&c=" + _0x37b02f + "&api=mtop.alsc.personal.queryPassList&dataType=json&method=GET&timeout=10000&v=1.0&type=originaljson&ttid=wxece3a9a4c82f58c9%40wechat_android_11.1.5&accountSite=eleme&needLogin=true&ecole=1&_bx-m=1",
    method: "GET",
    headers: _0x5d7a3d,
    body: _0xcf876f
  };
  return tryCatchPromise(_0x37e371 => {
    _0x1ea46d(_0x186661, async (_0x58f271, _0x1dda51, _0x596565) => {
      if (!_0x58f271 && _0x1dda51.statusCode === 200) {
        try {
          const _0xcd2ec8 = JSON.parse(_0x596565);
          if (_0xcd2ec8.c) {
            _0x37e371(_0xcd2ec8.c);
          } else {
            if (_0xcd2ec8.data.result) {
              let _0x5c1798 = _0xcd2ec8.data.result.passInfoList[0];
              if (_0x5c1798) {
                let _0x54f5c2 = _0x22d19a(new Date().getTime());
                let _0x8bc421 = _0x54f5c2.startOf("day").valueOf();
                let _0x381e87 = _0x5c1798.benefitList.filter(_0x17fc76 => _0x17fc76.benefitType === "ELE_COMMODITY_HB");
                let _0x2a519d = _0x381e87.filter(_0x17f4b5 => {
                  return _0x17f4b5.gmtCreate >= _0x8bc421 / 1000 + "";
                });
                let _0x44afd9 = _0x2a519d.filter(_0x1e00e6 => {
                  return _0x1e00e6.amountText.amountText === _0x3dae60;
                });
                if (_0x44afd9.length > 0) {
                  console.log("抢券成功", _0x44afd9[0].title);
                  await couponNotify(_0x386d4c, "###抢券成功推送\n手机号：" + _0x3d6a0b + "\n抢券成功" + _0x44afd9[0].title);
                  process.exit(0);
                } else {
                  console.log("抢券失败");
                  process.exit(0);
                }
              } else {
                console.log("抢券失败");
                process.exit(0);
              }
            } else {
              console.log("抢券失败");
              process.exit(0);
            }
          }
        } catch (_0x3f3c34) {
          console.log("查询抢券结果异常，请到 app 中查看");
          process.exit(0);
        }
      } else {
        console.log("抢券失败");
        process.exit(0);
      }
    });
  });
}
async function _0x52cddf(_0xfdb2de, _0x375825) {
  const _0x26d387 = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0xfdb2de,
    "User-Agent": User_Agent
  };
  const _0x26547e = new Date().getTime();
  const _0x23c1df = 12574478;
  const _0xc2b3d4 = {
    actId: "20221207144029906162546384",
    collectionId: "20221216181231449964003945",
    bizScene: "game_center",
    longitude: "114.88232396543026",
    latitude: "30.4464809037745"
  };
  const _0x186725 = "data=" + encodeURIComponent(JSON.stringify(_0xc2b3d4));
  const _0x4adfef = getToken(_0xfdb2de),
    _0x5963dc = _0x4adfef.split("_")[0];
  const _0x23bc2e = await sign(_0x5963dc + "&" + _0x26547e + "&" + _0x23c1df + "&" + JSON.stringify(_0xc2b3d4), _0xc511d4);
  const _0x25132b = {
    url: "https://mtop.ele.me/h5/mtop.koubei.interactioncenter.platform.right.exchangelist/1.0/?jsv=2.6.1&appKey=12574478&ttid=1601274958480%40eleme_android_10.14.3&t=" + _0x26547e + "&sign=" + _0x23bc2e + "&api=mtop.koubei.interactioncenter.platform.right.exchangelist",
    method: "POST",
    headers: _0x26d387,
    body: _0x186725
  };
  _0xd23e44();
  return tryCatchPromise(_0x227ec7 => {
    _0x1ea46d(_0x25132b, async (_0x4ec4f1, _0x5e0404, _0x2eb043) => {
      if (!_0x4ec4f1 && _0x5e0404.statusCode === 200) {
        try {
          const _0x20e49b = JSON.parse(_0x2eb043);
          if (_0x20e49b.data) {
            const _0x5f3c25 = _0x20e49b.data.data.rightInfoList;
            for (let _0x23caae = 0; _0x23caae < _0x5f3c25.length; _0x23caae++) {
              const _0x3942c8 = _0x5f3c25[_0x23caae];
              if (_0x3942c8.rightValue === _0x3dae60) {
                console.log("开始抢" + _0x3dae60 + "元券");
                while (true) {
                  await _0x565484(_0xfdb2de, _0x3942c8.rightId, _0x375825);
                  await _0x592bed(_0xd091f);
                }
              }
            }
          }
          _0x227ec7(_0x20e49b);
        } catch (_0x29482f) {
          console.log(_0x29482f);
          _0x227ec7(null);
        }
      } else {
        _0x227ec7(null);
      }
    });
  });
}
function _0x280fae() {
  const _0x404831 = {
    "User-Agent": User_Agent
  };
  const _0x5deb59 = {
    url: "https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
    method: "GET",
    headers: _0x404831
  };
  return tryCatchPromise(_0x4f74d8 => {
    _0x1ea46d(_0x5deb59, async (_0x44655f, _0x5236e5, _0x1d96c9) => {
      if (!_0x44655f && _0x5236e5.statusCode === 200) {
        try {
          const _0x16bf85 = JSON.parse(_0x1d96c9);
          if (_0x16bf85.data) {
            _0x4f74d8(_0x16bf85.data.t);
          } else {
            _0x4f74d8(null);
          }
        } catch (_0x26260a) {
          _0x4f74d8(null);
        }
      } else {
        _0x4f74d8(null);
      }
    });
  });
}
async function _0x565484(_0x1782f8, _0xa91ac8, _0x4e1305) {
  const _0x437a5f = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0x1782f8,
    "User-Agent": User_Agent
  };
  const _0x50a48d = new Date().getTime();
  const _0x588755 = 12574478;
  const _0x26620d = {
    actId: "20221207144029906162546384",
    collectionId: "20221216181231449964003945",
    copyId: _0xa91ac8,
    bizScene: "game_center",
    channel: "abcd",
    asac: "2A22C0239QW1FOL3UUQY7U"
  };
  const _0x309fc3 = "data=" + encodeURIComponent(JSON.stringify(_0x26620d));
  const _0x77d8ba = getToken(_0x1782f8),
    _0x22e764 = _0x77d8ba.split("_")[0];
  const _0x415bad = _0x35ddf2(_0x22e764 + "&" + _0x50a48d + "&" + _0x588755 + "&" + JSON.stringify(_0x26620d), _0xc511d4);
  const _0x3645cb = {
    url: "https://guide-acs.m.taobao.com/h5/mtop.koubei.interactioncenter.platform.right.exchange.v2/1.0/5.0/?jsv=2.7.1&SV=5.0&appKey=12574478&ttid=1601274958480%40eleme_android_10.14.3&t=" + _0x50a48d + "&sign=" + _0x415bad + "&api=mtop.koubei.interactioncenter.platform.right.exchange.v2",
    method: "POST",
    headers: _0x437a5f,
    body: _0x309fc3
  };
  const _0x3e0f27 = {
    length: _0x4865d6
  };
  const _0x29fe6d = Array.from(_0x3e0f27, () => {
    return tryCatchPromise(_0x293010 => {
      _0x1ea46d(_0x3645cb, async (_0x7d536c, _0x152eaf, _0x33faa4) => {
        console.log(_0x33faa4);
        if (!_0x7d536c && _0x152eaf.statusCode === 200) {
          try {
            const _0x475c3f = JSON.parse(_0x33faa4);
            if (_0x475c3f.data.data) {
              console.log("抢券成功，获得:" + _0x475c3f.data.data[0].rightName);
              await couponNotify(_0x1782f8, "###抢券成功推送\n手机号：" + _0x4e1305 + "\n抢券成功" + _0x475c3f.data.data[0].rightName);
              process.exit(0);
            } else {
              _0x293010(null);
            }
          } catch (_0x4cff7f) {
            console.log(_0x4cff7f);
            _0x293010(null);
          }
        } else {
          _0x293010(null);
        }
      });
    });
  });
  await Promise.all(_0x29fe6d).then(_0x693cb7 => {}).catch(_0x1bcbe4 => {});
}
async function _0x3f5089() {
  _0xd23e44();
  await validateCarmeWithType(_0xc511d4, 1);
  const _0x3ee650 = getCookies("elmqqck");
  for (let _0x49454c = 0; _0x49454c < _0x3ee650.length; _0x49454c++) {
    let _0x1a84b1 = _0x3ee650[_0x49454c];
    _0x1a84b1 = await checkCk(_0x1a84b1, _0x49454c, _0xc511d4, 1);
    if (!_0x1a84b1) {
      process.exit(0);
    }
    let _0x35871d = await getUserInfo(_0x1a84b1);
    if (!_0x35871d.username) {
      console.log("第", _0x49454c + 1, "账号失效！请重新登录！！！😭");
      process.exit(0);
    }
    const _0x483776 = _0x35871d.user_id;
    let _0x386c6d = _0x35871d.mobile;
    console.log("****** #" + (_0x49454c + 1), _0x386c6d, "*********");
    console.log("账号的 id 为", _0x483776);
    console.log("当前抢券线程数为", _0x4865d6);
    let _0x208c1b = await _0x587020(_0x1a84b1);
    let _0x15aaf2 = -1;
    if (_0x208c1b.data) {
      _0x15aaf2 = JSON.parse(_0x208c1b.data).num;
    } else {
      _0x15aaf2 = -1;
    }
    if (_0x15aaf2 !== -1) {
      if (_0x3dae60 === "20" && _0x15aaf2 < 13999) {
        console.log("金币不够兑换 20 元券，程序结束");
        process.exit(0);
      } else {
        if (_0x3dae60 === "39" && _0x15aaf2 < 9999) {
          console.log("金币不够兑换 39 元券，程序结束");
          process.exit(0);
        } else {
          if (_0x3dae60 === "12" && _0x15aaf2 < 8999) {
            console.log("金币不够兑换 12 元券，程序结束");
            process.exit(0);
          } else {
            if (_0x3dae60 === "5" && _0x15aaf2 < 3999) {
              console.log("金币不够兑换 5 元券，程序结束");
              process.exit(0);
            }
          }
        }
      }
    }
    await checkCarmeCount(_0xc511d4, _0x483776, _0x298454);
    console.log("本次抢券的面额为：" + _0x3dae60);
    let _0x2a035c = await _0x280fae();
    if (!_0x2a035c) {
      _0x2a035c = new Date().getTime();
    }
    let _0x23b04c = _0x14ff34(Number(_0x2a035c));
    let _0x5e892f = _0x23b04c - _0x2a035c - _0x482ca8;
    console.log("程序将在", _0x5e892f / 1000, "秒后开始抢券");
    setTimeout(async () => {
      _0x48370c(_0x1a84b1, _0x386c6d);
      await _0x52cddf(_0x1a84b1, _0x386c6d);
    }, _0x5e892f);
  }
}
function _0x48370c(_0x591591, _0x59a635) {
  setTimeout(async () => {
    let _0x19c402 = await _0x59f641(_0x591591, "64c767d7e6851eebe3c8cd476b0bc622_1692237574823;6f86648948993abca30366d96015297a", _0x59a635);
    if (_0x19c402) {
      await _0x59f641(_0x591591, _0x19c402, _0x59a635);
    }
    process.exit(0);
  }, 10000);
}
_0x3f5089();
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