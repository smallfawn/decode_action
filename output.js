//Thu Oct 09 2025 11:01:43 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
class ResponseDecoder {
  constructor() {
    this.keyCache = new Map();
    this.cacheExpiry = 3600000;
  }
  extractKeyInfo(_0x29d9a0) {
    try {
      const _0x95dbb5 = _0x29d9a0.length - 16,
        _0x42da13 = Math.floor(_0x95dbb5 / 4),
        _0x518059 = Math.floor((_0x95dbb5 + 8) * 3 / 4),
        _0x2978b0 = _0x29d9a0.substring(_0x42da13, _0x42da13 + 8),
        _0xab9e61 = _0x29d9a0.substring(_0x518059, _0x518059 + 8),
        _0x38c52e = _0x29d9a0.substring(0, _0x42da13) + _0x29d9a0.substring(_0x42da13 + 8, _0x518059) + _0x29d9a0.substring(_0x518059 + 8),
        _0x3483b1 = {
          success: true,
          data: _0x38c52e,
          keyHint: _0x2978b0,
          saltHint: _0xab9e61
        };
      return _0x3483b1;
    } catch (_0x853ec5) {
      const _0x9b58e7 = {
        success: false,
        error: _0x853ec5.message
      };
      return _0x9b58e7;
    }
  }
  reconstructKey(_0x204c30, _0x520953, _0x1e0dda) {
    const _0x409ab8 = _0x204c30 + _0x520953 + _0x1e0dda,
      _0x1c2a79 = this.keyCache.get(_0x409ab8);
    if (_0x1c2a79 && Date.now() < _0x1c2a79.expiry) {
      return _0x1c2a79.key;
    }
    try {
      if (_0x204c30.length !== 8 || _0x520953.length !== 8) {
        return null;
      }
      const _0x5cfc75 = "KDown_" + _0x1e0dda + "_V3",
        _0x2da8a1 = _0x204c30 + _0x520953 + _0x5cfc75,
        _0x5809a7 = _0x204c30 + _0x520953,
        _0x413266 = CryptoJS.PBKDF2(_0x2da8a1, _0x5809a7, {
          keySize: 8,
          iterations: 10000,
          hasher: CryptoJS.algo.SHA256
        });
      this.keyCache.set(_0x409ab8, {
        key: _0x413266,
        expiry: Date.now() + this.cacheExpiry
      });
      return _0x413266;
    } catch (_0x3c2c99) {
      return null;
    }
  }
  base64Decode(_0x157b1e) {
    const _0x332844 = atob(_0x157b1e),
      _0x573243 = new Uint8Array(_0x332844.length);
    for (let _0x342d24 = 0; _0x342d24 < _0x332844.length; _0x342d24++) {
      _0x573243[_0x342d24] = _0x332844.charCodeAt(_0x342d24);
    }
    return _0x573243;
  }
  async decrypt(_0x397110, _0x5e2a6c) {
    try {
      if (!_0x397110.encrypted || !_0x397110.data || !_0x397110.timestamp || !_0x397110.signature) {
        throw new Error("加密响应格式错误");
      }
      const _0x50116a = this.verifySignature(_0x397110);
      if (!_0x50116a) {
        throw new Error("签名验证失败");
      }
      const _0x47b56f = Math.floor(Date.now() / 1000),
        _0x357f18 = _0x5e2a6c || _0x397110.timestamp;
      if (Math.abs(_0x47b56f - _0x357f18) > 300) {
        throw new Error("响应时间戳无效");
      }
      const _0x2c5c77 = this.extractKeyInfo(_0x397110.data);
      if (!_0x2c5c77.success) {
        throw new Error("提取密钥信息失败: " + _0x2c5c77.error);
      }
      const _0xb83f3d = this.reconstructKey(_0x2c5c77.keyHint, _0x2c5c77.saltHint, _0x357f18);
      if (!_0xb83f3d) {
        throw new Error("密钥重构失败");
      }
      const _0x5acc29 = this.base64Decode(_0x2c5c77.data);
      if (_0x5acc29.length < 16) {
        throw new Error("数据长度不足");
      }
      const _0x7d50f7 = _0x5acc29.slice(0, 16),
        _0x17a94f = _0x5acc29.slice(16),
        _0x4a64f7 = CryptoJS.AES.decrypt(CryptoJS.lib.CipherParams.create({
          ciphertext: CryptoJS.lib.WordArray.create(_0x17a94f)
        }), _0xb83f3d, {
          iv: CryptoJS.lib.WordArray.create(_0x7d50f7),
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        }),
        _0x5cae4d = _0x4a64f7.toString(CryptoJS.enc.Utf8);
      if (!_0x5cae4d) {
        throw new Error("解密失败，可能是密钥错误");
      }
      const _0x27029c = JSON.parse(_0x5cae4d),
        _0x354087 = {
          success: true,
          data: _0x27029c
        };
      return _0x354087;
    } catch (_0x4f69ef) {
      const _0x1b9918 = {
        success: false,
        error: _0x4f69ef.message,
        data: null
      };
      return _0x1b9918;
    }
  }
  cleanExpiredCache() {
    const _0x4444a6 = Date.now();
    for (const [_0x10adc1, _0x4241e8] of this.keyCache.entries()) {
      _0x4444a6 >= _0x4241e8.expiry && this.keyCache.delete(_0x10adc1);
    }
  }
}
const responseDecoder = new ResponseDecoder();
setInterval(() => {
  responseDecoder.cleanExpiredCache();
}, 300000);
async function decryptApiResponse(_0x4533ed, _0x482e3e) {
  if (typeof _0x4533ed === "string") {
    try {
      const _0x4f17fb = await decryptAESString(_0x4533ed, _0x482e3e),
        _0x4abd62 = {
          success: true,
          data: _0x4f17fb
        };
      return _0x4abd62;
    } catch (_0x44dc07) {
      return {
        success: false,
        error: "解密失败: " + _0x44dc07.message,
        data: null
      };
    }
  }
  if (_0x4533ed.encrypted && _0x4533ed.data && _0x4533ed.timestamp && _0x4533ed.signature) {
    return await responseDecoder.decrypt(_0x4533ed, _0x482e3e);
  }
  const _0x1778de = {
    success: true,
    data: _0x4533ed
  };
  return _0x1778de;
}
async function decryptAESString(_0x588c4f, _0xc9e5a6) {
  try {
    const _0x10ab17 = responseDecoder.extractKeyInfo(_0x588c4f);
    if (!_0x10ab17.success) {
      throw new Error("提取密钥信息失败: " + _0x10ab17.error);
    }
    const _0x49344b = responseDecoder.reconstructKey(_0x10ab17.keyHint, _0x10ab17.saltHint, _0xc9e5a6);
    if (!_0x49344b) {
      throw new Error("密钥重构失败");
    }
    const _0x11bf93 = responseDecoder.base64Decode(_0x10ab17.data);
    if (_0x11bf93.length < 16) {
      throw new Error("数据格式错误");
    }
    const _0x3021fc = _0x11bf93.slice(0, 16),
      _0x2e64a0 = _0x11bf93.slice(16),
      _0x8eb35a = CryptoJS.AES.decrypt(CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.lib.WordArray.create(_0x2e64a0)
      }), _0x49344b, {
        iv: CryptoJS.lib.WordArray.create(_0x3021fc),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    if (!_0x8eb35a || _0x8eb35a.sigBytes === 0) {
      throw new Error("解密失败 - 解密结果为空");
    }
    let _0x369bf5;
    try {
      _0x369bf5 = _0x8eb35a.toString(CryptoJS.enc.Utf8);
      if (!_0x369bf5) {
        const _0x581c08 = _0x8eb35a.toString(CryptoJS.enc.Latin1);
        _0x369bf5 = decodeURIComponent(escape(_0x581c08));
      }
    } catch (_0x41e152) {
      try {
        const _0x390328 = _0x8eb35a.toString(CryptoJS.enc.Latin1);
        _0x369bf5 = decodeURIComponent(escape(_0x390328));
      } catch (_0x3215ab) {
        throw new Error("解密后数据编码转换失败");
      }
    }
    if (!_0x369bf5) {
      throw new Error("解密失败 - 解密后文本为空");
    }
    const _0x5d196c = JSON.parse(_0x369bf5);
    return _0x5d196c;
  } catch (_0x169d12) {
    throw new Error("解密失败: " + _0x169d12.message);
  }
}
window.ResponseDecoder = ResponseDecoder;
window.decryptApiResponse = decryptApiResponse;