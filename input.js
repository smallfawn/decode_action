//Fri Feb 28 2025 10:00:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
const _0x46dd2f = _0x3eee;
(function (_0x1129fe, _0x562550) {
  const _0x34c643 = _0x3eee;
  const _0x30d54b = _0x1129fe();
  while (true) {
    {
      try {
        const _0x51176e = parseInt(_0x34c643(310)) / 1 + parseInt(_0x34c643(283)) / 2 * (parseInt(_0x34c643(318)) / 3) + parseInt(_0x34c643(297)) / 4 + parseInt(_0x34c643(294)) / 5 + parseInt(_0x34c643(300)) / 6 * (-parseInt(_0x34c643(288)) / 7) + -parseInt(_0x34c643(336)) / 8 * (parseInt(_0x34c643(312)) / 9) + parseInt(_0x34c643(333)) / 10 * (-parseInt(_0x34c643(328)) / 11);
        if (_0x51176e === _0x562550) {
          break;
        } else {
          _0x30d54b.push(_0x30d54b.shift());
        }
      } catch (_0x3c3b62) {
        _0x30d54b.push(_0x30d54b.shift());
      }
    }
  }
})(_0x5c85, 528990);
const crypto = require(_0x46dd2f(284));
function MD5(_0x2ea37a) {
  const _0x38f2f1 = _0x46dd2f;
  const _0x2ed2fc = {
    HplcK: _0x38f2f1(285),
    PLSrv: _0x38f2f1(299)
  };
  return crypto[_0x38f2f1(281)](_0x2ed2fc[_0x38f2f1(326)])[_0x38f2f1(291)](_0x2ea37a)[_0x38f2f1(317)](_0x2ed2fc[_0x38f2f1(313)]);
}
function getSign(_0x33348a) {
  const _0x5a38a6 = _0x46dd2f;
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
      const _0x17d6dc = _0x3eee;
      return _0x5c0f56[_0x17d6dc(324)](_0x2fcf92, _0x128cbc);
    },
    qTJeO: function (_0x33ec67, _0x1e20c3) {
      const _0x5b8358 = _0x3eee;
      {
        return _0x5c0f56[_0x5b8358(320)](_0x33ec67, _0x1e20c3);
      }
    },
    sZvLP: function (_0x454ee3, _0x3e1b5a) {
      const _0x1f8dd0 = _0x3eee;
      return _0x5c0f56[_0x1f8dd0(320)](_0x454ee3, _0x3e1b5a);
    }
  };
  let _0x36d250 = _0x1c8f9d[_0x5a38a6(298)](MD5, _0x33348a);
  let _0x597094 = _0x36d250[_0x5a38a6(308)](0, 1);
  let _0x57c3ed = _0x36d250[_0x5a38a6(308)](-1, 1);
  let _0x5adcf6 = _0x1c8f9d[_0x5a38a6(293)](_0x597094, _0x57c3ed);
  return _0x1c8f9d[_0x5a38a6(298)](MD5, _0x1c8f9d[_0x5a38a6(302)](_0x33348a, _0x5adcf6));
}
async function getSig56(_0xce9d13 = {}, _0x42a89b = null, _0x2150e8 = _0x46dd2f(307), _0x18165f = _0x46dd2f(289), _0x2e6177) {
  const _0x570b71 = _0x46dd2f;
  const _0x285946 = {
    HDvzU: function (_0x275d65, _0x569709) {
      {
        return _0x275d65(_0x569709);
      }
    },
    rEGVb: _0x570b71(334),
    YWMtn: function (_0x47b77f, _0x9402ae) {
      return _0x47b77f !== _0x9402ae;
    },
    haXAr: _0x570b71(331),
    RMIkF: _0x570b71(296) + _0x570b71(315) + _0x570b71(292),
    jdwOb: _0x570b71(321)
  };
  if (!process[_0x570b71(301)][_0x570b71(290) + _0x570b71(322) + "ox"] || !process[_0x570b71(301)][_0x570b71(290) + _0x570b71(335)]) {
    return "";
  }
  const _0x247c07 = _0x285946[_0x570b71(332)](require, _0x285946[_0x570b71(282)]);
  if (!_0x285946[_0x570b71(305)](_0x247c07[_0x570b71(306)](__dirname)[_0x570b71(337)](_0x285946[_0x570b71(323)]), -1)) {
    return "";
  }
  let _0x321d3f = _0x285946[_0x570b71(314)];
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
                method: _0x285946[_0x570b71(329)],
                data: _0x3c9a71
              };
              _0x2c31d9[_0x570b71(330)][_0x570b71(295)] = _0x285946[_0x570b71(332)](getSign, JSON[_0x570b71(286)](_0x2c31d9[_0x570b71(309)]));
              let {
                data: _0x176176
              } = await axios[_0x570b71(325)](_0x2c31d9);
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
function _0x3eee(_0x45923c, _0x7b4546) {
  const _0x337a57 = _0x5c85();
  _0x3eee = function (_0x296336, _0x4170ed) {
    _0x296336 = _0x296336 - 281;
    let _0x695172 = _0x337a57[_0x296336];
    return _0x695172;
  };
  return _0x3eee(_0x45923c, _0x7b4546);
}
async function getSig68(_0x368c89 = {}, _0x2ffea8 = null, _0x341046 = _0x46dd2f(307), _0x598643 = _0x46dd2f(289), _0x507043) {
  const _0x4e8cd9 = _0x46dd2f;
  const _0x2f7dfe = {
    QrVmW: function (_0x41ac8f, _0x2e96b2) {
      {
        return _0x41ac8f(_0x2e96b2);
      }
    },
    LffHi: _0x4e8cd9(334),
    pPscH: function (_0x1a8c08, _0x573c74) {
      {
        return _0x1a8c08 !== _0x573c74;
      }
    },
    EpMNd: _0x4e8cd9(331),
    FPvyT: _0x4e8cd9(296) + _0x4e8cd9(315) + _0x4e8cd9(303),
    PpBHM: _0x4e8cd9(321)
  };
  if (!process[_0x4e8cd9(301)][_0x4e8cd9(290) + _0x4e8cd9(322) + "ox"] || !process[_0x4e8cd9(301)][_0x4e8cd9(290) + _0x4e8cd9(335)]) {
    return "";
  }
  const _0x63fde9 = _0x2f7dfe[_0x4e8cd9(327)](require, _0x2f7dfe[_0x4e8cd9(304)]);
  if (!_0x2f7dfe[_0x4e8cd9(311)](_0x63fde9[_0x4e8cd9(306)](__dirname)[_0x4e8cd9(337)](_0x2f7dfe[_0x4e8cd9(319)]), -1)) {
    return "";
  }
  let _0x53b1a3 = _0x2f7dfe[_0x4e8cd9(316)];
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
          method: _0x2f7dfe[_0x4e8cd9(287)],
          data: _0x397e71
        };
        _0x42e23f[_0x4e8cd9(330)][_0x4e8cd9(295)] = _0x2f7dfe[_0x4e8cd9(327)](getSign, JSON[_0x4e8cd9(286)](_0x42e23f[_0x4e8cd9(309)]));
        let {
          data: _0x145275
        } = await axios[_0x4e8cd9(325)](_0x42e23f);
        return _0x145275 ? _0x145275.s3 ? _0x145275.s3 : false : false;
      }
    }
  } catch (_0x1b8335) {
    {
      return false;
    }
  }
}
function _0x5c85() {
  const _0x47e007 = ["haXAr", "xxnXM", "request", "HplcK", "QrVmW", "11wTDJyp", "jdwOb", "headers", "smallfawn", "HDvzU", "7309580ZOTUhk", "path", "peed", "2306456HFfgKF", "indexOf", "createHash", "rEGVb", "62530JcXTIR", "crypto", "MD5", "stringify", "PpBHM", "917XRrGCA", "json", "kuaishou_s", "update", "6/sig56", "qTJeO", "3641560kVZOWj", "sign", "http://yi1", "3320564McVenT", "naQgS", "hex", "18342Rtemmh", "env", "sZvLP", "6/sig68", "LffHi", "YWMtn", "resolve", "get", "substr", "data", "841823kjZRsR", "pPscH", "27kHtVhS", "PLSrv", "RMIkF", "00.top:566", "FPvyT", "digest", "12dlfInR", "EpMNd", "vqUpG", "POST", "peed_openb"];
  _0x5c85 = function () {
    {
      return _0x47e007;
    }
  };
  return _0x5c85();
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
