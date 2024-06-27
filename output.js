const _0x40bf46 = _0x35a552("携程旅行"),
  _0x5d84ef = require("got"),
  {
    CookieJar: _0xdaebf0
  } = require("tough-cookie"),
  _0x5d07dc = "xclx",
  _0x341da7 = /[\n\&\@]/,
  _0x16b47b = [_0x5d07dc + "Cookie"],
  _0x4db2c0 = 1.02,
  _0x30e889 = "xclx",
  _0x45eccb = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
const _0x5cd32e = 20000,
  _0x52d2af = 3,
  _0x4784ac = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/20B110_eb64__isiPhoneX_Ctrip_CtripWireless_8.65.0_cDevice=iPhone 14 Pro Max__cSize=w430*h932__cwk=1_safeAreaTop=59_safeAreaBottom=34",
  _0x1b9dd9 = 2000,
  _0x189447 = ["APP", "miniProgram", "H5"],
  _0x270b92 = ["1", "2", "3", "4"];
const _0x1343b8 = {
  "签到页": "2H3294O46M",
  "社区任务": "1708486BXC",
  "现金任务": "JR442JH832",
  "周周乐": "6733N074D4",
  "程程聚财": "IZ85A44O91",
  "YO票中心1": "893MX06DQ9",
  "YO票中心2": "3430YX062C",
  "福利任务": "BZ1WXEE74T"
};
const _0x285df4 = {
  "签到打卡": "MKT_SIGN_1677748235121",
  "周周乐": "MKT_LOTTERY_1616744889859"
};
const _0x4a4ee7 = {
  "YO票签到": "893MX06DQ9"
};
class _0xf154c1 {
  constructor() {
    this.index = _0x40bf46.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x58800e = {
      limit: 0
    };
    const _0x195b97 = {
      Connection: "keep-alive"
    };
    const _0x1836ac = {
      retry: _0x58800e,
      timeout: _0x5cd32e,
      followRedirect: false,
      headers: _0x195b97
    };
    this.got = _0x5d84ef.extend(_0x1836ac);
  }
  get_prefix(_0x18fce1 = {}) {
    var _0x544435 = "",
      _0x3ed491 = _0x40bf46.userCount.toString().length;
    if (this.index) {
      _0x544435 += "账号[" + _0x40bf46.padStr(this.index, _0x3ed491) + "]";
    }
    if (this.name) {
      _0x544435 += "[" + this.name + "]";
    }
    return _0x544435;
  }
  log(_0x18a8d3, _0x3d0e89 = {}) {
    let _0xf3af9d = this.get_prefix();
    _0x40bf46.log(_0xf3af9d + _0x18a8d3, _0x3d0e89);
  }
  async request(_0x826f4e) {
    const _0x40136b = ["RequestError"],
      _0x599239 = ["TimeoutError"];
    let _0x45613e = _0x40bf46.copy(_0x826f4e),
      _0x34b561 = {};
    try {
      let _0xbe8d70 = null,
        _0x13894c = 0,
        _0x2303da = _0x45613e.fn || _0x45613e.url,
        _0x5c9906 = _0x45613e.valid_code || [200];
      if (_0x45613e.form) {
        for (let _0x521f79 in _0x45613e.form) {
          typeof _0x45613e.form[_0x521f79] == "object" && (_0x45613e.form[_0x521f79] = JSON.stringify(_0x45613e.form[_0x521f79]));
        }
      }
      _0x45613e.method = _0x45613e?.["method"]?.["toUpperCase"]() || "GET";
      let _0x1343e0 = _0x45613e.got_client || this.got;
      _0x45613e.debug_in && console.log(_0x45613e);
      while (_0x13894c < _0x52d2af) {
        if (_0x13894c > 0) {
          await _0x40bf46.wait(_0x1b9dd9 * _0x13894c);
          let _0x37f991 = _0x40bf46.get(_0x45613e, "retryer", null);
          if (_0x37f991) {
            let _0x5d8a60 = _0x40bf46.get(_0x45613e, "retryer_opt", {});
            await _0x37f991(_0x45613e, _0x5d8a60);
          }
        }
        _0x13894c++;
        let _0x3a0b15 = null;
        try {
          let _0x29e65d = Number(_0x45613e?.["timeout"]?.["request"] || _0x45613e?.["timeout"] || _0x5cd32e),
            _0x5adb7a = false,
            _0x303dd4 = Date.now(),
            _0x1377f6 = _0x1343e0(_0x45613e),
            _0x202787 = setTimeout(() => {
              _0x5adb7a = true;
              _0x1377f6.cancel();
            }, _0x29e65d);
          await _0x1377f6.then(_0x168c8d => {
            _0xbe8d70 = _0x168c8d;
          }, _0x36fb34 => {
            _0x3a0b15 = _0x36fb34;
            _0xbe8d70 = _0x36fb34.response;
          }).finally(() => clearTimeout(_0x202787));
          let _0x48ae63 = Date.now(),
            _0x206b57 = _0x48ae63 - _0x303dd4,
            _0x3ff5d5 = _0xbe8d70?.["statusCode"] || null;
          if (_0x5adb7a || _0x599239.includes(_0x3a0b15?.["name"])) {
            let _0x17b05a = "";
            _0x3a0b15?.["code"] && (_0x17b05a += "(" + _0x3a0b15.code, _0x3a0b15?.["event"] && (_0x17b05a += ":" + _0x3a0b15.event), _0x17b05a += ")");
            this.log("[" + _0x2303da + "]请求超时" + _0x17b05a + "(" + _0x206b57 + "ms)，重试第" + _0x13894c + "次");
          } else {
            if (_0x40136b.includes(_0x3a0b15?.["name"])) {
              this.log("[" + _0x2303da + "]请求错误(" + _0x3a0b15.code + ")(" + _0x206b57 + "ms)，重试第" + _0x13894c + "次");
            } else {
              if (_0x3ff5d5) {
                _0x3a0b15 && !_0x5c9906.includes(_0x3ff5d5) && this.log("请求[" + _0x2303da + "]返回[" + _0x3ff5d5 + "]");
              } else {
                let {
                  code = "unknown",
                  name = "unknown"
                } = _0x3a0b15 || {};
                this.log("请求[" + _0x2303da + "]错误[" + code + "][" + name + "]");
              }
              break;
            }
          }
        } catch (_0xe3c3ab) {
          this.log("[" + _0x2303da + "]请求错误(" + _0xe3c3ab.message + ")，重试第" + _0x13894c + "次");
        }
      }
      if (_0xbe8d70 === null || _0xbe8d70 === undefined) {
        const _0x521190 = {
          statusCode: -1,
          headers: null,
          result: null
        };
        return _0x521190;
      }
      let {
          statusCode: _0xbc3926,
          headers: _0x378385,
          body: _0xf2fcfe
        } = _0xbe8d70,
        _0x10d27c = _0x40bf46.get(_0x45613e, "decode_json", true);
      if (_0xf2fcfe && _0x10d27c) {
        try {
          _0xf2fcfe = JSON.parse(_0xf2fcfe);
        } catch {}
      }
      const _0x2dfde7 = {
        statusCode: _0xbc3926,
        headers: _0x378385,
        result: _0xf2fcfe
      };
      _0x34b561 = _0x2dfde7;
      _0x45613e.debug_out && console.log(_0x34b561);
    } catch (_0x1f745) {
      console.log(_0x1f745);
    } finally {
      return _0x34b561;
    }
  }
}
let _0x146007 = new _0xf154c1();
class _0x31f48a extends _0xf154c1 {
  constructor(_0x6f59d) {
    super();
    this.cticket = _0x6f59d;
    this.can_sign = true;
    this.cookieJar = new _0xdaebf0();
    this.cookieJar.setCookieSync("cticket=" + this.cticket + "; Domain=ctrip.com;", "https://m.ctrip.com");
    const _0x1aeef8 = {
      "User-Agent": _0x4784ac
    };
    this.got = this.got.extend({
      cookieJar: this.cookieJar,
      headers: _0x1aeef8
    });
  }
  get_common_body() {
    const _0x541b9c = {
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
    const _0x5b1b0f = {
      head: _0x541b9c
    };
    return _0x5b1b0f;
  }
  get_task_url(_0x52da0a) {
    let _0x2d9732 = _0x52da0a?.["appUrl"] || _0x52da0a?.["wechatUrl"] || _0x52da0a?.["h5Url"] || _0x52da0a?.["speedAppUrl"] || "";
    return _0x2d9732;
  }
  async getUserInfo(_0x33039e = {}) {
    let _0x42cc0e = false;
    try {
      const _0x37e9eb = {
        Key: "BizType",
        Value: "BASE"
      };
      const _0x11e4d8 = {
        key: "accountSubToMaster",
        value: "0"
      };
      const _0x4ab7c0 = {
        Key: "NeedBindInfo",
        Value: "1"
      };
      const _0x4f914e = {
        Key: "Self",
        Value: "1"
      };
      let _0x41b3fd = {
          fn: "getUserInfo",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/11838/getUserInfo",
          json: {
            parameterList: [_0x37e9eb, _0x11e4d8],
            queryConditionList: [_0x4ab7c0, _0x4f914e],
            needFullOrHalfAvatarUrl: "full",
            contentType: "json",
            ...this.get_common_body()
          }
        },
        {
          result: _0x533a41,
          statusCode: _0x366ef9
        } = await this.request(_0x41b3fd),
        _0x5e0522 = _0x40bf46.get(_0x533a41?.["result"], "resultCode", _0x366ef9);
      if (_0x5e0522 === 0) {
        let {
          nickName: _0x29f9ec,
          mobilePhone: _0x192619
        } = _0x533a41?.["thisUserInfo"];
        this.name = _0x192619 || _0x533a41?.["uID"] || _0x29f9ec;
        this.log("登陆成功");
        _0x42cc0e = true;
      } else {
        let _0x4c0d37 = _0x40bf46.get(_0x533a41?.["result"], "errMessage", "");
        this.log("获取账号信息失败[" + _0x5e0522 + "]: " + _0x4c0d37);
      }
    } catch (_0x35c716) {
      console.log(_0x35c716);
    } finally {
      return _0x42cc0e;
    }
  }
  async getuserbaseinfo(_0x12ddd0 = {}) {
    let _0x4811c3 = false;
    try {
      let _0xf879b0 = {
          fn: "getuserbaseinfo",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/28072/json/getuserbaseinfo",
          json: this.get_common_body()
        },
        {
          result: _0x38e326,
          statusCode: _0x367560
        } = await this.request(_0xf879b0),
        _0x3aec8b = _0x40bf46.get(_0x38e326, "resultCode", _0x367560);
      if (_0x3aec8b === 0) {
        let {
          uid: _0x1a3953,
          nickName: _0x1f17ce
        } = _0x38e326?.["userInfo"];
        this.uid = _0x1a3953;
        this.name = _0x1f17ce;
        this.log("登陆成功");
        _0x4811c3 = true;
      } else {
        let _0x231040 = _0x40bf46.get(_0x38e326, "resultMsg", "");
        this.log("获取账号信息失败[" + _0x3aec8b + "]: " + _0x231040);
      }
    } catch (_0x47d444) {
      console.log(_0x47d444);
    } finally {
      return _0x4811c3;
    }
  }
  async isTodaySign(_0x3b87e1 = {}) {
    try {
      let _0x362539 = {
          fn: "isTodaySign",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/22769/json/isTodaySign",
          json: this.get_common_body()
        },
        {
          result: _0x105761,
          statusCode: _0x1a7639
        } = await this.request(_0x362539),
        _0x14a340 = _0x40bf46.get(_0x105761, "code", _0x1a7639);
      if (_0x14a340 === 0) {
        let _0x202ad5 = _0x105761.sign;
        _0x202ad5 ? this.log("[积分签到]今天已签到") : await this.signToday();
      } else {
        let _0x94475c = _0x40bf46.get(_0x105761, "message", "");
        this.log("查询[积分签到]签到失败[" + _0x14a340 + "]: " + _0x94475c);
      }
    } catch (_0x4b9524) {
      console.log(_0x4b9524);
    }
  }
  async signToday(_0x48f01a = {}) {
    try {
      let _0x44d7d5 = {
          fn: "signToday",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/22769/signToday",
          json: this.get_common_body()
        },
        {
          result: _0x476a0b,
          statusCode: _0x1a3543
        } = await this.request(_0x44d7d5),
        _0x8a32f3 = _0x40bf46.get(_0x476a0b, "code", _0x1a3543);
      if (_0x8a32f3 === 0) {
        this.log("[积分签到]签到成功: " + _0x476a0b.baseIntegratedPoint + "积分, 已连签" + _0x476a0b.continueDay + "天");
      } else {
        let _0x4085c3 = _0x40bf46.get(_0x476a0b, "message", "");
        this.log("[积分签到]签到失败[" + _0x8a32f3 + "]: " + _0x4085c3);
        this.can_sign = false;
      }
    } catch (_0x38ff8b) {
      console.log(_0x38ff8b);
    }
  }
  async getSignDetail(_0x4d09ff, _0x47082b = {}) {
    try {
      let _0x5163b0 = {
          fn: "getSignDetail",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/22598/getSignDetail",
          json: {
            oAuthHead: {},
            channelCode: _0x4a4ee7[_0x4d09ff],
            rmsToken: "",
            platform: _0x40bf46.get(_0x47082b, "platform", "miniProgram"),
            version: _0x40bf46.get(_0x47082b, "version", "3"),
            osType: _0x40bf46.get(_0x47082b, "osType", "ios"),
            appVersion: "",
            ...this.get_common_body()
          }
        },
        {
          result: _0x175531,
          statusCode: _0x37a010
        } = await this.request(_0x5163b0),
        _0x5a67d2 = _0x40bf46.get(_0x175531, "code", _0x37a010);
      if (_0x5a67d2 === 0) {
        let _0x3e5ba1 = _0x175531.isSign;
        _0x3e5ba1 ? this.log("[" + _0x4d09ff + "]今天已签到") : await this.do_sign(_0x4d09ff);
      } else {
        let _0x26eb32 = _0x40bf46.get(_0x175531, "message", "");
        this.log("查询[" + _0x4d09ff + "]签到失败[" + _0x5a67d2 + "]: " + _0x26eb32);
      }
    } catch (_0x4e9130) {
      console.log(_0x4e9130);
    }
  }
  async do_sign(_0x28440a, _0x5e4c0d = {}) {
    try {
      let _0x51779c = {
          fn: "do_sign",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/22598/signToday",
          json: {
            oAuthHead: {},
            channelCode: _0x4a4ee7[_0x28440a],
            rmsToken: "",
            platform: _0x40bf46.get(_0x5e4c0d, "platform", "miniProgram"),
            version: _0x40bf46.get(_0x5e4c0d, "version", "3"),
            osType: _0x40bf46.get(_0x5e4c0d, "osType", "ios"),
            appVersion: "",
            ...this.get_common_body()
          }
        },
        {
          result: _0xaed788,
          statusCode: _0x3eaded
        } = await this.request(_0x51779c),
        _0x354f75 = _0x40bf46.get(_0xaed788, "code", _0x3eaded);
      if (_0x354f75 === 0) {
        this.log("[" + _0x28440a + "]签到成功: " + _0xaed788.awardDesc);
      } else {
        let _0xa5d0b8 = _0x40bf46.get(_0xaed788, "message", "");
        this.log("[" + _0x28440a + "]签到失败[" + _0x354f75 + "]: " + _0xa5d0b8);
      }
    } catch (_0x2cc2e4) {
      console.log(_0x2cc2e4);
    }
  }
  async carveUpPointsGetActivityInfo(_0x5bb4d0 = {}) {
    try {
      let _0x3e845a = {
          fn: "carveUpPointsGetActivityInfo",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/14347/carveUpPointsGetActivityInfo",
          json: {
            activityId: _0x285df4["签到打卡"],
            ...this.get_common_body()
          }
        },
        {
          result: _0x5afa2b,
          statusCode: _0x37e659
        } = await this.request(_0x3e845a),
        _0x595a06 = _0x40bf46.get(_0x5afa2b, "errCode", _0x37e659);
      if (_0x595a06 === 0) {
        let _0x42a1d4 = _0x5afa2b?.["result"]?.["haveBet"];
        _0x42a1d4 ? this.log("已投注参与明天签到打卡") : this.can_sign ? await this.carveUpPointsBet() : this.log("签到失败了, 不投注打卡");
      } else {
        let _0x575ee5 = _0x40bf46.get(_0x5afa2b, "errMsg", "");
        this.log("查询投注签到打卡状态失败[" + _0x595a06 + "]: " + _0x575ee5);
      }
    } catch (_0x17dbe4) {
      console.log(_0x17dbe4);
    }
  }
  async carveUpPointsBet(_0x5d0cd0 = {}) {
    try {
      let _0x4ff5dc = {
          fn: "carveUpPointsBet",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/14347/carveUpPointsBet",
          json: {
            activityId: "MKT_SIGN_1677748235121",
            ...this.get_common_body()
          }
        },
        {
          result: _0x3e858b,
          statusCode: _0x3a160b
        } = await this.request(_0x4ff5dc),
        _0x37104a = _0x40bf46.get(_0x3e858b, "errCode", _0x3a160b);
      if (_0x37104a === 0) {
        this.log("投注参与明天签到打卡成功");
      } else {
        let _0x38e064 = _0x40bf46.get(_0x3e858b, "errMsg", "");
        this.log("投注参与明天签到打卡失败[" + _0x37104a + "]: " + _0x38e064);
      }
    } catch (_0x238824) {
      console.log(_0x238824);
    }
  }
  async userTaskList(_0x2b071d, _0x280d36, _0x4575a0, _0x419d85, _0x26b479 = {}) {
    try {
      let _0x2ce181 = _0x1343b8[_0x4575a0];
      const _0x287eeb = {
        mktTaskSort: ""
      };
      let _0x358a37 = {
          fn: "userTaskList",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/22598/userTaskList",
          json: {
            channelCode: _0x2ce181,
            extMap: _0x287eeb,
            oAuthHead: {},
            platform: _0x2b071d,
            rmsToken: "",
            version: _0x280d36,
            osType: "ios",
            appVersion: "",
            subOsType: "iphone",
            ...this.get_common_body()
          }
        },
        {
          result: _0xf9112a,
          statusCode: _0x1baaad
        } = await this.request(_0x358a37),
        _0x188ac7 = _0x40bf46.get(_0xf9112a, "code", _0x1baaad);
      if (_0x188ac7 === 200) {
        let _0x497773 = _0xf9112a?.["todoTaskList"] || [],
          _0x43daae = _0xf9112a?.["finishTaskList"] || [],
          _0x52ff0b = _0x43daae.concat(_0x497773);
        for (let _0x16f640 of _0x52ff0b) {
          if (_0x419d85.map(_0xcce8f0 => _0xcce8f0.id).includes(_0x16f640.id)) {
            continue;
          }
          let _0x15567e = "未知状态" + _0x16f640.status;
          switch (_0x16f640.status) {
            case 0:
              {
                _0x15567e = "未接受";
                break;
              }
            case 1:
              {
                _0x15567e = "未完成";
                break;
              }
            case 2:
              {
                _0x15567e = "可领取奖励";
                break;
              }
            case 3:
              {
                _0x15567e = "已领取奖励";
                break;
              }
          }
          _0x419d85.push(_0x16f640);
          this.log("任务[" + _0x16f640.displayName + "]" + _0x15567e);
        }
      } else {
        let _0x54f2e3 = _0x40bf46.get(_0xf9112a, "message", "");
        this.log("查询[" + _0x4575a0 + "][platform:" + _0x2b071d + "][version:" + _0x280d36 + "]任务失败[" + _0x188ac7 + "]: " + _0x54f2e3);
      }
    } catch (_0x5af573) {
      console.log(_0x5af573);
    }
  }
  async process_tasklist(_0x12ef38, _0x204d11, _0x434641 = {}) {
    try {
      let _0x58a140 = _0x1343b8[_0x12ef38];
      for (let _0xb06216 of _0x204d11) {
        if (_0xb06216?.["displayName"]?.["includes"]("兑换")) {
          continue;
        }
        switch (_0xb06216.status) {
          case 0:
            {
              await this.todoTask(_0x58a140, _0xb06216);
              break;
            }
          case 1:
            {
              await this.doTask(_0x58a140, _0xb06216);
              break;
            }
          case 2:
            {
              await this.awardTask(_0x58a140, _0xb06216);
              break;
            }
          case 3:
            {
              break;
            }
        }
      }
    } catch (_0x2cf131) {
      console.log(_0x2cf131);
    }
  }
  async todoTask(_0x3e8d3d, _0x139002, _0xe01fdb = {}) {
    try {
      let _0x19326c = {
          fn: "todoTask",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/22598/todoTask",
          json: {
            channelCode: _0x3e8d3d,
            taskId: _0x139002.id,
            status: 0,
            done: 0,
            ...this.get_common_body()
          }
        },
        {
          result: _0x30f577,
          statusCode: _0x4f7aaf
        } = await this.request(_0x19326c),
        _0x2a003b = _0x40bf46.get(_0x30f577, "code", _0x4f7aaf);
      if (_0x2a003b === 200) {
        this.log("接受任务[" + _0x139002.displayName + "]成功");
        await this.doTask(_0x3e8d3d, _0x139002);
      } else {
        let _0x41d974 = _0x40bf46.get(_0x30f577, "message", "");
        this.log("接受任务[" + _0x139002.displayName + "]失败[" + _0x2a003b + "]: " + _0x41d974);
      }
    } catch (_0x5ba529) {
      console.log(_0x5ba529);
    }
  }
  async doTask(_0x3f3448, _0x280eb7, _0x272aa4 = {}) {
    try {
      switch (_0x280eb7.eventType) {
        case "NO_REPEAT_BROWSE":
          {
            await this.taskBrowseDone(_0x3f3448, _0x280eb7);
            break;
          }
        case "TRIP_SHOOT_PLANET_FOLLOW":
          {
            await this.planet_follow(_0x3f3448, _0x280eb7);
            break;
          }
        case "TRIP_SHOOT_PLANET_LIKE":
          {
            break;
          }
        case "BU_ACTIVITY":
          {
            let _0x28a75d = _0x280eb7.eventCondition ? JSON.parse(_0x280eb7.eventCondition) : null;
            switch (_0x28a75d?.["buActivityType"]) {
              case "MKT_2023_YO_DUOBAO":
                {
                  await this.yo_vote_task(_0x3f3448, _0x280eb7);
                  break;
                }
              default:
                {
                  this.log("任务[" + _0x280eb7.displayName + "]: 未支持的[BU_ACTIVITY]类型[" + _0x28a75d?.["buActivityType"] + "]");
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
            this.log("任务[" + _0x280eb7.displayName + "]: 未支持的类型[" + _0x280eb7.eventType + "]");
            break;
          }
        default:
          {
            await this.todoTask_done(_0x3f3448, _0x280eb7);
            break;
          }
      }
    } catch (_0x4e6928) {
      console.log(_0x4e6928);
    }
  }
  async todoTask_done(_0x2c4314, _0x22f4f7, _0xaf8bf9 = {}) {
    try {
      let _0x42c91a = {
          fn: "todoTask_done",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/22598/todoTask",
          json: {
            channelCode: _0x2c4314,
            taskId: _0x22f4f7.id,
            status: 1,
            done: 1,
            ...this.get_common_body()
          }
        },
        {
          result: _0x5650b4,
          statusCode: _0x54cc27
        } = await this.request(_0x42c91a),
        _0x136852 = _0x40bf46.get(_0x5650b4, "code", _0x54cc27);
      if (_0x136852 === 200) {
        this.log("完成任务[" + _0x22f4f7.displayName + "]成功");
        await this.awardTask(_0x2c4314, _0x22f4f7, _0xaf8bf9);
      } else {
        let _0x474330 = _0x40bf46.get(_0x5650b4, "message", "");
        this.log("完成任务[" + _0x22f4f7.displayName + "][" + _0x22f4f7.eventType + "]失败[" + _0x136852 + "]: " + _0x474330);
      }
    } catch (_0xaaf5b6) {
      console.log(_0xaaf5b6);
    }
  }
  async awardTask(_0x2a4f7, _0x30ec70, _0x39c418 = {}) {
    try {
      let _0x1382e7 = {
          fn: "awardTask",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/22598/awardTask",
          json: {
            channelCode: _0x2a4f7,
            taskId: _0x30ec70.id,
            ...this.get_common_body()
          }
        },
        {
          result: _0x185128,
          statusCode: _0x4c66cd
        } = await this.request(_0x1382e7),
        _0x5c0d3c = _0x40bf46.get(_0x185128, "code", _0x4c66cd);
      if (_0x5c0d3c === 200) {
        this.log("领取任务[" + _0x30ec70.displayName + "]奖励: " + _0x185128?.["awardDesc"]);
      } else {
        let _0x3eb92a = _0x40bf46.get(_0x185128, "message", "");
        this.log("领取任务[" + _0x30ec70.displayName + "]奖励失败[" + _0x5c0d3c + "]: " + _0x3eb92a);
      }
    } catch (_0x284095) {
      console.log(_0x284095);
    }
  }
  async taskBrowseDone(_0xd5c933, _0x325059, _0xe81e1a = {}) {
    try {
      let _0xaf17c6 = JSON.parse(_0x325059.eventCondition),
        _0xe329b9 = {
          fn: "taskBrowseDone",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/22598/taskBrowseDone",
          json: {
            _taskDetailId: this.get_task_url(_0x325059),
            _mktTaskActivityId: _0xaf17c6?.["_mktTaskActivityId"]
          }
        },
        {
          result: _0x2f6202,
          statusCode: _0x118a8d
        } = await this.request(_0xe329b9),
        _0x532e43 = _0x40bf46.get(_0x2f6202, "code", _0x118a8d);
      if (_0x532e43 === 200) {
        this.log("完成任务[" + _0x325059.displayName + "]成功");
        await this.awardTask(_0xd5c933, _0x325059, _0xe81e1a);
      } else {
        let _0x3103fd = _0x40bf46.get(_0x2f6202, "message", "");
        this.log("完成任务[" + _0x325059.displayName + "]失败[" + _0x532e43 + "]: " + _0x3103fd);
      }
    } catch (_0x8079e2) {
      console.log(_0x8079e2);
    }
  }
  async planet_follow(_0x4e5910, _0x51cd63, _0x1f7480 = {}) {
    try {
      let _0x34f11a = new URL(this.get_task_url(_0x51cd63)),
        _0x43bc90 = _0x34f11a.searchParams.get("clientAuth"),
        _0x5d7e69 = {
          fn: "planet_follow",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/16225/json/attention",
          json: {
            starCtripUid: _0x43bc90,
            ...this.get_common_body()
          }
        },
        {
          result: _0x587c58,
          statusCode: _0x2c13d7
        } = await this.request(_0x5d7e69),
        _0x40a12e = _0x40bf46.get(_0x587c58, "code", _0x2c13d7);
      if (_0x40a12e === 200) {
        this.log("完成任务[" + _0x51cd63.displayName + "]成功");
        await this.awardTask(_0x4e5910, _0x51cd63, _0x1f7480);
      } else {
        let _0x564705 = _0x40bf46.get(_0x587c58, "message", "");
        this.log("完成任务[" + _0x51cd63.displayName + "]失败[" + _0x40a12e + "]: " + _0x564705);
      }
    } catch (_0x3dd155) {
      console.log(_0x3dd155);
    }
  }
  async planet_like(_0x3a8700, _0x39c6c0 = {}) {
    try {
      let _0x511642 = {
          fn: "planet_like",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/14045/json/action",
          json: {
            action: "like",
            targetId: _0x3a8700,
            targetType: "article",
            ...this.get_common_body()
          }
        },
        {
          result: _0x5d5fc2,
          statusCode: _0x4d9dc2
        } = await this.request(_0x511642);
      _0x5d5fc2?.["result"]?.["result"] ? this.log("星球任务点赞[" + _0x3a8700 + "]成功") : this.log("星球任务点赞[" + _0x3a8700 + "]失败");
    } catch (_0x493fcf) {
      console.log(_0x493fcf);
    }
  }
  async yo_vote_task(_0x5a9dfb, _0x294a89, _0x52e4be = {}) {
    try {
      let _0x31cd91 = "3",
        _0x525c77 = "miniProgram",
        _0x349fda = await this.playingYoTicketActivityQuery(_0x31cd91, _0x525c77);
      if (_0x349fda?.["length"]) {
        let _0x47ea6b = null,
          _0x5e91fa = _0x349fda.filter(_0x4dfe0b => _0x4dfe0b?.["activityName"]?.["match"](/\d+积分/));
        _0x5e91fa.length ? _0x47ea6b = _0x5e91fa[0] : _0x47ea6b = _0x40bf46.randomList(_0x349fda);
        let _0x494134 = Math.floor(Math.random() * 1000) + 1;
        (await this.yoTicketVote(_0x31cd91, _0x525c77, _0x47ea6b, [_0x494134])) && (await this.awardTask(_0x5a9dfb, _0x294a89, _0x52e4be));
      }
    } catch (_0x46cf9b) {
      console.log(_0x46cf9b);
    }
  }
  async getWaterflowInfo(_0x56b868, _0x425263, _0x472622 = {}) {
    try {
      const _0x2133fb = {
        size: 15,
        index: 1
      };
      let _0x4e89e6 = {
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
            pageInfo: _0x2133fb,
            coordinate: {},
            conf: {},
            ext: {},
            selectedFastFilters: [],
            selectedTabs: [],
            ...this.get_common_body()
          }
        },
        {
          result: _0x1bbda1,
          statusCode: _0x1406dc
        } = await this.request(_0x4e89e6);
      if (_0x1bbda1?.["data"]?.["items"]) {
        for (let _0x1a6a74 of _0x1bbda1?.["data"]?.["items"] || []) {
          let _0x3f5608 = JSON.parse(_0x1a6a74);
          await this.planet_like(_0x3f5608.id);
        }
        await this.awardTask(_0x56b868, _0x425263, _0x472622);
      } else {
        this.log("获取星球点赞文章失败");
      }
    } catch (_0x8ce79a) {
      console.log(_0x8ce79a);
    }
  }
  async playingYoTicketActivityQuery(_0x5961d2, _0x102c53, _0x4963d2 = {}) {
    let _0x4de29e = [];
    try {
      let _0x2647d8 = {
          fn: "playingYoTicketActivityQuery",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/18083/playingYoTicketActivityQuery",
          json: {
            version: _0x5961d2,
            platform: _0x102c53,
            osType: "ios",
            ...this.get_common_body()
          }
        },
        {
          result: _0x598955,
          statusCode: _0x503cc0
        } = await this.request(_0x2647d8),
        _0xad733f = _0x40bf46.get(_0x598955, "errcode", _0x503cc0);
      if (_0xad733f === 0) {
        _0x4de29e = _0x598955?.["activityList"] || [];
      } else {
        let _0x562055 = _0x40bf46.get(_0x598955, "errmsg", "");
        this.log("获取YO票夺宝列表失败[" + _0xad733f + "]: " + _0x562055);
      }
    } catch (_0xddf07f) {
      console.log(_0xddf07f);
    } finally {
      return _0x4de29e;
    }
  }
  async yoTicketVote(_0x5b3be3, _0xdd1270, _0x3d83ba, _0x559c45, _0x408fcc = {}) {
    let _0x1cb14e = false;
    try {
      let _0x33923a = {
          fn: "yoTicketVote",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/18083/yoTicketVote",
          json: {
            voteNumberList: _0x559c45,
            activityId: _0x3d83ba.activityId,
            openId: "",
            version: _0x5b3be3,
            platform: _0xdd1270,
            osType: "ios",
            ...this.get_common_body()
          }
        },
        {
          result: _0x1a9621,
          statusCode: _0x1d2c03
        } = await this.request(_0x33923a),
        _0x4d78a7 = _0x40bf46.get(_0x1a9621, "errcode", _0x1d2c03);
      if (_0x4d78a7 === 0) {
        this.log("投票夺宝[" + _0x3d83ba.activityName + "]成功: " + _0x559c45.join(","));
        _0x1cb14e = true;
      } else {
        let _0x317ff7 = _0x40bf46.get(_0x1a9621, "errmsg", "");
        this.log("投票夺宝[" + _0x3d83ba.activityName + "]失败[" + _0x4d78a7 + "]: " + _0x317ff7);
      }
    } catch (_0x610e0b) {
      console.log(_0x610e0b);
    } finally {
      return _0x1cb14e;
    }
  }
  async getZzlUserCard(_0x4f7c1f = {}) {
    try {
      let _0x1dd73c = {
          fn: "getZzlUserCard",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/16575/getZzlUserCard",
          json: {
            activityId: _0x285df4["周周乐"],
            periodNum: "",
            pageNo: 1,
            pageSize: 100,
            ...this.get_common_body()
          }
        },
        {
          result: _0x254322,
          statusCode: _0x442a43
        } = await this.request(_0x1dd73c),
        _0x31d01b = _0x40bf46.get(_0x254322, "errCode", _0x442a43);
      if (_0x31d01b === 0) {
        let {
          chanceNum: _0x134070
        } = _0x254322;
        this.log("周周乐可以抽卡" + _0x134070 + "次");
        while (_0x134070-- > 0) {
          await this.sendZzlCardToUser();
        }
      } else {
        let _0x5690e5 = _0x40bf46.get(_0x254322, "resultmessage", "");
        this.log("查询周周乐抽卡次数失败[" + _0x31d01b + "]: " + _0x5690e5);
      }
    } catch (_0x318b37) {
      console.log(_0x318b37);
    }
  }
  async sendZzlCardToUser(_0x4b19f5 = {}) {
    try {
      let _0x10717d = {
          fn: "sendZzlCardToUser",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/16575/sendZzlCardToUser",
          json: {
            openId: "",
            activityId: "MKT_LOTTERY_1616744889859",
            ...this.get_common_body()
          }
        },
        {
          result: _0x553975,
          statusCode: _0x3d08f0
        } = await this.request(_0x10717d),
        _0x178948 = _0x40bf46.get(_0x553975, "errCode", _0x3d08f0);
      if (_0x178948 === 0) {
        this.log("周周乐抽卡成功");
      } else {
        let _0x58cc01 = _0x40bf46.get(_0x553975, "resultmessage", "");
        this.log("周周乐抽卡失败[" + _0x178948 + "]: " + _0x58cc01);
      }
    } catch (_0x30d049) {
      console.log(_0x30d049);
    }
  }
  async userBaseInfo(_0x3a5579 = {}) {
    try {
      let _0xab1708 = {
          fn: "userBaseInfo",
          method: "post",
          url: "https://m.ctrip.com/restapi/soa2/21778/userBaseInfo",
          json: this.get_common_body()
        },
        {
          result: _0x484365,
          statusCode: _0x44f15d
        } = await this.request(_0xab1708),
        _0x599bf3 = _0x40bf46.get(_0x484365, "resultcode", _0x44f15d);
      if (_0x599bf3 === 0) {
        let {
          memberpoint: _0x30c502
        } = _0x484365;
        const _0xe9c2d6 = {
          notify: true
        };
        this.log("积分: " + _0x30c502, _0xe9c2d6);
      } else {
        let _0x64c39e = _0x40bf46.get(_0x484365, "resultmessage", "");
        this.log("查询积分失败[" + _0x599bf3 + "]: " + _0x64c39e);
      }
    } catch (_0x45f222) {
      console.log(_0x45f222);
    }
  }
  async get_task(_0xc2fc93, _0x543496 = {}) {
    _0x40bf46.log("\n--------------------------------");
    this.log("---> 查询[" + _0xc2fc93 + "]任务");
    let _0x578324 = [];
    for (let _0x141e37 of _0x189447) {
      for (let _0x4fa09f of _0x270b92) {
        await this.userTaskList(_0x141e37, _0x4fa09f, _0xc2fc93, _0x578324);
      }
    }
    let _0x3efead = _0x578324?.["filter"](_0x3db341 => _0x3db341.status < 3)?.["length"] || 0;
    _0x3efead > 0 && (this.log("---> 开始做[" + _0xc2fc93 + "]任务"), await this.process_tasklist(_0xc2fc93, _0x578324));
  }
  async userTask(_0x17b3ee = {}) {
    _0x40bf46.log("\n-------------- 账号[" + this.index + "] --------------");
    if (!(await this.getUserInfo())) {
      return;
    }
    await this.isTodaySign();
    for (let _0x827165 of Object.keys(_0x4a4ee7)) {
      await this.getSignDetail(_0x827165);
    }
    await this.carveUpPointsGetActivityInfo();
    for (let _0x129ead of Object.keys(_0x1343b8)) {
      await this.get_task(_0x129ead);
    }
    _0x40bf46.log("\n---------------- 周周乐 ---------------");
    await this.getZzlUserCard();
    _0x40bf46.log("\n---------------- 查询推送 ---------------");
    await this.userBaseInfo();
  }
}
!(async () => {
  if (!(await _0x23a62a())) {
    return;
  }
  _0x40bf46.read_env(_0x31f48a);
  for (let _0x21087b of _0x40bf46.userList) {
    await _0x21087b.userTask();
  }
})().catch(_0x315609 => _0x40bf46.log(_0x315609)).finally(() => _0x40bf46.exitNow());
async function _0x23a62a(_0x2e6029 = 0) {
  let _0x16626e = false;
  try {
    let _0x561ea6 = {
        fn: "auth",
        method: "get",
        url: _0x45eccb,
        timeout: 20000
      },
      {
        statusCode: _0x35029a,
        result: _0x1a5663
      } = await _0x146007.request(_0x561ea6);
    if (_0x35029a != 200) {
      _0x2e6029++ < MAX_AUTH_RETRY && (_0x16626e = await _0x23a62a(_0x2e6029));
      return _0x16626e;
    }
    if (_0x1a5663?.["code"] == 0) {
      _0x1a5663 = JSON.parse(_0x1a5663.data.file.data);
      if (_0x1a5663?.["commonNotify"] && _0x1a5663.commonNotify.length > 0) {
        const _0x1c3f34 = {
          notify: true
        };
        _0x40bf46.log(_0x1a5663.commonNotify.join("\n") + "\n", _0x1c3f34);
      }
      _0x1a5663?.["commonMsg"] && _0x1a5663.commonMsg.length > 0 && _0x40bf46.log(_0x1a5663.commonMsg.join("\n") + "\n");
      if (_0x1a5663[_0x30e889]) {
        let _0x3fe24e = _0x1a5663[_0x30e889];
        _0x3fe24e.status == 0 ? _0x4db2c0 >= _0x3fe24e.version ? (_0x16626e = true, _0x40bf46.log(_0x3fe24e.msg[_0x3fe24e.status]), _0x40bf46.log(_0x3fe24e.updateMsg), _0x40bf46.log("现在运行的脚本版本是：" + _0x4db2c0 + "，最新脚本版本：" + _0x3fe24e.latestVersion)) : _0x40bf46.log(_0x3fe24e.versionMsg) : _0x40bf46.log(_0x3fe24e.msg[_0x3fe24e.status]);
      } else {
        _0x40bf46.log(_0x1a5663.errorMsg);
      }
    } else {
      _0x2e6029++ < MAX_AUTH_RETRY && (_0x16626e = await _0x23a62a(_0x2e6029));
    }
  } catch (_0x9aa344) {
    _0x40bf46.log(_0x9aa344);
  } finally {
    return _0x16626e;
  }
}
function _0x35a552(_0x14eb08) {
  return new class {
    constructor(_0x4416e8) {
      this.name = _0x4416e8;
      this.startTime = Date.now();
      const _0x455a20 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x455a20);
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
    log(_0x44febf, _0x51dc1b = {}) {
      let _0x43a7f8 = {
        console: true
      };
      Object.assign(_0x43a7f8, _0x51dc1b);
      if (_0x43a7f8.time) {
        let _0x5cc230 = _0x43a7f8.fmt || "hh:mm:ss";
        _0x44febf = "[" + this.time(_0x5cc230) + "]" + _0x44febf;
      }
      if (_0x43a7f8.notify) {
        this.notifyStr.push(_0x44febf);
      }
      if (_0x43a7f8.console) {
        console.log(_0x44febf);
      }
    }
    get(_0x16e349, _0x384de8, _0x2c451e = "") {
      let _0x3e62f5 = _0x2c451e;
      _0x16e349?.["hasOwnProperty"](_0x384de8) && (_0x3e62f5 = _0x16e349[_0x384de8]);
      return _0x3e62f5;
    }
    pop(_0x516799, _0x1785e3, _0x2bdc34 = "") {
      let _0x2867a8 = _0x2bdc34;
      _0x516799?.["hasOwnProperty"](_0x1785e3) && (_0x2867a8 = _0x516799[_0x1785e3], delete _0x516799[_0x1785e3]);
      return _0x2867a8;
    }
    copy(_0x30b754) {
      return Object.assign({}, _0x30b754);
    }
    read_env(_0x2e1fab) {
      let _0x4c4b6c = _0x16b47b.map(_0x57c462 => process.env[_0x57c462]);
      for (let _0x4dc517 of _0x4c4b6c.filter(_0x4d0640 => !!_0x4d0640)) {
        for (let _0x2d1a83 of _0x4dc517.split(_0x341da7).filter(_0x3bd591 => !!_0x3bd591)) {
          this.userList.push(new _0x2e1fab(_0x2d1a83));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x569830 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x16b47b.map(_0x28e264 => "[" + _0x28e264 + "]").join("或"), _0x569830);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x21e3d0, _0x371b92 = null) {
      let _0x40a891 = _0x371b92 ? new Date(_0x371b92) : new Date(),
        _0x4c4a73 = {
          "M+": _0x40a891.getMonth() + 1,
          "d+": _0x40a891.getDate(),
          "h+": _0x40a891.getHours(),
          "m+": _0x40a891.getMinutes(),
          "s+": _0x40a891.getSeconds(),
          "q+": Math.floor((_0x40a891.getMonth() + 3) / 3),
          S: this.padStr(_0x40a891.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x21e3d0) && (_0x21e3d0 = _0x21e3d0.replace(RegExp.$1, (_0x40a891.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3a192e in _0x4c4a73) new RegExp("(" + _0x3a192e + ")").test(_0x21e3d0) && (_0x21e3d0 = _0x21e3d0.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4c4a73[_0x3a192e] : ("00" + _0x4c4a73[_0x3a192e]).substr(("" + _0x4c4a73[_0x3a192e]).length)));
      return _0x21e3d0;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      try {
        var _0x134e12 = require("./sendNotify");
        this.log("\n============== 推送 ==============");
        await _0x134e12.sendNotify(this.name, this.notifyStr.join("\n"));
      } catch {
        this.log("\n=================================");
        this.log("读取推送依赖[sendNotify.js]失败, 请检查同目录下是否有依赖");
      }
    }
    padStr(_0x1b1f9b, _0x41022b, _0x585594 = {}) {
      let _0x2b94b7 = _0x585594.padding || "0",
        _0x41f43e = _0x585594.mode || "l",
        _0x152d89 = String(_0x1b1f9b),
        _0x5d0c3a = _0x41022b > _0x152d89.length ? _0x41022b - _0x152d89.length : 0,
        _0x377234 = "";
      for (let _0x28beb5 = 0; _0x28beb5 < _0x5d0c3a; _0x28beb5++) {
        _0x377234 += _0x2b94b7;
      }
      _0x41f43e == "r" ? _0x152d89 = _0x152d89 + _0x377234 : _0x152d89 = _0x377234 + _0x152d89;
      return _0x152d89;
    }
    json2str(_0x213ac6, _0x2d15ca, _0x2440c8 = false) {
      let _0x36a4c8 = [];
      for (let _0x50eb3c of Object.keys(_0x213ac6).sort()) {
        let _0x1b17c4 = _0x213ac6[_0x50eb3c];
        if (_0x1b17c4 && _0x2440c8) {
          _0x1b17c4 = encodeURIComponent(_0x1b17c4);
        }
        _0x36a4c8.push(_0x50eb3c + "=" + _0x1b17c4);
      }
      return _0x36a4c8.join(_0x2d15ca);
    }
    str2json(_0x4bb1d9, _0x5ab66a = false) {
      let _0x44ef37 = {};
      for (let _0x17feff of _0x4bb1d9.split("&")) {
        if (!_0x17feff) {
          continue;
        }
        let _0x493ac8 = _0x17feff.indexOf("=");
        if (_0x493ac8 == -1) {
          continue;
        }
        let _0x568de7 = _0x17feff.substr(0, _0x493ac8),
          _0x4e5890 = _0x17feff.substr(_0x493ac8 + 1);
        if (_0x5ab66a) {
          _0x4e5890 = decodeURIComponent(_0x4e5890);
        }
        _0x44ef37[_0x568de7] = _0x4e5890;
      }
      return _0x44ef37;
    }
    randomPattern(_0x1cf18f, _0x1de012 = "abcdef0123456789") {
      let _0x3bd110 = "";
      for (let _0x3395ae of _0x1cf18f) {
        if (_0x3395ae == "x") {
          _0x3bd110 += _0x1de012.charAt(Math.floor(Math.random() * _0x1de012.length));
        } else {
          _0x3395ae == "X" ? _0x3bd110 += _0x1de012.charAt(Math.floor(Math.random() * _0x1de012.length)).toUpperCase() : _0x3bd110 += _0x3395ae;
        }
      }
      return _0x3bd110;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x13934a, _0x5c67df = "abcdef0123456789") {
      let _0x198925 = "";
      for (let _0x494456 = 0; _0x494456 < _0x13934a; _0x494456++) {
        _0x198925 += _0x5c67df.charAt(Math.floor(Math.random() * _0x5c67df.length));
      }
      return _0x198925;
    }
    randomList(_0x176155) {
      let _0x4e1404 = Math.floor(Math.random() * _0x176155.length);
      return _0x176155[_0x4e1404];
    }
    wait(_0x3e4873) {
      return new Promise(_0x50c124 => setTimeout(_0x50c124, _0x3e4873));
    }
    async exitNow() {
      await this.showmsg();
      let _0x57d571 = Date.now(),
        _0x17a15b = (_0x57d571 - this.startTime) / 1000;
      this.log("");
      const _0xf798cd = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x17a15b + "秒", _0xf798cd);
      process.exit(0);
    }
    normalize_time(_0x4a4899, _0x25c26a = {}) {
      let _0x96c06a = _0x25c26a.len || this.default_timestamp_len;
      _0x4a4899 = _0x4a4899.toString();
      let _0xa985c8 = _0x4a4899.length;
      while (_0xa985c8 < _0x96c06a) {
        _0x4a4899 += "0";
      }
      _0xa985c8 > _0x96c06a && (_0x4a4899 = _0x4a4899.slice(0, 13));
      return parseInt(_0x4a4899);
    }
    async wait_until(_0x34bf2a, _0x15aeaf = {}) {
      let _0x364ba4 = _0x15aeaf.logger || this,
        _0x47173f = _0x15aeaf.interval || this.default_wait_interval,
        _0x1d638a = _0x15aeaf.limit || this.default_wait_limit,
        _0x2b20a7 = _0x15aeaf.ahead || this.default_wait_ahead;
      if (typeof _0x34bf2a == "string" && _0x34bf2a.includes(":")) {
        if (_0x34bf2a.includes("-")) {
          _0x34bf2a = new Date(_0x34bf2a).getTime();
        } else {
          let _0xea5b27 = this.time("yyyy-MM-dd ");
          _0x34bf2a = new Date(_0xea5b27 + _0x34bf2a).getTime();
        }
      }
      let _0x259012 = this.normalize_time(_0x34bf2a) - _0x2b20a7,
        _0x491142 = this.time("hh:mm:ss.S", _0x259012),
        _0x1dfccd = Date.now();
      _0x1dfccd > _0x259012 && (_0x259012 += 86400000);
      let _0x3c5d8a = _0x259012 - _0x1dfccd;
      if (_0x3c5d8a > _0x1d638a) {
        const _0x5b09bd = {
          time: true
        };
        _0x364ba4.log("离目标时间[" + _0x491142 + "]大于" + _0x1d638a / 1000 + "秒,不等待", _0x5b09bd);
      } else {
        const _0x1c799c = {
          time: true
        };
        _0x364ba4.log("离目标时间[" + _0x491142 + "]还有" + _0x3c5d8a / 1000 + "秒,开始等待", _0x1c799c);
        while (_0x3c5d8a > 0) {
          let _0x1ff067 = Math.min(_0x3c5d8a, _0x47173f);
          await this.wait(_0x1ff067);
          _0x1dfccd = Date.now();
          _0x3c5d8a = _0x259012 - _0x1dfccd;
        }
        const _0x5453cf = {
          time: true
        };
        _0x364ba4.log("已完成等待", _0x5453cf);
      }
    }
    async wait_gap_interval(_0x51add8, _0x162bf3) {
      let _0x4839c7 = Date.now() - _0x51add8;
      _0x4839c7 < _0x162bf3 && (await this.wait(_0x162bf3 - _0x4839c7));
    }
  }(_0x14eb08);
}