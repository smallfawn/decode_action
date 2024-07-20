//Sat Jul 20 2024 15:18:43 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("\u4EAC\u4E1C\u8D44\u4EA7\u53D8\u52A8");
const _0x3697b0 = _0x5c05;
(function (_0x5b675b, _0x161e2a) {
  const _0x1a13ce = _0x5c05,
    _0x3389eb = _0x5b675b();
  while (!![]) {
    try {
      const _0x3591ad = parseInt(_0x1a13ce(787, "7TtC")) / 1 + parseInt(_0x1a13ce(699, "YCCD")) / 2 * (parseInt(_0x1a13ce(893, "Fxjz")) / 3) + -parseInt(_0x1a13ce(871, "UH7E")) / 4 * (-parseInt(_0x1a13ce(746, "6gr1")) / 5) + -parseInt(_0x1a13ce(648, "bBYg")) / 6 * (-parseInt(_0x1a13ce(694, "7TtC")) / 7) + -parseInt(_0x1a13ce(891, "RKOC")) / 8 + -parseInt(_0x1a13ce(763, "6u7m")) / 9 + parseInt(_0x1a13ce(613, "1*#O")) / 10 * (-parseInt(_0x1a13ce(553, "Aj^y")) / 11);
      if (_0x3591ad === _0x161e2a) break;else _0x3389eb["push"](_0x3389eb["shift"]());
    } catch (_0x32dfd8) {
      _0x3389eb["push"](_0x3389eb["shift"]());
    }
  }
})(_0x48fa, 400848);
const jdCookie = require("./jdCookie"),
  notify = require(_0x3697b0(946, "YCCD")),
  wpnotify = require(_0x3697b0(707, "pVBm")),
  common = require(_0x3697b0(700, "@h3)")),
  {
    H5st
  } = require(_0x3697b0(595, "31AT")),
  cryptoJS = require("crypto-js");
let taskThreads = process[_0x3697b0(859, "%t51")]["jd_bean_change__threads"] || "1";
const runInterval = process[_0x3697b0(824, "ql!a")][_0x3697b0(597, "hXpw")] || _0x3697b0(907, "R[Je"),
  isNotify = (process[_0x3697b0(796, "L%%Z")][_0x3697b0(935, "NUQ0")] || process[_0x3697b0(661, "RKOC")][_0x3697b0(804, "m@L7")]) === _0x3697b0(817, "JTaD"),
  prizeNotify = process[_0x3697b0(889, "m63!")][_0x3697b0(913, "9F7h")] === _0x3697b0(815, "$F^c"),
  WP_APP_TOKEN_ONE = process[_0x3697b0(796, "L%%Z")][_0x3697b0(985, "tI5i")] || "",
  pinFilter = (process[_0x3697b0(611, "Fxjz")][_0x3697b0(786, "cZ$J")] || "")["split"]("@"),
  ForFarm = process["env"][_0x3697b0(536, "9F7h")] === _0x3697b0(689, "lDP&"),
  XinForFarm = process[_0x3697b0(661, "RKOC")][_0x3697b0(952, "vUk5")] === _0x3697b0(982, "UH7E"),
  wanyiwan = process[_0x3697b0(632, "np5h")][_0x3697b0(928, "cYJf")] === _0x3697b0(751, "NUQ0"),
  ecard = process[_0x3697b0(889, "m63!")][_0x3697b0(851, "pVBm")] === "true",
  market = process[_0x3697b0(682, "L3NP")][_0x3697b0(776, "6u7m")] === _0x3697b0(507, "1*#O"),
  marketCard = process[_0x3697b0(626, "#MMQ")][_0x3697b0(574, "L%%Z")] === _0x3697b0(516, "ckgh"),
  phonebill = process[_0x3697b0(996, "bBYg")]["jd_bean_change_phonebill"] === _0x3697b0(875, "31AT"),
  Comment = process["env"][_0x3697b0(580, "]nie")] === "true",
  myhongbao = process[_0x3697b0(887, "cYJf")]["jd_bean_change_hongbao"] === _0x3697b0(670, "tI5i"),
  jingBean = process[_0x3697b0(634, "7gUF")][_0x3697b0(494, "Y)sZ")] === _0x3697b0(704, "isTL"),
  intPerSent = process[_0x3697b0(512, "jfg8")][_0x3697b0(916, "lDP&")] || "5",
  maxThreads = 1,
  bean_filter_min = 5,
  today = new Date($[_0x3697b0(622, "isTL")](_0x3697b0(703, "%t51")))[_0x3697b0(587, "YCCD")](),
  yesterday = today - 1440 * 60 * 1000,
  tomorrow = today + 1440 * 60 * 1000,
  dayAfterTomorrow = today + 48 * 60 * 60 * 1000,
  KEY_TOTAL = 0,
  KEY_TOMORROW = 1,
  KEY_DAY_AFTER_TOMORROW = 2;
let cookiesArr = Object[_0x3697b0(950, "hXpw")](jdCookie)["map"](_0x5e5d7b => jdCookie[_0x5e5d7b])[_0x3697b0(849, "9U$X")](_0x37555b => _0x37555b);
!cookiesArr[0] && ($["msg"]($["name"], _0x3697b0(753, "m@L7")), process[_0x3697b0(556, "@h3)")](1));
!(async () => {
  const _0x2b03fb = _0x3697b0;
  notify[_0x2b03fb(959, "@h3)")]({
    "title": $[_0x2b03fb(701, "isTL")]
  }), await Main();
})()[_0x3697b0(581, "Aj^y")](_0x174416 => $["logErr"](_0x174416))[_0x3697b0(995, "%t51")](() => $[_0x3697b0(899, "ql!a")]());
function _0x5c05(_0x308468, _0x366a9c) {
  const _0x48fa00 = _0x48fa();
  return _0x5c05 = function (_0x5c057e, _0x4de3a8) {
    _0x5c057e = _0x5c057e - 490;
    let _0x350ec0 = _0x48fa00[_0x5c057e];
    if (_0x5c05["vxgCTS"] === undefined) {
      var _0x474319 = function (_0x37555b) {
        const _0x174416 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x2cbb89 = "",
          _0x18b7d6 = "";
        for (let _0x2dc5c4 = 0, _0x340b83, _0x5b8937, _0x52ae01 = 0; _0x5b8937 = _0x37555b["charAt"](_0x52ae01++); ~_0x5b8937 && (_0x340b83 = _0x2dc5c4 % 4 ? _0x340b83 * 64 + _0x5b8937 : _0x5b8937, _0x2dc5c4++ % 4) ? _0x2cbb89 += String["fromCharCode"](255 & _0x340b83 >> (-2 * _0x2dc5c4 & 6)) : 0) {
          _0x5b8937 = _0x174416["indexOf"](_0x5b8937);
        }
        for (let _0x30c0c1 = 0, _0x507f0e = _0x2cbb89["length"]; _0x30c0c1 < _0x507f0e; _0x30c0c1++) {
          _0x18b7d6 += "%" + ("00" + _0x2cbb89["charCodeAt"](_0x30c0c1)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x18b7d6);
      };
      const _0x5e5d7b = function (_0x83c407, _0x1ad9e7) {
        let _0x2de442 = [],
          _0x28f2d6 = 0,
          _0x2af65e,
          _0x1aa84c = "";
        _0x83c407 = _0x474319(_0x83c407);
        let _0x3bf261;
        for (_0x3bf261 = 0; _0x3bf261 < 256; _0x3bf261++) {
          _0x2de442[_0x3bf261] = _0x3bf261;
        }
        for (_0x3bf261 = 0; _0x3bf261 < 256; _0x3bf261++) {
          _0x28f2d6 = (_0x28f2d6 + _0x2de442[_0x3bf261] + _0x1ad9e7["charCodeAt"](_0x3bf261 % _0x1ad9e7["length"])) % 256, _0x2af65e = _0x2de442[_0x3bf261], _0x2de442[_0x3bf261] = _0x2de442[_0x28f2d6], _0x2de442[_0x28f2d6] = _0x2af65e;
        }
        _0x3bf261 = 0, _0x28f2d6 = 0;
        for (let _0x448457 = 0; _0x448457 < _0x83c407["length"]; _0x448457++) {
          _0x3bf261 = (_0x3bf261 + 1) % 256, _0x28f2d6 = (_0x28f2d6 + _0x2de442[_0x3bf261]) % 256, _0x2af65e = _0x2de442[_0x3bf261], _0x2de442[_0x3bf261] = _0x2de442[_0x28f2d6], _0x2de442[_0x28f2d6] = _0x2af65e, _0x1aa84c += String["fromCharCode"](_0x83c407["charCodeAt"](_0x448457) ^ _0x2de442[(_0x2de442[_0x3bf261] + _0x2de442[_0x28f2d6]) % 256]);
        }
        return _0x1aa84c;
      };
      _0x5c05["lGEgKb"] = _0x5e5d7b, _0x308468 = arguments, _0x5c05["vxgCTS"] = !![];
    }
    const _0x2e801f = _0x48fa00[0],
      _0x5ced2b = _0x5c057e + _0x2e801f,
      _0x5ea0a3 = _0x308468[_0x5ced2b];
    return !_0x5ea0a3 ? (_0x5c05["ThNDKH"] === undefined && (_0x5c05["ThNDKH"] = !![]), _0x350ec0 = _0x5c05["lGEgKb"](_0x350ec0, _0x4de3a8), _0x308468[_0x5ced2b] = _0x350ec0) : _0x350ec0 = _0x5ea0a3, _0x350ec0;
  }, _0x5c05(_0x308468, _0x366a9c);
}
async function Main() {
  const _0xfa6dc5 = _0x3697b0;
  try {
    try {
      const _0x2cbb89 = parseInt(taskThreads);
      _0x2cbb89 > 0 && _0x2cbb89 !== 1 && (taskThreads = _0x2cbb89);
    } catch {
      taskThreads = 1;
    }
    taskThreads = Math["min"](taskThreads, maxThreads), $["waitTime"] = null;
    if (runInterval) try {
      const _0x18b7d6 = parseInt(runInterval);
      _0x18b7d6 >= 0 && ($[_0xfa6dc5(576, "7gUF")] = _0x18b7d6);
    } catch {
      console["log"](_0xfa6dc5(521, "cYJf"));
    }
    console[_0xfa6dc5(923, "6j8M")](_0xfa6dc5(762, "%t51") + $[_0xfa6dc5(750, "m63!")] + _0xfa6dc5(980, "NUQ0")), console[_0xfa6dc5(795, "9F7h")]("\u95F4\u9694\u65F6\u957F: [" + $[_0xfa6dc5(847, "6u7m")] / 1000 + "\u79D2]\u8FD0\u884C\u95F4\u9694\u65F6\u957F"), console[_0xfa6dc5(590, "Fxjz")](_0xfa6dc5(504, "YCCD") + (ForFarm ? "\u5F00\u542F" : "\u5173\u95ED") + _0xfa6dc5(1002, "YCCD") + (XinForFarm ? "\u5F00\u542F" : "\u5173\u95ED") + "]"), console[_0xfa6dc5(517, "L%%Z")]("\u8BDD\u8D39\u79EF\u5206: [" + (phonebill ? "\u5F00\u542F" : "\u5173\u95ED") + _0xfa6dc5(858, "Fxjz") + (marketCard ? "\u5F00\u542F" : "\u5173\u95ED") + "]"), console[_0xfa6dc5(524, "qb()")](_0xfa6dc5(818, "RKOC") + (Comment ? "\u5F00\u542F" : "\u5173\u95ED") + _0xfa6dc5(868, "RKOC") + (ecard ? "\u5F00\u542F" : "\u5173\u95ED") + "]"), console[_0xfa6dc5(909, "Db@M")](_0xfa6dc5(775, "pVBm") + (myhongbao ? "\u5F00\u542F" : "\u5173\u95ED") + "],\u73A9\u4E00\u73A9\u5956\u7968: [" + (wanyiwan ? "\u5F00\u542F" : "\u5173\u95ED") + "]"), console[_0xfa6dc5(745, "JTaD")](_0xfa6dc5(754, "6u7m") + (jingBean ? "\u5F00\u542F" : "\u5173\u95ED") + _0xfa6dc5(855, "@h3)") + (market ? "\u5F00\u542F" : "\u5173\u95ED") + "]"), console[_0xfa6dc5(637, "R[Je")](_0xfa6dc5(988, "#MMQ") + common[_0xfa6dc5(708, "lDP&")]() + "]"), console["log"](_0xfa6dc5(930, "m@L7") + (isNotify ? "\u5F00\u542F" : "\u5173\u95ED") + "]" + (isNotify ? _0xfa6dc5(895, "isTL") + intPerSent + "]," : "")), console[_0xfa6dc5(781, "jfg8")](_0xfa6dc5(927, "%t51") + (prizeNotify ? "\u5F00\u542F" : "\u5173\u95ED") + _0xfa6dc5(606, "$F^c") + (WP_APP_TOKEN_ONE ? "\u5F00\u542F" : "\u5173\u95ED") + "]"), console[_0xfa6dc5(535, "tI5i")]("\u8D26\u53F7\u8FC7\u6EE4: [" + pinFilter[_0xfa6dc5(829, "Db@M")](", ") + "]"), console[_0xfa6dc5(726, "^zY4")](_0xfa6dc5(894, "JTaD") + $[_0xfa6dc5(615, "#MMQ")] + _0xfa6dc5(822, "JTaD")), console[_0xfa6dc5(808, "9U$X")](""), await common[_0xfa6dc5(657, "L3NP")](taskThreads, cookiesArr, taskFnc), $[_0xfa6dc5(668, "6u7m")] = ![];
  } catch (_0x2dc5c4) {
    console[_0xfa6dc5(990, "ql!a")]("\u274C \u811A\u672C\u8FD0\u884C\u9047\u5230\u4E86\u9519\u8BEF\n" + _0x2dc5c4);
  }
}
async function taskFnc(_0x340b83, _0x5b8937) {
  const _0x1b31ad = _0x3697b0;
  if ($[_0x1b31ad(956, "m63!")]) return {
    "runEnd": !![]
  };
  const _0x52ae01 = decodeURIComponent(common["getCookieValue"](_0x340b83, _0x1b31ad(1000, "Lg$N"))),
    _0x30c0c1 = _0x1b31ad(983, "L%%Z") + _0x5b8937 + "\u3011" + _0x52ae01 + "\uFF1A",
    _0x507f0e = notify[_0x1b31ad(793, "uenW")](_0x5b8937, _0x52ae01);
  if (pinFilter["length"] > 0 && (pinFilter[_0x1b31ad(942, "Ioks")](_0x52ae01) || pinFilter[_0x1b31ad(650, "qb()")](encodeURIComponent(_0x52ae01)))) {
    _0x507f0e["fix"](_0x1b31ad(971, "Ioks")), console["log"](_0x507f0e[_0x1b31ad(819, "9U$X")]());
    return;
  }
  const _0x83c407 = await common[_0x1b31ad(510, "7gUF")](_0x340b83);
  if (!_0x83c407 && typeof _0x83c407 === _0x1b31ad(919, "UH7E")) {
    console[_0x1b31ad(714, "ckgh")](_0x30c0c1 + _0x1b31ad(663, "hXpw")), _0x507f0e["fix"](_0x1b31ad(640, "9F7h"));
    return;
  }
  const _0x1ad9e7 = common[_0x1b31ad(797, "bBYg")](_0x52ae01);
  let _0x2de442 = [],
    _0x28f2d6 = [],
    _0x2af65e = {
      "total": [0, 0, 0],
      "common": [0, 0, 0],
      "jdapp": [0, 0, 0],
      "lite": [0, 0, 0],
      "minip": [0, 0, 0]
    },
    _0x1aa84c = 0,
    _0x3bf261 = {
      "today_in": 0,
      "today_out": 0,
      "yesterday_in": 0,
      "yesterday_out": 0,
      "detail": {}
    };
  await _0x573313(), await $[_0x1b31ad(557, "6u7m")](parseInt($["waitTime"] * 1 + 500, 10)), await _0x5dfc07(), await $[_0x1b31ad(531, "7TtC")](parseInt($[_0x1b31ad(696, "NUQ0")] * 1 + 500, 10));
  ForFarm && (await _0x16d089(), await $[_0x1b31ad(908, "pVBm")](parseInt($[_0x1b31ad(961, "ql!a")] * 1 + 500, 10)));
  XinForFarm && (await _0xbee007(), await $[_0x1b31ad(589, "NUQ0")](parseInt($[_0x1b31ad(610, "Fxjz")] * 1 + 500, 10)));
  ecard && (await _0x2bad2e(), await $["wait"](parseInt($[_0x1b31ad(777, "1*#O")] * 1 + 500, 10)));
  marketCard && (await _0x84a89(), await $["wait"](parseInt($[_0x1b31ad(901, "Lg$N")] * 1 + 500, 10)));
  wanyiwan && (await _0x8e085f(), await $["wait"](parseInt($[_0x1b31ad(873, "#b$z")] * 1 + 500, 10)));
  phonebill && (await _0xe1165e(), await $[_0x1b31ad(705, "^zY4")](parseInt($[_0x1b31ad(966, "np5h")] * 1 + 500, 10)));
  market && (await _0x4a0213(), await $[_0x1b31ad(805, "keCX")](parseInt($[_0x1b31ad(832, "Jc(p")] * 1 + 500, 10)));
  Comment && (await _0x32264e(), await $[_0x1b31ad(529, "jfg8")](parseInt($[_0x1b31ad(730, "aXJL")] * 1 + 500, 10)));
  myhongbao && (await _0x5168b2(), await $["wait"](parseInt($[_0x1b31ad(546, "%t51")] * 1 + 500, 10)));
  jingBean && (await _0x376813(), await $["wait"](parseInt($[_0x1b31ad(770, "JTaD")] * 1 + 500, 10)));
  if (_0x2de442 && _0x2de442[_0x1b31ad(925, "Ioks")] > 0) {
    console[_0x1b31ad(674, "RKOC")]("" + _0x30c0c1), console[_0x1b31ad(909, "Db@M")]("" + _0x2de442["join"]("\n"));
    const _0x2d826a = _0x1b31ad(945, "bBYg"),
      _0x2ae955 = "\n\u4E0B\u65B9\u8BE6\u60C5\n";
    _0x507f0e[_0x1b31ad(780, "uenW")]("" + _0x2ae955 + _0x2de442[_0x1b31ad(681, "NUQ0")]("\n") + _0x2d826a), console[_0x1b31ad(922, "$F^c")](_0x1b31ad(876, "uenW"));
  }
  prizeNotify && _0x2de442 && _0x2de442["length"] > 0 && (await notify[_0x1b31ad(680, "YCCD")]($["name"] + "\u901A\u77E5", "\u3010\u4EAC\u4E1C\u8D26\u53F7\u3011" + _0x52ae01 + "\n" + _0x2de442[_0x1b31ad(500, "#b$z")]("\n")));
  if (WP_APP_TOKEN_ONE && _0x2de442 && _0x2de442[_0x1b31ad(835, "ql!a")] > 0) try {
    await wpnotify[_0x1b31ad(676, "7TtC")](_0x1b31ad(491, "6u7m"), "" + _0x2de442[_0x1b31ad(562, "@h3)")]("\n"), "" + _0x52ae01);
  } catch (_0x13a02f) {
    _0x13a02f instanceof TypeError ? console[_0x1b31ad(523, "$F^c")](_0x1b31ad(779, "$F^c")) : console[_0x1b31ad(635, "bBYg")](_0x1b31ad(515, "cZ$J"));
  }
  intPerSent > 0 && (_0x5b8937 % intPerSent == 0 || _0x5b8937 === cookiesArr[_0x1b31ad(656, "cZ$J")]) && isNotify && notify[_0x1b31ad(541, "m@L7")]() && (await notify[_0x1b31ad(848, "pVBm")](), notify[_0x1b31ad(789, "NUQ0")]());
  if ($[_0x1b31ad(785, "cYJf")]) return {
    "runEnd": !![]
  };
  await $[_0x1b31ad(755, "Lg$N")](parseInt($[_0x1b31ad(884, "$F^c")] * 1 + 500, 10));
  async function _0x448457(_0x473e05) {
    const _0x30bb38 = _0x1b31ad;
    _0x2de442[_0x30bb38(970, "jfg8")](_0x473e05);
  }
  async function _0x573313() {
    const _0x3594b8 = _0x1b31ad,
      _0x2ae520 = {
        "url": _0x3594b8(912, "jfg8"),
        "method": _0x3594b8(734, "Jc(p"),
        "headers": {
          "Accept": "application/json, text/plain",
          "accept-encoding": _0x3594b8(760, "cZ$J"),
          "content-type": _0x3594b8(655, "9F7h"),
          "Cookie": _0x340b83,
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 Edg/106.0.1370.42"
        },
        "timeout": 30000
      },
      _0x1917e3 = 3;
    let _0x11b5ec = 0;
    while (_0x11b5ec < _0x1917e3) {
      _0x11b5ec > 0 && (await $["wait"](1000));
      const _0x523fbc = await common[_0x3594b8(918, "m@L7")](_0x2ae520);
      if (_0x523fbc[_0x3594b8(883, "ql!a")]) {
        let _0x419169 = _0x523fbc[_0x3594b8(883, "ql!a")];
        if (_0x419169[_0x3594b8(602, "]nie")] === "0") {
          if (_0x419169[_0x3594b8(955, "6u7m")]) {
            if (_0x419169["data"] && _0x419169[_0x3594b8(665, "uenW")][_0x3594b8(772, "aXJL")] && _0x419169["data"][_0x3594b8(720, "7gUF")][_0x3594b8(920, "6j8M")]) {
              let _0xc26cbf = _0x419169[_0x3594b8(527, "7gUF")][_0x3594b8(559, "np5h")][_0x3594b8(534, "cZ$J")];
              _0x448457("\u3010\u8D26\u53F7\u540D\u79F0\u3011" + _0xc26cbf[_0x3594b8(999, "Jc(p")]), _0x419169[_0x3594b8(530, "]nie")]["userInfo"][_0x3594b8(645, "@h3)")] == 1 ? _0x448457(_0x3594b8(841, "^zY4") + _0xc26cbf["levelName"] + "\uFF0C" + _0xc26cbf[_0x3594b8(526, "Lg$N")] + "\u5206") : _0x448457(_0x3594b8(733, "^zY4") + _0xc26cbf["levelName"] + "\uFF0C" + _0xc26cbf[_0x3594b8(949, "ckgh")] + "\u5206"), _0x448457(_0x3594b8(886, "ql!a") + _0x419169[_0x3594b8(692, "R[Je")][_0x3594b8(592, "6j8M")][_0x3594b8(974, "31AT")] + "\u4EAC\u8C46");
            }
            if (_0x419169[_0x3594b8(885, "m63!")] && _0x419169[_0x3594b8(585, "1*#O")][_0x3594b8(636, "L3NP")] && _0x419169[_0x3594b8(593, "YCCD")][_0x3594b8(560, "uenW")]["baitiaoInfo"]) {
              let _0x563eb6 = _0x419169[_0x3594b8(604, "Jc(p")][_0x3594b8(902, "RKOC")]["baitiaoInfo"];
              if (_0x563eb6[_0x3594b8(561, "^zY4")] === "0") {
                let _0x4da011 = parseFloat(_0x563eb6[_0x3594b8(672, "7TtC")]) || 0,
                  _0x281ffb = parseFloat(_0x563eb6[_0x3594b8(552, "JTaD")]) || 0,
                  _0x1326df = _0x4da011 + _0x281ffb;
                _0x448457(_0x3594b8(662, "1*#O") + _0x4da011["toFixed"](2) + _0x3594b8(761, "NUQ0") + _0x281ffb["toFixed"](2) + _0x3594b8(678, "^zY4") + _0x1326df[_0x3594b8(932, "Ioks")](2) + "\u5143");
              }
            }
          }
        }
      }
      break;
    }
  }
  async function _0x5dfc07(_0x313e7d = 1) {
    const _0x20787e = _0x1b31ad;
    params = {
      "page": _0x313e7d
    };
    const _0x3f1f4d = {
        "url": _0x20787e(963, "@h3)"),
        "method": _0x20787e(607, "^zY4"),
        "headers": {
          "Accept": "application/json, text/plain",
          "accept-encoding": _0x20787e(596, "7TtC"),
          "content-type": _0x20787e(646, "7gUF"),
          "Cookie": _0x340b83,
          "User-Agent": _0x1ad9e7
        },
        "params": params,
        "timeout": 30000
      },
      _0x4d7143 = 3;
    let _0x3921ca = 0;
    while (_0x3921ca < _0x4d7143) {
      _0x3921ca > 0 && (await $["wait"](1000));
      const _0x22da84 = await common[_0x20787e(987, "#MMQ")](_0x3f1f4d);
      if (_0x22da84[_0x20787e(600, "Ioks")]) {
        let _0x5e9ac2 = _0x22da84[_0x20787e(530, "]nie")];
        if (_0x5e9ac2[_0x20787e(687, "6j8M")] === "0" && _0x5e9ac2[_0x20787e(857, "bBYg")]) {
          let _0x20d3fe = _0x5e9ac2?.[_0x20787e(765, "7gUF")] || [],
            _0x148d1e = _0x20d3fe?.["length"] ? !![] : ![];
          for (let _0x29a467 of _0x20d3fe) {
            let _0x2a4172 = Number(_0x29a467[_0x20787e(989, "cZ$J")]),
              _0x204f7e = new Date(_0x29a467[_0x20787e(898, "jfg8")])[_0x20787e(811, "]nie")]();
            if (_0x204f7e < yesterday) _0x148d1e = ![];else {
              if (_0x204f7e < today) _0x2a4172 >= 0 ? _0x3bf261[_0x20787e(842, "$F^c")] += _0x2a4172 : _0x3bf261[_0x20787e(605, "7gUF")] += _0x2a4172;else {
                if (_0x2a4172 >= 0) {
                  let _0x4bb22c = _0x29a467["eventMassage"],
                    _0x152a0f = _0x4bb22c?.[_0x20787e(814, "Lg$N")](/\[(.*)\]/);
                  _0x152a0f && (_0x4bb22c = _0x152a0f[1]);
                  if (_0x4bb22c?.[_0x20787e(839, "1*#O")](_0x20787e(629, "L%%Z"))) continue;
                  _0x3bf261[_0x20787e(577, "]nie")] += _0x2a4172;
                  if (!_0x3bf261["detail"][_0x4bb22c]) _0x3bf261[_0x20787e(993, "%t51")][_0x4bb22c] = 0;
                  _0x3bf261[_0x20787e(698, "L%%Z")][_0x4bb22c] += _0x2a4172;
                } else _0x3bf261["today_out"] += _0x2a4172;
              }
            }
          }
          _0x148d1e ? await _0x5dfc07(_0x313e7d + 1) : (_0x448457(_0x20787e(854, "^zY4") + _0x3bf261[_0x20787e(915, "9F7h")] + _0x20787e(969, "bBYg") + _0x3bf261[_0x20787e(658, "m63!")] + "\u4EAC\u8C46"), _0x448457(_0x20787e(892, "keCX") + _0x3bf261[_0x20787e(675, "L%%Z")] + _0x20787e(738, "cZ$J") + _0x3bf261[_0x20787e(571, "Lg$N")] + "\u4EAC\u8C46"));
        }
      }
      break;
    }
  }
  async function _0xe1165e() {
    const _0x343b32 = _0x1b31ad;
    body = await _0x31b000(), params = {
      "appid": _0x343b32(941, "9U$X"),
      "functionId": _0x343b32(644, "YCCD"),
      "body": JSON["stringify"](body),
      "client": "m",
      "clientVersion": _0x343b32(493, "aXJL")
    };
    const _0x569456 = {
        "url": _0x343b32(798, "hXpw"),
        "method": _0x343b32(979, "9U$X"),
        "headers": {
          "Accept": "*/*",
          "Cookie": _0x340b83,
          "Referer": _0x343b32(603, "31AT"),
          "Origin": _0x343b32(749, "Fxjz"),
          "User-Agent": _0x1ad9e7
        },
        "params": params,
        "timeout": 30000
      },
      _0x483391 = 3;
    let _0x1022e1 = 0;
    while (_0x1022e1 < _0x483391) {
      _0x1022e1 > 0 && (await $[_0x343b32(967, "cZ$J")](1000));
      const _0x445542 = await common[_0x343b32(869, "7TtC")](_0x569456);
      if (_0x445542[_0x343b32(962, "Y)sZ")]) {
        let _0x5724f2 = _0x445542[_0x343b32(904, "hXpw")];
        if (_0x5724f2[_0x343b32(621, "Jc(p")] === 200) {
          if (_0x5724f2["data"]) {
            let _0x315264 = _0x5724f2[_0x343b32(743, "Aj^y")][_0x343b32(958, "Y)sZ")] || 0,
              _0xbf500f = _0x343b32(810, "jfg8") + _0x315264;
            _0x315264 > 11.7 && (_0xbf500f += _0x343b32(788, "Fxjz")), _0x448457(_0xbf500f);
          }
        }
      }
      break;
    }
  }
  async function _0x2bad2e() {
    const _0x384cf1 = _0x1b31ad;
    let _0x1220ce = {
      "appId": "42e80",
      "functionId": _0x384cf1(825, "ckgh"),
      "appid": _0x384cf1(693, "9U$X"),
      "clientVersion": common[_0x384cf1(813, "]nie")](),
      "client": "h5",
      "body": {
        "queryList": "a"
      },
      "version": _0x384cf1(570, "RKOC"),
      "ua": _0x1ad9e7,
      "t": !![]
    };
    const _0x1ab81f = await H5st[_0x384cf1(545, "Fxjz")](_0x1220ce);
    let _0x55384a = _0x1ab81f["paramsData"];
    const _0x2a894d = {
        "url": _0x384cf1(845, "m63!"),
        "method": _0x384cf1(490, "tI5i"),
        "headers": {
          "User-Agent": _0x1ad9e7,
          "origin": _0x384cf1(748, "L3NP"),
          "referer": _0x384cf1(702, "keCX"),
          "Content-Type": _0x384cf1(764, "m@L7"),
          "Cookie": _0x340b83
        },
        "body": _0x55384a,
        "timeout": 30000
      },
      _0xec14e = 3;
    let _0x6e41a8 = 0;
    while (_0x6e41a8 < _0xec14e) {
      _0x6e41a8 > 0 && (await $[_0x384cf1(509, "cYJf")](1000));
      const _0x37ec09 = await common[_0x384cf1(809, "Db@M")](_0x2a894d);
      if (_0x37ec09[_0x384cf1(955, "6u7m")]) {
        let _0xdc3ef9 = _0x37ec09[_0x384cf1(955, "6u7m")];
        _0xdc3ef9[_0x384cf1(843, "JTaD")] === _0x384cf1(940, "#b$z") && _0xdc3ef9[_0x384cf1(850, "bBYg")] && _0x448457(_0x384cf1(540, "tI5i") + _0xdc3ef9[_0x384cf1(850, "bBYg")]["a"] + "\u5143");
      }
      break;
    }
  }
  async function _0x4a0213() {
    const _0x5554f1 = _0x1b31ad;
    let _0x285d78 = {
      "appId": _0x5554f1(503, "6j8M"),
      "functionId": _0x5554f1(739, "ckgh"),
      "appid": _0x5554f1(953, "m63!"),
      "client": "m",
      "body": {
        "bizCode": "cn_retail_jdsupermarket",
        "scenario": _0x5554f1(567, "vUk5"),
        "babelChannel": _0x5554f1(936, "#b$z"),
        "isJdApp": "1",
        "isWx": "0"
      },
      "version": _0x5554f1(721, "L3NP"),
      "ua": _0x1ad9e7,
      "t": !![]
    };
    const _0x33c327 = await H5st[_0x5554f1(978, "m@L7")](_0x285d78);
    let _0x494d8a = _0x33c327[_0x5554f1(929, "JTaD")];
    const _0x9db9a3 = {
        "url": _0x5554f1(806, "JTaD"),
        "method": _0x5554f1(943, "7TtC"),
        "headers": {
          "Accept": _0x5554f1(905, "9U$X"),
          "Accept-Encoding": _0x5554f1(769, "isTL"),
          "Accept-Language": "zh-cn",
          "Content-Type": "application/x-www-form-urlencoded",
          "Cookie": _0x340b83,
          "X-Requested-With": "XMLHttpRequest",
          "Referer": "https://pro.m.jd.com/mall/active/3nh7HzSjYemGqAHSbktTrf8rrH8M/index.html",
          "X-Referer-Page": "https://pro.m.jd.com/mall/active/3nh7HzSjYemGqAHSbktTrf8rrH8M/index.html",
          "Origin": _0x5554f1(951, "cZ$J"),
          "x-rp-client": _0x5554f1(549, "bBYg"),
          "User-Agent": _0x1ad9e7
        },
        "body": _0x494d8a,
        "timeout": 30000
      },
      _0x354119 = 3;
    let _0x27debc = 0;
    while (_0x27debc < _0x354119) {
      _0x27debc > 0 && (await $[_0x5554f1(967, "cZ$J")](1000));
      const _0x536c4a = await common[_0x5554f1(926, "Lg$N")](_0x9db9a3);
      if (_0x536c4a["data"]) {
        let _0x136622 = _0x536c4a[_0x5554f1(802, "6j8M")];
        if (_0x136622[_0x5554f1(572, "6u7m")] === "0" && _0x136622[_0x5554f1(547, "Ioks")]) {
          if (_0x136622["data"] && _0x136622[_0x5554f1(981, "jfg8")][_0x5554f1(566, "L%%Z")] && _0x136622["data"][_0x5554f1(938, "7gUF")][_0x5554f1(860, "7TtC")]) {
            let _0x1cb9a8 = _0x5554f1(499, "aXJL") + _0x136622[_0x5554f1(530, "]nie")]["floorData"][_0x5554f1(647, "6u7m")][0]["restScore"] + "\u6C6A\u8D1D";
            _0x136622["data"][_0x5554f1(1001, "Ioks")][_0x5554f1(497, "keCX")][0] && _0x136622[_0x5554f1(823, "Db@M")][_0x5554f1(917, "7TtC")][_0x5554f1(921, "7gUF")][0][_0x5554f1(722, "7TtC")] && _0x136622["data"]["floorData"]["items"][0]["nexp"] > 0 && (_0x1cb9a8 += _0x5554f1(881, "L3NP") + _0x136622["data"]["floorData"][_0x5554f1(543, "^zY4")][0]["nexp"] + ")"), _0x448457(_0x1cb9a8);
          }
        }
      }
      break;
    }
  }
  async function _0xbee007() {
    const _0x21a22b = _0x1b31ad;
    let _0x2dadd8 = {
      "appId": _0x21a22b(575, "L%%Z"),
      "functionId": _0x21a22b(878, "np5h"),
      "appid": _0x21a22b(834, "6j8M"),
      "clientVersion": common[_0x21a22b(558, "$F^c")](),
      "client": _0x21a22b(924, "Jc(p"),
      "body": {
        "version": 3
      },
      "version": _0x21a22b(641, "^zY4"),
      "ua": _0x1ad9e7,
      "t": !![]
    };
    const _0x1e80ed = await H5st[_0x21a22b(729, "6u7m")](_0x2dadd8);
    let _0x1f04a5 = _0x1e80ed["paramsData"];
    const _0x17a59f = {
        "url": _0x21a22b(711, "UH7E"),
        "method": _0x21a22b(759, "Y)sZ"),
        "headers": {
          "Accept": "application/json, text/plain, */*",
          "Accept-Encoding": _0x21a22b(631, "6gr1"),
          "Accept-Language": _0x21a22b(578, "Jc(p"),
          "Connection": "keep-alive",
          "Content-Type": _0x21a22b(586, "pVBm"),
          "Cookie": _0x340b83,
          "Host": _0x21a22b(544, "%t51"),
          "Referer": _0x21a22b(633, "ckgh"),
          "X-Referer-Page": _0x21a22b(861, "hXpw"),
          "Origin": _0x21a22b(741, "#MMQ"),
          "x-rp-client": _0x21a22b(520, "JTaD"),
          "User-Agent": _0x1ad9e7
        },
        "body": _0x1f04a5,
        "timeout": 30000
      },
      _0x531539 = 3;
    let _0x1982d1 = 0;
    while (_0x1982d1 < _0x531539) {
      _0x1982d1 > 0 && (await $[_0x21a22b(933, "ql!a")](1000));
      const _0x3a1645 = await common[_0x21a22b(630, "UH7E")](_0x17a59f);
      if (_0x3a1645[_0x21a22b(773, "aXJL")]) {
        let _0x4b470d = _0x3a1645["data"];
        if (_0x4b470d[_0x21a22b(774, "UH7E")] === 0 && _0x4b470d[_0x21a22b(947, "cZ$J")]) {
          if (_0x4b470d["data"][_0x21a22b(882, "aXJL")] === 0) {
            const _0x3063a2 = _0x4b470d["data"]?.[_0x21a22b(736, "9U$X")]?.[_0x21a22b(513, "hXpw")] || 0;
            if (_0x3063a2 === 0) {
              const _0x1e6cb0 = _0x4b470d[_0x21a22b(981, "jfg8")]?.[_0x21a22b(944, "Fxjz")]?.[_0x21a22b(563, "lDP&")],
                _0x2e5673 = _0x4b470d[_0x21a22b(604, "Jc(p")]?.[_0x21a22b(736, "9U$X")]?.[_0x21a22b(877, "L%%Z")],
                _0x137115 = _0x4b470d["data"]?.[_0x21a22b(723, "hXpw")]?.[_0x21a22b(911, "Fxjz")] || "",
                _0x57d832 = _0x4b470d["data"]?.[_0x21a22b(792, "uenW")]?.["treeLevel"] || 0,
                _0x231031 = _0x4b470d[_0x21a22b(583, "$F^c")]?.[_0x21a22b(539, "R[Je")]?.[_0x21a22b(803, "Db@M")];
              switch (_0x1e6cb0) {
                case 0:
                  _0x448457(_0x21a22b(964, "7gUF"));
                  break;
                case 1:
                case 2:
                case 3:
                case 4:
                  let _0x36f3cf = "",
                    _0x2847b2 = _0x137115[_0x21a22b(555, "7TtC")](/\d+(\.\d+)?%/);
                  _0x2847b2 && (_0x36f3cf = _0x2847b2[0]);
                  let _0x54dcb6 = _0x21a22b(897, "Fxjz") + _0x57d832 + _0x21a22b(569, "Ioks") + _0x2e5673 + "]";
                  if (_0x2847b2) {
                    _0x36f3cf = parseFloat(_0x2847b2[0][_0x21a22b(501, "uenW")]("%", "")) / 100;
                    let _0x8afe8b = 1 - _0x36f3cf;
                    _0x36f3cf = (_0x8afe8b * 100)[_0x21a22b(716, "Y)sZ")](2) + "%", _0x54dcb6 += ",\u8FDB\u5EA6[" + _0x36f3cf + "]";
                  }
                  _0x448457(_0x54dcb6);
                  break;
                case 5:
                  _0x448457(_0x21a22b(537, "hXpw") + _0x231031 + "\u6210\u719F\u4E86");
                  break;
              }
            } else _0x448457(_0x21a22b(684, "m@L7"));
          } else _0x448457("\u3010\u65B0\u4E1C\u4E1C\u519C\u573A\u3011\u6D3B\u52A8\u706B\u7206");
        } else _0x448457(_0x21a22b(533, "#b$z"));
      }
      break;
    }
  }
  async function _0x16d089() {
    const _0x1f79ef = _0x1b31ad;
    let _0x3b2b16 = {
      "appId": _0x1f79ef(673, "Jc(p"),
      "functionId": _0x1f79ef(508, "Lg$N"),
      "appid": "signed_wh5",
      "clientVersion": common[_0x1f79ef(506, "6j8M")](),
      "client": _0x1f79ef(833, "NUQ0"),
      "body": {
        "version": 3
      },
      "version": "4.7",
      "ua": _0x1ad9e7,
      "t": !![]
    };
    const _0x59518a = await H5st[_0x1f79ef(715, "L%%Z")](_0x3b2b16);
    let _0x35026a = _0x59518a[_0x1f79ef(888, "cYJf")];
    const _0x41c23f = {
        "url": "https://api.m.jd.com/client.action",
        "method": _0x1f79ef(496, "6gr1"),
        "headers": {
          "Host": _0x1f79ef(782, "#b$z"),
          "Accept": _0x1f79ef(643, "m63!"),
          "Origin": _0x1f79ef(830, "7gUF"),
          "Accept-Encoding": _0x1f79ef(620, "tI5i"),
          "User-Agent": _0x1ad9e7,
          "Accept-Language": _0x1f79ef(652, "NUQ0"),
          "Referer": "https://carry.m.jd.com/",
          "x-requested-with": "com.jingdong.app.mall",
          "Cookie": _0x340b83
        },
        "body": _0x35026a,
        "timeout": 30000
      },
      _0x178c79 = 3;
    let _0xa9437 = 0;
    while (_0xa9437 < _0x178c79) {
      _0xa9437 > 0 && (await $[_0x1f79ef(710, "L3NP")](1000));
      const _0xd84f0e = await common[_0x1f79ef(846, "Aj^y")](_0x41c23f);
      if (_0xd84f0e[_0x1f79ef(864, "lDP&")]) {
        let _0x426226 = _0xd84f0e[_0x1f79ef(593, "YCCD")];
        if (_0x426226[_0x1f79ef(525, "Aj^y")] === "0") {
          if (_0x426226["farmUserPro"]) {
            const _0x269735 = _0x426226[_0x1f79ef(548, "6gr1")][_0x1f79ef(820, "ckgh")] || 0;
            switch (_0x269735) {
              case 0:
                _0x448457(_0x1f79ef(844, "#MMQ"));
                break;
              case 1:
                _0x448457(_0x1f79ef(758, "cZ$J") + _0x426226[_0x1f79ef(991, "#b$z")][_0x1f79ef(724, "tI5i")] + "][\u6C34\u6EF4" + _0x426226["farmUserPro"][_0x1f79ef(984, "Jc(p")] + _0x1f79ef(957, "RKOC") + (_0x426226[_0x1f79ef(713, "JTaD")]?.[_0x1f79ef(874, "$F^c")] / _0x426226[_0x1f79ef(870, "NUQ0")]?.["treeTotalEnergy"] * 100)[_0x1f79ef(584, "L%%Z")](2) + "%],\u5DF2\u6D47\u6C34" + _0x426226[_0x1f79ef(976, "np5h")]?.[_0x1f79ef(778, "L3NP")] / 10 + _0x1f79ef(866, "keCX") + (_0x426226[_0x1f79ef(495, "Db@M")]?.[_0x1f79ef(867, "ckgh")] - _0x426226[_0x1f79ef(614, "^zY4")]?.[_0x1f79ef(554, "Y)sZ")]) / 10 + "\u6B21");
                break;
              case 2:
              case 3:
                _0x448457(_0x1f79ef(791, "qb()") + _0x426226["farmUserPro"][_0x1f79ef(865, "jfg8")] + _0x1f79ef(639, "^zY4"));
                break;
            }
          } else _0x448457("\u3010\u4E1C\u4E1C\u519C\u573A\u3011\u6D3B\u52A8\u706B\u7206");
        } else _0x448457(_0x1f79ef(685, "UH7E"));
      }
      break;
    }
  }
  async function _0x8e085f() {
    const _0x187ed4 = _0x1b31ad;
    let _0x57d7ef = {
      "appId": _0x187ed4(498, "7TtC"),
      "functionId": _0x187ed4(550, "Lg$N"),
      "appid": _0x187ed4(731, "aXJL"),
      "clientVersion": common[_0x187ed4(960, "Db@M")](),
      "client": _0x187ed4(914, "ckgh"),
      "body": {
        "outsite": 0,
        "firstCall": 0,
        "version": 1,
        "lbsSwitch": ![]
      },
      "version": _0x187ed4(838, "#b$z"),
      "ua": _0x1ad9e7,
      "t": !![],
      "bu1": "lite_0.1.5",
      "tokenCache": ![]
    };
    const _0x37e4f9 = await H5st[_0x187ed4(695, "cZ$J")](_0x57d7ef);
    let _0x42f2f7 = _0x37e4f9[_0x187ed4(669, "vUk5")];
    const _0x1081e9 = {
        "url": _0x187ed4(492, "np5h"),
        "method": "POST",
        "headers": {
          "origin": _0x187ed4(505, "9U$X"),
          "Referer": _0x187ed4(667, "Db@M"),
          "User-Agent": _0x1ad9e7,
          "Cookie": _0x340b83,
          "content-type": _0x187ed4(690, "L3NP"),
          "accept": _0x187ed4(900, "bBYg"),
          "x-rp-client": _0x187ed4(599, "]nie")
        },
        "body": _0x42f2f7,
        "timeout": 30000
      },
      _0x345ae8 = 3;
    let _0x483e7a = 0;
    while (_0x483e7a < _0x345ae8) {
      _0x483e7a > 0 && (await $[_0x187ed4(627, "$F^c")](1000));
      const _0x2569d5 = await common[_0x187ed4(992, "$F^c")](_0x1081e9);
      if (_0x2569d5[_0x187ed4(743, "Aj^y")]) {
        let _0x4a0fe9 = _0x2569d5["data"];
        if (_0x4a0fe9[_0x187ed4(659, "@h3)")] === 0 && _0x4a0fe9["data"]) {
          if (_0x4a0fe9[_0x187ed4(862, "NUQ0")][_0x187ed4(975, "qb()")] === 0) {
            const _0x4fb067 = _0x4a0fe9[_0x187ed4(527, "7gUF")][_0x187ed4(968, "#b$z")]?.[_0x187ed4(532, "R[Je")] || 0;
            _0x448457(_0x187ed4(807, "np5h") + _0x4fb067 + "\u5956\u7968");
          } else _0x448457(_0x187ed4(896, "UH7E"));
        }
      }
      break;
    }
  }
  async function _0x84a89() {
    const _0x3a7d67 = _0x1b31ad;
    let _0x1f925b = {
      "appId": _0x3a7d67(598, "ql!a"),
      "functionId": "atop_channel_marketCard_cardInfo",
      "appid": "jd-super-market",
      "clientVersion": common[_0x3a7d67(617, "JTaD")](),
      "client": "m",
      "body": {
        "babelChannel": _0x3a7d67(649, "9F7h"),
        "isJdApp": "1",
        "isWx": "0"
      },
      "version": _0x3a7d67(608, "9U$X"),
      "ua": _0x1ad9e7,
      "t": !![]
    };
    const _0x21de70 = await H5st[_0x3a7d67(853, "Ioks")](_0x1f925b);
    let _0x1db99b = _0x21de70[_0x3a7d67(939, "bBYg")];
    const _0x2ce425 = {
        "url": _0x3a7d67(651, "uenW"),
        "method": _0x3a7d67(719, "Ioks"),
        "headers": {
          "User-Agent": _0x1ad9e7,
          "origin": "https://pro.m.jd.com",
          "referer": _0x3a7d67(973, "NUQ0"),
          "Content-Type": _0x3a7d67(588, "keCX"),
          "Cookie": _0x340b83,
          "x-rp-client": _0x3a7d67(717, "lDP&")
        },
        "body": _0x1db99b,
        "timeout": 30000
      },
      _0x14a93c = 3;
    let _0xd7b45c = 0;
    while (_0xd7b45c < _0x14a93c) {
      _0xd7b45c > 0 && (await $[_0x3a7d67(906, "Aj^y")](1000));
      const _0x1d76ae = await common[_0x3a7d67(767, "lDP&")](_0x2ce425);
      if (_0x1d76ae[_0x3a7d67(816, "np5h")]) {
        let _0x23a223 = _0x1d76ae["data"];
        if (_0x23a223["code"] === "0" && _0x23a223[_0x3a7d67(671, "$F^c")]) {
          if (_0x23a223[_0x3a7d67(831, "7TtC")]) {
            let _0x351588 = _0x23a223?.[_0x3a7d67(583, "$F^c")]?.[_0x3a7d67(666, "6j8M")]?.[_0x3a7d67(688, "9U$X")] || [];
            for (let _0x3c558e of _0x351588) {
              if (_0x3c558e?.["marketCardVO"]) {
                let {
                    expirationGiftAmountDes = "",
                    balance: _0x322f4f
                  } = _0x3c558e["marketCardVO"],
                  _0x142d32 = _0x3a7d67(903, "tI5i") + _0x322f4f + "\u5143";
                expirationGiftAmountDes && (_0x142d32 += "(" + expirationGiftAmountDes + ")"), _0x448457(_0x142d32);
              }
            }
          }
        }
      }
      break;
    }
  }
  async function _0x32264e() {
    const _0x468ea0 = _0x1b31ad;
    signParams = {
      "pageIndex": 1,
      "pageSize": "10",
      "planType": "1",
      "status": 1
    }, params = {
      "functionId": _0x468ea0(601, "^zY4")
    };
    const _0x171bed = {
        "url": "https://api.m.jd.com/client.action",
        "method": _0x468ea0(827, "L%%Z"),
        "headers": {
          "Host": _0x468ea0(609, "7gUF"),
          "accept": _0x468ea0(542, "Aj^y"),
          "user-agent": "okhttp/3.12.16;jdmall;android;version/12.2.2;build/168923;",
          "accept-language": "zh-Hans-JP;q=1, en-JP;q=0.9, zh-Hant-TW;q=0.8, ja-JP;q=0.7, en-US;q=0.6",
          "Cookie": _0x340b83
        },
        "params": params,
        "data": common[_0x468ea0(972, "7gUF")](await common[_0x468ea0(511, "jfg8")]("getCommentWareList", signParams)),
        "timeout": 30000
      },
      _0xcf7d11 = 3;
    let _0x4be6b0 = 0;
    while (_0x4be6b0 < _0xcf7d11) {
      _0x4be6b0 > 0 && (await $["wait"](1000));
      const _0x52f71b = await common[_0x468ea0(812, "bBYg")](_0x171bed);
      if (_0x52f71b[_0x468ea0(850, "bBYg")]) {
        let _0x120aac = _0x52f71b["data"];
        if (_0x120aac[_0x468ea0(880, "#b$z")] === "0") {
          let _0x1596e0 = _0x120aac["commentWareListInfo"],
            _0x2bba58 = _0x1596e0[_0x468ea0(937, "Aj^y")] || 0,
            _0x2bbbcd = _0x1596e0[_0x468ea0(564, "NUQ0")] || 0;
          _0x448457(_0x468ea0(742, "7gUF") + _0x2bbbcd + _0x468ea0(697, "hXpw") + _0x2bba58 + "]");
        }
      }
      break;
    }
  }
  async function _0x376813() {
    const _0x3d9a7e = _0x1b31ad;
    signParams = {
      "pageSize": "20",
      "page": "1"
    };
    const _0x8c853b = {
        "url": _0x3d9a7e(794, "]nie"),
        "method": _0x3d9a7e(840, "31AT"),
        "headers": {
          "User-Agent": _0x1ad9e7,
          "Host": _0x3d9a7e(519, "uenW"),
          "Content-Type": "application/x-www-form-urlencoded",
          "Cookie": _0x340b83
        },
        "body": common[_0x3d9a7e(931, "UH7E")](await common[_0x3d9a7e(618, "]nie")]("jingBeanDetail", signParams)),
        "timeout": 30000
      },
      _0x4a6fcb = 3;
    let _0x51de92 = 0;
    while (_0x51de92 < _0x4a6fcb) {
      _0x51de92 > 0 && (await $[_0x3d9a7e(755, "Lg$N")](1000));
      const _0x3578a9 = await common["request"](_0x8c853b);
      if (_0x3578a9[_0x3d9a7e(862, "NUQ0")]) {
        let _0x2e6bb5 = _0x3578a9["data"];
        if (_0x2e6bb5["code"] === 0) {
          if (_0x2e6bb5["others"] && _0x2e6bb5[_0x3d9a7e(538, "Fxjz")][_0x3d9a7e(821, "@h3)")]) {
            if (_0x2e6bb5["others"][_0x3d9a7e(638, "UH7E")] && Array[_0x3d9a7e(757, "R[Je")](_0x2e6bb5["others"][_0x3d9a7e(826, "hXpw")][_0x3d9a7e(948, "hXpw")]) && _0x2e6bb5[_0x3d9a7e(691, "hXpw")][_0x3d9a7e(664, "m63!")][_0x3d9a7e(624, "6u7m")][_0x3d9a7e(677, "Aj^y")] > 0) {
              let _0x30e57b = _0x2e6bb5["others"]["jingBeanExpiringInfo"][_0x3d9a7e(594, "L3NP")]["reduce"]((_0x1ee405, _0x1e284) => _0x1ee405 + parseInt(_0x1e284[_0x3d9a7e(965, "qb()")]), 0);
              _0x448457("\u3010\u8FC7\u671F\u4EAC\u8C46\u3011(7\u65E5\u5185\u8FC7\u671F" + _0x30e57b + _0x3d9a7e(771, "9F7h")), _0x2e6bb5["others"]["jingBeanExpiringInfo"][_0x3d9a7e(799, "vUk5")][_0x3d9a7e(502, "#MMQ")](_0x9e989e => {
                const _0x30785f = _0x3d9a7e;
                _0x448457("  " + _0x9e989e["eventMassage"] + "[" + _0x9e989e[_0x30785f(735, "m@L7")] + _0x30785f(686, "Aj^y"));
              });
            }
          }
        }
      }
      break;
    }
  }
  async function _0x5168b2() {
    const _0x47fff8 = _0x1b31ad;
    signParams = {
      "fp": "-1",
      "appToken": _0x47fff8(752, "Lg$N"),
      "childActivityUrl": "-1",
      "country": "cn",
      "openId": "-1",
      "childActivityId": "-1",
      "applicantErp": "-1",
      "platformId": _0x47fff8(800, "7TtC"),
      "isRvc": "-1",
      "orgType": "2",
      "activityType": "1",
      "shshshfpb": "-1",
      "platformToken": "apphongbao_token",
      "organization": "JD",
      "pageClickKey": "-1",
      "platform": "1",
      "eid": "-1",
      "appId": "appHongBao",
      "childActiveName": "-1",
      "shshshfp": "-1",
      "jda": "-1",
      "extend": "-1",
      "shshshfpa": "-1",
      "activityArea": "-1",
      "childActivityTime": "-1"
    };
    const _0x1f2537 = {
        "url": _0x47fff8(565, "cZ$J"),
        "method": _0x47fff8(522, "m63!"),
        "headers": {
          "User-Agent": _0x1ad9e7,
          "Host": _0x47fff8(642, "pVBm"),
          "Content-Type": _0x47fff8(783, "@h3)"),
          "Cookie": _0x340b83
        },
        "body": common[_0x47fff8(625, "NUQ0")](await common[_0x47fff8(790, "L3NP")]("myhongbao_getUsableHongBaoList", signParams)),
        "timeout": 30000
      },
      _0x4f6f43 = 3;
    let _0x5208c1 = 0;
    while (_0x5208c1 < _0x4f6f43) {
      _0x5208c1 > 0 && (await $[_0x47fff8(967, "cZ$J")](1000));
      const _0x23c785 = await common[_0x47fff8(998, "Y)sZ")](_0x1f2537);
      if (_0x23c785[_0x47fff8(862, "NUQ0")]) {
        let _0x9a80a3 = _0x23c785["data"];
        if (_0x9a80a3["resultCode"] === 200 && _0x9a80a3[_0x47fff8(784, "ql!a")]) {
          _0x1aa84c = _0x9a80a3?.[_0x47fff8(718, "6gr1")] || 0;
          for (let _0x75d265 of _0x9a80a3?.["hongBaoList"] || []) {
            let _0x527316 = parseInt(_0x75d265[_0x47fff8(514, "uenW")] * 100),
              _0x5c9732 = "";
            if (_0x75d265?.[_0x47fff8(744, "1*#O")]?.[_0x47fff8(768, "9F7h")](_0x47fff8(890, "pVBm"))) _0x5c9732 = _0x47fff8(954, "Jc(p");else {
              if (_0x75d265?.[_0x47fff8(573, "$F^c")]?.[_0x47fff8(528, "cYJf")](_0x47fff8(801, "UH7E"))) _0x5c9732 = _0x47fff8(910, "ql!a");else _0x75d265?.[_0x47fff8(737, "cYJf")]?.[_0x47fff8(863, "6gr1")](_0x47fff8(679, "np5h")) && (_0x5c9732 = _0x47fff8(709, "]nie"));
            }
            let _0xda9048 = KEY_TOTAL;
            if (_0x75d265[_0x47fff8(837, "ql!a")] < tomorrow) _0xda9048 = KEY_TOMORROW;else _0x75d265[_0x47fff8(683, "#MMQ")] < dayAfterTomorrow && (_0xda9048 = KEY_DAY_AFTER_TOMORROW);
            _0x2af65e[_0x47fff8(732, "Lg$N")][KEY_TOTAL] += _0x527316, _0x5c9732 ? _0x2af65e[_0x5c9732][KEY_TOTAL] += _0x527316 : _0x2af65e[_0x47fff8(619, "]nie")][KEY_TOTAL] += _0x527316, _0xda9048 > KEY_TOTAL && (_0x2af65e[_0x47fff8(518, "L%%Z")][_0xda9048] += _0x527316, _0x5c9732 ? _0x2af65e[_0x5c9732][_0xda9048] += _0x527316 : _0x2af65e[_0x47fff8(579, "Jc(p")][_0xda9048] += _0x527316);
          }
          for (let _0x49a42a in _0x2af65e) {
            for (let _0x596ed1 = 0; _0x596ed1 < _0x2af65e[_0x49a42a][_0x47fff8(977, "R[Je")]; _0x596ed1++) {
              _0x2af65e[_0x49a42a][_0x596ed1] = Number(_0x2af65e[_0x49a42a][_0x596ed1] / 100)[_0x47fff8(872, "pVBm")](2);
            }
          }
          await _0x335f67();
        } else console[_0x47fff8(517, "L%%Z")](_0x30c0c1 + "\u83B7\u53D6\u7EA2\u5305\u5217\u8868\u5931\u8D25," + _0x9a80a3["message"]);
      }
      break;
    }
  }
  async function _0x335f67() {
    const _0x23adc7 = _0x1b31ad;
    _0x448457(_0x23adc7(725, "Ioks") + _0x2af65e["total"][KEY_TOTAL] + _0x23adc7(616, "JTaD") + _0x2af65e["total"][KEY_TOMORROW] + "],\u3010\u660E\u665A\u8FC7\u671F\u3011[" + _0x2af65e[_0x23adc7(628, "7gUF")][KEY_DAY_AFTER_TOMORROW] + "]"), _0x2af65e["common"][0] && _0x448457(_0x23adc7(660, "JTaD") + _0x2af65e[_0x23adc7(727, "#b$z")][KEY_TOTAL] + _0x23adc7(582, "6u7m") + _0x2af65e["common"][KEY_TOMORROW] + "],\u3010\u660E\u665A\u8FC7\u671F\u3011[" + _0x2af65e[_0x23adc7(836, "Fxjz")][KEY_DAY_AFTER_TOMORROW] + "]"), _0x2af65e[_0x23adc7(986, "m63!")][0] && _0x448457("\u3010\u5546\u57CE\u603B\u7EA2\u5305\u3011[" + _0x2af65e[_0x23adc7(756, "vUk5")][KEY_TOTAL] + "],\u3010\u4ECA\u665A\u8FC7\u671F\u3011[" + _0x2af65e[_0x23adc7(934, "7TtC")][KEY_TOMORROW] + _0x23adc7(997, "Jc(p") + _0x2af65e["jdapp"][KEY_DAY_AFTER_TOMORROW] + "]"), _0x2af65e[_0x23adc7(828, "vUk5")][0] && _0x448457("\u3010\u7279\u4EF7\u7248\u7EA2\u5305\u3011[" + _0x2af65e[_0x23adc7(856, "#MMQ")][KEY_TOTAL] + "],\u3010\u4ECA\u665A\u8FC7\u671F\u3011[" + _0x2af65e[_0x23adc7(879, "lDP&")][KEY_TOMORROW] + "],\u3010\u660E\u665A\u8FC7\u671F\u3011[" + _0x2af65e[_0x23adc7(828, "vUk5")][KEY_DAY_AFTER_TOMORROW] + "]"), _0x2af65e[_0x23adc7(654, "m@L7")][0] && _0x448457(_0x23adc7(852, "Fxjz") + _0x2af65e[_0x23adc7(747, "1*#O")][KEY_TOTAL] + "],\u3010\u4ECA\u665A\u8FC7\u671F\u3011[" + _0x2af65e["minip"][KEY_TOMORROW] + _0x23adc7(591, "NUQ0") + _0x2af65e[_0x23adc7(712, "isTL")][KEY_DAY_AFTER_TOMORROW] + "]");
  }
  async function _0x31b000(_0x20eb44) {
    const _0x355f88 = _0x1b31ad;
    time = new Date()[_0x355f88(706, "Jc(p")]();
    let _0x28f74c = _0x20eb44 || "";
    const _0x13fd01 = time + _0x355f88(623, "RKOC");
    return _0x28f74c = cryptoJS[_0x355f88(740, "ql!a")](_0x28f74c + _0x13fd01)[_0x355f88(612, "bBYg")](), {
      "t": time,
      "encStr": _0x28f74c
    };
  }
}
function _0x48fa() {
  const _0x330cd7 = ["W7hdKSk9W4hcJq", "6ykT6l+25lQ36lgo", "vKfYxN4mWOO", "bSoka8kmEbjnW7tdJNpdKabHjCktgmoT", "WQddQmoq", "W5HWWRniWPDEz8kmWRi2a8kkW7/cT8kFgSobu8kLaW", "W6ddK8k/", "zxxdRcjP", "W49uWRJcSSovpSosmMC", "WPb6W60", "tK1TtfKAWP9RW7VdICkZcmkdW6yQhCora1Gn", "WOFMIQdNHPtKUQ0", "6lsX5yYj5Pw15PAJ", "W67cNJW", "CCkwANBdQcXgWPRcLX7dPvS", "mCkfkq", "imkmhNL/oCoAc13cIvBcOCkqW7ZcMxDai8kNWQXvW6dcMfJcTa", "WPVcS8oLECkfgSoDW4am", "W6tdJCk5W4ZcIbddLZNdMNddUrmahSoAWRVdMCkyW4dcM8kjW4lcGbLhpSoTmmk9W7K", "FZrDW5qV", "mZhcP38VnGRdUmoUWOyzdCo2", "y8kkW6hdKG", "W4LeAqqSzSk9hW", "W7LQx3JdMWzMW496Dd03WPGWW5pdVmoMvCkcfCo9wYGVWRHngXRdOxykWPZdLwJdVflcHmofDmkdk0rcbGGJWQRcTCkNksKtgq", "W6vphSkFvWRcSgldSYPRWRXlWPZdGCozWQxcVSk2", "shb1BSkOW53dO8ovntddN8oU", "WPW7W4TDdq", "DSkoW6xcH1zBbLr/j8kyrSkzCmoWqsS+W7tdGSoXWRxcOmk2W7VdHGrJW4W8", "p8kOWPCXW6FdKq", "W41iWQxcTmo1fSoppW", "B8ofz8oKWR1JdZ43", "WPhcR8orCa", "44ot6yov55sz5Ogw57QN5y2144cdwG", "W6ddV3m", "44kL55UV5P+55lYP6Aol44oB", "6lwB5y6u5PAl5PEK", "CCodBCoIWOzzasugCSozwrnwWRXLqh/cGNO", "W7v/x2K", "W6/dHCoDWRxcTeqhEcW", "WRDdWONdO18rW5DUW7PNiCkXpcCSgSkRFSo3W7ZdUqmGFgT9W6JdOmo5W4aUCNudDIxdHIxdJSowWPlcNfRdQZdcJSohbZddGmkOWPJdK8oRW5WaWR3dKN8Sl8kVW7zJWOVcHCowimoCe8o9xa", "zdvwW7WYyG", "C2ZcLe8Qmc7dVL7dOG", "pCodW6ut", "F8k4wmoPhvmO", "dvRcTWVdKSoslg5hW4RdVHhdKSoK", "vSk2CHK/", "W6NdVMi", "W5rlAhZcKSkQlr9hW4msFG", "h0NcUaBdSmoCoMTeW7/dTqxdRmoODMbkemoUW60", "DNhdS8kco8ou", "5yAzWPZJGjVMGjdPO4xLU5lJGQK", "5lMP5zsA54UF5lUUEclcNW", "f8kOjfXMf8oIlN7cPa", "W7viwSkY", "W4TjWR0", "m8onWQ/dGSk6jK4", "44oH5PEI5lQ55lIO5yEH5z+y44o66lAh6l+2W5np5AAI5P6X5RAZ5RgZ77YJ5P2w5Qk95BER57MF5PYE6joK5lMT", "44c05lI45lIF5yA35zYH44gU5REf5yQT54ov54Q3", "5lQ26lgsW4a", "W6RdHSowWR8", "WRZcPvGFbG", "Dmkefh0", "W49xWRVcU8oifmoDigeXqLldR8ooW78vW5dcMw3cMmoNW5zhhmkvW4RdK1GqwLZdNSk/", "eHCdW4NcNmo/", "WPH0W77dOG", "WRJcQfOBe8oHnmkHWQDF", "w2dcNGhdJCoepG", "nmkOWO0EWQBdISkN", "W6HgwSkOtu/cP28", "io+9R+ADGEITQos4MCox", "W4LlB2NcNSk0", "uSo7FGKFtmoWkwdcIKFcKq", "W5ZdR8oayCkzbCo4WOyUkSo/lXz5eWRcICoouCo+W5VcQhm", "fseToG", "W6CiW5yUW6TEl8k+WR3cPSoEWQXihgWTh2GOW5ZdO8k5W43dQbD9ufWoDmknW6JcPdTwFCkzWRNcP8kDkCoZESoMW6vIwSoBgL5mWRxdQIRdHW", "W6VdVt7dTfnZW6zjn8oVW4lcJ8o9WRddRYhdS8oqEa", "dZi1oG", "WQ3dKwjF", "cCkYncWWWQBdNG", "pSojCd3dQ2zIWPhdJrtdRe8", "z8ktfuH1j2yUWOtcISobhmomkG", "WQlcI8omW50", "W5LgWQlcOW", "tfb3w2HfW5eQW5/dGCkQt8kCWQeUhSk2dLepF8kpWPNcOmknWQtdMmoBWRXiqguGW5i", "fIKUnSoG", "WQxcRKmauan3CYegW44", "W5XRWQa", "W4PlB0ddGSkRpq", "W6uGnmo0WPPWWOi", "AmodpIKPEdbN", "aSoFh8ksia", "W6ewemok", "W7ddJSkSW5lcQb3dKci", "WPOjW7W", "aKNcRHi", "dWyyW5NcGSo4", "oCodW7KmWQddVmojiCkiW4a", "44kH5OgI57UH5y6B5PER6ys944ogW7S", "WRBdN2W", "uCkzkmoOWOaF", "WRpcPZhcSSo1EmkQW4ddICkNWOjY", "CsvmW7fPDCk+", "xbrSW7bkW6ersq", "wbXIW6P7W6WJw8oQfq", "WP/cNfxcVMm", "44ok6lAw5y+85l+k5Oc344gL5PUw6ykm5l2H5zge77Yp", "kCksfa", "WPa/W4Pbe8kw", "WQFcTe4hgCoH", "hx8TWP4mcJ8Bkmkxuq", "5lU/6lklW5xMLBNLHAK", "W5fWWQHiWRShimocWRrTsmklWO7cSmkcA8orx8kNxSoh", "r11E", "pSoxWR/dPSkGCqtdPtpdJ8kajNnemtjxW6tdNa", "44kv6kYF5y6C6k2K5lIw44gI5Bwe6k6j5lMera", "FNxdQCke", "W5RdOmo/pd/cP8k6dsxdIZa", "WQ/cOfy", "umkeuSolBaDFW7JdSfldNXC", "W5JdU8o2gsy", "W4ztWR/cP8ostCktE2uNsXtdSCkxW6SdW5xdKcxcNCoXWPujbSkk", "vSkgWPuFiJLPWRaLwCoWomoyqSoCWPVdMaH0zSoKnW", "DColBSoG", "W6TvrSk5", "WORcG1hcT2ddIdBcMSkpDmk3n8o8emoZW4u", "44oH5O6c56AF44cL6k6k5yAQ6i2C5y+uCSknfmoGW7lcKq", "6l+r5P2F5lQu6lo/zIBcKq", "WPZcKKJcQW", "AwNcH143", "WPvMW4VdSCkXl1a", "44gd5lUr5lUL5yEk5z6P44kOWOJNR7BNUki", "W4eaiCoj", "nmk3WPaMWR/cMCk3W5RdO30AFsVcHSkQuri", "5yECc+oaO+w+J+ACKEw+O+I8KUoaMW", "WQ/cUxRcSemdWPzzBSk2", "jxanWOHKn8kgWPlcTSoFAey", "WPaIW5vyfmkbWOP2wmknfCkKW6pdMtbyWR3cGx/dV8odWOFdHJVcMSoAW6eKabtcKZlcQJjdWOC5W7qVchb2WOVcL8k7W6Ws", "W6/dLmkNW4FcPrBdGIZdMNpdM1uzgq", "WPWAiZ/dJ8oTpXDMW5evCW", "CSkteg1Io2O", "FSkqW7BcH0PCaLm", "hdOPl8k8W4ZdI8ounJtdI8oaeCoMgCoJbW", "WRtcRLGzurL/za", "5lQ76lk4WRZdKq", "xGzGW7zxW6yAqW", "tXrXW6u", "r0TNtG", "57QY5y+J5P+M6k66WR8IDW", "FcrNW5S5z8kKWQNcSmoFFhlcPCoTWO4nWQGPyv8C", "W4ldS8oXbalcO8k+ha", "W5PvWQ7cSSoKgCozjM8N", "6k+75l6Y55st5P6M5BUR6ywT5Asm55IgdwH5hCkApsanWRqEkmoEW73ML5hKUR3OV7xOOA3KU7xLR7/KU5tMJAdPGQBORQJNVOG", "W7HWwg3dMKG", "WRtcPem", "u8kglmkRWOjFh8k+ze4teG", "WPpcSmofECkzcSoQW50vimoZzqiNoXFcMSkGwmo8W4tcQJdcJmkpW7VcKIBdSw7dSWn9", "EwWixCkVW7Cc", "ahGKWPClaW", "oCkPWQy0W7BdMmk9W6ddPNKAzYNdJ8ovqWK7WQaolCkidmkD", "wr3dOLRcJSkfgu9ZW7FdMsS", "fUwmNEs4HoweVUAmS+IVNUI1V+s4Mwe", "W7ToqmkSDLxcR0VcSG5hWRDlW5tdKCkdW7a", "W4LcWR/cHmoiemos", "44kW5lI25lIw5yE05z2J44ctWOm", "W6n7wh3dHeG", "W7jStMNdNfK", "WQBcLSomW4GuWQLNW6ydAhnYDqJdOcGsW6tcGwz4WRHDfCkktmkbW6xdLbxcKdqzW7ewWQfFgWxdKgJcNCoGW67cJG7cK8kdW4WnD8kjWQ7dQWJdLXL0WOFdIW", "E8krW7i", "W4HaBq", "z2ldSbHA", "frCFW5ZcNCk2W73cJmoLmhpdIvtdSIlcSr7dQ8kqWRG+tdldNc0VkCoDmmkWt8obW79Wt8oTW5msrtHNW4JdU8oifsHEvCoaWOZdHL5fw2VcPCo+BcZcPM8", "z2JcKK8UlYBdTLNdTW", "dvZcPIRdKCoDkubdW6K", "5lQi5lI46lsU54Mc5Bcu56M05BMX", "W63dImogWRS", "WQXCWOJdNu1gWP0", "WPS2W7PwgmkdWOvDuSkkgSoLW7ZcKrHHWQxdMhddTSoi", "W7GDW4SQ", "WQVcU0uDDKO9lHaeW4JdQmkxmJZcOqbUj8kVWPi", "44ov54YV5lQM546W5AwV56sA44oE", "WRNcVLO", "WQ1sWOZdPKLyWOW", "44oi6kYw6lsD56E55yUQ44gX", "WQNcH8omW6WoW74T", "CMldRZH+DuG", "WQNcH8omW7qgW6CTWROwwwOStKpdUd9vW6JcGa", "WOBcKLxcVgC", "Emk/tSoV", "WQhdP8osEa", "WRFcVuqi", "6k2b6kYR5P+G6k2HW7HSWPC", "WRlcTeK7g8o5pSkUWRb4pWNdOhDHWO0", "W4r2WQjDWRCqkCoxWR8", "WPJcQCoBCSkYdmoQW4C5n8oTiWHJiGFcPmoJwmo8", "5yYB6ysa54Qh5OgS57Uw5PYVlZXmsCkCW7VdHYfRW7G", "WRTwWONdSG", "B3CD", "W4fXWQjkWP0JiCofWQ5atmkvWRxcNSkuqComsmkBwmodW4PvFSkDWPKP", "fWOfW4VcRmoPWRpdJCobogRcJKVcTsBcSNNdPSkzWRO", "W71HsfW", "B2tcKKS", "WRvyWPtdVq", "W63dICk9W5dcKKNcMwldKh7dPu4tq8oyW7VcImkFWOBcMCkuW5W", "ce3cOGm", "gCk2kqWnWQldLSkp", "W75xq8kWFa", "W7RdGmovWRtcO2q5EYxcUG", "zNWfwCk+W6W", "xCkDWOWcpM0", "B3CpASkJW6Ku", "bSoyCG", "W5ZdVmo7hcpcRSk2cG", "lrhdKCoN", "44ok6lAw5y+85l+k5Oc344gLW6JdMI5p5lYz5zoW772U", "DCkOsmo+hvi/W6mhuN4x", "WQdcOfui", "44gg5lQ/5lUx5ysk5z+P44gA5PYb56sh5Qww5l6M54Uh", "C8oED8o1WRCgt2qIESoahGWrWRHMj3lcI3HlzSocW4xcTmkGzMhcTSo/AZVcVSobWR/dULmptCkxBmo2W4NcIaZcNSkascfvnfu1nCkQuCkGW6ZcUKqYW74s", "AhhdRmkqkSopW7e", "ysfrW40iB8kNWPm", "ymktCda", "WRpcUfegemoN", "zgBdQIW", "ESkcxdRdOgncWQhdMHxdQ1GDWOaTW7HTW5xcO8kA", "44cU5Bo956UQ5BUG57UZ5yYg44gxW4q", "W5y8n8owWQ7cGCkJ", "44ok5lM65PEU5lQh6lcE44gL5PAo5yEZ", "WQ/dRoAZN+I0Ios+QEMJTmkXWOKN", "oSokWR/dSW", "C3ldVs5+Du8", "y8oE6lwK5BMT5yYW5l2A6AoBWQvOEW", "W7FdQJe", "bvJcSW/dJq", "frCFW5ZcNCk2W73cJmoSDttcIHFcTIZdU1pdP8ksW7PHt23cHsn8ASklzCo0f8kEWR57smoPW4aljJraW4RdOmkZpIS4uCo5WPpcOu8LDgRcJSoRFs/cQa8fWPJdG8k8bfLkW5xdOwC", "W7Tgr8k9", "cmoEcCkqivzmW6i", "zmkxfxK", "WRBcQKLZ", "5Q6UuoI9UUMDNG", "W4r2WQjDWRalpmocWRzgq8kcWQpcUSkc", "W5JcVEEKUEwrGUwoO+s8LEMHKCkuWPhcQW", "hKNcPXFdM8oaoG", "W7LgqCkXtfxcR3JcJHbL", "hrz3xNm5WRDh", "zmkjrthdVwDi", "rCkxlmoXWRSygmk/", "Emk/xSoVpu4+W7azDa", "csZdT8ow", "WRWZbIxcHrfKW402kxK0W5GZWPtcTCoLg8oavCo/f3fTW6u/vv/cRtvjW5tcLbRcVb7dM8kdpmoA", "W49bB3ZcM8k9hH9kW7Kj", "WQpdP8ouDgyAWQdcPmkg", "BmkFfx0", "uCkziCoG", "WOyq5PsU5yws6l2M5P2O", "srX/W4DXW6Wz", "BNGFxW", "E8kSuSo+leK2W6C", "F8olD8oK", "44cA5B2k5yIM5lQs6lkm44kv", "f2m8", "aMW4WRmifbiod8kc", "FSoeDq", "5lQ85lU65zwf5z6w", "WRFcOZlcUSo0E8o+W6ZdM8kvWOThWRe", "44kF5PMu5Pwh5lUY6loE44g15Ps25yE0", "dCk2WQ8+e3qN", "W77dSGXqoe0VpeXj", "v2dLIyBMR6RML6dPHkpcLCkrcW", "44c0546n5lId546c5Awn56sx44oV5Rs+5yIw54oA54Uf", "44cU5Pwc5lU95lMZ5yEn5zY544gxW4tNRihNUOC", "WRZcQLbZ", "BNyfwW", "yxFdRIfYzv3dV8oOWOGAzSoZWRldPCkXW4rJdmkEW4ddGSo1W4ZdMeyDDJ0zW4VdQtS", "WPZcKKJcQ1VdJZZcNq", "W6tdONBdPSk2bCkIW4JdNG", "44gz6ls05BQs5yYx5Oo+6AcT44k9", "gqiFW40", "WRtcOu0Ehmo2nSk0WRXupKJdVMfGWPFdGSoAWPCFW5O3cH8EWQRcQIRcPeHtv8o7", "BxxdTmkr", "W40GWRRcSW", "z8khAIW", "WRnyWPO", "z3afv8k6", "sCktWPuki1CVW687", "WRdcV1bMWP9ABarQhmkyhmoLhxO6hIVdT8o5D8kKWOuzW67cUWiFWPzxWQJdI8kTyG88W5BdUu5UWPrwWP7dNL5BzwytWQ1gWPGhWPe", "FCkAW4RcIvPzcx91imkxb8kuzSoax2i0W6BdHSonWQNcSCkRWQddQG", "W5f0WRDuWOe", "y8krW7hcIKzNdK4", "ASkspNPIkxaiWRtcLSobbSoEpmk+W4dcOmoNx8oTz8kBgeil", "cKdcUq3dJmo3l3zd", "WOm3W5rbgmkrWP8", "rKTSr34EWPa", "W6VdImobWR/cJ24ayW", "W6ZdICkSW43cKG", "ymkIxa", "W6xdHSov", "d8kNmbq8", "W508lCo5W6/cMG", "WPNcLLdcQMRdLsu", "5y+h54MO5O+V6ykmrb7dSa", "ggKvWRaabJGWgmklqGbBfmkcWP3cVmoU", "WRpcRKmmAanwyauv", "6yoR55635OYn6yc1r8ocWRa", "vvfMwwiSWOP3W5FdN8kKnCkEW4aMemo9dKO", "W4u2bCo3W6pcL8kZ", "FxGcsG", "bKJcTXldJG", "W7vdBmk+FeFcPfxcVqPRWRXFW4ldR8kkW7RdPmoMjdm", "rSkcmCk0", "BxxdTmkrE8o/W6PUrSk1W7D8W4hdRfNcRmkN", "W6pdKCkMW4/cKZFdLZNdKG", "CgBdRcX2DxJdQSo1WOy", "qCkdjSoMWOOcbG", "WR3dPbabemoL", "W5G3imoYW67cLSkYW5m", "pgpcHty", "tmkxWPiApxC", "cIRcS2a2kXhcPSkSW4Pzzmk0W6ZcP8oYW4vUvCowWPxcM8o3WPhcMqPzntWuW4ZdQZXoh0DVW5yaW7yBnW", "sSoIp0XbfmoLAeRcUgVcKCkVW4RcLfT2bmkeWQHoW6FcUwRcKMGC", "n8kSWO03", "gqyFW43cH8oGWP7dISo3na", "W4v3WQjkWQGbpSogWRy", "fGysW58", "o8k5WO0MW6dcG8o8WPddTwmujYpcHmoGv042WOKk", "AwNcUuWIiGtdGeNdQ1GnW6xdQmk9W7pdPbzhoCkfFG", "CCoolSo2WRfmbtLUz8oiqGPAWQy", "bmkZiqGP", "CIfmW5G", "ACoFBCoaWQPy", "W5JcVEI/NUw4PCkz", "W6uGbSo8WO5BWPpcQW", "WPhcR8oBC8kzdG", "WRHsWONdN01FWP0YW75upSoVb2W0dCoSCSo2", "FxGcsSkEW60CW4i", "W7uUbSo8", "WPRcTmobzCkdu8kKWOyEkSo8jfrNyGRcICkJxCo8W5VdQh/cNmkCW7NcSY3dPMddVGO2B8oTW63cVHZdLCoOW5BcQSotWPm", "44kv5Psn5lUv5lQ85yw95z2j44kN5P2N56w+5Qss5l+l54Mv", "W4fhzr03DG", "WRldP8opBw0BWQlcRa", "jmkSWPaI", "qmktnSoWWOmf", "5lQS6lgbWRlMLAlLH6e", "WQJcVLD+", "5Bwd6k+N57YT6lwT6l2C6lYI6kkB5B+Z5yIc6lEi5yY+", "W7tdImkSW5lcMcddGJ/dMNhdSgGfiSoxWR/cH8kyW5W", "W7Dtr8kSAHZdPsxcRHbLW7XvWONdMSkaWRVdS8oGl2u0WOhcP3/cNI5ife8lwCkwCu1TvI0JWQ83WQT/Cr4jfX0aW4S2W4fLW5edWO3cJLSMuSojw0hdQZddQ8olEIBcLmkgzG", "hZVdO8oDrSoJW64", "W4jdCcS2zSk9", "WQpdP8ouDgWbWQRcU8kZnhG", "WPbWW6tdPmk3jG", "WPy3W5f8smkrWP8", "WOxcNM4M", "5y2h6yEO5BYZ5zoZ54QV5OcNW7C3W6nFn8oVbCkAWO3dMq", "WRZcQLb3", "ufz2tG", "44k96lsi5y+S", "gSk4nbK1WO7dLCkpW7j2WQy", "hSoHW483WPxdOmoZa8kIW6FdTCkCWObGWPjX", "CCooySo1WRq", "jmogWRRdO8k2of8", "5lQ155kL5B+l5yELW6LRCa", "mSkGWPyJW73dJq", "zNym", "vmkxn8oOWROcemkOgL8t", "FSkOsSo/hvmV", "W7BdOtpdRbDs", "W6/cH2X1WP8xmW", "W7tdRsNdRbjsW5i", "zwNdQa", "m8o744gq5PM25PId6lYm5P6K44o7W5S", "W6mQa8oOWODMWPi", "amk+iXm3WQRdLSkp", "WPVcH37cR2BdIa", "W5C1lmoXW6NcTSk2W5qU", "oCoH5PE65lIK5lI05yEK5z6SFtJcHG", "gCo+W4mI", "6lws5lUN5y+G5yIr6ygg55+J", "WQ3dSSosAuPiW6ddPSkcnN4gaCkSa8oQW6VdVaBdVCksW67dTmoEq2/cOmoEW7K6W5rAuXm", "hvS1WQOU", "W7SRlCo/WOD0WOJcMCkUrw3dSSo2WQBcR8kuWRlcOSosW4nIgSkT", "WRLwWO/dVNLyWP0ZW5PNiq", "mCo/oCkO", "W6yiW4CZW6S", "dXtdPWpdMG", "44c75RcF6lsy5l+D6Akd44kz772M", "wmkzlmoR", "W6n7w2tdIv8S", "mmomWRNdK8kYkem", "W6JdImorWR/dTa", "5lM45lUr5yEw5zYceLJdJq", "WR3cPuKcbSkVEmoVWQvjpWpdSwqHWPtdGmkqWODuW4eSsa", "W67dJmogWPBcP3qdFZNdJN0PA8kxWRbWB0BcMq", "W4hdOmoTfq", "WOlcNuJcQ0NdIspcVSkpACkf", "bwWJWQy", "W6ldMmk9W6ZcJHtdNYpdOgVdTKGFhG", "WR/cRLbfWOuhlq", "WR3cPvi", "creoW4NcRCo5WQddKCoHlM7cTe3cVtZcSa", "W7n/r2NdHL8S", "6k6K5l6Y55Er5P265BIa6yE05AAe55I7W7z0fw0aW4xdVLOglmoidtlMLBVKUP/OVltOORtKURtLRAhKU63MJO/PGzJORjFNV6a", "W4r2WRjD", "W4fbFa", "W5LbB2NcMW", "W7bUqIBdHriJWOq1zZT0", "WQVdUM5Ck0a8mq", "4PUslEIgOowTIos4RoI+T+IGMUMwM+MBR+AuLEMvNoIVKoE9KUMvQoISSG", "s8oLumor", "ACk/sCoLcG", "W4XfBq", "ExVdUCka", "WP7cGetcRupdGYFcNCkc", "W6hdNmk9W4e", "g2mPWR4qaZmC", "WQ/cQK1I", "WQRcG8omW5K", "g03cVXy", "WO92W6xdSCkM", "44cI5Pwg5lMz5lQz5ywZ5z2l44gK5REH5yUI54gg54M6", "mCkSWOOZW5RdL8k1W5a", "jCoEW7C", "FCkAW4RcIvPzcx91imkxb8kuzSoasxeVW7e", "44gT5PEt5lM35lQW5ywY5z6244od", "uCkgWOKki3a", "WO5WW7NdTSkVoG", "44gz56An5zgr5yYx5Oo+6AcT44k9", "WPy3W5f5gmkrWPHJvSkh", "mdVcTW", "WRpdHg5gkW", "W7pdTc7cOXmqW4eaFCoOWO3dKG", "wCkxWPuNzhaY", "W6xdPs7dUsPxW4yb", "W4iSimo9W77cGCkK", "b8orgmkraufmW6pdUg3dNG", "AdldGxW1nHlcUW", "WPZcKK/cPMBdKtdcLSkXC8khlSo2", "v8kjbgLQd8o3", "WRBcOuemBbruBGm5W47cQmkoDa", "lYBcRSoxFCkfWRznsmktW5HYW6u", "W6u9f8o4WQD7WOpcTmkQva", "au3cOGhdLG", "WPFcUmoCyq", "ysfrW40", "A8kOt8oggvq+W7ektgCjWOi3jHFcUWHO", "WRddTCodA3aCWQNcPG", "W7bTwg3dNhuNWOz0", "WRJdKwj/mrxdL8ofd313W50r", "WPJcR8oCEW", "Dmkebh1bpxi7WOtcISobd8oC", "W7XixSkXFeJcVKZcTWXJWQfqW4ldLmkNW7RdPCoHnG", "o8k5WO0MW6dcG8o8WPddPgesjYpcHmoGv042WOKkBSkFbCkgWP3dMSoSW4ngoSoDW6D4WOLIC8kOrJuJWQiJjCoaD8k5dSohrqpcT3NcQmkmW4SvWOr/CbJdOCooWPPjWPjLnhTrWPBdP8o6kZy+Bq", "W4TcDgFcHCkCkaPF", "CgtcGua", "aCoaFmk3W5Tbq8kPjuWro3u", "W6Wc5Rg35RMQ", "WRhcVZi", "WPlcLLlcQ2RdLdxcMCkxrmkhnSoN", "Ds9CW5W", "y8k/xmogeu0YW7yTEwu", "W4DkrgRcKSk5jYfDW7qAFSolW6lcMSoGiMxdQwRdGLG0s2q", "W44Blg7dGq", "W7ldNmkGW5tcTrRdMYG", "WRRcJCoCW5KEW4WHWQC", "fmk/BrS3", "dCk4lru2WQu", "WQtcHSoNW5OcW7iMWPybChSYF0pdLs9tW6RcG245WQ8", "ExxdQCkgjW", "s2ZJGkJKUBpMMiBOV4hMN5xJG6FcIa", "AmkSt8oR", "W5LbxwhcJ8k9lq", "W5hdS8oSeq", "CCkwCZtdRgfnWORdKbldPbKcW4GfW6P5WPNcT8krWRblW5BcLCoxlSkGW6NcNqmjiCk+", "a8kOpMXbfCoZ", "W64mW5iYW7ehyCoLWRNcSmoxW6PwrxG7gIfGW5NdTCo6WOpdSGG+uLSlB8kkW6ZcSMrZESkkWOBdUSkqkCkJq8knW5aGfW", "W6HgwSkO", "uSkDWOy", "W4il44cJ5PUs5PMd6l+H5P+v44cBWOu", "W6JdMSobWR/cSKKiAIi", "amkSpLK", "W4PcWR/cTSoig8oWpxSQ", "u3hdT8ohyCo6W7aAWOLlWONdOmoEWQRcS8kI", "c1BcVXlcKSktkMDeW6RdTGJdNSk8bNDB", "fWC0W47cI8oTWRZdVmoNkhVcIv7cUrFcVf7dVmkAWQDNtc4", "osWnx8o6", "WQBdL8oNWOLjWQnMW7K", "W5u4n8o/", "WR3dLx9OnXNdLCoZfwHuW4KqWORdQxL6WQm", "WRZcH8omW5SiW7CT", "fsRdTSodE8kSWQWAWRzxWPVdQSoBWRFcMmoeWO/dMMGMlCkvCJq5WRqbDdf3fwpdKmoixSkLdmowW4VdUCkyvN7cVsddHZlcICkKW4hdK8oOwmkGW5mHrmogWOmk", "cSk2nbK", "W7ZdMmk6W5tcHahdKIZdIKddUeKE", "uCoH5lI75A2Z5lM45O6i6ygAWRHEvG", "WP3dTv8", "W6hdVWO", "W6tdJCkGWO7cJf3dNcNcNxZdUfe", "sCktWOGBbwORW7O", "w8kCWPC", "DgJdJtLPB1ldRa", "WOBcOSosbsFcKSkFhW", "WRZdKxLgdqFdNCoKk25S", "omocWQBdSW", "WP7dO+oaOEs6P+AzN+I+T+ACJEoaKcO", "WQtcQKuHzar3CGu1W5hcTSkSEstcTKDIjG", "WQNcH8omW6SoW7qM", "WQ3cJCovW5uiW70", "lSolW7KgW6NdLmojmCkbW43dHmk3W7nnWQ4", "dCk4jb0", "dYKToG", "W6dcQgBcSmo7DmkQW4JdKSksW75ZW7ZdJ8oooCohn8kec0eaWO/cHvddSLvPWR7cICkgeG", "CIvmW5G1ASkgWP/cOmod", "W65svSkUyhxcVNJcTWXTWOzxW6JdKSkoW7ddS8o7", "m8onWR0", "E8kSuSo+"];
  _0x48fa = function () {
    return _0x330cd7;
  };
  return _0x48fa();
}
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