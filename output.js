//Fri Nov 15 2024 08:10:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function () {
  var _0x3764c2 = function () {
    return (() => {
      var _0x40b819,
        _0x1337ca,
        _0x3c3786 = {
          93536: _0x2ce592 => {
            _0x2ce592.exports = function (_0x448cea, _0x1103ad, _0x2fc9d0) {
              'use strict';

              Object.defineProperty(_0x1103ad, "__esModule", {
                value: !0
              });
              _0x1103ad.default = void 0;
              var _0x4ca9af,
                _0x626ff0 = (_0x4ca9af = _0x2fc9d0("@app-module/system.router")) && _0x4ca9af.__esModule ? _0x4ca9af : {
                  default: _0x4ca9af
                },
                _0x18ca50 = {
                  onBackPress: () => !0,
                  async onInit() {
                    let _0x555c87 = this,
                      _0x25e976 = {};
                    try {
                      _0x555c87.$page && _0x555c87.$page.query ? (_0x555c87.$page.query.data && (_0x25e976 = JSON.parse(_0x555c87.$page.query.data)), _0x626ff0.default.push({
                        uri: "/pages/spa",
                        params: _0x25e976
                      })) : _0x626ff0.default.push({
                        uri: "/pages/spa",
                        params: _0x25e976
                      });
                    } catch (_0x4ade1f) {
                      _0x626ff0.default.push({
                        uri: "/pages/spa",
                        params: _0x25e976
                      });
                    }
                  }
                };
              _0x1103ad.default = _0x18ca50;
              const _0xa7bd0e = _0x1103ad.default || _0x448cea.exports,
                _0x1d8ab1 = ["public", "protected", "private"];
              if (_0xa7bd0e.data && _0x1d8ab1.some(function (_0x409bb5) {
                return _0xa7bd0e[_0x409bb5];
              })) {
                throw new Error("页面VM对象中的属性data不可与\"" + _0x1d8ab1.join(",") + "\"同时存在，请使用private替换data名称");
              }
              _0xa7bd0e.data || (_0xa7bd0e.data = {}, _0xa7bd0e._descriptor = {}, _0x1d8ab1.forEach(function (_0x18e02d) {
                const _0x12ac34 = typeof _0xa7bd0e[_0x18e02d];
                if ("object" === _0x12ac34) {
                  _0xa7bd0e.data = Object.assign(_0xa7bd0e.data, _0xa7bd0e[_0x18e02d]);
                  for (const _0x27439b in _0xa7bd0e[_0x18e02d]) _0xa7bd0e._descriptor[_0x27439b] = {
                    access: _0x18e02d
                  };
                }
              }));
            };
          },
          64942: _0x2deb03 => {
            _0x2deb03.exports = {
              ".page": {
                position: "fixed",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center"
              }
            };
          },
          21117: _0x8bf875 => {
            _0x8bf875.exports = {
              type: "div",
              attr: {},
              classList: ["page"]
            };
          }
        },
        _0x453cf1 = {};
      function _0xd273e5(_0x1a5dbf) {
        var _0x215e0e = _0x453cf1[_0x1a5dbf];
        if (void 0 !== _0x215e0e) {
          return _0x215e0e.exports;
        }
        _0x453cf1[_0x1a5dbf] = {
          exports: {}
        };
        var _0x20895b = _0x453cf1[_0x1a5dbf];
        _0x3c3786[_0x1a5dbf](_0x20895b, _0x20895b.exports, _0xd273e5);
        return _0x20895b.exports;
      }
      _0x40b819 = _0xd273e5(64942);
      _0x1337ca = _0xd273e5(93536);
      $app_define$("@app-component/index", [], function (_0xb2dbc6, _0x2ea98b, _0x77657c) {
        _0x1337ca(_0x77657c, _0x2ea98b, _0xb2dbc6);
        _0x2ea98b.__esModule && _0x2ea98b.default && (_0x77657c.exports = _0x2ea98b.default);
        _0x77657c.exports.template = _0xd273e5(21117);
        _0x77657c.exports.style = _0x40b819;
      });
      $app_bootstrap$("@app-component/index", {
        packagerVersion: void 0
      });
    })();
  };
  if ("undefined" == typeof window) {
    return _0x3764c2();
  }
  window.createPageHandler = _0x3764c2;
}();