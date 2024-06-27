const _0x5f00b5 = _0x5b30bc("太平通"),
  _0x5bbd51 = require("got"),
  _0x58ebaa = require("crypto"),
  _0x2f8eee = "tpt",
  _0x260134 = /[\n\&\@]/,
  _0x36b5da = [_0x2f8eee + "Cookie"],
  _0x6e5c25 = 20000,
  _0x39aaf8 = 3;
const _0x1bbe9e = 1.01,
  _0x30d839 = "tpt",
  _0x5dbce6 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x28b094 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;yuangongejia#ios#kehutong#CZBIOS";
let _0x560acf = "";
const _0x43586e = "andh2008",
  _0x437263 = ["c21efc7a3a1143dbb4f7153f4f86f9ec", "5e568fc735ee43d88b8ef21ede710d95", "cec802f688c141a89f54b7ab293a5bf9", "16380925306613080", "26a01a8935be444782bddecb81544d82", "16380925697608952", "16382541378969738", "16382541050472997", "16382541529132238"],
  _0x1777b6 = 2000,
  _0x3c4b28 = 5;
const _0x44a3a3 = {
  height: 667,
  width: 375
};
function _0x50719f() {
  if (!_0x560acf) {
    let _0x8aa8ec = 0,
      _0x2d1177 = _0x28b094.match(/.{1,4}/g);
    for (let _0x4c11b3 of _0x2d1177) {
      let _0xda0854 = _0x4c11b3.split("").map(_0x4cca8b => _0x4cca8b.charCodeAt(0)).reverse(),
        _0x54eb62 = 0;
      for (let _0x5c66e0 = 0; _0x5c66e0 < _0xda0854.length; _0x5c66e0++) {
        _0x54eb62 |= _0xda0854[_0x5c66e0] << 8 * _0x5c66e0;
      }
      _0x8aa8ec = _0x8aa8ec ^ _0x54eb62;
    }
    _0x560acf = _0x8aa8ec.toString(16);
  }
  return _0x560acf;
}
function _0x1907fa() {
  let _0x3cce3d = [];
  _0x3cce3d.push(Date.now().toString(16));
  _0x3cce3d.push(Math.random().toString(16).replace(".", ""));
  _0x3cce3d.push(_0x50719f());
  _0x3cce3d.push(_0x44a3a3.height * _0x44a3a3.width);
  _0x3cce3d.push(Date.now().toString(16));
  return _0x3cce3d.join("-");
}
class _0x31446a {
  constructor() {
    this.index = _0x5f00b5.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x289839 = {
      limit: 0
    };
    const _0x243be2 = {
      Connection: "keep-alive"
    };
    const _0x20a5ca = {
      retry: _0x289839,
      timeout: _0x6e5c25,
      followRedirect: false,
      headers: _0x243be2,
      secureOptions: _0x58ebaa.constants.SSL_OP_LEGACY_SERVER_CONNECT
    };
    this.got = _0x5bbd51.extend(_0x20a5ca);
  }
  get_prefix(_0x48fe9d = {}) {
    var _0x41bdbb = "",
      _0x407a75 = _0x5f00b5.userCount.toString().length;
    if (this.index) {
      _0x41bdbb += "账号[" + _0x5f00b5.padStr(this.index, _0x407a75) + "]";
    }
    if (this.name) {
      _0x41bdbb += "[" + this.name + "]";
    }
    return _0x41bdbb;
  }
  log(_0x2ef03d, _0x5942c6 = {}) {
    let _0x12ac86 = this.get_prefix();
    _0x5f00b5.log(_0x12ac86 + _0x2ef03d, _0x5942c6);
  }
  async request(_0x14be82) {
    const _0x3ef083 = ["RequestError"],
      _0x41898b = ["TimeoutError"];
    let _0x58317b = _0x5f00b5.copy(_0x14be82),
      _0x2f7325 = {};
    try {
      let _0x405ce4 = null,
        _0x33f990 = 0,
        _0x334465 = _0x58317b.fn || _0x58317b.url,
        _0x51dd69 = _0x58317b.valid_code || [200];
      if (_0x58317b.form) {
        for (let _0x33a32d in _0x58317b.form) {
          typeof _0x58317b.form[_0x33a32d] == "object" && (_0x58317b.form[_0x33a32d] = JSON.stringify(_0x58317b.form[_0x33a32d]));
        }
      }
      _0x58317b.method = _0x58317b?.["method"]?.["toUpperCase"]() || "GET";
      if (_0x58317b.searchParams) {
        for (let _0x25ad5c in _0x58317b.searchParams) {
          typeof _0x58317b.searchParams[_0x25ad5c] == "object" && (_0x58317b.searchParams[_0x25ad5c] = JSON.stringify(_0x58317b.searchParams[_0x25ad5c]));
        }
      }
      let _0x4cf7b9 = _0x58317b.got_client || this.got;
      _0x58317b.debug_in && console.log(_0x58317b);
      while (_0x33f990 < _0x39aaf8) {
        if (_0x33f990 > 0) {
          await _0x5f00b5.wait(_0x1777b6 * _0x33f990);
          let _0x483486 = _0x5f00b5.get(_0x58317b, "retryer", null);
          if (_0x483486) {
            let _0x3eef7d = _0x5f00b5.get(_0x58317b, "retryer_opt", {});
            await _0x483486(_0x58317b, _0x3eef7d);
          }
        }
        _0x33f990++;
        let _0x5f1072 = null;
        try {
          let _0x5111ba = Number(_0x58317b?.["timeout"]?.["request"] || _0x58317b?.["timeout"] || _0x6e5c25),
            _0x3e4d15 = false,
            _0x5b62bb = Date.now(),
            _0x342217 = _0x4cf7b9(_0x58317b),
            _0x21759c = setTimeout(() => {
              _0x3e4d15 = true;
              _0x342217.cancel();
            }, _0x5111ba);
          await _0x342217.then(_0x3eac5b => {
            _0x405ce4 = _0x3eac5b;
          }, _0x358e65 => {
            _0x5f1072 = _0x358e65;
            _0x405ce4 = _0x358e65.response;
          }).finally(() => clearTimeout(_0x21759c));
          let _0x28fec5 = Date.now(),
            _0xac4137 = _0x28fec5 - _0x5b62bb,
            _0x1ce2bc = _0x405ce4?.["statusCode"] || null;
          if (_0x3e4d15 || _0x41898b.includes(_0x5f1072?.["name"])) {
            let _0x457e9d = "";
            _0x5f1072?.["code"] && (_0x457e9d += "(" + _0x5f1072.code, _0x5f1072?.["event"] && (_0x457e9d += ":" + _0x5f1072.event), _0x457e9d += ")");
            this.log("[" + _0x334465 + "]请求超时" + _0x457e9d + "(" + _0xac4137 + "ms)，重试第" + _0x33f990 + "次");
          } else {
            if (_0x3ef083.includes(_0x5f1072?.["name"])) {
              console.log(_0x5f1072);
              this.log("[" + _0x334465 + "]请求错误(" + _0x5f1072.code + ")(" + _0xac4137 + "ms)，重试第" + _0x33f990 + "次");
            } else {
              if (_0x1ce2bc) {
                _0x5f1072 && !_0x51dd69.includes(_0x1ce2bc) && this.log("请求[" + _0x334465 + "]返回[" + _0x1ce2bc + "]");
              } else {
                let {
                  code = "unknown",
                  name = "unknown"
                } = _0x5f1072 || {};
                this.log("请求[" + _0x334465 + "]错误[" + code + "][" + name + "]");
              }
              break;
            }
          }
        } catch (_0x30678a) {
          this.log("[" + _0x334465 + "]请求错误(" + _0x30678a.message + ")，重试第" + _0x33f990 + "次");
        }
      }
      if (_0x405ce4 === null || _0x405ce4 === undefined) {
        const _0x3c533a = {
          statusCode: -1,
          headers: null,
          result: null
        };
        return _0x3c533a;
      }
      let {
          statusCode: _0x5852bf,
          headers: _0x470c1c,
          body: _0x47fa37
        } = _0x405ce4,
        _0x3aa1d1 = _0x5f00b5.get(_0x58317b, "decode_json", true);
      if (_0x47fa37 && _0x3aa1d1) {
        try {
          _0x47fa37 = JSON.parse(_0x47fa37);
        } catch {}
      }
      const _0x15b505 = {
        statusCode: _0x5852bf,
        headers: _0x470c1c,
        result: _0x47fa37
      };
      _0x2f7325 = _0x15b505;
      _0x58317b.debug_out && console.log(_0x2f7325);
    } catch (_0x255c00) {
      console.log(_0x255c00);
    } finally {
      return _0x2f7325;
    }
  }
}
let _0x46fae2 = new _0x31446a();
class _0x15ca64 extends _0x31446a {
  constructor(_0x8fbba) {
    super();
    let _0x4abbe1 = _0x8fbba?.["split"]("#");
    this.token = _0x4abbe1?.[0] || "";
    this.device_id = _0x4abbe1?.[1];
    this.device_id ? this.log("指定了device_id: " + this.device_id) : (this.device_id = _0x1907fa(), this.log("随机分配device_id: " + this.device_id));
    this.accessKey = "";
    this.is_black = false;
    this.got = this.got.extend({
      headers: {
        "User-Agent": _0x28b094,
        channel: 0,
        "x-ac-black-box": "",
        "x-ac-token-ticket": this.token,
        "x-ac-channel-id": "KHT",
        "x-ac-device-id": this.device_id,
        "x-ac-mc-type": "gateway.user",
        Origin: "https://ecustomercdn.itaiping.com",
        Referer: "https://ecustomercdn.itaiping.com/"
      }
    });
  }
  async registerAndLogin(_0x52bb10 = _0x43586e, _0x1487b6 = {}) {
    let _0x4936bf = false;
    try {
      const _0x13160c = {
        activityCode: _0x52bb10,
        accessKey: this.accessKey,
        tokenKey: this.token,
        platform: ""
      };
      const _0x1ff688 = {
        activityCode: _0x52bb10,
        phone: "",
        smsCode: "",
        ticket: "",
        thirdAccount: this.token,
        registerData: {}
      };
      let _0x59d8d9 = {
          fn: "registerAndLogin",
          method: "post",
          url: "https://ecustomer.cntaiping.com/tptplaybox/api/account/registerAndLogin",
          headers: _0x13160c,
          json: _0x1ff688
        },
        {
          result: _0x73d9c7,
          statusCode: _0x6a973c
        } = await this.request(_0x59d8d9),
        _0x2c20cb = _0x5f00b5.get(_0x73d9c7, "errorCode", _0x6a973c);
      if (_0x2c20cb === 0) {
        let {
          accessKey: _0x586a6c,
          phone: _0x2b1444
        } = _0x73d9c7?.["value"];
        this.name = _0x2b1444;
        this.accessKey = _0x586a6c;
        this.log("登录成功");
        _0x4936bf = true;
      } else {
        let _0x22f063 = _0x5f00b5.get(_0x73d9c7, "errorMsg", "");
        const _0x18f251 = {
          notify: true
        };
        this.log("登录失败[" + _0x2c20cb + "]: " + _0x22f063, _0x18f251);
        _0x22f063?.["includes"]("请重新登录") && (this.valid = false);
      }
    } catch (_0x452d3a) {
      console.log(_0x452d3a);
    } finally {
      return _0x4936bf;
    }
  }
  async couponAndsign(_0x4bb256 = {}) {
    let _0x1d9fe4 = false;
    try {
      let _0x548018 = {
          fn: "couponAndsign",
          method: "post",
          url: "https://ecustomer.cntaiping.com/campaignsms/couponAndsign",
          json: {}
        },
        {
          result: _0x3c246c,
          statusCode: _0x44012b
        } = await this.request(_0x548018),
        _0x431bb8 = _0x5f00b5.get(_0x3c246c, "code", _0x44012b);
      if (_0x431bb8 == "0000") {
        _0x1d9fe4 = true;
        let {
          signFlag: _0x4a1b34,
          integralSend: _0x1aef5e
        } = _0x3c246c?.["data"];
        _0x4a1b34 ? this.log("签到成功: " + _0x1aef5e + "金币") : this.log("今天已签到");
      } else {
        let _0x5dd1ad = _0x5f00b5.get(_0x3c246c, "msg", "");
        this.log("进入签到页面失败[" + _0x431bb8 + "]: " + _0x5dd1ad);
        if (_0x5dd1ad?.["includes"]("火爆")) {
          this.is_black = true;
          const _0x5d98b1 = {
            notify: true
          };
          this.log("可能黑号, 需要手动打开一次APP", _0x5d98b1);
        }
      }
    } catch (_0xe5b99e) {
      console.log(_0xe5b99e);
    } finally {
      return _0x1d9fe4;
    }
  }
  async get_task_list(_0x49ffa5 = {}) {
    try {
      const _0x2eb699 = {
        fn: "get_task_list",
        method: "post",
        url: "https://ecustomer.cntaiping.com/campaignsms/goldParty/task/list",
        json: {}
      };
      _0x2eb699.json.activityNumber = "goldCoinParty";
      _0x2eb699.json.rewardFlag = "1";
      _0x2eb699.json.openMsgRemind = 0;
      let _0xeadce = _0x2eb699,
        {
          result: _0x2cf19e,
          statusCode: _0x576e14
        } = await this.request(_0xeadce),
        _0x9a174d = _0x5f00b5.get(_0x2cf19e, "code", _0x576e14);
      if (_0x9a174d == "0000") {
        let _0x19d67a = false,
          _0x1bdcd5 = _0x2cf19e?.["data"]?.["taskList"] || [];
        for (let _0x19d4a5 of _0x1bdcd5) {
          switch (_0x19d4a5.taskType) {
            case "readAndShare":
              {
                _0x19d67a = _0x19d4a5.taskStatus == 0;
                continue;
              }
          }
          switch (_0x19d4a5.taskStatus) {
            case 0:
              {
                await this.task_finish(_0x19d4a5);
                break;
              }
            case 1:
              {
                await this.goldCoin_add(_0x19d4a5);
                break;
              }
          }
        }
        _0x19d67a && (await this.read_task());
      } else {
        let _0x523882 = _0x5f00b5.get(_0x2cf19e, "msg", "");
        this.log("查询任务失败[" + _0x9a174d + "]: " + _0x523882);
        _0x523882?.["includes"]("请重新登录") && (this.valid = false);
      }
    } catch (_0x129979) {
      console.log(_0x129979);
    }
  }
  async task_finish(_0x45e5b5, _0x2fbd41 = {}) {
    try {
      const _0x4b103c = {
        taskIds: [_0x45e5b5.taskId]
      };
      let _0x145efe = {
          fn: "task_finish",
          method: "post",
          url: "https://ecustomer.cntaiping.com/campaignsms/goldParty/task/finish",
          json: _0x4b103c
        },
        {
          result: _0x3b2243,
          statusCode: _0x3dd2e4
        } = await this.request(_0x145efe),
        _0x541162 = _0x5f00b5.get(_0x3b2243, "code", _0x3dd2e4);
      if (_0x541162 == "0000") {
        await this.goldCoin_add(_0x45e5b5);
      } else {
        let _0xe56d0d = _0x5f00b5.get(_0x3b2243, "msg", "");
        this.log("完成任务[" + _0x45e5b5.name + "]失败[" + _0x541162 + "]: " + _0xe56d0d);
      }
    } catch (_0x4a6788) {
      console.log(_0x4a6788);
    }
  }
  async goldCoin_add(_0x3fa219, _0x36177d = {}) {
    try {
      const _0x390c39 = {
        taskIds: [_0x3fa219.taskId]
      };
      let _0x952542 = {
          fn: "goldCoin_add",
          method: "post",
          url: "https://ecustomer.cntaiping.com/campaignsms/goldParty/goldCoin/add",
          json: _0x390c39
        },
        {
          result: _0x440715,
          statusCode: _0x1491f6
        } = await this.request(_0x952542),
        _0x12ff89 = _0x5f00b5.get(_0x440715, "code", _0x1491f6);
      if (_0x12ff89 == "0000") {
        this.log("领取任务[" + _0x3fa219.name + "]奖励成功");
      } else {
        let _0x38fd03 = _0x5f00b5.get(_0x440715, "msg", "");
        this.log("领取任务[" + _0x3fa219.name + "]奖励失败[" + _0x12ff89 + "]: " + _0x38fd03);
      }
    } catch (_0x290ba2) {
      console.log(_0x290ba2);
    }
  }
  async get_articles(_0x23d679 = 1, _0x50162b = {}) {
    let _0x1ea6dc = [];
    try {
      let _0x4d74ff = _0x5f00b5.randomList(_0x437263);
      const _0x24007b = {
        fn: "get_articles",
        method: "post",
        url: "https://ecustomer.cntaiping.com/informationms/app/config/get/" + _0x23d679,
        json: {}
      };
      _0x24007b.json.channelId = _0x4d74ff;
      _0x24007b.json.pageSize = 10;
      _0x24007b.json.city = "1";
      _0x24007b.json.type = "SOCIAL_FOUND";
      let _0x431ae8 = _0x24007b,
        {
          result: _0x131082,
          statusCode: _0x2e591a
        } = await this.request(_0x431ae8),
        _0x105e1 = _0x5f00b5.get(_0x131082, "code", _0x2e591a);
      if (_0x105e1 == "0000") {
        for (let _0x25de9d of _0x131082?.["data"] || []) {
          let _0xea46db = _0x25de9d?.["cell"]?.["0"]?.[0];
          if (_0xea46db) {
            let {
              serviceNo: _0x1d7d7e,
              contentId: _0x548f20,
              source: _0x2b6bb0
            } = _0xea46db;
            const _0x5f458e = {
              serviceNo: _0x1d7d7e,
              contentId: _0x548f20,
              source: _0x2b6bb0
            };
            _0x1ea6dc.push(_0x5f458e);
          }
        }
      } else {
        let _0xd19009 = _0x5f00b5.get(_0x131082, "msg", "");
        this.log("获取第" + _0x23d679 + "页文章失败[" + _0x105e1 + "]: " + _0xd19009);
      }
    } catch (_0x34e764) {
      console.log(_0x34e764);
    } finally {
      return _0x1ea6dc;
    }
  }
  async coinInfoV2(_0x330ef4, _0x58ca49 = {}) {
    try {
      let {
          serviceNo: _0x2810d4,
          contentId: _0x5cfdc6,
          source: _0x24adf1
        } = _0x330ef4,
        _0x37ec12 = new URL("https://ecustomercdn.itaiping.com/static/newscontent/#/info");
      _0x37ec12.searchParams.append("articleId", _0x5cfdc6);
      _0x37ec12.searchParams.append("source", _0x24adf1);
      _0x37ec12.searchParams.append("x_utmId", "10013");
      _0x37ec12.searchParams.append("serviceNo", _0x2810d4);
      _0x37ec12.searchParams.append("x_businesskey", "articleId");
      let _0x1b42e5 = {
          fn: "coinInfoV2",
          method: "post",
          url: "https://ecustomer.cntaiping.com/informationms/app/v2/article/web/coinInfoV2",
          json: {
            articleId: _0x5cfdc6,
            source: _0x24adf1,
            detailUrl: _0x37ec12.toString(),
            deviceId: "",
            version: "V2"
          }
        },
        {
          result: _0x2c5713,
          statusCode: _0x59e3ff
        } = await this.request(_0x1b42e5),
        _0x598a2a = _0x5f00b5.get(_0x2c5713, "code", _0x59e3ff);
      if (_0x598a2a == "0000") {
        let _0x326835 = _0x2c5713?.["data"]?.["countDownCoinInfo"]?.["coinNum"] || 0;
        _0x326835 ? await this.read_gold(_0x5cfdc6, _0x24adf1) : this.log("文章[" + _0x5cfdc6 + "]没有阅读奖励了");
      } else {
        let _0x21b3bf = _0x5f00b5.get(_0x2c5713, "msg", "");
        this.log("开始阅读文章[" + _0x5cfdc6 + "]失败[" + _0x598a2a + "]: " + _0x21b3bf);
      }
    } catch (_0x38f5b7) {
      console.log(_0x38f5b7);
    }
  }
  async read_gold(_0x29a9ef, _0xd896c2, _0x92d3d8 = {}) {
    try {
      const _0x14a8f1 = {
        articleId: _0x29a9ef,
        source: _0xd896c2
      };
      let _0x158316 = {
          fn: "read_gold",
          method: "post",
          url: "https://ecustomer.cntaiping.com/informationms/app/v2/read/gold",
          json: _0x14a8f1
        },
        {
          result: _0x5d3219,
          statusCode: _0x398d20
        } = await this.request(_0x158316),
        _0x1dd30e = _0x5f00b5.get(_0x5d3219, "code", _0x398d20);
      if (_0x1dd30e == "0000") {
        this.log("阅读文章[" + _0x29a9ef + "]成功");
      } else {
        let _0x4ab9c6 = _0x5f00b5.get(_0x5d3219, "msg", "");
        this.log("阅读文章[" + _0x29a9ef + "]失败[" + _0x1dd30e + "]: " + _0x4ab9c6);
      }
    } catch (_0x20926b) {
      console.log(_0x20926b);
    }
  }
  async queryList(_0x2a7fd2 = {}) {
    try {
      let _0x196b6b = {
          fn: "queryList",
          method: "post",
          url: "https://ecustomer.cntaiping.com/campaignsms/coinBubble/queryList",
          json: {}
        },
        {
          result: _0x4c70ca,
          statusCode: _0x46c58c
        } = await this.request(_0x196b6b),
        _0x2724b2 = _0x5f00b5.get(_0x4c70ca, "code", _0x46c58c);
      if (_0x2724b2 == "0000") {
        let _0x17e543 = _0x4c70ca?.["data"]?.["length"] || 0;
        this.log("有" + _0x17e543 + "个可领取的气泡奖励");
        _0x17e543 && (await this.getAllCoins());
      } else {
        let _0x7b65f = _0x5f00b5.get(_0x4c70ca, "msg", "");
        this.log("查询气泡奖励失败[" + _0x2724b2 + "]: " + _0x7b65f);
      }
    } catch (_0x441d5f) {
      console.log(_0x441d5f);
    }
  }
  async getAllCoins(_0x43262c = {}) {
    try {
      let _0x56f719 = {
          fn: "getAllCoins",
          method: "post",
          url: "https://ecustomer.cntaiping.com/campaignsms/coinBubble/getAllCoins",
          json: {}
        },
        {
          result: _0x365acb,
          statusCode: _0x22f529
        } = await this.request(_0x56f719),
        _0x29804d = _0x5f00b5.get(_0x365acb, "code", _0x22f529);
      if (_0x29804d == "0000") {
        let _0x278ab1 = _0x365acb?.["data"]?.["coinNum"] || 0;
        this.log("领取气泡奖励: " + _0x278ab1 + "金币");
      } else {
        let _0x42ff6f = _0x5f00b5.get(_0x365acb, "msg", "");
        this.log("领取气泡奖励失败[" + _0x29804d + "]: " + _0x42ff6f);
      }
    } catch (_0x273780) {
      console.log(_0x273780);
    }
  }
  async exhibitionTopic(_0x4247cb = 1, _0x3290ef = 10, _0x2c4a1f = {}) {
    let _0x3edd8f = [];
    try {
      const _0x10c7cb = {
        pageNo: _0x4247cb,
        pageSize: _0x3290ef
      };
      let _0x45bff1 = {
          fn: "exhibitionTopic",
          method: "post",
          url: "https://ecustomer.cntaiping.com/campaignsms/tPkTopicAppointment/exhibitionTopic",
          json: _0x10c7cb
        },
        {
          result: _0x292f72,
          statusCode: _0x605076
        } = await this.request(_0x45bff1),
        _0x25fa9f = _0x5f00b5.get(_0x292f72, "code", _0x605076);
      if (_0x25fa9f == "0000") {
        _0x3edd8f = _0x292f72?.["data"] || [];
      } else {
        let _0x53013e = _0x5f00b5.get(_0x292f72, "msg", "");
        this.log("获取话题失败[" + _0x25fa9f + "]: " + _0x53013e);
      }
    } catch (_0x160778) {
      console.log(_0x160778);
    } finally {
      return _0x3edd8f;
    }
  }
  async standInLineTopic(_0x212283, _0x1fba48 = {}) {
    try {
      const _0x31cb0e = {
        joinPoint: _0x212283.joinWin,
        id: _0x212283.id,
        dataFrom: 0
      };
      let _0x261d3c = {
          fn: "standInLineTopic",
          method: "post",
          url: "https://ecustomer.cntaiping.com/campaignsms/tPkTopicAppointment/standInLineTopic",
          json: _0x31cb0e
        },
        {
          result: _0xb44c7f,
          statusCode: _0x23584d
        } = await this.request(_0x261d3c),
        _0x2044b4 = _0x5f00b5.get(_0xb44c7f, "code", _0x23584d);
      if (_0x2044b4 == "0000") {
        let _0x5ccea2 = _0xb44c7f?.["data"]?.["isWin"] || 0;
        _0x5ccea2 ? this.log("话题PK选择正确") : this.log("话题PK选择错误");
      } else {
        let _0x48bbed = _0x5f00b5.get(_0xb44c7f, "msg", "");
        this.log("话题PK失败[" + _0x2044b4 + "]: " + _0x48bbed);
      }
    } catch (_0x37e746) {
      console.log(_0x37e746);
    }
  }
  async giftBag(_0x5862a3 = {}) {
    try {
      let _0x4894d0 = {
          fn: "giftBag",
          method: "post",
          url: "https://ecustomer.cntaiping.com/campaignsms/dailySign/giftBag",
          json: {}
        },
        {
          result: _0x1b05f0,
          statusCode: _0x89d858
        } = await this.request(_0x4894d0),
        _0xaaf850 = _0x5f00b5.get(_0x1b05f0, "code", _0x89d858);
      if (_0xaaf850 == "0000") {
        for (let _0x1d679d of _0x1b05f0?.["data"] || []) {
          switch (_0x1d679d.status) {
            case 0:
              {
                break;
              }
            case 1:
              {
                await this.lottery(_0x1d679d);
                break;
              }
            case 2:
              {
                break;
              }
            default:
              {
                this.log(_0x1d679d.continueDay + "天签到抽奖未知状态[" + _0x1d679d.status + "]");
                break;
              }
          }
        }
      } else {
        let _0x4e50ae = _0x5f00b5.get(_0x1b05f0, "msg", "");
        this.log("查询抽奖次数失败[" + _0xaaf850 + "]: " + _0x4e50ae);
      }
    } catch (_0x4ebecd) {
      console.log(_0x4ebecd);
    }
  }
  async lottery(_0x2bcb4e, _0x3f156e = {}) {
    try {
      const _0x3e177a = {
        activitycode: _0x2bcb4e.activityCode,
        accessKey: this.accessKey,
        tokenKey: this.token,
        platform: ""
      };
      let _0xa5e8cf = {
          fn: "lottery",
          method: "post",
          url: "https://ecustomer.cntaiping.com/tptplaybox/api/activity/lottery",
          headers: _0x3e177a,
          json: {
            activityCode: _0x2bcb4e.activityCode,
            lotteryMap: {
              businessInfo: JSON.stringify({
                xCubeActivityCode: _0x2bcb4e.activityCode,
                shareCode: ""
              })
            }
          }
        },
        {
          result: _0x4f4ed4,
          statusCode: _0x193cce
        } = await this.request(_0xa5e8cf),
        _0x1f167c = _0x5f00b5.get(_0x4f4ed4, "errorCode", _0x193cce);
      if (_0x1f167c == 0) {
        this.log("签到" + _0x2bcb4e.continueDay + "天抽奖成功");
        this.log(": " + JSON.stringify(_0x4f4ed4));
      } else {
        let _0x7c12da = _0x5f00b5.get(_0x4f4ed4, "errorMsg", "");
        this.log("签到" + _0x2bcb4e.continueDay + "天抽奖失败[" + _0x1f167c + "]: " + _0x7c12da);
      }
    } catch (_0x2b3a48) {
      console.log(_0x2b3a48);
    }
  }
  async queryUserPoints(_0xd3f311 = {}) {
    try {
      const _0x3373ca = {
        fn: "queryUserPoints",
        method: "post",
        url: "https://ecustomer.cntaiping.com/campaignsms/integral/queryUserPoints",
        json: {}
      };
      _0x3373ca.json.sourceOrganId = "932";
      let _0x45ddc2 = _0x3373ca,
        {
          result: _0x5229a8,
          statusCode: _0x390573
        } = await this.request(_0x45ddc2),
        _0x123cff = _0x5f00b5.get(_0x5229a8, "code", _0x390573);
      if (_0x123cff == "0000") {
        let {
            availableScore: _0x32adbf,
            soonFallDueScore: _0x311f74,
            availableScoreRMB: _0xcb4243
          } = _0x5229a8?.["data"]?.["scoreAccountInfo"],
          _0x52a3ca = "金币: " + _0x32adbf;
        _0x311f74 && (_0x52a3ca += ", 90天内将过期" + _0x311f74 + "金币");
        const _0x439ef9 = {
          notify: true
        };
        this.log(_0x52a3ca, _0x439ef9);
      } else {
        let _0x596c04 = _0x5f00b5.get(_0x5229a8, "msg", "");
        this.log("查询金币失败[" + _0x123cff + "]: " + _0x596c04);
      }
    } catch (_0x407564) {
      console.log(_0x407564);
    }
  }
  async read_task(_0x11d847 = {}) {
    try {
      let _0x50fab8 = [];
      for (let _0x575d67 = 1; _0x575d67 <= 2; _0x575d67++) {
        _0x50fab8 = _0x50fab8.concat(await this.get_articles(_0x575d67));
      }
      _0x50fab8.length > 14 && (_0x50fab8 = _0x50fab8.slice(0, 14));
      this.log("共获取到" + _0x50fab8.length + "篇文章");
      for (let _0x58f2fb of _0x50fab8) {
        await this.coinInfoV2(_0x58f2fb);
      }
      await this.queryList();
    } catch (_0x3f60ce) {
      console.log(_0x3f60ce);
    }
  }
  async topic_task(_0x541f08 = {}) {
    try {
      let _0x1ac47c = await this.exhibitionTopic(),
        _0x26e82f = _0x1ac47c.filter(_0x322fd6 => !_0x322fd6.isParticipateIn && _0x322fd6.dispenseCoin < _0x322fd6.totalCoin);
      this.log("共获取到" + _0x1ac47c.length + "个话题");
      this.log("未参与且有剩余奖池的话题数: " + _0x26e82f.length);
      for (let _0x4b8502 of _0x26e82f) {
        await this.standInLineTopic(_0x4b8502);
      }
    } catch (_0x542719) {
      console.log(_0x542719);
    }
  }
  async userTask(_0x28e62e = {}) {
    _0x5f00b5.log("------------------- 账号[" + this.index + "] -------------------");
    if (!(await this.registerAndLogin())) {
      return;
    }
    await this.couponAndsign();
    if (this.is_black) {
      return;
    }
    await this.giftBag();
    await this.get_task_list();
    await this.topic_task();
    await this.queryUserPoints();
  }
}
!(async () => {
  if (!(await _0x307e44())) {
    return;
  }
  _0x5f00b5.read_env(_0x15ca64);
  for (let _0x2a0d92 of _0x5f00b5.userList) {
    await _0x2a0d92.userTask();
  }
})().catch(_0xd59247 => _0x5f00b5.log(_0xd59247)).finally(() => _0x5f00b5.exitNow());
async function _0x307e44(_0x84aa64 = 0) {
  let _0x144111 = false;
  try {
    let _0x22187d = {
        fn: "auth",
        method: "get",
        url: _0x5dbce6,
        timeout: 20000
      },
      {
        statusCode: _0x4825ee,
        result: _0x1695ca
      } = await _0x46fae2.request(_0x22187d);
    if (_0x4825ee != 200) {
      _0x84aa64++ < _0x3c4b28 && (_0x144111 = await _0x307e44(_0x84aa64));
      return _0x144111;
    }
    if (_0x1695ca?.["code"] == 0) {
      _0x1695ca = JSON.parse(_0x1695ca.data.file.data);
      if (_0x1695ca?.["commonNotify"] && _0x1695ca.commonNotify.length > 0) {
        const _0x468a1f = {
          notify: true
        };
        _0x5f00b5.log(_0x1695ca.commonNotify.join("\n") + "\n", _0x468a1f);
      }
      _0x1695ca?.["commonMsg"] && _0x1695ca.commonMsg.length > 0 && _0x5f00b5.log(_0x1695ca.commonMsg.join("\n") + "\n");
      if (_0x1695ca[_0x30d839]) {
        let _0x191b25 = _0x1695ca[_0x30d839];
        _0x191b25.status == 0 ? _0x1bbe9e >= _0x191b25.version ? (_0x144111 = true, _0x5f00b5.log(_0x191b25.msg[_0x191b25.status]), _0x5f00b5.log(_0x191b25.updateMsg), _0x5f00b5.log("现在运行的脚本版本是：" + _0x1bbe9e + "，最新脚本版本：" + _0x191b25.latestVersion)) : _0x5f00b5.log(_0x191b25.versionMsg) : _0x5f00b5.log(_0x191b25.msg[_0x191b25.status]);
      } else {
        _0x5f00b5.log(_0x1695ca.errorMsg);
      }
    } else {
      _0x84aa64++ < _0x3c4b28 && (_0x144111 = await _0x307e44(_0x84aa64));
    }
  } catch (_0x12f830) {
    _0x5f00b5.log(_0x12f830);
  } finally {
    return _0x144111;
  }
}
function _0x5b30bc(_0x1ee12d) {
  return new class {
    constructor(_0x3dbfd4) {
      this.name = _0x3dbfd4;
      this.startTime = Date.now();
      const _0x31a1fb = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x31a1fb);
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
    log(_0x8045c, _0x16018b = {}) {
      let _0x32d841 = {
        console: true
      };
      Object.assign(_0x32d841, _0x16018b);
      if (_0x32d841.time) {
        let _0x76a0d1 = _0x32d841.fmt || "hh:mm:ss";
        _0x8045c = "[" + this.time(_0x76a0d1) + "]" + _0x8045c;
      }
      if (_0x32d841.notify) {
        this.notifyStr.push(_0x8045c);
      }
      if (_0x32d841.console) {
        console.log(_0x8045c);
      }
    }
    get(_0x6ff83e, _0x5f18fc, _0x2f0b37 = "") {
      let _0x1482b3 = _0x2f0b37;
      _0x6ff83e?.["hasOwnProperty"](_0x5f18fc) && (_0x1482b3 = _0x6ff83e[_0x5f18fc]);
      return _0x1482b3;
    }
    pop(_0x272411, _0x557ec6, _0x36e68b = "") {
      let _0x1b6d76 = _0x36e68b;
      _0x272411?.["hasOwnProperty"](_0x557ec6) && (_0x1b6d76 = _0x272411[_0x557ec6], delete _0x272411[_0x557ec6]);
      return _0x1b6d76;
    }
    copy(_0x5cf40c) {
      return Object.assign({}, _0x5cf40c);
    }
    read_env(_0xeded25) {
      let _0x49cf10 = _0x36b5da.map(_0x10609c => process.env[_0x10609c]);
      for (let _0x39e987 of _0x49cf10.filter(_0x342889 => !!_0x342889)) {
        for (let _0xac7413 of _0x39e987.split(_0x260134).filter(_0x231372 => !!_0x231372)) {
          this.userList.push(new _0xeded25(_0xac7413));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x36bac5 = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x36b5da.map(_0x1791d5 => "[" + _0x1791d5 + "]").join("或"), _0x36bac5);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0xbe465f, _0x466ce9 = null) {
      let _0x2bee0d = _0x466ce9 ? new Date(_0x466ce9) : new Date(),
        _0x54d769 = {
          "M+": _0x2bee0d.getMonth() + 1,
          "d+": _0x2bee0d.getDate(),
          "h+": _0x2bee0d.getHours(),
          "m+": _0x2bee0d.getMinutes(),
          "s+": _0x2bee0d.getSeconds(),
          "q+": Math.floor((_0x2bee0d.getMonth() + 3) / 3),
          S: this.padStr(_0x2bee0d.getMilliseconds(), 3)
        };
      /(y+)/.test(_0xbe465f) && (_0xbe465f = _0xbe465f.replace(RegExp.$1, (_0x2bee0d.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3689b6 in _0x54d769) new RegExp("(" + _0x3689b6 + ")").test(_0xbe465f) && (_0xbe465f = _0xbe465f.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x54d769[_0x3689b6] : ("00" + _0x54d769[_0x3689b6]).substr(("" + _0x54d769[_0x3689b6]).length)));
      return _0xbe465f;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      try {
        var _0x52f63b = require("./sendNotify");
        this.log("\n============== 推送 ==============");
        await _0x52f63b.sendNotify(this.name, this.notifyStr.join("\n"));
      } catch {
        this.log("\n=================================");
        this.log("读取推送依赖[sendNotify.js]失败, 请检查同目录下是否有依赖");
      }
    }
    padStr(_0x4620be, _0x2ff322, _0x4353ef = {}) {
      let _0x529505 = _0x4353ef.padding || "0",
        _0x49ffb2 = _0x4353ef.mode || "l",
        _0x43490b = String(_0x4620be),
        _0x58b436 = _0x2ff322 > _0x43490b.length ? _0x2ff322 - _0x43490b.length : 0,
        _0x223a0a = "";
      for (let _0x538d0c = 0; _0x538d0c < _0x58b436; _0x538d0c++) {
        _0x223a0a += _0x529505;
      }
      _0x49ffb2 == "r" ? _0x43490b = _0x43490b + _0x223a0a : _0x43490b = _0x223a0a + _0x43490b;
      return _0x43490b;
    }
    json2str(_0x3f6fba, _0x1a24d7, _0x43919a = false) {
      let _0x289a7e = [];
      for (let _0x4a7d0f of Object.keys(_0x3f6fba).sort()) {
        let _0x1dcf12 = _0x3f6fba[_0x4a7d0f];
        if (_0x1dcf12 && _0x43919a) {
          _0x1dcf12 = encodeURIComponent(_0x1dcf12);
        }
        _0x289a7e.push(_0x4a7d0f + "=" + _0x1dcf12);
      }
      return _0x289a7e.join(_0x1a24d7);
    }
    str2json(_0x18daf7, _0x4bc31a = false) {
      let _0x14f4be = {};
      for (let _0x2b1034 of _0x18daf7.split("&")) {
        if (!_0x2b1034) {
          continue;
        }
        let _0x4051d3 = _0x2b1034.indexOf("=");
        if (_0x4051d3 == -1) {
          continue;
        }
        let _0x14100f = _0x2b1034.substr(0, _0x4051d3),
          _0x583fe0 = _0x2b1034.substr(_0x4051d3 + 1);
        if (_0x4bc31a) {
          _0x583fe0 = decodeURIComponent(_0x583fe0);
        }
        _0x14f4be[_0x14100f] = _0x583fe0;
      }
      return _0x14f4be;
    }
    randomPattern(_0x4532f8, _0xc2752d = "abcdef0123456789") {
      let _0x20a5ce = "";
      for (let _0x320a99 of _0x4532f8) {
        if (_0x320a99 == "x") {
          _0x20a5ce += _0xc2752d.charAt(Math.floor(Math.random() * _0xc2752d.length));
        } else {
          _0x320a99 == "X" ? _0x20a5ce += _0xc2752d.charAt(Math.floor(Math.random() * _0xc2752d.length)).toUpperCase() : _0x20a5ce += _0x320a99;
        }
      }
      return _0x20a5ce;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x5c3eb8 = 32, _0x4931c0 = "abcdef0123456789") {
      let _0x5de631 = "";
      for (let _0x545c7b = 0; _0x545c7b < _0x5c3eb8; _0x545c7b++) {
        _0x5de631 += _0x4931c0.charAt(Math.floor(Math.random() * _0x4931c0.length));
      }
      return _0x5de631;
    }
    randomList(_0x1ddaf5) {
      let _0x2d9b91 = Math.floor(Math.random() * _0x1ddaf5.length);
      return _0x1ddaf5[_0x2d9b91];
    }
    wait(_0x36c60b) {
      return new Promise(_0x53c503 => setTimeout(_0x53c503, _0x36c60b));
    }
    async exitNow() {
      await this.showmsg();
      let _0x5dac47 = Date.now(),
        _0x448ca7 = (_0x5dac47 - this.startTime) / 1000;
      this.log("");
      const _0x31cdb3 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x448ca7 + "秒", _0x31cdb3);
      process.exit(0);
    }
    normalize_time(_0x1ad6ab, _0x431616 = {}) {
      let _0x200423 = _0x431616.len || this.default_timestamp_len;
      _0x1ad6ab = _0x1ad6ab.toString();
      let _0x3ce7a3 = _0x1ad6ab.length;
      while (_0x3ce7a3 < _0x200423) {
        _0x1ad6ab += "0";
      }
      _0x3ce7a3 > _0x200423 && (_0x1ad6ab = _0x1ad6ab.slice(0, 13));
      return parseInt(_0x1ad6ab);
    }
    async wait_until(_0x3cbbca, _0x43fa9d = {}) {
      let _0x281730 = _0x43fa9d.logger || this,
        _0x4770fe = _0x43fa9d.interval || this.default_wait_interval,
        _0xd159be = _0x43fa9d.limit || this.default_wait_limit,
        _0x35017f = _0x43fa9d.ahead || this.default_wait_ahead;
      if (typeof _0x3cbbca == "string" && _0x3cbbca.includes(":")) {
        if (_0x3cbbca.includes("-")) {
          _0x3cbbca = new Date(_0x3cbbca).getTime();
        } else {
          let _0x17bccb = this.time("yyyy-MM-dd ");
          _0x3cbbca = new Date(_0x17bccb + _0x3cbbca).getTime();
        }
      }
      let _0x5a90fa = this.normalize_time(_0x3cbbca) - _0x35017f,
        _0x279c45 = this.time("hh:mm:ss.S", _0x5a90fa),
        _0x1b629b = Date.now();
      _0x1b629b > _0x5a90fa && (_0x5a90fa += 86400000);
      let _0x1883c = _0x5a90fa - _0x1b629b;
      if (_0x1883c > _0xd159be) {
        const _0x3f6628 = {
          time: true
        };
        _0x281730.log("离目标时间[" + _0x279c45 + "]大于" + _0xd159be / 1000 + "秒,不等待", _0x3f6628);
      } else {
        const _0x191b3 = {
          time: true
        };
        _0x281730.log("离目标时间[" + _0x279c45 + "]还有" + _0x1883c / 1000 + "秒,开始等待", _0x191b3);
        while (_0x1883c > 0) {
          let _0x4fb50e = Math.min(_0x1883c, _0x4770fe);
          await this.wait(_0x4fb50e);
          _0x1b629b = Date.now();
          _0x1883c = _0x5a90fa - _0x1b629b;
        }
        const _0x166704 = {
          time: true
        };
        _0x281730.log("已完成等待", _0x166704);
      }
    }
    async wait_gap_interval(_0x703cd6, _0x5ecdc2) {
      let _0xc492bd = Date.now() - _0x703cd6;
      _0xc492bd < _0x5ecdc2 && (await this.wait(_0x5ecdc2 - _0xc492bd));
    }
  }(_0x1ee12d);
}