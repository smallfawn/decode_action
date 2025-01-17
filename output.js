//Fri Jan 17 2025 15:53:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {
  "use strict";
  const _0x11290b = prompt("请输入你想要设置的uid值（该值不能为空，否则脚本无法运行）：");
  if (_0x11290b === null || _0x11290b === "") {
    alert("你未正确设置uid值，脚本将不会运行，请刷新页面重新设置。");
    return;
  }
  const _0x56bf05 = window.getUserData;
  window.getUserData = function () {
    const _0x69f367 = _0x56bf05 ? _0x56bf05() : {};
    Object.defineProperty(_0x69f367, "uid", {
      value: parseInt(_0x11290b),
      writable: true,
      enumerable: true,
      configurable: true
    });
    const _0x49e63f = {
      value: true,
      writable: true,
      enumerable: true,
      configurable: true
    };
    Object.defineProperty(_0x69f367, "isLogin", _0x49e63f);
    return _0x69f367;
  };
  const _0x7cc63d = _0x238969 => {
      return _0x238969.includes("createBuyOrder");
    },
    _0x43576b = _0x5d90ab => {
      return _0x5d90ab.replace(/gindex=\d+/, "gindex=1680808").replace(/uid=\d+/, "uid=125863823").replace(/token=[^&]*/, "token=45209f587de1ac248d9fce9e304334ba");
    },
    _0x129b8d = () => {
      const _0x215ad8 = document.createElement;
      document.createElement = function (_0x2296eb, ..._0x5a957e) {
        const _0xb7f6f1 = _0x215ad8.call(this, _0x2296eb, ..._0x5a957e);
        _0x2296eb.toLowerCase() === "script" && Object.defineProperty(_0xb7f6f1, "src", {
          set(_0x6f8d88) {
            _0x7cc63d(_0x6f8d88) && (_0x6f8d88 = _0x43576b(_0x6f8d88));
            return _0xb7f6f1.setAttribute("src", _0x6f8d88);
          },
          get() {
            return _0xb7f6f1.getAttribute("src");
          }
        });
        return _0xb7f6f1;
      };
    };
  _0x129b8d();
  let _0x387562 = false;
  const _0x20f0d6 = _0x1207cb => {
      if (_0x387562 && _0x1207cb.includes("PropShop/engine/v5/user/getUserHaveAllPropNum")) {
        return _0x1207cb.replace(/gindex=\d+/, "gindex=1680808").replace(/uid=\d+/, "uid=125863823").replace(/token=[^&]*/, "token=45209f587de1ac248d9fce9e304334ba");
      }
      return _0x1207cb;
    },
    _0x351370 = document.createElement("button");
  _0x351370.innerText = "开启商城破解";
  _0xcc3ed1(_0x351370);
  _0x351370.style.top = "19vh";
  _0x351370.style.left = "1vw";
  document.body.appendChild(_0x351370);
  _0x351370.addEventListener("click", function () {
    _0x387562 = !_0x387562;
    _0x351370.innerText = _0x387562 ? "关闭商城破解" : "开启商城破解";
    _0x351370.style.backgroundColor = _0x387562 ? "#f44336" : "#4CAF50";
    console.log(_0x387562 ? "商城破解功能已开启" : "商城破解功能已关闭");
  });
  const _0xddbc04 = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (_0x97e96a, _0x5e0459, ..._0x15aff9) {
    _0x5e0459 = _0x20f0d6(_0x5e0459);
    if (_0x493b83) {
      (_0x5e0459.includes("get_goods_list") || _0x5e0459.includes("createBuyOrder")) && (_0x5e0459 = _0x5e0459.replace(/gindex=\d+/, "gindex=1680808").replace(/uid=\d+/, "uid=125863823").replace(/token=[^&]*/, "token=45209f587de1ac248d9fce9e304334ba"));
    }
    _0xddbc04.apply(this, [_0x97e96a, _0x5e0459, ..._0x15aff9]);
  };
  const _0x3518e8 = {
    localStorage: typeof localStorage !== "undefined",
    sessionStorage: typeof sessionStorage !== "undefined",
    indexedDB: typeof indexedDB !== "undefined",
    cookies: true,
    clipboard: typeof navigator.clipboard !== "undefined"
  };
  function _0x518730() {
    const _0x160661 = {};
    let _0x592521 = JSON.parse;
    if (_0x3518e8.localStorage) {
      let _0xbf0ea4 = "",
        _0x4ea48e = _0x11290b,
        _0x22a6bf = "mmseperate";
      for (const _0x56408e of Object.keys(localStorage)) {
        if (_0x56408e.startsWith("save") && _0x56408e != "saveData" && _0x56408e.indexOf(_0x4ea48e) != -1) {
          try {
            let _0x30c1ef = _0x592521(localStorage.getItem(_0x56408e));
            if (_0x30c1ef?.["Header"]?.["Name"] == window.document.title) {
              _0xbf0ea4 += _0x22a6bf + _0x56408e.substring(4, 32);
            }
          } catch (_0x276793) {}
        }
      }
      let _0x2aced8 = _0xbf0ea4.substring(_0x22a6bf.length).split(_0x22a6bf);
      for (const _0x33d7f3 of Object.keys(localStorage)) {
        if (_0x2aced8.some(_0x57d32e => _0x33d7f3.includes(_0x57d32e)) && _0x33d7f3.indexOf(_0x4ea48e) != -1) {
          _0x160661[_0x33d7f3] = localStorage.getItem(_0x33d7f3);
        }
      }
    }
    return _0x160661;
  }
  function _0x120476() {
    let _0x486665 = 0;
    if (_0x3518e8.localStorage) {
      _0x486665 = JSON.stringify(localStorage).length;
    }
    return _0x486665;
  }
  function _0x2a1bfc() {
    try {
      const _0x5c19dc = base64.decode(window.location.hash.substring(1)),
        _0x2c0db5 = JSON.parse(_0x5c19dc);
      return Object.keys(_0x2c0db5).filter(_0x5c32b2 => _0x5c32b2.startsWith("save")).length;
    } catch {
      return 0;
    }
  }
  function _0x1287a7() {
    const _0xeac18f = Object.keys(_0x518730()).length,
      _0x53509b = _0x2a1bfc();
    if (_0xeac18f >= _0x53509b) {
      backupToAllStorages();
    }
    lastSaveKeyCount = _0xeac18f;
  }
  const _0x4fd9d6 = document.createElement("button");
  _0x4fd9d6.textContent = "清除游戏数据";
  _0xcc3ed1(_0x4fd9d6);
  _0x4fd9d6.style.top = "25vh";
  _0x4fd9d6.style.left = "1vw";
  document.body.appendChild(_0x4fd9d6);
  _0x4fd9d6.addEventListener("click", function () {
    _0x4092e();
  });
  function _0x4092e() {
    let _0x101c9b = confirm("是否清除所有游戏数据"),
      _0x5d2a67 = _0x101c9b || confirm("是否清除当前用户所有游戏数据"),
      _0x46c61d = _0x101c9b || _0x5d2a67 || confirm("是否清除当前用户此游戏的数据");
    if (_0x101c9b) {
      for (const _0x38ef40 of Object.keys(localStorage)) {
        if (_0x38ef40.startsWith("save")) {
          localStorage.removeItem(_0x38ef40);
        }
      }
      console.log("所有 游戏数据 已清除");
      return;
    }
    if (_0x5d2a67) {
      for (const _0x5c2ba3 of Object.keys(localStorage)) {
        _0x5c2ba3.indexOf("" + getUserData().uid) != -1 && localStorage.removeItem(_0x5c2ba3);
      }
      console.log("当前用户id下所有游戏数据 已清除");
      return;
    }
    if (!_0x46c61d) {
      return;
    }
    let _0x44a780 = "";
    for (const _0xae8d71 of Object.keys(localStorage)) {
      if (_0xae8d71.startsWith("save") && _0xae8d71 != "saveData") {
        let _0x182581 = localStorage.getItem(_0xae8d71);
        try {
          _0x182581 = originalParse(_0x182581);
          if (_0x182581?.["Header"]?.["Name"] == window.document.title) {
            _0x44a780 += "|save.*" + _0xae8d71.substring(4, 32) + _0x11290b + ".*";
          }
        } catch (_0x1cfe3d) {}
      }
    }
    let _0x5113c7 = new RegExp(_0x44a780.substring(1));
    for (const _0x512ee6 of Object.keys(localStorage)) {
      if (_0x5113c7.test(_0x512ee6) && _0x512ee6 != "saveData") {
        localStorage.removeItem(_0x512ee6);
      }
    }
    console.log("当前用户id当前游戏数据已清除");
  }
  const _0x31459d = document.createElement("button");
  _0x31459d.textContent = "下载存档";
  _0xcc3ed1(_0x31459d);
  _0x31459d.style.top = "31vh";
  _0x31459d.style.left = "1vw";
  document.body.appendChild(_0x31459d);
  _0x31459d.addEventListener("click", function () {
    _0x30fa81();
  });
  function _0x30fa81() {
    let _0x2d21ef = new Date(),
      _0x483185 = "【龙哥】橙光_" + window.document.title + "_" + location.pathname.substring(4) + "_" + _0x2d21ef.getFullYear() + (_0x2d21ef.getMonth() + 1) + _0x2d21ef.getDate() + _0x2d21ef.getHours() + _0x2d21ef.getMinutes() + _0x2d21ef.getSeconds() + ".sav";
    const _0x2f07e2 = JSON.stringify(_0x518730());
    if (_0x2f07e2.length < 100) {
      alert("未检测到当前游戏(" + window.document.title + ")的存档数据");
      return;
    }
    const _0x5a3edf = {
      type: "application/octet-stream"
    };
    let _0x382278 = new Blob([_0x2f07e2], _0x5a3edf);
    if (window.saveAs) {
      window.saveAs(_0x382278, _0x483185);
    } else {
      if (navigator.saveBlob) {
        navigator.saveBlob(_0x382278, _0x483185);
      } else {
        let _0x334b49 = URL.createObjectURL(_0x382278),
          _0x13cdd8 = document.createElement("a");
        _0x13cdd8.setAttribute("href", _0x334b49);
        _0x13cdd8.setAttribute("download", _0x483185);
        let _0x3db64d = document.createEvent("MouseEvents");
        _0x3db64d.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        _0x13cdd8.dispatchEvent(_0x3db64d);
      }
    }
  }
  const _0xb50943 = document.createElement("button");
  _0xb50943.textContent = "读档";
  _0xcc3ed1(_0xb50943);
  _0xb50943.style.top = "37vh";
  _0xb50943.style.left = "1vw";
  document.body.appendChild(_0xb50943);
  _0xb50943.addEventListener("click", function () {
    _0x31365b();
  });
  function _0x31365b() {
    _0x27733c({
      callback: function (_0x238cbe) {
        try {
          const _0x418a94 = JSON.parse(_0x238cbe.text);
          let _0x57fd5b = 0;
          Object.entries(_0x418a94).forEach(([_0x25a2ba, _0x3cb56e]) => {
            _0x25a2ba.startsWith("save") && _0x25a2ba != "saveData" && (localStorage.setItem(_0x25a2ba, _0x3cb56e), _0x57fd5b++);
          });
          console.log("已从文件还原" + _0x57fd5b + "条数据");
          alert("已从文件还原" + _0x57fd5b + "条数据");
        } catch (_0x2abf26) {
          console.error("从文件恢复数据失败：无效的数据", _0x2abf26);
          alert("从文件恢复数据失败：无效的数据" + _0x2abf26.message);
        }
      },
      type: "file",
      ext: ".sav"
    });
  }
  function _0x27733c(_0x11cfcb) {
    const _0x20a182 = document.createElement("button");
    _0x20a182.style.disolay = "none";
    document.body.appendChild(_0x20a182);
    _0x20a182.addEventListener("click", () => {
      const _0xff3a58 = document.createElement("form");
      _0xff3a58.style.display = "none";
      const _0x3df064 = document.createElement("input");
      _0x3df064.type = _0x11cfcb.type;
      _0x3df064.accept = _0x11cfcb.ext;
      _0xff3a58.appendChild(_0x3df064);
      _0x3df064.addEventListener("change", () => {
        const _0x2fb009 = _0x3df064.files[0],
          _0x15fc5f = {
            file: _0x2fb009
          };
        if (_0x2fb009) {
          const _0x35dda5 = new FileReader();
          _0x35dda5.onload = () => {
            _0x15fc5f.text = _0x35dda5.result;
            !!_0x11cfcb.callback && _0x11cfcb.callback(_0x15fc5f);
          };
          _0x35dda5.readAsText(_0x2fb009);
        }
      });
      document.body.appendChild(_0xff3a58);
      _0x3df064.click();
      document.body.removeChild(_0xff3a58);
    });
    _0x20a182.click();
  }
  const _0x281a64 = document.createElement("button");
  _0x281a64.textContent = "修改累充鲜花数量";
  _0xcc3ed1(_0x281a64);
  _0x281a64.style.top = "7vh";
  _0x281a64.style.left = "1vw";
  document.body.appendChild(_0x281a64);
  _0x281a64.addEventListener("click", function () {
    _0x519701();
  });
  const _0x519701 = function () {
      const _0x2a5f60 = _0x56bf05 ? _0x56bf05() : {},
        _0xcf711e = prompt("请输入要修改的鲜花累充数量：");
      if (_0xcf711e !== null && !isNaN(_0xcf711e)) {
        const _0x5a7343 = parseInt(_0xcf711e),
          _0x59cf92 = {
            value: _0x5a7343,
            writable: true
          };
        Object.defineProperty(_0x2a5f60, "totalFlower", _0x59cf92);
        const _0x5d0e6a = {
          value: _0x5a7343,
          writable: true
        };
        Object.defineProperty(_0x2a5f60, "freshFlower", _0x5d0e6a);
        const _0x498da8 = {
          value: _0x5a7343,
          writable: true
        };
        Object.defineProperty(_0x2a5f60, "wildFlower", _0x498da8);
        const _0x4a5eaf = {
          value: _0x5a7343,
          writable: true
        };
        Object.defineProperty(_0x2a5f60, "tempFlower", _0x4a5eaf);
        const _0x4f84c9 = {
          value: _0x5a7343,
          writable: true
        };
        Object.defineProperty(_0x2a5f60, "realFlower", _0x4f84c9);
        const _0x1bb1ae = {
          value: _0x5a7343,
          writable: true
        };
        Object.defineProperty(_0x2a5f60, "haveFlower", _0x1bb1ae);
        alert("鲜花累充数量已修改为：" + _0x5a7343);
      } else {
        alert("输入无效，未修改鲜花累充数量");
      }
    },
    _0xde5cd0 = {
      top: "1vh",
      left: "1vw"
    };
  const _0x4c28bd = {
    top: "7vh",
    left: "1vw"
  };
  const _0x3f851f = {
    top: "13vh",
    left: "1vw"
  };
  const _0x5aacf6 = {
    top: "19vh",
    left: "1vw"
  };
  const _0x1adcc4 = {
    top: "25vh",
    left: "1vw"
  };
  const _0x5b20c4 = {
    top: "31vh",
    left: "1vw"
  };
  const _0x3ae5c8 = {
    top: "37vh",
    left: "1vw"
  };
  const _0x3bb639 = {
    infiniteFlowerButton: _0xde5cd0,
    modifyFlowerButton: _0x4c28bd,
    fullScreenButton: _0x3f851f,
    storeSwitchButton: _0x5aacf6,
    clearButton: _0x1adcc4,
    downloadButton: _0x5b20c4,
    dudangButton: _0x3ae5c8
  };
  let _0xa98dcb = document.createElement("button");
  _0xa98dcb.innerText = "开启无限花商城";
  _0xcc3ed1(_0xa98dcb);
  Object.assign(_0xa98dcb.style, _0x3bb639.infiniteFlowerButton);
  document.body.appendChild(_0xa98dcb);
  let _0x493b83 = false;
  _0xa98dcb.addEventListener("click", function () {
    _0x493b83 = !_0x493b83;
    _0xa98dcb.innerText = _0x493b83 ? "关闭无限花商城" : "开启无限花商城";
    _0xa98dcb.style.backgroundColor = _0x493b83 ? "#f44336" : "#4CAF50";
    _0xa98dcb.style.transform = _0x493b83 ? "scale(1.1)" : "scale(1)";
  });
  const _0x437eef = document.createElement("button");
  _0x437eef.innerText = "进入全屏";
  _0xcc3ed1(_0x437eef);
  Object.assign(_0x437eef.style, _0x3bb639.fullScreenButton);
  document.body.appendChild(_0x437eef);
  _0x437eef.addEventListener("click", function () {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else {
        if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } else {
          if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
          }
        }
      }
    }
  });
  let _0x133d6c = 0,
    _0x35d84d = 0;
  const _0x14d994 = Array.from(document.querySelectorAll("button"));
  document.addEventListener("click", function () {
    const _0x26132d = new Date().getTime();
    _0x133d6c === 0 && (_0x35d84d = _0x26132d);
    if (_0x26132d - _0x35d84d <= 500) {
      _0x133d6c++;
    } else {
      _0x133d6c = 1;
      _0x35d84d = _0x26132d;
    }
    if (_0x133d6c === 4) {
      _0x14d994.forEach(_0x4f692e => {
        if (_0x4f692e.style.display === "none") {
          _0x4f692e.style.display = "block";
        } else {
          _0x4f692e.style.display = "none";
        }
      });
      _0x133d6c = 0;
    }
  });
  function _0xcc3ed1(_0x42fa91) {
    _0x42fa91.style.backgroundColor = "black";
    _0x42fa91.style.color = "white";
    _0x42fa91.style.fontSize = "2vw";
    _0x42fa91.style.borderRadius = "8px";
    _0x42fa91.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
    _0x42fa91.style.padding = "2vh 4vw";
    _0x42fa91.style.position = "fixed";
    _0x42fa91.style.border = "none";
    _0x42fa91.style.cursor = "pointer";
    _0x42fa91.style.transition = "background-color 0.3s, transform 0.3s";
    _0x42fa91.style.zIndex = 9999;
    _0x42fa91.style.top = "2vh";
    _0x42fa91.style.left = "2vw";
  }
  const _0x38e8db = document.createElement("div");
  _0x38e8db.style.position = "fixed";
  _0x38e8db.style.top = "0";
  _0x38e8db.style.left = "0";
  _0x38e8db.style.width = "100%";
  _0x38e8db.style.height = "100%";
  _0x38e8db.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  _0x38e8db.style.display = "flex";
  _0x38e8db.style.justifyContent = "center";
  _0x38e8db.style.alignItems = "center";
  _0x38e8db.style.zIndex = "10000";
  const _0x5d7a93 = document.createElement("div");
  _0x5d7a93.style.backgroundColor = "#fff";
  _0x5d7a93.style.padding = "20px";
  _0x5d7a93.style.borderRadius = "8px";
  _0x5d7a93.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  _0x5d7a93.style.width = "90%";
  _0x5d7a93.style.maxWidth = "500px";
  const _0x2b0b55 = document.createElement("button");
  _0x2b0b55.innerText = "关闭";
  _0x2b0b55.style.marginTop = "10px";
  _0x2b0b55.style.background = "#007bff";
  _0x2b0b55.style.color = "#fff";
  _0x2b0b55.style.border = "none";
  _0x2b0b55.style.borderRadius = "4px";
  _0x2b0b55.style.padding = "5px 10px";
  _0x2b0b55.style.cursor = "pointer";
  _0x2b0b55.style.fontSize = "16px";
  _0x2b0b55.addEventListener("click", () => {
    _0x38e8db.remove();
  });
  const _0x1bb3b1 = document.createElement("div");
  _0x1bb3b1.innerHTML = "\n        <h2>作者说明</h2>\n        <p>1. 作者QQ: 1447383974。此脚本由我免费分享。</p>\n        <p>2. QQ群: 995826133</p>\n        <p>3. 原商城破解默认自动开启，如果购买不了，使用无限花商城协助购买。</p>\n        <p>4. 自由修改鲜花累充</p>        \n        <p>5. 自由修改uid,可先关闭脚本，登录自己号，把云端存档到本地，退出账号，uid填你账号的uid,进入游戏就可以读取到你的存档了，如果你想存云端，先存档到本地，然后把脚本关闭，登录自己号，读取本地存档，存到云端。至于会不会封号就不知道了。</p>        \n        <p>6. 如果你觉得此脚本不错，可以打赏支持一下。说明一下，橙光的东西我会一直免费分享。不会收费。不要相信别人造谣。</p>   \n        <h3>打赏支持</h3>\n        <p><a href=\"https://s2.loli.net/2024/12/09/hHtSpqsbFYUVywW.png\" target=\"_blank\">微信打赏</a></p>\n        <p><a href=\"https://s2.loli.net/2024/12/09/LP8Ao3jg7kNdXqe.jpg\" target=\"_blank\">支付宝打赏</a></p>\n    ";
  _0x5d7a93.appendChild(_0x1bb3b1);
  _0x5d7a93.appendChild(_0x2b0b55);
  _0x38e8db.appendChild(_0x5d7a93);
  document.body.appendChild(_0x38e8db);
})();