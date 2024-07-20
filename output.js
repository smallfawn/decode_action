//Sat Jul 20 2024 15:39:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("京东资产变动");
const bdy_0x4beb50 = require("./function/dylanv"),
  bdy_0x3ac7b4 = require("./function/dylans");
async function getuserinfo_6dy() {
  const _0x2240e0 = {
    url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
    headers: {}
  };
  _0x2240e0.headers.Accept = "application/json, text/plain";
  _0x2240e0.headers["accept-encoding"] = "gzip, deflate, br";
  _0x2240e0.headers["content-type"] = "application/json;charset=UTF-8";
  _0x2240e0.headers.Cookie = cookie;
  _0x2240e0.headers["User-Agent"] = $.UA;
  return new Promise(_0x5a93d1 => {
    $.get(_0x2240e0, async (_0x52e497, _0x54da9a, _0x3f8f26) => {
      try {
        if (_0x52e497) {
          console.log("" + JSON.stringify(_0x52e497));
          console.log("getuserinfo_6dy请求失败，请检查网路重试");
        } else {
          if (_0x3f8f26) {
            _0x3f8f26 = JSON.parse(_0x3f8f26);
            if (_0x3f8f26.retcode === "1001") {
              $.isLogin = false;
              return;
            }
            _0x3f8f26.retcode === "0" && _0x3f8f26.data && ($.levelName = _0x3f8f26.data?.["userInfo"]?.["baseInfo"]?.["levelName"], $.isPlusVip = _0x3f8f26.data?.["userInfo"]?.["isPlusVip"] == 1, $.nickName = _0x3f8f26.data?.["userInfo"]?.["baseInfo"]?.["nickname"] || $.UserName, $.isRealNameAuth = _0x3f8f26.data?.["userInfo"]?.["isRealNameAuth"] || "", $.beanCount = _0x3f8f26.data?.["assetInfo"]?.["beanNum"] || 0);
          } else {
            $.log("京东服务器返回空数据");
          }
        }
      } catch (_0x111ab0) {
        $.logErr(_0x111ab0, _0x54da9a);
      } finally {
        _0x5a93d1();
      }
    });
  });
}
async function bdy_0x591981() {
  const _0xb33d33 = {
    Cookie: cookie,
    "User-Agent": $.UA,
    Origin: "https://huiyuan.m.jd.com",
    Referer: "https://huiyuan.m.jd.com/"
  };
  let _0x1b1d82 = {
    url: "http://api.m.jd.com/client.action",
    body: "functionId=pg_channel_page_data&appid=vipChannelHome&uuid=&t=" + Date.now() + "&loginType=2&loginWQBiz=huiyuan&body=%7B%22v%22%3A%2215.6%22%2C%22paramData%22%3A%7B%22token%22%3A%22a243ca12-6642-4754-bc5e-0ff012681710%22%2C%22lid%22%3A%22Gv8zAj0mnx9iiLgIWfwBEA%3D%3D%22%2C%22priceChannel%22%3A5%2C%22device%22%3A2%7D%2C%22argMap%22%3A%7B%22channel%22%3A%22miniProgram%22%2C%22upstreamChannel%22%3A%22xcx%22%2C%22taskEncId%22%3A%22%22%7D%7D",
    headers: _0xb33d33
  };
  return new Promise(_0xe65c4d => {
    $.post(_0x1b1d82, async (_0x19f6bd, _0x5ef6ea, _0x56b4c0) => {
      try {
        _0x19f6bd ? (console.log("" + JSON.stringify(_0x19f6bd)), console.log("getuserinfo_6dy请求失败，请检查网路重试")) : ($.JingXiang = _0x56b4c0.match(/"score":(\d+)/) ? _0x56b4c0.match(/"score":(\d+)/)[1] : 0, $.beanCount = _0x56b4c0.match(/"currentBeanNum":(\d+)/) ? _0x56b4c0.match(/"currentBeanNum":(\d+)/)[1] : 0, $.nickName = _0x56b4c0.match(/"showName":"(.*?)"/) ? _0x56b4c0.match(/"showName":"(.*?)"/)[1] : $.UserName);
      } catch (_0x58a447) {
        $.logErr(_0x58a447, _0x5ef6ea);
      } finally {
        _0xe65c4d();
      }
    });
  });
}
async function queryScores() {
  const _0x4c5029 = {
    appId: "b63ff",
    functionId: "windControl_queryScore_v1",
    body: {},
    appid: "plus_business",
    user: $.UserName,
    code: 0,
    ua: $.UA
  };
  body = await bdy_0x3ac7b4.getbody(_0x4c5029);
  const _0x1094ab = {
    Cookie: cookie,
    "User-Agent": $.UA,
    Referer: "https://plus.m.jd.com/rights/windControl"
  };
  const _0x50e237 = {
    url: "https://api.m.jd.com/api?" + body + "&loginType=2&loginWQBiz=",
    headers: _0x1094ab
  };
  return new Promise(_0x7bc93e => {
    $.post(_0x50e237, async (_0x3733ee, _0x1721a3, _0x4b12ff) => {
      try {
        const _0x4a4965 = JSON.parse(_0x4b12ff);
        _0x4a4965.code == 1000 && ($.PlustotalScore = _0x4a4965.rs.userSynthesizeScore.totalScore);
      } catch (_0xe041df) {
        $.logErr(_0xe041df, _0x1721a3);
      } finally {
        _0x7bc93e();
      }
    });
  });
}
async function fruitinfo() {
  return new Promise(_0x5c16c9 => {
    const _0x216d18 = {
      version: 24,
      channel: 1,
      babelChannel: "121",
      lat: "0",
      lng: "0"
    };
    const _0x52a7b0 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9",
      cookie: cookie,
      origin: "https://carry.m.jd.com/",
      referer: "https://carry.m.jd.com/",
      "User-Agent": $.UA,
      "Content-Type": "application/x-www-form-urlencoded"
    };
    const _0x3175b3 = {
      url: "https://api.m.jd.com?functionId=gotNewUserTaskForFarm",
      body: "body=" + encodeURIComponent(JSON.stringify(_0x216d18)) + "&appid=wh5",
      headers: _0x52a7b0,
      timeout: 10000
    };
    $.post(_0x3175b3, (_0x2497d5, _0x1afe43, _0x4dfb00) => {
      try {
        if (_0x2497d5) {
          !llgeterror && (console.log("\n东东农场: API查询请求失败 ‼️‼️"), console.log(JSON.stringify(_0x2497d5)));
          llgeterror = true;
        } else {
          llgeterror = false;
          if (safeGet(_0x4dfb00)) {
            $.farmInfo = JSON.parse(_0x4dfb00);
            if ($.farmInfo.farmUserPro) {
              $.JdFarmProdName = $.farmInfo.farmUserPro.name;
              $.JdtreeEnergy = $.farmInfo.farmUserPro.treeEnergy;
              $.JdtreeTotalEnergy = $.farmInfo.farmUserPro.treeTotalEnergy;
              $.treeState = $.farmInfo.farmUserPro.treeState;
            }
          }
        }
      } catch (_0x469f9e) {
        $.logErr(_0x469f9e, _0x1afe43);
      } finally {
        _0x5c16c9();
      }
    });
  });
}
async function fruitnew(_0x58b2ce = 500) {
  const _0x4a12e2 = {
    version: 1
  };
  let _0x48b94e = _0x4a12e2,
    _0x4c718d = {
      appId: "c57f6",
      fn: "farm_home",
      body: _0x48b94e,
      apid: "signed_wh5",
      ver: $.UA.split(";")[2],
      cl: "ios",
      user: $.UserName,
      code: 1,
      ua: $.UA
    };
  _0x48b94e = await bdy_0x4beb50.getbody(_0x4c718d);
  const _0x3c7db2 = {
    Host: "api.m.jd.com",
    Accept: "*/*",
    Origin: "https://h5.m.jd.com",
    "Accept-Encoding": "gzip, deflate, br",
    "User-Agent": $.UA,
    "Accept-Language": "zh-CN,zh-Hans;q=0.9",
    Referer: "https://h5.m.jd.com/",
    Cookie: cookie
  };
  const _0x508e5a = {
    url: JD_API_HOST + "?" + _0x48b94e,
    headers: _0x3c7db2,
    timeout: 30000
  };
  return new Promise(_0x51055a => {
    setTimeout(() => {
      $.get(_0x508e5a, (_0x27dc58, _0x4a5fdb, _0x53b9ea) => {
        try {
          _0x27dc58 ? (console.log("新农场查询失败"), $.logErr(_0x27dc58)) : (_0x53b9ea = JSON.parse(_0x53b9ea), $.fruitnewinfo = _0x53b9ea.data?.["result"] || "");
        } catch (_0xc8646c) {
          $.logErr(_0xc8646c, _0x4a5fdb);
        } finally {
          _0x51055a(_0x53b9ea);
        }
      });
    }, _0x58b2ce);
  });
}
async function checkplus() {
  const _0x9b0de5 = {
    contentType: "1_2_3_4_5_6_8_9_11_12",
    qids: "1_6_7_9",
    checkLevel: 1
  };
  let _0x227a64 = _0x9b0de5;
  const _0x293606 = {
    appId: "b63ff",
    functionId: "user_getUserInfo_v2",
    body: _0x227a64,
    appid: "plus_business",
    user: $.UserName,
    code: 1,
    ua: $.UA
  };
  _0x227a64 = await bdy_0x3ac7b4.getbody(_0x293606);
  const _0x43e1c8 = {
    "User-Agent": $.UA,
    Cookie: cookie,
    Origin: "https://plus.m.jd.com",
    Referer: "https://plus.m.jd.com/"
  };
  const _0x1e7c16 = {
    url: "https://api.m.jd.com/api?functionId=user_getUserInfo_v2",
    body: _0x227a64,
    headers: _0x43e1c8
  };
  return new Promise(async _0x345aea => {
    $.post(_0x1e7c16, async (_0x356d6b, _0x4af0ec, _0x47ef0b) => {
      try {
        if (_0x356d6b) {
          console.log("" + JSON.stringify(_0x356d6b));
          console.log(" API请求失败，请检查网路重试");
        } else {
          _0x47ef0b = JSON.parse(_0x47ef0b);
          if (_0x47ef0b.code == 1711000) {
            $.isPlusVip = _0x47ef0b.rs.plusUserBaseInfo.endDays ? true : false;
          }
        }
      } catch (_0x4d784d) {
        $.logErr(_0x4d784d, _0x4af0ec);
      } finally {
        _0x345aea();
      }
    });
  });
}