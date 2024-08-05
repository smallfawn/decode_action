//Mon Aug 05 2024 02:18:02 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const bdy_0x100647 = require("got");
let bdy_0x4e2aa6,
  bdy_0x5ee931,
  bdy_0x387b8f = true,
  bdy_0x3444e1;
try {
  bdy_0x4e2aa6 = require("https-proxy-agent").HttpsProxyAgent;
} catch (bdy_0x2b58c9) {
  console.log("未安装https-proxy-agent依赖，无法启用代理");
  process.exit();
}
const bdy_0x12ff7f = process.env.DY_PROXY_RENUM ? process.env.DY_PROXY_RENUM : "3",
  bdy_0x432ab3 = process.env.DY_PROXY_REDELAY ? process.env.DY_PROXY_REDELAY : "1",
  bdy_0x350213 = process.env.DY_PROXY ? process.env.DY_PROXY : "",
  bdy_0x4ecc12 = process.env.DY_SOCKS,
  bdy_0x3b2069 = process.env.PERMIT_API ? (process.env.PERMIT_API + "&test").split("&") : "",
  bdy_0x4243eb = true;
let bdy_0x34dadf = 1,
  bdy_0x59a205 = [],
  bdy_0x3fef44 = [];
if (bdy_0x350213) {
  bdy_0x350213.includes("@") ? bdy_0x59a205 = bdy_0x350213.split("@") : bdy_0x59a205.push(bdy_0x350213);
  for (let bdy_0x542810 of bdy_0x59a205) {
    !bdy_0x3425af(bdy_0x542810) && bdy_0x3fef44.push(bdy_0x542810);
  }
  bdy_0x59a205 = bdy_0x59a205.filter(_0x55b60b => !bdy_0x3fef44.includes(_0x55b60b));
}
if (bdy_0x4ecc12) {
  try {
    bdy_0x5ee931 = require("socks-proxy-agent");
  } catch (bdy_0x21c537) {
    console.log(bdy_0x21c537);
  }
  console.log("代理模式为SOCKS5\n");
}
bdy_0x59a205.length == 0 && (console.log("\n代理API地址不正确，请检查❗ ❗ ❗\n"), bdy_0x387b8f = false);
if (bdy_0x3b2069 == "") {
  console.log("\n---------------已配置" + bdy_0x59a205.length + "个API接口（非白名单）代理已开启---------------\n");
} else {
  bdy_0x3b2069 && bdy_0x3b2069.filter(_0x40e6ae => process.mainModule.filename.includes(_0x40e6ae)).length != 0 ? console.log("\n---------------已配置" + bdy_0x59a205.length + "个API接口（白名单）代理已开启---------------\n") : bdy_0x387b8f = false;
}
async function bdy_0x26e1da(_0x156803) {
  const _0x21da17 = {
    lookup: 10000,
    connect: 10000,
    secureConnect: 10000,
    socket: 10000,
    send: 10000,
    response: 10000,
    request: 30000
  };
  const _0x187427 = {
    timeout: _0x21da17
  };
  const _0x334658 = await bdy_0x100647.get(_0x156803, _0x187427).catch(_0x47d092 => {
    console.log(_0x47d092);
  });
  return _0x334658.body.replace("\n", "").replace(/^.*:\/\//, "");
}
async function bdy_0x25d9e3(_0x24d508) {
  return new Promise(_0x16a925 => {
    setTimeout(_0x16a925, _0x24d508);
  });
}
function bdy_0x3425af(_0x8ad886) {
  var _0x35c780 = new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\u4E00-\\u9FA5\\d%_.,~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
  return _0x35c780.test(_0x8ad886);
}
function bdy_0x3c0b0d(_0x59e60b, _0x45dc6b) {
  const _0x25848e = _0x59e60b.slice().sort(() => Math.random() - 0.5);
  return _0x25848e.slice(0, _0x45dc6b);
}
async function bdy_0x105341() {
  if (!bdy_0x387b8f) {
    return;
  }
  let _0x215fb7 = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/,
    _0x4aacc4,
    _0x2efd36 = bdy_0x59a205[Math.floor(Math.random() * bdy_0x59a205.length)];
  for (let _0xc52f12 of Array(parseInt(bdy_0x12ff7f))) {
    _0x4aacc4 = await bdy_0x26e1da(_0x2efd36);
    if (_0x215fb7.test(_0x4aacc4) !== false) {
      break;
    }
    console.log(_0x4aacc4);
    await bdy_0x25d9e3(parseInt(bdy_0x432ab3) * 1000);
    _0x4aacc4 = undefined;
    _0x2efd36 = bdy_0x59a205[Math.floor(Math.random() * bdy_0x59a205.length)];
  }
  if (!_0x4aacc4) {
    console.log("\n连续三次获取IP失败，请检查API是否正常❗ ❗ ❗\n");
  }
  bdy_0x3444e1 = _0x4aacc4 ? new bdy_0x4e2aa6("http://" + _0x4aacc4) : undefined;
  bdy_0x3444e1 ? console.log("使用代理IP：" + _0x4aacc4) : "";
}
function bdy_0x53edf5(_0x503e41, _0x494aed = false) {
  this.failnum = 0;
  this.failed = false;
  return ddd = async (_0x2f992c, _0x5bbcb5) => {
    bdy_0x350213 && bdy_0x387b8f && (this.failed || _0x494aed || bdy_0x34dadf == 1 && bdy_0x4243eb) && (await bdy_0x105341());
    const _0x9cb80a = {
      https: bdy_0x3444e1,
      http: bdy_0x3444e1
    };
    _0x2f992c.agent = _0x9cb80a;
    const _0x2c9c1d = {
      request: 30000
    };
    _0x2f992c.timeout = _0x2c9c1d;
    _0x503e41(_0x2f992c, async (_0x1b6158, _0x5e81dd, _0x15974a) => {
      try {
        if (_0x1b6158) {
          if (this.failnum < 1) {
            this.failed = true;
            this.failnum++;
            await ddd(_0x2f992c, _0x5bbcb5);
          } else {
            this.failed = true;
            this.failnum = 0;
            _0x5bbcb5(_0x1b6158, _0x5e81dd, _0x15974a);
          }
        } else {
          bdy_0x34dadf++;
          this.failed = false;
          this.failnum = 0;
          _0x5bbcb5(_0x1b6158, _0x5e81dd, _0x15974a);
        }
      } catch (_0x1eaf73) {
        console.log(_0x1eaf73);
      }
    });
  };
}
const bdy_0x3f0332 = {
  intoRequest: bdy_0x53edf5,
  swip: bdy_0x105341
};
module.exports = bdy_0x3f0332;