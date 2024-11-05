//Tue Nov 05 2024 06:50:55 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let leaders = [],
  skipCookieNumber = 0;
$.version = "v1.1.0";
console.log("当前版本:" + $.version + ",依赖版本:" + $.superVersion);
$.logic = async function () {
  if (!$.superVersion) throw new Error("请更新脚本");
  $.signUuid = leaders.filter(_0x503b82 => _0x503b82.finish === false)?.[0]?.["signUuid"] || "";
  if ($.index > leaderNumber && !$.signUuid) {
    $.log("已无车头");
    $.expire = true;
    return;
  }
  if (!$.activityId || !$.activityUrl) {
    $.log("活动id不存在");
    $.expire = true;
    return;
  }
  $.UA = $.ua();
  let _0x43ad3b = await $.isvObfuscator();
  if (_0x43ad3b.code !== "0") {
    $.putMsg("获取Token失败");
    return;
  }
  $.Token = _0x43ad3b?.["token"];
  if (["hdb-isv.isvjcloud.com", "jingyun-rc.isvjcloud.com"].includes($.domain)) {
    await this.login();
    let _0x30720a = await this.api("/front/activity/loadPartitionTeamSetting", {
        "teamId": $.signUuid
      }),
      _0xd0101e = _0x30720a.result.partitionTeamSetting;
    $.prizeList = [{
      "prizeType": _0xd0101e.awardType.includes("JD_MARKET") || _0xd0101e.awardType.includes("JD_BEAN") ? 1 : 4
    }];
    $.maxGroup = _0xd0101e.inviterTimes;
    $.prizeType = _0xd0101e.awardType.includes("JD_MARKET") || _0xd0101e.awardType.includes("JD_BEAN") ? 1 : 4;
    $.prizeNumbers = _0xd0101e.helperAwardNum;
    $.sendNumbers = _0xd0101e.awardTotalNum;
    $.extraPrizeNumbers = _0xd0101e.inviterAwardNum;
    if ($.index <= leaderNumber) {
      if (_0x30720a.result.myTeamLog?.["teamId"]) $.putMsg("已有" + _0x30720a.result.currentTeams.length + "人"), leaders.push({
        "index": $.index,
        "cookie": $.cookie,
        "token": $.Token,
        "signUuid": _0x30720a.result.myTeamLog.teamId,
        "username": $.username,
        "finish": false
      });else {
        await $.wait(3000, 5000);
        await saveCaptain(0);
      }
    }
    $.signUuid = leaders.filter(_0x258be3 => _0x258be3.finish === false)?.[0]?.["signUuid"] || "";
    if ($.index === 1 || !$.signUuid) return;
    let _0x22aad2 = await this.api("/front/activity/joinPartitionTeam", {
      "teamId": $.signUuid,
      "tidaType": "joinPartitionTeam"
    });
    _0x22aad2.result?.["dmAwards"] || _0x22aad2.message?.["includes"]("战队已满员") ? ($.index = leaders.filter(_0x30e81c => _0x30e81c.finish === false)?.[0]?.["index"], $.username = leaders.filter(_0x44b905 => _0x44b905.finish === false)?.[0]?.["username"], this.putMsg("已经组满"), leaders.filter(_0x10ef41 => _0x10ef41.signUuid === $.signUuid)[0].finish = true) : this.putMsg(_0x22aad2.message || _0x22aad2.result?.["message"] || "未知结果");
    return;
  } else {
    if ($.domain.includes("jinggeng-isv.isvjcloud.com")) {
      let _0x47748c = await $.api("front/setMixNick", "strTMMixNick=" + $.Token + "&userId=" + $.userId + "&source=01");
      if (!_0x47748c.succ) {
        $.putMsg("setMixNick失败");
        return;
      }
      let _0x5b0c49 = await $.api("/ql/front/showPartition?id=" + $.activityId + "&user_id=" + $.userId + "&teamId=null&inviterNick=&envNew=notwx");
      if (_0x5b0c49.includes("<title>活动已结束</title>")) {
        $.putMsg("活动已结束");
        $.expire = true;
        return;
      }
      const _0xd5c2ac = cheerio.load(cheerio.load(_0x5b0c49).html());
      $.shopId = _0xd5c2ac("#shop_sid", "body").attr("value");
      $.venderId = _0xd5c2ac("#vender_id", "body").attr("value");
      $.shopName = _0xd5c2ac("#shop_title", "body").attr("value");
      $.rule = _0xd5c2ac("#description", "body").html();
      const _0x3e1971 = /(\d+-\d+-\d+\s\d+:\d+:\d+)/g,
        _0x4e5703 = $.rule.match(_0x3e1971),
        _0x367a12 = _0x4e5703[0],
        _0x1f7659 = _0x4e5703[1];
      $.actStartTime = new Date(_0x367a12).getTime();
      $.actEndTime = new Date(_0x1f7659).getTime();
      $.maxGroup = $.rule.match(/每个玩家可创建(\d+)个战队/)[1] * 1;
      $.prizeType = $.rule.includes("积分") ? 4 : 1;
      $.prizeNumbers = $.rule.match(/组队成功后每人可获得(\d+)/)[1] * 1;
      $.sendNumbers = _0xd5c2ac(".head .count_jd", "body").text().match(/(\d+)/)[0] * 1;
      $.extraPrizeNumbers = $.rule.match(/组队成功后队长可获得额外(\d+)/)[1] * 1;
      if ($.actStartTime > Date.now()) {
        $.putMsg("活动未开始");
        $.expire = true;
        return;
      }
      if ($.actEndTime < Date.now()) {
        $.putMsg("活动已结束");
        $.expire = true;
        return;
      }
      $.index <= leaderNumber && (await $.api("front/followShop", "userId=" + $.userId), await $.wait(3000, 5000), await saveCaptain(), await $.wait(3000, 5000));
      await saveMember();
      if ($.index === 2 && leaders.length === 2) {
        $.log("ck1进ck2队伍");
        let _0x1012c1 = leaders[0],
          _0x41c2fb = leaders[1];
        $.Token = _0x1012c1.token;
        $.cookie = _0x1012c1.cookie;
        $.index = _0x1012c1.index;
        $.username = _0x1012c1.username;
        $.signUuid = _0x41c2fb.signUuid;
        await $.wait(3000, 5000);
        await saveMember();
      }
      return;
    }
  }
  if (["10033"].includes($.activityType)) {
    await $.login();
    let _0x42ce34 = await $.api("/api/task/organizeTeam/activity", {
      "shareUserId": $.signUuid || ""
    });
    if (_0x42ce34.resp_code !== 0) {
      $.putMsg("活动已结束");
      $.expire = true;
      return;
    }
    for (let _0x22f9fc of $.notTeamList) {
      if ($.shopName.includes(_0x22f9fc)) {
        $.expire = true;
        $.putMsg("已屏蔽");
        return;
      }
    }
    $.attrTouXiang = "https://img10.360buyimg.com/imgzone/jfs/t1/21383/2/6633/3879/5c5138d8E0967ccf2/91da57c5e2166005.jpg";
    $.signUuid = leaders.filter(_0x419709 => _0x419709.finish === false)?.[0]?.["signUuid"] || "";
    if ($.index > leaderNumber && !$.signUuid) {
      $.log("已无车头");
      $.expire = true;
      return;
    }
    $.prizeNumbers = _0x42ce34.data.memberPrize;
    $.sendNumbers = _0x42ce34.data.prizeList[0].totalPrizeNum || 0;
    $.extraPrizeNumbers = _0x42ce34.data.captainPrize;
    $.prizeType = _0x42ce34.data.prizeType;
    $.maxGroup = _0x42ce34.data.groupNumber;
    if ($.index > leaderNumber && _0x42ce34.resp_code == 1000) {
      $.log("已加入别人了");
      return;
    }
    if (_0x42ce34.data.joinFlag == 4 && $.index > leaderNumber) {
      console.log("已加入别人了");
      return;
    }
    if ($.prizeType === 4 && onlyBean === 1) {
      $.putMsg("仅跑豆子组队");
      $.expire = true;
      return;
    }
    if ($.index <= leaderNumber) {
      let _0x36dad3 = 0;
      for (let _0x5c5c03 of _0x42ce34.data.captainList || []) {
        _0x36dad3 += _0x5c5c03.memberCount;
      }
      await $.api("/api/task/bargain/guest/myself", {
        "shareUserId": $.signUuid || ""
      });
      let _0x12cd9a = await $.api("/api/task/share/getUserId", {
        "shareUserId": $.signUuid || ""
      });
      if ($.maxGroup * 5 === _0x36dad3) {
        leaders.push({
          "index": $.index,
          "cookie": $.cookie,
          "token": $.Token,
          "username": $.username,
          "finish": true
        });
        $.putMsg("已经组满");
        return;
      }
      if (_0x42ce34.data?.["captainList"]?.["length"] > 0 && _0x36dad3 % 5 != 0) leaders.push({
        "index": $.index,
        "cookie": $.cookie,
        "token": $.Token,
        "signUuid": _0x12cd9a.data.shareUserId,
        "teamId": _0x42ce34.data.captainList.filter(_0x3870b6 => _0x3870b6.memberCount !== 5)[0].id,
        "username": $.username,
        "finish": false
      }), $.putMsg("已有" + _0x36dad3 + "人");else {
        await $.api("/api/task/organizeTeam/saveCaptain", {});
        let _0x20a237 = await $.api("/api/task/organizeTeam/activity", {
          "shareUserId": $.signUuid || ""
        });
        leaders.push({
          "index": $.index,
          "cookie": $.cookie,
          "token": $.Token,
          "signUuid": _0x12cd9a.data.shareUserId,
          "teamId": _0x20a237.data.captainList.filter(_0x1b21f6 => _0x1b21f6.memberCount !== 5)[0].id,
          "username": $.username,
          "finish": false
        });
        $.putMsg("建队");
      }
    }
    if ($.expire) {
      return;
    }
    if ($.index === 1) return;
    if (_0x42ce34.resp_code == 1000) {
      $.log("已加入队伍");
      return;
    }
    $.signUuid = leaders.filter(_0x443213 => _0x443213.finish === false)?.[0]?.["signUuid"] || "";
    $.teamId = leaders.filter(_0x1d68e2 => _0x1d68e2.finish === false)?.[0]?.["teamId"] || "";
    await saveMember();
    if ($.index === 2 && leaders.length === 2) {
      $.log("ck1进ck2队伍");
      let _0x272992 = leaders[0],
        _0x5935eb = leaders[1];
      $.Token = _0x272992.token;
      $.cookie = _0x272992.cookie;
      $.index = _0x272992.index;
      $.username = _0x272992.username;
      $.signUuid = _0x5935eb.signUuid;
      $.teamId = _0x5935eb.teamId;
      await saveMember();
    }
    return;
  }
  await $.getSimpleActInfoVo();
  if ($.expire) return;
  await $.getMyPing();
  if (!$.Pin) return;
  await $.accessLog();
  $.attrTouXiang = "https://img10.360buyimg.com/imgzone/jfs/t1/21383/2/6633/3879/5c5138d8E0967ccf2/91da57c5e2166005.jpg";
  $.signUuid = leaders.filter(_0x59cd5b => _0x59cd5b.finish === false)?.[0]?.["signUuid"] || "";
  if ($.index > leaderNumber && !$.signUuid) {
    $.log("已无车头");
    $.expire = true;
    return;
  }
  activityContent = await $.api("wxTeam/activityContent", "activityId=" + $.activityId + "&pin=" + $.Pin + "&signUuid=" + ($.signUuid || ""));
  if (!activityContent.result || !activityContent.data) {
    $.putMsg(activityContent.errorMessage);
    await $.wxStop(activityContent.errorMessage);
    return;
  }
  $.actStartTime = activityContent.data.active.startTime;
  $.actEndTime = activityContent.data.active.endTime;
  $.prizeNumbers = activityContent.data.active.prizeNumbers;
  $.sendNumbers = activityContent.data.active.sendNumbers;
  $.extraPrizeNumbers = activityContent.data.active.extraPrizeNumbers;
  $.prizeType = activityContent.data.active.prizeType;
  $.maxGroup = activityContent.data.active.maxGroup;
  $.shopName = await $.getShopName();
  if ($.prizeType * 1 === 9) {
    for (let _0x371dda of $.notTeamList) {
      if ($.shopName.includes(_0x371dda)) {
        $.expire = true;
        $.putMsg("垃圾活动");
        return;
      }
    }
    if ($.shopName.includes("海尔") || $.shopName.includes("沃隆")) {
      $.expire = true;
      return;
    }
  }
  let _0x188c08 = $.actStartTime.startTime - $.timestamp();
  _0x188c08 > 0 && _0x188c08 < 1000 * 60 * 30 ? await $.wait(_0x188c08 + 10) : "";
  if ($.actEndTime <= $.timestamp()) {
    $.putMsg("活动已结束");
    $.expire = true;
    return;
  }
  let _0x30fdaa = activityContent.data.canJoin;
  if ($.index > leaderNumber && !_0x30fdaa) {
    $.log("已加入别人了");
    return;
  }
  if ($.prizeType === 9 && onlyBean === 1) {
    $.putMsg("仅跑豆子组队");
    $.expire = true;
    return;
  }
  if ($.prizeType === 6 && ($.prizeNumbers + $.extraPrizeNumbers) * $.maxGroup + $.prizeNumbers < beanLimit) {
    $.putMsg("豆子小于" + beanLimit + ",智能判断");
    $.expire = true;
    return;
  }
  if ($.index <= leaderNumber) {
    let _0x44820e = activityContent.data.signUuid,
      _0x185660 = 0;
    for (let _0x5a7b09 of activityContent.data.successRetList || []) {
      _0x185660 += _0x5a7b09.memberList.length;
    }
    if ($.maxGroup * 5 === _0x185660) {
      leaders.push({
        "index": $.index,
        "cookie": $.cookie,
        "token": $.Token,
        "pin": $.Pin,
        "signUuid": _0x44820e,
        "username": $.username,
        "finish": true
      });
      $.putMsg("已经组满");
      skipCookieNumber += $.maxGroup * 4;
      return;
    }
    let _0x4b9d04 = activityContent.data.list?.["length"];
    _0x4b9d04 > 0 ? (leaders.push({
      "index": $.index,
      "cookie": $.cookie,
      "token": $.Token,
      "pin": $.Pin,
      "signUuid": _0x44820e,
      "username": $.username,
      "finish": false
    }), $.putMsg("已有" + _0x4b9d04 + "人")) : await saveCaptain(0);
  }
  if ($.expire) {
    return;
  }
  if ($.index === 1 && $.domain.includes("cjhy")) {
    return;
  }
  if (!_0x30fdaa) {
    $.log("已加入队伍");
    return;
  }
  $.signUuid = leaders.filter(_0x3d5a2c => _0x3d5a2c.finish === false)?.[0]?.["signUuid"] || "";
  await saveMember();
  if ($.index === 2 && leaders.length === 2) {
    $.log("ck1进ck2队伍");
    let _0x2867ce = leaders[0],
      _0x317bad = leaders[1];
    $.Pin = _0x2867ce.pin;
    $.index = _0x2867ce.index;
    $.Token = _0x2867ce.token;
    $.cookie = _0x2867ce.cookie;
    $.username = _0x2867ce.username;
    $.signUuid = _0x317bad.signUuid;
    await $.api("customer/getMyPing", "userId=" + $.venderId + "&token=" + $.Token + "&fromType=APP");
    await saveMember();
  }
};
let typeObj = {
  "1": "京豆",
  "2": "流量包",
  "4": "积分",
  "6": "京豆",
  "7": "实物",
  "8": "专享价",
  "9": "积分",
  "13": "京东E卡",
  "14": "爱奇艺会员",
  "15": "PLUS会员"
};
$.getPrizeList = async function () {
  try {
    let _0x519c9e = await $.api("/api/task/organizeTeam/activity", {
      "shareUserId": $.signUuid || ""
    });
    $.prizeType = _0x519c9e.data.prizeType;
    $.prizeNumbers = _0x519c9e.data.memberPrize;
    $.sendNumbers = _0x519c9e.data.prizeList[0].totalPrizeNum || 0;
    $.extraPrizeNumbers = _0x519c9e.data.captainPrize;
    $.prizeType = _0x519c9e.data.prizeType;
    $.maxGroup = _0x519c9e.data.groupNumber;
    $.prizeList = [{
      "prizeType": $.prizeType,
      "prizeName": typeObj[$.prizeType]
    }];
  } catch (_0x83d754) {
    console.log(_0x83d754);
  }
};
async function saveCaptain(_0x2a5d20 = 0) {
  if (["hdb-isv.isvjcloud.com", "jingyun-rc.isvjcloud.com"].includes($.domain)) {
    let _0x52ed4c = await $.api("/front/activity/startPartitionTeam", {
      "tidaType": "share"
    });
    if (_0x52ed4c.message?.["includes"]("组队上限")) {
      $.putMsg("已经组满");
      return;
    }
    $.putMsg("建队");
    leaders.push({
      "index": $.index,
      "cookie": $.cookie,
      "token": $.Token,
      "signUuid": _0x52ed4c.result.teamId,
      "username": $.username,
      "finish": false
    });
  } else {
    if ($.domain.includes("jinggeng-isv.isvjcloud.com")) {
      let _0x2289e6 = await $.api("ql/front/postPartition", "user_id=" + $.userId + "&act_id=" + $.activityId);
      _0x2289e6.msg ? $.log(_0x2289e6.msg) : "";
      if (_0x2289e6.msg?.["includes"]("关注店铺") && _0x2a5d20 < 3) {
        let _0x50ee06 = await $.api("front/followShop", "userId=" + $.userId);
        if (!_0x50ee06.success) {
          $.putMsg(_0x50ee06.msg);
          return;
        }
        await $.wait(3000, 5000);
        _0x2289e6 = await $.api("ql/front/postPartition", "user_id=" + $.userId + "&act_id=" + $.activityId);
      }
      if (_0x2289e6.msg?.["includes"]("活动已经结束")) {
        console.log(_0x2289e6);
      }
      let _0x1058fb = _0x2289e6.data.partitionTeamLogParams[0];
      _0x1058fb.jdCombatTeamLogs.length === 5 ? _0x2289e6.msg?.["includes"]("发起战队的机会用完了呢") && $.putMsg("已经组满") : leaders.push({
        "index": $.index,
        "cookie": $.cookie,
        "token": $.Token,
        "signUuid": _0x1058fb.jdCombatTeamSetting.id,
        "username": $.username,
        "finish": _0x1058fb.jdCombatTeamLogs.length === 5
      });
    } else {
      let _0x43e94f = await $.api("wxTeam/saveCaptain", "activityId=" + $.activityId + "&pin=" + $.Pin + "&venderId=" + $.venderId + "&pinImg=" + encodeURIComponent($.attrTouXiang));
      if (_0x43e94f.result && _0x43e94f.data) $.putMsg("建队"), leaders.push({
        "index": $.index,
        "cookie": $.cookie,
        "token": $.Token,
        "pin": $.Pin,
        "signUuid": _0x43e94f.data.signUuid,
        "username": $.username,
        "finish": false
      });else {
        if (_0x43e94f.errorMessage.includes("店铺会员") && _0x2a5d20 < 3) await $.openCard(), await saveCaptain(_0x2a5d20++);else {
          if (_0x43e94f.errorMessage.includes("奖品与您擦肩而过") && _0x2a5d20 === 0) await saveCaptain(1);else {
            if (_0x43e94f.errorMessage.includes("还没满员")) {
              $.putMsg("建队");
              let _0x1ffa31 = await $.api("wxTeam/activityContent", "activityId=" + $.activityId + "&pin=" + $.Pin + "&signUuid=" + ($.signUuid || ""));
              leaders.push({
                "index": $.index,
                "cookie": $.cookie,
                "token": $.Token,
                "pin": $.Pin,
                "signUuid": _0x1ffa31.data.signUuid,
                "username": $.username,
                "finish": false
              });
            } else _0x43e94f.errorMessage.includes("未开始") ? ($.putMsg("未开始"), $.expire = true) : $.log("saveCaptain异常：" + JSON.stringify(_0x43e94f));
          }
        }
      }
    }
  }
}
async function saveMember(_0x1a870f = 0) {
  if (_0x1a870f > 5) {
    console.log("递归异常退出");
    return;
  }
  let _0xb7212f = $.index,
    _0x48b04d = $.username;
  if (["10033"].includes($.activityType)) {
    if (!$.teamId || !$.signUuid) {
      console.log("无车头退出");
      return;
    }
    let _0x4db43e = await $.api("/api/task/organizeTeam/saveMember", {
      "teamId": $.teamId,
      "shareUserId": $.signUuid
    });
    $.log(_0x4db43e.data ? "入队成功" : _0x4db43e.resp_msg);
    if (_0x4db43e.data?.["memberList"]?.["length"] === 5) {
      let _0x5f9454 = leaders.filter(_0x2e3b1c => _0x2e3b1c.signUuid === $.signUuid)[0];
      $.putMsg("已经组满");
      $.Token = _0x5f9454.token;
      let _0x15289a = await $.api("/api/task/organizeTeam/saveCaptain", {});
      if (_0x15289a.resp_code === 0) {
        let _0x44a2ce = await $.api("/api/task/organizeTeam/activity", {
          "shareUserId": $.signUuid || ""
        });
        $.putMsg("建队");
        _0x5f9454.teamId = _0x44a2ce.data.captainList.filter(_0x4405da => _0x4405da.memberCount !== 5)[0].id;
      } else _0x5f9454.finish = true, $.log(_0x15289a.resp_msg);
      return;
    }
    if (_0x4db43e.resp_msg.includes("您已加入其他队伍！")) return;
    if (_0x4db43e.resp_msg.includes("您的好友组队数已达上限！")) {
      let _0x3dbbd0 = leaders.filter(_0x49e604 => _0x49e604.signUuid === $.signUuid)[0];
      _0x3dbbd0.finish = true;
      $.index = _0x3dbbd0.index;
      $.username = _0x3dbbd0.username;
      $.putMsg("已经组满");
      $.username = _0x48b04d;
      $.index = _0xb7212f;
      _0x3dbbd0 = leaders.filter(_0x479b0b => _0x479b0b.finish === false)?.[0];
      if (!_0x3dbbd0) {
        $.putMsg("已无车头");
        $.expire = true;
        return;
      }
      $.teamId = _0x3dbbd0?.["teamId"] || "";
      $.signUuid = _0x3dbbd0?.["signUuid"] || "";
      await saveMember(_0x1a870f++);
    }
  } else {
    if ($.domain.includes("jinggeng-isv.isvjcloud.com")) {
      if ($.signUuid) {
        let _0x48ce81 = await $.api("ql/front/postPartition", "user_id=" + $.userId + "&act_id=" + $.activityId + "&teamId=" + $.signUuid);
        _0x48ce81.msg ? $.log(_0x48ce81.msg) : "";
        if (_0x48ce81.msg?.["includes"]("活动已经结束")) {
          $.expire = true;
          return;
        }
        if (_0x48ce81.msg?.["includes"]("火爆") || _0x48ce81.msg?.["includes"]("已用完")) {
          return;
        }
        if (_0x48ce81.msg?.["includes"]("关注") && _0x1a870f < 3) {
          await $.api("front/followShop", "userId=" + $.userId);
          await $.wait(3000, 5000);
          await saveMember(_0x1a870f++);
          return;
        }
        if (_0x48ce81.msg?.["includes"]("已满员")) {
          let _0x3cd682 = leaders.filter(_0x5c99d6 => _0x5c99d6.signUuid === $.signUuid)[0];
          _0x3cd682.finish = true;
          $.Token = _0x3cd682.token;
          $.index = _0x3cd682.index;
          $.username = _0x3cd682.username;
          $.cookie = _0x3cd682.cookie;
          await saveCaptain(0);
          $.signUuid = leaders.filter(_0x4ed6d0 => _0x4ed6d0.finish === false)?.[0]?.["signUuid"] || "";
          if ($.index > leaderNumber && !$.signUuid) {
            $.log("已无车头");
            $.expire = true;
          }
        }
      }
    } else {
      let _0x574648 = await $.api("wxTeam/saveMember", "activityId=" + $.activityId + "&signUuid=" + $.signUuid + "&pin=" + $.Pin + "&venderId=" + $.venderId + "&pinImg=" + encodeURIComponent($.attrTouXiang)),
        _0x908fba = leaders.filter(_0x385bdc => _0x385bdc.signUuid === $.signUuid)[0];
      if (_0x574648.result && _0x574648.data) {
        if ($.index > leaderNumber) {
          return;
        }
        $.putMsg("入" + _0x908fba.username + "队伍");
      } else {
        if (_0x574648.errorMessage.includes("店铺会员") && _0x1a870f < 3) await $.openCard(), await saveMember(_0x1a870f++);else {
          if (_0x574648.errorMessage.includes("队伍已经满员")) {
            $.log(_0x908fba);
            $.index = _0x908fba.index;
            $.username = _0x908fba.username;
            $.putMsg("已经组满");
            $.username = _0x48b04d;
            $.index = _0xb7212f;
            leaders.filter(_0x2f45cc => _0x2f45cc.signUuid === $.signUuid)[0].finish = true;
            $.signUuid = leaders.filter(_0x406ca1 => _0x406ca1.finish === false)?.[0]?.["signUuid"] || "";
            if (!$.signUuid) {
              $.log("已无车头");
              $.expire = true;
              return;
            }
            await saveMember(0);
          } else {
            if (_0x574648.errorMessage.includes("奖品与您擦肩而过") && _0x1a870f === 0) await saveMember(1);else {
              if (_0x574648.errorMessage.includes("已经加入")) {
                $.putMsg(_0x574648.errorMessage);
              } else $.putMsg(_0x574648.errorMessage || "saveMember异常"), await $.wxStop(_0x574648.errorMessage), $.log("saveMember异常：" + JSON.stringify(_0x574648));
            }
          }
        }
      }
    }
  }
}
$.after = async function () {
  try {
    if ($.prizeType) {
      let _0x5c7abc = typeObj[$.prizeType];
      $.msg.push("    最多可组" + $.maxGroup + "队,共" + $.sendNumbers + _0x5c7abc + " " + $.index);
      let _0x16a394 = ($.prizeNumbers + $.extraPrizeNumbers) * $.maxGroup,
        _0x1ece7e = _0x16a394 + $.prizeNumbers;
      $.msg.push("    组满" + _0x1ece7e + _0x5c7abc + ",队长" + _0x16a394 + _0x5c7abc + ",队员" + $.prizeNumbers + _0x5c7abc);
    }
  } catch (_0x5bb21b) {
    console.log(_0x5bb21b);
  }
  $.msg.push("export M_WX_TEAM_URL=\"" + $.activityUrl + "\"");
};
$.run({
  "whitelist": ["1-9999"],
  "multCenter": true,
  "mod": centerIndex * 1
}).catch(_0x4dcead => $.log(_0x4dcead));