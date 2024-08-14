//Wed Aug 14 2024 10:42:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x59a330 = new _0xc5c85b("七猫免费小说");
let _0x3b75f9 = ["@", "\n"],
  _0x2d4e87 = "qmxsCookie",
  _0x3d031c = (_0x59a330.isNode() ? process.env[_0x2d4e87] : _0x59a330.getdata(_0x2d4e87)) || "",
  _0x5ad10f = [],
  _0x26741a = 0,
  _0x3d531e = 0;
class _0x1419e0 {
  constructor(_0x5045b9) {
    this.index = ++_0x26741a;
    this.idx = "账号 [" + this.index + "]";
    this.x = _0x5045b9.split("#");
    this.a = this.x[0];
    this.w = this.x[1];
  }
  async taskApi(_0xa878b5 = {}, _0x406af7) {
    let _0x504a62 = {};
    try {
      let _0x3f5dc8 = _0xa878b5.url;
      if (_0xa878b5.queryParam) {
        _0x3f5dc8 += "?" + _0x59a330.json2str(_0xa878b5.queryParam, "&", true);
      }
      const _0x119fd1 = {
        url: _0x3f5dc8,
        headers: _0x406af7,
        timeout: 5000
      };
      if (_0xa878b5.body) {
        _0x119fd1.headers["Content-Type"] = _0xa878b5["Content-Type"] || "application/x-www-form-urlencoded";
        if (typeof _0xa878b5.body === "object") {
          if (_0x119fd1.headers["Content-Type"].includes("json")) {
            _0x119fd1.body = JSON.stringify(_0xa878b5.body);
          } else {
            for (let _0x28c20d in _0xa878b5.body) {
              typeof _0xa878b5.body[_0x28c20d] === "object" && (_0xa878b5.body[_0x28c20d] = JSON.stringify(_0xa878b5.body[_0x28c20d]));
            }
            _0x119fd1.body = _0x59a330.json2str(_0xa878b5.body, "&");
          }
        } else {
          _0x119fd1.body = _0xa878b5.body;
        }
      }
      if (_0xa878b5.urlObjectParam) {
        Object.assign(_0x119fd1, _0xa878b5.urlObjectParam);
      }
      if (_0xa878b5.headerParam) {
        Object.assign(_0x119fd1.headers, _0xa878b5.headerParam);
      }
      _0x504a62 = Object.assign({}, await _0x1dc0d6(_0xa878b5.method, _0x119fd1));
      if (_0x504a62.err) {
        _0x504a62.statusCode = _0x504a62?.["err"]?.["response"]?.["statusCode"];
      } else {
        _0x504a62.statusCode = _0x504a62?.["resp"]?.["statusCode"];
        if (_0x504a62?.["resp"]?.["body"]) {
          if (typeof _0x504a62.resp.body === "object") {
            _0x504a62.result = _0x504a62.resp.body;
          } else {
            try {
              _0x504a62.result = JSON.parse(_0x504a62.resp.body);
            } catch (_0x5707a3) {
              _0x504a62.result = _0x504a62.resp.body;
            }
          }
        }
      }
    } catch (_0x114340) {
      console.log(_0x114340);
    } finally {
      return Promise.resolve(_0x504a62);
    }
  }
  async userx() {
    let _0x16e9e4 = {};
    try {
      let _0x45feaa = [...new Array(130).keys()];
      await this.abc();
      for (let _0x1f7d0e of _0x45feaa) {
        this.id = _0x1f7d0e;
        this.fn = "循环任务-1";
        await this.goldvideo();
        await this.user();
      }
      for (let _0x419bf5 of _0x45feaa) {
        this.id = _0x419bf5;
        this.fn = "循环任务-2";
        await this.reward();
        await this.finish();
        await this.goldvideo();
        await this.readvideo();
      }
      let _0x2d910d = [...new Array(40).keys()];
      for (let _0xe26704 of _0x2d910d) {
        this.fn = "刷金币视频";
        await this.userw();
        if (this.fx == 1) {
          break;
        }
      }
      await this.draw();
      await this.sign();
    } catch (_0x29d1af) {
      console.log(_0x29d1af);
    } finally {
      return Promise.resolve(_0x16e9e4);
    }
  }
  async user() {
    let _0x5f29ed = {};
    try {
      const _0x1bdaf2 = {
        cookie: this.a
      };
      let _0x2b3a30 = "",
        _0x2ad2bc = Date.now();
      const _0x9f91b6 = {
        fn: this.fn + ":",
        method: "get",
        url: "https://xiaoshuo.wtzw.com/api/v1/task/get-reward?task_id=" + this.id + "&apiVersion=20190309143259-1.9&t=" + _0x2ad2bc,
        body: _0x2b3a30
      };
      _0x5f29ed = Object.assign({}, await this.taskApi(_0x9f91b6, _0x1bdaf2));
      if (200 == _0x5f29ed?.["statusCode"]) {
        let _0x22d9d2 = _0x5f29ed?.["result"];
        if (_0x22d9d2.errors) {
          console.log(this.idx + " " + _0x9f91b6.fn + " " + _0x22d9d2.errors.title + "\n");
        }
        if (!_0x22d9d2.errors) {
          console.log(this.idx + " " + _0x9f91b6.fn + " " + _0x22d9d2.data.reward_cash + "\n");
        }
        await this.video();
      }
    } catch (_0x243492) {
      console.log(_0x243492);
    } finally {
      return Promise.resolve(_0x5f29ed);
    }
  }
  async userw() {
    let _0x5357f2 = {};
    try {
      let _0x2e6031 = "position_id=inchapter_top&type=6&sign=1",
        _0x3f8436 = _0x2e6031.length,
        _0x1fe023 = {
          AUTHORIZATION: this.w,
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": _0x3f8436,
          Host: "api-ks.wtzw.com"
        };
      const _0x3aaa44 = {
        fn: this.fn + ":",
        method: "post",
        url: "https://api-ks.wtzw.com/api/v1/coin/add",
        body: _0x2e6031
      };
      _0x5357f2 = Object.assign({}, await this.taskApi(_0x3aaa44, _0x1fe023));
      if (200 == _0x5357f2?.["statusCode"]) {
        let _0x52d919 = _0x5357f2?.["result"];
        if (_0x52d919.errors) {
          console.log(this.idx + " " + _0x3aaa44.fn + " " + _0x52d919.errors.title + "\n");
          this.fx = 1;
        }
        if (!_0x52d919.errors) {
          console.log(this.idx + " " + _0x3aaa44.fn + " " + _0x52d919.data.coin + "\n");
        }
      }
    } catch (_0x102c83) {
      console.log(_0x102c83);
    } finally {
      return Promise.resolve(_0x5357f2);
    }
  }
  async readvideo() {
    let _0x3c2502 = {};
    try {
      const _0x5b3ac5 = {
        cookie: this.a
      };
      let _0x4a8ab5 = "",
        _0x59f6b0 = Date.now();
      const _0x36c85d = {
        fn: "阅读奖励:",
        method: "get",
        url: "https://xiaoshuo.wtzw.com/api/v1/read-task/video?task_id=" + this.id + "&apiVersion=20190309143259-1.9&t=" + _0x59f6b0,
        body: _0x4a8ab5
      };
      _0x3c2502 = Object.assign({}, await this.taskApi(_0x36c85d, _0x5b3ac5));
      if (200 == _0x3c2502?.["statusCode"]) {
        let _0x4f6878 = _0x3c2502?.["result"];
        if (!_0x4f6878.errors) {
          console.log(this.idx + " " + _0x36c85d.fn + " " + _0x4f6878.data.result + "\n");
        }
      }
    } catch (_0x213e9a) {
      console.log(_0x213e9a);
    } finally {
      return Promise.resolve(_0x3c2502);
    }
  }
  async goldvideo() {
    let _0x5651e6 = {};
    try {
      const _0x3ddfd2 = {
        cookie: this.a
      };
      let _0x596e87 = "",
        _0x39b2b8 = Date.now();
      const _0x443f0b = {
        fn: "阅读奖励:",
        method: "get",
        url: "https://api-ks.wtzw.com/api/v1/get-gold-video?type=1&apiVersion=20190309143259-1.9&t=" + _0x39b2b8,
        body: _0x596e87
      };
      _0x5651e6 = Object.assign({}, await this.taskApi(_0x443f0b, _0x3ddfd2));
    } catch (_0x463ba3) {
      console.log(_0x463ba3);
    } finally {
      return Promise.resolve(_0x5651e6);
    }
  }
  async finish() {
    let _0x141b4a = {};
    try {
      const _0x4568e3 = {
        cookie: this.a
      };
      let _0x11559c = "",
        _0x489c73 = Date.now();
      const _0x27457a = {
        fn: this.fn + ":",
        method: "get",
        url: "https://xiaoshuo.wtzw.com/api/v1/task/finish-task?task_id=" + this.id + "&apiVersion=20190309143259-1.9&t=" + _0x489c73,
        body: _0x11559c
      };
      _0x141b4a = Object.assign({}, await this.taskApi(_0x27457a, _0x4568e3));
      if (200 == _0x141b4a?.["statusCode"]) {
        await this.reward();
      }
    } catch (_0x5e8a6b) {
      console.log(_0x5e8a6b);
    } finally {
      return Promise.resolve(_0x141b4a);
    }
  }
  async reward() {
    let _0x32f2b2 = {};
    try {
      const _0x3e04c6 = {
        cookie: this.a
      };
      let _0x3b99ee = "",
        _0x5bd2de = Date.now();
      const _0x35fb99 = {
        fn: "领取 " + this.fn + " 奖励:",
        method: "get",
        url: "https://xiaoshuo.wtzw.com/api/v1/task/get-reward?task_id=" + this.id + "&apiVersion=20190309143259-1.9&t=" + _0x5bd2de,
        body: _0x3b99ee
      };
      _0x32f2b2 = Object.assign({}, await this.taskApi(_0x35fb99, _0x3e04c6));
      if (200 == _0x32f2b2?.["statusCode"]) {
        let _0x1b6258 = _0x32f2b2?.["result"];
        if (_0x1b6258.errors) {
          console.log(this.idx + " " + _0x35fb99.fn + " " + _0x1b6258.errors.title + "\n");
        }
        if (!_0x1b6258.errors) {
          console.log(this.idx + " " + _0x35fb99.fn + " " + _0x1b6258.data.reward_cash + "\n");
        }
      }
    } catch (_0x559ffd) {
      console.log(_0x559ffd);
    } finally {
      return Promise.resolve(_0x32f2b2);
    }
  }
  async video() {
    let _0x371133 = {};
    try {
      const _0x46dbe8 = {
        cookie: this.a
      };
      let _0x48e0f5 = "",
        _0x443762 = Date.now();
      const _0x42d379 = {
        fn: this.fn + " 广告视频:",
        method: "get",
        url: "https://xiaoshuo.wtzw.com/api/v1/task/video?task_id=" + this.id + "&type_prefix=task_video&apiVersion=20190309143259-1.9&t=" + _0x443762,
        body: _0x48e0f5
      };
      _0x371133 = Object.assign({}, await this.taskApi(_0x42d379, _0x46dbe8));
      if (200 == _0x371133?.["statusCode"]) {
        let _0x1f9d5d = _0x371133?.["result"];
        if (_0x1f9d5d.errors) {
          console.log(this.idx + " " + _0x42d379.fn + " " + _0x1f9d5d.errors.title + "\n");
        }
        if (!_0x1f9d5d.errors) {
          console.log(this.idx + " " + _0x42d379.fn + " " + _0x1f9d5d.data.reward_cash + "\n");
        }
      }
    } catch (_0x1c1dc6) {
      console.log(_0x1c1dc6);
    } finally {
      return Promise.resolve(_0x371133);
    }
  }
  async abc() {
    let _0x30458d = {};
    try {
      const _0x4ffdf8 = {
        cookie: this.a
      };
      let _0x24bced = "",
        _0x4bc8d9 = Date.now();
      const _0x184b76 = {
        fn: "查余额:",
        method: "get",
        url: "https://xiaoshuo.wtzw.com/api/v2/task/get-task-list?open_push=1&install_app_list=&source=1&apiVersion=20190309143259-1.9&t=" + _0x4bc8d9,
        body: _0x24bced
      };
      _0x30458d = Object.assign({}, await this.taskApi(_0x184b76, _0x4ffdf8));
      if (200 == _0x30458d?.["statusCode"] && _0x30458d.result) {
        let _0x28c76a = _0x30458d.result,
          _0x406ffc = _0x28c76a.data.coin_data;
        console.log("\n\n\n" + this.idx + " " + _0x184b76.fn + " 当前金币 " + _0x406ffc.coin + " 约 " + _0x406ffc.coin_to_cash + " 元\n");
      }
    } catch (_0x135c6e) {
      console.log(_0x135c6e);
    } finally {
      return Promise.resolve(_0x30458d);
    }
  }
  async draw() {
    let _0x30abe5 = {};
    try {
      const _0x3dec87 = {
        cookie: this.a
      };
      let _0x320f0b = "",
        _0x182b1f = Date.now();
      const _0x2173ae = {
        fn: "剩余抽奖次数:",
        method: "get",
        url: "https://xiaoshuo.wtzw.com/api/v2/lucky-draw/index?version=2021010401&apiVersion=20190309143259-1.9&t=" + _0x182b1f,
        body: _0x320f0b
      };
      _0x30abe5 = Object.assign({}, await this.taskApi(_0x2173ae, _0x3dec87));
      if (200 == _0x30abe5?.["statusCode"] && _0x30abe5.result) {
        let _0x201aac = _0x30abe5.result;
        if (_0x201aac.derrors) {
          console.log(this.idx + " " + _0x2173ae.fn + " " + _0x201aac.errors.details + "\n");
        }
        if (_0x201aac.data) {
          let _0x36496a = Number(_0x201aac.data.chances);
          console.log(this.idx + " " + _0x2173ae.fn + " " + _0x201aac.data.chances + " 次\n");
          if (_0x201aac.data.chances > 0) {
            let _0x36ba0c = [...new Array(_0x36496a).keys()];
            for (let _0x44c6f6 of _0x36ba0c) await this.extracting();
          }
        }
      }
    } catch (_0x371bc5) {
      console.log(_0x371bc5);
    } finally {
      return Promise.resolve(_0x30abe5);
    }
  }
  async sign() {
    let _0x173212 = {};
    try {
      const _0x34ad9e = {
        cookie: this.a
      };
      let _0x521105 = "";
      const _0x1b3fc5 = {
        fn: "签到:",
        method: "get",
        url: "https://xiaoshuo.wtzw.com/api/v1/sign-in/sign-in-banner?sign=33655f28ef18012076d91811923449d6",
        body: _0x521105
      };
      _0x173212 = Object.assign({}, await this.taskApi(_0x1b3fc5, _0x34ad9e));
      if (200 == _0x173212?.["statusCode"] && _0x173212.result) {
        let _0x3d6164 = _0x173212.result;
        if (_0x3d6164.derrors) {
          console.log(this.idx + " " + _0x1b3fc5.fn + " " + _0x3d6164.errors.details + "\n");
          this.fb = 1;
        }
        if (_0x3d6164.data) {
          console.log(this.idx + " " + _0x1b3fc5.fn + " 已连签 " + _0x3d6164.data.sign_title.title[1] + " 天\n");
        }
        await this.signx();
      }
    } catch (_0x45541f) {
      console.log(_0x45541f);
    } finally {
      return Promise.resolve(_0x173212);
    }
  }
  async signx() {
    let _0x326a28 = {};
    try {
      const _0x57675d = {
        cookie: this.a
      };
      let _0x34ee1c = "",
        _0x3e5bf2 = Date.now();
      const _0xf12604 = {
        fn: "签到视频:",
        method: "get",
        url: "https://xiaoshuo.wtzw.com/api/v1/sign-in/sign-in-video-coin?t=" + _0x3e5bf2,
        body: _0x34ee1c
      };
      _0x326a28 = Object.assign({}, await this.taskApi(_0xf12604, _0x57675d));
      if (200 == _0x326a28?.["statusCode"] && _0x326a28.result) {
        let _0x17000c = _0x326a28.result;
        if (_0x17000c.errors) {
          console.log(this.idx + " " + _0xf12604.fn + "  " + _0x17000c.errors.title + " ");
        }
        if (!_0x17000c.errors) {
          console.log(this.idx + " " + _0xf12604.fn + " 获得 " + _0x17000c.data.coin + " 金币");
        }
      }
    } catch (_0x4e85c6) {
      console.log(_0x4e85c6);
    } finally {
      return Promise.resolve(_0x326a28);
    }
  }
  async extracting() {
    let _0x136cbd = {};
    try {
      const _0x324085 = {
        cookie: this.a
      };
      let _0x2d7d7c = "",
        _0x35a40a = Date.now();
      const _0x377037 = {
        fn: "转盘抽奖:",
        method: "get",
        url: "https://xiaoshuo.wtzw.com/api/v2/lucky-draw/do-extracting?activity_id=0&version=2021010401&apiVersion=20190309143259-1.9&t=" + _0x35a40a,
        body: _0x2d7d7c
      };
      _0x136cbd = Object.assign({}, await this.taskApi(_0x377037, _0x324085));
      if (200 == _0x136cbd?.["statusCode"] && _0x136cbd.result) {
        let _0x4b6958 = _0x136cbd.result;
        if (_0x4b6958.data.prize_title) {
          console.log(this.idx + " " + _0x377037.fn + " 抽中 " + _0x4b6958.data.prize_title + " ");
        }
      }
    } catch (_0x3e0093) {
      console.log(_0x3e0093);
    } finally {
      return Promise.resolve(_0x136cbd);
    }
  }
  async userTask() {
    let _0x11b414 = {};
    try {
      await this.userx();
    } catch (_0x306d75) {
      console.log(_0x306d75);
    } finally {
      return Promise.resolve(_0x11b414);
    }
  }
}
!(async () => {
  if (!_0x53a762()) {
    return;
  }
  tall = [];
  for (let _0x323cbe of _0x5ad10f) {
    tall.push(_0x323cbe.userTask());
  }
  await Promise.all(tall);
})().catch(_0x1c417b => console.log(_0x1c417b)).finally(() => _0x59a330.done());
function _0x53a762() {
  if (_0x3d031c) {
    let _0x188191 = _0x3b75f9[0];
    for (let _0x2dc748 of _0x3b75f9) {
      if (_0x3d031c.indexOf(_0x2dc748) > -1) {
        _0x188191 = _0x2dc748;
        break;
      }
    }
    for (let _0x5e5d0b of _0x3d031c.split(_0x188191)) {
      if (_0x5e5d0b) {
        _0x5ad10f.push(new _0x1419e0(_0x5e5d0b));
      }
    }
    _0x3d531e = _0x5ad10f.length;
  } else {
    console.log("未找到CK: " + _0x2d4e87);
    return false;
  }
  console.log("共找到" + _0x3d531e + "个账号 ");
  return true;
}
async function _0x1dc0d6(_0x1b54d0, _0x1c3d5f) {
  return new Promise(_0x43bcb5 => {
    _0x59a330.send(_0x1b54d0, _0x1c3d5f, async (_0x13bae2, _0x370857, _0x3dc34b) => {
      const _0x550c15 = {
        err: _0x13bae2,
        req: _0x370857,
        resp: _0x3dc34b
      };
      _0x43bcb5(_0x550c15);
    });
  });
}
function _0x2d19bf() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x51534c) {
    var _0x4cfcbd,
      _0x5725fa,
      _0x5c51cf,
      _0x512eba,
      _0x7748b0,
      _0x460e5e,
      _0x50e9af,
      _0x23aa77 = "",
      _0x56f55e = 0;
    for (_0x51534c = _utf8_encode(_0x51534c); _0x56f55e < _0x51534c.length;) {
      _0x4cfcbd = _0x51534c.charCodeAt(_0x56f55e++);
      _0x5725fa = _0x51534c.charCodeAt(_0x56f55e++);
      _0x5c51cf = _0x51534c.charCodeAt(_0x56f55e++);
      _0x512eba = _0x4cfcbd >> 2;
      _0x7748b0 = (3 & _0x4cfcbd) << 4 | _0x5725fa >> 4;
      _0x460e5e = (15 & _0x5725fa) << 2 | _0x5c51cf >> 6;
      _0x50e9af = 63 & _0x5c51cf;
      isNaN(_0x5725fa) ? _0x460e5e = _0x50e9af = 64 : isNaN(_0x5c51cf) && (_0x50e9af = 64);
      _0x23aa77 = _0x23aa77 + _keyStr.charAt(_0x512eba) + _keyStr.charAt(_0x7748b0) + _keyStr.charAt(_0x460e5e) + _keyStr.charAt(_0x50e9af);
    }
    return _0x23aa77;
  };
  this.decode = function (_0x493fb3) {
    var _0x2df9c0,
      _0x380205,
      _0x36f7f2,
      _0x32d31a,
      _0x465eb6,
      _0x5f0a2b,
      _0x48a765,
      _0x10c09b = "",
      _0x44aab3 = 0;
    for (_0x493fb3 = _0x493fb3.replace(/[^A-Za-z0-9\+\/\=]/g, ""); _0x44aab3 < _0x493fb3.length;) {
      _0x32d31a = _keyStr.indexOf(_0x493fb3.charAt(_0x44aab3++));
      _0x465eb6 = _keyStr.indexOf(_0x493fb3.charAt(_0x44aab3++));
      _0x5f0a2b = _keyStr.indexOf(_0x493fb3.charAt(_0x44aab3++));
      _0x48a765 = _keyStr.indexOf(_0x493fb3.charAt(_0x44aab3++));
      _0x2df9c0 = _0x32d31a << 2 | _0x465eb6 >> 4;
      _0x380205 = (15 & _0x465eb6) << 4 | _0x5f0a2b >> 2;
      _0x36f7f2 = (3 & _0x5f0a2b) << 6 | _0x48a765;
      _0x10c09b += String.fromCharCode(_0x2df9c0);
      64 != _0x5f0a2b && (_0x10c09b += String.fromCharCode(_0x380205));
      64 != _0x48a765 && (_0x10c09b += String.fromCharCode(_0x36f7f2));
    }
    return _utf8_decode(_0x10c09b);
  };
  _utf8_encode = function (_0xddab04) {
    _0xddab04 = _0xddab04.replace(/\r\n/g, "\n");
    for (var _0x5a932c = "", _0x575243 = 0; _0x575243 < _0xddab04.length; _0x575243++) {
      var _0x4b5326 = _0xddab04.charCodeAt(_0x575243);
      _0x4b5326 < 128 ? _0x5a932c += String.fromCharCode(_0x4b5326) : _0x4b5326 > 127 && _0x4b5326 < 2048 ? (_0x5a932c += String.fromCharCode(_0x4b5326 >> 6 | 192), _0x5a932c += String.fromCharCode(63 & _0x4b5326 | 128)) : (_0x5a932c += String.fromCharCode(_0x4b5326 >> 12 | 224), _0x5a932c += String.fromCharCode(_0x4b5326 >> 6 & 63 | 128), _0x5a932c += String.fromCharCode(63 & _0x4b5326 | 128));
    }
    return _0x5a932c;
  };
  _utf8_decode = function (_0x5666d4) {
    for (c1 = c2 = 0, _0x344502 = "", _0x364c2a = 0, _0x13a4fd = c1 = c2 = 0, void 0; _0x364c2a < _0x5666d4.length;) {
      var _0x344502, _0x364c2a, _0x13a4fd;
      (_0x13a4fd = _0x5666d4.charCodeAt(_0x364c2a)) < 128 ? (_0x344502 += String.fromCharCode(_0x13a4fd), _0x364c2a++) : _0x13a4fd > 191 && _0x13a4fd < 224 ? (c2 = _0x5666d4.charCodeAt(_0x364c2a + 1), _0x344502 += String.fromCharCode((31 & _0x13a4fd) << 6 | 63 & c2), _0x364c2a += 2) : (c2 = _0x5666d4.charCodeAt(_0x364c2a + 1), c3 = _0x5666d4.charCodeAt(_0x364c2a + 2), _0x344502 += String.fromCharCode((15 & _0x13a4fd) << 12 | (63 & c2) << 6 | 63 & c3), _0x364c2a += 3);
    }
    return _0x344502;
  };
}
function _0x4fba9f(_0x591f35, _0x1d8967, _0x35f130, _0x545b62, _0x22504f, _0x2ecc6d) {
  return CryptoJS[_0x591f35].encrypt(CryptoJS.enc.Utf8.parse(_0x545b62), CryptoJS.enc.Utf8.parse(_0x22504f), {
    mode: CryptoJS.mode[_0x1d8967],
    padding: CryptoJS.pad[_0x35f130],
    iv: CryptoJS.enc.Utf8.parse(_0x2ecc6d)
  }).ciphertext.toString(CryptoJS.enc.Base64);
}
function _0x5cd60a(_0x19c093, _0x4cea09, _0x498f88, _0x290098, _0x29bdba, _0x4b0074) {
  return CryptoJS[_0x19c093].decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(_0x290098)
  }, CryptoJS.enc.Utf8.parse(_0x29bdba), {
    mode: CryptoJS.mode[_0x4cea09],
    padding: CryptoJS.pad[_0x498f88],
    iv: CryptoJS.enc.Utf8.parse(_0x4b0074)
  }).toString(CryptoJS.enc.Utf8);
}
function _0x344825(_0x4d81cc) {
  function _0xab9af9(_0x43bd05, _0x4b3aa5) {
    return _0x43bd05 << _0x4b3aa5 | _0x43bd05 >>> 32 - _0x4b3aa5;
  }
  function _0x498e73(_0xb84d3b, _0x9855f7) {
    var _0x55214d, _0x47e452, _0xfb1206, _0x411ecc, _0x1894d6;
    _0xfb1206 = 2147483648 & _0xb84d3b;
    _0x411ecc = 2147483648 & _0x9855f7;
    _0x55214d = 1073741824 & _0xb84d3b;
    _0x47e452 = 1073741824 & _0x9855f7;
    _0x1894d6 = (1073741823 & _0xb84d3b) + (1073741823 & _0x9855f7);
    return _0x55214d & _0x47e452 ? 2147483648 ^ _0x1894d6 ^ _0xfb1206 ^ _0x411ecc : _0x55214d | _0x47e452 ? 1073741824 & _0x1894d6 ? 3221225472 ^ _0x1894d6 ^ _0xfb1206 ^ _0x411ecc : 1073741824 ^ _0x1894d6 ^ _0xfb1206 ^ _0x411ecc : _0x1894d6 ^ _0xfb1206 ^ _0x411ecc;
  }
  function _0x5884ea(_0x4b983b, _0x4cb657, _0x6bb549) {
    return _0x4b983b & _0x4cb657 | ~_0x4b983b & _0x6bb549;
  }
  function _0xa9353c(_0x57380a, _0x208a81, _0x480108) {
    return _0x57380a & _0x480108 | _0x208a81 & ~_0x480108;
  }
  function _0x47eea6(_0x797a20, _0x17e311, _0x30c07f) {
    return _0x797a20 ^ _0x17e311 ^ _0x30c07f;
  }
  function _0x53c817(_0x24c8de, _0x10c96b, _0x17814c) {
    return _0x10c96b ^ (_0x24c8de | ~_0x17814c);
  }
  function _0x53e2fa(_0xce4db2, _0x1b40c8, _0x12ddec, _0x3651ac, _0x245586, _0x5f2286, _0x2991b5) {
    _0xce4db2 = _0x498e73(_0xce4db2, _0x498e73(_0x498e73(_0x5884ea(_0x1b40c8, _0x12ddec, _0x3651ac), _0x245586), _0x2991b5));
    return _0x498e73(_0xab9af9(_0xce4db2, _0x5f2286), _0x1b40c8);
  }
  function _0x572ece(_0x11c960, _0x2ccace, _0x232bd0, _0x2ab374, _0x673dbc, _0x229720, _0x30ca0b) {
    _0x11c960 = _0x498e73(_0x11c960, _0x498e73(_0x498e73(_0xa9353c(_0x2ccace, _0x232bd0, _0x2ab374), _0x673dbc), _0x30ca0b));
    return _0x498e73(_0xab9af9(_0x11c960, _0x229720), _0x2ccace);
  }
  function _0x4fc19e(_0x12ce75, _0xec31e4, _0x3d87f5, _0x53101c, _0x17b3ec, _0x256103, _0x1bd2fc) {
    _0x12ce75 = _0x498e73(_0x12ce75, _0x498e73(_0x498e73(_0x47eea6(_0xec31e4, _0x3d87f5, _0x53101c), _0x17b3ec), _0x1bd2fc));
    return _0x498e73(_0xab9af9(_0x12ce75, _0x256103), _0xec31e4);
  }
  function _0x21593e(_0x2f2852, _0x2e00c4, _0x5b14ae, _0xc1d39c, _0x9fe200, _0x27c8dc, _0x59f79b) {
    _0x2f2852 = _0x498e73(_0x2f2852, _0x498e73(_0x498e73(_0x53c817(_0x2e00c4, _0x5b14ae, _0xc1d39c), _0x9fe200), _0x59f79b));
    return _0x498e73(_0xab9af9(_0x2f2852, _0x27c8dc), _0x2e00c4);
  }
  function _0x228d7f(_0x2e74c6) {
    for (var _0x48a6ca, _0x10c829 = _0x2e74c6.length, _0x59a70c = _0x10c829 + 8, _0x2f6d6a = (_0x59a70c - _0x59a70c % 64) / 64, _0x5b40ae = 16 * (_0x2f6d6a + 1), _0x34586e = new Array(_0x5b40ae - 1), _0x155f63 = 0, _0x240544 = 0; _0x10c829 > _0x240544;) {
      _0x48a6ca = (_0x240544 - _0x240544 % 4) / 4;
      _0x155f63 = _0x240544 % 4 * 8;
      _0x34586e[_0x48a6ca] = _0x34586e[_0x48a6ca] | _0x2e74c6.charCodeAt(_0x240544) << _0x155f63;
      _0x240544++;
    }
    _0x48a6ca = (_0x240544 - _0x240544 % 4) / 4;
    _0x155f63 = _0x240544 % 4 * 8;
    _0x34586e[_0x48a6ca] = _0x34586e[_0x48a6ca] | 128 << _0x155f63;
    _0x34586e[_0x5b40ae - 2] = _0x10c829 << 3;
    _0x34586e[_0x5b40ae - 1] = _0x10c829 >>> 29;
    return _0x34586e;
  }
  function _0x3e140d(_0x1db9e7) {
    var _0x250aa8,
      _0x15454b,
      _0x4776be = "",
      _0x2f1cfc = "";
    for (_0x15454b = 0; 3 >= _0x15454b; _0x15454b++) {
      _0x250aa8 = _0x1db9e7 >>> 8 * _0x15454b & 255;
      _0x2f1cfc = "0" + _0x250aa8.toString(16);
      _0x4776be += _0x2f1cfc.substr(_0x2f1cfc.length - 2, 2);
    }
    return _0x4776be;
  }
  function _0xb7ed08(_0x50ee89) {
    _0x50ee89 = _0x50ee89.replace(/\r\n/g, "\n");
    for (var _0x4b2c95 = "", _0x2636d0 = 0; _0x2636d0 < _0x50ee89.length; _0x2636d0++) {
      var _0x22672b = _0x50ee89.charCodeAt(_0x2636d0);
      128 > _0x22672b ? _0x4b2c95 += String.fromCharCode(_0x22672b) : _0x22672b > 127 && 2048 > _0x22672b ? (_0x4b2c95 += String.fromCharCode(_0x22672b >> 6 | 192), _0x4b2c95 += String.fromCharCode(63 & _0x22672b | 128)) : (_0x4b2c95 += String.fromCharCode(_0x22672b >> 12 | 224), _0x4b2c95 += String.fromCharCode(_0x22672b >> 6 & 63 | 128), _0x4b2c95 += String.fromCharCode(63 & _0x22672b | 128));
    }
    return _0x4b2c95;
  }
  var _0x3ce59e,
    _0x1491ea,
    _0x138fb8,
    _0x4393ce,
    _0x3e1296,
    _0x30f259,
    _0x834713,
    _0x2274b3,
    _0x3faa43,
    _0x2d6cc2 = [],
    _0x222fb5 = 7,
    _0x5a5014 = 12,
    _0x56bd1a = 17,
    _0x2df229 = 22,
    _0x2fdbe1 = 5,
    _0xa35693 = 9,
    _0x1f412f = 14,
    _0x30e724 = 20,
    _0x161d3a = 4,
    _0x48aa71 = 11,
    _0x146189 = 16,
    _0xeab471 = 23,
    _0x3968c4 = 6,
    _0x275054 = 10,
    _0x35415e = 15,
    _0x3db99b = 21;
  for (_0x4d81cc = _0xb7ed08(_0x4d81cc), _0x2d6cc2 = _0x228d7f(_0x4d81cc), _0x30f259 = 1732584193, _0x834713 = 4023233417, _0x2274b3 = 2562383102, _0x3faa43 = 271733878, _0x3ce59e = 0; _0x3ce59e < _0x2d6cc2.length; _0x3ce59e += 16) {
    _0x1491ea = _0x30f259;
    _0x138fb8 = _0x834713;
    _0x4393ce = _0x2274b3;
    _0x3e1296 = _0x3faa43;
    _0x30f259 = _0x53e2fa(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 0], _0x222fb5, 3614090360);
    _0x3faa43 = _0x53e2fa(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 1], _0x5a5014, 3905402710);
    _0x2274b3 = _0x53e2fa(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 2], _0x56bd1a, 606105819);
    _0x834713 = _0x53e2fa(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 3], _0x2df229, 3250441966);
    _0x30f259 = _0x53e2fa(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 4], _0x222fb5, 4118548399);
    _0x3faa43 = _0x53e2fa(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 5], _0x5a5014, 1200080426);
    _0x2274b3 = _0x53e2fa(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 6], _0x56bd1a, 2821735955);
    _0x834713 = _0x53e2fa(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 7], _0x2df229, 4249261313);
    _0x30f259 = _0x53e2fa(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 8], _0x222fb5, 1770035416);
    _0x3faa43 = _0x53e2fa(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 9], _0x5a5014, 2336552879);
    _0x2274b3 = _0x53e2fa(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 10], _0x56bd1a, 4294925233);
    _0x834713 = _0x53e2fa(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 11], _0x2df229, 2304563134);
    _0x30f259 = _0x53e2fa(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 12], _0x222fb5, 1804603682);
    _0x3faa43 = _0x53e2fa(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 13], _0x5a5014, 4254626195);
    _0x2274b3 = _0x53e2fa(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 14], _0x56bd1a, 2792965006);
    _0x834713 = _0x53e2fa(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 15], _0x2df229, 1236535329);
    _0x30f259 = _0x572ece(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 1], _0x2fdbe1, 4129170786);
    _0x3faa43 = _0x572ece(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 6], _0xa35693, 3225465664);
    _0x2274b3 = _0x572ece(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 11], _0x1f412f, 643717713);
    _0x834713 = _0x572ece(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 0], _0x30e724, 3921069994);
    _0x30f259 = _0x572ece(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 5], _0x2fdbe1, 3593408605);
    _0x3faa43 = _0x572ece(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 10], _0xa35693, 38016083);
    _0x2274b3 = _0x572ece(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 15], _0x1f412f, 3634488961);
    _0x834713 = _0x572ece(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 4], _0x30e724, 3889429448);
    _0x30f259 = _0x572ece(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 9], _0x2fdbe1, 568446438);
    _0x3faa43 = _0x572ece(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 14], _0xa35693, 3275163606);
    _0x2274b3 = _0x572ece(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 3], _0x1f412f, 4107603335);
    _0x834713 = _0x572ece(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 8], _0x30e724, 1163531501);
    _0x30f259 = _0x572ece(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 13], _0x2fdbe1, 2850285829);
    _0x3faa43 = _0x572ece(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 2], _0xa35693, 4243563512);
    _0x2274b3 = _0x572ece(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 7], _0x1f412f, 1735328473);
    _0x834713 = _0x572ece(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 12], _0x30e724, 2368359562);
    _0x30f259 = _0x4fc19e(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 5], _0x161d3a, 4294588738);
    _0x3faa43 = _0x4fc19e(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 8], _0x48aa71, 2272392833);
    _0x2274b3 = _0x4fc19e(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 11], _0x146189, 1839030562);
    _0x834713 = _0x4fc19e(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 14], _0xeab471, 4259657740);
    _0x30f259 = _0x4fc19e(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 1], _0x161d3a, 2763975236);
    _0x3faa43 = _0x4fc19e(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 4], _0x48aa71, 1272893353);
    _0x2274b3 = _0x4fc19e(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 7], _0x146189, 4139469664);
    _0x834713 = _0x4fc19e(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 10], _0xeab471, 3200236656);
    _0x30f259 = _0x4fc19e(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 13], _0x161d3a, 681279174);
    _0x3faa43 = _0x4fc19e(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 0], _0x48aa71, 3936430074);
    _0x2274b3 = _0x4fc19e(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 3], _0x146189, 3572445317);
    _0x834713 = _0x4fc19e(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 6], _0xeab471, 76029189);
    _0x30f259 = _0x4fc19e(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 9], _0x161d3a, 3654602809);
    _0x3faa43 = _0x4fc19e(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 12], _0x48aa71, 3873151461);
    _0x2274b3 = _0x4fc19e(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 15], _0x146189, 530742520);
    _0x834713 = _0x4fc19e(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 2], _0xeab471, 3299628645);
    _0x30f259 = _0x21593e(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 0], _0x3968c4, 4096336452);
    _0x3faa43 = _0x21593e(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 7], _0x275054, 1126891415);
    _0x2274b3 = _0x21593e(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 14], _0x35415e, 2878612391);
    _0x834713 = _0x21593e(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 5], _0x3db99b, 4237533241);
    _0x30f259 = _0x21593e(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 12], _0x3968c4, 1700485571);
    _0x3faa43 = _0x21593e(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 3], _0x275054, 2399980690);
    _0x2274b3 = _0x21593e(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 10], _0x35415e, 4293915773);
    _0x834713 = _0x21593e(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 1], _0x3db99b, 2240044497);
    _0x30f259 = _0x21593e(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 8], _0x3968c4, 1873313359);
    _0x3faa43 = _0x21593e(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 15], _0x275054, 4264355552);
    _0x2274b3 = _0x21593e(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 6], _0x35415e, 2734768916);
    _0x834713 = _0x21593e(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 13], _0x3db99b, 1309151649);
    _0x30f259 = _0x21593e(_0x30f259, _0x834713, _0x2274b3, _0x3faa43, _0x2d6cc2[_0x3ce59e + 4], _0x3968c4, 4149444226);
    _0x3faa43 = _0x21593e(_0x3faa43, _0x30f259, _0x834713, _0x2274b3, _0x2d6cc2[_0x3ce59e + 11], _0x275054, 3174756917);
    _0x2274b3 = _0x21593e(_0x2274b3, _0x3faa43, _0x30f259, _0x834713, _0x2d6cc2[_0x3ce59e + 2], _0x35415e, 718787259);
    _0x834713 = _0x21593e(_0x834713, _0x2274b3, _0x3faa43, _0x30f259, _0x2d6cc2[_0x3ce59e + 9], _0x3db99b, 3951481745);
    _0x30f259 = _0x498e73(_0x30f259, _0x1491ea);
    _0x834713 = _0x498e73(_0x834713, _0x138fb8);
    _0x2274b3 = _0x498e73(_0x2274b3, _0x4393ce);
    _0x3faa43 = _0x498e73(_0x3faa43, _0x3e1296);
  }
  var _0x10e2d5 = _0x3e140d(_0x30f259) + _0x3e140d(_0x834713) + _0x3e140d(_0x2274b3) + _0x3e140d(_0x3faa43);
  return _0x10e2d5.toLowerCase();
}
function _0xc5c85b(_0x4abb44, _0x430c77) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x16b501, _0x86a23) {
      this.name = _0x16b501;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x86a23);
      console.log(this.name + " 开始运行：\n");
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
    getdata(_0x2f249c) {
      let _0x4cb9e3 = this.getval(_0x2f249c);
      if (/^@/.test(_0x2f249c)) {
        let [, _0x542389, _0x4aeb4b] = /^@(.*?)\.(.*?)$/.exec(_0x2f249c),
          _0x67de47 = _0x542389 ? this.getval(_0x542389) : "";
        if (_0x67de47) {
          try {
            let _0x424100 = JSON.parse(_0x67de47);
            _0x4cb9e3 = _0x424100 ? this.lodash_get(_0x424100, _0x4aeb4b, "") : _0x4cb9e3;
          } catch (_0x467658) {
            _0x4cb9e3 = "";
          }
        }
      }
      return _0x4cb9e3;
    }
    setdata(_0x5747cd, _0x93e567) {
      let _0x3f7908 = !1;
      if (/^@/.test(_0x93e567)) {
        let [, _0x6acdc9, _0x590341] = /^@(.*?)\.(.*?)$/.exec(_0x93e567),
          _0x242e19 = this.getval(_0x6acdc9);
        try {
          let _0x444e18 = JSON.parse(_0x6acdc9 ? "null" === _0x242e19 ? null : _0x242e19 || "{}" : "{}");
          this.lodash_set(_0x444e18, _0x590341, _0x5747cd);
          _0x3f7908 = this.setval(JSON.stringify(_0x444e18), _0x6acdc9);
        } catch (_0x144714) {
          let _0x30ea13 = {};
          this.lodash_set(_0x30ea13, _0x590341, _0x5747cd);
          _0x3f7908 = this.setval(JSON.stringify(_0x30ea13), _0x6acdc9);
        }
      } else {
        _0x3f7908 = this.setval(_0x5747cd, _0x93e567);
      }
      return _0x3f7908;
    }
    getval(_0x29eb9c) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x29eb9c) : this.isQuanX() ? $prefs.valueForKey(_0x29eb9c) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x29eb9c]) : this.data && this.data[_0x29eb9c] || null;
    }
    setval(_0x4e68b5, _0x5b2f10) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x4e68b5, _0x5b2f10) : this.isQuanX() ? $prefs.setValueForKey(_0x4e68b5, _0x5b2f10) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5b2f10] = _0x4e68b5, this.writedata(), !0) : this.data && this.data[_0x5b2f10] || null;
    }
    send(_0x406deb, _0x2a40d4, _0x40abd3 = () => {}) {
      if ("get" != _0x406deb && "post" != _0x406deb && "put" != _0x406deb && "delete" != _0x406deb) {
        console.log("无效的http方法：" + _0x406deb);
        return;
      }
      const _0x5e3497 = {
        hints: !1
      };
      if ("get" == _0x406deb && _0x2a40d4.headers ? (delete _0x2a40d4.headers["Content-Type"], delete _0x2a40d4.headers["Content-Length"]) : _0x2a40d4.body && _0x2a40d4.headers && !_0x2a40d4.headers["Content-Type"] && (_0x2a40d4.headers["Content-Type"] = "application/x-www-form-urlencoded"), this.isSurge() || this.isLoon()) {
        const _0x425230 = {
          "X-Surge-Skip-Scripting": !1
        };
        this.isSurge() && this.isNeedRewrite && (_0x2a40d4.headers = _0x2a40d4.headers || {}, Object.assign(_0x2a40d4.headers, _0x425230));
        const _0x2e7434 = {
          method: _0x406deb,
          url: _0x2a40d4.url,
          headers: _0x2a40d4.headers,
          timeout: _0x2a40d4.timeout,
          data: _0x2a40d4.body
        };
        "get" == _0x406deb && delete _0x2e7434.data;
        $axios(_0x2e7434).then(_0x38bed3 => {
          let {
            status: _0x4f7970,
            request: _0x56d19e,
            headers: _0x40ba51,
            data: _0x1416f5
          } = _0x38bed3;
          const _0x5c9c50 = {
            statusCode: _0x4f7970,
            headers: _0x40ba51,
            body: _0x1416f5
          };
          _0x40abd3(null, _0x56d19e, _0x5c9c50);
        }).catch(_0x3e92fe => console.log(_0x3e92fe));
      } else {
        if (this.isQuanX()) {
          _0x2a40d4.method = _0x406deb.toUpperCase();
          this.isNeedRewrite && (_0x2a40d4.opts = _0x2a40d4.opts || {}, Object.assign(_0x2a40d4.opts, _0x5e3497));
          $task.fetch(_0x2a40d4).then(_0x2e8fdc => {
            let {
              statusCode: _0x4fae36,
              request: _0x4989c1,
              headers: _0x6890a0,
              body: _0x278b6c
            } = _0x2e8fdc;
            const _0x22f7a1 = {
              statusCode: _0x4fae36,
              headers: _0x6890a0,
              body: _0x278b6c
            };
            _0x40abd3(null, _0x4989c1, _0x22f7a1);
          }, _0x5460c9 => _0x40abd3(_0x5460c9));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            let {
              url: _0x578be7,
              ..._0x43e623
            } = _0x2a40d4;
            const _0xec5a65 = {
              followRedirect: !1
            };
            this.instance = this.got.extend(_0xec5a65);
            this.instance[_0x406deb](_0x578be7, _0x43e623).then(_0x2e2fe6 => {
              let {
                statusCode: _0x26ce4f,
                request: _0x36899e,
                headers: _0x4fc84b,
                body: _0xe72703
              } = _0x2e2fe6;
              const _0x5b04cd = {
                statusCode: _0x26ce4f,
                headers: _0x4fc84b,
                body: _0xe72703
              };
              _0x40abd3(null, _0x36899e, _0x5b04cd);
            }, _0x4064f3 => {
              let {
                message: _0x31817d,
                request: _0x374682,
                response: _0x32af5e
              } = _0x4064f3;
              _0x40abd3(_0x31817d, _0x374682, _0x32af5e);
            });
          }
        }
      }
    }
    time(_0x3ebf82, _0x245314 = null) {
      let _0x2df5af = _0x245314 ? new Date(_0x245314) : new Date(),
        _0xc809a8 = {
          "M+": _0x2df5af.getMonth() + 1,
          "d+": _0x2df5af.getDate(),
          "h+": _0x2df5af.getHours(),
          "m+": _0x2df5af.getMinutes(),
          "s+": _0x2df5af.getSeconds(),
          "q+": Math.floor((_0x2df5af.getMonth() + 3) / 3),
          S: _0x2df5af.getMilliseconds()
        };
      for (let _0x363b43 in /(y+)/.test(_0x3ebf82) && (_0x3ebf82 = _0x3ebf82.replace(RegExp.$1, (_0x2df5af.getFullYear() + "").substr(4 - RegExp.$1.length))), _0xc809a8) RegExp("(" + _0x363b43 + ")").test(_0x3ebf82) && (_0x3ebf82 = _0x3ebf82.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xc809a8[_0x363b43] : ("00" + _0xc809a8[_0x363b43]).substr(("" + _0xc809a8[_0x363b43]).length)));
      return _0x3ebf82;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x2406b5 = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x59a330.isNode()) {
        var _0x89a9ca = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x89a9ca.sendNotify(this.name, _0x2406b5);
      } else {
        this.msg(_0x2406b5);
      }
    }
    logAndNotify(_0x43039a) {
      console.log(_0x43039a);
      this.notifyStr += _0x43039a;
      this.notifyStr += "\n";
    }
    logAndNotifyWithTime(_0x3f9c30) {
      let _0x3a2d0d = "[" + this.time("hh:mm:ss.S") + "]" + _0x3f9c30;
      console.log(_0x3a2d0d);
      this.notifyStr += _0x3a2d0d;
      this.notifyStr += "\n";
    }
    logWithTime(_0x255269) {
      console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x255269);
    }
    msg(_0x17c39a = t, _0x2edead = "", _0x536236 = "", _0x28b706) {
      let _0x29a0c0 = _0x2c7b94 => {
        if (!_0x2c7b94) {
          return _0x2c7b94;
        }
        if ("string" == typeof _0x2c7b94) {
          return this.isLoon() ? _0x2c7b94 : this.isQuanX() ? {
            "open-url": _0x2c7b94
          } : this.isSurge() ? {
            url: _0x2c7b94
          } : void 0;
        }
        if ("object" == typeof _0x2c7b94) {
          if (this.isLoon()) {
            const _0x348c03 = {
              openUrl: _0x2c7b94.openUrl || _0x2c7b94.url || _0x2c7b94["open-url"],
              mediaUrl: _0x2c7b94.mediaUrl || _0x2c7b94["media-url"]
            };
            return _0x348c03;
          }
          if (this.isQuanX()) {
            const _0xae3c12 = {
              "open-url": _0x2c7b94["open-url"] || _0x2c7b94.url || _0x2c7b94.openUrl,
              "media-url": _0x2c7b94["media-url"] || _0x2c7b94.mediaUrl
            };
            return _0xae3c12;
          }
          const _0x5c1830 = {
            url: _0x2c7b94.url || _0x2c7b94.openUrl || _0x2c7b94["open-url"]
          };
          if (this.isSurge()) {
            return _0x5c1830;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x17c39a, _0x2edead, _0x536236, _0x29a0c0(_0x28b706)) : this.isQuanX() && $notify(_0x17c39a, _0x2edead, _0x536236, _0x29a0c0(_0x28b706)));
      let _0x2ef1f9 = ["", "============== 系统通知 =============="];
      _0x2ef1f9.push(_0x17c39a);
      _0x2edead && _0x2ef1f9.push(_0x2edead);
      _0x536236 && _0x2ef1f9.push(_0x536236);
      console.log(_0x2ef1f9.join("\n"));
    }
    getMin(_0x33246f, _0x3cd659) {
      return _0x33246f < _0x3cd659 ? _0x33246f : _0x3cd659;
    }
    getMax(_0xb80970, _0x364435) {
      return _0xb80970 < _0x364435 ? _0x364435 : _0xb80970;
    }
    padStr(_0x4f5523, _0xe6e027, _0x5d9cb6 = "0") {
      let _0x352de2 = String(_0x4f5523),
        _0x2a68ee = _0xe6e027 > _0x352de2.length ? _0xe6e027 - _0x352de2.length : 0,
        _0x23345a = "";
      for (let _0x4c09a6 = 0; _0x4c09a6 < _0x2a68ee; _0x4c09a6++) {
        _0x23345a += _0x5d9cb6;
      }
      return _0x23345a + _0x352de2;
    }
    json2str(_0x5a046d, _0x52a9d5, _0x47f221 = !1) {
      let _0x1f3674 = [];
      for (let _0x47e178 of Object.keys(_0x5a046d).sort()) {
        let _0x44c95e = _0x5a046d[_0x47e178];
        _0x44c95e && _0x47f221 && (_0x44c95e = encodeURIComponent(_0x44c95e));
        _0x1f3674.push(_0x47e178 + "=" + _0x44c95e);
      }
      return _0x1f3674.join(_0x52a9d5);
    }
    str2json(_0x8bb9ac, _0x40a321 = !1) {
      let _0x59befd = {};
      for (let _0x3fd77e of _0x8bb9ac.split("&")) {
        if (!_0x3fd77e) {
          continue;
        }
        let _0xf0295a = _0x3fd77e.indexOf("=");
        if (-1 == _0xf0295a) {
          continue;
        }
        let _0x2e32e0 = _0x3fd77e.substr(0, _0xf0295a),
          _0x4d1cd0 = _0x3fd77e.substr(_0xf0295a + 1);
        _0x40a321 && (_0x4d1cd0 = decodeURIComponent(_0x4d1cd0));
        _0x59befd[_0x2e32e0] = _0x4d1cd0;
      }
      return _0x59befd;
    }
    randomPattern(_0x5ddf1c, _0x2393d1 = "abcdef0123456789") {
      let _0x4ddd98 = "";
      for (let _0x49d479 of _0x5ddf1c) "x" == _0x49d479 ? _0x4ddd98 += _0x2393d1.charAt(Math.floor(Math.random() * _0x2393d1.length)) : "X" == _0x49d479 ? _0x4ddd98 += _0x2393d1.charAt(Math.floor(Math.random() * _0x2393d1.length)).toUpperCase() : _0x4ddd98 += _0x49d479;
      return _0x4ddd98;
    }
    randomString(_0x3908db, _0x4f4b29 = "abcdef0123456789") {
      let _0x17c2dd = "";
      for (let _0x56fe46 = 0; _0x56fe46 < _0x3908db; _0x56fe46++) {
        _0x17c2dd += _0x4f4b29.charAt(Math.floor(Math.random() * _0x4f4b29.length));
      }
      return _0x17c2dd;
    }
    randomList(_0x4afc4a) {
      return _0x4afc4a[Math.floor(Math.random() * _0x4afc4a.length)];
    }
    wait(_0x2d79ec) {
      return new Promise(_0x4aa77f => setTimeout(_0x4aa77f, _0x2d79ec));
    }
    done(_0x48a78a = {}) {
      let _0x54b8ce = new Date().getTime(),
        _0x299ca5 = (_0x54b8ce - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x299ca5 + " 秒！");
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x48a78a);
    }
  }(_0x4abb44, _0x430c77);
}