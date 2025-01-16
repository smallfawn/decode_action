//Thu Jan 16 2025 01:52:44 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("宝骏汽车");
const version = "V1.0.0";
const appName = "bjqcapp";
let bjqcapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "";
const WebSocket = $.isNode() ? require("ws") : "";
const file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", C => {}));
const http = $.isNode() ? require("http") : "";
const notify = $.isNode() ? require("./sendNotify") : "";
const COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1;
let activeCode = $.getdata("bjqcactivecode") || 0;
let bjqcuserck = $.getval("bjqcuserck") || 1;
let apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
const debug = 0;
let tz = $.getval("tz") || "1";
let ts = Math.round(new Date().getTime() / 1000).toString();
var hour = "";
var minute = "";
let sendlogs = "";
let bjqclogs = [];
let additional_Params = {};
let wss = [];
let channels_status = [];
let reconectCounts = [];
let requestObjects = [];
let requestSigns = [];
let accountErrors = [];
let httpResult = "";
let userAuth = "";
let scriptAuth = "";
let newest_version = "";
let runAuth = "";
let systemNotify = "";
let vipAuth = "";
let isCharge = "";
let multiAccount = 1;
let buyCount = 1;
let runTotalCounts = 1;
let runedCounts = 1;
let userRank = "";
let invicode = "";
let numbers = 3;
let vipDate = "";
if ($.isNode()) {
  process.env.BJQCAPP ? bjqcapp = JSON.parse(process.env.BJQCAPP) : bjqcapp = COOKIES.BJQC;
  userId = process.env.TGUSERID;
  activeCode = process.env.BJQCACTIVECODE;
  process.env.APIHOST && (apiHost = process.env.APIHOST);
  process.env.APIHOSTS && (apiHost = process.env.APIHOSTS);
  hour = new Date(new Date().getTime()).getHours();
  minute = new Date(new Date().getTime()).getMinutes();
  $.log("🔔 当前环境: Node, 当前时间：" + hour + "点");
} else {
  hour = new Date().getHours();
  minute = new Date().getMinutes();
  $.log("🔔 当前环境: 手机代理, 当前时间：" + hour + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    {
      await getCk();
    }
  } else {
    {
      if (!bjqcapp) {
        {
          $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
          return;
        }
      }
      $.log("📢 开始检测服务器接口状态>>>");
      let v = false;
      const N = apiHost.split("&");
      const f = N.length;
      for (let Q = 0; Q < f; Q++) {
        {
          if ($.isNode()) {
            v = await checkAddress("" + N[Q], 2500);
          } else {
            if ($.isSurge() || $.isLoon()) {
              {
                v = await httpClientRequest("" + N[Q], 2500);
              }
            } else {
              v = await fetchRequest("" + N[Q], 2500);
            }
          }
          if (v == true) {
            {
              apiHost = N[Q];
              $.log("📢 接口" + (Q + 1) + "[" + N[Q] + "]服务器接口正常! 🎉");
              break;
            }
          }
          if (Q == f - 1 && v == false) {
            {
              $.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
              $.msg($.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
              return;
            }
          }
        }
      }
      if (!activeCode || !userId || userId == 1 || activeCode == 0 || activeCode.length != 32) {
        {
          $.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
          return;
        }
      }
      await getScriptAuth(appName, userId, activeCode);
      $.log("📢 " + systemNotify);
      $.log("🔔 当前脚本版本号: " + version + "，最新版本号: " + newest_version);
      if (vipDate != "") {
        {
          let Y = new Date(vipDate).getTime();
          let B = new Date().getTime();
          if (B > Y) {
            {
              $.log("❗️ 抱歉，VIP到期了，请及时付费。");
              return;
            }
          }
        }
      }
      if (version < newest_version) {
        {
          $.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
          sendMsg("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
          return;
        }
      }
      if (scriptAuth != true) {
        {
          $.log("❗️ 抱歉, 此脚本已停用。");
          return;
        }
      }
      if (userRank != true) {
        {
          $.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
          return;
        }
      }
      if (userAuth != true) {
        {
          $.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
          return;
        }
      }
      if (isCharge == true) {
        $.log("🔔 此脚本采用付费模式。🔒");
      } else {
        {
          $.log("🔔 此脚本采用免费模式。🔓");
        }
      }
      if (vipDate != "") {
        {
          if (isCharge == true) {
            {
              let o = new Date(vipDate).getTime();
              let W = new Date().getTime();
              if (W > o) {
                {
                  $.log("❗️ 抱歉，VIP到期了，请及时付费。");
                  return;
                }
              } else {
                {
                  $.log("🔔 尊敬的会员：您好，你是VIP用户！🔐");
                }
              }
            }
          }
        }
      } else {
        {
          if (isCharge == true) {
            {
              if (vipAuth != true) {
                {
                  $.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
                  return;
                }
              } else {
                {
                  $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
                }
              }
            }
          }
        }
      }
      if (multiAccount > 1) {
        {
          $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + numbers * multiAccount + "个账号。");
        }
      }
      buyCount > 1 && $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + runTotalCounts + "次, 已经运行了" + runedCounts + "次。");
      if (runAuth != true) {
        {
          $.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
          return;
        }
      }
      if (bjqcapp.length > numbers * multiAccount) {
        {
          $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
          return;
        }
      }
      if (bjqcapp.length == 0) {
        {
          $.log("先抓取账号ck，再运行脚本吧！");
          return;
        }
      }
      if (runedCounts + bjqcapp.length > runTotalCounts) {
        {
          $.log("📢 一共发现了" + bjqcapp.length + "个账号");
          $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (bjqcapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
          return;
        }
      }
      if (vipDate != "") {
        {
          $.log("📢 你的会员有效期到： " + vipDate);
        }
      }
      $.log("📢 一共发现了" + bjqcapp.length + "个账号");
      let n = [];
      let K = bjqcapp.length;
      let t = 0;
      if ($.isNode() && process.env.BJQC_THREAD_COUNT) {
        t = parseInt(process.env.BJQC_THREAD_COUNT);
      } else {
        {
          t = K;
        }
      }
      let z = bjqcapp.length;
      if (t >= K) {
        {
          t = K;
          z = 1;
          $.log("📢 你设置的线程数是" + t + "，账号个数是" + K + "，" + z + "次可全部跑完。");
          for (let w = 0; w < bjqcapp.length; w++) {
            {
              n.push(runMultiTasks(w));
              bjqclogs[w] = "";
              if ($.isNode()) {
                channels_status[w] = 0;
                accountErrors[w] = false;
                await init_ws(w);
              } else {
                {
                  channels_status[w] = 1;
                }
              }
            }
          }
          await Promise.allSettled(n).then(C1 => {
            {
              $.log("日志整理功能如下：");
              $.log("---------------日志整理开始--------------");
              for (let C3 = 0; C3 < bjqcapp.length; C3++) {
                $.log(bjqclogs[C3]);
                sendlogs += bjqclogs[C3];
              }
              $.log("---------------日志整理结束--------------");
              sendMsg(sendlogs);
            }
          });
        }
      } else {
        {
          z = Math.ceil(K / t);
          $.log("📢 你设置的线程数是" + t + "，账号个数是" + K + "，计算后分" + z + "次执行，一次可执行" + t + "个账号，最后一次如果不够" + t + "个账号，剩多少个账号就跑几个账号。");
          for (let C2 = 0; C2 < z; C2++) {
            {
              for (let C4 = C2 * t; C4 < t * (C2 + 1) && C4 < K; C4++) {
                {
                  n.push(runMultiTasks(C4));
                  bjqclogs[C4] = "";
                  accountErrors[C4] = false;
                  channels_status[C4] = 1;
                  await init_ws(C4);
                }
              }
              await Promise.allSettled(n).then(C8 => {
                {
                  n = [];
                  if (C2 == z - 1) {
                    {
                      $.log("日志整理功能如下：");
                      $.log("---------------日志整理开始--------------");
                      for (let Cv = 0; Cv < bjqcapp.length; Cv++) {
                        {
                          $.log(bjqclogs[Cv]);
                          sendlogs += bjqclogs[Cv];
                        }
                      }
                      $.log("---------------日志整理结束--------------");
                      sendMsg(sendlogs);
                    }
                  }
                }
              });
            }
          }
        }
      }
    }
  }
})().catch(C => $.logErr(C)).finally(() => $.done());
async function runMultiTasks(C) {
  return new Promise((v, N) => {
    const f = {
      LzBIf: "0123456789ABCDEF",
      siXTX: function (n, K) {
        return n * K;
      },
      dVQaj: "XX:XX:XX:XX:XX:XX"
    };
    {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 开始执行 working......");
      runSubTask(v, C);
    }
  });
}
async function init_ws(C) {
  const U = {
    uGbYv: function (v, N) {
      return v < N;
    },
    HGktv: function (v, N) {
      return v > N;
    },
    NOohf: function (v, N) {
      return v | N;
    },
    xUpZV: function (v, N) {
      return v >> N;
    },
    FOeCV: function (v, N) {
      return v & N;
    },
    AoqJj: function (v, N) {
      return v | N;
    },
    zsfTg: function (v, N) {
      return v | N;
    },
    NufSV: function (v, N) {
      return v + N;
    },
    Itmtb: "debu",
    dcEYY: "gger",
    Mmhbj: "stateObject",
    TFMOF: function (v, N) {
      return v === N;
    },
    fzJfU: "PoZSa",
    PcMGN: "hCDhO",
    VaYZO: function (v, N) {
      return v + N;
    },
    AKjCT: function (v, N, f, n, K) {
      return v(N, f, n, K);
    },
    otLmd: function (v, N) {
      return v(N);
    },
    fvjqQ: function (v, N) {
      return v !== N;
    },
    JoWkn: "NEUJf",
    pzmTd: function (v, N) {
      return v + N;
    },
    sMFUL: "POST",
    WaciN: function (v, N) {
      return v !== N;
    },
    PEWdq: "rGvrq",
    cOBxv: function (v, N) {
      return v <= N;
    },
    BiTLr: function (v, N) {
      return v !== N;
    },
    lgaya: "XClve",
    QBULV: function (v, N) {
      return v(N);
    },
    HTsbx: "kSpON",
    igzdR: function (v, N) {
      return v > N;
    },
    EKVpT: function (v, N) {
      return v !== N;
    },
    bGLTR: "MgYdS",
    GwnSB: function (v, N) {
      return v < N;
    },
    zGLzo: function (v, N) {
      return v + N;
    },
    sSCVK: "http",
    pBkPn: "open",
    ApIVi: "close",
    jdnDG: "error"
  };
  if ($.isNode()) {
    {
      reconectCounts[C] > 0 && $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 尝试重新连接服务器>>>>>>");
      wss[C] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
      wss[C].on("open", function f() {
        $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 签名通道已连接");
      });
      wss[C].on("close", function n() {
        $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
      });
      wss[C].on("error", function K() {
        {
          $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 签名通道已关闭，原因是出现错误");
          channels_status[C] = 1;
          reconectCounts[C]++;
          if (reconectCounts[C] <= 3) {
            {
              init_ws(C);
            }
          }
        }
      });
    }
  }
}
async function runSubTask(C, U) {
  const v = {
    HJDLg: function (N, f, n, K) {
      return N(f, n, K);
    },
    SAjTk: "application/json",
    tydMl: function (N) {
      return N();
    },
    qTnLk: function (N, f) {
      return N && f;
    },
    uJinF: function (N, f) {
      return N < f;
    },
    azOyS: function (N, f) {
      return N !== f;
    },
    GdddA: "eViZH",
    bktXa: "yxmRb",
    WqZTv: function (N, f, n) {
      return N(f, n);
    },
    ozyfN: function (N, f) {
      return N == f;
    },
    LqxlE: function (N, f) {
      return N === f;
    },
    oErBO: "rAiqI",
    YXYTg: "PZCZy",
    XTiCH: "hzmdA",
    DWEia: "xVTow",
    LhNCe: "oZcJz",
    yuwra: function (N, f) {
      return N(f);
    },
    WNLII: function (N, f) {
      return N !== f;
    },
    tPAfu: "FqGgb",
    AidBc: "Hokre"
  };
  await $.wait(3000, 5000);
  for (let N = 1; N < 20; N++) {
    {
      await videoList(U, N);
      if (accountErrors[U] == true) {
        {
          break;
        }
      }
    }
  }
  if (accountErrors[U] == true) {
    {
      if ($.isNode()) {
        {
          await wss[U].close();
        }
      }
      C();
      return;
    }
  }
  await accountInfo(U);
  if ($.isNode()) {
    {
      await wss[U].close();
    }
  }
  await runComplete(appName, userId);
  C();
}
async function getCk() {
  const U = {
    XZiHg: function (v, N) {
      return v | N;
    },
    xOWvr: function (v, N) {
      return v >> N;
    },
    tZaNs: function (v, N) {
      return v | N;
    },
    tzDks: function (v, N) {
      return v & N;
    },
    LrIUh: function (v, N, f, i) {
      return v(N, f, i);
    },
    dMCPH: function (v, N) {
      return v === N;
    },
    kGMIU: "RceiE",
    ofrOD: "fmNQL",
    GWorc: function (v, N) {
      return v - N;
    },
    KhJUD: function (v, N) {
      return v !== N;
    },
    AdqRX: "sRgdR",
    gMKIO: function (v, N) {
      return v === N;
    },
    QSKFN: "HBcoq",
    Ywien: "bjqcapp",
    GuOyD: function (v, N) {
      return v + N;
    }
  };
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    {
      const N = $request.body;
      let f = bjqcuserck - 1;
      if (bjqcapp[f]) {
        bjqcapp[f].token_body = N;
      } else {
        {
          const n = {
            token_body: N
          };
          bjqcapp[f] = n;
        }
      }
      $.setdata(JSON.stringify(bjqcapp, null, 2), "bjqcapp");
      $.msg($.name, "快音账号" + (f + 1) + "Token获取成功！🎉");
    }
  }
}
async function userInfo(C, U) {
  const N = "https://hb2.hbdtxt.com/api/user/index";
  let f = "api_type=h5&uid=" + U;
  await getReqObject(N, f, C);
  await httpRequest("post", requestObjects[C], printCaller());
  let n = httpResult;
  if (n != null && n.code == 1) {
    {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + n.userinfo.nickname);
      bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + n.userinfo.nickname + "\n";
    }
  } else {
    {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + n.msg);
      bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + n.msg + "\n";
    }
  }
}
async function videoList(C, U) {
  const v = {
    rXXfp: function (K, t) {
      return K(t);
    },
    Uknyr: function (K) {
      return K();
    },
    pXykR: "application/json",
    CtrAq: function (K, t, z, Q) {
      return K(t, z, Q);
    },
    jjlgw: "get",
    NIChR: function (K) {
      return K();
    },
    mNDbc: function (K, t) {
      return K != t;
    },
    xdoxD: function (K, t) {
      return K == t;
    },
    mXOWv: function (K, t) {
      return K === t;
    },
    inThW: "phnzp",
    dTRJB: "opkhq",
    ZiToi: function (K, t) {
      return K < t;
    },
    QySdH: function (K, t) {
      return K !== t;
    },
    UQljW: "EUKOv",
    oQGqR: "QAQWK",
    ztNqR: function (K, t, z) {
      return K(t, z);
    },
    lRMQh: function (K, t) {
      return K !== t;
    },
    DVjym: "qPwjz",
    eOKmF: "TfyMS",
    hWpUL: function (K, t) {
      return K < t;
    },
    tcYRo: function (K, t) {
      return K + t;
    },
    LrBrZ: function (K, t) {
      return K + t;
    },
    xelFU: function (K, t) {
      return K + t;
    },
    ggNqN: function (K, t) {
      return K + t;
    }
  };
  const N = "https://hapi.baojun.net/base/community/post/postList?postTypeId=1&postClassifyId=61&publishSmallProgram=2&pageNo=" + U + "&pageSize=20";
  let f = "";
  await getReqObject(N, f, C);
  await httpRequest("get", requestObjects[C], printCaller());
  let n = httpResult;
  if (n != null && n.result == true) {
    {
      let t = n.data;
      for (let z = 0; z < t.length; z++) {
        {
          let Q = t[z];
          await videoStatus(C, Q.postId);
        }
      }
    }
  } else {
    {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 视频列表=> " + n.msg);
      bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 视频列表=> " + n.msg + "\n";
      accountErrors[C] = true;
    }
  }
}
async function getReward(C, U) {
  const v = {
    ECHyt: function (K, t) {
      return K < t;
    },
    xlVub: function (K, t) {
      return K(t);
    },
    eIzrL: ".$1",
    XLUFo: function (K, t) {
      return K === t;
    },
    opojZ: function (K, t, z, m) {
      return K(t, z, m);
    },
    ftUrF: function (K, t, z, m) {
      return K(t, z, m);
    },
    ydJDS: "post",
    nqQkU: function (K) {
      return K();
    },
    fnDHA: function (K, t) {
      return K != t;
    },
    hfZzK: function (K, t) {
      return K == t;
    },
    BJNRM: function (K, t) {
      return K !== t;
    },
    MhvxR: "PjBnD",
    oiUmv: "AuZeP",
    JlIEz: "Ffckd",
    ysrsW: function (K, t) {
      return K < t;
    },
    xfbyq: function (K, t) {
      return K + t;
    },
    DUwdZ: function (K, t) {
      return K + t;
    },
    kLJWM: function (K, t) {
      return K + t;
    },
    YflNr: function (K, t) {
      return K < t;
    },
    LGaSW: "YWnbD",
    ABXbq: function (K, t) {
      return K < t;
    },
    DNNQD: function (K, t) {
      return K + t;
    },
    QTGHI: function (K, t) {
      return K + t;
    },
    euynb: function (K, t) {
      return K + t;
    },
    xjowW: function (K, t) {
      return K + t;
    },
    HYBBM: "YXpln",
    FjUzP: "wQXHl",
    YZOYK: function (K, t) {
      return K + t;
    },
    cKqlz: function (K, t) {
      return K + t;
    },
    uBdru: function (K, t) {
      return K + t;
    },
    NEEpK: function (K, t) {
      return K + t;
    }
  };
  const N = "https://hapi.baojun.net/base/activity/fission/lookVideo";
  let f = "{\"postId\":" + U + "}";
  await getReqObject(N, f, C);
  await httpRequest("post", requestObjects[C], printCaller());
  let n = httpResult;
  if (n != null && n.result == true) {
    {
      if (n.data == true) {
        $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 看视频" + U + "=> 成功获得1毛钱");
        bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 看视频" + U + "=> 成功获得1毛钱\n";
      } else {
        {
          $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 看视频" + U + "=> 获取奖励失败");
          bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 看视频" + U + "=> 获取奖励失败\n";
        }
      }
    }
  } else {
    {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 看视频" + U + "=> 失败");
      bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 看视频" + U + "=> 失败\n";
    }
  }
}
async function videoStatus(C, U) {
  const N = "https://hapi.baojun.net/base/activity/fission/getFissionReceiveStatus?postId=" + U;
  let f = "";
  await getReqObject(N, f, C);
  await httpRequest("get", requestObjects[C], printCaller());
  let n = httpResult;
  if (n != null && n.result == true) {
    {
      n.data.status == true && (await getReward(C, U), await $.wait(randomNum(10000, 15000)));
    }
  } else {
    {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + n.msg);
      bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + n.msg + "\n";
    }
  }
}
async function accountInfo(C) {
  const v = "https://hapi.baojun.net/base/account/pocket/draw/info";
  let N = "";
  await getReqObject(v, N, C);
  await httpRequest("get", requestObjects[C], printCaller());
  let f = httpResult;
  if (f != null && f.result == true) {
    f.data.noDrawMoney >= 30 && (await draw(C));
  } else {
    {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 账号信息=> " + f.msg);
      bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 账号信息=> " + f.msg + "\n";
    }
  }
}
async function draw(C) {
  const v = "https://hapi.baojun.net/base/account/pocket/money/draw";
  let N = "{}";
  await getReqObject(v, N, C);
  await httpRequest("post", requestObjects[C], printCaller());
  let f = httpResult;
  if (f != null && f.result == true) {
    {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 提现结果=> " + f.errorMessage);
      bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 提现结果=> " + f.errorMessage + "\n";
    }
  } else {
    {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 提现结果=> " + f.errorMessage);
      bjqclogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 提现结果=> " + f.errorMessage + "\n";
    }
  }
}
function getScriptAuth(C, U, v) {
  const N = {
    ARovE: function (f, i) {
      return f(i);
    },
    WNiEb: function (f, i) {
      return f(i);
    },
    IROwn: function (f, i) {
      return f === i;
    },
    tYXbO: "DIMFj",
    lznvS: "eNGhU",
    sarFc: function (f, i) {
      return f != i;
    },
    NAOpx: function (f, i) {
      return f > i;
    },
    tZtqf: function (f, i) {
      return f !== i;
    },
    omOMO: "UahET",
    gCKdw: "JbULh",
    rOISB: function (f, i) {
      return f === i;
    },
    Bvfox: "VKkeF",
    EFQMV: "NTjNH",
    frJrP: "1|10|0|12|8|3|14|9|5|13|11|2|6|4|7",
    tnntb: function (f, i) {
      return f !== i;
    },
    atMnN: "DyndL",
    wBaYi: function (f, i) {
      return f !== i;
    },
    mzeCY: "FTQNO",
    qsSgW: "请求服务器接口出现错误，请检查网络连接情况",
    vCmyU: function (f) {
      return f();
    },
    WzeLl: function (f, i) {
      return f >>> i;
    },
    fNhte: function (f, i) {
      return f(i);
    },
    hTizv: function (f, i) {
      return f(i);
    },
    YzviI: function (f, i) {
      return f / i;
    },
    iTIVG: function (f, i) {
      return f - i;
    },
    VMPAO: function (f, i) {
      return f !== i;
    },
    rGDxW: "zxkOY",
    otVuo: "brqod",
    VbwHj: "application/json"
  };
  return new Promise((f, i) => {
    const n = {
      eTFLI: function (K, t) {
        return K(t);
      },
      LHlTp: function (K, t) {
        return K(t);
      },
      FsVbC: function (K, t) {
        return K / t;
      },
      nOiMI: function (K, t) {
        return K - t;
      }
    };
    {
      const K = apiHost + "/script/permissions/lastest";
      const z = {
        appName: C,
        userId: U,
        activityCode: v,
        version: version
      };
      const m = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const Q = {
        url: K,
        headers: m,
        body: JSON.stringify(z)
      };
      $.post(Q, async (q, D, u) => {
        {
          if (u && u != null && u.replace(/\"/g, "").length > 50) {
            {
              const M = u.replace(/\"/g, "").slice(34);
              const k = new Base64();
              result = JSON.parse(k.decode(M));
              try {
                {
                  newest_version = result.version;
                  userAuth = result.userAuth;
                  scriptAuth = result.scriptAuth;
                  runAuth = result.runAuth;
                  systemNotify = result.notify;
                  vipAuth = result.vipAuth;
                  isCharge = result.isCharge;
                  multiAccount = result.runAcounts;
                  buyCount = result.buyCount;
                  runedCounts = result.runedCounts;
                  runTotalCounts = result.runTotalCounts;
                  userRank = result.userRank;
                  invicode = result.invicate;
                  numbers = result.accountNumbers;
                  vipDate = result.vipDate;
                }
              } catch (B) {
                {
                  $.log(B);
                }
              }
            }
          } else {
            $.log("请求服务器接口出现错误，请检查网络连接情况");
          }
          f();
        }
      });
    }
  });
}
function runComplete(C, U) {
  return new Promise((N, f) => {
    const i = {
      vWuBw: function (n) {
        return n();
      },
      TlaVG: "application/json",
      RvEdX: function (n, K) {
        return n !== K;
      },
      WHUKj: "PdGDE",
      KQhDe: function (n) {
        return n();
      }
    };
    {
      const n = apiHost + "/script/run/add";
      const t = {
        appName: C,
        userId: U,
        activityCode: activeCode,
        version: version
      };
      const z = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const m = {
        url: n,
        headers: z,
        body: JSON.stringify(t)
      };
      $.post(m, async (Q, q, D) => {
        {
          N();
        }
      });
    }
  });
}
function checkAddress(C, U) {
  const v = {
    SAWGm: function (N, f, i, n) {
      return N(f, i, n);
    },
    SDYzD: function (N, f) {
      return N !== f;
    },
    tqRah: "bhsFS",
    iyVGH: "teTkH",
    jUwrZ: function (N, f) {
      return N(f);
    },
    eMLcg: function (N, f) {
      return N === f;
    },
    pztzJ: "gTclz",
    yPZub: "WDxJC",
    uZADO: function (N, f) {
      return N(f);
    },
    OcHgh: function (N, f) {
      return N === f;
    },
    CwLhe: "UOCmY",
    SfiAh: function (N, f) {
      return N(f);
    },
    AAyEG: function (N, f) {
      return N === f;
    },
    wchWX: "UnJjQ",
    KaJfq: "QclcB",
    vOFgS: function (N, f) {
      return N(f);
    },
    WFupr: function (N, f) {
      return N !== f;
    },
    ynrQt: "pexit",
    NRRvf: "请求超时",
    tuAOP: "function *\\( *\\)",
    AWNtc: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    LdKsv: "init",
    DmNwn: function (N, f) {
      return N + f;
    },
    tTbjX: "chain",
    supKp: "input",
    OiGCk: function (N) {
      return N();
    },
    AOuan: function (N, f, i) {
      return N(f, i);
    },
    TSDym: function (N, f) {
      return N < f;
    },
    XnvaD: function (N, f) {
      return N + f;
    },
    ONenb: function (N, f) {
      return N === f;
    },
    cSngX: "CXTaG",
    RttjE: "OfPSA",
    Rlenx: function (N, f) {
      return N === f;
    },
    UMaAG: "TJrNO",
    MNVPF: "UAnjm",
    gZsti: "error",
    cmzdN: "timeout"
  };
  return new Promise((N, f) => {
    const i = {
      BxrVv: "function *\\( *\\)",
      xTKYL: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
      tsXzA: function (n, K) {
        return n(K);
      },
      jHyWS: "init",
      qyNxn: function (n, K) {
        return n + K;
      },
      wawXQ: "chain",
      BDMyk: "input",
      LnvgR: function (n) {
        return n();
      },
      CsuCU: function (n, K, t) {
        return n(K, t);
      },
      xiwfB: function (n, K) {
        return n < K;
      },
      MPMUW: function (n, K) {
        return n + K;
      },
      OfnuZ: function (n, K) {
        return n + K;
      },
      CCRxF: function (n, K) {
        return n === K;
      },
      nMXyB: "CXTaG",
      XfImw: "OfPSA",
      yMBUk: function (n, K) {
        return n(K);
      }
    };
    {
      const K = setTimeout(() => {
        {
          N(false);
        }
      }, U);
      const t = http.get(C, z => {
        {
          clearTimeout(K);
          z.statusCode === 404 ? N(true) : N(false);
        }
      });
      t.on("error", z => {
        {
          clearTimeout(K);
          N(false);
        }
      });
      t.on("timeout", () => {
        {
          t.abort();
          f(new Error("请求超时"));
        }
      });
    }
  });
}
async function fetchRequest(C, U = 3000) {
  const v = {
    lBJqJ: function (N, f) {
      return N !== f;
    },
    LkiJA: "undefined",
    WkkmA: function (N, f) {
      return N || f;
    },
    pmRWl: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    AavPq: function (N, f) {
      return N < f;
    },
    WuAyM: function (N, f) {
      return N * f;
    },
    vKRaZ: function (N, f) {
      return N + f;
    },
    UUkWa: "wkBAX",
    eZLWm: function (N, f) {
      return N(f);
    },
    KfJNv: "6|2|1|4|7|5|0|3",
    IGQIu: function (N, f) {
      return N < f;
    },
    zjeQV: "3|9|2|5|8|6|0|7|1|4",
    VNCBY: function (N, f) {
      return N | f;
    },
    maCgP: function (N, f) {
      return N << f;
    },
    GsIbU: function (N, f) {
      return N & f;
    },
    mKmOZ: function (N, f) {
      return N != f;
    },
    kPFAE: function (N, f) {
      return N << f;
    },
    PlqDP: function (N, f) {
      return N >> f;
    },
    PVSwW: function (N, f) {
      return N & f;
    },
    NPMkt: function (N, f) {
      return N >> f;
    },
    xQfPK: function (N, f) {
      return N - f;
    },
    xNmph: function (N, f) {
      return N % f;
    },
    Dssvp: function (N, f) {
      return N >> f;
    },
    XzfEY: function (N, f) {
      return N / f;
    },
    gNNOL: function (N, f) {
      return N === f;
    },
    dRtfu: "KBCgP",
    NovlO: function (N, f) {
      return N == f;
    },
    vEuoh: "VzTCl",
    XpNzD: function (N, f) {
      return N !== f;
    },
    FBGto: "WfXvE",
    ObpXq: function (N, f) {
      return N === f;
    },
    BnnUg: "ntPtQ",
    EkSLV: function (N, f) {
      return N + f;
    },
    vJmlo: "/docs",
    cpfqt: function (N, f, i) {
      return N(f, i);
    }
  };
  return new Promise((N, f) => {
    {
      const n = {
        url: C + "/docs"
      };
      setTimeout(() => {
        {
          N(false);
        }
      }, U);
      $.get(n, async (K, t, z) => {
        const m = {
          WWaiI: "6|2|1|4|7|5|0|3",
          vbfeM: function (Q, q) {
            return Q(q);
          },
          vqiBb: function (Q, q) {
            return Q < q;
          },
          AupxS: "3|9|2|5|8|6|0|7|1|4",
          lBpMx: function (Q, q) {
            return Q | q;
          },
          jRdcC: function (Q, q) {
            return Q << q;
          },
          cwTTK: function (Q, q) {
            return Q & q;
          },
          HAoAJ: function (Q, q) {
            return Q != q;
          },
          nACfO: function (Q, q) {
            return Q + q;
          },
          ptWgs: function (Q, q) {
            return Q << q;
          },
          woXBZ: function (Q, q) {
            return Q & q;
          },
          pUxda: function (Q, q) {
            return Q >> q;
          },
          ICWCw: function (Q, q) {
            return Q | q;
          },
          TlelI: function (Q, q) {
            return Q << q;
          },
          kptVb: function (Q, q) {
            return Q >> q;
          },
          iiRFl: function (Q, q) {
            return Q & q;
          },
          FJcbO: function (Q, q) {
            return Q >> q;
          },
          FnnWX: function (Q, q) {
            return Q + q;
          },
          ggZWE: function (Q, q) {
            return Q * q;
          },
          lYySl: function (Q, q) {
            return Q - q;
          },
          BqUiA: function (Q, q) {
            return Q % q;
          },
          ixiOo: function (Q, q) {
            return Q >> q;
          },
          qGpYN: function (Q, q) {
            return Q >> q;
          },
          doDXy: function (Q, q) {
            return Q - q;
          },
          eScdX: function (Q, q) {
            return Q % q;
          },
          nQuNP: function (Q, q) {
            return Q / q;
          }
        };
        {
          if (t.status == 401) {
            {
              N(true);
            }
          } else {
            N(false);
          }
        }
      });
    }
  });
}
async function httpClientRequest(C, U = 3000) {
  return new Promise((N, f) => {
    const i = {
      VvvLO: function (n, K, t) {
        return n(K, t);
      },
      IPvGQ: function (n, K, t, z) {
        return n(K, t, z);
      },
      paXjp: function (n, K, t) {
        return n(K, t);
      },
      AwAkW: function (n, K) {
        return n !== K;
      },
      sDAYv: "RIasD",
      fLoev: function (n, K) {
        return n(K);
      },
      QJEQz: function (n, K) {
        return n < K;
      },
      FDxlp: function (n, K) {
        return n + K;
      },
      MiOfW: function (n, K) {
        return n + K;
      },
      aRBql: function (n, K) {
        return n < K;
      },
      QEZuX: function (n, K) {
        return n + K;
      },
      hJbYa: function (n, K) {
        return n + K;
      },
      jfIJI: function (n, K) {
        return n + K;
      }
    };
    {
      const K = {
        url: C + "/"
      };
      setTimeout(() => {
        {
          N(false);
        }
      }, U);
      $httpClient.get(K, async (t, z, m) => {
        const Q = {
          PONKH: function (q, D, u, R) {
            return q(D, u, R);
          }
        };
        {
          if (m == "{\"detail\":\"Not Found\"}") {
            {
              N(true);
            }
          } else {
            N(false);
          }
        }
      });
    }
  });
}
async function redisGet(C, U, v) {
  return new Promise((f, n) => {
    {
      const z = apiHost + "/redis/hash/get/" + U + "/" + v;
      const m = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const q = {
        url: z,
        headers: m
      };
      $.get(q, async (D, u, R) => {
        {
          const d = R.replace(/\"/g, "");
          answerTexts[C] = d;
          f();
        }
      });
    }
  });
}
function redisSet(C, U, v) {
  const N = {
    NpMzh: function (f, i) {
      return f ^ i;
    },
    fGqUf: function (f, i) {
      return f | i;
    },
    aASOF: function (f, i) {
      return f !== i;
    },
    GKmyi: "hzYbs",
    BIJbN: "xMDnA",
    zvZqJ: function (f) {
      return f();
    },
    CKPoA: "wxsxc",
    DfVZp: "pcQcQ",
    RQRGH: "application/json"
  };
  return new Promise((f, i) => {
    {
      const n = apiHost + "/redis/hash/set";
      const t = {
        key: C,
        hashKey: U,
        hashValue: v
      };
      const z = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const m = {
        url: n,
        headers: z,
        body: JSON.stringify(t)
      };
      $.post(m, async (Q, q, D) => {
        {
          const R = D.replace(/\"/g, "");
          f();
        }
      });
    }
  });
}
function redisPop(C) {
  return new Promise((v, N) => {
    const f = {
      ROYvO: function (i, n) {
        return i ^ n;
      },
      niimZ: function (i, n) {
        return i ^ n;
      },
      xTuBZ: function (i, n, K) {
        return i(n, K);
      },
      jFlZH: function (i, n, K) {
        return i(n, K);
      }
    };
    {
      const n = apiHost + "/redis/set/pop/" + C;
      const K = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const z = {
        url: n,
        headers: K
      };
      $.get(z, async (m, Q, q) => {
        {
          const u = q.replace(/\"/g, "");
          popCookie = u;
          v();
        }
      });
    }
  });
}
async function getReqObject(v, N, f) {
  let K = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.55(0x18003729) NetType/WIFI Language/zh_CN";
  bjqcapp[f].ua && bjqcapp[f].ua != "" && (K = bjqcapp[f].ua);
  let t = getHostname(v);
  let z = ts13();
  let m = "4857289347289375";
  await selectChannel(f, bjqcapp[f].token + "@" + z);
  let Q = requestSigns[f];
  const q = {
    "Content-Type": "application/json",
    "User-Agent": K,
    accessToken: bjqcapp[f].token,
    oauthConsumerKey: "20200113181123916714",
    platformNo: "Wx_mini",
    signatrue: Q,
    timestamp: z,
    nonce: m,
    Host: t
  };
  let u = {
    url: v,
    headers: q
  };
  N && (u.body = N);
  requestObjects[f] = u;
  return u;
}
function getReqObject_(v, N, f) {
  let K = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (bjqcapp[f].ua && bjqcapp[f].ua != "") {
    {
      K = bjqcapp[f].ua;
    }
  }
  let t = getHostname(v);
  const z = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": K,
    Authorization: bjqcapp[f].auth,
    Host: t
  };
  let Q = {
    url: v,
    headers: z
  };
  if (N) {
    {
      Q.body = N;
    }
  }
  requestObjects[f] = Q;
  return Q;
}
async function httpRequest(C, U, v) {
  const N = {
    bNYSI: "Content-Type",
    OsvkL: "Content-Length",
    dABuJ: "open-url",
    CfZgn: "media-url",
    TOwYQ: function (f, i) {
      return f === i;
    },
    mNGrP: "cBaxj",
    cHTZo: function (f, i) {
      return f !== i;
    },
    lPkHp: "ZASRf",
    mGmcC: "AwZkV",
    YPOJH: "VZShC",
    PMLrn: "mZSgB",
    GFPix: function (f, i) {
      return f !== i;
    },
    lQJEx: "IavcL",
    egrTW: "ljDyr",
    GuIWD: function (f, i) {
      return f(i);
    },
    WsJEo: function (f, i) {
      return f === i;
    },
    BDPez: "ADqPd",
    zucZs: function (f, i) {
      return f == i;
    },
    DlDzF: function (f, i) {
      return f === i;
    },
    GTmXn: "YoiXS",
    ZvfwR: function (f, i) {
      return f === i;
    },
    AcgwE: "QsWUF",
    CTZab: function (f, i) {
      return f !== i;
    },
    WgUEA: "OBudA",
    EbDBD: function (f, i) {
      return f === i;
    },
    HIPex: "tnQIu",
    mHuef: function (f, i) {
      return f(i);
    },
    MHwXg: function (f, i) {
      return f + i;
    },
    jyHbd: function (f, i) {
      return f >= i;
    },
    gsGif: function (f, i) {
      return f - i;
    },
    cacuw: "...",
    ozrRc: function (f, i) {
      return f < i;
    },
    BnNrq: function (f, i) {
      return f < i;
    },
    Gpmdy: function (f, i) {
      return f + i;
    },
    eNmCm: function (f, i) {
      return f + i;
    },
    DltLs: function (f, i) {
      return f ^ i;
    },
    SbXeQ: function (f, i) {
      return f & i;
    },
    GgFSq: function (f, i) {
      return f & i;
    },
    LmcJM: function (f, i) {
      return f(i);
    },
    IygZs: function (f, i) {
      return f !== i;
    },
    XQUKE: "ZUHyR"
  };
  httpResult = null;
  return new Promise(f => {
    const i = {
      OayUT: function (n, K) {
        return n + K;
      },
      pOSJs: function (n, K) {
        return n >= K;
      },
      ULcqx: function (n, K) {
        return n + K;
      },
      zlxcj: function (n, K) {
        return n - K;
      },
      XfsBb: "...",
      VqSzk: function (n, K) {
        return n < K;
      },
      SnLWp: function (n, K) {
        return n < K;
      },
      vPsZo: function (n, K) {
        return n + K;
      },
      HJaGN: function (n, K) {
        return n + K;
      },
      BirAs: function (n, K) {
        return n + K;
      },
      rjzuU: function (n, K) {
        return n ^ K;
      },
      uYeIT: function (n, K) {
        return n & K;
      },
      iKLjp: function (n, K) {
        return n & K;
      },
      jeEnG: function (n, K) {
        return n(K);
      }
    };
    {
      $[C](U, async (K, t, z) => {
        const Q = {
          szCrL: "Content-Type",
          zVBWJ: "Content-Length",
          tKJYN: "open-url",
          aJjoK: "media-url"
        };
        {
          try {
            {
              if (K) {
                $.log(v + ": " + C + "请求失败");
                $.log(JSON.stringify(K));
                $.logErr(K);
              } else {
                {
                  if (safeGet(z)) {
                    httpResult = JSON.parse(z);
                    debug == 1 && $.log(httpResult);
                  } else {
                    {
                      const R = new URL(U.url);
                      $.log(R.pathname + "发起" + C + "请求时，出现错误，请处理");
                    }
                  }
                }
              }
            }
          } catch (b) {
            $.logErr(b, t);
          } finally {
            {
              f(httpResult);
            }
          }
        }
      });
    }
  });
}
async function selectChannel(C, U) {
  const v = {
    KYftZ: function (N, f) {
      return N + f;
    },
    uBTVK: function (N, f) {
      return N - f;
    },
    EKpxE: "...",
    uCRla: function (N, f) {
      return N == f;
    },
    kXIUw: function (N, f) {
      return N === f;
    },
    WbUIO: "rkUAL",
    dWTLy: function (N, f, n) {
      return N(f, n);
    },
    OyDzD: "fBsCU"
  };
  if (channels_status[C] == 0) {
    {
      await getSign_(C, U);
    }
  } else {
    {
      await getSign(C, U);
    }
  }
}
function getSign_(C, U) {
  const v = {
    dsaPA: function (N, f) {
      return N !== f;
    },
    HDHce: "udvmU",
    dLyLI: "AnNHZ",
    Ayzza: "utf8",
    rUxJe: "message",
    TppTZ: function (N, f) {
      return N(f);
    },
    Nqypr: function (N, f) {
      return N && f;
    },
    YNlWp: function (N, f, n, K) {
      return N(f, n, K);
    },
    kRXRx: "4|7|1|5|10|0|2|8|9|6|3",
    LyoeT: function (N, f, n) {
      return N(f, n);
    },
    IaSUC: function (N, f, n, K) {
      return N(f, n, K);
    },
    ptNGp: function (N, f, n) {
      return N(f, n);
    },
    qVskf: function (N, f) {
      return N < f;
    },
    Pcxxl: function (N, f) {
      return N + f;
    },
    PoezZ: function (N, f, n) {
      return N(f, n);
    },
    quvaO: function (N, f, n) {
      return N(f, n);
    },
    BcHWJ: function (N, f) {
      return N - f;
    },
    IBDYO: function (N, f) {
      return N - f;
    },
    Iwxuy: function (N, f, n) {
      return N(f, n);
    },
    cwOIW: function (N, f, n) {
      return N(f, n);
    },
    Cximz: function (N, f, n, K, t) {
      return N(f, n, K, t);
    },
    XtXZg: function (N, f) {
      return N === f;
    },
    clFzA: "ysTKF",
    fiSJf: "Hetqc",
    aAnpx: "TKnpw",
    eXbTj: "TPQzf",
    nTWij: function (N, f) {
      return N !== f;
    },
    LwfQD: "undefined",
    uhRHj: "nwmDO",
    HfMUw: "eiUoO",
    rCyJc: function (N, f) {
      return N !== f;
    },
    tgMbJ: "FawOt",
    jEbEt: "otgUZ",
    aIMHj: "EApkA",
    kitoF: function (N, f) {
      return N(f);
    }
  };
  return new Promise((N, f) => {
    {
      function t(z) {
        {
          let m = z.toString("utf8");
          requestSigns[C] = m;
          wss[C].removeListener("message", t);
          N(m);
        }
      }
      wss[C].on("message", t);
      if (wss[C].readyState === 1) {
        {
          const z = {
            method: appName,
            params: {}
          };
          z.params.content = U;
          z.params.appName = appName;
          z.params.uuid = userId;
          wss[C].send(JSON.stringify(z), m => {
            {
              if (m) {
                {
                  f(m);
                }
              }
            }
          });
        }
      } else {
        N(getSign(C, U));
        wss[C].removeListener("message", t);
      }
    }
  });
}
function getSign(C, U) {
  const v = {
    KZiTW: function (N, f) {
      return N(f);
    },
    FhADO: function (N, f) {
      return N == f;
    },
    nYCia: "object",
    lowiU: function (N, f) {
      return N !== f;
    },
    OVqMe: "xmNgb",
    uhMzb: "kcHFP",
    rczBj: function (N) {
      return N();
    },
    KOAXl: function (N, f) {
      return N === f;
    },
    imRyU: "sOBWh",
    TzolH: "GGIDq",
    aKvfe: "application/json"
  };
  return new Promise((N, f) => {
    {
      const t = apiHost + "/sign/bjqc";
      const m = {
        content: U,
        appName: appName,
        uuid: userId
      };
      const Q = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const q = {
        url: t,
        headers: Q,
        body: JSON.stringify(m)
      };
      $.post(q, async (D, u, R) => {
        {
          const d = R.replace(/\"/g, "");
          requestSigns[C] = d;
          N();
        }
      });
    }
  });
}
function sortUrlParams(C, U, v) {
  const f = url2obj(C);
  U.forEach(K => {
    delete f[K];
  });
  Object.assign(f, v);
  const i = Object.keys(f).sort();
  const n = i.map(K => K + "=" + f[K]).join("&");
  return n;
}
function url2obj(U) {
  U = U.replace(/\"/g, "");
  var f;
  var n = {};
  var K = U.slice(U.indexOf("?") + 1).split("&");
  for (var t = 0; t < K.length; t++) {
    f = K[t].split("=");
    n[f[0]] = f[1];
  }
  return n;
}
function convertStringToJson(U) {
  const f = U.replace(/[{} ]/g, "");
  const i = f.split(",");
  const n = {};
  i.forEach(K => {
    const t = {
      bJApO: function (z, m) {
        return z == m;
      }
    };
    {
      const [m, Q] = K.split("=");
      n[m] = Q;
    }
  });
  return n;
}
function getHostname(U) {
  const N = {
    NHZqY: function (t, z) {
      return t + z;
    },
    XJdFx: function (t, z) {
      return t > z;
    },
    jyQDK: function (t, z) {
      return t !== z;
    },
    NbLfK: "xywnS",
    YnHaL: function (t, z) {
      return t === z;
    },
    otyGt: "fOOqz",
    ixCfx: "ZoKKp"
  };
  let f = U.substr(U.indexOf("//") + 2);
  let i = f.substr(0, f.indexOf("/"));
  let n = "";
  let K = i.indexOf(":");
  if (K > 0) {
    {
      n = i.substr(0, K);
    }
  } else {
    {
      n = i;
    }
  }
  return n;
}
function calculateTimeDifference(U, v) {
  var z = new Date(U);
  var t = new Date(v);
  var K = t - z;
  var m = Math.floor(K / 1000);
  return m;
}
function cutString(U, v) {
  const N;
  const f = {
    gIYDU: "open-url",
    XAgrO: "media-url",
    cnDmN: function (z, m) {
      return z & m;
    },
    bwmTi: function (z, m) {
      return z >>> m;
    },
    jaCLj: function (z, m) {
      return z * m;
    },
    wCgRY: function (z, m) {
      return z ^ m;
    },
    VVwGh: function (z, m) {
      return z < m;
    },
    kOZSL: function (z, m) {
      return z + m;
    },
    ZaErw: function (z, m) {
      return z + m;
    },
    jJsvg: function (z, m) {
      return z + m;
    },
    qAnNc: function (z, m) {
      return z + m;
    },
    HkBrl: function (z, m) {
      return z + m;
    },
    ylTet: function (z, m) {
      return z <= m;
    },
    HGHDP: function (z, m) {
      return z * m;
    },
    jdlfr: function (z, m) {
      return z === m;
    },
    WgHQz: "MfILR",
    hzOUb: function (z, m) {
      return z < m;
    },
    RGfhY: "lpnhD",
    BLKpB: "ZrZKg",
    sAnIo: function (z, m) {
      return z > m;
    },
    miETu: "CBKeP",
    iwxGQ: "ebdcR",
    cUNmn: function (z, m) {
      return z >= m;
    },
    Mdxsa: function (z, m) {
      return z !== m;
    },
    XqveX: "usBXM",
    degTZ: function (z, m) {
      return z - m;
    },
    wybSh: "...",
    FtxXI: "FCpcL",
    BBltC: "dZqao",
    oByam: function (z, m) {
      return z === m;
    },
    yQnhn: "gmVXt",
    sJPkR: function (z, m) {
      return z + m;
    },
    JJaOm: function (z, m) {
      return z - m;
    }
  };
  if (U.length * 2 <= v) {
    {
      return U;
    }
  }
  var n = 0;
  var K = "";
  for (var t = 0; t < U.length; t++) {
    {
      K = K + U.charAt(t);
      if (U.charCodeAt(t) > 128) {
        {
          n = n + 2;
          if (n >= v) {
            return K.substring(0, K.length - 1) + "...";
          }
        }
      } else {
        {
          n = n + 1;
          if (n >= v) {
            {
              return K.substring(0, K.length - 2) + "...";
            }
          }
        }
      }
    }
  }
  return K;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(U) {
  try {
    {
      if (typeof JSON.parse(U) == "object") {
        return true;
      }
    }
  } catch (n) {
    {
      console.log(n);
      console.log("服务器访问数据为空，请检查自身设备网络情况");
      return false;
    }
  }
}
function jsonToUrl(C) {
  var v = Object.keys(C).map(function (N) {
    return encodeURIComponent(N) + "=" + encodeURIComponent(C[N]);
  }).join("&");
  return v;
}
function compileStr(C) {
  var v = String.fromCharCode(C.charCodeAt(0) + C.length);
  for (var N = 1; N < C.length; N++) {
    {
      v += String.fromCharCode(C.charCodeAt(N) + C.charCodeAt(N - 1));
    }
  }
  return escape(v);
}
function uncompileStr(C) {
  C = unescape(C);
  var v = String.fromCharCode(C.charCodeAt(0) - C.length);
  for (var N = 1; N < C.length; N++) {
    v += String.fromCharCode(C.charCodeAt(N) - v.charCodeAt(N - 1));
  }
  return v;
}
function randomNum(C, U) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * C + 1);
      break;
    case 2:
      return parseInt(Math.random() * (U - C + 1) + C);
      break;
    default:
      return 0;
      break;
  }
}
function randomMac() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    {
      return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
    }
  });
}
function guid() {
  function U() {
    {
      return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
    }
  }
  return U() + U() + "-" + U() + "-" + U() + "-" + U() + "-" + U() + U() + U();
}
function phone_num(C) {
  if (C.length == 11) {
    {
      let v = C.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
      return v;
    }
  } else {
    {
      return C;
    }
  }
}
function txt_api(C) {
  return new Promise((v, N) => {
    {
      const K = "https://v1.hitokoto.cn/?c=e";
      const t = {
        accept: "application/json"
      };
      const m = {
        url: K,
        headers: t
      };
      $.get(m, async (Q, q, D) => {
        {
          let R = JSON.parse(D);
          let d = R.hitokoto;
          contents[C] = d + " " + d;
          v();
        }
      });
    }
  });
}
function getTime_8() {
  return new Promise((U, v) => {
    {
      const N = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp";
      const i = {
        url: N
      };
      $.get(i, async (n, K, t) => {
        {
          U(t);
        }
      });
    }
  });
}
function ts13() {
  return Math.round(new Date().getTime()).toString();
}
function ts10() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function message() {
  const v = {
    fbKSF: function (N, f) {
      return N == f;
    },
    XBIaw: function (N, f) {
      return N === f;
    },
    elbrB: "eQwTr",
    YifyR: "tYWRP"
  };
  if (tz == 1) {
    {
      $.msg($.name, "", $.message);
    }
  }
}
async function sendMsg(C) {
  const U = {
    lBRoA: function (v, N) {
      return v - N;
    },
    AXUdj: "bjqcapp",
    KoFaX: function (v, N) {
      return v + N;
    },
    jHSYJ: function (v, N) {
      return v(N);
    },
    WCQjw: function (v, N, f, i) {
      return v(N, f, i);
    },
    Mafiy: function (v, N) {
      return v == N;
    },
    SmyYb: function (v, N) {
      return v == N;
    },
    GcAyu: function (v, N) {
      return v == N;
    },
    TXrZc: function (v, N) {
      return v === N;
    },
    aAlJq: "YLWfD",
    uJysv: function (v, N) {
      return v !== N;
    },
    rOfEH: "khOoQ",
    dTsGJ: "zLuYt",
    Afezx: "CqRcq",
    zzWRF: "CZmQi",
    meOpt: function (v, N) {
      return v === N;
    },
    KVvEW: "mjrdg",
    DGgeT: "RUiqD",
    UQPlS: function (v, N) {
      return v !== N;
    },
    YMUXs: "TKdPT"
  };
  if (hour == 9 || hour == 12 || hour == 18) {
    {
      if (tz == 1) {
        {
          if ($.isNode()) {
            {
              await notify.sendNotify($.name, C);
            }
          } else {
            {
              $.msg($.name, "", C);
            }
          }
        }
      } else {
        {
          $.log(C);
        }
      }
    }
  }
}
async function wxPush(C, U, v) {
  const N = {
    CFcop: function (f) {
      return f();
    },
    DFMac: function (f, n) {
      return f === n;
    },
    vuDJu: "dxZXA",
    jbFhT: "kpmui",
    TsioR: function (f) {
      return f();
    },
    VXfYI: "application/json",
    MNaDW: function (f, n) {
      return f !== n;
    },
    aHDls: "jOTro",
    XrUbm: "YXflS",
    HVZHl: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
    dDjdW: "快手答题余额通知"
  };
  return new Promise((f, n) => {
    const t = {
      JBVql: "application/json"
    };
    {
      const z = "https://wxpusher.zjiecode.com/api/send/message";
      const Q = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: U,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [v],
        verifyPay: false
      };
      const q = {
        "Content-Type": "application/json"
      };
      const D = {
        url: z,
        headers: q,
        body: JSON.stringify(Q)
      };
      $.post(D, async (u, R, d) => {
        {
          f();
        }
      });
    }
  });
}
function randomString(U, v) {
  v = v || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let n = "";
  for (let K = 0; K < U; K++) {
    {
      let t = Math.floor(Math.random() * v.length);
      n += v.substring(t, t + 1);
    }
  }
  return n;
}
function MD5_Encrypt(U) {
  const Q = {
    KBmmh: function (CY, CB) {
      return CY + CB;
    },
    KnGlE: function (CY, CB) {
      return CY !== CB;
    },
    veZVq: "vUuqd",
    spldI: "GCiKo",
    MbJPh: function (CY, CB) {
      return CY | CB;
    },
    BCAMt: function (CY, CB) {
      return CY << CB;
    },
    mBPHN: function (CY, CB) {
      return CY >>> CB;
    },
    NFoDq: function (CY, CB) {
      return CY - CB;
    },
    ESdby: function (CY, CB) {
      return CY(CB);
    },
    IOIgr: function (CY, CB) {
      return CY !== CB;
    },
    gHzJN: "FHVhE",
    KJCsr: function (CY, CB) {
      return CY & CB;
    },
    jVRUE: function (CY, CB) {
      return CY & CB;
    },
    nBpdJ: function (CY, CB) {
      return CY & CB;
    },
    rlcdl: function (CY, CB) {
      return CY & CB;
    },
    ImdXz: function (CY, CB) {
      return CY & CB;
    },
    HUhNN: function (CY, CB) {
      return CY ^ CB;
    },
    xWqHq: function (CY, CB) {
      return CY ^ CB;
    },
    uNgeJ: function (CY, CB) {
      return CY & CB;
    },
    GTnXs: function (CY, CB) {
      return CY ^ CB;
    },
    ZIICN: function (CY, CB) {
      return CY ^ CB;
    },
    EITSh: function (CY, CB) {
      return CY ^ CB;
    },
    moILt: function (CY, CB) {
      return CY ^ CB;
    },
    LOwNS: function (CY, CB) {
      return CY === CB;
    },
    UWuGg: "VKhxK",
    tDqRN: function (CY, CB) {
      return CY & CB;
    },
    WGskp: function (CY, CB) {
      return CY === CB;
    },
    SIBQo: "WsltW",
    bHfLO: function (CY, CB) {
      return CY | CB;
    },
    Axatw: function (CY, CB) {
      return CY == CB;
    },
    MzSEV: "object",
    AxjCr: function (CY, CB) {
      return CY === CB;
    },
    Iyfhu: "tWcHz",
    vlJBv: function (CY, CB) {
      return CY ^ CB;
    },
    xuXow: function (CY, CB) {
      return CY !== CB;
    },
    yqsJd: "vxUlM",
    KGOGQ: function (CY, CB) {
      return CY * CB;
    },
    FvLXs: function (CY, CB) {
      return CY !== CB;
    },
    NGkPU: "yrkct",
    wdTSF: function (CY, CB, Cg) {
      return CY(CB, Cg);
    },
    KuOSu: function (CY, CB, Cg, CT) {
      return CY(CB, Cg, CT);
    },
    KeFza: function (CY, CB, Cg) {
      return CY(CB, Cg);
    },
    ABxSl: function (CY, CB) {
      return CY | CB;
    },
    jKrKK: function (CY, CB) {
      return CY >> CB;
    },
    nCzWZ: function (CY, CB) {
      return CY | CB;
    },
    CBZID: "XNgoI",
    QhJCn: function (CY, CB, Cg) {
      return CY(CB, Cg);
    },
    jVRYv: function (CY, CB, Cg) {
      return CY(CB, Cg);
    },
    dmnZH: function (CY, CB, Cg) {
      return CY(CB, Cg);
    },
    Aaton: "{\"detail\":\"Not Found\"}",
    OKDRg: function (CY, CB) {
      return CY(CB);
    },
    BJegV: "OGEfN",
    RpUth: "iqSpL",
    WDaCz: function (CY, CB, Cg) {
      return CY(CB, Cg);
    },
    wUWNM: function (CY, CB, Cg) {
      return CY(CB, Cg);
    },
    SiJwZ: function (CY, CB, Cg, CT) {
      return CY(CB, Cg, CT);
    },
    RwFaK: function (CY, CB) {
      return CY < CB;
    },
    zkfuj: function (CY, CB) {
      return CY + CB;
    },
    KutUB: function (CY, CB) {
      return CY + CB;
    },
    NaDxE: function (CY, CB) {
      return CY + CB;
    },
    RPKwA: function (CY, CB) {
      return CY + CB;
    },
    dkttD: "rvtQK",
    diyzu: function (CY, CB, Cg) {
      return CY(CB, Cg);
    },
    ictvu: function (CY, CB, Cg, CT) {
      return CY(CB, Cg, CT);
    },
    EmrUp: function (CY, CB, Cg) {
      return CY(CB, Cg);
    },
    wIGJd: function (CY, CB) {
      return CY === CB;
    },
    evyWE: "slTtn",
    XMHKX: "HWQvl",
    wcpOD: function (CY, CB) {
      return CY / CB;
    },
    VIVVm: function (CY, CB) {
      return CY % CB;
    },
    pxihx: function (CY, CB) {
      return CY + CB;
    },
    cMTvR: function (CY, CB) {
      return CY - CB;
    },
    SGOgK: function (CY, CB) {
      return CY > CB;
    },
    VTwwh: function (CY, CB) {
      return CY - CB;
    },
    ARHMF: function (CY, CB) {
      return CY % CB;
    },
    FplFm: function (CY, CB) {
      return CY | CB;
    },
    EjMLH: function (CY, CB) {
      return CY - CB;
    },
    xgnld: function (CY, CB) {
      return CY % CB;
    },
    EXBSJ: function (CY, CB) {
      return CY * CB;
    },
    AhzpX: function (CY, CB) {
      return CY % CB;
    },
    mSMUD: function (CY, CB) {
      return CY | CB;
    },
    qWlFe: function (CY, CB) {
      return CY << CB;
    },
    yqLbT: function (CY, CB) {
      return CY - CB;
    },
    qYAnR: function (CY, CB) {
      return CY >>> CB;
    },
    UDiSL: function (CY, CB, Cg, CT) {
      return CY(CB, Cg, CT);
    },
    bQhZj: function (CY, CB) {
      return CY === CB;
    },
    WbXWO: "XoiYN",
    xivhY: "iTKpd",
    fZJbg: function (CY, CB) {
      return CY >= CB;
    },
    QTKpy: function (CY, CB) {
      return CY >>> CB;
    },
    LiwWI: function (CY, CB) {
      return CY + CB;
    },
    JiLXn: "nNYnO",
    UMumo: "ONizn",
    biyMI: "ROTGa",
    uHFEK: "qDcFk",
    YyGzD: function (CY, CB) {
      return CY > CB;
    },
    leYgb: function (CY, CB) {
      return CY > CB;
    },
    ygAaw: function (CY, CB) {
      return CY >> CB;
    },
    MHvtz: function (CY, CB) {
      return CY & CB;
    },
    SFOtU: function (CY, CB) {
      return CY | CB;
    },
    xYGaU: function (CY, CB) {
      return CY >> CB;
    },
    yklNm: function (CY, CB) {
      return CY & CB;
    },
    gqPGf: function (CY, CB) {
      return CY >> CB;
    },
    NpgiH: function (CY, CB) {
      return CY(CB);
    },
    davOJ: function (CY, CB) {
      return CY(CB);
    },
    nNskm: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    IRvqv: function (CY, CB) {
      return CY + CB;
    },
    OYjTg: function (CY, CB) {
      return CY + CB;
    },
    RIeSk: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    BQnAK: function (CY, CB) {
      return CY + CB;
    },
    QGTxj: function (CY, CB) {
      return CY + CB;
    },
    yvpVf: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    lJkhW: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    PvGWb: function (CY, CB) {
      return CY + CB;
    },
    fSvUF: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    Xzhvn: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    ptcEw: function (CY, CB) {
      return CY + CB;
    },
    TDUSz: function (CY, CB) {
      return CY + CB;
    },
    JgcPq: function (CY, CB) {
      return CY + CB;
    },
    kbrIt: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    Wpryp: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    VbGca: function (CY, CB) {
      return CY + CB;
    },
    JloWZ: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    fvELm: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    ocbtF: function (CY, CB) {
      return CY + CB;
    },
    scchJ: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    XsIbC: function (CY, CB) {
      return CY + CB;
    },
    yzfvq: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    QDtOY: function (CY, CB) {
      return CY + CB;
    },
    gyraq: function (CY, CB) {
      return CY + CB;
    },
    dkLHU: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    ITVZL: function (CY, CB) {
      return CY + CB;
    },
    xcrdG: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    mXrZc: function (CY, CB) {
      return CY + CB;
    },
    oQjPW: function (CY, CB) {
      return CY + CB;
    },
    apSnp: function (CY, CB) {
      return CY + CB;
    },
    PkYCB: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    joGrM: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    uvUcV: function (CY, CB) {
      return CY + CB;
    },
    gdBDZ: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    VbfVK: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    YwNYS: function (CY, CB) {
      return CY + CB;
    },
    OJHth: function (CY, CB) {
      return CY + CB;
    },
    kUUHJ: function (CY, CB) {
      return CY + CB;
    },
    AskZn: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    Fkyqd: function (CY, CB) {
      return CY + CB;
    },
    oTcPX: function (CY, CB) {
      return CY + CB;
    },
    XwgjG: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    gyZUm: function (CY, CB) {
      return CY + CB;
    },
    sWZRM: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    WTuWY: function (CY, CB) {
      return CY + CB;
    },
    Snqkw: function (CY, CB) {
      return CY + CB;
    },
    mzapi: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    uMdjM: function (CY, CB) {
      return CY + CB;
    },
    uFkeU: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    EKkwh: function (CY, CB) {
      return CY + CB;
    },
    zsriG: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    etOBl: function (CY, CB) {
      return CY + CB;
    },
    HvCtG: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    hxIKC: function (CY, CB) {
      return CY + CB;
    },
    KRqBG: function (CY, CB) {
      return CY + CB;
    },
    fSZfD: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    gbCjf: function (CY, CB) {
      return CY + CB;
    },
    xcbHB: function (CY, CB) {
      return CY + CB;
    },
    RCuiB: function (CY, CB, Cg, CT, CP, CX, CS, Cy) {
      return CY(CB, Cg, CT, CP, CX, CS, Cy);
    },
    ZVeDS: function (CY, CB) {
      return CY + CB;
    },
    HhIzZ: function (CY, CB) {
      return CY + CB;
    },
    NMBtZ: function (CY, CB) {
      return CY + CB;
    },
    UpTmv: function (CY, CB) {
      return CY + CB;
    },
    MXIQp: function (CY, CB, Cg) {
      return CY(CB, Cg);
    },
    qdxoc: function (CY, CB, Cg) {
      return CY(CB, Cg);
    },
    xSQju: function (CY, CB) {
      return CY(CB);
    },
    UlEdH: function (CY, CB) {
      return CY(CB);
    },
    lQODB: function (CY, CB) {
      return CY(CB);
    }
  };
  function R(CY, CB) {
    {
      return CY << CB | CY >>> 32 - CB;
    }
  }
  function Y(CY, CB) {
    {
      var CT;
      var CP;
      var CX;
      var CS;
      var Cy;
      CX = 2147483648 & CY;
      CS = 2147483648 & CB;
      CT = 1073741824 & CY;
      CP = 1073741824 & CB;
      Cy = (1073741823 & CY) + (1073741823 & CB);
      return CT & CP ? 2147483648 ^ Cy ^ CX ^ CS : CT | CP ? 1073741824 & Cy ? 3221225472 ^ Cy ^ CX ^ CS : 1073741824 ^ Cy ^ CX ^ CS : Cy ^ CX ^ CS;
    }
  }
  function T(CY, CB, Cg) {
    {
      return CY & CB | ~CY & Cg;
    }
  }
  function P(CY, CB, Cg) {
    {
      return CY & Cg | CB & ~Cg;
    }
  }
  function X(CY, CB, Cg) {
    {
      return CY ^ CB ^ Cg;
    }
  }
  function S(CY, CB, Cg) {
    {
      return CB ^ (CY | ~Cg);
    }
  }
  function W(CY, CB, Cg, CT, CP, CX, CS) {
    CY = Y(CY, Y(Y(T(CB, Cg, CT), CP), CS));
    return Y(R(CY, CX), CB);
  }
  function V(CY, CB, Cg, CT, CP, CX, CS) {
    {
      CY = Y(CY, Y(Y(P(CB, Cg, CT), CP), CS));
      return Y(R(CY, CX), CB);
    }
  }
  function Z(CY, CB, Cg, CT, CP, CX, CS) {
    {
      CY = Y(CY, Y(Y(X(CB, Cg, CT), CP), CS));
      return Y(R(CY, CX), CB);
    }
  }
  function C0(CY, CB, Cg, CT, CP, CX, CS) {
    {
      CY = Y(CY, Y(Y(S(CB, Cg, CT), CP), CS));
      return Y(R(CY, CX), CB);
    }
  }
  function C1(CY) {
    {
      for (var Cg, CT = CY.length, CP = CT + 8, CX = (CP - CP % 64) / 64, CS = 16 * (CX + 1), Cy = new Array(CS - 1), CL = 0, Co = 0; CT > Co;) {
        Cg = (Co - Co % 4) / 4;
        CL = Co % 4 * 8;
        Cy[Cg] = Cy[Cg] | CY.charCodeAt(Co) << CL;
        Co++;
      }
      Cg = (Co - Co % 4) / 4;
      CL = Co % 4 * 8;
      Cy[Cg] = Cy[Cg] | 128 << CL;
      Cy[CS - 2] = CT << 3;
      Cy[CS - 1] = CT >>> 29;
      return Cy;
    }
  }
  function C2(CY) {
    {
      var Cg;
      var CT;
      var CP = "";
      var CX = "";
      for (CT = 0; 3 >= CT; CT++) {
        Cg = CY >>> 8 * CT & 255;
        CX = "0" + Cg.toString(16);
        CP += CX.substr(CX.length - 2, 2);
      }
      return CP;
    }
  }
  function C3(CY) {
    {
      CY = CY.replace(/\r\n/g, "\n");
      for (var CB = "", Cg = 0; Cg < CY.length; Cg++) {
        {
          var CT = CY.charCodeAt(Cg);
          128 > CT ? CB += String.fromCharCode(CT) : CT > 127 && 2048 > CT ? (CB += String.fromCharCode(CT >> 6 | 192), CB += String.fromCharCode(63 & CT | 128)) : (CB += String.fromCharCode(CT >> 12 | 224), CB += String.fromCharCode(CT >> 6 & 63 | 128), CB += String.fromCharCode(63 & CT | 128));
        }
      }
      return CB;
    }
  }
  var C4;
  var C5;
  var C6;
  var C7;
  var C8;
  var C9;
  var CC;
  var CU;
  var Cv;
  var CN = [];
  var Cf = 7;
  var Ci = 12;
  var Cn = 17;
  var CK = 22;
  var Ct = 5;
  var Cz = 9;
  var Cm = 14;
  var CQ = 20;
  var Cq = 4;
  var CD = 11;
  var Cu = 16;
  var CR = 23;
  var Cd = 6;
  var CM = 10;
  var Ck = 15;
  var Cb = 21;
  for (U = C3(U), CN = C1(U), C9 = 1732584193, CC = 4023233417, CU = 2562383102, Cv = 271733878, C4 = 0; C4 < CN.length; C4 += 16) {
    C5 = C9;
    C6 = CC;
    C7 = CU;
    C8 = Cv;
    C9 = W(C9, CC, CU, Cv, CN[C4 + 0], Cf, 3614090360);
    Cv = W(Cv, C9, CC, CU, CN[C4 + 1], Ci, 3905402710);
    CU = W(CU, Cv, C9, CC, CN[C4 + 2], Cn, 606105819);
    CC = W(CC, CU, Cv, C9, CN[C4 + 3], CK, 3250441966);
    C9 = W(C9, CC, CU, Cv, CN[C4 + 4], Cf, 4118548399);
    Cv = W(Cv, C9, CC, CU, CN[C4 + 5], Ci, 1200080426);
    CU = W(CU, Cv, C9, CC, CN[C4 + 6], Cn, 2821735955);
    CC = W(CC, CU, Cv, C9, CN[C4 + 7], CK, 4249261313);
    C9 = W(C9, CC, CU, Cv, CN[C4 + 8], Cf, 1770035416);
    Cv = W(Cv, C9, CC, CU, CN[C4 + 9], Ci, 2336552879);
    CU = W(CU, Cv, C9, CC, CN[C4 + 10], Cn, 4294925233);
    CC = W(CC, CU, Cv, C9, CN[C4 + 11], CK, 2304563134);
    C9 = W(C9, CC, CU, Cv, CN[C4 + 12], Cf, 1804603682);
    Cv = W(Cv, C9, CC, CU, CN[C4 + 13], Ci, 4254626195);
    CU = W(CU, Cv, C9, CC, CN[C4 + 14], Cn, 2792965006);
    CC = W(CC, CU, Cv, C9, CN[C4 + 15], CK, 1236535329);
    C9 = V(C9, CC, CU, Cv, CN[C4 + 1], Ct, 4129170786);
    Cv = V(Cv, C9, CC, CU, CN[C4 + 6], Cz, 3225465664);
    CU = V(CU, Cv, C9, CC, CN[C4 + 11], Cm, 643717713);
    CC = V(CC, CU, Cv, C9, CN[C4 + 0], CQ, 3921069994);
    C9 = V(C9, CC, CU, Cv, CN[C4 + 5], Ct, 3593408605);
    Cv = V(Cv, C9, CC, CU, CN[C4 + 10], Cz, 38016083);
    CU = V(CU, Cv, C9, CC, CN[C4 + 15], Cm, 3634488961);
    CC = V(CC, CU, Cv, C9, CN[C4 + 4], CQ, 3889429448);
    C9 = V(C9, CC, CU, Cv, CN[C4 + 9], Ct, 568446438);
    Cv = V(Cv, C9, CC, CU, CN[C4 + 14], Cz, 3275163606);
    CU = V(CU, Cv, C9, CC, CN[C4 + 3], Cm, 4107603335);
    CC = V(CC, CU, Cv, C9, CN[C4 + 8], CQ, 1163531501);
    C9 = V(C9, CC, CU, Cv, CN[C4 + 13], Ct, 2850285829);
    Cv = V(Cv, C9, CC, CU, CN[C4 + 2], Cz, 4243563512);
    CU = V(CU, Cv, C9, CC, CN[C4 + 7], Cm, 1735328473);
    CC = V(CC, CU, Cv, C9, CN[C4 + 12], CQ, 2368359562);
    C9 = Z(C9, CC, CU, Cv, CN[C4 + 5], Cq, 4294588738);
    Cv = Z(Cv, C9, CC, CU, CN[C4 + 8], CD, 2272392833);
    CU = Z(CU, Cv, C9, CC, CN[C4 + 11], Cu, 1839030562);
    CC = Z(CC, CU, Cv, C9, CN[C4 + 14], CR, 4259657740);
    C9 = Z(C9, CC, CU, Cv, CN[C4 + 1], Cq, 2763975236);
    Cv = Z(Cv, C9, CC, CU, CN[C4 + 4], CD, 1272893353);
    CU = Z(CU, Cv, C9, CC, CN[C4 + 7], Cu, 4139469664);
    CC = Z(CC, CU, Cv, C9, CN[C4 + 10], CR, 3200236656);
    C9 = Z(C9, CC, CU, Cv, CN[C4 + 13], Cq, 681279174);
    Cv = Z(Cv, C9, CC, CU, CN[C4 + 0], CD, 3936430074);
    CU = Z(CU, Cv, C9, CC, CN[C4 + 3], Cu, 3572445317);
    CC = Z(CC, CU, Cv, C9, CN[C4 + 6], CR, 76029189);
    C9 = Z(C9, CC, CU, Cv, CN[C4 + 9], Cq, 3654602809);
    Cv = Z(Cv, C9, CC, CU, CN[C4 + 12], CD, 3873151461);
    CU = Z(CU, Cv, C9, CC, CN[C4 + 15], Cu, 530742520);
    CC = Z(CC, CU, Cv, C9, CN[C4 + 2], CR, 3299628645);
    C9 = C0(C9, CC, CU, Cv, CN[C4 + 0], Cd, 4096336452);
    Cv = C0(Cv, C9, CC, CU, CN[C4 + 7], CM, 1126891415);
    CU = C0(CU, Cv, C9, CC, CN[C4 + 14], Ck, 2878612391);
    CC = C0(CC, CU, Cv, C9, CN[C4 + 5], Cb, 4237533241);
    C9 = C0(C9, CC, CU, Cv, CN[C4 + 12], Cd, 1700485571);
    Cv = C0(Cv, C9, CC, CU, CN[C4 + 3], CM, 2399980690);
    CU = C0(CU, Cv, C9, CC, CN[C4 + 10], Ck, 4293915773);
    CC = C0(CC, CU, Cv, C9, CN[C4 + 1], Cb, 2240044497);
    C9 = C0(C9, CC, CU, Cv, CN[C4 + 8], Cd, 1873313359);
    Cv = C0(Cv, C9, CC, CU, CN[C4 + 15], CM, 4264355552);
    CU = C0(CU, Cv, C9, CC, CN[C4 + 6], Ck, 2734768916);
    CC = C0(CC, CU, Cv, C9, CN[C4 + 13], Cb, 1309151649);
    C9 = C0(C9, CC, CU, Cv, CN[C4 + 4], Cd, 4149444226);
    Cv = C0(Cv, C9, CC, CU, CN[C4 + 11], CM, 3174756917);
    CU = C0(CU, Cv, C9, CC, CN[C4 + 2], Ck, 718787259);
    CC = C0(CC, CU, Cv, C9, CN[C4 + 9], Cb, 3951481745);
    C9 = Y(C9, C5);
    CC = Y(CC, C6);
    CU = Y(CU, C7);
    Cv = Y(Cv, C8);
  }
  var Ch = C2(C9) + C2(CC) + C2(CU) + C2(Cv);
  return Ch.toLowerCase();
}
function SHA256(C) {
  const U = {
    wxmCi: function (k, b) {
      return k === b;
    },
    RgmSz: "UlxhL",
    HnyHc: "uPXVw",
    IVUBI: function (k, b) {
      return k + b;
    },
    Znsxz: function (k, b) {
      return k & b;
    },
    GnTfH: function (k, b) {
      return k + b;
    },
    pXFMB: function (k, b) {
      return k + b;
    },
    srHfO: function (k, b) {
      return k >> b;
    },
    OrrXC: function (k, b) {
      return k >> b;
    },
    pgAiv: function (k, b) {
      return k | b;
    },
    wiLOL: function (k, b) {
      return k << b;
    },
    UeOsY: function (k, b) {
      return k & b;
    },
    TAgAq: function (k, b) {
      return k(b);
    },
    LOriq: function (k, b) {
      return k === b;
    },
    GJHEo: "QXYmY",
    RNYkg: function (k, b) {
      return k >>> b;
    },
    xbGpe: function (k, b) {
      return k << b;
    },
    xyCBG: function (k, b) {
      return k - b;
    },
    cgvMc: function (k, b) {
      return k >= b;
    },
    HeldJ: "...",
    VSnjm: function (k, b) {
      return k !== b;
    },
    jUQgq: "zsHDn",
    YJalJ: "hrysP",
    qbKjA: function (k, b) {
      return k >>> b;
    },
    xszfq: function (k) {
      return k();
    },
    SUdUW: "application/json",
    nxMxt: function (k, b) {
      return k !== b;
    },
    frejQ: "WKjuI",
    oxVyz: "UWpJZ",
    hmhjO: function (k, b) {
      return k ^ b;
    },
    alyDb: "UOnnF",
    jGwRs: function (k, b) {
      return k ^ b;
    },
    CKAfV: function (k, b) {
      return k(b);
    },
    CoEOa: function (k, b) {
      return k !== b;
    },
    NBSWp: "exrNC",
    chqXu: "VkwXt",
    qXGtP: function (k, b) {
      return k ^ b;
    },
    kTvhk: function (k, b, h) {
      return k(b, h);
    },
    RdKuE: function (k, b, h) {
      return k(b, h);
    },
    RPdaw: function (k, b) {
      return k === b;
    },
    dwIKV: "DnzIT",
    ALDrm: "XvlCJ",
    wZzRA: function (k, b, h) {
      return k(b, h);
    },
    DdSRF: function (k, b) {
      return k ^ b;
    },
    RfcOD: "SAuun",
    NaYCl: "VgVmy",
    NavaP: function (k, b, h) {
      return k(b, h);
    },
    CUhIL: "(((.+)+)+)+$",
    uNdTS: function (k, b) {
      return k === b;
    },
    tSGLO: "lofbN",
    QJDRl: function (k, b) {
      return k ^ b;
    },
    laNTD: function (k, b) {
      return k ^ b;
    },
    xxcFv: function (k, b, h) {
      return k(b, h);
    },
    rjtbN: function (k, b) {
      return k * b;
    },
    nTTWg: function (k, b) {
      return k | b;
    },
    obnYh: function (k, b) {
      return k >> b;
    },
    htHcM: function (k, b) {
      return k | b;
    },
    tyKwp: "kxIUA",
    Mabzh: "OuvGs",
    egeAV: function (k, b) {
      return k << b;
    },
    mNQsf: function (k, b) {
      return k - b;
    },
    mSaFE: function (k, b) {
      return k % b;
    },
    rNzKE: function (k, b) {
      return k + b;
    },
    LTWRS: function (k, b) {
      return k << b;
    },
    wFUUv: function (k, b) {
      return k >> b;
    },
    YMNer: function (k, b) {
      return k + b;
    },
    szJDr: function (k, b) {
      return k < b;
    },
    IxxJO: function (k, b) {
      return k !== b;
    },
    lEPMt: "BGWEe",
    tKEkr: "euDrg",
    vNZrj: "0|10|8|3|1|7|4|9|2|6|5",
    hUZao: function (k, b) {
      return k < b;
    },
    HGYsv: function (k, b, h) {
      return k(b, h);
    },
    IsPve: function (k, b) {
      return k(b);
    },
    TURAc: function (k, b) {
      return k - b;
    },
    kxfML: function (k, b) {
      return k - b;
    },
    fzzna: function (k, b, h) {
      return k(b, h);
    },
    RQdBl: function (k, b, h) {
      return k(b, h);
    },
    mkpfu: function (k, b, h) {
      return k(b, h);
    },
    SLmWi: function (k, b) {
      return k(b);
    },
    PaxCb: function (k, b, h, Y) {
      return k(b, h, Y);
    },
    xHsWZ: function (k, b, h) {
      return k(b, h);
    },
    FJzSe: function (k, b, h) {
      return k(b, h);
    },
    IHzQu: function (k, b) {
      return k(b);
    },
    dGaCe: function (k, b, h) {
      return k(b, h);
    },
    ZKsFi: function (k, b, h) {
      return k(b, h);
    },
    XEFMS: function (k, b, h) {
      return k(b, h);
    },
    PRRPB: function (k, b, h) {
      return k(b, h);
    },
    AdoMs: function (k, b, h) {
      return k(b, h);
    },
    etoLc: function (k, b, h) {
      return k(b, h);
    },
    SXYrx: function (k, b) {
      return k === b;
    },
    XSDSF: "iUigt",
    UiHiz: "hIind",
    BbwKs: function (k) {
      return k();
    },
    eXAwy: function (k, b) {
      return k - b;
    },
    XHEmy: function (k, b) {
      return k < b;
    },
    UJvlW: "uFTdq",
    rVOLO: "lchfQ",
    BJykM: function (k, b) {
      return k & b;
    },
    JwPLM: function (k, b) {
      return k / b;
    },
    YiLQw: function (k, b) {
      return k % b;
    },
    PrCXu: function (k, b, h, Y) {
      return k(b, h, Y);
    },
    ZDBJv: function (k, b) {
      return k / b;
    },
    yvInC: function (k, b) {
      return k * b;
    },
    uHAQw: function (k, b) {
      return k + b;
    },
    FyftP: function (k, b) {
      return k - b;
    },
    blDzZ: function (k, b) {
      return k > b;
    },
    JBLRV: function (k, b) {
      return k - b;
    },
    HxxbW: function (k, b) {
      return k | b;
    },
    vIuIa: function (k, b) {
      return k - b;
    },
    HWWaC: function (k, b) {
      return k * b;
    },
    SVwHS: function (k, b) {
      return k % b;
    },
    LMVin: function (k, b) {
      return k - b;
    },
    pPfSD: function (k, b) {
      return k << b;
    },
    qthWm: function (k, b) {
      return k >>> b;
    },
    BpifP: function (k) {
      return k();
    },
    Cjrdc: "ybZoL",
    cFCGc: function (k, b) {
      return k < b;
    },
    oSRcB: function (k, b) {
      return k !== b;
    },
    xJBzZ: "BzPEQ",
    iiTjY: function (k, b) {
      return k < b;
    },
    ONDpR: function (k, b) {
      return k !== b;
    },
    JhsaS: "EielC",
    yBYxb: "bSKpI",
    RWQPU: function (k, b) {
      return k === b;
    },
    Xwvmp: "FGQkH",
    sUEfV: "PvKsU",
    KFeho: function (k, b) {
      return k | b;
    },
    ssDvl: function (k, b) {
      return k >> b;
    },
    zwLuB: "kvNoV",
    uIonT: "qDykM",
    IzBIf: function (k, b) {
      return k | b;
    },
    Tkvlc: function (k, b) {
      return k | b;
    },
    pjXEk: function (k, b) {
      return k >> b;
    },
    HjCWd: function (k, b) {
      return k | b;
    },
    ZtWuT: function (k, b) {
      return k & b;
    },
    Wwbrp: "0|4|2|3|1",
    TRZXm: function (k, b) {
      return k === b;
    },
    acIrv: "IZKEx",
    kQVoG: "0123456789ABCDEF",
    HBbVv: "0123456789abcdef",
    ImUdd: function (k, b) {
      return k < b;
    },
    GRNel: function (k, b) {
      return k * b;
    },
    CbIlb: "UVTer",
    UeLKQ: "fUOfF",
    AIwXY: function (k, b) {
      return k & b;
    },
    IiKwN: function (k, b) {
      return k >> b;
    },
    GYulV: function (k, b) {
      return k >> b;
    },
    OBDSn: function (k, b) {
      return k * b;
    },
    sTnVP: function (k, b) {
      return k % b;
    },
    EIAyr: function (k, b) {
      return k(b);
    },
    DIeMl: function (k, b, h) {
      return k(b, h);
    },
    WNjXn: function (k, b) {
      return k(b);
    }
  };
  var v = 8;
  var N = 0;
  function f(k, b) {
    {
      var h = (k & 65535) + (b & 65535);
      var Y = (k >> 16) + (b >> 16) + (h >> 16);
      return Y << 16 | h & 65535;
    }
  }
  function i(k, b) {
    {
      return k >>> b | k << 32 - b;
    }
  }
  function n(k, b) {
    {
      return k >>> b;
    }
  }
  function K(k, b, h) {
    {
      return k & b ^ ~k & h;
    }
  }
  function t(k, b, h) {
    {
      return k & b ^ k & h ^ b & h;
    }
  }
  function z(k) {
    {
      return i(k, 2) ^ i(k, 13) ^ i(k, 22);
    }
  }
  function m(k) {
    {
      return i(k, 6) ^ i(k, 11) ^ i(k, 25);
    }
  }
  function Q(k) {
    return i(k, 7) ^ i(k, 18) ^ n(k, 3);
  }
  function q(k) {
    return i(k, 17) ^ i(k, 19) ^ n(k, 10);
  }
  function D(k, Y) {
    {
      var T = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
      var P = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
      var X = new Array(64);
      var y;
      var L;
      var o;
      var x;
      var p;
      var A;
      var r;
      var I;
      var F;
      var E;
      var V;
      var Z;
      k[Y >> 5] |= 128 << 24 - Y % 32;
      k[(Y + 64 >> 9 << 4) + 15] = Y;
      for (var F = 0; F < k.length; F += 16) {
        {
          y = P[0];
          L = P[1];
          o = P[2];
          x = P[3];
          p = P[4];
          A = P[5];
          r = P[6];
          I = P[7];
          for (var E = 0; E < 64; E++) {
            {
              if (E < 16) {
                X[E] = k[E + F];
              } else {
                X[E] = f(f(f(q(X[E - 2]), X[E - 7]), Q(X[E - 15])), X[E - 16]);
              }
              V = f(f(f(f(I, m(p)), K(p, A, r)), T[E]), X[E]);
              Z = f(z(y), t(y, L, o));
              I = r;
              r = A;
              A = p;
              p = f(x, V);
              x = o;
              o = L;
              L = y;
              y = f(V, Z);
            }
          }
          P[0] = f(y, P[0]);
          P[1] = f(L, P[1]);
          P[2] = f(o, P[2]);
          P[3] = f(x, P[3]);
          P[4] = f(p, P[4]);
          P[5] = f(A, P[5]);
          P[6] = f(r, P[6]);
          P[7] = f(I, P[7]);
        }
      }
      return P;
    }
  }
  function u(k) {
    {
      var b = Array();
      var h = (1 << v) - 1;
      for (var Y = 0; Y < k.length * v; Y += v) {
        b[Y >> 5] |= (k.charCodeAt(Y / v) & h) << 24 - Y % 32;
      }
      return b;
    }
  }
  function d(k) {
    {
      k = k.replace(/\r\n/g, "\n");
      var h = "";
      for (var Y = 0; Y < k.length; Y++) {
        {
          var B = k.charCodeAt(Y);
          if (B < 128) {
            h += String.fromCharCode(B);
          } else {
            if (B > 127 && B < 2048) {
              h += String.fromCharCode(B >> 6 | 192);
              h += String.fromCharCode(B & 63 | 128);
            } else {
              {
                h += String.fromCharCode(B >> 12 | 224);
                h += String.fromCharCode(B >> 6 & 63 | 128);
                h += String.fromCharCode(B & 63 | 128);
              }
            }
          }
        }
      }
      return h;
    }
  }
  function M(k) {
    {
      var h = N ? "0123456789ABCDEF" : "0123456789abcdef";
      var Y = "";
      for (var B = 0; B < k.length * 4; B++) {
        {
          Y += h.charAt(k[B >> 2] >> (3 - B % 4) * 8 + 4 & 15) + h.charAt(k[B >> 2] >> (3 - B % 4) * 8 & 15);
        }
      }
      return Y;
    }
  }
  C = d(C);
  return M(D(u(C), C.length * v));
}
function SHA1(U) {
  const v = {
    UvyXN: function (S, L) {
      return S === L;
    },
    cuhGS: "EJgZs",
    DlOmy: function (S, L) {
      return S | L;
    },
    YNfqq: function (S, L) {
      return S << L;
    },
    jAyts: function (S, L) {
      return S >>> L;
    },
    rZHRg: function (S, L) {
      return S - L;
    },
    wEVjM: function (S, y) {
      return S(y);
    },
    aQqIG: function (S, L) {
      return S !== L;
    },
    zTjRA: "XviJu",
    cQCYz: function (S, L) {
      return S <= L;
    },
    xzikQ: "zEEcP",
    VqQVH: function (S, L) {
      return S & L;
    },
    qqnJP: function (S, L) {
      return S >>> L;
    },
    XgUMh: function (S, L) {
      return S + L;
    },
    togUk: function (S, L) {
      return S * L;
    },
    DbTAk: function (S, L) {
      return S + L;
    },
    VlftA: "@chavy_boxjs_userCfgs.httpapi",
    AfQyV: "@chavy_boxjs_userCfgs.httpapi_timeout",
    heznz: "cron",
    hsWUR: "*/*",
    BVhNU: function (S, y, L) {
      return S(y, L);
    },
    Phbzl: function (S, y, L, o) {
      return S(y, L, o);
    },
    ImHZT: function (S, y, L) {
      return S(y, L);
    },
    sTTri: "JoXYi",
    dNOMG: function (S, L) {
      return S >= L;
    },
    TojrS: function (S, L) {
      return S === L;
    },
    tIUjz: "NmwxH",
    hDDqa: "LbUKT",
    cEtex: function (S, y, L, o) {
      return S(y, L, o);
    },
    iNWpW: function (S, y, L) {
      return S(y, L);
    },
    hDjWr: function (S, y, L) {
      return S(y, L);
    },
    SZnaj: function (S) {
      return S();
    },
    KCTtl: "application/json",
    dODSD: "set-cookie",
    KJqFF: function (S, L) {
      return S !== L;
    },
    XgIqo: "KSSnR",
    cUtyt: function (S, L) {
      return S < L;
    },
    YRHeA: "sdgHN",
    LsLhb: function (S, L) {
      return S < L;
    },
    JVlKn: "GnoyE",
    pwLUk: function (S, L) {
      return S > L;
    },
    lTeFq: function (S, L) {
      return S < L;
    },
    wzPRB: function (S, L) {
      return S !== L;
    },
    ZXBLf: "eonuB",
    FPmwE: "CASMj",
    sAMkS: function (S, L) {
      return S | L;
    },
    CFqov: function (S, L) {
      return S >> L;
    },
    iEcTD: function (S, L) {
      return S & L;
    },
    dPFJo: "KBsKc",
    imtJq: function (S, L) {
      return S | L;
    },
    QrNfs: function (S, L) {
      return S >> L;
    },
    VKKaJ: function (S, L) {
      return S | L;
    },
    Ewshp: function (S, L) {
      return S >> L;
    },
    WUiKN: function (S, L) {
      return S & L;
    },
    WehAS: function (S, L) {
      return S | L;
    },
    fGzDY: function (S, L) {
      return S | L;
    },
    Podft: function (S, L) {
      return S >>> L;
    },
    mdqNZ: function (S, L) {
      return S ^ L;
    },
    rbCwQ: function (S, y, L) {
      return S(y, L);
    },
    PDoQw: function (S, y, L) {
      return S(y, L);
    },
    eIMTG: function (S, y) {
      return S(y);
    },
    wjmfy: function (S, y) {
      return S(y);
    },
    eLrBv: function (S, L) {
      return S < L;
    },
    SKalH: function (S, L) {
      return S - L;
    },
    SvpCj: "zEgtj",
    qIwpC: "UzFnv",
    ZugTF: function (S, L) {
      return S << L;
    },
    XUoUw: function (S, L) {
      return S < L;
    },
    obarx: function (S, L) {
      return S + L;
    },
    HbXoK: function (S, L) {
      return S + L;
    },
    ToZWd: function (S, L) {
      return S << L;
    },
    VxTVz: function (S, L) {
      return S % L;
    },
    RAGVW: function (S, L) {
      return S | L;
    },
    mwFhF: function (S, L) {
      return S | L;
    },
    SAKcg: function (S, L) {
      return S << L;
    },
    uXeNX: function (S, L) {
      return S - L;
    },
    foVvs: function (S, L) {
      return S | L;
    },
    BnPLB: function (S, L) {
      return S | L;
    },
    hRAYm: function (S, L) {
      return S - L;
    },
    hSHcB: function (S, L) {
      return S - L;
    },
    wfBXw: function (S, L) {
      return S != L;
    },
    TnxUi: function (S, L) {
      return S % L;
    },
    wKtTb: function (S, L) {
      return S === L;
    },
    uDxHL: "iyJJv",
    dsgqR: "XlkQJ",
    TobTj: function (S, L) {
      return S < L;
    },
    Wommr: function (S, L) {
      return S + L;
    },
    VhrAt: function (S, y, L) {
      return S(y, L);
    },
    CKqaj: function (S, L) {
      return S ^ L;
    },
    mctpt: function (S, L) {
      return S - L;
    },
    zSYgp: function (S, L) {
      return S - L;
    },
    ZerEC: "ISWKh",
    jTIxX: "QLYof",
    NthyT: "2|0|1|4|5|3",
    vkVCo: function (S, L) {
      return S & L;
    },
    iUGrz: function (S, L) {
      return S + L;
    },
    wDqRG: function (S, L) {
      return S & L;
    },
    vtwtB: function (S, y, L) {
      return S(y, L);
    },
    eUsDC: function (S, L) {
      return S <= L;
    },
    oBYwM: "NxrYS",
    fYMRW: "5|3|2|4|0|1",
    AWDac: function (S, L) {
      return S + L;
    },
    Kowhf: function (S, L) {
      return S ^ L;
    },
    gZXXs: function (S, L) {
      return S !== L;
    },
    cciag: "JJeMB",
    EHxBP: "4|0|2|1|3|5",
    jtilx: function (S, L) {
      return S & L;
    },
    FCtZh: function (S, L) {
      return S + L;
    },
    nIgVb: function (S, L) {
      return S + L;
    },
    hCRtS: function (S, L) {
      return S + L;
    },
    nmKbf: function (S, L) {
      return S | L;
    },
    qPuCX: function (S, L) {
      return S | L;
    },
    ctODl: function (S, L) {
      return S & L;
    },
    lzPEp: function (S, L) {
      return S & L;
    },
    DegMf: function (S, L) {
      return S <= L;
    },
    BjOTL: function (S, L) {
      return S !== L;
    },
    SLrVA: "iOigR",
    Nflka: "sQLQs",
    NSxGv: "1|3|5|0|2|4",
    GfDKF: function (S, y, L) {
      return S(y, L);
    },
    MexSg: function (S, L) {
      return S + L;
    },
    cjgKj: function (S, L) {
      return S & L;
    },
    LyjUN: function (S, L) {
      return S + L;
    },
    YHTLG: function (S, L) {
      return S & L;
    },
    pekjA: function (S, L) {
      return S + L;
    },
    RRhvx: function (S, L) {
      return S & L;
    },
    aTksN: function (S, L) {
      return S + L;
    },
    DugKr: function (S, L) {
      return S + L;
    },
    zYyEj: function (S, y) {
      return S(y);
    }
  };
  function N(S, y) {
    {
      var L = S << y | S >>> 32 - y;
      return L;
    }
  }
  function f(S) {
    {
      var L = "";
      var o;
      var l;
      var x;
      for (o = 0; o <= 6; o += 2) {
        {
          l = S >>> o * 4 + 4 & 15;
          x = S >>> o * 4 & 15;
          L += l.toString(16) + x.toString(16);
        }
      }
      return L;
    }
  }
  function n(S) {
    const y = {
      Qagxy: "@chavy_boxjs_userCfgs.httpapi",
      SeiAY: "@chavy_boxjs_userCfgs.httpapi_timeout",
      xnNJP: function (p, a) {
        return p * a;
      },
      cYmuR: "cron",
      IUoQc: "*/*",
      HdpyV: function (x, p, a) {
        return x(p, a);
      },
      KIvMh: function (x, p, a) {
        return x(p, a);
      },
      oPKvb: function (x, p, a) {
        return x(p, a);
      },
      riWce: function (x, p, a, r) {
        return x(p, a, r);
      },
      nrmoE: function (x, p, a) {
        return x(p, a);
      },
      xqiFy: function (x, p, a) {
        return x(p, a);
      }
    };
    {
      var L = "";
      var o;
      var l;
      for (o = 7; o >= 0; o--) {
        {
          l = S >>> o * 4 & 15;
          L += l.toString(16);
        }
      }
      return L;
    }
  }
  function K(S) {
    const y = {
      UCpMp: function (x) {
        return x();
      },
      dTXiE: "application/json",
      jZser: "set-cookie"
    };
    {
      S = S.replace(/\r\n/g, "\n");
      var L = "";
      for (var o = 0; o < S.length; o++) {
        {
          var l = S.charCodeAt(o);
          if (l < 128) {
            {
              L += String.fromCharCode(l);
            }
          } else {
            if (l > 127 && l < 2048) {
              {
                L += String.fromCharCode(l >> 6 | 192);
                L += String.fromCharCode(l & 63 | 128);
              }
            } else {
              {
                L += String.fromCharCode(l >> 12 | 224);
                L += String.fromCharCode(l >> 6 & 63 | 128);
                L += String.fromCharCode(l & 63 | 128);
              }
            }
          }
        }
      }
      return L;
    }
  }
  var t;
  var z;
  var m;
  var Q = new Array(80);
  var q = 1732584193;
  var u = 4023233417;
  var R = 2562383102;
  var d = 271733878;
  var M = 3285377520;
  var k;
  var b;
  var h;
  var Y;
  var g;
  var T;
  U = K(U);
  var P = U.length;
  var X = new Array();
  for (z = 0; z < P - 3; z += 4) {
    m = U.charCodeAt(z) << 24 | U.charCodeAt(z + 1 < 10 ? "0" + (z + 1) : z + 1) << 16 | U.charCodeAt(z + 2) << 8 | U.charCodeAt(z + 3);
    X.push(m);
  }
  switch (P % 4) {
    case 0:
      z = 2147483648;
      break;
    case 1:
      z = U.charCodeAt(P - 1) << 24 | 8388608;
      break;
    case 2:
      z = U.charCodeAt(P - 2) << 24 | U.charCodeAt(P - 1) << 16 | 32768;
      break;
    case 3:
      z = U.charCodeAt(P - 3) << 24 | U.charCodeAt(P - 2) << 16 | U.charCodeAt(P - 1) << 8 | 128;
      break;
  }
  X.push(z);
  while (X.length % 16 != 14) {
    X.push(0);
  }
  X.push(P >>> 29);
  X.push(P << 3 & 4294967295);
  for (t = 0; t < X.length; t += 16) {
    {
      for (z = 0; z < 16; z++) {
        Q[z] = X[t + z];
      }
      for (z = 16; z <= 79; z++) {
        Q[z] = N(Q[z - 3] ^ Q[z - 8] ^ Q[z - 14] ^ Q[z - 16], 1);
      }
      k = q;
      b = u;
      h = R;
      Y = d;
      g = M;
      for (z = 0; z <= 19; z++) {
        {
          T = N(k, 5) + (b & h | ~b & Y) + g + Q[z] + 1518500249 & 4294967295;
          g = Y;
          Y = h;
          h = N(b, 30);
          b = k;
          k = T;
        }
      }
      for (z = 20; z <= 39; z++) {
        {
          T = N(k, 5) + (b ^ h ^ Y) + g + Q[z] + 1859775393 & 4294967295;
          g = Y;
          Y = h;
          h = N(b, 30);
          b = k;
          k = T;
        }
      }
      for (z = 40; z <= 59; z++) {
        {
          T = N(k, 5) + (b & h | b & Y | h & Y) + g + Q[z] + 2400959708 & 4294967295;
          g = Y;
          Y = h;
          h = N(b, 30);
          b = k;
          k = T;
        }
      }
      for (z = 60; z <= 79; z++) {
        {
          T = N(k, 5) + (b ^ h ^ Y) + g + Q[z] + 3395469782 & 4294967295;
          g = Y;
          Y = h;
          h = N(b, 30);
          b = k;
          k = T;
        }
      }
      q = q + k & 4294967295;
      u = u + b & 4294967295;
      R = R + h & 4294967295;
      d = d + Y & 4294967295;
      M = M + g & 4294967295;
    }
  }
  var T = n(q) + n(u) + n(R) + n(d) + n(M);
  return T.toLowerCase();
}
function Base64() {
  if (!(this instanceof Base64)) {
    {
      return new Base64();
    }
  }
  var U = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (N) {
    const f = {
      imRRk: function (R, d) {
        return R !== d;
      },
      cAQMg: function (R, d) {
        return R(d);
      },
      uFptf: function (R, d) {
        return R - d;
      },
      xVtqZ: function (R) {
        return R();
      },
      rCHkK: function (R, d) {
        return R < d;
      },
      FXMLs: function (R, d) {
        return R + d;
      }
    };
    {
      var u = "";
      var n;
      var K;
      var t;
      var z;
      var m;
      var Q;
      var q;
      var D = 0;
      N = _utf8_encode(N);
      while (D < N.length) {
        {
          n = N.charCodeAt(D++);
          K = N.charCodeAt(D++);
          t = N.charCodeAt(D++);
          z = n >> 2;
          m = (n & 3) << 4 | K >> 4;
          Q = (K & 15) << 2 | t >> 6;
          q = t & 63;
          if (isNaN(K)) {
            {
              Q = q = 64;
            }
          } else {
            if (isNaN(t)) {
              {
                q = 64;
              }
            }
          }
          u = u + U.charAt(z) + U.charAt(m) + U.charAt(Q) + U.charAt(q);
        }
      }
      return u;
    }
  };
  this.decode = function (N) {
    {
      var D = "";
      var m;
      var Q;
      var q;
      var n;
      var K;
      var t;
      var z;
      var u = 0;
      N = N.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (u < N.length) {
        {
          n = U.indexOf(N.charAt(u++));
          K = U.indexOf(N.charAt(u++));
          t = U.indexOf(N.charAt(u++));
          z = U.indexOf(N.charAt(u++));
          m = n << 2 | K >> 4;
          Q = (K & 15) << 4 | t >> 2;
          q = (t & 3) << 6 | z;
          D = D + String.fromCharCode(m);
          t != 64 && (D = D + String.fromCharCode(Q));
          if (z != 64) {
            {
              D = D + String.fromCharCode(q);
            }
          }
        }
      }
      D = _utf8_decode(D);
      return D;
    }
  };
  _utf8_encode = function (N) {
    {
      N = N.replace(/\r\n/g, "\n");
      var f = "";
      for (var i = 0; i < N.length; i++) {
        {
          var K = N.charCodeAt(i);
          if (K < 128) {
            f += String.fromCharCode(K);
          } else {
            if (K > 127 && K < 2048) {
              {
                f += String.fromCharCode(K >> 6 | 192);
                f += String.fromCharCode(K & 63 | 128);
              }
            } else {
              f += String.fromCharCode(K >> 12 | 224);
              f += String.fromCharCode(K >> 6 & 63 | 128);
              f += String.fromCharCode(K & 63 | 128);
            }
          }
        }
      }
      return f;
    }
  };
  _utf8_decode = function (N) {
    const f = {
      iezLI: function (z, m) {
        return z(m);
      }
    };
    {
      var n = "";
      var K = 0;
      c1 = c2 = 0;
      var t = c1;
      while (K < N.length) {
        {
          t = N.charCodeAt(K);
          if (t < 128) {
            {
              n += String.fromCharCode(t);
              K++;
            }
          } else {
            if (t > 191 && t < 224) {
              c2 = N.charCodeAt(K + 1);
              n += String.fromCharCode((t & 31) << 6 | c2 & 63);
              K += 2;
            } else {
              {
                c2 = N.charCodeAt(K + 1);
                c3 = N.charCodeAt(K + 2);
                n += String.fromCharCode((t & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                K += 3;
              }
            }
          }
        }
      }
      return n;
    }
  };
}
function Env(C, U) {
  const v = {
    uExZx: "5|0|4|2|3|1",
    ZvZbf: function (f, i) {
      return f <= i;
    },
    zFNny: function (f, i) {
      return f & i;
    },
    ZzsGk: function (f, i) {
      return f >>> i;
    },
    qtDin: function (f, i) {
      return f + i;
    },
    RtfQJ: function (f, i) {
      return f * i;
    },
    CWULg: function (f, i) {
      return f & i;
    },
    CUnLd: function (f, i) {
      return f + i;
    },
    Ejfkh: function (f, i) {
      return f === i;
    },
    qjnzp: "bZFXE",
    ESPdW: "zQKBt",
    GfYpM: function (f, i) {
      return f === i;
    },
    wqaiF: "WmlwX",
    MEBJa: function (f, i) {
      return f(i);
    },
    QnGMi: function (f, i) {
      return f(i);
    },
    mBOTR: function (f, i) {
      return f === i;
    },
    seIxI: "MxyIs",
    VfKMe: function (f, i) {
      return f !== i;
    },
    HJGXM: "INhWK",
    SfYma: "string",
    jnTGN: function (f, i) {
      return f === i;
    },
    NuwUD: "POST",
    dRgPd: "FdVhh",
    rxszs: "🔔 外挂ck文件不存在，开始创建模版>>>",
    jpCCW: "./david_cookies.js",
    xsVFR: function (f, i) {
      return f !== i;
    },
    mAagd: "WraDD",
    oTEbN: "OgfOP",
    Joffr: function (f, i) {
      return f === i;
    },
    XSddK: "EVacz",
    tnlDW: function (f, i, n, K) {
      return f(i, n, K);
    },
    MEQuj: "nRDgh",
    lOwuA: "QDzDs",
    FZKtE: "box.dat",
    bHIlH: "zTIzz",
    EpbtC: function (f, i) {
      return f === i;
    },
    vulBo: "EfXhc",
    fespD: "undefined",
    ZmYYM: function (f) {
      return f();
    },
    UyXZF: "application/json",
    qiEiU: function (f, i) {
      return f !== i;
    },
    XlRKR: "yssAl",
    kLQWt: function (f, i) {
      return f === i;
    },
    xkJJy: "UhiuT",
    HHakl: "PBFxh",
    hviso: function (f, i) {
      return f !== i;
    },
    HwacV: function (f, i) {
      return f(i);
    },
    CsYJv: "got",
    FJMdG: function (f, i) {
      return f(i);
    },
    bCpEY: "tough-cookie",
    XpQgG: function (f, i) {
      return f === i;
    },
    GHdVq: function (f, i) {
      return f === i;
    },
    vJCla: "dixvY",
    JcEKK: function (f, i) {
      return f + i;
    },
    ICZYe: function (f) {
      return f();
    },
    xmzmQ: "DaUTf",
    DnOlr: function (f, i) {
      return f !== i;
    },
    DKfGz: function (f, i) {
      return f < i;
    },
    oFYVa: function (f, i) {
      return f > i;
    },
    KOnpa: function (f, i) {
      return f > i;
    },
    TkngI: function (f, i) {
      return f | i;
    },
    twylB: function (f, i) {
      return f >> i;
    },
    qGGJh: function (f, i) {
      return f | i;
    },
    KwsfU: function (f, i) {
      return f >> i;
    },
    xkKKZ: function (f, i) {
      return f | i;
    },
    icIcz: function (f, i) {
      return f & i;
    },
    VSlia: "BbUrY",
    BmNAz: "XUnDd",
    IZZYX: "rZxVZ",
    iGXfC: "QkAem",
    LTLag: function (f, i) {
      return f !== i;
    },
    hoCXH: "PaGFY",
    XnawD: function (f, i) {
      return f === i;
    },
    oWzUP: function (f, i) {
      return f === i;
    },
    FNQmH: "null",
    NBfaa: function (f, i) {
      return f || i;
    },
    diRGL: function (f, i) {
      return f | i;
    },
    InTwr: function (f, i) {
      return f & i;
    },
    HAqlN: "jRbVo",
    JoXta: function (f, i) {
      return f !== i;
    },
    xfhMW: "NkMDx",
    gPzXE: "GdwuY",
    FwPhL: function (f, i) {
      return f === i;
    },
    YqOqn: "mcFdu",
    RdNqb: "oHGfu",
    BnxwX: "2|5|6|11|10|7|13|14|8|4|12|1|0|3|9",
    CJmRt: "DOZAk",
    HAJpf: "PUREv",
    vAGlI: function (f, i) {
      return f !== i;
    },
    pMGIr: "nHwJZ",
    cBmrA: "peigM",
    OcFLp: function (f, i) {
      return f === i;
    },
    NWBVf: "WUKvg",
    KJIkh: "CHmeN",
    HSrHo: function (f, i) {
      return f == i;
    },
    DYqnu: "pUqKz",
    DZetA: "PAkxM",
    Swznz: "UeLHQ",
    FxzHf: function (f, i) {
      return f === i;
    },
    VgnUS: "WRVED",
    YZNvf: "LLQEO",
    jhIyC: "YbVkX",
    mKCJE: function (f) {
      return f();
    },
    poRQB: function (f, i) {
      return f === i;
    },
    ASnui: "GOUJN",
    QpjvZ: function (f, i) {
      return f < i;
    },
    RBuzO: function (f, i) {
      return f | i;
    },
    GCdpM: function (f, i) {
      return f << i;
    },
    pZkIM: function (f, i) {
      return f & i;
    },
    sJUPt: function (f, i) {
      return f + i;
    },
    mBPcu: function (f, i) {
      return f | i;
    },
    WCfvG: function (f, i) {
      return f | i;
    },
    vbOEl: function (f, i) {
      return f & i;
    },
    tioSC: function (f, i) {
      return f & i;
    },
    ooAIO: function (f, i) {
      return f + i;
    },
    PoznL: function (f, i) {
      return f === i;
    },
    UjRGj: "nOSFC",
    kgQlb: "@chavy_boxjs_userCfgs.httpapi",
    MAEjR: "@chavy_boxjs_userCfgs.httpapi_timeout",
    CYFvM: function (f, i) {
      return f * i;
    },
    JyOym: "cron",
    RMwbi: "*/*",
    gEFAH: function (f, i) {
      return f === i;
    },
    BOkpb: "ezwes",
    yhYqy: "yNmAR",
    DyxKG: function (f, i) {
      return f >> i;
    },
    aJgFD: function (f, i) {
      return f(i);
    },
    UXQqj: "PJLQk",
    TRWlq: "uiJXz",
    FOFiB: "path",
    FJdrP: "Urijt",
    fDtAv: function (f, i) {
      return f === i;
    },
    dfLXl: "JFqMW",
    ZWkvd: "SdctP",
    mxNqh: function (f, i) {
      return f === i;
    },
    yBJfb: "pxfxo",
    SbSIZ: "vpkhK",
    GBIJx: function (f, i) {
      return f(i);
    },
    JEPse: function (f, i) {
      return f + i;
    },
    NnAeR: "$1****$2",
    bftpO: function (f, i) {
      return f === i;
    },
    ROIBX: "oERiA",
    OKkTI: "tgzRg",
    fqDAh: function (f, i) {
      return f(i);
    },
    lzqWJ: function (f, i) {
      return f(i);
    },
    FQfbp: "yLEBI",
    uwnrv: function (f, i) {
      return f !== i;
    },
    falNz: "sOOKv",
    Goeec: "QyQCA",
    lpomY: "DfSMk",
    bEXou: "aNEtu",
    ydizv: function (f, i) {
      return f(i);
    },
    luAEq: function (f, i) {
      return f || i;
    },
    XbTCc: function (f, i) {
      return f ^ i;
    },
    okLuC: function (f, i, n) {
      return f(i, n);
    },
    tpIEm: function (f, i) {
      return f === i;
    },
    fJUEs: "NkNpm",
    SMtFM: "gbSwC",
    mojKx: ".$1",
    yzWBZ: "iXpcA",
    GrHeR: function (f, i) {
      return f !== i;
    },
    MLedm: "okVvg",
    XTuxH: function (f, i) {
      return f !== i;
    },
    QjXlj: function (f, i) {
      return f === i;
    },
    qzuHJ: "HAQsQ",
    XTQwF: function (f, i) {
      return f !== i;
    },
    kKOoI: function (f, i) {
      return f(i);
    },
    SqpuE: function (f, i) {
      return f - i;
    },
    UKwMx: function (f) {
      return f();
    },
    lYpol: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
    SXVuX: "快手答题余额通知",
    YtjsN: function (f, i) {
      return f != i;
    },
    bneeG: "function *\\( *\\)",
    VYkHH: "\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
    QKrbd: "init",
    rShgX: function (f, i) {
      return f + i;
    },
    VXmOW: "chain",
    EjKCg: function (f, i) {
      return f + i;
    },
    NWmZQ: "input",
    PlniM: function (f, i) {
      return f(i);
    },
    sTcRz: "TOTOE",
    gVUtk: function (f, i) {
      return f !== i;
    },
    XklSD: "vJDql",
    HTSbu: "ExmUh",
    jqgbT: function (f, i) {
      return f === i;
    },
    UxZKA: "paLgf",
    SAqQL: "MrCWh",
    XuoJT: function (f, i) {
      return f === i;
    },
    gintk: "oEKYS",
    lnXkD: "KZemd",
    MhjTe: "esyBK",
    flJig: "2|0|1|4|3",
    soYue: function (f, i) {
      return f >= i;
    },
    NgSbz: function (f, i) {
      return f >>> i;
    },
    GPSxq: function (f) {
      return f();
    },
    jFSci: function (f, i) {
      return f === i;
    },
    ZgAWP: "GlcIZ",
    Kpjjd: "HUrnX",
    nScJp: function (f, i) {
      return f !== i;
    },
    HnRHZ: "FsosS",
    IpRzE: "uEKdx",
    tLTZB: function (f, i) {
      return f === i;
    },
    ZyOau: "GKStG",
    vkYEa: function (f, i) {
      return f !== i;
    },
    SGjEG: "HcLyv",
    xxSYL: "syIeB",
    notFV: "wJOQl",
    CVXck: function (f, i) {
      return f | i;
    },
    JyxKN: function (f, i) {
      return f << i;
    },
    fGWJF: function (f, i) {
      return f + i;
    },
    pjLlE: function (f, i) {
      return f + i;
    },
    gSsLK: function (f, i) {
      return f << i;
    },
    wDZfh: function (f, i) {
      return f + i;
    },
    JEgLp: "XjziH",
    WQEvD: "zRirg",
    nVEnH: "azbaC",
    mnGOb: function (f, i) {
      return f === i;
    },
    YIDeM: "JeBZx",
    jOuMD: function (f, i) {
      return f !== i;
    },
    MwitU: "RkOxx",
    nGZvI: "RLRFX",
    oZxMG: function (f, i) {
      return f(i);
    },
    nMAXh: function (f, i) {
      return f(i);
    },
    vyRxE: "0123456789ABCDEF",
    wUdke: "0123456789abcdef",
    OOYTw: function (f, i) {
      return f >> i;
    },
    DQGyU: function (f, i) {
      return f >> i;
    },
    dUkVc: function (f, i) {
      return f + i;
    },
    dMvJN: function (f, i) {
      return f * i;
    },
    iLABc: function (f, i) {
      return f % i;
    },
    UIsCI: function (f, i) {
      return f & i;
    },
    TYyNV: function (f, i) {
      return f - i;
    },
    zaidw: "4|3|0|2|5|1",
    DgFiR: function (f, i) {
      return f < i;
    },
    gpXCz: function (f, i) {
      return f && i;
    },
    SKbLL: function (f, i) {
      return f === i;
    },
    oJBia: "FufFQ",
    HJBzI: "QEKly",
    tvYEd: "TDoyV",
    aHURL: "IKrip",
    FnwIh: "DrPzL",
    HXPuw: function (f, i) {
      return f !== i;
    },
    yjEFc: "jVpcv",
    rNdLQ: function (f, i) {
      return f !== i;
    },
    kuoDK: "cLGKL",
    NazdA: "utf8",
    ALSya: "message",
    xdbaa: function (f, i) {
      return f(i);
    },
    knxEt: "Content-Type",
    DuYLn: "application/x-www-form-urlencoded",
    PtGKw: function (f, i) {
      return f - i;
    },
    vXYDF: "...",
    lvnhS: function (f, i) {
      return f !== i;
    },
    xJvGw: "dWdAl",
    kHfrJ: "rxwxm",
    ogPYQ: function (f, i) {
      return f === i;
    },
    BYNuN: function (f, i) {
      return f === i;
    },
    eJbZM: function (f, i) {
      return f !== i;
    },
    pEXHY: "DSPEL",
    CrqzI: "yWkUj",
    qMlsQ: function (f, i) {
      return f > i;
    },
    oxsjl: function (f, i) {
      return f | i;
    },
    KlLxK: function (f, i) {
      return f & i;
    },
    kXOUg: function (f, i) {
      return f & i;
    },
    dEopm: function (f, i) {
      return f >> i;
    },
    ujouD: function (f, i) {
      return f + i;
    },
    XPeWb: "kXHnE",
    QJwOw: "qDxKQ",
    RFYts: function (f, i) {
      return f && i;
    },
    nXOPI: function (f, i) {
      return f === i;
    },
    gzBdl: "WMddk",
    RKjec: function (f, i, n, K) {
      return f(i, n, K);
    },
    CvOkJ: function (f, i) {
      return f !== i;
    },
    CKFei: "gOhUC",
    NqeeZ: "xyjWw",
    zgTqM: function (f, i, n, K) {
      return f(i, n, K);
    },
    BDEYj: "4|5|2|1|0|3",
    XPqSS: function (f, i, n) {
      return f(i, n);
    },
    mDweV: function (f, i, n) {
      return f(i, n);
    },
    rAurB: function (f, i) {
      return f & i;
    },
    jJgzw: function (f, i) {
      return f * i;
    },
    ZBztX: "QjvbZ",
    ntxJa: function (f, i) {
      return f !== i;
    },
    UjiFh: "SjsBQ",
    LmsJi: "mnMYl",
    DnVuI: "set-cookie",
    JgqJG: function (f, i) {
      return f === i;
    },
    GGdeM: "IzhXP",
    FqHLL: "IaIXr",
    UlCBp: function (f, i) {
      return f !== i;
    },
    qOvEc: "RqpxN",
    YUtTS: "uWoXj",
    RBHQw: "okYty",
    yGWyM: "ZzDuk",
    Lggkl: function (f, i, n, K) {
      return f(i, n, K);
    },
    wrXIr: function (f) {
      return f();
    },
    qfiMK: function (f, i) {
      return f == i;
    },
    yesIe: function (f, i) {
      return f(i);
    },
    EeKWB: function (f, i) {
      return f + i;
    },
    uBkCl: function (f, i) {
      return f === i;
    },
    NTZiB: "MMWTb",
    wsfUz: "XNLjL",
    yytLe: function (f, i, n, K) {
      return f(i, n, K);
    },
    NOqgC: "1|7|4|8|9|13|3|0|6|10|12|5|11|2|14",
    QXaGg: function (f, i) {
      return f !== i;
    },
    bVBxU: "SzUBl",
    rDvHQ: function (f, i) {
      return f !== i;
    },
    jzYWL: "wnYtC",
    eQjEq: "Content-Length",
    rkFoZ: function (f, i) {
      return f === i;
    },
    fpJDs: "TEexU",
    RcHdX: "ZmpCw",
    fAyWF: function (f, i) {
      return f === i;
    },
    noTNj: "BjTki",
    AVZGM: "aqLIr",
    TOXYN: function (f, i) {
      return f === i;
    },
    lYZmi: "TGzdz",
    fJiCW: "zefEA",
    RXSak: "XQfyG",
    dOLcj: "redirect",
    TOZPm: function (f, i) {
      return f === i;
    },
    qYoBq: "PuBxj",
    mRBAq: "yPjTP",
    FuYqC: function (f, i, n, K) {
      return f(i, n, K);
    },
    NNUzl: function (f, i) {
      return f(i);
    },
    uQhJS: "twzRE",
    YzWjj: function (f, i, n, K) {
      return f(i, n, K);
    },
    jHNkW: function (f, i) {
      return f(i);
    },
    cdJYA: function (f, i) {
      return f === i;
    },
    gFaUI: function (f, i) {
      return f | i;
    },
    Ciwxr: function (f, i) {
      return f << i;
    },
    EmMcr: function (f, i) {
      return f >>> i;
    },
    cvLem: "debu",
    kwnsH: "gger",
    JrCzY: "action",
    usFvT: function (f, i) {
      return f > i;
    },
    ntGCJ: function (f, i) {
      return f & i;
    },
    CdjAX: function (f, i) {
      return f & i;
    },
    iTrty: function (f, i) {
      return f >> i;
    },
    hKMnC: "mtYrl",
    tQgvY: "WAxdn",
    njNGP: "JSfau",
    mQOLc: "jWsGq",
    etdPX: function (f, i, n, K) {
      return f(i, n, K);
    },
    dOSli: function (f, i) {
      return f !== i;
    },
    GHtsN: "QWuai",
    BHSJC: "post",
    mljSW: function (f, i) {
      return f === i;
    },
    aUdQH: "wqOql",
    cUdUR: "oYlwd",
    uGcBl: function (f, i) {
      return f === i;
    },
    afPNv: "ZlRbt",
    NKNXi: "xnWiD",
    nUaoo: "LuGpv",
    INtlo: "ejNUq",
    TcfSm: "ZjQmT",
    MGnbV: "vcVcR",
    gNhnO: "fakFo",
    HnCwb: "UGPkD",
    YFYuE: "OywUR",
    iHejQ: function (f, i) {
      return f && i;
    },
    wOTNf: "oRVvD",
    sbLKt: function (f, i) {
      return f(i);
    },
    PQUnG: function (f, i) {
      return f === i;
    },
    HTYbD: "dJqcW",
    akNLO: "yUvKe",
    ckvxH: function (f, i, n, K) {
      return f(i, n, K);
    },
    bHCww: function (f, i) {
      return f >> i;
    },
    TUXii: function (f, i) {
      return f < i;
    },
    kuNYa: function (f, i) {
      return f < i;
    },
    LUyDY: "10|3|4|0|5|7|6|9|8|2|1",
    bVrXw: function (f, i, n) {
      return f(i, n);
    },
    weyMr: function (f, i, n) {
      return f(i, n);
    },
    sVATU: function (f, i, n) {
      return f(i, n);
    },
    ZloGw: function (f, i, n) {
      return f(i, n);
    },
    cifGL: function (f, i, n, K) {
      return f(i, n, K);
    },
    LatHL: function (f, i, n) {
      return f(i, n);
    },
    moChN: function (f, i, n) {
      return f(i, n);
    },
    tnCKQ: function (f, i, n) {
      return f(i, n);
    },
    gMeKO: function (f, i) {
      return f(i);
    },
    TBDxd: function (f, i) {
      return f - i;
    },
    Qgczl: function (f, i) {
      return f(i);
    },
    doQMI: function (f, i) {
      return f - i;
    },
    BQAxx: function (f, i, n) {
      return f(i, n);
    },
    dwXuY: function (f, i, n) {
      return f(i, n);
    },
    EWcmH: function (f, i, n) {
      return f(i, n);
    },
    kkmqF: function (f, i) {
      return f - i;
    },
    YizhY: function (f, i) {
      return f < i;
    },
    CxJJF: function (f, i) {
      return f << i;
    },
    QQTZH: function (f, i) {
      return f & i;
    },
    mQBmC: function (f, i) {
      return f / i;
    },
    vOOVQ: function (f, i) {
      return f + i;
    },
    FSDtV: "==============📣系统通知📣==============",
    OEIoX: "zKjVK",
    hXPtz: "yGwJf",
    SRqZe: function (f, i) {
      return f << i;
    },
    PDwLF: "grGTq",
    KEJkU: function (f, i) {
      return f === i;
    },
    sYhkN: "WFmiW",
    kTZcf: "WFvQk",
    ulgJx: "put",
    krbLN: "PfNUC",
    zCBco: "ADEiL",
    uhnGz: function (f, i) {
      return f === i;
    },
    QRDbQ: "TZJpU",
    TIDiX: "LgSbU",
    CZJeb: "jOCrC",
    QjVYr: function (f, i) {
      return f === i;
    },
    mdFVR: "Tzxqg",
    jGckn: "SdWhV",
    rRmFo: function (f, i) {
      return f === i;
    },
    KTDVi: "rUXNT",
    ZDyRE: "xWUFM",
    Fanlr: "rRESm",
    oHKAI: function (f, i) {
      return f * i;
    },
    dbttE: "XWuzg",
    ivmMk: "lHhDs",
    FDthB: function (f, i) {
      return f + i;
    },
    mecvv: function (f, i) {
      return f - i;
    },
    DFAJP: function (f, i) {
      return f + i;
    },
    wIjhd: function (f, i) {
      return f == i;
    },
    kMNus: function (f, i) {
      return f + i;
    },
    PsbKq: function (f, i) {
      return f + i;
    },
    wrwsL: function (f, i) {
      return f & i;
    },
    ioINA: function (f, i) {
      return f == i;
    },
    WEfxm: function (f, i) {
      return f === i;
    },
    Ecoua: "BjFrZ",
    lbqKW: "SJxXN",
    EWJdE: "object",
    keVqa: function (f, i) {
      return f !== i;
    },
    ZARew: "Oorkr",
    BoHxN: "NgoSv",
    zmCbH: "fXPwC",
    LVAPU: "zmTRu",
    kAOJa: "open-url",
    sGpAr: "media-url",
    ZSSOw: "SWevS",
    hlqqo: "TbCKr",
    bYnHg: function (f, i) {
      return f === i;
    },
    PmvfH: "Pfrds",
    SHjld: "FrqHp",
    DiLzp: function (f, i) {
      return f === i;
    },
    XbSJp: "xGDCa",
    Jkxwn: function (f, i) {
      return f(i);
    },
    QNzpm: function (f, i, n, K, t) {
      return f(i, n, K, t);
    }
  };
  class N {
    constructor(f) {
      {
        this.env = f;
      }
    }
    send(f, i = "GET") {
      {
        f = typeof f === "string" ? {
          url: f
        } : f;
        let K = this.get;
        i === "POST" && (K = this.post);
        return new Promise((z, m) => {
          K.call(this, f, (q, D, u) => {
            {
              if (q) {
                m(q);
              } else {
                z(D);
              }
            }
          });
        });
      }
    }
    get(f) {
      {
        return this.send.call(this.env, f);
      }
    }
    post(f) {
      {
        return this.send.call(this.env, f, "POST");
      }
    }
  }
  return new class {
    constructor(f, i) {
      {
        this.name = f;
        this.http = new N(this);
        this.data = null;
        this.dataFile = "box.dat";
        this.logs = [];
        this.isMute = false;
        this.isNeedRewrite = false;
        this.logSeparator = "\n";
        this.startTime = new Date().getTime();
        Object.assign(this, i);
        const t = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
        this.isNode() && this.log(t);
        this.log("", "🔔 " + this.name + ", 开始!");
      }
    }
    isNode() {
      {
        return "undefined" !== typeof module && !!module.exports;
      }
    }
    isQuanX() {
      {
        return "undefined" !== typeof $task;
      }
    }
    isSurge() {
      {
        return "undefined" !== typeof $httpClient && "undefined" === typeof $loon;
      }
    }
    isLoon() {
      {
        return "undefined" !== typeof $loon;
      }
    }
    isShadowrocket() {
      {
        return "undefined" !== typeof $rocket;
      }
    }
    toObj(f, i = null) {
      {
        try {
          {
            return JSON.parse(f);
          }
        } catch {
          {
            return i;
          }
        }
      }
    }
    toStr(f, i = null) {
      const n = {
        gljKt: function (K, t) {
          return K === t;
        },
        vhIjs: "null",
        mAXum: function (K, t) {
          return K || t;
        },
        MxLaB: function (K, t) {
          return K | t;
        },
        HIkIm: function (K, t) {
          return K & t;
        },
        ybsXJ: function (K, t) {
          return K & t;
        }
      };
      {
        try {
          {
            return JSON.stringify(f);
          }
        } catch {
          return i;
        }
      }
    }
    getjson(f, i) {
      {
        let n = i;
        const K = this.getdata(f);
        if (K) {
          {
            try {
              {
                n = JSON.parse(this.getdata(f));
              }
            } catch {}
          }
        }
        return n;
      }
    }
    setjson(f, i) {
      const n = {
        dlZqv: function (K, t) {
          return K == t;
        },
        tFXeq: function (K, t) {
          return K(t);
        }
      };
      {
        try {
          {
            return this.setdata(JSON.stringify(f), i);
          }
        } catch {
          return false;
        }
      }
    }
    getScript(f) {
      {
        return new Promise(n => {
          {
            const z = {
              url: f
            };
            this.get(z, (m, Q, q) => n(q));
          }
        });
      }
    }
    runScript(f, i) {
      {
        return new Promise(t => {
          {
            let m = this.getdata("@chavy_boxjs_userCfgs.httpapi");
            m = m ? m.replace(/\n/g, "").trim() : m;
            let Q = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
            Q = Q ? Q * 1 : 20;
            Q = i && i.timeout ? i.timeout : Q;
            const [q, D] = m.split("@");
            const u = {
              script_text: f,
              mock_type: "cron",
              timeout: Q
            };
            const R = {
              "X-Key": q,
              Accept: "*/*"
            };
            const M = {
              url: "http: //" + D + "/v1/scripting/evaluate",
              body: u,
              headers: R
            };
            this.post(M, (k, b, h) => t(h));
          }
        }).catch(t => this.logErr(t));
      }
    }
    loaddata() {
      {
        if (this.isNode()) {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const K = this.path.resolve(this.dataFile);
            const t = this.path.resolve(process.cwd(), this.dataFile);
            const z = this.fs.existsSync(K);
            const m = !z && this.fs.existsSync(t);
            if (z || m) {
              {
                const q = z ? K : t;
                try {
                  {
                    return JSON.parse(this.fs.readFileSync(q));
                  }
                } catch (u) {
                  {
                    return {};
                  }
                }
              }
            } else {
              return {};
            }
          }
        } else {
          return {};
        }
      }
    }
    writedata() {
      const i = {
        vaMtb: "$1****$2"
      };
      {
        if (this.isNode()) {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const K = this.path.resolve(this.dataFile);
            const t = this.path.resolve(process.cwd(), this.dataFile);
            const z = this.fs.existsSync(K);
            const m = !z && this.fs.existsSync(t);
            const Q = JSON.stringify(this.data);
            if (z) {
              this.fs.writeFileSync(K, Q);
            } else {
              if (m) {
                {
                  this.fs.writeFileSync(t, Q);
                }
              } else {
                this.fs.writeFileSync(K, Q);
              }
            }
          }
        }
      }
    }
    lodash_get(f, i, n = undefined) {
      {
        const t = i.replace(/[(d+)]/g, ".$1").split(".");
        let z = f;
        for (const m of t) {
          {
            z = Object(z)[m];
            if (z === undefined) {
              {
                return n;
              }
            }
          }
        }
        return z;
      }
    }
    lodash_set(f, i, n) {
      {
        if (Object(f) !== f) {
          return f;
        }
        if (!Array.isArray(i)) {
          i = i.toString().match(/[^.[]]+/g) || [];
        }
        i.slice(0, -1).reduce((t, z, m) => Object(t[z]) === t[z] ? t[z] : t[z] = Math.abs(i[m + 1 < 10 ? "0" + (m + 1) : m + 1]) >> 0 === +i[m + 1 < 10 ? "0" + (m + 1) : m + 1] ? [] : {}, f)[i[i.length - 1]] = n;
        return f;
      }
    }
    getdata(f) {
      const i = {
        wwMGM: function (n, K) {
          return n == K;
        },
        uspTp: function (n, K) {
          return n != K;
        }
      };
      {
        let n = this.getval(f);
        if (/^@/.test(f)) {
          {
            const [, K, t] = /^@(.*?).(.*?)$/.exec(f);
            const z = K ? this.getval(K) : "";
            if (z) {
              {
                try {
                  {
                    const Q = JSON.parse(z);
                    n = Q ? this.lodash_get(Q, t, "") : n;
                  }
                } catch (D) {
                  {
                    n = "";
                  }
                }
              }
            }
          }
        }
        return n;
      }
    }
    setdata(f, i) {
      {
        let t = false;
        if (/^@/.test(i)) {
          {
            const [, z, m] = /^@(.*?).(.*?)$/.exec(i);
            const Q = this.getval(z);
            const q = z ? Q === "null" ? null : Q || "{}" : "{}";
            try {
              {
                const u = JSON.parse(q);
                this.lodash_set(u, m, f);
                t = this.setval(JSON.stringify(u), z);
              }
            } catch (R) {
              {
                const d = {};
                this.lodash_set(d, m, f);
                t = this.setval(JSON.stringify(d), z);
              }
            }
          }
        } else {
          t = this.setval(f, i);
        }
        return t;
      }
    }
    getval(f) {
      {
        if (this.isSurge() || this.isLoon()) {
          {
            return $persistentStore.read(f);
          }
        } else {
          if (this.isQuanX()) {
            {
              return $prefs.valueForKey(f);
            }
          } else {
            if (this.isNode()) {
              {
                this.data = this.loaddata();
                return this.data[f];
              }
            } else {
              {
                return this.data && this.data[f] || null;
              }
            }
          }
        }
      }
    }
    setval(f, i) {
      const n = {
        NuXcA: function (K, t) {
          return K && t;
        },
        iINMv: function (K, t, z, m) {
          return K(t, z, m);
        }
      };
      {
        if (this.isSurge() || this.isLoon()) {
          {
            return $persistentStore.write(f, i);
          }
        } else {
          if (this.isQuanX()) {
            {
              return $prefs.setValueForKey(f, i);
            }
          } else {
            if (this.isNode()) {
              {
                this.data = this.loaddata();
                this.data[i] = f;
                this.writedata();
                return true;
              }
            } else {
              {
                return this.data && this.data[i] || null;
              }
            }
          }
        }
      }
    }
    initGotEnv(f) {
      {
        this.got = this.got ? this.got : require("got");
        this.cktough = this.cktough ? this.cktough : require("tough-cookie");
        this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
        if (f) {
          {
            f.headers = f.headers ? f.headers : {};
            undefined === f.headers.Cookie && undefined === f.cookieJar && (f.cookieJar = this.ckjar);
          }
        }
      }
    }
    get(f, i = () => {}) {
      const n = {
        kghGq: function (K) {
          return K();
        },
        dHUIP: function (K, t) {
          return K == t;
        },
        cACvj: "$1****$2",
        bjnpW: function (K, t) {
          return K(t);
        },
        gwlNV: function (K, t) {
          return K(t);
        },
        rymSE: "path",
        GclAM: function (K, t) {
          return K * t;
        },
        wgcLq: function (K, t) {
          return K + t;
        },
        zalOk: function (K, t) {
          return K === t;
        },
        UPzLr: "MMWTb",
        MiZrx: "XNLjL",
        QgZWw: function (K, t, z, m) {
          return K(t, z, m);
        },
        HSsDY: "1|7|4|8|9|13|3|0|6|10|12|5|11|2|14"
      };
      {
        if (f.headers) {
          {
            delete f.headers["Content-Type"];
            delete f.headers["Content-Length"];
          }
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                f.headers = f.headers || {};
                const m = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(f.headers, m);
              }
            }
            $httpClient.get(f, (q, D, u) => {
              {
                if (!q && D) {
                  {
                    D.body = u;
                    D.statusCode = D.status;
                  }
                }
                i(q, D, u);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              if (this.isNeedRewrite) {
                {
                  f.opts = f.opts || {};
                  const D = {
                    hints: false
                  };
                  Object.assign(f.opts, D);
                }
              }
              $task.fetch(f).then(u => {
                {
                  const {
                    statusCode: R,
                    statusCode: d,
                    headers: M,
                    body: k
                  } = u;
                  const b = {
                    status: R,
                    statusCode: d,
                    headers: M,
                    body: k
                  };
                  i(null, b, k);
                }
              }, u => i(u));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(f);
                this.got(f).on("redirect", (R, d) => {
                  {
                    try {
                      {
                        if (R.headers["set-cookie"]) {
                          {
                            const k = R.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            if (k) {
                              {
                                this.ckjar.setCookieSync(k, null);
                              }
                            }
                            d.cookieJar = this.ckjar;
                          }
                        }
                      }
                    } catch (B) {
                      this.logErr(B);
                    }
                  }
                }).then(R => {
                  {
                    const {
                      statusCode: M,
                      statusCode: k,
                      headers: b,
                      body: h
                    } = R;
                    const Y = {
                      status: M,
                      statusCode: k,
                      headers: b,
                      body: h
                    };
                    i(null, Y, h);
                  }
                }, R => {
                  {
                    const {
                      message: M,
                      response: k
                    } = R;
                    i(M, k, k && k.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    post(f, i = () => {}) {
      const n = {
        cXbKp: function (K, t) {
          return K(t);
        },
        nRtUR: function (K, t) {
          return K === t;
        },
        KXbCv: "string",
        ZNFWX: function (K, t) {
          return K === t;
        },
        LQlfy: "POST",
        rXoXW: function (K, t) {
          return K | t;
        },
        jNBFv: function (K, t) {
          return K << t;
        },
        ZlPrB: function (K, t) {
          return K >>> t;
        },
        gzvqO: function (K, t) {
          return K - t;
        },
        BXzLh: function (K, t) {
          return K + t;
        },
        PBXnc: "debu",
        KcvQx: "gger",
        ZzpAX: "action",
        QLdaO: function (K, t) {
          return K > t;
        },
        GXTtu: function (K, t) {
          return K > t;
        },
        mNygZ: function (K, t) {
          return K >> t;
        },
        NJRgS: function (K, t) {
          return K & t;
        },
        DIzMa: function (K, t) {
          return K & t;
        },
        euGZW: function (K, t) {
          return K >> t;
        },
        UJUhd: function (K, t) {
          return K & t;
        },
        RVanu: "mtYrl",
        zgflE: function (K, t) {
          return K && t;
        },
        nnVjN: "WAxdn",
        wjxNI: "JSfau",
        mPzdI: function (K, t, z, m) {
          return K(t, z, m);
        },
        LEFhk: function (K, t) {
          return K === t;
        },
        djbWt: "jWsGq",
        LVKrr: function (K, t, z, m) {
          return K(t, z, m);
        }
      };
      {
        const t = f.method ? f.method.toLocaleLowerCase() : "post";
        if (f.body && f.headers && !f.headers["Content-Type"]) {
          {
            f.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
        if (f.headers) {
          delete f.headers["Content-Length"];
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                f.headers = f.headers || {};
                const q = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(f.headers, q);
              }
            }
            $httpClient[t](f, (D, u, R) => {
              {
                if (!D && u) {
                  {
                    u.body = R;
                    u.statusCode = u.status;
                  }
                }
                i(D, u, R);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              f.method = t;
              if (this.isNeedRewrite) {
                {
                  f.opts = f.opts || {};
                  const u = {
                    hints: false
                  };
                  Object.assign(f.opts, u);
                }
              }
              $task.fetch(f).then(d => {
                {
                  const {
                    statusCode: M,
                    statusCode: k,
                    headers: b,
                    body: h
                  } = d;
                  const Y = {
                    status: M,
                    statusCode: k,
                    headers: b,
                    body: h
                  };
                  i(null, Y, h);
                }
              }, d => i(d));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(f);
                const {
                  url: d,
                  ...M
                } = f;
                this.got[t](d, M).then(k => {
                  {
                    const {
                      statusCode: h,
                      statusCode: Y,
                      headers: B,
                      body: g
                    } = k;
                    const T = {
                      status: h,
                      statusCode: Y,
                      headers: B,
                      body: g
                    };
                    i(null, T, g);
                  }
                }, k => {
                  {
                    const {
                      message: b,
                      response: h
                    } = k;
                    i(b, h, h && h.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    put(f, i = () => {}) {
      const n = {
        YrSPw: function (K) {
          return K();
        },
        JLZEq: function (K, t) {
          return K - t;
        },
        CbcKj: function (K, t) {
          return K << t;
        },
        bfvvZ: function (K, t) {
          return K < t;
        },
        AXKnY: function (K, t) {
          return K * t;
        },
        dmJqc: function (K, t) {
          return K >> t;
        },
        RlXMV: function (K, t) {
          return K << t;
        },
        wtQUb: function (K, t) {
          return K & t;
        },
        gSSRd: function (K, t) {
          return K / t;
        },
        hbRiZ: function (K, t) {
          return K % t;
        },
        fILtB: function (K, t) {
          return K >= t;
        },
        ccpyi: function (K, t) {
          return K >>> t;
        },
        tOAgG: function (K, t) {
          return K * t;
        },
        rLynO: function (K, t) {
          return K + t;
        },
        cXoUF: function (K, t) {
          return K - t;
        },
        fWQud: "Content-Type",
        ibXHY: "application/x-www-form-urlencoded",
        rOBjd: "==============📣系统通知📣==============",
        PIbaj: function (K, t) {
          return K !== t;
        },
        bfczz: "zKjVK",
        iCLbZ: "yGwJf",
        XhwCX: function (K, t, z, m) {
          return K(t, z, m);
        },
        fPJxG: function (K, t) {
          return K | t;
        },
        kDJZK: function (K, t) {
          return K << t;
        },
        wNhZG: "grGTq"
      };
      {
        const t = f.method ? f.method.toLocaleLowerCase() : "put";
        if (f.body && f.headers && !f.headers["Content-Type"]) {
          {
            f.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
        if (f.headers) {
          delete f.headers["Content-Length"];
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                f.headers = f.headers || {};
                const m = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(f.headers, m);
              }
            }
            $httpClient[t](f, (q, D, u) => {
              const R = {
                INLkI: function (d) {
                  return d();
                },
                lgRer: function (d, M) {
                  return d - M;
                },
                HSkRO: function (d, M) {
                  return d - M;
                }
              };
              {
                if (!q && D) {
                  {
                    D.body = u;
                    D.statusCode = D.status;
                  }
                }
                i(q, D, u);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              f.method = t;
              if (this.isNeedRewrite) {
                {
                  f.opts = f.opts || {};
                  const u = {
                    hints: false
                  };
                  Object.assign(f.opts, u);
                }
              }
              $task.fetch(f).then(d => {
                {
                  const {
                    statusCode: k,
                    statusCode: b,
                    headers: h,
                    body: Y
                  } = d;
                  const B = {
                    status: k,
                    statusCode: b,
                    headers: h,
                    body: Y
                  };
                  i(null, B, Y);
                }
              }, d => i(d));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(f);
                const {
                  url: M,
                  ...k
                } = f;
                this.got[t](M, k).then(b => {
                  {
                    const {
                      statusCode: h,
                      statusCode: Y,
                      headers: B,
                      body: g
                    } = b;
                    const T = {
                      status: h,
                      statusCode: Y,
                      headers: B,
                      body: g
                    };
                    i(null, T, g);
                  }
                }, b => {
                  {
                    const {
                      message: Y,
                      response: B
                    } = b;
                    i(Y, B, B && B.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    time(f, i = null) {
      {
        const K = i ? new Date(i) : new Date();
        let t = {
          "M+": K.getMonth() + 1,
          "d+": K.getDate(),
          "H+": K.getHours(),
          "m+": K.getMinutes(),
          "s+": K.getSeconds(),
          "q+": Math.floor((K.getMonth() + 3) / 3),
          S: K.getMilliseconds()
        };
        if (/(y+)/.test(f)) {
          f = f.replace(RegExp.$1, (K.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let z in t) if (new RegExp("(" + z + ")").test(f)) {
          f = f.replace(RegExp.$1, RegExp.$1.length == 1 ? t[z] : ("00" + t[z]).substr(("" + t[z]).length));
        }
        return f;
      }
    }
    msg(f = C, i = "", n = "", K) {
      const z = m => {
        if (!m) {
          return m;
        }
        if (typeof m === "string") {
          {
            if (this.isLoon()) {
              return m;
            } else {
              if (this.isQuanX()) {
                return {
                  "open-url": m
                };
              } else {
                if (this.isSurge()) {
                  return {
                    url: m
                  };
                } else {
                  return undefined;
                }
              }
            }
          }
        } else {
          if (typeof m === "object") {
            {
              if (this.isLoon()) {
                {
                  let D = m.openUrl || m.url || m["open-url"];
                  let u = m.mediaUrl || m["media-url"];
                  const R = {
                    openUrl: D,
                    mediaUrl: u
                  };
                  return R;
                }
              } else {
                if (this.isQuanX()) {
                  {
                    let M = m["open-url"] || m.url || m.openUrl;
                    let k = m["media-url"] || m.mediaUrl;
                    const b = {
                      "open-url": M,
                      "media-url": k
                    };
                    return b;
                  }
                } else {
                  if (this.isSurge()) {
                    {
                      let B = m.url || m.openUrl || m["open-url"];
                      const g = {
                        url: B
                      };
                      return g;
                    }
                  }
                }
              }
            }
          } else {
            {
              return undefined;
            }
          }
        }
      };
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(f, i, n, z(K));
        } else {
          this.isQuanX() && $notify(f, i, n, z(K));
        }
      }
      if (!this.isMuteLog) {
        let m = ["", "==============📣系统通知📣=============="];
        m.push(f);
        i ? m.push(i) : "";
        n ? m.push(n) : "";
        console.log(m.join("\n"));
        this.logs = this.logs.concat(m);
      }
    }
    log(...f) {
      f.length > 0 && (this.logs = [...this.logs, ...f]);
      console.log(f.join(this.logSeparator));
    }
    logErr(f, i) {
      const n = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      !n ? this.log("", "❗️" + this.name + ", 错误!", f) : this.log("", "❗️" + this.name + ", 错误!", f.stack);
    }
    wait(f) {
      return new Promise(i => setTimeout(i, f));
    }
    done(f = {}) {
      const i = new Date().getTime();
      const n = (i - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + n + "秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(f);
    }
  }(C, U);
}