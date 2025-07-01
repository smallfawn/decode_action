//Tue Jul 01 2025 01:54:42 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0xd0ebf9 = _0x66b7;
const _0x223378 = _0x5b7a;
(function (_0x4104ca, _0x2c703a) {
  const _0x1f0190 = _0x5b7a;
  const _0x2f9bf3 = _0x66b7;
  const _0x5f4d81 = _0x4104ca();
  while (true) {
    {
      try {
        {
          const _0xa77f54 = -parseInt(_0x2f9bf3(483)) / 1 + -parseInt(_0x1f0190(522, "jmoA")) / 2 + parseInt(_0x2f9bf3(445)) / 3 + -parseInt(_0x2f9bf3(502)) / 4 * (parseInt(_0x1f0190(475, "U#kW")) / 5) + -parseInt(_0x1f0190(555, "ItUL")) / 6 * (parseInt(_0x2f9bf3(567)) / 7) + -parseInt(_0x1f0190(414, "tjEy")) / 8 * (-parseInt(_0x1f0190(498, "yn7#")) / 9) + parseInt(_0x2f9bf3(565)) / 10 * (parseInt(_0x1f0190(548, "vv9^")) / 11);
          if (_0xa77f54 === _0x2c703a) {
            break;
          } else {
            _0x5f4d81.push(_0x5f4d81.shift());
          }
        }
      } catch (_0x190217) {
        {
          _0x5f4d81.push(_0x5f4d81.shift());
        }
      }
    }
  }
})(_0x546c, 646621);
function _0x5b7a(_0x5daa1d, _0x325f24) {
  const _0x35c8dd = _0x546c();
  _0x5b7a = function (_0x17fee1, _0x3b0146) {
    {
      _0x17fee1 = _0x17fee1 - 316;
      let _0x1a88e2 = _0x35c8dd[_0x17fee1];
      if (_0x5b7a.ZxxUqL === undefined) {
        {
          var _0x11fb46 = function (_0x58564f) {
            {
              const _0x49f088 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
              let _0x3933f2 = "";
              let _0xedfd5b = "";
              for (let _0x23ccd0 = 0, _0x38209e, _0x4b5892, _0x41f9db = 0; _0x4b5892 = _0x58564f.charAt(_0x41f9db++); ~_0x4b5892 && (_0x38209e = _0x23ccd0 % 4 ? _0x38209e * 64 + _0x4b5892 : _0x4b5892, _0x23ccd0++ % 4) ? _0x3933f2 += String.fromCharCode(255 & _0x38209e >> (-2 * _0x23ccd0 & 6)) : 0) {
                _0x4b5892 = _0x49f088.indexOf(_0x4b5892);
              }
              for (let _0x2f7164 = 0, _0x40a2f9 = _0x3933f2.length; _0x2f7164 < _0x40a2f9; _0x2f7164++) {
                {
                  _0xedfd5b += "%" + ("00" + _0x3933f2.charCodeAt(_0x2f7164).toString(16)).slice(-2);
                }
              }
              return decodeURIComponent(_0xedfd5b);
            }
          };
          const _0x33a1e5 = function (_0x26f30e, _0x1d143b) {
            {
              let _0x1d75d9 = [];
              let _0x2149f8 = 0;
              let _0x9cdf9b;
              let _0x5918a4 = "";
              _0x26f30e = _0x11fb46(_0x26f30e);
              let _0x12beeb;
              for (_0x12beeb = 0; _0x12beeb < 256; _0x12beeb++) {
                _0x1d75d9[_0x12beeb] = _0x12beeb;
              }
              for (_0x12beeb = 0; _0x12beeb < 256; _0x12beeb++) {
                {
                  _0x2149f8 = (_0x2149f8 + _0x1d75d9[_0x12beeb] + _0x1d143b.charCodeAt(_0x12beeb % _0x1d143b.length)) % 256;
                  _0x9cdf9b = _0x1d75d9[_0x12beeb];
                  _0x1d75d9[_0x12beeb] = _0x1d75d9[_0x2149f8];
                  _0x1d75d9[_0x2149f8] = _0x9cdf9b;
                }
              }
              _0x12beeb = 0;
              _0x2149f8 = 0;
              for (let _0x2e7c3d = 0; _0x2e7c3d < _0x26f30e.length; _0x2e7c3d++) {
                {
                  _0x12beeb = (_0x12beeb + 1) % 256;
                  _0x2149f8 = (_0x2149f8 + _0x1d75d9[_0x12beeb]) % 256;
                  _0x9cdf9b = _0x1d75d9[_0x12beeb];
                  _0x1d75d9[_0x12beeb] = _0x1d75d9[_0x2149f8];
                  _0x1d75d9[_0x2149f8] = _0x9cdf9b;
                  _0x5918a4 += String.fromCharCode(_0x26f30e.charCodeAt(_0x2e7c3d) ^ _0x1d75d9[(_0x1d75d9[_0x12beeb] + _0x1d75d9[_0x2149f8]) % 256]);
                }
              }
              return _0x5918a4;
            }
          };
          _0x5b7a.CtBOGT = _0x33a1e5;
          _0x5daa1d = arguments;
          _0x5b7a.ZxxUqL = true;
        }
      }
      const _0x2fcc5a = _0x35c8dd[0];
      const _0x130c84 = _0x17fee1 + _0x2fcc5a;
      const _0x46b447 = _0x5daa1d[_0x130c84];
      !_0x46b447 ? (_0x5b7a.ZgATMN === undefined && (_0x5b7a.ZgATMN = true), _0x1a88e2 = _0x5b7a.CtBOGT(_0x1a88e2, _0x3b0146), _0x5daa1d[_0x130c84] = _0x1a88e2) : _0x1a88e2 = _0x46b447;
      return _0x1a88e2;
    }
  };
  return _0x5b7a(_0x5daa1d, _0x325f24);
}
function _0x546c() {
  const _0x3390b5 = ["WQynW49oWOu", "et96smoD", "data:image/png;base64,", "canvas", "tcxdGmk6WOW", "dX7dHJa", "WRBcLx4nW63cPqnBj2e4", "W7NdICke", "WQbUhmovfa", "WPxdRCoHWRfMDq", "qerzlSoI", "WAkih", "5BY36lw05B2Q5BUSd8kD", "BGpQN", "WPxdPaVcSuBdJMyGWRxcU8kDfW", "cmoDoG", "WOBdK8o6WR57", "WOrmpSoLl8o0", "WQZcSv0qW4K", "WRhdImoEW7T1amkOW5/dUCorW57dLq", "m8okmmkIAG", "W7ZcPvVdR8k9", "shrltCoS", "W4ZcKM3dKSkHcxtcJCoN", "W547pSo1oG", "WQhdICkLEtq", "akgcY", "fSomzq", "error", "ars_card", "OyEwK", "Vdmrc", "W7ldUSo9AW", "Spfkv", "fillRect", "FCkOktmT", "W6/dKmoRAmkc", "lmkiqWFcRCo2FW", "q8kLcZm6", "iIQAd", "getItem", "vSWgA", "jfzoE", "WPFdVgVdU8oU", "WQhdII5mW6u", "Jmjkg", "length", "W59KWP0", "W7ZdRmoXASkitq", "WPBdKu3cH3NdHSkUW5i", "amoCl8k/EW", "432296XSTsAr", "yfZaF", "AfH5", "WRFcLqBdQZxcPCkPD3/cKSkDWQJcOf4", "wjGZs", "card", "WPNdMSkhwqy", "p8oJpmkQsa", "owYql", "zdNXa", "ARS_URL", "WRpdKrddLLeGhflcNmozWONcUq", "W67dTSkqWRZcUW", "hwJdLYGSW6e", "WQJdRSkaBb0", "WOxdOfdcNei", "FxjisCoFvmkHW7u", "encodeBase64", "/api/heartbeat", "WRZdO8kBva", "W4TddComoG", "5BYd5BQqWRZdKq", "oduNT", "W6pcVsC", "nSkkw8oSfW", "xCFoc", "WRVdGMVdVCoj", "uSohW6NcMqG", "g8k4W50iW7/cPZZdTwVcIG", "vLBUB", "WR7dQmkqWQjl", "yfLSwSkP", "CPFRQ", "WQSRW4HFWQxdGqS", "DXldKXLU", "SqMbT", "POST", "PhtbG", "W57dPColBCk4", "o8onWRKwW74sW7ddGmkacSkTWP8kW4hdK3NdThPX", "WOpdPmkJWPW", "zNHEimosgG", "524904KDJQBl", "KTaRE", "append", "hmkxWRLNW6NcLCo0WR7dTbzL", "W69Jm8oBnW", "getContext", "CcldPCkzWPW", "WQVcUYnwWOHWW7BcLa", "reLGdmoen8kl", "ktrMW4fW", "576L57MB6l625O2X5lI456Qo5A6J772y5BYz6lsJ5B+65BMb", "6AI+6k+b5AAz6ls9", "ySojW6JcGJbhvG", "WO/cLu4nW6pcRu0CAXWqeW", "验证成功", "验证失败: ", "W69xWOn9uuiiWOy", "6kAG57Mu5AEi6lwJW44A", "W6ZdLdTYWOi", "rmo7WO8", "WR7dMCoEW59Vv8oIWOpdRmocW4dcIZ3cO8kAW45tW6dcOCkj", "iTSuc", "pmkmwt3cHSo6DG", "getTimestamp", "tmocWQhdPG", "W7ZcRxq", "eKGvBCoI", "NASqq", "code", "W7GEhCo0mW", "W5hcV8oYW4eyowT0eKjK", "ars_uid", "bCkerX/cLq", "dXLixCosD8ozW7RdMCkfW585", "网络连接不稳定，请重试", "FHqkF", "/api/unCard", "WQ7dRSoSW4b/", "960657RntBBy", "jmoGWO0oWPfc", "aNUki", "Eavsi", "572s57Q+6lYI5O6L5lUf56QS5A6677606kYB6yw+6kY3", "W7hdNmkNWOBcJq", "C8ojWR03WRqb", "truWh", "getUID", "v8oFWR3dHwm", "W61FWPTW", "DWGNP", "W5hdNCkXWRJcOa", "fillStyle", "W5ZcIxVdNG", "DbSpzCoCB8ozW4e", "setItem", "encode", "chFdLW", "44KWqWSY", "FEvZx", "W7NdJmoAW4yZg8kOW57dPmowW4RdPM7dQCkF", "getCloudValue", "WQ4UW5XoWQa", "GaRbo", "WQVdSCkqWQDTWQ7cH8kL", "dGKIrCoWfmooW5VcNXzbcCkZW4ldUSogW7JdPfxcM8oBsW", "bZycQ", "APP_KEY", "ag40", "https://ars.28a1.com", "HJYgm", "grWYs8kQ", "FRyQc", "6AUg6k+j6lwH5Ps9772M6k+y6ysc5Psz6AMU6k68", "kshdPand", "W4FdIx/cLxu", "WQBdJMpdNSol", "W6tcT8ozD8kLWPpdSCoHprtcRWe", "kIGtfmk9b8oRW5bwo8odh3e", "t8oFWQ3dPeeTFXG", "W67cOCok", "WPhdH2BdUq", "msg", "jSkEWRO4WQuOW7tdLa", "5AYa57+y776i", "pCoTE8oJra", "W7tcH1BcRrXZkq", "GRieK", "WQ9VaCou", "json", "W6W1nmoKbq", "ploYz", "W7ddM8kxWPtdRu0itJ5GFvVcUcVdQcbpzqyUACk8", "deqbvCod", "log", "WQRdVCkiWOHqWQxcKmk0imkk", "EmojWQCyWQur", "JZcTo", "1371662QztUQL", "gbJdJZbjW4NcLtau", "apPbr", "W7ddKCorzSkK", "W4fLW5XrW7/dIqa", "slice", "WOaYW5TFW7/dVr9i", "access_token", "data", "oIzJW5Lr", "WRtdTehdH8oQW5xdKq", "W43cHsS", "W71BWOfYyeKe", "W7/cQmojW7L9WQNcQmk+aCkh", "parse", "heartbeat", "WOdcQInYWPS", "gCkbWQy", "W6/dGY9sWOi", "font", "WP/cNhebW4C", "5B2+5BIGWP1T", "rgba(102, 204, 0, 0.7)", "10126970ooThxH", "lf/dRYGe", "1869aWyPAU", "cSgXx", "o8kmvqdcSmo+AcVdOmodBmkX", "textBaseline", "zCQzk", "W7C4W6r1W5K", "验证超时，请重新验证", "10|6|14|8|11|16|4|0|12|3|7|15|5|1|2|9|13", "kmomWQSEWOi", "WPJcSZ9PWRi", "md5", "36XyTtbl", "ShqFt", "YCwzS", "APP_ID", "ngPas", "WQlcPrzlWRa", "qcqyA", "zXXeB", "app_id", "qLcXp", "D8kTkHSCFW", "hX9VFCog", "pmkasHO", "HQiFN", "W4tcOwBcSbO", "cGXBv8oyDG", "6AUl6k+S5AwM6ls5WRi7", "r8odWR3dL0eGFG", "W7ykeG", "dWpdHZroW5JcStebWQeiwCoP", "uSkxnXmK", "WRVcPXvzWQq", "sH7dObv4", "KiVIK", "WR/dI3JdS8oy", "W7FdM8knWOBcIe0b", "toDataURL", "ga80rq", "DOtxU", "timestamp", "#069", "W7tcRgexWPq", "zMAnF", "W7BdHexcQMy", "puddJYeJ", "CCDTr", "SYVVh", "W4FcIw3dVSkHdw/cKSoUutakW4yZWQGiW7a", "网络连接不稳定，获取失败", "W6VcJuu"];
  _0x546c = function () {
    {
      return _0x3390b5;
    }
  };
  return _0x546c();
}
function _0x66b7(_0x3d6c8d, _0xd36d97) {
  const _0x896de6 = _0x546c();
  _0x66b7 = function (_0x18b41e, _0xeeb673) {
    {
      _0x18b41e = _0x18b41e - 316;
      let _0xa417e7 = _0x896de6[_0x18b41e];
      return _0xa417e7;
    }
  };
  return _0x66b7(_0x3d6c8d, _0xd36d97);
}
class Ars {
  constructor() {
    this.ARS_URL = "https://ars.28a1.com";
    this.APP_ID = "IsFgPsnv3YFw";
    this.APP_KEY = "ZV7JvRna1hMC0kJR";
  }
  md5(_0x28791a) {
    function _0x55ef0(_0x3138b6, _0x3ab47e) {
      {
        var _0x18e101 = (65535 & _0x3138b6) + (65535 & _0x3ab47e);
        return (_0x3138b6 >> 16) + (_0x3ab47e >> 16) + (_0x18e101 >> 16) << 16 | 65535 & _0x18e101;
      }
    }
    function _0x415662(_0x433868, _0x503e27, _0x58d54a, _0x349bc8, _0x1179ee, _0x1758ef) {
      return _0x55ef0((_0x1758ef = _0x55ef0(_0x55ef0(_0x503e27, _0x433868), _0x55ef0(_0x349bc8, _0x1758ef))) << _0x1179ee | _0x1758ef >>> 32 - _0x1179ee, _0x58d54a);
    }
    function _0x58a65d(_0x937a1d, _0xb2280a, _0x4b527d, _0x366443, _0x5d9fa5, _0x4a9d05, _0x43d233) {
      {
        return _0x415662(_0xb2280a & _0x4b527d | ~_0xb2280a & _0x366443, _0x937a1d, _0xb2280a, _0x5d9fa5, _0x4a9d05, _0x43d233);
      }
    }
    function _0x55dff0(_0x331c69, _0x9c8b5a, _0x1e47d3, _0x112432, _0x1d4c8f, _0x23dc87, _0x113736) {
      {
        return _0x415662(_0x9c8b5a & _0x112432 | _0x1e47d3 & ~_0x112432, _0x331c69, _0x9c8b5a, _0x1d4c8f, _0x23dc87, _0x113736);
      }
    }
    function _0x4f5710(_0x2fd40e, _0x2b3d1b, _0xe5865, _0x5ca30e, _0x375790, _0x217cf6, _0x291a59) {
      {
        return _0x415662(_0x2b3d1b ^ _0xe5865 ^ _0x5ca30e, _0x2fd40e, _0x2b3d1b, _0x375790, _0x217cf6, _0x291a59);
      }
    }
    function _0x477e31(_0x15a3a5, _0x3f9b33, _0x10b0b5, _0x5722f, _0x4559ba, _0x178f2d, _0x17e92a) {
      {
        return _0x415662(_0x10b0b5 ^ (_0x3f9b33 | ~_0x5722f), _0x15a3a5, _0x3f9b33, _0x4559ba, _0x178f2d, _0x17e92a);
      }
    }
    function _0x3b283f(_0x3b412a, _0x2f5119) {
      {
        var _0x5fd852;
        var _0x599a50;
        var _0x55bbdf;
        var _0x243477;
        _0x3b412a[_0x2f5119 >> 5] |= 128 << _0x2f5119 % 32;
        _0x3b412a[14 + (_0x2f5119 + 64 >>> 9 << 4)] = _0x2f5119;
        for (var _0x3a1767 = 1732584193, _0x4adaf8 = -271733879, _0x599110 = -1732584194, _0x20b2e4 = 271733878, _0x3f44fd = 0; _0x3f44fd < _0x3b412a.length; _0x3f44fd += 16) {
          _0x3a1767 = _0x58a65d(_0x5fd852 = _0x3a1767, _0x599a50 = _0x4adaf8, _0x55bbdf = _0x599110, _0x243477 = _0x20b2e4, _0x3b412a[_0x3f44fd], 7, -680876936);
          _0x20b2e4 = _0x58a65d(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 1], 12, -389564586);
          _0x599110 = _0x58a65d(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 2], 17, 606105819);
          _0x4adaf8 = _0x58a65d(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 3], 22, -1044525330);
          _0x3a1767 = _0x58a65d(_0x3a1767, _0x4adaf8, _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 4], 7, -176418897);
          _0x20b2e4 = _0x58a65d(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 5], 12, 1200080426);
          _0x599110 = _0x58a65d(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 6], 17, -1473231341);
          _0x4adaf8 = _0x58a65d(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 7], 22, -45705983);
          _0x3a1767 = _0x58a65d(_0x3a1767, _0x4adaf8, _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 8], 7, 1770035416);
          _0x20b2e4 = _0x58a65d(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 9], 12, -1958414417);
          _0x599110 = _0x58a65d(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 10], 17, -42063);
          _0x4adaf8 = _0x58a65d(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 11], 22, -1990404162);
          _0x3a1767 = _0x58a65d(_0x3a1767, _0x4adaf8, _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 12], 7, 1804603682);
          _0x20b2e4 = _0x58a65d(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 13], 12, -40341101);
          _0x599110 = _0x58a65d(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 14], 17, -1502002290);
          _0x3a1767 = _0x55dff0(_0x3a1767, _0x4adaf8 = _0x58a65d(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 15], 22, 1236535329), _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 1], 5, -165796510);
          _0x20b2e4 = _0x55dff0(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 6], 9, -1069501632);
          _0x599110 = _0x55dff0(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 11], 14, 643717713);
          _0x4adaf8 = _0x55dff0(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd], 20, -373897302);
          _0x3a1767 = _0x55dff0(_0x3a1767, _0x4adaf8, _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 5], 5, -701558691);
          _0x20b2e4 = _0x55dff0(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 10], 9, 38016083);
          _0x599110 = _0x55dff0(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 15], 14, -660478335);
          _0x4adaf8 = _0x55dff0(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 4], 20, -405537848);
          _0x3a1767 = _0x55dff0(_0x3a1767, _0x4adaf8, _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 9], 5, 568446438);
          _0x20b2e4 = _0x55dff0(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 14], 9, -1019803690);
          _0x599110 = _0x55dff0(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 3], 14, -187363961);
          _0x4adaf8 = _0x55dff0(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 8], 20, 1163531501);
          _0x3a1767 = _0x55dff0(_0x3a1767, _0x4adaf8, _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 13], 5, -1444681467);
          _0x20b2e4 = _0x55dff0(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 2], 9, -51403784);
          _0x599110 = _0x55dff0(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 7], 14, 1735328473);
          _0x3a1767 = _0x4f5710(_0x3a1767, _0x4adaf8 = _0x55dff0(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 12], 20, -1926607734), _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 5], 4, -378558);
          _0x20b2e4 = _0x4f5710(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 8], 11, -2022574463);
          _0x599110 = _0x4f5710(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 11], 16, 1839030562);
          _0x4adaf8 = _0x4f5710(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 14], 23, -35309556);
          _0x3a1767 = _0x4f5710(_0x3a1767, _0x4adaf8, _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 1], 4, -1530992060);
          _0x20b2e4 = _0x4f5710(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 4], 11, 1272893353);
          _0x599110 = _0x4f5710(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 7], 16, -155497632);
          _0x4adaf8 = _0x4f5710(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 10], 23, -1094730640);
          _0x3a1767 = _0x4f5710(_0x3a1767, _0x4adaf8, _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 13], 4, 681279174);
          _0x20b2e4 = _0x4f5710(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd], 11, -358537222);
          _0x599110 = _0x4f5710(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 3], 16, -722521979);
          _0x4adaf8 = _0x4f5710(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 6], 23, 76029189);
          _0x3a1767 = _0x4f5710(_0x3a1767, _0x4adaf8, _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 9], 4, -640364487);
          _0x20b2e4 = _0x4f5710(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 12], 11, -421815835);
          _0x599110 = _0x4f5710(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 15], 16, 530742520);
          _0x3a1767 = _0x477e31(_0x3a1767, _0x4adaf8 = _0x4f5710(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 2], 23, -995338651), _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd], 6, -198630844);
          _0x20b2e4 = _0x477e31(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 7], 10, 1126891415);
          _0x599110 = _0x477e31(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 14], 15, -1416354905);
          _0x4adaf8 = _0x477e31(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 5], 21, -57434055);
          _0x3a1767 = _0x477e31(_0x3a1767, _0x4adaf8, _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 12], 6, 1700485571);
          _0x20b2e4 = _0x477e31(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 3], 10, -1894986606);
          _0x599110 = _0x477e31(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 10], 15, -1051523);
          _0x4adaf8 = _0x477e31(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 1], 21, -2054922799);
          _0x3a1767 = _0x477e31(_0x3a1767, _0x4adaf8, _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 8], 6, 1873313359);
          _0x20b2e4 = _0x477e31(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 15], 10, -30611744);
          _0x599110 = _0x477e31(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 6], 15, -1560198380);
          _0x4adaf8 = _0x477e31(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 13], 21, 1309151649);
          _0x3a1767 = _0x477e31(_0x3a1767, _0x4adaf8, _0x599110, _0x20b2e4, _0x3b412a[_0x3f44fd + 4], 6, -145523070);
          _0x20b2e4 = _0x477e31(_0x20b2e4, _0x3a1767, _0x4adaf8, _0x599110, _0x3b412a[_0x3f44fd + 11], 10, -1120210379);
          _0x599110 = _0x477e31(_0x599110, _0x20b2e4, _0x3a1767, _0x4adaf8, _0x3b412a[_0x3f44fd + 2], 15, 718787259);
          _0x4adaf8 = _0x477e31(_0x4adaf8, _0x599110, _0x20b2e4, _0x3a1767, _0x3b412a[_0x3f44fd + 9], 21, -343485551);
          _0x3a1767 = _0x55ef0(_0x3a1767, _0x5fd852);
          _0x4adaf8 = _0x55ef0(_0x4adaf8, _0x599a50);
          _0x599110 = _0x55ef0(_0x599110, _0x55bbdf);
          _0x20b2e4 = _0x55ef0(_0x20b2e4, _0x243477);
        }
        return [_0x3a1767, _0x4adaf8, _0x599110, _0x20b2e4];
      }
    }
    function _0x4036fb(_0x243705) {
      {
        for (var _0x5a458a = "", _0x500bd5 = 32 * _0x243705.length, _0x1125f8 = 0; _0x1125f8 < _0x500bd5; _0x1125f8 += 8) {
          _0x5a458a += String.fromCharCode(_0x243705[_0x1125f8 >> 5] >>> _0x1125f8 % 32 & 255);
        }
        return _0x5a458a;
      }
    }
    function _0x4cb0c4(_0x22ede0) {
      {
        var _0x16a585 = [];
        for (_0x16a585[(_0x22ede0.length >> 2) - 1] = undefined, _0x381918 = 0; _0x381918 < _0x16a585.length; _0x381918 += 1) {
          _0x16a585[_0x381918] = 0;
        }
        for (var _0x25d718 = 8 * _0x22ede0.length, _0x381918 = 0; _0x381918 < _0x25d718; _0x381918 += 8) {
          _0x16a585[_0x381918 >> 5] |= (255 & _0x22ede0.charCodeAt(_0x381918 / 8)) << _0x381918 % 32;
        }
        return _0x16a585;
      }
    }
    function _0x23be4a(_0xfa2774) {
      {
        for (var _0x384d5e, _0x114872 = "0123456789abcdef", _0x5204fc = "", _0x6c32dd = 0; _0x6c32dd < _0xfa2774.length; _0x6c32dd += 1) {
          _0x384d5e = _0xfa2774.charCodeAt(_0x6c32dd);
          _0x5204fc += _0x114872.charAt(_0x384d5e >>> 4 & 15) + _0x114872.charAt(15 & _0x384d5e);
        }
        return _0x5204fc;
      }
    }
    function _0x18543e(_0x5f0bd4) {
      {
        return unescape(encodeURIComponent(_0x5f0bd4));
      }
    }
    function _0x2a34c8(_0x5aa386) {
      {
        return _0x4036fb(_0x3b283f(_0x4cb0c4(_0x5aa386 = _0x18543e(_0x5aa386)), 8 * _0x5aa386.length));
      }
    }
    function _0x257f11(_0x24c029, _0x4bb637) {
      {
        return function (_0x12a6e2, _0x3f3eb4) {
          {
            var _0x16483f;
            var _0x52f959 = _0x4cb0c4(_0x12a6e2);
            var _0x408c28 = [];
            var _0x1283e8 = [];
            for (_0x408c28[15] = _0x1283e8[15] = undefined, 16 < _0x52f959.length && (_0x52f959 = _0x3b283f(_0x52f959, 8 * _0x12a6e2.length)), _0x16483f = 0; _0x16483f < 16; _0x16483f += 1) {
              _0x408c28[_0x16483f] = 909522486 ^ _0x52f959[_0x16483f];
              _0x1283e8[_0x16483f] = 1549556828 ^ _0x52f959[_0x16483f];
            }
            _0x3f3eb4 = _0x3b283f(_0x408c28.concat(_0x4cb0c4(_0x3f3eb4)), 512 + 8 * _0x3f3eb4.length);
            return _0x4036fb(_0x3b283f(_0x1283e8.concat(_0x3f3eb4), 640));
          }
        }(_0x18543e(_0x24c029), _0x18543e(_0x4bb637));
      }
    }
    function _0x440634(_0x3edf96, _0x33dbd8, _0x137b8e) {
      {
        return _0x33dbd8 ? _0x137b8e ? _0x257f11(_0x33dbd8, _0x3edf96) : _0x23be4a(_0x257f11(_0x33dbd8, _0x3edf96)) : _0x137b8e ? _0x2a34c8(_0x3edf96) : _0x23be4a(_0x2a34c8(_0x3edf96));
      }
    }
    return _0x440634(_0x28791a);
  }
  closeLogin() {
    const _0x5c9bf6 = document.getElementById("ars-main");
    _0x5c9bf6.style.display = "none";
  }
  showLogin() {
    const _0x297821 = document.getElementById("ars-main");
    _0x297821.style.display = "block";
  }
  showTip(_0x4a8c47) {
    const _0x3ad076 = document.getElementById("tipContainer");
    const _0x1bfe28 = document.getElementById("tipText");
    _0x1bfe28.innerText = _0x4a8c47;
    _0x3ad076.style.display = "inline-block";
    requestAnimationFrame(() => {
      _0x3ad076.style.opacity = 1;
    });
    setTimeout(this.closeTip, 3000);
  }
  closeTip() {
    const _0x45590e = document.getElementById("tipContainer");
    _0x45590e.style.opacity = 0;
    setTimeout(() => {
      {
        _0x45590e.style.display = "none";
      }
    }, 500);
  }
  generateRandomString(_0xa02a28) {
    const _0x17d87c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let _0x5f0e89 = "";
    for (let _0x34bdd6 = 0; _0x34bdd6 < _0xa02a28; _0x34bdd6++) {
      _0x5f0e89 += _0x17d87c.charAt(Math.floor(Math.random() * _0x17d87c.length));
    }
    return _0x5f0e89;
  }
  getHex(_0x2f85ec) {
    _0x2f85ec = _0x2f85ec.toString();
    var _0xb15622 = "";
    for (var _0x4e5364 = 0; _0x4e5364 < _0x2f85ec.length; _0x4e5364++) {
      {
        _0xb15622 += ("0" + _0x2f85ec.charCodeAt(_0x4e5364).toString(16)).slice(-2).toUpperCase();
      }
    }
    return _0xb15622.toLowerCase();
  }
  hexToString(_0x34d268) {
    var _0x3ea2d4 = "";
    for (var _0x1c7997 = 0; _0x1c7997 < _0x34d268.length; _0x1c7997 += 2) {
      _0x3ea2d4 += String.fromCharCode(parseInt(_0x34d268.substr(_0x1c7997, 2), 16));
    }
    return _0x3ea2d4;
  }
  encodeBase64(_0x525b25) {
    return btoa(String.fromCharCode(..._0x525b25));
  }
  decodeBase64(_0x84ae0f) {
    const _0x7ebbd3 = atob(_0x84ae0f);
    const _0x34b16e = _0x7ebbd3.length;
    const _0x3065b3 = new Uint8Array(_0x34b16e);
    for (let _0x3c358b = 0; _0x3c358b < _0x34b16e; _0x3c358b++) {
      {
        _0x3065b3[_0x3c358b] = _0x7ebbd3.charCodeAt(_0x3c358b);
      }
    }
    return _0x3065b3;
  }
  xorEncryptDecrypt(_0x278cf7, _0x5d22f5) {
    const _0x3e4f6a = [];
    for (let _0x17a98 = 0; _0x17a98 < _0x278cf7.length; _0x17a98++) {
      {
        _0x3e4f6a.push(_0x278cf7.charCodeAt(_0x17a98) ^ _0x5d22f5.charCodeAt(_0x17a98 % _0x5d22f5.length));
      }
    }
    return String.fromCharCode(..._0x3e4f6a);
  }
  rc4(_0x276d5a, _0x258dee) {
    const _0x23e1dc = _0x276d5a.length;
    var _0x4820dc = {
      length: 256
    };
    const _0x5206f4 = Array.from(_0x4820dc, (_0x160371, _0x54a5da) => _0x54a5da);
    var _0x2b621d = {
      length: 256
    };
    const _0x1b127e = Array.from(_0x2b621d, (_0x42b940, _0x412c57) => _0x276d5a.charCodeAt(_0x412c57 % _0x23e1dc));
    let _0x2adc4b = 0;
    for (let _0x1483f4 = 0; _0x1483f4 < 256; _0x1483f4++) {
      {
        _0x2adc4b = (_0x2adc4b + _0x5206f4[_0x1483f4] + _0x1b127e[_0x1483f4]) % 256;
        [_0x5206f4[_0x1483f4], _0x5206f4[_0x2adc4b]] = [_0x5206f4[_0x2adc4b], _0x5206f4[_0x1483f4]];
      }
    }
    const _0x4f9658 = [];
    let _0x325dfd = 0;
    _0x2adc4b = 0;
    for (let _0x5c506c = 0; _0x5c506c < _0x258dee.length; _0x5c506c++) {
      {
        _0x325dfd = (_0x325dfd + 1) % 256;
        _0x2adc4b = (_0x2adc4b + _0x5206f4[_0x325dfd]) % 256;
        [_0x5206f4[_0x325dfd], _0x5206f4[_0x2adc4b]] = [_0x5206f4[_0x2adc4b], _0x5206f4[_0x325dfd]];
        const _0x252b40 = (_0x5206f4[_0x325dfd] + _0x5206f4[_0x2adc4b]) % 256;
        const _0x21400d = _0x5206f4[_0x252b40];
        const _0x42c5a9 = _0x258dee[_0x5c506c] ^ _0x21400d;
        _0x4f9658.push(_0x42c5a9);
      }
    }
    return new Uint8Array(_0x4f9658);
  }
  getTimestamp() {
    return Math.floor(Date.now() / 1000);
  }
  [_0x223378(453, "@zNF")]() {
    const _0xdc10ea = _0x223378;
    const _0x3d228d = _0x66b7;
    const _0x11dbf1 = {
      PMwrI: "6|1|13|5|11|15|2|8|0|7|10|14|16|9|12|4|3",
      AlHLv: "tencent",
      ZMazA: function (_0x4992a2, _0x102b1b) {
        {
          return _0x4992a2 + _0x102b1b;
        }
      },
      OcBxq: _0x3d228d(342),
      qcqyA: "#f60",
      hMdal: _0x3d228d(354),
      aNUki: _0xdc10ea(512, ")iBN"),
      Spfkv: function (_0x3af1c5, _0x5079b4) {
        {
          return _0x3af1c5(_0x5079b4);
        }
      },
      zTrJs: _0xdc10ea(465, "dkjh"),
      Eavsi: _0x3d228d(564),
      tSZFn: "14px 'Arial'"
    };
    const _0x37a62e = _0x11dbf1.PMwrI[_0xdc10ea(433, "ItUL")]("|");
    let _0x4b890f = 0;
    while (true) {
      {
        switch (_0x37a62e[_0x4b890f++]) {
          case "0":
            _0x1350d1[_0xdc10ea(508, "ItUL")](125, 1, 62, 20);
            continue;
          case "1":
            var _0x1350d1 = _0x1c16a1[_0xdc10ea(539, "ItUL")]("2d");
            continue;
          case "2":
            _0x1350d1[_0xdc10ea(458, "![F)")] = _0x11dbf1[_0xdc10ea(519, "O]#)")];
            continue;
          case "3":
            return _0x11dbf1[_0xdc10ea(410, "Gxb7")]("h5", _0x472442);
          case "4":
            var _0x472442 = this[_0xdc10ea(484, "s*Qy")](_0x52f0c0[_0x3d228d(547)](-18, -12));
            continue;
          case "5":
            console[_0xdc10ea(351, "tjEy")](_0xdc10ea(528, "6J)a") + _0x176e5b);
            continue;
          case "6":
            var _0x1c16a1 = document.createElement("canvas");
            continue;
          case "7":
            _0x1350d1.fillStyle = _0x11dbf1.OcBxq;
            continue;
          case "8":
            _0x1350d1.fillStyle = _0x11dbf1[_0x3d228d(318)];
            continue;
          case "9":
            var _0x2f334a = _0x1c16a1.toDataURL().replace(_0x11dbf1.hMdal, "");
            continue;
          case "10":
            _0x1350d1[_0xdc10ea(401, "9YjF")](_0x176e5b, 2, 15);
            continue;
          case "11":
            _0x1350d1[_0x3d228d(570)] = _0x11dbf1[_0x3d228d(485)];
            continue;
          case "12":
            var _0x52f0c0 = _0x11dbf1[_0x3d228d(385)](atob, _0x2f334a);
            continue;
          case "13":
            var _0x176e5b = _0x11dbf1[_0xdc10ea(427, "]vYc")];
            continue;
          case "14":
            _0x1350d1[_0x3d228d(496)] = _0x11dbf1[_0x3d228d(486)];
            continue;
          case "15":
            _0x1350d1.font = _0x11dbf1.tSZFn;
            continue;
          case "16":
            _0x1350d1[_0xdc10ea(419, "jmoA")](_0x176e5b, 4, 17);
            continue;
        }
        break;
      }
    }
  }
  getUID() {
    const _0x16e595 = _0x223378;
    const _0x5638cd = _0x66b7;
    const _0x3ae539 = {};
    _0x3ae539[_0x5638cd(440)] = _0x16e595(487, "o&JM");
    _0x3ae539[_0x16e595(326, "tjEy")] = _0x5638cd(476);
    _0x3ae539.WqEWD = function (_0x8299cf, _0x2147fa) {
      {
        return _0x8299cf === _0x2147fa;
      }
    };
    _0x3ae539.FRyQc = _0x16e595(575, "s*Qy");
    const _0xe39fba = _0x3ae539;
    let _0x56cb63 = localStorage.getItem(_0xe39fba[_0x5638cd(347)]);
    if (!_0x56cb63) {
      {
        if (_0xe39fba.WqEWD(_0xe39fba[_0x5638cd(516)], _0xe39fba[_0x16e595(529, "n7hu")])) {
          _0x56cb63 = this[_0x16e595(457, "zoZT")]();
          localStorage.setItem(_0xe39fba[_0x16e595(373, "%)A8")], _0x56cb63);
        } else {
          {
            const _0x400394 = {};
            _0x400394[_0x5638cd(380)] = 1;
            _0x400394[_0x16e595(405, "cuW[")] = _0xe39fba[_0x5638cd(440)];
            return _0x400394;
          }
        }
      }
    }
    return _0x56cb63;
  }
  async [_0x223378(521, "hW5e")]() {
    const _0x45a101 = _0x66b7;
    const _0x1e0606 = _0x223378;
    const _0x185d0e = {};
    _0x185d0e[_0x1e0606(388, "6J)a")] = function (_0x587ca3, _0x572b95) {
      return _0x587ca3 + _0x572b95;
    };
    _0x185d0e[_0x1e0606(506, "(NZK")] = _0x45a101(350);
    _0x185d0e[_0x1e0606(520, "Tt3f")] = _0x1e0606(424, "zoZT");
    _0x185d0e.itFhj = function (_0x259b91, _0x406c49) {
      return _0x259b91 === _0x406c49;
    };
    _0x185d0e[_0x1e0606(409, "YWkG")] = _0x45a101(507);
    _0x185d0e.ngPas = function (_0x598b54, _0x212b3e) {
      {
        return _0x598b54 === _0x212b3e;
      }
    };
    _0x185d0e.QMNwE = "OhqGk";
    _0x185d0e[_0x1e0606(374, "jmoA")] = _0x45a101(446);
    _0x185d0e.cSgXx = function (_0xc9b8bb, _0x451484) {
      return _0xc9b8bb === _0x451484;
    };
    _0x185d0e[_0x1e0606(537, "yn7#")] = _0x1e0606(352, "(NZK");
    _0x185d0e[_0x45a101(425)] = function (_0x2cda55, _0x81a18d) {
      {
        return _0x2cda55 + _0x81a18d;
      }
    };
    const _0x1db28d = _0x185d0e;
    try {
      {
        if (_0x1db28d.itFhj(_0x1db28d[_0x1e0606(346, "dmo2")], _0x45a101(348))) {
          return {
            error: 1,
            msg: _0x1db28d[_0x1e0606(388, "6J)a")]("异常: ", _0x2a373d)
          };
        } else {
          {
            const _0x40a669 = await fetch(this[_0x45a101(413)] + "/api/getAppNotice?app_id=" + this.APP_ID);
            if (!_0x40a669.ok) {
              {
                if (_0x1db28d[_0x45a101(316)](_0x1db28d.QMNwE, _0x1db28d[_0x1e0606(430, "zoZT")])) {
                  {
                    const _0x14770f = {};
                    _0x14770f[_0x1e0606(360, "AL^H")] = 1;
                    _0x14770f[_0x45a101(526)] = _0x1db28d[_0x45a101(494)];
                    return _0x14770f;
                  }
                } else {
                  {
                    const _0x148fbf = {};
                    _0x148fbf.error = 1;
                    _0x148fbf.msg = "网络连接不稳定，获取失败";
                    return _0x148fbf;
                  }
                }
              }
            }
            const _0x312bd1 = await _0x40a669[_0x45a101(533)]();
            return _0x312bd1;
          }
        }
      }
    } catch (_0x1a7562) {
      {
        return _0x1db28d[_0x45a101(568)](_0x1db28d[_0x45a101(335)], _0x1db28d.KiVIK) ? {
          error: 1,
          msg: _0x1db28d.oduNT("异常: ", _0x1a7562)
        } : {
          error: 1,
          msg: _0x1db28d[_0x1e0606(572, "*jqv")](_0x1db28d[_0x45a101(579)], _0x38b5ee)
        };
      }
    }
  }
  async [_0xd0ebf9(505)](_0x5ba6d4) {
    const _0x375942 = _0xd0ebf9;
    const _0x39f07b = _0x223378;
    const _0x16af28 = {};
    _0x16af28[_0x39f07b(390, "ws#s")] = function (_0x3bfb89, _0xb8f7ee) {
      return _0x3bfb89 === _0xb8f7ee;
    };
    _0x16af28[_0x375942(466)] = "PANIi";
    _0x16af28[_0x39f07b(395, "Tt3f")] = _0x375942(350);
    _0x16af28[_0x39f07b(353, "OItQ")] = function (_0x4a8851, _0x1579a6) {
      {
        return _0x4a8851 !== _0x1579a6;
      }
    };
    _0x16af28[_0x39f07b(370, "![F)")] = "rQqig";
    _0x16af28.iIQAd = function (_0x2b1785, _0x22f60a) {
      return _0x2b1785 + _0x22f60a;
    };
    const _0x4c4e91 = _0x16af28;
    try {
      {
        if (_0x4c4e91[_0x39f07b(418, "9YjF")](_0x4c4e91[_0x375942(466)], "LOgdK")) {
          _0x3ae640 = this[_0x39f07b(389, "Io3&")]();
          _0x2c7637[_0x39f07b(546, "vv9^")]("ars_uid", _0x314e18);
        } else {
          {
            const _0x160079 = await fetch(this[_0x39f07b(552, "Tt3f")] + _0x39f07b(442, "VWaZ") + this[_0x39f07b(369, "AL^H")] + _0x39f07b(396, "sLeO") + _0x5ba6d4);
            if (!_0x160079.ok) {
              {
                const _0x433e5e = {};
                _0x433e5e[_0x375942(380)] = 1;
                _0x433e5e[_0x375942(526)] = _0x4c4e91[_0x375942(510)];
                return _0x433e5e;
              }
            }
            const _0x5ce1fe = await _0x160079.json();
            return _0x5ce1fe;
          }
        }
      }
    } catch (_0x46bba8) {
      {
        if (_0x4c4e91[_0x375942(571)]("rQqig", _0x4c4e91[_0x375942(363)])) {
          {
            const _0x2139cc = {};
            _0x2139cc[_0x39f07b(434, "cuW[")] = 1;
            _0x2139cc[_0x39f07b(367, "Gxb7")] = _0x394256[_0x375942(526)];
            return _0x2139cc;
          }
        } else {
          return {
            error: 1,
            msg: _0x4c4e91[_0x375942(391)](_0x39f07b(563, "dmo2"), _0x46bba8)
          };
        }
      }
    }
  }
  async [_0xd0ebf9(557)]() {
    const _0x11d138 = _0xd0ebf9;
    const _0xbf030 = _0x223378;
    const _0x3e1f69 = {
      Vdmrc: function (_0x43db9b, _0x2ec09a) {
        {
          return _0x43db9b + _0x2ec09a;
        }
      },
      aYYGz: _0xbf030(364, "6rE8"),
      GGUra: _0xbf030(329, "!lZn"),
      Ndyev: _0x11d138(574),
      Ssyqk: "#f60",
      HJYgm: _0xbf030(536, "3RI%"),
      zMAnF: _0xbf030(554, "RLsG"),
      qLcXp: "官网：",
      DwoFT: _0x11d138(355),
      vLBUB: _0xbf030(501, "dmo2"),
      yZzNw: function (_0x1acde6, _0x14284a) {
        {
          return _0x1acde6 + _0x14284a;
        }
      },
      rNkPt: _0x11d138(513),
      cghgz: "14px 'Arial'",
      yKJLS: _0x11d138(320),
      bIDwQ: _0x11d138(549),
      SqMbT: function (_0x42249d, _0x5593b7, _0xad94ee) {
        {
          return _0x42249d(_0x5593b7, _0xad94ee);
        }
      },
      EBKfs: _0x11d138(439),
      glWQy: function (_0x2db11d, _0x3a1d8f) {
        {
          return _0x2db11d === _0x3a1d8f;
        }
      },
      xCFoc: _0x11d138(394),
      vSWgA: _0xbf030(455, "6rE8"),
      qnsMW: _0xbf030(497, "%)A8"),
      kupGZ: _0xbf030(423, "lGFM"),
      ploYz: function (_0x224901, _0x2d01ea) {
        return _0x224901 !== _0x2d01ea;
      },
      pTnwC: _0x11d138(480),
      PGHeF: "UGfcc",
      DOtxU: function (_0x2617cc, _0x4798f9) {
        {
          return _0x2617cc !== _0x4798f9;
        }
      },
      hXCcH: _0x11d138(325),
      apPbr: "lnPkG",
      wjGZs: "心跳验证失败",
      FNKIK: function (_0x306fe5, _0x22a655) {
        return _0x306fe5 >= _0x22a655;
      },
      wVPXy: function (_0x4ba9b2, _0x3ced19) {
        {
          return _0x4ba9b2 - _0x3ced19;
        }
      },
      FlYhT: _0x11d138(573),
      FEvZx: "ZntZe"
    };
    try {
      {
        const _0x2f7cd0 = new FormData();
        _0x2f7cd0.append(_0x3e1f69[_0xbf030(377, "YWkG")], this[_0xbf030(322, "ws#s")]);
        _0x2f7cd0[_0xbf030(416, "dmo2")](_0x11d138(549), localStorage[_0x11d138(392)](_0x3e1f69.bIDwQ));
        const _0x178cc7 = await _0x3e1f69[_0x11d138(438)](fetch, this[_0x11d138(413)] + _0x11d138(421), {
          method: _0x3e1f69[_0xbf030(376, "u$$q")],
          body: _0x2f7cd0
        });
        if (!_0x178cc7.ok) {
          {
            if (_0x3e1f69[_0xbf030(362, "@zNF")](_0x3e1f69[_0xbf030(482, "dkjh")], _0x3e1f69[_0x11d138(428)])) {
              throw new Error(_0x3e1f69[_0x11d138(393)]);
            } else {
              return {
                error: 1,
                msg: _0x3e1f69.Vdmrc(_0x3e1f69[_0xbf030(449, "lGFM")], _0x2f3f6f)
              };
            }
          }
        }
        const _0x17bb6b = await _0x178cc7[_0xbf030(384, "6J)a")]();
        let _0x535fb8;
        if (!_0x17bb6b.data[_0xbf030(523, "!lZn")](_0x3e1f69[_0xbf030(492, "!lZn")])) {
          {
            if (_0x3e1f69.glWQy(_0x3e1f69.kupGZ, _0x3e1f69[_0xbf030(463, "sLeO")])) {
              {
                const _0x2d307c = this[_0xbf030(349, "%)A8")](this[_0xbf030(448, "RcEw")](_0x17bb6b[_0xbf030(339, "Y]Y6")]), this[_0x11d138(511)]);
                _0x535fb8 = JSON[_0xbf030(345, "O]#)")](_0x2d307c);
              }
            } else {
              return {
                error: 1,
                msg: _0x3e1f69[_0x11d138(383)]("解绑失败: ", _0x2c0c7a)
              };
            }
          }
        } else {
          {
            if (_0x3e1f69[_0x11d138(535)](_0x3e1f69[_0xbf030(551, "gV&q")], _0x3e1f69[_0xbf030(566, "dmo2")])) {
              _0x535fb8 = JSON[_0x11d138(556)](_0x17bb6b.data);
            } else {
              {
                let _0x25156e = _0x3d47e3.getItem(_0x11d138(476));
                !_0x25156e && (_0x25156e = this[_0xbf030(337, "3RI%")](), _0x4460d1[_0xbf030(530, "tjEy")](_0x3e1f69.GGUra, _0x25156e));
                return _0x25156e;
              }
            }
          }
        }
        if (_0x3e1f69[_0xbf030(417, "YWkG")](_0x535fb8[_0x11d138(473)], this[_0xbf030(444, "@zNF")])) {
          {
            if (_0x3e1f69[_0x11d138(340)](_0x3e1f69[_0xbf030(545, "6J)a")], _0x3e1f69[_0x11d138(544)])) {
              {
                const _0x3fa03a = {};
                _0x3fa03a[_0x11d138(380)] = 1;
                _0x3fa03a[_0xbf030(464, "GOzf")] = _0x3e1f69[_0x11d138(407)];
                return _0x3fa03a;
              }
            } else {
              {
                const _0x5c089f = _0x3e1f69[_0xbf030(429, "Tt3f")].split("|");
                let _0x3eb13f = 0;
                while (true) {
                  {
                    switch (_0x5c089f[_0x3eb13f++]) {
                      case "0":
                        _0x38465a[_0x11d138(496)] = _0x3e1f69.Ssyqk;
                        continue;
                      case "1":
                        var _0xf26a94 = _0x10deec[_0x11d138(338)]().replace(_0x3e1f69[_0x11d138(514)], "");
                        continue;
                      case "2":
                        var _0x334eec = _0x3a6997(_0xf26a94);
                        continue;
                      case "3":
                        _0x38465a.fillStyle = _0x11d138(342);
                        continue;
                      case "4":
                        _0x38465a[_0xbf030(569, "Io3&")] = _0x3e1f69[_0x11d138(344)];
                        continue;
                      case "5":
                        _0x38465a[_0xbf030(452, "CyF@")](_0x2826fb, 4, 17);
                        continue;
                      case "6":
                        var _0x38465a = _0x10deec[_0x11d138(450)]("2d");
                        continue;
                      case "7":
                        _0x38465a[_0xbf030(461, "RLsG")](_0x2826fb, 2, 15);
                        continue;
                      case "8":
                        _0x3d7248[_0x11d138(538)](_0x3e1f69[_0xbf030(372, "Gxb7")](_0x3e1f69[_0x11d138(321)], _0x2826fb));
                        continue;
                      case "9":
                        var _0x65db9e = this[_0xbf030(489, "VWaZ")](_0x334eec.slice(-18, -12));
                        continue;
                      case "10":
                        var _0x10deec = _0x13560e[_0xbf030(331, "iW3R")](_0x3e1f69.DwoFT);
                        continue;
                      case "11":
                        _0x38465a[_0x11d138(570)] = _0x3e1f69[_0x11d138(432)];
                        continue;
                      case "12":
                        _0x38465a[_0x11d138(386)](125, 1, 62, 20);
                        continue;
                      case "13":
                        return _0x3e1f69.yZzNw("h5", _0x65db9e);
                      case "14":
                        var _0x2826fb = _0x3e1f69[_0xbf030(368, "6Inh")];
                        continue;
                      case "15":
                        _0x38465a[_0x11d138(496)] = _0xbf030(509, "Y]Y6");
                        continue;
                      case "16":
                        _0x38465a[_0x11d138(561)] = _0x3e1f69[_0xbf030(474, "u$$q")];
                        continue;
                    }
                    break;
                  }
                }
              }
            }
          }
        }
        if (_0x3e1f69.FNKIK(_0x3e1f69[_0xbf030(437, "1)aB")](this.getTimestamp(), _0x535fb8[_0x11d138(341)]), 5)) {
          {
            const _0x1f1893 = {};
            _0x1f1893[_0x11d138(380)] = 1;
            _0x1f1893[_0xbf030(470, "t[$O")] = _0x3e1f69[_0xbf030(441, "6J)a")];
            return _0x1f1893;
          }
        }
        const _0x5bb386 = {};
        _0x5bb386[_0xbf030(515, "Y]Y6")] = 0;
        _0x5bb386[_0x11d138(550)] = _0x535fb8;
        return _0x5bb386;
      }
    } catch (_0x4ec057) {
      {
        if (_0x3e1f69[_0x11d138(503)] === _0x11d138(319)) {
          _0x945c56 = _0x450d39.parse(_0x5bd637[_0xbf030(525, "Tt3f")]);
        } else {
          {
            const _0x26453b = {};
            _0x26453b[_0xbf030(360, "AL^H")] = 1;
            _0x26453b[_0xbf030(559, "RcEw")] = _0x3e1f69.aYYGz + _0x4ec057;
            return _0x26453b;
          }
        }
      }
    }
  }
  async unCard(_0x583570) {
    const _0x5577fc = _0x223378;
    const _0x3ecbf6 = _0xd0ebf9;
    const _0x29d445 = {
      zdNXa: function (_0x59cd83, _0x1135c4) {
        {
          return _0x59cd83 + _0x1135c4;
        }
      },
      vuZcx: _0x3ecbf6(408),
      OyEwK: function (_0x331f2a, _0x1cb395, _0x4df62b) {
        return _0x331f2a(_0x1cb395, _0x4df62b);
      },
      IqvKW: "POST",
      GRieK: _0x3ecbf6(490),
      akgcY: _0x3ecbf6(472),
      CPFRQ: _0x5577fc(462, "s*Qy")
    };
    try {
      {
        const _0x337694 = new FormData();
        _0x337694[_0x3ecbf6(447)]("app_id", this[_0x3ecbf6(581)]);
        _0x337694[_0x3ecbf6(447)](_0x29d445[_0x5577fc(333, "CyF@")], _0x583570);
        const _0x42c0db = await _0x29d445[_0x3ecbf6(382)](fetch, this[_0x5577fc(436, "(NZK")] + _0x3ecbf6(481), {
          method: _0x29d445.IqvKW,
          body: _0x337694
        });
        if (!_0x42c0db.ok) {
          {
            if (_0x29d445[_0x3ecbf6(531)] === _0x29d445[_0x3ecbf6(378)]) {
              return {
                error: 1,
                msg: _0x29d445[_0x3ecbf6(412)](_0x3ecbf6(460), _0x2d5bb9)
              };
            } else {
              {
                const _0x5983fb = {};
                _0x5983fb[_0x5577fc(343, "t[$O")] = 1;
                _0x5983fb[_0x3ecbf6(526)] = _0x3ecbf6(479);
                return _0x5983fb;
              }
            }
          }
        }
        const _0x1fc5e0 = await _0x42c0db[_0x5577fc(532, "AL^H")]();
        const _0x13aff6 = {};
        _0x13aff6.error = 0;
        _0x13aff6[_0x3ecbf6(550)] = _0x1fc5e0;
        return _0x13aff6;
      }
    } catch (_0xd38107) {
      {
        const _0x3f364f = {};
        _0x3f364f.error = 1;
        _0x3f364f.msg = _0x29d445[_0x3ecbf6(435)] + _0xd38107;
        return _0x3f364f;
      }
    }
  }
  async verifyCard(_0x9ca31b) {
    const _0xbc95 = _0x223378;
    const _0x1deb09 = _0xd0ebf9;
    const _0x2a3892 = {
      efDsZ: _0x1deb09(350),
      JEqwy: _0xbc95(456, "vv9^"),
      owYql: _0xbc95(517, "K^!J"),
      pHeBE: _0xbc95(361, "6Inh"),
      kcRZL: _0x1deb09(550),
      DpSZd: function (_0x37c98a, _0x5a62d1, _0x59149c) {
        {
          return _0x37c98a(_0x5a62d1, _0x59149c);
        }
      },
      YuWLb: "POST",
      NIQEG: function (_0x5886c4, _0x1f6724) {
        {
          return _0x5886c4 === _0x1f6724;
        }
      },
      YCwzS: _0xbc95(534, "u$$q"),
      djMWq: function (_0x31dd8c, _0x216cf6) {
        {
          return _0x31dd8c >= _0x216cf6;
        }
      },
      zLsIl: function (_0x4795d6, _0x5c7d31) {
        return _0x4795d6 - _0x5c7d31;
      },
      Jmjkg: function (_0x25862b, _0x246b05) {
        {
          return _0x25862b !== _0x246b05;
        }
      },
      hbdgZ: function (_0x9dd487, _0x511d99) {
        return _0x9dd487 === _0x511d99;
      },
      KUSwx: _0xbc95(562, "![F)"),
      UapSn: function (_0x383fd8, _0x155ccb) {
        {
          return _0x383fd8 !== _0x155ccb;
        }
      },
      EPFVy: _0x1deb09(365),
      MxlHG: _0xbc95(495, "3RI%"),
      cFkob: _0x1deb09(381),
      EKvMN: _0xbc95(366, "6rE8"),
      yfZaF: _0x1deb09(459),
      JZcTo: _0xbc95(323, "OItQ"),
      UeBqj: function (_0x1a9f7d, _0x472d24) {
        return _0x1a9f7d + _0x472d24;
      }
    };
    const _0x432e66 = JSON[_0xbc95(375, "%)A8")]({
      timestamp: this[_0xbc95(371, "dkjh")](),
      card: _0x9ca31b,
      imei: this[_0x1deb09(491)]()
    });
    const _0x11388e = this[_0x1deb09(577)](_0x432e66);
    const _0x137dc4 = this[_0x1deb09(420)](this[_0xbc95(553, "%)A8")](this.APP_KEY, new TextEncoder()[_0x1deb09(500)](_0x432e66)));
    try {
      {
        const _0x495375 = new FormData();
        _0x495375[_0x1deb09(447)](_0x2a3892.pHeBE, this[_0x1deb09(581)]);
        _0x495375[_0xbc95(327, "OItQ")](_0x2a3892.kcRZL, _0x137dc4);
        _0x495375[_0x1deb09(447)](_0xbc95(324, "Io3&"), _0x11388e);
        const _0x7520f8 = await _0x2a3892.DpSZd(fetch, this[_0x1deb09(413)] + _0xbc95(504, "dkjh"), {
          method: _0x2a3892[_0xbc95(356, "[*Ds")],
          body: _0x495375
        });
        if (!_0x7520f8.ok) {
          {
            if (_0x2a3892.NIQEG(_0x2a3892[_0x1deb09(580)], _0x2a3892.YCwzS)) {
              {
                const _0x5023fa = {};
                _0x5023fa[_0xbc95(402, "Gxb7")] = 1;
                _0x5023fa[_0xbc95(470, "t[$O")] = _0x1deb09(479);
                return _0x5023fa;
              }
            } else {
              {
                const _0x2d6735 = {};
                _0x2d6735[_0x1deb09(380)] = 1;
                _0x2d6735.msg = _0x2a3892[_0xbc95(488, "3RI%")];
                return _0x2d6735;
              }
            }
          }
        }
        const _0x4ee3c3 = await _0x7520f8[_0xbc95(469, "!lZn")]();
        if (_0x4ee3c3[_0xbc95(443, "U#kW")] !== this.APP_ID) {
          {
            const _0x35d007 = {};
            _0x35d007.error = 1;
            _0x35d007[_0x1deb09(526)] = _0x4ee3c3[_0xbc95(330, "u$$q")];
            return _0x35d007;
          }
        }
        if (_0x2a3892[_0xbc95(332, "ws#s")](_0x2a3892[_0xbc95(415, "3RI%")](this[_0x1deb09(468)](), _0x4ee3c3[_0x1deb09(341)]), 5)) {
          {
            const _0x3a3e22 = {};
            _0x3a3e22.error = 1;
            _0x3a3e22.msg = _0x2a3892.owYql;
            return _0x3a3e22;
          }
        }
        const _0x145d09 = _0x4ee3c3[_0xbc95(493, "RLsG")].substring(0, _0x2a3892.zLsIl(_0x4ee3c3.data[_0xbc95(540, "VWaZ")], 32));
        const _0x3ae39f = _0x4ee3c3.data.substring(_0x4ee3c3[_0xbc95(422, "YWkG")][_0x1deb09(398)] - 32);
        const _0x2a0627 = new TextDecoder()[_0xbc95(400, "6J)a")](this[_0xbc95(426, "t[$O")](this.APP_KEY, this[_0xbc95(478, "OItQ")](_0x145d09)));
        const _0x4015d8 = this[_0xbc95(399, "vv9^")](_0x2a0627);
        const _0x4576ed = JSON.parse(_0x2a0627);
        if (_0x2a3892[_0xbc95(336, "Tt3f")](_0x4576ed[_0xbc95(357, "iW3R")], this[_0x1deb09(581)])) {
          {
            const _0x12027a = {};
            _0x12027a[_0x1deb09(380)] = 1;
            _0x12027a[_0x1deb09(526)] = _0x4576ed[_0xbc95(379, "n7hu")];
            return _0x12027a;
          }
        }
        if (this.getTimestamp() - _0x4576ed[_0xbc95(543, "iW3R")] >= 5) {
          {
            if (_0x2a3892[_0xbc95(560, "sLeO")](_0x2a3892[_0xbc95(387, "ws#s")], _0x2a3892.KUSwx)) {
              {
                const _0x556391 = {};
                _0x556391[_0x1deb09(380)] = 1;
                _0x556391[_0x1deb09(526)] = _0x2a3892.owYql;
                return _0x556391;
              }
            } else {
              {
                const _0x33ab06 = {};
                _0x33ab06[_0x1deb09(380)] = 1;
                _0x33ab06[_0xbc95(524, "hW5e")] = _0x2a3892.JEqwy;
                return _0x33ab06;
              }
            }
          }
        }
        if (_0x2a3892[_0xbc95(477, "Io3&")](_0x3ae39f, _0x4015d8)) {
          {
            if (_0x2a3892[_0xbc95(576, "CyF@")](_0x2a3892[_0xbc95(518, "iW3R")], _0x2a3892[_0xbc95(558, "CyF@")])) {
              {
                const _0x10869f = {};
                _0x10869f.error = 1;
                _0x10869f[_0xbc95(359, "3RI%")] = _0x2a3892.JEqwy;
                return _0x10869f;
              }
            } else {
              {
                const _0x53c5bc = {};
                _0x53c5bc.error = 1;
                _0x53c5bc[_0x1deb09(526)] = _0x2a3892[_0xbc95(317, "CyF@")];
                return _0x53c5bc;
              }
            }
          }
        }
        localStorage[_0xbc95(467, "Io3&")](_0x2a3892[_0xbc95(454, "gV&q")], _0x9ca31b);
        localStorage[_0x1deb09(499)](_0x2a3892.EKvMN, _0x4576ed[_0x1deb09(549)]);
        const _0x4ff276 = {};
        _0x4ff276[_0x1deb09(380)] = 0;
        _0x4ff276[_0x1deb09(526)] = _0x2a3892[_0x1deb09(404)];
        _0x4ff276[_0x1deb09(550)] = _0x4576ed;
        return _0x4ff276;
      }
    } catch (_0x45742c) {
      {
        if (_0x2a3892[_0x1deb09(397)](_0x2a3892[_0x1deb09(541)], _0x2a3892[_0xbc95(334, "1)aB")])) {
          {
            const _0x42f1c3 = {};
            _0x42f1c3[_0xbc95(451, "[*Ds")] = 1;
            _0x42f1c3[_0x1deb09(526)] = _0x2a3892[_0x1deb09(411)];
            return _0x42f1c3;
          }
        } else {
          return {
            error: 1,
            msg: _0x2a3892[_0xbc95(471, "yn7#")](_0xbc95(328, "yn7#"), _0x45742c)
          };
        }
      }
    }
  }
}
document.body.innerHTML += "\n  <div style=\"height: 100%; width: 100%; z-index: 9999999; background-color: white; position: fixed;\" id=\"ars-container\">\n\n<div style=\"text-align: start!important;max-width: 600px!important;margin: 0 auto;\">\n<div id=\"myModal\"\nstyle=\"display: none; position: fixed; z-index: 9999; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.4);\">\n<div style=\"padding: 20px;\">\n<div\nstyle=\"background-color: #fefefe; margin: 15% auto; padding: 15px; border: 1px solid #888; text-align: center; border-radius: 10px;max-width: 600px!important;\">\n<div style=\"display: contents;display: flex; justify-content: space-between; align-items: center;\">\n  <div>\n    <span id=\"modalTitle\" style=\"font-size: 16px;\">我是标题</span>\n  </div>\n  <div onclick=\"document.getElementById('myModal').style.display = 'none'\"\n    style=\"color: #aaa; font-size: 20px; font-weight: bold; cursor: pointer;\">&times;\n  </div>\n</div>\n<div id=\"modalContent\" style=\"font-size: 14px; color: #000000c7;text-align: start;margin-top: 10px;\"></div>\n</div>\n</div>\n</div>\n<div id=\"ars-main\"\nstyle=\"height: 100%;width: 100%;background-color: white;position: relative;z-index: 8888; left: 0; top: 0;overflow-y: auto;\">\n<div id=\"ars-content\" style=\"padding: 20px;margin-top: 25%;\">\n<h2 id=\"title\">登录</h2>\n<div style=\"margin-bottom: 20px;\">\n<input id=\"ars-card\" type=\"text\"\n  style=\"font-size: 15px;;box-sizing: border-box;background-color: #9e9e9e24;border-color: rgb(22 93 255 / 95%);height: 38px;width: inherit;;padding: 4px 10px;margin: 0;border: unset;width: 100%;outline: none;border-radius: 4px;\"\n  placeholder=\"请输入你的卡密\">\n</div>\n<div style=\"margin-bottom: 20px;color: #000000b8;font-size: 14px;\">\n<label class=\"radio-label\" style=\"display: flex;gap: 5px;align-items: center;\">\n  <input type=\"checkbox\" name=\"options\" value=\"\" id=\"ars-autologin\">\n  <span>自动登录</span>\n</label>\n</div>\n<div style=\"margin-bottom: 20px;\">\n<button id=\"ars-verCard\"\n  style=\"background-color: #0d6efd;color: white;border: unset;padding: 5px;border-radius: 20px;width: 100%;height: 38px;font-size: 15px;\">立即登录</button>\n</div>\n<div style=\"margin-bottom: 20px;\">\n<button id=\"ars-unCard\"\n  style=\"background-color: #FF9800;color: white;border: unset;padding: 5px;border-radius: 20px;width: 100%;height: 38px;font-size: 15px;\">解绑卡密</button>\n</div>\n<div style=\"margin-bottom: 20px;\">\n<span id=\"tipContainer\"\n  style=\"display: none;opacity: 0; transition: opacity 0.5s;  color:#000000ad;box-sizing: border-box; background-color: rgb(232 243 255); padding: 5px 10px; width: 100%; border-radius: 5px; font-size: 14px;\">\n  <div style=\"font-size: 16px; margin-bottom: 5px;\">\n    <svg t=\"1729309693821\" class=\"icon\" viewBox=\"0 0 1024 1024\" style=\"position: relative; top: 5px;\"\n      version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1808\" width=\"22\">\n      <path\n        d=\"M514 912c-219.9 0-398.8-178.9-398.8-398.9 0-219.9 178.9-398.8 398.8-398.8s398.9 178.9 398.9 398.8c-0.1 220-179 398.9-398.9 398.9z m0-701.5c-166.9 0-302.7 135.8-302.7 302.7S347.1 815.9 514 815.9s302.7-135.8 302.7-302.7S680.9 210.5 514 210.5z\"\n        fill=\"#BDD2EF\" p-id=\"1809\"></path>\n      <path\n        d=\"M431.1 502.4c-0.1 0.3 0.3 0.4 0.4 0.2 6.9-11.7 56.5-89.1 23.4 167.3-17.4 134.7 122.9 153.6 142.3-7.9 0.1-1-1.3-1.4-1.7-0.4-11.9 37.2-49.6 104.9-4.7-155.2 18.6-107.2-127.6-146-159.7-4z\"\n        fill=\"#2867CE\" p-id=\"1810\"></path>\n      <path d=\"M541.3 328m-68 0a68 68 0 1 0 136 0 68 68 0 1 0-136 0Z\" fill=\"#2867CE\" p-id=\"1811\"></path>\n    </svg>\n    <span>提示</span>\n  </div>\n  <div id=\"tipText\"></div>\n</span>\n</div>\n</div>\n</div>\n</div>\n</div>\n";
console.log(1);
function showModal(_0x279852, _0x3c868b) {
  document.getElementById("modalTitle").innerText = _0x279852;
  document.getElementById("modalContent").innerText = _0x3c868b;
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
window.onclick = function (_0xa14493) {
  const _0x15cb56 = document.getElementById("myModal");
  if (_0xa14493.target === _0x15cb56) {
    {
      closeModal();
    }
  }
};
const autologin = document.getElementById("ars-autologin");
const verCard = document.getElementById("ars-verCard");
const unCard = document.getElementById("ars-unCard");
const sdk = new Ars();
let cache_card = localStorage.getItem("ars_card");
let cache_autologin = localStorage.getItem("autologin");
cache_autologin && cache_autologin == "true" && (autologin.checked = true);
cache_card && cache_card.length > 4 && (document.getElementById("ars-card").value = cache_card, cache_autologin && cache_autologin == "true" && (sdk.showTip("正在自动验证卡密..."), start_verifyCard(cache_card)));
function adjustMargin() {
  const _0x123712 = document.getElementById("ars-content");
  if (window.innerHeight < 400) {
    {
      _0x123712.style.marginTop = "0";
      document.getElementById("title").style.marginTop = "0";
    }
  } else {
    _0x123712.style.marginTop = "25%";
  }
}
adjustMargin();
window.addEventListener("resize", adjustMargin);
async function getCloudData() {
  const _0x2ea3b6 = await sdk.getCloudValue("1623824434");
  _0x2ea3b6.error == 0 ? console.log(_0x2ea3b6.value) : console.log(_0x2ea3b6.msg);
}
getCloudData();
async function getAppNotice() {
  const _0x5dcc73 = await sdk.getAppNotice();
  _0x5dcc73.code == sdk.APP_ID;
}
getAppNotice();
autologin.addEventListener("change", () => {
  autologin.checked ? localStorage.setItem("autologin", "true") : localStorage.clear("autologin");
});
verCard.addEventListener("click", async function () {
  let _0x47c42b = document.getElementById("ars-card").value.trim();
  if (_0x47c42b.length < 4) {
    {
      sdk.showTip("卡密错误");
      return;
    }
  }
  sdk.showTip("正在验证卡密...");
  start_verifyCard(_0x47c42b);
});
unCard.addEventListener("click", async function () {
  let _0x992fde = document.getElementById("ars-card").value.trim();
  if (_0x992fde.length < 4) {
    {
      sdk.showTip("卡密错误");
      return;
    }
  }
  sdk.showTip("正在解绑中...");
  const _0x5c7c9b = await sdk.unCard(_0x992fde);
  sdk.showTip(_0x5c7c9b.data.msg);
});
async function start_verifyCard(_0x27a349) {
  const _0x27845d = await sdk.verifyCard(_0x27a349);
  if (_0x27845d.error != 0) {
    {
      localStorage.clear("ars_card");
      sdk.showTip(_0x27845d.msg);
      return;
    }
  } else {
    sdk.closeLogin();
    document.getElementById("ars-container").style.zIndex = "0";
    alert("\n==========================\n卡密类型: " + _0x27845d.data.cardType + "\n到期时间: " + _0x27845d.data.expire + "\n当前公告: " + _0x27845d.data.notice + "\n全网启动次数: " + _0x27845d.data.request_counts + "\n卡密剩余使用次数: " + _0x27845d.data.remaining_count + "\n==========================\n");
  }
}
function atk1() {
  setButtonImage("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAABmJLR0QA/wD/AP+gvaeTAAACn0lEQVR42u3OsQ2AMAADQYt1shbLM0BqZ4JIFEihuCu/+gQAvtL2bjtOfwDwX9emP0nm6TkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF5a+qQIao24iT8AAAAASUVORK5CYII=");
}
function atk2() {
  h5gg.clearResults();
  h5gg.searchNumber("1123", "I32", "0x10000000", "0x160000000");
  h5gg.searchNearby("216", "I32", "0x4");
  h5gg.searchNumber("1123", "I32", "0x10000000", "0x160000000");
  var _0x5b6212 = h5gg.getResultsCount();
  alert("神叔Qv771543 =" + _0x5b6212);
  var _0x298db5 = h5gg.getResults(_0x5b6212);
  setInterval(function () {
    {
      for (var _0x134cf5 = 0; _0x134cf5 < _0x5b6212; _0x134cf5++) {
        {
          var _0x20f3ad = _0x298db5[_0x134cf5].address;
          var _0x53dbb8 = Number(_0x20f3ad) + 164;
          h5gg.setValue(_0x53dbb8, 55, "I32");
        }
      }
    }
  }, 0);
}
function atk3() {
  h5gg.clearResults();
  h5gg.searchNumber("1123", "I32", "0x10000000", "0x160000000");
  h5gg.searchNearby("216", "I32", "0x4");
  h5gg.searchNumber("1123", "I32", "0x10000000", "0x160000000");
  var _0x3229f7 = h5gg.getResultsCount();
  alert("神叔Qv771543 =" + _0x3229f7);
  var _0x59e65b = h5gg.getResults(_0x3229f7);
  setInterval(function () {
    {
      for (var _0x2b5daa = 0; _0x2b5daa < _0x3229f7; _0x2b5daa++) {
        {
          var _0x6a445f = _0x59e65b[_0x2b5daa].address;
          var _0x21ef7a = Number(_0x6a445f) + 164;
          h5gg.setValue(_0x21ef7a, 55, "I32");
        }
      }
    }
  }, 35);
}
function atk4() {
  h5gg.clearResults();
  h5gg.searchNumber("1123", "I32", "0x10000000", "0x160000000");
  h5gg.searchNearby("216", "I32", "0x4");
  h5gg.searchNumber("1123", "I32", "0x10000000", "0x160000000");
  var _0x31e7b0 = h5gg.getResultsCount();
  alert("神叔Qv771543 =" + _0x31e7b0);
  var _0x2e3550 = h5gg.getResults(_0x31e7b0);
  setInterval(function () {
    {
      for (var _0x2f5512 = 0; _0x2f5512 < _0x31e7b0; _0x2f5512++) {
        {
          var _0x57496e = _0x2e3550[_0x2f5512].address;
          var _0x2a293f = Number(_0x57496e) + 164;
          h5gg.setValue(_0x2a293f, 55, "I32");
        }
      }
    }
  }, 55);
}
function atk5() {
  h5gg.clearResults();
  h5gg.searchNumber("0.05", "F32", "0x10000000", "0x160000000");
  h5gg.searchNearby("262156", "I32", "0x20");
  h5gg.searchNumber("0.05", "F32", "0x10000000", "0x160000000");
  h5gg.editAll(-1, "F32");
  alert("神叔Qv771543");
}
function atk6() {
  var _0x46da6e = prompt("sy");
  h5gg.clearResults();
  h5gg.searchNumber("0.01", "F32", "0x00000000", "0x200000000");
  h5gg.searchNearby("1.5", "F32", "0x4");
  h5gg.searchNumber("1.5", "F32", "0x00000000", "0x200000000");
  var _0x41852e = h5gg.getResultsCount();
  alert("神叔Qv771543" + _0x41852e);
  var _0x1a42ef = h5gg.getResults(_0x41852e);
  for (var _0xf26aed = 0; _0xf26aed < _0x41852e; _0xf26aed++) {
    {
      var _0x4be309 = _0x1a42ef[_0xf26aed].address;
      h5gg.setValue(_0x4be309, _0x46da6e, "F32");
    }
  }
}
function atk7() {
  var _0x24827e = prompt("建议1.1-1.8");
  h5gg.clearResults();
  h5gg.searchNumber("1", "F32", "0x100000000", "0x1600000000");
  h5gg.searchNearby("0.33333334327", "F32", "0x100");
  h5gg.searchNearby("0.02999999933", "F32", "0x100");
  h5gg.searchNumber("1", "F32", "0x100000000", "0x1600000000");
  var _0x2586aa = h5gg.getResultsCount();
  alert("神叔Qv771543" + _0x2586aa);
  var _0x3295b2 = h5gg.getResults(_0x2586aa);
  setInterval(function () {
    {
      for (var _0x504bb2 = 0; _0x504bb2 < _0x2586aa; _0x504bb2++) {
        {
          var _0x48a692 = _0x3295b2[_0x504bb2].address;
          h5gg.setValue(_0x48a692, _0x24827e, "F32");
        }
      }
    }
  }, 3000);
}
function atk8() {
  var _0x259f50 = prompt("0.5~1.7建议1.5");
  h5gg.clearResults();
  h5gg.searchNumber("1.7", "F32", "0x00000000", "0x200000000");
  var _0xc7d556 = h5gg.getResultsCount();
  alert("神叔Qv771543" + _0xc7d556);
  var _0x44cb1d = h5gg.getResults(_0xc7d556);
  for (var _0x2a72a9 = 0; _0x2a72a9 < _0xc7d556; _0x2a72a9++) {
    {
      var _0x4e57b7 = _0x44cb1d[_0x2a72a9].address;
      var _0x81e87 = /EE0$/;
      var _0xf03d3e = _0x81e87.test(_0x4e57b7);
      if (_0xf03d3e) {
        {
          var _0x52b654 = _0x44cb1d[_0x2a72a9].address;
          h5gg.setValue(_0x52b654, _0x259f50, "F32");
        }
      }
    }
  }
}
function atk9() {
  h5gg.clearResults();
  h5gg.searchNumber("0.02", "F32", "0x10000000", "0x160000000");
  h5gg.searchNearby("50", "F32", "0x40");
  h5gg.searchNearby("21582", "I32", "0x40");
  h5gg.searchNumber("21582", "I32", "0x10000000", "0x160000000");
  var _0x29d5f5 = h5gg.getResultsCount();
  alert("神叔Qv771543 =" + _0x29d5f5);
  var _0xd5e1bd = h5gg.getResults(_0x29d5f5);
  for (var _0xd27e39 = 0; _0xd27e39 < _0x29d5f5; _0xd27e39++) {
    {
      var _0x44ce95 = _0xd5e1bd[_0xd27e39].address;
      var _0xbb4c3b = Number(_0x44ce95) + 64;
      h5gg.setValue(_0xbb4c3b, 0.0001, "F32");
    }
  }
}
function atk10() {
  h5gg.clearResults();
  h5gg.searchNumber("100", "F32", "0x10000000", "0x160000000");
  h5gg.searchNearby("131240", "I32", "0x40");
  var _0xfbb60c = h5gg.getResultsCount();
  alert("神叔Qv771543 =" + _0xfbb60c);
  var _0x958b64 = h5gg.getResults(_0xfbb60c);
  for (var _0x14dab6 = 0; _0x14dab6 < _0xfbb60c; _0x14dab6++) {
    {
      var _0x2cb288 = _0x958b64[_0x14dab6].address;
      var _0x162049 = /C$/;
      var _0x426049 = _0x162049.test(_0x2cb288);
      if (_0x426049) {
        {
          h5gg.setValue(_0x2cb288, 9999999999, "F32");
        }
      }
    }
  }
}
function atk11() {
  var _0x17e2c2 = prompt("sy");
  h5gg.clearResults();
  h5gg.searchNumber("640", "F32", "0x00000000", "0x200000000");
  h5gg.searchNearby("0.5", "F32", "0x24");
  h5gg.searchNumber("640", "F32", "0x00000000", "0x200000000");
  var _0x4056d6 = h5gg.getResultsCount();
  alert("神叔Qv771543 =" + _0x4056d6);
  var _0x4bfd5a = h5gg.getResults(_0x4056d6);
  for (var _0x8f261f = 0; _0x8f261f < _0x4056d6; _0x8f261f++) {
    {
      var _0x24e856 = _0x4bfd5a[_0x8f261f].address;
      var _0x3a520d = Number(_0x24e856) + 16;
      h5gg.setValue(_0x3a520d, _0x17e2c2, "F32");
    }
  }
}
function atk12() {
  var _0x506fbd = prompt("反向粘合");
  h5gg.clearResults();
  h5gg.searchNumber("0.58823525906", "F32", "0x00000000", "0x200000000");
  h5gg.searchNearby("1063729944", "I32", "0x20");
  h5gg.searchNumber("1063729944", "I32", "0x00000000", "0x200000000");
  var _0x3f6bcf = h5gg.getResultsCount();
  alert("神叔Qv771543" + _0x3f6bcf);
  var _0x2950b8 = h5gg.getResults(_0x3f6bcf);
  for (var _0x1f76ea = 0; _0x1f76ea < _0x3f6bcf; _0x1f76ea++) {
    {
      var _0xb5921e = _0x2950b8[_0x1f76ea].address;
      h5gg.setValue(_0xb5921e, _0x506fbd, "F32");
    }
  }
}
function atk13() {
  h5gg.clearResults();
  h5gg.searchNumber("0.02", "F32", "0x10000000", "0x160000000");
  h5gg.searchNearby("50", "F32", "0x40");
  h5gg.searchNearby("21582", "I32", "0x40");
  h5gg.searchNumber("21582", "I32", "0x10000000", "0x160000000");
  var _0x4e1034 = h5gg.getResultsCount();
  alert("神叔Qv771543 =" + _0x4e1034);
  var _0x438c7c = h5gg.getResults(_0x4e1034);
  for (var _0x3ba540 = 0; _0x3ba540 < _0x4e1034; _0x3ba540++) {
    {
      var _0x1cbcf3 = _0x438c7c[_0x3ba540].address;
      var _0x14f2de = Number(_0x1cbcf3) + 64;
      h5gg.setValue(_0x14f2de, 0.00001, "F32");
    }
  }
}
function toggleLayout(_0x48e758) {
  var _0x57f812 = document.getElementById("layout1");
  var _0x471882 = document.getElementById("layout2");
  if (_0x48e758 === "layout1") {
    {
      if (_0x57f812.style.display === "none") {
        _0x57f812.style.display = "block";
        _0x471882.style.display = "none";
      } else {
        {
          _0x57f812.style.display = "none";
        }
      }
    }
  } else {
    {
      if (_0x471882.style.display === "none") {
        {
          _0x471882.style.display = "block";
          _0x57f812.style.display = "none";
        }
      } else {
        _0x471882.style.display = "none";
      }
    }
  }
}