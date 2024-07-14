//Sun Jul 14 2024 09:41:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  sign,
  getToken,
  wait,
  checkCk,
  getCookies,
  getUserInfo,
  validateCarmeWithType,
  checkCarmeCount,
  tryCatchPromise
} = require("./common.js");
const request = require("request");
const GAME_TYEP = 5;
const kami = process.env.ELE_CARME;
async function pageview(_0x164b86, _0x35b682, _0x3b36a8, _0x41608a) {
  const _0x39d0f6 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x164b86,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x2ee09b = {
    collectionId: _0x3b36a8,
    missionId: _0x41608a,
    actionCode: "PAGEVIEW",
    pageFrom: _0x35b682,
    viewTime: "15",
    bizScene: "IDIOM",
    accountPlan: "HAVANA_COMMON",
    sync: "false"
  };
  const _0x9a78ab = new Date().getTime();
  const _0x131df9 = 12574478;
  var _0x1b9d76 = "data=" + encodeURIComponent(JSON.stringify(_0x2ee09b));
  const _0x4518c3 = getToken(_0x164b86),
    _0x13235b = _0x4518c3.split("_")[0];
  const _0x4f9868 = await sign(_0x13235b + "&" + _0x9a78ab + "&" + _0x131df9 + "&" + JSON.stringify(_0x2ee09b), kami);
  const _0x4989d5 = {
    url: "https://shopping.ele.me/h5/mtop.ele.biz.growth.task.event.pageview/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x9a78ab + "&sign=" + _0x4f9868 + "&api=mtop.ele.biz.growth.task.event.pageview&v=1.0&type=originaljson&dataType=json",
    method: "POST",
    headers: _0x39d0f6,
    body: _0x1b9d76
  };
  return tryCatchPromise(_0x396231 => {
    request(_0x4989d5, async (_0x4ed9cd, _0x1ce511, _0x672dd3) => {
      if (!_0x4ed9cd && _0x1ce511.statusCode == 200) {
        const _0x27e5bb = JSON.parse(_0x672dd3);
        _0x396231(_0x27e5bb);
      } else {
        _0x396231(null);
      }
    });
  });
}
async function gameRequest(_0x25b69b, _0x159f68) {
  const _0x349363 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x25b69b,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x36deb8 = new Date().getTime();
  const _0x41fddb = 12574478;
  var _0x1336e1 = "data=" + encodeURIComponent(JSON.stringify(_0x159f68));
  const _0x1102f0 = getToken(_0x25b69b),
    _0x4448ad = _0x1102f0.split("_")[0];
  const _0x5192de = await sign(_0x4448ad + "&" + _0x36deb8 + "&" + _0x41fddb + "&" + JSON.stringify(_0x159f68), kami);
  const _0x554969 = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x36deb8 + "&sign=" + _0x5192de + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: _0x349363,
    body: _0x1336e1
  };
  return tryCatchPromise(_0x32d5f0 => {
    request(_0x554969, async (_0x9e37c5, _0x2ac2e6, _0x75050b) => {
      if (!_0x9e37c5 && _0x2ac2e6.statusCode == 200) {
        try {
          const _0x2ee52a = JSON.parse(_0x75050b);
          const _0x341e80 = JSON.parse(_0x2ee52a.data.data);
          _0x32d5f0(_0x341e80);
        } catch (_0x157b16) {
          console.log(_0x75050b);
          _0x32d5f0(null);
        }
      } else {
        _0x32d5f0(null);
      }
    });
  });
}
async function receive_task(_0x1bf124, _0x59b767, _0x1ec318) {
  const _0x40521b = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x1bf124,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x12d4d2 = {
    bizScene: "IDIOM",
    missionCollectionId: _0x59b767,
    missionId: _0x1ec318,
    locationInfos: "[\"{\\\"lng\\\":120.22057268768549,\\\"lat\\\":30.17862595617771}\"]"
  };
  const _0x32102a = new Date().getTime();
  const _0x481058 = 12574478;
  var _0x14c73a = "data=" + encodeURIComponent(JSON.stringify(_0x12d4d2));
  const _0x3b4443 = getToken(_0x1bf124),
    _0x186ef0 = _0x3b4443.split("_")[0];
  const _0x26f6c8 = await sign(_0x186ef0 + "&" + _0x32102a + "&" + _0x481058 + "&" + JSON.stringify(_0x12d4d2), kami);
  const _0x6128de = {
    url: "https://shopping.ele.me/h5/mtop.ele.biz.growth.task.core.receivetask/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x32102a + "&sign=" + _0x26f6c8 + "&api=mtop.ele.biz.growth.task.core.receivetask&v=1.0&type=originaljson&dataType=json",
    method: "POST",
    headers: _0x40521b,
    body: _0x14c73a
  };
  return tryCatchPromise(_0x12ec9a => {
    request(_0x6128de, async (_0x3242fb, _0x3dc1be, _0x4e60fa) => {
      if (!_0x3242fb && _0x3dc1be.statusCode == 200) {
        try {
          const _0x5739f0 = JSON.parse(_0x4e60fa);
          const _0x456957 = JSON.parse(_0x5739f0.data.result);
          _0x12ec9a(_0x456957);
        } catch (_0x5112ae) {
          _0x12ec9a(null);
        }
      } else {
        _0x12ec9a(null);
      }
    });
  });
}
async function query_task(_0x5b3ab4) {
  const _0x45c758 = {
    cookie: _0x5b3ab4,
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x130006 = {
    missionCollectionId: "616",
    missionId: "9430001",
    bizScene: "IDIOM",
    accountPlan: "HAVANA_COMMON",
    locationInfos: "[\"{\\\"lng\\\":\\\"-360\\\",\\\"lat\\\":\\\"-360\\\"}\"]"
  };
  const _0x5ce90d = new Date().getTime();
  const _0x3dca72 = 12574478;
  var _0x4d159e = "data=" + encodeURIComponent(JSON.stringify(_0x130006));
  const _0x2b4c11 = getToken(_0x5b3ab4),
    _0x3ed92a = _0x2b4c11.split("_")[0];
  const _0x107418 = await sign(_0x3ed92a + "&" + _0x5ce90d + "&" + _0x3dca72 + "&" + JSON.stringify(_0x130006), kami);
  const _0x39e4da = {
    url: "https://mtop.ele.me/h5/mtop.ele.biz.growth.task.core.querytask/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x5ce90d + "&sign=" + _0x107418 + "&api=mtop.ele.biz.growth.task.core.querytask&v=1.0&type=originaljson&dataType=json&timeout=5000&pageDomain=ele.me&ttid=1601274958480%40eleme_android_10.14.3",
    method: "GET",
    headers: _0x45c758,
    body: _0x4d159e
  };
  return tryCatchPromise(_0x43b43c => {
    request(_0x39e4da, async (_0x440b79, _0x66c286, _0x1aa62c) => {
      if (!_0x440b79 && _0x66c286.statusCode == 200) {
        try {
          const _0x27e82e = JSON.parse(_0x1aa62c);
          const _0x17ff4f = _0x27e82e.data.mlist;
          _0x43b43c(_0x17ff4f);
        } catch (_0x22089f) {
          console.log(_0x1aa62c);
        }
      } else {
        _0x43b43c(null);
      }
    });
  });
}
async function exchangeList(_0x323a0e) {
  const _0x1e67bd = {
    cookie: _0x323a0e,
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x4351c2 = {
    actId: "20220811143538649139297230",
    collectionId: "20230227111809817998717332",
    bizScene: "IDIOM"
  };
  const _0x3f79fb = new Date().getTime();
  const _0xa500e0 = 12574478;
  var _0x5057d8 = "data=" + encodeURIComponent(JSON.stringify(_0x4351c2));
  const _0x2dc751 = getToken(_0x323a0e),
    _0x3a9ed1 = _0x2dc751.split("_")[0];
  const _0x1f7ca2 = await sign(_0x3a9ed1 + "&" + _0x3f79fb + "&" + _0xa500e0 + "&" + JSON.stringify(_0x4351c2), kami);
  const _0x59047f = {
    url: "https://shopping.ele.me/h5/mtop.koubei.interactioncenter.platform.right.exchangelist/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x3f79fb + "&sign=" + _0x1f7ca2 + "&api=mtop.koubei.interactioncenter.platform.right.exchangelist&v=1.0&type=originaljson&dataType=json&timeout=5000&pageDomain=ele.me&ttid=1601274958480%40eleme_android_10.14.3",
    method: "GET",
    headers: _0x1e67bd,
    body: _0x5057d8
  };
  return tryCatchPromise(_0x91179d => {
    request(_0x59047f, async (_0x373557, _0x2d0ae6, _0x4940f1) => {
      if (!_0x373557 && _0x2d0ae6.statusCode == 200) {
        try {
          const _0xea48c0 = JSON.parse(_0x4940f1);
          const _0x25fc9a = _0xea48c0.data.data.rightInfoList;
          _0x91179d(_0x25fc9a);
        } catch (_0x4d2edc) {
          console.log(_0x4940f1);
        }
      } else {
        _0x91179d(null);
      }
    });
  });
}
function getRandom(_0x3ae4c0, _0x3baa04) {
  var _0x57507c = Math.floor(Math.random() * (_0x3baa04 - _0x3ae4c0 + 1) + _0x3ae4c0);
  return _0x57507c;
}
async function cycgGame(_0x31251c) {
  const _0x5976a7 = new Date().getTime();
  var _0x4eac18 = "";
  var _0x1ae1b5 = 0;
  while (!_0x4eac18) {
    const _0x328763 = {
      bizScene: "IDIOM",
      bizParam: "{\"type\":\"gameSuccess\"}",
      bizMethod: "queryIndex"
    };
    const _0x342049 = await gameRequest(_0x31251c, _0x328763);
    var _0x25536c = _0x342049.num;
    if (_0x25536c > 3000) {
      console.log("你已通关，卡 bug 领奖励");
      _0x25536c = getRandom(1, 3000);
    }
    const _0x4dd06a = {
      bizScene: "IDIOM",
      bizParam: "{\"type\":\"getGameGold\",\"data\":{\"id\":" + _0x25536c + ",\"type\":7,\"request_id\":" + _0x5976a7 + "}}",
      bizMethod: "queryIndex"
    };
    const _0x2483f6 = await gameRequest(_0x31251c, _0x4dd06a);
    _0x4eac18 = _0x2483f6.msg;
    if (_0x4eac18) {
      console.log("成语闯关游戏：" + _0x4eac18);
      break;
    }
    _0x1ae1b5 += 1;
    await cgjl(_0x31251c, _0x1ae1b5);
    if (_0x2483f6 && _0x2483f6.amount) {
      console.log("成语闯关第", _0x25536c, "关，闯关成功，获得", _0x2483f6.amount, "金币");
      const _0x328289 = {
        bizScene: "IDIOM",
        bizParam: "{\"type\":\"addGameGold\",\"data\":{\"id\":" + _0x25536c + ",\"type\":7,\"request_id\":" + _0x5976a7 + ",\"ver\":1,\"double\":5}}",
        bizMethod: "queryIndex"
      };
      var _0x5292c4 = _0x328289;
      var _0x16ec2b = await fanbei(_0x31251c, _0x5292c4);
      if (_0x16ec2b && _0x16ec2b.amount) {
        console.log("看广告翻倍，获得", _0x16ec2b.amount, "金币");
        console.log("当前金币", _0x16ec2b.num);
      } else {
        const _0x3cb0dc = {
          bizScene: "IDIOM",
          bizParam: "{\"type\":\"addGameGold\",\"data\":{\"id\":" + _0x25536c + ",\"type\":7,\"request_id\":" + _0x5976a7 + ",\"ver\":1,\"double\":1}}",
          bizMethod: "queryIndex"
        };
        _0x5292c4 = _0x3cb0dc;
        _0x16ec2b = await gameRequest(_0x31251c, _0x5292c4);
        console.log("成语闯关翻倍：", _0x16ec2b.msg);
        break;
      }
      console.log("==============================");
      _0x4eac18 = _0x16ec2b.msg;
    } else {
      console.log("成语闯关：", _0x2483f6.msg);
    }
  }
}
async function ktcc(_0x301228) {
  const _0x350675 = new Date().getTime();
  var _0x16c2bb = "";
  var _0x5f1a5a = 1;
  while (!_0x16c2bb) {
    const _0x3e4db2 = {
      bizScene: "IDIOM",
      bizParam: "{\"type\":\"addTaskNum\",\"data\":{\"num\":" + _0x5f1a5a + ",\"type\":4}}",
      bizMethod: "queryIndex"
    };
    const _0x5c15e0 = await gameRequest(_0x301228, _0x3e4db2);
    _0x5f1a5a = _0x5c15e0.num;
    const _0x4b4d10 = {
      bizScene: "IDIOM",
      bizParam: "{\"type\":\"getGameGold\",\"data\":{\"type\":13,\"request_id\":" + _0x350675 + "}}",
      bizMethod: "queryIndex"
    };
    const _0x2c7d31 = await gameRequest(_0x301228, _0x4b4d10);
    _0x16c2bb = _0x2c7d31.msg;
    if (_0x16c2bb) {
      console.log("看图猜成语：" + _0x16c2bb);
      break;
    }
    if (_0x2c7d31 && _0x2c7d31.amount) {
      console.log("看图猜成语闯关成功，获得", _0x2c7d31.amount, "金币");
      const _0x57a440 = {
        bizScene: "IDIOM",
        bizParam: "{\"type\":\"addGameGold\",\"data\":{\"type\":13,\"request_id\":" + _0x350675 + ",\"ver\":1,\"double\":4}}",
        bizMethod: "queryIndex"
      };
      var _0x2f2b37 = _0x57a440;
      var _0x29a3ad = await fanbei(_0x301228, _0x2f2b37);
      _0x16c2bb = _0x29a3ad.msg;
      if (_0x29a3ad && _0x29a3ad.amount) {
        console.log("看广告翻倍，获得", _0x29a3ad.amount, "金币");
        console.log("当前金币", _0x29a3ad.num);
      } else {
        const _0x2ab1a7 = {
          bizScene: "IDIOM",
          bizParam: "{\"type\":\"addGameGold\",\"data\":{\"type\":13,\"request_id\":" + _0x350675 + ",\"ver\":1,\"double\":1}}",
          bizMethod: "queryIndex"
        };
        _0x2f2b37 = _0x2ab1a7;
        _0x29a3ad = await gameRequest(_0x301228, _0x2f2b37);
        _0x16c2bb = _0x29a3ad.msg;
        if (!_0x16c2bb) {
          console.log("当前金币", _0x29a3ad.num);
        }
      }
      await wait(2);
      console.log("==============================");
    } else {
      console.log("看图猜成语：", _0x2c7d31.msg);
    }
  }
}
async function fanbei(_0xb5250, _0x38e7d0) {
  const _0x21aafb = await query_task(_0xb5250);
  const _0x4857da = _0x21aafb[0];
  const _0xbf274f = _0x4857da.actionConfig.actionValue.pageSpm;
  await pageview(_0xb5250, _0xbf274f, _0x4857da.missionCollectionId, _0x4857da.missionDefId);
  await receive_task(_0xb5250, _0x4857da.missionCollectionId, _0x4857da.missionDefId);
  return await gameRequest(_0xb5250, _0x38e7d0);
}
async function kbx(_0x4a3f1f) {
  const _0x2ff908 = new Date().getTime();
  var _0x18f22c = "";
  while (!_0x18f22c) {
    const _0x390534 = {
      bizScene: "IDIOM",
      bizParam: "{\"type\":\"getGameGold\",\"data\":{\"type\":8,\"request_id\":" + _0x2ff908 + "}}",
      bizMethod: "queryIndex"
    };
    const _0x147b82 = await gameRequest(_0x4a3f1f, _0x390534);
    _0x18f22c = _0x147b82.msg;
    if (_0x147b82 && _0x147b82.amount) {
      console.log("开宝箱，获得", _0x147b82.amount, "金币");
      const _0x19f9f5 = {
        bizScene: "IDIOM",
        bizParam: "{\"type\":\"addGameGold\",\"data\":{\"id\":2,\"type\":8,\"request_id\":" + _0x2ff908 + ",\"ver\":1,\"double\":5}}",
        bizMethod: "queryIndex"
      };
      const _0x3f63c9 = await fanbei(_0x4a3f1f, _0x19f9f5);
      _0x18f22c = _0x3f63c9.msg;
      if (_0x3f63c9 && _0x3f63c9.amount) {
        console.log("看广告翻倍，获得", _0x3f63c9.amount, "金币");
        console.log("当前金币", _0x3f63c9.num);
      } else {
        console.log("开宝箱：", _0x3f63c9.msg);
      }
    } else {
      console.log("开宝箱：", _0x18f22c);
      return _0x18f22c;
    }
  }
}
async function share(_0x42978d) {
  const _0x235888 = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"addlybGold\",\"data\":{\"type\":1}}",
    bizMethod: "queryIndex"
  };
  const _0x23ab63 = await gameRequest(_0x42978d, _0x235888);
  if (_0x23ab63 && _0x23ab63.amount) {
    console.log("分享微信，获得", _0x23ab63.amount, "乐园币");
  } else {
    console.log("分享微信：", _0x23ab63.msg);
    return;
  }
}
async function cgjl(_0xb8a48c, _0x18f2ff) {
  if (_0x18f2ff < 5) {
    return;
  }
  const _0x370128 = new Date().getTime();
  var _0x1fe4c1 = 2;
  if (_0x18f2ff == 10) {
    _0x1fe4c1 = 3;
  } else {
    if (_0x18f2ff == 20) {
      _0x1fe4c1 = 4;
    }
  }
  const _0x27f4da = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"getGameGold\",\"data\":{\"id\":" + _0x1fe4c1 + ",\"type\":3,\"request_id\":" + _0x370128 + "}}",
    bizMethod: "queryIndex"
  };
  const _0x536a93 = await gameRequest(_0xb8a48c, _0x27f4da);
  if (_0x536a93 && _0x536a93.amount) {
    console.log("领取闯关奖励，获得", _0x536a93.amount, "金币");
    const _0x15c7da = {
      bizScene: "IDIOM",
      bizParam: "{\"type\":\"addGameGold\",\"data\":{\"id\":" + _0x1fe4c1 + ",\"type\":3,\"request_id\":" + _0x370128 + ",\"ver\":1,\"double\":5}}",
      bizMethod: "queryIndex"
    };
    const _0x39b0b0 = await fanbei(_0xb8a48c, _0x15c7da);
    if (_0x39b0b0 && _0x39b0b0.amount) {
      console.log("看广告翻倍，获得", _0x39b0b0.amount, "金币");
      console.log("当前金币", _0x39b0b0.num);
    } else {
      console.log("翻倍失败", _0x39b0b0.msg);
    }
    console.log("======================================\n");
  }
}
async function lqjb(_0x2ccf84) {
  const _0x56ebed = new Date().getTime();
  const _0x110ea4 = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"addGameGold\",\"data\":{\"id\":2,\"type\":1,\"request_id\":" + _0x56ebed + ",\"ver\":1,\"double\":1}}",
    bizMethod: "queryIndex"
  };
  const _0x51d292 = await gameRequest(_0x2ccf84, _0x110ea4);
  if (_0x51d292 && _0x51d292.amount) {
    console.log("签到成功，获得", _0x51d292.amount, "金币");
    const _0x4968c6 = {
      bizScene: "IDIOM",
      bizParam: "{\"type\":\"addGameGold\",\"data\":{\"id\":2,\"type\":1,\"request_id\":" + _0x56ebed + ",\"ver\":1,\"double\":5}}",
      bizMethod: "queryIndex"
    };
    const _0x1c6e80 = await fanbei(_0x2ccf84, _0x4968c6);
    if (_0x1c6e80 && _0x1c6e80.code === 0) {
      if (_0x1c6e80.amount) {
        console.log("看广告翻倍，获得", _0x1c6e80.amount, "金币");
        console.log("当前金币", _0x1c6e80.num);
      } else {
        const _0x343105 = {
          bizScene: "IDIOM",
          bizParam: "{\"type\":\"addGameGold\",\"data\":{\"id\":2,\"type\":1,\"request_id\":" + _0x56ebed + ",\"ver\":1,\"double\":1}}",
          bizMethod: "queryIndex"
        };
        const _0x2956d4 = await fanbei(_0x2ccf84, _0x343105);
        console.log("当前金币", _0x2956d4.num);
      }
      console.log("======================================\n");
    }
  } else {
    if (!_0x51d292.msg) {
      console.log("请先打开成语闯关界面，玩一局后才跑任务");
      return _0x51d292.msg;
    }
    console.log(_0x51d292.msg);
  }
  await kbx(_0x2ccf84);
  const _0x55fa02 = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"login\",\"data\":{\"ver\":1}}",
    bizMethod: "queryIndex"
  };
  await gameRequest(_0x2ccf84, _0x55fa02);
  const _0x1ddb52 = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"getGameGold\",\"data\":{\"id\":10,\"type\":10,\"request_id\":" + _0x56ebed + "}}",
    bizMethod: "queryIndex"
  };
  const _0x1ebedd = await gameRequest(_0x2ccf84, _0x1ddb52);
  if (_0x1ebedd && _0x1ebedd.amount) {
    console.log("个人中心入口奖励，获得", _0x1ebedd.amount, "金币");
    const _0x332acb = {
      bizScene: "IDIOM",
      bizParam: "{\"type\":\"addGameGold\",\"data\":{\"id\":10,\"type\":10,\"request_id\":" + _0x56ebed + ",\"ver\":1,\"double\":5}}",
      bizMethod: "queryIndex"
    };
    const _0x129ef5 = await fanbei(_0x2ccf84, _0x332acb);
    if (_0x129ef5 && _0x129ef5.amount) {
      console.log("看广告翻倍，获得", _0x129ef5.amount, "金币");
      console.log("当前金币", _0x129ef5.num);
    } else {
      const _0x2177fe = {
        bizScene: "IDIOM",
        bizParam: "{\"type\":\"addGameGold\",\"data\":{\"id\":10,\"type\":10,\"request_id\":" + _0x56ebed + ",\"ver\":1,\"double\":1}}",
        bizMethod: "queryIndex"
      };
      const _0x17ad1a = await fanbei(_0x2ccf84, _0x2177fe);
      if (!_0x17ad1a.msg) {
        console.log("当前金币", _0x17ad1a.num);
      }
    }
    console.log("======================================\n");
  }
  return _0x1ebedd.amount;
}
async function exchange(_0x27459a, _0x21e9ce) {
  const _0x4feeaf = {
    cookie: _0x27459a,
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  const _0x48b343 = {
    actId: "20220811143538649139297230",
    collectionId: "20230227111809817998717332",
    copyId: _0x21e9ce,
    bizScene: "IDIOM",
    channel: "chengyu"
  };
  const _0x3eb0c0 = new Date().getTime();
  const _0x54c9e2 = 12574478;
  var _0x1a1ebf = "data=" + encodeURIComponent(JSON.stringify(_0x48b343));
  const _0x5758cc = getToken(_0x27459a),
    _0x4d850e = _0x5758cc.split("_")[0];
  const _0x2a8f66 = await sign(_0x4d850e + "&" + _0x3eb0c0 + "&" + _0x54c9e2 + "&" + JSON.stringify(_0x48b343), kami);
  const _0x3bfc5a = {
    url: "https://shopping.ele.me/h5/mtop.koubei.interactioncenter.platform.right.exchange.v2/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x3eb0c0 + "&sign=" + _0x2a8f66 + "&api=mtop.koubei.interactioncenter.platform.right.exchange.v2&v=1.0&type=originaljson&dataType=json&timeout=5000&pageDomain=ele.me&ttid=1601274958480%40eleme_android_10.14.3",
    method: "GET",
    headers: _0x4feeaf,
    body: _0x1a1ebf
  };
  return tryCatchPromise(_0x44c3c3 => {
    request(_0x3bfc5a, async (_0x703f70, _0x180a34, _0x1131ab) => {
      if (!_0x703f70 && _0x180a34.statusCode == 200) {
        try {
          const _0x16b1c2 = JSON.parse(_0x1131ab);
          const _0x427801 = _0x16b1c2.data.data[0].discountInfo.amount;
          if (_0x427801) {
            console.log("兑换", _0x427801, "乐园币成功");
            _0x44c3c3(true);
          } else {
            console.log(_0x1131ab);
            _0x44c3c3(false);
          }
        } catch (_0x1a32ef) {
          console.log(_0x1131ab);
          _0x44c3c3(false);
        }
      } else {
        _0x44c3c3(false);
      }
    });
  });
}
async function duihuan(_0x3d5ec3) {
  const _0x51d810 = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"getGold\"}",
    bizMethod: "queryIndex"
  };
  const _0x3b2ea1 = await gameRequest(_0x3d5ec3, _0x51d810);
  const _0x5a3f5f = _0x3b2ea1.num;
  var _0x47f827 = await exchangeList(_0x3d5ec3);
  for (let _0x28c07a = _0x47f827.length - 1; _0x28c07a > -1; _0x28c07a--) {
    const _0x1da2d1 = _0x47f827[_0x28c07a];
    if ("DISABLE" != _0x1da2d1.status && _0x5a3f5f >= _0x1da2d1.propertyConsume.amount) {
      if (!(await exchange(_0x3d5ec3, _0x1da2d1.rightId))) {
        break;
      }
    }
  }
  const _0x5b670b = {
    bizScene: "IDIOM",
    bizParam: "{\"type\":\"ggetGold\"}",
    bizMethod: "queryIndex"
  };
  const _0x385121 = await gameRequest(_0x3d5ec3, _0x5b670b);
  const _0x404046 = _0x385121.num;
  console.log("当前乐园币为：", _0x404046);
}
async function start() {
  await validateCarmeWithType(kami, 1);
  const _0x39790c = getCookies();
  for (let _0x102bc0 = 0; _0x102bc0 < _0x39790c.length; _0x102bc0++) {
    const _0x25873f = _0x39790c[_0x102bc0];
    if (!_0x25873f) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x218f52 = _0x39790c[_0x102bc0];
        _0x218f52 = await checkCk(_0x218f52, _0x102bc0);
        if (!_0x218f52) {
          continue;
        }
        let _0x199305 = await getUserInfo(_0x218f52);
        if (!_0x199305.username) {
          console.log("第", _0x102bc0 + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0x2f2c08 = _0x199305.user_id;
        await checkCarmeCount(kami, _0x2f2c08, GAME_TYEP);
        console.log("******开始【饿了么账号", _0x102bc0 + 1, "】", _0x199305.username, "*********");
        if (!(await lqjb(_0x218f52))) {
          continue;
        }
        await ktcc(_0x218f52);
        await cycgGame(_0x218f52);
        await share(_0x218f52);
        await duihuan(_0x218f52);
      } catch (_0x4fb6fc) {
        console.log(_0x4fb6fc);
      }
    }
  }
  process.exit(0);
}
start();
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