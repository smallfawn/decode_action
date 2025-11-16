//Sun Nov 16 2025 06:21:01 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const x_0x25df28 = {
  km: ""
};
let x_0x3065cc = [];
let x_0x1d013d = "https://www.2eva.cn";
const {
  SocksProxyAgent: x_0x55c253
} = require("socks-proxy-agent");
const x_0x2124a6 = require("axios");
const x_0x2c8134 = "kwai-android aegon/4.28.0";
require("dotenv").config();
const x_0x2e3193 = "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0";
const x_0x478b84 = (_0x1d7e7f, _0x538798 = "YYYY-MM-DD HH:mm:ss") => {
  const _0x341c87 = _0x1d7e7f.getFullYear();
  const _0x25c8a3 = String(_0x1d7e7f.getMonth() + 1).padStart(2, "0");
  const _0x2039da = String(_0x1d7e7f.getDate()).padStart(2, "0");
  const _0x536986 = String(_0x1d7e7f.getHours()).padStart(2, "0");
  const _0x4a084b = String(_0x1d7e7f.getMinutes()).padStart(2, "0");
  const _0x2cf3da = String(_0x1d7e7f.getSeconds()).padStart(2, "0");
  return _0x538798.replace("YYYY", _0x341c87).replace("MM", _0x25c8a3).replace("DD", _0x2039da).replace("HH", _0x536986).replace("mm", _0x4a084b).replace("ss", _0x2cf3da);
};
generateLocalIp = async (_0x56b6bd = 1, _0x2b9126 = "C") => {
  const _0x649165 = () => Math.floor(Math.random() * 256);
  switch (_0x2b9126.toUpperCase()) {
    case "A":
      return "10." + _0x649165() + "." + _0x649165() + "." + _0x649165();
    case "B":
      const _0x3157fd = 16 + Math.floor(Math.random() * 16);
      return "172." + _0x3157fd + "." + _0x649165() + "." + _0x649165();
    case "C":
    default:
      return "192.168." + _0x56b6bd + "." + _0x649165();
  }
};
class x_0x162ea7 {
  constructor(_0x2199a9) {
    this.index = x_0x316947.userIdx++;
    this.nickname = this.index;
    this.totalCoin = 0;
    this.allCash = 0;
    this.user = _0x2199a9.split("#");
    this.ck = this.user[0];
    this.salt = this.user[1];
    this.sock = null;
    this.adinfo = {};
    this.userId = null;
    this.did = null;
    this.socks5 = null;
    this.wwip = "";
    this.nwip = "192.168.31.57";
    this.adtype = [];
    this.adtype_follow = [];
    this.cookies = "";
  }
  async getAccountBasicInfo() {
    x_0x316947.wait(4000);
    try {
      const _0x2d4558 = {
        url: "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
        method: "GET",
        timeout: 12000,
        headers: {}
      };
      _0x2d4558.headers["User-Agent"] = x_0x2c8134;
      _0x2d4558.headers.Cookie = this.ck;
      _0x2d4558.headers["Content-Type"] = "application/x-www-form-urlencoded";
      const {
        data: _0x45d46c
      } = await x_0x2124a6.request(_0x2d4558);
      if (_0x45d46c && _0x45d46c.result === 1 && _0x45d46c.data) {
        {
          this.nickname = "[" + this.index + "] " + _0x45d46c.data.userData?.["nickname"];
          this.totalCoin = _0x45d46c.data.totalCoin;
          this.allCash = _0x45d46c.data.totalCash;
          x_0x316947.log("璐﹀彿[" + this.nickname + "] 💰 褰撳墠閲戝竵: " + this.totalCoin + "，💸 褰�鍓嶄綑棰�: " + this.allCash);
        }
      }
      const _0xefe550 = {
        secret_data: "",
        user_id: Number(this.userId),
        salt: this.salt,
        nickname: this.nickname,
        ck: this.ck,
        total_coin: this.totalCoin,
        all_cash: this.allCash,
        sock: this.sock
      };
      const _0x1640ee = {
        url: "https://www.2eva.cn/api/ksjs/ksjs_record/create",
        method: "POST",
        data: _0xefe550
      };
      x_0x2124a6.request(_0x1640ee);
    } catch (_0xcffeb5) {
      x_0x316947.log("璐﹀彿[" + this.nickname + "] 鑾峰彇璐︽埛淇℃伅澶辫触: " + _0xcffeb5);
    }
  }
  checkCookieVariables() {
    const _0x1ec0a1 = ["kpn", "kpf", "userId", "did", "c", "appver", "language", "mod", "did_tag", "egid", "oDid", "androidApiLevel", "newOc", "browseType", "socName", "ftt", "abi", "userRecoBit", "device_abi", "grant_browse_type", "iuid", "rdid", "isp", "thermal", "net", "kcv", "app", "bottom_navigation", "ver", "android_os", "boardPlatform", "slh", "country_code", "nbh", "hotfix_ver", "did_gt", "keyconfig_state", "cdid_tag", "sys", "max_memory", "cold_launch_time_ms", "oc", "sh", "deviceBit", "ddpi", "is_background", "sw", "apptype", "icaver", "totalMemory", "sbh", "darkMode", "earphoneMode"];
    const _0x5b2820 = this.ck;
    const _0x17d37a = {};
    if (_0x5b2820) {
      {
        _0x5b2820.split(";").forEach(_0x59936c => {
          const [_0x6f7cbc, _0x4df394] = _0x59936c.trim().split("=");
          _0x17d37a[_0x6f7cbc] = _0x4df394;
        });
      }
    }
    const _0xf8988 = {};
    _0x1ec0a1.forEach(_0x544eef => {
      _0xf8988[_0x544eef] = _0x17d37a[_0x544eef];
    });
    let _0x13fa37 = /kuaishou\.api_st=([^;]+)/;
    let _0xc39f94 = _0x5b2820.match(new RegExp(_0x13fa37, ""));
    this.api_st = _0xc39f94[1] || "";
    _0x1ec0a1.forEach(_0x21a0a7 => {
      const _0x1ce760 = _0x17d37a[_0x21a0a7];
      if (_0x1ce760 !== undefined) {
        this[_0x21a0a7] = _0x1ce760;
      }
    });
    return _0xf8988;
  }
  getOaid() {
    const _0x25d790 = this.ck;
    const _0x39ecde = {};
    if (_0x25d790) {
      _0x25d790.split(";").forEach(_0x176020 => {
        const [_0x2c581c, _0x1455db] = _0x176020.trim().split("=");
        _0x39ecde[_0x2c581c] = _0x1455db;
      });
    }
    return _0x39ecde.oaid || "9e4bb0e5bc326fb1";
  }
  getNwip() {
    const _0x11dbfc = this.ck;
    const _0x4f0f61 = {};
    if (_0x11dbfc) {
      _0x11dbfc.split(";").forEach(_0x5b1b46 => {
        {
          const [_0x53aae4, _0x1e36df] = _0x5b1b46.trim().split("=");
          _0x4f0f61[_0x53aae4] = _0x1e36df;
        }
      });
    }
    return _0x4f0f61.nwip || generateLocalIp();
  }
  getKsadtype() {
    const _0x9389fa = this.ck;
    const _0x5de492 = {};
    if (_0x9389fa) {
      _0x9389fa.split(";").forEach(_0xc89db7 => {
        {
          const [_0x5203a6, _0x33e24d] = _0xc89db7.trim().split("=");
          _0x5de492[_0x5203a6] = _0x33e24d;
        }
      });
    }
    const _0x2773c0 = _0x5de492.ksadtype || x_0x3065cc;
    const _0x38a3bb = _0x2773c0.split(",");
    const _0x8b0831 = ["look", "food", "box", "search"];
    const _0x10c38f = _0x8b0831.filter(_0x39455d => _0x38a3bb.includes(_0x39455d));
    const _0x242703 = ["search_follow", "look_follow"];
    const _0x15acef = _0x242703.filter(_0x14dfb8 => _0x38a3bb.includes(_0x14dfb8));
    const _0x2ab895 = {
      intersec: _0x10c38f,
      intersec1: _0x15acef
    };
    return _0x2ab895;
  }
  getOsVersion() {
    const _0x13bbe4 = this.ck;
    const _0x12092b = {};
    if (_0x13bbe4) {
      {
        _0x13bbe4.split(";").forEach(_0x50ce90 => {
          const [_0x1d92f0, _0x186882] = _0x50ce90.trim().split("=");
          _0x12092b[_0x1d92f0] = _0x186882;
        });
      }
    }
    return _0x12092b.osVersion || 10;
  }
  async getIP() {
    if (this.user.length > 2) {
      {
        this.sock = this.user[2];
        if (this.sock && (this.sock.includes("socks5://") || this.sock.includes("socks://"))) {
          try {
            this.socks5 = new x_0x55c253(this.sock);
            const _0x5da214 = {
              url: "https://www.2eva.cn/api/health",
              method: "GET",
              timeout: 30000,
              httpAgent: this.socks5,
              httpsAgent: this.socks5,
              proxy: false,
              headers: {}
            };
            _0x5da214.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
            let {
              data: _0x1b7afc
            } = await x_0x2124a6.request(_0x5da214);
            this.wwip = _0x1b7afc.ip;
            this.nwip = await this.getNwip();
            x_0x316947.log("璐﹀彿[" + this.nickname + "] 澶栫綉IP:[" + this.wwip + "," + this.nwip + "]");
            return;
          } catch (_0x298059) {
            {
              this.socks5 = null;
              console.log("璐﹀彿[" + this.nickname + "]sock5浠ｇ悊閿欒");
            }
          }
        }
      }
    }
    try {
      const _0x545593 = {
        url: "https://www.2eva.cn/api/health",
        method: "GET",
        timeout: 30000
      };
      let {
        data: _0x2a6d46
      } = await x_0x2124a6.request(_0x545593);
      this.wwip = _0x2a6d46.ip;
      this.nwip = await this.getNwip();
      x_0x316947.log("璐﹀彿[" + this.nickname + "] 浠ｇ悊涓嶅瓨鍦╘x20閲囩敤鐩磋繛妯″紡[" + this.wwip + "," + this.nwip + "]");
    } catch (_0x4058a2) {
      x_0x316947.log("璐﹀彿[" + this.nickname + "] 缃戠粶鑾峰彇澶辫触");
    }
  }
  async executeTask(_0x2c37f4, _0x557d16) {
    let _0x34327f = await this.loadAd(_0x2c37f4);
    if (!_0x34327f) {
      {
        x_0x316947.log("璐﹀彿[" + this.nickname + "] " + x_0x316947.wheelNum + "/" + this.look + "/" + _0x557d16 + " [" + this.adinfo.name + "] 鑾峰彇骞垮憡淇℃伅澶辫触锛岃烦杩囨湰杞湅骞垮憡");
        return true;
      }
    }
    const _0x33c1ab = Math.floor((_0x34327f.watchAdTime + Math.floor(Math.random() * 4 + 4) * 1000) / 1000);
    x_0x316947.log("璐﹀彿[" + this.nickname + "] " + x_0x316947.wheelNum + "/" + this.look + "/" + _0x557d16 + " [" + this.adinfo.name + "] 骞垮憡" + _0x34327f.watchAdTime / 1000 + "绉抃x20闅忔満" + _0x33c1ab + "绉�");
    await x_0x316947.wait(_0x33c1ab * 1000);
    const {
      neoAmount: _0xab24ce,
      status: _0x32a583
    } = await this.subAd(_0x34327f.cid, _0x34327f.llsid, _0x34327f.adExtInfo, Date.now(), _0x33c1ab, _0x34327f.materialTime, _0x34327f.watchAdTime);
    await this.getAccountBasicInfo();
    if (_0x32a583 == 2) {
      {
        return true;
      }
    }
    if (_0x32a583 == 3) {
      {
        x_0x316947.failadnumobj[this.salt] = 9999999;
        return true;
      }
    }
    const _0x4a0500 = Math.floor(Math.random() * 23 + 15);
    x_0x316947.log("璐﹀彿[" + this.nickname + "] " + x_0x316947.wheelNum + "/" + this.look + "/" + _0x557d16 + " [" + this.adinfo.name + "] 鉁匼x20鑾峰彇閲戝竵[" + _0xab24ce + "] 绛夊緟[" + _0x4a0500 + "绉抅");
    this.look++;
    if (_0xab24ce < 20) {
      {
        x_0x316947.log("璐﹀彿[" + this.nickname + "] " + x_0x316947.wheelNum + "/" + this.look + "/" + _0x557d16 + " [" + this.adinfo.name + "] 鉂孿x20棰嗗彇閲戝竵涓嶈冻20 绛�寰匸" + _0x4a0500 + "绉抅杩涘叆涓嬩竴杞�");
        x_0x316947.failadnumobj[this.salt] = x_0x316947.failadnumobj[this.salt] + 1;
        await x_0x316947.wait(_0x4a0500 * 1000);
        return true;
      }
    } else {
      {
        x_0x316947.failadnumobj[this.salt] = 0;
        if (["look_follow", "search_follow"].includes(_0x2c37f4)) {
          this.followCount++;
        }
        await x_0x316947.wait(_0x4a0500 * 1000);
        if (_0x34327f.hashMore && this.followCount <= x_0x316947[_0x2c37f4 + "count"] && (this.adtype_follow.includes(_0x2c37f4 + "_follow") || this.adtype_follow.includes("" + _0x2c37f4))) {
          x_0x316947.log("璐﹀彿[" + this.nickname + "] 寮€濮�杩藉姞骞垮憡");
          const _0x38b391 = {
            look_follow: "look_follow",
            search_follow: "search_follow",
            look: "look_follow",
            search: "search_follow"
          };
          return await this.executeTask(_0x38b391[_0x2c37f4], _0x557d16);
        }
      }
    }
  }
  async run() {
    this.cookies = this.checkCookieVariables();
    const {
      intersec: _0x589852,
      intersec1: _0x5a7488
    } = this.getKsadtype();
    this.adtype = _0x589852;
    this.adtype_follow = _0x5a7488;
    if (!this.salt) {
      {
        return x_0x316947.log("璐﹀彿['" + this.nickname + "'] salt涓�瀛樺湪");
      }
    }
    if (!x_0x316947.failadnumobj.hasOwnProperty(this.salt)) {
      {
        x_0x316947.failadnumobj[this.salt] = 0;
      }
    }
    if (x_0x316947.failadnumobj[this.salt] >= x_0x316947.failadnum) {
      return x_0x316947.log("🙅 璐﹀彿['" + this.nickname + "'] 杩�缁�" + x_0x316947.failadnumobj[this.salt] + "娆′綆浠峰€�骞垮憡锛屽仠姝㈡湰杞繍琛�");
    }
    await this.getIP();
    await this.getAccountBasicInfo();
    this.oaid = this.getOaid();
    this.osVersion = this.getOsVersion();
    x_0x316947.log("璐﹀彿[" + this.nickname + " 骞�鍛婅澶囨爣璇哰" + this.oaid + "]]鑾峰彇绯荤粺鐗堟湰 [" + this.osVersion + "],骞垮憡绫诲瀷[" + this.adtype + "]");
    for (const _0x1b460a of this.adtype) {
      const _0x26dfda = x_0x316947[_0x1b460a + "count"];
      this.look = 1;
      this.adinfo = x_0x316947.taskConfigs[_0x1b460a];
      while (this.look <= _0x26dfda) {
        {
          this.followCount = 1;
          let _0x4bef3c = await this.executeTask(_0x1b460a, _0x26dfda);
          if (_0x4bef3c) {
            {
              return;
            }
          }
        }
      }
    }
    x_0x316947.log("璐﹀彿[" + this.nickname + "] " + x_0x316947.wheelNum + "杞甛x20鎵€鏈�浠诲姟瀹屾垚锛�");
  }
  is_live_ad(_0x44f4c2 = {}) {
    try {
      {
        let _0xa2a823 = _0x44f4c2.adExtInfo || _0x44f4c2.extInfo || _0x44f4c2?.["ad"]?.["adExtInfo"] || "{}";
        if (typeof _0xa2a823 === "string") {
          try {
            _0xa2a823 = JSON.parse(_0xa2a823);
          } catch (_0x1162b5) {
            _0xa2a823 = {};
          }
        }
        const _0x3a0319 = ["鐩存挱", "live", "涓绘挱", "LIVE", "zb", "ZB"];
        const _0xa0eb60 = String(_0x44f4c2.creativeId || _0x44f4c2?.["ad"]?.["creativeId"] || "").toLowerCase();
        const _0x2c72e0 = String(_0xa2a823.description || "").toLowerCase();
        const _0x170b82 = String(_0xa2a823.title || _0x44f4c2.title || "").toLowerCase();
        const _0x1b3c74 = String(_0xa2a823.caption || _0x44f4c2.caption || "").toLowerCase();
        const _0x38ca97 = [_0xa0eb60, _0x2c72e0, _0x170b82, _0x1b3c74, JSON.stringify(_0xa2a823)];
        for (const _0x50a684 of _0x38ca97) {
          for (const _0x267de8 of _0x3a0319) {
            {
              if (_0x50a684 && _0x50a684.includes(_0x267de8.toLowerCase())) {
                return true;
              }
            }
          }
        }
        const _0x343531 = _0x44f4c2.materialTime || _0x44f4c2?.["ad"]?.["materialTime"] || 0;
        if (_0x343531 > 60000) {
          return true;
        }
        if (_0xa0eb60.startsWith("live_") || _0xa0eb60.startsWith("zb_") || _0xa0eb60.startsWith("live-") || _0xa0eb60.startsWith("zb-")) {
          return true;
        }
        return false;
      }
    } catch (_0x2f609b) {
      {
        return false;
      }
    }
  }
  async loadReqParams(_0x5b1e7f, _0xbc754a, _0x2b3352) {
    try {
      {
        const _0x3c96f7 = Buffer.from(_0x5b1e7f).toString("base64");
        const _0x579075 = Buffer.from(_0x2b3352).toString("base64");
        const _0xb2e9d8 = Buffer.from(_0xbc754a).toString("base64");
        let {
          data: _0x3086c2
        } = await x_0x2124a6.request({
          url: x_0x1d013d + "/api/ksjs/ksjs_km/nssig",
          headers: {
            ...x_0x25df28,
            nickname: encodeURIComponent(this.nickname),
            userid: this.userId,
            salt: this.salt
          },
          method: "POST",
          data: {
            path: _0x3c96f7,
            salt: _0x579075,
            data: _0xb2e9d8
          }
        });
        if (_0x3086c2.code === 0) {
          {
            const _0x48676f = {
              sig: _0x3086c2.data.sig,
              __NS_xfalcon: "",
              __NStokensig: _0x3086c2.data.nstokensig,
              __NS_sig3: _0x3086c2.data.nssig3
            };
            return _0x48676f;
          }
        } else {
          {
            console.log("鑾峰彇nssig澶�璐�");
            console.log(_0x3086c2);
            return null;
          }
        }
      }
    } catch (_0x1cea27) {
      console.log("鍔犺浇nssig澶�璐�", _0x1cea27);
      return null;
    }
  }
  async encsign(_0x299d91) {
    try {
      {
        const _0x2461fc = Buffer.from(JSON.stringify(_0x299d91)).toString("base64");
        const _0x5b9ca1 = {
          data: _0x2461fc
        };
        const {
          data: _0x474507
        } = await x_0x2124a6.request({
          url: x_0x1d013d + "/api/ksjs/ksjs_km/encsign",
          headers: {
            ...x_0x25df28,
            nickname: encodeURIComponent(this.nickname),
            userid: this.userId,
            salt: this.salt
          },
          method: "POST",
          data: _0x5b9ca1
        });
        if (_0x474507.code === 0) {
          return _0x474507.data;
        } else {
          {
            console.log("鑾峰彇encsign澶�璐�");
            console.log(_0x474507);
            return null;
          }
        }
      }
    } catch (_0x301420) {
      {
        console.log("鍔犺浇encsign 澶辫触");
        return null;
      }
    }
  }
  loadAdInfo(_0x58aeab) {
    this.adinfo = x_0x316947.taskConfigs[_0x58aeab];
    let _0x3f6898 = "{\"openH5AdCount\":\"2\",\"sessionLookedCompletedCount\":\"1\",\"sessionType\":\"1\",\"neoParams\":\"\",\"searchKey\":\"\",\"triggerType\":\"2\",\"disableReportToast\":\"true\",\"businessEnterAction\":\"7\"}";
    if (this.adinfo.businessId == 7076) {
      const _0x3dbb33 = {
        openH5AdCount: 0,
        sessionLookedCompletedCount: 0,
        sessionType: "1",
        searchKey: x_0x316947.searchkeyword,
        triggerType: "2",
        disableReportToast: true,
        businessEnterAction: "7",
        neoParams: "eyJwYWdlSWQiOiAxMTAxNCwgInN1YlBhZ2VJZCI6IDEwMDE2MTUzNywgInBvc0lkIjogMjE2MjY4LCAiYnVzaW5lc3NJZCI6IDcwNzYsICJleHRQYXJhbXMiOiAiIiwgImN1c3RvbURhdGEiOiB7ImV4aXRJbmZvIjogeyJ0b2FzdERlc2MiOiBudWxsLCAidG9hc3RJbWdVcmwiOiBudWxsfX0sICJwZW5kYW50VHlwZSI6IDEsICJkaXNwbGF5VHlwZSI6IDIsICJzaW5nbGVQYWdlSWQiOiAwLCAic2luZ2xlU3ViUGFnZUlkIjogMCwgImNoYW5uZWwiOiAwLCAiY291bnRkb3duUmVwb3J0IjogZmFsc2UsICJ0aGVtZVR5cGUiOiAwLCAibWl4ZWRBZCI6IHRydWUsICJmdWxsTWl4ZWQiOiB0cnVlLCAiYXV0b1JlcG9ydCI6IHRydWUsICJmcm9tVGFza0NlbnRlciI6IHRydWUsICJzZWFyY2hJbnNwaXJlU2NoZW1lSW5mbyI6IG51bGwsICJhbW91bnQiOiAwfQ=="
      };
      _0x3f6898 = JSON.stringify(_0x3dbb33);
    }
    const _0x364390 = {
      appId: "kuaishou_nebula",
      name: "蹇墜鏋侀€�鐗�",
      packageName: "com.kuaishou.nebula",
      version: this.appver,
      versionCode: -1
    };
    const _0x284dd6 = {
      width: 1080,
      height: 2068
    };
    const _0x5075ea = {
      latitude: 0,
      longitude: 0
    };
    let _0x52a453 = {
      appInfo: _0x364390,
      deviceInfo: {
        oaid: this.oaid,
        osType: 1,
        osVersion: this.getOsVersion(),
        language: this.language,
        deviceId: "" + this.did,
        screenSize: _0x284dd6,
        ftt: "",
        supportGyroscope: true
      },
      networkInfo: {
        ip: this.nwip,
        connectionType: 100
      },
      geoInfo: _0x5075ea,
      userInfo: {
        userId: this.userId,
        age: 0,
        gender: ""
      },
      impInfo: [{
        pageId: this.adinfo.pageId || 11101,
        subPageId: this.adinfo.subPageId,
        action: 0,
        width: 0,
        height: 0,
        browseType: this.browseType,
        requestSceneType: this.adinfo.requestSceneType,
        lastReceiveAmount: 0,
        impExtData: _0x3f6898,
        mediaExtData: "{}",
        session: x_0x316947.uuid()
      }],
      adClientInfo: "{\"ipdxIP\":\"" + this.wwip + "\"}"
    };
    return _0x52a453;
  }
  async loadAd(_0x31f4bf, _0x107d4c = 0) {
    const _0x355605 = x_0x39521b.skipliveads ? skiplivemaxretries : 1;
    const _0x3f6e26 = this.loadAdInfo(_0x31f4bf);
    const _0x1fef31 = await this.encsign(_0x3f6e26);
    if (_0x1fef31 == null) {
      x_0x316947.log("鑾峰彇encsign澶�璐�");
      return;
    }
    const _0x18b7f8 = {
      encData: _0x1fef31.encdata,
      sign: _0x1fef31.sign,
      cs: false,
      client_key: "2ac2a76d",
      videoModelCrowdTag: "1_23",
      watchStage: "android",
      os: "android",
      "kuaishou.api_st": this.api_st,
      uQaTag: x_0x2e3193
    };
    let _0xd7c67f = {
      mod: this.mod,
      appver: this.appver,
      language: this.language,
      ud: this.userId,
      did_tag: this.did_tag,
      egid: this.egid,
      kpf: this.kpf,
      oDid: this.oDid,
      kpn: this.kpn,
      newOc: this.newOc,
      androidApiLevel: this.androidApiLevel,
      browseType: this.browseType,
      socName: this.socName,
      c: this.c,
      abi: this.abi,
      ftt: this.ftt,
      userRecoBit: this.userRecoBit,
      device_abi: this.device_abi,
      grant_browse_type: this.grant_browse_type,
      iuid: this.iuid,
      rdid: this.rdid,
      did: this.did,
      earphoneMode: this.earphoneMode,
      isp: this.isp,
      thermal: this.thermal,
      net: this.net,
      kcv: this.kcv,
      app: this.app,
      bottom_navigation: this.bottom_navigation,
      ver: this.ver,
      android_os: this.android_os,
      boardPlatform: this.boardPlatform,
      slh: this.slh,
      country_code: this.country_code,
      nbh: this.nbh,
      hotfix_ver: this.hotfix_ver,
      did_gt: this.did_gt,
      keyconfig_state: this.keyconfig_state,
      cdid_tag: this.cdid_tag,
      sys: this.sys,
      max_memory: this.max_memory,
      cold_launch_time_ms: this.cold_launch_time_ms,
      oc: this.oc,
      sh: this.sh,
      deviceBit: this.deviceBit,
      ddpi: this.ddpi,
      is_background: this.is_background,
      sw: this.sw,
      apptype: this.apptype,
      icaver: this.icaver,
      totalMemory: this.totalMemory,
      sbh: this.sbh,
      darkMode: this.darkMode
    };
    const _0x4c24e0 = await this.loadReqParams("/rest/e/reward/mixed/ad", x_0x316947.queryStr(_0x18b7f8) + "&" + x_0x316947.queryStr(_0xd7c67f), this.salt);
    if (_0x4c24e0 == null) {
      {
        x_0x316947.log("鑾峰彇骞垮憡淇℃伅澶辫触");
        return;
      }
    }
    const _0x6388f0 = {
      ..._0xd7c67f
    };
    const _0x21a27e = _0x6388f0;
    _0x21a27e.sig = _0x4c24e0.sig;
    _0x21a27e.__NS_sig3 = _0x4c24e0.__NS_sig3;
    _0x21a27e.__NS_xfalcon = "";
    _0x21a27e.__NStokensig = _0x4c24e0.__NStokensig;
    try {
      let {
        data: _0x50f257
      } = await x_0x2124a6.request({
        url: "https://api.e.kuaishou.com/rest/e/reward/mixed/ad",
        httpAgent: this.socks5,
        httpsAgent: this.socks5,
        params: _0x21a27e,
        proxy: false,
        timeout: 30000,
        method: "POST",
        headers: {
          Host: "api.e.kuaishou.com",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Cookie: "kuaishou.api_st=" + this.api_st + ";__NSWJ=;region_ticket=RT_66898EB2122EC01C6A99E8FCCB4887F9C156DFC294E9FD56AD0156AECEB24C4EC69BFDFE7",
          "User-Agent": x_0x2c8134,
          "X-Client-Info": "model=" + this.mod + ";os=Android;nqe-score=22;network=" + this.net + ";signal-strength=4;"
        },
        data: _0x18b7f8
      });
      if (_0x50f257.errorMsg === "OK" && _0x50f257.feeds && _0x50f257.feeds[0] && _0x50f257.feeds[0].ad) {
        {
          if (x_0x316947.skipliveads) {
            const _0x1aa11a = _0x50f257.feeds[0];
            const _0x2f7395 = _0x1aa11a.ad ? {
              ..._0x1aa11a.ad
            } : {
              ..._0x1aa11a
            };
            const _0x11bd10 = _0x1aa11a?.["ad"]?.["adDataV2"]?.["inspireAdInfo"]?.["adExtInfo"] ?? _0x1aa11a?.["ad"]?.["adExtInfo"] ?? _0x1aa11a?.["adExtInfo"] ?? "{}";
            _0x2f7395.creativeId = _0x2f7395.creativeId ?? creativeId;
            _0x2f7395.materialTime = _0x2f7395.materialTime ?? _0x1aa11a.materialTime ?? 0;
            _0x2f7395.adExtInfo = typeof _0x11bd10 === "string" ? _0x11bd10 : JSON.stringify(_0x11bd10);
            if (this.is_live_ad(_0x2f7395)) {
              if (_0x107d4c < _0x355605 - 1) {
                {
                  return await loadAd(_0x31f4bf, _0x107d4c + 1);
                }
              }
              console.log(" 澶�娆¤幏鍙栫洿鎾箍鍛婏紝鍋滄褰撳墠浠诲姟");
              return null;
            }
          }
          const _0x157ecf = _0x50f257.feeds[0].caption || _0x50f257.feeds[0].ad?.["caption"] || "";
          if (_0x157ecf) {
            let _0x5b3d4f = "璐﹀彿[" + this.nickname + "] 鎴愬姛鑾峰彇鍒板箍鍛婁俊鎭細" + _0x157ecf;
            if (_0x50f257?.["feeds"][0]?.["ad"]?.["extData"]) {
              {
                const _0x3fffc9 = JSON.parse(_0x50f257?.["feeds"][0]?.["ad"]["extData"]);
                _0x5b3d4f = "璐﹀彿[" + this.nickname + "] 鑾峰彇鍒板箍鍛婁俊鎭細" + _0x157ecf + "锛岄璁¤幏寰梉" + _0x3fffc9.awardCoin + "]閲�甯�";
              }
            }
            x_0x316947.log(_0x5b3d4f);
          } else {
            {
              x_0x316947.log("璐﹀彿[" + this.nickname + "] 鑾峰彇骞垮憡淇℃伅澶辫触");
              return null;
            }
          }
          const _0x243a54 = _0x50f257.feeds[0].exp_tag || "";
          const _0x2534d3 = _0x243a54.split("/")[1]?.["split"]("_")?.[0] || "";
          if (_0x50f257.feeds[0].streamManifest) {
            const _0x58c051 = _0x50f257.feeds[0].ad.adDataV2?.["onceAgainRewardInfo"]?.["hasMore"] || false;
            const _0x40e374 = {
              cid: _0x50f257.feeds[0].ad.creativeId,
              llsid: _0x2534d3,
              adExtInfo: _0x50f257.feeds[0].ad.adDataV2.inspireAdInfo.adExtInfo,
              materialTime: _0x50f257.feeds[0].streamManifest.adaptationSet[0].duration,
              watchAdTime: _0x50f257.feeds[0].ad.adDataV2.inspireAdInfo.inspireAdBillTime,
              hashMore: _0x58c051
            };
            return _0x40e374;
          } else {
            {
              const _0x370f07 = {
                cid: _0x50f257.feeds[0].ad.creativeId,
                llsid: _0x2534d3,
                adExtInfo: _0x50f257.feeds[0].ad.adDataV2.inspireAdInfo.adExtInfo,
                materialTime: 3000,
                watchAdTime: _0x50f257.feeds[0].ad.adDataV2.inspireAdInfo.inspireAdBillTime
              };
              return _0x370f07;
            }
          }
        }
      } else {
        x_0x316947.log("璐﹀彿[" + this.nickname + "] 鑾峰彇骞垮憡淇℃伅澶辫触");
        return null;
      }
    } catch (_0x3d8a98) {
      {
        console.log("鍔犺浇骞垮憡淇℃伅澶辫触");
        return null;
      }
    }
  }
  async subAd(_0x5daaa4, _0x3c74dd, _0x508e2c, _0x306d36, _0x57d99a, _0x53eac8, _0x5da259) {
    const _0x5eec9a = _0x306d36 + _0x57d99a * 1000;
    let _0x3a1c81 = {
      mod: this.mod,
      appver: this.appver,
      language: this.language,
      ud: this.userId,
      did_tag: this.did_tag,
      egid: this.egid,
      kpf: this.kpf,
      oDid: this.oDid,
      kpn: this.kpn,
      newOc: this.newOc,
      androidApiLevel: this.androidApiLevel,
      browseType: this.browseType,
      socName: this.socName,
      c: this.c,
      abi: this.abi,
      ftt: this.ftt,
      userRecoBit: this.userRecoBit,
      device_abi: this.device_abi,
      grant_browse_type: this.grant_browse_type,
      iuid: this.iuid,
      rdid: this.rdid,
      did: this.did,
      earphoneMode: this.earphoneMode,
      isp: this.isp,
      thermal: this.thermal,
      net: this.net,
      kcv: this.kcv,
      app: this.app,
      bottom_navigation: this.bottom_navigation,
      ver: this.ver,
      android_os: this.android_os,
      boardPlatform: this.boardPlatform,
      slh: this.slh,
      country_code: this.country_code,
      nbh: this.nbh,
      hotfix_ver: this.hotfix_ver,
      did_gt: this.did_gt,
      keyconfig_state: this.keyconfig_state,
      cdid_tag: this.cdid_tag,
      sys: this.sys,
      max_memory: this.max_memory,
      cold_launch_time_ms: this.cold_launch_time_ms,
      oc: this.oc,
      sh: this.sh,
      deviceBit: this.deviceBit,
      ddpi: this.ddpi,
      is_background: this.is_background,
      sw: this.sw,
      apptype: this.apptype,
      icaver: this.icaver,
      totalMemory: this.totalMemory,
      sbh: this.sbh,
      darkMode: this.darkMode
    };
    const _0x5cfa6d = {
      bizStr: JSON.stringify({
        businessId: this.adinfo.businessId,
        endTime: _0x5eec9a,
        extParams: "",
        mediaScene: "video",
        neoInfos: [{
          clientExtInfo: "{\"serialPaySuccess\":false}",
          creativeId: _0x5daaa4,
          extInfo: "",
          llsid: _0x3c74dd,
          adExtInfo: _0x508e2c,
          materialTime: _0x53eac8,
          watchAdTime: _0x5da259,
          requestSceneType: this.adinfo.requestSceneType,
          taskType: this.adinfo.taskType,
          watchExpId: "",
          watchStage: 0
        }],
        pageId: this.adinfo.pageId || 11101,
        posId: this.adinfo.posId,
        reportType: 0,
        sessionId: "adNeo-" + this.userId + "-" + this.adinfo.subPageId + "-" + _0x306d36,
        startTime: _0x306d36,
        subPageId: this.adinfo.subPageId
      }),
      cs: false,
      client_key: "2ac2a76d",
      videoModelCrowdTag: "1_52",
      os: "android",
      "kuaishou.api_st": this.api_st
    };
    const _0x309bc2 = x_0x316947.queryStr(_0x5cfa6d) + "&" + x_0x316947.queryStr(_0x3a1c81);
    const _0x11af0e = await this.loadReqParams("/rest/r/ad/task/report", _0x309bc2, this.salt);
    if (_0x11af0e == null) {
      console.log("鑾峰彇sign澶辫触 璇�閲嶈瘯");
      const _0x3bf117 = {
        neoAmount: 0,
        status: 2
      };
      return _0x3bf117;
    }
    const _0x409c82 = {
      sig: _0x11af0e.sig,
      __NS_xfalcon: "",
      __NStokensig: _0x11af0e.__NStokensig,
      __NS_sig3: _0x11af0e.__NS_sig3
    };
    const _0x35c913 = Object.assign(_0x3a1c81, _0x409c82);
    try {
      {
        let {
          data: _0x12c060
        } = await x_0x2124a6.request({
          url: "https://api.e.kuaishou.com/rest/r/ad/task/report",
          params: _0x35c913,
          httpAgent: this.socks5,
          httpsAgent: this.socks5,
          proxy: false,
          timeout: 30000,
          method: "POST",
          headers: {
            Host: "api.e.kuaishou.com",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Cookie: "kuaishou.api_st=" + this.api_st,
            "User-Agent": x_0x2c8134,
            "X-Client-Info": "model=" + this.mod + ";os=Android;nqe-score=22;network=" + this.net + ";signal-strength=4;"
          },
          data: _0x5cfa6d
        });
        if ([20107, 20108, 1003, 415].includes(_0x12c060.result)) {
          {
            console.log("⚠️ 宸茶揪涓婇檺");
            console.log(_0x12c060);
            const _0x45d283 = {
              neoAmount: 0,
              status: 3
            };
            return _0x45d283;
          }
        }
        if (_0x12c060.message == "鎴愬姛") {
          const _0x31fead = {
            neoAmount: _0x12c060.data.neoAmount,
            status: 1
          };
          return _0x31fead;
        } else {
          console.log(_0x12c060);
          const _0x19b23a = {
            neoAmount: 0,
            status: 2
          };
          return _0x19b23a;
        }
      }
    } catch (_0x4d9c1d) {
      console.log(_0x4d9c1d);
      const _0x261a5c = {
        neoAmount: 0,
        status: 1
      };
      return _0x261a5c;
    }
  }
}
function x_0x39521b(_0x379ccd) {
  return new class {
    constructor(_0x38e408) {
      {
        this.userIdx = 1;
        this.userList = [];
        this.userCount = 0;
        this.name = _0x38e408;
        this.time = 480;
        this.time1 = 120;
        this.sort = 1;
        this.wheelNum = 0;
        this.startTime = new Date().getTime();
        this.log(this.name + ",寮€濮�!");
        this.count = 999;
        this.ip = 1;
        this.failadnum = 3;
        this.failadnumobj = {};
        this.foodcount = 3;
        this.boxcount = 3;
        this.lookcount = 5;
        const _0x134569 = {
          name: "鐪嬪箍鍛婂緱閲戝竵",
          businessId: 672,
          posId: 24067,
          subPageId: 100026367,
          requestSceneType: 1,
          taskType: 1
        };
        const _0x132a35 = {
          name: "杩藉姞鐪嬪箍鍛婂緱閲戝竵",
          businessId: 672,
          posId: 24067,
          subPageId: 100026367,
          requestSceneType: 2,
          taskType: 1
        };
        const _0x5dbb88 = {
          name: "瀹濈骞垮憡",
          businessId: 606,
          posId: 20346,
          subPageId: 100024064,
          requestSceneType: 1,
          taskType: 1
        };
        const _0x4f030a = {
          name: "楗ˉ骞垮憡",
          businessId: 9362,
          posId: 24067,
          subPageId: 100026367,
          requestSceneType: 7,
          taskType: 2
        };
        const _0x1c1598 = {
          name: "寮€瀹�绠�",
          businessId: 606,
          posId: 20346,
          subPageId: 100024064,
          requestSceneType: 1,
          taskType: 1
        };
        const _0x474286 = {
          name: "鎼滅储浠诲姟",
          pageId: 11014,
          businessId: 7076,
          posId: 216268,
          subPageId: 100161537,
          requestSceneType: 1,
          taskType: 1
        };
        const _0x485c28 = {
          name: "鎼滅储浠诲姟杩藉姞",
          pageId: 11014,
          businessId: 7076,
          posId: 216268,
          subPageId: 100161537,
          requestSceneType: 7,
          taskType: 2
        };
        const _0x378121 = {
          look: _0x134569,
          look_follow: _0x132a35,
          box: _0x5dbb88,
          food: _0x4f030a,
          kbox: _0x1c1598,
          search: _0x474286,
          search_follow: _0x485c28
        };
        this.taskConfigs = _0x378121;
      }
    }
    checkEnv() {
      {
        const _0x468087 = [];
        if (this.isNode()) {
          Object.keys(process.env).forEach(_0x2a0701 => {
            if (_0x2a0701.startsWith("ksck")) {
              _0x468087.push(_0x2a0701);
            }
          });
        }
        let _0x260a82 = [];
        _0x468087.forEach(_0x19ce30 => {
          const _0x42fe7f = (this.isNode() ? process.env[_0x19ce30] : "") || "";
          if (_0x42fe7f) {
            _0x260a82.push(_0x42fe7f);
          }
        });
        const _0x21812d = _0x260a82.join("&");
        this.userList = _0x21812d.split(["&", "\n"].find(_0x6abdd2 => {
          {
            return _0x21812d.includes(_0x6abdd2);
          }
        }) || "&").filter(_0x4fcc00 => {
          return _0x4fcc00;
        });
        this.userCount = this.userList.length;
        const _0x1b9c2b = (this.isNode() ? process.env.KS_COUNT : 999) || 999;
        this.count = _0x1b9c2b;
        const _0x3038dd = (this.isNode() ? process.env.KS_AD_TYPE : "look,box,food,search,look_follow,search_follow") || "look,box,food,search,look_follow,search_follow";
        x_0x3065cc = _0x3038dd;
        const _0x36be33 = (this.isNode() ? process.env.KS_KM : "") || "";
        x_0x25df28.km = _0x36be33;
        const _0x2728a7 = (this.isNode() ? process.env.KS_TIME : 480) || 480;
        this.time = Number(_0x2728a7);
        const _0x71a9d9 = (this.isNode() ? process.env.KS_TIME1 : 120) || 120;
        this.time1 = Number(_0x71a9d9);
        const _0x588170 = (this.isNode() ? process.env.KS_SORT : 0) || 0;
        this.sort = Number(_0x588170);
        const _0x2efce3 = (this.isNode() ? process.env.KS_IP : 1) || 1;
        this.ip = Number(_0x2efce3);
        const _0x5b8d36 = (this.isNode() ? process.env.KS_FAIL_NUM : 3) || 3;
        this.failadnum = Number(_0x5b8d36);
        this.log({
          count: this.count,
          time: this.time,
          time1: this.time1,
          sort: this.sort
        });
        const _0x2cadc9 = (this.isNode() ? process.env.SKIP_LIVE_ADS : 0) || 0;
        this.skipliveads = Boolean(_0x2cadc9);
        const _0x21fe3c = (this.isNode() ? process.env.SKIP_LIVE_MAX_RETRIES : 2) || 2;
        this.skiplivemaxretries = Number(_0x21fe3c);
        const _0x46fb44 = (this.isNode() ? process.env.KS_AD_NUM : "5,5,10,5") || "5,5,10,5";
        const _0x2eed79 = _0x46fb44.split(",");
        this.foodcount = Number(_0x2eed79[Math.min(0, _0x2eed79.length - 1)]);
        this.boxcount = Number(_0x2eed79[Math.min(1, _0x2eed79.length - 1)]);
        this.lookcount = Number(_0x2eed79[Math.min(2, _0x2eed79.length - 1)]);
        this.searchcount = Number(_0x2eed79[Math.min(3, _0x2eed79.length - 1)]);
        const _0x737baa = (this.isNode() ? process.env.KSFOLLOW_COUNT : "2,2") || "2,2";
        const _0x5b9154 = _0x737baa.split(",");
        this.look_followcount = Number(_0x5b9154[Math.min(0, _0x5b9154.length - 1)]);
        this.search_followcount = Number(_0x5b9154[Math.min(1, _0x5b9154.length - 1)]);
        this.searchkeyword = (this.isNode() ? process.env.KS_SEARCH_KEYWORD : "鎹曢奔") || "鎹曢奔";
        this.log("鍏辨壘鍒�" + this.userCount + "涓处鍙�,杩愯" + this.count + "杞�,鍏ㄥ眬骞垮憡绫诲瀷涓�" + _0x3038dd);
        console.log("鎼滅储鍏抽敭璇嶏細" + this.searchkeyword);
      }
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    queryStr(_0x55f2c7) {
      const _0x38c59c = require("querystring");
      return _0x38c59c.stringify(_0x55f2c7);
    }
    uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x2a3a09) {
        var _0xc837a = Math.random() * 16 | 0;
        var _0x579e17 = _0x2a3a09 == "x" ? _0xc837a : _0xc837a & 3 | 8;
        return _0x579e17.toString(16);
      });
    }
    log(_0x341942) {
      {
        const _0xc14252 = new Date();
        console.log(x_0x478b84(_0xc14252, "MM-DD HH:mm:ss"), _0x341942);
      }
    }
    wait(_0x135679) {
      return new Promise(_0x55cdb8 => {
        {
          return setTimeout(_0x55cdb8, _0x135679);
        }
      });
    }
    async done() {
      {
        const _0x2d5c7b = new Date().getTime();
        const _0x2234e2 = (_0x2d5c7b - this.startTime) / 1000;
        this.log(this.name + ",缁�鏉�!" + _0x2234e2 + "绉�");
        if (this.isNode()) {
          {
            process.exit(1);
          }
        }
      }
    }
  }(_0x379ccd);
}
const x_0x316947 = new x_0x39521b("eva");
async function x_0x28971c() {
  const _0x51c5bd = {
    url: "https://gitee.com/fxg1997/open/raw/master/ksNotice.json",
    method: "GET"
  };
  const {
    data: _0x243b49
  } = await x_0x2124a6.request(_0x51c5bd);
  console.log("⚠️【鍏嶈矗澹版槑銆慭x0a------------------------------------------\n1銆佹鑴氭湰浠呯敤浜庡涔犵爺绌讹紝涓嶄繚璇佸叾鍚堟硶鎬с€�鍑嗙‘鎬с€�鏈夋晥鎬э紝璇锋牴鎹儏鍐佃嚜琛屽垽鏂紝鏈汉瀵规涓嶆壙鎷呬换浣曚繚璇佽矗浠汇€�\n2銆佺敱浜庢鑴氭湰浠呯敤浜庡涔犵爺绌讹紝鎮ㄥ繀椤诲湪涓嬭浇鍚嶾x2024 灏�鏃跺唴灏嗘墍鏈夊唴瀹逛粠鎮ㄧ殑璁＄畻鏈烘垨鎵嬫満鎴栦换浣曞瓨鍌ㄨ澶囦腑瀹屽叏鍒犻櫎锛岃嫢杩濆弽瑙勫畾寮曡捣浠讳綍浜嬩欢鏈汉瀵规鍧囦笉璐熻矗銆俓x0a3銆�璇峰嬁灏嗘鑴氭湰鐢ㄤ簬浠讳綍鍟嗕笟鎴栭潪娉曠洰鐨勶紝鑻ヨ繚鍙嶈瀹氳鑷瀵规璐熻矗銆俓x0a4銆�姝よ剼鏈秹鍙婂簲鐢ㄤ笌鏈汉鏃犲叧锛屾湰浜哄鍥犳寮曡捣鐨勪换浣曢殣绉佹硠婕忔垨鍏朵粬鍚庢灉涓嶆壙鎷呬换浣曡矗浠汇€�\n5銆佹湰浜哄浠讳綍鑴氭湰寮曞彂鐨勯棶棰樻涓嶈礋璐ｏ紝鍖呮嫭浣嗕笉闄愪簬鐢辫剼鏈敊璇紩璧风殑浠讳綍鎹熷け鍜屾崯瀹炽€�\n6銆佸鏋滀换浣曞崟浣嶆垨涓汉璁や负姝よ剼鏈彲鑳芥秹瀚屼镜鐘叾鏉冨埄锛屽簲鍙婃椂閫氱煡骞舵彁渚涜韩浠借瘉鏄庯紝鎵€鏈�鏉冭瘉鏄庯紝鎴戜滑灏嗗湪鏀跺埌璁よ瘉鏂囦欢纭鍚庡垹闄ゆ鑴氭湰銆俓x0a7銆�鎵€鏈�鐩存帴鎴栭棿鎺ヤ娇鐢ㄣ€�鏌ョ湅姝よ剼鏈殑浜哄潎搴旇浠旂粏闃呰姝ゅ０鏄庛€�鏈汉淇濈暀闅忔椂鏇存敼鎴栬ˉ鍏呮澹版槑鐨勬潈鍒┿€�涓€鏃�鎮ㄤ娇鐢ㄦ垨澶嶅埗浜嗘鑴氭湰锛屽嵆瑙嗕负鎮ㄥ凡鎺ュ彈姝ゅ厤璐ｅ０鏄庛€�\n------------------------------------------*/");
  console.log(_0x243b49);
  console.log("鈺斺晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晽");
  console.log("鈺慭x20                   📢 璐�鍗″湴鍧€鎻�绀篭x20                          鈺�");
  console.log("鈺犫晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨暎");
  console.log("鈺慭x20                   璐�鍗″湴鍧€: 鍔�缇x20658120402                  鈺�");
  console.log("鈺犫晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨暎");
  console.log("鈺慭x20 ck妫€娴嬪湴鍧€: https://www.2eva.cn/cookies.html                鈺�");
  console.log("鈺氣晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨暆");
}
const x_0x3559ec = async () => {
  let _0x304b89 = true;
  let _0xe23eb9 = x_0x316947.userCount;
  for (let _0x49f357 in x_0x316947.failadnumobj) {
    if (x_0x316947.failadnumobj[_0x49f357] < x_0x316947.failadnum) {
      _0x304b89 = false;
      break;
    }
  }
  if (Object.keys(x_0x316947.failadnumobj).length < _0xe23eb9) {
    {
      _0x304b89 = false;
    }
  }
  if (_0x304b89) {
    x_0x316947.log("鎵€鏈�璐﹀彿杩炵画浣庝环鍊煎箍鍛婅秴杩�" + x_0x316947.failadnum + "娆★紝鍋滄杩愯");
    x_0x316947.done();
    return;
  }
  x_0x316947.wheelNum++;
  x_0x316947.userIdx = 1;
  if (x_0x316947.sort == 1) {
    {
      for (let _0x4765a4 of x_0x316947.userList) {
        await new x_0x162ea7(_0x4765a4).run();
        const _0x30028a = Math.floor(Math.random() * 20 + 30);
        await x_0x316947.wait(_0x30028a);
      }
    }
  } else {
    {
      await Promise.all(x_0x316947.userList.map(_0x224ab0 => new x_0x162ea7(_0x224ab0).run()));
    }
  }
  if (x_0x316947.wheelNum < x_0x316947.count) {
    {
      const _0x19847a = Math.floor(Math.random() * x_0x316947.time1 + x_0x316947.time);
      x_0x316947.log("绗�" + x_0x316947.wheelNum + "娆′换鍔″畬鎴怽x20绛夊緟" + _0x19847a + "绉掑悗缁х画鎵ц");
      await x_0x316947.wait(_0x19847a * 1000);
      await x_0x3559ec();
    }
  } else {
    {
      x_0x316947.log("鎵€鏈�浠诲姟瀹屾垚");
      x_0x316947.done();
    }
  }
};
!(async () => {
  await x_0x28971c();
  x_0x316947.checkEnv();
  await x_0x3559ec();
})().catch(_0x467504 => {
  return x_0x316947.log(_0x467504);
}).finally(() => {
  return x_0x316947.done();
});