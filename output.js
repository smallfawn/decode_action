//Mon Jul 08 2024 04:58:02 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  sign,
  getToken,
  checkCk,
  getCookies,
  getUserInfo,
  wait,
  checkCarmeCount
} = require("./common.js");
const request = require("request");
const {
  tryCatchPromise,
  validateCarmeWithType
} = require("./common");
const kami = process.env.ELE_CARME;
const GAME_TYEP = 14;
async function pageview(_0x4ee77b, _0x3c1018, _0x92595d, _0x1b4697) {
  const _0x1e54d8 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x4ee77b,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x43daf4 = {
    collectionId: _0x92595d,
    missionId: _0x1b4697,
    actionCode: "PAGEVIEW",
    pageFrom: _0x3c1018,
    viewTime: "15",
    bizScene: "FOOD_ELIMINATE",
    accountPlan: "HAVANA_COMMON",
    sync: "false"
  };
  const _0x1302e2 = new Date().getTime();
  const _0x42f860 = 12574478;
  var _0x4c1b86 = "data=" + encodeURIComponent(JSON.stringify(_0x43daf4));
  const _0x4a8da5 = getToken(_0x4ee77b),
    _0x1c1413 = _0x4a8da5.split("_")[0];
  const _0x537a00 = await sign(_0x1c1413 + "&" + _0x1302e2 + "&" + _0x42f860 + "&" + JSON.stringify(_0x43daf4), kami);
  const _0x859450 = {
    url: "https://shopping.ele.me/h5/mtop.ele.biz.growth.task.event.pageview/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x1302e2 + "&sign=" + _0x537a00 + "&api=mtop.ele.biz.growth.task.event.pageview&v=1.0&type=originaljson&dataType=json",
    method: "POST",
    headers: _0x1e54d8,
    body: _0x4c1b86
  };
  return tryCatchPromise(_0x74629e => {
    request(_0x859450, async (_0x5276b3, _0x44dd3f, _0x1b4ea3) => {
      if (!_0x5276b3 && _0x44dd3f.statusCode == 200) {
        const _0x545f23 = JSON.parse(_0x1b4ea3);
        _0x74629e(_0x545f23);
      } else {
        _0x74629e(null);
      }
    });
  });
}
async function query_task(_0x2df94c, _0x10c298) {
  const _0x156cf7 = {
    cookie: _0x2df94c,
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x167a16 = new Date().getTime();
  const _0x20ecb1 = 12574478;
  var _0x286bb6 = "data=" + encodeURIComponent(JSON.stringify(_0x10c298));
  const _0x4fdc46 = getToken(_0x2df94c),
    _0x18b51b = _0x4fdc46.split("_")[0];
  const _0x657357 = await sign(_0x18b51b + "&" + _0x167a16 + "&" + _0x20ecb1 + "&" + JSON.stringify(_0x10c298), kami);
  const _0x1ce121 = {
    url: "https://mtop.ele.me/h5/mtop.ele.biz.growth.task.core.querytask/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x167a16 + "&sign=" + _0x657357 + "&api=mtop.ele.biz.growth.task.core.querytask&v=1.0&type=originaljson&dataType=json&timeout=5000&pageDomain=ele.me&ttid=1601274958480%40eleme_android_10.14.3",
    method: "GET",
    headers: _0x156cf7,
    body: _0x286bb6
  };
  return tryCatchPromise(_0x417ea5 => {
    request(_0x1ce121, async (_0x3be239, _0x17e935, _0x4f33d9) => {
      if (!_0x3be239 && _0x17e935.statusCode == 200) {
        try {
          const _0x263488 = JSON.parse(_0x4f33d9);
          const _0x47ad49 = _0x263488.data.mlist;
          _0x417ea5(_0x47ad49);
        } catch (_0x18ccea) {
          console.log(_0x4f33d9);
        }
      } else {
        _0x417ea5(null);
      }
    });
  });
}
async function receive_sign_prize(_0x4011fd, _0xafb123, _0x18306f, _0x28e046, _0x5b5939, _0x19b581, _0x5b96fb) {
  var _0x1f4575 = _0x5b96fb + 1;
  const _0x55ad35 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x4011fd,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x3f192d = {
    missionCollectionId: _0xafb123,
    missionId: _0x18306f,
    count: "1",
    extInfo: "{\"count\":1,\"type\":\"DoubleSign\",\"token\":\"" + _0x19b581 + "\",\"sceneId\":\"Double" + _0x1f4575 + "\"}",
    missionXId: _0x28e046,
    instanceId: _0x5b5939,
    umiToken: "1",
    ua: "1",
    locationInfos: "[\"{\\\"lng\\\":120.37615790963173,\\\"lat\\\":30.153526850044727,\\\"city\\\":\\\"330600\\\"}\"]"
  };
  const _0x5a41ec = new Date().getTime();
  const _0x1b5d84 = 12574478;
  var _0x2cfe00 = "data=" + encodeURIComponent(JSON.stringify(_0x3f192d));
  const _0x154946 = getToken(_0x4011fd),
    _0x1aada7 = _0x154946.split("_")[0];
  const _0x4cc348 = await sign(_0x1aada7 + "&" + _0x5a41ec + "&" + _0x1b5d84 + "&" + JSON.stringify(_0x3f192d), kami);
  const _0x55c28e = {
    url: "https://shopping.ele.me/h5/mtop.ele.biz.growth.task.core.receiveprize/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x5a41ec + "&sign=" + _0x4cc348 + "&api=mtop.ele.biz.growth.task.core.receiveprize&v=1.0&type=originaljson&dataType=json",
    method: "POST",
    headers: _0x55ad35,
    body: _0x2cfe00
  };
  return tryCatchPromise(_0x1fb635 => {
    request(_0x55c28e, async (_0x5f44bb, _0x8d7d42, _0x2ee184) => {
      if (!_0x5f44bb && _0x8d7d42.statusCode == 200) {
        try {
          const _0x50b58f = JSON.parse(_0x2ee184);
          const _0x38ad1c = JSON.parse(_0x50b58f.data.rlist);
          console.log("签到获得", _0x38ad1c[0].value, "星星");
          _0x1fb635(_0x38ad1c);
        } catch (_0x331387) {
          console.log("今日已领取签到奖励");
          _0x1fb635(null);
        }
      } else {
        _0x1fb635(null);
      }
    });
  });
}
async function receive_prize(_0x22e770, _0x3f72cb, _0x5f2375, _0x4c57bd, _0xdbd562, _0x13622e, _0x44b7a2) {
  const _0x88bd46 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x22e770,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x55bba7 = {
    missionCollectionId: _0x3f72cb,
    missionId: _0x5f2375,
    count: "1",
    extInfo: "{\"count\":1,\"type\":\"Offline\",\"token\":\"" + _0x44b7a2 + "\",\"sceneId\":\"8\",\"length\":14400,\"awardNum\":86472000}",
    missionXId: _0x4c57bd,
    instanceId: _0xdbd562,
    umiToken: "1",
    ua: "1",
    locationInfos: "[\"{\\\"lng\\\":120.37615790963173,\\\"lat\\\":30.153526850044727,\\\"city\\\":\\\"330600\\\"}\"]"
  };
  const _0x3a4c4f = new Date().getTime();
  const _0x201157 = 12574478;
  var _0x2823bb = "data=" + encodeURIComponent(JSON.stringify(_0x55bba7));
  const _0x4303af = getToken(_0x22e770),
    _0x232f46 = _0x4303af.split("_")[0];
  const _0x6f27c2 = await sign(_0x232f46 + "&" + _0x3a4c4f + "&" + _0x201157 + "&" + JSON.stringify(_0x55bba7), kami);
  const _0x1234b8 = {
    url: "https://shopping.ele.me/h5/mtop.ele.biz.growth.task.core.receiveprize/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x3a4c4f + "&sign=" + _0x6f27c2 + "&api=mtop.ele.biz.growth.task.core.receiveprize&v=1.0&type=originaljson&dataType=json",
    method: "POST",
    headers: _0x88bd46,
    body: _0x2823bb
  };
  return tryCatchPromise(_0x86da96 => {
    request(_0x1234b8, async (_0x2e659c, _0x2e418a, _0x4cdeb4) => {
      if (!_0x2e659c && _0x2e418a.statusCode == 200) {
        try {
          const _0x34f762 = JSON.parse(_0x4cdeb4);
          const _0x483e66 = JSON.parse(_0x34f762.data.rlist);
          console.log("领取离线奖励", _0x483e66[0].value, "星星");
          _0x86da96(_0x483e66);
        } catch (_0x8eb9db) {
          console.log("离线奖励已经全部领取");
          _0x86da96(null);
        }
      } else {
        _0x86da96(null);
      }
    });
  });
}
async function receive_offline_task(_0x30262c, _0x2dd85b, _0x79ef3c) {
  const _0x5c5645 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x30262c,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x4377c2 = {
    missionCollectionId: _0x2dd85b,
    missionId: _0x79ef3c,
    locationInfos: "[\"{\\\"lng\\\":120.37615790963173,\\\"lat\\\":30.153526850044727,\\\"city\\\":\\\"330600\\\"}\"]"
  };
  const _0x1d7aa9 = new Date().getTime();
  const _0x4d603a = 12574478;
  var _0x2e7b52 = "data=" + encodeURIComponent(JSON.stringify(_0x4377c2));
  const _0xad3aa6 = getToken(_0x30262c),
    _0x16c5fb = _0xad3aa6.split("_")[0];
  const _0x19e6f8 = await sign(_0x16c5fb + "&" + _0x1d7aa9 + "&" + _0x4d603a + "&" + JSON.stringify(_0x4377c2), kami);
  const _0x304201 = {
    url: "https://shopping.ele.me/h5/mtop.ele.biz.growth.task.core.receivetask/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x1d7aa9 + "&sign=" + _0x19e6f8 + "&api=mtop.ele.biz.growth.task.core.receivetask&v=1.0&type=originaljson&dataType=json",
    method: "POST",
    headers: _0x5c5645,
    body: _0x2e7b52
  };
  return tryCatchPromise(_0x4db782 => {
    request(_0x304201, async (_0x5299e5, _0x34ac26, _0x58a721) => {
      if (!_0x5299e5 && _0x34ac26.statusCode == 200) {
        try {
          const _0x2d20bb = JSON.parse(_0x58a721);
          const _0x23717e = JSON.parse(_0x2d20bb.data.result);
          _0x4db782(_0x23717e);
        } catch (_0x2f7e28) {
          _0x4db782(null);
        }
      } else {
        _0x4db782(null);
      }
    });
  });
}
async function receive_task(_0x10bce8, _0x454092, _0x278cf4) {
  const _0x24cded = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x10bce8,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x11f1dd = {
    bizScene: "IDIOM",
    missionCollectionId: _0x454092,
    missionId: _0x278cf4,
    locationInfos: "[\"{\\\"lng\\\":120.22057268768549,\\\"lat\\\":30.17862595617771}\"]"
  };
  const _0x374761 = new Date().getTime();
  const _0x35b61e = 12574478;
  var _0x2b179d = "data=" + encodeURIComponent(JSON.stringify(_0x11f1dd));
  const _0x4f1842 = getToken(_0x10bce8),
    _0x149751 = _0x4f1842.split("_")[0];
  const _0x1bb756 = await sign(_0x149751 + "&" + _0x374761 + "&" + _0x35b61e + "&" + JSON.stringify(_0x11f1dd), kami);
  const _0xffebb2 = {
    url: "https://shopping.ele.me/h5/mtop.ele.biz.growth.task.core.receivetask/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x374761 + "&sign=" + _0x1bb756 + "&api=mtop.ele.biz.growth.task.core.receivetask&v=1.0&type=originaljson&dataType=json",
    method: "POST",
    headers: _0x24cded,
    body: _0x2b179d
  };
  return tryCatchPromise(_0x1e6956 => {
    request(_0xffebb2, async (_0x43d440, _0x2ea4c9, _0x590a6a) => {
      if (!_0x43d440 && _0x2ea4c9.statusCode == 200) {
        try {
          const _0xfd2393 = JSON.parse(_0x590a6a);
          const _0x4cab8d = JSON.parse(_0xfd2393.data.result);
          _0x1e6956(_0x4cab8d);
        } catch (_0x47f91b) {
          _0x1e6956(null);
        }
      } else {
        _0x1e6956(null);
      }
    });
  });
}
async function gameRequest(_0x2d6a6f, _0x27d2aa) {
  const _0x281036 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x2d6a6f,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x40ee1d = new Date().getTime();
  const _0x24c4f0 = 12574478;
  var _0x163bcd = "data=" + encodeURIComponent(JSON.stringify(_0x27d2aa));
  const _0x5b73f2 = getToken(_0x2d6a6f),
    _0x20cafc = _0x5b73f2.split("_")[0];
  const _0xdccf6e = await sign(_0x20cafc + "&" + _0x40ee1d + "&" + _0x24c4f0 + "&" + JSON.stringify(_0x27d2aa), kami);
  const _0x2fa88d = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x40ee1d + "&sign=" + _0xdccf6e + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: _0x281036,
    body: _0x163bcd
  };
  return new Promise(_0x527dc9 => {
    request(_0x2fa88d, async (_0x43ffe9, _0x242de8, _0x23a909) => {
      if (!_0x43ffe9 && _0x242de8.statusCode == 200) {
        try {
          const _0x38b343 = JSON.parse(_0x23a909);
          const _0x4526c4 = JSON.parse(_0x38b343.data.data);
          _0x527dc9(_0x4526c4);
        } catch (_0x59619d) {
          console.log(_0x23a909);
          _0x527dc9(null);
        }
      } else {
        console.log(_0x43ffe9 || _0x23a909);
        _0x527dc9(null);
      }
    });
  });
}
async function getGameInfo(_0x26bee2) {
  const _0x350bd0 = {
    bizScene: "SWEET_COMPOSE",
    bizMethod: "login",
    bizParam: "{\"inviterId\":null,\"gameId\":null,\"token\":\"token\"}"
  };
  const _0x27141a = await gameRequest(_0x26bee2, _0x350bd0);
  if (_0x27141a.bizErrorMsg != "success") {
    console.log(_0x27141a.bizErrorMsg);
    return null;
  }
  return _0x27141a.data;
}
async function dataSynchronism(_0x4153dc, _0x5c6349, _0x437b85, _0x4ada95) {
  let _0x56dbea = JSON.stringify(_0x4ada95);
  let _0x5de961 = _0x56dbea.replace(/"/g, "\\\"");
  const _0x4f16bd = {
    bizScene: "SWEET_COMPOSE",
    bizMethod: "dataSynchronism",
    bizParam: "{\"foodsJson\":\"" + _0x5de961 + "\",\"gameId\":\"" + _0x5c6349 + "\",\"token\":\"" + _0x437b85 + "\"}"
  };
  const _0x985bac = await gameRequest(_0x4153dc, _0x4f16bd);
  if (_0x985bac.bizErrorMsg != "success") {
    console.log(_0x985bac.bizErrorMsg);
    return null;
  }
  return _0x985bac.data;
}
async function finishOrder(_0x437349, _0x29238b, _0x3aba6a, _0x16c5c0, _0x231775, _0xecedd3) {
  const _0x288b0e = {
    bizScene: "SWEET_COMPOSE",
    bizMethod: "finisheOrder",
    bizParam: "{\"orderId\":\"" + _0x16c5c0 + "\",\"mats\":\"" + _0x231775 + "," + _0xecedd3 + "\",\"gameId\":\"" + _0x29238b + "\",\"token\":\"" + _0x3aba6a + "\"}"
  };
  const _0x33c5a7 = await gameRequest(_0x437349, _0x288b0e);
  if (_0x33c5a7.bizErrorMsg !== "success") {
    console.log(_0x33c5a7.bizErrorMsg);
    return null;
  }
  return _0x33c5a7.data;
}
async function getOrders(_0x46b978, _0x249465, _0x1eb028) {
  const _0x4a6afb = {
    bizScene: "SWEET_COMPOSE",
    bizMethod: "getOrders",
    bizParam: "{\"gameId\":\"" + _0x249465 + "\",\"token\":\"" + _0x1eb028 + "\"}"
  };
  const _0x40b5a7 = await gameRequest(_0x46b978, _0x4a6afb);
  if (_0x40b5a7.bizErrorMsg !== "success") {
    console.log(_0x40b5a7.bizErrorMsg);
    return null;
  }
  return _0x40b5a7.data;
}
async function offlineReward(_0x2224ab, _0x443c7f, _0x3f57ba) {
  const _0x4023c6 = {
    missionCollectionId: "547",
    missionId: "9426001",
    locationInfos: "[\"{\\\"lng\\\":120.37615790963173,\\\"lat\\\":30.153526850044727,\\\"city\\\":\\\"330600\\\"}\"]"
  };
  let _0xefbf2f = await query_task(_0x2224ab, _0x4023c6);
  let _0x57e66b = _0xefbf2f[0];
  const _0x405de0 = _0x57e66b.actionConfig.actionValue.pageSpm;
  await receive_offline_task(_0x2224ab, _0x57e66b.missionCollectionId, _0x57e66b.missionDefId);
  await pageview(_0x2224ab, _0x405de0, _0x57e66b.missionCollectionId, _0x57e66b.missionDefId);
  _0xefbf2f = await query_task(_0x2224ab, _0x4023c6);
  _0x57e66b = _0xefbf2f[0];
  await receive_prize(_0x2224ab, _0x57e66b.missionCollectionId, _0x57e66b.missionDefId, _0x57e66b.missionXId, _0x57e66b.id, _0x443c7f, _0x3f57ba);
}
async function signinReward(_0x2bb91b, _0x3baa70, _0x4d25ec, _0x439305) {
  const _0x369fe3 = {
    missionCollectionId: "547",
    missionId: "9436001",
    locationInfos: "[\"{\\\"lng\\\":120.37615790963173,\\\"lat\\\":30.153526850044727,\\\"city\\\":\\\"330600\\\"}\"]"
  };
  let _0x3fde09 = await query_task(_0x2bb91b, _0x369fe3);
  let _0x36c94a = _0x3fde09[0];
  const _0x22873e = _0x36c94a.actionConfig.actionValue.pageSpm;
  await receive_task(_0x2bb91b, _0x36c94a.missionCollectionId, _0x36c94a.missionDefId);
  await pageview(_0x2bb91b, _0x22873e, _0x36c94a.missionCollectionId, _0x36c94a.missionDefId);
  _0x3fde09 = await query_task(_0x2bb91b, _0x369fe3);
  _0x36c94a = _0x3fde09[0];
  await receive_sign_prize(_0x2bb91b, _0x36c94a.missionCollectionId, _0x36c94a.missionDefId, _0x36c94a.missionXId, _0x36c94a.id, _0x4d25ec, _0x439305);
  const _0x246492 = {
    bizScene: "SWEET_COMPOSE",
    bizMethod: "getSign",
    bizParam: "{\"gameId\":\"" + _0x3baa70 + "\",\"token\":\"" + _0x4d25ec + "\"}"
  };
  return await gameRequest(_0x2bb91b, _0x246492);
}
async function buyFood(_0x51e17b, _0x4ad5ef, _0x4ba6b2, _0x3d7f5f, _0x2589ba) {
  const _0x34cbe8 = {
    bizScene: "SWEET_COMPOSE",
    bizMethod: "buy",
    bizParam: "{\"foodId\":" + _0x4ba6b2 + ",\"buyType\":\"" + _0x4ad5ef + "\",\"gameId\":\"" + _0x3d7f5f + "\",\"token\":\"" + _0x2589ba + "\"}"
  };
  return await gameRequest(_0x51e17b, _0x34cbe8);
}
async function processOrder(_0x246c09, _0x3ef931, _0x55a2f9, _0x406b3c, _0x1472d0) {
  let _0x5e835f = _0x55a2f9.maxlevel;
  const _0x1459ed = Object.keys(_0x55a2f9.orders);
  let _0x4fd72e = [];
  for (let _0x235c4e = 0; _0x235c4e < _0x1459ed.length; _0x235c4e++) {
    _0x4fd72e.push(_0x55a2f9.orders[_0x1459ed[_0x235c4e]].condition);
  }
  let _0x324b4e = _0x4fd72e[0];
  console.log("当前需要合成的订单为：" + _0x324b4e);
  let _0x38d230 = await processFoods(_0x3ef931, _0x324b4e, _0x246c09, _0x406b3c, _0x1472d0);
  let _0x1238a7 = _0x38d230.map;
  for (let [_0x190471, _0x7f00b9] of _0x1238a7) {
    if (_0x190471 > _0x5e835f) {
      _0x5e835f = _0x190471;
    }
  }
  _0x3ef931 = _0x38d230.afterFoods || {};
  let _0x7e7581 = _0x1238a7.get(_0x324b4e[0]);
  let _0xb634d1;
  let _0x4db3ce;
  if (_0x7e7581) {
    if (_0x7e7581.length > 1) {
      _0x4db3ce = _0x7e7581.shift();
      _0x1238a7[_0x324b4e[0]] = _0x7e7581;
    } else {
      _0x4db3ce = _0x7e7581;
      _0x1238a7.delete(_0x324b4e[0]);
    }
  } else {
    let _0x5c7e33 = _0x5e835f - 4;
    if (_0x5c7e33 <= 0) {
      _0x5c7e33 = 1;
    }
    let _0x4f2f86;
    if (_0x5c7e33 > _0x324b4e[0]) {
      _0x5c7e33 = _0x324b4e[0];
      _0x4f2f86 = await buyFood(_0x246c09, "Shop", _0x5c7e33, _0x406b3c, _0x1472d0);
    } else {
      _0x4f2f86 = await buyFood(_0x246c09, "Button", _0x5c7e33, _0x406b3c, _0x1472d0);
    }
    if (_0x4f2f86.bizErrorCode === "LACK_OF_GOLD") {
      console.log("金币不足，稍后重试");
      return false;
    } else {
      if (!_0x4f2f86.bizSuccess) {
        console.log(_0x4f2f86.bizErrorMsg);
        return false;
      }
    }
    const _0x2825e8 = _0x4f2f86.data.foodMat;
    _0x3ef931[_0x2825e8] = _0x5c7e33;
    const _0x11ab20 = await dataSynchronism(_0x246c09, _0x406b3c, _0x1472d0, _0x3ef931);
    if (_0x11ab20) {
      const _0x4585e4 = _0x11ab20.foods;
      return await processOrder(_0x246c09, _0x4585e4, _0x55a2f9, _0x406b3c, _0x1472d0);
    }
  }
  if (_0x324b4e.length > 1) {
    let _0x220bf5 = _0x1238a7.get(_0x324b4e[1]);
    if (_0x220bf5) {
      if (_0x220bf5.length > 1) {
        _0xb634d1 = _0x220bf5.shift();
        _0x1238a7[_0x324b4e[1]] = _0x220bf5;
      } else {
        _0xb634d1 = _0x220bf5;
        _0x1238a7.delete(_0x324b4e[1]);
      }
    } else {
      let _0x7fd90a = _0x5e835f - 4;
      if (_0x7fd90a <= 0) {
        _0x7fd90a = 1;
      }
      let _0x7923d4;
      if (_0x7fd90a > _0x324b4e[1]) {
        _0x7fd90a = _0x324b4e[1];
        _0x7923d4 = await buyFood(_0x246c09, "Shop", _0x7fd90a, _0x406b3c, _0x1472d0);
      } else {
        _0x7923d4 = await buyFood(_0x246c09, "Button", _0x7fd90a, _0x406b3c, _0x1472d0);
      }
      if (_0x7923d4.bizErrorCode === "LACK_OF_GOLD") {
        console.log("金币不足，稍后重试");
        return false;
      } else {
        if (!_0x7923d4.bizSuccess) {
          console.log(_0x7923d4.bizErrorMsg);
          return false;
        }
      }
      const _0x443ebe = _0x7923d4.data.foodMat;
      _0x3ef931[_0x443ebe] = _0x7fd90a;
      const _0x35e171 = await dataSynchronism(_0x246c09, _0x406b3c, _0x1472d0, _0x3ef931);
      if (_0x35e171) {
        const _0x3e0180 = _0x35e171.foods;
        return await processOrder(_0x246c09, _0x3e0180, _0x55a2f9, _0x406b3c, _0x1472d0);
      }
    }
  }
  let _0x347cc9;
  if (_0x324b4e.length > 1) {
    if (_0x4db3ce && _0xb634d1) {
      _0x347cc9 = await finishOrder(_0x246c09, _0x406b3c, _0x1472d0, _0x1459ed[0], _0x4db3ce, _0xb634d1);
    }
  } else {
    _0x347cc9 = await finishOrder(_0x246c09, _0x406b3c, _0x1472d0, _0x1459ed[0], _0x4db3ce, "");
  }
  if (_0x347cc9) {
    let _0x572c0b = _0x347cc9.rewardItems[0].num;
    if (_0x572c0b > 10) {
      console.log("合成甜蜜蜜获得", _0x572c0b, "星星✨");
    } else {
      console.log("合成甜蜜蜜获得", _0x572c0b, "乐园币");
    }
    return _0x572c0b;
  }
}
async function processFoods(_0x548519, _0x1f031a, _0x5998a8, _0x204bb8, _0x287454) {
  let _0x28627f = new Map();
  let _0x31dbfa = {};
  const _0x2022ac = Object.keys(_0x548519);
  for (let _0x42e824 = 0; _0x42e824 < _0x2022ac.length; _0x42e824++) {
    let _0x49d28f = _0x548519[_0x2022ac[_0x42e824]];
    if (_0x28627f.has(_0x49d28f)) {
      _0x28627f.get(_0x49d28f).push(_0x2022ac[_0x42e824]);
    } else {
      _0x28627f.set(_0x49d28f, [_0x2022ac[_0x42e824]]);
    }
  }
  let _0x3ed469 = await processHbMap(_0x28627f, _0x1f031a, _0x5998a8, _0x204bb8, _0x287454);
  _0x31dbfa.map = _0x3ed469.map;
  _0x31dbfa.afterFoods = _0x3ed469.afterFoods || _0x548519;
  hbObj = {};
  return _0x31dbfa;
}
let hbObj = {};
async function processHbMap(_0x484ca8, _0x1c6ec5, _0x58ed38, _0x1d5d2e, _0x15039d) {
  for (let [_0x553a1a, _0x170745] of _0x484ca8) {
    if (_0x170745.length > 1) {
      if (!_0x1c6ec5.includes(_0x553a1a) || _0x1c6ec5.includes(_0x553a1a) && _0x170745.length > 1) {
        if (_0x553a1a === _0x1c6ec5[0] && _0x553a1a === _0x1c6ec5[1] && _0x170745.length > 1) {
          hbObj.map = _0x484ca8;
          return hbObj;
        } else {
          const _0x445f2e = _0x170745.shift();
          _0x170745.shift();
          if (_0x170745.length === 0) {
            _0x484ca8.delete(_0x553a1a);
          }
          const _0x2a26ed = _0x553a1a + 1;
          if (_0x484ca8.has(_0x2a26ed)) {
            _0x484ca8.get(_0x2a26ed).push(_0x445f2e);
          } else {
            _0x484ca8.set(_0x2a26ed, [_0x445f2e]);
          }
        }
        let _0x2ce7f5 = {};
        for (let [_0x486f8f, _0x383779] of _0x484ca8) {
          for (let _0x1b62cd = 0; _0x1b62cd < _0x383779.length; _0x1b62cd++) {
            _0x2ce7f5[_0x383779[_0x1b62cd]] = _0x486f8f;
          }
        }
        console.log("合并后的foods", _0x2ce7f5);
        const _0x580e7f = await dataSynchronism(_0x58ed38, _0x1d5d2e, _0x15039d, _0x2ce7f5);
        if (!_0x580e7f) {
          return processHbMap(_0x484ca8, _0x1c6ec5, _0x58ed38, _0x1d5d2e, _0x15039d);
        }
        let _0x4b372b = _0x580e7f.foods;
        hbObj.afterFoods = _0x4b372b;
        let _0x368c20 = new Map();
        const _0x23c79a = Object.keys(_0x4b372b);
        for (let _0x30eb16 = 0; _0x30eb16 < _0x23c79a.length; _0x30eb16++) {
          let _0x563e53 = _0x4b372b[_0x23c79a[_0x30eb16]];
          if (_0x368c20.has(_0x563e53)) {
            _0x368c20.get(_0x563e53).push(_0x23c79a[_0x30eb16]);
          } else {
            _0x368c20.set(_0x563e53, [_0x23c79a[_0x30eb16]]);
          }
        }
        return processHbMap(_0x368c20, _0x1c6ec5, _0x58ed38, _0x1d5d2e, _0x15039d);
      }
    }
  }
  hbObj.map = _0x484ca8;
  return hbObj;
}
async function start() {
  await validateCarmeWithType(kami, 1);
  const _0x11b3c2 = getCookies();
  for (let _0x3d3ac9 = 0; _0x3d3ac9 < _0x11b3c2.length; _0x3d3ac9++) {
    const _0x535e4e = _0x11b3c2[_0x3d3ac9];
    if (!_0x535e4e) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x2e9cff = await checkCk(_0x535e4e, _0x3d3ac9);
        if (!_0x2e9cff) {
          continue;
        }
        let _0xe8e38 = await getUserInfo(_0x2e9cff);
        if (!_0xe8e38.username) {
          console.log("第", _0x3d3ac9 + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0x13c22f = _0xe8e38.user_id;
        await checkCarmeCount(kami, _0x13c22f, GAME_TYEP);
        console.log("******开始【饿了么账号", _0x3d3ac9 + 1, "】", _0xe8e38.username, "*********");
        let _0x1edcf9 = await getGameInfo(_0x2e9cff);
        if (!_0x1edcf9) {
          console.log("获取游戏数据异常，请稍后重试");
          continue;
        }
        const _0x4e8c5f = _0x1edcf9.openId;
        const _0x353030 = _0x1edcf9.token;
        await offlineReward(_0x2e9cff, _0x4e8c5f, _0x353030);
        await signinReward(_0x2e9cff, _0x4e8c5f, _0x353030, _0x1edcf9.sign.count);
        while (_0x1edcf9) {
          const _0x4acbc1 = await processOrder(_0x2e9cff, _0x1edcf9.foods, _0x1edcf9, _0x4e8c5f, _0x353030);
          if (!_0x4acbc1) {
            break;
          }
          if (_0x4acbc1 > 10) {
            console.log("合成甜蜜蜜乐园币任务已完成");
            break;
          }
          _0x1edcf9 = await getGameInfo(_0x2e9cff);
        }
      } catch (_0x21c28c) {
        console.log(_0x21c28c);
      }
    }
  }
  process.exit(0);
}
start();