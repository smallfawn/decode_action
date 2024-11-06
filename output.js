//Wed Nov 06 2024 02:46:23 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const activityUrl = process.env.jd_wxTeam_activityUrl || "",
  joinMember = !(process.env.jd_wxTeam_joinMember === "false"),
  isNotify = process.env.jd_wxTeam_Notify === "true",
  concMode = (process.env.jd_wxTeam_conc || process.env.jd_wxTeam_Concurrent) === "true",
  concThreads = process.env.jd_wxTeam_concThreads || process.env.jd_wxTeam_maxConcurrency || "3";
let concTimeout = process.env.jd_wxTeam_concTimeout || "60000",
  concMaxRetryTimes = process.env.jd_wxTeam_concRetry || "0",
  cookie = "",
  activityCookie = "",
  originCookie = "";
const cookiesArr = Object.keys(jdCookie).map(IIil1Ii1 => jdCookie[IIil1Ii1]).filter(ilil1Il1 => ilil1Il1);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
!(async () => {
  if (!activityUrl) {
    console.log("⚠ 请先定义必要的环境变量后再运行脚本");
    return;
  }
  const liii1IiI = common.parseUrl(activityUrl);
  if (!liii1IiI) {
    console.log("⚠ 请填写格式正确的链接");
    return;
  }
  $.activityUrl = activityUrl;
  $.activityId = common.getUrlParameter(activityUrl, "activityId");
  $.hostname = liii1IiI?.["hostname"];
  if ($.hostname) {
    if ($.hostname.includes("cjhy")) {
      $.activityMode = "cjhy";
    } else $.hostname.includes("lzkj") && ($.activityMode = "lzkj", $.hostname = "lzkj-isv.isvjd.com");
    $.baseUrl = "https://" + $.hostname;
    $.origin = $.baseUrl;
  }
  if (!$.activityId || !$.activityMode || !$.hostname) {
    console.log("⚠ 请填写格式正确的变量");
    return;
  }
  try {
    concMaxRetryTimes = parseInt(concMaxRetryTimes) > 0 ? parseInt(concMaxRetryTimes) : 0;
  } catch {
    concMaxRetryTimes = 0;
  }
  try {
    const iI1lllI = parseInt(concTimeout);
    concTimeout = iI1lllI;
  } catch {
    concTimeout = 60000;
  }
  notify.config({
    "title": $.name
  });
  console.log("活动入口：" + $.activityUrl);
  if (!concMode) {
    for (let iIliII1l = 0; iIliII1l < cookiesArr.length; iIliII1l++) {
      $.index = iIliII1l + 1;
      cookie = cookiesArr[iIliII1l];
      originCookie = cookiesArr[iIliII1l];
      common.setCookie(cookie);
      $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
      $.UA = common.genUA($.UserName);
      $.UUID = common.genUuid("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      $.te = Math.floor(Math.random() * 9000) + 1000;
      $.message = notify.create($.index, $.UserName);
      $.nickName = "";
      await Main();
      common.unsetCookie();
      if ($.outFlag || $.runEnd) break;
    }
    const lII1ll = notify.getMessage();
    lII1ll && (console.log("\n📣 运行结果\n" + lII1ll.replace(/：/g, " ➜ ")), isNotify && (notify.appendContent("\n【活动地址】" + $.activityUrl), await notify.push()));
  } else {
    console.log("🔀 已开启并发模式，当前设置线程数为 " + concThreads);
    for (let i11I1I1i = 0; i11I1I1i < 1; i11I1I1i++) {
      $.index = i11I1I1i + 1;
      cookie = cookiesArr[i11I1I1i];
      originCookie = cookiesArr[i11I1I1i];
      common.setCookie(cookie);
      $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
      console.log("\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "******\n");
      $.UA = common.genUA($.UserName);
      $.UUID = common.genUuid("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
      $.te = Math.floor(Math.random() * 9000) + 1000;
      $.message = notify.create($.index, $.UserName);
      $.nickName = "";
      await Main();
      common.unsetCookie();
      if ($.outFlag || $.runEnd) break;
    }
    !$.outFlag && !$.runEnd && $.captainUuid && (console.log(""), await concMain());
    const i1IIil1 = notify.getMessage();
    i1IIil1 && isNotify && (notify.appendContent("\n【活动地址】" + $.activityUrl), await notify.push());
  }
})().catch(l1llI1iI => $.logErr(l1llI1iI)).finally(() => $.done());
async function Main() {
  try {
    $.skipRun = false;
    $.isMember = false;
    $.needJoinMember = false;
    $.secretPin = "";
    $.pinToken = "";
    $.LZ_AES_PIN = "";
    activityCookie = "";
    $.yunMidImageUrl = "";
    if ($.skipRun || $.runEnd || $.outFlag) return;
    for (let illII1il = 0; illII1il < 3; illII1il++) {
      activityCookie = "";
      await getFirstLZCK($.activityUrl);
      await $.wait(500);
      if ($.runEnd) return;
      if (activityCookie) {
        $.skipRun = false;
        break;
      }
    }
    if ($.skipRun) {
      console.log("获取 LZ_TOKEN 失败！");
      $.message.fix("获取[LZ_TOKEN]失败");
      $.index === 1 && ($.runEnd = true);
      return;
    }
    if ($.outFlag || $.runEnd) return;
    if ($.index === 1) {
      await sendRequest("getSimpleActInfoVo");
      if (!$.venderId) {
        console.log("getSimpleActInfoVo 未能获取店铺信息");
        $.message.fix("未能获取店铺信息");
        $.runEnd = true;
        return;
      }
    }
    $.token = await getToken(originCookie, $.baseUrl);
    if (!$.token) {
      console.log("获取 Token 失败！");
      $.message.fix("获取[Token]失败");
      $.index === 1 && ($.runEnd = true);
      return;
    }
    if ($.activityMode === "cjhy") {
      await sendRequest("initPinToken");
      if ($.runEnd || $.skipRun || $.outFlag) return;
      if (!$.pinToken) {
        console.log("获取 pinToken 失败！");
        $.message.fix("获取[pinToken]失败");
        if ($.index === 1) {
          $.runEnd = true;
        }
        return;
      }
    } else {
      await sendRequest("getMyPing");
      if ($.runEnd || $.skipRun || $.outFlag) return;
      if (!$.secretPin) {
        console.log("未能获取用户鉴权信息！");
        $.message.fix("未能获取用户鉴权信息");
        $.index === 1 && ($.runEnd = true);
        return;
      }
    }
    if (!concMode) $.activityMode === "cjhy" ? await $.wait(1000) : await $.wait(500);
    $.LZ_AES_PIN = common.getCookieValue(activityCookie, "LZ_AES_PIN");
    switch ($.activityMode) {
      case "lzkj":
        $.formatPin = $.secretPin;
        break;
      case "cjhy":
        $.formatPin = encodeURIComponent($.secretPin);
        break;
    }
    if (!concMode) $.activityMode === "cjhy" ? await $.wait(500) : await $.wait(200);
    switch ($.activityMode) {
      case "lzkj":
        await sendRequest("accessLogWithAD");
        break;
      case "cjhy":
        await sendRequest("accessLog");
        break;
    }
    if (!concMode) $.activityMode === "cjhy" ? await $.wait(500) : await $.wait(200);
    if ($.index === 1) {
      await sendRequest("activityContent");
      if ($.runEnd || $.outFlag) return;
      const Iii11II = $.activityContent?.["actStatus"],
        lIli11II = $.activityContent?.["active"],
        liIi11II = $.activityContent?.["list"],
        ili1iiI1 = $.activityContent?.["successRetList"],
        i1iil1II = $.activityContent?.["signUuid"],
        i1lIi1i = $.activityContent?.["canCreate"];
      if (!lIli11II) {
        console.log("未能获取到活动信息！");
        $.message.fix("未能获取到活动信息");
        return;
      }
      if (Iii11II === 0) {
        console.log("活动将在 " + lIli11II.startTimeStr + " 开始，晚点再来吧~");
        $.message.fix("活动尚未进行，将于 " + lIli11II.startTimeStr + " 开始");
        $.runEnd = true;
        return;
      }
      $.membersPinArray = [];
      const lIiilil1 = ili1iiI1 || [],
        l11illIi = liIi11II || [];
      let lIiliili = "",
        IIII11il = "";
      switch (lIli11II.prizeType) {
        case 6:
          lIiliili = "京豆", IIII11il = "🐶";
          break;
        case 9:
          lIiliili = "积分", IIII11il = "🎟️";
          break;
        default:
          lIiliili = "未知", IIII11il = "❓";
      }
      await sendRequest("shopInfo");
      const Il1ii1l = ($.shopName ? "店铺名称：#" + $.shopName + "\n" : "") + "开始时间：" + lIli11II.startTimeStr + "\n结束时间：" + lIli11II.endTimeStr + "\n奖品类型：" + lIiliili + " " + IIII11il + "\n总计奖池：" + lIli11II.sendNumbers + "\n可组队伍：" + lIli11II.maxGroup + " 🚗\n瓜分数量：" + 5 * lIli11II.prizeNumbers + " " + IIII11il + "\n队长奖励：" + lIli11II.extraPrizeNumbers + " " + IIII11il + "\n成员获得：" + lIli11II.prizeNumbers + " " + IIII11il + "\n最高可得：" + (lIli11II.maxGroup * (lIli11II.extraPrizeNumbers + lIli11II.prizeNumbers) + lIli11II.prizeNumbers) + " " + IIII11il + "\n";
      console.log(Il1ii1l);
      notify.appendContent("\n" + Il1ii1l);
      if (Iii11II === -1) {
        console.log("活动已于 " + lIli11II.endTimeStr + " 结束，下次早点来吧~");
        $.message.fix("活动已于 " + lIli11II.endTimeStr + " 结束");
        $.runEnd = true;
        return;
      }
      if (ili1iiI1.length === lIli11II.maxGroup) {
        console.log("活动创建队伍已达到上限且成员已满");
        $.message.fix("活动创建队伍已达到上限且成员已满");
        $.runEnd = true;
        return;
      }
      const llliIi1 = lIli11II.maxGroup * 4;
      if (i1iil1II) {
        $.captainUuid = i1iil1II;
        console.log("已经是队长了，队伍ID：" + $.captainUuid);
        $.message.fix("已是队长");
        lIiilil1.length > 0 && lIiilil1.forEach(Il1iI111 => {
          const Il1i1llI = Il1iI111?.["memberList"] || [];
          Il1i1llI.forEach(l1i1lI => {
            l1i1lI?.["pin"] !== $.secretPin && $.membersPinArray.push(l1i1lI?.["pin"]);
          });
        });
        l11illIi.length > 1 && l11illIi.forEach(iIII1Il1 => {
          iIII1Il1?.["pin"] !== $.secretPin && $.membersPinArray.push(iIII1Il1?.["pin"]);
        });
        $.canJoinMembers = llliIi1 - $.membersPinArray.length;
      } else {
        if (i1lIi1i) {
          await sendRequest("saveCaptain");
          if ($.needJoinMember && joinMember) {
            const lIlil11i = await common.joinShopMember($.venderId);
            lIlil11i && (console.log("加入店铺会员成功"), $.isMember = true, await sendRequest("saveCaptain"));
          }
          if ($.runEnd || $.outFlag) return;
          $.canJoinMembers = llliIi1;
        } else {
          console.log("未知用户场景");
          $.message.fix("未知用户场景");
          $.runEnd = true;
          return;
        }
      }
    } else {
      if ($.membersPinArray.length > 0 && $.membersPinArray.includes($.secretPin)) {
        console.log("已经是此队的成员了，跳过");
        $.message.fix("已是此队成员");
        return;
      }
      await sendRequest("saveMember");
      if ($.needJoinMember && joinMember) {
        const ll1l111i = await common.joinShopMember($.venderId);
        ll1l111i && (console.log("加入店铺会员成功"), $.isMember = true, await sendRequest("saveMember"));
      }
    }
    if (!concMode) $.activityMode === "cjhy" ? await $.wait(1000) : await $.wait(500);
  } catch (II1Iill1) {
    console.log("❌ 脚本运行遇到了错误\n" + II1Iill1);
  }
}
async function concMain() {
  await common.concTask(concThreads, cookiesArr, async (IiiiIII1, lIliIIIi) => {
    if (lIliIIIi === 1) return;
    const IlI1iI1i = decodeURIComponent(common.getCookieValue(IiiiIII1, "pt_pin")),
      IliillI1 = notify.create(lIliIIIi, IlI1iI1i),
      IiI1i1 = common.genUA(IlI1iI1i);
    let l1ilII1I = "",
      I1iIiiIl = "",
      IIl1iiII = "",
      iIIIlii = "",
      I1Ii11I1 = "",
      I1l1iliI = "",
      liIlIlI = "",
      llIi1II = "",
      IIiiII1i = false,
      Il1Ii111 = false;
    await iIilIi1i();
    if (!I1l1iliI) {
      IliillI1.fix("获取[LZ_COOKIE]失败");
      console.log(IliillI1.getInlineContent());
      return;
    }
    l1ilII1I = await getToken(IiiiIII1, $.baseUrl);
    if (!l1ilII1I) {
      IliillI1.fix("获取[Token]失败");
      console.log(IliillI1.getInlineContent());
      return;
    }
    if ($.activityMode === "cjhy") {
      await iI1I11Ii("initPinToken");
      if (!IIl1iiII) {
        IliillI1.fix("获取[pinToken]失败");
        console.log(IliillI1.getInlineContent());
        return;
      }
    } else await iI1I11Ii("getMyPing");
    if (!I1iIiiIl) {
      IliillI1.fix("未能获取用户鉴权信息");
      console.log(IliillI1.getInlineContent());
      return;
    }
    switch ($.activityMode) {
      case "lzkj":
        liIlIlI = I1iIiiIl;
        break;
      case "cjhy":
        liIlIlI = encodeURIComponent(I1iIiiIl);
        break;
    }
    if ($.canJoinMembers <= 0) return {
      "runEnd": true
    };
    if ($.membersPinArray.length > 0 && $.membersPinArray.includes(I1iIiiIl)) IliillI1.fix("已是此队成员");else {
      await iI1I11Ii("saveMember");
      if (Il1Ii111) return console.log(IliillI1.getInlineContent()), {
        "runEnd": true
      };
      if (IIiiII1i && joinMember) {
        const lilIiIIl = await common.joinShopMember($.venderId, IiiiIII1);
        lilIiIIl ? (IliillI1.insert("加入店铺会员成功"), await iI1I11Ii("saveMember")) : IliillI1.insert("加入店铺会员失败");
        if (Il1Ii111) {
          return console.log(IliillI1.getInlineContent()), {
            "runEnd": true
          };
        }
      }
    }
    console.log(IliillI1.getInlineContent());
    async function Ii11l1lI(II1l1l1, Il111I11) {
      switch (II1l1l1) {
        case "getMyPing":
        case "initPinToken":
          if (Il111I11.result === true && Il111I11.data) I1iIiiIl = Il111I11.data?.["secretPin"], llIi1II = Il111I11.data?.["yunMidImageUrl"];else Il111I11.errorMessage && IliillI1.fix(II1l1l1 + " " + Il111I11.errorMessage);
          break;
        case "saveMember":
          if (Il111I11.result === true && Il111I11.data) IliillI1.insert("加入队伍成功"), $.canJoinMembers -= 1, $.canJoinMembers <= 0 && (IliillI1.insert("战队已满运行完毕"), Il1Ii111 = true);else {
            if (Il111I11.errorMessage) {
              if (["组队完成", "已满"].some(IIiiiliI => Il111I11.errorMessage.includes(IIiiiliI))) $.canJoinMembers = 0, IliillI1.insert("战队已满运行完毕"), Il1Ii111 = true;else {
                if (["会员", "开卡"].some(lilIiill => Il111I11.errorMessage.includes(lilIiill))) IIiiII1i = true, !joinMember && IliillI1.fix(Il111I11.errorMessage);else {
                  IliillI1.fix(Il111I11.errorMessage);
                  for (let I1I111II of ["未开始", "结束", "不存在", "不在"]) {
                    Il111I11.errorMessage.includes(I1I111II) && (Il1Ii111 = true);
                  }
                }
              }
            }
          }
          break;
      }
    }
    async function iI1I11Ii(iilil1Ii) {
      const i11iI1I1 = "https://img10.360buyimg.com/imgzone/jfs/t1/21383/2/6633/3879/5c5138d8E0967ccf2/91da57c5e2166005.jpg";
      let liiI1lli = $.baseUrl,
        Ii1IiIi1 = null,
        l1iIl1Il = null,
        iiillIIl = null,
        IIIll1 = "POST";
      switch (iilil1Ii) {
        case "getMyPing":
          liiI1lli += "/customer/getMyPing", Ii1IiIi1 = {
            "token": l1ilII1I,
            "fromType": "APP",
            "userId": $.venderId
          };
          break;
        case "initPinToken":
          IIIll1 = "GET", liiI1lli += "/customer/initPinToken", iiillIIl = {
            "status": "1",
            "activityId": $.activityId,
            "jdToken": l1ilII1I,
            "source": "01",
            "venderId": $.venderId,
            "uuid": common.genUuid("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"),
            "clientTime": Date.now()
          };
          break;
        case "saveMember":
          liiI1lli += "/wxTeam/saveMember", Ii1IiIi1 = {
            "activityId": $.activityId,
            "signUuid": $.captainUuid,
            "pin": liIlIlI,
            "pinImg": llIi1II || i11iI1I1,
            "venderId": $.venderId
          };
          break;
      }
      const liil1i1I = $.activityMode === "cjhy" && wuxianDefense.isDefenseApi(liiI1lli.replace($.baseUrl, "").split("?")[0]);
      liil1i1I && (Ii1IiIi1?.["pin"] && (Ii1IiIi1.pin = encodeURIComponent(I1iIiiIl)), l1iIl1Il = {
        "ecyText": wuxianDefense.encrypt({
          "actId": $.activityId,
          ...Ii1IiIi1
        }, IIl1iiII, iIIIlii)
      });
      const Iillilil = {
        "url": liiI1lli,
        "method": IIIll1,
        "headers": {
          "Accept": "application/json",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
          "Connection": "keep-alive",
          "Content-Type": liil1i1I ? "application/json" : "application/x-www-form-urlencoded",
          "Cookie": I1l1iliI.trim(),
          "Host": $.hostname,
          "Origin": $.origin,
          "Referer": $.activityUrl,
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          "User-Agent": IiI1i1,
          "X-Requested-With": "XMLHttpRequest"
        },
        "params": iiillIIl,
        "data": liil1i1I ? l1iIl1Il : Ii1IiIi1,
        "timeout": 60000
      };
      IIIll1 === "GET" && (delete Iillilil.data, delete Iillilil.headers["Content-Type"]);
      const ilii111I = 1 + concMaxRetryTimes;
      let iIiIiII1 = 0,
        l11iIi11 = null;
      while (iIiIiII1 < ilii111I) {
        const IliIi111 = await common.request(Iillilil);
        if (!IliIi111.success) {
          l11iIi11 = iilil1Ii + " 请求失败 ➜ " + IliIi111.error;
          iIiIiII1++;
          IliIi111.status && IliIi111.status === 500 && liil1i1I && (Iillilil.data = {
            "ecyText": wuxianDefense.encrypt({
              "actId": $.activityId,
              ...Ii1IiIi1
            }, IIl1iiII, iIIIlii)
          });
          continue;
        }
        if (["accessLog", "accessLogWithAD"].includes(iilil1Ii)) {
          break;
        }
        if (!IliIi111.data) {
          l11iIi11 = iilil1Ii + " 请求失败 ➜ 无响应数据";
          iIiIiII1++;
          liil1i1I && (Iillilil.data = {
            "ecyText": wuxianDefense.encrypt({
              "actId": $.activityId,
              ...Ii1IiIi1
            }, IIl1iiII, iIIIlii)
          });
          continue;
        }
        const iI1Iil1 = common.getResponseCookie(IliIi111, I1l1iliI);
        switch (iilil1Ii) {
          case "getMyPing":
            I1Ii11I1 = common.getCookieValue(iI1Iil1, "LZ_AES_PIN");
            break;
          case "initPinToken":
            I1Ii11I1 = common.getCookieValue(iI1Iil1, "LZ_AES_PIN"), IIl1iiII = common.getCookieValue(iI1Iil1, "pToken"), iIIIlii = common.getCookieValue(iI1Iil1, "te");
            break;
        }
        ["getMyPing"].includes(iilil1Ii) && (I1l1iliI = iI1Iil1);
        !common.getCookieValue(I1l1iliI, "LZ_AES_PIN") && I1Ii11I1 && (I1l1iliI += "LZ_AES_PIN=" + I1Ii11I1 + "; ");
        !common.getCookieValue(I1l1iliI, "pToken") && IIl1iiII && (I1l1iliI += "pToken=" + IIl1iiII + "; ");
        !common.getCookieValue(I1l1iliI, "AUTH_C_USER") && I1iIiiIl && (I1l1iliI += "AUTH_C_USER=" + I1iIiiIl + "; ");
        !common.getCookieValue(I1l1iliI, "te") && iIIIlii && (I1l1iliI += "te=" + iIIIlii + "; ");
        Ii11l1lI(iilil1Ii, IliIi111.data);
        break;
      }
      iIiIiII1 >= ilii111I && !["getGiveContent", "shopInfo", "accessLogWithAD", "accessLog"].includes(iilil1Ii) && IliillI1.fix(l11iIi11);
    }
    async function iIilIi1i() {
      I1l1iliI = "";
      const llill1Ii = {
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
          "timeout": concTimeout
        },
        llIlilIl = 3;
      let Il11l11l = 0;
      while (Il11l11l < llIlilIl) {
        const ili1iIII = await common.request(llill1Ii);
        if (!ili1iIII.success) {
          console.log("getFirstLZCK 请求失败 ➜ " + ili1iIII.error);
          Il11l11l++;
          continue;
        }
        if (!ili1iIII.data) {
          console.log("getFirstLZCK 请求失败 ➜ 无响应数据");
          Il11l11l++;
          continue;
        }
        const l1I11I1I = common.getResponseCookie(ili1iIII);
        if (l1I11I1I.includes("LZ_TOKEN_KEY") && l1I11I1I.includes("LZ_TOKEN_VALUE")) {
          I1l1iliI = l1I11I1I;
          break;
        }
      }
    }
  });
  console.log("\n并发运行完毕");
}
async function handleResponse(iIiiIlli, llI1iIIl) {
  try {
    switch (iIiiIlli) {
      case "getMyPing":
        if (llI1iIIl.result === true && llI1iIIl.data) $.secretPin = llI1iIIl.data?.["secretPin"], $.nickname = llI1iIIl.data?.["nickname"];else llI1iIIl.errorMessage ? (console.log(iIiiIlli + " " + llI1iIIl.errorMessage), $.message.fix(llI1iIIl.errorMessage), $.index === 1 && ($.runEnd = true)) : (console.log("❓" + iIiiIlli + " " + JSON.stringify(llI1iIIl)), $.index === 1 && ($.runEnd = true));
        break;
      case "initPinToken":
        if (llI1iIIl.result === true && llI1iIIl.data) $.secretPin = llI1iIIl.data?.["secretPin"], $.nickname = llI1iIIl.data?.["nickname"], $.yunMidImageUrl = llI1iIIl.data?.["yunMidImageUrl"];else llI1iIIl.errorMessage ? (console.log(iIiiIlli + " " + llI1iIIl.errorMessage), $.message.fix(llI1iIIl.errorMessage), $.index === 1 && ($.runEnd = true)) : (console.log("❓" + iIiiIlli + " " + JSON.stringify(llI1iIIl)), $.index === 1 && ($.runEnd = true));
        break;
      case "getSimpleActInfoVo":
        if (llI1iIIl.result === true && llI1iIIl.data) $.venderId = llI1iIIl.data?.["venderId"], $.shopId = llI1iIIl.data?.["shopId"], $.activityType = llI1iIIl.data?.["activityType"];else llI1iIIl.errorMessage ? console.log(iIiiIlli + " " + llI1iIIl.errorMessage) : console.log("❓" + iIiiIlli + " " + JSON.stringify(llI1iIIl));
        break;
      case "getActMemberInfo":
        if (llI1iIIl.result === true && llI1iIIl.data) $.isMember = llI1iIIl.data.openCard || false;else llI1iIIl.errorMessage ? console.log(iIiiIlli + " " + llI1iIIl.errorMessage) : console.log("❓" + iIiiIlli + " " + JSON.stringify(llI1iIIl));
      case "getOpenCardInfo":
        if (llI1iIIl.result === true && llI1iIIl.data) $.isMember = llI1iIIl.data.openedCard || false;else llI1iIIl.errorMessage ? console.log(iIiiIlli + " " + llI1iIIl.errorMessage) : console.log("❓" + iIiiIlli + " " + JSON.stringify(llI1iIIl));
        break;
      case "activityContent":
        if (llI1iIIl.result === true && llI1iIIl.data) $.activityContent = llI1iIIl.data;else {
          if (llI1iIIl.errorMessage) {
            for (let I1IIIiIi of ["未开始", "结束", "不存在", "不在"]) {
              if (llI1iIIl.errorMessage.includes(I1IIIiIi)) {
                $.runEnd = true;
                break;
              }
            }
            console.log(iIiiIlli + " " + llI1iIIl.errorMessage);
            $.message.fix(llI1iIIl.errorMessage);
          } else console.log("❓" + iIiiIlli + " " + JSON.stringify(llI1iIIl));
        }
        break;
      case "shopInfo":
        if (llI1iIIl.result === true && llI1iIIl.data) $.shopName = llI1iIIl.data?.["shopName"];else llI1iIIl.errorMessage ? console.log("" + (llI1iIIl.errorMessage || "")) : console.log("❓" + iIiiIlli + " " + JSON.stringify(llI1iIIl));
        break;
      case "saveCaptain":
        if (llI1iIIl.result === true && llI1iIIl.data) $.captainUuid = llI1iIIl.data.signUuid, console.log("创建队伍成功"), $.message.fix("创建队伍成功");else {
          if (llI1iIIl.errorMessage) ["会员", "开卡"].some(i1I1ilIi => llI1iIIl.errorMessage.includes(i1I1ilIi)) ? ($.needJoinMember = true, !joinMember && ($.message.fix(llI1iIIl.errorMessage), $.runEnd = true)) : $.message.fix(llI1iIIl.errorMessage), console.log(llI1iIIl.errorMessage);else {
            console.log("❓" + iIiiIlli + " " + JSON.stringify(llI1iIIl));
            $.runEnd = true;
          }
        }
        break;
      case "saveMember":
        if (llI1iIIl.result === true && llI1iIIl.data) console.log("加入队伍成功"), $.message.fix("加入队伍成功"), $.canJoinMembers -= 1, $.canJoinMembers <= 0 && (console.log("\n战队已满，运行完毕"), $.runEnd = true);else {
          if (llI1iIIl.errorMessage) {
            if (["组队完成", "已满"].some(IIiilIll => llI1iIIl.errorMessage.includes(IIiilIll))) {
              $.canJoinMembers = 0;
              $.message.fix("战队已满运行完毕");
              $.runEnd = true;
            } else {
              if (["会员", "开卡"].some(IIiIIIiI => llI1iIIl.errorMessage.includes(IIiIIIiI))) {
                $.needJoinMember = true;
                !joinMember && $.message.fix(llI1iIIl.errorMessage);
              } else {
                for (let l11l11II of ["未开始", "结束", "不存在", "不在"]) {
                  if (llI1iIIl.errorMessage.includes(l11l11II)) {
                    $.runEnd = true;
                    break;
                  }
                }
                $.message.fix(llI1iIIl.errorMessage);
              }
            }
            console.log(llI1iIIl.errorMessage);
          } else console.log("❓" + iIiiIlli + " " + JSON.stringify(llI1iIIl));
        }
        break;
    }
  } catch (I1lI1lI1) {
    console.log("❌ 未能正确处理 " + iIiiIlli + " 请求响应 " + (I1lI1lI1.message || I1lI1lI1));
  }
}
async function sendRequest(iI11i1iI) {
  if ($.runEnd || $.outFlag) return;
  const IIi11 = "https://img10.360buyimg.com/imgzone/jfs/t1/21383/2/6633/3879/5c5138d8E0967ccf2/91da57c5e2166005.jpg";
  let I1111iil = $.baseUrl,
    IiiliIIl = null,
    Iii1l11l = null,
    ii1liIli = null,
    ii1IIlI1 = "POST";
  switch (iI11i1iI) {
    case "getMyPing":
      I1111iil += "/customer/getMyPing", IiiliIIl = {
        "token": $.token,
        "fromType": "APP",
        "userId": $.venderId
      };
      break;
    case "getSimpleActInfoVo":
      I1111iil += "/customer/getSimpleActInfoVo", IiiliIIl = {
        "activityId": $.activityId
      };
      break;
    case "initPinToken":
      ii1IIlI1 = "GET", I1111iil += "/customer/initPinToken", ii1liIli = {
        "status": "1",
        "activityId": $.activityId,
        "jdToken": $.token,
        "source": "01",
        "venderId": $.venderId,
        "uuid": $.UUID,
        "clientTime": Date.now()
      };
      break;
    case "accessLog":
      I1111iil += "/common/accessLog", IiiliIIl = {
        "venderId": $.venderId,
        "code": $.activityType,
        "pin": $.formatPin,
        "activityId": $.activityId,
        "pageUrl": $.activityUrl,
        "subType": "app",
        "adSource": ""
      };
      break;
    case "accessLogWithAD":
      I1111iil += "/common/accessLogWithAD", IiiliIIl = {
        "venderId": $.venderId,
        "code": $.activityType,
        "pin": $.formatPin,
        "activityId": $.activityId,
        "pageUrl": $.activityUrl,
        "subType": "app"
      };
      break;
    case "getActMemberInfo":
      I1111iil += "/wxCommonInfo/getActMemberInfo", IiiliIIl = {
        "activityId": $.activityId,
        "venderId": $.venderId,
        "pin": $.formatPin
      };
      break;
    case "getOpenCardInfo":
      I1111iil += "/mc/new/brandCard/common/shopAndBrand/getOpenCardInfo", IiiliIIl = {
        "venderId": $.venderId,
        "buyerPin": $.formatPin,
        "activityType": $.activityType
      };
      break;
    case "activityContent":
      I1111iil += "/wxTeam/activityContent", IiiliIIl = {
        "activityId": $.activityId,
        "pin": $.formatPin,
        "signUuid": ""
      };
      break;
    case "shopInfo":
      I1111iil += "/wxTeam/shopInfo", IiiliIIl = {
        "activityId": $.activityId
      };
      break;
    case "saveCaptain":
      I1111iil += "/wxTeam/saveCaptain", IiiliIIl = {
        "activityId": $.activityId,
        "pin": $.formatPin,
        "pinImg": $.yunMidImageUrl || IIi11,
        "venderId": $.venderId
      };
      break;
    case "saveMember":
      I1111iil += "/wxTeam/saveMember", IiiliIIl = {
        "activityId": $.activityId,
        "signUuid": $.captainUuid,
        "pin": $.formatPin,
        "pinImg": $.yunMidImageUrl || IIi11,
        "venderId": $.venderId
      };
      break;
    default:
      console.log("❌ 未知请求 " + iI11i1iI);
      return;
  }
  const iliIII1i = $.activityMode === "cjhy" && wuxianDefense.isDefenseApi(I1111iil.replace($.baseUrl, "").split("?")[0]);
  if (iliIII1i) {
    IiiliIIl?.["pin"] && (IiiliIIl.pin = encodeURIComponent($.secretPin));
    Iii1l11l = {
      "ecyText": wuxianDefense.encrypt({
        "actId": $.activityId,
        ...IiiliIIl
      }, $.pinToken, $.te)
    };
  }
  const ill1iI1l = {
    "url": I1111iil,
    "method": ii1IIlI1,
    "headers": {
      "Accept": "application/json",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
      "Connection": "keep-alive",
      "Content-Type": iliIII1i ? "application/json" : "application/x-www-form-urlencoded",
      "Cookie": activityCookie.trim(),
      "Host": $.hostname,
      "Origin": $.origin,
      "Referer": $.activityUrl,
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": $.UA || "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/121.0.0.0",
      "X-Requested-With": "XMLHttpRequest"
    },
    "params": ii1liIli,
    "data": iliIII1i ? Iii1l11l : IiiliIIl,
    "timeout": 30000
  };
  ii1IIlI1 === "GET" && (delete ill1iI1l.data, delete ill1iI1l.headers["Content-Type"]);
  const ll11IIIl = 5;
  let lI1Il1II = 0,
    lill1I11 = null,
    llliIlIi = false;
  while (lI1Il1II < ll11IIIl) {
    lI1Il1II > 0 && (await $.wait(1000));
    const lII11lil = await common.request(ill1iI1l);
    if (!lII11lil.success) {
      lill1I11 = iI11i1iI + " 请求失败 ➜ " + lII11lil.error;
      lI1Il1II++;
      if (lII11lil.status) {
        if (lII11lil.status === 500 && iliIII1i) ill1iI1l.data = {
          "ecyText": wuxianDefense.encrypt({
            "actId": $.activityId,
            ...IiiliIIl
          }, $.pinToken, $.te)
        };else {
          if ([403, 493].includes(lII11lil.status)) {
            llliIlIi = true;
          }
        }
      }
      continue;
    }
    if (["accessLog", "accessLogWithAD"].includes(iI11i1iI)) break;
    if (!lII11lil.data) {
      lill1I11 = iI11i1iI + " 请求失败 ➜ 无响应数据";
      lI1Il1II++;
      iliIII1i && (ill1iI1l.data = {
        "ecyText": wuxianDefense.encrypt({
          "actId": $.activityId,
          ...IiiliIIl
        }, $.pinToken, $.te)
      });
      continue;
    }
    const lilIII1I = common.getResponseCookie(lII11lil, activityCookie);
    let iiIIii1 = "";
    switch (iI11i1iI) {
      case "getMyPing":
        iiIIii1 = common.getCookieValue(lilIII1I, "LZ_AES_PIN");
        iiIIii1 ? $.LZ_AES_PIN = iiIIii1 : (console.log("获取 LZ_AES_PIN 失败！"), $.message.fix("获取[LZ_AES_PIN]失败"), $.skipRun = true);
        break;
      case "initPinToken":
        const iiliiII1 = common.getCookieValue(lilIII1I, "pToken");
        if (iiliiII1) $.pinToken = iiliiII1;else {
          console.log("获取 pinToken 失败！");
          $.message.fix("获取[pinToken]失败");
          $.skipRun = true;
          break;
        }
        iiIIii1 = common.getCookieValue(lilIII1I, "LZ_AES_PIN");
        if (iiIIii1) $.LZ_AES_PIN = iiIIii1;else {
          console.log("获取 LZ_AES_PIN 失败！");
          $.message.fix("获取[LZ_AES_PIN]失败");
          $.skipRun = true;
          break;
        }
        const I1l1Illl = common.getCookieValue(lilIII1I, "te");
        I1l1Illl && ($.te = I1l1Illl);
        break;
    }
    ["getMyPing"].includes(iI11i1iI) && (activityCookie = lilIII1I);
    iiIIii1 = common.getCookieValue(activityCookie, "LZ_AES_PIN");
    !iiIIii1 && $.LZ_AES_PIN && (activityCookie += "LZ_AES_PIN=" + $.LZ_AES_PIN + "; ");
    const IIi1i1i = common.getCookieValue(activityCookie, "pToken");
    !IIi1i1i && $.pinToken && (activityCookie += "pToken=" + $.pinToken + "; ");
    const Il111I1 = common.getCookieValue(activityCookie, "AUTH_C_USER");
    !Il111I1 && $.secretPin && (activityCookie += "AUTH_C_USER=" + $.secretPin + "; ");
    const liiIIIlI = common.getCookieValue(activityCookie, "te");
    !liiIIIlI && $.te && (activityCookie += "te=" + $.te + "; ");
    await handleResponse(iI11i1iI, lII11lil.data);
    llliIlIi = false;
    break;
  }
  if (lI1Il1II >= ll11IIIl) {
    console.log(lill1I11);
    if (llliIlIi && !["accessLogWithAD", "accessLog"].includes(iI11i1iI)) {
      $.outFlag = true;
      if ($.message) {
        $.message.fix(lill1I11);
      }
    }
  }
}
async function getFirstLZCK(I1I1Il1I) {
  $.skipRun = true;
  const Ilill11I = {
      "url": I1I1Il1I,
      "method": "GET",
      "headers": {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "cross-site",
        "Referer": I1I1Il1I,
        "User-Agent": $.UA
      },
      "timeout": 30000
    },
    lilliIi1 = 3;
  let i111Ilii = 0,
    liliI1ll = null,
    lI11111i = false;
  while (i111Ilii < lilliIi1) {
    i111Ilii > 0 && (await $.wait(1000));
    const Ii1IllII = await common.request(Ilill11I);
    if (!Ii1IllII.success) {
      liliI1ll = "getFirstLZCK 请求失败 ➜ " + Ii1IllII.error;
      i111Ilii++;
      Ii1IllII.status && [403, 493].includes(Ii1IllII.status) && (lI11111i = true);
      continue;
    }
    if (!Ii1IllII.data) {
      liliI1ll = "getFirstLZCK 请求失败 ➜ 无响应数据";
      i111Ilii++;
      continue;
    }
    if (Ii1IllII.data.match(/(活动已经结束)/) && Ii1IllII.data.match(/(活动已经结束)/)[1]) {
      $.runEnd = true;
      console.log("活动已结束或不存在");
      $.message && $.message.insert("活动已结束或不存在");
    }
    const i11111lI = common.getResponseCookie(Ii1IllII);
    if (i11111lI.includes("LZ_TOKEN_KEY") && i11111lI.includes("LZ_TOKEN_VALUE")) {
      activityCookie = i11111lI;
      $.skipRun = false;
      break;
    }
  }
  i111Ilii >= lilliIi1 && (console.log(liliI1ll), lI11111i && ($.outFlag = true, $.message && $.message.insert(liliI1ll)));
}