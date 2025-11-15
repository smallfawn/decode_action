//Sat Nov 15 2025 16:26:56 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const x_0x214443 = {
  km: ""
};
let x_0x3830d5 = [];
let x_0x1cda66 = "https://www.2eva.cn";
const {
  SocksProxyAgent: x_0x352cb3
} = require("socks-proxy-agent");
const x_0x3a35aa = require("axios");
const x_0x4ea1ab = "kwai-android aegon/4.28.0";
require("dotenv").config();
const x_0x5a7267 = "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0";
const x_0xe1d568 = (_0xc78dad, _0x11e72e = "YYYY-MM-DD HH:mm:ss") => {
  const _0xa12d56 = _0xc78dad.getFullYear();
  const _0x40072d = String(_0xc78dad.getMonth() + 1).padStart(2, "0");
  const _0x2f6ce8 = String(_0xc78dad.getDate()).padStart(2, "0");
  const _0x23435e = String(_0xc78dad.getHours()).padStart(2, "0");
  const _0x3795f7 = String(_0xc78dad.getMinutes()).padStart(2, "0");
  const _0x193d6f = String(_0xc78dad.getSeconds()).padStart(2, "0");
  return _0x11e72e.replace("YYYY", _0xa12d56).replace("MM", _0x40072d).replace("DD", _0x2f6ce8).replace("HH", _0x23435e).replace("mm", _0x3795f7).replace("ss", _0x193d6f);
};
generateLocalIp = async (_0x286322 = 1, _0x1257be = "C") => {
  const _0x26c595 = () => Math.floor(Math.random() * 256);
  switch (_0x1257be.toUpperCase()) {
    case "A":
      return "10." + _0x26c595() + "." + _0x26c595() + "." + _0x26c595();
    case "B":
      const _0x3e7389 = 16 + Math.floor(Math.random() * 16);
      return "172." + _0x3e7389 + "." + _0x26c595() + "." + _0x26c595();
    case "C":
    default:
      return "192.168." + _0x286322 + "." + _0x26c595();
  }
};
class x_0x40c9e7 {
  constructor(_0x57b82f) {
    this.index = x_0x3b9187.userIdx++;
    this.nickname = this.index;
    this.totalCoin = 0;
    this.allCash = 0;
    this.user = _0x57b82f.split("#");
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
    x_0x3b9187.wait(4000);
    try {
      const _0x52f5d4 = {
        url: "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
        method: "GET",
        timeout: 12000,
        headers: {}
      };
      _0x52f5d4.headers["User-Agent"] = x_0x4ea1ab;
      _0x52f5d4.headers.Cookie = this.ck;
      _0x52f5d4.headers["Content-Type"] = "application/x-www-form-urlencoded";
      const {
        data: _0x459b49
      } = await x_0x3a35aa.request(_0x52f5d4);
      if (_0x459b49 && _0x459b49.result === 1 && _0x459b49.data) {
        {
          this.nickname = "[" + this.index + "] " + _0x459b49.data.userData?.["nickname"];
          this.totalCoin = _0x459b49.data.totalCoin;
          this.allCash = _0x459b49.data.totalCash;
          x_0x3b9187.log("璐﹀彿[" + this.nickname + "] 💰 褰撳墠閲戝竵: " + this.totalCoin + "，💸 褰�鍓嶄綑棰�: " + this.allCash);
        }
      }
      const _0x1d1da4 = {
        secret_data: "",
        user_id: Number(this.userId),
        salt: this.salt,
        nickname: this.nickname,
        ck: this.ck,
        total_coin: this.totalCoin,
        all_cash: this.allCash,
        sock: this.sock
      };
      const _0x305e4f = {
        url: "https://www.2eva.cn/api/ksjs/ksjs_record/create",
        method: "POST",
        data: _0x1d1da4
      };
      x_0x3a35aa.request(_0x305e4f);
    } catch (_0x54bd15) {
      {
        x_0x3b9187.log("璐﹀彿[" + this.nickname + "] 鑾峰彇璐︽埛淇℃伅澶辫触: " + _0x54bd15);
      }
    }
  }
  checkCookieVariables() {
    const _0x2e6636 = ["kpn", "kpf", "userId", "did", "c", "appver", "language", "mod", "did_tag", "egid", "oDid", "androidApiLevel", "newOc", "browseType", "socName", "ftt", "abi", "userRecoBit", "device_abi", "grant_browse_type", "iuid", "rdid", "isp", "thermal", "net", "kcv", "app", "bottom_navigation", "ver", "android_os", "boardPlatform", "slh", "country_code", "nbh", "hotfix_ver", "did_gt", "keyconfig_state", "cdid_tag", "sys", "max_memory", "cold_launch_time_ms", "oc", "sh", "deviceBit", "ddpi", "is_background", "sw", "apptype", "icaver", "totalMemory", "sbh", "darkMode", "earphoneMode"];
    const _0x258bf6 = this.ck;
    const _0x42feef = {};
    if (_0x258bf6) {
      {
        _0x258bf6.split(";").forEach(_0x1f810f => {
          const [_0x5cff69, _0x5f52e3] = _0x1f810f.trim().split("=");
          _0x42feef[_0x5cff69] = _0x5f52e3;
        });
      }
    }
    const _0x273f57 = {};
    _0x2e6636.forEach(_0x5e16f4 => {
      {
        _0x273f57[_0x5e16f4] = _0x42feef[_0x5e16f4];
      }
    });
    let _0x207f5c = /kuaishou\.api_st=([^;]+)/;
    let _0x4fc1e6 = _0x258bf6.match(new RegExp(_0x207f5c, ""));
    this.api_st = _0x4fc1e6[1] || "";
    _0x2e6636.forEach(_0x49834e => {
      {
        const _0x5189db = _0x42feef[_0x49834e];
        if (_0x5189db !== undefined) {
          {
            this[_0x49834e] = _0x5189db;
          }
        }
      }
    });
    return _0x273f57;
  }
  getOaid() {
    const _0x5e2995 = this.ck;
    const _0x10a8fb = {};
    if (_0x5e2995) {
      {
        _0x5e2995.split(";").forEach(_0x2b5c37 => {
          const [_0x366ec7, _0x1ac6fa] = _0x2b5c37.trim().split("=");
          _0x10a8fb[_0x366ec7] = _0x1ac6fa;
        });
      }
    }
    return _0x10a8fb.oaid || "9e4bb0e5bc326fb1";
  }
  getNwip() {
    const _0x5e2f34 = this.ck;
    const _0x1b6f4b = {};
    if (_0x5e2f34) {
      _0x5e2f34.split(";").forEach(_0x533183 => {
        const [_0x15526b, _0x4b0482] = _0x533183.trim().split("=");
        _0x1b6f4b[_0x15526b] = _0x4b0482;
      });
    }
    return _0x1b6f4b.nwip || generateLocalIp();
  }
  getKsadtype() {
    const _0x300640 = this.ck;
    const _0x272f02 = {};
    if (_0x300640) {
      {
        _0x300640.split(";").forEach(_0x3b43c3 => {
          {
            const [_0x4781ab, _0x48cb96] = _0x3b43c3.trim().split("=");
            _0x272f02[_0x4781ab] = _0x48cb96;
          }
        });
      }
    }
    const _0x59f465 = _0x272f02.ksadtype || x_0x3830d5;
    const _0xe75d56 = _0x59f465.split(",");
    const _0x3d731b = ["look", "food", "box", "search"];
    const _0x43ef40 = _0x3d731b.filter(_0x134678 => _0xe75d56.includes(_0x134678));
    const _0x1a8336 = ["search_follow", "look_follow"];
    const _0x41572e = _0x1a8336.filter(_0x3a4266 => _0xe75d56.includes(_0x3a4266));
    const _0x13f144 = {
      intersec: _0x43ef40,
      intersec1: _0x41572e
    };
    return _0x13f144;
  }
  getOsVersion() {
    const _0x38dd91 = this.ck;
    const _0x11abfa = {};
    if (_0x38dd91) {
      {
        _0x38dd91.split(";").forEach(_0x29d7ee => {
          {
            const [_0x10903b, _0x19a30c] = _0x29d7ee.trim().split("=");
            _0x11abfa[_0x10903b] = _0x19a30c;
          }
        });
      }
    }
    return _0x11abfa.osVersion || 10;
  }
  async getIP() {
    if (this.user.length > 2) {
      {
        this.sock = this.user[2];
        if (this.sock && (this.sock.includes("socks5://") || this.sock.includes("socks://"))) {
          {
            try {
              {
                this.socks5 = new x_0x352cb3(this.sock);
                const _0x45ae00 = {
                  url: "https://www.2eva.cn/api/health",
                  method: "GET",
                  timeout: 30000,
                  httpAgent: this.socks5,
                  httpsAgent: this.socks5,
                  proxy: false,
                  headers: {}
                };
                _0x45ae00.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";
                let {
                  data: _0x3d1397
                } = await x_0x3a35aa.request(_0x45ae00);
                this.wwip = _0x3d1397.ip;
                this.nwip = await this.getNwip();
                x_0x3b9187.log("璐﹀彿[" + this.nickname + "] 澶栫綉IP:[" + this.wwip + "," + this.nwip + "]");
                return;
              }
            } catch (_0x326004) {
              {
                this.socks5 = null;
                console.log("璐﹀彿[" + this.nickname + "]sock5浠ｇ悊閿欒");
              }
            }
          }
        }
      }
    }
    try {
      const _0x2e27d3 = {
        url: "https://www.2eva.cn/api/health",
        method: "GET",
        timeout: 30000
      };
      let {
        data: _0x466e01
      } = await x_0x3a35aa.request(_0x2e27d3);
      this.wwip = _0x466e01.ip;
      this.nwip = await this.getNwip();
      x_0x3b9187.log("璐﹀彿[" + this.nickname + "] 浠ｇ悊涓嶅瓨鍦╘x20閲囩敤鐩磋繛妯″紡[" + this.wwip + "," + this.nwip + "]");
    } catch (_0x4c6d1a) {
      x_0x3b9187.log("璐﹀彿[" + this.nickname + "] 缃戠粶鑾峰彇澶辫触");
    }
  }
  async executeTask(_0x8ed0b1, _0x18fda9) {
    let _0x51cced = await this.loadAd(_0x8ed0b1);
    if (!_0x51cced) {
      {
        x_0x3b9187.log("璐﹀彿[" + this.nickname + "] " + x_0x3b9187.wheelNum + "/" + this.look + "/" + _0x18fda9 + " [" + this.adinfo.name + "] 鑾峰彇骞垮憡淇℃伅澶辫触锛岃烦杩囨湰杞湅骞垮憡");
        return true;
      }
    }
    const _0x6e887a = Math.floor((_0x51cced.watchAdTime + Math.floor(Math.random() * 4 + 4) * 1000) / 1000);
    x_0x3b9187.log("璐﹀彿[" + this.nickname + "] " + x_0x3b9187.wheelNum + "/" + this.look + "/" + _0x18fda9 + " [" + this.adinfo.name + "] 骞垮憡" + _0x51cced.watchAdTime / 1000 + "绉抃x20闅忔満" + _0x6e887a + "绉�");
    await x_0x3b9187.wait(_0x6e887a * 1000);
    const {
      neoAmount: _0x388617,
      status: _0x298172
    } = await this.subAd(_0x51cced.cid, _0x51cced.llsid, _0x51cced.adExtInfo, Date.now(), _0x6e887a, _0x51cced.materialTime, _0x51cced.watchAdTime);
    await this.getAccountBasicInfo();
    if (_0x298172 == 2) {
      return true;
    }
    if (_0x298172 == 3) {
      x_0x3b9187.failadnumobj[this.salt] = 9999999;
      return true;
    }
    const _0x522798 = Math.floor(Math.random() * 23 + 15);
    x_0x3b9187.log("璐﹀彿[" + this.nickname + "] " + x_0x3b9187.wheelNum + "/" + this.look + "/" + _0x18fda9 + " [" + this.adinfo.name + "] 鉁匼x20鑾峰彇閲戝竵[" + _0x388617 + "] 绛夊緟[" + _0x522798 + "绉抅");
    this.look++;
    if (_0x388617 < 20) {
      x_0x3b9187.log("璐﹀彿[" + this.nickname + "] " + x_0x3b9187.wheelNum + "/" + this.look + "/" + _0x18fda9 + " [" + this.adinfo.name + "] 鉂孿x20棰嗗彇閲戝竵涓嶈冻20 绛�寰匸" + _0x522798 + "绉抅杩涘叆涓嬩竴杞�");
      x_0x3b9187.failadnumobj[this.salt] = x_0x3b9187.failadnumobj[this.salt] + 1;
      await x_0x3b9187.wait(_0x522798 * 1000);
      return true;
    } else {
      x_0x3b9187.failadnumobj[this.salt] = 0;
      if (["look_follow", "search_follow"].includes(_0x8ed0b1)) {
        {
          this.followCount++;
        }
      }
      await x_0x3b9187.wait(_0x522798 * 1000);
      if (_0x51cced.hashMore && this.followCount <= x_0x3b9187[_0x8ed0b1 + "count"] && (this.adtype_follow.includes(_0x8ed0b1 + "_follow") || this.adtype_follow.includes("" + _0x8ed0b1))) {
        {
          x_0x3b9187.log("璐﹀彿[" + this.nickname + "] 寮€濮�杩藉姞骞垮憡");
          const _0x442c76 = {
            look_follow: "look_follow",
            search_follow: "search_follow",
            look: "look_follow",
            search: "search_follow"
          };
          return await this.executeTask(_0x442c76[_0x8ed0b1], _0x18fda9);
        }
      }
    }
  }
  async run() {
    this.cookies = this.checkCookieVariables();
    const {
      intersec: _0x4a1888,
      intersec1: _0x4ff087
    } = this.getKsadtype();
    this.adtype = _0x4a1888;
    this.adtype_follow = _0x4ff087;
    if (!this.salt) {
      return x_0x3b9187.log("璐﹀彿['" + this.nickname + "'] salt涓�瀛樺湪");
    }
    if (!x_0x3b9187.failadnumobj.hasOwnProperty(this.salt)) {
      x_0x3b9187.failadnumobj[this.salt] = 0;
    }
    if (x_0x3b9187.failadnumobj[this.salt] >= x_0x3b9187.failadnum) {
      return x_0x3b9187.log("🙅 璐﹀彿['" + this.nickname + "'] 杩�缁�" + x_0x3b9187.failadnumobj[this.salt] + "娆′綆浠峰€�骞垮憡锛屽仠姝㈡湰杞繍琛�");
    }
    await this.getIP();
    await this.getAccountBasicInfo();
    this.oaid = this.getOaid();
    this.osVersion = this.getOsVersion();
    x_0x3b9187.log("璐﹀彿[" + this.nickname + " 骞�鍛婅澶囨爣璇哰" + this.oaid + "]]鑾峰彇绯荤粺鐗堟湰 [" + this.osVersion + "],骞垮憡绫诲瀷[" + this.adtype + "]");
    for (const _0x4428ca of this.adtype) {
      {
        const _0x450fcc = x_0x3b9187[_0x4428ca + "count"];
        this.look = 1;
        this.adinfo = x_0x3b9187.taskConfigs[_0x4428ca];
        while (this.look <= _0x450fcc) {
          this.followCount = 1;
          let _0x3c10e2 = await this.executeTask(_0x4428ca, _0x450fcc);
          if (_0x3c10e2) {
            {
              return;
            }
          }
        }
      }
    }
    x_0x3b9187.log("璐﹀彿[" + this.nickname + "] " + x_0x3b9187.wheelNum + "杞甛x20鎵€鏈�浠诲姟瀹屾垚锛�");
  }
  is_live_ad(_0x362d3f = {}) {
    try {
      let _0x3a8d5a = _0x362d3f.adExtInfo || _0x362d3f.extInfo || _0x362d3f?.["ad"]?.["adExtInfo"] || "{}";
      if (typeof _0x3a8d5a === "string") {
        try {
          {
            _0x3a8d5a = JSON.parse(_0x3a8d5a);
          }
        } catch (_0x27724d) {
          _0x3a8d5a = {};
        }
      }
      const _0x583dab = ["鐩存挱", "live", "涓绘挱", "LIVE", "zb", "ZB"];
      const _0x43f08b = String(_0x362d3f.creativeId || _0x362d3f?.["ad"]?.["creativeId"] || "").toLowerCase();
      const _0x20e8d1 = String(_0x3a8d5a.description || "").toLowerCase();
      const _0x47099a = String(_0x3a8d5a.title || _0x362d3f.title || "").toLowerCase();
      const _0x39325f = String(_0x3a8d5a.caption || _0x362d3f.caption || "").toLowerCase();
      const _0xa6d0c4 = [_0x43f08b, _0x20e8d1, _0x47099a, _0x39325f, JSON.stringify(_0x3a8d5a)];
      for (const _0x3ca71f of _0xa6d0c4) {
        {
          for (const _0x1f8c53 of _0x583dab) {
            if (_0x3ca71f && _0x3ca71f.includes(_0x1f8c53.toLowerCase())) {
              return true;
            }
          }
        }
      }
      const _0x39c58e = _0x362d3f.materialTime || _0x362d3f?.["ad"]?.["materialTime"] || 0;
      if (_0x39c58e > 60000) {
        return true;
      }
      if (_0x43f08b.startsWith("live_") || _0x43f08b.startsWith("zb_") || _0x43f08b.startsWith("live-") || _0x43f08b.startsWith("zb-")) {
        return true;
      }
      return false;
    } catch (_0x340d1c) {
      return false;
    }
  }
  async loadReqParams(_0x3e905b, _0x106487, _0x18cc7e) {
    try {
      {
        const _0xba526c = Buffer.from(_0x3e905b).toString("base64");
        const _0x36c3fd = Buffer.from(_0x18cc7e).toString("base64");
        const _0x42bbaf = Buffer.from(_0x106487).toString("base64");
        let {
          data: _0x485180
        } = await x_0x3a35aa.request({
          url: x_0x1cda66 + "/api/ksjs/ksjs_km/nssig",
          headers: {
            ...x_0x214443,
            nickname: encodeURIComponent(this.nickname),
            userid: this.userId,
            salt: this.salt
          },
          method: "POST",
          data: {
            path: _0xba526c,
            salt: _0x36c3fd,
            data: _0x42bbaf
          }
        });
        if (_0x485180.code === 0) {
          {
            const _0x397565 = {
              sig: _0x485180.data.sig,
              __NS_xfalcon: "",
              __NStokensig: _0x485180.data.nstokensig,
              __NS_sig3: _0x485180.data.nssig3
            };
            return _0x397565;
          }
        } else {
          {
            console.log("鑾峰彇nssig3澶辫触", _0x485180.msg);
            return null;
          }
        }
      }
    } catch (_0x3795ac) {
      console.log("鍔犺浇nssig3澶辫触", _0x3795ac);
      return null;
    }
  }
  async encsign(_0x4d61ca) {
    try {
      {
        const _0x42d141 = Buffer.from(JSON.stringify(_0x4d61ca)).toString("base64");
        const _0x7bd13c = {
          data: _0x42d141
        };
        const {
          data: _0x1207b9
        } = await x_0x3a35aa.request({
          url: x_0x1cda66 + "/api/ksjs/ksjs_km/encsign",
          headers: {
            ...x_0x214443,
            nickname: encodeURIComponent(this.nickname),
            userid: this.userId,
            salt: this.salt
          },
          method: "POST",
          data: _0x7bd13c
        });
        if (_0x1207b9.code === 0) {
          {
            return _0x1207b9.data;
          }
        } else {
          console.log("鑾峰彇encsign澶�璐�", _0x1207b9.msg);
          return null;
        }
      }
    } catch (_0x53cddd) {
      {
        console.log("鍔犺浇encsign 澶辫触");
        return null;
      }
    }
  }
  loadAdInfo(_0x4fb162) {
    this.adinfo = x_0x3b9187.taskConfigs[_0x4fb162];
    let _0x13d4e2 = "{\"openH5AdCount\":\"2\",\"sessionLookedCompletedCount\":\"1\",\"sessionType\":\"1\",\"neoParams\":\"\",\"searchKey\":\"\",\"triggerType\":\"2\",\"disableReportToast\":\"true\",\"businessEnterAction\":\"7\"}";
    if (this.adinfo.businessId == 7076) {
      const _0x56e08e = {
        openH5AdCount: 0,
        sessionLookedCompletedCount: 0,
        sessionType: "1",
        searchKey: x_0x3b9187.searchkeyword,
        triggerType: "2",
        disableReportToast: true,
        businessEnterAction: "7",
        neoParams: "eyJwYWdlSWQiOiAxMTAxNCwgInN1YlBhZ2VJZCI6IDEwMDE2MTUzNywgInBvc0lkIjogMjE2MjY4LCAiYnVzaW5lc3NJZCI6IDcwNzYsICJleHRQYXJhbXMiOiAiIiwgImN1c3RvbURhdGEiOiB7ImV4aXRJbmZvIjogeyJ0b2FzdERlc2MiOiBudWxsLCAidG9hc3RJbWdVcmwiOiBudWxsfX0sICJwZW5kYW50VHlwZSI6IDEsICJkaXNwbGF5VHlwZSI6IDIsICJzaW5nbGVQYWdlSWQiOiAwLCAic2luZ2xlU3ViUGFnZUlkIjogMCwgImNoYW5uZWwiOiAwLCAiY291bnRkb3duUmVwb3J0IjogZmFsc2UsICJ0aGVtZVR5cGUiOiAwLCAibWl4ZWRBZCI6IHRydWUsICJmdWxsTWl4ZWQiOiB0cnVlLCAiYXV0b1JlcG9ydCI6IHRydWUsICJmcm9tVGFza0NlbnRlciI6IHRydWUsICJzZWFyY2hJbnNwaXJlU2NoZW1lSW5mbyI6IG51bGwsICJhbW91bnQiOiAwfQ=="
      };
      _0x13d4e2 = JSON.stringify(_0x56e08e);
    }
    const _0x5d87f5 = {
      appId: "kuaishou_nebula",
      name: "蹇墜鏋侀€�鐗�",
      packageName: "com.kuaishou.nebula",
      version: this.appver,
      versionCode: -1
    };
    const _0x6ad975 = {
      width: 1080,
      height: 2068
    };
    const _0x4c6b22 = {
      latitude: 0,
      longitude: 0
    };
    let _0x3e2141 = {
      appInfo: _0x5d87f5,
      deviceInfo: {
        oaid: this.oaid,
        osType: 1,
        osVersion: this.getOsVersion(),
        language: this.language,
        deviceId: "" + this.did,
        screenSize: _0x6ad975,
        ftt: "",
        supportGyroscope: true
      },
      networkInfo: {
        ip: this.nwip,
        connectionType: 100
      },
      geoInfo: _0x4c6b22,
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
        impExtData: _0x13d4e2,
        mediaExtData: "{}",
        session: x_0x3b9187.uuid()
      }],
      adClientInfo: "{\"ipdxIP\":\"" + this.wwip + "\"}"
    };
    return _0x3e2141;
  }
  async loadAd(_0x31b50b, _0x446f0f = 0) {
    const _0x59a4e3 = x_0x3e9837.skipliveads ? skiplivemaxretries : 1;
    const _0x2ab384 = this.loadAdInfo(_0x31b50b);
    const _0x1e4fe9 = await this.encsign(_0x2ab384);
    if (_0x1e4fe9 == null) {
      x_0x3b9187.log("鑾峰彇encsign澶�璐�");
      return;
    }
    const _0xa708cb = {
      encData: _0x1e4fe9.encdata,
      sign: _0x1e4fe9.sign,
      cs: false,
      client_key: "2ac2a76d",
      videoModelCrowdTag: "1_23",
      watchStage: "android",
      os: "android",
      "kuaishou.api_st": this.api_st,
      uQaTag: x_0x5a7267
    };
    let _0x258b87 = {
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
    const _0x1b30f0 = await this.loadReqParams("/rest/e/reward/mixed/ad", x_0x3b9187.queryStr(_0xa708cb) + "&" + x_0x3b9187.queryStr(_0x258b87), this.salt);
    if (_0x1b30f0 == null) {
      {
        x_0x3b9187.log("鑾峰彇骞垮憡淇℃伅澶辫触");
        return;
      }
    }
    const _0xd5ca4c = {
      ..._0x258b87
    };
    const _0x31331f = _0xd5ca4c;
    _0x31331f.sig = _0x1b30f0.sig;
    _0x31331f.__NS_sig3 = _0x1b30f0.__NS_sig3;
    _0x31331f.__NS_xfalcon = "";
    _0x31331f.__NStokensig = _0x1b30f0.__NStokensig;
    try {
      {
        let {
          data: _0x1f9aaa
        } = await x_0x3a35aa.request({
          url: "https://api.e.kuaishou.com/rest/e/reward/mixed/ad",
          httpAgent: this.socks5,
          httpsAgent: this.socks5,
          params: _0x31331f,
          proxy: false,
          timeout: 30000,
          method: "POST",
          headers: {
            Host: "api.e.kuaishou.com",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Cookie: "kuaishou.api_st=" + this.api_st + ";__NSWJ=;region_ticket=RT_66898EB2122EC01C6A99E8FCCB4887F9C156DFC294E9FD56AD0156AECEB24C4EC69BFDFE7",
            "User-Agent": x_0x4ea1ab,
            "X-Client-Info": "model=" + this.mod + ";os=Android;nqe-score=22;network=" + this.net + ";signal-strength=4;"
          },
          data: _0xa708cb
        });
        if (_0x1f9aaa.errorMsg === "OK" && _0x1f9aaa.feeds && _0x1f9aaa.feeds[0] && _0x1f9aaa.feeds[0].ad) {
          if (x_0x3b9187.skipliveads) {
            const _0xcd21cb = _0x1f9aaa.feeds[0];
            const _0x4f5852 = _0xcd21cb.ad ? {
              ..._0xcd21cb.ad
            } : {
              ..._0xcd21cb
            };
            const _0x50f65a = _0xcd21cb?.["ad"]?.["adDataV2"]?.["inspireAdInfo"]?.["adExtInfo"] ?? _0xcd21cb?.["ad"]?.["adExtInfo"] ?? _0xcd21cb?.["adExtInfo"] ?? "{}";
            _0x4f5852.creativeId = _0x4f5852.creativeId ?? creativeId;
            _0x4f5852.materialTime = _0x4f5852.materialTime ?? _0xcd21cb.materialTime ?? 0;
            _0x4f5852.adExtInfo = typeof _0x50f65a === "string" ? _0x50f65a : JSON.stringify(_0x50f65a);
            if (this.is_live_ad(_0x4f5852)) {
              if (_0x446f0f < _0x59a4e3 - 1) {
                return await loadAd(_0x31b50b, _0x446f0f + 1);
              }
              console.log(" 澶�娆¤幏鍙栫洿鎾箍鍛婏紝鍋滄褰撳墠浠诲姟");
              return null;
            }
          }
          const _0x5253cc = _0x1f9aaa.feeds[0].caption || _0x1f9aaa.feeds[0].ad?.["caption"] || "";
          if (_0x5253cc) {
            {
              let _0x465e1b = "璐﹀彿[" + this.nickname + "] 鎴愬姛鑾峰彇鍒板箍鍛婁俊鎭細" + _0x5253cc;
              if (_0x1f9aaa?.["feeds"][0]?.["ad"]?.["extData"]) {
                const _0x21b03a = JSON.parse(_0x1f9aaa?.["feeds"][0]?.["ad"]["extData"]);
                _0x465e1b = "璐﹀彿[" + this.nickname + "] 鑾峰彇鍒板箍鍛婁俊鎭細" + _0x5253cc + "锛岄璁¤幏寰梉" + _0x21b03a.awardCoin + "]閲�甯�";
              }
              x_0x3b9187.log(_0x465e1b);
            }
          } else {
            {
              x_0x3b9187.log("璐﹀彿[" + this.nickname + "] 鑾峰彇骞垮憡淇℃伅澶辫触");
              return null;
            }
          }
          const _0x3d00a5 = _0x1f9aaa.feeds[0].exp_tag || "";
          const _0x3696e2 = _0x3d00a5.split("/")[1]?.["split"]("_")?.[0] || "";
          if (_0x1f9aaa.feeds[0].streamManifest) {
            {
              const _0x42fdd1 = _0x1f9aaa.feeds[0].ad.adDataV2?.["onceAgainRewardInfo"]?.["hasMore"] || false;
              const _0x4a12a7 = {
                cid: _0x1f9aaa.feeds[0].ad.creativeId,
                llsid: _0x3696e2,
                adExtInfo: _0x1f9aaa.feeds[0].ad.adDataV2.inspireAdInfo.adExtInfo,
                materialTime: _0x1f9aaa.feeds[0].streamManifest.adaptationSet[0].duration,
                watchAdTime: _0x1f9aaa.feeds[0].ad.adDataV2.inspireAdInfo.inspireAdBillTime,
                hashMore: _0x42fdd1
              };
              return _0x4a12a7;
            }
          } else {
            const _0x4df43a = {
              cid: _0x1f9aaa.feeds[0].ad.creativeId,
              llsid: _0x3696e2,
              adExtInfo: _0x1f9aaa.feeds[0].ad.adDataV2.inspireAdInfo.adExtInfo,
              materialTime: 3000,
              watchAdTime: _0x1f9aaa.feeds[0].ad.adDataV2.inspireAdInfo.inspireAdBillTime
            };
            return _0x4df43a;
          }
        } else {
          x_0x3b9187.log("璐﹀彿[" + this.nickname + "] 鑾峰彇骞垮憡淇℃伅澶辫触");
          return null;
        }
      }
    } catch (_0x400e81) {
      {
        console.log("鍔犺浇骞垮憡淇℃伅澶辫触");
        return null;
      }
    }
  }
  async subAd(_0x1587ee, _0x19e6e9, _0x56d000, _0x1b5f0f, _0x3260f7, _0x229b62, _0x304949) {
    const _0x38b42b = _0x1b5f0f + _0x3260f7 * 1000;
    const _0x1ea6bc = {
      businessId: this.adinfo.businessId,
      endTime: _0x38b42b,
      extParams: "",
      mediaScene: "video",
      neoInfos: [{
        clientExtInfo: "{\"serialPaySuccess\":false}",
        creativeId: _0x1587ee,
        extInfo: "",
        llsid: _0x19e6e9,
        adExtInfo: _0x56d000,
        materialTime: _0x229b62,
        watchAdTime: _0x304949,
        requestSceneType: this.adinfo.requestSceneType,
        taskType: this.adinfo.taskType,
        watchExpId: "",
        watchStage: 0
      }],
      pageId: this.adinfo.pageId || 11101,
      posId: this.adinfo.posId,
      reportType: 0,
      sessionId: "adNeo-" + this.userId + "-" + this.adinfo.subPageId + "-" + _0x1b5f0f,
      startTime: _0x1b5f0f,
      subPageId: this.adinfo.subPageId
    };
    const _0x54f8c5 = JSON.stringify(_0x1ea6bc);
    const _0x30d94e = "bizStr=" + encodeURIComponent(_0x54f8c5) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.api_st;
    const _0x4d2b00 = await this.loadReqParams("/rest/r/ad/task/report", "mod=" + this.mod + "&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did + "&" + _0x30d94e, this.salt);
    if (_0x4d2b00 == null) {
      {
        console.log("鑾峰彇sign澶辫触 璇�閲嶈瘯");
        const _0x4d13a6 = {
          neoAmount: 0,
          status: 2
        };
        return _0x4d13a6;
      }
    }
    try {
      {
        let {
          data: _0x52f93a
        } = await x_0x3a35aa.request({
          url: "https://api.e.kuaishou.com/rest/r/ad/task/report?" + ("mod=" + this.mod + "&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did) + "&sig=" + _0x4d2b00.sig + "&__NS_sig3=" + _0x4d2b00.__NS_sig3 + "&__NS_xfalcon=" + (_0x4d2b00.__NS_xfalcon || "") + "&__NStokensig=" + _0x4d2b00.__NStokensig,
          httpAgent: this.socks5,
          httpsAgent: this.socks5,
          proxy: false,
          timeout: 30000,
          method: "POST",
          headers: {
            Host: "api.e.kuaishou.com",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Cookie: "kuaishou.api_st=" + this.api_st,
            "User-Agent": x_0x4ea1ab,
            "X-Client-Info": "model=" + this.mod + ";os=Android;nqe-score=22;network=" + this.net + ";signal-strength=4;"
          },
          data: _0x30d94e
        });
        if ([20107, 20108, 1003, 415].includes(_0x52f93a.result)) {
          {
            console.log("⚠️ 宸茶揪涓婇檺");
            console.log(_0x52f93a);
            const _0x1c87c4 = {
              neoAmount: 0,
              status: 3
            };
            return _0x1c87c4;
          }
        }
        if (_0x52f93a.message == "鎴愬姛") {
          const _0x5904da = {
            neoAmount: _0x52f93a.data.neoAmount,
            status: 1
          };
          return _0x5904da;
        } else {
          console.log(_0x52f93a);
          const _0x47e0e0 = {
            neoAmount: 0,
            status: 2
          };
          return _0x47e0e0;
        }
      }
    } catch (_0x21a62d) {
      {
        console.log(_0x21a62d);
        const _0x343f68 = {
          neoAmount: 0,
          status: 1
        };
        return _0x343f68;
      }
    }
  }
}
function x_0x3e9837(_0x39530c) {
  return new class {
    constructor(_0x584250) {
      this.userIdx = 1;
      this.userList = [];
      this.userCount = 0;
      this.name = _0x584250;
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
      const _0x9a846e = {
        name: "鐪嬪箍鍛婂緱閲戝竵",
        businessId: 672,
        posId: 24067,
        subPageId: 100026367,
        requestSceneType: 1,
        taskType: 1
      };
      const _0xbb80d3 = {
        name: "杩藉姞鐪嬪箍鍛婂緱閲戝竵",
        businessId: 672,
        posId: 24067,
        subPageId: 100026367,
        requestSceneType: 2,
        taskType: 1
      };
      const _0x5a9d2f = {
        name: "瀹濈骞垮憡",
        businessId: 606,
        posId: 20346,
        subPageId: 100024064,
        requestSceneType: 1,
        taskType: 1
      };
      const _0x11d25b = {
        name: "楗ˉ骞垮憡",
        businessId: 9362,
        posId: 24067,
        subPageId: 100026367,
        requestSceneType: 7,
        taskType: 2
      };
      const _0x44005f = {
        name: "寮€瀹�绠�",
        businessId: 606,
        posId: 20346,
        subPageId: 100024064,
        requestSceneType: 1,
        taskType: 1
      };
      const _0xd2396 = {
        name: "鎼滅储浠诲姟",
        pageId: 11014,
        businessId: 7076,
        posId: 216268,
        subPageId: 100161537,
        requestSceneType: 1,
        taskType: 1
      };
      const _0x1efe71 = {
        name: "鎼滅储浠诲姟杩藉姞",
        pageId: 11014,
        businessId: 7076,
        posId: 216268,
        subPageId: 100161537,
        requestSceneType: 7,
        taskType: 2
      };
      const _0x787b8e = {
        look: _0x9a846e,
        look_follow: _0xbb80d3,
        box: _0x5a9d2f,
        food: _0x11d25b,
        kbox: _0x44005f,
        search: _0xd2396,
        search_follow: _0x1efe71
      };
      this.taskConfigs = _0x787b8e;
    }
    checkEnv() {
      {
        const _0x5da5d5 = [];
        if (this.isNode()) {
          Object.keys(process.env).forEach(_0x1eebe5 => {
            {
              if (_0x1eebe5.startsWith("ksck")) {
                {
                  _0x5da5d5.push(_0x1eebe5);
                }
              }
            }
          });
        }
        let _0x551d70 = [];
        _0x5da5d5.forEach(_0x32e3ce => {
          {
            const _0x2f72be = (this.isNode() ? process.env[_0x32e3ce] : "") || "";
            if (_0x2f72be) {
              {
                _0x551d70.push(_0x2f72be);
              }
            }
          }
        });
        const _0x7484a2 = _0x551d70.join("&");
        this.userList = _0x7484a2.split(["&", "\n"].find(_0x52c0db => {
          return _0x7484a2.includes(_0x52c0db);
        }) || "&").filter(_0xcb3b24 => {
          {
            return _0xcb3b24;
          }
        });
        this.userCount = this.userList.length;
        const _0x2e36f1 = (this.isNode() ? process.env.KS_COUNT : 999) || 999;
        this.count = _0x2e36f1;
        const _0xd21609 = (this.isNode() ? process.env.KS_AD_TYPE : "look,box,food,search,look_follow,search_follow") || "look,box,food,search,look_follow,search_follow";
        x_0x3830d5 = _0xd21609;
        const _0x35f5f8 = (this.isNode() ? process.env.KS_KM : "") || "";
        x_0x214443.km = _0x35f5f8;
        const _0x16f86d = (this.isNode() ? process.env.KS_TIME : 480) || 480;
        this.time = Number(_0x16f86d);
        const _0x5634f2 = (this.isNode() ? process.env.KS_TIME1 : 120) || 120;
        this.time1 = Number(_0x5634f2);
        const _0x25d6d0 = (this.isNode() ? process.env.KS_SORT : 0) || 0;
        this.sort = Number(_0x25d6d0);
        const _0x23b68c = (this.isNode() ? process.env.KS_IP : 1) || 1;
        this.ip = Number(_0x23b68c);
        const _0x4a8537 = (this.isNode() ? process.env.KS_FAIL_NUM : 3) || 3;
        this.failadnum = Number(_0x4a8537);
        this.log({
          count: this.count,
          time: this.time,
          time1: this.time1,
          sort: this.sort
        });
        const _0x16befc = (this.isNode() ? process.env.SKIP_LIVE_ADS : 0) || 0;
        this.skipliveads = Boolean(_0x16befc);
        const _0x5c02c7 = (this.isNode() ? process.env.SKIP_LIVE_MAX_RETRIES : 2) || 2;
        this.skiplivemaxretries = Number(_0x5c02c7);
        const _0x2ab279 = (this.isNode() ? process.env.KS_AD_NUM : "5,5,10,5") || "5,5,10,5";
        const _0x13841b = _0x2ab279.split(",");
        this.foodcount = Number(_0x13841b[Math.min(0, _0x13841b.length - 1)]);
        this.boxcount = Number(_0x13841b[Math.min(1, _0x13841b.length - 1)]);
        this.lookcount = Number(_0x13841b[Math.min(2, _0x13841b.length - 1)]);
        this.searchcount = Number(_0x13841b[Math.min(3, _0x13841b.length - 1)]);
        const _0x2481b6 = (this.isNode() ? process.env.KSFOLLOW_COUNT : "2,2") || "2,2";
        const _0x66ee55 = _0x2481b6.split(",");
        this.look_followcount = Number(_0x66ee55[Math.min(0, _0x66ee55.length - 1)]);
        this.search_followcount = Number(_0x66ee55[Math.min(1, _0x66ee55.length - 1)]);
        this.searchkeyword = (this.isNode() ? process.env.KS_SEARCH_KEYWORD : "鎹曢奔") || "鎹曢奔";
        this.log("鍏辨壘鍒�" + this.userCount + "涓处鍙�,杩愯" + this.count + "杞�,鍏ㄥ眬骞垮憡绫诲瀷涓�" + _0xd21609);
        console.log("鎼滅储鍏抽敭璇嶏細" + this.searchkeyword);
      }
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    queryStr(_0x16c337) {
      const _0x7430c2 = require("querystring");
      return _0x7430c2.stringify(_0x16c337);
    }
    uuid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x2c2407) {
        {
          var _0x1bcf7b = Math.random() * 16 | 0;
          var _0x457a8e = _0x2c2407 == "x" ? _0x1bcf7b : _0x1bcf7b & 3 | 8;
          return _0x457a8e.toString(16);
        }
      });
    }
    log(_0xb3f77b) {
      {
        const _0x56744d = new Date();
        console.log(x_0xe1d568(_0x56744d, "MM-DD HH:mm:ss"), _0xb3f77b);
      }
    }
    wait(_0x1cb08d) {
      return new Promise(_0x13b0a7 => {
        return setTimeout(_0x13b0a7, _0x1cb08d);
      });
    }
    async done() {
      const _0x2076a2 = new Date().getTime();
      const _0x2ae5c5 = (_0x2076a2 - this.startTime) / 1000;
      this.log(this.name + ",缁�鏉�!" + _0x2ae5c5 + "绉�");
      if (this.isNode()) {
        {
          process.exit(1);
        }
      }
    }
  }(_0x39530c);
}
const x_0x3b9187 = new x_0x3e9837("eva");
async function x_0x12206c() {
  const _0x10a01c = {
    url: "https://gitee.com/fxg1997/open/raw/master/ksNotice.json",
    method: "GET"
  };
  const {
    data: _0x368677
  } = await x_0x3a35aa.request(_0x10a01c);
  console.log(_0x368677);
  console.log("鈺斺晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晽");
  console.log("鈺慭x20                   📢 璐�鍗″湴鍧€鎻�绀篭x20                          鈺�");
  console.log("鈺犫晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨暎");
  console.log("鈺慭x20                   璐�鍗″湴鍧€: 鍔�缇x20658120402                  鈺�");
  console.log("鈺犫晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨暎");
  console.log("鈺慭x20 ck妫€娴嬪湴鍧€: https://www.2eva.cn/cookies.html                鈺�");
  console.log("鈺氣晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨晲鈺愨暆");
}
const x_0xc53fe7 = async () => {
  let _0x4b5b7e = true;
  let _0x40f005 = x_0x3b9187.userCount;
  for (let _0x595473 in x_0x3b9187.failadnumobj) {
    {
      if (x_0x3b9187.failadnumobj[_0x595473] < x_0x3b9187.failadnum) {
        {
          _0x4b5b7e = false;
          break;
        }
      }
    }
  }
  if (Object.keys(x_0x3b9187.failadnumobj).length < _0x40f005) {
    _0x4b5b7e = false;
  }
  if (_0x4b5b7e) {
    x_0x3b9187.log("鎵€鏈�璐﹀彿杩炵画浣庝环鍊煎箍鍛婅秴杩�" + x_0x3b9187.failadnum + "娆★紝鍋滄杩愯");
    x_0x3b9187.done();
    return;
  }
  x_0x3b9187.wheelNum++;
  x_0x3b9187.userIdx = 1;
  if (x_0x3b9187.sort == 1) {
    for (let _0x2c486e of x_0x3b9187.userList) {
      await new x_0x40c9e7(_0x2c486e).run();
      const _0xf424f4 = Math.floor(Math.random() * 20 + 30);
      await x_0x3b9187.wait(_0xf424f4);
    }
  } else {
    await Promise.all(x_0x3b9187.userList.map(_0x3225ed => new x_0x40c9e7(_0x3225ed).run()));
  }
  if (x_0x3b9187.wheelNum < x_0x3b9187.count) {
    {
      const _0x4c550e = Math.floor(Math.random() * x_0x3b9187.time1 + x_0x3b9187.time);
      x_0x3b9187.log("绗�" + x_0x3b9187.wheelNum + "娆′换鍔″畬鎴怽x20绛夊緟" + _0x4c550e + "绉掑悗缁х画鎵ц");
      await x_0x3b9187.wait(_0x4c550e * 1000);
      await x_0xc53fe7();
    }
  } else {
    x_0x3b9187.log("鎵€鏈�浠诲姟瀹屾垚");
    x_0x3b9187.done();
  }
};
!(async () => {
  await x_0x12206c();
  x_0x3b9187.checkEnv();
  await x_0xc53fe7();
})().catch(_0x395541 => {
  return x_0x3b9187.log(_0x395541);
}).finally(() => {
  return x_0x3b9187.done();
});