//Mon Jan 06 2025 06:35:32 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon.js"),
  getToken = require("./utils/Rebels_Token.js"),
  {
    wuxian_savePrize
  } = require("./utils/Rebels_savePrize.js");
console.log("");
console.log("==========" + $.name + "变量说明==========");
console.log("jd_opencard_shopleague_id // 活动ID");
console.log("jd_opencard_viewShop // 是否（true/false）做浏览任务，默认不做");
console.log("jd_opencard_break // IP限制后继续执行（true/false）");
console.log("==========" + $.name + "提示结束==========");
console.log("");
let domains = "https://lzdz1-isv.isvjcloud.com",
  activityId = process.env.jd_opencard_shopleague_id || "";
const hotbreak = process.env.jd_opencard_break === "true",
  opencard_draw = process.env.jd_opencard_draw || 3,
  opencard_wait = process.env.jd_opencard_wait || "1",
  opencard_viewShop = process.env.jd_opencard_viewShop === "true",
  isNotify = process.env.jd_opencard_notify === "true";
let waitTimes = parseInt(opencard_wait) * 1000,
  cookie = "",
  activityCookie = "",
  originCookie = "";
const cookiesArr = Object.keys(jdCookie).map(ilI1lI => jdCookie[ilI1lI]).filter(IiiIll => IiiIll);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  if (!activityId) {
    authorIDList = await getAuthorCodeList("http://code.257999.xyz/opencard_shopleague.json");
    if (authorIDList.length > 0) $.activityId = authorIDList[random(0, authorIDList.length)], console.log("✅ 获取数据成功：" + $.activityId + "\n");else {
      console.log("⚠ 请先定义必要的环境变量后再运行脚本\n");
      return;
    }
  }
  authorCodeList = await getAuthorCodeList("http://code.257999.xyz/opencard_shopleague_code.json");
  authorCodeList ? (console.log("✅ 服务状态正常，活动获取成功"), $.authorCode = authorCodeList[random(0, authorCodeList.length)]) : console.log("⚠ 服务状态异常，请检查网站是否正常");
  if (activityId) $.activityId = activityId;
  $.shareUuid = $.authorCode;
  $.activityUrl = "https://lzdz1-isv.isvjcloud.com/dingzhi/shop/league/activity?activityId=" + $.activityId + "&shareUuid=" + $.shareUuid;
  notify.config({
    "title": $.name
  });
  for (let ilI1ll = 0; ilI1ll < cookiesArr.length; ilI1ll++) {
    $.index = ilI1ll + 1;
    cookie = cookiesArr[ilI1ll];
    originCookie = cookiesArr[ilI1ll];
    common.setCookie(cookie);
    $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
    $.UA = common.genUA($.UserName);
    $.message = notify.create($.index, $.UserName);
    $.nickName = "";
    console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
    await run();
    common.unsetCookie();
    if ($.outFlag || $.activityEnd) break;
    await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
  }
  isNotify && notify.getMessage() && (notify.appendContent("\n"), await notify.push());
})().catch(Iillii => $.logErr(Iillii)).finally(() => $.done());
async function run() {
  try {
    $.skipRun = false;
    $.open_draw = false;
    $.hasEnd = true;
    $.drawStop = false;
    $.endTime = 0;
    $.Token = "";
    $.Pin = "";
    $.venderId = "";
    $.Token = await getToken(cookie, domains);
    if ($.Token == "") {
      console.log("缺少必要参数，请重新运行");
      return;
    }
    await getCk();
    if (activityCookie == "") {
      console.log("缺少必要参数，请重新运行");
      return;
    }
    if ($.activityEnd === true) return;
    if ($.outFlag) {
      console.log("IP被限制（493）\n");
      return;
    }
    await takePostRequest("init");
    if ($.venderId == "") {
      console.log("缺少必要参数，请重新运行");
      return;
    }
    await $.wait(500);
    await takePostRequest("getMyCidPing");
    if (!$.Pin) {
      console.log("获取用户信息失败，请重新运行");
      return;
    }
    await $.wait(500);
    await takePostRequest("accessLogWithAD");
    await $.wait(500);
    await takePostRequest("activityContent");
    if ($.hotFlag || $.activityEnd) return;
    if (!$.actorUuid) {
      console.log("获取不到[actorUuid]退出执行，请重新执行");
      return;
    }
    if ($.hasEnd === true || Date.now() > $.endTime) {
      $.activityEnd = true;
      console.log("活动结束");
      return;
    }
    await takePostRequest("drawContent");
    await $.wait(parseInt(waitTimes * 1 + 500, 10));
    if (!$.hasGetBasicInfo) {
      $.hasGetBasicInfo = true;
      const I11iIi = $.time("yyyy-MM-dd HH:mm", $.startTime),
        I1ilII = $.time("yyyy-MM-dd HH:mm", $.endTime);
      console.log(($.activityName && "活动名称：#" + $.activityName + "\n") + "开始时间：" + I11iIi + "\n结束时间：" + I1ilII + "\n");
      const I11iIl = Date.now();
      if ($.startTime && I11iIl < $.startTime) {
        console.log("活动将在 " + I11iIi + " 开始，晚点再来吧~");
        $.activityEnd = true;
        return;
      }
      if ($.endTime && I11iIl > $.endTime) {
        console.log("活动已于 " + I1ilII + " 结束，下次早点来吧~");
        $.activityEnd = true;
        return;
      }
    }
    console.log("助力码：" + $.actorUuid);
    for (let l1l11l in $.activityContent) {
      if ($.activityContent[l1l11l]?.["allStatus"] === true) continue;
      switch (l1l11l) {
        case "followShop":
          $.taskType = 1, $.taskValue = 1, $.taskname = "一键关注", await takePostRequest("saveTask"), await $.wait(parseInt(waitTimes * 1 + 500, 10));
          break;
        case "addSku":
          $.taskType = 2, $.taskValue = 2, $.taskname = "一键加购", await takePostRequest("saveTask"), await $.wait(parseInt(waitTimes * 1 + 500, 10));
          break;
        case "mainActive":
          if (opencard_viewShop) for (let IilIil of ($.activityContent[l1l11l]?.["settings"] || []).filter(l1iIi => l1iIi.status == 0)) {
            $.mainActiveType = IilIil.type;
            $.mainActiveValue = IilIil.value || IilIil.value2;
            $.mainActiveName = IilIil.name;
            await takePostRequest("startVisitTask");
            await $.wait(6 * 1000);
            $.taskType = $.mainActiveType;
            $.taskValue = $.mainActiveValue;
            $.taskname = $.mainActiveName;
            await takePostRequest("saveTask");
            await $.wait(parseInt(waitTimes * 1 + 500, 10));
          }
          break;
      }
    }
    await takePostRequest("checkOpenCard");
    if ($.checkOpenCard?.["allOpenCard"] != true) {
      let illIll = ($.checkOpenCard?.["cardList"] || []).filter(iIli1I => iIli1I.status == 0);
      console.log("共有" + $.checkOpenCard?.["cardList"]["length"] + "张卡,还需开" + illIll.length + "张卡");
      for (let Iiil1 of ($.checkOpenCard?.["cardList"] || []).filter(iiilli => iiilli.status == 0)) {
        $.openUrl = Iiil1.toUrl;
        $.openName = Iiil1.name;
        $.joinVenderId = common.getUrlParameter($.openUrl, "venderId");
        (!$.openUrl || !/^\d+$/.test($.joinVenderId)) && ($.joinVenderId = Iiil1.value || Iiil1.venderId);
        const l1iIIl = await common.joinShopMember($.joinVenderId);
        if (l1iIIl) console.log("加入[" + $.openName + "]店铺会员成功"), await $.wait(parseInt(Math.random() * 1000 + 1000, 10));else {
          console.log("[" + $.openName + "]店铺开卡失败,跳过执行~");
          return;
        }
        await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      }
      await takePostRequest("checkOpenCard");
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
    }
    if (opencard_draw && !$.drawStop && $.open_draw) {
      let iiilll = parseInt($.score / 1000),
        lI11Il = Math.min(opencard_draw, iiilll);
      console.log("已设置抽奖" + opencard_draw + "次，共有" + iiilll + "次抽奖,可抽奖" + lI11Il + "次");
      for (m = 1; lI11Il--; m++) {
        console.log("第" + m + "次抽奖");
        await takePostRequest("startDraw");
        if (Number(lI11Il) <= 0) break;
        if (m >= 10) {
          console.log("抽奖太多次，多余的次数请再执行脚本");
          break;
        }
        await $.wait(parseInt(Math.random() * 2000 + 2000, 10));
      }
    }
    await $.wait(parseInt(waitTimes * 1 + 500, 10));
    await takePostRequest("getDrawRecordHasCoupon");
    if ($.outFlag) {
      console.log("此ip已被限制，请过10分钟后再执行脚本\n");
      return;
    }
    console.log("当前助力:" + $.shareUuid);
    $.index == 1 && ($.shareUuid = $.actorUuid, console.log("后面的号都会助力:" + $.shareUuid));
    if ($.index % 3 == 0) await $.wait(parseInt(waitTimes * 1 + 2000, 10));
  } catch (lIII1i) {
    console.log(lIII1i);
  }
}
async function takePostRequest(l11i11) {
  if ($.outFlag) return;
  let lIII1l = "",
    l1iIIi = null,
    lilIl = "POST";
  switch (l11i11) {
    case "init":
      lIII1l = domains + "/dingzhi/taskact/common/init", l1iIIi = "activityId=" + $.activityId + "&dzActivityType=0&adSource=&pin=";
      break;
    case "getMyCidPing":
      lIII1l = domains + "/customer/getMyCidPing", l1iIIi = "activityId=" + $.activityId + "&token=" + $.Token + "&fromType=APP_shopGift&userId=" + $.venderId + "&pin=";
      break;
    case "accessLogWithAD":
      lIII1l = domains + "/common/accessLogWithAD";
      let IiI1 = domains + "/dingzhi/shop/league/activity?activityId=" + $.activityId + "&shareUuid=" + $.shareUuid;
      l1iIIi = "venderId=" + $.venderId + "&code=99&pin=" + encodeURIComponent($.Pin) + "&activityId=" + $.activityId + "&pageUrl=" + encodeURIComponent(IiI1) + "&subType=app&adSource=";
      break;
    case "activityContent":
      lIII1l = domains + "/dingzhi/shop/league/activityContent", l1iIIi = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&pinImg=" + encodeURIComponent("https://img10.360buyimg.com/imgzone/jfs/t1/7020/27/13511/6142/5c5138d8E4df2e764/5a1216a3a5043c5d.png") + "&nick=" + encodeURIComponent($.nickname) + "&shareUuid=" + $.shareUuid;
      break;
    case "drawContent":
      lIII1l = domains + "/dingzhi/taskact/common/drawContent", l1iIIi = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "checkOpenCard":
      lIII1l = domains + "/dingzhi/shop/league/checkOpenCard", l1iIIi = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin) + "&shareUuid=" + $.shareUuid;
      break;
    case "startDraw":
      lIII1l = domains + "/dingzhi/shop/league/startDraw", l1iIIi = "activityId=" + $.activityId + "&actorUuid=" + $.actorUuid + "&pin=" + encodeURIComponent($.Pin);
      break;
    case "saveTask":
      lIII1l = domains + "/dingzhi/shop/league/saveTask", l1iIIi = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid + "&shareUuid=" + $.shareUuid + "&taskType=" + $.taskType + "&taskValue=" + $.taskValue;
      if ($.mainActiveType) l1iIIi += "&taskUuid=" + $.taskUuid;
      break;
    case "startVisitTask":
      lIII1l = domains + "/dingzhi/common/visitTask/startVisitTask", l1iIIi = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid + "&taskType=" + $.mainActiveType + "&taskValue=" + $.mainActiveValue;
      break;
    case "getDrawRecordHasCoupon":
      lIII1l = domains + "/dingzhi/taskact/common/getDrawRecordHasCoupon", l1iIIi = "activityId=" + $.activityId + "&pin=" + encodeURIComponent($.Pin) + "&actorUuid=" + $.actorUuid;
      break;
    default:
      console.log("错误" + l11i11);
  }
  const IilIlI = {
    "url": lIII1l,
    "method": lilIl,
    "headers": {
      "Accept": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      "Connection": "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      "Cookie": activityCookie.trim(),
      "User-Agent": $.UA,
      "X-Requested-With": "XMLHttpRequest",
      "Origin": "https://lzdz1-isv.isvjcloud.com/",
      "Referer": $.activityUrl
    },
    "data": l1iIIi,
    "timeout": 20000
  };
  lilIl === "GET" && (delete IilIlI.body, delete IilIlI.headers["Content-Type"]);
  const iIli11 = 5;
  let Iiiil = 0,
    Iiiii = null,
    l11i1I = false;
  while (Iiiil < iIli11) {
    Iiiil > 0 && (await $.wait(1000));
    const liI = await common.request(IilIlI);
    if (!liI.success) {
      Iiiii = l11i11 + " 请求失败 ➜ " + liI.error;
      Iiiil++;
      liI.status && [403, 493].includes(liI.status) && (l11i1I = true);
      continue;
    }
    if (["accessLog", "accessLogWithAD"].includes(l11i11)) break;
    if (!liI.data && !["drawContent"].includes(l11i11)) {
      Iiiii = l11i11 + " 请求失败 ➜ 无响应数据";
      Iiiil++;
      continue;
    }
    const illIli = common.getResponseCookie(liI, activityCookie);
    let l11i1l = "";
    switch (l11i11) {
      case "getMyCidPing":
        l11i1l = common.getCookieValue(illIli, "LZ_AES_PIN");
        l11i1l ? $.LZ_AES_PIN = l11i1l : (console.log("获取 LZ_AES_PIN 失败！"), $.skipRun = true);
        break;
    }
    ["getMyCidPing", "checkOpenCard"].includes(l11i11) && (activityCookie = illIli);
    l11i1l = common.getCookieValue(activityCookie, "LZ_AES_PIN");
    !l11i1l && $.LZ_AES_PIN && (activityCookie += "LZ_AES_PIN=" + $.LZ_AES_PIN + "; ");
    const lIII11 = common.getCookieValue(activityCookie, "LZ_TOKEN_KEY");
    !lIII11 && $.LZ_TOKEN_KEY && (activityCookie += "LZ_TOKEN_KEY=" + $.LZ_TOKEN_KEY + "; ");
    const IiilI = common.getCookieValue(activityCookie, "LZ_TOKEN_VALUE");
    !IiilI && $.LZ_TOKEN_VALUE && (activityCookie += "LZ_TOKEN_VALUE=" + $.LZ_TOKEN_VALUE + "; ");
    await handleResponse(l11i11, liI.data);
    l11i1I = false;
    break;
  }
  Iiiil >= iIli11 && (console.log(Iiiii), l11i1I && !hotbreak && ($.outFlag = true));
}
async function handleResponse(ii1I11, liIi1) {
  try {
    switch (ii1I11) {
      case "init":
        if (typeof liIi1 == "object") {
          if (liIi1.result && liIi1.result === true) {
            $.shopId = liIi1.data?.["shopId"];
            $.venderId = liIi1.data?.["venderId"];
            $.startTime = liIi1.data?.["startTime"];
            $.endTime = liIi1.data?.["endTime"];
            $.activityType = liIi1.data?.["activityType"];
          } else liIi1.errorMessage ? console.log("" + (liIi1.errorMessage || "")) : console.log("" + liIi1);
        } else console.log("" + JSON.stringify(liIi1));
        break;
      case "getMyCidPing":
        if (typeof liIi1 == "object") {
          if (liIi1.result && liIi1.result === true) {
            if (liIi1.data && typeof liIi1.data?.["secretPin"] != "undefined") $.Pin = liIi1.data?.["secretPin"];
            if (liIi1.data && typeof liIi1.data?.["nickname"] != "undefined") $.nickname = liIi1.data?.["nickname"];
          } else liIi1.errorMessage ? console.log("" + (liIi1.errorMessage || "")) : console.log("" + liIi1);
        } else console.log("" + JSON.stringify(liIi1));
        break;
      case "activityContent":
        if (typeof liIi1 == "object") {
          if (liIi1.result && liIi1.result === true) {
            $.activityContent = liIi1?.["data"];
            $.endTime = $.activityContent?.["endTime"] || $.activityContent?.["activityVo"] && $.activityContent?.["activityVo"]?.["endTime"] || $.activityContent?.["activity"]?.["endTime"] || 0;
            $.activityName = $.activityContent?.["activityName"] || "";
            $.hasEnd = $.activityContent?.["hasEnd"] || false;
            $.actorUuid = $.activityContent?.["actorUuid"] || "";
            $.followShop = $.activityContent?.["followShop"]?.["allStatus"] || false;
            $.addSku = $.activityContent?.["addSku"]?.["allStatus"] || false;
            liIi1?.["data"]?.["followShop"] && liIi1?.["data"]?.["followShop"]?.["settings"] && liIi1?.["data"]?.["followShop"]?.["settings"][0] && ($.followShopValue = liIi1?.["data"]?.["followShop"]?.["settings"][0]["value"] || 1);
            liIi1?.["data"]?.["addSku"] && liIi1?.["data"]?.["addSku"]?.["settings"] && liIi1?.["data"]?.["addSku"]?.["settings"][0] && ($.addSkuValue = liIi1?.["data"]?.["addSku"]?.["settings"][0]["value"] || 2);
          } else liIi1.errorMessage ? (console.log("" + (liIi1.errorMessage || "")), ["结束"].some(ii1I1i => liIi1.errorMessage.includes(ii1I1i)) && ($.activityEnd = true)) : console.log(ii1I11 + " " + liIi1);
        } else console.log("" + JSON.stringify(liIi1));
        break;
      case "checkOpenCard":
        if (typeof liIi1 == "object") {
          if (liIi1.result && liIi1.result === true) {
            $.checkOpenCard = liIi1?.["data"];
            $.score = $.checkOpenCard?.["drawScore"] || 0;
            if ($.checkOpenCard?.["allOpenCard"] == true) {
              console.log("已全部开卡, 共邀请了" + $.checkOpenCard?.["beanNum"] + "人");
              switch ($.checkOpenCard?.["assistStatus"]) {
                case "":
                case undefined:
                case -1:
                  console.log("助力码未填写或填写错误");
                  break;
                case 0:
                  break;
                case 1:
                  console.log("✅ 助力成功");
                  break;
                case 2:
                case 10:
                  console.log("已经助力过了哟~");
                  break;
                case 3:
                case 11:
                  console.log("已助力其他人~");
                  break;
                case 20:
                  console.log("未全部开卡");
                  break;
                case 21:
                  console.log("未全部开卡和关注");
                  break;
                case 22:
                  console.log("不是新会员");
                  break;
                case 77:
                  console.log("不能助力自己");
                  break;
                case 88:
                  console.log("未加入会员并关注店铺");
                  break;
                case 99:
                  console.log("未加入会员");
                  break;
                default:
                  console.log("未知助力返回码-" + $.checkOpenCard?.["assistStatus"]);
                  break;
              }
              return;
            }
          } else liIi1.errorMessage ? console.log(ii1I11 + " " + (liIi1.errorMessage || "")) : console.log(ii1I11 + " " + liIi1);
        } else console.log(ii1I11 + " " + liIi1);
        break;
      case "saveTask":
        if (typeof liIi1 == "object") {
          if (liIi1.result && liIi1.result === true) {
            let llI = "完成" + $.taskname + "任务成功";
            liIi1?.["data"]?.["addBeanNum"] > 0 && (llI += "," + (liIi1?.["data"]?.["addBeanNum"] || 0) + "京豆");
            liIi1?.["data"]?.["addScore"] > 0 && (llI += "," + (liIi1?.["data"]?.["addScore"] || 0) + "金币");
            liIi1?.["data"]?.["assistStatus"] === 1 && (llI += ",助力成功 ✅");
            console.log(llI);
          } else liIi1.errorMessage ? console.log("" + (liIi1.errorMessage || "")) : console.log("" + liIi1);
        } else console.log("" + JSON.stringify(liIi1));
        break;
      case "startVisitTask":
        if (typeof liIi1 == "object") {
          if (liIi1.result && liIi1.result === true) $.VisitStartTime = liIi1?.["data"]["startTime"], $.taskUuid = liIi1?.["data"]?.["taskUuid"] || "";else liIi1.errorMessage ? console.log("" + (liIi1.errorMessage || "")) : console.log("" + liIi1);
        } else console.log("" + JSON.stringify(liIi1));
        break;
      case "startDraw":
        if (typeof liIi1 == "object") {
          if (liIi1.result && liIi1.result === true) {
            if (liIi1.data?.["wdsrvo"]?.["drawState"]) {
              const llliI = liIi1.data?.["wdsrvo"];
              if (llliI) switch (llliI.drawType) {
                case 6:
                  console.log("🎉 " + llliI.drawName + " 🐶");
                  break;
                case 7:
                  const iI1li1 = liIi1?.["data"]?.["addressId"],
                    lllii1 = llliI.drawName;
                  console.log("🎉 恭喜获得实物~"), console.log("奖品名称：" + lllii1), console.log("参考价值：" + (llliI.priceInfo || 999) + "（元）");
                  if (llliI.drawImg) console.log("预览图片：" + llliI.drawImg);
                  const liIli = {
                      "baseUrl": domains,
                      "cookie": activityCookie,
                      "ua": $.UA,
                      "activityId": $.activityId,
                      "activityType": 99,
                      "venderId": [$.venderId, $.shopId],
                      "secretPin": $.Pin,
                      "prizeName": lllii1,
                      "generateId": iI1li1,
                      "activityUrl": $.activityUrl
                    },
                    liIll = await wuxian_savePrize(liIli);
                  liIll && (await notify.sendNotify($.name + "中奖通知", "【京东账号" + $.index + "】" + $.nickName + "\n抽中实物 " + lllii1 + "，已成功自动登记收货地址\n\n" + $.activityUrl));
                  break;
                case 8:
                  console.log("🗑️ 专享价");
                  break;
                case 9:
                  console.log("🗑️ " + llliI.drawName + " 🎟️");
                  break;
                case 13:
                case 14:
                case 15:
                  console.log("🎉 恭喜获得" + llliI.drawName + " 🎁"), await notify.sendNotify($.name + "中奖通知", "【京东账号" + $.index + "】" + $.nickName + "\n抽中 " + llliI.drawName + "\n\n" + $.activityUrl);
                  break;
                case 16:
                  console.log("🎉 " + llliI.priceInfo + " 🧧");
                  break;
                default:
                  llliI.drawName.includes("券") ? console.log("🗑️ 优惠券") : console.log("获得：" + llliI.drawName);
                  break;
              }
            } else console.log("💨 空气");
          } else {
            if (liIi1.errorMessage) {
              $.drawError = liIi1.errorMessage;
              ["上限", "不足", "超过", "非法操作", "明天"].some(IilIiI => $.drawError.includes(IilIiI)) && ($.drawStop = true, console.log($.drawError));
              ["未开始", "结束", "不存在", "不在"].some(l1lIiI => $.drawError.includes(l1lIiI)) && ($.activityEnd = true);
              ["会员", "开卡"].some(i1i1I1 => $.drawError.includes(i1i1I1)) && ($.needJoinMember = true, console.log($.drawError));
              !["火爆", "擦肩", "缓存", "数据忙"].some(llliiI => $.drawError.includes(llliiI)) && !$.drawStop && !$.needJoinMember && console.log($.drawError || "");
            }
          }
        } else console.log("❓" + ii1I11 + " " + JSON.stringify(liIi1));
        break;
      case "getDrawRecordHasCoupon":
        if (typeof liIi1 == "object") {
          if (liIi1.result && liIi1.result === true) {
            if (liIi1.data.length > 0) {
              let IlII1 = [];
              for (let IiI11 in liIi1.data) {
                let lli = liIi1.data[IiI11];
                IlII1.push("" + lli.infoName);
              }
              IlII1.length && console.log("我的奖品: " + IlII1.join(", ") + "\n");
            } else console.log("暂未获得任何奖励");
          } else liIi1.errorMessage ? console.log(ii1I11 + " " + (liIi1.errorMessage || "")) : console.log(ii1I11 + " " + data);
        } else console.log(ii1I11 + " " + data);
        break;
      case "accessLogWithAD":
      case "drawContent":
        break;
      default:
        console.log(ii1I11 + "-> " + liIi1);
    }
    typeof liIi1 == "object" && liIi1.errorMessage && liIi1.errorMessage.indexOf("火爆") > -1 && ($.hotFlag = true);
  } catch (liIlI) {
    console.log(liIlI);
  }
}
async function getCk() {
  $.skipRun = true;
  const llli1 = {
      "url": $.activityUrl,
      "method": "GET",
      "headers": {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "cross-site",
        "Referer": $.activityUrl,
        "User-Agent": $.UA
      },
      "timeout": 30000
    },
    iIli1i = 3;
  let iI1lii = 0,
    IilIii = null,
    iI1lil = false;
  while (iI1lii < iIli1i) {
    iI1lii > 0 && (await $.wait(1000));
    const il1i1I = await common.request(llli1);
    if (!il1i1I.success) {
      IilIii = "🚫 " + type + " 请求失败 ➜ " + il1i1I.error;
      iI1lii++;
      il1i1I.status && [403, 493].includes(il1i1I.status) && (iI1lil = true);
      continue;
    }
    if (!il1i1I.data) {
      IilIii = "getCk ➜ 无响应数据";
      iI1lii++;
      continue;
    }
    il1i1I.data.match(/(活动已经结束)/) && il1i1I.data.match(/(活动已经结束)/)[1] && ($.activityEnd = true, console.log("活动已结束或不存在"));
    activityCookie = common.getResponseCookie(il1i1I);
    let lI1li1 = "",
      iI11II = "";
    lI1li1 = common.getCookieValue(activityCookie, "LZ_TOKEN_KEY");
    iI11II = common.getCookieValue(activityCookie, "LZ_TOKEN_VALUE");
    lI1li1 && ($.LZ_TOKEN_KEY = lI1li1);
    iI11II && ($.LZ_TOKEN_VALUE = iI11II);
    $.skipRun = false;
    break;
  }
  iI1lii >= iIli1i && (console.log(IilIii), iI1lil && !hotbreak && ($.outFlag = true));
}
async function getAuthorCodeList(iIII1I) {
  const IlIIi = await common.request({
      "url": iIII1I,
      "method": "GET",
      "headers": {
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88"
      },
      "proxy": null,
      "debug": false,
      "timeout": 30000
    }),
    IiI1l = IlIIi.data;
  return IiI1l;
}
function random(illlII, iIII11) {
  return Math.floor(Math.random() * (iIII11 - illlII)) + illlII;
}