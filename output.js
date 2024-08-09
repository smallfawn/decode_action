//Fri Aug 09 2024 07:40:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const bdy_0x4523c5 = $.isNode() ? require("./jdCookie.js") : "",
  bdy_0x4595e1 = $.isNode() ? require("./sendNotify") : "",
  bdy_0x3bab8b = require("./function/dylans"),
  bdy_0x18aaf7 = process.env.WYW_DBNUM ? process.env.WYW_DBNUM : "10";
let bdy_0x15b2ea = [],
  bdy_0xb570f7 = "",
  bdy_0xb3131b = 0,
  bdy_0x4ef3ff = {};
if (process.env.DY_PROXY) {
  try {
    require("https-proxy-agent");
    bdy_0x4ef3ff = require("./function/proxy.js");
    $.dget = bdy_0x4ef3ff.intoRequest($.get.bind($));
    $.dpost = bdy_0x4ef3ff.intoRequest($.post.bind($));
  } catch {
    $.log("未安装https-proxy-agent依赖，无法启用代理");
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
if ($.isNode()) {
  Object.keys(bdy_0x4523c5).forEach(_0x47b5a7 => {
    bdy_0x15b2ea.push(bdy_0x4523c5[_0x47b5a7]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  bdy_0x15b2ea = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonfomat($.getdata("CookiesJD") || "[]").map(_0x1feea7 => _0x1feea7.cookie)].filter(_0x2bd01e => !!_0x2bd01e);
}
$.helpId = [];
$.fullId = [];
let bdy_0x2c2868 = process.env.WYW_DHID || "";
!(async () => {
  if (!bdy_0x15b2ea[0]) {
    const _0x5d8b70 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x5d8b70);
    return;
  }
  console.log("当前版本：20240702");
  console.log("问题建议：https://t.me/dylan_jdpro");
  console.log("兑换ID变量 WYW_DHID");
  for (let _0x49203a = 0; _0x49203a < bdy_0x15b2ea.length; _0x49203a++) {
    bdy_0xb570f7 = bdy_0x15b2ea[_0x49203a];
    originCookie = bdy_0x15b2ea[_0x49203a];
    if (bdy_0xb570f7) {
      $.UserName = decodeURIComponent(bdy_0xb570f7.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0xb570f7.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x49203a + 1;
      $.hotFlag = false;
      $.nickName = "";
      $.isLogin = true;
      $.outFlag = false;
      $.isban = false;
      $.hasRisk = false;
      $.nostart = false;
      $.cashList = [];
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      bdy_0x526f6f();
      if (!$.isLogin) {
        const _0xa4771f = {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        };
        $.msg($.name, "【提示】cookie已失效", "京东账号" + $.index + " " + ($.nickName || $.UserName) + "\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action", _0xa4771f);
        if ($.isNode()) {
          await bdy_0x4595e1.sendNotify($.name + "cookie已失效 - " + $.UserName, "京东账号" + $.index + " " + $.UserName + "\n请重新登录获取cookie");
        }
        continue;
      }
      await bdy_0x46676a();
      bdy_0x4ef3ff.swip && (await bdy_0x4ef3ff.swip());
      if ($.outFlag || $.nostart) {
        break;
      }
    }
  }
})().catch(_0x365b18 => {
  return $.logErr(_0x365b18);
}).finally(() => {
  return $.done();
});
async function bdy_0x5b8de7() {
  for (let _0xf59f71 = 0; _0xf59f71 < bdy_0x15b2ea.length; _0xf59f71++) {
    bdy_0xb570f7 = bdy_0x15b2ea[_0xf59f71];
    if (bdy_0xb570f7) {
      $.UserName = decodeURIComponent(bdy_0xb570f7.match(/pt_pin=([^; ]+)(?=;?)/) && bdy_0xb570f7.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0xf59f71 + 1;
      console.log("\n-------开始【账号" + $.index + "】" + ($.nickName || $.UserName) + "------\n");
      bdy_0x526f6f();
      $.nonum = false;
      $.fullId.length != 0 && ($.helpId = $.helpId.filter(_0x56593a => !$.fullId.includes(_0x56593a)), $.fullId = []);
      for (let _0x2bca6e of $.helpId) {
        $.itemId = _0x2bca6e;
        console.log("去助力 --> " + $.itemId);
        await bdy_0x8645be("wanyiwan_assist");
        if ($.nonum) {
          break;
        }
        await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
      }
      if ($.outFlag) {
        break;
      }
    }
  }
}
async function bdy_0x46676a() {
  try {
    await bdy_0x8645be("wanyiwan_exchange_page");
    console.log("\n账号奖票余额 " + $.score);
    bdy_0x2c2868 == "" && (console.log("\n请设置兑换ID"), process.exit());
    if (!$.isLogin) {
      console.log("账号未登录");
      return;
    }
    let _0x4b04c5 = $.moreExchanges.find(_0x166544 => _0x166544.assignmentId == bdy_0x2c2868);
    _0x4b04c5 === undefined && (console.log("没有匹配到兑换目标，请检查设置的ID是否正确！"), process.exit());
    $.assignmentId = _0x4b04c5.assignmentId;
    $.type = _0x4b04c5.rewardType;
    $.index == 1 && console.log("\n已设置兑换" + _0x4b04c5.rewardName);
    if ($.score < _0x4b04c5.exchangeScore) {
      console.log("奖票余额不足，不进行兑换!!");
    } else {
      $.type == 4 ? await bdy_0x8645be("wanyiwan_withdraw") : await bdy_0x8645be("wanyiwan_exchange");
    }
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    for (let _0x40e01d = 0; _0x40e01d < 1; _0x40e01d++) {
      console.log("\n查询提现...");
      await bdy_0x8645be("superRedBagList", _0x40e01d);
      if ($.bagList.length == 0) {
        break;
      }
      for (let _0x59c8fa of $.bagList) {
        if (_0x59c8fa.prizeType == 4) {
          $.txfail = false;
          if (_0x59c8fa.state == 0 || _0x59c8fa.state == 2) {
            console.log("提现 --- " + _0x59c8fa.amount);
            await bdy_0x8645be("apCashWithDraw", _0x59c8fa);
            $.txfail && $.failtxlist.push(_0x59c8fa);
            await $.wait(2000);
          } else {
            _0x59c8fa.state == 8;
          }
        }
      }
      await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
    }
    await $.wait(parseInt(Math.random() * 1000 + 2000, 10));
  } catch (_0x162db9) {
    console.log(_0x162db9);
  }
}
async function bdy_0x8645be(_0x56301c, ..._0x41f9bd) {
  if ($.outFlag || $.isban) {
    return;
  }
  let _0x5460b4 = "",
    _0x3c85ac,
    _0x253d55,
    _0x4bbedc = "post",
    _0x25b9d9 = "https://api.m.jd.com/client.action",
    _0xd29725 = "signed_wh5";
  switch (_0x56301c) {
    case "wanyiwan_sign":
      const _0x15bccc = {
        version: 1
      };
      _0x5460b4 = _0x15bccc;
      _0x3c85ac = "d12dd";
      _0x253d55 = "wanyiwan_sign";
      break;
    case "wanyiwan_exchange_page":
      const _0x113c6d = {
        version: 1
      };
      _0x5460b4 = _0x113c6d;
      _0x253d55 = "wanyiwan_exchange_page";
      break;
    case "apTaskList":
      _0x25b9d9 = "https://api.m.jd.com/api?functionId=apTaskList&body=%7B%22linkId%22%3A%22Fl1LmxG_f0poD7w1ycZqnw%22%7D&t=1715170975269&appid=activities_platform&client=android&clientVersion=6.24.0&loginType=2&loginWQBiz=wegame&h5st=null&build=22779&screen=393*873&networkType=wifi&eufv=1&cthr=1";
      _0x4bbedc = "get";
      break;
    case "wanyiwan_exchange":
      const _0x219f95 = {
        assignmentId: $.assignmentId,
        type: $.type,
        version: 1
      };
      _0x5460b4 = _0x219f95;
      _0x253d55 = "wanyiwan_exchange";
      break;
    case "wanyiwan_withdraw":
      const _0x2480c2 = {
        assignmentId: $.assignmentId,
        type: $.type,
        version: 1
      };
      _0x5460b4 = _0x2480c2;
      _0x253d55 = "wanyiwan_withdraw";
      break;
    case "endTask":
      const _0x211558 = {
        itemId: $.itemId,
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        actionType: 0,
        version: 1
      };
      _0x5460b4 = _0x211558;
      _0x3c85ac = "89db2";
      _0x253d55 = "wanyiwan_do_task";
      break;
    case "award":
      const _0x368386 = {
        taskType: $.taskType,
        assignmentId: $.encryptAssignmentId,
        version: 1
      };
      _0x5460b4 = _0x368386;
      _0x253d55 = "wanyiwan_task_receive_award";
      break;
    case "wanyiwan_assist":
      const _0x2f729d = {
        inviteCode: $.itemId,
        version: 1
      };
      _0x5460b4 = _0x2f729d;
      _0x3c85ac = "ba505";
      _0x253d55 = "wanyiwan_assist";
      break;
    case "turnHappyHome":
      _0x25b9d9 = "https://api.m.jd.com/api";
      const _0x583f95 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x5460b4 = _0x583f95;
      _0xd29725 = "activities_platform";
      _0x253d55 = "turnHappyHome";
      break;
    case "turnHappyDouble":
      _0x25b9d9 = "https://api.m.jd.com/api";
      _0x5460b4 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ",
        turnNum: parseInt(bdy_0x18aaf7)
      };
      _0x3c85ac = "614f1";
      _0xd29725 = "activities_platform";
      _0x253d55 = "turnHappyDouble";
      break;
    case "turnHappyReceive":
      _0x25b9d9 = "https://api.m.jd.com/api";
      const _0xb4dba0 = {
        linkId: "CDv-TaCmVcD0sxAI_HE2RQ"
      };
      _0x5460b4 = _0xb4dba0;
      _0x3c85ac = "25fac";
      _0xd29725 = "activities_platform";
      _0x253d55 = "turnHappyReceive";
      break;
    case "superRedBagHome":
      _0x25b9d9 = "https://api.m.jd.com/api";
      const _0x5a8e3a = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x5460b4 = _0x5a8e3a;
      _0x3c85ac = "5be1b";
      _0xd29725 = "activity_platform_se";
      _0x253d55 = "superRedBagHome";
      break;
    case "superRedBagDraw":
      _0x25b9d9 = "https://api.m.jd.com/api";
      const _0x3296a4 = {
        linkId: "aE-1vg6_no2csxgXFuv3Kg"
      };
      _0x5460b4 = _0x3296a4;
      _0x3c85ac = "89cfe";
      _0xd29725 = "activity_platform_se";
      _0x253d55 = "superRedBagDraw";
      break;
    case "apCashWithDraw":
      _0x25b9d9 = "https://api.m.jd.com/api";
      const _0x3761f4 = {
        id: _0x41f9bd[0].id,
        business: "crazyPlay",
        poolBaseId: _0x41f9bd[0].poolBaseId,
        prizeGroupId: _0x41f9bd[0].prizeGroupId,
        prizeBaseId: _0x41f9bd[0].prizeBaseId,
        prizeType: 4,
        activityId: "1999"
      };
      const _0x223052 = {
        businessSource: "NONE",
        base: _0x3761f4,
        linkId: "8u9Bktjo92LocBHib9PoHQ",
        channel: "1"
      };
      _0x5460b4 = _0x223052;
      _0x3c85ac = "73bca";
      _0xd29725 = "activities_platform";
      _0x253d55 = "apCashWithDraw";
      break;
    case "superRedBagList":
      _0x25b9d9 = "http://api.m.jd.com/api";
      const _0x4da901 = {
        pageNum: 1,
        pageSize: 20,
        linkId: "8u9Bktjo92LocBHib9PoHQ",
        associateLinkId: "",
        business: "crazyPlay"
      };
      _0x5460b4 = _0x4da901;
      _0x3c85ac = "f2b1d";
      _0xd29725 = "activities_platform";
      _0x253d55 = "superRedBagList";
      break;
    default:
      console.log("错误" + _0x56301c);
  }
  if (_0x3c85ac) {
    let _0xa2208 = {
      appId: _0x3c85ac,
      functionId: _0x253d55,
      body: _0x5460b4,
      appid: _0xd29725,
      clientVersion: $.UA.split(";")[2],
      client: "ios",
      user: $.UserName,
      t: Date.now(),
      ua: $.UA
    };
    _0x5460b4 = await bdy_0x3bab8b.getbody(_0xa2208);
    if (!_0x5460b4) {
      return;
    }
  } else {
    _0x5460b4 && (_0x5460b4 = "functionId=" + _0x253d55 + "&body=" + encodeURIComponent(JSON.stringify(_0x5460b4)) + "&t=" + Date.now() + "&appid=" + _0xd29725 + "&client=ios&" + $.UA.split(";")[2] + "&cthr=1&networkType=wifi");
  }
  let _0x177bfc = bdy_0x406fe1(_0x25b9d9, _0x5460b4);
  return new Promise(async _0x4ab658 => {
    $["d" + _0x4bbedc](_0x177bfc, async (_0xfb4151, _0x34f899, _0x186b42) => {
      try {
        if (_0xfb4151) {
          if (_0x34f899 && typeof _0x34f899.statusCode != "undefined") {
            if (_0x34f899.statusCode == 493) {
              if (bdy_0xb3131b < 6) {
                bdy_0xb3131b++;
                await bdy_0x8645be(_0x56301c);
                return;
              }
              console.log("ip可能被限制，过10分钟后再执行脚本\n");
              $.outFlag = true;
            }
          }
          console.log("" + $.toStr(_0xfb4151, _0xfb4151));
        } else {
          if (_0x186b42.includes("doctype") && bdy_0xb3131b < 6) {
            bdy_0xb3131b++;
            await bdy_0x8645be(_0x56301c);
            return;
          }
          bdy_0xb3131b = 0;
          bdy_0x3ad61f(_0x56301c, _0x186b42);
        }
      } catch (_0x3c4911) {
        console.log(_0x3c4911, _0x34f899);
      } finally {
        _0x4ab658();
      }
    });
  });
}
function bdy_0x1d0ebd(_0x1791c4) {
  let _0x17e765 = "";
  switch (type) {
    case [_0x17e765]:
      const _0x53ac58 = {
        ed: ed
      };
      _0xf1f6le = _0x53ac58;
      break;
    case [_0x17e765]:
      const _0x27e080 = {
        bd: bd
      };
      _0xf1f6lc = _0x27e080;
      break;
    case [_0x17e765]:
      const _0x73b915 = {
        ed: ed
      };
      _0xf1f6lf = _0x73b915;
      break;
    case [_0x17e765]:
      const _0x529147 = {
        ed: ed
      };
      _0xf1f6lg = _0x529147;
      break;
    case [_0x17e765]:
      const _0x1e8eb9 = {
        ed: ed
      };
      _0xf1f6lv = _0x1e8eb9;
      break;
  }
}
async function bdy_0x3ad61f(_0x34f34d, _0x592fca) {
  let _0x421fbc = "";
  try {
    _0x421fbc = JSON.parse(_0x592fca);
  } catch (_0x4689f4) {
    console.log(_0x34f34d + " 执行任务异常");
  }
  try {
    switch (_0x34f34d) {
      case "award":
        _0x421fbc.code == 0 ? _0x421fbc.data.bizCode == 0 ? console.log("任务完成，获得" + _0x421fbc.data.result.rewardCount + "奖票 🎫") : console.log(_0x421fbc.data.bizMsg) : console.log(_0x421fbc.message);
        break;
      case "wanyiwan_withdraw":
      case "wanyiwan_exchange":
        if (_0x421fbc.code == 0) {
          if (_0x421fbc.data.bizCode == 0) {
            console.log("兑换成功！");
          } else {
            console.log(_0x421fbc.data.bizMsg);
          }
        } else {
          console.log(_0x421fbc.message);
        }
        break;
      case "wanyiwan_exchange_page":
        _0x421fbc.code == 0 ? _0x421fbc.data.bizCode == 0 ? ($.isLogin = _0x421fbc.data.result.isLogin || false, $.moreExchanges = _0x421fbc.data.result.moreExchanges, $.score = _0x421fbc.data.result.score, ($.index == 1 && console.log("可兑换列表："), _0x421fbc.data.result.moreExchanges.forEach(_0x2c0f22 => {
          console.log("" + _0x2c0f22.rewardName + (_0x2c0f22.hasStock ? "(有库存)" : "(无库存)") + "|需" + _0x2c0f22.exchangeScore + "奖票|兑换ID=> " + _0x2c0f22.assignmentId);
        }))) : console.log(_0x421fbc.data.bizMsg) : console.log(_0x421fbc.message);
        break;
      case "wanyiwan_assist":
        if (_0x421fbc.code == 0) {
          if (_0x421fbc.data.bizCode == 0) {
            console.log("✔️ 助力成功");
            $.nonum = true;
          } else {
            if (_0x421fbc.data.bizMsg.includes("太多人") || _0x421fbc.data.bizMsg.includes("重复")) {
              console.log("❌", _0x421fbc.data.bizMsg);
              $.nonum = true;
            } else {
              _0x421fbc.data.bizMsg.includes("已经完成") ? (console.log("❌", _0x421fbc.data.bizMsg), $.fullId.push($.itemId)) : console.log("❌", _0x421fbc.data.bizMsg);
            }
          }
        } else {
          console.log(_0x421fbc.message);
        }
        break;
      case "wanyiwan_home":
        _0x421fbc.code == 0 ? _0x421fbc.data.bizCode == 0 ? (_0x421fbc.data.result.popWindows.length != 0 && console.log("获得新手奖励：", _0x421fbc.data.result.popWindows[0].getScore, "奖票 🎫"), console.log("当前奖票总量：" + _0x421fbc.data.result.score + " 🎫"), $.isLogin = _0x421fbc.data?.["result"]?.["isLogin"], $.taskList = _0x421fbc.data?.["result"]?.["taskBoard"] || [], $.signstatus = _0x421fbc.data?.["result"]?.["signBoard"]?.["status"] || 0) : console.log(_0x421fbc.data.bizMsg) : console.log(_0x421fbc.message);
        break;
      case "superRedBagList":
        _0x421fbc.success ? $.bagList = _0x421fbc.data.items || [] : console.log(_0x421fbc.errMsg);
        break;
      case "apCashWithDraw":
        if (_0x421fbc.code == 0) {
          if (_0x421fbc.data.message.indexOf("待发放") > -1) {
            console.log(_0x421fbc.data.message);
            $.txfail = true;
          } else {
            if (_0x421fbc.data.message.includes("上限")) {
              console.log(_0x421fbc.data.message);
              $.txfail = false;
            } else {
              if (_0x421fbc.data.message.includes("提现中")) {
                console.log("提现成功");
                $.txfail = false;
              } else {
                console.log(_0x421fbc.data.message);
              }
            }
          }
        } else {
          console.log(_0x421fbc.errMsg);
        }
        break;
      case "superRedBagHome":
        _0x421fbc.success ? ($.sceneStatus = _0x421fbc.data.sceneStatus, $.nextLeftTime = _0x421fbc.data.nextLeftTime) : console.log(_0x421fbc.errMsg);
        break;
      case "superRedBagDraw":
        if (_0x421fbc.success) {
          $.shakeLeftTime = _0x421fbc.data.shakeLeftTime;
          const {
            prizeDrawVo = ""
          } = _0x421fbc.data;
          if (prizeDrawVo) {
            switch (prizeDrawVo.prizeType) {
              case 24:
                console.log("获得：" + prizeDrawVo.amount + "票奖 🎫");
                $.sucdraw++;
                break;
              case 1:
                console.log("获得:" + prizeDrawVo.prizeConfigName);
                break;
              case 4:
                console.log("获得:" + prizeDrawVo.amount + "现金💰️");
                const _0x294da7 = {
                  id: prizeDrawVo.id,
                  poolBaseId: 41486,
                  prizeGroupId: prizeDrawVo.prizeGroupId,
                  prizeBaseId: prizeDrawVo.prizeBaseId,
                  prizeType: prizeDrawVo.prizeType,
                  amount: prizeDrawVo.amount
                };
                $.cashList.push(_0x294da7);
                break;
              case 3:
                console.log("获得:" + prizeDrawVo.amount + "京豆🥔");
                break;
              case 2:
                console.log("获得:" + prizeDrawVo.amount + "红包🧧");
                break;
              default:
                console.log(JSON.stringify(prizeDrawVo));
                break;
            }
          } else {
            console.log(_0x592fca);
          }
        } else {
          console.log(_0x421fbc.errMsg);
        }
        break;
      case "startTask":
      case "turnHappyReceive":
      case "endTask":
        break;
      default:
        console.log(_0x34f34d + " -> " + _0x592fca);
    }
    typeof _0x421fbc == "object" && _0x421fbc.errorMessage && _0x421fbc.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (_0x2ab8e8) {
    console.log(_0x34f34d + " " + _0x2ab8e8);
  }
}
function bdy_0x406fe1(_0x2b3609, _0x1e07d1) {
  const _0x41cdb6 = {
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    Cookie: bdy_0xb570f7,
    "User-Agent": $.UA
  };
  const _0x491388 = {
    url: _0x2b3609,
    headers: _0x41cdb6,
    timeout: 30000,
    ...(_0x1e07d1 ? {
      body: _0x1e07d1
    } : {})
  };
  return _0x491388;
}
async function bdy_0x526f6f() {
  $.UA = "jdapp;iPhone;10.1.5;13.1.2;" + bdy_0x33ff6c(40) + ";network/wifi;model/iPhone8,1;addressid/2308460611;appBuild/167814;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1";
}
function bdy_0x33ff6c(_0x5f373c) {
  _0x5f373c = _0x5f373c || 32;
  let _0x2cc282 = "abcdef0123456789",
    _0x35353e = _0x2cc282.length,
    _0x5e3f1c = "";
  for (i = 0; i < _0x5f373c; i++) {
    _0x5e3f1c += _0x2cc282.charAt(Math.floor(Math.random() * _0x35353e));
  }
  return _0x5e3f1c;
}
function bdy_0x31b7d1(_0xe97274) {
  if (typeof _0xe97274 == "string") {
    try {
      return JSON.parse(_0xe97274);
    } catch (_0x232497) {
      console.log(_0x232497);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
async function bdy_0x34cea0() {
  if (!$.joinVenderId) {
    return;
  }
  return new Promise(async _0x4b1309 => {
    $.errorJoinShop = "活动太火爆，请稍后再试";
    $.shopactivityId = "";
    let _0x3c26aa = {
      venderId: "" + $.joinVenderId + "",
      shopId: "" + $.joinVenderId + "",
      bindByVerifyCodeFlag: 1,
      registerExtend: {},
      writeChildFlag: 0,
      channel: 406
    };
    $.shopactivityId == "" && delete _0x3c26aa.activityId;
    const _0x5a1f6f = {
      appId: "27004",
      fn: "bindWithVender",
      body: _0x3c26aa,
      apid: "shopmember_m_jd_com",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: $.UA
    };
    _0x3c26aa = await dyy.getbody(_0x5a1f6f);
    const _0x16656c = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0xb570f7,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": $.UA
    };
    const _0x4dde7c = {
      url: "https://api.m.jd.com/client.action?" + _0x3c26aa + "&uuid=88888",
      headers: _0x16656c,
      timeout: 30000
    };
    $.dget(_0x4dde7c, async (_0x30c5d2, _0x7aed2e, _0x53a685) => {
      try {
        _0x53a685 = _0x53a685 && _0x53a685.match(/jsonp_.*?\((.*?)\);/) && _0x53a685.match(/jsonp_.*?\((.*?)\);/)[1] || _0x53a685;
        let _0x2f2a25 = $.toObj(_0x53a685, _0x53a685);
        if (_0x2f2a25 && typeof _0x2f2a25 == "object") {
          if (_0x2f2a25 && _0x2f2a25.success === true) {
            console.log("    " + _0x2f2a25.message);
            $.errorJoinShop = _0x2f2a25.message;
            if (_0x2f2a25.result && _0x2f2a25.result.giftInfo) {
              for (let _0x204292 of _0x2f2a25.result.giftInfo.giftList) {
                console.log("入会获得:" + _0x204292.discountString + _0x204292.prizeName + _0x204292.secondLineDesc);
              }
            }
          } else {
            _0x2f2a25 && typeof _0x2f2a25 == "object" && _0x2f2a25.message ? ($.errorJoinShop = _0x2f2a25.message, console.log("" + (_0x2f2a25.message || ""))) : console.log(_0x53a685);
          }
        } else {
          console.log(_0x53a685);
        }
      } catch (_0x1ef65d) {
        $.logErr(_0x1ef65d, _0x7aed2e);
      } finally {
        _0x4b1309();
      }
    });
  });
}
async function bdy_0x55440a() {
  return new Promise(async _0x3d3b2c => {
    const _0x4df16f = {
      venderId: $.joinVenderId,
      payUpShop: true,
      queryVersion: "10.5.2",
      appid: "ef79a",
      needSecurity: true,
      bizId: "shop_view_app",
      channel: 406
    };
    let _0x6b74bb = _0x4df16f;
    const _0x16395e = {
      appId: "ef79a",
      fn: "getShopOpenCardInfo",
      body: _0x6b74bb,
      apid: "jd_shop_member",
      ver: "9.2.0",
      cl: "H5",
      user: $.UserName,
      code: 0,
      ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    _0x6b74bb = await dyy.getbody(_0x16395e);
    const _0x169130 = {
      accept: "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      cookie: bdy_0xb570f7,
      origin: "https://shopmember.m.jd.com/",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    };
    const _0x147376 = {
      url: "https://api.m.jd.com/client.action?" + _0x6b74bb + "&uuid=88888",
      headers: _0x169130,
      timeout: 60000
    };
    $.get(_0x147376, async (_0x5364bb, _0x5ba711, _0x1b620f) => {
      try {
        _0x1b620f = _0x1b620f && _0x1b620f.match(/jsonp_.*?\((.*?)\);/) && _0x1b620f.match(/jsonp_.*?\((.*?)\);/)[1] || _0x1b620f;
        let _0x27b578 = $.toObj(_0x1b620f, _0x1b620f);
        _0x27b578 && typeof _0x27b578 == "object" ? _0x27b578 && _0x27b578.success == true && (console.log("去加入 -> " + (_0x27b578.result[0].shopMemberCardInfo.venderCardName || "")), $.shopactivityId = _0x27b578.result[0].interestsRuleList && _0x27b578.result[0].interestsRuleList[0] && _0x27b578.result[0].interestsRuleList[0].interestsInfo && _0x27b578.result[0].interestsRuleList[0].interestsInfo.activityId || "") : console.log(_0x1b620f);
      } catch (_0x3fbf72) {
        $.logErr(_0x3fbf72, _0x5ba711);
      } finally {
        _0x3d3b2c();
      }
    });
  });
}
function bdy_0x575f97(_0x375fd0, _0x4c7128) {
  return Math.floor(Math.random() * (_0x4c7128 - _0x375fd0)) + _0x375fd0;
}
function bdy_0x23212d(_0x3305c0 = +new Date()) {
  var _0x40acff = new Date(_0x3305c0 + 28800000);
  return _0x40acff.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, "/");
}
function bdy_0x1fa383() {
  return new Promise(_0x224286 => {
    const _0xeaab2b = {
      Cookie: bdy_0xb570f7,
      referer: "https://h5.m.jd.com/",
      "User-Agent": $.UA
    };
    const _0x3f41f7 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: _0xeaab2b,
      timeout: 10000
    };
    $.get(_0x3f41f7, (_0x46b6e3, _0x3ea683, _0x3ea654) => {
      try {
        if (_0x3ea654) {
          _0x3ea654 = JSON.parse(_0x3ea654);
          if (!(_0x3ea654.islogin === "1")) {
            _0x3ea654.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x2534e2) {
        console.log(_0x2534e2);
      } finally {
        _0x224286();
      }
    });
  });
}