//Mon Jan 06 2025 03:57:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let type = "",
  init,
  labName = "",
  shareCodes = [];
$.version = "v1.2.0";
let drawCount = 0;
$.logic = async function () {
  if (!$.superVersion) throw new Error("请更新脚本");
  if (!$.activityId || !$.activityUrl) {
    $.expire = true;
    $.putMsg("activityId|activityUrl不存在");
    return;
  }
  $.UA = $.ua();
  let Ii1Ii1I = await $.isvObfuscator();
  if (Ii1Ii1I.code !== "0") {
    $.putMsg("获取Token失败");
    return;
  }
  $.Token = Ii1Ii1I?.["token"];
  $.shareUuid = $.randomArray(shareCodes, 1)[0]?.["shareUuid"] || $.ownerUuid || "";
  if (this.domain.includes("jinggengjcq")) {
    $.userId = "10299171";
    let I1iliii1 = await retryApi(getLoad);
    $.buyerNick = I1iliii1.data.data.missionCustomer.buyerNick;
    $.index <= leaderNumber && shareCodes.push({
      "index": $.index,
      "cookie": $.cookie,
      "username": $.username,
      "count": 0,
      "shareUuid": $.buyerNick
    });
    if ($.shareUuid) {
      let Ill11l1l = await retryApi(getInviteRelation);
      $.log(Ill11l1l.errorMessage);
      Ill11l1l.errorMessage.includes("关系绑定成功") && shareCodes.filter(ll1I1l1I => ll1I1l1I.shareUuid === $.shareUuid).forEach(IIII1lii => {
        IIII1lii.count++;
      });
    } else {
      if (!$.shareUuid && $.index > leaderNumber) {
        $.expire = true;
        $.putMsg("未找到车头退出");
        return;
      }
    }
    if (!I1iliii1.data.data.missionCustomer.hasAddCart) {
      let iIliii1 = await retryApi(getUniteAddCart);
      $.log(iIliii1.data?.["data"]?.["remark"] || iIliii1.errorMessage);
    }
    if (!I1iliii1.data.data.missionCustomer.hasCollectShop) {
      let iIIli1I = await retryApi(getHasCollectShop);
      $.log(iIIli1I.data?.["data"]?.["remark"] || iIIli1I.errorMessage);
    }
    I1iliii1 = await retryApi(getLoad);
    for (let iI1I1ii1 = 0; iI1I1ii1 < I1iliii1.data.data?.["missionCustomer"]?.["remainPoint"] / 100 && drawCount < 10; iI1I1ii1++) {
      let IIIIi1II = await retryApi(getDraw);
      $.log(IIIIi1II);
      $.log(IIIIi1II.data?.["data"]?.["remark"] || IIIIi1II?.["errorMessage"]);
      if (IIIIi1II.errorMessage?.["includes"]("您的积分不足啦")) {
        break;
      }
      IIIIi1II.success && IIIIi1II.success === true && IIIIi1II.data && IIIIi1II.data.status && IIIIi1II.data.status == 200 && (IIIIi1II.data.data.sendResult ? (drawCount = 0, $.putMsg($.prizeName), $.prizeName = IIIIi1II.data.data.awardSetting.awardName, IIIIi1II.data.data.awardSetting.awardType == "goods" && ($.addressId = IIIIi1II.data.data.awardSendLog.id, await $.saveAddress())) : ($.log("空气"), drawCount++));
    }
    if (open === "off") {
      return;
    }
    let iiiI1l1I = await retryApi(getShopList),
      IiiI1lIl = iiiI1l1I.data.data.filter(IIl11ll => !IIl11ll.open);
    for (let I11iIil1 = 0; I11iIil1 < IiiI1lIl.length; I11iIil1++) {
      let Il1IIili = IiiI1lIl[I11iIil1];
      $.shopId = Il1IIili.shopId;
      $.venderId = Il1IIili.userId;
      let IIi1lIl = await retryApi(getCompleteMission);
      $.log(IIi1lIl.data?.["data"]?.["remark"] || IIi1lIl.errorMessage);
      await $.openCard($.venderId);
      let Ii1ili = await retryApi(load2);
      $.log(Ii1ili.data?.["data"]?.["openCardMsg"] || Ii1ili.errorMessage);
      I11iIil1 > 0 && I11iIil1 % 4 === 0 && (await $.wait(min, max));
      await $.wait(3000, 5000);
    }
    return;
  } else {
    if ($.activityUrl.includes("joinCommon")) {
      let Iiil1II = await $.api("dingzhi/joinCommon/activity/5929859", "activityId=" + $.activityId);
      const lIIil1I = cheerio.load(cheerio.load(Iiil1II).html());
      $.venderId = lIIil1I("#userId", "body").attr("value");
      await $.getMyPing();
    } else await $.getMyPing("customer/getMyCidPing");
  }
  if (!$.Pin) return;
  await $.getSimpleActInfoVo("dz/common/getSimpleActInfoVo");
  if ($.expire) {
    return;
  }
  $.attrTouXiang = "https://img10.360buyimg.com/imgzone/jfs/t1/21383/2/6633/3879/5c5138d8E0967ccf2/91da57c5e2166005.jpg";
  await $.api("common/" + ($.domain.includes("cjhy") ? "accessLog" : "accessLogWithAD"), "venderId=" + $.venderId + "&code=99&pin=" + $.Pin + "&activityId=" + $.activityId + "&pageUrl=" + encodeURIComponent($.activityUrl) + "&subType=app&adSource=");
  let ii1iIIII,
    l1ilIl11 = encodeURIComponent($.nickname);
  if ($.activityUrl.includes("/m/unite/") || $.activityUrl.includes("joinCommon")) {
    if (!init && $.index < leaderNumber) {
      init = await $.api("dingzhi/taskact/common/init", "activityId=" + $.activityId + "&dzActivityType=1&pin=");
      $.actStartTime = init.data.startTime;
      $.actEndTime = init.data.endTime;
      if (init.data.startTime && init.data.startTime > $.timestamp()) {
        $.putMsg("活动还未开始");
        $.expire = true;
        return;
      }
      if (init.data.endTime && init.data.endTime < $.timestamp()) {
        $.putMsg("活动已结束");
        $.expire = true;
        return;
      }
    }
    ii1iIIII = await $.api("dingzhi/joinCommon/activityContent", "activityId=" + $.activityId + "&pin=" + $.Pin + "&pinImg=" + $.attrTouXiang + "&nick=" + l1ilIl11 + "&shareUuid=" + ($.shareUuid || ""));
  } else $.activityId.includes("shop") ? ii1iIIII = await $.api("dingzhi/shop/league/activityContent", "activityId=" + $.activityId + "&pin=" + $.Pin + "&pinImg=" + $.attrTouXiang + "&nick=" + l1ilIl11 + "&shareUuid=" + ($.shareUuid || "")) : ($.index <= leaderNumber && !type && (type = await $.getOpenCardPath()), ii1iIIII = await $.api("dingzhi/" + type + "/union/activityContent", "activityId=" + $.activityId + "&pin=" + $.Pin + "&pinImg=" + $.attrTouXiang + "&nick=" + l1ilIl11 + "&shareUuid=" + ($.shareUuid || "")));
  if (ii1iIIII.errorMessage) {
    $.putMsg(ii1iIIII.errorMessage);
    await $.wxStop(ii1iIIII.errorMessage);
    return;
  }
  ii1iIIII = ii1iIIII.data;
  $.actStartTime = init?.["data"]?.["startTime"] || ii1iIIII.startTime;
  $.actEndTime = init?.["data"]?.["endTime"] || ii1iIIII.endTime;
  if (ii1iIIII.startTime && ii1iIIII.startTime > $.timestamp()) {
    $.putMsg("活动还未开始");
    $.expire = true;
    return;
  }
  if (ii1iIIII.hasEnd) {
    $.putMsg("活动已结束");
    $.expire = true;
    return;
  }
  $.actorUuid = ii1iIIII.actorUuid || ii1iIIII.actorInfo.uuid;
  $.index <= leaderNumber && ($.log(ii1iIIII.shareContent || ii1iIIII.activityName), labName = ii1iIIII.shareContent || ii1iIIII.activityName, shareCodes.push({
    "index": $.index,
    "cookie": $.cookie,
    "token": $.Token,
    "pin": $.Pin,
    "username": $.username,
    "count": 0,
    "shareUuid": $.actorUuid
  }));
  if ($.activityId.includes("shop")) {
    $.shareUuid = $.randomArray(shareCodes.filter(IlliIil1 => IlliIil1.count < 20), 1)[0]?.["shareUuid"] || "";
    if ($.index > leaderNumber && !$.shareUuid) {
      $.putMsg("已无车头");
      this.expire = true;
      return;
    }
  } else $.shareUuid = $.randomArray(shareCodes, 1)[0]?.["shareUuid"] || "";
  if ($.activityUrl.includes("/m/unite/") || $.activityUrl.includes("joinCommon")) {
    await $.api("dingzhi/joinCommon/doTask", "activityId=" + $.activityId + "&pin=" + $.Pin + "&uuid=" + $.actorUuid + "&shareUuid=" + $.shareUuid + "&taskType=20&taskValue=");
    let Il11IiIl = await $.api("dingzhi/joinCommon/taskInfo", "activityId=" + $.activityId + "&pin=" + $.Pin + "&uuid=" + $.actorUuid + "&shareUuid=" + $.shareUuid),
      i1I1illI = Il11IiIl.data["1"].settingInfo.map(l1III1lI => l1III1lI.value),
      iiI1IIli = await assist(1),
      lll11I1i = $.different(i1I1illI, iiI1IIli);
    for (let I1i1I1I1 = 0; I1i1I1I1 < lll11I1i.length; I1i1I1I1++) {
      $.venderId = lll11I1i[I1i1I1I1];
      await $.openCard($.venderId);
      if (I1i1I1I1 > 0 && I1i1I1I1 % 4 === 0) {
        await $.wait(min, max);
      }
    }
    if (lll11I1i.length > 0) {
      await assist(2);
    }
  } else {
    if ($.activityId.includes("shop")) {
      await $.api("dingzhi/shop/league/saveTask", "activityId=" + $.activityId + "&pin=" + $.Pin + "&actorUuid=" + $.actorUuid + "&shareUuid=" + ($.shareUuid || "") + "&taskType=1&taskValue=1");
      let l111I1Ii = await initOpenCard1(1);
      for (let II1llI11 = 0; II1llI11 < l111I1Ii.length; II1llI11++) {
        $.shopId = l111I1Ii[II1llI11].value2;
        $.venderId = l111I1Ii[II1llI11].value;
        await $.openCard($.venderId);
        II1llI11 > 0 && II1llI11 % 4 === 0 && (await $.wait(min, max));
      }
      l111I1Ii.length > 0 && (await initOpenCard1(2));
    } else {
      await $.api("dingzhi/" + type + "/union/saveTask", "activityId=" + $.activityId + "&pin=" + $.Pin + "&actorUuid=" + $.actorUuid + "&shareUuid=" + ($.shareUuid || "") + "&taskType=23&taskValue=23");
      let iI1liIIi = await initOpenCard2(1);
      for (let I1iI1lII = 0; I1iI1lII < iI1liIIi.length; I1iI1lII++) {
        $.shopId = iI1liIIi[I1iI1lII].shopId;
        $.venderId = iI1liIIi[I1iI1lII].venderId;
        await $.openCard($.venderId);
        I1iI1lII > 0 && I1iI1lII % 4 === 0 && (await $.wait(min, max));
      }
      if (iI1liIIi.length > 0) {
        await initOpenCard2(2);
      }
    }
  }
};
$.after = async function () {
  $.msg.push(labName);
  $.msg.push("export M_WX_OPENCARD_M_URL=\"" + $.activityUrl + "\"");
};
async function assist(i11Ilii1) {
  let {
      data: IIIIl111
    } = await $.api("dingzhi/joinCommon/assist", "activityId=" + $.activityId + "&pin=" + $.Pin + "&uuid=" + $.actorUuid + "&shareUuid=" + $.shareUuid),
    IiIIlIll = IIIIl111.assistState,
    li11I1lI = IIIIl111.openCardInfo.openAll;
  li11I1lI && $.log("已完成全部开卡");
  let III1iIl = IIIIl111.openCardInfo.sendStatus;
  if (i11Ilii1 === 2) {
    let Iiiill1 = shareCodes.filter(iIIiIi11 => iIIiIi11.shareUuid === $.shareUuid)[0];
    console.log("助力状态-->" + IiIIlIll + "," + li11I1lI + "," + III1iIl);
    switch (IiIIlIll) {
      case 0:
        $.log("无法助力自己");
        break;
      case 1:
        Iiiill1.count++, $.log("助力[" + Iiiill1.username + "]成功，已邀请" + Iiiill1.count + "人");
        break;
      case 2:
        $.log("已经助力过了");
        break;
      case 3:
        $.log("没有助力次数了");
        break;
      case 10:
        $.log("您已为好友助力过了哦");
        break;
      case 11:
        $.log("您已成功为好友助力了，不能再为其他好友助力了");
        break;
      case 20:
        $.log("您需注册会员,才能为好友助力！");
        break;
      case 21:
        $.log("您需注册会员并关注店铺,才能为好友助力！");
        break;
      case 22:
        $.log("您需注关注店铺,才能为好友助力！");
        break;
      case 77:
        $.log("未全部开卡和关注，不能助力");
        break;
      case 78:
        $.log("已经是老会员，不能助力");
        break;
      default:
        $.log("未知状态");
        break;
    }
  }
  return IIIIl111.openCardInfo.openVenderId;
}
async function initOpenCard1(IIiIIlli) {
  let {
      data: IiII1lll
    } = await $.api("dingzhi/shop/league/checkOpenCard", "activityId=" + $.activityId + "&pin=" + $.Pin + "&actorUuid=" + $.actorUuid + "&shareUuid=" + ($.shareUuid || "")),
    Ii1iiliI = IiII1lll.allOpenCard,
    Il1illiI = IiII1lll.assistStatus,
    ili1i11I = IiII1lll.sendBeanNum;
  if (ili1i11I > 0) {
    $.log("开卡获得" + ili1i11I + "豆");
  }
  $.log("助力状态-->" + Il1illiI);
  if (Ii1iiliI) {
    $.log("已完成全部开卡");
  }
  if (IIiIIlli === 2) {
    let lilliil1 = shareCodes.filter(l11lIiil => l11lIiil.shareUuid === $.shareUuid)[0];
    switch (Il1illiI) {
      case 0:
        break;
      case 1:
        lilliil1.count++, $.log("助力[" + lilliil1.username + "]成功，已邀请" + lilliil1.count + "人"), $.log("恭喜您为好友助力成功！");
        break;
      case 2:
        $.log("您已经为该好友助力过了！");
        break;
      case 3:
        $.log("您已经为其他好友助力过了！");
        break;
      case 11:
        $.log("今日助力次数已达上限，无法继续为他助力！");
        break;
      case 12:
        $.log("您活动期间助力次数已达上限，无法继续助力！");
        break;
      case 21:
        $.log("您还不是会员，无法为好友助力！");
        break;
      case 22:
        $.log("需要关注店铺及成为全部品牌会员并且有新会员，才能助力成功哦~");
        break;
      case 88:
        $.log("需要关注店铺及成为全部品牌会员并且有新会员，才能助力成功哦~");
        break;
      case 66:
        break;
      case 99:
        switch (IiII1lll.shareType) {
          case 2:
            $.log("您需要完成全部开卡才能为好友助力");
            break;
          case 5:
            $.log("您需要完成任意一组开卡，并关注店铺才能为好友助力");
            break;
          case 6:
            $.log("您的好友邀请您为TA助力，您关注店铺和品牌全部开卡后，即为好友助力成功");
            break;
          default:
            break;
        }
        break;
    }
  }
  return IiII1lll.cardList.filter(il1illli => !il1illli.status);
}
async function initOpenCard2(iii111Il) {
  let {
      data: I1Iiil11
    } = await $.api("dingzhi/" + type + "/union/initOpenCard", "activityId=" + $.activityId + "&pin=" + $.Pin + "&actorUuid=" + $.actorUuid + "&shareUuid=" + ($.shareUuid || "")),
    iI1i11i = I1Iiil11.allOpenCard,
    Ili1ill = I1Iiil11.openCardAndSendJd,
    II1ll = I1Iiil11.assistStatus,
    I1iIIlii = I1Iiil11.openCardBeans;
  I1iIIlii > 0 && $.log("开卡获得" + I1iIIlii + "豆");
  $.log("助力状态-->" + Ili1ill + "," + II1ll);
  iI1i11i && $.log("已完成全部开卡");
  if (iii111Il === 2) {
    let l11IIll = shareCodes.filter(I1Iiil1 => I1Iiil1.shareUuid === $.shareUuid)[0];
    switch (II1ll) {
      case 0:
        $.log("无法助力自己");
        break;
      case 1:
        l11IIll.count++, $.log("助力[" + l11IIll.username + "]成功，已邀请" + l11IIll.count + "人");
        break;
      case 2:
        $.log("已经助力过了");
        break;
      case 3:
        $.log("没有助力次数了");
        break;
      case 10:
        $.log("您已为好友助力过了哦");
        break;
      case 11:
        $.log("您已成功为好友助力了，不能再为其他好友助力了");
        break;
      case 20:
        $.log("您需注册会员,才能为好友助力！");
        break;
      case 21:
        $.log("您需注册会员并关注店铺,才能为好友助力！");
        break;
      case 22:
        $.log("您需注关注店铺,才能为好友助力！");
        break;
      case 77:
        $.log("未全部开卡和关注，不能助力");
        break;
      case 78:
        $.log("已经是老会员，不能助力");
        break;
      default:
        $.log("未知状态");
        break;
    }
  }
  return I1Iiil11.openInfo.filter(I111Ii1I => !I111Ii1I.openStatus);
}
async function retryApi(l1lll1il, lI1lllI1 = 0) {
  if (lI1lllI1 > 10) throw new Error("重试次数过多，放弃重试");
  let il1ilI11 = await l1lll1il();
  return JSON.stringify(il1ilI11).includes("请稍后重试") && (await $.wait(3000, 5000), await retryApi(l1lll1il, ++lI1lllI1)), il1ilI11;
}
function getLoad() {
  return $.api("dm/front/jdBigAlliance/activity/load?open_id=&mix_nick=" + $.Token + "&user_id=10299171", {
    "jdToken": $.Token,
    "source": "01",
    "inviteNick": $.shareUuid || ""
  });
}
function getInviteRelation() {
  return $.api("/dm/front/jdBigAlliance/customer/inviteRelation?open_id=&mix_nick=" + ($.buyerNick || "") + "&user_id=10299171", {
    "method": "/jdBigAlliance/customer/inviteRelation",
    "inviterNick": $.shareUuid || ""
  });
}
function getUniteAddCart() {
  return $.api("/dm/front/jdBigAlliance/mission/completeMission?open_id=&mix_nick=" + ($.buyerNick || "") + "&user_id=10299171", {
    "method": "/jdBigAlliance/mission/completeMission",
    "missionType": "uniteAddCart"
  });
}
function getHasCollectShop() {
  return $.api("/dm/front/jdBigAlliance/mission/completeMission?open_id=&mix_nick=" + ($.buyerNick || "") + "&user_id=10299171", {
    "method": "/jdBigAlliance/mission/completeMission",
    "missionType": "uniteCollectShop"
  });
}
function getDraw() {
  return $.api("/dm/front/jdBigAlliance/interactive/drawPost?open_id=&mix_nick=" + ($.buyerNick || "") + "&user_id=10299171", {
    "method": "/jdBigAlliance/interactive/drawPost",
    "dataType": "draw",
    "usedGameNum": "2"
  });
}
function getShopList() {
  return $.api("dm/front/jdBigAlliance/shop/shopList?open_id=&mix_nick=" + ($.buyerNick || "") + "&user_id=10299171", {
    "method": "/jdBigAlliance/shop/shopList"
  });
}
function getCompleteMission() {
  return $.api("/dm/front/jdBigAlliance/mission/completeMission?open_id=&mix_nick=" + ($.buyerNick || "") + "&user_id=10299171", {
    "method": "/jdBigAlliance/mission/completeMission",
    "missionType": "openCard",
    "shopId": $.venderId
  });
}
function load2() {
  return $.api("dm/front/jdBigAlliance/activity/load?open_id=&mix_nick=" + $.Token + "&user_id=10299171", {
    "jdToken": $.Token,
    "source": "01",
    "inviteNick": $.shareUuid || "",
    "shopId": $.venderId
  });
}