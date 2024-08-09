//Fri Aug 09 2024 17:11:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/**
 * 变量：elmck: 必填，账号cookie
 * cron: 7 0,6,12,18,22 * * *
 * 修复连连看
 */

const $ = new Env("\u997F\u4E86\u4E48\u4E50\u56ED\u5E01");
const {
  "getToken": getToken,
  "checkCk": checkCk,
  "wait": wait,
  "getCookies": getCookies,
  "getUserInfo": getUserInfo,
  "tryCatchPromise": tryCatchPromise
} = require("./common.js");
const request = require("request");
const md5 = require("md5");
function isEmpty(_0x591a20) {
  return Object["values"](_0x591a20)["length"] === 0;
}
async function lottery(_0x2a7333) {
  const _0x37f589 = {
    "authority": "shopping.ele.me",
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://r.ele.me",
    "pragma": "no-cache",
    "referer": "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    "cookie": _0x2a7333,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x47799a = {
    "actId": "20221207144029906162546384",
    "collectionId": "20230224114656384938530468",
    "componentId": "20230224114825216373367998",
    "bizScene": "game_center",
    "bizCode": "LOTTERY",
    "longitude": "120.21993197500706",
    "latitude": "30.178378857672215",
    "asac": "2A232091VOX6SPEQYH6RG4",
    "extParams": "{\"bizType\":\"LOTTERY\"}"
  };
  const _0x5695ee = new Date()["getTime"]();
  const _0x315936 = 12574478;
  var _0x369abd = "data=" + encodeURIComponent(JSON["stringify"](_0x47799a));
  const _0x881d98 = getToken(_0x2a7333);
  const _0x34e5a0 = _0x881d98["split"]("_")[0];
  const _0x26d75a = md5(_0x34e5a0 + "&" + _0x5695ee + "&" + _0x315936 + "&" + JSON["stringify"](_0x47799a));
  const _0x43bb72 = {
    "url": "https://guide-acs.m.taobao.com/h5/mtop.koubei.interactioncenter.platform.right.lottery/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x5695ee + "&sign=" + _0x26d75a + "&api=mtop.koubei.interactioncenter.platform.right.lottery&v=1.0&type=originaljson&dataType=json",
    "method": "POST",
    "headers": _0x37f589,
    "body": _0x369abd
  };
  return tryCatchPromise(_0x51ba78 => {
    request(_0x43bb72, async (_0x16ed8b, _0x409ead, _0x108964) => {
      if (!_0x16ed8b && _0x409ead["statusCode"] === 200) {
        try {
          const _0x13c6dc = JSON["parse"](_0x108964);
          if (isEmpty(_0x13c6dc["data"]["data"])) {
            console["log"](_0x13c6dc["ret"][0]);
            _0x51ba78(![]);
          } else {
            if (_0x13c6dc["data"]["data"]["errorMsg"]) {
              console["log"](_0x13c6dc["data"]["data"]["errorMsg"]);
            } else {
              let _0x2f73eb = _0x13c6dc["data"]["data"]["sendRightList"][0];
              const _0x2880f0 = _0x2f73eb["materialInfo"]["description"] + _0x2f73eb["materialInfo"]["title"];
              console["log"](_0x2880f0);
            }
            _0x51ba78(_0x13c6dc);
          }
        } catch (_0x2f051a) {
          _0x51ba78(![]);
        }
      } else {
        _0x51ba78(![]);
      }
    });
  });
}
async function lyb_sign(_0x24cd86) {
  const _0x4ec66f = await checkCk(_0x24cd86);
  const _0xcfadee = {
    "authority": "mtop.ele.me",
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "asac": "2A21607NIIT1ND5C4YXJ6C",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://tb.ele.me",
    "pragma": "no-cache",
    "referer": "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login",
    "cookie": _0x4ec66f,
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x502234 = new Date()["getTime"]();
  const _0x165860 = 12574478;
  const _0x57005c = {
    "bizScene": "game_center",
    "asac": "2A21607NIIT1ND5C4YXJ6C",
    "umidtoken": "defaultToken2_load_failed with timeout@@https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb@@" + _0x502234
  };
  var _0x436165 = "data=" + encodeURIComponent(JSON["stringify"](_0x57005c));
  const _0x4d6ee1 = getToken(_0x4ec66f);
  const _0x26b3ee = _0x4d6ee1["split"]("_")[0];
  const _0x4ee849 = md5(_0x26b3ee + "&" + _0x502234 + "&" + _0x165860 + "&" + JSON["stringify"](_0x57005c));
  const _0x3db8af = {
    "url": "https://mtop.ele.me/h5/mtop.koubei.interactioncenter.sign.component.recordsignin/1.0/5.0/?jsv=2.7.1&appKey=12574478&t=" + _0x502234 + "&sign=" + _0x4ee849 + "&api=mtop.koubei.interactioncenter.sign.component.recordsignin&v=1.0&ecode=1&type=json&valueType=string&needLogin=true&LoginRequest=true&dataType=jsonp&SV=5.0&asac=2A21607NIIT1ND5C4YXJ6C&secttid=h5%40android_chrome_87.0.4280.141",
    "method": "POST",
    "headers": _0xcfadee,
    "body": _0x436165
  };
  return tryCatchPromise(_0x203200 => {
    request(_0x3db8af, async (_0x272115, _0x1c441d, _0x179163) => {
      if (!_0x272115 && _0x1c441d["statusCode"] == 200) {
        const _0x533317 = JSON["parse"](_0x179163);
        if (_0x533317["data"]["errorMsg"]) {
          console["log"](_0x533317["data"]["errorMsg"]);
        } else {
          console["log"]("\u7B7E\u5230\u6210\u529F");
        }
        _0x203200(_0x533317);
      } else {
        _0x203200(null);
      }
    });
  });
}
async function lyb_llk_token(_0x439987) {
  const _0x2f601c = {
    "bizScene": "LIANLIANKAN",
    "bizMethod": "login",
    "bizParam": "{\"inviterId\":null,\"gameId\":null,\"token\":\"token\"}",
    "longitude": 114.174328,
    "latitude": 22.316555
  };
  const _0x470dc0 = await gameRequest(_0x439987, _0x2f601c);
  return _0x470dc0["data"]["token"];
}
async function lyb_llk_gamecode(_0x38c94c, _0x245e6e) {
  const _0x273bc4 = {
    "bizScene": "LIANLIANKAN",
    "bizMethod": "startGameV2",
    "bizParam": "{\"gameId\":null,\"token\":\"" + _0x245e6e + "\"}",
    "longitude": 114.174328,
    "latitude": 22.316555
  };
  const _0x8b94cf = await gameRequest(_0x38c94c, _0x273bc4);
  if (_0x8b94cf["bizErrorMsg"] != "success") {
    console["log"](_0x8b94cf["bizErrorMsg"]);
    return null;
  }
  return _0x8b94cf["data"]["gameCode"];
}
async function lyb_llk_passgame(_0xf45113, _0x38b9fe, _0x5456b3) {
  const _0x2d9a39 = {
    "bizScene": "LIANLIANKAN",
    "bizMethod": "settlement",
    "bizParam": "{\"gameCode\":\"" + _0x38b9fe + "\",\"passLevelTime\":40351,\"gameId\":null,\"token\":\"" + _0x5456b3 + "\"}"
  };
  const _0x32ca44 = await gameRequest(_0xf45113, _0x2d9a39);
  if (_0x32ca44["bizErrorMsg"] != "success") {
    console["log"](_0x32ca44["bizErrorMsg"]);
    return null;
  }
  return _0x32ca44["data"]["lastLevelId"];
}
async function gameRequest(_0x5c4a15, _0x293db2) {
  const _0x1de928 = {
    "authority": "shopping.ele.me",
    "accept": "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    "origin": "https://r.ele.me",
    "pragma": "no-cache",
    "referer": "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    "cookie": _0x5c4a15,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x34fa44 = new Date()["getTime"]();
  const _0x173b76 = 12574478;
  var _0x5976a2 = "data=" + encodeURIComponent(JSON["stringify"](_0x293db2));
  const _0x4e9995 = getToken(_0x5c4a15);
  const _0x3f9a68 = _0x4e9995["split"]("_")[0];
  const _0x282679 = md5(_0x3f9a68 + "&" + _0x34fa44 + "&" + _0x173b76 + "&" + JSON["stringify"](_0x293db2));
  const _0x2e5dc4 = {
    "url": "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x34fa44 + "&sign=" + _0x282679 + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    "method": "POST",
    "headers": _0x1de928,
    "body": _0x5976a2
  };
  return tryCatchPromise(_0x57f3b2 => {
    request(_0x2e5dc4, async (_0x5bbc13, _0x42298e, _0x37c3cc) => {
      if (!_0x5bbc13 && _0x42298e["statusCode"] == 200) {
        try {
          const _0x470bb4 = JSON["parse"](_0x37c3cc);
          const _0x87f7ce = JSON["parse"](_0x470bb4["data"]["data"]);
          _0x57f3b2(_0x87f7ce);
        } catch (_0x396c6a) {
          console["log"](_0x37c3cc);
          _0x57f3b2(null);
        }
      } else {
        _0x57f3b2(null);
      }
    });
  });
}
async function llk_game(_0x25bfaf, _0x3cbc40) {
  const _0x5e5e02 = await lyb_llk_gamecode(_0x25bfaf, _0x3cbc40);
  if (_0x5e5e02) {
    let _0x49e6f6 = await lyb_llk_passgame(_0x25bfaf, _0x5e5e02, _0x3cbc40);
    console["log"]("\u8FDE\u8FDE\u770B\u7B2C" + _0x49e6f6 + "\u5173\u95EF\u5173\u6210\u529F");
    console["log"]("\u968F\u673A\u7B49\u5F855-10s");
    await wait(getRandom(5, 10));
    if (_0x49e6f6 === 3) {
      return;
    } else {
      await llk_game(_0x25bfaf, _0x3cbc40);
    }
  } else {
    console["log"]("\u8FDE\u8FDE\u770B\u5DF2\u5B8C\u6210\u8FC7");
  }
}
async function water_login(_0x1f943d) {
  const _0x22a643 = {
    "bizScene": "WATER_SORT",
    "bizParam": "{\"type\":\"login\"}",
    "bizMethod": "login"
  };
  const _0x2d2d31 = await gameRequest(_0x1f943d, _0x22a643);
  return _0x2d2d31;
}
async function water_game_success(_0x5605a4) {
  const _0x320ec5 = {
    "bizScene": "WATER_SORT",
    "bizParam": "{\"type\":\"gameSuccess\"}",
    "bizMethod": "gameSuccess"
  };
  const _0x3d4a5f = await gameRequest(_0x5605a4, _0x320ec5);
  return _0x3d4a5f;
}
async function water_reward(_0x381a2a, _0x45fe93) {
  const _0x5b7071 = {
    "bizScene": "WATER_SORT",
    "bizParam": "{\"type\":\"getPassPrize\",\"data\":{\"addNum\":\"" + _0x45fe93 + "\",\"type\":1}}",
    "bizMethod": "getPassPrize"
  };
  const _0x2a1757 = await gameRequest(_0x381a2a, _0x5b7071);
  return _0x2a1757;
}
async function water_game(_0x3ee10c) {
  const _0x27e9b3 = await water_login(_0x3ee10c);
  const _0x50f5a3 = _0x27e9b3["passConf"];
  const _0x50e194 = [];
  for (let _0x3ac6d8 of Object["values"](_0x50f5a3)) {
    _0x50e194["push"](_0x3ac6d8["passNum"]);
  }
  var _0x55c700 = await water_game_success(_0x3ee10c);
  var _0x194b12 = _0x55c700["info"]["todayPass"];
  var _0x4ba1ef = 0;
  while (_0x194b12 <= _0x50e194[_0x50e194["length"] - 1]) {
    _0x55c700 = await water_game_success(_0x3ee10c);
    _0x194b12 = _0x55c700["info"]["todayPass"];
    console["log"]("\u6B22\u4E50\u5012\u6C34\u7B2C" + _0x194b12 + "\u5173\u95EF\u5173\u6210\u529F");
    if (_0x50e194["includes"](_0x194b12)) {
      _0x4ba1ef = _0x50e194["indexOf"](_0x194b12) + 1;
      const _0x499012 = await water_reward(_0x3ee10c, _0x4ba1ef);
      console["log"]("\u83B7\u5F97\uFF1A" + _0x499012["goldnum"] + "\u4E50\u56ED\u5E01");
    }
  }
  console["log"]("\u5FEB\u4E50\u5012\u6C34\u95EF\u5173\u5B8C\u6210");
}
async function start() {
  const _0x1612bb = getCookies();
  for (let _0x18c297 = 0; _0x18c297 < _0x1612bb["length"]; _0x18c297++) {
    const _0x5ed52b = _0x1612bb[_0x18c297];
    if (!_0x5ed52b) {
      console["log"](" \u274C\u65E0\u6548\u7528\u6237\u4FE1\u606F, \u8BF7\u91CD\u65B0\u83B7\u53D6ck");
    } else {
      try {
        let _0xaeedd3 = await checkCk(_0x5ed52b, _0x18c297);
        if (!_0xaeedd3) {
          continue;
        }
        let _0x55835b = await getUserInfo(_0xaeedd3);
        if (!_0x55835b["username"]) {
          console["log"]("\u7B2C", _0x18c297 + 1, "\u8D26\u53F7\u5931\u6548\uFF01\u8BF7\u91CD\u65B0\u767B\u5F55\uFF01\uFF01\uFF01\uD83D\uDE2D");
          continue;
        }
        const _0x266e75 = _0x55835b["user_id"];
        console["log"]("******\u5F00\u59CB\u3010\u997F\u4E86\u4E48\u8D26\u53F7", _0x18c297 + 1, "\u3011", _0x55835b["username"], "*********");
        await lyb_sign(_0xaeedd3);
        await lottery(_0xaeedd3);
        const _0x402827 = await lyb_llk_token(_0xaeedd3);
        await llk_game(_0xaeedd3, _0x402827);
        await llk_game(_0xaeedd3, _0x402827);
        await water_game(_0xaeedd3);
        console["log"]("\u8001\u79E6\u6700\u5E05");
        await wait(getRandom(5, 10));
      } catch (_0x54faf5) {
        console["log"](_0x54faf5);
      }
    }
  }
  process["exit"](0);
}
start();
function getRandom(_0x3bfe5c, _0x38370c) {
  return Math["floor"](Math["random"]() * (_0x38370c - _0x3bfe5c + 1) + _0x3bfe5c);
}
function Env(_0x1759e6, _0x1c342e) {
  "undefined" != typeof process && JSON["stringify"](process["env"])["indexOf"]("GITHUB") > -1 && process["exit"](0);
  class _0x5b3a29 {
    constructor(_0x282ebc) {
      this["env"] = _0x282ebc;
    }
    ["send"](_0x2629a2, _0x211493 = "GET") {
      _0x2629a2 = "string" == typeof _0x2629a2 ? {
        "url": _0x2629a2
      } : _0x2629a2;
      let _0x5a2f16 = this["get"];
      return "POST" === _0x211493 && (_0x5a2f16 = this["post"]), new Promise((_0x178f13, _0x51b2d5) => {
        _0x5a2f16["call"](this, _0x2629a2, (_0x22a257, _0x4e7aa2, _0x4fc604) => {
          _0x22a257 ? _0x51b2d5(_0x22a257) : _0x178f13(_0x4e7aa2);
        });
      });
    }
    ["get"](_0x291e00) {
      return this["send"]["call"](this["env"], _0x291e00);
    }
    ["post"](_0x165de7) {
      return this["send"]["call"](this["env"], _0x165de7, "POST");
    }
  }
  return new class {
    constructor(_0x3a94a2, _0x19b7e2) {
      this["name"] = _0x3a94a2, this["http"] = new _0x5b3a29(this), this["data"] = null, this["dataFile"] = "box.dat", this["logs"] = [], this["isMute"] = !1, this["isNeedRewrite"] = !1, this["logSeparator"] = "\n", this["startTime"] = new Date()["getTime"](), Object["assign"](this, _0x19b7e2), this["log"]("", "\uD83D\uDD14" + this["name"] + ", \u5F00\u59CB!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module["exports"];
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x564fe, _0x5d93da = null) {
      try {
        return JSON["parse"](_0x564fe);
      } catch {
        return _0x5d93da;
      }
    }
    ["toStr"](_0x369925, _0x335381 = null) {
      try {
        return JSON["stringify"](_0x369925);
      } catch {
        return _0x335381;
      }
    }
    ["getjson"](_0x213f5b, _0xc5b94e) {
      let _0x39d3cb = _0xc5b94e;
      const _0x296ff6 = this["getdata"](_0x213f5b);
      if (_0x296ff6) try {
        _0x39d3cb = JSON["parse"](this["getdata"](_0x213f5b));
      } catch {}
      return _0x39d3cb;
    }
    ["setjson"](_0x4932e3, _0x2ecc6e) {
      try {
        return this["setdata"](JSON["stringify"](_0x4932e3), _0x2ecc6e);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x1a32d1) {
      return new Promise(_0x1d598b => {
        this["get"]({
          "url": _0x1a32d1
        }, (_0x532d08, _0x44a9f8, _0x3a17f3) => _0x1d598b(_0x3a17f3));
      });
    }
    ["runScript"](_0x469436, _0x6dc920) {
      return new Promise(_0x2f9842 => {
        let _0x3d519d = this["getdata"]("@chavy_boxjs_userCfgs.httpapi");
        _0x3d519d = _0x3d519d ? _0x3d519d["replace"](/\n/g, "")["trim"]() : _0x3d519d;
        let _0xb150d4 = this["getdata"]("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0xb150d4 = _0xb150d4 ? 1 * _0xb150d4 : 20, _0xb150d4 = _0x6dc920 && _0x6dc920["timeout"] ? _0x6dc920["timeout"] : _0xb150d4;
        const [_0x9bcfd0, _0x533f9c] = _0x3d519d["split"]("@"),
          _0x388212 = {
            "url": "http://" + _0x533f9c + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x469436,
              "mock_type": "cron",
              "timeout": _0xb150d4
            },
            "headers": {
              "X-Key": _0x9bcfd0,
              "Accept": "*/*"
            }
          };
        this["post"](_0x388212, (_0x50b05c, _0x7a22f8, _0xa79ec2) => _0x2f9842(_0xa79ec2));
      })["catch"](_0x4a3d21 => this["logErr"](_0x4a3d21));
    }
    ["loaddata"]() {
      if (!this["isNode"]()) return {};
      {
        this["fs"] = this["fs"] ? this["fs"] : require("fs"), this["path"] = this["path"] ? this["path"] : require("path");
        const _0x1b9854 = this["path"]["resolve"](this["dataFile"]),
          _0x577cd7 = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
          _0xb95263 = this["fs"]["existsSync"](_0x1b9854),
          _0x10fb39 = !_0xb95263 && this["fs"]["existsSync"](_0x577cd7);
        if (!_0xb95263 && !_0x10fb39) return {};
        {
          const _0x343a27 = _0xb95263 ? _0x1b9854 : _0x577cd7;
          try {
            return JSON["parse"](this["fs"]["readFileSync"](_0x343a27));
          } catch (_0x3e606f) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this["isNode"]()) {
        this["fs"] = this["fs"] ? this["fs"] : require("fs"), this["path"] = this["path"] ? this["path"] : require("path");
        const _0x18f8dd = this["path"]["resolve"](this["dataFile"]),
          _0x51f039 = this["path"]["resolve"](process["cwd"](), this["dataFile"]),
          _0x421d4c = this["fs"]["existsSync"](_0x18f8dd),
          _0x4892e0 = !_0x421d4c && this["fs"]["existsSync"](_0x51f039),
          _0x1003bb = JSON["stringify"](this["data"]);
        _0x421d4c ? this["fs"]["writeFileSync"](_0x18f8dd, _0x1003bb) : _0x4892e0 ? this["fs"]["writeFileSync"](_0x51f039, _0x1003bb) : this["fs"]["writeFileSync"](_0x18f8dd, _0x1003bb);
      }
    }
    ["lodash_get"](_0x1f9ec4, _0x2d0253, _0x3d7e0f) {
      const _0x4ab606 = _0x2d0253["replace"](/\[(\d+)\]/g, ".$1")["split"](".");
      let _0x5999bb = _0x1f9ec4;
      for (const _0x11ce7e of _0x4ab606) if (_0x5999bb = Object(_0x5999bb)[_0x11ce7e], void 0 === _0x5999bb) return _0x3d7e0f;
      return _0x5999bb;
    }
    ["lodash_set"](_0x1e13e2, _0x59323f, _0x5cc069) {
      return Object(_0x1e13e2) !== _0x1e13e2 ? _0x1e13e2 : (Array["isArray"](_0x59323f) || (_0x59323f = _0x59323f["toString"]()["match"](/[^.[\]]+/g) || []), _0x59323f["slice"](0, -1)["reduce"]((_0x153855, _0x1c3b5c, _0x46ba72) => Object(_0x153855[_0x1c3b5c]) === _0x153855[_0x1c3b5c] ? _0x153855[_0x1c3b5c] : _0x153855[_0x1c3b5c] = Math["abs"](_0x59323f[_0x46ba72 + 1]) >> 0 == +_0x59323f[_0x46ba72 + 1] ? [] : {}, _0x1e13e2)[_0x59323f[_0x59323f["length"] - 1]] = _0x5cc069, _0x1e13e2);
    }
    ["getdata"](_0x240af6) {
      let _0x10c0c4 = this["getval"](_0x240af6);
      if (/^@/["test"](_0x240af6)) {
        const [, _0x2a0326, _0x3ed8fc] = /^@(.*?)\.(.*?)$/["exec"](_0x240af6),
          _0x403016 = _0x2a0326 ? this["getval"](_0x2a0326) : "";
        if (_0x403016) try {
          const _0x553144 = JSON["parse"](_0x403016);
          _0x10c0c4 = _0x553144 ? this["lodash_get"](_0x553144, _0x3ed8fc, "") : _0x10c0c4;
        } catch (_0x51e0be) {
          _0x10c0c4 = "";
        }
      }
      return _0x10c0c4;
    }
    ["setdata"](_0x513e5c, _0x45ebf3) {
      let _0x46e2c4 = !1;
      if (/^@/["test"](_0x45ebf3)) {
        const [, _0x511ac3, _0x4bf58f] = /^@(.*?)\.(.*?)$/["exec"](_0x45ebf3),
          _0x55021c = this["getval"](_0x511ac3),
          _0x29d2a3 = _0x511ac3 ? "null" === _0x55021c ? null : _0x55021c || "{}" : "{}";
        try {
          const _0x2eb991 = JSON["parse"](_0x29d2a3);
          this["lodash_set"](_0x2eb991, _0x4bf58f, _0x513e5c), _0x46e2c4 = this["setval"](JSON["stringify"](_0x2eb991), _0x511ac3);
        } catch (_0x421fd6) {
          const _0x327cf2 = {};
          this["lodash_set"](_0x327cf2, _0x4bf58f, _0x513e5c), _0x46e2c4 = this["setval"](JSON["stringify"](_0x327cf2), _0x511ac3);
        }
      } else _0x46e2c4 = this["setval"](_0x513e5c, _0x45ebf3);
      return _0x46e2c4;
    }
    ["getval"](_0x4f8fb2) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["read"](_0x4f8fb2) : this["isQuanX"]() ? $prefs["valueForKey"](_0x4f8fb2) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][_0x4f8fb2]) : this["data"] && this["data"][_0x4f8fb2] || null;
    }
    ["setval"](_0x171167, _0x5820be) {
      return this["isSurge"]() || this["isLoon"]() ? $persistentStore["write"](_0x171167, _0x5820be) : this["isQuanX"]() ? $prefs["setValueForKey"](_0x171167, _0x5820be) : this["isNode"]() ? (this["data"] = this["loaddata"](), this["data"][_0x5820be] = _0x171167, this["writedata"](), !0) : this["data"] && this["data"][_0x5820be] || null;
    }
    ["initGotEnv"](_0x2f50b9) {
      this["got"] = this["got"] ? this["got"] : require("got"), this["cktough"] = this["cktough"] ? this["cktough"] : require("tough-cookie"), this["ckjar"] = this["ckjar"] ? this["ckjar"] : new this["cktough"]["CookieJar"](), _0x2f50b9 && (_0x2f50b9["headers"] = _0x2f50b9["headers"] ? _0x2f50b9["headers"] : {}, void 0 === _0x2f50b9["headers"]["Cookie"] && void 0 === _0x2f50b9["cookieJar"] && (_0x2f50b9["cookieJar"] = this["ckjar"]));
    }
    ["get"](_0x47278e, _0x9411e8 = () => {}) {
      _0x47278e["headers"] && (delete _0x47278e["headers"]["Content-Type"], delete _0x47278e["headers"]["Content-Length"]), this["isSurge"]() || this["isLoon"]() ? (this["isSurge"]() && this["isNeedRewrite"] && (_0x47278e["headers"] = _0x47278e["headers"] || {}, Object["assign"](_0x47278e["headers"], {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient["get"](_0x47278e, (_0x27cad1, _0x20b0c4, _0x55a96d) => {
        !_0x27cad1 && _0x20b0c4 && (_0x20b0c4["body"] = _0x55a96d, _0x20b0c4["statusCode"] = _0x20b0c4["status"]), _0x9411e8(_0x27cad1, _0x20b0c4, _0x55a96d);
      })) : this["isQuanX"]() ? (this["isNeedRewrite"] && (_0x47278e["opts"] = _0x47278e["opts"] || {}, Object["assign"](_0x47278e["opts"], {
        "hints": !1
      })), $task["fetch"](_0x47278e)["then"](_0x51ae77 => {
        const {
          statusCode: _0x17ad06,
          statusCode: _0x505c7f,
          headers: _0xfc4036,
          body: _0x29ad7f
        } = _0x51ae77;
        _0x9411e8(null, {
          "status": _0x17ad06,
          "statusCode": _0x505c7f,
          "headers": _0xfc4036,
          "body": _0x29ad7f
        }, _0x29ad7f);
      }, _0x3aa23d => _0x9411e8(_0x3aa23d))) : this["isNode"]() && (this["initGotEnv"](_0x47278e), this["got"](_0x47278e)["on"]("redirect", (_0x351234, _0x1c27f7) => {
        try {
          if (_0x351234["headers"]["set-cookie"]) {
            const _0x368c7a = _0x351234["headers"]["set-cookie"]["map"](this["cktough"]["Cookie"]["parse"])["toString"]();
            _0x368c7a && this["ckjar"]["setCookieSync"](_0x368c7a, null), _0x1c27f7["cookieJar"] = this["ckjar"];
          }
        } catch (_0x3a1ff1) {
          this["logErr"](_0x3a1ff1);
        }
      })["then"](_0x2ae1a3 => {
        const {
          statusCode: _0x25f1b0,
          statusCode: _0x432dd4,
          headers: _0x4d4db8,
          body: _0x1dbcd7
        } = _0x2ae1a3;
        _0x9411e8(null, {
          "status": _0x25f1b0,
          "statusCode": _0x432dd4,
          "headers": _0x4d4db8,
          "body": _0x1dbcd7
        }, _0x1dbcd7);
      }, _0x2236c7 => {
        const {
          message: _0x2d973b,
          response: _0x2c4c24
        } = _0x2236c7;
        _0x9411e8(_0x2d973b, _0x2c4c24, _0x2c4c24 && _0x2c4c24["body"]);
      }));
    }
    ["post"](_0x5b81c8, _0x2e6bc8 = () => {}) {
      if (_0x5b81c8["body"] && _0x5b81c8["headers"] && !_0x5b81c8["headers"]["Content-Type"] && (_0x5b81c8["headers"]["Content-Type"] = "application/x-www-form-urlencoded"), _0x5b81c8["headers"] && delete _0x5b81c8["headers"]["Content-Length"], this["isSurge"]() || this["isLoon"]()) this["isSurge"]() && this["isNeedRewrite"] && (_0x5b81c8["headers"] = _0x5b81c8["headers"] || {}, Object["assign"](_0x5b81c8["headers"], {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient["post"](_0x5b81c8, (_0xfa8f5c, _0x3edb78, _0x3f4afa) => {
        !_0xfa8f5c && _0x3edb78 && (_0x3edb78["body"] = _0x3f4afa, _0x3edb78["statusCode"] = _0x3edb78["status"]), _0x2e6bc8(_0xfa8f5c, _0x3edb78, _0x3f4afa);
      });else if (this["isQuanX"]()) _0x5b81c8["method"] = "POST", this["isNeedRewrite"] && (_0x5b81c8["opts"] = _0x5b81c8["opts"] || {}, Object["assign"](_0x5b81c8["opts"], {
        "hints": !1
      })), $task["fetch"](_0x5b81c8)["then"](_0x3d3b9e => {
        const {
          statusCode: _0x5876fd,
          statusCode: _0x395fb7,
          headers: _0x261e3b,
          body: _0xce0ad4
        } = _0x3d3b9e;
        _0x2e6bc8(null, {
          "status": _0x5876fd,
          "statusCode": _0x395fb7,
          "headers": _0x261e3b,
          "body": _0xce0ad4
        }, _0xce0ad4);
      }, _0xb2bafd => _0x2e6bc8(_0xb2bafd));else if (this["isNode"]()) {
        this["initGotEnv"](_0x5b81c8);
        const {
          url: _0x3d5f56,
          ..._0x513aa0
        } = _0x5b81c8;
        this["got"]["post"](_0x3d5f56, _0x513aa0)["then"](_0xf5af63 => {
          const {
            statusCode: _0x4c7950,
            statusCode: _0x53056c,
            headers: _0x5b3aa0,
            body: _0x2f8aa9
          } = _0xf5af63;
          _0x2e6bc8(null, {
            "status": _0x4c7950,
            "statusCode": _0x53056c,
            "headers": _0x5b3aa0,
            "body": _0x2f8aa9
          }, _0x2f8aa9);
        }, _0x191896 => {
          const {
            message: _0x155c37,
            response: _0x13a0ee
          } = _0x191896;
          _0x2e6bc8(_0x155c37, _0x13a0ee, _0x13a0ee && _0x13a0ee["body"]);
        });
      }
    }
    ["time"](_0x3175c3, _0x4fe252 = null) {
      const _0x34d93c = _0x4fe252 ? new Date(_0x4fe252) : new Date();
      let _0x27cae4 = {
        "M+": _0x34d93c["getMonth"]() + 1,
        "d+": _0x34d93c["getDate"](),
        "H+": _0x34d93c["getHours"](),
        "m+": _0x34d93c["getMinutes"](),
        "s+": _0x34d93c["getSeconds"](),
        "q+": Math["floor"]((_0x34d93c["getMonth"]() + 3) / 3),
        "S": _0x34d93c["getMilliseconds"]()
      };
      /(y+)/["test"](_0x3175c3) && (_0x3175c3 = _0x3175c3["replace"](RegExp["$1"], (_0x34d93c["getFullYear"]() + "")["substr"](4 - RegExp["$1"]["length"])));
      for (let _0x2aa5eb in _0x27cae4) new RegExp("(" + _0x2aa5eb + ")")["test"](_0x3175c3) && (_0x3175c3 = _0x3175c3["replace"](RegExp["$1"], 1 == RegExp["$1"]["length"] ? _0x27cae4[_0x2aa5eb] : ("00" + _0x27cae4[_0x2aa5eb])["substr"](("" + _0x27cae4[_0x2aa5eb])["length"])));
      return _0x3175c3;
    }
    ["msg"](_0x23ef3e = _0x1759e6, _0x1a70e9 = "", _0x3fd03a = "", _0x90aa42) {
      const _0x2f8bf7 = _0x3efd50 => {
        if (!_0x3efd50) return _0x3efd50;
        if ("string" == typeof _0x3efd50) return this["isLoon"]() ? _0x3efd50 : this["isQuanX"]() ? {
          "open-url": _0x3efd50
        } : this["isSurge"]() ? {
          "url": _0x3efd50
        } : void 0;
        if ("object" == typeof _0x3efd50) {
          if (this["isLoon"]()) {
            let _0x1c4df7 = _0x3efd50["openUrl"] || _0x3efd50["url"] || _0x3efd50["open-url"],
              _0x2c197e = _0x3efd50["mediaUrl"] || _0x3efd50["media-url"];
            return {
              "openUrl": _0x1c4df7,
              "mediaUrl": _0x2c197e
            };
          }
          if (this["isQuanX"]()) {
            let _0x38c8aa = _0x3efd50["open-url"] || _0x3efd50["url"] || _0x3efd50["openUrl"],
              _0x25d4e5 = _0x3efd50["media-url"] || _0x3efd50["mediaUrl"];
            return {
              "open-url": _0x38c8aa,
              "media-url": _0x25d4e5
            };
          }
          if (this["isSurge"]()) {
            let _0x3a3dc9 = _0x3efd50["url"] || _0x3efd50["openUrl"] || _0x3efd50["open-url"];
            return {
              "url": _0x3a3dc9
            };
          }
        }
      };
      if (this["isMute"] || (this["isSurge"]() || this["isLoon"]() ? $notification["post"](_0x23ef3e, _0x1a70e9, _0x3fd03a, _0x2f8bf7(_0x90aa42)) : this["isQuanX"]() && $notify(_0x23ef3e, _0x1a70e9, _0x3fd03a, _0x2f8bf7(_0x90aa42))), !this["isMuteLog"]) {
        let _0x4f7ca4 = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        _0x4f7ca4["push"](_0x23ef3e), _0x1a70e9 && _0x4f7ca4["push"](_0x1a70e9), _0x3fd03a && _0x4f7ca4["push"](_0x3fd03a), console["log"](_0x4f7ca4["join"]("\n")), this["logs"] = this["logs"]["concat"](_0x4f7ca4);
      }
    }
    ["log"](..._0x4c69e) {
      _0x4c69e["length"] > 0 && (this["logs"] = [...this["logs"], ..._0x4c69e]), console["log"](_0x4c69e["join"](this["logSeparator"]));
    }
    ["logErr"](_0x4aa270, _0x1b0d74) {
      const _0x740f7a = !this["isSurge"]() && !this["isQuanX"]() && !this["isLoon"]();
      _0x740f7a ? this["log"]("", "\u2757\uFE0F" + this["name"] + ", \u9519\u8BEF!", _0x4aa270["stack"]) : this["log"]("", "\u2757\uFE0F" + this["name"] + ", \u9519\u8BEF!", _0x4aa270);
    }
    ["wait"](_0x51d2d9) {
      return new Promise(_0x1c2948 => setTimeout(_0x1c2948, _0x51d2d9));
    }
    ["done"](_0xd27aa3 = {}) {
      const _0x2b3ff3 = new Date()["getTime"](),
        _0x486788 = (_0x2b3ff3 - this["startTime"]) / 1000;
      this["log"]("", "\uD83D\uDD14" + this["name"] + ", \u7ED3\u675F! \uD83D\uDD5B " + _0x486788 + " \u79D2"), this["log"](), (this["isSurge"]() || this["isQuanX"]() || this["isLoon"]()) && $done(_0xd27aa3);
    }
  }(_0x1759e6, _0x1c342e);
}