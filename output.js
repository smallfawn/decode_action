//Tue Nov 05 2024 09:38:38 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let skuIds = [];
$.version = "v1.4.0";
$.logic = async function () {
  if (!$.superVersion) {
    throw new Error("请更新脚本");
  }
  $.isBreak = false;
  $.bbbb = 0;
  if (!$.activityId || !$.activityUrl) {
    $.expire = true;
    $.putMsg("activityId|activityUrl不存在");
    return;
  }
  $.UA = $.ua();
  let lIliIIl = await $.isvObfuscator();
  if (lIliIIl.code !== "0") {
    $.putMsg("获取Token失败");
    return;
  }
  if ($.jinggengTypes.includes($.domain)) {
    let IlIiiIil = await $.api("front/setMixNick", "strTMMixNick=" + $.Token + "&userId=" + $.userId + "&source=01");
    if (!IlIiiIil.succ) {
      $.putMsg("setMixNick失败");
      return;
    }
    const l1l1iII = "showCart",
      iiiI1111 = await $.api("ql/front/" + l1l1iII, "id=" + $.activityId + "&user_id=" + $.userId),
      lIIIiI1l = cheerio.load(cheerio.load(iiiI1111).html());
    $.shopId = lIIIiI1l("#shop_sid").val();
    $.vender_id = lIIIiI1l("#vender_id").val();
    $.shopName = lIIIiI1l("#shop_title").val();
    $.rule = lIIIiI1l("#description").text();
    $.actLog = lIIIiI1l("#act_log").text();
    $.activityType = lIIIiI1l("#actType").val();
    const lI1lllIl = /(\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2})/g,
      Iil1ll = $.rule.match(lI1lllIl),
      l1i1Iill = Iil1ll[0],
      I1ilI = Iil1ll[1];
    $.runAll = !((!$.isBean || $.prizeNum < $.beanNumAll) && $.index > $.masterNum);
    if (!$.runAll) {
      $.putMsg("智能判断，停止运行");
      $.expire = true;
      return;
    }
    if (skuIds.length === 0) {
      const iIIlllll = $.rule.match(/加购(\d+)个宝贝后可以获得(\d+)(.*);/);
      if (iIIlllll) {
        $.needAddNum = iIIlllll[1];
        $.isBean = iIIlllll[3].includes("京豆");
        $.prizeNum = iIIlllll[2];
        $.prizeName = $.prizeNum + iIIlllll[3];
        if ($.prizeName.match(/优惠券/)) {
          this.expire = true;
          $.putMsg("垃圾活动，" + $.prizeName);
          return;
        }
        lIIIiI1l("div:contains(\"加购宝贝\")").each((iii1l1lI, l11I1i1i) => {
          const llil1l = lIIIiI1l(l11I1i1i).attr("id");
          if (llil1l) {
            skuIds.push(llil1l);
          }
        });
      }
    }
    $.actStartTime = new Date(l1i1Iill).getTime();
    $.actEndTime = new Date(I1ilI).getTime();
    if ($.actStartTime > $.timestamp()) {
      $.putMsg("活动未开始");
      $.expire = true;
      return;
    }
    if ($.actEndTime < $.timestamp()) {
      $.putMsg("活动已结束");
      $.expire = true;
      return;
    }
    if ($.actLog) {
      let iIIi11Il = JSON.parse($.actLog);
      if (iIIi11Il.isHandler) {
        $.putMsg("已领取过");
        return;
      }
    }
    skuIds.length === 0 && $.putMsg("获取奖励异常");
    for (let IliIII1I = 0; IliIII1I < skuIds.length; IliIII1I++) {
      const ilIl1ii = skuIds[IliIII1I];
      if (IliIII1I + 1 > $.needAddNum) {
        $.log("加购完成");
        break;
      }
      const ililI1il = await $.api("ql/front/postAddCart", "act_id=" + $.activityId + "&user_id=" + $.userId + "&itemId=" + ilIl1ii),
        I1iIlIlI = ililI1il.msg;
      if (ililI1il.succ && I1iIlIlI.startsWith("{")) {
        try {
          let IliIIiI1 = JSON.parse(I1iIlIlI);
          if (IliIIiI1.isSendSucc && IliIIiI1.drawAwardDto) {
            let I1ilIIil = IliIIiI1.drawAwardDto,
              ilI1IiI1 = $.getAwardText(IliIIiI1.drawAwardDto);
            $.putMsg(ilI1IiI1);
            I1ilIIil.awardType === "JD_GOODS" && ($.addressId = IliIIiI1.actLogId, $.prizeName = ilI1IiI1, await $.saveAddress());
            break;
          } else $.log(I1iIlIlI);
        } catch (Ii1li1i) {
          $.putMsg(I1iIlIlI);
        }
      } else {
        if (I1iIlIlI.includes("加购成功但不需要发奖")) {
          continue;
        }
        $.putMsg(I1iIlIlI);
        if (I1iIlIlI.match(/只有部分会员才可以参加活动/)) {
          break;
        }
      }
    }
    await $.complete();
    $.putMsg("未知异常");
    return;
  }
  if ($.domain.includes("gzsl-isv.isvjcloud.com")) {
    let li1Ilii1 = await $.api("wuxian/user/getGoodsGiftActivity/" + $.activityId, {
      "venderId": $.activityId,
      "token": $.Token,
      "source": "01"
    });
    if (li1Ilii1.status !== "1" && (await $.wxStop(li1Ilii1?.["msg"]))) return;
    $.log(li1Ilii1.activity.prizeSettings);
    if (li1Ilii1.status !== "1") {
      $.putMsg("获取礼包信息失败");
      return;
    }
    $.shopName = li1Ilii1.activity.detail;
    $.venderId = li1Ilii1.activity.venderId;
    $.shopId = li1Ilii1.activity.shopId;
    $.actStartTime = li1Ilii1.activity.startTime;
    $.actEndTime = li1Ilii1.activity.endTime;
    $.prizeList = li1Ilii1.activity.prizeSettings;
    let iiilIlII = $.prizeList.filter(IiIlilIl => !["2"].includes(IiIlilIl.source));
    if (iiilIlII.length === 0) {
      $.putMsg("垃圾或领完");
      $.expire = true;
      return;
    }
    let IiIi111 = li1Ilii1.activity.id,
      lii11i1 = await $.api("wuxian/user/getGoodsGiftPrizeAndWare/" + IiIi111 + "?wxToken=" + $.Token, {
        "token": $.Token,
        "wxToken": $.Token,
        "activityId": IiIi111,
        "source": "01"
      });
    lii11i1.status === "1" ? $.putMsg("" + lii11i1.data) : $.putMsg("" + lii11i1.msg);
    return;
  }
  if ($.hdbTypes.includes($.domain)) {
    await this.login();
    let i1i11lii = await this.api("/front/activity/loadFrontItems", {}),
      I1II1lII = await this.api("/front/activity/loadAddCartSetting", {});
    $.prizeInfo = this.getAwardPrizeInfo(this.prizeList[0]);
    $.runAll = !((!$.prizeInfo.isBean || $.prizeInfo.prizeNum < $.beanNumAll) && $.index > $.masterNum);
    if (!$.runAll) {
      $.putMsg("智能判断，停止运行");
      $.expire = true;
      return;
    }
    $.prizeName = this.getAwardText(this.prizeList[0]);
    $.needAddNum = I1II1lII.result.addCartSetting.itemAmount;
    if (I1II1lII.result.hasReceiveAward) {
      this.putMsg("已经领取过了");
      return;
    }
    for (let IiilIIlI = 0; IiilIIlI < $.needAddNum; IiilIIlI++) {
      await this.reportActionLog({
        "actionType": "addCart",
        "skuId": i1i11lii.result[IiilIIlI].skuId
      });
      skuIds.push(i1i11lii.result[IiilIIlI].skuId);
    }
    let ilIlIIIi = await this.api("/front/activity/postAddCartFrontAct", {});
    if (ilIlIIIi.result?.["succ"]) {
      this.putMsg($.prizeName);
    } else this.putMsg(ilIlIIIi.message || "未知结果");
    await $.complete();
    return;
  }
  if ($.activityType === "10024") {
    await this.login();
    let I11lIili = $.prizeList.filter(lIiIIl1I => lIiIIl1I.prizeType === 1 && lIiIIl1I.beanNum >= $.openCardBeanNum);
    $.prizeName = $.prizeList[0].prizeName;
    $.runAll = !($.prizeList.some(Iil1iil => Iil1iil.prizeType === 1 && Iil1iil.beanNum < $.beanNumAll) && $.index > $.masterNum);
    if (!$.runAll) {
      $.putMsg("智能判断，停止运行");
      $.expire = true;
      return;
    }
    let liIII1l = I11lIili.length === 1,
      llIl1II = await $.api("/api/task/addSku/activity", {});
    if (llIl1II.resp_code !== 0) {
      $.putMsg("获取活动失败");
      return;
    }
    let Iilillll = llIl1II.data.addWares.status,
      IiI1iI1I = llIl1II.data.addWares.taskId;
    $.needAddNum = llIl1II.data.addWares.finishNum;
    if (Iilillll === 1) {
      $.putMsg("已经领过");
      await $.complete();
      return;
    }
    let Ilii1Iii = llIl1II.data.prizeResultNum;
    if (Ilii1Iii === 0) {
      $.putMsg("垃圾或领完");
      $.expire = true;
      return;
    }
    skuIds = $.randomArray(llIl1II.data.addWares.skuInfoVO.map(liIlilil => liIlilil.skuId + ""), $.needAddNum);
    let Ii1IlII1 = await $.api("/api/task/addSku/toDo", {
      "taskId": IiI1iI1I,
      "skuId": skuIds[0]
    });
    if (Ii1IlII1.resp_code !== 0) {
      if (Ii1IlII1.resp_msg.includes("会员") && liIII1l) $.putMsg("现在去开卡"), await $.openCard();else {
        $.putMsg(Ii1IlII1.resp_msg);
        await $.wxStop(Ii1IlII1.resp_msg);
        return;
      }
    } else {
      if (Ii1IlII1?.["data"] && Ii1IlII1.data.status === 1) {
        $.putMsg($.prizeName);
        Ii1IlII1.data.prizeType === 3 && ($.addressId = Ii1IlII1.data.addressId, await $.saveAddress());
        return;
      }
    }
    for (let l11IIi1l of skuIds) {
      Ii1IlII1 = await $.api("/api/task/addSku/toDo", {
        "taskId": IiI1iI1I,
        "skuId": l11IIi1l
      });
      if (Ii1IlII1.resp_msg.includes("任务已做过")) continue;
      if (Ii1IlII1.resp_code !== 0) {
        $.putMsg(Ii1IlII1.resp_msg);
        if (/(会员等级不足)/.test(Ii1IlII1.resp_msg)) {
          break;
        }
      }
      if (Ii1IlII1?.["data"]) {
        $.putMsg(Ii1IlII1.data.prizeName);
        if (Ii1IlII1.data.prizeType === 3) {
          $.addressId = Ii1IlII1.data.addressId;
          await $.saveAddress();
        }
        break;
      }
    }
    await $.complete();
    return;
  }
  await $.getSimpleActInfoVo();
  if ($.expire) {
    return;
  }
  await $.getMyPing();
  if (!$.Pin) return;
  $.shopName = (await $.getShopBaseInfo())?.["shopName"] || "未知";
  if (!$.shopName) {
    $.log("商店名称:" + $.shopName);
    if ($.shopName.includes("成人") || $.shopName.includes("情趣")) {
      $.putMsg("商店黑名单，不跑了");
      $.expire = true;
      return;
    }
  }
  await $.accessLog();
  let lIIilliI = await $.api("wxCollectionActivity/activityContent", "activityId=" + $.activityId + "&pin=" + $.Pin),
    Iilil1ii = lIIilliI.data;
  if (!lIIilliI.result || !Iilil1ii) {
    $.putMsg(lIIilliI.errorMessage);
    return;
  }
  $.rule = Iilil1ii.rule;
  $.actStartTime = Iilil1ii.startTime;
  $.actEndTime = Iilil1ii.endTime;
  await $.getRuleSETime($.rule);
  let lli1Ilii = [6, 7, 9, 13, 14, 15, 16];
  if ($.index > $.masterNum) {
    lli1Ilii = [6];
  }
  if (!lli1Ilii.includes(Iilil1ii.drawInfo.drawInfoType)) {
    $.putMsg("垃圾或领完");
    $.expire = true;
    return;
  }
  let iiI11iI1 = Iilil1ii.drawInfo.drawInfo;
  $.runAll = !((iiI11iI1.type !== 6 || iiI11iI1.beanNum < $.beanNumAll) && $.index > $.masterNum);
  console.log("$.runAll" + $.runAll + "$.masterNum" + $.masterNum);
  if (!$.runAll) {
    $.putMsg("智能判断，停止运行");
    $.expire = true;
    return;
  }
  $.prizeName = Iilil1ii.drawInfo.name;
  $.needAddNum = Iilil1ii.needCollectionSize || 1;
  let ii1Ill1l = Iilil1ii.oneKeyAddCart * 1 === 1;
  $.isOpenCard = iiI11iI1.type === 6 && iiI11iI1.beanNum >= $.openCardBeanNum;
  if (Iilil1ii.cpvos.length < $.needAddNum) {
    $.putMsg("商品数量异常");
    $.expire = true;
    return;
  }
  skuIds = $.randomArray(Iilil1ii.cpvos.filter(ilI1Ill => !ilI1Ill.collection).map(iiII1ii => iiII1ii.skuId + "")).reverse();
  let iIilIli = 0,
    ll1Ii1 = false,
    iIIiliIl = "";
  for (let iililIi1 = 0; iililIi1 < skuIds.length && !ii1Ill1l; iililIi1++) {
    let l1lIilll = await this.api("wxCollectionActivity/" + ($.activityType * 1 === 5 ? "collection" : "addCart"), "activityId=" + $.activityId + "&pin=" + $.Pin + "&productId=" + skuIds[iililIi1]);
    if (l1lIilll.result) {
      iIilIli = l1lIilll.data.hasAddCartSize;
      if (l1lIilll.data.hasAddCartSize >= $.needAddNum) {
        $.log("加购完成，本次加购" + l1lIilll.data.hasAddCartSize + "个商品");
        ll1Ii1 = true;
        break;
      }
    } else {
      if (l1lIilll.errorMessage.includes("店铺会员")) {
        if ($.isOpenCard) {
          await $.openCard();
          l1lIilll = await $.api("wxCollectionActivity/addCart", "activityId=" + $.activityId + "&pin=" + $.Pin + "&productId=" + Iilil1ii.cpvos[iililIi1].skuId);
          if (l1lIilll.result) {
            if (l1lIilll.data.hasAddCartSize >= $.needAddNum) {
              $.log("加购完成，本次加购" + l1lIilll.data.hasAddCartSize + "个商品");
              break;
            }
          }
          $.putMsg("" + (l1lIilll.errorMessage || "未知"));
        }
        $.putMsg("" + l1lIilll.errorMessage);
        break;
      } else {
        if (iIIiliIl === l1lIilll.errorMessage) continue;
        iIIiliIl = l1lIilll.errorMessage;
        await $.wxStop(l1lIilll.errorMessage);
        $.putMsg("" + (l1lIilll.errorMessage || "未知"));
        if ($.expire) break;
        if (/(超出关注数量上限)/.test(l1lIilll.errorMessage)) break;
      }
    }
  }
  if (ii1Ill1l) {
    let iIi11Ill = await $.api("wxCollectionActivity/oneKeyAddCart", "activityId=" + $.activityId + "&pin=" + $.Pin + "&productIds=" + encodeURIComponent(JSON.stringify(skuIds)));
    if (iIi11Ill.result && iIi11Ill.data) $.log("加购完成，本次加购" + iIi11Ill.data.hasAddCartSize + "个商品"), ll1Ii1 = true;else {
      if (iIi11Ill.errorMessage.includes("店铺会员")) {
        if ($.isOpenCard) {
          await $.openCard();
          iIi11Ill = await $.api("wxCollectionActivity/oneKeyAddCart", "activityId=" + $.activityId + "&pin=" + $.Pin + "&productIds=" + encodeURIComponent(JSON.stringify(skuIds)));
          if (iIi11Ill.result) {
            iIi11Ill.data.hasAddCartSize >= $.needAddNum && $.log("加购完成，本次加购" + iIi11Ill.data.hasAddCartSize + "个商品");
          }
          $.putMsg("" + (iIi11Ill.errorMessage || "未知"));
        } else {
          $.putMsg("" + iIi11Ill.errorMessage);
        }
      } else await $.wxStop(iIi11Ill.errorMessage), $.putMsg("" + (iIi11Ill.errorMessage || "未知"));
    }
  }
  if (!ll1Ii1) try {
    await $.api("wxCollectionActivity/addCart", "activityId=" + $.activityId + "&pin=" + $.Pin + "&productId=" + Iilil1ii.cpvos[0].skuId);
    ll1Ii1 = true;
  } catch (liiii1l) {}
  if ($.expire) return;
  for (let ilIl1l1I = 0; ilIl1l1I < 10; ilIl1l1I++) {
    try {
      let I1liIili = await $.api("wxCollectionActivity/getPrize", "activityId=" + $.activityId + "&pin=" + $.Pin);
      if (I1liIili.result) {
        I1liIili.data.drawOk ? ($.addressId = I1liIili.data.addressId, $.prizeName = I1liIili.data.name, $.putMsg($.prizeName), I1liIili.data.drawInfoType === 7 && I1liIili.data.needWriteAddress === "y" && (await $.saveAddress())) : ($.putMsg(I1liIili.data.errorMessage), await $.wxStop(I1liIili.data.errorMessage));
        await $.complete();
        break;
      } else {
        if (/(未达到领奖条件)/.test(I1liIili.errorMessage)) {
          this.putMsg("" + I1liIili.errorMessage);
          break;
        }
        if (/(您已领过奖了|非法操作)/.test(I1liIili.errorMessage)) {
          this.putMsg("" + I1liIili.errorMessage);
          break;
        }
        await $.wxStop(I1liIili.errorMessage);
        $.putMsg("" + (I1liIili.errorMessage || "未知"));
        break;
      }
    } catch (li11liiI) {
      $.log(li11liiI);
    }
  }
  skuIds.length > 0 ? await $.carRmv(skuIds) : "";
};
$.after = async function () {
  try {
    this.msg.push("    加" + $.needAddNum + "件," + ($.prizeName || this.prizeList && this.prizeList[0]?.["prizeName"] || ""));
  } catch (ilIiI11I) {
    $.log(ilIiI11I);
  }
  console.log($.rule);
  $.msg.push("export M_WX_ADD_CART_URL=\"" + $.activityUrl + "\"");
};
async function adds(I1liilii, i1iiiill = 0) {
  let iIiIlIIi = await $.api("wxCollectionActivity/oneKeyAddCart", "activityId=" + $.activityId + "&pin=" + $.Pin + "&productIds=" + encodeURIComponent(JSON.stringify(I1liilii)));
  if (iIiIlIIi.result && iIiIlIIi.data) {
    $.log("加购完成，本次加购" + iIiIlIIi.data.hasAddCartSize + "个商品");
  } else iIiIlIIi.errorMessage.includes("会员") && i1iiiill === 0 && $.isOpenCard ? (await $.openCard(), await adds(I1liilii, 1)) : (await $.wxStop(iIiIlIIi.errorMessage), $.putMsg("" + (iIiIlIIi.errorMessage || "未知")));
}