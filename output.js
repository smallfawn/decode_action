//Sat Feb 15 2025 13:27:24 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let token = process.env.jd_dpqd_token || "",
  accountThreads = process.env.jd_dpqd_account_threads || "1";
const runInterval = process.env.jd_dpqd_account_interval || "";
let signHotMaxRetryTimes = process.env.jd_dpqd_max_retry || "0";
const isNotify = process.env.jd_dpqd_notify === "true",
  activityUrl = "https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=" + token,
  signStatusMessages = {
    403030023: "今日已签",
    407100001: "活动尚未开始",
    407100002: "活动已经结束",
    407000007: "账号无效",
    402: "活动无效",
    "-1": "服务器繁忙"
  },
  cookiesArr = Object.keys(jdCookie).map(iilII1Il => jdCookie[iilII1Il]).filter(I1IiiIll => I1IiiIll);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  try {
    notify.config({
      "title": $.name
    });
    if (!token) {
      console.log("⚠ 请先定义必要的环境变量后再运行脚本！");
      return;
    }
    $.waitTime = null;
    if (runInterval) try {
      const iiiIii1i = parseInt(runInterval);
      if (iiiIii1i >= 0) {
        $.waitTime = iiiIii1i;
      }
    } catch {
      console.log("⚠ 自定义运行间隔时长设置错误");
    }
    try {
      const iIiI1iI = parseInt(signHotMaxRetryTimes);
      signHotMaxRetryTimes = iIiI1iI > 0 ? iIiI1iI : 0;
    } catch {
      signHotMaxRetryTimes = 3;
    }
    try {
      {
        const iiII111i = parseInt(accountThreads);
        iiII111i > 0 && iiII111i !== 1 && (accountThreads = iiII111i);
      }
    } catch {
      accountThreads = 1;
    }
    await Main();
    isNotify && notify.getMessage() && (await notify.push());
  } catch (iillII1i) {
    console.log("❌ 脚本运行遇到了错误\n" + iillII1i);
  }
})().catch(liiil1li => $.logErr(liiil1li)).finally(() => $.done());
async function Main() {
  let i11illII = true;
  token.includes(":") && token.split(":").length === 3 && (token = token.split(":")[0]);
  if (token.length !== 32 || !/^[A-Z0-9]*$/.test(token)) {
    console.log("❌ 令牌格式错误");
    return;
  }
  $.token = token;
  $.UA = common.genUA("刘强东");
  ({
    jsToken: $.jsToken
  } = await jsTk($.UA, "https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html", {
    "bizId": "SJHT-DPQDH5",
    "v": "3.2.1.0",
    "qs": "token=" + $.token
  }));
  let IiIli1II = 0;
  $.getActivityInfo = "";
  $.invalidAct = false;
  const l11lIIiI = 10;
  while (!$.getActivityInfo && IiIli1II < l11lIIiI && !$.invalidAct) {
    $.getActivityInfo = "";
    await sendRequest("getActivityInfo");
    await $.wait(1000);
    IiIli1II++;
    IiIli1II === l11lIIiI && (console.log($.errMsg || "❌ 获取活动信息失败"), $.errMsg = "");
  }
  if (!$.getActivityInfo) return;
  $.venderId = $.getActivityInfo.venderId;
  $.activityId = $.getActivityInfo.id;
  if (!$.venderId || !$.activityId || $.invalidAct) {
    return;
  }
  const liiIlI1I = $.getActivityInfo.activityStatus,
    ii11lI = $.getActivityInfo.continuePrizeRuleList || [],
    I111lll1 = $.getActivityInfo.prizeRuleList || [],
    II11Iiil = $.getActivityInfo.startTime,
    i11IlII1 = $.getActivityInfo.endTime,
    I1111lil = $.time("yyyy-MM-dd HH:mm", II11Iiil),
    IiIiilIl = $.time("yyyy-MM-dd HH:mm", i11IlII1);
  let IiIill1 = false;
  const I1iII1iI = [],
    lIIl1II = [...I111lll1, ...ii11lI];
  for (const l1Iill of lIIl1II) {
    const IiiilIi1 = l1Iill.level,
      Ii1illii = l1Iill.prizeList || [],
      iilI1iI1 = [];
    for (const IiI1II1l of Ii1illii) {
      {
        let Ili1lliI = "";
        const iI111III = IiI1II1l.discount,
          llllliii = IiI1II1l.type,
          iiI11Iii = IiI1II1l.number,
          liiil1I = IiI1II1l.status,
          iI1li1i = liiil1I === 5;
        switch (llllliii) {
          case 1:
            Ili1lliI = "优惠券";
            break;
          case 4:
            Ili1lliI = iI111III + "京豆";
            break;
          case 6:
            Ili1lliI = iI111III + "店铺积分";
            break;
          case 9:
            Ili1lliI = "" + IiI1II1l?.["interactPrizeSkuList"][0]?.["skuName"];
            break;
          case 10:
            Ili1lliI = iI111III + "元E卡";
            break;
          case 14:
            Ili1lliI = iI111III / 100 + "元红包";
            break;
          default:
            Ili1lliI = "未知奖品（" + llllliii + "）";
        }
        if (![1, 6].includes(llllliii) && !iI1li1i) IiIill1 = true;
        iilI1iI1.push(Ili1lliI + "（共" + iiI11Iii + "份" + (iI1li1i ? "，已发完" : "") + "）");
      }
    }
    I1iII1iI.push({
      "days": IiiilIi1,
      "prize": iilI1iI1,
      "havePrize": IiIill1
    });
  }
  const ll1Ii1 = await common.getShopName({
    "venderId": $.venderId
  });
  console.log((ll1Ii1 ? "店铺名称：#" + ll1Ii1 + "\n" : "") + "开始时间：" + I1111lil + "\n结束时间：" + IiIiilIl);
  notify.appendContent((ll1Ii1 ? "\n【店铺名称】#" + ll1Ii1 : "") + "\n【开始时间】" + I1111lil + "\n【结束时间】" + IiIiilIl);
  I1iII1iI.length > 0 && (console.log(I1iII1iI.map(I1i1lI1 => (I1i1lI1.days === 0 ? "每日签到" : "连续" + (I1i1lI1.days < 10 ? " " : "") + I1i1lI1.days + "天") + "：" + I1i1lI1.prize.join("，")).join("\n")), notify.appendContent("\n" + I1iII1iI.map(IlIIIll1 => "【" + (IlIIIll1.days === 0 ? "每日签到" : "连续" + (IlIIIll1.days < 10 ? " " : "") + IlIIIll1.days + "天") + "】" + IlIIIll1.prize.join("，")).join("\n")));
  console.log("");
  notify.appendContent("\n\n" + activityUrl);
  const I1IIlI1 = Date.now();
  if (II11Iiil && I1IIlI1 < II11Iiil) {
    console.log("活动将在 " + I1111lil + " 开始，晚点再来吧~\n");
    i11illII = false;
  }
  if (i11IlII1 && I1IIlI1 > i11IlII1) console.log("活动已于 " + IiIiilIl + " 结束，下次早点来吧~\n"), i11illII = false;else liiIlI1I === 3 && (console.log("活动已结束\n"), i11illII = false);
  !IiIill1 && (i11illII = false);
  I1iII1iI.length > 0 && ($.minLevel = I1iII1iI[0].days, $.maxLevel = I1iII1iI[I1iII1iI.length - 1].days);
  if (!i11illII) return;
  await common.concTask(accountThreads, cookiesArr, async (ll1liill, Il1iIIii) => {
    await concMain(ll1liill, Il1iIIii);
    if ($.waitTime) await $.wait($.waitTime);
  });
}
async function concMain(iI1i1IiI, l1iIIl1) {
  if ($.runEnd) return {
    "runEnd": true
  };
  const iIili1l = decodeURIComponent(common.getCookieValue(iI1i1IiI, "pt_pin")),
    i1ii1l1 = "【账号" + l1iIIl1 + "】" + iIili1l + "：",
    lI1lili = notify.create(l1iIIl1, iIili1l),
    ll1i1il1 = await common.getLoginStatus(iI1i1IiI);
  if (!ll1i1il1 && typeof ll1i1il1 === "boolean") {
    {
      console.log(i1ii1l1 + "🚫 账号无效");
      lI1lili.fix("账号无效");
      return;
    }
  }
  const iillliI1 = common.genUA(iIili1l),
    {
      jsToken: Il1iIiIl
    } = await jsTk(iillliI1, "https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html", {
      "bizId": "SJHT-DPQDH5",
      "v": "3.2.1.0",
      "qs": "token=" + $.token
    });
  if ($.runEnd) return {
    "runEnd": true
  };
  let iIIl1lI = "",
    ll1ii1i = [],
    Ill1iII1 = false;
  await iiili1Il("signCollectGift");
  if ($.waitTime) await $.wait($.waitTime);
  if (Ill1iII1 && signHotMaxRetryTimes > 0) {
    let I1ili1l1 = 0;
    while (I1ili1l1 < signHotMaxRetryTimes) {
      if ($.runEnd) return {
        "runEnd": true
      };
      await iiili1Il("signCollectGift");
      if (!Ill1iII1) break;
      if ($.waitTime) await $.wait($.waitTime);
      I1ili1l1++;
    }
  }
  if (iIIl1lI) {
    await iiili1Il("getSignRecord");
    const i1IIIl = "" + iIIl1lI + (ll1ii1i.length > 0 ? "（" + ll1ii1i.join("，") + "）" : "");
    console.log("" + i1ii1l1 + i1IIIl);
    lI1lili.fix(i1IIIl.replace("✅", "").replace("❌", "").replace("🚫", "").trim());
  }
  function iIIilIIl(lIliIi1, I1i1i1II) {
    try {
      switch (lIliIi1) {
        case "signCollectGift":
          if (I1i1i1II.code === 200 && I1i1i1II.success === true) {
            const I1I1i1li = [];
            if (I1i1i1II.data && I1i1i1II.data.length > 0) {
              for (const iili1iIl of I1i1i1II.data) {
                {
                  const lI1lIll1 = iili1iIl?.["prizeList"] || [];
                  for (const l11iII1I of lI1lIll1) {
                    const I1i1iii1 = l11iII1I?.["type"],
                      IiiiiIIl = l11iII1I?.["discount"];
                    let i1lilIl = "";
                    switch (I1i1iii1) {
                      case 1:
                        i1lilIl = "优惠券🗑️";
                        break;
                      case 4:
                        i1lilIl = IiiiiIIl + "京豆🐶";
                        break;
                      case 6:
                        i1lilIl = IiiiiIIl + "店铺积分🎟️";
                        break;
                      case 9:
                        i1lilIl = l11iII1I?.["interactPrizeSkuList"][0]?.["skuName"] + "🎁";
                        break;
                      case 10:
                        i1lilIl = IiiiiIIl + "元E卡🎁";
                        break;
                      case 14:
                        i1lilIl = IiiiiIIl / 100 + "元红包🧧";
                        break;
                      default:
                        i1lilIl = "未知奖品（" + I1i1iii1 + "）";
                    }
                    I1I1i1li.push(i1lilIl);
                  }
                }
              }
            }
            iIIl1lI = "✅ 签到成功";
            I1I1i1li.length > 0 && (ll1ii1i = I1I1i1li);
            Ill1iII1 = false;
          } else {
            if (I1i1i1II.code !== 200) {
              const llli11iI = signStatusMessages[I1i1i1II.code] || I1i1i1II.code + "|活动太火爆";
              [407100001, 407100002, 402].includes(I1i1i1II.code) && ($.runEnd = true);
              ll1ii1i = [llli11iI];
              iIIl1lI = "❌ 签到失败";
              (I1i1i1II.code === "-1" || I1i1i1II.code === -1) && (Ill1iII1 = true);
            } else {
              if (I1i1i1II.msg) {
                {
                  iIIl1lI = "❌ 签到失败";
                  ll1ii1i = [I1i1i1II.msg];
                  if (!signStatusMessages[I1i1i1II.code]) Ill1iII1 = true;
                }
              } else iIIl1lI = "❌ 签到失败 - " + JSON.stringify(I1i1i1II);
            }
          }
          break;
        case "getSignRecord":
          if (I1i1i1II.code === 200 && I1i1i1II.success === true && I1i1i1II.data) {
            {
              const liil1lli = I1i1i1II.data.days;
              liil1lli > 0 && $.maxLevel && (ll1ii1i.push("连签" + liil1lli + "天"), $.maxLevel && liil1lli >= $.maxLevel && ll1ii1i.push("已达活动上限"));
            }
          } else {
            if (I1i1i1II.msg) {} else console.log("❓" + lIliIi1 + " " + JSON.stringify(I1i1i1II));
          }
          break;
      }
    } catch (lIi1iIi) {
      console.log("❌ 未能正确处理 " + lIliIi1 + " 请求响应 " + (lIi1iIi.message || lIi1iIi));
    }
  }
  async function iiili1Il(I1lli1i1) {
    let lli11II1 = "",
      i1i1i1il = null,
      IlliIiI = null,
      IlIlIli = "GET",
      ll1l1iIi = {},
      Iiliili1 = {};
    switch (I1lli1i1) {
      case "signCollectGift":
        Iiliili1 = {
          "appId": "4da33",
          "functionId": "interact_center_shopSign_signCollectGift",
          "appid": "interCenter_shopSign",
          "body": {
            "token": $.token,
            "venderId": parseInt($.venderId) || "",
            "activityId": parseInt($.activityId) || "",
            "type": 56,
            "actionType": 7
          },
          "version": "4.4",
          "ua": iillliI1
        };
        ll1l1iIi = await H5st.getH5st(Iiliili1);
        lli11II1 = "https://api.m.jd.com/api";
        IlliIiI = Object.assign({}, ll1l1iIi.paramsData, {
          "jsonp": "jsonp1003"
        });
        break;
      case "getSignRecord":
        lli11II1 = "https://api.m.jd.com/api";
        IlliIiI = {
          "appid": "interCenter_shopSign",
          "functionId": "interact_center_shopSign_getSignRecord",
          "body": JSON.stringify({
            "token": $.token,
            "venderId": parseInt($.venderId) || "",
            "activityId": parseInt($.activityId) || "",
            "type": 56
          }),
          "jsonp": "jsonp1001"
        };
        break;
    }
    const lli1l1Ii = {
      "t": Math.floor(Date.now() / 1000) + "000",
      "loginType": "2",
      "x-api-eid-token": Il1iIiIl
    };
    i1i1i1il && Object.assign(i1i1i1il, lli1l1Ii);
    IlliIiI && Object.assign(IlliIiI, lli1l1Ii);
    const i1I1llil = {
      "url": lli11II1,
      "method": IlIlIli,
      "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "text/plain",
        "Host": "api.m.jd.com",
        "Referer": activityUrl,
        "Sec-Fetch-Dest": "script",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": iillliI1,
        "Cookie": iI1i1IiI
      },
      "params": IlliIiI,
      "data": i1i1i1il,
      "timeout": 30000
    };
    IlIlIli === "GET" && (delete i1I1llil.data, delete i1I1llil.headers["Content-Type"]);
    const lllIiI1i = 3;
    let lili1111 = 0,
      I1llll11 = null,
      l11I11ii = false;
    while (lili1111 < lllIiI1i) {
      const IIlIlllI = await common.request(i1I1llil);
      if (!IIlIlllI.success) {
        {
          I1llll11 = I1lli1i1 + " ➜ 请求失败（" + IIlIlllI.error + "）🚫";
          lili1111++;
          continue;
        }
      }
      if (!IIlIlllI.data) {
        I1llll11 = I1lli1i1 + " ➜ 请求失败（无响应数据）🚫";
        lili1111++;
        continue;
      }
      iIIilIIl(I1lli1i1, IIlIlllI.data);
      l11I11ii = false;
      break;
    }
    lili1111 >= lllIiI1i && (console.log(I1llll11), l11I11ii && ($.outFlag = true));
  }
}
async function handleResponse(iI11IliI, i11Il1I1) {
  try {
    switch (iI11IliI) {
      case "getActivityInfo":
        if (i11Il1I1.code === 200 && i11Il1I1.success === true && i11Il1I1.data) {
          $.getActivityInfo = i11Il1I1.data;
        } else i11Il1I1.msg ? (console.log("🚫 查询活动信息失败 ➜ " + i11Il1I1.msg), $.invalidAct = true) : (console.log("❓" + iI11IliI + " " + JSON.stringify(i11Il1I1)), $.invalidAct = true);
        break;
    }
  } catch (iI1iIlI) {
    console.log("❌ 未能正确处理 " + iI11IliI + " 请求响应 " + (iI1iIlI.message || iI1iIlI));
  }
}
async function sendRequest(i1IIiii1) {
  if ($.runEnd) return;
  let l1i1li1I = "",
    illll = null,
    illI1i1 = null,
    I11ill1i = "GET",
    l11ilIIl = {},
    iIlIil1I = {};
  switch (i1IIiii1) {
    case "getActivityInfo":
      iIlIil1I = {
        "appId": "4da33",
        "functionId": "interact_center_shopSign_getActivityInfo",
        "appid": "interCenter_shopSign",
        "body": {
          "token": $.token,
          "venderId": ""
        },
        "version": "4.4",
        "ua": $.UA
      };
      l11ilIIl = await H5st.getH5st(iIlIil1I);
      l1i1li1I = "https://api.m.jd.com/api";
      illI1i1 = Object.assign({}, l11ilIIl.paramsData, {
        "jsonp": "jsonp1003"
      });
      break;
    default:
      console.log("❌ 未知请求 " + i1IIiii1);
      return;
  }
  const lliIlii = {
    "t": Math.floor(Date.now() / 1000) + "000",
    "loginType": "2",
    "x-api-eid-token": $.jsToken
  };
  illll && Object.assign(illll, lliIlii);
  illI1i1 && Object.assign(illI1i1, lliIlii);
  const IlIiil1l = {
    "url": l1i1li1I,
    "method": I11ill1i,
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh-Hans;q=0.9",
      "Connection": "keep-alive",
      "Content-Type": "text/plain",
      "Host": "api.m.jd.com",
      "Referer": activityUrl,
      "Sec-Fetch-Dest": "script",
      "Sec-Fetch-Mode": "no-cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": $.UA
    },
    "params": illI1i1,
    "data": illll,
    "timeout": 30000,
    "httpsTlsOptions": common.useAppTls()
  };
  I11ill1i === "GET" && (delete IlIiil1l.data, delete IlIiil1l.headers["Content-Type"]);
  const llil1i1l = 1;
  let I1IliiI = 0,
    ii11Il11 = null,
    i11llIii = null;
  while (I1IliiI < llil1i1l) {
    {
      I1IliiI > 0 && (await $.wait(2000));
      const l1ii1ii1 = await common.request(IlIiil1l);
      if (!l1ii1ii1.success) {
        {
          i11llIii = l1ii1ii1.status;
          ii11Il11 = "🚫 " + i1IIiii1 + " 请求失败 ➜ " + l1ii1ii1.error;
          I1IliiI++;
          continue;
        }
      }
      if (!l1ii1ii1.data) {
        {
          ii11Il11 = "🚫 " + i1IIiii1 + " 请求失败 ➜ 无响应数据";
          I1IliiI++;
          continue;
        }
      }
      await handleResponse(i1IIiii1, l1ii1ii1.data);
      ipBlack = false;
      break;
    }
  }
  I1IliiI >= llil1i1l && ($.errMsg = ii11Il11, i11llIii !== 403 && console.log(ii11Il11));
}