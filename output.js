//Mon Jul 08 2024 04:53:49 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  sign,
  getToken,
  wait,
  checkCk,
  validateCarmeWithType,
  User_Agent,
  getCookies,
  checkCarmeCount,
  getUserInfo,
  tryCatchPromise
} = require("./common.js");
const request = require("request");
const GAME_TYEP = 2;
let CookieEles = getCookies();
const kami = process.env.ELE_CARME;
async function fridensHelper(_0x44fa34, _0x3ca75c) {
  _0x44fa34 = await checkCk(_0x44fa34);
  const _0x51fd6d = {
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    Cookie: _0x44fa34,
    "User-Agent": User_Agent
  };
  const _0x9900e7 = new Date().getTime();
  const _0x4ae8f4 = 12574478;
  const _0x5f17d6 = {
    sceneCode: "RECOMMEND_SUPPORT",
    params: "{\"ownerId\":\"" + _0x3ca75c + "\",\"fromOfficialAccount\":false,\"channel\":\"1\",\"referUserId\":\"\",\"restaurantId\":\"\",\"referCode\":\"\",\"referChannelCode\":\"\",\"referChannelType\":\"\",\"fromWeChatApp\":false,\"bizType\":\"1\",\"v\":\"4.3\",\"chInfo\":\"ch_app_chsub_Photo\",\"from\":\"hjb_app_xbb\",\"actId\":\"1\",\"longitude\":\"120.22057268768549\",\"latitude\":\"30.17862595617771\"}"
  };
  var _0x5ea933 = "data=" + encodeURIComponent(JSON.stringify(_0x5f17d6));
  const _0x3f65ea = getToken(_0x44fa34),
    _0x59ecd8 = _0x3f65ea.split("_")[0];
  const _0x3e43d = await sign(_0x59ecd8 + "&" + _0x9900e7 + "&" + _0x4ae8f4 + "&" + JSON.stringify(_0x5f17d6), kami);
  const _0x5f2fe9 = {
    url: "https://mtop.ele.me/h5/mtop.alibaba.o2o.alsc.union.coupon.track/1.0/?jsv=2.6.1&appKey=12574478&&ttid=1601274958480%40eleme_android_10.14.3&t=" + _0x9900e7 + "&sign=" + _0x3e43d + "&api=mtop.alibaba.o2o.alsc.union.coupon.track",
    method: "POST",
    headers: _0x51fd6d,
    body: _0x5ea933
  };
  return tryCatchPromise(_0x3646fc => {
    request(_0x5f2fe9, async (_0x540129, _0x40bcb1, _0x52637b) => {
      if (!_0x540129 && _0x40bcb1.statusCode == 200) {
        try {
          const _0x6c9838 = JSON.parse(_0x52637b);
          _0x3646fc(_0x6c9838);
        } catch (_0x53998e) {
          console.log(_0x53998e);
          _0x3646fc(null);
        }
      } else {
        _0x3646fc(null);
      }
    });
  });
}
function getRandom(_0xf39232, _0x3b47cc) {
  var _0x378d8b = Math.floor(Math.random() * (_0x3b47cc - _0xf39232 + 1) + _0xf39232);
  return _0x378d8b;
}
async function start() {
  const _0x5828a4 = process.env.ELE_FANLI_TIME;
  await validateCarmeWithType(kami, 1);
  const _0x37acb9 = process.env.ownerId;
  if (!_0x37acb9) {
    console.log("请先配置环境变量ownerId！！");
    process.exit(0);
  }
  for (let _0x1208f8 = 0; _0x1208f8 < CookieEles.length; _0x1208f8++) {
    let _0x164c60 = CookieEles[_0x1208f8];
    _0x164c60 = await checkCk(_0x164c60, _0x1208f8);
    if (!_0x164c60) {
      continue;
    }
    let _0x43401a = await getUserInfo(_0x164c60);
    if (!_0x43401a.username) {
      console.log("第", _0x1208f8 + 1, "账号失效！请重新登录！！！😭");
      continue;
    }
    const _0x52ce8f = _0x43401a.user_id;
    await checkCarmeCount(kami, _0x52ce8f, GAME_TYEP);
    console.log("******开始【饿了么账号", _0x1208f8 + 1, "】", _0x43401a.username, "*********");
    res = await fridensHelper(_0x164c60, _0x37acb9);
    if (res.data.code == 0) {
      if (res.data.message == "SUCCESS") {
        amount = res.data.data.couponAmount / 100;
        couponCondition = res.data.data.couponCondition / 100;
        console.log("第", _0x1208f8 + 1, "账号,邀请成功", "被邀请人领取的红包为:满" + couponCondition + "减" + amount + "元");
      }
    } else {
      console.log(res.data.message || "邀请失败");
    }
    if (_0x5828a4 && _0x5828a4.indexOf("-") != -1) {
      console.log("防止黑号延时" + _0x5828a4 + "秒");
      const _0x2c394a = _0x5828a4.split("-");
      await wait(getRandom(_0x2c394a[0], _0x2c394a[1]));
    } else {
      console.log("防止黑号延时10-30秒");
      await wait(getRandom(10, 30));
    }
  }
  process.exit(0);
}
start();