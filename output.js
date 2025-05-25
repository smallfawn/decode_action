//Sun May 25 2025 06:06:00 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x3f0b16 = function () {
  let _0x2855d2 = true;
  return function (_0x460ea4, _0x526937) {
    const _0x2eed9a = _0x2855d2 ? function () {
      {
        if (_0x526937) {
          {
            const _0x2d43b7 = _0x526937.apply(_0x460ea4, arguments);
            _0x526937 = null;
            return _0x2d43b7;
          }
        }
      }
    } : function () {};
    _0x2855d2 = false;
    return _0x2eed9a;
  };
}();
const _0x18a990 = _0x3f0b16(this, function () {
  const _0x9ce0fa = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const _0x5430ca = function () {
    const _0x3805b1 = new _0x9ce0fa.RegExp("^([^ ]+( +[^ ]+)+)+[^ ]}");
    return !_0x3805b1.test(_0x18a990);
  };
  return _0x5430ca();
});
_0x18a990();
class RequestController {
  constructor() {
    document.getElementById("copyButton").style.display = "none";
    this.isRequestPending = false;
    this.controller = null;
    this.timeout = 10000;
  }
  async handleRequest() {
    if (this.isRequestPending) {
      {
        alert("⚠️  请求进行中，请勿重复提交");
        return;
      }
    }
    try {
      {
        this.setPendingState(true);
        const _0x20643f = this.validateInput();
        const _0x5ed49d = await this.sendRequest(_0x20643f);
        this.handleResponse(_0x5ed49d);
      }
    } catch (_0x1d14bd) {
      this.handleError(_0x1d14bd);
    } finally {
      this.setPendingState(false);
    }
  }
  validateInput() {
    const _0x4e5faa = document.getElementById("inputData").value.trim();
    if (!_0x4e5faa) {
      throw new Error("输入内容不能为空");
    }
    const _0x4cc0e3 = /pay_token=([A-Z0-9]*[A-Z][A-Z0-9]*[0-9][A-Z0-9]*)/;
    if (!_0x4cc0e3.test(_0x4e5faa)) {
      throw new Error("数据错误");
    }
    return _0x4e5faa;
  }
  async sendRequest(_0x36dd7a) {
    this.controller = new AbortController();
    const _0x45dc31 = setTimeout(() => this.controller.abort(), this.timeout);
    var _0x24d7f8 = "Xiaoao-869747685";
    var _0x3aecac = CryptoJS.enc.Utf8.parse(_0x24d7f8);
    var _0x545721 = CryptoJS.AES.encrypt(_0x36dd7a, _0x3aecac, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    const _0x1bb45a = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    const _0x233138 = await fetch("./validate/getOP.php", {
      method: "POST",
      headers: _0x1bb45a,
      body: _0x545721,
      signal: this.controller.signal
    });
    clearTimeout(_0x45dc31);
    const _0x203979 = await _0x233138.json();
    console.log(_0x203979);
    if (_0x203979.status == "success") {
      return _0x203979.url;
    }
    console.log(_0x203979.status);
    return _0x203979.message;
  }
  setPendingState(_0xd8262) {
    this.isRequestPending = _0xd8262;
    document.getElementById("submitButton").disabled = _0xd8262;
    document.querySelector(".loadingDots").style.display = _0xd8262 ? "block" : "none";
    document.querySelector(".buttonText").style.visibility = _0xd8262 ? "hidden" : "visible";
    document.getElementById("statusLed").style.background = _0xd8262 ? "#0ff" : "#f0f5";
  }
  handleResponse(_0x228a5c) {
    const _0x1243b8 = document.getElementById("outputData");
    _0x1243b8.innerHTML = _0x228a5c;
    _0x1243b8.style.animation = "textGlow 1s ease-out";
    setTimeout(() => _0x1243b8.style.animation = "", 1000);
    document.getElementById("copyButton").style.display = "block";
    document.getElementById("copyButton").onclick = async () => {
      const _0x32de32 = document.getElementById("outputData");
      try {
        await navigator.clipboard.writeText(_0x32de32.textContent);
        alert("✅  复制成功！");
      } catch (_0x47a8e4) {
        console.error("复制失败:", _0x47a8e4);
        alert("❌  复制失败，请手动选择复制");
      }
    };
  }
  handleError(_0x1e2069) {
    const _0x3f151d = {
      AbortError: "⏱️ 请求超时，请检查网络连接",
      TypeError: "🌐 网络连接异常",
      SyntaxError: "🔍 响应数据解析失败",
      default: "❌ 系统错误: " + _0x1e2069.message
    };
    const _0x433ea6 = _0x3f151d[_0x1e2069.name] || _0x3f151d.default;
    alert(_0x433ea6, true);
  }
  clear() {
    inputData.value = "";
  }
}
const controller = new RequestController();
document.getElementById("submitButton").addEventListener("click", () => controller.handleRequest());
document.getElementById("clearButton").addEventListener("click", () => controller.clear());
const style = document.createElement("style");
style.textContent = "\n            @keyframes float {\n                0% { transform: translateY(0); }\n                100% { transform: translateY(-20px); }\n            }\n            @keyframes textGlow {\n                0% { text-shadow: 0 0 10px #0ff; }\n                50% { text-shadow: 0 0 20px #0ff; }\n                100% { text-shadow: 0 0 10px #0ff; }\n            }\n            @keyframes slideUp {\n                from { bottom: -50px; }\n                to { bottom: 30px; }\n            }\n            @keyframes fadeOut {\n                from { opacity: 1; }\n                to { opacity: 0; }\n            }\n        ";
document.head.appendChild(style);