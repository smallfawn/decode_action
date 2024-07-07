//Sun Jul 07 2024 13:58:24 GMT+0000 (Coordinated Universal Time)
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