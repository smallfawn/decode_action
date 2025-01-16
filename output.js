//Thu Jan 16 2025 01:47:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x35bd5d = _0x15fb59("携程旅行");
const _0x5810ea = require("got");
const {
  CookieJar: _0x16d20f
} = require("tough-cookie");
const _0x13b010 = "xclx";
const _0x4eef86 = /[\n\&\@]/;
const _0x4a7e9f = [_0x13b010 + "Cookie"];
const _0x13cc51 = 1.01;
const _0x4f910b = "xclx";
const _0x4050f3 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
const _0x4bd32f = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x4f910b + ".json";
const _0x30d730 = 20000;
const _0x25f7ac = 3;
const _0x3a40a5 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/20B110_eb64__isiPhoneX_Ctrip_CtripWireless_8.65.0_cDevice=iPhone 14 Pro Max__cSize=w430*h932__cwk=1_safeAreaTop=59_safeAreaBottom=34";
const _0x146c93 = 2000;
const _0x2c34a1 = ["APP", "miniProgram", "H5"];
const _0x22df96 = ["1", "2", "3", "4"];
const _0x2acaf2 = {
  "签到页": "2H3294O46M",
  "社区任务": "1708486BXC",
  "现金任务": "JR442JH832",
  "周周乐": "6733N074D4",
  "程程聚财": "IZ85A44O91",
  "YO票中心1": "893MX06DQ9",
  "YO票中心2": "3430YX062C",
  "福利任务": "BZ1WXEE74T"
};
const _0x42653a = {
  "签到打卡": "MKT_SIGN_1677748235121",
  "周周乐": "MKT_LOTTERY_1616744889859"
};
const _0x435709 = {
  "YO票签到": "893MX06DQ9"
};
class _0x1e1316 {
  constructor() {
    this.index = _0x35bd5d.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x1260e7 = {
      limit: 0
    };
    const _0x5ea187 = {
      Connection: "keep-alive"
    };
    const _0x562c74 = {
      retry: _0x1260e7,
      timeout: _0x30d730,
      followRedirect: false,
      headers: _0x5ea187
    };
    this.got = _0x5810ea.extend(_0x562c74);
  }
  get_prefix(_0x3f39a5 = {}) {
    var _0x11476a = "";
    var _0x285030 = _0x35bd5d.userCount.toString().length;
    if (this.index) {
      _0x11476a += "账号[" + _0x35bd5d.padStr(this.index, _0x285030) + "]";
    }
    if (this.name) {
      _0x11476a += "[" + this.name + "]";
    }
    return _0x11476a;
  }
  log(_0x36fbb9, _0x296423 = {}) {
    let _0x4d7724 = this.get_prefix();
    _0x35bd5d.log(_0x4d7724 + _0x36fbb9, _0x296423);
  }
  async request(_0xac947b) {
    const _0x50ef7e = ["RequestError"];
    const _0x208ce7 = ["TimeoutError"];
    let _0x134198 = _0x35bd5d.copy(_0xac947b);
    let _0x3ac4bb = {};
    try {
      let _0x43badb = null;
      let _0x585191 = 0;
      let _0x32d6be = _0x134198.fn || _0x134198.url;
      let _0x58e274 = _0x134198.valid_code || [200];
      let _0x3b18f6 = _0x134198.retry_code || [];
      if (_0x134198.form) {
        for (let _0x1dc901 in _0x134198.form) {
          typeof _0x134198.form[_0x1dc901] == "object" && (_0x134198.form[_0x1dc901] = JSON.stringify(_0x134198.form[_0x1dc901]));
        }
      }
      _0x134198.method = _0x134198?.["method"]?.["toUpperCase"]() || "GET";
      let _0x19886c = _0x134198.got_client || this.got;
      _0x134198.debug_in && console.log(_0x134198);
      while (_0x585191 < _0x25f7ac) {
        if (_0x585191 > 0) {
          await _0x35bd5d.wait(_0x146c93 * _0x585191);
          let _0x57ece5 = _0x35bd5d.get(_0x134198, "retryer", null);
          if (_0x57ece5) {
            let _0x15f6f7 = _0x35bd5d.get(_0x134198, "retryer_opt", {});
            await _0x57ece5(_0x134198, _0x15f6f7);
          }
        }
        _0x585191++;
        let _0x2a90bd = null;
        try {
          let _0x423426 = Number(_0x134198?.["timeout"]?.["request"] || _0x134198?.["timeout"] || _0x30d730);
          let _0x4157cd = false;
          let _0x48abc6 = Date.now();
          let _0x19e18f = _0x19886c(_0x134198);
          let _0x1ee3b9 = setTimeout(() => {
            _0x4157cd = true;
            _0x19e18f.cancel();
          }, _0x423426);
          await _0x19e18f.then(_0x3b17c3 => {
            _0x43badb = _0x3b17c3;
          }, _0x471c4b => {
            _0x2a90bd = _0x471c4b;
            _0x43badb = _0x471c4b.response;
          }).finally(() => clearTimeout(_0x1ee3b9));
          let _0xa8bef = Date.now();
          let _0x22e1eb = _0xa8bef - _0x48abc6;
          let _0x3b6181 = _0x43badb?.["statusCode"] || null;
          if (_0x4157cd || _0x208ce7.includes(_0x2a90bd?.["name"])) {
            let _0x3a91dd = "";
            _0x2a90bd?.["code"] && (_0x3a91dd += "(" + _0x2a90bd.code, _0x2a90bd?.["event"] && (_0x3a91dd += ":" + _0x2a90bd.event), _0x3a91dd += ")");
            this.log("[" + _0x32d6be + "]请求超时" + _0x3a91dd + "(" + _0x22e1eb + "ms)，重试第" + _0x585191 + "次");
          } else {
            if (_0x50ef7e.includes(_0x2a90bd?.["name"])) {
              this.log("[" + _0x32d6be + "]请求错误(" + _0x2a90bd.code + ")(" + _0x22e1eb + "ms)，重试第" + _0x585191 + "次");
            } else {
              if (_0x3b6181) {
                _0x2a90bd && !_0x58e274.includes(_0x3b6181) && this.log("请求[" + _0x32d6be + "]返回[" + _0x3b6181 + "]");
              } else {
                let {
                  code = "unknown",
                  name = "unknown"
                } = _0x2a90bd || {};
                this.log("请求[" + _0x32d6be + "]错误[" + code + "][" + name + "]");
              }
              break;
            }
          }
        } catch (_0x51ffd4) {
          this.log("[" + _0x32d6be + "]请求错误(" + _0x51ffd4.message + ")，重试第" + _0x585191 + "次");
        }
      }
      if (_0x43badb === null || _0x43badb === undefined) {
        const _0x41d73c = {
          statusCode: -1,
          headers: null,
          result: null
        };
        return _0x41d73c;
      }
      let {
        statusCode: _0x14f9b0,
        headers: _0x8ec1af,
        body: _0x595785
      } = _0x43badb;
      let _0x2a77ac = _0x35bd5d.get(_0x134198, "decode_json", true);
      if (_0x595785 && _0x2a77ac) {
        try {
          _0x595785 = JSON.parse(_0x595785);
        } catch {}
      }
      const _0x1267b8 = {
        statusCode: _0x14f9b0,
        headers: _0x8ec1af,
        result: _0x595785
      };
      _0x3ac4bb = _0x1267b8;
      _0x134198.debug_out && console.log(_0x3ac4bb);
    } catch (_0x545eed) {
      console.log(_0x545eed);
    } finally {
      return _0x3ac4bb;
    }
  }
}
let _0x49f3eb = new _0x1e1316();
class _0x5bdf0c extends _0x1e1316 {
  constructor(_0x279201) {
    super();
    this.cticket = _0x279201;
    this.cookieJar = new _0x16d20f();
    this.cookieJar.setCookieSync("cticket=" + this.cticket + "; Domain=ctrip.com;", "https://m.ctrip.com");
    const _0x5045f7 = {
      "User-Agent": _0x3a40a5
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x5045f7
    });
  }
  get_common_body() {
    const _0x4986ee = {
      cid: "",
      ctok: "",
      cver: "1.0",
      lang: "01",
      sid: "8888",
      syscode: "09",
      auth: "",
      xsid: "",
      extension: []
    };
    const _0xc48679 = {
      head: _0x4986ee
    };
    return _0xc48679;
  }
  get_task_url(_0x29eb04) {
    let _0x5b2cf8 = _0x29eb04?.["appUrl"] || _0x29eb04?.["wechatUrl"] || _0x29eb04?.["h5Url"] || _0x29eb04?.["speedAppUrl"] || "";
    return _0x5b2cf8;
  }
  async getUserInfo(_0xe92d8a = {}) {
    let _0x231536 = false;
    try {
      const _0x2a373a = {
        Key: "BizType",
        Value: "BASE"
      };
      const _0x200a4a = {
        key: "accountSubToMaster",
        value: "0"
      };
      const _0x429f55 = {
        Key: "NeedBindInfo",
        Value: "1"
      };
      const _0x2750e2 = {
        Key: "Self",
        Value: "1"
      };
      let _0x356ef8 = {
        fn: "getUserInfo",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/11838/getUserInfo",
        json: {
          parameterList: [_0x2a373a, _0x200a4a],
          queryConditionList: [_0x429f55, _0x2750e2],
          needFullOrHalfAvatarUrl: "full",
          contentType: "json",
          ...this.get_common_body()
        }
      };
      let {
        result: _0x385372,
        statusCode: _0xf19e9e
      } = await this.request(_0x356ef8);
      let _0x56e169 = _0x35bd5d.get(_0x385372?.["result"], "resultCode", _0xf19e9e);
      if (_0x56e169 === 0) {
        let {
          nickName: _0x5814a9,
          mobilePhone: _0xa2eedb
        } = _0x385372?.["thisUserInfo"];
        this.name = _0xa2eedb || _0x385372?.["uID"] || _0x5814a9;
        this.log("登陆成功");
        _0x231536 = true;
      } else {
        let _0x55a4d8 = _0x35bd5d.get(_0x385372?.["result"], "errMessage", "");
        this.log("获取账号信息失败[" + _0x56e169 + "]: " + _0x55a4d8);
      }
    } catch (_0xada1f0) {
      console.log(_0xada1f0);
    } finally {
      return _0x231536;
    }
  }
  async getuserbaseinfo(_0x1fd481 = {}) {
    let _0x4df954 = false;
    try {
      let _0x50396f = {
        fn: "getuserbaseinfo",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/28072/json/getuserbaseinfo",
        json: this.get_common_body()
      };
      let {
        result: _0x136de2,
        statusCode: _0x1fe276
      } = await this.request(_0x50396f);
      let _0x1504d1 = _0x35bd5d.get(_0x136de2, "resultCode", _0x1fe276);
      if (_0x1504d1 === 0) {
        let {
          uid: _0x54e95a,
          nickName: _0x278b5e
        } = _0x136de2?.["userInfo"];
        this.uid = _0x54e95a;
        this.name = _0x278b5e;
        this.log("登陆成功");
        _0x4df954 = true;
      } else {
        let _0x9b5fdf = _0x35bd5d.get(_0x136de2, "resultMsg", "");
        this.log("获取账号信息失败[" + _0x1504d1 + "]: " + _0x9b5fdf);
      }
    } catch (_0x3eaf2c) {
      console.log(_0x3eaf2c);
    } finally {
      return _0x4df954;
    }
  }
  async isTodaySign(_0x15dd24 = {}) {
    try {
      let _0x1c877a = {
        fn: "isTodaySign",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/22769/json/isTodaySign",
        json: this.get_common_body()
      };
      let {
        result: _0x3f1b36,
        statusCode: _0x37e516
      } = await this.request(_0x1c877a);
      let _0x52fe09 = _0x35bd5d.get(_0x3f1b36, "code", _0x37e516);
      if (_0x52fe09 === 0) {
        let _0x2802fd = _0x3f1b36.sign;
        _0x2802fd ? this.log("[积分签到]今天已签到") : await this.signToday();
      } else {
        let _0x2df887 = _0x35bd5d.get(_0x3f1b36, "message", "");
        this.log("查询[积分签到]签到失败[" + _0x52fe09 + "]: " + _0x2df887);
      }
    } catch (_0x1bfe84) {
      console.log(_0x1bfe84);
    }
  }
  async signToday(_0x28a125 = {}) {
    try {
      let _0x266b72 = {
        fn: "signToday",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/22769/signToday",
        json: this.get_common_body()
      };
      let {
        result: _0x4f4689,
        statusCode: _0x21646a
      } = await this.request(_0x266b72);
      let _0x1a7021 = _0x35bd5d.get(_0x4f4689, "code", _0x21646a);
      if (_0x1a7021 === 0) {
        this.log("[积分签到]签到成功: " + _0x4f4689.baseIntegratedPoint + "积分, 已连签" + _0x4f4689.continueDay + "天");
      } else {
        let _0x84d493 = _0x35bd5d.get(_0x4f4689, "message", "");
        this.log("[积分签到]签到失败[" + _0x1a7021 + "]: " + _0x84d493);
      }
    } catch (_0x39f610) {
      console.log(_0x39f610);
    }
  }
  async getSignDetail(_0x2bd160, _0x45703c = {}) {
    try {
      let _0x218cc5 = {
        fn: "getSignDetail",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/22598/getSignDetail",
        json: {
          oAuthHead: {},
          channelCode: _0x435709[_0x2bd160],
          rmsToken: "",
          platform: _0x35bd5d.get(_0x45703c, "platform", "miniProgram"),
          version: _0x35bd5d.get(_0x45703c, "version", "3"),
          osType: _0x35bd5d.get(_0x45703c, "osType", "ios"),
          appVersion: "",
          ...this.get_common_body()
        }
      };
      let {
        result: _0x7882de,
        statusCode: _0x2ae2bd
      } = await this.request(_0x218cc5);
      let _0x6769ad = _0x35bd5d.get(_0x7882de, "code", _0x2ae2bd);
      if (_0x6769ad === 0) {
        let _0x290bed = _0x7882de.isSign;
        _0x290bed ? this.log("[" + _0x2bd160 + "]今天已签到") : await this.do_sign(_0x2bd160);
      } else {
        let _0x406579 = _0x35bd5d.get(_0x7882de, "message", "");
        this.log("查询[" + _0x2bd160 + "]签到失败[" + _0x6769ad + "]: " + _0x406579);
      }
    } catch (_0x53d153) {
      console.log(_0x53d153);
    }
  }
  async do_sign(_0x4b8345, _0x5cba9a = {}) {
    try {
      let _0x388861 = {
        fn: "do_sign",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/22598/signToday",
        json: {
          oAuthHead: {},
          channelCode: _0x435709[_0x4b8345],
          rmsToken: "",
          platform: _0x35bd5d.get(_0x5cba9a, "platform", "miniProgram"),
          version: _0x35bd5d.get(_0x5cba9a, "version", "3"),
          osType: _0x35bd5d.get(_0x5cba9a, "osType", "ios"),
          appVersion: "",
          ...this.get_common_body()
        }
      };
      let {
        result: _0x153648,
        statusCode: _0x3c0320
      } = await this.request(_0x388861);
      let _0x2a0ab8 = _0x35bd5d.get(_0x153648, "code", _0x3c0320);
      if (_0x2a0ab8 === 0) {
        this.log("[" + _0x4b8345 + "]签到成功: " + _0x153648.awardDesc);
      } else {
        let _0x1ce49a = _0x35bd5d.get(_0x153648, "message", "");
        this.log("[" + _0x4b8345 + "]签到失败[" + _0x2a0ab8 + "]: " + _0x1ce49a);
      }
    } catch (_0x45f29c) {
      console.log(_0x45f29c);
    }
  }
  async carveUpPointsGetActivityInfo(_0x36030c = {}) {
    try {
      let _0x22e56a = {
        fn: "carveUpPointsGetActivityInfo",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/14347/carveUpPointsGetActivityInfo",
        json: {
          activityId: _0x42653a["签到打卡"],
          ...this.get_common_body()
        }
      };
      let {
        result: _0x223b59,
        statusCode: _0x4173d3
      } = await this.request(_0x22e56a);
      let _0x40f42a = _0x35bd5d.get(_0x223b59, "errCode", _0x4173d3);
      if (_0x40f42a === 0) {
        let _0x2a9a0b = _0x223b59?.["result"]?.["haveBet"];
        _0x2a9a0b ? this.log("已投注参与明天签到打卡") : await this.carveUpPointsBet();
      } else {
        let _0x599469 = _0x35bd5d.get(_0x223b59, "errMsg", "");
        this.log("查询投注签到打卡状态失败[" + _0x40f42a + "]: " + _0x599469);
      }
    } catch (_0x739a2a) {
      console.log(_0x739a2a);
    }
  }
  async carveUpPointsBet(_0x357c8a = {}) {
    try {
      let _0x428698 = {
        fn: "carveUpPointsBet",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/14347/carveUpPointsBet",
        json: {
          activityId: "MKT_SIGN_1677748235121",
          ...this.get_common_body()
        }
      };
      let {
        result: _0x117163,
        statusCode: _0x6ae77c
      } = await this.request(_0x428698);
      let _0x284b41 = _0x35bd5d.get(_0x117163, "errCode", _0x6ae77c);
      if (_0x284b41 === 0) {
        this.log("投注参与明天签到打卡成功");
      } else {
        let _0x13522d = _0x35bd5d.get(_0x117163, "errMsg", "");
        this.log("投注参与明天签到打卡失败[" + _0x284b41 + "]: " + _0x13522d);
      }
    } catch (_0x5d8a8b) {
      console.log(_0x5d8a8b);
    }
  }
  async userTaskList(_0x2450c9, _0x5046d8, _0x419141, _0x5f3485, _0x335305 = {}) {
    try {
      let _0x3fce07 = _0x2acaf2[_0x419141];
      const _0x27dc5e = {
        mktTaskSort: ""
      };
      let _0x2cff17 = {
        fn: "userTaskList",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/22598/userTaskList",
        json: {
          channelCode: _0x3fce07,
          extMap: _0x27dc5e,
          oAuthHead: {},
          platform: _0x2450c9,
          rmsToken: "",
          version: _0x5046d8,
          osType: "ios",
          appVersion: "",
          subOsType: "iphone",
          ...this.get_common_body()
        }
      };
      let {
        result: _0x29b8ea,
        statusCode: _0x520325
      } = await this.request(_0x2cff17);
      let _0x6f3769 = _0x35bd5d.get(_0x29b8ea, "code", _0x520325);
      if (_0x6f3769 === 200) {
        let _0x215b8b = _0x29b8ea?.["todoTaskList"] || [];
        let _0x1547fc = _0x29b8ea?.["finishTaskList"] || [];
        let _0x26c05f = _0x1547fc.concat(_0x215b8b);
        for (let _0x17692a of _0x26c05f) {
          if (_0x5f3485.map(_0x240e91 => _0x240e91.id).includes(_0x17692a.id)) {
            continue;
          }
          let _0x259139 = "未知状态" + _0x17692a.status;
          switch (_0x17692a.status) {
            case 0:
              {
                _0x259139 = "未接受";
                break;
              }
            case 1:
              {
                _0x259139 = "未完成";
                break;
              }
            case 2:
              {
                _0x259139 = "可领取奖励";
                break;
              }
            case 3:
              {
                _0x259139 = "已领取奖励";
                break;
              }
          }
          _0x5f3485.push(_0x17692a);
          this.log("任务[" + _0x17692a.displayName + "]" + _0x259139);
        }
      } else {
        let _0x17a54e = _0x35bd5d.get(_0x29b8ea, "message", "");
        this.log("查询[" + _0x419141 + "][platform:" + _0x2450c9 + "][version:" + _0x5046d8 + "]任务失败[" + _0x6f3769 + "]: " + _0x17a54e);
      }
    } catch (_0xcf2d84) {
      console.log(_0xcf2d84);
    }
  }
  async process_tasklist(_0x27a3bd, _0x4eed67, _0x126022 = {}) {
    try {
      let _0x32224e = _0x2acaf2[_0x27a3bd];
      for (let _0x36fc44 of _0x4eed67) {
        if (_0x36fc44?.["displayName"]?.["includes"]("兑换")) {
          continue;
        }
        switch (_0x36fc44.status) {
          case 0:
            {
              await this.todoTask(_0x32224e, _0x36fc44);
              break;
            }
          case 1:
            {
              await this.doTask(_0x32224e, _0x36fc44);
              break;
            }
          case 2:
            {
              await this.awardTask(_0x32224e, _0x36fc44);
              break;
            }
          case 3:
            {
              break;
            }
        }
      }
    } catch (_0x42607c) {
      console.log(_0x42607c);
    }
  }
  async todoTask(_0x4b0818, _0x273e4a, _0x98eb66 = {}) {
    try {
      let _0x41be77 = {
        fn: "todoTask",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/22598/todoTask",
        json: {
          channelCode: _0x4b0818,
          taskId: _0x273e4a.id,
          status: 0,
          done: 0,
          ...this.get_common_body()
        }
      };
      let {
        result: _0x30dfbd,
        statusCode: _0x3bbdcd
      } = await this.request(_0x41be77);
      let _0x4fd85f = _0x35bd5d.get(_0x30dfbd, "code", _0x3bbdcd);
      if (_0x4fd85f === 200) {
        this.log("接受任务[" + _0x273e4a.displayName + "]成功");
        await this.doTask(_0x4b0818, _0x273e4a);
      } else {
        let _0x3ab7f3 = _0x35bd5d.get(_0x30dfbd, "message", "");
        this.log("接受任务[" + _0x273e4a.displayName + "]失败[" + _0x4fd85f + "]: " + _0x3ab7f3);
      }
    } catch (_0x384eac) {
      console.log(_0x384eac);
    }
  }
  async doTask(_0x200d7d, _0x27ba23, _0x5a336b = {}) {
    try {
      switch (_0x27ba23.eventType) {
        case "NO_REPEAT_BROWSE":
          {
            await this.taskBrowseDone(_0x200d7d, _0x27ba23);
            break;
          }
        case "TRIP_SHOOT_PLANET_FOLLOW":
          {
            await this.planet_follow(_0x200d7d, _0x27ba23);
            break;
          }
        case "TRIP_SHOOT_PLANET_LIKE":
          {
            break;
          }
        case "BU_ACTIVITY":
          {
            let _0x2d9b25 = _0x27ba23.eventCondition ? JSON.parse(_0x27ba23.eventCondition) : null;
            switch (_0x2d9b25?.["buActivityType"]) {
              case "MKT_2023_YO_DUOBAO":
                {
                  await this.yo_vote_task(_0x200d7d, _0x27ba23);
                  break;
                }
              default:
                {
                  this.log("任务[" + _0x27ba23.displayName + "]: 未支持的[BU_ACTIVITY]类型[" + _0x2d9b25?.["buActivityType"] + "]");
                  break;
                }
            }
            break;
          }
        case "WALLET_BING_CARD":
        case "CREDIT_CARD_OPEN":
        case "PRIORITY_ORDER":
        case "FOLLOW_WX_PUBLIC_NUMBER":
        case "ENTERPRISE_WX_ADD_FRIENDS":
        case "GS_PUBLISH":
        case "GS_LIKE":
        case "GS_FOLLOW":
        case "GS_SHARE_BROWSE":
        case "ENERGYEXCHANGE_VIDEOLIKE":
        case "JJ_LANDLORDS_JINGJ_C009":
        case "EXT_SHENG_TIAN_GAME_C005":
        case "INVITE_HELP":
        case "INVITE_HELP_TASK":
        case "APP_DRAINAGE_OVER_API":
        case "JOIN_ACTIVITY_TASK":
        case "APP_ACTIVITY_WX_DRAINAGE":
          {
            this.log("任务[" + _0x27ba23.displayName + "]: 未支持的类型[" + _0x27ba23.eventType + "]");
            break;
          }
        default:
          {
            await this.todoTask_done(_0x200d7d, _0x27ba23);
            break;
          }
      }
    } catch (_0xfa53b5) {
      console.log(_0xfa53b5);
    }
  }
  async todoTask_done(_0x1a2e99, _0xff19a, _0x3301a9 = {}) {
    try {
      let _0x3a6f06 = {
        fn: "todoTask_done",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/22598/todoTask",
        json: {
          channelCode: _0x1a2e99,
          taskId: _0xff19a.id,
          status: 1,
          done: 1,
          ...this.get_common_body()
        }
      };
      let {
        result: _0x30bd35,
        statusCode: _0x7e86c0
      } = await this.request(_0x3a6f06);
      let _0x1b130a = _0x35bd5d.get(_0x30bd35, "code", _0x7e86c0);
      if (_0x1b130a === 200) {
        this.log("完成任务[" + _0xff19a.displayName + "]成功");
        await this.awardTask(_0x1a2e99, _0xff19a, _0x3301a9);
      } else {
        let _0x277db4 = _0x35bd5d.get(_0x30bd35, "message", "");
        this.log("完成任务[" + _0xff19a.displayName + "][" + _0xff19a.eventType + "]失败[" + _0x1b130a + "]: " + _0x277db4);
      }
    } catch (_0x50b125) {
      console.log(_0x50b125);
    }
  }
  async awardTask(_0x268101, _0x1b24b9, _0x47fb9f = {}) {
    try {
      let _0x572333 = {
        fn: "awardTask",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/22598/awardTask",
        json: {
          channelCode: _0x268101,
          taskId: _0x1b24b9.id,
          ...this.get_common_body()
        }
      };
      let {
        result: _0x33f772,
        statusCode: _0x2c797d
      } = await this.request(_0x572333);
      let _0x18f621 = _0x35bd5d.get(_0x33f772, "code", _0x2c797d);
      if (_0x18f621 === 200) {
        this.log("领取任务[" + _0x1b24b9.displayName + "]奖励: " + _0x33f772?.["awardDesc"]);
      } else {
        let _0x44f62e = _0x35bd5d.get(_0x33f772, "message", "");
        this.log("领取任务[" + _0x1b24b9.displayName + "]奖励失败[" + _0x18f621 + "]: " + _0x44f62e);
      }
    } catch (_0x1da98f) {
      console.log(_0x1da98f);
    }
  }
  async taskBrowseDone(_0x578af8, _0x1ecf2d, _0x43a99a = {}) {
    try {
      let _0x2374cc = JSON.parse(_0x1ecf2d.eventCondition);
      let _0x4a66a5 = {
        fn: "taskBrowseDone",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/22598/taskBrowseDone",
        json: {
          _taskDetailId: this.get_task_url(_0x1ecf2d),
          _mktTaskActivityId: _0x2374cc?.["_mktTaskActivityId"]
        }
      };
      let {
        result: _0x2be7a4,
        statusCode: _0x52681d
      } = await this.request(_0x4a66a5);
      let _0x37e436 = _0x35bd5d.get(_0x2be7a4, "code", _0x52681d);
      if (_0x37e436 === 200) {
        this.log("完成任务[" + _0x1ecf2d.displayName + "]成功");
        await this.awardTask(_0x578af8, _0x1ecf2d, _0x43a99a);
      } else {
        let _0x51eaa3 = _0x35bd5d.get(_0x2be7a4, "message", "");
        this.log("完成任务[" + _0x1ecf2d.displayName + "]失败[" + _0x37e436 + "]: " + _0x51eaa3);
      }
    } catch (_0x26e9d2) {
      console.log(_0x26e9d2);
    }
  }
  async planet_follow(_0xe04fa1, _0x293941, _0x31eb7d = {}) {
    try {
      let _0x1c2b32 = new URL(this.get_task_url(_0x293941));
      let _0x38110d = _0x1c2b32.searchParams.get("clientAuth");
      let _0x3e4128 = {
        fn: "planet_follow",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/16225/json/attention",
        json: {
          starCtripUid: _0x38110d,
          ...this.get_common_body()
        }
      };
      let {
        result: _0x2963f2,
        statusCode: _0x4c52c5
      } = await this.request(_0x3e4128);
      let _0x5da290 = _0x35bd5d.get(_0x2963f2, "code", _0x4c52c5);
      if (_0x5da290 === 200) {
        this.log("完成任务[" + _0x293941.displayName + "]成功");
        await this.awardTask(_0xe04fa1, _0x293941, _0x31eb7d);
      } else {
        let _0x3eed38 = _0x35bd5d.get(_0x2963f2, "message", "");
        this.log("完成任务[" + _0x293941.displayName + "]失败[" + _0x5da290 + "]: " + _0x3eed38);
      }
    } catch (_0x3ece75) {
      console.log(_0x3ece75);
    }
  }
  async planet_like(_0x19da80, _0x8525e4 = {}) {
    try {
      let _0x584763 = {
        fn: "planet_like",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/14045/json/action",
        json: {
          action: "like",
          targetId: _0x19da80,
          targetType: "article",
          ...this.get_common_body()
        }
      };
      let {
        result: _0x23f410,
        statusCode: _0x3fa24b
      } = await this.request(_0x584763);
      _0x23f410?.["result"]?.["result"] ? this.log("星球任务点赞[" + _0x19da80 + "]成功") : this.log("星球任务点赞[" + _0x19da80 + "]失败");
    } catch (_0x2cb690) {
      console.log(_0x2cb690);
    }
  }
  async yo_vote_task(_0x4ae3d2, _0x3e864b, _0x2cca52 = {}) {
    try {
      let _0x2b09a5 = "3";
      let _0x2ea321 = "miniProgram";
      let _0x38f5bf = await this.playingYoTicketActivityQuery(_0x2b09a5, _0x2ea321);
      if (_0x38f5bf?.["length"]) {
        let _0x4d460c = null;
        let _0x6ea9ae = _0x38f5bf.filter(_0xbe172e => _0xbe172e?.["activityName"]?.["match"](/\d+积分/));
        _0x6ea9ae.length ? _0x4d460c = _0x6ea9ae[0] : _0x4d460c = _0x35bd5d.randomList(_0x38f5bf);
        let _0xf20a0d = Math.floor(Math.random() * 1000) + 1;
        (await this.yoTicketVote(_0x2b09a5, _0x2ea321, _0x4d460c, [_0xf20a0d])) && (await this.awardTask(_0x4ae3d2, _0x3e864b, _0x2cca52));
      }
    } catch (_0x532ce8) {
      console.log(_0x532ce8);
    }
  }
  async getWaterflowInfo(_0x137b47, _0x51a0f0, _0x4bad59 = {}) {
    try {
      const _0x31ef33 = {
        size: 15,
        index: 1
      };
      let _0x1fdfed = {
        fn: "getWaterflowInfo",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/13012/getWaterflowInfo",
        json: {
          sourceid: "starstone",
          appId: "99999999",
          source: "starstone",
          tabType: "",
          tabId: "",
          deviceInfo: {},
          globalInfo: {},
          hotelInfo: {},
          pageInfo: _0x31ef33,
          coordinate: {},
          conf: {},
          ext: {},
          selectedFastFilters: [],
          selectedTabs: [],
          ...this.get_common_body()
        }
      };
      let {
        result: _0x55685f,
        statusCode: _0x88d521
      } = await this.request(_0x1fdfed);
      if (_0x55685f?.["data"]?.["items"]) {
        for (let _0x18567b of _0x55685f?.["data"]?.["items"] || []) {
          let _0x2c4fb8 = JSON.parse(_0x18567b);
          await this.planet_like(_0x2c4fb8.id);
        }
        await this.awardTask(_0x137b47, _0x51a0f0, _0x4bad59);
      } else {
        this.log("获取星球点赞文章失败");
      }
    } catch (_0x533a4f) {
      console.log(_0x533a4f);
    }
  }
  async playingYoTicketActivityQuery(_0x5a15da, _0x32f31a, _0x35f9c8 = {}) {
    let _0x4a37e0 = [];
    try {
      let _0x12b991 = {
        fn: "playingYoTicketActivityQuery",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/18083/playingYoTicketActivityQuery",
        json: {
          version: _0x5a15da,
          platform: _0x32f31a,
          osType: "ios",
          ...this.get_common_body()
        }
      };
      let {
        result: _0x385c6a,
        statusCode: _0x1223a7
      } = await this.request(_0x12b991);
      let _0xb7b6ba = _0x35bd5d.get(_0x385c6a, "errcode", _0x1223a7);
      if (_0xb7b6ba === 0) {
        _0x4a37e0 = _0x385c6a?.["activityList"] || [];
      } else {
        let _0x2ceb55 = _0x35bd5d.get(_0x385c6a, "errmsg", "");
        this.log("获取YO票夺宝列表失败[" + _0xb7b6ba + "]: " + _0x2ceb55);
      }
    } catch (_0x2da980) {
      console.log(_0x2da980);
    } finally {
      return _0x4a37e0;
    }
  }
  async yoTicketVote(_0x56ada7, _0x2828e5, _0x39905c, _0x40488e, _0x3dc2ef = {}) {
    let _0x1a8c79 = false;
    try {
      let _0xafedc = {
        fn: "yoTicketVote",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/18083/yoTicketVote",
        json: {
          voteNumberList: _0x40488e,
          activityId: _0x39905c.activityId,
          openId: "",
          version: _0x56ada7,
          platform: _0x2828e5,
          osType: "ios",
          ...this.get_common_body()
        }
      };
      let {
        result: _0x1111fc,
        statusCode: _0x3ca16d
      } = await this.request(_0xafedc);
      let _0x4d2da1 = _0x35bd5d.get(_0x1111fc, "errcode", _0x3ca16d);
      if (_0x4d2da1 === 0) {
        this.log("投票夺宝[" + _0x39905c.activityName + "]成功: " + _0x40488e.join(","));
        _0x1a8c79 = true;
      } else {
        let _0x1306f5 = _0x35bd5d.get(_0x1111fc, "errmsg", "");
        this.log("投票夺宝[" + _0x39905c.activityName + "]失败[" + _0x4d2da1 + "]: " + _0x1306f5);
      }
    } catch (_0x4913e0) {
      console.log(_0x4913e0);
    } finally {
      return _0x1a8c79;
    }
  }
  async getZzlUserCard(_0x61af4a = {}) {
    try {
      let _0x3a66db = {
        fn: "getZzlUserCard",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/16575/getZzlUserCard",
        json: {
          activityId: _0x42653a["周周乐"],
          periodNum: "",
          pageNo: 1,
          pageSize: 100,
          ...this.get_common_body()
        }
      };
      let {
        result: _0x34ef29,
        statusCode: _0x1d4ac0
      } = await this.request(_0x3a66db);
      let _0x8f253f = _0x35bd5d.get(_0x34ef29, "errCode", _0x1d4ac0);
      if (_0x8f253f === 0) {
        let {
          chanceNum: _0x2740c1
        } = _0x34ef29;
        this.log("周周乐可以抽卡" + _0x2740c1 + "次");
        while (_0x2740c1-- > 0) {
          await this.sendZzlCardToUser();
        }
      } else {
        let _0x463556 = _0x35bd5d.get(_0x34ef29, "resultmessage", "");
        this.log("查询周周乐抽卡次数失败[" + _0x8f253f + "]: " + _0x463556);
      }
    } catch (_0x4fff56) {
      console.log(_0x4fff56);
    }
  }
  async sendZzlCardToUser(_0x427807 = {}) {
    try {
      let _0x9f377f = {
        fn: "sendZzlCardToUser",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/16575/sendZzlCardToUser",
        json: {
          openId: "",
          activityId: _0x42653a["周周乐"],
          ...this.get_common_body()
        }
      };
      let {
        result: _0x152620,
        statusCode: _0x363440
      } = await this.request(_0x9f377f);
      let _0x3be881 = _0x35bd5d.get(_0x152620, "errCode", _0x363440);
      if (_0x3be881 === 0) {
        this.log("周周乐抽卡成功");
      } else {
        let _0x464243 = _0x35bd5d.get(_0x152620, "resultmessage", "");
        this.log("周周乐抽卡失败[" + _0x3be881 + "]: " + _0x464243);
      }
    } catch (_0x5cbf5d) {
      console.log(_0x5cbf5d);
    }
  }
  async userBaseInfo(_0x40fd66 = {}) {
    try {
      let _0x488530 = {
        fn: "userBaseInfo",
        method: "post",
        url: "https://m.ctrip.com/restapi/soa2/21778/userBaseInfo",
        json: this.get_common_body()
      };
      let {
        result: _0x3a1475,
        statusCode: _0x4282c4
      } = await this.request(_0x488530);
      let _0x24248a = _0x35bd5d.get(_0x3a1475, "resultcode", _0x4282c4);
      if (_0x24248a === 0) {
        let {
          memberpoint: _0xd80a4c
        } = _0x3a1475;
        const _0x39deba = {
          notify: true
        };
        this.log("积分: " + _0xd80a4c, _0x39deba);
      } else {
        let _0x467c61 = _0x35bd5d.get(_0x3a1475, "resultmessage", "");
        this.log("查询积分失败[" + _0x24248a + "]: " + _0x467c61);
      }
    } catch (_0x393f21) {
      console.log(_0x393f21);
    }
  }
  async get_task(_0x3bec76, _0x26a1b4 = {}) {
    _0x35bd5d.log("\n--------------------------------");
    this.log("---> 查询[" + _0x3bec76 + "]任务");
    let _0x110ae1 = [];
    for (let _0x4cbf0b of _0x2c34a1) {
      for (let _0x416db0 of _0x22df96) {
        await this.userTaskList(_0x4cbf0b, _0x416db0, _0x3bec76, _0x110ae1);
      }
    }
    let _0xdb94cc = _0x110ae1?.["filter"](_0xa57dbf => _0xa57dbf.status < 3)?.["length"] || 0;
    _0xdb94cc > 0 && (this.log("---> 开始做[" + _0x3bec76 + "]任务"), await this.process_tasklist(_0x3bec76, _0x110ae1));
  }
  async userTask(_0x1ff556 = {}) {
    _0x35bd5d.log("\n-------------- 账号[" + this.index + "] --------------");
    if (!(await this.getUserInfo())) {
      return;
    }
    await this.isTodaySign();
    for (let _0x5f588b of Object.keys(_0x435709)) {
      await this.getSignDetail(_0x5f588b);
    }
    await this.carveUpPointsGetActivityInfo();
    for (let _0x3e1ee6 of Object.keys(_0x2acaf2)) {
      await this.get_task(_0x3e1ee6);
    }
    _0x35bd5d.log("\n---------------- 周周乐 ---------------");
    await this.getZzlUserCard();
    _0x35bd5d.log("\n---------------- 查询推送 ---------------");
    await this.userBaseInfo();
  }
}
!(async () => {
  if (!(await _0x50241a())) {
    return;
  }
  _0x35bd5d.read_env(_0x5bdf0c);
  for (let _0x591aa8 of _0x35bd5d.userList) {
    await _0x591aa8.userTask();
  }
})().catch(_0x3b699c => _0x35bd5d.log(_0x3b699c)).finally(() => _0x35bd5d.exitNow());
async function _0x50241a(_0x5573a0 = 0) {
  let _0x3fc92e = false;
  try {
    let _0x26a372 = {
      fn: "auth",
      method: "get",
      url: _0x4050f3,
      timeout: 20000
    };
    let {
      statusCode: _0x3f975d,
      result: _0x1d2c79
    } = await _0x49f3eb.request(_0x26a372);
    if (_0x3f975d != 200) {
      _0x5573a0++ < MAX_AUTH_RETRY && (_0x3fc92e = await _0x50241a(_0x5573a0));
      return _0x3fc92e;
    }
    if (_0x1d2c79?.["code"] == 0) {
      _0x1d2c79 = JSON.parse(_0x1d2c79.data.file.data);
      if (_0x1d2c79?.["commonNotify"] && _0x1d2c79.commonNotify.length > 0) {
        const _0x5e81eb = {
          notify: true
        };
        _0x35bd5d.log(_0x1d2c79.commonNotify.join("\n") + "\n", _0x5e81eb);
      }
      _0x1d2c79?.["commonMsg"] && _0x1d2c79.commonMsg.length > 0 && _0x35bd5d.log(_0x1d2c79.commonMsg.join("\n") + "\n");
      if (_0x1d2c79[_0x4f910b]) {
        let _0x5e03e7 = _0x1d2c79[_0x4f910b];
        _0x5e03e7.status == 0 ? _0x13cc51 >= _0x5e03e7.version ? (_0x3fc92e = true, _0x35bd5d.log(_0x5e03e7.msg[_0x5e03e7.status]), _0x35bd5d.log(_0x5e03e7.updateMsg), _0x35bd5d.log("现在运行的脚本版本是：" + _0x13cc51 + "，最新脚本版本：" + _0x5e03e7.latestVersion)) : _0x35bd5d.log(_0x5e03e7.versionMsg) : _0x35bd5d.log(_0x5e03e7.msg[_0x5e03e7.status]);
      } else {
        _0x35bd5d.log(_0x1d2c79.errorMsg);
      }
    } else {
      _0x5573a0++ < MAX_AUTH_RETRY && (_0x3fc92e = await _0x50241a(_0x5573a0));
    }
  } catch (_0x372983) {
    _0x35bd5d.log(_0x372983);
  } finally {
    return _0x3fc92e;
  }
}
function _0x15fb59(_0x252d92) {
  return new class {
    constructor(_0x1eb541) {
      this.name = _0x1eb541;
      this.startTime = Date.now();
      const _0x471fd3 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x471fd3);
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
    log(_0x480d33, _0x8eaf80 = {}) {
      let _0x50aeb5 = {
        console: true
      };
      Object.assign(_0x50aeb5, _0x8eaf80);
      if (_0x50aeb5.time) {
        let _0x59b6ad = _0x50aeb5.fmt || "hh:mm:ss";
        _0x480d33 = "[" + this.time(_0x59b6ad) + "]" + _0x480d33;
      }
      if (_0x50aeb5.notify) {
        this.notifyStr.push(_0x480d33);
      }
      if (_0x50aeb5.console) {
        console.log(_0x480d33);
      }
    }
    get(_0x4cc6dd, _0x22f81f, _0x473e1b = "") {
      let _0xbeaf4 = _0x473e1b;
      _0x4cc6dd?.["hasOwnProperty"](_0x22f81f) && (_0xbeaf4 = _0x4cc6dd[_0x22f81f]);
      return _0xbeaf4;
    }
    pop(_0x197a20, _0x7c4661, _0x4d74f7 = "") {
      let _0x2cd590 = _0x4d74f7;
      _0x197a20?.["hasOwnProperty"](_0x7c4661) && (_0x2cd590 = _0x197a20[_0x7c4661], delete _0x197a20[_0x7c4661]);
      return _0x2cd590;
    }
    copy(_0x1396ea) {
      return Object.assign({}, _0x1396ea);
    }
    read_env(_0x5c48ff) {
      let _0x1422e3 = _0x4a7e9f.map(_0x49a3e1 => process.env[_0x49a3e1]);
      for (let _0xc02ed8 of _0x1422e3.filter(_0x4c59fe => !!_0x4c59fe)) {
        for (let _0xb8db24 of _0xc02ed8.split(_0x4eef86).filter(_0x479d2d => !!_0x479d2d)) {
          this.userList.push(new _0x5c48ff(_0xb8db24));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x1f42fa = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x4a7e9f.map(_0x2a62f2 => "[" + _0x2a62f2 + "]").join("或"), _0x1f42fa);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x2979c8, _0x2b300e = null) {
      let _0x3708ad = _0x2b300e ? new Date(_0x2b300e) : new Date();
      let _0x2dfada = {
        "M+": _0x3708ad.getMonth() + 1,
        "d+": _0x3708ad.getDate(),
        "h+": _0x3708ad.getHours(),
        "m+": _0x3708ad.getMinutes(),
        "s+": _0x3708ad.getSeconds(),
        "q+": Math.floor((_0x3708ad.getMonth() + 3) / 3),
        S: this.padStr(_0x3708ad.getMilliseconds(), 3)
      };
      /(y+)/.test(_0x2979c8) && (_0x2979c8 = _0x2979c8.replace(RegExp.$1, (_0x3708ad.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x45d3ae in _0x2dfada) new RegExp("(" + _0x45d3ae + ")").test(_0x2979c8) && (_0x2979c8 = _0x2979c8.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2dfada[_0x45d3ae] : ("00" + _0x2dfada[_0x45d3ae]).substr(("" + _0x2dfada[_0x45d3ae]).length)));
      return _0x2979c8;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      try {
        var _0x248af5 = require("./sendNotify");
        this.log("\n============== 推送 ==============");
        await _0x248af5.sendNotify(this.name, this.notifyStr.join("\n"));
      } catch {
        this.log("\n=================================");
        this.log("读取推送依赖[sendNotify.js]失败, 请检查同目录下是否有依赖");
      }
    }
    padStr(_0x3b1108, _0x376c90, _0x2e7f79 = {}) {
      let _0x1184cc = _0x2e7f79.padding || "0";
      let _0x5a2ba5 = _0x2e7f79.mode || "l";
      let _0x2d6eee = String(_0x3b1108);
      let _0x1b8b31 = _0x376c90 > _0x2d6eee.length ? _0x376c90 - _0x2d6eee.length : 0;
      let _0x493cfc = "";
      for (let _0x30834c = 0; _0x30834c < _0x1b8b31; _0x30834c++) {
        _0x493cfc += _0x1184cc;
      }
      _0x5a2ba5 == "r" ? _0x2d6eee = _0x2d6eee + _0x493cfc : _0x2d6eee = _0x493cfc + _0x2d6eee;
      return _0x2d6eee;
    }
    json2str(_0x1813c3, _0x2e3f9b, _0x1d7351 = false) {
      let _0x51dcde = [];
      for (let _0x3bf247 of Object.keys(_0x1813c3).sort()) {
        let _0x12b93c = _0x1813c3[_0x3bf247];
        if (_0x12b93c && _0x1d7351) {
          _0x12b93c = encodeURIComponent(_0x12b93c);
        }
        _0x51dcde.push(_0x3bf247 + "=" + _0x12b93c);
      }
      return _0x51dcde.join(_0x2e3f9b);
    }
    str2json(_0x3e7854, _0x51241f = false) {
      let _0x5cdf24 = {};
      for (let _0x52c105 of _0x3e7854.split("&")) {
        if (!_0x52c105) {
          continue;
        }
        let _0x33e7b7 = _0x52c105.indexOf("=");
        if (_0x33e7b7 == -1) {
          continue;
        }
        let _0x3ab037 = _0x52c105.substr(0, _0x33e7b7);
        let _0x116c6d = _0x52c105.substr(_0x33e7b7 + 1);
        if (_0x51241f) {
          _0x116c6d = decodeURIComponent(_0x116c6d);
        }
        _0x5cdf24[_0x3ab037] = _0x116c6d;
      }
      return _0x5cdf24;
    }
    randomPattern(_0x441b68, _0x53704e = "abcdef0123456789") {
      let _0x4cf117 = "";
      for (let _0x15a62f of _0x441b68) {
        if (_0x15a62f == "x") {
          _0x4cf117 += _0x53704e.charAt(Math.floor(Math.random() * _0x53704e.length));
        } else {
          _0x15a62f == "X" ? _0x4cf117 += _0x53704e.charAt(Math.floor(Math.random() * _0x53704e.length)).toUpperCase() : _0x4cf117 += _0x15a62f;
        }
      }
      return _0x4cf117;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x3caa1c, _0x19266a = "abcdef0123456789") {
      let _0x3b7a6b = "";
      for (let _0x2c1aeb = 0; _0x2c1aeb < _0x3caa1c; _0x2c1aeb++) {
        _0x3b7a6b += _0x19266a.charAt(Math.floor(Math.random() * _0x19266a.length));
      }
      return _0x3b7a6b;
    }
    randomList(_0x54f78e) {
      let _0x410f1c = Math.floor(Math.random() * _0x54f78e.length);
      return _0x54f78e[_0x410f1c];
    }
    wait(_0x58d01a) {
      return new Promise(_0xe4e8e9 => setTimeout(_0xe4e8e9, _0x58d01a));
    }
    async exitNow() {
      await this.showmsg();
      let _0x4bff53 = Date.now();
      let _0x4b7779 = (_0x4bff53 - this.startTime) / 1000;
      this.log("");
      const _0x23f814 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x4b7779 + "秒", _0x23f814);
      process.exit(0);
    }
    normalize_time(_0x3968fd, _0x55b5db = {}) {
      let _0x444727 = _0x55b5db.len || this.default_timestamp_len;
      _0x3968fd = _0x3968fd.toString();
      let _0x49feea = _0x3968fd.length;
      while (_0x49feea < _0x444727) {
        _0x3968fd += "0";
      }
      _0x49feea > _0x444727 && (_0x3968fd = _0x3968fd.slice(0, 13));
      return parseInt(_0x3968fd);
    }
    async wait_until(_0x286627, _0x1fb316 = {}) {
      let _0x4c49b7 = _0x1fb316.logger || this;
      let _0x30699f = _0x1fb316.interval || this.default_wait_interval;
      let _0x33c4a9 = _0x1fb316.limit || this.default_wait_limit;
      let _0x2f021c = _0x1fb316.ahead || this.default_wait_ahead;
      if (typeof _0x286627 == "string" && _0x286627.includes(":")) {
        if (_0x286627.includes("-")) {
          _0x286627 = new Date(_0x286627).getTime();
        } else {
          let _0x18baa7 = this.time("yyyy-MM-dd ");
          _0x286627 = new Date(_0x18baa7 + _0x286627).getTime();
        }
      }
      let _0x28c9c8 = this.normalize_time(_0x286627) - _0x2f021c;
      let _0x8cbec9 = this.time("hh:mm:ss.S", _0x28c9c8);
      let _0x2e60c2 = Date.now();
      _0x2e60c2 > _0x28c9c8 && (_0x28c9c8 += 86400000);
      let _0x2e6a53 = _0x28c9c8 - _0x2e60c2;
      if (_0x2e6a53 > _0x33c4a9) {
        const _0x162a3d = {
          time: true
        };
        _0x4c49b7.log("离目标时间[" + _0x8cbec9 + "]大于" + _0x33c4a9 / 1000 + "秒,不等待", _0x162a3d);
      } else {
        const _0x3f7c10 = {
          time: true
        };
        _0x4c49b7.log("离目标时间[" + _0x8cbec9 + "]还有" + _0x2e6a53 / 1000 + "秒,开始等待", _0x3f7c10);
        while (_0x2e6a53 > 0) {
          let _0x2ee488 = Math.min(_0x2e6a53, _0x30699f);
          await this.wait(_0x2ee488);
          _0x2e60c2 = Date.now();
          _0x2e6a53 = _0x28c9c8 - _0x2e60c2;
        }
        const _0x1990a1 = {
          time: true
        };
        _0x4c49b7.log("已完成等待", _0x1990a1);
      }
    }
    async wait_gap_interval(_0x5e88ad, _0x1af535) {
      let _0x39d523 = Date.now() - _0x5e88ad;
      _0x39d523 < _0x1af535 && (await this.wait(_0x1af535 - _0x39d523));
    }
  }(_0x252d92);
}