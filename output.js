//Sun Jun 15 2025 19:52:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
var app = new Vue({
  el: "#app",
  data: {
    config: {
      color: {
        mine: "rgba(255, 255, 255, 0.99)",
        friend: "rgba(0, 128, 0, 0.99)",
        enemy: "rgba(255, 0, 0, 0.99)",
        c4: "rgba(0, 0, 255, 0.99)"
      },
      map_rotate: false,
      hp: false,
      name: false,
      team: false
    },
    names: [],
    selectName: "",
    is_menu: true,
    map: "",
    user: u
  },
  mounted() {
    this.jz();
  },
  methods: {
    Menu() {
      if (this.is_menu) {
        this.is_menu = false;
      } else {
        this.is_menu = true;
      }
    },
    jz() {
      let _0x4c3eaf = this;
      if (!_0x4c3eaf.user) {
        window.location.href = "404.html";
      }
      function _0x1f2e77(_0x1f1540) {
        var _0x58c89b = new WebSocket(_0x1f1540);
        _0x58c89b.onopen = function (_0x15565b) {
          {
            console.log("连接建立中... " + _0x1f1540);
          }
        };
        _0x58c89b.onclose = function (_0xd1ddb) {
          console.log("连接关闭中...", _0xd1ddb);
        };
        _0x58c89b.onmessage = function (_0x474365) {
          console.log("收到来自服务端的消息：", _0x474365.data);
        };
        _0x58c89b.onerror = function (_0x23ee69) {
          console.log("发生错误...", _0x23ee69);
        };
        return _0x58c89b;
      }
      function _0x3c5400() {
        {
          var _0x2c1afe = parseInt(document.getElementById("editParam").value);
          if (!isNaN(_0x2c1afe)) {
            param = _0x2c1afe;
            console.log("参数已更新为：" + param);
          } else {
            {
              console.log("参数无效");
            }
          }
        }
      }
      var _0x5afd05 = _0x1f2e77("ws://103.45.162.130:9503");
      const _0x155f48 = document.getElementById("canvas");
      const _0x36eaff = _0x155f48.getContext("2d");
      let _0x532e04;
      let _0x649a6f = null;
      let _0x36415f = null;
      _0x5afd05.onopen = function () {
        {
          _0x5afd05.send(_0x4c3eaf.user);
          _0x532e04 = new Image();
          _0x532e04.src = "map/new_map/repair/tm.png";
          _0x532e04.onload = function () {
            _0x36eaff.clearRect(0, 0, _0x155f48.width, _0x155f48.height);
            _0x36eaff.drawImage(_0x532e04, 0, 0);
            _0x649a6f = "0";
          };
        }
      };
      var _0x239d40 = 0;
      _0x5afd05.onmessage = function (_0x7a25cb) {
        const {
          map,
          data
        } = JSON.parse(_0x7a25cb.data);
        _0x4c3eaf.map = map;
        if (map !== _0x36415f) {
          if (map === "0") {
            _0x532e04.src = "map/new_map/repair/沙漠.png";
            _0x239d40 = 180;
          } else {
            if (map === "1") {
              _0x532e04.src = "map/new_map/repair/黑色.png";
              _0x239d40 = 180;
            } else {
              if (map === "2") {
                _0x532e04.src = "map/new_map/repair/异域.png";
                _0x239d40 = 90;
              } else {
                if (map === "3") {
                  _0x532e04.src = "map/new_map/repair/卫星.png";
                  _0x239d40 = 90;
                } else {
                  if (map === "4") {
                    _0x532e04.src = "map/new_map/repair/供电.png";
                    _0x239d40 = 0;
                  } else {
                    if (map === "5") {
                      _0x532e04.src = "map/new_map/repair/潜艇.png";
                      _0x239d40 = 0;
                    } else {
                      if (map === "6") {
                        _0x532e04.src = "map/new_map/repair/鹰眼.png";
                        _0x239d40 = 90;
                      } else {
                        if (map === "7") {
                          _0x532e04.src = "map/new_map/repair/港口.png";
                          _0x239d40 = 90;
                        } else {
                          if (map === "8") {
                            _0x532e04.src = "map/new_map/repair/时空.png";
                            _0x239d40 = 90;
                          } else {
                            if (map === "9") {
                              _0x532e04.src = "map/new_map/repair/19.png";
                              _0x239d40 = 270;
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
          _0x649a6f = map;
        }
        _0x36415f = map;
        _0x36eaff.clearRect(0, 0, _0x155f48.width, _0x155f48.height);
        _0x36eaff.drawImage(_0x532e04, 0, 0);
        var _0x3c3380 = 5;
        if (_0x4c3eaf.config.map_rotate) {
          {
            _0x155f48.style.transform = "rotate(180deg)";
          }
        } else {
          _0x155f48.style.transform = "rotate(0)";
        }
        for (let {
          xaxis,
          yaxis
        } of data) {
          xaxis = _0x155f48.width - xaxis;
          yaxis = _0x155f48.height - yaxis;
        }
        let _0x10f70e = [];
        _0x36eaff.font = "10px SimSum";
        for (const {
          xaxis,
          yaxis,
          camp,
          Angle,
          Xueliang,
          mingzi
        } of data) {
          if (xaxis === 0 && yaxis === 0) {
            continue;
          }
          _0x36eaff.beginPath();
          _0x36eaff.arc(xaxis, yaxis, _0x3c3380, 0, Math.PI * 2);
          _0x36eaff.closePath();
          switch (camp) {
            case 0:
              _0x10f70e.push(mingzi);
              if (_0x4c3eaf.selectName == mingzi) {
                _0x36eaff.fillStyle = _0x4c3eaf.config.color.mine;
              } else {
                _0x36eaff.fillStyle = _0x4c3eaf.config.color.friend;
              }
              break;
            case 1:
              _0x36eaff.fillStyle = _0x4c3eaf.config.color.enemy;
              break;
            case 2:
              _0x10f70e.push(mingzi);
              if (_0x4c3eaf.selectName == "" || _0x4c3eaf.selectName == mingzi) {
                _0x36eaff.fillStyle = _0x4c3eaf.config.color.mine;
              } else {
                {
                  _0x36eaff.fillStyle = _0x4c3eaf.config.color.friend;
                }
              }
              break;
            case 3:
              _0x36eaff.fillStyle = _0x4c3eaf.config.color.c4;
              break;
          }
          _0x4c3eaf.names = _0x10f70e;
          if (_0x4c3eaf.config.hp && camp != 0 && camp != 2) {
            _0x36eaff.fillText(Xueliang, xaxis - 10, yaxis + 16);
          }
          if (_0x4c3eaf.config.name && camp != 0 && camp != 2) {
            _0x36eaff.fillText(mingzi, xaxis - 25, yaxis - 6);
          }
          if (camp == 0) {
            if (!_0x4c3eaf.config.team && _0x4c3eaf.selectName != mingzi) {
              {
                continue;
              }
            }
          } else {
            if (camp == 2) {
              if (_0x4c3eaf.selectName != "" && _0x4c3eaf.selectName != mingzi) {
                {
                  continue;
                }
              }
            }
          }
          _0x36eaff.fill();
          _0x36eaff.save();
          _0x36eaff.beginPath();
          _0x36eaff.fillStyle = "#fff";
          _0x36eaff.arc(xaxis, yaxis, 2, 0, Math.PI * 2);
          _0x36eaff.closePath();
          _0x36eaff.fill();
          _0x36eaff.restore();
          let _0x424b7a = _0x4c3eaf.colorex(_0x36eaff.fillStyle);
          _0x36eaff.beginPath();
          _0x36eaff.moveTo(xaxis, yaxis);
          const _0x1568ed = _0x36eaff.createRadialGradient(xaxis, yaxis, 0, xaxis, yaxis, 40);
          _0x1568ed.addColorStop(0, _0x424b7a[0]);
          _0x1568ed.addColorStop(1, _0x424b7a[1]);
          _0x36eaff.fillStyle = _0x1568ed;
          _0x36eaff.arc(xaxis, yaxis, 40, (Angle - 40 + _0x239d40) * Math.PI / 180, (Angle + 40 + _0x239d40) * Math.PI / 180);
          _0x36eaff.closePath();
          _0x36eaff.fill();
        }
      };
    },
    mdd() {
      let _0x5265d = $("#canvas").css("scale") * 1;
      if (_0x5265d >= 5) {
        {
          return;
        }
      }
      $("#canvas").css("scale", _0x5265d + 0.2);
    },
    hy() {
      $("#canvas").css("scale", 1);
    },
    mcc() {
      let _0x2d36f6 = $("#canvas").css("scale") * 1;
      if (_0x2d36f6 == 1) {
        return;
      }
      $("#canvas").css("scale", _0x2d36f6 - 0.2);
    },
    colorex(_0x37b545) {
      let _0x10b490 = _0x37b545.split(",");
      if (_0x37b545.indexOf(",") == -1) {
        return [_0x37b545, _0x37b545];
      }
      return [_0x10b490[0] + "," + _0x10b490[1] + "," + _0x10b490[2] + ",1)", _0x10b490[0] + "," + _0x10b490[1] + "," + _0x10b490[2] + ",.2)"];
    }
  }
});
(function (_0x411f57, _0x2297f3, _0x3062af) {
  _0x3062af = "al";
  try {
    _0x3062af += "ert";
    _0x2297f3 = encode_version;
    if (!(typeof _0x2297f3 !== "undefined" && _0x2297f3 === "jsjiami.com.v5")) {
      _0x411f57[_0x3062af]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x2c6566) {
    _0x411f57[_0x3062af]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";