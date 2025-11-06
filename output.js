//Thu Nov 06 2025 12:01:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let data = null,
  currentMapID = null,
  zoomFactor = 1.315,
  offsetX = -60.3,
  offsetY = -148.5,
  angleOffset = -180,
  direction = 0;
const correctionValues = [[-1, 0, 0, -1], [-1, 0, 0, 1], [1, 0, 0, -1], [1, 0, 0, 1], [0, -1, -1, 0], [0, -1, 1, 0], [0, 1, -1, 0], [0, 1, 1, 0]];
let a = correctionValues[0][0],
  b = correctionValues[0][1],
  c = correctionValues[0][2],
  d = correctionValues[0][3];
function updateOptions() {
  if (data) {
    const _0x1e2a37 = document.getElementById("playerSelector"),
      _0x4c22c8 = _0x1e2a37.value;
    var _0x71bd26;
    _0x1e2a37.innerHTML = "";
    data.data.forEach(_0x22663e => {
      {
        var _0x38708c = document.createElement("option");
        "0" !== _0x22663e.mingzi && 0 !== _0x22663e.Xueliang && (_0x38708c.text = _0x22663e.mingzi, _0x1e2a37.add(_0x38708c));
      }
    });
    Array.from(_0x1e2a37.options).some(_0x4b239a => _0x4b239a.text === _0x4c22c8) || ((_0x71bd26 = document.createElement("option")).text = _0x4c22c8, _0x1e2a37.add(_0x71bd26));
    _0x1e2a37.value = _0x4c22c8;
  }
}
function moveDiv(_0x2739e3, _0x2b6759, _0x1557fc) {
  var _0x2b965b = document.getElementById("canvas-container");
  _0x2b965b.style.left = 256 - _0x2739e3 + "px";
  _0x2b965b.style.top = 256 - _0x2b6759 + "px";
  _0x2b965b.style.transformOrigin = _0x2739e3 + "px " + _0x2b6759 + "px";
  _0x2b965b.style.transform = "rotate(" + _0x1557fc + "deg)";
}
let reverseAngle = 0;
function drawCanvas() {
  if (data) {
    {
      const _0x4ae958 = document.getElementById("drawLines").checked,
        _0x50d1af = document.getElementById("drawNames").checked,
        _0x3d470f = document.getElementById("drawHPs").checked,
        _0x209ccc = document.getElementById("drawFriends").checked,
        _0x198724 = document.getElementById("drawFollow").checked,
        _0x36000c = document.getElementById("playerSize").value,
        _0x18c49c = document.getElementById("playerSelector").selectedOptions[0].textContent,
        _0x180517 = document.getElementById("drawQQs").checked;
      var _0x5e347e = document.getElementById("canvas");
      const _0x5d761f = _0x5e347e.getContext("2d");
      _0x5e347e.width = 2 * _0x5e347e.clientWidth;
      _0x5e347e.height = 2 * _0x5e347e.clientHeight;
      _0x5d761f.scale(2, 2);
      _0x5d761f.imageSmoothingEnabled = true;
      _0x5d761f.clearRect(0, 0, _0x5e347e.clientWidth, _0x5e347e.clientHeight);
      data.data.forEach(_0x611870 => {
        var _0x29497f,
          _0x5b38db = _0x611870.camp,
          _0x11b18e = _0x611870.Xueliang,
          _0x4e1611 = _0x611870.xaxis,
          _0x32ba24 = _0x611870.yaxis,
          _0x5546fa = _0x611870.Angle + angleOffset,
          _0x19eb2f = _0x611870.mingzi,
          _0x33d181 = _0x611870.qq,
          _0x1fb69e = _0x4e1611;
        if ("0" !== _0x19eb2f && 0 !== _0x611870.Xueliang) {
          var _0x4e1611 = a * _0x32ba24 + b * _0x4e1611,
            _0x32ba24 = c * _0x32ba24 + d * _0x1fb69e,
            _0x411790 = 512 * (20000 + _0x4e1611) / 40000 * zoomFactor + offsetX,
            _0x48acb1 = 512 * (20000 + _0x32ba24) / 40000 * zoomFactor + offsetY;
          if ("请选择队友" === _0x18c49c ? 6 === _0x5b38db && (_0x5b38db = 2) : (6 === _0x5b38db && (_0x5b38db = 0), _0x19eb2f === _0x18c49c && (_0x5b38db = 2)), 0 !== _0x5b38db || false !== _0x209ccc) {
            switch (_0x5b38db) {
              case 0:
                _0x29497f = document.getElementById("type0").value;
                break;
              case 1:
                _0x29497f = document.getElementById("type1").value;
                break;
              case 2:
                _0x29497f = document.getElementById("type2").value;
                _0x198724 && moveDiv(_0x411790, _0x48acb1, 270 - _0x5546fa);
                reverseAngle = _0x5546fa + 90;
                break;
              case 3:
                _0x29497f = document.getElementById("type3").value;
                break;
              default:
                _0x29497f = "black";
            }
            if (_0x198724 || (moveDiv(256, 256, 0), reverseAngle = 0), _0x5d761f.beginPath(), _0x5d761f.fillStyle = _0x29497f, _0x5d761f.arc(_0x411790, _0x48acb1, _0x36000c - 0.6, 0, 2 * Math.PI), _0x5d761f.fill(), _0x5d761f.strokeStyle = "white", _0x5d761f.lineWidth = 0.6, _0x5d761f.beginPath(), _0x5d761f.arc(_0x411790, _0x48acb1, _0x36000c, 0, 2 * Math.PI), _0x5d761f.stroke(), _0x4ae958) {
              _0x5d761f.beginPath();
              let _0x593fd6, _0x350236, _0x4fae88;
              switch (_0x5b38db) {
                case 2:
                  _0x593fd6 = (_0x5546fa - 8) * Math.PI / 180;
                  _0x350236 = (_0x5546fa + 8) * Math.PI / 180;
                  _0x4fae88 = 30;
                  break;
                case 0:
                  _0x593fd6 = (_0x5546fa - 16.5) * Math.PI / 180;
                  _0x350236 = (_0x5546fa + 16.5) * Math.PI / 180;
                  _0x4fae88 = 13;
                  break;
                default:
                  _0x593fd6 = (_0x5546fa - 16.5) * Math.PI / 180;
                  _0x350236 = (_0x5546fa + 16.5) * Math.PI / 180;
                  _0x4fae88 = 26;
              }
              _0x5d761f.moveTo(_0x411790, _0x48acb1);
              _0x5d761f.arc(_0x411790, _0x48acb1, _0x4fae88, _0x593fd6, _0x350236, false);
              let _0x3430b0 = _0x5d761f.createRadialGradient(_0x411790, _0x48acb1, 0, _0x411790, _0x48acb1, _0x4fae88);
              _0x3430b0.addColorStop(0, "rgba(255, 255, 255, 1)");
              _0x3430b0.addColorStop(1, "rgba(255, 255, 255, 0.3)");
              _0x5d761f.fillStyle = _0x3430b0;
              _0x5d761f.globalAlpha = 0.9;
              _0x5d761f.fill();
              _0x5d761f.globalAlpha = 1;
            }
            (_0x50d1af || _0x3d470f || _0x180517) && (_0x5d761f.save(), _0x5d761f.translate(_0x411790, _0x48acb1), _0x5d761f.rotate(reverseAngle * Math.PI / 180), _0x5d761f.translate(-_0x411790, -_0x48acb1), _0x180517 && _0x33d181 && (_0x5d761f.font = "8px Arial, 黑体", _0x5d761f.strokeStyle = "white", _0x5d761f.lineWidth = 1, _0x5d761f.strokeText(_0x33d181, _0x411790 - 11, _0x48acb1 - 15), _0x5d761f.fillStyle = "#FF69B4", _0x5d761f.fillText(_0x33d181, _0x411790 - 11, _0x48acb1 - 15)), _0x50d1af && (_0x5d761f.font = "8px Arial, 黑体", _0x5d761f.strokeStyle = "white", _0x5d761f.lineWidth = 1, _0x5d761f.strokeText(_0x19eb2f, _0x411790 - 11, _0x48acb1 + (_0x180517 && _0x33d181 ? 1 : 11)), _0x5d761f.fillStyle = "#007BA7", _0x5d761f.fillText(_0x19eb2f, _0x411790 - 11, _0x48acb1 + (_0x180517 && _0x33d181 ? 1 : 11))), _0x3d470f && (_0x5d761f.fillStyle = "LightCyan", _0x5d761f.font = "10px Arial, 宋体", _0x5d761f.fillText(_0x11b18e, _0x411790 - 6, _0x48acb1 - 5)), _0x5d761f.restore());
          }
        }
      });
    }
  }
}
function analysis(_0x3ed960) {
  try {
    {
      var _0x1b6221 = JSON.parse(_0x3ed960),
        _0xf1926a = parseInt(_0x1b6221.map, 10);
      if (_0xf1926a !== currentMapID) {
        let _0x20685c = "";
        switch (currentMapID = _0xf1926a) {
          case 0:
            _0x20685c = "港口-竞技荣耀-保卫者专用.png";
            zoomFactor = 1.518;
            offsetX = -130.4;
            offsetY = -237.5;
            direction = 5;
            angleOffset = 90;
            break;
          case 1:
            _0x20685c = "港口-竞技荣耀-潜伏者专用.png";
            zoomFactor = 1.518;
            offsetX = -153.8;
            offsetY = -73.4;
            direction = 6;
            angleOffset = -90;
            break;
          case 2:
            _0x20685c = "港口-世界冠军AG-保卫者专用.png";
            zoomFactor = 1.379;
            offsetX = -122.1;
            offsetY = -59.7;
            direction = 5;
            angleOffset = 90;
            break;
          case 3:
            _0x20685c = "港口-世界冠军AG-潜伏者专用.png";
            zoomFactor = 1.342;
            offsetX = -115.1;
            offsetY = -123.7;
            direction = 6;
            angleOffset = -90;
            break;
          case 4:
            _0x20685c = "供电所-保卫者专用.png";
            zoomFactor = 1.2;
            offsetX = -76.8;
            offsetY = -23.8;
            direction = 3;
            angleOffset = 0;
            break;
          case 5:
            _0x20685c = "供电所-潜伏者专用.png";
            zoomFactor = 1.2;
            offsetX = -61.8;
            offsetY = -92.1;
            direction = 0;
            angleOffset = 180;
            break;
          case 6:
            _0x20685c = "黑色城镇-保卫者专用.png";
            zoomFactor = 1.315;
            offsetX = -73.8;
            offsetY = -100.8;
            direction = 0;
            angleOffset = -180;
            break;
          case 7:
            _0x20685c = "黑色城镇-潜伏者专用.png";
            zoomFactor = 1.315;
            offsetX = -105.1;
            offsetY = -75.4;
            direction = 3;
            angleOffset = 0;
            break;
          case 8:
            _0x20685c = "潜艇-保卫者专用.png";
            zoomFactor = 1.635;
            offsetX = -85.1;
            offsetY = -210.3;
            direction = 3;
            angleOffset = 0;
            break;
          case 9:
            _0x20685c = "潜艇-潜伏者专用.png";
            zoomFactor = 1.635;
            offsetX = -263;
            offsetY = -123.5;
            direction = 0;
            angleOffset = 180;
            break;
          case 10:
            _0x20685c = "卫星基地-竞技荣耀-保卫者专用.png";
            zoomFactor = 1.355;
            offsetX = -93.5;
            offsetY = -87.9;
            direction = 5;
            angleOffset = 90;
            break;
          case 11:
            _0x20685c = "卫星基地-竞技荣耀-潜伏者专用.png";
            zoomFactor = 1.355;
            offsetX = -108;
            offsetY = -71.3;
            direction = 6;
            angleOffset = -90;
            break;
          case 12:
            _0x20685c = "新黑色城镇-保卫者专用.png";
            zoomFactor = 1.315;
            offsetX = -60.3;
            offsetY = -148.5;
            direction = 0;
            angleOffset = -180;
            break;
          case 13:
            _0x20685c = "新黑色城镇-潜伏者专用.png";
            zoomFactor = 1.315;
            offsetX = -87;
            offsetY = -62.9;
            direction = 3;
            angleOffset = 0;
            break;
          case 14:
            _0x20685c = "新年广场-保卫者专用.png";
            zoomFactor = 1.749;
            offsetX = -189.2;
            offsetY = -189.7;
            direction = 5;
            angleOffset = 90;
            break;
          case 15:
            _0x20685c = "新年广场-潜伏者专用.png";
            zoomFactor = 1.749;
            offsetX = -174.1;
            offsetY = -216.2;
            direction = 3;
            angleOffset = 0;
            break;
          case 16:
            _0x20685c = "新潜艇-保卫者专用.png";
            zoomFactor = 1.625;
            offsetX = -167.9;
            offsetY = -162.3;
            direction = 3;
            angleOffset = 0;
            break;
          case 17:
            _0x20685c = "新潜艇-潜伏者专用.png";
            zoomFactor = 1.625;
            offsetX = -187.3;
            offsetY = -176.2;
            direction = 0;
            angleOffset = 180;
            break;
          case 18:
            _0x20685c = "新沙漠-灰-保卫者专用.png";
            zoomFactor = 1.285;
            offsetX = -98.4;
            offsetY = -128.7;
            direction = 0;
            angleOffset = 180;
            break;
          case 19:
            _0x20685c = "新沙漠-灰-潜伏者专用.png";
            zoomFactor = 1.285;
            offsetX = -54.9;
            offsetY = -72.4;
            direction = 3;
            angleOffset = 0;
            break;
          case 20:
            _0x20685c = "新沙丘-保卫者专用.png";
            zoomFactor = 1.668;
            offsetX = -191.1;
            offsetY = -203;
            direction = 5;
            angleOffset = 90;
            break;
          case 21:
            _0x20685c = "新沙丘-潜伏者专用.png";
            zoomFactor = 1.668;
            offsetX = -211.1;
            offsetY = -101.8;
            direction = 6;
            angleOffset = -90;
            break;
          case 22:
            _0x20685c = "新卫星基地-保卫者专用.png";
            zoomFactor = 1.288;
            offsetX = -66.2;
            offsetY = -83.8;
            direction = 5;
            angleOffset = 90;
            break;
          case 23:
            _0x20685c = "新卫星基地-潜伏者专用.png";
            zoomFactor = 1.288;
            offsetX = -104.1;
            offsetY = -68.6;
            direction = 6;
            angleOffset = -90;
            break;
          case 24:
            _0x20685c = "新鹰眼-CFPL十周年纪念版-保卫者专用.png";
            zoomFactor = 1.62;
            offsetX = -195.4;
            offsetY = -198.2;
            direction = 5;
            angleOffset = 90;
            break;
          case 25:
            _0x20685c = "新鹰眼-CFPL十周年纪念版-潜伏者专用.png";
            zoomFactor = 1.62;
            offsetX = -143.4;
            offsetY = -179.5;
            direction = 6;
            angleOffset = -90;
            break;
          case 26:
            _0x20685c = "异域小城-世界冠军Q9-保卫者专用.png";
            zoomFactor = 1.315;
            offsetX = -83.1;
            offsetY = -127.4;
            direction = 5;
            angleOffset = 90;
            break;
          case 27:
            _0x20685c = "异域小城-世界冠军Q9-潜伏者专用.png";
            zoomFactor = 1.315;
            offsetX = -99.7;
            offsetY = -90;
            direction = 6;
            angleOffset = -90;
            break;
          case 28:
            _0x20685c = "鹰眼-保卫者专用.png";
            zoomFactor = 1.54;
            offsetX = -147.6;
            offsetY = -119.2;
            direction = 5;
            angleOffset = 90;
            break;
          case 29:
            _0x20685c = "鹰眼-潜伏者专用.png";
            zoomFactor = 1.54;
            offsetX = -153.8;
            offsetY = -179.5;
            direction = 6;
            angleOffset = -90;
            break;
          case 30:
            _0x20685c = "新运输船-保卫者专用.png";
            zoomFactor = 3.093;
            offsetX = -536.8;
            offsetY = -458.4;
            direction = 3;
            angleOffset = 0;
            break;
          case 31:
            _0x20685c = "新运输船-潜伏者专用.png";
            zoomFactor = 3.142;
            offsetX = -551.3;
            offsetY = -645.7;
            direction = 0;
            angleOffset = -180;
            break;
          case 32:
            _0x20685c = "新姑苏-保卫者专用.png";
            zoomFactor = 1.648;
            offsetX = -191.3;
            offsetY = -194.1;
            direction = 5;
            angleOffset = 90;
            break;
          case 33:
            _0x20685c = "新姑苏-潜伏者专用.png";
            zoomFactor = 1.648;
            offsetX = -168.4;
            offsetY = -165.1;
            direction = 6;
            angleOffset = -90;
            break;
          case 34:
            _0x20685c = "供电所-竞技荣耀-保卫者专用.png";
            zoomFactor = 1.588;
            offsetX = -143;
            offsetY = -102.5;
            direction = 3;
            angleOffset = 0;
            break;
          case 35:
            _0x20685c = "供电所-竞技荣耀-潜伏者专用.png";
            zoomFactor = 1.588;
            offsetX = -168.4;
            offsetY = -189;
            direction = 0;
            angleOffset = -180;
            break;
          case 36:
            _0x20685c = "新沙漠-灰-保卫者专用.png";
            zoomFactor = 1.285;
            offsetX = -78.9;
            offsetY = -137.9;
            direction = 0;
            angleOffset = 180;
            break;
          case 37:
            _0x20685c = "新沙漠-灰-潜伏者专用.png";
            zoomFactor = 1.285;
            offsetX = -70.6;
            offsetY = -65;
            direction = 3;
            angleOffset = 0;
            break;
          case 38:
            _0x20685c = "巷战-保卫者专用.png";
            zoomFactor = 2.525;
            offsetX = -406.8;
            offsetY = -405.4;
            direction = 6;
            angleOffset = -90;
            break;
          case 39:
            _0x20685c = "巷战-潜伏者专用.png";
            zoomFactor = 2.525;
            offsetX = -397.3;
            offsetY = -401.1;
            direction = 5;
            angleOffset = 90;
            break;
          case 40:
            _0x20685c = "新沙漠TD-保卫者专用.png";
            zoomFactor = 2.525;
            offsetX = -406.8;
            offsetY = -405.4;
            direction = 6;
            offsetY = -90;
            break;
          case 41:
            _0x20685c = "新沙漠TD-潜伏者专用.png";
            zoomFactor = 2.525;
            offsetX = -397.3;
            offsetY = -401.1;
            direction = 5;
            angleOffset = 90;
            break;
          case 42:
            _0x20685c = "新金字塔-保卫者专用.png";
            zoomFactor = 2.525;
            offsetX = -406.8;
            offsetY = -405.4;
            direction = 6;
            angleOffset = -90;
            break;
          case 43:
            _0x20685c = "新金字塔-潜伏者专用.png";
            zoomFactor = 2.525;
            offsetX = -397.3;
            offsetY = -401.1;
            direction = 5;
            angleOffset = 90;
            break;
          case 44:
            _0x20685c = "异域小城-竞技荣耀-保卫者专用.png";
            zoomFactor = 1.336;
            offsetX = -80.2;
            offsetY = -80.4;
            direction = 5;
            angleOffset = 90;
            break;
          case 45:
            _0x20685c = "异域小城-竞技荣耀-潜伏者专用.png";
            zoomFactor = 1.336;
            offsetX = -90.1;
            offsetY = -98.8;
            direction = 6;
            angleOffset = -90;
            break;
          case 46:
            _0x20685c = "锦官城-保卫者专用.png";
            zoomFactor = 2.08;
            offsetX = -260.6;
            offsetY = -284.2;
            direction = 5;
            angleOffset = 90;
            break;
          case 47:
            _0x20685c = "锦官城-潜伏者专用.png";
            zoomFactor = 2.08;
            offsetX = -308.5;
            offsetY = -284.2;
            direction = 6;
            angleOffset = -90;
            break;
          case 100:
            _0x20685c = "守望之城.png";
            zoomFactor = 2.03;
            offsetX = -255.9;
            offsetY = -243.8;
            direction = 6;
            angleOffset = -90;
            break;
          case 200:
            _0x20685c = "屋顶机场.png";
            zoomFactor = 1.78;
            offsetX = -227;
            offsetY = -204.8;
            direction = 5;
            angleOffset = 90;
            break;
          case 300:
            _0x20685c = "地下研究所.png";
            zoomFactor = 2.19;
            offsetX = -308.4;
            offsetY = -318.4;
            direction = 0;
            angleOffset = 180;
            break;
          case 400:
            _0x20685c = "胜利广场.png";
            zoomFactor = 1.749;
            offsetX = -193;
            offsetY = -189.7;
            direction = 5;
            angleOffset = 90;
            break;
          case 500:
            _0x20685c = "失落的遗迹.png";
            zoomFactor = 1.78;
            offsetX = -208.4;
            offsetY = -183.7;
            direction = 0;
            angleOffset = 180;
            break;
          case 600:
            _0x20685c = "狼穴.png";
            zoomFactor = 1.86;
            offsetX = -237.1;
            offsetY = -310.6;
            direction = 6;
            angleOffset = -90;
            break;
          default:
            _0x20685c = "黑.png";
        }
        [a, b, c, d] = correctionValues[direction];
        document.getElementById("canvas-container").style.backgroundImage = "url(maps/" + _0x20685c + ")";
      }
      data = _0x1b6221;
      return true;
    }
  } catch (_0x5daf4a) {}
}
function test() {
  analysis("{\"map\": 2,\"info\":[[0,100,237.2,200.3,270.0,\"佳鹏哥哥\",\"123456\"],[0,100,250.1,305.9,271.0,\"队友A\",\"234567\"],[0,100,220.1,365.9,269.0,\"队友B\",\"345678\"],[1,100,234.4,79.1,434.9,\"敌人\",\"456789\"],[1,100,234.4,90.1,435.9,\"敌人\",\"567890\"],[1,100,234.4,110.1,433.9,\"敌人\",\"678901\"]]}");
  updateOptions();
  document.getElementById("playerSelector").value = "佳鹏哥哥";
  drawCanvas();
}
function verification() {
  var _0x5a05e2 = new Date().getTime();
  return !(2553506483 < Math.floor(_0x5a05e2 / 1000));
}
function display() {
  var _0x546f9e = document.getElementById("toggleButton"),
    _0x2abd12 = document.getElementById("menuContent"),
    _0x5c402b = document.getElementById("input-container"),
    _0x452c79 = document.getElementById("tips");
  "none" === _0x2abd12.style.display ? (_0x2abd12.style.display = "block", _0x5c402b.style.height = "auto", _0x5c402b.style.width = "250px", _0x452c79.style.display = "block", _0x546f9e.innerHTML = ">>>>菜单<<<<", _0x5c402b.style.background = "#2b2b2b") : (_0x2abd12.style.display = "none", _0x5c402b.style.height = _0x546f9e.style.height, _0x5c402b.style.width = "auto", _0x5c402b.style.background = "rgba(255,255,255,0)", _0x452c79.style.display = "none", _0x546f9e.innerHTML = "<>");
}
const url = new URL(window.location),
  params = new URLSearchParams(url.search),
  key = params.get("key");
console.log("Key:", key);
var hostname = url.hostname;
function createWebSocket(_0x522ee6) {
  var _0x34233c = new WebSocket("ws://" + _0x522ee6 + ":" + port);
  _0x34233c.onopen = () => {
    console.log("已连接到 WebSocket 服务器");
    _0x34233c.send(key);
  };
  _0x34233c.onmessage = _0x277d17 => {
    verification() && (console.log("收到消息:", _0x277d17.data), analysis(_0x277d17.data)) && drawCanvas();
  };
  _0x34233c.onclose = () => {
    _0x34233c.close();
    _0x34233c = null;
    console.log("WebSocket 连接已关闭");
    setTimeout(() => createWebSocket(_0x522ee6), 1000);
  };
  _0x34233c.onerror = _0x31d193 => {
    _0x34233c.close();
    _0x34233c = null;
    console.log("WebSocket 错误:", _0x31d193);
    setTimeout(() => createWebSocket(_0x522ee6), 1000);
  };
  return _0x34233c;
}
port = 9503;
console.log("Hostname:", hostname);
key && createWebSocket(hostname);