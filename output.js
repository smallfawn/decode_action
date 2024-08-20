//Tue Aug 20 2024 13:57:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var common = require("./common.js");
var utils = require("./utils");
const OrderWithoutDestination = "com.hellobike.atlas.business.portal.PortalActivity";
const OrderWithDestination = "com.hellobike.hitch.business.match.temp.HitchDriverTempMatchActivity";
const OrderOneMore = "com.hellobike.hitch.business.match.HitchMatchDriverActivity";
const OrderOneMore2 = "com.hellobike.hitch.business.match.newDriver.ui.HitchMatchDriverActivity2";
const OrderDetail = "com.hellobike.hitch.business.order.details.newdriver.pre.HitchDriverPreOrderDetailActivity";
const HelloPackage = "com.jingyao.easybike";
const HelloPlatform = function () {
  function _0x13208d(_0x4618d7) {
    this["controller"] = _0x4618d7;
    this["refresh_btns"] = [];
    this["refresh_idx"] = 0;
    this["init_step"] = 0;
    this["notFound"] = 0;
  }
  _0x13208d["prototype"]["launch"] = function (_0x1b38d2) {
    return app["launch"](HelloPackage);
  };
  _0x13208d["prototype"]["start"] = function (_0x22cf9e) {
    let _0x38fa81 = currentActivity();
    let _0xc32642 = ![];
    let _0x55ded1 = ![];
    switch (_0x38fa81) {
      case OrderWithoutDestination:
        _0xc32642 = !![];
        _0x55ded1 = this["refreshAndCheckOrder"](_0x22cf9e);
        break;
      case OrderOneMore:
      case OrderOneMore2:
        _0xc32642 = !![];
        _0x55ded1 = this["oneMoreOrder"](_0x22cf9e);
        break;
      case OrderWithDestination:
        _0xc32642 = !![];
        _0x55ded1 = this["oneMoreOrder"](_0x22cf9e);
        break;
      default:
        this["notFound"]++;
        if (this["notFound"] >= 5) {
          let _0x5732f2 = text("\u67E5\u770B\u5176\u4ED6\u8BA2\u5355")["findOnce"]();
          if (_0x5732f2 != undefined) {
            log("\u5931\u6548");
            _0x5732f2["click"]();
          }
          if (_0x38fa81 == OrderDetail) {
            this["notFound"]++;
            back();
          }
          this["notFound"] = 0;
        }
        log("not found", _0x38fa81);
    }
    return [_0xc32642, _0x55ded1];
  };
  _0x13208d["prototype"]["refreshAndCheckOrder"] = function (_0x4c23fc) {
    console["log"]("refreshAndCheckOrder");
    let _0x5c24b1 = 0;
    let _0x51bdd0 = !![];
    for (let _0x245381 = 0; _0x245381 < 10; _0x245381++) {
      log("\u68C0\u67E5\u8BA2\u5355", _0x245381);
      let _0x5c3630 = id("rvMatchOrders")["findOne"](200);
      let _0x135db9 = id("driver_new_scroll")["findOne"](200);
      let _0x5b4b27 = id("rcQuickScreen")["findOne"](200);
      let _0x5506a3 = id("btnRefresh")["findOne"](200);
      if (_0x5b4b27 == undefined || _0x5c3630 == undefined || _0x135db9 == undefined) {
        if (currentActivity() == OrderDetail) {
          back();
        }
        _0x5c24b1++;
        if (_0x5c24b1 == 5) {
          if (_0x5506a3 != undefined) {
            _0x5506a3["click"]();
          } else if (_0x5b4b27 && _0x5b4b27["childCount"]() > 0) {
            _0x5b4b27["child"](0)["click"]();
          }
          _0x5c24b1 = 0;
          toastLog("\u672A\u68C0\u6D4B\u5230\u8BA2\u5355");
        }
        log("not found");
        sleep(200);
        continue;
      }
      if (_0x5b4b27["bounds"]()["top"] > device["height"] / 3) {
        console["log"]("\u6EDA\u52A8\u5C4F\u5E55...");
        _0x135db9["scrollDown"]();
        sleep(200);
        continue;
      }
      if (this["init_step"] == 0 && _0x4c23fc["solo"]) {
        _0x5b4b27["child"](2)["click"]();
        this["init_step"] = 1;
        continue;
      }
      if (this["init_step"] == 1 && _0x4c23fc["solo"]) {
        _0x5b4b27["child"](1)["click"]();
        this["init_step"] = 2;
        _0x51bdd0 = ![];
        continue;
      }
      if (_0x51bdd0) {
        if (_0x5506a3 != undefined) {
          _0x5506a3["click"]();
        } else {
          _0x5b4b27["child"](0)["click"]();
        }
        _0x51bdd0 = ![];
        sleep(500);
        continue;
      }
      let _0x5f512a = ![];
      let _0x464f58 = _0x5c3630["childCount"]();
      for (let _0x144c3a = 0; _0x144c3a < _0x464f58;) {
        let _0x132369 = _0x5c3630["child"](_0x144c3a);
        _0x144c3a++;
        let _0xeaa732 = this["parseOrder"](_0x132369, ![], _0x4c23fc["onlyPeople"]);
        _0xeaa732["percent"] = _0x4c23fc["percent"];
        if (_0xeaa732["people"] == -1) {
          _0xeaa732["people"] = _0x4c23fc["peopleMin"];
        }
        if (_0xeaa732["weight"] == -1) {
          _0xeaa732["weight"] = _0x4c23fc["weightMin"];
        }
        console["log"](_0x144c3a, _0xeaa732);
        if (_0xeaa732["ok"] == ![]) {
          continue;
        }
        if (_0xeaa732["match"](_0x4c23fc)) {
          if (_0x132369["click"]()) {
            _0x5f512a = this["confirm"](_0xeaa732, _0x4c23fc, !![]);
            if (!_0x5f512a && back()) {
              sleep(500);
              if (currentActivity() == OrderDetail) {
                _0x5f512a = this["confirm"](_0xeaa732, _0x4c23fc, !![]);
              }
            }
            console["log"]("result: ", _0x5f512a);
          }
          break;
        }
      }
      if (_0x5f512a) {
        return _0x5f512a;
      }
      break;
    }
  };
  _0x13208d["prototype"]["oneMoreOrder"] = function (_0x375dcb) {
    let _0x5e35fb = 0;
    let _0x1eed00 = !![];
    for (let _0x1d9380 = 0; _0x1d9380 < 10; _0x1d9380++) {
      log("\u68C0\u67E5\u8BA2\u5355", _0x1d9380);
      let _0x399ed9 = id("clFilterHighway")["findOnce"]();
      let _0x50494c = id("rcQuickScreen")["findOnce"]();
      let _0x509698 = id("orderRecycler")["findOnce"]();
      if (_0x399ed9 == undefined && _0x50494c == undefined || _0x509698 == undefined) {
        if (currentActivity() == OrderDetail) {
          back();
        }
        _0x5e35fb++;
        if (_0x5e35fb == 5) {
          _0x5e35fb = 0;
          toastLog("\u672A\u68C0\u6D4B\u5230\u62A2\u5355\u9875\u9762");
        }
        log("not found");
        sleep(200);
        continue;
      }
      _0x399ed9 = _0x399ed9 == undefined ? _0x50494c["child"](0) : _0x399ed9;
      if (_0x50494c != undefined && this["init_step"] == 0 && _0x375dcb["solo"]) {
        _0x50494c["child"](2)["click"]();
        this["init_step"] = 1;
        continue;
      }
      if (_0x50494c != undefined && this["init_step"] == 1 && _0x375dcb["solo"]) {
        _0x50494c["child"](1)["click"]();
        this["init_step"] = 2;
        _0x1eed00 = ![];
        continue;
      }
      if (_0x1eed00) {
        _0x399ed9["click"]();
        _0x1eed00 = ![];
        sleep(500);
        continue;
      }
      let _0x253ded = textContains("\u5237\u65B0")["findOnce"]();
      if (_0x253ded != undefined) {
        let _0x14719f = _0x253ded["text"]();
        log("text: ", _0x1d9380, _0x14719f);
        if (_0x14719f["indexOf"]("\u6B63\u5728\u5237\u65B0") >= 0) {
          sleep(200);
          continue;
        } else if (_0x14719f["indexOf"]("\u91CA\u653E\u7ACB\u5373\u5237\u65B0") >= 0) {
          sleep(200);
          continue;
        }
      }
      let _0x46b213 = ![];
      let _0x29a9d8 = _0x509698["childCount"]();
      for (let _0x4e236c = 0; _0x4e236c < _0x29a9d8;) {
        let _0x359b77 = _0x509698["child"](_0x4e236c);
        _0x4e236c++;
        let _0x1384f1 = this["parseOrder"](_0x359b77, !![], _0x375dcb["onlyPeople"]);
        if (_0x1384f1["people"] == -1) {
          _0x1384f1["people"] = _0x375dcb["peopleMin"];
        }
        if (_0x1384f1["weight"] == -1) {
          _0x1384f1["weight"] = _0x375dcb["weightMin"];
        }
        console["log"](_0x4e236c, _0x1384f1);
        if (_0x1384f1["ok"] == ![]) {
          continue;
        }
        if (_0x1384f1["match"](_0x375dcb)) {
          let _0x2da142 = _0x375dcb["pick_time"] && _0x375dcb["target_time"] != undefined;
          if (_0x2da142) {
            let _0x532bee = id("clOrder")["findOnce"]();
            let _0x4fc4ed;
            if (_0x532bee != undefined) {
              _0x4fc4ed = _0x532bee["findOne"](id("tvDate"));
            }
            if (_0x4fc4ed != undefined) {
              let _0x1d5121 = utils["parseDate"](_0x4fc4ed["text"]());
              log("\u51FA\u53D1\u65F6\u95F4: ", _0x1d5121);
              if (_0x1d5121 > _0x1384f1["start_time"] && _0x1d5121 <= _0x1384f1["end_time"]) {
                _0x2da142 = ![];
              }
            }
          }
          if (_0x359b77["click"]()) {
            _0x46b213 = this["confirm"](_0x1384f1, _0x375dcb, _0x2da142);
            if (!_0x46b213 && back()) {
              sleep(500);
              log("back------", currentActivity());
              if (currentActivity() == OrderDetail) {
                _0x46b213 = this["confirm"](_0x1384f1, _0x375dcb, _0x2da142);
              }
            }
            console["log"]("result: ", _0x46b213);
          }
          break;
        }
      }
      if (_0x46b213) {
        return _0x46b213;
      }
      break;
    }
  };
  _0x13208d["prototype"]["confirm"] = function (_0x288946, _0x2b9ed1, _0x34b43c) {
    let _0x334301 = _0x288946["shareOrOther"]["length"] >= 5;
    let _0x410288 = _0x288946["shareOrOther"] == "\u72EC\u4EAB";
    let _0x21495 = _0x288946["shareOrOther"] == "\u62FC\u5EA7" || _0x288946["shareOrOther"] == "\u8212\u9002\u62FC";
    let _0x30db07 = _0x288946["date"]["indexOf"]("~") >= 0;
    log("type: ", _0x334301, _0x410288, _0x21495, _0x30db07);
    let _0x5c11f6 = id("tvButton")["findOnce"]();
    let _0x206219 = text("\u67E5\u770B\u5176\u4ED6\u8BA2\u5355")["findOnce"]();
    for (let _0xd2b741 = 0; _0xd2b741 < 10; _0xd2b741++) {
      log("find tvButton: ", _0xd2b741);
      if (_0x206219 != undefined) {
        log("\u5931\u6548");
        _0x206219["click"]();
        return ![];
      }
      if (_0x5c11f6 == undefined) {
        sleep(200);
        _0x5c11f6 = id("tvButton")["findOnce"]();
        _0x206219 = text("\u67E5\u770B\u5176\u4ED6\u8BA2\u5355")["findOnce"]();
      } else {
        if (!_0x30db07 && !_0x334301 && _0x2b9ed1["test"]) {
          toastLog("\u6D4B\u8BD5\u6A21\u5F0F\uFF0C\u4E0D\u786E\u8BA4");
          break;
        }
        _0x5c11f6["click"]();
        break;
      }
    }
    if (!_0x30db07 && !_0x334301) {
      this["controller"]["play"]();
      return !![];
    }
    if (_0x334301) {
      for (let _0x12b7af = 0; _0x12b7af < 10; _0x12b7af++) {
        log("select: ", _0x12b7af);
        let _0x58aa0c = id("rvSimuSelect")["findOnce"]();
        if (_0x58aa0c != undefined && _0x58aa0c["child"](1) != undefined) {
          log("pick: ", _0x58aa0c["child"](1)["click"]());
          sleep(200);
          let _0x27dc51 = id("tvPickerSure")["findOnce"]();
          for (let _0x1314c6 = 0; _0x1314c6 < 5; _0x1314c6++) {
            log("picker", _0x1314c6);
            if (_0x27dc51 != undefined) {
              log("picker sure: ", _0x27dc51["click"]());
              break;
            }
            sleep(200);
            _0x27dc51 = id("tvPickerSure")["findOnce"]();
          }
          break;
        }
        sleep(200);
      }
    }
    if (!![]) {
      let _0x4f1409 = text("\u63A5\u5355\u63D0\u9192")["findOnce"]();
      let _0x44b42c = id("tvButton")["findOnce"]();
      let _0x4d67cd = id("tvPickerSure")["findOnce"]();
      for (let _0x351116 = 0; _0x351116 < 10; _0x351116++) {
        log("find tvButton for warning: ", _0x351116);
        if (_0x4d67cd != undefined && _0x4d67cd["getText"]() == "\u786E\u5B9A") {
          log("found confirm button");
          break;
        }
        if (_0x4f1409 == undefined || _0x44b42c == undefined) {
          sleep(200);
          _0x4f1409 = text("\u63A5\u5355\u63D0\u9192")["findOnce"]();
          _0x44b42c = id("tvButton")["findOnce"]();
          _0x4d67cd = id("tvPickerSure")["findOnce"]();
        } else {
          if (_0x44b42c["click"]()) {
            log("click warning");
            break;
          }
          sleep(200);
        }
      }
    }
    for (let _0x3b0720 = 0; _0x3b0720 < 5; _0x3b0720++) {
      let _0x36cb4a = idMatches(/.*tvRightButton|.*tvPickerSure/)["findOne"](200);
      if (_0x36cb4a == undefined) {
        sleep(200);
        continue;
      }
      let _0x3b0e38 = _0x36cb4a["id"]();
      log("button id: ", _0x3b0e38);
      if (_0x3b0e38["endsWith"]("tvRightButton")) {
        _0x36cb4a["click"]();
        break;
      } else if (_0x3b0e38["endsWith"]("tvPickerSure")) {
        break;
      }
    }
    if (_0x34b43c == !![] && _0x2b9ed1["pick_time"] && _0x2b9ed1["target_time"] != undefined) {
      this["pickTime"](_0x288946, _0x2b9ed1);
    }
    let _0x399a07 = ![];
    let _0x44480e = id("tvPickerSure")["findOnce"]();
    for (let _0x247cf7 = 0; _0x247cf7 < 10; _0x247cf7++) {
      log("confirm time", _0x247cf7);
      if (_0x5c11f6 != undefined && _0x5c11f6["getText"]()["indexOf"]("\u51FA\u53D1") >= 0) {
        log("text: ", _0x5c11f6["getText"]());
        _0x399a07 = !![];
        break;
      }
      if (_0x44480e == undefined) {
        sleep(200);
        _0x44480e = id("tvPickerSure")["findOnce"]();
        _0x5c11f6 = id("tvButton")["findOnce"]();
      } else {
        log("success");
        _0x399a07 = !![];
        if (_0x2b9ed1["test"]) {
          toastLog("\u6D4B\u8BD5\u6A21\u5F0F\uFF0C\u4E0D\u786E\u8BA4");
          break;
        }
        if (_0x44480e["click"]()) {
          log("final click");
          break;
        }
      }
    }
    for (let _0x3dd11b = 0; _0x3dd11b < 3; _0x3dd11b++) {
      log("\u8FDF\u5230\u63D0\u9192", _0x3dd11b);
      let _0xa9550b = id("tvRightButton")["findOne"](200);
      if (_0xa9550b == undefined) {
        sleep(200);
        continue;
      }
      _0xa9550b["click"]();
      break;
    }
    if (_0x399a07) {
      this["controller"]["play"]();
    }
    return _0x399a07;
  };
  _0x13208d["prototype"]["pickTime"] = function (_0x4a6184, _0x25d25f) {
    if (_0x25d25f["target_time"] == undefined) {
      return;
    }
    let _0x2d6309 = !![];
    let _0x471d17 = -1;
    let _0x7ae672 = function (_0x2b8254, _0x332f33) {
      for (let _0x57a108 = 0; _0x57a108 < 8; _0x57a108++) {
        log("find wheel: ", _0x2b8254, _0x57a108, _0x332f33);
        let _0x370841 = id(_0x2b8254)["findOne"](200);
        if (_0x370841 == undefined) {
          continue;
        }
        if (_0x471d17 == -1) {
          _0x471d17 = _0x370841["bounds"]()["top"];
          continue;
        }
        if (_0x471d17 - 5 > _0x370841["bounds"]()["top"]) {
          _0x471d17 = _0x370841["bounds"]()["top"];
          continue;
        }
        if (_0x2d6309) {
          sleep(100);
          _0x2d6309 = ![];
          continue;
        }
        let _0x446269 = _0x370841["bounds"]();
        let _0x2c3302 = _0x446269["height"]() / 7;
        let _0x3e9f27 = _0x446269["centerX"]();
        let _0xc76d05 = _0x446269["centerY"]();
        while (_0x332f33 > 3) {
          swipe(_0x3e9f27, _0xc76d05, _0x3e9f27, _0xc76d05 - _0x2c3302 * 3 * 1.2, 200);
          _0x332f33 -= 3;
          sleep(200);
        }
        if (_0x332f33 > 0) {
          swipe(_0x3e9f27, _0xc76d05, _0x3e9f27, _0xc76d05 - _0x2c3302 * _0x332f33 * 1.2, 200);
        }
        break;
      }
    };
    let _0x3e5e78 = _0x25d25f["target_time"];
    if (_0x3e5e78 < _0x4a6184["start_time"]) {
      _0x3e5e78 = _0x4a6184["start_time"];
    } else if (_0x3e5e78 > _0x4a6184["end_time"]) {
      _0x3e5e78 = _0x4a6184["end_time"];
    }
    let _0x2e5fd2 = _0x4a6184["start_time"]["getDate"]();
    let _0x2dff16 = _0x4a6184["start_time"]["getHours"]();
    let _0x5d51ca = _0x4a6184["start_time"]["getMinutes"]();
    let _0x362c0c = _0x3e5e78["getDate"]() - _0x2e5fd2;
    let _0x481b91 = _0x3e5e78["getHours"]() - _0x2dff16;
    let _0x37ec3d = _0x3e5e78["getMinutes"]() - _0x5d51ca;
    if (_0x362c0c > 0) {
      _0x481b91 = _0x3e5e78["getHours"]();
      _0x37ec3d = _0x3e5e78["getMinutes"]();
      _0x7ae672("weekWheelView", _0x362c0c);
      sleep(300);
    }
    if (_0x481b91 > 0) {
      _0x37ec3d = _0x3e5e78["getMinutes"]();
      _0x7ae672("hourWheelView", _0x481b91);
      sleep(500);
    }
    if (_0x37ec3d / 5 > 0.5) {
      _0x7ae672("minuteWheelView", Math["round"](_0x37ec3d / 5));
    }
  };
  _0x13208d["prototype"]["parseOrder"] = function (_0xa73eec, _0xc60a5f, _0x315cbe) {
    let _0x609f39 = new common["OrderInfo"]();
    let _0x4e4e9d = 0;
    _0xa73eec["find"](className("android.widget.TextView"))["forEach"](function (_0x4b5d81) {
      let _0x4b2f42 = _0x4b5d81["id"]();
      if (_0x4b2f42 == undefined) {
        return;
      }
      let _0x3b9304 = _0x4b5d81["text"]();
      let _0x419c95 = _0x4b2f42["indexOf"]("/");
      if (_0x419c95 >= 0) {
        _0x4b2f42 = _0x4b2f42["substring"](_0x419c95 + 1);
      }
      switch (_0x4b2f42) {
        case "tvStartDistanceCross":
        case "tvStartAddress":
          _0x4e4e9d++;
          let _0x46f508 = _0x3b9304["search"](common["NumberReg"]);
          if (_0x46f508 >= 0) {
            _0x609f39["startDist"] = parseFloat(_0x3b9304["substring"](_0x46f508));
          }
          break;
        case "tvEndDistanceCross":
        case "tvEndDistance":
          _0x46f508 = _0x3b9304["search"](common["NumberReg"]);
          if (_0x46f508 >= 0) {
            _0x609f39["endDist"] = parseFloat(_0x3b9304["substring"](_0x46f508));
          }
          break;
        case "tvDate":
          _0x4e4e9d++;
          _0x609f39["date"] = _0x3b9304;
          let [_0x3ce933, _0x58f4b4] = utils["parseTimeRange"](_0x3b9304, "~");
          _0x609f39["start_time"] = _0x3ce933;
          _0x609f39["end_time"] = _0x58f4b4;
          break;
        case "tvHitchPercent":
          let _0x2e64b3 = parseInt(_0x3b9304);
          _0x609f39["percent"] = _0x2e64b3;
          break;
        case "tvAmount":
          _0x4e4e9d++;
          _0x46f508 = _0x3b9304["search"](common["NumberReg"]);
          let _0x4fd9fe = _0x3b9304["substring"](_0x46f508);
          _0x609f39["amount"] = parseFloat(_0x4fd9fe);
          break;
        case "tvDriverPeopleCount":
          _0x4e4e9d++;
          _0x609f39["people"] = parseInt(_0x3b9304);
          break;
        case "tvDriverPooling":
          _0x4e4e9d++;
          _0x609f39["shareOrOther"] = _0x3b9304;
          if (_0x3b9304["indexOf"]("\u72EC\u4EAB") != -1) {
            _0x609f39["solo"] = !![];
          }
          break;
        default:
          break;
      }
    });
    if (_0x4e4e9d == 5) {
      _0x609f39["ok"] = !![];
      _0x609f39["sumDist"] = _0x609f39["endDist"] + _0x609f39["startDist"];
    }
    return _0x609f39;
  };
  _0x13208d["prototype"]["sleep"] = function (_0x113789, _0x306b09) {
    let _0x3a8439 = new Date()["getTime"]() - _0x113789;
    let _0x3ece19 = (_0x306b09["interval"] + Math["random"]()) * 1000;
    log("sleep_time: ", _0x3ece19, _0x3a8439);
    if (_0x3ece19 > _0x3a8439) {
      sleep(_0x3ece19 - _0x3a8439);
    } else {
      sleep(100);
    }
  };
  return _0x13208d;
}();
module["exports"] = HelloPlatform;