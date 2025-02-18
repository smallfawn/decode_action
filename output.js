//Tue Feb 18 2025 10:04:31 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
async function getsig(_0x4df481, _0x208fb1, _0x2b2ab8, _0x238aea = 3000) {
  return new Promise(_0x46edca => {
    let _0x441533 = {
      "url": "http://cc544gw.fknngessw98873.kuaishou631.life/sig",
      "headers": {
        "token": "" + $.token
      },
      "body": "body=" + _0x4df481 + ",client_salt=" + _0x208fb1 + ",url=" + _0x2b2ab8
    };
    $.post(_0x441533, async (_0x247b68, _0x47162c, _0x4cdcb0) => {
      try {
        if (_0x47162c && _0x47162c.statusCode == 200) {
          if (_0x4cdcb0.indexOf("sig") > -1) {
            {
              _0x4cdcb0 = _0x4cdcb0.replace(/\"/g, "");
              _0x4cdcb0 = _0x4cdcb0.replace(/,/g, "&");
              let _0x56db7a = null;
              _0x56db7a = querystring.parse(_0x4cdcb0);
              $.sig = _0x56db7a.sig;
              $.sig3 = _0x56db7a.__NS_sig3;
              $.tokensig = _0x56db7a.__nstokensig;
              $.signum = _0x56db7a.token_result;
              console.log("当前Api剩余请求次数：" + $.signum);
            }
          } else {
            console.log("请求Api[1]失败,尝试请求Api[2]");
            await getsig2(_0x4df481, _0x208fb1, _0x2b2ab8);
          }
        } else {
          {
            console.log("请求Api[1]失败,尝试请求Api[2]");
            await getsig2(_0x4df481, _0x208fb1, _0x2b2ab8);
          }
        }
      } catch (_0x4c46cf) {
        $.logErr(_0x4c46cf, _0x47162c);
      } finally {
        _0x46edca();
      }
    }, _0x238aea);
  });
}
async function getsig2(_0xfc6d8d, _0x5f60d9, _0x4a1fb7, _0x4e70da = 3000) {
  return new Promise(_0x448953 => {
    {
      let _0x8e4483 = {
        "url": "http://cc544gw.fknngessw98873.kuaishou631.life/sig",
        "headers": {
          "token": "" + $.token
        },
        "body": "body=" + _0xfc6d8d + ",client_salt=" + _0x5f60d9 + ",url=" + _0x4a1fb7
      };
      $.post(_0x8e4483, async (_0x50c732, _0x3b80bc, _0x447124) => {
        try {
          {
            if (_0x3b80bc && _0x3b80bc.statusCode == 200) {
              {
                if (_0x447124.indexOf("sig") > -1) {
                  _0x447124 = _0x447124.replace(/\"/g, "");
                  _0x447124 = _0x447124.replace(/,/g, "&");
                  let _0x598fa2 = null;
                  _0x598fa2 = querystring.parse(_0x447124);
                  $.sig = _0x598fa2.sig;
                  $.sig3 = _0x598fa2.__NS_sig3;
                  $.tokensig = _0x598fa2.__nstokensig;
                  $.signum = _0x598fa2.token_result;
                  console.log("当前Api剩余请求次数：" + $.signum);
                } else {
                  console.log("请求Api[2]失败：" + _0x447124 + "，防止浪费奖励次数，停止运行。");
                  process.exit(0);
                }
              }
            } else {
              {
                console.log("请求Api[2]失败：" + _0x447124 + "，防止浪费奖励次数，停止运行。");
                process.exit(0);
              }
            }
          }
        } catch (_0x23f2b6) {
          $.logErr(_0x23f2b6, _0x3b80bc);
        } finally {
          {
            _0x448953();
          }
        }
      }, _0x4e70da);
    }
  });
}
async function cashsign(_0x1f8760 = 3000) {
  return new Promise(_0x10912e => {
    {
      let _0x51dd96 = {
        "url": "https://nebula.kuaishou.com/rest/n/nebula/cashSign/goldenAreaTaskSignIn",
        "headers": {
          "Accept-Encoding": "gzip, deflate",
          "Cookie": $.cookie,
          "Connection": "keep-alive",
          "Accept": "*/*",
          "Host": "nebula.kuaishou.com",
          "Accept-Language": "en-us",
          "User-Agent": "Kwai-android aegon/3.4.0"
        }
      };
      $.get(_0x51dd96, async (_0x53aba7, _0x1a3e0a, _0x611e2a) => {
        {
          try {
            _0x611e2a = JSON.parse(_0x611e2a);
            console.log(_0x611e2a);
            if (_0x611e2a.result == 1) {} else {
              console.log("第【" + $.index + "】个账号获取签到信息失败，" + _0x611e2a.error_msg);
            }
          } catch (_0x4611ce) {
            $.logErr(_0x4611ce, _0x1a3e0a);
          } finally {
            _0x10912e();
          }
        }
      }, _0x1f8760);
    }
  });
}
async function sign(_0x298fa1 = 3000) {
  return new Promise(_0x418124 => {
    {
      let _0x461b6e = {
        "url": "https://nebula.kuaishou.com/rest/n/nebula/sign/sign?source=activity",
        "headers": {
          "Accept-Encoding": "gzip, deflate",
          "Cookie": $.cookie,
          "Connection": "keep-alive",
          "Accept": "*/*",
          "Host": "nebula.kuaishou.com",
          "Accept-Language": "en-us",
          "User-Agent": "Kwai-android aegon/3.4.0"
        }
      };
      $.get(_0x461b6e, async (_0x1c48ff, _0xf932b9, _0x5770d2) => {
        try {
          {
            _0x5770d2 = JSON.parse(_0x5770d2);
            if (_0x5770d2.result == 1) {
              {
                if (_0x5770d2.data.nebulaSignInPopup.todaySigned == true) {
                  {
                    console.log("账号  " + $.index + "  [" + $.nickname + "]签到成功。" + _0x5770d2.data.nebulaSignInPopup.title);
                    let _0x63e338 = Math.round(new Date().getTime()).toString();
                    await watchvideo();
                    if ($.lid != "0") {
                      let _0xa13b11 = Math.round(new Date().getTime()).toString();
                      console.log("账号  " + $.index + "  [" + $.nickname + "]去翻倍签到1金额");
                      await reward(_0x63e338, _0xa13b11, $.lid, "sign");
                    }
                    _0x63e338 = Math.round(new Date().getTime()).toString();
                    await watchvideo();
                    if ($.lid != "0") {
                      {
                        let _0x545c0d = Math.round(new Date().getTime()).toString();
                        console.log("账号  " + $.index + "  [" + $.nickname + "]去翻倍签到2金额");
                        await report(_0x63e338, _0x545c0d, $.lid, "168");
                      }
                    }
                  }
                }
              }
            } else {
              console.log("第【" + $.index + "】个账号获取签到信息失败，" + _0x5770d2.error_msg);
            }
          }
        } catch (_0xd2734c) {
          {
            $.logErr(_0xd2734c, _0xf932b9);
          }
        } finally {
          _0x418124();
        }
      }, _0x298fa1);
    }
  });
}
_0xodt = "jsjiami.com.v6";