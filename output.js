//Sun Aug 18 2024 09:01:21 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  getEnvsByName,
  DisableCk,
  EnableCk,
  updateEnv,
  updateEnv11,
  getEnvByUserId
} = require("./ql");
const {
  wait,
  checkCk,
  validateCarmeWithType,
  invalidCookieNotify,
  getUserInfo,
  runOne,
  getCookieMap
} = require("./common.js");
const _0x11f78e = require("moment");
function _0x543ec4(_0x3fdeea, _0x4dabab) {
  return Math.floor(Math.random() * (_0x4dabab - _0x3fdeea + 1) + _0x3fdeea);
}
function _0x389941(_0x1daaab) {
  let _0x59299c = "";
  for (let [_0x7cf76, _0x5050e8] of _0x1daaab) {
    _0x59299c += encodeURIComponent(_0x7cf76) + "=" + encodeURIComponent(_0x5050e8) + ";";
  }
  return _0x59299c;
}
async function _0x179175(_0x2afd75, _0x2c035c, _0x3898fc) {
  let _0x1723ee = await runOne(_0x2c035c, _0x3898fc);
  if (_0x1723ee && _0x1723ee.data) {
    let _0x56dfb3 = _0x1723ee.data;
    if (_0x56dfb3.code === 3000) {
      let _0x152e9a = JSON.parse(_0x56dfb3.returnValue.data);
      const _0x120021 = _0x152e9a.expires;
      const _0x3e21d8 = _0x11f78e(_0x120021 * 1000).format("YYYY-MM-DD HH:mm:ss");
      let _0xcf2e0a = getCookieMap(_0x2c035c);
      let _0x1e14a1 = JSON.parse(_0x56dfb3.returnValue.extMap.eleExt);
      for (let _0x325327 = 0; _0x325327 < _0x1e14a1.length; _0x325327++) {
        let _0x296965 = _0x1e14a1[_0x325327];
        if (_0x296965.name === "SID") {
          _0xcf2e0a.SID = _0x296965.value;
          break;
        }
      }
      let _0x5a92f2 = await runOne(_0x2c035c, _0xcf2e0a.get("SID"));
      if (!_0x5a92f2) {
        return;
      }
      _0xcf2e0a.cookie2 = _0x56dfb3.returnValue.sid;
      let _0xf79b29 = _0x389941(_0xcf2e0a);
      if (_0x2afd75.id) {
        await updateEnv11(_0xf79b29, _0x2afd75.id, _0x2afd75.remarks);
      } else {
        await updateEnv(_0xf79b29, _0x2afd75._id, _0x2afd75.remarks);
      }
      let _0x88e06c = _0xcf2e0a.get("USERID");
      let _0x2704d2 = await getEnvByUserId(_0x88e06c);
      if (_0x2704d2) {
        console.log("检测到 elmqqck，将进行同步刷新");
        if (_0x2704d2.id) {
          await updateEnv11(_0xf79b29, _0x2704d2.id, _0x2704d2.remarks, "elmqqck");
        } else {
          await updateEnv(_0xf79b29, _0x2704d2._id, _0x2704d2.remarks, "elmqqck");
        }
      }
      let _0x4bf6e8 = "刷新成功，ck 有效期为：" + _0x3e21d8;
      console.log(_0x4bf6e8);
      return _0x4bf6e8;
    } else {
      if (_0x56dfb3.message) {
        console.log(_0x56dfb3.message);
      } else {
        console.log(_0x1723ee.ret[0]);
      }
      return null;
    }
  }
}
(async function _0x1f3fe2() {
  const _0xbb1015 = process.env.ELE_CARME;
  await validateCarmeWithType(_0xbb1015, 1);
  const _0x29805f = await getEnvsByName("elmck");
  for (let _0x4b02a3 = 0; _0x4b02a3 < _0x29805f.length; _0x4b02a3++) {
    let _0x55e0ac = _0x29805f[_0x4b02a3].value;
    if (!_0x55e0ac) {
      console.log(" ❌无效用户信息, 请重新获取ck");
    } else {
      try {
        var _0x108a11 = 0;
        if (_0x29805f[_0x4b02a3]._id) {
          _0x108a11 = _0x29805f[_0x4b02a3]._id;
        }
        if (_0x29805f[_0x4b02a3].id) {
          _0x108a11 = _0x29805f[_0x4b02a3].id;
        }
        _0x55e0ac = _0x55e0ac.replace(/\s/g, "");
        let _0x36f4c6 = await checkCk(_0x55e0ac, _0x4b02a3);
        if (!_0x36f4c6) {
          let _0x2b2e4a = await _0x179175(_0x29805f[_0x4b02a3], _0x55e0ac);
          if (_0x2b2e4a && _0x2b2e4a.indexOf("刷新成功") !== -1) {
            await EnableCk(_0x108a11);
            console.log("第", _0x4b02a3 + 1, "账号正常😁\n");
          } else {
            const _0x4fe156 = await DisableCk(_0x108a11);
            if (_0x4fe156.code === 200) {
              console.log("第", _0x4b02a3 + 1, "账号失效！已🈲用");
            } else {
              console.log("第", _0x4b02a3 + 1, "账号失效！请重新登录！！！😭");
            }
            await invalidCookieNotify(_0x55e0ac, _0x29805f[_0x4b02a3].remarks);
          }
        } else {
          let _0x305e95 = await getUserInfo(_0x55e0ac);
          if (!_0x305e95.username) {
            let _0x21bffb = await _0x179175(_0x29805f[_0x4b02a3], _0x55e0ac);
            if (_0x21bffb && _0x21bffb.indexOf("刷新成功") !== -1) {
              await EnableCk(_0x108a11);
              console.log("第", _0x4b02a3 + 1, "账号正常😁\n");
            } else {
              const _0x54a0b8 = await DisableCk(_0x108a11);
              if (_0x54a0b8.code === 200) {
                console.log("第", _0x4b02a3 + 1, "账号失效！已🈲用");
              } else {
                console.log("第", _0x4b02a3 + 1, "账号失效！请重新登录！！！😭");
              }
            }
            await invalidCookieNotify(_0x55e0ac, _0x29805f[_0x4b02a3].remarks);
          } else {
            await _0x179175(_0x29805f[_0x4b02a3], _0x55e0ac, getCookieMap(_0x55e0ac).get("SID"));
            await EnableCk(_0x108a11);
            console.log("第", _0x4b02a3 + 1, "账号正常🎉🎉\n");
          }
        }
      } catch (_0xaa7585) {
        console.log(_0xaa7585);
      }
    }
    await wait(_0x543ec4(2, 3));
  }
  process.exit(0);
})();