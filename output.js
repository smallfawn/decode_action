//Sat Jun 28 2025 05:22:58 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var callbackFn;
chrome.webRequest.onBeforeRequest.addListener(function (_0x3cdd13) {
  if (_0x3cdd13.type === "image") {
    if (!_0x3cdd13.url.includes("data:image/png;base64")) return {
      "redirectUrl": chrome.runtime.getURL("dat/null.png")
    };
  }
  if (_0x3cdd13.url.includes("assets/js/365_591830335957524baa6f.js")) return console.log("365_591830335957524baa6f"), {
    "redirectUrl": chrome.runtime.getURL("js/365_591830335957524baa6f.js")
  };
  if (_0x3cdd13.url.includes("assets/js/416_f3aebfc094e7f8f9dcd2.js")) return console.log("416_f3aebfc094e7f8f9dcd2"), {
    "redirectUrl": chrome.runtime.getURL("js/416_f3aebfc094e7f8f9dcd2.js")
  };
}, {
  "urls": ["<all_urls>"]
}, ["blocking"]);
chrome.runtime.onMessage.addListener(function (_0x165635, _0xcd908a, _0x398b78) {
  var _0x5330cb = _0x165635.act;
  switch (_0x5330cb) {
    case "设置拦截器":
      return true;
    case "发送网络请求2":
      {
        const {
          url: _0x2340e7,
          data: _0x4c33ec
        } = _0x165635;
        fetch(_0x2340e7, _0x4c33ec).then(_0x222180 => {
          if (!_0x222180.ok) throw new Error("网络调用失败...");
          return _0x222180.text().then(_0x29d1ba => {
            try {
              const _0x2d1006 = JSON.parse(_0x29d1ba);
              return {
                "isJson": true,
                "data": _0x2d1006
              };
            } catch (_0x425e7d) {
              return {
                "isJson": false,
                "data": _0x29d1ba
              };
            }
          });
        }).then(_0x46561e => {
          console.log("返回了");
          console.log(_0x46561e.data);
          _0x46561e.isJson ? _0x398b78({
            "isError": false,
            "errorMessage": "",
            "data": _0x46561e.data
          }) : _0x398b78({
            "isError": false,
            "errorMessage": "",
            "data": null,
            "txt": _0x46561e.data
          });
        }).catch(_0xd82087 => {
          console.error("请求失败:", _0xd82087);
          _0x398b78({
            "isError": true,
            "errorMessage": _0xd82087.message || "未知错误",
            "data": null
          });
        });
        return true;
      }
    case "发送网络请求3_Get":
      {
        const {
          url: _0x52f6d6
        } = _0x165635;
        XxBaHttp.Get(_0x52f6d6).then(_0x5cae3a => _0x398b78(_0x5cae3a));
        return true;
      }
    case "发送网络请求3_Post":
      {
        const {
          url: _0x9f5ae8,
          data: _0x1fb639,
          headers: _0x49547a
        } = _0x165635;
        XxBaHttp.Post(_0x9f5ae8, _0x1fb639, _0x49547a).then(_0x436df8 => _0x398b78(_0x436df8));
        return true;
      }
    case "新标签页打开扩展网址":
      {
        chrome.tabs.create({
          "url": "chrome://extensions/"
        });
        return false;
      }
    case "设置代理":
      设置代理(_0x165635, _0x398b78);
      return true;
    case "移除代理":
      移除代理(_0x165635, _0x398b78);
      return true;
    case "Get_info":
      _0x398b78(localStorage.getItem(_0x165635.info));
      return true;
    case "Set_info":
      _0x398b78(localStorage.setItem(_0x165635.info, _0x165635.txt));
      return true;
    case "查询代理":
      chrome.proxy.settings.get({
        "incognito": false
      }, function (_0x45b2ca) {
        _0x45b2ca.value.mode === "fixed_servers" ? _0x398b78(true) : _0x398b78(false);
      });
      return true;
    case "跳转到网址":
      _0xcd908a.tab && _0xcd908a.tab.id && 跳转到网址(_0x165635.url, _0xcd908a.tab.id);
      return true;
    case "跳转成功":
      _0xcd908a.tab && _0xcd908a.tab.id && (clearInterval(跳转间隔), console.log("跳转成功: " + _0x165635.url));
      return true;
    case "设置地区":
      {
        const {
          地区: _0x58211d,
          代码: _0x3706b0
        } = _0x165635;
        chrome.cookies.remove({
          "url": "https://www.temu.com/",
          "name": "currency"
        });
        chrome.cookies.set({
          "url": "https://www.temu.com/",
          "name": "currency",
          "value": _0x58211d,
          "httpOnly": false,
          "secure": true,
          "domain": "www.temu.com"
        });
        chrome.cookies.remove({
          "url": "https://www.temu.com/",
          "name": "region"
        });
        chrome.cookies.set({
          "url": "https://www.temu.com/",
          "name": "region",
          "value": _0x3706b0,
          "httpOnly": false,
          "secure": true,
          "domain": "www.temu.com"
        });
        return true;
      }
    case "获取地区":
      chrome.cookies.get({
        "url": "https://www.temu.com/",
        "name": "region"
      }, function (_0x126e24) {
        _0x398b78(_0x126e24.value);
      });
      return true;
    case "清除缓存和Cookies":
      清除缓存和Cookies(_0x398b78);
      return true;
    case "点击鼠标左键":
      {
        const _0x482852 = _0xcd908a.tab.id,
          {
            x: _0x57d4af,
            y: _0x328669
          } = _0x165635;
        chrome.debugger.attach({
          "tabId": _0x482852
        }, "1.2", async () => {
          await sendMouseEvent({
            "tabId": _0x482852,
            "type": "mousePressed",
            "x": _0x57d4af,
            "y": _0x328669
          });
          await sendMouseEvent({
            "tabId": _0x482852,
            "type": "mouseReleased",
            "x": _0x57d4af,
            "y": _0x328669
          });
          await chrome.debugger.detach({
            "tabId": _0x482852
          });
        });
        return true;
      }
    case "点击鼠标左键3":
      {
        const _0x4a5f16 = _0xcd908a.tab.id,
          {
            x: _0x55e98a,
            y: _0x474a13
          } = _0x165635;
        async function _0x53766d() {
          await sendMouseEvent({
            "tabId": _0x4a5f16,
            "type": "mousePressed",
            "x": _0x55e98a,
            "y": _0x474a13
          });
          await sendMouseEvent({
            "tabId": _0x4a5f16,
            "type": "mouseReleased",
            "x": _0x55e98a,
            "y": _0x474a13
          });
        }
        _0x53766d();
        return true;
      }
    case "点击鼠标左键2":
      {
        const _0x36a99b = _0xcd908a.tab.id,
          {
            x: _0x3ad8de,
            y: _0x513fbb
          } = _0x165635;
        chrome.tabs.executeScript(_0x36a99b, {
          "code": "\n\t\t\t\t\t(function(x, y) {\n\t\t\t\t\t  var event = new MouseEvent('click', {\n\t\t\t\t\t\t'view': window,\n\t\t\t\t\t\t'bubbles': true,\n\t\t\t\t\t\t'cancelable': true\n\t\t\t\t\t  });\n\t\t\t\t\n\t\t\t\t\t  var target = document.elementFromPoint(x, y);\n\t\t\t\t\n\t\t\t\t\t  if (target) {\n\t\t\t\t\t\ttarget.dispatchEvent(event);\n\t\t\t\t\t  }\n\t\t\t\t\t})(" + _0x3ad8de + ", " + _0x513fbb + ");\n\t\t\t\t  "
        });
        return true;
      }
    case "附加调试器":
      {
        如果未附加则附加调试器(_0xcd908a.tab.id);
        return false;
      }
    case "取消附加调试器":
      {
        如果已附加则取消附加调试器(_0xcd908a.tab.id);
        return false;
      }
    case "清除一切":
      {
        chrome.browsingData.remove({
          "since": 0
        }, {
          "appcache": true,
          "cache": true,
          "cookies": true,
          "downloads": true,
          "fileSystems": true,
          "formData": true,
          "history": true,
          "indexedDB": true,
          "localStorage": true,
          "passwords": true,
          "serviceWorkers": true,
          "webSQL": true
        }, () => {
          console.log("浏览数据已清除");
        });
        return false;
      }
    case "获取所有的ck":
      {
        chrome.cookies.getAll({}, _0xc63b5e => {
          console.log(_0xc63b5e);
        });
        return false;
      }
    case "删除指定ck":
      {
        chrome.browsingData.remove({
          "since": 0
        }, {
          "appcache": true,
          "cookies": true,
          "cache": true,
          "downloads": true,
          "fileSystems": true,
          "formData": true,
          "history": true,
          "indexedDB": true,
          "localStorage": true,
          "passwords": true,
          "serviceWorkers": true,
          "webSQL": true
        }, () => {
          chrome.cookies.set({
            "url": "https://www.temu.com/",
            "name": "currency",
            "value": "USD",
            "httpOnly": false,
            "secure": true,
            "domain": "www.temu.com"
          });
          chrome.cookies.set({
            "url": "https://www.temu.com/",
            "name": "region",
            "value": "211",
            "httpOnly": false,
            "secure": true,
            "domain": "www.temu.com"
          });
          chrome.cookies.set({
            "url": "https://www.temu.com/",
            "name": "language",
            "value": "en",
            "httpOnly": false,
            "secure": true,
            "domain": "www.temu.com"
          });
        });
        return false;
      }
    default:
      {
        console.log("未知的操作: " + _0x5330cb);
      }
  }
  return false;
});
function 设置代理(_0x3419b6, _0x1618aa) {
  data = _0x3419b6.data;
  callbackFn && chrome.webRequest.onAuthRequired.removeListener(callbackFn);
  var _0x43c0fd = {
    "mode": "fixed_servers",
    "rules": {
      "singleProxy": {
        "scheme": "http",
        "host": data.IP,
        "port": parseInt(data.port)
      },
      "bypassList": data.bypassList
    }
  };
  data["账号"] && chrome.proxy.settings.set({
    "value": _0x43c0fd,
    "scope": "regular"
  }, function () {
    callbackFn = function (_0x5ceaed) {
      return {
        "authCredentials": {
          "username": data["账号"],
          "password": data["密码"]
        }
      };
    };
    chrome.webRequest.onAuthRequired.addListener(callbackFn, {
      "urls": ["<all_urls>"]
    }, ["blocking"]);
    _0x1618aa();
  });
}
function 移除代理(_0x1bfb26, _0x20b29d) {
  chrome.proxy.settings.set({
    "value": {
      "mode": "direct"
    },
    "scope": "regular"
  }, function () {
    _0x20b29d();
  });
}
let 跳转间隔;
function 跳转到网址(_0x1b1a51, _0x50c80d) {
  let _0x514fb9 = 0;
  function _0xff23() {
    _0x514fb9++;
    console.log("第 " + _0x514fb9 + " 次开始更换链接");
    chrome.tabs.update(_0x50c80d, {
      "url": _0x1b1a51
    });
  }
  clearInterval(跳转间隔);
  跳转间隔 = setInterval(_0xff23, 10000);
  _0xff23();
}
function 清除缓存和Cookies(_0x118f14) {
  chrome.browsingData.remove({
    "since": 0,
    "cache": true,
    "cookies": true
  }, () => {
    _0x118f14({
      "status": "success",
      "message": "Cache and Cookies cleared!"
    });
  });
}
const sendMouseEvent = async ({
  tabId: _0x144355,
  type: _0x491a38,
  x: _0xdbb5a8,
  y: _0x98e57a
}) => {
  await chrome.debugger.sendCommand({
    "tabId": _0x144355
  }, "Input.dispatchMouseEvent", {
    "type": _0x491a38,
    "x": _0xdbb5a8,
    "y": _0x98e57a,
    "button": "left",
    "clickCount": 1
  });
};
function 如果未附加则附加调试器(_0x7b3901) {
  function _0x43f148(_0x72b560, _0x119c07) {
    chrome.debugger.getTargets(_0x3e796c => {
      const _0x3b6346 = _0x3e796c.some(_0x173cfa => _0x173cfa.tabId === _0x72b560 && _0x173cfa.attached);
      _0x119c07(_0x3b6346);
    });
  }
  function _0x19bbfe(_0xbc0f06) {
    const _0x5cfcf4 = "1.2";
    chrome.debugger.attach({
      "tabId": _0xbc0f06
    }, _0x5cfcf4, _0x4508b3 => {
      chrome.runtime.lastError ? console.error("附加调试器时出错:", chrome.runtime.lastError.message) : console.log("调试器成功附加到标签页", _0xbc0f06);
    });
  }
  _0x43f148(_0x7b3901, _0x48dbb3 => {
    _0x48dbb3 ? console.log("调试器已经附加到标签页 " + _0x7b3901 + "。") : (console.log("调试器未附加到标签页 " + _0x7b3901 + "。现在开始附加..."), _0x19bbfe(_0x7b3901));
  });
}
function 如果已附加则取消附加调试器(_0xa4ca3a) {
  function _0x18b0df(_0x50930a, _0x178ae6) {
    chrome.debugger.getTargets(_0x1015d6 => {
      const _0x31512d = _0x1015d6.some(_0x19ff38 => _0x19ff38.tabId === _0x50930a && _0x19ff38.attached);
      _0x178ae6(_0x31512d);
    });
  }
  function _0x42ec0c(_0x2b98ff) {
    chrome.debugger.detach({
      "tabId": _0x2b98ff
    }, () => {
      chrome.runtime.lastError ? console.error("取消附加调试器时出错:", chrome.runtime.lastError.message) : console.log("调试器成功取消附加到标签页", _0x2b98ff);
    });
  }
  _0x18b0df(_0xa4ca3a, _0xe4bc6e => {
    _0xe4bc6e ? (console.log("调试器已附加到标签页 " + _0xa4ca3a + "。现在开始取消附加..."), _0x42ec0c(_0xa4ca3a)) : console.log("调试器未附加到标签页 " + _0xa4ca3a + "。无需取消附加。");
  });
}
class XxBaHttp {
  static ["Get"](_0x47359b, _0x32b7b5 = {}, _0x30218c = 15000) {
    const _0x3b06dc = new AbortController(),
      _0x2c198f = _0x3b06dc.signal,
      _0x26f171 = setTimeout(() => _0x3b06dc.abort(), _0x30218c);
    return fetch(_0x47359b, {
      "method": "GET",
      "headers": _0x32b7b5,
      "signal": _0x2c198f
    }).then(_0x8611a => {
      clearTimeout(_0x26f171);
      if (!_0x8611a.ok) throw new Error("HTTP error! Status: " + _0x8611a.status);
      const _0x24dd8a = _0x8611a.headers.get("Content-Type");
      return _0x24dd8a && _0x24dd8a.includes("application/json") ? _0x8611a.json().then(_0x27a31e => ({
        "success": true,
        "data": _0x27a31e,
        "error": null
      })) : _0x8611a.text().then(_0x4e1aeb => ({
        "success": true,
        "data": _0x4e1aeb,
        "error": null
      }));
    }).catch(_0x29cc68 => {
      clearTimeout(_0x26f171);
      return {
        "success": false,
        "data": null,
        "error": _0x29cc68.name === "AbortError" ? "请求超时" : _0x29cc68.message || "出现未知错误"
      };
    });
  }
  static ["Post"](_0x259523, _0x1f9b3a, _0x501a01 = {}, _0x40edef = 15000) {
    const _0x46adcd = new AbortController(),
      _0x12e586 = _0x46adcd.signal,
      _0x337fc9 = setTimeout(() => _0x46adcd.abort(), _0x40edef);
    return fetch(_0x259523, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        ..._0x501a01
      },
      "body": _0x1f9b3a,
      "signal": _0x12e586
    }).then(_0x5f0644 => {
      clearTimeout(_0x337fc9);
      if (!_0x5f0644.ok) throw new Error("HTTP error! Status: " + _0x5f0644.status);
      const _0x23eb56 = _0x5f0644.headers.get("Content-Type");
      return _0x23eb56 && _0x23eb56.includes("application/json") ? _0x5f0644.json().then(_0x22cf94 => ({
        "success": true,
        "data": _0x22cf94,
        "error": null
      })) : _0x5f0644.text().then(_0x5274b5 => ({
        "success": true,
        "data": _0x5274b5,
        "error": null
      }));
    }).catch(_0x59091c => {
      clearTimeout(_0x337fc9);
      return {
        "success": false,
        "data": null,
        "error": _0x59091c.name === "AbortError" ? "请求超时" : _0x59091c.message || "出现未知错误"
      };
    });
  }
}