//Sun Sep 29 2024 02:13:00 GMT+0000 (Coordinated Universal Time)
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
    label: "<=30ms",
    color: "#24aa1d"
  }, {
    start: 31,
    end: 50,
    label: "31ms-50ms",
    color: "#42dd3f"
  }, {
    start: 51,
    end: 100,
    label: "51ms-100ms",
    color: "#bef663"
  }, {
    start: 101,
    end: 200,
    label: "101ms-200ms",
    color: "#f6ed44"
  }, {
    start: 201,
    end: 5000,
    label: ">200ms",
    color: "#f69833"
  }, {
    start: 5001,
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
      formatter: function (_0x55df26) {
        if (isNaN(_0x55df26.value)) {
          return "\n                        <div>\n                            <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">" + _0x55df26.name + "</p>\n                            <p  style=\"line-height: 20px; padding: 0 10px;\">此区域暂时没有数据</p>\n                      </div>\n                      ";
        }
        if (_0x55df26.value == 0) {
          province_value = "<1ms";
        } else {
          _0x55df26.value > 3000 ? province_value = "<font color=#e61610>超时</font>" : province_value = _0x55df26.value + "ms";
        }
        return "\n                    <div>\n                        <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">" + _0x55df26.name + "</p>\n                        <p  style=\"line-height: 20px; padding: 0 10px;\">最快响应：" + province_value + "</p>\n                        " + _0x55df26.data.datas + "\n                  </div>\n                  ";
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
  china_map.on("click", function (_0x40f546) {
    if (_0x40f546.name == "") {
      return false;
    }
    $("input[name='filter_line']").prop("checked", false);
    $(".filter_ip").text(_0x40f546.name);
    $(".label_filter_ip").show();
    filter_map_count = 0;
    $(".node_tr").each(function () {
      $(this).find("td:first").text().indexOf(_0x40f546.name) != -1 ? (filter_map_count++, $(this).show()) : $(this).hide();
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
  marker_list = marker_arr.filter(function (_0x697d0d) {
    return _0x697d0d.show === true;
  }).filter(function (_0x518c37) {
    var _0x5f4af7 = mydata.find(_0x1f1ee7 => _0x1f1ee7.name == _0x518c37.name);
    return _0x5f4af7.value <= 5000;
  }).map(function (_0x1d0122) {
    var [_0x339a11, _0x5a69fb] = _0x1d0122.x_y.split(",").map(Number),
      _0x3a53d0 = "#fff";
    return {
      value: [_0x339a11, _0x5a69fb, _0x3a53d0]
    };
  });
  option.series[0].data = mydata;
  marker_switch && (option.series[1].data = marker_list);
  china_map.setOption(option);
}
function str_num(_0x1c3ed0, _0x13a50d) {
  return _0x1c3ed0.split(_0x13a50d).length - 1;
}
function left(_0x548abf, _0x1e9ebb) {
  return _0x1e9ebb > 0 ? _0x548abf.substring(0, _0x1e9ebb) : null;
}
function right(_0x3a6a0c, _0x5a5908) {
  return _0x3a6a0c.length - _0x5a5908 >= 0 && _0x3a6a0c.length >= 0 && _0x3a6a0c.length - _0x5a5908 <= _0x3a6a0c.length ? _0x3a6a0c.substring(_0x3a6a0c.length - _0x5a5908, _0x3a6a0c.length) : null;
}
function change_type(_0x328264) {
  if (_0x328264 === 1) {
    dns_type = "a";
    $("#dns_type_button").html(" A ");
  } else {
    if (_0x328264 === 2) {
      dns_type = "cname";
      $("#dns_type_button").html(" CNAME ");
    } else {
      if (_0x328264 === 3) {
        dns_type = "mx";
        $("#dns_type_button").html(" MX ");
      } else {
        if (_0x328264 === 4) {
          dns_type = "aaaa";
          $("#dns_type_button").html(" AAAA ");
        } else {
          if (_0x328264 === 5) {
            dns_type = "ns";
            $("#dns_type_button").html(" NS ");
          } else {
            if (_0x328264 === 6) {
              dns_type = "txt";
              $("#dns_type_button").html(" TXT ");
            } else {
              if (_0x328264 === 7) {
                dns_type = "ptr";
                $("#dns_type_button").html(" PTR ");
              } else {
                _0x328264 === 8 && (dns_type = "srv", $("#dns_type_button").html(" SRV "));
              }
            }
          }
        }
      }
    }
  }
  $(".dns_type_menu").hide();
}
function sortByDescNum(_0x18ca9f, _0x2ee51e) {
  _0x18ca9f.sort(function (_0x37f8e5, _0x37d62e) {
    return _0x37d62e[_0x2ee51e] - _0x37f8e5[_0x2ee51e];
  });
  return _0x18ca9f;
}
function filter_ip(_0x339bd2) {
  $(".dns_info").hide();
  $(".filter_ip").text(_0x339bd2);
  $(".label_filter_ip").show();
  $("input[name='filter_line']").prop("checked", false);
  var _0x376c97 = 0;
  $(".node_tr").each(function () {
    $(this).attr("ip_list") ? str_num($(this).attr("ip_list"), "," + _0x339bd2 + ",") > 0 ? (_0x376c97++, $(this).show()) : $(this).hide() : $(this).hide();
  });
  $(".show_record").text(_0x376c97);
}
$("input[name='filter_line']").click(function () {
  $(".label_filter_ip").hide();
  var _0xfcc006 = $(this).val(),
    _0x140aa6 = 0,
    _0x422757 = 0,
    _0x3732dd = 0,
    _0x2ca3c0 = 0,
    _0x440612 = 0,
    _0x280205 = 0,
    _0x5be9b0 = 0;
  $(".node_tr").each(function () {
    _0x140aa6++;
    if ($(this).attr("node_type") == _0xfcc006 || _0xfcc006 == "all") {
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
    _0xfcc006 == "6" && $(this).attr("time_out") == "true" && ($(this).show(), _0x5be9b0++);
    if (_0xfcc006 == "all") {
      $(".show_record").text(_0x140aa6);
    } else {
      if (_0xfcc006 == "1") {
        $(".show_record").text(_0x422757);
      } else {
        if (_0xfcc006 == "2") {
          $(".show_record").text(_0x3732dd);
        } else {
          if (_0xfcc006 == "3") {
            $(".show_record").text(_0x2ca3c0);
          } else {
            if (_0xfcc006 == "4") {
              $(".show_record").text(_0x440612);
            } else {
              if (_0xfcc006 == "5") {
                $(".show_record").text(_0x280205);
              } else {
                _0xfcc006 == "6" && $(".show_record").text(_0x5be9b0);
              }
            }
          }
        }
      }
    }
  });
});
$(document).on("click", ".show_info_button", function () {
  $("#info_show_" + $(this).attr("node")).is(":hidden") ? ($("#info_show_" + $(this).attr("node")).show(300), $(this).text("收起")) : ($("#info_show_" + $(this).attr("node")).hide(), $(this).text("查看"));
});
function debounce(_0x235161, _0x331268) {
  let _0x4e8ddd;
  return function () {
    const _0x2ecd52 = this,
      _0x319d45 = arguments;
    clearTimeout(_0x4e8ddd);
    _0x4e8ddd = setTimeout(function () {
      _0x235161.apply(_0x2ecd52, _0x319d45);
    }, _0x331268);
  };
}
const refreshData_slow = debounce(function () {
  refreshData();
}, 0);
function dns(_0x5404f6) {
  var _0x272379 = _0x5404f6.node_id,
    _0x49ca65 = parseInt(_0x5404f6.time);
  complete_node_num = complete_node_num + 1;
  if (complete_node_num > check_node_num) {
    return false;
  }
  complete_node_num == check_node_num && $(".checking").hide();
  var _0x456b23 = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width:" + GetPercent(complete_node_num, check_node_num) + ";\" aria-valuenow=\"" + complete_node_num + "\" aria-valuemin=\"0\" aria-valuemax=\"" + check_node_num + "\">" + GetPercent(complete_node_num, check_node_num) + "</div>";
  $("#complete_progress").html(_0x456b23);
  if (_0x5404f6.type != "error") {
    if (_0x5404f6.result == "") {
      $("#dns_str_" + _0x272379).html("没有记录");
      var _0xebba35 = "没有记录";
      $(".node_tr[node='" + _0x272379 + "']").attr("ip_list", ",没有记录,");
    } else {
      if (_0x5404f6.result == "dns server timeout") {
        $("#dns_str_" + _0x272379).html("<span class=\"text-danger\">DNS服务器未响应</span>");
        var _0xebba35 = "DNS服务器未响应";
        $(".node_tr[node='" + _0x272379 + "']").attr("time_out", "true");
        time_out_num = time_out_num + 1;
        $(".time_out").text(time_out_num);
        $(".time_out").show();
      } else {
        var _0xebba35 = "",
          _0x34cc81 = "";
        for (var _0x40bba1 in _0x5404f6.result) {
          _0xebba35 ? (_0xebba35 = _0xebba35 + "<br>" + _0x5404f6.result[_0x40bba1], _0x34cc81 = _0x34cc81 + "," + _0x5404f6.result[_0x40bba1]) : (_0xebba35 = _0x5404f6.result[_0x40bba1], _0x34cc81 = _0x5404f6.result[_0x40bba1]);
        }
        var _0x252459 = _0x5404f6.result.slice(0, default_show_num).join("<br>");
        $("#dns_str_" + _0x272379).html(_0x252459);
        _0x5404f6.result.length > default_show_num ? $("#dns_num_" + _0x272379).html("<span class=\"badge badge-light-primary\">" + _0x5404f6.result.length + "</span>") : $("#dns_num_" + _0x272379).html("<span class=\"badge badge-light-secondary\">" + _0x5404f6.result.length + "</span>");
        $(".node_tr[node='" + _0x272379 + "']").attr("ip_list", "," + _0x34cc81 + ",");
      }
    }
    $("#dns_time_" + _0x272379).html(_0x49ca65 + "ms");
  } else {
    $("#dns_str_" + _0x272379).html("<span class=\"text-danger\">监测点返回异常</span>");
  }
  if (_0x5404f6.type != "error") {
    var _0x162409 = "<span class=\"mr-3\">协议:</span>UDP<br><span class=\"mr-3\">目标:</span>" + _0x5404f6.host + "<br><span class=\"mr-3\">类型:</span>" + dns_type.toUpperCase() + "<br><span class=\"mr-3\">耗时:</span>" + _0x49ca65 + "ms<br><br>---------- 解析结果 ----------<br><br>" + _0xebba35;
    $(".node_tr[node='" + _0x272379 + "']").after("<tr class=\"dns_info\" id=\"info_show_" + _0x272379 + "\" style=\"display:none;background-color: #f9fbff\"><td class=\"text-left head_view\" colspan=\"8\">" + _0x162409 + "</td></tr>");
    $("#dns_info_" + _0x272379).html("<a class=\"show_info_button\" node=\"" + _0x272379 + "\" href=\"javascript:;\">查看</a>");
  }
  if (_0x5404f6.type != "error" && dns_type == "a" && _0x5404f6.result != "dns server timeout") {
    if (_0x5404f6.result.length != 0) {
      for (var _0x180d38 = 0; _0x180d38 < _0x5404f6.result.length; _0x180d38++) {
        ipv4_list_arr.push(_0x5404f6.result[_0x180d38]);
      }
    } else {
      ipv4_list_arr.push("没有记录");
    }
    var _0x2d1a5d = 100 / ipv4_list_arr.length;
    let _0x29c3fd = {};
    ipv4_list_arr.forEach(_0xc9eeae => {
      _0x29c3fd[_0xc9eeae] = _0x29c3fd[_0xc9eeae] || [];
      _0xc9eeae.pre = _0x2d1a5d;
      _0x29c3fd[_0xc9eeae].push(_0xc9eeae);
    });
    var _0x35299d = [];
    Object.keys(_0x29c3fd).forEach(function (_0x2a1338) {
      let _0x4660e = {
        ip: _0x2a1338
      };
      _0x4660e.ip = _0x2a1338;
      _0x4660e.pre = (_0x2d1a5d * _0x29c3fd[_0x2a1338].length).toFixed(2);
      _0x35299d.push(_0x4660e);
    });
    _0x35299d = sortByDescNum(_0x35299d, "pre");
    $(".ip_list").html("");
    $(".copy_ip").attr("copy-text", "");
    for (var _0x180d38 = 0; _0x180d38 < _0x35299d.length; _0x180d38++) {
      if (isipv4(_0x35299d[_0x180d38].ip)) {
        var _0x4ef743 = _0x35299d[_0x180d38].ip;
      } else {
        var _0x4ef743 = "没有记录";
      }
      $(".ip_list").append(" <a title=\"点击筛选\" class=\"pointer noselect\" onclick=\"filter_ip('" + _0x4ef743 + "')\"><li><span class=\"ml-3\">" + _0x4ef743 + "</span><span class=\"text-primary float-right mr-3\">" + _0x35299d[_0x180d38].pre + "%</span></li></a>");
      $(".copy_ip").attr("copy-text") == "" ? $(".copy_ip").attr("copy-text", _0x4ef743) : $(".copy_ip").attr("copy-text", $(".copy_ip").attr("copy-text") + "\n" + _0x4ef743);
    }
    $("#ip_list_num").text(_0x35299d.length);
  } else {
    if (_0x5404f6.type != "error" && dns_type == "aaaa" && _0x5404f6.result != "dns server timeout") {
      if (_0x5404f6.result.length != 0) {
        for (var _0x180d38 = 0; _0x180d38 < _0x5404f6.result.length; _0x180d38++) {
          ipv6_list_arr.push(_0x5404f6.result[_0x180d38]);
        }
      } else {
        ipv6_list_arr.push("没有记录");
      }
      var _0x2d1a5d = 100 / ipv6_list_arr.length;
      let _0x1cce5c = {};
      ipv6_list_arr.forEach(_0x3d5283 => {
        _0x1cce5c[_0x3d5283] = _0x1cce5c[_0x3d5283] || [];
        _0x3d5283.pre = _0x2d1a5d;
        _0x1cce5c[_0x3d5283].push(_0x3d5283);
      });
      var _0x1b3107 = [];
      Object.keys(_0x1cce5c).forEach(function (_0x25f969) {
        let _0x14e3f9 = {
          ip: _0x25f969
        };
        _0x14e3f9.ip = _0x25f969;
        _0x14e3f9.pre = (_0x2d1a5d * _0x1cce5c[_0x25f969].length).toFixed(2);
        _0x1b3107.push(_0x14e3f9);
      });
      _0x1b3107 = sortByDescNum(_0x1b3107, "pre");
      $(".ip_list").html("");
      $(".copy_ip").attr("copy-text", "");
      for (var _0x180d38 = 0; _0x180d38 < _0x1b3107.length; _0x180d38++) {
        if (isipv6(_0x1b3107[_0x180d38].ip)) {
          var _0x4ef743 = _0x1b3107[_0x180d38].ip;
        } else {
          var _0x4ef743 = "没有记录";
        }
        $(".ip_list").append(" <a title=\"点击筛选\" class=\"pointer noselect\" onclick=\"filter_ip('" + _0x4ef743 + "')\"><li><span class=\"ml-3\">" + _0x4ef743 + "</span><span class=\"text-primary float-right mr-3\">" + _0x1b3107[_0x180d38].pre + "%</span></li></a>");
        $(".copy_ip").attr("copy-text") == "" ? $(".copy_ip").attr("copy-text", _0x4ef743) : $(".copy_ip").attr("copy-text", $(".copy_ip").attr("copy-text") + "\n" + _0x4ef743);
      }
      $("#ip_list_num").text(_0x1b3107.length);
    }
  }
  if (_0x5404f6.province != 99) {
    _0x5404f6.type == "success" && china_fast[_0x5404f6.province] > parseInt(_0x49ca65) && (china_fast[_0x5404f6.province] = parseInt(_0x49ca65));
    if (_0x5404f6.line == "1") {
      var _0x501430 = "<font color=#9ccc65>[电信]</font>",
        _0x1177a2 = _0x5404f6.name.replace("电信", "");
    } else {
      if (_0x5404f6.line == "2") {
        var _0x501430 = "<font color=#ffba57>[联通]</font>",
          _0x1177a2 = _0x5404f6.name.replace("联通", "");
      } else {
        if (_0x5404f6.line == "3") {
          var _0x501430 = "<font color=#00acc1>[移动]</font>",
            _0x1177a2 = _0x5404f6.name.replace("移动", "");
        } else {
          if (_0x5404f6.line == "5") {
            var _0x501430 = "",
              _0x1177a2 = _0x5404f6.name.replace("海外", "");
          }
        }
      }
    }
    (parseInt(_0x49ca65) > 5000 || _0x5404f6.type != "success") && (marker_arr[_0x5404f6.province].show = true);
    if (parseInt(_0x49ca65) > 5000 || _0x5404f6.type != "success") {
      var _0x1673bc = "<font color=#e61610>超时</font>";
    } else {
      var _0x1673bc = _0x49ca65 + "ms";
    }
    china_data[_0x5404f6.province] == "" ? china_data[_0x5404f6.province] = "<p style=\"line-height: 10px; padding: 0 10px;\">" + _0x501430 + " " + _0x1177a2 + "：" + _0x1673bc + "</p>" : china_data[_0x5404f6.province] = china_data[_0x5404f6.province] + "<p style=\"line-height: 10px; padding: 0 10px;\">" + _0x501430 + " " + _0x1177a2 + "：" + _0x1673bc + "</p>";
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
                                                name: "内蒙古",
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
    china_fast[_0x180d38] != 9999 ? mydata[mydata.length] = _0x218fe8 : mydata[mydata.length] = {
      name: "北京"
    };
  }
  refreshData_slow();
  if (_0x5404f6.province != 99 && _0x5404f6.type == "success") {
    china_node_num = china_node_num + 1;
    china_all_time = china_all_time + _0x49ca65;
    china_fast_time > _0x49ca65 && (china_fast_time = _0x49ca65, $("#china_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    china_slow < _0x49ca65 && (china_slow = _0x49ca65, $("#china_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x52b7bc = Math.round(china_all_time / china_node_num);
    $("#china_avg").text(_0x52b7bc + "ms");
  }
  if (_0x5404f6.line == "1" && _0x5404f6.type == "success") {
    ct_node_num = ct_node_num + 1;
    ct_all_time = ct_all_time + _0x49ca65;
    ct_fast > _0x49ca65 && (ct_fast = _0x49ca65, $("#ct_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    ct_slow < _0x49ca65 && (ct_slow = _0x49ca65, $("#ct_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x374893 = Math.round(ct_all_time / ct_node_num);
    $("#ct_avg").text(_0x374893 + "ms");
  }
  if (_0x5404f6.line == "2" && _0x5404f6.type == "success") {
    cu_node_num = cu_node_num + 1;
    cu_all_time = cu_all_time + _0x49ca65;
    cu_fast > _0x49ca65 && (cu_fast = _0x49ca65, $("#cu_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    cu_slow < _0x49ca65 && (cu_slow = _0x49ca65, $("#cu_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x43b272 = Math.round(cu_all_time / cu_node_num);
    $("#cu_avg").text(_0x43b272 + "ms");
  }
  if (_0x5404f6.line == "3" && _0x5404f6.type == "success") {
    cm_node_num = cm_node_num + 1;
    cm_all_time = cm_all_time + _0x49ca65;
    cm_fast > _0x49ca65 && (cm_fast = _0x49ca65, $("#cm_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    cm_slow < _0x49ca65 && (cm_slow = _0x49ca65, $("#cm_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x360846 = Math.round(cm_all_time / cm_node_num);
    $("#cm_avg").text(_0x360846 + "ms");
  }
  if (_0x5404f6.region == "1" && _0x5404f6.type == "success") {
    huadong_node_num = huadong_node_num + 1;
    huadong_all_time = huadong_all_time + _0x49ca65;
    huadong_fast > _0x49ca65 && (huadong_fast = _0x49ca65, $("#huadong_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    huadong_slow < _0x49ca65 && (huadong_slow = _0x49ca65, $("#huadong_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x112225 = Math.round(huadong_all_time / huadong_node_num);
    $("#huadong_avg").text(_0x112225 + "ms");
  }
  if (_0x5404f6.region == "2" && _0x5404f6.type == "success") {
    huanan_node_num = huanan_node_num + 1;
    huanan_all_time = huanan_all_time + _0x49ca65;
    huanan_fast > _0x49ca65 && (huanan_fast = _0x49ca65, $("#huanan_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    huanan_slow < _0x49ca65 && (huanan_slow = _0x49ca65, $("#huanan_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x3ebe9c = Math.round(huanan_all_time / huanan_node_num);
    $("#huanan_avg").text(_0x3ebe9c + "ms");
  }
  if (_0x5404f6.region == "3" && _0x5404f6.type == "success") {
    huazhong_node_num = huazhong_node_num + 1;
    huazhong_all_time = huazhong_all_time + _0x49ca65;
    huazhong_fast > _0x49ca65 && (huazhong_fast = _0x49ca65, $("#huazhong_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    huazhong_slow < _0x49ca65 && (huazhong_slow = _0x49ca65, $("#huazhong_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x15aa9e = Math.round(huazhong_all_time / huazhong_node_num);
    $("#huazhong_avg").text(_0x15aa9e + "ms");
  }
  if (_0x5404f6.region == "4" && _0x5404f6.type == "success") {
    huabei_node_num = huabei_node_num + 1;
    huabei_all_time = huabei_all_time + _0x49ca65;
    huabei_fast > _0x49ca65 && (huabei_fast = _0x49ca65, $("#huabei_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    huabei_slow < _0x49ca65 && (huabei_slow = _0x49ca65, $("#huabei_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x2844ab = Math.round(huabei_all_time / huabei_node_num);
    $("#huabei_avg").text(_0x2844ab + "ms");
  }
  if (_0x5404f6.region == "5" && _0x5404f6.type == "success") {
    xinan_node_num = xinan_node_num + 1;
    xinan_all_time = xinan_all_time + _0x49ca65;
    xinan_fast > _0x49ca65 && (xinan_fast = _0x49ca65, $("#xinan_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    xinan_slow < _0x49ca65 && (xinan_slow = _0x49ca65, $("#xinan_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x123f64 = Math.round(xinan_all_time / xinan_node_num);
    $("#xinan_avg").text(_0x123f64 + "ms");
  }
  if (_0x5404f6.region == "6" && _0x5404f6.type == "success") {
    xibei_node_num = xibei_node_num + 1;
    xibei_all_time = xibei_all_time + _0x49ca65;
    xibei_fast > _0x49ca65 && (xibei_fast = _0x49ca65, $("#xibei_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    xibei_slow < _0x49ca65 && (xibei_slow = _0x49ca65, $("#xibei_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x3f1275 = Math.round(xibei_all_time / xibei_node_num);
    $("#xibei_avg").text(_0x3f1275 + "ms");
  }
  if (_0x5404f6.region == "7" && _0x5404f6.type == "success") {
    dongbei_node_num = dongbei_node_num + 1;
    dongbei_all_time = dongbei_all_time + _0x49ca65;
    dongbei_fast > _0x49ca65 && (dongbei_fast = _0x49ca65, $("#dongbei_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    dongbei_slow < _0x49ca65 && (dongbei_slow = _0x49ca65, $("#dongbei_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x38a315 = Math.round(dongbei_all_time / dongbei_node_num);
    $("#dongbei_avg").text(_0x38a315 + "ms");
  }
  if (_0x5404f6.region == "8" && _0x5404f6.type == "success") {
    gangaotai_node_num = gangaotai_node_num + 1;
    gangaotai_all_time = gangaotai_all_time + _0x49ca65;
    gangaotai_fast > _0x49ca65 && (gangaotai_fast = _0x49ca65, $("#gangaotai_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    gangaotai_slow < _0x49ca65 && (gangaotai_slow = _0x49ca65, $("#gangaotai_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x142448 = Math.round(gangaotai_all_time / gangaotai_node_num);
    $("#gangaotai_avg").text(_0x142448 + "ms");
  }
  if (_0x5404f6.province == "99" && _0x5404f6.type != "error") {
    global_node_num = global_node_num + 1;
    global_all_time = global_all_time + _0x49ca65;
    global_fast > _0x49ca65 && (global_fast = _0x49ca65, $("#global_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    global_slow < _0x49ca65 && (global_slow = _0x49ca65, $("#global_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0xf680d9 = Math.round(global_all_time / global_node_num);
    $("#global_avg").text(_0xf680d9 + "ms");
  }
  if (_0x5404f6.region == "9" && _0x5404f6.type == "success") {
    asia_node_num = asia_node_num + 1;
    asia_all_time = asia_all_time + _0x49ca65;
    asia_fast > _0x49ca65 && (asia_fast = _0x49ca65, $("#asia_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    asia_slow < _0x49ca65 && (asia_slow = _0x49ca65, $("#asia_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x42c25c = Math.round(asia_all_time / asia_node_num);
    $("#asia_avg").text(_0x42c25c + "ms");
  }
  if (_0x5404f6.region == "10" && _0x5404f6.type == "success") {
    europe_node_num = europe_node_num + 1;
    europe_all_time = europe_all_time + _0x49ca65;
    europe_fast > _0x49ca65 && (europe_fast = _0x49ca65, $("#europe_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    europe_slow < _0x49ca65 && (europe_slow = _0x49ca65, $("#europe_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x3e376c = Math.round(europe_all_time / europe_node_num);
    $("#europe_avg").text(_0x3e376c + "ms");
  }
  if (_0x5404f6.region == "11" && _0x5404f6.type == "success") {
    north_node_num = north_node_num + 1;
    north_all_time = north_all_time + _0x49ca65;
    north_fast > _0x49ca65 && (north_fast = _0x49ca65, $("#north_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    north_slow < _0x49ca65 && (north_slow = _0x49ca65, $("#north_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x46175e = Math.round(north_all_time / north_node_num);
    $("#north_avg").text(_0x46175e + "ms");
  }
  if (_0x5404f6.region == "12" && _0x5404f6.type == "success") {
    south_node_num = south_node_num + 1;
    south_all_time = south_all_time + _0x49ca65;
    south_fast > _0x49ca65 && (south_fast = _0x49ca65, $("#south_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    south_slow < _0x49ca65 && (south_slow = _0x49ca65, $("#south_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x1738dd = Math.round(south_all_time / south_node_num);
    $("#south_avg").text(_0x1738dd + "ms");
  }
  if (_0x5404f6.region == "13" && _0x5404f6.type == "success") {
    africa_node_num = africa_node_num + 1;
    africa_all_time = africa_all_time + _0x49ca65;
    africa_fast > _0x49ca65 && (africa_fast = _0x49ca65, $("#africa_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    africa_slow < _0x49ca65 && (africa_slow = _0x49ca65, $("#africa_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0xf242fe = Math.round(africa_all_time / africa_node_num);
    $("#africa_avg").text(_0xf242fe + "ms");
  }
  if (_0x5404f6.region == "14" && _0x5404f6.type == "success") {
    oceania_node_num = oceania_node_num + 1;
    oceania_all_time = oceania_all_time + _0x49ca65;
    oceania_fast > _0x49ca65 && (oceania_fast = _0x49ca65, $("#oceania_fast").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    oceania_slow < _0x49ca65 && (oceania_slow = _0x49ca65, $("#oceania_slow").text(_0x5404f6.name + " " + _0x49ca65 + "ms"));
    var _0x39b2ff = Math.round(oceania_all_time / oceania_node_num);
    $("#oceania_avg").text(_0x39b2ff + "ms");
  }
}
function GetPercent(_0x2dbd36, _0x4126d9) {
  _0x2dbd36 = parseFloat(_0x2dbd36);
  _0x4126d9 = parseFloat(_0x4126d9);
  if (isNaN(_0x2dbd36) || isNaN(_0x4126d9)) {
    return "-";
  }
  return _0x4126d9 <= 0 ? "0%" : Math.round(_0x2dbd36 / _0x4126d9 * 100) + "%";
}
function check_post(_0x58ff13, _0xf4cec4) {
  var _0x5f542f = document.createElement("form");
  _0x5f542f.action = _0x58ff13;
  _0x5f542f.method = "post";
  _0x5f542f.style.display = "none";
  for (var _0x517605 in _0xf4cec4) {
    var _0x125f63 = document.createElement("textarea");
    _0x125f63.name = _0x517605;
    _0x125f63.value = _0xf4cec4[_0x517605];
    _0x5f542f.appendChild(_0x125f63);
  }
  document.body.appendChild(_0x5f542f);
  _0x5f542f.submit();
  return _0x5f542f;
}
function check_post_blank(_0x3d2879, _0x308d40) {
  var _0x20de80 = document.createElement("form");
  _0x20de80.action = _0x3d2879;
  _0x20de80.method = "post";
  _0x20de80.target = Math.random() + "_blank";
  _0x20de80.style.display = "none";
  for (var _0x31bc0c in _0x308d40) {
    var _0x526074 = document.createElement("textarea");
    _0x526074.name = _0x31bc0c;
    _0x526074.value = _0x308d40[_0x31bc0c];
    _0x20de80.appendChild(_0x526074);
  }
  document.body.appendChild(_0x20de80);
  _0x20de80.submit();
  return _0x20de80;
}
function check_form() {
  $(".advanced").hide();
  $(".icon-chevrons-down").css("transform", "unset");
  var _0x59e482 = $("#host").val();
  _0x59e482 = _0x59e482.split("/");
  _0x59e482[2] ? _0x59e482 = _0x59e482[2] : (_0x59e482 = $("#host").val().replace(/\//g, ""), _0x59e482 = _0x59e482.replace(/。/g, "."), _0x59e482 = _0x59e482.replace(/\\/g, ""), _0x59e482 = _0x59e482.replace(/：/g, ":"));
  var _0x317ae3 = check_line(),
    _0x5c2580 = $("input[name='dns_server_type']:checked").val(),
    _0x1ff66b = $("#dns_server").val();
  if (_0x5c2580 == "custom" && isipv4(_0x1ff66b) == false) {
    err_tip_more("<li>指定的DNS服务器必须是IPv4</li>");
    return false;
  }
  if ($("#host").val() == "") {
    err_tip_more("<li>请输入检测目标（域名、IPv4、IPv6）</li>");
    return false;
  }
  check_post("/dns/" + _0x59e482, {
    line: _0x317ae3,
    dns_type: dns_type,
    dns_server_type: _0x5c2580,
    dns_server: _0x1ff66b
  });
}
function down_screenshot(_0x12d0b6) {
  ad_hide();
  setTimeout(function () {
    $("#takeScreenshot").html("<div class=\"spinner-border spinner-border-sm\" role=\"status\"></div> 正在生成");
    $("#takeScreenshot").attr("disabled", true);
    domtoimage.toBlob(document.getElementById("screenshots")).then(function (_0x562d9a) {
      window.saveAs(_0x562d9a, _0x12d0b6 + "_DNS记录查询.png");
      $("#takeScreenshot").html("<i class=\"feather icon-camera\"></i> 完整截图");
      $("#takeScreenshot").attr("disabled", false);
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
    cancel: function () {}
  });
}
function copy_screenshot() {
  ad_hide();
  setTimeout(function () {
    $("#takeScreenshot").html("<div class=\"spinner-border spinner-border-sm\" role=\"status\"></div> 正在生成");
    $("#takeScreenshot").attr("disabled", true);
    var _0x3d963a = document.getElementById("screenshots");
    domtoimage.toPng(_0x3d963a).then(function (_0xd1f7c5) {
      get_img(_0xd1f7c5.replace(/data:image\/png;base64,/g, ""));
    }).catch(function (_0x511d71) {
      console.error("oops, something went wrong!", _0x511d71);
    });
  }, 10);
}
function get_img(_0x203089) {
  try {
    var _0x203089 = _0x203089;
    const _0x4277d0 = convertBase64ToBlob(_0x203089, "image/png"),
      _0x5a111e = new ClipboardItem({
        "image/png": _0x4277d0
      });
    navigator.clipboard.write([_0x5a111e]);
    $("#takeScreenshot").html("<i class=\"feather icon-camera\"></i> 完整截图");
    $("#takeScreenshot").attr("disabled", false);
    layer.msg("<i class=\"fas fa-check-circle text-success\"></i> 截图复制成功，可以粘贴到ＱＱ、Word等编辑器");
  } catch (_0x5aa4ed) {
    console.log(_0x5aa4ed);
  }
}
function convertBase64ToBlob(_0x5b8e19, _0x2f22d1) {
  var _0x5cf870 = window.atob(_0x5b8e19),
    _0x7146ab = new ArrayBuffer(_0x5cf870.length),
    _0x14213b = new Uint8Array(_0x7146ab);
  for (var _0x5230f1 = 0; _0x5230f1 < _0x5cf870.length; _0x5230f1++) {
    _0x14213b[_0x5230f1] = _0x5cf870.charCodeAt(_0x5230f1);
  }
  return new Blob([_0x7146ab], {
    type: _0x2f22d1
  });
}
function ad_hide() {
  $(".gg_link").remove();
  $(".address-hidden").css("max-width", "200px");
  $(".hover-button").addClass("d-none");
}
function isipv4(_0x3e950d) {
  var _0x45bcb8 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return _0x45bcb8.test(_0x3e950d);
}
function isipv6(_0x495284) {
  reg = /^([\da-fA-F]{1,4}:){6}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^::([\da-fA-F]{1,4}:){0,4}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:):([\da-fA-F]{1,4}:){0,3}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){2}:([\da-fA-F]{1,4}:){0,2}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){3}:([\da-fA-F]{1,4}:){0,1}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){4}:((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$|^:((:[\da-fA-F]{1,4}){1,6}|:)$|^[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,5}|:)$|^([\da-fA-F]{1,4}:){2}((:[\da-fA-F]{1,4}){1,4}|:)$|^([\da-fA-F]{1,4}:){3}((:[\da-fA-F]{1,4}){1,3}|:)$|^([\da-fA-F]{1,4}:){4}((:[\da-fA-F]{1,4}){1,2}|:)$|^([\da-fA-F]{1,4}:){5}:([\da-fA-F]{1,4})?$|^([\da-fA-F]{1,4}:){6}:$/;
  return reg.test(_0x495284);
}
$("#takeScreenshot").click(function () {
  $(".advanced").hide();
  $(".icon-chevrons-down").css("transform", "unset");
});
$(function () {
  var _0x4ef888;
  $("#dns_type_button").click(function () {
    $("#dns_type_button").trigger("mouseleave");
    $("#dns_type_button").trigger("mouseenter");
  });
  $(".dns_type_change").on({
    mouseenter: function () {
      clearTimeout(_0x4ef888);
      $(this).find(".dns_type_menu").show();
    },
    mouseleave: function () {
      _0x4ef888 = setTimeout(function () {
        $(".dns_type_menu").hide();
      }, 150);
    }
  });
  $(".dns_type_menu").on({
    mouseenter: function () {
      clearTimeout(_0x4ef888);
    },
    mouseleave: function () {
      var _0xf256a6 = $(this);
      _0x4ef888 = setTimeout(function () {
        _0xf256a6.hide();
      }, 150);
    }
  });
  var _0x446db4;
  $("#takeScreenshot").mouseover(function () {
    _0x446db4 = layer.tips("1、将关键数据截图并同时去除广告<br>2、首次生成截图可能需要较长时间", "#takeScreenshot", {
      tips: [1, "#6c757d"],
      time: 0,
      anim: -1,
      tipsMore: true,
      isOutAnim: false
    });
  });
  $("#takeScreenshot").mouseout(function () {
    layer.close(_0x446db4);
  });
  $("#host").bind("keyup", function (_0x217a37) {
    _0x217a37.keyCode == "13" && check_form();
  });
});