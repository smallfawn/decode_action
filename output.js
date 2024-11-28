//Thu Nov 28 2024 13:22:41 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function encrypt(_0x13734b) {
  var _0x55badf;
  var _0x52ead8 = CryptoJS.enc.Utf8.parse("1q2w3e4r5t6y7u8i");
  _0x55badf = 2;
  var _0x3bab30 = CryptoJS.enc.Utf8.parse("1234567890111111");
  var _0x4cbaf8;
  var _0x32ab4a = CryptoJS.enc.Utf8.parse(_0x13734b);
  _0x4cbaf8 = 10;
  var _0x401057 = CryptoJS.AES.encrypt(_0x32ab4a, _0x52ead8, {
    iv: _0x3bab30,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return _0x401057.ciphertext.toString();
}
function decrypt(_0x276928) {
  var _0x491fce = CryptoJS.enc.Hex.parse(_0x276928);
  var _0x1011cb = CryptoJS.enc.Base64.stringify(_0x491fce);
  var _0xc2d07b;
  var _0x198b2f = CryptoJS.enc.Utf8.parse("1q2w3e4r5t6y7u8i");
  _0xc2d07b = "oebk";
  var _0x2e318e = CryptoJS.enc.Utf8.parse("1234567890111111");
  var _0x387150 = 2;
  var _0x1ed803 = CryptoJS.AES.decrypt(_0x1011cb, _0x198b2f, {
    iv: _0x2e318e,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  _0x387150 = 10;
  return _0x1ed803.toString(CryptoJS.enc.Utf8);
}
function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    });
  });
}
function post(url, data, sign) {
  return new Promise((resolve, reject) => {
    let data1 = Qs.parse({
      data: encrypt(JSON.stringify(data))
    });
    axios({
      method: "post",
      url: "///user" + url,
      data: data1,
      headers: {
        Authorization: sign,
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.data.code != 200) {
        resolve(res.data);
      }
      if (res.data.data.body === undefined) {
        resolve(res.data);
      }
      if (res.data.data.body.length === 0) {
        resolve(res.data);
      }
      res.data.data.body = decrypt(res.data.data.body);
      resolve(res.data);
    }).catch(err => {
      reject(err);
    });
  });
}