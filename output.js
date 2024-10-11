//Fri Oct 11 2024 06:47:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
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
    label: "<=50ms",
    color: "#24aa1d"
  }, {
    start: 51,
    end: 100,
    label: "51ms-100ms",
    color: "#42dd3f"
  }, {
    start: 101,
    end: 200,
    label: "101ms-200ms",
    color: "#bef663"
  }, {
    start: 201,
    end: 250,
    label: "201ms-250ms",
    color: "#f6ed44"
  }, {
    start: 251,
    end: 3000,
    label: ">250ms",
    color: "#f69833"
  }, {
    start: 3001,
    end: 99999,
    label: "超时",
    color: "#e61610"
  }];
  option = {
    title: [{
      text: "",
      top: "5px",
      left: "15px",
      x: "left",
      subtext: "{logo|}",
      subtextStyle: {
        fontSize: 12,
        color: "#333",
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
      formatter: function (_0x1506bc) {
        if (isNaN(_0x1506bc.value)) {
          return "\n                        <div>\n                            <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">" + _0x1506bc.name + "</p>\n                            <p  style=\"line-height: 20px; padding: 0 10px;\">此区域暂时没有数据</p>\n                      </div>\n                      ";
        }
        if (_0x1506bc.value == 0) {
          province_value = "<1ms";
        } else {
          _0x1506bc.value > 3000 ? province_value = "<font color=#e61610>超时</font>" : province_value = _0x1506bc.value + "ms";
        }
        return "\n                    <div>\n                        <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">" + _0x1506bc.name + "</p>\n                        <p  style=\"line-height: 20px; padding: 0 10px;\">最快响应：" + province_value + "</p>\n                        " + _0x1506bc.data.datas + "\n                  </div>\n                  ";
      }
    },
    visualMap: {
      top: "380px",
      show: true,
      min: 0,
      max: 99999,
      x: "5%",
      y: "70%",
      hoverLink: false,
      splitList: splitList,
      outOfRange: {
        color: "#eee"
      }
    },
    series: [{
      z: 1,
      name: "",
      type: "map",
      mapType: "china",
      backgroundColor: "#ccc",
      mapLocation: {
        x: "center",
        y: "top"
      },
      emphasis: {
        show: true,
        textStyle: {
          color: "#70ccef"
        }
      },
      top: "60px",
      hoverable: false,
      roam: false,
      width: "95%",
      itemStyle: {
        normal: {
          label: {
            show: false,
            textStyle: {
              color: "rgb(249, 249, 249)"
            }
          },
          areaStyle: {
            color: "#fff4e7"
          },
          borderColor: "rgba(255, 255, 255, .5)",
          borderWidth: 1,
          shadowColor: "rgba(255, 255, 255, .5)"
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
      coordinateSystem: "geo",
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
  china_map = echarts.init(document.getElementById("china_map"));
  china_map.on("click", function (_0x6867f1) {
    if (_0x6867f1.name == "") {
      return false;
    }
    $("input[name='filter_line']").prop("checked", false);
    $(".filter_ip").text(_0x6867f1.name);
    $(".label_filter_ip").show();
    filter_map_count = 0;
    $(".node_tr").each(function () {
      $(this).children(".text-left").text().indexOf(_0x6867f1.name) != -1 ? (filter_map_count++, $(this).show()) : $(this).hide();
    });
    $(".show_record").text(filter_map_count);
    $("html,body").animate({
      scrollTop: $("#return_info").offset().top
    }, 300);
  });
  china_map.setOption(option);
  china_map.resize();
}
var marker_arr = [{
  name: "北京",
  x_y: "420,228",
  show: false
}, {
  name: "天津",
  x_y: "429,240",
  show: false
}, {
  name: "上海",
  x_y: "468,340",
  show: false
}, {
  name: "重庆",
  x_y: "338,358",
  show: false
}, {
  name: "河北",
  x_y: "410,250",
  show: false
}, {
  name: "河南",
  x_y: "390,305",
  show: false
}, {
  name: "云南",
  x_y: "280,425",
  show: false
}, {
  name: "辽宁",
  x_y: "485,210",
  show: false
}, {
  name: "黑龙江",
  x_y: "530,140",
  show: false
}, {
  name: "湖南",
  x_y: "373,382",
  show: false
}, {
  name: "安徽",
  x_y: "427,333",
  show: false
}, {
  name: "山东",
  x_y: "435,275",
  show: false
}, {
  name: "新疆",
  x_y: "125,225",
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
  x_y: "411,382",
  show: false
}, {
  name: "湖北",
  x_y: "383,342",
  show: false
}, {
  name: "广西",
  x_y: "349,433",
  show: false
}, {
  name: "甘肃",
  x_y: "225,227",
  show: false
}, {
  name: "山西",
  x_y: "380,260",
  show: false
}, {
  name: "内蒙古",
  x_y: "340,220",
  show: false
}, {
  name: "陕西",
  x_y: "342,307",
  show: false
}, {
  name: "吉林",
  x_y: "510,182",
  show: false
}, {
  name: "福建",
  x_y: "436,404",
  show: false
}, {
  name: "贵州",
  x_y: "329,396",
  show: false
}, {
  name: "广东",
  x_y: "392,437",
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
  x_y: "290,346",
  show: false
}, {
  name: "宁夏",
  x_y: "323,263",
  show: false
}, {
  name: "海南",
  x_y: "357,491",
  show: false
}, {
  name: "台湾",
  x_y: "462,433",
  show: false
}, {
  name: "香港",
  x_y: "399,451",
  show: false
}, {
  name: "澳门",
  x_y: "0,0",
  show: false
}, {
  name: "南海诸岛",
  x_y: "0,0",
  show: false
}];
function refreshData() {
  marker_list = marker_arr.filter(function (_0x1e54cc) {
    return _0x1e54cc.show === true;
  }).filter(function (_0x9e6851) {
    var _0x42a44f = mydata.find(_0x2241c7 => _0x2241c7.name == _0x9e6851.name);
    return _0x42a44f.value !== 5000;
  }).map(function (_0x323530) {
    var [_0x47a4b1, _0x4a3536] = _0x323530.x_y.split(",").map(Number),
      _0x48d9f6 = "#fff";
    return {
      value: [_0x47a4b1, _0x4a3536, _0x48d9f6]
    };
  });
  option.series[0].data = mydata;
  marker_switch && (option.series[1].data = marker_list);
  china_map.setOption(option);
}
function str_num(_0x3ec09c, _0x3cc382) {
  return _0x3ec09c.split(_0x3cc382).length - 1;
}
function left(_0x5a16af, _0x4c1cfc) {
  return _0x4c1cfc > 0 ? _0x5a16af.substring(0, _0x4c1cfc) : null;
}
function right(_0x18630e, _0x9a2dc4) {
  return _0x18630e.length - _0x9a2dc4 >= 0 && _0x18630e.length >= 0 && _0x18630e.length - _0x9a2dc4 <= _0x18630e.length ? _0x18630e.substring(_0x18630e.length - _0x9a2dc4, _0x18630e.length) : null;
}
function tcping_many(_0x3b0df1, _0x876c, _0x26bf17, _0x54737e, _0x3cff00) {
  if ($("#address_" + _0x54737e).text() == "--") {
    if (_0x3b0df1 != "Not Found") {
      $("#real_ip_" + _0x54737e).text(_0x3b0df1 + ":" + _0x876c);
      $("#address_" + _0x54737e).text(_0x26bf17);
      $("#address_" + _0x54737e).attr("title", _0x26bf17);
      $("#hover_button_" + _0x54737e).attr("style", "");
    } else {
      $("#real_ip_" + _0x54737e).html("<span class=\"text-danger\">解析失败</span>");
      return false;
    }
  }
  var _0x2b5751 = parseInt($(".node_tr[node=" + _0x54737e + "]").attr("send_num")),
    _0x3cff00 = parseInt(_0x3cff00);
  _0x2b5751 = _0x2b5751 + 1;
  $(".node_tr[node=" + _0x54737e + "]").attr("send_num", _0x2b5751);
  $("#send_" + _0x54737e).text(_0x2b5751);
  _0x3cff00 != -1 && $(".node_tr[node=" + _0x54737e + "]").attr("all_ping", parseInt($(".node_tr[node=" + _0x54737e + "]").attr("all_ping")) + _0x3cff00);
  var _0x11bdd4 = parseInt($(".node_tr[node=" + _0x54737e + "]").attr("all_ping"));
  _0x3cff00 == "-1" && $(".node_tr[node=" + _0x54737e + "]").attr("loss_num", parseInt($(".node_tr[node=" + _0x54737e + "]").attr("loss_num")) + 1);
  var _0x159c26 = parseInt($(".node_tr[node=" + _0x54737e + "]").attr("loss_num"));
  if (_0x2b5751 == "1" && _0x3cff00 != "-1") {
    $("#loss_" + _0x54737e).text("0%");
  } else {
    if (_0x2b5751 == "1" && _0x3cff00 == "-1") {
      $("#loss_" + _0x54737e).text("100%");
    } else {
      _0x159c26 == "0" ? $("#loss_" + _0x54737e).text("0%") : $("#loss_" + _0x54737e).text(GetPercent(_0x159c26, _0x2b5751));
    }
  }
  if (_0x3cff00 == 0) {
    $("#last_ping_" + _0x54737e).text("<1");
  } else {
    _0x3cff00 == -1 ? $("#last_ping_" + _0x54737e).html("<span class=\"text-danger\">超时</span>") : $("#last_ping_" + _0x54737e).text(_0x3cff00);
  }
  if (_0x11bdd4 == "0") {
    _0x2b5751 != "1" && _0x3cff00 != -1 ? $("#avg_ping_" + _0x54737e).text("<1") : $("#avg_ping_" + _0x54737e).text("--");
  } else {
    var _0x1d6da6 = parseInt(_0x11bdd4 / (_0x2b5751 - _0x159c26));
    _0x1d6da6 == 0 ? $("#avg_ping_" + _0x54737e).text("<1") : $("#avg_ping_" + _0x54737e).text(_0x1d6da6);
  }
  _0x2b5751 == "1" || $("#best_ping_" + _0x54737e).text() == "--" ? _0x3cff00 != "-1" ? _0x3cff00 == 0 ? $("#best_ping_" + _0x54737e).text("<1") : $("#best_ping_" + _0x54737e).text(_0x3cff00) : $("#best_ping_" + _0x54737e).text("--") : _0x3cff00 < parseInt($("#best_ping_" + _0x54737e).text()) && _0x3cff00 != "-1" && (_0x3cff00 == 0 ? $("#best_ping_" + _0x54737e).text("<1") : $("#best_ping_" + _0x54737e).text(_0x3cff00));
  _0x2b5751 == "1" || $("#worst_ping_" + _0x54737e).text() == "--" ? _0x3cff00 != "-1" ? _0x3cff00 == 0 ? $("#worst_ping_" + _0x54737e).text("<1") : $("#worst_ping_" + _0x54737e).text(_0x3cff00) : $("#worst_ping_" + _0x54737e).text("--") : _0x3cff00 > parseInt($("#worst_ping_" + _0x54737e).text()) && (_0x3cff00 == 0 ? $("#worst_ping_" + _0x54737e).text("<1") : $("#worst_ping_" + _0x54737e).text(_0x3cff00));
  update_canvas(_0x54737e, _0x2b5751, _0x3cff00);
}
function sortByDescNum(_0x7d3434, _0x257221) {
  _0x7d3434.sort(function (_0x639f33, _0x271e56) {
    return _0x271e56[_0x257221] - _0x639f33[_0x257221];
  });
  return _0x7d3434;
}
function filter_ip(_0x132c95) {
  $(".filter_ip").text(_0x132c95);
  $(".label_filter_ip").show();
  $("input[name='filter_line']").prop("checked", false);
  var _0x2fa761 = 0;
  $(".node_tr").each(function () {
    $("#real_ip_" + $(this).attr("node")).text() == _0x132c95 + ":" + host_port || $("#real_ip_" + $(this).attr("node")).text() == _0x132c95 ? (_0x2fa761++, $(this).show()) : $(this).hide();
  });
  $(".show_record").text(_0x2fa761);
}
$("input[name='filter_line']").click(function () {
  $(".label_filter_ip").hide();
  var _0x21c2a3 = $(this).val(),
    _0x5645af = 0,
    _0x173872 = 0,
    _0x1a07e9 = 0,
    _0x4de9c5 = 0,
    _0x33c4bc = 0,
    _0x2bd2b2 = 0,
    _0x40f739 = 0;
  $(".node_tr").each(function () {
    _0x5645af++;
    if ($(this).attr("node_type") == _0x21c2a3 || _0x21c2a3 == "all") {
      $(this).show();
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
    _0x21c2a3 == "6" && $(this).attr("time_out") == "true" && ($(this).show(), _0x40f739++);
    if (_0x21c2a3 == "all") {
      $(".show_record").text(_0x5645af);
    } else {
      if (_0x21c2a3 == "1") {
        $(".show_record").text(_0x173872);
      } else {
        if (_0x21c2a3 == "2") {
          $(".show_record").text(_0x1a07e9);
        } else {
          if (_0x21c2a3 == "3") {
            $(".show_record").text(_0x4de9c5);
          } else {
            if (_0x21c2a3 == "4") {
              $(".show_record").text(_0x33c4bc);
            } else {
              if (_0x21c2a3 == "5") {
                $(".show_record").text(_0x2bd2b2);
              } else {
                _0x21c2a3 == "6" && $(".show_record").text(_0x40f739);
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
      _0x3fbdbe.apply(_0x2540cc, _0x49f02a);
    }, _0xae030f);
  };
}
const refreshData_slow = debounce(function () {
  refreshData();
}, 0);
function tcping_once(_0x1f2dc1) {
  var _0x57d8fc = _0x1f2dc1.node_id;
  complete_node_num = complete_node_num + 1;
  if (complete_node_num > check_node_num) {
    return false;
  }
  complete_node_num == check_node_num && $(".checking").hide();
  var _0x324527 = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width:" + GetPercent(complete_node_num, check_node_num) + ";\" aria-valuenow=\"" + complete_node_num + "\" aria-valuemin=\"0\" aria-valuemax=\"" + check_node_num + "\">" + GetPercent(complete_node_num, check_node_num) + "</div>";
  $("#complete_progress").html(_0x324527);
  if (isip(_0x1f2dc1.ip)) {
    $("#real_ip_" + _0x57d8fc).text(_0x1f2dc1.ip + ":" + host_port);
    $("#address_" + _0x57d8fc).text(_0x1f2dc1.address);
    $("#address_" + _0x57d8fc).attr("title", _0x1f2dc1.address);
    $("#hover_button_" + _0x57d8fc).attr("style", "");
    ip = _0x1f2dc1.ip + ":" + host_port;
    var _0x3ae913 = parseInt(_0x1f2dc1.result);
    if (_0x3ae913 == 0) {
      $("#ping_" + _0x57d8fc).html("<1ms");
    } else {
      _0x3ae913 == -1 ? ($("#ping_" + _0x57d8fc).html("<span class=\"text-danger\">超时</span>"), $(".node_tr[node='" + _0x57d8fc + "']").attr("time_out", "true"), time_out_num = time_out_num + 1, $(".time_out").text(time_out_num), $(".time_out").show()) : $("#ping_" + _0x57d8fc).html(_0x3ae913 + "ms");
    }
  } else {
    $("#real_ip_" + _0x57d8fc).html("<span class=\"text-danger\">解析失败</span>");
    $(".node_tr[node='" + _0x57d8fc + "']").attr("time_out", "true");
    time_out_num = time_out_num + 1;
    $(".time_out").text(time_out_num);
    $(".time_out").show();
  }
  ipv4_list_arr.push(_0x1f2dc1);
  var _0x18a9d4 = 100 / ipv4_list_arr.length;
  let _0x161445 = {};
  ipv4_list_arr.forEach(_0x48b1b6 => {
    _0x161445[_0x48b1b6.ip] = _0x161445[_0x48b1b6.ip] || [];
    _0x48b1b6.pre = _0x18a9d4;
    _0x161445[_0x48b1b6.ip].push(_0x48b1b6);
  });
  var _0x2c7db0 = [];
  Object.keys(_0x161445).forEach(function (_0x534a55) {
    let _0x468515 = {
      ip: _0x534a55
    };
    _0x468515.ip = _0x534a55;
    _0x468515.pre = (_0x18a9d4 * _0x161445[_0x534a55].length).toFixed(2);
    _0x2c7db0.push(_0x468515);
  });
  _0x2c7db0 = sortByDescNum(_0x2c7db0, "pre");
  $(".ip_list").html("");
  $(".copy_ip").attr("copy-text", "");
  for (var _0x16cd0e = 0; _0x16cd0e < _0x2c7db0.length; _0x16cd0e++) {
    if (isip(_0x2c7db0[_0x16cd0e].ip)) {
      var _0x49dd3d = _0x2c7db0[_0x16cd0e].ip;
    } else {
      var _0x49dd3d = "解析失败";
    }
    $(".ip_list").append(" <a title=\"点击筛选\" class=\"pointer noselect\" onclick=\"filter_ip('" + _0x49dd3d + "')\"><li><span class=\"real_ip ml-3\">" + _0x49dd3d + "</span><span class=\"text-primary float-right mr-3\">" + _0x2c7db0[_0x16cd0e].pre + "%</span></li></a>");
    $(".copy_ip").attr("copy-text") == "" ? $(".copy_ip").attr("copy-text", _0x49dd3d) : $(".copy_ip").attr("copy-text", $(".copy_ip").attr("copy-text") + "\n" + _0x49dd3d);
  }
  $("#ipv4_num").text(_0x2c7db0.length);
  if (_0x1f2dc1.province != 99) {
    _0x1f2dc1.result == "-1" && china_fast[_0x1f2dc1.province] != "5000" && (marker_arr[_0x1f2dc1.province].show = true);
    isip(_0x1f2dc1.ip) == false && china_fast[_0x1f2dc1.province] != "5000" && (marker_arr[_0x1f2dc1.province].show = true);
    if (_0x1f2dc1.result != "-1" && isip(_0x1f2dc1.ip) == true && china_fast[_0x1f2dc1.province] > parseInt(_0x1f2dc1.result)) {
      china_fast[_0x1f2dc1.province] = parseInt(_0x1f2dc1.result);
    } else {
      (_0x1f2dc1.result == "-1" && china_fast[_0x1f2dc1.province] == "9999" || isip(_0x1f2dc1.ip) == false && china_fast[_0x1f2dc1.province] == "9999") && (china_fast[_0x1f2dc1.province] = 5000);
    }
    if (_0x1f2dc1.line == "1") {
      var _0x38e8dc = "<font color=#9ccc65>[电信]</font>",
        _0x272403 = _0x1f2dc1.name.replace("电信", "");
    } else {
      if (_0x1f2dc1.line == "2") {
        var _0x38e8dc = "<font color=#ffba57>[联通]</font>",
          _0x272403 = _0x1f2dc1.name.replace("联通", "");
      } else {
        if (_0x1f2dc1.line == "3") {
          var _0x38e8dc = "<font color=#00acc1>[移动]</font>",
            _0x272403 = _0x1f2dc1.name.replace("移动", "");
        } else {
          if (_0x1f2dc1.line == "5") {
            var _0x38e8dc = "",
              _0x272403 = _0x1f2dc1.name.replace("海外", "");
          }
        }
      }
    }
    if (_0x1f2dc1.result == "0") {
      var _0x45c4bd = "<1ms";
    } else {
      if (parseInt(_0x1f2dc1.result) < 1) {
        var _0x45c4bd = "<font color=#e61610>超时</font>";
      } else {
        if (isip(_0x1f2dc1.ip) == false) {
          var _0x45c4bd = "<font color=#e61610>解析失败</font>";
        } else {
          var _0x45c4bd = _0x1f2dc1.result + "ms";
        }
      }
    }
    china_data[_0x1f2dc1.province] == "" ? china_data[_0x1f2dc1.province] = "<p style=\"line-height: 10px; padding: 0 10px;\">" + _0x38e8dc + " " + _0x272403 + "：" + _0x45c4bd + "</p>" : china_data[_0x1f2dc1.province] = china_data[_0x1f2dc1.province] + "<p style=\"line-height: 10px; padding: 0 10px;\">" + _0x38e8dc + " " + _0x272403 + "：" + _0x45c4bd + "</p>";
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
                        name: "黑龙江",
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
                                                name: "内蒙古",
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
    china_fast[_0x16cd0e] != 9999 ? mydata[mydata.length] = _0x31b0fb : mydata[mydata.length] = {
      name: "北京"
    };
  }
  refreshData_slow();
  if (isip(_0x1f2dc1.ip) == false) {
    return false;
  }
  if (_0x1f2dc1.province != 99 && _0x1f2dc1.result != "-1") {
    china_node_num = china_node_num + 1;
    china_allping = china_allping + parseInt(_0x1f2dc1.result);
    china_fastping > parseInt(_0x1f2dc1.result) && (china_fastping = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#china_fast").text(_0x1f2dc1.name + " <1ms") : $("#china_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    china_slow < parseInt(_0x1f2dc1.result) && (china_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#china_slow").text(_0x1f2dc1.name + " <1ms") : $("#china_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x5983b8 = parseInt(china_allping / china_node_num);
    _0x5983b8 == 0 ? $("#china_avg").text("<1ms") : $("#china_avg").text(_0x5983b8 + "ms");
  }
  if (_0x1f2dc1.line == "1" && _0x1f2dc1.result != "-1") {
    ct_node_num = ct_node_num + 1;
    ct_allping = ct_allping + parseInt(_0x1f2dc1.result);
    ct_fast > parseInt(_0x1f2dc1.result) && (ct_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#ct_fast").text(_0x1f2dc1.name + " <1ms") : $("#ct_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    ct_slow < parseInt(_0x1f2dc1.result) && (ct_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#ct_slow").text(_0x1f2dc1.name + " <1ms") : $("#ct_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x1db4b6 = parseInt(ct_allping / ct_node_num);
    _0x1db4b6 == 0 ? $("#ct_avg").text("<1ms") : $("#ct_avg").text(_0x1db4b6 + "ms");
  }
  if (_0x1f2dc1.line == "2" && _0x1f2dc1.result != "-1") {
    cu_node_num = cu_node_num + 1;
    cu_allping = cu_allping + parseInt(_0x1f2dc1.result);
    cu_fast > parseInt(_0x1f2dc1.result) && (cu_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#cu_fast").text(_0x1f2dc1.name + " <1ms") : $("#cu_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    cu_slow < parseInt(_0x1f2dc1.result) && (cu_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#cu_slow").text(_0x1f2dc1.name + " <1ms") : $("#cu_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x51f3ce = parseInt(cu_allping / cu_node_num);
    _0x51f3ce == 0 ? $("#cu_avg").text("<1ms") : $("#cu_avg").text(_0x51f3ce + "ms");
  }
  if (_0x1f2dc1.line == "3" && _0x1f2dc1.result != "-1") {
    cm_node_num = cm_node_num + 1;
    cm_allping = cm_allping + parseInt(_0x1f2dc1.result);
    cm_fast > parseInt(_0x1f2dc1.result) && (cm_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#cm_fast").text(_0x1f2dc1.name + " <1ms") : $("#cm_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    cm_slow < parseInt(_0x1f2dc1.result) && (cm_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#cm_slow").text(_0x1f2dc1.name + " <1ms") : $("#cm_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x12d9c5 = parseInt(cm_allping / cm_node_num);
    _0x12d9c5 == 0 ? $("#cm_avg").text("<1ms") : $("#cm_avg").text(_0x12d9c5 + "ms");
  }
  if (_0x1f2dc1.region == "1" && _0x1f2dc1.result != "-1") {
    huadong_node_num = huadong_node_num + 1;
    huadong_allping = huadong_allping + parseInt(_0x1f2dc1.result);
    huadong_fast > parseInt(_0x1f2dc1.result) && (huadong_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#huadong_fast").text(_0x1f2dc1.name + " <1ms") : $("#huadong_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    huadong_slow < parseInt(_0x1f2dc1.result) && (huadong_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#huadong_slow").text(_0x1f2dc1.name + " <1ms") : $("#huadong_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x14f7f0 = parseInt(huadong_allping / huadong_node_num);
    _0x14f7f0 == 0 ? $("#huadong_avg").text("<1ms") : $("#huadong_avg").text(_0x14f7f0 + "ms");
  }
  if (_0x1f2dc1.region == "2" && _0x1f2dc1.result != "-1") {
    huanan_node_num = huanan_node_num + 1;
    huanan_allping = huanan_allping + parseInt(_0x1f2dc1.result);
    huanan_fast > parseInt(_0x1f2dc1.result) && (huanan_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#huanan_fast").text(_0x1f2dc1.name + " <1ms") : $("#huanan_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    huanan_slow < parseInt(_0x1f2dc1.result) && (huanan_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#huanan_slow").text(_0x1f2dc1.name + " <1ms") : $("#huanan_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x189b11 = parseInt(huanan_allping / huanan_node_num);
    _0x189b11 == 0 ? $("#huanan_avg").text("<1ms") : $("#huanan_avg").text(_0x189b11 + "ms");
  }
  if (_0x1f2dc1.region == "3" && _0x1f2dc1.result != "-1") {
    huazhong_node_num = huazhong_node_num + 1;
    huazhong_allping = huazhong_allping + parseInt(_0x1f2dc1.result);
    huazhong_fast > parseInt(_0x1f2dc1.result) && (huazhong_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#huazhong_fast").text(_0x1f2dc1.name + " <1ms") : $("#huazhong_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    huazhong_slow < parseInt(_0x1f2dc1.result) && (huazhong_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#huazhong_slow").text(_0x1f2dc1.name + " <1ms") : $("#huazhong_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x595aa5 = parseInt(huazhong_allping / huazhong_node_num);
    _0x595aa5 == 0 ? $("#huazhong_avg").text("<1ms") : $("#huazhong_avg").text(_0x595aa5 + "ms");
  }
  if (_0x1f2dc1.region == "4" && _0x1f2dc1.result != "-1") {
    huabei_node_num = huabei_node_num + 1;
    huabei_allping = huabei_allping + parseInt(_0x1f2dc1.result);
    huabei_fast > parseInt(_0x1f2dc1.result) && (huabei_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#huabei_fast").text(_0x1f2dc1.name + " <1ms") : $("#huabei_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    huabei_slow < parseInt(_0x1f2dc1.result) && (huabei_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#huabei_slow").text(_0x1f2dc1.name + " <1ms") : $("#huabei_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x522a52 = parseInt(huabei_allping / huabei_node_num);
    _0x522a52 == 0 ? $("#huabei_avg").text("<1ms") : $("#huabei_avg").text(_0x522a52 + "ms");
  }
  if (_0x1f2dc1.region == "5" && _0x1f2dc1.result != "-1") {
    xinan_node_num = xinan_node_num + 1;
    xinan_allping = xinan_allping + parseInt(_0x1f2dc1.result);
    xinan_fast > parseInt(_0x1f2dc1.result) && (xinan_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#xinan_fast").text(_0x1f2dc1.name + " <1ms") : $("#xinan_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    xinan_slow < parseInt(_0x1f2dc1.result) && (xinan_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#xinan_slow").text(_0x1f2dc1.name + " <1ms") : $("#xinan_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x222f6d = parseInt(xinan_allping / xinan_node_num);
    _0x222f6d == 0 ? $("#xinan_avg").text("<1ms") : $("#xinan_avg").text(_0x222f6d + "ms");
  }
  if (_0x1f2dc1.region == "6" && _0x1f2dc1.result != "-1") {
    xibei_node_num = xibei_node_num + 1;
    xibei_allping = xibei_allping + parseInt(_0x1f2dc1.result);
    xibei_fast > parseInt(_0x1f2dc1.result) && (xibei_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#xibei_fast").text(_0x1f2dc1.name + " <1ms") : $("#xibei_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    xibei_slow < parseInt(_0x1f2dc1.result) && (xibei_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#xibei_slow").text(_0x1f2dc1.name + " <1ms") : $("#xibei_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x1c657c = parseInt(xibei_allping / xibei_node_num);
    _0x1c657c == 0 ? $("#xibei_avg").text("<1ms") : $("#xibei_avg").text(_0x1c657c + "ms");
  }
  if (_0x1f2dc1.region == "7" && _0x1f2dc1.result != "-1") {
    dongbei_node_num = dongbei_node_num + 1;
    dongbei_allping = dongbei_allping + parseInt(_0x1f2dc1.result);
    dongbei_fast > parseInt(_0x1f2dc1.result) && (dongbei_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#dongbei_fast").text(_0x1f2dc1.name + " <1ms") : $("#dongbei_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    dongbei_slow < parseInt(_0x1f2dc1.result) && (dongbei_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#dongbei_slow").text(_0x1f2dc1.name + " <1ms") : $("#dongbei_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x29da84 = parseInt(dongbei_allping / dongbei_node_num);
    _0x29da84 == 0 ? $("#dongbei_avg").text("<1ms") : $("#dongbei_avg").text(_0x29da84 + "ms");
  }
  if (_0x1f2dc1.region == "8" && _0x1f2dc1.result != "-1") {
    gangaotai_node_num = gangaotai_node_num + 1;
    gangaotai_allping = gangaotai_allping + parseInt(_0x1f2dc1.result);
    gangaotai_fast > parseInt(_0x1f2dc1.result) && (gangaotai_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#gangaotai_fast").text(_0x1f2dc1.name + " <1ms") : $("#gangaotai_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    gangaotai_slow < parseInt(_0x1f2dc1.result) && (gangaotai_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#gangaotai_slow").text(_0x1f2dc1.name + " <1ms") : $("#gangaotai_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x5231d0 = parseInt(gangaotai_allping / gangaotai_node_num);
    _0x5231d0 == 0 ? $("#gangaotai_avg").text("<1ms") : $("#gangaotai_avg").text(_0x5231d0 + "ms");
  }
  if (_0x1f2dc1.province == "99" && _0x1f2dc1.result != "-1") {
    global_node_num = global_node_num + 1;
    global_allping = global_allping + parseInt(_0x1f2dc1.result);
    global_fast > parseInt(_0x1f2dc1.result) && (global_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#global_fast").text(_0x1f2dc1.name + " <1ms") : $("#global_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    global_slow < parseInt(_0x1f2dc1.result) && (global_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#global_slow").text(_0x1f2dc1.name + " <1ms") : $("#global_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x497f07 = parseInt(global_allping / global_node_num);
    _0x497f07 == 0 ? $("#global_avg").text("<1ms") : $("#global_avg").text(_0x497f07 + "ms");
  }
  if (_0x1f2dc1.region == "9" && _0x1f2dc1.result != "-1") {
    asia_node_num = asia_node_num + 1;
    asia_allping = asia_allping + parseInt(_0x1f2dc1.result);
    asia_fast > parseInt(_0x1f2dc1.result) && (asia_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#asia_fast").text(_0x1f2dc1.name + " <1ms") : $("#asia_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    asia_slow < parseInt(_0x1f2dc1.result) && (asia_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#asia_slow").text(_0x1f2dc1.name + " <1ms") : $("#asia_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x4aa558 = parseInt(asia_allping / asia_node_num);
    _0x4aa558 == 0 ? $("#asia_avg").text("<1ms") : $("#asia_avg").text(_0x4aa558 + "ms");
  }
  if (_0x1f2dc1.region == "10" && _0x1f2dc1.result != "-1") {
    europe_node_num = europe_node_num + 1;
    europe_allping = europe_allping + parseInt(_0x1f2dc1.result);
    europe_fast > parseInt(_0x1f2dc1.result) && (europe_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#europe_fast").text(_0x1f2dc1.name + " <1ms") : $("#europe_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    europe_slow < parseInt(_0x1f2dc1.result) && (europe_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#europe_slow").text(_0x1f2dc1.name + " <1ms") : $("#europe_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x577e69 = parseInt(europe_allping / europe_node_num);
    _0x577e69 == 0 ? $("#europe_avg").text("<1ms") : $("#europe_avg").text(_0x577e69 + "ms");
  }
  if (_0x1f2dc1.region == "11" && _0x1f2dc1.result != "-1") {
    north_node_num = north_node_num + 1;
    north_allping = north_allping + parseInt(_0x1f2dc1.result);
    north_fast > parseInt(_0x1f2dc1.result) && (north_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#north_fast").text(_0x1f2dc1.name + " <1ms") : $("#north_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    north_slow < parseInt(_0x1f2dc1.result) && (north_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#north_slow").text(_0x1f2dc1.name + " <1ms") : $("#north_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x28d472 = parseInt(north_allping / north_node_num);
    _0x28d472 == 0 ? $("#north_avg").text("<1ms") : $("#north_avg").text(_0x28d472 + "ms");
  }
  if (_0x1f2dc1.region == "12" && _0x1f2dc1.result != "-1") {
    south_node_num = south_node_num + 1;
    south_allping = south_allping + parseInt(_0x1f2dc1.result);
    south_fast > parseInt(_0x1f2dc1.result) && (south_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#south_fast").text(_0x1f2dc1.name + " <1ms") : $("#south_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    south_slow < parseInt(_0x1f2dc1.result) && (south_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#south_slow").text(_0x1f2dc1.name + " <1ms") : $("#south_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x44edd9 = parseInt(south_allping / south_node_num);
    _0x44edd9 == 0 ? $("#south_avg").text("<1ms") : $("#south_avg").text(_0x44edd9 + "ms");
  }
  if (_0x1f2dc1.region == "13" && _0x1f2dc1.result != "-1") {
    africa_node_num = africa_node_num + 1;
    africa_allping = africa_allping + parseInt(_0x1f2dc1.result);
    africa_fast > parseInt(_0x1f2dc1.result) && (africa_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#africa_fast").text(_0x1f2dc1.name + " <1ms") : $("#africa_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    africa_slow < parseInt(_0x1f2dc1.result) && (africa_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#africa_slow").text(_0x1f2dc1.name + " <1ms") : $("#africa_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x40954e = parseInt(africa_allping / africa_node_num);
    _0x40954e == 0 ? $("#africa_avg").text("<1ms") : $("#africa_avg").text(_0x40954e + "ms");
  }
  if (_0x1f2dc1.region == "14" && _0x1f2dc1.result != "-1") {
    oceania_node_num = oceania_node_num + 1;
    oceania_allping = oceania_allping + parseInt(_0x1f2dc1.result);
    oceania_fast > parseInt(_0x1f2dc1.result) && (oceania_fast = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#oceania_fast").text(_0x1f2dc1.name + " <1ms") : $("#oceania_fast").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    oceania_slow < parseInt(_0x1f2dc1.result) && (oceania_slow = _0x1f2dc1.result, _0x1f2dc1.result == 0 ? $("#oceania_slow").text(_0x1f2dc1.name + " <1ms") : $("#oceania_slow").text(_0x1f2dc1.name + " " + _0x1f2dc1.result + "ms"));
    var _0x11b13f = parseInt(oceania_allping / oceania_node_num);
    _0x11b13f == 0 ? $("#oceania_avg").text("<1ms") : $("#oceania_avg").text(_0x11b13f + "ms");
  }
}
function GetPercent(_0x64da50, _0x4708d3) {
  _0x64da50 = parseFloat(_0x64da50);
  _0x4708d3 = parseFloat(_0x4708d3);
  if (isNaN(_0x64da50) || isNaN(_0x4708d3)) {
    return "-";
  }
  return _0x4708d3 <= 0 ? "0%" : Math.round(_0x64da50 / _0x4708d3 * 100) + "%";
}
function check_complete() {
  var _0x2397e5 = true;
  $.each($("tr.node_tr"), function () {
    var _0x1f15bd = $(this).attr("node");
    if ($("#send_" + _0x1f15bd).text() != "100") {
      _0x2397e5 = false;
      return false;
    }
  });
  return _0x2397e5;
}
function update_canvas(_0x6929ab, _0xe8d816, _0x4c4760) {
  var _0x441448 = document.getElementById("canvas_" + _0x6929ab),
    _0xc7004e = _0x441448.getContext("2d"),
    _0xe8d816 = _0xe8d816 - 1;
  if (_0x4c4760 >= 350) {
    _0xc7004e.fillStyle = "orange";
  } else {
    _0x4c4760 == "-1" ? _0xc7004e.fillStyle = "red" : _0xc7004e.fillStyle = "green";
  }
  if (_0x4c4760 == "-1") {
    var _0x46c5c7 = 20;
  } else {
    var _0x46c5c7 = parseInt(_0x4c4760 / 15);
  }
  _0x46c5c7 < 1 && (_0x46c5c7 = 1);
  var _0x2acf76 = _0xe8d816 * 2,
    _0xfc488e = 20 - _0x46c5c7;
  _0xc7004e.fillRect(_0x2acf76, _0xfc488e, 2, _0x46c5c7);
}
function check_post(_0x373f02, _0x40dd04) {
  var _0x32b613 = document.createElement("form");
  _0x32b613.action = _0x373f02;
  _0x32b613.method = "post";
  _0x32b613.style.display = "none";
  for (var _0x2dd740 in _0x40dd04) {
    var _0x809080 = document.createElement("textarea");
    _0x809080.name = _0x2dd740;
    _0x809080.value = _0x40dd04[_0x2dd740];
    _0x32b613.appendChild(_0x809080);
  }
  document.body.appendChild(_0x32b613);
  _0x32b613.submit();
  return _0x32b613;
}
function check_post_blank(_0x2a02d8, _0x480aab) {
  var _0x41fa0d = document.createElement("form");
  _0x41fa0d.action = _0x2a02d8;
  _0x41fa0d.method = "post";
  _0x41fa0d.target = Math.random() + "_blank";
  _0x41fa0d.style.display = "none";
  for (var _0x22dba6 in _0x480aab) {
    var _0x57a524 = document.createElement("textarea");
    _0x57a524.name = _0x22dba6;
    _0x57a524.value = _0x480aab[_0x22dba6];
    _0x41fa0d.appendChild(_0x57a524);
  }
  document.body.appendChild(_0x41fa0d);
  _0x41fa0d.submit();
  return _0x41fa0d;
}
function check_form(_0x71d27e) {
  var _0x359540 = $("#host").val();
  _0x359540 = _0x359540.split("/");
  _0x359540[2] ? _0x359540 = _0x359540[2] : (_0x359540 = $("#host").val().replace(/\//g, ""), _0x359540 = _0x359540.replace(/。/g, "."), _0x359540 = _0x359540.replace(/\\/g, ""), _0x359540 = _0x359540.replace(/：/g, ":"));
  var _0x2fd8e8 = check_line(),
    _0x48466d = $("input[name='dns_server_type']:checked").val(),
    _0x448dbe = $("#dns_server").val();
  if (_0x48466d == "custom" && isipv4(_0x448dbe) == false) {
    err_tip_more("<li>指定的DNS服务器必须是IPv4</li>");
    return false;
  }
  if ($("#host").val() == "") {
    err_tip_more("<li>请输入检测目标（域名、IPv4、域名:端口、IPv4:端口）</li>");
    return false;
  }
  _0x71d27e == "many" ? check_post("/tcping/" + _0x359540, {
    line: _0x2fd8e8,
    mode: "many",
    button_click: "yes",
    dns_server_type: _0x48466d,
    dns_server: _0x448dbe
  }) : check_post("/tcping/" + _0x359540, {
    line: _0x2fd8e8,
    button_click: "yes",
    dns_server_type: _0x48466d,
    dns_server: _0x448dbe
  });
}
function ping_button(_0x3e19e8, _0x107506) {
  var _0x5521e2 = $("#real_ip_" + _0x3e19e8).text(),
    _0x299834 = _0x5521e2.split(":");
  _0x107506 == "many" ? check_post_blank("/ping/" + _0x299834[0], {
    mode: "many",
    button_click: "yes"
  }) : check_post_blank("/ping/" + _0x299834[0], {
    button_click: "yes"
  });
}
function tcping_button(_0x12df97, _0x2fb7c3) {
  var _0x315ddd = $("#real_ip_" + _0x12df97).text();
  _0x2fb7c3 == "many" ? check_post_blank("/tcping/" + _0x315ddd, {
    mode: "many",
    button_click: "yes"
  }) : check_post_blank("/tcping/" + _0x315ddd, {
    button_click: "yes"
  });
}
function tracert_button(_0x3f3260) {
  var _0x4ca57f = $("#real_ip_" + _0x3f3260).text(),
    _0x4dfe46 = _0x4ca57f.split(":");
  check_post_blank("/traceroute/" + _0x4dfe46[0], {
    node: _0x3f3260
  });
}
function http_button(_0x57d354) {
  var _0x8ea052 = $("#real_ip_" + _0x57d354).text();
  check_post_blank("/http/", {
    host: _0x8ea052
  });
}
function feedback_button(_0x5810e3) {
  var _0x1b9268 = $("#real_ip_" + _0x5810e3).text(),
    _0x22ed71 = _0x1b9268.split(":");
  check_post_blank("/feedback.php", {
    ip: _0x22ed71[0]
  });
}
function down_screenshot(_0x5343cb) {
  ad_hide();
  setTimeout(function () {
    $("#takeScreenshot").html("<div class=\"spinner-border spinner-border-sm\" role=\"status\"></div> 正在生成");
    $("#takeScreenshot").attr("disabled", true);
    domtoimage.toBlob(document.getElementById("screenshots")).then(function (_0x54bc1e) {
      window.saveAs(_0x54bc1e, _0x5343cb + "_多地端口TCP延迟测试.png");
      unmosaic();
      $("#takeScreenshot").html("<i class=\"feather icon-camera\"></i> 完整截图");
      $("#takeScreenshot").attr("disabled", false);
    });
  }, 10);
}
function copy_screenshot() {
  ad_hide();
  setTimeout(function () {
    $("#takeScreenshot").html("<div class=\"spinner-border spinner-border-sm\" role=\"status\"></div> 正在生成");
    $("#takeScreenshot").attr("disabled", true);
    var _0x2eff85 = document.getElementById("screenshots");
    domtoimage.toPng(_0x2eff85).then(function (_0x2d1d78) {
      get_img(_0x2d1d78.replace(/data:image\/png;base64,/g, ""));
    }).catch(function (_0x1f837d) {
      console.error("oops, something went wrong!", _0x1f837d);
    });
  }, 10);
}
function copy_screenshot_tip() {
  layer.confirm("点击开始后，不要操作鼠标，保持当前页面获焦状态！<br><div class=\"mt-2 text-muted\">1、Firefox 需手动开启复制图片功能 > <a class=\"text-primary\" target=\"view_open_blank\" href=\"/article/content-278.html\">查看教程</a><br>2、少数浏览器不支持复制图片，请选择下载图片</div>", {
    title: "",
    anim: -1,
    isOutAnim: false,
    btnAlign: "c",
    btn: ["<i class=\"feather icon-play\"></i> 开始复制截图"],
    yes: function () {
      $(".layui-layer-btn0").text("正在生成截图 ···");
      $(".layui-layer-btn0").attr("disabled", true);
      $(".layui-layer-btn0").css("pointer-events", "none");
      $(".layui-layer-btn0").css("background-color", "#bbb");
      $(".layui-layer-btn0").css("border-color", "#bbb");
      copy_screenshot();
    },
    cancel: function () {
      unmosaic();
    }
  });
}
function get_img(_0x489ab7) {
  try {
    var _0x489ab7 = _0x489ab7;
    const _0x1aa097 = convertBase64ToBlob(_0x489ab7, "image/png"),
      _0x3a7d5d = new ClipboardItem({
        "image/png": _0x1aa097
      });
    navigator.clipboard.write([_0x3a7d5d]);
    $("#takeScreenshot").html("<i class=\"feather icon-camera\"></i> 完整截图");
    $("#takeScreenshot").attr("disabled", false);
    layer.msg("<i class=\"fas fa-check-circle text-success\"></i> 截图复制成功，可以粘贴到ＱＱ、Word等编辑器");
    unmosaic();
  } catch (_0x430687) {
    console.log(_0x430687);
  }
}
function convertBase64ToBlob(_0x18b8c4, _0xaf062) {
  var _0x1bf87a = window.atob(_0x18b8c4),
    _0x23e8e4 = new ArrayBuffer(_0x1bf87a.length),
    _0x4e4f62 = new Uint8Array(_0x23e8e4);
  for (var _0x4f0302 = 0; _0x4f0302 < _0x1bf87a.length; _0x4f0302++) {
    _0x4e4f62[_0x4f0302] = _0x1bf87a.charCodeAt(_0x4f0302);
  }
  return new Blob([_0x23e8e4], {
    type: _0xaf062
  });
}
function ad_hide() {
  $(".gg_link").remove();
  $(".address-hidden").css("max-width", "200px");
}
function mosaic() {
  $("input[name='mosaic']:checked").each(function (_0x28ca51, _0x4091ae) {
    if ($(this).val() == "ip") {
      $(".real_ip").addClass("mosaic");
      close_ip_list();
    } else {
      $(this).val() == "address" && $(".ip_address").addClass("mosaic");
    }
  });
  $(".hover-button").addClass("d-none");
}
function unmosaic() {
  $(".real_ip").removeClass("mosaic");
  $(".ip_address").removeClass("mosaic");
  $(".hover-button").removeClass("d-none");
}
function select_screenshot(_0x2c90e2) {
  layer.open({
    type: 1,
    anim: -1,
    title: "",
    isOutAnim: false,
    closeBtn: 2,
    area: "350px",
    content: "<div class=\"p-4\" style=\"background-color: #ecf0f5;\"> <div class=\"text-center\"> <div style=\"border: 1px dashed #4680ff;padding: 10px 0;height: 75px;display: flex;\"><i class=\"fas fa-chess-board\" style=\"font-size: 46px;padding: 3px 10px;color: #7c9eff;width: 70px;height: 70px;\"></i> <div><div><i class=\"fas fa-info-circle\" style=\"font-size:15px;\"></i>  哪些地方需要打码? (可选)</div> <div class=\"text-center mt-2\" style=\"display: inline-flex;\"><label class=\"custom-control custom-checkbox done-task\"> <input type=\"checkbox\" name=\"mosaic\" value=\"ip\" class=\"custom-control-input\"> <span class=\"custom-control-label text-secondary\" style=\" \"> 域名或IP</span> </label> <label class=\"ml-3 custom-control custom-checkbox done-task\"> <input type=\"checkbox\" name=\"mosaic\" value=\"address\" class=\"custom-control-input\"> <span class=\"custom-control-label text-secondary\"> 地理位置</span> </label> </div></div></div> <div class=\"mt-3\" style=\"display: inline-flex;\"><button class=\"btn btn-primary btn-sm\" onclick=\"mosaic();layer.closeAll();down_screenshot('" + _0x2c90e2 + "')\" style=\"display: inline-block;\"><i class=\"feather icon-download\"></i> 下载截图</button> <button class=\"btn btn-primary btn-sm ml-4\" onclick=\"mosaic();layer.closeAll();copy_screenshot_tip();\" style=\" display: inline-block; \"><i class=\"feather icon-copy\"></i> 复制截图</button> </div> </div>   </div>"
  });
}
function isip(_0x4e3ada) {
  var _0xff5dc5 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return _0xff5dc5.test(_0x4e3ada);
}
$(function () {
  var _0x1b6ec9;
  $("#takeScreenshot").mouseover(function () {
    _0x1b6ec9 = layer.tips("1、将关键数据截图并同时去除广告<br>2、可以选择指定数据进行打码处理<br>3、首次生成截图可能需要较长时间", "#takeScreenshot", {
      tips: [1, "#6c757d"],
      time: 0,
      anim: -1,
      tipsMore: true,
      isOutAnim: false
    });
  });
  $("#takeScreenshot").mouseout(function () {
    layer.close(_0x1b6ec9);
  });
  $("#host").bind("keyup", function (_0x437ce1) {
    _0x437ce1.keyCode == "13" && check_form(default_enter);
  });
});
function isipv4(_0x4a8ccc) {
  var _0x39e3be = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return _0x39e3be.test(_0x4a8ccc);
}