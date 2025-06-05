//Thu Jun 05 2025 13:20:49 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let data = null;
let currentMapID = null;
let zoomFactor = 1.315;
let offsetX = -60.3;
let offsetY = -148.5;
let angleOffset = -180;
let direction = 0;
const correctionValues = [[-1, 0, 0, -1], [-1, 0, 0, 1], [1, 0, 0, -1], [1, 0, 0, 1], [0, -1, -1, 0], [0, -1, 1, 0], [0, 1, -1, 0], [0, 1, 1, 0]];
let a = correctionValues[0][0];
let b = correctionValues[0][1];
let c = correctionValues[0][2];
let d = correctionValues[0][3];
function updateOptions() {
  if (!data) {
    return;
  }
  const _0x26940b = document.getElementById("playerSelector");
  const _0x27ab12 = _0x26940b.value;
  _0x26940b.innerHTML = "";
  data.data.forEach(_0x17ea12 => {
    const _0x4602dd = document.createElement("option");
    if (_0x17ea12.mingzi === "0") {
      return;
    }
    if (_0x17ea12.Xueliang === 0) {
      return;
    }
    _0x4602dd.text = _0x17ea12.mingzi;
    _0x26940b.add(_0x4602dd);
  });
  if (!Array.from(_0x26940b.options).some(_0x4a0166 => _0x4a0166.text === _0x27ab12)) {
    const _0x2aad67 = document.createElement("option");
    _0x2aad67.text = _0x27ab12;
    _0x26940b.add(_0x2aad67);
  }
  _0x26940b.value = _0x27ab12;
}
function moveDiv(_0xa11262, _0xdfadf7, _0x5a5016) {
  const _0x106db6 = document.getElementById("canvas-container");
  _0x106db6.style.left = 256 - _0xa11262 + "px";
  _0x106db6.style.top = 256 - _0xdfadf7 + "px";
  _0x106db6.style.transformOrigin = _0xa11262 + "px " + _0xdfadf7 + "px";
  _0x106db6.style.transform = "rotate(" + _0x5a5016 + "deg)";
}
let reverseAngle = 0;
function drawCanvas() {
  if (!data) {
    return;
  }
  const _0x1ee776 = document.getElementById("drawLines").checked;
  const _0x2043c1 = document.getElementById("drawNames").checked;
  const _0x554381 = document.getElementById("drawHPs").checked;
  const _0x2f22ad = document.getElementById("drawFriends").checked;
  const _0x2f4dda = document.getElementById("drawFollow").checked;
  const _0x37be0c = document.getElementById("playerSize").value;
  const _0x513a6c = document.getElementById("playerSelector").selectedOptions[0].textContent;
  const _0x4b7888 = document.getElementById("canvas");
  const _0x88a7d6 = _0x4b7888.getContext("2d");
  const _0x59d66b = 2;
  _0x4b7888.width = _0x4b7888.clientWidth * _0x59d66b;
  _0x4b7888.height = _0x4b7888.clientHeight * _0x59d66b;
  _0x88a7d6.scale(_0x59d66b, _0x59d66b);
  _0x88a7d6.imageSmoothingEnabled = true;
  _0x88a7d6.clearRect(0, 0, _0x4b7888.clientWidth, _0x4b7888.clientHeight);
  data.data.forEach(_0x41cfbc => {
    var _0x2792d7 = _0x41cfbc.camp;
    var _0x2c6598 = _0x41cfbc.Xueliang;
    var _0x15035a = _0x41cfbc.xaxis;
    var _0x34172e = _0x41cfbc.yaxis;
    var _0x412e96 = _0x41cfbc.Angle + angleOffset;
    var _0x4be42b = _0x41cfbc.mingzi;
    var _0x312f41 = _0x15035a;
    var _0x3aed98;
    if (_0x4be42b === "0") {
      return;
    }
    if (_0x41cfbc.Xueliang === 0) {
      return;
    }
    _0x15035a = a * _0x34172e + b * _0x15035a;
    _0x34172e = c * _0x34172e + d * _0x312f41;
    var _0x38bb8b = (_0x15035a + 20000) * 512 / 40000 * zoomFactor + offsetX;
    var _0x5821bf = (_0x34172e + 20000) * 512 / 40000 * zoomFactor + offsetY;
    _0x513a6c === "请选择队友" ? _0x2792d7 === 6 && (_0x2792d7 = 2) : (_0x2792d7 === 6 && (_0x2792d7 = 0), _0x4be42b === _0x513a6c && (_0x2792d7 = 2));
    if (_0x2792d7 === 0 && _0x2f22ad === false) {
      return;
    }
    switch (_0x2792d7) {
      case 0:
        _0x3aed98 = document.getElementById("type0").value;
        break;
      case 1:
        _0x3aed98 = document.getElementById("type1").value;
        break;
      case 2:
        _0x3aed98 = document.getElementById("type2").value;
        _0x2f4dda && moveDiv(_0x38bb8b, _0x5821bf, -_0x412e96 + 270);
        reverseAngle = _0x412e96 + 90;
        break;
      case 3:
        _0x3aed98 = document.getElementById("type3").value;
        break;
      default:
        _0x3aed98 = "black";
    }
    !_0x2f4dda && (moveDiv(256, 256, 0), reverseAngle = 0);
    _0x88a7d6.beginPath();
    _0x88a7d6.fillStyle = _0x3aed98;
    _0x88a7d6.arc(_0x38bb8b, _0x5821bf, _0x37be0c - 0.6, 0, Math.PI * 2);
    _0x88a7d6.fill();
    _0x88a7d6.strokeStyle = "white";
    _0x88a7d6.lineWidth = 0.6;
    _0x88a7d6.beginPath();
    _0x88a7d6.arc(_0x38bb8b, _0x5821bf, _0x37be0c, 0, Math.PI * 2);
    _0x88a7d6.stroke();
    if (_0x1ee776) {
      _0x88a7d6.beginPath();
      let _0x305dfc;
      let _0x4ff104;
      let _0x5e6e76;
      switch (_0x2792d7) {
        case 2:
          _0x305dfc = (_0x412e96 - 8) * Math.PI / 180;
          _0x4ff104 = (_0x412e96 + 8) * Math.PI / 180;
          _0x5e6e76 = 30;
          break;
        case 0:
          _0x305dfc = (_0x412e96 - 16.5) * Math.PI / 180;
          _0x4ff104 = (_0x412e96 + 16.5) * Math.PI / 180;
          _0x5e6e76 = 13;
          break;
        case 1:
        default:
          _0x305dfc = (_0x412e96 - 16.5) * Math.PI / 180;
          _0x4ff104 = (_0x412e96 + 16.5) * Math.PI / 180;
          _0x5e6e76 = 26;
      }
      _0x88a7d6.moveTo(_0x38bb8b, _0x5821bf);
      _0x88a7d6.arc(_0x38bb8b, _0x5821bf, _0x5e6e76, _0x305dfc, _0x4ff104, false);
      let _0x53ff0b = _0x88a7d6.createRadialGradient(_0x38bb8b, _0x5821bf, 0, _0x38bb8b, _0x5821bf, _0x5e6e76);
      _0x53ff0b.addColorStop(0, "rgba(255, 255, 255, 1)");
      _0x53ff0b.addColorStop(1, "rgba(255, 255, 255, 0.3)");
      _0x88a7d6.fillStyle = _0x53ff0b;
      _0x88a7d6.globalAlpha = 0.9;
      _0x88a7d6.fill();
      _0x88a7d6.globalAlpha = 1;
    }
    (_0x2043c1 || _0x554381) && (_0x88a7d6.save(), _0x88a7d6.translate(_0x38bb8b, _0x5821bf), _0x88a7d6.rotate(reverseAngle * Math.PI / 180), _0x88a7d6.translate(-_0x38bb8b, -_0x5821bf), _0x2043c1 && (_0x88a7d6.font = "8px Arial, 黑体", _0x88a7d6.strokeStyle = "white", _0x88a7d6.lineWidth = 1, _0x88a7d6.strokeText(_0x4be42b, _0x38bb8b - 11, _0x5821bf + 11), _0x88a7d6.fillStyle = "#007BA7", _0x88a7d6.fillText(_0x4be42b, _0x38bb8b - 11, _0x5821bf + 11)), _0x554381 && (_0x88a7d6.fillStyle = "LightCyan", _0x88a7d6.font = "10px Arial, 宋体", _0x88a7d6.fillText(_0x2c6598, _0x38bb8b - 6, _0x5821bf - 5)), _0x88a7d6.restore());
  });
}
function analysis(_0x4270a6) {
  try {
    const _0x4a9b3c = JSON.parse(_0x4270a6);
    let _0x4569f0 = parseInt(_0x4a9b3c.map, 10);
    if (_0x4569f0 !== currentMapID) {
      currentMapID = _0x4569f0;
      let _0xe2645 = "";
      switch (currentMapID) {
        case 0:
          _0xe2645 = "港口-竞技荣耀-保卫者专用.png";
          zoomFactor = 1.518;
          offsetX = -130.4;
          offsetY = -237.5;
          direction = 5;
          angleOffset = 90;
          break;
        case 1:
          _0xe2645 = "港口-竞技荣耀-潜伏者专用.png";
          zoomFactor = 1.518;
          offsetX = -153.8;
          offsetY = -73.4;
          direction = 6;
          angleOffset = -90;
          break;
        case 2:
          _0xe2645 = "港口-世界冠军AG-保卫者专用.png";
          zoomFactor = 1.379;
          offsetX = -122.1;
          offsetY = -59.7;
          direction = 5;
          angleOffset = 90;
          break;
        case 3:
          _0xe2645 = "港口-世界冠军AG-潜伏者专用.png";
          zoomFactor = 1.342;
          offsetX = -115.1;
          offsetY = -123.7;
          direction = 6;
          angleOffset = -90;
          break;
        case 4:
          _0xe2645 = "供电所-保卫者专用.png";
          zoomFactor = 1.2;
          offsetX = -76.8;
          offsetY = -23.8;
          direction = 3;
          angleOffset = 0;
          break;
        case 5:
          _0xe2645 = "供电所-潜伏者专用.png";
          zoomFactor = 1.2;
          offsetX = -61.8;
          offsetY = -92.1;
          direction = 0;
          angleOffset = 180;
          break;
        case 6:
          _0xe2645 = "黑色城镇-保卫者专用.png";
          zoomFactor = 1.315;
          offsetX = -73.8;
          offsetY = -100.8;
          direction = 0;
          angleOffset = -180;
          break;
        case 7:
          _0xe2645 = "黑色城镇-潜伏者专用.png";
          zoomFactor = 1.315;
          offsetX = -105.1;
          offsetY = -75.4;
          direction = 3;
          angleOffset = 0;
          break;
        case 8:
          _0xe2645 = "潜艇-保卫者专用.png";
          zoomFactor = 1.635;
          offsetX = -85.1;
          offsetY = -210.3;
          direction = 3;
          angleOffset = 0;
          break;
        case 9:
          _0xe2645 = "潜艇-潜伏者专用.png";
          zoomFactor = 1.635;
          offsetX = -263;
          offsetY = -123.5;
          direction = 0;
          angleOffset = 180;
          break;
        case 10:
          _0xe2645 = "卫星基地-竞技荣耀-保卫者专用.png";
          zoomFactor = 1.355;
          offsetX = -93.5;
          offsetY = -87.9;
          direction = 5;
          angleOffset = 90;
          break;
        case 11:
          _0xe2645 = "卫星基地-竞技荣耀-潜伏者专用.png";
          zoomFactor = 1.355;
          offsetX = -108;
          offsetY = -71.3;
          direction = 6;
          angleOffset = -90;
          break;
        case 12:
          _0xe2645 = "新黑色城镇-保卫者专用.png";
          zoomFactor = 1.315;
          offsetX = -60.3;
          offsetY = -148.5;
          direction = 0;
          angleOffset = -180;
          break;
        case 13:
          _0xe2645 = "新黑色城镇-潜伏者专用.png";
          zoomFactor = 1.315;
          offsetX = -87;
          offsetY = -62.9;
          direction = 3;
          angleOffset = 0;
          break;
        case 14:
          _0xe2645 = "新年广场-保卫者专用.png";
          zoomFactor = 1.749;
          offsetX = -189.2;
          offsetY = -189.7;
          direction = 5;
          angleOffset = 90;
          break;
        case 15:
          _0xe2645 = "新年广场-潜伏者专用.png";
          zoomFactor = 1.749;
          offsetX = -174.1;
          offsetY = -216.2;
          direction = 3;
          angleOffset = 0;
          break;
        case 16:
          _0xe2645 = "新潜艇-保卫者专用.png";
          zoomFactor = 1.625;
          offsetX = -167.9;
          offsetY = -162.3;
          direction = 3;
          angleOffset = 0;
          break;
        case 17:
          _0xe2645 = "新潜艇-潜伏者专用.png";
          zoomFactor = 1.625;
          offsetX = -187.3;
          offsetY = -176.2;
          direction = 0;
          angleOffset = 180;
          break;
        case 18:
          _0xe2645 = "新沙漠-灰-保卫者专用.png";
          zoomFactor = 1.285;
          offsetX = -98.4;
          offsetY = -128.7;
          direction = 0;
          angleOffset = 180;
          break;
        case 19:
          _0xe2645 = "新沙漠-灰-潜伏者专用.png";
          zoomFactor = 1.285;
          offsetX = -54.9;
          offsetY = -72.4;
          direction = 3;
          angleOffset = 0;
          break;
        case 20:
          _0xe2645 = "新沙丘-保卫者专用.png";
          zoomFactor = 1.668;
          offsetX = -191.1;
          offsetY = -203;
          direction = 5;
          angleOffset = 90;
          break;
        case 21:
          _0xe2645 = "新沙丘-潜伏者专用.png";
          zoomFactor = 1.668;
          offsetX = -211.1;
          offsetY = -101.8;
          direction = 6;
          angleOffset = -90;
          break;
        case 22:
          _0xe2645 = "新卫星基地-保卫者专用.png";
          zoomFactor = 1.288;
          offsetX = -66.2;
          offsetY = -83.8;
          direction = 5;
          angleOffset = 90;
          break;
        case 23:
          _0xe2645 = "新卫星基地-潜伏者专用.png";
          zoomFactor = 1.288;
          offsetX = -104.1;
          offsetY = -68.6;
          direction = 6;
          angleOffset = -90;
          break;
        case 24:
          _0xe2645 = "新鹰眼-CFPL十周年纪念版-保卫者专用.png";
          zoomFactor = 1.62;
          offsetX = -195.4;
          offsetY = -198.2;
          direction = 5;
          angleOffset = 90;
          break;
        case 25:
          _0xe2645 = "新鹰眼-CFPL十周年纪念版-潜伏者专用.png";
          zoomFactor = 1.62;
          offsetX = -143.4;
          offsetY = -179.5;
          direction = 6;
          angleOffset = -90;
          break;
        case 26:
          _0xe2645 = "异域小城-世界冠军Q9-保卫者专用.png";
          zoomFactor = 1.315;
          offsetX = -83.1;
          offsetY = -127.4;
          direction = 5;
          angleOffset = 90;
          break;
        case 27:
          _0xe2645 = "异域小城-世界冠军Q9-潜伏者专用.png";
          zoomFactor = 1.315;
          offsetX = -99.7;
          offsetY = -90;
          direction = 6;
          angleOffset = -90;
          break;
        case 28:
          _0xe2645 = "鹰眼-保卫者专用.png";
          zoomFactor = 1.54;
          offsetX = -147.6;
          offsetY = -119.2;
          direction = 5;
          angleOffset = 90;
          break;
        case 29:
          _0xe2645 = "鹰眼-潜伏者专用.png";
          zoomFactor = 1.54;
          offsetX = -153.8;
          offsetY = -179.5;
          direction = 6;
          angleOffset = -90;
          break;
        case 30:
          _0xe2645 = "新运输船-保卫者专用.png";
          zoomFactor = 3.093;
          offsetX = -536.8;
          offsetY = -458.4;
          direction = 3;
          angleOffset = 0;
          break;
        case 31:
          _0xe2645 = "新运输船-潜伏者专用.png";
          zoomFactor = 3.142;
          offsetX = -551.3;
          offsetY = -645.7;
          direction = 0;
          angleOffset = -180;
          break;
        case 32:
          _0xe2645 = "新姑苏-保卫者专用.png";
          zoomFactor = 1.648;
          offsetX = -191.3;
          offsetY = -194.1;
          direction = 5;
          angleOffset = 90;
          break;
        case 33:
          _0xe2645 = "新姑苏-潜伏者专用.png";
          zoomFactor = 1.648;
          offsetX = -168.4;
          offsetY = -165.1;
          direction = 6;
          angleOffset = -90;
          break;
        case 34:
          _0xe2645 = "供电所-竞技荣耀-保卫者专用.png";
          zoomFactor = 1.588;
          offsetX = -143;
          offsetY = -102.5;
          direction = 3;
          angleOffset = 0;
          break;
        case 35:
          _0xe2645 = "供电所-竞技荣耀-潜伏者专用.png";
          zoomFactor = 1.588;
          offsetX = -168.4;
          offsetY = -189;
          direction = 0;
          angleOffset = -180;
          break;
        case 36:
          _0xe2645 = "新沙漠-灰-保卫者专用.png";
          zoomFactor = 1.285;
          offsetX = -78.9;
          offsetY = -137.9;
          direction = 0;
          angleOffset = 180;
          break;
        case 37:
          _0xe2645 = "新沙漠-灰-潜伏者专用.png";
          zoomFactor = 1.285;
          offsetX = -70.6;
          offsetY = -65;
          direction = 3;
          angleOffset = 0;
          break;
        case 38:
          _0xe2645 = "巷战-保卫者专用.png";
          zoomFactor = 2.525;
          offsetX = -406.8;
          offsetY = -405.4;
          direction = 6;
          angleOffset = -90;
          break;
        case 39:
          _0xe2645 = "巷战-潜伏者专用.png";
          zoomFactor = 2.525;
          offsetX = -397.3;
          offsetY = -401.1;
          direction = 5;
          angleOffset = 90;
          break;
        case 40:
          _0xe2645 = "新沙漠TD-保卫者专用.png";
          zoomFactor = 2.525;
          offsetX = -406.8;
          offsetY = -405.4;
          direction = 6;
          angleOffset = -90;
          break;
        case 41:
          _0xe2645 = "新沙漠TD-潜伏者专用.png";
          zoomFactor = 2.525;
          offsetX = -397.3;
          offsetY = -401.1;
          direction = 5;
          angleOffset = 90;
          break;
        case 42:
          _0xe2645 = "新金字塔-保卫者专用.png";
          zoomFactor = 2.525;
          offsetX = -406.8;
          offsetY = -405.4;
          direction = 6;
          angleOffset = -90;
          break;
        case 43:
          _0xe2645 = "新金字塔-潜伏者专用.png";
          zoomFactor = 2.525;
          offsetX = -397.3;
          offsetY = -401.1;
          direction = 5;
          angleOffset = 90;
          break;
        case 44:
          _0xe2645 = "异域小城-竞技荣耀-保卫者专用.png";
          zoomFactor = 1.336;
          offsetX = -80.2;
          offsetY = -80.4;
          direction = 5;
          angleOffset = 90;
          break;
        case 45:
          _0xe2645 = "异域小城-竞技荣耀-潜伏者专用.png";
          zoomFactor = 1.336;
          offsetX = -90.1;
          offsetY = -98.8;
          direction = 6;
          angleOffset = -90;
          break;
        case 100:
          _0xe2645 = "守望之城.png";
          zoomFactor = 2.03;
          offsetX = -255.9;
          offsetY = -243.8;
          direction = 6;
          angleOffset = -90;
          break;
        case 200:
          _0xe2645 = "屋顶机场.png";
          zoomFactor = 1.78;
          offsetX = -227;
          offsetY = -204.8;
          direction = 5;
          angleOffset = 90;
          break;
        case 300:
          _0xe2645 = "地下研究所.png";
          zoomFactor = 2.19;
          offsetX = -308.4;
          offsetY = -318.4;
          direction = 0;
          angleOffset = 180;
          break;
        case 400:
          _0xe2645 = "胜利广场.png";
          zoomFactor = 1.749;
          offsetX = -193;
          offsetY = -189.7;
          direction = 5;
          angleOffset = 90;
          break;
        case 500:
          _0xe2645 = "失落的遗迹.png";
          zoomFactor = 1.78;
          offsetX = -208.4;
          offsetY = -183.7;
          direction = 0;
          angleOffset = 180;
          break;
        case 600:
          _0xe2645 = "狼穴.png";
          zoomFactor = 1.86;
          offsetX = -237.1;
          offsetY = -310.6;
          direction = 6;
          angleOffset = -90;
          break;
        default:
          _0xe2645 = "黑.png";
          break;
      }
      [a, b, c, d] = correctionValues[direction];
      document.getElementById("canvas-container").style.backgroundImage = "url(maps/" + _0xe2645 + ")";
    }
    data = _0x4a9b3c;
    return true;
  } catch (_0x3e2227) {}
}
function test() {
  analysis("{\"map\": 2,\"info\":[[0,100,237.2,200.3,270.0,\"佳鹏哥哥\"],[0,100,250.1,305.9,271.0,\"队友A\"],[0,100,220.1,365.9,269.0,\"队友B\"],[1,100,234.4,79.1,434.9,\"敌人\"],[1,100,234.4,90.1,435.9,\"敌人\"],[1,100,234.4,110.1,433.9,\"敌人\"]]}");
  updateOptions();
  document.getElementById("playerSelector").value = "佳鹏哥哥";
  drawCanvas();
}
function verification() {
  let _0x218321 = new Date();
  let _0x4a9272 = _0x218321.getTime();
  let _0xb21dd8 = Math.floor(_0x4a9272 / 1000);
  if (_0xb21dd8 > 2553506483) {
    return false;
  }
  return true;
}
function display() {
  var _0x10b57d = document.getElementById("toggleButton");
  var _0x3a2bdb = document.getElementById("menuContent");
  var _0x452584 = document.getElementById("input-container");
  var _0x51235d = document.getElementById("tips");
  _0x3a2bdb.style.display === "none" ? (_0x3a2bdb.style.display = "block", _0x452584.style.height = "auto", _0x452584.style.width = "250px", _0x51235d.style.display = "block", _0x10b57d.innerHTML = ">>>>菜单<<<<", _0x452584.style.background = "#2b2b2b") : (_0x3a2bdb.style.display = "none", _0x452584.style.height = _0x10b57d.style.height, _0x452584.style.width = "auto", _0x452584.style.background = "rgba(255,255,255,0)", _0x51235d.style.display = "none", _0x10b57d.innerHTML = "<>");
}
const url = new URL(window.location);
const params = new URLSearchParams(url.search);
const key = params.get("key");
console.log("Key:", key);
var hostname = url.hostname;
port = 9503;
console.log("Hostname:", hostname);
if (!!key) {
  function createWebSocket(_0x552958) {
    var _0x2658d4 = new WebSocket("ws://" + _0x552958 + ":" + port);
    _0x2658d4.onopen = () => {
      console.log("已连接到 WebSocket 服务器");
      _0x2658d4.send(key);
    };
    _0x2658d4.onmessage = _0x174862 => {
      if (!verification()) {
        return;
      }
      console.log("收到消息:", _0x174862.data);
      analysis(_0x174862.data) && drawCanvas();
    };
    _0x2658d4.onclose = () => {
      _0x2658d4.close();
      _0x2658d4 = null;
      console.log("WebSocket 连接已关闭");
      setTimeout(() => createWebSocket(_0x552958), 1000);
    };
    _0x2658d4.onerror = _0x32462f => {
      _0x2658d4.close();
      _0x2658d4 = null;
      console.log("WebSocket 错误:", _0x32462f);
      setTimeout(() => createWebSocket(_0x552958), 1000);
    };
    return _0x2658d4;
  }
  createWebSocket(hostname);
}