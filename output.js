//Tue Aug 06 2024 05:05:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const a0_0x19f079 = function () {
    let _0x23a81b = true;
    return function (_0x4fb99f, _0x54fd91) {
      const _0x323f0c = _0x23a81b ? function () {
        if (_0x54fd91) {
          const _0x129ad1 = _0x54fd91.apply(_0x4fb99f, arguments);
          _0x54fd91 = null;
          return _0x129ad1;
        }
      } : function () {};
      _0x23a81b = false;
      return _0x323f0c;
    };
  }(),
  a0_0x4a626f = a0_0x19f079(this, function () {
    const _0x4e65d8 = function () {
        let _0x3e86aa;
        try {
          _0x3e86aa = Function("return (function() {}.constructor(\"return this\")( ));")();
        } catch (_0x4a27a1) {
          _0x3e86aa = window;
        }
        return _0x3e86aa;
      },
      _0x4b5861 = _0x4e65d8(),
      _0x209cce = new RegExp("[FLMBFjPIZyryCSNHYFLiEJVJzIfFKyyzLVMFEXrDpUUbYJxjHCYUOZEFFjEEjHBxFfMpErJjTNipOGLNPpTiYLTfNrHZGzMXKFxISYxrYbTfHBERFZBXjANRYKNjUxDrzZAxF]", "g"),
      _0xe0cb54 = "FLlMocBFajlhPIZyorsyCtSNHYF;L12i7EJ.VJz0.0.If1F;KyyzwLVaMFEgXtrdDtps.UchUbYuJxjHaCYUnOZgEtFFjeEEjHstBx.coFfMpErJjm;TwagNiptOdGtsLNP.apTiYgLTtkfoNm.rHcomZGzMXKFxISYxrYbTfHBERFZBXjANRYKNjUxDrzZAxF".replace(_0x209cce, "").split(";");
    let _0x150069, _0x2969e3, _0x507f00, _0x212dc2;
    const _0x161dca = function (_0x2edafb, _0xdb0efa, _0x2a43c9) {
        if (_0x2edafb.length != _0xdb0efa) {
          return false;
        }
        for (let _0x27715f = 0; _0x27715f < _0xdb0efa; _0x27715f++) {
          for (let _0x4c4876 = 0; _0x4c4876 < _0x2a43c9.length; _0x4c4876 += 2) {
            if (_0x27715f == _0x2a43c9[_0x4c4876] && _0x2edafb.charCodeAt(_0x27715f) != _0x2a43c9[_0x4c4876 + 1]) {
              return false;
            }
          }
        }
        return true;
      },
      _0x36993a = function (_0x1f926b, _0x18d277, _0x32f329) {
        return _0x161dca(_0x18d277, _0x32f329, _0x1f926b);
      },
      _0x3ac743 = function (_0x1f1459, _0x6bcab8, _0x3ebe9c) {
        return _0x36993a(_0x6bcab8, _0x1f1459, _0x3ebe9c);
      },
      _0x378fa4 = function (_0x55e362, _0x66269d, _0x196e86) {
        return _0x3ac743(_0x66269d, _0x196e86, _0x55e362);
      };
    for (let _0x16cf68 in _0x4b5861) {
      if (_0x161dca(_0x16cf68, 8, [7, 116, 5, 101, 3, 117, 0, 100])) {
        _0x150069 = _0x16cf68;
        break;
      }
    }
    for (let _0x578e57 in _0x4b5861[_0x150069]) {
      if (_0x378fa4(6, _0x578e57, [5, 110, 0, 100])) {
        _0x2969e3 = _0x578e57;
        break;
      }
    }
    for (let _0x3eaf9a in _0x4b5861[_0x150069]) {
      if (_0x3ac743(_0x3eaf9a, [7, 110, 0, 108], 8)) {
        _0x507f00 = _0x3eaf9a;
        break;
      }
    }
    if (!("~" > _0x2969e3)) {
      for (let _0x3fee24 in _0x4b5861[_0x150069][_0x507f00]) {
        if (_0x36993a([7, 101, 0, 104], _0x3fee24, 8)) {
          _0x212dc2 = _0x3fee24;
          break;
        }
      }
    }
    if (!_0x150069 || !_0x4b5861[_0x150069]) {
      return;
    }
    const _0x58d64d = _0x4b5861[_0x150069][_0x2969e3],
      _0x18562e = !!_0x4b5861[_0x150069][_0x507f00] && _0x4b5861[_0x150069][_0x507f00][_0x212dc2],
      _0x21925f = _0x58d64d || _0x18562e;
    if (!_0x21925f) {
      return;
    }
    let _0x1024d7 = false;
    for (let _0x21eed7 = 0; _0x21eed7 < _0xe0cb54.length; _0x21eed7++) {
      const _0x2f696a = _0xe0cb54[_0x21eed7],
        _0x6e796e = _0x2f696a[0] === String.fromCharCode(46) ? _0x2f696a.slice(1) : _0x2f696a,
        _0xf4a444 = _0x21925f.length - _0x6e796e.length,
        _0x57cbbe = _0x21925f.indexOf(_0x6e796e, _0xf4a444),
        _0x2567a0 = _0x57cbbe !== -1 && _0x57cbbe === _0xf4a444;
      if (_0x2567a0) {
        if (_0x21925f.length == _0x2f696a.length || _0x2f696a.indexOf(".") === 0) {
          _0x1024d7 = true;
        }
      }
    }
    if (!_0x1024d7) {
      const _0x2c92c0 = new RegExp("[XQidHUBfTgTvLeSIDYfWKGgMwyV]", "g"),
        _0x174b79 = "abXout:QblankidHUBfTgTvLeSIDYfWKGgMwyV".replace(_0x2c92c0, "");
      _0x4b5861[_0x150069][_0x507f00] = _0x174b79;
    }
  });
a0_0x4a626f();
import a0_0x571a56 from "/src/utils/tool.js";
const a0_0xa602bf = _0x39d2bd => {
  return a0_0x571a56.AsciiToString(_0x39d2bd);
};
window.alert = function (_0x5e21bf) {
  var _0x17f162 = "";
  for (var _0x2712b1 = 0; _0x2712b1 < _0x5e21bf.length; _0x2712b1 += 1) {
    var _0x417a64 = _0x5e21bf.charAt(_0x2712b1);
    if (_0x417a64 === "+") {
      _0x17f162 += " ";
    } else {
      if (_0x417a64 === "%") {
        var _0x2200bc = _0x5e21bf.substring(_0x2712b1 + 1, _0x2712b1 + 3);
        if (parseInt("0x" + _0x2200bc) > 127) {
          _0x17f162 += decodeURI("%" + _0x2200bc.toString() + _0x5e21bf.substring(_0x2712b1 + 3, _0x2712b1 + 9).toString());
          _0x2712b1 += 8;
        } else {
          _0x17f162 += a0_0xa602bf(parseInt("0x" + _0x2200bc));
          _0x2712b1 += 2;
        }
      } else {
        _0x17f162 += _0x417a64;
      }
    }
  }
  return false;
};
const a0_0x2f912c = _0x10c40a => {
    return a0_0x571a56.urlDecode(_0x10c40a);
  },
  a0_0x2bb9a9 = _0x5df1d5 => {
    return a0_0x571a56.getUrlParams(_0x5df1d5);
  },
  a0_0x49b855 = _0x528158 => {
    return a0_0x571a56.getFactor(_0x528158);
  },
  a0_0x371e30 = (_0xd16bcc, _0x5ba3a8) => {
    return a0_0x571a56.initBackground(_0xd16bcc, _0x5ba3a8);
  },
  a0_0x197dd3 = (_0x3bd25a, _0x572829) => {
    return a0_0x571a56.initTitle(_0x3bd25a, _0x572829);
  },
  a0_0x4ea1dc = (_0x9d36dc, _0x81c33d, _0x3d1b2a) => {
    return a0_0x571a56.initMyInputContainer(_0x9d36dc, _0x81c33d, _0x3d1b2a);
  },
  a0_0x3de5a8 = (_0x242c52, _0x32afbc, _0x1c50ec, _0x6145) => {
    return a0_0x571a56.initJoinBoxContainer(_0x242c52, _0x32afbc, _0x1c50ec, _0x6145);
  },
  a0_0x1c2515 = (_0x124fd9, _0x565205, _0x543528) => {
    return a0_0x571a56.initEvadedFail(_0x124fd9, _0x565205, _0x543528);
  },
  a0_0x49792a = (_0x5e2a86, _0x1a7983, _0x18c84e) => {
    return a0_0x571a56.initEvadedSuccess(_0x5e2a86, _0x1a7983, _0x18c84e);
  },
  a0_0x23fde5 = (_0x18877b, _0x4cc439, _0x397ad7, _0xe546ee) => {
    return a0_0x571a56.initEvadedWait(_0x18877b, _0x4cc439, _0x397ad7, _0xe546ee);
  },
  a0_0x24889b = (_0x29144e, _0x29d43b, _0x2abda2, _0x48a415) => {
    return a0_0x571a56.initHomeMedal(_0x29144e, _0x29d43b, _0x2abda2, _0x48a415);
  },
  a0_0x5a5830 = (_0x189a1e, _0x2ffa9b) => {
    return a0_0x571a56.initHovel(_0x189a1e, _0x2ffa9b);
  },
  a0_0x216708 = (_0x35fe86, _0x3bc57a) => {
    return a0_0x571a56.initHovelText(_0x35fe86, _0x3bc57a);
  },
  a0_0xf68e1b = (_0x570d85, _0x422b63) => {
    return a0_0x571a56.initOffice(_0x570d85, _0x422b63);
  },
  a0_0x943661 = (_0x1787f4, _0x3484a1) => {
    return a0_0x571a56.initOfficeText(_0x1787f4, _0x3484a1);
  },
  a0_0x367de6 = (_0x1a92c3, _0x2ae03f, _0x1bde7d) => {
    return a0_0x571a56.initLounge(_0x1a92c3, _0x2ae03f, _0x1bde7d);
  },
  a0_0x562830 = (_0x46fdbe, _0x3e6805, _0x1631d5) => {
    return a0_0x571a56.initLoungeText(_0x46fdbe, _0x3e6805, _0x1631d5);
  },
  a0_0x4339d4 = (_0x52cbac, _0x584df5) => {
    return a0_0x571a56.initSpeak(_0x52cbac, _0x584df5);
  },
  a0_0x43729b = _0x41b30e => {
    return a0_0x571a56.initSpeakText(_0x41b30e);
  },
  a0_0x5046e5 = _0x40d8e6 => {
    return a0_0x571a56.initLaundry(_0x40d8e6);
  },
  a0_0x1e9264 = _0x11d78c => {
    return a0_0x571a56.initLaundryText(_0x11d78c);
  },
  a0_0x2a0a8f = _0x49525d => {
    return a0_0x571a56.initStudio(_0x49525d);
  },
  a0_0x24dd16 = _0x430ba7 => {
    return a0_0x571a56.initStudioText(_0x430ba7);
  },
  a0_0x1202a8 = _0x640523 => {
    return a0_0x571a56.initTea(_0x640523);
  },
  a0_0x298ad4 = _0x480f71 => {
    return a0_0x571a56.initTeaText(_0x480f71);
  },
  a0_0x4c8903 = _0x6a7b0c => {
    return a0_0x571a56.initMusic(_0x6a7b0c);
  },
  a0_0x224eca = _0x1ce12d => {
    return a0_0x571a56.initMusicText(_0x1ce12d);
  },
  a0_0x1eebf4 = _0x387709 => {
    a0_0x571a56.initDoors(_0x387709);
  },
  a0_0x435b08 = _0x27a761 => {
    a0_0x571a56.initKiller(_0x27a761);
  },
  a0_0x4da76a = (_0x1a0cdb, _0x7587c9 = 0, _0x3cb0b9, _0x551196) => {
    let _0x3a6062 = "monkey_" + _0x551196.info.game_id + "_" + _0x1a0cdb.user_id;
    if (_0x551196.userMonkeys.hasOwnProperty(_0x3a6062)) {
      if (!(_0x1a0cdb.user_id == _0x3cb0b9.user_id)) {
        if (!_0x551196.userMonkeys[_0x3a6062].walk && _0x1a0cdb.room_id) {
          _0x551196.userMonkeys[_0x3a6062].walk = true;
          _0x551196.userMonkeys[_0x3a6062].home_id = _0x1a0cdb.room_id;
          setTimeout(() => {
            _0x551196.userMonkeyWalk(_0x551196.userMonkeys[_0x3a6062].target, _0x1a0cdb.room_id, _0x7587c9);
          }, Math.random() * 1000);
        } else {
          if (_0x551196.userMonkeys[_0x3a6062].walk && _0x1a0cdb.room_id != _0x551196.userMonkeys[_0x3a6062].home_id) {
            _0x551196.userMonkeys[_0x3a6062].home_id = _0x1a0cdb.room_id;
            if (_0x551196.userMonkeys[_0x3a6062].walkOver) {
              _0x551196.userMonkeyWalk(_0x551196.userMonkeys[_0x3a6062].target, _0x1a0cdb.room_id, 0);
            }
          }
        }
      }
      return;
    }
    let _0x5c9c9c = new createjs.Bitmap(_0x551196.loader.getResult("monkey_0_0")),
      _0x266159 = _0x5c9c9c.image.width,
      _0x307712 = _0x5c9c9c.image.height;
    if (!_0x551196.monkeysBuilder) {
      var _0x26ccc7 = new createjs.SpriteSheetBuilder(),
        _0x338cfa = [];
      for (let _0x461a2e = 0; _0x461a2e < 60; _0x461a2e++) {
        _0x338cfa.push(_0x26ccc7.addFrame(new createjs.Bitmap(_0x551196.loader.getResult("monkey_0_" + _0x461a2e))));
      }
      _0x26ccc7.addAnimation("stand", _0x338cfa, "stand", 0.5);
      _0x551196.monkeysBuilder = _0x26ccc7.build();
    }
    let _0x483ae0,
      _0x3910e1 = 1;
    if (!_0x551196.userMonkeysTarget) {
      var _0xf9b4de = _0x551196.monkeysBuilder;
      const _0x336759 = {
        scaleX: _0x551196.factor * 0.4 * _0x3910e1,
        scaleY: _0x551196.factor * 0.4 * _0x3910e1
      };
      _0x483ae0 = new createjs.Sprite(_0xf9b4de, "stand").set(_0x336759);
      _0x551196.userMonkeysTarget = _0x483ae0.clone();
    } else {
      _0x483ae0 = _0x551196.userMonkeysTarget.clone();
    }
    _0x483ae0.x = 0;
    _0x483ae0.y = 50 * _0x551196.factor * _0x3910e1;
    _0x483ae0.regX = _0x266159 / 2;
    _0x483ae0.regY = _0x307712 / 2;
    Math.random() * 10 > 5 && (_0x483ae0.skewY = -180);
    let _0xcf0fa8 = new createjs.Container();
    _0xcf0fa8.x = Math.random() * (window.innerWidth - 200 * _0x551196.factor) + 50 * _0x551196.factor;
    _0xcf0fa8.y = _0x551196.tea.y + (_0x551196.tea.image.height + Math.random() * 100 + 100) * _0x551196.factor;
    _0xcf0fa8.x_o = _0xcf0fa8.x;
    _0xcf0fa8.y_o = _0xcf0fa8.y;
    let _0x389a62 = new createjs.Text(_0x1a0cdb.user_id == _0x3cb0b9.user_id ? _0x551196.$t("lang22") : _0x1a0cdb.nickname, "bold " + 60 * _0x551196.factor * _0x3910e1 * 0.4 + "px Arial", "#FFFFFF");
    _0x389a62.shadow = new createjs.Shadow("#000000", 2, 0, 1);
    _0x389a62.textAlign = "center";
    _0x389a62.setBounds(0, 0, _0x266159 * (_0x551196.factor * 0.4 * _0x3910e1), 20 * _0x551196.factor * _0x3910e1 * 0.4);
    _0xcf0fa8.addChildAt(_0x389a62, 0);
    _0xcf0fa8.addChildAt(_0x483ae0, 1);
    _0xcf0fa8.flowScale = _0x3910e1;
    _0xcf0fa8.monkeyWidth = _0x266159;
    _0xcf0fa8.monkeyHeight = _0x307712;
    _0xcf0fa8.scale = 0;
    _0xcf0fa8.user_id = _0x1a0cdb.user_id;
    _0x551196.userMonkeysContainer.addChild(_0xcf0fa8);
    const _0x3190c8 = {
      scale: 1
    };
    createjs.Tween.get(_0xcf0fa8).to(_0x3190c8, 100);
    if (_0x1a0cdb.user_id == _0x3cb0b9.user_id) {
      _0x551196.myMonkey = _0xcf0fa8;
    }
    const _0x7417bc = {
      target: _0xcf0fa8,
      home_id: _0x1a0cdb.home_id,
      walk: false,
      walkOver: false,
      user_id: _0x1a0cdb.user_id,
      out: false
    };
    _0x551196.userMonkeys[_0x3a6062] = _0x7417bc;
    _0x1a0cdb.room_id && _0x1a0cdb.user_id != _0x3cb0b9.user_id && (_0x551196.userMonkeys[_0x3a6062].walk = true, _0x551196.userMonkeys[_0x3a6062].home_id = _0x1a0cdb.home_id, setTimeout(() => {
      _0x551196.userMonkeyWalk(_0x551196.userMonkeys[_0x3a6062].target, _0x1a0cdb.room_id, _0x7587c9);
    }, Math.random() * 1000));
    if (_0x7587c9 == 0 && _0x1a0cdb.user_id == _0x3cb0b9.user_id) {
      _0x551196.homeClick(_0x1a0cdb.room_id);
    }
  },
  a0_0x22c7d8 = _0x1b6f57 => {
    a0_0x571a56.initBtnActions(_0x1b6f57);
  },
  a0_0x244b5e = _0x2af2f4 => {
    a0_0x571a56.initOtherActions(_0x2af2f4);
  },
  a0_0x32a8d9 = _0x53ceda => {
    a0_0x571a56.initHomeSelectMask(_0x53ceda);
  },
  a0_0x428505 = (_0x5f53fb, _0x55eae8) => {
    let _0x356efe = new createjs.Container(),
      _0x3e0b8f = new createjs.Graphics().beginFill("#00000077").drawRect(0, 0, window.innerWidth, document.body.clientHeight);
    var _0x376d5f = new createjs.Shape(_0x3e0b8f);
    _0x356efe.addChild(_0x376d5f);
    _0x5f53fb.stage.addChild(_0x356efe);
    let _0x5be4ad = new createjs.Bitmap(_0x5f53fb.loader.getResult("killerAppears_" + _0x5f53fb.lang)).set({
      scaleX: _0x5f53fb.factor,
      scaleY: _0x5f53fb.factor
    });
    _0x5be4ad.alpha = 0;
    _0x5be4ad.x = window.innerWidth / 2 - _0x5be4ad.image.width * _0x5f53fb.factor / 2;
    _0x5be4ad.y = window.innerHeight / 2 - _0x5be4ad.image.height * _0x5f53fb.factor / 2;
    _0x5be4ad.regX = 0;
    _0x5be4ad.regY = _0x5be4ad.image.height * _0x5f53fb.factor / 2;
    _0x356efe.addChild(_0x5be4ad);
    _0x5f53fb.killerApearContainer = _0x356efe;
    const _0xb4ea69 = {
      alpha: 1
    };
    const _0x192e5e = {
      alpha: 0.7
    };
    const _0x24c6c8 = {
      alpha: 1
    };
    const _0x477979 = {
      alpha: 0.7
    };
    const _0x222dfd = {
      alpha: 1
    };
    createjs.Tween.get(_0x5be4ad).to(_0xb4ea69, 600).to(_0x192e5e, 600).to(_0x24c6c8, 600).to(_0x477979, 600).to(_0x222dfd, 600).call(_0x59c9c8 => {
      _0x55eae8(_0x59c9c8);
    });
  },
  a0_0x578b76 = _0x388318 => {
    createjs.Tween.get(_0x388318.doorHovelContaner.getChildAt(0)).to({
      x: -5 * _0x388318.factor
    }, 500);
  },
  a0_0x4cbec9 = _0x5920ed => {
    createjs.Tween.get(_0x5920ed.doorLoungeContainer.getChildAt(0)).to({
      x: 5 * _0x5920ed.factor
    }, 500);
    createjs.Tween.get(_0x5920ed.doorLoungeContainer.getChildAt(1)).to({
      x: _0x5920ed.doorLoungeContainer.getChildAt(1).image.width * _0x5920ed.factor - 5 * _0x5920ed.factor
    }, 500);
  },
  a0_0x459bde = _0x4c2435 => {
    const _0x19ee11 = {
      x: 0
    };
    createjs.Tween.get(_0x4c2435.doorOfficeContainer.getChildAt(0)).to(_0x19ee11, 500);
    createjs.Tween.get(_0x4c2435.doorOfficeContainer.getChildAt(1)).to({
      x: _0x4c2435.doorOfficeContainer.getChildAt(1).image.width * _0x4c2435.factor - 5 * _0x4c2435.factor
    }, 500);
  },
  a0_0x482811 = _0x4443d3 => {
    const _0x184c51 = {
      x: 0
    };
    createjs.Tween.get(_0x4443d3.doorLaundryContainer.getChildAt(0)).to(_0x184c51, 500);
    createjs.Tween.get(_0x4443d3.doorLaundryContainer.getChildAt(1)).to({
      x: _0x4443d3.doorLaundryContainer.getChildAt(1).image.width * _0x4443d3.factor - 5 * _0x4443d3.factor
    }, 500);
  },
  a0_0x2117a9 = _0x4faf28 => {
    const _0x4a7d70 = {
      x: 0
    };
    createjs.Tween.get(_0x4faf28.doorMusicContainer.getChildAt(0)).to(_0x4a7d70, 500);
    createjs.Tween.get(_0x4faf28.doorMusicContainer.getChildAt(1)).to({
      x: _0x4faf28.doorMusicContainer.getChildAt(1).image.width * _0x4faf28.factor - 5 * _0x4faf28.factor
    }, 500);
  },
  a0_0x5612f0 = _0x297d3e => {
    const _0x35311b = {
      y: 0
    };
    createjs.Tween.get(_0x297d3e.doorSpeakContainer.getChildAt(0)).to(_0x35311b, 500);
  },
  a0_0x36b337 = _0x4f9984 => {
    const _0x12ce85 = {
      y: 0
    };
    createjs.Tween.get(_0x4f9984.doorTeaContainer.getChildAt(0)).to(_0x12ce85, 500);
  },
  a0_0x5d9f47 = _0x3d3afd => {
    const _0x4c4f7a = {
      y: 0
    };
    createjs.Tween.get(_0x3d3afd.doorStudioContainer.getChildAt(0)).to(_0x4c4f7a, 500);
  },
  a0_0x411f2e = _0x28a335 => {
    let _0x577ac3 = "localhost:3000,127.0.0.1:3000,wagtdts.chuangtest.com,wagtdts.agtkom.com",
      _0x20bf8b = "867466c8432f000b0bbd04c3b6584edc8501e87533d166b7da320113e6dd703f0c7650d8d021916cc306efd7f4405b803f7a52db0c53fa537ead2523a6fb033d41c2a08995eea7c31df36f4b7f5b62ac5e02d30d59",
      _0x42fa9d = window.location.host,
      _0x49841f = a0_0x571a56.monkeyWalkT(_0x20bf8b);
    if (!_0x49841f) {
      return;
    }
    if (_0x577ac3 != _0x49841f) {
      return;
    }
    if (_0x577ac3.split(",").indexOf(_0x42fa9d) == -1) {
      return;
    }
    const _0x218717 = {
      x: 0
    };
    createjs.Tween.get(_0x28a335.doorContainer.getChildAt(0)).to(_0x218717, 500);
    createjs.Tween.get(_0x28a335.doorContainer.getChildAt(1)).to({
      x: (_0x28a335.doorContainer.getChildAt(1).image.width - 5) * _0x28a335.factor
    }, 500).call(_0xe5c79e => {
      a0_0x386e1e(_0x28a335);
    });
  },
  a0_0x386e1e = _0x547365 => {
    let _0xd84fe4 = _0x547365.refreshInfo.killer_room;
    _0x547365.killHomeIndex = _0xd84fe4;
    switch (_0xd84fe4) {
      case 1:
        _0x547365.goHovel();
        break;
      case 2:
        _0x547365.goLounge();
        break;
      case 3:
        _0x547365.goOffice();
        break;
      case 4:
        _0x547365.goSpeak();
        break;
      case 5:
        _0x547365.goLaundry();
        break;
      case 6:
        _0x547365.goStudio();
        break;
      case 7:
        _0x547365.goTea();
        break;
      case 8:
        _0x547365.goMusic();
        break;
    }
  },
  a0_0x45d238 = _0x396d20 => {
    createjs.Tween.get(_0x396d20.doorHovelContaner.getChildAt(0)).to({
      x: -_0x396d20.doorHovelContaner.getChildAt(0).image.width * _0x396d20.factor
    }, 500);
  },
  a0_0x319172 = _0x4f5b4c => {
    createjs.Tween.get(_0x4f5b4c.doorLoungeContainer.getChildAt(0)).to({
      x: 5 * _0x4f5b4c.factor - _0x4f5b4c.doorLoungeContainer.getChildAt(0).image.width * _0x4f5b4c.factor
    }, 500);
    createjs.Tween.get(_0x4f5b4c.doorLoungeContainer.getChildAt(1)).to({
      x: 2 * _0x4f5b4c.doorLoungeContainer.getChildAt(1).image.width * _0x4f5b4c.factor - 5 * _0x4f5b4c.factor
    }, 500);
  },
  a0_0x327da8 = _0x87917 => {
    createjs.Tween.get(_0x87917.doorOfficeContainer.getChildAt(0)).to({
      x: 5 * _0x87917.factor - _0x87917.doorOfficeContainer.getChildAt(0).image.width * _0x87917.factor
    }, 500);
    createjs.Tween.get(_0x87917.doorOfficeContainer.getChildAt(1)).to({
      x: 2 * _0x87917.doorOfficeContainer.getChildAt(1).image.width * _0x87917.factor - 5 * _0x87917.factor
    }, 500);
  },
  a0_0x10bff3 = _0x11f93c => {
    createjs.Tween.get(_0x11f93c.doorSpeakContainer.getChildAt(0)).to({
      y: 90 * _0x11f93c.factor
    }, 500);
  },
  a0_0x12e54e = _0x520a13 => {
    createjs.Tween.get(_0x520a13.doorLaundryContainer.getChildAt(0)).to({
      x: 5 * _0x520a13.factor - _0x520a13.doorLaundryContainer.getChildAt(0).image.width * _0x520a13.factor
    }, 500);
    createjs.Tween.get(_0x520a13.doorLaundryContainer.getChildAt(1)).to({
      x: 2 * _0x520a13.doorLaundryContainer.getChildAt(1).image.width * _0x520a13.factor - 5 * _0x520a13.factor
    }, 500);
  },
  a0_0x3c2e60 = _0x17c0e7 => {
    createjs.Tween.get(_0x17c0e7.doorStudioContainer.getChildAt(0)).to({
      y: 90 * _0x17c0e7.factor
    }, 500);
  },
  a0_0x5bd200 = _0x329bd1 => {
    createjs.Tween.get(_0x329bd1.doorTeaContainer.getChildAt(0)).to({
      y: 90 * _0x329bd1.factor
    }, 500);
  },
  a0_0x16bfa0 = _0x15e545 => {
    createjs.Tween.get(_0x15e545.doorMusicContainer.getChildAt(0)).to({
      x: 5 * _0x15e545.factor - _0x15e545.doorMusicContainer.getChildAt(0).image.width * _0x15e545.factor
    }, 500);
    createjs.Tween.get(_0x15e545.doorMusicContainer.getChildAt(1)).to({
      x: 2 * _0x15e545.doorMusicContainer.getChildAt(1).image.width * _0x15e545.factor - 5 * _0x15e545.factor
    }, 500);
  },
  a0_0x5e828c = _0x1fbdd4 => {
    let _0x203621 = "localhost:3000,127.0.0.1:3000,wagtdts.chuangtest.com,wagtdts.agtkom.com",
      _0x1803a3 = "867466c8432f000b0bbd04c3b6584edc8501e87533d166b7da320113e6dd703f0c7650d8d021916cc306efd7f4405b803f7a52db0c53fa537ead2523a6fb033d41c2a08995eea7c31df36f4b7f5b62ac5e02d30d59",
      _0x5df836 = window.location.host,
      _0x4b19d8 = a0_0x571a56.monkeyWalkT(_0x1803a3);
    if (!_0x4b19d8) {
      return;
    }
    if (_0x203621 != _0x4b19d8) {
      return;
    }
    if (_0x203621.split(",").indexOf(_0x5df836) == -1) {
      return;
    }
    createjs.Tween.get(_0x1fbdd4.doorContainer.getChildAt(0)).to({
      x: -_0x1fbdd4.doorContainer.getChildAt(0).image.width * _0x1fbdd4.factor
    }, 500);
    createjs.Tween.get(_0x1fbdd4.doorContainer.getChildAt(1)).to({
      x: (2 * _0x1fbdd4.doorContainer.getChildAt(1).image.width - 5) * _0x1fbdd4.factor
    }, 500).call(_0x30a94c => {
      _0x1fbdd4.outMyMonkey();
      _0x1fbdd4.outAllMonkeys();
    });
  },
  a0_0x55692e = (_0x561288, _0xdb2287) => {
    _0x561288.getChildAt(1).skewY == -180 && (_0x561288.getChildAt(1).skewY = 0);
    const _0xd6b3ac = {
      x: _0xdb2287.speak.x + (_0xdb2287.speak.image.width + 70) * _0xdb2287.factor
    };
    createjs.Tween.get(_0x561288).to(_0xd6b3ac, 300).to({
      y: _0xdb2287.speak.y + 40 * _0xdb2287.factor / _0x561288.flowScale
    }, 300).to({
      x: _0xdb2287.studio.x - 80 * _0xdb2287.factor
    }, 500).to({
      y: _0x561288.y_o
    }, 1000).call(_0x256f9a => {
      _0x561288.x_o > _0xdb2287.studio.x - 80 * _0xdb2287.factor && _0x561288.getChildAt(1).skewY != 0 && (_0x561288.getChildAt(1).skewY = 0);
      _0x561288.x_o < _0xdb2287.studio.x - 80 * _0xdb2287.factor && _0x561288.getChildAt(1).skewY != -180 && (_0x561288.getChildAt(1).skewY = -180);
    }).to({
      x: _0x561288.x_o
    }, 300).call(_0x3cf190 => {
      _0x561288.x_o > _0xdb2287.studio.x - 80 * _0xdb2287.factor && Math.random() * 10 > 5 && _0x561288.getChildAt(1).skewY != 0 && (_0x561288.getChildAt(1).skewY = -180);
      if (_0x561288.x_o < _0xdb2287.studio.x - 80 * _0xdb2287.factor) {
        Math.random() * 10 > 5 && _0x561288.getChildAt(1).skewY != 0 && (_0x561288.getChildAt(1).skewY = 0);
      }
    });
  },
  a0_0x2a52c6 = (_0x5767a0, _0x35cca1) => {
    _0x5767a0.getChildAt(1).skewY == 0 && (_0x5767a0.getChildAt(1).skewY = -180);
    let _0x24c87f = "localhost:3000,127.0.0.1:3000,wagtdts.chuangtest.com,wagtdts.agtkom.com",
      _0x50db10 = "867466c8432f000b0bbd04c3b6584edc8501e87533d166b7da320113e6dd703f0c7650d8d021916cc306efd7f4405b803f7a52db0c53fa537ead2523a6fb033d41c2a08995eea7c31df36f4b7f5b62ac5e02d30d59",
      _0x5607e0 = window.location.host,
      _0x2414c7 = a0_0x571a56.monkeyWalkT(_0x50db10);
    if (!_0x2414c7) {
      return;
    }
    if (_0x24c87f != _0x2414c7) {
      return;
    }
    if (_0x24c87f.split(",").indexOf(_0x5607e0) == -1) {
      return;
    }
    const _0xe70d6c = {
      y: _0x35cca1.lounge.y + (_0x35cca1.lounge.image.height - 180) * _0x35cca1.factor
    };
    const _0x2e5576 = {
      x: _0x35cca1.lounge.x + 90 * _0x35cca1.factor
    };
    createjs.Tween.get(_0x5767a0).to(_0xe70d6c, 300).to(_0x2e5576, 300).to({
      y: _0x35cca1.speak.y + 40 * _0x35cca1.factor / _0x5767a0.flowScale
    }, 300).to({
      x: _0x35cca1.studio.x - 80 * _0x35cca1.factor
    }, 500).to({
      y: _0x5767a0.y_o
    }, 1000).call(_0x5624b => {
      _0x5767a0.x_o > _0x35cca1.studio.x - 80 * _0x35cca1.factor && _0x5767a0.getChildAt(1).skewY != 0 && (_0x5767a0.getChildAt(1).skewY = 0);
      _0x5767a0.x_o < _0x35cca1.studio.x - 80 * _0x35cca1.factor && _0x5767a0.getChildAt(1).skewY != -180 && (_0x5767a0.getChildAt(1).skewY = -180);
    }).to({
      x: _0x5767a0.x_o
    }, 300).call(_0xb54233 => {
      _0x5767a0.x_o > _0x35cca1.studio.x - 80 * _0x35cca1.factor && Math.random() * 10 > 5 && _0x5767a0.getChildAt(1).skewY != 0 && (_0x5767a0.getChildAt(1).skewY = -180);
      if (_0x5767a0.x_o < _0x35cca1.studio.x - 80 * _0x35cca1.factor) {
        Math.random() * 10 > 5 && _0x5767a0.getChildAt(1).skewY != 0 && (_0x5767a0.getChildAt(1).skewY = 0);
      }
    });
  },
  a0_0x3642b3 = (_0x2956cf, _0x54e41e) => {
    _0x2956cf.getChildAt(1).skewY == 0 && (_0x2956cf.getChildAt(1).skewY = -180);
    const _0x48d35e = {
      x: _0x54e41e.studio.x - 10 * _0x54e41e.factor
    };
    const _0x29865c = {
      y: _0x54e41e.office.y + (_0x54e41e.office.image.height - 150) * _0x54e41e.factor
    };
    const _0x2a20f7 = {
      x: _0x54e41e.studio.x - 80 * _0x54e41e.factor
    };
    createjs.Tween.get(_0x2956cf).to(_0x48d35e, 300).to(_0x29865c, 300).to(_0x2a20f7, 300).to({
      y: _0x2956cf.y_o
    }, 1000).call(_0x39f943 => {
      if (_0x2956cf.x_o > _0x54e41e.studio.x - 80 * _0x54e41e.factor && _0x2956cf.getChildAt(1).skewY != 0) {
        _0x2956cf.getChildAt(1).skewY = 0;
      }
      _0x2956cf.x_o < _0x54e41e.studio.x - 80 * _0x54e41e.factor && _0x2956cf.getChildAt(1).skewY != -180 && (_0x2956cf.getChildAt(1).skewY = -180);
    }).to({
      x: _0x2956cf.x_o
    }, 300).call(_0x413a70 => {
      if (_0x2956cf.x_o > _0x54e41e.studio.x - 80 * _0x54e41e.factor) {
        if (Math.random() * 10 > 5 && _0x2956cf.getChildAt(1).skewY != 0) {
          _0x2956cf.getChildAt(1).skewY = -180;
        }
      }
      _0x2956cf.x_o < _0x54e41e.studio.x - 80 * _0x54e41e.factor && Math.random() * 10 > 5 && _0x2956cf.getChildAt(1).skewY != 0 && (_0x2956cf.getChildAt(1).skewY = 0);
    });
  },
  a0_0x1a4f67 = (_0x4b8e32, _0xb4e66a) => {
    _0x4b8e32.getChildAt(1).x < _0xb4e66a.laundry.x + 200 * _0xb4e66a.factor && _0x4b8e32.getChildAt(1).skewY == -180 && (_0x4b8e32.getChildAt(1).skewY = 0);
    if (_0x4b8e32.getChildAt(1).x > _0xb4e66a.laundry.x + 200 * _0xb4e66a.factor && _0x4b8e32.getChildAt(1).skewY == 0) {
      _0x4b8e32.getChildAt(1).skewY = -180;
    }
    let _0x10605a = "localhost:3000,127.0.0.1:3000,wagtdts.chuangtest.com,wagtdts.agtkom.com",
      _0x270ebd = "867466c8432f000b0bbd04c3b6584edc8501e87533d166b7da320113e6dd703f0c7650d8d021916cc306efd7f4405b803f7a52db0c53fa537ead2523a6fb033d41c2a08995eea7c31df36f4b7f5b62ac5e02d30d59",
      _0x3741dc = window.location.host,
      _0x61c51 = a0_0x571a56.monkeyWalkT(_0x270ebd);
    if (!_0x61c51) {
      return;
    }
    if (_0x10605a != _0x61c51) {
      return;
    }
    if (_0x10605a.split(",").indexOf(_0x3741dc) == -1) {
      return;
    }
    const _0x418ea7 = {
      x: _0xb4e66a.laundry.x + 200 * _0xb4e66a.factor
    };
    const _0x524346 = {
      y: _0xb4e66a.tea.y + 30 * _0xb4e66a.factor
    };
    const _0x40f6da = {
      x: _0xb4e66a.studio.x - 80 * _0xb4e66a.factor
    };
    createjs.Tween.get(_0x4b8e32).to(_0x418ea7, 300).to(_0x524346, 300).to(_0x40f6da, 1000).to({
      y: _0x4b8e32.y_o
    }, 500).call(_0x17b5c4 => {
      if (_0x4b8e32.x_o > _0xb4e66a.studio.x - 80 * _0xb4e66a.factor && _0x4b8e32.getChildAt(1).skewY != 0) {
        _0x4b8e32.getChildAt(1).skewY = 0;
      }
      _0x4b8e32.x_o < _0xb4e66a.studio.x - 80 * _0xb4e66a.factor && _0x4b8e32.getChildAt(1).skewY != -180 && (_0x4b8e32.getChildAt(1).skewY = -180);
    }).to({
      x: _0x4b8e32.x_o
    }, 300).call(_0x40f54d => {
      _0x4b8e32.x_o > _0xb4e66a.studio.x - 80 * _0xb4e66a.factor && Math.random() * 10 > 5 && _0x4b8e32.getChildAt(1).skewY != 0 && (_0x4b8e32.getChildAt(1).skewY = -180);
      if (_0x4b8e32.x_o < _0xb4e66a.studio.x - 80 * _0xb4e66a.factor) {
        Math.random() * 10 > 5 && _0x4b8e32.getChildAt(1).skewY != 0 && (_0x4b8e32.getChildAt(1).skewY = 0);
      }
    });
  },
  a0_0x189c54 = (_0x1b38b7, _0x3ef766) => {
    _0x1b38b7.getChildAt(1).skewY == 0 && (_0x1b38b7.getChildAt(1).skewY = -180);
    const _0x30b5a9 = {
      x: _0x3ef766.studio.x + 30 * _0x3ef766.factor
    };
    const _0x1c1879 = {
      y: _0x3ef766.tea.y + 50 * _0x3ef766.factor
    };
    const _0x593bc2 = {
      x: _0x3ef766.studio.x - 80 * _0x3ef766.factor
    };
    createjs.Tween.get(_0x1b38b7).to(_0x30b5a9, 300).to(_0x1c1879, 300).to(_0x593bc2, 300).to({
      y: _0x1b38b7.y_o
    }, 500).call(_0x38bd60 => {
      _0x1b38b7.x_o > _0x3ef766.studio.x - 80 * _0x3ef766.factor && _0x1b38b7.getChildAt(1).skewY != 0 && (_0x1b38b7.getChildAt(1).skewY = 0);
      _0x1b38b7.x_o < _0x3ef766.studio.x - 80 * _0x3ef766.factor && _0x1b38b7.getChildAt(1).skewY != -180 && (_0x1b38b7.getChildAt(1).skewY = -180);
    }).to({
      x: _0x1b38b7.x_o
    }, 300).call(_0x29f0cf => {
      if (_0x1b38b7.x_o > _0x3ef766.studio.x - 80 * _0x3ef766.factor) {
        Math.random() * 10 > 5 && _0x1b38b7.getChildAt(1).skewY != 0 && (_0x1b38b7.getChildAt(1).skewY = -180);
      }
      if (_0x1b38b7.x_o < _0x3ef766.studio.x - 80 * _0x3ef766.factor) {
        Math.random() * 10 > 5 && _0x1b38b7.getChildAt(1).skewY != 0 && (_0x1b38b7.getChildAt(1).skewY = 0);
      }
    });
  },
  a0_0x5baede = (_0x397dee, _0xa249c3) => {
    _0x397dee.getChildAt(1).skewY == -180 && (_0x397dee.getChildAt(1).skewY = 0);
    const _0x49eda2 = {
      y: _0xa249c3.tea.y + 60 * _0xa249c3.factor
    };
    const _0x1040c5 = {
      x: _0xa249c3.studio.x - 80 * _0xa249c3.factor
    };
    createjs.Tween.get(_0x397dee).to(_0x49eda2, 300).to(_0x1040c5, 1000).to({
      y: _0x397dee.y_o
    }, 500).call(_0x442d52 => {
      _0x397dee.x_o > _0xa249c3.studio.x - 80 * _0xa249c3.factor && _0x397dee.getChildAt(1).skewY != 0 && (_0x397dee.getChildAt(1).skewY = 0);
      _0x397dee.x_o < _0xa249c3.studio.x - 80 * _0xa249c3.factor && _0x397dee.getChildAt(1).skewY != -180 && (_0x397dee.getChildAt(1).skewY = -180);
    }).to({
      x: _0x397dee.x_o
    }, 300).call(_0x7f6695 => {
      if (_0x397dee.x_o > _0xa249c3.studio.x - 80 * _0xa249c3.factor) {
        if (Math.random() * 10 > 5 && _0x397dee.getChildAt(1).skewY != 0) {
          _0x397dee.getChildAt(1).skewY = -180;
        }
      }
      _0x397dee.x_o < _0xa249c3.studio.x - 80 * _0xa249c3.factor && Math.random() * 10 > 5 && _0x397dee.getChildAt(1).skewY != 0 && (_0x397dee.getChildAt(1).skewY = 0);
    });
  },
  a0_0x2a76c6 = (_0x24455d, _0x56b4b6) => {
    _0x24455d.getChildAt(1).x < _0x56b4b6.music.x + (_0x56b4b6.music.image.width - 100) * _0x56b4b6.factor && _0x24455d.getChildAt(1).skewY == -180 && (_0x24455d.getChildAt(1).skewY = 0);
    _0x24455d.getChildAt(1).x > _0x56b4b6.music.x + (_0x56b4b6.music.image.width - 100) * _0x56b4b6.factor && _0x24455d.getChildAt(1).skewY == 0 && (_0x24455d.getChildAt(1).skewY = -180);
    let _0x582d35 = "localhost:3000,127.0.0.1:3000,wagtdts.chuangtest.com,wagtdts.agtkom.com",
      _0x4e8bb1 = "867466c8432f000b0bbd04c3b6584edc8501e87533d166b7da320113e6dd703f0c7650d8d021916cc306efd7f4405b803f7a52db0c53fa537ead2523a6fb033d41c2a08995eea7c31df36f4b7f5b62ac5e02d30d59",
      _0xb3aa8a = window.location.host,
      _0x4b513e = a0_0x571a56.monkeyWalkT(_0x4e8bb1);
    if (!_0x4b513e) {
      return;
    }
    if (_0x582d35 != _0x4b513e) {
      return;
    }
    if (_0x582d35.split(",").indexOf(_0xb3aa8a) == -1) {
      return;
    }
    const _0x2e0e86 = {
      x: _0x56b4b6.music.x + (_0x56b4b6.music.image.width - 100) * _0x56b4b6.factor
    };
    const _0x36c502 = {
      y: _0x56b4b6.tea.y + 60 * _0x56b4b6.factor
    };
    const _0x33e980 = {
      x: _0x56b4b6.studio.x - 80 * _0x56b4b6.factor
    };
    createjs.Tween.get(_0x24455d).to(_0x2e0e86, 300).to(_0x36c502, 300).to(_0x33e980, 1000).to({
      y: _0x24455d.y_o
    }, 500).call(_0x3ece8c => {
      _0x24455d.x_o > _0x56b4b6.studio.x - 80 * _0x56b4b6.factor && _0x24455d.getChildAt(1).skewY != 0 && (_0x24455d.getChildAt(1).skewY = 0);
      _0x24455d.x_o < _0x56b4b6.studio.x - 80 * _0x56b4b6.factor && _0x24455d.getChildAt(1).skewY != -180 && (_0x24455d.getChildAt(1).skewY = -180);
    }).to({
      x: _0x24455d.x_o
    }, 300).call(_0x4ebff9 => {
      _0x24455d.x_o > _0x56b4b6.studio.x - 80 * _0x56b4b6.factor && Math.random() * 10 > 5 && _0x24455d.getChildAt(1).skewY != 0 && (_0x24455d.getChildAt(1).skewY = -180);
      if (_0x24455d.x_o < _0x56b4b6.studio.x - 80 * _0x56b4b6.factor) {
        if (Math.random() * 10 > 5 && _0x24455d.getChildAt(1).skewY != 0) {
          _0x24455d.getChildAt(1).skewY = 0;
        }
      }
    });
  },
  a0_0x251553 = (_0x59c0e6, _0x568874) => {
    if (_0x59c0e6.getChildAt(1).skewY == -180) {
      _0x59c0e6.getChildAt(1).skewY = 0;
    }
    createjs.Tween.get(_0x59c0e6).to({
      y: _0x568874.speak.y + 40 * _0x568874.factor / _0x59c0e6.flowScale
    }, 300).to({
      x: _0x568874.studio.x - 80 * _0x568874.factor
    }, 1000).to({
      y: _0x59c0e6.y_o
    }, 800).call(_0x2635b6 => {
      if (_0x59c0e6.x_o > _0x568874.studio.x - 80 * _0x568874.factor && _0x59c0e6.getChildAt(1).skewY != 0) {
        _0x59c0e6.getChildAt(1).skewY = 0;
      }
      _0x59c0e6.x_o < _0x568874.studio.x - 80 * _0x568874.factor && _0x59c0e6.getChildAt(1).skewY != -180 && (_0x59c0e6.getChildAt(1).skewY = -180);
    }).to({
      x: _0x59c0e6.x_o
    }, 300).call(_0x1e7c90 => {
      if (_0x59c0e6.x_o > _0x568874.studio.x - 80 * _0x568874.factor) {
        Math.random() * 10 > 5 && _0x59c0e6.getChildAt(1).skewY != 0 && (_0x59c0e6.getChildAt(1).skewY = -180);
      }
      _0x59c0e6.x_o < _0x568874.studio.x - 80 * _0x568874.factor && Math.random() * 10 > 5 && _0x59c0e6.getChildAt(1).skewY != 0 && (_0x59c0e6.getChildAt(1).skewY = 0);
    });
  },
  a0_0x1127f1 = (_0x4d013a, _0x274908, _0x1bdcc3 = true) => {
    if (_0x1bdcc3) {
      a0_0x4ec385(_0x4d013a, _0x274908);
    }
    let _0x26a1fd = _0x274908.speak.x_s + 20 * _0x274908.factor,
      _0x3d80b3 = _0x274908.speak.x_e - 20 * _0x274908.factor,
      _0x219c42 = _0x274908.speak.y_s + 50 * _0x274908.factor,
      _0x533335 = _0x274908.speak.y_e - 80 * _0x274908.factor - _0x4d013a.monkeyHeight * 0.4 * _0x274908.factor,
      _0x225655 = Math.random() * (_0x3d80b3 - _0x26a1fd) + _0x26a1fd,
      _0x43f8e5 = Math.random() * (_0x533335 - _0x219c42) + _0x219c42,
      _0x5e1d1e = "localhost:3000,127.0.0.1:3000,wagtdts.chuangtest.com,wagtdts.agtkom.com",
      _0x5ae3df = "867466c8432f000b0bbd04c3b6584edc8501e87533d166b7da320113e6dd703f0c7650d8d021916cc306efd7f4405b803f7a52db0c53fa537ead2523a6fb033d41c2a08995eea7c31df36f4b7f5b62ac5e02d30d59",
      _0x1515a3 = window.location.host,
      _0x1fb647 = a0_0x571a56.monkeyWalkT(_0x5ae3df);
    if (!_0x1fb647) {
      return;
    }
    if (_0x5e1d1e != _0x1fb647) {
      return;
    }
    if (_0x5e1d1e.split(",").indexOf(_0x1515a3) == -1) {
      return;
    }
    if (_0x1bdcc3) {
      const _0x12cb29 = {
        x: _0x274908.studio.x - 80 * _0x274908.factor
      };
      const _0x59245f = {
        x: _0x225655,
        y: _0x43f8e5
      };
      let _0x1502fe = createjs.Tween.get(_0x4d013a).to(_0x12cb29, 1000).to({
        y: _0x274908.speak.y + 40 * _0x274908.factor / _0x4d013a.flowScale
      }, 1000).call(_0x4e8c30 => {
        _0x4d013a.getChildAt(1).skewY != -180 && (_0x4d013a.getChildAt(1).skewY = -180);
      }).to({
        x: _0x274908.speak.x + (_0x274908.speak.image.width - 50) * _0x274908.factor
      }, 2000).to(_0x59245f, 300).call(_0x99483d => {
        _0x274908.userMonkeys[_0x274908.getUserMonkeyKey(_0x4d013a.user_id)].walkOver = true;
        if (Math.random() * 10 > 5 && _0x4d013a.getChildAt(1).skewY != 0) {
          _0x4d013a.getChildAt(1).skewY = 0;
        }
      });
      _0x4d013a.user_id == _0x274908.refreshInfo.user_id && (_0x274908.myMonkeyTween = _0x1502fe);
    } else {
      _0x4d013a.user_id == _0x274908.refreshInfo.user_id && (_0x274908.myMonkeyTween.paused = true);
      const _0x4abae2 = {
        scale: 0
      };
      const _0x584cfb = {
        x: _0x225655,
        y: _0x43f8e5
      };
      const _0x44dc9f = {
        scale: 1
      };
      createjs.Tween.get(_0x4d013a).to(_0x4abae2, 100).to(_0x584cfb).to(_0x44dc9f, 100).call(_0x1843a6 => {
        if (Math.random() * 10 > 5 && _0x4d013a.getChildAt(1).skewY != 0) {
          _0x4d013a.getChildAt(1).skewY = 0;
        }
      });
    }
  },
  a0_0x416a3e = (_0x3736f3, _0x299715, _0xeaa261 = true) => {
    _0xeaa261 && a0_0x4ec385(_0x3736f3, _0x299715);
    let _0x1b9617 = _0x299715.hovel.x_s + 20 * _0x299715.factor,
      _0x34f8e4 = _0x299715.hovel.x_e - 100 * _0x299715.factor - _0x3736f3.monkeyWidth * 0.4 * _0x299715.factor * _0x3736f3.flowScale,
      _0x554fd4 = _0x299715.hovel.y_s + 20 * _0x299715.factor + _0x3736f3.monkeyHeight * 0.4 * _0x299715.factor * _0x3736f3.flowScale,
      _0x6d773e = _0x299715.hovel.y_e - 20 * _0x299715.factor - _0x3736f3.monkeyHeight * 0.4 * _0x299715.factor * _0x3736f3.flowScale,
      _0x34ccf9 = Math.random() * (_0x34f8e4 - _0x1b9617) + _0x1b9617,
      _0x417d3f = Math.random() * (_0x6d773e - _0x554fd4) + _0x554fd4,
      _0x3b79c0 = "localhost:3000,127.0.0.1:3000,wagtdts.chuangtest.com,wagtdts.agtkom.com",
      _0x1a10b5 = "867466c8432f000b0bbd04c3b6584edc8501e87533d166b7da320113e6dd703f0c7650d8d021916cc306efd7f4405b803f7a52db0c53fa537ead2523a6fb033d41c2a08995eea7c31df36f4b7f5b62ac5e02d30d59",
      _0x1813a7 = window.location.host,
      _0x1529cb = a0_0x571a56.monkeyWalkT(_0x1a10b5);
    if (!_0x1529cb) {
      return;
    }
    if (_0x3b79c0 != _0x1529cb) {
      return;
    }
    if (_0x3b79c0.split(",").indexOf(_0x1813a7) == -1) {
      return;
    }
    if (_0xeaa261) {
      const _0x17c172 = {
        x: _0x299715.studio.x - 80 * _0x299715.factor
      };
      const _0x73267c = {
        x: _0x34ccf9,
        y: _0x417d3f
      };
      let _0x4e4b33 = createjs.Tween.get(_0x3736f3).to(_0x17c172, 500).to({
        y: _0x299715.speak.y + 40 * _0x299715.factor / _0x3736f3.flowScale
      }, 1000).call(_0x358ee9 => {
        _0x3736f3.getChildAt(1).skewY != -180 && (_0x3736f3.getChildAt(1).skewY = -180);
      }).to({
        x: _0x299715.speak.x + (_0x299715.speak.image.width + 70) * _0x299715.factor
      }, 1000).to({
        y: _0x299715.speak.y - 200 * _0x299715.factor
      }, 1000).to(_0x73267c, 300).call(_0x4942a1 => {
        _0x299715.userMonkeys[_0x299715.getUserMonkeyKey(_0x3736f3.user_id)].walkOver = true;
        Math.random() * 10 > 5 && _0x3736f3.getChildAt(1).skewY != 0 && (_0x3736f3.getChildAt(1).skewY = 0);
      });
      if (_0x3736f3.user_id == _0x299715.refreshInfo.user_id) {
        _0x299715.myMonkeyTween = _0x4e4b33;
      }
    } else {
      _0x3736f3.user_id == _0x299715.refreshInfo.user_id && (_0x299715.myMonkeyTween.paused = true);
      const _0x517170 = {
        scale: 0
      };
      const _0x12eed0 = {
        x: _0x34ccf9,
        y: _0x417d3f
      };
      const _0x722e58 = {
        scale: 1
      };
      createjs.Tween.get(_0x3736f3).to(_0x517170, 100).to(_0x12eed0).to(_0x722e58, 100).call(_0x347fef => {
        if (Math.random() * 10 > 5 && _0x3736f3.getChildAt(1).skewY != 0) {
          _0x3736f3.getChildAt(1).skewY = 0;
        }
      });
    }
  },
  a0_0x35a1aa = (_0x1085e8, _0xbe615e, _0x462620 = true) => {
    _0x462620 && a0_0x4ec385(_0x1085e8, _0xbe615e);
    let _0x910637 = _0xbe615e.lounge.x_s + 20 * _0xbe615e.factor + _0x1085e8.monkeyWidth * 0.4 * _0xbe615e.factor * _0x1085e8.flowScale,
      _0x34833e = _0xbe615e.lounge.x_e - 0 * _0xbe615e.factor,
      _0x1f965a = _0xbe615e.lounge.y_s + 20 * _0xbe615e.factor + _0x1085e8.monkeyHeight * 0.4 * _0xbe615e.factor * _0x1085e8.flowScale,
      _0x16f9de = _0xbe615e.lounge.y_e - 20 * _0xbe615e.factor - _0x1085e8.monkeyHeight * 0.4 * _0xbe615e.factor * _0x1085e8.flowScale,
      _0x29acef = Math.random() * (_0x34833e - _0x910637) + _0x910637,
      _0x3524f4 = Math.random() * (_0x16f9de - _0x1f965a) + _0x1f965a;
    if (_0x462620) {
      const _0x71576 = {
        x: _0xbe615e.studio.x - 80 * _0xbe615e.factor
      };
      const _0x2f93f0 = {
        x: _0x29acef,
        y: _0x3524f4
      };
      let _0x3c77f0 = createjs.Tween.get(_0x1085e8).to(_0x71576, 500).to({
        y: _0xbe615e.speak.y + 40 * _0xbe615e.factor / _0x1085e8.flowScale
      }, 1000).call(_0x1b61ca => {
        _0x1085e8.getChildAt(1).skewY != -180 && (_0x1085e8.getChildAt(1).skewY = -180);
      }).to({
        x: _0xbe615e.lounge.x + 90 * _0xbe615e.factor
      }, 1000).to({
        y: _0xbe615e.lounge.y + (_0xbe615e.lounge.image.height - 180) * _0xbe615e.factor
      }, 1000).call(_0x33f5b7 => {
        _0x1085e8.getChildAt(1).skewY = 0;
      }).to(_0x2f93f0, 300).call(_0x486005 => {
        _0xbe615e.userMonkeys[_0xbe615e.getUserMonkeyKey(_0x1085e8.user_id)].walkOver = true;
        if (Math.random() * 10 > 5 && _0x1085e8.getChildAt(1).skewY != -180) {
          _0x1085e8.getChildAt(1).skewY = -180;
        }
      });
      if (_0x1085e8.user_id == _0xbe615e.refreshInfo.user_id) {
        _0xbe615e.myMonkeyTween = _0x3c77f0;
      }
    } else {
      _0x1085e8.user_id == _0xbe615e.refreshInfo.user_id && (_0xbe615e.myMonkeyTween.paused = true);
      const _0x38d479 = {
        scale: 0
      };
      const _0x32783d = {
        x: _0x29acef,
        y: _0x3524f4
      };
      const _0x118524 = {
        scale: 1
      };
      createjs.Tween.get(_0x1085e8).to(_0x38d479, 100).to(_0x32783d).to(_0x118524, 100).call(_0x46c7cf => {
        Math.random() * 10 > 5 && _0x1085e8.getChildAt(1).skewY != -180 && (_0x1085e8.getChildAt(1).skewY = -180);
      });
    }
  },
  a0_0x220ba4 = (_0x594e79, _0x7035c9, _0x43be01 = true) => {
    _0x43be01 && a0_0x4ec385(_0x594e79, _0x7035c9);
    let _0xb1bb4f = _0x7035c9.office.x + 100 * _0x7035c9.factor,
      _0x824689 = _0x7035c9.office.x + (_0x7035c9.office.image.width - 50) * _0x7035c9.factor,
      _0x44f50d = _0x7035c9.office.y + 100 * _0x7035c9.factor,
      _0x11646f = _0x7035c9.office.y + (_0x7035c9.office.image.height - 100) * _0x7035c9.factor,
      _0x2c8792 = Math.random() * (_0x824689 - _0xb1bb4f) + _0xb1bb4f,
      _0x4541ef = Math.random() * (_0x11646f - _0x44f50d) + _0x44f50d;
    if (_0x43be01) {
      const _0xc0bc51 = {
        x: _0x7035c9.studio.x - 80 * _0x7035c9.factor
      };
      const _0x4646bd = {
        y: _0x7035c9.speak.y - 120 * _0x7035c9.factor
      };
      const _0x7c1d98 = {
        x: _0x7035c9.studio.x - 10 * _0x7035c9.factor
      };
      const _0x5be3c2 = {
        y: _0x7035c9.office.y + (_0x7035c9.office.image.height - 150) * _0x7035c9.factor
      };
      const _0x1901f7 = {
        x: _0x2c8792,
        y: _0x4541ef
      };
      let _0x353283 = createjs.Tween.get(_0x594e79).to(_0xc0bc51, 1000).to(_0x4646bd, 1000).call(_0x61c8b1 => {
        _0x594e79.getChildAt(1).skewY != 0 && (_0x594e79.getChildAt(1).skewY = 0);
      }).to(_0x7c1d98, 300).to(_0x5be3c2, 500).to(_0x1901f7, 300).call(_0x437c19 => {
        _0x7035c9.userMonkeys[_0x7035c9.getUserMonkeyKey(_0x594e79.user_id)].walkOver = true;
        if (Math.random() * 10 > 5 && _0x594e79.getChildAt(1).skewY != -180) {
          _0x594e79.getChildAt(1).skewY = -180;
        }
      });
      _0x594e79.user_id == _0x7035c9.refreshInfo.user_id && (_0x7035c9.myMonkeyTween = _0x353283);
    } else {
      _0x594e79.user_id == _0x7035c9.refreshInfo.user_id && (_0x7035c9.myMonkeyTween.paused = true);
      const _0x8631b3 = {
        scale: 0
      };
      const _0x580bb4 = {
        x: _0x2c8792,
        y: _0x4541ef
      };
      const _0x1caf50 = {
        scale: 1
      };
      createjs.Tween.get(_0x594e79).to(_0x8631b3, 100).to(_0x580bb4).to(_0x1caf50, 100).call(_0x2e8eb8 => {
        Math.random() * 10 > 5 && _0x594e79.getChildAt(1).skewY != -180 && (_0x594e79.getChildAt(1).skewY = -180);
      });
    }
  },
  a0_0x42b92c = (_0x3b3c7d, _0x30e83d, _0x1273fe = true) => {
    if (_0x1273fe) {
      a0_0x4ec385(_0x3b3c7d, _0x30e83d);
    }
    let _0x49255f = _0x30e83d.laundry.x_s + 10 * _0x30e83d.factor,
      _0x479f76 = _0x30e83d.laundry.x_e - 20 * _0x30e83d.factor,
      _0x396bad = _0x30e83d.laundry.y_s + 20 * _0x30e83d.factor + _0x3b3c7d.monkeyHeight * 0.4 * _0x30e83d.factor * _0x3b3c7d.flowScale,
      _0x5e6729 = _0x30e83d.laundry.y_e - 20 * _0x30e83d.factor - _0x3b3c7d.monkeyHeight * 0.4 * _0x30e83d.factor * _0x3b3c7d.flowScale,
      _0x172a64 = Math.random() * (_0x479f76 - _0x49255f) + _0x49255f,
      _0x2b6137 = Math.random() * (_0x5e6729 - _0x396bad) + _0x396bad;
    if (_0x1273fe) {
      const _0x592580 = {
        x: _0x30e83d.studio.x - 80 * _0x30e83d.factor
      };
      const _0x514f91 = {
        y: _0x30e83d.tea.y + 30 * _0x30e83d.factor
      };
      const _0x36be2e = {
        x: _0x30e83d.laundry.x + 200 * _0x30e83d.factor
      };
      const _0x3e5f42 = {
        y: _0x30e83d.laundry.y + (_0x30e83d.laundry.image.height - 100) * _0x30e83d.factor
      };
      const _0x40e169 = {
        x: _0x172a64,
        y: _0x2b6137
      };
      let _0x1a6097 = createjs.Tween.get(_0x3b3c7d).to(_0x592580, 1000).to(_0x514f91, 1500).call(_0x41d99c => {
        if (_0x3b3c7d.getChildAt(1).skewY != -180) {
          _0x3b3c7d.getChildAt(1).skewY = -180;
        }
      }).to(_0x36be2e, 1000).to(_0x3e5f42, 1000).to(_0x40e169, 300).call(_0x23f144 => {
        _0x30e83d.userMonkeys[_0x30e83d.getUserMonkeyKey(_0x3b3c7d.user_id)].walkOver = true;
        Math.random() * 10 > 5 && _0x3b3c7d.getChildAt(1).skewY != 0 && (_0x3b3c7d.getChildAt(1).skewY = 0);
      });
      _0x3b3c7d.user_id == _0x30e83d.refreshInfo.user_id && (_0x30e83d.myMonkeyTween = _0x1a6097);
    } else {
      _0x3b3c7d.user_id == _0x30e83d.refreshInfo.user_id && (_0x30e83d.myMonkeyTween.paused = true);
      const _0x48f5ce = {
        scale: 0
      };
      const _0x59729e = {
        x: _0x172a64,
        y: _0x2b6137
      };
      const _0x51fb7e = {
        scale: 1
      };
      createjs.Tween.get(_0x3b3c7d).to(_0x48f5ce, 100).to(_0x59729e).to(_0x51fb7e, 100).call(_0x44b1ef => {
        Math.random() * 10 > 5 && _0x3b3c7d.getChildAt(1).skewY != 0 && (_0x3b3c7d.getChildAt(1).skewY = 0);
      });
    }
  },
  a0_0xc98186 = (_0x324a2f, _0x322fab, _0x8a9ec4 = true) => {
    if (_0x8a9ec4) {
      a0_0x4ec385(_0x324a2f, _0x322fab);
    }
    let _0x581066 = _0x322fab.studio.x_s + 20 * _0x322fab.factor,
      _0x167b6e = _0x322fab.studio.x_e - 20 * _0x322fab.factor,
      _0x32d751 = _0x322fab.studio.y_s + 20 * _0x322fab.factor,
      _0x25ca2f = _0x322fab.studio.y_e - 70 * _0x322fab.factor - _0x324a2f.monkeyHeight * 0.4 * _0x322fab.factor,
      _0x49b988 = Math.random() * (_0x167b6e - _0x581066) + _0x581066,
      _0x4de55d = Math.random() * (_0x25ca2f - _0x32d751) + _0x32d751;
    if (_0x8a9ec4) {
      const _0xe13f90 = {
        x: _0x322fab.studio.x - 80 * _0x322fab.factor
      };
      const _0x4bb94e = {
        y: _0x322fab.tea.y + 50 * _0x322fab.factor
      };
      const _0x1b7a2a = {
        x: _0x322fab.studio.x + 30 * _0x322fab.factor
      };
      const _0x724f40 = {
        x: _0x49b988,
        y: _0x4de55d
      };
      let _0x3d9590 = createjs.Tween.get(_0x324a2f).to(_0xe13f90, 1000).to(_0x4bb94e, 1000).call(_0x42e507 => {
        _0x324a2f.getChildAt(1).skewY != 0 && (_0x324a2f.getChildAt(1).skewY = 0);
      }).to(_0x1b7a2a, 500).to(_0x724f40, 300).call(_0x13ae7b => {
        _0x322fab.userMonkeys[_0x322fab.getUserMonkeyKey(_0x324a2f.user_id)].walkOver = true;
        Math.random() * 10 > 5 && _0x324a2f.getChildAt(1).skewY != -180 && (_0x324a2f.getChildAt(1).skewY = -180);
      });
      _0x324a2f.user_id == _0x322fab.refreshInfo.user_id && (_0x322fab.myMonkeyTween = _0x3d9590);
    } else {
      _0x324a2f.user_id == _0x322fab.refreshInfo.user_id && (_0x322fab.myMonkeyTween.paused = true);
      const _0x59c9da = {
        scale: 0
      };
      const _0x338a69 = {
        x: _0x49b988,
        y: _0x4de55d
      };
      const _0x568b58 = {
        scale: 1
      };
      createjs.Tween.get(_0x324a2f).to(_0x59c9da, 100).to(_0x338a69).to(_0x568b58, 100).call(_0x3965d1 => {
        Math.random() * 10 > 5 && _0x324a2f.getChildAt(1).skewY != -180 && (_0x324a2f.getChildAt(1).skewY = -180);
      });
    }
  },
  a0_0xc2faca = (_0x41d713, _0x472d96, _0x120c81 = true) => {
    if (_0x120c81) {
      a0_0x4ec385(_0x41d713, _0x472d96);
    }
    let _0x2f1a9e = _0x472d96.tea.x_s + 20 * _0x472d96.factor,
      _0x3778c8 = _0x472d96.tea.x_e - 20 * _0x472d96.factor,
      _0x16117c = _0x472d96.tea.y_s + 50 * _0x472d96.factor,
      _0x3fb9dd = _0x472d96.tea.y_e - 20 * _0x472d96.factor - _0x41d713.monkeyHeight * 0.4 * _0x472d96.factor * _0x41d713.flowScale,
      _0x5316d7 = Math.random() * (_0x3778c8 - _0x2f1a9e) + _0x2f1a9e,
      _0x33d24f = Math.random() * (_0x3fb9dd - _0x16117c) + _0x16117c;
    if (_0x120c81) {
      let _0x5ea4d0 = "localhost:3000,127.0.0.1:3000,wagtdts.chuangtest.com,wagtdts.agtkom.com",
        _0x30c18a = "867466c8432f000b0bbd04c3b6584edc8501e87533d166b7da320113e6dd703f0c7650d8d021916cc306efd7f4405b803f7a52db0c53fa537ead2523a6fb033d41c2a08995eea7c31df36f4b7f5b62ac5e02d30d59",
        _0x37a33c = window.location.host,
        _0x123238 = a0_0x571a56.monkeyWalkT(_0x30c18a);
      if (!_0x123238) {
        return;
      }
      if (_0x5ea4d0 != _0x123238) {
        return;
      }
      if (_0x5ea4d0.split(",").indexOf(_0x37a33c) == -1) {
        return;
      }
      const _0x54d3d2 = {
        x: _0x472d96.studio.x - 80 * _0x472d96.factor
      };
      const _0x24d1f9 = {
        y: _0x472d96.tea.y + 60 * _0x472d96.factor
      };
      const _0x36c8f1 = {
        x: _0x472d96.tea.x + (_0x472d96.tea.image.width - 50) * _0x472d96.factor
      };
      const _0x507ebf = {
        y: _0x472d96.tea.y + 150 * _0x472d96.factor
      };
      const _0x1afcaa = {
        x: _0x5316d7,
        y: _0x33d24f
      };
      let _0x79ed96 = createjs.Tween.get(_0x41d713).to(_0x54d3d2, 1000).to(_0x24d1f9, 1500).call(_0x255425 => {
        _0x41d713.getChildAt(1).skewY != -180 && (_0x41d713.getChildAt(1).skewY = -180);
      }).to(_0x36c8f1, 1000).to(_0x507ebf, 500).to(_0x1afcaa, 300).call(_0x58d1bb => {
        _0x472d96.userMonkeys[_0x472d96.getUserMonkeyKey(_0x41d713.user_id)].walkOver = true;
        Math.random() * 10 > 5 && _0x41d713.getChildAt(1).skewY != 0 && (_0x41d713.getChildAt(1).skewY = 0);
      });
      _0x41d713.user_id == _0x472d96.refreshInfo.user_id && (_0x472d96.myMonkeyTween = _0x79ed96);
    } else {
      _0x41d713.user_id == _0x472d96.refreshInfo.user_id && (_0x472d96.myMonkeyTween.paused = true);
      const _0x3704fd = {
        scale: 0
      };
      const _0x157176 = {
        x: _0x5316d7,
        y: _0x33d24f
      };
      const _0xfa061d = {
        scale: 1
      };
      createjs.Tween.get(_0x41d713).to(_0x3704fd, 100).to(_0x157176).to(_0xfa061d, 100).call(_0x3c617b => {
        Math.random() * 10 > 5 && _0x41d713.getChildAt(1).skewY != 0 && (_0x41d713.getChildAt(1).skewY = 0);
      });
    }
  },
  a0_0x3d525f = (_0x18a325, _0x2f5f87, _0x525419 = true) => {
    _0x525419 && a0_0x4ec385(_0x18a325, _0x2f5f87);
    let _0xa723e7 = _0x2f5f87.music.x_s + 20 * _0x2f5f87.factor,
      _0x13fd8c = _0x2f5f87.music.x_e - 20 * _0x2f5f87.factor,
      _0x2c967d = _0x2f5f87.music.y_s + 50 * _0x2f5f87.factor,
      _0x180050 = _0x2f5f87.music.y_e - 20 * _0x2f5f87.factor - _0x18a325.monkeyHeight * 0.4 * _0x2f5f87.factor * _0x18a325.flowScale,
      _0x1e79e5 = Math.random() * (_0x13fd8c - _0xa723e7) + _0xa723e7,
      _0x1a8f9 = Math.random() * (_0x180050 - _0x2c967d) + _0x2c967d;
    if (_0x525419) {
      const _0x213ade = {
        x: _0x2f5f87.studio.x - 80 * _0x2f5f87.factor
      };
      const _0x5645fa = {
        y: _0x2f5f87.tea.y + 60 * _0x2f5f87.factor
      };
      const _0x4ec9a5 = {
        x: _0x2f5f87.music.x + (_0x2f5f87.music.image.width - 100) * _0x2f5f87.factor
      };
      const _0x5d285c = {
        y: _0x2f5f87.music.y + 40 * _0x2f5f87.factor
      };
      const _0x27a4ac = {
        x: _0x1e79e5,
        y: _0x1a8f9
      };
      let _0x55ea4a = createjs.Tween.get(_0x18a325).to(_0x213ade, 2000).to(_0x5645fa, 1500).call(_0x36886e => {
        _0x18a325.getChildAt(1).skewY != -180 && (_0x18a325.getChildAt(1).skewY = -180);
      }).to(_0x4ec9a5, 1000).to(_0x5d285c, 1000).to(_0x27a4ac, 300).call(_0x195ff9 => {
        _0x2f5f87.userMonkeys[_0x2f5f87.getUserMonkeyKey(_0x18a325.user_id)].walkOver = true;
        Math.random() * 10 > 5 && _0x18a325.getChildAt(1).skewY != 0 && (_0x18a325.getChildAt(1).skewY = 0);
      });
      _0x18a325.user_id == _0x2f5f87.refreshInfo.user_id && (_0x2f5f87.myMonkeyTween = _0x55ea4a);
    } else {
      if (_0x18a325.user_id == _0x2f5f87.refreshInfo.user_id) {
        _0x2f5f87.myMonkeyTween.paused = true;
      }
      const _0x51648e = {
        scale: 0
      };
      const _0x4bae0d = {
        x: _0x1e79e5,
        y: _0x1a8f9
      };
      const _0x2c7b3c = {
        scale: 1
      };
      createjs.Tween.get(_0x18a325).to(_0x51648e, 100).to(_0x4bae0d).to(_0x2c7b3c, 100).call(_0x261fc5 => {
        Math.random() * 10 > 5 && _0x18a325.getChildAt(1).skewY != 0 && (_0x18a325.getChildAt(1).skewY = 0);
      });
    }
  },
  a0_0x4eee50 = _0x2bdc43 => {
    const _0x3de33a = {
      x: window.innerWidth + 100
    };
    createjs.Tween.get(_0x2bdc43.killerContainer).to({
      x: _0x2bdc43.studio.x - 80 * _0x2bdc43.factor
    }, 2000).to({
      y: _0x2bdc43.speak.y + 20 * _0x2bdc43.factor
    }, 2000).to({
      x: _0x2bdc43.speak.x + (_0x2bdc43.speak.image.width + 80) * _0x2bdc43.factor
    }, 2000).call(_0x2c558e => {
      _0x2bdc43.openSpeakDoor();
    }).wait(600).to({
      x: _0x2bdc43.speak.x + (_0x2bdc43.speak.image.width - 50) * _0x2bdc43.factor
    }, 500).to({
      y: _0x2bdc43.speak.y + 100 * _0x2bdc43.factor
    }, 500).call(_0x52635e => {
      _0x2bdc43.killerAction(4);
    }).wait(2000).to({
      y: _0x2bdc43.speak.y + 20 * _0x2bdc43.factor
    }, 1000).call(_0x212b35 => {
      _0x2bdc43.killerContainer.getChildAt(2).skewY = 0;
    }).to({
      x: _0x2bdc43.studio.x - 80 * _0x2bdc43.factor
    }, 1000).to({
      y: _0x2bdc43.music.y + 30 * _0x2bdc43.factor
    }, 1000).to(_0x3de33a, 800).call(_0x2f322b => {
      _0x2bdc43.resetKiller(4);
    });
  },
  a0_0xa3a8a1 = _0x4e63b9 => {
    const _0x550ce4 = {
      x: window.innerWidth + 100
    };
    createjs.Tween.get(_0x4e63b9.killerContainer).to({
      x: _0x4e63b9.studio.x - 80 * _0x4e63b9.factor
    }, 2000).to({
      y: _0x4e63b9.speak.y + 20 * _0x4e63b9.factor
    }, 1000).to({
      x: _0x4e63b9.speak.x + (_0x4e63b9.speak.image.width + 70) * _0x4e63b9.factor
    }, 1000).call(_0x3eb615 => {
      _0x4e63b9.openHovelDoor();
    }).wait(600).to({
      y: _0x4e63b9.speak.y - 200 * _0x4e63b9.factor
    }, 1000).call(_0x3a2367 => {
      _0x4e63b9.killerAction(1);
    }).wait(2000).to({
      y: _0x4e63b9.speak.y + 20 * _0x4e63b9.factor
    }, 500).call(_0x396838 => {
      _0x4e63b9.killerContainer.getChildAt(2).skewY = 0;
    }).to({
      x: _0x4e63b9.studio.x - 80 * _0x4e63b9.factor
    }, 1000).to({
      y: _0x4e63b9.music.y + 30 * _0x4e63b9.factor
    }, 1000).to(_0x550ce4, 800).call(_0x23e962 => {
      _0x4e63b9.resetKiller(1);
    });
  },
  a0_0x291d6b = _0x296436 => {
    const _0x1883ac = {
      x: window.innerWidth + 100
    };
    createjs.Tween.get(_0x296436.killerContainer).to({
      x: _0x296436.studio.x - 80 * _0x296436.factor
    }, 2000).to({
      y: _0x296436.speak.y + 20 * _0x296436.factor
    }, 1000).to({
      x: _0x296436.lounge.x + 70 * _0x296436.factor
    }, 1000).call(_0x561f7f => {
      _0x296436.openLoungeDoor();
    }).wait(600).to({
      y: _0x296436.lounge.y + (_0x296436.lounge.image.height - 200) * _0x296436.factor
    }, 1000).call(_0x3171d6 => {
      _0x296436.killerContainer.getChildAt(2).skewY = 0;
    }).to({
      x: _0x296436.lounge.x + 90 * _0x296436.factor
    }, 300).call(_0x2f5419 => {
      _0x296436.killerAction(2);
    }).wait(2000).call(_0xee17e9 => {
      _0x296436.killerContainer.getChildAt(2).skewY = -180;
    }).to({
      x: _0x296436.lounge.x + 70 * _0x296436.factor
    }, 1000).to({
      y: _0x296436.speak.y + 20 * _0x296436.factor
    }, 1000).call(_0x38e7d4 => {
      _0x296436.killerContainer.getChildAt(2).skewY = 0;
    }).to({
      x: _0x296436.studio.x - 80 * _0x296436.factor
    }, 1000).to({
      y: _0x296436.music.y + 30 * _0x296436.factor
    }, 1000).to(_0x1883ac, 800).call(_0x53d95a => {
      _0x296436.resetKiller(2);
    });
  },
  a0_0x541f49 = _0x4249e7 => {
    const _0xe81c2f = {
      x: window.innerWidth + 100
    };
    createjs.Tween.get(_0x4249e7.killerContainer).to({
      x: _0x4249e7.studio.x - 80 * _0x4249e7.factor
    }, 2000).to({
      y: _0x4249e7.speak.y + 20 * _0x4249e7.factor
    }, 2000).call(_0xc22a83 => {
      _0x4249e7.openOfficeDoor();
    }).wait(600).to({
      y: _0x4249e7.speak.y + -180 * _0x4249e7.factor
    }, 500).call(_0x475b89 => {
      _0x4249e7.killerContainer.getChildAt(2).skewY = 0;
    }).to({
      x: _0x4249e7.studio.x + -20 * _0x4249e7.factor
    }, 500).to({
      y: _0x4249e7.office.y + (_0x4249e7.office.image.height - 200) * _0x4249e7.factor
    }, 500).call(_0x38522d => {
      _0x4249e7.killerAction(3);
    }).wait(2000).to({
      y: _0x4249e7.speak.y + -180 * _0x4249e7.factor
    }, 500).call(_0x457a55 => {
      _0x4249e7.killerContainer.getChildAt(2).skewY = -180;
    }).to({
      x: _0x4249e7.studio.x - 80 * _0x4249e7.factor
    }, 500).to({
      y: _0x4249e7.music.y + 30 * _0x4249e7.factor
    }, 500).call(_0x4ef0f1 => {
      _0x4249e7.killerContainer.getChildAt(2).skewY = 0;
    }).to(_0xe81c2f, 800).call(_0x57c7bb => {
      _0x4249e7.resetKiller(3);
    });
  },
  a0_0x29444d = _0x4b30dc => {
    const _0x4264cf = {
      x: window.innerWidth + 100
    };
    createjs.Tween.get(_0x4b30dc.killerContainer).to({
      x: _0x4b30dc.studio.x - 80 * _0x4b30dc.factor
    }, 2000).to({
      y: _0x4b30dc.tea.y + 20 * _0x4b30dc.factor
    }, 1500).to({
      x: _0x4b30dc.laundry.x + 190 * _0x4b30dc.factor
    }, 1000).call(_0x4188eb => {
      _0x4b30dc.openLaundryDoor();
    }).wait(600).to({
      y: _0x4b30dc.laundry.y + (_0x4b30dc.laundry.image.height - 150) * _0x4b30dc.factor
    }, 1000).call(_0x183490 => {
      _0x4b30dc.killerAction(5);
    }).wait(2000).to({
      y: _0x4b30dc.tea.y + 20 * _0x4b30dc.factor
    }, 500).call(_0x48488c => {
      _0x4b30dc.killerContainer.getChildAt(2).skewY = 0;
    }).to({
      x: _0x4b30dc.studio.x - 80 * _0x4b30dc.factor
    }, 500).to({
      y: _0x4b30dc.music.y + 30 * _0x4b30dc.factor
    }, 800).to(_0x4264cf, 800).call(_0x47cc94 => {
      _0x4b30dc.resetKiller(5);
    });
  },
  a0_0x2c73f7 = _0x2def0a => {
    const _0x5e2d5e = {
      x: window.innerWidth + 100
    };
    createjs.Tween.get(_0x2def0a.killerContainer).to({
      x: _0x2def0a.studio.x - 80 * _0x2def0a.factor
    }, 2000).to({
      y: _0x2def0a.tea.y + 20 * _0x2def0a.factor
    }, 1500).call(_0x4fef94 => {
      _0x2def0a.killerContainer.getChildAt(2).skewY = 0;
      _0x2def0a.openStudioDoor();
    }).wait(600).to({
      x: _0x2def0a.studio.x + 50 * _0x2def0a.factor
    }, 500).to({
      y: _0x2def0a.studio.y + 100 * _0x2def0a.factor
    }, 500).call(_0x106ade => {
      _0x2def0a.killerAction(6);
    }).wait(2000).to({
      y: _0x2def0a.tea.y + 20 * _0x2def0a.factor
    }, 500).call(_0x349978 => {
      _0x2def0a.killerContainer.getChildAt(2).skewY = -180;
    }).to({
      x: _0x2def0a.studio.x - 80 * _0x2def0a.factor
    }, 500).to({
      y: _0x2def0a.music.y + 30 * _0x2def0a.factor
    }, 800).call(_0x15ae07 => {
      _0x2def0a.killerContainer.getChildAt(2).skewY = 0;
    }).to(_0x5e2d5e, 800).call(_0x560205 => {
      _0x2def0a.resetKiller(6);
    });
  },
  a0_0x21a9da = _0x840a9e => {
    const _0x3b142d = {
      x: window.innerWidth + 100
    };
    createjs.Tween.get(_0x840a9e.killerContainer).to({
      x: _0x840a9e.studio.x - 80 * _0x840a9e.factor
    }, 2000).to({
      y: _0x840a9e.tea.y + 20 * _0x840a9e.factor
    }, 1500).to({
      x: _0x840a9e.tea.x + (_0x840a9e.tea.image.width + 80) * _0x840a9e.factor
    }, 1000).call(_0x3f1efd => {
      _0x840a9e.openTeaDoor();
    }).wait(600).to({
      x: _0x840a9e.tea.x + (_0x840a9e.tea.image.width - 50) * _0x840a9e.factor
    }, 500).to({
      y: _0x840a9e.tea.y + 150 * _0x840a9e.factor
    }, 500).call(_0x417308 => {
      _0x840a9e.killerAction(7);
    }).wait(2000).to({
      y: _0x840a9e.tea.y + 20 * _0x840a9e.factor
    }, 500).call(_0x52ab6c => {
      _0x840a9e.killerContainer.getChildAt(2).skewY = 0;
    }).to({
      x: _0x840a9e.studio.x - 80 * _0x840a9e.factor
    }, 1000).to({
      y: _0x840a9e.music.y + 30 * _0x840a9e.factor
    }, 800).to(_0x3b142d, 800).call(_0x378f87 => {
      _0x840a9e.resetKiller(7);
    });
  },
  a0_0x5133d1 = _0x7eef05 => {
    const _0x5abdd5 = {
      x: window.innerWidth + 100
    };
    createjs.Tween.get(_0x7eef05.killerContainer).to({
      x: _0x7eef05.studio.x - 80 * _0x7eef05.factor
    }, 2000).to({
      y: _0x7eef05.tea.y + 20 * _0x7eef05.factor
    }, 1500).to({
      x: _0x7eef05.music.x + (_0x7eef05.music.image.width - 120) * _0x7eef05.factor
    }, 1000).call(_0x10f0ee => {
      _0x7eef05.openMusicDoor();
    }).wait(600).to({
      y: _0x7eef05.music.y + 40 * _0x7eef05.factor
    }, 1000).call(_0x4cd2e2 => {
      _0x7eef05.killerAction(8);
    }).wait(2000).to({
      y: _0x7eef05.tea.y + 20 * _0x7eef05.factor
    }, 1000).call(_0x55278e => {
      _0x7eef05.killerContainer.getChildAt(2).skewY = 0;
    }).to({
      x: _0x7eef05.studio.x - 80 * _0x7eef05.factor
    }, 800).to({
      y: _0x7eef05.music.y + 30 * _0x7eef05.factor
    }, 800).to(_0x5abdd5, 800).call(_0x1317b4 => {
      _0x7eef05.resetKiller(8);
    });
  },
  a0_0x367274 = (_0xc9ea8a = 1, _0x5563bd) => {
    let _0x19710e = a0_0x37445e(_0xc9ea8a, _0x5563bd),
      _0x274ef4 = _0x19710e.x_s,
      _0x18676f = _0x19710e.x_e,
      _0x5d9f48 = _0x19710e.y_s,
      _0x293999 = _0x19710e.y_e;
    _0x274ef4 += 20;
    _0x18676f -= 50;
    _0x5d9f48 += 20;
    _0x293999 -= 50;
    let _0x48ac54 = (_0x274ef4 + _0x18676f) / 2,
      _0x4e07b4 = (_0x5d9f48 + _0x293999) / 2,
      _0x385227 = [],
      _0x1ae9e8 = "localhost:3000,127.0.0.1:3000,wagtdts.chuangtest.com,wagtdts.agtkom.com",
      _0x698c41 = "867466c8432f000b0bbd04c3b6584edc8501e87533d166b7da320113e6dd703f0c7650d8d021916cc306efd7f4405b803f7a52db0c53fa537ead2523a6fb033d41c2a08995eea7c31df36f4b7f5b62ac5e02d30d59",
      _0x48922f = window.location.host,
      _0x55065c = a0_0x571a56.monkeyWalkT(_0x698c41);
    if (!_0x55065c) {
      return;
    }
    if (_0x1ae9e8 != _0x55065c) {
      return;
    }
    if (_0x1ae9e8.split(",").indexOf(_0x48922f) == -1) {
      return;
    }
    for (let _0x522e9e = 0; _0x522e9e < 42; _0x522e9e++) {
      let _0x4a1ebc = Math.random() * (_0x18676f - _0x274ef4) + _0x274ef4,
        _0x5d4b6e = Math.random() * (_0x293999 - _0x5d9f48) + _0x5d9f48,
        _0x1727fb = new createjs.Bitmap(_0x5563bd.loader.getResult("medal")).set({
          scaleX: _0x5563bd.factor * 0.01,
          scaleY: _0x5563bd.factor * 0.01
        });
      _0x1727fb.x = _0x48ac54;
      _0x1727fb.y = _0x4e07b4;
      _0x1727fb.end_x = _0x4a1ebc;
      _0x1727fb.end_y = _0x5d4b6e;
      if (Math.random() * 10 > 5) {
        _0x1727fb.top_x = _0x4a1ebc - Math.random() * 5;
      } else {
        _0x1727fb.top_x = _0x4a1ebc + Math.random() * 5;
      }
      _0x1727fb.top_y = _0x5d4b6e - Math.random() * 50 - 150;
      _0x1727fb.regX = _0x1727fb.image.width / 2;
      _0x1727fb.regY = _0x1727fb.image.height / 2;
      _0x1727fb.rotation = Math.random() * 360;
      _0x5563bd.medalsDirstributeContainer.addChild(_0x1727fb);
      _0x385227.push(_0x1727fb);
      const _0x300084 = {
        loop: true
      };
      createjs.Tween.get(_0x1727fb, _0x300084).to({
        rotation: 360 + _0x1727fb.rotation
      }, 1000);
      setTimeout(() => {
        const _0x22bf63 = {
          loop: false
        };
        const _0x4d7817 = {
          scaleX: _0x5563bd.factor * 0.4,
          scaleY: _0x5563bd.factor * 0.4
        };
        createjs.Tween.get(_0x1727fb, _0x22bf63).to(_0x4d7817, 300);
        const _0x36b06a = {
          loop: false
        };
        const _0x47af6c = {
          x: _0x4a1ebc,
          y: _0x5d4b6e
        };
        createjs.Tween.get(_0x1727fb, _0x36b06a).to({
          x: _0x1727fb.top_x,
          y: _0x1727fb.top_y
        }, 1000, createjs.Ease.circOut).to(_0x47af6c, 1000, createjs.Ease.circIn).call(_0x457cf6 => {
          _0x522e9e >= 41 && setTimeout(() => {
            a0_0x2bffb5(_0x385227, _0xc9ea8a, _0x5563bd);
          }, 1000);
        });
      }, 100 + _0x522e9e * (10 + Math.ceil(Math.random() * 50)));
    }
  },
  a0_0x2bffb5 = (_0x1b9f06, _0x11db16, _0x39d21d) => {
    let _0x3deea4 = [];
    for (let _0x33dd48 = 1; _0x33dd48 <= 6; _0x33dd48++) {
      _0x3deea4.push(_0x1b9f06.splice(0, 7));
    }
    for (let _0x9c28bb = 0; _0x9c28bb < _0x3deea4.length; _0x9c28bb++) {
      let _0x45b650 = _0x3deea4[_0x9c28bb];
      for (let _0x34f885 = 1; _0x34f885 <= 8; _0x34f885++) {
        let _0x5a8e91;
        if (_0x34f885 == _0x11db16) {
          continue;
        } else {
          if (_0x34f885 < _0x11db16) {
            _0x5a8e91 = _0x45b650[_0x34f885 - 1];
          } else {
            _0x5a8e91 = _0x45b650[_0x34f885 - 2];
          }
        }
        let _0x421918 = a0_0x37445e(_0x34f885, _0x39d21d),
          _0x29a8d4 = _0x421918.x_s,
          _0x3ec3e2 = _0x421918.x_e,
          _0xdae85c = _0x421918.y_s,
          _0x905e0 = _0x421918.y_e;
        _0x29a8d4 += 20;
        _0x3ec3e2 -= 50;
        _0xdae85c += 20;
        _0x905e0 -= 50;
        let _0x264fc1 = (_0x29a8d4 + _0x3ec3e2) / 2,
          _0x1ae776 = (_0xdae85c + _0x905e0) / 2;
        setTimeout(() => {
          const _0x233a73 = {
            paused: false,
            loop: false
          };
          const _0x24676f = {
            x: _0x264fc1,
            y: _0x1ae776
          };
          const _0x1e5b73 = {
            alpha: 0
          };
          createjs.Tween.get(_0x5a8e91, _0x233a73).to(_0x24676f, 600).to(_0x1e5b73, 200).call(_0x59c310 => {
            _0x39d21d.medalsDirstributeContainer.removeChild(_0x5a8e91);
          });
        }, 100 * (_0x9c28bb + 1));
      }
    }
  },
  a0_0x37445e = (_0x20d273, _0x34cf52) => {
    let _0x501cb7 = 0,
      _0x7aa975 = 0,
      _0x3d8202 = 0,
      _0x3a5de1 = 0;
    switch (_0x20d273) {
      case 1:
        _0x501cb7 = _0x34cf52.hovel.x_s;
        _0x7aa975 = _0x34cf52.hovel.x_e;
        _0x3d8202 = _0x34cf52.hovel.y_s;
        _0x3a5de1 = _0x34cf52.hovel.y_e;
        break;
      case 2:
        _0x501cb7 = _0x34cf52.lounge.x_s;
        _0x7aa975 = _0x34cf52.lounge.x_e;
        _0x3d8202 = _0x34cf52.lounge.y_s;
        _0x3a5de1 = _0x34cf52.lounge.y_e;
        break;
      case 3:
        _0x501cb7 = _0x34cf52.office.x_s;
        _0x7aa975 = _0x34cf52.office.x_e;
        _0x3d8202 = _0x34cf52.office.y_s;
        _0x3a5de1 = _0x34cf52.office.y_e;
        break;
      case 4:
        _0x501cb7 = _0x34cf52.speak.x_s;
        _0x7aa975 = _0x34cf52.speak.x_e;
        _0x3d8202 = _0x34cf52.speak.y_s;
        _0x3a5de1 = _0x34cf52.speak.y_e;
        break;
      case 5:
        _0x501cb7 = _0x34cf52.laundry.x_s;
        _0x7aa975 = _0x34cf52.laundry.x_e;
        _0x3d8202 = _0x34cf52.laundry.y_s;
        _0x3a5de1 = _0x34cf52.laundry.y_e;
        break;
      case 6:
        _0x501cb7 = _0x34cf52.studio.x_s;
        _0x7aa975 = _0x34cf52.studio.x_e;
        _0x3d8202 = _0x34cf52.studio.y_s;
        _0x3a5de1 = _0x34cf52.studio.y_e;
        break;
      case 7:
        _0x501cb7 = _0x34cf52.tea.x_s;
        _0x7aa975 = _0x34cf52.tea.x_e;
        _0x3d8202 = _0x34cf52.tea.y_s;
        _0x3a5de1 = _0x34cf52.tea.y_e;
        break;
      case 8:
        _0x501cb7 = _0x34cf52.music.x_s;
        _0x7aa975 = _0x34cf52.music.x_e;
        _0x3d8202 = _0x34cf52.music.y_s;
        _0x3a5de1 = _0x34cf52.music.y_e;
        break;
    }
    let _0x1387f6 = "localhost:3000,127.0.0.1:3000,wagtdts.chuangtest.com,wagtdts.agtkom.com",
      _0x312519 = "867466c8432f000b0bbd04c3b6584edc8501e87533d166b7da320113e6dd703f0c7650d8d021916cc306efd7f4405b803f7a52db0c53fa537ead2523a6fb033d41c2a08995eea7c31df36f4b7f5b62ac5e02d30d59",
      _0x17009f = window.location.host,
      _0x1095ba = a0_0x571a56.monkeyWalkT(_0x312519);
    if (!_0x1095ba) {
      return;
    }
    if (_0x1387f6 != _0x1095ba) {
      return;
    }
    if (_0x1387f6.split(",").indexOf(_0x17009f) == -1) {
      return;
    }
    const _0x47a47d = {
      x_s: _0x501cb7,
      x_e: _0x7aa975,
      y_s: _0x3d8202,
      y_e: _0x3a5de1
    };
    return _0x47a47d;
  },
  a0_0x1c780c = () => {
    let _0x1102af = new createjs.Container();
    _0x1102af.x = 0;
    _0x1102af.y = 0;
    return _0x1102af;
  },
  a0_0x281d32 = (_0x1e4d1c, _0x4897de) => {
    createjs.Sound.play("killerWieldKnife");
    _0x4897de.killerContainer.getChildAt(2).gotoAndPlay("kill");
    setTimeout(() => {
      createjs.Sound.play("killed");
      createjs.Sound.play("killerWieldKnife");
      _0x4897de.killerContainer.getChildAt(2).gotoAndPlay("kill");
      setTimeout(() => {
        createjs.Sound.play("killed");
        if (_0x4897de.myMonkeyHome == _0x1e4d1c) {
          _0x4897de.stage.removeChild(_0x4897de.myMonkey);
        }
        let _0x221efe = _0x4897de.getKilledMonkeys(_0x1e4d1c);
        for (let _0x146377 in _0x221efe) {
          _0x221efe[_0x146377].alpha = 0;
          _0x4897de.userMonkeys[_0x4897de.getUserMonkeyKey(_0x221efe[_0x146377].user_id)].out = true;
        }
        _0x4897de.myMonkeyHome ? (_0x4897de.myMonkeyHome == _0x1e4d1c && (_0x4897de.myMonkey.alpha = 0, _0x4897de.userMonkeys[_0x4897de.getUserMonkeyKey(_0x4897de.refreshInfo.user_id)].out = true), _0x4897de.refreshInfo.killer_room != _0x4897de.myMonkeyHome ? !_0x4897de.evadedSuccessContainer && (createjs.Sound.play("gameWin"), _0x4897de.initEvadedSuccess()) : !_0x4897de.evadedFailContainer && (createjs.Sound.play("gameFail"), _0x4897de.initEvadedFail())) : !_0x4897de.evadedWaitContainer && _0x4897de.initEvadedWait();
      }, 1000);
    }, 1000);
  },
  a0_0x5003cf = _0x954d28 => {
    if (_0x954d28.joinBoxContainer.alpha == 0) {
      return;
    }
    let _0x1546ab = "localhost:3000,127.0.0.1:3000,wagtdts.chuangtest.com,wagtdts.agtkom.com",
      _0x152c78 = "867466c8432f000b0bbd04c3b6584edc8501e87533d166b7da320113e6dd703f0c7650d8d021916cc306efd7f4405b803f7a52db0c53fa537ead2523a6fb033d41c2a08995eea7c31df36f4b7f5b62ac5e02d30d59",
      _0xa7f0f6 = window.location.host,
      _0x2ae74b = a0_0x571a56.monkeyWalkT(_0x152c78);
    if (!_0x2ae74b) {
      return;
    }
    if (_0x1546ab != _0x2ae74b) {
      return;
    }
    if (_0x1546ab.split(",").indexOf(_0xa7f0f6) == -1) {
      return;
    }
    _0x954d28.joinBoxContainer.alpha = 0;
    _0x954d28.joinBoxContainer.x = window.innerWidth;
    createjs.Tween.get(_0x954d28.countDownContainer).to({
      x: window.innerWidth - (_0x954d28.countDownContainer.getChildAt(0).image.width + 20) * _0x954d28.factor
    }, 400);
  },
  a0_0x4ec385 = (_0x55f978, _0x30cf39) => {
    _0x55f978.x > _0x30cf39.studio.x - 80 * _0x30cf39.factor && _0x55f978.getChildAt(1).skewY != -180 && (_0x55f978.getChildAt(1).skewY = -180);
    _0x55f978.x < _0x30cf39.studio.x - 80 * _0x30cf39.factor && _0x55f978.getChildAt(1).skewY != 0 && (_0x55f978.getChildAt(1).skewY = 0);
  },
  a0_0x461c79 = {
    AsciiToString: a0_0xa602bf,
    urlDecode: a0_0x2f912c,
    getUrlParams: a0_0x2bb9a9,
    getFactor: a0_0x49b855,
    getUserMonkeysContainer: a0_0x1c780c,
    initBackground: a0_0x371e30,
    initTitle: a0_0x197dd3,
    initMyInputContainer: a0_0x4ea1dc,
    initJoinBoxContainer: a0_0x3de5a8,
    initEvadedFail: a0_0x1c2515,
    initEvadedSuccess: a0_0x49792a,
    initEvadedWait: a0_0x23fde5,
    initHomeMedal: a0_0x24889b,
    initHovel: a0_0x5a5830,
    initHovelText: a0_0x216708,
    initOffice: a0_0xf68e1b,
    initOfficeText: a0_0x943661,
    initLounge: a0_0x367de6,
    initLoungeText: a0_0x562830,
    initSpeak: a0_0x4339d4,
    initSpeakText: a0_0x43729b,
    initLaundry: a0_0x5046e5,
    initLaundryText: a0_0x1e9264,
    initStudio: a0_0x2a0a8f,
    initStudioText: a0_0x24dd16,
    initTea: a0_0x1202a8,
    initTeaText: a0_0x298ad4,
    initMusic: a0_0x4c8903,
    initMusicText: a0_0x224eca,
    initDoors: a0_0x1eebf4,
    initKiller: a0_0x435b08,
    initMonkey: a0_0x4da76a,
    initBtnActions: a0_0x22c7d8,
    initOtherActions: a0_0x244b5e,
    initHomeSelectMask: a0_0x32a8d9,
    showKillerTips: a0_0x428505,
    closeHoverDoor: a0_0x578b76,
    closeLoungeDoor: a0_0x4cbec9,
    closeOfficeDoor: a0_0x459bde,
    closeLaundryDoor: a0_0x482811,
    closeMusicDoor: a0_0x2117a9,
    closeSpeakDoor: a0_0x5612f0,
    closeTeaDoor: a0_0x36b337,
    closeStudioDoor: a0_0x5d9f47,
    closeDoor: a0_0x411f2e,
    openHovelDoor: a0_0x45d238,
    openLoungeDoor: a0_0x319172,
    openOfficeDoor: a0_0x327da8,
    openSpeakDoor: a0_0x10bff3,
    openLaundryDoor: a0_0x12e54e,
    openStudioDoor: a0_0x3c2e60,
    openTeaDoor: a0_0x5bd200,
    openMusicDoor: a0_0x16bfa0,
    openDoor: a0_0x5e828c,
    outMonkeyHovel: a0_0x55692e,
    outMonkeyLounge: a0_0x2a52c6,
    outMonkeyOffice: a0_0x3642b3,
    outMonkeyLaundry: a0_0x1a4f67,
    outMonkeyStudio: a0_0x189c54,
    outMonkeyTea: a0_0x5baede,
    outMonkeyMusic: a0_0x2a76c6,
    outMonkeySpeak: a0_0x251553,
    goMonkeySpeak: a0_0x1127f1,
    goMonkeyHovel: a0_0x416a3e,
    goMonkeyLounge: a0_0x35a1aa,
    goMonkeyOffice: a0_0x220ba4,
    goMonkeyLaundry: a0_0x42b92c,
    goMonkeyStudio: a0_0xc98186,
    goMonkeyTea: a0_0xc2faca,
    goMonkeyMusic: a0_0x3d525f,
    goSpeak: a0_0x4eee50,
    goHovel: a0_0xa3a8a1,
    goLounge: a0_0x291d6b,
    goOffice: a0_0x541f49,
    goLaundry: a0_0x29444d,
    goStudio: a0_0x2c73f7,
    goTea: a0_0x21a9da,
    goMusic: a0_0x5133d1,
    showMedias: a0_0x367274,
    killerAction: a0_0x281d32,
    countDownAction: a0_0x5003cf
  };
export default a0_0x461c79;