//Sat Jul 20 2024 08:44:21 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("新东东农场助力指定次数");
const jdCookie = require("./jdCookie"),
  notify = require("./utils/Rebels_sendJDNotify"),
  common = require("./utils/Rebels_jdCommon"),
  {
    H5st
  } = require("./utils/Rebels_H"),
  CryptoJS = require("crypto-js"),
  querystring = require("querystring"),
  helpnum = parseInt(process.env.JD_XinFarm_helpnum, 10) || 30,
  isNotify = (process.env.JD_XinFarm_notify || process.env.JD_XinFarm_Notify) === "true",
  needRemoveArr = [];
let cookie = "",
  cookiesArr = Object.keys(jdCookie).map(_0xab0397 => jdCookie[_0xab0397]).filter(_0x76dcab => _0x76dcab);
!cookiesArr[0] && ($.msg($.name, "【提示】请先获取Cookie"), process.exit(1));
let helpcookiesArr = [...cookiesArr];
!(async () => {
  console.log("==========" + $.name + "变量开启状态==========");
  console.log("活动入口: [APP-我的-东东农场]");
  console.log("助力次数: [" + helpnum + "]次");
  console.log("代理开关: [" + common.getProxyStatus() + "]");
  console.log("通知推送: [" + (isNotify ? "开启" : "关闭") + "]");
  console.log("==========" + $.name + "变量状态结束==========");
  console.log("");
  notify.config({
    title: $.name
  });
  console.log("【开始】共计[" + cookiesArr.length + "]个账号：\n");
  $.needRemoveCookieIndex = [];
  for (let _0x2aa2f4 = 0; _0x2aa2f4 < cookiesArr.length; _0x2aa2f4++) {
    $.index = _0x2aa2f4 + 1;
    cookie = cookiesArr[_0x2aa2f4];
    common.setCookie(cookie);
    $.UserName = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
    $.UA = common.genUA($.UserName);
    $.message = notify.create($.index, $.UserName);
    $.nickName = "";
    $.retryTimes = 0;
    $.title = "【账号" + $.index + "】" + $.UserName + "：";
    await myhelp();
    common.unsetCookie();
    if ($.runEnd) {
      break;
    }
  }
  const _0x3d31ce = notify.getMessage();
  _0x3d31ce && (console.log("\n📣 运行结果\n" + _0x3d31ce.replace(/：/g, " ➜ ")), isNotify && (notify.appendContent("\n"), await notify.push()));
})().catch(_0xb6cb9b => $.logErr(_0xb6cb9b)).finally(() => $.done());
async function myhelp() {
  try {
    const _0x12a448 = await common.getLoginStatus(cookie);
    if (!_0x12a448 && typeof _0x12a448 === "boolean") {
      console.log($.title + "账号无效");
      $.needRemoveCookieIndex.push($.index);
      return;
    }
    $.hashelp = false;
    $.farm_home = "";
    await sendRequest("farm_home");
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
    if ($.farm_home?.["result"]?.["farmHomeShare"]?.["inviteCode"]) {
      $.inviteCode = $.farm_home?.["result"]?.["farmHomeShare"]?.["inviteCode"];
      $.farm_assist_init_info_hot = true;
      $.farm_assist_init_info = "";
      await sendRequest("farm_assist_init_info");
      if (!$.farm_assist_init_info || $.farm_assist_init_info_hot) {
        return;
      }
      await $.wait(parseInt(Math.random() * 1000 + 1000, 10));
      const _0x24b97f = $.farm_assist_init_info?.["result"]?.["assistFriendList"] || [],
        _0x2ee040 = $.farm_assist_init_info?.["result"]?.["assistStageList"] || [];
      let _0x352b32 = _0x2ee040.reduce((_0x45e213, _0x4ab6bf) => Math.max(_0x45e213, _0x4ab6bf.assistNum), 0);
      const _0x267446 = _0x24b97f.length;
      console.log($.title + "助力码[" + $.inviteCode + "]，最多需要[" + _0x352b32 + "]助力，当前有" + _0x267446 + "位好友助力");
      if (_0x267446 >= _0x352b32) {
        console.log($.title + "助力码[" + $.inviteCode + "]，助力好友已满，跳过助力");
        return;
      } else {
        if (_0x267446 >= helpnum) {
          console.log($.title + "当前助力的好友数" + _0x267446 + " 大于等于设定的帮助人数 " + helpnum + " ，跳过助力 ");
          return;
        } else {
          console.log($.title + "当前设定的帮助人数 " + helpnum + " 小于助力好友数 " + _0x267446 + " ，开始助力");
          let _0x3c192e = _0x267446 || 0;
          for (let _0x2a17ab = 0; _0x2a17ab < helpcookiesArr.length; _0x2a17ab++) {
            $.index = _0x2a17ab + 1;
            cookie = helpcookiesArr[_0x2a17ab];
            common.setCookie(cookie);
            let _0x578002 = decodeURIComponent(common.getCookieValue(cookie, "pt_pin"));
            if (_0x578002 === $.UserName) {
              console.log($.title + "跳过自己的账号 ➜ " + $.UserName);
              continue;
            }
            $.UserName = _0x578002;
            $.UA = common.genUA($.UserName);
            $.message = notify.create($.index, $.UserName);
            $.nickName = "";
            $.retryTimes = 0;
            $.title = "【账号" + $.index + "】" + $.UserName + "：";
            $.code = $.inviteCode;
            $.farm_assist = "";
            await sendRequest("farm_assist");
            const _0x3e6401 = $.farm_assist?.["result"]?.["masterInfo"]?.["nickname"];
            switch ($.farm_assist?.["bizCode"]) {
              case 0:
                console.log($.title + "助力[" + _0x3e6401 + "](" + $.code + ")成功 ✅(" + $.farm_assist?.["result"]?.["amount"] + "g💧)");
                _0x3c192e++;
                console.log($.title + "当前助力次数 " + _0x3c192e + " / " + helpnum);
                _0x3c192e >= helpnum && (console.log($.title + "助力次数已达到设定值 " + helpnum + " ，跳出本次助力"), $.message.insert("[" + $.code + "]已达到设定助力次数" + helpnum + "次"), $.hashelp = true);
                break;
              case -4001:
                console.log($.title + "助力[" + _0x3e6401 + "](" + $.code + ")失败(" + $.farm_assist?.["bizMsg"] + ")，重试1次");
                await $.wait(3000);
                await sendRequest("farm_assist");
                break;
              case -1001:
                console.log($.title + "助力(" + $.code + ")失败(" + $.farm_assist?.["bizMsg"] + ")");
                needRemoveArr.push(decodeURIComponent(common.getCookieValue(cookie, "pt_pin")));
                await $.wait(3000);
                break;
              case 5002:
                console.log($.title + "助力失败(不能助力自己)");
                break;
              case 5003:
                console.log($.title + "助力[" + _0x3e6401 + "](" + $.code + ")失败(今日已给该好友助力过了)");
                break;
              case 5004:
                console.log($.title + "助力[" + _0x3e6401 + "](" + $.code + ")失败(今日助力次数已耗尽)");
                needRemoveArr.push(decodeURIComponent(common.getCookieValue(cookie, "pt_pin")));
                break;
              case 5005:
                console.log($.title + "助力[" + _0x3e6401 + "](" + $.code + ")失败(好友助力已满)");
                $.message.insert("(" + $.code + ")助力已满");
                break;
              default:
                {
                  console.log($.title + "助力[" + _0x3e6401 + "](" + $.code + ")失败(未知助力结果：" + $.farm_assist?.["bizCode"] + " - " + $.farm_assist?.["bizMsg"] + ")");
                  break;
                }
            }
            common.unsetCookie();
            await $.wait(2000);
            if ($.hashelp) {
              break;
            }
          }
          needRemoveArr.length > 0 && (helpcookiesArr = helpcookiesArr.filter(_0x461204 => !needRemoveArr.includes(decodeURIComponent(common.getCookieValue(_0x461204, "pt_pin")))), helpcookiesArr.length === 0 && (console.log("\n所有账号的助力次数均已耗尽，退出~"), $.runEnd = true), console.log("\n移除[" + needRemoveArr.length + "]个助力次数已耗尽账号，还有可助力账号" + helpcookiesArr.length + "个\n"));
        }
      }
      await $.wait(2000);
    } else {
      console.log($.title + "❌ 获取助力码失败");
      $.needRemoveCookieIndex.push($.index);
    }
  } catch (_0x26b602) {
    console.log("❌ 脚本运行遇到了错误\n" + _0x26b602);
  }
}
async function handleResponse(_0x2eb623, _0x276337) {
  try {
    let _0x44aa34 = "";
    switch (_0x2eb623) {
      case "farm_home":
        _0x276337.code == 0 ? _0x276337.data?.["bizCode"] === 0 ? $.farm_home = _0x276337.data : (_0x44aa34 = common.getErrorMsg(_0x276337.data), console.log($.title + "农场首页失败：" + _0x44aa34)) : (_0x44aa34 = common.getErrorMsg(_0x276337), console.log($.title + "农场首页失败：" + _0x44aa34));
        break;
      case "farm_assist":
        _0x276337.code === 0 ? $.farm_assist = _0x276337.data : (_0x44aa34 = common.getErrorMsg(_0x276337), console.log($.title + "助力失败：" + _0x44aa34), ["登陆", "失败"].some(_0x1e0ebb => _0x44aa34.includes(_0x1e0ebb)) && needRemoveArr.push(decodeURIComponent(common.getCookieValue(cookie, "pt_pin"))));
        break;
      case "farm_assist_init_info":
        if (_0x276337.code === 0) {
          if (_0x276337.data?.["bizCode"] === 0) {
            $.farm_assist_init_info_hot = false;
            $.farm_assist_init_info = _0x276337.data;
          } else {
            _0x44aa34 = common.getErrorMsg(_0x276337.data);
            console.log($.title + "助力列表失败：" + _0x44aa34);
            ["种树"].some(_0x317103 => _0x44aa34.includes(_0x317103));
          }
        } else {
          _0x44aa34 = common.getErrorMsg(_0x276337);
          console.log($.title + "助力列表失败：" + _0x44aa34);
        }
        break;
    }
  } catch (_0x176a41) {
    console.log("❌ 未能正确处理 " + _0x2eb623 + " 请求响应 " + (_0x176a41.message || _0x176a41));
  }
}
async function sendRequest(_0x37434f) {
  if ($.runEnd) {
    return;
  }
  let _0x47da06 = "",
    _0x53ef75 = null,
    _0x566612 = null,
    _0x336491 = "POST",
    _0x1bbc8f = {},
    _0x492478 = {};
  switch (_0x37434f) {
    case "farm_home":
      _0x492478 = {
        appId: "c57f6",
        functionId: "farm_home",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x1bbc8f = await H5st2.getH5st(_0x492478);
      _0x47da06 = "https://api.m.jd.com/client.action";
      _0x53ef75 = _0x1bbc8f.paramsData;
      break;
    case "farm_assist":
      _0x492478 = {
        appId: "28981",
        functionId: "farm_assist",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3,
          inviteCode: $.code,
          shareChannel: "ttt3",
          assistChannel: ""
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x1bbc8f = await H5st2.getH5st(_0x492478);
      _0x47da06 = "https://api.m.jd.com/client.action";
      _0x53ef75 = _0x1bbc8f.paramsData;
      break;
    case "farm_assist_init_info":
      _0x492478 = {
        appId: "c57f6",
        functionId: "farm_assist_init_info",
        appid: "signed_wh5",
        clientVersion: common.getLatestAppVersion(),
        client: "apple",
        body: {
          version: 3,
          channel: 0
        },
        version: "4.2",
        ua: $.UA,
        t: true
      };
      _0x1bbc8f = await H5st2.getH5st(_0x492478);
      _0x47da06 = "https://api.m.jd.com/client.action";
      _0x53ef75 = _0x1bbc8f.paramsData;
      break;
    default:
      console.log("❌ 未知请求 " + _0x37434f);
      return;
  }
  const _0x574f26 = {
    osVersion: common.getLatestIOSVersion(),
    rfs: "0000",
    screen: "430*0",
    wqDefault: "false"
  };
  _0x53ef75 && Object.assign(_0x53ef75, _0x574f26);
  _0x566612 && Object.assign(_0x566612, _0x574f26);
  const _0x30248b = {
    url: _0x47da06,
    method: _0x336491,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-cn",
      Connection: "keep-alive",
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie: cookie,
      Host: "api.m.jd.com",
      Referer: "https://h5.m.jd.com/",
      "X-Referer-Page": "https://h5.m.jd.com/pb/015686010/Bc9WX7MpCW7nW9QjZ5N3fFeJXMH/index.html",
      Origin: "https://h5.m.jd.com",
      "x-rp-client": "h5_1.0.0",
      "User-Agent": $.UA
    },
    params: _0x566612,
    data: _0x53ef75,
    timeout: 30000
  };
  _0x336491 === "GET" && (delete _0x30248b.data, delete _0x30248b.headers["Content-Type"]);
  const _0x487f9a = 1;
  let _0x31c894 = 0,
    _0x4dd606 = null,
    _0x30b000 = false;
  while (_0x31c894 < _0x487f9a) {
    _0x31c894 > 0 && (await $.wait(1000));
    const _0x2faa61 = await common.request(_0x30248b);
    if (!_0x2faa61.success) {
      _0x4dd606 = "🚫 " + _0x37434f + " 请求失败 ➜ " + _0x2faa61.error;
      _0x31c894++;
      continue;
    }
    if (!_0x2faa61.data) {
      _0x4dd606 = "🚫 " + _0x37434f + " 请求失败 ➜ 无响应数据";
      _0x31c894++;
      continue;
    }
    await handleResponse(_0x37434f, _0x2faa61.data);
    _0x30b000 = false;
    break;
  }
  _0x31c894 >= _0x487f9a && (console.log(_0x4dd606), _0x30b000 && ($.outFlag = true, $.message && $.message.fix(_0x4dd606)));
}
class H5st42 {
  constructor() {
    this._algoKey = CryptoJS.enc.Utf8.parse("wm0!@w-s#ll1flo(");
    this._ivKey = CryptoJS.enc.Utf8.parse("0102030405060708");
    this._tokenMaps = {
      4.2: {}
    };
    this._algoMaps = {
      4.2: {}
    };
    this._fpMaps = new Map();
    this._latestAppVersionData = {
      build: common.getLatestAppBuildVersion(),
      version: common.getLatestAppVersion()
    };
    this._latestIOSVersion = common.getLatestIOSVersion();
  }
  async getH5st(_0x5375ee) {
    let _0x5618e1 = Object.assign({}, _0x5375ee, {
      h5st: "",
      params: "",
      paramsData: {}
    });
    try {
      if (!(typeof _0x5375ee === "object" && _0x5375ee !== null)) {
        console.log("❌ getH5st 传入参数有误");
        return _0x5618e1;
      } else {
        const _0x2f6eec = ["appId", "appid", "body", "functionId"],
          _0x5a2aba = _0x2f6eec.filter(_0x5b163b => !_0x5375ee[_0x5b163b]);
        if (_0x5a2aba.length > 0) {
          console.log("❌ getH5st 传入参数有误，缺少必要参数：" + _0x5a2aba.join(", "));
          return _0x5618e1;
        }
      }
      _0x5375ee.version = "4.2";
      const _0x5bccbb = this._initParams(_0x5375ee),
        {
          appid: _0x114858,
          body: _0x4c28f4,
          client: _0x42d029,
          clientVersion: _0x42bf5b,
          functionId: _0x3ba8ad
        } = _0x5375ee;
      let _0x92e343 = "",
        _0x3e7cf9 = "";
      const _0x4cad1d = await this._requestAlgo(_0x5bccbb);
      _0x92e343 = _0x4cad1d.token;
      _0x3e7cf9 = _0x4cad1d.algo;
      if (!_0x92e343 && !_0x3e7cf9) {
        return _0x5618e1;
      }
      const _0xdc2766 = {
        appid: _0x114858,
        body: _0x4c28f4,
        client: _0x42d029,
        clientVersion: _0x42bf5b,
        functionId: _0x3ba8ad,
        t: _0x5375ee.t
      };
      _0x5375ee?.["t"] && typeof _0x5375ee.t === "boolean" ? _0x5375ee.t = Date.now() : _0x5375ee.t = "";
      if (!_0xdc2766.client) {
        delete _0xdc2766.client;
      }
      if (!_0xdc2766.clientVersion) {
        delete _0xdc2766.clientVersion;
      }
      const _0x3c3a9d = this._makeSign(_0xdc2766, _0x92e343, _0x3e7cf9, _0x5bccbb),
        _0x55d846 = {
          functionId: _0x3ba8ad,
          body: JSON.stringify(_0x4c28f4),
          t: "",
          appid: _0x114858,
          client: "",
          clientVersion: "",
          h5st: _0x3c3a9d?.["h5st"] || ""
        };
      for (const _0x26b071 of ["t", "client", "clientVersion"]) {
        _0x5375ee[_0x26b071] ? _0x55d846[_0x26b071] = _0x5375ee[_0x26b071] : delete _0x55d846[_0x26b071];
      }
      Object.assign(_0x5618e1, {
        h5st: _0x3c3a9d?.["h5st"] || "",
        params: querystring.stringify(_0x55d846),
        paramsData: _0x55d846
      });
    } catch (_0x40b850) {
      console.log("❌ getH5st 遇到了错误 " + (_0x40b850.message || _0x40b850));
    }
    return _0x5618e1;
  }
  _initParams(_0x1fa6d3) {
    const _0x222df2 = {
      version: "",
      appId: _0x1fa6d3?.["appId"] || "",
      fv: "",
      fp: "",
      ua: "",
      sua: "",
      av: "",
      url: "",
      og: "",
      referer: _0x1fa6d3?.["referer"] || "",
      pin: _0x1fa6d3?.["pin"] || "",
      cookie: _0x1fa6d3?.["cookie"] || ""
    };
    if (_0x1fa6d3?.["ua"]) {
      let _0x298ca7 = _0x1fa6d3.ua,
        _0x3505a5 = _0x298ca7.match(/^[\s\S]*?\(([\s\S]*?)\)/),
        _0x101ecc = _0x298ca7.match(/(?<=\/)[0-9]\.0[^'"\n]+/g);
      _0x3505a5?.["length"] > 0 && _0x101ecc?.["length"] > 0 && (_0x222df2.ua = _0x298ca7, _0x222df2.sua = _0x3505a5[1], _0x222df2.av = _0x101ecc[0]);
    }
    if (!_0x222df2.ua) {
      let _0x2c6f8b = this._genUA(),
        _0x2f0fa8 = _0x2c6f8b.match(/^[\s\S]*?\(([\s\S]*?)\)/),
        _0x3260fd = _0x2c6f8b.match(/(?<=\/)[0-9]\.0[^'"\n]+/g);
      _0x2f0fa8?.["length"] > 0 && _0x3260fd?.["length"] > 0 && (_0x222df2.ua = _0x2c6f8b, _0x222df2.sua = _0x2f0fa8[1], _0x222df2.av = _0x3260fd[0]);
    }
    _0x222df2.version = "4.2";
    _0x222df2.fv = "h5_npm_v4.2.0";
    _0x222df2.fp = this._fpMaps.get(_0x222df2.ua) || "";
    !_0x222df2.fp && (_0x222df2.fp = this._makeFp(), _0x222df2.ua.startsWith("jd") && this._fpMaps.set(_0x222df2.ua, _0x222df2.fp));
    if (_0x1fa6d3?.["url"]) {
      try {
        const _0x175981 = new URL(_0x1fa6d3.url);
        _0x222df2.url = _0x175981.href;
        _0x222df2.og = _0x175981.origin;
      } catch {}
    }
    return _0x222df2;
  }
  async _requestAlgo(_0x548883) {
    try {
      const _0x50de24 = this._getExpandParamsData(_0x548883);
      let _0x21280d = this._AESEncrypt(JSON.stringify(_0x50de24, null, 2), this._algoKey);
      const _0x3ad818 = {
          version: _0x548883.version,
          fp: _0x548883.fp,
          appId: _0x548883.appId,
          timestamp: Date.now(),
          platform: "web",
          expandParams: _0x21280d,
          fv: _0x548883.fv
        },
        _0x5c4bd8 = {
          url: "https://cactus.jd.com/request_algo?g_ty=ajax",
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Origin: "https://cactus.jd.com",
            Host: "cactus.jd.com",
            Accept: "*/*",
            "User-Agent": _0x548883?.["ua"] || "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/122.0.0.0"
          },
          data: _0x3ad818,
          proxy: null,
          timeout: 60000,
          debug: false
        };
      let _0x5dd977 = 0,
        _0x4e9e0a = null;
      const _0x43eb58 = 1;
      while (_0x5dd977 < _0x43eb58) {
        const _0x47a559 = await common.request(_0x5c4bd8);
        if (!_0x47a559.success) {
          _0x4e9e0a = "❌ getH5st request_algo 请求失败 ➜ " + _0x47a559.error;
          _0x5dd977++;
          continue;
        }
        if (!_0x47a559.data) {
          _0x4e9e0a = "🚫 getH5st request_algo 请求失败 ➜ 无响应数据";
          _0x5dd977++;
          continue;
        }
        try {
          const _0x38bccc = _0x47a559.data;
          if (_0x38bccc?.["data"] && _0x38bccc?.["data"]?.["result"]) {
            const _0x32bb3d = _0x38bccc.data.result?.["algo"],
              _0x331c77 = _0x38bccc.data.result?.["tk"];
            if (_0x32bb3d && _0x331c77) {
              return {
                token: _0x331c77,
                algo: _0x32bb3d
              };
            }
          }
          _0x4e9e0a = "🚫 getH5st request_algo 请求异常 ➜ " + JSON.stringify(_0x38bccc);
        } catch (_0xca4f8d) {
          _0x4e9e0a = "❌ getH5st request_algo 在处理接口响应时遇到了错误 ➜ " + (_0xca4f8d.message || _0xca4f8d);
        }
        _0x5dd977++;
      }
      _0x5dd977 >= _0x43eb58 && console.log(_0x4e9e0a);
    } catch (_0xf6f73) {
      console.log("❌ getH5st request_algo 在处理API请求时遇到了错误 " + (_0xf6f73.message || _0xf6f73));
    }
    return {
      token: "",
      algo: ""
    };
  }
  _getExpandParamsData(_0xcabad0) {
    return {
      wc: 0,
      wd: 0,
      l: "zh-CN",
      ls: "zh-CN,zh",
      ml: 0,
      pl: 0,
      av: _0xcabad0.av,
      ua: _0xcabad0.ua,
      sua: _0xcabad0.sua,
      pp: _0xcabad0.pin ? {
        p1: _0xcabad0.pin,
        p2: _0xcabad0.pin
      } : {},
      extend: {
        pm: 0,
        wd: 0,
        l: 0,
        ls: 2,
        wk: 0,
        bu1: "9.9.9"
      },
      pp1: _0xcabad0.pin ? "" : _0xcabad0.cookie,
      pm: {
        ps: "prompt",
        np: "default"
      },
      w: 400,
      h: 700,
      ow: 400,
      oh: 700,
      url: _0xcabad0.url,
      og: _0xcabad0.og,
      pr: 1.25,
      re: _0xcabad0.referer,
      random: this._makeRandomStr(10),
      referer: _0xcabad0.referer,
      v: _0xcabad0.fv,
      ai: _0xcabad0.appId,
      fp: _0xcabad0.fp
    };
  }
  _makeSign(_0x2bf0c0, _0x488177, _0x3aab79, _0xba8241) {
    try {
      const _0x273152 = _0xba8241.version,
        _0x44d606 = Date.now(),
        _0xad1252 = new Date(_0x44d606),
        _0x33a75c = "" + _0xad1252.getFullYear() + String(_0xad1252.getMonth() + 1).padStart(2, "0") + String(_0xad1252.getDate()).padStart(2, "0") + String(_0xad1252.getHours()).padStart(2, "0") + String(_0xad1252.getMinutes()).padStart(2, "0") + String(_0xad1252.getSeconds()).padStart(2, "0") + String(_0xad1252.getMilliseconds()).padStart(3, "0");
      let _0x42a529 = Object.entries(_0x2bf0c0).map(([_0x20a0db, _0x973084]) => {
          _0x20a0db === "body" && (_0x973084 = CryptoJS.SHA256(JSON.stringify(_0x973084)).toString());
          return {
            key: _0x20a0db,
            value: _0x973084
          };
        }),
        _0x265f36 = "",
        _0x18dcdb = "";
      const _0x578c83 = _0x42a529.map(_0x5d4247 => _0x5d4247.key + ":" + _0x5d4247.value).join("&"),
        _0x3f85d0 = new Function("return ".concat(_0x3aab79))();
      let _0x387c4f = _0x33a75c;
      _0x387c4f += "74";
      let _0x4dffb7;
      _0x4dffb7 = _0x3f85d0(_0x488177, _0xba8241.fp, _0x387c4f, _0xba8241.appId, CryptoJS).toString() || "";
      _0x265f36 = CryptoJS.SHA256("".concat(_0x4dffb7).concat(_0x578c83).concat(_0x4dffb7)).toString();
      let _0xe85429 = {};
      _0xe85429 = {
        sua: _0xba8241.sua,
        pp: _0xba8241.pin ? {
          p1: _0xba8241.pin,
          p2: _0xba8241.pin
        } : {},
        extend: {
          pm: 0,
          wd: 0,
          l: 0,
          ls: 2,
          wk: 0,
          bu1: "9.9.9"
        },
        random: this._makeRandomStr(10),
        referer: _0xba8241.referer,
        v: _0xba8241.fv,
        fp: _0xba8241.fp
      };
      _0x18dcdb = this._AESEncrypt(JSON.stringify(_0xe85429, null, 2), CryptoJS.enc.Utf8.parse("DNiHi703B0&17hh1"));
      const _0x4e8232 = ["".concat(_0x33a75c), "".concat(_0xba8241.fp), "".concat(_0xba8241.appId), "".concat(_0x488177), "".concat(_0x265f36), "".concat(_0x273152), "".concat(_0x44d606), "".concat(_0x18dcdb)].join(";");
      return {
        _stk: _0x42a529.map(_0x193cef => _0x193cef.key).join(","),
        _ste: 1,
        h5st: _0x4e8232
      };
    } catch (_0x5f1d4e) {
      console.log("❌ getH5st 生成签名时遇到了错误 " + (_0x5f1d4e.message || _0x5f1d4e));
    }
    return {
      _stk: "",
      _ste: 0,
      h5st: ""
    };
  }
  _AESEncrypt(_0x1e10ff, _0x59ce81) {
    const _0x40135d = CryptoJS.enc.Utf8.parse(_0x1e10ff),
      _0x583280 = CryptoJS.AES.encrypt(_0x40135d, _0x59ce81, {
        iv: this._ivKey,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    return CryptoJS.enc.Hex.stringify(CryptoJS.enc.Base64.parse(_0x583280.toString()));
  }
  _makeRandomStr(_0x3d724e = 32, _0xb6ebeb = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
    const _0x494a52 = _0xb6ebeb.length;
    let _0x8c00c7 = "";
    for (let _0x26cbfb = 0; _0x26cbfb < _0x3d724e; _0x26cbfb++) {
      _0x8c00c7 += _0xb6ebeb.charAt(Math.floor(Math.random() * _0x494a52));
    }
    return _0x8c00c7;
  }
  _genUA() {
    function _0x538551(_0xd85b17 = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", _0x470f79 = "0123456789abcdef") {
      let _0x2b46ce = "";
      for (let _0x3a936c of _0xd85b17) {
        if (_0x3a936c == "x") {
          _0x2b46ce += _0x470f79.charAt(Math.floor(Math.random() * _0x470f79.length));
        } else {
          _0x3a936c == "X" ? _0x2b46ce += _0x470f79.charAt(Math.floor(Math.random() * _0x470f79.length)).toUpperCase() : _0x2b46ce += _0x3a936c;
        }
      }
      return _0x2b46ce;
    }
    const _0x5ab19c = _0x538551(),
      _0x166c58 = ["jdapp", "iPhone", this._latestAppVersionData.version, "", "rn/" + _0x5ab19c, "M/5.0", "appBuild/" + this._latestAppVersionData.build, "jdSupportDarkMode/0", "ef/1", "ep/%7B%22ciphertype%22%3A5%2C%22cipher%22%3A%7B%22ud%22%3A%22DG%3D%3D%22%2C%22sv%22%3A%22CG%3D%3D%22%2C%22iad%22%3A%22%22%7D%2C%22ts%22%3A" + Math.floor(Date.now() / 1000) + "%2C%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22version%22%3A%221.0.3%22%2C%22appname%22%3A%22com.360buy.jdmobile%22%2C%22ridx%22%3A-1%7D", "Mozilla/5.0 (iPhone; CPU iPhone OS " + this._latestIOSVersion.replace(".", "_") + " like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "supportJDSHWK/1", ""],
      _0x2c2ee6 = _0x166c58.join(";");
    return _0x2c2ee6;
  }
  _makeFp() {
    function _0x33ed00(_0x5adbdd, _0x44ee15) {
      return _0x5adbdd + Math.floor(Math.random() * (_0x44ee15 + 1 - _0x5adbdd));
    }
    function _0x28192e(_0x594377, _0x396e8b) {
      for (var _0x484aa3 = [], _0x537305 = 0; _0x537305 < _0x594377.length; _0x537305++) {
        var _0x53f8bb = _0x594377[_0x537305];
        if (_0x33ed00(0, _0x594377.length - _0x537305 - 1) < _0x396e8b - _0x484aa3.length && (_0x484aa3.push(_0x53f8bb), _0x484aa3.length == _0x396e8b)) {
          break;
        }
      }
      for (var _0x167b22 = "", _0x532c80 = 0; _0x532c80 < _0x484aa3.length; _0x532c80 += 1) {
        var _0x4f46e2 = Math.random() * (_0x484aa3.length - _0x532c80) | 0;
        _0x167b22 += _0x484aa3[_0x4f46e2];
        _0x484aa3[_0x4f46e2] = _0x484aa3[_0x484aa3.length - _0x532c80 - 1];
      }
      return _0x167b22;
    }
    function _0x3d7e7a(_0x54be4f, _0x4a5054) {
      for (var _0x51bc61 = 0; _0x51bc61 < _0x4a5054.length; _0x51bc61 += 1) {
        var _0x197004 = _0x54be4f.indexOf(_0x4a5054[_0x51bc61]);
        -1 !== _0x197004 && (_0x54be4f = _0x54be4f.replace(_0x4a5054[_0x51bc61], ""));
      }
      return _0x54be4f;
    }
    var _0x272ab4 = "6d0jhqw3pa",
      _0x5d49e8 = _0x28192e(_0x272ab4, 4),
      _0x4a4438 = _0x33ed00(0, 9),
      _0x44bb06 = _0x3d7e7a(_0x272ab4, _0x5d49e8),
      _0x5502ae = {
        size: _0x4a4438,
        num: _0x44bb06
      };
    var _0x33ed00 = this._makeRandomStr(_0x5502ae.size, _0x5502ae.num) + _0x5d49e8 + this._makeRandomStr(12 - _0x4a4438 - 1, _0x44bb06) + _0x4a4438,
      _0x249017 = _0x33ed00.split(""),
      _0x224caf = _0x249017.slice(0, 14),
      _0x4c1276 = _0x249017.slice(14),
      _0x4e770c = [];
    while (_0x224caf.length > 0) {
      _0x4e770c.push((35 - parseInt(_0x224caf.pop(), 36)).toString(36));
    }
    _0x4e770c = _0x4e770c.concat(_0x4c1276);
    return _0x4e770c.join("");
  }
}
const H5st2 = new H5st42();
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}