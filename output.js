//Sun Aug 18 2024 09:26:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    validateCarmeWithType,
    commonRequest,
    getCookies,
    getUserInfoWithX,
    wait,
    REQ,
    getCoordinates
  } = require("./common.js"),
  ELE_CARME = process.env.ELE_CARME;
class USER extends REQ {
  constructor(_0x298734, _0x3ff457, _0x38d1e9) {
    super();
    this.cookie = _0x298734;
    this.latitude = _0x3ff457;
    this.longitude = _0x38d1e9;
  }
  async userInfo() {
    const _0x405c01 = await getUserInfoWithX(this.cookie, 3),
      _0x40fb63 = {
        lgrsRequestItems: "[{\"backup\":false,\"count\":1,\"data\":{\"needHead\":true,\"month\":\"\"},\"resId\":\"867018\"}]",
        latitude: this.latitude,
        longitude: this.longitude
      },
      _0x12eef3 = "mtop.alibaba.svip.langrisser.query";
    let _0x4e3615 = {};
    try {
      const _0x324176 = await commonRequest(this.cookie, JSON.stringify(_0x40fb63), _0x12eef3, 3, "waimai-guide.ele.me", process.env.x5sec);
      _0x324176.ret && _0x324176.ret[0] && _0x324176.ret[0].includes("SUCCESS") && (_0x4e3615 = _0x324176, this.userinfo = {
        ..._0x405c01,
        ..._0x4e3615
      });
    } catch (_0x431c4e) {
      console.log(_0x431c4e);
    }
    return {
      ..._0x405c01,
      ..._0x4e3615
    };
  }
  async dosign() {
    const _0x55df9a = {
        bizScene: "svip_sign_scene",
        asac: "2A227051WYEVFLNT5WTFAM",
        ua: "140#12zrpj1KzzZy9zo2iF4HvLVRc73bSHDSGyZC4gbVM0ki17oso/aF3KnehPSBf8i9bxC+ZMaGI185lSIVU+cWVn0oL4QKcUPnUDo8xqUUpzCUSgl2y4C6t5ZS/f1aqQj6pYcNC4XVdFjl89KJiIgcCyfJ9C0qgYp6V+rzJ2FXfBtbLCWkuXomeCXyj+UeftnxnpxJnySZ3CLo3+Kibze1zcI+mMH+xwFJujnSy0OR6Ypi6f4yWR7Pv8GJGBd1WZfBk1jNUInA+9IUhGSwIbg52EaKwpWkD+k97XH1dg2BkXrEkBTNhry7EsIsc9Wyp1eAZRDvxlUSOi9OGfNb9A7DBGpvvOzKu5it283fQJaKWj+Yu0QhpYCzBM6rf0Yn6FG6Fc0n0TWNXi/f3dKjblX4liPHsz9kwWdXhcNz6NyP2GmseOUL0pio5ogh5Wi0yjd6gguXVb3Qs6hqzznOHUCkp7uzzFD9IamulFzx2DD3VthEezXKPZ5tr5xgF0BnX8HRQK2oZMhKxp82dxKV2uHmVSrxbDx10vBuFFzc5XDLN9XwzK2V5Q2Ds46Ezpl28tcKPFr4Z0m3Q30OtMiNmTgzUp9SxI1Sd5W2VioC2AWLkGUGoExIAjmpV2sdDTFOIXDpa5MoeDNXyH0NDrZbLXCxI1QKZufsITP30vQ3J8rXcL11FnzX2xZfp/jLzD78E0v/g1px5ngLJRUSfXdbXGgISt2/FuEdiTNF1bZwR/wobRl7+QncQBKeNT1RZFpbUu7rFSxDF0WM9tnfqf3o2tPx5TAjtDO95FmqMV9oE0hZ82HzPrF/2XB4a3OKf+iIvRPLlFt3BtP+VPQxzFFI2XMvl61rznOjVXe6CFrxLUU3/3h/zzGi2xrflpTzzDoRV2l/2bepGHBP2IwNfm7c9/HdmEP3BCgkxcZcTUaFXSJshFI0fgfe4GibOW4YzRlIGCIVysP7q61rERW03rzaw9ygfdPNemKsPHRiUz6Gl/cLR+uT2Wtcgm6cZBwyTnzNXFDxXjoUH+H36r87StOyzxtUokGwOM9pZMv9QFcsD3QfkxdsdgyktkvSWInGO6bg1YSGsVEHpCfi+tF8SQCF47bsPYbX8tPyJeJmJog2fdJD3ai2LEAWbc3io7ybmTKdvQZJoITYh7xg1Bqhm5RAdvbqAZvYIc8TD49B0sQ99hMqXZEDvWzoczpIO5/S8XQh395p+E23tnYB5d43rOr8kZ52YdlNtZzw025ba8r5yw8L5uCEffV4aRPQCjhIIPDBCn2y5e8vLtfy38He0+VBxrVS4obWPzoW6IqB4BEVg+Jsz09kpQ5NnjxmaEe6iPUAvpiDTlUm8My79kGKJr77ISgePkr0uAaaPxHU0FH3IGLcsSk8lmy5lI4TH+NecCAqHNuXKbASSsYzO0cJUzJTy2B43+3rZPLLv99kkFrJdpz32GotXFrQngmDOqS/S1nzN5JtKo2VMZHBRfwxTq+7dO5fY7Wp+ChxBd7LT9FYPTxXzDivV7roMRHXtsFgCMA4U2nWP3GxWPMEHld9rD6LcwPrE+dO48iQV+eVTbWJDKDAGZnSR5cJu1rdajxn33TZDGJwxsmg1CBqMXPFINb7hIiOn9TD85+6DIoJzrl7nyYZheuAXv0ghdzoTDqW3t+dh7feRpJqbMpe9yI2UMHhLpHFkW1=",
        umidToken: "T2gANzubtSwJ1dbmOyGViDE7u0UNk4Wsy0uTAt9DkIKE71GHjlEWM-WHcCJThn5gzvo=",
        latitude: this.latitude,
        longitude: this.longitude
      },
      _0x3d5800 = "mtop.koubei.interactioncenter.sign.component.recordsignin";
    try {
      const _0x43f81e = await commonRequest(this.cookie, JSON.stringify(_0x55df9a), _0x3d5800, 3, "mtop.ele.me", process.env.x5sec);
      if (_0x43f81e.data && _0x43f81e.data.errorMsg) {
        console.log("吃货豆签到: " + _0x43f81e.data.errorMsg);
        return false;
      } else {
        const _0x152820 = _0x43f81e.data.data.ext.signSuccessText;
        console.log("吃货豆签到: " + _0x152820);
        await _0x1a2f0c(1);
        return _0x480b1d !== 1;
      }
    } catch (_0x5bccf8) {
      return false;
    }
  }
  async taskList() {
    const _0x44429f = {
        callSource: "biz_card_main",
        lgrsRequestItems: "[{\"resId\":\"224166\"}]",
        extra: "{\"source\":\"mtop\"}",
        latitude: this.latitude,
        longitude: this.longitude
      },
      _0x3e79a2 = "mtop.alibaba.svip.langrisser.query",
      _0x703d56 = await commonRequest(this.cookie, JSON.stringify(_0x44429f), _0x3e79a2, 3, "waimai-guide.ele.me", process.env.x5sec),
      _0x21274f = _0x703d56.data.data["224166"].data,
      _0x1d98fd = _0x21274f.filter(_0x45093c => {
        return _0x45093c.missionType === "SIMPLESIGNIN";
      }).map(_0x45e570 => {
        return {
          showTitle: _0x45e570.showTitle,
          missionCollectionId: _0x45e570.missionCollectionId,
          missionDefId: _0x45e570.missionDefId,
          missionXId: _0x45e570.missionXId,
          type: "SIMPLESIGNIN"
        };
      }),
      _0x4753d7 = _0x21274f.filter(_0x2989b9 => {
        return _0x2989b9.missionType === "PAGEVIEW";
      }).map(_0x1afec5 => {
        return {
          showTitle: _0x1afec5.showTitle,
          missionCollectionId: _0x1afec5.missionCollectionId,
          missionDefId: _0x1afec5.missionDefId,
          missionXId: _0x1afec5.missionXId,
          pageSpm: _0x1afec5.pageSpm,
          pageStageTime: _0x1afec5.pageStageTime,
          asac: _0x1afec5.asac,
          type: "PAGEVIEW"
        };
      });
    return {
      SIMPLESIGNIN: _0x1d98fd,
      PAGEVIEW: _0x4753d7
    };
  }
  async doSimpleSignIn(_0x177e6e, _0x318bb6, _0x50586a, _0x1620df) {
    const _0xe57743 = "mtop.alibaba.svip.langrisser.act",
      _0x2207e2 = {
        resId: "223166",
        source: "mtop",
        ua: "140#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",
        umidToken: "T2gAGjr5Sfay_NOGxijdnPeCBHRLPf3q8F_TBKf1b4mBkg2anF5I3JahHbbhTeinxjw=",
        extra: "{\"missionDefId\":" + _0x177e6e + ",\"missionCollectionId\":" + _0x318bb6 + ",\"missionType\":\"" + _0x50586a + "\",\"source\":\"mtop\",\"missionXId\":\"" + _0x1620df + "\"}",
        callSource: "biz_code_main",
        latitude: this.latitude,
        longitude: this.longitude
      };
    return await commonRequest(this.cookie, JSON.stringify(_0x2207e2), _0xe57743, 3, "waimai-guide.ele.me", process.env.x5sec);
  }
  async pageViewTask(_0x55f43d, _0x2b44b5, _0x4f6026, _0x1d810c, _0x1894f2) {
    const _0x56f79d = "mtop.ele.biz.growth.task.event.pageview",
      _0xfe69a1 = {
        collectionId: _0x2b44b5,
        missionId: _0x55f43d,
        actionCode: "PAGEVIEW",
        pageFrom: _0x4f6026,
        viewTime: _0x1894f2,
        bizScene: "svip",
        accountPlan: "HAVANA_COMMON",
        sync: "true",
        asac: _0x1d810c,
        ua: "140#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",
        umidtoken: "T2gAYNtN5EUKu0Ysvk9twElijmzMXNDVP_FGU7k76r0c_q8sxuR5-CvhAAj2qBz0QGo="
      };
    return await commonRequest(this.cookie, JSON.stringify(_0xfe69a1), _0x56f79d, 3, "waimai-guide.ele.me", process.env.x5sec);
  }
  async doPageView(_0x4c15cd, _0x5d7389, _0x52011f, _0x2b0299, _0x38705b, _0x2103e1, _0x489e1c) {
    const _0x59ed95 = await this.doSimpleSignIn(_0x4c15cd, _0x5d7389, _0x52011f, _0x2b0299);
    if (_0x59ed95.ret[0].includes("SUCCESS")) {
      console.log("🍁🍁等待15秒🍁🍁");
      await wait(15);
      const _0x532036 = await this.pageViewTask(_0x4c15cd, _0x5d7389, _0x38705b, _0x2103e1, _0x489e1c);
      return _0x532036;
    } else {
      if (_0x59ed95.ret[0].includes("SUCCESS")) {
        console.log("已完成该任务");
      } else {
        console.log(_0x59ed95);
        return false;
      }
    }
  }
}
(async () => {
  await validateCarmeWithType(ELE_CARME, 1);
  const _0x33573a = getCookies("elmck"),
    {
      latitude: _0x1a8782,
      longitude: _0x29b842
    } = await getCoordinates(),
    _0x481606 = [];
  for (const _0x168d64 of _0x33573a) {
    _0x481606.push(new USER(_0x168d64, _0x1a8782, _0x29b842));
  }
  console.log("============开始任务============");
  for (let _0x183bee = 0; _0x183bee < _0x481606.length; _0x183bee++) {
    const _0x4250d2 = _0x481606[_0x183bee];
    await _0x4250d2.userInfo();
    if (_0x4250d2.userinfo && _0x4250d2.userinfo[0]) {
      console.log("第", _0x183bee + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    if (!_0x4250d2.userinfo || !_0x4250d2.userinfo.userName) {
      continue;
    }
    console.log("\n****** 🍁" + (_0x183bee + 1), _0x4250d2.userinfo.encryptMobile, "🍁*********");
    console.log("账号id：", _0x4250d2.userinfo.localId);
    console.log("当前吃货豆：", _0x4250d2.userinfo.data.data["867018"].data[0].peaCount);
    await _0x4250d2.dosign();
    const {
      SIMPLESIGNIN: _0x5588f7,
      PAGEVIEW: _0x49ee78
    } = await _0x4250d2.taskList();
    for (const _0x38ef9a of _0x5588f7) {
      console.log("去完成任务=>" + _0x38ef9a.showTitle);
      try {
        const _0x272d27 = await _0x4250d2.doSimpleSignIn(_0x38ef9a.missionDefId, _0x38ef9a.missionCollectionId, _0x38ef9a.type, _0x38ef9a.missionXId);
        if (_0x272d27.ret[0].includes("SUCCESS") && _0x272d27.data.success) {
          console.log(_0x38ef9a.showTitle + "完成");
        } else {
          _0x272d27.ret[0].includes("SUCCESS") ? console.log(_0x38ef9a.showTitle + "出现问题" + _0x272d27.data.msgInfo) : console.log(_0x38ef9a.showTitle + "可能出现问题");
        }
      } catch (_0x45c9b6) {
        console.log(_0x45c9b6);
      }
      console.log("🍁🍁等待1秒🍁🍁");
      await wait(1);
    }
    for (const _0x594468 of _0x49ee78) {
      console.log("去完成任务=>" + _0x594468.showTitle);
      try {
        const _0x4c49a0 = await _0x4250d2.doPageView(_0x594468.missionDefId, _0x594468.missionCollectionId, _0x594468.type, _0x594468.missionXId, _0x594468.pageSpm, _0x594468.asac, _0x594468.pageStageTime);
        if (_0x4c49a0) {
          if (_0x4c49a0.ret[0].includes("SUCCESS")) {
            console.log(_0x594468.showTitle + "完成");
          } else {
            if (_0x4c49a0.ret[0].includes("SUCCESS")) {
              console.log(_0x594468.showTitle + "出现问题" + _0x4c49a0.data.msgInfo);
            } else {
              console.log(_0x594468.showTitle + "可能出现问题");
            }
          }
        }
      } catch (_0x594665) {
        console.log(_0x594665);
      }
      console.log("🍁🍁等待1秒🍁🍁");
      await wait(1);
    }
    await _0x4250d2.userInfo();
    console.log("当前吃货豆：", _0x4250d2.userinfo.data.data["867018"].data[0].peaCount);
    console.log("🍁🍁防止挤爆了，等待1秒🍁🍁");
    await wait(1);
  }
})();