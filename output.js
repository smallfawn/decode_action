//Sat Aug 24 2024 14:39:31 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
活动名称：新版玩一玩兑换奖品 5.17-8.31结束
活动入口：APP-我的-更多工具-玩一玩
活动建议：定时自行修改，奖票有效期2个月
活动变量：jd_wyw_exchange // 填写兑换值，指定兑换奖品，不填默认只兑换当前价值最高京豆奖品（查看打印兑换值）
          jd_wyw_notify  // 是否推送通知，默认不推送
          jd_wyw_pinFilter // 账号pin过滤，多个pin用@分隔，默认不过滤
          jd_wyw_autotx // 是否强制查询提现接口，兑换后提现接口403可以开启

cron:1 1 1 1 *

*/

const $ = new Env("\u65B0\u7248\u73A9\u4E00\u73A9\u5151\u6362\u5956\u54C1");
var iｉl = "jsjiami.com.v7";
const ii1II1 = iii1II;
function iii1II(_0x1f33cc, _0x21e58e) {
  const _0x427531 = Iii11l();
  return iii1II = function (_0x33cd04, _0x123bed) {
    _0x33cd04 = _0x33cd04 - 456;
    let _0x2861f1 = _0x427531[_0x33cd04];
    if (iii1II["UPLDqc"] === undefined) {
      var _0x5c2c7d = function (_0xe891) {
        const _0x4e69b3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x9fd1e0 = "",
          _0x53432d = "";
        for (let _0x268a99 = 0, _0x3728ca, _0x509b90, _0x50d22e = 0; _0x509b90 = _0xe891["charAt"](_0x50d22e++); ~_0x509b90 && (_0x3728ca = _0x268a99 % 4 ? _0x3728ca * 64 + _0x509b90 : _0x509b90, _0x268a99++ % 4) ? _0x9fd1e0 += String["fromCharCode"](255 & _0x3728ca >> (-2 * _0x268a99 & 6)) : 0) {
          _0x509b90 = _0x4e69b3["indexOf"](_0x509b90);
        }
        for (let _0x475659 = 0, _0x447363 = _0x9fd1e0["length"]; _0x475659 < _0x447363; _0x475659++) {
          _0x53432d += "%" + ("00" + _0x9fd1e0["charCodeAt"](_0x475659)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x53432d);
      };
      const _0x4d8817 = function (_0x53e042, _0x57be33) {
        let _0x2b800a = [],
          _0x4c34d4 = 0,
          _0xe1031a,
          _0x1be88d = "";
        _0x53e042 = _0x5c2c7d(_0x53e042);
        let _0x1bbd54;
        for (_0x1bbd54 = 0; _0x1bbd54 < 256; _0x1bbd54++) {
          _0x2b800a[_0x1bbd54] = _0x1bbd54;
        }
        for (_0x1bbd54 = 0; _0x1bbd54 < 256; _0x1bbd54++) {
          _0x4c34d4 = (_0x4c34d4 + _0x2b800a[_0x1bbd54] + _0x57be33["charCodeAt"](_0x1bbd54 % _0x57be33["length"])) % 256, _0xe1031a = _0x2b800a[_0x1bbd54], _0x2b800a[_0x1bbd54] = _0x2b800a[_0x4c34d4], _0x2b800a[_0x4c34d4] = _0xe1031a;
        }
        _0x1bbd54 = 0, _0x4c34d4 = 0;
        for (let _0x5606a0 = 0; _0x5606a0 < _0x53e042["length"]; _0x5606a0++) {
          _0x1bbd54 = (_0x1bbd54 + 1) % 256, _0x4c34d4 = (_0x4c34d4 + _0x2b800a[_0x1bbd54]) % 256, _0xe1031a = _0x2b800a[_0x1bbd54], _0x2b800a[_0x1bbd54] = _0x2b800a[_0x4c34d4], _0x2b800a[_0x4c34d4] = _0xe1031a, _0x1be88d += String["fromCharCode"](_0x53e042["charCodeAt"](_0x5606a0) ^ _0x2b800a[(_0x2b800a[_0x1bbd54] + _0x2b800a[_0x4c34d4]) % 256]);
        }
        return _0x1be88d;
      };
      iii1II["TaVqSg"] = _0x4d8817, _0x1f33cc = arguments, iii1II["UPLDqc"] = !![];
    }
    const _0x547e97 = _0x427531[0],
      _0x1d4ebd = _0x33cd04 + _0x547e97,
      _0x73f83e = _0x1f33cc[_0x1d4ebd];
    return !_0x73f83e ? (iii1II["DbeMlD"] === undefined && (iii1II["DbeMlD"] = !![]), _0x2861f1 = iii1II["TaVqSg"](_0x2861f1, _0x123bed), _0x1f33cc[_0x1d4ebd] = _0x2861f1) : _0x2861f1 = _0x73f83e, _0x2861f1;
  }, iii1II(_0x1f33cc, _0x21e58e);
}
(function (lI111l, liiii1, IIiiIl, l1ilIl, IIiiIi, l1ilIi, l11iIi) {
  return lI111l = lI111l >> 1, l1ilIi = "hs", l11iIi = "hs", function (ll11li, iliIlI, lI111I, IlilI, llIi1) {
    const l1ilII = iii1II;
    IlilI = "tfi", l1ilIi = IlilI + l1ilIi, llIi1 = "up", l11iIi += llIi1, l1ilIi = lI111I(l1ilIi), l11iIi = lI111I(l11iIi), lI111I = 0;
    const IliIII = ll11li();
    while (!![] && --l1ilIl + iliIlI) {
      try {
        IlilI = -parseInt(l1ilII(894, "Ke9f")) / 1 * (parseInt(l1ilII(848, "V]*!")) / 2) + parseInt(l1ilII(593, "#CHQ")) / 3 + -parseInt(l1ilII(642, "(6Ey")) / 4 + -parseInt(l1ilII(478, "s0rI")) / 5 + parseInt(l1ilII(893, "kI3E")) / 6 * (parseInt(l1ilII(529, "IN8v")) / 7) + parseInt(l1ilII(518, "0)E0")) / 8 * (-parseInt(l1ilII(506, "Yvpx")) / 9) + parseInt(l1ilII(912, "iK1m")) / 10 * (parseInt(l1ilII(553, "mPZ@")) / 11);
      } catch (II1l) {
        IlilI = lI111I;
      } finally {
        llIi1 = IliIII[l1ilIi]();
        if (lI111l <= l1ilIl) lI111I ? IIiiIi ? IlilI = llIi1 : IIiiIi = llIi1 : lI111I = llIi1;else {
          if (lI111I == IIiiIi["replace"](/[UhePMwIOxQAfJklpGNt=]/g, "")) {
            if (IlilI === iliIlI) {
              IliIII["un" + l1ilIi](llIi1);
              break;
            }
            IliIII[l11iIi](llIi1);
          }
        }
      }
    }
  }(IIiiIl, liiii1, function (liiiiI, II1i, illli1, I1lII1, Ill111, I1iI11, II11) {
    return II1i = "split", liiiiI = arguments[0], liiiiI = liiiiI[II1i](""), illli1 = `\x72\x65\x76\x65\x72\x73\x65`, liiiiI = liiiiI[illli1]("v"), I1lII1 = `\x6a\x6f\x69\x6e`, 1562082, liiiiI[I1lII1]("");
  });
}(390, 828538, Iii11l, 197), Iii11l) && (iｉl = ii1II1(691, "mGdK"));
const jdCookie = require("./jdCookie"),
  notify = require(ii1II1(588, "mPZ@")),
  common = require(ii1II1(884, "*Q[2")),
  {
    H5st
  } = require(ii1II1(667, "zf0Q"));
let taskThreads = process[ii1II1(481, "p)b3")][ii1II1(617, "Z4LF")] || "1";
const runInterval = process[ii1II1(535, "o#R%")][ii1II1(658, "uDE#")] || "1000",
  isNotify = (process[ii1II1(562, "TyxC")][ii1II1(900, "Vq6R")] || process[ii1II1(692, "JWyb")]["jd_wyw_Notify"]) === ii1II1(745, "iK1m"),
  pinFilter = (process[ii1II1(647, "uF$T")][ii1II1(589, "R52L")] || "")[ii1II1(609, "*Q[2")]("@"),
  exchange = process[ii1II1(920, "(6Ey")]["jd_wyw_exchange"] || "",
  autotx = process[ii1II1(679, "VX2i")]["jd_wyw_autotx"] === ii1II1(814, "eMJt"),
  linkId = "8u9Bktjo92LocBHib9PoHQ";
let hasGetBasicInfo = ![],
  business = "crazyPlay",
  cookiesArr = Object[ii1II1(916, "@$i%")](jdCookie)[ii1II1(792, "V]*!")](IIlII => jdCookie[IIlII])[ii1II1(786, "@$i%")](lIIiII => lIIiII);
function Iii11l() {
  const IIIIll = function () {
    return [...[iｉl, "hOxjsjiamtfiG.clfUomPI.hvJ7pAtQeNJMwlkMl==", "WOXdiYKL", "lCoFWQNcSW", "zSkRWRpdO8kJmW", "8lQGLWGM", "DMtdOM3dP2PdjSoCuCkfbG", "W6ldL04PW5S", "xfxdVuZdIG", "wSokWPRcNtDwWPLQnxrzWOWNW5ZcVG", "uKXoW6CzrW", "W6dcNt8VzW", "W7unFbWx", "W4VcL8kPWOdcLCkRuajDWQW4WQJdKmkqlgGygmkAdCo9nW4D", "W7pdQSkEWOniW4y", "W4BdJ1iPW4W", "W7VdRSkeWOu", "BSkjWRPoWPLKWRG", "oCkgW5W4tCo2WQLXB8oPr07dMCorCSkq", "CmoTW4SRya", "W6S1ia", "W67cQ8osbmkG", "WPHIfCowWQy", "mmkWW79dWQG", "qM3cQSkRW7K", "W7ldN0SvW4T5DIlcGSkNeSoZW7u", "v3VcGW", "4P+txEAmI+EnLUAjJowlRW", "5yAo5O+y5AAp6lEYWO0o", "WQr2kmoN", "vHGR", "4P2eWQtOHkxMN57OVkpOOONPGBdLIiBKUB/PL7JORktcOW", "dCoSWRW", "gtyaWOxdRHeQqIRdTq", "5ywD5O2j5AE76lAEWODB", "tentW7ScrdyhamodW6jTWQSVW4JcIgS", "pCocW4NcMG", "W7H8WRZdHSosW7a", "5yAR5OYN57IB5y+F5OMl5yMZ", "FflcVG", "l8oxWRpcTG", "DNNdTxBdR21k", "asaDWO3dVrGxftNdV8o7W5OYWQ4", "W6i0mq", "bvXrWRFcOGNcTW", "WQ3dKSkBW5ZcHaW4W7iyW4q", "bmkVyComW7xcHaGGW6VcQCkfcCkA", "W4VcJIaxW7hdQa", "eCoxWOBcJSoi", "WPeocaWs", "q8oBWQBcIsTsWRu", "W7uSe8oYWOnPbCo/WQGVWO8oWR3dIW", "EYTarXi", "W7pdHLWC", "xmobWQi", "W53dNKSkW58", "W5VcM8ownSkw", "ySktWR5gWPrLWQJcMSkkWQNcOceFDq", "u2lcGMxdOG", "qXviEZq", "x8ogW7RdVmksb2VdRfvzWOu", "zConW4q", "44cR5O+Y56sh44kt6k6C5yw76i+G5y6/hmoBW6rYWQOU", "jmk1WQScBW", "W7G5rJ0HkCkTob8CWO4", "WPmXW5ZcTYG", "W7S9rHK", "bmkAWP4exG", "5ywD5O2j5QUR5B60WODBCG", "eCkIW5jNWOG", "A8kEWOtdPMpdOCo+W6v6W50Z", "nmkMWRuBDq", "tenuW7y", "j8ozWQa", "ytPYvJu", "W7a7lSoD", "W5vVhvy", "W70Yi8o2WOj1", "5yEH5AYKwbtdHoEAK+IUS+wmKG", "vG4+W6FcULxcPSormNXlW5vy", "4P+SmUAoToEpUoAjK+wiPG", "W51HdG", "k8k5W6K", "ErruBt8", "5ys65O+N5AE16ls4vCkF", "zNe/WPBcMt7dQZtdPhW", "cMWVoSo6b8oEW6S", "lmksW6rMBhbtiG", "fCk4WQGXDmkgESk7WOXAuhDkW58VWPeLW5vkWRykjwOoW68mca7cJSooBZipW44", "E8ogW44", "W58Lu3b0WOdcVComWOZdI0ZcQmk8", "FCkrWRhdThC", "lmoxD0C6ewqpoW", "xSotwsJdVq", "zmoRwa", "Cx3cKxxdOW", "Dwy+WR4", "WOeoWRRcKrK", "DCo4AqtdJq", "WRPxWOlcG8oesYNcUq", "4P6FgEAmSEEnN+wMGoI0IU+9LG", "WOVdQfC", "oSkWW4nJsG", "WO3dKSkUW5tcKW", "W5VdTSk2WO59", "hSkJWRGK", "BmoLs8kt", "xXmZW6JcR1m", "5BED6kYN572g6lAU6l246lYz6kc65BYV5yIk6lsh5y65", "W6jMWR7dNSosW6FdJmkl", "svDQW4Sd", "xSoYnG", "W4j7cLrGWOjn", "vuDyW6y5vJOgkCorW4H2WQWGW5pcJfxdNN8nW6O", "ACoNs8kBWOxcRenFWPZcKSkuW5NcQmkHW6iflWtcRa", "W6m9oCoNWQrOp8oZ", "zComW5O5smoU", "zCo45yEF5O+B5yoCtW", "Fh3cVwhdVq", "WOL9nCoCWR8", "jCoTrL4z", "lmoxzfOHbq", "D8kJWRBdO8kskcTI", "r8kmWOjEWRC", "5O2B54645AES6lAxWP3cOW", "W4lcHCoJeCokW4iSvCk/WOVdKcODW6K7WO7dUSosWP/cTdpdOMy", "oCksWPn5", "W55BWP/dHmod", "W7pcICkRWOxcNW", "W74/rHeLmSk2iZCCWRzrkCkLwmoMW7H1W64", "ymkuWPC", "EvpcQSkEW5/dUG", "vCozm8kBWOG", "zxu/WRO", "W7G5pSo0WOrP", "uait", "C3xdRsa", "WRNdNSkaW4NcKXO", "o8oeWQ7cRCoFDbxcO8oPEMm", "WRW4W4jtW6aP", "seTkW5e+", "t8obAW", "WPfXfqCc", "zmodW5m", "Ff7cUCot", "W4ymi8odWQq", "rSkTWOXfWRW", "wMtcLe7dOr3cHCknkSoOsaSCzs1YpuqCWPJcNCoeBGJcJCkdWQhdOSo4cCkWWOiM", "w8omW6ddN8kjeG", "l8oqCK8w", "WQ8TW6ndW68YW5yvFCoZW7nbbtTyW7tdHCoPhx8G", "FCoUCbNdLa", "uZnZqIJcUrBdQ8kqemkgWRtcLXu", "gmk0WR8PzSosmSoXWR5jvITc", "FSoXzCkgWR4", "WPxdHwxdHWC", "tuaAWP7cNq", "5BAp5A6u5z+054U35Ocg"], ...function () {
      return [...["xhhcKg7dQqRcGCkkn8ogvLqYlsH2iWyu", "6lw95yYe5PwT5PwA", "WQbMBKL4", "W7WUvXKNpG", "5ywg5O216AoK5As16lALpG4", "aYCdWPtdR09rfcRdOSo5W5OPWRDYBKxdNSkLWPZdO1xcS8oWe1mKWRDZx8k0WRlcJfjsW63dImoBz1XNW5e5aLNdR8oWwwzfW5yDWPmbg8kMpxanqCo5W5uPFmkqWRFdStNcO23dICoU", "atu/WQVdIG", "W4v8hfi", "wXCUW5/cQvlcR8oaihXqW65tmSo7", "WRNdK8og", "lCoCWOnUaW", "W5VcTt8R", "W4/cNtCWBG", "WPRdO2vSiCkOW4WjybDAfW", "qmoOp8k5WQldLq", "5PEO5BMZ5A6m", "iSkZW6PbWQLOpmo4zrm6W63dOsZdUHu", "AfjfW5Ob", "WRW4W4zhW745W68CAmo4", "5y6L6ysd5B+C5zgU54QX5Ok9AmkPW5axbgqAW4X4W4G", "ztbrvb4", "WR9wWOy", "5ywg5O215AAG6lsHWROK", "s8kpWRPBWPbMWRxcMCk9WR/cVwO", "WOVdOL7dMcOa", "W7JcHG0lW7O", "cL9QWRtcUW", "zmkfWRPiWOfG", "W5dcL8kVWPNcImo2fKTf", "W7JdQSkEWRf9", "5B625yIx5P2e", "WRtORQVMSjlLPQlOT5uH4P+oWRy", "WPJdKxDsWQVcRaHcocKQoKC", "WRFdR8k8W6RcOG", "6lEp5y+L6l6J5RQSECkzW5y", "hmkeW6jbyG", "W7xdGCk9WRnz", "o+IhVEwiUEwfLEApOUE6PUwmQW", "CmomW50arCoUWR8TsConvvVdO8ohx8kRW4JdTmk9", "zSoHwSkwWQhcOfPzWO/cHmkiW4BcQ8kRW78gcrJcPCk0WRy", "W4VcKX0hW7ZdS11+gGSpkfFdGhNdM8oWnmk/WRddNG", "o8kBWPj4zrqHzSkvW7NcICkelq", "y8kTWRhdTmksidvS", "W6/cSXKAW6S", "E3JdTG", "WRjuWO7cMSoFwW", "zmoHuCkvWOFcRq", "omomWOxcLCoZ", "WO97cSo3WO8", "mCocAeS", "WRauWRFcKJKc", "W4ZNJjFPH7KG", "v8olWRhcPI9vWQnWl0fmWO4hW5JcOhFcIG5u", "g+IVO+AYPUwKK+I2Rv7INBJdMEAwO+wrIUw6SUAvLoAmIG", "gd8EWOFdUq", "WPjGA39BW7r/", "aZ4FWRhdNq", "WPPGFgHgW6K", "4P6LmUADJUEEREIUToAZU8kT", "F8kuWOldLW", "W7hdQSkvWObUW4TwWQWsWRjUWOhdSCkVv0pdOSoPDc3cOq", "5O+U5A6i5ys15OYQ5yg/WOpcRq", "W7RdNSk3WOvA", "aSkeW4rBWRq", "CM/dSMZdOwPjjSoHrSkJeeq", "ECootSkhWRe", "yLlcG8kpW4m", "W5KWo8oBWRi", "m8oZWPlcSSos", "tmklWORdHmks", "W5dcHCoslCkd", "D8onb8keWRG", "BxSS", "vmopWRhcIW", "E8oOvSkrWPy", "xIXx", "WReyWQ/cOY4cWQXyW7vyW4O", "W5rQW4ZcRJlcGhZcImoqgSoWrg1LWOJcGdFcLCkGCXldLdC", "ucPkydtcTsq", "y3NdPJD9", "n8kCW6O", "d8kKWR4qzq", "W6T4jMb1", "jdtcVG", "sSo5kmkPWRS", "W4dcUZe", "W4u8pZ0nWQGJcXtdUCovW7BcQq", "WPVcPrydW7ddULy", "5P2V57Ih5AYe5B6M5lYM", "eeztWPFcStJcUSkgfH0+W4tcTZPW", "pSoVDuqC", "ru4oWR7cRa", "W4hcUYq6uSoLW6WxBrnlg8o4", "wcDVvclcPH7dRmkldmkRWQdcJW", "mSkCW74", "5OIG5yIX5OYv542A", "5yY85O6k54+3", "E8omW4CRumoY", "iSkZW6PnWRv2oSoKtsmY", "d8kqW6ZdMSkb", "yKxcSSkzW5W", "vbmPW4FdRKJcTq", "r8opWQZcNHPiWQTM", "F17cUSoEW48Ptmo8pmoHW5OcW7HVnG", "4P6tWPFOH7BMNPhOVkBOOktPGlhLIQpKU7pPLRJOR4hdJa", "nsf7WO/cLG/dGcldSG", "44g75O2v56E+44cm6k6y5yE36i6P5y+BW4ShWQ1fWR/cLa", "lmorWODTla", "bfzxWRFcSrJcSmkqgq8+", "WRtdKSkvW44", "ECoqW4OZnMf2z8kZW4JcPW", "nSkKW7bSWQi", "WP5oWRJcJSo4", "oSonCW", "iCk3W6PP", "W7pdOmkx", "4P6/lUACPEIdSoATL+EJS+wKN+ErN1y", "vmo0pCkiWQNdGW", "hCk1W7voWO0", "tmo0W6TWmmkkjmodWOXctsS", "W4GAuaGM", "W4/cTd8uW4y", "ESkfWQnoWODSWPxdJCkzWQm", "WRSRW6VcUt8", "W6tcRHCiW5y", "dvjoWPC", "DCo+WPpcKJO", "FN/cRmk9W7q", "WQ3dJ8oqWPldMuO", "WOtdQftdMG", "5O+R546s5Asm6lANurm", "W5hcHSkQWPhcLmo1k1rmWRK", "ye7cPmoCW4Kt", "oSoBzKy1ggOmeCowWPBcOMi", "WP5ZcJeQW47dRmoKWONdVMdcV8kYW4ZdTaGM", "pmoxWQ7cOW", "Ff3dMHna", "WQvVp8oUWQZdSmkcWQldImojCmkBW5y", "B3uMWR4", "WO/dTCoTWOm", "W7LTWQ3dL8ogW7C", "W6bkW6ZdNMTjW7nSW6j7W7K8W4m", "n8kuW4TWWP4", "W5xcVGhcJMHFvmkVp0aFWQu8", "CNNdPW", "W43cLmoJjmkcWP9SrSkcWPhcMq", "Eg7dVtvRB1uvWO4iW6u6WRFcHbVcJCkbWRRdJ30xWQddI8oS", "W7L9WRpdT8ojW6C", "CM/dUha", "5OIr5yQl5O6B542R", "WQryWOJcM8oLrIhcRW", "W7VdIe8", "eSo/WOPWaq", "mSk3W7D8", "E0ZcGCk4W6S", "WQ8JlGOm", "v01A", "4P2aW5VMJkdNJjpLPkdOTRBVVOS"], ...function () {
        return ["W4JcMmoTiSkFWOLM", "WQDtpSoHWOK", "5P2I5BUa5AYV", "aNe/p8oOdq", "kwGaj8oT", "WPBdK2JdTra", "W5b9gL5IWP9tWOC8eCoSWPa", "WQnmWPlcHW", "jshcOeVdIg1KdSoG", "m8omyG", "j8kTWPyxsW", "D8oGWQ9hWO9Th8oBuG", "btWa", "lSk4W6rXsa", "xZbx", "5PYb5BIx5A2N", "WQTWbZOh", "o8oCWP1jgW", "W7m5jmowWOjZpCoKWPe0WQW", "tmokW5NdSSkI", "AvpcQCotW5WvtSo9lCoJW5i8W7q", "uNRcH07dVrRcGCkk", "5l6u5O+m5AE156sH5PsJ6yES5ywg5O225yY55yEq5O6H55MW5P276AMk5lMf6lkY5As45zkF", "WPldM8oQW4hdKCkNdNPDWRqLW7q", "afjxWPhcQW", "6lsQ5y+C5PsQ5PEZ", "eSkKfwdcGSo0s0f6ha", "C8opaSkFWQK", "fLa1gCoM", "ECk9WPJdJLy", "WOatW6RcUsO", "FCopvSkrWOm", "nCkKW7DYWQjqlmoMzq", "wCoSrCkMWPu", "o8kpWPBdKKJdVSo8", "bZWq", "q8oBWRxcJZXZWQnNgwfBWRi4W47cPG", "WO/dPKpdRcOhaCk2", "W5pcMmoJbCkj", "whFcL8k1W50", "AuxcVa", "rSo7WOZcPbG", "4PY+aUwfRoApOoE7IEwmTUAjH+wlTG", "WRpdMmkl", "ESooW4OQnG", "W69PWQNdKW", "BmkbWQbo", "hmoKWQ1Po8owC2G", "W7HKWRtdKCoc", "W4tcHSkPWRxcLmoJef9XWQ82", "WQFdRmogWOvz", "wCoaWQBcHJTfWQnW", "E8kAWPNdL0xdUSo8W7i", "WPNdKN8", "W5/cOtu8CSoUW7W", "xxVcO8o0W4K", "e8kPWRKLvCozomo7WPTpEJziWPOSWPbcW5HbWR5D", "W5FcS8kZWPlcHW", "BCoeWR4HdIX9msldG8kcma", "rX8kW4tcMq", "5OYE54+T5AAa6lsdWRz9", "tmozW7FdOmke", "WPrRE0HgW690kZVdP8oK", "WQHYpCoIWQJdRmkw", "e0zqWPO", "sxVcVLBdPG", "zmoCW4OVqCoPWQK", "lSoyWRe", "5ysk5O6r57IV5yYx5OIO5yQg", "aL5mWOFcRr4", "WONdICokWOddSq", "W4lcJCk5WOlcICo4gW", "yetcRq", "d20R", "vmomW6K", "WQ3dTCk5W4xcRW", "W5NcHCo2fCkv", "W7GZnW", "WPxdIeNdJXa", "5Rs75yMQ5yA65y20W7XHb1FdO8kE5OM355MtrEAzOEwNK+w2VEwfSddNJRNKUlFNJjK", "W47cKmoJaa", "W4/cMYWkW77dSLDRlaytp3y", "6ykn552c5O6a6yg8WPa3sG", "WPSgW7FcQYK", "hSkfWR0UFG", "W7SvamoCWPS", "5OYp54Yk5AAp6lEYWO0o", "5AEj56EN5PAa6ysR5lIX6lsD77Y35PsJ5RkX5yAg5O2p", "W7BdLfSuW415FclcV8kWnmoL", "ruFdOLtdLa", "z8o4W409Aa", "n8kZW6LPWRvGaCoVCdu", "ygqzWR7cNYldTsxdPNCbcde+W446hfaBWQldVq", "DCoCW7HMuxvnAbZdJmkwpg7dPSoyfmkgW78jW50qDmkKWRaPW7Pm", "W744d8oKWOL2dCoMWRuPWO0vWRddIgJcRa", "W5RcGJ0dW7ldR3rVcWq", "CSoJCCktWPG", "WQ3dN8ooWRldLLO", "uqeBW4ldT1RdP8kUeZapW7/cIG", "CSkNWQJdTSk0jqHMW57dLG", "WPW3W5nuW44", "6lsX5y+G5PwX5Pwm", "vHfiyae", "vKTt", "4P2eWQtMJ6/NJylLP4lOT6anfG", "mmk4WOqNtq", "thxcJvy", "W4lcH8oXjSkA", "W4tcHSkPWRZcH8oLgL5iWP0HW7BdQ8oBnh9FfmkB", "W4VcKZ8oW7BdV1f6fGOsyNNdGxFdGSkmzSkIWQ/dG3yKWOBdHbBdIJxcIJb/wHO", "WRVdPCkuW77cRa", "xCoqW4O7uq", "5ywJ5OYH5OIG5yQ8yCoX", "W53cGIyw", "WOK1W5xcSY8", "oaxdVq", "vmogW6ddNSkuhq", "wXm8W6VcVKNcSG", "WOn8zNDrW5PPnGpdPmokW5y", "WOK1kG", "gmk0WRu1", "5OMp5yI85O+v546E", "WRLDWR7cMmoiwbpcR8ofWPVdIGiEC0epW6CtW47dKc17WR8", "W7BdLfSuW415", "W4fVg1zOWOj6WOmMba", "bSogWOzuoW", "w34VWPRcMq", "m8oSyeuU", "l3DPWPBcHa", "WPWGaXax", "WOhdRKG", "WQiYW5y", "kmkhW6XMxq", "cL1qWPFcSr4", "WOv9aW", "4P+wgEAmSEEnN+AkOEwkSa", "W5VcTt8Rq8o0W6iA", "mos+NEAaPowiPti", "W4uQFs8J", "C3uLWR/cKYa", "W6FdLf8CW6G", "W5JcKmo5bCkFWOa", "W4lcKmkUWPNcGCo/eKHsWQGyW6i", "kwmymmoB", "5yAo5O+v6Akz5AAm6lEtuLy", "5BE+6k2f576E6lwq6l+w6l2d6koD5B+e5yM66lAi5y6J", "5AAX56EV5Pwa6ywW5lMt6lEB772U5Ps95RkP5ywP5OY3", "zSksprHMtKeJbCoDWRpcSG", "eSkEW6D5wG", "nrRdSSknWO9dzCosoCoOW7CS", "W7mlbSomWQS", "WOOXW6BcQJlcGG", "WOldQuy", "W6FdRmkbWQT9", "lmokyKaXeLiEkSka", "W7dcIsSJW7O"];
      }()];
    }()];
  }();
  Iii11l = function () {
    return IIIIll;
  };
  return Iii11l();
}
;
!cookiesArr[0] && ($["msg"]($[ii1II1(475, "iK1m")], ii1II1(711, "hzVP")), process[ii1II1(615, "Okyl")](1));
const rewardType_table = {
    1: "[\u7EA2\u5305]",
    2: ii1II1(632, "vMsl"),
    3: "[\u4EAC\u8C46]",
    4: ii1II1(858, "K84t")
  },
  rewardType_map = {
    "\u7EA2\u5305": 1,
    "\u4F18\u60E0\u5238": 2,
    "\u4EAC\u8C46": 3,
    "\u73B0\u91D1": 4
  };
!(async () => {
  const iliIll = ii1II1,
    i1iIlI = {
      "HJNNp": function (li111) {
        return li111();
      }
    };
  notify[iliIll(797, "7VwE")]({
    "title": $["name"]
  }), await i1iIlI[iliIll(534, "NMOK")](Main), isNotify && notify[iliIll(734, "iK1m")]() && (await notify[iliIll(559, "#CHQ")]());
})()[ii1II1(519, "#CHQ")](liI1lI => $["logErr"](liI1lI))[ii1II1(666, "#!t5")](() => $["done"]());
async function Main() {
  const llliIl = ii1II1,
    lIIiI1 = {
      "jNMWe": function (ll1I1, Ii1ili) {
        return ll1I1(Ii1ili);
      },
      "LTQEa": function (iI1Ii1, Ii1ill) {
        return iI1Ii1 !== Ii1ill;
      },
      "FYGsl": function (llIlI1, iI1IiI) {
        return llIlI1 !== iI1IiI;
      },
      "GwoSZ": function (IIlI1, i1iIli) {
        return IIlI1 >= i1iIli;
      },
      "ufaKo": "\u26A0 \u81EA\u5B9A\u4E49\u8FD0\u884C\u95F4\u9694\u65F6\u957F\u8BBE\u7F6E\u9519\u8BEF",
      "bdpOw": llliIl(517, "V]*!"),
      "fclOg": llliIl(716, "Okyl"),
      "SyBun": function (i1iIll, i1lliI) {
        return i1iIll !== i1lliI;
      },
      "tQAee": llliIl(526, "YfIQ"),
      "hmhUA": " \u279C "
    };
  try {
    try {
      const IllIlI = lIIiI1["jNMWe"](parseInt, taskThreads);
      IllIlI > 0 && lIIiI1[llliIl(805, "iK1m")](IllIlI, 1) && (taskThreads = IllIlI);
    } catch {
      taskThreads = 1;
    }
    taskThreads = Math[llliIl(598, "hzVP")](taskThreads, 3), $[llliIl(736, "mPZ@")] = null;
    if (runInterval) try {
      if (lIIiI1[llliIl(817, "vMsl")](llliIl(500, "uF$T"), llliIl(914, "vMsl"))) {
        const IiillI = lIIiI1[llliIl(843, "kq7W")](parseInt, runInterval);
        lIIiI1[llliIl(842, "mPZ@")](IiillI, 0) && ($[llliIl(764, "R52L")] = IiillI);
      } else {
        let li11l = illIl1[llliIl(544, "0)E0")](l1llII[llliIl(725, "eMJt")]);
        IilIll[llliIl(743, "YfIQ")](lI11Ii + llliIl(811, "p)b3") + li11l);
      }
    } catch {
      console[llliIl(887, "mPZ@")](lIIiI1[llliIl(672, "Yvpx")]);
    }
    console[llliIl(675, "[HwQ")](llliIl(521, "kqDk") + $[llliIl(856, "(6Ey")] + llliIl(826, "Okyl")), console[llliIl(779, "IN8v")](llliIl(574, "]Pw$")), console[llliIl(710, "V]*!")](llliIl(717, "o#R%") + (exchange ? llliIl(868, "u(Qf") + exchange : lIIiI1["bdpOw"]) + "]"), console[llliIl(738, "zf0Q")](llliIl(577, "K84t") + (isNotify ? "\u5F00\u542F" : "\u5173\u95ED") + "]"), console[llliIl(669, "JWyb")](llliIl(841, "u(Qf") + pinFilter["join"](", ") + "]"), console[llliIl(614, "SzV[")]("==========" + $[llliIl(462, "#CHQ")] + "\u53D8\u91CF\u72B6\u6001\u7ED3\u675F=========="), console[llliIl(828, "Z4LF")](""), $[llliIl(846, "YfIQ")] = [], await common[llliIl(849, "]Pw$")](taskThreads, cookiesArr, taskFnc), $[llliIl(815, "VX2i")] = ![], $["runEnd"] = ![];
    if ($["needRemoveCookieIndex"][llliIl(756, "VX2i")] > 0) {
      if (lIIiI1["fclOg"] !== llliIl(716, "Okyl")) return IliI1i[llliIl(674, "K84t")] - ll1ii["exchangeScore"];else cookiesArr = cookiesArr[llliIl(924, "7V5$")]((li11i, lliiIi) => !$["needRemoveCookieIndex"]["includes"](lliiIi + 1)), $["needRemoveCookieIndex"] = [];
    }
    const liI1l1 = notify["getMessage"]();
    liI1l1 && (lIIiI1[llliIl(723, "Vq6R")](llliIl(508, "mPZ@"), lIIiI1[llliIl(645, "JWyb")]) ? lI1IiI[llliIl(547, "IN8v")] = i1lI : console[llliIl(760, "7V5$")]("\n\uD83D\uDCE3 \u8FD0\u884C\u7ED3\u679C\n" + liI1l1["replace"](/：/g, lIIiI1[llliIl(863, "mGdK")])));
  } catch (IllIl1) {
    console["log"](llliIl(680, "YfIQ") + IllIl1);
  }
}
async function taskFnc(ll1Ii, ll1Il) {
  const iliIli = ii1II1,
    iiIi11 = {
      "ZjdAe": function (IllIil, ill1Ii) {
        return IllIil - ill1Ii;
      },
      "Jycwu": function (llIIl1, ill1Il) {
        return llIIl1 !== ill1Il;
      },
      "QPiOt": function (i1lll1, Ii1I1I) {
        return i1lll1 + Ii1I1I;
      },
      "qDfeA": iliIli(822, "#!t5"),
      "wQKSu": function (l1i1Ii, l1iI1) {
        return l1i1Ii + l1iI1;
      },
      "QhzTf": function (lliiI1, IiiI1) {
        return lliiI1 - IiiI1;
      },
      "NvNWh": "Content-Type",
      "rBUxY": function (lilII, IIIiI) {
        return lilII === IIIiI;
      },
      "nBuFY": iliIli(640, "IN8v"),
      "tiWKB": function (iii1i1, IllIll) {
        return iii1i1(IllIll);
      },
      "roZtn": function (i1lllI, llIIi1, iI1IlI) {
        return i1lllI(llIIi1, iI1IlI);
      },
      "ZaJVL": function (l1i1Il, ill1I1) {
        return l1i1Il * ill1I1;
      },
      "TtLoO": function (l1i1II, ili111) {
        return l1i1II > ili111;
      },
      "rOypN": function (Ii1I11, IllIli) {
        return Ii1I11 < IllIli;
      },
      "KBlHJ": iliIli(578, "*Q[2"),
      "FumRV": "poolBaseId",
      "SpxXj": iliIli(613, "kI3E"),
      "RVLaW": iliIli(727, "K84t"),
      "mCBIT": iliIli(895, "Yvpx"),
      "xEUeh": "\u7ED1\u5B9A\u624B\u673A\u53F7",
      "SqIAJ": iliIli(827, "Vq6R"),
      "tPnba": iliIli(917, "V]*!"),
      "GFlhO": iliIli(685, "IN8v"),
      "gDbgD": function (ii1Ii, ii1Il) {
        return ii1Ii(ii1Il);
      },
      "qJquB": function (l1iII, iI1Ill) {
        return l1iII * iI1Ill;
      },
      "GRZSs": iliIli(806, "Okyl"),
      "USBvd": function (lilI1, IIIi1) {
        return lilI1 !== IIIi1;
      },
      "XckFJ": iliIli(473, "^eRn"),
      "qVxXo": iliIli(918, "Yvpx"),
      "szBBI": "JWbWO",
      "UFTfl": iliIli(877, "ZOFA"),
      "MwYaI": function (i1llli, i1llll, iI1Ili) {
        return i1llli(i1llll, iI1Ili);
      },
      "rxkbq": function (llIIiI, iI1111) {
        return llIIiI * iI1111;
      },
      "uFhmG": function (IIIl1, ii1ii) {
        return IIIl1 !== ii1ii;
      },
      "tTEqk": iliIli(660, "E8WQ"),
      "QfdXz": iliIli(840, "@$i%"),
      "yzNmn": "wanyiwan_exchange_page",
      "zVScq": function (Iii1, I1I1lI) {
        return Iii1 == I1I1lI;
      },
      "EPVxt": function (ii1il, l1iIlI) {
        return ii1il !== l1iIlI;
      },
      "cIaoy": iliIli(684, "hzVP"),
      "eQGaf": iliIli(471, "u(Qf"),
      "ARSce": iliIli(768, "YJHG"),
      "ReBie": function (iI111I, IIIlI1) {
        return iI111I === IIIlI1;
      },
      "ZaAYr": function (i1lIiI, IiiIl) {
        return i1lIiI > IiiIl;
      },
      "JaTfT": iliIli(896, "#CHQ"),
      "qjAWf": iliIli(801, "Vq6R"),
      "AnRcd": iliIli(565, "A5h1"),
      "jfHOV": function (ii1l1l, l1lli1) {
        return ii1l1l !== l1lli1;
      },
      "XPQly": iliIli(800, "kqDk"),
      "upfTq": iliIli(533, "ZOFA"),
      "RPsPT": function (IiiIi, ii1l1i) {
        return IiiIi === ii1l1i;
      },
      "yBGIp": iliIli(580, "R52L"),
      "pswaB": iliIli(808, "mPZ@"),
      "DZEeP": iliIli(649, "(6Ey"),
      "JiuWk": iliIli(862, "kI3E"),
      "GiYCu": "0000",
      "ruWIh": "f2b1d",
      "dRxCZ": iliIli(610, "o#R%"),
      "DqNpe": iliIli(774, "ZOFA"),
      "lOekz": iliIli(906, "7VwE"),
      "jQNdD": iliIli(901, "mPZ@"),
      "MlkHB": iliIli(587, "iK1m"),
      "KWdNd": iliIli(763, "YfIQ"),
      "vUINV": iliIli(662, "0)E0"),
      "eWpvY": iliIli(812, "mGdK"),
      "yfYgH": iliIli(796, "[HwQ"),
      "IhpdI": function (l1iIl1, ii1iI) {
        return l1iIl1 >= ii1iI;
      },
      "xcqOA": iliIli(623, "#CHQ"),
      "aLpjH": iliIli(556, "7VwE"),
      "PYYTt": iliIli(585, "zf0Q"),
      "zgNak": function (IIIil, IIIii) {
        return IIIil !== IIIii;
      },
      "uRyOi": "xdyUw",
      "YywCh": function (iI111i, I1I1l1, iI111l) {
        return iI111i(I1I1l1, iI111l);
      },
      "NMXjI": function (i1lIii, III11i) {
        return i1lIii + III11i;
      },
      "zNCpM": function (i1lIil) {
        return i1lIil();
      },
      "pOgzN": iliIli(789, "hzVP"),
      "Pjvuy": function (III11l, llIl1i) {
        return III11l(llIl1i);
      },
      "vuZtM": function (llIl1l, IiiII) {
        return llIl1l < IiiII;
      },
      "JjLqb": function (Iiil) {
        return Iiil();
      },
      "kqXCF": function (IIIli, ii1i1, Iiii) {
        return IIIli(ii1i1, Iiii);
      },
      "RjbrB": function (llIl11, IIIll) {
        return llIl11 + IIIll;
      },
      "MtXfJ": function (I1I1il, l1llii) {
        return I1I1il * l1llii;
      },
      "GTSDD": function (liII1, I1I1ii) {
        return liII1 + I1I1ii;
      },
      "ShaDL": function (l1llil, IIIlIi) {
        return l1llil * IIIlIi;
      }
    };
  if ($["runEnd"]) return {
    "runEnd": !![]
  };
  const ill1II = iiIi11[iliIli(514, "7VwE")](decodeURIComponent, common["getCookieValue"](ll1Ii, iliIli(646, "*Q[2")));
  function i1llil(llIl1I, i1lIl1) {
    const illliI = iliIli;
    if (llIl1I[illliI(831, "uF$T")] <= 4) return llIl1I;else {
      const liIli1 = llIl1I[illliI(539, "V]*!")](0, 2),
        IIIlIl = llIl1I[illliI(539, "V]*!")](-2),
        IIIlI = Math["max"](iiIi11[illliI(650, "Ke9f")](iiIi11[illliI(621, "iK1m")](i1lIl1, liIli1[illliI(834, "#!t5")]), IIIlIl[illliI(853, "YfIQ")]), 0),
        IiiI = "*"[illliI(592, "A5h1")](IIIlI);
      return liIli1 + IiiI + IIIlIl;
    }
  }
  const i1llii = iiIi11[iliIli(554, "VX2i")](decodeURIComponent, ill1II),
    l1i1I1 = iiIi11[iliIli(560, "[HwQ")](i1llil, i1llii, 6),
    llIIil = "\u3010\u8D26\u53F7" + ll1Il + "\u3011" + l1i1I1 + "\uFF1A",
    llIIii = notify[iliIli(810, "hBUW")](ll1Il, ill1II);
  if (iiIi11["TtLoO"](pinFilter[iliIli(469, "o#R%")], 0) && (pinFilter[iliIli(748, "Z4LF")](ill1II) || pinFilter["includes"](iiIi11[iliIli(668, "zf0Q")](encodeURIComponent, ill1II)))) {
    llIIii[iliIli(625, "uF$T")](iliIli(757, "kqDk")), console[iliIli(882, "Vq6R")](llIIii["getInlineContent"]()), $[iliIli(867, "kq7W")][iliIli(793, "o#R%")](ll1Il);
    return;
  }
  const Ii1I1i = await common["getLoginStatus"](ll1Ii);
  if (!Ii1I1i && typeof Ii1I1i === "boolean") {
    if (iiIi11["ReBie"](iiIi11[iliIli(897, "(6Ey")], "iMEIM")) ii1ll[iliIli(538, "@$i%")](IliI1l + iliIli(641, "uF$T"));else {
      console["log"](llIIil + iliIli(596, "p)b3")), llIIii[iliIli(816, "A5h1")](iiIi11[iliIli(635, "K84t")]), $[iliIli(867, "kq7W")][iliIli(502, "Z4LF")](ll1Il);
      return;
    }
  }
  const llIIlI = common[iliIli(836, "kq7W")](ill1II);
  let Ii1I1l = ![],
    IIlIl = ![],
    ili11l,
    Iiilll,
    Iiilli,
    IIlIi = 0,
    ili11i,
    iiIi1l,
    li11I,
    lliiII,
    iiIi1i,
    liI1ll;
  await liI1li(iiIi11["yzNmn"]);
  if (ili11l) {
    if (iiIi11[iliIli(512, "vMsl")] === iliIli(511, "u(Qf")) IiiIii[iliIli(730, "eMJt")](IIlll + iliIli(630, "Z4LF")), liliI[iliIli(628, "#CHQ")](iliIli(486, "iK1m") + ll1lI?.["amount"] + "\uD83D\uDCB0"), l1iii = ![];else {
      const l1iIli = ili11l[iliIli(899, "E8WQ")] || [];
      ili11i = ili11l[iliIli(886, "^eRn")] || 0, Ii1I1l = ili11l["isLogin"] || ![];
      if (!Ii1I1l) return;
      let iIi1l = "";
      !hasGetBasicInfo && (hasGetBasicInfo = !![], l1iIli[iliIli(693, "#CHQ")]((i1lIlI, l1lliI) => {
        const ii1III = iliIli,
          I1I1iI = i1lIlI[ii1III(594, "]Pw$")] || "",
          IIIlII = i1lIlI[ii1III(583, "K84t")] || 0,
          iiIiI1 = i1lIlI[ii1III(459, "#!t5")] || 0,
          ili1Il = i1lIlI[ii1III(871, "p)b3")] || 0,
          ili1Ii = i1lIlI[ii1III(532, "uF$T")];
        iiIi11[ii1III(606, "zf0Q")](iiIiI1, 2) && (iIi1l += "[" + iiIi11[ii1III(550, "o#R%")](l1lliI, 1) + "]" + I1I1iI + "[" + ili1Il + "\u5956\u7968][" + (ili1Ii ? ii1III(497, "mGdK") : iiIi11["qDfeA"]) + ii1III(766, "7VwE") + IIIlII + "]\n");
      }), console[iliIli(882, "Vq6R")]("\u5151\u6362\u5956\u54C1\uFF1A(\u6392\u9664\u4F18\u60E0\u5238)\n" + iIi1l));
      console["log"](llIIil + iliIli(837, "SzV[") + ili11i + "\u5956\u7968");
      if (exchange) {
        let Iilll1 = l1iIli[iliIli(652, "TyxC")](ll11I => ll11I["assignmentId"] == exchange);
        if (!Iilll1) {
          console[iliIli(626, "a!*E")](llIIil + "\u5151\u6362\u503C\u53D8\u91CF\u586B\u5199\u9519\u8BEF\uFF0C\u8BF7\u586B\u5199\u6B63\u786E\u7684\u5151\u6362\u503C~"), $[iliIli(484, "OOYA")] = !![];
          return;
        } else {
          if (iiIi11[iliIli(591, "YfIQ")](iiIi11[iliIli(523, "mt6v")], iliIli(891, "7V5$"))) {
            const liIIl = I1llii[iliIli(543, "OOYA")](0, 2),
              IlI1lI = lilIll["slice"](-2),
              liIIi = l1i111["max"](iiIi11["ZjdAe"](iliII1 - liIIl["length"], IlI1lI[iliIli(904, "zf0Q")]), 0),
              IilllI = "*"[iliIli(477, "OOYA")](liIIi);
            return iiIi11["QPiOt"](iiIi11["wQKSu"](liIIl, IilllI), IlI1lI);
          } else {
            Iiilll = Iilll1[iliIli(655, "p)b3")], Iiilli = Iilll1[iliIli(825, "a!*E")], liI1ll = Iilll1[iliIli(474, "YJHG")];
            if (iiIi11[iliIli(697, "TyxC")](liI1ll, ili11i)) console[iliIli(568, "mt6v")](llIIil + iliIli(582, "kq7W"));else {
              if (iiIi11[iliIli(794, "R52L")](Iiilli, 4)) {
                if (iiIi11[iliIli(463, "uDE#")]("rhbQb", iliIli(888, "Okyl"))) {
                  if (li1Ii[iliIli(611, "7VwE")] <= 4) return IIII1I;else {
                    const l1lllI = Iii111[iliIli(861, "mGdK")](0, 2),
                      llliIi = l1l1II[iliIli(881, "YfIQ")](-2),
                      i1lIli = Iil1I1["max"](iiIi11[iliIli(664, "K84t")](Ii1iII, l1lllI[iliIli(831, "uF$T")]) - llliIi[iliIli(611, "7VwE")], 0),
                      i1lIll = "*"["repeat"](i1lIli);
                    return l1lllI + i1lIll + llliIi;
                  }
                } else await iiIi11[iliIli(781, "7V5$")](liI1li, "wanyiwan_withdraw"), await $["wait"](iiIi11["YywCh"](parseInt, iiIi11[iliIli(461, "Ke9f")]($[iliIli(909, "uDE#")] * 1, 500), 10)), await iiIi11[iliIli(769, "(6Ey")](ll1II);
              } else {
                if (iiIi11["USBvd"](iiIi11["pOgzN"], iliIli(457, "hBUW"))) while (IIlIi < 3 && !IIlIl) {
                  await iiIi11[iliIli(777, "0)E0")](liI1li, "wanyiwan_exchange"), await $[iliIli(818, "E8WQ")](iiIi11[iliIli(712, "Okyl")](parseInt, iiIi11[iliIli(742, "kqDk")]($["waitTime"], 1) + 500, 10));
                } else delete iii1lI[iliIli(921, "Yvpx")], delete i1ilI1[iliIli(558, "YJHG")][iiIi11["NvNWh"]];
              }
            }
          }
        }
      } else {
        let liIlii = l1iIli["filter"](llii1l => llii1l[iliIli(468, "0)E0")] == rewardType_map["\u4EAC\u8C46"])[iliIli(866, "IN8v")]((liIlil, llii1i) => {
          const i11iIl = iliIli;
          return iiIi11[i11iIl(528, "YfIQ")](llii1i[i11iIl(728, "VX2i")], liIlil[i11iIl(515, "o#R%")]);
        });
        for (let ll11il of liIlii) {
          if (!ll11il["hasStock"] || iiIi11[iliIli(803, "YfIQ")](ili11i, ll11il[iliIli(576, "Ke9f")])) continue;
          liI1ll = ll11il[iliIli(470, "(6Ey")], Iiilll = ll11il[iliIli(637, "0)E0")], Iiilli = ll11il[iliIli(586, "Yvpx")], await liI1li(iiIi11[iliIli(869, "kq7W")]), await $[iliIli(472, "TyxC")](parseInt(iiIi11[iliIli(795, "#!t5")]($[iliIli(542, "vMsl")] * 1, 500), 10));
        }
      }
      autotx && (await iiIi11[iliIli(499, "mt6v")](ll1II), await $[iliIli(724, "JWyb")](iiIi11[iliIli(491, "NMOK")](parseInt, iiIi11[iliIli(595, "a!*E")](iiIi11[iliIli(600, "Okyl")]($[iliIli(631, "E8WQ")], 1), 5000), 10)));
    }
  }
  if ($[iliIli(465, "A5h1")]) return {
    "runEnd": !![]
  };
  await $[iliIli(608, "Ke9f")](parseInt(iiIi11["GTSDD"](iiIi11[iliIli(809, "kI3E")]($["waitTime"], 1), 500), 10));
  async function ll1II() {
    const ll11ll = iliIli,
      iI1lIl = {
        "LIUST": function (iiIiII, Iili) {
          return iiIi11["rBUxY"](iiIiII, Iili);
        },
        "TqklQ": function (iIi11, Iil1) {
          return iIi11 + Iil1;
        },
        "DyFjA": iiIi11["qDfeA"],
        "ilIFx": iiIi11[ll11ll(464, "NMOK")]
      };
    iiIi1l = "", await iiIi11["tiWKB"](liI1li, ll11ll(910, "o#R%")), await $["wait"](iiIi11[ll11ll(873, "NMOK")](parseInt, iiIi11[ll11ll(505, "Okyl")]($["waitTime"], 1) + 500, 10));
    if (iiIi1l) {
      if ("qELSj" !== ll11ll(643, "mPZ@")) {
        const ll11lI = (iiIi1l[ll11ll(714, "*Q[2")] || [])[ll11ll(857, "s0rI")](llliI1 => llliI1[ll11ll(527, "Yvpx")] === 4 && llliI1[ll11ll(571, "ZOFA")] === 0 || llliI1[ll11ll(627, "mPZ@")] === 2);
        if (iiIi11[ll11ll(718, "Yvpx")](ll11lI[ll11ll(783, "R52L")], 0)) console["log"]("");
        for (i = 0; iiIi11["rOypN"](i, ll11lI[ll11ll(834, "#!t5")]); i++) {
          if (iiIi11[ll11ll(704, "K84t")](ll11ll(751, "mPZ@"), iiIi11[ll11ll(657, "p)b3")])) {
            if (iI1lIl[ll11ll(876, "]Pw$")](lIli1i[ll11ll(699, "uDE#")], !![])) lillIi[ll11ll(922, "kq7W")](ll11ll(537, "hzVP")), illIi1[ll11ll(659, "hzVP")](ll11ll(563, "mPZ@"));else {
              let llii11 = ii1ili[ll11ll(883, "s0rI")](liil1i["data"]);
              lI1lil[ll11ll(828, "Z4LF")](i1l1iI + "\u5151\u6362\u5931\u8D25: " + llii11);
            }
          } else {
            const Iillli = ll11lI[i];
            console[ll11ll(892, "E8WQ")](llIIil + ll11ll(903, "JWyb") + Iillli?.[ll11ll(852, "Z4LF")] + ll11ll(654, "K84t") + Iillli["id"] + "]"), lliiII = {
              "prizeType": 4,
              "business": business,
              "id": Iillli["id"],
              "poolBaseId": Iillli[iiIi11["FumRV"]],
              "prizeGroupId": Iillli[iiIi11["SpxXj"]],
              "prizeBaseId": Iillli[ll11ll(787, "TyxC")],
              "activityId": "1999"
            }, li11I = "", await liI1li("apCashWithDraw");
            if (li11I) {
              const ll11l1 = li11I[ll11ll(686, "OOYA")],
                ll111 = li11I["message"];
              if (ll11l1 === ll11ll(548, "Ke9f")) console["log"](llIIil + ll11ll(676, "s0rI")), llIIii[ll11ll(726, "R52L")](ll11ll(902, "uDE#") + Iillli?.[ll11ll(696, "Ke9f")] + "\uD83D\uDCB0");else {
                let llliII = ![],
                  iiIiIl = 0;
                if (ll111[ll11ll(735, "mt6v")]("\u4E0A\u9650") || ll111["includes"](iiIi11["RVLaW"]) || ll111[ll11ll(758, "OOYA")](iiIi11[ll11ll(620, "vMsl")]) || ll111["includes"](iiIi11[ll11ll(875, "TyxC")])) ll11ll(746, "s0rI") !== iiIi11["SqIAJ"] ? ii1iiI = lllilI[ll11ll(702, "K84t")] : (console[ll11ll(493, "hzVP")](llIIil + ll11ll(599, "YfIQ") + ll111 + ll11ll(844, "p)b3")), iiIi1i = {
                  "linkId": linkId,
                  "business": business,
                  "drawRecordId": Iillli["id"],
                  "poolId": Iillli[iiIi11["FumRV"]],
                  "prizeGroupId": Iillli[iiIi11[ll11ll(824, "hzVP")]],
                  "prizeId": Iillli[iiIi11[ll11ll(552, "0)E0")]],
                  "activityId": iiIi11["GFlhO"]
                }, await iiIi11[ll11ll(496, "YJHG")](liI1li, ll11ll(847, "Ke9f")), await $[ll11ll(721, "hzVP")](parseInt(iiIi11[ll11ll(872, "YfIQ")]($[ll11ll(487, "Z4LF")], 1) + 500, 10)));else ll111[ll11ll(516, "[HwQ")](iiIi11["GRZSs"]) ? (console["log"](llIIil + "\u274C \u63D0\u73B0\u5931\u8D25\uFF1A\u4E0A\u4E00\u7B14\u63D0\u73B0\u8FD8\u672A\u5B8C\u6210"), llliII = !![]) : console["log"](llIIil + ll11ll(749, "Z4LF") + ll111);
                while (llliII && iiIi11[ll11ll(573, "uF$T")](iiIiIl, 3)) {
                  if (iiIi11[ll11ll(776, "OOYA")](iiIi11[ll11ll(925, "Yvpx")], iiIi11[ll11ll(708, "Vq6R")])) {
                    await $[ll11ll(601, "[HwQ")](parseInt(Math[ll11ll(634, "iK1m")]() * 2000 + 95000, 10)), await liI1li(ll11ll(700, "R52L"));
                    const liIliI = li11I[ll11ll(770, "(6Ey")],
                      llii1I = li11I["message"];
                    if (liIliI === ll11ll(784, "#CHQ")) {
                      if (iiIi11[ll11ll(854, "TyxC")] === iiIi11["UFTfl"]) {
                        const l1lll1 = iI1lli[ll11ll(694, "@$i%")] || "",
                          IilI = ll1iI[ll11ll(501, "eMJt")] || 0,
                          liIlli = iI1lll[ll11ll(682, "mGdK")] || 0,
                          lil11 = l1lIll[ll11ll(802, "Okyl")] || 0,
                          Iillll = I1l1II["hasStock"];
                        liIlli !== 2 && (llIliI += "[" + iI1lIl["TqklQ"](I1l1I1, 1) + "]" + l1lll1 + "[" + lil11 + "\u5956\u7968][" + (Iillll ? ll11ll(510, "YfIQ") : iI1lIl[ll11ll(753, "kq7W")]) + "][\u5151\u6362\u503C:" + IilI + "]\n");
                      } else console[ll11ll(614, "SzV[")](llIIil + ll11ll(729, "u(Qf")), llIIii[ll11ll(864, "kI3E")](ll11ll(616, "(6Ey") + Iillli?.[ll11ll(564, "#CHQ")] + "\uD83D\uDCB0"), llliII = ![];
                    } else {
                      if (llii1I[ll11ll(546, "uDE#")](iiIi11[ll11ll(870, "Yvpx")])) iiIiIl++;else {
                        if (iiIi11[ll11ll(492, "SzV[")](ll11ll(602, "ZOFA"), ll11ll(707, "[HwQ"))) {
                          iIIl11["fix"](iI1lIl[ll11ll(833, "#CHQ")]), l1l1I1[ll11ll(688, "NMOK")](I1iIll[ll11ll(823, "Yvpx")]()), I1lliI["needRemoveCookieIndex"]["push"](llIllI);
                          return;
                        } else console["log"](llIIil + ll11ll(494, "IN8v") + liIliI), llliII = ![];
                      }
                    }
                  } else {
                    let Ilii1 = iiillI["getErrorMsg"](l1l111["data"]);
                    l1iIII[ll11ll(887, "mPZ@")](llI1I1 + ll11ll(467, "hzVP") + Ilii1);
                  }
                }
              }
              i !== ll11lI[ll11ll(663, "kq7W")] - 1 && (await $[ll11ll(490, "Yvpx")](parseInt(Math[ll11ll(636, "ZOFA")]() * 2000 + 5000, 10)));
            }
          }
        }
      } else {
        let ili1I1 = II11li[ll11ll(905, "Yvpx")](I1l11i[ll11ll(689, "TyxC")]);
        iIIiiI[ll11ll(722, "TyxC")](liiI1i + ll11ll(677, "A5h1") + ili1I1);
      }
    }
    await $["wait"](iiIi11[ll11ll(919, "Z4LF")](parseInt, iiIi11[ll11ll(907, "NMOK")]($[ll11ll(771, "]Pw$")], 1) + 500, 10));
  }
  async function IllIii(Iill, ili1II) {
    const l11iIl = iliIli,
      liIllI = {
        "tstGX": "\u26A0 \u81EA\u5B9A\u4E49\u8FD0\u884C\u95F4\u9694\u65F6\u957F\u8BBE\u7F6E\u9519\u8BEF"
      };
    try {
      if (iiIi11[l11iIl(524, "IN8v")](iiIi11[l11iIl(698, "SzV[")], iiIi11["QfdXz"])) switch (Iill) {
        case iiIi11[l11iIl(624, "SzV[")]:
          if (iiIi11[l11iIl(525, "*Q[2")](ili1II[l11iIl(466, "uF$T")], 0)) {
            if (iiIi11[l11iIl(850, "Ke9f")](l11iIl(772, "#!t5"), l11iIl(855, "YJHG"))) i1III["log"](l11iIl(911, "@$i%") + Ii1iIi);else {
              if (ili1II[l11iIl(880, "uDE#")] && iiIi11[l11iIl(804, "uF$T")](ili1II["data"][l11iIl(885, "Vq6R")], 0)) ili11l = ili1II[l11iIl(715, "hBUW")][l11iIl(788, "a!*E")];else {
                let iI1lI1 = common[l11iIl(713, "hBUW")](ili1II[l11iIl(540, "OOYA")]);
                console[l11iIl(530, "mGdK")](llIIil + "\u5151\u6362\u9875\u5931\u8D25: " + iI1lI1);
              }
            }
          } else {
            let I1I1li = common[l11iIl(513, "R52L")](ili1II);
            console[l11iIl(569, "7VwE")](llIIil + l11iIl(639, "@$i%") + I1I1li);
            return;
          }
          break;
        case iiIi11[l11iIl(579, "Okyl")]:
        case iiIi11[l11iIl(651, "u(Qf")]:
          if (ili1II[l11iIl(754, "Okyl")] == 0) {
            if (l11iIl(720, "Okyl") === iiIi11[l11iIl(522, "7V5$")]) {
              if (ili1II[l11iIl(725, "eMJt")] && iiIi11[l11iIl(832, "Ke9f")](ili1II["data"][l11iIl(495, "ZOFA")], 0)) {
                let {
                  rewardType: l1i11,
                  rewardName: IlI1li
                } = ili1II["data"][l11iIl(765, "zf0Q")];
                ili11i -= liI1ll;
                let IlI1ll = rewardType_table[l1i11] || "";
                console[l11iIl(567, "o#R%")](llIIil + l11iIl(607, "Vq6R") + IlI1ll + IlI1li + ", \u8FD8\u6709" + ili11i + "\u5956\u7968"), llIIii["insert"]("\u5151\u6362\u6210\u529F: " + IlI1ll + IlI1li);
              } else {
                if (l11iIl(633, "hBUW") === l11iIl(889, "eMJt")) {
                  let ll11l = common[l11iIl(915, "#CHQ")](ili1II[l11iIl(725, "eMJt")]);
                  console[l11iIl(922, "kq7W")](llIIil + l11iIl(733, "vMsl") + ll11l), IIlIi++, iiIi11[l11iIl(747, "kqDk")](IIlIi, 3) && (console["log"](llIIil + "\u5151\u6362\u5931\u8D25: \u91CD\u8BD5\u6B21\u6570\u8FC7\u591A\uFF0C\u653E\u5F03\u5151\u6362"), IIlIl = !![]);
                } else {
                  if (iiIi11[l11iIl(570, "@$i%")](li1i11["success"], !![])) il1i1i = lil111[l11iIl(755, "YfIQ")];else {
                    let liIll1 = i11ilI["getErrorMsg"](ii1ii1["data"]);
                    llllI[l11iIl(629, "u(Qf")](lllil1 + l11iIl(555, "a!*E") + liIll1);
                  }
                }
              }
            } else lIli11 = lllI1I["data"];
          } else {
            let iI1lII = common[l11iIl(482, "ZOFA")](ili1II);
            console["log"](llIIil + "\u5151\u6362\u5931\u8D25: " + iI1lII);
            return;
          }
          break;
        case iiIi11[l11iIl(638, "mt6v")]:
          if (iiIi11["rBUxY"](ili1II[l11iIl(785, "^eRn")], 0)) {
            if (ili1II[l11iIl(549, "E8WQ")] === !![]) iiIi1l = ili1II[l11iIl(678, "YJHG")];else {
              let ll11iI = common[l11iIl(719, "IN8v")](ili1II["data"]);
              console["log"](llIIil + "\u63D0\u73B0\u5931\u8D25: " + ll11iI);
            }
          } else {
            let l1i1I = common["getErrorMsg"](ili1II);
            console[l11iIl(488, "K84t")](llIIil + l11iIl(773, "OOYA") + l1i1I);
          }
          break;
        case iiIi11["qjAWf"]:
          if (iiIi11[l11iIl(752, "@$i%")](ili1II["code"], 0)) {
            if (iiIi11[l11iIl(479, "Yvpx")](ili1II["success"], !![])) {
              if (iiIi11[l11iIl(878, "7V5$")]("VstWF", iiIi11[l11iIl(460, "*Q[2")])) try {
                const I1I1ll = lI1Iii(i1li);
                I1I1ll >= 0 && (IliI11["waitTime"] = I1I1ll);
              } catch {
                i1l1lI[l11iIl(779, "IN8v")](liIllI["tstGX"]);
              } else li11I = ili1II["data"];
            } else {
              let lil1i = common[l11iIl(557, "kI3E")](ili1II[l11iIl(541, "#!t5")]);
              console[l11iIl(504, "(6Ey")](llIIil + "\u63D0\u73B0\u5931\u8D25: " + lil1i);
            }
          } else {
            if (iiIi11[l11iIl(813, "mGdK")](iiIi11["XPQly"], iiIi11[l11iIl(656, "K84t")])) {
              let liiiil = common["getErrorMsg"](ili1II);
              console["log"](llIIil + l11iIl(581, "A5h1") + liiiil);
            } else lilil[l11iIl(572, "R52L")](ll1ll + "\u274C \u63D0\u73B0\u5931\u8D25\uFF1A\u4E0A\u4E00\u7B14\u63D0\u73B0\u8FD8\u672A\u5B8C\u6210"), Illl11 = !![];
          }
          break;
        case "apRecompenseDrawPrize":
          if (ili1II["code"] === 0) {
            if (iiIi11[l11iIl(584, "p)b3")](ili1II[l11iIl(561, "zf0Q")], !![])) console[l11iIl(572, "R52L")]("\u2705 \u5151\u6362\u7EA2\u5305\u6210\u529F"), llIIii[l11iIl(780, "NMOK")](l11iIl(687, "*Q[2"));else {
              let lllIi = common[l11iIl(709, "7VwE")](ili1II["data"]);
              console["log"](llIIil + l11iIl(683, "o#R%") + lllIi);
            }
          } else {
            let lil1l = common["getErrorMsg"](ili1II);
            console[l11iIl(851, "p)b3")](llIIil + l11iIl(829, "p)b3") + lil1l);
          }
          break;
      } else lilIl1[l11iIl(509, "Vq6R")](i1l1ii[l11iIl(856, "(6Ey")], l11iIl(913, "vMsl")), i1l1[l11iIl(485, "p)b3")](1);
    } catch (Iliii) {
      iiIi11[l11iIl(673, "NMOK")](iiIi11["yBGIp"], l11iIl(671, "YJHG")) ? (i1l1ll = I1iIiI[l11iIl(653, "]Pw$")]((I1lIIi, l1i1i) => !lilIii["needRemoveCookieIndex"]["includes"](l1i1i + 1)), i1ilil[l11iIl(762, "hzVP")] = []) : console[l11iIl(750, "uF$T")](llIIil + l11iIl(923, "kI3E") + Iill + " \u8BF7\u6C42\u54CD\u5E94 " + (Iliii["message"] || Iliii));
    }
  }
  async function liI1li(I1iI1i) {
    const i11iIi = iliIli;
    if ($[i11iIi(821, "7V5$")]) return;
    let l1i1l = "",
      I1iI1l = null,
      illlil = null,
      Iliil = i11iIi(476, "A5h1"),
      I1lIIl = {},
      l1ilI1 = {};
    switch (I1iI1i) {
      case iiIi11[i11iIi(489, "vMsl")]:
        l1i1l = i11iIi(737, "Okyl"), I1iI1l = {
          "functionId": I1iI1i,
          "body": JSON[i11iIi(741, "(6Ey")]({
            "version": 1
          }),
          "rfs": i11iIi(775, "V]*!"),
          "appid": iiIi11[i11iIi(898, "iK1m")],
          "t": Date[i11iIi(731, "Yvpx")](),
          "client": iiIi11[i11iIi(744, "[HwQ")],
          "clientVersion": common[i11iIi(603, "0)E0")]()
        };
        break;
      case i11iIi(471, "u(Qf"):
        l1i1l = "https://api.m.jd.com/client.action", I1iI1l = {
          "functionId": I1iI1i,
          "body": JSON[i11iIi(835, "0)E0")]({
            "assignmentId": Iiilll,
            "type": Iiilli,
            "version": 1
          }),
          "rfs": iiIi11[i11iIi(767, "[HwQ")],
          "appid": iiIi11[i11iIi(670, "ZOFA")],
          "t": Date["now"](),
          "client": i11iIi(566, "0)E0"),
          "clientVersion": common[i11iIi(845, "zf0Q")]()
        };
        break;
      case iiIi11[i11iIi(819, "E8WQ")]:
        l1i1l = "https://api.m.jd.com/client.action", I1iI1l = {
          "functionId": I1iI1i,
          "body": JSON["stringify"]({
            "assignmentId": Iiilll,
            "type": Iiilli,
            "version": 1
          }),
          "rfs": iiIi11["GiYCu"],
          "appid": iiIi11["DZEeP"],
          "t": Date[i11iIi(507, "mGdK")](),
          "client": i11iIi(690, "p)b3"),
          "clientVersion": common["getLatestAppVersion"]()
        };
        break;
      case i11iIi(531, "uDE#"):
        l1ilI1 = {
          "appId": iiIi11[i11iIi(759, "hzVP")],
          "functionId": "superRedBagList",
          "appid": "activities_platform",
          "clientVersion": common[i11iIi(859, "uDE#")](),
          "client": "ios",
          "body": {
            "pageNum": 1,
            "pageSize": 400,
            "linkId": linkId,
            "associateLinkId": "",
            "business": business
          },
          "version": iiIi11[i11iIi(605, "@$i%")],
          "ua": $["UA"],
          "t": !![]
        }, I1lIIl = await H5st[i11iIi(908, "VX2i")](l1ilI1), l1i1l = iiIi11["DqNpe"], I1iI1l = I1lIIl["paramsData"];
        break;
      case iiIi11[i11iIi(740, "IN8v")]:
        l1ilI1 = {
          "appId": iiIi11[i11iIi(622, "(6Ey")],
          "functionId": iiIi11[i11iIi(705, "ZOFA")],
          "appid": i11iIi(778, "hBUW"),
          "clientVersion": common[i11iIi(807, "[HwQ")](),
          "client": iiIi11[i11iIi(661, "hBUW")],
          "body": {
            "linkId": linkId,
            "businessSource": "NONE",
            "base": lliiII
          },
          "version": iiIi11[i11iIi(597, "Vq6R")],
          "ua": $["UA"],
          "t": !![]
        }, I1lIIl = await H5st["getH5st"](l1ilI1), l1i1l = i11iIi(483, "^eRn"), I1iI1l = I1lIIl[i11iIi(619, "eMJt")];
        break;
      case iiIi11[i11iIi(874, "R52L")]:
        l1ilI1 = {
          "appId": i11iIi(545, "kq7W"),
          "functionId": i11iIi(799, "a!*E"),
          "appid": iiIi11[i11iIi(732, "Vq6R")],
          "clientVersion": common["getLatestAppVersion"](),
          "client": iiIi11["jQNdD"],
          "body": iiIi1i,
          "version": i11iIi(890, "^eRn"),
          "ua": $["UA"],
          "t": !![]
        }, I1lIIl = await H5st["getH5st"](l1ilI1), l1i1l = iiIi11[i11iIi(536, "uDE#")], I1iI1l = I1lIIl[i11iIi(590, "Ke9f")];
        break;
      default:
        console[i11iIi(703, "uDE#")](llIIil + i11iIi(865, "u(Qf") + I1iI1i);
        return;
    }
    const l1l1Il = {};
    I1iI1l && Object[i11iIi(498, "mt6v")](I1iI1l, l1l1Il);
    illlil && Object[i11iIi(618, "K84t")](illlil, l1l1Il);
    const lil1I = {
      "url": l1i1l,
      "method": Iliil,
      "headers": {
        "origin": "https://prodev.m.jd.com",
        "Referer": iiIi11[i11iIi(458, "Ke9f")],
        "User-Agent": llIIlI,
        "Cookie": ll1Ii,
        "content-type": iiIi11["yfYgH"],
        "accept": i11iIi(604, "Ke9f"),
        "x-rp-client": "h5_1.0.0"
      },
      "params": illlil,
      "data": I1iI1l,
      "timeout": 30000
    };
    Iliil === i11iIi(790, "YfIQ") && (delete lil1I[i11iIi(575, "ZOFA")], delete lil1I[i11iIi(612, "VX2i")][i11iIi(830, "#!t5")]);
    const l1l1Ii = 1;
    let IIIIlI = 0,
      l1i11l = null;
    while (IIIIlI < l1l1Ii) {
      IIIIlI > 0 && (await $["wait"](1000));
      const liiil1 = await common["request"](lil1I);
      if (!liiil1[i11iIi(761, "eMJt")]) {
        l1i11l = "" + llIIil + I1iI1i + i11iIi(838, "R52L") + liiil1["error"], IIIIlI++;
        continue;
      }
      if (!liiil1[i11iIi(782, "iK1m")]) {
        l1i11l = "" + llIIil + I1iI1i + i11iIi(860, "[HwQ"), IIIIlI++;
        continue;
      }
      await IllIii(I1iI1i, liiil1[i11iIi(665, "kq7W")]);
      break;
    }
    if (iiIi11[i11iIi(701, "Vq6R")](IIIIlI, l1l1Ii)) {
      if (iiIi11[i11iIi(648, "kq7W")] !== iiIi11[i11iIi(791, "u(Qf")]) {
        IiiIl1[i11iIi(879, "iK1m")](lIIil1 + i11iIi(520, "o#R%")), IIli1[i11iIi(681, "vMsl")](iiIi11[i11iIi(798, "(6Ey")]), II1liI[i11iIi(551, "Okyl")]["push"](IlI1i1);
        return;
      } else console["log"](l1i11l);
    }
  }
}
var version_ = "jsjiami.com.v7";
// prettier-ignore
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
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
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
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
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
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
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
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
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
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
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
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
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
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
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
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
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
      }, t => e(t));else if (this.isNode()) {
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
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
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
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}