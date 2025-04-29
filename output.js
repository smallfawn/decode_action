//Tue Apr 29 2025 06:33:10 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function unzipGzipFile(_0xee6694, _0x19f4af) {
  var _0xee6694 = _0xee6694 || "/sdcard/tempSourceGzipFilePath.js";
  var _0x19f4af = _0x19f4af || "/sdcard/tempTargetPath.js";
  log("sourceGzipFilePath");
  log(_0xee6694);
  log("targetPath");
  log(_0x19f4af);
  var _0x51a827 = 8192;
  var _0x17cb5a = new FileInputStream(_0xee6694);
  var _0x5d7851 = new GZIPInputStream(_0x17cb5a);
  var _0x4330c5 = util.java.array("byte", _0x51a827);
  var _0x24335d = new FileOutputStream(_0x19f4af);
  var _0x465cdf;
  while ((_0x465cdf = _0x5d7851.read(_0x4330c5, 0, _0x51a827)) != -1) {
    _0x24335d.write(_0x4330c5, 0, _0x465cdf);
  }
  _0x24335d.close();
  _0x5d7851.close();
}