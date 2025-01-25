//Sat Jan 25 2025 08:22:49 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("闲趣赚3.24");
let status;
status = (status = $.getval("xqzstatus") || "1") > 1 ? "" + status : "";
let xqzckArr = [];
let xqzck = ($.isNode() ? process.env.xqzck : $.getdata("xqzck")) || "";
let xqzid = "",
  xqztk = "";
!(async () => {
  if (typeof $request !== "undefined") {
    {
      await xqzck();
    }
  } else {
    {
      xqzckArr = xqzck.split("@");
      console.log("------------- 共" + xqzckArr.length + "个账号-------------\n");
      for (let _0x2c0f0c = 0; _0x2c0f0c < xqzckArr.length; _0x2c0f0c++) {
        {
          xqzck = xqzckArr[_0x2c0f0c];
          $.index = _0x2c0f0c + 1;
          console.log("\n开始【闲趣赚" + $.index + "】");
          await xqzlb();
          await xqzxx();
        }
      }
    }
  }
})().catch(_0x848d15 => $.logErr(_0x848d15)).finally(() => $.done());
function xqzlb(_0x8d8167 = 0) {
  return new Promise(_0x28fe4c => {
    {
      let _0x3df897 = {
        "url": "https://wap.quxianzhuan.com/reward/browse/index/?xapp-target=blank",
        "headers": JSON.parse("{\"Host\":\"wap.quxianzhuan.com\",\"Connection\":\"keep-alive\",\"Upgrade-Insecure-Requests\":\"1\",\"User-Agent\":\"Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/200\",\"Accept\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\",\"x-app\":\"96c1ea5a-9a52-44c9-8ac4-8dceafa065c8\",\"X-Requested-With\":\"com.quxianzhuan.wap\",\"Sec-Fetch-Site\":\"none\",\"Sec-Fetch-Mode\":\"navigate\",\"Sec-Fetch-User\":\"?1\",\"Sec-Fetch-Dest\":\"document\",\"Referer\":\"https://wap.quxianzhuan.com/reward/list/?xapp-target=blank\",\"Accept-Encoding\":\"gzip, deflate\",\"Accept-Language\":\"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\",\"Cookie\":\"" + xqzck + "\"}")
      };
      $.get(_0x3df897, async (_0x190220, _0x3af933, _0x409111) => {
        try {
          xqzid = _0x409111.match(/reward_id":"(\d+)",/)[1];
          xqztk = xqzck.match(/tzb_formhash_cookie=(\w+);/)[1];
          console.log("\n闲趣赚匹配任务ID：" + xqzid);
          await xqzrw();
        } catch (_0x32f4e6) {} finally {
          {
            _0x28fe4c();
          }
        }
      }, _0x8d8167);
    }
  });
}
function xqzrw(_0x2888ee = 0) {
  return new Promise(_0x41ce33 => {
    let _0x579dd9 = {
      "url": "https://wap.quxianzhuan.com/reward/browse/append/",
      "headers": JSON.parse("{\"Host\":\"wap.quxianzhuan.com\",\"Connection\":\"keep-alive\",\"Upgrade-Insecure-Requests\":\"1\",\"User-Agent\":\"Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/200\",\"Accept\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\",\"x-app\":\"96c1ea5a-9a52-44c9-8ac4-8dceafa065c8\",\"X-Requested-With\":\"com.quxianzhuan.wap\",\"Sec-Fetch-Site\":\"none\",\"Sec-Fetch-Mode\":\"navigate\",\"Sec-Fetch-User\":\"?1\",\"Sec-Fetch-Dest\":\"document\",\"Referer\":\"https://wap.quxianzhuan.com/reward/list/?xapp-target=blank\",\"Accept-Encoding\":\"gzip, deflate\",\"Accept-Language\":\"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\",\"Cookie\":\"" + xqzck + "\"}"),
      "body": "reward_id=" + xqzid + "&formhash=" + xqztk + "&inajax=1"
    };
    $.post(_0x579dd9, async (_0x216874, _0x50e484, _0x53fa76) => {
      {
        try {
          const _0x35ebda = JSON.parse(_0x53fa76);
          if (_0x35ebda.state == 1) {
            console.log("\n闲趣赚任务：" + _0x35ebda.msg + "等待10秒继续下一任务");
            await $.wait(11000);
            await xqzlb();
          } else {
            console.log("\n闲趣赚任务：" + _0x35ebda.msg);
          }
        } catch (_0x1ec8c9) {} finally {
          {
            _0x41ce33();
          }
        }
      }
    }, _0x2888ee);
  });
}
function xqzxx(_0x330473 = 0) {
  return new Promise(_0x51f24f => {
    let _0x54f1fa = {
      "url": "https://wap.quxianzhuan.com/user/",
      "headers": JSON.parse("{\"Host\":\"wap.quxianzhuan.com\",\"Connection\":\"keep-alive\",\"Upgrade-Insecure-Requests\":\"1\",\"User-Agent\":\"Mozilla/5.0 (Linux; Android 10; 16s Pro Build/QKQ1.191222.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36  XiaoMi/MiuiBrowser/10.8.1 LT-APP/44/200\",\"Accept\":\"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9\",\"x-app\":\"96c1ea5a-9a52-44c9-8ac4-8dceafa065c8\",\"X-Requested-With\":\"com.quxianzhuan.wap\",\"Sec-Fetch-Site\":\"none\",\"Sec-Fetch-Mode\":\"navigate\",\"Sec-Fetch-User\":\"?1\",\"Sec-Fetch-Dest\":\"document\",\"Referer\":\"https://wap.quxianzhuan.com/reward/list/?xapp-target=blank\",\"Accept-Encoding\":\"gzip, deflate\",\"Accept-Language\":\"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\",\"Cookie\":\"" + xqzck + "\"}")
    };
    $.get(_0x54f1fa, async (_0x3bfce3, _0x1a61ad, _0x4ac891) => {
      try {
        let _0x31cd8c = _0x4ac891.match(/available_money":(.+?),"/)[1];
        let _0x318a42 = _0x4ac891.match(/UID：(.+?)\<\/span\>/)[1];
        console.log("\n闲趣赚靓仔用户：【" + _0x318a42 + "】 - 可提现余额【" + _0x31cd8c + "】");
      } catch (_0x147b1e) {} finally {
        _0x51f24f();
      }
    }, _0x330473);
  });
}
function rand(_0x55047e, _0x5f4ee9) {
  return parseInt(Math.random() * (_0x5f4ee9 - _0x55047e + 1) + _0x55047e, 10);
}
_0xodm = "jsjiami.com.v6";