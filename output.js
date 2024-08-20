//Tue Aug 20 2024 13:56:15 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var common = require("./common.js");
var utils = require("./utils");
const OrderDiDi = "com.didi.sdk.app.MainActivity";
const OrderDiDi2 = "android.app.Dialog";
const OrderStartDistID = "from_tv_tag";
const OrderEndDistID = "to_tv_tag";
const OrderDateID = "sfc_new_order_card_time_title";
const OrderDegreeID = "sfc_new_order_card_degree_title";
const OrderPriceID = "sfc_order_price_content";
const OrderPeopleID = "sfc_order_card_tips_content";
const DiDiPackage = "com.sdu.didi.psnger";
const DiDiPlatform = function () {
  function _0xa64c63(_0x501fcc) {
    this["controller"] = _0x501fcc;
    this["refresh_btns"] = [];
    this["refresh_idx"] = 0;
  }
  _0xa64c63["prototype"]["init"] = function (_0x38d671) {
    if (this["refresh_btns"]["length"] == 0) {
      this["findRefreshBtn"]();
    }
  };
  _0xa64c63["prototype"]["start"] = function (_0x240fa2) {
    this["init"]();
    this["refresh_btns"][this["refresh_idx"]]["click"]();
    let _0xd1cb81 = currentActivity();
    let _0x4c9319 = ![];
    let _0x1fa16e = ![];
    switch (_0xd1cb81) {
      case OrderDiDi:
      case OrderDiDi2:
        _0x4c9319 = !![];
        this["refresh_idx"] = (this["refresh_idx"] + 1) % this["refresh_btns"]["length"];
        _0x1fa16e = this["didi_order"](_0x240fa2);
        break;
      default:
        log(_0xd1cb81);
    }
    return [_0x4c9319, _0x1fa16e];
  };
  _0xa64c63["prototype"]["findRefreshBtn"] = function () {
    let _0x11e101;
    let _0x20a75e = [];
    let _0x449861 = ![];
    for (let _0x300ead = 0; _0x300ead < 10; _0x300ead++) {
      let _0xdfb2f = id("route_list_sort_rv")["findOnce"]();
      _0x11e101 = id("order_card_recycler")["findOnce"]();
      if (_0x11e101 == undefined && _0xdfb2f == undefined) {
        log("order not found");
        sleep(200);
        continue;
      }
      if (_0xdfb2f != undefined) {
        if (_0xdfb2f["bounds"]()["top"] > device["height"] / 2) {
          swipe(device["width"] / 2, device["height"] * 2 / 3, device["width"] / 2, device["height"] / 3, 500);
          sleep(200);
          continue;
        }
        bt_refresh = id("bt_refresh")["findOnce"]();
        if (bt_refresh != undefined) {
          _0x449861 = !![];
          _0x20a75e = [bt_refresh];
          break;
        } else {
          log("refresh not found");
          sleep(200);
          continue;
        }
      }
      if (_0x11e101["bounds"]()["top"] > device["height"] / 2) {
        swipe(device["width"] / 2, device["height"] * 2 / 3, device["width"] / 2, device["height"] / 3, 500);
        sleep(200);
        continue;
      }
      log("child count---------", _0x11e101["childCount"]());
      let _0x2cee91 = text("\u667A\u80FD\u6392\u5E8F")["findOnce"]();
      let _0x5b9578 = text("\u987A\u8DEF\u4F18\u5148")["findOnce"]();
      if (_0x2cee91 != undefined && _0x5b9578 != undefined) {
        _0x449861 = !![];
        _0x20a75e = [_0x2cee91, _0x5b9578];
        break;
      } else {
        log("sort not found");
        sleep(200);
        continue;
      }
    }
    if (_0x449861) {
      this["refresh_btns"] = _0x20a75e;
    }
  };
  _0xa64c63["prototype"]["launch"] = function (_0x2c7fc2) {
    return app["launch"](DiDiPackage);
  };
  _0xa64c63["prototype"]["didi_order"] = function (_0x4adcc0) {
    console["log"]("didi_order", _0x4adcc0);
    sleep(500);
    let _0x111fa1;
    for (let _0x178968 = 0; _0x178968 < 3; _0x178968++) {
      log("try times:", _0x178968);
      _0x111fa1 = id("order_card_recycler")["findOne"](200);
      if (_0x111fa1 == undefined) {
        if (this["refresh_btns"]["length"] == 1) {
          continue;
        } else {
          let _0xfadf29 = id("state_view_retry")["findOne"](200);
          if (_0xfadf29 != undefined) {
            _0xfadf29["click"]();
          }
        }
        log("order not found");
        sleep(200);
        continue;
      }
      let _0x18d148 = ![];
      let _0x3d6da8 = _0x111fa1["childCount"]();
      if (_0x3d6da8 > 0 && _0x111fa1["child"](0) == undefined) {
        log("order is undefined");
        sleep(200);
        continue;
      }
      log("order count", _0x3d6da8);
      for (let _0x4e4b3a = 0; _0x4e4b3a < _0x3d6da8; _0x4e4b3a++) {
        let _0x473e99 = _0x111fa1["child"](_0x4e4b3a);
        if (_0x473e99 == undefined) {
          log("order is undefined", _0x4e4b3a, _0x3d6da8);
          break;
        }
        if (_0x473e99["childCount"]() >= 3) {
          if (_0x473e99["child"](2)["text"]() == "\u67E5\u770B\u66F4\u591A") {
            log("recommend order");
            break;
          }
        }
        let _0x5b90f3 = this["parseDiDiOrder"](_0x473e99, !![], _0x4adcc0["onlyPeople"]);
        if (_0x5b90f3["people"] <= 0) {
          _0x5b90f3["people"] = _0x4adcc0["peopleMin"];
        }
        if (_0x5b90f3["weight"] <= 0) {
          _0x5b90f3["weight"] = _0x4adcc0["weightMin"];
        }
        if (_0x5b90f3["percent"] <= 0) {
          _0x5b90f3["percent"] = _0x4adcc0["percent"];
        }
        console["log"](_0x4e4b3a, _0x5b90f3);
        if (_0x5b90f3["ok"] == ![]) {
          continue;
        }
        if (_0x5b90f3["match"](_0x4adcc0)) {
          _0x18d148 = this["didi_confirm"](_0x473e99, _0x5b90f3, _0x4adcc0);
          console["log"]("result: ", _0x18d148);
          break;
        }
      }
      if (_0x18d148) {
        return _0x18d148;
      }
      break;
    }
  };
  _0xa64c63["prototype"]["parseDiDiOrder"] = function (_0x16b030, _0x58b534, _0x2b0c3b) {
    let _0x22fb3a = new common["OrderInfo"]();
    _0x16b030["find"](className("android.widget.TextView"))["forEach"](function (_0x326215) {
      let _0x29b4e7 = _0x326215["id"]();
      if (_0x29b4e7 == undefined) {
        return;
      }
      let _0x410995 = _0x326215["text"]();
      let _0x2a0c7f = _0x29b4e7["indexOf"]("/");
      if (_0x2a0c7f >= 0) {
        _0x29b4e7 = _0x29b4e7["substring"](_0x2a0c7f + 1);
      }
      switch (_0x29b4e7) {
        case OrderStartDistID:
          let _0x189c69 = _0x410995["search"](common["NumberReg"]);
          if (_0x189c69 >= 0) {
            _0x22fb3a["startDist"] = parseFloat(_0x410995["substring"](_0x189c69));
          }
          _0x22fb3a["ok"] = !![];
          break;
        case OrderEndDistID:
          _0x189c69 = _0x410995["search"](common["NumberReg"]);
          if (_0x189c69 >= 0) {
            _0x22fb3a["endDist"] = parseFloat(_0x410995["substring"](_0x189c69));
          }
          break;
        case OrderDateID:
          _0x22fb3a["date"] = _0x410995;
          let [_0x17b10e, _0x28ca2f] = utils["parseTimeRange"](_0x410995, "-");
          _0x22fb3a["start_time"] = _0x17b10e;
          _0x22fb3a["end_time"] = _0x28ca2f;
          break;
        case OrderDegreeID:
          let _0x3c35c8 = parseInt(_0x410995);
          _0x22fb3a["percent"] = _0x3c35c8;
          break;
        case OrderPriceID:
          _0x189c69 = _0x410995["search"](common["NumberReg"]);
          let _0x30e96 = _0x410995["substring"](_0x189c69);
          _0x22fb3a["amount"] = parseFloat(_0x30e96);
          break;
        case OrderPeopleID:
          _0x22fb3a["people"] = parseInt(_0x410995);
          if (_0x410995["indexOf"]("\u72EC\u4EAB") != -1) {
            _0x22fb3a["shareOrOther"] = "\u72EC\u4EAB";
            _0x22fb3a["solo"] = !![];
          } else {
            _0x22fb3a["shareOrOther"] = "\u62FC\u5EA7";
          }
          break;
        default:
          break;
      }
    });
    _0x22fb3a["sumDist"] = _0x22fb3a["endDist"] + _0x22fb3a["startDist"];
    return _0x22fb3a;
  };
  _0xa64c63["prototype"]["didi_confirm"] = function (_0x54e186, _0x27108f, _0x1d42f9) {
    let _0x8bbc1c = _0x54e186["findOne"](id("sfc_wait_list_send_invit_button"));
    for (let _0x4ca535 = 0; _0x4ca535 < 5; _0x4ca535++) {
      if (_0x8bbc1c != undefined && _0x8bbc1c["click"]()) {
        break;
      }
      log("click invit button failed", _0x4ca535, _0x8bbc1c == undefined);
      sleep(100);
      _0x8bbc1c = _0x54e186["findOne"](id("sfc_wait_list_send_invit_button"));
    }
    let _0x1337a5 = ![];
    let _0x1b367c = _0x1d42f9["pick_time"];
    let _0x1af932;
    let _0x2ab9b3 = ![];
    for (let _0x4d78c9 = 0; _0x4d78c9 < 10; _0x4d78c9++) {
      log("find time_result_btn: ", _0x4d78c9, _0x1b367c, _0x1d42f9["target_time"]);
      let _0x411df2 = idMatches(/.*sfc_drv_car_seat_picker_btn|.*time_result_btn|.*half_dialog_right_button/)["findOne"](200);
      if (_0x411df2 != undefined) {
        _0x2ab9b3 = !![];
        let _0x4d407f = _0x411df2["id"]();
        log("button id: ", _0x4d407f);
        if (_0x4d407f["endsWith"]("time_result_btn")) {
          _0x1af932 = _0x411df2;
        } else if (_0x4d407f["endsWith"]("sfc_drv_car_seat_picker_btn")) {
          _0x411df2["click"]();
          sleep(500);
          continue;
        } else if (_0x4d407f["endsWith"]("half_dialog_right_button")) {
          _0x1337a5 = !![];
          if (_0x1d42f9["test"]) {
            toastLog("\u6D4B\u8BD5\u6A21\u5F0F\uFF0C\u4E0D\u786E\u8BA4");
            break;
          }
          if (_0x411df2["click"]()) {
            break;
          }
        }
      } else if (!_0x2ab9b3 && _0x4d78c9 >= 1) {
        log("\u70B9\u51FB\u540C\u884C", _0x8bbc1c["click"]());
      }
      if (_0x1af932 != undefined) {
        if (_0x1b367c && _0x1d42f9["target_time"] != undefined) {
          this["pickTime"](_0x27108f, _0x1d42f9);
          _0x1b367c = ![];
          continue;
        }
        _0x1337a5 = !![];
        if (_0x1d42f9["test"]) {
          toastLog("\u6D4B\u8BD5\u6A21\u5F0F\uFF0C\u4E0D\u786E\u8BA4");
          break;
        }
        if (_0x1af932["click"]()) {
          break;
        }
      }
      sleep(200);
    }
    if (_0x1337a5) {
      sleep(2500);
      if (idEndsWith("order_card_refreshLayout")["findOne"](200) == undefined) {
        this["controller"]["play"]();
      } else {
        _0x1337a5 = ![];
      }
    }
    return _0x1337a5;
  };
  _0xa64c63["prototype"]["pickTime"] = function (_0x9ab8e0, _0x134a9d) {
    if (_0x134a9d["target_time"] == undefined) {
      return;
    }
    let _0x2cbf66 = !![];
    let _0x227526 = 10000;
    let _0x14f97b = function (_0x243433, _0x5880ff, _0x27a4a8) {
      if (_0x243433 == 0 && _0x5880ff == 0 && _0x27a4a8 == 0) {
        return;
      }
      for (let _0x52596b = 0; _0x52596b < 5; _0x52596b++) {
        log("find picker: ", _0x52596b, _0x243433, _0x5880ff, _0x27a4a8);
        let _0x14fb53 = id("time_picker")["findOne"](200);
        if (_0x14fb53 == undefined) {
          continue;
        }
        if (_0x227526 - 5 > _0x14fb53["bounds"]()["top"]) {
          _0x227526 = _0x14fb53["bounds"]()["top"];
          continue;
        }
        if (_0x2cbf66) {
          sleep(100);
          _0x2cbf66 = ![];
          continue;
        }
        if (_0x14fb53["childCount"]() != 1) {
          continue;
        }
        let _0x26b393 = _0x14fb53["child"](0);
        if (_0x26b393["childCount"]() != 3) {
          continue;
        }
        let _0x2afeaa = [_0x243433, _0x5880ff, _0x27a4a8];
        for (let _0x190b3b = 0; _0x190b3b < 3; ++_0x190b3b) {
          if (_0x2afeaa[_0x190b3b] > 0) {
            let _0xd7fea2 = _0x26b393["child"](_0x190b3b);
            let _0x15f4f1 = _0xd7fea2["bounds"]()["height"]() / 5;
            let _0x574172 = _0xd7fea2["bounds"]()["centerX"]();
            let _0x8444e1 = _0xd7fea2["bounds"]()["centerY"]();
            swipe(_0x574172, _0x8444e1, _0x574172, _0x8444e1 - _0x15f4f1 * _0x2afeaa[_0x190b3b], 200);
            sleep(100);
          }
        }
        break;
      }
    };
    let _0x15bb8b = _0x134a9d["target_time"];
    if (_0x15bb8b < _0x9ab8e0["start_time"]) {
      _0x15bb8b = _0x9ab8e0["start_time"];
    } else if (_0x15bb8b > _0x9ab8e0["end_time"]) {
      _0x15bb8b = _0x9ab8e0["end_time"];
    }
    let _0x17a191 = _0x9ab8e0["start_time"]["getDate"]();
    let _0x10a0ab = _0x9ab8e0["start_time"]["getHours"]();
    let _0x13e561 = _0x9ab8e0["start_time"]["getMinutes"]();
    let _0x44e023 = _0x15bb8b["getDate"]() - _0x17a191;
    let _0x1dad12 = _0x15bb8b["getHours"]() - _0x10a0ab;
    let _0x247dfd = _0x15bb8b["getMinutes"]() - _0x13e561;
    if (_0x44e023 > 0) {
      _0x1dad12 = _0x15bb8b["getHours"]();
      _0x247dfd = _0x15bb8b["getMinutes"]();
    }
    if (_0x1dad12 > 0) {
      _0x247dfd = _0x15bb8b["getMinutes"]();
    }
    if (_0x247dfd / 5 > 0) {}
    _0x14f97b(_0x44e023, _0x1dad12, Math["round"](_0x247dfd / 5));
  };
  _0xa64c63["prototype"]["sleep"] = function (_0x36a0d4, _0x5e7a1f) {
    let _0x4ba75d = new Date()["getTime"]() - _0x36a0d4;
    let _0x3329a9 = _0x5e7a1f["interval"] * 1000;
    log("sleep_time: ", _0x3329a9, _0x4ba75d);
    if (_0x3329a9 > _0x4ba75d) {
      sleep(_0x3329a9 - _0x4ba75d);
    } else {
      sleep(100);
    }
  };
  return _0xa64c63;
}();
module["exports"] = DiDiPlatform;