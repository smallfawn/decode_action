const fs = require("fs"),
  path = require("path"),
  https = require("https"),
  axios = require("axios").default,
  CryptoJS = require("crypto-js"),
  querystring = require("querystring");
class Common {
  constructor() {
    this._Cookie = "";
    this._UserAgent = "";
    this._UserAgentMap = new Map();
    this._defaultUserAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/122.0.0.0";
    this._appSignConfig = null;
    this._requestDebugMode = false;
    this._requestAxiosProxyConfig = null;
    this._requestDynamicProxyConfig = null;
    this._requestDynamicProxyShowAddress = false;
    this._requestDynamicProxyPrintAddressFormat = "刷新动态代理配置：<address>";
    this._requestNoProxyList = null;
    this._requestFailMessagesMap = {
      400: "请求错误 [400 Bad Request]",
      401: "未授权 [401 Unauthorized]",
      403: "禁止访问 [403 Forbidden]",
      493: "禁止访问 [493 Forbidden]",
      404: "资源未找到 [404 Not Found]",
      408: "请求超时 [408 Request Timeout]",
      429: "请求过多 [429 Too Many Requests]",
      500: "服务器内部错误 [500 Internal Server Error]",
      502: "网关错误 [502 Bad Gateway]",
      503: "服务不可用 [503 Service Unavailable]"
    };
    this._requestErrorMessagesMap = {
      ECONNABORTED: "请求被中断",
      ECONNRESET: "连接被对方重置",
      ECONNREFUSED: "服务器拒绝连接",
      ETIMEDOUT: "网络请求超时",
      ENOTFOUND: "无法解析的域名或地址",
      EPROTO: "协议错误",
      EHOSTUNREACH: "无法到达服务器主机",
      ENETUNREACH: "无法到达网络",
      EADDRINUSE: "网络地址已被使用",
      EPIPE: "向已关闭的写入流进行写入",
      ERR_BAD_OPTION_VALUE: "无效或不支持的配置选项值",
      ERR_BAD_OPTION: "无效的配置选项",
      ERR_NETWORK: "网络错误",
      ERR_FR_TOO_MANY_REDIRECTS: "请求被重定向次数过多",
      ERR_DEPRECATED: "使用了已弃用的特性或方法",
      ERR_BAD_RESPONSE: "服务器响应无效或无法解析",
      ERR_BAD_REQUEST: "请求无效或缺少必需参数",
      ERR_CANCELED: "请求被用户取消",
      ERR_NOT_SUPPORT: "当前环境不支持此特性或方法",
      ERR_INVALID_URL: "请求的 URL 无效",
      ERR_TLS_CERT_ALTNAME_INVALID: "TLS 证书的主机名无效",
      ERR_TLS_CERT_REJECTED: "TLS 证书被拒绝",
      ERR_HTTP2_STREAM_CANCEL: "HTTP2 流被取消",
      ERR_HTTP2_SESSION_ERROR: "HTTP2 会话出错",
      ERR_QUICSESSION_VERSION_NEGOTIATION: "QUIC 会话版本协商失败",
      EAI_AGAIN: "DNS 查找超时"
    };
    this._latestAppVersionData = {
      build: "169370",
      version: "13.1.0"
    };
    this._latestLiteAppVersionData = {
      build: "1676",
      version: "6.26.0"
    };
    this._latestIOSVersion = "17.5";
    this._appHttpsTlsOptions = {
      ciphers: ["TLS_AES_128_GCM_SHA256", "TLS_AES_256_GCM_SHA384", "TLS_CHACHA20_POLY1305_SHA256", "ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-AES256-GCM-SHA384", "ECDHE-ECDSA-AES128-GCM-SHA256", "ECDHE-ECDSA-AES256-GCM-SHA384", "ECDHE-ECDSA-CHACHA20-POLY1305", "ECDHE-RSA-CHACHA20-POLY1305"].join(":")
    };
    this.Base64 = Base64Algorithm;
    this.DataCache = LocalStorageCache;
    this._shopMemberActivityIds = new Map();
    this._H5st = null;
    this._Table = null;
    this._HttpsProxyAgent = null;
    this._genSignModelPath = __dirname + "/Rebels_Sign";
    this._jdCryptoModelPath = __dirname + "/Rebels_H";
    this._hasInitAppSignConfig = false;
    this._initRequestConfig();
  }
  _initRequestConfig() {
    try {
      const _0x329f97 = require.main.filename,
        _0x152ebe = path.basename(_0x329f97, ".js");
      this._requestNoProxyList = (process.env[_0x152ebe + "_no_proxy"] || process.env.RS_NO_PROXY || "").split(",").filter(_0x54525c => _0x54525c !== "");
      const _0x4b8941 = process.env[_0x152ebe + "_proxy_tunnrl"] || process.env.RS_PROXY_TUNNRL || "",
        _0x2a784d = (process.env.RS_TUNNRL_WHITRLIST || "").split("&").filter(Boolean);
      let _0x6532e6 = false;
      if (_0x4b8941 && _0x2a784d.length > 0) {
        const _0x5f024f = _0x2a784d.some(_0x34b67a => process.mainModule.filename.includes(_0x34b67a));
        if (_0x5f024f) {
          const _0x59d36d = this._getProxyConfigWithAddress(_0x4b8941);
          _0x59d36d ? (this._requestAxiosProxyConfig = _0x59d36d, console.log("\n====================使用代理池模式(新)===================\n"), _0x6532e6 = true) : console.log("❌ 提供的代理地址无效，跳过启用全局静态代理");
        }
      }
      if (!_0x6532e6) {
        const _0x157e97 = process.env[_0x152ebe + "_proxy_api"] || process.env.RS_PROXY_API || "",
          _0x19f1b3 = (process.env.RS_API_WHITELIST || "").split("&").filter(Boolean);
        if (_0x157e97 && _0x19f1b3.length > 0) {
          const _0x331a50 = _0x19f1b3.some(_0x263310 => process.mainModule.filename.includes(_0x263310));
          if (_0x331a50) {
            this._requestDynamicProxyConfig = {
              api: null,
              proxyConfig: null,
              useLimit: null,
              timeLimit: null,
              fetchFailContinue: null,
              extractTimestamp: null,
              lastUseTimeStamp: null,
              usedTimes: null
            };
            this._requestDynamicProxyConfig.api = _0x157e97;
            const _0x4db7ba = process.env[_0x152ebe + "_proxy_use_limit"] || process.env.RS_PROXY_USE_LIMIT || "0";
            try {
              this._requestDynamicProxyConfig.useLimit = parseInt(_0x4db7ba);
            } catch {
              this._requestDynamicProxyConfig.useLimit = 1;
            }
            const _0x4c0ff3 = process.env[_0x152ebe + "_proxy_time_limit"] || process.env.RS_PROXY_TIME_LIMIT || "20000";
            try {
              this._requestDynamicProxyConfig.timeLimit = parseInt(_0x4c0ff3);
            } catch {
              this._requestDynamicProxyConfig.timeLimit = 20000;
            }
            this._requestDynamicProxyConfig.fetchFailContinue = (process.env[_0x152ebe + "_proxy_fetch_fail_continue"] || process.env.RS_PROXY_FETCH_FAIL_CONTINUE || "true") === "true";
            this._requestDynamicProxyShowAddress = (process.env[_0x152ebe + "_proxy_show_address"] || process.env.RS_PROXY_HTTP_DYNAMIC_PROXY_SHOW_ADDRESS || "false") === "true";
            console.log("\n=====================使用API模式(新)=====================\n");
            _0x6532e6 = true;
          }
        }
      }
      Object.assign(axios.defaults, {
        headers: {
          common: {
            "User-Agent": this._defaultUserAgent
          }
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        maxRedirects: Infinity,
        timeout: 60000,
        transformResponse: [_0x79256f => {
          try {
            return JSON.parse(_0x79256f);
          } catch {}
          try {
            const _0x174620 = /[\w$.]+\(\s*({[\s\S]*?})\s*\)\s*;?/;
            if (_0x174620.test(_0x79256f)) {
              const _0xc0fd2b = _0x79256f.match(_0x174620)[1];
              return JSON.parse(_0xc0fd2b);
            }
          } catch {}
          return _0x79256f;
        }]
      });
    } catch (_0x2dc1d7) {
      console.log("❌ 初始化 HTTP 请求配置时遇到了错误\n" + _0x2dc1d7);
    }
  }
  _initAppSignConfig() {
    const _0xfc36a4 = ["http://sign.257999.xyz/sign"],
      _0x670589 = process.env.JD_SIGN_API || _0xfc36a4[Math.floor(Math.random() * _0xfc36a4.length)];
    this._appSignConfig = {
      requestApi: _0x670589,
      bodyField: process.env.JD_SIGN_API_BODY_FIELD || "body",
      functionIdField: process.env.JD_SIGN_API_FUNCTIONID_FIELD || "fn",
      requestMethod: null,
      requestContentType: null,
      genSign: null
    };
    try {
      const _0x496e8b = process.env.JD_SIGN_API_METHOD;
      _0x496e8b && _0x496e8b.toUpperCase() === "GET" ? this._appSignConfig.requestMethod = "GET" : this._appSignConfig.requestMethod = "POST";
    } catch {}
    try {
      const _0x1089bb = process.env.JD_SIGN_API_CONTENT_TYPE;
      _0x1089bb && _0x1089bb.indexOf("application/x-www-form-urlencoded") !== -1 ? this._appSignConfig.requestContentType = _0x1089bb : this._appSignConfig.requestContentType = "application/json; charset=utf-8";
    } catch {}
    try {
      this._appSignConfig.genSign = require(this._genSignModelPath);
    } catch {}
  }
  genRandomString(_0x224643 = 32, _0x2b4be7 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
    const _0x3700d7 = _0x2b4be7.length;
    let _0x3e80b8 = "";
    for (let _0x5d2ef1 = 0; _0x5d2ef1 < _0x224643; _0x5d2ef1++) {
      _0x3e80b8 += _0x2b4be7.charAt(Math.floor(Math.random() * _0x3700d7));
    }
    return _0x3e80b8;
  }
  parseUrl(_0x31b51c) {
    try {
      const _0x12023a = new URL(_0x31b51c);
      return _0x12023a;
    } catch (_0x2885b6) {
      return {};
    }
  }
  parseUrlParameter(_0xd5fdb4) {
    try {
      const _0x1cb7c7 = {},
        _0x4cbb3e = this.parseUrl(_0xd5fdb4),
        _0x402645 = new URLSearchParams(_0x4cbb3e?.["search"]);
      for (const [_0x36a4ab, _0x457e87] of _0x402645) {
        _0x1cb7c7[_0x36a4ab] = _0x457e87;
      }
      if (_0x4cbb3e?.["hash"] && _0x4cbb3e.hash.includes("#/")) {
        const _0xd0de1c = _0x4cbb3e.hash.replace("#/", ""),
          _0x154280 = _0xd0de1c.includes("?") ? new URLSearchParams(_0xd0de1c.split("?").slice(1).join("?")) : new URLSearchParams();
        for (const [_0x49e7ae, _0x136826] of _0x154280) {
          _0x1cb7c7[_0x49e7ae] = _0x136826;
        }
      }
      return _0x1cb7c7;
    } catch {
      return {};
    }
  }
  getUrlParameter(_0x19f6c5, _0x3dd528) {
    try {
      const _0x3ad3e4 = this.parseUrl(_0x19f6c5),
        _0x37f0d4 = _0x3ad3e4.searchParams.get(_0x3dd528);
      return _0x37f0d4 || "";
    } catch {
      return "";
    }
  }
  objectToQueryString(_0xc45099) {
    try {
      const _0x39c651 = [];
      for (const _0x2366ec in _0xc45099) {
        if (_0xc45099.hasOwnProperty(_0x2366ec)) {
          const _0x42bd9e = _0xc45099[_0x2366ec],
            _0x52db72 = encodeURIComponent(_0x2366ec),
            _0x2360ee = _0x42bd9e === null || _0x42bd9e === undefined ? "" : encodeURIComponent(_0x42bd9e);
          _0x39c651.push(_0x52db72 + "=" + _0x2360ee);
        }
      }
      return _0x39c651.join("&");
    } catch {
      return "";
    }
  }
  queryStringToObject(_0x2bc000) {
    try {
      const _0x100804 = {},
        _0x277758 = _0x2bc000.split("&");
      for (const _0x2bab7b of _0x277758) {
        const [_0x5ac894, _0x5ec2d7] = _0x2bab7b.split("=");
        _0x100804[decodeURIComponent(_0x5ac894)] = _0x5ec2d7 === undefined ? null : decodeURIComponent(_0x5ec2d7);
      }
      return _0x100804;
    } catch {
      return {};
    }
  }
  parseResponseCookie(_0x3f19b5) {
    const _0x14d379 = {};
    try {
      if (typeof _0x3f19b5 === "object" && _0x3f19b5?.["headers"] && _0x3f19b5?.["headers"]["set-cookie"]) {
        const _0x40a399 = _0x3f19b5.headers["set-cookie"];
        for (const _0x39d23a of _0x40a399) {
          const _0x147a99 = _0x39d23a.split(";")[0];
          _0x14d379[_0x147a99.substr(0, _0x147a99.indexOf("="))] = _0x147a99.substr(_0x147a99.indexOf("=") + 1);
        }
      }
    } catch {}
    return _0x14d379;
  }
  getResponseCookie(_0x1fa509, _0x4f04f2 = "") {
    let _0x3c38f0 = "";
    const _0xe49150 = this.parseResponseCookie(_0x1fa509),
      _0x2389cd = Object.keys(_0xe49150);
    if (_0x2389cd.length > 0) {
      _0x2389cd.forEach(_0x25e8b4 => {
        _0x3c38f0 += _0x25e8b4 + "=" + _0xe49150[_0x25e8b4] + "; ";
      });
      _0x3c38f0 = _0x3c38f0.trim();
    } else {
      if (_0x4f04f2) {
        return _0x4f04f2;
      }
    }
    return _0x3c38f0;
  }
  getCookieValue(_0x4cb568, _0x4680f6) {
    if (!_0x4cb568 || !_0x4680f6) {
      return "";
    }
    const _0x522b39 = new RegExp(_0x4680f6 + "=([^;]*)"),
      _0x487870 = _0x522b39.exec(_0x4cb568.trim().replace(/\s/g, ""));
    return _0x487870 && _0x487870[1] || "";
  }
  parseCookie(_0x558a15) {
    const _0x58232e = {},
      _0x36939b = _0x558a15.split(";");
    for (const _0x1d987e of _0x36939b) {
      const [_0x459c09, _0x1d21c0] = _0x1d987e.trim().split("=");
      _0x58232e[_0x459c09] = _0x1d21c0;
    }
    return _0x58232e;
  }
  getLatestIOSVersion() {
    return this._iOSVersionLatest || "";
  }
  formatTime(_0x5767fd, _0x5e6cd1 = Date.now()) {
    const _0x3567de = new Date(_0x5e6cd1);
    let _0xc93a19 = _0x5767fd;
    const _0x387c35 = {
      YYYY: _0x3567de.getFullYear(),
      MM: String(_0x3567de.getMonth() + 1).padStart(2, "0"),
      DD: String(_0x3567de.getDate()).padStart(2, "0"),
      HH: String(_0x3567de.getHours()).padStart(2, "0"),
      mm: String(_0x3567de.getMinutes()).padStart(2, "0"),
      ss: String(_0x3567de.getSeconds()).padStart(2, "0"),
      S: String(_0x3567de.getMilliseconds()).padStart(3, "0")
    };
    Object.keys(_0x387c35).forEach(_0xef5360 => {
      _0xc93a19 = _0xc93a19.replace(new RegExp(_0xef5360, "g"), _0x387c35[_0xef5360]);
    });
    return _0xc93a19;
  }
  async request(_0x309e6d) {
    let _0x747474 = {
        success: false,
        status: null,
        data: null,
        headers: null,
        error: null,
        connected: false
      },
      _0x147e1a = this._requestDebugMode,
      _0x3ee617 = null;
    try {
      if (!_0x309e6d || !_0x309e6d.url) {
        console.log("❌ 调用请求方法无效，缺少必要的参数！");
        _0x747474.error = "缺少必要的请求参数";
        return _0x747474;
      }
      _0x309e6d.hasOwnProperty("debug") && (_0x147e1a = _0x309e6d.debug, delete _0x309e6d.debug);
      const _0x487865 = this._requestAxiosProxyConfig,
        _0x9f2e1f = this._requestDynamicProxyConfig,
        _0x3e4648 = this._requestNoProxyList;
      _0x309e6d.body && (_0x309e6d.data = _0x309e6d.body, delete _0x309e6d.body);
      for (const _0x5d4ee0 of ["data", "params"]) {
        !_0x309e6d[_0x5d4ee0] && delete _0x309e6d[_0x5d4ee0];
      }
      _0x309e6d.method = (_0x309e6d.method || "get").toLowerCase();
      if (_0x309e6d.proxy && typeof _0x309e6d.proxy === "string") {
        const _0x46a930 = this._getProxyConfigWithAddress(_0x309e6d.proxy);
        _0x46a930 ? _0x309e6d.proxy = _0x46a930 : (console.log("❌ 代理配置无效，跳过使用代理"), delete _0x309e6d.proxy);
      }
      _0x309e6d.data && typeof _0x309e6d.data === "object" && (!_0x309e6d.headers || !_0x309e6d.headers["Content-Type"] || _0x309e6d.headers["Content-Type"].includes("application/x-www-form-urlencoded")) && (_0x309e6d.data = querystring.stringify(_0x309e6d.data));
      if (_0x309e6d.httpsTlsOptions && typeof _0x309e6d.httpsTlsOptions === "object" && _0x309e6d.url.includes("https://")) {
        _0x3ee617 = _0x309e6d.httpsTlsOptions;
        Object.assign(https.globalAgent.options, _0x3ee617);
        delete _0x309e6d.httpsTlsOptions;
      } else {
        _0x309e6d.hasOwnProperty("httpsTlsOptions") && delete _0x309e6d.httpsTlsOptions;
      }
      let _0x85c10b = false;
      if (!["proxy", "httpAgent", "httpsAgent"].some(_0x45d8ec => _0x309e6d.hasOwnProperty(_0x45d8ec))) {
        if (_0x487865 || _0x9f2e1f) {
          let _0x3f218b = true;
          const _0x597735 = this.parseUrl(_0x309e6d.url).hostname || _0x309e6d.url;
          for (const _0x21f42c of _0x3e4648) {
            const _0x28fcb1 = new RegExp("^" + _0x21f42c.split("*").join(".*") + "$");
            if (_0x28fcb1.test(_0x597735.hostname)) {
              _0x3f218b = false;
              _0x147e1a && console.log("ℹ️ 该代理请求命中 NO_PROXY 规则 ➜ " + _0x21f42c);
              break;
            }
          }
          if (_0x3f218b) {
            if (_0x487865) {
              _0x309e6d.proxy = _0x487865;
            } else {
              if (_0x9f2e1f) {
                if (_0x9f2e1f.proxyConfig) {
                  _0x309e6d.proxy = _0x9f2e1f.proxyConfig;
                  _0x85c10b = true;
                } else {
                  const _0x2b7c26 = await this.getProxyAddressWithApi(_0x9f2e1f.api),
                    _0x15ce8d = this._getProxyConfigWithAddress(_0x2b7c26);
                  if (_0x15ce8d) {
                    Object.assign(_0x9f2e1f, {
                      extractTimestamp: Date.now(),
                      usedTimes: 0,
                      proxyConfig: _0x15ce8d
                    });
                    _0x309e6d.proxy = _0x15ce8d;
                    _0x85c10b = true;
                    this._requestDynamicProxyShowAddress && console.log(this._requestDynamicProxyPrintAddressFormat.replace(/<address>/g, this._getProxyAddressWithConfig(_0x309e6d.proxy)));
                  } else {
                    if (!_0x9f2e1f.fetchFailContinue) {
                      _0x747474.error = "获取动态代理地址失败，已设置跳过请求";
                      return _0x747474;
                    }
                  }
                }
              }
            }
          }
        }
      }
      for (const _0x58ee88 of ["proxy", "httpAgent", "httpsAgent"]) {
        !_0x309e6d[_0x58ee88] && delete _0x309e6d[_0x58ee88];
      }
      _0x309e6d.proxy && (this._loadModule("HttpsProxyAgent"), _0x309e6d.httpsAgent = this._genHttpsAgentWithProxyConfig(_0x309e6d.proxy), delete _0x309e6d.proxy);
      await axios(_0x309e6d).then(_0x5502b6 => {
        if (_0x85c10b) {
          _0x9f2e1f.lastUseTimeStamp = Date.now();
          _0x9f2e1f.usedTimes++;
          const _0x21eeba = _0x9f2e1f.useLimit > 0 && _0x9f2e1f.usedTimes >= _0x9f2e1f.useLimit,
            _0x1d6832 = _0x9f2e1f.timeLimit > 0 && Date.now() - _0x9f2e1f.extractTimestamp >= _0x9f2e1f.timeLimit;
          (_0x21eeba || _0x1d6832) && Object.assign(_0x9f2e1f, {
            proxyConfig: null,
            lastUseTimeStamp: null,
            extractTimestamp: null,
            usedTimes: 0
          });
        }
        _0x747474.success = true;
        _0x747474.status = _0x5502b6.status;
        _0x747474.data = _0x5502b6.data;
        _0x747474.headers = _0x5502b6.headers;
        _0x747474.connected = true;
        _0x147e1a && this._handleRequestDebugPrint(_0x5502b6, true);
      }).catch(_0x430146 => {
        if (_0x85c10b) {
          _0x9f2e1f.lastUseTimeStamp = Date.now();
          _0x9f2e1f.usedTimes++;
          const _0x440475 = _0x9f2e1f.useLimit > 0 && _0x9f2e1f.usedTimes >= _0x9f2e1f.useLimit,
            _0x1f896a = _0x9f2e1f.timeLimit > 0 && Date.now() - _0x9f2e1f.extractTimestamp >= _0x9f2e1f.timeLimit;
          (_0x440475 || _0x1f896a) && Object.assign(_0x9f2e1f, {
            proxyConfig: null,
            lastUseTimeStamp: null,
            extractTimestamp: null,
            usedTimes: 0
          });
        }
        let _0x1219eb = null;
        if (_0x430146.response) {
          _0x747474.connected = true;
          const _0x3fd6f7 = _0x430146.response?.["status"];
          _0x430146.response.data && (_0x747474.data = _0x430146.response.data);
          _0x430146.response.headers && (_0x747474.headers = _0x430146.response.headers);
          _0x1219eb = this._requestFailMessagesMap[_0x3fd6f7] || "请求失败 [Response code " + _0x3fd6f7 + "]";
        } else {
          _0x85c10b && Object.assign(_0x9f2e1f, {
            proxyConfig: null,
            lastUseTimeStamp: null,
            extractTimestamp: null,
            usedTimes: 0
          });
          _0x430146.request ? _0x1219eb = (this._requestErrorMessagesMap[_0x430146.code] ?? "未知网络错误") + " [" + _0x430146.code + "]" : _0x1219eb = _0x430146.message || "未知错误状态";
        }
        (_0x430146.config?.["httpAgent"] || _0x430146.config?.["httpsAgent"]) && (_0x1219eb += "（🌐该请求通过代理发出）");
        _0x747474.error = _0x1219eb;
        _0x747474.status = _0x430146.response?.["status"] || null;
        _0x147e1a && (this._handleRequestDebugPrint(_0x430146, false), console.log("❌ 请求失败原因 ➜ " + _0x747474.error));
      });
      _0x3ee617 && Object.keys(_0x3ee617).forEach(_0x240944 => {
        https.globalAgent.options[_0x240944] = null;
      });
    } catch (_0x47d955) {
      _0x747474.error = _0x47d955.message || _0x47d955;
      _0x147e1a && console.log("❌ 在处理 HTTP 请求时遇到了错误 ➜ " + _0x47d955);
    }
    return _0x747474;
  }
  async get(_0x3a3ecf) {
    return await this.request(Object.assign({}, _0x3a3ecf, {
      method: "get"
    }));
  }
  async post(_0x38b83d) {
    return await this.request(Object.assign({}, _0x38b83d, {
      method: "post"
    }));
  }
  async put(_0x541cfc) {
    return await this.request(Object.assign({}, _0x541cfc, {
      method: "put"
    }));
  }
  async delete(_0x371810) {
    return await this.request(Object.assign({}, _0x371810, {
      method: "delete"
    }));
  }
  _handleRequestDebugPrint(_0x24c372, _0x4a62dd = true) {
    this._loadModule("TablePrint");
    if (!this._Table) {
      return;
    }
    const _0x3c74a7 = this._Table;
    console.log("------------------------ 🔧 REQUEST DEBUG ------------------------------");
    try {
      let _0x5c903c = null,
        _0x425618 = null;
      _0x5c903c = new _0x3c74a7({
        columns: [{
          title: "类型",
          name: "type",
          alignment: "left"
        }, {
          title: "说明",
          name: "info",
          alignment: "left"
        }],
        charLength: {
          "🟢": 2,
          "🔴": 2,
          "❌": 2
        }
      });
      _0x5c903c.addRow({
        type: "请求结果",
        info: "" + (_0x4a62dd ? "🟢" : _0x24c372?.["response"] ? "🔴" : "❌") + (_0x24c372?.["status"] ? " " + _0x24c372.status : _0x24c372?.["response"] ? " " + _0x24c372.response?.["status"] : "") + " - " + "".concat(_0x24c372?.["config"]?.["method"] || "未知").toUpperCase()
      });
      if (_0x24c372?.["config"]?.["url"]) {
        try {
          _0x425618 = new URL(_0x24c372.config.url);
          _0x5c903c.addRow({
            type: "请求地址",
            info: _0x425618.origin
          });
          _0x5c903c.addRow({
            type: "请求路径",
            info: _0x425618.pathname
          });
        } catch {
          _0x5c903c.addRow({
            type: "请求地址",
            info: _0x24c372.config.url
          });
        }
      }
      _0x5c903c.printTable();
      if (_0x425618 && _0x425618?.["search"] || _0x24c372?.["config"]?.["params"]) {
        try {
          const _0x2747bd = Object.assign({}, new URLSearchParams(_0x425618.search) || {}, _0x24c372?.["config"]?.["params"] || {});
          if (Object.keys(_0x2747bd).length > 0) {
            _0x5c903c = new _0x3c74a7({
              columns: [{
                title: "名称",
                name: "label",
                alignment: "left"
              }, {
                title: "值",
                name: "value",
                alignment: "left"
              }]
            });
            for (let _0x5cf80d in _0x2747bd) {
              _0x5c903c.addRow({
                label: decodeURIComponent(_0x5cf80d),
                value: decodeURIComponent(_0x2747bd[_0x5cf80d])
              });
            }
            console.log("\n✧ 请求参数");
            _0x5c903c.printTable();
          }
        } catch {}
      }
      if (_0x24c372?.["config"]?.["httpAgent"] || _0x24c372?.["config"]?.["httpsAgent"]) {
        const _0xc72d59 = (_0x24c372.config?.["httpAgent"] || _0x24c372.config?.["httpsAgent"])?.["proxy"],
          _0xc71da6 = {
            protocol: _0xc72d59.protocol.replace(":", ""),
            hostname: _0xc72d59.hostname
          };
        _0xc72d59.port && (_0xc71da6.port = _0xc72d59.port);
        if (_0xc72d59 instanceof URL) {
          (_0xc72d59.username || _0xc72d59.password) && (_0xc71da6.username = _0xc72d59.username, _0xc71da6.password = _0xc72d59.password);
        } else {
          if (_0xc72d59.auth) {
            const _0x21a7e5 = _0xc72d59.auth.split(":");
            _0xc71da6.username = _0x21a7e5[0];
            _0xc71da6.password = _0x21a7e5[1];
          }
        }
        _0x5c903c = new _0x3c74a7({
          columns: [{
            title: "名称",
            name: "label",
            alignment: "left"
          }, {
            title: "值",
            name: "value",
            alignment: "left"
          }]
        });
        for (let _0x2ccf3f in _0xc71da6) {
          let _0x40928e = _0xc71da6[_0x2ccf3f];
          typeof _0x40928e === "object" && (_0x40928e = JSON.stringify(_0x40928e));
          _0x5c903c.addRow({
            label: _0x2ccf3f,
            value: _0x40928e
          });
        }
        console.log("\n✧ HTTP 代理配置");
        _0x5c903c.printTable();
      }
      if (_0x24c372?.["config"]?.["headers"]) {
        const _0x5e358a = _0x24c372.config.headers;
        _0x5c903c = new _0x3c74a7({
          columns: [{
            title: "名称",
            name: "label",
            alignment: "left"
          }, {
            title: "值",
            name: "value",
            alignment: "left",
            maxLen: 80
          }]
        });
        for (let _0x181d9e in _0x5e358a) {
          let _0x387b8f = _0x5e358a[_0x181d9e];
          typeof _0x387b8f === "object" && (_0x387b8f = JSON.stringify(_0x387b8f));
          _0x5c903c.addRow({
            label: _0x181d9e,
            value: _0x387b8f
          });
        }
        console.log("\n✧ 请求 Headers");
        _0x5c903c.printTable();
      }
      if (_0x24c372?.["config"]?.["data"]) {
        let _0x4e2c65 = _0x24c372.config.data;
        if (typeof _0x4e2c65 === "object") {
          _0x4e2c65 = JSON.stringify(JSON.parse(_0x4e2c65));
        } else {
          if (typeof _0x4e2c65 === "string") {
            try {
              const _0x45ca3a = JSON.parse(_0x4e2c65);
              _0x4e2c65 = JSON.stringify(_0x45ca3a);
            } catch {
              _0x4e2c65 = JSON.stringify(_0x4e2c65).slice(1, -1);
            }
          }
        }
        console.log("\n✧ 请求 Body\n" + _0x4e2c65);
      }
      if (!_0x4a62dd && !_0x24c372?.["response"]) {
        console.log("\n------------------------------------------------------------------------");
        return;
      }
      if (_0x24c372?.["headers"]) {
        const _0x3cee9c = _0x24c372.headers;
        _0x5c903c = new _0x3c74a7({
          columns: [{
            title: "名称",
            name: "label",
            alignment: "left"
          }, {
            title: "值",
            name: "value",
            alignment: "left",
            maxLen: 80
          }]
        });
        for (let _0x5ab700 in _0x3cee9c) {
          let _0xfa45ad = _0x3cee9c[_0x5ab700];
          typeof _0xfa45ad !== "string" && (_0xfa45ad = JSON.stringify(_0xfa45ad));
          _0x5c903c.addRow({
            label: _0x5ab700,
            value: _0xfa45ad
          });
        }
        console.log("\n✧ 响应 Headers");
        _0x5c903c.printTable();
      }
      if (_0x24c372?.["data"]) {
        let _0x482c1e = _0x24c372.data;
        if (typeof _0x482c1e === "object") {
          _0x482c1e = JSON.stringify(_0x482c1e);
        } else {
          if (typeof _0x482c1e === "string") {
            try {
              const _0x328027 = JSON.parse(_0x482c1e);
              _0x482c1e = JSON.stringify(_0x328027);
            } catch {
              _0x482c1e = JSON.stringify(_0x482c1e).slice(1, -1);
            }
          }
        }
        console.log("\n✧ 响应 Body\n" + _0x482c1e);
      }
    } catch (_0x1d8f2c) {
      console.log("❌ 处理 REQUEST DEBUG PRINT 时遇到了错误 ➜ " + (_0x1d8f2c.message || _0x1d8f2c));
    }
    console.log("\n------------------------------------------------------------------------");
  }
  async getProxyAddressWithApi(_0x428088) {
    let _0xe1286e = "";
    try {
      const _0x3a2a6a = /\b(?:\d{1,3}\.){3}\d{1,3}:\d{1,5}\b/g,
        _0x20c15c = {
          url: _0x428088,
          method: "post",
          proxy: null,
          timeout: 30000
        };
      let _0x578e98 = 0,
        _0x41aa59 = null;
      const _0x414fa8 = 1;
      while (_0x578e98 < _0x414fa8) {
        const _0x20d4e4 = await this.request(_0x20c15c);
        if (!_0x20d4e4.success) {
          _0x41aa59 = _0x20d4e4.error;
          _0x578e98++;
          continue;
        }
        if (!_0x20d4e4.data) {
          _0x41aa59 = "无响应数据";
          _0x578e98++;
          continue;
        }
        const _0x4d6b2e = _0x20d4e4.data;
        if (typeof _0x4d6b2e === "object") {
          if (_0x4d6b2e?.["data"]) {
            let _0xdd9acd = _0x4d6b2e.data;
            if (Array.isArray(_0xdd9acd) && _0xdd9acd.length > 0) {
              _0xdd9acd = _0xdd9acd[0];
              if (_0xdd9acd?.["ip"] && _0xdd9acd?.["port"]) {
                _0xe1286e = _0xdd9acd.ip + ":" + _0xdd9acd.port;
              } else {
                _0xdd9acd?.["IP"] && _0xdd9acd?.["Port"] && (_0xe1286e = _0xdd9acd.IP + ":" + _0xdd9acd.Port);
              }
            } else {
              if (_0xdd9acd?.["proxy_list"] && Array.isArray(_0xdd9acd.proxy_list) && _0xdd9acd.proxy_list.length > 0) {
                const _0x54d343 = _0xdd9acd.proxy_list[0];
                typeof _0x54d343 === "object" && _0x54d343?.["ip"] && _0x54d343?.["port"] ? _0xe1286e = _0x54d343.ip + ":" + _0x54d343.port : _0xe1286e = _0x54d343;
              }
            }
            _0xe1286e && !_0x3a2a6a.test(_0xe1286e) && (_0xe1286e = "");
          }
          !_0xe1286e && (_0x41aa59 = "接口响应数据异常：" + JSON.stringify(_0x4d6b2e));
        } else {
          const _0x5f4e3b = _0x4d6b2e.match(_0x3a2a6a);
          _0x5f4e3b && (_0xe1286e = _0x5f4e3b[0]);
          !_0xe1286e && (_0x41aa59 = "接口响应数据异常：" + _0x4d6b2e);
        }
        if (_0xe1286e) {
          return _0xe1286e;
        }
        _0x578e98++;
      }
      _0x578e98 >= _0x414fa8 && console.log("⚠ 提取代理地址失败 ➜ " + _0x41aa59);
    } catch (_0x5e8731) {
      console.log("❌ 在处理请求代理API获取代理地址时遇到了错误\n" + _0x5e8731);
    }
    return _0xe1286e;
  }
  _getProxyConfigWithAddress(_0x2fc81c = "") {
    try {
      if (!_0x2fc81c) {
        return null;
      }
      !_0x2fc81c.includes("://") && (_0x2fc81c = "http://" + _0x2fc81c);
      const _0x2a53ea = this.parseUrl(_0x2fc81c);
      if (_0x2a53ea?.["hostname"]) {
        const _0x101f49 = {
          protocol: _0x2a53ea.protocol.replace(":", "") === "https" ? "https" : "http",
          host: _0x2a53ea.hostname,
          port: parseInt(_0x2a53ea?.["port"] || "8080")
        };
        (_0x2a53ea?.["username"] || _0x2a53ea?.["password"]) && (_0x101f49.auth = {
          username: _0x2a53ea?.["username"] || "",
          password: _0x2a53ea?.["password"] || ""
        });
        return _0x101f49;
      }
    } catch {}
    return null;
  }
  _getProxyAddressWithConfig(_0x9321a5 = null) {
    try {
      if (!_0x9321a5) {
        return null;
      }
      const _0x517a03 = Object.assign({}, _0x9321a5);
      let _0x549e6b = "";
      _0x517a03.auth && (_0x549e6b = (_0x517a03.auth?.["username"] || "") + ":" + (_0x517a03.auth?.["password"] || "") + "@");
      return _0x517a03.protocol + "://" + _0x549e6b + _0x517a03.host + ":" + _0x517a03.port;
    } catch {
      return JSON.stringify(_0x9321a5);
    }
  }
  _genHttpsAgentWithProxyConfig(_0x246acc) {
    try {
      if (!this._HttpsProxyAgent) {
        return null;
      }
      if (!_0x246acc) {
        return null;
      }
      let _0x5aa51f = (_0x246acc?.["protocol"] || "http") + "://";
      _0x246acc?.["auth"] && (_0x5aa51f += (_0x246acc.auth?.["username"] || "") + ":" + (_0x246acc.auth?.["password"] || "") + "@");
      _0x5aa51f += _0x246acc?.["host"] + ":" + (_0x246acc?.["port"] || "8080");
      return new this._HttpsProxyAgent(_0x5aa51f);
    } catch (_0x1298b4) {
      console.log("❌ 加载代理时遇到了错误 ➜ " + (_0x1298b4.message || _0x1298b4));
    }
    return null;
  }
  async concTaskNormal(_0x37aef7 = "3", _0x1ba46f = 100, _0x2502cc) {
    let _0x6e94f = false,
      _0x134173 = 0,
      _0x48dfee = 0;
    async function _0x379c2a(_0x4cd060) {
      const _0x1a0bc5 = await _0x2502cc(_0x4cd060);
      if (_0x1a0bc5) {
        if (typeof _0x1a0bc5 === "boolean") {
          _0x6e94f = true;
        } else {
          typeof _0x1a0bc5 === "object" && _0x1a0bc5?.["runEnd"] && (_0x6e94f = true);
        }
      }
      _0x134173--;
      _0x5be807();
    }
    async function _0x5be807() {
      while (_0x134173 < _0x37aef7 && _0x1ba46f > 0 && !_0x6e94f) {
        _0x1ba46f--;
        _0x134173++;
        _0x48dfee++;
        await _0x379c2a(_0x48dfee);
      }
      _0x6e94f && (await new Promise(_0x114cd3 => {
        const _0x36a823 = setInterval(() => {
          _0x134173 === 0 && (clearInterval(_0x36a823), _0x114cd3());
        }, 100);
      }));
    }
    const _0x576c21 = Math.min(_0x1ba46f, _0x37aef7),
      _0x13d1c2 = [];
    for (let _0x21acc3 = 0; _0x21acc3 < _0x576c21; _0x21acc3++) {
      _0x1ba46f--;
      _0x134173++;
      _0x48dfee++;
      _0x13d1c2.push(_0x379c2a(_0x48dfee));
    }
    await Promise.all(_0x13d1c2);
    _0x5be807();
    await new Promise(_0x4fa446 => {
      const _0x395260 = setInterval(() => {
        (_0x134173 === 0 || _0x6e94f) && (clearInterval(_0x395260), _0x4fa446());
      }, 100);
    });
  }
  setCookie(_0x164038) {
    this._Cookie = _0x164038;
  }
  unsetCookie() {
    this._Cookie = "";
    this._UserAgent = "";
  }
  getCookie() {
    return this._Cookie;
  }
  getLatestAppVersion() {
    return this._latestAppVersionData.version || "";
  }
  getLatestAppBuildVersion() {
    return this._latestAppVersionData.build || "";
  }
  getLatestLiteAppVersion() {
    return this._latestLiteAppVersionData.version || "";
  }
  getLatestLiteAppBuildVersion() {
    return this._latestLiteAppVersionData.build || "";
  }
  getErrorMsg(_0xb4c2e2, _0x223f10 = ["msg", "message", "errMsg", "errMessage", "errorMsg", "errorMessage", "bizMsg", "subMsg", "echo", "error", "resp_msg", "txt", "rlt", "displayMsg", "resultMsg", "desc"], _0x20153f = "") {
    if (!_0xb4c2e2) {
      return _0x20153f;
    }
    for (let _0x2f6f5a of _0x223f10) {
      if (_0xb4c2e2.hasOwnProperty(_0x2f6f5a)) {
        return _0xb4c2e2[_0x2f6f5a];
      }
    }
    return _0x20153f;
  }
  maskUserName(_0x542387 = "", _0x3be5de = "*") {
    if (!_0x542387) {
      return "";
    }
    if (_0x542387.length <= 1) {
      return _0x3be5de;
    }
    if (_0x542387.length < 5) {
      return _0x542387.slice(0, 1) + _0x3be5de.repeat(_0x542387.length - 1);
    }
    return _0x542387.slice(0, 2) + _0x3be5de.repeat(_0x542387.length - 4) + _0x542387.slice(-2);
  }
  genUuid(_0x2eccac = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", _0x22a004 = "0123456789abcdef") {
    let _0x6a3a9e = "";
    for (let _0x270ed4 of _0x2eccac) {
      if (_0x270ed4 == "x") {
        _0x6a3a9e += _0x22a004.charAt(Math.floor(Math.random() * _0x22a004.length));
      } else {
        _0x270ed4 == "X" ? _0x6a3a9e += _0x22a004.charAt(Math.floor(Math.random() * _0x22a004.length)).toUpperCase() : _0x6a3a9e += _0x270ed4;
      }
    }
    return _0x6a3a9e;
  }
  genUA(_0x14b83f = "", _0x29eaf2 = "jd") {
    if (_0x14b83f && this._UserAgentMap.has(_0x14b83f)) {
      return this._UserAgentMap.get(_0x14b83f);
    }
    const _0x1ff197 = {
        jd: {
          app: "jdapp",
          appBuild: this._latestAppVersionData.build,
          clientVersion: this._latestAppVersionData.version
        },
        lite: {
          app: "jdltapp",
          appBuild: this._latestLiteAppVersionData.build,
          clientVersion: this._latestLiteAppVersionData.version
        }
      },
      _0x241e96 = _0x29eaf2 === "lite" ? "lite" : "jd",
      {
        app: _0x433cbb,
        appBuild: _0x548599,
        clientVersion: _0xe87b72
      } = _0x1ff197[_0x241e96],
      _0x52b200 = [this._latestIOSVersion].map(_0x54d0ac => {
        let _0x107954 = _0x54d0ac.split(".");
        if (_0x107954.length > 2) {
          _0x107954.pop();
        }
        return _0x107954.join(".");
      }),
      _0x16d7bf = _0x52b200[Math.floor(Math.random() * _0x52b200.length)],
      _0xbc1b1 = this.genUuid(),
      _0x8cbbfa = !!_0x14b83f ? JSON.stringify(this.getCipherConf({
        ud: CryptoJS.SHA1(_0x14b83f).toString(),
        sv: _0x16d7bf,
        iad: ""
      }, _0x241e96)) : "",
      _0x45ed8f = "iPhone; CPU iPhone OS " + _0x16d7bf.replace(".", "_") + " like Mac OS X",
      _0x18b429 = [_0x433cbb, "iPhone", _0xe87b72, "", "rn/" + _0xbc1b1, "M/5.0", "appBuild/" + _0x548599, "jdSupportDarkMode/0", "ef/1", _0x8cbbfa ? "ep/" + encodeURIComponent(_0x8cbbfa) : "", "Mozilla/5.0 (" + _0x45ed8f + ") AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "supportJDSHWK/1", ""],
      _0x4d1206 = _0x18b429.join(";");
    _0x14b83f && this._UserAgentMap.set(_0x14b83f, _0x4d1206);
    if (this._Cookie) {
      this._UserAgent = _0x4d1206;
    }
    return _0x4d1206;
  }
  getJEH(_0x59e236) {
    !_0x59e236 && (_0x59e236 = "JD4iPhone/" + this.getLatestAppBuildVersion() + " (iPhone; iOS " + this.getLatestIOSVersion() + "; Scale/3.00)");
    return encodeURIComponent(JSON.stringify(this.getCipherConf({
      "User-Agent": encodeURIComponent(_0x59e236)
    })));
  }
  getJEC(_0x405972) {
    return encodeURIComponent(JSON.stringify(this.getCipherConf({
      pin: encodeURIComponent(_0x405972)
    })));
  }
  getCipherConf(_0x534125, _0x73b08 = "jd") {
    if (_0x534125 && typeof _0x534125 === "object") {
      for (let _0x1b7c53 in _0x534125) {
        _0x534125[_0x1b7c53] = this.Base64.encode(_0x534125[_0x1b7c53]);
      }
    } else {
      _0x534125 && typeof _0x534125 === "string" ? _0x534125 = this.Base64.encode(_0x534125) : _0x534125 = {};
    }
    return {
      ciphertype: 5,
      cipher: _0x534125,
      ts: Math.floor(Date.now() / 1000),
      hdid: "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
      version: "1.0.3",
      appname: _0x73b08 === "lite" ? "com.jd.jdmobilelite" : "com.360buy.jdmobile",
      ridx: -1
    };
  }
  async getLoginStatus(_0x5adf9b = this._Cookie) {
    if (!_0x5adf9b) {
      console.log("🚫 getLoginStatus 请求失败 ➜ 未设置Cookie");
      return undefined;
    }
    try {
      const _0x98e8b4 = {
        url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
        method: "GET",
        headers: {
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh-Hans;q=0.9",
          Cookie: _0x5adf9b,
          Host: "plogin.m.jd.com",
          "User-Agent": this._UserAgent || this._defaultUserAgent
        },
        timeout: 30000,
        debug: false
      };
      let _0x4645e3 = 0,
        _0x5929d8 = null;
      const _0x112135 = 1;
      while (_0x4645e3 < _0x112135) {
        const _0x1eabc1 = await this.request(_0x98e8b4);
        if (!_0x1eabc1.success) {
          _0x5929d8 = "🚫 getLoginStatus 请求失败 ➜ " + _0x1eabc1.error;
          _0x4645e3++;
          continue;
        }
        if (!_0x1eabc1.data) {
          _0x5929d8 = "🚫 getLoginStatus 请求异常 ➜ 无响应数据";
          _0x4645e3++;
          continue;
        }
        const _0x3fe9a4 = _0x1eabc1.data?.["islogin"];
        if (_0x3fe9a4 === "1") {
          return true;
        } else {
          if (_0x3fe9a4 === "0") {
            return false;
          }
        }
        _0x4645e3++;
      }
      _0x4645e3 >= _0x112135 && console.log(_0x5929d8);
    } catch (_0x4884fd) {
      console.log("❌ getLoginStatus 在处理请求中遇到了错误\n" + _0x4884fd);
    }
    return undefined;
  }
  async joinShopMember(_0x2e41e9, _0x44aa70 = this._Cookie, _0x297075 = "") {
    if (!_0x44aa70) {
      console.log("🚫 joinShopMember 请求失败 ➜ 未设置Cookie");
      return undefined;
    }
    if (!_0x2e41e9) {
      return undefined;
    }
    try {
      this._loadModule("h5st");
      if (!this._H5st) {
        return undefined;
      }
      _0x2e41e9 = "".concat(_0x2e41e9);
      const _0x4ea462 = {
        venderId: _0x2e41e9,
        bindByVerifyCodeFlag: 1,
        registerExtend: {},
        writeChildFlag: 0,
        channel: 406,
        appid: "27004",
        needSecurity: true,
        bizId: "shopmember_m_jd_com"
      };
      !_0x297075 && this._shopMemberActivityIds.has(_0x2e41e9) && (_0x297075 = this._shopMemberActivityIds.get(_0x2e41e9));
      _0x297075 && (_0x4ea462.activityId = _0x297075);
      const _0x23bf4f = {
          appId: "27004",
          appid: "shopmember_m_jd_com",
          functionId: "bindWithVender",
          clientVersion: "9.2.0",
          client: "H5",
          body: _0x4ea462,
          version: "4.7",
          t: true,
          ua: this._UserAgent || this._defaultUserAgent
        },
        _0x59ed27 = await this._H5st.getH5st(_0x23bf4f);
      if (!_0x59ed27.paramsData) {
        return undefined;
      }
      const _0x7acd19 = {
          url: "https://api.m.jd.com/client.action",
          method: "POST",
          headers: {
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            Origin: "https://pages.jd.com",
            Referer: "https://pages.jd.com/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": this._UserAgent || this._defaultUserAgent,
            Cookie: _0x44aa70
          },
          data: Object.assign({}, _0x59ed27.paramsData, {
            area: "",
            screen: "1290*2796",
            uuid: "88888"
          }),
          timeout: 30000
        },
        _0x2d17a1 = await this.request(_0x7acd19);
      if (!_0x2d17a1.success) {
        console.log("🚫 joinShopMember 请求失败 ➜ " + _0x2d17a1.error);
        return undefined;
      }
      if (!_0x2d17a1.data) {
        console.log("🚫 joinShopMember 请求异常 ➜ 无响应数据");
        return undefined;
      }
      const _0xb949f6 = _0x2d17a1.data;
      if (_0xb949f6?.["success"] === true) {
        if (_0xb949f6?.["result"] && _0xb949f6.result?.["giftInfo"]) {
          for (let _0xf4d32b of _0xb949f6.result?.["giftInfo"]?.["giftList"]) {
            console.log(" >> 入会获得：" + _0xf4d32b.discountString + _0xf4d32b.prizeName);
          }
        }
        if (_0xb949f6?.["message"] === "加入店铺会员成功") {
          return true;
        } else {
          if (_0xb949f6?.["message"] === "活动太火爆，请稍后再试") {
            console.log("🚫 加入店铺会员失败 ➜ " + _0xb949f6.message);
          } else {
            console.log("🚫 加入店铺会员失败 ➜ " + _0xb949f6?.["message"]);
            return false;
          }
        }
      } else {
        if (_0xb949f6?.["message"]) {
          console.log("🚫 加入店铺会员失败 ➜ " + _0xb949f6.message);
          return false;
        } else {
          console.log("🚫 加入店铺会员失败 ➜ " + JSON.stringify(_0xb949f6));
        }
      }
    } catch (_0x15430e) {
      console.log("❌ joinShopMember 在处理请求中遇到了错误\n" + _0x15430e);
    }
    return undefined;
  }
  async getShopMemberStatus(_0x3d0936, _0x1b1c88 = this._Cookie) {
    if (!_0x1b1c88) {
      console.log("🚫 getShopMemberStatus 请求失败 ➜ 未设置Cookie");
      return undefined;
    }
    if (!_0x3d0936) {
      return undefined;
    }
    try {
      this._loadModule("h5st");
      if (!this._H5st) {
        return undefined;
      }
      _0x3d0936 = "".concat(_0x3d0936);
      const _0x118001 = {
          appId: "27004",
          appid: "shopmember_m_jd_com",
          functionId: "getShopOpenCardInfo",
          clientVersion: "9.2.0",
          client: "H5",
          body: {
            venderId: _0x3d0936,
            payUpShop: true,
            queryVersion: "10.5.2",
            appid: "27004",
            needSecurity: true,
            bizId: "shopmember_m_jd_com",
            channel: 406
          },
          version: "4.7",
          t: true,
          ua: this._UserAgent || this._defaultUserAgent
        },
        _0x288e2f = await this._H5st.getH5st(_0x118001);
      if (!_0x288e2f.paramsData) {
        return undefined;
      }
      const _0x506486 = {
          url: "https://api.m.jd.com/client.action",
          method: "POST",
          headers: {
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            Origin: "https://pages.jd.com",
            Referer: "https://pages.jd.com/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": this._UserAgent || this._defaultUserAgent,
            Cookie: _0x1b1c88
          },
          data: Object.assign({}, _0x288e2f.paramsData, {
            area: "",
            screen: "1290*2796",
            uuid: "88888"
          }),
          timeout: 30000
        },
        _0x3a0fea = await this.request(_0x506486);
      if (!_0x3a0fea.success) {
        console.log("🚫 getShopMemberStatus 请求失败 ➜ " + _0x3a0fea.error);
        return undefined;
      }
      if (!_0x3a0fea.data) {
        console.log("🚫 getShopMemberStatus 请求异常 ➜ 无响应数据");
        return undefined;
      }
      const _0x4b6cab = _0x3a0fea.data;
      if (_0x4b6cab?.["success"] === true) {
        let _0x21f469 = _0x4b6cab.result;
        Array.isArray(_0x21f469) && (_0x21f469 = _0x21f469[0]);
        const _0xa30326 = _0x21f469?.["interestsRuleList"]?.[0]?.["interestsInfo"]?.["activityId"];
        _0xa30326 && this._shopMemberActivityIds.set(_0x3d0936, _0xa30326);
        return _0x21f469?.["userInfo"]?.["openCardStatus"] === 1 ? true : false;
      } else {
        _0x4b6cab?.["message"] ? console.log("🚫 获取店铺会员状态异常 ➜ " + _0x4b6cab.message) : console.log("🚫 获取店铺会员状态异常 ➜ " + JSON.stringify(_0x4b6cab));
      }
    } catch (_0x5c5eaf) {
      console.log("❌ getShopMemberStatus 在处理请求中遇到了错误\n" + _0x5c5eaf);
    }
    return undefined;
  }
  async getShopDetail(_0x45aafc = {
    venderId: "",
    shopId: ""
  }, _0x541f2c = this._Cookie) {
    const {
      venderId: _0xb3b3cf,
      shopId: _0x2a4fc7
    } = _0x45aafc;
    if (!_0xb3b3cf && !_0x2a4fc7) {
      return {};
    }
    try {
      const _0x1fc71e = {
          url: "https://api.m.jd.com/client.action",
          method: "POST",
          headers: {
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
            "Content-Type": "application/x-www-form-urlencoded",
            Origin: "https://shop.m.jd.com",
            Referer: "https://shop.m.jd.com/",
            Host: "api.m.jd.com",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
            "User-Agent": this._defaultUserAgent,
            "X-Referer-Page": "https://shop.m.jd.com/shop/introduce",
            "X-Rp-Client": "h5_1.0.0",
            Cookie: _0x541f2c || ""
          },
          data: {
            functionId: "whx_getMShopDetail",
            body: JSON.stringify({
              shopId: "".concat(_0x2a4fc7 || ""),
              venderId: "".concat(_0xb3b3cf || ""),
              source: "m-shop"
            }),
            t: Date.now().toString(),
            appid: "shop_m_jd_com",
            clientVersion: "11.0.0",
            client: "wh5",
            area: "",
            uuid: ""
          },
          timeout: 30000
        },
        _0x43adac = await this.request(_0x1fc71e);
      if (!_0x43adac.success) {
        console.log("🚫 getShopDetail 请求失败 ➜ " + _0x43adac.error);
        return {};
      }
      if (!_0x43adac.data) {
        console.log("🚫 getShopDetail 请求异常 ➜ 无响应数据");
        return {};
      }
      const _0x5c148b = _0x43adac.data;
      if (_0x5c148b.code === "200" && _0x5c148b.success === true && _0x5c148b.data) {
        return _0x5c148b?.["data"] || {};
      }
    } catch (_0x2e0963) {
      console.log("❌ getShopDetail 在处理请求中遇到了错误\n" + _0x2e0963);
    }
    return {};
  }
  async getShopId(_0x2b2bcf, _0x1346f1 = this._Cookie) {
    if (!_0x2b2bcf) {
      return null;
    }
    try {
      const _0x4456c4 = await this.getShopDetail({
        venderId: _0x2b2bcf
      }, _0x1346f1);
      return _0x4456c4?.["shopBaseInfo"]?.["shopId"] || null;
    } catch (_0x521df3) {
      console.log("❌ getShopId 在处理请求中遇到了错误\n" + _0x521df3);
    }
    return null;
  }
  async getVenderId(_0x2513a6, _0x56a535 = this._Cookie) {
    if (!_0x2513a6) {
      return null;
    }
    try {
      const _0x3eb024 = await this.getShopDetail({
        shopId: _0x2513a6
      }, _0x56a535);
      return _0x3eb024?.["shopBaseInfo"]?.["venderId"] || null;
    } catch (_0x1d9628) {
      console.log("❌ getVenderId 在处理请求中遇到了错误\n" + _0x1d9628);
    }
    return null;
  }
  async getShopName(_0x195e3e = {
    venderId: "",
    shopId: ""
  }, _0x1bce3c = this._Cookie) {
    const {
      venderId: _0x53a45a,
      shopId: _0xb9b326
    } = _0x195e3e;
    if (!_0x53a45a && !_0xb9b326) {
      return null;
    }
    try {
      const _0x353ab8 = await this.getShopDetail(_0x195e3e, _0x1bce3c);
      return _0x353ab8?.["shopBaseInfo"]?.["shopName"] || null;
    } catch (_0x166a9a) {
      console.log("❌ getShopName 在处理请求中遇到了错误\n" + _0x166a9a);
    }
    return null;
  }
  async followShop(_0x139e89, _0x2e44b1, _0x33a974 = this._Cookie) {
    if (!_0x33a974) {
      console.log("🚫 followShop 请求失败 ➜ 未设置Cookie");
      return undefined;
    }
    if (!_0x139e89 && typeof _0x139e89 !== "boolean" || !_0x2e44b1) {
      return undefined;
    }
    try {
      const _0x2d7e29 = {
          url: "https://api.m.jd.com/client.action",
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/x-www-form-urlencoded",
            Origin: "https://shop.m.jd.com",
            Referer: "https://shop.m.jd.com/",
            Connection: "keep-alive",
            "Accept-Language": "zh-cn",
            Cookie: _0x33a974,
            "User-Agent": this._defaultUserAgent
          },
          data: {
            functionId: "whx_followShop",
            body: JSON.stringify({
              shopId: _0x2e44b1,
              follow: _0x139e89
            }),
            t: Date.now(),
            appid: "shop_m_jd_com",
            clientVersion: "11.0.0",
            client: "wh5"
          },
          timeout: 30000
        },
        _0x1dae07 = await this.request(_0x2d7e29);
      if (!_0x1dae07.success) {
        console.log("🚫 followShop 请求失败 ➜ " + _0x1dae07.error);
        return undefined;
      }
      if (!_0x1dae07.data) {
        console.log("🚫 followShop 请求异常 ➜ 无响应数据");
        return undefined;
      }
      const _0x5a814b = _0x1dae07.data;
      if (_0x5a814b?.["code"] === "0") {
        return _0x5a814b?.["result"]?.["code"] === "0" ? true : false;
      } else {
        if (_0x5a814b?.["msg"]) {
          return false;
        } else {
          console.log("🚫 " + (_0x139e89 ? "关注" : "取关") + "店铺异常 ➜ " + JSON.stringify(_0x5a814b));
        }
      }
    } catch (_0x51a9f5) {
      console.log("❌ followShop 在处理请求中遇到了错误\n" + _0x51a9f5);
    }
    return undefined;
  }
  useAppTls(_0x31867c = {}) {
    return Object.assign({}, this._appHttpsTlsOptions, _0x31867c);
  }
  async concTask(_0x21440a = "3", _0x1f2b9b, _0x4b1dc0) {
    const _0x1981c5 = _0x1f2b9b.slice();
    let _0x44e74c = false,
      _0x2abb93 = 0,
      _0x39e6e3 = 0;
    async function _0x48e183(_0x5a922d, _0x11ca2a) {
      const _0x8d8924 = await _0x4b1dc0(_0x5a922d, _0x11ca2a);
      if (_0x8d8924) {
        if (typeof _0x8d8924 === "boolean") {
          _0x44e74c = true;
        } else {
          typeof _0x8d8924 === "object" && _0x8d8924?.["runEnd"] && (_0x44e74c = true);
        }
      }
      _0x2abb93--;
      _0x4c91c2();
    }
    async function _0x4c91c2() {
      while (_0x2abb93 < _0x21440a && _0x1981c5.length > 0 && !_0x44e74c) {
        const _0xdf2fb4 = _0x1981c5.shift();
        _0x2abb93++;
        _0x39e6e3++;
        await _0x48e183(_0xdf2fb4, _0x39e6e3);
      }
      _0x44e74c && (await new Promise(_0x2c16fc => {
        const _0x435d4b = setInterval(() => {
          _0x2abb93 === 0 && (clearInterval(_0x435d4b), _0x2c16fc());
        }, 100);
      }));
    }
    const _0x17325f = Math.min(_0x1981c5.length, _0x21440a),
      _0x4dfd4b = [];
    for (let _0x53e37a = 0; _0x53e37a < _0x17325f; _0x53e37a++) {
      const _0x2a1ff2 = _0x1981c5.shift();
      _0x2abb93++;
      _0x39e6e3++;
      _0x4dfd4b.push(_0x48e183(_0x2a1ff2, _0x39e6e3));
    }
    await Promise.all(_0x4dfd4b);
    _0x4c91c2();
    await new Promise(_0x1bcc68 => {
      const _0x1518bc = setInterval(() => {
        (_0x2abb93 === 0 || _0x44e74c) && (clearInterval(_0x1518bc), _0x1bcc68());
      }, 100);
    });
  }
  async getSign(_0xbd942b, _0x1a753b) {
    !this._hasInitAppSignConfig && (this._initAppSignConfig(), this._hasInitAppSignConfig = true);
    let _0x39d514 = "";
    try {
      const _0x1585e4 = this._appSignConfig;
      if (_0x1585e4.genSign) {
        try {
          _0x39d514 = _0x1585e4.genSign(_0xbd942b, _0x1a753b);
        } catch (_0x4acfb3) {
          console.log("🚫 getSign 获取本地签名遇到了错误 ➜ " + (_0x4acfb3.message || _0x4acfb3));
        }
        if (_0x39d514) {
          return _0x39d514;
        } else {
          console.log("🚫 getSign 本地签名获取失败");
        }
      }
      let _0x46b4c7 = {
        [_0x1585e4.functionIdField]: _0xbd942b,
        [_0x1585e4.bodyField]: _0x1a753b
      };
      const _0x41d146 = {
        url: _0x1585e4.requestApi,
        method: _0x1585e4.requestMethod.toLowerCase(),
        headers: {
          "Content-Type": _0x1585e4.requestContentType
        },
        data: null,
        timeout: 60000,
        proxy: null,
        debug: false
      };
      _0x1585e4.requestMethod === "GET" ? (_0x1585e4.requestApi += "?" + this.objectToQueryString(_0x46b4c7), delete _0x41d146.data, delete _0x41d146.headers["Content-Type"]) : _0x1585e4.requestContentType.indexOf("application/x-www-form-urlencoded") !== -1 ? (typeof _0x46b4c7[_0x1585e4.bodyField] === "object" && (_0x46b4c7[_0x1585e4.bodyField] = JSON.stringify(_0x46b4c7[_0x1585e4.bodyField])), _0x41d146.data = this.objectToQueryString(_0x46b4c7)) : _0x41d146.data = JSON.stringify(_0x46b4c7);
      const _0x33e353 = await this.request(_0x41d146);
      if (!_0x33e353.success) {
        console.log("🚫 getSign 请求失败 ➜ " + _0x33e353.error);
        return _0x39d514;
      }
      if (!_0x33e353.data) {
        console.log("🚫 getSign 请求异常 ➜ 无响应数据");
        return _0x39d514;
      }
      let _0x175268 = _0x33e353.data;
      if (typeof _0x33e353.data === "object") {
        _0x175268.data && (_0x175268 = _0x175268.data);
        for (const _0x19289c of ["body", "convertUrl", "convertUrlNew"]) {
          if (_0x175268?.[_0x19289c] && this._checkSignStrFormat(_0x175268[_0x19289c])) {
            _0x39d514 = _0x175268[_0x19289c];
            break;
          }
        }
        !_0x39d514 && console.log("🚫 getSign 响应数据解析异常 ➜ " + JSON.stringify(_0x175268));
      } else {
        this._checkSignStrFormat(_0x175268) ? _0x39d514 = _0x175268 : console.log("🚫 getSign 响应数据解析异常 ➜ " + _0x175268);
      }
    } catch (_0x3404e1) {
      console.log("🚫 getSign 在处理请求中遇到了错误\n" + _0x3404e1);
    }
    return _0x39d514;
  }
  _checkSignStrFormat(_0x90eb69) {
    const _0x4807b7 = ["body=", "st=", "sign=", "sv="];
    for (let _0x5cb689 = 0; _0x5cb689 < _0x4807b7.length; _0x5cb689++) {
      if (!_0x90eb69.includes(_0x4807b7[_0x5cb689])) {
        return false;
      }
    }
    return true;
  }
  _loadModule(_0x317d0c) {
    switch (_0x317d0c) {
      case "h5st":
        if (!this._H5st) {
          try {
            const {
              H5st: _0x2f7afc
            } = require(this._jdCryptoModelPath);
            this._H5st = _0x2f7afc;
          } catch (_0x56b621) {
            console.log("❌ h5st 组件加载失败");
          }
        }
        break;
      case "TablePrint":
        if (!this._Table) {
          try {
            const {
              Table: _0x39eaee
            } = require("console-table-printer");
            this._Table = _0x39eaee;
          } catch (_0x226e0e) {
            console.log("❌ TablePrint 组件加载失败");
          }
        }
        break;
      case "HttpsProxyAgent":
        if (!this._HttpsProxyAgent) {
          try {
            const {
              HttpsProxyAgent: _0x30af2d
            } = require("https-proxy-agent");
            this._HttpsProxyAgent = _0x30af2d;
          } catch (_0x1dbde7) {
            try {
              const _0x58051e = require("https-proxy-agent");
              this._HttpsProxyAgent = _0x58051e;
            } catch (_0x12eec9) {
              console.log("❌ https-proxy-agent 代理模块加载失败");
            }
          }
        }
        break;
      default:
        break;
    }
  }
}
class Base64Algorithm {
  static _utf8Encode(_0x34b761) {
    _0x34b761 = _0x34b761.replace(/rn/g, "n");
    let _0x4d1a7f = "",
      _0x17618b;
    for (let _0x3fc0eb = 0; _0x3fc0eb < _0x34b761.length; _0x3fc0eb++) {
      _0x17618b = _0x34b761.charCodeAt(_0x3fc0eb);
      if (_0x17618b < 128) {
        _0x4d1a7f += String.fromCharCode(_0x17618b);
      } else {
        _0x17618b > 127 && _0x17618b < 2048 ? (_0x4d1a7f += String.fromCharCode(_0x17618b >> 6 | 192), _0x4d1a7f += String.fromCharCode(_0x17618b & 63 | 128)) : (_0x4d1a7f += String.fromCharCode(_0x17618b >> 12 | 224), _0x4d1a7f += String.fromCharCode(_0x17618b >> 6 & 63 | 128), _0x4d1a7f += String.fromCharCode(_0x17618b & 63 | 128));
      }
    }
    return _0x4d1a7f;
  }
  static _utf8Decode(_0x4b9a5b) {
    let _0x758298 = "",
      _0x3b4e07,
      _0x3c499a,
      _0x4eb3cf,
      _0x1b6f59 = 0;
    while (_0x1b6f59 < _0x4b9a5b.length) {
      _0x3b4e07 = _0x4b9a5b.charCodeAt(_0x1b6f59);
      if (_0x3b4e07 < 128) {
        _0x758298 += String.fromCharCode(_0x3b4e07);
        _0x1b6f59++;
      } else {
        _0x3b4e07 > 191 && _0x3b4e07 < 224 ? (_0x3c499a = _0x4b9a5b.charCodeAt(_0x1b6f59 + 1), _0x758298 += String.fromCharCode((_0x3b4e07 & 31) << 6 | _0x3c499a & 63), _0x1b6f59 += 2) : (_0x3c499a = _0x4b9a5b.charCodeAt(_0x1b6f59 + 1), _0x4eb3cf = _0x4b9a5b.charCodeAt(_0x1b6f59 + 2), _0x758298 += String.fromCharCode((_0x3b4e07 & 15) << 12 | (_0x3c499a & 63) << 6 | _0x4eb3cf & 63), _0x1b6f59 += 3);
      }
    }
    return _0x758298;
  }
  static encode(_0x2e8080, _0x930f36 = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/") {
    let _0x1004f2 = "",
      _0x146e0f,
      _0x2a39c1,
      _0x53b0e0,
      _0x44e7b2,
      _0x1297d6,
      _0x288ef4,
      _0x46f318,
      _0x205591 = 0;
    _0x2e8080 = this._utf8Encode(_0x2e8080);
    while (_0x205591 < _0x2e8080.length) {
      _0x146e0f = _0x2e8080.charCodeAt(_0x205591++);
      _0x2a39c1 = _0x2e8080.charCodeAt(_0x205591++);
      _0x53b0e0 = _0x2e8080.charCodeAt(_0x205591++);
      _0x44e7b2 = _0x146e0f >> 2;
      _0x1297d6 = (_0x146e0f & 3) << 4 | _0x2a39c1 >> 4;
      _0x288ef4 = (_0x2a39c1 & 15) << 2 | _0x53b0e0 >> 6;
      _0x46f318 = _0x53b0e0 & 63;
      if (isNaN(_0x2a39c1)) {
        _0x288ef4 = _0x46f318 = 64;
      } else {
        isNaN(_0x53b0e0) && (_0x46f318 = 64);
      }
      _0x1004f2 = _0x1004f2 + _0x930f36.charAt(_0x44e7b2) + _0x930f36.charAt(_0x1297d6) + _0x930f36.charAt(_0x288ef4) + _0x930f36.charAt(_0x46f318);
    }
    while (_0x1004f2.length % 4 > 1) {
      _0x1004f2 += "=";
    }
    return _0x1004f2;
  }
  static decode(_0x517730, _0x1ab0b = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/") {
    let _0x13d190 = "",
      _0xecba00,
      _0x48cf0f,
      _0x3e29f3,
      _0x30a423,
      _0x354ae2,
      _0x111014,
      _0x52a034,
      _0x5aa1d7 = 0;
    while (_0x5aa1d7 < _0x517730.length) {
      _0x30a423 = _0x1ab0b.indexOf(_0x517730.charAt(_0x5aa1d7++));
      _0x354ae2 = _0x1ab0b.indexOf(_0x517730.charAt(_0x5aa1d7++));
      _0x111014 = _0x1ab0b.indexOf(_0x517730.charAt(_0x5aa1d7++));
      _0x52a034 = _0x1ab0b.indexOf(_0x517730.charAt(_0x5aa1d7++));
      _0xecba00 = _0x30a423 << 2 | _0x354ae2 >> 4;
      _0x48cf0f = (_0x354ae2 & 15) << 4 | _0x111014 >> 2;
      _0x3e29f3 = (_0x111014 & 3) << 6 | _0x52a034;
      _0x13d190 += String.fromCharCode(_0xecba00);
      if (_0x111014 != 64) {
        _0x13d190 += String.fromCharCode(_0x48cf0f);
      }
      if (_0x52a034 != 64) {
        _0x13d190 += String.fromCharCode(_0x3e29f3);
      }
    }
    _0x13d190 = this._utf8Decode(_0x13d190);
    return _0x13d190;
  }
}
class LocalStorageCache {
  constructor(_0x5bb4b6 = null, _0x273323 = 0, _0x2cfbcd = null) {
    this.saveFile = _0x5bb4b6;
    this.defaultTTL = _0x273323;
    this.reloadInterval = _0x2cfbcd;
    this.lastLoad = 0;
    this.data = new Map();
    this.pendingWrites = false;
    this.writeDebounceTime = 5000;
    this.load();
  }
  load() {
    if (this.saveFile && fs.existsSync(this.saveFile)) {
      try {
        const _0x3a4876 = fs.readFileSync(this.saveFile, "utf8"),
          _0x128145 = JSON.parse(_0x3a4876);
        this.data = new Map(Object.entries(_0x128145));
      } catch (_0x13a6ab) {}
    }
    this.lastLoad = this.now();
  }
  save() {
    if (this.saveFile && !this.pendingWrites) {
      this.pendingWrites = true;
      try {
        const _0x4dfe5a = JSON.stringify(Object.fromEntries(this.data));
        fs.writeFileSync(this.saveFile, _0x4dfe5a, "utf8");
      } catch {}
      this.pendingWrites = false;
    }
  }
  clear() {
    this.data.clear();
  }
  _checkAndReload(_0x408cf1 = this.now()) {
    if (!this.reloadInterval || !this.saveFile) {
      return;
    }
    _0x408cf1 - this.lastLoad > this.reloadInterval && this.load();
  }
  now() {
    return Date.now();
  }
  put(_0x16ac57, _0x400bef = null, _0x59c77e = 0, _0x180b12) {
    this._checkAndReload();
    _0x59c77e = _0x59c77e === 0 ? this.defaultTTL : _0x59c77e;
    const _0x10c23f = _0x59c77e === 0 ? 0 : this.now() + _0x59c77e;
    let _0x3c9251 = null;
    this.data.has(_0x16ac57) && (_0x3c9251 = this.data.get(_0x16ac57).val);
    _0x400bef !== null ? this.data.set(_0x16ac57, {
      expires: _0x10c23f,
      val: _0x400bef
    }) : this.data.delete(_0x16ac57);
    this.save();
    if (_0x180b12 && _0x3c9251) {
      _0x180b12(_0x3c9251);
    }
    return _0x3c9251;
  }
  get(_0x5e6da6, _0x41a9a8) {
    this._checkAndReload();
    let _0x32b07e = null;
    if (this.data.has(_0x5e6da6)) {
      const _0x493d07 = this.data.get(_0x5e6da6);
      _0x493d07.expires === 0 || this.now() < _0x493d07.expires ? _0x32b07e = _0x493d07.val : (_0x32b07e = null, this.nuke(_0x5e6da6));
    }
    if (_0x41a9a8) {
      _0x41a9a8(_0x32b07e);
    }
    return _0x32b07e;
  }
  del(_0xb48153, _0x3aaeb8) {
    this._checkAndReload();
    let _0x3bc9a0 = null;
    this.data.has(_0xb48153) && (_0x3bc9a0 = this.data.get(_0xb48153).val, this.data.delete(_0xb48153), this.save());
    if (_0x3aaeb8) {
      _0x3aaeb8(_0x3bc9a0);
    }
    return _0x3bc9a0;
  }
  nuke(_0x3557ee) {
    this._checkAndReload();
    this.data.has(_0x3557ee) && (this.data.delete(_0x3557ee), this.save());
  }
}
module.exports = new Common();