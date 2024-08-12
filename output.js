//Mon Aug 12 2024 07:53:09 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  "use strict";

  const _0x4d89ed = new class {
      setCache(_0x4d7682, _0x4a1a2d) {
        const _0x3d5577 = {
          key: _0x4d7682,
          data: _0x4a1a2d
        };
        const _0x42ec97 = {
          type: "setCache",
          data: _0x3d5577
        };
        return this.sendMessage(_0x42ec97);
      }
      getCache(_0x2af832) {
        const _0x30a22c = {
          type: "getCache",
          data: _0x2af832
        };
        return this.sendMessage(_0x30a22c);
      }
      getCookie(_0x3c4e6a) {
        const _0x52fb27 = {
          type: "getCookie",
          data: _0x3c4e6a
        };
        return this.sendMessage(_0x52fb27);
      }
      setCookie(_0xfea4c0) {
        const _0x43e4db = {
          type: "setCookie",
          data: _0xfea4c0
        };
        return this.sendMessage(_0x43e4db);
      }
      executeScript(_0xf50613) {
        const _0x2f0cb0 = {
          type: "executeScript",
          data: _0xf50613
        };
        return this.sendMessage(_0x2f0cb0);
      }
      fetch(_0x1a85d6, _0x178a9f, _0x33d6aa) {
        const _0x2460f3 = {
          url: _0x1a85d6,
          payload: _0x178a9f,
          rspType: _0x33d6aa
        };
        const _0x53a83a = {
          type: "fetch",
          data: _0x2460f3
        };
        return this.sendMessage(_0x53a83a);
      }
      fetchText(_0x36cdf3, _0x50eab8) {
        return this.fetch(_0x36cdf3, _0x50eab8);
      }
      fetchJson(_0xd19d70, _0xbab1f5) {
        return this.fetch(_0xd19d70, _0xbab1f5, "json");
      }
      get(_0x59a2cf, _0x1c9b51) {
        const _0x4ee78e = {
          type: "fetch",
          data: {}
        };
        _0x4ee78e.data.url = _0x59a2cf;
        _0x4ee78e.data.rspType = "json";
        _0x4ee78e.data.payload = {
          method: "GET",
          ..._0x1c9b51
        };
        return this.sendMessage(_0x4ee78e);
      }
      post(_0x62ce9c, _0x2e01cf, _0x89b5af) {
        const _0x79e726 = JSON.stringify(_0x2e01cf),
          _0x256e33 = {
            type: "fetch",
            data: {}
          };
        _0x256e33.data.url = _0x62ce9c;
        _0x256e33.data.rspType = "json";
        _0x256e33.data.payload = {
          method: "POST",
          body: _0x79e726,
          ..._0x89b5af
        };
        return this.sendMessage(_0x256e33);
      }
      uploadFile(_0x283756, _0xa38b2, _0x3854df) {
        const _0x56088b = {
            method: "POST",
            body: _0xa38b2,
            ..._0x3854df
          },
          _0x12c1d0 = {
            url: _0x283756,
            payload: _0x56088b
          };
        const _0x36333c = {
          type: "uploadFile",
          data: _0x12c1d0
        };
        return this.sendMessage(_0x36333c);
      }
      tabCreate(_0x17f11e) {
        const _0xe10eff = {
          type: "tabCreate",
          data: _0x17f11e
        };
        return this.sendMessage(_0xe10eff);
      }
      sendMessage(_0x5e645f) {
        return new Promise(_0x15914e => {
          try {
            chrome.extension.sendMessage(_0x5e645f, _0x3691c6 => _0x15914e(_0x3691c6));
          } catch (_0x408afa) {
            const _0x2dc61c = {
              success: !1,
              message: "当前插件不可用，请刷新页面重试"
            };
            _0x15914e(_0x2dc61c);
          }
        });
      }
    }(),
    _0x2b6331 = new class {
      constructor() {
        this.layerIndex = null;
      }
      async update(_0x5dc9c3) {
        if (!_0x5dc9c3) {
          return void this.hide();
        }
        const _0x27c0b6 = _0x5dc9c3.receiver,
          _0x2a116a = _0x5dc9c3.items?.["map"](_0x2a8ff7 => "<div class='emp-ware'>\n            <div class='emp-ware-card'>\n                <img src='" + _0x2a8ff7.cover + "' class='emp-cover'/>\n                <div class='emp-title-wrap'>\n                    <div class='emp-title'>" + _0x2a8ff7.title + "</div>\n                </div>\n            </div>\n            <div class='emp-mate'><span class='emp-label'>规格:</span><em class='emp-spec'>" + (_0x2a8ff7.sku || "") + "</em></div>\n            <div class='emp-mate'><span class='emp-label'>鏁伴噺:</span><em class='emp-num'>" + _0x2a8ff7.count + "</em></div>\n            <div class='emp-mate'><span class='emp-label'>金额:</span><em class='emp-num'>" + _0x2a8ff7.payment + "</em></div>\n            </div>")?.["join"](""),
          _0x5578e0 = [_0x27c0b6.province, _0x27c0b6.city, _0x27c0b6.county, _0x27c0b6.town].filter(_0xc300fe => !!_0xc300fe).join("-"),
          _0xbc7463 = _0x5dc9c3.purchInfo ? "\n            <div class='emp-mate'><span class='emp-label'>采购单号:</span><em class='emp-num'>" + _0x5dc9c3.purchInfo.orderId + "</em></div>\n        " : "",
          _0x458cc9 = "<div id='emp-purchInfo'>\n                <div class='emp-mate'><div class='emp-label'>订单号:</div><div class='emp-orderId'>" + _0x5dc9c3.orderId + "</div></div>\n                <div class='emp-mate emp-address-card'>\n                    <div class='emp-label emp-name'>" + _0x27c0b6.receiver + "</div>\n                    <div class='emp-mobile'>" + _0x27c0b6.mobile + "</div>\n                    <div class='emp-address'>\n                        <div>" + _0x5578e0 + "</div>\n                        <div>" + _0x27c0b6.street + "</div>\n                    </div>\n                </div>\n                <div class='emp-ware-list'>" + _0x2a116a + "</div>\n                <div class='emp-mate'><span class='emp-label'>备注:</span><em>" + _0x5dc9c3.orderRemark + "</em></div>\n                " + _0xbc7463 + "\n        </div>",
          _0x428f9f = $("<a id='emp-purch-cancel'>取消采购</a>");
        this.layerIndex = layer.open({
          title: "核对订单",
          btn: "",
          offset: "r",
          id: "emp-purch-modal",
          area: "280px",
          closeBtn: 0,
          shade: 0,
          type: 1,
          content: _0x458cc9,
          zIndex: 199000020,
          skin: "emp-purch-layer",
          scrollbar: !0,
          success: () => {
            $(".emp-purch-layer").append(_0x428f9f);
            _0x428f9f.on("click", () => {
              _0x4d89ed.setCache("purchInfo", null);
              this.hide();
            });
          }
        });
      }
      hide() {
        layer.close(this.layerIndex);
      }
    }();
  function _0x1797e7(_0x352caf, _0x240b9a = 60000, _0x4d05e8 = 500) {
    const _0x44eda3 = new Date().getTime() + _0x240b9a;
    return new Promise((_0x91ecb0, _0x4cafaa) => {
      if ($(_0x352caf)?.["length"] > 0) {
        return void _0x91ecb0($(_0x352caf));
      }
      const _0x1f5022 = setInterval(() => {
        const _0x16cbca = $(_0x352caf);
        (_0x16cbca?.["length"] ?? 0) > 0 ? (clearInterval(_0x1f5022), _0x91ecb0(_0x16cbca)) : new Date().getTime() > _0x44eda3 && (clearInterval(_0x1f5022), _0x91ecb0(!1));
      }, _0x4d05e8);
    });
  }
  function _0x234f4c(_0x116209, _0x3b3dce) {
    let _0x34f569 = document.createEvent("HTMLEvents");
    _0x116209.value = _0x3b3dce;
    _0x34f569.initEvent("change", !0, !0);
    _0x34f569.eventType = "message";
    _0x116209.dispatchEvent(_0x34f569);
  }
  class _0x37f29c {
    async addressParse(_0x568b74) {
      const _0x1794f3 = "addressParseRst";
      localStorage.removeItem(_0x1794f3);
      (function (_0x29ead9) {
        var _0x1eae16 = document.createElement("script");
        _0x1eae16.type = "text/javascript";
        _0x1eae16.innerHTML = "document.body.setAttribute('data-global', " + _0x29ead9 + ");";
        document.head.appendChild(_0x1eae16);
        document.head.removeChild(_0x1eae16);
        document.body.getAttribute("data-global");
        document.body.setAttribute("data-global", "");
      })("(lib.mtop.H5Request({\n            ecode:1,\n            type:'post',\n            valueType:'string',\n            disableTracker:true,\n            api:'mtop.1688.trade.address.parse',\n            v:'1.0',\n            data:'" + JSON.stringify({
        address: _0x568b74
      }) + "',\n            preventFallback:true,\n            dataType:'jsonp'\n        }).then(e=> localStorage.setItem('" + _0x1794f3 + "', JSON.stringify({address:\"" + _0x568b74 + "\",rst:e}))),1)");
      const _0x49e318 = await function (_0x92264a, _0x17999c = 60000, _0x1d9f29 = 500) {
        const _0x10779a = {
          success: !1,
          message: "等待超时"
        };
        return Promise.race([new Promise((_0x3f430f, _0x2dc95c) => {
          let _0x555c99 = localStorage.getItem(_0x92264a);
          if (null !== _0x555c99) {
            return void _0x3f430f(_0x555c99);
          }
          const _0x37542a = setInterval(() => {
            _0x555c99 = localStorage.getItem(_0x92264a);
            null !== _0x555c99 && (clearInterval(_0x37542a), _0x3f430f(_0x555c99));
          }, _0x1d9f29);
        }), (_0x2a7aef = _0x17999c, new Promise(_0x580cf5 => setTimeout(_0x42fe98 => _0x580cf5(_0x10779a), _0x2a7aef)))]);
        var _0x2a7aef;
      }("addressParseRst");
      localStorage.removeItem(_0x1794f3);
      const _0x476cea = function (_0x2080b0) {
        try {
          return JSON.parse(_0x2080b0);
        } catch (_0x117566) {
          return null;
        }
      }(_0x49e318);
      if (_0x476cea?.["address"] != _0x568b74) {
        return {
          success: !1,
          message: "地址不匹配"
        };
      }
      const _0x1840ec = "200" == _0x476cea.rst?.["data"]?.["httpStatusCode"],
        _0x1cbab8 = _0x476cea.rst?.["data"]?.["ret"]?.["join"](";"),
        _0xad026e = _0x476cea.rst?.["data"]?.["model"],
        _0x336d33 = {
          success: _0x1840ec,
          message: _0x1cbab8,
          data: _0xad026e
        };
      return _0x336d33;
    }
  }
  const _0x4abf36 = {
    async updateAddress(_0xb3efa9) {
      const _0x445249 = _0xb3efa9.receiver,
        _0x47a7c5 = await _0x1797e7(".edit-temp-address"),
        _0x18b13c = await _0x1797e7(".desktop-address-temp", 1000);
      if (console.log("tempAddr", _0x18b13c), _0x18b13c?.["length"] > 0) {
        return this.updateAddressByModal(_0xb3efa9);
      }
      _0x47a7c5?.[0]?.["click"]();
      const _0x41cad7 = await _0x1797e7(".copy-address");
      if (_0x41cad7 && _0x41cad7[0]) {
        const _0x4e823f = _0x445249.province + " " + (_0x445249.city || "") + " " + (_0x445249.county || "") + " " + (_0x445249.town || "") + " " + _0x445249.street,
          _0x2a3c43 = document.querySelector(".address-temp-block textarea.copy-address");
        _0x2a3c43 && _0x234f4c(_0x2a3c43, _0x4e823f);
        document.querySelector("#address .address-temp-block .transform-address").click();
        let _0x5135d3 = await _0x1797e7("#address .address-temp-block .transform-address:contains(鍖归厤涓�)");
        _0x5135d3 = await _0x1797e7("#address .address-temp-block .transform-address:contains(自动匹配地址)");
        const _0xebf27a = document.querySelector("#address .address-temp-block textarea.input-address");
        _0xebf27a && _0x234f4c(_0xebf27a, "" + (_0x445249.town || "") + _0x445249.street);
        const _0x112d36 = document.querySelector("#address .address-temp-block input.input-username");
        _0x112d36 && _0x234f4c(_0x112d36, _0x445249.receiver);
        const _0x36a0c7 = document.querySelector("#address .address-temp-block input.input-mobile");
        _0x36a0c7 && _0x234f4c(_0x36a0c7, _0x445249.mobile);
        document.querySelector("#address .address-temp-block .save").click();
      }
    },
    async updateAddressByModal(_0x3d4ce6) {
      const _0xc977e7 = _0x3d4ce6.receiver,
        _0x340b61 = new _0x37f29c(),
        _0x4298bd = await _0x340b61.addressParse(_0xc977e7.province + " " + _0xc977e7.city + " " + _0xc977e7.county + " " + (_0xc977e7.town || "") + _0xc977e7.street);
      if (_0x4298bd.success && _0x4298bd.data) {
        var _0x440463 = {
          id: "-1",
          addressCode: _0x4298bd.data.districtCode || _0x4298bd.data.cityCode,
          addressCodeText: _0x4298bd.data.province + " " + _0x4298bd.data.city + " " + (_0x4298bd.data.district || ""),
          address: ((_0x4298bd.data.district ? "" : _0xc977e7.county || "") + " " + (_0xc977e7.town || "") + _0xc977e7.street).trim(),
          fullName: _0xc977e7.receiver,
          post: _0x4298bd.data.divisionZip,
          mobilePhone: _0xc977e7.mobile,
          phone: "",
          default: !1,
          temp: !0,
          overseasAddress: !1
        };
        const _0x395a1a = {
          type: "address-dialog-success",
          data: _0x440463
        };
        window.postMessage(JSON.stringify(_0x395a1a, "*"));
      }
    },
    async updateRemark(_0x4bde44) {
      if (_0x4bde44.purchRemark) {
        const _0x14bd60 = document.querySelector("#order .textarea-content textarea.lang-input");
        if (_0x14bd60) {
          const _0x1d23e7 = document.createEvent("HTMLEvents");
          _0x1d23e7.initEvent("mousedown", !0, !1);
          document.querySelector("#order .textarea-trigger ").dispatchEvent(_0x1d23e7);
          _0x14bd60.focus();
          document.execCommand("selectAll", !1, null);
          document.execCommand("insertText", !1, _0x4bde44.purchRemark);
          _0x14bd60.blur();
        }
      }
    },
    initProfit(_0x292309) {
      const _0x2a8705 = $("#make-checkout .checkout-operate .due-total.text-stress").text()?.["trim"](),
        _0xcc9fc7 = parseFloat(_0x2a8705),
        _0x130cf2 = (100 * _0x292309.payment - Math.round(100 * _0xcc9fc7)) / 100,
        _0x2be9fc = _0x292309.payment > 0 ? 100 * _0x130cf2 / _0x292309.payment : 0,
        _0x2c8371 = _0x292309.profitLimit && _0x292309.profitLimit > _0x2be9fc,
        _0x8ffb1d = "<div class='item'>\n                <span style='font-size:.1rem'>利润:</span>\n                <span class='control'><em style='" + (_0x2c8371 ? "color:#c700f9;font-weight:700;font-size:18px;" : "color:#4caf50;font-weight:700;font-size:18px;") + "'>" + _0x130cf2.toFixed(2) + "</em></span>\n            </div> \n            <div class='item'>\n                <span class='label'>利润率:</span>\n                <span class='control'><em style='" + (_0x2c8371 ? "color:#c700f9;font-weight:700;font-size:18px;" : "color:#4caf50;font-weight:700;font-size:18px;") + "'>" + _0x2be9fc.toFixed(2) + "%</em></span>\n            </div>",
        _0x4d5f71 = {
          price: _0xcc9fc7,
          profit: _0x130cf2,
          profitRate: _0x2be9fc
        };
      $(".summary-container .item-due-total").after(_0x8ffb1d);
      return _0x4d5f71;
    },
    purchCheck(_0x4c4e8b, _0x5d6667) {
      const _0x575dd4 = _0x4c4e8b.receiver;
      let _0x5d3cd5 = document.querySelector(".address-info");
      const _0x589c7b = {
        success: !1,
        message: "未从页面上找到地址"
      };
      if (!_0x5d3cd5) {
        return _0x589c7b;
      }
      const _0x171800 = _0x5d3cd5.querySelector(".person-icon")?.["nextSibling"]?.["innerText"],
        _0x22ff5e = _0x5d3cd5.querySelector(".line-label-phone")?.["innerText"],
        _0x337d69 = _0x5d3cd5.querySelector(".line-label-address")?.["innerText"]?.["replace"](/\s/g, "") || "",
        _0x25c197 = {
          success: !1,
          message: "收货城市错误"
        };
      const _0x1b11d2 = {
        success: !0
      };
      return _0x575dd4.mobile != _0x22ff5e ? {
        success: !1,
        message: "收货电话错误"
      } : _0x575dd4.receiver != _0x171800 ? {
        success: !1,
        message: "收货人姓名错误"
      } : -1 == _0x575dd4.city.indexOf("闆勫畨") && -1 == _0x337d69.indexOf(_0x575dd4.city.replace(/\s/g, "")) ? _0x25c197 : -1 == _0x337d69.indexOf(_0x575dd4.street.replace(/\s/g, "")) ? {
        success: !1,
        message: "鏀惰揣鍦板潃閿欒"
      } : _0x4c4e8b.profitLimit && _0x4c4e8b.profitLimit > _0x5d6667.profitRate ? {
        success: !1,
        message: "利润率低于" + _0x4c4e8b.profitLimit + "%"
      } : _0x1b11d2;
    },
    async autoBindOrder(_0x124287, _0x51f83b, _0x312d61 = 0) {
      const _0xf000ef = {
        success: !1,
        message: "未查询到采购单号"
      };
      if (!_0x51f83b) {
        return _0xf000ef;
      }
      if (_0x312d61 || (await _0x1797e7(".pay-success-tips .money", 10000), _0x312d61 = document.querySelector(".pay-success-tips .money").innerText.trim()), !_0x312d61) {
        return {
          success: !1,
          message: "未查询到实付金额"
        };
      }
      const _0x42ffe5 = {
        url: "https://trade.1688.com"
      };
      const _0x12285b = await _0x4d89ed.getCookie(_0x42ffe5);
      let _0x1114f8 = _0x12285b.data?.["find"](_0x46a545 => "lid" == _0x46a545.name)?.["value"];
      if (_0x1114f8 && (_0x1114f8 = decodeURIComponent(_0x1114f8)), !_0x1114f8) {
        return {
          success: !1,
          message: "未查询到采购账号"
        };
      }
      if (_0x124287?.["dc"]) {
        const _0x1e5390 = {
          responseType: "json",
          headers: {}
        };
        _0x1e5390.headers["Content-Type"] = "application/json";
        const _0x40a8ac = _0x124287.dc + "/api/purch/bind",
          _0x3f5aa3 = {
            purchInfo: _0x124287,
            purchOrderId: _0x51f83b,
            purchAccount: _0x1114f8,
            purchSource: 3,
            purchPayment: _0x312d61,
            purchAddress: "",
            purchCookies: JSON.stringify(_0x12285b.data)
          },
          _0x541501 = await _0x4d89ed.post(_0x40a8ac, _0x3f5aa3, _0x1e5390);
        if (!_0x541501.success) {
          return {
            success: !1,
            message: _0x541501.message
          };
        }
      }
      const _0x186bb5 = {
        success: !0,
        message: ""
      };
      return _0x186bb5;
    }
  };
  !async function () {
    const _0x21800d = await _0x4d89ed.getCache("purchInfo"),
      _0x278f1f = _0x21800d?.["data"];
    if (_0x2b6331.update(_0x278f1f), !_0x278f1f) {
      return;
    }
    const {
        pathname: _0x34ad7e
      } = window.location,
      _0x206a44 = function (_0x104cc9) {
        const _0xcb93ee = _0x104cc9.indexOf("?"),
          _0xa32925 = (_0xcb93ee > -1 ? _0x104cc9.substr(_0xcb93ee + 1) : _0x104cc9).split("&");
        let _0x4fb83a = {};
        for (let _0x426341 = 0; _0x426341 < _0xa32925?.["length"]; _0x426341++) {
          const _0x42d36c = _0xa32925[_0x426341]?.["split"]("=");
          2 == _0x42d36c?.["length"] && (_0x4fb83a[_0x42d36c[0]] = _0x42d36c[1]);
        }
        return _0x4fb83a;
      }(window.location.search);
    switch (_0x34ad7e) {
      case "/order/smart_make_order.htm":
      case "/order/smart_commit_order.htm":
        await _0x4abf36.updateAddress(_0x278f1f);
        await _0x4abf36.updateRemark(_0x278f1f);
        await (1000, new Promise(function (_0xcd2b51, _0x5256b5) {
          setTimeout(() => {
            _0xcd2b51();
          }, 1000);
        }));
        const _0x16daf2 = _0x4abf36.initProfit(_0x278f1f),
          _0x13bdd0 = $("#make-checkout .button.make-order");
        _0x13bdd0.hide();
        const _0x5f2f48 = $("<span class=\"button lang-button button-important button-large\" style='margin-left:20px;height:60px;width:180px;line-height:60px;user-select:none;'>提交订单</span>");
        _0x13bdd0.after(_0x5f2f48);
        _0x5f2f48.on("click", _0xea7087 => {
          const _0x147f3c = _0x4abf36.purchCheck(_0x278f1f, _0x16daf2);
          (_0x147f3c.success || confirm(_0x147f3c.message + "，确定要提交订单吗？")) && document.querySelector("#make-checkout .button.make-order").click();
        });
        break;
      case "/order/unify_pay_success.htm":
        const _0x4506b0 = await _0x4abf36.autoBindOrder(_0x278f1f, _0x206a44.orderId),
          _0x56541a = {
            closeBtn: 0,
            btn: ""
          };
        _0x4506b0.success ? (layer.alert("采购单号绑定成功"), await _0x4d89ed.setCache("purchInfo", null)) : layer.alert("采购单号绑定失败:" + _0x4506b0.message, _0x56541a);
        break;
      case "/order/new_step_order_detail.htm":
        const _0x1348cd = document.querySelector("[data-mapping-key=\"toFullName\"]").innerText?.["trim"](),
          _0x23384d = document.querySelector("[data-mapping-key=\"toMobile\"]").innerText?.["trim"](),
          _0x6cdc6f = (document.querySelector("[data-mapping-key=\"toArea\"]").innerText?.["trim"](), document.querySelector(".unit-order-total .total-price").innerText?.["trim"]());
        if (!_0x6cdc6f) {
          return void layer.alert("采购单号绑定失败：未查询到采购成本");
        }
        if (_0x1348cd != _0x278f1f.receiver.receiver || _0x23384d != _0x278f1f.receiver.mobile) {
          return void layer.alert("采购单号绑定失败：收件人信息和采购单不符");
        }
        const _0x16b3eb = await _0x4abf36.autoBindOrder(_0x278f1f, _0x206a44.orderId, _0x6cdc6f),
          _0x3dd526 = {
            closeBtn: 0,
            btn: ""
          };
        _0x16b3eb.success ? (layer.alert("采购单号绑定成功"), await _0x4d89ed.setCache("purchInfo", null)) : layer.alert("采购单号绑定失败:" + _0x16b3eb.message, _0x3dd526);
    }
  }();
})();