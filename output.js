//Tue Apr 15 2025 01:34:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("捷达"),
  FormData = require("form-data"),
  envPrefix = "jetta",
  envName = envPrefix + "Cookie",
  configName = envPrefix,
  threadName = envPrefix + "ThreadNum",
  insertBbs = process.env[envPrefix + "InsertBbs"] || "true",
  threadFlag = false,
  proxyFlag = false,
  notifyFlag = false,
  prefixFlag = false,
  timeFlag = false,
  loginFlag = true,
  MAX_THREAD = process.env[threadName] || 10,
  DEFAULT_TIMEOUT = 8000,
  DEFAULT_RETRY = 5;
let host = "jetta-app.mosc.faw-vw.com",
  imgApi = "https://tu.ltyuanfang.cn/api/fengjing.php",
  contentApi = "https://api.xygeng.cn/one",
  cookie = "",
  cookieArr = [],
  envSplitor = ["\n"];
cookie = cookie || process.env[envName];
class UserInfo extends $.BasicClass {
  constructor(_0xce808) {
    super(configInit());
    let {
      userIdx: _0x7ead93,
      userCookie: _0x28f676,
      valid: _0x1c8360
    } = _0xce808;
    this.userIdx = _0x7ead93;
    this.valid = _0x1c8360;
    if (loginFlag) {
      let [_0x7cbaab, _0x323bf6] = _0x28f676.split("&");
      this.phone = _0x7cbaab;
      this.password = _0x323bf6;
      this.taskInit();
    } else this.userCookie = _0x28f676;
  }
  ["taskInit"](_0x31468d = {}) {
    this.userList = _0x31468d.userList || $.userList;
    this.got = this.got.extend({
      "headers": {
        "Authorization": "Bearer " + this.userCookie,
        "app-version": "2.7.4",
        "platform": "ios",
        "User-Agent": "Faw-VM-EBO/2.7.4 (com.fawvw.ebo; build:43; iOS 17.0.0) Alamofire/5.6.4"
      }
    });
    this.getUrl = _0x5b248d => {
      return "https://" + host + (_0x5b248d || _0x31468d.path);
    };
  }
  async ["login"]() {
    try {
      let _0xef09f3 = {
          "fn": "login",
          "method": "post",
          "url": "https://jetta-app.mosc.faw-vw.com/jetta-app/general/inpublic/v1/common/user/login",
          "json": {
            "password": this.password,
            "scope": "openid profile mbb",
            "account": this.phone,
            "deviceName": "iPhone"
          }
        },
        _0x234888 = await this.http(getSignParam(_0xef09f3));
      if (_0x234888.returnStatus == "SUCCEED") {
        {
          let {
            accessToken: _0xe89140
          } = _0x234888.data;
          this.userCookie = _0xe89140;
        }
      } else this.log("用户名或密码错误", {
        "prefix": true,
        "notify": true
      }), this.valid = false;
    } catch (_0x5747d4) {
      console.log(_0x5747d4);
    }
  }
  async ["userInfo"]() {
    try {
      {
        let _0x36c4bb = {
            "fn": "userInfo",
            "method": "get",
            "url": "https://jetta-app.mosc.faw-vw.com/jetta-app/general/public/v1/common/user/get_user_info"
          },
          _0x1d4132 = await this.http(getSignParam(_0x36c4bb));
        if (_0x1d4132.returnStatus == "SUCCEED") {
          let {
            mobile: _0x6fb8c8,
            aid: _0x5b7e19
          } = _0x1d4132.data;
          this.nickName = _0x6fb8c8;
          this.aid = _0x5b7e19;
        } else this.log(_0x1d4132.errorMessage), this.valid = false;
      }
    } catch (_0x1b3394) {
      console.log(_0x1b3394);
    }
  }
  async ["pointInfo"]() {
    try {
      {
        let _0xa008d0 = {
            "fn": "pointInfo",
            "method": "get",
            "url": "https://jetta-app.mosc.faw-vw.com/jetta-app/general/public/v1/common/user/get_score",
            "searchParams": {
              "aId": this.aid,
              "businessId": 1,
              "businessTypeId": 1,
              "scoreTypeId": 2,
              "systemKey": "8816687A99F14B8FA8",
              "tenantId": "Jetta"
            }
          },
          _0x5ba444 = await this.http(getSignParam(_0xa008d0));
        if (_0x5ba444.returnStatus == "SUCCEED") {
          let {
            availablescore: _0xe9e811
          } = _0x5ba444.data[0];
          this.point = _0xe9e811;
        } else this.log(_0x5ba444.errorMessage);
      }
    } catch (_0x2f30ca) {
      console.log(_0x2f30ca);
    }
  }
  async ["jettyValueInfo"]() {
    try {
      {
        let _0x2317e2 = {
            "fn": "jettyValueInfo",
            "method": "get",
            "url": "https://jetta-app.mosc.faw-vw.com/jetta-app/general/public/v1/common/jetta_value/get_profile_statistic_data"
          },
          _0x7d7f4 = await this.http(getSignParam(_0x2317e2));
        if (_0x7d7f4.returnStatus == "SUCCEED") {
          let {
            currentJettaValue: _0x1fe4eb
          } = _0x7d7f4.data;
          this.jettaValue = _0x1fe4eb;
        } else {
          this.log(_0x7d7f4.errorMessage);
        }
      }
    } catch (_0x16b9c1) {
      console.log(_0x16b9c1);
    }
  }
  async ["signInfo"]() {
    try {
      {
        let _0x5c7972 = getSignParam({
            "fn": "signInfo",
            "method": "get",
            "url": "https://mg.jconnect.faw-vw.com/vehicle-market/public/signIn/getSignInStatus",
            "searchParams": {
              "token": "Bearer " + this.userCookie
            }
          }),
          _0x459f68 = await this.http(_0x5c7972);
        if (_0x459f68.status == "SUCCEED") {
          let _0xb44d15 = _0x459f68.data;
          _0xb44d15 ? this.log("今日已签到") : await this.signIn();
        } else this.log(_0x459f68.errorMessage);
      }
    } catch (_0x4cc989) {
      console.log(_0x4cc989);
    }
  }
  async ["signIn"]() {
    try {
      let _0x168aeb = getSignParam({
          "fn": "signIn",
          "method": "get",
          "url": "https://mg.jconnect.faw-vw.com/vehicle-market/public/signIn/signInV2",
          "searchParams": {
            "token": "Bearer " + this.userCookie
          }
        }),
        _0x3ce3ec = await this.http(_0x168aeb);
      if (_0x3ce3ec.status == "SUCCEED") {
        let {
          seriesDay: _0x2140b9
        } = _0x3ce3ec.data;
        this.log("签到成功");
      } else this.log(_0x3ce3ec.errorMessage);
    } catch (_0x31081c) {
      console.log(_0x31081c);
    }
  }
  async ["getTaskList"]() {
    try {
      let _0x3d56eb = {
          "fn": "getTaskList",
          "method": "get",
          "url": "https://jetta-app.mosc.faw-vw.com/jetta-app/general/public/v1/common/jetta_value/get_welfare_home_info"
        },
        _0x3b2886 = await this.http(getSignParam(_0x3d56eb));
      if (_0x3b2886.returnStatus == "SUCCEED") {
        {
          let {
            newTaskConfigList: _0x4a07b7
          } = _0x3b2886.data;
          this.taskList = _0x4a07b7;
        }
      } else {
        this.log(_0x3b2886.errorMessage);
      }
    } catch (_0x4fd0b6) {
      console.log(_0x4fd0b6);
    }
  }
  async ["getArticleList"]() {
    try {
      {
        let _0x2fb669 = {
            "fn": "getArticleList",
            "method": "get",
            "url": "https://jetta-app.mosc.faw-vw.com/jetta-app/general/inpublic/v1/common/question/get_recommendation_questions",
            "searchParams": {
              "pageNum": $.randomNum(1, 5),
              "pageSize": 20,
              "theme": ""
            }
          },
          _0x2749dd = await this.http(getSignParam(_0x2fb669));
        _0x2749dd.returnStatus == "SUCCEED" ? this.articleList = _0x2749dd.data : this.log(_0x2749dd.errorMessage);
      }
    } catch (_0x131560) {
      console.log(_0x131560);
    }
  }
  async ["doShare"](_0x4485db) {
    try {
      {
        let {
            bbsId: _0xa3321,
            bbsSubject: _0x2c59f6,
            summary: _0x352d12
          } = _0x4485db,
          _0x275d1a = {
            "fn": "doShare",
            "method": "post",
            "url": "https://mg.jconnect.faw-vw.com/jbrand-api-community/public/user/forward/bbsForward",
            "searchParams": {
              "token": "Bearer " + this.userCookie
            },
            "form": {
              "bbsId": _0xa3321
            }
          },
          _0x198b09 = await this.http(getSignParam(_0x275d1a));
        if (_0x198b09.status == "SUCCEED") {
          {
            let {
              status: _0x35e65d,
              msg: _0x392200
            } = _0x198b09.data;
            _0x35e65d == "SUCCEED" ? this.log("分享[" + (_0x2c59f6 || _0x352d12?.["substring"](0, 5)) + "]成功") : this.log(_0x392200);
            return _0x392200;
          }
        } else this.log(_0x198b09.errorMessage);
      }
    } catch (_0x211449) {
      console.log(_0x211449);
    }
  }
  async ["getImage"]() {
    try {
      let _0x334668 = {
          "fn": "getImage",
          "method": "get",
          "url": imgApi
        },
        {
          headers: _0x371b79
        } = await this.request(_0x334668);
      if (_0x371b79.location) {
        {
          let {
              headers: _0x3a719a,
              body: _0x4b4f6a
            } = await this.request({
              "url": _0x371b79.location
            }),
            _0x424185 = new FormData();
          _0x424185.append("name", "files");
          _0x424185.append("filename", "img.jpg");
          _0x424185.append("Content-Type", _0x3a719a["content-type"]);
          _0x424185.append("value", _0x4b4f6a);
          this.imgData = _0x424185;
          this.imgUrl = _0x371b79.location;
        }
      }
    } catch (_0xd91dfd) {
      console.log(_0xd91dfd);
    }
  }
  async ["insertImages"]() {
    try {
      {
        let _0x5d70a7 = {
            "fn": "insertImages",
            "method": "put",
            "url": "https://mg.jconnect.faw-vw.com/jbrand-api-community/public/user/bbs/insertBbsImagesByUser",
            "headers": {
              "Content-Type": "multipart/form-data; boundary=alamofire.boundary.aaeba700f2d68612"
            },
            "searchParams": {
              "token": "Bearer " + this.userCookie
            },
            "body": this.imgData
          },
          _0x18f467 = await this.http(getSignParam(_0x5d70a7));
        console.log("insertImages / res:", _0x18f467);
        _0x18f467.status == "SUCCEED" ? this.imgUrl = _0x18f467.data[0] : this.log(_0x18f467.errorMessage);
      }
    } catch (_0x58182e) {
      console.log(_0x58182e);
    }
  }
  async ["getContent"]() {
    try {
      {
        let _0x285873 = {
            "fn": "getContent",
            "method": "get",
            "url": contentApi
          },
          _0x416304 = await this.http(_0x285873);
        if (_0x416304.code == 200) {
          let {
            tag: _0x21000a,
            origin: _0x8aa691,
            content: _0x444bb3
          } = _0x416304.data;
          this.bbsTitle = "" + (_0x21000a + _0x8aa691);
          this.bbsContent = _0x444bb3;
          if (this.bbsTitle?.["length"] < 5) {
            $.title += $.time("MM-dd HH:mm");
          }
        }
      }
    } catch (_0x1bb3ab) {
      console.log(_0x1bb3ab);
    }
  }
  async ["insertBbs"]() {
    try {
      await this.getImage();
      await this.getContent();
      let _0x28f26f = {
          "fn": "insertBbs",
          "method": "post",
          "url": "https://mg.jconnect.faw-vw.com/jbrand-api-community/public/user/bbs/insertBbsByUser",
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
          },
          "searchParams": {
            "token": "Bearer " + this.userCookie
          },
          "body": $.queryStr({
            "bbsContent": encodeURIComponent(this.bbsContent),
            "bbsSubject": encodeURIComponent(this.bbsTitle),
            "bbsType": 1,
            "contentUrlList": encodeURIComponent(this.imgUrl),
            "coverUrlDisHeight": 1820,
            "coverUrlDisWidth": 1024,
            "coverUrlList": encodeURIComponent(this.imgUrl),
            "resolution": 0.56,
            "summary": encodeURIComponent(this.bbsContent)
          })
        },
        _0x5d26ab = await this.http(getSignParam(_0x28f26f));
      if (_0x5d26ab.status == "SUCCEED") {
        {
          let {
            status: _0x5dbb4a,
            msg: _0x1e70c0
          } = _0x5d26ab.data?.["scoreReturnOutDTO"];
          _0x5dbb4a == "SUCCEED" ? this.log("发帖[" + this.bbsContent?.["substring"](0, 5) + "]成功") : this.log(_0x1e70c0);
        }
      } else this.log(_0x5d26ab.errorMessage);
    } catch (_0x5442dd) {
      console.log(_0x5442dd);
    }
  }
  async ["insertBbsTask"]() {
    try {
      await this.insertBbs();
    } catch (_0x12ecc5) {
      console.log(_0x12ecc5);
    }
  }
  async ["dailyTask"]() {
    try {
      {
        await this.signInfo();
        await this.randomWait(3, 5);
        await this.getTaskList();
        for (let _0xc75cef of this.taskList) {
          let {
            businessName: _0x57b8f0,
            isDone: _0x4f078d
          } = _0xc75cef;
          if (_0x4f078d) continue;
          switch (_0x57b8f0) {
            case "转发/分享":
              this.articleList?.["length"] ? "" : await this.getArticleList();
              let _0x4a36bb = $.randomNum(0, this.articleList?.["length"] - 3),
                _0x2bbc7b = await this.doShare(this.articleList[_0x4a36bb++]);
              if (_0x2bbc7b?.["includes"]("转发数量超出")) break;
              await this.randomWait(3, 5);
              await this.doShare(this.articleList[_0x4a36bb++]);
              await this.randomWait(3, 5);
              await this.doShare(this.articleList[_0x4a36bb++]);
              await this.randomWait(3, 5);
              break;
            case "发帖":
              insertBbs == "true" ? await this.insertBbsTask() : "";
              break;
          }
        }
      }
    } catch (_0x12abf1) {
      console.log(_0x12abf1);
    }
  }
  async ["userTask"](_0x276ed7) {
    try {
      this.taskInit(_0x276ed7);
      await this.userInfo();
      if (!this.valid) {
        {
          this.log("cookie疑似失效", {
            "notify": true,
            "prefix": true
          });
          return;
        }
      }
      this.log("\n******* 【账号" + this.userIdx + "】" + (this.nickName || "") + " ******* ", {
        "console": !threadFlag,
        "prefixless": true,
        "timeless": true,
        "notify": !threadFlag
      });
      await this.dailyTask();
      await this.pointInfo();
      await this.jettyValueInfo();
      this.point ? this.log("捷出值: " + this.jettaValue + ", 积分: " + this.point, {
        "notify": true
      }) : "";
    } catch (_0xe1afce) {
      console.log(_0xe1afce);
    }
  }
}
!(async () => {
  $.envSplitor = envSplitor;
  const _0x5380c6 = {
    "Class": UserInfo
  };
  await $.readEnv(configInit(_0x5380c6));
  loginFlag && (await $.threadTask("login"), $.userList = $.userList.filter(({
    valid: _0x2e45da
  }) => _0x2e45da));
  threadFlag ? await threadTask() : await userTask();
})().catch(_0x9e8d68 => {
  $.logErr(_0x9e8d68);
}).finally(() => {
  $.done();
});
async function userTask() {
  try {
    for (let _0x4da3fc of $.userList) {
      await _0x4da3fc.userTask();
    }
  } catch (_0x22becd) {
    console.log(_0x22becd);
  }
}
async function threadTask() {
  try {
    await $.threadTask("userTask");
  } catch (_0x182b3d) {
    console.log(_0x182b3d);
  }
}
function configInit(_0x4ad641 = {}) {
  let _0x10051b = {
    "cookie": cookie,
    "cookieArr": cookieArr,
    "envName": envName,
    "configName": configName,
    "notifyFlag": notifyFlag,
    "threadFlag": threadFlag,
    "proxyFlag": proxyFlag,
    "prefixFlag": prefixFlag,
    "timeFlag": timeFlag,
    "DEFAULT_TIMEOUT": DEFAULT_TIMEOUT,
    "DEFAULT_RETRY": DEFAULT_RETRY,
    "MAX_THREAD": MAX_THREAD
  };
  return Object.assign(_0x10051b, _0x4ad641);
}
function getSignParam(_0x23e625 = {}) {
  let _0x5a5470 = "5933615834",
    _0x224207 = Date.now(),
    _0x281411 = $.randomString(32),
    _0x5bf32c = 0,
    _0x26d47c = 8,
    _0x50e49a = _0x23e625.url.split(".com")[1],
    _0x22277f = {
      ..._0x23e625.searchParams,
      "appkey": _0x5a5470,
      "signTimestamp": _0x224207,
      "timestamp": _0x224207,
      "nonce": _0x281411
    };
  _0x23e625.url?.["includes"]("mg.jconnect") && (_0x22277f = {
    ..._0x23e625.searchParams,
    "appkey": _0x5a5470,
    "nonce": _0x281411,
    "signt": _0x224207
  });
  let _0x9f93f6 = _0x8975d(_0x50e49a, _0x2a18d5(_0x22277f));
  _0x22277f.digitalSign = _0x9f93f6;
  _0x23e625.url?.["includes"]("mg.jconnect") && (delete _0x22277f.digitalSign, _0x22277f.sign = _0x9f93f6);
  _0x23e625.searchParams = {
    ..._0x23e625.searchParams,
    ..._0x22277f
  };
  return _0x23e625;
  function _0x8975d(_0x42baf3, _0x5d7dd4) {
    var _0x42a01d,
      _0x4f6a52 = _0x42baf3.replace("one-app/", "").replace("test/", "").replace(/^\//, "");
    _0x5d7dd4.sort();
    var _0x44e7ab = _0x5d7dd4.join("_"),
      _0x2b01b3 = "".concat(_0x4f6a52, "_").concat(_0x44e7ab, "_").concat("a965e8abce4098f033d33fb2fb0a81e5"),
      _0x4d512b = encodeURIComponent(_0x2b01b3);
    _0x42a01d = _0x5b4d7b(_0x4d512b);
    return _0x42a01d;
  }
  function _0x5b4d7b(_0x9759ab) {
    return _0x9f59ac(_0x17be36(_0x2d4f14(_0x9759ab), _0x9759ab.length * _0x26d47c));
  }
  function _0x2a18d5(_0x4ce6f8) {
    {
      var _0x668cbd = [];
      for (var _0x286234 in _0x4ce6f8) null != _0x4ce6f8[_0x286234] && _0x668cbd.push("".concat(_0x286234, "=").concat(_0x4ce6f8[_0x286234]));
      return _0x668cbd;
    }
  }
  function _0x17be36(_0x559e19, _0x1c0928) {
    {
      _0x559e19[_0x1c0928 >> 5] |= 128 << _0x1c0928 % 32;
      _0x559e19[14 + (_0x1c0928 + 64 >>> 9 << 4)] = _0x1c0928;
      for (var _0x41d3ef = 1732584193, _0x855f9c = -271733879, _0x3fae68 = -1732584194, _0x146c3e = 271733878, _0x37883a = 0; _0x37883a < _0x559e19.length; _0x37883a += 16) {
        var _0x4012eb = _0x41d3ef,
          _0x3dc200 = _0x855f9c,
          _0x35fc3e = _0x3fae68,
          _0x23acb3 = _0x146c3e;
        _0x41d3ef = _0xcf3e0a(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 0], 7, -680876936);
        _0x146c3e = _0xcf3e0a(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 1], 12, -389564586);
        _0x3fae68 = _0xcf3e0a(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 2], 17, 606105819);
        _0x855f9c = _0xcf3e0a(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 3], 22, -1044525330);
        _0x41d3ef = _0xcf3e0a(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 4], 7, -176418897);
        _0x146c3e = _0xcf3e0a(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 5], 12, 1200080426);
        _0x3fae68 = _0xcf3e0a(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 6], 17, -1473231341);
        _0x855f9c = _0xcf3e0a(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 7], 22, -45705983);
        _0x41d3ef = _0xcf3e0a(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 8], 7, 1770035416);
        _0x146c3e = _0xcf3e0a(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 9], 12, -1958414417);
        _0x3fae68 = _0xcf3e0a(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 10], 17, -42063);
        _0x855f9c = _0xcf3e0a(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 11], 22, -1990404162);
        _0x41d3ef = _0xcf3e0a(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 12], 7, 1804603682);
        _0x146c3e = _0xcf3e0a(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 13], 12, -40341101);
        _0x3fae68 = _0xcf3e0a(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 14], 17, -1502002290);
        _0x855f9c = _0xcf3e0a(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 15], 22, 1236535329);
        _0x41d3ef = _0xc45b5(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 1], 5, -165796510);
        _0x146c3e = _0xc45b5(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 6], 9, -1069501632);
        _0x3fae68 = _0xc45b5(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 11], 14, 643717713);
        _0x855f9c = _0xc45b5(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 0], 20, -373897302);
        _0x41d3ef = _0xc45b5(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 5], 5, -701558691);
        _0x146c3e = _0xc45b5(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 10], 9, 38016083);
        _0x3fae68 = _0xc45b5(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 15], 14, -660478335);
        _0x855f9c = _0xc45b5(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 4], 20, -405537848);
        _0x41d3ef = _0xc45b5(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 9], 5, 568446438);
        _0x146c3e = _0xc45b5(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 14], 9, -1019803690);
        _0x3fae68 = _0xc45b5(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 3], 14, -187363961);
        _0x855f9c = _0xc45b5(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 8], 20, 1163531501);
        _0x41d3ef = _0xc45b5(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 13], 5, -1444681467);
        _0x146c3e = _0xc45b5(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 2], 9, -51403784);
        _0x3fae68 = _0xc45b5(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 7], 14, 1735328473);
        _0x855f9c = _0xc45b5(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 12], 20, -1926607734);
        _0x41d3ef = _0x3ef8a3(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 5], 4, -378558);
        _0x146c3e = _0x3ef8a3(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 8], 11, -2022574463);
        _0x3fae68 = _0x3ef8a3(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 11], 16, 1839030562);
        _0x855f9c = _0x3ef8a3(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 14], 23, -35309556);
        _0x41d3ef = _0x3ef8a3(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 1], 4, -1530992060);
        _0x146c3e = _0x3ef8a3(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 4], 11, 1272893353);
        _0x3fae68 = _0x3ef8a3(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 7], 16, -155497632);
        _0x855f9c = _0x3ef8a3(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 10], 23, -1094730640);
        _0x41d3ef = _0x3ef8a3(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 13], 4, 681279174);
        _0x146c3e = _0x3ef8a3(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 0], 11, -358537222);
        _0x3fae68 = _0x3ef8a3(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 3], 16, -722521979);
        _0x855f9c = _0x3ef8a3(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 6], 23, 76029189);
        _0x41d3ef = _0x3ef8a3(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 9], 4, -640364487);
        _0x146c3e = _0x3ef8a3(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 12], 11, -421815835);
        _0x3fae68 = _0x3ef8a3(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 15], 16, 530742520);
        _0x855f9c = _0x3ef8a3(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 2], 23, -995338651);
        _0x41d3ef = _0x228889(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 0], 6, -198630844);
        _0x146c3e = _0x228889(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 7], 10, 1126891415);
        _0x3fae68 = _0x228889(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 14], 15, -1416354905);
        _0x855f9c = _0x228889(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 5], 21, -57434055);
        _0x41d3ef = _0x228889(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 12], 6, 1700485571);
        _0x146c3e = _0x228889(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 3], 10, -1894986606);
        _0x3fae68 = _0x228889(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 10], 15, -1051523);
        _0x855f9c = _0x228889(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 1], 21, -2054922799);
        _0x41d3ef = _0x228889(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 8], 6, 1873313359);
        _0x146c3e = _0x228889(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 15], 10, -30611744);
        _0x3fae68 = _0x228889(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 6], 15, -1560198380);
        _0x855f9c = _0x228889(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 13], 21, 1309151649);
        _0x41d3ef = _0x228889(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e, _0x559e19[_0x37883a + 4], 6, -145523070);
        _0x146c3e = _0x228889(_0x146c3e, _0x41d3ef, _0x855f9c, _0x3fae68, _0x559e19[_0x37883a + 11], 10, -1120210379);
        _0x3fae68 = _0x228889(_0x3fae68, _0x146c3e, _0x41d3ef, _0x855f9c, _0x559e19[_0x37883a + 2], 15, 718787259);
        _0x855f9c = _0x228889(_0x855f9c, _0x3fae68, _0x146c3e, _0x41d3ef, _0x559e19[_0x37883a + 9], 21, -343485551);
        _0x41d3ef = _0x4f5682(_0x41d3ef, _0x4012eb);
        _0x855f9c = _0x4f5682(_0x855f9c, _0x3dc200);
        _0x3fae68 = _0x4f5682(_0x3fae68, _0x35fc3e);
        _0x146c3e = _0x4f5682(_0x146c3e, _0x23acb3);
      }
      return Array(_0x41d3ef, _0x855f9c, _0x3fae68, _0x146c3e);
    }
  }
  function _0x3baa2d(_0x4120a8, _0x3f5fff, _0x3eb8a2, _0x23b9e9, _0x1983da, _0x2e3020) {
    return _0x4f5682(_0x4f5215(_0x4f5682(_0x4f5682(_0x3f5fff, _0x4120a8), _0x4f5682(_0x23b9e9, _0x2e3020)), _0x1983da), _0x3eb8a2);
  }
  function _0xcf3e0a(_0x22c251, _0x210f8c, _0x16cbca, _0x5b8c0f, _0x4dc2f1, _0x5add9d, _0x15ed7f) {
    return _0x3baa2d(_0x210f8c & _0x16cbca | ~_0x210f8c & _0x5b8c0f, _0x22c251, _0x210f8c, _0x4dc2f1, _0x5add9d, _0x15ed7f);
  }
  function _0xc45b5(_0x1e3144, _0x294423, _0x1ff502, _0x204f0e, _0x18226c, _0x26a4dc, _0x36a9eb) {
    return _0x3baa2d(_0x294423 & _0x204f0e | _0x1ff502 & ~_0x204f0e, _0x1e3144, _0x294423, _0x18226c, _0x26a4dc, _0x36a9eb);
  }
  function _0x3ef8a3(_0x22fd62, _0x2e03ae, _0x58e582, _0x5f1e02, _0x1c42d9, _0x1f7b02, _0x58b420) {
    return _0x3baa2d(_0x2e03ae ^ _0x58e582 ^ _0x5f1e02, _0x22fd62, _0x2e03ae, _0x1c42d9, _0x1f7b02, _0x58b420);
  }
  function _0x228889(_0x273684, _0x1d2dc9, _0x332759, _0x332721, _0x59b3ef, _0x32db69, _0x1dd535) {
    return _0x3baa2d(_0x332759 ^ (_0x1d2dc9 | ~_0x332721), _0x273684, _0x1d2dc9, _0x59b3ef, _0x32db69, _0x1dd535);
  }
  function _0x4f5682(_0x4f37c4, _0x5bb079) {
    {
      var _0x46b927 = (65535 & _0x4f37c4) + (65535 & _0x5bb079),
        _0x2c732e = (_0x4f37c4 >> 16) + (_0x5bb079 >> 16) + (_0x46b927 >> 16);
      return _0x2c732e << 16 | 65535 & _0x46b927;
    }
  }
  function _0x4f5215(_0x4794b5, _0x15173a) {
    return _0x4794b5 << _0x15173a | _0x4794b5 >>> 32 - _0x15173a;
  }
  function _0x2d4f14(_0x499b14) {
    {
      for (var _0xf1cb38 = Array(), _0x21e81b = (1 << _0x26d47c) - 1, _0x56a302 = 0; _0x56a302 < _0x499b14.length * _0x26d47c; _0x56a302 += _0x26d47c) _0xf1cb38[_0x56a302 >> 5] |= (_0x499b14.charCodeAt(_0x56a302 / _0x26d47c) & _0x21e81b) << _0x56a302 % 32;
      return _0xf1cb38;
    }
  }
  function _0x9f59ac(_0xb409c5) {
    {
      for (var _0x4cc8ee = _0x5bf32c ? "0123456789ABCDEF" : "0123456789abcdef", _0x3d548d = "", _0x41ff48 = 0; _0x41ff48 < 4 * _0xb409c5.length; _0x41ff48++) _0x3d548d += _0x4cc8ee.charAt(_0xb409c5[_0x41ff48 >> 2] >> _0x41ff48 % 4 * 8 + 4 & 15) + _0x4cc8ee.charAt(_0xb409c5[_0x41ff48 >> 2] >> _0x41ff48 % 4 * 8 & 15);
      return _0x3d548d;
    }
  }
}
function Env(_0x54ebf3, _0x34e16a) {
  class _0x5a2ac1 {
    constructor(_0x510195) {
      this.userIdx = 0;
      this.userList = [];
      this.logSeparator = "\n";
      this.splitor = "\n";
      this.envSplitor = ["@", "\n"];
      this.date = new Date().getDate();
      this.day = new Date().getDay();
      this.hour = new Date().getHours();
      this.configInit(_0x510195);
    }
    ["configInit"](_0x38c6fc = {}) {
      {
        let {
          cookie = "",
          cookieArr = [],
          envName = "",
          configName = "",
          currentVersion = "",
          notifyFlag = true,
          threadFlag = false,
          proxyFlag = false,
          prefixFlag = false,
          timeFlag = false,
          exchangeFlag = false,
          notifyHour = "",
          DEFAULT_TIMEOUT = 8000,
          DEFAULT_RETRY = 3,
          MAX_THREAD = 5
        } = _0x38c6fc;
        this.retryNum = DEFAULT_RETRY;
        this.cookie = cookie.trim();
        this.cookieArr = cookieArr;
        this.notifyStr = [];
        this.notifyHour = notifyHour;
        this.notifyFlag = notifyFlag;
        this.threadFlag = threadFlag;
        this.proxyFlag = proxyFlag;
        this.prefixFlag = prefixFlag;
        this.timeFlag = timeFlag;
        this.exchangeFlag = exchangeFlag;
        threadFlag ? this.prefixFlag = true : "";
        exchangeFlag ? this.timeFlag = true : "";
        this.got = this.got ? this.got : require("got");
        this.got = this.got.extend({
          "retry": {
            "limit": 0
          },
          "timeout": DEFAULT_TIMEOUT,
          "followRedirect": false
        });
        this.envName = envName;
        this.configName = configName;
        this.currentVersion = currentVersion;
        this.MAX_THREAD = parseInt(MAX_THREAD);
      }
    }
    ["toObj"](_0x5dd7c3, _0x48de1e = _0x5dd7c3) {
      try {
        return JSON.parse(_0x5dd7c3);
      } catch {
        return _0x48de1e;
      }
    }
    ["toStr"](_0x3db4f6, _0x21e717 = _0x3db4f6) {
      try {
        return JSON.stringify(_0x3db4f6);
      } catch {
        return _0x21e717;
      }
    }
    ["randomNum"](_0x42e3af, _0x19b7b0) {
      return Math.floor(Math.random() * (_0x19b7b0 - _0x42e3af + 1) + _0x42e3af);
    }
    ["randomPattern"](_0x1f3cb3, _0x477d1e = "abcdef0123456789") {
      {
        let _0x48b8c2 = "";
        for (let _0x525e6e of _0x1f3cb3) {
          if (_0x525e6e == "x") _0x48b8c2 += _0x477d1e.charAt(Math.floor(Math.random() * _0x477d1e.length));else _0x525e6e == "X" ? _0x48b8c2 += _0x477d1e.charAt(Math.floor(Math.random() * _0x477d1e.length)).toUpperCase() : _0x48b8c2 += _0x525e6e;
        }
        return _0x48b8c2;
      }
    }
    ["randomString"](_0x306fc5, _0x513154 = "abcdef0123456789") {
      let _0x3e7068 = "";
      for (let _0x29fe41 = 0; _0x29fe41 < _0x306fc5; _0x29fe41++) {
        _0x3e7068 += _0x513154.charAt(Math.floor(Math.random() * _0x513154.length));
      }
      return _0x3e7068;
    }
    ["log"](..._0x752acd) {
      if (_0x752acd.length <= 0) return;
      let _0x568cc7 = "",
        _0x373d0a = {
          "console": true
        };
      if (_0x752acd.length > 1 && _0x752acd[_0x752acd.length - 1] instanceof Object) Object.assign(_0x373d0a, _0x752acd.pop());
      if (!_0x373d0a.timeless) {
        {
          if (_0x373d0a.time || this.timeFlag) {
            let _0xf07640 = _0x373d0a.fmt || "HH:mm:ss";
            this.exchangeFlag ? _0xf07640 = _0x373d0a.fmt || "HH:mm:ss.S" : "";
            _0x568cc7 = "[" + this.time(_0xf07640) + "]";
          }
        }
      }
      if (!_0x373d0a.prefixless) {
        {
          if (_0x373d0a.prefix || this.prefixFlag) {
            {
              if (_0x373d0a.logPrefix) _0x568cc7 += _0x373d0a.logPrefix;else {
                if (this.logPrefix) _0x568cc7 += this.logPrefix;else {
                  if (this.user) {
                    {
                      _0x568cc7 += "账号[" + this.user.userIdx + "]";
                      if (this.user.nickName) _0x568cc7 += "[" + this.user.nickName + "]";
                    }
                  } else {
                    if (this.userIdx || this.index) {
                      _0x568cc7 += "账号[" + (this.userIdx || this.index) + "]";
                      if (this.nickName) _0x568cc7 += "[" + this.nickName + "]";
                    }
                  }
                }
              }
            }
          }
        }
      }
      _0x752acd = _0x752acd.map(_0x5aac26 => {
        {
          if (typeof _0x5aac26 !== "string") _0x5aac26 = this.toStr(_0x5aac26);
          return _0x5aac26 ? _0x5aac26.startsWith("\n") ? "\n" + _0x568cc7 + _0x5aac26.substring(1) : "" + _0x568cc7 + _0x5aac26 : _0x5aac26;
        }
      });
      if (_0x373d0a.notify && this.notifyStr) this.notifyStr = [...this.notifyStr, ..._0x752acd];
      if (_0x373d0a.console) console.log(_0x752acd.join(this.logSeparator));
    }
    ["time"](_0xb01391, _0x446b94 = null) {
      const _0x2ef09e = _0x446b94 ? new Date(_0x446b94) : new Date();
      let _0x5831bc = {
        "M+": _0x2ef09e.getMonth() + 1,
        "d+": _0x2ef09e.getDate(),
        "H+": _0x2ef09e.getHours(),
        "m+": _0x2ef09e.getMinutes(),
        "s+": _0x2ef09e.getSeconds(),
        "q+": Math.floor((_0x2ef09e.getMonth() + 3) / 3),
        "S": _0x2ef09e.getMilliseconds()
      };
      if (/(y+)/.test(_0xb01391)) _0xb01391 = _0xb01391.replace(RegExp.$1, (_0x2ef09e.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (let _0x352e87 in _0x5831bc) if (new RegExp("(" + _0x352e87 + ")").test(_0xb01391)) _0xb01391 = _0xb01391.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x5831bc[_0x352e87] : ("00" + _0x5831bc[_0x352e87]).substr(("" + _0x5831bc[_0x352e87]).length));
      return _0xb01391;
    }
    ["wait"](_0x2a4844) {
      return new Promise(_0x565b9e => setTimeout(_0x565b9e, _0x2a4844));
    }
    async ["randomWait"](_0x34cade, _0x119a4d, _0x42d514 = {}) {
      let _0x22eb8e = Math.random() * (_0x119a4d - _0x34cade) + _0x34cade;
      this.log("随机等待" + _0x22eb8e.toFixed(2) + "秒", {
        "console": _0x42d514.console || true
      });
      await this.wait(_0x22eb8e * 1000);
    }
    async ["request"](_0x55baaf = {}) {
      let _0x4d6f1e = null,
        _0x51f96b = 0,
        _0x35e4d4 = _0x55baaf.fn || _0x55baaf.url,
        _0x1a77fd = this.retryNum || 3;
      this.got = this.got ? this.got : require("got");
      _0x55baaf.method = _0x55baaf?.["method"]?.["toUpperCase"]() || "GET";
      while (_0x51f96b++ < _0x1a77fd) {
        try {
          {
            let _0x33a3b4 = null;
            const _0x3daafb = ["ECONNRESET", "EADDRINUSE", "ENOTFOUND", "EAI_AGAIN"];
            await this.got(_0x55baaf).then(_0x43415f => {
              _0x4d6f1e = _0x43415f;
            }, _0xc2c295 => {
              _0x33a3b4 = _0xc2c295;
              _0x4d6f1e = _0xc2c295.response;
            });
            if (_0x33a3b4) {
              {
                if (_0x33a3b4.name == "TimeoutError") {
                  this.log("[" + _0x35e4d4 + "]请求超时(" + _0x33a3b4.code + ")，重试第" + _0x51f96b + "次");
                } else {
                  if (_0x3daafb.includes(_0x33a3b4.code)) this.log("[" + _0x35e4d4 + "]请求错误(" + _0x33a3b4.code + ")，重试第" + _0x51f96b + "次");else {
                    let _0x3179f5 = _0x4d6f1e?.["statusCode"] || -1;
                    this.log("[" + _0x35e4d4 + "]请求错误(" + _0x33a3b4.message + "), 返回[" + _0x3179f5 + "]");
                    break;
                  }
                }
              }
            } else {
              break;
            }
          }
        } catch (_0x4a06aa) {
          this.log("[" + _0x35e4d4 + "]请求错误(" + _0x4a06aa.message + ")，重试第" + _0x51f96b + "次");
        }
      }
      let {
        statusCode = -1,
        headers = null,
        body = null
      } = _0x4d6f1e;
      if (body) try {
        body = JSON.parse(body);
      } catch {}
      return {
        "statusCode": statusCode,
        "headers": headers,
        "body": body
      };
    }
    async ["http"](_0x2f8854 = {}) {
      try {
        let {
          body: _0x2d7640
        } = await this.request(_0x2f8854);
        return _0x2d7640;
      } catch (_0x25bea1) {
        this.log(_0x25bea1.stack);
      }
    }
  }
  return new class extends _0x5a2ac1 {
    constructor(_0x3d0c62) {
      super(_0x3d0c62);
      this.name = _0x54ebf3;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      this.BasicClass = _0x5a2ac1;
      Object.assign(this, _0x3d0c62);
      this.log("\n[" + this.name + "], 开始!", {
        "time": true
      });
    }
    ["queryStr"](_0x3f8374) {
      {
        let _0x5c1d01 = "";
        for (const _0x19bbcb in _0x3f8374) {
          let _0xe526fa = _0x3f8374[_0x19bbcb];
          if (_0xe526fa != null && _0xe526fa !== "") {
            typeof _0xe526fa === "object" && (_0xe526fa = JSON.stringify(_0xe526fa));
            _0x5c1d01 += _0x19bbcb + "=" + _0xe526fa + "&";
          }
        }
        _0x5c1d01 = _0x5c1d01.substring(0, _0x5c1d01.length - 1);
        return _0x5c1d01;
      }
    }
    ["logErr"](_0xc7fb8c) {
      this.log("", "❗️" + this.name + ", 错误!", _0xc7fb8c.stack);
    }
    async ["readEnv"](_0x2d12e2 = {}) {
      {
        this.configInit(_0x2d12e2);
        if (this.cookie) {
          for (let _0x584cb3 of this.envSplitor) {
            if (this.cookie.includes(_0x584cb3)) {
              {
                this.splitor = _0x584cb3;
                break;
              }
            }
          }
          this.cookieArr = [...this.cookie.split(this.splitor), ...this.cookieArr];
        } else {
          if (this.cookieArr.length == 0) {
            try {
              const _0x1cb86b = require("./utils/config");
              this.config = await _0x1cb86b(this.configName);
              this.cookieArr = [...this.cookieArr, ...this.config?.["token"]];
            } catch (_0x515821) {}
          }
        }
        this.cookieArr = [...new Set(this.cookieArr.filter(_0x3e68d7 => _0x3e68d7))];
        for (let _0x2964c3 of this.cookieArr) {
          let _0x24115e = {
            "userIdx": this.cookieArr.indexOf(_0x2964c3) + 1,
            "userCookie": _0x2964c3,
            "valid": true
          };
          _0x2d12e2.Class && (_0x24115e = new _0x2d12e2.Class(_0x24115e));
          this.userList.push(_0x24115e);
        }
        if (!this.userList.length) {
          this.log("\n未填写变量[" + envName + "]", {
            "notify": true
          });
          return;
        }
        this.log("\n-----------");
        this.log("推送: " + this.notifyFlag, "账号前缀: " + this.prefixFlag, "时间前缀: " + this.timeFlag);
        this.log("并发: " + this.threadFlag, {
          "console": !this.threadFlag
        });
        this.log("最大并发数: " + (+this.MAX_THREAD || this.userList.length), {
          "console": this.threadFlag
        });
        this.log("当前版本: " + this.currentVersion, {
          "console": this.currentVersion
        });
        this.log("-----------");
        this.log("\n共" + this.userList.length + "个账号");
        return true;
      }
    }
    async ["sendNotify"]() {
      if (!this.notifyStr.length) return;
      try {
        {
          let _0x4285fc = "";
          try {
            _0x4285fc = require("./utils/sendNotify");
          } catch (_0x4dc778) {
            _0x4285fc = require("./sendNotify");
          }
          console.log("\n------------ 推送 ------------");
          await _0x4285fc.sendNotify(this.name, this.notifyStr.join("\n"));
        }
      } catch (_0x54a2b2) {
        console.log("读取推送依赖[sendNotify.js]失败, 请检查同目录下是否有依赖");
      }
    }
    async ["threads"](_0x2ca651, _0x583e75, _0x215f94 = {}) {
      while (_0x583e75.idx < $.userList.length) {
        let _0x360cec = this.userList[_0x583e75.idx++];
        if (!_0x360cec || !_0x360cec.valid) continue;
        await _0x360cec[_0x2ca651](_0x215f94);
      }
    }
    async ["threadTask"](_0x555527, _0x3e5b2e) {
      let _0x40daec = [],
        _0x5e659c = {
          "idx": 0
        },
        _0x296853 = _0x3e5b2e || +this.MAX_THREAD || this.userList.length;
      while (_0x296853--) _0x40daec.push(this.threads(_0x555527, _0x5e659c));
      await Promise.all(_0x40daec);
    }
    async ["done"](_0x228715 = {}) {
      {
        if (this.notifyFlag) {
          {
            this.userList.forEach(({
              notifyStr: _0x2698a8
            }) => {
              this.notifyStr = [...this.notifyStr, ..._0x2698a8];
            });
            let _0xd7b409 = _0x228715.hour || this.notifyHour;
            if (!_0xd7b409) await this.sendNotify();
            if (_0xd7b409 && this.hour >= _0xd7b409) await this.sendNotify();
          }
        }
        const _0x402b51 = new Date().getTime(),
          _0x13f9cc = (_0x402b51 - this.startTime) / 1000;
        this.log("\n[" + this.name + "], 结束! 🕛 " + _0x13f9cc + " 秒", {
          "time": true,
          "prefixless": true
        });
        process.exit(1);
      }
    }
  }(_0x54ebf3, _0x34e16a);
}