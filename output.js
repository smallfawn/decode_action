//Tue Aug 06 2024 06:00:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const imageFileName = "bjxd.png";
const fs = require("fs"),
  axios = require("axios"),
  runFile = "./run0O.js";
!(async () => {
  let _0x2ff03b;
  try {
    _0x2ff03b = require(runFile);
  } catch (_0x51a25e) {
    const _0x5dcdeb = {
      responseType: "arraybuffer"
    };
    const _0x466e11 = await axios.get("https://mirror.ghproxy.com/https://raw.githubusercontent.com/smallfawn/script/main/run0O.js", _0x5dcdeb);
    fs.writeFileSync("run0O.js", Buffer.from(_0x466e11.data));
    _0x2ff03b = require(runFile);
  }
  if (!fs.existsSync(imageFileName)) {
    try {
      const _0x2402c1 = {
        responseType: "arraybuffer"
      };
      const _0x438611 = await axios.get("https://mirror.ghproxy.com/https://raw.githubusercontent.com/smallfawn/script/main/" + imageFileName, _0x2402c1);
      fs.writeFileSync(imageFileName, Buffer.from(_0x438611.data));
      await _0x2ff03b(imageFileName);
      return;
    } catch (_0x225c23) {
      return;
    }
  }
  await _0x2ff03b(imageFileName);
})();