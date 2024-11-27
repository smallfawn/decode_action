//Wed Nov 27 2024 12:40:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var SHAPE_SIZE_TOLERANCE = 0.3;
SHAPE_HINT_NAME = "_shape_hint";
coords_toString = function (_0x4a9d8d) {
  return "" + _0x4a9d8d.x + ", " + _0x4a9d8d.y;
};
function ProgBar(_0x2ffc6e, _0x2931a6) {
  if (!_0x2ffc6e && !_0x2931a6) {
    _0x2ffc6e = _0x2931a6 = 0;
  }
  this.center_x = _0x2ffc6e;
  this.center_y = _0x2931a6;
  this.scale = 1 / fl.getDocumentDOM().zoomFactor;
  fl.drawingLayer.beginDraw(true);
}
ProgBar.prototype.end = function () {
  fl.drawingLayer.beginFrame();
  fl.drawingLayer.endDraw();
};
ProgBar.prototype.setLocation = function (_0x279678, _0x41c2b8) {
  this.center_x = _0x279678;
  this.center_y = _0x41c2b8;
  this.scale = 1 / fl.getDocumentDOM().zoomFactor;
};
ProgBar.prototype.drawRect = function (_0x37a6a5, _0x7990d9, _0x16a99a, _0x103b05) {
  var _0x10d674, _0x260b8c, _0x48358c;
  if (Math.abs(_0x37a6a5 - _0x16a99a) > Math.abs(_0x7990d9 - _0x103b05)) {
    _0x260b8c = Math.min(_0x7990d9, _0x103b05);
    _0x48358c = Math.max(_0x7990d9, _0x103b05);
    for (_0x10d674 = _0x260b8c; _0x10d674 < _0x48358c; _0x10d674 += this.scale) {
      fl.drawingLayer.moveTo(_0x37a6a5, _0x10d674);
      fl.drawingLayer.lineTo(_0x16a99a, _0x10d674);
    }
  } else {
    _0x260b8c = Math.min(_0x37a6a5, _0x16a99a);
    _0x48358c = Math.max(_0x37a6a5, _0x16a99a);
    for (_0x10d674 = _0x260b8c; _0x10d674 < _0x48358c; _0x10d674 += this.scale) {
      fl.drawingLayer.moveTo(_0x10d674, _0x7990d9);
      fl.drawingLayer.lineTo(_0x10d674, _0x103b05);
    }
  }
};
ProgBar.prototype.setProgress = function (_0x13e370) {
  if (_0x13e370 > 1) {
    _0x13e370 = 1;
  } else {
    if (_0x13e370 < 0) {
      _0x13e370 = 0;
    }
  }
  var _0x1dc8cd = 200,
    _0xb52df2 = 10;
  fl.drawingLayer.beginFrame();
  fl.drawingLayer.setColor(16777215);
  fl.drawingLayer.moveTo(this.center_x - this.scale * (_0x1dc8cd + 1), this.center_y - this.scale * (_0xb52df2 + 1));
  fl.drawingLayer.lineTo(this.center_x - this.scale * (_0x1dc8cd + 1), this.center_y + this.scale * (_0xb52df2 + 1));
  fl.drawingLayer.lineTo(this.center_x + this.scale * (_0x1dc8cd + 1), this.center_y + this.scale * (_0xb52df2 + 1));
  fl.drawingLayer.lineTo(this.center_x + this.scale * (_0x1dc8cd + 1), this.center_y - this.scale * (_0xb52df2 + 1));
  fl.drawingLayer.lineTo(this.center_x - this.scale * (_0x1dc8cd + 1), this.center_y - this.scale * (_0xb52df2 + 1));
  fl.drawingLayer.setColor(0);
  fl.drawingLayer.moveTo(this.center_x - this.scale * (_0x1dc8cd + 2), this.center_y - this.scale * (_0xb52df2 + 2));
  fl.drawingLayer.lineTo(this.center_x - this.scale * (_0x1dc8cd + 2), this.center_y + this.scale * (_0xb52df2 + 2));
  fl.drawingLayer.lineTo(this.center_x + this.scale * (_0x1dc8cd + 2), this.center_y + this.scale * (_0xb52df2 + 2));
  fl.drawingLayer.lineTo(this.center_x + this.scale * (_0x1dc8cd + 2), this.center_y - this.scale * (_0xb52df2 + 2));
  fl.drawingLayer.lineTo(this.center_x - this.scale * (_0x1dc8cd + 2), this.center_y - this.scale * (_0xb52df2 + 2));
  fl.drawingLayer.setColor(255);
  var _0x3857cf = this.center_x - this.scale * _0x1dc8cd;
  this.drawRect(_0x3857cf, this.center_y - this.scale * _0xb52df2, _0x3857cf + this.scale * _0x1dc8cd * 2 * _0x13e370, this.center_y + this.scale * _0xb52df2);
  fl.drawingLayer.endFrame();
};
function Profiler() {
  this.times = new Array();
  var _0x1c1c76 = new Date();
  this.times[0] = _0x1c1c76.getTime();
}
Profiler.prototype.toString = function () {
  retval = "Start: " + this.times[0] + "\n";
  var _0x390051;
  for (_0x390051 = 1; _0x390051 < this.times.length; _0x390051 += 2) {
    retval = retval.concat(this.times[_0x390051 + 1].toFixed(3) + ": " + this.times[_0x390051] + "\n");
  }
  return retval;
};
Profiler.prototype.mark = function (_0x50e67a) {
  var _0xd8d82d = new Date();
  this.times.push(_0x50e67a);
  this.times.push((_0xd8d82d.getTime() - this.times[0]) / 1000);
};
transform_components = function (_0x5414cb) {
  if (undefined == _0x5414cb) {
    this.scale_x = this.scale_y = 1;
    this.skew_x = this.skew_y = 0;
    this.tx = this.ty = 0;
  } else {
    var _0x1d6ca2 = new Object();
    _0x1d6ca2.a = _0x5414cb.a;
    _0x1d6ca2.b = _0x5414cb.b;
    _0x1d6ca2.c = _0x5414cb.c;
    _0x1d6ca2.d = _0x5414cb.d;
    _0x1d6ca2.tx = _0x5414cb.tx;
    _0x1d6ca2.ty = _0x5414cb.ty;
    this.scale_x = Math.sqrt(_0x1d6ca2.a * _0x1d6ca2.a + _0x1d6ca2.b * _0x1d6ca2.b);
    this.scale_y = Math.sqrt(_0x1d6ca2.c * _0x1d6ca2.c + _0x1d6ca2.d * _0x1d6ca2.d);
    this.scale_x != 0 && (_0x1d6ca2.a /= this.scale_x, _0x1d6ca2.c /= this.scale_x);
    this.scale_y != 0 && (_0x1d6ca2.b /= this.scale_y, _0x1d6ca2.d /= this.scale_y);
    this.skew_x = Math.acos(_0x1d6ca2.d);
    this.skew_y = Math.acos(_0x1d6ca2.a);
    if (_0x1d6ca2.b < 0) {
      this.skew_y = -this.skew_y;
    }
    if (_0x1d6ca2.c > 0) {
      this.skew_x = -this.skew_x;
    }
    this.tx = _0x1d6ca2.tx;
    this.ty = _0x1d6ca2.ty;
  }
};
transform_components.prototype.toString = function () {
  return "skew:      " + this.skew_x / Math.PI * 180 + ", " + this.skew_y / Math.PI * 180 + "\nscale:     " + this.scale_x + ", " + this.scale_y + "\ntranslate: " + this.tx + ", " + this.ty;
};
transform_components.prototype.is_reflected = function () {
  var _0x5be031 = Math.abs(this.skew_x - this.skew_y) <= Math.PI / 2;
  _0x5be031 = _0x5be031 || Math.abs(this.skew_x - this.skew_y) >= 3 * Math.PI / 2;
  return _0x5be031;
};
transform_components.prototype.tween = function (_0x22c019, _0x108153) {
  this.scale_x += (_0x22c019.scale_x - this.scale_x) * _0x108153;
  this.scale_y += (_0x22c019.scale_y - this.scale_y) * _0x108153;
  var _0x1eb53a = Math.abs(this.skew_x - _0x22c019.skew_x),
    _0x1fd0f6 = 2 * Math.PI - _0x1eb53a;
  if (_0x1eb53a < _0x1fd0f6) {
    this.skew_x += (_0x22c019.skew_x - this.skew_x) * _0x108153;
  } else {
    if (this.skew_x > 0) {
      this.skew_x += _0x1fd0f6 * _0x108153;
      if (this.skew_x > Math.PI) {
        this.skew_x -= 2 * Math.PI;
      }
    } else {
      this.skew_x -= _0x1fd0f6 * _0x108153;
      if (this.skew_x < -Math.PI) {
        this.skew_x += 2 * Math.PI;
      }
    }
  }
  var _0x280ce1 = Math.abs(this.skew_y - _0x22c019.skew_y),
    _0x186ad8 = 2 * Math.PI - _0x280ce1;
  if (_0x280ce1 < _0x186ad8) {
    this.skew_y += (_0x22c019.skew_y - this.skew_y) * _0x108153;
  } else {
    if (this.skew_y > 0) {
      this.skew_y += _0x186ad8 * _0x108153;
      if (this.skew_y > Math.PI) {
        this.skew_y -= 2 * Math.PI;
      }
    } else {
      this.skew_y -= _0x186ad8 * _0x108153;
      if (this.skew_y < -Math.PI) {
        this.skew_y += 2 * Math.PI;
      }
    }
  }
  this.tx += (_0x22c019.tx - this.tx) * _0x108153;
  this.ty += (_0x22c019.ty - this.ty) * _0x108153;
};
transform_components.prototype.to_matrix = function () {
  var _0x1bf47b = {
    a: Math.cos(this.skew_y),
    b: Math.sin(this.skew_y),
    c: -Math.sin(this.skew_x),
    d: Math.cos(this.skew_x),
    tx: this.tx,
    ty: this.ty
  };
  _0x1bf47b.a *= this.scale_x;
  _0x1bf47b.b *= this.scale_x;
  _0x1bf47b.c *= this.scale_y;
  _0x1bf47b.d *= this.scale_y;
  return _0x1bf47b;
};
object_reflected = function (_0x491b96) {
  var _0x56166e;
  _0x56166e = Math.abs(_0x491b96.skewX - _0x491b96.skewY);
  if (_0x56166e > 180) {
    _0x56166e = 360 - _0x56166e;
  }
  return _0x56166e > 90;
};
apply_transform = function (_0x40dc4f, _0x2850bb) {
  var _0x2d0ff1 = new Object();
  _0x2d0ff1.x = _0x40dc4f.a * _0x2850bb.x + _0x40dc4f.c * _0x2850bb.y + _0x40dc4f.tx;
  _0x2d0ff1.y = _0x40dc4f.b * _0x2850bb.x + _0x40dc4f.d * _0x2850bb.y + _0x40dc4f.ty;
  return _0x2d0ff1;
};
get_global_pivot = function () {
  var _0x436d29 = doc.selection[0],
    _0x145f00 = _0x436d29.matrix,
    _0x47bb23 = doc.getTransformationPoint();
  return apply_transform(_0x145f00, _0x47bb23);
};
select_element = function (_0x55eae5, _0x5cd73b) {
  timeline.currentFrame != _0x5cd73b && (timeline.currentFrame = _0x5cd73b);
  doc.selectNone();
  var _0x1b4c60 = new Array();
  _0x1b4c60[0] = _0x55eae5;
  doc.selection = _0x1b4c60;
};
get_shape_elements = function (_0x467592, _0x2d4eb8) {
  timeline.currentFrame = _0x2d4eb8;
  doc.selectNone();
  var _0x42cd2a = new Array(),
    _0x26bcc6 = _0x467592.frames[_0x2d4eb8].elements;
  for (n = 0; n < _0x26bcc6.length; n++) {
    _0x26bcc6[n].elementType == "shape" && !_0x26bcc6[n].isGroup && _0x42cd2a.push(_0x26bcc6[n]);
  }
  return _0x42cd2a;
};
getCurveOrder = function (_0x372c3c) {
  he = _0x372c3c.getHalfEdge();
  curveOrd = new Array();
  firstCurve = segIndex = he.getEdge().cubicSegmentIndex;
  n = 0;
  do {
    curveOrd[n] = segIndex;
    do {
      if (_0x372c3c.orientation < 0) {
        he = he.getNext();
      } else {
        he = he.getPrev();
      }
      segIndex = he.getEdge().cubicSegmentIndex;
    } while (segIndex == curveOrd[n]);
    n++;
  } while (segIndex != firstCurve);
  return curveOrd;
};
getEdgeOrderQuad = function (_0x5bac9b) {
  var _0x55c629, _0x509a94;
  edgeOrd = new Array();
  firstEdge = edgeIndex = 0;
  n = 0;
  do {
    edgeOrd[n] = edgeIndex;
    _0x55c629 = _0x5bac9b[edgeIndex].getControl(2);
    do {
      edgeIndex = (edgeIndex + 1) % _0x5bac9b.length;
      _0x509a94 = _0x5bac9b[edgeIndex].getControl(0);
    } while (_0x55c629.x != _0x509a94.x || _0x55c629.y != _0x509a94.y);
    n++;
  } while (edgeIndex != firstEdge);
  return edgeOrd;
};
getFirstCurve = function (_0x1a18ac, _0x538093, _0x3d2f1c) {
  error = Number.MAX_VALUE;
  for (n = 0; n < _0x538093.length; n++) {
    newError = fl.Math.pointDistance({
      x: _0x3d2f1c.x,
      y: _0x3d2f1c.y
    }, _0x1a18ac.getCubicSegmentPoints(_0x538093[n])[0]);
    newError < error && (error = newError, startCurve = n);
  }
  return startCurve;
};
getFirstEdgeQuad = function (_0x1368b5, _0x157012, _0x1f7219) {
  error = Number.MAX_VALUE;
  for (n = 0; n < _0x157012.length; n++) {
    newError = fl.Math.pointDistance({
      x: _0x1f7219.x,
      y: _0x1f7219.y
    }, _0x1368b5[_0x157012[n]].getControl(0));
    newError < error && (error = newError, startEdge = n);
  }
  return startEdge;
};
set_tween_fill = function (_0x56a237, _0x486135) {
  var _0x129761 = [],
    _0x3712ae = -1,
    _0xcd7eb0 = [],
    _0x4a5f64,
    _0x1599b1 = doc.getCustomFill("toolbar"),
    _0x2d7975;
  _0x2d7975 = false;
  for (_0x4a5f64 = 0; _0x4a5f64 < _0x56a237.length; _0x4a5f64++) {
    if (_0x56a237[_0x4a5f64].style == "noFill") {
      _0x129761[_0x4a5f64] = _0x3712ae;
      _0xcd7eb0[_0x4a5f64] = 0;
    } else {
      _0x2d7975 = true;
      if (typeof _0x56a237[_0x4a5f64].color == "number") {
        _0x129761[_0x4a5f64] = _0x56a237[_0x4a5f64].color;
        _0xcd7eb0[_0x4a5f64] = 0;
      } else {
        _0x56a237[_0x4a5f64].color.length == 7 ? (_0x129761[_0x4a5f64] = parseInt(_0x56a237[_0x4a5f64].color.slice(1), 16), _0xcd7eb0[_0x4a5f64] = 255) : (_0x129761[_0x4a5f64] = parseInt(_0x56a237[_0x4a5f64].color.slice(1, 7), 16), _0xcd7eb0[_0x4a5f64] = parseInt(_0x56a237[_0x4a5f64].color.slice(7), 16));
      }
    }
  }
  if (!_0x2d7975) {
    return false;
  }
  _0x1599b1 = doc.getCustomFill("toolbar");
  if (_0x129761[0] == _0x3712ae) {
    _0x129761[0] = _0x129761[1];
  }
  if (_0x129761[1] == _0x3712ae) {
    _0x129761[1] = _0x129761[0];
  }
  var _0x5c06f7 = 1 - _0x486135,
    _0x2fada9 = _0x486135;
  _0x129761[2] = ((_0x129761[0] & 16711680) * _0x5c06f7 + (_0x129761[1] & 16711680) * _0x2fada9 & 16711680) + ((_0x129761[0] & 65280) * _0x5c06f7 + (_0x129761[1] & 65280) * _0x2fada9 & 65280) + ((_0x129761[0] & 255) * _0x5c06f7 + (_0x129761[1] & 255) * _0x2fada9 & 255);
  _0xcd7eb0[2] = Math.round(_0xcd7eb0[0] * _0x5c06f7 + _0xcd7eb0[1] * _0x2fada9);
  var _0x405ad1 = _0x129761[2].toString(16);
  for (_0x4a5f64 = _0x405ad1.length; _0x4a5f64 < 6; _0x4a5f64++) {
    _0x405ad1 = "0" + _0x405ad1;
  }
  if (_0xcd7eb0[2] < 16) {
    _0x405ad1 = _0x405ad1 + "0";
  }
  _0x405ad1 = "#" + _0x405ad1 + _0xcd7eb0[2].toString(16);
  _0x1599b1.color = _0x405ad1;
  _0x1599b1.style = "solid";
  doc.setCustomFill(_0x1599b1);
  return true;
};
set_tween_stroke = function (_0x203d2d, _0x1e8c80) {
  var _0x1acd57 = [],
    _0xcccb15 = -1,
    _0x1c9d5c = [],
    _0x1df349,
    _0x3cf1e9 = doc.getCustomStroke("toolbar"),
    _0x48ea68;
  _0x48ea68 = false;
  for (_0x1df349 = 0; _0x1df349 < _0x203d2d.length; _0x1df349++) {
    if (_0x203d2d[_0x1df349].shapeFill == undefined) {
      _0x1acd57[_0x1df349] = _0xcccb15;
      _0x1c9d5c[_0x1df349] = 0;
    } else {
      _0x48ea68 = true;
      if (typeof _0x203d2d[_0x1df349].shapeFill.color == "number") {
        _0x1acd57[_0x1df349] = _0x203d2d[_0x1df349].shapeFill.color;
        _0x1c9d5c[_0x1df349] = 0;
      } else {
        _0x203d2d[_0x1df349].shapeFill.color.length == 7 ? (_0x1acd57[_0x1df349] = parseInt(_0x203d2d[_0x1df349].shapeFill.color.slice(1), 16), _0x1c9d5c[_0x1df349] = 255) : (_0x1acd57[_0x1df349] = parseInt(_0x203d2d[_0x1df349].shapeFill.color.slice(1, 7), 16), _0x1c9d5c[_0x1df349] = parseInt(_0x203d2d[_0x1df349].shapeFill.color.slice(7), 16));
      }
    }
  }
  if (!_0x48ea68) {
    return false;
  }
  _0x3cf1e9.shapeFill = doc.getCustomFill("toolbar");
  if (_0x1acd57[0] == _0xcccb15) {
    _0x1acd57[0] = _0x1acd57[1];
  }
  if (_0x1acd57[1] == _0xcccb15) {
    _0x1acd57[1] = _0x1acd57[0];
  }
  var _0x5e3a28 = 1 - _0x1e8c80,
    _0x1bff57 = _0x1e8c80;
  _0x1acd57[2] = ((_0x1acd57[0] & 16711680) * _0x5e3a28 + (_0x1acd57[1] & 16711680) * _0x1bff57 & 16711680) + ((_0x1acd57[0] & 65280) * _0x5e3a28 + (_0x1acd57[1] & 65280) * _0x1bff57 & 65280) + ((_0x1acd57[0] & 255) * _0x5e3a28 + (_0x1acd57[1] & 255) * _0x1bff57 & 255);
  _0x1c9d5c[2] = Math.round(_0x1c9d5c[0] * _0x5e3a28 + _0x1c9d5c[1] * _0x1bff57);
  var _0x55374e = _0x1acd57[2].toString(16);
  for (_0x1df349 = _0x55374e.length; _0x1df349 < 6; _0x1df349++) {
    _0x55374e = "0" + _0x55374e;
  }
  if (_0x1c9d5c[2] < 16) {
    _0x55374e = _0x55374e + "0";
  }
  _0x55374e = "#" + _0x55374e + _0x1c9d5c[2].toString(16);
  _0x3cf1e9.shapeFill.color = _0x55374e;
  _0x3cf1e9.shapeFill.style = "solid";
  new_thickness = _0x203d2d[0].thickness * _0x5e3a28 + _0x203d2d[1].thickness * _0x1bff57;
  if (new_thickness <= 0) {
    return false;
  }
  _0x3cf1e9.thickness = new_thickness;
  doc.setCustomStroke(_0x3cf1e9);
  return true;
};
tween_shape = function (_0xf8073f, _0x5079cd, _0x4f987f, _0x2bb39e) {
  shape = [];
  curveOrder = [];
  currentCurveNum = [];
  segPoints = [];
  firstCurveNum = [];
  hints = [];
  fills = [];
  strokes = [];
  shape[0] = _0xf8073f.shape;
  shape[1] = _0x5079cd.shape;
  hints[0] = _0xf8073f.hint;
  hints[1] = _0x5079cd.hint;
  for (m = 0; m < 2; m++) {
    curveOrder[m] = getCurveOrder(shape[m].contours[1]);
    currentCurveNum[m] = firstCurveNum[m] = getFirstCurve(shape[m], curveOrder[m], hints[m]);
    fills[m] = shape[m].contours[1].fill;
    strokes[m] = shape[m].edges[0].stroke;
  }
  tweenPath = fl.drawingLayer.newPath();
  curvesFlipped = [];
  for (n = 0; n < 2; n++) {
    curve2 = shape[n].getCubicSegmentPoints(curveOrder[n][(currentCurveNum[n] + curveOrder[n].length - 1) % curveOrder[n].length]);
    curve1 = shape[n].getCubicSegmentPoints(curveOrder[n][currentCurveNum[n]]);
    curve2 = shape[n].getCubicSegmentPoints(curveOrder[n][(currentCurveNum[n] + 1) % curveOrder[n].length]);
    if (curve1[0].x == curve2[3].x && curve1[0].y == curve2[3].y) {
      curvesFlipped[n] = true;
    } else {
      curvesFlipped[n] = false;
    }
  }
  for (n = 0; n < 2; n++) {
    curvesFlipped[n] && (currentCurveNum[n] = (currentCurveNum[n] + 1) % curveOrder[n].length, firstCurveNum[n] = currentCurveNum[n]);
  }
  do {
    segPoints[0] = shape[0].getCubicSegmentPoints(curveOrder[0][currentCurveNum[0]]);
    segPoints[1] = shape[1].getCubicSegmentPoints(curveOrder[1][currentCurveNum[1]]);
    var _0x18813d = 1 - _0x2bb39e,
      _0x3fb424 = _0x2bb39e;
    curvesFlipped[0] ? curvesFlipped[1] ? tweenPath.addCubicCurve(segPoints[0][3].x * _0x18813d + segPoints[1][3].x * _0x3fb424, segPoints[0][3].y * _0x18813d + segPoints[1][3].y * _0x3fb424, segPoints[0][2].x * _0x18813d + segPoints[1][2].x * _0x3fb424, segPoints[0][2].y * _0x18813d + segPoints[1][2].y * _0x3fb424, segPoints[0][1].x * _0x18813d + segPoints[1][1].x * _0x3fb424, segPoints[0][1].y * _0x18813d + segPoints[1][1].y * _0x3fb424, segPoints[0][0].x * _0x18813d + segPoints[1][0].x * _0x3fb424, segPoints[0][0].y * _0x18813d + segPoints[1][0].y * _0x3fb424) : tweenPath.addCubicCurve(segPoints[0][3].x * _0x18813d + segPoints[1][0].x * _0x3fb424, segPoints[0][3].y * _0x18813d + segPoints[1][0].y * _0x3fb424, segPoints[0][2].x * _0x18813d + segPoints[1][1].x * _0x3fb424, segPoints[0][2].y * _0x18813d + segPoints[1][1].y * _0x3fb424, segPoints[0][1].x * _0x18813d + segPoints[1][2].x * _0x3fb424, segPoints[0][1].y * _0x18813d + segPoints[1][2].y * _0x3fb424, segPoints[0][0].x * _0x18813d + segPoints[1][3].x * _0x3fb424, segPoints[0][0].y * _0x18813d + segPoints[1][3].y * _0x3fb424) : curvesFlipped[1] ? tweenPath.addCubicCurve(segPoints[0][0].x * _0x18813d + segPoints[1][3].x * _0x3fb424, segPoints[0][0].y * _0x18813d + segPoints[1][3].y * _0x3fb424, segPoints[0][1].x * _0x18813d + segPoints[1][2].x * _0x3fb424, segPoints[0][1].y * _0x18813d + segPoints[1][2].y * _0x3fb424, segPoints[0][2].x * _0x18813d + segPoints[1][1].x * _0x3fb424, segPoints[0][2].y * _0x18813d + segPoints[1][1].y * _0x3fb424, segPoints[0][3].x * _0x18813d + segPoints[1][0].x * _0x3fb424, segPoints[0][3].y * _0x18813d + segPoints[1][0].y * _0x3fb424) : tweenPath.addCubicCurve(segPoints[0][0].x * _0x18813d + segPoints[1][0].x * _0x3fb424, segPoints[0][0].y * _0x18813d + segPoints[1][0].y * _0x3fb424, segPoints[0][1].x * _0x18813d + segPoints[1][1].x * _0x3fb424, segPoints[0][1].y * _0x18813d + segPoints[1][1].y * _0x3fb424, segPoints[0][2].x * _0x18813d + segPoints[1][2].x * _0x3fb424, segPoints[0][2].y * _0x18813d + segPoints[1][2].y * _0x3fb424, segPoints[0][3].x * _0x18813d + segPoints[1][3].x * _0x3fb424, segPoints[0][3].y * _0x18813d + segPoints[1][3].y * _0x3fb424);
    currentCurveNum[0] = (currentCurveNum[0] + 1) % curveOrder[0].length;
    currentCurveNum[1] = (currentCurveNum[1] + 1) % curveOrder[1].length;
  } while (currentCurveNum[0] != firstCurveNum[0]);
  var _0x254525 = doc.getCustomFill("toolbar"),
    _0x21ffb1 = doc.getCustomStroke("toolbar"),
    _0x5b6528 = set_tween_fill(fills, _0x2bb39e),
    _0x1de30f = set_tween_stroke(strokes, _0x2bb39e),
    _0x2b140a = get_shape_elements(_0xf8073f.layer, _0x4f987f);
  doc.selection = _0x2b140a;
  doc.group();
  doc.deleteSelection();
  tweenPath.makeShape(!_0x5b6528, !_0x1de30f);
  doc.setCustomFill(_0x254525);
  doc.setCustomStroke(_0x21ffb1);
};
tween_shape_quad = function (_0xfc8bf6, _0x41f1ab, _0x2dae2a, _0x51ecb9) {
  shape = [];
  edgeOrder = [];
  currentEdgeNum = [];
  segPoints = [];
  firstEdgeNum = [];
  hints = [];
  fills = [];
  strokes = [];
  shape[0] = _0xfc8bf6.shape;
  shape[1] = _0x41f1ab.shape;
  hints[0] = _0xfc8bf6.hint;
  hints[1] = _0x41f1ab.hint;
  for (m = 0; m < 2; m++) {
    edgeOrder[m] = getEdgeOrderQuad(shape[m].edges);
    currentEdgeNum[m] = firstEdgeNum[m] = getFirstEdgeQuad(shape[m].edges, edgeOrder[m], hints[m]);
    fills[m] = shape[m].contours[1].fill;
    strokes[m] = shape[m].edges[0].stroke;
  }
  tweenPath = fl.drawingLayer.newPath();
  do {
    segPoints[0] = [shape[0].edges[edgeOrder[0][currentEdgeNum[0]]].getControl(0), shape[0].edges[edgeOrder[0][currentEdgeNum[0]]].getControl(1), shape[0].edges[edgeOrder[0][currentEdgeNum[0]]].getControl(2)];
    segPoints[1] = [shape[1].edges[edgeOrder[1][currentEdgeNum[1]]].getControl(0), shape[1].edges[edgeOrder[1][currentEdgeNum[1]]].getControl(1), shape[1].edges[edgeOrder[1][currentEdgeNum[1]]].getControl(2)];
    var _0x25865a = 1 - _0x51ecb9,
      _0x1c8fda = _0x51ecb9;
    tweenPath.addCurve(segPoints[0][0].x * _0x25865a + segPoints[1][0].x * _0x1c8fda, segPoints[0][0].y * _0x25865a + segPoints[1][0].y * _0x1c8fda, segPoints[0][1].x * _0x25865a + segPoints[1][1].x * _0x1c8fda, segPoints[0][1].y * _0x25865a + segPoints[1][1].y * _0x1c8fda, segPoints[0][2].x * _0x25865a + segPoints[1][2].x * _0x1c8fda, segPoints[0][2].y * _0x25865a + segPoints[1][2].y * _0x1c8fda);
    currentEdgeNum[0] = (currentEdgeNum[0] + 1) % edgeOrder[0].length;
    currentEdgeNum[1] = (currentEdgeNum[1] + 1) % edgeOrder[1].length;
  } while (currentEdgeNum[0] != firstEdgeNum[0]);
  var _0x5c9fd2 = doc.getCustomFill("toolbar"),
    _0x501b59 = doc.getCustomStroke("toolbar"),
    _0x39dbb8 = set_tween_fill(fills, _0x51ecb9),
    _0x2b6092 = set_tween_stroke(strokes, _0x51ecb9),
    _0x4f61e6 = get_shape_elements(_0xfc8bf6.layer, _0x2dae2a);
  doc.selection = _0x4f61e6;
  doc.group();
  doc.deleteSelection();
  tweenPath.makeShape(!_0x39dbb8, !_0x2b6092);
  doc.setCustomFill(_0x5c9fd2);
  doc.setCustomStroke(_0x501b59);
};
tween_element = function (_0x3cd8bc, _0x768f03, _0x16a845, _0x2cf934, _0x5a6f65) {
  var _0x11ef5a = _0x3cd8bc.matrix,
    _0x4ef6da = _0x16a845.matrix,
    _0x30f003,
    _0x5301e0,
    _0x5c78f8,
    _0x293dcd;
  if (_0x2cf934 == 1) {
    _0x27a4ea = _0x4ef6da;
  } else {
    var _0x4a1509 = new transform_components(_0x11ef5a),
      _0x8f80db = new transform_components(_0x4ef6da);
    _0x4a1509.tween(_0x8f80db, _0x2cf934);
    var _0x27a4ea = _0x4a1509.to_matrix();
  }
  _0x30f003 = _0x5a6f65.pivot;
  _0x5c78f8 = _0x5a6f65.global_pivot;
  select_element(_0x3cd8bc, _0x768f03);
  doc.setTransformationPoint(_0x30f003);
  _0x5301e0 = get_global_pivot();
  if ("shape" == _0x3cd8bc.elementType && _0x3cd8bc.isGroup) {
    var _0x2bbc9d = fl.Math.invertMatrix(_0x11ef5a);
    doc.transformSelection(_0x2bbc9d.a, _0x2bbc9d.b, _0x2bbc9d.c, _0x2bbc9d.d);
    doc.transformSelection(_0x27a4ea.a, _0x27a4ea.b, _0x27a4ea.c, _0x27a4ea.d);
    var _0x5a1679 = doc.selection[0].matrix;
    _0x5a1679.tx = _0x11ef5a.tx + (_0x4ef6da.tx - _0x11ef5a.tx) * _0x2cf934;
    _0x5a1679.ty = _0x11ef5a.ty + (_0x4ef6da.ty - _0x11ef5a.ty) * _0x2cf934;
    doc.selection[0].matrix = _0x5a1679;
    doc.setTransformationPoint(_0x30f003);
    var _0x293dcd = get_global_pivot(),
      _0x4418d2 = {
        x: _0x5301e0.x + (_0x5c78f8.x - _0x5301e0.x) * _0x2cf934,
        y: _0x5301e0.y + (_0x5c78f8.y - _0x5301e0.y) * _0x2cf934
      };
    _0x5a1679.tx += _0x4418d2.x - _0x293dcd.x;
    _0x5a1679.ty += _0x4418d2.y - _0x293dcd.y;
    doc.selection[0].matrix = _0x5a1679;
    doc.setTransformationPoint(_0x30f003);
    var _0x293dcd = get_global_pivot();
    return;
  }
  if (_0x2cf934 == 1) {
    _0x3cd8bc.matrix = _0x27a4ea;
  } else {
    _0x27a4ea.tx = _0x11ef5a.tx + (_0x4ef6da.tx - _0x11ef5a.tx) * _0x2cf934;
    _0x27a4ea.ty = _0x11ef5a.ty + (_0x4ef6da.ty - _0x11ef5a.ty) * _0x2cf934;
    _0x3cd8bc.matrix = _0x27a4ea;
    doc.setTransformationPoint(_0x30f003);
    _0x293dcd = get_global_pivot();
    var _0x3d50b0 = {
        x: _0x5301e0.x + (_0x5c78f8.x - _0x5301e0.x) * _0x2cf934,
        y: _0x5301e0.y + (_0x5c78f8.y - _0x5301e0.y) * _0x2cf934
      },
      _0x1e19ce = {
        x: _0x3d50b0.x - _0x293dcd.x,
        y: _0x3d50b0.y - _0x293dcd.y
      };
    _0x27a4ea.tx += _0x1e19ce.x;
    _0x27a4ea.ty += _0x1e19ce.y;
    _0x3cd8bc.matrix = _0x27a4ea;
  }
  doc.setTransformationPoint(_0x30f003);
  if ("instance" == _0x3cd8bc.elementType) {
    if ("symbol" == _0x3cd8bc.instanceType) {
      if ("graphic" == _0x3cd8bc.symbolType) {
        if ("single frame" == _0x3cd8bc.loop) {
          if ("graphic" == _0x16a845.symbolType) {
            _0x2cf934 >= 0.5 && (_0x3cd8bc.firstFrame = _0x16a845.firstFrame);
          }
        }
      }
    }
  }
};
get_shape_dimensions = function (_0xe37070, _0x3cd317) {
  var _0x5524eb = new Object(),
    _0xcfad5 = _0xe37070.matrix,
    _0x38e35c = fl.Math.invertMatrix(_0xe37070.matrix),
    _0x3726e0 = _0xe37070.matrix.tx,
    _0x40796e = _0xe37070.matrix.ty,
    _0x5a2d72 = doc.selection,
    _0x1b033f = timeline.currentFrame;
  select_element(_0xe37070, _0x3cd317);
  undefined == doc.selection[0];
  doc.transformSelection(_0x38e35c.a, _0x38e35c.b, _0x38e35c.c, _0x38e35c.d);
  _0x5524eb.x = _0xe37070.width;
  _0x5524eb.y = _0xe37070.height;
  doc.transformSelection(_0xcfad5.a, _0xcfad5.b, _0xcfad5.c, _0xcfad5.d);
  doc.moveSelectionBy({
    x: _0x3726e0 - _0xe37070.matrix.tx,
    y: _0x40796e - _0xe37070.matrix.ty
  });
  timeline.currentFrame = _0x1b033f;
  doc.selection = _0x5a2d72;
  return _0x5524eb;
};
find_corresponding_element = function (_0x241e43, _0x39639e, _0x110cb2, _0x13d651) {
  if (_0x110cb2 == undefined || _0x39639e == undefined || _0x241e43 == undefined) {
    return undefined;
  }
  var _0x3b926f = new Object();
  if ("shape" == _0x241e43.elementType) {
    _0x241e43.isGroup ? _0x3b926f = get_shape_dimensions(_0x241e43, _0x39639e) : _0x3b926f.x = _0x3b926f.y = -1;
  } else {
    if ("instance" == _0x241e43.elementType) {
      _0x3b926f.x = _0x3b926f.y = -1;
    } else {
      return undefined;
    }
  }
  var _0x38e78c = new transform_components(_0x241e43.matrix),
    _0x1e5adc = _0x38e78c.is_reflected(),
    _0x2acbfb = undefined,
    _0xe1f0cb;
  for (_0xe1f0cb = 0; _0xe1f0cb < _0x110cb2.elements.length; _0xe1f0cb++) {
    var _0x2f601e,
      _0xaa5675,
      _0x23e110 = _0x110cb2.elements[_0xe1f0cb];
    _0xaa5675 = false;
    if ("instance" == _0x23e110.elementType && "instance" == _0x241e43.elementType) {
      _0x23e110.libraryItem == _0x241e43.libraryItem && (_0xaa5675 = true);
    } else {
      if ("shape" == _0x23e110.elementType && "shape" == _0x241e43.elementType) {
        if (_0x23e110.isGroup && _0x241e43.isGroup) {
          var _0x1a6127 = get_shape_dimensions(_0x23e110, _0x110cb2.startFrame);
          Math.abs(_0x1a6127.x - _0x3b926f.x) <= SHAPE_SIZE_TOLERANCE && Math.abs(_0x1a6127.y - _0x3b926f.y) <= SHAPE_SIZE_TOLERANCE && (_0xaa5675 = true);
        } else {
          if (!_0x23e110.isGroup && !_0x241e43.isGroup) {
            return _0x23e110;
          }
        }
      }
    }
    if (_0xaa5675) {
      _0x2acbfb = _0x23e110;
      var _0x36af46 = new transform_components(_0x23e110.matrix),
        _0x2f601e = _0x36af46.is_reflected();
      if (_0x1e5adc == _0x2f601e) {
        return _0x2acbfb;
      }
    }
  }
  if (_0x13d651) {
    return _0x2acbfb;
  }
  return undefined;
};
find_corresponding_elements = function (_0x2e3c11, _0x3613ee) {
  dest_elements = new Array();
  dest_elements.length = _0x2e3c11.length;
  var _0x58f95c = _0x2e3c11.length,
    _0x49fde9 = timeline.currentFrame;
  for (var _0x2cb2f3 = 0; _0x2cb2f3 < _0x58f95c; _0x2cb2f3++) {
    if ("shape" != _0x2e3c11[_0x2cb2f3].elementType || _0x2e3c11[_0x2cb2f3].isGroup) {
      current_src_element = _0x2e3c11[_0x2cb2f3];
      var _0x1b7f4d = current_src_element.layer.frames,
        _0x5a484f = _0x1b7f4d[_0x49fde9],
        _0x304bd5 = _0x1b7f4d[_0x5a484f.startFrame + _0x5a484f.duration];
      if (undefined != _0x304bd5) {
        dest_elements[_0x2cb2f3] = find_corresponding_element(current_src_element, _0x49fde9, _0x304bd5, false);
        undefined != dest_elements[_0x2cb2f3] && (_0x3613ee[_0x2cb2f3] = new Object(), select_element(dest_elements[_0x2cb2f3], _0x304bd5.startFrame), _0x3613ee[_0x2cb2f3].pivot = doc.getTransformationPoint(), _0x3613ee[_0x2cb2f3].global_pivot = get_global_pivot(), "shape" == dest_elements[_0x2cb2f3].elementType && (_0x3613ee[_0x2cb2f3].dimensions = get_shape_dimensions(dest_elements[_0x2cb2f3], _0x304bd5.startFrame)));
      }
    }
  }
  return dest_elements;
};
set_keyframe_same_selection = function () {
  var _0x5de79c = new Array(),
    _0x53d387 = timeline.layers,
    _0x3e4266 = timeline.currentFrame,
    _0x4e57bb,
    _0x453200,
    _0x11cb96,
    _0x471b90 = new Array(),
    _0x4a6d9d = new Array(),
    _0x5b926b = 0;
  for (_0x4e57bb = 0; _0x4e57bb < _0x53d387.length; _0x4e57bb++) {
    _0x4a6d9d[_0x4e57bb] = false;
    var _0x4548c6 = _0x53d387[_0x4e57bb],
      _0x49a341 = _0x4548c6.frames[_0x3e4266];
    if (undefined != _0x49a341) {
      _0x11cb96 = _0x49a341.elements;
      for (_0x453200 = 0; _0x453200 < _0x11cb96.length; _0x453200++) {
        (_0x49a341.startFrame == _0x3e4266 || _0x49a341.tweenType == "none") && (_0x5de79c[_0x5b926b] = _0x11cb96[_0x453200].selected, _0x5de79c[_0x5b926b] && !_0x4548c6.locked && _0x4548c6.visible && (_0x4a6d9d[_0x4e57bb] = true));
        _0x5b926b++;
      }
      _0x4a6d9d[_0x4e57bb] && (_0x471b90.push(_0x4e57bb), _0x471b90.push(_0x3e4266), _0x471b90.push(_0x3e4266 + 1));
    }
  }
  timeline.currentLayer = 0;
  timeline.setSelectedFrames(0, 0);
  doc.selectNone();
  timeline.currentFrame = _0x3e4266;
  var _0x161111 = timeline.currentLayer;
  for (_0x4e57bb = 0; _0x4e57bb < _0x4a6d9d.length; _0x4e57bb++) {
    _0x4a6d9d[_0x4e57bb] && (timeline.currentLayer = _0x4e57bb, _0x3e4266 != timeline.layers[_0x4e57bb].frames[_0x3e4266].startFrame && timeline.insertKeyframe());
  }
  timeline.currentLayer = _0x161111;
  var _0x273bd6 = new Array();
  doc.selectNone();
  _0x5b926b = 0;
  for (_0x4e57bb = 0; _0x4e57bb < _0x53d387.length; _0x4e57bb++) {
    var _0x49a341 = _0x53d387[_0x4e57bb].frames[_0x3e4266];
    if (undefined != _0x49a341) {
      _0x11cb96 = _0x49a341.elements;
      elements_length = _0x11cb96.length;
      for (_0x453200 = 0; _0x453200 < elements_length; _0x453200++) {
        _0x5de79c[_0x5b926b] && _0x273bd6.push(_0x11cb96[_0x453200]);
        _0x5b926b++;
      }
    }
  }
  timeline.setSelectedFrames(_0x471b90);
  doc.selectNone();
  doc.selection = _0x273bd6;
};
get_shape_info = function (_0x28862b) {
  shape_array = [];
  var _0x3a8d12 = {
    layer: _0x28862b[0].layer,
    shape: undefined,
    hint: undefined
  };
  for (var _0x245adc = 0; _0x245adc < _0x28862b.length; _0x245adc++) {
    _0x28862b[_0x245adc].layer != _0x3a8d12.layer && (_0x3a8d12.layer = _0x28862b[_0x245adc].layer, _0x3a8d12.shape = undefined, _0x3a8d12.hint = undefined);
    if (_0x28862b[_0x245adc].elementType == "shape" && !_0x28862b[_0x245adc].isGroup) {
      _0x3a8d12.shape = _0x28862b[_0x245adc];
      var _0x438fa5 = _0x3a8d12.layer.parentLayer;
      if (_0x438fa5 != null && _0x438fa5.layerType == "guide") {
        var _0x1dfa92 = _0x438fa5.frames[doc.getTimeline().currentFrame].elements;
        for (var _0x30fd95 = 0; _0x30fd95 < _0x1dfa92.length; _0x30fd95++) {
          if (_0x1dfa92[_0x30fd95].elementType == "instance" && _0x1dfa92[_0x30fd95].libraryItem.name == SHAPE_HINT_NAME) {
            _0x3a8d12.hint = _0x1dfa92[_0x30fd95];
            break;
          }
        }
      }
    } else {
      _0x3a8d12.hint == undefined && _0x28862b[_0x245adc].elementType == "instance" && _0x28862b[_0x245adc].libraryItem.name == SHAPE_HINT_NAME && (_0x3a8d12.hint = _0x28862b[_0x245adc]);
    }
    _0x3a8d12.hint != undefined && _0x3a8d12.shape != undefined && (shape_array.push(_0x3a8d12), _0x3a8d12 = {
      layer: _0x28862b[_0x245adc].layer,
      shape: undefined,
      hint: undefined
    });
  }
  return shape_array;
};
save_edit_place = function () {
  var _0x2f7663 = new Array(),
    _0xbf3ac6;
  _0xbf3ac6 = new Object();
  _0xbf3ac6.frame = doc.getTimeline().currentFrame;
  _0xbf3ac6.selection = doc.selection;
  _0x2f7663.push(_0xbf3ac6);
  while (doc.getTimeline().name != doc.timelines[doc.currentTimeline].name) {
    doc.exitEditMode();
    _0xbf3ac6 = new Object();
    _0xbf3ac6.object = doc.selection[0];
    _0xbf3ac6.frame = doc.getTimeline().currentFrame;
    _0x2f7663.push(_0xbf3ac6);
  }
  _0x2f7663.push(doc.currentTimeline);
  return _0x2f7663;
};
restore_edit_place = function (_0x23276c) {
  var _0xc873f1;
  doc.currentTimeline = _0x23276c.pop();
  while (doc.getTimeline().name != doc.timelines[doc.currentTimeline].name) {
    doc.exitEditMode();
  }
  while (_0x23276c.length > 1) {
    _0xc873f1 = _0x23276c.pop();
    doc.getTimeline().currentFrame = _0xc873f1.frame;
    doc.selection = [_0xc873f1.object];
    doc.enterEditMode("inPlace");
  }
  _0xc873f1 = _0x23276c.pop();
  doc.getTimeline().currentFrame = _0xc873f1.frame;
  doc.selection = [];
};
auto_tween = function (_0x3ebc31, _0x217577) {
  doc = _0x3ebc31;
  if (doc != null) {
    prof = new Profiler();
    prof.mark("start");
    timeline = doc.getTimeline();
    fl.setActiveWindow(doc);
    var _0x463f5a = doc.getSelectionRect();
    prog = new ProgBar((_0x463f5a.left + _0x463f5a.right) / 2, (_0x463f5a.top + _0x463f5a.bottom) / 2);
    set_keyframe_same_selection();
    var _0x40364a = doc.selection;
    if (_0x40364a.length != 0) {
      var _0x1ee87a = timeline.currentFrame,
        _0x15d47c = get_shape_info(_0x40364a),
        _0x52d81a = new Array(),
        _0x373edc = find_corresponding_elements(_0x40364a, _0x52d81a),
        _0x11f136 = timeline.getSelectedFrames();
      timeline.setSelectedFrames([]);
      var _0xd7a026 = _0x40364a.length;
      prof.mark("found elements");
      prog.setProgress(0);
      for (var _0x266546 = 0; _0x266546 < _0x15d47c.length; _0x266546++) {
        var _0x2a40d6 = _0x15d47c[_0x266546].layer.frames[_0x1ee87a].duration + _0x15d47c[_0x266546].layer.frames[_0x1ee87a].startFrame,
          _0x49a620 = get_shape_info(_0x15d47c[_0x266546].layer.frames[_0x2a40d6].elements);
        if (_0x49a620[0] != undefined) {
          tween_shape_quad(_0x15d47c[_0x266546], _0x49a620[0], _0x1ee87a, _0x217577);
        }
        prog.setProgress((_0x266546 + 1) / Number(_0x15d47c.length));
      }
      prog.setProgress(0);
      for (_0x266546 = 0; _0x266546 < _0xd7a026; _0x266546++) {
        undefined != _0x373edc[_0x266546] && (tween_element(_0x40364a[_0x266546], _0x1ee87a, _0x373edc[_0x266546], _0x217577, _0x52d81a[_0x266546]), prog.setProgress((_0x266546 + 1) / Number(_0xd7a026)));
      }
      prof.mark("tweened elements");
      document.setSelectionRect({
        left: -1000,
        top: -1000,
        right: -990,
        bottom: -990
      });
      timeline.setSelectedFrames(_0x11f136);
      for (_0x266546 = 0; _0x266546 < _0xd7a026; _0x266546++) {
        undefined != _0x40364a[_0x266546] && _0x40364a[_0x266546].elementType == "shape" && !_0x40364a[_0x266546].isGroup && _0x40364a.splice(_0x266546, 1);
      }
      for (_0x266546 = 0; _0x266546 < _0x15d47c.length; _0x266546++) {
        _0x40364a = _0x40364a.concat(get_shape_elements(_0x15d47c[_0x266546].layer, _0x1ee87a));
      }
      doc.selectNone();
      doc.selection = _0x40364a;
      prog.end();
      prof.mark("done");
    }
  }
};