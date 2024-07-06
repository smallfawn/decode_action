//Sat Jul 06 2024 11:18:07 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    wait: _0x50bae8,
    checkCk: _0x38d5d1,
    getCookies: _0x515ad8,
    getUserInfo: _0x464f6c,
    validateCarmeWithType: _0x2f885,
    commonRequest: _0x139ea1,
    getCookieMap: _0x29d5e3
  } = require("./common.js"),
  _0x33c6e3 = 15,
  _0x2a23c3 = process.env.ELE_CARME,
  {
    sendNotify: _0xfb6d66
  } = require("./sendNotify1.js");
function _0x4661f2(_0x255ea3) {
  return Object.values(_0x255ea3).length === 0;
}
async function _0x4c130f(_0x325122, _0x3e6c07) {
  const _0x1c7ceb = _0x29d5e3(_0x325122);
  !_0x1c7ceb.has("wxUid") ? console.log("没有获取到推送 uid，不推送消息\n") : await _0xfb6d66("饿了么中奖推送", _0x3e6c07, {
    "uid": _0x1c7ceb.get("wxUid")
  });
}
async function _0x2ed212(_0x3e63ec, _0x1bb26d, _0x11c178, _0x3af5a9 = "1608030065155%40eleme_android_11.1.38") {
  let _0x163b03 = await _0x139ea1(_0x3e63ec, JSON.stringify(_0x11c178), _0x1bb26d, _0x33c6e3);
  try {
    let _0x596645 = _0x163b03.data;
    return _0x4661f2(_0x596645) && _0x163b03.ret[0].indexOf("接口调用成功") === -1 ? (_0x163b03.ret[0] && console.log(_0x163b03.ret[0]), null) : _0x596645;
  } catch (_0x504b08) {
    return null;
  }
}
async function _0x13af81(_0x356254, _0x322c36) {
  const _0x209a85 = {
    "missionCollectionId": _0x322c36,
    "locationInfos": "[\"{\\\"lng\\\":120.21993197500706,\\\"lat\\\":30.178378857672215}\"]",
    "accountPlan": "HAVANA_COMMON",
    "remindInfo": "false"
  };
  let _0x4a3689 = await _0x2ed212(_0x356254, "mtop.ele.biz.growth.task.core.querytask", _0x209a85);
  if (_0x4a3689) {
    const _0x57fb2b = _0x4a3689.mlist;
    for (let _0x334254 = 0; _0x334254 < _0x57fb2b.length; _0x334254++) {
      const _0x3d0562 = _0x57fb2b[_0x334254];
      let _0x450f9a = _0x3d0562.missionCollectionId,
        _0x265f0c = _0x3d0562.missionDefId;
      if (_0x3d0562.receiveStatus === "TORECEIVE" && _0x3d0562.status === "FINISH") await _0x7e274c(_0x356254, _0x265f0c, _0x450f9a, _0x3d0562.missionXId);else {
        if (_0x3d0562.actionConfig.actionType === "PAGEVIEW" && _0x3d0562.status === "RUNNING") {
          let _0xcbc04a = "KB_ORCHARD";
          if (_0x3d0562.showTitle.indexOf("去游乐园") !== -1) _0xcbc04a = "HAVANA_COMMON";else {}
          let _0x35f2ca = await _0x25ff91(_0x356254, _0x450f9a, _0x265f0c);
          if (_0x35f2ca.status === "RUNNING") {
            await _0x5a2df7(_0x356254, _0x265f0c, _0x450f9a, _0x3d0562.actionConfig.actionValue.pageSpm, _0xcbc04a);
            await _0x50bae8(3);
            let _0x4acf90 = await _0x7f126f(_0x356254, _0x450f9a);
            for (let _0x411aa7 = 0; _0x411aa7 < _0x4acf90.length; _0x411aa7++) {
              let _0x609026 = _0x4acf90[_0x411aa7];
              _0x609026.receiveStatus === "TORECEIVE" && _0x609026.status === "FINISH" && (await _0x37038c(_0x356254, _0x265f0c, _0x450f9a, _0x609026.id));
            }
          } else await _0x37038c(_0x356254, _0x265f0c, _0x450f9a, _0x35f2ca.id);
        }
      }
    }
  }
}
async function _0x7e274c(_0xb77dbd, _0xf6b57b, _0x3bd833) {
  const _0x1ce51f = {
    "missionCollectionId": _0x3bd833,
    "missionId": _0xf6b57b,
    "locationInfos": "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
    "bizScene": "duobao_external",
    "accountPlan": "HAVANA_COMMON",
    "count": "1",
    "asac": "2A233157IJYIGQ95WFIIFJ",
    "umiToken": "1",
    "ua": "1"
  };
  let _0x3a237c = await _0x2ed212(_0xb77dbd, "mtop.ele.biz.growth.task.core.receiveprize", _0x1ce51f, "h5%40chrome_android_87.0.4280.141");
  if (_0x3a237c && _0x3a237c.rlist) {
    console.log("完成任务");
  }
}
async function _0x25ff91(_0x48c691, _0x17512d, _0x193042) {
  const _0x3e4109 = {
    "missionCollectionId": _0x17512d,
    "missionId": _0x193042,
    "bizScene": "duobao_external",
    "accountPlan": "KB_ORCHARD",
    "locationInfos": "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]"
  };
  let _0x157550 = await _0x2ed212(_0x48c691, "mtop.ele.biz.growth.task.core.querytask", _0x3e4109);
  if (_0x157550) return _0x157550.mlist[0];
}
async function _0x7f126f(_0x68dfb2, _0x1cd02e) {
  const _0x21e46c = {
    "missionCollectionId": _0x1cd02e,
    "locationInfos": "[\"{\\\"lng\\\":120.21993197500706,\\\"lat\\\":30.178378857672215}\"]",
    "accountPlan": "HAVANA_COMMON",
    "remindInfo": "false"
  };
  let _0x20725f = await _0x2ed212(_0x68dfb2, "mtop.ele.biz.growth.task.core.querytask", _0x21e46c);
  if (_0x20725f) return _0x20725f.mlist;
}
async function _0x37038c(_0x55616c, _0x4b4f7b, _0x4e0c61, _0x218c48) {
  const _0x1d4cb0 = {
    "missionCollectionId": _0x4e0c61,
    "missionId": _0x4b4f7b,
    "locationInfos": "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
    "bizScene": "duobao_external",
    "accountPlan": "HAVANA_COMMON",
    "instanceId": _0x218c48,
    "count": "1",
    "asac": "2A233157IJYIGQ95WFIIFJ",
    "umiToken": "1",
    "ua": "1"
  };
  let _0x149ed0 = await _0x2ed212(_0x55616c, "mtop.ele.biz.growth.task.core.receiveprize", _0x1d4cb0, "h5%40chrome_android_87.0.4280.141");
  _0x149ed0 && _0x149ed0.rlist && console.log("完成任务");
}
async function _0x1e39a7(_0x36b48d, _0x222bc3) {
  const _0x435130 = {
    "channel": "ELMC",
    "blockList": "[\"luckyNumber\",\"participants\",\"property\",\"winnerList\",\"wonDetail\",\"noWonPrize\"]",
    "rightId": _0x222bc3,
    "bizScene": "duobao_external"
  };
  let _0x1f07f2 = await _0x2ed212(_0x36b48d, "mtop.koubei.interactioncenter.snatch.new.detail", _0x435130),
    _0x1ae75e = _0x1f07f2.data;
  _0x1ae75e && console.log(_0x1ae75e.baseInfo.title, "中奖率，已翻" + _0x1ae75e.properties.hasExchangeNum + "倍");
}
async function _0x5a2df7(_0x610309, _0x4859d1, _0xa008d3, _0x41a3ce, _0x4e8677) {
  const _0xb648a2 = {
    "collectionId": _0xa008d3,
    "missionId": _0x4859d1,
    "actionCode": "PAGEVIEW",
    "pageFrom": _0x41a3ce,
    "viewTime": "15",
    "bizScene": "duobao_external",
    "accountPlan": _0x4e8677,
    "sync": "false",
    "asac": "2A21607NIIT1ND5C4YXJ6C"
  };
  return await _0x2ed212(_0x610309, "mtop.ele.biz.growth.task.event.pageview", _0xb648a2);
}
async function _0x7c1ae8(_0x3f00a9, _0x5bf3ad, _0x586d20) {
  const _0xf46db0 = {
    "missionCollectionId": _0x5bf3ad,
    "missionId": _0x586d20,
    "locationInfos": "[\"{\\\"lng\\\":\\\"120.21993197500706\\\",\\\"lat\\\":\\\"30.178378857672215\\\"}\"]",
    "bizScene": "duobao_external",
    "accountPlan": "HAVANA_COMMON",
    "count": "1",
    "hsf": "1"
  };
  return await _0x2ed212(_0x3f00a9, "mtop.ele.biz.growth.task.core.receiveprize", _0xf46db0);
}
async function _0x54e30b(_0x1440a0) {
  const _0x181bbc = {
    "channel": "ELMC",
    "blockList": "[\"participants\",\"wonDetail\",\"noWonPrize\"]",
    "bizScene": "duobao_external"
  };
  console.log("\n开始查询最近的夺宝结果");
  let _0x31d50c = await _0x2ed212(_0x1440a0, "mtop.koubei.interactioncenter.snatch.mine", _0x181bbc);
  if (_0x31d50c) {
    let _0x5ac076 = _0x31d50c.data;
    if (_0x5ac076.length > 0) for (let _0x3b523e = 0; _0x3b523e < _0x5ac076.length; _0x3b523e++) {
      let _0x3a23cd = _0x5ac076[_0x3b523e];
      _0x3a23cd.awardStatus === "not_won_wait_accept" && (await _0x3f0c4a(_0x1440a0, _0x3a23cd.baseInfo.id), await _0x50bae8(1));
    } else console.log("没有参与过夺宝");
  }
}
async function _0x3f0c4a(_0x58233d, _0x10d086) {
  const _0x3d284f = {
    "rightId": _0x10d086,
    "actId": "20210425163619036128611204",
    "asac": "2A23725HM0AS2TZ458W1VX",
    "bizScene": "duobao_external"
  };
  let _0x5db47c = await _0x2ed212(_0x58233d, "mtop.koubei.interactioncenter.snatch.nowon.reviceprize", _0x3d284f);
  _0x5db47c && console.log("0 元夺宝获得：" + _0x5db47c.data[0].title);
}
async function _0x96fbad(_0x13782d) {
  const _0x3e86e4 = {
    "channel": "ELMC",
    "blockList": "[\"participants\",\"wonDetail\",\"noWonPrize\"]",
    "longitude": "120.21993197500706",
    "latitude": "30.178378857672215",
    "actId": "20230811111144939171438583",
    "cpnCode": "TIMING_RIGHT",
    "cpnCollectionId": "20230811111144993902427153",
    "statusSet": "[\"ONLINE\",\"PREPARE\"]",
    "showStatusSet": "[\"ONLINE\",\"PREPARE\"]",
    "bizScene": "duobao_external"
  };
  let _0x83656 = await _0x2ed212(_0x13782d, "mtop.koubei.interactioncenter.snatch.homepage.query", _0x3e86e4);
  return _0x83656.data;
}
async function _0x4dc61(_0x1d91bd) {
  let _0x8540a4 = await _0x96fbad(_0x1d91bd);
  if (_0x8540a4) {
    let _0x154486 = _0x8540a4.groupSnatchList.EXCELLENT;
    console.log("\n开始夺宝");
    for (let _0x3bc63c = 0; _0x3bc63c < _0x154486.length; _0x3bc63c++) {
      let _0x534c77 = _0x154486[_0x3bc63c];
      if (_0x534c77.status === "ONLINE" && !_0x534c77.properties.hasParticipated) {
        let _0x16327a = _0x534c77.properties,
          _0x256fd6 = _0x534c77.propertyConsumeList;
        _0x256fd6[0].amount !== 0 && (await _0x13af81(_0x1d91bd, _0x16327a.taskSetId));
        let _0x158785 = await _0x7c1ae8(_0x1d91bd, _0x16327a.taskSetId, _0x16327a.popTaskId);
        _0x158785 && console.log("参与", _0x534c77.baseInfo.title, "夺宝成功");
        await _0x50bae8(2);
      }
    }
  }
}
async function _0x5eee16(_0x36663a) {
  let _0x1d2e76 = await _0x96fbad(_0x36663a);
  if (_0x1d2e76) {
    let _0x21335e = _0x1d2e76.groupSnatchList.EXCELLENT;
    console.log("\n开始做翻倍任务");
    for (let _0x44e346 = 0; _0x44e346 < _0x21335e.length; _0x44e346++) {
      let _0x59d817 = _0x21335e[_0x44e346];
      if (_0x59d817.status === "ONLINE") {
        let _0x5776ee = _0x59d817.properties.hasParticipated;
        if (_0x5776ee) {
          let _0x5ccba8 = _0x59d817.properties.taskSetId;
          console.log("\n开始翻倍");
          await _0x13af81(_0x36663a, _0x5ccba8);
          console.log("\n翻倍任务完成");
        }
        await _0x1e39a7(_0x36663a, _0x59d817.baseInfo.rightId);
        await _0x50bae8(2);
      }
    }
  }
}
(async function () {
  const _0x3872f6 = function () {
    let _0x4a5605 = true;
    return function (_0x4f471c, _0x34009a) {
      const _0x2e1714 = _0x4a5605 ? function () {
        if (_0x34009a) {
          const _0x2ac9b4 = _0x34009a.apply(_0x4f471c, arguments);
          return _0x34009a = null, _0x2ac9b4;
        }
      } : function () {};
      return _0x4a5605 = false, _0x2e1714;
    };
  }();
  (function () {
    _0x3872f6(this, function () {
      const _0x3ff324 = new RegExp("function *\\( *\\)"),
        _0x25f8a9 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i"),
        _0x117afe = _0x546c5e("init");
      if (!_0x3ff324.test(_0x117afe + "chain") || !_0x25f8a9.test(_0x117afe + "input")) {
        _0x117afe("0");
      } else _0x546c5e();
    })();
  })();
  await _0x2f885(_0x2a23c3, 1);
  const _0x3f6cdc = _0x515ad8();
  for (let _0x4e2b7b = 0; _0x4e2b7b < _0x3f6cdc.length; _0x4e2b7b++) {
    const _0x2b8538 = _0x3f6cdc[_0x4e2b7b];
    if (!_0x2b8538) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x4b7d96 = await _0x38d5d1(_0x2b8538, _0x4e2b7b);
        if (!_0x4b7d96) {
          continue;
        }
        let _0x25b09f = await _0x464f6c(_0x4b7d96);
        if (!_0x25b09f.username) {
          console.log("第", _0x4e2b7b + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        console.log("****** #", _0x4e2b7b + 1, _0x25b09f.username, "*********");
        await _0x54e30b(_0x4b7d96);
        await _0x4dc61(_0x4b7d96);
        await _0x5eee16(_0x4b7d96);
      } catch (_0x1c36c7) {
        console.log(_0x1c36c7);
      }
    }
  }
  process.exit(0);
})();
function _0x546c5e(_0x1099f0) {
  function _0x2cd718(_0x31bdd6) {
    if (typeof _0x31bdd6 === "string") return function (_0xf958) {}.constructor("while (true) {}").apply("counter");else {
      ("" + _0x31bdd6 / _0x31bdd6).length !== 1 || _0x31bdd6 % 20 === 0 ? function () {
        return true;
      }.constructor("debugger").call("action") : function () {
        return false;
      }.constructor("debugger").apply("stateObject");
    }
    _0x2cd718(++_0x31bdd6);
  }
  try {
    if (_0x1099f0) return _0x2cd718;else {
      _0x2cd718(0);
    }
  } catch (_0x7f0d18) {}
}
(function () {
  let _0x4d33b7;
  try {
    const _0x39f44a = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x4d33b7 = _0x39f44a();
  } catch (_0x3ed9b5) {
    _0x4d33b7 = window;
  }
  _0x4d33b7.setInterval(_0x546c5e, 2000);
})();