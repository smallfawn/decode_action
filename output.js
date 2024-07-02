//Tue Jul 02 2024 00:53:17 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x22822c = _0x2fbb6b("霸王茶姬"),
  _0x30bd4a = require("got"),
  _0x411cd3 = "bwcj",
  _0x4e95c6 = /[\n\&\@]/,
  _0x25b427 = [_0x411cd3 + "Cookie"],
  _0x182083 = 20000,
  _0xe9ef74 = 3;
const _0x34947f = 1.02,
  _0x5edf7d = "bwcj",
  _0x3a487f = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x51003c = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x5edf7d + ".json",
  _0x36a3ce = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.40(0x18002831) NetType/WIFI Language/zh_CN",
  _0x1adc03 = "https://servicewechat.com/wxafec6f8422cb357b/87/page-frame.html",
  _0x50be96 = "wxafec6f8422cb357b";
const _0x1f020e = 5;
class _0x4c79d9 {
  constructor() {
    this.index = _0x22822c.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x3ecc50 = {
      limit: 0
    };
    const _0xf735c8 = {
      Connection: "keep-alive"
    };
    const _0x589425 = {
      retry: _0x3ecc50,
      timeout: _0x182083,
      followRedirect: false,
      headers: _0xf735c8
    };
    this.got = _0x30bd4a.extend(_0x589425);
  }
  log(_0x2f2662, _0x23fc12 = {}) {
    var _0x497695 = "",
      _0x515a10 = _0x22822c.userCount.toString().length;
    if (this.index) {
      _0x497695 += "账号[" + _0x22822c.padStr(this.index, _0x515a10) + "]";
    }
    if (this.name) {
      _0x497695 += "[" + this.name + "]";
    }
    _0x22822c.log(_0x497695 + _0x2f2662, _0x23fc12);
  }
  async request(_0x29bbf7) {
    const _0x3185c6 = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"],
      _0x14a0bb = ["TimeoutError"];
    var _0x3eaf2f = null,
      _0xdb9290 = 0,
      _0x435b02 = _0x29bbf7.fn || _0x29bbf7.url;
    _0x29bbf7.method = _0x29bbf7?.["method"]?.["toUpperCase"]() || "GET";
    let _0x3beb85;
    while (_0xdb9290 < _0xe9ef74) {
      try {
        _0xdb9290++;
        _0x3beb85 = null;
        let _0x1411c0 = null,
          _0x23ef27 = _0x29bbf7?.["timeout"] || this.got?.["defaults"]?.["options"]?.["timeout"]?.["request"] || _0x182083,
          _0x6ad6c = false;
        await new Promise(async _0x4b39db => {
          setTimeout(() => {
            _0x6ad6c = true;
            _0x4b39db();
          }, _0x23ef27);
          await this.got(_0x29bbf7).then(_0x4a8c0d => {
            _0x3eaf2f = _0x4a8c0d;
          }, _0x3fe4a0 => {
            _0x1411c0 = _0x3fe4a0;
            _0x3eaf2f = _0x3fe4a0.response;
            _0x3beb85 = _0x1411c0?.["code"];
          });
          _0x4b39db();
        });
        if (_0x6ad6c) {
          this.log("[" + _0x435b02 + "]请求超时(" + _0x23ef27 / 1000 + "秒)，重试第" + _0xdb9290 + "次");
        } else {
          if (_0x14a0bb.includes(_0x1411c0?.["name"])) {
            this.log("[" + _0x435b02 + "]请求超时(" + _0x1411c0.code + ")，重试第" + _0xdb9290 + "次");
          } else {
            if (_0x3185c6.includes(_0x1411c0?.["code"])) {
              this.log("[" + _0x435b02 + "]请求错误(" + _0x1411c0.code + ")，重试第" + _0xdb9290 + "次");
            } else {
              let _0x2a5240 = _0x3eaf2f?.["statusCode"] || 999,
                _0x1a9a62 = _0x2a5240 / 100 | 0;
              if (_0x1a9a62 > 3) {
                this.log("请求[" + _0x435b02 + "]返回[" + _0x2a5240 + "]");
              }
              if (_0x1a9a62 <= 4) {
                break;
              }
            }
          }
        }
      } catch (_0x92cb6) {
        _0x92cb6.name == "TimeoutError" ? this.log("[" + _0x435b02 + "]请求超时，重试第" + _0xdb9290 + "次") : this.log("[" + _0x435b02 + "]请求错误(" + _0x92cb6.message + ")，重试第" + _0xdb9290 + "次");
      }
    }
    if (_0x3eaf2f == null) {
      return Promise.resolve({
        statusCode: _0x3beb85 || -1,
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x416ffc,
      headers: _0x7a7bdd,
      body: _0x27bbf1
    } = _0x3eaf2f;
    if (_0x27bbf1) {
      try {
        _0x27bbf1 = JSON.parse(_0x27bbf1);
      } catch {}
    }
    const _0x76d57c = {
      statusCode: _0x416ffc,
      headers: _0x7a7bdd,
      result: _0x27bbf1
    };
    return Promise.resolve(_0x76d57c);
  }
}
let _0x133ad6 = new _0x4c79d9();
class _0x5026b8 extends _0x4c79d9 {
  constructor(_0x56e4f1) {
    super();
    this.token = _0x56e4f1;
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: {
        "User-Agent": _0x36a3ce,
        "work-wechat-userid": "",
        "multi-store-id": "",
        "gdt-vid": "",
        "qz-gtd": "",
        scene: "1006",
        "Qm-From": "wechat",
        "store-id": 49006,
        "Qm-User-Token": this.token,
        channelCode: "",
        "Qm-From-Type": "catering",
        "promotion-code": "",
        "work-staff-name": "",
        "work-staff-id": "",
        Accept: "v=1.0",
        "Accept-Encoding": "gzip,compress,br,deflate",
        Referer: _0x1adc03
      }
    });
  }
  async personal_info(_0x438f45 = {}) {
    let _0x5be499 = false;
    try {
      const _0x5ad3a8 = {
        appid: _0x50be96
      };
      let _0x154db5 = {
          fn: "personal_info",
          method: "get",
          url: "https://webapi.qmai.cn/web/catering/crm/personal-info",
          searchParams: _0x5ad3a8
        },
        {
          result: _0x1f1cc3,
          statusCode: _0x52f924
        } = await this.request(_0x154db5),
        _0x41a1b1 = _0x22822c.get(_0x1f1cc3, "code", _0x52f924);
      if (_0x41a1b1 == 0) {
        _0x5be499 = this.valid = true;
        let {
          mobilePhone: _0x386fcf,
          name: _0x268ef0
        } = _0x1f1cc3?.["data"];
        this.name = _0x386fcf;
        this.userName = _0x268ef0;
      } else {
        let _0x1dd339 = _0x22822c.get(_0x1f1cc3, "message", "");
        this.log("登录失败: " + _0x1dd339);
      }
    } catch (_0x4a53e4) {
      console.log(_0x4a53e4);
    } finally {
      return _0x5be499;
    }
  }
  async sign_detail(_0x39dc9e = {}) {
    try {
      const _0x569f99 = {
        appid: _0x50be96
      };
      let _0x3ccf02 = {
          fn: "sign_detail",
          method: "post",
          url: "https://webapi.qmai.cn/web/catering/integral/sign/detail",
          json: _0x569f99
        },
        {
          result: _0x2e8c0f,
          statusCode: _0x194d7c
        } = await this.request(_0x3ccf02),
        _0x5c6915 = _0x22822c.get(_0x2e8c0f, "code", _0x194d7c);
      if (_0x5c6915 == 0) {
        let {
            continuityTotal: _0x52cb15,
            signInDateList: _0x17a70b,
            activityId: _0x5b22c2
          } = _0x2e8c0f?.["data"],
          _0x68b11b = false,
          _0xf79a6 = _0x22822c.time("yyyy-MM-dd");
        if (_0x17a70b?.["includes"](_0xf79a6)) {
          _0x68b11b = true;
        }
        this.log("旧版签到今天" + (_0x68b11b ? "已" : "未") + "签到, 已连续签到" + _0x52cb15 + "天");
        !_0x68b11b && (await this.signIn(_0x5b22c2));
      } else {
        let _0x127869 = _0x22822c.get(_0x2e8c0f, "message", "");
        this.log("查询旧版签到失败[" + _0x5c6915 + "]: " + _0x127869);
      }
    } catch (_0x284424) {
      console.log(_0x284424);
    }
  }
  async signIn(_0xb0ac9b, _0x507929 = {}) {
    try {
      const _0x3461bb = {
        activityId: _0xb0ac9b,
        mobilePhone: this.name,
        userName: this.userName,
        appid: _0x50be96
      };
      let _0xc3a54 = {
          fn: "signIn",
          method: "post",
          url: "https://webapi.qmai.cn/web/catering/integral/sign/signIn",
          json: _0x3461bb
        },
        {
          result: _0x5e6e48,
          statusCode: _0x434d89
        } = await this.request(_0xc3a54),
        _0x2d0049 = _0x22822c.get(_0x5e6e48, "code", _0x434d89);
      if (_0x2d0049 == 0) {
        const _0x1dd583 = {
          notify: true
        };
        this.log("旧版签到成功", _0x1dd583);
      } else {
        let _0x221f1f = _0x22822c.get(_0x5e6e48, "message", "");
        this.log("旧版签到失败[" + _0x2d0049 + "]: " + _0x221f1f);
      }
    } catch (_0x53fdc8) {
      console.log(_0x53fdc8);
    }
  }
  async userSignStatistics(_0x3d9716 = {}) {
    try {
      const _0x303bc9 = {
        activityId: "947079313798000641",
        appid: _0x50be96
      };
      let _0xad3aed = {
          fn: "userSignStatistics",
          method: "post",
          url: "https://webapi.qmai.cn/web/cmk-center/sign/userSignStatistics",
          json: _0x303bc9
        },
        {
          result: _0x4efe3f,
          statusCode: _0x2e7b7f
        } = await this.request(_0xad3aed),
        _0x2d6713 = _0x22822c.get(_0x4efe3f, "code", _0x2e7b7f);
      if (_0x2d6713 == 0) {
        let {
            signDays: _0x5df845,
            signStatus: _0x272ec4
          } = _0x4efe3f?.["data"],
          _0x39d29b = _0x272ec4 == 1;
        this.log("新版签到今天" + (_0x39d29b ? "已" : "未") + "签到, 已连续签到" + _0x5df845 + "天");
        !_0x39d29b && (await this.takePartInSign());
      } else {
        let _0x207955 = _0x22822c.get(_0x4efe3f, "message", "");
        this.log("查询新版签到失败[" + _0x2d6713 + "]: " + _0x207955);
      }
    } catch (_0x33db04) {
      console.log(_0x33db04);
    }
  }
  async takePartInSign(_0x358d5a = {}) {
    try {
      const _0xce18e9 = {
        activityId: "947079313798000641",
        appid: _0x50be96
      };
      let _0x269509 = {
          fn: "takePartInSign",
          method: "post",
          url: "https://webapi.qmai.cn/web/cmk-center/sign/takePartInSign",
          json: _0xce18e9
        },
        {
          result: _0x448442,
          statusCode: _0x4589a3
        } = await this.request(_0x269509),
        _0x44f380 = _0x22822c.get(_0x448442, "code", _0x4589a3);
      if (_0x44f380 == 0) {
        const _0xd9911 = {
          notify: true
        };
        this.log("新版签到成功", _0xd9911);
      } else {
        let _0x4d7b0b = _0x22822c.get(_0x448442, "message", "");
        this.log("新版签到失败[" + _0x44f380 + "]: " + _0x4d7b0b);
      }
    } catch (_0x259dbf) {
      console.log(_0x259dbf);
    }
  }
  async points_info(_0x274246 = {}) {
    try {
      const _0x13d27f = {
        appid: _0x50be96
      };
      let _0x482fe9 = {
          fn: "points_info",
          method: "post",
          url: "https://webapi.qmai.cn/web/catering/crm/points-info",
          json: _0x13d27f
        },
        {
          result: _0x1bc409,
          statusCode: _0x19bc9b
        } = await this.request(_0x482fe9),
        _0x2d0281 = _0x22822c.get(_0x1bc409, "code", _0x19bc9b);
      if (_0x2d0281 == 0) {
        let {
          soonExpiredPoints: _0x101cf1,
          totalPoints: _0x2b4355,
          expiredTime: _0x24e9a8
        } = _0x1bc409?.["data"];
        const _0x6753bd = {
          notify: true
        };
        this.log("积分: " + _0x2b4355, _0x6753bd);
        if (_0x101cf1) {
          const _0x1ed32b = {
            notify: true
          };
          this.log("有" + _0x101cf1 + "积分将于[" + _0x24e9a8 + "]过期", _0x1ed32b);
        }
      } else {
        let _0x4b036b = _0x22822c.get(_0x1bc409, "message", "");
        this.log("查询积分失败[" + _0x2d0281 + "]: " + _0x4b036b);
      }
    } catch (_0x12d106) {
      console.log(_0x12d106);
    }
  }
  async userTask(_0x5a810e = {}) {
    if (!(await this.personal_info())) {
      return;
    }
    await this.sign_detail();
    await this.userSignStatistics();
    await this.points_info();
  }
}
!(async () => {
  if (!(await _0x1300b9())) {
    return;
  }
  _0x22822c.read_env(_0x5026b8);
  for (let _0x149376 of _0x22822c.userList) {
    await _0x149376.userTask();
  }
})().catch(_0x1beb77 => _0x22822c.log(_0x1beb77)).finally(() => _0x22822c.exitNow());
async function _0x1300b9(_0xf94bd9 = 0) {
  let _0x35435b = false;
  try {
    let _0x48f9ff = {
        fn: "auth",
        method: "get",
        url: _0x3a487f,
        timeout: 20000
      },
      {
        statusCode: _0x2d5c95,
        result: _0x487419
      } = await _0x133ad6.request(_0x48f9ff);
    if (_0x2d5c95 != 200) {
      _0xf94bd9++ < _0x1f020e && (_0x35435b = await _0x1300b9(_0xf94bd9));
      return _0x35435b;
    }
    if (_0x487419?.["code"] == 0) {
      _0x487419 = JSON.parse(_0x487419.data.file.data);
      if (_0x487419?.["commonNotify"] && _0x487419.commonNotify.length > 0) {
        const _0x404998 = {
          notify: true
        };
        _0x22822c.log(_0x487419.commonNotify.join("\n") + "\n", _0x404998);
      }
      _0x487419?.["commonMsg"] && _0x487419.commonMsg.length > 0 && _0x22822c.log(_0x487419.commonMsg.join("\n") + "\n");
      if (_0x487419[_0x5edf7d]) {
        let _0xb35a3b = _0x487419[_0x5edf7d];
        _0xb35a3b.status == 0 ? _0x34947f >= _0xb35a3b.version ? (_0x35435b = true, _0x22822c.log(_0xb35a3b.msg[_0xb35a3b.status]), _0x22822c.log(_0xb35a3b.updateMsg), _0x22822c.log("现在运行的脚本版本是：" + _0x34947f + "，最新脚本版本：" + _0xb35a3b.latestVersion)) : _0x22822c.log(_0xb35a3b.versionMsg) : _0x22822c.log(_0xb35a3b.msg[_0xb35a3b.status]);
      } else {
        _0x22822c.log(_0x487419.errorMsg);
      }
    } else {
      _0xf94bd9++ < _0x1f020e && (_0x35435b = await _0x1300b9(_0xf94bd9));
    }
  } catch (_0x52862c) {
    _0x22822c.log(_0x52862c);
  } finally {
    return _0x35435b;
  }
}
async function _0x449e65() {
  let _0x1d0e00 = false;
  try {
    let _0x3834b8 = {
        fn: "auth",
        method: "get",
        url: _0x51003c
      },
      {
        statusCode: _0x882c27,
        result: _0x14ba99
      } = await _0x133ad6.request(_0x3834b8);
    if (_0x882c27 != 200) {
      return Promise.resolve();
    }
    if (_0x14ba99?.["code"] == 0) {
      _0x14ba99 = JSON.parse(_0x14ba99.data.file.data);
      ownerId = _0x14ba99?.["ownerId"] || ownerId;
      share_app = _0x14ba99?.["share_app"] || share_app;
      for (let _0x4a96bf of _0x14ba99.chdTask.simple) {
        !task_chd_simple_list.filter(_0x27a0b9 => _0x27a0b9.missionDefId == _0x4a96bf.missionDefId && _0x27a0b9.missionCollectionId == _0x4a96bf.missionCollectionId).length && task_chd_simple_list.push(_0x4a96bf);
      }
      for (let _0x5faf19 of _0x14ba99.chdTask.pageview) {
        !task_chd_pageview_list.filter(_0x157c74 => _0x157c74.missionDefId == _0x5faf19.missionDefId && _0x157c74.missionCollectionId == _0x5faf19.missionCollectionId).length && task_chd_pageview_list.push(_0x5faf19);
      }
      for (let _0x51503c of _0x14ba99.tkjTask.simple) {
        !task_tkj_simple_list.filter(_0x1f5690 => _0x1f5690.missionDefId == _0x51503c.missionDefId && _0x1f5690.missionCollectionId == _0x51503c.missionCollectionId).length && task_tkj_simple_list.push(_0x51503c);
      }
      for (let _0x254ec3 of _0x14ba99.tkjTask.pageview) {
        !task_tkj_pageview_list.filter(_0x266446 => _0x266446.missionDefId == _0x254ec3.missionDefId && _0x266446.missionCollectionId == _0x254ec3.missionCollectionId).length && task_tkj_pageview_list.push(_0x254ec3);
      }
    }
  } catch (_0x53ddc3) {
    _0x22822c.log(_0x53ddc3);
  } finally {
    return Promise.resolve(_0x1d0e00);
  }
}
function _0x2fbb6b(_0x4e1f8a) {
  return new class {
    constructor(_0x2eac1a) {
      this.name = _0x2eac1a;
      this.startTime = Date.now();
      const _0x398b44 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x398b44);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
      this.default_timestamp_len = 13;
      this.default_wait_interval = 1000;
      this.default_wait_limit = 3600000;
      this.default_wait_ahead = 0;
    }
    log(_0x3ca0b2, _0xfc5570 = {}) {
      let _0x2f93a0 = {
        console: true
      };
      Object.assign(_0x2f93a0, _0xfc5570);
      if (_0x2f93a0.time) {
        let _0x56fe61 = _0x2f93a0.fmt || "hh:mm:ss";
        _0x3ca0b2 = "[" + this.time(_0x56fe61) + "]" + _0x3ca0b2;
      }
      if (_0x2f93a0.notify) {
        this.notifyStr.push(_0x3ca0b2);
      }
      if (_0x2f93a0.console) {
        console.log(_0x3ca0b2);
      }
    }
    get(_0x247ab9, _0x343341, _0x2cf26c = "") {
      let _0x110fb7 = _0x2cf26c;
      _0x247ab9?.["hasOwnProperty"](_0x343341) && (_0x110fb7 = _0x247ab9[_0x343341]);
      return _0x110fb7;
    }
    pop(_0x419087, _0x2f3be9, _0x118e39 = "") {
      let _0x933172 = _0x118e39;
      _0x419087?.["hasOwnProperty"](_0x2f3be9) && (_0x933172 = _0x419087[_0x2f3be9], delete _0x419087[_0x2f3be9]);
      return _0x933172;
    }
    copy(_0x44ee2b) {
      return Object.assign({}, _0x44ee2b);
    }
    read_env(_0x2516a9) {
      let _0x5ebee4 = _0x25b427.map(_0x13fd23 => process.env[_0x13fd23]);
      for (let _0x23d8ca of _0x5ebee4.filter(_0x601c1d => !!_0x601c1d)) {
        for (let _0x331480 of _0x23d8ca.split(_0x4e95c6).filter(_0x373928 => !!_0x373928)) {
          if (this.userList.includes(_0x331480)) {
            continue;
          }
          this.userList.push(new _0x2516a9(_0x331480));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x524bc1 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x25b427.map(_0x21fc63 => "[" + _0x21fc63 + "]").join("或"), _0x524bc1);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x29fb1d, _0x3b038d = null) {
      let _0x37a93e = _0x3b038d ? new Date(_0x3b038d) : new Date(),
        _0xc3fc1d = {
          "M+": _0x37a93e.getMonth() + 1,
          "d+": _0x37a93e.getDate(),
          "h+": _0x37a93e.getHours(),
          "m+": _0x37a93e.getMinutes(),
          "s+": _0x37a93e.getSeconds(),
          "q+": Math.floor((_0x37a93e.getMonth() + 3) / 3),
          S: this.padStr(_0x37a93e.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x29fb1d) && (_0x29fb1d = _0x29fb1d.replace(RegExp.$1, (_0x37a93e.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x541468 in _0xc3fc1d) new RegExp("(" + _0x541468 + ")").test(_0x29fb1d) && (_0x29fb1d = _0x29fb1d.replace(RegExp.$1, 1 == RegExp.$1.length ? _0xc3fc1d[_0x541468] : ("00" + _0xc3fc1d[_0x541468]).substr(("" + _0xc3fc1d[_0x541468]).length)));
      return _0x29fb1d;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      var _0xbdfca2 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0xbdfca2.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x17d5d5, _0x5483df, _0x1d0272 = {}) {
      let _0x3619a7 = _0x1d0272.padding || "0",
        _0x35edec = _0x1d0272.mode || "l",
        _0x254d6d = String(_0x17d5d5),
        _0x30f43e = _0x5483df > _0x254d6d.length ? _0x5483df - _0x254d6d.length : 0,
        _0x1c74db = "";
      for (let _0x2d84d5 = 0; _0x2d84d5 < _0x30f43e; _0x2d84d5++) {
        _0x1c74db += _0x3619a7;
      }
      _0x35edec == "r" ? _0x254d6d = _0x254d6d + _0x1c74db : _0x254d6d = _0x1c74db + _0x254d6d;
      return _0x254d6d;
    }
    json2str(_0x3a68d8, _0xfb3cc5, _0x3197e8 = false) {
      let _0x3a9d38 = [];
      for (let _0x3b0314 of Object.keys(_0x3a68d8).sort()) {
        let _0x4c0bc0 = _0x3a68d8[_0x3b0314];
        if (_0x4c0bc0 && _0x3197e8) {
          _0x4c0bc0 = encodeURIComponent(_0x4c0bc0);
        }
        _0x3a9d38.push(_0x3b0314 + "=" + _0x4c0bc0);
      }
      return _0x3a9d38.join(_0xfb3cc5);
    }
    str2json(_0x47cbd4, _0x194415 = false) {
      let _0x4f9f81 = {};
      for (let _0x49edb9 of _0x47cbd4.split("&")) {
        if (!_0x49edb9) {
          continue;
        }
        let _0x5575cf = _0x49edb9.indexOf("=");
        if (_0x5575cf == -1) {
          continue;
        }
        let _0x41ed72 = _0x49edb9.substr(0, _0x5575cf),
          _0x1397ef = _0x49edb9.substr(_0x5575cf + 1);
        if (_0x194415) {
          _0x1397ef = decodeURIComponent(_0x1397ef);
        }
        _0x4f9f81[_0x41ed72] = _0x1397ef;
      }
      return _0x4f9f81;
    }
    randomPattern(_0x4ea8e8, _0x25a6e7 = "abcdef0123456789") {
      let _0x58c519 = "";
      for (let _0x42927c of _0x4ea8e8) {
        if (_0x42927c == "x") {
          _0x58c519 += _0x25a6e7.charAt(Math.floor(Math.random() * _0x25a6e7.length));
        } else {
          _0x42927c == "X" ? _0x58c519 += _0x25a6e7.charAt(Math.floor(Math.random() * _0x25a6e7.length)).toUpperCase() : _0x58c519 += _0x42927c;
        }
      }
      return _0x58c519;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x2bcce5, _0x8cbdf3 = "abcdef0123456789") {
      let _0x59f9e2 = "";
      for (let _0x283ff0 = 0; _0x283ff0 < _0x2bcce5; _0x283ff0++) {
        _0x59f9e2 += _0x8cbdf3.charAt(Math.floor(Math.random() * _0x8cbdf3.length));
      }
      return _0x59f9e2;
    }
    randomList(_0x317d7f) {
      let _0x8c4c9f = Math.floor(Math.random() * _0x317d7f.length);
      return _0x317d7f[_0x8c4c9f];
    }
    wait(_0x252613) {
      return new Promise(_0xc1777c => setTimeout(_0xc1777c, _0x252613));
    }
    async exitNow() {
      await this.showmsg();
      let _0x24c7c6 = Date.now(),
        _0x3a2111 = (_0x24c7c6 - this.startTime) / 1000;
      this.log("");
      const _0x5d0876 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x3a2111 + "秒", _0x5d0876);
      process.exit(0);
    }
    normalize_time(_0xeed4ea, _0x3e3830 = {}) {
      let _0x35f396 = _0x3e3830.len || this.default_timestamp_len;
      _0xeed4ea = _0xeed4ea.toString();
      let _0x138a13 = _0xeed4ea.length;
      while (_0x138a13 < _0x35f396) {
        _0xeed4ea += "0";
      }
      _0x138a13 > _0x35f396 && (_0xeed4ea = _0xeed4ea.slice(0, 13));
      return parseInt(_0xeed4ea);
    }
    async wait_until(_0x308a88, _0x1566cc = {}) {
      let _0x53fab0 = _0x1566cc.logger || this,
        _0x51e877 = _0x1566cc.interval || this.default_wait_interval,
        _0x467f54 = _0x1566cc.limit || this.default_wait_limit,
        _0x3faab2 = _0x1566cc.ahead || this.default_wait_ahead;
      if (typeof _0x308a88 == "string" && _0x308a88.includes(":")) {
        if (_0x308a88.includes("-")) {
          _0x308a88 = new Date(_0x308a88).getTime();
        } else {
          let _0x28bd0e = this.time("yyyy-MM-dd ");
          _0x308a88 = new Date(_0x28bd0e + _0x308a88).getTime();
        }
      }
      let _0x4cc868 = this.normalize_time(_0x308a88) - _0x3faab2,
        _0x1507a2 = this.time("hh:mm:ss.S", _0x4cc868),
        _0x48caba = Date.now();
      _0x48caba > _0x4cc868 && (_0x4cc868 += 86400000);
      let _0x15521c = _0x4cc868 - _0x48caba;
      if (_0x15521c > _0x467f54) {
        const _0x1f4df4 = {
          time: true
        };
        _0x53fab0.log("离目标时间[" + _0x1507a2 + "]大于" + _0x467f54 / 1000 + "秒,不等待", _0x1f4df4);
      } else {
        const _0x2e6349 = {
          time: true
        };
        _0x53fab0.log("离目标时间[" + _0x1507a2 + "]还有" + _0x15521c / 1000 + "秒,开始等待", _0x2e6349);
        while (_0x15521c > 0) {
          let _0x4a0d1f = Math.min(_0x15521c, _0x51e877);
          await this.wait(_0x4a0d1f);
          _0x48caba = Date.now();
          _0x15521c = _0x4cc868 - _0x48caba;
        }
        const _0x295a13 = {
          time: true
        };
        _0x53fab0.log("已完成等待", _0x295a13);
      }
    }
    async wait_gap_interval(_0x40bb3b, _0x2d2174) {
      let _0x2859b5 = Date.now() - _0x40bb3b;
      _0x2859b5 < _0x2d2174 && (await this.wait(_0x2d2174 - _0x2859b5));
    }
  }(_0x4e1f8a);
}