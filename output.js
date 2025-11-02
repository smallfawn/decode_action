//Sun Nov 02 2025 04:55:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
const _0x17ed4e = require("moment"),
  _0x5172ed = require("lodash"),
  {
    chromium: _0x7df758
  } = require("playwright"),
  _0x5bb99e = require("./mdd102.js"),
  _0x1eb610 = require("./../mdd789.js"),
  _0x2d129d = require("./mdd103.js"),
  _0xbdf4eb = require("./mdd104.js"),
  _0x483ec4 = require("./mddHelper/mdd202.js");
const _0x4af8fc = require("./mdd107.js"),
  _0x4fa977 = require("./mdd106.js"),
  {
    type: _0x532abc
  } = require("os"),
  {
    log: _0x4250d0
  } = require("util");
exports.closePopWindow = async function (_0x3aab7e) {
  try {
    const _0x553c12 = "i.ImportantList_close__d0eKb.Icon_umd-icon__1b5rm.Icon_umd-icon-close__FDu9I";
    if ((await _0x3aab7e.locator(_0x553c12).count()) > 0) {
      const _0x511387 = _0x3aab7e.locator(_0x553c12);
      (await _0x511387.isVisible()) && (console.log("[mmsDataFetchHelper] 发现并点击关闭弹窗按钮"), await _0x511387.click(), await _0x3aab7e.waitForTimeout(150));
    }
  } catch (_0x268783) {
    console.error("[closePopWindow] 尝试关闭弹窗时发生错误:", _0x268783);
  }
};
exports.getOnLineShops = async function () {
  const _0x246b01 = await _0x1eb610.get_info();
  if (!_0x246b01 || !_0x246b01.newItems) {
    return [];
  }
  const _0x5bdc00 = _0x246b01.newItems.filter(_0x2b3418 => _0x2b3418.config && _0x2b3418.config.wss_port && !_0x2b3418.config.offline);
  return _0x5bdc00;
};
exports.process = async function (_0x31ece7) {
  let _0x18cf12 = null;
  if (_0x31ece7.action == "call_heart") _0x4af8fc.customer_complain_applyStatusChanged();else {
    if (_0x31ece7.action == "customer_complain_delete") {
      _0x2d129d.saveData("申诉/消费者负向体验补偿明细", []);
      let _0x1fc1dd = _0x2d129d.getData("status");
      _0x1fc1dd.customer_complain_unApply_count = 0;
      _0x2d129d.saveData("status", _0x1fc1dd);
      _0x4af8fc.customer_complain_applyStatusChanged();
    } else {
      if (_0x31ece7.action == "customer_complain_sync") try {
        console.log("开始批量同步申诉用消费者负向体验补偿数据...");
        const _0x1abffa = await exports.getOnLineShops();
        if (_0x1abffa.length === 0) return _0x18cf12 = {
          "success": true,
          "message": "没有找到在线的店铺"
        }, _0x18cf12;
        let _0xfce5f9 = 0,
          _0x264b8a = 0;
        _0xbdf4eb.begin_sync("customer_complain_sync");
        let _0x2bd647 = _0x1abffa.length,
          _0x306fcf = 0;
        for (const _0x23bf63 of _0x1abffa) {
          const _0x504018 = _0x23bf63.config.wss_port;
          console.log(++_0x306fcf + "/" + _0x2bd647 + "正在同步店铺 (端口: " + _0x504018 + ")...");
          try {
            await _0x483ec4.cleanTabs(_0x504018);
            const _0x3fd8a8 = await exports.fetch_customer_complain(_0x504018);
            if (_0x3fd8a8) _0xfce5f9++;else _0x264b8a++;
            await _0x483ec4.cleanTabs(_0x504018);
          } catch (_0x5038a6) {
            _0x264b8a++;
            console.error("店铺 " + _0x504018 + " 同步失败:", _0x5038a6);
          }
        }
        console.log("批量同步完成。成功: " + _0xfce5f9 + ", 失败: " + _0x264b8a);
        _0xbdf4eb.end_sync("customer_complain_sync");
        _0xbdf4eb.updateCustomer_complain_unApply_count();
        _0x4af8fc.customer_complain_applyStatusChanged();
        _0x18cf12 = {
          "success": true,
          "message": "批量同步完成。成功: " + _0xfce5f9 + ", 失败: " + _0x264b8a
        };
      } catch (_0x2e389e) {
        _0xbdf4eb.end_sync("customer_complain_sync");
        console.error("批量同步消费者负向体验补偿数据时发生错误:", _0x2e389e);
        _0x18cf12 = {
          "success": false,
          "message": "批量同步失败: " + _0x2e389e.message
        };
      } else {
        if (_0x31ece7.action == "customer_complain_apply_start") {
          let _0x2c16a2 = _0x2d129d.getData("control_status");
          if (_0x5172ed.isEmpty(_0x2c16a2)) _0x2c16a2 = {};
          let _0x13b460 = false;
          !_0x2c16a2.customer_complain_apply && (_0x13b460 = true);
          _0x2c16a2.customer_complain_apply = true;
          _0x2d129d.saveData("control_status", _0x2c16a2);
          _0x31ece7.operSteps && _0x2d129d.saveData("operSteps负体验", _0x31ece7.operSteps);
          _0x4af8fc.customer_complain_applyStatusChanged();
          if (_0x13b460) {
            if (_0x2c16a2.customer_complain_sync_status != 1) {
              let _0x4181f0 = _0x2d129d.getData("申诉/消费者负向体验补偿明细") || [];
              if (_0x4181f0.length == 0) {
                await exports.process({
                  "action": "customer_complain_sync"
                });
              }
            }
          }
          _0xbdf4eb.initSyncStatus();
        } else {
          if (_0x31ece7.action == "customer_complain_apply_stop") {
            let _0x33727b = _0x2d129d.getData("control_status");
            if (_0x5172ed.isEmpty(_0x33727b)) _0x33727b = {};
            let _0x50dec7 = false;
            _0x33727b.customer_complain_apply && (_0x50dec7 = true);
            _0x33727b.customer_complain_apply = false;
            _0x2d129d.saveData("control_status", _0x33727b);
            _0x4af8fc.customer_complain_applyStatusChanged();
          } else {
            if (_0x31ece7.action == "apply_delete") {} else {
              if (_0x31ece7.action == "applyed_sync") {
                try {
                  console.log("开始批量同步已申诉数据...");
                  const _0x387875 = await exports.getOnLineShops();
                  if (_0x387875.length === 0) return _0x18cf12 = {
                    "success": true,
                    "message": "没有找到在线的店铺"
                  }, _0x18cf12;
                  console.log("找到 " + _0x387875.length + " 个在线店铺，开始逐个同步...");
                  let _0x24a949 = 0,
                    _0x43b2ca = 0;
                  _0xbdf4eb.begin_sync("applyed_sync");
                  let _0x6ba3d9 = _0x387875.length,
                    _0x5ae10f = 0;
                  for (const _0x553300 of _0x387875) {
                    const _0x1871f1 = _0x553300.config.wss_port;
                    let _0x4f777e = null,
                      _0x1472fd = null;
                    _0x553300.config && _0x553300.config.mall_info && _0x553300.config.mall_info.mall_id && (_0x4f777e = _0x553300.config.mall_info.mall_id, _0x1472fd = _0x553300.config.mall_info.mall.mall_name);
                    console.log(++_0x5ae10f + "/" + _0x6ba3d9 + "正在同步店铺 (端口: " + _0x1871f1 + ")...");
                    try {
                      await _0x483ec4.cleanTabs(_0x1871f1);
                      await exports.fetch_applyed(_0x1871f1, _0x4f777e, _0x1472fd, true);
                      await _0x483ec4.cleanTabs(_0x1871f1);
                      _0x24a949++;
                      console.log("店铺 " + _0x1871f1 + " 同步成功");
                    } catch (_0x1c2272) {
                      _0x43b2ca++;
                      console.error("店铺 " + _0x1871f1 + " 同步失败:", _0x1c2272);
                    }
                  }
                  console.log("批量同步完成。成功: " + _0x24a949 + ", 失败: " + _0x43b2ca);
                  _0xbdf4eb.end_sync("applyed_sync");
                  _0x18cf12 = {
                    "success": true,
                    "message": "批量同步完成。成功: " + _0x24a949 + ", 失败: " + _0x43b2ca
                  };
                } catch (_0x2fba46) {
                  console.error("批量同步消费者负向体验补偿数据时发生错误:", _0x2fba46);
                  _0x18cf12 = {
                    "success": false,
                    "message": "批量同步失败: " + _0x2fba46.message
                  };
                }
              } else {
                if (_0x31ece7.action == "only_money_sync") try {
                  console.log("开始批量同步已申诉数据...");
                  const _0x1e02d9 = await exports.getOnLineShops();
                  if (_0x1e02d9.length === 0) {
                    return _0x18cf12 = {
                      "success": true,
                      "message": "没有找到在线的店铺"
                    }, _0x18cf12;
                  }
                  console.log("找到 " + _0x1e02d9.length + " 个在线店铺，开始逐个同步...");
                  let _0x54ae22 = 0,
                    _0xe37d5 = 0;
                  _0xbdf4eb.begin_sync("only_money_sync");
                  let _0x142820 = _0x1e02d9.length,
                    _0xc2917f = 0;
                  for (const _0x16f087 of _0x1e02d9) {
                    const _0x3d7cad = _0x16f087.config.wss_port;
                    console.log(++_0xc2917f + "/" + _0x142820 + "正在同步店铺 (端口: " + _0x3d7cad + ")...");
                    try {
                      await _0x483ec4.cleanTabs(_0x3d7cad);
                      await exports.fetch_only_money_fromAfterSale(_0x3d7cad);
                      await _0x483ec4.cleanTabs(_0x3d7cad);
                      _0x54ae22++;
                      console.log("店铺 " + _0x3d7cad + " 同步成功");
                    } catch (_0x173c47) {
                      _0xe37d5++;
                      console.error("店铺 " + _0x3d7cad + " 同步失败:", _0x173c47);
                    }
                  }
                  console.log("批量同步完成。成功: " + _0x54ae22 + ", 失败: " + _0xe37d5);
                  _0xbdf4eb.end_sync("only_money_sync");
                  _0x18cf12 = {
                    "success": true,
                    "message": "批量同步完成。成功: " + _0x54ae22 + ", 失败: " + _0xe37d5
                  };
                } catch (_0x20ad5a) {
                  console.error("批量同步消费者负向体验补偿数据时发生错误:", _0x20ad5a);
                  _0x18cf12 = {
                    "success": false,
                    "message": "批量同步失败: " + _0x20ad5a.message
                  };
                } else {
                  if (_0x31ece7.action == "shipping_sync") try {
                    console.log("开始批量同步已申诉数据...");
                    const _0x1ec395 = await exports.getOnLineShops();
                    if (_0x1ec395.length === 0) return _0x18cf12 = {
                      "success": true,
                      "message": "没有找到在线的店铺"
                    }, _0x18cf12;
                    console.log("找到 " + _0x1ec395.length + " 个在线店铺，开始逐个同步...");
                    let _0x8fbda1 = 0,
                      _0x2159bc = 0;
                    _0xbdf4eb.begin_sync("shipping_sync");
                    let _0x6ec465 = _0x1ec395.length,
                      _0x5b2fe9 = 0;
                    for (const _0x55d0cc of _0x1ec395) {
                      const _0x49e9c1 = _0x55d0cc.config.wss_port;
                      console.log(++_0x5b2fe9 + "/" + _0x6ec465 + "正在同步店铺 (端口: " + _0x49e9c1 + ")...");
                      try {
                        await _0x483ec4.cleanTabs(_0x49e9c1);
                        await exports.fetch_cashier(_0x49e9c1);
                        await exports.fetch_aftersale_list(_0x49e9c1);
                        await _0x483ec4.cleanTabs(_0x49e9c1);
                        _0x8fbda1++;
                        console.log("店铺 " + _0x49e9c1 + " 同步成功");
                      } catch (_0x129f1d) {
                        _0x2159bc++;
                        console.error("店铺 " + _0x49e9c1 + " 同步失败:", _0x129f1d);
                      }
                    }
                    console.log("批量同步完成。成功: " + _0x8fbda1 + ", 失败: " + _0x2159bc);
                    _0xbdf4eb.end_sync("shipping_sync");
                    _0x18cf12 = {
                      "success": true,
                      "message": "批量同步完成。成功: " + _0x8fbda1 + ", 失败: " + _0x2159bc
                    };
                  } catch (_0x182113) {
                    console.error("批量同步消费者负向体验补偿数据时发生错误:", _0x182113);
                    _0x18cf12 = {
                      "success": false,
                      "message": "批量同步失败: " + _0x182113.message
                    };
                  } else {
                    if (_0x31ece7.action == "apply_all_sync") {
                      try {
                        console.log("开始apply_all_sync...");
                        const _0x2ab966 = await exports.getOnLineShops();
                        if (_0x2ab966.length === 0) return _0x18cf12 = {
                          "success": true,
                          "message": "没有找到在线的店铺"
                        }, _0x18cf12;
                        console.log("找到 " + _0x2ab966.length + " 个在线店铺，开始逐个同步...");
                        let _0x36343f = 0,
                          _0xd90519 = 0;
                        _0xbdf4eb.begin_sync("apply_all_sync");
                        let _0x36c84d = _0x2ab966.length,
                          _0x3247ee = 0;
                        for (const _0x378c11 of _0x2ab966) {
                          const _0x2f337a = _0x378c11.config.wss_port;
                          let _0x154f18 = null,
                            _0x2d90a0 = null;
                          _0x378c11.config && _0x378c11.config.mall_info && _0x378c11.config.mall_info.mall_id && (_0x154f18 = _0x378c11.config.mall_info.mall_id, _0x2d90a0 = _0x378c11.config.mall_info.mall.mall_name);
                          console.log(++_0x3247ee + "/" + _0x36c84d + "正在同步店铺 (端口: " + _0x2f337a + ")..." + _0x2d90a0);
                          try {
                            _0xbdf4eb.begin_sync("apply_all_sync");
                            await _0x483ec4.cleanTabs(_0x2f337a);
                            await exports.fetch_only_money_fromAfterSale(_0x2f337a, _0x154f18, _0x2d90a0);
                            await exports.fetch_cashier(_0x2f337a, _0x154f18, _0x2d90a0);
                            await exports.fetch_aftersale_list(_0x2f337a, _0x154f18, _0x2d90a0);
                            await _0x483ec4.cleanTabs(_0x2f337a);
                            _0x36343f++;
                            console.log(_0x3247ee + "/" + _0x36c84d + "同步成功 (端口: " + _0x2f337a + ")..." + _0x2d90a0);
                          } catch (_0x433e0d) {
                            _0xd90519++;
                            console.log(_0x3247ee + "/" + _0x36c84d + "同步失败 (端口: " + _0x2f337a + ")..." + _0x2d90a0);
                          }
                        }
                        console.log("批量同步完成。成功: " + _0x36343f + ", 失败: " + _0xd90519);
                        _0xbdf4eb.end_sync("apply_all_sync");
                        _0xbdf4eb.updateApplyStatusUnApply_count();
                        _0x18cf12 = {
                          "success": true,
                          "message": "批量同步完成。成功: " + _0x36343f + ", 失败: " + _0xd90519
                        };
                      } catch (_0x590237) {
                        _0xbdf4eb.end_sync("apply_all_sync");
                        console.error("批量同步消费者负向体验补偿数据时发生错误:", _0x590237);
                        _0x18cf12 = {
                          "success": false,
                          "message": "批量同步失败: " + _0x590237.message
                        };
                      }
                    } else {
                      if (_0x31ece7.action == "apply_start") {
                        _0x31ece7.operSteps && _0x2d129d.saveData("operSteps申诉", _0x31ece7.operSteps);
                        let _0xa0cbc3 = _0x2d129d.getData("control_status");
                        if (_0x5172ed.isEmpty(_0xa0cbc3)) _0xa0cbc3 = {};
                        let _0x2e97f1 = false;
                        !_0xa0cbc3.apply && (_0x2e97f1 = true);
                        _0xa0cbc3.apply = true;
                        _0x2d129d.saveData("control_status", _0xa0cbc3);
                        _0xbdf4eb.initSyncStatus();
                        _0x4af8fc.customer_complain_applyStatusChanged();
                      } else {
                        if (_0x31ece7.action == "apply_stop") {
                          let _0x13f5d3 = _0x2d129d.getData("control_status");
                          if (_0x5172ed.isEmpty(_0x13f5d3)) _0x13f5d3 = {};
                          let _0x39209f = false;
                          _0x13f5d3.apply && (_0x39209f = true);
                          _0x13f5d3.apply = false;
                          _0x2d129d.saveData("control_status", _0x13f5d3);
                          _0x4af8fc.customer_complain_applyStatusChanged();
                        } else {
                          if (_0x31ece7.action == "init_sync_status") _0xbdf4eb.initSyncStatus();else {
                            _0x4fa977.process(_0x31ece7);
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
      }
    }
  }
  return _0x18cf12;
};
exports.fetch_customer_complain = async function (_0x57584e) {
  let _0x14285b = null,
    _0x1b68f4 = null,
    _0x33df4d = null;
  try {
    let _0x4a8cf5 = "https://mms.pinduoduo.com/aftersales/customer_complain_appeal";
    _0x14285b = await _0x7df758.connectOverCDP("http://127.0.0.1:" + _0x57584e);
    const _0x32ded7 = _0x14285b.contexts()[0];
    _0x1b68f4 = await _0x32ded7.newPage();
    await _0x1b68f4.goto(_0x4a8cf5);
    const _0x1a1e9b = await _0x483ec4.evaluateLS1(_0x1b68f4, "new_userinfo"),
      _0x553486 = _0x1a1e9b.mall_id;
    console.log(_0x553486);
    await _0x483ec4.make_sure_show_window(_0x14285b, _0x32ded7);
    _0x33df4d = async _0x1af9f5 => {
      if (_0x1af9f5.url().includes("https://mms.pinduoduo.com/api/colombo/tuju/appealList")) try {
        const _0xb15438 = await _0x1af9f5.json();
        let _0x1739da = _0xb15438.result.merchantPenaltyTickets,
          _0x3178d1 = _0xb15438.result.total;
        _0xbdf4eb.addComplainNeedApplys(_0x57584e, _0x553486, _0x1739da);
        console.log("[Network] << 申诉列表数据:", _0x3178d1 + "条");
      } catch (_0x5c9c92) {
        console.error("[Network] << 无法解析申诉列表响应为JSON:", _0x5c9c92);
      }
    };
    _0x1b68f4.on("response", _0x33df4d);
    let _0x65091b = 0;
    const _0x4822c0 = 5,
      _0x3de214 = 4,
      _0xc98f00 = ".list_failTxt__1_Y3w";
    let _0x3caa58 = false,
      _0xc8d93d = false;
    while (_0x65091b < _0x4822c0) {
      console.log("[mmsDataFetchHelper] 检查元素 '" + _0xc98f00 + "' 数量: 第 " + (_0x65091b + 1) + "/" + _0x4822c0 + " 次");
      const _0x3aca7b = await _0x1b68f4.locator(_0xc98f00).count();
      if (_0x3aca7b === _0x3de214) {
        _0x3caa58 = true;
        console.log("[mmsDataFetchHelper] 成功: 找到 " + _0x3de214 + " 个元素 '" + _0xc98f00 + "'。");
        break;
      } else console.log("[mmsDataFetchHelper] 当前找到 " + _0x3aca7b + " 个元素 '" + _0xc98f00 + "'，不符合预期 " + _0x3de214 + " 个。");
      _0x65091b++;
      const _0x3478d8 = _0x1b68f4.url();
      if (_0x3478d8.includes("/login/")) {
        _0xc8d93d = true;
        console.log("[mmsDataFetchHelper] 检测到登录页面: " + _0x3478d8 + "，可能需要重新登录。");
        break;
      }
      _0x65091b < _0x4822c0 && (await _0x1b68f4.waitForTimeout(1000));
    }
    if (_0xc8d93d) {
      return _0x5bb99e.updateClientLoginStatus(null, _0x57584e, "离线"), false;
    }
    const _0xb00eb9 = await _0x1b68f4.locator("a:has-text(\"立即申诉\")").count(),
      _0x51a0e9 = _0xb00eb9 > 0 ? _0x1b68f4.locator("a:has-text(\"立即申诉\")").first() : null;
    if (_0x51a0e9) {
      await exports.closePopWindow(_0x1b68f4);
      await _0x51a0e9.click();
      console.log("点击了 \"立即申诉\" 按钮");
      await _0x1b68f4.waitForTimeout(1000);
    } else {
      return console.log("未找到 \"立即申诉\" 按钮，没有可申诉记录"), false;
    }
    let _0x574325 = true;
    do {
      await new Promise(_0xf59b96 => setTimeout(_0xf59b96, 3000));
      const _0x3b5c34 = "li[data-testid=\"beast-core-pagination-next\"].PGT_next_5-163-0 ",
        _0x46561c = _0x1b68f4.locator(_0x3b5c34),
        _0x5f5db3 = await _0x46561c.count();
      if (_0x5f5db3 === 0) {
        console.log("Next page button not found in DOM immediately. Stopping pagination.");
        _0x574325 = false;
        continue;
      }
      const _0x4ec3e2 = await _0x46561c.isVisible(),
        _0x580d74 = await _0x46561c.isEnabled(),
        _0x56bd09 = await _0x46561c.getAttribute("class"),
        _0x5a07ed = _0x56bd09 && _0x56bd09.includes("PGT_disabled_5-163-0");
      if (_0x4ec3e2 && _0x580d74 && !_0x5a07ed) {
        console.log("Found and clicking next page button.");
        await _0x46561c.click();
      } else console.log("Next page button not found, not visible, disabled, or has disabled class. Stopping pagination."), _0x574325 = false;
    } while (_0x574325);
  } catch (_0x44e4a2) {
    return console.info("出错啦同步负体验"), console.error(_0x44e4a2), false;
  } finally {
    if (_0x1b68f4) try {
      _0x33df4d && _0x1b68f4.off("response", _0x33df4d);
      await _0x1b68f4.close();
    } catch (_0x190442) {
      console.error("[fetch_customer_complain] 关闭页面时出错:", _0x190442.message);
    }
  }
  return true;
};
exports.fetch_cashier = async function (_0x1c70f3, _0x5c9227, _0x7b0504) {
  console.log("对账中心", _0x1c70f3);
  try {
    let _0xc8576c = "https://mms.pinduoduo.com/cashier/finance/payment-bills";
    const _0x13fedd = await _0x7df758.connectOverCDP("http://127.0.0.1:" + _0x1c70f3),
      _0x55ea1c = _0x13fedd.contexts()[0];
    page = await _0x55ea1c.newPage();
    await page.goto(_0xc8576c);
    let _0xfee76b = await _0x483ec4.evaluateLS1(page, "new_userinfo");
    !_0xfee76b && (_0xfee76b = await _0x483ec4.evaluateLS2(page, "userinfo"));
    const _0x599fef = _0xfee76b.mall_id;
    console.log(_0x599fef);
    if (exports.hasSyncLog(_0x1c70f3, _0x599fef, "运费[对账中心]")) {
      console.log(_0x599fef, "今日已同步skip");
      try {
        await page.close();
        await _0x13fedd.close();
      } catch (_0x4ca250) {}
      return;
    }
    let _0x12821f = _0xbdf4eb.getLastSyncItem(_0x5c9227, "运费[对账中心]"),
      _0x3d743f = null;
    exports.addSyncLogStart(_0x1c70f3, _0x599fef, "运费[对账中心]");
    let _0x48d111 = false;
    page.on("response", async _0x686950 => {
      if (_0x686950.url().includes("https://cashier.pinduoduo.com/templar/api/bill/pagingQueryMallBalanceBillListForMms")) try {
        const _0x5d5656 = await _0x686950.json(),
          _0x2580ea = _0x5d5656.result,
          _0x355d34 = _0x2580ea.total,
          _0x38b568 = _0x2580ea.billList;
        let _0x318caf = _0x5172ed.filter(_0x38b568, function (_0x41afb0) {
          return _0x41afb0.note.includes("退货运费");
        });
        _0x355d34 < 20 && (_0x48d111 = true);
        if (_0x318caf.length > 0) {
          _0xbdf4eb.addCashierData(_0x599fef, _0x318caf);
          if (!_0x3d743f) _0x3d743f = _0x318caf[0];else _0x318caf[0].createdAt > _0x3d743f.createdAt && (_0x3d743f = _0x318caf[0]);
          _0xbdf4eb.isLastSyncItem("运费[对账中心]", _0x3d743f, _0x12821f) && (console.log("超出上次同步时间,break"), _0x48d111 = true);
        }
      } catch (_0x3539b6) {
        console.error("[Network] << 无法解析申诉列表响应为JSON:", _0x3539b6);
      }
    });
    await page.waitForTimeout(1000);
    for (let _0x26dabe = 0; _0x26dabe < 5; _0x26dabe++) {
      const _0x3304b0 = page.locator("a:has-text(\"高级选项\")");
      if (await _0x3304b0.isVisible()) {
        break;
      }
      await page.waitForTimeout(1000);
    }
    const _0x48b814 = page.locator("a:has-text(\"高级选项\")");
    if (await _0x48b814.isVisible()) await _0x48b814.click();else {
      console.log("未找到 \"展开高级选项\" 按钮");
      return;
    }
    await page.waitForTimeout(300);
    const _0x39265a = page.locator("label:has-text(\"扣款\")");
    (await _0x39265a.isVisible()) ? (await _0x39265a.click(), await page.waitForTimeout(500)) : console.log("未找到 \"扣款\" 复选框");
    const _0x219795 = page.locator("label:has-text(\"退款\")");
    (await _0x219795.isVisible()) ? (await _0x219795.click(), await page.waitForTimeout(500)) : console.log("未找到 \"退款\" 复选框");
    const _0x1a6d71 = page.locator("[data-testid=\"beast-core-rangePicker-htmlInput\"]");
    if (await _0x1a6d71.isVisible()) {
      await _0x1a6d71.click();
      await page.waitForTimeout(500);
    } else {
      console.log("未找到日期范围选择器");
    }
    const _0x23d76a = page.locator("button:has-text(\"最近30天\")");
    (await _0x23d76a.isVisible()) ? (await _0x23d76a.click(), await page.waitForTimeout(500)) : console.log("未找到 \"最近30天\" 按钮");
    const _0x18dab4 = page.locator("input[placeholder=\"最低金额\"]");
    (await _0x18dab4.isVisible()) ? (await _0x18dab4.fill("3.01"), await page.waitForTimeout(500)) : console.log("未找到 \"最低金额\" 输入框");
    const _0x1a1a66 = page.locator("input[placeholder=\"最高金额\"]");
    if (await _0x1a1a66.isVisible()) await _0x1a1a66.fill("20"), await page.waitForTimeout(500);else {
      console.log("未找到 \"最高金额\" 输入框");
    }
    const _0x232bce = page.locator("button:has-text(\"查询\")[data-testid=\"beast-core-button\"]");
    (await _0x232bce.isVisible()) ? (await _0x232bce.click(), await page.waitForTimeout(1000)) : console.log("未找到 \"查询\" 按钮");
    const _0x509d61 = page.locator("input[data-testid=\"beast-core-select-htmlInput\"][value=\"20\"]");
    if (await _0x509d61.isVisible()) await _0x509d61.click(), await page.waitForTimeout(500);else {
      console.log("未找到每页显示20条的输入框");
    }
    const _0x389000 = page.locator("li[role=\"option\"]:has-text(\"100\")");
    if (await _0x389000.isVisible()) await _0x389000.click(), await page.waitForTimeout(500);else {
      console.log("未找到每页显示100条的选项");
    }
    let _0x53f8ae = 0;
    const _0x5b95e4 = 5,
      _0x28bb12 = 1,
      _0x1e9b6c = ".PGT_totalText_19qjp3i";
    let _0x6b811c = false,
      _0x94c823 = false;
    while (_0x53f8ae < _0x5b95e4) {
      const _0x588eb3 = await page.locator(_0x1e9b6c).count();
      if (_0x588eb3 === _0x28bb12) {
        _0x6b811c = true;
        break;
      } else console.log("[mmsDataFetchHelper] 当前找到 " + _0x588eb3 + " 个元素 '" + _0x1e9b6c + "'，不符合预期 " + _0x28bb12 + " 个。");
      _0x53f8ae++;
      const _0x5d6321 = page.url();
      if (_0x5d6321.includes("/login/")) {
        _0x94c823 = true;
        break;
      }
      _0x53f8ae < _0x5b95e4 && (await page.waitForTimeout(1000));
    }
    if (_0x94c823) return _0x5bb99e.updateClientLoginStatus(null, _0x1c70f3, "离线"), false;
    let _0x5bcb3c = true;
    do {
      if (_0x48d111) break;
      await _0x483ec4.evaluateScrollBottom(page);
      await new Promise(_0x3f7d70 => setTimeout(_0x3f7d70, 3000));
      const _0x58c390 = "li[data-testid=\"beast-core-pagination-next\"].PGT_next_19qjp3i",
        _0x224a52 = page.locator(_0x58c390),
        _0x38b446 = await _0x224a52.count();
      if (_0x38b446 === 0) {
        _0x5bcb3c = false;
        continue;
      }
      const _0x1fc5d0 = await _0x224a52.isVisible();
      if (!_0x1fc5d0) await _0x224a52.scrollIntoViewIfNeeded();
      const _0x209989 = await _0x224a52.isEnabled(),
        _0x4b0195 = await _0x224a52.getAttribute("class"),
        _0x523081 = _0x4b0195 && _0x4b0195.includes("PGT_disabled_19qjp3i");
      _0x1fc5d0 && _0x209989 && !_0x523081 ? await _0x224a52.click() : _0x5bcb3c = false;
    } while (_0x5bcb3c);
    exports.addSyncLogDone(_0x1c70f3, _0x599fef, "运费[对账中心]");
    _0x3d743f && _0xbdf4eb.addLastSyncTime(_0x599fef, "运费[对账中心]", _0x3d743f);
  } catch (_0x3ec5eb) {
    console.log(_0x3ec5eb);
  }
  return true;
};
exports.fetch_aftersale_list = async function (_0x3ed14f, _0x16e62a, _0x216395) {
  console.log("售后工作台运费提取", _0x3ed14f, _0x16e62a, _0x216395);
  try {
    let _0x2d45f2 = "https://mms.pinduoduo.com/aftersales/aftersale_list?msfrom=mms_sidenav";
    const _0x545ab7 = await _0x7df758.connectOverCDP("http://127.0.0.1:" + _0x3ed14f),
      _0x42b97e = _0x545ab7.contexts()[0];
    page = await _0x42b97e.newPage();
    await page.goto(_0x2d45f2);
    const _0x400b2a = await _0x483ec4.evaluateLS1(page, "new_userinfo"),
      _0x2d4382 = _0x400b2a.mall_id;
    if (exports.hasSyncLog(_0x3ed14f, _0x2d4382, "运费[工作台]")) {
      try {
        await page.close();
        await _0x545ab7.close();
      } catch (_0x2a2e2c) {}
      return;
    }
    exports.addSyncLogStart(_0x3ed14f, _0x2d4382, "运费[工作台]");
    const _0x4e3ce6 = "申诉/对账中心运费扣款/" + _0x2d4382;
    let _0x426c22 = _0x2d129d.getData(_0x4e3ce6);
    if (_0x5172ed.isEmpty(_0x426c22)) {
      try {
        await page.close();
        await _0x545ab7.close();
      } catch (_0x4a8013) {}
      return;
    }
    const _0x49608c = "申诉记录/申诉/" + _0x2d4382;
    let _0x586e44 = [];
    try {
      _0x586e44 = _0x2d129d.getData(_0x49608c) || [];
      !Array.isArray(_0x586e44) && (_0x586e44 = []);
    } catch (_0x4f34e4) {
      _0x586e44 = [];
    }
    const _0x272ea7 = new Set();
    _0x586e44.forEach(_0x3fc219 => {
      _0x3fc219.appealSubType === 3 && _0x3fc219.orderSn && _0x272ea7.add(_0x3fc219.orderSn);
    });
    const _0x11e504 = _0x426c22.filter(_0x5af069 => {
      return !_0x272ea7.has(_0x5af069.orderSn);
    });
    console.log("去除已申诉运费单后的对账中心订单数量: " + _0x11e504.length);
    let _0x2ddd70 = _0x5172ed.map(_0x11e504, function (_0x3227e1) {
      return _0x3227e1.orderSn;
    });
    console.log("总共需要处理 " + _0x2ddd70.length + " 个订单号，将分批处理，每批100个");
    const _0x463840 = 100,
      _0x5d3b9b = Math.ceil(_0x2ddd70.length / _0x463840);
    let _0x44012e = [];
    for (let _0x3c6b9a = 0; _0x3c6b9a < _0x5d3b9b; _0x3c6b9a++) {
      const _0x1adb53 = _0x3c6b9a * _0x463840,
        _0x39c719 = Math.min(_0x1adb53 + _0x463840, _0x2ddd70.length),
        _0x443f66 = _0x2ddd70.slice(_0x1adb53, _0x39c719);
      console.log("处理第 " + (_0x3c6b9a + 1) + "/" + _0x5d3b9b + " 批，订单数量: " + _0x443f66.length);
      let _0x14e3c3 = await _0x4a6d1d(page, _0x443f66, _0x3c6b9a + 1, _0x5d3b9b);
      for (let _0x2d07b2 = 0; _0x2d07b2 < _0x14e3c3.length; _0x2d07b2++) {
        const _0x230ffb = _0x14e3c3[_0x2d07b2];
        if (_0x230ffb.afterSalesStatus == 11) continue;
        const _0x44fc8b = _0x5172ed.find(_0x11e504, {
            "orderSn": _0x230ffb.orderSn
          }),
          _0x28cb54 = _0x44fc8b ? _0x44fc8b.createdAt : null;
        _0x44012e.push({
          "wss_port": _0x3ed14f,
          "mall_id": _0x2d4382,
          "id": _0x230ffb.id,
          "afterSalesType": _0x230ffb.afterSalesType,
          "afterSalesStatus": _0x230ffb.afterSalesStatus,
          "afterSalesReasonDesc": _0x230ffb.afterSalesReasonDesc,
          "orderSn": _0x230ffb.orderSn,
          "createdAt": _0x28cb54,
          "appealSubType": 3
        });
      }
      _0x3c6b9a < _0x5d3b9b - 1 && (console.log("等待2秒后处理下一批..."), await page.waitForTimeout(2000));
    }
    _0xbdf4eb.addNeedApplyData(_0x2d4382, _0x44012e);
    exports.addSyncLogDone(_0x3ed14f, _0x2d4382, "运费[工作台]");
  } catch (_0x435d96) {
    console.log(_0x435d96);
  }
  return true;
};
async function _0x4a6d1d(_0x395870, _0x1c98f7, _0x3264ff, _0x2753d1) {
  let _0x3eaf4b = [],
    _0x403747 = false;
  try {
    _0x395870.on("response", async _0x12de0d => {
      if (_0x12de0d.url().includes("https://mms.pinduoduo.com/mercury/mms/afterSales/queryList")) {
        try {
          const _0xfe5137 = await _0x12de0d.json(),
            _0x2fdcf0 = _0xfe5137.result,
            _0x34a5b4 = _0x2fdcf0.list;
          _0x3eaf4b.push(..._0x34a5b4);
        } catch (_0xfdc340) {
          console.error("[Network] << 无法解析申诉列表响应为JSON:", _0xfdc340);
        }
      }
    });
    await _0x395870.waitForTimeout(2000);
    const _0x3ea2e2 = _0x395870.locator("a:has-text(\"收起高级查询\")");
    if (await _0x3ea2e2.isVisible()) {} else {
      const _0xa07032 = _0x395870.locator("a:has-text(\"展开高级查询\")");
      await _0xa07032.scrollIntoViewIfNeeded();
      if (await _0xa07032.isVisible()) {
        await _0xa07032.click();
      } else console.log("未找到 \"展开高级选项\" 按钮");
    }
    await _0x395870.waitForTimeout(300);
    const _0x8eb12f = _0x395870.locator("input[data-testid=\"beast-core-select-htmlInput\"][value=\"物流单号\"]");
    (await _0x8eb12f.isVisible()) ? (await _0x8eb12f.click(), await _0x395870.waitForTimeout(500)) : console.log("未找到 \"物流单号\" 输入框");
    const _0x2e24b5 = _0x395870.locator("li[role=\"option\"][data-checked=\"false\"][data-disabled=\"false\"].cIL_item_5-163-0.cIL_medium_5-163-0.ST_itemRendererLabel_5-163-0:has-text(\"订单编号\")");
    if (await _0x2e24b5.isVisible()) await _0x2e24b5.click(), await _0x395870.waitForTimeout(500);else {
      console.log("未找到 \"订单编号\" 选项");
    }
    const _0x44b600 = _0x395870.locator("input[placeholder=\"批量查询请用逗号隔开每个订单编号\"][type=\"text\"][class=\"IPT_input_5-163-0\"][data-testid=\"beast-core-input-htmlInput\"]");
    if (await _0x44b600.isVisible()) {
      const _0x7d4cd5 = _0x1c98f7.join(",");
      await _0x44b600.fill(_0x7d4cd5);
      await _0x395870.waitForTimeout(500);
    } else console.log("未找到订单编号/物流单号搜索框");
    const _0x3f1f06 = _0x395870.locator("button[data-testid=\"beast-core-button\"][type=\"submit\"]:has-text(\"查询\")");
    (await _0x3f1f06.isVisible()) ? (await _0x3f1f06.click(), await _0x395870.waitForTimeout(3000)) : console.log("未找到 \"查询\" 按钮");
    await _0x395870.waitForTimeout(2000);
    const _0x221ab4 = _0x395870.locator("input[data-testid=\"beast-core-select-htmlInput\"][value=\"10\"]");
    if (await _0x221ab4.isVisible()) {
      await _0x221ab4.click();
      await _0x395870.waitForTimeout(500);
    } else console.log("未找到页面大小选择框");
    const _0x4952ab = _0x395870.locator("li[role=\"option\"][data-checked=\"false\"].cIL_item_5-163-0.cIL_medium_5-163-0.ST_itemRendererLabel_5-163-0:has-text(\"100\")");
    (await _0x4952ab.isVisible()) ? (await _0x4952ab.click(), await _0x395870.waitForTimeout(1000)) : console.log("未找到 \"100条/页\" 选项");
    const _0x22d079 = _0x395870.locator("li.PGT_totalText_5-163-0");
    let _0x313bdd = 0;
    if (await _0x22d079.isVisible()) {
      const _0x4a09d1 = await _0x22d079.innerText();
      _0x313bdd = parseInt(_0x4a09d1.match(/\d+/)[0], 10);
      console.log("数据加载成功: " + _0x4a09d1);
    } else console.log("未找到数据总条数显示元素 (li.PGT_totalText_5-163-0)，可能数据加载失败或页面结构有变。");
    await _0x395870.waitForTimeout(1000);
    if (_0x313bdd > 10) {
      const _0x2d4d7c = _0x395870.locator("input[data-testid=\"beast-core-select-htmlInput\"][value=\"10\"]");
      (await _0x2d4d7c.isVisible()) ? (await _0x2d4d7c.click(), await _0x395870.waitForTimeout(500)) : console.log("未找到每页显示20条的输入框");
      const _0x496792 = _0x395870.locator("li[role=\"option\"]:has-text(\"100\")");
      (await _0x496792.isVisible()) ? (await _0x496792.click(), await _0x395870.waitForTimeout(500)) : console.log("未找到每页显示100条的选项");
      await _0x395870.waitForTimeout(1000);
      let _0x36d3cc = true;
      do {
        if (_0x403747) break;
        await _0x483ec4.evaluateScrollBottom(_0x395870);
        await new Promise(_0x6c07f6 => setTimeout(_0x6c07f6, 3000));
        const _0x418189 = "li[data-testid=\"beast-core-pagination-next\"].PGT_next_5-163-0",
          _0x138ee3 = _0x395870.locator(_0x418189),
          _0x583d0d = await _0x138ee3.count();
        if (_0x583d0d === 0) {
          _0x36d3cc = false;
          continue;
        }
        const _0x521312 = await _0x138ee3.isVisible();
        if (!_0x521312) await _0x138ee3.scrollIntoViewIfNeeded();
        const _0x48fad3 = await _0x138ee3.isEnabled(),
          _0x31561d = await _0x138ee3.getAttribute("class"),
          _0xd44c3b = _0x31561d && _0x31561d.includes("PGT_disabled_5-163-0");
        _0x521312 && _0x48fad3 && !_0xd44c3b ? await _0x138ee3.click() : _0x36d3cc = false;
      } while (_0x36d3cc);
    }
    await _0x483ec4.evaluateScrollTop(_0x395870);
    console.log("批次 " + _0x3264ff + "/" + _0x2753d1 + " 处理完成，并已滚动到页面顶部");
  } catch (_0x46b036) {
    console.error("处理批次 " + _0x3264ff + "/" + _0x2753d1 + " 时出错:", _0x46b036);
  }
  return console.log("售后工作台提取数量", _0x3eaf4b.length), _0x3eaf4b;
}
exports.fetch_applyed = async function (_0x51ad70, _0x584316, _0x2782e2, _0x388e34) {
  console.log("已申诉数据同步", _0x51ad70, _0x584316, _0x2782e2);
  let _0x942637 = null,
    _0xdd0a80 = null,
    _0x548e1b = null;
  try {
    let _0x2b679c = "https://mms.pinduoduo.com/orders/appeals/aftersale/list?from=list";
    _0x942637 = await _0x7df758.connectOverCDP("http://127.0.0.1:" + _0x51ad70);
    const _0x22fedd = _0x942637.contexts()[0];
    _0x388e34 && (await _0x483ec4.make_sure_one_tab(_0x942637, _0x22fedd), await _0x483ec4.make_sure_show_window(_0x942637, _0x22fedd));
    let _0x277f17 = null,
      _0x1f201a = false,
      _0x25e7cf = _0xbdf4eb.getLastSyncItem(_0x584316, "已申诉记录"),
      _0x3822ae = null,
      _0x1e0e89 = false;
    _0xdd0a80 = await _0x22fedd.newPage();
    _0x548e1b = async _0x83ddb8 => {
      if (_0x83ddb8.url().includes("https://mms.pinduoduo.com/auncel/mms/appeal/queryList")) try {
        _0x1e0e89 = true;
        const _0x2f354e = await _0x83ddb8.json(),
          _0x153ffc = _0x2f354e.result,
          _0x267d6b = _0x153ffc.queryAppealInfoFromEsDetailList,
          _0x31f13a = _0x153ffc.total;
        if (_0x31f13a == 0) {
          console.log("无已申诉历史记录.....");
          _0x1f201a = true;
          return;
        }
        let _0x350dbf = "申诉记录/申诉/" + _0x277f17,
          _0xccf16b = _0x2d129d.getData(_0x350dbf);
        if (_0x5172ed.isEmpty(_0xccf16b)) _0xccf16b = [];
        if (!_0x5172ed.isEmpty(_0x267d6b)) {
          const _0xe544bf = _0x5172ed.minBy(_0x267d6b, "applyTime");
          if (_0xe544bf && _0xe544bf.applyTime) {
            const _0x2d6b0e = _0xe544bf.applyTime,
              _0x21c831 = new Date().getTime(),
              _0x2d255d = _0x21c831 - _0x2d6b0e,
              _0x14e7de = Math.floor(_0x2d255d / (1000 * 60 * 60 * 24));
            _0x14e7de > 30 && (_0x1f201a = true);
            console.log("[Network] << 当前批次最早一条applyTime距离现在 " + _0x14e7de + " 天");
          }
        }
        let _0xdf54fd = _0x5172ed.map(_0x267d6b, function (_0x409e83) {
          if (!_0x3822ae) _0x3822ae = _0x409e83;else {
            if (_0x3822ae.applyTime < _0x409e83.applyTime) _0x3822ae = 0;
          }
          return {
            "afterSalesId": _0x409e83.afterSalesId,
            "amount": _0x409e83.amount,
            "appealId": _0x409e83.appealId,
            "appealSubId": _0x409e83.appealSubId,
            "appealSubStatusDesc": _0x409e83.appealSubStatusDesc,
            "appealSubStatusDescWithRemit": _0x409e83.appealSubStatusDescWithRemit,
            "appealSubType": _0x409e83.appealSubType,
            "appealSubTypeDesc": _0x409e83.appealSubTypeDesc,
            "appealType": _0x409e83.appealType,
            "appealTypeDesc": _0x409e83.appealTypeDesc,
            "applyTime": _0x409e83.applyTime,
            "auditAmount": _0x409e83.auditAmount,
            "orderSn": _0x409e83.orderSn,
            "goodsId": _0x409e83.goodsId
          };
        });
        _0xccf16b = _0x5172ed.unionBy(_0xccf16b, _0xdf54fd, "appealSubId");
        _0x2d129d.saveData(_0x350dbf, _0xccf16b);
        _0xdf54fd.length > 0 && _0xbdf4eb.isLastSyncItem("已申诉记录", _0x3822ae, _0x25e7cf) && (console.log("超出上次同步时间,break"), _0x1f201a = true);
      } catch (_0x172380) {
        console.error("[Network] << 无法解析申诉列表响应为JSON:", _0x172380);
      }
    };
    _0xdd0a80.on("response", _0x548e1b);
    await _0xdd0a80.goto(_0x2b679c);
    const _0xe12695 = await _0x483ec4.evaluateLS1(_0xdd0a80, "new_userinfo");
    _0x277f17 = _0xe12695.mall_id;
    exports.addSyncLogStart(_0x51ad70, _0x277f17, "已申诉记录");
    await exports.closePopWindow(_0xdd0a80);
    for (let _0x4d6ba2 = 0; _0x4d6ba2 < 5; _0x4d6ba2++) {
      if (_0x1e0e89) {
        console.log("首次数据加载完成，耗时 " + (_0x4d6ba2 + 1) + " 秒");
        break;
      }
      console.log("等待首次数据加载... (" + (_0x4d6ba2 + 1) + "/5)");
      await _0xdd0a80.waitForTimeout(1000);
      _0x4d6ba2 === 4 && !_0x1e0e89 && console.warn("警告：首次数据加载超时，可能导致数据不完整。");
    }
    if (!_0x1f201a) {
      const _0x12f69d = _0xdd0a80.locator("input[data-testid=\"beast-core-select-htmlInput\"][value=\"10\"]");
      (await _0x12f69d.isVisible()) ? (await _0x12f69d.click(), await _0xdd0a80.waitForTimeout(500)) : console.log("未找到 value=\"10\" 的输入框");
      const _0x3b8553 = _0xdd0a80.locator("li[role=\"option\"][data-checked=\"false\"][data-disabled=\"false\"]:has-text(\"100\")");
      (await _0x3b8553.isVisible()) ? (await _0x3b8553.click(), await _0xdd0a80.waitForTimeout(500)) : console.log("未找到 \"100\" 选项");
      let _0x560297 = true;
      do {
        if (_0x1f201a) break;
        await _0x483ec4.evaluateScrollBottom(_0xdd0a80);
        await new Promise(_0x7f2fa0 => setTimeout(_0x7f2fa0, 1000));
        const _0x1d66bc = "li[data-testid=\"beast-core-pagination-next\"].PGT_next_5-164-0",
          _0x36b7f1 = _0xdd0a80.locator(_0x1d66bc),
          _0x1254a3 = await _0x36b7f1.count();
        if (_0x1254a3 === 0) {
          _0x560297 = false;
          continue;
        }
        const _0x2dc65e = await _0x36b7f1.isVisible();
        if (!_0x2dc65e) await _0x36b7f1.scrollIntoViewIfNeeded();
        const _0x57430c = await _0x36b7f1.isEnabled(),
          _0x5e5d74 = await _0x36b7f1.getAttribute("class"),
          _0x2f73c9 = _0x5e5d74 && _0x5e5d74.includes("PGT_disabled_5-164-0");
        _0x2dc65e && _0x57430c && !_0x2f73c9 ? await _0x36b7f1.click() : _0x560297 = false;
      } while (_0x560297);
    }
    exports.addSyncLogDone(_0x51ad70, _0x277f17, "已申诉记录");
    if (_0x3822ae) {
      _0xbdf4eb.addLastSyncTime(_0x277f17, "已申诉记录", _0x3822ae);
    }
  } catch (_0x280f2d) {
    console.log(_0x280f2d);
  } finally {
    if (_0xdd0a80) try {
      _0x548e1b && _0xdd0a80.off("response", _0x548e1b);
      await _0xdd0a80.close();
    } catch (_0x27938c) {
      console.error("[fetch_applyed] 关闭页面时出错:", _0x27938c.message);
    }
  }
  return true;
};
exports.fetch_only_money_fromAfterSale = async function (_0x31d634, _0x5f419f, _0x586d56) {
  console.log("售后工作台提取仅退款", _0x31d634, _0x5f419f, _0x586d56);
  try {
    let _0x501d34 = "https://mms.pinduoduo.com/aftersales/aftersale_list?msfrom=mms_sidenav";
    const _0x4899b7 = await _0x7df758.connectOverCDP("http://127.0.0.1:" + _0x31d634),
      _0x5dad32 = _0x4899b7.contexts()[0];
    page = await _0x5dad32.newPage();
    await page.goto(_0x501d34);
    const _0x2fbe3c = await _0x483ec4.evaluateLS1(page, "new_userinfo"),
      _0x2be934 = _0x2fbe3c.mall_id;
    if (exports.hasSyncLog(_0x31d634, _0x2be934, "仅退款工作台")) {
      console.log("今日已同步,skip");
      try {
        await page.close();
        await _0x4899b7.close();
      } catch (_0x475daf) {}
      return;
    }
    exports.addSyncLogStart(_0x31d634, _0x2be934, "仅退款工作台");
    try {
      console.log("刷新一次,排除AD页面");
      await page.waitForTimeout(3000);
      await page.reload();
      await page.waitForTimeout(2000);
    } catch (_0x582d07) {}
    await page.waitForTimeout(500);
    let _0x137d13 = 0;
    do {
      const _0x36234d = page.locator("div.OpenReturnShippingModal_closeBtn__1CAIH");
      (await _0x36234d.isVisible()) && (await _0x36234d.click(), console.log("点击了弹窗关闭按钮"), await page.waitForTimeout(100));
      const _0xa4ecde = page.locator("a:has-text(\"收起高级查询\")");
      if (await _0xa4ecde.isVisible()) break;else {
        const _0x9f9e95 = page.locator("a:has-text(\"展开高级查询\")");
        await _0x9f9e95.scrollIntoViewIfNeeded();
        if (await _0x9f9e95.isVisible()) {
          await _0x9f9e95.click();
          break;
        } else {
          console.log("未找到 \"展开高级选项\" 按钮");
          _0x137d13++;
          if (_0x137d13 >= 3) {
            console.log("未找到 \"展开高级选项\" 按钮=====skip");
            break;
          }
          await page.waitForTimeout(500);
        }
      }
    } while (true);
    await page.waitForTimeout(300);
    const _0x5ccaf5 = page.locator("input[data-testid=\"beast-core-select-htmlInput\"][placeholder=\"请选择\"]").first();
    (await _0x5ccaf5.isVisible()) ? (await _0x5ccaf5.click(), await page.waitForTimeout(500)) : console.log("未找到 \"请选择\" 筛选框");
    const _0xd9737c = page.locator("li[role=\"option\"]:has-text(\"退款\")").first();
    if (await _0xd9737c.isVisible()) await _0xd9737c.click(), await page.waitForTimeout(1000);else {
      console.log("未找到 \"退款\" 选项");
    }
    await page.waitForTimeout(1000);
    const _0x5bd190 = page.locator("i.ImportantList_close__d0eKb");
    if (await _0x5bd190.isVisible()) await _0x5bd190.click(), await page.waitForTimeout(100);else {}
    const _0x595328 = page.locator("input[data-testid=\"beast-core-select-htmlInput\"][placeholder=\"请选择\"]").nth(1);
    (await _0x595328.isVisible()) ? (await _0x595328.click(), await page.waitForTimeout(100)) : console.log("未找到 \"退款类型\" 筛选框");
    const _0x37e40a = page.locator("li[role=\"option\"]:has-text(\"退款成功\")");
    if (await _0x37e40a.isVisible()) await _0x37e40a.click(), await page.waitForTimeout(100);else {
      console.log("未找到 \"仅退款\" 选项");
    }
    await page.waitForTimeout(1000);
    const _0x7ed5c0 = page.locator("input[data-testid=\"beast-core-select-htmlInput\"][placeholder=\"请选择\"]").nth(3);
    (await _0x7ed5c0.isVisible()) ? (await _0x7ed5c0.click(), await page.waitForTimeout(100)) : console.log("未找到 \"发货状态\" 筛选框");
    const _0x340054 = page.locator("li[role=\"option\"]:has-text(\"已发货\")");
    if (await _0x340054.isVisible()) await _0x340054.click(), await page.waitForTimeout(100);else {
      console.log("未找到 \"已发货\" 选项");
    }
    const _0x8ee856 = page.locator("input[data-testid=\"beast-core-select-htmlInput\"][placeholder=\"请选择\"]").nth(4);
    (await _0x8ee856.isVisible()) ? (await _0x8ee856.click(), await page.waitForTimeout(100)) : console.log("未找到 \"售后状态\" 筛选框");
    const _0x3291f1 = page.locator("li[role=\"option\"]:has-text(\"平台同意退款\")");
    (await _0x3291f1.isVisible()) ? (await _0x3291f1.click(), await page.waitForTimeout(100)) : console.log("未找到 \"平台同意退款\" 选项");
    const _0x3cfe89 = page.locator("input[data-testid=\"beast-core-inputNumber-htmlInput\"]").first();
    (await _0x3cfe89.isVisible()) ? (await _0x3cfe89.fill("3"), await page.waitForTimeout(100)) : console.log("未找到输入框，无法赋值为3");
    const _0x47728c = page.locator("input[data-testid=\"beast-core-rangePicker-htmlInput\"][placeholder=\"请选择\"][type=\"text\"][value=\"\"]");
    (await _0x47728c.isVisible()) ? (await _0x47728c.click(), await page.waitForTimeout(300)) : console.log("未找到日期范围选择框");
    const _0x4c315e = page.locator("button:has-text(\"最近一个月\")");
    (await _0x4c315e.isVisible()) ? (await _0x4c315e.click(), await page.waitForTimeout(300)) : console.log("未找到 \"最近一个月\" 按钮");
    let _0x3892ad = false,
      _0x3d1551 = [];
    page.on("response", async _0x35d72e => {
      if (_0x35d72e.url().includes("https://mms.pinduoduo.com/mercury/mms/afterSales/queryList")) {
        try {
          const _0x351377 = await _0x35d72e.json(),
            _0x1d9ac3 = _0x351377.result,
            _0x128229 = _0x1d9ac3.list;
          if (_0x128229 && Array.isArray(_0x128229)) {
            _0x3d1551 = _0x3d1551.concat(_0x128229);
            if (_0x128229.length > 0) {
              const _0x22d256 = _0x128229[_0x128229.length - 1];
              if (_0x22d256.createdAt) {
                const _0x3ece6e = Math.floor((Date.now() - 15 * 24 * 60 * 60 * 1000) / 1000);
                _0x22d256.createdAt < _0x3ece6e && (_0x3892ad = true, console.log("[Network] << 检测到最后一条数据 createdAt (" + _0x22d256.createdAt + ") 超过15天 (" + _0x3ece6e + ")，设置 needBreak 为 true。"));
              }
              _0x3d1551.length > 1000 && (_0x3892ad = true, console.log("超1000条 break"));
            }
          }
        } catch (_0x4f1891) {
          console.error("[Network] << 无法解析申诉列表响应为JSON:", _0x4f1891);
        }
      }
    });
    const _0x4ed498 = page.locator("button:has-text(\"查询\")");
    (await _0x4ed498.isVisible()) ? (await _0x4ed498.click(), await page.waitForTimeout(3000)) : console.log("未找到 \"查询\" 按钮");
    const _0x4958e0 = page.locator("li.PGT_totalText_5-163-0");
    let _0x430708 = 0;
    if (await _0x4958e0.isVisible()) {
      const _0x4d224d = await _0x4958e0.innerText();
      _0x430708 = parseInt(_0x4d224d.match(/\d+/)[0], 10);
      console.log("数据加载成功: " + _0x4d224d);
    } else console.log("未找到数据总条数显示元素 (li.PGT_totalText_5-163-0)，可能数据加载失败或页面结构有变。");
    await page.waitForTimeout(1000);
    if (_0x430708 > 10) {
      const _0x1e8108 = page.locator("input[data-testid=\"beast-core-select-htmlInput\"][value=\"10\"]");
      (await _0x1e8108.isVisible()) ? (await _0x1e8108.click(), await page.waitForTimeout(500)) : console.log("未找到每页显示20条的输入框");
      const _0x62fd23 = page.locator("li[role=\"option\"]:has-text(\"100\")");
      (await _0x62fd23.isVisible()) ? (await _0x62fd23.click(), await page.waitForTimeout(500)) : console.log("未找到每页显示100条的选项");
      await page.waitForTimeout(1000);
      let _0x105ae6 = true;
      do {
        if (_0x3892ad) break;
        await _0x483ec4.evaluateScrollBottom(page);
        await new Promise(_0x545003 => setTimeout(_0x545003, 1500));
        const _0x364e32 = "li[data-testid=\"beast-core-pagination-next\"].PGT_next_5-163-0",
          _0x537d38 = page.locator(_0x364e32),
          _0x3c0291 = await _0x537d38.count();
        if (_0x3c0291 === 0) {
          _0x105ae6 = false;
          continue;
        }
        const _0x52c862 = await _0x537d38.isVisible();
        if (!_0x52c862) await _0x537d38.scrollIntoViewIfNeeded();
        const _0x11e267 = await _0x537d38.isEnabled(),
          _0x3ae581 = await _0x537d38.getAttribute("class"),
          _0x31d7ca = _0x3ae581 && _0x3ae581.includes("PGT_disabled_5-163-0");
        if (_0x52c862 && _0x11e267 && !_0x31d7ca) await _0x537d38.click();else {
          _0x105ae6 = false;
        }
      } while (_0x105ae6);
    }
    let _0x5629d1 = _0x5172ed.map(_0x3d1551, function (_0xc9c734) {
      return {
        "mall_id": _0x2be934,
        "id": _0xc9c734.id,
        "afterSalesType": _0xc9c734.afterSalesType,
        "afterSalesStatus": _0xc9c734.afterSalesStatus,
        "afterSalesReasonDesc": _0xc9c734.afterSalesReasonDesc,
        "orderSn": _0xc9c734.orderSn,
        "createdAt": _0xc9c734.createdAt,
        "appealSubType": 2
      };
    });
    _0xbdf4eb.addNeedApplyData(_0x2be934, _0x5629d1);
    exports.addSyncLogDone(_0x31d634, _0x2be934, "仅退款工作台");
  } catch (_0x4ff328) {
    console.log(_0x4ff328);
  }
  return true;
};
exports.hasSyncLog = function (_0x33ae42, _0x3ceef6, _0x307552) {
  const _0x350b34 = "日志/同步/" + _0x307552 + "/" + _0x17ed4e().format("YYYY-MM-DD");
  let _0x3ab31b = _0x2d129d.getData(_0x350b34) || [];
  const _0x211e8b = _0x5172ed.find(_0x3ab31b, function (_0x188267) {
    return _0x188267.mall_id == _0x3ceef6;
  });
  if (!_0x211e8b || _0x211e8b.status != 2) {
    return false;
  }
  return true;
};
exports.addSyncLogStart = function (_0x29e3e4, _0x32a1cc, _0x274b39) {
  const _0x3bde2a = "日志/同步/" + _0x274b39 + "/" + _0x17ed4e().format("YYYY-MM-DD");
  let _0x1bfa92 = _0x2d129d.getData(_0x3bde2a) || [];
  const _0x50c6bb = _0x5172ed.find(_0x1bfa92, function (_0x2001ea) {
    return _0x2001ea.mall_id == _0x32a1cc;
  });
  !_0x50c6bb && (_0x1bfa92.push({
    "wss_port": _0x29e3e4,
    "mall_id": _0x32a1cc,
    "status": 1,
    "t": new Date().getTime()
  }), _0x2d129d.saveData(_0x3bde2a, _0x1bfa92));
};
exports.addSyncLogDone = function (_0x5f2c76, _0x13d0ec, _0xc2d5e5) {
  const _0x3f9bfc = "日志/同步/" + _0xc2d5e5 + "/" + _0x17ed4e().format("YYYY-MM-DD");
  let _0x158e83 = _0x2d129d.getData(_0x3f9bfc);
  const _0x1a4ee3 = _0x5172ed.find(_0x158e83, function (_0x3596f2) {
    return _0x3596f2.mall_id == _0x13d0ec;
  });
  _0x1a4ee3 && (_0x1a4ee3.status = 2, _0x1a4ee3.done_t = new Date().getTime(), _0x2d129d.saveData(_0x3f9bfc, _0x158e83));
};