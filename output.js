//Mon Jul 08 2024 05:03:44 GMT+0000 (Coordinated Universal Time)
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
const GAME_TYEP = 13;
const request = require("request");
const moment = require("moment");
const md5 = require("md5");
const kami = process.env.ELE_CARME;
async function gameRequest(_0x108364, _0x2cb520) {
  const _0x14ca42 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    cookie: _0x108364,
    "x-miniapp-id-taobao": "3000000084905483",
    "x-miniapp-version": "0.0.116",
    "x-mini-appkey": "34304642",
    "x-req-appkey": "34304642",
    appid: "3000000084905483"
  };
  const _0xeda03f = new Date().getTime();
  const _0x45614e = 34190632;
  var _0x25963c = "data=" + encodeURIComponent(JSON.stringify(_0x2cb520));
  const _0x1fece0 = getToken(_0x108364),
    _0x22503b = _0x1fece0.split("_")[0];
  const _0x2a5ef3 = await sign(_0x22503b + "&" + _0xeda03f + "&" + _0x45614e + "&" + JSON.stringify(_0x2cb520), kami);
  const _0x92c123 = {
    url: "https://shopping.ele.me/h5/mtop.miniapp.cloud.application.request/1.0/?jsv=2.6.1&appKey=34190632&t=" + _0xeda03f + "&sign=" + _0x2a5ef3 + "&api=mtop.miniapp.cloud.application.request&v=1.0&type=originaljson&ttid=1608030065155%40eleme_android_11.0.38",
    method: "POST",
    headers: _0x14ca42,
    body: _0x25963c
  };
  return tryCatchPromise(_0x4d4d6d => {
    request(_0x92c123, async (_0x4e0c22, _0x3dcb93, _0x11d6d9) => {
      if (!_0x4e0c22 && _0x3dcb93.statusCode === 200) {
        try {
          const _0x260da4 = JSON.parse(_0x11d6d9);
          _0x4d4d6d(_0x260da4.data.data);
        } catch (_0x190c1c) {
          console.log(_0x11d6d9);
          _0x4d4d6d(null);
        }
      } else {
        _0x4d4d6d(null);
      }
    });
  });
}
async function getOpenId(_0x517db7) {
  const _0xbb8f61 = new Date().getTime();
  const _0x510cf2 = {
    body: "{\"xftest\":\"hhh\",\"id\":\"1234\"}",
    headers: "{\"Content-Type\":\"application/json;charset=UTF-8\"}",
    instance: "INNER",
    method: "POST",
    options: "{\"cloudAppId\":\"45504\",\"timeout\":200,\"env\":\"online\",\"options\":{\"path\":\"pages/index/index\"}}",
    path: "/getopenid",
    protocols: "{\"Content-Type\":\"application/json\",\"mc-timestamp\":\"" + _0xbb8f61 + "\",\"mc-env\":\"online\"}",
    queryString: "{}",
    sdkVersion: "1.5.4"
  };
  return await gameRequest(_0x517db7, _0x510cf2);
}
function addjb(_0x22cd6d, _0x5c6186) {
  const _0x2baad0 = {
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json"
  };
  let _0x1afe03 = 20;
  let _0x1be390 = taobaoRequest({
    method: "alibaba.alsc.growth.interactive.mini.game.integral.grant",
    mini_game_grant_integral_request: {
      amount: _0x1afe03,
      act_id: "20221207144029906162546384",
      biz_scene: "COMPOSE_2048",
      collection_ids: ["20221207144029911927117215"],
      request_id: md5("dcc2920acdae1fdea78cef9c187af558" + _0x1afe03 + moment().format("yyyy-MM-DD hh:mm:ss")).toUpperCase(),
      property_id: "1404",
      open_id: _0x5c6186
    }
  });
  var _0x231acb = encodeURIComponent(_0x1be390.mini_game_grant_integral_request);
  const _0x474154 = _0x1be390.sign;
  const _0x55a70c = {
    url: "https://eco.taobao.com/router/rest?app_key=34315415&format=json&method=alibaba.alsc.growth.interactive.mini.game.integral.grant&mini_game_grant_integral_request=" + _0x231acb + "&sign=" + _0x474154 + "&sign_method=md5&timestamp=" + _0x1be390.timestamp + "&v=2.0",
    method: "GET",
    headers: _0x2baad0
  };
  return tryCatchPromise(_0x344fdb => {
    request(_0x55a70c, async (_0xc6cd8b, _0x39a2d8, _0x315255) => {
      if (!_0xc6cd8b && _0x39a2d8.statusCode == 200) {
        const _0x23052d = JSON.parse(_0x315255);
        if (_0x23052d.alibaba_alsc_growth_interactive_mini_game_integral_grant_response.data) {
          console.log("玩 2048 获得", _0x1afe03, "乐园币", "当前乐园币：" + _0x23052d.alibaba_alsc_growth_interactive_mini_game_integral_grant_response.data.account_value);
          _0x344fdb(null);
        } else {
          let _0x1b274d = _0x23052d.alibaba_alsc_growth_interactive_mini_game_integral_grant_response.biz_error_msg;
          _0x344fdb(_0x1b274d);
          console.log(_0x1b274d);
        }
      } else {
        _0x344fdb(_0xc6cd8b);
      }
    });
  });
}
function sortASCII(_0x4a5215, _0x510c13) {
  var _0x120e2b = [];
  Object.keys(_0x4a5215).forEach(function (_0x2f6e52) {
    return _0x120e2b.push(_0x2f6e52);
  });
  var _0x28d2fa = _0x510c13 ? _0x120e2b.sort() : _0x120e2b.sort().reverse(),
    _0x741edb = {};
  for (var _0x457db9 in _0x28d2fa) _0x741edb[_0x28d2fa[_0x457db9]] = _0x4a5215[_0x28d2fa[_0x457db9]];
  return _0x741edb;
}
function taobaoRequest(_0x178a27) {
  var _0x487159 = "dcc2920acdae1fdea78cef9c187af558",
    _0x5bf7ee = {
      app_key: 34315415,
      timestamp: moment().format("yyyy-MM-DD hh:mm:ss"),
      v: "2.0",
      sign_method: "md5",
      format: "json"
    };
  for (var _0x41f90f in _0x178a27) Object.prototype.hasOwnProperty.call(_0x178a27, _0x41f90f) && ("object" == typeof _0x178a27[_0x41f90f] ? _0x5bf7ee[_0x41f90f] = JSON.stringify(_0x178a27[_0x41f90f]) : _0x5bf7ee[_0x41f90f] = _0x178a27[_0x41f90f]);
  _0x5bf7ee = sortASCII(_0x5bf7ee, !0);
  var _0x3753c2 = "";
  for (var _0x41f90f in _0x5bf7ee) Object.prototype.hasOwnProperty.call(_0x5bf7ee, _0x41f90f) && (_0x3753c2 += _0x41f90f, "object" == typeof _0x5bf7ee[_0x41f90f] ? _0x3753c2 += JSON.stringify(_0x5bf7ee[_0x41f90f]) : _0x3753c2 += _0x5bf7ee[_0x41f90f]);
  var _0x57d8ff = md5(_0x487159 + _0x3753c2 + _0x487159);
  _0x5bf7ee.sign = _0x57d8ff.toUpperCase();
  return _0x5bf7ee;
}
async function start() {
  await validateCarmeWithType(kami, 1);
  const _0x270d53 = getCookies();
  for (let _0x318f4b = 0; _0x318f4b < _0x270d53.length; _0x318f4b++) {
    const _0x508a28 = _0x270d53[_0x318f4b];
    if (!_0x508a28) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        let _0x2d2586 = await checkCk(_0x508a28, _0x318f4b);
        if (!_0x2d2586) {
          continue;
        }
        let _0x687c66 = await getUserInfo(_0x2d2586);
        if (!_0x687c66.username) {
          console.log("第", _0x318f4b + 1, "账号失效！请重新登录！！！😭");
          continue;
        }
        const _0xf3fd69 = _0x687c66.user_id;
        await checkCarmeCount(kami, _0xf3fd69, GAME_TYEP);
        console.log("******开始【饿了么账号", _0x318f4b + 1, "】", _0x687c66.username, "*********");
        let _0x17b993 = await getOpenId(_0x2d2586);
        if (_0x17b993) {
          let _0x5cf174 = await addjb(_0x2d2586, _0x17b993);
          while (!_0x5cf174) {
            console.log("延时 2 秒");
            await wait(2);
            _0x5cf174 = await addjb(_0x2d2586, _0x17b993);
          }
          if (_0x318f4b !== _0x270d53.length - 1) {
            console.log("延时 5 秒，继续下一个账号");
            await wait(5);
          }
        } else {
          console.log("获取 openId 出错");
        }
      } catch (_0x431bb8) {
        console.log(_0x431bb8);
      }
    }
  }
  process.exit(0);
}
start();