//Fri Sep 27 2024 02:45:00 GMT+0000 (Coordinated Universal Time)
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
  for (var _0x109f01 = 0; _0x109f01 < 34; _0x109f01++) {
    china_fast[_0x109f01] = 9999;
    china_data[_0x109f01] = "";
  }
  var _0x3622c5 = [{
    start: 0,
    end: 0.5,
    label: "<=0.5s",
    color: "#24aa1d"
  }, {
    start: 0.501,
    end: 1,
    label: "0.5s-1s",
    color: "#42dd3f"
  }, {
    start: 1.001,
    end: 3,
    label: "1s-3s",
    color: "#bef663"
  }, {
    start: 3.001,
    end: 10,
    label: "3s-10s",
    color: "#f69833"
  }, {
    start: 10.001,
    end: 99.999,
    label: ">10s",
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
      formatter: function (_0x52844b) {
        if (isNaN(_0x52844b.value)) {
          return "\n                        <div>\n                            <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">" + _0x52844b.name + "</p>\n                            <p  style=\"line-height: 20px; padding: 0 10px;\">此区域暂时没有数据</p>\n                      </div>\n                      ";
        }
        if (_0x52844b.value > 10) {
          var _0x53bb23 = "<font color=#e61610>超时</font>";
        } else {
          var _0x53bb23 = _0x52844b.value + "s";
        }
        return "\n                    <div>\n                        <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">" + _0x52844b.name + "</p>\n                        <p  style=\"line-height: 20px; padding: 0 10px;\">最快响应：" + _0x53bb23 + "</p>\n                        " + _0x52844b.data.datas + "\n                  </div>\n                  ";
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
      splitList: _0x3622c5,
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
  china_map.on("click", function (_0x12de5b) {
    if (_0x12de5b.name == "") {
      return false;
    }
    $("input[name='filter_line']").prop("checked", false);
    $(".filter_ip").text(_0x12de5b.name);
    $(".label_filter_ip").show();
    filter_map_count = 0;
    $(".node_tr").each(function () {
      $(this).find("td:first").text().indexOf(_0x12de5b.name) != -1 ? (filter_map_count++, $(this).show()) : $(this).hide();
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
  marker_list = marker_arr.filter(function (_0x5a44) {
    return _0x5a44.show === true;
  }).filter(function (_0x2940b8) {
    var _0x6af218 = mydata.find(_0x124b63 => _0x124b63.name == _0x2940b8.name);
    return _0x6af218.value < 10;
  }).map(function (_0x5333a6) {
    var [_0x35e43d, _0x19fa29] = _0x5333a6.x_y.split(",").map(Number),
      _0x2cf6d1 = "#fff";
    return {
      value: [_0x35e43d, _0x19fa29, _0x2cf6d1]
    };
  });
  option.series[0].data = mydata;
  marker_switch && (option.series[1].data = marker_list);
  china_map.setOption(option);
}
function str_num(_0x1ebdfd, _0x3add4b) {
  return _0x1ebdfd.split(_0x3add4b).length - 1;
}
function left(_0x4fc0ad, _0x2abff2) {
  return _0x2abff2 > 0 ? _0x4fc0ad.substring(0, _0x2abff2) : null;
}
function right(_0x4cee93, _0x3d1506) {
  return _0x4cee93.length - _0x3d1506 >= 0 && _0x4cee93.length >= 0 && _0x4cee93.length - _0x3d1506 <= _0x4cee93.length ? _0x4cee93.substring(_0x4cee93.length - _0x3d1506, _0x4cee93.length) : null;
}
function sortByDescNum(_0x1e2215, _0x4a12f5) {
  _0x1e2215.sort(function (_0x20c296, _0x5d379b) {
    return _0x5d379b[_0x4a12f5] - _0x20c296[_0x4a12f5];
  });
  return _0x1e2215;
}
function filter_ip(_0x37200d) {
  $(".filter_ip").text(_0x37200d);
  $(".label_filter_ip").show();
  $("input[name='filter_line']").prop("checked", false);
  var _0x47534e = 0;
  $(".node_tr").each(function () {
    $("#real_ip_" + $(this).attr("node")).text() == _0x37200d ? (_0x47534e++, $(this).show()) : $(this).hide();
  });
  $(".show_record").text(_0x47534e);
}
$("input[name='filter_line']").click(function () {
  $(".label_filter_ip").hide();
  var _0x1d44b1 = $(this).val(),
    _0x22e73a = 0,
    _0x2058e3 = 0,
    _0x5f2717 = 0,
    _0x409116 = 0,
    _0x1c8cc6 = 0,
    _0x2412bf = 0,
    _0x47b4f3 = 0;
  $(".node_tr").each(function () {
    _0x22e73a++;
    if ($(this).attr("node_type") == _0x1d44b1 || _0x1d44b1 == "all") {
      $(this).show();
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
    _0x1d44b1 == "6" && $(this).attr("time_out") == "true" && ($(this).show(), _0x47b4f3++);
    if (_0x1d44b1 == "all") {
      $(".show_record").text(_0x22e73a);
    } else {
      if (_0x1d44b1 == "1") {
        $(".show_record").text(_0x2058e3);
      } else {
        if (_0x1d44b1 == "2") {
          $(".show_record").text(_0x5f2717);
        } else {
          if (_0x1d44b1 == "3") {
            $(".show_record").text(_0x409116);
          } else {
            if (_0x1d44b1 == "4") {
              $(".show_record").text(_0x1c8cc6);
            } else {
              if (_0x1d44b1 == "5") {
                $(".show_record").text(_0x2412bf);
              } else {
                _0x1d44b1 == "6" && $(".show_record").text(_0x47b4f3);
              }
            }
          }
        }
      }
    }
  });
});
$(document).on("click", ".show_head_button", function () {
  $("#head_show_" + $(this).attr("node")).is(":hidden") ? ($("#head_show_" + $(this).attr("node")).show(300), $(this).text("收起")) : ($("#head_show_" + $(this).attr("node")).hide(), $(this).text("查看"));
});
$("#ad_options").click(function () {
  layer.closeAll();
  $(".dns-list").hide();
  $(".advanced").css("display") == "block" ? ($(".advanced").hide(30), $(".icon-chevrons-down").css("transform", "unset")) : ($(".advanced").show(30), $(".icon-chevrons-down").css("transform", "rotate(-180deg)"));
});
function debounce(_0x5a4d32, _0x7efd7c) {
  let _0x142162;
  return function () {
    const _0x552244 = this,
      _0xd7d6b9 = arguments;
    clearTimeout(_0x142162);
    _0x142162 = setTimeout(function () {
      _0x5a4d32.apply(_0x552244, _0xd7d6b9);
    }, _0x7efd7c);
  };
}
const refreshData_slow = debounce(function () {
  refreshData();
}, 0);
function http_test(_0x218310) {
  var _0x47d02b = _0x218310.node_id;
  complete_node_num = complete_node_num + 1;
  if (complete_node_num > check_node_num) {
    return false;
  }
  complete_node_num == check_node_num && $(".checking").hide();
  var _0x265843 = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width:" + GetPercent(complete_node_num, check_node_num) + ";\" aria-valuenow=\"" + complete_node_num + "\" aria-valuemin=\"0\" aria-valuemax=\"" + check_node_num + "\">" + GetPercent(complete_node_num, check_node_num) + "</div>";
  $("#complete_progress").html(_0x265843);
  if (isip(_0x218310.ip)) {
    $("#real_ip_" + _0x47d02b).text(_0x218310.ip);
    $("#address_" + _0x47d02b).text(_0x218310.address);
    $("#address_" + _0x47d02b).attr("title", _0x218310.address);
    $("#hover_button_" + _0x47d02b).attr("style", "");
    ip = _0x218310.ip;
    var _0x5ec213 = parseInt(_0x218310.http_code);
    _0x5ec213 != "0" ? ($("#http_code_" + _0x47d02b).text(_0x5ec213), _0x5ec213 >= 500 && $("#http_code_" + _0x47d02b).css("color", "#e61610")) : ($("#http_code_" + _0x47d02b).html("<font color='#e61610'>失败</font>"), $(".node_tr[node='" + _0x47d02b + "']").attr("time_out", "true"), time_out_num = time_out_num + 1, $(".time_out").text(time_out_num), $(".time_out").show());
    var _0x21e33b = parseFloat(_0x218310.all_time);
    if (_0x21e33b <= 0.5) {
      var _0x530e25 = "#24aa1d";
    } else {
      if (_0x21e33b > 0.501 && _0x21e33b <= 1) {
        var _0x530e25 = "#42dd3f";
      } else {
        if (_0x21e33b > 1.001 && _0x21e33b <= 3) {
          var _0x530e25 = "#968c43";
        } else {
          if (_0x21e33b > 3.001 && _0x21e33b <= 10) {
            var _0x530e25 = "#f69833";
          } else {
            if (_0x21e33b > 10) {
              var _0x530e25 = "#e61610";
            }
          }
        }
      }
    }
    $("#all_time_" + _0x47d02b).html("<font color='" + _0x530e25 + "'>" + _0x21e33b + "s</font>");
    var _0x20a1a1 = _0x218310.dns_time;
    _0x20a1a1 != "0.000" && $("#dns_time_" + _0x47d02b).text(_0x20a1a1 + "s");
    var _0x2a839e = _0x218310.connect_time;
    _0x2a839e != "0.000" ? $("#connect_time_" + _0x47d02b).text(_0x2a839e + "s") : $("#connect_time_" + _0x47d02b).text("失败");
    var _0x245e8f = _0x218310.download_time;
    _0x245e8f != "0.000" && $("#download_time_" + _0x47d02b).text(_0x245e8f + "s");
    var _0x37ef66 = _0x218310.redirect,
      _0x289054 = _0x218310.redirect_time;
    _0x37ef66 != "0" && $("#redirect_" + _0x47d02b).text(_0x37ef66 + "次" + " (耗时: " + _0x289054 + "s)");
    if (_0x218310.http_code != "0") {
      var _0x42e601 = left(_0x218310.head, _0x218310.head.length - 8);
      $(".node_tr[node='" + _0x47d02b + "']").after("<tr class=\"head_info\" id=\"head_show_" + _0x47d02b + "\" style=\"display:none;background-color: #f9fbff\"><td class=\"text-left head_view\" colspan=\"11\">" + _0x42e601 + "</td></tr>");
      $("#head_" + _0x47d02b).html("<a class=\"show_head_button\" node=\"" + _0x47d02b + "\" href=\"javascript:;\">查看</a>");
    }
  } else {
    $("#real_ip_" + _0x47d02b).html("<span class=\"text-danger\">解析失败</span>");
    $(".node_tr[node='" + _0x47d02b + "']").attr("time_out", "true");
    time_out_num = time_out_num + 1;
    $(".time_out").text(time_out_num);
    $(".time_out").show();
  }
  ipv4_list_arr.push(_0x218310);
  var _0x5a2dc1 = 100 / ipv4_list_arr.length;
  let _0x142db4 = {};
  ipv4_list_arr.forEach(_0x368c67 => {
    _0x142db4[_0x368c67.ip] = _0x142db4[_0x368c67.ip] || [];
    _0x368c67.pre = _0x5a2dc1;
    _0x142db4[_0x368c67.ip].push(_0x368c67);
  });
  var _0x50d590 = [];
  Object.keys(_0x142db4).forEach(function (_0x43fe3c) {
    let _0x352534 = {
      ip: _0x43fe3c
    };
    _0x352534.ip = _0x43fe3c;
    _0x352534.pre = (_0x5a2dc1 * _0x142db4[_0x43fe3c].length).toFixed(2);
    _0x50d590.push(_0x352534);
  });
  _0x50d590 = sortByDescNum(_0x50d590, "pre");
  $(".ip_list").html("");
  $(".copy_ip").attr("copy-text", "");
  for (var _0x45c173 = 0; _0x45c173 < _0x50d590.length; _0x45c173++) {
    if (isip(_0x50d590[_0x45c173].ip)) {
      var _0x4d3d53 = _0x50d590[_0x45c173].ip;
    } else {
      var _0x4d3d53 = "解析失败";
    }
    $(".ip_list").append(" <a title=\"点击筛选\" class=\"pointer noselect\" onclick=\"filter_ip('" + _0x4d3d53 + "')\"><li><span class=\"ml-3\">" + _0x4d3d53 + "</span><span class=\"text-primary float-right mr-3\">" + _0x50d590[_0x45c173].pre + "%</span></li></a>");
    $(".copy_ip").attr("copy-text") == "" ? $(".copy_ip").attr("copy-text", _0x4d3d53) : $(".copy_ip").attr("copy-text", $(".copy_ip").attr("copy-text") + "\n" + _0x4d3d53);
  }
  $("#ipv4_num").text(_0x50d590.length);
  if (_0x218310.province != 99) {
    typeof _0x218310.http_code == "undefined" && china_fast[_0x218310.province] != "15" && (marker_arr[_0x218310.province].show = true);
    _0x218310.http_code == "0" && china_fast[_0x218310.province] != "15" && (marker_arr[_0x218310.province].show = true);
    if (_0x218310.http_code != "0" && isip(_0x218310.ip) == true && china_fast[_0x218310.province] > parseFloat(_0x218310.all_time)) {
      china_fast[_0x218310.province] = _0x218310.all_time;
    } else {
      (_0x218310.http_code == "0" && china_fast[_0x218310.province] == "9999" || isip(_0x218310.ip) == false && china_fast[_0x218310.province] == "9999") && (china_fast[_0x218310.province] = 15);
    }
    if (_0x218310.line == "1") {
      var _0x2a5ea7 = "<font color=#9ccc65>[电信]</font>",
        _0xacbfe0 = _0x218310.name.replace("电信", "");
    } else {
      if (_0x218310.line == "2") {
        var _0x2a5ea7 = "<font color=#ffba57>[联通]</font>",
          _0xacbfe0 = _0x218310.name.replace("联通", "");
      } else {
        if (_0x218310.line == "3") {
          var _0x2a5ea7 = "<font color=#00acc1>[移动]</font>",
            _0xacbfe0 = _0x218310.name.replace("移动", "");
        } else {
          if (_0x218310.line == "5") {
            var _0x2a5ea7 = "",
              _0xacbfe0 = _0x218310.name.replace("海外", "");
          }
        }
      }
    }
    if (_0x218310.http_code == "0") {
      var _0x1a6ddc = "<font color=#e61610>超时</font>";
    } else {
      if (parseInt(_0x218310.all_time) > 10) {
        var _0x1a6ddc = "<font color=#e61610>超时</font>";
      } else {
        if (isip(_0x218310.ip) == false) {
          var _0x1a6ddc = "<font color=#e61610>解析失败</font>";
        } else {
          var _0x1a6ddc = _0x218310.all_time + "s";
        }
      }
    }
    china_data[_0x218310.province] == "" ? china_data[_0x218310.province] = "<p style=\"line-height: 10px; padding: 0 10px;\">" + _0x2a5ea7 + " " + _0xacbfe0 + "：" + _0x1a6ddc + "</p>" : china_data[_0x218310.province] = china_data[_0x218310.province] + "<p style=\"line-height: 10px; padding: 0 10px;\">" + _0x2a5ea7 + " " + _0xacbfe0 + "：" + _0x1a6ddc + "</p>";
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
                        name: "黑龙江",
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
                                                name: "内蒙古",
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
    china_fast[_0x45c173] != 9999 ? mydata[mydata.length] = _0x4b070f : mydata[mydata.length] = {
      name: "北京"
    };
  }
  refreshData_slow();
  if (isip(_0x218310.ip) == false) {
    return false;
  }
  if (_0x218310.province != 99 && _0x218310.http_code != "0") {
    china_node_num = china_node_num + 1;
    china_all_time = china_all_time + _0x21e33b;
    china_fast_time > _0x21e33b && (china_fast_time = _0x21e33b, $("#china_fast").text(_0x218310.name + " " + _0x21e33b + "s"));
    china_slow < _0x21e33b && (china_slow = _0x21e33b, $("#china_slow").text(_0x218310.name + " " + _0x21e33b + "s"));
    var _0x155fcc = china_all_time / china_node_num;
    $("#china_avg").text(_0x155fcc.toFixed(3) + "s");
  }
  if (_0x218310.line == "1" && _0x218310.http_code != "0") {
    ct_node_num = ct_node_num + 1;
    ct_all_time = ct_all_time + _0x21e33b;
    ct_fast > _0x218310.all_time && (ct_fast = _0x218310.all_time, $("#ct_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    ct_slow < _0x218310.all_time && (ct_slow = _0x218310.all_time, $("#ct_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x578c7e = ct_all_time / ct_node_num;
    $("#ct_avg").text(_0x578c7e.toFixed(3) + "s");
  }
  if (_0x218310.line == "2" && _0x218310.http_code != "0") {
    cu_node_num = cu_node_num + 1;
    cu_all_time = cu_all_time + _0x21e33b;
    cu_fast > _0x218310.all_time && (cu_fast = _0x218310.all_time, $("#cu_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    cu_slow < _0x218310.all_time && (cu_slow = _0x218310.all_time, $("#cu_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x26ae86 = cu_all_time / cu_node_num;
    $("#cu_avg").text(_0x26ae86.toFixed(3) + "s");
  }
  if (_0x218310.line == "3" && _0x218310.http_code != "0") {
    cm_node_num = cm_node_num + 1;
    cm_all_time = cm_all_time + _0x21e33b;
    cm_fast > _0x218310.all_time && (cm_fast = _0x218310.all_time, $("#cm_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    cm_slow < _0x218310.all_time && (cm_slow = _0x218310.all_time, $("#cm_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x14aee7 = cm_all_time / cm_node_num;
    $("#cm_avg").text(_0x14aee7.toFixed(3) + "s");
  }
  if (_0x218310.region == "1" && _0x218310.http_code != "0") {
    huadong_node_num = huadong_node_num + 1;
    huadong_all_time = huadong_all_time + _0x21e33b;
    huadong_fast > _0x218310.all_time && (huadong_fast = _0x218310.all_time, $("#huadong_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    huadong_slow < _0x218310.all_time && (huadong_slow = _0x218310.all_time, $("#huadong_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x1191c1 = huadong_all_time / huadong_node_num;
    $("#huadong_avg").text(_0x1191c1.toFixed(3) + "s");
  }
  if (_0x218310.region == "2" && _0x218310.http_code != "0") {
    huanan_node_num = huanan_node_num + 1;
    huanan_all_time = huanan_all_time + _0x21e33b;
    huanan_fast > _0x218310.all_time && (huanan_fast = _0x218310.all_time, $("#huanan_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    huanan_slow < _0x218310.all_time && (huanan_slow = _0x218310.all_time, $("#huanan_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x51ffee = huanan_all_time / huanan_node_num;
    $("#huanan_avg").text(_0x51ffee.toFixed(3) + "s");
  }
  if (_0x218310.region == "3" && _0x218310.http_code != "0") {
    huazhong_node_num = huazhong_node_num + 1;
    huazhong_all_time = huazhong_all_time + _0x21e33b;
    huazhong_fast > _0x218310.all_time && (huazhong_fast = _0x218310.all_time, $("#huazhong_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    huazhong_slow < _0x218310.all_time && (huazhong_slow = _0x218310.all_time, $("#huazhong_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x275393 = huazhong_all_time / huazhong_node_num;
    $("#huazhong_avg").text(_0x275393.toFixed(3) + "s");
  }
  if (_0x218310.region == "4" && _0x218310.http_code != "0") {
    huabei_node_num = huabei_node_num + 1;
    huabei_all_time = huabei_all_time + _0x21e33b;
    huabei_fast > _0x218310.all_time && (huabei_fast = _0x218310.all_time, $("#huabei_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    huabei_slow < _0x218310.all_time && (huabei_slow = _0x218310.all_time, $("#huabei_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x3278fc = huabei_all_time / huabei_node_num;
    $("#huabei_avg").text(_0x3278fc.toFixed(3) + "s");
  }
  if (_0x218310.region == "5" && _0x218310.http_code != "0") {
    xinan_node_num = xinan_node_num + 1;
    xinan_all_time = xinan_all_time + _0x21e33b;
    xinan_fast > _0x218310.all_time && (xinan_fast = _0x218310.all_time, $("#xinan_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    xinan_slow < _0x218310.all_time && (xinan_slow = _0x218310.all_time, $("#xinan_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x353a62 = xinan_all_time / xinan_node_num;
    $("#xinan_avg").text(_0x353a62.toFixed(3) + "s");
  }
  if (_0x218310.region == "6" && _0x218310.http_code != "0") {
    xibei_node_num = xibei_node_num + 1;
    xibei_all_time = xibei_all_time + _0x21e33b;
    xibei_fast > _0x218310.all_time && (xibei_fast = _0x218310.all_time, $("#xibei_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    xibei_slow < _0x218310.all_time && (xibei_slow = _0x218310.all_time, $("#xibei_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x445a63 = xibei_all_time / xibei_node_num;
    $("#xibei_avg").text(_0x445a63.toFixed(3) + "s");
  }
  if (_0x218310.region == "7" && _0x218310.http_code != "0") {
    dongbei_node_num = dongbei_node_num + 1;
    dongbei_all_time = dongbei_all_time + _0x21e33b;
    dongbei_fast > _0x218310.all_time && (dongbei_fast = _0x218310.all_time, $("#dongbei_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    dongbei_slow < _0x218310.all_time && (dongbei_slow = _0x218310.all_time, $("#dongbei_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x328b5d = dongbei_all_time / dongbei_node_num;
    $("#dongbei_avg").text(_0x328b5d.toFixed(3) + "s");
  }
  if (_0x218310.region == "8" && _0x218310.http_code != "0") {
    gangaotai_node_num = gangaotai_node_num + 1;
    gangaotai_all_time = gangaotai_all_time + _0x21e33b;
    gangaotai_fast > _0x218310.all_time && (gangaotai_fast = _0x218310.all_time, $("#gangaotai_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    gangaotai_slow < _0x218310.all_time && (gangaotai_slow = _0x218310.all_time, $("#gangaotai_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x14d64f = gangaotai_all_time / gangaotai_node_num;
    $("#gangaotai_avg").text(_0x14d64f.toFixed(3) + "s");
  }
  if (_0x218310.province == "99" && _0x218310.http_code != "-1") {
    global_node_num = global_node_num + 1;
    global_all_time = global_all_time + _0x21e33b;
    global_fast > _0x218310.all_time && (global_fast = _0x218310.all_time, $("#global_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    global_slow < _0x218310.all_time && (global_slow = _0x218310.all_time, $("#global_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x2c7e4d = global_all_time / global_node_num;
    $("#global_avg").text(_0x2c7e4d.toFixed(3) + "s");
  }
  if (_0x218310.region == "9" && _0x218310.http_code != "0") {
    asia_node_num = asia_node_num + 1;
    asia_all_time = asia_all_time + _0x21e33b;
    asia_fast > _0x218310.all_time && (asia_fast = _0x218310.all_time, $("#asia_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    asia_slow < _0x218310.all_time && (asia_slow = _0x218310.all_time, $("#asia_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x5bab77 = asia_all_time / asia_node_num;
    $("#asia_avg").text(_0x5bab77.toFixed(3) + "s");
  }
  if (_0x218310.region == "10" && _0x218310.http_code != "0") {
    europe_node_num = europe_node_num + 1;
    europe_all_time = europe_all_time + _0x21e33b;
    europe_fast > _0x218310.all_time && (europe_fast = _0x218310.all_time, $("#europe_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    europe_slow < _0x218310.all_time && (europe_slow = _0x218310.all_time, $("#europe_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0xe5692e = europe_all_time / europe_node_num;
    $("#europe_avg").text(_0xe5692e.toFixed(3) + "s");
  }
  if (_0x218310.region == "11" && _0x218310.http_code != "0") {
    north_node_num = north_node_num + 1;
    north_all_time = north_all_time + _0x21e33b;
    north_fast > _0x218310.all_time && (north_fast = _0x218310.all_time, $("#north_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    north_slow < _0x218310.all_time && (north_slow = _0x218310.all_time, $("#north_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x419990 = north_all_time / north_node_num;
    $("#north_avg").text(_0x419990.toFixed(3) + "s");
  }
  if (_0x218310.region == "12" && _0x218310.http_code != "0") {
    south_node_num = south_node_num + 1;
    south_all_time = south_all_time + _0x21e33b;
    south_fast > _0x218310.all_time && (south_fast = _0x218310.all_time, $("#south_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    south_slow < _0x218310.all_time && (south_slow = _0x218310.all_time, $("#south_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x211429 = south_all_time / south_node_num;
    $("#south_avg").text(_0x211429.toFixed(3) + "s");
  }
  if (_0x218310.region == "13" && _0x218310.http_code != "0") {
    africa_node_num = africa_node_num + 1;
    africa_all_time = africa_all_time + _0x21e33b;
    africa_fast > _0x218310.all_time && (africa_fast = _0x218310.all_time, $("#africa_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    africa_slow < _0x218310.all_time && (africa_slow = _0x218310.all_time, $("#africa_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x24ddca = africa_all_time / africa_node_num;
    $("#africa_avg").text(_0x24ddca.toFixed(3) + "s");
  }
  if (_0x218310.region == "14" && _0x218310.http_code != "0") {
    oceania_node_num = oceania_node_num + 1;
    oceania_all_time = oceania_all_time + _0x21e33b;
    oceania_fast > _0x218310.all_time && (oceania_fast = _0x218310.all_time, $("#oceania_fast").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    oceania_slow < _0x218310.all_time && (oceania_slow = _0x218310.all_time, $("#oceania_slow").text(_0x218310.name + " " + _0x218310.all_time + "s"));
    var _0x34e7ba = oceania_all_time / oceania_node_num;
    $("#oceania_avg").text(_0x34e7ba.toFixed(3) + "s");
  }
}
function GetPercent(_0x2d9db9, _0xa463b8) {
  _0x2d9db9 = parseFloat(_0x2d9db9);
  _0xa463b8 = parseFloat(_0xa463b8);
  if (isNaN(_0x2d9db9) || isNaN(_0xa463b8)) {
    return "-";
  }
  return _0xa463b8 <= 0 ? "0%" : Math.round(_0x2d9db9 / _0xa463b8 * 10000) / 100 + "%";
}
function check_complete() {
  var _0x4b7a49 = true;
  $.each($("tr.node_tr"), function () {
    var _0x33a582 = $(this).attr("node");
    if ($("#send_" + _0x33a582).text() != "100") {
      _0x4b7a49 = false;
      return false;
    }
  });
  return _0x4b7a49;
}
function update_canvas(_0x38f4d8, _0x333105, _0x3b17a3) {
  var _0x3e294e = document.getElementById("canvas_" + _0x38f4d8),
    _0x216473 = _0x3e294e.getContext("2d"),
    _0x333105 = _0x333105 - 1;
  if (_0x3b17a3 >= 350) {
    _0x216473.fillStyle = "orange";
  } else {
    _0x3b17a3 == "-1" ? _0x216473.fillStyle = "red" : _0x216473.fillStyle = "green";
  }
  if (_0x3b17a3 == "-1") {
    var _0x544c7a = 20;
  } else {
    var _0x544c7a = parseInt(_0x3b17a3 / 15);
  }
  _0x544c7a < 1 && (_0x544c7a = 1);
  var _0xbe50ed = _0x333105 * 2,
    _0x50ff54 = 20 - _0x544c7a;
  _0x216473.fillRect(_0xbe50ed, _0x50ff54, 2, _0x544c7a);
}
function check_post(_0x544266, _0x23cda7) {
  var _0x376c66 = document.createElement("form");
  _0x376c66.action = _0x544266;
  _0x376c66.method = "post";
  _0x376c66.style.display = "none";
  for (var _0x1bf988 in _0x23cda7) {
    var _0x49cf15 = document.createElement("textarea");
    _0x49cf15.name = _0x1bf988;
    _0x49cf15.value = _0x23cda7[_0x1bf988];
    _0x376c66.appendChild(_0x49cf15);
  }
  document.body.appendChild(_0x376c66);
  _0x376c66.submit();
  return _0x376c66;
}
function check_post_blank(_0x4e16eb, _0x234ecb) {
  var _0x3cbb0b = document.createElement("form");
  _0x3cbb0b.action = _0x4e16eb;
  _0x3cbb0b.method = "post";
  _0x3cbb0b.target = Math.random() + "_blank";
  _0x3cbb0b.style.display = "none";
  for (var _0xcd2e99 in _0x234ecb) {
    var _0x145fc6 = document.createElement("textarea");
    _0x145fc6.name = _0xcd2e99;
    _0x145fc6.value = _0x234ecb[_0xcd2e99];
    _0x3cbb0b.appendChild(_0x145fc6);
  }
  document.body.appendChild(_0x3cbb0b);
  _0x3cbb0b.submit();
  return _0x3cbb0b;
}
function ping_button(_0x3fefba, _0x3ccf4e) {
  var _0x2e8cd7 = $("#real_ip_" + _0x3fefba).text();
  _0x3ccf4e == "many" ? check_post_blank("/ping/" + _0x2e8cd7, {
    mode: "many",
    button_click: "yes"
  }) : check_post_blank("/ping/" + _0x2e8cd7, {
    button_click: "yes"
  });
}
function tcping_button(_0x558006, _0x2467c0) {
  var _0x6fa6e5 = $("#real_ip_" + _0x558006).text();
  _0x2467c0 == "many" ? check_post_blank("/tcping/" + _0x6fa6e5 + ":" + port, {
    mode: "many",
    button_click: "yes"
  }) : check_post_blank("/tcping/" + _0x6fa6e5 + ":" + port, {
    button_click: "yes"
  });
}
function tracert_button(_0x44ba73) {
  var _0x58c751 = $("#real_ip_" + _0x44ba73).text();
  check_post_blank("/traceroute/" + _0x58c751, {
    node: _0x44ba73
  });
}
function http_button(_0x4b8c63) {
  var _0x5c0941 = $("#real_ip_" + _0x4b8c63).text();
  check_post_blank("/http/", {
    host: _0x5c0941 + ":" + port
  });
}
function feedback_button(_0x5b369b) {
  var _0x271ed5 = $("#real_ip_" + _0x5b369b).text();
  check_post_blank("/feedback.php", {
    ip: _0x271ed5
  });
}
function check_form(_0x21423c) {
  if (_0x21423c == "slow") {
    var _0x3f74c2 = "slow";
  } else {
    var _0x3f74c2 = "fast";
  }
  var _0x1a4bee = $("#host").val().trim(),
    _0x59f6a9 = _0x1a4bee;
  _0x59f6a9 = _0x59f6a9.split("/");
  _0x59f6a9[2] ? _0x59f6a9 = _0x59f6a9[2] : (_0x59f6a9 = _0x1a4bee.replace(/\//g, ""), _0x59f6a9 = _0x59f6a9.replace(/。/g, "."), _0x59f6a9 = _0x59f6a9.replace(/\\/g, ""), _0x59f6a9 = _0x59f6a9.replace(/：/g, ":"));
  var _0x5b462f = check_line(),
    _0x57ec4b = $("#ipv4").val(),
    _0x1b8397 = $("input[name='method']:checked").val(),
    _0x11d052 = $("#referer").val(),
    _0x33896b = $("#ua").val(),
    _0x53ca7d = $("#cookies").val(),
    _0x3c016f = $("#redirect_num").val();
  if (_0x57ec4b.length > 200) {
    err_tip_more("<li>{高级选项>指定解析} 的内容不能大于200字符</li>");
    return false;
  }
  if (_0x11d052.length > 200) {
    err_tip_more("<li>{高级选项>referer} 的内容不能大于200字符</li>");
    return false;
  }
  if (_0x33896b.length > 200) {
    err_tip_more("<li>{高级选项>user-agent} 的内容不能大于200字符</li>");
    return false;
  }
  if (_0x53ca7d.length > 200) {
    err_tip_more("<li>{高级选项>cookie} 的内容不能大于200字符</li>");
    return false;
  }
  if (parseInt(_0x3c016f) < 0 || parseInt(_0x3c016f) > 10) {
    err_tip_more("<li>{高级选项>重定向} 的值应是：0~10</li>");
    return false;
  }
  var _0x2680c8 = $("input[name='dns_server_type']:checked").val(),
    _0x3ca22d = $("#dns_server").val();
  if (_0x2680c8 == "custom" && isipv4(_0x3ca22d) == false) {
    err_tip_more("<li>指定的DNS服务器必须是IPv4</li>");
    return false;
  }
  if ($("#host").val() == "") {
    err_tip_more("<li>请输入检测目标（域名、IPv4、URL）</li>");
    return false;
  }
  $(".advanced").hide();
  $(".icon-chevrons-down").css("transform", "unset");
  check_post("/http/", {
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
    $("#takeScreenshot").html("<div class=\"spinner-border spinner-border-sm\" role=\"status\"></div> 正在生成");
    $("#takeScreenshot").attr("disabled", true);
    domtoimage.toBlob(document.getElementById("screenshots")).then(function (_0x131361) {
      window.saveAs(_0x131361, _0x5a09a0 + "_多地区多线路HTTP测速.png");
      unmosaic();
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
    cancel: function () {
      unmosaic();
    }
  });
}
function copy_screenshot() {
  ad_hide();
  setTimeout(function () {
    $("#takeScreenshot").html("<div class=\"spinner-border spinner-border-sm\" role=\"status\"></div> 正在生成");
    $("#takeScreenshot").attr("disabled", true);
    var _0xd9cc8f = document.getElementById("screenshots");
    domtoimage.toPng(_0xd9cc8f).then(function (_0x2441ec) {
      get_img(_0x2441ec.replace(/data:image\/png;base64,/g, ""));
    }).catch(function (_0xf15adf) {
      console.error("oops, something went wrong!", _0xf15adf);
    });
  }, 10);
}
function get_img(_0x37299e) {
  try {
    var _0x37299e = _0x37299e;
    const _0x376c07 = convertBase64ToBlob(_0x37299e, "image/png"),
      _0x3ba317 = new ClipboardItem({
        "image/png": _0x376c07
      });
    navigator.clipboard.write([_0x3ba317]);
    $("#takeScreenshot").html("<i class=\"feather icon-camera\"></i> 完整截图");
    $("#takeScreenshot").attr("disabled", false);
    layer.msg("<i class=\"fas fa-check-circle text-success\"></i> 截图复制成功，可以粘贴到ＱＱ、Word等编辑器");
    unmosaic();
  } catch (_0x5b74e4) {
    console.log(_0x5b74e4);
  }
}
function convertBase64ToBlob(_0x286da8, _0x1dc4ea) {
  var _0x29b516 = window.atob(_0x286da8),
    _0x3c280c = new ArrayBuffer(_0x29b516.length),
    _0x5e6cb5 = new Uint8Array(_0x3c280c);
  for (var _0x2e5905 = 0; _0x2e5905 < _0x29b516.length; _0x2e5905++) {
    _0x5e6cb5[_0x2e5905] = _0x29b516.charCodeAt(_0x2e5905);
  }
  return new Blob([_0x3c280c], {
    type: _0x1dc4ea
  });
}
function ad_hide() {
  $(".gg_link").remove();
  $(".address-hidden").css("max-width", "200px");
  $(".hover-button").addClass("d-none");
}
function mosaic() {
  $("input[name='mosaic']:checked").each(function (_0xff1dc3, _0x2f2de0) {
    if ($(this).val() == "ip") {
      $(".real_ip").addClass("mosaic");
      close_ip_list();
    } else {
      $(this).val() == "address" && $(".ip_address").addClass("mosaic");
    }
  });
}
function unmosaic() {
  $(".real_ip").removeClass("mosaic");
  $(".ip_address").removeClass("mosaic");
  $(".hover-button").removeClass("d-none");
}
function select_screenshot(_0x55fb19) {
  layer.open({
    type: 1,
    anim: -1,
    title: "",
    isOutAnim: false,
    closeBtn: 2,
    area: "350px",
    content: "<div class=\"p-4\" style=\"background-color: #ecf0f5;\"> <div class=\"text-center\"> <div style=\"border: 1px dashed #4680ff;padding: 10px 0;height: 75px;display: flex;\"><i class=\"fas fa-chess-board\" style=\"font-size: 46px;padding: 3px 10px;color: #7c9eff;width: 70px;height: 70px;\"></i> <div><div><i class=\"fas fa-info-circle\" style=\"font-size:15px;\"></i>  哪些地方需要打码? (可选)</div> <div class=\"text-center mt-2\" style=\"display: inline-flex;\"><label class=\"custom-control custom-checkbox done-task\"> <input type=\"checkbox\" name=\"mosaic\" value=\"ip\" class=\"custom-control-input\"> <span class=\"custom-control-label text-secondary\" style=\" \"> 域名或IP</span> </label> <label class=\"ml-3 custom-control custom-checkbox done-task\"> <input type=\"checkbox\" name=\"mosaic\" value=\"address\" class=\"custom-control-input\"> <span class=\"custom-control-label text-secondary\"> 地理位置</span> </label> </div></div></div> <div class=\"mt-3\" style=\"display: inline-flex;\"><button class=\"btn btn-primary btn-sm\" onclick=\"mosaic();layer.closeAll();down_screenshot('" + _0x55fb19 + "')\" style=\"display: inline-block;\"><i class=\"feather icon-download\"></i> 下载截图</button> <button class=\"btn btn-primary btn-sm ml-4\" onclick=\"mosaic();layer.closeAll();copy_screenshot_tip();\" style=\" display: inline-block; \"><i class=\"feather icon-copy\"></i> 复制截图</button> </div> </div>   </div>"
  });
}
function isip(_0x3878aa) {
  var _0x232ceb = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return _0x232ceb.test(_0x3878aa);
}
$("#takeScreenshot").click(function () {
  $(".advanced").hide();
  $(".icon-chevrons-down").css("transform", "unset");
});
$(function () {
  var _0x1efb45;
  $("#slow_check").mouseover(function () {
    _0x1efb45 = layer.tips("适合网站并发性能较差的场景使用", "#slow_check", {
      tips: [1, "#6c757d"],
      time: 0,
      anim: -1,
      tipsMore: true,
      isOutAnim: false
    });
  });
  $("#slow_check").mouseout(function () {
    layer.close(_0x1efb45);
  });
  var _0x39a22c;
  $("#takeScreenshot").mouseover(function () {
    _0x39a22c = layer.tips("1、将关键数据截图并同时去除广告<br>2、首次生成截图可能需要较长时间", "#takeScreenshot", {
      tips: [1, "#6c757d"],
      time: 0,
      anim: -1,
      tipsMore: true,
      isOutAnim: false
    });
  });
  $("#takeScreenshot").mouseout(function () {
    layer.close(_0x39a22c);
  });
  $("#host").bind("keyup", function (_0x1ed854) {
    _0x1ed854.keyCode == "13" && check_form(default_enter);
  });
});
function isipv4(_0x5d74b0) {
  var _0x554f69 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return _0x554f69.test(_0x5d74b0);
}