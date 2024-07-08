//Mon Jul 08 2024 04:40:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const request = require("request"),
  {
    getToken,
    checkCk,
    getCookies,
    getUserInfo,
    validateCarmeWithType,
    wait,
    checkCarmeCount,
    tryCatchPromise,
    getbxua
  } = require("./common.js"),
  {
    sign
  } = require("./common"),
  GAME_TYEP = 7,
  wait_time = process.env.sq_wait_time || 30,
  kami = process.env.ELE_CARME;
function isEmpty(_0x5d1556) {
  return Object.values(_0x5d1556).length === 0;
}
async function getInfo(_0x552b5a, _0x55f29c, _0x465ccf) {
  const _0x3695d6 = {
      sceneCode: "",
      inviter: "",
      unionId: _0x465ccf,
      communityType: "2",
      groupEnvironment: false,
      encryptedData: "",
      iv: "",
      code: ""
    },
    _0x5a0823 = new Date().getTime(),
    _0x326c79 = 32529321;
  var _0x3f78fc = "data=" + encodeURIComponent(JSON.stringify(_0x3695d6));
  const _0x5f0944 = _0x55f29c.split(";")[0],
    _0x1e9ba1 = _0x5f0944.split("_")[0],
    _0x5b22e5 = await sign(_0x1e9ba1 + "&" + _0x5a0823 + "&" + _0x326c79 + "&" + JSON.stringify(_0x3695d6), kami),
    _0x41f6a7 = "jsv=2.4.12&appKey=" + _0x326c79 + "&t=" + _0x5a0823 + "&sign=" + _0x5b22e5 + "&c=" + _0x55f29c + "&api=mtop.alsc.wechat.biz.api.community.homepage&dataType=json&method=GET&timeout=10000&v=1.0&type=originaljson&ttid=" + encodeURIComponent("wxece3a9a4c82f58c9@wechat_ios_11.7.0") + "&accountSite=eleme" + "&" + _0x3f78fc + "&_bx-m=1",
    {
      bx_ua: _0x120610,
      mini_janus: _0x460147
    } = await getbxua(kami, _0x41f6a7),
    _0x13fb38 = {
      "content-type": "application/x-www-form-urlencoded",
      Connection: "keep-alive",
      Cookie: _0x552b5a + "",
      "x-tap": "wx",
      "mini-janus": encodeURIComponent(_0x460147),
      "x-decode-ua": "false",
      "x-secext-city": "16",
      "bx-ua": encodeURIComponent(_0x120610),
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090923) XWEB/8555",
      accept: "application/json",
      xweb_xhr: "1",
      "sec-fetch-site": "cross-site",
      "sec-fetch-mode": "cors",
      "x-ua": "MiniAppVersion/11.7.0 DeviceId/" + _0x465ccf,
      "x-decode-ua": "false",
      "sec-fetch-dest": "empty",
      referer: "https://servicewechat.com/wxece3a9a4c82f58c9/582/page-frame.html",
      "accept-language": "zh-CN,zh;q=0.9",
      xweb_xhr: 1
    },
    _0x481886 = {
      url: "https://waimai-guide.ele.me/h5/mtop.alsc.wechat.biz.api.community.homepage/1.0/4.0/?" + _0x41f6a7,
      method: "GET",
      headers: _0x13fb38
    };
  return new Promise(_0x336746 => {
    request(_0x481886, async (_0x2c43c2, _0x55bde4, _0x3342f5) => {
      if (!_0x2c43c2 && _0x55bde4.statusCode === 200) {
        try {
          const _0x4f8c91 = JSON.parse(_0x3342f5);
          if (!isEmpty(_0x4f8c91.data)) {
            _0x336746(_0x4f8c91.data);
          } else {
            console.log(_0x4f8c91.ret[0]);
            _0x336746(null);
          }
        } catch (_0x5d3a1e) {
          console.log(_0x3342f5);
          _0x336746(null);
        }
      } else {
        _0x336746(null);
      }
    });
  });
}
async function signin(_0x13f469, _0x31bbbe, _0x236509, _0x4e78d1) {
  const _0x5b271d = {
      sceneCode: _0x31bbbe,
      firstCheckIn: false
    },
    _0x1f27e4 = new Date().getTime(),
    _0x396bfe = 32529321;
  var _0x2b5add = "data=" + encodeURIComponent(JSON.stringify(_0x5b271d));
  const _0x4113cd = _0x236509.split(";")[0],
    _0x254144 = _0x4113cd.split("_")[0],
    _0x3d7641 = await sign(_0x254144 + "&" + _0x1f27e4 + "&" + _0x396bfe + "&" + JSON.stringify(_0x5b271d), kami),
    _0x301a69 = "jsv=2.4.12&appKey=" + _0x396bfe + "&t=" + _0x1f27e4 + "&sign=" + _0x3d7641 + "&c=" + _0x236509 + "&api=mtop.alsc.wechat.biz.api.community.homepage&dataType=json&method=GET&timeout=10000&v=1.0&type=originaljson&ttid=" + encodeURIComponent("wxece3a9a4c82f58c9@wechat_ios_11.4.4") + "&accountSite=eleme&needLogin=true" + "&" + _0x2b5add,
    {
      bx_ua: _0x2d5ae6,
      mini_janus: _0xd9b7a2
    } = await getbxua(kami, _0x301a69),
    _0x555fa2 = {
      "content-type": "application/x-www-form-urlencoded",
      Connection: "keep-alive",
      Cookie: _0x13f469 + "",
      "x-tap": "wx",
      "mini-janus": encodeURIComponent(_0xd9b7a2),
      "x-decode-ua": "false",
      "x-secext-city": "16",
      "bx-ua": encodeURIComponent(_0x2d5ae6),
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090923) XWEB/8555",
      accept: "application/json",
      xweb_xhr: "1",
      "sec-fetch-site": "cross-site",
      "sec-fetch-mode": "cors",
      "x-ua": "MiniAppVersion/11.7.0 DeviceId/" + _0x4e78d1,
      "x-decode-ua": "false",
      "sec-fetch-dest": "empty",
      referer: "https://servicewechat.com/wxece3a9a4c82f58c9/582/page-frame.html",
      "accept-language": "zh-CN,zh;q=0.9",
      xweb_xhr: 1
    },
    _0xa23b33 = {
      url: "https://guide-acs.m.taobao.com/h5/mtop.alsc.wechat.biz.api.checkin/1.0/4.0/?" + _0x301a69,
      method: "GET",
      headers: _0x555fa2
    };
  return tryCatchPromise(_0x198504 => {
    request(_0xa23b33, async (_0x6de9a6, _0xe1e9df, _0x11e0a6) => {
      if (!_0x6de9a6 && _0xe1e9df.statusCode === 200) {
        try {
          const _0x4bd800 = JSON.parse(_0x11e0a6);
          !isEmpty(_0x4bd800.data) ? _0x198504(_0x4bd800.data) : (console.log(_0x4bd800.ret[0]), _0x198504(null));
        } catch (_0x52c3da) {
          console.log(_0x11e0a6 || _0x52c3da);
          _0x198504(null);
        }
      } else {
        _0x198504(null);
      }
    });
  });
}
async function bindInvited(_0x4c9f5d, _0x174adf, _0x1b9541) {
  const _0x4a9986 = {},
    _0x355aae = _0x4a9986._m_h5_tk + ";" + _0x4a9986._m_h5_tk_enc,
    _0x4da162 = _0x355aae,
    _0x54a717 = {
      inviteCode: "" + _0x174adf + "",
      firstCheckIn: false
    },
    _0xe12440 = new Date().getTime(),
    _0x2dd251 = 32529321;
  var _0x4a05ab = "data=" + encodeURIComponent(JSON.stringify(_0x54a717));
  const _0x56d75e = _0x4da162.split(";")[0],
    _0x1e83f2 = _0x56d75e.split("_")[0],
    _0x277517 = await sign(_0x1e83f2 + "&" + _0xe12440 + "&" + _0x2dd251 + "&" + JSON.stringify(_0x54a717), kami),
    _0x59a5f9 = "jsv=2.4.12&appKey=" + _0x2dd251 + "&t=" + _0xe12440 + "&sign=" + _0x277517 + "&c=" + _0x4da162 + "&api=mtop.alsc.wechat.biz.api.community.homepage&dataType=json&method=GET&timeout=10000&v=1.0&type=originaljson&ttid=" + encodeURIComponent("wxece3a9a4c82f58c9@wechat_ios_11.4.4") + "&accountSite=eleme&needLogin=true" + "&" + _0x4a05ab,
    {
      bx_ua: _0x5747b8,
      mini_janus: _0x4286d2
    } = await getbxua(kami, _0x59a5f9),
    _0x484b62 = {
      "content-type": "application/x-www-form-urlencoded",
      Connection: "keep-alive",
      Cookie: _0x4c9f5d + "",
      "x-tap": "wx",
      "mini-janus": encodeURIComponent(_0x4286d2),
      "x-decode-ua": "false",
      "x-secext-city": "16",
      "bx-ua": encodeURIComponent(_0x5747b8),
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090923) XWEB/8555",
      accept: "application/json",
      xweb_xhr: "1",
      "sec-fetch-site": "cross-site",
      "sec-fetch-mode": "cors",
      "x-ua": "MiniAppVersion/11.7.0 DeviceId/" + _0x1b9541,
      "x-decode-ua": "false",
      "sec-fetch-dest": "empty",
      referer: "https://servicewechat.com/wxece3a9a4c82f58c9/582/page-frame.html",
      "accept-language": "zh-CN,zh;q=0.9",
      xweb_xhr: 1
    },
    _0x3f2434 = {
      url: "https://guide-acs.m.taobao.com/h5/mtop.alsc.wechat.biz.api.community.bind.invite/1.0/4.0/?" + _0x59a5f9,
      method: "GET",
      headers: _0x484b62
    };
  return tryCatchPromise(_0x50bfc4 => {
    request(_0x3f2434, async (_0x2948a9, _0x500f2b, _0x392858) => {
      if (!_0x2948a9 && _0x500f2b.statusCode === 200) {
        try {
          const _0x1a883a = JSON.parse(_0x392858);
          if (!isEmpty(_0x1a883a.data)) {
            console.log(_0x1a883a.data.desc + "获得：" + _0x1a883a.data.awardAmount + " 福利金");
            _0x50bfc4(_0x1a883a.data);
          } else {
            console.log(_0x1a883a.ret[0]);
            _0x50bfc4(null);
          }
        } catch (_0x3bf439) {
          console.log(_0x392858);
          _0x50bfc4(null);
        }
      } else {
        _0x50bfc4(null);
      }
    });
  });
}
async function checkIn(_0x392d15, _0x1b2591, _0x4347f6) {
  const _0x1280b1 = _0x1b2591.communityInfo;
  if (_0x1280b1.communityName) {
    console.log("绑定的社群为：" + _0x1280b1.communityName);
    const _0x710ae6 = process.env.inviteCode || "76466F";
    _0x1b2591.userInfo && _0x710ae6 !== _0x1b2591.userInfo.inviteCode && !_0x1b2591.userInfo.inviteUserInfoDTO && _0x710ae6 && (await bindInvited(_0x392d15, _0x710ae6, _0x4347f6));
    const _0x3cf2e7 = _0x1280b1.sceneCode,
      _0x132eb3 = {},
      _0x230536 = _0x132eb3._m_h5_tk + ";" + _0x132eb3._m_h5_tk_enc,
      _0x6ca616 = await signin(_0x392d15, _0x3cf2e7, _0x230536, _0x4347f6);
    _0x6ca616 && console.log(_0x6ca616.desc);
  } else {
    console.log("你还没有加入社群，快找社群加入吧！");
  }
}
async function start() {
  await validateCarmeWithType(kami, 1);
  let _0x2532c1 = getCookies();
  for (let _0x1ac684 = 0; _0x1ac684 < _0x2532c1.length; _0x1ac684++) {
    const _0x1171f4 = _0x2532c1[_0x1ac684];
    if (!_0x1171f4) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x418cd2 = await checkCk(_0x1171f4, _0x1ac684, kami);
        if (!_0x418cd2) {
          continue;
        }
        let _0x13b310 = await getUserInfo(_0x418cd2);
        if (!_0x13b310.username) {
          console.log("第", _0x1ac684 + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0x5c30d1 = _0x13b310.user_id;
        await checkCarmeCount(kami, _0x5c30d1, GAME_TYEP);
        console.log("******开始【饿了么账号", _0x1ac684 + 1, "】", _0x13b310.username, "*********");
        const _0x294035 = {},
          _0x5c155a = _0x294035._m_h5_tk + ";" + _0x294035._m_h5_tk_enc,
          _0x214511 = _0x294035.union_id;
        if (!_0x214511) {
          console.log("缺少union_id");
          continue;
        }
        const _0x584107 = await getInfo(_0x418cd2, _0x5c155a, _0x214511);
        if (_0x584107.communityInfo) {
          await checkIn(_0x418cd2, _0x584107, _0x214511);
        } else {
          console.log("获取用户信息：" + JSON.stringify(_0x584107));
        }
        if (_0x1ac684 < _0x2532c1.length - 1) {
          console.log("延时", wait_time, "秒继续下一个");
          await wait(wait_time);
        }
      } catch (_0x1026c8) {
        console.log(_0x1026c8);
      }
    }
  }
  process.exit(0);
}
start();