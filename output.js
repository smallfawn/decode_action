//Mon Jul 08 2024 04:49:15 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  getToken,
  sign,
  tryCatchPromise,
  validateCarmeWithType,
  getCookies,
  checkCk,
  getUserInfo,
  checkCarmeCount,
  wait
} = require("./common");
const _0x38436e = 12;
const _0x23dc98 = require("request");
const _0x5c30ec = process.env.ELE_CARME;
async function _0x58fe79(_0x1938bb) {
  const _0x213706 = new Date().getTime();
  const _0x1aea2b = {
    instance: "INNER",
    method: "GET",
    options: "{\"env\":\"online\"}",
    path: "/getCertificationInfo",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x213706 + "\",\"mc-env\":\"online\"}",
    queryString: "{}",
    sdkVersion: "1.5.4"
  };
  let _0x485b28 = await _0x2928b2(_0x1938bb, _0x1aea2b);
  return _0x485b28.authentication;
}
async function _0x2928b2(_0x383f4c, _0xcca1bd) {
  const _0x48e431 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x383f4c,
    "x-miniapp-id-taobao": "3000000078920071",
    "x-miniapp-version": "0.0.116",
    "x-mini-appkey": "34190632",
    "x-req-appkey": "34190632",
    appid: "3000000078920071"
  };
  const _0x5b0fb1 = new Date().getTime();
  const _0x41c3bc = 34190632;
  var _0x4f1c6f = "data=" + encodeURIComponent(JSON.stringify(_0xcca1bd));
  const _0x115515 = getToken(_0x383f4c),
    _0x322f91 = _0x115515.split("_")[0];
  const _0xe48caa = await sign(_0x322f91 + "&" + _0x5b0fb1 + "&" + _0x41c3bc + "&" + JSON.stringify(_0xcca1bd), _0x5c30ec);
  const _0x109901 = {
    url: "https://shopping.ele.me/h5/mtop.miniapp.cloud.application.request/1.0/?jsv=2.6.1&appKey=34190632&t=" + _0x5b0fb1 + "&sign=" + _0xe48caa + "&api=mtop.miniapp.cloud.application.request&v=1.0&type=originaljson&ttid=1608030065155%40eleme_android_11.0.38",
    method: "POST",
    headers: _0x48e431,
    body: _0x4f1c6f
  };
  return tryCatchPromise(_0x1993b3 => {
    _0x23dc98(_0x109901, async (_0x3c170f, _0x1a32da, _0x4ff6bf) => {
      if (!_0x3c170f && _0x1a32da.statusCode === 200) {
        try {
          const _0x2d4486 = JSON.parse(_0x4ff6bf);
          _0x1993b3(_0x2d4486.data.data);
        } catch (_0x5ad4f2) {
          console.log(_0x4ff6bf);
          _0x1993b3(null);
        }
      } else {
        _0x1993b3(null);
      }
    });
  });
}
async function _0x337fd4(_0x6031a9) {
  const _0x350363 = new Date().getTime();
  const _0x27835c = {
    instance: "INNER",
    method: "GET",
    options: "{\"env\":\"online\"}",
    path: "/enterHome",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x350363 + "\",\"mc-env\":\"online\"}",
    queryString: "{}",
    sdkVersion: "1.5.4"
  };
  const _0x1c3f14 = await _0x2928b2(_0x6031a9, _0x27835c);
  return _0x1c3f14.playerInfo;
}
async function _0x1c69aa(_0x574335) {
  const _0x4eb470 = new Date().getTime();
  const _0x308f36 = {
    instance: "INNER",
    method: "GET",
    options: "{\"env\":\"online\"}",
    path: "/getEventTasks",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x4eb470 + "\",\"mc-env\":\"online\"}",
    queryString: "{}",
    sdkVersion: "1.5.4"
  };
  let _0x43d3bb = await _0x2928b2(_0x574335, _0x308f36);
  return _0x43d3bb.taskList;
}
function _0x12353a(_0x32ea65, _0x284d9d = false) {
  let _0x1ad749 = true;
  for (let _0x279c39 = 0; _0x279c39 < _0x32ea65.length; _0x279c39++) {
    let _0x2dd094 = _0x32ea65[_0x279c39];
    let _0x46ce0e = _0x2dd094.finishStatus;
    let _0x32fd13 = _0x2dd094.actionType;
    if (_0x32fd13 === "score" && _0x284d9d) {
      continue;
    }
    if (!_0x46ce0e) {
      _0x1ad749 = _0x46ce0e;
      return _0x1ad749;
    }
  }
  return _0x1ad749;
}
function _0x1a7876(_0x44d189, _0x1c26ee) {
  var _0x4117e0 = Math.floor(Math.random() * (_0x1c26ee - _0x44d189 + 1) + _0x44d189);
  return _0x4117e0;
}
async function _0x1a5a37(_0x4953fd, _0x969ed3, _0x11435c, _0x5da44f) {
  const _0x4e16d3 = {
    body: "{\"level\":" + _0x11435c + ",\"itemBuy\":[],\"type\":\"" + _0x5da44f + "\"}",
    headers: "{\"Content-Type\":\"application/json;charset=UTF-8\"}",
    instance: "INNER",
    method: "POST",
    options: "{\"env\":\"online\"}",
    path: "/enterLevelNew",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + new Date().getTime() + "\",\"mc-env\":\"online\"}",
    queryString: "{\"playerToken\":\"" + _0x969ed3.playerId + new Date().getTime() + "\"}",
    sdkVersion: "1.5.4"
  };
  return await _0x2928b2(_0x4953fd, _0x4e16d3);
}
async function _0x20303c(_0x467ceb, _0xf5b55d) {
  const _0x523c44 = new Date().getTime();
}
async function _0x6aaa57(_0x3da9c0) {
  try {
    const _0x484e9e = new Date().getTime();
    const _0x151ffd = {
      instance: "INNER",
      method: "GET",
      options: "{\"env\":\"online\"}",
      path: "/getNewChallengeInfo",
      protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x484e9e + "\",\"mc-env\":\"online\"}",
      queryString: "{}",
      sdkVersion: "1.5.4"
    };
    const _0x385406 = await _0x2928b2(_0x3da9c0, _0x151ffd);
    return _0x385406.levelInfo.id;
  } catch (_0x77854a) {
    console.log("赛季挑战还未开始");
    return null;
  }
}
async function _0x547a04(_0x141422) {
  let _0x24ee75 = 1;
  let _0x22ee65 = await _0x337fd4(_0x141422);
  await wait(1);
  let _0x303b58 = await _0x1c69aa(_0x141422);
  if (!_0x303b58) {
    const _0x177d09 = _0x22ee65.level;
    if (_0x177d09 === 0) {
      console.log("该账号没有玩过美食摊，请玩过后在跑脚本");
    } else {
      console.log("获取任务列表失败，请稍后再试");
    }
    return;
  }
  let _0x7a0f55 = 1;
  let _0x1a93fe = 100;
  let _0x1dd6da = 100;
  let _0x1d9a36 = _0x12353a(_0x303b58);
  let _0x49ce2c = false;
  for (let _0x181dc6 = 0; _0x181dc6 < _0x303b58.length; _0x181dc6++) {
    let _0x3b7157 = _0x303b58[_0x181dc6];
    let _0x192c5d = _0x3b7157.actionType;
    let _0xb0f88c = _0x3b7157.finishStatus;
    let _0x53c01c = _0x3b7157.targetAmount;
    if (_0x192c5d === "hit" && _0xb0f88c === false) {
      _0x7a0f55 = _0x53c01c;
    } else {
      if (_0x192c5d === "customer" && _0xb0f88c === false) {
        _0x1a93fe = _0x53c01c;
      } else {
        if (_0x192c5d === "makeDishes" && _0xb0f88c === false) {
          _0x1dd6da = _0x53c01c;
        } else {
          if (_0x192c5d === "score") {
            _0x49ce2c = !_0xb0f88c;
          }
        }
      }
    }
  }
  let _0x115eea = false;
  while (!_0x1d9a36 && _0x24ee75 < 10) {
    _0x24ee75++;
    try {
      let _0x220eab = await _0x337fd4(_0x141422);
      const _0x14c26e = _0x220eab.level;
      let _0x28a68b = _0x14c26e + 1;
      await _0x20303c(_0x141422, _0x28a68b);
      let _0x2cb924 = _0x1a7876(10000, 30000);
      let _0x32e42c = _0x1a7876(30, 50);
      let _0x327bb8 = "GAME";
      if (_0x49ce2c && !_0x115eea) {
        _0x327bb8 = "DAILY_CHALLENGE";
        let _0x259099 = await _0x6aaa57(_0x141422);
        if (_0x259099 === null) {
          _0x327bb8 = "GAME";
          _0x115eea = true;
        } else {
          _0x28a68b = _0x259099;
        }
      }
      const _0x21d6c7 = await _0x1a5a37(_0x141422, _0x220eab, _0x28a68b, _0x327bb8);
      if (_0x21d6c7.errorMessage) {
        console.log(_0x21d6c7.errorMessage);
        break;
      }
      const _0xb189a8 = {
        body: "{\"level\":\"" + _0x28a68b + "\",\"finishLevel\":true,\"maxHit\":" + _0x7a0f55 + ",\"angry\":false,\"like\":" + _0x32e42c + ",\"score\":" + _0x2cb924 + ",\"playerHead\":\"https://gw.alicdn.com/imgextra/i2/O1CN01dU4q4e1xzSlu9tqun_!!6000000006514-2-tps-512-512.png\",\"playerName\":\"tb**cd6\",\"r\":[400,6000,104,4200,220,2290,98,2000,6000,420,4000,420,173,4000,630,200,210,4400,168,6000,600,400],\"levelType\":\"" + _0x327bb8 + "\",\"customerAmount\":" + _0x1a93fe + ",\"scorchDishes\": 0,\"wasteBins\":0,\"golds\":189,\"gem\":1,\"itemUsed\":[],\"itemBuy\":[],\"foods\":[{\"food\":\"doujiang\",\"amount\":" + _0x1dd6da + "},{\"food\":\"mianbing\",\"amount\":10},{\"food\":\"mianbing_shengcai_kaochang_shalajiang\",\"amount\":1},{\"food\":\"mianbing_shengcai_kaochang\",\"amount\":7},{\"food\":\"mianbing_kaochang\",\"amount\":1}]}",
        headers: "{\"Content-Type\":\"application/json;charset=UTF-8\"}",
        instance: "INNER",
        method: "POST",
        options: "{\"env\":\"online\"}",
        path: "/finishLevel",
        protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + new Date().getTime() + "\",\"mc-env\":\"online\"}",
        queryString: "{\"playerToken\":\"" + _0x220eab.playerId + new Date().getTime() + "\"}",
        sdkVersion: "1.5.4"
      };
      let _0x43d129 = await _0x2928b2(_0x141422, _0xb189a8);
      if (_0x43d129 && _0x43d129.errorMessage === "没有对应关卡") {
        console.log("你已通关");
        break;
      } else {
        if (_0x43d129.errorMessage) {
          console.log(_0x43d129.errorMessage);
          break;
        }
      }
      _0x303b58 = await _0x1c69aa(_0x141422);
      _0x1d9a36 = _0x12353a(_0x303b58, _0x115eea);
      for (let _0xe39dc = 0; _0xe39dc < _0x303b58.length; _0xe39dc++) {
        let _0x4bd0db = _0x303b58[_0xe39dc];
        let _0x172057 = _0x4bd0db.actionType;
        let _0x288835 = _0x4bd0db.finishStatus;
        let _0x56528e = _0x4bd0db.targetAmount;
        if (_0x172057 === "hit" && _0x288835 === false) {
          _0x7a0f55 = _0x56528e;
        } else {
          if (_0x172057 === "customer" && _0x288835 === false) {
            _0x1a93fe = _0x56528e;
          } else {
            if (_0x172057 === "makeDishes" && _0x288835 === false) {
              _0x1dd6da = _0x56528e;
            } else {
              if (_0x172057 === "score" && !_0x115eea) {
                _0x49ce2c = !_0x288835;
              }
            }
          }
        }
      }
      for (let _0x553676 = 0; _0x553676 < _0x303b58.length; _0x553676++) {
        let _0x101cc6 = _0x303b58[_0x553676];
        if (_0x101cc6.isAvailable) {
          const _0x321ee8 = await _0x5d6ac3(_0x141422, _0x101cc6.id);
          if (_0x321ee8) {
            console.log(_0x101cc6.description + "已完成，当前乐园币：" + _0x321ee8);
          }
        }
      }
    } catch (_0x347024) {
      console.log(_0x347024);
    }
  }
  if (_0x12353a(_0x303b58, _0x115eea)) {
    console.log("经营美食摊任务全部完成😄");
  }
}
async function _0x5d6ac3(_0x5ca30d, _0x48b1de) {
  const _0x21d91f = new Date().getTime();
  const _0x1b56f7 = {
    body: "{\"taskId\":" + _0x48b1de + "}",
    headers: "{\"Content-Type\":\"application/json;charset=UTF-8\"}",
    instance: "INNER",
    method: "POST",
    options: "{\"env\":\"online\"}",
    path: "/sendDish",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0x21d91f + "\",\"mc-env\":\"online\"}",
    sdkVersion: "1.5.4"
  };
  return await _0x2928b2(_0x5ca30d, _0x1b56f7);
}
async function _0x51929f() {
  await validateCarmeWithType(_0x5c30ec, 1);
  const _0x457dfa = getCookies();
  for (let _0x3054fb = 0; _0x3054fb < _0x457dfa.length; _0x3054fb++) {
    const _0x4f239e = _0x457dfa[_0x3054fb];
    if (!_0x4f239e) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0xfe58ae = await checkCk(_0x4f239e, _0x3054fb);
        if (!_0xfe58ae) {
          continue;
        }
        let _0x13aa44 = await getUserInfo(_0xfe58ae);
        if (!_0x13aa44.username) {
          console.log("第", _0x3054fb + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0x2ed612 = _0x13aa44.user_id;
        await checkCarmeCount(_0x5c30ec, _0x2ed612, _0x38436e);
        console.log("******开始【饿了么账号", _0x3054fb + 1, "】", _0x13aa44.username, "*********");
        let _0x4c6f12 = await _0x58fe79(_0xfe58ae);
        if (!_0x4c6f12) {
          console.log("请完成实名认证后再来玩游戏");
          continue;
        }
        await _0x547a04(_0xfe58ae);
        if (_0x3054fb !== _0x457dfa.length - 1) {
          console.log("延时 5 秒");
          await wait(5);
        }
      } catch (_0x2cf95c) {
        console.log(_0x2cf95c);
      }
    }
  }
  process.exit(0);
}
_0x51929f();