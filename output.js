const _0x295126 = _0x1243c7("滴滴打车"),
  _0x5d1274 = require("fs"),
  _0x263bb0 = require("got"),
  _0x160351 = require("crypto-js"),
  _0x3be1c4 = require("ws"),
  _0x2f28e5 = "didi",
  _0x401283 = _0x2f28e5 + "Cookie.txt",
  _0x43680c = 20000,
  _0x4721e8 = 3;
const _0x5ec789 = 1.04,
  _0x5f16a5 = "didi",
  _0x206d5d = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x101977 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x5f16a5 + ".json",
  _0x9ef809 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.44(0x18002c2d) NetType/WIFI Language/zh_CN",
  _0xe4f6f2 = "https://servicewechat.com/wxaf35009675aa0b2a/783/page-frame.html",
  _0x5dd9ff = 2000,
  _0xc1e126 = 5,
  _0x56e37f = 5000,
  _0x39690d = 2500;
const _0x4e936c = {
  dchn: "kkXgpzO",
  prod_key: "ut-limited-seckill"
};
const _0x1deeae = {
  dchn: "gL3E8qZ",
  prod_key: "ut-support-coupon"
};
const _0x2afc21 = [_0x4e936c, _0x1deeae],
  _0x3a0cfd = "wss://game-proxy.xiaojukeji.com/proxy/game/go";
const _0x114582 = {
    "0": "金币",
    "1": "体力",
    "2": "立减金额经验",
    "3": "有效日期经验",
    "4": "使用门槛经验"
  },
  _0x2a2116 = ["ut_look_through_weibo"],
  _0x1d906a = 4000;
let _0x771bc = [],
  _0x3f64ec = [],
  _0x51a95b = [],
  _0x2cbaa5 = [];
const _0x4d68f6 = "R4doMFFeMNlliIWM",
  _0x5805cb = "ABCDEFG0123456789abcdefgHIJKLMN+/hijklmnOPQRSTopqrstUVWXYZuvwxyz";
let _0x52ec35 = "6612528ad60e22079f35d61d901bef73342kcgfg";
class _0x364067 {
  constructor() {
    this.index = _0x295126.userIdx++;
    this.name = "";
    this.valid = false;
    const _0x552ce4 = {
      limit: 0
    };
    const _0x5bd281 = {
      Connection: "keep-alive"
    };
    const _0x17ba3f = {
      retry: _0x552ce4,
      timeout: _0x43680c,
      followRedirect: false,
      headers: _0x5bd281
    };
    this.got = _0x263bb0.extend(_0x17ba3f);
  }
  get_prefix(_0x20960a = {}) {
    var _0x15c488 = "",
      _0x3c6ac7 = _0x295126.userCount.toString().length;
    if (this.index) {
      _0x15c488 += "账号[" + _0x295126.padStr(this.index, _0x3c6ac7) + "]";
    }
    if (this.name) {
      _0x15c488 += "[" + this.name + "]";
    }
    return _0x15c488;
  }
  log(_0x194486, _0x2b0f4c = {}) {
    let _0x25729a = this.get_prefix();
    _0x295126.log(_0x25729a + _0x194486, _0x2b0f4c);
  }
  async request(_0x57f8b1) {
    const _0xfeaace = ["RequestError"],
      _0x2407b7 = ["TimeoutError"];
    let _0x21dd80 = _0x295126.copy(_0x57f8b1),
      _0x44abbb = {};
    try {
      let _0x232ac8 = null,
        _0x14bb6a = 0,
        _0x425773 = _0x21dd80.fn || _0x21dd80.url,
        _0x42d20e = _0x21dd80.valid_code || [200];
      if (_0x21dd80.form) {
        for (let _0x25244c in _0x21dd80.form) {
          typeof _0x21dd80.form[_0x25244c] == "object" && (_0x21dd80.form[_0x25244c] = JSON.stringify(_0x21dd80.form[_0x25244c]));
        }
      }
      _0x21dd80.method = _0x21dd80?.["method"]?.["toUpperCase"]() || "GET";
      if (_0x21dd80.searchParams) {
        for (let _0x2b66be in _0x21dd80.searchParams) {
          typeof _0x21dd80.searchParams[_0x2b66be] == "object" && (_0x21dd80.searchParams[_0x2b66be] = JSON.stringify(_0x21dd80.searchParams[_0x2b66be]));
        }
      }
      let _0xc471e4 = _0x21dd80.got_client || this.got;
      _0x21dd80.debug_in && console.log(_0x21dd80);
      while (_0x14bb6a < _0x4721e8) {
        if (_0x14bb6a > 0) {
          await _0x295126.wait(_0x5dd9ff * _0x14bb6a);
          let _0x555941 = _0x295126.get(_0x21dd80, "retryer", null);
          if (_0x555941) {
            let _0x53935f = _0x295126.get(_0x21dd80, "retryer_opt", {});
            await _0x555941(_0x21dd80, _0x53935f);
          }
        }
        _0x14bb6a++;
        let _0x22bba8 = null;
        try {
          let _0x1e2b48 = Number(_0x21dd80?.["timeout"]?.["request"] || _0x21dd80?.["timeout"] || _0x43680c),
            _0xdb4877 = false,
            _0x3cc93c = Date.now(),
            _0x38a74b = _0xc471e4(_0x21dd80),
            _0x31ac0a = setTimeout(() => {
              _0xdb4877 = true;
              _0x38a74b.cancel();
            }, _0x1e2b48);
          await _0x38a74b.then(_0x354f73 => {
            _0x232ac8 = _0x354f73;
          }, _0x1a5918 => {
            _0x22bba8 = _0x1a5918;
            _0x232ac8 = _0x1a5918.response;
          }).finally(() => clearTimeout(_0x31ac0a));
          let _0x47b663 = Date.now(),
            _0x2cd134 = _0x47b663 - _0x3cc93c,
            _0x2844ec = _0x232ac8?.["statusCode"] || null;
          if (_0xdb4877 || _0x2407b7.includes(_0x22bba8?.["name"])) {
            let _0x8eafe8 = "";
            _0x22bba8?.["code"] && (_0x8eafe8 += "(" + _0x22bba8.code, _0x22bba8?.["event"] && (_0x8eafe8 += ":" + _0x22bba8.event), _0x8eafe8 += ")");
            this.log("[" + _0x425773 + "]请求超时" + _0x8eafe8 + "(" + _0x2cd134 + "ms)，重试第" + _0x14bb6a + "次");
          } else {
            if (_0xfeaace.includes(_0x22bba8?.["name"])) {
              this.log("[" + _0x425773 + "]请求错误(" + _0x22bba8.code + ")(" + _0x2cd134 + "ms)，重试第" + _0x14bb6a + "次");
            } else {
              if (_0x2844ec) {
                _0x22bba8 && !_0x42d20e.includes(_0x2844ec) && this.log("请求[" + _0x425773 + "]返回[" + _0x2844ec + "]");
              } else {
                let {
                  code = "unknown",
                  name = "unknown"
                } = _0x22bba8 || {};
                this.log("请求[" + _0x425773 + "]错误[" + code + "][" + name + "]");
              }
              break;
            }
          }
        } catch (_0x22e3c1) {
          this.log("[" + _0x425773 + "]请求错误(" + _0x22e3c1.message + ")，重试第" + _0x14bb6a + "次");
        }
      }
      if (_0x232ac8 === null || _0x232ac8 === undefined) {
        const _0x1c65b7 = {
          statusCode: -1,
          headers: null,
          result: null
        };
        return _0x1c65b7;
      }
      let {
          statusCode: _0x2ba34d,
          headers: _0x2f3943,
          body: _0x4ae9aa
        } = _0x232ac8,
        _0x76e492 = _0x295126.get(_0x21dd80, "decode_json", true);
      if (_0x4ae9aa && _0x76e492) {
        try {
          _0x4ae9aa = JSON.parse(_0x4ae9aa);
        } catch {}
      }
      const _0x1f8692 = {
        statusCode: _0x2ba34d,
        headers: _0x2f3943,
        result: _0x4ae9aa
      };
      _0x44abbb = _0x1f8692;
      _0x21dd80.debug_out && console.log(_0x44abbb);
    } catch (_0x5d5437) {
      console.log(_0x5d5437);
    } finally {
      return _0x44abbb;
    }
  }
}
let _0x46ce39 = new _0x364067();
class _0x8a6501 extends _0x364067 {
  constructor(_0x3004eb) {
    super();
    let _0x48d37b = _0x3004eb.split("#");
    _0x48d37b?.[1] ? (this.remark = _0x48d37b[0] || "", this.name = this.remark || "", this.ticket = _0x48d37b[1]) : (this.remark = "", this.name = "", this.ticket = _0x48d37b[0]);
    this.lat = "22.5" + _0x295126.randomString(13, "0123456789");
    this.lng = "114.0" + _0x295126.randomString(13, "0123456789");
    this.t_req = 0;
    this.t_game_draw = 0;
    this.game_gid = 0;
    this.game_coupon = null;
    this.game_coin = 0;
    this.game_timer = {};
    this.wait_flag = {};
    this.game_can_exchange_coupon = true;
    const _0x3fbaed = {
      "User-Agent": _0x9ef809,
      Referer: _0xe4f6f2
    };
    const _0x5ab7a4 = {
      headers: _0x3fbaed
    };
    this.got = this.got.extend(_0x5ab7a4);
  }
  coupon_log(_0xc270b4, _0x52021d = "", _0x11b5eb = {}) {
    _0x11b5eb.notify = _0x295126.get(_0x11b5eb, "notify", true);
    let _0xd11e14 = _0x52021d || "领券";
    this.log(_0xd11e14 + ": " + _0xc270b4, _0x11b5eb);
  }
  get_common_body(_0x3af6ae = {}) {
    const _0x1d9dd7 = {
      isHitButton: true,
      newAppid: 35009,
      userAgent: "",
      openId: "",
      model: "iPhone 14 Pro Max<iPhone15,3>",
      wifi: 1
    };
    return {
      lang: "zh-CN",
      token: this.token,
      access_key_id: 9,
      appversion: "6.7.40",
      channel: 1100000013,
      _ds: "",
      xoid: "",
      xpsid: _0x295126.randomString(),
      xpsid_root: _0x295126.randomString(),
      city_id: 2,
      lat: this.lat,
      lng: this.lng,
      platform: "mp",
      env: _0x1d9dd7,
      f_xpsid: _0x295126.randomString(),
      root_xpsid: _0x295126.randomString()
    };
  }
  get_env(_0x20249b = {}) {
    const _0x3865c5 = {
      token: this.token
    };
    return JSON.stringify(_0x3865c5);
  }
  gen_wsgsig(_0x976069, _0x2b423a = "json", _0xbcb8f3 = {}) {
    let _0x45644b = "";
    if (_0x2b423a == "json") {
      _0x45644b = JSON.stringify(_0x976069);
    } else {
      let _0x320deb = [];
      for (let _0x3cce56 in _0x976069) {
        let _0x548fe0 = _0x976069[_0x3cce56];
        typeof _0x548fe0 == "object" ? _0x320deb.push("" + _0x3cce56 + JSON.stringify(_0x548fe0)) : _0x320deb.push("" + _0x3cce56 + _0x548fe0);
      }
      _0x45644b = _0x320deb.sort().reverse().join("");
    }
    const _0x1b53eb = {
      k: "v",
      v: "1"
    };
    const _0x406bae = {
      k: "os",
      v: "web"
    };
    const _0x5695a5 = {
      k: "av",
      v: "02"
    };
    const _0x5a4309 = {
      k: "kv",
      v: "0000010001"
    };
    let _0x22442c = [{
        k: "ts",
        v: Math.floor(Date.now() / 1000)
      }, _0x1b53eb, _0x406bae, _0x5695a5, _0x5a4309, {
        k: "vl",
        v: Buffer.from(_0x45644b).length
      }, {
        k: "sig",
        v: _0x160351.MD5(_0x4d68f6 + _0x45644b).toString()
      }],
      _0x392da9 = _0x22442c.map(_0x5c4b3c => _0x5c4b3c.k + "=" + _0x5c4b3c.v).join("&"),
      _0x5eef85 = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)],
      _0x4b9881 = [].concat(_0x5eef85);
    for (let _0x827385 = 0; _0x827385 < _0x392da9.length; _0x827385++) {
      _0x4b9881.push(_0x392da9.charCodeAt(_0x827385) ^ _0x5eef85[_0x827385 % 4]);
    }
    let _0x3eb5b8 = 3 - _0x4b9881.length % 3,
      _0x1c3a3d = _0x3eb5b8;
    while (_0x1c3a3d-- > 0) {
      _0x4b9881.push(0);
    }
    let _0x467ebe = "";
    for (let _0x297d7f = 0; _0x297d7f < _0x4b9881.length; _0x297d7f += 3) {
      let _0x4ac78f = _0x4b9881[_0x297d7f] << 16 | _0x4b9881[_0x297d7f + 1] << 8 | _0x4b9881[_0x297d7f + 2];
      _0x467ebe += _0x5805cb.charAt(_0x4ac78f >> 18 & 63) + _0x5805cb.charAt(_0x4ac78f >> 12 & 63) + _0x5805cb.charAt(_0x4ac78f >> 6 & 63) + _0x5805cb.charAt(_0x4ac78f & 63);
    }
    _0x3eb5b8 && (_0x467ebe = _0x467ebe.slice(0, -_0x3eb5b8));
    return "dd03-" + _0x467ebe;
  }
  async signInByOpenid(_0x5b13bd = {}) {
    let _0x5c1ec9 = false;
    try {
      const _0x4816d5 = {
        channel: 1100000003
      };
      const _0x484204 = {
        api_version: "1.0.1",
        appid: 35009,
        role: 1,
        extra_info: _0x4816d5,
        device_name: "iPhone 14 Pro Max<iPhone15,3>",
        sec_session_id: "",
        ddfp: "",
        lang: "zh-CN",
        wsgenv: "",
        model: "iPhone iPhone 14 Pro Max<iPhone15,3>",
        unionid_through_login: false,
        oauthcode: "",
        ticket: this.ticket,
        with_temp_ticket: true
      };
      let _0x34d3b7 = {
          q: JSON.stringify(_0x484204)
        },
        _0x516387 = {
          fn: "signInByOpenid",
          method: "post",
          url: "https://epassport.diditaxi.com.cn/passport/login/v5/signInByOpenid",
          searchParams: {
            wsgsig: this.gen_wsgsig(_0x34d3b7, "form")
          },
          form: _0x34d3b7
        },
        {
          result: _0x5172b6,
          statusCode: _0x5eb201
        } = await this.request(_0x295126.copy(_0x516387)),
        _0xbd84a3 = _0x295126.get(_0x5172b6, "errno", _0x5eb201);
      if (_0xbd84a3 == 0) {
        let {
          cell: _0x4cd955,
          ticket: _0x43b585,
          temp_ticket: _0x378292,
          uid: _0x1bf63e
        } = _0x5172b6;
        this.uid = _0x1bf63e;
        this.ticket = _0x43b585;
        this.token = _0x378292;
        this.mobile = _0x4cd955;
        this.name = this.name || _0x4cd955;
        this.got = this.got.extend({
          headers: {
            "Didi-Ticket": this.token
          }
        });
        this.log("登录成功: uid=" + _0x1bf63e);
        _0x2084ad();
        _0x5c1ec9 = true;
      } else {
        let _0x1e92ed = _0x295126.get(_0x5172b6, "error", "");
        const _0x39c727 = {
          notify: true
        };
        this.log("登录失败(先检查格式有没有填错)[" + _0xbd84a3 + "]: " + _0x1e92ed, _0x39c727);
      }
    } catch (_0xc513a6) {
      console.log(_0xc513a6);
    } finally {
      return _0x5c1ec9;
    }
  }
  async sign_index(_0x332b62 = {}) {
    try {
      let _0xccada6 = {
        fn: "sign_index",
        method: "post",
        url: "https://ut.xiaojukeji.com/ut/janitor/api/home/sign/index",
        json: this.get_common_body()
      };
      {
        let {
            result: _0x3b2606,
            statusCode: _0x41148a
          } = await this.request(_0x295126.copy(_0xccada6)),
          _0x208b24 = _0x295126.get(_0x3b2606, "errno", _0x41148a);
        if (_0x208b24 == 0) {
          let {
            visited: _0x12c9a7,
            total_progress: _0xe0e4a0,
            current_progress: _0x1bc006,
            finished_times: _0x1dcea3
          } = _0x3b2606?.["data"];
          _0x1dcea3 >= _0x1bc006 ? this.log("今天已签到: " + _0x1dcea3 + "/" + _0xe0e4a0) : await this.sign_do();
        } else {
          let _0x441367 = _0x295126.get(_0x3b2606, "errmsg", "");
          this.log("查询签到信息失败[" + _0x208b24 + "]: " + _0x441367);
        }
      }
      {
        let {
            result: _0x143f99,
            statusCode: _0x136016
          } = await this.request(_0x295126.copy(_0xccada6)),
          _0x44ce5c = _0x295126.get(_0x143f99, "errno", _0x136016);
        if (_0x44ce5c == 0) {
          let {
            lottery_chance: _0x57710f,
            activity_id: _0x1ea8f1
          } = _0x143f99?.["data"];
          this.log("可以抽奖" + _0x57710f + "次");
          while (_0x57710f-- > 0) {
            await this.doLottery(_0x1ea8f1);
          }
        } else {
          let _0x322aaf = _0x295126.get(_0x143f99, "errmsg", "");
          this.log("查询抽奖次数失败[" + _0x44ce5c + "]: " + _0x322aaf);
        }
      }
    } catch (_0x9c9f9) {
      console.log(_0x9c9f9);
    }
  }
  async sign_do(_0x3b9694 = {}) {
    try {
      let _0x20ee80 = {
          fn: "sign_do",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/janitor/api/action/sign/do",
          json: this.get_common_body()
        },
        {
          result: _0x576796,
          statusCode: _0x55cd2f
        } = await this.request(_0x295126.copy(_0x20ee80)),
        _0x539e32 = _0x295126.get(_0x576796, "errno", _0x55cd2f);
      if (_0x539e32 == 0) {
        let {
          total_progress: _0xccc455,
          current_progress: _0x1e6ef9,
          finished_times: _0x4a4463
        } = _0x576796?.["data"];
        this.log("签到成功: " + _0x4a4463 + "/" + _0xccc455);
      } else {
        let _0x470590 = _0x295126.get(_0x576796, "errmsg", "");
        this.log("签到失败[" + _0x539e32 + "]: " + _0x470590);
      }
    } catch (_0x116e4d) {
      console.log(_0x116e4d);
    }
  }
  async doLottery(_0x38435b, _0x57135f = {}) {
    try {
      let _0x152277 = {
        fn: "doLottery",
        method: "post",
        url: "https://ut.xiaojukeji.com/ut/janitor/api/action/lottery/doLottery",
        json: {
          ...this.get_common_body(),
          act_id: _0x38435b
        }
      };
      await _0x295126.wait_gap_interval(this.t_req, _0x56e37f);
      let {
        result: _0x407296,
        statusCode: _0x458f44
      } = await this.request(_0x295126.copy(_0x152277));
      this.t_req = Date.now();
      let _0x2e793c = _0x295126.get(_0x407296, "errno", _0x458f44);
      if (_0x2e793c == 0) {
        let _0x573e97 = [],
          {
            win_lottery: _0x5caf94,
            prize_data: _0x256ceb
          } = _0x407296?.["data"];
        if (_0x5caf94) {
          for (let _0x131dd3 of _0x256ceb || []) {
            let {
              name: _0x3a4b68,
              threshold_desc: _0x105189,
              coupon_amount: _0x51eb32
            } = _0x131dd3;
            _0x573e97.push("[" + _0x3a4b68 + "]" + _0x105189 + "减" + _0x51eb32);
          }
        }
        this.log("抽奖: " + (_0x573e97.join(", ") || "空气"));
      } else {
        let _0xba9c19 = _0x295126.get(_0x407296, "errmsg", "");
        this.log("抽奖失败[" + _0x2e793c + "]: " + _0xba9c19);
      }
    } catch (_0x22af57) {
      console.log(_0x22af57);
    }
  }
  async product_init(_0x481ab1, _0x4fbfad = {}) {
    try {
      let _0x29df90 = {
        fn: "product_init",
        method: "post",
        url: "https://api.didi.cn/webx/chapter/product/init",
        json: {
          ...this.get_common_body(),
          uid: this.uid,
          dchn: _0x481ab1,
          args: {
            key: this.uid,
            invoke_key: "default",
            runtime_args: {
              dsi: _0x52ec35,
              env: {
                dchn: _0x481ab1,
                model: "iPhone 14 Pro Max<iPhone15,3>",
                openId: "",
                sceneId: 1001,
                latitude: Number(this.lat),
                newAppid: "35009",
                isOpenWeb: false,
                longitude: Number(this.lng),
                openIdType: 1,
                fromChannel: "2",
                isHitButton: false
              },
              lat: this.lat,
              lng: this.lng,
              ncc: true,
              scene: 1037,
              token: this.token,
              x_test_user: {
                key: this.uid
              }
            }
          },
          xbiz: "110105",
          xenv: "wxmp",
          xoid: "",
          openId: "",
          prod_key: "wyc-cpc-v-three",
          xspm_from: "none.none.none.none",
          xpsid_from: "",
          is_prefetch: true,
          xpsid_share: "",
          need_page_config: true,
          need_share_config: true
        }
      };
      await this.request(_0x295126.copy(_0x29df90));
    } catch (_0x2f839e) {
      console.log(_0x2f839e);
    }
  }
  async getBubble(_0x5dce15 = {}) {
    try {
      let _0x4fc615 = {
          fn: "getBubble",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/home/getBubble",
          json: {
            ...this.get_common_body(),
            env: this.get_env()
          }
        },
        {
          result: _0x2fde86,
          statusCode: _0x2cb808
        } = await this.request(_0x295126.copy(_0x4fc615)),
        _0x43bf44 = _0x295126.get(_0x2fde86, "errno", _0x2cb808);
      if (_0x43bf44 == 0) {
        let {
          bubble_list: _0x4e958f
        } = _0x2fde86?.["data"];
        for (let _0x4087a2 of (_0x4e958f || []).filter(_0x283d36 => _0x283d36.cycle_id)) {
          await this.clickBubble(_0x4087a2);
        }
      } else {
        let _0xc11848 = _0x295126.get(_0x2fde86, "errmsg", "");
        this.log("查询福利金可领取气泡失败[" + _0x43bf44 + "]: " + _0xc11848);
      }
    } catch (_0xa7bbdd) {
      console.log(_0xa7bbdd);
    }
  }
  async clickBubble(_0x57bed6, _0x3d1507 = {}) {
    try {
      let _0x52aa72 = {
          fn: "clickBubble",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/action/clickBubble",
          json: {
            ...this.get_common_body(),
            cycle_id: _0x57bed6.cycle_id,
            bubble_type: _0x57bed6.bubble_type,
            env: this.get_env()
          }
        },
        {
          result: _0x4e8cc4,
          statusCode: _0x27c576
        } = await this.request(_0x295126.copy(_0x52aa72)),
        _0x2c3b5d = _0x295126.get(_0x4e8cc4, "errno", _0x27c576);
      if (_0x2c3b5d == 0) {
        this.log("领取气泡[" + _0x57bed6.pre_content + "]奖励成功: " + _0x57bed6.reward_count + "福利金");
      } else {
        let _0x21dd8a = _0x295126.get(_0x4e8cc4, "errmsg", "");
        this.log("领取福利金气泡奖励失败[" + _0x2c3b5d + "]: " + _0x21dd8a);
      }
    } catch (_0x3319c8) {
      console.log(_0x3319c8);
    }
  }
  async divideData(_0x9b07d = {}) {
    try {
      let _0x5b7920 = {
          fn: "divideData",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/home/divideData",
          json: {
            ...this.get_common_body(),
            env: this.get_env()
          }
        },
        {
          result: _0x479784,
          statusCode: _0x6c7b4b
        } = await this.request(_0x295126.copy(_0x5b7920)),
        _0x1c7294 = _0x295126.get(_0x479784, "errno", _0x6c7b4b);
      if (_0x1c7294 == 0) {
        for (let _0x1c0390 of Object.keys(_0x479784?.["data"]?.["divide_data"]?.["divide"] || {}) || []) {
          let _0x58e3f9 = _0x479784.data.divide_data.divide[_0x1c0390],
            {
              status: _0x2663a4
            } = _0x58e3f9;
          switch (_0x2663a4) {
            case 1:
              {
                await this.joinDivide(_0x1c0390, _0x58e3f9);
                break;
              }
            case 2:
              {
                let _0x1c8875 = _0x295126.time("yyyy-MM-dd");
                _0x1c8875 == _0x1c0390 ? await this.divideReward(_0x1c0390, _0x58e3f9) : this.log("已投注参加[" + _0x1c0390 + "]期瓜瓜乐");
                break;
              }
            case 3:
              {
                this.log("已打卡[" + _0x1c0390 + "]期瓜瓜乐, 等待瓜分");
                break;
              }
            case 4:
              {
                this.log("已瓜分[" + _0x1c0390 + "]期瓜瓜乐");
                break;
              }
            default:
              {
                this.log("未知[" + _0x1c0390 + "]期瓜瓜乐参与状态[" + _0x2663a4 + "]");
                break;
              }
          }
        }
      } else {
        let _0x130299 = _0x295126.get(_0x479784, "errmsg", "");
        this.log("查询瓜瓜乐状态失败[" + _0x1c7294 + "]: " + _0x130299);
      }
    } catch (_0x201785) {
      console.log(_0x201785);
    }
  }
  async joinDivide(_0x45f8aa, _0x2732ff, _0x5b4205 = {}) {
    try {
      let _0xfd80c3 = {
          fn: "joinDivide",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/action/joinDivide",
          json: {
            ...this.get_common_body(),
            env: this.get_env(),
            activity_id: _0x2732ff.activity_id,
            count: _0x2732ff.button.count,
            type: _0x2732ff.button.type
          }
        },
        {
          result: _0x64308d,
          statusCode: _0x4a4ba6
        } = await this.request(_0x295126.copy(_0xfd80c3)),
        _0xbcd7aa = _0x295126.get(_0x64308d, "errno", _0x4a4ba6);
      if (_0xbcd7aa == 0) {
        this.log("投注参加[" + _0x45f8aa + "]期瓜瓜乐成功");
      } else {
        let _0x41c2e9 = _0x295126.get(_0x64308d, "errmsg", "");
        this.log("投注参加[" + _0x45f8aa + "]期瓜瓜乐失败[" + _0xbcd7aa + "]: " + _0x41c2e9);
      }
    } catch (_0x2ffbea) {
      console.log(_0x2ffbea);
    }
  }
  async divideReward(_0x1aeb53, _0x85cce7, _0x91bded = {}) {
    try {
      let _0x669d9f = {
          fn: "divideReward",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/action/divideReward",
          json: {
            ...this.get_common_body(),
            env: this.get_env(),
            activity_id: _0x85cce7.activity_id,
            task_id: _0x85cce7.task_id
          }
        },
        {
          result: _0x258b18,
          statusCode: _0x37667b
        } = await this.request(_0x295126.copy(_0x669d9f)),
        _0x14176e = _0x295126.get(_0x258b18, "errno", _0x37667b);
      if (_0x14176e == 0) {
        this.log("打卡[" + _0x1aeb53 + "]期瓜瓜乐成功, 等待瓜分");
      } else {
        let _0x1fa84e = _0x295126.get(_0x258b18, "errmsg", "");
        this.log("打卡[" + _0x1aeb53 + "]期瓜瓜乐失败[" + _0x14176e + "]: " + _0x1fa84e);
      }
    } catch (_0x502d08) {
      console.log(_0x502d08);
    }
  }
  async productInit(_0x10e967 = {}) {
    try {
      let _0x677300 = {
        fn: "productInit",
        method: "post",
        url: "https://api.didi.cn/webx/v2/productInit",
        json: {
          ...this.get_common_body(),
          dchn: "q8d86BM",
          args: {
            invoke_key: "default",
            key: "",
            runtime_args: {
              token: this.token,
              lat: this.lat,
              lng: this.lng,
              env: this.get_env()
            }
          }
        }
      };
      {
        let {
            result: _0x122427,
            statusCode: _0x6a7bf3
          } = await this.request(_0x295126.copy(_0x677300)),
          _0x5a4ac3 = _0x295126.get(_0x122427, "errno", _0x6a7bf3);
        if (_0x5a4ac3 == 0) {
          let {
            now_track_id = null,
            sign_activity = null
          } = _0x122427?.["data"]?.["conf"]?.["strategy_data"]?.["data"]?.["daily_sign"] || {};
          for (let _0x460786 of sign_activity || []) {
            if (_0x460786.activity_turn_track_id == now_track_id) {
              switch (_0x460786.sign_status) {
                case 0:
                  {
                    await this.dailySign();
                    break;
                  }
                case 1:
                  {
                    this.log("今天福利金已签到");
                    break;
                  }
                default:
                  {
                    this.log("未知福利金签到状态[" + _0x460786.sign_status + "]");
                    break;
                  }
              }
              break;
            }
          }
          await this.getBubble();
          await this.divideData();
        } else {
          let _0x314679 = _0x295126.get(_0x122427, "errmsg", "");
          this.log("查询福利金签到状态失败[" + _0x5a4ac3 + "]: " + _0x314679);
        }
      }
      {
        let {
            result: _0x5bcbab,
            statusCode: _0x11079a
          } = await this.request(_0x295126.copy(_0x677300)),
          _0x25fdfc = _0x295126.get(_0x5bcbab, "errno", _0x11079a);
        if (_0x25fdfc == 0) {
          let _0x43a8c1 = _0x5bcbab?.["data"]?.["conf"]?.["strategy_data"]?.["data"]?.["bonus_info"]?.["total_amount"] || 0;
          const _0x367eca = {
            notify: true
          };
          this.log("福利金余额: " + _0x43a8c1, _0x367eca);
        } else {
          let _0x344771 = _0x295126.get(_0x5bcbab, "errmsg", "");
          this.log("查询福利金失败[" + _0x25fdfc + "]: " + _0x344771);
        }
      }
    } catch (_0x232fe1) {
      console.log(_0x232fe1);
    }
  }
  async dailySign(_0x405bdd = {}) {
    try {
      let _0x29fdfb = {
          fn: "dailySign",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/action/dailySign",
          json: {
            ...this.get_common_body(),
            dchn: "q8d86BM",
            env: this.get_env()
          }
        },
        {
          result: _0x381489,
          statusCode: _0x1a50c4
        } = await this.request(_0x295126.copy(_0x29fdfb)),
        _0x3a879c = _0x295126.get(_0x381489, "errno", _0x1a50c4);
      if (_0x3a879c == 0) {
        if (_0x381489?.["data"]?.["prize_status"]) {
          let {
            subsidy_amount: _0x1bad02
          } = _0x381489?.["data"]?.["subsidy_state"];
          this.log("福利金签到成功: " + _0x1bad02 + "福利金");
        } else {
          this.log("福利金签到成功, 没有奖品");
        }
      } else {
        let _0xe29e17 = _0x295126.get(_0x381489, "errmsg", "");
        this.log("福利金签到失败[" + _0x3a879c + "]: " + _0xe29e17);
      }
    } catch (_0x44edf3) {
      console.log(_0x44edf3);
    }
  }
  async getTaskList_v3(_0x42e7c0 = {}) {
    try {
      let _0x2445e8 = {
          fn: "getTaskList_v3",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/home/getTaskList/v3",
          json: {
            ...this.get_common_body(),
            env: this.get_env()
          }
        },
        {
          result: _0x36a24f,
          statusCode: _0x1ea91a
        } = await this.request(_0x295126.copy(_0x2445e8)),
        _0x89c69e = _0x295126.get(_0x36a24f, "errno", _0x1ea91a);
      if (_0x89c69e == 0) {
        let {
          task_list: _0x6f7a58
        } = _0x36a24f?.["data"];
        for (let _0x20aa1e of _0x6f7a58 || []) {
          switch (_0x20aa1e.status) {
            case "not_enroll":
              {
                await this.receiveTask_v2(_0x20aa1e);
                break;
              }
            case "ing":
              {
                await this.receiveTask_v2(_0x20aa1e);
                break;
              }
            case "complete":
              {
                await this.taskReward(_0x20aa1e);
                break;
              }
            case "finish":
              {
                break;
              }
          }
        }
      } else {
        let _0x4beb45 = _0x295126.get(_0x36a24f, "errmsg", "");
        this.log("查询福利金任务列表失败[" + _0x89c69e + "]: " + _0x4beb45);
      }
    } catch (_0x24ef77) {
      console.log(_0x24ef77);
    }
  }
  async receiveTask_v2(_0x4e1eb7, _0x3add99 = {}) {
    try {
      let _0x359cab = {
          fn: "receiveTask_v2",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/action/receiveTask/v2",
          json: {
            ...this.get_common_body(),
            env: this.get_env(),
            ..._0x4e1eb7
          }
        },
        {
          result: _0x577e00,
          statusCode: _0x3f74a6
        } = await this.request(_0x295126.copy(_0x359cab)),
        _0x6c39cc = _0x295126.get(_0x577e00, "errno", _0x3f74a6);
      if (_0x6c39cc == 0) {
        _0x577e00?.["data"]?.["result"] ? (this.log("接受任务[" + _0x4e1eb7.title + "]成功"), await this.taskReward(_0x4e1eb7)) : this.log("接受任务[" + _0x4e1eb7.title + "]失败");
      } else {
        let _0x579b57 = _0x295126.get(_0x577e00, "errmsg", "");
        this.log("接受任务[" + _0x4e1eb7.title + "]失败[" + _0x6c39cc + "]: " + _0x579b57);
      }
    } catch (_0x5d2d23) {
      console.log(_0x5d2d23);
    }
  }
  async taskReward(_0x4229e2, _0x50f7b1 = {}) {
    try {
      let {
          title: _0x2f0b8c,
          activity_id: _0x185135,
          task_id: _0x3f9228
        } = _0x4229e2,
        _0x3454a4 = {
          fn: "taskReward",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/welfare/api/action/taskReward",
          json: {
            ...this.get_common_body(),
            env: this.get_env(),
            activity_id: _0x185135,
            task_id: _0x3f9228
          }
        },
        {
          result: _0x27b687,
          statusCode: _0x2af70f
        } = await this.request(_0x295126.copy(_0x3454a4)),
        _0x117673 = _0x295126.get(_0x27b687, "errno", _0x2af70f);
      if (_0x117673 == 0) {
        this.log("领取任务[" + _0x2f0b8c + "]奖励成功");
      } else {
        let _0xa17fa5 = _0x295126.get(_0x27b687, "errmsg", "");
        this.log("领取任务[" + _0x2f0b8c + "]奖励失败[" + _0x117673 + "]: " + _0xa17fa5);
      }
    } catch (_0x1ecedc) {
      console.log(_0x1ecedc);
    }
  }
  get_game_gid() {
    return (++this.game_gid).toString();
  }
  async game_ws_send_data(_0x4d7774, _0x5ad542, _0x318cd2 = {}) {
    let _0x36e911 = {
      msg_type: _0x4d7774,
      game_data: _0x5ad542,
      gid: this.get_game_gid()
    };
    this.ws_client.send(JSON.stringify(_0x36e911));
  }
  async game_RiskParamInit(_0x869c43 = {}) {
    let _0x4dbecd = {
      "D-Header-T": this.token,
      "D-Header-Did": "",
      "D-Header-Ddfp": "",
      "D-Header-OpenId": "",
      "D-Header-FromChannel": "0",
      "D-Header-Appid": "35009",
      "D-Header-IsHitButton": "true",
      "D-Header-IsOpenWeb": "true",
      "D-Header-AppVersion": "",
      "D-Header-Dchn": "Yk1z1Jx",
      "D-Header-Model": "",
      "D-Header-WifiName": "",
      "D-Header-K": "X!p2B3*qvAuFawDR",
      "D-Header-xAxes": "0",
      "D-Header-yAxes": "0",
      "D-Header-UserAgent": "",
      "D-Header-Platform": "ios",
      "D-Header-DeviceOrientation": "portrait",
      "D-Header-Toshi": ""
    };
    await this.game_ws_send_data("RiskParamInit", _0x4dbecd);
  }
  async game_send_common_msg(_0x4b2e7e, _0x3ecbc6 = {}, _0x14bf5e = {}) {
    let _0x5e4d85 = {
      ..._0x3ecbc6,
      platform: 1,
      token: this.token
    };
    await this.game_ws_send_data(_0x4b2e7e, _0x5e4d85);
  }
  game_set_wait_flag(_0x4daed6, _0x45d99e, _0x15a89b = {}) {
    let _0x57a229 = this;
    this.wait_flag[_0x4daed6] = true;
    this.game_timer[_0x4daed6] = setTimeout(() => {
      _0x57a229.wait_flag[_0x4daed6] = false;
    }, _0x45d99e);
  }
  game_clear_wait_flag(_0x1d25a5, _0x4e2737 = {}) {
    this.game_timer[_0x1d25a5] && clearTimeout(this.game_timer[_0x1d25a5]);
    this.wait_flag[_0x1d25a5] = false;
  }
  async game_wait_flag(_0x23f3e2, _0x382a30 = {}) {
    while (this.wait_flag[_0x23f3e2]) {
      await _0x295126.wait(100);
    }
  }
  async game_handler_RiskParamInit(_0x3e3bef) {
    this.game_clear_wait_flag("RiskParamInit");
  }
  async game_handler_CoasterRefreshPower(_0x2f3688) {
    try {
      let {
        data: _0x2c080d,
        errmsg: _0x5ea61e,
        errno: _0x4b3567
      } = _0x2f3688;
      if (_0x4b3567 == 0) {
        this.game_timer.CoasterRefreshPower && clearTimeout(this.game_timer.CoasterRefreshPower);
        let _0x6b3fc4 = _0x2c080d?.["recovery_power"]?.["power"] || 0;
        this.log("游戏可以抽奖" + _0x6b3fc4 + "次");
        while (_0x6b3fc4-- > 0) {
          await _0x295126.wait_gap_interval(this.t_game_draw, _0x39690d);
          this.game_set_wait_flag("CoasterDraw", _0x1d906a);
          await this.game_send_common_msg("CoasterDraw");
          this.t_game_draw = Date.now();
          await this.game_wait_flag("CoasterDraw");
        }
        await _0x295126.wait(1000);
        this.wait_flag.CoasterRefreshPower = false;
      } else {
        this.log("获取游戏参数错误[" + _0x4b3567 + "]: " + _0x5ea61e);
      }
    } catch (_0x52655f) {
      console.log(_0x52655f);
    } finally {
      this.game_clear_wait_flag("CoasterRefreshPower");
    }
  }
  async game_handler_CoasterDraw(_0x3a1217) {
    try {
      let {
        data: _0x3fd030,
        errmsg: _0x2e1ea3,
        errno: _0x302736
      } = _0x3a1217;
      if (_0x302736 == 0) {
        let {
            coin: _0x2ec554,
            coupon: _0x2f4e30,
            draw_item: _0x1f9a61
          } = _0x3fd030,
          {
            id: _0x9d33d3,
            num: _0x47b3cf,
            type: _0x862bb2
          } = _0x1f9a61;
        this.log("游戏抽奖: " + _0x47b3cf + (_0x114582[_0x9d33d3] || "未知类型[" + _0x9d33d3 + "]"));
        this.game_coupon = _0x2f4e30;
        this.game_coin = _0x2ec554;
      } else {
        this.log("游戏抽奖错误[" + _0x302736 + "]: " + _0x2e1ea3);
      }
    } catch (_0x379507) {
      console.log(_0x379507);
    } finally {
      this.game_clear_wait_flag("CoasterDraw");
    }
  }
  async game_handler_CoasterGetUserNowCouponLists(_0x329b6b) {
    try {
      let {
        data: _0x2bcb9c,
        errmsg: _0x273d8f,
        errno: _0x593889
      } = _0x329b6b;
      if (_0x593889 == 0) {
        let {
          coupon: _0x3b65d9
        } = _0x2bcb9c;
        for (let _0x57cac8 of (_0x3b65d9 || []).filter(_0x89fb4a => !_0x89fb4a.exchanged)) {
          if (!this.game_can_exchange_coupon) {
            break;
          }
          this.game_set_wait_flag("CoasterExchangePower", _0x1d906a);
          const _0x3d4801 = {
            coupon_id: _0x57cac8.coupon_id
          };
          await this.game_send_common_msg("CoasterExchangePower", _0x3d4801);
          await this.game_wait_flag("CoasterExchangePower");
        }
      } else {
        this.log("查询券兑换体力错误[" + _0x593889 + "]: " + _0x273d8f);
      }
    } catch (_0xade89b) {
      console.log(_0xade89b);
    } finally {
      this.game_clear_wait_flag("CoasterGetUserNowCouponLists");
    }
  }
  async game_handler_CoasterExchangePower(_0x596349) {
    try {
      let {
        data: _0x178be3,
        errmsg: _0x45f83b,
        errno: _0x136e00
      } = _0x596349;
      if (_0x136e00 == 0) {
        let {
          power: _0x4d7f6f
        } = _0x178be3;
        this.game_power = _0x4d7f6f;
      } else {
        this.log("券兑换体力错误[" + _0x136e00 + "]: " + _0x45f83b);
        _0x45f83b?.["includes"]("已达上限") && (this.game_can_exchange_coupon = false);
      }
    } catch (_0xc23397) {
      console.log(_0xc23397);
    } finally {
      this.game_clear_wait_flag("CoasterExchangePower");
    }
  }
  async game_handler_MissionList(_0x293872) {
    try {
      let {
        data: _0x2eee27,
        errmsg: _0x264cca,
        errno: _0x399688
      } = _0x293872;
      if (_0x399688 == 0) {
        let {
          missions: _0x1b77b8
        } = _0x2eee27;
        for (let _0x21b9dc of _0x1b77b8 || []) {
          if (_0x2a2116.includes(_0x21b9dc.msg_key)) {
            continue;
          }
          if (_0x21b9dc.progress == 0) {
            this.game_set_wait_flag("MissionUpdate", _0x1d906a);
            const _0x3fbc7c = {
              mission_id: _0x21b9dc.id,
              game_id: 30
            };
            await this.game_send_common_msg("MissionUpdate", _0x3fbc7c);
            await this.game_wait_flag("MissionUpdate");
          } else {
            this.game_set_wait_flag("MissionAward", _0x1d906a);
            const _0x22ac46 = {
              mission_id: _0x21b9dc.id,
              game_id: 30
            };
            await this.game_send_common_msg("MissionAward", _0x22ac46);
            await this.game_wait_flag("MissionAward");
          }
        }
      } else {
        this.log("查询任务列表错误[" + _0x399688 + "]: " + _0x264cca);
      }
    } catch (_0x200c31) {
      console.log(_0x200c31);
    } finally {
      this.game_clear_wait_flag("MissionList");
    }
  }
  async game_handler_PushMissionList(_0x30895a) {
    try {
      let {
        data: _0x2cbb7f,
        errmsg: _0x125958,
        errno: _0x3be274
      } = _0x30895a;
      if (_0x3be274 == 0) {
        for (let _0x33411a of _0x2cbb7f || []) {
          this.game_set_wait_flag("MissionAward", _0x1d906a);
          const _0x3d17dd = {
            mission_id: _0x33411a.id,
            game_id: 30
          };
          await this.game_send_common_msg("MissionAward", _0x3d17dd);
          await this.game_wait_flag("MissionAward");
        }
      } else {
        this.log("[PushMissionList]错误[" + _0x3be274 + "]: " + _0x125958);
      }
    } catch (_0x5135c0) {
      console.log(_0x5135c0);
    } finally {
      this.game_clear_wait_flag("PushMissionList");
    }
  }
  async game_handler_MissionUpdate(_0x3118e8) {
    try {
      let {
        data: _0x59bd64,
        errmsg: _0x438bf5,
        errno: _0x13dbd0
      } = _0x3118e8;
      if (!(_0x13dbd0 == 0)) {
        this.log("完成任务错误[" + _0x13dbd0 + "]: " + _0x438bf5);
      }
    } catch (_0x334ca4) {
      console.log(_0x334ca4);
    } finally {
      this.game_clear_wait_flag("MissionUpdate");
    }
  }
  async game_handler_MissionAward(_0x551a4d) {
    try {
      let {
        data: _0x476c65,
        errmsg: _0x2a76b7,
        errno: _0x533723
      } = _0x551a4d;
      if (_0x533723 == 0) {
        let {
            title: _0x3476cf,
            reward: _0x24d21b
          } = _0x476c65,
          _0x126ab9 = [];
        for (let _0x3561d4 of _0x24d21b || []) {
          _0x126ab9.push(_0x3561d4.name + "x" + _0x3561d4.count);
        }
        this.log("领取任务[" + _0x3476cf + "]奖励: " + (_0x126ab9.join(", ") || "空气"));
      } else {
        this.log("领取任务奖励错误[" + _0x533723 + "]: " + _0x2a76b7);
      }
    } catch (_0x30f559) {
      console.log(_0x30f559);
    } finally {
      this.game_clear_wait_flag("MissionAward");
    }
  }
  async game_handler_CoasterWheelUpgrade(_0x45dd7c) {
    try {
      let {
        data: _0x40fcf3,
        errmsg: _0x574c3a,
        errno: _0x17c87f
      } = _0x45dd7c;
      if (_0x17c87f == 0) {
        let {
          wheel: _0x2e52ee
        } = _0x40fcf3;
        this.log("升级转盘成功: Lv." + _0x2e52ee.wheel_level);
      } else {
        this.log("升级转盘错误[" + _0x17c87f + "]: " + _0x574c3a);
      }
    } catch (_0x41d390) {
      console.log(_0x41d390);
    } finally {
      this.game_clear_wait_flag("CoasterWheelUpgrade");
    }
  }
  async game_handler_CoasterSignList(_0x50906b) {
    try {
      let {
        data: _0x79e5e5,
        errmsg: _0x52ba0b,
        errno: _0x5c4bde
      } = _0x50906b;
      if (_0x5c4bde == 0) {
        let {
          last_sign_time: _0x376393,
          sign_times: _0x14c893
        } = _0x79e5e5;
        _0x376393 && _0x295126.time("yyyyMMdd", _0x376393 * 1000) == _0x295126.time("yyyyMMdd") ? this.log("游戏今天已签到, 已签到" + _0x14c893 + "天") : (this.game_set_wait_flag("CoasterSign", _0x1d906a), await this.game_send_common_msg("CoasterSign"), await this.game_wait_flag("CoasterSign"));
      } else {
        this.log("查询游戏签到状态错误[" + _0x5c4bde + "]: " + _0x52ba0b);
      }
    } catch (_0x2c6f77) {
      console.log(_0x2c6f77);
    } finally {
      this.game_clear_wait_flag("CoasterSignList");
    }
  }
  async game_handler_CoasterSign(_0x15a170) {
    try {
      let {
        data: _0x2bf46e,
        errmsg: _0x4df2f7,
        errno: _0x1729a1
      } = _0x15a170;
      if (_0x1729a1 == 0) {
        let {
            rewards: _0x1709af,
            sign_times: _0x40498c
          } = _0x2bf46e,
          _0x548b11 = [];
        for (let _0x31acfc of _0x1709af || []) {
          _0x548b11.push(_0x31acfc.name + "x" + _0x31acfc.num);
        }
        this.log("游戏签到成功, 已签到" + _0x40498c + "天: " + (_0x548b11.join(", ") || "空气"));
      } else {
        this.log("游戏签到错误[" + _0x1729a1 + "]: " + _0x4df2f7);
      }
    } catch (_0x28d111) {
      console.log(_0x28d111);
    } finally {
      this.game_clear_wait_flag("CoasterSign");
    }
  }
  async game_handler_CoasterNew(_0x4d7aac) {
    try {
      let {
        data: _0x4c54cb,
        errmsg: _0x5af8f4,
        errno: _0x5c0840
      } = _0x4d7aac;
      if (!(_0x5c0840 == 0)) {
        this.log("[CoasterNew]错误[" + _0x5c0840 + "]: " + _0x5af8f4);
      }
    } catch (_0x5fecbf) {
      console.log(_0x5fecbf);
    } finally {
      this.game_clear_wait_flag("CoasterNew");
    }
  }
  async game_message_dispatch(_0x1f3fb8, _0x4c9b01 = {}) {
    try {
      let _0x21a6b8 = JSON.parse(_0x1f3fb8),
        {
          msg_type: _0x261933,
          game_data: _0x381fdc
        } = _0x21a6b8,
        _0x4baa73 = "game_handler_" + _0x261933;
      this[_0x4baa73] ? await this[_0x4baa73](_0x381fdc) : this.log("未定义消息处理: " + _0x261933);
    } catch (_0x2c8aab) {
      console.log(_0x2c8aab);
      this.log("解析消息错误: " + _0x1f3fb8);
    }
  }
  async game_ws_task(_0x3bf865 = {}) {
    this.game_set_wait_flag("RiskParamInit", _0x1d906a);
    await this.game_RiskParamInit();
    await this.game_wait_flag("RiskParamInit");
    this.game_set_wait_flag("CoasterSignList", _0x1d906a);
    await this.game_send_common_msg("CoasterSignList");
    await this.game_wait_flag("CoasterSignList");
    this.game_set_wait_flag("CoasterGetUserNowCouponLists", _0x1d906a);
    await this.game_send_common_msg("CoasterGetUserNowCouponLists");
    await this.game_wait_flag("CoasterGetUserNowCouponLists");
    this.game_set_wait_flag("MissionList", _0x1d906a);
    const _0x1219f9 = {
      game_id: 30
    };
    await this.game_send_common_msg("MissionList", _0x1219f9);
    await this.game_wait_flag("MissionList");
    await this.coaster_hall();
  }
  async coaster_game_task(_0x3ab2d0 = {}) {
    let _0x494dbf = new URL(_0x3a0cfd);
    _0x494dbf.searchParams.append("biz_type", "30");
    _0x494dbf.searchParams.append("token", this.token);
    this.ws_client = new _0x3be1c4(_0x494dbf.toString());
    let _0x29f015 = this;
    this.ws_client.on("message", async _0x27b64d => {
      await _0x29f015.game_message_dispatch(_0x27b64d);
    });
    this.ws_client.on("error", _0x57027a => {
      _0x29f015.error("游戏连接发生错误: " + _0x57027a.message);
    });
    let _0x3dde4d = new Promise(_0x5c2e75 => {
      this.ws_client.on("open", async () => {
        _0x29f015.log("游戏连接成功");
        _0x5c2e75();
      });
    });
    await _0x3dde4d;
    await this.game_ws_task();
    this.ws_client.close();
  }
  async coaster_hall(_0xdab655 = {}) {
    try {
      let _0x2ffbd5 = {
        fn: "coaster_hall",
        method: "post",
        url: "https://game.xiaojukeji.com/api/game/coaster/hall",
        json: {
          ...this.get_common_body(),
          platform: 1
        }
      };
      {
        let {
            result: _0x39deee,
            statusCode: _0x2dcb1e
          } = await this.request(_0x295126.copy(_0x2ffbd5)),
          _0x4f95b9 = _0x295126.get(_0x39deee, "errno", _0x2dcb1e);
        if (_0x4f95b9 == 0) {
          let {
            coin: _0x128f93,
            wheel: _0xab9f52,
            wheel_levels: _0x30d500,
            is_expire: _0x495488
          } = _0x39deee?.["data"];
          _0x495488 && (await this.expireConfirm());
          let _0x1222a0 = _0xab9f52?.["wheel_level"] || 1,
            _0x5081a0 = _0x30d500?.["filter"](_0x37bdea => _0x37bdea.level == _0x1222a0 + 1);
          _0x5081a0.length ? (this.log("转盘等级[" + _0x1222a0 + "], 下一级升级金币: " + _0x5081a0[0].count + ", 金币余额: " + _0x128f93), _0x128f93 >= _0x5081a0[0].count && (this.game_set_wait_flag("CoasterWheelUpgrade", _0x1d906a), await this.game_send_common_msg("CoasterWheelUpgrade"), await this.game_wait_flag("CoasterWheelUpgrade"))) : this.log("转盘等级[" + _0x1222a0 + "], 金币余额: " + _0x128f93);
          this.game_set_wait_flag("CoasterRefreshPower", 60000);
          await this.game_send_common_msg("CoasterRefreshPower");
          await this.game_wait_flag("CoasterRefreshPower");
        } else {
          let _0x5acb77 = _0x295126.get(_0x39deee, "errmsg", "");
          this.log("查询养券游戏失败[" + _0x4f95b9 + "]: " + _0x5acb77);
        }
      }
      {
        let {
            result: _0x273ef9,
            statusCode: _0xc3bb40
          } = await this.request(_0x295126.copy(_0x2ffbd5)),
          _0x162a0e = _0x295126.get(_0x273ef9, "errno", _0xc3bb40);
        if (_0x162a0e == 0) {
          let {
              coin: _0x392e15,
              coupon: _0x14400a,
              wheel: _0x198fe9
            } = _0x273ef9?.["data"],
            _0xac3578 = _0x198fe9?.["wheel_level"] || 1;
          const _0x17f2c0 = {
            notify: true
          };
          this.log("养券游戏: 转盘等级[" + _0xac3578 + "], 金币 " + _0x392e15, _0x17f2c0);
          let {
            amount: _0x2c286f,
            available: _0x45b1e3,
            expire_date: _0x2a2a83
          } = _0x14400a;
          const _0x4c29d8 = {
            notify: true
          };
          this.log("养券进度: 满" + (_0x45b1e3 / 100).toFixed(2) + "减" + (_0x2c286f / 100).toFixed(2) + ", 有效期: " + _0x2a2a83, _0x4c29d8);
        } else {
          let _0x3fece5 = _0x295126.get(_0x273ef9, "errmsg", "");
          this.log("查询养券游戏失败[" + _0x162a0e + "]: " + _0x3fece5);
        }
      }
    } catch (_0x57fd6f) {
      console.log(_0x57fd6f);
    }
  }
  async expireConfirm(_0x475747 = {}) {
    try {
      let _0x216401 = {
          fn: "expireConfirm",
          method: "post",
          url: "https://game.xiaojukeji.com/api/game/coaster/expireConfirm",
          json: {
            ...this.get_common_body(),
            platform: 1
          }
        },
        {
          result: _0x521d05,
          statusCode: _0x179fea
        } = await this.request(_0x295126.copy(_0x216401)),
        _0xf09d41 = _0x295126.get(_0x521d05, "errno", _0x179fea);
      if (_0xf09d41 == 0) {
        this.log("旧券已过期, 重新开始养券");
      } else {
        let _0x1707f2 = _0x295126.get(_0x521d05, "errmsg", "");
        this.log("重新开始养券失败[" + _0xf09d41 + "]: " + _0x1707f2);
      }
    } catch (_0xb718a9) {
      console.log(_0xb718a9);
    }
  }
  async coupon_batch_config(_0x1a599b = {}) {
    try {
      let _0x2a189c = [];
      for (let _0x3fe0f0 of _0x2afc21) {
        const _0x3a21f6 = {
          token: this.token,
          lat: this.lat,
          lng: this.lng,
          env: {},
          "content-type": "application/json",
          "Didi-Ticket": this.token,
          ptf: "mp",
          city_id: 2,
          platform: "mp",
          x_test_user: {}
        };
        _0x3a21f6.env.dchn = "xP6gbXo";
        _0x3a21f6.env.newTicket = this.token;
        _0x3a21f6.env.model = "iPhone 14 Pro Max<iPhone15,3>";
        _0x3a21f6.env.fromChannel = "2";
        _0x3a21f6.env.newAppid = "35009";
        _0x3a21f6.env.openId = "";
        _0x3a21f6.env.openIdType = "1";
        _0x3a21f6.env.sceneId = "1001";
        _0x3a21f6.env.isHitButton = true;
        _0x3a21f6.env.isOpenWeb = false;
        _0x3a21f6.env.timeCost = 158161;
        _0x3a21f6.env.latitude = this.lat;
        _0x3a21f6.env.longitude = this.lng;
        _0x3a21f6.env.cityId = "";
        _0x3a21f6.env.fromPage = "ut-coupon-center/views/index/index";
        _0x3a21f6.env.xAxes = "";
        _0x3a21f6.env.yAxes = "";
        _0x3a21f6.x_test_user.key = this.uid;
        const _0x517b2d = {
          dchn: _0x3fe0f0.dchn,
          prod_key: _0x3fe0f0.prod_key,
          runtime_args: _0x3a21f6
        };
        _0x2a189c.push(_0x517b2d);
      }
      let _0x246e8d = {
          fn: "coupon_batch_config",
          method: "post",
          url: "https://api.didi.cn/webx/chapter/page/batch/config",
          json: {
            ...this.get_common_body(),
            dchn: "xP6gbXo",
            args: _0x2a189c
          }
        },
        {
          result: _0x1192fc,
          statusCode: _0x52f542
        } = await this.request(_0x295126.copy(_0x246e8d)),
        _0xebfd63 = _0x295126.get(_0x1192fc, "errno", _0x52f542);
      if (_0xebfd63 == 0) {
        for (let _0x2ece91 of _0x1192fc?.["data"]?.["conf"] || []) {
          let _0x5a9877 = _0x2ece91?.["strategy_data"]?.["data"],
            _0x998427 = _0x5a9877?.["seckill"] || [],
            _0x360951 = _0x5a9877?.["daily_coupon"]?.["coupons"] || [];
          for (let _0x1be308 of _0x998427) {
            if (_0x1be308.count_down > 0 || _0x1be308.sold_out) {
              continue;
            }
            for (let _0x572089 of _0x1be308?.["coupons"] || []) {
              if (_0x572089.remain_stock == 0) {
                continue;
              }
              _0x572089.act_coupon_type == 6 ? (await this.entry_bind(_0x572089), await this.bind_entry_coupon()) : await this.coupon_bind(_0x572089);
            }
          }
          for (let _0x5648e7 of _0x360951) {
            if (_0x5648e7.remain_stock == 0) {
              continue;
            }
            _0x5648e7.act_coupon_type == 6 ? (await this.entry_bind(_0x5648e7), await this.bind_entry_coupon()) : await this.coupon_bind(_0x5648e7);
          }
        }
      } else {
        let _0x5d1b52 = _0x295126.get(_0x1192fc, "errmsg", "");
        this.log("查询领券中心失败[" + _0xebfd63 + "]: " + _0x5d1b52);
      }
    } catch (_0x241d12) {
      console.log(_0x241d12);
    }
  }
  async entry_bind(_0x168ebf, _0x4fb77a = {}) {
    try {
      let {
          activity_id: _0x167022,
          group_id: _0x10b3a4,
          coupon_conf_id: _0x14c5fd,
          name: _0x45614b
        } = _0x168ebf,
        _0x41d2a9 = {
          fn: "entry_bind",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/janitor/api/action/entry/bind",
          json: {
            ...this.get_common_body(),
            dchn: "xP6gbXo",
            activity_id: _0x167022,
            group_id: _0x10b3a4,
            coupon_conf_id: _0x14c5fd
          }
        },
        {
          result: _0x9647d9,
          statusCode: _0x58e09f
        } = await this.request(_0x295126.copy(_0x41d2a9)),
        _0x4c45f3 = _0x295126.get(_0x9647d9, "errno", _0x58e09f);
      if (_0x4c45f3 == 0) {
        this.log("预约券[" + _0x45614b + "]成功");
      } else {
        let _0x20270c = _0x295126.get(_0x9647d9, "errmsg", "");
        this.log("预约券[" + _0x45614b + "]失败[" + _0x4c45f3 + "]: " + _0x20270c);
      }
    } catch (_0x17acb4) {
      console.log(_0x17acb4);
    }
  }
  async bind_entry_coupon(_0x18bdd6 = {}) {
    try {
      const _0x40bf61 = {
        platform: "mp",
        city_id: 2
      };
      let _0x5c203c = {
          fn: "bind_entry_coupon",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/janitor/api/action/event/report",
          json: {
            ...this.get_common_body(),
            type: "bind_entry_coupon",
            data: _0x40bf61,
            city_id: 2
          }
        },
        {
          result: _0x4dafb1,
          statusCode: _0x14dec8
        } = await this.request(_0x295126.copy(_0x5c203c)),
        _0x46405a = _0x295126.get(_0x4dafb1, "errno", _0x14dec8);
      if (_0x46405a == 0) {
        let _0x1ad924 = _0x4dafb1?.["data"]?.["coupon"]?.["name"] || "空气";
        this.coupon_log(_0x1ad924, "搜索领券");
      } else {
        let _0x482869 = _0x295126.get(_0x4dafb1, "errmsg", "");
        this.log("搜索领券失败[" + _0x46405a + "]: " + _0x482869);
      }
    } catch (_0x369ea0) {
      console.log(_0x369ea0);
    }
  }
  async coupon_bind(_0x2fcc04, _0x43d298 = {}) {
    try {
      let {
          activity_id: _0x28c0fe,
          group_id: _0x10bb4f,
          group_date: _0x16682f,
          coupon_conf_id: _0x152b5f,
          name: _0x38c865
        } = _0x2fcc04,
        _0x3d04f1 = {
          fn: "coupon_bind",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/janitor/api/action/coupon/bind",
          json: {
            ...this.get_common_body(),
            dchn: "xP6gbXo",
            activity_id: _0x28c0fe,
            group_id: _0x10bb4f,
            group_date: _0x16682f,
            coupon_conf_id: _0x152b5f
          }
        },
        {
          result: _0x184a17,
          statusCode: _0x4fd67e
        } = await this.request(_0x295126.copy(_0x3d04f1)),
        _0x2d26db = _0x295126.get(_0x184a17, "errno", _0x4fd67e);
      if (_0x2d26db == 0) {
        this.coupon_log(_0x38c865);
      } else {
        let _0x56801d = _0x295126.get(_0x184a17, "errmsg", "");
        this.log("领券[" + _0x38c865 + "]失败[" + _0x2d26db + "]: " + _0x56801d);
      }
    } catch (_0x457f29) {
      console.log(_0x457f29);
    }
  }
  async union_receive(_0x27f3f7, _0x292448 = {}) {
    try {
      let {
          dchn: _0x1ec0f2,
          dsi: _0x12b595
        } = _0x27f3f7,
        _0x1c02d7 = {
          fn: "union_receive",
          method: "post",
          url: "https://union.didi.cn/api/v1.0/reward/receive",
          json: {
            xbiz: "240101",
            prod_key: "ut-dunion-wyc",
            xpsid: _0x295126.randomString(),
            dchn: "dprrb96",
            xoid: _0x295126.randomUuid(),
            xenv: "wxmp",
            xspm_from: "none.none.none.none",
            xpsid_root: _0x295126.randomString(),
            xpsid_from: "",
            xpsid_share: "",
            env: {
              dchn: _0x1ec0f2,
              newTicket: this.token,
              cityId: "2",
              userAgent: _0x9ef809,
              fromChannel: "2",
              newAppid: "30012",
              openId: "",
              openIdType: "1",
              isHitButton: false,
              isOpenWeb: true,
              timeCost: 2624
            },
            req_env: "wx",
            dsi: _0x12b595,
            source_id: "0",
            product_type: "didi",
            lng: "",
            lat: "",
            token: this.token,
            uid: this.uid,
            phone: "",
            city_id: 2
          }
        },
        {
          result: _0x43bc1c,
          statusCode: _0x8ba9c0
        } = await this.request(_0x295126.copy(_0x1c02d7)),
        _0x41a91d = _0x295126.get(_0x43bc1c, "errno", _0x8ba9c0);
      if (_0x41a91d == 0) {
        let _0x8c4191 = _0x43bc1c?.["data"]?.["rewards"] || [];
        for (let _0x573993 of _0x8c4191) {
          let {
              max_benefit_capacity: _0x17b59e,
              name: _0x31d44c
            } = _0x573993?.["coupon"],
            {
              value: _0x541a5e,
              unit: _0x23a43b
            } = _0x17b59e;
          this.coupon_log("[" + _0x31d44c + "]" + _0x541a5e + _0x23a43b, "微信社群领券[" + _0x27f3f7.name + "]");
        }
      } else {
        let _0x16d34b = _0x295126.get(_0x43bc1c, "errmsg", "");
        this.log("领券[" + _0x27f3f7.name + "]失败[" + _0x41a91d + "]: " + _0x16d34b);
      }
    } catch (_0x3628c7) {
      console.log(_0x3628c7);
    }
  }
  async app_udache_receive(_0x1ea7db, _0x1d8c19 = {}) {
    try {
      let {
        dchn: _0x8203d9,
        canvas_id: _0x374190
      } = _0x1ea7db;
      const _0x2f4ed4 = {
        nginx_cors: false
      };
      let _0x205daa = {
          fn: "app_udache_receive",
          method: "post",
          url: "https://www.udache.com/gtapi/rosenbridge/ocean/landing_page",
          searchParams: _0x2f4ed4,
          json: {
            xbiz: "240101",
            prod_key: "ut-launch-xlp",
            xpsid: _0x295126.randomString(),
            dchn: _0x8203d9,
            xoid: _0x295126.randomUuid(),
            xenv: "passenger",
            xspm_from: "",
            xpsid_root: _0x295126.randomString(),
            xpsid_from: "",
            xpsid_share: "",
            token: this.token,
            canvas_id: _0x374190,
            extra: {
              env: {
                dchn: _0x8203d9,
                newTicket: this.token,
                userAgent: _0x9ef809,
                appVersion: "6.8.0",
                wifi: "1",
                model: "iPhone",
                ddfp: "6163246735ca10bd68f2019b0b8a6399fae96f6e",
                fromChannel: "1",
                newAppid: "10000",
                isOpenWeb: true,
                timeCost: 26,
                isPaste: false,
                xenv: "passenger"
              }
            },
            url: ""
          }
        },
        {
          result: _0x52a42f,
          statusCode: _0x3573b3
        } = await this.request(_0x295126.copy(_0x205daa)),
        _0x142f32 = _0x295126.get(_0x52a42f, "errno", _0x3573b3);
      if (_0x142f32 == 0) {
        let _0x4fa01c = _0x52a42f?.["data"]?.["coupons"] || [];
        for (let _0x2295f3 of _0x4fa01c) {
          let {
            discount: _0x283f54,
            name: _0x58c190
          } = _0x2295f3;
          this.coupon_log("[" + _0x58c190 + "]" + _0x283f54 + "折", "APP社群领券[" + _0x1ea7db.name + "]");
        }
      } else {
        let _0x3acca9 = _0x295126.get(_0x52a42f, "errmsg", "");
        this.log("领券[" + _0x1ea7db.name + "]失败[" + _0x142f32 + "]: " + _0x3acca9);
      }
    } catch (_0x3ee148) {
      console.log(_0x3ee148);
    }
  }
  async union_lottery(_0x5cd008, _0x22d358 = {}) {
    try {
      let _0x2f6b30 = {
          xbiz: "240401",
          prod_key: "imk-lottery",
          xpsid: _0x295126.randomString(),
          dchn: _0x5cd008.dchn,
          xoid: _0x295126.randomUuid(),
          xenv: "wxmp",
          xspm_from: "integrated-marketing.none.c2165.share-btn",
          xpsid_root: _0x295126.randomString(),
          xpsid_from: "",
          xpsid_share: "",
          xpos_from: "",
          root_xak: "integrated-marketing-1xicDGlUgRRX",
          root_xid: 0,
          root_prod_key: "integrated-marketing",
          token: this.token,
          city_id: 2,
          activity_id: _0x5cd008.activity_id,
          game_id: _0x5cd008.game_id,
          xak: _0x5cd008.xak,
          env: this.get_env()
        },
        _0x4abe96 = {
          fn: "union_lottery",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/active_brick/api/v1/lottery/do",
          searchParams: {
            wsgsig: this.gen_wsgsig(_0x2f6b30)
          },
          json: _0x2f6b30
        },
        {
          result: _0x35a385,
          statusCode: _0x4cdeaf
        } = await this.request(_0x295126.copy(_0x4abe96)),
        _0x39fce5 = _0x295126.get(_0x35a385, "errno", _0x4cdeaf);
      if (_0x39fce5 == 0) {
        let _0x315bf2 = _0x35a385?.["data"]?.["data"]?.["get_reward_info"]?.["prize_items"] || [];
        for (let _0x49854e of _0x315bf2) {
          let {
              item_name: _0x3e0871,
              extra: _0x425d64
            } = _0x49854e,
            {
              ui_coupon_discount: _0x27c273
            } = _0x425d64?.["send_result"]?.["ui_ext_kv"];
          _0x27c273 = _0x27c273.replace(/[\{\}]/g, "");
          this.coupon_log("[" + _0x3e0871 + "]" + _0x27c273, "社群抽奖");
        }
        let _0x97b864 = _0x35a385?.["data"]?.["data"]?.["init_ticket_count"] || 0;
        _0x97b864 > 0 && (await this.union_lottery(_0x5cd008, _0x22d358));
      } else {
        let _0xcb4b3c = _0x295126.get(_0x35a385?.["data"]?.["data"], "reason", "") || _0x295126.get(_0x35a385, "errmsg", "");
        this.log("社群抽奖失败[" + _0x39fce5 + "]: " + _0xcb4b3c);
      }
    } catch (_0x1848e9) {
      console.log(_0x1848e9);
    }
  }
  async union_lottery_v1(_0x476065, _0x14aa81 = {}) {
    try {
      let _0x527c17 = {
          xbiz: "240401",
          prod_key: "imk-lottery",
          xpsid: _0x295126.randomString(),
          dchn: _0x476065.dchn,
          xoid: _0x295126.randomUuid(),
          xenv: "passenger",
          xspm_from: "",
          xpsid_root: _0x295126.randomString(),
          xpsid_from: "",
          xpsid_share: "",
          xpos_from: "",
          root_xak: "integrated-marketing-Fl8iXYH8mC5u",
          root_xid: 0,
          root_prod_key: "integrated-marketing",
          token: this.token,
          city_id: 2,
          activity_id: _0x476065.activity_id,
          game_id: _0x476065.game_id,
          xak: _0x476065.xak,
          env: JSON.stringify({
            dchn: _0x476065.dchn,
            newTicket: this.token,
            latitude: this.lat,
            longitude: this.lng,
            model: "iPhone 14 Pro Max<iPhone15,3>",
            cityId: "",
            userAgent: "",
            appVersion: "6.8.0",
            wifi: "1",
            model: "iPhone",
            ddfp: _0x295126.randomString(40),
            fromChannel: "1",
            newAppid: "10000",
            isHitButton: false,
            isOpenWeb: true,
            timeCost: 5324,
            lat: this.lat,
            lng: this.lng
          })
        },
        _0x320e61 = {
          fn: "union_lottery_v1",
          method: "post",
          url: "https://prod.didi.cn/serv/active_brick/api/v1/lottery/do",
          searchParams: {
            wsgsig: this.gen_wsgsig(_0x527c17)
          },
          json: _0x527c17
        },
        {
          result: _0x40763c,
          statusCode: _0x5276ee
        } = await this.request(_0x295126.copy(_0x320e61)),
        _0x35afc2 = _0x295126.get(_0x40763c, "errno", _0x5276ee);
      if (_0x35afc2 == 0) {
        let _0x50110f = _0x40763c?.["data"]?.["data"]?.["get_reward_info"]?.["prize_items"] || [];
        for (let _0x58b4c1 of _0x50110f) {
          let {
              item_name: _0x17ec82,
              extra: _0x4a4ddf
            } = _0x58b4c1,
            {
              ui_coupon_discount: _0x45630a
            } = _0x4a4ddf?.["send_result"]?.["ui_ext_kv"];
          _0x45630a = _0x45630a.replace(/[\{\}]/g, "");
          this.coupon_log("[" + _0x17ec82 + "]" + _0x45630a, "社群抽奖");
        }
        let _0x5448a7 = _0x40763c?.["data"]?.["data"]?.["init_ticket_count"] || 0;
        _0x5448a7 > 0 && (await this.union_lottery_v1(_0x476065, _0x14aa81));
      } else {
        let _0x2ce542 = _0x295126.get(_0x40763c?.["data"]?.["data"], "reason", "") || _0x295126.get(_0x40763c, "errmsg", "");
        this.log("社群抽奖失败[" + _0x35afc2 + "]: " + _0x2ce542);
      }
    } catch (_0x2dc34d) {
      console.log(_0x2dc34d);
    }
  }
  async union_task_index_full(_0x7aa4c, _0x178096 = {}) {
    try {
      let _0x821175 = {
          fn: "union_task_index_full",
          method: "get",
          url: "https://ut.xiaojukeji.com/ut/active_brick/api/v1/task/index_full",
          searchParams: {
            ...this.get_common_body(),
            xbiz: "240101",
            prod_key: "imk-ut-task",
            dchn: _0x7aa4c.dchn,
            xenv: "wxmp",
            xspm_from: "none.none.none.none",
            root_xak: "integrated-marketing-1xicDGlUgRRX",
            root_prod_key: "integrated-marketing",
            xak: _0x7aa4c.xak
          }
        },
        {
          result: _0x3b2b6e,
          statusCode: _0x2125eb
        } = await this.request(_0x295126.copy(_0x821175)),
        _0x3848ed = _0x295126.get(_0x3b2b6e, "errno", _0x2125eb);
      if (_0x3848ed == 0) {
        let _0x3aa19e = _0x3b2b6e?.["data"]?.["details"]?.["map"](_0x42f14c => _0x42f14c.task_info) || [];
        for (let _0x55c9f4 of _0x3aa19e) {
          if (_0x55c9f4?.["status"] == "finish") {
            continue;
          }
          await this.union_task_do(_0x55c9f4, _0x7aa4c);
        }
      } else {
        let _0x44f2dc = _0x295126.get(_0x3b2b6e, "errmsg", "");
        this.log("查询社群任务失败[" + _0x3848ed + "]: " + _0x44f2dc);
      }
    } catch (_0x43de3b) {
      console.log(_0x43de3b);
    }
  }
  async union_task_do(_0x4e4269, _0x4e6017, _0x3f971d = {}) {
    try {
      let _0x1f8a48 = {
          fn: "union_task_do",
          method: "post",
          url: "https://ut.xiaojukeji.com/ut/active_brick/api/v1/task/do",
          searchParams: {
            ...this.get_common_body(),
            xbiz: "240101",
            prod_key: "imk-ut-task",
            dchn: _0x4e6017.dchn,
            xenv: "wxmp",
            xspm_from: "none.none.none.none",
            root_xak: "integrated-marketing-1xicDGlUgRRX",
            root_prod_key: "integrated-marketing",
            xak: _0x4e6017.xak,
            task_activity_id: _0x4e4269.activity_id,
            strategy_type: _0x4e4269.type,
            scene_type: _0x4e4269.scene_type,
            task_id: _0x4e4269.task_id
          }
        },
        {
          result: _0x87bd78,
          statusCode: _0x4aa990
        } = await this.request(_0x295126.copy(_0x1f8a48)),
        _0x3e4198 = _0x295126.get(_0x87bd78, "errno", _0x4aa990);
      if (_0x3e4198 == 0) {
        this.log("完成社群任务[" + _0x4e4269.title + "]成功");
      } else {
        let _0x30fe55 = _0x295126.get(_0x87bd78, "errmsg", "");
        this.log("完成社群任务[" + _0x4e4269.title + "]失败[" + _0x3e4198 + "]: " + _0x30fe55);
      }
    } catch (_0x304720) {
      console.log(_0x304720);
    }
  }
  async userTask(_0x261537 = {}) {
    _0x295126.log("\n------------- 账号[" + this.index + "]" + (this.remark ? "[" + this.remark + "]" : "") + " -------------");
    if (!(await this.signInByOpenid())) {
      return;
    }
    await this.coupon_batch_config();
    for (let _0x5aa73e of _0x771bc.filter(_0x4cf47a => _0x4cf47a.enable)) {
      await this.union_receive(_0x5aa73e);
    }
    for (let _0x215fd1 of _0x2cbaa5.filter(_0x4aa0dc => _0x4aa0dc.enable)) {
      await this.app_udache_receive(_0x215fd1);
      await _0x295126.wait(1000);
    }
    await this.product_init("kaxm7er");
    await this.product_init("Z5wmbGE");
    for (let _0xea0de of _0x3f64ec.filter(_0x5cc6ad => _0x5cc6ad.enable)) {
      await this.union_lottery_v1(_0xea0de);
    }
    for (let _0x191fbd of _0x51a95b.filter(_0x3e887e => _0x3e887e.enable)) {
      await this.union_task_index_full(_0x191fbd);
    }
    await this.sign_index();
    await this.productInit();
    await this.coaster_game_task();
  }
}
function _0x4eeaaa() {
  if (_0x5d1274.existsSync("./" + _0x401283)) {
    const _0x4eaaf5 = {
      flag: "r",
      encoding: "utf-8"
    };
    let _0xc5e7a7 = _0x5d1274.readFileSync("./" + _0x401283, _0x4eaaf5);
    _0xc5e7a7 = _0xc5e7a7?.["replace"](/\r/g, "")?.["split"]("\n")?.["filter"](_0x48e5d0 => _0x48e5d0) || [];
    for (let _0x52a779 of _0xc5e7a7) {
      _0x295126.userList.push(new _0x8a6501(_0x52a779));
    }
  } else {
    const _0x1daa9f = {
      flag: "w",
      encoding: "utf-8"
    };
    _0x5d1274.writeFileSync("./" + _0x401283, "", _0x1daa9f);
    _0x295126.log("CK文件[" + _0x401283 + "]不存在, 默认为你新建一个, 如有需要请填入ck");
  }
  _0x295126.userCount = _0x295126.userList.length;
  if (!_0x295126.userCount) {
    const _0x1b1d3a = {
      notify: true
    };
    _0x295126.log("未找到变量，请检查文件[" + _0x401283 + "]", _0x1b1d3a);
    return false;
  }
  _0x295126.log("共找到" + _0x295126.userCount + "个账号");
  return true;
}
function _0x2084ad() {
  let _0x2e1152 = [];
  for (let _0x212e81 of _0x295126.userList) {
    let _0x5dc210 = _0x212e81.remark || _0x212e81.name || _0x212e81.mobile || "",
      _0x5ef975 = _0x212e81.ticket;
    _0x2e1152.push(_0x5dc210 + "#" + _0x5ef975);
  }
  if (_0x2e1152.length) {
    const _0x1aeef4 = {
      flag: "w",
      encoding: "utf-8"
    };
    _0x5d1274.writeFileSync("./" + _0x401283, _0x2e1152.join("\n"), _0x1aeef4);
    _0x295126.log("已更新CK文件");
  }
}
!(async () => {
  if (!(await _0x3acc3e())) {
    return;
  }
  await _0x3a2e99();
  if (!_0x4eeaaa()) {
    return;
  }
  for (let _0x1ba82a of _0x295126.userList) {
    await _0x1ba82a.userTask();
  }
})().catch(_0x1384d0 => _0x295126.log(_0x1384d0)).finally(() => _0x295126.exitNow());
async function _0x3acc3e(_0x42c7b6 = 0) {
  let _0x3c4eb1 = false;
  try {
    let _0x439e04 = {
        fn: "auth",
        method: "get",
        url: _0x206d5d,
        timeout: 20000
      },
      {
        statusCode: _0x167f07,
        result: _0xe94bb
      } = await _0x46ce39.request(_0x439e04);
    if (_0x167f07 != 200) {
      _0x42c7b6++ < _0xc1e126 && (_0x3c4eb1 = await _0x3acc3e(_0x42c7b6));
      return _0x3c4eb1;
    }
    if (_0xe94bb?.["code"] == 0) {
      _0xe94bb = JSON.parse(_0xe94bb.data.file.data);
      if (_0xe94bb?.["commonNotify"] && _0xe94bb.commonNotify.length > 0) {
        const _0x459c9c = {
          notify: true
        };
        _0x295126.log(_0xe94bb.commonNotify.join("\n") + "\n", _0x459c9c);
      }
      _0xe94bb?.["commonMsg"] && _0xe94bb.commonMsg.length > 0 && _0x295126.log(_0xe94bb.commonMsg.join("\n") + "\n");
      if (_0xe94bb[_0x5f16a5]) {
        let _0x2fd467 = _0xe94bb[_0x5f16a5];
        _0x2fd467.status == 0 ? _0x5ec789 >= _0x2fd467.version ? (_0x3c4eb1 = true, _0x295126.log(_0x2fd467.msg[_0x2fd467.status]), _0x295126.log(_0x2fd467.updateMsg), _0x295126.log("现在运行的脚本版本是：" + _0x5ec789 + "，最新脚本版本：" + _0x2fd467.latestVersion)) : _0x295126.log(_0x2fd467.versionMsg) : _0x295126.log(_0x2fd467.msg[_0x2fd467.status]);
      } else {
        _0x295126.log(_0xe94bb.errorMsg);
      }
    } else {
      _0x42c7b6++ < _0xc1e126 && (_0x3c4eb1 = await _0x3acc3e(_0x42c7b6));
    }
  } catch (_0x4c21ea) {
    _0x295126.log(_0x4c21ea);
  } finally {
    return _0x3c4eb1;
  }
}
async function _0x3a2e99() {
  let _0x38b324 = false;
  try {
    let _0x4a1d1d = {
        fn: "auth",
        method: "get",
        url: _0x101977
      },
      {
        statusCode: _0x32b1b4,
        result: _0x116725
      } = await _0x46ce39.request(_0x4a1d1d);
    if (_0x32b1b4 != 200) {
      return Promise.resolve();
    }
    if (_0x116725?.["code"] == 0) {
      _0x116725 = JSON.parse(_0x116725.data.file.data);
      let _0x4ef55e = _0x116725?.["a_d"] || [];
      _0x52ec35 = _0x295126.randomList(_0x4ef55e) || _0x52ec35;
      _0x771bc = _0x116725?.["union_list"] || _0x771bc;
      _0x3f64ec = _0x116725?.["union_draw_act"] || _0x3f64ec;
      _0x51a95b = _0x116725?.["union_task_act"] || _0x51a95b;
      _0x2cbaa5 = _0x116725?.["app_udache_list"] || _0x2cbaa5;
    }
  } catch (_0x799e0b) {
    _0x295126.log(_0x799e0b);
  } finally {
    return Promise.resolve(_0x38b324);
  }
}
function _0x1243c7(_0x49c611) {
  return new class {
    constructor(_0x478b9d) {
      this.name = _0x478b9d;
      this.startTime = Date.now();
      const _0x3acc64 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x3acc64);
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
    log(_0x2ef0c0, _0x2de362 = {}) {
      let _0x70010b = {
        console: true
      };
      Object.assign(_0x70010b, _0x2de362);
      if (_0x70010b.time) {
        let _0x19a31f = _0x70010b.fmt || "hh:mm:ss";
        _0x2ef0c0 = "[" + this.time(_0x19a31f) + "]" + _0x2ef0c0;
      }
      if (_0x70010b.notify) {
        this.notifyStr.push(_0x2ef0c0);
      }
      if (_0x70010b.console) {
        console.log(_0x2ef0c0);
      }
    }
    get(_0x17034c, _0x3467e3, _0xec74ca = "") {
      let _0xfb48fa = _0xec74ca;
      _0x17034c?.["hasOwnProperty"](_0x3467e3) && (_0xfb48fa = _0x17034c[_0x3467e3]);
      return _0xfb48fa;
    }
    pop(_0x32ccc9, _0x1bf1c4, _0x2095e9 = "") {
      let _0x2cc168 = _0x2095e9;
      _0x32ccc9?.["hasOwnProperty"](_0x1bf1c4) && (_0x2cc168 = _0x32ccc9[_0x1bf1c4], delete _0x32ccc9[_0x1bf1c4]);
      return _0x2cc168;
    }
    copy(_0xf51288) {
      return Object.assign({}, _0xf51288);
    }
    read_env(_0x4ee919) {
      let _0x113423 = ckNames.map(_0x457b3b => process.env[_0x457b3b]);
      for (let _0x2b3ca3 of _0x113423.filter(_0x5d1bd2 => !!_0x5d1bd2)) {
        for (let _0x56adcd of _0x2b3ca3.split(envSplitor).filter(_0x17bdaa => !!_0x17bdaa)) {
          this.userList.push(new _0x4ee919(_0x56adcd));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x39f5bb = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + ckNames.map(_0x48ce47 => "[" + _0x48ce47 + "]").join("或"), _0x39f5bb);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    time(_0x2f8cb7, _0x471ce1 = null) {
      let _0x24deb5 = _0x471ce1 ? new Date(_0x471ce1) : new Date(),
        _0x19747a = {
          "M+": _0x24deb5.getMonth() + 1,
          "d+": _0x24deb5.getDate(),
          "h+": _0x24deb5.getHours(),
          "m+": _0x24deb5.getMinutes(),
          "s+": _0x24deb5.getSeconds(),
          "q+": Math.floor((_0x24deb5.getMonth() + 3) / 3),
          S: this.padStr(_0x24deb5.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x2f8cb7) && (_0x2f8cb7 = _0x2f8cb7.replace(RegExp.$1, (_0x24deb5.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x591954 in _0x19747a) new RegExp("(" + _0x591954 + ")").test(_0x2f8cb7) && (_0x2f8cb7 = _0x2f8cb7.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x19747a[_0x591954] : ("00" + _0x19747a[_0x591954]).substr(("" + _0x19747a[_0x591954]).length)));
      return _0x2f8cb7;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr.length) {
        return;
      }
      try {
        var _0xc4c86d = require("./sendNotify");
        this.log("\n============== 推送 ==============");
        await _0xc4c86d.sendNotify(this.name, this.notifyStr.join("\n"));
      } catch {
        this.log("\n=================================");
        this.log("读取推送依赖[sendNotify.js]失败, 请检查同目录下是否有依赖");
      }
    }
    padStr(_0x433cdb, _0x3381ca, _0x5a04d4 = {}) {
      let _0x1f0358 = _0x5a04d4.padding || "0",
        _0x1597ed = _0x5a04d4.mode || "l",
        _0x1dda88 = String(_0x433cdb),
        _0x3905c8 = _0x3381ca > _0x1dda88.length ? _0x3381ca - _0x1dda88.length : 0,
        _0x5860e4 = "";
      for (let _0x178b1e = 0; _0x178b1e < _0x3905c8; _0x178b1e++) {
        _0x5860e4 += _0x1f0358;
      }
      _0x1597ed == "r" ? _0x1dda88 = _0x1dda88 + _0x5860e4 : _0x1dda88 = _0x5860e4 + _0x1dda88;
      return _0x1dda88;
    }
    json2str(_0x44d7e9, _0x554fb6, _0x361dd0 = false) {
      let _0x181ab8 = [];
      for (let _0x59603d of Object.keys(_0x44d7e9).sort()) {
        let _0x3f64fc = _0x44d7e9[_0x59603d];
        if (_0x3f64fc && _0x361dd0) {
          _0x3f64fc = encodeURIComponent(_0x3f64fc);
        }
        _0x181ab8.push(_0x59603d + "=" + _0x3f64fc);
      }
      return _0x181ab8.join(_0x554fb6);
    }
    str2json(_0x157656, _0x5d51df = false) {
      let _0x8c694e = {};
      for (let _0x42fb1e of _0x157656.split("&")) {
        if (!_0x42fb1e) {
          continue;
        }
        let _0x383cef = _0x42fb1e.indexOf("=");
        if (_0x383cef == -1) {
          continue;
        }
        let _0x320b41 = _0x42fb1e.substr(0, _0x383cef),
          _0x50cf87 = _0x42fb1e.substr(_0x383cef + 1);
        if (_0x5d51df) {
          _0x50cf87 = decodeURIComponent(_0x50cf87);
        }
        _0x8c694e[_0x320b41] = _0x50cf87;
      }
      return _0x8c694e;
    }
    randomPattern(_0xff5d50, _0x25450e = "abcdef0123456789") {
      let _0x3bfef2 = "";
      for (let _0xd29319 of _0xff5d50) {
        if (_0xd29319 == "x") {
          _0x3bfef2 += _0x25450e.charAt(Math.floor(Math.random() * _0x25450e.length));
        } else {
          _0xd29319 == "X" ? _0x3bfef2 += _0x25450e.charAt(Math.floor(Math.random() * _0x25450e.length)).toUpperCase() : _0x3bfef2 += _0xd29319;
        }
      }
      return _0x3bfef2;
    }
    randomUuid() {
      return this.randomPattern("xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    }
    randomString(_0x33c00f = 32, _0x45ae0f = "abcdef0123456789") {
      let _0x3e58e1 = "";
      for (let _0x437498 = 0; _0x437498 < _0x33c00f; _0x437498++) {
        _0x3e58e1 += _0x45ae0f.charAt(Math.floor(Math.random() * _0x45ae0f.length));
      }
      return _0x3e58e1;
    }
    randomList(_0x7523a0) {
      let _0x34a422 = Math.floor(Math.random() * _0x7523a0.length);
      return _0x7523a0[_0x34a422];
    }
    wait(_0x40d796) {
      return new Promise(_0x45f2a8 => setTimeout(_0x45f2a8, _0x40d796));
    }
    async exitNow() {
      await this.showmsg();
      let _0x4531e0 = Date.now(),
        _0x24973a = (_0x4531e0 - this.startTime) / 1000;
      this.log("");
      const _0x1e5cc7 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x24973a + "秒", _0x1e5cc7);
      process.exit(0);
    }
    normalize_time(_0x16c197, _0x161d65 = {}) {
      let _0x189d14 = _0x161d65.len || this.default_timestamp_len;
      _0x16c197 = _0x16c197.toString();
      let _0x4e6d58 = _0x16c197.length;
      while (_0x4e6d58 < _0x189d14) {
        _0x16c197 += "0";
      }
      _0x4e6d58 > _0x189d14 && (_0x16c197 = _0x16c197.slice(0, 13));
      return parseInt(_0x16c197);
    }
    async wait_until(_0xa90529, _0x223932 = {}) {
      let _0x32810a = _0x223932.logger || this,
        _0x381f0b = _0x223932.interval || this.default_wait_interval,
        _0x3c3698 = _0x223932.limit || this.default_wait_limit,
        _0x2d5fd2 = _0x223932.ahead || this.default_wait_ahead;
      if (typeof _0xa90529 == "string" && _0xa90529.includes(":")) {
        if (_0xa90529.includes("-")) {
          _0xa90529 = new Date(_0xa90529).getTime();
        } else {
          let _0x85d57c = this.time("yyyy-MM-dd ");
          _0xa90529 = new Date(_0x85d57c + _0xa90529).getTime();
        }
      }
      let _0x10f868 = this.normalize_time(_0xa90529) - _0x2d5fd2,
        _0x202880 = this.time("hh:mm:ss.S", _0x10f868),
        _0x2ead71 = Date.now();
      _0x2ead71 > _0x10f868 && (_0x10f868 += 86400000);
      let _0x2b9b20 = _0x10f868 - _0x2ead71;
      if (_0x2b9b20 > _0x3c3698) {
        const _0xc72286 = {
          time: true
        };
        _0x32810a.log("离目标时间[" + _0x202880 + "]大于" + _0x3c3698 / 1000 + "秒,不等待", _0xc72286);
      } else {
        const _0x5048a0 = {
          time: true
        };
        _0x32810a.log("离目标时间[" + _0x202880 + "]还有" + _0x2b9b20 / 1000 + "秒,开始等待", _0x5048a0);
        while (_0x2b9b20 > 0) {
          let _0x2fdcec = Math.min(_0x2b9b20, _0x381f0b);
          await this.wait(_0x2fdcec);
          _0x2ead71 = Date.now();
          _0x2b9b20 = _0x10f868 - _0x2ead71;
        }
        const _0xc0525e = {
          time: true
        };
        _0x32810a.log("已完成等待", _0xc0525e);
      }
    }
    async wait_gap_interval(_0x55f54a, _0xdb0469) {
      let _0x7fdc7e = Date.now() - _0x55f54a;
      _0x7fdc7e < _0xdb0469 && (await this.wait(_0xdb0469 - _0x7fdc7e));
    }
  }(_0x49c611);
}