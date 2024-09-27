//Fri Sep 27 2024 02:34:39 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function create_websocket(_0x5d9212, _0x261ac6, _0x347e74) {
  if ("WebSocket" in window) {
    ws = new WebSocket(_0x5d9212);
    ws.onerror = function () {
      clearInterval(for_task);
      if (error_num < 1) {
        error_num++;
        setTimeout(() => {
          create_websocket(_0x5d9212, _0x261ac6, _0x347e74);
        }, 2000);
        return false;
      } else {
        $.get("/public/ajax.php?type=error_feedback&task_id=" + _0x261ac6);
        err_tip("WebSocket服务器连接失败，请重试 !");
        return false;
      }
    };
    ws.onopen = function () {
      ws.send("{\"task_id\":\"" + _0x261ac6 + "\",\"task_token\":\"" + md5(_0x261ac6 + "token_20230313000136kwyktxb0tgspm00yo5", 16) + "\"}");
    };
    ws.onmessage = function (_0x45707e) {
      var _0x2109e0 = JSON.parse(_0x45707e.data);
      if (_0x2109e0.type == "finished") {
        clearInterval(for_task);
        return false;
      }
      if (_0x2109e0.type == "node_error") {
        $("#real_ip_" + _0x2109e0.node_id).html("<i class=\"fas fa-minus-circle text-danger\"></i> 监测点异常");
        $("#hover_button_" + _0x2109e0.node_id).remove();
        complete_node_num = complete_node_num + 1;
        if (complete_node_num > check_node_num) {
          return false;
        }
        if (complete_node_num == check_node_num) {
          $(".checking").hide();
        }
        var _0x229dcf = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width:" + GetPercent(complete_node_num, check_node_num) + ";\" aria-valuenow=\"" + complete_node_num + "\" aria-valuemin=\"0\" aria-valuemax=\"" + check_node_num + "\">" + GetPercent(complete_node_num, check_node_num) + "</div>";
        $("#complete_progress").html(_0x229dcf);
        return false;
      }
      http_test(_0x2109e0);
    };
    ws.onclose = function () {};
    _0x347e74 == "slow" && (for_task = setInterval(function () {
      ws.send("{\"task_id\":\"" + _0x261ac6 + "\",\"task_token\":\"" + md5(_0x261ac6 + "token_20230313000136kwyktxb0tgspm00yo5", 16) + "\"}");
    }, 2000));
  } else {
    err_tip("您的浏览器不支持WebSocket !");
  }
}
var _0x5327af = _0x37ae;
(function (_0x2135be, _0x2a5b31) {
  var _0x5a7ca6 = _0x37ae,
    _0x402151 = _0x2135be();
  while (true) {
    try {
      var _0x2aed02 = -parseInt(_0x5a7ca6(433)) / 1 * (parseInt(_0x5a7ca6(704)) / 2) + -parseInt(_0x5a7ca6(721)) / 3 + parseInt(_0x5a7ca6(560)) / 4 + -parseInt(_0x5a7ca6(478)) / 5 + parseInt(_0x5a7ca6(529)) / 6 * (parseInt(_0x5a7ca6(473)) / 7) + -parseInt(_0x5a7ca6(685)) / 8 * (-parseInt(_0x5a7ca6(599)) / 9) + -parseInt(_0x5a7ca6(532)) / 10 * (parseInt(_0x5a7ca6(725)) / 11);
      if (_0x2aed02 === _0x2a5b31) {
        break;
      } else {
        _0x402151.push(_0x402151.shift());
      }
    } catch (_0xb78b4c) {
      _0x402151.push(_0x402151.shift());
    }
  }
})(_0x1adb, 542645);
var _0x353074 = function () {
    var _0xaa8991 = true;
    return function (_0x5be14a, _0x10cd8f) {
      var _0x3c0bfd = _0xaa8991 ? function () {
        var _0x18fc4e = _0x37ae;
        if (_0x10cd8f) {
          var _0xe1b826 = _0x10cd8f[_0x18fc4e(627)](_0x5be14a, arguments);
          _0x10cd8f = null;
          return _0xe1b826;
        }
      } : function () {};
      _0xaa8991 = false;
      return _0x3c0bfd;
    };
  }(),
  _0x31da40 = _0x353074(this, function () {
    var _0x4c2e70 = _0x37ae;
    return _0x31da40[_0x4c2e70(751)]()[_0x4c2e70(471)](_0x4c2e70(643))[_0x4c2e70(751)]()[_0x4c2e70(423)](_0x31da40)[_0x4c2e70(471)](_0x4c2e70(643));
  });
_0x31da40();
var _0x29c585 = function () {
    var _0x45c13c = true;
    return function (_0x590336, _0x5ac593) {
      var _0x39b196 = _0x45c13c ? function () {
        if (_0x5ac593) {
          var _0x184c14 = _0x5ac593.apply(_0x590336, arguments);
          _0x5ac593 = null;
          return _0x184c14;
        }
      } : function () {};
      _0x45c13c = false;
      return _0x39b196;
    };
  }(),
  _0x5303b5 = _0x29c585(this, function () {
    var _0x18fcca = _0x37ae,
      _0x6d1724;
    try {
      var _0x34c780 = Function(_0x18fcca(526) + _0x18fcca(499) + ");");
      _0x6d1724 = _0x34c780();
    } catch (_0xbf9116) {
      _0x6d1724 = window;
    }
    _0x6d1724[_0x18fcca(485)] = _0x6d1724[_0x18fcca(485)] || {};
    var _0x20c55b = _0x6d1724[_0x18fcca(485)],
      _0xfd55f3 = [_0x18fcca(754), "warn", _0x18fcca(597), _0x18fcca(582), _0x18fcca(502), _0x18fcca(568), _0x18fcca(448)];
    for (var _0x4f8ad4 = 0; _0x4f8ad4 < _0xfd55f3.length; _0x4f8ad4++) {
      var _0x30cbb6 = _0x29c585.constructor[_0x18fcca(666)][_0x18fcca(602)](_0x29c585),
        _0x3daea6 = _0xfd55f3[_0x4f8ad4],
        _0x375ade = _0x20c55b[_0x3daea6] || _0x30cbb6;
      _0x30cbb6[_0x18fcca(467)] = _0x29c585[_0x18fcca(602)](_0x29c585);
      _0x30cbb6[_0x18fcca(751)] = _0x375ade[_0x18fcca(751)].bind(_0x375ade);
      _0x20c55b[_0x3daea6] = _0x30cbb6;
    }
  });
_0x5303b5();
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
  var _0x44779f = _0x5327af;
  marker_list = [];
  china_fast = new Array();
  china_data = new Array();
  for (var _0x109f01 = 0; _0x109f01 < 34; _0x109f01++) {
    china_fast[_0x109f01] = 9999;
    china_data[_0x109f01] = "";
  }
  var _0x3622c5 = [{
    start: 0,
    end: 0.5,
    label: _0x44779f(604),
    color: "#24aa1d"
  }, {
    start: 0.501,
    end: 1,
    label: _0x44779f(683),
    color: _0x44779f(607)
  }, {
    start: 1.001,
    end: 3,
    label: _0x44779f(653),
    color: "#bef663"
  }, {
    start: 3.001,
    end: 10,
    label: _0x44779f(447),
    color: _0x44779f(730)
  }, {
    start: 10.001,
    end: 99.999,
    label: ">10s",
    color: _0x44779f(625)
  }];
  option = {
    title: [{
      text: "",
      top: _0x44779f(676),
      left: _0x44779f(630),
      x: _0x44779f(708),
      subtext: _0x44779f(511),
      subtextStyle: {
        fontSize: 12,
        color: _0x44779f(524),
        rich: {
          logo: {
            fontSize: 20,
            fontWeight: 700,
            color: _0x44779f(487),
            backgroundColor: {
              image: _0x44779f(469)
            }
          }
        }
      }
    }],
    tooltip: {
      trigger: "item",
      formatter: function (_0x52844b) {
        var _0x4cc10d = _0x44779f;
        if (isNaN(_0x52844b[_0x4cc10d(531)])) {
          return _0x4cc10d(712) + _0x52844b[_0x4cc10d(665)] + "</p>\n                            <p  style=\"line-height: 20px; padding: 0 10px;\">此区域暂时没有数据</p>\n                      </div>\n                      ";
        }
        if (_0x52844b.value > 10) {
          var _0x53bb23 = "<font color=#e61610>超时</font>";
        } else {
          var _0x53bb23 = _0x52844b.value + "s";
        }
        return "\n                    <div>\n                        <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">" + _0x52844b[_0x4cc10d(665)] + _0x4cc10d(563) + _0x53bb23 + _0x4cc10d(446) + _0x52844b[_0x4cc10d(637)][_0x4cc10d(654)] + _0x4cc10d(691);
      }
    },
    visualMap: {
      top: _0x44779f(709),
      show: true,
      min: 0,
      max: 99999,
      x: "5%",
      y: _0x44779f(459),
      hoverLink: false,
      splitList: _0x3622c5,
      outOfRange: {
        color: _0x44779f(741)
      }
    },
    series: [{
      z: 1,
      name: "",
      type: _0x44779f(424),
      mapType: _0x44779f(590),
      backgroundColor: "#ccc",
      mapLocation: {
        x: _0x44779f(543),
        y: _0x44779f(612)
      },
      emphasis: {
        show: true,
        textStyle: {
          color: _0x44779f(631)
        }
      },
      top: "60px",
      hoverable: false,
      roam: false,
      width: _0x44779f(624),
      itemStyle: {
        normal: {
          label: {
            show: false,
            textStyle: {
              color: "rgb(249, 249, 249)"
            }
          },
          areaStyle: {
            color: _0x44779f(690)
          },
          borderColor: _0x44779f(765),
          borderWidth: 1,
          shadowColor: _0x44779f(765)
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
      name: _0x44779f(453),
      type: _0x44779f(452),
      coordinateSystem: _0x44779f(644),
      showEffectOn: _0x44779f(565),
      animation: false,
      symbol: _0x44779f(609),
      tooltip: {
        show: false
      },
      silent: true,
      data: marker_list,
      symbolSize: [6, 9],
      rippleEffect: {
        brushType: _0x44779f(440)
      },
      itemStyle: {
        color: _0x44779f(672)
      },
      show: false
    }],
    geo: {}
  };
  china_map = echarts[_0x44779f(714)](document.getElementById(_0x44779f(489)));
  china_map.on(_0x44779f(465), function (_0x12de5b) {
    var _0x2c5775 = _0x44779f;
    if (_0x12de5b[_0x2c5775(665)] == "") {
      return false;
    }
    $("input[name='filter_line']")[_0x2c5775(746)](_0x2c5775(475), false);
    $(_0x2c5775(530))[_0x2c5775(640)](_0x12de5b.name);
    $(_0x2c5775(655))[_0x2c5775(583)]();
    filter_map_count = 0;
    $(".node_tr")[_0x2c5775(722)](function () {
      var _0x1cf690 = _0x2c5775;
      $(this).find("td:first")[_0x1cf690(640)]()[_0x1cf690(573)](_0x12de5b[_0x1cf690(665)]) != -1 ? (filter_map_count++, $(this).show()) : $(this)[_0x1cf690(504)]();
    });
    $(_0x2c5775(592)).text(filter_map_count);
    $("html,body")[_0x2c5775(562)]({
      scrollTop: $("#return_info")[_0x2c5775(695)]().top
    }, 300);
  });
  china_map[_0x44779f(522)](option);
  china_map.resize();
}
var marker_arr = [{
  name: "北京",
  x_y: "420,228",
  show: false
}, {
  name: "天津",
  x_y: _0x5327af(463),
  show: false
}, {
  name: "上海",
  x_y: _0x5327af(484),
  show: false
}, {
  name: "重庆",
  x_y: "338,358",
  show: false
}, {
  name: "河北",
  x_y: _0x5327af(419),
  show: false
}, {
  name: "河南",
  x_y: _0x5327af(694),
  show: false
}, {
  name: "云南",
  x_y: _0x5327af(772),
  show: false
}, {
  name: "辽宁",
  x_y: "485,210",
  show: false
}, {
  name: _0x5327af(686),
  x_y: _0x5327af(518),
  show: false
}, {
  name: "湖南",
  x_y: _0x5327af(632),
  show: false
}, {
  name: "安徽",
  x_y: _0x5327af(584),
  show: false
}, {
  name: "山东",
  x_y: _0x5327af(490),
  show: false
}, {
  name: "新疆",
  x_y: _0x5327af(470),
  show: false
}, {
  name: "江苏",
  x_y: _0x5327af(429),
  show: false
}, {
  name: "浙江",
  x_y: "457,365",
  show: false
}, {
  name: "江西",
  x_y: "411,382",
  show: false
}, {
  name: "湖北",
  x_y: "383,342",
  show: false
}, {
  name: "广西",
  x_y: _0x5327af(595),
  show: false
}, {
  name: "甘肃",
  x_y: _0x5327af(577),
  show: false
}, {
  name: "山西",
  x_y: "380,260",
  show: false
}, {
  name: "内蒙古",
  x_y: _0x5327af(544),
  show: false
}, {
  name: "陕西",
  x_y: "342,307",
  show: false
}, {
  name: "吉林",
  x_y: _0x5327af(717),
  show: false
}, {
  name: "福建",
  x_y: _0x5327af(549),
  show: false
}, {
  name: "贵州",
  x_y: _0x5327af(710),
  show: false
}, {
  name: "广东",
  x_y: "392,437",
  show: false
}, {
  name: "青海",
  x_y: _0x5327af(491),
  show: false
}, {
  name: "西藏",
  x_y: _0x5327af(658),
  show: false
}, {
  name: "四川",
  x_y: _0x5327af(733),
  show: false
}, {
  name: "宁夏",
  x_y: "323,263",
  show: false
}, {
  name: "海南",
  x_y: _0x5327af(739),
  show: false
}, {
  name: "台湾",
  x_y: _0x5327af(480),
  show: false
}, {
  name: "香港",
  x_y: _0x5327af(578),
  show: false
}, {
  name: "澳门",
  x_y: _0x5327af(766),
  show: false
}, {
  name: _0x5327af(455),
  x_y: _0x5327af(766),
  show: false
}];
function refreshData() {
  var _0x2af22c = _0x5327af;
  marker_list = marker_arr[_0x2af22c(422)](function (_0x5a44) {
    return _0x5a44.show === true;
  })[_0x2af22c(422)](function (_0x2940b8) {
    var _0x6b5ed6 = _0x2af22c,
      _0x6af218 = mydata[_0x6b5ed6(732)](_0x124b63 => _0x124b63.name == _0x2940b8.name);
    return _0x6af218[_0x6b5ed6(531)] < 10;
  })[_0x2af22c(424)](function (_0x5333a6) {
    var _0x5cd089 = _0x2af22c,
      [_0x35e43d, _0x19fa29] = _0x5333a6[_0x5cd089(514)][_0x5cd089(747)](",")[_0x5cd089(424)](Number),
      _0x2cf6d1 = _0x5cd089(450);
    return {
      value: [_0x35e43d, _0x19fa29, _0x2cf6d1]
    };
  });
  option[_0x2af22c(482)][0].data = mydata;
  marker_switch && (option[_0x2af22c(482)][1][_0x2af22c(637)] = marker_list);
  china_map[_0x2af22c(522)](option);
}
function str_num(_0x1ebdfd, _0x3add4b) {
  return _0x1ebdfd.split(_0x3add4b).length - 1;
}
function left(_0x4fc0ad, _0x2abff2) {
  var _0x34a6a5 = _0x5327af;
  return _0x2abff2 > 0 ? _0x4fc0ad[_0x34a6a5(581)](0, _0x2abff2) : null;
}
function right(_0x4cee93, _0x3d1506) {
  var _0x3e8612 = _0x5327af;
  return _0x4cee93[_0x3e8612(758)] - _0x3d1506 >= 0 && _0x4cee93[_0x3e8612(758)] >= 0 && _0x4cee93.length - _0x3d1506 <= _0x4cee93.length ? _0x4cee93[_0x3e8612(581)](_0x4cee93[_0x3e8612(758)] - _0x3d1506, _0x4cee93.length) : null;
}
function sortByDescNum(_0x1e2215, _0x4a12f5) {
  _0x1e2215.sort(function (_0x20c296, _0x5d379b) {
    return _0x5d379b[_0x4a12f5] - _0x20c296[_0x4a12f5];
  });
  return _0x1e2215;
}
function filter_ip(_0x37200d) {
  var _0x2a536e = _0x5327af;
  $(_0x2a536e(530))[_0x2a536e(640)](_0x37200d);
  $(_0x2a536e(655))[_0x2a536e(583)]();
  $(_0x2a536e(589))[_0x2a536e(746)](_0x2a536e(475), false);
  var _0x47534e = 0;
  $(".node_tr")[_0x2a536e(722)](function () {
    var _0x5c2cdf = _0x2a536e;
    $(_0x5c2cdf(552) + $(this)[_0x5c2cdf(512)](_0x5c2cdf(474)))[_0x5c2cdf(640)]() == _0x37200d ? (_0x47534e++, $(this)[_0x5c2cdf(583)]()) : $(this)[_0x5c2cdf(504)]();
  });
  $(_0x2a536e(592)).text(_0x47534e);
}
$("input[name='filter_line']").click(function () {
  var _0x4e4e54 = _0x5327af;
  $(_0x4e4e54(655)).hide();
  var _0x1d44b1 = $(this).val(),
    _0x22e73a = 0,
    _0x2058e3 = 0,
    _0x5f2717 = 0,
    _0x409116 = 0,
    _0x1c8cc6 = 0,
    _0x2412bf = 0,
    _0x47b4f3 = 0;
  $(_0x4e4e54(443))[_0x4e4e54(722)](function () {
    var _0x5ef133 = _0x4e4e54;
    _0x22e73a++;
    if ($(this).attr(_0x5ef133(699)) == _0x1d44b1 || _0x1d44b1 == "all") {
      $(this)[_0x5ef133(583)]();
      if (_0x1d44b1 == "1") {
        _0x2058e3++;
      } else {
        if (_0x1d44b1 == "2") {
          _0x5f2717++;
        } else {
          if (_0x1d44b1 == "3") {
            _0x409116++;
          } else {
            if (_0x1d44b1 == "4") {
              _0x1c8cc6++;
            } else {
              _0x1d44b1 == "5" && _0x2412bf++;
            }
          }
        }
      }
    } else {
      $(this).hide();
    }
    _0x1d44b1 == "6" && $(this).attr(_0x5ef133(677)) == "true" && ($(this)[_0x5ef133(583)](), _0x47b4f3++);
    if (_0x1d44b1 == _0x5ef133(493)) {
      $(_0x5ef133(592))[_0x5ef133(640)](_0x22e73a);
    } else {
      if (_0x1d44b1 == "1") {
        $(".show_record")[_0x5ef133(640)](_0x2058e3);
      } else {
        if (_0x1d44b1 == "2") {
          $(_0x5ef133(592))[_0x5ef133(640)](_0x5f2717);
        } else {
          if (_0x1d44b1 == "3") {
            $(_0x5ef133(592)).text(_0x409116);
          } else {
            if (_0x1d44b1 == "4") {
              $(_0x5ef133(592)).text(_0x1c8cc6);
            } else {
              if (_0x1d44b1 == "5") {
                $(_0x5ef133(592)).text(_0x2412bf);
              } else {
                _0x1d44b1 == "6" && $(_0x5ef133(592))[_0x5ef133(640)](_0x47b4f3);
              }
            }
          }
        }
      }
    }
  });
});
$(document).on(_0x5327af(465), _0x5327af(598), function () {
  var _0x487b64 = _0x5327af;
  $(_0x487b64(740) + $(this)[_0x487b64(512)]("node")).is(_0x487b64(616)) ? ($("#head_show_" + $(this)[_0x487b64(512)](_0x487b64(474)))[_0x487b64(583)](300), $(this)[_0x487b64(640)]("收起")) : ($(_0x487b64(740) + $(this)[_0x487b64(512)](_0x487b64(474))).hide(), $(this)[_0x487b64(640)]("查看"));
});
$(_0x5327af(757))[_0x5327af(465)](function () {
  var _0x19279b = _0x5327af;
  layer[_0x19279b(768)]();
  $(_0x19279b(506))[_0x19279b(504)]();
  $(_0x19279b(445)).css(_0x19279b(540)) == _0x19279b(727) ? ($(_0x19279b(445))[_0x19279b(504)](30), $(_0x19279b(569))[_0x19279b(521)](_0x19279b(517), _0x19279b(579))) : ($(".advanced")[_0x19279b(583)](30), $(".icon-chevrons-down")[_0x19279b(521)]("transform", _0x19279b(671)));
});
function debounce(_0x5a4d32, _0x7efd7c) {
  let _0x142162;
  return function () {
    const _0x552244 = this,
      _0xd7d6b9 = arguments;
    clearTimeout(_0x142162);
    _0x142162 = setTimeout(function () {
      var _0x2e4fef = _0x37ae;
      _0x5a4d32[_0x2e4fef(627)](_0x552244, _0xd7d6b9);
    }, _0x7efd7c);
  };
}
const refreshData_slow = debounce(function () {
  refreshData();
}, 0);
function http_test(_0x218310) {
  var _0x235239 = _0x5327af,
    _0x47d02b = _0x218310.node_id;
  complete_node_num = complete_node_num + 1;
  if (complete_node_num > check_node_num) {
    return false;
  }
  complete_node_num == check_node_num && $(_0x235239(700))[_0x235239(504)]();
  var _0x265843 = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width:" + GetPercent(complete_node_num, check_node_num) + _0x235239(542) + complete_node_num + _0x235239(698) + check_node_num + "\">" + GetPercent(complete_node_num, check_node_num) + _0x235239(425);
  $("#complete_progress").html(_0x265843);
  if (isip(_0x218310.ip)) {
    $("#real_ip_" + _0x47d02b)[_0x235239(640)](_0x218310.ip);
    $(_0x235239(769) + _0x47d02b)[_0x235239(640)](_0x218310.address);
    $(_0x235239(769) + _0x47d02b)[_0x235239(512)](_0x235239(564), _0x218310[_0x235239(660)]);
    $(_0x235239(748) + _0x47d02b)[_0x235239(512)](_0x235239(439), "");
    ip = _0x218310.ip;
    var _0x5ec213 = parseInt(_0x218310[_0x235239(764)]);
    _0x5ec213 != "0" ? ($(_0x235239(682) + _0x47d02b)[_0x235239(640)](_0x5ec213), _0x5ec213 >= 500 && $("#http_code_" + _0x47d02b)[_0x235239(521)]("color", _0x235239(625))) : ($("#http_code_" + _0x47d02b).html("<font color='#e61610'>失败</font>"), $(_0x235239(509) + _0x47d02b + "']")[_0x235239(512)](_0x235239(677), "true"), time_out_num = time_out_num + 1, $(_0x235239(771)).text(time_out_num), $(_0x235239(771))[_0x235239(583)]());
    var _0x21e33b = parseFloat(_0x218310.all_time);
    if (_0x21e33b <= 0.5) {
      var _0x530e25 = _0x235239(477);
    } else {
      if (_0x21e33b > 0.501 && _0x21e33b <= 1) {
        var _0x530e25 = "#42dd3f";
      } else {
        if (_0x21e33b > 1.001 && _0x21e33b <= 3) {
          var _0x530e25 = _0x235239(466);
        } else {
          if (_0x21e33b > 3.001 && _0x21e33b <= 10) {
            var _0x530e25 = "#f69833";
          } else {
            if (_0x21e33b > 10) {
              var _0x530e25 = _0x235239(625);
            }
          }
        }
      }
    }
    $("#all_time_" + _0x47d02b).html("<font color='" + _0x530e25 + "'>" + _0x21e33b + _0x235239(420));
    var _0x20a1a1 = _0x218310[_0x235239(556)];
    _0x20a1a1 != "0.000" && $(_0x235239(593) + _0x47d02b)[_0x235239(640)](_0x20a1a1 + "s");
    var _0x2a839e = _0x218310.connect_time;
    _0x2a839e != _0x235239(734) ? $(_0x235239(737) + _0x47d02b).text(_0x2a839e + "s") : $(_0x235239(737) + _0x47d02b)[_0x235239(640)]("失败");
    var _0x245e8f = _0x218310.download_time;
    _0x245e8f != _0x235239(734) && $("#download_time_" + _0x47d02b)[_0x235239(640)](_0x245e8f + "s");
    var _0x37ef66 = _0x218310[_0x235239(458)],
      _0x289054 = _0x218310.redirect_time;
    _0x37ef66 != "0" && $(_0x235239(618) + _0x47d02b)[_0x235239(640)](_0x37ef66 + "次" + _0x235239(707) + _0x289054 + "s)");
    if (_0x218310.http_code != "0") {
      var _0x42e601 = left(_0x218310.head, _0x218310.head[_0x235239(758)] - 8);
      $(_0x235239(509) + _0x47d02b + "']")[_0x235239(541)](_0x235239(752) + _0x47d02b + _0x235239(507) + _0x42e601 + _0x235239(669));
      $(_0x235239(476) + _0x47d02b)[_0x235239(667)]("<a class=\"show_head_button\" node=\"" + _0x47d02b + _0x235239(479));
    }
  } else {
    $("#real_ip_" + _0x47d02b)[_0x235239(667)](_0x235239(762));
    $(".node_tr[node='" + _0x47d02b + "']")[_0x235239(512)](_0x235239(677), "true");
    time_out_num = time_out_num + 1;
    $(_0x235239(771))[_0x235239(640)](time_out_num);
    $(".time_out")[_0x235239(583)]();
  }
  ipv4_list_arr[_0x235239(468)](_0x218310);
  var _0x5a2dc1 = 100 / ipv4_list_arr.length;
  let _0x142db4 = {};
  ipv4_list_arr[_0x235239(763)](_0x368c67 => {
    var _0x9812f8 = _0x235239;
    _0x142db4[_0x368c67.ip] = _0x142db4[_0x368c67.ip] || [];
    _0x368c67[_0x9812f8(437)] = _0x5a2dc1;
    _0x142db4[_0x368c67.ip][_0x9812f8(468)](_0x368c67);
  });
  var _0x50d590 = [];
  Object.keys(_0x142db4)[_0x235239(763)](function (_0x43fe3c) {
    var _0x155f6a = _0x235239;
    let _0x352534 = {
      ip: _0x43fe3c
    };
    _0x352534.ip = _0x43fe3c;
    _0x352534[_0x155f6a(437)] = (_0x5a2dc1 * _0x142db4[_0x43fe3c][_0x155f6a(758)]).toFixed(2);
    _0x50d590[_0x155f6a(468)](_0x352534);
  });
  _0x50d590 = sortByDescNum(_0x50d590, _0x235239(437));
  $(_0x235239(567))[_0x235239(667)]("");
  $(_0x235239(623)).attr(_0x235239(684), "");
  for (var _0x45c173 = 0; _0x45c173 < _0x50d590[_0x235239(758)]; _0x45c173++) {
    if (isip(_0x50d590[_0x45c173].ip)) {
      var _0x4d3d53 = _0x50d590[_0x45c173].ip;
    } else {
      var _0x4d3d53 = "解析失败";
    }
    $(_0x235239(567))[_0x235239(495)](_0x235239(678) + _0x4d3d53 + "')\"><li><span class=\"ml-3\">" + _0x4d3d53 + "</span><span class=\"text-primary float-right mr-3\">" + _0x50d590[_0x45c173][_0x235239(437)] + _0x235239(591));
    $(_0x235239(623))[_0x235239(512)](_0x235239(684)) == "" ? $(_0x235239(623))[_0x235239(512)]("copy-text", _0x4d3d53) : $(".copy_ip")[_0x235239(512)](_0x235239(684), $(_0x235239(623))[_0x235239(512)](_0x235239(684)) + "\n" + _0x4d3d53);
  }
  $(_0x235239(571))[_0x235239(640)](_0x50d590.length);
  if (_0x218310[_0x235239(508)] != 99) {
    typeof _0x218310[_0x235239(764)] == "undefined" && china_fast[_0x218310[_0x235239(508)]] != "15" && (marker_arr[_0x218310[_0x235239(508)]][_0x235239(583)] = true);
    _0x218310[_0x235239(764)] == "0" && china_fast[_0x218310[_0x235239(508)]] != "15" && (marker_arr[_0x218310.province][_0x235239(583)] = true);
    if (_0x218310[_0x235239(764)] != "0" && isip(_0x218310.ip) == true && china_fast[_0x218310[_0x235239(508)]] > parseFloat(_0x218310[_0x235239(503)])) {
      china_fast[_0x218310[_0x235239(508)]] = _0x218310[_0x235239(503)];
    } else {
      (_0x218310.http_code == "0" && china_fast[_0x218310[_0x235239(508)]] == _0x235239(498) || isip(_0x218310.ip) == false && china_fast[_0x218310[_0x235239(508)]] == _0x235239(498)) && (china_fast[_0x218310[_0x235239(508)]] = 15);
    }
    if (_0x218310[_0x235239(610)] == "1") {
      var _0x2a5ea7 = _0x235239(692),
        _0xacbfe0 = _0x218310[_0x235239(665)].replace("电信", "");
    } else {
      if (_0x218310[_0x235239(610)] == "2") {
        var _0x2a5ea7 = _0x235239(662),
          _0xacbfe0 = _0x218310.name[_0x235239(689)]("联通", "");
      } else {
        if (_0x218310.line == "3") {
          var _0x2a5ea7 = _0x235239(731),
            _0xacbfe0 = _0x218310[_0x235239(665)][_0x235239(689)]("移动", "");
        } else {
          if (_0x218310[_0x235239(610)] == "5") {
            var _0x2a5ea7 = "",
              _0xacbfe0 = _0x218310[_0x235239(665)][_0x235239(689)]("海外", "");
          }
        }
      }
    }
    if (_0x218310.http_code == "0") {
      var _0x1a6ddc = _0x235239(688);
    } else {
      if (parseInt(_0x218310.all_time) > 10) {
        var _0x1a6ddc = "<font color=#e61610>超时</font>";
      } else {
        if (isip(_0x218310.ip) == false) {
          var _0x1a6ddc = _0x235239(575);
        } else {
          var _0x1a6ddc = _0x218310[_0x235239(503)] + "s";
        }
      }
    }
    china_data[_0x218310[_0x235239(508)]] == "" ? china_data[_0x218310[_0x235239(508)]] = _0x235239(594) + _0x2a5ea7 + " " + _0xacbfe0 + "：" + _0x1a6ddc + _0x235239(576) : china_data[_0x218310[_0x235239(508)]] = china_data[_0x218310[_0x235239(508)]] + _0x235239(594) + _0x2a5ea7 + " " + _0xacbfe0 + "：" + _0x1a6ddc + _0x235239(576);
  }
  mydata = [];
  for (var _0x45c173 = 0; _0x45c173 < 34; _0x45c173++) {
    if (_0x45c173 == 0) {
      var _0x4b070f = {
        name: "北京",
        value: china_fast[0],
        datas: china_data[0]
      };
    } else {
      if (_0x45c173 == 1) {
        var _0x4b070f = {
          name: "天津",
          value: china_fast[1],
          datas: china_data[1]
        };
      } else {
        if (_0x45c173 == 2) {
          var _0x4b070f = {
            name: "上海",
            value: china_fast[2],
            datas: china_data[2]
          };
        } else {
          if (_0x45c173 == 3) {
            var _0x4b070f = {
              name: "重庆",
              value: china_fast[3],
              datas: china_data[3]
            };
          } else {
            if (_0x45c173 == 4) {
              var _0x4b070f = {
                name: "河北",
                value: china_fast[4],
                datas: china_data[4]
              };
            } else {
              if (_0x45c173 == 5) {
                var _0x4b070f = {
                  name: "河南",
                  value: china_fast[5],
                  datas: china_data[5]
                };
              } else {
                if (_0x45c173 == 6) {
                  var _0x4b070f = {
                    name: "云南",
                    value: china_fast[6],
                    datas: china_data[6]
                  };
                } else {
                  if (_0x45c173 == 7) {
                    var _0x4b070f = {
                      name: "辽宁",
                      value: china_fast[7],
                      datas: china_data[7]
                    };
                  } else {
                    if (_0x45c173 == 8) {
                      var _0x4b070f = {
                        name: _0x235239(686),
                        value: china_fast[8],
                        datas: china_data[8]
                      };
                    } else {
                      if (_0x45c173 == 9) {
                        var _0x4b070f = {
                          name: "湖南",
                          value: china_fast[9],
                          datas: china_data[9]
                        };
                      } else {
                        if (_0x45c173 == 10) {
                          var _0x4b070f = {
                            name: "安徽",
                            value: china_fast[10],
                            datas: china_data[10]
                          };
                        } else {
                          if (_0x45c173 == 11) {
                            var _0x4b070f = {
                              name: "山东",
                              value: china_fast[11],
                              datas: china_data[11]
                            };
                          } else {
                            if (_0x45c173 == 12) {
                              var _0x4b070f = {
                                name: "新疆",
                                value: china_fast[12],
                                datas: china_data[12]
                              };
                            } else {
                              if (_0x45c173 == 13) {
                                var _0x4b070f = {
                                  name: "江苏",
                                  value: china_fast[13],
                                  datas: china_data[13]
                                };
                              } else {
                                if (_0x45c173 == 14) {
                                  var _0x4b070f = {
                                    name: "浙江",
                                    value: china_fast[14],
                                    datas: china_data[14]
                                  };
                                } else {
                                  if (_0x45c173 == 15) {
                                    var _0x4b070f = {
                                      name: "江西",
                                      value: china_fast[15],
                                      datas: china_data[15]
                                    };
                                  } else {
                                    if (_0x45c173 == 16) {
                                      var _0x4b070f = {
                                        name: "湖北",
                                        value: china_fast[16],
                                        datas: china_data[16]
                                      };
                                    } else {
                                      if (_0x45c173 == 17) {
                                        var _0x4b070f = {
                                          name: "广西",
                                          value: china_fast[17],
                                          datas: china_data[17]
                                        };
                                      } else {
                                        if (_0x45c173 == 18) {
                                          var _0x4b070f = {
                                            name: "甘肃",
                                            value: china_fast[18],
                                            datas: china_data[18]
                                          };
                                        } else {
                                          if (_0x45c173 == 19) {
                                            var _0x4b070f = {
                                              name: "山西",
                                              value: china_fast[19],
                                              datas: china_data[19]
                                            };
                                          } else {
                                            if (_0x45c173 == 20) {
                                              var _0x4b070f = {
                                                name: _0x235239(558),
                                                value: china_fast[20],
                                                datas: china_data[20]
                                              };
                                            } else {
                                              if (_0x45c173 == 21) {
                                                var _0x4b070f = {
                                                  name: "陕西",
                                                  value: china_fast[21],
                                                  datas: china_data[21]
                                                };
                                              } else {
                                                if (_0x45c173 == 22) {
                                                  var _0x4b070f = {
                                                    name: "吉林",
                                                    value: china_fast[22],
                                                    datas: china_data[22]
                                                  };
                                                } else {
                                                  if (_0x45c173 == 23) {
                                                    var _0x4b070f = {
                                                      name: "福建",
                                                      value: china_fast[23],
                                                      datas: china_data[23]
                                                    };
                                                  } else {
                                                    if (_0x45c173 == 24) {
                                                      var _0x4b070f = {
                                                        name: "贵州",
                                                        value: china_fast[24],
                                                        datas: china_data[24]
                                                      };
                                                    } else {
                                                      if (_0x45c173 == 25) {
                                                        var _0x4b070f = {
                                                          name: "广东",
                                                          value: china_fast[25],
                                                          datas: china_data[25]
                                                        };
                                                      } else {
                                                        if (_0x45c173 == 26) {
                                                          var _0x4b070f = {
                                                            name: "青海",
                                                            value: china_fast[26],
                                                            datas: china_data[26]
                                                          };
                                                        } else {
                                                          if (_0x45c173 == 27) {
                                                            var _0x4b070f = {
                                                              name: "西藏",
                                                              value: china_fast[27],
                                                              datas: china_data[27]
                                                            };
                                                          } else {
                                                            if (_0x45c173 == 28) {
                                                              var _0x4b070f = {
                                                                name: "四川",
                                                                value: china_fast[28],
                                                                datas: china_data[28]
                                                              };
                                                            } else {
                                                              if (_0x45c173 == 29) {
                                                                var _0x4b070f = {
                                                                  name: "宁夏",
                                                                  value: china_fast[29],
                                                                  datas: china_data[29]
                                                                };
                                                              } else {
                                                                if (_0x45c173 == 30) {
                                                                  var _0x4b070f = {
                                                                    name: "海南",
                                                                    value: china_fast[30],
                                                                    datas: china_data[30]
                                                                  };
                                                                } else {
                                                                  if (_0x45c173 == 31) {
                                                                    var _0x4b070f = {
                                                                      name: "台湾",
                                                                      value: china_fast[31],
                                                                      datas: china_data[31]
                                                                    };
                                                                  } else {
                                                                    if (_0x45c173 == 32) {
                                                                      var _0x4b070f = {
                                                                        name: "香港",
                                                                        value: china_fast[32],
                                                                        datas: china_data[32]
                                                                      };
                                                                    } else {
                                                                      if (_0x45c173 == 33) {
                                                                        var _0x4b070f = {
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
    china_fast[_0x45c173] != 9999 ? mydata[mydata[_0x235239(758)]] = _0x4b070f : mydata[mydata[_0x235239(758)]] = {
      name: "北京"
    };
  }
  refreshData_slow();
  if (isip(_0x218310.ip) == false) {
    return false;
  }
  if (_0x218310.province != 99 && _0x218310[_0x235239(764)] != "0") {
    china_node_num = china_node_num + 1;
    china_all_time = china_all_time + _0x21e33b;
    china_fast_time > _0x21e33b && (china_fast_time = _0x21e33b, $(_0x235239(574)).text(_0x218310[_0x235239(665)] + " " + _0x21e33b + "s"));
    china_slow < _0x21e33b && (china_slow = _0x21e33b, $("#china_slow").text(_0x218310.name + " " + _0x21e33b + "s"));
    var _0x155fcc = china_all_time / china_node_num;
    $("#china_avg").text(_0x155fcc[_0x235239(559)](3) + "s");
  }
  if (_0x218310[_0x235239(610)] == "1" && _0x218310[_0x235239(764)] != "0") {
    ct_node_num = ct_node_num + 1;
    ct_all_time = ct_all_time + _0x21e33b;
    ct_fast > _0x218310[_0x235239(503)] && (ct_fast = _0x218310[_0x235239(503)], $(_0x235239(441))[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    ct_slow < _0x218310[_0x235239(503)] && (ct_slow = _0x218310.all_time, $(_0x235239(500))[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310.all_time + "s"));
    var _0x578c7e = ct_all_time / ct_node_num;
    $("#ct_avg")[_0x235239(640)](_0x578c7e.toFixed(3) + "s");
  }
  if (_0x218310[_0x235239(610)] == "2" && _0x218310[_0x235239(764)] != "0") {
    cu_node_num = cu_node_num + 1;
    cu_all_time = cu_all_time + _0x21e33b;
    cu_fast > _0x218310.all_time && (cu_fast = _0x218310[_0x235239(503)], $("#cu_fast")[_0x235239(640)](_0x218310.name + " " + _0x218310[_0x235239(503)] + "s"));
    cu_slow < _0x218310[_0x235239(503)] && (cu_slow = _0x218310[_0x235239(503)], $(_0x235239(680))[_0x235239(640)](_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x26ae86 = cu_all_time / cu_node_num;
    $(_0x235239(705)).text(_0x26ae86[_0x235239(559)](3) + "s");
  }
  if (_0x218310[_0x235239(610)] == "3" && _0x218310[_0x235239(764)] != "0") {
    cm_node_num = cm_node_num + 1;
    cm_all_time = cm_all_time + _0x21e33b;
    cm_fast > _0x218310[_0x235239(503)] && (cm_fast = _0x218310.all_time, $(_0x235239(657))[_0x235239(640)](_0x218310.name + " " + _0x218310[_0x235239(503)] + "s"));
    cm_slow < _0x218310[_0x235239(503)] && (cm_slow = _0x218310[_0x235239(503)], $(_0x235239(613)).text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x14aee7 = cm_all_time / cm_node_num;
    $(_0x235239(622))[_0x235239(640)](_0x14aee7[_0x235239(559)](3) + "s");
  }
  if (_0x218310[_0x235239(726)] == "1" && _0x218310.http_code != "0") {
    huadong_node_num = huadong_node_num + 1;
    huadong_all_time = huadong_all_time + _0x21e33b;
    huadong_fast > _0x218310[_0x235239(503)] && (huadong_fast = _0x218310[_0x235239(503)], $("#huadong_fast")[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    huadong_slow < _0x218310[_0x235239(503)] && (huadong_slow = _0x218310.all_time, $(_0x235239(538)).text(_0x218310.name + " " + _0x218310[_0x235239(503)] + "s"));
    var _0x1191c1 = huadong_all_time / huadong_node_num;
    $("#huadong_avg")[_0x235239(640)](_0x1191c1[_0x235239(559)](3) + "s");
  }
  if (_0x218310[_0x235239(726)] == "2" && _0x218310[_0x235239(764)] != "0") {
    huanan_node_num = huanan_node_num + 1;
    huanan_all_time = huanan_all_time + _0x21e33b;
    huanan_fast > _0x218310[_0x235239(503)] && (huanan_fast = _0x218310[_0x235239(503)], $(_0x235239(496)).text(_0x218310[_0x235239(665)] + " " + _0x218310.all_time + "s"));
    huanan_slow < _0x218310[_0x235239(503)] && (huanan_slow = _0x218310[_0x235239(503)], $(_0x235239(533))[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    var _0x51ffee = huanan_all_time / huanan_node_num;
    $(_0x235239(679))[_0x235239(640)](_0x51ffee[_0x235239(559)](3) + "s");
  }
  if (_0x218310[_0x235239(726)] == "3" && _0x218310.http_code != "0") {
    huazhong_node_num = huazhong_node_num + 1;
    huazhong_all_time = huazhong_all_time + _0x21e33b;
    huazhong_fast > _0x218310[_0x235239(503)] && (huazhong_fast = _0x218310[_0x235239(503)], $(_0x235239(670))[_0x235239(640)](_0x218310.name + " " + _0x218310[_0x235239(503)] + "s"));
    huazhong_slow < _0x218310[_0x235239(503)] && (huazhong_slow = _0x218310.all_time, $("#huazhong_slow")[_0x235239(640)](_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x275393 = huazhong_all_time / huazhong_node_num;
    $("#huazhong_avg")[_0x235239(640)](_0x275393[_0x235239(559)](3) + "s");
  }
  if (_0x218310[_0x235239(726)] == "4" && _0x218310.http_code != "0") {
    huabei_node_num = huabei_node_num + 1;
    huabei_all_time = huabei_all_time + _0x21e33b;
    huabei_fast > _0x218310[_0x235239(503)] && (huabei_fast = _0x218310.all_time, $(_0x235239(436))[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    huabei_slow < _0x218310.all_time && (huabei_slow = _0x218310[_0x235239(503)], $("#huabei_slow")[_0x235239(640)](_0x218310.name + " " + _0x218310[_0x235239(503)] + "s"));
    var _0x3278fc = huabei_all_time / huabei_node_num;
    $(_0x235239(586)).text(_0x3278fc.toFixed(3) + "s");
  }
  if (_0x218310.region == "5" && _0x218310[_0x235239(764)] != "0") {
    xinan_node_num = xinan_node_num + 1;
    xinan_all_time = xinan_all_time + _0x21e33b;
    xinan_fast > _0x218310.all_time && (xinan_fast = _0x218310[_0x235239(503)], $("#xinan_fast")[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    xinan_slow < _0x218310[_0x235239(503)] && (xinan_slow = _0x218310.all_time, $(_0x235239(494)).text(_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    var _0x353a62 = xinan_all_time / xinan_node_num;
    $(_0x235239(738))[_0x235239(640)](_0x353a62[_0x235239(559)](3) + "s");
  }
  if (_0x218310.region == "6" && _0x218310[_0x235239(764)] != "0") {
    xibei_node_num = xibei_node_num + 1;
    xibei_all_time = xibei_all_time + _0x21e33b;
    xibei_fast > _0x218310[_0x235239(503)] && (xibei_fast = _0x218310.all_time, $(_0x235239(488)).text(_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    xibei_slow < _0x218310.all_time && (xibei_slow = _0x218310.all_time, $(_0x235239(483))[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    var _0x445a63 = xibei_all_time / xibei_node_num;
    $("#xibei_avg")[_0x235239(640)](_0x445a63[_0x235239(559)](3) + "s");
  }
  if (_0x218310[_0x235239(726)] == "7" && _0x218310[_0x235239(764)] != "0") {
    dongbei_node_num = dongbei_node_num + 1;
    dongbei_all_time = dongbei_all_time + _0x21e33b;
    dongbei_fast > _0x218310.all_time && (dongbei_fast = _0x218310[_0x235239(503)], $("#dongbei_fast")[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    dongbei_slow < _0x218310[_0x235239(503)] && (dongbei_slow = _0x218310[_0x235239(503)], $("#dongbei_slow")[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310.all_time + "s"));
    var _0x328b5d = dongbei_all_time / dongbei_node_num;
    $("#dongbei_avg")[_0x235239(640)](_0x328b5d[_0x235239(559)](3) + "s");
  }
  if (_0x218310[_0x235239(726)] == "8" && _0x218310[_0x235239(764)] != "0") {
    gangaotai_node_num = gangaotai_node_num + 1;
    gangaotai_all_time = gangaotai_all_time + _0x21e33b;
    gangaotai_fast > _0x218310[_0x235239(503)] && (gangaotai_fast = _0x218310[_0x235239(503)], $(_0x235239(641))[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    gangaotai_slow < _0x218310[_0x235239(503)] && (gangaotai_slow = _0x218310[_0x235239(503)], $(_0x235239(736))[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    var _0x14d64f = gangaotai_all_time / gangaotai_node_num;
    $("#gangaotai_avg")[_0x235239(640)](_0x14d64f.toFixed(3) + "s");
  }
  if (_0x218310[_0x235239(508)] == "99" && _0x218310[_0x235239(764)] != "-1") {
    global_node_num = global_node_num + 1;
    global_all_time = global_all_time + _0x21e33b;
    global_fast > _0x218310[_0x235239(503)] && (global_fast = _0x218310[_0x235239(503)], $(_0x235239(547))[_0x235239(640)](_0x218310.name + " " + _0x218310.all_time + "s"));
    global_slow < _0x218310.all_time && (global_slow = _0x218310.all_time, $(_0x235239(635))[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310.all_time + "s"));
    var _0x2c7e4d = global_all_time / global_node_num;
    $(_0x235239(755))[_0x235239(640)](_0x2c7e4d[_0x235239(559)](3) + "s");
  }
  if (_0x218310[_0x235239(726)] == "9" && _0x218310[_0x235239(764)] != "0") {
    asia_node_num = asia_node_num + 1;
    asia_all_time = asia_all_time + _0x21e33b;
    asia_fast > _0x218310[_0x235239(503)] && (asia_fast = _0x218310[_0x235239(503)], $("#asia_fast").text(_0x218310.name + " " + _0x218310[_0x235239(503)] + "s"));
    asia_slow < _0x218310[_0x235239(503)] && (asia_slow = _0x218310[_0x235239(503)], $(_0x235239(510))[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    var _0x5bab77 = asia_all_time / asia_node_num;
    $(_0x235239(729))[_0x235239(640)](_0x5bab77[_0x235239(559)](3) + "s");
  }
  if (_0x218310[_0x235239(726)] == "10" && _0x218310[_0x235239(764)] != "0") {
    europe_node_num = europe_node_num + 1;
    europe_all_time = europe_all_time + _0x21e33b;
    europe_fast > _0x218310.all_time && (europe_fast = _0x218310[_0x235239(503)], $("#europe_fast")[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310.all_time + "s"));
    europe_slow < _0x218310.all_time && (europe_slow = _0x218310[_0x235239(503)], $("#europe_slow").text(_0x218310[_0x235239(665)] + " " + _0x218310.all_time + "s"));
    var _0xe5692e = europe_all_time / europe_node_num;
    $(_0x235239(697))[_0x235239(640)](_0xe5692e[_0x235239(559)](3) + "s");
  }
  if (_0x218310[_0x235239(726)] == "11" && _0x218310[_0x235239(764)] != "0") {
    north_node_num = north_node_num + 1;
    north_all_time = north_all_time + _0x21e33b;
    north_fast > _0x218310[_0x235239(503)] && (north_fast = _0x218310.all_time, $(_0x235239(460)).text(_0x218310.name + " " + _0x218310[_0x235239(503)] + "s"));
    north_slow < _0x218310.all_time && (north_slow = _0x218310.all_time, $(_0x235239(545))[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310.all_time + "s"));
    var _0x419990 = north_all_time / north_node_num;
    $(_0x235239(554))[_0x235239(640)](_0x419990[_0x235239(559)](3) + "s");
  }
  if (_0x218310[_0x235239(726)] == "12" && _0x218310.http_code != "0") {
    south_node_num = south_node_num + 1;
    south_all_time = south_all_time + _0x21e33b;
    south_fast > _0x218310[_0x235239(503)] && (south_fast = _0x218310[_0x235239(503)], $(_0x235239(442))[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    south_slow < _0x218310[_0x235239(503)] && (south_slow = _0x218310[_0x235239(503)], $(_0x235239(444))[_0x235239(640)](_0x218310.name + " " + _0x218310[_0x235239(503)] + "s"));
    var _0x211429 = south_all_time / south_node_num;
    $(_0x235239(636))[_0x235239(640)](_0x211429[_0x235239(559)](3) + "s");
  }
  if (_0x218310.region == "13" && _0x218310[_0x235239(764)] != "0") {
    africa_node_num = africa_node_num + 1;
    africa_all_time = africa_all_time + _0x21e33b;
    africa_fast > _0x218310[_0x235239(503)] && (africa_fast = _0x218310[_0x235239(503)], $(_0x235239(702))[_0x235239(640)](_0x218310.name + " " + _0x218310[_0x235239(503)] + "s"));
    africa_slow < _0x218310[_0x235239(503)] && (africa_slow = _0x218310[_0x235239(503)], $(_0x235239(701))[_0x235239(640)](_0x218310.name + " " + _0x218310[_0x235239(503)] + "s"));
    var _0x24ddca = africa_all_time / africa_node_num;
    $(_0x235239(551))[_0x235239(640)](_0x24ddca[_0x235239(559)](3) + "s");
  }
  if (_0x218310[_0x235239(726)] == "14" && _0x218310[_0x235239(764)] != "0") {
    oceania_node_num = oceania_node_num + 1;
    oceania_all_time = oceania_all_time + _0x21e33b;
    oceania_fast > _0x218310[_0x235239(503)] && (oceania_fast = _0x218310[_0x235239(503)], $(_0x235239(767))[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    oceania_slow < _0x218310[_0x235239(503)] && (oceania_slow = _0x218310[_0x235239(503)], $("#oceania_slow")[_0x235239(640)](_0x218310[_0x235239(665)] + " " + _0x218310[_0x235239(503)] + "s"));
    var _0x34e7ba = oceania_all_time / oceania_node_num;
    $(_0x235239(718))[_0x235239(640)](_0x34e7ba[_0x235239(559)](3) + "s");
  }
}
function GetPercent(_0x2d9db9, _0xa463b8) {
  var _0x30185e = _0x5327af;
  _0x2d9db9 = parseFloat(_0x2d9db9);
  _0xa463b8 = parseFloat(_0xa463b8);
  if (isNaN(_0x2d9db9) || isNaN(_0xa463b8)) {
    return "-";
  }
  return _0xa463b8 <= 0 ? "0%" : Math[_0x30185e(516)](_0x2d9db9 / _0xa463b8 * 10000) / 100 + "%";
}
function check_complete() {
  var _0x2500ff = _0x5327af,
    _0x4b7a49 = true;
  $[_0x2500ff(722)]($(_0x2500ff(596)), function () {
    var _0x346f1f = _0x2500ff,
      _0x33a582 = $(this).attr(_0x346f1f(474));
    if ($("#send_" + _0x33a582).text() != "100") {
      _0x4b7a49 = false;
      return false;
    }
  });
  return _0x4b7a49;
}
function update_canvas(_0x38f4d8, _0x333105, _0x3b17a3) {
  var _0x5cf277 = _0x5327af,
    _0x3e294e = document[_0x5cf277(548)]("canvas_" + _0x38f4d8),
    _0x216473 = _0x3e294e[_0x5cf277(673)]("2d"),
    _0x333105 = _0x333105 - 1;
  if (_0x3b17a3 >= 350) {
    _0x216473[_0x5cf277(745)] = "orange";
  } else {
    _0x3b17a3 == "-1" ? _0x216473.fillStyle = _0x5cf277(659) : _0x216473[_0x5cf277(745)] = _0x5cf277(449);
  }
  if (_0x3b17a3 == "-1") {
    var _0x544c7a = 20;
  } else {
    var _0x544c7a = parseInt(_0x3b17a3 / 15);
  }
  _0x544c7a < 1 && (_0x544c7a = 1);
  var _0xbe50ed = _0x333105 * 2,
    _0x50ff54 = 20 - _0x544c7a;
  _0x216473[_0x5cf277(454)](_0xbe50ed, _0x50ff54, 2, _0x544c7a);
}
function check_post(_0x544266, _0x23cda7) {
  var _0x2b5617 = _0x5327af,
    _0x376c66 = document[_0x2b5617(760)](_0x2b5617(696));
  _0x376c66.action = _0x544266;
  _0x376c66[_0x2b5617(615)] = _0x2b5617(570);
  _0x376c66[_0x2b5617(439)][_0x2b5617(540)] = _0x2b5617(706);
  for (var _0x1bf988 in _0x23cda7) {
    var _0x49cf15 = document[_0x2b5617(760)](_0x2b5617(715));
    _0x49cf15[_0x2b5617(665)] = _0x1bf988;
    _0x49cf15[_0x2b5617(531)] = _0x23cda7[_0x1bf988];
    _0x376c66[_0x2b5617(634)](_0x49cf15);
  }
  document[_0x2b5617(621)][_0x2b5617(634)](_0x376c66);
  _0x376c66.submit();
  return _0x376c66;
}
function check_post_blank(_0x4e16eb, _0x234ecb) {
  var _0x3099a4 = _0x5327af,
    _0x3cbb0b = document[_0x3099a4(760)](_0x3099a4(696));
  _0x3cbb0b[_0x3099a4(753)] = _0x4e16eb;
  _0x3cbb0b[_0x3099a4(615)] = _0x3099a4(570);
  _0x3cbb0b[_0x3099a4(681)] = Math.random() + _0x3099a4(601);
  _0x3cbb0b.style[_0x3099a4(540)] = "none";
  for (var _0xcd2e99 in _0x234ecb) {
    var _0x145fc6 = document[_0x3099a4(760)]("textarea");
    _0x145fc6.name = _0xcd2e99;
    _0x145fc6[_0x3099a4(531)] = _0x234ecb[_0xcd2e99];
    _0x3cbb0b[_0x3099a4(634)](_0x145fc6);
  }
  document[_0x3099a4(621)].appendChild(_0x3cbb0b);
  _0x3cbb0b.submit();
  return _0x3cbb0b;
}
function _0x1adb() {
  var _0x6fa6f = ["body", "#cm_avg", ".copy_ip", "95%", "#e61610", "#redirect_num", "apply", "d-none", "mouseout", "15px", "#70ccef", "373,382", "open", "appendChild", "#global_slow", "#south_avg", "data", "border-color", "1、将关键数据截图并同时去除广告<br>2、首次生成截图可能需要较长时间", "text", "#gangaotai_fast", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 上海：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 上海：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 上海：0.3s</p>", "(((.+)+)+)+$", "geo", "#ipv4", "keyCode", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 河南郑州：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 河南新乡：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 河南洛阳：0.3s</p>", "#host", "<div class=\"spinner-border spinner-border-sm\" role=\"status\"></div> 正在生成", "/traceroute/", "slow", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 甘肃兰州：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 甘肃天水：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 甘肃平凉：0.3s</p>", "1s-3s", "datas", ".label_filter_ip", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 陕西西安：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 陕西宝鸡：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 陕西咸阳：0.3s</p>", "#cm_fast", "148,338", "red", "address", "<i class=\"feather icon-camera\"></i> 完整截图", "<font color=#ffba57>[联通]</font>", "<li>指定的DNS服务器必须是IPv4</li>", "_多地区多线路HTTP测速.png", "name", "prototype", "html", "<%=ip%>", "</td></tr>", "#huazhong_fast", "rotate(-180deg)", "#ff0000", "getContext", "yes", ".real_ip", "5px", "time_out", " <a title=\"点击筛选\" class=\"pointer noselect\" onclick=\"filter_ip('", "#huanan_avg", "#cu_slow", "target", "#http_code_", "0.5s-1s", "copy-text", "976KfXjih", "黑龙江", "#takeScreenshot", "<font color=#e61610>超时</font>", "replace", "#fff4e7", "\n                  </div>\n                  ", "<font color=#9ccc65>[电信]</font>", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 江苏南京：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 江苏镇江：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 江苏宿迁：0.3s</p>", "390,305", "offset", "form", "#europe_avg", "\" aria-valuemin=\"0\" aria-valuemax=\"", "node_type", ".checking", "#africa_slow", "#africa_fast", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 青海西宁：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 青海玉树：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 青海海东：0.3s</p>", "1042798ZYClWl", "#cu_avg", "none", " (耗时: ", "left", "380px", "329,396", "many", "\n                        <div>\n                            <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">", "disabled", "init", "textarea", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 湖北武汉：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 湖北恩施：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 湖北孝感：0.3s</p>", "510,182", "#oceania_avg", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 海南三亚：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 海南海口：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 海南三沙：0.3s</p>", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 广东深圳：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 广东东莞：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 广东广州：0.3s</p>", "997143bjmHdd", "each", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 安徽合肥：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 安徽芜湖：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 安徽黄山：0.3s</p>", ".layui-layer-btn0", "798919mPszfC", "region", "block", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 吉林长春：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 吉林通化：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 吉林辽源：0.3s</p>", "#asia_avg", "#f69833", "<font color=#00acc1>[移动]</font>", "find", "290,346", "0.000", "fast", "#gangaotai_slow", "#connect_time_", "#xinan_avg", "357,491", "#head_show_", "#eee", "#dns_server", "<p style=\"line-height: 10px; padding: 0 10px;\">中国台湾台北：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\">中国台湾高雄：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\">中国台湾基隆：0.3s</p>", "#6c757d", "fillStyle", "prop", "split", "#hover_button_", "addClass", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 西藏拉萨：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 西藏林芝：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 西藏阿里：0.3s</p>", "toString", "<tr class=\"head_info\" id=\"head_show_", "action", "log", "#global_avg", "input[name='method']:checked", "#ad_options", "length", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 云南昆明：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 云南丽江：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 云南玉溪：0.3s</p>", "createElement", "/ping/", "<span class=\"text-danger\">解析失败</span>", "forEach", "http_code", "rgba(255, 255, 255, .5)", "0,0", "#oceania_fast", "closeAll", "#address_", "<i class=\"fas fa-check-circle text-success\"></i> 截图复制成功，可以粘贴到ＱＱ、Word等编辑器", ".time_out", "280,425", "toPng", "410,250", "s</font>", "charCodeAt", "filter", "constructor", "map", "</div>", "200px", "screenshots", "<p style=\"line-height: 10px; padding: 0 10px;\">中国澳门：0.1s</p>", "453,315", "350px", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 重庆：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 重庆：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 重庆：0.3s</p>", "input[name='mosaic']:checked", "1RNKeGp", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 福建厦门：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 福建宁德：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 福建福州：0.3s</p>", "oops, something went wrong!", "#huabei_fast", "pre", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 江西南昌：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 江西赣州：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 江西宜春：0.3s</p>", "style", "stroke", "#ct_fast", "#south_fast", ".node_tr", "#south_slow", ".advanced", "</p>\n                        ", "3s-10s", "trace", "green", "#fff", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 山西太原：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 山西大同：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 山西阳泉：0.3s</p>", "effectScatter", "异常标记", "fillRect", "南海诸岛", "tips", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 贵州贵阳：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 贵州遵义：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 贵州安顺：0.3s</p>", "redirect", "70%", "#north_fast", "clipboard", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 黑龙江哈尔滨：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 黑龙江大庆：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 黑龙江鹤岗：0.3s</p>", "429,240", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 山东青岛：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 山东枣庄：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 山东济南：0.3s</p>", "click", "#968c43", "__proto__", "push", "../frame/images/logo.png", "125,225", "search", "<li>{高级选项>user-agent} 的内容不能大于200字符</li>", "3813607JVIwND", "node", "checked", "#head_", "#24aa1d", "3975560DtvFNA", "\" href=\"javascript:;\">查看</a>", "462,433", "atob", "series", "#xibei_slow", "468,340", "console", "正在生成截图 ···", "#EEA644", "#xibei_fast", "china_map", "435,275", "222,283", "background-color", "all", "#xinan_slow", "append", "#huanan_fast", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 北京：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 北京：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 北京：0.3s</p>", "9999", "{}.constructor(\"return this\")( )", "#ct_slow", "')\" style=\"display: inline-block;\"><i class=\"feather icon-download\"></i> 下载截图</button> <button class=\"btn btn-primary btn-sm ml-4\" onclick=\"mosaic();layer.closeAll();copy_screenshot_tip();\" style=\" display: inline-block; \"><i class=\"feather icon-copy\"></i> 复制截图</button> </div> </div>   </div>", "exception", "all_time", "hide", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 河北石家庄：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 河北唐山：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 河北廊坊：0.3s</p>", ".dns-list", "\" style=\"display:none;background-color: #f9fbff\"><td class=\"text-left head_view\" colspan=\"11\">", "province", ".node_tr[node='", "#asia_slow", "{logo|}", "attr", "val", "x_y", ".ip_address", "round", "transform", "530,140", "input[name='dns_server_type']:checked", "toBlob", "css", "setOption", "confirm", "#333", "keyup", "return (function() ", "点击开始后，不要操作鼠标，保持当前页面获焦状态！<br><div class=\"mt-2 text-muted\">1、Firefox 需手动开启复制图片功能 > <a class=\"text-primary\" target=\"view_open_blank\" href=\"/article/content-278.html\">查看教程</a><br>2、少数浏览器不支持复制图片，请选择下载图片</div>", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 浙江杭州：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 浙江宁波：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 浙江温州：0.3s</p>", "6wEHzgc", ".filter_ip", "value", "10Bvlrob", "#huanan_slow", "removeClass", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 辽宁大连：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 辽宁沈阳：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 辽宁鞍山：0.3s</p>", ".hover-button", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 内蒙古包头：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 内蒙古赤峰：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 内蒙古乌海：0.3s</p>", "#huadong_slow", "<p style=\"line-height: 10px; padding: 0 10px;\">南海诸岛：0.1s</p>", "display", "after", ";\" aria-valuenow=\"", "center", "340,220", "#north_slow", "<i class=\"feather icon-play\"></i> 开始复制截图", "#global_fast", "getElementById", "436,404", "close", "#africa_avg", "#real_ip_", ".address-hidden", "#north_avg", "#slow_check", "dns_time", "remove", "内蒙古", "toFixed", "3760116kzwBSg", "适合网站并发性能较差的场景使用", "animate", "</p>\n                        <p  style=\"line-height: 20px; padding: 0 10px;\">最快响应：", "title", "emphasis", "mouseover", ".ip_list", "table", ".icon-chevrons-down", "post", "#ipv4_num", "mosaic", "indexOf", "#china_fast", "<font color=#e61610>解析失败</font>", "</p>", "225,227", "399,451", "unset", "test", "substring", "error", "show", "427,333", "#cookies", "#huabei_avg", "#bbb", "/tcping/", "input[name='filter_line']", "china", "%</span></li></a>", ".show_record", "#dns_time_", "<p style=\"line-height: 10px; padding: 0 10px;\">", "349,433", "tr.node_tr", "info", ".show_head_button", "57492DQOjTZ", ".gg_link", "_blank", "bind", "then", "<=0.5s", "pointer-events", "<li>请输入检测目标（域名、IPv4、URL）</li>", "#42dd3f", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 四川成都：0.1s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 四川绵阳：0.2s</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 四川南充：0.3s</p>", "path://M566.125714 0L256 535.405714h226.084571l-103.350857 435.931429 352.109715-575.926857H472.429714L566.052571 0z", "line", "max-width", "top", "#cm_slow", "/http/", "method", ":hidden", "<div class=\"p-4\" style=\"background-color: #ecf0f5;\"> <div class=\"text-center\"> <div style=\"border: 1px dashed #4680ff;padding: 10px 0;height: 75px;display: flex;\"><i class=\"fas fa-chess-board\" style=\"font-size: 46px;padding: 3px 10px;color: #7c9eff;width: 70px;height: 70px;\"></i> <div><div><i class=\"fas fa-info-circle\" style=\"font-size:15px;\"></i>  哪些地方需要打码? (可选)</div> <div class=\"text-center mt-2\" style=\"display: inline-flex;\"><label class=\"custom-control custom-checkbox done-task\"> <input type=\"checkbox\" name=\"mosaic\" value=\"ip\" class=\"custom-control-input\"> <span class=\"custom-control-label text-secondary\" style=\" \"> 域名或IP</span> </label> <label class=\"ml-3 custom-control custom-checkbox done-task\"> <input type=\"checkbox\" name=\"mosaic\" value=\"address\" class=\"custom-control-input\"> <span class=\"custom-control-label text-secondary\"> 地理位置</span> </label> </div></div></div> <div class=\"mt-3\" style=\"display: inline-flex;\"><button class=\"btn btn-primary btn-sm\" onclick=\"mosaic();layer.closeAll();down_screenshot('", "#redirect_", "saveAs", "<li>{高级选项>指定解析} 的内容不能大于200字符</li>"];
  _0x1adb = function () {
    return _0x6fa6f;
  };
  return _0x1adb();
}
function ping_button(_0x3fefba, _0x3ccf4e) {
  var _0x39039a = _0x5327af,
    _0x2e8cd7 = $(_0x39039a(552) + _0x3fefba)[_0x39039a(640)]();
  _0x3ccf4e == "many" ? check_post_blank(_0x39039a(761) + _0x2e8cd7, {
    mode: "many",
    button_click: _0x39039a(674)
  }) : check_post_blank(_0x39039a(761) + _0x2e8cd7, {
    button_click: _0x39039a(674)
  });
}
function tcping_button(_0x558006, _0x2467c0) {
  var _0x35af78 = _0x5327af,
    _0x6fa6e5 = $(_0x35af78(552) + _0x558006).text();
  _0x2467c0 == _0x35af78(711) ? check_post_blank(_0x35af78(588) + _0x6fa6e5 + ":" + port, {
    mode: _0x35af78(711),
    button_click: "yes"
  }) : check_post_blank(_0x35af78(588) + _0x6fa6e5 + ":" + port, {
    button_click: "yes"
  });
}
function tracert_button(_0x44ba73) {
  var _0x4b159e = _0x5327af,
    _0x58c751 = $(_0x4b159e(552) + _0x44ba73).text();
  check_post_blank(_0x4b159e(650) + _0x58c751, {
    node: _0x44ba73
  });
}
function http_button(_0x4b8c63) {
  var _0x23e25e = _0x5327af,
    _0x5c0941 = $(_0x23e25e(552) + _0x4b8c63)[_0x23e25e(640)]();
  check_post_blank(_0x23e25e(614), {
    host: _0x5c0941 + ":" + port
  });
}
function feedback_button(_0x5b369b) {
  var _0x521d0f = _0x5327af,
    _0x271ed5 = $("#real_ip_" + _0x5b369b)[_0x521d0f(640)]();
  check_post_blank("/feedback.php", {
    ip: _0x271ed5
  });
}
function check_form(_0x21423c) {
  var _0xa4c8d0 = _0x5327af;
  if (_0x21423c == _0xa4c8d0(651)) {
    var _0x3f74c2 = _0xa4c8d0(651);
  } else {
    var _0x3f74c2 = _0xa4c8d0(735);
  }
  var _0x1a4bee = $("#host")[_0xa4c8d0(513)]().trim(),
    _0x59f6a9 = _0x1a4bee;
  _0x59f6a9 = _0x59f6a9[_0xa4c8d0(747)]("/");
  _0x59f6a9[2] ? _0x59f6a9 = _0x59f6a9[2] : (_0x59f6a9 = _0x1a4bee[_0xa4c8d0(689)](/\//g, ""), _0x59f6a9 = _0x59f6a9[_0xa4c8d0(689)](/。/g, "."), _0x59f6a9 = _0x59f6a9[_0xa4c8d0(689)](/\\/g, ""), _0x59f6a9 = _0x59f6a9[_0xa4c8d0(689)](/：/g, ":"));
  var _0x5b462f = check_line(),
    _0x57ec4b = $(_0xa4c8d0(645))[_0xa4c8d0(513)](),
    _0x1b8397 = $(_0xa4c8d0(756))[_0xa4c8d0(513)](),
    _0x11d052 = $("#referer")[_0xa4c8d0(513)](),
    _0x33896b = $("#ua").val(),
    _0x53ca7d = $(_0xa4c8d0(585))[_0xa4c8d0(513)](),
    _0x3c016f = $(_0xa4c8d0(626))[_0xa4c8d0(513)]();
  if (_0x57ec4b[_0xa4c8d0(758)] > 200) {
    err_tip_more(_0xa4c8d0(620));
    return false;
  }
  if (_0x11d052.length > 200) {
    err_tip_more("<li>{高级选项>referer} 的内容不能大于200字符</li>");
    return false;
  }
  if (_0x33896b[_0xa4c8d0(758)] > 200) {
    err_tip_more(_0xa4c8d0(472));
    return false;
  }
  if (_0x53ca7d[_0xa4c8d0(758)] > 200) {
    err_tip_more("<li>{高级选项>cookie} 的内容不能大于200字符</li>");
    return false;
  }
  if (parseInt(_0x3c016f) < 0 || parseInt(_0x3c016f) > 10) {
    err_tip_more("<li>{高级选项>重定向} 的值应是：0~10</li>");
    return false;
  }
  var _0x2680c8 = $(_0xa4c8d0(519))[_0xa4c8d0(513)](),
    _0x3ca22d = $(_0xa4c8d0(742))[_0xa4c8d0(513)]();
  if (_0x2680c8 == "custom" && isipv4(_0x3ca22d) == false) {
    err_tip_more(_0xa4c8d0(663));
    return false;
  }
  if ($(_0xa4c8d0(648)).val() == "") {
    err_tip_more(_0xa4c8d0(606));
    return false;
  }
  $(".advanced").hide();
  $(_0xa4c8d0(569))[_0xa4c8d0(521)](_0xa4c8d0(517), "unset");
  check_post(_0xa4c8d0(614), {
    line: _0x5b462f,
    host: _0x1a4bee,
    host_s: _0x59f6a9,
    check_mode: _0x3f74c2,
    ipv4: _0x57ec4b,
    method: _0x1b8397,
    referer: _0x11d052,
    ua: _0x33896b,
    cookies: _0x53ca7d,
    redirect_num: _0x3c016f,
    dns_server_type: _0x2680c8,
    dns_server: _0x3ca22d
  });
}
function down_screenshot(_0x5a09a0) {
  ad_hide();
  setTimeout(function () {
    var _0x1c359b = _0x37ae;
    $(_0x1c359b(687))[_0x1c359b(667)](_0x1c359b(649));
    $(_0x1c359b(687)).attr("disabled", true);
    domtoimage[_0x1c359b(520)](document[_0x1c359b(548)]("screenshots")).then(function (_0x131361) {
      var _0x51a43f = _0x1c359b;
      window[_0x51a43f(619)](_0x131361, _0x5a09a0 + _0x51a43f(664));
      unmosaic();
      $(_0x51a43f(687)).html(_0x51a43f(661));
      $("#takeScreenshot")[_0x51a43f(512)](_0x51a43f(713), false);
    });
  }, 10);
}
function copy_screenshot_tip() {
  var _0x354cd3 = _0x5327af;
  layer[_0x354cd3(523)](_0x354cd3(527), {
    title: "",
    anim: -1,
    isOutAnim: false,
    btnAlign: "c",
    btn: [_0x354cd3(546)],
    yes: function () {
      var _0x218764 = _0x354cd3;
      $(_0x218764(724))[_0x218764(640)](_0x218764(486));
      $(".layui-layer-btn0")[_0x218764(512)]("disabled", true);
      $(_0x218764(724)).css(_0x218764(605), _0x218764(706));
      $(_0x218764(724))[_0x218764(521)](_0x218764(492), _0x218764(587));
      $(_0x218764(724))[_0x218764(521)](_0x218764(638), _0x218764(587));
      copy_screenshot();
    },
    cancel: function () {
      unmosaic();
    }
  });
}
function copy_screenshot() {
  ad_hide();
  setTimeout(function () {
    var _0x1f4872 = _0x37ae;
    $("#takeScreenshot")[_0x1f4872(667)](_0x1f4872(649));
    $(_0x1f4872(687))[_0x1f4872(512)](_0x1f4872(713), true);
    var _0xd9cc8f = document.getElementById(_0x1f4872(427));
    domtoimage[_0x1f4872(773)](_0xd9cc8f)[_0x1f4872(603)](function (_0x2441ec) {
      get_img(_0x2441ec.replace(/data:image\/png;base64,/g, ""));
    }).catch(function (_0xf15adf) {
      var _0x1e2f71 = _0x1f4872;
      console.error(_0x1e2f71(435), _0xf15adf);
    });
  }, 10);
}
function get_img(_0x37299e) {
  var _0x36228c = _0x5327af;
  try {
    var _0x37299e = _0x37299e;
    const _0x376c07 = convertBase64ToBlob(_0x37299e, "image/png"),
      _0x3ba317 = new ClipboardItem({
        "image/png": _0x376c07
      });
    navigator[_0x36228c(461)].write([_0x3ba317]);
    $(_0x36228c(687))[_0x36228c(667)](_0x36228c(661));
    $(_0x36228c(687))[_0x36228c(512)](_0x36228c(713), false);
    layer.msg(_0x36228c(770));
    unmosaic();
  } catch (_0x5b74e4) {
    console[_0x36228c(754)](_0x5b74e4);
  }
}
function convertBase64ToBlob(_0x286da8, _0x1dc4ea) {
  var _0x5d3465 = _0x5327af,
    _0x29b516 = window[_0x5d3465(481)](_0x286da8),
    _0x3c280c = new ArrayBuffer(_0x29b516[_0x5d3465(758)]),
    _0x5e6cb5 = new Uint8Array(_0x3c280c);
  for (var _0x2e5905 = 0; _0x2e5905 < _0x29b516.length; _0x2e5905++) {
    _0x5e6cb5[_0x2e5905] = _0x29b516[_0x5d3465(421)](_0x2e5905);
  }
  return new Blob([_0x3c280c], {
    type: _0x1dc4ea
  });
}
function ad_hide() {
  var _0x193d60 = _0x5327af;
  $(_0x193d60(600))[_0x193d60(557)]();
  $(_0x193d60(553)).css(_0x193d60(611), _0x193d60(426));
  $(_0x193d60(536))[_0x193d60(749)](_0x193d60(628));
}
function mosaic() {
  var _0x506eb2 = _0x5327af;
  $(_0x506eb2(432)).each(function (_0xff1dc3, _0x2f2de0) {
    var _0x496669 = _0x506eb2;
    if ($(this)[_0x496669(513)]() == "ip") {
      $(_0x496669(675))[_0x496669(749)](_0x496669(572));
      close_ip_list();
    } else {
      $(this)[_0x496669(513)]() == _0x496669(660) && $(_0x496669(515))[_0x496669(749)](_0x496669(572));
    }
  });
}
function unmosaic() {
  var _0x4872a0 = _0x5327af;
  $(_0x4872a0(675))[_0x4872a0(534)](_0x4872a0(572));
  $(_0x4872a0(515))[_0x4872a0(534)]("mosaic");
  $(".hover-button")[_0x4872a0(534)](_0x4872a0(628));
}
function select_screenshot(_0x55fb19) {
  var _0x29fab1 = _0x5327af;
  layer[_0x29fab1(633)]({
    type: 1,
    anim: -1,
    title: "",
    isOutAnim: false,
    closeBtn: 2,
    area: _0x29fab1(430),
    content: _0x29fab1(617) + _0x55fb19 + _0x29fab1(501)
  });
}
function isip(_0x3878aa) {
  var _0x232ceb = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return _0x232ceb.test(_0x3878aa);
}
function _0x37ae(_0x378c42, _0x4a7ef9) {
  var _0x3b4716 = _0x1adb();
  _0x37ae = function (_0x5303b5, _0x29c585) {
    _0x5303b5 = _0x5303b5 - 419;
    var _0x75e506 = _0x3b4716[_0x5303b5];
    return _0x75e506;
  };
  return _0x37ae(_0x378c42, _0x4a7ef9);
}
$(_0x5327af(687)).click(function () {
  var _0x4d4976 = _0x5327af;
  $(_0x4d4976(445))[_0x4d4976(504)]();
  $(".icon-chevrons-down")[_0x4d4976(521)](_0x4d4976(517), _0x4d4976(579));
});
$(function () {
  var _0x40134c = _0x5327af,
    _0x1efb45;
  $(_0x40134c(555)).mouseover(function () {
    var _0x52a8e5 = _0x40134c;
    _0x1efb45 = layer[_0x52a8e5(456)](_0x52a8e5(561), _0x52a8e5(555), {
      tips: [1, _0x52a8e5(744)],
      time: 0,
      anim: -1,
      tipsMore: true,
      isOutAnim: false
    });
  });
  $(_0x40134c(555))[_0x40134c(629)](function () {
    layer.close(_0x1efb45);
  });
  var _0x39a22c;
  $(_0x40134c(687))[_0x40134c(566)](function () {
    var _0xc2a890 = _0x40134c;
    _0x39a22c = layer.tips(_0xc2a890(639), _0xc2a890(687), {
      tips: [1, "#6c757d"],
      time: 0,
      anim: -1,
      tipsMore: true,
      isOutAnim: false
    });
  });
  $(_0x40134c(687))[_0x40134c(629)](function () {
    var _0x110867 = _0x40134c;
    layer[_0x110867(550)](_0x39a22c);
  });
  $(_0x40134c(648))[_0x40134c(602)](_0x40134c(525), function (_0x1ed854) {
    var _0x2441a2 = _0x40134c;
    _0x1ed854[_0x2441a2(646)] == "13" && check_form(default_enter);
  });
});
function isipv4(_0x5d74b0) {
  var _0x16fb59 = _0x5327af,
    _0x554f69 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return _0x554f69[_0x16fb59(580)](_0x5d74b0);
}