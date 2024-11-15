//Fri Nov 15 2024 13:53:18 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const activityUrl = process.env.jd_completeInfoActivity_activityUrl || "",
  joinMember = process.env.jd_completeInfoActivity_joinMember === "true",
  isNotify = process.env.jd_completeInfoActivity_notify === "true";
let cookie = "",
  activityCookie = "",
  originCookie = "";
const cookiesArr = Object.keys(jdCookie).map(IliIlIi => jdCookie[IliIlIi]).filter(li1I1Ill => li1I1Ill);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  if (!activityUrl) {
    console.log("⚠ 请先定义必要的环境变量后再运行脚本");
    return;
  }
  const I1liI = common.parseUrl(activityUrl);
  if (!I1liI) {
    console.log("⚠ 请填写格式正确的链接");
    return;
  }
  $.activityUrl = activityUrl;
  $.activityId = common.getUrlParameter(activityUrl, "activityId");
  $.venderId = common.getUrlParameter(activityUrl, "venderId");
  $.hostname = I1liI?.["hostname"];
  $.hostname && ($.baseUrl = "https://" + $.hostname, $.origin = $.baseUrl);
  if (!$.activityId || !$.hostname) {
    console.log("⚠ 请填写格式正确的变量");
    return;
  }
  notify.config({
    "title": $.name
  });
  console.log("活动入口：" + $.activityUrl);
  for (let liIiii1i = 0; liIiii1i < cookiesArr.length; liIiii1i++) {
    $.index = liIiii1i + 1;
    cookie = cookiesArr[liIiii1i];
    originCookie = cookiesArr[liIiii1i];
    common.setCookie(cookie);
    $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
    $.UA = common.genUA($.UserName);
    $.UUID = common.genUuid("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    $.te = Math.floor(Math.random() * 9000) + 1000;
    $.message = notify.create($.index, $.UserName);
    $.nickName = "";
    console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
    await Main();
    common.unsetCookie();
    if ($.outFlag || $.runEnd) break;
  }
  isNotify && notify.getMessage() && (notify.updateContent(notify.content + ("\n【活动地址】" + $.activityUrl)), await notify.push());
})().catch(ll1IlIl => $.logErr(ll1IlIl)).finally(() => $.done());
async function Main() {
  try {
    $.skipRun = false;
    $.isMember = false;
    $.needJoinMember = false;
    $.secretPin = "";
    $.pinToken = "";
    $.LZ_AES_PIN = "";
    activityCookie = "";
    if ($.skipRun || $.runEnd || $.outFlag) return;
    await getFirstLZCK($.activityUrl);
    await $.wait(500);
    if ($.skipRun) {
      console.log("获取 LZ_TOKEN 失败！");
      $.message.fix("获取[LZ_TOKEN]失败");
      return;
    }
    if ($.outFlag || $.runEnd) return;
    $.token = await getToken(originCookie, $.baseUrl);
    if (!$.token) {
      console.log("获取 Token 失败！");
      $.message.fix("获取[Token]失败");
      return;
    }
    await sendRequest("initPinToken");
    if ($.runEnd || $.skipRun || $.outFlag) return;
    if (!$.pinToken) {
      console.log("获取 pinToken 失败！");
      $.message.fix("获取[pinToken]失败");
      return;
    }
    await $.wait(1000);
    $.formatPin = encodeURIComponent(encodeURIComponent($.secretPin));
    await sendRequest("accessLog");
    await $.wait(500);
    if ($.index === 1) {
      await sendRequest("listDrawContent");
      await $.wait(1000);
      await sendRequest("getShopInfoVO");
      if ($.outFlag || $.skipRun || $.runEnd) return;
      let lI1iiil1 = false,
        lIiIIIl1 = "",
        I1i1iii1 = "";
      if ($.listDrawContent) {
        const iiilI1iI = $.listDrawContent[0];
        I1i1iii1 = iiilI1iI.name;
        const liliiiI1 = iiilI1iI.prizeType,
          II1lI11 = iiilI1iI.hasSendPrizeNum,
          lll1iI = iiilI1iI.size,
          l1illl1l = lll1iI - II1lI11;
        lI1iiil1 = l1illl1l > 0;
        $.drawInfoId = iiilI1iI.drawInfoId;
        lIiIIIl1 = "" + I1i1iii1 + (liliiiI1 === 8 ? "[专享价]" : liliiiI1 === 7 ? "[实物]" : "") + "(剩余" + l1illl1l + "份)";
        if (iiilI1iI.hasSendPrizeNum < iiilI1iI.size) lI1iiil1 = true;
      }
      console.log(($.shopName && "店铺名称：#" + $.shopName + "\n") + "店铺链接：https://shop.m.jd.com/?venderId=" + $.venderId + "\n活动奖品：" + (lIiIIIl1 || "未获取到奖品信息") + "\n");
      notify.updateContent(notify.content + (($.shopName && "\n【店铺名称】#" + $.shopName) + "\n【活动奖品】" + (lIiIIIl1 || "未获取到奖品信息")));
      if (!lI1iiil1 && $.listDrawContent) {
        console.log("奖品已经全部发完了，下次早点来吧~");
        $.runEnd = true;
        return;
      }
      if (I1i1iii1.includes("券")) {
        console.log("垃圾活动不跑了~");
        $.message.fix("垃圾活动不跑");
        $.runEnd = true;
        return;
      }
      await sendRequest("selectByIdone");
      if ($.outFlag || $.skipRun || $.runEnd) return;
      await $.wait(1000);
      $.selectByIdone && ($.chooseWeixin = $.selectByIdone?.["chooseWeixin"] === "y", $.chooseQQ = $.selectByIdone?.["chooseQQ"] === "y", $.chooseEmail = $.selectByIdone?.["chooseEmail"] === "y", $.chooseProfessional = $.selectByIdone?.["chooseProfessional"] === "y");
    }
    if (joinMember) {
      await sendRequest("getOpenCardInfo");
      if ($.outFlag || $.skipRun) return;
      if (!$.isMember) {
        const iI1ll1lI = await common.joinShopMember($.venderId);
        iI1ll1lI && (console.log("加入店铺会员成功"), $.isMember = true);
      }
      await $.wait(1000);
    }
    await sendRequest("selectById");
    if ($.needJoinMember || $.outFlag || $.runEnd) return;
    await $.wait(1000);
    if ($.selectByIds) {
      $.drawStop = false;
      for (let IIii111l = 0; IIii111l <= 3; IIii111l++) {
        await sendRequest("save");
        if ($.outFlag || $.runEnd) return;
        if ($.drawStop || $.needJoinMember) break;
        await $.wait(1000);
      }
    } else console.log("已经领取过奖励了哦~");
  } catch (llli1l1l) {
    console.log("❌ 脚本运行遇到了错误\n" + llli1l1l);
  }
}
async function handleResponse(lIiI1ilI, IlIiiI11) {
  try {
    switch (lIiI1ilI) {
      case "getMyPing":
        if (IlIiiI11.result === true && IlIiiI11.data) $.secretPin = IlIiiI11.data?.["secretPin"], $.nickname = IlIiiI11.data?.["nickname"];else {
          if (IlIiiI11.errorMessage) {
            console.log(lIiI1ilI + " " + IlIiiI11.errorMessage);
            $.message.fix(IlIiiI11.errorMessage);
          } else console.log("❓" + lIiI1ilI + " " + JSON.stringify(IlIiiI11));
        }
        break;
      case "initPinToken":
        if (IlIiiI11.result === true && IlIiiI11.data) {
          $.secretPin = IlIiiI11.data?.["secretPin"];
          $.nickname = IlIiiI11.data?.["nickname"];
        } else IlIiiI11.errorMessage ? (console.log(lIiI1ilI + " " + IlIiiI11.errorMessage), $.message.fix(IlIiiI11.errorMessage)) : console.log("❓" + lIiI1ilI + " " + JSON.stringify(IlIiiI11));
        break;
      case "getOpenCardInfo":
        if (IlIiiI11.result === true) {
          if (IlIiiI11.data) {
            if (IlIiiI11.data.hasOwnProperty("openCard")) $.isMember = IlIiiI11.data.openCard;else IlIiiI11.data.hasOwnProperty("openedCard") && ($.isMember = IlIiiI11.data.openedCard);
            if (typeof $.isMember === "number") $.isMember = $.isMember === 1;else typeof $.isMember === "undefined" && ($.isMember = false);
          } else $.isMember = true;
        } else {
          if (IlIiiI11.errorMessage) {
            if (IlIiiI11.errorMessage.includes("擦肩") && !IlIiiI11?.["data"]) {} else console.log(lIiI1ilI + " " + IlIiiI11.errorMessage);
          } else $.isMember = false;
        }
        break;
      case "listDrawContent":
        if (IlIiiI11.result === true && IlIiiI11.data) $.listDrawContent = IlIiiI11.data || [];else {
          if (IlIiiI11.errorMessage) {
            for (let IililIl1 of ["未开始", "结束", "不存在", "不在"]) {
              if (IlIiiI11.errorMessage.includes(IililIl1)) {
                $.runEnd = true;
                break;
              }
            }
            console.log(lIiI1ilI + " " + IlIiiI11.errorMessage);
            $.message.fix(IlIiiI11.errorMessage);
          } else {
            if (!IlIiiI11.data) {} else console.log("❓" + lIiI1ilI + " " + JSON.stringify(IlIiiI11));
          }
        }
        break;
      case "selectById":
        if (IlIiiI11.result === false) $.selectByIds = true;else {
          if (IlIiiI11.result === true && IlIiiI11.data) $.selectByIds = false;else {
            if (IlIiiI11.errorMessage) {
              for (let IiIIi1I1 of ["未开始", "结束", "不存在", "不在"]) {
                if (IlIiiI11.errorMessage.includes(IiIIi1I1)) {
                  $.runEnd = true;
                  break;
                }
              }
              console.log(lIiI1ilI + " " + IlIiiI11.errorMessage);
              $.message.fix(IlIiiI11.errorMessage);
            } else console.log("❓" + lIiI1ilI + " " + JSON.stringify(IlIiiI11));
          }
        }
        break;
      case "selectByIdone":
        if (IlIiiI11.result === true && IlIiiI11.data) {
          $.selectByIdone = IlIiiI11.data;
        } else {
          if (IlIiiI11.errorMessage) {
            for (let Iiii1iII of ["未开始", "结束", "不存在", "不在"]) {
              if (IlIiiI11.errorMessage.includes(Iiii1iII)) {
                $.runEnd = true;
                break;
              }
            }
            console.log(lIiI1ilI + " " + IlIiiI11.errorMessage);
            $.message.fix(IlIiiI11.errorMessage);
          } else console.log("❓" + lIiI1ilI + " " + JSON.stringify(IlIiiI11));
        }
        break;
      case "getShopInfoVO":
        if (IlIiiI11.result === true && IlIiiI11.data) $.shopName = IlIiiI11.data?.["shopName"], $.venderId = IlIiiI11.data?.["userId"];else {
          if (IlIiiI11.errorMessage) {
            console.log("" + (IlIiiI11.errorMessage || ""));
          } else console.log("❓" + lIiI1ilI + " " + JSON.stringify(IlIiiI11));
        }
        break;
      case "save":
        if (IlIiiI11.result && IlIiiI11.result === true) {
          $.drawStop = true;
          let Iil11liI = IlIiiI11.data.drawInfo;
          if (Iil11liI) {
            switch (Iil11liI.type) {
              case 6:
                console.log("🎉 " + Iil11liI.name + " 🐶"), $.message.insert(Iil11liI.name + "🐶");
                break;
              case 7:
                const iili1lI = IlIiiI11.data.addressId;
                prizeName = Iil11liI.name, console.log("🎉 恭喜获得实物~"), console.log("奖品名称：" + prizeName), console.log("参考价值：" + Iil11liI.priceInfo + "（元）");
                if (Iil11liI.showImage) console.log("预览图片：" + Iil11liI.showImage);
                const I1llIil1 = {
                    "baseUrl": $.baseUrl,
                    "cookie": activityCookie,
                    "ua": $.UA,
                    "activityId": $.activityId,
                    "activityType": $.activityType,
                    "venderId": $.venderId,
                    "secretPin": $.secretPin,
                    "prizeName": prizeName,
                    "generateId": iili1lI
                  },
                  IIiIIl1I = await wuxian_savePrize(I1llIil1);
                if (!isNotify && IIiIIl1I) {
                  await notify.sendNotify($.name + "中奖通知", "【京东账号" + $.index + "】" + $.nickName + "\n抽中实物 " + prizeName + "，已成功自动登记收货地址\n\n" + $.activityUrl);
                }
                $.message.insert(prizeName + "(" + (IIiIIl1I ? "已填地址" : "未填地址") + ")🎁");
                break;
              case 8:
                console.log("🗑️ 专享价"), $.message.insert("专享价🗑️");
                break;
              case 9:
                console.log("🗑️ " + Iil11liI.name + " 🎟️"), $.message.insert(Iil11liI.name + "🎟️");
                break;
              case 13:
              case 14:
              case 15:
                console.log("🎉 恭喜获得" + Iil11liI.name + " 🎁"), $.message.insert(Iil11liI.name + "🎁");
                !isNotify && (await notify.sendNotify($.name + "中奖通知", "【京东账号" + $.index + "】" + $.nickName + "\n抽中 " + Iil11liI.name + "\n\n" + $.activityUrl));
                break;
              case 16:
                console.log("🎉 " + Iil11liI.priceInfo + " 🧧"), $.message.insert(Iil11liI.priceInfo + "红包🧧");
                break;
              default:
                if (Iil11liI.name.includes("券")) console.log("🗑️ 优惠券"), $.message.insert("优惠券🗑️");else {
                  console.log("获得：" + Iil11liI.name);
                  $.message.insert("" + Iil11liI.name);
                }
                break;
            }
          } else console.log("💨 空气"), $.message.insert("空气💨");
        } else {
          if (IlIiiI11.errorMessage) {
            $.drawError = IlIiiI11.errorMessage;
            ["上限", "不足", "超过", "非法操作", "明天", "来晚", "抢光", "发完", "领完", "奖品发送失败", "发放完", "全部被领取", "不足", "结束", "京豆计划"].some(IiiII1i1 => $.drawError.includes(IiiII1i1)) && ($.drawStop = true, console.log($.drawError), $.message.insert($.drawError));
            ["未开始", "结束", "不存在", "不在"].some(l1l1 => $.drawError.includes(l1l1)) && ($.runEnd = true, $.message.fix($.drawError));
            ["会员", "开卡"].some(l1IlIII1 => $.drawError.includes(l1IlIII1)) && ($.needJoinMember = true, console.log($.drawError), $.message.fix($.drawError));
            if (!IlIiiI11.errorMessage.includes("火爆") && !IlIiiI11.errorMessage.includes("擦肩") && !IlIiiI11.errorMessage.includes("缓存") && !$.needJoinMember) {
              console.log(IlIiiI11.errorMessage || "");
              $.drawStop = true;
            }
          } else console.log(JSON.stringify(data));
        }
        break;
    }
  } catch (i1lIilI) {
    console.log("❌ 未能正确处理 " + lIiI1ilI + " 请求响应 " + (i1lIilI.message || i1lIilI));
  }
}
async function sendRequest(iI1illil) {
  if ($.runEnd || $.outFlag) return;
  let iIIiI1I1 = "",
    I111iil = "",
    ll11I11 = "POST";
  switch (iI1illil) {
    case "getMyPing":
      iIIiI1I1 = $.baseUrl + "/customer/getMyPing", I111iil = "token=" + $.token + "&fromType=APP&userId=" + $.venderId;
      break;
    case "getSimpleActInfoVo":
      iIIiI1I1 = $.baseUrl + "/customer/getSimpleActInfoVo", I111iil = "activityId=" + $.activityId;
      break;
    case "initPinToken":
      ll11I11 = "GET", iIIiI1I1 = $.baseUrl + "/customer/initPinToken?status=1&activityId=" + $.activityId + "&jdToken=" + $.token + "&source=01&venderId=" + $.venderId + "&uuid=" + $.UUID + "&clientTime=" + Date.now();
      break;
    case "accessLog":
      iIIiI1I1 = $.baseUrl + "/common/accessLog", I111iil = "venderId=" + $.venderId + "&code=" + $.activityType + "&pin=" + $.formatPin + "&activityId=" + $.activityId + "&pageUrl=" + encodeURIComponent($.activityUrl) + "&subType=app&adSource=";
      break;
    case "getOpenCardInfo":
      iIIiI1I1 = $.baseUrl + "/mc/new/brandCard/common/shopAndBrand/getOpenCardInfo", I111iil = "venderId=" + $.venderId + "&buyerPin=" + $.formatPin + "&activityType=" + $.activityType;
      break;
    case "listDrawContent":
      iIIiI1I1 = $.baseUrl + "/drawContent/listDrawContent", I111iil = "activityId=" + $.activityId + "&type=63";
      break;
    case "selectById":
      iIIiI1I1 = $.baseUrl + "/wx/completeInfoActivity/selectById", I111iil = "activityId=" + $.activityId + "&pin=" + $.formatPin + "&venderId=" + $.venderId;
      break;
    case "selectByIdone":
      iIIiI1I1 = $.baseUrl + "/completeInfoActivity/selectById", I111iil = "activityId=" + $.activityId + "&venderId=" + $.venderId;
      break;
    case "getShopInfoVO":
      iIIiI1I1 = $.baseUrl + "/wxActionCommon/getShopInfoVO", I111iil = "userId=" + $.venderId;
      break;
    case "save":
      iIIiI1I1 = $.baseUrl + "/wx/completeInfoActivity/save";
      const IlillIll = {
          ...generateRandomInfo(),
          "customContent": "[]",
          "fromType": "APP"
        },
        Iii1iiII = {
          "activityId": $.activityId,
          "actId": $.activityId,
          "address": IlillIll.address,
          "birthDay": IlillIll.birthDay,
          "city": IlillIll.city,
          "customContent": IlillIll.customContent,
          "drawInfoId": $.drawInfoId || null,
          "fromType": "APP",
          "gender": IlillIll.gender,
          "name": IlillIll.name,
          "phone": IlillIll.phone,
          "pin": encodeURIComponent($.secretPin),
          "professional": $.chooseProfessional ? IlillIll.address : "",
          "province": IlillIll.province,
          "token": $.token,
          "vcode": "",
          "venderId": $.venderId
        };
      if ($.chooseWeixin) Iii1iiII.weiXin = IlillIll.weiXin;
      if ($.chooseQQ) Iii1iiII.qq = IlillIll.qq;
      if ($.chooseEmail) Iii1iiII.email = IlillIll.email;
      I111iil = JSON.stringify({
        "ecyText": generateVariable(Iii1iiII, $.pinToken, $.te)
      });
      break;
    default:
      console.log("❌ 未知请求 " + iI1illil);
      return;
  }
  const l1i11ill = {
    "url": iIIiI1I1,
    "headers": {
      "Origin": $.origin,
      "Accept": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Connection": "keep-alive",
      "Content-Type": iI1illil === "save" ? "application/json" : "application/x-www-form-urlencoded",
      "Cookie": activityCookie.trim(),
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": $.UA,
      "X-Requested-With": "XMLHttpRequest",
      "Referer": $.activityUrl
    },
    "body": I111iil,
    "timeout": 30000
  };
  ll11I11 === "GET" && (delete l1i11ill.body, delete l1i11ill.headers["Content-Type"]);
  const lIlIi1Ii = 5;
  let lI11i1I1 = 0,
    Iiii11i = null,
    llli11 = false;
  while (lI11i1I1 < lIlIi1Ii) {
    lI11i1I1 > 0 && (await $.wait(1000));
    const {
      err: ll1Il1l1,
      res: ill11l11,
      data: i1lI11ii
    } = await handleRequest(l1i11ill, ll11I11);
    if (ll1Il1l1) {
      if (typeof ll1Il1l1 === "string" && ll1Il1l1.includes("Timeout awaiting 'request'")) Iiii11i = iI1illil + " 请求超时，请检查网络重试";else {
        const ii1I1ili = ill11l11?.["statusCode"];
        if (ii1I1ili) {
          if ([403, 493].includes(ii1I1ili)) Iiii11i = iI1illil + " 请求失败，IP被限制（Response code " + ii1I1ili + "）", llli11 = true;else {
            if ([400, 404].includes(ii1I1ili)) {
              Iiii11i = iI1illil + " 请求配置参数错误，请联系开发者进行反馈（Response code " + ii1I1ili + "）";
            } else Iiii11i = iI1illil + " 请求失败（Response code " + ii1I1ili + "）";
          }
        } else Iiii11i = iI1illil + " 请求失败 => " + (ll1Il1l1.message || ll1Il1l1);
      }
      lI11i1I1++;
    } else {
      const illlIi1i = common.getResponseCookie(ill11l11, activityCookie),
        liI11Iii = false;
      if (liI11Iii) {
        console.log("\n---------------------------------------------------\n");
        console.log("🔧 " + iI1illil + " 响应Body => " + (i1lI11ii || "无") + "\n");
        console.log("🔧 " + iI1illil + " 响应Cookie => " + (illlIi1i || "无") + "\n");
        console.log("🔧 " + iI1illil + " 请求参数");
        console.log(l1i11ill);
        console.log("\n---------------------------------------------------\n");
      }
      let Ii1IlI = "";
      switch (iI1illil) {
        case "getMyPing":
          Ii1IlI = common.getCookieValue(illlIi1i, "LZ_AES_PIN");
          Ii1IlI ? $.LZ_AES_PIN = Ii1IlI : (console.log("获取 LZ_AES_PIN 失败！"), $.message.fix("获取[LZ_AES_PIN]失败"), $.skipRun = true);
          break;
        case "initPinToken":
          const l1IliIl1 = common.getCookieValue(illlIi1i, "pToken");
          if (l1IliIl1) $.pinToken = l1IliIl1;else {
            console.log("获取 pinToken 失败！");
            $.message.fix("获取[pinToken]失败");
            $.skipRun = true;
            break;
          }
          Ii1IlI = common.getCookieValue(illlIi1i, "LZ_AES_PIN");
          if (Ii1IlI) $.LZ_AES_PIN = Ii1IlI;else {
            console.log("获取 LZ_AES_PIN 失败！");
            $.message.fix("获取[LZ_AES_PIN]失败");
            $.skipRun = true;
            break;
          }
          const IllIlIi = common.getCookieValue(illlIi1i, "te");
          IllIlIi && ($.te = IllIlIi, activityCookie += "te=" + $.te + "; ");
          break;
      }
      ["getMyPing", "followGoods", "start"].includes(iI1illil) && (activityCookie = illlIi1i);
      Ii1IlI = common.getCookieValue(activityCookie, "LZ_AES_PIN");
      !Ii1IlI && $.LZ_AES_PIN && (activityCookie += "LZ_AES_PIN=" + $.LZ_AES_PIN + "; ");
      const l1IlII1i = common.getCookieValue(activityCookie, "pToken");
      !l1IlII1i && $.pinToken && (activityCookie += "pToken=" + $.pinToken + "; ");
      const liiI1lli = common.getCookieValue(activityCookie, "AUTH_C_USER");
      !liiI1lli && $.secretPin && (activityCookie += "AUTH_C_USER=" + $.secretPin + "; ");
      const l111iIll = common.getCookieValue(activityCookie, "te");
      !l111iIll && $.te && (activityCookie += "te=" + $.te + "; ");
      if (!["accessLog"].includes(iI1illil)) {
        if (i1lI11ii) try {
          const iiI1l1li = JSON.parse(i1lI11ii);
          handleResponse(iI1illil, iiI1l1li);
          break;
        } catch (Iilii1i) {
          Iiii11i = "❌ " + iI1illil + " 接口响应数据解析失败: " + Iilii1i.message;
          console.log("🚫 " + iI1illil + " => " + String(i1lI11ii));
          liI11Iii && (console.log("\n---------------------------------------------------\n"), console.log(activityCookie), console.log("\n---------------------------------------------------\n"));
          lI11i1I1++;
        } else Iiii11i = "❌ " + iI1illil + " 接口无响应数据", lI11i1I1++;
      } else {
        break;
      }
      llli11 = false;
    }
  }
  lI11i1I1 >= lIlIi1Ii && (console.log(Iiii11i), llli11 && !["getShopInfoVO", "accessLog"].includes(iI1illil) && ($.outFlag = true, $.message && $.message.fix(Iiii11i)));
}
async function handleRequest(iIlIi1l1, lIlil1i1 = "POST") {
  if (lIlil1i1 === "POST") return new Promise(async IiIilIii => {
    $.post(iIlIi1l1, (illii11l, li1I1ill, Ii1iiI11) => {
      IiIilIii({
        "err": illii11l,
        "res": li1I1ill,
        "data": Ii1iiI11
      });
    });
  });else {
    if (lIlil1i1 === "GET") return new Promise(async lilii1Ii => {
      $.get(iIlIi1l1, (lIill1li, ilIllI1I, iIIi1i1) => {
        lilii1Ii({
          "err": lIill1li,
          "res": ilIllI1I,
          "data": iIIi1i1
        });
      });
    });else {
      const ili1lIlI = "不支持的请求方法";
      return {
        "err": ili1lIlI,
        "res": null,
        "data": null
      };
    }
  }
}
function getFirstLZCK(IIiIii1) {
  return $.skipRun = true, new Promise(ll1lIi1i => {
    let Ii11i1I1 = {
      "url": IIiIii1,
      "headers": {
        "Accept": "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-cn",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Referer": IIiIii1,
        "User-Agent": $.UA
      },
      "timeout": 30000
    };
    $.get(Ii11i1I1, async (iI1Iill1, III1II1i, i1ill1) => {
      try {
        iI1Iill1 ? (III1II1i && typeof III1II1i.statusCode != "undefined" && III1II1i.statusCode === 493 && (console.log("此ip已被限制，请过10分钟后再执行脚本！"), $.outFlag = true), console.log(String(iI1Iill1)), console.log("getFirstLZCK 请求失败，请检查网路重试")) : (i1ill1.match(/(活动已经结束)/) && i1ill1.match(/(活动已经结束)/)[1] && ($.runEnd = true, console.log("活动已结束或不存在")), III1II1i.status === 200 && (activityCookie = common.getResponseCookie(III1II1i, activityCookie), $.skipRun = false));
      } catch (lll11III) {
        $.logErr(lll11III, III1II1i);
      } finally {
        ll1lIi1i();
      }
    });
  });
}
function generateRandomInfo() {
  function i1illiIi(iil1IlI1, lI11IIil) {
    let iII111I = "";
    for (let iIl1l1li = iil1IlI1; iIl1l1li > 0; --iIl1l1li) {
      iII111I += lI11IIil[Math.floor(Math.random() * lI11IIil.length)];
    }
    return iII111I;
  }
  const iiiiil1 = ["王", "李", "张", "刘", "陈", "杨", "赵", "黄", "周", "吴", "徐", "孙", "胡", "朱", "高", "林", "何", "郭", "马", "罗", "梁", "宋", "郑", "谢", "韩", "唐", "冯", "于", "董", "萧", "程", "曹", "袁", "邓", "许", "傅", "沈", "曾", "彭", "吕", "苏", "卢", "蒋", "蔡", "贾", "丁", "魏", "薛", "叶", "阎", "余", "潘", "杜", "戴", "夏", "钟", "汪", "田", "任", "姜", "范", "方", "石", "姚", "谭", "廖", "邹", "熊", "金", "陆", "郝", "孔", "白", "崔", "康", "毛", "邱", "秦", "江", "史", "顾", "侯", "邵", "孟", "龙", "万", "段", "雷", "钱", "汤", "尹", "黎", "易", "常", "武", "乔", "贺", "赖", "龚", "文"],
    lli1iii = ["伟", "刚", "勇", "毅", "俊", "峰", "强", "军", "平", "保", "东", "文", "辉", "力", "明", "永", "健", "世", "广", "志", "义", "兴", "良", "海", "山", "仁", "波", "宁", "贵", "福", "生", "龙", "元", "全", "国", "胜", "学", "祥", "才", "发", "武", "新", "利", "清", "飞", "彬", "富", "顺", "信", "子", "杰", "涛", "昌", "成", "康", "星", "光", "天", "达", "安", "岩", "中", "茂", "进", "林", "有", "坚", "和", "彪", "博", "诚", "先", "敬", "震", "振", "壮", "会", "思", "群", "豪", "心", "邦", "承", "乐", "绍", "功", "松", "善", "厚", "庆", "磊", "民", "友", "裕", "河", "哲", "江", "超", "浩", "亮", "政", "谦", "亨", "奇", "固", "之", "轮", "翰", "朗", "伯", "宏", "言", "若", "鸣", "朋", "斌", "梁", "栋", "维", "启", "克", "伦", "翔", "旭", "鹏", "泽", "晨", "辰", "士", "以", "建", "家", "致", "树", "炎", "德", "行", "时", "泰", "盛", "雄", "琛", "钧", "冠", "策", "腾", "楠", "榕", "风", "航", "弘", "涛"],
    lI1II11i = ["丽", "芳", "娜", "敏", "静", "秀", "娟", "英", "华", "慧", "巧", "美", "娥", "瑞", "霞", "凤", "洁", "梅", "琳", "素", "云", "莲", "真", "环", "雪", "荣", "爱", "妹", "露", "艳", "佳", "琴", "兰", "蓉", "萍", "珍", "贞", "仙", "芹", "蕾", "华", "彩", "春", "菊", "勤", "珠", "翠", "雅", "芝", "玉", "萌", "婷", "琼"],
    ilIlli1i = Math.random() < 0.5,
    l1liii1l = iiiiil1[Math.floor(Math.random() * iiiiil1.length)],
    llili1lI = ilIlli1i ? lli1iii : lI1II11i.filter(IlililIl => !IlililIl.includes("美")),
    IiIiIiII = llili1lI[Math.floor(Math.random() * llili1lI.length)],
    II1IIlil = ilIlli1i ? "男" : "女",
    lIilIili = ["医生", "教师", "程序员", "律师", "工程师", "设计师", "销售", "市场营销", "记者", "作家", "演员", "歌手", "画家", "摄影师", "主持人", "模特", "运动员", "教练", "裁判", "军人", "警察", "消防员", "厨师", "服务员", "店员", "会计", "金融分析师", "投资顾问", "房地产经纪人", "建筑师", "土木工程师", "电气工程师", "机械工程师", "化学工程师", "生物工程师", "环境工程师", "翻译", "旅游顾问", "导游", "翻译", "公关", "人力资源", "行政助理", "秘书", "办公室主任", "客服", "网站管理员", "数据分析师", "游戏开发者", "机器人工程师", "物联网工程师", "临床医生", "护士", "药剂师", "营养师", "健身教练", "美容师", "美发师", "时装设计师", "珠宝设计师", "室内设计师", "景观设计师", "平面设计师", "音乐制作人", "音效设计师", "配音演员", "广告创意总监", "广告文案", "广告策划"],
    lIlII11l = lIilIili[Math.floor(Math.random() * lIilIili.length)],
    III1iI1 = new Date(),
    iiIl1I11 = III1iI1.getFullYear() - Math.floor(Math.random() * 33) - 18,
    lii1I1iI = Math.floor(Math.random() * 12) + 1,
    llIIl1i = Math.floor(Math.random() * 28) + 1,
    lIiIl11 = new Date(iiIl1I11, lii1I1iI - 1, llIIl1i).toISOString().slice(0, 10),
    lIlI1I1 = "1" + ["3", "4", "5", "6", "7", "8"][Math.floor(Math.random() * 6)] + i1illiIi(9, "0123456789"),
    ll11l1i = "wx_" + i1illiIi(6, "0123456789"),
    I1iIIi1l = i1illiIi(["7", "8", "9", "10"][Math.floor(Math.random() * 4)], "0123456789"),
    IIIi1Il = i1illiIi(6, "0123456789") + "@qq.com",
    li1i111l = "北京市",
    iIiI1iI1 = ["东城区", "西城区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云区", "延庆区"],
    ii1iIiiI = iIiI1iI1[Math.floor(Math.random() * iIiI1iI1.length)],
    iIi11iii = i1illiIi(["2", "3", "4"][Math.floor(Math.random() * 3)], "0123456789") + "号",
    Il1lilii = i1illiIi(6, "0123456789");
  return {
    "name": l1liii1l + IiIiIiII,
    "gender": II1IIlil,
    "profession": lIlII11l,
    "birthDay": lIiIl11,
    "phone": lIlI1I1,
    "province": li1i111l,
    "city": ii1iIiiI,
    "address": iIi11iii,
    "vcode": Il1lilii,
    "weiXin": ll11l1i,
    "qq": I1iIIi1l,
    "email": IIIi1Il
  };
}
function generateVariable(IiIii11l, lil1iIll, i1il11i) {
  function lI1111(IIlIIl1l) {
    IIlIIl1l = IIlIIl1l.split("").reverse().join("");
    const iiIllili = new Uint8Array(12),
      IiilliIi = new TextEncoder().encode(IIlIIl1l);
    for (let I1l1li1l = 0; I1l1li1l < IiilliIi.length; I1l1li1l += 2) {
      let Il1iiilI = IiilliIi[I1l1li1l] << 5 | IiilliIi[I1l1li1l + 1] & 255;
      Il1iiilI %= 63;
      iiIllili[I1l1li1l >> 1] = Il1iiilI;
    }
    let lIilii1 = "";
    for (let lIi1I111 = 0; lIi1I111 < iiIllili.length; lIi1I111++) {
      lIilii1 += (iiIllili[lIi1I111] + 256).toString(2).slice(1);
    }
    let IlIIi1l = "",
      ii1ili1I = "";
    for (let llll1iI1 = 0; llll1iI1 < 16; llll1iI1++) {
      if (llll1iI1 !== 0) {
        const llIl11Ii = llll1iI1 * 6,
          lllll1li = lIilii1.substring(llIl11Ii, llIl11Ii + 6);
        let Iil1lli1 = parseInt(lllll1li, 2);
        const IIIill11 = ii1ili1I.split("");
        for (let Ii1i1I1 = 0; Ii1i1I1 < IIIill11.length; Ii1i1I1++) {
          IIIill11[Ii1i1I1] === "1" && (Iil1lli1 = (Iil1lli1 >> 6 - Ii1i1I1 | Iil1lli1 << Ii1i1I1) & 63);
        }
        ii1ili1I = (Iil1lli1 & 63).toString(2).padStart(6, "0");
      } else ii1ili1I = lIilii1.substring(0, 6);
      IlIIi1l += ii1ili1I;
    }
    for (let lIIii1Ii = 0; lIIii1Ii < 12; lIIii1Ii++) {
      const illi1lll = lIIii1Ii * 8;
      iiIllili[lIIii1Ii] = parseInt(IlIIi1l.substring(illi1lll, illi1lll + 8), 2);
    }
    const Ii1IlI11 = btoa(String.fromCharCode.apply(null, iiIllili));
    return Ii1IlI11;
  }
  const IIiIIIIi = ["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"];
  let iI1l11il = Date.now() + parseInt(i1il11i);
  if (typeof IiIii11l != "object") {
    IiIii11l = JSON.parse(IiIii11l);
  }
  IiIii11l.nowTime = iI1l11il;
  let iIllillI = lil1iIll + iI1l11il;
  const iI1l1i1I = iIllillI.substring(0, iIllillI.length - 5);
  let l1iIII1I = "";
  for (let ii1l1Ii1 = 0; ii1l1Ii1 < iI1l1i1I.length; ii1l1Ii1++) {
    let II1IiIl = iI1l1i1I.charCodeAt(ii1l1Ii1),
      lliliI1i = II1IiIl % 10,
      l1IiIilI = IIiIIIIi[lliliI1i][ii1l1Ii1];
    l1iIII1I += l1IiIilI;
  }
  var Ii1ilIil = l1iIII1I.length,
    IIil1lIl = Math.floor(Ii1ilIil / 24),
    IlillIil = "";
  for (var iI1ii11l = 0; iI1ii11l < 24; iI1ii11l++) {
    var i1I11IIi = (iI1ii11l + 1) * IIil1lIl;
    iI1ii11l === 23 && (i1I11IIi = Ii1ilIil);
    var i1illill = l1iIII1I.substring(iI1ii11l * IIil1lIl, i1I11IIi),
      ll1IlI = [];
    for (var iilii1 = 0; iilii1 < i1illill.length; iilii1++) {
      ll1IlI.push(i1illill.charCodeAt(iilii1));
    }
    var l1IiIii = ll1IlI.reduce(function (ll1Ii1I, lIIl11lI) {
        return ll1Ii1I + lIIl11lI;
      }, 0),
      i11111II = Math.floor(l1IiIii / ll1IlI.length);
    IlillIil += String.fromCharCode(i11111II);
  }
  l1iIII1I = IlillIil;
  const lllIilil = lI1111(l1iIII1I),
    li1II1iI = CryptoJS.enc.Utf8.parse(lllIilil),
    iIIiiil1 = CryptoJS.enc.Utf8.parse(""),
    Iiiii1II = CryptoJS.AES.encrypt(JSON.stringify(IiIii11l), li1II1iI, {
      "iv": iIIiiil1,
      "mode": CryptoJS.mode.ECB,
      "padding": CryptoJS.pad.Pkcs7
    });
  return Iiiii1II.toString();
}