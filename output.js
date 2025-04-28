//Mon Apr 28 2025 09:44:40 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const paopao = function () {
  function _0x7655f(_0x174ab5, _0x2208a1) {
    http.__okhttp__.setMaxRetries(0);
    http.__okhttp__.setTimeout(5000);
    this.event = events.emitter();
    this.debug = false;
    this._lib_version = "v1.13";
    this._protocol = "http";
    this._hosts = ["api3.paojiaoyun.com", "api2.paojiaoyun.com", "api.paojiaoyun.com"];
    this._host = this._hosts[0];
    this._device_id = this.getDeviceID();
    this._retry_count = 9;
    this._switch_count = 0;
    this._app_key = _0x174ab5;
    this._app_secret = _0x2208a1;
    this._card = null;
    this._username = null;
    this._password = null;
    this._token = null;
    this.is_trial = false;
    this.login_result = {
      "card_type": "",
      "expires": "",
      "expires_ts": 0,
      "config": ""
    };
    this._auto_heartbeat = true;
    this._heartbeat_gap = 120000;
    this._heartbeat_task = null;
    this._heartbeat_ret = {
      "code": -9,
      "message": "还未开始验证"
    };
    this._prev_nonce = null;
    this._is_ping = false;
  }
  _0x7655f.prototype.SetBackupHosts = function (_0x5b2f1d) {
    this._hosts.concat(_0x5b2f1d);
  };
  _0x7655f.prototype.switchHost = function () {
    this._switch_count++;
    this._host = this._hosts[this._switch_count % this._hosts.length];
  };
  _0x7655f.prototype.SetCard = function (_0x8fc1f6) {
    {
      this._card = _0x8fc1f6.trim();
    }
  };
  _0x7655f.prototype.SetUser = function (_0x4ce13d, _0x8cec38) {
    this._username = _0x4ce13d.trim();
    this._password = _0x8cec38;
  };
  _0x7655f.prototype.getDeviceID = function () {
    let _0x24a72c = device.serial;
    if (_0x24a72c == null || _0x24a72c == "" || _0x24a72c == "unknown") {
      _0x24a72c = device.getAndroidId();
    }
    if (_0x24a72c == null || _0x24a72c == "" || _0x24a72c == "unknown") {
      _0x24a72c = device.getIMEI();
    }
    return _0x24a72c;
  };
  _0x7655f.prototype.MD5 = function (_0x2dbe36) {
    try {
      {
        let _0x18a013 = java.security.MessageDigest.getInstance("md5");
        let _0x2d79ef = _0x18a013.digest(new java.lang.String(_0x2dbe36).getBytes("UTF-8"));
        let _0x1aadb9 = new java.lang.StringBuffer();
        for (let _0x29306b = 0; _0x29306b < _0x2d79ef.length; _0x29306b++) {
          let _0x249167 = _0x2d79ef[_0x29306b];
          let _0x508955 = _0x249167 & 255;
          let _0x2dbe36 = java.lang.Integer.toHexString(_0x508955);
          if (_0x2dbe36.length == 1) {
            {
              _0x1aadb9.append("0");
            }
          }
          _0x1aadb9.append(_0x2dbe36);
        }
        return _0x1aadb9.toString();
      }
    } catch (_0x503468) {
      alert(_0x503468);
      return "";
    }
  };
  _0x7655f.prototype.getTimestamp = function () {
    try {
      {
        let _0x1a8619 = http.get("http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp");
        let _0x2b8cc4 = _0x1a8619.body.json();
        return Math.floor(_0x2b8cc4.data.t / 1000) - 3;
      }
    } catch (_0x5dc086) {
      try {
        {
          let _0x2e8590 = http.get("https://tptm.hd.mi.com/gettimestamp");
          let _0x2b8cc4 = _0x2e8590.body.string();
          return parseInt(_0x2b8cc4.replace("var servertime=", "")) - 3;
        }
      } catch (_0x515004) {
        return Math.floor(new Date().getTime() / 1000) - 3;
      }
    }
  };
  _0x7655f.prototype._draw_cc_params = function (_0x51857a) {
    {
      if (!_0x51857a) return "";
      start = _0x51857a.indexOf("?");
      if (start < 0) return "";
      end = _0x51857a.indexOf("\";");
      if (end < 0 || end < start) return "";
      return _0x51857a.substring(start, end);
    }
  };
  _0x7655f.prototype.Ping = function () {
    if (this._is_ping) return;
    try {
      let _0x4a4eda = "/v1/ping";
      let _0x39e407 = this._protocol + "://" + this._host + _0x4a4eda;
      let _0x1ea8df = http.get(_0x39e407);
      let _0x5e6434 = _0x1ea8df.body.string();
      if (_0x5e6434 == "Pong") {
        {
          log("服务器连接成功");
          this._is_ping = true;
          return;
        }
      }
      let _0xb2e109 = this._draw_cc_params(_0x5e6434);
      if (_0xb2e109) {
        let _0x2dda1e = http.get(_0x39e407 + _0xb2e109);
        if (_0x2dda1e.body.string() == "Pong") {
          log("服务器连接成功");
          this._is_ping = true;
        }
      } else {
        {
          this.switchHost();
        }
      }
    } catch (_0x58e375) {
      {
        this.switchHost();
      }
    }
  };
  _0x7655f.prototype.genNonce = function () {
    const _0x401db6 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let _0xd7246f = "";
    for (let _0x260af4 = 0; _0x260af4 < 20; _0x260af4++) {
      {
        _0xd7246f += _0x401db6.charAt(Math.round(Math.random() * _0x401db6.length));
      }
    }
    return this.MD5(this.getDeviceID() + this._prev_nonce + new Date().getTime() + _0xd7246f);
  };
  _0x7655f.prototype.joinParams = function (_0x511a35) {
    let _0x4739dd = [];
    for (let _0x1c5ca1 in _0x511a35) {
      _0x4739dd.push(_0x1c5ca1 + "=" + _0x511a35[_0x1c5ca1]);
    }
    _0x4739dd.sort();
    return _0x4739dd.join("&");
  };
  _0x7655f.prototype.CheckRespSign = function (_0x28ff20) {
    {
      if (_0x28ff20.code != 0 && _0x28ff20.nonce === "" && _0x28ff20.sign === "") {
        return _0x28ff20;
      }
      let _0x19a30c = "";
      if (_0x28ff20.result) {
        {
          _0x19a30c = this.joinParams(_0x28ff20.result);
        }
      }
      let _0x40faf3 = _0x28ff20.code + _0x28ff20.message + _0x19a30c + _0x28ff20.nonce + this._app_secret;
      let _0x1db7d6 = this.MD5(_0x40faf3);
      if (_0x1db7d6 === _0x28ff20.sign) {
        if (this._prev_nonce === null) {
          {
            this._prev_nonce = _0x28ff20.nonce;
            return {
              "code": 0,
              "message": "OK"
            };
          }
        } else {
          if (_0x28ff20.nonce > this._prev_nonce) {
            {
              this._prev_nonce = _0x28ff20.nonce;
              return {
                "code": 0,
                "message": "OK"
              };
            }
          } else {
            return {
              "code": -98,
              "message": "CRS:nonce校验失败"
            };
          }
        }
      }
      return {
        "code": -99,
        "message": "CRS:签名校验失败"
      };
    }
  };
  _0x7655f.prototype.retry_fib = function (_0x5be24e) {
    if (_0x5be24e > 9) {
      return 34;
    }
    let _0x484984 = 0;
    let _0x59c880 = 1;
    for (let _0x4a5d5b = 0; _0x4a5d5b < _0x5be24e; _0x4a5d5b++) {
      {
        let _0x774f2 = _0x484984 + _0x59c880;
        _0x484984 = _0x59c880;
        _0x59c880 = _0x774f2;
      }
    }
    return _0x484984;
  };
  _0x7655f.prototype._debug = function (_0x55dee9, _0xd0d37a, _0x10865e) {
    if (this.debug) {}
  };
  _0x7655f.prototype.Request = function (_0x3efa60, _0x6021a3, _0x278790) {
    this.Ping();
    _0x278790.app_key = this._app_key;
    _0x3efa60 = _0x3efa60.toUpperCase();
    let _0x6b16bf = this._retry_count;
    let _0x2fdb89 = 0;
    let _0x36be8e = {
      "code": -1,
      "message": "连接服务器失败"
    };
    do {
      let _0x220b0b = this._protocol + "://" + this._host + _0x6021a3;
      _0x2fdb89++;
      let _0x10308f = this.retry_fib(_0x2fdb89);
      delete _0x278790.sign;
      _0x278790.nonce = this.genNonce();
      _0x278790.timestamp = this.getTimestamp();
      let _0x2e7189 = this.joinParams(_0x278790);
      let _0x19e76c = _0x3efa60 + this._host + _0x6021a3 + _0x2e7189 + this._app_secret;
      let _0x5637c9 = this.MD5(_0x19e76c);
      _0x278790.sign = _0x5637c9;
      let _0x113ca8, _0xf7b456;
      try {
        if (_0x3efa60 === "GET") {
          {
            _0x113ca8 = http.get(_0x220b0b + "?" + _0x2e7189 + "&sign=" + _0x5637c9);
          }
        } else {
          _0x113ca8 = http.post(_0x220b0b, _0x278790);
        }
        _0xf7b456 = _0x113ca8.body.string();
        _0x36be8e = JSON.parse(_0xf7b456);
        this._debug(_0x3efa60 + "-" + _0x6021a3 + ":", _0x278790, _0x36be8e);
        let _0x30c2ec = this.CheckRespSign(_0x36be8e);
        if (_0x30c2ec.code !== 0) {
          {
            return _0x30c2ec;
          }
        } else {
          {
            ddyst.put("ddyu", ddyst.get("ddyu") + "5");
            return _0x36be8e;
          }
        }
      } catch (_0x363033) {
        if (this.debug) {
          {
            log("[*] request error: ", _0x363033, _0x10308f + "s后重试");
          }
        }
        this._debug(_0x3efa60 + "-" + _0x6021a3 + ":", _0x278790, _0xf7b456);
        this.switchHost();
        sleep(_0x10308f * 1000);
      }
    } while (_0x2fdb89 < _0x6b16bf);
    return _0x36be8e;
  };
  _0x7655f.prototype.GetHeartbeatResult = function () {
    return this._heartbeat_ret;
  };
  _0x7655f.prototype.GetTimeRemaining = function () {
    let _0xdab7c2 = this.login_result.expires_ts - this.getTimestamp();
    if (_0xdab7c2 < 0) {
      {
        return 0;
      }
    }
    return _0xdab7c2;
  };
  _0x7655f.prototype.CardLogin = function () {
    {
      if (!this._card) {
        {
          return {
            "code": -4,
            "message": "请先设置卡密"
          };
        }
      }
      let _0x23627f = "POST";
      let _0x297c67 = "/v1/card/login";
      let _0x5f171b = {
        "card": this._card,
        "device_id": this._device_id
      };
      let _0x5e5e5a = this.Request(_0x23627f, _0x297c67, _0x5f171b);
      if (_0x5e5e5a.code == 0) {
        {
          this._token = _0x5e5e5a.result.token;
          this.login_result = _0x5e5e5a.result;
          if (this._auto_heartbeat) {
            ddyst.put("ddyu", ddyst.get("ddyu") + "6");
            this._startCardHeartbeat();
          }
        }
      }
      return _0x5e5e5a;
    }
  };
  _0x7655f.prototype.CardHeartbeat = function () {
    if (!this._token) {
      return {
        "code": -2,
        "message": "请在卡密登录成功后调用"
      };
    }
    let _0x1e5f2c = "POST";
    let _0x39e94a = "/v1/card/heartbeat";
    let _0x4b4016 = {
      "card": this._card,
      "token": this._token
    };
    let _0x5063d9 = this.Request(_0x1e5f2c, _0x39e94a, _0x4b4016);
    if (_0x5063d9.code == 0) {
      this.login_result.expires = _0x5063d9.result.expires;
      this.login_result.expires_ts = _0x5063d9.result.expires_ts;
    }
    return _0x5063d9;
  };
  _0x7655f.prototype._startCardHeartbeat = function () {
    {
      if (this._heartbeat_task) {
        this._heartbeat_task.interrupt();
        this._heartbeat_task = null;
      }
      this._heartbeat_task = threads.start(function () {
        setInterval(function () {}, 10000);
      });
      this._heartbeat_ret = this.CardHeartbeat();
      this._heartbeat_task.setInterval(_0x483075 => {
        _0x483075._heartbeat_ret = _0x483075.CardHeartbeat();
        if (_0x483075._heartbeat_ret.code != 0) {
          _0x483075.event.emit("heartbeat_failed", _0x483075._heartbeat_ret);
        }
      }, this._heartbeat_gap, this);
      this._heartbeat_task.setInterval(_0x3c443e => {
        if (_0x3c443e.GetTimeRemaining() == 0) {
          _0x3c443e.event.emit("heartbeat_failed", {
            "code": 10210,
            "message": "卡密已过期！"
          });
        }
      }, 1000, this);
    }
  };
  _0x7655f.prototype.CardLogout = function () {
    {
      this._heartbeat_ret = {
        "code": -9,
        "message": "还未开始验证"
      };
      if (this._heartbeat_task) {
        {
          this._heartbeat_task.interrupt();
          this._heartbeat_task = null;
        }
      }
      if (!this._token) {
        return {
          "code": 0,
          "message": "OK"
        };
      }
      let _0x2ee7af = "POST";
      let _0xc83338 = "/v1/card/logout";
      let _0x5bca88 = {
        "card": this._card,
        "token": this._token
      };
      let _0x2c2a1a = this.Request(_0x2ee7af, _0xc83338, _0x5bca88);
      this._token = null;
      this.login_result = {
        "card_type": "",
        "expires": "",
        "expires_ts": 0,
        "config": ""
      };
      return _0x2c2a1a;
    }
  };
  return _0x7655f;
}();
let pjysdk = new paopao(ji1, ji2);
_0xodr = "jsjiami.com.v6";