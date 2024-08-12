//Mon Aug 12 2024 23:17:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {
  DataManager.loadDataFile = function (_0x3cf0f0, _0x35a5cc) {
    var _0x3df2b5 = new XMLHttpRequest();
    var _0x173bc7 = "data/" + _0x35a5cc;
    _0x3df2b5.open("GET", _0x173bc7);
    _0x3df2b5.overrideMimeType("application/json");
    _0x3df2b5.onload = function () {
      if (_0x3df2b5.status < 400) {
        window[_0x3cf0f0] = JSON.parse(_0x17845f(_0x3df2b5.responseText, "9897969594939291"));
        DataManager.onLoad(window[_0x3cf0f0]);
      }
    };
    _0x3df2b5.onerror = this._mapLoader || function () {
      DataManager._errorUrl = DataManager._errorUrl || _0x173bc7;
    };
    window[_0x3cf0f0] = null;
    _0x3df2b5.send();
  };
  function _0x1a7c14(_0x4d54e1, _0x4af4cc) {
    var _0x4af4cc = CryptoJS.enc.Utf8.parse(_0x4af4cc);
    var _0x272bd0 = CryptoJS.enc.Utf8.parse(_0x4d54e1);
    var _0xf6c3a0 = CryptoJS.AES.encrypt(_0x272bd0, _0x4af4cc, {
      "mode": CryptoJS.mode.ECB,
      "padding": CryptoJS.pad.Pkcs7
    });
    return _0xf6c3a0.toString();
  }
  function _0x17845f(_0x430f6f, _0x531410) {
    var _0x531410 = CryptoJS.enc.Utf8.parse(_0x531410);
    var _0x17845f = CryptoJS.AES.decrypt(_0x430f6f, _0x531410, {
      "mode": CryptoJS.mode.ECB,
      "padding": CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(_0x17845f).toString(CryptoJS.enc.Utf8);
  }
  Graphics._playVideo = function (_0x2edebd) {
    var _0x2ee5a2 = new XMLHttpRequest();
    _0x2ee5a2.open("GET", _0x2edebd);
    _0x2ee5a2.responseType = "arraybuffer";
    _0x2ee5a2.send();
    _0x2ee5a2.onload = function () {
      if (this.status < 400) {
        var _0x1f6cd7 = new Uint8Array(_0x2ee5a2.response);
        for (i = 0; i < parseInt(_0x1f6cd7.length / 2); i++) {
          var _0x283162;
          switch (i % 9) {
            case 0:
            case 5:
            case 7:
              _0x283162 = 30;
              break;
            case 1:
              _0x283162 = 40;
              break;
            case 2:
              _0x283162 = 50;
              break;
            case 3:
            case 6:
              _0x283162 = 70;
              break;
            case 4:
              _0x283162 = 90;
              break;
            case 8:
              _0x283162 = 80;
              break;
          }
          _0x1f6cd7[i] = _0x283162 ^ _0x1f6cd7[i];
        }
        var _0x3e5039 = Decrypter.createBlobUrl(_0x1f6cd7);
        Graphics._playVideo2(_0x3e5039);
      }
    };
  };
  Decrypter.createBlobUrl = function (_0x569188) {
    var _0xb7ca2a = new Blob([_0x569188]);
    return window.URL.createObjectURL(_0xb7ca2a);
  };
  Graphics._playVideo2 = function (_0x313262) {
    this._video.src = _0x313262;
    this._video.onloadeddata = this._onVideoLoad.bind(this);
    this._video.onerror = this._videoLoader;
    this._video.onended = this._onVideoEnd.bind(this);
    this._video.load();
    this._videoLoading = true;
  };
})(this);
_0xodS = "jsjiami.com.v6";