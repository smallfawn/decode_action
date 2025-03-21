//Fri Mar 21 2025 03:53:32 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
$(function () {
  console.log("  ___   _____ _____ _                 _ ");
  console.log(" / _ \\ |____ /  __ \\ |               | |");
  console.log("/ /_\\ \\    / / /  \\/ | ___  _   _  __| |");
  console.log("|  _  |    \\ \\ |   | |/ _ \\| | | |/ _` |");
  console.log("| | | |.___/ / \\__/\\ | (_) | |_| | (_| |");
  console.log("\\_| |_/\\____/ \\____/_|\\___/ \\__,_|\\__,_|--爱尚互联 30041321-小爱2020-12-10");
  var _0x27069b = "";
  var _0x427d59 = [];
  var _0x52b1c3 = [];
  var _0xd26220 = 2;
  var _0x13305d = 0;
  var _0x16ee2a = 0;
  var _0x2abb3f = 0;
  var _0x4d73fd = 0;
  var _0x52a287 = [];
  var _0x51e46c = [];
  var _0x10ab45 = k3lotteryrates.rates;
  var _0x231dfc = 10000;
  var _0x292624 = "";
  var _0x81bcd1 = {
    wx_fs: 192000,
    wx_zx120: 1600,
    wx_zx60: 3200,
    wx_zx30: 6400,
    wx_zx20: 9600,
    wx_zx10: 19200,
    wx_zx5: 38400,
    wx_1mbdw: 4.68,
    wx_2mbdw: 13.08,
    wx_3mbdw: 44.13,
    wx_yffs: 4.68,
    wx_hscs: 23.56,
    wx_sxbx: 224.29,
    wx_sjfc: 4173.91
  };
  function _0xcc2541() {
    _0x292624 = "wxzhixfs";
    rates = _0x10ab45[_0x292624];
    _0x3bb124($(".bet_filter_box"), ssc_5x_title, ssc_5x_arr);
    $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的全部五位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
    _0x4bf391(wx_fs);
  }
  _0xcc2541();
  getUserBetsListToday(lotteryname);
  if ($(".selectMultipInput").val() <= 1) {
    $(".reduce").addClass("noReduce");
  }
  $(".reduce").on("click", function () {
    _0x21ad93("-");
    _0x220d19();
  });
  $(".selectMultiple .add").on("click", function () {
    {
      _0x21ad93("+");
      _0x220d19();
    }
  });
  $(".selectMultipInput").on("change keyup", function () {
    _0x21ad93();
    _0x220d19();
  });
  $(".selectMultipleCon").on("change", function () {
    {
      _0x220d19();
    }
  });
  $(document).on("click", ".random5", function () {
    {
      for (var _0x294efe = 0; _0x294efe < 5; _0x294efe++) {
        _0x27696b();
      }
    }
  });
  $(document).on("click", ".random1", function () {
    {
      for (var _0x2bf795 = 0; _0x2bf795 < 1; _0x2bf795++) {
        _0x27696b();
      }
    }
  });
  function _0x1ec833(_0x464971) {
    var _0x587823 = true;
    var _0x20050a = Math.round(Math.random() * 8 + 1);
    if (_0x464971 instanceof Array) {
      for (var _0x7ff02c = 0; _0x7ff02c < _0x464971.length; _0x7ff02c++) {
        if (_0x20050a == parseInt(_0x464971[_0x7ff02c])) {
          _0x587823 = false;
          return _0x1ec833(_0x464971);
        }
      }
    } else {
      if (_0x20050a == parseInt(_0x464971)) {
        {
          _0x587823 = false;
          return _0x1ec833(_0x464971);
        }
      }
    }
    if (_0x587823) {
      return _0x20050a;
    }
  }
  function _0x32c589(_0xc492c8) {
    var _0x5a56f4 = $(".g_Number_Section").find(".selectNmuverBox");
    var _0x464282 = 0;
    var _0x1d877f = [];
    for (var _0x515926 = 0; _0x515926 < _0x5a56f4.length; _0x515926++) {
      {
        for (var _0x5d9b18 = 0; _0x5d9b18 < _0xc492c8; _0x5d9b18++) {
          {
            _0x464282 = Math.round(Math.random() * 8 + 1);
            _0x5a56f4.eq(_0x515926).find(".selectNumbers .curr").each(function () {
              {
                _0x1d877f.push($(this).text());
              }
            });
            _0x464282 = _0x1ec833(_0x1d877f);
            _0x5a56f4.eq(_0x515926).find(".selectNumbers a").eq(_0x464282).addClass("curr");
          }
        }
      }
    }
  }
  function _0x4a7ef1(_0x515527) {
    var _0x2e2eca = $(".g_Number_Section").find(".selectNmuverBox");
    var _0x112be5 = 0;
    var _0x119c63 = [];
    _0x112be5 = Math.round(Math.random() * 8 + 1);
    _0x2e2eca.eq(0).find(".selectNumbers a").eq(_0x112be5).addClass("curr");
    _0x119c63.push(_0x112be5);
    for (var _0x2203d9 = 0; _0x2203d9 < _0x515527; _0x2203d9++) {
      _0x2e2eca.eq(1).find(".selectNumbers .curr").each(function () {
        {
          _0x119c63.push($(this).text());
        }
      });
      _0x112be5 = _0x1ec833(_0x119c63);
      _0x2e2eca.eq(1).find(".selectNumbers a").eq(_0x112be5).addClass("curr");
    }
  }
  function _0x3913bb(_0xe1f0fc) {
    {
      var _0x157f58 = $(".g_Number_Section").find(".selectNmuverBox");
      var _0x4187bb = 0;
      var _0x2a05ce = [];
      _0x4187bb = Math.round(Math.random() * 8 + 1);
      _0x157f58.eq(1).find(".selectNumbers a").eq(_0x4187bb).addClass("curr");
      _0x2a05ce.push(_0x4187bb);
      for (var _0x52f54d = 0; _0x52f54d < _0xe1f0fc; _0x52f54d++) {
        {
          _0x157f58.eq(0).find(".selectNumbers .curr").each(function () {
            {
              _0x2a05ce.push($(this).text());
            }
          });
          _0x4187bb = _0x1ec833(_0x2a05ce);
          _0x157f58.eq(0).find(".selectNumbers a").eq(_0x4187bb).addClass("curr");
        }
      }
    }
  }
  function _0x2d6e4e(_0x570cae) {
    var _0x23cc3a = [];
    for (var _0x5f218b = 0; _0x5f218b < _0x570cae.length; _0x5f218b++) {
      if (_0x23cc3a.indexOf(_0x570cae[_0x5f218b]) == -1) {
        _0x23cc3a.push(_0x570cae[_0x5f218b]);
      }
    }
    return _0x23cc3a;
  }
  function _0x27696b() {
    var _0x527a45 = $(".g_Number_Section").find(".selectNmuverBox");
    var _0x3443ff = 0;
    _0x527a45.find(".selectNumber").removeClass("curr");
    $("#text").val("");
    if (_0x292624 == "wxzhixds") {
      {
        var _0x183551 = "";
        for (var _0x2f721a = 0; _0x2f721a < 5; _0x2f721a++) {
          _0x3443ff = Math.round(Math.random() * 8 + 1);
          _0x183551 = _0x3443ff + _0x183551;
        }
        $("#text").val(_0x183551);
      }
    } else {
      if (_0x292624 == "sixzhixdsh") {
        var _0x183551 = "";
        for (var _0x2f721a = 0; _0x2f721a < 4; _0x2f721a++) {
          _0x3443ff = Math.round(Math.random() * 8 + 1);
          _0x183551 = _0x3443ff + _0x183551;
        }
        $("#text").val(_0x183551);
      } else {
        if (_0x292624 == "sxzhixdsq" || _0x292624 == "sxzhixdsz" || _0x292624 == "sxzhixdsh") {
          var _0x183551 = "";
          for (var _0x2f721a = 0; _0x2f721a < 3; _0x2f721a++) {
            _0x3443ff = Math.round(Math.random() * 8 + 1);
            _0x183551 = _0x3443ff + _0x183551;
          }
          $("#text").val(_0x183551);
        } else {
          if (_0x292624 == "exzhixdsq" || _0x292624 == "exzhixdsh") {
            var _0x183551 = "";
            for (var _0x2f721a = 0; _0x2f721a < 2; _0x2f721a++) {
              {
                _0x3443ff = Math.round(Math.random() * 8 + 1);
                _0x183551 = _0x3443ff + _0x183551;
              }
            }
            $("#text").val(_0x183551);
          } else {
            if (_0x292624 == "wxzhixfs" || _0x292624 == "bdw5x1m" || _0x292624 == "qwyffs" || _0x292624 == "qwhscs" || _0x292624 == "qwsxbx" || _0x292624 == "qwsjfc" || _0x292624 == "sixzhixfsh" || _0x292624 == "bdw4x1m" || _0x292624 == "sxzhixfsq" || _0x292624 == "sxzhixfsz" || _0x292624 == "sxzhixfsh" || _0x292624 == "exzhixfsq" || _0x292624 == "exzhixfsh" || _0x292624 == "zhixhzqe" || _0x292624 == "zhixhzhe" || _0x292624 == "kuaduqe" || _0x292624 == "kuaduhe") {
              for (var _0x2f721a = 0; _0x2f721a < _0x527a45.length; _0x2f721a++) {
                _0x3443ff = Math.round(Math.random() * 8 + 1);
                _0x527a45.eq(_0x2f721a).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
              }
            } else {
              if (_0x292624 == "dxdsqe" || _0x292624 == "dxdshe" || _0x292624 == "dxdsqs" || _0x292624 == "dxdshs") {
                for (var _0x2f721a = 0; _0x2f721a < _0x527a45.length; _0x2f721a++) {
                  _0x3443ff = Math.round(Math.random() * 2 + 1);
                  _0x527a45.eq(_0x2f721a).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
                }
              } else {
                if (_0x292624 == "wxzxyel") {
                  var _0x4ba678 = [];
                  for (var _0x2f721a = 0; _0x2f721a < _0x527a45.length; _0x2f721a++) {
                    {
                      for (var _0x383924 = 0; _0x383924 < 5; _0x383924++) {
                        {
                          _0x3443ff = Math.round(Math.random() * 8 + 1);
                          _0x527a45.eq(_0x2f721a).find(".selectNumbers .curr").each(function () {
                            {
                              _0x4ba678.push($(this).text());
                            }
                          });
                          _0x3443ff = _0x1ec833(_0x4ba678);
                          _0x527a45.eq(_0x2f721a).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
                        }
                      }
                    }
                  }
                } else {
                  if (_0x292624 == "wxzxls") {
                    var _0x4ba678 = [];
                    _0x3443ff = Math.round(Math.random() * 8 + 1);
                    _0x527a45.eq(0).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
                    _0x4ba678.push(_0x3443ff);
                    for (var _0x2f721a = 0; _0x2f721a < 3; _0x2f721a++) {
                      _0x527a45.eq(1).find(".selectNumbers .curr").each(function () {
                        _0x4ba678.push($(this).text());
                      });
                      _0x3443ff = _0x1ec833(_0x4ba678);
                      _0x527a45.eq(1).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
                    }
                  } else {
                    if (_0x292624 == "wxzxsl") {
                      {
                        var _0x4ba678 = [];
                        _0x3443ff = Math.round(Math.random() * 8 + 1);
                        _0x527a45.eq(1).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
                        _0x4ba678.push(_0x3443ff);
                        for (var _0x2f721a = 0; _0x2f721a < 2; _0x2f721a++) {
                          _0x527a45.eq(0).find(".selectNumbers .curr").each(function () {
                            _0x4ba678.push($(this).text());
                          });
                          _0x3443ff = _0x1ec833(_0x4ba678);
                          _0x527a45.eq(0).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
                        }
                      }
                    } else {
                      if (_0x292624 == "wxzxel") {
                        var _0x4ba678 = [];
                        _0x3443ff = Math.round(Math.random() * 8 + 1);
                        _0x527a45.eq(0).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
                        _0x4ba678.push(_0x3443ff);
                        for (var _0x2f721a = 0; _0x2f721a < 2; _0x2f721a++) {
                          _0x527a45.eq(1).find(".selectNumbers .curr").each(function () {
                            {
                              _0x4ba678.push($(this).text());
                            }
                          });
                          _0x3443ff = _0x1ec833(_0x4ba678);
                          _0x527a45.eq(1).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
                        }
                      } else {
                        if (_0x292624 == "wxzxyl" || _0x292624 == "wxzxw") {
                          var _0x4ba678 = [];
                          _0x3443ff = Math.round(Math.random() * 8 + 1);
                          _0x527a45.eq(0).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
                          _0x4ba678.push(_0x3443ff);
                          for (var _0x2f721a = 0; _0x2f721a < 1; _0x2f721a++) {
                            _0x527a45.eq(1).find(".selectNumbers .curr").each(function () {
                              _0x4ba678.push($(this).text());
                            });
                            _0x3443ff = _0x1ec833(_0x4ba678);
                            _0x527a45.eq(1).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
                          }
                        } else {
                          if (_0x292624 == "bdw5x2m") {
                            {
                              var _0x4ba678 = [];
                              for (var _0x2f721a = 0; _0x2f721a < _0x527a45.length; _0x2f721a++) {
                                for (var _0x383924 = 0; _0x383924 < 2; _0x383924++) {
                                  {
                                    _0x3443ff = Math.round(Math.random() * 8 + 1);
                                    _0x527a45.eq(_0x2f721a).find(".selectNumbers .curr").each(function () {
                                      {
                                        _0x4ba678.push($(this).text());
                                      }
                                    });
                                    _0x3443ff = _0x1ec833(_0x4ba678);
                                    _0x527a45.eq(_0x2f721a).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
                                  }
                                }
                              }
                            }
                          } else {
                            if (_0x292624 == "bdw5x3m") {
                              var _0x4ba678 = [];
                              for (var _0x2f721a = 0; _0x2f721a < _0x527a45.length; _0x2f721a++) {
                                {
                                  for (var _0x383924 = 0; _0x383924 < 3; _0x383924++) {
                                    _0x3443ff = Math.round(Math.random() * 8 + 1);
                                    _0x527a45.eq(_0x2f721a).find(".selectNumbers .curr").each(function () {
                                      _0x4ba678.push($(this).text());
                                    });
                                    _0x3443ff = _0x1ec833(_0x4ba678);
                                    _0x527a45.eq(_0x2f721a).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
                                  }
                                }
                              }
                            } else {
                              if (_0x292624 == "hsizxes") {
                                {
                                  _0x32c589(4);
                                }
                              } else {
                                if (_0x292624 == "hsizxye") {
                                  _0x4a7ef1(2);
                                } else {
                                  if (_0x292624 == "hsizxl") {
                                    {
                                      _0x32c589(2);
                                    }
                                  } else {
                                    if (_0x292624 == "hsizxs") {
                                      {
                                        _0x4a7ef1(1);
                                      }
                                    } else {
                                      if (_0x292624 == "bdw4x2m" || _0x292624 == "sxzuxzsq" || _0x292624 == "sxzuxzsz" || _0x292624 == "sxzuxzsh" || _0x292624 == "bdwqs2m" || _0x292624 == "bdwzs2m" || _0x292624 == "bdwhs2m" || _0x292624 == "exzuxfsq" || _0x292624 == "exzuxfsh") {
                                        _0x32c589(2);
                                      } else {
                                        if (_0x292624 == "sxzuxzlq" || _0x292624 == "sxzuxzlz" || _0x292624 == "sxzuxzlh") {
                                          _0x32c589(3);
                                        } else {
                                          if (_0x292624 == "zhixhzqs" || _0x292624 == "zhixhzzs" || _0x292624 == "zhixhzhs" || _0x292624 == "kuaduqs" || _0x292624 == "kuaduzs" || _0x292624 == "kuaduhs" || _0x292624 == "zuxhzqs" || _0x292624 == "zuxhzzs" || _0x292624 == "zuxhzhs" || _0x292624 == "zuxcsbd" || _0x292624 == "zuxzsbd" || _0x292624 == "zuxhsbd" || _0x292624 == "bdwqs" || _0x292624 == "bdwzs" || _0x292624 == "bdwhs" || _0x292624 == "zuxhzqe" || _0x292624 == "zuxhzhe" || _0x292624 == "zuxcebd" || _0x292624 == "zuxhebd") {
                                            _0x32c589(1);
                                          } else {
                                            if (_0x292624 == "qszsds" || _0x292624 == "zszsds" || _0x292624 == "hszsds") {
                                              {
                                                var _0x183551 = "";
                                                for (var _0x2f721a = 0; _0x2f721a < 2; _0x2f721a++) {
                                                  _0x3443ff = Math.round(Math.random() * 8 + 1);
                                                  if (_0x3443ff == parseInt(_0x183551)) {
                                                    {
                                                      var _0x4b101a = _0x1ec833(_0x3443ff);
                                                      _0x183551 = _0x4b101a + _0x183551;
                                                    }
                                                  } else {
                                                    _0x183551 = _0x3443ff + _0x183551;
                                                  }
                                                }
                                                _0x183551 = _0x3443ff + _0x183551;
                                                $("#text").val(_0x183551);
                                              }
                                            } else {
                                              if (_0x292624 == "qszlds" || _0x292624 == "zszlds" || _0x292624 == "hszlds" || _0x292624 == "sxhhzxq" || _0x292624 == "sxhhzxz" || _0x292624 == "sxhhzxh") {
                                                var _0x183551 = "";
                                                var _0x4ba678 = [];
                                                for (var _0x2f721a = 0; _0x2f721a < 3; _0x2f721a++) {
                                                  _0x3443ff = Math.round(Math.random() * 8 + 1);
                                                  _0x183551 = _0x3443ff + _0x183551;
                                                }
                                                _0x4ba678 = _0x183551.split("");
                                                _0x4ba678 = _0x2d6e4e(_0x4ba678);
                                                if (_0x4ba678.length == 2) {
                                                  _0x3443ff = _0x1ec833(_0x4ba678);
                                                  _0x4ba678.push(_0x3443ff);
                                                  _0x183551 = _0x4ba678.join("");
                                                } else {
                                                  if (_0x4ba678.length == 1) {
                                                    _0x3443ff = _0x1ec833(_0x4ba678);
                                                    _0x4ba678.push(_0x3443ff);
                                                    _0x3443ff = _0x1ec833(_0x4ba678);
                                                    _0x4ba678.push(_0x3443ff);
                                                    _0x183551 = _0x4ba678.join("");
                                                  }
                                                }
                                                $("#text").val(_0x183551);
                                              } else {
                                                if (_0x292624 == "exzuxdsq" || _0x292624 == "exzuxdsh") {
                                                  {
                                                    var _0x183551 = "";
                                                    for (var _0x2f721a = 0; _0x2f721a < 2; _0x2f721a++) {
                                                      _0x3443ff = Math.round(Math.random() * 8 + 1);
                                                      if (_0x3443ff == parseInt(_0x183551)) {
                                                        {
                                                          var _0x4b101a = _0x1ec833(_0x3443ff);
                                                          _0x183551 = _0x4b101a + _0x183551;
                                                        }
                                                      } else {
                                                        {
                                                          _0x183551 = _0x3443ff + _0x183551;
                                                        }
                                                      }
                                                    }
                                                    $("#text").val(_0x183551);
                                                  }
                                                } else {
                                                  if (_0x292624 == "dweid") {
                                                    _0x3443ff = Math.round(Math.random() * 8 + 1);
                                                    var _0x46d28f = Math.round(Math.random() * 3 + 1);
                                                    _0x527a45.eq(_0x46d28f).find(".selectNumbers a").eq(_0x3443ff).addClass("curr");
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
    if ($("#text").length > 0) {
      var _0x48fb79 = document.getElementById("text");
      _0xcfab03(_0x48fb79);
      _0x24f8b2(_0x48fb79);
      var _0x2d02df = $("#text").val();
      _0x2cc9cb(_0x2d02df, _0x4d73fd);
      _0x52a287 = _0x2e64a9(_0x52a287);
      _0x52b1c3 = _0x52a287;
      _0x427d59 = _0x52a287;
      _0x220d19();
      if (_0x427d59.length > 0) {
        {
          $(".kuaijie").css({
            background: "#434354"
          });
          $(".hemai").css({
            background: "#434354"
          });
          var _0x581485 = "";
          for (var _0x31544e = 0; _0x31544e < _0x52b1c3.length; _0x31544e++) {
            for (var _0xab02d7 = 0; _0xab02d7 < _0x52b1c3[_0x31544e].length; _0xab02d7++) {
              if (_0x52b1c3[_0x31544e].length - 1 != _0xab02d7) {
                {
                  _0x581485 += _0x52b1c3[_0x31544e][_0xab02d7] + " ";
                }
              } else {
                {
                  _0x581485 += _0x52b1c3[_0x31544e][_0xab02d7];
                }
              }
            }
            if (_0x52b1c3.length - 1 != _0x31544e) {
              _0x581485 = _0x581485 + ",";
            }
          }
          $("#selectMultipleB_nId").text(_0x581485);
        }
      } else {
        {
          $(".zhushu").text(0);
          $(".selectMultipleOldMoney").text(0);
          $(".kuaijie").css({
            background: "#7b7b87"
          });
          $(".hemai").css({
            background: "#7b7b87"
          });
        }
      }
    } else {
      _0x52b1c3 = _0xf6cb27();
      _0x45ebef();
      _0x220d19();
      if (_0x427d59.length > 0) {
        $(".kuaijie").css({
          background: "#434354"
        });
        $(".hemai").css({
          background: "#434354"
        });
        var _0x581485 = "";
        for (var _0x31544e = 0; _0x31544e < _0x52b1c3.length; _0x31544e++) {
          for (var _0xab02d7 = 0; _0xab02d7 < _0x52b1c3[_0x31544e].length; _0xab02d7++) {
            if (_0x52b1c3[_0x31544e].length - 1 != _0xab02d7) {
              {
                _0x581485 += _0x52b1c3[_0x31544e][_0xab02d7] + " ";
              }
            } else {
              {
                _0x581485 += _0x52b1c3[_0x31544e][_0xab02d7];
              }
            }
          }
          if (_0x52b1c3.length - 1 != _0x31544e) {
            _0x581485 = _0x581485 + ",";
          }
        }
        $("#selectMultipleB_nId").text(_0x581485);
      } else {
        $(".kuaijie").css({
          background: "#7b7b87"
        });
        $(".hemai").css({
          background: "#7b7b87"
        });
      }
    }
    $(".addtobetbtn").click();
  }
  $(".g_Number_Section").on("click", ".selectNumbers a", function () {
    if (_0x292624 == "zuxcsbd" || _0x292624 == "zuxzsbd" || _0x292624 == "zuxhsbd" || _0x292624 == "zuxcebd" || _0x292624 == "zuxhebd") {
      {
        $(this).addClass("curr").siblings().removeClass("curr");
      }
    } else {
      {
        if ($(this).hasClass("curr")) {
          $(this).removeClass("curr");
        } else {
          {
            $(this).addClass("curr");
          }
        }
      }
    }
    _0x52b1c3 = _0xf6cb27();
    _0x45ebef();
    _0x220d19();
    if (_0x427d59.length > 0) {
      {
        $(".kuaijie").css({
          background: "#434354"
        });
        $(".hemai").css({
          background: "#434354"
        });
        var _0x4a11a7 = "";
        for (var _0x312051 = 0; _0x312051 < _0x52b1c3.length; _0x312051++) {
          {
            for (var _0xe1750a = 0; _0xe1750a < _0x52b1c3[_0x312051].length; _0xe1750a++) {
              {
                if (_0x52b1c3[_0x312051].length - 1 != _0xe1750a) {
                  _0x4a11a7 += _0x52b1c3[_0x312051][_0xe1750a] + " ";
                } else {
                  {
                    _0x4a11a7 += _0x52b1c3[_0x312051][_0xe1750a];
                  }
                }
              }
            }
            if (_0x52b1c3.length - 1 != _0x312051) {
              {
                _0x4a11a7 = _0x4a11a7 + ",";
              }
            }
          }
        }
        $("#selectMultipleB_nId").text(_0x4a11a7);
      }
    } else {
      $(".kuaijie").css({
        background: "#7b7b87"
      });
      $(".hemai").css({
        background: "#7b7b87"
      });
    }
  });
  function _0x45ebef() {
    switch (_0x292624) {
      case "wxzhixfs":
        _0x427d59 = _0xcb52bd(_0x52b1c3);
        break;
      case "wxzxyel":
        _0x427d59 = _0x56ea0c(_0x52b1c3[0], 5);
        break;
      case "wxzxls":
        _0x427d59.length = _0x13d85b();
        break;
      case "wxzxsl":
        _0x427d59.length = _0x998fc6();
        break;
      case "wxzxel":
        _0x427d59.length = _0x2d62d0();
        break;
      case "wxzxyl":
        _0x427d59.length = _0x55ce77();
        break;
      case "wxzxw":
        _0x427d59.length = _0x17a5de();
        break;
      case "bdw5x1m":
        _0x427d59.length = _0x52b1c3[0].length;
        break;
      case "bdw5x2m":
        _0x427d59 = _0x56ea0c(_0x52b1c3[0], 2);
        break;
      case "bdw5x3m":
        _0x427d59 = _0x56ea0c(_0x52b1c3[0], 3);
        break;
      case "qwyffs":
      case "qwhscs":
      case "qwsxbx":
      case "qwsjfc":
        _0x427d59.length = _0x52b1c3[0].length;
        break;
      case "sixzhixfsh":
        _0x427d59 = _0xcb52bd(_0x52b1c3);
        break;
      case "hsizxes":
        _0x427d59 = _0x56ea0c(_0x52b1c3[0], 4);
        break;
      case "hsizxye":
        _0x427d59.length = _0x365099(_0x52b1c3);
        break;
      case "hsizxl":
        _0x427d59 = _0x56ea0c(_0x52b1c3[0], 2);
        break;
      case "hsizxs":
        _0x427d59.length = _0x3d9c19(_0x52b1c3);
        break;
      case "bdw4x1m":
        _0x427d59.length = _0x52b1c3[0].length;
        break;
      case "bdw4x2m":
        _0x427d59 = _0x56ea0c(_0x52b1c3[0], 2);
        break;
      case "sxzhixfsq":
      case "sxzhixfsz":
      case "sxzhixfsh":
        _0x427d59 = _0xcb52bd(_0x52b1c3);
        break;
      case "zhixhzqs":
      case "zhixhzzs":
      case "zhixhzhs":
        _0x427d59.length = _0x1aa0a3();
        break;
      case "kuaduqs":
      case "kuaduzs":
      case "kuaduhs":
        _0x427d59.length = _0x4047d4();
        break;
      case "zuxhzqs":
      case "zuxhzzs":
      case "zuxhzhs":
        _0x427d59.length = _0x1b6420();
        break;
      case "sxzuxzsq":
      case "sxzuxzsz":
      case "sxzuxzsh":
        _0x427d59.length = _0x52b1c3[0].length * (_0x52b1c3[0].length - 1);
        break;
      case "sxzuxzlq":
      case "sxzuxzlz":
      case "sxzuxzlh":
        _0x427d59 = _0x56ea0c(_0x52b1c3[0], 3);
        break;
      case "zuxcsbd":
      case "zuxzsbd":
      case "zuxhsbd":
        _0x427d59.length = 54;
        break;
      case "bdwqs":
      case "bdwzs":
      case "bdwhs":
        _0x427d59.length = _0x52b1c3[0].length;
        break;
      case "bdwqs2m":
      case "bdwzs2m":
      case "bdwhs2m":
        _0x427d59 = _0x56ea0c(_0x52b1c3[0], 2);
        break;
      case "exzhixfsq":
      case "exzhixfsh":
        _0x427d59 = _0xcb52bd(_0x52b1c3);
        break;
      case "zhixhzqe":
      case "zhixhzhe":
        _0x427d59.length = _0x1861a8();
        break;
      case "kuaduqe":
      case "kuaduhe":
        _0x427d59.length = _0x515ad3();
        break;
      case "exzuxfsq":
      case "exzuxfsh":
        _0x427d59 = _0x56ea0c(_0x52b1c3[0], 2);
        break;
      case "zuxhzqe":
      case "zuxhzhe":
        _0x427d59.length = _0x9a3a01();
        break;
      case "zuxcebd":
      case "zuxhebd":
        _0x427d59.length = 9;
        break;
      case "dweid":
        _0x427d59.length = $(".g_Number_Section").find(".curr").length;
        break;
      case "dxdsqe":
      case "dxdshe":
      case "dxdsqs":
      case "dxdshs":
        _0x427d59 = _0xcb52bd(_0x52b1c3);
        break;
    }
  }
  var _0x375850 = [];
  var _0x426ed2 = [];
  var _0x4650d1 = 0;
  var _0x506b56 = 0;
  function _0x48ccd1() {
    _0x375850 = [];
    _0x426ed2 = [];
    _0x4650d1 = 0;
    _0x506b56 = 0;
    for (var _0x3e2a0e = 0; _0x3e2a0e < _0x52b1c3.length; _0x3e2a0e++) {
      for (var _0x3125e0 = 0; _0x3125e0 < _0x52b1c3[_0x3e2a0e].length; _0x3125e0++) {
        if (_0x3e2a0e == 0) {
          {
            _0x375850[_0x52b1c3[_0x3e2a0e][_0x3125e0]] = _0x52b1c3[_0x3e2a0e][_0x3125e0];
          }
        } else {
          {
            _0x426ed2[_0x52b1c3[_0x3e2a0e][_0x3125e0]] = _0x52b1c3[_0x3e2a0e][_0x3125e0];
          }
        }
      }
      if (_0x3e2a0e == 0) {
        _0x4650d1 = _0x52b1c3[_0x3e2a0e].length;
      } else {
        {
          _0x506b56 = _0x52b1c3[_0x3e2a0e].length;
        }
      }
    }
  }
  var _0x5787d5 = [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 4, 4, 3, 3, 2, 2, 1, 1];
  function _0x9a3a01() {
    var _0x5c78e5 = 0;
    var _0x46de02 = [];
    for (var _0xba0091 = 0; _0xba0091 < _0x52b1c3.length; _0xba0091++) {
      for (var _0x417a44 = 0; _0x417a44 < _0x52b1c3[_0xba0091].length; _0x417a44++) {
        _0x46de02[_0x52b1c3[_0xba0091][_0x417a44]] = _0x52b1c3[_0xba0091][_0x417a44];
      }
    }
    for (j = 0; j < _0x46de02.length; j++) {
      if (_0x46de02[j] != "" && !isNaN(_0x46de02[j])) {
        _0x5c78e5 += _0x5787d5[parseInt(_0x46de02[j])];
      }
    }
    return _0x5c78e5;
  }
  var _0x3081de = [10, 18, 16, 14, 12, 10, 8, 6, 4, 2];
  function _0x515ad3() {
    var _0x3d5e1c = 0;
    var _0x198be6 = [];
    for (var _0x410615 = 0; _0x410615 < _0x52b1c3.length; _0x410615++) {
      {
        for (var _0x426660 = 0; _0x426660 < _0x52b1c3[_0x410615].length; _0x426660++) {
          _0x198be6[_0x52b1c3[_0x410615][_0x426660]] = _0x52b1c3[_0x410615][_0x426660];
        }
      }
    }
    for (j = 0; j < _0x198be6.length; j++) {
      {
        if (_0x198be6[j] != "" && !isNaN(_0x198be6[j])) {
          _0x3d5e1c += _0x3081de[parseInt(_0x198be6[j])];
        }
      }
    }
    return _0x3d5e1c;
  }
  var _0x3417f6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  function _0x1861a8() {
    {
      var _0x59e4bb = 0;
      var _0x48130b = [];
      for (var _0xbe6860 = 0; _0xbe6860 < _0x52b1c3.length; _0xbe6860++) {
        for (var _0x3dca40 = 0; _0x3dca40 < _0x52b1c3[_0xbe6860].length; _0x3dca40++) {
          _0x48130b[_0x52b1c3[_0xbe6860][_0x3dca40]] = _0x52b1c3[_0xbe6860][_0x3dca40];
        }
      }
      for (j = 0; j < _0x48130b.length; j++) {
        if (_0x48130b[j] != "" && !isNaN(_0x48130b[j])) {
          {
            _0x59e4bb += _0x3417f6[parseInt(_0x48130b[j])];
          }
        }
      }
      return _0x59e4bb;
    }
  }
  var _0x5ea10e = [1, 2, 2, 4, 5, 6, 8, 10, 11, 13, 14, 14, 15, 15, 14, 14, 13, 11, 10, 8, 6, 5, 4, 2, 2, 1];
  function _0x1b6420() {
    var _0x435926 = 0;
    var _0xfb4e62 = [];
    var _0x1c4912 = [];
    for (var _0x273235 = 0; _0x273235 < _0x52b1c3.length; _0x273235++) {
      for (var _0x930a58 = 0; _0x930a58 < _0x52b1c3[_0x273235].length; _0x930a58++) {
        _0xfb4e62[_0x52b1c3[_0x273235][_0x930a58]] = _0x52b1c3[_0x273235][_0x930a58];
      }
    }
    for (j = 0; j < _0xfb4e62.length; j++) {
      if (_0xfb4e62[j] != "" && !isNaN(_0xfb4e62[j])) {
        {
          _0x435926 += parseInt(_0x5ea10e[parseInt(_0xfb4e62[j]) - 1]);
        }
      }
    }
    return _0x435926;
  }
  var _0x41641c = [10, 54, 96, 126, 144, 150, 144, 126, 96, 54];
  function _0x4047d4() {
    var _0x464afb = 0;
    var _0xc4f391 = [];
    for (var _0x4c8133 = 0; _0x4c8133 < _0x52b1c3.length; _0x4c8133++) {
      {
        for (var _0x456d8e = 0; _0x456d8e < _0x52b1c3[_0x4c8133].length; _0x456d8e++) {
          _0xc4f391[_0x52b1c3[_0x4c8133][_0x456d8e]] = _0x52b1c3[_0x4c8133][_0x456d8e];
        }
      }
    }
    for (j = 0; j < _0xc4f391.length; j++) {
      if (_0xc4f391[j] != "" && !isNaN(_0xc4f391[j])) {
        {
          _0x464afb += _0x41641c[parseInt(_0xc4f391[j])];
        }
      }
    }
    return _0x464afb;
  }
  var _0x58df4e = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 63, 69, 73, 75, 75, 73, 69, 63, 55, 45, 36, 28, 21, 15, 10, 6, 3, 1];
  function _0x1aa0a3() {
    {
      var _0xa70594 = 0;
      var _0x57f15a = [];
      for (var _0x5a3e56 = 0; _0x5a3e56 < _0x52b1c3.length; _0x5a3e56++) {
        for (var _0x5ebc39 = 0; _0x5ebc39 < _0x52b1c3[_0x5a3e56].length; _0x5ebc39++) {
          {
            _0x57f15a[_0x52b1c3[_0x5a3e56][_0x5ebc39]] = _0x52b1c3[_0x5a3e56][_0x5ebc39];
          }
        }
      }
      for (var _0x64c0e1 = 0; _0x64c0e1 < _0x57f15a.length; _0x64c0e1++) {
        if (_0x57f15a[_0x64c0e1] != "" && !isNaN(_0x57f15a[_0x64c0e1])) {
          {
            _0xa70594 += _0x58df4e[parseInt(_0x57f15a[_0x64c0e1])];
          }
        }
      }
      return _0xa70594;
    }
  }
  function _0x3d9c19() {
    _0x48ccd1();
    var _0x302c39 = 0;
    if (_0x4650d1 > 0 && _0x506b56 > 0) {
      {
        for (var _0x161b93 = 0; _0x161b93 < _0x375850.length; _0x161b93++) {
          {
            if (_0x375850[_0x161b93] != undefined && _0x375850[_0x161b93] != "") {
              if (_0x426ed2[_0x161b93] != undefined && _0x426ed2[_0x161b93] != "") {
                if (_0x506b56 > 1) {
                  _0x302c39 += _0x506b56 - 1;
                }
              } else {
                {
                  _0x302c39 += _0x506b56;
                }
              }
            }
          }
        }
      }
    }
    return _0x302c39;
  }
  function _0x365099() {
    {
      _0x48ccd1();
      var _0x384e74 = 0;
      if (_0x4650d1 > 0 && _0x506b56 > 1) {
        {
          for (var _0x14c3c8 = 0; _0x14c3c8 < _0x375850.length; _0x14c3c8++) {
            if (_0x375850[_0x14c3c8] != undefined && _0x375850[_0x14c3c8] != "") {
              if (_0x426ed2[_0x14c3c8] != undefined && _0x426ed2[_0x14c3c8] != "") {
                {
                  if (_0x506b56 > 2) {
                    _0x384e74 += (_0x506b56 - 1) * (_0x506b56 - 2) / 2;
                  }
                }
              } else {
                _0x384e74 += _0x506b56 * (_0x506b56 - 1) / 2;
              }
            }
          }
        }
      }
      return _0x384e74;
    }
  }
  function _0x17a5de() {
    {
      _0x48ccd1();
      var _0x5c1cab = 0;
      if (_0x4650d1 > 0 && _0x506b56 > 0) {
        {
          for (var _0xf8e162 = 0; _0xf8e162 < _0x375850.length; _0xf8e162++) {
            {
              if (_0x375850[_0xf8e162] != undefined && _0x375850[_0xf8e162] != "") {
                if (_0x426ed2[_0xf8e162] != undefined && _0x426ed2[_0xf8e162] != "") {
                  if (_0x506b56 > 1) {
                    _0x5c1cab += _0x506b56 - 1;
                  }
                } else {
                  _0x5c1cab += _0x506b56;
                }
              }
            }
          }
        }
      }
      return _0x5c1cab;
    }
  }
  function _0x55ce77() {
    _0x48ccd1();
    var _0x372647 = 0;
    if (_0x4650d1 > 0 && _0x506b56 > 0) {
      {
        for (var _0x3fe446 = 0; _0x3fe446 < _0x375850.length; _0x3fe446++) {
          {
            if (_0x375850[_0x3fe446] != undefined && _0x375850[_0x3fe446] != "") {
              if (_0x426ed2[_0x3fe446] != undefined && _0x426ed2[_0x3fe446] != "") {
                if (_0x506b56 > 1) {
                  _0x372647 += _0x506b56 - 1;
                }
              } else {
                {
                  _0x372647 += _0x506b56;
                }
              }
            }
          }
        }
      }
    }
    return _0x372647;
  }
  function _0x2d62d0() {
    _0x48ccd1();
    var _0x3c9ad1 = 0;
    if (_0x4650d1 > 0 && _0x506b56 > 1) {
      {
        for (var _0x2ad176 = 0; _0x2ad176 < _0x375850.length; _0x2ad176++) {
          {
            if (_0x375850[_0x2ad176] != undefined && _0x375850[_0x2ad176] != "") {
              {
                if (_0x426ed2[_0x2ad176] != undefined && _0x426ed2[_0x2ad176] != "") {
                  {
                    if (_0x506b56 > 2) {
                      _0x3c9ad1 += (_0x506b56 - 1) * (_0x506b56 - 2) / 2;
                    }
                  }
                } else {
                  {
                    _0x3c9ad1 += _0x506b56 * (_0x506b56 - 1) / 2;
                  }
                }
              }
            }
          }
        }
      }
    }
    return _0x3c9ad1;
  }
  function _0x998fc6() {
    _0x48ccd1();
    var _0x47f573 = 0;
    if (_0x4650d1 > 1 && _0x506b56 > 0) {
      for (var _0xcbf3c1 = 0; _0xcbf3c1 < _0x426ed2.length; _0xcbf3c1++) {
        {
          if (_0x426ed2[_0xcbf3c1] != undefined && _0x426ed2[_0xcbf3c1] != "") {
            {
              if (_0x375850[_0xcbf3c1] != undefined && _0x375850[_0xcbf3c1] != "") {
                if (_0x4650d1 > 2) {
                  {
                    _0x47f573 += (_0x4650d1 - 1) * (_0x4650d1 - 2) / 2;
                  }
                }
              } else {
                {
                  _0x47f573 += _0x4650d1 * (_0x4650d1 - 1) / 2;
                }
              }
            }
          }
        }
      }
    }
    return _0x47f573;
  }
  function _0x13d85b() {
    {
      _0x48ccd1();
      var _0x516afc = 0;
      if (_0x375850 && _0x375850.length > 0 && _0x426ed2 && _0x426ed2.length > 0) {
        {
          for (i = 0; i < _0x375850.length; i++) {
            for (j = 0; j < _0x426ed2.length; j++) {
              {
                if (_0x426ed2[j] && _0x426ed2[j] == _0x375850[i]) {
                  {
                    _0x516afc++;
                  }
                }
              }
            }
          }
        }
      }
      var _0x2e8c4e = 0;
      if (_0x506b56 >= 3 && _0x4650d1 >= 1) {
        {
          for (_0x4650d1; _0x4650d1 > 0; _0x4650d1--) {
            if (_0x516afc > 0) {
              var _0x440029 = _0x506b56 - 4;
              var _0x34a360 = _0x506b56 - 1;
              var _0x1d72d1 = _0x506b56 - 4;
              if (_0x440029 > 0) {
                var _0x357cde = _0x506b56 - 1;
                while (_0x440029 > 1) {
                  _0x440029--;
                  _0x357cde--;
                  _0x34a360 = _0x34a360 * _0x357cde;
                  _0x1d72d1 = _0x1d72d1 * _0x440029;
                }
                _0x2e8c4e += _0x34a360 / _0x1d72d1;
              } else {
                if (!(_0x440029 < 0)) {
                  _0x2e8c4e += 1;
                }
              }
              _0x516afc--;
            } else {
              var _0x440029 = _0x506b56 - 3;
              var _0x34a360 = _0x506b56;
              var _0x1d72d1 = _0x506b56 - 3;
              if (_0x440029 > 0) {
                var _0x357cde = _0x506b56;
                while (_0x440029 > 1) {
                  _0x440029--;
                  _0x357cde--;
                  _0x34a360 = _0x34a360 * _0x357cde;
                  _0x1d72d1 = _0x1d72d1 * _0x440029;
                }
                _0x2e8c4e += _0x34a360 / _0x1d72d1;
              } else {
                _0x2e8c4e += 1;
              }
            }
          }
        }
      }
      return _0x2e8c4e;
    }
  }
  $(".yBettingLists").on("click", ".sc", function () {
    var _0x127c63 = $(".yBettingLists").find(".yBettingList");
    var _0x246a13 = $(this).parent().attr("id");
    var _0x257b19 = 0;
    _0x127c63.each(function (_0x41c184) {
      if (_0x246a13 == _0x51e46c[_0x41c184].trano) {
        {
          _0x257b19 = _0x41c184;
        }
      }
    });
    _0x51e46c.splice(_0x257b19, 1);
    $(this).parents(".yBettingList").remove();
    $("#lanIconNumbere").text($(".yBettingLists").find(".yBettingList").length);
    if ($(".yBettingLists").find(".yBettingList").length <= 0) {
      $("#lanIconNumbere").css("display", "none");
      $(".kuaijie").css({
        background: "#7b7b87"
      });
      $(".hemai").css({
        background: "#7b7b87"
      });
    }
    console.log(_0x51e46c);
    _0xacd002();
  });
  $(".yBettingLists").on("click", ".numberInfo", function () {
    {
      var _0x5da311 = $(this).siblings(".number").find("em").text();
      hsycmserror(_0x5da311);
    }
  });
  $("#orderlist_clear").on("click", function () {
    {
      $(".yBettingLists").html("");
      $(".kuaijie").css({
        background: "#7b7b87"
      });
      $(".hemai").css({
        background: "#7b7b87"
      });
      $("#lanIconNumbere").text("0").css("display", "none");
      _0x51e46c = [];
      _0xacd002();
    }
  });
  $(".g_Number_Section").on("change keyup", "#text", function () {
    {
      _0xcfab03(this);
      _0x24f8b2(this);
      var _0x5ba00e = $("#text").val();
      _0x2cc9cb(_0x5ba00e, _0x4d73fd);
      _0x52a287 = _0x2e64a9(_0x52a287);
      _0x52b1c3 = _0x52a287;
      _0x427d59 = _0x52a287;
      _0x220d19();
      if (_0x427d59.length > 0) {
        $(".kuaijie").css({
          background: "#434354"
        });
        $(".hemai").css({
          background: "#434354"
        });
        var _0x34665f = "";
        for (var _0x39c3c0 = 0; _0x39c3c0 < _0x52b1c3.length; _0x39c3c0++) {
          for (var _0xd8aa36 = 0; _0xd8aa36 < _0x52b1c3[_0x39c3c0].length; _0xd8aa36++) {
            if (_0x52b1c3[_0x39c3c0].length - 1 != _0xd8aa36) {
              _0x34665f += _0x52b1c3[_0x39c3c0][_0xd8aa36] + " ";
            } else {
              _0x34665f += _0x52b1c3[_0x39c3c0][_0xd8aa36];
            }
          }
          if (_0x52b1c3.length - 1 != _0x39c3c0) {
            {
              _0x34665f = _0x34665f + ",";
            }
          }
        }
        $("#selectMultipleB_nId").text(_0x34665f);
      } else {
        {
          $(".zhushu").text(0);
          $(".selectMultipleOldMoney").text(0);
          $(".kuaijie").css({
            background: "#7b7b87"
          });
          $(".hemai").css({
            background: "#7b7b87"
          });
        }
      }
    }
  });
  function _0x2e64a9(_0x357874) {
    var _0x3da311 = [];
    for (var _0x40b6bf = 0; _0x40b6bf < _0x357874.length; _0x40b6bf++) {
      {
        if (_0x3da311.indexOf(_0x357874[_0x40b6bf]) < 0) {
          {
            _0x3da311.push(_0x357874[_0x40b6bf]);
          }
        }
      }
    }
    return _0x3da311;
  }
  $(".g_Number_Section").on("click", ".remove_btn", function () {
    {
      var _0x277f2e = $("#text").val();
      _0x2cc9cb(_0x277f2e, _0x4d73fd, "remove");
    }
  });
  $(".g_Number_Section").on("click", ".test_istrue", function () {
    var _0x50ca94 = $("#text").val();
    _0x2cc9cb(_0x50ca94, _0x4d73fd, "test");
  });
  $(".g_Number_Section").on("click", ".empty_text", function () {
    $("#text").val("");
    _0x52b1c3 = [];
    _0x427d59 = [];
    _0x220d19();
    $(".zhushu").text(0);
    $(".selectMultipleOldMoney").text(0);
    $(".kuaijie").css({
      background: "#7b7b87"
    });
    $(".hemai").css({
      background: "#7b7b87"
    });
  });
  $(document).on("click", ".bet_options", function () {
    $(".zhushu").text(0);
    $(".selectMultipleOldMoney").text(0);
    $(".kuaijie").css({
      background: "#7b7b87"
    });
    $(".hemai").css({
      background: "#7b7b87"
    });
    var _0x2fde74 = $(this).attr("lottery_code_two");
    $("#bet_filter").find(".bet_options").removeClass("curr");
    $(this).addClass("curr");
    $(".g_Number_Section").html("");
    _0x52b1c3 = [];
    _0x427d59 = [];
    _0x220d19();
    _0x292624 = _0x2fde74;
    rates = _0x10ab45[_0x292624];
    switch (_0x2fde74) {
      case "wxzhixfs":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的全部五位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_fs);
        break;
      case "lhd":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的全部五位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_fs);
        break;
      case "wxzhixds":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的全部五位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4d73fd = 5;
        _0x8e89ae();
        break;
      case "wxzxyel":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择五个号码投注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_zx_120);
        break;
      case "wxzxls":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择1个二重号码和3个单号号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_zx_60);
        break;
      case "wxzxsl":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择2个二重号码和1个单号号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_zx_60);
        break;
      case "wxzxel":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择1个三重号码和2个单号号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_zx_20);
        break;
      case "wxzxyl":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择1个三重号码和1个二重号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_zx_10);
        break;
      case "wxzxw":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择1个四重号码和1个单号号码组成一注，竞猜开奖号码的全部五位，号码一致顺序不限即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_zx_5);
        break;
      case "bdw5x1m":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码，包含即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_bdw);
        break;
      case "bdw5x2m":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择2个号码投注，竞猜开奖号码中包含这2个号码，包含即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_bdw);
        break;
      case "bdw5x3m":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择3个号码投注，竞猜开奖号码中包含这3个号码，包含即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_bdw);
        break;
      case "qwyffs":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码，包含即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(["一帆风顺"]);
        break;
      case "qwhscs":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码且出现2次，即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(["好事成双"]);
        break;
      case "qwsxbx":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码且出现3次，即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(["三星报喜"]);
        break;
      case "qwsjfc":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择1个号码投注，竞猜开奖号码中包含这个号码且出现4次，即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(["四季发财"]);
        break;
      case "sixzhixfsh":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的后四位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(sx_fs);
        break;
      case "sixzhixdsh":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的后四位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4d73fd = 4;
        _0x8e89ae();
        break;
      case "hsizxes":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择4个号码投注，竞猜开奖号码的后4位，号码一致顺序不限即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(sx_zx24);
        break;
      case "hsizxye":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择1个二重号码和2个单号号码，竞猜开奖号码的后四位，号码一致顺序不限即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(sx_zx12);
        break;
      case "hsizxl":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择2个二重号码，竞猜开奖号码的后四位，号码一致顺序不限即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(sx_zx6);
        break;
      case "hsizxs":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择1个三重号码和1个单号号码，竞猜开奖号码的后四位，号码一致顺序不限即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(sx_zx4);
        break;
      case "bdw4x1m":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择1个号码投注，竞猜开奖号码后四位中包含这个号码，包含即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(sx_bdw);
        break;
      case "bdw4x2m":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择2个号码投注，竞猜开奖号码后四位中包含这2个号码，包含即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(sx_bdw);
        break;
      case "sxzhixfsq":
      case "sxzhixfsz":
      case "sxzhixfsh":
        if (_0x2fde74 == "sxzhixfsq") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的前三位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          _0x4bf391(q3_sxzhixfsq);
        } else {
          if (_0x2fde74 == "sxzhixfsz") {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的中三位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            _0x4bf391(z3_sxzhixfsq);
          } else {
            if (_0x2fde74 == "sxzhixfsh") {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的后三位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
              _0x4bf391(h3_sxzhixfsq);
            }
          }
        }
        break;
      case "sxzhixdsq":
      case "sxzhixdsz":
      case "sxzhixdsh":
        if (_0x2fde74 == "sxzhixdsq") {
          {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的前三位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          }
        } else {
          if (_0x2fde74 == "sxzhixdsz") {
            {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的中三位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          } else {
            if (_0x2fde74 == "sxzhixdsh") {
              {
                $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的后三位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
              }
            }
          }
        }
        _0x4d73fd = 3;
        _0x8e89ae();
        break;
      case "zhixhzqs":
      case "zhixhzzs":
      case "zhixhzhs":
        if (_0x2fde74 == "zhixhzqs") {
          {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择一个和值，竞猜开奖号码前三位数字之和，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          }
        } else {
          if (_0x2fde74 == "zhixhzzs") {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择一个和值，竞猜开奖号码中三位数字之和，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          } else {
            if (_0x2fde74 == "zhixhzhs") {
              {
                $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择一个和值，竞猜开奖号码后三位数字之和，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
              }
            }
          }
        }
        _0x4bf391(q3_zhixhzqs, 27);
        break;
      case "kuaduqs":
      case "kuaduzs":
      case "kuaduhs":
        if (_0x2fde74 == "kuaduqs") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("所选数值等于开奖号码的前3位最大与最小数字相减之差，即为中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "kuaduzs") {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("所选数值等于开奖号码的中3位最大与最小数字相减之差，即是中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          } else {
            if (_0x2fde74 == "kuaduhs") {
              {
                $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("所选数值等于开奖号码的后3位最大与最小数字相减之差，即为中奖，最高奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
              }
            }
          }
        }
        _0x4bf391(q3_kuaduqs);
        break;
      case "zuxhzqs":
      case "zuxhzzs":
      case "zuxhzhs":
        if (_0x2fde74 == "zuxhzqs") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择一个和值，竞猜开奖号码前三位数字之和(不含豹子号)，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "zuxhzzs") {
            {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择一个和值，竞猜开奖号码中三位数字之和(不含豹子号)，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          } else {
            if (_0x2fde74 == "zuxhzhs") {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择一个和值，竞猜开奖号码后三位数字之和(不含豹子号)，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          }
        }
        _0x4bf391(q3_zhixhzqs, 26, 1);
        break;
      case "sxzuxzsq":
      case "sxzuxzsz":
      case "sxzuxzsh":
        if (_0x2fde74 == "sxzuxzsq") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中选择2个数字组成两注，所选号码与开奖号码的前三位相同，顺序不限，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "sxzuxzsz") {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中选择2个数字组成两注，所选号码与开奖号码的中三位相同，且顺序不限，即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          } else {
            if (_0x2fde74 == "sxzuxzsh") {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中选择2个数字组成两注，所选号码与开奖号码的后三位相同，且顺序不限，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          }
        }
        _0x4bf391(q3_sxzuxzsq);
        break;
      case "sxzuxzlq":
      case "sxzuxzlz":
      case "sxzuxzlh":
        if (_0x2fde74 == "sxzuxzlq") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中任意选择3个号码组成一注，所选号码与开奖号码的前三位相同，顺序不限，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "sxzuxzlz") {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中任意选择3个号码组成一注，所选号码与开奖号码的中三位相同，顺序不限，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          } else {
            if (_0x2fde74 == "sxzuxzlh") {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中任意选择3个号码组成一注，所选号码与开奖号码的后三位相同，顺序不限，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          }
        }
        _0x4bf391(q3_sxzuxzlq);
        break;
      case "sxhhzxq":
      case "sxhhzxz":
      case "sxhhzxh":
        if (_0x2fde74 == "sxhhzxq") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("手动输入号码，3个数字为一注，所选号码与开奖号码的前三位相同，顺序不限，即为中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "sxhhzxz") {
            {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("手动输入号码，3个数字为一注，所选号码与开奖号码的中三位相同，顺序不限，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          } else {
            if (_0x2fde74 == "sxhhzxh") {
              {
                $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("手动输入号码，3个数字为一注，所选号码与开奖号码的后三位相同，顺序不限，即为中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
              }
            }
          }
        }
        _0x4d73fd = 3;
        _0x8e89ae();
        break;
      case "zuxcsbd":
      case "zuxzsbd":
      case "zuxhsbd":
        if (_0x2fde74 == "zuxcsbd") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中任意选择1个包胆号码，开奖号码的前三位中任意1位与所选包胆号码相同(不含豹子号)，即为中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "zuxzsbd") {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中任意选择1个包胆号码，开奖号码的中三位中任意1位与所选包胆号码相同(不含豹子号)，即为中奖，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          } else {
            if (_0x2fde74 == "zuxhsbd") {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中任意选择1个包胆号码，开奖号码的后三位中任意1位与所选包胆号码相同(不含豹子号)，即为中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          }
        }
        _0x2c71b1(zuxcsbd);
        break;
      case "qszsds":
      case "zszsds":
      case "hszsds":
        if (_0x2fde74 == "qszsds") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("手动输入号码，3个数字为一注，所选号码与开奖号码的前三位相同，顺序不限，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "zszsds") {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("手动输入号码，至少输入 1 个三位数号码。(三个数字当中有二个数字相同),顺序不限，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          } else {
            if (_0x2fde74 == "hszsds") {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("手动输入号码，3个数字为一注，所选号码与开奖号码的后三位相同，顺序不限，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          }
        }
        _0x4d73fd = 3;
        _0x8e89ae();
        break;
      case "qszlds":
      case "zszlds":
      case "hszlds":
        if (_0x2fde74 == "qszlds") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("手动输入号码，3个数字为一注，所选号码与开奖号码的前三位相同，顺序不限，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "zszlds") {
            {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("手动输入号码，3个数字为一注，所选号码与开奖号码的中三位相同，顺序不限，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          } else {
            if (_0x2fde74 == "hszlds") {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("手动输入号码，3个数字为一注，所选号码与开奖号码的后三位相同，顺序不限，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          }
        }
        _0x4d73fd = 3;
        _0x8e89ae();
        break;
      case "bdwqs":
      case "bdwzs":
      case "bdwhs":
        if (_0x2fde74 == "bdwqs") {
          {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择1个号码投注，竞猜开奖号码前三位中包含这个号码，包含即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          }
        } else {
          if (_0x2fde74 == "bdwzs") {
            {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择1个号码投注，竞猜开奖号码中三位中包含这个号码，包含即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          } else {
            if (_0x2fde74 == "bdwhs") {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择1个号码投注，竞猜开奖号码后三位中包含这个号码，包含即中奖，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          }
        }
        _0x4bf391(q3_bdw);
        break;
      case "bdwqs2m":
      case "bdwzs2m":
      case "bdwhs2m":
        if (_0x2fde74 == "bdwqs2m") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择2个号码投注，竞猜开奖号码前三位中包含这2个号码，包含即中奖，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "bdwzs2m") {
            {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择2个号码投注，竞猜开奖号码中三位中包含这2个号码，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          } else {
            if (_0x2fde74 == "bdwhs2m") {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中至少选择2个号码投注，竞猜开奖号码后三位中包含这2个号码，包含即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          }
        }
        _0x4bf391(q3_bdw);
        break;
      case "exzhixfsq":
      case "exzhixfsh":
        if (_0x2fde74 == "exzhixfsq") {
          {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的前二位，号码和位置都对应即中奖，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            _0x4bf391(q2_exzhixfs);
          }
        } else {
          if (_0x2fde74 == "exzhixfsh") {
            {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的后二位，号码和位置都对应即中奖，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
              _0x4bf391(h2_exzhixfs);
            }
          }
        }
        break;
      case "exzhixdsq":
      case "exzhixdsh":
        if (_0x2fde74 == "exzhixdsq") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的前二位，号码和位置都对应即中奖，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "exzhixdsh") {
            {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的后二位，号码和位置都对应即中奖，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          }
        }
        _0x4d73fd = 2;
        _0x8e89ae();
        break;
      case "zhixhzqe":
      case "zhixhzhe":
        if (_0x2fde74 == "zhixhzqe") {
          {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择一个和值，竞猜开奖号码前二位数字之和，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          }
        } else {
          if (_0x2fde74 == "zhixhzhe") {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("至少选择一个和值，竞猜开奖号码后二位数字之和，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          }
        }
        _0x4bf391(ex_exzhixdsh, 18);
        break;
      case "kuaduqe":
      case "kuaduhe":
        if (_0x2fde74 == "kuaduqe") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("所选数值等于开奖号码的前二位最大与最小数字相减之差，即为中奖，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "kuaduhe") {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("所选数值等于开奖号码的后二位最大与最小数字相减之差，即为中奖，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          }
        }
        _0x4bf391(ex_kuaduhe);
        break;
      case "exzuxfsq":
      case "exzuxfsh":
        if (_0x2fde74 == "exzuxfsq") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中选择2个数字组成一注，所选号码与开奖号码的前二位相同，顺序不限（不含对子），奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "exzuxfsh") {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中选择2个数字组成一注，所选号码与开奖号码的后二位相同，顺序不限（不含对子），奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          }
        }
        _0x4bf391(ex_exzuxfsh);
        break;
      case "exzuxdsq":
      case "exzuxdsh":
        if (_0x2fde74 == "exzuxdsq") {
          {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中选择2个数字组成一注，所选号码与开奖号码的前二位相同，顺序不限（不含对子），奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          }
        } else {
          if (_0x2fde74 == "exzuxdsh") {
            {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中选择2个数字组成一注，所选号码与开奖号码的后二位相同，顺序不限（不含对子），奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          }
        }
        _0x4d73fd = 2;
        _0x8e89ae();
        break;
      case "zuxhzqe":
      case "zuxhzhe":
        if (_0x2fde74 == "zuxhzqe") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("所选数值等于开奖号码的前二位数字相加之和（不含对子），奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "zuxhzhe") {
            {
              $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("所选数值等于开奖号码的后二位数字相加之和（不含对子），奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
            }
          }
        }
        _0x4bf391(ex_zsxhz, 17, 1);
        break;
      case "zuxcebd":
      case "zuxhebd":
        if (_0x2fde74 == "zuxcebd") {
          $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中任意选择1个号码，开奖号码的前二位中任意1位包含所选的包胆号码相同（不含对子），奖金   <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        } else {
          if (_0x2fde74 == "zuxhebd") {
            $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从0-9中任意选择1个号码，开奖号码的后二位中任意1位包含所选的包胆号码相同（不含对子），奖金   <em style=\"color:red;\">" + rates.maxjj + "</em>元");
          }
        }
        _0x2c71b1(ex_zsxbd);
        break;
      case "dweid":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从万位、千位、百位、十位、个位任意位置上至少选择1个号码，选号与相同位置上的开奖号码一致，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_fs);
        break;
      case "dxdsqe":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从万位、千位中的“大、小、单、双”中至少各选一个组成一注，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x2c71b1(dxdsqe, "dxds");
        break;
      case "dxdshe":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从十位、个位中的“大、小、单、双”中至少各选一个组成一注，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x2c71b1(dxdshe, "dxds");
        break;
      case "dxdsqs":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从万位、千位、百位中的“大、小、单、双”中至少各选一个组成一注，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x2c71b1(dxdsqs, "dxds");
        break;
      case "dxdshs":
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从百位、十位、个位中的“大、小、单、双”中至少各选一个组成一注，奖金  <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x2c71b1(dxdshs, "dxds");
        break;
    }
    var _0x3c2163 = $(".play_select_tit").find(".curr").find(".wanfa").text();
    var _0x39a30c = $("#bet_filter").find(".curr").text();
    $(".gameType").find("string").html(_0x3c2163 + "<i class=\"iconfont qian\"></i>" + _0x39a30c);
    $("body").removeClass("niubihh");
    $(".play_select_insert").removeClass("linearTop ");
    $(".play_select_insert").addClass("linearBottom");
    setTimeout(function () {
      $(".alert_bj").hide();
      $(".play_select_insert").hide();
      $(".play_select_insert").removeClass("linearBottom ");
      $(".play_select_insert").addClass("linearTop");
    }, 200);
  });
  function _0x2c71b1(_0x19c5a9, _0x58fa7f) {
    {
      var _0x48d98d = $(".g_Number_Section");
      var _0x309067 = {
        "0": "大",
        "1": "小",
        "2": "单",
        "3": "双"
      };
      for (var _0x30c490 = 0; _0x30c490 < _0x19c5a9.length; _0x30c490++) {
        var _0x273211 = $("<div class=\"selectNmuverBox\"></div>");
        if (_0x58fa7f == "dxds") {
          {
            var _0x52be59 = $("<div class=\"selectNumbers\" style=\"\"></div>");
          }
        } else {
          {
            var _0x52be59 = $("<div class=\"selectNumbers\"></div>");
          }
        }
        _0x273211.append("<span class=\"numberTitle\">" + _0x19c5a9[_0x30c490] + "</span>");
        _0x273211.append(_0x52be59);
        if (_0x58fa7f == "dxds") {
          for (var _0x241a0a in _0x309067) {
            _0x52be59.append("<a href=\"javascript:void(0);\" class=\"selectNumber\" data-number=\"" + _0x241a0a + "\">" + _0x309067[_0x241a0a] + "</a>");
          }
        } else {
          {
            for (var _0x241a0a = 0; _0x241a0a <= 9; _0x241a0a++) {
              _0x52be59.append("<a href=\"javascript:void(0);\" class=\"selectNumber\" data-number=\"" + _0x241a0a + "\">" + _0x241a0a + "</a>");
            }
          }
        }
        _0x48d98d.append(_0x273211);
      }
    }
  }
  function _0x436bd1() {
    {
      $(".lanIconNumber").show();
      $("#lanIconNumberss").animate({
        left: "303",
        top: "-50px"
      }, 500, function () {
        {
          $(this).animate({
            top: "10px",
            opacity: "0"
          }, 500, function () {
            $(this).css("display", "none");
            $(".kuaijie").css({
              background: "#434354"
            });
            $(".hemai").css({
              background: "#434354"
            });
            $(this).css({
              left: "28px",
              top: "10px",
              opacity: "100"
            });
          });
        }
      });
      $("#lanIconNumbere").text(parseInt($("#lanIconNumbere").text()) + 1);
    }
  }
  $(".addtobetbtn").on("click", function () {
    var _0x3cbffa = $(".yBettingList");
    var _0xccea0 = $(".play_select_tit").find(".curr").find(".wanfa").text();
    var _0x5612ee = $("#bet_filter").find(".curr").parent().siblings(".title").text();
    var _0x59da83 = $("#bet_filter").find(".curr").text();
    var _0x175ddf = $(".selectMultipInput").val();
    var _0x90bae2 = $(".selectMultipleCon").val();
    var _0x13d4a8 = $(".selectMultipleCon").find("option:selected").text();
    var _0x198618 = "";
    var _0x559416 = $(".play_select_prompt").find("span[way-data=\"tabDoc\"] em").text();
    var _0x17d48e = _0x175ddf * _0x559416 * _0x90bae2;
    var _0x4baac9 = true;
    var _0x424c5c = _0x1cfdcb(20);
    var _0xd4b265 = _0x10ab45[_0x292624];
    if (_0x427d59.length >= 1) {
      _0x436bd1();
      for (var _0x39c082 = 0; _0x39c082 < _0x52b1c3.length; _0x39c082++) {
        {
          for (var _0x180b97 = 0; _0x180b97 < _0x52b1c3[_0x39c082].length; _0x180b97++) {
            if (_0x52b1c3[_0x39c082].length - 1 != _0x180b97) {
              {
                _0x198618 += _0x52b1c3[_0x39c082][_0x180b97] + " ";
              }
            } else {
              {
                _0x198618 += _0x52b1c3[_0x39c082][_0x180b97];
              }
            }
          }
          if (_0x52b1c3.length - 1 != _0x39c082) {
            _0x198618 = _0x198618 + ",";
          }
        }
      }
      _0x3cbffa.each(function (_0x1a0190) {
        {
          var _0x373e06 = $(this).find(".number em").text();
          if (_0x292624 == "dxdsqe" || _0x292624 == "dxdshe" || _0x292624 == "dxdsqs" || _0x292624 == "dxdshs") {
            _0x373e06 = _0x373e06.replace(/大/g, "0");
            _0x373e06 = _0x373e06.replace(/小/g, "1");
            _0x373e06 = _0x373e06.replace(/单/g, "2");
            _0x373e06 = _0x373e06.replace(/双/g, "3");
          }
          var _0x3500d5 = $(this).find(".number .yBettingType").text();
          var _0x50a9a1 = "[" + _0xccea0 + "," + _0x5612ee + "," + _0x59da83 + "]";
          var _0x119d2e = $(this).find(".rmb").text();
          console.log(_0x3500d5 == _0x50a9a1, _0x3500d5, _0x50a9a1);
          if (_0x373e06 == _0x198618 && _0x119d2e == _0x13d4a8 && _0x3500d5 == _0x50a9a1) {
            {
              _0x4baac9 = false;
              var _0x242096 = parseInt($(this).find(".yBettingTimess").text()) + parseInt(_0x175ddf);
              _0x17d48e = _0x242096 * _0x559416 * _0x90bae2;
              _0x17d48e = _0x17d48e.toFixed(3);
              $(this).find(".yBettingTimess").text(_0x242096);
              $(this).find(".maxMoneyNumber").text(_0x17d48e + "元");
              $(this).find("#betting_money").text(_0x427d59.length * _0xd26220 * _0x242096 * _0x90bae2);
              _0x51e46c[_0x1a0190].beishu = _0x242096;
              _0x51e46c[_0x1a0190].price = _0x427d59.length * _0xd26220 * _0x242096 * _0x90bae2;
            }
          }
        }
      });
      if (_0x4baac9) {
        var _0x1705f8 = _0x198618.replace(/,/g, "|");
        _0x1705f8 = _0x1705f8.replace(/\s/g, ",");
        var _0x52ae21 = {
          trano: _0x424c5c,
          playtitle: _0xd4b265.title,
          playid: _0xd4b265.playid,
          number: _0x1705f8,
          zhushu: _0x427d59.length,
          price: _0x13305d,
          minxf: _0xd4b265.minxf,
          totalzs: _0xd4b265.totalzs,
          maxjj: _0xd4b265.maxjj,
          minjj: _0xd4b265.minjj,
          maxzs: _0xd4b265.maxzs,
          rate: _0xd4b265.maxjj,
          beishu: parseInt(_0x175ddf),
          yjf: _0x90bae2
        };
        _0x51e46c.push(_0x52ae21);
        if (_0x292624 == "dxdsqe" || _0x292624 == "dxdshe" || _0x292624 == "dxdsqs" || _0x292624 == "dxdshs") {
          _0x198618 = _0x198618.replace(/0/g, "大");
          _0x198618 = _0x198618.replace(/1/g, "小");
          _0x198618 = _0x198618.replace(/2/g, "单");
          _0x198618 = _0x198618.replace(/3/g, "双");
        }
        var _0x5c19a7 = "<div class=\"yBettingList gamezhui\" id=\"" + _0x424c5c + "\">" + "<div class=\"gamezhui-1\">" + "<span><i style=\"color: #ae995c;\"class=\"iconfont\">&#xe606; </i>" + _0xccea0 + "," + _0x5612ee + "," + _0x59da83 + "</span><a class=\"sc\"><i class=\"iconfont\">&#xe630;</i></a>" + "</div>" + "<div class=\"gamezhui-2\">" + "<span class=\"gamezhui-h\">" + _0x198618 + "</span>" + "<span class=\"gamezhui-m\">" + _0x427d59.length + "注," + _0x175ddf + "倍," + _0xd26220 + _0x13d4a8 + "=" + parseInt(_0x427d59.length) * parseInt(_0x175ddf) * parseInt(_0xd26220) + _0x13d4a8 + "</span>" + "</div>" + "<div id=\"betting_money\" style=\"display: none;\">" + _0x13305d + "</div>";
        $(".yBettingLists").append(_0x5c19a7);
      }
      $(".g_Number_Section").find("a").removeClass("curr");
      $("#text").val("");
      _0x52b1c3 = [];
      _0x427d59 = [];
      _0x220d19();
      _0xacd002();
    } else {
      {
        hsycmserror("最少选择一注");
      }
    }
  });
  $(document).on("click", "#f_submit_order", function () {
    if (_0x51e46c.length < 1) {
      hsycmserror("请选择投注号码", -1);
      return false;
    }
    var _0x1abfcf = "<div class=\"hsycms-model-btn confirm\"><button type=\"button\" class=\"cancel\">取消</button><button type=\"button\" class=\"ok\">确定</button></div>";
    $("#confirm").append(_0x1abfcf);
    $("#mask-confirm").show();
    $("#confirm").show();
    $(".confirm .cancel").click(function () {
      $("#mask-confirm").hide();
      $("#confirm").hide();
      $(".confirm").remove();
      $(".hsycms-model-text").html("投注失败");
      $("#mask-error").show();
      $("#error").show();
    });
    $(".confirm .ok").click(function () {
      $("#mask-confirm").hide();
      $("#confirm").hide();
      $(".confirm").remove();
      if (!user) {
        {
          hsycmserror("请先登陆", -1);
        }
      }
      $.ajax({
        type: "POST",
        url: apirooturl + "cpbuy",
        data: {
          orderList: _0x51e46c,
          expect: lottery.currFullExpect,
          lotteryname: lotteryname
        },
        success: function (_0x36b905) {
          if (_0x36b905.sign) {
            $("#orderlist_clear").click();
            $(".kuaijie").css({
              background: "#7b7b87"
            });
            $(".hemai").css({
              background: "#7b7b87"
            });
            hsycms("投注成功", 1);
          } else {
            {
              hsycmserror(_0x36b905.message, -1);
            }
          }
        }
      });
    });
    var _0x470d4d = 0;
    for (var _0x211d9b = 0; _0x211d9b < _0x51e46c.length; _0x211d9b++) {
      var _0x54616e = _0x51e46c[_0x211d9b];
      var _0x30f079 = _0x10ab45[_0x54616e.playid];
      var _0x1fc97b = Number(_0x54616e.price);
      var _0x27f7e3 = _0x54616e.number;
      _0x470d4d += _0x1fc97b;
      if (_0x292624 == "dxdsqe" || _0x292624 == "dxdshe" || _0x292624 == "dxdsqs" || _0x292624 == "dxdshs") {
        _0x27f7e3 = _0x27f7e3.replace(/0/g, "大");
        _0x27f7e3 = _0x27f7e3.replace(/1/g, "小");
        _0x27f7e3 = _0x27f7e3.replace(/2/g, "单");
        _0x27f7e3 = _0x27f7e3.replace(/3/g, "双");
      } else {
        _0x27f7e3 = _0x54616e.number;
      }
    }
    $("#Orderdetailtotalprice").text(_0x470d4d.toFixed(3));
    console.log(_0x51e46c);
  });
  $(document).on("click", ".kuaijie", function () {
    var _0x51a88d = $(".yBettingList");
    var _0x32abf3 = $(".play_select_tit").find(".curr").find(".wanfa").text();
    var _0x26604e = $("#bet_filter").find(".curr").parent().siblings(".title").text();
    var _0x1961f6 = $("#bet_filter").find(".curr").text();
    var _0x279882 = $(".selectMultipInput").val();
    var _0xc9d450 = $(".selectMultipleCon").val();
    var _0x29e2ca = $(".selectMultipleCon").find("option:selected").text();
    var _0x53134a = "";
    var _0x4b68db = $(".play_select_prompt").find("span[way-data=\"tabDoc\"] em").text();
    var _0x38d98a = _0x279882 * _0x4b68db * _0xc9d450;
    var _0x262223 = true;
    var _0x454e9a = _0x1cfdcb(20);
    var _0x30522e = _0x10ab45[_0x292624];
    if (_0x427d59.length >= 1) {
      _0x436bd1();
      for (var _0x3c4f15 = 0; _0x3c4f15 < _0x52b1c3.length; _0x3c4f15++) {
        for (var _0x2f8fbe = 0; _0x2f8fbe < _0x52b1c3[_0x3c4f15].length; _0x2f8fbe++) {
          if (_0x52b1c3[_0x3c4f15].length - 1 != _0x2f8fbe) {
            _0x53134a += _0x52b1c3[_0x3c4f15][_0x2f8fbe] + "";
          } else {
            _0x53134a += _0x52b1c3[_0x3c4f15][_0x2f8fbe];
          }
        }
        if (_0x52b1c3.length - 1 != _0x3c4f15) {
          {
            _0x53134a = _0x53134a + ",";
          }
        }
      }
      _0x51a88d.each(function (_0x3b64c5) {
        var _0x501f82 = $(this).find(".number em").text();
        if (_0x292624 == "dxdsqe" || _0x292624 == "dxdshe" || _0x292624 == "dxdsqs" || _0x292624 == "dxdshs") {
          _0x501f82 = _0x501f82.replace(/大/g, "0");
          _0x501f82 = _0x501f82.replace(/小/g, "1");
          _0x501f82 = _0x501f82.replace(/单/g, "2");
          _0x501f82 = _0x501f82.replace(/双/g, "3");
        }
        var _0x5b94f7 = $(this).find(".number .yBettingType").text();
        var _0x5a1a66 = "[" + _0x32abf3 + "," + _0x26604e + "," + _0x1961f6 + "]";
        var _0x35c722 = $(this).find(".rmb").text();
        console.log(_0x5b94f7 == _0x5a1a66, _0x5b94f7, _0x5a1a66);
        if (_0x501f82 == _0x53134a && _0x35c722 == _0x29e2ca && _0x5b94f7 == _0x5a1a66) {
          {
            _0x262223 = false;
            var _0x53d9c1 = parseInt($(this).find(".yBettingTimess").text()) + parseInt(_0x279882);
            _0x38d98a = _0x53d9c1 * _0x4b68db * _0xc9d450;
            _0x38d98a = _0x38d98a.toFixed(3);
            $(this).find(".yBettingTimess").text(_0x53d9c1);
            $(this).find(".maxMoneyNumber").text(_0x38d98a + "元");
            $(this).find("#betting_money").text(_0x427d59.length * _0xd26220 * _0x53d9c1 * _0xc9d450);
            _0x51e46c[_0x3b64c5].beishu = _0x53d9c1;
            _0x51e46c[_0x3b64c5].price = _0x427d59.length * _0xd26220 * _0x53d9c1 * _0xc9d450;
          }
        }
      });
      if (_0x262223) {
        var _0xa6f946 = _0x53134a.replace(/,/g, "|");
        _0xa6f946 = _0xa6f946.replace(/\s/g, ",");
        var _0x2c3018 = {
          trano: _0x454e9a,
          playtitle: _0x30522e.title,
          playid: _0x30522e.playid,
          number: _0xa6f946,
          zhushu: _0x427d59.length,
          price: _0x13305d,
          minxf: _0x30522e.minxf,
          totalzs: _0x30522e.totalzs,
          maxjj: _0x30522e.maxjj,
          minjj: _0x30522e.minjj,
          maxzs: _0x30522e.maxzs,
          rate: _0x30522e.maxjj,
          beishu: parseInt(_0x279882),
          yjf: _0xc9d450
        };
        _0x51e46c.push(_0x2c3018);
        if (_0x292624 == "dxdsqe" || _0x292624 == "dxdshe" || _0x292624 == "dxdsqs" || _0x292624 == "dxdshs") {
          {
            _0x53134a = _0x53134a.replace(/0/g, "大");
            _0x53134a = _0x53134a.replace(/1/g, "小");
            _0x53134a = _0x53134a.replace(/2/g, "单");
            _0x53134a = _0x53134a.replace(/3/g, "双");
          }
        }
        var _0x17a4b7 = "<div class=\"yBettingList gamezhui\" id=\"" + _0x454e9a + "\">" + "<div class=\"gamezhui-1\">" + "<span><i style=\"color: #ae995c;\"class=\"iconfont\">&#xe606; </i>" + _0x32abf3 + "," + _0x26604e + "," + _0x1961f6 + "</span><a class=\"sc\"><i class=\"iconfont\">&#xe630;</i></a>" + "</div>" + "<div class=\"gamezhui-2\">" + "<span class=\"gamezhui-h\">" + _0x53134a + "</span>" + "<span class=\"gamezhui-m\">" + _0x427d59.length + "注," + _0x279882 + "倍," + _0xd26220 + _0x29e2ca + "=" + parseInt(_0x427d59.length) * parseInt(_0x279882) * parseInt(_0xd26220) + _0x29e2ca + "</span>" + "</div>" + "<div id=\"betting_money\" style=\"display: none;\">" + _0x13305d + "</div>";
        $(".yBettingLists").append(_0x17a4b7);
      }
      $(".g_Number_Section").find("a").removeClass("curr");
      $("#text").val("");
      _0x52b1c3 = [];
      _0x427d59 = [];
      _0x220d19();
      _0xacd002();
    }
    if (_0x51e46c.length < 1) {
      hsycmserror("请选择投注号码", -1);
      return false;
    }
    var _0x4cf45d = "<div class=\"hsycms-model-btn confirm\"><button type=\"button\" class=\"cancel\">取消</button><button type=\"button\" class=\"ok\">确定</button></div>";
    $("#confirm").append(_0x4cf45d);
    $("#mask-confirm").show();
    $("#confirm").show();
    $(".confirm .cancel").click(function () {
      {
        $("#mask-confirm").hide();
        $("#confirm").hide();
        $(".confirm").remove();
        $(".hsycms-model-text").html("投注失败");
        $("#mask-error").show();
        $("#error").show();
        $("#orderlist_clear").click();
      }
    });
    $(".confirm .ok").click(function () {
      $("#mask-confirm").hide();
      $("#confirm").hide();
      $(".confirm").remove();
      if (!user) {
        hsycmserror("请先登陆", -1);
      }
      $.ajax({
        type: "POST",
        url: apirooturl + "cpbuy",
        data: {
          orderList: _0x51e46c,
          expect: lottery.currFullExpect,
          lotteryname: lotteryname
        },
        success: function (_0x4b6244) {
          if (_0x4b6244.sign) {
            {
              $("#orderlist_clear").click();
              $(".kuaijie").css({
                background: "#7b7b87"
              });
              $(".hemai").css({
                background: "#7b7b87"
              });
              hsycms("投注成功", 1);
            }
          } else {
            hsycmserror(_0x4b6244.message, -1);
          }
        }
      });
    });
    var _0x312973 = 0;
    for (var _0x3c4f15 = 0; _0x3c4f15 < _0x51e46c.length; _0x3c4f15++) {
      var _0x560f42 = _0x51e46c[_0x3c4f15];
      var _0x30522e = _0x10ab45[_0x560f42.playid];
      var _0xa8df23 = Number(_0x560f42.price);
      var _0x1fd14f = _0x560f42.number;
      _0x312973 += _0xa8df23;
      if (_0x292624 == "dxdsqe" || _0x292624 == "dxdshe" || _0x292624 == "dxdsqs" || _0x292624 == "dxdshs") {
        {
          _0x1fd14f = _0x1fd14f.replace(/0/g, "大");
          _0x1fd14f = _0x1fd14f.replace(/1/g, "小");
          _0x1fd14f = _0x1fd14f.replace(/2/g, "单");
          _0x1fd14f = _0x1fd14f.replace(/3/g, "双");
        }
      } else {
        {
          _0x1fd14f = _0x560f42.number;
        }
      }
    }
    $("#Orderdetailtotalprice").text(_0x312973.toFixed(3));
    console.log(_0x51e46c);
  });
  $(document).on("click", ".hemai", function () {
    {
      var _0x607b5a = $(".yBettingList");
      var _0x416658 = $(".play_select_tit").find(".curr").find(".wanfa").text();
      var _0x50516f = $("#bet_filter").find(".curr").parent().siblings(".title").text();
      var _0x4a6d11 = $("#bet_filter").find(".curr").text();
      var _0x3c273b = $(".selectMultipInput").val();
      var _0x198b78 = $(".selectMultipleCon").val();
      var _0x16905a = $(".selectMultipleCon").find("option:selected").text();
      var _0xc153a6 = "";
      var _0x54a3fc = $(".play_select_prompt").find("span[way-data=\"tabDoc\"] em").text();
      var _0xf1551f = _0x3c273b * _0x54a3fc * _0x198b78;
      var _0x2b9b84 = true;
      var _0x3dc018 = _0x1cfdcb(20);
      var _0x57318b = _0x10ab45[_0x292624];
      if (_0x427d59.length >= 1) {
        {
          _0x436bd1();
          for (var _0x11d5e9 = 0; _0x11d5e9 < _0x52b1c3.length; _0x11d5e9++) {
            {
              for (var _0x29894b = 0; _0x29894b < _0x52b1c3[_0x11d5e9].length; _0x29894b++) {
                if (_0x52b1c3[_0x11d5e9].length - 1 != _0x29894b) {
                  _0xc153a6 += _0x52b1c3[_0x11d5e9][_0x29894b] + "";
                } else {
                  {
                    _0xc153a6 += _0x52b1c3[_0x11d5e9][_0x29894b];
                  }
                }
              }
              if (_0x52b1c3.length - 1 != _0x11d5e9) {
                {
                  _0xc153a6 = _0xc153a6 + ",";
                }
              }
            }
          }
          _0x607b5a.each(function (_0x2d6741) {
            var _0x35a6d1 = $(this).find(".number em").text();
            if (_0x292624 == "dxdsqe" || _0x292624 == "dxdshe" || _0x292624 == "dxdsqs" || _0x292624 == "dxdshs") {
              {
                _0x35a6d1 = _0x35a6d1.replace(/大/g, "0");
                _0x35a6d1 = _0x35a6d1.replace(/小/g, "1");
                _0x35a6d1 = _0x35a6d1.replace(/单/g, "2");
                _0x35a6d1 = _0x35a6d1.replace(/双/g, "3");
              }
            }
            var _0x2b0dcb = $(this).find(".number .yBettingType").text();
            var _0x1545dd = "[" + _0x416658 + "," + _0x50516f + "," + _0x4a6d11 + "]";
            var _0x49e995 = $(this).find(".rmb").text();
            console.log(_0x2b0dcb == _0x1545dd, _0x2b0dcb, _0x1545dd);
            if (_0x35a6d1 == _0xc153a6 && _0x49e995 == _0x16905a && _0x2b0dcb == _0x1545dd) {
              {
                _0x2b9b84 = false;
                var _0x474f23 = parseInt($(this).find(".yBettingTimess").text()) + parseInt(_0x3c273b);
                _0xf1551f = _0x474f23 * _0x54a3fc * _0x198b78;
                _0xf1551f = _0xf1551f.toFixed(3);
                $(this).find(".yBettingTimess").text(_0x474f23);
                $(this).find(".maxMoneyNumber").text(_0xf1551f + "元");
                $(this).find("#betting_money").text(_0x427d59.length * _0xd26220 * _0x474f23 * _0x198b78);
                _0x51e46c[_0x2d6741].beishu = _0x474f23;
                _0x51e46c[_0x2d6741].price = _0x427d59.length * _0xd26220 * _0x474f23 * _0x198b78;
              }
            }
          });
          if (_0x2b9b84) {
            {
              var _0x108d72 = _0xc153a6.replace(/,/g, "|");
              _0x108d72 = _0x108d72.replace(/\s/g, ",");
              var _0x1c3235 = {
                trano: _0x3dc018,
                playtitle: _0x57318b.title,
                playid: _0x57318b.playid,
                number: _0x108d72,
                zhushu: _0x427d59.length,
                price: _0x13305d,
                minxf: _0x57318b.minxf,
                totalzs: _0x57318b.totalzs,
                maxjj: _0x57318b.maxjj,
                minjj: _0x57318b.minjj,
                maxzs: _0x57318b.maxzs,
                rate: _0x57318b.maxjj,
                beishu: parseInt(_0x3c273b),
                yjf: _0x198b78
              };
              _0x51e46c.push(_0x1c3235);
              if (_0x292624 == "dxdsqe" || _0x292624 == "dxdshe" || _0x292624 == "dxdsqs" || _0x292624 == "dxdshs") {
                _0xc153a6 = _0xc153a6.replace(/0/g, "大");
                _0xc153a6 = _0xc153a6.replace(/1/g, "小");
                _0xc153a6 = _0xc153a6.replace(/2/g, "单");
                _0xc153a6 = _0xc153a6.replace(/3/g, "双");
              }
              var _0x18dc13 = "<div class=\"yBettingList gamezhui\" id=\"" + _0x3dc018 + "\">" + "<div class=\"gamezhui-1\">" + "<span><i style=\"color: #ae995c;\"class=\"iconfont\">&#xe606; </i>" + _0x416658 + "," + _0x50516f + "," + _0x4a6d11 + "</span><a class=\"sc\"><i class=\"iconfont\">&#xe630;</i></a>" + "</div>" + "<div class=\"gamezhui-2\">" + "<span class=\"gamezhui-h\">" + _0xc153a6 + "</span>" + "<span class=\"gamezhui-m\">" + _0x427d59.length + "注," + _0x3c273b + "倍," + _0xd26220 + _0x16905a + "=" + parseInt(_0x427d59.length) * parseInt(_0x3c273b) * parseInt(_0xd26220) + _0x16905a + "</span>" + "</div>" + "<div id=\"betting_money\" style=\"display: none;\">" + _0x13305d + "</div>";
              $(".yBettingLists").append(_0x18dc13);
            }
          }
          $(".g_Number_Section").find("a").removeClass("curr");
          $("#text").val("");
          _0x52b1c3 = [];
          _0x427d59 = [];
          _0x220d19();
          _0xacd002();
          $(".faqihemai").show();
          $(".alert_bj").show();
          $("body").addClass("niubihh");
          SetHM();
        }
      } else {
        {
          hsycmserror("最少选择一注");
        }
      }
    }
  });
  $(".noe").click(function () {
    {
      $(".faqihemai").removeClass("linearTop ");
      $(".faqihemai").addClass("linearBottom");
      setTimeout(function () {
        {
          $("body").removeClass("niubihh");
          $(".alert_bj").hide();
          $(".faqihemai").hide();
          $("#orderlist_clear").click();
          $(".faqihemai").removeClass("linearBottom ");
          $(".faqihemai").addClass("linearTop");
        }
      }, 200);
    }
  });
  $(document).on("click", "#buy_hemai", function () {
    if (_0x51e46c.length < 1) {
      hsycmserror("请选择投注号码");
      return false;
    }
    if (_0x51e46c.length > 1) {
      hsycmserror("发起合买只能投注一种玩法");
      return false;
    }
    var _0x58575a = 0;
    var _0x2b4fdf = 0;
    var _0x86225f = Number($("#fsInput").val());
    var _0x38bcf5 = Number($("#rgInput").val());
    var _0x2947da = Number($("#bdInput").val());
    var _0x58e2f5 = Number($("#isbaodi").hasClass("active"));
    var _0x81a062 = Number($(".leixing .active").attr("num"));
    for (var _0x200976 = 0; _0x200976 < _0x51e46c.length; _0x200976++) {
      var _0x30929d = _0x51e46c[_0x200976];
      var _0x5d6c7b = _0x10ab45[_0x30929d.playid];
      var _0x11e9c5 = Number(_0x30929d.price);
      var _0x161b92 = _0x30929d.number;
      _0x58575a += _0x11e9c5;
      if (_0x292624 == "dxdsqe" || _0x292624 == "dxdshe" || _0x292624 == "dxdsqs" || _0x292624 == "dxdshs") {
        _0x161b92 = _0x161b92.replace(/0/g, "大");
        _0x161b92 = _0x161b92.replace(/1/g, "小");
        _0x161b92 = _0x161b92.replace(/2/g, "单");
        _0x161b92 = _0x161b92.replace(/3/g, "双");
      } else {
        {
          _0x161b92 = _0x30929d.number;
        }
      }
    }
    if (_0x86225f < 1) {
      {
        hsycmserror("您要分成的份数必须大于等于1");
        $("#fsInput").focus();
        return false;
      }
    } else {
      if (_0x58575a.toFixed(2) / _0x86225f < 1) {
        hsycmserror("每份金额必须大于等于1元！");
        $("#fsInput").focus();
        return false;
      } else {
        if (_0x38bcf5 < _0x86225f * 0.02) {
          {
            hsycmserror("您要认购的份数至少应该为所分份数的2% (" + Math.ceil(_0x86225f * 0.02) + "份)！");
            $("#rgInput").focus();
            return false;
          }
        } else {
          if (_0x38bcf5 - _0x86225f > 0) {
            {
              hsycmserror("您要认购的份数不能大于所分的份数！");
              $("#rgInput").focus();
              return false;
            }
          } else {
            if (_0x58e2f5 && _0x2947da < 1) {
              hsycmserror("您要保底的份数不能为空或不能为0！");
              $("#bdInput").focus();
              return false;
            } else {
              if (_0x58e2f5 && _0x2947da - _0x86225f > 0) {
                hsycmserror("您要保底的份数不能大于所分的份数！");
                $("#bdInput").focus();
                return false;
              } else {
                if (_0x58e2f5 && _0x2947da < _0x86225f * 0.02) {
                  {
                    hsycmserror("保底金额至少为总金额的2% (" + Math.ceil(_0x86225f * 0.02) + "份)！");
                    $("#bdInput").focus();
                    return false;
                  }
                } else {
                  if (_0x58e2f5 && _0x38bcf5 + _0x2947da > _0x86225f) {
                    {
                      hsycmserror("您要认购的份数和保底的份数之和不能大于所分的份数！");
                      $("#bdInput").focus();
                      return false;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    var _0x382bc6 = "<div class=\"hsycms-model-btn confirm_hemai\"><button type=\"button\" class=\"cancel\">取消</button><button type=\"button\" class=\"ok\">确定</button></div>";
    $("#hemai_xiangxi").append(_0x382bc6);
    $("#mask_hemai").show();
    $("#hemai_xiangxi").show();
    $(".confirm_hemai .cancel").click(function () {
      {
        $("#mask_hemai").hide();
        $("#hemai_xiangxi").hide();
        $(".confirm_hemai").remove();
        $(".hsycms-model-text").html("投注失败");
        $("#mask-error").show();
        $("#error").show();
        $("#orderlist_clear").click();
      }
    });
    $("#fenshuhemai").text(_0x86225f);
    $("#rengouhemai").text(_0x38bcf5);
    $("#isbaodihemai").text(_0x58e2f5 ? "是" : "否");
    $("#baodihemai").text(_0x58e2f5 ? _0x2947da : 0);
    var _0xf32063 = {
      orderList: _0x51e46c,
      expect: lottery.currFullExpect,
      lotteryname: lotteryname,
      isbaodi: _0x58e2f5,
      isbaomi: _0x81a062,
      rengouhemai: _0x38bcf5,
      fenshuhemai: _0x86225f,
      baodihemai: _0x2947da
    };
    console.log(_0xf32063);
    if (!_0x58e2f5) {
      _0x2947da = 0;
    }
    _0x2b4fdf = (_0x38bcf5 * (_0x58575a / _0x86225f) + _0x2947da * (_0x58575a / _0x86225f)).toFixed(2);
    $("#Orderdetailtotalpricehemai").text(_0x2b4fdf);
    $(".confirm_hemai .ok").click(function () {
      $("#mask_hemai").hide();
      $("#hemai_xiangxi").hide();
      $(".confirm_hemai").remove();
      if (!user) {
        hsycmserror("请先登陆");
      }
      $.ajax({
        type: "POST",
        url: apirooturl + "cphemai",
        data: {
          orderList: _0x51e46c,
          expect: lottery.currFullExpect,
          lotteryname: lotteryname,
          isbaodi: _0x58e2f5,
          isbaomi: _0x81a062,
          rengouhemai: _0x38bcf5,
          fenshuhemai: _0x86225f,
          baodihemai: _0x2947da
        },
        success: function (_0x1bc003) {
          if (_0x1bc003.sign) {
            {
              $("#orderlist_clear").click();
              $(".kuaijie").css({
                background: "#7b7b87"
              });
              $(".hemai").css({
                background: "#7b7b87"
              });
              hsycms("发起合买成功");
            }
          } else {
            hsycmserror(_0x1bc003.message);
          }
        }
      });
    });
  });
  $(document).on("click", "#j_play_select .play_select_tit li", function () {
    $(".zhushu").text("0");
    $(".selectMultipleOldMoney").text("0.00");
    $(".kuaijie").css({
      background: "#7b7b87"
    });
    $(".hemai").css({
      background: "#7b7b87"
    });
    var _0x5db8a3 = $(this).attr("lottery_code");
    $(this).addClass("curr").siblings("li").removeClass("curr");
    $(".g_Number_Section").html("");
    switch (_0x5db8a3) {
      case "zh":
        $(".a1").show();
        $(".a2").hide();
        break;
      case "lhd":
        $(".a2").show();
        $(".a1").hide();
        break;
      case "5x":
        $("#bet_filter").remove();
        _0x3bb124($(".bet_filter_box1"), ssc_5x_title, ssc_5x_arr);
        _0x292624 = "wxzhixfs";
        rates = _0x10ab45[_0x292624];
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的全部五位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_fs);
        break;
      case "4x":
        $("#bet_filter").remove();
        _0x3bb124($(".bet_filter_box2"), ssc_4x_title, ssc_4x_arr);
        _0x292624 = "sixzhixfsh";
        rates = _0x10ab45[_0x292624];
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的后四位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(sx_fs);
        break;
      case "q3":
        $("#bet_filter").remove();
        _0x3bb124($(".bet_filter_box3"), ssc_q3_title, ssc_q3_arr);
        _0x292624 = "sxzhixfsq";
        rates = _0x10ab45[_0x292624];
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的前三位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(q3_sxzhixfsq);
        break;
      case "z3":
        $("#bet_filter").remove();
        _0x3bb124($(".bet_filter_box4"), ssc_q3_title, ssc_z3_arr);
        _0x292624 = "sxzhixfsz";
        rates = _0x10ab45[_0x292624];
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的中三位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(z3_sxzhixfsq);
        break;
      case "h3":
        $("#bet_filter").remove();
        _0x3bb124($(".bet_filter_box5"), ssc_q3_title, ssc_h3_arr);
        _0x292624 = "sxzhixfsh";
        rates = _0x10ab45[_0x292624];
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的后三位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(h3_sxzhixfsq);
        break;
      case "q2":
        $("#bet_filter").remove();
        _0x3bb124($(".bet_filter_box6"), ssc_q2_title, ssc_q2_arr);
        _0x292624 = "exzhixfsq";
        rates = _0x10ab45[_0x292624];
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的前二位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(q2_exzhixfs);
        break;
      case "h2":
        $("#bet_filter").remove();
        _0x3bb124($(".bet_filter_box7"), ssc_q2_title, ssc_h2_arr);
        _0x292624 = "exzhixfsh";
        rates = _0x10ab45[_0x292624];
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("每位至少选择一个号码，竞猜开奖号码的后二位，号码和位置都对应即中奖，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(h2_exzhixfs);
        break;
      case "1x":
        $("#bet_filter").remove();
        _0x3bb124($(".bet_filter_box8"), ssc_1x_title, ssc_1x_arr);
        _0x292624 = "dweid";
        rates = _0x10ab45[_0x292624];
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从万位、千位、百位、十位、个位任意位置上至少选择1个号码，选号与相同位置上的开奖号码一致，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x4bf391(wx_fs);
        break;
      case "dsds":
        $("#bet_filter").remove();
        _0x3bb124($(".bet_filter_box9"), ssc_dsds_title, ssc_dsds_arr);
        _0x292624 = "dxdsqe";
        rates = _0x10ab45[_0x292624];
        $(".play_select_prompt").find("span[way-data=\"tabDoc\"]").html("从万位、千位中的“大、小、单、双”中至少各选一个组成一注，奖金 <em style=\"color:red;\">" + rates.maxjj + "</em>元");
        _0x2c71b1(dxdsqe, "dxds");
        break;
    }
    var _0x4c2917 = $(".play_select_tit").find(".curr").find(".wanfa").text();
    var _0x4ac290 = $("#bet_filter").find(".curr").text();
    $(".gameType").find("string").html(_0x4c2917 + "<i class=\"iconfont qian\"></i>" + _0x4ac290);
  });
  $(".g_Number_Section").on("click", ".selectNumberFilters a", function () {
    {
      var _0x181597 = $(this).attr("data-param");
      switch (_0x181597) {
        case "js-btn-all":
          $(this).parent().siblings(".selectNumbers").find("a").addClass("curr");
          break;
        case "js-btn-big":
          $(this).parent().siblings(".selectNumbers").find("a").each(function (_0xaa9049) {
            if (_0xaa9049 < 5) {
              $(this).removeClass("curr");
            } else {
              {
                $(this).addClass("curr");
              }
            }
          });
          break;
        case "js-btn-small":
          $(this).parent().siblings(".selectNumbers").find("a").each(function (_0x41cd7d) {
            {
              if (_0x41cd7d >= 5) {
                $(this).removeClass("curr");
              } else {
                {
                  $(this).addClass("curr");
                }
              }
            }
          });
          break;
        case "js-btn-odd":
          $(this).parent().siblings(".selectNumbers").find("a").each(function (_0x45fc6e) {
            {
              if (_0x45fc6e % 2 == 0) {
                {
                  $(this).removeClass("curr");
                }
              } else {
                $(this).addClass("curr");
              }
            }
          });
          break;
        case "js-btn-even":
          $(this).parent().siblings(".selectNumbers").find("a").each(function (_0x2bdaee) {
            if (_0x2bdaee % 2 != 0) {
              $(this).removeClass("curr");
            } else {
              {
                $(this).addClass("curr");
              }
            }
          });
          break;
        case "js-btn-clean":
          $(this).parent().siblings(".selectNumbers").find("a").removeClass("curr");
          break;
      }
      _0x52b1c3 = _0xf6cb27();
      _0x45ebef();
      _0x220d19();
    }
  });
  function _0x2fbcec(_0x58708d, _0x3dac8a, _0x3a977e, _0x1f88f2, _0x481079) {
    if (_0x3a977e == undefined || _0x3a977e == null) {
      _0x3a977e = 1;
    }
    var _0x5216d6 = new Array();
    var _0x50b764 = {};
    var _0x2fc5c4;
    while ((_0x2fc5c4 = _0x3dac8a.exec(_0x58708d)) != null) {
      var _0x554816 = _0x2fc5c4[0];
      if (_0x1f88f2) {
        {
          if (_0x3a977e == 1) {
            {
              _0x554816 = _0x554816.match(/./g).sort().join("");
            }
          } else {
            if (_0x3a977e == 2) {
              {
                _0x554816 = _0x554816.match(/.{2}/g).sort().join(" ");
              }
            } else {
              _0x554816 = _0x554816.match(/./g).sort().join("");
            }
          }
        }
      } else {
        if (_0x3a977e == 2) {
          {
            _0x554816 = _0x554816.match(/.{2}/g).join(" ");
          }
        }
      }
      if (!_0x50b764[_0x554816]) {
        if (_0x481079) {
          if (!(_0x554816.charAt(0) == _0x554816.charAt(1) && _0x554816.charAt(0) == _0x554816.charAt(2) && _0x554816.charAt(1) == _0x554816.charAt(2))) {
            _0x50b764[_0x554816] = 1;
            _0x5216d6.push(_0x554816);
          }
        } else {
          {
            _0x50b764[_0x554816] = 1;
            _0x5216d6.push(_0x554816);
          }
        }
      }
    }
    return _0x5216d6;
  }
  function _0x84c284(_0x3eb994, _0x5daf47) {
    return _0x3eb994 - _0x5daf47;
  }
  function _0x5f308c(_0x20d93a) {
    {
      var _0x2f6b30 = _0x20d93a.split("");
      for (var _0x549d1d = 0, _0x1dfdbe = _0x2f6b30.length; _0x549d1d < _0x1dfdbe - 1; _0x549d1d++) {
        {
          if (_0x2f6b30.slice(_0x549d1d + 1).indexOf(_0x2f6b30[_0x549d1d]) >= 0) {
            return true;
          }
        }
      }
      return false;
    }
  }
  function _0x2cc9cb(_0x54a12c, _0x20cdb3, _0x3a4af1) {
    {
      var _0xeb932 = _0x54a12c.split(" ");
      var _0x28074f = [];
      _0x52a287 = [];
      var _0x5b708f = "";
      var _0x54233c = "";
      var _0x2de41e = 0;
      for (var _0x1a7e1c = 0; _0x1a7e1c < _0xeb932.length; _0x1a7e1c++) {
        if (_0xeb932[_0x1a7e1c].length > _0x20cdb3 || _0xeb932[_0x1a7e1c].length < _0x20cdb3) {
          {
            _0x28074f.push(_0xeb932[_0x1a7e1c]);
          }
        } else {
          {
            _0x52a287.push(_0xeb932[_0x1a7e1c]);
          }
        }
      }
      for (var _0x19e926 = 0; _0x19e926 < _0x28074f.length; _0x19e926++) {
        _0x5b708f += _0x28074f[_0x19e926] + " ";
      }
      for (var _0x318ffc = 0; _0x318ffc < _0x52a287.length; _0x318ffc++) {
        _0x54233c += _0x52a287[_0x318ffc] + " ";
      }
      if (_0x292624 == "sxhhzxq" || _0x292624 == "sxhhzxz" || _0x292624 == "sxhhzxh") {
        var _0x5e076b = _0x54a12c;
        var _0x1778cf = /\b[0-9]{3}\b/g;
        var _0x41bebf = _0x2fbcec(_0x5e076b, _0x1778cf, 1, true, true);
        _0x41bebf = _0x41bebf.sort();
        if (_0x41bebf) {
          {
            _0x2de41e = _0x41bebf.length;
            _0x52a287 = _0x41bebf;
          }
        }
      }
      if (_0x292624 == "qszsds" || _0x292624 == "zszsds" || _0x292624 == "hszsds") {
        var _0x34510e = [];
        var _0xb5a212 = _0x52a287.length;
        for (var _0x4db9a1 = 0; _0x4db9a1 < _0xb5a212; _0x4db9a1++) {
          var _0x275d7a = [];
          _0x34510e = _0x52a287[_0x4db9a1].split("");
          _0x34510e.sort(_0x84c284);
          _0x52a287[_0x4db9a1] = _0x34510e.join("");
        }
        for (var _0x4b8093 = 0; _0x4b8093 < _0xb5a212; _0x4b8093++) {
          {
            if (_0x52a287[_0x4b8093]) {
              {
                if (!_0x5f308c(_0x52a287[_0x4b8093]) || /^(\d)\1+$/.test(_0x52a287[_0x4b8093])) {
                  _0x52a287.splice(_0x4b8093--, 1);
                }
              }
            }
          }
        }
      }
      if (_0x292624 == "qszlds" || _0x292624 == "zszlds" || _0x292624 == "hszlds") {
        var _0x34510e = [];
        var _0xb5a212 = _0x52a287.length;
        for (var _0x4db9a1 = 0; _0x4db9a1 < _0xb5a212; _0x4db9a1++) {
          {
            var _0x275d7a = [];
            _0x34510e = _0x52a287[_0x4db9a1].split("");
            _0x34510e.sort(_0x84c284);
            _0x52a287[_0x4db9a1] = _0x34510e.join("");
          }
        }
        for (var _0x4b8093 = 0; _0x4b8093 < _0xb5a212; _0x4b8093++) {
          if (_0x52a287[_0x4b8093]) {
            if (_0x5f308c(_0x52a287[_0x4b8093]) || /^(\d)\1+$/.test(_0x52a287[_0x4b8093])) {
              _0x52a287.splice(_0x4b8093--, 1);
            }
          }
        }
      }
      if (_0x292624 == "exzuxdsq" || _0x292624 == "exzuxdsh") {
        var _0x5e076b = _0x54a12c;
        var _0x1778cf = /\b([0-9])(?!\1)([0-9])\b/g;
        var _0x41bebf = _0x2fbcec(_0x5e076b, _0x1778cf, 1, true);
        _0x41bebf = _0x41bebf.sort();
        if (_0x41bebf) {
          _0x2de41e = _0x41bebf.length;
          _0x52a287 = _0x41bebf;
        }
      }
      if (_0x3a4af1 == "remove") {
        {
          if (_0x54a12c == "") {
            hsycmserror("请投注");
            return;
          }
          if (_0x28074f.length < 1) {
            hsycms("全部投注格式正确");
          } else {
            $("#text").val(_0x54233c);
            hsycmserror("以下投注格式不正确： <br /> " + _0x5b708f + "");
          }
        }
      }
      if (_0x3a4af1 == "test") {
        {
          if (_0x54a12c == "") {
            hsycmserror("请投注");
            return;
          }
          if (_0x28074f.length < 1) {
            hsycms("全部投注格式正确");
          } else {
            {
              hsycmserror("以下投注格式不正确： <br /> " + _0x5b708f + "");
            }
          }
        }
      }
    }
  }
  function _0x8e89ae() {
    var _0x196e12 = "<div class=\"g_text\"><textarea name=\"\" value=\"123456\" id=\"text\" cols=\"30\" rows=\"10\" placeholder=\"每注号码以空格进行分割\"></textarea><button type=\"button\" class=\"remove_btn\">删除错误项</button><button type=\"button\" class=\"test_istrue\">检查格式是否正确 </button><button type=\"button\" class=\"empty_text\">清空文本框</button></div>";
    $(".g_Number_Section").append(_0x196e12);
  }
  function _0x4bf391(_0x1559ef, _0x3ea9f6, _0x2380df) {
    {
      var _0x5a7934 = $(".g_Number_Section");
      for (var _0x272075 = 0; _0x272075 < _0x1559ef.length; _0x272075++) {
        var _0x4bbedd = "<div class=\"selectNumberFilters\"><a href=\"javascript:void(0);\" class=\"selectNumberFilter\" data-param=\"js-btn-all\">全</a><a href=\"javascript:void(0);\" class=\"selectNumberFilter\" data-param=\"js-btn-big\">大</a><a href=\"javascript:void(0);\" class=\"selectNumberFilter\" data-param=\"js-btn-small\">小</a><a href=\"javascript:void(0);\" class=\"selectNumberFilter\" data-param=\"js-btn-odd\">奇</a><a href=\"javascript:void(0);\" class=\"selectNumberFilter\" data-param=\"js-btn-even\">偶</a><a href=\"javascript:void(0);\" class=\"selectNumberFilter\" data-param=\"js-btn-clean\">清</a></div>";
        var _0x119983 = $("<div class=\"selectNmuverBox\"></div>");
        var _0x2f8540 = $("<div class=\"selectNumbers\"></div>");
        _0x119983.append("<span class=\"numberTitle\">" + _0x1559ef[_0x272075] + "</span>");
        _0x119983.append(_0x2f8540);
        _0x119983.append(_0x4bbedd);
        if (_0x3ea9f6 && _0x2380df) {
          for (var _0x5c261d = _0x2380df; _0x5c261d <= _0x3ea9f6; _0x5c261d++) {
            _0x2f8540.append("<a href=\"javascript:void(0);\" class=\"selectNumber\" data-number=\"" + _0x5c261d + "\">" + _0x5c261d + "</a>");
          }
        } else {
          if (_0x3ea9f6) {
            for (var _0x5c261d = 0; _0x5c261d <= _0x3ea9f6; _0x5c261d++) {
              _0x2f8540.append("<a href=\"javascript:void(0);\" class=\"selectNumber\" data-number=\"" + _0x5c261d + "\">" + _0x5c261d + "</a>");
            }
          } else {
            {
              for (var _0x5c261d = 0; _0x5c261d <= 9; _0x5c261d++) {
                {
                  _0x2f8540.append("<a href=\"javascript:void(0);\" class=\"selectNumber\" data-number=\"" + _0x5c261d + "\">" + _0x5c261d + "</a>");
                }
              }
            }
          }
        }
        _0x5a7934.append(_0x119983);
      }
    }
  }
  function _0x3bb124(_0x41e999, _0x79fdd2, _0x340956) {
    {
      var _0x22eb11 = $("<div></div>");
      var _0x2a9e70 = "";
      var _0x4465f7 = true;
      _0x22eb11.attr("id", "bet_filter");
      for (var _0x1fce44 = 0; _0x1fce44 < _0x79fdd2.length; _0x1fce44++) {
        {
          var _0x106a83 = $("<div class=\"kuang\"></div>");
          var _0x33e104 = $("<div class=\"bet_option kuang1\"></div>");
          _0x106a83.attr("class", "bet_filter_item");
          _0x106a83.append("<div class=\"title\" style=\"color: #868686e8;\">" + _0x79fdd2[_0x1fce44] + "</div>");
          for (j in _0x340956[_0x1fce44]) {
            {
              if (_0x4465f7) {
                {
                  _0x2a9e70 = "<div class=\"bet_options curr\" lottery_code_two=\"" + j + "\">" + _0x340956[_0x1fce44][j] + "</div>";
                  _0x4465f7 = false;
                }
              } else {
                _0x2a9e70 = "<div class=\"bet_options\" lottery_code_two=\"" + j + "\">" + _0x340956[_0x1fce44][j] + "</div>";
              }
              _0x33e104.append(_0x2a9e70);
            }
          }
          _0x106a83.append(_0x33e104);
          _0x22eb11.append(_0x106a83);
        }
      }
      $(".bet_filter_item").eq(0).find(".bet_options").eq(0).addClass("curr");
      _0x41e999.append(_0x22eb11);
    }
  }
  function _0x21ad93(_0x488b6c) {
    {
      _0x27069b = isNaN(parseInt($(".selectMultipInput").val())) ? 1 : parseInt($(".selectMultipInput").val());
      if (_0x292624 == "dxdsqe" || _0x292624 == "dxdshe" || _0x292624 == "dxdsqs" || _0x292624 == "dxdshs") {
        {
          _0x231dfc = 100000;
        }
      } else {
        _0x231dfc = 10000;
      }
      if (_0x27069b <= 1) {
        $(".selectMultipInput").val(1);
        $(".reduce").addClass("noReduce");
      }
      if (_0x27069b > _0x231dfc) {
        $(".selectMultipInput").val(_0x231dfc);
        $(".reduce").removeClass("noReduce");
        $(".selectMultiple .add").addClass("noReduce");
        return;
      }
      if ("+" == _0x488b6c) {
        {
          _0x27069b++;
          if (_0x27069b >= _0x231dfc) {
            {
              $(".selectMultipInput").val(_0x231dfc);
              $(".selectMultiple .add").addClass("noReduce");
              return;
            }
          }
          $(".selectMultiple .add").removeClass("noReduce");
          $(".selectMultipInput").val(_0x27069b);
        }
      } else {
        if ("-" == _0x488b6c) {
          _0x27069b--;
          if (_0x27069b <= 1) {
            {
              $(".selectMultipInput").val(1);
              $(".reduce").addClass("noReduce");
              return;
            }
          }
          $(".reduce").removeClass("noReduce");
          $(".selectMultipInput").val(_0x27069b);
        }
      }
      if (_0x27069b > 1 && _0x27069b < _0x231dfc) {
        $(".reduce").removeClass("noReduce");
      }
      if (_0x27069b < _0x231dfc) {
        $(".selectMultiple .add").removeClass("noReduce");
      }
    }
  }
  var _0x6a6fa9 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  function _0x1cfdcb(_0x63379e) {
    {
      var _0x4c580b = "";
      for (var _0x1c05bd = 0; _0x1c05bd < _0x63379e; _0x1c05bd++) {
        var _0x16047a = Math.ceil(Math.random() * 35);
        _0x4c580b += _0x6a6fa9[_0x16047a];
      }
      return _0x4c580b;
    }
  }
  function _0xacd002() {
    {
      var _0x4c2a7a = 0;
      var _0x3a7ac7 = 0;
      $(".yBettingList").each(function (_0x135ff5) {
        var _0x400dcc = parseInt($(this).find(".yBettingZhushu em").text());
        var _0x8e821b = parseFloat($(this).find("#betting_money").text());
        _0x4c2a7a += _0x400dcc;
        _0x3a7ac7 += _0x8e821b;
      });
      _0x16ee2a = _0x4c2a7a;
      _0x2abb3f = _0x3a7ac7;
      $("#f_gameOrder_lotterys_num").text(_0x16ee2a);
      $(".hemaijinerMoney").text(_0x2abb3f.toFixed(3));
    }
  }
  function _0x220d19() {
    {
      var _0x14e99a = parseInt(_0x427d59.length);
      var _0x5a1eff = parseInt($(".selectMultipInput").val());
      var _0x5936ed = parseFloat($(".selectMultipleCon").val());
      var _0x519aff = _0x14e99a * _0xd26220 * _0x5a1eff * _0x5936ed;
      _0x13305d = _0x519aff.toFixed(3);
      $(".zhushu").text(_0x14e99a);
      $(".selectMultipleOldMoney").text(_0x13305d);
    }
  }
  function _0xcb52bd(_0x1c0be1) {
    var _0x21720a = [[]];
    for (var _0x451e6f = 0; _0x451e6f < _0x1c0be1.length; _0x451e6f++) {
      {
        var _0x5a8a06 = [];
        for (var _0x3fb3d8 = 0; _0x3fb3d8 < _0x21720a.length; _0x3fb3d8++) {
          {
            for (var _0x1c593b = 0; _0x1c593b < _0x1c0be1[_0x451e6f].length; _0x1c593b++) {
              _0x5a8a06.push(_0x21720a[_0x3fb3d8].concat(_0x1c0be1[_0x451e6f][_0x1c593b]));
            }
          }
        }
        _0x21720a = _0x5a8a06;
      }
    }
    return _0x21720a;
  }
  function _0x56ea0c(_0xb8ccfc, _0x417ddb) {
    var _0x53df6e = [];
    (function f(_0x1913b1, _0x546031, _0xc83085) {
      if (_0xc83085 == 0) {
        return _0x53df6e.push(_0x1913b1);
      }
      for (var _0x12a48a = 0, _0x4106a4 = _0x546031.length; _0x12a48a <= _0x4106a4 - _0xc83085; _0x12a48a++) {
        {
          f(_0x1913b1.concat(_0x546031[_0x12a48a]), _0x546031.slice(_0x12a48a + 1), _0xc83085 - 1);
        }
      }
    })([], _0xb8ccfc, _0x417ddb);
    return _0x53df6e;
  }
  function _0xf6cb27() {
    {
      var _0x22d566 = [];
      $(".selectNumbers").each(function (_0x1bee93) {
        {
          var _0x4d487a = [];
          $(this).find(".curr").each(function (_0x59775a) {
            _0x4d487a.push($(this).attr("data-number"));
          });
          _0x22d566.push(_0x4d487a);
        }
      });
      return _0x22d566;
    }
  }
  function _0xcfab03(_0x13f1ad) {
    {
      _0x13f1ad.value = _0x13f1ad.value.replace(/[^\d.\s*]/g, "");
      _0x13f1ad.value = _0x13f1ad.value.replace(/^\./g, "");
      _0x13f1ad.value = _0x13f1ad.value.replace(/\.{2,}/g, ".");
      _0x13f1ad.value = _0x13f1ad.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    }
  }
  function _0x24f8b2(_0xb03953) {
    if (_0xb03953.value.substr(_0xb03953.value.length - 1, 1) == ".") {
      _0xb03953.value = _0xb03953.value.substr(0, _0xb03953.value.length - 1);
    }
  }
});
(function (_0x2fe1a6, _0xcbb010, _0x2f8f1c) {
  var _0x58eaa5 = function () {
    var _0x9c12ed = true;
    return function (_0x263dd3, _0x4f7409) {
      var _0x40dbe7 = _0x9c12ed ? function () {
        if (_0x4f7409) {
          var _0x45cdce = _0x4f7409.apply(_0x263dd3, arguments);
          _0x4f7409 = null;
          return _0x45cdce;
        }
      } : function () {};
      _0x9c12ed = false;
      return _0x40dbe7;
    };
  }();
  var _0x2b2b68 = _0x58eaa5(this, function () {
    var _0x29ded1 = function () {
      return "dev";
    };
    var _0x32d620 = function () {
      return "window";
    };
    var _0x46bb34 = function () {
      var _0x5e1e41 = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return !_0x5e1e41.test(_0x29ded1.toString());
    };
    var _0x5bf4a2 = function () {
      var _0x518ca9 = new RegExp("(\\\\[x|u](\\w){2,4})+");
      return _0x518ca9.test(_0x32d620.toString());
    };
    var _0x11fb2c = function (_0x380916) {
      var _0x5e796b = 0 >> 1 + NaN;
      if (_0x380916.indexOf("i" === _0x5e796b)) {
        _0x5ac863(_0x380916);
      }
    };
    var _0x5ac863 = function (_0x497ee3) {
      var _0x2e32bd = 3 >> 1 + NaN;
      if (_0x497ee3.indexOf("true"[3]) !== _0x2e32bd) {
        _0x11fb2c(_0x497ee3);
      }
    };
    if (!_0x46bb34()) {
      if (!_0x5bf4a2()) {
        _0x11fb2c("indеxOf");
      } else {
        _0x11fb2c("indexOf");
      }
    } else {
      _0x11fb2c("indеxOf");
    }
  });
  _0x2b2b68();
  _0x2f8f1c = "al";
  try {
    {
      _0x2f8f1c += "ert";
      _0xcbb010 = encode_version;
      if (!(typeof _0xcbb010 !== "undefined" && _0xcbb010 === "jsjiami.com.v5")) {
        {
          _0x2fe1a6[_0x2f8f1c]("删除版本号，js会定期弹窗，还请支持我们的工作");
        }
      }
    }
  } catch (_0x5535fa) {
    {
      _0x2fe1a6[_0x2f8f1c]("删除版本号，js会定期弹窗");
    }
  }
})(window);
encode_version = "jsjiami.com.v5";