//Sun Sep 29 2024 02:07:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function create_websocket(_0x17506f, _0x43605c) {
  if ("WebSocket" in window) {
    ws = new WebSocket(_0x17506f);
    ws.onerror = function () {
      clearInterval(for_task);
      return error_num < 1 ? (error_num++, setTimeout(() => {
        create_websocket(_0x17506f, _0x43605c);
      }, 2000), false) : ($.get("/public/ajax.php?type=error_feedback&task_id=" + _0x43605c), err_tip("WebSocket服务器连接失败，请重试 !"), false);
    };
    ws.onopen = function () {
      ws.send("{\"task_id\":\"" + _0x43605c + "\",\"task_token\":\"" + md5(_0x43605c + "token_20230313000136kwyktxb0tgspm00yo5", 16) + "\"}");
    };
    ws.onmessage = function (_0x5ce423) {
      var _0x160d32 = JSON.parse(_0x5ce423.data);
      if (_0x160d32.type == "node_error") {
        $("#dns_str_" + _0x160d32.node_id).html("<i class=\"fas fa-minus-circle text-danger\"></i> 监测点异常");
        complete_node_num = complete_node_num + 1;
        if (complete_node_num > check_node_num) {
          return false;
        }
        complete_node_num == check_node_num && $(".checking").hide();
        var _0x14be0d = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width:" + GetPercent(complete_node_num, check_node_num) + ";\" aria-valuenow=\"" + complete_node_num + "\" aria-valuemin=\"0\" aria-valuemax=\"" + check_node_num + "\">" + GetPercent(complete_node_num, check_node_num) + "</div>";
        $("#complete_progress").html(_0x14be0d);
        return false;
      }
      dns(_0x160d32);
    };
    ws.onclose = function () {};
  } else {
    err_tip("您的浏览器不支持WebSocket !");
  }
}
var _0x430a34 = _0x5971;
(function (_0x5c9dc2, _0x68b252) {
  var _0x276b1b = _0x5971,
    _0x286e08 = _0x5c9dc2();
  while (true) {
    try {
      var _0x336e4c = -parseInt(_0x276b1b(279)) / 1 + parseInt(_0x276b1b(336)) / 2 + -parseInt(_0x276b1b(539)) / 3 + parseInt(_0x276b1b(531)) / 4 + -parseInt(_0x276b1b(466)) / 5 * (-parseInt(_0x276b1b(538)) / 6) + -parseInt(_0x276b1b(429)) / 7 * (-parseInt(_0x276b1b(582)) / 8) + -parseInt(_0x276b1b(596)) / 9;
      if (_0x336e4c === _0x68b252) {
        break;
      } else {
        _0x286e08.push(_0x286e08.shift());
      }
    } catch (_0x5e344e) {
      _0x286e08.push(_0x286e08.shift());
    }
  }
})(_0x26a4, 848588);
var _0x18c103 = function () {
    var _0x2f2a84 = true;
    return function (_0x494a79, _0x3760d7) {
      var _0x5c7169 = _0x2f2a84 ? function () {
        var _0x1d280a = _0x5971;
        if (_0x3760d7) {
          var _0x2280ee = _0x3760d7[_0x1d280a(415)](_0x494a79, arguments);
          _0x3760d7 = null;
          return _0x2280ee;
        }
      } : function () {};
      _0x2f2a84 = false;
      return _0x5c7169;
    };
  }(),
  _0x783763 = _0x18c103(this, function () {
    var _0x3f5dd7 = _0x5971;
    return _0x783763[_0x3f5dd7(527)]()[_0x3f5dd7(468)](_0x3f5dd7(445))[_0x3f5dd7(527)]().constructor(_0x783763)[_0x3f5dd7(468)](_0x3f5dd7(445));
  });
_0x783763();
var _0x3d589f = function () {
    var _0x1593b3 = true;
    return function (_0x1b5684, _0x405259) {
      var _0x79a9bf = _0x1593b3 ? function () {
        var _0x51ea47 = _0x5971;
        if (_0x405259) {
          var _0x19f314 = _0x405259[_0x51ea47(415)](_0x1b5684, arguments);
          _0x405259 = null;
          return _0x19f314;
        }
      } : function () {};
      _0x1593b3 = false;
      return _0x79a9bf;
    };
  }(),
  _0x2ee9af = _0x3d589f(this, function () {
    _0x372ac3[_0x11658f(470)] = _0x372ac3[_0x11658f(470)] || {};
    var _0x11658f = _0x5971,
      _0x3a3368 = function () {
        var _0x4bb2cc = _0x5971,
          _0x4d3580;
        try {
          _0x4d3580 = Function("return (function() " + _0x4bb2cc(311) + ");")();
        } catch (_0xee4344) {
          _0x4d3580 = window;
        }
        return _0x4d3580;
      },
      _0x372ac3 = _0x3a3368(),
      _0xe4cb71 = _0x372ac3[_0x11658f(470)],
      _0x164274 = [_0x11658f(477), _0x11658f(512), _0x11658f(313), "error", _0x11658f(327), _0x11658f(275), _0x11658f(339)];
    for (var _0xea715 = 0; _0xea715 < _0x164274[_0x11658f(388)]; _0xea715++) {
      var _0x19f642 = _0x3d589f[_0x11658f(551)].prototype[_0x11658f(326)](_0x3d589f),
        _0x5087b5 = _0x164274[_0xea715],
        _0x3db3f2 = _0xe4cb71[_0x5087b5] || _0x19f642;
      _0x19f642[_0x11658f(448)] = _0x3d589f[_0x11658f(326)](_0x3d589f);
      _0x19f642[_0x11658f(527)] = _0x3db3f2.toString.bind(_0x3db3f2);
      _0xe4cb71[_0x5087b5] = _0x19f642;
    }
  });
_0x2ee9af();
var for_task = 0,
  error_num = 0,
  china_node_num = 0,
  ct_node_num = 0,
  cu_node_num = 0,
  cm_node_num = 0,
  huadong_node_num = 0,
  huanan_node_num = 0,
  huazhong_node_num = 0,
  huabei_node_num = 0,
  xinan_node_num = 0,
  xibei_node_num = 0,
  dongbei_node_num = 0,
  gangaotai_node_num = 0,
  global_node_num = 0,
  asia_node_num = 0,
  europe_node_num = 0,
  north_node_num = 0,
  south_node_num = 0,
  africa_node_num = 0,
  oceania_node_num = 0,
  china_fast_time = 9999,
  china_slow = 0,
  china_all_time = 0,
  ct_fast = 9999,
  ct_slow = 0,
  ct_all_time = 0,
  cu_fast = 9999,
  cu_slow = 0,
  cu_all_time = 0,
  cm_fast = 9999,
  cm_slow = 0,
  cm_all_time = 0,
  huadong_fast = 9999,
  huadong_slow = 0,
  huadong_all_time = 0,
  huanan_fast = 9999,
  huanan_slow = 0,
  huanan_all_time = 0,
  huazhong_fast = 9999,
  huazhong_slow = 0,
  huazhong_all_time = 0,
  huabei_fast = 9999,
  huabei_slow = 0,
  huabei_all_time = 0,
  xinan_fast = 9999,
  xinan_slow = 0,
  xinan_all_time = 0,
  xibei_fast = 9999,
  xibei_slow = 0,
  xibei_all_time = 0,
  dongbei_fast = 9999,
  dongbei_slow = 0,
  dongbei_all_time = 0,
  gangaotai_fast = 9999,
  gangaotai_slow = 0,
  gangaotai_all_time = 0,
  global_fast = 9999,
  global_slow = 0,
  global_all_time = 0,
  asia_fast = 9999,
  asia_slow = 0,
  asia_all_time = 0,
  europe_fast = 9999,
  europe_slow = 0,
  europe_all_time = 0,
  north_fast = 9999,
  north_slow = 0,
  north_all_time = 0,
  south_fast = 9999,
  south_slow = 0,
  south_all_time = 0,
  africa_fast = 9999,
  africa_slow = 0,
  africa_all_time = 0,
  oceania_fast = 9999,
  oceania_slow = 0,
  oceania_all_time = 0;
function echarts_block() {
  var _0x85353a = _0x430a34;
  marker_list = [];
  china_fast = new Array();
  china_data = new Array();
  for (var _0x4789d4 = 0; _0x4789d4 < 34; _0x4789d4++) {
    china_fast[_0x4789d4] = 9999;
    china_data[_0x4789d4] = "";
  }
  splitList = [{
    start: 0,
    end: 30,
    label: _0x85353a(482),
    color: _0x85353a(561)
  }, {
    start: 31,
    end: 50,
    label: _0x85353a(419),
    color: "#42dd3f"
  }, {
    start: 51,
    end: 100,
    label: _0x85353a(341),
    color: _0x85353a(433)
  }, {
    start: 101,
    end: 200,
    label: _0x85353a(553),
    color: "#f6ed44"
  }, {
    start: 201,
    end: 5000,
    label: _0x85353a(342),
    color: _0x85353a(289)
  }, {
    start: 5001,
    end: 99999,
    label: "超时",
    color: _0x85353a(377)
  }];
  option = {
    title: [{
      text: "",
      top: "5px",
      left: "15px",
      x: _0x85353a(381),
      subtext: _0x85353a(474),
      subtextStyle: {
        fontSize: 12,
        color: _0x85353a(571),
        rich: {
          logo: {
            fontSize: 20,
            fontWeight: 700,
            color: "#EEA644",
            backgroundColor: {
              image: "../frame/images/logo.png"
            }
          }
        }
      }
    }],
    tooltip: {
      trigger: "item",
      formatter: function (_0x55df26) {
        var _0x220b9a = _0x85353a;
        if (isNaN(_0x55df26[_0x220b9a(322)])) {
          return _0x220b9a(343) + _0x55df26[_0x220b9a(331)] + "</p>\n                            <p  style=\"line-height: 20px; padding: 0 10px;\">此区域暂时没有数据</p>\n                      </div>\n                      ";
        }
        if (_0x55df26[_0x220b9a(322)] == 0) {
          province_value = _0x220b9a(329);
        } else {
          _0x55df26[_0x220b9a(322)] > 3000 ? province_value = _0x220b9a(598) : province_value = _0x55df26[_0x220b9a(322)] + "ms";
        }
        return _0x220b9a(345) + _0x55df26[_0x220b9a(331)] + _0x220b9a(282) + province_value + _0x220b9a(418) + _0x55df26[_0x220b9a(574)][_0x220b9a(379)] + _0x220b9a(357);
      }
    },
    visualMap: {
      top: _0x85353a(575),
      show: true,
      min: 0,
      max: 99999,
      x: "5%",
      y: _0x85353a(514),
      hoverLink: false,
      splitList: splitList,
      outOfRange: {
        color: _0x85353a(467)
      }
    },
    series: [{
      z: 1,
      name: "",
      type: _0x85353a(552),
      mapType: _0x85353a(547),
      backgroundColor: "#ccc",
      mapLocation: {
        x: _0x85353a(499),
        y: _0x85353a(400)
      },
      emphasis: {
        show: true,
        textStyle: {
          color: _0x85353a(352)
        }
      },
      top: _0x85353a(522),
      hoverable: false,
      roam: false,
      width: _0x85353a(330),
      itemStyle: {
        normal: {
          label: {
            show: false,
            textStyle: {
              color: _0x85353a(578)
            }
          },
          areaStyle: {
            color: "#fff4e7"
          },
          borderColor: _0x85353a(581),
          borderWidth: 1,
          shadowColor: _0x85353a(581)
        },
        emphasis: {
          label: {
            show: false
          }
        }
      },
      data: mydata
    }, {
      z: 100,
      name: _0x85353a(503),
      type: _0x85353a(542),
      coordinateSystem: _0x85353a(376),
      showEffectOn: "emphasis",
      animation: false,
      symbol: _0x85353a(592),
      tooltip: {
        show: false
      },
      silent: true,
      data: marker_list,
      symbolSize: [6, 9],
      rippleEffect: {
        brushType: "stroke"
      },
      itemStyle: {
        color: _0x85353a(386)
      },
      show: false
    }],
    geo: {}
  };
  china_map = echarts[_0x85353a(504)](document[_0x85353a(332)](_0x85353a(384)));
  china_map.on(_0x85353a(483), function (_0x40f546) {
    var _0x41e9c9 = _0x85353a;
    if (_0x40f546[_0x41e9c9(331)] == "") {
      return false;
    }
    $(_0x41e9c9(403))[_0x41e9c9(346)](_0x41e9c9(454), false);
    $(".filter_ip")[_0x41e9c9(558)](_0x40f546.name);
    $(_0x41e9c9(358))[_0x41e9c9(325)]();
    filter_map_count = 0;
    $(_0x41e9c9(316))[_0x41e9c9(370)](function () {
      var _0x2be55e = _0x41e9c9;
      $(this).find(_0x2be55e(324))[_0x2be55e(558)]().indexOf(_0x40f546[_0x2be55e(331)]) != -1 ? (filter_map_count++, $(this).show()) : $(this)[_0x2be55e(443)]();
    });
    $(_0x41e9c9(568))[_0x41e9c9(558)](filter_map_count);
    $(_0x41e9c9(421)).animate({
      scrollTop: $(_0x41e9c9(491))[_0x41e9c9(369)]().top
    }, 300);
  });
  china_map.setOption(option);
  china_map[_0x85353a(389)]();
}
var marker_arr = [{
  name: "北京",
  x_y: _0x430a34(399),
  show: false
}, {
  name: "天津",
  x_y: _0x430a34(567),
  show: false
}, {
  name: "上海",
  x_y: "468,340",
  show: false
}, {
  name: "重庆",
  x_y: _0x430a34(497),
  show: false
}, {
  name: "河北",
  x_y: _0x430a34(294),
  show: false
}, {
  name: "河南",
  x_y: "390,305",
  show: false
}, {
  name: "云南",
  x_y: _0x430a34(473),
  show: false
}, {
  name: "辽宁",
  x_y: _0x430a34(274),
  show: false
}, {
  name: _0x430a34(475),
  x_y: _0x430a34(446),
  show: false
}, {
  name: "湖南",
  x_y: "373,382",
  show: false
}, {
  name: "安徽",
  x_y: _0x430a34(576),
  show: false
}, {
  name: "山东",
  x_y: "435,275",
  show: false
}, {
  name: "新疆",
  x_y: _0x430a34(472),
  show: false
}, {
  name: "江苏",
  x_y: _0x430a34(540),
  show: false
}, {
  name: "浙江",
  x_y: _0x430a34(442),
  show: false
}, {
  name: "江西",
  x_y: _0x430a34(487),
  show: false
}, {
  name: "湖北",
  x_y: _0x430a34(456),
  show: false
}, {
  name: "广西",
  x_y: "349,433",
  show: false
}, {
  name: "甘肃",
  x_y: _0x430a34(521),
  show: false
}, {
  name: "山西",
  x_y: _0x430a34(315),
  show: false
}, {
  name: _0x430a34(490),
  x_y: _0x430a34(577),
  show: false
}, {
  name: "陕西",
  x_y: _0x430a34(314),
  show: false
}, {
  name: "吉林",
  x_y: _0x430a34(455),
  show: false
}, {
  name: "福建",
  x_y: "436,404",
  show: false
}, {
  name: "贵州",
  x_y: _0x430a34(537),
  show: false
}, {
  name: "广东",
  x_y: "392,437",
  show: false
}, {
  name: "青海",
  x_y: _0x430a34(509),
  show: false
}, {
  name: "西藏",
  x_y: _0x430a34(492),
  show: false
}, {
  name: "四川",
  x_y: _0x430a34(423),
  show: false
}, {
  name: "宁夏",
  x_y: _0x430a34(560),
  show: false
}, {
  name: "海南",
  x_y: _0x430a34(452),
  show: false
}, {
  name: "台湾",
  x_y: _0x430a34(404),
  show: false
}, {
  name: "香港",
  x_y: _0x430a34(447),
  show: false
}, {
  name: "澳门",
  x_y: _0x430a34(340),
  show: false
}, {
  name: "南海诸岛",
  x_y: "0,0",
  show: false
}];
function refreshData() {
  var _0x326bab = _0x430a34;
  marker_list = marker_arr[_0x326bab(318)](function (_0x697d0d) {
    var _0x5c0e50 = _0x326bab;
    return _0x697d0d[_0x5c0e50(325)] === true;
  })[_0x326bab(318)](function (_0x518c37) {
    var _0x2d9c91 = _0x326bab,
      _0x5f4af7 = mydata[_0x2d9c91(292)](_0x1f1ee7 => _0x1f1ee7[_0x2d9c91(331)] == _0x518c37[_0x2d9c91(331)]);
    return _0x5f4af7[_0x2d9c91(322)] <= 5000;
  })[_0x326bab(552)](function (_0x1d0122) {
    var _0x2e293a = _0x326bab,
      [_0x339a11, _0x5a69fb] = _0x1d0122[_0x2e293a(444)].split(",")[_0x2e293a(552)](Number),
      _0x3a53d0 = _0x2e293a(306);
    return {
      value: [_0x339a11, _0x5a69fb, _0x3a53d0]
    };
  });
  option[_0x326bab(457)][0][_0x326bab(574)] = mydata;
  marker_switch && (option[_0x326bab(457)][1][_0x326bab(574)] = marker_list);
  china_map.setOption(option);
}
function str_num(_0x1c3ed0, _0x13a50d) {
  var _0x5269af = _0x430a34;
  return _0x1c3ed0[_0x5269af(543)](_0x13a50d)[_0x5269af(388)] - 1;
}
function left(_0x548abf, _0x1e9ebb) {
  return _0x1e9ebb > 0 ? _0x548abf.substring(0, _0x1e9ebb) : null;
}
function right(_0x3a6a0c, _0x5a5908) {
  var _0x7726bc = _0x430a34;
  return _0x3a6a0c[_0x7726bc(388)] - _0x5a5908 >= 0 && _0x3a6a0c[_0x7726bc(388)] >= 0 && _0x3a6a0c[_0x7726bc(388)] - _0x5a5908 <= _0x3a6a0c[_0x7726bc(388)] ? _0x3a6a0c[_0x7726bc(333)](_0x3a6a0c[_0x7726bc(388)] - _0x5a5908, _0x3a6a0c[_0x7726bc(388)]) : null;
}
function change_type(_0x328264) {
  var _0x2196ee = _0x430a34;
  if (_0x328264 === 1) {
    dns_type = "a";
    $(_0x2196ee(373))[_0x2196ee(488)](_0x2196ee(556));
  } else {
    if (_0x328264 === 2) {
      dns_type = _0x2196ee(545);
      $("#dns_type_button")[_0x2196ee(488)](_0x2196ee(396));
    } else {
      if (_0x328264 === 3) {
        dns_type = "mx";
        $(_0x2196ee(373))[_0x2196ee(488)](_0x2196ee(407));
      } else {
        if (_0x328264 === 4) {
          dns_type = "aaaa";
          $(_0x2196ee(373)).html(" AAAA ");
        } else {
          if (_0x328264 === 5) {
            dns_type = "ns";
            $("#dns_type_button").html(_0x2196ee(599));
          } else {
            if (_0x328264 === 6) {
              dns_type = _0x2196ee(557);
              $(_0x2196ee(373))[_0x2196ee(488)](_0x2196ee(485));
            } else {
              if (_0x328264 === 7) {
                dns_type = "ptr";
                $(_0x2196ee(373)).html(" PTR ");
              } else {
                _0x328264 === 8 && (dns_type = "srv", $(_0x2196ee(373)).html(_0x2196ee(412)));
              }
            }
          }
        }
      }
    }
  }
  $(_0x2196ee(453))[_0x2196ee(443)]();
}
function sortByDescNum(_0x18ca9f, _0x2ee51e) {
  var _0x1e11c8 = _0x430a34;
  _0x18ca9f[_0x1e11c8(427)](function (_0x37f8e5, _0x37d62e) {
    return _0x37d62e[_0x2ee51e] - _0x37f8e5[_0x2ee51e];
  });
  return _0x18ca9f;
}
function filter_ip(_0x339bd2) {
  var _0x2c8431 = _0x430a34;
  $(_0x2c8431(354))[_0x2c8431(443)]();
  $(_0x2c8431(338))[_0x2c8431(558)](_0x339bd2);
  $(_0x2c8431(358)).show();
  $(_0x2c8431(403)).prop(_0x2c8431(454), false);
  var _0x376c97 = 0;
  $(_0x2c8431(316))[_0x2c8431(370)](function () {
    var _0x2f02d8 = _0x2c8431;
    $(this)[_0x2f02d8(437)](_0x2f02d8(524)) ? str_num($(this)[_0x2f02d8(437)]("ip_list"), "," + _0x339bd2 + ",") > 0 ? (_0x376c97++, $(this).show()) : $(this)[_0x2f02d8(443)]() : $(this)[_0x2f02d8(443)]();
  });
  $(_0x2c8431(568)).text(_0x376c97);
}
$(_0x430a34(403))[_0x430a34(483)](function () {
  var _0x247c1d = _0x430a34;
  $(_0x247c1d(358))[_0x247c1d(443)]();
  var _0xfcc006 = $(this)[_0x247c1d(566)](),
    _0x140aa6 = 0,
    _0x422757 = 0,
    _0x3732dd = 0,
    _0x2ca3c0 = 0,
    _0x440612 = 0,
    _0x280205 = 0,
    _0x5be9b0 = 0;
  $(_0x247c1d(316))[_0x247c1d(370)](function () {
    var _0x5fcb81 = _0x247c1d;
    _0x140aa6++;
    if ($(this).attr(_0x5fcb81(570)) == _0xfcc006 || _0xfcc006 == _0x5fcb81(283)) {
      $(this).show();
      if (_0xfcc006 == "1") {
        _0x422757++;
      } else {
        if (_0xfcc006 == "2") {
          _0x3732dd++;
        } else {
          if (_0xfcc006 == "3") {
            _0x2ca3c0++;
          } else {
            if (_0xfcc006 == "4") {
              _0x440612++;
            } else {
              _0xfcc006 == "5" && _0x280205++;
            }
          }
        }
      }
    } else {
      $(this).hide();
    }
    _0xfcc006 == "6" && $(this).attr(_0x5fcb81(519)) == _0x5fcb81(408) && ($(this).show(), _0x5be9b0++);
    if (_0xfcc006 == _0x5fcb81(283)) {
      $(_0x5fcb81(568))[_0x5fcb81(558)](_0x140aa6);
    } else {
      if (_0xfcc006 == "1") {
        $(_0x5fcb81(568))[_0x5fcb81(558)](_0x422757);
      } else {
        if (_0xfcc006 == "2") {
          $(".show_record")[_0x5fcb81(558)](_0x3732dd);
        } else {
          if (_0xfcc006 == "3") {
            $(_0x5fcb81(568))[_0x5fcb81(558)](_0x2ca3c0);
          } else {
            if (_0xfcc006 == "4") {
              $(_0x5fcb81(568))[_0x5fcb81(558)](_0x440612);
            } else {
              if (_0xfcc006 == "5") {
                $(_0x5fcb81(568)).text(_0x280205);
              } else {
                _0xfcc006 == "6" && $(".show_record")[_0x5fcb81(558)](_0x5be9b0);
              }
            }
          }
        }
      }
    }
  });
});
$(document).on("click", _0x430a34(469), function () {
  var _0x1f7c87 = _0x430a34;
  $(_0x1f7c87(544) + $(this).attr(_0x1f7c87(417))).is(":hidden") ? ($(_0x1f7c87(544) + $(this)[_0x1f7c87(437)](_0x1f7c87(417)))[_0x1f7c87(325)](300), $(this)[_0x1f7c87(558)]("收起")) : ($(_0x1f7c87(544) + $(this)[_0x1f7c87(437)]("node"))[_0x1f7c87(443)](), $(this).text("查看"));
});
function debounce(_0x235161, _0x331268) {
  let _0x4e8ddd;
  return function () {
    const _0x2ecd52 = this,
      _0x319d45 = arguments;
    clearTimeout(_0x4e8ddd);
    _0x4e8ddd = setTimeout(function () {
      var _0x5e46aa = _0x5971;
      _0x235161[_0x5e46aa(415)](_0x2ecd52, _0x319d45);
    }, _0x331268);
  };
}
const refreshData_slow = debounce(function () {
  refreshData();
}, 0);
function dns(_0x5404f6) {
  var _0x5f468e = _0x430a34,
    _0x272379 = _0x5404f6[_0x5f468e(484)],
    _0x49ca65 = parseInt(_0x5404f6.time);
  complete_node_num = complete_node_num + 1;
  if (complete_node_num > check_node_num) {
    return false;
  }
  complete_node_num == check_node_num && $(_0x5f468e(328))[_0x5f468e(443)]();
  var _0x456b23 = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width:" + GetPercent(complete_node_num, check_node_num) + _0x5f468e(293) + complete_node_num + "\" aria-valuemin=\"0\" aria-valuemax=\"" + check_node_num + "\">" + GetPercent(complete_node_num, check_node_num) + _0x5f468e(594);
  $(_0x5f468e(277))[_0x5f468e(488)](_0x456b23);
  if (_0x5404f6[_0x5f468e(508)] != _0x5f468e(270)) {
    if (_0x5404f6[_0x5f468e(413)] == "") {
      $(_0x5f468e(302) + _0x272379)[_0x5f468e(488)](_0x5f468e(489));
      var _0xebba35 = _0x5f468e(489);
      $(".node_tr[node='" + _0x272379 + "']")[_0x5f468e(437)](_0x5f468e(524), _0x5f468e(310));
    } else {
      if (_0x5404f6[_0x5f468e(413)] == _0x5f468e(409)) {
        $("#dns_str_" + _0x272379).html("<span class=\"text-danger\">DNS服务器未响应</span>");
        var _0xebba35 = _0x5f468e(439);
        $(_0x5f468e(271) + _0x272379 + "']")[_0x5f468e(437)](_0x5f468e(519), _0x5f468e(408));
        time_out_num = time_out_num + 1;
        $(".time_out")[_0x5f468e(558)](time_out_num);
        $(_0x5f468e(525))[_0x5f468e(325)]();
      } else {
        var _0xebba35 = "",
          _0x34cc81 = "";
        for (var _0x40bba1 in _0x5404f6[_0x5f468e(413)]) {
          _0xebba35 ? (_0xebba35 = _0xebba35 + _0x5f468e(428) + _0x5404f6[_0x5f468e(413)][_0x40bba1], _0x34cc81 = _0x34cc81 + "," + _0x5404f6[_0x5f468e(413)][_0x40bba1]) : (_0xebba35 = _0x5404f6[_0x5f468e(413)][_0x40bba1], _0x34cc81 = _0x5404f6[_0x5f468e(413)][_0x40bba1]);
        }
        var _0x252459 = _0x5404f6.result[_0x5f468e(565)](0, default_show_num)[_0x5f468e(502)]("<br>");
        $(_0x5f468e(302) + _0x272379)[_0x5f468e(488)](_0x252459);
        _0x5404f6.result.length > default_show_num ? $(_0x5f468e(520) + _0x272379)[_0x5f468e(488)]("<span class=\"badge badge-light-primary\">" + _0x5404f6[_0x5f468e(413)].length + "</span>") : $(_0x5f468e(520) + _0x272379)[_0x5f468e(488)](_0x5f468e(288) + _0x5404f6[_0x5f468e(413)].length + _0x5f468e(299));
        $(_0x5f468e(271) + _0x272379 + "']")[_0x5f468e(437)](_0x5f468e(524), "," + _0x34cc81 + ",");
      }
    }
    $("#dns_time_" + _0x272379)[_0x5f468e(488)](_0x49ca65 + "ms");
  } else {
    $(_0x5f468e(302) + _0x272379)[_0x5f468e(488)](_0x5f468e(359));
  }
  if (_0x5404f6[_0x5f468e(508)] != _0x5f468e(270)) {
    var _0x162409 = "<span class=\"mr-3\">协议:</span>UDP<br><span class=\"mr-3\">目标:</span>" + _0x5404f6[_0x5f468e(480)] + "<br><span class=\"mr-3\">类型:</span>" + dns_type[_0x5f468e(449)]() + "<br><span class=\"mr-3\">耗时:</span>" + _0x49ca65 + _0x5f468e(587) + _0xebba35;
    $(".node_tr[node='" + _0x272379 + "']").after(_0x5f468e(465) + _0x272379 + "\" style=\"display:none;background-color: #f9fbff\"><td class=\"text-left head_view\" colspan=\"8\">" + _0x162409 + _0x5f468e(410));
    $("#dns_info_" + _0x272379)[_0x5f468e(488)](_0x5f468e(438) + _0x272379 + _0x5f468e(391));
  }
  if (_0x5404f6[_0x5f468e(508)] != _0x5f468e(270) && dns_type == "a" && _0x5404f6[_0x5f468e(413)] != _0x5f468e(409)) {
    if (_0x5404f6[_0x5f468e(413)][_0x5f468e(388)] != 0) {
      for (var _0x180d38 = 0; _0x180d38 < _0x5404f6[_0x5f468e(413)][_0x5f468e(388)]; _0x180d38++) {
        ipv4_list_arr.push(_0x5404f6[_0x5f468e(413)][_0x180d38]);
      }
    } else {
      ipv4_list_arr[_0x5f468e(493)]("没有记录");
    }
    var _0x2d1a5d = 100 / ipv4_list_arr[_0x5f468e(388)];
    let _0x29c3fd = {};
    ipv4_list_arr[_0x5f468e(320)](_0xc9eeae => {
      var _0x258940 = _0x5f468e;
      _0x29c3fd[_0xc9eeae] = _0x29c3fd[_0xc9eeae] || [];
      _0xc9eeae[_0x258940(569)] = _0x2d1a5d;
      _0x29c3fd[_0xc9eeae][_0x258940(493)](_0xc9eeae);
    });
    var _0x35299d = [];
    Object[_0x5f468e(334)](_0x29c3fd).forEach(function (_0x2a1338) {
      var _0x49d4ea = _0x5f468e;
      let _0x4660e = {
        ip: _0x2a1338
      };
      _0x4660e.ip = _0x2a1338;
      _0x4660e[_0x49d4ea(569)] = (_0x2d1a5d * _0x29c3fd[_0x2a1338].length).toFixed(2);
      _0x35299d[_0x49d4ea(493)](_0x4660e);
    });
    _0x35299d = sortByDescNum(_0x35299d, _0x5f468e(569));
    $(_0x5f468e(365)).html("");
    $(_0x5f468e(586)).attr(_0x5f468e(411), "");
    for (var _0x180d38 = 0; _0x180d38 < _0x35299d.length; _0x180d38++) {
      if (isipv4(_0x35299d[_0x180d38].ip)) {
        var _0x4ef743 = _0x35299d[_0x180d38].ip;
      } else {
        var _0x4ef743 = _0x5f468e(489);
      }
      $(_0x5f468e(365))[_0x5f468e(506)](_0x5f468e(529) + _0x4ef743 + _0x5f468e(595) + _0x4ef743 + _0x5f468e(563) + _0x35299d[_0x180d38][_0x5f468e(569)] + _0x5f468e(532));
      $(".copy_ip")[_0x5f468e(437)](_0x5f468e(411)) == "" ? $(".copy_ip")[_0x5f468e(437)](_0x5f468e(411), _0x4ef743) : $(_0x5f468e(586)).attr(_0x5f468e(411), $(_0x5f468e(586))[_0x5f468e(437)]("copy-text") + "\n" + _0x4ef743);
    }
    $(_0x5f468e(308))[_0x5f468e(558)](_0x35299d.length);
  } else {
    if (_0x5404f6[_0x5f468e(508)] != _0x5f468e(270) && dns_type == _0x5f468e(495) && _0x5404f6[_0x5f468e(413)] != _0x5f468e(409)) {
      if (_0x5404f6[_0x5f468e(413)][_0x5f468e(388)] != 0) {
        for (var _0x180d38 = 0; _0x180d38 < _0x5404f6[_0x5f468e(413)][_0x5f468e(388)]; _0x180d38++) {
          ipv6_list_arr[_0x5f468e(493)](_0x5404f6[_0x5f468e(413)][_0x180d38]);
        }
      } else {
        ipv6_list_arr[_0x5f468e(493)](_0x5f468e(489));
      }
      var _0x2d1a5d = 100 / ipv6_list_arr[_0x5f468e(388)];
      let _0x1cce5c = {};
      ipv6_list_arr[_0x5f468e(320)](_0x3d5283 => {
        var _0x5b46b2 = _0x5f468e;
        _0x1cce5c[_0x3d5283] = _0x1cce5c[_0x3d5283] || [];
        _0x3d5283[_0x5b46b2(569)] = _0x2d1a5d;
        _0x1cce5c[_0x3d5283][_0x5b46b2(493)](_0x3d5283);
      });
      var _0x1b3107 = [];
      Object[_0x5f468e(334)](_0x1cce5c)[_0x5f468e(320)](function (_0x25f969) {
        var _0x1ab3d2 = _0x5f468e;
        let _0x14e3f9 = {
          ip: _0x25f969
        };
        _0x14e3f9.ip = _0x25f969;
        _0x14e3f9[_0x1ab3d2(569)] = (_0x2d1a5d * _0x1cce5c[_0x25f969][_0x1ab3d2(388)])[_0x1ab3d2(517)](2);
        _0x1b3107.push(_0x14e3f9);
      });
      _0x1b3107 = sortByDescNum(_0x1b3107, _0x5f468e(569));
      $(_0x5f468e(365)).html("");
      $(_0x5f468e(586))[_0x5f468e(437)](_0x5f468e(411), "");
      for (var _0x180d38 = 0; _0x180d38 < _0x1b3107.length; _0x180d38++) {
        if (isipv6(_0x1b3107[_0x180d38].ip)) {
          var _0x4ef743 = _0x1b3107[_0x180d38].ip;
        } else {
          var _0x4ef743 = "没有记录";
        }
        $(_0x5f468e(365))[_0x5f468e(506)](_0x5f468e(529) + _0x4ef743 + _0x5f468e(595) + _0x4ef743 + _0x5f468e(563) + _0x1b3107[_0x180d38][_0x5f468e(569)] + _0x5f468e(532));
        $(_0x5f468e(586))[_0x5f468e(437)](_0x5f468e(411)) == "" ? $(_0x5f468e(586))[_0x5f468e(437)](_0x5f468e(411), _0x4ef743) : $(_0x5f468e(586))[_0x5f468e(437)]("copy-text", $(_0x5f468e(586))[_0x5f468e(437)](_0x5f468e(411)) + "\n" + _0x4ef743);
      }
      $(_0x5f468e(308))[_0x5f468e(558)](_0x1b3107[_0x5f468e(388)]);
    }
  }
  if (_0x5404f6[_0x5f468e(600)] != 99) {
    _0x5404f6[_0x5f468e(508)] == _0x5f468e(500) && china_fast[_0x5404f6[_0x5f468e(600)]] > parseInt(_0x49ca65) && (china_fast[_0x5404f6.province] = parseInt(_0x49ca65));
    if (_0x5404f6.line == "1") {
      var _0x501430 = _0x5f468e(536),
        _0x1177a2 = _0x5404f6[_0x5f468e(331)][_0x5f468e(451)]("电信", "");
    } else {
      if (_0x5404f6[_0x5f468e(319)] == "2") {
        var _0x501430 = _0x5f468e(387),
          _0x1177a2 = _0x5404f6.name[_0x5f468e(451)]("联通", "");
      } else {
        if (_0x5404f6[_0x5f468e(319)] == "3") {
          var _0x501430 = _0x5f468e(511),
            _0x1177a2 = _0x5404f6[_0x5f468e(331)].replace("移动", "");
        } else {
          if (_0x5404f6.line == "5") {
            var _0x501430 = "",
              _0x1177a2 = _0x5404f6.name[_0x5f468e(451)]("海外", "");
          }
        }
      }
    }
    (parseInt(_0x49ca65) > 5000 || _0x5404f6[_0x5f468e(508)] != _0x5f468e(500)) && (marker_arr[_0x5404f6.province][_0x5f468e(325)] = true);
    if (parseInt(_0x49ca65) > 5000 || _0x5404f6.type != "success") {
      var _0x1673bc = _0x5f468e(598);
    } else {
      var _0x1673bc = _0x49ca65 + "ms";
    }
    china_data[_0x5404f6.province] == "" ? china_data[_0x5404f6[_0x5f468e(600)]] = _0x5f468e(398) + _0x501430 + " " + _0x1177a2 + "：" + _0x1673bc + _0x5f468e(401) : china_data[_0x5404f6[_0x5f468e(600)]] = china_data[_0x5404f6[_0x5f468e(600)]] + _0x5f468e(398) + _0x501430 + " " + _0x1177a2 + "：" + _0x1673bc + _0x5f468e(401);
  }
  mydata = [];
  for (var _0x180d38 = 0; _0x180d38 < 34; _0x180d38++) {
    if (_0x180d38 == 0) {
      var _0x218fe8 = {
        name: "北京",
        value: china_fast[0],
        datas: china_data[0]
      };
    } else {
      if (_0x180d38 == 1) {
        var _0x218fe8 = {
          name: "天津",
          value: china_fast[1],
          datas: china_data[1]
        };
      } else {
        if (_0x180d38 == 2) {
          var _0x218fe8 = {
            name: "上海",
            value: china_fast[2],
            datas: china_data[2]
          };
        } else {
          if (_0x180d38 == 3) {
            var _0x218fe8 = {
              name: "重庆",
              value: china_fast[3],
              datas: china_data[3]
            };
          } else {
            if (_0x180d38 == 4) {
              var _0x218fe8 = {
                name: "河北",
                value: china_fast[4],
                datas: china_data[4]
              };
            } else {
              if (_0x180d38 == 5) {
                var _0x218fe8 = {
                  name: "河南",
                  value: china_fast[5],
                  datas: china_data[5]
                };
              } else {
                if (_0x180d38 == 6) {
                  var _0x218fe8 = {
                    name: "云南",
                    value: china_fast[6],
                    datas: china_data[6]
                  };
                } else {
                  if (_0x180d38 == 7) {
                    var _0x218fe8 = {
                      name: "辽宁",
                      value: china_fast[7],
                      datas: china_data[7]
                    };
                  } else {
                    if (_0x180d38 == 8) {
                      var _0x218fe8 = {
                        name: "黑龙江",
                        value: china_fast[8],
                        datas: china_data[8]
                      };
                    } else {
                      if (_0x180d38 == 9) {
                        var _0x218fe8 = {
                          name: "湖南",
                          value: china_fast[9],
                          datas: china_data[9]
                        };
                      } else {
                        if (_0x180d38 == 10) {
                          var _0x218fe8 = {
                            name: "安徽",
                            value: china_fast[10],
                            datas: china_data[10]
                          };
                        } else {
                          if (_0x180d38 == 11) {
                            var _0x218fe8 = {
                              name: "山东",
                              value: china_fast[11],
                              datas: china_data[11]
                            };
                          } else {
                            if (_0x180d38 == 12) {
                              var _0x218fe8 = {
                                name: "新疆",
                                value: china_fast[12],
                                datas: china_data[12]
                              };
                            } else {
                              if (_0x180d38 == 13) {
                                var _0x218fe8 = {
                                  name: "江苏",
                                  value: china_fast[13],
                                  datas: china_data[13]
                                };
                              } else {
                                if (_0x180d38 == 14) {
                                  var _0x218fe8 = {
                                    name: "浙江",
                                    value: china_fast[14],
                                    datas: china_data[14]
                                  };
                                } else {
                                  if (_0x180d38 == 15) {
                                    var _0x218fe8 = {
                                      name: "江西",
                                      value: china_fast[15],
                                      datas: china_data[15]
                                    };
                                  } else {
                                    if (_0x180d38 == 16) {
                                      var _0x218fe8 = {
                                        name: "湖北",
                                        value: china_fast[16],
                                        datas: china_data[16]
                                      };
                                    } else {
                                      if (_0x180d38 == 17) {
                                        var _0x218fe8 = {
                                          name: "广西",
                                          value: china_fast[17],
                                          datas: china_data[17]
                                        };
                                      } else {
                                        if (_0x180d38 == 18) {
                                          var _0x218fe8 = {
                                            name: "甘肃",
                                            value: china_fast[18],
                                            datas: china_data[18]
                                          };
                                        } else {
                                          if (_0x180d38 == 19) {
                                            var _0x218fe8 = {
                                              name: "山西",
                                              value: china_fast[19],
                                              datas: china_data[19]
                                            };
                                          } else {
                                            if (_0x180d38 == 20) {
                                              var _0x218fe8 = {
                                                name: _0x5f468e(490),
                                                value: china_fast[20],
                                                datas: china_data[20]
                                              };
                                            } else {
                                              if (_0x180d38 == 21) {
                                                var _0x218fe8 = {
                                                  name: "陕西",
                                                  value: china_fast[21],
                                                  datas: china_data[21]
                                                };
                                              } else {
                                                if (_0x180d38 == 22) {
                                                  var _0x218fe8 = {
                                                    name: "吉林",
                                                    value: china_fast[22],
                                                    datas: china_data[22]
                                                  };
                                                } else {
                                                  if (_0x180d38 == 23) {
                                                    var _0x218fe8 = {
                                                      name: "福建",
                                                      value: china_fast[23],
                                                      datas: china_data[23]
                                                    };
                                                  } else {
                                                    if (_0x180d38 == 24) {
                                                      var _0x218fe8 = {
                                                        name: "贵州",
                                                        value: china_fast[24],
                                                        datas: china_data[24]
                                                      };
                                                    } else {
                                                      if (_0x180d38 == 25) {
                                                        var _0x218fe8 = {
                                                          name: "广东",
                                                          value: china_fast[25],
                                                          datas: china_data[25]
                                                        };
                                                      } else {
                                                        if (_0x180d38 == 26) {
                                                          var _0x218fe8 = {
                                                            name: "青海",
                                                            value: china_fast[26],
                                                            datas: china_data[26]
                                                          };
                                                        } else {
                                                          if (_0x180d38 == 27) {
                                                            var _0x218fe8 = {
                                                              name: "西藏",
                                                              value: china_fast[27],
                                                              datas: china_data[27]
                                                            };
                                                          } else {
                                                            if (_0x180d38 == 28) {
                                                              var _0x218fe8 = {
                                                                name: "四川",
                                                                value: china_fast[28],
                                                                datas: china_data[28]
                                                              };
                                                            } else {
                                                              if (_0x180d38 == 29) {
                                                                var _0x218fe8 = {
                                                                  name: "宁夏",
                                                                  value: china_fast[29],
                                                                  datas: china_data[29]
                                                                };
                                                              } else {
                                                                if (_0x180d38 == 30) {
                                                                  var _0x218fe8 = {
                                                                    name: "海南",
                                                                    value: china_fast[30],
                                                                    datas: china_data[30]
                                                                  };
                                                                } else {
                                                                  if (_0x180d38 == 31) {
                                                                    var _0x218fe8 = {
                                                                      name: "台湾",
                                                                      value: china_fast[31],
                                                                      datas: china_data[31]
                                                                    };
                                                                  } else {
                                                                    if (_0x180d38 == 32) {
                                                                      var _0x218fe8 = {
                                                                        name: "香港",
                                                                        value: china_fast[32],
                                                                        datas: china_data[32]
                                                                      };
                                                                    } else {
                                                                      if (_0x180d38 == 33) {
                                                                        var _0x218fe8 = {
                                                                          name: "澳门",
                                                                          value: china_fast[33],
                                                                          datas: china_data[33]
                                                                        };
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
                  }
                }
              }
            }
          }
        }
      }
    }
    china_fast[_0x180d38] != 9999 ? mydata[mydata[_0x5f468e(388)]] = _0x218fe8 : mydata[mydata[_0x5f468e(388)]] = {
      name: _0x218fe8[_0x5f468e(331)]
    };
  }
  refreshData_slow();
  if (_0x5404f6.province != 99 && _0x5404f6[_0x5f468e(508)] == _0x5f468e(500)) {
    china_node_num = china_node_num + 1;
    china_all_time = china_all_time + _0x49ca65;
    china_fast_time > _0x49ca65 && (china_fast_time = _0x49ca65, $(_0x5f468e(590))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    china_slow < _0x49ca65 && (china_slow = _0x49ca65, $(_0x5f468e(272))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    var _0x52b7bc = Math[_0x5f468e(395)](china_all_time / china_node_num);
    $("#china_avg")[_0x5f468e(558)](_0x52b7bc + "ms");
  }
  if (_0x5404f6[_0x5f468e(319)] == "1" && _0x5404f6[_0x5f468e(508)] == _0x5f468e(500)) {
    ct_node_num = ct_node_num + 1;
    ct_all_time = ct_all_time + _0x49ca65;
    ct_fast > _0x49ca65 && (ct_fast = _0x49ca65, $(_0x5f468e(363))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    ct_slow < _0x49ca65 && (ct_slow = _0x49ca65, $(_0x5f468e(348)).text(_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    var _0x374893 = Math.round(ct_all_time / ct_node_num);
    $("#ct_avg")[_0x5f468e(558)](_0x374893 + "ms");
  }
  if (_0x5404f6[_0x5f468e(319)] == "2" && _0x5404f6[_0x5f468e(508)] == _0x5f468e(500)) {
    cu_node_num = cu_node_num + 1;
    cu_all_time = cu_all_time + _0x49ca65;
    cu_fast > _0x49ca65 && (cu_fast = _0x49ca65, $("#cu_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    cu_slow < _0x49ca65 && (cu_slow = _0x49ca65, $("#cu_slow")[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    var _0x43b272 = Math.round(cu_all_time / cu_node_num);
    $(_0x5f468e(430)).text(_0x43b272 + "ms");
  }
  if (_0x5404f6[_0x5f468e(319)] == "3" && _0x5404f6[_0x5f468e(508)] == "success") {
    cm_node_num = cm_node_num + 1;
    cm_all_time = cm_all_time + _0x49ca65;
    cm_fast > _0x49ca65 && (cm_fast = _0x49ca65, $(_0x5f468e(526)).text(_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    cm_slow < _0x49ca65 && (cm_slow = _0x49ca65, $(_0x5f468e(579))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    var _0x360846 = Math[_0x5f468e(395)](cm_all_time / cm_node_num);
    $(_0x5f468e(555))[_0x5f468e(558)](_0x360846 + "ms");
  }
  if (_0x5404f6.region == "1" && _0x5404f6[_0x5f468e(508)] == _0x5f468e(500)) {
    huadong_node_num = huadong_node_num + 1;
    huadong_all_time = huadong_all_time + _0x49ca65;
    huadong_fast > _0x49ca65 && (huadong_fast = _0x49ca65, $(_0x5f468e(286)).text(_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    huadong_slow < _0x49ca65 && (huadong_slow = _0x49ca65, $(_0x5f468e(496))[_0x5f468e(558)](_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x112225 = Math.round(huadong_all_time / huadong_node_num);
    $(_0x5f468e(486))[_0x5f468e(558)](_0x112225 + "ms");
  }
  if (_0x5404f6[_0x5f468e(298)] == "2" && _0x5404f6.type == _0x5f468e(500)) {
    huanan_node_num = huanan_node_num + 1;
    huanan_all_time = huanan_all_time + _0x49ca65;
    huanan_fast > _0x49ca65 && (huanan_fast = _0x49ca65, $(_0x5f468e(597)).text(_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    huanan_slow < _0x49ca65 && (huanan_slow = _0x49ca65, $("#huanan_slow").text(_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    var _0x3ebe9c = Math[_0x5f468e(395)](huanan_all_time / huanan_node_num);
    $("#huanan_avg").text(_0x3ebe9c + "ms");
  }
  if (_0x5404f6[_0x5f468e(298)] == "3" && _0x5404f6[_0x5f468e(508)] == _0x5f468e(500)) {
    huazhong_node_num = huazhong_node_num + 1;
    huazhong_all_time = huazhong_all_time + _0x49ca65;
    huazhong_fast > _0x49ca65 && (huazhong_fast = _0x49ca65, $("#huazhong_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    huazhong_slow < _0x49ca65 && (huazhong_slow = _0x49ca65, $(_0x5f468e(573))[_0x5f468e(558)](_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x15aa9e = Math[_0x5f468e(395)](huazhong_all_time / huazhong_node_num);
    $(_0x5f468e(414)).text(_0x15aa9e + "ms");
  }
  if (_0x5404f6[_0x5f468e(298)] == "4" && _0x5404f6[_0x5f468e(508)] == "success") {
    huabei_node_num = huabei_node_num + 1;
    huabei_all_time = huabei_all_time + _0x49ca65;
    huabei_fast > _0x49ca65 && (huabei_fast = _0x49ca65, $(_0x5f468e(559))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    huabei_slow < _0x49ca65 && (huabei_slow = _0x49ca65, $(_0x5f468e(591))[_0x5f468e(558)](_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x2844ab = Math[_0x5f468e(395)](huabei_all_time / huabei_node_num);
    $(_0x5f468e(494)).text(_0x2844ab + "ms");
  }
  if (_0x5404f6[_0x5f468e(298)] == "5" && _0x5404f6[_0x5f468e(508)] == _0x5f468e(500)) {
    xinan_node_num = xinan_node_num + 1;
    xinan_all_time = xinan_all_time + _0x49ca65;
    xinan_fast > _0x49ca65 && (xinan_fast = _0x49ca65, $("#xinan_fast")[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    xinan_slow < _0x49ca65 && (xinan_slow = _0x49ca65, $(_0x5f468e(435)).text(_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    var _0x123f64 = Math[_0x5f468e(395)](xinan_all_time / xinan_node_num);
    $(_0x5f468e(301))[_0x5f468e(558)](_0x123f64 + "ms");
  }
  if (_0x5404f6[_0x5f468e(298)] == "6" && _0x5404f6[_0x5f468e(508)] == _0x5f468e(500)) {
    xibei_node_num = xibei_node_num + 1;
    xibei_all_time = xibei_all_time + _0x49ca65;
    xibei_fast > _0x49ca65 && (xibei_fast = _0x49ca65, $(_0x5f468e(580))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    xibei_slow < _0x49ca65 && (xibei_slow = _0x49ca65, $(_0x5f468e(360))[_0x5f468e(558)](_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x3f1275 = Math[_0x5f468e(395)](xibei_all_time / xibei_node_num);
    $(_0x5f468e(312)).text(_0x3f1275 + "ms");
  }
  if (_0x5404f6[_0x5f468e(298)] == "7" && _0x5404f6[_0x5f468e(508)] == _0x5f468e(500)) {
    dongbei_node_num = dongbei_node_num + 1;
    dongbei_all_time = dongbei_all_time + _0x49ca65;
    dongbei_fast > _0x49ca65 && (dongbei_fast = _0x49ca65, $(_0x5f468e(278))[_0x5f468e(558)](_0x5404f6.name + " " + _0x49ca65 + "ms"));
    dongbei_slow < _0x49ca65 && (dongbei_slow = _0x49ca65, $(_0x5f468e(392))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    var _0x38a315 = Math[_0x5f468e(395)](dongbei_all_time / dongbei_node_num);
    $("#dongbei_avg")[_0x5f468e(558)](_0x38a315 + "ms");
  }
  if (_0x5404f6[_0x5f468e(298)] == "8" && _0x5404f6.type == "success") {
    gangaotai_node_num = gangaotai_node_num + 1;
    gangaotai_all_time = gangaotai_all_time + _0x49ca65;
    gangaotai_fast > _0x49ca65 && (gangaotai_fast = _0x49ca65, $(_0x5f468e(405)).text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    gangaotai_slow < _0x49ca65 && (gangaotai_slow = _0x49ca65, $(_0x5f468e(368)).text(_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    var _0x142448 = Math.round(gangaotai_all_time / gangaotai_node_num);
    $(_0x5f468e(383)).text(_0x142448 + "ms");
  }
  if (_0x5404f6[_0x5f468e(600)] == "99" && _0x5404f6[_0x5f468e(508)] != "error") {
    global_node_num = global_node_num + 1;
    global_all_time = global_all_time + _0x49ca65;
    global_fast > _0x49ca65 && (global_fast = _0x49ca65, $(_0x5f468e(307))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    global_slow < _0x49ca65 && (global_slow = _0x49ca65, $("#global_slow")[_0x5f468e(558)](_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0xf680d9 = Math[_0x5f468e(395)](global_all_time / global_node_num);
    $("#global_avg").text(_0xf680d9 + "ms");
  }
  if (_0x5404f6[_0x5f468e(298)] == "9" && _0x5404f6[_0x5f468e(508)] == _0x5f468e(500)) {
    asia_node_num = asia_node_num + 1;
    asia_all_time = asia_all_time + _0x49ca65;
    asia_fast > _0x49ca65 && (asia_fast = _0x49ca65, $(_0x5f468e(501)).text(_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    asia_slow < _0x49ca65 && (asia_slow = _0x49ca65, $(_0x5f468e(432))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    var _0x42c25c = Math[_0x5f468e(395)](asia_all_time / asia_node_num);
    $("#asia_avg").text(_0x42c25c + "ms");
  }
  if (_0x5404f6[_0x5f468e(298)] == "10" && _0x5404f6.type == _0x5f468e(500)) {
    europe_node_num = europe_node_num + 1;
    europe_all_time = europe_all_time + _0x49ca65;
    europe_fast > _0x49ca65 && (europe_fast = _0x49ca65, $(_0x5f468e(356))[_0x5f468e(558)](_0x5404f6.name + " " + _0x49ca65 + "ms"));
    europe_slow < _0x49ca65 && (europe_slow = _0x49ca65, $(_0x5f468e(280))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    var _0x3e376c = Math[_0x5f468e(395)](europe_all_time / europe_node_num);
    $(_0x5f468e(285))[_0x5f468e(558)](_0x3e376c + "ms");
  }
  if (_0x5404f6[_0x5f468e(298)] == "11" && _0x5404f6[_0x5f468e(508)] == _0x5f468e(500)) {
    north_node_num = north_node_num + 1;
    north_all_time = north_all_time + _0x49ca65;
    north_fast > _0x49ca65 && (north_fast = _0x49ca65, $("#north_fast")[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    north_slow < _0x49ca65 && (north_slow = _0x49ca65, $("#north_slow")[_0x5f468e(558)](_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x46175e = Math[_0x5f468e(395)](north_all_time / north_node_num);
    $(_0x5f468e(372))[_0x5f468e(558)](_0x46175e + "ms");
  }
  if (_0x5404f6[_0x5f468e(298)] == "12" && _0x5404f6[_0x5f468e(508)] == _0x5f468e(500)) {
    south_node_num = south_node_num + 1;
    south_all_time = south_all_time + _0x49ca65;
    south_fast > _0x49ca65 && (south_fast = _0x49ca65, $(_0x5f468e(530))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    south_slow < _0x49ca65 && (south_slow = _0x49ca65, $(_0x5f468e(440))[_0x5f468e(558)](_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x1738dd = Math.round(south_all_time / south_node_num);
    $("#south_avg")[_0x5f468e(558)](_0x1738dd + "ms");
  }
  if (_0x5404f6[_0x5f468e(298)] == "13" && _0x5404f6[_0x5f468e(508)] == _0x5f468e(500)) {
    africa_node_num = africa_node_num + 1;
    africa_all_time = africa_all_time + _0x49ca65;
    africa_fast > _0x49ca65 && (africa_fast = _0x49ca65, $(_0x5f468e(349))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    africa_slow < _0x49ca65 && (africa_slow = _0x49ca65, $(_0x5f468e(303)).text(_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    var _0xf242fe = Math[_0x5f468e(395)](africa_all_time / africa_node_num);
    $(_0x5f468e(416))[_0x5f468e(558)](_0xf242fe + "ms");
  }
  if (_0x5404f6[_0x5f468e(298)] == "14" && _0x5404f6[_0x5f468e(508)] == _0x5f468e(500)) {
    oceania_node_num = oceania_node_num + 1;
    oceania_all_time = oceania_all_time + _0x49ca65;
    oceania_fast > _0x49ca65 && (oceania_fast = _0x49ca65, $(_0x5f468e(510))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    oceania_slow < _0x49ca65 && (oceania_slow = _0x49ca65, $(_0x5f468e(562))[_0x5f468e(558)](_0x5404f6[_0x5f468e(331)] + " " + _0x49ca65 + "ms"));
    var _0x39b2ff = Math[_0x5f468e(395)](oceania_all_time / oceania_node_num);
    $(_0x5f468e(554))[_0x5f468e(558)](_0x39b2ff + "ms");
  }
}
function GetPercent(_0x2dbd36, _0x4126d9) {
  var _0x1e7354 = _0x430a34;
  _0x2dbd36 = parseFloat(_0x2dbd36);
  _0x4126d9 = parseFloat(_0x4126d9);
  if (isNaN(_0x2dbd36) || isNaN(_0x4126d9)) {
    return "-";
  }
  return _0x4126d9 <= 0 ? "0%" : Math[_0x1e7354(395)](_0x2dbd36 / _0x4126d9 * 100) + "%";
}
function check_post(_0x58ff13, _0xf4cec4) {
  var _0x3a6fe7 = _0x430a34,
    _0x5f542f = document.createElement(_0x3a6fe7(296));
  _0x5f542f[_0x3a6fe7(462)] = _0x58ff13;
  _0x5f542f[_0x3a6fe7(287)] = _0x3a6fe7(290);
  _0x5f542f[_0x3a6fe7(523)].display = "none";
  for (var _0x517605 in _0xf4cec4) {
    var _0x125f63 = document[_0x3a6fe7(426)](_0x3a6fe7(297));
    _0x125f63[_0x3a6fe7(331)] = _0x517605;
    _0x125f63[_0x3a6fe7(322)] = _0xf4cec4[_0x517605];
    _0x5f542f[_0x3a6fe7(550)](_0x125f63);
  }
  document.body[_0x3a6fe7(550)](_0x5f542f);
  _0x5f542f[_0x3a6fe7(317)]();
  return _0x5f542f;
}
function check_post_blank(_0x3d2879, _0x308d40) {
  var _0x4c58ee = _0x430a34,
    _0x20de80 = document[_0x4c58ee(426)](_0x4c58ee(296));
  _0x20de80[_0x4c58ee(462)] = _0x3d2879;
  _0x20de80.method = "post";
  _0x20de80[_0x4c58ee(276)] = Math.random() + _0x4c58ee(353);
  _0x20de80[_0x4c58ee(523)][_0x4c58ee(434)] = _0x4c58ee(344);
  for (var _0x31bc0c in _0x308d40) {
    var _0x526074 = document[_0x4c58ee(426)]("textarea");
    _0x526074.name = _0x31bc0c;
    _0x526074[_0x4c58ee(322)] = _0x308d40[_0x31bc0c];
    _0x20de80[_0x4c58ee(550)](_0x526074);
  }
  document[_0x4c58ee(347)][_0x4c58ee(550)](_0x20de80);
  _0x20de80.submit();
  return _0x20de80;
}
function check_form() {
  var _0x418184 = _0x430a34;
  $(_0x418184(476)).hide();
  $(_0x418184(460))[_0x418184(321)](_0x418184(515), "unset");
  var _0x59e482 = $(_0x418184(378)).val();
  _0x59e482 = _0x59e482[_0x418184(543)]("/");
  _0x59e482[2] ? _0x59e482 = _0x59e482[2] : (_0x59e482 = $(_0x418184(378)).val()[_0x418184(451)](/\//g, ""), _0x59e482 = _0x59e482.replace(/。/g, "."), _0x59e482 = _0x59e482.replace(/\\/g, ""), _0x59e482 = _0x59e482[_0x418184(451)](/：/g, ":"));
  var _0x317ae3 = check_line(),
    _0x5c2580 = $(_0x418184(424))[_0x418184(566)](),
    _0x1ff66b = $(_0x418184(431)).val();
  if (_0x5c2580 == _0x418184(337) && isipv4(_0x1ff66b) == false) {
    err_tip_more(_0x418184(533));
    return false;
  }
  if ($(_0x418184(378))[_0x418184(566)]() == "") {
    err_tip_more(_0x418184(355));
    return false;
  }
  check_post("/dns/" + _0x59e482, {
    line: _0x317ae3,
    dns_type: dns_type,
    dns_server_type: _0x5c2580,
    dns_server: _0x1ff66b
  });
}
function _0x26a4() {
  var _0x7afea3 = ["427,333", "340,220", "rgb(249, 249, 249)", "#cm_slow", "#xibei_fast", "rgba(255, 255, 255, .5)", "8PIoaIn", "mouseover", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 河南郑州：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 河南新乡：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 河南洛阳：70ms</p>", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 西藏拉萨：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 西藏林芝：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 西藏阿里：70ms</p>", ".copy_ip", "ms<br><br>---------- 解析结果 ----------<br><br>", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 山东青岛：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 山东枣庄：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 山东济南：70ms</p>", "background-color", "#china_fast", "#huabei_slow", "path://M566.125714 0L256 535.405714h226.084571l-103.350857 435.931429 352.109715-575.926857H472.429714L566.052571 0z", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 湖南长沙：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 湖南株洲：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 湖南湘潭：70ms</p>", "</div>", "')\"><li><span class=\"ml-3\">", "14706558sIeXwA", "#huanan_fast", "<font color=#e61610>超时</font>", " NS ", "province", "error", ".node_tr[node='", "#china_slow", "addClass", "485,210", "table", "target", "#complete_progress", "#dongbei_fast", "670533IuqBPR", "#europe_slow", ".address-hidden", "</p>\n                        <p  style=\"line-height: 20px; padding: 0 10px;\">最快响应：", "all", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 四川成都：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 四川绵阳：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 四川南充：70ms</p>", "#europe_avg", "#huadong_fast", "method", "<span class=\"badge badge-light-secondary\">", "#f69833", "post", "max-width", "find", ";\" aria-valuenow=\"", "410,250", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 陕西西安：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 陕西宝鸡：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 陕西咸阳：70ms</p>", "form", "textarea", "region", "</span>", "disabled", "#xinan_avg", "#dns_str_", "#africa_slow", "d-none", "atob", "#fff", "#global_fast", "#ip_list_num", "toBlob", ",没有记录,", "{}.constructor(\"return this\")( )", "#xibei_avg", "info", "342,307", "380,260", ".node_tr", "submit", "filter", "line", "forEach", "css", "value", "_DNS记录查询.png", "td:first", "show", "bind", "exception", ".checking", "<1ms", "95%", "name", "getElementById", "substring", "keys", "remove", "2075518PGRdjM", "custom", ".filter_ip", "trace", "0,0", "51ms-100ms", ">200ms", "\n                        <div>\n                            <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">", "none", "\n                    <div>\n                        <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">", "prop", "body", "#ct_slow", "#africa_fast", "pointer-events", "<i class=\"fas fa-check-circle text-success\"></i> 截图复制成功，可以粘贴到ＱＱ、Word等编辑器", "#70ccef", "_blank", ".dns_info", "<li>请输入检测目标（域名、IPv4、IPv6）</li>", "#europe_fast", "\n                  </div>\n                  ", ".label_filter_ip", "<span class=\"text-danger\">监测点返回异常</span>", "#xibei_slow", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 黑龙江哈尔滨：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 黑龙江大庆：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 黑龙江鹤岗：70ms</p>", "#6c757d", "#ct_fast", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 海南三亚：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 海南海口：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 海南三沙：70ms</p>", ".ip_list", "南海诸岛", "#takeScreenshot", "#gangaotai_slow", "offset", "each", ".layui-layer-btn0", "#north_avg", "#dns_type_button", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 浙江杭州：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 浙江宁波：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 浙江温州：70ms</p>", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 河北石家庄：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 河北唐山：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 河北廊坊：70ms</p>", "geo", "#e61610", "#host", "datas", "正在生成截图 ···", "left", "<i class=\"feather icon-camera\"></i> 完整截图", "#gangaotai_avg", "china_map", "msg", "#ff0000", "<font color=#ffba57>[联通]</font>", "length", "resize", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 吉林长春：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 吉林通化：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 吉林辽源：70ms</p>", "\" href=\"javascript:;\">查看</a>", "#dongbei_slow", "keyCode", "<div class=\"spinner-border spinner-border-sm\" role=\"status\"></div> 正在生成", "round", " CNAME ", "<p style=\"line-height: 10px; padding: 0 10px;\">中国台湾台北：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\">中国台湾高雄：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\">中国台湾基隆：70ms</p>", "<p style=\"line-height: 10px; padding: 0 10px;\">", "420,228", "top", "</p>", ".dns_type_change", "input[name='filter_line']", "462,433", "#gangaotai_fast", "<p style=\"line-height: 10px; padding: 0 10px;\">中国澳门：20ms</p>", " MX ", "true", "dns server timeout", "</td></tr>", "copy-text", " SRV ", "result", "#huazhong_avg", "apply", "#africa_avg", "node", "</p>\n                        ", "31ms-50ms", "1、将关键数据截图并同时去除广告<br>2、首次生成截图可能需要较长时间", "html,body", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 重庆：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 重庆：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 重庆：70ms</p>", "290,346", "input[name='dns_server_type']:checked", "mouseout", "createElement", "sort", "<br>", "3738238vsGXtC", "#cu_avg", "#dns_server", "#asia_slow", "#bef663", "display", "#xinan_slow", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 广西柳州：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 广西南宁：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 广西桂林：70ms</p>", "attr", "<a class=\"show_info_button\" node=\"", "DNS服务器未响应", "#south_slow", "keyup", "457,365", "hide", "x_y", "(((.+)+)+)+$", "530,140", "399,451", "__proto__", "toUpperCase", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 山西太原：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 山西大同：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 山西阳泉：70ms</p>", "replace", "357,491", ".dns_type_menu", "checked", "510,182", "383,342", "series", "test", "border-color", ".icon-chevrons-down", "charCodeAt", "action", "toPng", "catch", "<tr class=\"dns_info\" id=\"info_show_", "35590Ypplcy", "#eee", "search", ".show_info_button", "console", "oops, something went wrong!", "125,225", "280,425", "{logo|}", "黑龙江", ".advanced", "log", "trigger", "<p style=\"line-height: 10px; padding: 0 10px;\">南海诸岛：20ms</p>", "host", "screenshots", "<=30ms", "click", "node_id", " TXT ", "#huadong_avg", "411,382", "html", "没有记录", "内蒙古", "#return_info", "148,338", "push", "#huabei_avg", "aaaa", "#huadong_slow", "338,358", "clipboard", "center", "success", "#asia_fast", "join", "异常标记", "init", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 上海：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 上海：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 上海：70ms</p>", "append", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 甘肃兰州：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 甘肃天水：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 甘肃平凉：70ms</p>", "type", "222,283", "#oceania_fast", "<font color=#00acc1>[移动]</font>", "warn", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 贵州贵阳：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 贵州遵义：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 贵州安顺：70ms</p>", "70%", "transform", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 安徽合肥：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 安徽芜湖：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 安徽黄山：70ms</p>", "toFixed", ".gg_link", "time_out", "#dns_num_", "225,227", "60px", "style", "ip_list", ".time_out", "#cm_fast", "toString", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 云南昆明：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 云南丽江：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 云南玉溪：70ms</p>", " <a title=\"点击筛选\" class=\"pointer noselect\" onclick=\"filter_ip('", "#south_fast", "5642024sYMLVr", "%</span></li></a>", "<li>指定的DNS服务器必须是IPv4</li>", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 新疆乌鲁木齐：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 新疆吐鲁番：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 新疆哈密：70ms</p>", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 内蒙古包头：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 内蒙古赤峰：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 内蒙古乌海：70ms</p>", "<font color=#9ccc65>[电信]</font>", "329,396", "1092GeBEEG", "3373776DErCIw", "453,315", "saveAs", "effectScatter", "split", "#info_show_", "cname", "mouseenter", "china", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 福建厦门：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 福建宁德：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 福建福州：70ms</p>", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 辽宁大连：20ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 辽宁沈阳：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 辽宁鞍山：70ms</p>", "appendChild", "constructor", "map", "101ms-200ms", "#oceania_avg", "#cm_avg", " A ", "txt", "text", "#huabei_fast", "323,263", "#24aa1d", "#oceania_slow", "</span><span class=\"text-primary float-right mr-3\">", "#bbb", "slice", "val", "429,240", ".show_record", "pre", "node_type", "#333", "then", "#huazhong_slow", "data", "380px"];
  _0x26a4 = function () {
    return _0x7afea3;
  };
  return _0x26a4();
}
function down_screenshot(_0x12d0b6) {
  ad_hide();
  setTimeout(function () {
    var _0x1f254f = _0x5971;
    $(_0x1f254f(367)).html(_0x1f254f(394));
    $(_0x1f254f(367))[_0x1f254f(437)](_0x1f254f(300), true);
    domtoimage[_0x1f254f(309)](document.getElementById(_0x1f254f(481)))[_0x1f254f(572)](function (_0x562d9a) {
      var _0x3cf405 = _0x1f254f;
      window[_0x3cf405(541)](_0x562d9a, _0x12d0b6 + _0x3cf405(323));
      $("#takeScreenshot").html("<i class=\"feather icon-camera\"></i> 完整截图");
      $("#takeScreenshot")[_0x3cf405(437)]("disabled", false);
    });
  }, 10);
}
function _0x5971(_0x2d07e5, _0x515878) {
  var _0x231137 = _0x26a4();
  _0x5971 = function (_0x2ee9af, _0x3d589f) {
    _0x2ee9af = _0x2ee9af - 270;
    var _0x43555d = _0x231137[_0x2ee9af];
    return _0x43555d;
  };
  return _0x5971(_0x2d07e5, _0x515878);
}
function copy_screenshot_tip() {
  layer.confirm("点击开始后，不要操作鼠标，保持当前页面获焦状态！<br><div class=\"mt-2 text-muted\">1、Firefox 需手动开启复制图片功能 > <a class=\"text-primary\" target=\"view_open_blank\" href=\"/article/content-278.html\">查看教程</a><br>2、少数浏览器不支持复制图片，请选择下载图片</div>", {
    title: "",
    anim: -1,
    isOutAnim: false,
    btnAlign: "c",
    btn: ["<i class=\"feather icon-play\"></i> 开始复制截图"],
    yes: function () {
      var _0x34195d = _0x5971;
      $(_0x34195d(371))[_0x34195d(558)](_0x34195d(380));
      $(".layui-layer-btn0")[_0x34195d(437)]("disabled", true);
      $(_0x34195d(371)).css(_0x34195d(350), _0x34195d(344));
      $(_0x34195d(371))[_0x34195d(321)](_0x34195d(589), _0x34195d(564));
      $(".layui-layer-btn0")[_0x34195d(321)](_0x34195d(459), "#bbb");
      copy_screenshot();
    },
    cancel: function () {}
  });
}
function copy_screenshot() {
  ad_hide();
  setTimeout(function () {
    var _0x3ff487 = _0x5971;
    $(_0x3ff487(367)).html(_0x3ff487(394));
    $(_0x3ff487(367))[_0x3ff487(437)](_0x3ff487(300), true);
    var _0x3d963a = document.getElementById(_0x3ff487(481));
    domtoimage[_0x3ff487(463)](_0x3d963a).then(function (_0xd1f7c5) {
      var _0x6ccde2 = _0x3ff487;
      get_img(_0xd1f7c5[_0x6ccde2(451)](/data:image\/png;base64,/g, ""));
    })[_0x3ff487(464)](function (_0x511d71) {
      var _0x944cd8 = _0x3ff487;
      console[_0x944cd8(270)](_0x944cd8(471), _0x511d71);
    });
  }, 10);
}
function get_img(_0x203089) {
  var _0x2f08ec = _0x430a34;
  try {
    var _0x203089 = _0x203089;
    const _0x4277d0 = convertBase64ToBlob(_0x203089, "image/png"),
      _0x5a111e = new ClipboardItem({
        "image/png": _0x4277d0
      });
    navigator[_0x2f08ec(498)].write([_0x5a111e]);
    $(_0x2f08ec(367)).html(_0x2f08ec(382));
    $("#takeScreenshot").attr("disabled", false);
    layer[_0x2f08ec(385)](_0x2f08ec(351));
  } catch (_0x5aa4ed) {
    console[_0x2f08ec(477)](_0x5aa4ed);
  }
}
function convertBase64ToBlob(_0x5b8e19, _0x2f22d1) {
  var _0xefe088 = _0x430a34,
    _0x5cf870 = window[_0xefe088(305)](_0x5b8e19),
    _0x7146ab = new ArrayBuffer(_0x5cf870[_0xefe088(388)]),
    _0x14213b = new Uint8Array(_0x7146ab);
  for (var _0x5230f1 = 0; _0x5230f1 < _0x5cf870[_0xefe088(388)]; _0x5230f1++) {
    _0x14213b[_0x5230f1] = _0x5cf870[_0xefe088(461)](_0x5230f1);
  }
  return new Blob([_0x7146ab], {
    type: _0x2f22d1
  });
}
function ad_hide() {
  var _0x231bad = _0x430a34;
  $(_0x231bad(518))[_0x231bad(335)]();
  $(_0x231bad(281))[_0x231bad(321)](_0x231bad(291), "200px");
  $(".hover-button")[_0x231bad(273)](_0x231bad(304));
}
function isipv4(_0x3e950d) {
  var _0x5c4b8b = _0x430a34,
    _0x45bcb8 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return _0x45bcb8[_0x5c4b8b(458)](_0x3e950d);
}
function isipv6(_0x495284) {
  var _0xfbef46 = _0x430a34;
  reg = /^([\da-fA-F]{1,4}:){6}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^::([\da-fA-F]{1,4}:){0,4}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:):([\da-fA-F]{1,4}:){0,3}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){2}:([\da-fA-F]{1,4}:){0,2}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){3}:([\da-fA-F]{1,4}:){0,1}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){4}:((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$|^:((:[\da-fA-F]{1,4}){1,6}|:)$|^[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,5}|:)$|^([\da-fA-F]{1,4}:){2}((:[\da-fA-F]{1,4}){1,4}|:)$|^([\da-fA-F]{1,4}:){3}((:[\da-fA-F]{1,4}){1,3}|:)$|^([\da-fA-F]{1,4}:){4}((:[\da-fA-F]{1,4}){1,2}|:)$|^([\da-fA-F]{1,4}:){5}:([\da-fA-F]{1,4})?$|^([\da-fA-F]{1,4}:){6}:$/;
  return reg[_0xfbef46(458)](_0x495284);
}
$(_0x430a34(367)).click(function () {
  var _0x3e8477 = _0x430a34;
  $(_0x3e8477(476))[_0x3e8477(443)]();
  $(_0x3e8477(460))[_0x3e8477(321)](_0x3e8477(515), "unset");
});
$(function () {
  var _0x138570 = _0x430a34,
    _0x4ef888;
  $(_0x138570(373))[_0x138570(483)](function () {
    var _0x347533 = _0x138570;
    $(_0x347533(373))[_0x347533(478)]("mouseleave");
    $(_0x347533(373))[_0x347533(478)](_0x347533(546));
  });
  $(_0x138570(402)).on({
    mouseenter: function () {
      var _0x5e36ad = _0x138570;
      clearTimeout(_0x4ef888);
      $(this)[_0x5e36ad(292)](_0x5e36ad(453))[_0x5e36ad(325)]();
    },
    mouseleave: function () {
      _0x4ef888 = setTimeout(function () {
        var _0x5e3af7 = _0x5971;
        $(_0x5e3af7(453))[_0x5e3af7(443)]();
      }, 150);
    }
  });
  $(_0x138570(453)).on({
    mouseenter: function () {
      clearTimeout(_0x4ef888);
    },
    mouseleave: function () {
      var _0xf256a6 = $(this);
      _0x4ef888 = setTimeout(function () {
        var _0x461464 = _0x5971;
        _0xf256a6[_0x461464(443)]();
      }, 150);
    }
  });
  var _0x446db4;
  $(_0x138570(367))[_0x138570(583)](function () {
    var _0x3a7d63 = _0x138570;
    _0x446db4 = layer.tips(_0x3a7d63(420), "#takeScreenshot", {
      tips: [1, _0x3a7d63(362)],
      time: 0,
      anim: -1,
      tipsMore: true,
      isOutAnim: false
    });
  });
  $(_0x138570(367))[_0x138570(425)](function () {
    layer.close(_0x446db4);
  });
  $(_0x138570(378))[_0x138570(326)](_0x138570(441), function (_0x217a37) {
    var _0x2e7de1 = _0x138570;
    _0x217a37[_0x2e7de1(393)] == "13" && check_form();
  });
});