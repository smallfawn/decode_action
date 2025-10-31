//Fri Oct 31 2025 01:07:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
    chromium
  } = require("playwright"),
  _ = require("lodash"),
  fs = require("fs-extra");
const path = require("path"),
  dataHelper = require("./../dataHelper"),
  wfHelper = require("./../wfHelper"),
  configHelper = require("./../configHelper");
const startupHelper = require("./../startupHelper"),
  apiHelper = require("./../apiHelper"),
  CDPHelper = require("./CDPHelper"),
  {
    copyFile
  } = require("fs").promises,
  ImageHelper = require("./../common/imageHelper");
const logHelper = require("./../logHelper"),
  imageHelper = new ImageHelper();
async function initialize() {
  const _0x2b7509 = await import("clipboardy");
  return _0x2b7509;
}
let base64ImagesCache = null;
let operClientNotConnCount = 0;
exports.process = async function (_0x5be85f) {
  const _0x43f28b = _0x5be85f.data.operSteps;
  let _0x5b2cff = dataHelper.getData("config").ass_use_http;
  console.log("===start process v4===>" + new Date());
  let _0x5c6822 = await sendWss([{
      type: "关闭窗口",
      value: ""
    }]),
    _0x4e6d36 = false;
  const _0x483942 = _0x43f28b["显示控制台日志"];
  if (_0x483942) {
    console.log(_0x43f28b);
  }
  const _0x20596e = _0x43f28b["操作_移动倍数"] ? _0x43f28b["操作_移动倍数"] : "1",
    _0x5c39be = _0x43f28b["操作_鼠标点击模式"] ? _0x43f28b["操作_鼠标点击模式"] : "";
  if (_0x43f28b["操作_点维权申诉"] && !_0x5c6822) {
    _0x4e6d36 = true;
    operClientNotConnCount++;
    if (_0x5b2cff) {
      if (!(await apiHelper.check_conn_assis())) {
        console.log("xxxxxxxxxxxxxxxclient_http_connectxxxxxxxxxxxxxxxxxxxxxxxx" + new Date().getTime());
        const _0x56645b = await apiHelper.reconn();
        if (_0x56645b) {
          _0x4e6d36 = false;
        }
      }
    } else {
      console.log("123xxxxxxxxxxxxxxxclient_no_connect try_reconnxxxxxxxxxxxxxxxxxxxxxxxx" + new Date().getTime());
      const _0x4d5e77 = await apiHelper.reconn();
      if (_0x4d5e77) {
        _0x4e6d36 = false;
      }
      _0x5c6822 = await sendWss([{
        type: "关闭窗口",
        value: ""
      }]);
    }
  }
  _0x5c6822 && _0x43f28b && _0x43f28b["操作_屏保退出ESC"] && (console.log("oper_screen_ESC:::" + new Date()), await sendWss([{
    type: "显示提示",
    value: "确保退出屏保"
  }, {
    type: "键盘操作",
    value: "{ESC}",
    before_sleep: 0
  }]));
  const _0x3232d6 = _0x5be85f.browserInfo,
    _0x125f78 = _0x5be85f.extInfo;
  const _0x2aa57f = _0x125f78.server_url,
    _0x11286a = _0x3232d6.urls;
  let _0x421970 = _.find(_0x11286a, function (_0x19466c) {
    return _0x19466c.indexOf("wss_port") > -1;
  });
  !_0x421970 && _0x3232d6.cache_wss_port_url && (_0x421970 = _0x3232d6.cache_wss_port_url);
  if (!_0x421970) {
    console.error("❌wss_port url not found need manual oper");
    return;
  }
  const _0x12dd43 = new URL(_0x421970).searchParams;
  let _0x1aa212 = _0x12dd43.get("wss_port");
  const _0x37d791 = _0x12dd43.get("name"),
    _0xfc87a9 = configHelper.getConfigByFolderName(_0x37d791);
  if (_0xfc87a9) {
    const _0x298e3c = _0xfc87a9.wss_port;
    if (_0x1aa212 + "" != _0x298e3c + "") {
      console.log("❌：：：port not same wss_port:" + _0x1aa212 + " wss_port_config:" + _0x298e3c);
      _0x1aa212 = _0x298e3c;
    }
  } else {
    console.log("not_found_config:" + _0x37d791 + " ::: wss_port:" + _0x1aa212);
  }
  let _0x41d125 = null;
  try {
    _0x41d125 = await chromium.connectOverCDP("http://127.0.0.1:" + _0x1aa212);
  } catch (_0x51131d) {
    _0x43f28b["异常重启浏览器"] ? (console.log("异常重启浏览器", _0x51131d), startupHelper.reStartChorme(_0x1aa212)) : (console.log("异常浏览器-未开启重启"), console.error(_0x51131d));
    return;
  }
  const _0x132c8e = _0x5be85f.data,
    _0x1d9299 = _0x132c8e.assistData,
    _0xcfd73 = _0x1d9299.applyForm;
  const _0x12f448 = _0xcfd73.fold;
  let _0x140d9c = _0xcfd73.apply_speedRefund_fee;
  const _0x49e768 = _0x41d125.contexts(),
    _0x571a28 = _0x49e768[0];
  await CDPHelper.make_sure_show_window(_0x41d125, _0x571a28);
  const _0x353ed4 = await _0x571a28.pages();
  let _0x188c7f = _0x5be85f.data.url.replace("&ss=1", "");
  const _0x2cec8d = _0x353ed4.find(_0x5a4351 => _0x5a4351.url().indexOf("wss_port") > -1);
  let _0x3e85c7 = _0x43f28b["位置偏移系数"] ? _0x43f28b["位置偏移系数"] : 1,
    _0x2ddacf = _0x43f28b["位置偏移系数组"] ? _0x43f28b["位置偏移系数组"] : null;
  if (_0x43f28b["关闭其他详情页"]) {
    const _0x2306c9 = _0x353ed4.filter(_0x211dc5 => _0x211dc5.url().indexOf("wss_port") > -1);
    for (const _0x59711c of _0x2306c9) {
      if (_0x2cec8d == _0x59711c) {
        continue;
      }
      await _0x59711c.close();
    }
    let _0x162ebe = ["about:blank", "https://mms.pinduoduo.com/mms-chat/search", "https://mms.pinduoduo.com/other/", "https://mms.pinduoduo.com/daxue/detai", "https://cashier.pinduoduo.com/main/bills", "https://mms.pinduoduo.com/aftersales-ssr/detail", "https://mms.pinduoduo.com/orders/appeals/aftersale/refund-only", "https://mms.pinduoduo.com/aftersales/customer_complain_appeal/detail", "https://yingxiao.pinduoduo.com/goods/report/promotion/overView", "https://mms.pinduoduo.com/aftersales/rectificatio"];
    const _0x180dee = _0x353ed4.filter(_0x14ca02 => _0x162ebe.some(_0x2889f4 => _0x14ca02.url().indexOf(_0x2889f4) > -1));
    for (const _0x493bcf of _0x180dee) {
      await _0x493bcf.close();
    }
  }
  let _0x48b5bb = null;
  _0x48b5bb = await _0x571a28.newPage();
  await _0x48b5bb.bringToFront();
  console.log("goUrl:" + _0x188c7f);
  const {
    browser_position: _0x14937d,
    browserSize: _0x531748
  } = await CDPHelper.getBrowserPostionInfo(_0x48b5bb);
  _0x14937d.screen.height > 900 && (_0x531748.width < 600 || _0x531748.height < 600) && (console.log("浏览器窗口太小了要重启"), await startupHelper.reStartChorme(_0x1aa212));
  !_0x4e6d36 && (_0x14937d.x > 100 || _0x14937d.y > 100);
  let _0x320d4b = false;
  if (_0x43f28b["页面事件监听"]) {
    console.log(" page load detect...." + new Date());
    _0x48b5bb.on("load", async () => {
      _0x320d4b = true;
    });
    _0x48b5bb.on("domcontentloaded", () => {
      console.log("page load finished" + new Date());
    });
  }
  if (_0x43f28b["打开申请详情页"]) {
    try {
      await _0x48b5bb.goto(_0x188c7f);
    } catch (_0xfa11a4) {
      if (_0xfa11a4.message.indexOf("Timeout") > -1) {
        if (_0x43f28b["异常重启浏览器"] || testModel) {
          try {
            for (const _0x527fa9 of _0x353ed4) {
              await _0x527fa9.close();
            }
          } catch (_0x41cd73) {}
          console.log("异常重启浏览器2");
          const _0x47724d = await startupHelper.reStartChorme(_0x1aa212);
          _0x47724d ? console.log("重启成功2") : console.log("重启失败2");
        } else {
          console.log("异常浏览器-未开启重启");
          console.error(_0xfa11a4);
        }
      } else {
        console.log("====================goto异常-需要关闭所有tab???????????-todo");
        console.log(_0xfa11a4);
      }
      return;
    }
  }
  if (_0x43f28b["页面事件监听"]) {
    do {
      if (_0x320d4b) {
        break;
      }
      await _0x48b5bb.waitForTimeout(100);
    } while (true);
    await exports.checkPageAllDataLoadDone(_0x48b5bb);
    const _0x227df1 = await exports.checkPageStatus(_0x48b5bb);
    !_.isEmpty(_0x227df1.apply_status) && (await exports.applayLog(_0x5be85f, "申诉", _0x227df1.apply_status));
    console.log(_0x227df1);
    await exports.checkAndCloseMaskAd(_0x48b5bb);
  }
  let _0x29c294 = "";
  if (_0x43f28b["删除原来的图片"]) {
    try {
      let _0x34c697 = configHelper.getCaptureDir();
      if (fs.existsSync(_0x34c697)) {
        fs.readdirSync(_0x34c697).forEach(_0x41314d => {
          if (_0x41314d.endsWith(".mp4") || _0x41314d.endsWith(".mkv")) {
            fs.unlinkSync(path.join(_0x34c697, _0x41314d));
          } else {
            if (_0x29c294.length > 0 && _0x41314d.includes(_0x29c294)) {
              fs.unlinkSync(path.join(_0x34c697, _0x41314d));
            } else {
              if (_0x29c294.length == 0) {
                fs.unlinkSync(path.join(_0x34c697, _0x41314d));
              }
            }
          }
        });
      }
    } catch (_0x1d3a9a) {
      console.log(_0x1d3a9a);
    }
  }
  if (_0x43f28b["截图前检测弹出框并关闭"]) {
    await new Promise(_0x4a2b5c => setTimeout(_0x4a2b5c, 500));
    const _0x8e8b12 = await myLocator(_0x48b5bb, "div.close-btn");
    if (_0x8e8b12) {
      console.log("测试到弹出框");
      const _0x2097e9 = await _0x8e8b12.boundingBox(),
        _0x5bb59e = getClickPostion(_0x14937d, _0x2097e9, null, _0x3e85c7);
      await sendWss([{
        type: "鼠标移动2",
        value: _0x5bb59e.x + "," + _0x5bb59e.y,
        value2: _0x20596e
      }, {
        type: "鼠标点击2",
        value2: _0x5c39be,
        before_sleep: exports.getRandomNumber(200, 400)
      }]);
    }
  }
  if (_0x43f28b["页面加载滑块检测"]) {
    await _0x48b5bb.waitForTimeout(1000);
    let _0xe6bc1a = await myLocator(_0x48b5bb, "#slide-captcha-dialog");
    if (_0xe6bc1a) {
      console.log("1次处理........");
      await checkSliderProcess(_0x48b5bb, _0x43f28b, _0x14937d, _0x3e85c7, _0x5be85f);
      await _0x48b5bb.waitForTimeout(1000);
      let _0xc1770b = await myLocator(_0x48b5bb, "#slide-captcha-dialog");
      _0xc1770b && (console.log("1二次检测处理........"), await checkSliderProcess(_0x48b5bb, _0x43f28b, _0x14937d, _0x3e85c7, _0x5be85f));
    }
  }
  const _0x48155c = _0xcfd73["必填凭证"];
  let _0x147e83 = [];
  if (_0x140d9c) {
    let _0x324fd4 = null;
    _0x324fd4 = await exports.extractAppealDetails(_0x48b5bb);
    const _0x2689c9 = _0x324fd4.jsAppeal;
    if (_0x2689c9) {
      if (_0x483942) {
        console.log("页面状态分析", _0x324fd4);
      }
      await exports.applayLog(_0x5be85f, "申诉", "完成", "极速退款申诉");
      return {};
    }
  }
  if (_0x43f28b["截图"]) {
    let _0x3b7007 = 0;
    if (_0x48155c) {
      for (let _0x517dc0 = 0; _0x517dc0 < _0x48155c.length; _0x517dc0++) {
        const _0x7a9337 = _0x48155c[_0x517dc0];
        if (!_0x7a9337.value) {
          continue;
        }
        if (_0x7a9337.name == "产品认证图" && !_.isEmpty(_0x7a9337.dataFileIds)) {
          _0x7a9337.base64Images = [];
          const _0x23e769 = _0x7a9337.dataFileIds.split(",");
          for (let _0x55d22e = 0; _0x55d22e < _0x23e769.length; _0x55d22e++) {
            const _0x32fbce = _0x23e769[_0x55d22e];
            if (_.isEmpty(_0x2aa57f)) {
              console.log("无server_url-产品认证图 skip");
              continue;
            }
            try {
              console.log("开始下载图片:" + new Date());
              if (!base64ImagesCache || !base64ImagesCache[_0x32fbce]) {
                const _0x2f25b5 = await fetch(_0x2aa57f + "/ext/getFileData", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                      dataFileId: _0x32fbce
                    })
                  }),
                  _0x5d491a = await _0x2f25b5.json();
                if (_0x5d491a && _0x5d491a.success && _0x5d491a.data) {
                  let _0x2576a5 = _0x5d491a.data;
                  _0x2576a5 = _0x2576a5.replace(/^data:image\/(png|jpeg);base64,/, "");
                  _0x7a9337.base64Images.push(_0x2576a5);
                  base64ImagesCache = base64ImagesCache || {};
                  base64ImagesCache[_0x32fbce] = _0x2576a5;
                  console.log("图片下载完成:" + new Date());
                } else {
                  console.log("没有图片数据----:" + _0x32fbce);
                }
              } else {
                _0x7a9337.base64Images.push(base64ImagesCache[_0x32fbce]);
                console.log("图片已缓存，直接使用缓存:" + new Date());
              }
            } catch (_0x48b5fc) {
              console.log("网络请求失败处理------");
            }
          }
        } else {
          if (_0x7a9337.name == "截图物流") {
            let _0x4e1065 = _0x48b5bb.locator("#detail-express-box");
            const _0x51ca09 = await _0x4e1065.count();
            if (_0x51ca09 == 1) {
              _0x4e1065 = await _0x48b5bb.locator("#detail-express-box");
            } else {
              if (_0x51ca09 == 0) {
                _0x4e1065 = await _0x48b5bb.locator("div.Beast__awH4b");
              }
            }
            if (_0x4e1065) {
              const _0x1f6fbe = await _0x4e1065.screenshot();
              _0x7a9337.image = _0x1f6fbe;
              if (_0x43f28b["物流截图箭头标注"]) {
                console.log(" 物流截图箭头标注");
              }
            }
          } else {
            if (_0x7a9337.name == "截图聊天") {
              const _0x302682 = await _0x48b5bb.$("div.Beast__2QwQT");
              if (_0x302682) {
                const _0x5e373c = await _0x302682.screenshot();
                _0x7a9337.image = _0x5e373c;
              }
            } else {
              if (_0x7a9337.name == "截图左侧") {
                let _0x15f494 = await _0x48b5bb.$("div.Beast__2h4LF");
                !_0x15f494 && (_0x15f494 = await _0x48b5bb.$("div.aftersalesLeft"));
                if (_0x15f494) {
                  const _0x482bd6 = await _0x15f494.screenshot();
                  _0x7a9337.image = _0x482bd6;
                }
              } else {
                if (_0x7a9337.name == "截图全屏") {
                  const _0x2116a5 = await _0x48b5bb.screenshot();
                  _0x7a9337.image = _0x2116a5;
                } else {
                  if (_0x7a9337.domClassName) {
                    const _0x51498c = await _0x48b5bb.$("div." + _0x7a9337.domClassName);
                    if (_0x51498c) {
                      const _0x2abdb8 = await _0x51498c.screenshot();
                      _0x7a9337.image = _0x2abdb8;
                    }
                  } else {
                    if (_0x7a9337.name == "图片") {
                      console.log("图片", _0x7a9337);
                      const _0x138912 = JSON.parse(_0x7a9337.vConfig),
                        _0x56fb24 = _0x138912.src_dir,
                        _0x60021d = _0x138912.file_name,
                        _0x3c480d = configHelper.getCaptureDir(),
                        _0x389baf = path.join(_0x56fb24, _0x60021d),
                        _0x382a73 = path.join(_0x3c480d, _0x60021d);
                      if (!fs.existsSync(_0x382a73)) {
                        fs.ensureDirSync(path.dirname(_0x382a73));
                        await copyFile(_0x389baf, _0x382a73);
                      }
                      console.log("图片444" + new Date(), {
                        oriFilePath: _0x389baf,
                        targetFilePath: _0x382a73
                      });
                      _0x147e83.push({
                        name: _0x7a9337.name,
                        filePath: _0x382a73.replace(/\//ig, "\\")
                      });
                    } else {
                      if (_0x7a9337.name == "视频") {
                        console.log("视频", _0x7a9337);
                        const _0x1ffa8e = JSON.parse(_0x7a9337.vConfig),
                          _0x4ed872 = _0x1ffa8e.src_dir,
                          _0x322add = _0x1ffa8e.file_key,
                          _0xc1dd0d = _0x1ffa8e.file_name;
                        _0x4ed872.startsWith("\\");
                        console.log("1::::::", new Date());
                        const _0x51a3c0 = fs.readdirSync(_0x4ed872);
                        console.log("2::::::", new Date());
                        const _0x822183 = _0xc1dd0d ? _0xc1dd0d : _.find(_0x51a3c0, function (_0x5dd56e) {
                          return _0x5dd56e.indexOf(_0x322add) > -1;
                        });
                        if (!_0x822183) {
                          console.log("找不到视频退单视频:", _0x1ffa8e);
                        } else {
                          let max_process_size = 100,
                            _0x2ea746 = 0;
                          const _0x5dc2e7 = path.join(_0x4ed872, _0x822183);
                          try {
                            const _0x266b2c = (await fs.promises.stat(_0x5dc2e7)).size / 1048576;
                            _0x266b2c > max_process_size ? _0x266b2c >= 300 ? console.log("❌❌❌超过300M无法上传: " + _0x266b2c.toFixed(2) + " MB") : (console.log("⚠️⚠️⚠️超过30M不处理: " + _0x266b2c.toFixed(2) + " MB"), _0x2ea746 = _0x266b2c, _0x147e83.push({
                              name: _0x7a9337.name,
                              filePath: _0x5dc2e7
                            })) : console.log("视频文件大小: " + _0x266b2c.toFixed(2) + " MB");
                          } catch (_0x13b844) {
                            console.log(_0x13b844);
                            return;
                          }
                          if (_0x2ea746 <= max_process_size) {
                            const _0x3ca626 = configHelper.getCaptureDir(),
                              _0x36d019 = path.basename(_0x5dc2e7),
                              _0x568454 = path.join(_0x3ca626, _0x36d019);
                            console.log("333::::::", _0x568454);
                            !fs.existsSync(_0x568454) && (fs.ensureDirSync(path.dirname(_0x568454)), await copyFile(_0x5dc2e7, _0x568454));
                            console.log("视频444" + new Date(), {
                              videoFileFullPath: _0x5dc2e7,
                              videoFilePath: _0x568454
                            });
                            _0x147e83.push({
                              name: _0x7a9337.name,
                              filePath: _0x568454.replace(/\//ig, "\\")
                            });
                            continue;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (_0x7a9337.base64Images) {
          for (let _0x25705d = 0; _0x25705d < _0x7a9337.base64Images.length; _0x25705d++) {
            _0x3b7007++;
            const _0x389295 = _0x7a9337.base64Images[_0x25705d],
              _0x1a3949 = Buffer.from(_0x389295, "base64"),
              _0x9eb6d2 = "/images/" + _0x7a9337.name + ".png";
            let _0x4362d5 = dataHelper.getDataPath(_0x9eb6d2);
            if (process.platform !== "darwin") {
              if (_0x7a9337.base64Images.length > 1) {
                if (_.isEmpty(_0x29c294)) {
                  _0x4362d5 = path.join(configHelper.getCaptureDir(), _0x3b7007 + "_" + _0x25705d + _0x7a9337.name + ".png");
                } else {
                  _0x4362d5 = path.join(configHelper.getCaptureDir(), _0x29c294 + "_" + _0x3b7007 + "_" + _0x25705d + _0x7a9337.name + ".png");
                }
              } else {
                if (_.isEmpty(_0x29c294)) {
                  _0x4362d5 = path.join(configHelper.getCaptureDir(), _0x7a9337.name + ".png");
                } else {
                  _0x4362d5 = path.join(configHelper.getCaptureDir(), _0x29c294 + "_" + _0x7a9337.name + ".png");
                }
              }
            }
            fs.ensureFileSync(_0x4362d5);
            fs.writeFileSync(_0x4362d5, _0x1a3949);
            console.log("已保存" + _0x7a9337.name + "图片到" + _0x9eb6d2);
            _0x147e83.push({
              name: _0x7a9337.name,
              filePath: _0x4362d5.replace(/\//ig, "\\")
            });
          }
        }
        if (_0x7a9337.image) {
          _0x3b7007++;
          const _0x2976c1 = _0x7a9337.image.toString("base64"),
            _0x3963f9 = Buffer.from(_0x2976c1, "base64");
          let _0x603fa1 = null;
          if (_.isEmpty(_0x29c294)) {
            if (_0x43f28b["截图随机裁边"]) {
              _0x603fa1 = path.join(configHelper.getCaptureDir(), _0x3b7007 + "_.png");
            } else {
              _0x603fa1 = path.join(configHelper.getCaptureDir(), _0x3b7007 + ".png");
            }
          } else {
            _0x603fa1 = path.join(configHelper.getCaptureDir(), _0x29c294 + "_" + _0x3b7007 + "_" + _0x7a9337.name + ".png");
          }
          fs.ensureFileSync(_0x603fa1);
          fs.writeFileSync(_0x603fa1, _0x3963f9);
          if (_0x43f28b["截图随机裁边"]) {
            let _0x3da748 = null;
            _.isEmpty(_0x29c294) ? _0x3da748 = path.join(configHelper.getCaptureDir(), _0x3b7007 + ".png") : _0x3da748 = path.join(configHelper.getCaptureDir(), _0x29c294 + "_" + _0x3b7007 + "_" + _0x7a9337.name + "_2.png");
            try {
              let _0x419bb8 = null,
                _0x2b75fe = {
                  minCrop: 2,
                  maxCrop: 15,
                  randomize: true,
                  position: "random"
                };
              if (_0x7a9337.name == "截图左侧") {
                _0x2b75fe = {
                  minCrop: 5,
                  maxCrop: 20,
                  cropSizes: {
                    left: {
                      min: 5,
                      max: 15
                    },
                    top: {
                      min: 10,
                      max: 50
                    },
                    right: {
                      min: 40,
                      max: 80
                    },
                    bottom: {
                      min: 60,
                      max: 180
                    }
                  },
                  randomize: true
                };
              } else {
                if (_0x7a9337.name == "截图聊天") {
                  _0x2b75fe = {
                    minCrop: 5,
                    maxCrop: 20,
                    cropSizes: {
                      left: {
                        min: 5,
                        max: 20
                      },
                      top: {
                        min: 5,
                        max: 30
                      },
                      right: {
                        min: 5,
                        max: 30
                      },
                      bottom: {
                        min: 20,
                        max: 40
                      }
                    },
                    randomize: true
                  };
                }
              }
              _0x419bb8 = await imageHelper.randomCropBorder(_0x603fa1, _0x3da748, _0x2b75fe);
              _0x419bb8.success ? (await fs.remove(_0x603fa1), _0x603fa1 = _0x3da748) : console.log("裁剪出错~~~");
            } catch (_0x2694ef) {
              console.log(_0x2694ef);
            }
          }
          _0x147e83.push({
            name: _0x7a9337.name,
            filePath: _0x603fa1.replace(/\//ig, "\\")
          });
        }
      }
    } else {
      console.log("=============>无识别截图内容:" + new Date());
    }
    console.log("截图完成:" + new Date());
  }
  _0x43f28b["播放声音"] && sound.play(dataHelper.getDataPath("click.mp3"));
  _0x43f28b["截图后页面滚动到最上方"] && (await _0x48b5bb.waitForTimeout(100), await _0x48b5bb.keyboard.press("Home"));
  if (_0x43f28b["申诉描述复制到剪贴板"]) {
    const _0x4090b8 = _0xcfd73["申诉描述"];
    if (_0x4090b8) {
      const _0x28c604 = await initialize();
      await _0x28c604.default.write(_0x4090b8);
    } else {
      console.log("无识别描述内容===============");
    }
  }
  if (_0x4e6d36) {
    return {
      success: false,
      operClientNotConn: _0x4e6d36,
      operClientNotConnCount: operClientNotConnCount,
      msg: "操作客户端未连接"
    };
  }
  operClientNotConnCount > 0 && false && (operClientNotConnCount = 0, await exports.applayLog(_0x5be85f, "客户端状态", "辅助未连接"));
  try {
    const _0xe37159 = await myLocator(_0x48b5bb, ".user-name-text", false, true),
      _0x517dd6 = await _0xe37159.textContent();
    _0x517dd6 && configHelper.updateClientLoginMallName(_0x37d791, _0x1aa212, _0x517dd6);
  } catch (_0x4d8379) {
    console.log(_0x4d8379);
  }
  let _0x1cb666 = null;
  if (_0x43f28b["页面状态预检测"]) {
    _0x1cb666 = await exports.extractAppealDetails(_0x48b5bb);
    const _0x15a782 = _0x1cb666.shipping_has_applyed;
    console.log({
      shipping_has_applyed: _0x15a782,
      only_apply_shipping_fee: _0xcfd73.only_apply_shipping_fee
    });
    if (_0x15a782 && _0xcfd73.only_apply_shipping_fee) {
      if (_0x483942) {
        console.log("页面状态分析", _0x1cb666);
      }
      await exports.applayLog(_0x5be85f, "申诉", "完成", "运费申诉");
      return {};
    }
  }
  let _0xa19510 = {
      x: 0,
      y: 0
    },
    _0x3ba01c = false,
    _0x4dc211 = null;
  if (_0x43f28b["操作_点维权申诉"]) {
    console.log("操作_点维权申诉_开始:" + new Date());
    await new Promise(_0x2ec2b4 => setTimeout(_0x2ec2b4, 500));
    let _0x44e467 = _0x140d9c ? await myLocator(_0x48b5bb, "button:has-text(\"极速退款申诉\")") : await myLocator(_0x48b5bb, "button:has-text(\"维权申诉\")");
    if (_0x140d9c && !_0x44e467) {
      _0xcfd73.need_reason_match = true;
      _0xcfd73["申诉原因"] = "非以上申诉原因";
      _0xcfd73["申诉原因s"] = ["消费者退货影响二次销售，已退回", "消费者退货影响二次销售"];
      _0x140d9c = false;
      _0x44e467 = await myLocator(_0x48b5bb, "button:has-text(\"维权申诉\")");
    }
    let _0x2903f4 = _0x44e467 ? await _0x44e467.boundingBox() : null,
      _0x37cc78 = true;
    if (_0x44e467) {
      let _0x2e4592 = _0x14937d.y + _0x2903f4.y + _0x2903f4.height,
        _0x21f8f9 = _0x2903f4.y + _0x2903f4.height;
      _0x37cc78 = _0x21f8f9 < _0x531748.height && _0x2e4592 < _0x14937d.screen.height - 84 - 40;
      if (!_0x37cc78) {
        if (_0x531748.height > 600) {
          console.log("=====================xxxxxxxxx看不见xxxxxxxxx===========================" + new Date());
          let _0xf75dfd = parseInt((_0x2903f4.y + _0x2903f4.height - _0x531748.height) * 2);
          if (_0xf75dfd < 100) {
            _0xf75dfd = 100;
          }
          console.log({
            browserSize: _0x531748,
            applayBtnRect: _0x2903f4,
            scrollY: _0xf75dfd
          });
          await sendWss([{
            type: "鼠标移动2",
            value: _0x14937d.x + _0x531748.width / 2 + "," + (_0x14937d.y + _0x531748.height / 2),
            value2: _0x20596e
          }, {
            type: "鼠标滚动",
            value: "-" + _0xf75dfd
          }]);
          _0x44e467 = _0x140d9c ? await myLocator(_0x48b5bb, "button:has-text(\"极速退款申诉\")") : await myLocator(_0x48b5bb, "button:has-text(\"维权申诉\")");
          _0x2903f4 = _0x44e467 ? await _0x44e467.boundingBox() : null;
        } else {
          console.log("浏览器高度太低了。。。。。无法处理", _0x531748);
          return;
        }
      }
    }
    if (!_0x44e467) {
      console.log("❌未找到维权申诉按钮,检测状态:" + new Date());
      const _0x3549f7 = await exports.checkPageStatus(_0x48b5bb);
      if (_.isEmpty(_0x3549f7.apply_status)) {
        const _0x1791a7 = await myLocator(_0x48b5bb, "button:has-text(\"极速退款申诉\")");
        if (_0x1791a7 && !_0x140d9c) {
          _0x3549f7.apply_status = "完成";
        }
        let _0x1160bb = await myLocator(_0x48b5bb, "#slide-captcha-dialog");
        if (!_0x1160bb) {
          _0x3549f7.apply_status = "完成";
        }
      }
      !_.isEmpty(_0x3549f7.apply_status) && (await exports.applayLog(_0x5be85f, "申诉", _0x3549f7.apply_status));
      console.log("状态==============================", _0x3549f7);
      return;
    } else {
      !_0x37cc78;
    }
    if (_0x43f28b["操作_校正"] && _0x43f28b["操作_点维权申诉偏移"]) {
      _0xa19510 = _0x43f28b["操作_点维权申诉偏移"];
      console.log("3.操作_点维权申诉偏移", _0xa19510);
    }
    const _0x474c92 = getClickPostion(_0x14937d, _0x2903f4, _0xa19510, _0x3e85c7);
    let _0x420fb0 = _0x474c92.x,
      _0x5edd7f = _0x474c92.y;
    console.log("doX:" + _0x420fb0 + " doY:" + _0x5edd7f);
    if (_0x43f28b["只测试移动到维权申诉按钮"]) {
      await sendWss([{
        type: "鼠标移动2",
        value: _0x420fb0 + "," + _0x5edd7f,
        value2: _0x20596e
      }]);
      console.log("只测试移动到维权申诉按钮-跳出", new Date());
      return;
    } else {
      await sendWss([{
        type: "鼠标移动2",
        value: _0x420fb0 + "," + _0x5edd7f,
        value2: _0x20596e
      }, {
        type: "鼠标点击2",
        value2: _0x5c39be,
        before_sleep: exports.getRandomNumber(200, 400)
      }]);
    }
    if (_0x2ddacf) {
      await new Promise(_0x5c08a6 => setTimeout(_0x5c08a6, 300));
      const _0x1a49d1 = await myLocator(_0x48b5bb, "button:has-text(\"提交申诉\")"),
        _0x533863 = await myLocator(_0x48b5bb, "button:has-text(\"确认申诉\")");
      if (!_0x1a49d1 && !_0x533863) {
        const _0x2e1b88 = _0x2ddacf.filter(_0x488efb => _0x488efb !== _0x3e85c7);
        for (let _0xa86dd5 = 0; _0xa86dd5 < _0x2e1b88.length; _0xa86dd5++) {
          const _0x1ce571 = _0x2e1b88[_0xa86dd5],
            _0x2be8a2 = getClickPostion(_0x14937d, _0x2903f4, _0xa19510, _0x1ce571);
          await sendWss([{
            type: "鼠标移动2",
            value: _0x2be8a2.x + "," + _0x2be8a2.y,
            value2: _0x20596e
          }, {
            type: "鼠标点击2",
            value2: _0x5c39be,
            before_sleep: exports.getRandomNumber(200, 400)
          }]);
          await new Promise(_0x461ee9 => setTimeout(_0x461ee9, 300));
          const _0x4a7d3c = await myLocator(_0x48b5bb, "button:has-text(\"提交申诉\")"),
            _0x404325 = await myLocator(_0x48b5bb, "button:has-text(\"确认申诉\")");
          if (_0x4a7d3c || _0x404325) {
            _0x3e85c7 = _0x1ce571;
            console.log("猜到位置成功点击", _0x1ce571);
            break;
          }
        }
      }
    }
    let _0x51b191 = false;
    if (!_0x12f448) {
      const _0x3e2fda = await myLocator(_0x48b5bb, "button:has-text(\"提交申诉\")");
      if (!_0x3e2fda) {
        _0x51b191 = true;
      }
    }
    if (_0x12f448 || _0x51b191) {
      await new Promise(_0x432b4c => setTimeout(_0x432b4c, 300));
      const _0x1a0482 = await myLocator(_0x48b5bb, "button:has-text(\"确认申诉\")");
      if (_0x1a0482) {
        const _0x5ab101 = await _0x1a0482.boundingBox();
        if (_0x43f28b["操作_校正"] && _0x43f28b["操作_点维权申诉二次确认偏移"]) {
          _0xa19510 = _0x43f28b["操作_点维权申诉二次确认偏移"];
        }
        const _0x5df92a = getClickPostion(_0x14937d, _0x5ab101, _0xa19510, _0x3e85c7);
        await sendWss([{
          type: "鼠标移动2",
          value: _0x5df92a.x + "," + _0x5df92a.y,
          value2: _0x20596e
        }, {
          type: "鼠标点击2",
          value2: _0x5c39be,
          before_sleep: exports.getRandomNumber(200, 400)
        }]);
      }
    }
    await new Promise(_0x32e923 => setTimeout(_0x32e923, 1000));
    console.log("操作_点维权申诉_结束:" + new Date());
    _0x3ba01c = await _0x48b5bb.isVisible("div:has-text(\"退货商品仍在途未签收，建议签收后再发起申诉。\")");
    if (_0x3ba01c && !_0x43f28b["操作_点继续提交"]) {
      await exports.applayLog(_0x5be85f, "申诉", "退货商品仍在途未签收");
      return {
        success: false,
        msg: "退货商品仍在途未签收，建议签收后再发起申诉。"
      };
    }
  } else {
    console.log("skip=====>跳过-操作_点维权申诉:" + new Date());
    return {
      success: false,
      msg: "不自动-未触发点申诉按钮"
    };
  }
  if (_0x43f28b["只测试维权申诉点击"]) {
    console.log("只测试维权申诉点击-跳出", new Date());
    return;
  }
  let _0x55e192 = null;
  !_0x140d9c && (_0xcfd73.only_apply_shipping_fee ? _0x55e192 = await myLocator(_0x48b5bb, "div.Beast__3YJFr", true) : _0x55e192 = await myLocator(_0x48b5bb, "div.Beast__3YJFr", false, true));
  let _0x47c9c5 = _0x55e192 ? await _0x55e192.textContent() : 0;
  console.log("amount 888:" + _0x47c9c5, "only_apply_shipping_fee:" + _0xcfd73.only_apply_shipping_fee);
  if (!_0x140d9c && _0xcfd73.only_apply_shipping_fee) {
    const _0x3dd33d = await myLocator(_0x48b5bb, "div[data-testid=\"beast-core-checkboxGroup\"]");
    let _0x11b107 = false;
    if (_0x3dd33d) {
      let _0xec0863 = await _0x3dd33d.locator("label[data-testid=\"beast-core-checkbox\"]"),
        _0x3f026d = await _0xec0863.count();
      console.log("found type count-2: " + _0x3f026d + " ");
      if (_0x3f026d > 0) {
        for (let _0x799df5 = 0; _0x799df5 < _0x3f026d; _0x799df5++) {
          const _0x536e48 = await _0xec0863.nth(_0x799df5).innerText();
          if (_0x536e48 === "货款申诉") {
            targetSubDom = _0xec0863.nth(_0x799df5);
            const _0x4c7368 = await targetSubDom.boundingBox();
            if (_0x43f28b["操作_校正"] && _0x43f28b["操作_检查并取消非货款申诉选项偏移"]) {
              _0xa19510 = _0x43f28b["操作_检查并取消非货款申诉选项偏移"];
            }
            const _0x1eeb13 = getClickPostion(_0x14937d, _0x4c7368, _0xa19510, _0x3e85c7);
            await sendWss([{
              type: "鼠标移动2",
              value: _0x1eeb13.x + "," + _0x1eeb13.y,
              value2: _0x20596e
            }, {
              type: "鼠标点击2",
              value2: _0x5c39be,
              before_sleep: exports.getRandomNumber(200, 400)
            }]);
          }
          if (_0x536e48 === "纠纷退款率申诉") {
            targetSubDom = _0xec0863.nth(_0x799df5);
            const _0x41fcc0 = await targetSubDom.boundingBox();
            if (_0x43f28b["操作_校正"] && _0x43f28b["操作_检查并取消非货款申诉选项偏移"]) {
              _0xa19510 = _0x43f28b["操作_检查并取消非货款申诉选项偏移"];
            }
            const _0x5e0020 = getClickPostion(_0x14937d, _0x41fcc0, _0xa19510, _0x3e85c7);
            await sendWss([{
              type: "鼠标移动2",
              value: _0x5e0020.x + "," + _0x5e0020.y,
              value2: _0x20596e
            }, {
              type: "鼠标点击2",
              value2: _0x5c39be,
              before_sleep: exports.getRandomNumber(200, 400)
            }]);
          }
          _0x536e48 === "运费申诉" && (_0x11b107 = true);
        }
      }
      if (!_0x11b107) {
        console.log("⚠️⚠️⚠️运费申诉时在选项组找不到运费申诉Dom");
        await exports.applayLog(_0x5be85f, "申诉", "完成", "运费申诉");
        await _0x48b5bb.close();
        return {
          success: false,
          msg: "[运费申诉]运费申诉时在选项组找不到运费申诉Dom"
        };
      }
    } else {
      const _0x2523b9 = await myLocator(_0x48b5bb, "div:text-is(\"货款申诉\")");
      if (_0x2523b9) {
        _0x11b107 = false;
        console.log("⚠️⚠️⚠️运费申诉时在没有选项组的情况下找到了货款申诉DOM");
        await exports.applayLog(_0x5be85f, "申诉", "完成", "运费申诉");
        await _0x48b5bb.close();
        return {
          success: false,
          msg: "[运费申诉]未找到运费申诉选项，但系统默认或只显示货款申诉，无法继续。"
        };
      } else {
        const _0x22ac93 = await myLocator(_0x48b5bb, "div:text-is(\"纠纷退款率申诉\")");
        if (_0x22ac93) {
          _0x11b107 = false;
          console.log("⚠️⚠️⚠️运费申诉时在没有选项组的情况下找到了纠纷退款率申诉DOM");
          await exports.applayLog(_0x5be85f, "申诉", "完成", "运费申诉");
          await _0x48b5bb.close();
          return {
            success: false,
            msg: "[运费申诉]未找到运费申诉选项，但系统默认或只显示货款申诉，无法继续。"
          };
        }
      }
    }
    if (_0x47c9c5 <= 0) {
      return {
        success: false,
        msg: "[运费申诉]金额0"
      };
    }
  } else {
    if (!_0x140d9c && _0x43f28b["操作_检查并取消非货款申诉选项"]) {
      if (_0x47c9c5 <= 0) {
        return {
          success: false,
          msg: "[货款申诉]金额读取为0000000000000"
        };
      }
      await new Promise(_0xec696 => setTimeout(_0xec696, 300));
      const _0x1f3569 = await myLocator(_0x48b5bb, "div[data-testid=\"beast-core-checkboxGroup\"]");
      if (_0x1f3569) {
        let _0x4aefe6 = await _0x1f3569.locator("label[data-testid=\"beast-core-checkbox\"]"),
          _0x202f85 = await _0x4aefe6.count();
        console.log("found type count-2: " + _0x202f85 + " ");
        if (_0x202f85 > 0) {
          let _0x676636 = false,
            _0x379561 = false,
            _0x1800c8 = false;
          for (let _0x178fd4 = 0; _0x178fd4 < _0x202f85; _0x178fd4++) {
            const _0x57650e = await _0x4aefe6.nth(_0x178fd4).innerText();
            if (_0x57650e === "运费申诉") {
              _0x379561 = true;
            } else {
              if (_0x57650e === "纠纷退款率申诉") {
                _0x1800c8 = true;
              } else {
                _0x57650e === "货款申诉" && (_0x676636 = true);
              }
            }
          }
          for (let _0x35590a = 0; _0x35590a < _0x202f85; _0x35590a++) {
            const _0x317b19 = await _0x4aefe6.nth(_0x35590a).innerText();
            if (_0x317b19 === "运费申诉" && _0x676636) {
              targetSubDom = _0x4aefe6.nth(_0x35590a);
              const _0x16ece9 = await targetSubDom.boundingBox();
              if (_0x43f28b["操作_校正"] && _0x43f28b["操作_检查并取消非货款申诉选项偏移"]) {
                _0xa19510 = _0x43f28b["操作_检查并取消非货款申诉选项偏移"];
              }
              const _0x85102f = getClickPostion(_0x14937d, _0x16ece9, _0xa19510, _0x3e85c7);
              await sendWss([{
                type: "鼠标移动2",
                value: _0x85102f.x + "," + _0x85102f.y,
                value2: _0x20596e
              }, {
                type: "鼠标点击2",
                value2: _0x5c39be,
                before_sleep: exports.getRandomNumber(200, 400)
              }]);
            }
            if (_0x317b19 === "纠纷退款率申诉") {
              targetSubDom = _0x4aefe6.nth(_0x35590a);
              const _0x8fdee4 = await targetSubDom.boundingBox();
              if (_0x43f28b["操作_校正"] && _0x43f28b["操作_检查并取消非货款申诉选项偏移"]) {
                _0xa19510 = _0x43f28b["操作_检查并取消非货款申诉选项偏移"];
              }
              const _0x28ddc9 = getClickPostion(_0x14937d, _0x8fdee4, _0xa19510, _0x3e85c7);
              await sendWss([{
                type: "鼠标移动2",
                value: _0x28ddc9.x + "," + _0x28ddc9.y,
                value2: _0x20596e
              }, {
                type: "鼠标点击2",
                value2: _0x5c39be,
                before_sleep: exports.getRandomNumber(200, 400)
              }]);
            }
          }
          if (!_0x676636 && _0x379561) {
            console.log("fix=====货款申诉情况下，只有运费，没有货款dom,那就修改成申诉运费=====");
            _0xcfd73.only_apply_shipping_fee = true;
            _0xcfd73["申诉描述"] = "消费者无理由退货，退货运费不应商家承担";
          } else {
            if (!_0x676636) {
              console.log("⚠️⚠️⚠️货款申诉时没找到货款选项DOM");
              await exports.applayLog(_0x5be85f, "申诉", "完成", "货款申诉");
              await _0x48b5bb.close();
              return {
                success: false,
                msg: "[货款申诉]货款申诉时没找到货款选项"
              };
            }
          }
        }
      }
    }
  }
  let _0x2c750d = _0x140d9c ? true : false,
    _0x1d05df = false;
  if (!_0x140d9c && _0x43f28b["操作_价额填写"]) {
    await new Promise(_0x1562dd => setTimeout(_0x1562dd, 300));
    const _0x38a2b0 = await myLocator(_0x48b5bb, "input[field=\"subInfoVOS[0].amount\"]"),
      _0x250194 = await _0x38a2b0.boundingBox();
    if (_0x43f28b["操作_校正"] && _0x43f28b["操作_价额填写偏移"]) {
      _0xa19510 = _0x43f28b["操作_价额填写偏移"];
    }
    const _0x2a8cff = getClickPostion(_0x14937d, _0x250194, _0xa19510, _0x3e85c7);
    if (_0x43f28b["操作_填写pw赋值模式"]) {
      await _0x38a2b0.click();
      await _0x48b5bb.waitForTimeout(100 + Math.random() * 200);
      let _0x4cf3c4 = parseFloat(_0x47c9c5).toString();
      for (let _0xef9392 = 0; _0xef9392 < _0x4cf3c4.length; _0xef9392++) {
        await _0x38a2b0.type(_0x4cf3c4[_0xef9392], {
          delay: 50 + Math.random() * 100
        });
        await _0x48b5bb.waitForTimeout(10 + Math.random() * 90);
      }
      await _0x48b5bb.waitForTimeout(200 + Math.random() * 500);
    } else {
      if (_0x43f28b["操作_价额填写鼠标右键粘帖模式"]) {
        console.log("=======>操作_价额填写鼠标右键粘帖模式<=========");
        await sendWss([{
          type: "显示提示",
          value: "价:" + _0x47c9c5
        }, {
          type: "鼠标移动2",
          value: _0x2a8cff.x + "," + _0x2a8cff.y,
          value2: _0x20596e
        }, {
          type: "鼠标点击2",
          value2: _0x5c39be,
          before_sleep: exports.getRandomNumber(200, 400)
        }, {
          type: "剪贴板_写入",
          value: parseFloat(_0x47c9c5).toFixed(2) + ""
        }]);
        await sendWss([{
          type: "显示提示",
          value: "鼠标右键"
        }, {
          type: "鼠标右键点击菜单",
          before_sleep: exports.getRandomNumber(200, 400),
          value: "*粘贴"
        }]);
      } else {
        if (_0x43f28b["操作_价额填写打字输入模式"]) {
          await sendWss([{
            type: "显示提示",
            value: "价:" + _0x47c9c5
          }, {
            type: "鼠标移动2",
            value: _0x2a8cff.x + "," + _0x2a8cff.y,
            value2: _0x20596e
          }, {
            type: "鼠标点击2",
            value2: _0x5c39be,
            before_sleep: exports.getRandomNumber(200, 400)
          }]);
          let _0xa45fe7 = _0x47c9c5;
          _0xa45fe7 = parseFloat(_0x47c9c5).toString();
          for (let _0x3d9f8c = 0; _0x3d9f8c < _0xa45fe7.length; _0x3d9f8c++) {
            const _0x28204c = _0xa45fe7[_0x3d9f8c];
            await sendWss([{
              type: "键盘操作",
              value: _0x28204c,
              before_sleep: exports.getRandomNumber(5, 50)
            }]);
          }
          await new Promise(_0x42d778 => setTimeout(_0x42d778, 100));
          const _0x2d2661 = await myLocator(_0x48b5bb, "input[field=\"subInfoVOS[0].amount\"]"),
            _0x2e2701 = await _0x2d2661.inputValue();
          if (!_0x2e2701 || _0x2e2701.length == 0) {
            console.log("备选输入价格方案");
            await _0x2d2661.click();
            await _0x48b5bb.waitForTimeout(100 + Math.random() * 200);
            let _0x25df49 = parseFloat(_0x47c9c5).toString();
            for (let _0x4ffae6 = 0; _0x4ffae6 < _0x25df49.length; _0x4ffae6++) {
              await _0x2d2661.type(_0x25df49[_0x4ffae6], {
                delay: 50 + Math.random() * 100
              });
              await _0x48b5bb.waitForTimeout(10 + Math.random() * 90);
            }
            await _0x48b5bb.waitForTimeout(200 + Math.random() * 500);
            _0x1d05df = true;
          }
        } else {
          console.log("eee", _0x43f28b["操作_填写pw赋值模式"]);
          await sendWss([{
            type: "显示提示",
            value: "价:" + _0x47c9c5
          }, {
            type: "鼠标移动2",
            value: _0x2a8cff.x + "," + _0x2a8cff.y,
            value2: _0x20596e
          }, {
            type: "鼠标点击2",
            value2: _0x5c39be,
            before_sleep: exports.getRandomNumber(200, 400)
          }, {
            type: "剪贴板_写入",
            value: parseFloat(_0x47c9c5).toFixed(2) + ""
          }, {
            type: "键盘操作",
            value: "^v",
            before_sleep: exports.getRandomNumber(200, 400)
          }]);
          await new Promise(_0x543e1a => setTimeout(_0x543e1a, 100));
          const _0x3d38d2 = await myLocator(_0x48b5bb, "input[field=\"subInfoVOS[0].amount\"]"),
            _0x4d8af1 = await _0x3d38d2.inputValue();
          if (!_0x4d8af1 || _0x4d8af1.length == 0) {
            console.log("备选输入价格方案");
            await _0x3d38d2.click();
            await _0x48b5bb.waitForTimeout(100 + Math.random() * 200);
            let _0x1d2710 = parseFloat(_0x47c9c5).toString();
            for (let _0x45f51a = 0; _0x45f51a < _0x1d2710.length; _0x45f51a++) {
              await _0x3d38d2.type(_0x1d2710[_0x45f51a], {
                delay: 50 + Math.random() * 100
              });
              await _0x48b5bb.waitForTimeout(10 + Math.random() * 90);
            }
            await _0x48b5bb.waitForTimeout(200 + Math.random() * 500);
            _0x1d05df = true;
          }
        }
      }
    }
    if (_0x43f28b["检查_价额填写"] && !_0x140d9c) {
      await new Promise(_0x4345ae => setTimeout(_0x4345ae, 100));
      const _0x51dc4f = await myLocator(_0x48b5bb, "input[field=\"subInfoVOS[0].amount\"]"),
        _0x49a214 = await _0x51dc4f.inputValue();
      if (!_0x49a214 || _0x49a214.length == 0) {
        _0x2c750d = true;
        console.log("❌价额输入框无内容:");
        return;
      }
    }
  }
  if (_0x43f28b["操作_描述填写"]) {
    await new Promise(_0x28629d => setTimeout(_0x28629d, 300));
    const _0x299b06 = _0xcfd73["申诉描述"],
      _0xd55ded = await myLocator(_0x48b5bb, "textarea[data-testid=\"beast-core-textArea-htmlInput\"]");
    let _0x589833 = await _0xd55ded.boundingBox();
    _0x589833.width = parseInt(_0x589833.width / 2);
    _0x43f28b["操作_校正"] && _0x43f28b["操作_描述填写偏移"] && (_0xa19510 = _0x43f28b["操作_描述填写偏移"]);
    const _0x37c22d = getClickPostion(_0x14937d, _0x589833, _0xa19510, _0x3e85c7);
    if (_0x43f28b["操作_填写pw赋值模式"]) {
      await _0xd55ded.click();
      await _0x48b5bb.waitForTimeout(100 + Math.random() * 200);
      let _0x17af37 = _0x299b06;
      for (let _0xead7ad = 0; _0xead7ad < _0x17af37.length; _0xead7ad++) {
        await _0xd55ded.type(_0x17af37[_0xead7ad], {
          delay: 10 + Math.random() * 100
        });
        await _0x48b5bb.waitForTimeout(10 + Math.random() * 90);
      }
      await _0x48b5bb.waitForTimeout(200 + Math.random() * 500);
    } else {
      if (_0x43f28b["操作_描述填写鼠标模式"]) {
        const _0x4dd03a = _0x37c22d.top_ori + exports.getRandomNumber(10, 40) + _0x37c22d.off_y;
        await sendWss([{
          type: "显示提示",
          value: "描述"
        }, {
          type: "鼠标移动2",
          value: _0x37c22d.x + "," + _0x4dd03a,
          value2: _0x20596e
        }, {
          type: "鼠标点击2",
          value2: _0x5c39be,
          before_sleep: exports.getRandomNumber(200, 400)
        }, {
          type: "剪贴板_写入",
          value: _0x299b06
        }]);
        console.log("=======>操作_描述填写鼠标模式<=========");
        await sendWss([{
          type: "显示提示",
          value: "鼠标右键"
        }, {
          type: "鼠标右键点击菜单",
          before_sleep: exports.getRandomNumber(200, 400),
          value: "*粘贴"
        }]);
        const _0x381a82 = await _0xd55ded.inputValue();
        if (!_0x381a82 || _0x381a82.length == 0) {
          console.log("❌描述输入框无内容 return");
          return;
        }
      } else {
        if (_0x1d05df) {
          console.log("备选方案下 操作_填写pw赋值模式");
          await _0xd55ded.click();
          await _0x48b5bb.waitForTimeout(100 + Math.random() * 200);
          let _0x395e05 = _0x299b06;
          for (let _0x1a2f44 = 0; _0x1a2f44 < _0x395e05.length; _0x1a2f44++) {
            await _0xd55ded.type(_0x395e05[_0x1a2f44], {
              delay: 10 + Math.random() * 100
            });
            await _0x48b5bb.waitForTimeout(10 + Math.random() * 90);
          }
          await _0x48b5bb.waitForTimeout(200 + Math.random() * 500);
        } else {
          await sendWss([{
            type: "显示提示",
            value: "描述"
          }, {
            type: "鼠标移动2",
            value: _0x37c22d.x + "," + _0x37c22d.y,
            value2: _0x20596e
          }, {
            type: "鼠标点击2",
            value2: _0x5c39be,
            before_sleep: exports.getRandomNumber(200, 400)
          }, {
            type: "剪贴板_写入",
            value: _0x299b06
          }, {
            type: "键盘操作",
            value: "^v",
            before_sleep: exports.getRandomNumber(200, 400)
          }]);
        }
      }
    }
  }
  let _0x148263 = false;
  if (_0x43f28b["操作_申诉原因选择"]) {
    await new Promise(_0x274edf => setTimeout(_0x274edf, 300));
    let _0x3b4b06 = null;
    _0x140d9c ? (console.log("原因选择1"), _0x3b4b06 = await myLocator(_0x48b5bb, "input.IPT_input_5-165-0", true, false), console.log("原因选择1__"), !_0x3b4b06 && (_0x3b4b06 = await myLocator(_0x48b5bb, "input[placeholder=\"未收到退货\"][type=\"text\"]"))) : (_0x3b4b06 = await myLocator(_0x48b5bb, "input.CSD_input_5-114-0"), !_0x3b4b06 && (_0x3b4b06 = await myLocator(_0x48b5bb, "input[placeholder=\"请选择\"][type=\"text\"]")));
    const _0x3a90d5 = await _0x3b4b06.boundingBox();
    _0x43f28b["操作_校正"] && _0x43f28b["操作_申诉原因选择偏移"] && (_0xa19510 = _0x43f28b["操作_申诉原因选择偏移"], console.log("下来选择移动偏移off:", _0xa19510));
    const _0x2da40e = getClickPostion(_0x14937d, _0x3a90d5, _0xa19510, _0x3e85c7),
      _0x38a041 = Math.floor(Math.random() * 61) - 30;
    await sendWss([{
      type: "鼠标移动2",
      value: _0x2da40e.x + "," + _0x2da40e.y,
      value2: _0x20596e
    }, {
      type: "鼠标点击2",
      value2: _0x5c39be,
      before_sleep: exports.getRandomNumber(200, 400)
    }]);
    let _0x2e8789 = await _0x48b5bb.locator("div[data-testid=\"beast-core-portal-main\"]"),
      _0x32bee8 = await _0x2e8789.locator("ul li"),
      _0x47757e = await _0x32bee8.count(),
      _0x5e462c = false,
      _0x8b25f8 = -1;
    _0xcfd73.need_reason_match;
    for (let _0x574e58 = 0; _0x574e58 < _0x47757e; _0x574e58++) {
      let _0x1cc1ab = await _0x32bee8.nth(_0x574e58).innerText();
      _0x1cc1ab == "退货运费" && (_0x5e462c = true);
      if (_0xcfd73["申诉原因s"]) {
        for (let _0x8b71a4 = 0; _0x8b71a4 < _0xcfd73["申诉原因s"].length; _0x8b71a4++) {
          const _0x36054d = _0xcfd73["申诉原因s"][_0x8b71a4];
          _0x36054d == _0x1cc1ab && (_0x8b25f8 = _0x574e58);
        }
      } else {
        _0xcfd73["申诉原因"] && _0x1cc1ab == _0xcfd73["申诉原因"] && (_0x8b25f8 = _0x574e58);
      }
    }
    console.log("下拉选择框项数:" + _0x47757e + "个 申诉原因:" + _0xcfd73["申诉原因"], _0x8b25f8);
    if (_0xcfd73.only_apply_shipping_fee || _0x5e462c) {
      let _0x24b2cf = 2;
      if (_0x8b25f8 > 0) {
        _0x24b2cf = _0x8b25f8;
      }
      if (_0x43f28b["操作_校正"] && _0x43f28b["操作_申诉原因选择左侧偏移"]) {
        _0xa19510 = getAllOffPoint(_0x43f28b["操作_申诉原因选择左侧偏移"]);
      }
      let _0xad1601 = (_0x2da40e.bottom_ori + _0xa19510.y + 28 * (_0x24b2cf + 1)) * _0x3e85c7;
      await sendWss([{
        type: "鼠标移动2",
        value: _0x2da40e.left_ori + _0x3a90d5.width / 4 + _0x38a041 + "," + _0xad1601,
        value2: _0x20596e
      }, {
        type: "鼠标点击2",
        value2: _0x5c39be,
        before_sleep: exports.getRandomNumber(200, 400),
        after_sleep: 100
      }]);
      if (_0x43f28b["操作_校正"] && _0x43f28b["操作_申诉原因选择右侧偏移"]) {
        _0xa19510 = getAllOffPoint(_0x43f28b["操作_申诉原因选择右侧偏移"]);
      }
      await sendWss([{
        type: "鼠标移动2",
        value: _0x2da40e.left_ori + _0x3a90d5.width * _0x3e85c7 + _0x38a041 + "," + (_0x2da40e.bottom_ori * _0x3e85c7 + _0xa19510.y + 28 * _0x3e85c7),
        value2: _0x20596e
      }, {
        type: "鼠标点击2",
        value2: _0x5c39be,
        before_sleep: exports.getRandomNumber(200, 400),
        after_sleep: 100
      }]);
    } else {
      let _0xf1ffa2 = _0x140d9c ? 2 : 4;
      if (_0x47757e < 4) {
        _0xf1ffa2 = _0x47757e;
      }
      _0x8b25f8 > -1 && _0xcfd73.need_reason_match && (_0xf1ffa2 = _0x8b25f8 + 1);
      if (_0x43f28b["操作_校正"] && _0x43f28b["操作_申诉原因选择单列偏移"]) {
        _0xa19510 = getAllOffPoint(_0x43f28b["操作_申诉原因选择单列偏移"]);
      }
      await sendWss([{
        type: "鼠标移动2",
        value: _0x2da40e.left_ori + _0x3a90d5.width / 4 + _0x38a041 + "," + (_0x2da40e.bottom_ori * _0x3e85c7 + _0xa19510.y + 28 * _0xf1ffa2 * _0x3e85c7),
        value2: _0x20596e
      }, {
        type: "鼠标点击2",
        value2: _0x5c39be,
        before_sleep: exports.getRandomNumber(200, 400),
        after_sleep: 100
      }]);
    }
    _0x148263 = true;
  }
  if (_0x2c750d && !_0x140d9c) {
    console.log("❌价额输入框无内容中断return" + new Date());
    return;
  }
  let _0x4bf7b4 = false;
  if (_0x43f28b["操作_图片填充"] && _0x148263) {
    console.log("操作_图片填充");
    await new Promise(_0x561a7f => setTimeout(_0x561a7f, 300));
    await sendWss([{
      type: "显示提示",
      value: "图片"
    }, {
      type: "鼠标滚动",
      value: "-100"
    }]);
    if (_0x147e83.length > 0) {
      for (let _0x33ab91 = 0; _0x33ab91 < _0x147e83.length; _0x33ab91++) {
        const _0x5e308e = _0x147e83[_0x33ab91];
        let _0x31645a = null;
        if (_0x5e308e.name == "copy2clip") {
          await sendWss([{
            type: "剪贴板_写入",
            value: _0x5e308e.filePath
          }]);
        } else {
          if (_0x5e308e.name == "视频") {
            let _0x311149 = await myLocator(_0x48b5bb, ".Beast__1A81-", false, true);
            const _0x7b683b = await _0x311149.boundingBox();
            _0xa19510 = "";
            if (_0x43f28b["选择器"] && _0x43f28b["选择器"]["视频上传"]) {
              _0x31645a = await myLocator(_0x48b5bb, _0x43f28b["选择器"]["视频上传"], false, true);
              if (!_0x31645a || _0x31645a.length == 0) {
                console.log("选择器1未生效:");
              }
            }
            if (!_0x31645a || _0x31645a.length == 0) {
              if (_0x43f28b["选择器"] && _0x43f28b["选择器"]["视频上传2"]) {
                _0x31645a = await myLocator(_0x48b5bb, _0x43f28b["选择器"]["视频上传2"], false, true);
                if (!_0x31645a || _0x31645a.length == 0) {
                  console.log("选择器1未生效:");
                }
              }
            }
            if (!_0x31645a || _0x31645a.length == 0) {
              console.log("没有找到" + _0x5e308e.name + "选择器..." + new Date());
              break;
            }
          } else {
            if (_0x43f28b["选择器"] && _0x43f28b["选择器"]["图片上传"]) {
              _0x31645a = await myLocator(_0x48b5bb, _0x43f28b["选择器"]["图片上传"]);
              if (!_0x31645a || _0x31645a.length == 0) {
                console.log("选择器1未生效:");
              }
            }
            if (!_0x31645a || _0x31645a.length == 0) {
              if (_0x43f28b["选择器"] && _0x43f28b["选择器"]["图片上传2"]) {
                _0x31645a = await myLocator(_0x48b5bb, _0x43f28b["选择器"]["图片上传2"]);
                if (!_0x31645a || _0x31645a.length == 0) {
                  console.log("选择器1未生效:");
                }
              }
            }
          }
        }
        if (!_0x31645a || _0x31645a.length == 0) {
          console.log("没有找到" + _0x5e308e.name + "上传控件..." + new Date());
          break;
        }
        const _0x11faad = await _0x31645a.first(),
          _0x509a3a = await _0x11faad.boundingBox();
        if (_0x43f28b["操作_校正"] && _0x43f28b["操作_图片填充偏移"]) {
          _0xa19510 = getAllOffPoint(_0x43f28b["操作_图片填充偏移"]);
        }
        _0x4bf7b4 = true;
      }
    }
    await sendWss([{
      type: "关闭窗口",
      value: ""
    }]);
  }
  let _0x1065ac = false;
  if (_0x43f28b["操作_提交"] && _0x4bf7b4) {
    do {
      let _0x122faf = await myLocator(_0x48b5bb, "div[data-testid=\"beast-core-progress\"]");
      if (_0x122faf) {
        await _0x48b5bb.waitForTimeout(10000);
      } else {
        console.log("未检测到上传进度条，准备提交。");
        break;
      }
    } while (true);
    console.log("操作_提交", new Date());
    if (_0x140d9c) {
      for (let _0x51e0aa = 0; _0x51e0aa < 20; _0x51e0aa++) {
        await new Promise(_0x2825a6 => setTimeout(_0x2825a6, 3000));
        console.log("3s/60s:操作_提交前检测图片上传:" + (_0x51e0aa + 1));
        const _0x2cbfd4 = await myLocator(_0x48b5bb, "div.TBL_itemLoadingStatus_5-165-0");
        if (_0x2cbfd4) {
          continue;
        }
        break;
      }
    }
    await new Promise(_0x186cc0 => setTimeout(_0x186cc0, exports.getRandomNumber(300, 600)));
    const _0x3b29d6 = await myLocator(_0x48b5bb, "button:has-text(\"提交申诉\")");
    if (_0x3b29d6) {
      const _0x539094 = await _0x3b29d6.boundingBox();
      _0x43f28b["操作_校正"] && _0x43f28b["操作_提交偏移"] && (_0xa19510 = getAllOffPoint(_0x43f28b["操作_提交偏移"]));
      const _0x242e4a = getClickPostion(_0x14937d, _0x539094, _0xa19510, _0x3e85c7);
      await sendWss([{
        type: "显示提示",
        value: "提交"
      }, {
        type: "鼠标移动2",
        value: _0x242e4a.x + "," + _0x242e4a.y,
        value2: _0x20596e
      }, {
        type: "鼠标点击2",
        value2: _0x5c39be,
        before_sleep: exports.getRandomNumber(300, 500)
      }]);
      if (_0x3ba01c) {
        await new Promise(_0x538eaf => setTimeout(_0x538eaf, 300));
        const _0x5cb288 = await myLocator(_0x48b5bb, "button:has-text(\"继续提交\")");
        if (_0x5cb288) {
          const _0x106228 = await _0x5cb288.boundingBox();
          if (_0x43f28b["操作_校正"] && _0x43f28b["操作_点继续提交偏移"]) {
            _0xa19510 = getAllOffPoint(_0x43f28b["操作_点继续提交偏移"]);
          }
          const _0x33dbff = getClickPostion(_0x14937d, _0x106228, _0xa19510, _0x3e85c7);
          await sendWss([{
            type: "显示提示",
            value: "继续提交"
          }, {
            type: "鼠标移动2",
            value: _0x33dbff.x + "," + _0x33dbff.y,
            value2: _0x20596e
          }, {
            type: "鼠标点击2",
            value2: _0x5c39be,
            before_sleep: exports.getRandomNumber(300, 500)
          }]);
        }
      }
      _0x1065ac = true;
    }
  }
  if (_0x43f28b["手动提交申诉验证码过检"]) {
    const _0x2e3540 = await myLocator(_0x48b5bb, "button:has-text(\"提交申诉\")");
    _0x2e3540 && (console.log("添加监控提交申诉事件"), await _0x2e3540.addEventListener("click", async () => {
      await exports.checkResult(_0x48b5bb, _0x43f28b, _0x14937d, _0x3e85c7, _0x5be85f);
    }));
  }
  if (_0x43f28b["封控验证检测"] && _0x1065ac) {
    console.log("A封控验证检测开始===", new Date());
    let _0x229972 = await exports.checkResult(_0x48b5bb, _0x43f28b, _0x14937d, _0x3e85c7, _0x5be85f);
    if (_0x229972.deny) {
      logHelper.deny_fire_process("申诉", _0x5be85f.data.mall_id);
      await exports.applayLog(_0x5be85f, "申诉", "封控");
      console.log("ffffff");
      try {
        await _0x48b5bb.close();
        await _0x41d125.close();
      } catch (_0x22c0e2) {}
      return {
        success: false,
        deny: true
      };
    }
    !_0x229972.success && !_0x229972.skip && (console.log("不跳过未成功A:", _0x229972, new Date()), _0x229972 = await exports.checkResult(_0x48b5bb, _0x43f28b, _0x14937d, _0x3e85c7, _0x5be85f), console.log("不跳过未成功B:", _0x229972));
    console.log("申诉结果resultFlag:", _0x229972);
    if (_0x229972.success) {
      if (_0x43f28b["申诉完成关闭详情页"]) {
        await _0x48b5bb.close();
      }
      await exports.applayLog(_0x5be85f, "申诉", "申诉完成");
    } else {
      if (_0x229972.skip) {
        if (_0x43f28b["申诉完成关闭详情页"]) {
          await _0x48b5bb.close();
        }
        await exports.applayLog(_0x5be85f, "申诉", "跳过");
      } else {
        if (_0x43f28b["申诉失败关闭详情页"]) {
          await _0x48b5bb.close();
        }
      }
    }
    console.log("封控验证检测结束===", new Date());
  }
  return {
    success: true,
    reasonType: _0xcfd73["申诉原因"],
    refundAmount: _0xcfd73.refundAmount,
    receiveAmount: _0xcfd73.receiveAmount,
    captures: _0x147e83,
    reasonDesc: _0xcfd73["申诉描述"],
    applayBtnRect: _0x4dc211,
    browserSize: _0x531748
  };
};
exports.checkResult = async function (_0x875170, _0xd35fbf, _0x40012a, _0x418aac, _0x58704f) {
  const _0x5a308e = _0x58704f.data,
    _0x150846 = _0x5a308e.assistData,
    _0xd4ff27 = _0x150846.applyForm,
    _0x22ce04 = _0xd4ff27.apply_speedRefund_fee;
  let _0x45bd0e = false;
  let _0xb31e83 = false;
  let _0x2648c1 = 0;
  const _0x2418a3 = _0xd35fbf["封控验证检测检测时间"],
    _0xe6389c = _0xd35fbf["操作_移动倍数"] ? _0xd35fbf["操作_移动倍数"] : "1",
    _0x26cf55 = _0xd35fbf["操作_鼠标点击模式"] ? _0xd35fbf["操作_鼠标点击模式"] : "";
  let _0x3ec6bf = false,
    _0x401fdb = false,
    _0x4a32ba = false;
  while (!_0x45bd0e && _0x2648c1 < _0x2418a3) {
    await new Promise(_0x1b3070 => setTimeout(_0x1b3070, 1000));
    _0x2648c1 += 1000;
    if (!_0x22ce04) {
      const _0x178d8c = await myLocator(_0x875170, "button:has-text(\"继续申诉\")");
      if (_0x178d8c) {
        console.log("✅检测到申诉成功:");
        _0xb31e83 = true;
        break;
      }
    }
    if (_0x22ce04) {
      let _0x433eba = await exports.extractAppealDetails(_0x875170);
      if (_0x433eba.jsAppeal) {
        _0xb31e83 = true;
        break;
      }
    }
    if (_0xd35fbf["封控禁申识别"]) {
      const _0x2ef77a = _0xd35fbf["选择器"]["封控禁申识别"] ? _0xd35fbf["选择器"]["封控禁申识别"] : "span:has-text(\"拼多多争议处理规则\")",
        _0x5e090e = await myLocator(_0x875170, _0x2ef77a);
      console.log(_0x5e090e);
      if (_0x5e090e) {
        return {
          success: false,
          skip: true,
          deny: true
        };
      }
    }
    const _0xcb835 = await myLocator(_0x875170, "#captchaInput"),
      _0x468b87 = await myLocator(_0x875170, "#slide-button");
    if (_0xcb835) {
      _0x45bd0e = true;
      const _0x4372b9 = _0x58704f.data.yzm_jm_url;
      if (!_0x4372b9) {
        console.log("无验证码识别接口");
        break;
      }
      let _0x4aacf0 = null,
        _0x21f284 = 0,
        _0x2efd73 = 5;
      do {
        _0x2efd73++;
        const _0x2a12ec = await myLocator(_0x875170, "div.captcha-source img");
        let _0x2d840f = await _0x2a12ec.getAttribute("src");
        _0x2d840f = _0x2d840f.replace("data:image/png;base64,", "");
        let _0x34c2e1 = _0x2d840f.length,
          _0x42a6fb = _0xd35fbf["验证码重试限制"] && _0x34c2e1 < _0xd35fbf["验证码重试限制"],
          _0xca7c39 = {
            image: _0x2d840f
          };
        _0x42a6fb ? (console.log("识别过滤-验证码重试限制", _0xd35fbf["验证码重试限制"]), _0x4aacf0 = null) : (_0x4aacf0 = await common_fetch(_0x4372b9, _0xca7c39), console.log("222", _0x4aacf0, _0x4aacf0.res, !_0x4aacf0.res));
        if (_0x42a6fb || _0x4aacf0 && (!_0x4aacf0.res || _0x4aacf0.res && _0x4aacf0.res.length < 4)) {
          console.log("验证码异常......");
          const _0x1281a8 = await myLocator(_0x875170, "#captchaImg");
          let _0x3f1c4f = {
            x: 0,
            y: 0
          };
          if (_0xd35fbf["操作_校正"] && _0xd35fbf["操作_验证码刷新偏移"]) {
            _0x3f1c4f = getAllOffPoint(_0xd35fbf["操作_验证码刷新偏移"]);
          }
          const _0x45cd05 = await _0x1281a8.boundingBox(),
            _0x5f3551 = getClickPostion(_0x40012a, _0x45cd05, _0x3f1c4f, _0x418aac, true);
          getRandomNumber = function (_0x2c5f37, _0x3df0d8) {
            return Math.floor(Math.random() * (_0x3df0d8 - _0x2c5f37 + 1)) + _0x2c5f37;
          };
          await sendWss([{
            type: "鼠标移动2",
            value: _0x5f3551.center_x + "," + _0x5f3551.center_y,
            value2: _0xe6389c
          }, {
            type: "鼠标点击2",
            value2: _0x26cf55,
            before_sleep: getRandomNumber(300, 500)
          }]);
          console.log("刷新完成......" + ++_0x21f284 + "/" + _0x2efd73);
          await new Promise(_0x2231bb => setTimeout(_0x2231bb, 1500));
          _0x4aacf0 = null;
        }
        if (_0x21f284 > _0x2efd73) {
          console.log("超最大次数-break");
          break;
        }
        if (_0x4aacf0 && _0x4aacf0.res) {
          break;
        }
      } while (true);
      if (_0x4aacf0 && _0x4aacf0.res) {
        const _0x2e6092 = await _0xcb835.boundingBox();
        let _0x1f29d1 = {
          x: 0,
          y: 0
        };
        if (_0xd35fbf["操作_校正"] && _0xd35fbf["操作_验证码输入框点击偏移"]) {
          _0x1f29d1 = getAllOffPoint(_0xd35fbf["操作_验证码输入框点击偏移"]);
        }
        const _0x400ad9 = getClickPostion(_0x40012a, _0x2e6092, _0x1f29d1, _0x418aac);
        getRandomNumber = function (_0x24592a, _0x226e10) {
          return Math.floor(Math.random() * (_0x226e10 - _0x24592a + 1)) + _0x24592a;
        };
        if (_0xd35fbf["操作_验证码填写鼠标模式"]) {
          await sendWss([{
            type: "鼠标移动2",
            value: _0x400ad9.x + "," + _0x400ad9.y,
            value2: _0xe6389c
          }, {
            type: "鼠标点击2",
            value2: _0x26cf55,
            before_sleep: getRandomNumber(300, 500)
          }, {
            type: "剪贴板_写入",
            value: _0x4aacf0.res
          }]);
          await sendWss([{
            type: "显示提示",
            value: "鼠标右键"
          }, {
            type: "鼠标右键点击菜单",
            before_sleep: exports.getRandomNumber(200, 400),
            value: "*粘贴"
          }]);
        } else {
          if (_0xd35fbf["操作_验证码填写输入模式"]) {
            await sendWss([{
              type: "鼠标移动2",
              value: _0x400ad9.x + "," + _0x400ad9.y,
              value2: _0xe6389c
            }, {
              type: "鼠标点击2",
              value2: _0x26cf55,
              before_sleep: getRandomNumber(300, 500)
            }]);
            await sendWss([{
              type: "切换输入法",
              value: "en-US"
            }]);
            const _0x589b35 = _0x4aacf0.res;
            for (let _0x422c88 = 0; _0x422c88 < _0x589b35.length; _0x422c88++) {
              const _0x5c5e97 = _0x589b35[_0x422c88];
              await sendWss([{
                type: "键盘操作",
                value: _0x5c5e97,
                before_sleep: getRandomNumber(50, 150)
              }]);
              (_0x422c88 + 1 < _0x589b35.length && /\d/.test(_0x589b35[_0x422c88 + 1]) || _0xd35fbf["操作_验证码填写输入模式逐字回车"]) && (await sendWss([{
                type: "键盘操作",
                value: "{ENTER}",
                before_sleep: getRandomNumber(50, 150)
              }]));
            }
            if (_0x589b35.length > 0) {
              const _0x427ad8 = _0x589b35[_0x589b35.length - 1];
              !/\d/.test(_0x427ad8) && (await sendWss([{
                type: "键盘操作",
                value: "{ENTER}",
                before_sleep: getRandomNumber(50, 150)
              }]));
            }
          } else {
            if (_0xd35fbf["操作_填写pw赋值模式"]) {
              await sendWss([{
                type: "鼠标移动2",
                value: _0x400ad9.x + "," + _0x400ad9.y,
                value2: _0xe6389c
              }, {
                type: "鼠标点击2",
                value2: _0x26cf55,
                before_sleep: getRandomNumber(300, 500)
              }]);
              await _0x875170.waitForTimeout(100 + Math.random() * 200);
              const _0x5edb68 = _0x4aacf0.res;
              for (let _0x34f010 = 0; _0x34f010 < _0x5edb68.length; _0x34f010++) {
                await _0xcb835.type(_0x5edb68[_0x34f010], {
                  delay: 300 + Math.random() * 200
                });
                await _0x875170.waitForTimeout(10 + Math.random() * 90);
              }
              await _0x875170.waitForTimeout(200 + Math.random() * 500);
            } else {
              await sendWss([{
                type: "鼠标移动2",
                value: _0x400ad9.x + "," + _0x400ad9.y,
                value2: _0xe6389c
              }, {
                type: "鼠标点击2",
                value2: _0x26cf55,
                before_sleep: getRandomNumber(300, 500)
              }, {
                type: "剪贴板_写入",
                value: _0x4aacf0.res
              }, {
                type: "键盘操作",
                value: "^v",
                before_sleep: getRandomNumber(2000, 3000)
              }]);
            }
          }
        }
      } else {
        console.log("无验证码数据返回");
      }
      break;
    } else {
      if (_0x468b87) {
        _0x401fdb = true;
        if (_0xd35fbf["提交滑块检测"]) {
          let _0x1e3528 = await checkSliderProcess(_0x875170, _0xd35fbf, _0x40012a, _0x418aac, _0x58704f);
          if (_0x1e3528.hasDoSlide) {
            _0x401fdb = false;
            await _0x875170.waitForTimeout(1000);
            let _0x13b11e = await myLocator(_0x875170, "#slide-captcha-dialog");
            if (_0x13b11e) {
              console.log("2二次检测处理........");
              let _0x1576d6 = await checkSliderProcess(_0x875170, _0xd35fbf, _0x40012a, _0x418aac, _0x58704f);
              _0x4a32ba = _0x1576d6.hasDoSlide;
            } else {
              _0x4a32ba = true;
            }
          } else {
            console.log(_0x1e3528, "跳出===break-不再多次处理");
          }
          break;
        } else {
          console.log("跳出===break");
          break;
        }
      }
    }
  }
  if (_0x401fdb && !_0x4a32ba) {
    console.log("❌ ❌ ❌ 滑块-检测-跳过");
    return {
      skip: true
    };
  }
  if (!_0xb31e83) {
    let _0xbc579b;
    _0x3ec6bf = false;
    for (let _0x26d463 = 0; _0x26d463 < 5; _0x26d463++) {
      console.log("3二次检测:" + (_0x26d463 + 1) + "/5");
      await new Promise(_0x3b30e4 => setTimeout(_0x3b30e4, 1000));
      _0xbc579b = await myLocator(_0x875170, "button:has-text(\"继续申诉\")");
      if (_0xbc579b) {
        console.log("3✅二次检测到申诉成功:");
        _0xb31e83 = true;
        break;
      }
      if (_0x45bd0e) {
        const _0x5197db = await _0x875170.locator("body").innerText();
        if (_0x5197db.includes("请求处理中")) {
          _0x3ec6bf = true;
          continue;
        } else {
          if (_0x3ec6bf) {
            console.log("✅✅✅✅请求处理中提示消失了!!!!=================");
            _0xb31e83 = true;
            break;
          }
        }
      }
    }
  }
  return {
    success: _0xb31e83,
    skip: false
  };
};
async function checkSliderProcess(_0x45a112, _0x375202, _0x266c7d, _0xdee70b, _0x54b461) {
  let _0x542c18 = false;
  const _0xb7ea97 = _0x54b461.data.hk_jm_url;
  if (!_0xb7ea97 || _0xb7ea97.length == 0) {
    console.log("无滑块识别接口");
    return {
      hasDoSlide: _0x542c18
    };
  }
  await _0x45a112.waitForTimeout(1000);
  console.log("滑块_识别");
  const _0x1d8ae2 = _0x375202["操作_移动倍数"] ? _0x375202["操作_移动倍数"] : "1";
  let _0x5f57da = _0x45a112.locator("div.slider-img ");
  const _0x31509f = _0x5f57da ? await _0x5f57da.screenshot() : null;
  const _0x223be1 = _0x31509f ? _0x31509f.toString("base64") : null;
  const _0x161d62 = _0x223be1;
  let _0x5a270c = await common_fetch(_0xb7ea97, {
    image: _0x161d62
  });
  (!_0x5a270c || !_0x5a270c.res) && console.log("结果:", _0x5a270c);
  console.log("ppp:", _0x5a270c.res[0]);
  let _0x59f475 = _0x5a270c.res[0] - (Math.floor(Math.random() * 3) + 21);
  const _0x3ba390 = await myLocator(_0x45a112, "#slide-button");
  if (_0x3ba390) {
    const _0xfa853a = await _0x3ba390.boundingBox();
    let _0x2fa445 = "";
    if (_0x375202["操作_校正"] && _0x375202["操作_滑块偏移"]) {
      _0x2fa445 = getAllOffPoint(_0x375202["操作_滑块偏移"]);
    }
    let _0x1a4b42 = getClickPostion(_0x266c7d, _0xfa853a, _0x2fa445, _0xdee70b, true),
      _0x1083de = _0x1a4b42.center_x + (Math.floor(Math.random() * 7) - 3),
      _0x9736fc = _0x1a4b42.center_y + (Math.floor(Math.random() * 7) - 3),
      _0x569e7a = _0x1083de + _0x59f475,
      _0x45ab8b = _0x9736fc + (Math.floor(Math.random() * 7) - 3);
    const _0x2f74a5 = "20";
    await sendWss([{
      type: "显示提示",
      value: "提交"
    }, {
      type: "鼠标移动2",
      value: _0x1083de + "," + _0x9736fc,
      value2: _0x1d8ae2
    }, {
      type: "鼠标按下",
      before_sleep: 300
    }, {
      type: "鼠标移动先快后慢",
      value: _0x569e7a + "," + _0x45ab8b,
      value2: _0x2f74a5
    }, {
      type: "鼠标松开",
      before_sleep: 300
    }]);
    await _0x45a112.waitForTimeout(2000);
    _0x542c18 = true;
  } else {
    console.log("未识别到滑动条");
  }
  return {
    hasDoSlide: _0x542c18
  };
}
exports.applayLog = async function (_0x14c795, _0x43f32e, _0x23fae8, _0x22fe68) {
  const _0x502393 = _0x14c795.extInfo,
    _0x45b344 = configHelper.getExtConfig(),
    _0x466007 = _0x45b344.server ? _0x45b344.server : _0x502393.server_url,
    _0x3979e0 = _0x45b344.b_server ? _0x45b344.b_server : _0x502393.b_server_url;
  const _0x37d3fd = _0x45b344.log_server ? _0x45b344.log_server : _0x502393.log_server_url,
    _0x377c46 = _0x14c795.data.mall_id;
  const _0x27ae8e = _0x14c795.data.appealSubType;
  let _0xc2a5d7 = _0x14c795.data.orderSn;
  logHelper.addApplyLogDone(null, _0x377c46, _0xc2a5d7, _0x27ae8e);
  try {} catch (_0x5d7ad3) {
    console.log("日志提交错误");
    console.log(_0x5d7ad3);
  }
};
exports.checkPageAllDataLoadDone = async function (_0x2e970c) {
  do {
    await _0x2e970c.waitForTimeout(300);
    const _0x1a9382 = await myLocator(_0x2e970c, "button:has-text(\"复制\")");
    if (_0x1a9382) {
      break;
    } else {
      console.log("检测收货信息复制按钮");
    }
  } while (true);
  console.log("checkPageAllDataLoadDone检测收货信息复制按钮✅");
  return true;
};
exports.checkPageStatus = async function (_0x3b7eef) {
  let _0x481c1c = "";
  let _0x72a33d = "span[class=\"Beast__2PN3j\"]",
    _0x3c2574 = null;
  try {
    _0x3c2574 = await myLocator(_0x3b7eef, _0x72a33d);
  } catch (_0xdad4bb) {
    console.log(_0xdad4bb);
    console.log("checkPageStatus:::::::" + _0xdad4bb.message);
    return {
      apply_status: "申诉失败"
    };
  }
  !_0x3c2574 && (_0x72a33d = "span[class=\"Beast__3DHNQ\"]", _0x3c2574 = await myLocator(_0x3b7eef, _0x72a33d));
  !_0x3c2574 && (_0x72a33d = "span[class=\"Beast__2aV3Y\"]", _0x3c2574 = await myLocator(_0x3b7eef, _0x72a33d));
  if (_0x3c2574) {
    try {
      const _0xdbe62 = await _0x3c2574.textContent();
      _0x481c1c = _0xdbe62;
    } catch (_0xaf5df7) {
      if ((await myLocatorCount(_0x3b7eef, _0x72a33d)) > 1) {
        console.log("多个状态检测");
        _0x3c2574 = await myLocator(_0x3b7eef, _0x72a33d, true, false);
        _0x481c1c = await _0x3c2574.textContent();
      } else {
        throw _0xaf5df7;
      }
    }
  }
  let _0x5eb848 = false;
  if (_.isEmpty(_0x481c1c) && false) {
    let _0xeab373 = await myLocator(_0x3b7eef, "label:has-text(\"消费者已支付退货运费\")");
    _0x5eb848 = _0xeab373 != null;
    _0x5eb848 = false;
  }
  return {
    user_has_payed_shipping_fee: _0x5eb848,
    apply_status: _0x481c1c
  };
};
exports.extractAppealDetails = async function (_0x17ebca) {
  let _0x4b3134 = [];
  try {
    const _0x45b9eb = await _0x17ebca.locator(".after-detail-container").all();
    for (let _0x44a2db = 0; _0x44a2db < _0x45b9eb.length; _0x44a2db++) {
      const _0x4ecff3 = _0x45b9eb[_0x44a2db];
      try {
        const _0x26f347 = _0x4ecff3.locator(".after-detail-title"),
          _0x27c92c = await _0x26f347.count();
        let _0x4639b0 = "";
        if (_0x27c92c > 0) {
          const _0x3386ce = _0x26f347.nth(0);
          _0x4639b0 = await _0x3386ce.textContent();
        }
        const _0x13d261 = _0x4ecff3.locator(".after-detail-content"),
          _0x5a5ae8 = await _0x13d261.count();
        for (let _0x3b48fe = 0; _0x3b48fe < _0x5a5ae8; _0x3b48fe++) {
          const _0x5b4d68 = _0x13d261.nth(_0x3b48fe),
            _0x9a3826 = _0x5b4d68.locator(".Beast__1WWzs"),
            _0x2b1d5e = await _0x9a3826.count();
          for (let _0x38fad9 = 0; _0x38fad9 < _0x2b1d5e; _0x38fad9++) {
            const _0x2294d3 = _0x9a3826.nth(_0x38fad9);
            let _0x5af2cf = {
              index: _0x44a2db + 1,
              contentIndex: _0x3b48fe + 1,
              beastIndex: _0x38fad9 + 1,
              title: _0x4639b0,
              appealType: "",
              status: "",
              paymentStatus: ""
            };
            const _0x5797c9 = _0x2294d3.locator(".Beast__2ekxv span"),
              _0xf5022e = await _0x5797c9.count();
            if (_0xf5022e > 0) {
              const _0x3a2e67 = _0x5797c9.nth(0);
              _0x5af2cf.appealType = await _0x3a2e67.textContent();
            }
            const _0x13162a = _0x2294d3.locator(".Beast__3DHNQ"),
              _0x31ef8e = await _0x13162a.count();
            if (_0x31ef8e > 0) {
              const _0x192f95 = _0x13162a.nth(0);
              _0x5af2cf.status = await _0x192f95.textContent();
            }
            const _0x12747d = _0x2294d3.locator(".Beast__3TNPk"),
              _0x234baf = await _0x12747d.count();
            if (_0x234baf > 0) {
              const _0x48c80d = _0x12747d.nth(0);
              _0x5af2cf.paymentStatus = await _0x48c80d.textContent();
            }
            if (!_0x5af2cf.status) {
              const _0x32ecf5 = ["span[class=\"Beast__2PN3j\"]", "span[class=\"Beast__3DHNQ\"]", "span[class=\"Beast__2aV3Y\"]"];
              for (const _0x503c59 of _0x32ecf5) {
                const _0x227fcb = _0x2294d3.locator(_0x503c59),
                  _0x597358 = await _0x227fcb.count();
                if (_0x597358 > 0) {
                  const _0x428feb = _0x227fcb.nth(0);
                  _0x5af2cf.status = await _0x428feb.textContent();
                  break;
                }
              }
            }
            (_0x5af2cf.title || _0x5af2cf.appealType || _0x5af2cf.status) && _0x4b3134.push(_0x5af2cf);
          }
          if (_0x2b1d5e === 0) {
            let _0x5e37a4 = {
              index: _0x44a2db + 1,
              contentIndex: _0x3b48fe + 1,
              beastIndex: 0,
              title: _0x4639b0,
              appealType: "",
              status: "",
              paymentStatus: ""
            };
            const _0x71d398 = _0x5b4d68.locator(".Beast__2ekxv span"),
              _0x25b79e = await _0x71d398.count();
            if (_0x25b79e > 0) {
              const _0x4a509a = _0x71d398.nth(0);
              _0x5e37a4.appealType = await _0x4a509a.textContent();
            }
            const _0x2ed796 = _0x5b4d68.locator(".Beast__3DHNQ"),
              _0x251e3c = await _0x2ed796.count();
            if (_0x251e3c > 0) {
              const _0x34d392 = _0x2ed796.nth(0);
              _0x5e37a4.status = await _0x34d392.textContent();
            }
            const _0x4b2853 = _0x5b4d68.locator(".Beast__3TNPk"),
              _0xb840dd = await _0x4b2853.count();
            if (_0xb840dd > 0) {
              const _0x489f41 = _0x4b2853.nth(0);
              _0x5e37a4.paymentStatus = await _0x489f41.textContent();
            }
            if (!_0x5e37a4.status) {
              const _0x3cf8d0 = ["span[class=\"Beast__2PN3j\"]", "span[class=\"Beast__3DHNQ\"]", "span[class=\"Beast__2aV3Y\"]"];
              for (const _0x4668c0 of _0x3cf8d0) {
                const _0x19d95c = _0x5b4d68.locator(_0x4668c0),
                  _0x406ed5 = await _0x19d95c.count();
                if (_0x406ed5 > 0) {
                  const _0x46a10c = _0x19d95c.nth(0);
                  _0x5e37a4.status = await _0x46a10c.textContent();
                  break;
                }
              }
            }
            (_0x5e37a4.title || _0x5e37a4.appealType || _0x5e37a4.status) && _0x4b3134.push(_0x5e37a4);
          }
        }
      } catch (_0x28731e) {
        console.log("提取第 " + (_0x44a2db + 1) + " 个申诉详情时出错:", _0x28731e.message);
      }
    }
  } catch (_0x3c7d32) {
    console.log("提取申诉详情时出错:", _0x3c7d32.message);
  }
  const _0x3849de = _0x4b3134.find(_0x3ba0bf => _0x3ba0bf.appealType === "维权-运费申诉"),
    _0x229e3e = _0x4b3134.find(_0x376c93 => _0x376c93.appealType === "维权-货款申诉");
  const _0x102c36 = _0x4b3134.find(_0x42273c => _0x42273c.appealType === "维权-纠纷退款率申诉");
  const _0x5a4050 = _0x4b3134.find(_0x127e59 => _0x127e59.appealType === "已发货-极速退款申诉");
  return {
    jsAppeal: _0x5a4050,
    pay_has_applyed: _0x229e3e,
    shipping_has_applyed: _0x3849de,
    js_has_applyed: _0x102c36,
    appealDetails: _0x4b3134,
    totalCount: _0x4b3134.length
  };
};
exports.checkAndCloseMaskAd = async function (_0x21d3ad) {
  const _0x1363e1 = await myLocator(_0x21d3ad, "div[data-testid=\"beast-core-modal-mask\"]");
  if (_0x1363e1) {
    const _0x39c986 = await _0x21d3ad.locator("div.close-btn");
    _0x39c986 && (await _0x39c986.click());
  }
};
async function myLocatorCount(_0x4c12bb, _0x5d03cd) {
  const _0x284834 = _0x4c12bb.locator(_0x5d03cd),
    _0x57f16a = await _0x284834.count();
  return _0x57f16a;
}
async function myLocator(_0x8b653c, _0x42c5d1, _0x4e2fe8, _0x4bfa7e) {
  const _0x9b7234 = _0x8b653c.locator(_0x42c5d1);
  const _0x5b7bd2 = await _0x9b7234.count();
  if (_0x5b7bd2 == 0) {
    return null;
  }
  if (_0x5b7bd2 > 1 && _0x4e2fe8) {
    return await _0x8b653c.locator(_0x42c5d1).last();
  }
  if (_0x5b7bd2 > 1 && _0x4bfa7e) {
    return await _0x8b653c.locator(_0x42c5d1).first();
  }
  const _0x1f4658 = await _0x8b653c.locator(_0x42c5d1);
  return _0x1f4658;
}
exports.getRandomNumber = function (_0x4d5000, _0x2db97f) {
  return Math.floor(Math.random() * (_0x2db97f - _0x4d5000 + 1)) + _0x4d5000;
};
function getAllOffPoint(_0x14f694) {
  if (_0x14f694 && typeof _0x14f694 === "string" && /\d+,-?\d+/.test(_0x14f694)) {
    return {
      x: parseFloat(_0x14f694.split(",")[0]),
      y: parseFloat(_0x14f694.split(",")[1])
    };
  }
  return {
    x: 0,
    y: 0
  };
}
function getClickPostion(_0x57d544, _0x3b82b4, _0x1f3933, _0x4ac2b0, _0x28cb8b) {
  if (_0x1f3933 && typeof _0x1f3933 === "string" && /\d+,-?\d+/.test(_0x1f3933)) {
    _0x1f3933 = {
      x: parseFloat(_0x1f3933.split(",")[0]),
      y: parseFloat(_0x1f3933.split(",")[1])
    };
  } else {
    typeof _0x1f3933 === "string" && _0x1f3933.length == 0 && (_0x1f3933 = {
      x: 0,
      y: 0
    });
  }
  const _0x145c42 = _0x28cb8b ? 0 : Math.floor(Math.random() * (_0x3b82b4.width - 20)) + 1;
  const _0x4c4bed = _0x28cb8b ? 0 : Math.floor(Math.random() * (_0x3b82b4.height - 5)) + 5;
  let _0x373fec = _0x57d544.x + _0x3b82b4.x + 8,
    _0x5811c3 = _0x57d544.y + _0x3b82b4.y + 87,
    _0x5cf3a8 = _0x57d544.y + _0x3b82b4.y + _0x3b82b4.height + 87,
    _0x4d9854 = _0x373fec + _0x145c42;
  let _0x812a87 = _0x57d544.y + _0x3b82b4.y + 87 + _0x4c4bed;
  _0x4ac2b0 && (_0x812a87 = _0x812a87 * _0x4ac2b0, _0x4d9854 = _0x4d9854 * _0x4ac2b0, _0x373fec = _0x373fec * _0x4ac2b0, _0x5811c3 = _0x5811c3 * _0x4ac2b0);
  let _0x5b4abb = _0x4d9854 + _0x1f3933.x + _0x3b82b4.width / 2;
  let _0x4192dd = _0x812a87 + _0x1f3933.y + _0x3b82b4.height / 2;
  if (_0x1f3933) {
    return {
      x: parseInt(_0x4d9854 + _0x1f3933.x),
      y: parseInt(_0x812a87 + _0x1f3933.y),
      center_x: _0x5b4abb,
      center_y: _0x4192dd,
      left_ori: _0x373fec,
      top_ori: _0x5811c3,
      bottom_ori: _0x5cf3a8,
      off_x: _0x1f3933.x,
      off_y: _0x1f3933.y
    };
  }
  return {
    x: parseInt(_0x4d9854),
    y: parseInt(_0x812a87),
    center_x: _0x5b4abb,
    center_y: _0x4192dd,
    left_ori: _0x373fec,
    top_ori: _0x5811c3,
    bottom_ori: _0x5cf3a8,
    off_x: _0x1f3933.x,
    off_y: _0x1f3933.y
  };
}
async function sendWss(_0xd7e42a) {
  const _0x23490b = new Date().getTime() + "";
  var _0xc89a2f = {
    reqId: _0x23490b,
    actions: _.isArray(_0xd7e42a) ? _0xd7e42a : [action]
  };
  let _0x321b1f = dataHelper.getData("config").ass_use_http;
  if (_0x321b1f) {
    await apiHelper.sendAction(JSON.stringify(_0xc89a2f));
    return true;
  }
  let _0x184080 = await wfHelper.send(JSON.stringify(_0xc89a2f));
  if (!_0x184080) {
    _0x184080 = await apiHelper.sendAction(JSON.stringify(_0xc89a2f));
    return false;
  }
  let _0x286364 = null;
  const _0x384765 = new Date().getTime();
  while (new Date().getTime() - _0x384765 < 20000) {
    _0x286364 = await wfHelper.getOperResponse(_0x23490b);
    if (_0x286364) {
      break;
    }
    await new Promise(_0x5f45cb => setTimeout(_0x5f45cb, 1000));
  }
  return _0x286364;
}
async function common_fetch(_0x57d5a4, _0x67aef2) {
  try {
    const _0x3bc739 = await fetch(_0x57d5a4, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x67aef2)
    });
    let _0x274bb6 = await _0x3bc739.json();
    return _0x274bb6;
  } catch (_0x5c75d0) {
    if (_0x5c75d0.message.indexOf("fail") > -1) {
      console.log(_0x57d5a4, _0x5c75d0.message);
      const _0x2f2fbe = await fetch("http://121.196.58.92:5000/reg_alpha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(_0x67aef2)
      });
      let _0x541dd7 = await _0x2f2fbe.json();
      return _0x541dd7;
    }
  }
  return null;
}