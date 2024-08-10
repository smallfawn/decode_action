//Sat Aug 10 2024 08:58:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var vm = new Vue({
  el: "#app",
  data: function () {
    return data;
  },
  created() {
    var _0xf099b7 = dataslist;
    if (_0xf099b7) {
      window.document.title = _0xf099b7.cj.title;
      this.data = _0xf099b7.cj;
      if (_0xf099b7.cj.iframe == "no") {
        this.danmus = _0xf099b7.danmus;
        this.prize_log = _0xf099b7.prize_log;
      }
    }
  },
  mounted() {
    $(".form-popuo").css("background-image", "linear-gradient(#ffffff, " + this.data.color.form + ")");
  },
  methods: {
    start_cj() {
      if (this.status.cj == false) {
        return false;
      }
      if (this.data.iframe == "yes") {
        if (this.data.form.form_switch == "kai" || this.data.form.cj_code_switch == "kai") {
          this.status.form = true;
          return false;
        }
        this.$message({
          message: "测试环境,随便抽，主要是看抽奖效果，非真实抽奖",
          type: "warning",
          customClass: "message"
        });
        this.status.cj = false;
        let _0x133e5c = this.data.prize,
          _0x18ffa1 = _0x133e5c.length,
          _0x12e4c1 = Math.floor(Math.random() * _0x18ffa1) + 1,
          _0x30a58c = _0x133e5c[_0x12e4c1 - 1];
        _0x30a58c.cj_time = "2023-01-04 18:16:03";
        _0x30a58c.dj_status = "0";
        _0x30a58c.id = 1;
        this.zj_prize = _0x30a58c;
        this.prize_log.unshift(_0x30a58c);
        this.cj_animation(_0x12e4c1);
        return false;
      } else {
        let _0x4748b1 = Math.round(new Date() / 1000),
          _0x1cf5da = new Date("" + this.data.time1 + "") / 1000,
          _0xd4d0d5 = new Date("" + this.data.time2 + "") / 1000;
        if (_0x1cf5da > _0x4748b1) {
          this.$message({
            message: "活动未开始",
            type: "warning",
            center: true,
            customClass: "message"
          });
          return false;
        }
        if (_0xd4d0d5 < _0x4748b1) {
          this.$message({
            message: "活动已结束",
            type: "warning",
            center: true,
            customClass: "message"
          });
          return false;
        }
        const _0x135e75 = this.$loading({
          lock: true,
          text: "抽奖准备中，请稍后...",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.1)"
        });
        let _0x5b6935 = this.data.form.form_switch + "-" + this.data.form.cj_code_switch;
        var _0x1a1980 = this;
        $.post("?act=common/start_cj", {
          id: this.data.id,
          sign: _0x5b6935
        }, function (_0x80cdad) {
          _0x135e75.close();
          switch (_0x80cdad.code) {
            case 1:
              _0x1a1980.status.cj = false;
              var _0x2e5643 = _0x80cdad.data.level;
              _0x1a1980.zj_prize = {
                id: _0x80cdad.data.id,
                prize_img: _0x80cdad.data.prize_img,
                prize_title: _0x80cdad.data.prize_title,
                prize_name: _0x80cdad.data.prize_name,
                prize_type: _0x80cdad.data.prize_type
              };
              _0x1a1980.prize_log.unshift(_0x80cdad.data);
              if (_0x80cdad.data.level == 0) {
                setTimeout(function () {
                  _0x1a1980.status.zj = true;
                  _0x1a1980.status.cj = true;
                }, 1000);
                return false;
              } else {
                _0x1a1980.cj_animation(_0x2e5643);
              }
              break;
            case 2:
              _0x1a1980.status.form = true;
              break;
            case 3:
              _0x1a1980.data.form.form_switch = "guan";
              _0x1a1980.status.form = true;
              break;
            default:
              _0x1a1980.$message({
                message: _0x80cdad.msg,
                type: "warning",
                customClass: "message"
              });
          }
        });
      }
    },
    draw_zhuanpan() {
      var _0x19965d = this,
        _0x22a6e4 = Math.PI / (_0x19965d.data.prize.length / 2),
        _0x36e3eb = document.getElementById("dazhuanpan"),
        _0x4efcf8 = _0x36e3eb.getContext("2d"),
        _0x512d84 = _0x36e3eb.width,
        _0x5594fe = _0x36e3eb.height;
      _0x4efcf8.clearRect(0, 0, _0x512d84, _0x5594fe);
      _0x4efcf8.font = "" + _0x19965d.data.panmian.fontSize1 + "px Microsoft YaHei";
      for (var _0x23eb5a = 0; _0x23eb5a < _0x19965d.data.prize.length; _0x23eb5a++) {
        var _0x6d33b8 = _0x23eb5a * _0x22a6e4;
        _0x4efcf8.beginPath();
        _0x4efcf8.fillStyle = "rgba(0,0,0,0)";
        _0x4efcf8.arc(_0x512d84 / 2, _0x5594fe / 2, _0x19965d.data.panmian.r1, _0x6d33b8, _0x6d33b8 + _0x22a6e4, false);
        _0x4efcf8.closePath();
        _0x4efcf8.fill();
        _0x4efcf8.save();
        _0x4efcf8.fillStyle = _0x19965d.data.panmian.fontColr;
        var _0x1e0298 = _0x19965d.data.prize[_0x23eb5a].prize_name,
          _0x4d9683 = _0x19965d.data.panmian.fontLine;
        _0x4efcf8.translate(_0x512d84 / 2 + Math.cos(_0x6d33b8 + _0x22a6e4 / 2) * _0x19965d.data.panmian.textRadius, _0x5594fe / 2 + Math.sin(_0x6d33b8 + _0x22a6e4 / 2) * _0x19965d.data.panmian.textRadius);
        _0x4efcf8.rotate(_0x6d33b8 + _0x22a6e4 / 2 + Math.PI / 2);
        if (_0x1e0298.indexOf("|") > 0) {
          var _0x2e1306 = _0x1e0298.split("|");
          for (var _0x15795e = 0; _0x15795e < _0x2e1306.length; _0x15795e++) {
            _0x4efcf8.font = _0x15795e == 0 ? "" + _0x19965d.data.panmian.fontSize1 + "px Microsoft YaHei" : "" + _0x19965d.data.panmian.fontSize2 + "px Microsoft YaHei";
            if (_0x15795e == 0) {
              _0x4efcf8.fillText(_0x2e1306[_0x15795e] + " ", -_0x4efcf8.measureText(_0x2e1306[_0x15795e] + " ").width / 2, _0x15795e * _0x4d9683);
            } else {
              _0x4efcf8.fillText(_0x2e1306[_0x15795e], -_0x4efcf8.measureText(_0x2e1306[_0x15795e]).width / 2, _0x15795e * _0x4d9683 * 1.2);
            }
          }
        } else {
          _0x4efcf8.fillText(_0x1e0298, -_0x4efcf8.measureText(_0x1e0298).width / 2, 0);
        }
        if (_0x1e0298.indexOf(_0x19965d.data.prize[_0x23eb5a].prize_name) >= 0) {
          var _0x47c794 = document.getElementById("img_" + _0x23eb5a);
          _0x4efcf8.drawImage(_0x47c794, -_0x19965d.data.panmian.imgSize / 2, 20, _0x19965d.data.panmian.imgSize, _0x19965d.data.panmian.imgSize);
        }
        _0x4efcf8.restore();
      }
      _0x4efcf8.translate(_0x512d84 / 2, _0x5594fe / 2);
      _0x4efcf8.strokeStyle = _0x19965d.data.panmian.xian_color;
      _0x4efcf8.lineWidth = _0x19965d.data.panmian.xian_width;
      for (var _0x7ac0c1 = 0; _0x7ac0c1 < _0x19965d.data.prize.length; _0x7ac0c1++) {
        _0x4efcf8.beginPath();
        _0x4efcf8.rotate(_0x22a6e4);
        _0x4efcf8.moveTo(0, 0);
        _0x4efcf8.lineTo(_0x19965d.data.panmian.r1, 0);
        _0x4efcf8.stroke();
      }
    },
    cj_animation(_0x16ceb6) {
      music1.pause();
      music2.play();
      var _0x1e3f16 = this,
        _0x1d628e = _0x16ceb6 * (360 / _0x1e3f16.data.prize.length) - 360 / (_0x1e3f16.data.prize.length * 2);
      _0x1d628e < 270 ? _0x1d628e = 270 - _0x1d628e : _0x1d628e = 360 - _0x1d628e + 270;
      $("#dazhuanpan").stopRotate();
      $("#dazhuanpan").rotate({
        angle: 0,
        animateTo: _0x1d628e + 1800,
        duration: 6500,
        callback: function () {
          music2.load();
          music3.play();
          _0x1e3f16.status.zj = true;
          _0x1e3f16.status.cj = true;
        }
      });
      $(".zhuanpan-r1").rotate({
        angle: 0,
        animateTo: -(_0x1d628e + 1800),
        duration: 8000
      });
    },
    search() {
      var _0x11ddc5 = this;
      if (!_0x11ddc5.search_code) {
        return _0x11ddc5.$message({
          message: "请输入" + _0x11ddc5.data.form.cj_code_name + "后进行查询",
          type: "warning",
          customClass: "message"
        }), false;
      }
      if (_0x11ddc5.data.iframe == "yes") {
        _0x11ddc5.prize_log = [_0x11ddc5.prize_info];
        return false;
      }
      const _0x545765 = this.$loading({
        lock: true,
        text: "奖品查询中，请稍后...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.1)"
      });
      $.ajax({
        type: "POST",
        dataType: "json",
        url: "?act=common/search",
        data: {
          huodong_id: _0x11ddc5.data.id,
          cj_code: _0x11ddc5.search_code
        },
        success: function (_0x343e65) {
          _0x545765.close();
          if (_0x343e65.code == 1) {
            _0x11ddc5.$message({
              message: _0x343e65.msg,
              type: "success",
              center: true,
              customClass: "message"
            });
            _0x11ddc5.prize_log = _0x343e65.data;
          } else {
            _0x11ddc5.$message({
              message: _0x343e65.msg,
              type: "error",
              center: true,
              customClass: "message"
            });
          }
        }
      });
    },
    show_xiangqing(_0x5c675d) {
      var _0x560ab8 = this;
      if (_0x560ab8.data.iframe == "yes") {
        let _0x47e48b = [{}, {
          id: 1,
          prize_img: "index/common/images/1.png",
          prize_title: "1等奖",
          prize_name: "小米音响【线下兑奖演示】",
          cj_time: "2022-11-11",
          dj_status: "0",
          dj_code: "666888",
          dj_type: "1",
          dj_address: "联系商家兑奖",
          ewm: "iVBORw0KGgoAAAANSUhEUgAAAUoAAAFKAQMAAABB54RGAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABmklEQVRoge2ZTY7DMAiFkXqAHMlXz5FygEhMwp9xpp1dBSO9t3BT5/MKgR+ECIKgL2lj0379uZYX68J8kr86gXZB7VeAHMFD9jICtAOqQdzvnXEBNCTOm+zZE9BuqAQ28UD/AzqTD2hDVKRX3C1Nw7/rK9AilE1WJZfFBLQLOqX18pXy7qOAFqFaFiN+Es6Lt0MUuQi0Berv7kPJhnCEeKTWDGgt6g0ZW+fshmRw6CCgTVAPpxyyi03SkH/VUKDlaAJIl2kf5YmmgJajpFVS2mcHrFN7ZizQalSpe1vuOfKnoUuOKtBy1EfzkxJlX3kAbYNSusmeV5yYy52AdkIlF8n7M44mTcvnOvYAWonOWZSGk71yin3kbEiAlqP+XZm0SUsTRvaxx2L2gVai/utmP2xIDK7yhARoLTrl/ZkdjwVoH/SZd8vMarWPQOtRT0Pb9vJp9pF5GdcDLUdnEBfTaFrqK9AuKFEAMWH0F0C7oduZZ78iGTNm+wi0HBV5GnKeJtqskYB2QT31BB0p7+Kry1v7CLQChSDoC/oB8HDeOijhIvwAAAAASUVORK5CYII="
        }, {
          id: 2,
          prize_img: "index/common/images/2.png",
          prize_title: "2等奖",
          prize_name: "腾讯会员【线上兑奖演示】",
          cj_time: "2022-11-11",
          dj_status: "0",
          dj_code: "888888",
          dj_type: "2",
          dj_web: "http://www.baidu.com"
        }, {
          id: 3,
          prize_img: "index/common/images/3.png",
          prize_title: "3等奖",
          prize_name: "鼠标键盘【表单兑奖演示】",
          cj_time: "2022-11-11",
          dj_status: "0",
          dj_code: "999888",
          dj_type: "3",
          form: [{
            name: "姓名",
            val: ""
          }, {
            name: "电话",
            val: ""
          }, {
            name: "地址",
            val: ""
          }]
        }];
        _0x560ab8.prize_info = _0x47e48b[_0x5c675d];
        _0x560ab8.status.duijiang = true;
        return false;
      }
      const _0x5010d4 = _0x560ab8.$loading({
        lock: true,
        text: "数据加载中,请稍后...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.1)"
      });
      $.ajax({
        type: "POST",
        dataType: "json",
        url: "?act=common/prize_xiangqing",
        data: {
          log_id: _0x5c675d
        },
        success: function (_0x3a5c0d) {
          _0x5010d4.close();
          _0x560ab8.prize_info = _0x3a5c0d.data;
          _0x560ab8.status.duijiang = true;
        }
      });
    },
    sub_form(_0x283963) {
      if (_0x283963.form_switch == "kai") {
        for (var _0x557dad = 0; _0x557dad < _0x283963.field.length; _0x557dad++) {
          if (!_0x283963.field[_0x557dad].val) {
            this.$message({
              message: "信息填完完整后在提交！",
              type: "warning",
              customClass: "message"
            });
            return false;
          }
        }
      }
      if (_0x283963.cj_code_switch == "kai") {
        if (!_0x283963.cj_code) {
          this.$message({
            message: "请输入" + this.data.form.cj_code_name + "！",
            type: "warning",
            customClass: "message"
          });
          return false;
        }
      }
      if (this.data.iframe == "yes") {
        this.status.form = false;
        this.$message({
          message: "测试环境,随便抽，主要是看抽奖效果，非真实抽奖",
          type: "warning",
          customClass: "message"
        });
        let _0x724f5a = this.data.prize,
          _0x42a081 = _0x724f5a.length,
          _0x309641 = Math.floor(Math.random() * _0x42a081) + 1,
          _0x236da0 = _0x724f5a[_0x309641 - 1];
        _0x236da0.cj_time = "2023-01-04 18:16:03";
        _0x236da0.dj_status = "0";
        _0x236da0.id = 1;
        this.zj_prize = _0x236da0;
        this.prize_log.unshift(_0x236da0);
        this.cj_animation(_0x309641);
        return false;
      }
      const _0x9d69d8 = this.$loading({
        lock: true,
        text: "抽奖准备中，请稍后...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.1)"
      });
      _0x283963.huodong_id = this.data.id;
      _0x283963.type = this.data.type;
      _0x283963.admin_id = this.data.admin_id;
      var _0x44ec27 = this;
      $.ajax({
        type: "POST",
        dataType: "json",
        url: "?act=common/sub_form",
        data: {
          form: _0x283963
        },
        success: function (_0x4123a2) {
          _0x9d69d8.close();
          if (_0x4123a2.code == 1) {
            _0x44ec27.status.form = false;
            _0x44ec27.data.form.cj_code = "";
            _0x44ec27.status.cj = false;
            var _0x61116b = _0x4123a2.data.level;
            _0x44ec27.zj_prize = {
              id: _0x4123a2.data.id,
              prize_img: _0x4123a2.data.prize_img,
              prize_title: _0x4123a2.data.prize_title,
              prize_name: _0x4123a2.data.prize_name,
              prize_type: _0x4123a2.data.prize_type
            };
            _0x44ec27.prize_log.unshift(_0x4123a2.data);
            if (_0x4123a2.data.level == 0) {
              setTimeout(function () {
                _0x44ec27.status.zj = true;
                _0x44ec27.status.cj = true;
              }, 1000);
              return false;
            } else {
              _0x44ec27.cj_animation(_0x61116b);
            }
          } else {
            if (_0x4123a2.code == 2) {
              _0x44ec27.$message({
                message: _0x4123a2.msg,
                type: "warning",
                customClass: "message"
              });
            } else {
              _0x44ec27.status.form = false;
              _0x44ec27.$message({
                message: _0x44ec27.data.form.cj_code_name + "不存在",
                type: "warning",
                customClass: "message"
              });
            }
          }
        },
        error: function () {
          _0x44ec27.$message({
            message: "抽奖出错",
            type: "warning",
            customClass: "message"
          });
        }
      });
    },
    sub_duijiang_form(_0xbe1735) {
      var _0x5c7a79 = this;
      for (var _0x1c02e4 = 0; _0x1c02e4 < _0xbe1735.length; _0x1c02e4++) {
        if (!_0xbe1735[_0x1c02e4].val) {
          return _0x5c7a79.$message({
            message: "信息填完完整后在提交！",
            type: "warning",
            center: true,
            customClass: "message"
          }), false;
        }
      }
      if (this.data.iframe == "yes") {
        var _0x453a23 = "";
        _0xbe1735.forEach(function (_0x5f3508, _0x40c8fd) {
          _0x453a23 += _0x5f3508.name + ":" + _0x5f3508.val + "</br>";
        });
        _0x5c7a79.prize_info.dj_info = _0x453a23;
        _0x5c7a79.prize_info.dj_status = 1;
        this.$message({
          message: "模拟奖品表单提交",
          type: "warning",
          customClass: "message"
        });
        return false;
      }
      var _0x144f8e = _0x5c7a79.prize_info.id;
      const _0x3d254d = this.$loading({
        lock: true,
        text: "数据提交中,请稍后...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.1)"
      });
      $.ajax({
        type: "POST",
        dataType: "json",
        url: "?act=common/sub_duijiang",
        data: {
          log_id: _0x144f8e,
          form: _0xbe1735
        },
        success: function (_0x36529a) {
          _0x5c7a79.$message({
            message: _0x36529a.msg,
            type: "success",
            center: true,
            customClass: "message"
          });
          _0x5c7a79.prize_info.dj_status = 1;
          _0x5c7a79.prize_info.dj_info = _0x36529a.data;
        },
        error: function () {
          _0x5c7a79.$message({
            message: "提交出错",
            type: "error",
            center: true,
            customClass: "message"
          });
        }
      });
      _0x3d254d.close();
    },
    cz() {
      var _0x4e7fd2 = this,
        _0xcced40 = document.getElementById("dazhuanpan"),
        _0xfdf20e = _0xcced40.getContext("2d"),
        _0x348c01 = _0xcced40.width,
        _0x553dfa = _0xcced40.height;
      _0xfdf20e.translate(-_0x348c01 / 2, -_0x553dfa / 2);
      setTimeout(function () {
        _0x4e7fd2.draw_zhuanpan();
      }, 100);
    }
  }
});
window.onload = function () {
  vm.draw_zhuanpan();
  $("#dazhuanpan").rotate({
    angle: 0,
    animateTo: 3600,
    duration: 3600000
  });
  $("body").addClass("loaded");
  $("#loader-wrapper .load_title").remove();
  if (vm.data.kaiguan.danmu == 1) {
    danmu();
    let _0x111dac = vm.danmus.length;
    $loop_time = _0x111dac * 3 + 15;
    setInterval(function () {
      danmu();
    }, $loop_time * 1000);
  } else {
    vm.data.kaiguan.danmu == 2 && danmu2({
      line: 1,
      speed: 500,
      timer: 1500,
      up: "but_up",
      down: "but_down"
    });
  }
};