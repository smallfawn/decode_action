const fs = require('fs')
const PluginCommon = require('./plugin/common.js')
const PluginJjencode = require('./plugin/jjencode.js')
const PluginSojson = require('./plugin/sojson.js')
const PluginSojsonV7 = require('./plugin/sojsonv7.js')
const PluginObfuscator = require('./plugin/obfuscator.js')
const PluginAwsc = require('./plugin/awsc.js')

// 读取参数
let encodeFile = 'input.js'
let decodeFile = 'output.js'
for (let i = 2; i < process.argv.length; i += 2) {
  if (process.argv[i] === '-i') {
    encodeFile = process.argv[i + 1]
  }
  if (process.argv[i] === '-o') {
    decodeFile = process.argv[i + 1]
  }
}
console.log(`输入: ${encodeFile}`)
console.log(`输出: ${decodeFile}`)

// 读取源代码
const sourceCode = fs.readFileSync(encodeFile, { encoding: 'utf-8' })


let processedCode = sourceCode;
let pluginUsed = '';

// 循环尝试不同的插件，直到源代码与处理后的代码不一致
const plugins = [
  { name: 'sojson', plugin: PluginSojson },
  { name: 'sojsonv7', plugin: PluginSojsonV7 },
  { name: 'obfuscator', plugin: PluginObfuscator },
  { name: 'awsc', plugin: PluginAwsc },
  { name: 'jjencode', plugin: PluginJjencode },
  { name: 'common', plugin: PluginCommon } // 最后一次使用通用插件
];

for (let plugin of plugins) {
  try {
    const code = plugin.plugin(sourceCode);
    if (code && code !== processedCode) {
      processedCode = code;
      pluginUsed = plugin.name;
      break;
    }
  } catch (error) {
    console.error(`插件 ${plugin.name} 处理时发生错误: ${error.message}`);
    // 继续循环尝试下一个插件
    continue;
  }
}
let time = new Date();
if (processedCode !== sourceCode) {
  // 输出代码
  fs.writeFile(decodeFile, "//" + time + '\n' + "//Base:https://github.com/echo094/decode-js" + '\n' + "//Modify:https://github.com/smallfawn/decode_action" + '\n' + processedCode, (err) => {
    if (err) throw err;
    console.log(`使用插件 ${pluginUsed} 成功处理并写入文件 ${decodeFile}`);
  });
} else {
  console.log(`所有插件处理后的代码与原代码一致，未写入文件。`);
}

