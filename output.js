//Wed Nov 06 2024 08:57:13 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
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
      301: "永久移动 [301 · Moved Permanently]",
      302: "临时移动 [302 · Found]",
      304: "资源未修改 [304 · Not Modified]",
      307: "临时重定向 [307 · Temporary Redirect]",
      308: "永久重定向 [308 · Permanent Redirect]",
      400: "请求错误 [400 · Bad Request]",
      401: "未授权 [401 · Unauthorized]",
      403: "禁止访问 [403 · Forbidden]",
      404: "资源未找到 [404 · Not Found]",
      405: "方法不被允许 [405 · Method Not Allowed]",
      406: "不可接受 [406 · Not Acceptable]",
      408: "请求超时 [408 · Request Timeout]",
      429: "请求过多 [429 · Too Many Requests]",
      413: "请求实体过大 [413 · Payload Too Large]",
      414: "请求的 URI 过长 [414 · URI Too Long]",
      415: "不支持的媒体类型 [415 · Unsupported Media Type]",
      416: "请求范围不符合要求 [416 · Range Not Satisfiable]",
      493: "禁止访问 [493 · Forbidden]",
      500: "服务器内部错误 [500 · Internal Server Error]",
      501: "服务器不支持请求 [501 · Not Implemented]",
      502: "网关错误 [502 · Bad Gateway]",
      503: "服务不可用 [503 · Service Unavailable]",
      504: "网关超时 [504 · Gateway Timeout]",
      505: "HTTP 版本不受支持 [505 · HTTP Version Not Supported]"
    };
    this._requestErrorMessagesMap = {
      "ECONNABORTED": "请求被中断",
      "ECONNRESET": "连接被对方重置",
      "ECONNREFUSED": "服务器拒绝连接",
      "ETIMEDOUT": "网络请求超时",
      "ENOTFOUND": "无法解析的域名或地址",
      "EPROTO": "协议错误",
      "EHOSTUNREACH": "无法到达服务器主机",
      "ENETUNREACH": "无法到达网络",
      "EADDRINUSE": "网络地址已被使用",
      "EPIPE": "向已关闭的写入流进行写入",
      "ERR_BAD_OPTION_VALUE": "无效或不支持的配置选项值",
      "ERR_BAD_OPTION": "无效的配置选项",
      "ERR_NETWORK": "网络错误",
      "ERR_FR_TOO_MANY_REDIRECTS": "请求被重定向次数过多",
      "ERR_DEPRECATED": "使用了已弃用的特性或方法",
      "ERR_BAD_RESPONSE": "服务器响应无效或无法解析",
      "ERR_BAD_REQUEST": "请求无效或缺少必需参数",
      "ERR_CANCELED": "请求被用户取消",
      "ERR_NOT_SUPPORT": "当前环境不支持此特性或方法",
      "ERR_INVALID_URL": "请求的 URL 无效",
      "ERR_TLS_CERT_ALTNAME_INVALID": "TLS 证书的主机名无效",
      "ERR_TLS_CERT_REJECTED": "TLS 证书被拒绝",
      "ERR_HTTP2_STREAM_CANCEL": "HTTP2 流被取消",
      "ERR_HTTP2_SESSION_ERROR": "HTTP2 会话出错",
      "ERR_QUICSESSION_VERSION_NEGOTIATION": "QUIC 会话版本协商失败",
      "EAI_AGAIN": "DNS 查找超时",
      "ERR_CONNECTION_TIMED_OUT": "连接超时",
      "ERR_INTERNET_DISCONNECTED": "互联网连接已断开",
      "ERR_SSL_PROTOCOL_ERROR": "SSL 协议错误",
      "ERR_ADDRESS_UNREACHABLE": "地址无法到达",
      "ERR_BLOCKED_BY_CLIENT": "请求被客户端阻止",
      "ERR_BLOCKED_BY_RESPONSE": "响应被阻止",
      "ERR_CERT_COMMON_NAME_INVALID": "证书的通用名称无效",
      "ERR_CERT_DATE_INVALID": "证书日期无效",
      "ERR_CERT_AUTHORITY_INVALID": "证书颁发机构无效",
      "ERR_CONTENT_LENGTH_MISMATCH": "内容长度不匹配",
      "ERR_INSECURE_RESPONSE": "响应不安全",
      "ERR_NAME_NOT_RESOLVED": "名称无法解析",
      "ERR_NETWORK_CHANGED": "网络更改",
      "ERR_NO_SUPPORTED_PROXIES": "没有支持的代理",
      "ERR_PROXY_CONNECTION_FAILED": "代理连接失败",
      "ERR_SSL_VERSION_OR_CIPHER_MISMATCH": "SSL 版本或密码不匹配",
      "ERR_TIMED_OUT": "操作超时",
      "ERR_TOO_MANY_REDIRECTS": "重定向过多",
      "ERR_UNSAFE_PORT": "不安全的端口",
      "ERR_SSL_OBSOLETE_VERSION": "SSL 版本过时",
      "ERR_CERT_REVOKED": "证书已被吊销",
      "ERR_CERT_TRANSPARENCY_REQUIRED": "需要证书透明度",
      "ERR_SSL_PINNED_KEY_NOT_IN_CERT_CHAIN": "固定的 SSL 密钥不在证书链中",
      "ERR_TUNNEL_CONNECTION_FAILED": "隧道连接失败"
    };
    this._latestAppVersionData = {
      "build": "169427",
      "version": "13.1.3"
    };
    this._latestLiteAppVersionData = {
      "build": "1676",
      "version": "6.26.0"
    };
    this._latestJDJRAppVersionData = {
      "version": "6.9.0",
      "jdPaySdkVersion": "4.01.26.00",
      "stockSDK": "stocksdk-iphone_6.0.0"
    };
    this._latestIOSVersion = "17.5.1";
    this._appHttpsTlsOptions = {
      "ciphers": ["TLS_GREASE 0x7a 0x7a", "TLS_AES_128_GCM_SHA256", "TLS_AES_256_GCM_SHA384", "TLS_CHACHA20_POLY1305_SHA256", "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256", "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256", "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256", "TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256", "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA", "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA", "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA", "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA", "TLS_RSA_WITH_AES_256_GCM_SHA384", "TLS_RSA_WITH_AES_128_GCM_SHA256", "TLS_RSA_WITH_AES_256_CBC_SHA", "TLS_RSA_WITH_AES_128_CBC_SHA", "TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA", "TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA", "TLS_RSA_WITH_3DES_EDE_CBC_SHA", "TLS_ECDHE_ECDSA_AES256_GCM_SHA384", "TLS_ECDHE_RSA_AES256_GCM_SHA384", "TLS_DHE_RSA_AES256_GCM_SHA384", "TLS_ECDHE_ECDSA_CHACHA20_POLY1305", "TLS_ECDHE_RSA_CHACHA20_POLY1305", "TLS_DHE_RSA_CHACHA20_POLY1305", "TLS_ECDHE_ECDSA_AES128_GCM_SHA256", "TLS_ECDHE_RSA_AES128_GCM_SHA256", "TLS_DHE_RSA_AES128_GCM_SHA256", "TLS_ECDHE_ECDSA_AES256_SHA384", "TLS_ECDHE_RSA_AES256_SHA384", "TLS_DHE_RSA_AES256_SHA256", "TLS_ECDHE_ECDSA_AES128_SHA256", "TLS_ECDHE_RSA_AES128_SHA256", "TLS_DHE_RSA_AES128_SHA256", "TLS_RSA_PSK_AES256_GCM_SHA384", "TLS_DHE_PSK_AES256_GCM_SHA384", "TLS_RSA_PSK_CHACHA20_POLY1305", "TLS_DHE_PSK_CHACHA20_POLY1305", "TLS_ECDHE_PSK_CHACHA20_POLY1305", "TLS_AES256_GCM_SHA384", "TLS_PSK_AES256_GCM_SHA384", "TLS_PSK_CHACHA20_POLY1305", "TLS_RSA_PSK_AES128_GCM_SHA256", "TLS_DHE_PSK_AES128_GCM_SHA256", "TLS_AES128_GCM_SHA256", "TLS_PSK_AES128_GCM_SHA256", "TLS_AES256_SHA256", "TLS_AES128_SHA256"].join(":")
    };
    this.Base64 = Base64Algorithm;
    this.DataCache = LocalStorageCache;
    this._shopMemberActivityIds = new Map();
    this._H5st = null;
    this._Table = null;
    this._HttpsProxyAgent = null;
    this._genSignModelPath = __dirname + "/genSign";
    this._jdCryptoModelPath = __dirname + "/jdCrypto";
    this._hasInitAppSignConfig = false;
    this._initRequestConfig();
  }
  ["_initRequestConfig"]() {
    try {
      const iiI11Ili = require.main.filename,
        l1lilIlI = path.basename(iiI11Ili, ".js");
      this._requestNoProxyList = (process.env[l1lilIlI + "_no_proxy"] || process.env.JD_COMMON_REQUEST_NO_PROXY || "").split(",").filter(Ili1II1I => Ili1II1I !== "");
      const lIlii1l1 = process.env[l1lilIlI + "_http_proxy"] || process.env.JD_COMMON_REQUEST_HTTP_PROXY || "";
      if (lIlii1l1) {
        const i1l11I1l = this._getProxyConfigWithAddress(lIlii1l1);
        if (i1l11I1l) this._requestAxiosProxyConfig = i1l11I1l, console.log("🌐 已启用全局静态代理");else {
          console.log("❌ 提供的代理地址无效，跳过启用全局静态代理");
        }
      } else {
        const IIiI1li = process.env[l1lilIlI + "_http_dynamic_proxy_api"] || process.env.JD_COMMON_REQUEST_HTTP_DYNAMIC_PROXY_API || "";
        if (IIiI1li) {
          this._requestDynamicProxyConfig = {
            "api": null,
            "proxyConfig": null,
            "useLimit": null,
            "timeLimit": null,
            "fetchFailContinue": null,
            "extractTimestamp": null,
            "lastUseTimeStamp": null,
            "usedTimes": null
          };
          this._requestDynamicProxyConfig.api = IIiI1li;
          const lIIi1l1i = process.env[l1lilIlI + "_http_dynamic_proxy_use_limit"] || process.env.JD_COMMON_REQUEST_HTTP_DYNAMIC_PROXY_USE_LIMIT || "1";
          try {
            this._requestDynamicProxyConfig.useLimit = parseInt(lIIi1l1i);
          } catch {
            this._requestDynamicProxyConfig.useLimit = 1;
          }
          const iIIIilI1 = process.env[l1lilIlI + "_http_dynamic_proxy_time_limit"] || process.env.JD_COMMON_REQUEST_HTTP_DYNAMIC_PROXY_TIME_LIMIT || "30000";
          try {
            this._requestDynamicProxyConfig.timeLimit = parseInt(iIIIilI1);
          } catch {
            this._requestDynamicProxyConfig.timeLimit = 10000;
          }
          this._requestDynamicProxyConfig.fetchFailContinue = (process.env[l1lilIlI + "_http_dynamic_proxy_fetch_fail_continue"] || process.env.JD_COMMON_REQUEST_HTTP_DYNAMIC_PROXY_FETCH_FAIL_CONTINUE || "false") === "true";
          this._requestDynamicProxyShowAddress = (process.env[l1lilIlI + "_http_dynamic_proxy_show_address"] || process.env.JD_COMMON_REQUEST_HTTP_DYNAMIC_PROXY_SHOW_ADDRESS || "false") === "true";
          console.log("🌐 已启用全局动态代理");
        }
      }
      Object.assign(axios.defaults, {
        "headers": {
          "common": {
            "User-Agent": this._defaultUserAgent
          }
        },
        "maxContentLength": Infinity,
        "maxBodyLength": Infinity,
        "maxRedirects": Infinity,
        "timeout": 60000,
        "transformResponse": [IIli11i1 => {
          try {
            return JSON.parse(IIli11i1);
          } catch {}
          try {
            const lIl1li1 = /[\w$.]+\(\s*({[\s\S]*?})\s*\)\s*;?/;
            if (lIl1li1.test(IIli11i1)) {
              const llIIiili = IIli11i1.match(lIl1li1)[1];
              return JSON.parse(llIIiili);
            }
          } catch {}
          return IIli11i1;
        }]
      });
    } catch (I1i11ll1) {
      console.log("❌ 初始化 HTTP 请求配置时遇到了错误\n" + I1i11ll1);
    }
  }
  ["_initAppSignConfig"]() {
    this._appSignConfig = {
      "requestApi": process.env.JD_SIGN_API || "http://api.nolanstore.cc/sign",
      "bodyField": process.env.JD_SIGN_API_BODY_FIELD || "body",
      "functionIdField": process.env.JD_SIGN_API_FUNCTIONID_FIELD || "fn",
      "requestMethod": null,
      "requestContentType": null,
      "genSign": null
    };
    try {
      const lIlII11 = process.env.JD_SIGN_API_METHOD;
      lIlII11 && lIlII11.toUpperCase() === "GET" ? this._appSignConfig.requestMethod = "GET" : this._appSignConfig.requestMethod = "POST";
    } catch {}
    try {
      const lIIIIi1 = process.env.JD_SIGN_API_CONTENT_TYPE;
      lIIIIi1 && lIIIIi1.indexOf("application/x-www-form-urlencoded") !== -1 ? this._appSignConfig.requestContentType = lIIIIi1 : this._appSignConfig.requestContentType = "application/json; charset=utf-8";
    } catch {}
    try {
      this._appSignConfig.genSign = require(this._genSignModelPath);
    } catch {}
  }
  ["genRandomString"](l1l1iIIl = 32, liiIIl1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
    const Ilii1IIl = liiIIl1.length;
    let iiIIl1 = "";
    for (let iiiiIII1 = 0; iiiiIII1 < l1l1iIIl; iiiiIII1++) {
      iiIIl1 += liiIIl1.charAt(Math.floor(Math.random() * Ilii1IIl));
    }
    return iiIIl1;
  }
  ["parseUrl"](ilIi1i1l) {
    try {
      return new URL(ilIi1i1l);
    } catch (illll111) {
      return {};
    }
  }
  ["parseUrlParameter"](llIIIii) {
    try {
      const II1lIl1I = {},
        ili1IiII = this.parseUrl(llIIIii),
        IlIlli11 = new URLSearchParams(ili1IiII?.["search"]);
      for (const [lIiiiI1, lI1l1lll] of IlIlli11) {
        II1lIl1I[lIiiiI1] = lI1l1lll;
      }
      if (ili1IiII?.["hash"] && ili1IiII.hash.includes("#/")) {
        const Ill1l1Il = ili1IiII.hash.replace("#/", ""),
          il1i11II = Ill1l1Il.includes("?") ? new URLSearchParams(Ill1l1Il.split("?").slice(1).join("?")) : new URLSearchParams();
        for (const [iiiIllIl, lilIlii1] of il1i11II) {
          II1lIl1I[iiiIllIl] = lilIlii1;
        }
      }
      return II1lIl1I;
    } catch {
      return {};
    }
  }
  ["getUrlParameter"](I1iIlii, Ii11lI1l) {
    try {
      const IiiIIi1I = this.parseUrl(I1iIlii),
        IiiiIlii = IiiIIi1I.searchParams.get(Ii11lI1l);
      return IiiiIlii || "";
    } catch {
      return "";
    }
  }
  ["objectToQueryString"](ilili1l1) {
    try {
      const i1iilII1 = [];
      for (const iIilIl1i in ilili1l1) {
        if (ilili1l1.hasOwnProperty(iIilIl1i)) {
          const iii1II1l = ilili1l1[iIilIl1i],
            lllIi = encodeURIComponent(iIilIl1i),
            llIIll = iii1II1l === null || iii1II1l === undefined ? "" : encodeURIComponent(iii1II1l);
          i1iilII1.push(lllIi + "=" + llIIll);
        }
      }
      return i1iilII1.join("&");
    } catch {
      return "";
    }
  }
  ["queryStringToObject"](il1lii) {
    try {
      const il1III1I = {},
        lli1I1I = il1lii.split("&");
      for (const Ill1IlI1 of lli1I1I) {
        const [l1i1ilII, I1i1II11] = Ill1IlI1.split("=");
        il1III1I[decodeURIComponent(l1i1ilII)] = I1i1II11 === undefined ? null : decodeURIComponent(I1i1II11);
      }
      return il1III1I;
    } catch {
      return {};
    }
  }
  ["parseResponseCookie"](i1ill1ll) {
    const iiiIl1il = {};
    try {
      if (typeof i1ill1ll === "object" && i1ill1ll?.["headers"] && i1ill1ll?.["headers"]["set-cookie"]) {
        const Iilli1iI = i1ill1ll.headers["set-cookie"];
        for (const lI1IIlll of Iilli1iI) {
          const liII1I = lI1IIlll.split(";")[0];
          iiiIl1il[liII1I.substring(0, liII1I.indexOf("="))] = liII1I.substring(liII1I.indexOf("=") + 1);
        }
      }
    } catch {}
    return iiiIl1il;
  }
  ["getResponseCookie"](lilillii, I1l1Iil = "") {
    let iii1liI1 = "";
    const II1illI1 = this.parseResponseCookie(lilillii),
      liIil1 = Object.keys(II1illI1);
    if (liIil1.length > 0) liIil1.forEach(iiiIiII => {
      iii1liI1 += iiiIiII + "=" + II1illI1[iiiIiII] + "; ";
    }), iii1liI1 = iii1liI1.trim();else {
      if (I1l1Iil) return I1l1Iil;
    }
    return iii1liI1;
  }
  ["getCookieValue"](illIlli, IIiIi11I) {
    if (!illIlli || !IIiIi11I) return "";
    const iIIIiIi = new RegExp(IIiIi11I + "=([^;]*)"),
      Iil1liIi = iIIIiIi.exec(illIlli.trim().replace(/\s/g, ""));
    return Iil1liIi && Iil1liIi[1] || "";
  }
  ["parseCookie"](IIiiI11I) {
    const iii1i111 = {},
      i1il1I1 = IIiiI11I.split(";");
    for (const i1i111ii of i1il1I1) {
      const [ilIiIl, ilIl1Iil] = i1i111ii.trim().split("=");
      iii1i111[ilIiIl] = ilIl1Iil;
    }
    return iii1i111;
  }
  ["filterCookieByFields"](I11Ilii1, iiliil1) {
    const i1iII11i = I11Ilii1.split(/;\s*/),
      II1Ii1 = i1iII11i.filter(Il1Ilil1 => {
        const IIiiIiI = Il1Ilil1.split("=")[0];
        return iiliil1.includes(IIiiIiI);
      });
    return II1Ii1.join("; ");
  }
  ["getLatestIOSVersion"]() {
    return this._latestIOSVersion || "";
  }
  ["formatTime"](IIIliI, II1i1Ill = Date.now()) {
    const I1lI1111 = new Date(II1i1Ill);
    let iIi1IiiI = IIIliI;
    const II1i11ii = {
      "YYYY": I1lI1111.getFullYear(),
      "MM": String(I1lI1111.getMonth() + 1).padStart(2, "0"),
      "DD": String(I1lI1111.getDate()).padStart(2, "0"),
      "HH": String(I1lI1111.getHours()).padStart(2, "0"),
      "mm": String(I1lI1111.getMinutes()).padStart(2, "0"),
      "ss": String(I1lI1111.getSeconds()).padStart(2, "0"),
      "S": String(I1lI1111.getMilliseconds()).padStart(3, "0")
    };
    return Object.keys(II1i11ii).forEach(lilillII => {
      iIi1IiiI = iIi1IiiI.replace(new RegExp(lilillII, "g"), II1i11ii[lilillII]);
    }), iIi1IiiI;
  }
  async ["request"](l1li1Ii1) {
    let IIiilIli = {
        "success": false,
        "status": null,
        "data": null,
        "headers": null,
        "error": null,
        "connected": false
      },
      lIii = this._requestDebugMode,
      l1lI1Iil = null;
    try {
      if (!l1li1Ii1 || !l1li1Ii1.url) return console.log("❌ 调用请求方法无效，缺少必要的参数！"), IIiilIli.error = "缺少必要的请求参数", IIiilIli;
      l1li1Ii1.hasOwnProperty("debug") && (lIii = l1li1Ii1.debug, delete l1li1Ii1.debug);
      const il1i1i1 = this._requestAxiosProxyConfig,
        i1llIIii = this._requestDynamicProxyConfig,
        IillI1II = this._requestNoProxyList;
      if (l1li1Ii1.body) {
        l1li1Ii1.data = l1li1Ii1.body;
        delete l1li1Ii1.body;
      }
      for (const li1lIllI of ["data", "params"]) {
        if (!l1li1Ii1[li1lIllI]) {
          delete l1li1Ii1[li1lIllI];
        }
      }
      l1li1Ii1.method = (l1li1Ii1.method || "get").toLowerCase();
      if (l1li1Ii1.proxy && typeof l1li1Ii1.proxy === "string") {
        const lI1liili = this._getProxyConfigWithAddress(l1li1Ii1.proxy);
        lI1liili ? l1li1Ii1.proxy = lI1liili : (console.log("❌ 代理配置无效，跳过使用代理"), delete l1li1Ii1.proxy);
      }
      l1li1Ii1.data && typeof l1li1Ii1.data === "object" && (!l1li1Ii1.headers || !l1li1Ii1.headers["Content-Type"] || l1li1Ii1.headers["Content-Type"].includes("application/x-www-form-urlencoded")) && (l1li1Ii1.data = querystring.stringify(l1li1Ii1.data));
      if (l1li1Ii1.httpsTlsOptions && typeof l1li1Ii1.httpsTlsOptions === "object" && l1li1Ii1.url.includes("https://")) l1lI1Iil = l1li1Ii1.httpsTlsOptions, Object.assign(https.globalAgent.options, l1lI1Iil), delete l1li1Ii1.httpsTlsOptions;else l1li1Ii1.hasOwnProperty("httpsTlsOptions") && delete l1li1Ii1.httpsTlsOptions;
      let l1Iill1i = false;
      if (!["proxy", "httpAgent", "httpsAgent"].some(l1liIlIi => l1li1Ii1.hasOwnProperty(l1liIlIi))) {
        if (il1i1i1 || i1llIIii) {
          let iiiii1ll = true;
          const IliIlll1 = this.parseUrl(l1li1Ii1.url).hostname || l1li1Ii1.url;
          for (const II1ii1i of IillI1II) {
            const iI1iliII = new RegExp("^" + II1ii1i.split("*").join(".*") + "$");
            if (iI1iliII.test(IliIlll1.hostname)) {
              iiiii1ll = false;
              if (lIii) {
                console.log("ℹ️ 该代理请求命中 NO_PROXY 规则 ➜ " + II1ii1i);
              }
              break;
            }
          }
          if (iiiii1ll) {
            if (il1i1i1) l1li1Ii1.proxy = il1i1i1;else {
              if (i1llIIii) {
                if (i1llIIii.proxyConfig) l1li1Ii1.proxy = i1llIIii.proxyConfig, l1Iill1i = true;else {
                  const llI1iili = await this.getProxyAddressWithApi(i1llIIii.api),
                    iill111 = this._getProxyConfigWithAddress(llI1iili);
                  if (iill111) {
                    Object.assign(i1llIIii, {
                      "extractTimestamp": Date.now(),
                      "usedTimes": 0,
                      "proxyConfig": iill111
                    });
                    l1li1Ii1.proxy = iill111;
                    l1Iill1i = true;
                    this._requestDynamicProxyShowAddress && console.log(this._requestDynamicProxyPrintAddressFormat.replace(/<address>/g, this._getProxyAddressWithConfig(l1li1Ii1.proxy)));
                  } else {
                    if (!i1llIIii.fetchFailContinue) return IIiilIli.error = "获取动态代理地址失败，已设置跳过请求", IIiilIli;
                  }
                }
              }
            }
          }
        }
      }
      for (const I1il1I of ["proxy", "httpAgent", "httpsAgent"]) {
        !l1li1Ii1[I1il1I] && delete l1li1Ii1[I1il1I];
      }
      l1li1Ii1.proxy && (this._loadModule("HttpsProxyAgent"), l1li1Ii1.httpsAgent = this._genHttpsAgentWithProxyConfig(l1li1Ii1.proxy), delete l1li1Ii1.proxy);
      await axios(l1li1Ii1).then(async l1I1IIl => {
        if (l1Iill1i) {
          i1llIIii.lastUseTimeStamp = Date.now();
          i1llIIii.usedTimes++;
          const ll1i1il1 = i1llIIii.useLimit > 0 && i1llIIii.usedTimes >= i1llIIii.useLimit,
            IililI1 = i1llIIii.timeLimit > 0 && Date.now() - i1llIIii.extractTimestamp >= i1llIIii.timeLimit;
          if (ll1i1il1 || IililI1) {
            Object.assign(i1llIIii, {
              "proxyConfig": null,
              "lastUseTimeStamp": null,
              "extractTimestamp": null,
              "usedTimes": 0
            });
          }
        }
        IIiilIli.success = true;
        IIiilIli.status = l1I1IIl.status;
        IIiilIli.data = l1I1IIl.data;
        IIiilIli.headers = l1I1IIl.headers;
        IIiilIli.connected = true;
        if (typeof l1li1Ii1.onSuccess === "function") {
          try {
            await l1li1Ii1.onSuccess(l1I1IIl.data, l1I1IIl);
          } catch (iiIllili) {
            console.log("❌ 调用 onSuccess 回调时遇到了错误 " + (iiIllili.message || iiIllili));
          }
        }
        lIii && this._handleRequestDebugPrint(l1I1IIl, true);
      }).catch(async i1lil11i => {
        if (l1Iill1i) {
          i1llIIii.lastUseTimeStamp = Date.now();
          i1llIIii.usedTimes++;
          const ii11IIii = i1llIIii.useLimit > 0 && i1llIIii.usedTimes >= i1llIIii.useLimit,
            lll1lil = i1llIIii.timeLimit > 0 && Date.now() - i1llIIii.extractTimestamp >= i1llIIii.timeLimit;
          (ii11IIii || lll1lil) && Object.assign(i1llIIii, {
            "proxyConfig": null,
            "lastUseTimeStamp": null,
            "extractTimestamp": null,
            "usedTimes": 0
          });
        }
        let Il1i11il;
        if (i1lil11i.response) {
          IIiilIli.connected = true;
          const liIIl1 = i1lil11i.response?.["status"];
          i1lil11i.response.data && (IIiilIli.data = i1lil11i.response.data);
          if (i1lil11i.response.headers) {
            IIiilIli.headers = i1lil11i.response.headers;
          }
          Il1i11il = this._requestFailMessagesMap[liIIl1] || "请求失败 [Response code " + liIIl1 + "]";
        } else l1Iill1i && Object.assign(i1llIIii, {
          "proxyConfig": null,
          "lastUseTimeStamp": null,
          "extractTimestamp": null,
          "usedTimes": 0
        }), i1lil11i.request ? Il1i11il = (this._requestErrorMessagesMap[i1lil11i.code] ?? "未知网络错误") + " [" + i1lil11i.code + "]" : Il1i11il = i1lil11i.message || "未知错误状态";
        (i1lil11i.config?.["httpAgent"] || i1lil11i.config?.["httpsAgent"]) && (Il1i11il += "（🌐该请求通过代理发出）");
        IIiilIli.error = Il1i11il || null;
        IIiilIli.status = i1lil11i.response?.["status"] || null;
        if (typeof l1li1Ii1.onFailOrError === "function") try {
          await l1li1Ii1.onFailOrError(i1lil11i, IIiilIli.error, IIiilIli.connected);
        } catch (Ii11liIi) {
          console.log("❌ 调用 onFailOrError 回调时遇到了错误 " + (Ii11liIi.message || Ii11liIi));
        } else {
          if (typeof l1li1Ii1.onFail === "function" && IIiilIli.connected) {
            try {
              await l1li1Ii1.onFail(i1lil11i, IIiilIli.error, IIiilIli.status);
            } catch (Iii1ilii) {
              console.log("❌ 调用 onFail 回调时遇到了错误 " + (Iii1ilii.message || Iii1ilii));
            }
          } else {
            if (typeof l1li1Ii1.onError === "function" && !IIiilIli.connected) try {
              await l1li1Ii1.onError(i1lil11i, IIiilIli.error);
            } catch (Il11Ii1) {
              console.log("❌ 调用 onError 回调时遇到了错误 " + (Il11Ii1.message || Il11Ii1));
            }
          }
        }
        lIii && (this._handleRequestDebugPrint(i1lil11i, false), console.log("❌ 请求失败原因 ➜ " + IIiilIli.error));
      });
      l1lI1Iil && Object.keys(l1lI1Iil).forEach(IIllill => {
        https.globalAgent.options[IIllill] = null;
      });
    } catch (i1i1ili) {
      IIiilIli.error = i1i1ili.message || i1i1ili;
      lIii && console.log("❌ 在处理 HTTP 请求时遇到了错误 ➜ " + i1i1ili);
    }
    return IIiilIli;
  }
  async ["get"](ill1iIIi) {
    return await this.request(Object.assign({}, ill1iIIi, {
      "method": "get"
    }));
  }
  async ["post"](i1iiII1l) {
    return await this.request(Object.assign({}, i1iiII1l, {
      "method": "post"
    }));
  }
  async ["put"](IliIliII) {
    return await this.request(Object.assign({}, IliIliII, {
      "method": "put"
    }));
  }
  async ["delete"](liii111) {
    return await this.request(Object.assign({}, liii111, {
      "method": "delete"
    }));
  }
  ["_handleRequestDebugPrint"](lI1l11ll, Illi1i1 = true) {
    this._loadModule("TablePrint");
    if (!this._Table) return;
    const lI1iiII1 = this._Table;
    console.log("--------------------- 🔧 HTTP REQUEST DEBUG 🔧 -------------------------");
    try {
      let lii1I1ll,
        ilili1i1 = null;
      lii1I1ll = new lI1iiII1({
        "columns": [{
          "title": "类型",
          "name": "type",
          "alignment": "left"
        }, {
          "title": "说明",
          "name": "info",
          "alignment": "left"
        }],
        "charLength": {
          "🟢": 2,
          "🔴": 2,
          "❌": 2
        }
      });
      lii1I1ll.addRow({
        "type": "请求结果",
        "info": "" + (Illi1i1 ? "🟢" : lI1l11ll?.["response"] ? "🔴" : "❌") + (lI1l11ll?.["status"] ? " " + lI1l11ll.status : lI1l11ll?.["response"] ? " " + lI1l11ll.response?.["status"] : "") + " - " + "".concat(lI1l11ll?.["config"]?.["method"] || "未知").toUpperCase()
      });
      if (lI1l11ll?.["config"]?.["url"]) try {
        ilili1i1 = new URL(lI1l11ll.config.url);
        lii1I1ll.addRow({
          "type": "请求地址",
          "info": ilili1i1.origin
        });
        lii1I1ll.addRow({
          "type": "请求路径",
          "info": ilili1i1.pathname
        });
      } catch {
        lii1I1ll.addRow({
          "type": "请求地址",
          "info": lI1l11ll.config.url
        });
      }
      lii1I1ll.printTable();
      if (ilili1i1 && ilili1i1?.["search"] || lI1l11ll?.["config"]?.["params"]) {
        try {
          const i1I11iiI = Object.assign({}, new URLSearchParams(ilili1i1?.["search"]) || {}, lI1l11ll?.["config"]?.["params"] || {});
          if (Object.keys(i1I11iiI).length > 0) {
            lii1I1ll = new lI1iiII1({
              "columns": [{
                "title": "名称",
                "name": "label",
                "alignment": "left"
              }, {
                "title": "值",
                "name": "value",
                "alignment": "left"
              }]
            });
            for (let iIliiII in i1I11iiI) {
              lii1I1ll.addRow({
                "label": decodeURIComponent(iIliiII),
                "value": decodeURIComponent(i1I11iiI[iIliiII])
              });
            }
            console.log("\n✧ 请求参数");
            lii1I1ll.printTable();
          }
        } catch {}
      }
      if (lI1l11ll?.["config"]?.["httpAgent"] || lI1l11ll?.["config"]?.["httpsAgent"]) {
        const II1111iI = (lI1l11ll.config?.["httpAgent"] || lI1l11ll.config?.["httpsAgent"])?.["proxy"],
          Ii1lIIll = {
            "protocol": II1111iI.protocol.replace(":", ""),
            "hostname": II1111iI.hostname
          };
        II1111iI.port && (Ii1lIIll.port = II1111iI.port);
        if (II1111iI instanceof URL) (II1111iI.username || II1111iI.password) && (Ii1lIIll.username = II1111iI.username, Ii1lIIll.password = II1111iI.password);else {
          if (II1111iI.auth) {
            const illlIil = II1111iI.auth.split(":");
            Ii1lIIll.username = illlIil[0];
            Ii1lIIll.password = illlIil[1];
          }
        }
        lii1I1ll = new lI1iiII1({
          "columns": [{
            "title": "名称",
            "name": "label",
            "alignment": "left"
          }, {
            "title": "值",
            "name": "value",
            "alignment": "left"
          }]
        });
        for (let I1iIiiIi in Ii1lIIll) {
          let il111IIi = Ii1lIIll[I1iIiiIi];
          typeof il111IIi === "object" && (il111IIi = JSON.stringify(il111IIi));
          lii1I1ll.addRow({
            "label": I1iIiiIi,
            "value": il111IIi
          });
        }
        console.log("\n✧ HTTP 代理配置");
        lii1I1ll.printTable();
      }
      if (lI1l11ll?.["config"]?.["headers"]) {
        const l111l = lI1l11ll.config.headers;
        lii1I1ll = new lI1iiII1({
          "columns": [{
            "title": "名称",
            "name": "label",
            "alignment": "left"
          }, {
            "title": "值",
            "name": "value",
            "alignment": "left",
            "maxLen": 80
          }]
        });
        for (let IIiiiI1i in l111l) {
          let Iii1IIii = l111l[IIiiiI1i];
          typeof Iii1IIii === "object" && (Iii1IIii = JSON.stringify(Iii1IIii));
          lii1I1ll.addRow({
            "label": IIiiiI1i,
            "value": Iii1IIii
          });
        }
        console.log("\n✧ 请求 Headers");
        lii1I1ll.printTable();
      }
      if (lI1l11ll?.["config"]?.["data"]) {
        let liI1II = lI1l11ll.config.data;
        if (typeof liI1II === "object") liI1II = JSON.stringify(JSON.parse(liI1II));else {
          if (typeof liI1II === "string") try {
            const ii1iIl11 = JSON.parse(liI1II);
            liI1II = JSON.stringify(ii1iIl11);
          } catch {
            liI1II = JSON.stringify(liI1II).slice(1, -1);
          }
        }
        console.log("\n✧ 请求 Body\n" + liI1II);
      }
      if (!Illi1i1 && !lI1l11ll?.["response"]) {
        console.log("\n------------------------------------------------------------------------");
        return;
      }
      if (lI1l11ll?.["headers"]) {
        const illl1IIl = lI1l11ll.headers;
        lii1I1ll = new lI1iiII1({
          "columns": [{
            "title": "名称",
            "name": "label",
            "alignment": "left"
          }, {
            "title": "值",
            "name": "value",
            "alignment": "left",
            "maxLen": 80
          }]
        });
        for (let ilIil1I1 in illl1IIl) {
          let IliIi11 = illl1IIl[ilIil1I1];
          typeof IliIi11 !== "string" && (IliIi11 = JSON.stringify(IliIi11));
          lii1I1ll.addRow({
            "label": ilIil1I1,
            "value": IliIi11
          });
        }
        console.log("\n✧ 响应 Headers");
        lii1I1ll.printTable();
      }
      if (lI1l11ll?.["data"]) {
        let liIlilI = lI1l11ll.data;
        if (typeof liIlilI === "object") liIlilI = JSON.stringify(liIlilI);else {
          if (typeof liIlilI === "string") try {
            const i1Iili = JSON.parse(liIlilI);
            liIlilI = JSON.stringify(i1Iili);
          } catch {
            liIlilI = JSON.stringify(liIlilI).slice(1, -1);
          }
        }
        console.log("\n✧ 响应 Body\n" + liIlilI);
      }
    } catch (l1liiIli) {
      console.log("❌ 处理 REQUEST DEBUG PRINT 时遇到了错误 ➜ " + (l1liiIli.message || l1liiIli));
    }
    console.log("\n------------------------------------------------------------------------");
  }
  async ["getProxyAddressWithApi"](iIl1i1II) {
    let lllllIIl = "";
    try {
      const ll1llIII = /\b(?:\d{1,3}\.){3}\d{1,3}:\d{1,5}\b/g,
        i1iIIliI = {
          "url": iIl1i1II,
          "method": "post",
          "proxy": null,
          "timeout": 30000
        };
      let iilIIIiI = 0,
        Illl1I11 = null;
      const ill1iilI = 1;
      while (iilIIIiI < ill1iilI) {
        const IlII1I1i = await this.request(i1iIIliI);
        if (!IlII1I1i.success) {
          Illl1I11 = IlII1I1i.error;
          iilIIIiI++;
          continue;
        }
        if (!IlII1I1i.data) {
          Illl1I11 = "无响应数据";
          iilIIIiI++;
          continue;
        }
        const Iiiil1I1 = IlII1I1i.data;
        if (typeof Iiiil1I1 === "object") {
          if (Iiiil1I1?.["data"]) {
            let i11lii1l = Iiiil1I1.data;
            if (Array.isArray(i11lii1l) && i11lii1l.length > 0) {
              i11lii1l = i11lii1l[0];
              if (i11lii1l?.["ip"] && i11lii1l?.["port"]) lllllIIl = i11lii1l.ip + ":" + i11lii1l.port;else i11lii1l?.["IP"] && i11lii1l?.["Port"] && (lllllIIl = i11lii1l.IP + ":" + i11lii1l.Port);
            } else {
              if (i11lii1l?.["proxy_list"] && Array.isArray(i11lii1l.proxy_list) && i11lii1l.proxy_list.length > 0) {
                const IlII11 = i11lii1l.proxy_list[0];
                typeof IlII11 === "object" && IlII11?.["ip"] && IlII11?.["port"] ? lllllIIl = IlII11.ip + ":" + IlII11.port : lllllIIl = IlII11;
              }
            }
            lllllIIl && !ll1llIII.test(lllllIIl) && (lllllIIl = "");
          }
          !lllllIIl && (Illl1I11 = "接口响应数据异常：" + JSON.stringify(Iiiil1I1));
        } else {
          const li1iIiii = Iiiil1I1.match(ll1llIII);
          li1iIiii && (lllllIIl = li1iIiii[0]);
          !lllllIIl && (Illl1I11 = "接口响应数据异常：" + Iiiil1I1);
        }
        if (lllllIIl) return lllllIIl;
        iilIIIiI++;
      }
      iilIIIiI >= ill1iilI && console.log("⚠ 提取代理地址失败 ➜ " + Illl1I11);
    } catch (IIIliIil) {
      console.log("❌ 在处理请求代理API获取代理地址时遇到了错误\n" + IIIliIil);
    }
    return lllllIIl;
  }
  ["_getProxyConfigWithAddress"](Ii1lli11 = "") {
    try {
      if (!Ii1lli11) {
        return null;
      }
      if (!Ii1lli11.includes("://")) {
        Ii1lli11 = "http://" + Ii1lli11;
      }
      const lIil1Ili = this.parseUrl(Ii1lli11);
      if (lIil1Ili?.["hostname"]) {
        const Iilii11i = {
          "protocol": lIil1Ili.protocol.replace(":", "") === "https" ? "https" : "http",
          "host": lIil1Ili.hostname,
          "port": parseInt(lIil1Ili?.["port"] || "8080")
        };
        return (lIil1Ili?.["username"] || lIil1Ili?.["password"]) && (Iilii11i.auth = {
          "username": lIil1Ili?.["username"] || "",
          "password": lIil1Ili?.["password"] || ""
        }), Iilii11i;
      }
    } catch {}
    return null;
  }
  ["_getProxyAddressWithConfig"](il1iII = null) {
    try {
      if (!il1iII) return null;
      const I1llIIIl = Object.assign({}, il1iII);
      let liiIi1Ii = "";
      return I1llIIIl.auth && (liiIi1Ii = (I1llIIIl.auth?.["username"] || "") + ":" + (I1llIIIl.auth?.["password"] || "") + "@"), I1llIIIl.protocol + "://" + liiIi1Ii + I1llIIIl.host + ":" + I1llIIIl.port;
    } catch {
      return JSON.stringify(il1iII);
    }
  }
  ["_genHttpsAgentWithProxyConfig"](ill1IIi) {
    try {
      if (!this._HttpsProxyAgent) return null;
      if (!ill1IIi) return null;
      let liIllIi1 = (ill1IIi?.["protocol"] || "http") + "://";
      return ill1IIi?.["auth"] && (liIllIi1 += (ill1IIi.auth?.["username"] || "") + ":" + (ill1IIi.auth?.["password"] || "") + "@"), liIllIi1 += ill1IIi?.["host"] + ":" + (ill1IIi?.["port"] || "8080"), new this._HttpsProxyAgent(liIllIi1);
    } catch (IIi11ll1) {
      console.log("❌ 加载代理时遇到了错误 ➜ " + (IIi11ll1.message || IIi11ll1));
    }
    return null;
  }
  async ["concTaskNormal"](I1l1i111 = "3", lIIi11I = 100, iIl1iIll) {
    let iIiilli = false,
      lllI111l = 0,
      il1lIil1 = 0;
    async function iII1liii(Iil1lII) {
      const lli111l1 = await iIl1iIll(Iil1lII);
      if (lli111l1) {
        if (typeof lli111l1 === "boolean") iIiilli = true;else typeof lli111l1 === "object" && lli111l1?.["runEnd"] && (iIiilli = true);
      }
      lllI111l--;
      lll1i1il();
    }
    async function lll1i1il() {
      while (lllI111l < I1l1i111 && lIIi11I > 0 && !iIiilli) {
        lIIi11I--;
        lllI111l++;
        il1lIil1++;
        await iII1liii(il1lIil1);
      }
      iIiilli && (await new Promise(l1II1iii => {
        const iliII1l1 = setInterval(() => {
          if (lllI111l === 0) {
            clearInterval(iliII1l1);
            l1II1iii();
          }
        }, 100);
      }));
    }
    const liilIiIi = Math.min(lIIi11I, I1l1i111),
      llIIIii1 = [];
    for (let iilil1lI = 0; iilil1lI < liilIiIi; iilil1lI++) {
      lIIi11I--;
      lllI111l++;
      il1lIil1++;
      llIIIii1.push(iII1liii(il1lIil1));
    }
    await Promise.all(llIIIii1);
    lll1i1il();
    await new Promise(Ii1I1I11 => {
      const illIil11 = setInterval(() => {
        (lllI111l === 0 || iIiilli) && (clearInterval(illIil11), Ii1I1I11());
      }, 100);
    });
  }
  ["setCookie"](ii1Ii1II) {
    this._Cookie = ii1Ii1II;
  }
  ["unsetCookie"]() {
    this._Cookie = "";
    this._UserAgent = "";
  }
  ["getCookie"]() {
    return this._Cookie;
  }
  ["getLatestAppVersion"]() {
    return this._latestAppVersionData.version || "";
  }
  ["getLatestAppBuildVersion"]() {
    return this._latestAppVersionData.build || "";
  }
  ["getLatestLiteAppVersion"]() {
    return this._latestLiteAppVersionData.version || "";
  }
  ["getLatestLiteAppBuildVersion"]() {
    return this._latestLiteAppVersionData.build || "";
  }
  ["getErrorMsg"](IllI1lI, li1liIIi = ["msg", "message", "errMsg", "errMessage", "errorMessage", "bizMsg", "subMsg", "echo", "error", "resp_msg", "txt", "rlt", "displayMsg", "resultMsg", "desc"], i1iiIiiI = "") {
    if (!IllI1lI) return i1iiIiiI;
    for (let lIiIl1iI of li1liIIi) {
      if (IllI1lI.hasOwnProperty(lIiIl1iI)) return IllI1lI[lIiIl1iI];
    }
    return i1iiIiiI;
  }
  ["maskUserName"](I1liii1 = "", lIi1Illl = "*") {
    if (!I1liii1) return "";
    if (I1liii1.length <= 1) {
      return lIi1Illl;
    }
    if (I1liii1.length < 5) return I1liii1.slice(0, 1) + lIi1Illl.repeat(I1liii1.length - 1);
    return I1liii1.slice(0, 2) + lIi1Illl.repeat(I1liii1.length - 4) + I1liii1.slice(-2);
  }
  ["genUuid"](II11l1l = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", liIII1ii = "0123456789abcdef") {
    let IIl1lIlI = "";
    for (let Iili1iI1 of II11l1l) {
      if (Iili1iI1 === "x") {
        IIl1lIlI += liIII1ii.charAt(Math.floor(Math.random() * liIII1ii.length));
      } else {
        if (Iili1iI1 === "X") {
          IIl1lIlI += liIII1ii.charAt(Math.floor(Math.random() * liIII1ii.length)).toUpperCase();
        } else IIl1lIlI += Iili1iI1;
      }
    }
    return IIl1lIlI;
  }
  ["genUA"](Ii11I11I = "", IlIIl1I1 = "jd") {
    if (Ii11I11I && this._UserAgentMap.has(Ii11I11I)) return this._UserAgentMap.get(Ii11I11I);
    const ilili1iI = IlIIl1I1 === "lite" ? "lite" : IlIIl1I1 === "jr" ? "jr" : "jd",
      iiiIilIi = {
        "jd": {
          "app": "jdapp",
          "appBuild": this._latestAppVersionData.build,
          "clientVersion": this._latestAppVersionData.version
        },
        "lite": {
          "app": "jdltapp",
          "appBuild": this._latestLiteAppVersionData.build,
          "clientVersion": this._latestLiteAppVersionData.version
        },
        "jr": {
          "clientVersion": this._latestJDJRAppVersionData.version,
          "jdPaySdkVersion": this._latestJDJRAppVersionData.jdPaySdkVersion,
          "stockSDK": this._latestJDJRAppVersionData.stockSDK
        }
      },
      iliII1Ii = [this._latestIOSVersion].map(IiIII1I1 => {
        let lIiii1i1 = IiIII1I1.split(".");
        return lIiii1i1.join(".");
      }),
      i1lllil1 = iliII1Ii[Math.floor(Math.random() * iliII1Ii.length)],
      I11i1lI = "iPhone; CPU iPhone OS " + i1lllil1.replace(".", "_") + " like Mac OS X",
      {
        clientVersion: lliIllIl
      } = iiiIilIi[ilili1iI];
    let iIllll1I, l1IiIiI1;
    switch (ilili1iI) {
      case "jr":
        const {
          stockSDK: i1liIII1,
          jdPaySdkVersion: ilIIl1II
        } = iiiIilIi[ilili1iI];
        iIllll1I = ["Mozilla/5.0 (" + I11i1lI + ") AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148/application=JDJR-App", "clientType=ios", "iosType=iphone", "clientVersion=" + lliIllIl, "HiClVersion=" + lliIllIl, "isUpdate=0", "osVersion=" + i1lllil1, "osName=iOS", "screen=932*430", "src=App Store", "netWork=1", "netWorkType=1", "CpayJS=UnionPay/1.0 JDJR", "stockSDK=" + i1liIII1, "sPoint=", "jdPay=(*#@jdPaySDK*#@jdPayChannel=jdfinance", "jdPayChannelVersion=" + lliIllIl, "jdPaySdkVersion=" + ilIIl1II, "jdPayClientName=iOS*#@jdPaySDK*#@)"], l1IiIiI1 = "&";
        break;
      case "jd":
      case "lite":
      default:
        const {
            app: I1lI1lIi,
            appBuild: illill1i
          } = iiiIilIi[ilili1iI],
          liIi1111 = !!Ii11I11I ? JSON.stringify(this.getCipherConf({
            "ud": CryptoJS.SHA1(Ii11I11I).toString(),
            "sv": i1lllil1,
            "iad": ""
          }, ilili1iI)) : "";
        iIllll1I = [I1lI1lIi, "iPhone", lliIllIl, "", "rn/" + this.genUuid(), "M/5.0", "appBuild/" + illill1i, "jdSupportDarkMode/0", "ef/1", liIi1111 ? "ep/" + encodeURIComponent(liIi1111) : "", "Mozilla/5.0 (" + I11i1lI + ") AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "supportJDSHWK/1", ""], l1IiIiI1 = ";";
        break;
    }
    const lIII1Ili = iIllll1I.join(l1IiIiI1);
    Ii11I11I && this._UserAgentMap.set(Ii11I11I, lIII1Ili);
    if (this._Cookie) this._UserAgent = lIII1Ili;
    return lIII1Ili;
  }
  ["genUAWithJDJR"]() {
    return this.genUA("", "jr");
  }
  ["getJEH"](IIIlIiIi = "") {
    return !IIIlIiIi && (IIIlIiIi = "JD4iPhone/" + this.getLatestAppBuildVersion() + " (iPhone; iOS " + this.getLatestIOSVersion() + "; Scale/3.00)"), encodeURIComponent(JSON.stringify(this.getCipherConf({
      "User-Agent": encodeURIComponent(IIIlIiIi)
    })));
  }
  ["getJEC"](i1Iii111) {
    return encodeURIComponent(JSON.stringify(this.getCipherConf({
      "pin": encodeURIComponent(i1Iii111)
    })));
  }
  ["getCipherConf"](il11li, IIIIl1ii = "jd") {
    if (il11li && typeof il11li === "object") for (let I1II1lil in il11li) {
      il11li[I1II1lil] = this.Base64.encode(il11li[I1II1lil]);
    } else il11li && typeof il11li === "string" ? il11li = this.Base64.encode(il11li) : il11li = {};
    return {
      "ciphertype": 5,
      "cipher": il11li,
      "ts": Math.floor(Date.now() / 1000),
      "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
      "version": "1.0.3",
      "appname": IIIIl1ii === "lite" ? "com.jd.jdmobilelite" : "com.360buy.jdmobile",
      "ridx": -1
    };
  }
  async ["getLoginStatus"](lI1I1Il1 = this._Cookie) {
    if (!lI1I1Il1) {
      return console.log("🚫 getLoginStatus 请求失败 ➜ 未设置Cookie"), undefined;
    }
    try {
      const Il11Ili = {
        "url": "https://plogin.m.jd.com/cgi-bin/ml/islogin",
        "method": "GET",
        "headers": {
          "Accept": "*/*",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh-Hans;q=0.9",
          "Cookie": lI1I1Il1,
          "Host": "plogin.m.jd.com",
          "User-Agent": this._UserAgent || this._defaultUserAgent
        },
        "timeout": 30000,
        "debug": false
      };
      let l11IIl = 0,
        i1i1I11i = null;
      const I1ii1Iii = 1;
      while (l11IIl < I1ii1Iii) {
        const lillllIi = await this.request(Il11Ili);
        if (!lillllIi.success) {
          i1i1I11i = "🚫 getLoginStatus 请求失败 ➜ " + lillllIi.error;
          l11IIl++;
          continue;
        }
        if (!lillllIi.data) {
          i1i1I11i = "🚫 getLoginStatus 请求异常 ➜ 无响应数据";
          l11IIl++;
          continue;
        }
        const Ilil1l1I = lillllIi.data?.["islogin"];
        if (Ilil1l1I === "1") return true;else {
          if (Ilil1l1I === "0") return false;
        }
        l11IIl++;
      }
      l11IIl >= I1ii1Iii && console.log(i1i1I11i);
    } catch (ll1i1iil) {
      console.log("❌ getLoginStatus 在处理请求中遇到了错误\n" + ll1i1iil);
    }
    return undefined;
  }
  async ["joinShopMember"](liiiiil, IIlllIi1 = this._Cookie, Ii1iI1i = "") {
    if (!IIlllIi1) return console.log("🚫 joinShopMember 请求失败 ➜ 未设置Cookie"), undefined;
    if (!liiiiil) return undefined;
    try {
      this._loadModule("h5st");
      if (!this._H5st) return undefined;
      liiiiil = "".concat(liiiiil);
      const liIlI1i = {
        "venderId": liiiiil,
        "bindByVerifyCodeFlag": 1,
        "registerExtend": {},
        "writeChildFlag": 0,
        "channel": 406,
        "appid": "27004",
        "needSecurity": true,
        "bizId": "shopmember_m_jd_com"
      };
      if (!Ii1iI1i) {
        this._shopMemberActivityIds.has(liiiiil) && (Ii1iI1i = this._shopMemberActivityIds.get(liiiiil));
      }
      if (Ii1iI1i) {
        liIlI1i.activityId = Ii1iI1i;
      }
      const I1i1llli = {
          "appId": "27004",
          "appid": "shopmember_m_jd_com",
          "functionId": "bindWithVender",
          "clientVersion": "9.2.0",
          "client": "H5",
          "body": liIlI1i,
          "version": "4.7",
          "t": true,
          "ua": this._UserAgent || this._defaultUserAgent
        },
        l11IlIli = await this._H5st.getH5st(I1i1llli);
      if (!l11IlIli.paramsData) {
        return undefined;
      }
      const lI1iiIIi = {
          "url": "https://api.m.jd.com/client.action",
          "method": "POST",
          "headers": {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "Origin": "https://pages.jd.com",
            "Referer": "https://pages.jd.com/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": this._UserAgent || this._defaultUserAgent,
            "Cookie": IIlllIi1
          },
          "data": Object.assign({}, l11IlIli.paramsData, {
            "area": "",
            "screen": "1290*2796",
            "uuid": "88888"
          }),
          "timeout": 30000
        },
        lIll1i1l = await this.request(lI1iiIIi);
      if (!lIll1i1l.success) return console.log("🚫 joinShopMember 请求失败 ➜ " + lIll1i1l.error), undefined;
      if (!lIll1i1l.data) return console.log("🚫 joinShopMember 请求异常 ➜ 无响应数据"), undefined;
      const iiIiii = lIll1i1l.data;
      if (iiIiii?.["success"] === true) {
        if (iiIiii?.["result"] && iiIiii.result?.["giftInfo"]) for (let iIIiIiIl of iiIiii.result?.["giftInfo"]?.["giftList"]) {
          console.log(" >> 入会获得：" + iIIiIiIl.discountString + iIIiIiIl.prizeName);
        }
        if (iiIiii?.["message"] === "加入店铺会员成功") {
          return true;
        } else {
          if (iiIiii?.["message"] === "活动太火爆，请稍后再试") console.log("🚫 加入店铺会员失败 ➜ " + iiIiii.message);else return console.log("🚫 加入店铺会员失败 ➜ " + iiIiii?.["message"]), false;
        }
      } else {
        if (iiIiii?.["message"]) {
          return console.log("🚫 加入店铺会员失败 ➜ " + iiIiii.message), false;
        } else {
          console.log("🚫 加入店铺会员失败 ➜ " + JSON.stringify(iiIiii));
        }
      }
    } catch (i1i1iiiI) {
      console.log("❌ joinShopMember 在处理请求中遇到了错误\n" + i1i1iiiI);
    }
    return undefined;
  }
  async ["getShopMemberStatus"](illiiii, lil1l11l = this._Cookie) {
    if (!lil1l11l) return console.log("🚫 getShopMemberStatus 请求失败 ➜ 未设置Cookie"), undefined;
    if (!illiiii) return undefined;
    try {
      this._loadModule("h5st");
      if (!this._H5st) {
        return undefined;
      }
      illiiii = "".concat(illiiii);
      const li11III1 = {
          "appId": "27004",
          "appid": "shopmember_m_jd_com",
          "functionId": "getShopOpenCardInfo",
          "clientVersion": "9.2.0",
          "client": "H5",
          "body": {
            "venderId": illiiii,
            "payUpShop": true,
            "queryVersion": "10.5.2",
            "appid": "27004",
            "needSecurity": true,
            "bizId": "shopmember_m_jd_com",
            "channel": 406
          },
          "version": "4.7",
          "t": true,
          "ua": this._UserAgent || this._defaultUserAgent
        },
        lIllIiI1 = await this._H5st.getH5st(li11III1);
      if (!lIllIiI1.paramsData) return undefined;
      const lilli1ll = {
          "url": "https://api.m.jd.com/client.action",
          "method": "POST",
          "headers": {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh-Hans;q=0.9",
            "Origin": "https://pages.jd.com",
            "Referer": "https://pages.jd.com/",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": this._UserAgent || this._defaultUserAgent,
            "Cookie": lil1l11l
          },
          "data": Object.assign({}, lIllIiI1.paramsData, {
            "area": "",
            "screen": "1290*2796",
            "uuid": "88888"
          }),
          "timeout": 30000
        },
        iII1i1Ii = await this.request(lilli1ll);
      if (!iII1i1Ii.success) return console.log("🚫 getShopMemberStatus 请求失败 ➜ " + iII1i1Ii.error), undefined;
      if (!iII1i1Ii.data) return console.log("🚫 getShopMemberStatus 请求异常 ➜ 无响应数据"), undefined;
      const lIlilI = iII1i1Ii.data;
      if (lIlilI?.["success"] === true) {
        let iliI1Il1 = lIlilI.result;
        Array.isArray(iliI1Il1) && (iliI1Il1 = iliI1Il1[0]);
        const liIiII1 = iliI1Il1?.["interestsRuleList"]?.[0]?.["interestsInfo"]?.["activityId"];
        if (liIiII1) {
          this._shopMemberActivityIds.set(illiiii, liIiII1);
        }
        return iliI1Il1?.["userInfo"]?.["openCardStatus"] === 1;
      } else {
        if (lIlilI?.["message"]) {
          console.log("🚫 获取店铺会员状态异常 ➜ " + lIlilI.message);
        } else console.log("🚫 获取店铺会员状态异常 ➜ " + JSON.stringify(lIlilI));
      }
    } catch (iiiIilI1) {
      console.log("❌ getShopMemberStatus 在处理请求中遇到了错误\n" + iiiIilI1);
    }
    return undefined;
  }
  async ["getShopDetail"](llilI1II = {
    "venderId": "",
    "shopId": ""
  }, IiIiII1l = this._Cookie) {
    const {
      venderId: ilI1iI11,
      shopId: l1i1lii1
    } = llilI1II;
    if (!ilI1iI11 && !l1i1lii1) {
      return {};
    }
    try {
      const i1l1il1 = {
          "url": "https://api.m.jd.com/client.action",
          "method": "POST",
          "headers": {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,en-GB;q=0.6",
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "https://shop.m.jd.com",
            "Referer": "https://shop.m.jd.com/",
            "Host": "api.m.jd.com",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
            "User-Agent": this._defaultUserAgent,
            "X-Referer-Page": "https://shop.m.jd.com/shop/introduce",
            "X-Rp-Client": "h5_1.0.0",
            "Cookie": IiIiII1l || ""
          },
          "data": {
            "functionId": "whx_getMShopDetail",
            "body": JSON.stringify({
              "shopId": "".concat(l1i1lii1 || ""),
              "venderId": "".concat(ilI1iI11 || ""),
              "source": "m-shop"
            }),
            "t": Date.now().toString(),
            "appid": "shop_m_jd_com",
            "clientVersion": "11.0.0",
            "client": "wh5",
            "area": "",
            "uuid": ""
          },
          "timeout": 30000
        },
        iIi11ii1 = await this.request(i1l1il1);
      if (!iIi11ii1.success) return console.log("🚫 getShopDetail 请求失败 ➜ " + iIi11ii1.error), {};
      if (!iIi11ii1.data) return console.log("🚫 getShopDetail 请求异常 ➜ 无响应数据"), {};
      const i1li1I1i = iIi11ii1.data;
      if (i1li1I1i.code === "200" && i1li1I1i.success === true && i1li1I1i.data) return i1li1I1i?.["data"] || {};
    } catch (Ill11IiI) {
      console.log("❌ getShopDetail 在处理请求中遇到了错误\n" + Ill11IiI);
    }
    return {};
  }
  async ["getShopId"](lili1i1I, lI11Ilil = this._Cookie) {
    if (!lili1i1I) return null;
    try {
      const Il1ilI1i = await this.getShopDetail({
        "venderId": lili1i1I
      }, lI11Ilil);
      return Il1ilI1i?.["shopBaseInfo"]?.["shopId"] || null;
    } catch (i1Ill1l) {
      console.log("❌ getShopId 在处理请求中遇到了错误\n" + i1Ill1l);
    }
    return null;
  }
  async ["getVenderId"](IiI1Ili, lil1il1i = this._Cookie) {
    if (!IiI1Ili) return null;
    try {
      const iIli11l1 = await this.getShopDetail({
        "shopId": IiI1Ili
      }, lil1il1i);
      return iIli11l1?.["shopBaseInfo"]?.["venderId"] || null;
    } catch (iI1i1lI) {
      console.log("❌ getVenderId 在处理请求中遇到了错误\n" + iI1i1lI);
    }
    return null;
  }
  async ["getShopName"](ll1II1Il = {
    "venderId": "",
    "shopId": ""
  }, lIIil11l = this._Cookie) {
    const {
      venderId: iII11li1,
      shopId: liIIliiI
    } = ll1II1Il;
    if (!iII11li1 && !liIIliiI) return null;
    try {
      const lililIii = await this.getShopDetail(ll1II1Il, lIIil11l);
      return lililIii?.["shopBaseInfo"]?.["shopName"] || null;
    } catch (li1Il11l) {
      console.log("❌ getShopName 在处理请求中遇到了错误\n" + li1Il11l);
    }
    return null;
  }
  async ["followShop"](IIIlIiiI, Iiili1ii, I1I1ilIl = this._Cookie) {
    if (!I1I1ilIl) return console.log("🚫 followShop 请求失败 ➜ 未设置Cookie"), undefined;
    if (!IIIlIiiI && typeof IIIlIiiI !== "boolean" || !Iiili1ii) return undefined;
    try {
      const lli1i1iI = {
          "url": "https://api.m.jd.com/client.action",
          "method": "POST",
          "headers": {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate, br",
            "Content-Type": "application/x-www-form-urlencoded",
            "Origin": "https://shop.m.jd.com",
            "Referer": "https://shop.m.jd.com/",
            "Connection": "keep-alive",
            "Accept-Language": "zh-cn",
            "Cookie": I1I1ilIl,
            "User-Agent": this._defaultUserAgent
          },
          "data": {
            "functionId": "whx_followShop",
            "body": JSON.stringify({
              "shopId": Iiili1ii,
              "follow": IIIlIiiI
            }),
            "t": Date.now(),
            "appid": "shop_m_jd_com",
            "clientVersion": "11.0.0",
            "client": "wh5"
          },
          "timeout": 30000
        },
        iIIilI1I = await this.request(lli1i1iI);
      if (!iIIilI1I.success) return console.log("🚫 followShop 请求失败 ➜ " + iIIilI1I.error), undefined;
      if (!iIIilI1I.data) {
        return console.log("🚫 followShop 请求异常 ➜ 无响应数据"), undefined;
      }
      const lIIlill = iIIilI1I.data;
      if (lIIlill?.["code"] === "0") return lIIlill?.["result"]?.["code"] === "0";else {
        if (lIIlill?.["msg"]) {
          return false;
        } else console.log("🚫 " + (IIIlIiiI ? "关注" : "取关") + "店铺异常 ➜ " + JSON.stringify(lIIlill));
      }
    } catch (IlliIlIl) {
      console.log("❌ followShop 在处理请求中遇到了错误\n" + IlliIlIl);
    }
    return undefined;
  }
  ["useAppTls"](l1liIil = {}) {
    return Object.assign({}, this._appHttpsTlsOptions, l1liIil);
  }
  async ["concTask"](il1liilI = "3", I1i1I1i1, i11II11l) {
    const ll1li1I1 = I1i1I1i1.slice();
    let II1IiI11 = false,
      i1illllI = 0,
      liIilIl = 0;
    async function i1Iii11I(lliilll1, iIii1IIi) {
      const iiiIiI1 = await i11II11l(lliilll1, iIii1IIi);
      if (iiiIiI1) {
        if (typeof iiiIiI1 === "boolean") II1IiI11 = true;else typeof iiiIiI1 === "object" && iiiIiI1?.["runEnd"] && (II1IiI11 = true);
      }
      i1illllI--;
      ll1l1i1l();
    }
    async function ll1l1i1l() {
      while (i1illllI < il1liilI && ll1li1I1.length > 0 && !II1IiI11) {
        const ll11iIil = ll1li1I1.shift();
        i1illllI++;
        liIilIl++;
        await i1Iii11I(ll11iIil, liIilIl);
      }
      II1IiI11 && (await new Promise(IiIlI11 => {
        const i1I1Ii1I = setInterval(() => {
          i1illllI === 0 && (clearInterval(i1I1Ii1I), IiIlI11());
        }, 100);
      }));
    }
    const IiiI1ll = Math.min(ll1li1I1.length, il1liilI),
      iIlllliI = [];
    for (let IliliIII = 0; IliliIII < IiiI1ll; IliliIII++) {
      const l1il1lIi = ll1li1I1.shift();
      i1illllI++;
      liIilIl++;
      iIlllliI.push(i1Iii11I(l1il1lIi, liIilIl));
    }
    await Promise.all(iIlllliI);
    ll1l1i1l();
    await new Promise(lI1i111i => {
      const iiiiiI11 = setInterval(() => {
        (i1illllI === 0 || II1IiI11) && (clearInterval(iiiiiI11), lI1i111i());
      }, 100);
    });
  }
  async ["getSign"](llIiIi1l, l1I1lli) {
    !this._hasInitAppSignConfig && (this._initAppSignConfig(), this._hasInitAppSignConfig = true);
    let I1iI1lil = "";
    try {
      const IIlI11II = this._appSignConfig;
      if (IIlI11II.genSign) {
        try {
          I1iI1lil = IIlI11II.genSign(llIiIi1l, l1I1lli);
        } catch (lil1ilI) {
          console.log("🚫 getSign 获取本地签名遇到了错误 ➜ " + (lil1ilI.message || lil1ilI));
        }
        if (I1iI1lil) return I1iI1lil;else {
          console.log("🚫 getSign 本地签名获取失败");
        }
      }
      let IiIi1lll = {
        [IIlI11II.functionIdField]: llIiIi1l,
        [IIlI11II.bodyField]: l1I1lli
      };
      const iiIiliIi = {
        "url": IIlI11II.requestApi,
        "method": IIlI11II.requestMethod.toLowerCase(),
        "headers": {
          "Content-Type": IIlI11II.requestContentType
        },
        "data": null,
        "timeout": 60000,
        "proxy": null,
        "debug": false
      };
      if (IIlI11II.requestMethod === "GET") IIlI11II.requestApi += "?" + this.objectToQueryString(IiIi1lll), delete iiIiliIi.data, delete iiIiliIi.headers["Content-Type"];else {
        if (IIlI11II.requestContentType.indexOf("application/x-www-form-urlencoded") !== -1) {
          if (typeof IiIi1lll[IIlI11II.bodyField] === "object") {
            IiIi1lll[IIlI11II.bodyField] = JSON.stringify(IiIi1lll[IIlI11II.bodyField]);
          }
          iiIiliIi.data = this.objectToQueryString(IiIi1lll);
        } else iiIiliIi.data = JSON.stringify(IiIi1lll);
      }
      const liI11il = await this.request(iiIiliIi);
      if (!liI11il.success) return console.log("🚫 getSign 请求失败 ➜ " + liI11il.error), I1iI1lil;
      if (!liI11il.data) return console.log("🚫 getSign 请求异常 ➜ 无响应数据"), I1iI1lil;
      let II1lllll = liI11il.data;
      if (typeof liI11il.data === "object") {
        if (II1lllll.data) {
          II1lllll = II1lllll.data;
        }
        for (const iII11lIi of ["body", "convertUrl", "convertUrlNew"]) {
          if (II1lllll?.[iII11lIi] && this._checkSignStrFormat(II1lllll[iII11lIi])) {
            I1iI1lil = II1lllll[iII11lIi];
            break;
          }
        }
        !I1iI1lil && console.log("🚫 getSign 响应数据解析异常 ➜ " + JSON.stringify(II1lllll));
      } else {
        if (this._checkSignStrFormat(II1lllll)) I1iI1lil = II1lllll;else {
          console.log("🚫 getSign 响应数据解析异常 ➜ " + II1lllll);
        }
      }
    } catch (IllliII) {
      console.log("🚫 getSign 在处理请求中遇到了错误\n" + IllliII);
    }
    return I1iI1lil;
  }
  ["_checkSignStrFormat"](i1i1l1Ii) {
    const iIiii1Ii = ["body=", "st=", "sign=", "sv="];
    for (let IIIiiIll = 0; IIIiiIll < iIiii1Ii.length; IIIiiIll++) {
      if (!i1i1l1Ii.includes(iIiii1Ii[IIIiiIll])) return false;
    }
    return true;
  }
  ["_loadModule"](IlllIllI) {
    switch (IlllIllI) {
      case "h5st":
        if (!this._H5st) try {
          const {
            H5st: lIiiII1I
          } = require(this._jdCryptoModelPath);
          this._H5st = lIiiII1I;
        } catch (i1il1111) {
          console.log("❌ h5st 组件加载失败");
        }
        break;
      case "TablePrint":
        if (!this._Table) try {
          const {
            Table: illI1il1
          } = require("console-table-printer");
          this._Table = illI1il1;
        } catch (IIii1Ii1) {
          console.log("❌ console-table-printer 表格打印模块加载失败 " + (IIii1Ii1.message || IIii1Ii1));
        }
        break;
      case "HttpsProxyAgent":
        if (!this._HttpsProxyAgent) {
          try {
            const {
              HttpsProxyAgent: lI11IilI
            } = require("https-proxy-agent");
            this._HttpsProxyAgent = lI11IilI;
          } catch (lIilil1l) {
            try {
              this._HttpsProxyAgent = require("https-proxy-agent");
            } catch (iI11l1I) {
              console.log("❌ https-proxy-agent 代理模块加载失败 " + (iI11l1I.message || iI11l1I));
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
  static ["_utf8Encode"](l111i1li) {
    l111i1li = l111i1li.replace(/rn/g, "n");
    let ilIIIIIi = "",
      lIlllIlI;
    for (let iI1Ii = 0; iI1Ii < l111i1li.length; iI1Ii++) {
      lIlllIlI = l111i1li.charCodeAt(iI1Ii);
      if (lIlllIlI < 128) {
        ilIIIIIi += String.fromCharCode(lIlllIlI);
      } else lIlllIlI > 127 && lIlllIlI < 2048 ? (ilIIIIIi += String.fromCharCode(lIlllIlI >> 6 | 192), ilIIIIIi += String.fromCharCode(lIlllIlI & 63 | 128)) : (ilIIIIIi += String.fromCharCode(lIlllIlI >> 12 | 224), ilIIIIIi += String.fromCharCode(lIlllIlI >> 6 & 63 | 128), ilIIIIIi += String.fromCharCode(lIlllIlI & 63 | 128));
    }
    return ilIIIIIi;
  }
  static ["_utf8Decode"](lilI11Ii) {
    let IIIIi11 = "",
      Ilii1l11,
      II1IilIi,
      iiilI1I1,
      IilIIi1I = 0;
    while (IilIIi1I < lilI11Ii.length) {
      Ilii1l11 = lilI11Ii.charCodeAt(IilIIi1I);
      if (Ilii1l11 < 128) {
        IIIIi11 += String.fromCharCode(Ilii1l11);
        IilIIi1I++;
      } else Ilii1l11 > 191 && Ilii1l11 < 224 ? (II1IilIi = lilI11Ii.charCodeAt(IilIIi1I + 1), IIIIi11 += String.fromCharCode((Ilii1l11 & 31) << 6 | II1IilIi & 63), IilIIi1I += 2) : (II1IilIi = lilI11Ii.charCodeAt(IilIIi1I + 1), iiilI1I1 = lilI11Ii.charCodeAt(IilIIi1I + 2), IIIIi11 += String.fromCharCode((Ilii1l11 & 15) << 12 | (II1IilIi & 63) << 6 | iiilI1I1 & 63), IilIIi1I += 3);
    }
    return IIIIi11;
  }
  static ["encode"](iillIliI, llIlIIl1 = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/") {
    let l1I1iIii = "",
      iliIli1i,
      IiI1ilil,
      IllIIl1l,
      IiIiIIIi,
      liI1I1i1,
      Iiilill,
      liIilil1,
      ii1lii = 0;
    iillIliI = this._utf8Encode(iillIliI);
    while (ii1lii < iillIliI.length) {
      iliIli1i = iillIliI.charCodeAt(ii1lii++);
      IiI1ilil = iillIliI.charCodeAt(ii1lii++);
      IllIIl1l = iillIliI.charCodeAt(ii1lii++);
      IiIiIIIi = iliIli1i >> 2;
      liI1I1i1 = (iliIli1i & 3) << 4 | IiI1ilil >> 4;
      Iiilill = (IiI1ilil & 15) << 2 | IllIIl1l >> 6;
      liIilil1 = IllIIl1l & 63;
      if (isNaN(IiI1ilil)) {
        Iiilill = liIilil1 = 64;
      } else {
        if (isNaN(IllIIl1l)) {
          liIilil1 = 64;
        }
      }
      l1I1iIii = l1I1iIii + llIlIIl1.charAt(IiIiIIIi) + llIlIIl1.charAt(liI1I1i1) + llIlIIl1.charAt(Iiilill) + llIlIIl1.charAt(liIilil1);
    }
    while (l1I1iIii.length % 4 > 1) l1I1iIii += "=";
    return l1I1iIii;
  }
  static ["decode"](IlIi1ll1, i11iIIll = "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/") {
    let i1l1Ii1i = "",
      IlliIi1l,
      Iiliilll,
      il1i1l1I,
      I1liIIIi,
      llIiilI,
      lii1iI,
      lI1l111I,
      I11lIlI = 0;
    while (I11lIlI < IlIi1ll1.length) {
      I1liIIIi = i11iIIll.indexOf(IlIi1ll1.charAt(I11lIlI++));
      llIiilI = i11iIIll.indexOf(IlIi1ll1.charAt(I11lIlI++));
      lii1iI = i11iIIll.indexOf(IlIi1ll1.charAt(I11lIlI++));
      lI1l111I = i11iIIll.indexOf(IlIi1ll1.charAt(I11lIlI++));
      IlliIi1l = I1liIIIi << 2 | llIiilI >> 4;
      Iiliilll = (llIiilI & 15) << 4 | lii1iI >> 2;
      il1i1l1I = (lii1iI & 3) << 6 | lI1l111I;
      i1l1Ii1i += String.fromCharCode(IlliIi1l);
      if (lii1iI !== 64) i1l1Ii1i += String.fromCharCode(Iiliilll);
      if (lI1l111I !== 64) i1l1Ii1i += String.fromCharCode(il1i1l1I);
    }
    return i1l1Ii1i = this._utf8Decode(i1l1Ii1i), i1l1Ii1i;
  }
}
class LocalStorageCache {
  constructor(liIlilil = null, i11li1lI = 0, i1l1I1i1 = null) {
    this.saveFile = liIlilil;
    this.defaultTTL = i11li1lI;
    this.reloadInterval = i1l1I1i1;
    this.lastLoad = 0;
    this.data = new Map();
    this.pendingWrites = false;
    this.load();
  }
  ["load"]() {
    if (this.saveFile && fs.existsSync(this.saveFile)) try {
      const Ill1llil = fs.readFileSync(this.saveFile, "utf8"),
        IlIll1 = JSON.parse(Ill1llil);
      this.data = new Map(Object.entries(IlIll1));
    } catch (llliIi) {}
    this.lastLoad = this.now();
  }
  ["save"]() {
    if (this.saveFile && !this.pendingWrites) {
      this.pendingWrites = true;
      try {
        const I11l1i11 = JSON.stringify(Object.fromEntries(this.data));
        fs.writeFileSync(this.saveFile, I11l1i11, "utf8");
      } catch {}
      this.pendingWrites = false;
    }
  }
  ["clear"]() {
    this.data.clear();
  }
  ["_checkAndReload"](IlI1iIll = this.now()) {
    if (!this.reloadInterval || !this.saveFile) return;
    IlI1iIll - this.lastLoad > this.reloadInterval && this.load();
  }
  ["now"]() {
    return Date.now();
  }
  ["put"](i1Iii, illIiiil = null, Iii1l1I = 0, ililiiII) {
    this._checkAndReload();
    Iii1l1I = Iii1l1I === 0 ? this.defaultTTL : Iii1l1I;
    const IiI11Ii = Iii1l1I === 0 ? 0 : this.now() + Iii1l1I;
    let lil1l1 = null;
    this.data.has(i1Iii) && (lil1l1 = this.data.get(i1Iii).val);
    illIiiil !== null ? this.data.set(i1Iii, {
      "expires": IiI11Ii,
      "val": illIiiil
    }) : this.data.delete(i1Iii);
    this.save();
    if (ililiiII && lil1l1) ililiiII(lil1l1);
    return lil1l1;
  }
  ["get"](Iill1I1i, IIl1III1) {
    this._checkAndReload();
    let Iil1Iili = null;
    if (this.data.has(Iill1I1i)) {
      const IIlliIi = this.data.get(Iill1I1i);
      IIlliIi.expires === 0 || this.now() < IIlliIi.expires ? Iil1Iili = IIlliIi.val : (Iil1Iili = null, this.nuke(Iill1I1i));
    }
    if (IIl1III1) IIl1III1(Iil1Iili);
    return Iil1Iili;
  }
  ["del"](i1lli1lI, liIiiI1I) {
    this._checkAndReload();
    let l111iiI1 = null;
    this.data.has(i1lli1lI) && (l111iiI1 = this.data.get(i1lli1lI).val, this.data.delete(i1lli1lI), this.save());
    if (liIiiI1I) liIiiI1I(l111iiI1);
    return l111iiI1;
  }
  ["nuke"](iIIll11I) {
    this._checkAndReload();
    if (this.data.has(iIIll11I)) {
      this.data.delete(iIIll11I);
      this.save();
    }
  }
}
module.exports = new Common();