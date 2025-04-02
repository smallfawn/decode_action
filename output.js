//Wed Apr 02 2025 17:16:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const Huaji_0x2774c1 = require("js-md5");
const Huaji_0x136060 = require("crypto-js");
const Huaji_0x2e42db = require("axios");
const Huaji_0x412565 = require("dayjs");
const Huaji_0x545404 = require("dayjs/plugin/timezone");
const Huaji_0x24ad81 = require("dayjs/plugin/utc");
Huaji_0x412565.extend(Huaji_0x24ad81);
Huaji_0x412565.extend(Huaji_0x545404);
const Huaji_0x249db8 = "bfc5e947cd84c7ced1ee48d28fb3e90f";
const Huaji_0x3ea809 = process.env.yuanshen_bnhg.split("@");
console.log("共" + Huaji_0x3ea809.length + "个账号");
function Huaji_0x37332f(_0x4b4b65 = 16, _0x14813d = 36) {
  const _0x181bd6 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  const _0x295ca7 = [];
  let _0x4713fe = 0;
  if (_0x4b4b65) {
    {
      for (_0x4713fe = 0; _0x4713fe < _0x4b4b65; _0x4713fe++) {
        {
          _0x295ca7[_0x4713fe] = _0x181bd6[0 | Math.random() * _0x14813d];
        }
      }
    }
  } else {
    {
      let _0x540406;
      for (_0x295ca7[8] = _0x295ca7[13] = _0x295ca7[18] = _0x295ca7[23] = "-", _0x295ca7[14] = "4", _0x4713fe = 0; _0x4713fe < 36; _0x4713fe++) {
        {
          if (!_0x295ca7[_0x4713fe]) {
            {
              _0x540406 = 0 | 16 * Math.random();
              _0x295ca7[_0x4713fe] = _0x181bd6[19 === _0x4713fe ? 3 & _0x540406 | 8 : _0x540406];
            }
          }
        }
      }
    }
  }
  return _0x295ca7.join("");
}
function Huaji_0x445765(_0x2f7f2f) {
  return Huaji_0x2774c1(_0x2f7f2f).toString().toLowerCase();
}
function Huaji_0x345b61(_0x28a6be, _0x32d686) {
  const _0x54b390 = {
    app_key: "KlZ4LqOF",
    app_secret: "HoBJTYXdwn"
  };
  const _0x3aaf0a = {
    t: Math.floor(new Date().getTime() / 1000),
    n: Huaji_0x37332f(),
    ..._0x54b390
  };
  const _0x419328 = Object.values(_0x3aaf0a).join("");
  const _0xa29bdb = Huaji_0x445765(Huaji_0x445765(_0x419328)).split("").reverse().join("");
  const _0x40281c = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.50(0x18003232) NetType/WIFI Language/zh_CN",
    "Accept-Encoding": "gzip,compress,br,deflate",
    "Content-Type": "application/json",
    uuid: _0x28a6be.uuid,
    platform_version_code: "iOS 18.0",
    version: "6.1.5",
    authorization: _0x28a6be.authorization,
    tenancy_id: "banu",
    app_key: "KlZ4LqOF",
    source: "",
    platform_version_name: "iPhone 14 Pro Max<iPhone15,3>",
    platform_version_weapp: "8.0.50",
    t: _0x3aaf0a.t,
    n: _0x3aaf0a.n,
    platform_version_sdk: "3.5.1",
    sign: _0xa29bdb,
    Referer: "https://servicewechat.com/wx71373698c47f9a9f/441/page-frame.html"
  };
  if (_0x32d686) {
    {
      const _0xa2075e = new URLSearchParams({
        ..._0x54b390,
        enc_data: _0x32d686
      }).toString();
      const _0x3c7695 = Huaji_0x445765(Huaji_0x445765(_0xa2075e)).split("").reverse().join("");
      _0x40281c.code = _0x3c7695;
    }
  }
  return _0x40281c;
}
function Huaji_0xd89c2b(_0x3c73c4) {
  const _0x3218f0 = Huaji_0x136060.lib.WordArray.random(16).toString();
  const _0x30b65e = JSON.stringify(_0x3c73c4);
  const _0x429ee1 = Huaji_0x136060.AES.encrypt(_0x30b65e, Huaji_0x136060.enc.Utf8.parse(Huaji_0x249db8), {
    iv: Huaji_0x136060.enc.Utf8.parse(_0x3218f0),
    mode: Huaji_0x136060.mode.CBC
  }).toString();
  return Huaji_0x136060.enc.Base64.stringify(Huaji_0x136060.enc.Utf8.parse(JSON.stringify({
    iv: _0x3218f0,
    encrypted_data: _0x429ee1
  })));
}
async function Huaji_0x117888(_0x54acb9) {
  const _0x14e6a7 = {};
  const _0x795860 = {
    member_id: _0x54acb9
  };
  try {
    {
      _0x14e6a7.uuid = Huaji_0x37332f();
      const _0x3a1bdf = await Huaji_0x2e42db.get("https://cloud.banu.cn/api/sign-in/days", {
        params: _0x795860,
        headers: Huaji_0x345b61(_0x14e6a7)
      });
      let _0xde464e = "";
      if (_0x3a1bdf.data.data.is_sign_in) {
        {
          _0xde464e = "签到：重复签到";
        }
      } else {
        {
          const _0x5ebb17 = Huaji_0xd89c2b(_0x795860);
          const _0x2ea4a8 = await Huaji_0x2e42db.post("https://cloud.banu.cn/api/sign-in", {
            enc_data: _0x5ebb17
          }, {
            headers: Huaji_0x345b61(_0x14e6a7, _0x5ebb17)
          });
          _0xde464e = "签到：" + _0x2ea4a8.data.message;
        }
      }
      const _0x5b8bca = await Huaji_0x2e42db.get("https://cloud.banu.cn/api/member/statistic", {
        params: _0x795860,
        headers: Huaji_0x345b61(_0x14e6a7)
      });
      const _0x3b7f34 = "\nMember_id:" + _0x54acb9 + "\n用户名:" + _0x5b8bca.data.data.name + "\n总积分:" + _0x5b8bca.data.data.points;
      console.log(_0x3b7f34 + " | " + _0xde464e);
    }
  } catch (_0x14af7a) {
    {
      console.log("签到失败：" + _0x14af7a + " | 签到时间：" + Huaji_0x412565().tz("Asia/Shanghai").format("YYYY-MM-DD HH:mm:ss"));
    }
  }
}
async function Huaji_0x15b17b() {
  for (let _0x1baafc = 0; _0x1baafc < Huaji_0x3ea809.length; _0x1baafc++) {
    await Huaji_0x117888(Huaji_0x3ea809[_0x1baafc]);
    console.log("==========================================");
    await new Promise(_0x4d13bd => setTimeout(_0x4d13bd, Math.random() * 100000));
  }
}
Huaji_0x15b17b();