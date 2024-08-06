//Tue Aug 06 2024 14:46:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x42d73f = _0x32b871("七猫免费小说 书币2.0"),
  _0x5ae8d6 = require("got"),
  _0x248ec8 = require("crypto-js"),
  _0x24f04f = 18000,
  _0x322125 = 3,
  _0x2d4983 = 50,
  _0x5e7047 = ["\n", "@"],
  _0x199773 = "qmreadck",
  _0x1bfcec = console;
let _0x2f0c98;
const _0xb68fdd = process.env[_0x199773] || "";
let _0x4d7c2e = process.env.qmgoldmode || 0,
  _0x18b007 = process.env.qmwait || 0;
try {
  if (!_0x4d7c2e) {
    console.log("\n并发运行 等待间隔" + _0x18b007 + "秒");
  }
  if (_0x4d7c2e) {
    console.log("\n顺序运行 等待间隔" + _0x18b007 + "秒");
  }
} catch (_0x1b7de7) {}
_0x1bfcec.log("\n@jk 七猫 书币2.0");
class _0x11bd97 {
  constructor(_0xaa00ed) {
    this.index = _0x42d73f.userIdx++;
    _0x2f0c98 = _0x42d73f.h();
    this.ck = _0xaa00ed.split("#")[0];
    this.params = _0xaa00ed.split("#")[1];
    this.rdtime = "AUTHORIZATION=" + this.ck + "app-version=7172020application-id=com.kmxs.readeris-white=0net-env=4platform=androidqm-params=" + this.params;
    const _0x4cec1f = {
      limit: _0x322125
    };
    this.got = _0x5ae8d6.extend({
      headers: {
        "net-env": "4",
        "is-white": "0",
        platform: "android",
        "app-version": "7172020",
        "application-id": "com.kmxs.reader",
        AUTHORIZATION: this.ck,
        "qm-params": this.params,
        sign: this.sign(this.rdtime),
        "no-permiss": "3",
        "User-Agent": "webviewversion/0",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip"
      },
      retry: _0x4cec1f,
      timeout: _0x24f04f,
      followRedirect: false
    });
  }
  async Task() {
    _0x2f0c98 += _0x42d73f.g();
    if (_0x4d7c2e) {
      const _0x1aa768 = {
        time: true,
        sp: true,
        console: false
      };
      _0x42d73f.log("账号[" + _0x42d73f.padStr(this.index, _0x42d73f.userCount.toString().length) + "]", _0x1aa768);
      this.x = "";
    } else {
      this.x = "账号[" + _0x42d73f.padStr(this.index, _0x42d73f.userCount.toString().length) + "]";
    }
    this.bk = 0;
    this.px = 0;
    for (const _0x104011 of _0x42d73f.randomarr(99)) {
      for (const _0x4451f6 of [1, 2, 3, 4, 5, 6, 7, 10]) {
        var _0x93c3c8 = await this.coinadd(_0x4451f6);
        if (_0x93c3c8 == 1) {
          break;
        }
        await _0x42d73f.wait(_0x18b007);
      }
      if (this.px >= 12) {
        _0x1bfcec.log(this.x, "看金币视频：全部完成");
        break;
      }
    }
    for (const _0x707475 of _0x42d73f.randomarr(99)) {
      var _0x93c3c8 = await this.coinadd2();
      if (_0x93c3c8 == 1) {
        break;
      }
      await _0x42d73f.wait(_0x18b007);
    }
  }
  async coinadd(_0x4ac08d) {
    try {
      var _0x28bff1 = _0x42d73f.ts(13),
        _0x27173a = _0x4ac08d,
        _0x255e05 = "position_id=chapterendtype=" + _0x27173a + "unique_request_id=331659873" + _0x28bff1,
        _0x263981 = {
          method: "post",
          url: "https://api-ks.wtzw.com/api/v2/coin/add",
          form: {
            position_id: "chapterend",
            type: _0x27173a,
            unique_request_id: "331659873" + _0x28bff1,
            sign: this.sign(_0x255e05)
          }
        };
      let {
        result: _0x4dbd6d
      } = await this.request(_0x263981);
      if (_0x4dbd6d?.["data"]?.["coin"]) {
        this.px = 0;
        _0x1bfcec.log(this.x, "看金币视频：" + _0x4dbd6d?.["data"]?.["coin"]);
      } else {
        this.px += 1;
        return m = 1;
      }
    } catch (_0xf212e5) {}
  }
  async cadd(_0x438e8a) {
    try {
      var _0x3de397 = _0x42d73f.ts(13),
        _0x49a3c5 = 3,
        _0x145d72 = "position_id=chapterendtype=" + _0x49a3c5 + "unique_request_id=331659873" + _0x3de397,
        _0x285af9 = {
          method: "post",
          url: "https://api-ks.wtzw.com/api/v2/coin/add",
          form: {
            position_id: "chapterend",
            type: _0x49a3c5,
            unique_request_id: "331659873" + _0x3de397,
            sign: this.sign(_0x145d72)
          }
        };
      let {
        result: _0x8c36d5
      } = await this.request(_0x285af9);
      _0x1bfcec.log(_0x8c36d5);
    } catch (_0x53fa25) {}
  }
  async coinadd2() {
    try {
      var _0x5c9b7b = _0x42d73f.ts(13),
        _0x3520d4 = "extra_type=0id=4scene=1type=2unique_request_id=445183719" + _0x5c9b7b,
        _0x4fb2f9 = {
          method: "post",
          url: "https://api-cfg.wtzw.com/v1/coin/add",
          form: {
            extra_type: "0",
            id: "4",
            scene: "1",
            type: "2",
            unique_request_id: "445183719" + _0x5c9b7b,
            sign: this.sign(_0x3520d4)
          }
        };
      let {
        result: _0x2981fa
      } = await this.request(_0x4fb2f9);
      if (_0x2981fa?.["data"]?.["coin"]) {
        _0x1bfcec.log(this.x, "看金币视频2：" + _0x2981fa?.["data"]?.["coin"]);
      } else {
        _0x1bfcec.log(this.x, "看金币视频2完成");
        return 1;
      }
    } catch (_0x112c6f) {}
  }
  async read_index() {
    try {
      var _0x186f34 = "book_privacy=1id=is_history=1read_preference=1tab_type=1",
        _0x3cf5b1 = {
          method: "GET",
          url: "https://api-bc.wtzw.com/api/v1/must-read?id=&tab_type=1&is_history=1&read_preference=1&book_privacy=1&sign=" + this.sign(_0x186f34)
        };
      let {
        result: _0x53b8b1
      } = await this.request(_0x3cf5b1);
      if (_0x53b8b1?.["data"]?.["books"]) {
        var _0x967427 = _0x42d73f.randomList(_0x53b8b1?.["data"]?.["books"]);
        this.readid = _0x967427.id;
        _0x1bfcec.log(this.x, "阅读 : 必读榜随机挑选一本书：《" + _0x967427?.["title"] + "》", _0x967427?.["author"], _0x967427?.["sub_title"]);
      }
    } catch (_0x39d153) {}
  }
  async withalbum1_index() {
    try {
      var _0x2c87f4 = "book_privacy=1cache_ver=read_preference=0",
        _0x548de4 = {
          method: "GET",
          url: "https://api-bc.wtzw.com/api/v1/album/index?read_preference=0&book_privacy=1&cache_ver=&sign=" + this.sign(_0x2c87f4)
        };
      let {
        result: _0x2bd95e
      } = await this.request(_0x548de4);
      if (_0x2bd95e?.["data"]?.["sections"]) {
        for (var _0x5ec6c6 of _0x2bd95e?.["data"]?.["sections"]) {
          if (_0x5ec6c6?.["section_header"]?.["section_title"] == "猜你想听") {
            _0x5ec6c6 = _0x42d73f.randomList(_0x5ec6c6?.["books"]);
            this.tbook = _0x5ec6c6.album_id;
            _0x1bfcec.log(this.x, "听书 ：随机听一本书", "《" + _0x5ec6c6?.["title"] + "》", _0x5ec6c6?.["sub_title"]);
          }
        }
      }
    } catch (_0x5e0747) {}
  }
  async reward(_0x19a9e4, _0x5169fb) {
    try {
      const _0x2e27a7 = {
        install_app_list: ""
      };
      const _0x3124f5 = {
        params: _0x2e27a7
      };
      const _0x4ee130 = {
        task_id: _0x19a9e4,
        type_prefix: _0x5169fb,
        axiosConfig: _0x3124f5
      };
      var _0x374d4a = {
        method: "POST",
        url: "https://api-gw.wtzw.com/welf/h5/v1/task/reward?t=" + _0x42d73f.ts(13) + "&install_app_list=",
        form: _0x4ee130
      };
      let {
        result: _0x2790c5
      } = await this.request(_0x374d4a);
      if (_0x2790c5?.["reward"]) {
        if (_0x5169fb == "task") {
          _0x1bfcec.log(this.x, "听读金币奖励 ：", _0x2790c5?.["reward"]);
        }
        if (_0x5169fb == "video") {
          _0x1bfcec.log(this.x, "听读金币视频奖励 ：", _0x2790c5?.["reward"]);
        }
      }
    } catch (_0x24ddbd) {}
  }
  async timing1(_0x466a1d, _0x4c579a, _0x4dffac) {
    try {
      var _0x485296 = "bi=" + this.readid + "bt=0rrn=" + _0x466a1d + "st=" + _0x4c579a,
        _0x2933f2 = {
          method: "POST",
          url: "https://api-sc.wtzw.com/api/v4/timing-reward/report",
          form: {
            bi: this.readid,
            bt: 0,
            rrn: _0x466a1d,
            st: _0x4c579a,
            sign: this.sign(_0x485296)
          }
        };
      let {
        result: _0x57b8e6
      } = await this.request(_0x2933f2);
      if (_0x57b8e6?.["data"]?.["status"] == 1) {
        this.bk = 0;
        var _0x4c579a = _0x57b8e6?.["data"]?.["tntrd"]["split"]("|");
        _0x4dffac == 1 && _0x1bfcec.log(this.x, "阅读 ：当前阅读时间", (_0x4c579a[0] / 60).toFixed(1) + "分 ");
        this.starttimex = _0x57b8e6?.["data"]?.["st"];
        _0x4dffac == 2 && _0x1bfcec.log(this.x, "阅读时长：[上传成功] 当前阅读时间: ", (_0x4c579a[0] / 60).toFixed(1) + "分 ", "下次可领取阅读奖励的时间: ", (_0x4c579a[1] / 60).toFixed(1) + "分 ");
      } else {
        if (_0x57b8e6?.["data"]?.["status"] == 2) {
          this.bk += 1;
          var _0x4543d3 = _0x57b8e6?.["data"]?.["tntrd"]["split"]("|");
          _0x1bfcec.log(this.x, "阅读 ：当前阅读时间", (_0x4543d3[0] / 60).toFixed(1) + "分 请领取阅读奖励");
          for (const _0x27546a of [172, 42, 43, 44, 46, 47, 121]) {
            await this.reward(_0x27546a, "task");
            await this.reward(_0x27546a, "video");
          }
        }
      }
    } catch (_0x1219a0) {}
  }
  async withalbum1(_0x475c33, _0x3fc522, _0x235dad) {
    try {
      if (!_0x3fc522) {
        _0x3fc522 = "null";
      }
      var _0x1168cc = "ai=" + this.tbook + "bt=0rrn=" + _0x475c33 + "st=" + _0x3fc522,
        _0x58c535 = {
          method: "POST",
          url: "https://api-sc.wtzw.com/api/v4/timing-reward/report-with-album",
          form: {
            ai: this.tbook,
            bt: 0,
            rrn: _0x475c33,
            st: _0x3fc522,
            sign: this.sign(_0x1168cc)
          }
        };
      let {
        result: _0x3ff216
      } = await this.request(_0x58c535);
      if (_0x3ff216?.["data"]?.["status"] == 1) {
        this.bk = 0;
        this.albumtime = _0x3ff216?.["data"]?.["st"];
        var _0x3fc522 = _0x3ff216?.["data"]?.["tntrd"]["split"]("|");
        _0x235dad == 1 && _0x1bfcec.log(this.x, "听书 ：当前听书时间", (_0x3fc522[0] / 60).toFixed(1) + "分 ");
        _0x235dad == 2 && _0x1bfcec.log(this.x, "听书时长：[上传成功] 当前听书时间: ", (_0x3fc522[0] / 60).toFixed(1) + "分", "下次可领取听书奖励的时间: ", (_0x3fc522[1] / 60).toFixed(1) + "分 ");
      } else {
        if (_0x3ff216?.["data"]?.["status"] == 2) {
          this.bk += 1;
          var _0x3fc522 = _0x3ff216?.["data"]?.["tntrd"]["split"]("|");
          _0x1bfcec.log(this.x, "听书 ：当前听书时间", (_0x3fc522[0] / 60).toFixed(1) + "分 请领取听书奖励");
          for (const _0x2bec1e of [155, 156, 157, 158, 159, 160, 167]) {
            await this.reward(_0x2bec1e, "task");
            await this.reward(_0x2bec1e, "video");
          }
        }
      }
    } catch (_0x479552) {}
  }
  async request(_0x4f0609) {
    var _0x35e01d = null,
      _0x52f775 = 0,
      _0xebac70 = _0x4f0609.fn || _0x4f0609.url;
    _0x4f0609.method = _0x4f0609?.["method"]?.["toUpperCase"]() || "GET";
    while (_0x52f775++ < _0x322125) {
      try {
        await this.got(_0x4f0609).then(_0x265a96 => {
          _0x35e01d = _0x265a96;
        }, _0xfcab73 => {
          _0x35e01d = _0xfcab73.response;
        });
        if ((_0x35e01d?.["statusCode"] / 100 | 0) <= 4) {
          break;
        }
      } catch (_0x1fe3be) {
        "TimeoutError" == _0x1fe3be.name ? this.qq("[" + _0xebac70 + "]请求超时，重试第" + _0x52f775 + "次") : this.qq("[" + _0xebac70 + "]请求错误(" + _0x1fe3be.message + ")，重试第" + _0x52f775 + "次");
      }
    }
    const _0x4f7bb5 = {
      statusCode: -1,
      headers: null,
      result: null
    };
    if (_0x35e01d == null) {
      return Promise.resolve(_0x4f7bb5);
    }
    let {
      statusCode: _0x3187d1,
      headers: _0x3ce984,
      body: _0x3af312
    } = _0x35e01d;
    if (_0x3af312) {
      try {
        _0x3af312 = JSON.parse(_0x3af312);
      } catch {}
    }
    const _0x2946d4 = {
      statusCode: _0x3187d1,
      headers: _0x3ce984,
      result: _0x3af312
    };
    return Promise.resolve(_0x2946d4);
  }
  sign(_0x862e9d) {
    _0x862e9d = _0x862e9d + "d3dGiJc651gSQ8w1";
    return _0x42d73f.getmd5(_0x862e9d);
  }
}
!(async () => {
  _0x42d73f.read_env(_0x11bd97);
  if (_0x4d7c2e) {
    for (const _0x282b17 of _0x42d73f.userList) await _0x282b17.Task();
  } else {
    await _0x42d73f.threadTask("Task", _0x2d4983);
  }
})().catch(_0x5be6fa => _0x42d73f.log(_0x5be6fa)).finally(() => _0x42d73f.exitNow());
function _0x32b871(_0x179988) {
  return new class {
    constructor(_0x4c824f) {
      this.name = _0x4c824f;
      this.startTime = Date.now();
      const _0x831803 = {
        time: true
      };
      this.log("开始运行", _0x831803);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 1;
      this.userList = [];
      this.userCount = 0;
    }
    h() {
      return "d3d";
    }
    g() {
      return "GiJ";
    }
    f() {
      return "c651";
    }
    q() {
      return "gSQ8w1";
    }
    log(_0x1b77af, _0x4ec558 = {}) {
      const _0x2f7a58 = {
        console: true
      };
      Object.assign(_0x2f7a58, _0x4ec558);
      if (_0x2f7a58.time) {
        let _0x1cc9ad = _0x2f7a58.fmt || "hh:mm:ss";
        _0x1b77af = "[" + this.time(_0x1cc9ad) + "] " + _0x1b77af;
      }
      if (_0x2f7a58.sp) {
        console.log("\n-------------- " + _0x1b77af + " --------------");
      }
      if (_0x2f7a58.notify) {
        this.notifyStr.push(_0x1b77af);
      }
      if (_0x2f7a58.console) {
        console.log(_0x1b77af);
      }
    }
    read_env(_0x21aeac) {
      let _0x3cc858 = _0xb68fdd,
        _0x15b668 = _0x5e7047.filter(_0x115bda => _0x3cc858.includes(_0x115bda)),
        _0xe303ef = _0x15b668.length > 0 ? _0x15b668[0] : _0x5e7047[0];
      for (let _0x1c85ad of _0x3cc858.split(_0xe303ef).filter(_0x135f1 => !!_0x135f1)) {
        this.userList.push(new _0x21aeac(_0x1c85ad));
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        this.log("\n未找到数据，请检查变量[" + _0x199773 + "]");
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    EncryptCrypto(_0x160aec, _0x3010a1, _0x4cb45e, _0x4b93fd, _0x154ea3, _0x3578e0) {
      return _0x248ec8[_0x160aec].encrypt(_0x248ec8.enc.Utf8.parse(_0x4b93fd), _0x248ec8.enc.Utf8.parse(_0x154ea3), {
        mode: _0x248ec8.mode[_0x3010a1],
        padding: _0x248ec8.pad[_0x4cb45e],
        iv: _0x248ec8.enc.Utf8.parse(_0x3578e0)
      }).ciphertext.toString(_0x248ec8.enc.Base64);
    }
    DecryptCrypto(_0xb2bb7a, _0x3cce63, _0x5dc549, _0x5d3ec3, _0x388f1f, _0x4f2c59) {
      return _0x248ec8[_0xb2bb7a].decrypt({
        ciphertext: _0x248ec8.enc.Base64.parse(_0x5d3ec3)
      }, _0x248ec8.enc.Utf8.parse(_0x388f1f), {
        mode: _0x248ec8.mode[_0x3cce63],
        padding: _0x248ec8.pad[_0x5dc549],
        iv: _0x248ec8.enc.Utf8.parse(_0x4f2c59)
      }).toString(_0x248ec8.enc.Utf8);
    }
    async threads(_0x209a34, _0x1f69e8, _0x33475e = {}) {
      while (_0x1f69e8.idx < _0x42d73f.userList.length) {
        let _0x3854a4 = _0x42d73f.userList[_0x1f69e8.idx++];
        await _0x3854a4[_0x209a34](_0x33475e);
      }
    }
    async threadTask(_0x1c8f7b, _0x42a02b) {
      let _0x4db305 = [];
      const _0x3f2f3f = {
        idx: 0
      };
      while (_0x42a02b--) {
        _0x4db305.push(this.threads(_0x1c8f7b, _0x3f2f3f));
      }
      await Promise.all(_0x4db305);
    }
    randomarr(_0x350ec9) {
      return [...Array(_0x350ec9)].map((_0x38d6a8, _0x5bfc3b) => _0x5bfc3b + 1);
    }
    time(_0x4a7693, _0x3c0f1a = null) {
      let _0x506b59 = _0x3c0f1a ? new Date(_0x3c0f1a) : new Date(),
        _0x3aa21c = {
          "M+": _0x506b59.getMonth() + 1,
          "d+": _0x506b59.getDate(),
          "h+": _0x506b59.getHours(),
          "m+": _0x506b59.getMinutes(),
          "s+": _0x506b59.getSeconds(),
          "q+": Math.floor((_0x506b59.getMonth() + 3) / 3),
          S: this.padStr(_0x506b59.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x4a7693) && (_0x4a7693 = _0x4a7693.replace(RegExp.$1, (_0x506b59.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x227e50 in _0x3aa21c) new RegExp("(" + _0x227e50 + ")").test(_0x4a7693) && (_0x4a7693 = _0x4a7693.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x3aa21c[_0x227e50] : ("00" + _0x3aa21c[_0x227e50]).substr(("" + _0x3aa21c[_0x227e50]).length)));
      return _0x4a7693;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0x219acc = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0x219acc.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x5ad4e3, _0x4a7fca, _0x4faf8d = {}) {
      let _0x3ac866 = _0x4faf8d.padding || "0",
        _0x18c6f0 = _0x4faf8d.mode || "l",
        _0x45985a = String(_0x5ad4e3),
        _0x128b92 = _0x4a7fca > _0x45985a.length ? _0x4a7fca - _0x45985a.length : 0,
        _0x9236f3 = "";
      for (let _0x1c47bd = 0; _0x1c47bd < _0x128b92; _0x1c47bd++) {
        _0x9236f3 += _0x3ac866;
      }
      if (_0x18c6f0 == "r") {
        _0x45985a = _0x45985a + _0x9236f3;
      } else {
        _0x45985a = _0x9236f3 + _0x45985a;
      }
      return _0x45985a;
    }
    json2str(_0x55f513, _0x317bd5, _0x1eb102 = false) {
      let _0x55b080 = [];
      for (let _0x2eec7e of Object.keys(_0x55f513).sort()) {
        let _0x23a729 = _0x55f513[_0x2eec7e];
        if (_0x23a729 && _0x1eb102) {
          _0x23a729 = encodeURIComponent(_0x23a729);
        }
        _0x55b080.push(_0x2eec7e + "=" + _0x23a729);
      }
      return _0x55b080.join(_0x317bd5);
    }
    getmd5(_0xaa5748, _0xa67d64 = 0) {
      return _0xa67d64 >= 1 ? _0x248ec8.MD5(_0xaa5748).toString().toUpperCase() : _0x248ec8.MD5(_0xaa5748).toString();
    }
    enbase64(_0x17a1bb) {
      var _0x14257d = _0x248ec8.enc.Utf8.parse(_0x17a1bb),
        _0x49fd00 = _0x248ec8.enc.Base64.stringify(_0x14257d);
      return _0x49fd00;
    }
    debase64(_0x4d74f6) {
      var _0x357128 = _0x248ec8.enc.Base64.parse(_0x4d74f6),
        _0x59ae9b = _0x357128.toString(_0x248ec8.enc.Utf8);
      return _0x59ae9b;
    }
    str2json(_0x5ca9bf, _0x52df7a = false) {
      let _0x340b61 = {};
      for (let _0x5069ba of _0x5ca9bf.split("&")) {
        if (!_0x5069ba) {
          continue;
        }
        let _0x717912 = _0x5069ba.indexOf("=");
        if (_0x717912 == -1) {
          continue;
        }
        let _0x1572c1 = _0x5069ba.substr(0, _0x717912),
          _0x5f01f4 = _0x5069ba.substr(_0x717912 + 1);
        if (_0x52df7a) {
          _0x5f01f4 = decodeURIComponent(_0x5f01f4);
        }
        _0x340b61[_0x1572c1] = _0x5f01f4;
      }
      return _0x340b61;
    }
    randomPattern(_0x13cd71, _0x206fb6 = "abcdef0123456789") {
      let _0x50f140 = "";
      for (let _0x234d94 of _0x13cd71) {
        if (_0x234d94 == "x") {
          _0x50f140 += _0x206fb6.charAt(Math.floor(Math.random() * _0x206fb6.length));
        } else {
          if (_0x234d94 == "X") {
            _0x50f140 += _0x206fb6.charAt(Math.floor(Math.random() * _0x206fb6.length)).toUpperCase();
          } else {
            _0x50f140 += _0x234d94;
          }
        }
      }
      return _0x50f140;
    }
    randomString(_0x299ffc, _0x381b63 = "abcdefghijk0123456789") {
      let _0x294c79 = "";
      for (let _0x33e80e = 0; _0x33e80e < _0x299ffc; _0x33e80e++) {
        _0x294c79 += _0x381b63.charAt(Math.floor(Math.random() * _0x381b63.length));
      }
      return _0x294c79;
    }
    ts(_0x4a2beb) {
      if (_0x4a2beb == 10) {
        let _0xdf4067 = Math.round(new Date().getTime() / 1000).toString();
        return _0xdf4067;
      } else {
        let _0x5cd72a = new Date().getTime();
        return _0x5cd72a;
      }
    }
    randomNum(_0x44d36b) {
      return _0x42d73f.randomString(_0x44d36b, "1234567890");
    }
    randomList(_0x17ca85) {
      let _0x3a0200 = Math.floor(Math.random() * _0x17ca85.length);
      return _0x17ca85[_0x3a0200];
    }
    wait(_0x44e2db) {
      return new Promise(_0x2cef33 => setTimeout(_0x2cef33, _0x44e2db * 1000));
    }
    async exitNow() {
      this.log("");
      const _0x3e194e = {
        time: true
      };
      this.log("运行结束，共运行了" + (Date.now() - this.startTime) / 1000 + "秒", _0x3e194e);
      process.exit(0);
    }
  }(_0x179988);
}