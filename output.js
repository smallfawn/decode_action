//Thu Aug 08 2024 14:43:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("书路阅读");
let envSplitor = ["@", "\n"],
  result,
  resurq,
  resurp,
  userList = [],
  usid = 0,
  userCount = 0,
  OooOo = "sluid",
  userCookie = ($.isNode() ? process.env[OooOo] : $.getdata(OooOo)) || "",
  qd = [...Array(5)].map((_0x4c808f, _0x4014a0) => _0x4014a0 + 1),
  rt = [5, 10, 30, 60, 120, 180];
class UserInfo {
  constructor(_0x18c3e2) {
    this._ = ++usid;
    this.f = "账号 [" + this._ + "] ";
    this.ck = _0x18c3e2;
    this.h = {
      Host: "read.beijzc.com",
      Origin: "https://app.beijzc.com",
      Referer: "https://app.beijzc.com/",
      "Content-Type": "application/json",
      appId: "com.beijzc.BookRoad",
      userId: "" + this.ck
    };
  }
  async task() {
    console.log("蛋炒饭美食交流频道：https://t.me/+s7DXGAezpNhjOGU1");
    await this.signin();
    await this.signinvideo();
    await this.welfare();
    await this.box();
    for (let _0x11429d of qd) {
      await this.readtime();
    }
    for (let _0x3657da of rt) {
      this.b = _0x3657da;
      await this.timerewards();
    }
  }
  async signin() {
    this.data = "{\"userId\":" + this.ck + ",\"productType\":2}";
    await httpRequest("post", popu("https://read.beijzc.com/book/task/v2/finishSignup", this.h, this.data));
    result.code == 0 && console.log(this.f + "签到: " + result.msg);
  }
  async signinvideo() {
    this.ts = Math.round(new Date().getTime()).toString();
    this.data = "{\"userId\":" + this.ck + ",\"productType\":2}";
    await httpRequest("post", popu("https://read.beijzc.com/book/task/signupWatchVideo?timestamp=" + this.ts, this.h, this.data));
    result.code == 0 && console.log(this.f + "签到视频: " + result.msg);
  }
  async welfare() {
    this.ts = Math.round(new Date().getTime()).toString();
    this.data = "{\"userId\":" + this.ck + ",\"productType\":2}";
    await httpRequest("post", popu("https://read.beijzc.com/config/v2/welfare?timestamp=" + this.ts, this.h, this.data));
    for (let _0x48f9e8 of result.data.taskList) {
      this.id = _0x48f9e8.id;
      this.idname = _0x48f9e8.title;
      this.bookid = _0x48f9e8.params.bookId;
      await this.finishtask();
      await this.moreGold();
      await this.finishtask80();
    }
  }
  async finishtask() {
    this.ts = Math.round(new Date().getTime()).toString();
    this.data = "{\"id\":\"" + this.id + "\",\"userId\":" + this.ck + ",\"productType\":2}";
    await httpRequest("post", popu("https://read.beijzc.com/book/task/finishTask?timestamp=" + this.ts, this.h, this.data));
    result.code == 0 && console.log(this.f + "完成【" + this.idname + "】: " + result.msg);
    await $.wait(5000);
  }
  async finishtask80() {
    this.ts = Math.round(new Date().getTime()).toString();
    this.data = "{\"id\":\"80\",\"bookId\":" + this.bookid + ",\"userId\":" + this.ck + ",\"productType\":2}";
    await httpRequest("post", popu("https://read.beijzc.com/book/task/finishTask?timestamp=" + this.ts, this.h, this.data));
    result.code == 0 && console.log(this.f + "完成【" + this.idname + "】: " + result.msg);
    await $.wait(5000);
  }
  async moreGold() {
    this.ts = Math.round(new Date().getTime()).toString();
    this.data = "{\"id\":\"" + this.id + "\",\"userId\":" + this.ck + ",\"productType\":2}";
    await httpRequest("post", popu("https://read.beijzc.com/book/task/moreGold?timestamp=" + this.ts, this.h, this.data));
    result.code == 0 && console.log(this.f + "翻倍【" + this.idname + "】: " + result.msg);
    await $.wait(5000);
  }
  async box() {
    this.ts = Math.round(new Date().getTime()).toString();
    this.data = "{\"id\":\"23\",\"userId\":" + this.ck + ",\"productType\":2}";
    await httpRequest("post", popu("https://read.beijzc.com/book/task/finishTask?timestamp=" + this.ts, this.h, this.data));
    result.code == 0 && console.log(this.f + "完成【开宝箱】: " + result.msg);
    await $.wait(3000);
    await this.boxmoreGold();
  }
  async boxmoreGold() {
    this.ts = Math.round(new Date().getTime()).toString();
    this.data = "{\"id\":\"23\",\"userId\":" + this.ck + ",\"productType\":2}";
    await httpRequest("post", popu("https://read.beijzc.com/book/task/moreGold?timestamp=" + this.ts, this.h, this.data));
    result.code == 0 && console.log(this.f + "翻倍【开宝箱】: " + result.msg);
    await $.wait(3000);
  }
  async readtime() {
    this.sj = randomsz(16);
    this.ts = Math.round(new Date().getTime()).toString();
    this.data = "{\"taskType\":2,\"deviceId\":\"" + this.sj + "\",\"userId\":" + this.ck + ",\"productType\":2}";
    await httpRequest("post", popu("https://read.beijzc.com/v2/book/task/shulu/finishReadTask?timestamp=" + this.ts, this.h, this.data));
    console.log(this.f + "上传阅读时长: " + result.msg);
    await $.wait(10000);
  }
  async timerewards() {
    this.ts = Math.round(new Date().getTime()).toString();
    this.data = "{\"userId\":" + this.ck + ",\"productType\":2,\"taskType\":2,\"readingMinutes\":" + this.b + "}";
    await httpRequest("post", popu("https://read.beijzc.com/manual/getRewards", this.h, this.data));
    result.code == 0 && console.log(this.f + "领取阅读时长: " + result.msg);
    await $.wait(10000);
  }
}
!(async () => {
  if (!(await checkEnv())) {
    return;
  }
  for (let _0x528957 of userList) await _0x528957.task();
})().catch(_0x5c7fbd => console.log(_0x5c7fbd)).finally(() => $.done());
function encrypt(_0x3f2291) {
  return CryptoJS.AES.encrypt(_0x3f2291, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  }).toString();
}
function decrypt(_0x1569d6) {
  return CryptoJS.AES.decrypt(_0x1569d6, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding
  }).toString(CryptoJS.enc.Utf8);
}
function rand(_0x1872b4, _0x45a029) {
  return parseInt(Math.random() * (_0x45a029 - _0x1872b4 + 1) + _0x1872b4, 10);
}
function MD5Encrypt(_0x482e6e) {
  function _0x45b111(_0x5eb58c, _0x53a832) {
    return _0x5eb58c << _0x53a832 | _0x5eb58c >>> 32 - _0x53a832;
  }
  function _0x25fbd0(_0x30826d, _0x495a00) {
    var _0x210beb, _0x13dc2b, _0x3eb2ba, _0x810504, _0x2a2a5c;
    _0x3eb2ba = 2147483648 & _0x30826d;
    _0x810504 = 2147483648 & _0x495a00;
    _0x210beb = 1073741824 & _0x30826d;
    _0x13dc2b = 1073741824 & _0x495a00;
    _0x2a2a5c = (1073741823 & _0x30826d) + (1073741823 & _0x495a00);
    return _0x210beb & _0x13dc2b ? 2147483648 ^ _0x2a2a5c ^ _0x3eb2ba ^ _0x810504 : _0x210beb | _0x13dc2b ? 1073741824 & _0x2a2a5c ? 3221225472 ^ _0x2a2a5c ^ _0x3eb2ba ^ _0x810504 : 1073741824 ^ _0x2a2a5c ^ _0x3eb2ba ^ _0x810504 : _0x2a2a5c ^ _0x3eb2ba ^ _0x810504;
  }
  function _0x2c788d(_0x918a94, _0x351b6f, _0xc9c541, _0x41c04a, _0x1df585, _0x3647dd, _0x258f2a) {
    var _0x2a5603, _0x3d4d5f;
    _0x918a94 = _0x25fbd0(_0x918a94, _0x25fbd0(_0x25fbd0((_0x2a5603 = _0x351b6f) & (_0x3d4d5f = _0xc9c541) | ~_0x2a5603 & _0x41c04a, _0x1df585), _0x258f2a));
    return _0x25fbd0(_0x45b111(_0x918a94, _0x3647dd), _0x351b6f);
  }
  function _0x3dc5c8(_0x1737f9, _0xeaad92, _0x20acbc, _0x353223, _0x35588e, _0x1b6a06, _0x2f32fb) {
    var _0x1e0c52, _0x967ce6, _0x4b0ecc;
    _0x1737f9 = _0x25fbd0(_0x1737f9, _0x25fbd0(_0x25fbd0((_0x1e0c52 = _0xeaad92, _0x967ce6 = _0x20acbc, _0x1e0c52 & (_0x4b0ecc = _0x353223) | _0x967ce6 & ~_0x4b0ecc), _0x35588e), _0x2f32fb));
    return _0x25fbd0(_0x45b111(_0x1737f9, _0x1b6a06), _0xeaad92);
  }
  function _0x21f7aa(_0x4bd972, _0x427212, _0x351a6c, _0x4c919b, _0x4d2537, _0x4868a4, _0x300bd9) {
    var _0x5baa96, _0x37eddf;
    _0x4bd972 = _0x25fbd0(_0x4bd972, _0x25fbd0(_0x25fbd0((_0x5baa96 = _0x427212) ^ (_0x37eddf = _0x351a6c) ^ _0x4c919b, _0x4d2537), _0x300bd9));
    return _0x25fbd0(_0x45b111(_0x4bd972, _0x4868a4), _0x427212);
  }
  function _0x43da66(_0x5852c4, _0x227f55, _0x51d3b6, _0x4ca60d, _0x4c763b, _0x20ffb5, _0x2b584a) {
    var _0x2a6bb7, _0x16ba86;
    _0x5852c4 = _0x25fbd0(_0x5852c4, _0x25fbd0(_0x25fbd0((_0x2a6bb7 = _0x227f55, (_0x16ba86 = _0x51d3b6) ^ (_0x2a6bb7 | ~_0x4ca60d)), _0x4c763b), _0x2b584a));
    return _0x25fbd0(_0x45b111(_0x5852c4, _0x20ffb5), _0x227f55);
  }
  function _0x436fb3(_0x1ccca6) {
    var _0x332fd4,
      _0x1d067b = "",
      _0x2ea4a3 = "";
    for (_0x332fd4 = 0; 3 >= _0x332fd4; _0x332fd4++) {
      _0x1d067b += (_0x2ea4a3 = "0" + (_0x1ccca6 >>> 8 * _0x332fd4 & 255).toString(16)).substr(_0x2ea4a3.length - 2, 2);
    }
    return _0x1d067b;
  }
  var _0x5b0f99,
    _0xc42608,
    _0x13e329,
    _0x3a71fb,
    _0x47c056,
    _0x4e85a8,
    _0x680c3e,
    _0x22b191,
    _0x2a9d2e,
    _0x2b8117 = [];
  for (_0x2b8117 = function (_0x31df9b) {
    for (var _0x3f65a3, _0x186b46 = _0x31df9b.length, _0x1d30b7 = _0x186b46 + 8, _0x534b88 = 16 * ((_0x1d30b7 - _0x1d30b7 % 64) / 64 + 1), _0x50356f = Array(_0x534b88 - 1), _0x33eb8b = 0, _0x1a0942 = 0; _0x186b46 > _0x1a0942;) {
      _0x3f65a3 = (_0x1a0942 - _0x1a0942 % 4) / 4;
      _0x33eb8b = _0x1a0942 % 4 * 8;
      _0x50356f[_0x3f65a3] = _0x50356f[_0x3f65a3] | _0x31df9b.charCodeAt(_0x1a0942) << _0x33eb8b;
      _0x1a0942++;
    }
    _0x3f65a3 = (_0x1a0942 - _0x1a0942 % 4) / 4;
    _0x33eb8b = _0x1a0942 % 4 * 8;
    _0x50356f[_0x3f65a3] = _0x50356f[_0x3f65a3] | 128 << _0x33eb8b;
    _0x50356f[_0x534b88 - 2] = _0x186b46 << 3;
    _0x50356f[_0x534b88 - 1] = _0x186b46 >>> 29;
    return _0x50356f;
  }(_0x482e6e = function (_0x3729e0) {
    _0x3729e0 = _0x3729e0.replace(/\r\n/g, "\n");
    for (var _0x6828a5 = "", _0x1b5f17 = 0; _0x1b5f17 < _0x3729e0.length; _0x1b5f17++) {
      var _0x5361ea = _0x3729e0.charCodeAt(_0x1b5f17);
      128 > _0x5361ea ? _0x6828a5 += String.fromCharCode(_0x5361ea) : _0x5361ea > 127 && 2048 > _0x5361ea ? (_0x6828a5 += String.fromCharCode(_0x5361ea >> 6 | 192), _0x6828a5 += String.fromCharCode(63 & _0x5361ea | 128)) : (_0x6828a5 += String.fromCharCode(_0x5361ea >> 12 | 224), _0x6828a5 += String.fromCharCode(_0x5361ea >> 6 & 63 | 128), _0x6828a5 += String.fromCharCode(63 & _0x5361ea | 128));
    }
    return _0x6828a5;
  }(_0x482e6e)), _0x4e85a8 = 1732584193, _0x680c3e = 4023233417, _0x22b191 = 2562383102, _0x2a9d2e = 271733878, _0x5b0f99 = 0; _0x5b0f99 < _0x2b8117.length; _0x5b0f99 += 16) {
    _0xc42608 = _0x4e85a8;
    _0x13e329 = _0x680c3e;
    _0x3a71fb = _0x22b191;
    _0x47c056 = _0x2a9d2e;
    _0x4e85a8 = _0x2c788d(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 0], 7, 3614090360);
    _0x2a9d2e = _0x2c788d(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 1], 12, 3905402710);
    _0x22b191 = _0x2c788d(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 2], 17, 606105819);
    _0x680c3e = _0x2c788d(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 3], 22, 3250441966);
    _0x4e85a8 = _0x2c788d(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 4], 7, 4118548399);
    _0x2a9d2e = _0x2c788d(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 5], 12, 1200080426);
    _0x22b191 = _0x2c788d(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 6], 17, 2821735955);
    _0x680c3e = _0x2c788d(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 7], 22, 4249261313);
    _0x4e85a8 = _0x2c788d(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 8], 7, 1770035416);
    _0x2a9d2e = _0x2c788d(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 9], 12, 2336552879);
    _0x22b191 = _0x2c788d(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 10], 17, 4294925233);
    _0x680c3e = _0x2c788d(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 11], 22, 2304563134);
    _0x4e85a8 = _0x2c788d(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 12], 7, 1804603682);
    _0x2a9d2e = _0x2c788d(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 13], 12, 4254626195);
    _0x22b191 = _0x2c788d(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 14], 17, 2792965006);
    _0x680c3e = _0x2c788d(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 15], 22, 1236535329);
    _0x4e85a8 = _0x3dc5c8(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 1], 5, 4129170786);
    _0x2a9d2e = _0x3dc5c8(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 6], 9, 3225465664);
    _0x22b191 = _0x3dc5c8(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 11], 14, 643717713);
    _0x680c3e = _0x3dc5c8(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 0], 20, 3921069994);
    _0x4e85a8 = _0x3dc5c8(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 5], 5, 3593408605);
    _0x2a9d2e = _0x3dc5c8(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 10], 9, 38016083);
    _0x22b191 = _0x3dc5c8(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 15], 14, 3634488961);
    _0x680c3e = _0x3dc5c8(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 4], 20, 3889429448);
    _0x4e85a8 = _0x3dc5c8(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 9], 5, 568446438);
    _0x2a9d2e = _0x3dc5c8(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 14], 9, 3275163606);
    _0x22b191 = _0x3dc5c8(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 3], 14, 4107603335);
    _0x680c3e = _0x3dc5c8(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 8], 20, 1163531501);
    _0x4e85a8 = _0x3dc5c8(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 13], 5, 2850285829);
    _0x2a9d2e = _0x3dc5c8(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 2], 9, 4243563512);
    _0x22b191 = _0x3dc5c8(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 7], 14, 1735328473);
    _0x680c3e = _0x3dc5c8(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 12], 20, 2368359562);
    _0x4e85a8 = _0x21f7aa(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 5], 4, 4294588738);
    _0x2a9d2e = _0x21f7aa(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 8], 11, 2272392833);
    _0x22b191 = _0x21f7aa(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 11], 16, 1839030562);
    _0x680c3e = _0x21f7aa(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 14], 23, 4259657740);
    _0x4e85a8 = _0x21f7aa(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 1], 4, 2763975236);
    _0x2a9d2e = _0x21f7aa(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 4], 11, 1272893353);
    _0x22b191 = _0x21f7aa(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 7], 16, 4139469664);
    _0x680c3e = _0x21f7aa(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 10], 23, 3200236656);
    _0x4e85a8 = _0x21f7aa(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 13], 4, 681279174);
    _0x2a9d2e = _0x21f7aa(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 0], 11, 3936430074);
    _0x22b191 = _0x21f7aa(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 3], 16, 3572445317);
    _0x680c3e = _0x21f7aa(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 6], 23, 76029189);
    _0x4e85a8 = _0x21f7aa(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 9], 4, 3654602809);
    _0x2a9d2e = _0x21f7aa(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 12], 11, 3873151461);
    _0x22b191 = _0x21f7aa(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 15], 16, 530742520);
    _0x680c3e = _0x21f7aa(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 2], 23, 3299628645);
    _0x4e85a8 = _0x43da66(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 0], 6, 4096336452);
    _0x2a9d2e = _0x43da66(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 7], 10, 1126891415);
    _0x22b191 = _0x43da66(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 14], 15, 2878612391);
    _0x680c3e = _0x43da66(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 5], 21, 4237533241);
    _0x4e85a8 = _0x43da66(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 12], 6, 1700485571);
    _0x2a9d2e = _0x43da66(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 3], 10, 2399980690);
    _0x22b191 = _0x43da66(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 10], 15, 4293915773);
    _0x680c3e = _0x43da66(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 1], 21, 2240044497);
    _0x4e85a8 = _0x43da66(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 8], 6, 1873313359);
    _0x2a9d2e = _0x43da66(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 15], 10, 4264355552);
    _0x22b191 = _0x43da66(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 6], 15, 2734768916);
    _0x680c3e = _0x43da66(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 13], 21, 1309151649);
    _0x4e85a8 = _0x43da66(_0x4e85a8, _0x680c3e, _0x22b191, _0x2a9d2e, _0x2b8117[_0x5b0f99 + 4], 6, 4149444226);
    _0x2a9d2e = _0x43da66(_0x2a9d2e, _0x4e85a8, _0x680c3e, _0x22b191, _0x2b8117[_0x5b0f99 + 11], 10, 3174756917);
    _0x22b191 = _0x43da66(_0x22b191, _0x2a9d2e, _0x4e85a8, _0x680c3e, _0x2b8117[_0x5b0f99 + 2], 15, 718787259);
    _0x680c3e = _0x43da66(_0x680c3e, _0x22b191, _0x2a9d2e, _0x4e85a8, _0x2b8117[_0x5b0f99 + 9], 21, 3951481745);
    _0x4e85a8 = _0x25fbd0(_0x4e85a8, _0xc42608);
    _0x680c3e = _0x25fbd0(_0x680c3e, _0x13e329);
    _0x22b191 = _0x25fbd0(_0x22b191, _0x3a71fb);
    _0x2a9d2e = _0x25fbd0(_0x2a9d2e, _0x47c056);
  }
  return (_0x436fb3(_0x4e85a8) + _0x436fb3(_0x680c3e) + _0x436fb3(_0x22b191) + _0x436fb3(_0x2a9d2e)).toLowerCase();
}
async function checkEnv() {
  if (userCookie) {
    let _0x3f3e45 = envSplitor[0];
    for (let _0x11d2f of envSplitor) if (userCookie.indexOf(_0x11d2f) > -1) {
      _0x3f3e45 = _0x11d2f;
      break;
    }
    for (let _0x2c91ea of userCookie.split(_0x3f3e45)) _0x2c91ea && userList.push(new UserInfo(_0x2c91ea));
    userCount = userList.length;
  } else {
    console.log("未找到任何账号");
  }
  console.log("找到 " + userCount + "个账号");
  return !0;
}
function popu(_0x13ff5c, _0x317e0d, _0x1d8cd6 = "") {
  _0x13ff5c.replace("//", "/").split("/")[1];
  let _0x1e9773 = {
    url: _0x13ff5c,
    headers: _0x317e0d,
    timeout: 12000,
    body: _0x1d8cd6
  };
  _0x1d8cd6 && (_0x1e9773.headers["Content-Length"] = _0x1d8cd6?.["length"] || 0);
  return _0x1e9773;
}
async function httpRequest(_0x666a10, _0x2d4352) {
  result = null;
  resurq = null;
  resurp = null;
  return new Promise(_0x370ba0 => {
    $.send(_0x666a10, _0x2d4352, async (_0x259f21, _0x2e7894, _0x1fcd43) => {
      try {
        if (!(resurq = _0x2e7894, resurp = _0x1fcd43, _0x259f21)) {
          if (_0x1fcd43.body) {
            if ("object" == typeof _0x1fcd43.body) {
              result = _0x1fcd43.body;
            } else {
              try {
                result = JSON.parse(_0x1fcd43.body);
              } catch (_0x52926c) {
                result = _0x1fcd43.body;
              }
            }
          }
        }
      } catch (_0x571bf9) {
        console.log(_0x571bf9);
      } finally {
        _0x370ba0();
      }
    });
  });
}
function randomsz(_0x418fab) {
  _0x418fab = _0x418fab || 32;
  var _0x30f13a = "abcdefghijklmnopqrstuvwxyz1234567890",
    _0x473eb8 = _0x30f13a.length,
    _0x3db602 = "";
  for (i = 0; i < _0x418fab; i++) {
    _0x3db602 += _0x30f13a.charAt(Math.floor(Math.random() * _0x473eb8));
  }
  return _0x3db602;
}
function encryptrsa(_0x4caf08, _0x4cccf8) {
  let _0xab0ec9 = new NodeRSA("-----BEGIN PUBLIC KEY-----\n" + _0x4cccf8 + "\n-----END PUBLIC KEY-----");
  _0xab0ec9.setOptions({
    encryptionScheme: "pkcs1"
  });
  let _0xeac807 = _0xab0ec9.encrypt(_0x4caf08, "base64", "utf8");
  return _0xeac807;
}
function Env(_0x4a9178, _0x10be62) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x5c042b, _0x38bcbe) {
      this.name = _0x5c042b;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x38bcbe);
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
    getdata(_0x960529) {
      let _0x4393fa = this.getval(_0x960529);
      if (/^@/.test(_0x960529)) {
        let [, _0x3a559e, _0x337327] = /^@(.*?)\.(.*?)$/.exec(_0x960529),
          _0x19c43b = _0x3a559e ? this.getval(_0x3a559e) : "";
        if (_0x19c43b) {
          try {
            let _0x2080e4 = JSON.parse(_0x19c43b);
            _0x4393fa = _0x2080e4 ? this.lodash_get(_0x2080e4, _0x337327, "") : _0x4393fa;
          } catch (_0xee7e0f) {
            _0x4393fa = "";
          }
        }
      }
      return _0x4393fa;
    }
    setdata(_0x426c4e, _0x4efc1d) {
      let _0x50bf58 = !1;
      if (/^@/.test(_0x4efc1d)) {
        let [, _0x1df59f, _0x4abcc7] = /^@(.*?)\.(.*?)$/.exec(_0x4efc1d),
          _0x5297cb = this.getval(_0x1df59f);
        try {
          let _0x2ae708 = JSON.parse(_0x1df59f ? "null" === _0x5297cb ? null : _0x5297cb || "{}" : "{}");
          this.lodash_set(_0x2ae708, _0x4abcc7, _0x426c4e);
          _0x50bf58 = this.setval(JSON.stringify(_0x2ae708), _0x1df59f);
        } catch (_0x59e84b) {
          let _0x22ecef = {};
          this.lodash_set(_0x22ecef, _0x4abcc7, _0x426c4e);
          _0x50bf58 = this.setval(JSON.stringify(_0x22ecef), _0x1df59f);
        }
      } else {
        _0x50bf58 = this.setval(_0x426c4e, _0x4efc1d);
      }
      return _0x50bf58;
    }
    getval(_0x1a3d6d) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x1a3d6d) : this.isQuanX() ? $prefs.valueForKey(_0x1a3d6d) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1a3d6d]) : this.data && this.data[_0x1a3d6d] || null;
    }
    setval(_0x47a56f, _0x210211) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x47a56f, _0x210211) : this.isQuanX() ? $prefs.setValueForKey(_0x47a56f, _0x210211) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x210211] = _0x47a56f, this.writedata(), !0) : this.data && this.data[_0x210211] || null;
    }
    send(_0x12f949, _0x8fcfd2, _0xae6aa4 = () => {}) {
      if ("get" != _0x12f949 && "post" != _0x12f949 && "put" != _0x12f949 && "delete" != _0x12f949) {
        console.log("无效的http方法：" + _0x12f949);
        return;
      }
      if ("get" == _0x12f949 && _0x8fcfd2.headers ? (delete _0x8fcfd2.headers["Content-Type"], delete _0x8fcfd2.headers["Content-Length"]) : _0x8fcfd2.body && _0x8fcfd2.headers && (_0x8fcfd2.headers["Content-Type"] || (_0x8fcfd2.headers["Content-Type"] = "application/x-www-form-urlencoded")), this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x8fcfd2.headers = _0x8fcfd2.headers || {}, Object.assign(_0x8fcfd2.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        let _0x57a072 = {
          method: _0x12f949,
          url: _0x8fcfd2.url,
          headers: _0x8fcfd2.headers,
          timeout: _0x8fcfd2.timeout,
          data: _0x8fcfd2.body
        };
        "get" == _0x12f949 && delete _0x57a072.data;
        $axios(_0x57a072).then(_0xa2639e => {
          let {
            status: _0x590766,
            request: _0x19f121,
            headers: _0x97d615,
            data: _0x580186
          } = _0xa2639e;
          _0xae6aa4(null, _0x19f121, {
            statusCode: _0x590766,
            headers: _0x97d615,
            body: _0x580186
          });
        }).catch(_0x4db8b5 => console.log(_0x4db8b5));
      } else {
        if (this.isQuanX()) {
          _0x8fcfd2.method = _0x12f949.toUpperCase();
          this.isNeedRewrite && (_0x8fcfd2.opts = _0x8fcfd2.opts || {}, Object.assign(_0x8fcfd2.opts, {
            hints: !1
          }));
          $task.fetch(_0x8fcfd2).then(_0x3018d4 => {
            let {
              statusCode: _0x438f7a,
              request: _0x24f224,
              headers: _0x2ff17a,
              body: _0x1f0f03
            } = _0x3018d4;
            _0xae6aa4(null, _0x24f224, {
              statusCode: _0x438f7a,
              headers: _0x2ff17a,
              body: _0x1f0f03
            });
          }, _0x645254 => _0xae6aa4(_0x645254));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            let {
              url: _0x2e96a2,
              ..._0x1c274b
            } = _0x8fcfd2;
            this.instance = this.got.extend({
              followRedirect: !1
            });
            this.instance[_0x12f949](_0x2e96a2, _0x1c274b).then(_0x38f4cb => {
              let {
                statusCode: _0x471cbe,
                request: _0xc54beb,
                headers: _0x35d302,
                body: _0x2db1f6
              } = _0x38f4cb;
              _0xae6aa4(null, _0xc54beb, {
                statusCode: _0x471cbe,
                headers: _0x35d302,
                body: _0x2db1f6
              });
            }, _0x554cf7 => {
              let {
                message: _0x2ac5e5,
                response: _0xdb9c15
              } = _0x554cf7;
              _0xae6aa4(_0x2ac5e5, _0xdb9c15, _0xdb9c15 && _0xdb9c15.body);
            });
          }
        }
      }
    }
    time(_0x1ad8a6) {
      let _0x15924e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      for (let _0x32a148 in /(y+)/.test(_0x1ad8a6) && (_0x1ad8a6 = _0x1ad8a6.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length))), _0x15924e) RegExp("(" + _0x32a148 + ")").test(_0x1ad8a6) && (_0x1ad8a6 = _0x1ad8a6.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x15924e[_0x32a148] : ("00" + _0x15924e[_0x32a148]).substr(("" + _0x15924e[_0x32a148]).length)));
      return _0x1ad8a6;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x48774e = this.name + " 运行通知\n\n" + this.notifyStr;
      if ($.isNode()) {
        var _0x51e281 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x51e281.sendNotify(this.name, _0x48774e);
      } else {
        this.msg(_0x48774e);
      }
    }
    logAndNotify(_0x42ad47) {
      console.log(_0x42ad47);
      this.notifyStr += _0x42ad47;
      this.notifyStr += "\n";
    }
    msg(_0xe2c761 = t, _0x599a35 = "", _0x3b2a3e = "", _0xbf8f04) {
      let _0x2c6d34 = _0x40d6b6 => {
        if (!_0x40d6b6) {
          return _0x40d6b6;
        }
        if ("string" == typeof _0x40d6b6) {
          return this.isLoon() ? _0x40d6b6 : this.isQuanX() ? {
            "open-url": _0x40d6b6
          } : this.isSurge() ? {
            url: _0x40d6b6
          } : void 0;
        }
        if ("object" == typeof _0x40d6b6) {
          if (this.isLoon()) {
            return {
              openUrl: _0x40d6b6.openUrl || _0x40d6b6.url || _0x40d6b6["open-url"],
              mediaUrl: _0x40d6b6.mediaUrl || _0x40d6b6["media-url"]
            };
          }
          if (this.isQuanX()) {
            return {
              "open-url": _0x40d6b6["open-url"] || _0x40d6b6.url || _0x40d6b6.openUrl,
              "media-url": _0x40d6b6["media-url"] || _0x40d6b6.mediaUrl
            };
          }
          if (this.isSurge()) {
            return {
              url: _0x40d6b6.url || _0x40d6b6.openUrl || _0x40d6b6["open-url"]
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0xe2c761, _0x599a35, _0x3b2a3e, _0x2c6d34(_0xbf8f04)) : this.isQuanX() && $notify(_0xe2c761, _0x599a35, _0x3b2a3e, _0x2c6d34(_0xbf8f04)));
      let _0x3cbd3a = ["", "============== 系统通知 =============="];
      _0x3cbd3a.push(_0xe2c761);
      _0x599a35 && _0x3cbd3a.push(_0x599a35);
      _0x3b2a3e && _0x3cbd3a.push(_0x3b2a3e);
      console.log(_0x3cbd3a.join("\n"));
    }
    getMin(_0x2c258a, _0x507388) {
      return _0x2c258a < _0x507388 ? _0x2c258a : _0x507388;
    }
    getMax(_0x595724, _0x3e9992) {
      return _0x595724 < _0x3e9992 ? _0x3e9992 : _0x595724;
    }
    padStr(_0x2525e8, _0x9569c8, _0xef7044 = "0") {
      let _0x109087 = String(_0x2525e8),
        _0x42e270 = _0x9569c8 > _0x109087.length ? _0x9569c8 - _0x109087.length : 0,
        _0x4043cc = "";
      for (let _0x1c32f8 = 0; _0x1c32f8 < _0x42e270; _0x1c32f8++) {
        _0x4043cc += _0xef7044;
      }
      return _0x4043cc + _0x109087;
    }
    json2str(_0x3fb634, _0x519cec, _0x13f84c = !1) {
      let _0x5578a8 = [];
      for (let _0x557532 of Object.keys(_0x3fb634).sort()) {
        let _0xf9b784 = _0x3fb634[_0x557532];
        _0xf9b784 && _0x13f84c && (_0xf9b784 = encodeURIComponent(_0xf9b784));
        _0x5578a8.push(_0x557532 + "=" + _0xf9b784);
      }
      return _0x5578a8.join(_0x519cec);
    }
    str2json(_0x202eaf, _0x5d146e = !1) {
      let _0x3b7a19 = {};
      for (let _0x3cbed2 of _0x202eaf.split("#")) {
        if (!_0x3cbed2) {
          continue;
        }
        let _0x3cd0b7 = _0x3cbed2.indexOf("=");
        if (-1 == _0x3cd0b7) {
          continue;
        }
        let _0x1d0e89 = _0x3cbed2.substr(0, _0x3cd0b7),
          _0xed9e6a = _0x3cbed2.substr(_0x3cd0b7 + 1);
        _0x5d146e && (_0xed9e6a = decodeURIComponent(_0xed9e6a));
        _0x3b7a19[_0x1d0e89] = _0xed9e6a;
      }
      return _0x3b7a19;
    }
    randomString(_0x1c6dab, _0x1934e0 = "abcdef0123456789") {
      let _0x414c51 = "";
      for (let _0x555b96 = 0; _0x555b96 < _0x1c6dab; _0x555b96++) {
        _0x414c51 += _0x1934e0.charAt(Math.floor(Math.random() * _0x1934e0.length));
      }
      return _0x414c51;
    }
    randomList(_0x212592) {
      return _0x212592[Math.floor(Math.random() * _0x212592.length)];
    }
    wait(_0x2a534d) {
      return new Promise(_0x166629 => setTimeout(_0x166629, _0x2a534d));
    }
    done(_0x282f0c = {}) {
      let _0x38551b = (new Date().getTime() - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x38551b + " 秒！");
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x282f0c);
    }
  }(_0x4a9178, _0x10be62);
}