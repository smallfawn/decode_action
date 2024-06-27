const $ = new Env("美团");
let status,
  sjpz = ($.isNode() ? process.env.sjpz : $.getdata("sjpz")) || "false";
const notify = $.isNode() ? require("./sendNotify") : "";
status = (status = $.getval("fhxzstatus") || "1") > 1 ? "" + status : "";
let slckArr = [],
  allMessage = "";
let num = rand(10, 99),
  slcks = "",
  mtToken,
  userId,
  uuid;
!(async () => {
  if (typeof $request !== "undefined") {
    fhxzck();
  } else {
    process.env.mtTk && process.env.mtTk.indexOf("@") > -1 ? (slckArr = process.env.mtTk.split("@"), console.log("您选择的是用\"@\"隔开\n")) : slcks = [process.env.mtTk];
    Object.keys(slcks).forEach(_0x48c460 => {
      slcks[_0x48c460] && slckArr.push(slcks[_0x48c460]);
    });
    console.log("-------------共" + slckArr.length + "个账号-------------\n");
    await qswcdl();
    await notify.sendNotify("美团天天神卷+赚米粒", "" + allMessage, "");
  }
})().catch(_0x26edb8 => $.logErr(_0x26edb8)).finally(() => $.done());
function qswcdl(_0xe7ecdc = 0) {
  return new Promise(_0x438328 => {
    let _0x357df6 = {
      url: "https://luobook.coding.net/p/code.json/d/luobook/git/raw/master/code.json",
      headers: ""
    };
    $.get(_0x357df6, async (_0x5097c2, _0x5e80e9, _0x3e17a4) => {
      try {
        _0x3e17a4 = JSON.parse(_0x3e17a4);
        if (_0x3e17a4.mtcode1 == 1) {
          console.log("\n脚本状态：" + _0x3e17a4.msgi1);
          allMessage += "";
          allMessage += "\n脚本状态：" + _0x3e17a4.msgi1;
          for (let _0x2300ed = 0; _0x2300ed < slckArr.length; _0x2300ed++) {
            $.message = "";
            mtToken = slckArr[_0x2300ed];
            $.index = _0x2300ed + 1;
            console.log("\n开始【美团账户 " + $.index + "】");
            allMessage += "\n开始【美团账户 " + $.index + "】";
            console.log("\n【天天神卷】🧧");
            allMessage += "\n【天天神卷】🧧";
            await sign();
            await $.wait(1000);
            await renderinfo();
            await clickReferralLink();
            await $.wait(1000);
            await gundamGrabV3();
            await $.wait(1000);
            await getConfig();
            await $.wait(1000);
            await fetchcoupon();
            await $.wait(1000);
            await shenquan();
            await $.wait(1000);
            console.log("\n【赚米粒】");
            allMessage += "\n【赚米粒】";
            await aggregationpage();
            await $.wait(1000);
            await signin();
            await $.wait(1000);
            await startvisittaskop();
            await $.wait(1000);
            await homepageicon();
            await $.wait(1000);
            await visittaskop();
            await $.wait(1000);
            await dinnersignin();
            await $.wait(1000);
            uuid = randomString(64);
            await getmtuid();
            userId != undefined && (await getuserInfo(), await getUserTasks("[\"1fff834702\"]"));
            allMessage += "\n\n";
            $.log("------------------任务结束------------------");
          }
        } else {
          console.log("脚本状态" + _0x3e17a4.msg1);
          allMessage += "\n脚本状态" + _0x3e17a4.msg1;
        }
      } catch (_0x2e64a8) {
        $.logErr(_0x2e64a8, _0x5e80e9);
      } finally {
        _0x438328();
      }
    }, 0);
  });
}
function fhxzck() {
  if ($request.url.indexOf("svip") > -1) {
    const _0x673f3b = $request.headers.Cookie;
    if (_0x673f3b) {
      $.setdata(_0x673f3b, "elmck" + status);
    }
    $.log(_0x673f3b);
    $.msg($.name, "", "饿了么" + status + "数据获取成功");
  }
}
function fetchcoupon() {
  return new Promise(_0x141598 => {
    let _0x531543 = {
      url: "https://promotion-waimai.meituan.com/invite/fetchcoupon?version=8.0.14&ctype=wxapp&fpPlatform=13&app=13&initialLng=113387518&initialLat=22931265&inviteCode=NnOIp-QOs8SiYF1dcSlL5r8phPrCf6qkH7evMyjIoureqol0OXXaopfjjblE0yPgN86y4RcZwmbDNeilsjadKKx8C_xcAtb9biugMRpa1nHJplwNd25nXQxgtWHn9006X_TBXSsJXEvvpgsevw4IOO1GodOJn4IOG_sQpdLKzqo&isMini=1&token=" + mtToken,
      headers: {
        Host: "promotion-waimai.meituan.com",
        Connection: "keep-alive",
        "content-type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "MeituanGroup/11.9.208",
        Referer: "https://servicewechat.com/wx2c348cf579062e56/568/page"
      }
    };
    $.get(_0x531543, async (_0x26ae80, _0x4e66f0, _0x588571) => {
      try {
        console.log("\n【下午茶红包】🧧");
        allMessage += "\n【下午茶红包】🧧";
        let _0x4fc0a9 = JSON.parse(_0x588571);
        console.log(_0x4fc0a9.msg);
        allMessage += "\n" + _0x4fc0a9.msg;
      } catch (_0x441401) {
        $.logErr(_0x441401, _0x4e66f0);
      } finally {
        _0x141598();
      }
    }, 0);
  });
}
function sign() {
  return new Promise(_0x38ecab => {
    let _0x23c087 = {
      url: "https://mediacps.meituan.com/gundam/sign",
      headers: {
        Host: "mediacps.meituan.com",
        Origin: "https://market.waimai.meituan.com",
        Connection: "keep-alive",
        Accept: "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.3(0x1800032c) NetType/4G Language/zh_CN miniProgram",
        "Accept-Language": "zh-cn",
        Referer: "https://market.waimai.meituan.com/gd/single.html?el_biz=waimai&gundam_id=2KAWnD&el_page=gundam.loader&urpid=70690.163800938339.57783928.2&appkey=a144a9fa40a42c55af00214bb4bb3993971%3A14290dingdanxia0&source=wandie&_rdt=1&noguide=1&utm_term=&utm_campaign=other&utm_medium=MU&actid=2&channel=union&utm_source=60413&utm_content=1380426723950108690",
        "Accept-Encoding": "gzip, deflate, br",
        Cookie: "mt_c_token=" + mtToken + "; thirdlogin_token=" + mtToken + ";token=" + mtToken + ";"
      }
    };
    $.get(_0x23c087, async (_0x5abebb, _0xe5ba14, _0x150c40) => {
      try {} catch (_0x456329) {
        $.logErr(_0x456329, _0xe5ba14);
      } finally {
        _0x38ecab();
      }
    }, 0);
  });
}
function renderinfo() {
  return new Promise(_0x3b0f1e => {
    let _0x16cf8b = {
      url: "https://market.waimai.meituan.com/gd/zc/renderinfo?el_biz=waimai&gundam_id=2KAWnD&el_page=gundam.loader&urpid=70690.163795067930.57783865.2&appkey=a144a9fa40a42c55af00214bb4bb3993971:14290dingdanxiawaimai&source=wandie&_rdt=1&noguide=1&utm_term=&utm_campaign=other&utm_medium=MU&actid=2&channel=union&utm_source=60413&utm_content=1380426723950108690&gdId=20625&tenant=gundam&lat=22.9312648773193" + num + "&lng=113.387237548828" + num,
      headers: {
        Host: "market.waimai.meituan.com",
        Accept: "application/json, text/plain, */*",
        Connection: "keep-alive",
        Cookie: "mt_c_token=" + mtToken + "; thirdlogin_token=" + mtToken + ";token=" + mtToken + ";",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.3(0x1800032c) NetType/WIFI Language/zh_CN",
        "Accept-Language": "zh-cn",
        Referer: "https://market.waimai.meituan.com/gd/single.html?el_biz=waimai&gundam_id=2KAWnD&el_page=gundam.loader&urpid=70690.163795067930.57783865.2&appkey=a144a9fa40a42c55af00214bb4bb3993971%3A14290dingdanxiawaimai&source=wandie&_rdt=1&noguide=1&utm_term=&utm_campaign=other&utm_medium=MU&actid=2&channel=union&utm_source=60413&utm_content=1380426723950108690",
        "Accept-Encoding": "gzip, deflate, br"
      }
    };
    $.get(_0x16cf8b, async (_0x422a4a, _0x5aaecb, _0x5a0aff) => {
      try {} catch (_0x24ffc8) {
        $.logErr(_0x24ffc8, _0x5aaecb);
      } finally {
        _0x3b0f1e();
      }
    }, 0);
  });
}
function clickReferralLink() {
  return new Promise(_0x2dff39 => {
    let _0x15fb3d = {
      url: "https://click.meituan.com/cps/clickReferralLink",
      headers: {
        Host: "click.meituan.com",
        Connection: "keep-alive",
        Accept: "application/json, text/plain, */*",
        Origin: "https://click.meituan.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36 NetType/WIFI MicroMessenger/7.0.20.1781(0x6700143B) WindowsWechat(0x6305002e)",
        "Content-Type": "application/json;charset=UTF-8",
        Cookie: "mt_c_token=" + mtToken + "; thirdlogin_token=" + mtToken + ";token=" + mtToken + ";",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://click.meituan.com/t?t=1&c=2&p=NiziVb5znioL",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
      },
      body: "{\"p\":\"NiziVb5znioL\",\"t\":\"1\",\"c\":\"2\",\"sessionId\":\"17f63014127-471-012-313\",\"referrer\":\"\",\"fingerprintFromH5\":\"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\"}"
    };
    $.post(_0x15fb3d, async (_0x530daf, _0x38d915, _0x4e3a99) => {
      try {} catch (_0x2e854d) {
        $.logErr(_0x2e854d, _0x38d915);
      } finally {
        _0x2dff39();
      }
    }, 0);
  });
}
function gundamGrabV3() {
  return new Promise(_0x5b3f76 => {
    let _0x12494f = {
      url: "https://mediacps.meituan.com/gundam/gundamGrabV3",
      headers: {
        Host: "mediacps.meituan.com",
        "Content-Type": "application/json;charset=UTF-8",
        Origin: "https://market.waimai.meituan.com",
        "Accept-Encoding": "br, gzip, deflate",
        Cookie: "token=" + mtToken + ";",
        Accept: "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.3(0x1800032c) NetType/4G Language/zh_CN miniProgram",
        Referer: "https://market.waimai.meituan.com/gd/single.html?el_biz=waimai&gundam_id=2KAWnD&el_page=gundam.loader&urpid=70690.163800938339.57783928.2&appkey=a144a9fa40a42c55af00214bb4bb3993971%3A14290dingdanxia0&source=wandie&_rdt=1&noguide=1&utm_term=&utm_campaign=other&utm_medium=MU&actid=2&channel=union&utm_source=60413&utm_content=1380426723950108690",
        "Content-Length": "369",
        "Accept-Language": "zh-cn"
      },
      body: "{\"gundamId\":20625,\"grabKey\":\"4E35567E5DAB45E5B7CC2B3BDE2E67B7,AA41950DF11D44AA8324A7E0E32CE806,211BCD47900F43D1AAC3864049DB1400,0084BF0333F844A2846DA0827C21EBF7,34BCA492BAEA4D2E8CD0394B31D5CB26,AD317E383B064F84ACE3A8DCDC8C2572,DFEAE6C5C7664DBBB5A64E5F52297B5C,CF56C7F89ADF4933990684F91F88E4A0,5B4653A4388947249D9DEFBE53BC22E7,30941E32462A42AB9B3D741B77A96A6E\",\"defaultGrabKey\":\"E28198A627324F85B4FF89FA10D093EC\",\"actualLongitude\":1133869" + num + ",\"actualLatitude\":229312" + num + ",\"needTj\":true,\"couponConfigIdOrderCommaString\":\"464617074,464617087,464617110,464617124,464573157,464573265,464574741,464577259,458043537,459036220,459956075,458056972,458056406,458047734,392417289,452275501,452275388,452275365,452275482,452447814,452446826,452446582,452447692,392417317,412809091,446694745,418776149,277807308,431529548\",\"couponAllConfigIdOrderString\":\"\",\"rubikCouponKey\":\"\"}"
    };
    $.post(_0x12494f, async (_0xac5e51, _0x3112be, _0x447494) => {
      try {
        console.log("天天领神券:");
        allMessage += "\n天天领神券:";
        let _0x450811 = JSON.parse(_0x447494);
        _0x450811.data.coupons.forEach(_0x411c84 => {
          console.log("领到:" + _0x411c84.couponAmount + "元" + _0x411c84.amountLimit + "的" + _0x411c84.couponName);
          allMessage += "\n领到:" + _0x411c84.couponAmount + "元" + _0x411c84.amountLimit + "的" + _0x411c84.couponName;
        });
      } catch (_0x14e637) {
        $.logErr(_0x14e637, _0x3112be);
      } finally {
        _0x5b3f76();
      }
    }, 0);
  });
}
function getConfig() {
  return new Promise(_0x15635a => {
    let _0x3630c7 = {
      url: "https://ihotel.meituan.com/topcube/api/toc/weixin/getConfig?url=https%3A%2F%2Fmarket.waimai.meituan.com%2Fgd%2Fsingle.html%3Fel_biz%3Dwaimai%26gundam_id%3D2KAWnD%26el_page%3Dgundam.loader%26urpid%3D70690.163795067930.57783865.2%26appkey%3Da144a9fa40a42c55af00214bb4bb3993971%253A14290dingdanxiawaimai%26source%3Dwandie%26_rdt%3D1%26noguide%3D1%26utm_term%3D%26utm_campaign%3Dother%26utm_medium%3DMU%26actid%3D2%26channel%3Dunion%26utm_source%3D60413%26utm_content%3D1380426723950108690",
      headers: {
        Host: "ihotel.meituan.com",
        Accept: "*/*",
        Connection: "keep-alive",
        Cookie: "mt_c_token=" + mtToken + "; thirdlogin_token=" + mtToken + ";token=" + mtToken + ";",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.3(0x1800032c) NetType/WIFI Language/zh_CN",
        "Accept-Language": "zh-cn",
        Referer: "https://market.waimai.meituan.com/gd/single.html?el_biz=waimai&gundam_id=2KAWnD&el_page=gundam.loader&urpid=70690.163795067930.57783865.2&appkey=a144a9fa40a42c55af00214bb4bb3993971%3A14290dingdanxiawaimai&source=wandie&_rdt=1&noguide=1&utm_term=&utm_campaign=other&utm_medium=MU&actid=2&channel=union&utm_source=60413&utm_content=1380426723950108690",
        "Accept-Encoding": "gzip, deflate, br"
      }
    };
    $.get(_0x3630c7, async (_0xc2a759, _0x594acc, _0x586eee) => {
      try {} catch (_0x3b7e8c) {
        $.logErr(_0x3b7e8c, _0x594acc);
      } finally {
        _0x15635a();
      }
    }, 0);
  });
}
function drawlottery(_0x2bd1df) {
  return new Promise(_0x3b19a5 => {
    let _0x9c415 = {
      url: "https://i.waimai.meituan.com/cfeplay/playcenter/batchgrabred/drawlottery",
      body: "parActivityId=Gh1tkq-wvFU2xEP_ZPzHPQ&wm_latitude=22931249&wm_longitude=113387349&token=" + mtToken + "&batchId=" + _0x2bd1df + "&isShareLink=true&propType=1&propId=2",
      headers: {
        Host: "wx.waimai.meituan.com",
        Connection: "keep-alive",
        "content-type": "application/x-www-form-urlencoded",
        "wm-ctype": "wxapp",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "MeituanGroup/11.9.208"
      }
    };
    $.post(_0x9c415, async (_0x4e628d, _0x558b29, _0x20d5bf) => {
      try {
        console.log(_0x20d5bf);
      } catch (_0x2d8814) {
        $.logErr(_0x2d8814, _0x558b29);
      } finally {
        _0x3b19a5();
      }
    }, 0);
  });
}
function corepage() {
  return new Promise(_0x271385 => {
    let _0x44af7a = {
      url: "https://i.waimai.meituan.com/cfeplay/playcenter/batchgrabred/corepage",
      body: "parActivityId=Gh1tkq-wvFU2xEP_ZPzHPQ&wm_ctype=mtandroid&wm_latitude=22931249&wm_longitude=113387349&token=" + mtToken,
      headers: {
        Host: "i.waimai.meituan.com",
        "User-Agent": "MeituanGroup/11.9.208",
        "x-requested-with": "XMLHttpRequest",
        "content-type": "application/x-www-form-urlencoded"
      }
    };
    $.post(_0x44af7a, async (_0x4178aa, _0x5d0222, _0x5c6f88) => {
      try {
        console.log("\n天天神券 签到🧧");
        let _0x125fd6 = JSON.parse(_0x5c6f88),
          _0x4ddbb8 = _0x125fd6.data.batchId;
        await drawlottery(_0x4ddbb8);
      } catch (_0x3b64c8) {
        $.logErr(_0x3b64c8, _0x5d0222);
      } finally {
        _0x271385();
      }
    }, 0);
  });
}
function shenquan() {
  return new Promise(_0xd62c2f => {
    let _0x386fad = {
      url: "https://promotion.waimai.meituan.com/playcenter/common/v1/mycoupons/shenquan?isMini=0&ctype=iphone&isInDpEnv=0",
      headers: {
        Host: "promotion.waimai.meituan.com",
        "Content-Type": "application/json;charset=UTF-8",
        Origin: "https://i.waimai.meituan.com",
        "Accept-Encoding": "br, gzip, deflate",
        Cookie: "token=" + mtToken + ";"
      }
    };
    $.get(_0x386fad, async (_0x3a7b79, _0x272635, _0x32c99b) => {
      try {
        let _0x406d2d = JSON.parse(_0x32c99b);
        if (_0x406d2d.code == 0) {
          console.log("\n【神券膨胀】🧧");
          allMessage += "\n【神券膨胀】🧧";
          if (sjpz != "false") {
            for (let _0x4e184e = 0; _0x4e184e < _0x406d2d.data.length; _0x4e184e++) {
              console.log("第" + (_0x4e184e + 1) + "张神券：满" + _0x406d2d.data[_0x4e184e].couponOuterType + "减" + _0x406d2d.data[_0x4e184e].couponCount + ",去膨胀");
              allMessage += "\n第" + (_0x4e184e + 1) + "张神券：满" + _0x406d2d.data[_0x4e184e].couponOuterType + "减" + _0x406d2d.data[_0x4e184e].couponCount + ",去膨胀";
              let _0x506c6d = _0x406d2d.data[_0x4e184e].couponViewId;
              await multiple(_0x506c6d);
              await $.wait(1000);
            }
            console.log("如需关闭膨胀，环境变量 sjpz 值：false");
            allMessage += "如需关闭膨胀，环境变量 sjpz 值：false";
          } else {
            console.log("\n当前设置不膨胀神券");
            allMessage += "\n当前设置不膨胀神券";
          }
        } else {
          console.log(_0x406d2d.msg);
        }
      } catch (_0xa6f13b) {
        $.logErr(_0xa6f13b, _0x272635);
      } finally {
        _0xd62c2f();
      }
    }, 0);
  });
}
function multiple(_0x360b9f) {
  return new Promise(_0x47cbba => {
    let _0x52aee9 = {
      url: "https://promotion.waimai.meituan.com/playcenter/common/v1/coupon/multiple?isMini=0&ctype=iphone&isInDpEnv=0",
      headers: {
        Host: "promotion.waimai.meituan.com",
        "Content-Type": "application/json;charset=UTF-8",
        Origin: "https://i.waimai.meituan.com",
        "Accept-Encoding": "br, gzip, deflate",
        Cookie: "token=" + mtToken + ";"
      },
      body: "\n            {\"couponViewId\":\"" + _0x360b9f + "\"}"
    };
    $.post(_0x52aee9, async (_0xd2bea3, _0x536229, _0x11c013) => {
      try {
        let _0x462102 = JSON.parse(_0x11c013);
        _0x462102.code == 0 ? (console.log(_0x462102.data[0].couponTitleDoc), allMessage += "\n" + _0x462102.data[0].couponTitleDoc) : (console.log("不能再膨胀了"), allMessage += "\n不能再膨胀了");
      } catch (_0x4998ae) {
        $.logErr(_0x4998ae, _0x536229);
      } finally {
        _0x47cbba();
      }
    }, 0);
  });
}
function aggregationpage() {
  return new Promise(_0x1c2971 => {
    let _0x3fa09f = {
      url: "https://wx.waimai.meituan.com/weapp/v1/wlwc/aggregationpage",
      body: "wm_dtype=iPhone%2011%3CiPhone12%2C1%3E&firstInit=false&wm_dversion=8.0.3&wm_dplatform=ios&wm_uuid=" + uuid + "&wm_longitude=113387349&wm_latitude=22931249&wm_appversion=7.8.8&wm_logintoken=" + mtToken + "&userToken=" + mtToken + "&waimai_sign=%2F&wm_actual_longitude=113387210&wm_actual_latitude=22931233&userid=" + userId + "&user_id=" + userId + "&uuid=" + uuid + "&openIdCipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADilzSKQNsGsANCcAOfkzXSyXDo0Fe7uoMaEVq9kWussZeJXc0VKjG%2B8p9BVykTVjD6llukPjRjBsA%3D%3D&open_id=oOpUI0axUjNf5hrYNu47FvHlyuyE&sdkVersion=2.17.0",
      headers: {
        Host: "wx.waimai.meituan.com",
        Connection: "keep-alive",
        "content-type": "application/x-www-form-urlencoded",
        "wm-ctype": "wxapp",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "MeituanGroup/11.9.208"
      }
    };
    $.post(_0x3fa09f, async (_0x45ee70, _0x2d7d1b, _0x1b6a62) => {
      try {} catch (_0xc7d098) {
        $.logErr(_0xc7d098, _0x2d7d1b);
      } finally {
        _0x1c2971();
      }
    }, 0);
  });
}
function randomString(_0x1d9c94 = 12) {
  let _0x5f4745 = "abcdef0123456789",
    _0x464f5b = _0x5f4745.length;
  let _0x252cc5 = "";
  for (i = 0; i < _0x1d9c94; i++) {
    _0x252cc5 += _0x5f4745.charAt(Math.floor(Math.random() * _0x464f5b));
  }
  return _0x252cc5;
}
function signin() {
  return new Promise(_0x152c30 => {
    let _0x242283 = {
      url: "https://wx.waimai.meituan.com/weapp/v1/wlwc/signintask/signin",
      body: "wm_dtype=iPhone%2011%3CiPhone12%2C1%3E&wm_dversion=8.0.3&wm_dplatform=ios&wm_uuid=" + uuid + "&wm_longitude=113387349&wm_latitude=22931249&wm_appversion=7.8.8&wm_logintoken=" + mtToken + "&userToken=" + mtToken + "&waimai_sign=%2F&wm_actual_longitude=113387210&wm_actual_latitude=22931233&userid=" + userId + "&user_id=" + userId + "&uuid=" + uuid + "&openIdCipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADilzSKQNsGsANCcAOfkzXSyXDo0Fe7uoMaEVq9kWussZeJXc0VKjG%2B8p9BVykTVjD6llukPjRjBsA%3D%3D&open_id=oOpUI0axUjNf5hrYNu47FvHlyuyE&sdkVersion=2.17.0",
      headers: {
        Host: "wx.waimai.meituan.com",
        Connection: "keep-alive",
        "content-type": "application/x-www-form-urlencoded",
        "wm-ctype": "wxapp",
        "Accept-Encoding": "gzip,compress,br,deflate"
      }
    };
    $.post(_0x242283, async (_0x2bd26b, _0x2af751, _0x2082bd) => {
      try {
        console.log("美团赚米粒签到：");
        allMessage += "\n美团赚米粒签到";
        let _0x7f8b74 = JSON.parse(_0x2082bd);
        console.log(_0x7f8b74.msg);
        allMessage += "\n" + _0x7f8b74.msg;
      } catch (_0x24ce84) {
        $.logErr(_0x24ce84, _0x2af751);
      } finally {
        _0x152c30();
      }
    }, 0);
  });
}
function startvisittaskop() {
  return new Promise(_0x24fbb0 => {
    let _0x2e02dc = {
      url: "https://wx.waimai.meituan.com/weapp/v1/wlwc/visittaskop",
      body: "wm_dtype=iPhone%2011%3CiPhone12%2C1%3E&wm_dversion=8.0.3&taskStatus=1&wm_dplatform=ios&wm_uuid=" + uuid + "&wm_longitude=113387349&wm_latitude=22931249&wm_appversion=7.8.8&wm_logintoken=" + mtToken + "&userToken=" + mtToken + "&waimai_sign=%2F&wm_actual_longitude=113387210&wm_actual_latitude=22931233&userid=" + userId + "&user_id=" + userId + "&uuid=" + uuid + "&openIdCipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADilzSKQNsGsANCcAOfkzXSyXDo0Fe7uoMaEVq9kWussZeJXc0VKjG%2B8p9BVykTVjD6llukPjRjBsA%3D%3D&open_id=oOpUI0axUjNf5hrYNu47FvHlyuyE&sdkVersion=2.17.0",
      headers: {
        Host: "wx.waimai.meituan.com",
        Connection: "keep-alive",
        "content-type": "application/x-www-form-urlencoded",
        "wm-ctype": "wxapp",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "MeituanGroup/11.9.208"
      }
    };
    $.post(_0x2e02dc, async (_0x3bd338, _0x1c85c9, _0x279ddf) => {
      try {} catch (_0x2f175e) {
        $.logErr(_0x2f175e, _0x1c85c9);
      } finally {
        _0x24fbb0();
      }
    }, 0);
  });
}
function homepageicon() {
  return new Promise(_0x5c5d81 => {
    let _0xd4d928 = {
      url: "https://wx.waimai.meituan.com/weapp/v1/wlwc/aggregationpage",
      body: "wm_dtype=iPhone%2011%3CiPhone12%2C1%3E&wm_dversion=8.0.3&wm_dplatform=ios&wm_uuid=" + uuid + "&wm_longitude=113387349&wm_latitude=22931249&wm_visitid=892319ae-edba-45a0-8c6f-79a4f35e3116&wm_appversion=7.8.8&wm_logintoken=" + mtToken + "&userToken=" + mtToken + "&req_time=1637953453523&waimai_sign=%2F&wm_actual_longitude=113387203&wm_actual_latitude=22931290&userid=13558869&user_id=13558869&lch=1089&sessionId=LH8Q16&optimusCode=20&riskLevel=71&partner=4&platform=13&uuid=" + uuid + "&openIdCipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADilzSKQNsGsANCcAOfkzXSyXDo0Fe7uoMaEVq9kWussZeJXc0VKjG%2B8p9BVykTVjD6llukPjRjBsA%3D%3D&open_id=oOpUI0axUjNf5hrYNu47FvHlyuyE&rc_app=4&rc_platform=13&wm_uuid_source=client&sdkVersion=2.17.0&source=21&firstInit=true&rank_list_id=13465b7b017e8b52e4c248f38c01d1d4&ref_list_id=13465b777107af42e498988f38c01d1d&wm_ctype=wxapp",
      headers: {
        Host: "wx.waimai.meituan.com",
        Connection: "keep-alive",
        "content-type": "application/x-www-form-urlencoded",
        "wm-ctype": "wxapp",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "MeituanGroup/11.9.208"
      }
    };
    $.post(_0xd4d928, async (_0x472376, _0x2050cd, _0x2277f0) => {
      try {
        let _0x162e1d = JSON.parse(_0x2277f0);
        console.log("当前米粒：" + _0x162e1d.data.user_points.valid_points);
        allMessage += "\n当前米粒：" + _0x162e1d.data.user_points.valid_points;
        console.log(_0x162e1d.data.user_points.subtitle);
        allMessage += "\n" + _0x162e1d.data.user_points.subtitle;
      } catch (_0x132f6a) {
        $.logErr(_0x132f6a, _0x2050cd);
      } finally {
        _0x5c5d81();
      }
    }, 0);
  });
}
function visittaskop() {
  return new Promise(_0x374a6d => {
    let _0x14080a = {
      url: "https://wx.waimai.meituan.com/weapp/v1/wlwc/visittaskop",
      body: "wm_dtype=iPhone%2011%3CiPhone12%2C1%3E&wm_dversion=8.0.3&taskStatus=3&wm_dplatform=ios&wm_uuid=" + uuid + "&wm_longitude=113387349&wm_latitude=22931249&wm_appversion=7.8.8&wm_logintoken=" + mtToken + "&userToken=" + mtToken + "&waimai_sign=%2F&wm_actual_longitude=113387210&wm_actual_latitude=22931233&userid=" + userId + "&user_id=" + userId + "&uuid=" + uuid + "&openIdCipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADilzSKQNsGsANCcAOfkzXSyXDo0Fe7uoMaEVq9kWussZeJXc0VKjG%2B8p9BVykTVjD6llukPjRjBsA%3D%3D&open_id=oOpUI0axUjNf5hrYNu47FvHlyuyE&sdkVersion=2.17.0",
      headers: {
        Host: "wx.waimai.meituan.com",
        Connection: "keep-alive",
        "content-type": "application/x-www-form-urlencoded",
        "wm-ctype": "wxapp",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "MeituanGroup/11.9.208"
      }
    };
    $.post(_0x14080a, async (_0x4b99a9, _0xee6af, _0x5078d3) => {
      try {
        console.log("\n领取浏览任务奖励：");
        allMessage += "\n领取浏览任务奖励：";
        let _0x4ff401 = JSON.parse(_0x5078d3);
        _0x4ff401.code == 0 ? (console.log("领取成功"), allMessage += "\n领取成功") : (console.log("不可重复领取"), allMessage += "\n不可重复领取");
      } catch (_0x51ae87) {
        $.logErr(_0x51ae87, _0xee6af);
      } finally {
        _0x374a6d();
      }
    }, 0);
  });
}
function getmtuid() {
  return new Promise(_0x2d6448 => {
    let _0x28c664 = {
      url: "https://open.meituan.com/user/v1/info?fields=id%2Cusername%2Cavatartype%2Cavatarurl%2Cnickname%2Cemail%2Ccity%2Ccityid%2Cmobile%2CisBindedMobile",
      headers: {
        token: mtToken
      }
    };
    $.get(_0x28c664, async (_0x128c94, _0x1f41c4, _0x4e4377) => {
      try {
        let _0x30bd97 = JSON.parse(_0x4e4377);
        userId = _0x30bd97.user.id;
      } catch (_0x42cedf) {
        $.logErr(_0x42cedf, _0x1f41c4);
      } finally {
        _0x2d6448();
      }
    }, 0);
  });
}
function getuserInfo() {
  return new Promise(_0x561087 => {
    let _0x1fed74 = {
      url: "https://web.meituan.com/web/user/points?token=" + mtToken + "&userId=" + userId
    };
    $.get(_0x1fed74, async (_0x9ca3cc, _0x117bc6, _0x1070cf) => {
      try {
        let _0x55d60e = JSON.parse(_0x1070cf);
        console.log("\n当前金币：", _0x55d60e.data.count);
        allMessage += "\n当前金币：" + _0x55d60e.data.count;
      } catch (_0x46f184) {
        $.logErr(_0x46f184, _0x117bc6);
      } finally {
        _0x561087();
      }
    }, 0);
  });
}
function dinnersignin() {
  return new Promise(_0x75a8eb => {
    let _0xde62c8 = {
      url: "https://wx.waimai.meituan.com/weapp/v1/wlwc/dinnersignin/sign",
      body: "wm_dtype=iPhone%2011%3CiPhone12%2C1%3E&wm_dversion=8.0.3&taskStatus=3&wm_dplatform=ios&wm_uuid=" + uuid + "&wm_longitude=113387349&wm_latitude=22931249&wm_appversion=7.8.8&wm_logintoken=" + mtToken + "&userToken=" + mtToken + "&waimai_sign=%2F&wm_actual_longitude=113387210&wm_actual_latitude=22931233&userid=" + userId + "&user_id=" + userId + "&uuid=" + uuid + "&openIdCipher=AwQAAABJAgAAAAEAAAAyAAAAPLgC95WH3MyqngAoyM%2Fhf1hEoKrGdo0pJ5DI44e1wGF9AT3PH7Wes03actC2n%2FGVnwfURonD78PewMUppAAAADilzSKQNsGsANCcAOfkzXSyXDo0Fe7uoMaEVq9kWussZeJXc0VKjG%2B8p9BVykTVjD6llukPjRjBsA%3D%3D&open_id=oOpUI0axUjNf5hrYNu47FvHlyuyE&sdkVersion=2.17.0",
      headers: {
        Host: "wx.waimai.meituan.com",
        Connection: "keep-alive",
        "content-type": "application/x-www-form-urlencoded",
        "wm-ctype": "wxapp",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "MeituanGroup/11.9.208"
      }
    };
    $.post(_0xde62c8, async (_0xdd220, _0x5b62fb, _0x5c46e4) => {
      try {
        console.log("\n任务：三餐领米粒");
        allMessage += "\n任务：三餐领米粒";
        let _0x6f054a = JSON.parse(_0x5c46e4);
        _0x6f054a.code == 0 ? (console.log("领取成功，当前米粒：" + _0x6f054a.data.current_points), allMessage += "\n领取成功，当前米粒：" + _0x6f054a.data.current_points) : (console.log(_0x6f054a.msg), allMessage += "\n" + _0x6f054a.msg);
      } catch (_0x128daa) {
        $.logErr(_0x128daa, _0x5b62fb);
      } finally {
        _0x75a8eb();
      }
    }, 0);
  });
}
function getUserTasks(_0x20ea95 = "[\"495070b239\",\"176f400a8f\",\"672129ff6d\",\"320ffa53e7\",\"6ccbda387f\",\"6f2d5f144f\",\"075eb403be\",\"563983d5f1\"]") {
  return new Promise(_0x3ec937 => {
    let _0x7a7d4d = {
      url: "https://cube.meituan.com/topcube/api/toc/task/getUserTasks",
      body: "{\"userId\":\"" + userId + "\",\"userType\":\"MEI_TUAN\",\"uuid\":\"" + uuid + "\",\"cityId\":1,\"taskIdKeys\":" + _0x20ea95 + ",\"sourceType\":\"MEI_TUAN\",\"mini_program_token\":\"" + mtToken + "\",\"inviter\":\"\",\"inviterTaskIdKey\":\"\"}",
      headers: {
        "Content-Type": "application/json"
      }
    };
    $.post(_0x7a7d4d, async (_0x4d8c3a, _0x3ea123, _0x4083c7) => {
      try {
        console.log("\n任务：天天赚钱💴");
        allMessage += "\n任务：天天赚钱💴";
        let _0x5ab781 = JSON.parse(_0x4083c7);
        if (_0x5ab781.code == 0) {
          for (let _0x11b4c9 of _0x5ab781.data) {
            if (_0x11b4c9.code == 0) {
              if (!_0x11b4c9.taskRuleVos || _0x11b4c9.taskRuleVos.length == 0) {
                continue;
              }
              if (_0x11b4c9.title.indexOf("小程序下单") > -1) {
                continue;
              }
              let _0xf9a38c = _0x11b4c9.extend ? true : false;
              if (_0xf9a38c && _0x11b4c9.extend.isSignInToday == 1) {
                console.log("\n任务:" + _0x11b4c9.title + " --- 已完成");
                continue;
              }
              for (let _0x31b4d4 of _0x11b4c9.taskRuleVos) {
                if (_0x31b4d4.status == "PRIZE_SUCC") {
                  console.log("\n任务:" + _0x11b4c9.title + " --- 已完成");
                } else {
                  if (_0x31b4d4.status == "CAN_RECEIVE") {
                    console.log("\n任务:" + _0x11b4c9.title + " --- 可领取奖励");
                    await $.wait(1000);
                    await sendTaskPrize(_0x11b4c9.taskIdKey, _0x31b4d4.taskRuleIdKey, 0, _0x11b4c9.taskNo, _0x31b4d4.taskRuleNo);
                    if (_0xf9a38c) {
                      break;
                    }
                  } else {
                    console.log("\n任务:" + _0x11b4c9.title + " --- 未完成");
                    await $.wait(1000);
                    await startUserTask(_0x11b4c9.taskIdKey, _0x31b4d4.taskRuleIdKey, 123);
                    if (_0xf9a38c) {
                      break;
                    }
                  }
                }
              }
            } else {
              console.log("\n任务:" + _0x11b4c9.title + " --- " + _0x11b4c9.msg);
            }
            await $.wait(1000);
          }
        } else {
          console.log(_0x5ab781.msg);
          allMessage += "\n" + _0x5ab781.msg;
        }
      } catch (_0x46f6ec) {
        $.logErr(_0x46f6ec, _0x3ea123);
      } finally {
        _0x3ec937();
      }
    }, 0);
  });
}
function startUserTask(_0x1ea5da, _0x506df9) {
  let _0x33a3b8 = "{\"openid\":\"\",\"userId\":\"" + userId + "\",\"cityId\":\"20\",\"mini_program_token\":\"" + mtToken + "\",\"uuid\":\"" + uuid + "\",\"userType\":\"MEI_TUAN\",\"taskIdKey\":\"" + _0x1ea5da + "\",\"taskRuleIdKey\":\"" + _0x506df9 + "\",\"cubePageId\":123,\"sourceType\":\"MEI_TUAN\",\"riskForm\":\"e30=\"}";
  return new Promise(_0x4829b7 => {
    let _0x3bbd43 = {
      url: "https://cube.meituan.com/topcube/api/toc/task/startUserTask",
      headers: {
        "Content-Type": "application/json"
      },
      body: _0x33a3b8
    };
    $.post(_0x3bbd43, async (_0x29c813, _0x54bb50, _0x1b1cc0) => {
      try {
        let _0x1682ff = JSON.parse(_0x1b1cc0);
        _0x1682ff.code == 0 ? (await $.wait(1000), await updateUserTask(_0x1ea5da, _0x506df9, _0x1682ff.taskNo, _0x1682ff.taskRuleNo, _0x1682ff.actionNo)) : (console.log("\n任务：", _0x1682ff.msg), allMessage += "\n任务：" + _0x1682ff.msg);
      } catch (_0x375ec5) {
        $.logErr(_0x375ec5, _0x54bb50);
      } finally {
        _0x4829b7();
      }
    }, 0);
  });
}
function updateUserTask(_0x42c5e6, _0x34b77b, _0x5e6197, _0xadb476, _0x102330) {
  return new Promise(_0x3ff313 => {
    let _0x422121 = {
      url: "https://cube.meituan.com/topcube/api/toc/task/updateUserTask",
      headers: {
        "Content-Type": "application/json"
      },
      body: "{\"openid\":\"\",\"userId\":\"" + userId + "\",\"cityId\":\"20\",\"mini_program_token\":\"" + mtToken + "\",\"uuid\":\"" + uuid + "\",\"userType\":\"MEI_TUAN\",\"taskIdKey\":\"" + _0x42c5e6 + "\",\"taskRuleIdKey\":\"" + _0x34b77b + "\",\"taskNo\":\"" + _0x5e6197 + "\",\"taskRuleNo\":\"" + _0xadb476 + "\",\"actionNo\":\"" + _0x102330 + "\",\"cubePageId\":10000003,\"sourceType\":\"MEI_TUAN\",\"riskForm\":\"e30=\"}"
    };
    $.post(_0x422121, async (_0x170e3d, _0x1ca514, _0x27b237) => {
      try {
        let _0x311426 = JSON.parse(_0x27b237);
        _0x311426.code == 0 ? (await $.wait(1000), await sendTaskPrize(_0x42c5e6, _0x34b77b, _0x311426.taskNo, _0x311426.taskRuleNo, _0x311426.actionNo)) : (console.log("\n任务：", _0x311426.msg), allMessage += "\n任务：" + _0x311426.msg);
      } catch (_0x16bdc8) {
        $.logErr(_0x16bdc8, _0x1ca514);
      } finally {
        _0x3ff313();
      }
    }, 0);
  });
}
function sendTaskPrize(_0x4048ca, _0x2fe30a, _0xc4bb4e, _0x19b1b7, _0x22fda4) {
  return new Promise(_0x104d5e => {
    let _0x414000 = {
      url: "https://cube.meituan.com/topcube/api/toc/task/sendTaskPrize",
      headers: {
        token: mtToken,
        "Content-Type": "application/json"
      },
      body: "{\"userId\":" + userId + ",\"userType\":\"MEI_TUAN\",\"mini_program_token\":\"" + mtToken + "\",\"uuid\":\"" + uuid + "\",\"cityId\":20,\"taskIdKey\":\"" + _0x4048ca + "\",\"taskRuleIdKey\":\"" + _0x2fe30a + "\",\"taskNo\":\"" + _0x19b1b7 + "\",\"taskRuleNo\":\"" + _0x22fda4 + "\",\"cubePageId\":0,\"riskForm\":\"e30=\"}"
    };
    $.post(_0x414000, async (_0x5c647a, _0x101f65, _0x143e11) => {
      try {
        let _0x1b5e20 = JSON.parse(_0x143e11);
        _0x1b5e20.code == 0 ? (console.log("\n任务领取：", _0x1b5e20.msg), allMessage += "\n任务领取：" + _0x1b5e20.msg) : (console.log("\n任务领取：", _0x1b5e20.msg), allMessage += "\n任务领取：" + _0x1b5e20.msg);
      } catch (_0x1e86fc) {
        $.logErr(_0x1e86fc, _0x101f65);
      } finally {
        _0x104d5e();
      }
    }, 0);
  });
}
function rand(_0x44ad04, _0xabb0bb) {
  return parseInt(Math.random() * (_0xabb0bb - _0x44ad04 + 1) + _0x44ad04, 10);
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.get(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            let s = require("iconv-lite");
            this.initGotEnv(t);
            this.got(t).on("redirect", (t, e) => {
              try {
                if (t.headers["set-cookie"]) {
                  const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  s && this.ckjar.setCookieSync(s, null);
                  e.cookieJar = this.ckjar;
                }
              } catch (t) {
                this.logErr(t);
              }
            }).then(t => {
              const {
                statusCode: i,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              e(null, {
                status: i,
                statusCode: r,
                headers: o,
                rawBody: h
              }, s.decode(h, this.encoding));
            }, t => {
              const {
                message: i,
                response: r
              } = t;
              e(i, r, r && s.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient[s](t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            let i = require("iconv-lite");
            this.initGotEnv(t);
            const {
              url: r,
              ...o
            } = t;
            this.got[s](r, o).then(t => {
              const {
                statusCode: s,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              e(null, {
                status: s,
                statusCode: r,
                headers: o,
                rawBody: h
              }, i.decode(h, this.encoding));
            }, t => {
              const {
                message: s,
                response: r
              } = t;
              e(s, r, r && i.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}