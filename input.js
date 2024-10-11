
function create_websocket(_0x4ca605, _0x38c528, _0x31117a) {
  if ("WebSocket" in window) {
    ws = new WebSocket(_0x4ca605);
    ws.onerror = function () {
      clearInterval(for_task);
      if (error_num < 1) {
        error_num++;
        setTimeout(() => {
          create_websocket(_0x4ca605, _0x38c528, _0x31117a);
        }, 2000);
        return false;
      } else {
        $.get("/public/ajax.php?type=error_feedback&task_id=" + _0x38c528);
        err_tip("WebSocket服务器连接失败，请重试 !");
        return false;
      }
    };
    ws.onopen = function () {
      ws.send("{\"task_id\":\"" + _0x38c528 + "\",\"task_token\":\"" + md5(_0x38c528 + "token_20230313000136kwyktxb0tgspm00yo5", 16) + "\"}");
    };
    ws.onmessage = function (_0x279427) {
      var _0x3adf76 = JSON.parse(_0x279427.data);
      if (_0x3adf76.type == "finished") {
        clearInterval(for_task);
      }
      if (_0x31117a == "once") {
        if (_0x3adf76.type == "node_error") {
          $("#real_ip_" + _0x3adf76.node_id).html("<i class=\"fas fa-minus-circle text-danger\"></i> 监测点异常");
          complete_node_num = complete_node_num + 1;
          if (complete_node_num > check_node_num) {
            return false;
          }
          complete_node_num == check_node_num && $(".checking").hide();
          var _0x25f8a6 = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width:" + GetPercent(complete_node_num, check_node_num) + ";\" aria-valuenow=\"" + complete_node_num + "\" aria-valuemin=\"0\" aria-valuemax=\"" + check_node_num + "\">" + GetPercent(complete_node_num, check_node_num) + "</div>";
          $("#complete_progress").html(_0x25f8a6);
          return false;
        }
        tcping_once(_0x3adf76);
      } else {
        if (_0x3adf76.type == "node_error") {
          return false;
        }
        tcping_many(_0x3adf76.ip, host_port, _0x3adf76.address, _0x3adf76.node_id, _0x3adf76.result);
      }
    };
    ws.onclose = function () {};
    if (_0x31117a == "many") {
      for_task = setInterval(function () {
        ws.send("{\"task_id\":\"" + _0x38c528 + "\",\"task_token\":\"" + md5(_0x38c528 + "token_20230313000136kwyktxb0tgspm00yo5", 16) + "\"}");
      }, 1000);
    }
  } else {
    err_tip("您的浏览器不支持WebSocket !");
  }
}
var _0x2cee48 = _0x20b9;
(function (_0x41a616, _0x5f12e8) {
  var _0x415c67 = _0x20b9,
    _0x5f2366 = _0x41a616();
  while (true) {
    try {
      var _0x518f39 = -parseInt(_0x415c67(504)) / 1 + parseInt(_0x415c67(368)) / 2 * (-parseInt(_0x415c67(545)) / 3) + -parseInt(_0x415c67(259)) / 4 + parseInt(_0x415c67(388)) / 5 + -parseInt(_0x415c67(269)) / 6 * (-parseInt(_0x415c67(586)) / 7) + -parseInt(_0x415c67(385)) / 8 * (parseInt(_0x415c67(538)) / 9) + -parseInt(_0x415c67(502)) / 10 * (-parseInt(_0x415c67(426)) / 11);
      if (_0x518f39 === _0x5f12e8) {
        break;
      } else {
        _0x5f2366.push(_0x5f2366.shift());
      }
    } catch (_0x2c87ad) {
      _0x5f2366.push(_0x5f2366.shift());
    }
  }
})(_0xbb85, 309783);
var _0x30b782 = function () {
    var _0x55c3e8 = true;
    return function (_0x4ef51e, _0x3f4e4c) {
      var _0x349a93 = _0x55c3e8 ? function () {
        if (_0x3f4e4c) {
          var _0x1cd086 = _0x3f4e4c.apply(_0x4ef51e, arguments);
          _0x3f4e4c = null;
          return _0x1cd086;
        }
      } : function () {};
      _0x55c3e8 = false;
      return _0x349a93;
    };
  }(),
  _0x1b4d8e = _0x30b782(this, function () {
    var _0x2e313b = _0x20b9;
    return _0x1b4d8e[_0x2e313b(325)]().search(_0x2e313b(520))[_0x2e313b(325)]().constructor(_0x1b4d8e)[_0x2e313b(542)](_0x2e313b(520));
  });
_0x1b4d8e();
var _0x11ac9e = function () {
    var _0x45f77d = true;
    return function (_0x56d9a3, _0x5661e4) {
      var _0x1a21b9 = _0x45f77d ? function () {
        if (_0x5661e4) {
          var _0x3cf03b = _0x5661e4.apply(_0x56d9a3, arguments);
          _0x5661e4 = null;
          return _0x3cf03b;
        }
      } : function () {};
      _0x45f77d = false;
      return _0x1a21b9;
    };
  }(),
  _0x28919f = _0x11ac9e(this, function () {
    var _0x17450b = _0x20b9,
      _0x1eff65;
    try {
      var _0x11909b = Function(_0x17450b(526) + "{}.constructor(\"return this\")( )" + ");");
      _0x1eff65 = _0x11909b();
    } catch (_0x441591) {
      _0x1eff65 = window;
    }
    _0x1eff65[_0x17450b(343)] = _0x1eff65[_0x17450b(343)] || {};
    var _0x489766 = _0x1eff65[_0x17450b(343)],
      _0xe219b7 = [_0x17450b(506), _0x17450b(321), _0x17450b(578), _0x17450b(299), _0x17450b(554), "table", _0x17450b(360)];
    for (var _0x4971f7 = 0; _0x4971f7 < _0xe219b7.length; _0x4971f7++) {
      var _0x667c26 = _0x11ac9e[_0x17450b(400)][_0x17450b(382)][_0x17450b(536)](_0x11ac9e),
        _0x54ec43 = _0xe219b7[_0x4971f7],
        _0x13f814 = _0x489766[_0x54ec43] || _0x667c26;
      _0x667c26.__proto__ = _0x11ac9e[_0x17450b(536)](_0x11ac9e);
      _0x667c26[_0x17450b(325)] = _0x13f814.toString[_0x17450b(536)](_0x13f814);
      _0x489766[_0x54ec43] = _0x667c26;
    }
  });
_0x28919f();
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
  china_fastping = 9999,
  china_slow = 0,
  china_allping = 0,
  ct_fast = 9999,
  ct_slow = 0,
  ct_allping = 0,
  cu_fast = 9999,
  cu_slow = 0,
  cu_allping = 0,
  cm_fast = 9999,
  cm_slow = 0,
  cm_allping = 0,
  huadong_fast = 9999,
  huadong_slow = 0,
  huadong_allping = 0,
  huanan_fast = 9999,
  huanan_slow = 0,
  huanan_allping = 0,
  huazhong_fast = 9999,
  huazhong_slow = 0,
  huazhong_allping = 0,
  huabei_fast = 9999,
  huabei_slow = 0,
  huabei_allping = 0,
  xinan_fast = 9999,
  xinan_slow = 0,
  xinan_allping = 0,
  xibei_fast = 9999,
  xibei_slow = 0,
  xibei_allping = 0,
  dongbei_fast = 9999,
  dongbei_slow = 0,
  dongbei_allping = 0,
  gangaotai_fast = 9999,
  gangaotai_slow = 0,
  gangaotai_allping = 0,
  global_fast = 9999,
  global_slow = 0,
  global_allping = 0,
  asia_fast = 9999,
  asia_slow = 0,
  asia_allping = 0,
  europe_fast = 9999,
  europe_slow = 0,
  europe_allping = 0,
  north_fast = 9999,
  north_slow = 0,
  north_allping = 0,
  south_fast = 9999,
  south_slow = 0,
  south_allping = 0,
  africa_fast = 9999,
  africa_slow = 0,
  africa_allping = 0,
  oceania_fast = 9999,
  oceania_slow = 0,
  oceania_allping = 0;
function echarts_block() {
  var _0x4dd5a8 = _0x2cee48;
  marker_list = [];
  china_fast = new Array();
  china_data = new Array();
  for (var _0x19efd5 = 0; _0x19efd5 < 34; _0x19efd5++) {
    china_fast[_0x19efd5] = 9999;
    china_data[_0x19efd5] = "";
  }
  splitList = [{
    start: 0,
    end: 50,
    label: _0x4dd5a8(374),
    color: _0x4dd5a8(438)
  }, {
    start: 51,
    end: 100,
    label: _0x4dd5a8(335),
    color: _0x4dd5a8(525)
  }, {
    start: 101,
    end: 200,
    label: "101ms-200ms",
    color: _0x4dd5a8(383)
  }, {
    start: 201,
    end: 250,
    label: _0x4dd5a8(564),
    color: _0x4dd5a8(467)
  }, {
    start: 251,
    end: 3000,
    label: _0x4dd5a8(485),
    color: _0x4dd5a8(580)
  }, {
    start: 3001,
    end: 99999,
    label: "超时",
    color: _0x4dd5a8(479)
  }];
  option = {
    title: [{
      text: "",
      top: _0x4dd5a8(521),
      left: _0x4dd5a8(378),
      x: _0x4dd5a8(451),
      subtext: _0x4dd5a8(430),
      subtextStyle: {
        fontSize: 12,
        color: "#333",
        rich: {
          logo: {
            fontSize: 20,
            fontWeight: 700,
            color: _0x4dd5a8(317),
            backgroundColor: {
              image: "../frame/images/logo.png"
            }
          }
        }
      }
    }],
    tooltip: {
      trigger: _0x4dd5a8(487),
      formatter: function (_0x1506bc) {
        var _0x5af92c = _0x4dd5a8;
        if (isNaN(_0x1506bc[_0x5af92c(381)])) {
          return _0x5af92c(532) + _0x1506bc.name + _0x5af92c(480);
        }
        if (_0x1506bc.value == 0) {
          province_value = "<1ms";
        } else {
          _0x1506bc[_0x5af92c(381)] > 3000 ? province_value = "<font color=#e61610>超时</font>" : province_value = _0x1506bc[_0x5af92c(381)] + "ms";
        }
        return "\n                    <div>\n                        <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">" + _0x1506bc.name + _0x5af92c(405) + province_value + _0x5af92c(592) + _0x1506bc[_0x5af92c(376)][_0x5af92c(558)] + _0x5af92c(529);
      }
    },
    visualMap: {
      top: _0x4dd5a8(457),
      show: true,
      min: 0,
      max: 99999,
      x: "5%",
      y: _0x4dd5a8(363),
      hoverLink: false,
      splitList: splitList,
      outOfRange: {
        color: _0x4dd5a8(318)
      }
    },
    series: [{
      z: 1,
      name: "",
      type: "map",
      mapType: _0x4dd5a8(416),
      backgroundColor: "#ccc",
      mapLocation: {
        x: "center",
        y: _0x4dd5a8(411)
      },
      emphasis: {
        show: true,
        textStyle: {
          color: _0x4dd5a8(498)
        }
      },
      top: "60px",
      hoverable: false,
      roam: false,
      width: _0x4dd5a8(515),
      itemStyle: {
        normal: {
          label: {
            show: false,
            textStyle: {
              color: _0x4dd5a8(534)
            }
          },
          areaStyle: {
            color: _0x4dd5a8(469)
          },
          borderColor: _0x4dd5a8(327),
          borderWidth: 1,
          shadowColor: _0x4dd5a8(327)
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
      name: "异常标记",
      type: "effectScatter",
      coordinateSystem: _0x4dd5a8(499),
      showEffectOn: "emphasis",
      animation: false,
      symbol: "path://M566.125714 0L256 535.405714h226.084571l-103.350857 435.931429 352.109715-575.926857H472.429714L566.052571 0z",
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
        color: "#ff0000"
      },
      show: false
    }],
    geo: {}
  };
  china_map = echarts[_0x4dd5a8(563)](document[_0x4dd5a8(256)](_0x4dd5a8(596)));
  china_map.on(_0x4dd5a8(272), function (_0x6867f1) {
    var _0x1c5138 = _0x4dd5a8;
    if (_0x6867f1[_0x1c5138(464)] == "") {
      return false;
    }
    $("input[name='filter_line']")[_0x1c5138(331)](_0x1c5138(439), false);
    $(".filter_ip").text(_0x6867f1[_0x1c5138(464)]);
    $(_0x1c5138(307))[_0x1c5138(312)]();
    filter_map_count = 0;
    $(".node_tr")[_0x1c5138(511)](function () {
      var _0x14c616 = _0x1c5138;
      $(this)[_0x14c616(403)](_0x14c616(290))[_0x14c616(472)]()[_0x14c616(447)](_0x6867f1.name) != -1 ? (filter_map_count++, $(this)[_0x14c616(312)]()) : $(this)[_0x14c616(590)]();
    });
    $(".show_record")[_0x1c5138(472)](filter_map_count);
    $(_0x1c5138(295))[_0x1c5138(334)]({
      scrollTop: $(_0x1c5138(524))[_0x1c5138(573)]()[_0x1c5138(411)]
    }, 300);
  });
  china_map[_0x4dd5a8(393)](option);
  china_map[_0x4dd5a8(574)]();
}
var marker_arr = [{
  name: "北京",
  x_y: _0x2cee48(444),
  show: false
}, {
  name: "天津",
  x_y: _0x2cee48(370),
  show: false
}, {
  name: "上海",
  x_y: _0x2cee48(275),
  show: false
}, {
  name: "重庆",
  x_y: _0x2cee48(513),
  show: false
}, {
  name: "河北",
  x_y: "410,250",
  show: false
}, {
  name: "河南",
  x_y: _0x2cee48(281),
  show: false
}, {
  name: "云南",
  x_y: _0x2cee48(455),
  show: false
}, {
  name: "辽宁",
  x_y: _0x2cee48(527),
  show: false
}, {
  name: "黑龙江",
  x_y: _0x2cee48(465),
  show: false
}, {
  name: "湖南",
  x_y: _0x2cee48(288),
  show: false
}, {
  name: "安徽",
  x_y: "427,333",
  show: false
}, {
  name: "山东",
  x_y: _0x2cee48(544),
  show: false
}, {
  name: "新疆",
  x_y: _0x2cee48(342),
  show: false
}, {
  name: "江苏",
  x_y: "453,315",
  show: false
}, {
  name: "浙江",
  x_y: "457,365",
  show: false
}, {
  name: "江西",
  x_y: _0x2cee48(471),
  show: false
}, {
  name: "湖北",
  x_y: _0x2cee48(556),
  show: false
}, {
  name: "广西",
  x_y: _0x2cee48(298),
  show: false
}, {
  name: "甘肃",
  x_y: "225,227",
  show: false
}, {
  name: "山西",
  x_y: _0x2cee48(468),
  show: false
}, {
  name: _0x2cee48(292),
  x_y: "340,220",
  show: false
}, {
  name: "陕西",
  x_y: _0x2cee48(552),
  show: false
}, {
  name: "吉林",
  x_y: _0x2cee48(565),
  show: false
}, {
  name: "福建",
  x_y: _0x2cee48(396),
  show: false
}, {
  name: "贵州",
  x_y: "329,396",
  show: false
}, {
  name: "广东",
  x_y: _0x2cee48(402),
  show: false
}, {
  name: "青海",
  x_y: "222,283",
  show: false
}, {
  name: "西藏",
  x_y: "148,338",
  show: false
}, {
  name: "四川",
  x_y: _0x2cee48(496),
  show: false
}, {
  name: "宁夏",
  x_y: _0x2cee48(401),
  show: false
}, {
  name: "海南",
  x_y: _0x2cee48(459),
  show: false
}, {
  name: "台湾",
  x_y: _0x2cee48(557),
  show: false
}, {
  name: "香港",
  x_y: _0x2cee48(357),
  show: false
}, {
  name: "澳门",
  x_y: "0,0",
  show: false
}, {
  name: "南海诸岛",
  x_y: _0x2cee48(482),
  show: false
}];
function refreshData() {
  var _0x6f9a16 = _0x2cee48;
  marker_list = marker_arr.filter(function (_0x1e54cc) {
    var _0x4caa74 = _0x20b9;
    return _0x1e54cc[_0x4caa74(312)] === true;
  }).filter(function (_0x9e6851) {
    var _0x2bdeda = _0x20b9,
      _0x42a44f = mydata[_0x2bdeda(436)](_0x2241c7 => _0x2241c7[_0x2bdeda(464)] == _0x9e6851[_0x2bdeda(464)]);
    return _0x42a44f[_0x2bdeda(381)] !== 5000;
  }).map(function (_0x323530) {
    var _0x5559a2 = _0x20b9,
      [_0x47a4b1, _0x4a3536] = _0x323530[_0x5559a2(449)][_0x5559a2(486)](",").map(Number),
      _0x48d9f6 = "#fff";
    return {
      value: [_0x47a4b1, _0x4a3536, _0x48d9f6]
    };
  });
  option[_0x6f9a16(441)][0][_0x6f9a16(376)] = mydata;
  marker_switch && (option.series[1][_0x6f9a16(376)] = marker_list);
  china_map[_0x6f9a16(393)](option);
}
function str_num(_0x3ec09c, _0x3cc382) {
  var _0x5db2bf = _0x2cee48;
  return _0x3ec09c[_0x5db2bf(486)](_0x3cc382)[_0x5db2bf(282)] - 1;
}
function left(_0x5a16af, _0x4c1cfc) {
  var _0x119f7e = _0x2cee48;
  return _0x4c1cfc > 0 ? _0x5a16af[_0x119f7e(330)](0, _0x4c1cfc) : null;
}
function right(_0x18630e, _0x9a2dc4) {
  var _0x5ace5f = _0x2cee48;
  return _0x18630e[_0x5ace5f(282)] - _0x9a2dc4 >= 0 && _0x18630e[_0x5ace5f(282)] >= 0 && _0x18630e[_0x5ace5f(282)] - _0x9a2dc4 <= _0x18630e[_0x5ace5f(282)] ? _0x18630e[_0x5ace5f(330)](_0x18630e.length - _0x9a2dc4, _0x18630e[_0x5ace5f(282)]) : null;
}
function tcping_many(_0x3b0df1, _0x876c, _0x26bf17, _0x54737e, _0x3cff00) {
  var _0x6256bc = _0x2cee48;
  if ($(_0x6256bc(412) + _0x54737e)[_0x6256bc(472)]() == "--") {
    if (_0x3b0df1 != _0x6256bc(429)) {
      $(_0x6256bc(492) + _0x54737e)[_0x6256bc(472)](_0x3b0df1 + ":" + _0x876c);
      $(_0x6256bc(412) + _0x54737e)[_0x6256bc(472)](_0x26bf17);
      $(_0x6256bc(412) + _0x54737e).attr("title", _0x26bf17);
      $(_0x6256bc(475) + _0x54737e).attr("style", "");
    } else {
      $("#real_ip_" + _0x54737e)[_0x6256bc(442)](_0x6256bc(349));
      return false;
    }
  }
  var _0x2b5751 = parseInt($(_0x6256bc(494) + _0x54737e + "]").attr("send_num")),
    _0x3cff00 = parseInt(_0x3cff00);
  _0x2b5751 = _0x2b5751 + 1;
  $(_0x6256bc(494) + _0x54737e + "]").attr(_0x6256bc(510), _0x2b5751);
  $("#send_" + _0x54737e)[_0x6256bc(472)](_0x2b5751);
  _0x3cff00 != -1 && $(_0x6256bc(494) + _0x54737e + "]")[_0x6256bc(509)](_0x6256bc(355), parseInt($(_0x6256bc(494) + _0x54737e + "]").attr(_0x6256bc(355))) + _0x3cff00);
  var _0x11bdd4 = parseInt($(_0x6256bc(494) + _0x54737e + "]")[_0x6256bc(509)](_0x6256bc(355)));
  _0x3cff00 == "-1" && $(".node_tr[node=" + _0x54737e + "]")[_0x6256bc(509)](_0x6256bc(568), parseInt($(_0x6256bc(494) + _0x54737e + "]")[_0x6256bc(509)](_0x6256bc(568))) + 1);
  var _0x159c26 = parseInt($(_0x6256bc(494) + _0x54737e + "]")[_0x6256bc(509)](_0x6256bc(568)));
  if (_0x2b5751 == "1" && _0x3cff00 != "-1") {
    $(_0x6256bc(407) + _0x54737e)[_0x6256bc(472)]("0%");
  } else {
    if (_0x2b5751 == "1" && _0x3cff00 == "-1") {
      $(_0x6256bc(407) + _0x54737e)[_0x6256bc(472)](_0x6256bc(336));
    } else {
      _0x159c26 == "0" ? $(_0x6256bc(407) + _0x54737e)[_0x6256bc(472)]("0%") : $(_0x6256bc(407) + _0x54737e)[_0x6256bc(472)](GetPercent(_0x159c26, _0x2b5751));
    }
  }
  if (_0x3cff00 == 0) {
    $("#last_ping_" + _0x54737e)[_0x6256bc(472)]("<1");
  } else {
    _0x3cff00 == -1 ? $(_0x6256bc(582) + _0x54737e)[_0x6256bc(442)](_0x6256bc(268)) : $(_0x6256bc(582) + _0x54737e)[_0x6256bc(472)](_0x3cff00);
  }
  if (_0x11bdd4 == "0") {
    _0x2b5751 != "1" && _0x3cff00 != -1 ? $("#avg_ping_" + _0x54737e)[_0x6256bc(472)]("<1") : $(_0x6256bc(258) + _0x54737e).text("--");
  } else {
    var _0x1d6da6 = parseInt(_0x11bdd4 / (_0x2b5751 - _0x159c26));
    _0x1d6da6 == 0 ? $("#avg_ping_" + _0x54737e)[_0x6256bc(472)]("<1") : $(_0x6256bc(258) + _0x54737e).text(_0x1d6da6);
  }
  _0x2b5751 == "1" || $(_0x6256bc(489) + _0x54737e).text() == "--" ? _0x3cff00 != "-1" ? _0x3cff00 == 0 ? $(_0x6256bc(489) + _0x54737e)[_0x6256bc(472)]("<1") : $(_0x6256bc(489) + _0x54737e)[_0x6256bc(472)](_0x3cff00) : $(_0x6256bc(489) + _0x54737e).text("--") : _0x3cff00 < parseInt($(_0x6256bc(489) + _0x54737e)[_0x6256bc(472)]()) && _0x3cff00 != "-1" && (_0x3cff00 == 0 ? $(_0x6256bc(489) + _0x54737e)[_0x6256bc(472)]("<1") : $(_0x6256bc(489) + _0x54737e)[_0x6256bc(472)](_0x3cff00));
  _0x2b5751 == "1" || $(_0x6256bc(284) + _0x54737e)[_0x6256bc(472)]() == "--" ? _0x3cff00 != "-1" ? _0x3cff00 == 0 ? $(_0x6256bc(284) + _0x54737e).text("<1") : $(_0x6256bc(284) + _0x54737e)[_0x6256bc(472)](_0x3cff00) : $(_0x6256bc(284) + _0x54737e).text("--") : _0x3cff00 > parseInt($("#worst_ping_" + _0x54737e)[_0x6256bc(472)]()) && (_0x3cff00 == 0 ? $(_0x6256bc(284) + _0x54737e)[_0x6256bc(472)]("<1") : $("#worst_ping_" + _0x54737e)[_0x6256bc(472)](_0x3cff00));
  update_canvas(_0x54737e, _0x2b5751, _0x3cff00);
}
function sortByDescNum(_0x7d3434, _0x257221) {
  var _0x2340db = _0x2cee48;
  _0x7d3434[_0x2340db(584)](function (_0x639f33, _0x271e56) {
    return _0x271e56[_0x257221] - _0x639f33[_0x257221];
  });
  return _0x7d3434;
}
function _0x20b9(_0x50b5e7, _0x25b806) {
  var _0x46608 = _0xbb85();
  _0x20b9 = function (_0x28919f, _0x11ac9e) {
    _0x28919f = _0x28919f - 252;
    var _0x1d0458 = _0x46608[_0x28919f];
    return _0x1d0458;
  };
  return _0x20b9(_0x50b5e7, _0x25b806);
}
function filter_ip(_0x132c95) {
  var _0x497ce5 = _0x2cee48;
  $(_0x497ce5(287))[_0x497ce5(472)](_0x132c95);
  $(_0x497ce5(307))[_0x497ce5(312)]();
  $(_0x497ce5(306))[_0x497ce5(331)]("checked", false);
  var _0x2fa761 = 0;
  $(_0x497ce5(347)).each(function () {
    var _0x4227a5 = _0x497ce5;
    $(_0x4227a5(492) + $(this)[_0x4227a5(509)](_0x4227a5(575)))[_0x4227a5(472)]() == _0x132c95 + ":" + host_port || $(_0x4227a5(492) + $(this)[_0x4227a5(509)](_0x4227a5(575))).text() == _0x132c95 ? (_0x2fa761++, $(this)[_0x4227a5(312)]()) : $(this).hide();
  });
  $(_0x497ce5(531)).text(_0x2fa761);
}
$(_0x2cee48(306)).click(function () {
  var _0xfe617c = _0x2cee48;
  $(".label_filter_ip")[_0xfe617c(590)]();
  var _0x21c2a3 = $(this)[_0xfe617c(303)](),
    _0x5645af = 0,
    _0x173872 = 0,
    _0x1a07e9 = 0,
    _0x4de9c5 = 0,
    _0x33c4bc = 0,
    _0x2bd2b2 = 0,
    _0x40f739 = 0;
  $(_0xfe617c(347))[_0xfe617c(511)](function () {
    var _0x56677e = _0xfe617c;
    _0x5645af++;
    if ($(this)[_0x56677e(509)]("node_type") == _0x21c2a3 || _0x21c2a3 == _0x56677e(473)) {
      $(this)[_0x56677e(312)]();
      if (_0x21c2a3 == "1") {
        _0x173872++;
      } else {
        if (_0x21c2a3 == "2") {
          _0x1a07e9++;
        } else {
          if (_0x21c2a3 == "3") {
            _0x4de9c5++;
          } else {
            if (_0x21c2a3 == "4") {
              _0x33c4bc++;
            } else {
              _0x21c2a3 == "5" && _0x2bd2b2++;
            }
          }
        }
      }
    } else {
      $(this).hide();
    }
    _0x21c2a3 == "6" && $(this).attr(_0x56677e(548)) == "true" && ($(this)[_0x56677e(312)](), _0x40f739++);
    if (_0x21c2a3 == _0x56677e(473)) {
      $(_0x56677e(531)).text(_0x5645af);
    } else {
      if (_0x21c2a3 == "1") {
        $(".show_record").text(_0x173872);
      } else {
        if (_0x21c2a3 == "2") {
          $(".show_record").text(_0x1a07e9);
        } else {
          if (_0x21c2a3 == "3") {
            $(".show_record")[_0x56677e(472)](_0x4de9c5);
          } else {
            if (_0x21c2a3 == "4") {
              $(_0x56677e(531))[_0x56677e(472)](_0x33c4bc);
            } else {
              if (_0x21c2a3 == "5") {
                $(_0x56677e(531))[_0x56677e(472)](_0x2bd2b2);
              } else {
                _0x21c2a3 == "6" && $(".show_record")[_0x56677e(472)](_0x40f739);
              }
            }
          }
        }
      }
    }
  });
});
function debounce(_0x3fbdbe, _0xae030f) {
  let _0x2be801;
  return function () {
    const _0x2540cc = this,
      _0x49f02a = arguments;
    clearTimeout(_0x2be801);
    _0x2be801 = setTimeout(function () {
      var _0x3a855f = _0x20b9;
      _0x3fbdbe[_0x3a855f(559)](_0x2540cc, _0x49f02a);
    }, _0xae030f);
  };
}
const refreshData_slow = debounce(function () {
  refreshData();
}, 0);
function tcping_once(_0x1f2dc1) {
  var _0xe80b26 = _0x2cee48,
    _0x57d8fc = _0x1f2dc1[_0xe80b26(581)];
  complete_node_num = complete_node_num + 1;
  if (complete_node_num > check_node_num) {
    return false;
  }
  complete_node_num == check_node_num && $(_0xe80b26(348))[_0xe80b26(590)]();
  var _0x324527 = _0xe80b26(535) + GetPercent(complete_node_num, check_node_num) + ";\" aria-valuenow=\"" + complete_node_num + _0xe80b26(570) + check_node_num + "\">" + GetPercent(complete_node_num, check_node_num) + _0xe80b26(387);
  $(_0xe80b26(351))[_0xe80b26(442)](_0x324527);
  if (isip(_0x1f2dc1.ip)) {
    $(_0xe80b26(492) + _0x57d8fc)[_0xe80b26(472)](_0x1f2dc1.ip + ":" + host_port);
    $(_0xe80b26(412) + _0x57d8fc).text(_0x1f2dc1.address);
    $(_0xe80b26(412) + _0x57d8fc)[_0xe80b26(509)](_0xe80b26(386), _0x1f2dc1.address);
    $(_0xe80b26(475) + _0x57d8fc)[_0xe80b26(509)]("style", "");
    ip = _0x1f2dc1.ip + ":" + host_port;
    var _0x3ae913 = parseInt(_0x1f2dc1[_0xe80b26(329)]);
    if (_0x3ae913 == 0) {
      $(_0xe80b26(576) + _0x57d8fc)[_0xe80b26(442)](_0xe80b26(319));
    } else {
      _0x3ae913 == -1 ? ($(_0xe80b26(576) + _0x57d8fc)[_0xe80b26(442)]("<span class=\"text-danger\">超时</span>"), $(_0xe80b26(291) + _0x57d8fc + "']")[_0xe80b26(509)](_0xe80b26(548), _0xe80b26(540)), time_out_num = time_out_num + 1, $(_0xe80b26(404))[_0xe80b26(472)](time_out_num), $(".time_out")[_0xe80b26(312)]()) : $("#ping_" + _0x57d8fc).html(_0x3ae913 + "ms");
    }
  } else {
    $(_0xe80b26(492) + _0x57d8fc).html(_0xe80b26(349));
    $(_0xe80b26(291) + _0x57d8fc + "']")[_0xe80b26(509)](_0xe80b26(548), _0xe80b26(540));
    time_out_num = time_out_num + 1;
    $(_0xe80b26(404))[_0xe80b26(472)](time_out_num);
    $(".time_out").show();
  }
  ipv4_list_arr.push(_0x1f2dc1);
  var _0x18a9d4 = 100 / ipv4_list_arr[_0xe80b26(282)];
  let _0x161445 = {};
  ipv4_list_arr.forEach(_0x48b1b6 => {
    var _0x30550a = _0xe80b26;
    _0x161445[_0x48b1b6.ip] = _0x161445[_0x48b1b6.ip] || [];
    _0x48b1b6[_0x30550a(508)] = _0x18a9d4;
    _0x161445[_0x48b1b6.ip][_0x30550a(460)](_0x48b1b6);
  });
  var _0x2c7db0 = [];
  Object[_0xe80b26(289)](_0x161445)[_0xe80b26(593)](function (_0x534a55) {
    var _0x3a322f = _0xe80b26;
    let _0x468515 = {
      ip: _0x534a55
    };
    _0x468515.ip = _0x534a55;
    _0x468515[_0x3a322f(508)] = (_0x18a9d4 * _0x161445[_0x534a55][_0x3a322f(282)])[_0x3a322f(350)](2);
    _0x2c7db0.push(_0x468515);
  });
  _0x2c7db0 = sortByDescNum(_0x2c7db0, _0xe80b26(508));
  $(_0xe80b26(316))[_0xe80b26(442)]("");
  $(_0xe80b26(522)).attr(_0xe80b26(354), "");
  for (var _0x16cd0e = 0; _0x16cd0e < _0x2c7db0[_0xe80b26(282)]; _0x16cd0e++) {
    if (isip(_0x2c7db0[_0x16cd0e].ip)) {
      var _0x49dd3d = _0x2c7db0[_0x16cd0e].ip;
    } else {
      var _0x49dd3d = _0xe80b26(341);
    }
    $(_0xe80b26(316))[_0xe80b26(443)](_0xe80b26(310) + _0x49dd3d + _0xe80b26(324) + _0x49dd3d + _0xe80b26(533) + _0x2c7db0[_0x16cd0e].pre + _0xe80b26(432));
    $(_0xe80b26(522)).attr("copy-text") == "" ? $(".copy_ip")[_0xe80b26(509)](_0xe80b26(354), _0x49dd3d) : $(_0xe80b26(522))[_0xe80b26(509)](_0xe80b26(354), $(_0xe80b26(522))[_0xe80b26(509)]("copy-text") + "\n" + _0x49dd3d);
  }
  $(_0xe80b26(577))[_0xe80b26(472)](_0x2c7db0[_0xe80b26(282)]);
  if (_0x1f2dc1[_0xe80b26(594)] != 99) {
    _0x1f2dc1[_0xe80b26(329)] == "-1" && china_fast[_0x1f2dc1.province] != "5000" && (marker_arr[_0x1f2dc1[_0xe80b26(594)]][_0xe80b26(312)] = true);
    isip(_0x1f2dc1.ip) == false && china_fast[_0x1f2dc1[_0xe80b26(594)]] != _0xe80b26(408) && (marker_arr[_0x1f2dc1[_0xe80b26(594)]][_0xe80b26(312)] = true);
    if (_0x1f2dc1[_0xe80b26(329)] != "-1" && isip(_0x1f2dc1.ip) == true && china_fast[_0x1f2dc1[_0xe80b26(594)]] > parseInt(_0x1f2dc1[_0xe80b26(329)])) {
      china_fast[_0x1f2dc1.province] = parseInt(_0x1f2dc1.result);
    } else {
      (_0x1f2dc1[_0xe80b26(329)] == "-1" && china_fast[_0x1f2dc1.province] == _0xe80b26(503) || isip(_0x1f2dc1.ip) == false && china_fast[_0x1f2dc1[_0xe80b26(594)]] == _0xe80b26(503)) && (china_fast[_0x1f2dc1[_0xe80b26(594)]] = 5000);
    }
    if (_0x1f2dc1.line == "1") {
      var _0x38e8dc = "<font color=#9ccc65>[电信]</font>",
        _0x272403 = _0x1f2dc1[_0xe80b26(464)][_0xe80b26(551)]("电信", "");
    } else {
      if (_0x1f2dc1[_0xe80b26(283)] == "2") {
        var _0x38e8dc = _0xe80b26(420),
          _0x272403 = _0x1f2dc1[_0xe80b26(464)][_0xe80b26(551)]("联通", "");
      } else {
        if (_0x1f2dc1[_0xe80b26(283)] == "3") {
          var _0x38e8dc = _0xe80b26(344),
            _0x272403 = _0x1f2dc1[_0xe80b26(464)][_0xe80b26(551)]("移动", "");
        } else {
          if (_0x1f2dc1[_0xe80b26(283)] == "5") {
            var _0x38e8dc = "",
              _0x272403 = _0x1f2dc1[_0xe80b26(464)][_0xe80b26(551)]("海外", "");
          }
        }
      }
    }
    if (_0x1f2dc1.result == "0") {
      var _0x45c4bd = "<1ms";
    } else {
      if (parseInt(_0x1f2dc1[_0xe80b26(329)]) < 1) {
        var _0x45c4bd = _0xe80b26(428);
      } else {
        if (isip(_0x1f2dc1.ip) == false) {
          var _0x45c4bd = _0xe80b26(483);
        } else {
          var _0x45c4bd = _0x1f2dc1.result + "ms";
        }
      }
    }
    china_data[_0x1f2dc1.province] == "" ? china_data[_0x1f2dc1[_0xe80b26(594)]] = _0xe80b26(466) + _0x38e8dc + " " + _0x272403 + "：" + _0x45c4bd + _0xe80b26(296) : china_data[_0x1f2dc1[_0xe80b26(594)]] = china_data[_0x1f2dc1.province] + _0xe80b26(466) + _0x38e8dc + " " + _0x272403 + "：" + _0x45c4bd + "</p>";
  }
  mydata = [];
  for (var _0x16cd0e = 0; _0x16cd0e < 34; _0x16cd0e++) {
    if (_0x16cd0e == 0) {
      var _0x31b0fb = {
        name: "北京",
        value: china_fast[0],
        datas: china_data[0]
      };
    } else {
      if (_0x16cd0e == 1) {
        var _0x31b0fb = {
          name: "天津",
          value: china_fast[1],
          datas: china_data[1]
        };
      } else {
        if (_0x16cd0e == 2) {
          var _0x31b0fb = {
            name: "上海",
            value: china_fast[2],
            datas: china_data[2]
          };
        } else {
          if (_0x16cd0e == 3) {
            var _0x31b0fb = {
              name: "重庆",
              value: china_fast[3],
              datas: china_data[3]
            };
          } else {
            if (_0x16cd0e == 4) {
              var _0x31b0fb = {
                name: "河北",
                value: china_fast[4],
                datas: china_data[4]
              };
            } else {
              if (_0x16cd0e == 5) {
                var _0x31b0fb = {
                  name: "河南",
                  value: china_fast[5],
                  datas: china_data[5]
                };
              } else {
                if (_0x16cd0e == 6) {
                  var _0x31b0fb = {
                    name: "云南",
                    value: china_fast[6],
                    datas: china_data[6]
                  };
                } else {
                  if (_0x16cd0e == 7) {
                    var _0x31b0fb = {
                      name: "辽宁",
                      value: china_fast[7],
                      datas: china_data[7]
                    };
                  } else {
                    if (_0x16cd0e == 8) {
                      var _0x31b0fb = {
                        name: _0xe80b26(279),
                        value: china_fast[8],
                        datas: china_data[8]
                      };
                    } else {
                      if (_0x16cd0e == 9) {
                        var _0x31b0fb = {
                          name: "湖南",
                          value: china_fast[9],
                          datas: china_data[9]
                        };
                      } else {
                        if (_0x16cd0e == 10) {
                          var _0x31b0fb = {
                            name: "安徽",
                            value: china_fast[10],
                            datas: china_data[10]
                          };
                        } else {
                          if (_0x16cd0e == 11) {
                            var _0x31b0fb = {
                              name: "山东",
                              value: china_fast[11],
                              datas: china_data[11]
                            };
                          } else {
                            if (_0x16cd0e == 12) {
                              var _0x31b0fb = {
                                name: "新疆",
                                value: china_fast[12],
                                datas: china_data[12]
                              };
                            } else {
                              if (_0x16cd0e == 13) {
                                var _0x31b0fb = {
                                  name: "江苏",
                                  value: china_fast[13],
                                  datas: china_data[13]
                                };
                              } else {
                                if (_0x16cd0e == 14) {
                                  var _0x31b0fb = {
                                    name: "浙江",
                                    value: china_fast[14],
                                    datas: china_data[14]
                                  };
                                } else {
                                  if (_0x16cd0e == 15) {
                                    var _0x31b0fb = {
                                      name: "江西",
                                      value: china_fast[15],
                                      datas: china_data[15]
                                    };
                                  } else {
                                    if (_0x16cd0e == 16) {
                                      var _0x31b0fb = {
                                        name: "湖北",
                                        value: china_fast[16],
                                        datas: china_data[16]
                                      };
                                    } else {
                                      if (_0x16cd0e == 17) {
                                        var _0x31b0fb = {
                                          name: "广西",
                                          value: china_fast[17],
                                          datas: china_data[17]
                                        };
                                      } else {
                                        if (_0x16cd0e == 18) {
                                          var _0x31b0fb = {
                                            name: "甘肃",
                                            value: china_fast[18],
                                            datas: china_data[18]
                                          };
                                        } else {
                                          if (_0x16cd0e == 19) {
                                            var _0x31b0fb = {
                                              name: "山西",
                                              value: china_fast[19],
                                              datas: china_data[19]
                                            };
                                          } else {
                                            if (_0x16cd0e == 20) {
                                              var _0x31b0fb = {
                                                name: _0xe80b26(292),
                                                value: china_fast[20],
                                                datas: china_data[20]
                                              };
                                            } else {
                                              if (_0x16cd0e == 21) {
                                                var _0x31b0fb = {
                                                  name: "陕西",
                                                  value: china_fast[21],
                                                  datas: china_data[21]
                                                };
                                              } else {
                                                if (_0x16cd0e == 22) {
                                                  var _0x31b0fb = {
                                                    name: "吉林",
                                                    value: china_fast[22],
                                                    datas: china_data[22]
                                                  };
                                                } else {
                                                  if (_0x16cd0e == 23) {
                                                    var _0x31b0fb = {
                                                      name: "福建",
                                                      value: china_fast[23],
                                                      datas: china_data[23]
                                                    };
                                                  } else {
                                                    if (_0x16cd0e == 24) {
                                                      var _0x31b0fb = {
                                                        name: "贵州",
                                                        value: china_fast[24],
                                                        datas: china_data[24]
                                                      };
                                                    } else {
                                                      if (_0x16cd0e == 25) {
                                                        var _0x31b0fb = {
                                                          name: "广东",
                                                          value: china_fast[25],
                                                          datas: china_data[25]
                                                        };
                                                      } else {
                                                        if (_0x16cd0e == 26) {
                                                          var _0x31b0fb = {
                                                            name: "青海",
                                                            value: china_fast[26],
                                                            datas: china_data[26]
                                                          };
                                                        } else {
                                                          if (_0x16cd0e == 27) {
                                                            var _0x31b0fb = {
                                                              name: "西藏",
                                                              value: china_fast[27],
                                                              datas: china_data[27]
                                                            };
                                                          } else {
                                                            if (_0x16cd0e == 28) {
                                                              var _0x31b0fb = {
                                                                name: "四川",
                                                                value: china_fast[28],
                                                                datas: china_data[28]
                                                              };
                                                            } else {
                                                              if (_0x16cd0e == 29) {
                                                                var _0x31b0fb = {
                                                                  name: "宁夏",
                                                                  value: china_fast[29],
                                                                  datas: china_data[29]
                                                                };
                                                              } else {
                                                                if (_0x16cd0e == 30) {
                                                                  var _0x31b0fb = {
                                                                    name: "海南",
                                                                    value: china_fast[30],
                                                                    datas: china_data[30]
                                                                  };
                                                                } else {
                                                                  if (_0x16cd0e == 31) {
                                                                    var _0x31b0fb = {
                                                                      name: "台湾",
                                                                      value: china_fast[31],
                                                                      datas: china_data[31]
                                                                    };
                                                                  } else {
                                                                    if (_0x16cd0e == 32) {
                                                                      var _0x31b0fb = {
                                                                        name: "香港",
                                                                        value: china_fast[32],
                                                                        datas: china_data[32]
                                                                      };
                                                                    } else {
                                                                      if (_0x16cd0e == 33) {
                                                                        var _0x31b0fb = {
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
    china_fast[_0x16cd0e] != 9999 ? mydata[mydata.length] = _0x31b0fb : mydata[mydata[_0xe80b26(282)]] = {
      name: "北京"
    };
  }
  refreshData_slow();
  if (isip(_0x1f2dc1.ip) == false) {
    return false;
  }
  if (_0x1f2dc1.province != 99 && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    china_node_num = china_node_num + 1;
    china_allping = china_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    china_fastping > parseInt(_0x1f2dc1[_0xe80b26(329)]) && (china_fastping = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(435))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " <1ms") : $("#china_fast")[_0xe80b26(472)](_0x1f2dc1.name + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    china_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (china_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $(_0xe80b26(493))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(493))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1.result + "ms"));
    var _0x5983b8 = parseInt(china_allping / china_node_num);
    _0x5983b8 == 0 ? $(_0xe80b26(367))[_0xe80b26(472)](_0xe80b26(319)) : $(_0xe80b26(367))[_0xe80b26(472)](_0x5983b8 + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(283)] == "1" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    ct_node_num = ct_node_num + 1;
    ct_allping = ct_allping + parseInt(_0x1f2dc1.result);
    ct_fast > parseInt(_0x1f2dc1[_0xe80b26(329)]) && (ct_fast = _0x1f2dc1.result, _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(507))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $("#ct_fast")[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    ct_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (ct_slow = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1.result == 0 ? $(_0xe80b26(445))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(445))[_0xe80b26(472)](_0x1f2dc1.name + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x1db4b6 = parseInt(ct_allping / ct_node_num);
    _0x1db4b6 == 0 ? $(_0xe80b26(305))[_0xe80b26(472)](_0xe80b26(319)) : $(_0xe80b26(305))[_0xe80b26(472)](_0x1db4b6 + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(283)] == "2" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    cu_node_num = cu_node_num + 1;
    cu_allping = cu_allping + parseInt(_0x1f2dc1.result);
    cu_fast > parseInt(_0x1f2dc1[_0xe80b26(329)]) && (cu_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1.result == 0 ? $(_0xe80b26(453))[_0xe80b26(472)](_0x1f2dc1.name + _0xe80b26(302)) : $("#cu_fast")[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    cu_slow < parseInt(_0x1f2dc1.result) && (cu_slow = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(320))[_0xe80b26(472)](_0x1f2dc1.name + " <1ms") : $(_0xe80b26(320))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x51f3ce = parseInt(cu_allping / cu_node_num);
    _0x51f3ce == 0 ? $(_0xe80b26(501))[_0xe80b26(472)](_0xe80b26(319)) : $(_0xe80b26(501))[_0xe80b26(472)](_0x51f3ce + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(283)] == "3" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    cm_node_num = cm_node_num + 1;
    cm_allping = cm_allping + parseInt(_0x1f2dc1.result);
    cm_fast > parseInt(_0x1f2dc1.result) && (cm_fast = _0x1f2dc1.result, _0x1f2dc1[_0xe80b26(329)] == 0 ? $("#cm_fast")[_0xe80b26(472)](_0x1f2dc1.name + _0xe80b26(302)) : $(_0xe80b26(406)).text(_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1.result + "ms"));
    cm_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (cm_slow = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(588))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $("#cm_slow").text(_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1.result + "ms"));
    var _0x12d9c5 = parseInt(cm_allping / cm_node_num);
    _0x12d9c5 == 0 ? $(_0xe80b26(567))[_0xe80b26(472)](_0xe80b26(319)) : $(_0xe80b26(567))[_0xe80b26(472)](_0x12d9c5 + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(517)] == "1" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    huadong_node_num = huadong_node_num + 1;
    huadong_allping = huadong_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    huadong_fast > parseInt(_0x1f2dc1[_0xe80b26(329)]) && (huadong_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $("#huadong_fast")[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(462))[_0xe80b26(472)](_0x1f2dc1.name + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    huadong_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (huadong_slow = _0x1f2dc1.result, _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(505))[_0xe80b26(472)](_0x1f2dc1.name + _0xe80b26(302)) : $(_0xe80b26(505))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x14f7f0 = parseInt(huadong_allping / huadong_node_num);
    _0x14f7f0 == 0 ? $(_0xe80b26(254))[_0xe80b26(472)]("<1ms") : $(_0xe80b26(254)).text(_0x14f7f0 + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(517)] == "2" && _0x1f2dc1.result != "-1") {
    huanan_node_num = huanan_node_num + 1;
    huanan_allping = huanan_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    huanan_fast > parseInt(_0x1f2dc1.result) && (huanan_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(488)).text(_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(488))[_0xe80b26(472)](_0x1f2dc1.name + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    huanan_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (huanan_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#huanan_slow")[_0xe80b26(472)](_0x1f2dc1.name + _0xe80b26(302)) : $(_0xe80b26(352))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1.result + "ms"));
    var _0x189b11 = parseInt(huanan_allping / huanan_node_num);
    _0x189b11 == 0 ? $(_0xe80b26(280))[_0xe80b26(472)](_0xe80b26(319)) : $(_0xe80b26(280)).text(_0x189b11 + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(517)] == "3" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    huazhong_node_num = huazhong_node_num + 1;
    huazhong_allping = huazhong_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    huazhong_fast > parseInt(_0x1f2dc1[_0xe80b26(329)]) && (huazhong_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1.result == 0 ? $(_0xe80b26(537))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(537))[_0xe80b26(472)](_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    huazhong_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (huazhong_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#huazhong_slow")[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(252))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x595aa5 = parseInt(huazhong_allping / huazhong_node_num);
    _0x595aa5 == 0 ? $("#huazhong_avg")[_0xe80b26(472)]("<1ms") : $(_0xe80b26(514))[_0xe80b26(472)](_0x595aa5 + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(517)] == "4" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    huabei_node_num = huabei_node_num + 1;
    huabei_allping = huabei_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    huabei_fast > parseInt(_0x1f2dc1[_0xe80b26(329)]) && (huabei_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1.result == 0 ? $(_0xe80b26(418))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(418))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    huabei_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (huabei_slow = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1.result == 0 ? $("#huabei_slow")[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " <1ms") : $(_0xe80b26(427)).text(_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x522a52 = parseInt(huabei_allping / huabei_node_num);
    _0x522a52 == 0 ? $(_0xe80b26(297)).text(_0xe80b26(319)) : $("#huabei_avg").text(_0x522a52 + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(517)] == "5" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    xinan_node_num = xinan_node_num + 1;
    xinan_allping = xinan_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    xinan_fast > parseInt(_0x1f2dc1.result) && (xinan_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $("#xinan_fast").text(_0x1f2dc1.name + _0xe80b26(302)) : $(_0xe80b26(395))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    xinan_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (xinan_slow = _0x1f2dc1.result, _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(273)).text(_0x1f2dc1.name + _0xe80b26(302)) : $("#xinan_slow")[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1.result + "ms"));
    var _0x222f6d = parseInt(xinan_allping / xinan_node_num);
    _0x222f6d == 0 ? $(_0xe80b26(285))[_0xe80b26(472)](_0xe80b26(319)) : $(_0xe80b26(285)).text(_0x222f6d + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(517)] == "6" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    xibei_node_num = xibei_node_num + 1;
    xibei_allping = xibei_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    xibei_fast > parseInt(_0x1f2dc1[_0xe80b26(329)]) && (xibei_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1.result == 0 ? $(_0xe80b26(550)).text(_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(550))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    xibei_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (xibei_slow = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1.result == 0 ? $(_0xe80b26(261)).text(_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(261))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x1c657c = parseInt(xibei_allping / xibei_node_num);
    _0x1c657c == 0 ? $("#xibei_avg")[_0xe80b26(472)]("<1ms") : $("#xibei_avg")[_0xe80b26(472)](_0x1c657c + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(517)] == "7" && _0x1f2dc1.result != "-1") {
    dongbei_node_num = dongbei_node_num + 1;
    dongbei_allping = dongbei_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    dongbei_fast > parseInt(_0x1f2dc1[_0xe80b26(329)]) && (dongbei_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(541))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(541)).text(_0x1f2dc1.name + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    dongbei_slow < parseInt(_0x1f2dc1.result) && (dongbei_slow = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(417)).text(_0x1f2dc1[_0xe80b26(464)] + " <1ms") : $(_0xe80b26(417))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x29da84 = parseInt(dongbei_allping / dongbei_node_num);
    _0x29da84 == 0 ? $(_0xe80b26(543))[_0xe80b26(472)](_0xe80b26(319)) : $(_0xe80b26(543))[_0xe80b26(472)](_0x29da84 + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(517)] == "8" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    gangaotai_node_num = gangaotai_node_num + 1;
    gangaotai_allping = gangaotai_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    gangaotai_fast > parseInt(_0x1f2dc1[_0xe80b26(329)]) && (gangaotai_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(481))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $("#gangaotai_fast")[_0xe80b26(472)](_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    gangaotai_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (gangaotai_slow = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(333)).text(_0x1f2dc1.name + _0xe80b26(302)) : $("#gangaotai_slow")[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x5231d0 = parseInt(gangaotai_allping / gangaotai_node_num);
    _0x5231d0 == 0 ? $(_0xe80b26(425))[_0xe80b26(472)]("<1ms") : $(_0xe80b26(425))[_0xe80b26(472)](_0x5231d0 + "ms");
  }
  if (_0x1f2dc1.province == "99" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    global_node_num = global_node_num + 1;
    global_allping = global_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    global_fast > parseInt(_0x1f2dc1[_0xe80b26(329)]) && (global_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1.result == 0 ? $(_0xe80b26(384))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " <1ms") : $(_0xe80b26(384))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    global_slow < parseInt(_0x1f2dc1.result) && (global_slow = _0x1f2dc1.result, _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(257))[_0xe80b26(472)](_0x1f2dc1.name + _0xe80b26(302)) : $(_0xe80b26(257))[_0xe80b26(472)](_0x1f2dc1.name + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x497f07 = parseInt(global_allping / global_node_num);
    _0x497f07 == 0 ? $("#global_avg")[_0xe80b26(472)](_0xe80b26(319)) : $(_0xe80b26(589))[_0xe80b26(472)](_0x497f07 + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(517)] == "9" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    asia_node_num = asia_node_num + 1;
    asia_allping = asia_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    asia_fast > parseInt(_0x1f2dc1.result) && (asia_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(458))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(458)).text(_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    asia_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (asia_slow = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $("#asia_slow")[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $("#asia_slow")[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1.result + "ms"));
    var _0x4aa558 = parseInt(asia_allping / asia_node_num);
    _0x4aa558 == 0 ? $("#asia_avg")[_0xe80b26(472)](_0xe80b26(319)) : $(_0xe80b26(304))[_0xe80b26(472)](_0x4aa558 + "ms");
  }
  if (_0x1f2dc1.region == "10" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    europe_node_num = europe_node_num + 1;
    europe_allping = europe_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    europe_fast > parseInt(_0x1f2dc1.result) && (europe_fast = _0x1f2dc1.result, _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(585))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(585))[_0xe80b26(472)](_0x1f2dc1.name + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    europe_slow < parseInt(_0x1f2dc1.result) && (europe_slow = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(315))[_0xe80b26(472)](_0x1f2dc1.name + _0xe80b26(302)) : $("#europe_slow")[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x577e69 = parseInt(europe_allping / europe_node_num);
    _0x577e69 == 0 ? $("#europe_avg")[_0xe80b26(472)](_0xe80b26(319)) : $("#europe_avg")[_0xe80b26(472)](_0x577e69 + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(517)] == "11" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    north_node_num = north_node_num + 1;
    north_allping = north_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    north_fast > parseInt(_0x1f2dc1[_0xe80b26(329)]) && (north_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $("#north_fast")[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $("#north_fast")[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1.result + "ms"));
    north_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (north_slow = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(371))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " <1ms") : $(_0xe80b26(371))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x28d472 = parseInt(north_allping / north_node_num);
    _0x28d472 == 0 ? $(_0xe80b26(309)).text(_0xe80b26(319)) : $(_0xe80b26(309))[_0xe80b26(472)](_0x28d472 + "ms");
  }
  if (_0x1f2dc1.region == "12" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    south_node_num = south_node_num + 1;
    south_allping = south_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    south_fast > parseInt(_0x1f2dc1.result) && (south_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(372))[_0xe80b26(472)](_0x1f2dc1.name + " <1ms") : $(_0xe80b26(372))[_0xe80b26(472)](_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    south_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (south_slow = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1.result == 0 ? $(_0xe80b26(314))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(314))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x44edd9 = parseInt(south_allping / south_node_num);
    _0x44edd9 == 0 ? $(_0xe80b26(332))[_0xe80b26(472)](_0xe80b26(319)) : $(_0xe80b26(332))[_0xe80b26(472)](_0x44edd9 + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(517)] == "13" && _0x1f2dc1.result != "-1") {
    africa_node_num = africa_node_num + 1;
    africa_allping = africa_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    africa_fast > parseInt(_0x1f2dc1.result) && (africa_fast = _0x1f2dc1.result, _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(437))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(437))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    africa_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (africa_slow = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(326))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " <1ms") : $(_0xe80b26(326)).text(_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x40954e = parseInt(africa_allping / africa_node_num);
    _0x40954e == 0 ? $(_0xe80b26(294))[_0xe80b26(472)](_0xe80b26(319)) : $(_0xe80b26(294))[_0xe80b26(472)](_0x40954e + "ms");
  }
  if (_0x1f2dc1[_0xe80b26(517)] == "14" && _0x1f2dc1[_0xe80b26(329)] != "-1") {
    oceania_node_num = oceania_node_num + 1;
    oceania_allping = oceania_allping + parseInt(_0x1f2dc1[_0xe80b26(329)]);
    oceania_fast > parseInt(_0x1f2dc1[_0xe80b26(329)]) && (oceania_fast = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1[_0xe80b26(329)] == 0 ? $(_0xe80b26(539))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + _0xe80b26(302)) : $(_0xe80b26(539)).text(_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    oceania_slow < parseInt(_0x1f2dc1[_0xe80b26(329)]) && (oceania_slow = _0x1f2dc1[_0xe80b26(329)], _0x1f2dc1.result == 0 ? $(_0xe80b26(255)).text(_0x1f2dc1.name + _0xe80b26(302)) : $(_0xe80b26(255))[_0xe80b26(472)](_0x1f2dc1[_0xe80b26(464)] + " " + _0x1f2dc1[_0xe80b26(329)] + "ms"));
    var _0x11b13f = parseInt(oceania_allping / oceania_node_num);
    _0x11b13f == 0 ? $(_0xe80b26(419))[_0xe80b26(472)](_0xe80b26(319)) : $("#oceania_avg")[_0xe80b26(472)](_0x11b13f + "ms");
  }
}
function GetPercent(_0x64da50, _0x4708d3) {
  var _0x556d92 = _0x2cee48;
  _0x64da50 = parseFloat(_0x64da50);
  _0x4708d3 = parseFloat(_0x4708d3);
  if (isNaN(_0x64da50) || isNaN(_0x4708d3)) {
    return "-";
  }
  return _0x4708d3 <= 0 ? "0%" : Math[_0x556d92(477)](_0x64da50 / _0x4708d3 * 100) + "%";
}
function check_complete() {
  var _0x2ce37b = _0x2cee48,
    _0x2397e5 = true;
  $[_0x2ce37b(511)]($(_0x2ce37b(265)), function () {
    var _0x2cd9aa = _0x2ce37b,
      _0x1f15bd = $(this)[_0x2cd9aa(509)](_0x2cd9aa(575));
    if ($(_0x2cd9aa(394) + _0x1f15bd)[_0x2cd9aa(472)]() != "100") {
      _0x2397e5 = false;
      return false;
    }
  });
  return _0x2397e5;
}
function update_canvas(_0x6929ab, _0xe8d816, _0x4c4760) {
  var _0x4daa55 = _0x2cee48,
    _0x441448 = document[_0x4daa55(256)](_0x4daa55(353) + _0x6929ab),
    _0xc7004e = _0x441448[_0x4daa55(364)]("2d"),
    _0xe8d816 = _0xe8d816 - 1;
  if (_0x4c4760 >= 350) {
    _0xc7004e[_0x4daa55(270)] = _0x4daa55(495);
  } else {
    _0x4c4760 == "-1" ? _0xc7004e[_0x4daa55(270)] = _0x4daa55(358) : _0xc7004e.fillStyle = _0x4daa55(579);
  }
  if (_0x4c4760 == "-1") {
    var _0x46c5c7 = 20;
  } else {
    var _0x46c5c7 = parseInt(_0x4c4760 / 15);
  }
  _0x46c5c7 < 1 && (_0x46c5c7 = 1);
  var _0x2acf76 = _0xe8d816 * 2,
    _0xfc488e = 20 - _0x46c5c7;
  _0xc7004e[_0x4daa55(415)](_0x2acf76, _0xfc488e, 2, _0x46c5c7);
}
function check_post(_0x373f02, _0x40dd04) {
  var _0xf3157b = _0x2cee48,
    _0x32b613 = document.createElement(_0xf3157b(516));
  _0x32b613[_0xf3157b(262)] = _0x373f02;
  _0x32b613.method = _0xf3157b(286);
  _0x32b613[_0xf3157b(555)][_0xf3157b(491)] = "none";
  for (var _0x2dd740 in _0x40dd04) {
    var _0x809080 = document[_0xf3157b(278)](_0xf3157b(461));
    _0x809080.name = _0x2dd740;
    _0x809080.value = _0x40dd04[_0x2dd740];
    _0x32b613[_0xf3157b(308)](_0x809080);
  }
  document.body[_0xf3157b(308)](_0x32b613);
  _0x32b613.submit();
  return _0x32b613;
}
function check_post_blank(_0x2a02d8, _0x480aab) {
  var _0x3392e4 = _0x2cee48,
    _0x41fa0d = document[_0x3392e4(278)](_0x3392e4(516));
  _0x41fa0d.action = _0x2a02d8;
  _0x41fa0d[_0x3392e4(587)] = _0x3392e4(286);
  _0x41fa0d[_0x3392e4(546)] = Math[_0x3392e4(362)]() + _0x3392e4(440);
  _0x41fa0d.style.display = _0x3392e4(530);
  for (var _0x22dba6 in _0x480aab) {
    var _0x57a524 = document[_0x3392e4(278)]("textarea");
    _0x57a524[_0x3392e4(464)] = _0x22dba6;
    _0x57a524[_0x3392e4(381)] = _0x480aab[_0x22dba6];
    _0x41fa0d[_0x3392e4(308)](_0x57a524);
  }
  document.body[_0x3392e4(308)](_0x41fa0d);
  _0x41fa0d[_0x3392e4(549)]();
  return _0x41fa0d;
}
function check_form(_0x71d27e) {
  var _0x56cb97 = _0x2cee48,
    _0x359540 = $(_0x56cb97(553))[_0x56cb97(303)]();
  _0x359540 = _0x359540[_0x56cb97(486)]("/");
  _0x359540[2] ? _0x359540 = _0x359540[2] : (_0x359540 = $("#host")[_0x56cb97(303)]()[_0x56cb97(551)](/\//g, ""), _0x359540 = _0x359540.replace(/。/g, "."), _0x359540 = _0x359540[_0x56cb97(551)](/\\/g, ""), _0x359540 = _0x359540[_0x56cb97(551)](/：/g, ":"));
  var _0x2fd8e8 = check_line(),
    _0x48466d = $(_0x56cb97(340))[_0x56cb97(303)](),
    _0x448dbe = $("#dns_server")[_0x56cb97(303)]();
  if (_0x48466d == _0x56cb97(519) && isipv4(_0x448dbe) == false) {
    err_tip_more(_0x56cb97(264));
    return false;
  }
  if ($(_0x56cb97(553))[_0x56cb97(303)]() == "") {
    err_tip_more(_0x56cb97(512));
    return false;
  }
  _0x71d27e == "many" ? check_post(_0x56cb97(359) + _0x359540, {
    line: _0x2fd8e8,
    mode: _0x56cb97(313),
    button_click: _0x56cb97(431),
    dns_server_type: _0x48466d,
    dns_server: _0x448dbe
  }) : check_post(_0x56cb97(359) + _0x359540, {
    line: _0x2fd8e8,
    button_click: _0x56cb97(431),
    dns_server_type: _0x48466d,
    dns_server: _0x448dbe
  });
}
function ping_button(_0x3e19e8, _0x107506) {
  var _0x4d1d86 = _0x2cee48,
    _0x5521e2 = $(_0x4d1d86(492) + _0x3e19e8)[_0x4d1d86(472)](),
    _0x299834 = _0x5521e2[_0x4d1d86(486)](":");
  _0x107506 == _0x4d1d86(313) ? check_post_blank("/ping/" + _0x299834[0], {
    mode: "many",
    button_click: "yes"
  }) : check_post_blank(_0x4d1d86(337) + _0x299834[0], {
    button_click: _0x4d1d86(431)
  });
}
function tcping_button(_0x12df97, _0x2fb7c3) {
  var _0x18b920 = _0x2cee48,
    _0x315ddd = $(_0x18b920(492) + _0x12df97)[_0x18b920(472)]();
  _0x2fb7c3 == _0x18b920(313) ? check_post_blank(_0x18b920(359) + _0x315ddd, {
    mode: _0x18b920(313),
    button_click: _0x18b920(431)
  }) : check_post_blank(_0x18b920(359) + _0x315ddd, {
    button_click: "yes"
  });
}
function tracert_button(_0x3f3260) {
  var _0x4d6bc9 = _0x2cee48,
    _0x4ca57f = $(_0x4d6bc9(492) + _0x3f3260).text(),
    _0x4dfe46 = _0x4ca57f[_0x4d6bc9(486)](":");
  check_post_blank(_0x4d6bc9(366) + _0x4dfe46[0], {
    node: _0x3f3260
  });
}
function http_button(_0x57d354) {
  var _0x3cb28b = _0x2cee48,
    _0x8ea052 = $(_0x3cb28b(492) + _0x57d354)[_0x3cb28b(472)]();
  check_post_blank(_0x3cb28b(369), {
    host: _0x8ea052
  });
}
function feedback_button(_0x5810e3) {
  var _0x1fc54e = _0x2cee48,
    _0x1b9268 = $(_0x1fc54e(492) + _0x5810e3)[_0x1fc54e(472)](),
    _0x22ed71 = _0x1b9268.split(":");
  check_post_blank(_0x1fc54e(323), {
    ip: _0x22ed71[0]
  });
}
function down_screenshot(_0x5343cb) {
  ad_hide();
  setTimeout(function () {
    var _0x8d8cba = _0x20b9;
    $(_0x8d8cba(392)).html(_0x8d8cba(373));
    $(_0x8d8cba(392))[_0x8d8cba(509)](_0x8d8cba(547), true);
    domtoimage[_0x8d8cba(446)](document.getElementById(_0x8d8cba(433)))[_0x8d8cba(561)](function (_0x54bc1e) {
      var _0x1e3364 = _0x8d8cba;
      window.saveAs(_0x54bc1e, _0x5343cb + _0x1e3364(375));
      unmosaic();
      $(_0x1e3364(392))[_0x1e3364(442)](_0x1e3364(413));
      $(_0x1e3364(392))[_0x1e3364(509)]("disabled", false);
    });
  }, 10);
}
function copy_screenshot() {
  ad_hide();
  setTimeout(function () {
    var _0x2aa054 = _0x20b9;
    $(_0x2aa054(392))[_0x2aa054(442)]("<div class=\"spinner-border spinner-border-sm\" role=\"status\"></div> 正在生成");
    $(_0x2aa054(392))[_0x2aa054(509)](_0x2aa054(547), true);
    var _0x2eff85 = document[_0x2aa054(256)](_0x2aa054(433));
    domtoimage[_0x2aa054(322)](_0x2eff85)[_0x2aa054(561)](function (_0x2d1d78) {
      var _0x578ffb = _0x2aa054;
      get_img(_0x2d1d78[_0x578ffb(551)](/data:image\/png;base64,/g, ""));
    }).catch(function (_0x1f837d) {
      var _0x15b463 = _0x2aa054;
      console[_0x15b463(299)](_0x15b463(380), _0x1f837d);
    });
  }, 10);
}
function _0xbb85() {
  var _0x546911 = ["#gangaotai_fast", "0,0", "<font color=#e61610>解析失败</font>", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 湖北武汉：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 湖北恩施：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 湖北孝感：70ms</p>", ">250ms", "split", "item", "#huanan_fast", "#best_ping_", "#6c757d", "display", "#real_ip_", "#china_slow", ".node_tr[node=", "orange", "290,346", "atob", "#70ccef", "geo", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 吉林长春：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 吉林通化：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 吉林辽源：70ms</p>", "#cu_avg", "1690xfEynd", "9999", "167616yujecC", "#huadong_slow", "log", "#ct_fast", "pre", "attr", "send_num", "each", "<li>请输入检测目标（域名、IPv4、域名:端口、IPv4:端口）</li>", "338,358", "#huazhong_avg", "95%", "form", "region", "image/png", "custom", "(((.+)+)+)+$", "5px", ".copy_ip", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 浙江杭州：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 浙江宁波：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 浙江温州：70ms</p>", "#return_info", "#42dd3f", "return (function() ", "485,210", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 青海西宁：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 青海玉树：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 青海海东：70ms</p>", "\n                  </div>\n                  ", "none", ".show_record", "\n                        <div>\n                            <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">", "</span><span class=\"text-primary float-right mr-3\">", "rgb(249, 249, 249)", "<div class=\"progress-bar\" role=\"progressbar\" style=\"width:", "bind", "#huazhong_fast", "4132827BMSnfS", "#oceania_fast", "true", "#dongbei_fast", "search", "#dongbei_avg", "435,275", "78wpYVGF", "target", "disabled", "time_out", "submit", "#xibei_fast", "replace", "342,307", "#host", "exception", "style", "383,342", "462,433", "datas", "apply", "write", "then", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 山东青岛：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 山东枣庄：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 山东济南：70ms</p>", "init", "201ms-250ms", "510,182", "removeClass", "#cm_avg", "loss_num", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 海南三亚：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 海南海口：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 海南三沙：70ms</p>", "\" aria-valuemin=\"0\" aria-valuemax=\"", ".ip_address", "mouseout", "offset", "resize", "node", "#ping_", "#ipv4_num", "info", "green", "#f69833", "node_id", "#last_ping_", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 四川成都：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 四川绵阳：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 四川南充：70ms</p>", "sort", "#europe_fast", "7qiMCCX", "method", "#cm_slow", "#global_avg", "hide", "mouseover", "</p>\n                        ", "forEach", "province", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 内蒙古包头：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 内蒙古赤峰：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 内蒙古乌海：70ms</p>", "china_map", "#huazhong_slow", "<i class=\"feather icon-play\"></i> 开始复制截图", "#huadong_avg", "#oceania_slow", "getElementById", "#global_slow", "#avg_ping_", "763756obdzai", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 山西太原：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 山西大同：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 山西阳泉：70ms</p>", "#xibei_slow", "action", "background-color", "<li>指定的DNS服务器必须是IPv4</li>", "tr.node_tr", "正在生成截图 ···", "')\" style=\"display: inline-block;\"><i class=\"feather icon-download\"></i> 下载截图</button> <button class=\"btn btn-primary btn-sm ml-4\" onclick=\"mosaic();layer.closeAll();copy_screenshot_tip();\" style=\" display: inline-block; \"><i class=\"feather icon-copy\"></i> 复制截图</button> </div> </div>   </div>", "<span class=\"text-danger\">超时</span>", "2004582SbxsGe", "fillStyle", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 河北石家庄：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 河北唐山：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 河北廊坊：70ms</p>", "click", "#xinan_slow", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 贵州贵阳：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 贵州遵义：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 贵州安顺：70ms</p>", "468,340", "d-none", "max-width", "createElement", "黑龙江", "#huanan_avg", "390,305", "length", "line", "#worst_ping_", "#xinan_avg", "post", ".filter_ip", "373,382", "keys", ".text-left", ".node_tr[node='", "内蒙古", ".layui-layer-btn0", "#africa_avg", "html,body", "</p>", "#huabei_avg", "349,433", "error", "<div class=\"p-4\" style=\"background-color: #ecf0f5;\"> <div class=\"text-center\"> <div style=\"border: 1px dashed #4680ff;padding: 10px 0;height: 75px;display: flex;\"><i class=\"fas fa-chess-board\" style=\"font-size: 46px;padding: 3px 10px;color: #7c9eff;width: 70px;height: 70px;\"></i> <div><div><i class=\"fas fa-info-circle\" style=\"font-size:15px;\"></i>  哪些地方需要打码? (可选)</div> <div class=\"text-center mt-2\" style=\"display: inline-flex;\"><label class=\"custom-control custom-checkbox done-task\"> <input type=\"checkbox\" name=\"mosaic\" value=\"ip\" class=\"custom-control-input\"> <span class=\"custom-control-label text-secondary\" style=\" \"> 域名或IP</span> </label> <label class=\"ml-3 custom-control custom-checkbox done-task\"> <input type=\"checkbox\" name=\"mosaic\" value=\"address\" class=\"custom-control-input\"> <span class=\"custom-control-label text-secondary\"> 地理位置</span> </label> </div></div></div> <div class=\"mt-3\" style=\"display: inline-flex;\"><button class=\"btn btn-primary btn-sm\" onclick=\"mosaic();layer.closeAll();down_screenshot('", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 安徽合肥：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 安徽芜湖：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 安徽黄山：70ms</p>", " <1ms", "val", "#asia_avg", "#ct_avg", "input[name='filter_line']", ".label_filter_ip", "appendChild", "#north_avg", " <a title=\"点击筛选\" class=\"pointer noselect\" onclick=\"filter_ip('", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 陕西西安：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 陕西宝鸡：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 陕西咸阳：70ms</p>", "show", "many", "#south_slow", "#europe_slow", ".ip_list", "#EEA644", "#eee", "<1ms", "#cu_slow", "warn", "toPng", "/feedback.php", "')\"><li><span class=\"real_ip ml-3\">", "toString", "#africa_slow", "rgba(255, 255, 255, .5)", ".hover-button", "result", "substring", "prop", "#south_avg", "#gangaotai_slow", "animate", "51ms-100ms", "100%", "/ping/", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 云南昆明：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 云南丽江：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 云南玉溪：70ms</p>", "<p style=\"line-height: 10px; padding: 0 10px;\">中国香港PCCW：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\">中国香港HGC：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\">中国香港HKBN：70ms</p>", "input[name='dns_server_type']:checked", "解析失败", "125,225", "console", "<font color=#00acc1>[移动]</font>", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 上海：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 上海：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 上海：70ms</p>", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 西藏拉萨：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 西藏林芝：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 西藏阿里：70ms</p>", ".node_tr", ".checking", "<span class=\"text-danger\">解析失败</span>", "toFixed", "#complete_progress", "#huanan_slow", "canvas_", "copy-text", "all_ping", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 黑龙江哈尔滨：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 黑龙江大庆：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 黑龙江鹤岗：70ms</p>", "399,451", "red", "/tcping/", "trace", "addClass", "random", "70%", "getContext", "keyCode", "/traceroute/", "#china_avg", "46626EQdwGN", "/http/", "429,240", "#north_slow", "#south_fast", "<div class=\"spinner-border spinner-border-sm\" role=\"status\"></div> 正在生成", "<=50ms", "_多地端口TCP延迟测试.png", "data", "keyup", "15px", ".address-hidden", "oops, something went wrong!", "value", "prototype", "#bef663", "#global_fast", "8IHCLrF", "title", "</div>", "1796935obuCqi", "tips", "border-color", "350px", "#takeScreenshot", "setOption", "#send_", "#xinan_fast", "436,404", "address", "msg", "mosaic", "constructor", "323,263", "392,437", "children", ".time_out", "</p>\n                        <p  style=\"line-height: 20px; padding: 0 10px;\">最快响应：", "#cm_fast", "#loss_", "5000", "<p style=\"line-height: 10px; padding: 0 10px;\">南海诸岛：50ms</p>", "close", "top", "#address_", "<i class=\"feather icon-camera\"></i> 完整截图", ".gg_link", "fillRect", "china", "#dongbei_slow", "#huabei_fast", "#oceania_avg", "<font color=#ffba57>[联通]</font>", "test", "remove", "open", ".real_ip", "#gangaotai_avg", "67705JsasbY", "#huabei_slow", "<font color=#e61610>超时</font>", "Not Found", "{logo|}", "yes", "%</span></li></a>", "screenshots", "点击开始后，不要操作鼠标，保持当前页面获焦状态！<br><div class=\"mt-2 text-muted\">1、Firefox 需手动开启复制图片功能 > <a class=\"text-primary\" target=\"view_open_blank\" href=\"/article/content-278.html\">查看教程</a><br>2、少数浏览器不支持复制图片，请选择下载图片</div>", "#china_fast", "find", "#africa_fast", "#24aa1d", "checked", "_blank", "series", "html", "append", "420,228", "#ct_slow", "toBlob", "indexOf", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 甘肃兰州：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 甘肃天水：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 甘肃平凉：70ms</p>", "x_y", "input[name='mosaic']:checked", "left", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 湖南长沙：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 湖南株洲：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 湖南湘潭：70ms</p>", "#cu_fast", "css", "280,425", "#bbb", "380px", "#asia_fast", "357,491", "push", "textarea", "#huadong_fast", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 新疆乌鲁木齐：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 新疆吐鲁番：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 新疆哈密：70ms</p>", "name", "530,140", "<p style=\"line-height: 10px; padding: 0 10px;\">", "#f6ed44", "380,260", "#fff4e7", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 宁夏中卫：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 宁夏银川：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 宁夏固原：70ms</p>", "411,382", "text", "all", "南海诸岛", "#hover_button_", "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 辽宁大连：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 辽宁沈阳：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 辽宁鞍山：70ms</p>", "round", "<p style=\"line-height: 10px; padding: 0 10px;\">中国澳门：50ms</p>", "#e61610", "</p>\n                            <p  style=\"line-height: 20px; padding: 0 10px;\">此区域暂时没有数据</p>\n                      </div>\n                      "];
  _0xbb85 = function () {
    return _0x546911;
  };
  return _0xbb85();
}
function copy_screenshot_tip() {
  var _0x19eef2 = _0x2cee48;
  layer.confirm(_0x19eef2(434), {
    title: "",
    anim: -1,
    isOutAnim: false,
    btnAlign: "c",
    btn: [_0x19eef2(253)],
    yes: function () {
      var _0x2372de = _0x19eef2;
      $(".layui-layer-btn0")[_0x2372de(472)](_0x2372de(266));
      $(_0x2372de(293))[_0x2372de(509)](_0x2372de(547), true);
      $(_0x2372de(293))[_0x2372de(454)]("pointer-events", _0x2372de(530));
      $(_0x2372de(293)).css(_0x2372de(263), _0x2372de(456));
      $(_0x2372de(293)).css(_0x2372de(390), _0x2372de(456));
      copy_screenshot();
    },
    cancel: function () {
      unmosaic();
    }
  });
}
function get_img(_0x489ab7) {
  var _0x52861e = _0x2cee48;
  try {
    var _0x489ab7 = _0x489ab7;
    const _0x1aa097 = convertBase64ToBlob(_0x489ab7, _0x52861e(518)),
      _0x3a7d5d = new ClipboardItem({
        "image/png": _0x1aa097
      });
    navigator.clipboard[_0x52861e(560)]([_0x3a7d5d]);
    $(_0x52861e(392)).html(_0x52861e(413));
    $("#takeScreenshot")[_0x52861e(509)](_0x52861e(547), false);
    layer[_0x52861e(398)]("<i class=\"fas fa-check-circle text-success\"></i> 截图复制成功，可以粘贴到ＱＱ、Word等编辑器");
    unmosaic();
  } catch (_0x430687) {
    console[_0x52861e(506)](_0x430687);
  }
}
function convertBase64ToBlob(_0x18b8c4, _0xaf062) {
  var _0x576204 = _0x2cee48,
    _0x1bf87a = window[_0x576204(497)](_0x18b8c4),
    _0x23e8e4 = new ArrayBuffer(_0x1bf87a[_0x576204(282)]),
    _0x4e4f62 = new Uint8Array(_0x23e8e4);
  for (var _0x4f0302 = 0; _0x4f0302 < _0x1bf87a.length; _0x4f0302++) {
    _0x4e4f62[_0x4f0302] = _0x1bf87a.charCodeAt(_0x4f0302);
  }
  return new Blob([_0x23e8e4], {
    type: _0xaf062
  });
}
function ad_hide() {
  var _0x121eef = _0x2cee48;
  $(_0x121eef(414))[_0x121eef(422)]();
  $(_0x121eef(379)).css(_0x121eef(277), "200px");
}
function mosaic() {
  var _0xc14ae4 = _0x2cee48;
  $(_0xc14ae4(450))[_0xc14ae4(511)](function (_0x28ca51, _0x4091ae) {
    var _0x254ec0 = _0xc14ae4;
    if ($(this).val() == "ip") {
      $(_0x254ec0(424))[_0x254ec0(361)](_0x254ec0(399));
      close_ip_list();
    } else {
      $(this)[_0x254ec0(303)]() == _0x254ec0(397) && $(_0x254ec0(571)).addClass(_0x254ec0(399));
    }
  });
  $(_0xc14ae4(328))[_0xc14ae4(361)](_0xc14ae4(276));
}
function unmosaic() {
  var _0x3225a2 = _0x2cee48;
  $(".real_ip").removeClass(_0x3225a2(399));
  $(_0x3225a2(571))[_0x3225a2(566)]("mosaic");
  $(_0x3225a2(328)).removeClass(_0x3225a2(276));
}
function select_screenshot(_0x2c90e2) {
  var _0xff51b7 = _0x2cee48;
  layer[_0xff51b7(423)]({
    type: 1,
    anim: -1,
    title: "",
    isOutAnim: false,
    closeBtn: 2,
    area: _0xff51b7(391),
    content: _0xff51b7(300) + _0x2c90e2 + _0xff51b7(267)
  });
}
function isip(_0x4e3ada) {
  var _0x2cf9eb = _0x2cee48,
    _0xff5dc5 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return _0xff5dc5[_0x2cf9eb(421)](_0x4e3ada);
}
$(function () {
  var _0x46c85c = _0x2cee48,
    _0x1b6ec9;
  $(_0x46c85c(392))[_0x46c85c(591)](function () {
    var _0x32c167 = _0x46c85c;
    _0x1b6ec9 = layer[_0x32c167(389)]("1、将关键数据截图并同时去除广告<br>2、可以选择指定数据进行打码处理<br>3、首次生成截图可能需要较长时间", _0x32c167(392), {
      tips: [1, _0x32c167(490)],
      time: 0,
      anim: -1,
      tipsMore: true,
      isOutAnim: false
    });
  });
  $(_0x46c85c(392))[_0x46c85c(572)](function () {
    var _0x1d6a71 = _0x46c85c;
    layer[_0x1d6a71(410)](_0x1b6ec9);
  });
  $(_0x46c85c(553))[_0x46c85c(536)](_0x46c85c(377), function (_0x437ce1) {
    var _0x2c8528 = _0x46c85c;
    _0x437ce1[_0x2c8528(365)] == "13" && check_form(default_enter);
  });
});
function isipv4(_0x4a8ccc) {
  var _0x39e3be = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return _0x39e3be.test(_0x4a8ccc);
}
