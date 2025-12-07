//Sun Dec 07 2025 17:37:00 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
console.log("\n◇◇◇◇◇◇◆◆◇◇◇◇◇◇◇◇◇◇◇◆◆◇◇◇◇◇◆◆◇◇\n◇◇◇◇◇◇◇◆◆◇◇◇◇◇◇◇◇◇◇◆◆◇◆◇◇◇◆◆◇◇\n◇◇◇◇◇◇◆◆◆◆◆◆◆◇◇◇◇◇◇◇◆◇◆◆◇◇◆◇◇◇\n◇◇◆◆◆◆◆◆◆◆◆◆◆◇◇◇◇◇◇◇◆◇◇◆◇◇◆◇◇◇\n◇◇◇◇◇◆◇◇◇◇◇◇◇◇◇◇◇◇◇◆◆◇◇◆◇◇◆◇◇◇\n◇◇◇◇◇◆◇◇◆◆◆◇◇◇◇◇◇◇◇◆◆◇◇◆◇◇◆◇◇◇\n◇◇◇◇◆◆◆◆◆◆◆◆◇◇◇◇◇◇◇◆◆◇◇◆◇◇◆◇◇◇\n◇◇◇◇◇◆◇◆◆◇◆◆◇◇◇◇◇◇◇◆◆◇◇◆◇◇◆◇◇◇\n◇◇◇◆◇◆◇◆◆◇◇◆◆◇◇◇◇◇◇◆◆◇◇◆◇◇◆◇◇◇\n◇◇◆◆◇◆◆◇◇◆◆◇◆◇◇◇◇◇◆◆◇◇◆◆◇◇◆◇◇◇\n◇◇◆◆◇◆◆◆◆◇◆◇◇◇◇◇◇◇◆◆◇◇◇◆◇◇◆◇◇◇\n◇◇◆◇◇◇◇◆◆◆◆◆◇◇◇◇◇◆◆◇◇◇◇◇◇◇◆◇◇◇\n◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◆◇◇◇◇◇◇◇◇◆◇◇◇\n◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇\n◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇◇\n全国流量卡领取:https://h5.lot-ml.com/ProductEn/Shop/44f3d0aed110f853\n流量卡渠道二:https://hy.yunhaoka.com/#/pages/micro_store/index?agent_id=51c82e30d5697130b967e505d8255dd7\n抓取签到链接的tokenStr填到变量MNLS里，多账号用&或者换行分割\n此脚本为摸鱼大队出品，作者：忘川\n仅限本群内部群员使用，未经允许禁止传播，一经发现后果自负。\n如果你意外获得此脚本可联系忘川，举报传播者可代替他的的位置\n联系忘川 q: 3052221086 *付费进群，介意勿扰");
const https = require("https"),
  http = require("http"),
  {
    URL
  } = require("url"),
  ENV_NAME = "MNLS",
  PUSH_PLUS_TOKEN = process.env.PUSH_PLUS_TOKEN,
  ANDROID_USER_AGENTS = ["Mozilla/5.0 (Linux; Android 12; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36 MicroMessenger/8.0.47.2500(0x28002F51) WeChat/arm64 Weixin Android Tablet NetType/WIFI Language/zh_CN ABI/arm64", "Mozilla/5.0 (Linux; Android 13; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36 MicroMessenger/8.0.47.2500(0x28002F51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64", "Mozilla/5.0 (Linux; Android 11; M2012K11AC) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36 MicroWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36 MicroMessenger/8.0.47.2500(0x28002F51) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64"],
  IOS_USER_AGENTS = ["Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.47(0x18002f29) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.47(0x18002f29) NetType/WIFI Language/zh_CN", "Mozilla/5.0 (iPad; CPU OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.47(0x18002f29) NetType/WIFI Language/zh_CN"],
  CUSTOMER_ID = "1693260",
  CUSTOMER_NAME = "微信用户",
  STORE_ID = "0",
  ORGANIZATION_ID = "0",
  BRAND = "MON",
  FIXED_COOKIE = "JSESSIONID=57A1CF7D586FE08549965519CB08CB8C";
function getRandomUA() {
  return Math.random() > 0.5 ? ANDROID_USER_AGENTS[Math.floor(Math.random() * ANDROID_USER_AGENTS.length)] : IOS_USER_AGENTS[Math.floor(Math.random() * IOS_USER_AGENTS.length)];
}
function parseTokens(_0x2c80fd) {
  const _0x18fcb1 = [];
  if (!_0x2c80fd) return _0x18fcb1;
  let _0x41f7c7;
  if (_0x2c80fd.includes("&")) _0x41f7c7 = _0x2c80fd.split("&");else {
    _0x41f7c7 = _0x2c80fd.split("\n");
  }
  for (const _0x121d7a of _0x41f7c7) {
    {
      const _0x2ca82f = _0x121d7a.trim();
      _0x2ca82f && _0x18fcb1.push(_0x2ca82f);
    }
  }
  return _0x18fcb1;
}
function httpsRequest(_0x3a00ec, _0x2fa108 = null) {
  return new Promise((_0x4ffe6b, _0x1e33b4) => {
    const _0x34a2b5 = https.request(_0x3a00ec, _0x1df987 => {
      let _0x31cb0b = "";
      _0x1df987.on("data", _0x2bd550 => {
        _0x31cb0b += _0x2bd550;
      });
      _0x1df987.on("end", () => {
        try {
          {
            const _0x1fcd67 = JSON.parse(_0x31cb0b);
            _0x4ffe6b({
              "statusCode": _0x1df987.statusCode,
              "data": _0x1fcd67
            });
          }
        } catch (_0xde3303) {
          _0x4ffe6b({
            "statusCode": _0x1df987.statusCode,
            "data": _0x31cb0b
          });
        }
      });
    });
    _0x34a2b5.on("error", _0x49efad => {
      _0x1e33b4(_0x49efad);
    });
    _0x34a2b5.on("timeout", () => {
      _0x34a2b5.destroy();
      _0x1e33b4(new Error("请求超时"));
    });
    _0x2fa108 && _0x34a2b5.write(_0x2fa108);
    _0x34a2b5.end();
  });
}
function httpRequest(_0x309b07, _0xc58478 = null) {
  return new Promise((_0x2ca90e, _0x1303b4) => {
    const _0x24121a = http.request(_0x309b07, _0xfcd11f => {
      {
        let _0x3257da = "";
        _0xfcd11f.on("data", _0x2a14b3 => {
          _0x3257da += _0x2a14b3;
        });
        _0xfcd11f.on("end", () => {
          try {
            const _0x3e1863 = JSON.parse(_0x3257da);
            _0x2ca90e({
              "statusCode": _0xfcd11f.statusCode,
              "data": _0x3e1863
            });
          } catch (_0x597377) {
            _0x2ca90e({
              "statusCode": _0xfcd11f.statusCode,
              "data": _0x3257da
            });
          }
        });
      }
    });
    _0x24121a.on("error", _0x3a1a26 => {
      _0x1303b4(_0x3a1a26);
    });
    _0x24121a.on("timeout", () => {
      _0x24121a.destroy();
      _0x1303b4(new Error("请求超时"));
    });
    _0xc58478 && _0x24121a.write(_0xc58478);
    _0x24121a.end();
  });
}
async function signIn(_0x51506a) {
  const _0x5028c5 = "https://mcs.monalisagroup.com.cn/member/doAction",
    _0x92573f = new URLSearchParams({
      "action": "sign",
      "CustomerID": CUSTOMER_ID,
      "CustomerName": CUSTOMER_NAME,
      "StoreID": STORE_ID,
      "OrganizationID": ORGANIZATION_ID,
      "Brand": BRAND,
      "tokenStr": _0x51506a
    }).toString(),
    _0x1457af = new URL(_0x5028c5),
    _0x4f3ca7 = {
      "hostname": _0x1457af.hostname,
      "port": 443,
      "path": _0x1457af.pathname,
      "method": "POST",
      "headers": {
        "User-Agent": getRandomUA(),
        "xweb_xhr": "1",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://servicewechat.com/wxce6a8f654e81b7a4/459/page-frame.html",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cookie": FIXED_COOKIE,
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": Buffer.byteLength(_0x92573f)
      },
      "timeout": 10000
    };
  try {
    {
      const _0x4c1390 = await httpsRequest(_0x4f3ca7, _0x92573f);
      return {
        "success": true,
        "account_name": CUSTOMER_NAME,
        "customer_id": CUSTOMER_ID,
        "status": _0x4c1390.data.status,
        "result_info": _0x4c1390.data.resultInfo,
        "integral_status": _0x4c1390.data.integralStatus,
        "raw_response": _0x4c1390.data
      };
    }
  } catch (_0x18c895) {
    return {
      "success": false,
      "account_name": CUSTOMER_NAME,
      "customer_id": CUSTOMER_ID,
      "error": _0x18c895.message
    };
  }
}
async function sendPushPlusNotification(_0x172216, _0x4df2dc, _0x37ab49) {
  if (!_0x37ab49) {
    {
      console.log("未设置PUSH_PLUS_TOKEN，跳过通知发送");
      return;
    }
  }
  const _0x436694 = "http://www.pushplus.plus/send",
    _0x47752a = "\n<br/><br/>\n<hr/>\n<center>\n<small>\n摸鱼大队出品&nbsp;&nbsp;&nbsp;&nbsp;作者:忘川<br/>\n此脚本只为本群内部群员使用，未经允许禁止传播，一经发现后果自负。<br/>\n如果你意外获得此本可联系群主，举报传播者可代替他的位置<br/>\n偷撸群主q:3052221086*付费进，介意勿扰<br/>\n全国流量卡领取:https://h5.lot-ml.com/ProductEn/Shop/44f3d0aed110f853<br/>\n流量卡渠道二:https://hy.yunhaoka.com/#/pages/micro_store/index?agent_id=51c82e30d5697130b967e505d8255dd7\n</small>\n</center>\n",
    _0x20764e = JSON.stringify({
      "token": _0x37ab49,
      "title": _0x172216,
      "content": _0x4df2dc + _0x47752a,
      "template": "html"
    }),
    _0x49f416 = new URL(_0x436694),
    _0x5c8f39 = {
      "hostname": _0x49f416.hostname,
      "port": _0x49f416.port || 80,
      "path": _0x49f416.pathname,
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(_0x20764e),
        "Connection": "close"
      },
      "timeout": 15000
    };
  try {
    {
      const _0x1cf933 = await httpRequest(_0x5c8f39, _0x20764e);
      _0x1cf933.data && _0x1cf933.data.code === 200 ? console.log("PushPlus通知发送成功") : console.log("PushPlus通知发送失败: " + (_0x1cf933.data ? _0x1cf933.data.msg : "未知错误"));
    }
  } catch (_0x2c8c3c) {
    console.log("PushPlus通知发送异常: " + _0x2c8c3c.message);
    try {
      console.log("尝试使用HTTPS发送通知...");
      const _0x55b34d = {
          "hostname": "www.pushplus.plus",
          "port": 443,
          "path": "/send",
          "method": "POST",
          "headers": {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(_0x20764e),
            "Connection": "close"
          },
          "timeout": 15000,
          "rejectUnauthorized": false
        },
        _0x4ae580 = await httpsRequest(_0x55b34d, _0x20764e);
      if (_0x4ae580.data && _0x4ae580.data.code === 200) console.log("PushPlus HTTPS通知发送成功");else {
        console.log("PushPlus HTTPS通知发送失败: " + (_0x4ae580.data ? _0x4ae580.data.msg : "未知错误"));
      }
    } catch (_0x196da4) {
      console.log("PushPlus HTTPS通知也失败: " + _0x196da4.message);
    }
  }
}
function sleep(_0x315539) {
  return new Promise(_0x45a5a9 => setTimeout(_0x45a5a9, _0x315539));
}
async function main() {
  console.log("=== 蒙娜丽莎签到脚本开始执行 ===");
  const _0x1b7dc9 = process.env[ENV_NAME];
  if (!_0x1b7dc9) {
    {
      console.log("未找到环境变量 " + ENV_NAME);
      return;
    }
  }
  const _0x475557 = parseTokens(_0x1b7dc9);
  if (_0x475557.length === 0) {
    console.log("未找到有效的token");
    return;
  }
  console.log("找到 " + _0x475557.length + " 个token");
  const _0x8f81f3 = [];
  for (let _0x2ae539 = 0; _0x2ae539 < _0x475557.length; _0x2ae539++) {
    const _0x432305 = _0x475557[_0x2ae539];
    console.log("\n正在执行第 " + (_0x2ae539 + 1) + " 个账号签到...");
    const _0x7feb32 = await signIn(_0x432305);
    _0x8f81f3.push(_0x7feb32);
    _0x7feb32.success ? (console.log("账号 " + _0x7feb32.account_name + " 签到结果:"), console.log("  Status: " + _0x7feb32.status), console.log("  ResultInfo: " + _0x7feb32.result_info), console.log("  获得积分: " + _0x7feb32.result_info)) : console.log("账号 " + _0x7feb32.account_name + " 签到失败: " + _0x7feb32.error);
    _0x2ae539 < _0x475557.length - 1 && (await sleep(2000));
  }
  const _0x430ede = _0x8f81f3.filter(_0x173c6e => _0x173c6e.success && _0x173c6e.status === 0).length,
    _0x491654 = _0x475557.length - _0x430ede,
    _0x4ea9c4 = "蒙娜丽莎签到完成 - 成功:" + _0x430ede + " 失败:" + _0x491654;
  let _0x4e22e3 = "\n<h3>蒙娜丽莎签到结果汇总</h3>\n<p>执行时间: " + new Date().toLocaleString("zh-CN") + "</p>\n<p>总账号数: " + _0x475557.length + "</p>\n<p>成功签到: " + _0x430ede + " 个</p>\n<p>签到失败: " + _0x491654 + " 个</p>\n<hr/>\n<h4>详细结果:</h4>\n";
  _0x8f81f3.forEach((_0x389357, _0xd6eb08) => {
    _0x389357.success ? _0x389357.status === 0 ? _0x4e22e3 += "<p>✅ 账号" + (_0xd6eb08 + 1) + " - 获得积分: " + _0x389357.result_info + " - 状态: 成功</p>" : _0x4e22e3 += "<p>❌ 账号" + (_0xd6eb08 + 1) + " - 状态码: " + _0x389357.status + " - 可能已签到</p>" : _0x4e22e3 += "<p>💥 账号" + (_0xd6eb08 + 1) + " - 错误: " + _0x389357.error + "</p>";
  });
  if (PUSH_PLUS_TOKEN) await sendPushPlusNotification(_0x4ea9c4, _0x4e22e3, PUSH_PLUS_TOKEN);else {
    console.log("\n" + "=".repeat(50));
    let _0x54eb51 = "\n蒙娜丽莎签到结果汇总\n执行时间: " + new Date().toLocaleString("zh-CN") + "\n总账号数: " + _0x475557.length + "\n成功签到: " + _0x430ede + " 个\n签到失败: " + _0x491654 + " 个\n---\n详细结果:\n";
    _0x8f81f3.forEach((_0xe5966b, _0xffb90) => {
      {
        if (_0xe5966b.success) {
          if (_0xe5966b.status === 0) _0x54eb51 += "✅ 账号" + (_0xffb90 + 1) + " - 获得积分: " + _0xe5966b.result_info + " - 状态: 成功\n";else {
            _0x54eb51 += "❌ 账号" + (_0xffb90 + 1) + " - 状态码: " + _0xe5966b.status + " - 可能已签到\n";
          }
        } else _0x54eb51 += "💥 账号" + (_0xffb90 + 1) + " - 错误: " + _0xe5966b.error + "\n";
      }
    });
    console.log(_0x54eb51);
    console.log("\n提示: 设置PUSH_PLUS_TOKEN环境变量可启用推送通知");
  }
  console.log("\n=== 蒙娜丽莎签到脚本执行完成 ===");
}
main().catch(_0xb5c3d1 => {
  console.error("脚本执行出错:", _0xb5c3d1);
});