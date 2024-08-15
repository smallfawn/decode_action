//Thu Aug 15 2024 07:21:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "巨推百惠";
VALY = ["jtbhapp"];
LOGS = 0;
CK = "";
var dldz = process.env.jtbhdldz,
  userList = [];
usid = 0;
const CryptoJS = require("crypto-js");
class Bar {
  constructor(_0x137f89) {
    this.token = _0x137f89.split("#")[0];
    this.name = ++usid;
    this.headers = {
      token: this.token,
      "user-agent": "Mozilla/5.0 (Linux; Android 13; 23013RK75C Build/TKQ1.220905.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.196 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.285713)",
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": "349",
      Host: "api.hls178.cn",
      Connection: "Keep-Alive"
    };
  }
  async hqdl() {
    let _0x82a4b7 = await task("get", dldz, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x82a4b7.split("\n")[0];
    console.log("账号[" + this.name + "]：获取代理IP成功：" + this.dlip);
  }
  async start() {
    dldz == undefined ? (await this.sym(), await this.userinfo()) : (await this.hqdl(), await this.sym(), await this.userinfo());
  }
  async sym() {
    let _0x5df9c8 = await this.task("get", "http://api.hls178.cn/advertises", this.headers);
    if (_0x5df9c8.code == 0) {
      for (let _0xd8a465 = 0; _0xd8a465 < _0x5df9c8.data.ads.length; _0xd8a465++) {
        if (_0x5df9c8.data.ads[_0xd8a465].goldNumber > 0) {
          if (_0x5df9c8.data.ads[_0xd8a465].countdown > 0) {
            console.log("账号[" + this.name + "]：当前任务需要等待" + _0x5df9c8.data.ads[_0xd8a465].countdown + "秒领取");
          } else {
            if (_0x5df9c8.data.ads[_0xd8a465].user) {
              if (_0x5df9c8.data.ads[_0xd8a465].user.status == 10) {
                let _0x5a0f80 = _0x5df9c8.data.ads[_0xd8a465].times - _0x5df9c8.data.ads[_0xd8a465].user.currentTimes;
                if (_0x5a0f80 > 0) {
                  for (let _0x3eb8b8 = 0; _0x3eb8b8 < _0x5a0f80; _0x3eb8b8++) {
                    await this.sava(_0x5df9c8.data.ads[_0xd8a465].id);
                    await wait(2);
                  }
                  await wait(3);
                }
              } else {
                this.rwtype = 1;
                await this.ksrw(_0x5df9c8.data.ads[_0xd8a465].id);
                await this.sym2(_0x5df9c8.data.ads[_0xd8a465].id);
              }
            } else {
              this.rwtype = 1;
              await this.ksrw(_0x5df9c8.data.ads[_0xd8a465].id);
              await this.sym2(_0x5df9c8.data.ads[_0xd8a465].id);
            }
          }
        }
      }
    } else {
      console.log("账号[" + this.name + "]：" + (_0x5df9c8.desc || _0x5df9c8.message || _0x5df9c8.msg || _0x5df9c8.error_msg));
    }
  }
  async sava(_0x26eaa3) {
    let _0x3bba2e = timestamp(13),
      _0x5d3493 = CryptoJS.MD5("id=" + _0x26eaa3 + "&time=" + _0x3bba2e + "&key=!@#ecommerce%^").toString(),
      _0x12e11e = await this.task("post", "http://api.hls178.cn/advertise/process", this.headers, "id=" + _0x26eaa3 + "&time=" + _0x3bba2e + "&sign=" + _0x5d3493);
    _0x12e11e.code == 0 ? (console.log("账号[" + this.name + "]：广告观看成功"), await this.sym1(_0x26eaa3)) : console.log("账号[" + this.name + "]：" + (_0x12e11e.desc || _0x12e11e.message || _0x12e11e.msg || _0x12e11e.error_msg));
  }
  async sym1(_0x5dd2ff) {
    let _0x38d014 = await this.task("get", "http://api.hls178.cn/advertise?id=" + _0x5dd2ff, this.headers);
    _0x38d014.code == 0 ? _0x38d014.data.times == _0x38d014.data.user.currentTimes && (await this.rwwc(_0x38d014.data.user.code), await this.lqjl(_0x5dd2ff)) : console.log("账号[" + this.name + "]：" + (_0x38d014.desc || _0x38d014.message || _0x38d014.msg || _0x38d014.error_msg));
  }
  async sym2(_0x2f1b9e) {
    let _0x5ec925 = await this.task("get", "http://api.hls178.cn/advertise?id=" + _0x2f1b9e, this.headers);
    if (_0x5ec925.code == 0) {
      if (_0x5ec925.data.user.status == 10) {
        let _0xa60fbd = _0x5ec925.data.times - _0x5ec925.data.user.currentTimes;
        if (_0xa60fbd > 0) {
          for (let _0x2cbdf3 = 0; _0x2cbdf3 < _0xa60fbd; _0x2cbdf3++) {
            await this.sava(_0x5ec925.data.id);
            await wait(2);
          }
          await wait(3);
        }
      }
    } else {
      console.log("账号[" + this.name + "]：" + (_0x5ec925.desc || _0x5ec925.message || _0x5ec925.msg || _0x5ec925.error_msg));
    }
  }
  async rwwc(_0x18e442) {
    let _0x4ad14b = timestamp(13),
      _0x4690e2 = CryptoJS.MD5("awardType=1&code=" + _0x18e442 + "&time=" + _0x4ad14b + "&key=!@#ecommerce%^").toString(),
      _0x55fd11 = await this.task("post", "http://api.hls178.cn/advertise/finish", this.headers, "awardType=1&code=" + _0x18e442 + "&time=" + _0x4ad14b + "&sign=" + _0x4690e2);
    _0x55fd11.code == 0 ? console.log("账号[" + this.name + "]：任务完成") : console.log("账号[" + this.name + "]：" + (_0x55fd11.desc || _0x55fd11.message || _0x55fd11.msg || _0x55fd11.error_msg));
  }
  async userinfo() {
    let _0x2af696 = await this.task("get", "http://api.hls178.cn/user/info", this.headers);
    _0x2af696.code == 0 ? console.log("账号[" + this.name + "]：当前拥有" + _0x2af696.data.money + "金币") : console.log("账号[" + this.name + "]：" + (_0x2af696.desc || _0x2af696.message || _0x2af696.msg || _0x2af696.error_msg));
  }
  async lqjl(_0x2464e8) {
    let _0x11a690 = await this.task("post", "http://api.hls178.cn/advertise/award", this.headers, "id=" + _0x2464e8);
    _0x11a690.code == 0 ? console.log("账号[" + this.name + "]：任务奖励领取成功") : console.log("账号[" + this.name + "]：" + (_0x11a690.desc || _0x11a690.message || _0x11a690.msg || _0x11a690.error_msg));
  }
  async ksrw(_0x2ba221) {
    let _0x4472f2 = await this.task("post", "http://api.hls178.cn/advertise/accept", this.headers, "awardType=" + this.rwtype + "&id=" + _0x2ba221);
    _0x4472f2.code == 0 ? console.log("账号[" + this.name + "]：任务领取成功") : console.log("账号[" + this.name + "]：" + (_0x4472f2.desc || _0x4472f2.message || _0x4472f2.msg || _0x4472f2.error_msg));
  }
  async task(_0x53d881, _0x1d4edb, _0x2f5637, _0x33afce) {
    _0x53d881 == "delete" ? _0x53d881 = _0x53d881.toUpperCase() : _0x53d881 = _0x53d881;
    const _0x16c1f7 = require("request");
    _0x53d881 == "post" && (delete _0x2f5637["Content-Type"], delete _0x2f5637["content-type"], delete _0x2f5637["Content-Length"], delete _0x2f5637["content-length"], safeGet(_0x33afce) ? _0x2f5637["Content-Type"] = "application/json; charset=utf-8" : _0x2f5637["Content-Type"] = "application/x-www-form-urlencoded", _0x33afce && (_0x2f5637["Content-Length"] = lengthInUtf8Bytes(_0x33afce)));
    _0x53d881 == "get" && (delete _0x2f5637["Content-Type"], delete _0x2f5637["content-length"], delete _0x2f5637["content-type"], delete _0x2f5637["Content-Length"]);
    _0x2f5637.Host = _0x1d4edb.replace("//", "/").split("/")[1];
    if (_0x53d881.indexOf("T") < 0) {
      var _0x3afaf8 = {
        url: _0x1d4edb,
        headers: _0x2f5637,
        body: _0x33afce,
        followRedirect: false,
        timeout: 20000000
      };
    } else {
      var _0x3afaf8 = {
        url: _0x1d4edb,
        headers: _0x2f5637,
        form: JSON.parse(_0x33afce),
        followRedirect: false,
        timeout: 20000000
      };
    }
    dldz !== undefined && (_0x3afaf8.proxy = "http://" + this.dlip);
    return new Promise(async _0x3e8152 => {
      _0x16c1f7[_0x53d881.toLowerCase()](_0x3afaf8, async (_0x47fcc8, _0xedaca7, _0x49d6da) => {
        try {
          LOGS == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x3afaf8)), console.log("==================返回=================="), console.log(_0x47fcc8), console.log(JSON.stringify(_0x49d6da)));
        } catch (_0x2bd6e2) {} finally {
          !_0x47fcc8 ? _0xedaca7.statusCode == 302 ? _0x49d6da = _0xedaca7 : safeGet(_0x49d6da) ? _0x49d6da = JSON.parse(_0x49d6da) : _0x49d6da = _0x49d6da : dldz == undefined ? _0x49d6da = await this.task(_0x53d881, _0x1d4edb, _0x2f5637, _0x33afce) : (await this.hqdl(), _0x49d6da = await this.task(_0x53d881, _0x1d4edb, _0x2f5637, _0x33afce));
          return _0x3e8152(_0x49d6da);
        }
      });
    });
  }
}
(async () => {
  const _0x46e170 = Date.now();
  console.log(NAME);
  console.log("北京时间：" + formatDate());
  dldz === undefined ? console.log("当前使用本地网络运行脚本") : console.log("当前使用代理网络运行脚本");
  checkEnv();
  const _0x58231d = 1;
  await startWithConcurrency(userList, _0x58231d);
  const _0x312677 = Date.now();
  await done(_0x46e170, _0x312677);
})().catch(_0x363f58 => {
  console.log(_0x363f58);
});
async function startWithConcurrency(_0x46f626, _0x418b3e) {
  const _0x1fd994 = [..._0x46f626];
  async function _0x510c91() {
    if (_0x1fd994.length === 0) {
      return;
    }
    const _0x2146a3 = _0x1fd994.shift();
    try {
      await _0x2146a3.start();
    } catch (_0x3022aa) {
      console.log(_0x3022aa);
    }
    _0x1fd994.length > 0 && (await _0x510c91());
  }
  const _0x5b1254 = Array.from({
    length: _0x418b3e
  }, _0x510c91);
  await Promise.all(_0x5b1254);
}
function done(_0x5813af, _0x26c0a0) {
  const _0x5f3d1b = (_0x26c0a0 - _0x5813af) / 1000;
  console.log("\n[任务执行完毕 " + NAME + "] 耗时：" + _0x5f3d1b.toFixed(2) + "秒");
  process.exit(0);
}
function getRandomNumber(_0x537c05, _0x505cca) {
  var _0xa4f1ed = Math.floor(Math.random() * (_0x505cca - _0x537c05 + 1) + _0x537c05),
    _0x30abd1 = Math.random() < 0.5 ? Math.floor(Math.random() * 100) : Math.floor(Math.random() * 101);
  return _0xa4f1ed + "." + _0x30abd1.toString().padStart(2, "0");
}
function timestamp(_0x123bc4) {
  const _0x27c8d9 = new Date().getTime();
  return Math.round(_0x27c8d9 / 10 ** (13 - _0x123bc4)).toString();
}
function randomInt(_0x15a34c, _0x1c5b55) {
  return Math.round(Math.random() * (_0x1c5b55 - _0x15a34c) + _0x15a34c);
}
function task(_0x55a42c, _0x2333c1, _0x13fb58, _0x21ede4) {
  _0x55a42c == "delete" ? _0x55a42c = _0x55a42c.toUpperCase() : _0x55a42c = _0x55a42c;
  const _0x1cf263 = require("request");
  _0x55a42c == "post" && (delete _0x13fb58["Content-Type"], delete _0x13fb58["content-type"], delete _0x13fb58["Content-Length"], delete _0x13fb58["content-length"], safeGet(_0x21ede4) ? _0x13fb58["Content-Type"] = "application/json" : _0x13fb58["Content-Type"] = "application/x-www-form-urlencoded", _0x21ede4 && (_0x13fb58["Content-Length"] = lengthInUtf8Bytes(_0x21ede4)));
  _0x55a42c == "get" && (delete _0x13fb58["Content-Type"], delete _0x13fb58["content-length"], delete _0x13fb58["content-type"], delete _0x13fb58["Content-Length"]);
  _0x13fb58.Host = _0x2333c1.replace("//", "/").split("/")[1];
  if (_0x55a42c.indexOf("T") < 0) {
    var _0x682a25 = {
      url: _0x2333c1,
      headers: _0x13fb58,
      body: _0x21ede4,
      followRedirect: false,
      timeout: 20000
    };
  } else {
    var _0x682a25 = {
      url: _0x2333c1,
      headers: _0x13fb58,
      form: JSON.parse(_0x21ede4),
      followRedirect: false,
      timeout: 20000
    };
  }
  return new Promise(async _0x2bbfd9 => {
    _0x1cf263[_0x55a42c.toLowerCase()](_0x682a25, async (_0x33d130, _0x5d6ff5, _0x239800) => {
      try {
        LOGS == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x682a25)), console.log("==================返回=================="), console.log(_0x33d130), console.log(JSON.stringify(_0x5d6ff5)));
      } catch (_0x4a3e90) {} finally {
        !_0x33d130 ? safeGet(_0x239800) ? _0x239800 = JSON.parse(_0x239800) : _0x239800 = _0x239800 : (await wait(60), _0x239800 = await this.task(_0x55a42c, _0x2333c1, _0x13fb58, _0x21ede4));
        return _0x2bbfd9(_0x239800);
      }
    });
  });
}
function formatDate() {
  let _0x2f98d3 = new Date();
  const _0x4cd859 = _0x2f98d3.getFullYear(),
    _0x423532 = padZero(_0x2f98d3.getMonth() + 1),
    _0x4f431f = padZero(_0x2f98d3.getDate()),
    _0x3e0650 = padZero(_0x2f98d3.getHours()),
    _0x1dca7f = padZero(_0x2f98d3.getMinutes()),
    _0xa2400a = padZero(_0x2f98d3.getSeconds());
  return _0x4cd859 + "-" + _0x423532 + "-" + _0x4f431f + " " + _0x3e0650 + ":" + _0x1dca7f + ":" + _0xa2400a;
}
function padZero(_0x2a05bd) {
  return _0x2a05bd.toString().padStart(2, "0");
}
function safeGet(_0x264de4) {
  try {
    if (typeof JSON.parse(_0x264de4) == "object") {
      return true;
    }
  } catch (_0x31025a) {
    return false;
  }
}
function wait(_0x255ef0) {
  return new Promise(function (_0x4eff2d) {
    setTimeout(_0x4eff2d, _0x255ef0 * 1000);
  });
}
function lengthInUtf8Bytes(_0x242ed0) {
  let _0x2db7dd = encodeURIComponent(_0x242ed0).match(/%[89ABab]/g);
  return _0x242ed0.length + (_0x2db7dd ? _0x2db7dd.length : 0);
}
async function checkEnv() {
  let _0x22ce9e = process.env[VALY] || CK,
    _0xa60f27 = 0;
  if (_0x22ce9e) {
    for (let _0xfc3981 of _0x22ce9e.split("\n").filter(_0x6de3b7 => !!_0x6de3b7)) {
      userList.push(new Bar(_0xfc3981));
    }
    _0xa60f27 = userList.length;
  } else {
    console.log("【" + NAME + "】：未填写变量: " + VALY);
    process.exit();
  }
  console.log("共找到" + _0xa60f27 + "个账号");
  return userList;
}