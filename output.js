//Mon Jul 08 2024 04:52:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  sign,
  getToken,
  checkCk,
  getCookies,
  getUserInfo,
  validateCarmeWithType,
  checkCarmeCount,
  tryCatchPromise
} = require("./common.js");
const request = require("request");
const {
  wait
} = require("./common");
const GAME_TYEP = 6;
const kami = process.env.ELE_CARME;
function isEmpty(_0x5eb02e) {
  return Object.values(_0x5eb02e).length === 0;
}
async function lottery(_0x441099) {
  const _0x164482 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x441099,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x4c8be9 = {
    actId: "20221207144029906162546384",
    collectionId: "20230224114656384938530468",
    componentId: "20230224114825216373367998",
    bizScene: "game_center",
    bizCode: "LOTTERY",
    longitude: "120.21993197500706",
    latitude: "30.178378857672215",
    asac: "2A232091VOX6SPEQYH6RG4",
    extParams: "{\"bizType\":\"LOTTERY\"}",
    ua: "140#CK1oj11hzzW9Szo2K52s+pN8s77HHUFmuM/UtDDs0Qi3WsJVBjgCRSpLBmwg1t45dolchfqRmKl1bALrrsgqlbzxhMT65/VGzzcSb1NVl3MzzPzbVXlqlYfWGwrfAdGuzF4SLIuKlpODzPzYVXEul+Fx3DH3uJBlzFzb2mD5lp1bojnSONdOHaU+WFtTI267wOPmhF8Lb1t1AGAMJzaUhlSZ37eoVlUxdJDMRuBaLMfDybLO0h1eFD9Bu8b+DVPhp0zq91yfNSAXB7K0jltKROauR0mY6uMsohEuI04aSewXLPQudoCKe4KTqOdcfQxcM7naN0frsSX8GkmfK7MJZvMjY1U5qUZ8S6B6etbmdFpXI71kiclSbDtLx68pvrlX+Fc4UR+S3Pe1djdcWkhUqAOMMF1UoPppTe48HVaz+8QLqCm5C+vFVcG/nR4fp/Nqr9zxZZ1BEF2cqauKj9rwh1wg0ciKSZHr7d7+iqSugixQcmeWHucfFqAnDSqbHS8s0IlgXzfyfX4mbjfwsHaceDK5eauu/HlurzK0IpFhTLNn95u4XaF2p+Vx7/iLXMyEDky/HPCNi8XALSXJrmIz7wz6xcq2coakOoMyCQhrEhtsCgKAdzI0tjMldN3kNPusrd2JYaqKN6tK0a3ntrBfPvKjkXqX7p9CYI7DIp40BjnHwQCDKd3fZl6Fu4aOYZlfXnVkuSnuL0gkYtscTU4hIBmZsaKOKXSJdWYdynhh29HJVvpLAptEkD8Lnvm9nXnk7GorF+NPoY/dpJ+S2eh8/XksaIyRH3zWcpW5Ua30Hn94YEcqMFI/gQVjPHTdGkzBbjU8oTiLJ5Y5qSIY5eDM6T7XYoSwhGbyAL+=",
    umidtoken: "T2gA__C3-r3sSTF7ZzBUS-C0RcKNSn8q17hKFBPM5pcplOQGdIK15W9ScohgOWU8PE0="
  };
  const _0x5cf979 = new Date().getTime();
  const _0x589efa = 12574478;
  var _0x50f757 = "data=" + encodeURIComponent(JSON.stringify(_0x4c8be9));
  const _0x518b43 = getToken(_0x441099),
    _0x3f3df5 = _0x518b43.split("_")[0];
  const _0x1b7023 = await sign(_0x3f3df5 + "&" + _0x5cf979 + "&" + _0x589efa + "&" + JSON.stringify(_0x4c8be9), kami);
  const _0x4156e1 = {
    url: "https://guide-acs.m.taobao.com/h5/mtop.koubei.interactioncenter.platform.right.lottery/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x5cf979 + "&sign=" + _0x1b7023 + "&api=mtop.koubei.interactioncenter.platform.right.lottery&v=1.0&type=originaljson&dataType=json",
    method: "POST",
    headers: _0x164482,
    body: _0x50f757
  };
  return tryCatchPromise(_0x18a0e9 => {
    request(_0x4156e1, async (_0x53422a, _0x24898a, _0xb8dfb5) => {
      if (!_0x53422a && _0x24898a.statusCode === 200) {
        try {
          const _0x2f5905 = JSON.parse(_0xb8dfb5);
          if (isEmpty(_0x2f5905.data.data)) {
            console.log(_0x2f5905.ret[0]);
            _0x18a0e9(false);
          } else {
            if (_0x2f5905.data.data.errorMsg) {
              console.log(_0x2f5905.data.data.errorMsg);
            } else {
              let _0x14c287 = _0x2f5905.data.data.sendRightList[0];
              const _0x32671a = _0x14c287.materialInfo.description + _0x14c287.materialInfo.title;
              console.log(_0x32671a);
            }
            _0x18a0e9(_0x2f5905);
          }
        } catch (_0x5bf7f5) {
          _0x18a0e9(false);
        }
      } else {
        _0x18a0e9(false);
      }
    });
  });
}
async function lyb_sign(_0x3a3148) {
  const _0x5007d6 = await checkCk(_0x3a3148);
  const _0x3a79b2 = {
    authority: "mtop.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    asac: "2A21607NIIT1ND5C4YXJ6C",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://tb.ele.me",
    pragma: "no-cache",
    referer: "https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb?spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a2ogi.13162730.zebra-ele-login-module-9089118186&spm-pre=a13.b_activity_kb_m71293.ebridge.login",
    cookie: _0x5007d6,
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x4458f1 = new Date().getTime();
  const _0x47de7c = 12574478;
  const _0x51fe1b = {
    bizScene: "game_center",
    asac: "2A21607NIIT1ND5C4YXJ6C",
    umidtoken: "defaultToken2_load_failed with timeout@@https://tb.ele.me/wow/alsc/mod/b9ee9e6451bc8eda7a6afcbb@@" + _0x4458f1
  };
  var _0x460cf7 = "data=" + encodeURIComponent(JSON.stringify(_0x51fe1b));
  const _0x5c1418 = getToken(_0x5007d6),
    _0x2e8100 = _0x5c1418.split("_")[0];
  const _0x57f632 = await sign(_0x2e8100 + "&" + _0x4458f1 + "&" + _0x47de7c + "&" + JSON.stringify(_0x51fe1b), kami);
  const _0x103a27 = {
    url: "https://mtop.ele.me/h5/mtop.koubei.interactioncenter.sign.component.recordsignin/1.0/5.0/?jsv=2.7.1&appKey=" + _0x47de7c + "&t=" + _0x4458f1 + "&sign=" + _0x57f632 + "&api=mtop.koubei.interactioncenter.sign.component.recordsignin&v=1.0&ecode=1&type=json&valueType=string&needLogin=true&LoginRequest=true&dataType=jsonp&SV=5.0&asac=2A21607NIIT1ND5C4YXJ6C&secttid=h5%40android_chrome_87.0.4280.141",
    method: "POST",
    headers: _0x3a79b2,
    body: _0x460cf7
  };
  return tryCatchPromise(_0x35144b => {
    request(_0x103a27, async (_0x2a14dd, _0x1b1f47, _0x2f2f86) => {
      if (!_0x2a14dd && _0x1b1f47.statusCode == 200) {
        const _0x2af948 = JSON.parse(_0x2f2f86);
        if (_0x2af948.data.errorMsg) {
          console.log(_0x2af948.data.errorMsg);
        } else {
          console.log("签到成功");
        }
        _0x35144b(_0x2af948);
      } else {
        _0x35144b(null);
      }
    });
  });
}
async function lyb_llk_token(_0x4ce4bd) {
  const _0x139c7c = {
    bizScene: "LIANLIANKAN",
    bizMethod: "login",
    bizParam: "{\"inviterId\":null,\"gameId\":null,\"token\":\"token\"}",
    longitude: 114.174328,
    latitude: 22.316555
  };
  const _0x32416e = await gameRequest(_0x4ce4bd, _0x139c7c);
  return _0x32416e.data.token;
}
async function lyb_llk_gamecode(_0x2f4631, _0x169c28) {
  const _0x34a699 = {
    bizScene: "LIANLIANKAN",
    bizMethod: "startGame",
    bizParam: "{\"gameId\":null,\"token\":\"" + _0x169c28 + "\"}",
    longitude: 114.174328,
    latitude: 22.316555
  };
  const _0x2bc865 = await gameRequest(_0x2f4631, _0x34a699);
  if (_0x2bc865.bizErrorMsg != "success") {
    console.log(_0x2bc865.bizErrorMsg);
    return null;
  }
  return _0x2bc865.data.gameCode;
}
async function lyb_llk_passgame(_0xecec59, _0x150bf3, _0xa6c33a) {
  const _0x4904ee = {
    bizScene: "LIANLIANKAN",
    bizMethod: "settlement",
    bizParam: "{\"gameCode\":\"" + _0x150bf3 + "\",\"passLevelTime\":40351,\"gameId\":null,\"token\":\"" + _0xa6c33a + "\"}"
  };
  const _0x38fb9e = await gameRequest(_0xecec59, _0x4904ee);
  if (_0x38fb9e.bizErrorMsg != "success") {
    console.log(_0x38fb9e.bizErrorMsg);
    return null;
  }
  return _0x38fb9e.data.lastLevelId;
}
async function gameRequest(_0xc99132, _0x202860) {
  const _0x55d508 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0xc99132,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x100890 = new Date().getTime();
  const _0x9f9faa = 12574478;
  var _0x4d2a81 = "data=" + encodeURIComponent(JSON.stringify(_0x202860));
  const _0xfd701b = getToken(_0xc99132),
    _0x2db1ef = _0xfd701b.split("_")[0];
  const _0x12d1c9 = await sign(_0x2db1ef + "&" + _0x100890 + "&" + _0x9f9faa + "&" + JSON.stringify(_0x202860), kami);
  const _0x1390dd = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x100890 + "&sign=" + _0x12d1c9 + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: _0x55d508,
    body: _0x4d2a81
  };
  return tryCatchPromise(_0x21767f => {
    request(_0x1390dd, async (_0x4cfe9c, _0x9ba4ae, _0x3deaee) => {
      if (!_0x4cfe9c && _0x9ba4ae.statusCode == 200) {
        try {
          const _0x287ec7 = JSON.parse(_0x3deaee);
          const _0x6b9773 = JSON.parse(_0x287ec7.data.data);
          _0x21767f(_0x6b9773);
        } catch (_0x197b21) {
          console.log(_0x3deaee);
          _0x21767f(null);
        }
      } else {
        _0x21767f(null);
      }
    });
  });
}
async function llk_game(_0x2af59c, _0x34554a) {
  const _0x2cb4d8 = await lyb_llk_gamecode(_0x2af59c, _0x34554a);
  if (_0x2cb4d8) {
    const _0x41b490 = await lyb_llk_passgame(_0x2af59c, _0x2cb4d8, _0x34554a);
    if (_0x41b490 != 3) {
      await llk_game(_0x2af59c, _0x34554a);
    }
  }
  return;
}
async function water_login(_0xe1759d) {
  const _0x56b574 = {
    bizScene: "WATER_SORT",
    bizParam: "{\"type\":\"login\"}",
    bizMethod: "login"
  };
  const _0x4ae40e = await gameRequest(_0xe1759d, _0x56b574);
  return _0x4ae40e;
}
async function water_game_success(_0x127164) {
  const _0x2070c5 = {
    bizScene: "WATER_SORT",
    bizParam: "{\"type\":\"gameSuccess\"}",
    bizMethod: "gameSuccess"
  };
  const _0x36bbcd = await gameRequest(_0x127164, _0x2070c5);
  return _0x36bbcd;
}
async function water_reward(_0x835737, _0xa6e723) {
  const _0x3a13ad = {
    bizScene: "WATER_SORT",
    bizParam: "{\"type\":\"getPassPrize\",\"data\":{\"addNum\":\"" + _0xa6e723 + "\",\"type\":1}}",
    bizMethod: "getPassPrize"
  };
  const _0x1553a8 = await gameRequest(_0x835737, _0x3a13ad);
  return _0x1553a8;
}
async function water_game(_0x6761ee) {
  const _0x3ccac2 = await water_login(_0x6761ee);
  const _0x8b6514 = _0x3ccac2.passConf;
  const _0x3c95c0 = [];
  for (let _0x1981ca of Object.values(_0x8b6514)) {
    _0x3c95c0.push(_0x1981ca.passNum);
  }
  var _0x10a6d8 = await water_game_success(_0x6761ee);
  var _0x48b6b9 = _0x10a6d8.info.todayPass;
  var _0x3f2cd8 = 0;
  while (_0x48b6b9 <= _0x3c95c0[_0x3c95c0.length - 1]) {
    _0x10a6d8 = await water_game_success(_0x6761ee);
    _0x48b6b9 = _0x10a6d8.info.todayPass;
    console.log("欢乐倒水第" + _0x48b6b9 + "关闯关成功");
    if (_0x3c95c0.includes(_0x48b6b9)) {
      _0x3f2cd8 = _0x3c95c0.indexOf(_0x48b6b9) + 1;
      const _0x447f5e = await water_reward(_0x6761ee, _0x3f2cd8);
      console.log("获得：" + _0x447f5e.goldnum + "乐园币");
    }
  }
  console.log("快乐倒水闯关完成");
}
async function start() {
  await validateCarmeWithType(kami, 1);
  const _0x2f100c = getCookies();
  for (let _0x28bb82 = 0; _0x28bb82 < _0x2f100c.length; _0x28bb82++) {
    const _0x10e68c = _0x2f100c[_0x28bb82];
    if (!_0x10e68c) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x3b7f88 = await checkCk(_0x10e68c, _0x28bb82);
        if (!_0x3b7f88) {
          continue;
        }
        let _0x2d55f7 = await getUserInfo(_0x3b7f88);
        if (!_0x2d55f7.username) {
          console.log("第", _0x28bb82 + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0x5cb41f = _0x2d55f7.user_id;
        await checkCarmeCount(kami, _0x5cb41f, GAME_TYEP);
        console.log("******开始【饿了么账号", _0x28bb82 + 1, "】", _0x2d55f7.username, "*********");
        await lyb_sign(_0x3b7f88);
        await lottery(_0x3b7f88);
        const _0x18829a = await lyb_llk_token(_0x3b7f88);
        await llk_game(_0x3b7f88, _0x18829a);
        await water_game(_0x3b7f88);
        console.log("防止黑号延时5-10秒");
        await wait(getRandom(5, 10));
      } catch (_0x2a2515) {
        console.log(_0x2a2515);
      }
    }
  }
  process.exit(0);
}
start();
function getRandom(_0x452fcd, _0x5adc25) {
  return Math.floor(Math.random() * (_0x5adc25 - _0x452fcd + 1) + _0x452fcd);
}