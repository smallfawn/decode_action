//Mon Sep 02 2024 14:39:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const david_Vx = new david_uq("西皮购"),
  david_VF = "V1.2.0",
  david_Vq = "xpgoapp";
let david_Vg = david_Vx.getjson(david_Vq, []);
const david_Vf = david_Vx.isNode() ? require("fs") : "",
  david_VO = david_Vx.isNode() ? require("ws") : "",
  david_Vb = "david_cookies.js";
david_Vx.isNode() && !david_Vf.existsSync(david_Vb) && (david_Vx.log("🔔 外挂ck文件不存在，开始创建模版>>>"), david_Vf.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", j => {}));
const david_VM = david_Vx.isNode() ? require("http") : "",
  david_VH = david_Vx.isNode() ? require("./sendNotify") : "",
  david_Vw = david_Vx.isNode() ? require("./david_cookies") : "";
let david_Vy = david_Vx.getdata("tguserid") || 1,
  david_VI = david_Vx.getdata("xpgoactivecode") || 0,
  david_Va = david_Vx.getval("xpgouserck") || 1,
  david_Vc = david_Vx.getval("apiHost") || "http://106.15.104.124:8080";
david_Vx.getval("apiHosts") && (david_Vc = david_Vx.getval("apiHosts"));
const david_VC = 0;
let david_Vr = david_Vx.getval("tz") || "1";
var david_VZ = "",
  david_Vo = "";
let david_VX = "",
  david_Vd = [];
let david_Vi = [],
  david_VN = [],
  david_VG = [],
  david_Vn = [];
let david_Ve = [],
  david_VT = [],
  david_J0 = 0,
  david_J1 = "",
  david_J2 = "",
  david_J3 = "",
  david_J4 = "",
  david_J5 = "",
  david_J6 = "",
  david_J7 = "";
let david_J8 = "",
  david_J9 = 1,
  david_Jj = 1,
  david_JU = 1,
  david_JP = 1,
  david_JV = "",
  david_JJ = "",
  david_Ju = 3,
  david_Js = "";
const david_JD = {
  Host: "ad.midongtech.com",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Html5Plus/1.0 (Immersed/44) uni-app"
};
if (david_Vx.isNode()) {
  process.env.XPGOAPP ? david_Vg = JSON.parse(process.env.XPGOAPP) : david_Vg = david_Vw.XPGO;
  david_Vy = process.env.TGUSERID;
  david_VI = process.env.XPGOACTIVECODE;
  process.env.APIHOST && (david_Vc = process.env.APIHOST);
  process.env.APIHOSTS && (david_Vc = process.env.APIHOSTS);
  david_VZ = new Date(new Date().getTime()).getHours();
  david_Vo = new Date(new Date().getTime()).getMinutes();
  david_Vx.log("🔔 当前环境: Node, 当前时间：" + david_VZ + "点");
} else {
  david_VZ = new Date().getHours();
  david_Vo = new Date().getMinutes();
  david_Vx.log("🔔 当前环境: 手机代理, 当前时间：" + david_VZ + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await david_JW();
  } else {
    if (!david_Vg) {
      david_Vx.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    david_Vx.log("📢 开始检测服务器接口状态>>>");
    let V = false;
    const J = david_Vc.split("&"),
      u = J.length;
    for (let D = 0; D < u; D++) {
      if (david_Vx.isNode()) {
        V = await david_JS("" + J[D], 2500);
      } else {
        if (david_Vx.isSurge() || david_Vx.isLoon()) {
          V = await david_Jn("" + J[D], 2500);
        } else {
          V = await david_Jz("" + J[D], 2500);
        }
      }
      if (V == true) {
        david_Vc = J[D];
        david_Vx.log("📢 接口" + (D + 1) + "[" + J[D] + "]服务器接口正常! 🎉");
        break;
      }
      if (D == u - 1 && V == false) {
        david_Vx.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        david_Vx.msg(david_Vx.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!david_VI || !david_Vy || david_Vy == 1 || david_VI == 0 || david_VI.length != 32) {
      david_Vx.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await david_JN(david_Vq, david_Vy, david_VI);
    david_Vx.log("📢 " + david_J6);
    david_Vx.log("🔔 当前脚本版本号: " + david_VF + "，最新版本号: " + david_J4);
    if (david_Js != "") {
      let h = new Date(david_Js).getTime(),
        x = new Date().getTime();
      if (x > h) {
        david_Vx.log("❗️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (david_VF < david_J4) {
      david_Vx.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      david_uW("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (david_J3 != true) {
      david_Vx.log("❗️ 抱歉, 此脚本已停用。");
      return;
    }
    if (david_JV != true) {
      david_Vx.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (david_J2 != true) {
      david_Vx.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    david_J8 == true ? david_Vx.log("🔔 此脚本采用付费模式。🔒") : david_Vx.log("🔔 此脚本采用免费模式。🔓");
    if (david_Js != "") {
      if (david_J8 == true) {
        david_Vx.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let y = new Date(david_Js).getTime(),
          I = new Date().getTime();
        if (I > y) {
          david_Vx.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (david_J7 != true) {
        david_Vx.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      }
    }
    if (david_J9 > 1) {
      david_Vx.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + david_Ju * david_J9 + "个账号。");
    }
    david_Jj > 1 && david_Vx.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + david_JU + "次, 已经运行了" + david_JP + "次。");
    if (david_J5 != true) {
      david_Vx.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (david_Vg.length > david_Ju * david_J9) {
      david_Vx.log("❗️ 当前用户一次最多运行" + david_Ju * david_J9 + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (david_Vg.length == 0) {
      david_Vx.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (david_JP + david_Vg.length > david_JU) {
      david_Vx.log("📢 一共发现了" + david_Vg.length + "个账号");
      david_Vx.log("❗️ 当前用户运行次数剩余" + (david_JU - david_JP) + "次，还可以运行" + (david_JU - david_JP) + "个账号，还需要" + (david_Vg.length - (david_JU - david_JP)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    david_Js != "" && david_Vx.log("📢 你的会员有效期到： " + david_Js);
    david_Vx.log("📢 一共发现了" + david_Vg.length + "个账号");
    let s = [];
    for (let B = 0; B < david_Vg.length; B++) {
      s.push(david_Jl(B));
      david_Vd[B] = "";
      david_Ve[B] = 0;
      david_VT[B] = false;
      if (david_Vx.isNode()) {
        david_VN[B] = 1;
      } else {
        david_VN[B] = 1;
      }
    }
    await Promise.allSettled(s).then(G => {
      david_Vx.log("日志整理功能如下：");
      david_Vx.log("---------------日志整理开始--------------");
      for (let n = 0; n < david_Vg.length; n++) {
        david_Vx.log(david_Vd[n]);
        david_VX += david_Vd[n];
      }
      david_Vx.log("---------------日志整理结束--------------");
      david_uW(david_VX);
    });
  }
})().catch(j => david_Vx.logErr(j)).finally(() => david_Vx.done());
async function david_Jl(j) {
  return new Promise((P, V) => {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 开始执行 working......");
    david_JQ(P, j);
  });
}
async function david_JY(j) {
  david_Vx.isNode() && (david_VG[j] > 0 && david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 尝试重新连接服务器>>>>>>"), david_Vi[j] = new david_VO(david_Vc.replace("http", "ws") + "/ws"), david_Vi[j].on("open", function V() {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 签名通道已连接");
  }), david_Vi[j].on("close", function J() {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
  }), david_Vi[j].on("error", function u() {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 签名通道已关闭，原因是出现错误");
    david_VN[j] = 1;
    david_VG[j]++;
    if (david_VG[j] <= 3) {
      david_JY(j);
    }
  }));
}
async function david_JQ(j, U) {
  await david_Vx.wait(3000, 5000);
  await david_Jt(U);
  await david_Jm(U);
  if (david_Vg[U].params) {
    await david_Jo(U);
    await david_Jd(U);
  }
  if (david_Ve[U] == 1) {
    await david_JG(david_Vq, david_Vy);
    j();
    return;
  }
  if (david_Vg[U].signIn_sign) {
    await david_Ja(U);
  } else {
    david_Vx.log("[账号" + (U + 1 < 10 ? "0" + (U + 1) : U + 1) + "]: 温馨提醒=> 你好像还没有抓取签到阅读CK，跳过任务！");
  }
  await david_Jh(U);
  await david_Jx(U);
  await david_Jq(U);
  await david_JG(david_Vq, david_Vy);
  j();
}
async function david_JW() {
  if ($request.url.match(/\/sign\/info/)) {
    const u = $request.headers.Authorization,
      s = $request.headers.platform,
      v = $request.headers["User-Agent"];
    let D = david_Va - 1;
    if (david_Vg[D]) {
      david_Vg[D].auth = u;
      david_Vg[D].platform = s;
      david_Vg[D].ua = v;
    } else {
      const Y = {
        auth: u,
        platform: s,
        ua: v
      };
      david_Vg[D] = Y;
    }
    david_Vx.setdata(JSON.stringify(david_Vg, null, 2), "xpgoapp");
    david_Vx.msg(david_Vx.name, "西皮购账号" + (D + 1) + "cookie获取成功！🎉");
  }
  if ($request.url.match(/\/rd\/read/)) {
    const R = $request.url.split("callbackUrl=")[1],
      p = decodeURIComponent(R).split("sign=")[1],
      t = new david_uF(),
      h = JSON.parse(t.decode(p));
    if (h.type == "task_type_award_sign") {
      let x = p,
        F = david_Va - 1;
      if (david_Vg[F]) {
        david_Vg[F].signIn_sign = x;
      } else {
        const f = {
          signIn_sign: x
        };
        david_Vg[F] = f;
      }
      david_Vx.setdata(JSON.stringify(david_Vg, null, 2), "xpgoapp");
      david_Vx.msg(david_Vx.name, "西皮购账号" + (F + 1) + "签到阅读CK获取成功！🎉");
    } else {
      let M = p,
        H = david_Va - 1;
      if (david_Vg[H]) {
        david_Vg[H].daily_sign = M;
      } else {
        const y = {
          daily_sign: M
        };
        david_Vg[H] = y;
      }
      david_Vx.setdata(JSON.stringify(david_Vg, null, 2), "xpgoapp");
      david_Vx.msg(david_Vx.name, "西皮购账号" + (H + 1) + "每日阅读CK获取成功！🎉");
    }
  }
  if ($request.url.match(/\/cps\/outsidetasks/)) {
    const a = $request.url.split("?")[1];
    let c = david_Va - 1;
    if (david_Vg[c]) {
      david_Vg[c].params = a;
    } else {
      const r = {
        params: a
      };
      david_Vg[c] = r;
    }
    david_Vx.setdata(JSON.stringify(david_Vg, null, 2), "xpgoapp");
    david_Vx.msg(david_Vx.name, "西皮购账号" + (c + 1) + "第三方阅读参数获取成功！🎉");
  }
}
async function david_JR(j) {
  const P = "https://api.cpgoshop.com/app/2.0/user";
  let V = "";
  await david_u2("get", david_u1(P, V, j), david_u9());
  let J = david_J1;
  if (J != null && J.code == 0) {
    J.data.relationship.user_id == parseInt(david_JJ) && (david_J0 = 1);
  } else {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 用户判定=> " + J.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 用户判定=> " + J.message + "\n";
  }
}
async function david_Jp(j) {
  const P = "https://api.cpgoshop.com/app/2.0/user/refreshToken";
  let V = "{}";
  await david_u2("post", david_u1(P, V, j), david_u9());
  let J = david_J1;
  if (!(J != null && J.code == 0)) {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 刷新token=> " + J.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 刷新token=> " + J.message + "\n";
  }
}
async function david_Jt(j) {
  const P = "https://api.cpgoshop.com/app/2.0/user";
  let V = "";
  await david_u2("get", david_u1(P, V, j), david_u9());
  let J = david_J1;
  if (J != null && J.code == 0) {
    david_Vn[j] = J.data.num;
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 用户名=> " + J.data.nickname);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 用户名=> " + J.data.nickname + "\n";
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 手机号=> " + J.data.phone);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 手机号=> " + J.data.phone + "\n";
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 余额=> " + J.data.balance);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 余额=> " + J.data.balance + "\n";
    J.data.relationship.user_id == parseInt(david_JJ) && (david_VT[j] = true);
  } else {
    await david_uW("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 当前用户token应该是过期了，请重新抓取!!!", "1");
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 用户名信息=> " + J.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 用户名信息=> " + J.message + "\n";
  }
}
async function david_Jh(j) {
  if (david_Ve[j] == 1) {
    return;
  }
  const P = "https://api.cpgoshop.com/app/2.0/task/dailyTask";
  await david_u2("get", david_u1(P, "", j), david_u9());
  let V = david_J1;
  if (V != null && V.code == 0) {
    let u = V.data.task;
    for (let s = 0; s < u.length; s++) {
      let D = u[s];
      if (D.task_type == "task_type_award_video") {
        let A = parseInt(D.has_number),
          l = D.number - A;
        for (let Y = 0; Y < l; Y++) {
          david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 看视频任务(" + (A + Y + 1) + "/" + D.number + ")");
          david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 看视频任务(" + (A + Y + 1) + "/" + D.number + ")\n";
          await david_Jy(j, D.task_type);
          await david_Vx.wait(david_uJ(15000, 20000));
        }
      } else {
        if (D.task_type == "task_type_daily_read_article") {
          let p = parseInt(D.has_number),
            t = D.number - p;
          if (david_Vg[j].daily_sign) {
            if (david_VZ >= 0) {
              for (let h = 0; h < t; h++) {
                for (let x = 0; x < 5; x++) {
                  david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 开始进行第" + (p + h + 1) + "轮" + D.title + "任务，进度(" + (x + 1) + "/5)");
                  david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 开始进行第" + (p + h + 1) + "轮" + D.title + "任务，进度(" + (x + 1) + "/5)\n";
                  await david_Jc(j, D.task_type, D.title);
                  await david_Vx.wait(david_uJ(6000, 9000));
                }
                await david_Vx.wait(david_uJ(15000, 30000));
              }
            }
          } else {
            david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 温馨提醒=> 你好像还没有抓取每日阅读CK，跳过任务！");
          }
        }
      }
    }
  } else {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 任务中心=> " + V.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 任务中心=> " + V.message + "\n";
  }
}
async function david_Jx(j) {
  const P = "https://api.cpgoshop.com/app/2.0/task/userTaskListInToday";
  let V = "{\"xianwan\":{\"ptype\":1,\"androidosv\":\"1\",\"msaoaid\":\"\",\"deviceid\":\"\"}}";
  if (david_Ve[j] == 1) {
    return;
  }
  await david_u2("post", david_u1(P, V, j), david_u9());
  let J = david_J1;
  if (J != null && J.code == 0) {
    let v = J.data.find(A => A.title == "新人福利");
    if (v) {
      let l = v.info,
        Y = l.find(W => W.type == "new_user_task_type_award_video_new"),
        Q = l.find(W => W.type == "new_user_task_type_lb_mini_program_video");
      if (Y && david_VZ >= 12) {
        let W = Y.user,
          R = Y.value.needNum - W;
        for (let p = 0; p < R - 1; p++) {
          david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 新激励视频任务(" + (W + p + 1) + "/" + Y.value.needNum + ")");
          david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 新激励视频任务(" + (W + p + 1) + "/" + Y.value.needNum + ")\n";
          await david_Jy(j, Y.type.split("new_user_")[1]);
          await david_Vx.wait(david_uJ(1000, 2000));
          await david_JI(j);
          await david_Vx.wait(david_uJ(35000, 60000));
        }
      }
      if (Q) {
        let q = Q.user,
          g = Q.value.max - q;
        for (let f = 0; f < g; f++) {
          await david_Jr(j, q + f + 1, Q.value.max);
          await david_Vx.wait(david_uJ(15000, 30000));
        }
      }
    }
    let D = J.data.find(M => M.title == "热门任务");
    if (D) {
      let H = D.info,
        w = H.find(C => C.type == "task_type_read_article"),
        y = H.find(C => C.type == "task_type_award_video_new"),
        I = H.find(C => C.type == "task_type_alipay"),
        a = H.find(C => C.type == "task_type_watch_video"),
        c = H.find(C => C.type == "task_type_lb_mini_program_video");
      if (w) {
        let r = w.user,
          E = w.value.number - r;
        E == 8 && (E = 4, david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 微信阅读=> 任务第一次运行4轮"), david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 微信阅读=> 任务第一次运行4轮\n");
        if (E > 0) {
          let L = 5;
          for (let X = 0; X < E; X++) {
            for (let B = 0; B < L; B++) {
              david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 开始第" + (r + X + 1) + "轮阅读任务进度(" + (B + 1) + "/" + L + ")");
              await david_Jc(j, w.type, "微信阅读");
              await david_Vx.wait(david_uJ(6000, 9000));
              if (r + X + 1 == 8 && B + 1 == L) {
                david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 微信阅读=> 任务完成，获得+2000💧");
                david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 微信阅读=> 任务完成，获得+2000💧\n";
              }
              if (B > 2) {
                let N = await david_JF(j);
                if (N > 0) {
                  await david_Vx.wait(N * 1000);
                  break;
                }
              }
            }
          }
        }
      }
      if (y && david_VZ >= 0) {
        let z = y.user,
          e = y.value.needNum - z;
        if (e == 5) {
          david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 新激励视频任务，请手动完成一次，激活下任务吧，不然没有水滴奖励！！！");
        } else {
          for (let j0 = 0; j0 < e; j0++) {
            david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 新激励视频任务(" + (z + j0 + 1) + "/" + y.value.needNum + ")");
            david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 新激励视频任务(" + (z + j0 + 1) + "/" + y.value.needNum + ")\n";
            await david_Jy(j, y.type);
            await david_Vx.wait(david_uJ(1000, 2000));
            await david_JI(j);
            await david_Vx.wait(david_uJ(5000, 9000));
          }
        }
      }
      if (I) {
        let j6 = I.value.number,
          j7 = j6 - I.user;
        for (let j8 = 0; j8 < j7; j8++) {
          await david_JZ(j, I.user + j8 + 1, I);
          await david_Vx.wait(david_uJ(10000, 15000));
        }
      }
      if (a) {
        let jP = await david_JC(j, 0),
          jV = jP.data.phase,
          jJ = jV,
          ju = jP.data.time;
        if (jJ < 4 && ju > 0) {
          while (ju > 0 && jJ == jV) {
            let jv = david_uJ(10, 30),
              jD = await david_JC(j, jv);
            if (jD.message == "OK") {
              ju = jD.data.time;
              jJ = jD.data.phase;
              if (jJ != jV) {
                david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 看小视频=> 第" + jV + "轮任务完成，获得+100💧");
                david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 看小视频=> 第" + jV + "轮任务完成，获得+100💧\n";
                break;
              }
              david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 看小视频=> 看小视频时长随机增加" + jv + "秒，还剩" + ju + "秒完成第" + jV + "轮任务");
            }
            await david_Vx.wait(david_uJ(6000, 8000));
          }
        }
      }
      if (c) {
        let jW = c.user,
          jR = c.value.max - jW;
        for (let jp = 0; jp < jR; jp++) {
          await david_Jr(j, jW + jp + 1, c.value.max);
          await david_Vx.wait(david_uJ(15000, 30000));
        }
      }
    }
  } else {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 任务中心=> " + J.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 任务中心=> " + J.message + "\n";
  }
}
async function david_JF(j) {
  const P = "https://api.cpgoshop.com/app/2.0/task/userTaskListInToday";
  let V = "{\"xianwan\":{\"ptype\":1,\"androidosv\":\"1\",\"msaoaid\":\"\",\"deviceid\":\"\"}}";
  if (david_Ve[j] == 1) {
    return;
  }
  await david_u2("post", david_u1(P, V, j), david_u9());
  let J = david_J1,
    u = 0;
  if (J != null && J.code == 0) {
    let D = J.data.find(A => A.title == "热门任务");
    if (D) {
      let A = D.info,
        l = A.find(Y => Y.type == "task_type_read_article");
      if (l) {
        u = l.expiration;
      }
    }
    return u;
  }
}
async function david_Jq(j) {
  const P = "https://api.cpgoshop.com/app/2.0/melon/init";
  let V = "";
  if (david_Ve[j] == 1) {
    return;
  }
  await david_u2("get", david_u1(P, V, j), david_u9());
  let J = david_J1;
  if (J != null && J.code == 0) {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 水滴=> " + J.data.water.amount + J.data.water.unit);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 水滴=> " + J.data.water.amount + J.data.water.unit + "\n";
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 肥料=> " + J.data.manure.amount + J.data.manure.unit);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 肥料=> " + J.data.manure.amount + J.data.manure.unit + "\n";
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 西瓜=> " + J.data.melon + "个");
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 西瓜=> " + J.data.melon + "个\n";
    J.data.pre_melon > 0 && (david_Vg[j].auto_reap || david_Vg[j].auto_reap == undefined) && (await david_Jg(j, "reap", "摘取"));
    if (J.data.status == 1 && J.data.water.amount >= 7 && J.data.water.unit == "桶") {
      await david_Jg(j, "water", "浇水");
      await david_JO(j, 6, "1fc7505d-9966-b859-009b-4c1305eb45e9");
    }
    if (J.data.status == 1 && J.data.water.amount >= 1 && J.data.water.unit == "桶") {
      if (david_Vg[j].auto_self_water) {
        await david_Jg(j, "water", "浇水");
      }
    }
    if (J.data.status == 1 && J.data.water.amount >= 1 && J.data.water.unit == "桶") {
      if (david_VT[j] && david_Vg[j].auto_self_water == undefined) {
        await david_Jg(j, "water", "浇水");
      }
    }
    if ((J.data.status == 2 || J.data.status == 3) && J.data.water.amount >= 1 && J.data.water.unit == "桶") {
      if (david_Vg[j].auto_help_water) {
        await david_JO(j, J.data.water.amount, "1fc7505d-9966-b859-009b-4c1305eb45e9");
      }
    }
    if ((J.data.status == 2 || J.data.status == 3) && J.data.manure.amount > 0) {
      (david_Vg[j].auto_manure || david_Vg[j].auto_manure == undefined) && (await david_Jg(j, "manure", "施肥"), await david_Vx.wait(david_uJ(3000, 5000)), await david_Jg(j, "reap", "摘取"));
    }
    J.data.melon > 10 && (await david_Jb(j));
  } else {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 种瓜初始化信息=> " + J.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 种瓜初始化信息=> " + J.message + "\n";
  }
}
async function david_Jg(j, U, P) {
  const J = "https://api.cpgoshop.com/app/2.0/melon/" + U;
  let u = "{}";
  if (david_Ve[j] == 1) {
    return;
  }
  await david_u2("post", david_u1(J, u, j), david_u9());
  let s = david_J1;
  if (s != null && s.code == 0) {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + P + "=> " + s.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + P + "=> " + s.message + "\n";
  } else {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + P + "=> " + s.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + P + "=> " + s.message + "\n";
  }
}
async function david_Jf(j, U) {
  let V = 0;
  U = U == undefined ? 1 : U;
  const J = "https://api.cpgoshop.com/app/2.0/melon/log?page=" + U + "&type=5";
  let u = "";
  if (david_Ve[j] == 1) {
    return;
  }
  await david_u2("get", david_u1(J, u, j), david_u9());
  let s = david_J1;
  if (s != null && s.code == 0) {
    let D = s.data.items;
    for (let A in D) {
      let l = D[A];
      if (david_u4(l.time) && l.title == "看视频" && l.amount == "100滴") {
        V++;
      }
    }
  }
  return V;
}
async function david_JO(j, U, P) {
  const J = "https://api.cpgoshop.com/app/2.0/melon/helpWater";
  let u = "{\"num\":\"" + P + "\",\"number\":" + U + "}";
  if (david_Ve[j] == 1) {
    return;
  }
  await david_u2("post", david_u1(J, u, j), david_u9());
  let s = david_J1;
  s != null && s.code == 0 ? (david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 帮他浇水=> " + s.message), david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 帮他浇水=> " + s.message + "\n") : (david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 帮他浇水=> " + s.message), david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 帮他浇水=> " + s.message + "\n");
}
async function david_Jb(j) {
  const P = "https://api.cpgoshop.com/app/2.0/melon/info";
  if (david_Ve[j] == 1) {
    return;
  }
  await david_u2("get", david_u1(P, "", j), david_u9());
  let V = david_J1;
  if (V != null && V.code == 0) {
    if (V.data.melon > 10) {
      await david_JM(j, V.data.melon);
    }
  } else {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 账户信息=> " + V.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 账户信息=> " + V.message + "\n";
  }
}
async function david_JM(j, U) {
  const V = "https://api.cpgoshop.com/app/2.0/melon/sale";
  let J = "{\"number\":" + U + "}";
  if (david_Ve[j] == 1) {
    return;
  }
  await david_u2("post", david_u1(V, J, j), david_u9());
  let u = david_J1;
  if (u != null && u.code == 0) {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 出售=> " + u.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 出售=> " + u.message + "\n";
  } else {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 出售=> " + u.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 出售=> " + u.message + "\n";
  }
}
async function david_JH(j) {
  const P = "https://api.cpgoshop.com/app/2.0/user/withdraw/info";
  let V = "";
  await david_u2("get", david_u1(P, V, j), david_u9());
  let J = david_J1;
  if (J != null && J.code == 0) {
    let s = J.data.is_new;
    if (s == 1) {
      await david_Jw(j, 0, 1);
    } else {
      await david_Jw(j, 1, 2);
    }
  } else {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 提现信息=> " + J.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 提现信息=> " + J.message + "\n";
  }
}
async function david_Jw(j, U, P) {
  const J = "https://api.cpgoshop.com/app/2.0/user/withdraw/doWithdraw";
  let u = "{\"pay_password\":\"" + david_Vg[j].pay_password + "\",\"amount\":" + U + ",\"type\":" + P + "}";
  let s = david_u1(J, u, j);
  await david_u2("post", s, david_u9());
  let v = david_J1;
  if (v != null && v.code == 0) {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 提现结果=> " + v.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 提现结果=> " + v.message + "\n";
  } else {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 提现结果=> " + v.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 提现结果=> " + v.message + "\n";
  }
}
async function david_Jy(j, U) {
  const V = "https://api.cpgoshop.com/app/2.0/task/incrTodayTaskNum";
  let J = david_ut(david_ul());
  if (david_Ve[j] == 1) {
    return;
  }
  let u = "{\"type\": \"" + U + "\",\"rand_str\": \"" + J + "\"}";
  await david_u2("post", david_u1(V, u, j), david_u9());
  let s = david_J1;
  if (!(s != null && s.code == 0)) {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 看视频=> " + s.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 看视频=> " + s.message + "\n";
  }
}
async function david_JI(j) {
  const P = "https://api.cpgoshop.com/app/2.0/task/userTaskListInToday";
  if (david_Ve[j] == 1) {
    return;
  }
  let V = "{\"xianwan\":{\"ptype\":1,\"androidosv\":\"1\",\"msaoaid\":\"\",\"deviceid\":\"\"}}";
  await david_u2("post", david_u1(P, V, j), david_u9());
  let J = david_J1;
  if (!(J != null && J.code == 0)) {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 看新激励视频=> " + J.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 看新激励视频=> " + J.message + "\n";
  }
}
async function david_Ja(j) {
  const P = "https://api.cpgoshop.com/app/2.0/user/sign/info";
  if (david_Ve[j] == 1) {
    return;
  }
  await david_u2("get", david_u1(P, "", j), david_u9());
  let V = david_J1;
  if (V != null && V.code == 0) {
    if (V.data.status == 0) {
      for (let v = 0; v < 5; v++) {
        david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 签到阅读任务，进度(" + (v + 1) + "/5)");
        david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 签到阅读任务，进度(" + (v + 1) + "/5)\n";
        await david_Jc(j, "task_type_award_sign", "签到");
        await david_Vx.wait(david_uJ(6000, 9000));
      }
    }
  } else {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 看视频=> " + V.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 看视频=> " + V.message + "\n";
  }
}
async function david_Jc(j, U, P) {
  let J = "";
  if (david_Ve[j] == 1) {
    return;
  }
  const u = new david_uF();
  if (U == "task_type_award_sign") {
    J = david_Vg[j].signIn_sign;
  } else {
    if (U == "task_type_daily_read_article") {
      J = david_Vg[j].daily_sign;
    }
  }
  let s = JSON.parse(u.decode(J));
  if (david_u7(s.notify_time + "000", david_ul()) >= 1800) {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + P + "任务=> CK可能已经过期，请重新抓取吧！");
    return;
  }
  const v = "https://api.cpgoshop.com/article/notify?sign=" + J;
  let D = david_u1(v, "", j);
  delete D.headers["Content-Type"];
  delete D.headers.Authorization;
  delete D.headers.platform;
  delete D.headers.version;
  await david_u2("get", D, david_u9());
  let A = david_J1;
  david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + P + "任务=> 完成");
  return A;
}
async function david_JC(j, U) {
  const V = "https://api.cpgoshop.com/app/2.0/task/watchVideo";
  let J = "{\"time\": " + U + "}";
  await david_u2("post", david_u1(V, J, j), david_u9());
  return david_J1;
}
async function david_Jr(j, U, P) {
  let J = david_us();
  const u = "https://fc-mp-cc7da8f0-290f-43cb-9f1f-d982b6b581f6.next.bspapp.com/router/client/resource.pub_add_watch_record?h5TempId=" + J + "&resId=655f1dde7ad52d2a068abf48&isPlayOver=1&clickAd=1";
  await david_u2("get", david_u1(u, "", j), david_u9());
  let s = david_J1;
  if (s != null && s.code == 0) {
    await david_Vx.wait(david_uJ(5000, 9000));
    await david_JE(j, J, U, P);
  }
  return s.message;
}
async function david_JE(j, U, P, V) {
  let u = david_uY();
  const s = "https://fc-mp-cc7da8f0-290f-43cb-9f1f-d982b6b581f6.next.bspapp.com/router/client/resource.pub_getWatchDes?h5TempId=" + U + "&resId=655f1dde7ad52d2a068abf48&needClick=1&userId=" + david_Vn[j] + "&timeStamp=" + u;
  await david_u2("get", david_u1(s, "", j), david_u9());
  let v = david_J1;
  if (v != null && v.code == 0) {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 微信小程序激励视频(M)任务(" + P + "/" + V + ")=> 完成，获得" + v.info.resInfo.resContent);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 微信小程序激励视频(M)任务(" + P + "/" + V + ")=> 完成，获得" + v.info.resInfo.resContent + "\n";
  }
  return v.message;
}
async function david_JZ(j, U, P) {
  let J = david_ut(david_ul());
  const u = "https://api.cpgoshop.com/app/2.0/task/alipayVideo";
  let s = "{\"platform\":2,\"rand_str\":\"" + J + "\"}";
  await david_u2("post", david_u1(u, s, j), david_u9());
  let v = david_J1;
  if (v != null && v.code == 0) {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + P.value.name + "(" + U + "/" + P.value.number + ")=> 完成");
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + P.value.name + "(" + U + "/" + P.value.number + ")=> 完成\n";
  }
  return v.message;
}
function david_Jo(j) {
  return new Promise((P, V) => {
    const u = "https://ad.midongtech.com/api/cps/outsidetasks?" + david_Vg[j].params,
      s = {
        url: u,
        headers: david_JD
      };
    david_Vx.get(s, async (D, A, l) => {
      const Q = JSON.parse(l);
      let W = Q.data.list;
      for (let R = 0; R < W.length; R++) {
        let t = W[R];
        await david_Jk(j, t.taskId);
        await david_Vx.wait(david_uJ(6000, 9000));
        await david_JL(j, t.taskId);
        await david_Vx.wait(david_uJ(1000, 3000));
        await david_JX(j, t);
      }
      P();
    });
  });
}
function david_Jk(j, U) {
  return new Promise((V, J) => {
    const v = "https://ad.midongtech.com/api/cps/outsidetask?" + david_Vg[j].params + "&taskId=" + U,
      D = {
        url: v,
        headers: david_JD
      };
    david_Vx.get(D, async (l, Y, Q) => {
      V();
    });
  });
}
function david_JL(j, U) {
  return new Promise((V, J) => {
    const v = "https://ad.midongtech.com/api/cps/outsidetaskisdone?" + david_Vg[j].params + "&taskId=" + U,
      D = {
        url: v,
        headers: david_JD
      };
    david_Vx.get(D, async (l, Y, Q) => {
      V();
    });
  });
}
function david_JX(j, U) {
  return new Promise((V, J) => {
    const u = "https://ad.midongtech.com/api/cps/outsidetaskok";
    let s = david_u5("?" + david_Vg[j].params);
    s.taskId = U.taskId;
    const v = {
      cid: "" + s.cid,
      cuid: "" + s.cuid,
      device: "" + s.device,
      imei: "" + s.imei,
      oaid: "" + s.oaid,
      sdkversion: "" + s.sdkversion,
      taskId: U.taskId
    };
    david_JD["Content-Type"] = "application/json";
    const A = {
      url: u,
      headers: david_JD,
      body: JSON.stringify(v)
    };
    david_Vx.post(A, async (l, Y, Q) => {
      const R = JSON.parse(Q);
      R.msg == "ok" && (david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 阅读" + U.name + "任务=> 完成，成功获得" + U.price + "💧"), david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 阅读" + U.name + "任务=> 完成，成功获得" + U.price + "💧\n");
      V();
    });
  });
}
function david_Jd(j) {
  return new Promise((P, V) => {
    const s = "https://ad.midongtech.com/api/tb618/getads?" + david_Vg[j].params,
      v = {
        url: s,
        headers: david_JD
      };
    david_Vx.get(v, async (A, l, Y) => {
      const W = JSON.parse(Y);
      let R = W.data;
      for (let p = 0; p < R.length; p++) {
        let t = R[p];
        if (t.alipay_version == 0) {
          await david_Vx.wait(david_uJ(6000, 9000));
          await david_JB(j, t);
        }
      }
      P();
    });
  });
}
function david_JB(j, U) {
  return new Promise((V, J) => {
    const u = "https://ad.midongtech.com/api/tb618/orderok?" + david_Vg[j].params + "&adid=" + U.id,
      s = {
        url: u,
        headers: david_JD
      };
    david_Vx.post(s, async (D, A, l) => {
      const W = JSON.parse(l);
      if (W.msg == "ok") {
        david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 阅读" + U.name + "任务=> 完成，成功获得" + U.price + "💧");
        david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 阅读" + U.name + "任务=> 完成，成功获得" + U.price + "💧\n";
      }
      V();
    });
  });
}
async function david_Jm(j) {
  const P = "https://api.cpgoshop.com/app/2.0/melon/fansInfo?num=";
  let V = "";
  if (david_Ve[j] == 1) {
    return;
  }
  await david_u2("get", david_u1(P, V, j), david_u9());
  let J = david_J1;
  if (J != null && J.code == 0) {
    let v = J.data.user_num;
    await david_JK(j, v);
  } else {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + actionName + "=> " + J.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + actionName + "=> " + J.message + "\n";
  }
}
async function david_JK(j, U) {
  const V = "https://api.cpgoshop.com/app/2.0/melon/dew/get?num=" + U;
  let J = "";
  if (david_Ve[j] == 1) {
    return;
  }
  await david_u2("get", david_u1(V, J, j), david_u9());
  let u = david_J1;
  if (u != null && u.code == 0) {
    let D = u.data;
    for (let A = 0; A < D.length; A++) {
      let Y = D[A];
      await david_Ji(j, U, Y);
      await david_Vx.wait(david_uJ(3000, 5000));
    }
  } else {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + actionName + "=> " + u.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + actionName + "=> " + u.message + "\n";
  }
}
async function david_Ji(j, U, P) {
  const J = "https://api.cpgoshop.com/app/2.0/melon/dew/receive";
  let u = "{\"num\" : \"" + U + "\",\"id\" : " + P.id + "}";
  if (david_Ve[j] == 1) {
    return;
  }
  await david_u2("post", david_u1(J, u, j), david_u9());
  let s = david_J1;
  if (s != null && s.code == 0) {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 收取朋友果园露水=> " + P.amount + "颗");
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: 收取朋友果园露水=> " + P.amount + "颗\n";
  } else {
    david_Vx.log("[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + actionName + "=> " + s.message);
    david_Vd[j] += "[账号" + (j + 1 < 10 ? "0" + (j + 1) : j + 1) + "]: " + actionName + "=> " + s.message + "\n";
  }
}
function david_JN(j, U, P) {
  return new Promise((J, u) => {
    const v = david_Vc + "/script/permissions/lastest",
      D = {
        appName: j,
        userId: U,
        activityCode: P,
        version: david_VF
      };
    const l = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const Y = {
      url: v,
      headers: l,
      body: JSON.stringify(D)
    };
    david_Vx.post(Y, async (Q, W, R) => {
      if (R && R != null && R.replace(/\"/g, "").length > 50) {
        const t = R.replace(/\"/g, "").slice(34),
          h = new david_uF();
        result = JSON.parse(h.decode(t));
        try {
          david_J4 = result.version;
          david_J2 = result.userAuth;
          david_J3 = result.scriptAuth;
          david_J5 = result.runAuth;
          david_J6 = result.notify;
          david_J7 = result.vipAuth;
          david_J8 = result.isCharge;
          david_J9 = result.runAcounts;
          david_Jj = result.buyCount;
          david_JP = result.runedCounts;
          david_JU = result.runTotalCounts;
          david_JV = result.userRank;
          david_JJ = result.invicate;
          david_Ju = result.accountNumbers;
          david_Js = result.vipDate;
        } catch (g) {
          david_Vx.log(g);
        }
      } else {
        david_Vx.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      J();
    });
  });
}
function david_JG(j, U) {
  return new Promise((V, J) => {
    const s = david_Vc + "/script/run/add",
      v = {
        appName: j,
        userId: U,
        activityCode: david_VI,
        version: david_VF
      };
    const A = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const l = {
      url: s,
      headers: A,
      body: JSON.stringify(v)
    };
    david_Vx.post(l, async (Y, Q, W) => {
      V();
    });
  });
}
function david_JS(j, U) {
  return new Promise((V, J) => {
    const v = setTimeout(() => {
        V(false);
      }, U),
      D = david_VM.get(j, A => {
        clearTimeout(v);
        if (A.statusCode === 404) {
          V(true);
        } else {
          V(false);
        }
      });
    D.on("error", A => {
      clearTimeout(v);
      V(false);
    });
    D.on("timeout", () => {
      D.abort();
      J(new Error("请求超时"));
    });
  });
}
async function david_Jz(j, U = 3000) {
  return new Promise((V, J) => {
    const s = {
      url: j + "/docs"
    };
    setTimeout(() => {
      V(false);
    }, U);
    david_Vx.get(s, async (v, D, A) => {
      D.status == 401 ? V(true) : V(false);
    });
  });
}
async function david_Jn(j, U = 3000) {
  return new Promise((V, J) => {
    const s = {
      url: j + "/"
    };
    setTimeout(() => {
      V(false);
    }, U);
    $httpClient.get(s, async (v, D, A) => {
      A == "{\"detail\":\"Not Found\"}" ? V(true) : V(false);
    });
  });
}
async function david_Je(j, U, P) {
  return new Promise((J, u) => {
    const s = david_Vc + "/redis/hash/get/" + U + "/" + P,
      v = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const D = {
      url: s,
      headers: v
    };
    david_Vx.get(D, async (l, Y, Q) => {
      const p = Q.replace(/\"/g, "");
      answerTexts[j] = p;
      J();
    });
  });
}
function david_JT(j, U, P) {
  return new Promise((J, u) => {
    const v = david_Vc + "/redis/hash/set",
      D = {
        key: j,
        hashKey: U,
        hashValue: P
      };
    const l = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const Y = {
      url: v,
      headers: l,
      body: JSON.stringify(D)
    };
    david_Vx.post(Y, async (Q, W, R) => {
      J();
    });
  });
}
function david_u0(j) {
  return new Promise((P, V) => {
    const s = david_Vc + "/redis/set/pop/" + j,
      v = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const D = {
      url: s,
      headers: v
    };
    david_Vx.get(D, async (l, Y, Q) => {
      const W = Q.replace(/\"/g, "");
      popCookie = W;
      P();
    });
  });
}
function david_u1(P, V, J) {
  let s = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Html5Plus/1.0 (Immersed/44) uni-app",
    v = "";
  if (david_Vg[J].platform == 1 || david_Vg[J].platform == "1") {
    v = "3.0.15";
    s = "Mozilla/5.0 (Linux; Android 12.1.0; Pixel Build/OPM4.171019.021.P1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046278 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/24.0)";
  } else {
    if (david_Vg[J].platform == 2 || david_Vg[J].platform == "2") {
      v = "3.0.10";
    }
  }
  if (david_Vg[J].ua && david_Vg[J].ua != "") {
    s = david_Vg[J].ua;
  }
  let D = david_u6(P);
  const A = {
    "Content-Type": "application/json",
    "User-Agent": s,
    Authorization: david_Vg[J].auth,
    Host: D,
    version: v,
    platform: david_Vg[J].platform
  };
  const l = {};
  l.url = P;
  l.headers = A;
  let Y = l;
  if (V) {
    Y.body = V;
  }
  return Y;
}
function david_u2(j, U, P) {
  david_J1 = null;
  return new Promise(J => {
    david_Vx[j](U, async (v, D, A) => {
      try {
        if (v) {
          const Q = new URL(U.url);
          if (Q.pathname == "/article/notify") {
            david_J1 = "stop";
          } else {
            david_Vx.log(P + ": " + j + "请求失败");
          }
          david_Vx.log(JSON.stringify(v));
          david_Vx.logErr(v);
        } else {
          if (david_uj(A)) {
            david_J1 = JSON.parse(A);
          } else {
            const F = new URL(U.url);
            if (!(F.pathname == "/article/notify")) {
              david_Vx.log(F.pathname + "发起" + j + "请求时，出现错误，请处理");
            }
          }
        }
      } catch (f) {
        david_Vx.logErr(f, D);
      } finally {
        J(david_J1);
      }
    });
  });
}
function david_u3(j, U, P) {
  const J = david_u5(j);
  U.forEach(v => {
    delete J[v];
  });
  Object.assign(J, P);
  const u = Object.keys(J).sort();
  const s = u.map(v => v + "=" + J[v]).join("&");
  return s;
}
function david_u4(U) {
  const J = new Date(U * 1000),
    u = new Date(),
    s = u.getFullYear();
  const v = u.getMonth(),
    D = u.getDate(),
    A = J.getFullYear(),
    l = J.getMonth(),
    Y = J.getDate();
  return s === A && v === l && D === Y;
}
function david_u5(U) {
  U = U.replace(/\"/g, "");
  var J;
  var u = {};
  var s = U.slice(U.indexOf("?") + 1).split("&");
  for (var v = 0; v < s.length; v++) {
    J = s[v].split("=");
    u[J[0]] = J[1];
  }
  return u;
}
function david_u6(U) {
  let J = U.substr(U.indexOf("//") + 2),
    u = J.substr(0, J.indexOf("/"));
  let s = "";
  let v = u.indexOf(":");
  if (v > 0) {
    s = u.substr(0, v);
  } else {
    s = u;
  }
  return s;
}
function david_u7(j, U) {
  var u = new Date(parseInt(j));
  var s = new Date(parseInt(U));
  var v = s - u;
  var D = Math.floor(v / 1000);
  return D;
}
function david_u8(j, U) {
  if (j.length * 2 <= U) {
    return j;
  }
  var V = 0;
  var J = "";
  for (var u = 0; u < j.length; u++) {
    J = J + j.charAt(u);
    if (j.charCodeAt(u) > 128) {
      V = V + 2;
      if (V >= U) {
        return J.substring(0, J.length - 1) + "...";
      }
    } else {
      V = V + 1;
      if (V >= U) {
        return J.substring(0, J.length - 2) + "...";
      }
    }
  }
  return J;
}
function david_u9() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function david_uj(U) {
  const P = {};
  P.aWOqb = function (J, u) {
    return J === u;
  };
  P.lwyPP = "sYYoT";
  P.BqvyM = function (J, u) {
    return J == u;
  };
  P.cnNig = "object";
  P.wfsme = function (J, u) {
    return J !== u;
  };
  P.ihxfq = "waMMM";
  P.uRMrC = "VmNMw";
  P.vxNdQ = function (J, u) {
    return J !== u;
  };
  P.fzgrB = "iAysY";
  const V = P;
  try {
    if (V.aWOqb(V.lwyPP, V.lwyPP)) {
      if (V.BqvyM(typeof JSON.parse(U), V.cnNig)) {
        if (V.wfsme(V.ihxfq, V.uRMrC)) {
          return true;
        } else {
          P = V.expiration;
        }
      }
    } else {
      U.log("❗️ 抱歉, 此脚本已停用。");
      return;
    }
  } catch (s) {
    if (V.vxNdQ(V.fzgrB, V.fzgrB)) {
      this.log("", "❗️" + this.name + ", 错误!", U.stack);
    } else {
      console.log(s);
      console.log("服务器访问数据为空，请检查自身设备网络情况");
      return false;
    }
  }
}
function david_uU(j) {
  var P = Object.keys(j).map(function (V) {
    return encodeURIComponent(V) + "=" + encodeURIComponent(j[V]);
  }).join("&");
  return P;
}
function david_uP(j) {
  var P = String.fromCharCode(j.charCodeAt(0) + j.length);
  for (var V = 1; V < j.length; V++) {
    P += String.fromCharCode(j.charCodeAt(V) + j.charCodeAt(V - 1));
  }
  return escape(P);
}
function david_uV(j) {
  j = unescape(j);
  var P = String.fromCharCode(j.charCodeAt(0) - j.length);
  for (var V = 1; V < j.length; V++) {
    P += String.fromCharCode(j.charCodeAt(V) - P.charCodeAt(V - 1));
  }
  return P;
}
function david_uJ(j, U) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * j + 1);
      break;
    case 2:
      return parseInt(Math.random() * (U - j + 1) + j);
      break;
    default:
      return 0;
      break;
  }
}
function david_uu() {
  const U = {
    BOZwL: function (V, J) {
      return V !== J;
    },
    EfSma: "oWemY",
    iqbIv: "0123456789ABCDEF",
    TVixo: function (V, J) {
      return V * J;
    },
    LJERf: "XX:XX:XX:XX:XX:XX"
  };
  const P = U;
  return P.LJERf.replace(/X/g, function () {
    if (P.BOZwL(P.EfSma, P.EfSma)) {
      P = V = 64;
    } else {
      return P.iqbIv.charAt(Math.floor(P.TVixo(Math.random(), 16)));
    }
  });
}
function david_us() {
  function U() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return U() + U() + "-" + U() + "-" + U() + "-" + U() + "-" + U() + U() + U();
}
function david_uv(j) {
  if (j.length == 11) {
    let V = j.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return V;
  } else {
    return j;
  }
}
function david_uD(j) {
  return new Promise((P, V) => {
    const s = "https://v1.hitokoto.cn/?c=e",
      v = {
        accept: "application/json"
      };
    const D = {
      url: s,
      headers: v
    };
    david_Vx.get(D, async (l, Y, Q) => {
      let W = JSON.parse(Q),
        R = W.hitokoto;
      contents[j] = R + " " + R;
      P();
    });
  });
}
function david_uA() {
  return new Promise((U, P) => {
    const u = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      s = {
        url: u
      };
    david_Vx.get(s, async (D, A, l) => {
      U(l);
    });
  });
}
function david_ul() {
  return Math.round(new Date().getTime()).toString();
}
function david_uY() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function david_uQ() {
  if (david_Vr == 1) {
    david_Vx.msg(david_Vx.name, "", david_Vx.message);
  }
}
async function david_uW(j, U) {
  if (U) {
    if (david_Vx.isNode()) {
      await david_VH.sendNotify(david_Vx.name, j);
    } else {
      david_Vx.msg(david_Vx.name, "", j);
    }
  } else {
    if (david_VZ == 9 || david_VZ == 12 || david_VZ == 18) {
      if (david_Vr == 1) {
        david_Vx.isNode() ? await david_VH.sendNotify(david_Vx.name, j) : david_Vx.msg(david_Vx.name, "", j);
      } else {
        david_Vx.log(j);
      }
    }
  }
}
async function david_uR(j, U, P) {
  return new Promise((J, u) => {
    const D = "https://wxpusher.zjiecode.com/api/send/message",
      A = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: U,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [P],
        verifyPay: false
      };
    const Y = {
      "Content-Type": "application/json"
    };
    const Q = {
      url: D,
      headers: Y,
      body: JSON.stringify(A)
    };
    david_Vx.post(Q, async (W, R, p) => {
      J();
    });
  });
}
function david_up(U, P) {
  P = P || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let u = "";
  for (let s = 0; s < U; s++) {
    let v = Math.floor(Math.random() * P.length);
    u += P.substring(v, v + 1);
  }
  return u;
}
function david_ut(U) {
  function V(jg, jf) {
    return jg << jf | jg >>> 32 - jf;
  }
  function Y(jg, jf) {
    var jb, jM, jH, jw, jy;
    jH = 2147483648 & jg;
    jw = 2147483648 & jf;
    jb = 1073741824 & jg;
    jM = 1073741824 & jf;
    jy = (1073741823 & jg) + (1073741823 & jf);
    return jb & jM ? 2147483648 ^ jy ^ jH ^ jw : jb | jM ? 1073741824 & jy ? 3221225472 ^ jy ^ jH ^ jw : 1073741824 ^ jy ^ jH ^ jw : jy ^ jH ^ jw;
  }
  function Q(jg, jf, jO) {
    return jg & jf | ~jg & jO;
  }
  function W(jg, jf, jO) {
    return jg & jO | jf & ~jO;
  }
  function R(jg, jf, jO) {
    return jg ^ jf ^ jO;
  }
  function Z(jg, jf, jO) {
    return jf ^ (jg | ~jO);
  }
  function X(jg, jf, jO, jb, jM, jH, jw) {
    jg = Y(jg, Y(Y(Q(jf, jO, jb), jM), jw));
    return Y(V(jg, jH), jf);
  }
  function S(jg, jf, jO, jb, jM, jH, jw) {
    jg = Y(jg, Y(Y(W(jf, jO, jb), jM), jw));
    return Y(V(jg, jH), jf);
  }
  function T(jg, jf, jO, jb, jM, jH, jw) {
    jg = Y(jg, Y(Y(R(jf, jO, jb), jM), jw));
    return Y(V(jg, jH), jf);
  }
  function j0(jg, jf, jO, jb, jM, jH, jw) {
    jg = Y(jg, Y(Y(Z(jf, jO, jb), jM), jw));
    return Y(V(jg, jH), jf);
  }
  function j1(jg) {
    for (var jf, jO = jg.length, jb = jO + 8, jM = (jb - jb % 64) / 64, jH = 16 * (jM + 1), jw = new Array(jH - 1), jy = 0, jI = 0; jO > jI;) {
      jf = (jI - jI % 4) / 4;
      jy = jI % 4 * 8;
      jw[jf] = jw[jf] | jg.charCodeAt(jI) << jy;
      jI++;
    }
    jf = (jI - jI % 4) / 4;
    jy = jI % 4 * 8;
    jw[jf] = jw[jf] | 128 << jy;
    jw[jH - 2] = jO << 3;
    jw[jH - 1] = jO >>> 29;
    return jw;
  }
  function j2(jg) {
    var jf,
      jO,
      jb = "",
      jM = "";
    for (jO = 0; 3 >= jO; jO++) {
      jf = jg >>> 8 * jO & 255;
      jM = "0" + jf.toString(16);
      jb += jM.substr(jM.length - 2, 2);
    }
    return jb;
  }
  function j3(jg) {
    jg = jg.replace(/\r\n/g, "\n");
    for (var jO = "", jb = 0; jb < jg.length; jb++) {
      var jM = jg.charCodeAt(jb);
      128 > jM ? jO += String.fromCharCode(jM) : jM > 127 && 2048 > jM ? (jO += String.fromCharCode(jM >> 6 | 192), jO += String.fromCharCode(63 & jM | 128)) : (jO += String.fromCharCode(jM >> 12 | 224), jO += String.fromCharCode(jM >> 6 & 63 | 128), jO += String.fromCharCode(63 & jM | 128));
    }
    return jO;
  }
  var j4,
    j5,
    j6,
    j7,
    j8,
    j9,
    jj,
    jU,
    jP,
    jV = [],
    jJ = 7,
    ju = 12,
    js = 17,
    jv = 22,
    jD = 5,
    jA = 9,
    jl = 14,
    jY = 20,
    jQ = 4,
    jW = 11,
    jR = 16,
    jp = 23,
    jt = 6,
    jh = 10,
    jx = 15,
    jF = 21;
  for (U = j3(U), jV = j1(U), j9 = 1732584193, jj = 4023233417, jU = 2562383102, jP = 271733878, j4 = 0; j4 < jV.length; j4 += 16) {
    j5 = j9;
    j6 = jj;
    j7 = jU;
    j8 = jP;
    j9 = X(j9, jj, jU, jP, jV[j4 + 0], jJ, 3614090360);
    jP = X(jP, j9, jj, jU, jV[j4 + 1], ju, 3905402710);
    jU = X(jU, jP, j9, jj, jV[j4 + 2], js, 606105819);
    jj = X(jj, jU, jP, j9, jV[j4 + 3], jv, 3250441966);
    j9 = X(j9, jj, jU, jP, jV[j4 + 4], jJ, 4118548399);
    jP = X(jP, j9, jj, jU, jV[j4 + 5], ju, 1200080426);
    jU = X(jU, jP, j9, jj, jV[j4 + 6], js, 2821735955);
    jj = X(jj, jU, jP, j9, jV[j4 + 7], jv, 4249261313);
    j9 = X(j9, jj, jU, jP, jV[j4 + 8], jJ, 1770035416);
    jP = X(jP, j9, jj, jU, jV[j4 + 9], ju, 2336552879);
    jU = X(jU, jP, j9, jj, jV[j4 + 10], js, 4294925233);
    jj = X(jj, jU, jP, j9, jV[j4 + 11], jv, 2304563134);
    j9 = X(j9, jj, jU, jP, jV[j4 + 12], jJ, 1804603682);
    jP = X(jP, j9, jj, jU, jV[j4 + 13], ju, 4254626195);
    jU = X(jU, jP, j9, jj, jV[j4 + 14], js, 2792965006);
    jj = X(jj, jU, jP, j9, jV[j4 + 15], jv, 1236535329);
    j9 = S(j9, jj, jU, jP, jV[j4 + 1], jD, 4129170786);
    jP = S(jP, j9, jj, jU, jV[j4 + 6], jA, 3225465664);
    jU = S(jU, jP, j9, jj, jV[j4 + 11], jl, 643717713);
    jj = S(jj, jU, jP, j9, jV[j4 + 0], jY, 3921069994);
    j9 = S(j9, jj, jU, jP, jV[j4 + 5], jD, 3593408605);
    jP = S(jP, j9, jj, jU, jV[j4 + 10], jA, 38016083);
    jU = S(jU, jP, j9, jj, jV[j4 + 15], jl, 3634488961);
    jj = S(jj, jU, jP, j9, jV[j4 + 4], jY, 3889429448);
    j9 = S(j9, jj, jU, jP, jV[j4 + 9], jD, 568446438);
    jP = S(jP, j9, jj, jU, jV[j4 + 14], jA, 3275163606);
    jU = S(jU, jP, j9, jj, jV[j4 + 3], jl, 4107603335);
    jj = S(jj, jU, jP, j9, jV[j4 + 8], jY, 1163531501);
    j9 = S(j9, jj, jU, jP, jV[j4 + 13], jD, 2850285829);
    jP = S(jP, j9, jj, jU, jV[j4 + 2], jA, 4243563512);
    jU = S(jU, jP, j9, jj, jV[j4 + 7], jl, 1735328473);
    jj = S(jj, jU, jP, j9, jV[j4 + 12], jY, 2368359562);
    j9 = T(j9, jj, jU, jP, jV[j4 + 5], jQ, 4294588738);
    jP = T(jP, j9, jj, jU, jV[j4 + 8], jW, 2272392833);
    jU = T(jU, jP, j9, jj, jV[j4 + 11], jR, 1839030562);
    jj = T(jj, jU, jP, j9, jV[j4 + 14], jp, 4259657740);
    j9 = T(j9, jj, jU, jP, jV[j4 + 1], jQ, 2763975236);
    jP = T(jP, j9, jj, jU, jV[j4 + 4], jW, 1272893353);
    jU = T(jU, jP, j9, jj, jV[j4 + 7], jR, 4139469664);
    jj = T(jj, jU, jP, j9, jV[j4 + 10], jp, 3200236656);
    j9 = T(j9, jj, jU, jP, jV[j4 + 13], jQ, 681279174);
    jP = T(jP, j9, jj, jU, jV[j4 + 0], jW, 3936430074);
    jU = T(jU, jP, j9, jj, jV[j4 + 3], jR, 3572445317);
    jj = T(jj, jU, jP, j9, jV[j4 + 6], jp, 76029189);
    j9 = T(j9, jj, jU, jP, jV[j4 + 9], jQ, 3654602809);
    jP = T(jP, j9, jj, jU, jV[j4 + 12], jW, 3873151461);
    jU = T(jU, jP, j9, jj, jV[j4 + 15], jR, 530742520);
    jj = T(jj, jU, jP, j9, jV[j4 + 2], jp, 3299628645);
    j9 = j0(j9, jj, jU, jP, jV[j4 + 0], jt, 4096336452);
    jP = j0(jP, j9, jj, jU, jV[j4 + 7], jh, 1126891415);
    jU = j0(jU, jP, j9, jj, jV[j4 + 14], jx, 2878612391);
    jj = j0(jj, jU, jP, j9, jV[j4 + 5], jF, 4237533241);
    j9 = j0(j9, jj, jU, jP, jV[j4 + 12], jt, 1700485571);
    jP = j0(jP, j9, jj, jU, jV[j4 + 3], jh, 2399980690);
    jU = j0(jU, jP, j9, jj, jV[j4 + 10], jx, 4293915773);
    jj = j0(jj, jU, jP, j9, jV[j4 + 1], jF, 2240044497);
    j9 = j0(j9, jj, jU, jP, jV[j4 + 8], jt, 1873313359);
    jP = j0(jP, j9, jj, jU, jV[j4 + 15], jh, 4264355552);
    jU = j0(jU, jP, j9, jj, jV[j4 + 6], jx, 2734768916);
    jj = j0(jj, jU, jP, j9, jV[j4 + 13], jF, 1309151649);
    j9 = j0(j9, jj, jU, jP, jV[j4 + 4], jt, 4149444226);
    jP = j0(jP, j9, jj, jU, jV[j4 + 11], jh, 3174756917);
    jU = j0(jU, jP, j9, jj, jV[j4 + 2], jx, 718787259);
    jj = j0(jj, jU, jP, j9, jV[j4 + 9], jF, 3951481745);
    j9 = Y(j9, j5);
    jj = Y(jj, j6);
    jU = Y(jU, j7);
    jP = Y(jP, j8);
  }
  var jq = j2(j9) + j2(jj) + j2(jU) + j2(jP);
  return jq.toLowerCase();
}
function david_uh(j) {
  var P = 8;
  var V = 0;
  function J(F, q) {
    var g = (F & 65535) + (q & 65535),
      f = (F >> 16) + (q >> 16) + (g >> 16);
    return f << 16 | g & 65535;
  }
  function u(F, q) {
    return F >>> q | F << 32 - q;
  }
  function v(F, q) {
    return F >>> q;
  }
  function D(F, q, g) {
    return F & q ^ ~F & g;
  }
  function A(F, q, g) {
    return F & q ^ F & g ^ q & g;
  }
  function l(F) {
    return u(F, 2) ^ u(F, 13) ^ u(F, 22);
  }
  function Y(F) {
    return u(F, 6) ^ u(F, 11) ^ u(F, 25);
  }
  function Q(F) {
    return u(F, 7) ^ u(F, 18) ^ v(F, 3);
  }
  function W(F) {
    return u(F, 17) ^ u(F, 19) ^ v(F, 10);
  }
  function p(F, q) {
    var M = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298),
      H = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225),
      w = new Array(64),
      y,
      I,
      C,
      r,
      E,
      Z,
      o,
      k,
      L,
      X,
      B,
      N;
    F[q >> 5] |= 128 << 24 - q % 32;
    F[(q + 64 >> 9 << 4) + 15] = q;
    for (var L = 0; L < F.length; L += 16) {
      y = H[0];
      I = H[1];
      C = H[2];
      r = H[3];
      E = H[4];
      Z = H[5];
      o = H[6];
      k = H[7];
      for (var X = 0; X < 64; X++) {
        if (X < 16) {
          w[X] = F[X + L];
        } else {
          w[X] = J(J(J(W(w[X - 2]), w[X - 7]), Q(w[X - 15])), w[X - 16]);
        }
        B = J(J(J(J(k, Y(E)), D(E, Z, o)), M[X]), w[X]);
        N = J(l(y), A(y, I, C));
        k = o;
        o = Z;
        Z = E;
        E = J(r, B);
        r = C;
        C = I;
        I = y;
        y = J(B, N);
      }
      H[0] = J(y, H[0]);
      H[1] = J(I, H[1]);
      H[2] = J(C, H[2]);
      H[3] = J(r, H[3]);
      H[4] = J(E, H[4]);
      H[5] = J(Z, H[5]);
      H[6] = J(o, H[6]);
      H[7] = J(k, H[7]);
    }
    return H;
  }
  function t(F) {
    var g = Array(),
      f = (1 << P) - 1;
    for (var O = 0; O < F.length * P; O += P) {
      g[O >> 5] |= (F.charCodeAt(O / P) & f) << 24 - O % 32;
    }
    return g;
  }
  function h(F) {
    F = F.replace(/\r\n/g, "\n");
    var g = "";
    for (var f = 0; f < F.length; f++) {
      var O = F.charCodeAt(f);
      if (O < 128) {
        g += String.fromCharCode(O);
      } else {
        if (O > 127 && O < 2048) {
          g += String.fromCharCode(O >> 6 | 192);
          g += String.fromCharCode(O & 63 | 128);
        } else {
          g += String.fromCharCode(O >> 12 | 224);
          g += String.fromCharCode(O >> 6 & 63 | 128);
          g += String.fromCharCode(O & 63 | 128);
        }
      }
    }
    return g;
  }
  function x(F) {
    var g = V ? "0123456789ABCDEF" : "0123456789abcdef",
      f = "";
    for (var O = 0; O < F.length * 4; O++) {
      f += g.charAt(F[O >> 2] >> (3 - O % 4) * 8 + 4 & 15) + g.charAt(F[O >> 2] >> (3 - O % 4) * 8 & 15);
    }
    return f;
  }
  j = h(j);
  return x(p(t(j), j.length * P));
}
function david_ux(U) {
  function V(w, y) {
    var I = w << y | w >>> 32 - y;
    return I;
  }
  function J(w) {
    var I = "",
      a,
      c,
      r;
    for (a = 0; a <= 6; a += 2) {
      c = w >>> a * 4 + 4 & 15;
      r = w >>> a * 4 & 15;
      I += c.toString(16) + r.toString(16);
    }
    return I;
  }
  function u(w) {
    var I = "",
      a,
      c;
    for (a = 7; a >= 0; a--) {
      c = w >>> a * 4 & 15;
      I += c.toString(16);
    }
    return I;
  }
  function s(w) {
    w = w.replace(/\r\n/g, "\n");
    var I = "";
    for (var a = 0; a < w.length; a++) {
      var r = w.charCodeAt(a);
      if (r < 128) {
        I += String.fromCharCode(r);
      } else {
        if (r > 127 && r < 2048) {
          I += String.fromCharCode(r >> 6 | 192);
          I += String.fromCharCode(r & 63 | 128);
        } else {
          I += String.fromCharCode(r >> 12 | 224);
          I += String.fromCharCode(r >> 6 & 63 | 128);
          I += String.fromCharCode(r & 63 | 128);
        }
      }
    }
    return I;
  }
  var v,
    l,
    Y,
    Q = new Array(80),
    R = 1732584193,
    p = 4023233417;
  var t = 2562383102;
  var h = 271733878,
    x = 3285377520,
    F,
    q,
    g,
    f,
    O,
    b;
  U = s(U);
  var M = U.length;
  var H = new Array();
  for (l = 0; l < M - 3; l += 4) {
    Y = U.charCodeAt(l) << 24 | U.charCodeAt(l + 1 < 10 ? "0" + (l + 1) : l + 1) << 16 | U.charCodeAt(l + 2) << 8 | U.charCodeAt(l + 3);
    H.push(Y);
  }
  switch (M % 4) {
    case 0:
      l = 2147483648;
      break;
    case 1:
      l = U.charCodeAt(M - 1) << 24 | 8388608;
      break;
    case 2:
      l = U.charCodeAt(M - 2) << 24 | U.charCodeAt(M - 1) << 16 | 32768;
      break;
    case 3:
      l = U.charCodeAt(M - 3) << 24 | U.charCodeAt(M - 2) << 16 | U.charCodeAt(M - 1) << 8 | 128;
      break;
  }
  H.push(l);
  while (H.length % 16 != 14) {
    H.push(0);
  }
  H.push(M >>> 29);
  H.push(M << 3 & 4294967295);
  for (v = 0; v < H.length; v += 16) {
    for (l = 0; l < 16; l++) {
      Q[l] = H[v + l];
    }
    for (l = 16; l <= 79; l++) {
      Q[l] = V(Q[l - 3] ^ Q[l - 8] ^ Q[l - 14] ^ Q[l - 16], 1);
    }
    F = R;
    q = p;
    g = t;
    f = h;
    O = x;
    for (l = 0; l <= 19; l++) {
      b = V(F, 5) + (q & g | ~q & f) + O + Q[l] + 1518500249 & 4294967295;
      O = f;
      f = g;
      g = V(q, 30);
      q = F;
      F = b;
    }
    for (l = 20; l <= 39; l++) {
      b = V(F, 5) + (q ^ g ^ f) + O + Q[l] + 1859775393 & 4294967295;
      O = f;
      f = g;
      g = V(q, 30);
      q = F;
      F = b;
    }
    for (l = 40; l <= 59; l++) {
      b = V(F, 5) + (q & g | q & f | g & f) + O + Q[l] + 2400959708 & 4294967295;
      O = f;
      f = g;
      g = V(q, 30);
      q = F;
      F = b;
    }
    for (l = 60; l <= 79; l++) {
      b = V(F, 5) + (q ^ g ^ f) + O + Q[l] + 3395469782 & 4294967295;
      O = f;
      f = g;
      g = V(q, 30);
      q = F;
      F = b;
    }
    R = R + F & 4294967295;
    p = p + q & 4294967295;
    t = t + g & 4294967295;
    h = h + f & 4294967295;
    x = x + O & 4294967295;
  }
  var b = u(R) + u(p) + u(t) + u(h) + u(x);
  return b.toLowerCase();
}
function david_uF() {
  var U = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (P) {
    var Q = "";
    var u, s, v, D, A, l, Y;
    var J = 0;
    P = utf8Encode(P);
    while (J < P.length) {
      u = P.charCodeAt(J++);
      s = P.charCodeAt(J++);
      v = P.charCodeAt(J++);
      D = u >> 2;
      A = (u & 3) << 4 | s >> 4;
      l = (s & 15) << 2 | v >> 6;
      Y = v & 63;
      if (isNaN(s)) {
        l = Y = 64;
      } else {
        isNaN(v) && (Y = 64);
      }
      Q = Q + U.charAt(D) + U.charAt(A) + U.charAt(l) + U.charAt(Y);
    }
    return Q;
  };
  this.decode = function (P) {
    var D = "";
    var A, l, Y;
    var J, u, s, v;
    var V = 0;
    P = P.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (V < P.length) {
      J = U.indexOf(P.charAt(V++));
      u = U.indexOf(P.charAt(V++));
      s = U.indexOf(P.charAt(V++));
      v = U.indexOf(P.charAt(V++));
      A = J << 2 | u >> 4;
      l = (u & 15) << 4 | s >> 2;
      Y = (s & 3) << 6 | v;
      D = D + String.fromCharCode(A);
      s !== 64 && (D = D + String.fromCharCode(l));
      if (v !== 64) {
        D = D + String.fromCharCode(Y);
      }
    }
    D = utf8Decode(D);
    return D;
  };
  utf8Encode = function (P) {
    P = P.replace(/\r\n/g, "\n");
    var V = "";
    for (var J = 0; J < P.length; J++) {
      var u = P.charCodeAt(J);
      if (u < 128) {
        V += String.fromCharCode(u);
      } else {
        if (u > 127 && u < 2048) {
          V += String.fromCharCode(u >> 6 | 192);
          V += String.fromCharCode(u & 63 | 128);
        } else {
          V += String.fromCharCode(u >> 12 | 224);
          V += String.fromCharCode(u >> 6 & 63 | 128);
          V += String.fromCharCode(u & 63 | 128);
        }
      }
    }
    return V;
  };
  utf8Decode = function (P) {
    var u = "";
    var v = 0;
    var J = 0;
    var s = 0;
    var D = 0;
    while (v < P.length) {
      J = P.charCodeAt(v);
      if (J < 128) {
        u += String.fromCharCode(J);
        v++;
      } else {
        if (J > 191 && J < 224) {
          s = P.charCodeAt(v + 1 < 10 ? "0" + (v + 1) : v + 1);
          u += String.fromCharCode((J & 31) << 6 | s & 63);
          v += 2;
        } else {
          s = P.charCodeAt(v + 1 < 10 ? "0" + (v + 1) : v + 1);
          D = P.charCodeAt(v + 2);
          u += String.fromCharCode((J & 15) << 12 | (s & 63) << 6 | D & 63);
          v += 3;
        }
      }
    }
    return u;
  };
}
function david_uq(j, U) {
  class V {
    constructor(J) {
      this.env = J;
    }
    send(J, u = "GET") {
      J = typeof J === "string" ? {
        url: J
      } : J;
      let v = this.get;
      if (u === "POST") {
        v = this.post;
      }
      return new Promise((A, l) => {
        v.call(this, J, (W, R, p) => {
          if (W) {
            l(W);
          } else {
            A(R);
          }
        });
      });
    }
    get(J) {
      return this.send.call(this.env, J);
    }
    post(J) {
      return this.send.call(this.env, J, "POST");
    }
  }
  return new class {
    constructor(J, u) {
      this.name = J;
      this.http = new V(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, u);
      const s = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(s);
      }
      this.log("", "🔔 " + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" !== typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" !== typeof $task;
    }
    isSurge() {
      return "undefined" !== typeof $httpClient && "undefined" === typeof $loon;
    }
    isLoon() {
      return "undefined" !== typeof $loon;
    }
    isShadowrocket() {
      return "undefined" !== typeof $rocket;
    }
    toObj(J, u = null) {
      try {
        return JSON.parse(J);
      } catch {
        return u;
      }
    }
    toStr(J, u = null) {
      try {
        return JSON.stringify(J);
      } catch {
        return u;
      }
    }
    getjson(J, u) {
      let D = u;
      const A = this.getdata(J);
      if (A) {
        try {
          D = JSON.parse(this.getdata(J));
        } catch {}
      }
      return D;
    }
    setjson(J, u) {
      try {
        return this.setdata(JSON.stringify(J), u);
      } catch {
        return false;
      }
    }
    getScript(J) {
      return new Promise(v => {
        const D = {
          url: J
        };
        this.get(D, (A, l, Y) => v(Y));
      });
    }
    runScript(J, u) {
      return new Promise(v => {
        let D = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        D = D ? D.replace(/\n/g, "").trim() : D;
        let A = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        A = A ? A * 1 : 20;
        A = u && u.timeout ? u.timeout : A;
        const [l, Y] = D.split("@"),
          Q = {
            script_text: J,
            mock_type: "cron",
            timeout: A
          };
        const W = {
          "X-Key": l,
          Accept: "*/*"
        };
        const R = {
          url: "http: //" + Y + "/v1/scripting/evaluate",
          body: Q,
          headers: W
        };
        this.post(R, (t, h, x) => v(x));
      }).catch(v => this.logErr(v));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const J = this.path.resolve(this.dataFile),
          u = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(J),
          v = !s && this.fs.existsSync(u);
        if (s || v) {
          const D = s ? J : u;
          try {
            return JSON.parse(this.fs.readFileSync(D));
          } catch (l) {
            return {};
          }
        } else {
          return {};
        }
      } else {
        return {};
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const s = this.path.resolve(this.dataFile),
          v = this.path.resolve(process.cwd(), this.dataFile),
          D = this.fs.existsSync(s),
          A = !D && this.fs.existsSync(v),
          l = JSON.stringify(this.data);
        if (D) {
          this.fs.writeFileSync(s, l);
        } else {
          if (A) {
            this.fs.writeFileSync(v, l);
          } else {
            this.fs.writeFileSync(s, l);
          }
        }
      }
    }
    lodash_get(J, u, s = undefined) {
      const v = u.replace(/[(d+)]/g, ".$1").split(".");
      let D = J;
      for (const A of v) {
        D = Object(D)[A];
        if (D === undefined) {
          return s;
        }
      }
      return D;
    }
    lodash_set(J, u, s) {
      if (Object(J) !== J) {
        return J;
      }
      if (!Array.isArray(u)) {
        u = u.toString().match(/[^.[]]+/g) || [];
      }
      u.slice(0, -1).reduce((A, l, Y) => Object(A[l]) === A[l] ? A[l] : A[l] = Math.abs(u[Y + 1 < 10 ? "0" + (Y + 1) : Y + 1]) >> 0 === +u[Y + 1 < 10 ? "0" + (Y + 1) : Y + 1] ? [] : {}, J)[u[u.length - 1]] = s;
      return J;
    }
    getdata(J) {
      let v = this.getval(J);
      if (/^@/.test(J)) {
        const [, D, A] = /^@(.*?).(.*?)$/.exec(J),
          l = D ? this.getval(D) : "";
        if (l) {
          try {
            const Y = JSON.parse(l);
            v = Y ? this.lodash_get(Y, A, "") : v;
          } catch (W) {
            v = "";
          }
        }
      }
      return v;
    }
    setdata(J, u) {
      let D = false;
      if (/^@/.test(u)) {
        const [, l, Y] = /^@(.*?).(.*?)$/.exec(u),
          Q = this.getval(l),
          W = l ? Q === "null" ? null : Q || "{}" : "{}";
        try {
          const p = JSON.parse(W);
          this.lodash_set(p, Y, J);
          D = this.setval(JSON.stringify(p), l);
        } catch (t) {
          const x = {};
          this.lodash_set(x, Y, J);
          D = this.setval(JSON.stringify(x), l);
        }
      } else {
        D = this.setval(J, u);
      }
      return D;
    }
    getval(J) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(J);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(J);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[J];
          } else {
            return this.data && this.data[J] || null;
          }
        }
      }
    }
    setval(J, u) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(J, u);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(J, u);
        } else {
          return this.isNode() ? (this.data = this.loaddata(), this.data[u] = J, this.writedata(), true) : this.data && this.data[u] || null;
        }
      }
    }
    initGotEnv(J) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      J && (J.headers = J.headers ? J.headers : {}, undefined === J.headers.Cookie && undefined === J.cookieJar && (J.cookieJar = this.ckjar));
    }
    get(J, u = () => {}) {
      J.headers && (delete J.headers["Content-Type"], delete J.headers["Content-Length"]);
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          J.headers = J.headers || {};
          const v = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(J.headers, v);
        }
        $httpClient.get(J, (D, A, l) => {
          !D && A && (A.body = l, A.statusCode = A.status);
          u(D, A, l);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            J.opts = J.opts || {};
            const D = {
              hints: false
            };
            Object.assign(J.opts, D);
          }
          $task.fetch(J).then(A => {
            const {
                statusCode: l,
                statusCode: Y,
                headers: Q,
                body: W
              } = A,
              R = {
                status: l,
                statusCode: Y,
                headers: Q,
                body: W
              };
            u(null, R, W);
          }, A => u(A));
        } else {
          this.isNode() && (this.initGotEnv(J), this.got(J).on("redirect", (A, l) => {
            try {
              if (A.headers["set-cookie"]) {
                const Y = A.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                Y && this.ckjar.setCookieSync(Y, null);
                l.cookieJar = this.ckjar;
              }
            } catch (Q) {
              this.logErr(Q);
            }
          }).then(A => {
            const {
                statusCode: l,
                statusCode: Y,
                headers: Q,
                body: W
              } = A,
              R = {
                status: l,
                statusCode: Y,
                headers: Q,
                body: W
              };
            u(null, R, W);
          }, A => {
            const {
              message: l,
              response: Y
            } = A;
            u(l, Y, Y && Y.body);
          }));
        }
      }
    }
    post(J, u = () => {}) {
      const v = J.method ? J.method.toLocaleLowerCase() : "post";
      J.body && J.headers && !J.headers["Content-Type"] && (J.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (J.headers) {
        delete J.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          J.headers = J.headers || {};
          const D = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(J.headers, D);
        }
        $httpClient[v](J, (A, l, Y) => {
          !A && l && (l.body = Y, l.statusCode = l.status);
          u(A, l, Y);
        });
      } else {
        if (this.isQuanX()) {
          J.method = v;
          if (this.isNeedRewrite) {
            J.opts = J.opts || {};
            const A = {
              hints: false
            };
            Object.assign(J.opts, A);
          }
          $task.fetch(J).then(l => {
            const {
                statusCode: Y,
                statusCode: Q,
                headers: W,
                body: R
              } = l,
              p = {
                status: Y,
                statusCode: Q,
                headers: W,
                body: R
              };
            u(null, p, R);
          }, l => u(l));
        } else {
          if (this.isNode()) {
            this.initGotEnv(J);
            const {
              url: l,
              ...Y
            } = J;
            this.got[v](l, Y).then(Q => {
              const {
                  statusCode: W,
                  statusCode: R,
                  headers: p,
                  body: t
                } = Q,
                h = {
                  status: W,
                  statusCode: R,
                  headers: p,
                  body: t
                };
              u(null, h, t);
            }, Q => {
              const {
                message: W,
                response: R
              } = Q;
              u(W, R, R && R.body);
            });
          }
        }
      }
    }
    put(J, u = () => {}) {
      const v = J.method ? J.method.toLocaleLowerCase() : "put";
      J.body && J.headers && !J.headers["Content-Type"] && (J.headers["Content-Type"] = "application/x-www-form-urlencoded");
      if (J.headers) {
        delete J.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          J.headers = J.headers || {};
          const D = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(J.headers, D);
        }
        $httpClient[v](J, (A, l, Y) => {
          !A && l && (l.body = Y, l.statusCode = l.status);
          u(A, l, Y);
        });
      } else {
        if (this.isQuanX()) {
          J.method = v;
          if (this.isNeedRewrite) {
            J.opts = J.opts || {};
            const A = {
              hints: false
            };
            Object.assign(J.opts, A);
          }
          $task.fetch(J).then(l => {
            const {
                statusCode: Y,
                statusCode: Q,
                headers: W,
                body: R
              } = l,
              p = {
                status: Y,
                statusCode: Q,
                headers: W,
                body: R
              };
            u(null, p, R);
          }, l => u(l));
        } else {
          if (this.isNode()) {
            this.initGotEnv(J);
            const {
              url: l,
              ...Y
            } = J;
            this.got[v](l, Y).then(Q => {
              const {
                  statusCode: W,
                  statusCode: R,
                  headers: p,
                  body: t
                } = Q,
                h = {
                  status: W,
                  statusCode: R,
                  headers: p,
                  body: t
                };
              u(null, h, t);
            }, Q => {
              const {
                message: W,
                response: R
              } = Q;
              u(W, R, R && R.body);
            });
          }
        }
      }
    }
    time(J, u = null) {
      const s = u ? new Date(u) : new Date();
      let v = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      if (/(y+)/.test(J)) {
        J = J.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let D in v) if (new RegExp("(" + D + ")").test(J)) {
        J = J.replace(RegExp.$1, RegExp.$1.length == 1 ? v[D] : ("00" + v[D]).substr(("" + v[D]).length));
      }
      return J;
    }
    msg(J = j, u = "", s = "", v) {
      const D = A => {
        if (!A) {
          return A;
        }
        if (typeof A === "string") {
          if (this.isLoon()) {
            return A;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": A
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: A
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof A === "object") {
            if (this.isLoon()) {
              let l = A.openUrl || A.url || A["open-url"],
                Y = A.mediaUrl || A["media-url"];
              const Q = {
                openUrl: l,
                mediaUrl: Y
              };
              return Q;
            } else {
              if (this.isQuanX()) {
                let W = A["open-url"] || A.url || A.openUrl,
                  R = A["media-url"] || A.mediaUrl;
                const p = {
                  "open-url": W,
                  "media-url": R
                };
                return p;
              } else {
                if (this.isSurge()) {
                  let t = A.url || A.openUrl || A["open-url"];
                  const h = {
                    url: t
                  };
                  return h;
                }
              }
            }
          } else {
            return undefined;
          }
        }
      };
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(J, u, s, D(v));
        } else {
          this.isQuanX() && $notify(J, u, s, D(v));
        }
      }
      if (!this.isMuteLog) {
        let A = ["", "==============📣系统通知📣=============="];
        A.push(J);
        u ? A.push(u) : "";
        s ? A.push(s) : "";
        console.log(A.join("\n"));
        this.logs = this.logs.concat(A);
      }
    }
    log(...J) {
      J.length > 0 && (this.logs = [...this.logs, ...J]);
      console.log(J.join(this.logSeparator));
    }
    logErr(J, u) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !s ? this.log("", "❗️" + this.name + ", 错误!", J) : this.log("", "❗️" + this.name + ", 错误!", J.stack);
    }
    wait(J) {
      return new Promise(u => setTimeout(u, J));
    }
    done(J = {}) {
      const u = new Date().getTime();
      const s = (u - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + s + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(J);
    }
  }(j, U);
}