//Fri Jun 28 2024 09:55:13 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  sign,
  getToken,
  wait,
  checkCk,
  validateCarmeWithType,
  User_Agent,
  getCookies,
  checkCarmeCount,
  getUserInfo,
  tryCatchPromise,
  getCookieMap
} = require("./common.js");
const {
  sendNotify
} = require("./sendNotify1.js");
setInterval(function () {
  const _0x50bd23 = {};
  _0x50bd23.cbYTI = function (_0x39f90a) {
    return _0x39f90a();
  };
  const _0x3d3c42 = _0x50bd23;
  _0x3d3c42.cbYTI(_0xbc334b);
}, 4000);
const _0x3ee842 = require("moment");
const _0x43a291 = require("request");
const _0xf58a19 = 10;
const _0x55733f = "异常";
let _0x31839a = getCookies();
const _0x46e8ae = process.env.ELE_CARME;
var _0x2c5f85 = "| 昵称          | 乐园币    | 总吃货豆 |余额 |\n| ------------- | ------------------ | ---------|---------|\n";
function _0x15e7a0() {
  const _0x3d1eb5 = {};
  _0x3d1eb5.NWigD = function (_0x361fc1) {
    return _0x361fc1();
  };
  _0x3d1eb5.vkVIM = "YYYY-MM-DD";
  const _0x5c0049 = _0x3d1eb5;
  return _0x5c0049.NWigD(_0x3ee842).format(_0x5c0049.vkVIM);
}
function _0x23f651() {
  const _0x5168d5 = {};
  _0x5168d5.hhvEz = function (_0x4d8f6f, _0x1b3a45) {
    return _0x4d8f6f + _0x1b3a45;
  };
  _0x5168d5.TYTKK = function (_0x17e7db, _0x239eb5) {
    return _0x17e7db <= _0x239eb5;
  };
  _0x5168d5.STDgk = function (_0x208d1e, _0x1a4808) {
    return _0x208d1e + _0x1a4808;
  };
  _0x5168d5.djfyi = function (_0x5d5838, _0x39d9d8) {
    return _0x5d5838 + _0x39d9d8;
  };
  _0x5168d5.eXGfF = function (_0x3950b3, _0x1bd6a8) {
    return _0x3950b3 + _0x1bd6a8;
  };
  const _0x168f46 = _0x5168d5;
  var _0x1b2b0a = new Date(),
    _0x1344ed = _0x168f46.hhvEz(_0x1b2b0a.getMonth(), 1),
    _0x3be63e = _0x1b2b0a.getDate();
  return _0x168f46.TYTKK(_0x1344ed, 9) && (_0x1344ed = _0x168f46.STDgk("0", _0x1344ed)), _0x168f46.TYTKK(_0x3be63e, 9) && (_0x3be63e = _0x168f46.STDgk("0", _0x3be63e)), _0x168f46.STDgk(_0x168f46.djfyi(_0x168f46.djfyi(_0x168f46.eXGfF(_0x1b2b0a.getFullYear(), "-"), _0x1344ed), "-"), _0x3be63e);
}
function _0x1fb425(_0x1a7133) {
  const _0x50cbb9 = {};
  _0x50cbb9.cWuLa = "没有获取到推送 uid，不推送消息\n";
  _0x50cbb9.MGOPW = function (_0x5d573f, _0x55e39a) {
    return _0x5d573f + _0x55e39a;
  };
  _0x50cbb9.HsnYr = "debu";
  _0x50cbb9.kNlcX = "gger";
  _0x50cbb9.qWtym = "action";
  _0x50cbb9.TdNmF = function (_0x4445f5, _0x19c69e) {
    return _0x4445f5 < _0x19c69e;
  };
  _0x50cbb9.wGjcq = function (_0x4f347a, _0x10200b) {
    return _0x4f347a === _0x10200b;
  };
  _0x50cbb9.CiXtt = "GRANT";
  _0x50cbb9.dCXLU = function (_0x5abb85, _0x5bf6c2) {
    return _0x5abb85 !== _0x5bf6c2;
  };
  _0x50cbb9.nIzJP = function (_0x19184a) {
    return _0x19184a();
  };
  _0x50cbb9.uHTPu = function (_0x197363, _0x323d16) {
    return _0x197363(_0x323d16);
  };
  _0x50cbb9.wPrUL = function (_0x16586c, _0x48df0b) {
    return _0x16586c(_0x48df0b);
  };
  _0x50cbb9.KpxGk = function (_0xc8b66, _0x240d0b) {
    return _0xc8b66 !== _0x240d0b;
  };
  _0x50cbb9.gavXn = "ZcKaU";
  _0x50cbb9.AGVeV = function (_0x5e236b, _0x1cd4f6) {
    return _0x5e236b == _0x1cd4f6;
  };
  _0x50cbb9.xLymP = "KrucU";
  _0x50cbb9.fCpGp = "lxKQN";
  _0x50cbb9.ZLfxz = "GxvQt";
  _0x50cbb9.adtsC = "dKERP";
  _0x50cbb9.qVBuA = "EntuY";
  _0x50cbb9.fuNyN = "xVeLh";
  _0x50cbb9.LwRJE = "LUZPD";
  _0x50cbb9.msHsd = function (_0x57b5e4, _0x2b9494) {
    return _0x57b5e4(_0x2b9494);
  };
  _0x50cbb9.PZoTx = function (_0x199429, _0x5edea7) {
    return _0x199429 !== _0x5edea7;
  };
  _0x50cbb9.fyZZm = "VwqZy";
  _0x50cbb9.FQfyM = function (_0x5a3715, _0x1023b2, _0x2b3074) {
    return _0x5a3715(_0x1023b2, _0x2b3074);
  };
  _0x50cbb9.XaowY = "https://httpizza.ele.me/walletUserV2/storedcard/queryBalanceBycardType?cardType=platform";
  _0x50cbb9.PfIaO = "https://r.ele.me/alsc-wallet/home.html?channel=grzx";
  const _0x30e7e2 = _0x50cbb9;
  const _0x879662 = {};
  _0x879662.url = _0x30e7e2.XaowY;
  _0x879662.headers = {};
  _0x879662.headers.Cookie = _0x1a7133;
  _0x879662.headers["User-Agent"] = User_Agent;
  _0x879662.headers.referer = _0x30e7e2.PfIaO;
  const _0x1e2930 = _0x879662;
  return _0x30e7e2.msHsd(tryCatchPromise, _0x171e05 => {
    const _0x197f5d = {};
    _0x197f5d.BnOid = _0x30e7e2.cWuLa;
    _0x197f5d.xvhBQ = function (_0x4c20a8, _0x255fd6) {
      return _0x30e7e2.MGOPW(_0x4c20a8, _0x255fd6);
    };
    _0x197f5d.LKRyd = _0x30e7e2.HsnYr;
    _0x197f5d.vYBbK = _0x30e7e2.kNlcX;
    _0x197f5d.PENdP = _0x30e7e2.qWtym;
    _0x197f5d.IayBs = function (_0xc828d2, _0x536a39) {
      return _0x30e7e2.TdNmF(_0xc828d2, _0x536a39);
    };
    _0x197f5d.iSHhH = function (_0x355b01, _0x21dcb0) {
      return _0x30e7e2.wGjcq(_0x355b01, _0x21dcb0);
    };
    _0x197f5d.oVQXE = _0x30e7e2.CiXtt;
    _0x197f5d.eBsCI = function (_0x2816d2, _0x1b64bb) {
      return _0x30e7e2.dCXLU(_0x2816d2, _0x1b64bb);
    };
    _0x197f5d.YCzPD = function (_0x12bb5f) {
      return _0x30e7e2.nIzJP(_0x12bb5f);
    };
    _0x197f5d.NYXfi = function (_0x4da651, _0x3ddb20) {
      return _0x30e7e2.uHTPu(_0x4da651, _0x3ddb20);
    };
    _0x197f5d.iVXuj = function (_0x5baefb, _0x4870f5) {
      return _0x30e7e2.wPrUL(_0x5baefb, _0x4870f5);
    };
    _0x197f5d.dncFx = function (_0x487054, _0x5bf3b0) {
      return _0x30e7e2.KpxGk(_0x487054, _0x5bf3b0);
    };
    _0x197f5d.xdBHA = function (_0x269652) {
      return _0x30e7e2.nIzJP(_0x269652);
    };
    _0x197f5d.dIQJK = function (_0x2cc173, _0x13f2fe) {
      return _0x30e7e2.KpxGk(_0x2cc173, _0x13f2fe);
    };
    _0x197f5d.AKdTC = _0x30e7e2.gavXn;
    _0x197f5d.GZAOa = function (_0x3293e8, _0x445581) {
      return _0x30e7e2.AGVeV(_0x3293e8, _0x445581);
    };
    _0x197f5d.YlNgn = function (_0x2a3b6b, _0x1fffdc) {
      return _0x30e7e2.wGjcq(_0x2a3b6b, _0x1fffdc);
    };
    _0x197f5d.daIlu = _0x30e7e2.xLymP;
    _0x197f5d.xiaUf = _0x30e7e2.fCpGp;
    _0x197f5d.lNcVr = _0x30e7e2.ZLfxz;
    _0x197f5d.RNccW = _0x30e7e2.adtsC;
    _0x197f5d.swTtV = function (_0x1d1460, _0x147554) {
      return _0x30e7e2.wPrUL(_0x1d1460, _0x147554);
    };
    _0x197f5d.ssTaq = _0x30e7e2.qVBuA;
    _0x197f5d.sdqXa = _0x30e7e2.fuNyN;
    _0x197f5d.JUkNo = _0x30e7e2.LwRJE;
    _0x197f5d.Nedwr = function (_0x3d53db, _0x3b3ca7) {
      return _0x30e7e2.msHsd(_0x3d53db, _0x3b3ca7);
    };
    const _0x39a227 = _0x197f5d;
    if (_0x30e7e2.PZoTx(_0x30e7e2.fyZZm, _0x30e7e2.fyZZm)) {
      console.log(_0x39a227.BnOid);
    } else {
      _0x30e7e2.FQfyM(_0x43a291, _0x1e2930, async (_0x3c1e94, _0x7b3e1d, _0x1d7b01) => {
        const _0x39e28a = {};
        _0x39e28a.AOdkP = function (_0x352d3e, _0x161679) {
          return _0x39a227.IayBs(_0x352d3e, _0x161679);
        };
        _0x39e28a.GZYIa = function (_0x1807e4, _0x1af712) {
          return _0x39a227.iSHhH(_0x1807e4, _0x1af712);
        };
        _0x39e28a.ikMzI = _0x39a227.oVQXE;
        _0x39e28a.MlBlC = function (_0x57aca7, _0x38919f) {
          return _0x39a227.eBsCI(_0x57aca7, _0x38919f);
        };
        _0x39e28a.EyVMX = function (_0x4f4628) {
          return _0x39a227.YCzPD(_0x4f4628);
        };
        _0x39e28a.iUiDr = function (_0x18a316, _0x27a4ce) {
          return _0x39a227.NYXfi(_0x18a316, _0x27a4ce);
        };
        _0x39e28a.ALFnw = function (_0x40fd72, _0xc856fb) {
          return _0x39a227.iVXuj(_0x40fd72, _0xc856fb);
        };
        _0x39e28a.orKCP = function (_0x19fbce, _0x43330f) {
          return _0x39a227.iVXuj(_0x19fbce, _0x43330f);
        };
        _0x39e28a.KBfMJ = function (_0x4eb5d9, _0xd13e92) {
          return _0x39a227.iSHhH(_0x4eb5d9, _0xd13e92);
        };
        _0x39e28a.MZWEt = function (_0x200cb8, _0x46167d) {
          return _0x39a227.dncFx(_0x200cb8, _0x46167d);
        };
        _0x39e28a.OgYJN = function (_0x2e75e3) {
          return _0x39a227.xdBHA(_0x2e75e3);
        };
        const _0x504b07 = _0x39e28a;
        if (_0x39a227.dIQJK(_0x39a227.AKdTC, _0x39a227.AKdTC)) {
          (function () {
            return true;
          }).constructor(_0x39a227.xvhBQ(_0x39a227.LKRyd, _0x39a227.vYBbK)).call(_0x39a227.PENdP);
        } else {
          if (!_0x3c1e94 && _0x39a227.GZAOa(_0x7b3e1d.statusCode, 200)) {
            if (_0x39a227.YlNgn(_0x39a227.daIlu, _0x39a227.xiaUf)) {
              if (req.data) {
                var _0x3e6e8c = 0;
                for (let _0x54a9c9 = 0; _0x504b07.AOdkP(_0x54a9c9, req.data.list.length); _0x54a9c9++) {
                  const _0x2670d2 = req.data.list[_0x54a9c9];
                  if (_0x504b07.GZYIa(_0x2670d2.detailType, _0x504b07.ikMzI) && _0x504b07.MlBlC(_0x2670d2.gmtModified.indexOf(_0x504b07.EyVMX(_0x15e7a0)), -1)) {
                    _0x3e6e8c += _0x504b07.iUiDr(Number, _0x2670d2.amount);
                  }
                }
              }
              _0x504b07.ALFnw(_0x171e05, _0x3e6e8c);
            } else {
              const _0x1c177e = JSON.parse(_0x1d7b01);
              try {
                if (_0x39a227.YlNgn(_0x39a227.lNcVr, _0x39a227.RNccW)) {
                  if (ret) {
                    return debuggerProtection;
                  } else {
                    _0x504b07.orKCP(debuggerProtection, 0);
                  }
                } else {
                  _0x39a227.swTtV(_0x171e05, _0x1c177e.data.totalAmount);
                }
              } catch (_0x22658b) {
                if (_0x39a227.dIQJK(_0x39a227.ssTaq, _0x39a227.ssTaq)) {
                  console.log(_0x1d7b01);
                  _0x504b07.orKCP(_0x171e05, null);
                } else {
                  console.log(_0x1d7b01);
                  _0x39a227.swTtV(_0x171e05, null);
                }
              }
            }
          } else {
            if (_0x39a227.YlNgn(_0x39a227.sdqXa, _0x39a227.JUkNo)) {
              var _0x3c6c80 = 0;
              for (let _0x490baf = 0; _0x504b07.AOdkP(_0x490baf, req.data.list.length); _0x490baf++) {
                const _0x5c3043 = req.data.list[_0x490baf];
                if (_0x504b07.KBfMJ(_0x5c3043.detailType, _0x504b07.ikMzI) && _0x504b07.MZWEt(_0x5c3043.gmtModified.indexOf(_0x504b07.OgYJN(_0x15e7a0)), -1)) {
                  _0x3c6c80 += _0x504b07.orKCP(Number, _0x5c3043.amount);
                }
              }
            } else {
              _0x39a227.Nedwr(_0x171e05, null);
            }
          }
        }
      });
    }
  });
}
function _0xe7326c(_0x120afa) {
  const _0x3ffc7b = {};
  _0x3ffc7b.apyDL = function (_0x6336c8, _0x320b42, _0x19b1f4) {
    return _0x6336c8(_0x320b42, _0x19b1f4);
  };
  _0x3ffc7b.WPgXO = function (_0x30885d, _0x27641e) {
    return _0x30885d(_0x27641e);
  };
  _0x3ffc7b.GkpBj = function (_0x1f7d13, _0x34fe67) {
    return _0x1f7d13 !== _0x34fe67;
  };
  _0x3ffc7b.qjkLy = "CsbsD";
  _0x3ffc7b.qGoCq = function (_0x52bf94, _0x2f6b34) {
    return _0x52bf94 == _0x2f6b34;
  };
  _0x3ffc7b.Flrxb = function (_0x333c2f, _0x3dab5e) {
    return _0x333c2f === _0x3dab5e;
  };
  _0x3ffc7b.mSSkS = "lokkA";
  _0x3ffc7b.uVuiN = function (_0x2c055a, _0x58de45) {
    return _0x2c055a === _0x58de45;
  };
  _0x3ffc7b.AryNc = "IdAaF";
  _0x3ffc7b.ZVtje = "NPgSe";
  _0x3ffc7b.alERu = function (_0x1e3669, _0xa3adf9) {
    return _0x1e3669 !== _0xa3adf9;
  };
  _0x3ffc7b.zVzQk = "aGlQW";
  _0x3ffc7b.SpZkB = function (_0x2f8906, _0x238e0b) {
    return _0x2f8906(_0x238e0b);
  };
  _0x3ffc7b.YqeiG = function (_0x143ead, _0x4c5b64) {
    return _0x143ead === _0x4c5b64;
  };
  _0x3ffc7b.rQQaV = "RhrXr";
  _0x3ffc7b.dnzVg = function (_0x451206, _0x411dc4) {
    return _0x451206(_0x411dc4);
  };
  _0x3ffc7b.fUpca = "function *\\( *\\)";
  _0x3ffc7b.mNwSS = "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)";
  _0x3ffc7b.IMUXX = function (_0x201c0c, _0x1945a3) {
    return _0x201c0c(_0x1945a3);
  };
  _0x3ffc7b.bLpVp = "init";
  _0x3ffc7b.PspRt = function (_0x6e0770, _0x25cd27) {
    return _0x6e0770 + _0x25cd27;
  };
  _0x3ffc7b.nNETR = "chain";
  _0x3ffc7b.dQSKb = "input";
  _0x3ffc7b.VeyqC = function (_0x298e97, _0x38efd7) {
    return _0x298e97(_0x38efd7);
  };
  _0x3ffc7b.noAto = function (_0x4e1bfc) {
    return _0x4e1bfc();
  };
  _0x3ffc7b.DFLQY = function (_0xf8e7fd, _0x21d3f6) {
    return _0xf8e7fd / _0x21d3f6;
  };
  _0x3ffc7b.kItbn = function (_0x4118ae) {
    return _0x4118ae();
  };
  _0x3ffc7b.XsQVI = function (_0x657251, _0x37a72b) {
    return _0x657251 < _0x37a72b;
  };
  _0x3ffc7b.XlucL = function (_0xd0a101, _0x4e2eb6) {
    return _0xd0a101 > _0x4e2eb6;
  };
  _0x3ffc7b.ivNGS = function (_0x35918d, _0x484b52) {
    return _0x35918d == _0x484b52;
  };
  _0x3ffc7b.EnhaL = function (_0x49fac5, _0x358280) {
    return _0x49fac5(_0x358280);
  };
  _0x3ffc7b.JUQXK = "kzBVL";
  _0x3ffc7b.bVqoi = "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?latitude=30.153352&limit=20&longitude=104.153352&offset=0";
  const _0x31f9cc = _0x3ffc7b;
  const _0x1b9ec9 = {};
  _0x1b9ec9.Cookie = _0x120afa;
  _0x1b9ec9["User-Agent"] = User_Agent;
  const _0x244676 = {};
  _0x244676.url = _0x31f9cc.bVqoi;
  _0x244676.headers = _0x1b9ec9;
  const _0xcace0 = _0x244676;
  return _0x31f9cc.EnhaL(tryCatchPromise, _0x131e5d => {
    const _0x152d9d = {};
    _0x152d9d.XURBf = _0x31f9cc.fUpca;
    _0x152d9d.KBlrs = _0x31f9cc.mNwSS;
    _0x152d9d.SlQul = function (_0x337426, _0x1032b5) {
      return _0x31f9cc.IMUXX(_0x337426, _0x1032b5);
    };
    _0x152d9d.ByoTI = _0x31f9cc.bLpVp;
    _0x152d9d.GwSLW = function (_0x851578, _0x3646b8) {
      return _0x31f9cc.PspRt(_0x851578, _0x3646b8);
    };
    _0x152d9d.Nxkvy = _0x31f9cc.nNETR;
    _0x152d9d.ozYFT = _0x31f9cc.dQSKb;
    _0x152d9d.NWhZE = function (_0x28b8aa, _0x210fd7) {
      return _0x31f9cc.VeyqC(_0x28b8aa, _0x210fd7);
    };
    _0x152d9d.fgRPd = function (_0x3f2772) {
      return _0x31f9cc.noAto(_0x3f2772);
    };
    _0x152d9d.omffP = function (_0x4c4bad, _0x540e4b) {
      return _0x31f9cc.DFLQY(_0x4c4bad, _0x540e4b);
    };
    _0x152d9d.kvINZ = function (_0x222530) {
      return _0x31f9cc.kItbn(_0x222530);
    };
    _0x152d9d.anQAF = function (_0x588705, _0x214f9b) {
      return _0x31f9cc.XsQVI(_0x588705, _0x214f9b);
    };
    _0x152d9d.FwEOk = function (_0x1d098a, _0x5e52f9) {
      return _0x31f9cc.XlucL(_0x1d098a, _0x5e52f9);
    };
    _0x152d9d.fwgbg = function (_0xf2cd09, _0x108efd) {
      return _0x31f9cc.ivNGS(_0xf2cd09, _0x108efd);
    };
    _0x152d9d.FgdeB = function (_0x2c1cfe, _0x162e1a) {
      return _0x31f9cc.EnhaL(_0x2c1cfe, _0x162e1a);
    };
    const _0x34200d = _0x152d9d;
    if (_0x31f9cc.alERu(_0x31f9cc.JUQXK, _0x31f9cc.JUQXK)) {
      _0x31f9cc.apyDL(iQSbJ, this, function () {
        const _0x4b60a8 = new RegExp(_0x34200d.XURBf);
        const _0x444f56 = new RegExp(_0x34200d.KBlrs, "i");
        const _0x283ee7 = _0x34200d.SlQul(_0xbc334b, _0x34200d.ByoTI);
        if (!_0x4b60a8.test(_0x34200d.GwSLW(_0x283ee7, _0x34200d.Nxkvy)) || !_0x444f56.test(_0x34200d.GwSLW(_0x283ee7, _0x34200d.ozYFT))) {
          _0x34200d.NWhZE(_0x283ee7, "0");
        } else {
          _0x34200d.fgRPd(_0xbc334b);
        }
      })();
    } else {
      _0x31f9cc.apyDL(_0x43a291, _0xcace0, async (_0x14f786, _0x49345d, _0x618a68) => {
        const _0x118f91 = {};
        _0x118f91.Jpqsd = function (_0x28071c, _0x31a8e6) {
          return _0x31f9cc.WPgXO(_0x28071c, _0x31a8e6);
        };
        const _0x44209e = _0x118f91;
        if (_0x31f9cc.GkpBj(_0x31f9cc.qjkLy, _0x31f9cc.qjkLy)) {
          money = _0x34200d.omffP(money, 100);
        } else {
          if (!_0x14f786 && _0x31f9cc.qGoCq(_0x49345d.statusCode, 200)) {
            if (_0x31f9cc.Flrxb(_0x31f9cc.mSSkS, _0x31f9cc.mSSkS)) {
              const _0x18bbc7 = JSON.parse(_0x618a68);
              try {
                if (_0x31f9cc.uVuiN(_0x31f9cc.AryNc, _0x31f9cc.ZVtje)) {
                  for (var _0x264d25 = _0x34200d.kvINZ(_0x23f651), _0x429d92 = _0x18bbc7.records, _0x1a6334 = 0, _0x10072d = 0; _0x34200d.anQAF(_0x10072d, _0x429d92.length); _0x10072d++) _0x34200d.FwEOk(_0x429d92[_0x10072d].createdTime.indexOf(_0x264d25), -1) && _0x34200d.fwgbg(1, _0x429d92[_0x10072d].optType) && (_0x1a6334 += _0x429d92[_0x10072d].count);
                  _0x34200d.FgdeB(_0x131e5d, _0x1a6334);
                } else {
                  _0x31f9cc.WPgXO(_0x131e5d, _0x18bbc7.peaCount);
                }
              } catch (_0x3df62f) {
                if (_0x31f9cc.alERu(_0x31f9cc.zVzQk, _0x31f9cc.zVzQk)) {
                  bi = _0x55733f;
                } else {
                  console.log(_0x618a68);
                  _0x31f9cc.SpZkB(_0x131e5d, null);
                }
              }
            } else {
              console.log(_0x618a68);
              _0x44209e.Jpqsd(_0x131e5d, null);
            }
          } else {
            if (_0x31f9cc.YqeiG(_0x31f9cc.rQQaV, _0x31f9cc.rQQaV)) {
              _0x31f9cc.dnzVg(_0x131e5d, null);
            } else {
              const _0x2e6090 = fn.apply(context, arguments);
              fn = null;
              return _0x2e6090;
            }
          }
        }
      });
    }
  });
}
async function _0xc1502e(_0x160c7f) {
  const _0x507c54 = {};
  _0x507c54.PQqYP = function (_0xb29e7f, _0x38c481) {
    return _0xb29e7f(_0x38c481);
  };
  _0x507c54.ZhAOs = function (_0x53ed4f, _0x45b3dc) {
    return _0x53ed4f(_0x45b3dc);
  };
  _0x507c54.ErdYk = function (_0x4b719c, _0x1d9e04) {
    return _0x4b719c === _0x1d9e04;
  };
  _0x507c54.eaQYk = "RyMTi";
  _0x507c54.avHaR = "sGBNm";
  _0x507c54.wohXq = function (_0x36e47d, _0x452f79) {
    return _0x36e47d == _0x452f79;
  };
  _0x507c54.VqrtU = function (_0x20e73d, _0x1257e3) {
    return _0x20e73d !== _0x1257e3;
  };
  _0x507c54.LGFcM = "wIUhU";
  _0x507c54.lvhIe = "kLsmT";
  _0x507c54.autgs = "jnrJc";
  _0x507c54.zCmYQ = function (_0x41732e) {
    return _0x41732e();
  };
  _0x507c54.hOSek = function (_0x4f5807, _0x50263e) {
    return _0x4f5807 < _0x50263e;
  };
  _0x507c54.AuBXR = function (_0x41a969, _0x46447e) {
    return _0x41a969 > _0x46447e;
  };
  _0x507c54.nGbEi = function (_0x2efba2, _0x254123) {
    return _0x2efba2 == _0x254123;
  };
  _0x507c54.peFdP = function (_0x2276d8, _0x508fac) {
    return _0x2276d8(_0x508fac);
  };
  _0x507c54.pesAH = "HchjK";
  _0x507c54.ZGJHt = "Zhwxn";
  _0x507c54.wIvRh = function (_0x234168, _0x31469a) {
    return _0x234168(_0x31469a);
  };
  _0x507c54.adpXt = function (_0x31a2d1, _0x10315b) {
    return _0x31a2d1 !== _0x10315b;
  };
  _0x507c54.vhwrP = "qaZUs";
  _0x507c54.uxIiH = function (_0x2d2659, _0x54322a) {
    return _0x2d2659(_0x54322a);
  };
  _0x507c54.wAuZF = function (_0xc9dc27, _0x4b6906) {
    return _0xc9dc27(_0x4b6906);
  };
  _0x507c54.DxhIV = "EWTAI";
  _0x507c54.lWzBE = function (_0x2e61ac, _0x27f3ac, _0x3c3ba7) {
    return _0x2e61ac(_0x27f3ac, _0x3c3ba7);
  };
  _0x507c54.UQgoR = "application/json";
  _0x507c54.GQxbQ = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36";
  _0x507c54.ERJVy = "https://h5.ele.me/restapi/svip_biz/v1/supervip/foodie/records?offset=0&limit=100&longitude=39.916527&latitude=116.397128";
  _0x507c54.tQqOn = function (_0x5c8013, _0x213cdb) {
    return _0x5c8013(_0x213cdb);
  };
  const _0x712e30 = _0x507c54;
  const _0x3562ed = {};
  _0x3562ed["content-type"] = _0x712e30.UQgoR;
  _0x3562ed.Cookie = _0x160c7f;
  _0x3562ed["User-Agent"] = _0x712e30.GQxbQ;
  s = _0x3562ed;
  r = _0x712e30.ERJVy;
  const _0x48f96f = {};
  _0x48f96f.url = r;
  _0x48f96f.headers = s;
  const _0x222d3b = _0x48f96f;
  return _0x712e30.tQqOn(tryCatchPromise, _0x74a4a1 => {
    const _0x509fd7 = {};
    _0x509fd7.ZNtNc = function (_0x58f256, _0x22539d) {
      return _0x712e30.uxIiH(_0x58f256, _0x22539d);
    };
    _0x509fd7.TbqsT = function (_0x5ed347, _0x4ff378) {
      return _0x712e30.wAuZF(_0x5ed347, _0x4ff378);
    };
    const _0x512101 = _0x509fd7;
    if (_0x712e30.adpXt(_0x712e30.DxhIV, _0x712e30.DxhIV)) {
      _0x512101.ZNtNc(_0x74a4a1, null);
    } else {
      _0x712e30.lWzBE(_0x43a291, _0x222d3b, async (_0x52123b, _0x42a22e, _0x5dd484) => {
        const _0x8e9259 = {};
        _0x8e9259.hjShE = function (_0x598841, _0x2e98fd) {
          return _0x712e30.PQqYP(_0x598841, _0x2e98fd);
        };
        _0x8e9259.QHbtn = function (_0x3ce9a8, _0x4cfdef) {
          return _0x712e30.ZhAOs(_0x3ce9a8, _0x4cfdef);
        };
        const _0x1fe368 = _0x8e9259;
        if (_0x712e30.ErdYk(_0x712e30.eaQYk, _0x712e30.avHaR)) {
          try {
            const _0x2022f7 = JSON.parse(_0x5dd484);
            const _0x1dad02 = JSON.parse(_0x2022f7.data.data);
            _0x1fe368.hjShE(_0x74a4a1, _0x1dad02);
          } catch (_0x2e6f3f) {
            console.log(_0x5dd484);
            _0x1fe368.QHbtn(_0x74a4a1, null);
          }
        } else {
          if (!_0x52123b && _0x712e30.wohXq(_0x42a22e.statusCode, 200)) {
            if (_0x712e30.VqrtU(_0x712e30.LGFcM, _0x712e30.lvhIe)) {
              const _0xdaab51 = JSON.parse(_0x5dd484);
              try {
                if (_0x712e30.ErdYk(_0x712e30.autgs, _0x712e30.autgs)) {
                  for (var _0x1d6792 = _0x712e30.zCmYQ(_0x23f651), _0x1c93be = _0xdaab51.records, _0x33b6c4 = 0, _0x3c813c = 0; _0x712e30.hOSek(_0x3c813c, _0x1c93be.length); _0x3c813c++) _0x712e30.AuBXR(_0x1c93be[_0x3c813c].createdTime.indexOf(_0x1d6792), -1) && _0x712e30.nGbEi(1, _0x1c93be[_0x3c813c].optType) && (_0x33b6c4 += _0x1c93be[_0x3c813c].count);
                  _0x712e30.peFdP(_0x74a4a1, _0x33b6c4);
                } else {
                  _0x512101.TbqsT(_0x74a4a1, null);
                }
              } catch (_0x545707) {
                if (_0x712e30.ErdYk(_0x712e30.pesAH, _0x712e30.ZGJHt)) {
                  const _0x307bc5 = firstCall ? function () {
                    if (fn) {
                      const _0x13c78c = fn.apply(context, arguments);
                      fn = null;
                      return _0x13c78c;
                    }
                  } : function () {};
                  firstCall = false;
                  return _0x307bc5;
                } else {
                  console.log(_0x5dd484);
                  _0x712e30.wIvRh(_0x74a4a1, null);
                }
              }
            } else {
              money = _0x55733f;
            }
          } else {
            if (_0x712e30.adpXt(_0x712e30.vhwrP, _0x712e30.vhwrP)) {
              return true;
            } else {
              _0x712e30.uxIiH(_0x74a4a1, null);
            }
          }
        }
      });
    }
  });
}
async function _0x2e425a(_0x46ff2a) {
  const _0x314f49 = {};
  _0x314f49.FOohW = "IDIOM";
  _0x314f49.lMRBU = "{\"type\":\"ggetGold\"}";
  _0x314f49.VeRUu = "queryIndex";
  _0x314f49.VvVxo = function (_0x23323c, _0x59acd5, _0x4309b7) {
    return _0x23323c(_0x59acd5, _0x4309b7);
  };
  const _0x1531ab = _0x314f49;
  const _0x4f9ca3 = {};
  _0x4f9ca3.bizScene = _0x1531ab.FOohW;
  _0x4f9ca3.bizParam = _0x1531ab.lMRBU;
  _0x4f9ca3.bizMethod = _0x1531ab.VeRUu;
  const _0x3b59ab = _0x4f9ca3;
  const _0x39444a = await _0x1531ab.VvVxo(_0x1df2c9, _0x46ff2a, _0x3b59ab);
  return _0x39444a.num;
}
async function _0x1df2c9(_0x396c11, _0x1e34ac) {
  const _0x48acfa = {};
  _0x48acfa.hFnUU = function (_0x5d97e2) {
    return _0x5d97e2();
  };
  _0x48acfa.RNFWz = function (_0x378eb3, _0x1dd61f) {
    return _0x378eb3(_0x1dd61f);
  };
  _0x48acfa.TZZBs = function (_0x1d27bc, _0xa23ccd) {
    return _0x1d27bc(_0xa23ccd);
  };
  _0x48acfa.dvFLD = function (_0x1997ce, _0x37b28b) {
    return _0x1997ce + _0x37b28b;
  };
  _0x48acfa.yXrun = function (_0x59aaf3, _0x46b97e) {
    return _0x59aaf3 <= _0x46b97e;
  };
  _0x48acfa.sgioU = function (_0x159614, _0x9ff092) {
    return _0x159614 + _0x9ff092;
  };
  _0x48acfa.PQByt = function (_0x50b709, _0x45774e) {
    return _0x50b709 + _0x45774e;
  };
  _0x48acfa.fSNvv = function (_0x4265a3, _0x30cf80) {
    return _0x4265a3 !== _0x30cf80;
  };
  _0x48acfa.tKqbF = "FdWsW";
  _0x48acfa.yygps = function (_0x206169, _0xe4b4aa) {
    return _0x206169 == _0xe4b4aa;
  };
  _0x48acfa.gHEsq = function (_0x192482, _0x553a8a) {
    return _0x192482 === _0x553a8a;
  };
  _0x48acfa.MZLRO = "dNdyo";
  _0x48acfa.NzgAk = "DDMTk";
  _0x48acfa.QQOFv = function (_0x23fecb, _0x1a7fbe) {
    return _0x23fecb === _0x1a7fbe;
  };
  _0x48acfa.blvkL = "ZtBGN";
  _0x48acfa.aDWlH = function (_0x487ed0, _0x1857f3) {
    return _0x487ed0 === _0x1857f3;
  };
  _0x48acfa.byZOE = "eLQSp";
  _0x48acfa.YCVuQ = "KJHer";
  _0x48acfa.VzdxS = "BtHdU";
  _0x48acfa.RLsAL = "NblzF";
  _0x48acfa.fHrCi = "sMYhs";
  _0x48acfa.wgLRi = function (_0x3336fe, _0x1274ae, _0x1e2a52) {
    return _0x3336fe(_0x1274ae, _0x1e2a52);
  };
  _0x48acfa.eoBxd = "shopping.ele.me";
  _0x48acfa.qmOTQ = "application/json";
  _0x48acfa.xdiEB = "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7";
  _0x48acfa.eydkj = "no-cache";
  _0x48acfa.njnhc = "application/x-www-form-urlencoded";
  _0x48acfa.IgFYU = "https://r.ele.me";
  _0x48acfa.oMaTZ = "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0";
  _0x48acfa.WkQSu = "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36";
  _0x48acfa.XMadp = "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36";
  _0x48acfa.xEvGd = "data=";
  _0x48acfa.VfrAf = function (_0x464eef, _0x3ac123) {
    return _0x464eef(_0x3ac123);
  };
  _0x48acfa.DyCkG = function (_0x55530d, _0x422b7a) {
    return _0x55530d + _0x422b7a;
  };
  _0x48acfa.aarEz = function (_0x2ebae0, _0x48d9cf) {
    return _0x2ebae0 + _0x48d9cf;
  };
  _0x48acfa.Pobzy = function (_0x2cf292, _0x48b15d) {
    return _0x2cf292 + _0x48b15d;
  };
  _0x48acfa.wAAZG = function (_0x4ac40b, _0x1837e7) {
    return _0x4ac40b + _0x1837e7;
  };
  _0x48acfa.aHxfS = function (_0x51efde, _0x3acf81) {
    return _0x51efde + _0x3acf81;
  };
  _0x48acfa.TSWum = "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=";
  _0x48acfa.oFdfe = "&sign=";
  _0x48acfa.trpyQ = "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0";
  _0x48acfa.pfcXw = "POST";
  _0x48acfa.ZRfGo = function (_0x51c55c, _0x40af21) {
    return _0x51c55c(_0x40af21);
  };
  const _0x18aadd = _0x48acfa;
  const _0x1c07f0 = {};
  _0x1c07f0.authority = _0x18aadd.eoBxd;
  _0x1c07f0.accept = _0x18aadd.qmOTQ;
  _0x1c07f0["accept-language"] = _0x18aadd.xdiEB;
  _0x1c07f0["cache-control"] = _0x18aadd.eydkj;
  _0x1c07f0["content-type"] = _0x18aadd.njnhc;
  _0x1c07f0.origin = _0x18aadd.IgFYU;
  _0x1c07f0.pragma = _0x18aadd.eydkj;
  _0x1c07f0.referer = _0x18aadd.oMaTZ;
  _0x1c07f0.cookie = _0x396c11;
  _0x1c07f0["x-ele-ua"] = _0x18aadd.WkQSu;
  _0x1c07f0["user-agent"] = _0x18aadd.XMadp;
  var _0x5e5a45 = _0x1c07f0;
  const _0x9ef4df = new Date().getTime();
  const _0x582767 = 12574478;
  var _0x2fb2c6 = _0x18aadd.PQByt(_0x18aadd.xEvGd, _0x18aadd.TZZBs(encodeURIComponent, JSON.stringify(_0x1e34ac)));
  const _0x4e6fdb = _0x18aadd.VfrAf(getToken, _0x396c11),
    _0x460c4b = _0x4e6fdb.split("_")[0];
  const _0x1d360e = await _0x18aadd.wgLRi(sign, _0x18aadd.DyCkG(_0x18aadd.DyCkG(_0x18aadd.DyCkG(_0x18aadd.aarEz(_0x18aadd.Pobzy(_0x18aadd.Pobzy(_0x460c4b, "&"), _0x9ef4df), "&"), _0x582767), "&"), JSON.stringify(_0x1e34ac)), _0x46e8ae);
  const _0x26d10c = {};
  _0x26d10c.url = _0x18aadd.Pobzy(_0x18aadd.wAAZG(_0x18aadd.aHxfS(_0x18aadd.aHxfS(_0x18aadd.TSWum, _0x9ef4df), _0x18aadd.oFdfe), _0x1d360e), _0x18aadd.trpyQ);
  _0x26d10c.method = _0x18aadd.pfcXw;
  _0x26d10c.headers = _0x5e5a45;
  _0x26d10c.body = _0x2fb2c6;
  var _0x42fd07 = _0x26d10c;
  return _0x18aadd.ZRfGo(tryCatchPromise, _0x46952e => {
    const _0x238b1f = {};
    _0x238b1f.gmapR = function (_0x5185c7, _0x3abb90) {
      return _0x18aadd.RNFWz(_0x5185c7, _0x3abb90);
    };
    _0x238b1f.cUAiD = function (_0x278aec, _0x198cb2) {
      return _0x18aadd.TZZBs(_0x278aec, _0x198cb2);
    };
    _0x238b1f.SKXEK = function (_0x6ee243, _0x50cbc6) {
      return _0x18aadd.dvFLD(_0x6ee243, _0x50cbc6);
    };
    _0x238b1f.lilbN = function (_0x16aa13, _0x350491) {
      return _0x18aadd.yXrun(_0x16aa13, _0x350491);
    };
    _0x238b1f.DDglx = function (_0x3121e2, _0x3c3d76) {
      return _0x18aadd.dvFLD(_0x3121e2, _0x3c3d76);
    };
    _0x238b1f.upyFU = function (_0x169472, _0xaaadff) {
      return _0x18aadd.sgioU(_0x169472, _0xaaadff);
    };
    _0x238b1f.aFKTy = function (_0x1d356e, _0x2bf8e4) {
      return _0x18aadd.PQByt(_0x1d356e, _0x2bf8e4);
    };
    _0x238b1f.uUTfa = function (_0x56aded, _0x436449) {
      return _0x18aadd.fSNvv(_0x56aded, _0x436449);
    };
    _0x238b1f.OmraM = _0x18aadd.tKqbF;
    _0x238b1f.PuXro = function (_0x5345d3, _0x43914d) {
      return _0x18aadd.yygps(_0x5345d3, _0x43914d);
    };
    _0x238b1f.TDDbg = function (_0x31c640, _0x91bd) {
      return _0x18aadd.gHEsq(_0x31c640, _0x91bd);
    };
    _0x238b1f.QPAcn = _0x18aadd.MZLRO;
    _0x238b1f.mLFob = _0x18aadd.NzgAk;
    _0x238b1f.alVqy = function (_0x515ea9, _0x53f5a9) {
      return _0x18aadd.QQOFv(_0x515ea9, _0x53f5a9);
    };
    _0x238b1f.KAiit = _0x18aadd.blvkL;
    _0x238b1f.JMJAP = function (_0x442271, _0x99f319) {
      return _0x18aadd.aDWlH(_0x442271, _0x99f319);
    };
    _0x238b1f.LGCfe = _0x18aadd.byZOE;
    _0x238b1f.usuwO = _0x18aadd.YCVuQ;
    _0x238b1f.OViwl = _0x18aadd.VzdxS;
    const _0xf91e91 = _0x238b1f;
    if (_0x18aadd.aDWlH(_0x18aadd.RLsAL, _0x18aadd.fHrCi)) {
      _0x18aadd.hFnUU(_0xbc334b);
    } else {
      _0x18aadd.wgLRi(_0x43a291, _0x42fd07, async (_0x1ea0a1, _0x266ff8, _0x582388) => {
        const _0x4e13b0 = {};
        _0x4e13b0.WaPUh = function (_0x47948e, _0x486100) {
          return _0xf91e91.cUAiD(_0x47948e, _0x486100);
        };
        _0x4e13b0.nOilV = function (_0x53dc08, _0x47f0d9) {
          return _0xf91e91.SKXEK(_0x53dc08, _0x47f0d9);
        };
        _0x4e13b0.beQPV = function (_0x4cbc8a, _0x521cc0) {
          return _0xf91e91.lilbN(_0x4cbc8a, _0x521cc0);
        };
        _0x4e13b0.GOLwQ = function (_0xcc0c1a, _0xc00b2e) {
          return _0xf91e91.lilbN(_0xcc0c1a, _0xc00b2e);
        };
        _0x4e13b0.WXVxk = function (_0x3076bf, _0x39b829) {
          return _0xf91e91.SKXEK(_0x3076bf, _0x39b829);
        };
        _0x4e13b0.kTZtl = function (_0x5f29be, _0x4bb475) {
          return _0xf91e91.DDglx(_0x5f29be, _0x4bb475);
        };
        _0x4e13b0.IHJEv = function (_0x101657, _0x567320) {
          return _0xf91e91.upyFU(_0x101657, _0x567320);
        };
        _0x4e13b0.ODwpW = function (_0x557f27, _0x3412f4) {
          return _0xf91e91.aFKTy(_0x557f27, _0x3412f4);
        };
        const _0x202954 = _0x4e13b0;
        if (_0xf91e91.uUTfa(_0xf91e91.OmraM, _0xf91e91.OmraM)) {
          totalAmount += _0x202954.WaPUh(Number, element.amount);
        } else {
          if (!_0x1ea0a1 && _0xf91e91.PuXro(_0x266ff8.statusCode, 200)) {
            if (_0xf91e91.TDDbg(_0xf91e91.QPAcn, _0xf91e91.mLFob)) {
              var _0x25c813 = new Date(),
                _0x3d151d = _0x202954.nOilV(_0x25c813.getMonth(), 1),
                _0x2baeaf = _0x25c813.getDate();
              return _0x202954.beQPV(_0x3d151d, 9) && (_0x3d151d = _0x202954.nOilV("0", _0x3d151d)), _0x202954.GOLwQ(_0x2baeaf, 9) && (_0x2baeaf = _0x202954.WXVxk("0", _0x2baeaf)), _0x202954.kTZtl(_0x202954.IHJEv(_0x202954.ODwpW(_0x202954.ODwpW(_0x25c813.getFullYear(), "-"), _0x3d151d), "-"), _0x2baeaf);
            } else {
              try {
                if (_0xf91e91.alVqy(_0xf91e91.KAiit, _0xf91e91.KAiit)) {
                  const _0x3cb15f = JSON.parse(_0x582388);
                  const _0x470a8b = JSON.parse(_0x3cb15f.data.data);
                  _0xf91e91.cUAiD(_0x46952e, _0x470a8b);
                } else {
                  _0xf91e91.gmapR(debuggerProtection, 0);
                }
              } catch (_0x1d36db) {
                if (_0xf91e91.JMJAP(_0xf91e91.LGCfe, _0xf91e91.usuwO)) {
                  const _0x741ede = JSON.parse(_0x582388);
                  try {
                    _0xf91e91.gmapR(_0x46952e, _0x741ede.peaCount);
                  } catch (_0x44cb28) {
                    console.log(_0x582388);
                    _0xf91e91.gmapR(_0x46952e, null);
                  }
                } else {
                  console.log(_0x582388);
                  _0xf91e91.cUAiD(_0x46952e, null);
                }
              }
            }
          } else {
            if (_0xf91e91.JMJAP(_0xf91e91.OViwl, _0xf91e91.OViwl)) {
              _0xf91e91.cUAiD(_0x46952e, null);
            } else {
              console.log(_0x582388);
            }
          }
        }
      });
    }
  });
}
async function _0xf7ccac(_0x1e0e27, _0x54f7f5) {
  const _0x1ba61c = {};
  _0x1ba61c.zSfoi = function (_0x2b44c4, _0x522421) {
    return _0x2b44c4(_0x522421);
  };
  _0x1ba61c.WcBJN = "function *\\( *\\)";
  _0x1ba61c.wwuPh = "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)";
  _0x1ba61c.hIJKv = function (_0x7595ac, _0x3df9cf) {
    return _0x7595ac(_0x3df9cf);
  };
  _0x1ba61c.VrOjB = "init";
  _0x1ba61c.ZOCZJ = function (_0x203ca4, _0x5c7c2f) {
    return _0x203ca4 + _0x5c7c2f;
  };
  _0x1ba61c.vNkWV = "chain";
  _0x1ba61c.VASPB = function (_0x54772d, _0xed2062) {
    return _0x54772d + _0xed2062;
  };
  _0x1ba61c.jFNLu = "input";
  _0x1ba61c.OFKJP = function (_0x509462) {
    return _0x509462();
  };
  _0x1ba61c.AjAhb = function (_0x436b14, _0x53c79a) {
    return _0x436b14(_0x53c79a);
  };
  _0x1ba61c.VhdhE = "return /\" + this + \"/";
  _0x1ba61c.mVCFF = "^([^ ]+( +[^ ]+)+)+[^ ]}";
  _0x1ba61c.vVkfY = function (_0x5bbafc, _0x1e3ddf) {
    return _0x5bbafc === _0x1e3ddf;
  };
  _0x1ba61c.cOHvf = "GRANT";
  _0x1ba61c.ZKuBs = function (_0x28408e, _0x3f0499) {
    return _0x28408e !== _0x3f0499;
  };
  _0x1ba61c.CEvOy = function (_0x67abae) {
    return _0x67abae();
  };
  _0x1ba61c.cFCxf = "pSHNm";
  _0x1ba61c.pVLQS = function (_0x3023e8, _0x570d40) {
    return _0x3023e8 === _0x570d40;
  };
  _0x1ba61c.BrsBR = "OTOaR";
  _0x1ba61c.tMQEt = "hhFFt";
  _0x1ba61c.aLLwJ = "ijwSY";
  _0x1ba61c.oGLNb = "aeTyH";
  _0x1ba61c.xeHnI = "PZpUg";
  _0x1ba61c.WgxFv = function (_0x603487, _0x5e6a7c) {
    return _0x603487 < _0x5e6a7c;
  };
  _0x1ba61c.XaGDX = "umAOo";
  _0x1ba61c.dEpJT = "xwYql";
  _0x1ba61c.IvuJZ = function (_0xa659f3) {
    return _0xa659f3();
  };
  _0x1ba61c.oRKMd = function (_0x432be0, _0x3155ab) {
    return _0x432be0 !== _0x3155ab;
  };
  _0x1ba61c.yUQCw = "ATMQK";
  _0x1ba61c.bZPIV = "DyHqK";
  _0x1ba61c.ppSWy = function (_0x4c2d1b, _0x30d60b) {
    return _0x4c2d1b(_0x30d60b);
  };
  _0x1ba61c.oMLgu = function (_0x3270fc, _0x98a6e) {
    return _0x3270fc === _0x98a6e;
  };
  _0x1ba61c.WVJQF = "RKWTW";
  _0x1ba61c.cHaKT = "RlvUE";
  _0x1ba61c.lXwpD = function (_0x59f84f, _0x23777d) {
    return _0x59f84f !== _0x23777d;
  };
  _0x1ba61c.rshla = "OwlPh";
  _0x1ba61c.JaNDT = "XVWDO";
  _0x1ba61c.XfhRX = function (_0x56f0d3, _0x9cefcb, _0x5a869e) {
    return _0x56f0d3(_0x9cefcb, _0x5a869e);
  };
  _0x1ba61c.YxyyV = "mtop.ele.me";
  _0x1ba61c.TRTrn = "application/json";
  _0x1ba61c.KzOCM = "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7";
  _0x1ba61c.KjCwX = "no-cache";
  _0x1ba61c.gSIQr = "application/x-www-form-urlencoded";
  _0x1ba61c.GQGpg = "https://tb.ele.me";
  _0x1ba61c.ZchdL = "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login";
  _0x1ba61c.lDLoS = "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36";
  _0x1ba61c.CIbqi = "1404";
  _0x1ba61c.MzyPi = "game_center";
  _0x1ba61c.Ghqll = "GAME_CENTER";
  _0x1ba61c.xfyWU = " 00:00:00";
  _0x1ba61c.rkyoP = function (_0x18caec, _0x576c7e) {
    return _0x18caec + _0x576c7e;
  };
  _0x1ba61c.rXsCB = "data=";
  _0x1ba61c.SEVta = function (_0x12f6e9, _0x41b92f) {
    return _0x12f6e9(_0x41b92f);
  };
  _0x1ba61c.lQcQM = function (_0x6a112b, _0x3c77da) {
    return _0x6a112b(_0x3c77da);
  };
  _0x1ba61c.wgGrM = function (_0x1ce73a, _0x3fe785) {
    return _0x1ce73a + _0x3fe785;
  };
  _0x1ba61c.gxuqG = function (_0x53c69d, _0x4389d7) {
    return _0x53c69d + _0x4389d7;
  };
  _0x1ba61c.hpPIh = function (_0x1ca9e6, _0x1ff937) {
    return _0x1ca9e6 + _0x1ff937;
  };
  _0x1ba61c.JURqr = function (_0x19505f, _0x352178) {
    return _0x19505f + _0x352178;
  };
  _0x1ba61c.hXpWM = "https://mtop.ele.me/h5/mtop.koubei.interaction.center.common.querypropertydetail/1.0/?jsv=2.7.1&appKey=12574478&t=";
  _0x1ba61c.oerRZ = "&sign=";
  _0x1ba61c.LdWVL = "&api=mtop.koubei.interaction.center.common.querypropertydetail&v=1.0";
  _0x1ba61c.dpPua = "POST";
  _0x1ba61c.JyyeT = function (_0x3c62a0, _0xc636bb) {
    return _0x3c62a0(_0xc636bb);
  };
  const _0x3cac26 = _0x1ba61c;
  const _0x4e034e = {};
  _0x4e034e.authority = _0x3cac26.YxyyV;
  _0x4e034e.accept = _0x3cac26.TRTrn;
  _0x4e034e["accept-language"] = _0x3cac26.KzOCM;
  _0x4e034e["cache-control"] = _0x3cac26.KjCwX;
  _0x4e034e["content-type"] = _0x3cac26.gSIQr;
  _0x4e034e.cookie = _0x1e0e27;
  _0x4e034e.origin = _0x3cac26.GQGpg;
  _0x4e034e.pragma = _0x3cac26.KjCwX;
  _0x4e034e.referer = _0x3cac26.ZchdL;
  _0x4e034e["user-agent"] = _0x3cac26.lDLoS;
  var _0x5915f5 = _0x4e034e;
  const _0x1d1a7b = {};
  _0x1d1a7b.templateId = _0x3cac26.CIbqi;
  _0x1d1a7b.bizScene = _0x3cac26.MzyPi;
  _0x1d1a7b.convertType = _0x3cac26.Ghqll;
  _0x1d1a7b.startTime = _0x3cac26.VASPB(_0x3cac26.IvuJZ(_0x15e7a0), _0x3cac26.xfyWU);
  _0x1d1a7b.pageNo = _0x54f7f5;
  _0x1d1a7b.pageSize = "20";
  var _0x229b3e = _0x1d1a7b;
  const _0xa0411f = new Date().getTime();
  const _0x2b5c72 = 12574478;
  var _0x1a5ddd = _0x3cac26.rkyoP(_0x3cac26.rXsCB, _0x3cac26.SEVta(encodeURIComponent, JSON.stringify(_0x229b3e)));
  const _0x267792 = _0x3cac26.lQcQM(getToken, _0x1e0e27),
    _0x1c4025 = _0x267792.split("_")[0];
  const _0x26ba75 = await _0x3cac26.XfhRX(sign, _0x3cac26.rkyoP(_0x3cac26.wgGrM(_0x3cac26.gxuqG(_0x3cac26.hpPIh(_0x3cac26.hpPIh(_0x3cac26.JURqr(_0x1c4025, "&"), _0xa0411f), "&"), _0x2b5c72), "&"), JSON.stringify(_0x229b3e)), _0x46e8ae);
  const _0x421606 = {};
  _0x421606.url = _0x3cac26.JURqr(_0x3cac26.JURqr(_0x3cac26.JURqr(_0x3cac26.JURqr(_0x3cac26.hXpWM, _0xa0411f), _0x3cac26.oerRZ), _0x26ba75), _0x3cac26.LdWVL);
  _0x421606.method = _0x3cac26.dpPua;
  _0x421606.headers = _0x5915f5;
  _0x421606.body = _0x1a5ddd;
  var _0x13f67c = _0x421606;
  return _0x3cac26.JyyeT(tryCatchPromise, _0x51e67c => {
    const _0x9d285e = {};
    _0x9d285e.RhMlo = _0x3cac26.WcBJN;
    _0x9d285e.qzSyD = _0x3cac26.wwuPh;
    _0x9d285e.TCKFh = function (_0x343212, _0xdf1544) {
      return _0x3cac26.hIJKv(_0x343212, _0xdf1544);
    };
    _0x9d285e.OrUJE = _0x3cac26.VrOjB;
    _0x9d285e.trJHR = function (_0x5da557, _0x433a95) {
      return _0x3cac26.ZOCZJ(_0x5da557, _0x433a95);
    };
    _0x9d285e.AOsTo = _0x3cac26.vNkWV;
    _0x9d285e.PkJKu = function (_0x285c3a, _0x3155c2) {
      return _0x3cac26.VASPB(_0x285c3a, _0x3155c2);
    };
    _0x9d285e.gEsMm = _0x3cac26.jFNLu;
    _0x9d285e.crzNv = function (_0x47567b) {
      return _0x3cac26.OFKJP(_0x47567b);
    };
    _0x9d285e.RcdFw = function (_0x439857, _0x4aa2fe) {
      return _0x3cac26.hIJKv(_0x439857, _0x4aa2fe);
    };
    _0x9d285e.sQsLV = function (_0x20a6c6, _0x2c0069) {
      return _0x3cac26.AjAhb(_0x20a6c6, _0x2c0069);
    };
    _0x9d285e.uyjcJ = _0x3cac26.VhdhE;
    _0x9d285e.brlJA = _0x3cac26.mVCFF;
    _0x9d285e.OKczs = function (_0x105f2f, _0x5cbea4) {
      return _0x3cac26.vVkfY(_0x105f2f, _0x5cbea4);
    };
    _0x9d285e.pQFmD = _0x3cac26.cOHvf;
    _0x9d285e.uoTNl = function (_0x3253c9, _0x2ffc97) {
      return _0x3cac26.ZKuBs(_0x3253c9, _0x2ffc97);
    };
    _0x9d285e.wXDfC = function (_0x3042b4) {
      return _0x3cac26.CEvOy(_0x3042b4);
    };
    _0x9d285e.RNXcy = function (_0x457b43, _0x1d728a) {
      return _0x3cac26.AjAhb(_0x457b43, _0x1d728a);
    };
    _0x9d285e.imUTY = function (_0x1e6396) {
      return _0x3cac26.CEvOy(_0x1e6396);
    };
    _0x9d285e.mbJWV = _0x3cac26.cFCxf;
    _0x9d285e.wkZjb = function (_0x27501d, _0x5f0ffe) {
      return _0x3cac26.pVLQS(_0x27501d, _0x5f0ffe);
    };
    _0x9d285e.dBNQa = function (_0x3482c3, _0x569477) {
      return _0x3cac26.pVLQS(_0x3482c3, _0x569477);
    };
    _0x9d285e.MidCH = _0x3cac26.BrsBR;
    _0x9d285e.XjuJA = _0x3cac26.tMQEt;
    _0x9d285e.RvWMq = _0x3cac26.aLLwJ;
    _0x9d285e.fXnLu = function (_0x2ba132, _0x1f2e28) {
      return _0x3cac26.ZKuBs(_0x2ba132, _0x1f2e28);
    };
    _0x9d285e.FhhPH = _0x3cac26.oGLNb;
    _0x9d285e.bkvow = _0x3cac26.xeHnI;
    _0x9d285e.xHdVo = function (_0xf66ccf, _0x3a116c) {
      return _0x3cac26.WgxFv(_0xf66ccf, _0x3a116c);
    };
    _0x9d285e.vfqOe = _0x3cac26.XaGDX;
    _0x9d285e.YOCbZ = _0x3cac26.dEpJT;
    _0x9d285e.qnbIO = function (_0x551744, _0x2a031a) {
      return _0x3cac26.pVLQS(_0x551744, _0x2a031a);
    };
    _0x9d285e.AWVDa = function (_0x4bfacd, _0x3701be) {
      return _0x3cac26.ZKuBs(_0x4bfacd, _0x3701be);
    };
    _0x9d285e.AzlyG = function (_0x39d9d9) {
      return _0x3cac26.IvuJZ(_0x39d9d9);
    };
    _0x9d285e.Jkhmw = function (_0x2e5a3d, _0x3b402a) {
      return _0x3cac26.oRKMd(_0x2e5a3d, _0x3b402a);
    };
    _0x9d285e.OzvYC = _0x3cac26.yUQCw;
    _0x9d285e.PbzFv = _0x3cac26.bZPIV;
    _0x9d285e.VXphV = function (_0x358a14, _0x332b0f) {
      return _0x3cac26.ppSWy(_0x358a14, _0x332b0f);
    };
    _0x9d285e.vSSXS = function (_0x2792c6, _0x49c45e) {
      return _0x3cac26.oMLgu(_0x2792c6, _0x49c45e);
    };
    _0x9d285e.iUiYf = _0x3cac26.WVJQF;
    _0x9d285e.VWuUD = function (_0x122e4a, _0x4052c3) {
      return _0x3cac26.oMLgu(_0x122e4a, _0x4052c3);
    };
    _0x9d285e.BQQwf = _0x3cac26.cHaKT;
    const _0x2ced07 = _0x9d285e;
    if (_0x3cac26.lXwpD(_0x3cac26.rshla, _0x3cac26.JaNDT)) {
      _0x3cac26.XfhRX(_0x43a291, _0x13f67c, async (_0x451736, _0x3352bc, _0x15e984) => {
        const _0x3a615d = {};
        _0x3a615d.VeLXm = function (_0x2de788, _0xcfc002) {
          return _0x2ced07.sQsLV(_0x2de788, _0xcfc002);
        };
        _0x3a615d.HVQeB = function (_0x1b2240, _0x2143e1) {
          return _0x2ced07.sQsLV(_0x1b2240, _0x2143e1);
        };
        _0x3a615d.TUusE = _0x2ced07.uyjcJ;
        _0x3a615d.TJpHL = _0x2ced07.brlJA;
        _0x3a615d.QTUPv = function (_0x1a5483) {
          return _0x2ced07.crzNv(_0x1a5483);
        };
        _0x3a615d.Viohm = function (_0x3af2bb, _0x57332f) {
          return _0x2ced07.OKczs(_0x3af2bb, _0x57332f);
        };
        _0x3a615d.nLfsv = _0x2ced07.pQFmD;
        _0x3a615d.zxzZa = function (_0x2137c7, _0x137988) {
          return _0x2ced07.uoTNl(_0x2137c7, _0x137988);
        };
        _0x3a615d.AiSEM = function (_0x3f5169) {
          return _0x2ced07.wXDfC(_0x3f5169);
        };
        _0x3a615d.NftFg = function (_0x25c6f0, _0x495381) {
          return _0x2ced07.RNXcy(_0x25c6f0, _0x495381);
        };
        _0x3a615d.RHocF = function (_0x147709) {
          return _0x2ced07.imUTY(_0x147709);
        };
        const _0x23d48d = _0x3a615d;
        if (_0x2ced07.OKczs(_0x2ced07.mbJWV, _0x2ced07.mbJWV)) {
          if (!_0x451736 && _0x2ced07.wkZjb(_0x3352bc.statusCode, 200)) {
            if (_0x2ced07.dBNQa(_0x2ced07.MidCH, _0x2ced07.MidCH)) {
              const _0x1fab8a = JSON.parse(_0x15e984);
              try {
                if (_0x2ced07.uoTNl(_0x2ced07.XjuJA, _0x2ced07.RvWMq)) {
                  if (_0x1fab8a.data) {
                    if (_0x2ced07.fXnLu(_0x2ced07.FhhPH, _0x2ced07.bkvow)) {
                      var _0x5192ab = 0;
                      for (let _0xadb515 = 0; _0x2ced07.xHdVo(_0xadb515, _0x1fab8a.data.list.length); _0xadb515++) {
                        if (_0x2ced07.fXnLu(_0x2ced07.vfqOe, _0x2ced07.YOCbZ)) {
                          const _0x4b4d8f = _0x1fab8a.data.list[_0xadb515];
                          if (_0x2ced07.qnbIO(_0x4b4d8f.detailType, _0x2ced07.pQFmD) && _0x2ced07.AWVDa(_0x4b4d8f.gmtModified.indexOf(_0x2ced07.AzlyG(_0x15e7a0)), -1)) {
                            if (_0x2ced07.Jkhmw(_0x2ced07.OzvYC, _0x2ced07.PbzFv)) {
                              _0x5192ab += _0x2ced07.VXphV(Number, _0x4b4d8f.amount);
                            } else {
                              _0x23d48d.VeLXm(_0x51e67c, null);
                            }
                          }
                        } else {
                          console.log(_0x15e984);
                          _0x23d48d.HVQeB(_0x51e67c, null);
                        }
                      }
                    } else {
                      const _0x4dbef2 = function () {
                        const _0x5ecf11 = _0x4dbef2.constructor(_0x23d48d.TUusE)().compile(_0x23d48d.TJpHL);
                        return !_0x5ecf11.test(_0x49a1a4);
                      };
                      return _0x23d48d.QTUPv(_0x4dbef2);
                    }
                  }
                  _0x2ced07.VXphV(_0x51e67c, _0x5192ab);
                } else {
                  return debuggerProtection;
                }
              } catch (_0x2b9b54) {
                if (_0x2ced07.vSSXS(_0x2ced07.iUiYf, _0x2ced07.iUiYf)) {
                  console.log(_0x15e984);
                } else {
                  const _0xe4b613 = _0x1fab8a.data.list[index];
                  if (_0x23d48d.Viohm(_0xe4b613.detailType, _0x23d48d.nLfsv) && _0x23d48d.zxzZa(_0xe4b613.gmtModified.indexOf(_0x23d48d.AiSEM(_0x15e7a0)), -1)) {
                    _0x5192ab += _0x23d48d.NftFg(Number, _0xe4b613.amount);
                  }
                }
              }
              _0x2ced07.VXphV(_0x51e67c, _0x1fab8a);
            } else {
              _0x23d48d.RHocF(_0xbc334b);
            }
          } else {
            if (_0x2ced07.VWuUD(_0x2ced07.BQQwf, _0x2ced07.BQQwf)) {
              _0x2ced07.VXphV(_0x51e67c, null);
            } else {
              const _0x1e7e0f = new RegExp(_0x2ced07.RhMlo);
              const _0xe26bd0 = new RegExp(_0x2ced07.qzSyD, "i");
              const _0x1138b6 = _0x2ced07.TCKFh(_0xbc334b, _0x2ced07.OrUJE);
              if (!_0x1e7e0f.test(_0x2ced07.trJHR(_0x1138b6, _0x2ced07.AOsTo)) || !_0xe26bd0.test(_0x2ced07.PkJKu(_0x1138b6, _0x2ced07.gEsMm))) {
                _0x2ced07.TCKFh(_0x1138b6, "0");
              } else {
                _0x2ced07.crzNv(_0xbc334b);
              }
            }
          }
        } else {
          _0x2ced07.RcdFw(result, "0");
        }
      });
    } else {
      _0x3cac26.zSfoi(_0x51e67c, null);
    }
  });
}
async function _0x378f6c(_0x429356, _0x16a72b) {
  const _0x34f222 = {};
  _0x34f222.OORzL = function (_0x6b049d, _0x4b288b) {
    return _0x6b049d(_0x4b288b);
  };
  _0x34f222.VSmmg = "wxUid";
  _0x34f222.CKqAP = function (_0x126496, _0x3d3b92) {
    return _0x126496 === _0x3d3b92;
  };
  _0x34f222.MRazl = "YYgMs";
  _0x34f222.wZScg = "lpiuU";
  _0x34f222.XUKDV = "没有获取到推送 uid，不推送消息\n";
  _0x34f222.hVsLC = function (_0x52b9de, _0x520d72) {
    return _0x52b9de !== _0x520d72;
  };
  _0x34f222.YHflI = "eWzxF";
  _0x34f222.HTbBl = function (_0x564ead, _0x17595b, _0x23d250, _0x383731) {
    return _0x564ead(_0x17595b, _0x23d250, _0x383731);
  };
  _0x34f222.LNjTu = "饿了么资产推送";
  const _0x30d5f5 = _0x34f222;
  const _0x220a27 = _0x30d5f5.OORzL(getCookieMap, _0x429356);
  if (!_0x220a27.has(_0x30d5f5.VSmmg)) {
    if (_0x30d5f5.CKqAP(_0x30d5f5.MRazl, _0x30d5f5.wZScg)) {
      console.log(body);
      _0x30d5f5.OORzL(resolve, null);
    } else {
      console.log(_0x30d5f5.XUKDV);
    }
  } else {
    if (_0x30d5f5.hVsLC(_0x30d5f5.YHflI, _0x30d5f5.YHflI)) {
      return false;
    } else {
      await _0x30d5f5.HTbBl(sendNotify, _0x30d5f5.LNjTu, _0x16a72b, {
        "uid": _0x220a27.get(_0x30d5f5.VSmmg)
      });
    }
  }
}
async function _0x163ae7() {
  const _0x187e6b = {};
  _0x187e6b.OQpcY = "return /\" + this + \"/";
  _0x187e6b.JAaQk = "^([^ ]+( +[^ ]+)+)+[^ ]}";
  _0x187e6b.LzzQt = "while (true) {}";
  _0x187e6b.VZDBC = "counter";
  _0x187e6b.cMyhx = function (_0x27b3a4, _0x1afe43) {
    return _0x27b3a4 !== _0x1afe43;
  };
  _0x187e6b.gKlQN = "GEbLK";
  _0x187e6b.VLDHe = "XcvLg";
  _0x187e6b.oMQtj = function (_0x541f68, _0x175632) {
    return _0x541f68(_0x175632);
  };
  _0x187e6b.DtNle = function (_0x31c54b) {
    return _0x31c54b();
  };
  _0x187e6b.OQoXq = "YYYY-MM-DD";
  _0x187e6b.ftFuS = function (_0x5dc138, _0x5a9654) {
    return _0x5dc138 === _0x5a9654;
  };
  _0x187e6b.xIOgA = "WDkXW";
  _0x187e6b.FWtfT = function (_0x49ba57, _0x577e8a) {
    return _0x49ba57 !== _0x577e8a;
  };
  _0x187e6b.fVdVp = "AWojj";
  _0x187e6b.uqPgO = "wqIed";
  _0x187e6b.gGSXh = function (_0x1a2309) {
    return _0x1a2309();
  };
  _0x187e6b.YONIq = function (_0x1057c3, _0x509301) {
    return _0x1057c3 < _0x509301;
  };
  _0x187e6b.hEvhE = function (_0x247ea2, _0x5708e4) {
    return _0x247ea2 > _0x5708e4;
  };
  _0x187e6b.axUob = function (_0x20ba53, _0x25ef32) {
    return _0x20ba53 == _0x25ef32;
  };
  _0x187e6b.KyMfs = function (_0x2fe660, _0x411249) {
    return _0x2fe660(_0x411249);
  };
  _0x187e6b.bExQq = function (_0x2495fb, _0x557946) {
    return _0x2495fb(_0x557946);
  };
  _0x187e6b.kOBZx = "JnPJI";
  _0x187e6b.JaMQt = "uxAWl";
  _0x187e6b.fhfFY = function (_0x401c31, _0x31d52b) {
    return _0x401c31(_0x31d52b);
  };
  _0x187e6b.DAzpN = function (_0x2c34cc, _0x250cb4) {
    return _0x2c34cc !== _0x250cb4;
  };
  _0x187e6b.tfCKV = "WYKqQ";
  _0x187e6b.gdQeK = "UYdEq";
  _0x187e6b.ARdCu = function (_0x50d16e, _0x58efde) {
    return _0x50d16e === _0x58efde;
  };
  _0x187e6b.Nniff = "NBTJJ";
  _0x187e6b.xxKqH = "WXrmw";
  _0x187e6b.hyKlh = "vOhFl";
  _0x187e6b.QxiuS = function (_0x523305, _0x26fd3a) {
    return _0x523305 !== _0x26fd3a;
  };
  _0x187e6b.qgXhk = "sNySX";
  _0x187e6b.OlHOi = function (_0x12ddc6, _0x13927e) {
    return _0x12ddc6 + _0x13927e;
  };
  _0x187e6b.IdxDY = "debu";
  _0x187e6b.CGDqE = "gger";
  _0x187e6b.YazuV = "stateObject";
  _0x187e6b.HrWsh = function (_0x3734c4, _0x205c88) {
    return _0x3734c4(_0x205c88);
  };
  _0x187e6b.mdAiL = "xfEuM";
  _0x187e6b.VEtKM = "function *\\( *\\)";
  _0x187e6b.PqbXm = "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)";
  _0x187e6b.IrkRx = "init";
  _0x187e6b.llaxF = function (_0x37386c, _0x15e23c) {
    return _0x37386c + _0x15e23c;
  };
  _0x187e6b.myNAk = "chain";
  _0x187e6b.AVlWo = "input";
  _0x187e6b.gLrJx = "EaclA";
  _0x187e6b.VFfKQ = "Vopwa";
  _0x187e6b.nLofn = "gBKfD";
  _0x187e6b.VNCMW = "eOgfP";
  _0x187e6b.eEKNO = "JfcoQ";
  _0x187e6b.TFmJo = function (_0x5b248f, _0xd01cd8, _0x58292c) {
    return _0x5b248f(_0xd01cd8, _0x58292c);
  };
  _0x187e6b.vtsNA = function (_0x56f4b3, _0x1e8fde) {
    return _0x56f4b3(_0x1e8fde);
  };
  _0x187e6b.TzFwD = function (_0x3dd85d, _0x2b0a04) {
    return _0x3dd85d(_0x2b0a04);
  };
  _0x187e6b.KCPKy = function (_0x17a52f, _0x1a0e9c) {
    return _0x17a52f < _0x1a0e9c;
  };
  _0x187e6b.PcKca = function (_0x447d08, _0x453161) {
    return _0x447d08(_0x453161);
  };
  _0x187e6b.MdWmO = "IsLpM";
  _0x187e6b.YSmQL = "tuPkA";
  _0x187e6b.hewsD = function (_0x11fecb, _0x28d1b1) {
    return _0x11fecb + _0x28d1b1;
  };
  _0x187e6b.KMmwr = "账号失效！请重新登录！！！😭";
  _0x187e6b.TORzV = function (_0x450547, _0x2c38b1, _0x20e9e5, _0x2ed8a7) {
    return _0x450547(_0x2c38b1, _0x20e9e5, _0x2ed8a7);
  };
  _0x187e6b.UsKQU = "******开始【饿了么账号";
  _0x187e6b.aBiOl = "*********";
  _0x187e6b.WjZXc = function (_0xeb9631, _0x5bfc6e) {
    return _0xeb9631(_0x5bfc6e);
  };
  _0x187e6b.kLGHd = function (_0x208962, _0x5522f5) {
    return _0x208962 != _0x5522f5;
  };
  _0x187e6b.QZEgK = function (_0x1ef188, _0x23ebca) {
    return _0x1ef188 / _0x23ebca;
  };
  _0x187e6b.DLTrc = function (_0x36a21b, _0x207653, _0x5b39da) {
    return _0x36a21b(_0x207653, _0x5b39da);
  };
  _0x187e6b.WDHDj = function (_0x33b144, _0x59691c) {
    return _0x33b144(_0x59691c);
  };
  _0x187e6b.qRAEA = function (_0x216a69, _0x1123f0) {
    return _0x216a69 + _0x1123f0;
  };
  _0x187e6b.ZdSJc = function (_0x3d7bca, _0x4ff493) {
    return _0x3d7bca + _0x4ff493;
  };
  _0x187e6b.elpcp = function (_0x1e3531, _0x132ec0) {
    return _0x1e3531 + _0x132ec0;
  };
  _0x187e6b.ukRcQ = function (_0x1afa4e, _0xb10dd6) {
    return _0x1afa4e + _0xb10dd6;
  };
  _0x187e6b.TnXKI = "乐园币：";
  _0x187e6b.hfFXz = "当前乐园币：";
  _0x187e6b.yQkTC = function (_0x188e3d, _0x19f7a1) {
    return _0x188e3d + _0x19f7a1;
  };
  _0x187e6b.nDcGq = "总吃货豆：";
  _0x187e6b.KokwD = function (_0x3c6c07, _0x3a3341) {
    return _0x3c6c07 + _0x3a3341;
  };
  _0x187e6b.mndfO = "余额：";
  _0x187e6b.QFYkf = function (_0x466a09, _0x21dc39) {
    return _0x466a09 + _0x21dc39;
  };
  _0x187e6b.JAVAH = function (_0x5624de, _0xaef105) {
    return _0x5624de + _0xaef105;
  };
  _0x187e6b.vxBXg = function (_0x2e3f12, _0x2dec88) {
    return _0x2e3f12 + _0x2dec88;
  };
  _0x187e6b.izRqq = function (_0x2d916b, _0x5e0da1) {
    return _0x2d916b + _0x5e0da1;
  };
  _0x187e6b.EgyZv = function (_0x12ddc7, _0x366ecc) {
    return _0x12ddc7 + _0x366ecc;
  };
  _0x187e6b.BkNGq = function (_0x308baf, _0x221a1c) {
    return _0x308baf + _0x221a1c;
  };
  _0x187e6b.EvRZK = "###资产推送\n";
  _0x187e6b.YAvyu = function (_0xecde9, _0x2144d1, _0x41680e) {
    return _0xecde9(_0x2144d1, _0x41680e);
  };
  _0x187e6b.OgCRB = function (_0x3e33e0, _0x3dd8ae) {
    return _0x3e33e0(_0x3dd8ae);
  };
  const _0x27a555 = _0x187e6b;
  const _0x5f5265 = function () {
    const _0x51a447 = {};
    _0x51a447.gkGUE = _0x27a555.LzzQt;
    _0x51a447.sJKUM = _0x27a555.VZDBC;
    _0x51a447.tZKnN = function (_0x4f13fa, _0x2e4293) {
      return _0x27a555.cMyhx(_0x4f13fa, _0x2e4293);
    };
    _0x51a447.dMzQv = _0x27a555.gKlQN;
    _0x51a447.QVouj = _0x27a555.VLDHe;
    _0x51a447.ONLSq = function (_0x3080da, _0x431cae) {
      return _0x27a555.oMQtj(_0x3080da, _0x431cae);
    };
    _0x51a447.dGCAs = function (_0x15f6c6) {
      return _0x27a555.DtNle(_0x15f6c6);
    };
    _0x51a447.wsLtu = _0x27a555.OQoXq;
    _0x51a447.MGTKX = function (_0x9fa735, _0xccc4ad) {
      return _0x27a555.ftFuS(_0x9fa735, _0xccc4ad);
    };
    _0x51a447.CHoJw = _0x27a555.xIOgA;
    const _0x5d15a8 = _0x51a447;
    if (_0x27a555.FWtfT(_0x27a555.fVdVp, _0x27a555.uqPgO)) {
      let _0x15b96b = true;
      return function (_0x29d5c4, _0xf1c8f9) {
        const _0x182e3c = {};
        _0x182e3c.ALccB = function (_0x365841) {
          return _0x5d15a8.dGCAs(_0x365841);
        };
        _0x182e3c.RDMmg = _0x5d15a8.wsLtu;
        const _0x288ede = _0x182e3c;
        if (_0x5d15a8.MGTKX(_0x5d15a8.CHoJw, _0x5d15a8.CHoJw)) {
          const _0x27a970 = _0x15b96b ? function () {
            const _0x47426b = {};
            _0x47426b.nWhRD = _0x5d15a8.gkGUE;
            _0x47426b.MomIX = _0x5d15a8.sJKUM;
            const _0x2cec04 = _0x47426b;
            if (_0x5d15a8.tZKnN(_0x5d15a8.dMzQv, _0x5d15a8.dMzQv)) {
              return _0x288ede.ALccB(_0x3ee842).format(_0x288ede.RDMmg);
            } else {
              if (_0xf1c8f9) {
                if (_0x5d15a8.tZKnN(_0x5d15a8.QVouj, _0x5d15a8.QVouj)) {
                  return function (_0x4fd71c) {}.constructor(_0x2cec04.nWhRD).apply(_0x2cec04.MomIX);
                } else {
                  const _0x20dcad = _0xf1c8f9.apply(_0x29d5c4, arguments);
                  _0xf1c8f9 = null;
                  return _0x20dcad;
                }
              }
            }
          } : function () {};
          _0x15b96b = false;
          return _0x27a970;
        } else {
          _0x5d15a8.ONLSq(resolve, null);
        }
      };
    } else {
      const _0x39e904 = test.constructor(_0x27a555.OQpcY)().compile(_0x27a555.JAaQk);
      return !_0x39e904.test(_0x48576d);
    }
  }();
  const _0x48576d = _0x27a555.TFmJo(_0x5f5265, this, function () {
    if (_0x27a555.ftFuS(_0x27a555.JaMQt, _0x27a555.JaMQt)) {
      const _0x28ca72 = function () {
        const _0x5a1bb7 = {};
        _0x5a1bb7.lDuMF = function (_0x33448b) {
          return _0x27a555.gGSXh(_0x33448b);
        };
        _0x5a1bb7.oZKlc = function (_0x331443, _0x1a45a2) {
          return _0x27a555.YONIq(_0x331443, _0x1a45a2);
        };
        _0x5a1bb7.Fweor = function (_0x1f9995, _0x44fab5) {
          return _0x27a555.hEvhE(_0x1f9995, _0x44fab5);
        };
        _0x5a1bb7.NHQsk = function (_0xc4eff8, _0x13f594) {
          return _0x27a555.axUob(_0xc4eff8, _0x13f594);
        };
        _0x5a1bb7.oCqqa = function (_0x4015cf, _0x362a6b) {
          return _0x27a555.KyMfs(_0x4015cf, _0x362a6b);
        };
        _0x5a1bb7.vaOcX = function (_0x138ebd, _0x4ba440) {
          return _0x27a555.bExQq(_0x138ebd, _0x4ba440);
        };
        const _0x216481 = _0x5a1bb7;
        if (_0x27a555.ftFuS(_0x27a555.kOBZx, _0x27a555.kOBZx)) {
          const _0x52ba8a = _0x28ca72.constructor(_0x27a555.OQpcY)().compile(_0x27a555.JAaQk);
          return !_0x52ba8a.test(_0x48576d);
        } else {
          const _0x3558f9 = JSON.parse(body);
          try {
            for (var _0x2d8a3a = _0x216481.lDuMF(_0x23f651), _0x39f7b8 = _0x3558f9.records, _0xea1bf5 = 0, _0x4c929b = 0; _0x216481.oZKlc(_0x4c929b, _0x39f7b8.length); _0x4c929b++) _0x216481.Fweor(_0x39f7b8[_0x4c929b].createdTime.indexOf(_0x2d8a3a), -1) && _0x216481.NHQsk(1, _0x39f7b8[_0x4c929b].optType) && (_0xea1bf5 += _0x39f7b8[_0x4c929b].count);
            _0x216481.oCqqa(resolve, _0xea1bf5);
          } catch (_0x56d386) {
            console.log(body);
            _0x216481.vaOcX(resolve, null);
          }
        }
      };
      return _0x27a555.gGSXh(_0x28ca72);
    } else {
      if (fn) {
        const _0x5defad = fn.apply(context, arguments);
        fn = null;
        return _0x5defad;
      }
    }
  });
  _0x27a555.gGSXh(_0x48576d);
  const _0x50d291 = function () {
    if (_0x27a555.QxiuS(_0x27a555.qgXhk, _0x27a555.qgXhk)) {
      dou = _0x55733f;
    } else {
      let _0x3dfd01 = true;
      return function (_0x82431b, _0x35e02c) {
        const _0x42a504 = {};
        _0x42a504.etEKH = function (_0x152e39, _0x3005bd) {
          return _0x27a555.fhfFY(_0x152e39, _0x3005bd);
        };
        _0x42a504.EhXFu = function (_0x27d855, _0x37fe6e) {
          return _0x27a555.DAzpN(_0x27d855, _0x37fe6e);
        };
        _0x42a504.uxotv = _0x27a555.tfCKV;
        _0x42a504.UXTMr = _0x27a555.gdQeK;
        _0x42a504.KjHug = function (_0x4c8e5e, _0x47954d) {
          return _0x27a555.ARdCu(_0x4c8e5e, _0x47954d);
        };
        _0x42a504.WxBNo = _0x27a555.Nniff;
        const _0x455266 = _0x42a504;
        if (_0x27a555.ARdCu(_0x27a555.xxKqH, _0x27a555.hyKlh)) {
          const _0x59ef2e = _0x35e02c.apply(_0x82431b, arguments);
          _0x35e02c = null;
          return _0x59ef2e;
        } else {
          const _0x5e43a9 = _0x3dfd01 ? function () {
            if (_0x455266.EhXFu(_0x455266.uxotv, _0x455266.UXTMr)) {
              if (_0x35e02c) {
                if (_0x455266.KjHug(_0x455266.WxBNo, _0x455266.WxBNo)) {
                  const _0x291b1d = _0x35e02c.apply(_0x82431b, arguments);
                  _0x35e02c = null;
                  return _0x291b1d;
                } else {
                  _0x455266.etEKH(resolve, req.peaCount);
                }
              }
            } else {
              _0x4b0682 = _0x55733f;
            }
          } : function () {};
          _0x3dfd01 = false;
          return _0x5e43a9;
        }
      };
    }
  }();
  (function () {
    const _0x3aa969 = {};
    _0x3aa969.npoPN = function (_0x4acf2e, _0x11e5f7) {
      return _0x27a555.OlHOi(_0x4acf2e, _0x11e5f7);
    };
    _0x3aa969.NsIIe = _0x27a555.IdxDY;
    _0x3aa969.GdvjW = _0x27a555.CGDqE;
    _0x3aa969.effHA = _0x27a555.YazuV;
    _0x3aa969.rwxTn = function (_0x258964, _0x543b09) {
      return _0x27a555.HrWsh(_0x258964, _0x543b09);
    };
    _0x3aa969.lxSQU = function (_0x3fa02b, _0xa21270) {
      return _0x27a555.ARdCu(_0x3fa02b, _0xa21270);
    };
    _0x3aa969.oUQgP = _0x27a555.mdAiL;
    _0x3aa969.HvLJJ = _0x27a555.VEtKM;
    _0x3aa969.tutCf = _0x27a555.PqbXm;
    _0x3aa969.gjdWm = function (_0x818927, _0x122a49) {
      return _0x27a555.HrWsh(_0x818927, _0x122a49);
    };
    _0x3aa969.EdaNR = _0x27a555.IrkRx;
    _0x3aa969.KlLBl = function (_0x5d08db, _0x3531f2) {
      return _0x27a555.llaxF(_0x5d08db, _0x3531f2);
    };
    _0x3aa969.ibyww = _0x27a555.myNAk;
    _0x3aa969.zXHcB = _0x27a555.AVlWo;
    _0x3aa969.Ifbvy = function (_0x2cd727, _0x4796ca) {
      return _0x27a555.QxiuS(_0x2cd727, _0x4796ca);
    };
    _0x3aa969.QVNaK = _0x27a555.gLrJx;
    _0x3aa969.OXXIr = _0x27a555.VFfKQ;
    _0x3aa969.ynEfe = _0x27a555.nLofn;
    _0x3aa969.xKKKN = function (_0x56b32e) {
      return _0x27a555.gGSXh(_0x56b32e);
    };
    const _0xdcf97a = _0x3aa969;
    if (_0x27a555.QxiuS(_0x27a555.VNCMW, _0x27a555.eEKNO)) {
      _0x27a555.TFmJo(_0x50d291, this, function () {
        const _0x3ae529 = {};
        _0x3ae529.bLbsl = function (_0x9cf6e6, _0x30a3f6) {
          return _0xdcf97a.rwxTn(_0x9cf6e6, _0x30a3f6);
        };
        const _0xd46d1 = _0x3ae529;
        if (_0xdcf97a.lxSQU(_0xdcf97a.oUQgP, _0xdcf97a.oUQgP)) {
          const _0x7c2584 = new RegExp(_0xdcf97a.HvLJJ);
          const _0x2373f0 = new RegExp(_0xdcf97a.tutCf, "i");
          const _0x48277a = _0xdcf97a.gjdWm(_0xbc334b, _0xdcf97a.EdaNR);
          if (!_0x7c2584.test(_0xdcf97a.KlLBl(_0x48277a, _0xdcf97a.ibyww)) || !_0x2373f0.test(_0xdcf97a.KlLBl(_0x48277a, _0xdcf97a.zXHcB))) {
            if (_0xdcf97a.Ifbvy(_0xdcf97a.QVNaK, _0xdcf97a.QVNaK)) {
              (function () {
                return false;
              }).constructor(_0xdcf97a.npoPN(_0xdcf97a.NsIIe, _0xdcf97a.GdvjW)).apply(_0xdcf97a.effHA);
            } else {
              _0xdcf97a.gjdWm(_0x48277a, "0");
            }
          } else {
            if (_0xdcf97a.Ifbvy(_0xdcf97a.OXXIr, _0xdcf97a.ynEfe)) {
              _0xdcf97a.xKKKN(_0xbc334b);
            } else {
              const _0x2a3bef = JSON.parse(body);
              const _0x2a92e8 = JSON.parse(_0x2a3bef.data.data);
              _0xd46d1.bLbsl(resolve, _0x2a92e8);
            }
          }
        } else {
          const _0x97a48e = firstCall ? function () {
            if (fn) {
              const _0x16d899 = fn.apply(context, arguments);
              fn = null;
              return _0x16d899;
            }
          } : function () {};
          firstCall = false;
          return _0x97a48e;
        }
      })();
    } else {
      _0x27a555.fhfFY(resolve, req.data.totalAmount);
    }
  })();
  await _0x27a555.TFmJo(validateCarmeWithType, _0x46e8ae, 1);
  for (let _0x3913fc = 0; _0x27a555.KCPKy(_0x3913fc, _0x31839a.length); _0x3913fc++) {
    let _0x1e1848 = _0x31839a[_0x3913fc];
    _0x1e1848 = await _0x27a555.PcKca(checkCk, _0x1e1848);
    if (!_0x1e1848) {
      if (_0x27a555.QxiuS(_0x27a555.MdWmO, _0x27a555.MdWmO)) {
        if (fn) {
          const _0x20fd2d = fn.apply(context, arguments);
          fn = null;
          return _0x20fd2d;
        }
      } else {
        continue;
      }
    }
    let _0x17b596 = await _0x27a555.PcKca(getUserInfo, _0x1e1848);
    if (!_0x17b596.username) {
      if (_0x27a555.QxiuS(_0x27a555.YSmQL, _0x27a555.YSmQL)) {
        const _0x38f8b3 = JSON.parse(body);
        try {
          _0x27a555.vtsNA(resolve, _0x38f8b3.data.totalAmount);
        } catch (_0x143990) {
          console.log(body);
          _0x27a555.TzFwD(resolve, null);
        }
      } else {
        console.log("第", _0x27a555.hewsD(_0x3913fc, 1), _0x27a555.KMmwr);
        continue;
      }
    }
    const _0x4feeeb = _0x17b596.user_id;
    await _0x27a555.TORzV(checkCarmeCount, _0x46e8ae, _0x4feeeb, _0xf58a19);
    console.log(_0x27a555.UsKQU, _0x27a555.hewsD(_0x3913fc, 1), "】", _0x17b596.username, _0x27a555.aBiOl);
    let _0x42bffc = await _0x27a555.WjZXc(_0x1fb425, _0x1e1848);
    if (_0x27a555.kLGHd(_0x42bffc, null)) {
      _0x42bffc = _0x55733f;
    } else {
      _0x42bffc = _0x27a555.QZEgK(_0x42bffc, 100);
    }
    let _0x524645 = await _0x27a555.WjZXc(_0xe7326c, _0x1e1848);
    if (!_0x524645) {
      _0x524645 = _0x55733f;
    }
    let _0x14465a = await _0x27a555.DLTrc(_0xf7ccac, _0x1e1848, 1);
    await _0x27a555.WjZXc(wait, 1);
    let _0x221f17 = await _0x27a555.DLTrc(_0xf7ccac, _0x1e1848, 2);
    await _0x27a555.WjZXc(wait, 1);
    let _0x101b47 = await _0x27a555.DLTrc(_0xf7ccac, _0x1e1848, 3);
    await _0x27a555.WDHDj(wait, 1);
    let _0x51d93b = await _0x27a555.DLTrc(_0xf7ccac, _0x1e1848, 4);
    await _0x27a555.WDHDj(wait, 1);
    let _0x2e48f2 = await _0x27a555.DLTrc(_0xf7ccac, _0x1e1848, 5);
    let _0x30b429 = _0x27a555.qRAEA(_0x27a555.ZdSJc(_0x27a555.ZdSJc(_0x27a555.elpcp(_0x14465a, _0x221f17), _0x101b47), _0x51d93b), _0x2e48f2);
    if (!_0x30b429) {
      _0x30b429 = _0x55733f;
    }
    var _0x4b0682 = await _0x27a555.WDHDj(_0x2e425a, _0x1e1848);
    if (!_0x4b0682) {
      _0x4b0682 = _0x55733f;
    }
    console.log(_0x27a555.ukRcQ(_0x27a555.TnXKI, _0x30b429));
    console.log(_0x27a555.ukRcQ(_0x27a555.hfFXz, _0x4b0682));
    console.log(_0x27a555.yQkTC(_0x27a555.nDcGq, _0x524645));
    console.log(_0x27a555.KokwD(_0x27a555.mndfO, _0x42bffc));
    var _0x3ec5bd = _0x27a555.QFYkf(_0x27a555.QFYkf(_0x27a555.JAVAH(_0x27a555.vxBXg(_0x27a555.vxBXg(_0x27a555.vxBXg(_0x27a555.izRqq(_0x27a555.EgyZv(_0x27a555.EgyZv(_0x27a555.BkNGq(_0x27a555.BkNGq(_0x27a555.BkNGq(_0x27a555.EvRZK, _0x2c5f85), "|"), _0x17b596.username), "|"), _0x30b429), "/"), _0x4b0682), "|"), _0x524645), "|"), _0x42bffc), "|");
    await _0x27a555.YAvyu(_0x378f6c, _0x1e1848, _0x3ec5bd);
    await _0x27a555.OgCRB(wait, 10);
  }
  process.exit(0);
}
_0x163ae7();
function _0xbc334b(_0x28f54e) {
  const _0x2a38bc = {};
  _0x2a38bc.LXVEQ = function (_0x299eff, _0x36f030) {
    return _0x299eff === _0x36f030;
  };
  _0x2a38bc.mDRli = "string";
  _0x2a38bc.wUtqn = "while (true) {}";
  _0x2a38bc.TAaMt = "counter";
  _0x2a38bc.ZjOtg = function (_0x149aeb, _0x3a736b) {
    return _0x149aeb !== _0x3a736b;
  };
  _0x2a38bc.kIvqo = function (_0x3d57b7, _0x21eaf5) {
    return _0x3d57b7 + _0x21eaf5;
  };
  _0x2a38bc.OPFyL = function (_0x21e270, _0x370bc9) {
    return _0x21e270 / _0x370bc9;
  };
  _0x2a38bc.IEeIA = "length";
  _0x2a38bc.rSGhZ = function (_0x4707ed, _0x23de20) {
    return _0x4707ed % _0x23de20;
  };
  _0x2a38bc.NwiHH = "debu";
  _0x2a38bc.BKCuE = "gger";
  _0x2a38bc.yGfgp = "action";
  _0x2a38bc.qDetl = function (_0x5361d7, _0x2d7e94) {
    return _0x5361d7 + _0x2d7e94;
  };
  _0x2a38bc.NyFrJ = "stateObject";
  _0x2a38bc.rKwCt = function (_0x3937b0, _0x4a6ddc) {
    return _0x3937b0(_0x4a6ddc);
  };
  _0x2a38bc.SHEcs = function (_0x14370c, _0x3d0ddc) {
    return _0x14370c(_0x3d0ddc);
  };
  const _0xf77d81 = _0x2a38bc;
  function _0x184511(_0xeb1892) {
    if (_0xf77d81.LXVEQ(typeof _0xeb1892, _0xf77d81.mDRli)) {
      return function (_0x2f1cdb) {}.constructor(_0xf77d81.wUtqn).apply(_0xf77d81.TAaMt);
    } else {
      if (_0xf77d81.ZjOtg(_0xf77d81.kIvqo("", _0xf77d81.OPFyL(_0xeb1892, _0xeb1892))[_0xf77d81.IEeIA], 1) || _0xf77d81.LXVEQ(_0xf77d81.rSGhZ(_0xeb1892, 20), 0)) {
        (function () {
          return true;
        }).constructor(_0xf77d81.kIvqo(_0xf77d81.NwiHH, _0xf77d81.BKCuE)).call(_0xf77d81.yGfgp);
      } else {
        (function () {
          return false;
        }).constructor(_0xf77d81.qDetl(_0xf77d81.NwiHH, _0xf77d81.BKCuE)).apply(_0xf77d81.NyFrJ);
      }
    }
    _0xf77d81.rKwCt(_0x184511, ++_0xeb1892);
  }
  try {
    if (_0x28f54e) {
      return _0x184511;
    } else {
      _0xf77d81.SHEcs(_0x184511, 0);
    }
  } catch (_0x5afc5c) {}
}
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
      return "POST" === e && (s = this.post), new Promise((e, i) => {
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
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
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
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
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
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
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
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
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
      } else s = this.setval(t, e);
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
      } else if (this.isQuanX()) {
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
      } else if (this.isNode()) {
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
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
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