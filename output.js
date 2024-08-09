//Fri Aug 09 2024 06:31:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function (_0x4ec71f, _0x321663) {
  function _0x4afaec() {
    _0x1f5ee3 && (publicClient.showLoadPlug(), recharge_H5module_inner.getLocal({
      type: "get",
      userInfo: _0x6393e4,
      reqBody: {
        cellNum: _0x1f5ee3
      },
      success: function (_0x4ec71f) {
        if (publicClient.closeLoadPlug(), "000000" == _0x4ec71f.retCode) {
          var _0x321663 = new Date("2018/01/02 19:00:00").getTime(),
            _0x4afaec = new Date("2018/01/04 09:00:00").getTime(),
            _0x13269e = new Date().getTime();
          if (_0x4ec71f.data.prov_cd) {
            if ("971" == _0x4ec71f.data.prov_cd && _0x13269e >= _0x321663 && _0x13269e <= _0x4afaec) {
              _0x1f5ee3 = null;
              var _0x2b9775 = publicClient.showProName(_0x4ec71f.data.prov_cd);
              $(".address-name").html(_0x2b9775 + "移动").addClass("addActive");
              $(".recharge-btn,.recharge-shadow").addClass("disable");
            } else {
              var _0x2b9775 = publicClient.showProName(_0x4ec71f.data.prov_cd);
              _0x2bdaee = _0x4ec71f.data.prov_cd;
              _0x35dd62 = _0x4ec71f.data.cityCode;
              $(".address-name").removeClass("lightBlue").addClass("addActive").html(_0x2b9775 + "移动");
              _0x5bdf6f($(".tel-input").val());
              _0xd2f33();
            }
          }
        } else {
          "700001" == _0x4ec71f.retCode ? (_0x1f5ee3 = null, $(".address-name").html("仅支持移动号码充值").removeClass("addActive").addClass("lightBlue"), publicClient.toastPlug("仅支持移动号码充值，请确认号码是否为移动号码！", 2000), _0xf44882()) : (_0x1f5ee3 = null, "999999" == _0x4ec71f.retCode && (_0x4ec71f.retMsg = "号码格式错误，请重新输入"), publicClient.sessionFailurePrompt(_0x4ec71f), _0xf44882());
        }
        $(".tel-input").blur();
      },
      error: function (_0x4ec71f) {
        _0xf44882();
        publicClient.closeLoadPlug();
      }
    }));
  }
  function _0x3c6953(_0x4ec71f) {
    recharge_H5module_inner.getTopOperation({
      type: "get",
      userInfo: _0x6393e4,
      reqBody: {
        cellNum: _0x1f5ee3,
        channel: "11",
        provCode: _0x4ec71f,
        optId: "44"
      },
      success: function (_0x4ec71f) {
        var _0x321663 = _0x4ec71f && _0x4ec71f.data && _0x4ec71f.data.optInfoList;
        _0x321663 && _0x321663.map(function (_0x4ec71f) {
          if ("041100" == _0x4ec71f.areaID) {
            var _0x321663 = _0x4ec71f.optItems;
            _0x321663 && _0x321663.map(function (_0x4ec71f) {
              "44" == _0x4ec71f.optID && _0x4ec71f.picItems && _0x4ec71f.picItems[0] && ($(".isClose-box").children().removeClass("hidden"), $("#dynamicOpertainImg").attr("src", _0x4ec71f.picItems[0] && _0x4ec71f.picItems[0].picUrl), $("#dynamicOpertainTxt").text(_0x4ec71f.picItems[0] && _0x4ec71f.picItems[0].picTag), $(".isClose-box").off("fastClick"), $(".isClose-box").fastClick(function () {
                var _0x321663 = _0x4ec71f.picItems[0] && _0x4ec71f.picItems[0].linkUrl;
                publicClient.setGdpTrace({}, "clk", {
                  WT_envName: "家人充",
                  WT_event: "P00000051687",
                  WT_adverType: "122",
                  WT_next_url: _0x321663
                });
                _0x2fa4e9(_0x321663);
              }));
            });
          }
          _0x4cb89b(_0x4ec71f, "041101", ".footer-box > .order");
          _0x4cb89b(_0x4ec71f, "041102", ".footer-box > .drawInvoice");
        });
        $(".footer-box > .order").html() || $(".footer-box > .order").remove();
        $(".footer-box > .drawInvoice").html() || $(".footer-box > .drawInvoice").remove();
      },
      error: function (_0x4ec71f) {}
    });
  }
  function _0x4cb89b(_0x4ec71f, _0x321663, _0x4afaec) {
    var _0x3c6953 = {
      ".footer-box > .order": "footer-label-left",
      ".footer-box > .drawInvoice": "footer-label"
    };
    if (_0x4ec71f.areaID == _0x321663) {
      var _0x4cb89b = _0x4ec71f.optItems;
      _0x4cb89b && _0x4cb89b.map(function (_0x4ec71f) {
        "44" == _0x4ec71f.optID && _0x4ec71f.picItems && _0x4ec71f.picItems[0] && (_0x4ec71f.picItems[0].picTag ? ($(_0x4afaec).attr("jump-url", _0x4ec71f.picItems[0].linkUrl), _0x4ec71f.picItems[0].eventDesc && ($(_0x4afaec).addClass(_0x3c6953[_0x4afaec]), $(_0x4afaec).attr("data-label", _0x4ec71f.picItems[0].eventDesc.substr(0, 3))), $(_0x4afaec).html(_0x4ec71f.picItems[0].picTag.substr(0, 4))) : $(_0x4afaec).remove());
      });
    }
  }
  function _0xd2f33() {
    _0x32ed15(_0x2bdaee, _0x35dd62);
    _0x4575c1 || _0x162414();
    _0x36c5bb && _0x36c5bb == _0x1f5ee3 ? "250" == _0x2bdaee && _0x49bd4c() : $("#js-coupons").addClass("hidden");
    $(".benefit-box .benefit-list:visible").last().removeClass("onepx");
  }
  function _0x162414() {
    recharge_H5module_inner.getReminder({
      type: "get",
      userInfo: _0x6393e4,
      reqBody: {
        provCode: _0x2bdaee,
        funcCode: "040100"
      },
      success: function (_0x4ec71f) {
        if ("000000" == _0x4ec71f.retCode && _0x4ec71f.data) {
          for (var _0x321663 = "", _0x4afaec = 0; _0x4afaec < _0x4ec71f.data.length; _0x4afaec++) {
            "040100" === _0x4ec71f.data[_0x4afaec].funcCode && (_0x321663 = _0x4ec71f.data[_0x4afaec].tipContent);
          }
          $("#reminder-text").html(_0x321663.trim());
          0 == _0x4ec71f.data.length && _0x12d890();
        }
      },
      error: function (_0x4ec71f) {
        _0x12d890();
      }
    });
  }
  function _0x12d890() {
    recharge_H5module_inner.getReminder({
      type: "get",
      userInfo: _0x6393e4,
      reqBody: {
        provCode: "99",
        funcCode: "040100"
      },
      success: function (_0x4ec71f) {
        if ("000000" == _0x4ec71f.retCode && _0x4ec71f.data) {
          for (var _0x321663 = "", _0x4afaec = 0; _0x4afaec < _0x4ec71f.data.length; _0x4afaec++) {
            "040100" === _0x4ec71f.data[_0x4afaec].funcCode && (_0x321663 = _0x4ec71f.data[_0x4afaec].tipContent);
          }
          $("#reminder-text").html(_0x321663.trim());
        }
      },
      error: function (_0x4ec71f) {}
    });
  }
  function _0x13ebb5(_0x4ec71f, _0x321663) {
    "undefined" != typeof recharge_H5module && recharge_H5module.second({
      userInfo: _0x6393e4,
      reqBody: {
        provinceCode: _0x4ec71f,
        cityCode: _0x321663,
        cellNum: _0x36c5bb,
        location: "22"
      },
      success: function (_0x4ec71f) {
        if ("000000" == _0x4ec71f.retCode && _0x4ec71f.rspBody && _0x4ec71f.rspBody.pageList && _0x4ec71f.rspBody.pageList[0] && 1 == _0x4ec71f.rspBody.pageList[0].isShow) {
          var _0x321663 = _0x4ec71f.rspBody.pageList[0],
            _0x4afaec = [],
            _0x3c6953 = "";
          _0x321663.ssoUrlAddr && (_0x3c6953 = _0x321663.ssoUrlAddr);
          _0x321663.paramList && (_0x4afaec = _0x321663.paramList);
          leadeon.assistiveControl({
            debug: !1,
            id: _0x321663.id,
            iconUrl: _0x321663.iconUrl,
            actionUrl: _0x321663.actionUrl,
            isShare: _0x321663.isShare,
            verifyType: _0x321663.verifyType,
            loginType: _0x321663.loginType,
            isSso: _0x321663.isSso,
            ssoUrlAddr: _0x3c6953,
            location: "22",
            paramList: _0x4afaec,
            success: function (_0x4ec71f) {},
            error: function (_0x4ec71f) {}
          });
        }
      },
      error: function (_0x4ec71f) {}
    });
  }
  function _0x5ea2f4(_0x4ec71f) {
    recharge_H5module_inner.getMaskBoxInfo({
      type: "get",
      userInfo: _0x6393e4,
      reqBody: {
        boxId: _0x4ec71f,
        channel: "11",
        cellNum: _0x36c5bb
      },
      async: !1,
      dataType: "json",
      timeout: 2000,
      success: function (_0x4ec71f) {
        "000000" == _0x4ec71f.retCode ? (_0x4ec71f.data && _0x4ec71f.data.boxList ? (_0x5a38ca.maskRights = _0x4ec71f.data.boxList, _0x326256.map(function (_0x4ec71f) {
          _0x4ec71f.prods = _0x4ec71f.prods || [];
          for (var _0x321663 = 0; _0x321663 < _0x5a38ca.maskRights.length; _0x321663++) {
            _0x4ec71f.operateId == _0x5a38ca.maskRights[_0x321663].ruleId && _0x4ec71f.prods.push(_0x5a38ca.maskRights[_0x321663]);
          }
        })) : _0x5a38ca.maskRights = [], _0x4ec71f.data && _0x4ec71f.data.orderList && _0x4ec71f.data.orderList.length > 0 ? (_0x5a38ca.maskOrderStatue = _0x4ec71f.data.orderList[0].orderStatus, _0x5a38ca.blindOrderInfo = _0x4ec71f.data.orderList[0], 0 == _0x5a38ca.maskOrderStatue && $(".unpaid-prompt").addClass("hidden")) : _0x5a38ca.maskOrderStatue = null) : _0x5a38ca.maskRights = [];
        _0xf44882();
      },
      error: function () {
        _0x5a38ca.maskRights = [];
        _0x5a38ca.maskOrderStatue = null;
        _0xf44882();
      }
    });
  }
  function _0x2da267(_0x4ec71f) {
    recharge_H5module_inner.getRightgoodsInfo({
      type: "get",
      userInfo: _0x6393e4,
      reqBody: {
        boxId: _0x4ec71f,
        channel: "11",
        cellNum: _0x36c5bb
      },
      async: !1,
      dataType: "json",
      timeout: 2000,
      success: function (_0x4ec71f) {
        if ("000000" == _0x4ec71f.retCode) {
          if (_0x4ec71f.data && _0x4ec71f.data.boxList && _0x4ec71f.data.boxList.length == _0x4d05f9) {
            _0x4ec71f.data.boxList = _0x4ec71f.data.boxList && _0x4ec71f.data.boxList.map(function (_0x4ec71f) {
              var _0x321663 = _0x4ec71f.imgCode.split("|");
              _0x4ec71f.imgCode = _0x321663[0];
              _0x4ec71f.imgLitCode = _0x321663.length > 1 && _0x321663[1];
              return _0x4ec71f;
            });
            _0xc0398b.addtionRights = _0x4ec71f.data.boxList;
            for (var _0x321663 = [], _0x4afaec = 0; _0x4afaec < _0x13c05b.length; _0x4afaec++) {
              for (var _0x3c6953 = 0; _0x3c6953 < _0x4ec71f.data.boxList.length; _0x3c6953++) {
                if (_0x13c05b[_0x4afaec].presentCode.split("|")[1] == _0x4ec71f.data.boxList[_0x3c6953].skuid) {
                  _0x321663.push(_0x4ec71f.data.boxList[_0x3c6953]);
                  break;
                }
              }
            }
            _0xc0398b.addtionRights = _0x321663;
            _0x4c6ac1 = !0;
          } else {
            _0xc0398b.addtionRights = [];
            _0x326256.length > 0 && _0x5ea2f4(_0x326256[0].presentCode);
          }
          if (_0x4ec71f.data && _0x4ec71f.data.orderList) {
            if (_0x4ec71f.data.orderList.length > 0) {
              if (_0xc0398b.addtionOrderStatue = _0x4ec71f.data.orderList[0].orderStatus, _0xc0398b.addtionOrderInfo = _0x4ec71f.data.orderList[0], 0 == _0xc0398b.addtionOrderStatue) {
                $(".unpaid-prompt").addClass("hidden");
              } else {
                if (4 == _0xc0398b.addtionOrderStatue) {
                  for (var _0x4afaec = 0; _0x4afaec < _0xc0398b.addtionRights.length; _0x4afaec++) {
                    if (_0xc0398b.addtionRights[_0x4afaec].skuid == _0xc0398b.addtionOrderInfo.busiCode) {
                      _0xc0398b.addtionOrderInfo.imgSrc = _0xc0398b.addtionRights[_0x4afaec].imgLitCode;
                      break;
                    }
                  }
                }
              }
            } else {
              _0xc0398b.addtionOrderStatue = null;
            }
          } else {
            _0xc0398b.addtionOrderStatue = null;
          }
        } else {
          _0xc0398b.addtionRights = [];
        }
        _0xf44882();
      },
      error: function () {
        _0xc0398b.addtionRights = [];
        _0xc0398b.addtionOrderStatue = null;
        _0x5625fa = !1;
        _0xf44882();
      }
    });
  }
  function _0x4db6f1(_0x4ec71f) {
    _0x3f82eb.map(function (_0x321663) {
      if (_0x321663.operateId == _0x2257f2) {
        var _0x4afaec = (_0x321663.presentCode || "").split("|");
        _0x26a207 = _0x4afaec[1];
        _0x52c2ad = _0x4afaec[0];
        _0x4ec71f || ($("#jf-change-money").html(_0x26a207), $("#jf-use-point").html(_0x52c2ad), $(".jfRecharge").removeClass("hidden"));
      }
    });
  }
  function _0x577ed4() {
    publicClient.showLoadPlug();
    recharge_H5module_inner.getrightstoreInfo({
      type: "get",
      userInfo: _0x6393e4,
      reqBody: {
        boxId: _0x19da5a.boxId,
        channel: "11",
        cellNum: _0x36c5bb,
        skuId: _0x19da5a.skuid
      },
      async: !1,
      dataType: "json",
      timeout: 2000,
      success: function (_0x321663) {
        publicClient.closeLoadPlug();
        $(".recharge-btn,.recharge-shadow").removeClass("disable");
        "000000" == _0x321663.retCode ? _0x321663.data.hasGoods ? (_0x19bd19 = _0x19da5a.additionOperateId, _0x3a1842 = _0x19da5a.price, _0x2ad995 = "9", $(".addtionSms .addtionAmount").html(publicClient.floating(Number(_0x2763c2) + Number(_0x19da5a.price))), $(".addtionSms .desc").html(_0x485ccd + "元话费充值和" + _0x19da5a.goodsName + "权益"), $(".init-button").removeClass("disable"), $(".addtionSms").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow"), $(".mask-box-box").removeClass("reminder-to-bottom").addClass("reminder-to-top"), publicClient.setGdpTrace({}, "popview", {
          WT_envName: "加购热门权益_二次确认弹窗_弹窗出现",
          WT_event: "H5PopShow",
          WT_es: _0x4ec71f.location.href,
          WT_ti: "客户端话费充值"
        })) : publicClient.toastPlug("所选商品库存不足，请选择其他商品购买", 2000) : publicClient.showDialogPlug("系统繁忙，请稍后再试", "知道了");
      },
      error: function () {
        publicClient.closeLoadPlug();
        publicClient.showDialogPlug("系统繁忙，请稍后再试", "知道了");
        $(".recharge-btn,.recharge-shadow").removeClass("disable");
      }
    });
  }
  function _0x1a366a() {
    recharge_H5module_inner.getrightlistInfo({
      type: "get",
      userInfo: _0x6393e4,
      reqBody: {
        channel: "11",
        cellNum: _0x36c5bb
      },
      async: !1,
      dataType: "json",
      timeout: 2000,
      success: function (_0x4ec71f) {
        var _0x321663 = {
          blindRecords: [],
          renderText: "暂无购买记录，快去购买吧~"
        };
        "000000" == _0x4ec71f.retCode ? _0x4ec71f.data && _0x4ec71f.data.length > 0 ? ($(".blindRecord > .blindBoxRecord-dialog").removeClass("blindBoxRecord-dialog-none"), $(".blindBoxRecord-content").removeClass("blindBoxRecord-content-none"), _0x321663.blindRecords = _0x4ec71f.data) : ($(".blindRecord > .blindBoxRecord-dialog").addClass("blindBoxRecord-dialog-none"), $(".blindBoxRecord-content").addClass("blindBoxRecord-content-none")) : ($(".blindRecord > .blindBoxRecord-dialog").addClass("blindBoxRecord-dialog-none"), $(".blindBoxRecord-content").addClass("blindBoxRecord-content-none"), _0x321663.renderText = "系统繁忙，如需查询历史购买记录，请去“中国移动APP-权益-我的-我的订单”中查看详细订购记录");
        var _0x4afaec = $("#blindRecordTpl").html();
        juicer.register("getDateym", _0x48501c);
        var _0x3c6953 = juicer(_0x4afaec, _0x321663);
        $(".addtion-box-records").html(_0x3c6953);
      },
      error: function () {
        var _0x4ec71f = {
          blindRecords: [],
          renderText: "系统繁忙，如需查询历史购买记录，请去“中国移动APP-权益-我的-我的订单”中查看详细订购记录"
        };
        $(".blindRecord > .blindBoxRecord-dialog").addClass("blindBoxRecord-dialog-none");
        $(".blindBoxRecord-content").addClass("blindBoxRecord-content-none");
        var _0x321663 = $("#blindRecordTpl").html();
        juicer.register("getDateym", _0x48501c);
        var _0x4afaec = juicer(_0x321663, _0x4ec71f);
        $(".addtion-box-records").html(_0x4afaec);
      }
    });
  }
  function _0x2a47b2() {
    recharge_H5module_inner.getBlindRecord({
      type: "get",
      userInfo: _0x6393e4,
      reqBody: {
        channel: "11",
        cellNum: _0x36c5bb
      },
      async: !1,
      dataType: "json",
      timeout: 2000,
      success: function (_0x4ec71f) {
        var _0x321663 = {
          blindRecords: [],
          renderText: "暂无购买记录，快去购买吧~"
        };
        "000000" == _0x4ec71f.retCode ? _0x4ec71f.data && _0x4ec71f.data.length > 0 ? ($(".blindRecord > .blindBoxRecord-dialog").removeClass("blindBoxRecord-dialog-none"), $(".blindBoxRecord-content").removeClass("blindBoxRecord-content-none"), _0x321663.blindRecords = _0x4ec71f.data) : ($(".blindRecord > .blindBoxRecord-dialog").addClass("blindBoxRecord-dialog-none"), $(".blindBoxRecord-content").addClass("blindBoxRecord-content-none")) : ($(".blindRecord > .blindBoxRecord-dialog").addClass("blindBoxRecord-dialog-none"), $(".blindBoxRecord-content").addClass("blindBoxRecord-content-none"), _0x321663.renderText = "系统繁忙，如需查询历史购买记录，请去“中国移动APP-权益-我的-我的订单”中查看详细订购记录");
        var _0x4afaec = $("#blindRecordTpl").html();
        juicer.register("getDateym", _0x48501c);
        var _0x3c6953 = juicer(_0x4afaec, _0x321663);
        $(".blind-box-records").html(_0x3c6953);
      },
      error: function () {
        var _0x4ec71f = {
          blindRecords: [],
          renderText: "系统繁忙，如需查询历史购买记录，请去“中国移动APP-权益-我的-我的订单”中查看详细订购记录"
        };
        $(".blindRecord > .blindBoxRecord-dialog").addClass("blindBoxRecord-dialog-none");
        $(".blindBoxRecord-content").addClass("blindBoxRecord-content-none");
        var _0x321663 = $("#blindRecordTpl").html();
        juicer.register("getDateym", _0x48501c);
        var _0x4afaec = juicer(_0x321663, _0x4ec71f);
        $(".blind-box-records").html(_0x4afaec);
      }
    });
  }
  function _0x4ccb5d(_0x4ec71f) {
    (_0x4ff43c && _0x4ff43c.filter(function (_0x4ec71f) {
      return 0 != Object.keys(_0x4ec71f).length;
    }) || []).length > 0 ? _0x53821d() : _0x1f5ee3 == _0x36c5bb && recharge_H5module_inner.getIopOperationInfo({
      type: "post",
      noEncrypt: !0,
      userInfo: _0x6393e4,
      reqBody: {
        provinceCode: _0x4ec71f,
        pageType: "1",
        loginNo: _0x36c5bb,
        cellNum: _0x36c5bb
      },
      async: !0,
      dataType: "json",
      time: 10000,
      success: function (_0x4ec71f) {
        if ("000000" == _0x4ec71f.retCode) {
          var _0x321663 = (_0x4ec71f.data.operatingGear || []).slice(0, 2);
          _0x321663 && _0x321663.map(function (_0x4ec71f, _0x321663) {
            _0x4ff43c.splice(_0x321663, 1, _0x4ec71f);
          });
          _0x53821d();
          _0x1e752a(_0x4ec71f);
        }
      },
      error: function () {}
    });
  }
  function _0x32ed15(_0x4ec71f, _0x321663) {
    var _0x4afaec = [{
      locaMon: "10"
    }, {
      locaMon: "20"
    }, {
      locaMon: "30"
    }, {
      locaMon: "50"
    }, {
      locaMon: "100"
    }, {
      locaMon: "200"
    }];
    recharge_H5module_inner.getChargeCorner({
      type: "get",
      userInfo: _0x6393e4,
      reqBody: {
        provCode: _0x4ec71f,
        cellNum: _0x1f5ee3
      },
      async: !1,
      dataType: "json",
      timeout: 2000,
      success: function (_0x4ec71f) {
        if ("000000" == _0x4ec71f.retCode) {
          var _0x321663 = !!_0x4ec71f.data && !!_0x4ec71f.data.cornerList && _0x4ec71f.data.cornerList;
          _0x321663.length == _0x9abc0 ? (_0x3b1321(_0x321663), _0x33dfc2(_0x321663)) : (_0x3b1321(_0x4afaec), _0x33dfc2());
        } else {
          _0x3b1321(_0x4afaec);
          _0x33dfc2();
        }
      },
      error: function () {
        _0x3b1321(_0x4afaec);
        _0x33dfc2();
      }
    });
  }
  function _0x409808(_0x4ec71f) {
    var _0x321663 = _0x4ec71f;
    (Number(_0x58dd3c) > Number(_0x4ec71f) || Number(_0x4ec71f) > Number(_0xf316cf)) && (_0x321663 = 0);
    return _0x321663;
  }
  function _0x1c8c02(_0x4ec71f) {
    var _0x321663 = publicClient.getQueryString("type"),
      _0x4afaec = publicClient.getQueryString("amount");
    "0" == _0x321663 && _0x4afaec || _0x4ec71f ? (_0x4ec71f && (_0x4afaec || (_0x4afaec = _0x4ec71f)), _0x6393e4.phoneNumber && (_0x1f5ee3 = _0x6393e4.phoneNumber), publicClient.getQueryString("telNo") && (_0x1f5ee3 = publicClient.getQueryString("telNo"), _0x1f5ee3 = _0x337bb8(_0x1f5ee3)), _0x485ccd = _0x409808(Number(_0x4afaec)), $(".num-item").removeClass("active"), $(".num-item").eq(_0x9abc0).addClass("active"), _0x485ccd > 0 && ($(".money-input").val(_0x485ccd), $(".num-item").eq(_0x9abc0).children(".money").html(_0x485ccd + "元" + _0x2d87bb).removeClass("hidden")), _0x4ec71f && ($(".num-item").eq(_0x9abc0).children(".money").addClass("calcul-money"), $("#calcul-money-tip").html("欠费金额"))) : publicClient.getQueryString("telNo") && publicClient.getQueryString("amount") ? 11 === publicClient.getQueryString("telNo").length ? (_0x1f5ee3 = publicClient.getQueryString("telNo"), _0x1f5ee3 = _0x337bb8(_0x1f5ee3), _0x485ccd = Number(publicClient.getQueryString("amount")), _0x43041a()) : publicClient.showDialogPlug("手机号码格式不正确", "知道了") : _0x39d54b && _0x39d54b.length > 0 && !_0x4afaec && (_0x485ccd = Number(_0x39d54b[0].locaMon), $(".num-item").eq(0).hasClass("num-item-gear-one") ? $(".num-item").eq(0).addClass("gear-one-active").siblings().removeClass("active") : $(".num-item").eq(0).addClass("active").siblings().removeClass("active"));
  }
  function _0x43041a() {
    if (_0x39d54b && _0x39d54b.length > 0) {
      $(".num-item").removeClass("active gear-one-active");
      for (var _0x4ec71f = !1, _0x321663 = 0; _0x321663 < _0x39d54b.length; _0x321663++) {
        if (Number(_0x39d54b[_0x321663].locaMon) == Number(_0x485ccd)) {
          _0x4ec71f = !0;
          $(".num-item").eq(_0x321663).hasClass("num-item-gear-one") ? $(".num-item").eq(_0x321663).addClass("gear-one-active") : $(".num-item").eq(_0x321663).addClass("active");
          break;
        }
      }
      _0x4ec71f || (_0x485ccd = _0x409808(_0x485ccd), $(".num-item").removeClass("active"), $(".num-item").eq(_0x9abc0).addClass("active"), _0x485ccd > 0 && ($(".money-input").val(_0x485ccd), $(".num-item").eq(_0x9abc0).children(".money").html(_0x485ccd + "元" + _0x2d87bb).removeClass("hidden")));
    } else {
      _0x56ea59[publicClient.getQueryString("amount") + ""] ? (_0x485ccd = Number(publicClient.getQueryString("amount")), $(".num-item").removeClass("active"), $(".num-item").eq(_0x56ea59[_0x485ccd + ""] - 1).addClass("active")) : (_0x485ccd = _0x409808(_0x485ccd), $(".num-item").removeClass("active"), $(".num-item").eq(_0x9abc0).addClass("active"), _0x485ccd > 0 && ($(".money-input").val(_0x485ccd), $(".num-item").eq(_0x9abc0).children(".money").html(_0x485ccd + "元" + _0x2d87bb).removeClass("hidden")));
    }
  }
  function _0x555a09(_0x4ec71f, _0x321663) {
    _0x321663 = _0x321663 || [7, 8, 0];
    var _0x4afaec = _0x4ec71f.split(".");
    return _0x4afaec[0] > _0x321663[0] || _0x4afaec[0] == _0x321663[0] && _0x4afaec[1] > _0x321663[1] || _0x4afaec[0] == _0x321663[0] && _0x4afaec[1] == _0x321663[1] && _0x4afaec[2] >= _0x321663[2];
  }
  function _0x2f371a(_0x321663, _0x4afaec) {
    localStorage.removeItem("cmcc-protocal-content");
    localStorage.removeItem("cmcc-protocal-page-title");
    recharge_H5module_inner.getProtocolInfo({
      type: "post",
      noEncrypt: !0,
      userInfo: _0x6393e4,
      reqBody: {
        cellNum: _0x36c5bb,
        operateId: _0x321663,
        homeProv: _0x2bdaee
      },
      async: !1,
      dataType: "json",
      time: 3000,
      success: function (_0x321663) {
        if ("000000" == _0x321663.retCode) {
          _0x321663.data.protocolName && $(".product-info-use-desc-protocal").html("《" + _0x321663.data.protocolName + "》");
          var _0x3c6953 = "https://touch.10086.cn/i/reapp/v2.0/pages/recharge/";
          _0x4ec71f.location.href.indexOf("/i/gray") > -1 && (_0x3c6953 = "https://touch.10086.cn/i/gray/reapp/v2.0/pages/recharge/");
          _0x321663.data.protocolContent && ($(".product-info-use-desc-protocal").attr("openUrl", _0x3c6953 + "recharge_rule_ds.html"), localStorage.setItem("cmcc-protocal-content", _0x321663.data.protocolContent), localStorage.setItem("cmcc-protocal-page-title", _0x321663.data.protocolName));
          _0x4afaec(_0x321663.data.protocolContent, _0x321663.data.protocolName);
        } else {
          _0x4afaec();
        }
      },
      error: function () {
        _0x4afaec();
      }
    });
  }
  function _0xc30dc9() {
    var _0x321663 = _0x3ba5d4[_0x4b743d] || {};
    if (_0x4258a1 && (_0x321663 = _0x3d353a[0]), "12" == _0x321663.saleType) {
      $("#pure-order-product-title").html(_0x321663.saleName);
      var _0x4afaec = "https://wx.10086.cn/website/businessPlatform/confirmOrder?normid=" + _0x321663.normCdgId + "&secondChannel=ZGYDAPPCZ";
      _0x4ec71f.location.href.indexOf("gray") > -1 && (_0x4afaec = "https://wx.10086.cn/website/businessPlatform/confirmOrder?grayscale=grayshop&normid=" + _0x321663.normCdgId + "&secondChannel=ZGYDAPPCZ");
      return void (_0x555a09(_0x6393e4.version, [7, 5, 6]) ? leadeon.getYDRZToken({
        debug: !1,
        sourceId: "017018",
        success: function (_0x4ec71f) {
          _0x4afaec += "&leadeonToken=" + (_0x4ec71f && _0x4ec71f.token);
          $("#pure-order-product-url").attr("src", _0x4afaec);
          $(".pureAddSms").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow");
          $(".mask-box-box").removeClass("reminder-to-bottom").addClass("reminder-to-top");
        },
        error: function () {
          $("#pure-order-product-url").attr("src", _0x4afaec);
          $(".pureAddSms").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow");
          $(".mask-box-box").removeClass("reminder-to-bottom").addClass("reminder-to-top");
        }
      }) : ($("#pure-order-product-url").attr("src", _0x4afaec), $(".pureAddSms").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow"), $(".mask-box-box").removeClass("reminder-to-bottom").addClass("reminder-to-top")));
    }
    $("#unit-order-product-title").html(_0x321663.saleName);
    _0x4258a1 ? ($(".product-info-use-title").addClass("hidden"), $("#unit-order-product-desc").addClass("product-info-use-desc-sqb")) : ($(".product-info-use-title").removeClass("hidden"), $("#unit-order-product-desc").removeClass("product-info-use-desc-sqb"));
    $("#unit-order-product-desc").html(_0x2f22f5(_0x321663.saleDesc));
    _0x321663.agreeName && $(".product-info-use-desc-protocal").html("《" + _0x321663.agreeName + "》");
    _0x321663.agreeUrl && $(".product-info-use-desc-protocal").attr("openUrl", _0x321663.agreeUrl);
    _0x321663.agreeName && _0x321663.agreeUrl ? $(".product-info-read-check").attr("does-click", "can") : _0x2f371a(_0x321663.operateId, function () {
      $(".product-info-read-check").attr("does-click", "can");
    });
    $(".product-info-read-con").hasClass("active") && $(".product-info-read-con").removeClass("active");
    $(".init-button").removeClass("disable");
    $(".provinceAddSms").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow");
    $(".mask-box-box").removeClass("reminder-to-bottom").addClass("reminder-to-top");
    $(".provinceAddSms .validate-pno").html("<span class='validate-pno-sty'>" + _0x36c5bb.substring(0, 3) + "****" + _0x36c5bb.substring(7, 11) + "</span>");
    _0x4258a1 ? publicClient.setGdpTrace({}, "popview", {
      WT_envName: "充值页面_省钱包业务订购弹窗_弹窗出现",
      WT_event: "H5PopShow",
      XY_sqb_group: ((_0x3d353a[0] || {}).presentCode || "").split("|")[1] || ""
    }) : publicClient.setGdpTrace({}, "popview", {
      WT_envName: "加购热门权益_二次确认弹窗_弹窗出现",
      WT_event: "H5PopShow",
      WT_es: _0x4ec71f.location.href,
      WT_ti: "客户端话费充值"
    });
  }
  function _0x43face() {
    var _0x4ec71f = {
      ruleUse: [],
      ruleNouse: []
    };
    if (_0x3ba5d4.length > 0) {
      for (var _0x321663 = 0; _0x321663 < _0x3ba5d4.length; _0x321663++) {
        var _0x4afaec = "";
        if (_0x4afaec = _0x46d003(_0x3ba5d4[_0x321663].saleCode), _0x3ba5d4[_0x321663].price = "", 0 == _0x3ba5d4[_0x321663].usable) {
          if ("11" == _0x3ba5d4[_0x321663].saleType || "12" == _0x3ba5d4[_0x321663].saleType) {
            for (var _0x3c6953 = !1, _0x4cb89b = 0; _0x4cb89b < _0x4afaec.max.length; _0x4cb89b++) {
              if (Number(_0x485ccd) >= Number(_0x4afaec.min[_0x4cb89b]) && Number(_0x485ccd) <= Number(_0x4afaec.max[_0x4cb89b])) {
                _0x3ba5d4[_0x321663].price = Number(_0x4afaec.dis[_0x4cb89b]).toFixed(2);
                _0x3c6953 = !0;
                break;
              }
            }
            _0x3c6953 ? _0x4ec71f.ruleUse.push(_0x3ba5d4[_0x321663]) : _0x4ec71f.ruleNouse.push(_0x3ba5d4[_0x321663]);
          }
        } else {
          _0x4ec71f.ruleNouse.push(_0x3ba5d4[_0x321663]);
        }
      }
    }
    return _0x4ec71f;
  }
  function _0x1524a2() {
    if (_0x1f5ee3 && _0x36c5bb == _0x1f5ee3) {
      var _0x4ec71f = _0x5a189a(_0x1f5ee3),
        _0x321663 = "0",
        _0x4afaec = "0";
      _0x403f29.indexOf(_0x2bdaee) > -1 && (_0x4afaec = "1");
      "200" == _0x2bdaee && (_0x321663 = "1");
      publicClient.showLoadPlug();
      var _0x3c6953 = 0;
      "230" == _0x2bdaee && _0x199f56(_0x6393e4.version) && (_0x3c6953 = 1);
      recharge_H5module_inner.getProvUnitOrderRule({
        userInfo: _0x6393e4,
        reqBody: {
          orderFlag: _0x321663,
          addProvFlag: _0x4afaec,
          pureEquityFlag: "1",
          provWalletFlag: "1",
          cellNum: _0x36c5bb,
          phoneNo: _0x4ec71f,
          provCode: _0x2bdaee,
          channel: "11",
          pointFlag: _0x3c6953,
          payPhoneNo: _0x36c5bb
        },
        noEncrypt: !0,
        success: function (_0x4ec71f) {
          if (publicClient.closeLoadPlug(), "000000" == _0x4ec71f.retCode && _0x4ec71f.data) {
            _0x3d353a = _0x4ec71f.data.provWalletRules || [];
            _0x3d353a[0] && 0 != _0x3d353a[0].usable && (_0x3d353a = []);
            _0x3ba5d4 = _0x4ec71f.data.provRules || [];
            _0x3ba5d4 = _0x3ba5d4.concat(_0x4ec71f.data.pureEquityRules || []);
            _0x3ba5d4 = _0x3ba5d4.concat(_0x4ec71f.data.pureRules || []);
            for (var _0x321663 = 0; _0x321663 < _0x3ba5d4.length; _0x321663++) {
              _0x3ba5d4[_0x321663].index = _0x321663;
            }
            var _0x4afaec = _0x4ec71f.data.pointRules || [];
            if (_0x3f82eb = _0x3f82eb.concat(_0x4afaec), _0x3f82eb.length > 0) {
              for (var _0x321663 = 0; _0x321663 < _0x3f82eb.length; _0x321663++) {
                _0x3f82eb[_0x321663].type = "rule";
                _0x3f82eb[_0x321663].index = _0x321663;
              }
            }
            _0xf44882();
          }
        },
        error: function (_0x4ec71f) {}
      });
    }
  }
  function _0x199f56(_0x4ec71f, _0x321663) {
    _0x321663 = _0x321663 || [7, 8, 0];
    var _0x4afaec = _0x4ec71f.split(".");
    return _0x4afaec[0] > _0x321663[0] || _0x4afaec[0] == _0x321663[0] && _0x4afaec[1] >= _0x321663[1];
  }
  function _0x33dfc2(_0x4ec71f) {
    if (_0x1f5ee3) {
      _0x4575c1 && (_0x36c5bb = _0x48acdc, _0x222291 = _0x51e60e);
      var _0x321663 = _0x5a189a(_0x1f5ee3);
      publicClient.showLoadPlug();
      recharge_H5module_inner.getRechargeCardPayRule({
        userInfo: _0x6393e4,
        reqBody: {
          amountFlag: 1,
          saleFlag: 1,
          enableFlag: 1,
          couponFlag: 1,
          saleQueryType: 2,
          cellNum: _0x36c5bb,
          phoneNo: _0x321663,
          enableType: 0,
          provCode: _0x2bdaee,
          channel: "11",
          additionFlag: 1
        },
        noEncrypt: !0,
        success: function (_0x321663) {
          if (publicClient.closeLoadPlug(), "000000" == _0x321663.retCode) {
            if (_0x321663.data) {
              if ($(".cou-text, .interests-text").removeClass("hidden blue"), $(".cou-reload, .interests-cou-reload").addClass("hidden"), $(".coupon-net, .interests-net").removeClass("no-right"), $(".reload-icon, .interests-reload-icon").removeClass("loadRotate"), _0x3f82eb = _0x321663.data.saleRules || [], _0x5c5d03 = _0x321663.data.couponRules || [], _0x326256 = _0x321663.data.blindRules || [], _0x13c05b = _0x321663.data.addtionRules || [], _0x3f82eb.length > 0) {
                for (var _0x4afaec = 0; _0x4afaec < _0x3f82eb.length; _0x4afaec++) {
                  _0x3f82eb[_0x4afaec].type = "rule";
                  _0x3f82eb[_0x4afaec].index = _0x4afaec;
                }
              }
              if (_0x5c5d03.length > 0) {
                for (var _0x3c6953 = !1, _0x4cb89b = 0; _0x4cb89b < _0x5c5d03.length; _0x4cb89b++) {
                  _0x5c5d03[_0x4cb89b].type = "coupon";
                  _0x5c5d03[_0x4cb89b].index = _0x4cb89b;
                  "0" == _0x5c5d03[_0x4cb89b].canOlay ? _0x18490c.hasCoupons = !0 : "1" == _0x5c5d03[_0x4cb89b].canOlay && (_0x18490c.hascanOlay = !0);
                  !_0x3c6953 && _0x4ec71f && _0x36c5bb == _0x1f5ee3 && "7" == _0x5c5d03[_0x4cb89b].saleType && "1~1:9" == _0x5c5d03[_0x4cb89b].saleCode && (_0x9abc0 += 1, _0x3c6953 = !0, _0x4ec71f.unshift({
                    id: "101",
                    chargePos: "1",
                    cornerName: "",
                    tag: "",
                    locaMon: "1",
                    isInitialAmount: "1",
                    gearType: "1",
                    linkUrl: "",
                    gearOne: "1"
                  }), _0x3b1321(_0x4ec71f));
                }
              }
              if (_0xf316cf = ~~_0x321663.data.amountRule.maxAmount || 1000, _0x58dd3c = ~~_0x321663.data.amountRule.minAmount || 10, $(".money-input").attr("placeholder", _0x58dd3c + "~" + _0xf316cf), $(".minA").html(_0x58dd3c), $(".maxA").html(_0xf316cf), 0 != parseInt(_0x321663.data.usableRule.usable) ? (publicClient.toastPlug("该省交费功能暂不可用！", 2000), _0x247825 = !1) : 0 == parseInt(_0x321663.data.usableRule.usable) && (_0x247825 = !0), _0x13c05b.length > 0 && _0x13c05b.length == _0x4d05f9) {
                var _0xd2f33 = _0x13c05b[0].presentCode,
                  _0x162414 = _0xd2f33.split("|")[0];
                _0x2da267(_0x162414);
              } else {
                _0x326256.length > 0 && _0x5ea2f4(_0x326256[0].presentCode);
              }
              _0x1524a2();
              _0x36c5bb && _0x36c5bb == _0x1f5ee3 ? _0x4b9215(function () {
                _0x3de808();
                _0xf44882();
              }) : (_0x1c8c02(), _0x3de808(), _0xf44882());
            } else {
              _0x4e9f4e();
            }
          } else {
            /^5\d{5}$/.test(_0x321663.retCode) ? leadeon.overTime() : _0x4e9f4e();
          }
        },
        error: function (_0x4ec71f) {
          publicClient.closeLoadPlug();
          _0x4e9f4e();
        }
      });
    }
  }
  function _0x3de808() {
    if (null != _0x574f70 && _0x5c5d03.length > 0) {
      for (var _0x4ec71f = 0; _0x4ec71f < _0x5c5d03.length; _0x4ec71f++) {
        if (_0x574f70 == (_0x5c5d03[_0x4ec71f].pCardNo || _0x5c5d03[_0x4ec71f].pcardNo)) {
          _0x445393 = _0x4ec71f;
          _0x359e03 = "coupon";
          var _0x321663 = Number(_0x5c5d03[_0x4ec71f].saleCode.split(":")[0].split("~")[0]);
          _0x485ccd = _0x321663 < Number(_0xf316cf) ? _0x321663 >= _0x58dd3c ? _0x321663 : _0x58dd3c : _0xf316cf;
          "1~1:9" == _0x5c5d03[_0x4ec71f].saleCode && (_0x485ccd = 1);
          sessionStorage.setItem("choose_money", _0x485ccd);
          _0x43041a();
        }
      }
    }
  }
  function _0x4e9f4e() {
    publicClient.toastPlug("优惠信息获取失败，请重新加载", 2000);
    $(".cou-text, .interests-text").addClass("hidden");
    $(".cou-reload, .interests-cou-reload").removeClass("hidden");
    $(".reload-text, .interests-reload-text").addClass("blue").html("重新加载");
    $(".coupon-net, .interests-net").addClass("no-right");
    $(".reload-icon, .interests-reload-icon").removeClass("loadRotate");
    _0x1c8c02();
    _0xf44882();
  }
  function _0x34e633(_0x4ec71f, _0x321663) {
    var _0x4afaec = {
      pMon: _0x321663,
      aMon: _0x321663
    };
    "rule" == _0x4ec71f.type ? _0x4afaec = _0x3405ef(Number(_0x321663), Number(_0x4ec71f.saleType), _0x4ec71f, _0x4ec71f.discountFormat || "") : "coupon" == _0x4ec71f.type && (_0x4afaec = _0xfd33d7(Number(_0x321663), Number(_0x321663), _0x4ec71f.saleType, _0x4ec71f.discountFormat || 0, _0x4ec71f.saleCode, _0x4ec71f.capDiscount));
    _0x4afaec.present = _0x4afaec.aMon / (_0x4afaec.pMon + 1);
    _0x4afaec.saleData = _0x4ec71f;
    return _0x4afaec;
  }
  function _0x4e64ad(_0x4ec71f, _0x321663, _0x4afaec) {
    var _0x3c6953 = _0x4ec71f.concat(_0x321663),
      _0x4cb89b = [],
      _0xd2f33 = {},
      _0x162414 = 0,
      _0x12d890 = _0x3c6953.length > 0 && _0x3c6953.reduce(function (_0x4ec71f, _0x321663, _0x3c6953) {
        var _0x12d890 = _0x4ec71f;
        void 0 === _0x12d890.checkInx && (_0x12d890.checkInx = 0);
        _0x321663.activityShowArea == _0x1daf52 && _0x162414++;
        var _0x13ebb5 = _0x34e633(_0x321663, _0x4afaec);
        _0x4ec71f.present < _0x13ebb5.present && (_0x12d890 = _0x13ebb5, _0x12d890.checkInx = _0x3c6953 - _0x162414);
        _0x12d890.saleData.activityShowArea == _0x1daf52 ? _0x12d890.checkInx = "choosed" : _0x12d890.checkInx = _0x12d890.checkInx;
        -1 == _0x4cb89b.indexOf(_0x13ebb5.saleData.weights) && (_0x4cb89b.push(_0x13ebb5.saleData.weights), _0x13ebb5.checkInx = _0x3c6953 - _0x162414, _0x13ebb5.saleData.activityShowArea == _0x1daf52 ? _0x13ebb5.checkInx = "choosed" : _0x13ebb5.saleData.checkInx = _0x13ebb5.saleData.checkInx, void 0 !== _0x13ebb5.saleData.weights && (_0xd2f33[_0x13ebb5.saleData.weights] = _0x13ebb5));
        return _0x12d890;
      }, _0x34e633(_0x3c6953[0], _0x4afaec)),
      _0x13ebb5 = "-1";
    _0x4cb89b.map(function (_0x4ec71f) {
      void 0 !== _0x4ec71f && parseInt(_0x4ec71f) > parseInt(_0x13ebb5) && (_0x13ebb5 = _0x4ec71f);
    });
    _0x12d890.choosing = _0x4cb89b.length;
    "-1" != _0x13ebb5 && (_0x12d890.mostObj = _0xd2f33[_0x13ebb5]);
    return _0x12d890;
  }
  function _0x496a2c() {
    _0x19bd19 = "";
    _0x3a1842 = "";
    _0x230900 = "";
    _0x2ad995 = "";
    $(".recharge-arrival").html("");
  }
  function _0xf44882(_0x4ec71f) {
    if (_0x17942d = !1, _0x3ba5d4 && _0x3ba5d4.length > 0) {
      var _0x321663 = _0x43face();
      _0x4e1b92.productRules = _0x321663.ruleUse;
      _0x4e1b92.productNoRules = _0x321663.ruleNouse;
    }
    if ($(".benefit-item >.coupon").removeClass("item-disable").addClass("active"), $(".youhui").removeClass("youhui-not-use"), _0x56ccae(), _0x17044a.includes(_0x2bdaee)) {
      return void _0x41465a(_0x4ec71f);
    }
    if (_0x3f82eb && _0x3f82eb.length > 0 || _0x5c5d03 && _0x5c5d03.length > 0) {
      var _0x4afaec = _0x4d433e(),
        _0x3c6953 = _0xf6b4a2();
      _0x18490c.discountRules = _0x4afaec.ruleUse;
      _0x18490c.discountNoRules = _0x4afaec.ruleNouse;
      _0x18490c.discountCoupons = _0x3c6953.dataColor;
      _0x18490c.discountNoCoupons = _0x3c6953.dataGray;
    }
    if (_0x326256 && _0x326256.length > 0) {
      var _0x4cb89b = _0x335fc8();
      _0x5a38ca.maskBoxRules = _0x4cb89b.maskRuleUse;
      _0x5a38ca.maskBoxNoRules = _0x4cb89b.maskRuleNouse;
      _0x5a38ca.maskBlindRules = _0x326256;
    }
    if (_0x13c05b && _0x13c05b.length > 0) {
      var _0xd2f33 = _0x194444();
      _0xc0398b.addtionBoxRules = _0xd2f33.addtionRuleUse;
      _0xc0398b.addtionBoxNoRules = _0xd2f33.addtionRuleNouse;
      _0xc0398b.addtionBlindRules = _0x13c05b;
    }
    var _0x162414 = !1;
    if (null != _0x574f70 && !_0x341d6e && 0 != _0x341d6e) {
      for (var _0x12d890 = 0; _0x12d890 < _0x18490c.discountCoupons.length; _0x12d890++) {
        if ((_0x18490c.discountCoupons[_0x12d890].pCardNo || _0x18490c.discountCoupons[_0x12d890].pcardNo) == _0x574f70) {
          var _0x13ebb5 = _0x18490c.discountRules && _0x18490c.discountRules.filter(function (_0x4ec71f) {
            return _0x4ec71f.activityShowArea != _0x1daf52;
          });
          _0x341d6e = _0x12d890 + _0x13ebb5.length;
          _0x162414 = !0;
          break;
        }
      }
    }
    _0x18490c.discountRules.length + _0x18490c.discountCoupons.length >= 1 ? $(".youhui").removeClass("hidden") : $(".youhui").addClass("hidden");
    var _0x5ea2f4 = $("#discountTpl").html();
    juicer.register("getDateym", _0x48501c);
    juicer.register("getCardType", _0x361052);
    juicer.register("getcouponValue", _0x12b924);
    juicer.register("getTipInfo", _0x342993);
    var _0x2da267 = _0x4e64ad(_0x18490c.discountRules, _0x18490c.discountCoupons, _0x485ccd),
      _0x4db6f1 = _0x2da267 && _0x2da267.saleData && _0x2da267.saleData.type,
      _0x577ed4 = _0x2da267 && _0x2da267.saleData && _0x2da267.saleData.index;
    _0x18490c.festType = _0x4db6f1;
    _0x18490c.festIndex = _0x577ed4;
    var _0x1a366a = juicer(_0x5ea2f4, _0x18490c);
    $(".coupon-list").html(_0x1a366a);
    var _0x2a47b2 = 0,
      _0x4ccb5d = 0;
    $(".num-item").each(function (_0x4ec71f) {
      $(this).hasClass("active") && (_0x2a47b2 = parseInt($(this).attr("posval") / 3), _0x4ccb5d = $(this).attr("posval") % 3);
    });
    var _0x32ed15 = _0x18490c.discountRules.filter(function (_0x4ec71f) {
      return _0x4ec71f.activityShowArea == _0x1daf52;
    });
    if (_0x32ed15 && _0x32ed15.length > 0) {
      var _0x409808 = null;
      _0x2da267 && 1 == _0x2da267.choosing ? _0x409808 = _0x2da267.saleData : _0x2da267 && _0x2da267.choosing > 1 && (_0x409808 = _0x2da267.mostObj.saleData);
      "-1" == _0x326102 && _0x409808 && (_0x18490c.discountRules.map(function (_0x4ec71f, _0x321663) {
        _0x4ec71f.index == _0x409808.index && "rule" == _0x409808.type && (_0x326102 = _0x4ec71f.index);
      }), "-1" != _0x326102 && _0x409808.activityShowArea != _0x1daf52 && (_0x326102 = "A"), null != _0x574f70 && _0x162414 && (_0x326102 = "A"));
      var _0x1c8c02 = $("#gearsRulTpl").html(),
        _0x43041a = juicer(_0x1c8c02, {
          gearRules: _0x32ed15,
          arrowRules: [0, 1, 2],
          gearChoosedVal: _0x4ccb5d,
          gearRuleChecked: _0x326102
        }),
        _0x555a09 = "";
      if (_0x4e1b92.productRules.length > 0 && (_0x4e1b92.productUnitRules = _0x4e1b92.productRules.filter(function (_0x4ec71f) {
        return "11" == _0x4ec71f.saleType || "12" == _0x4ec71f.saleType;
      }), (_0x4e1b92.productUnitRules || []).length > 0)) {
        var _0x2f371a = $("#productRulTpl").html(),
          _0xc30dc9 = _0x4e1b92.productUnitRules.filter(function (_0x4ec71f) {
            return _0x4ec71f.imageCode;
          }).length;
        _0x555a09 = juicer(_0x2f371a, {
          gearRules: _0x4e1b92.productUnitRules,
          arrowRules: [],
          gearChoosedVal: _0x4ccb5d,
          gearRuleChecked: _0x4b743d,
          totalRowNum: _0xc30dc9,
          evestr: _0x26a2ec
        });
      }
      $(".under-pay-rule-container").empty();
      $(".under-pay-rule-container").each(function (_0x4ec71f) {
        $(this).attr("posinxval") == _0x2a47b2 && $(this).html(_0x43041a + _0x555a09);
      });
    } else {
      if (_0x4e1b92.productRules.length > 0) {
        if (_0x4e1b92.productUnitRules = _0x4e1b92.productRules.filter(function (_0x4ec71f) {
          return "11" == _0x4ec71f.saleType || "12" == _0x4ec71f.saleType;
        }), (_0x4e1b92.productUnitRules || []).length > 0) {
          var _0x1c8c02 = $("#productRulTpl").html(),
            _0xc30dc9 = _0x4e1b92.productUnitRules.filter(function (_0x4ec71f) {
              return _0x4ec71f.imageCode;
            }).length,
            _0x43041a = juicer(_0x1c8c02, {
              gearRules: _0x4e1b92.productUnitRules,
              arrowRules: [0, 1, 2],
              gearChoosedVal: _0x4ccb5d,
              gearRuleChecked: _0x4b743d,
              totalRowNum: _0xc30dc9,
              evestr: _0x26a2ec
            });
          $(".under-pay-rule-container").empty();
          $(".under-pay-rule-container").each(function (_0x4ec71f) {
            $(this).attr("posinxval") == _0x2a47b2 && $(this).html(_0x43041a);
          });
        }
      } else {
        $(".under-pay-rule-container").empty();
        _0x326102 = "A";
        _0x4b743d = "-1";
      }
    }
    var _0x1524a2 = $("#interestsTpl").html(),
      _0x199f56 = juicer(_0x1524a2, _0xc0f872);
    $(".interests-list").html(_0x199f56);
    var _0x33dfc2 = $("#maskBoxTpl").html(),
      _0x3de808 = juicer(_0x33dfc2, _0x5a38ca),
      _0x4e9f4e = $("#addtionBoxTpl").html(),
      _0x34e633 = juicer(_0x4e9f4e, _0xc0398b);
    void 0 === _0x4ec71f && (_0x4ec71f = !0);
    _0x4c6ac1 && $(".addtion-box").html(_0x34e633);
    _0x4ec71f && $(".mask-box").html(_0x3de808);
    _0xc0398b.addtionRights.length > 0 && $(".addtion-box").removeClass("hidden");
    _0x5a38ca.maskRights.length > 0 && $(".mask-box").removeClass("hidden");
    publicClient.versions.ios || $(".discount-main-title-sign").addClass("discount-main-title-signAndrod");
    sessionStorage.getItem("choose_money") != _0x485ccd && (_0x445393 = _0x341d6e = _0x359e03 = null, sessionStorage.setItem("choose_money", _0x485ccd));
    var _0xf44882 = _0x485ccd,
      _0x325e6b = _0x485ccd;
    _0x2763c2 = _0xf44882;
    var _0x4be2a7 = "";
    if ("rule" == _0x359e03) {
      _0x4be2a7 = _0x15332d(_0x3f82eb[_0x445393] && _0x3f82eb[_0x445393].operateId, _0x18490c.discountRules);
      _0x4be2a7.selectFlag ? _0x341d6e = _0x4be2a7.selectIndex : _0x445393 = _0x341d6e = _0x359e03 = null;
    } else {
      if ("coupon" == _0x359e03) {
        var _0xb65cb4 = _0x5c5d03[_0x445393].operateId,
          _0x4381ac = _0x5c5d03[_0x445393].pcardNo;
        if (_0x4be2a7 = _0x380669(_0xb65cb4, _0x18490c.discountCoupons, _0x4381ac), _0x4be2a7.selectFlag) {
          var _0x13ebb5 = _0x18490c.discountRules && _0x18490c.discountRules.filter(function (_0x4ec71f) {
            return _0x4ec71f.activityShowArea != _0x1daf52;
          });
          _0x341d6e = _0x13ebb5.length + _0x4be2a7.selectIndex;
        } else {
          _0x445393 = _0x341d6e = _0x359e03 = null;
        }
      }
    }
    if (_0xdc5f9b && _0x5a38ca.maskBoxRules.length > 0 ? $(".option").addClass("active") : (_0xdc5f9b = !1, $(".option").removeClass("active")), _0x5625fa ? ($(".addtion-box .img-item3").eq(0).addClass("current"), $(".addtionCheck").addClass("active"), $(".unit-order-product").removeClass("unit-order-product-active")) : (_0x5625fa = !1, $(".addtionCheck").removeClass("active")), null == _0x445393 && !1 !== _0x577ed4 && (_0x2da267 && 1 == _0x2da267.choosing ? (_0x359e03 = _0x4db6f1, _0x445393 = _0x577ed4, _0x341d6e = _0x2da267 && _0x2da267.checkInx) : _0x2da267 && _0x2da267.choosing > 1 && (_0x359e03 = _0x2da267 && _0x2da267.mostObj && _0x2da267.mostObj.saleData && _0x2da267.mostObj.saleData.type, _0x445393 = _0x2da267 && _0x2da267.mostObj && _0x2da267.mostObj.saleData && _0x2da267.mostObj.saleData.index, _0x341d6e = _0x2da267 && _0x2da267.mostObj && _0x2da267.mostObj.checkInx)), _0x445393 || 0 == _0x445393 ? "rule" == _0x359e03 ? ($(".cou-text").html(_0x3f82eb[_0x445393].saleName), $(".coupon-net").remove("no-right")) : "coupon" == _0x359e03 && ($(".cou-text").html(_0x12c2ad(_0x5c5d03[_0x445393])), $(".coupon-net").remove("no-right")) : _0x18490c.discountRules.length > 0 ? (_0x341d6e = 0, _0x359e03 = "rule", _0x445393 = $(".discount-item").eq(0).attr("index"), $(".cou-text").html(_0x3f82eb[_0x445393].saleName)) : _0x18490c.discountCoupons.length > 0 ? (_0x341d6e = 0, _0x359e03 = "coupon", _0x445393 = $(".discount-item").eq(0).attr("index"), $(".cou-text").html(_0x12c2ad(_0x5c5d03[_0x445393]))) : (_0x445393 = _0x341d6e = _0x359e03 = null, _0x38d5a8 = "", _0x2257f2 = "", $(".cou-text").html("无可用").removeClass("blue"), $(".coupon-net").addClass("no-right")), $(".benefit-list > .benefit-item").children().eq(0).addClass("active"), "-1" != _0x326102 && "A" != _0x326102) {
      _0x445393 = null;
      var _0x3ab2ab = _0x3f82eb[_0x326102];
      _0x2257f2 = _0x3ab2ab.operateId;
      _0x21ea9a = 0 != _0x3ab2ab.targetNoType;
      var _0xadf0f9 = _0x3405ef(Number(_0x485ccd), Number(_0x3ab2ab.saleType), _0x3ab2ab, _0x3ab2ab.discountFormat || "");
      _0xf44882 = _0xadf0f9.pMon;
      _0x325e6b = _0xadf0f9.aMon;
      _0x38d5a8 = "";
      _0x359e03 = "rule";
      _0x2763c2 = _0xf44882;
      _0x258e14(_0xf44882, _0x3ab2ab);
      $(".cou-text").html("请选择").removeClass("blue");
      $(".benefit-list > .benefit-item").children().eq(0).removeClass("active");
    } else {
      (null == _0x341d6e || "choosed" == _0x341d6e) && _0x32ed15 && _0x32ed15.length > 0 && ($(".cou-text").html("请选择"), $(".benefit-list > .benefit-item").children().eq(0).removeClass("active"));
    }
    if (null != _0x445393) {
      null != _0x341d6e && $(".discount-item").removeClass("discount-itemActive").eq(Number(_0x341d6e)).addClass("discount-itemActive");
      var _0x39cb86;
      if ("rule" == _0x359e03) {
        var _0x3ab2ab = _0x3f82eb[_0x445393];
        _0x39cb86 = _0x3ab2ab;
        _0x2257f2 = _0x3ab2ab.operateId;
        "14" == _0x3ab2ab.saleType && (_0x17942d = !0);
        _0x21ea9a = 0 != _0x3ab2ab.targetNoType;
        var _0xadf0f9 = _0x3405ef(Number(_0x485ccd), Number(_0x3ab2ab.saleType), _0x3ab2ab, _0x3ab2ab.discountFormat || "");
        _0xf44882 = _0xadf0f9.pMon;
        _0x325e6b = _0xadf0f9.aMon;
        _0x38d5a8 = "";
      } else {
        if ("coupon" == _0x359e03) {
          var _0x3ab2ab = _0x5c5d03[_0x445393];
          _0x39cb86 = _0x3ab2ab;
          _0x2257f2 = _0x3ab2ab.operateId;
          _0x38d5a8 = _0x3ab2ab.pCardNo || _0x3ab2ab.pcardNo;
          var _0xadf0f9 = _0xfd33d7(Number(_0x485ccd), Number(_0x485ccd), _0x3ab2ab.saleType, _0x3ab2ab.discountFormat || 0, _0x3ab2ab.saleCode, _0x3ab2ab.capDiscount);
          _0xf44882 = _0xadf0f9.pMon;
          _0x325e6b = _0xadf0f9.aMon;
        }
      }
      _0x258e14(_0xf44882, _0x39cb86);
      _0x2763c2 = _0xf44882;
      (!_0xae9b17 && 0 != _0xae9b17 || !_0x588334 && 0 != _0x588334) && _0x496a2c();
    } else {
      _0x496a2c();
    }
    if (_0xdc5f9b && _0x5a38ca.maskBoxRules.length > 0) {
      var _0x5f064e = _0x5a38ca.maskBoxRules && _0x5a38ca.maskBoxRules[0] && _0x5a38ca.maskBoxRules[0].price || 0;
      _0x19bd19 = _0x326256[0].operateId;
      _0x3a1842 = Number(_0x5f064e);
      _0x2ad995 = "8";
      _0xf44882 = _0x58dc9f(Number(_0x485ccd), Number(_0xf44882), _0x5a38ca.maskBoxRules[0]);
    }
    _0xdc5f9b && $(".recharge-arrival").html("到账金额" + publicClient.floating(_0x325e6b) + "元和一次拆盲盒权益机会");
    0 == _0x485ccd || null == _0x1f5ee3 ? $(".recharge-btn,.recharge-shadow").addClass("disable") : _0x247825 && $(".recharge-btn,.recharge-shadow").removeClass("disable");
    var _0x25715b = !0;
    if ($("#payMoney").html(publicClient.floating(_0xf44882)), $("#amoMoney").html(publicClient.floating(_0x325e6b)), _0x5625fa && _0xc0398b.addtionBoxRules.length > 0) {
      $("#payMoney").html(publicClient.floating(Number(_0x2763c2) + Number(_0x19da5a.price)));
      $(".buttonShowAddText").removeClass("hidden");
      $("#buttonShowAddText").html("到账金额" + _0x325e6b + "元和您选购的权益");
    } else {
      if ("-1" != _0x4b743d) {
        var _0x59b327 = _0x3ba5d4[_0x4b743d] || {};
        _0x19bd19 = _0x59b327.operateId;
        _0x3a1842 = _0x59b327.price;
        "12" == _0x59b327.saleType ? (_0xf44882 = _0x59b327.payCdgAmout, _0x325e6b = _0x59b327.chargeCdgAmout, $("#payMoney").html(publicClient.floating(_0xf44882)), $("#amoMoney").html(publicClient.floating(_0x325e6b)), _0x25715b = !1, $(".benefit-item >.coupon").removeClass("active").addClass("item-disable"), $(".youhui").removeClass("youhui-normal").removeClass("youhui-default").addClass("youhui-not-use")) : (_0x2ad995 = "7", "8" == _0x59b327.activityType && (_0x2ad995 = "6"), $("#payMoney").html(publicClient.floating(Number(_0x2763c2) + Number(_0x59b327.price || 0))), $(".buttonShowAddText").removeClass("hidden"), $("#buttonShowAddText").html("到账金额" + _0x325e6b + "元和" + _0x59b327.saleName));
      } else {
        _0x4258a1 ? (_0x2ad995 = "5", _0x19bd19 = _0x3d353a[0].operateId, _0x3a1842 = 0, $(".buttonShowAddText").removeClass("hidden"), $("#buttonShowAddText").html("到账金额" + _0x325e6b + "元和" + _0x3d353a[0].saleName)) : $(".buttonShowAddText").addClass("hidden");
      }
    }
    _0x25715b && (null != _0x341d6e && _0x341d6e == (_0x2da267 && _0x2da267.checkInx) ? "-1" != _0x326102 && "A" != _0x326102 ? $(".youhui").removeClass("youhui-default").addClass("youhui-normal") : $(".youhui").removeClass("youhui-normal").addClass("youhui-default") : $(".youhui").removeClass("youhui-default").addClass("youhui-normal"));
    _0x36c5bb && _0x36c5bb == _0x1f5ee3 && _0x2cf8dc && (_0x416722(), _0x2cf8dc = !1);
  }
  function _0x56ccae() {
    if (_0x3d353a.length > 0) {
      $(".preferential-pack-box").removeClass("hidden");
      var _0x4ec71f = $("#sqbPack").html(),
        _0x321663 = juicer(_0x4ec71f, {
          showType: _0x3d353a[0].sqbShow,
          sqbBoxChecked: _0x4258a1,
          evestr: _0x26a2ec,
          item: _0x3d353a[0]
        });
      $(".preferential-pack-box").html(_0x321663);
      _0xe1a0f5("1" == _0x3d353a[0].sqbShow ? ".preferential-pack-down" : ".preferential-img");
    } else {
      $(".preferential-pack-box").hasClass("hidden") || $(".preferential-pack-box").addClass("hidden");
    }
  }
  function _0x258e14(_0x4ec71f, _0x321663) {
    try {
      $(".num-item").each(function (_0x4afaec, _0x3c6953) {
        if (_0x4afaec != _0x9abc0) {
          if ($(_0x3c6953).hasClass("active")) {
            $(_0x3c6953).children(".tag").html(_0x321663.labelDes || "");
            $(_0x3c6953).children(".sale-money").children(".saleNum").html(_0x4ec71f);
          } else {
            if (!$(_0x3c6953).hasClass("active")) {
              var _0x4cb89b = _0x4d433e($(_0x3c6953).children(".money").attr("real-val")).ruleUse,
                _0xd2f33 = _0xf6b4a2($(_0x3c6953).children(".money").attr("real-val")).dataColor,
                _0x162414 = _0xd2f33.length;
              _0x162414 > 0 ? $(_0x3c6953).children(".tag").html(_0x162414 + "张券可用") : $(_0x3c6953).children(".tag").html("");
              var _0x12d890,
                _0x13ebb5,
                _0x5ea2f4 = Number($(_0x3c6953).children(".money").attr("real-val")),
                _0x2da267 = _0x4e64ad(_0x4cb89b, _0xd2f33, _0x5ea2f4),
                _0x4db6f1 = "";
              if (_0x2da267 && _0x2da267.choosing > 1 ? (_0x4db6f1 = _0x2da267 && _0x2da267.mostObj && _0x2da267.mostObj.saleData && _0x2da267.mostObj.saleData.type, _0x12d890 = _0x2da267 && _0x2da267.mostObj && _0x2da267.mostObj.saleData) : (_0x4db6f1 = _0x2da267 && _0x2da267.saleData && _0x2da267.saleData.type, _0x12d890 = _0x2da267 && _0x2da267.saleData), "rule" == _0x4db6f1) {
                var _0x577ed4 = _0x3405ef(_0x5ea2f4, Number(_0x12d890.saleType), _0x12d890, _0x12d890.discountFormat || "");
                _0x13ebb5 = _0x577ed4.pMon;
              } else {
                if ("coupon" == _0x4db6f1) {
                  var _0x1a366a = _0xfd33d7(_0x5ea2f4, _0x5ea2f4, _0x12d890.saleType, _0x12d890.discountFormat || 0, _0x12d890.saleCode, _0x12d890.capDiscount, _0x5ea2f4);
                  _0x13ebb5 = _0x1a366a.pMon;
                }
              }
              $(_0x3c6953).children(".sale-money").children(".saleNum").html(_0x13ebb5);
            }
          }
        }
      });
    } catch (_0x5cbaff) {}
  }
  function _0x12c2ad(_0x4ec71f) {
    if (_0x4ec71f.couponValue) {
      return "hf0002" == (_0x4ec71f.pCardType || _0x4ec71f.pcardType) || "hf0008" == (_0x4ec71f.pCardType || _0x4ec71f.pcardType) ? 1000 * Number(_0x4ec71f.couponValue) / 100 + "折" + (_0x4ec71f.pCardName || _0x4ec71f.pcardName) : "hf0003" == (_0x4ec71f.pCardType || _0x4ec71f.pcardType) ? _0x4ec71f.couponValue + "%" + (_0x4ec71f.pCardName || _0x4ec71f.pcardName) : "hf0009" == (_0x4ec71f.pCardType || _0x4ec71f.pcardType) ? "充值优惠券" : _0x4ec71f.couponValue + "元" + (_0x4ec71f.pCardName || _0x4ec71f.pcardName);
    }
    var _0x321663 = _0x4ec71f.pCardName || _0x4ec71f.pcardName;
    "hf0009" == (_0x4ec71f.pCardType || _0x4ec71f.pcardType) && (_0x321663 = "充值优惠券");
    return _0x321663;
  }
  function _0x50a380(_0x4ec71f) {
    var _0x321663 = "saveRechargeOrder";
    "" != _0x36c5bb && _0x36c5bb != _0x4ec71f.cellNum ? _0x321663 = "saveRechargeOrder4t" : "-1" != _0x4b743d && (_0x321663 = "saveorderadd");
    var _0x4afaec = JSON.stringify(_0x4ec71f);
    recharge_H5module_inner[_0x321663]({
      userInfo: _0x6393e4,
      reqBody: _0x4ec71f,
      noEncrypt: !0,
      success: function (_0x4ec71f) {
        publicClient.closeLoadPlug();
        _0x2564a4(_0x4ec71f);
      },
      error: function (_0x4ec71f) {
        _0x1549d2++;
        _0x1549d2 >= 3 ? ($(".recharge-btn,.recharge-shadow").removeClass("disable"), publicClient.closeLoadPlug(), _0x1549d2 = 0, publicClient.showDialogPlug("现在办理业务的小伙伴太热情了，网络有点忙，请稍后再来。", "知道了")) : _0x50a380(JSON.parse(_0x4afaec));
      }
    });
  }
  function _0x2564a4(_0x321663) {
    if ($(".recharge-btn,.recharge-shadow").removeClass("disable"), "000000" == _0x321663.retCode) {
      $(".rechargeGraphic-close").length && $(".rechargeGraphic-close").trigger("click");
      document.addEventListener("visibilitychange", _0xf5e9e6, !0);
      _0x321663.data = _0x321663.data || {};
      "250" == _0x2bdaee && _0x321663.data.payUrl && _0x321663.data.payUrl.indexOf("jssyt_stq") > -1 ? _0x2fa4e9(_0x321663.data.payUrl) : publicClient.setRechargeSDK(_0x6393e4, _0x321663.data.orderId, Number(_0x321663.data.amount), Number(_0x321663.data.chargeMoney), _0x1f5ee3);
      _0x3ffdb4();
    } else {
      if ("532014" == _0x321663.retCode || "532015" == _0x321663.retCode || "532016" == _0x321663.retCode) {
        _0x3ffdb4();
        $(".recharge-btn,.recharge-shadow").addClass("disable");
        "532014" == _0x321663.retCode && (_0x321663.retMsg = "尊敬的用户，该优惠仅限本机充值使用。");
        _0x36c5bb ? publicClient.showDialogPlug(_0x321663.retMsg, "知道了") : ($("#customAmount").trigger("blur"), publicClient.closeLoadPlug(), publicClient.confirmPlug("登录", "取消", _0x321663.retMsg, function () {
          leadeon.showLogin();
        }, ""));
      } else {
        if ("500004" == _0x321663.retCode) {
          leadeon.overTime({
            debug: !1,
            success: function (_0x4ec71f) {}
          });
        } else {
          if ("535005" == _0x321663.retCode || "532004" == _0x321663.retCode || "532005" == _0x321663.retCode) {
            _0x3ffdb4();
            $(".recharge-btn,.recharge-shadow").addClass("disable");
            "535005" == _0x321663.retCode && (_0x321663.retMsg = "今日优惠已抢完，感谢您使用中国移动客户端");
            publicClient.singleButBack(_0x321663.retMsg, "查看其他优惠", function () {
              $(".discounted-main").removeClass("hidden");
            });
          } else {
            if ("535001" == _0x321663.retCode || "531025" == _0x321663.retCode) {
              _0x3ffdb4();
              $(".recharge-btn,.recharge-shadow").addClass("disable");
              "535001" == _0x321663.retCode && (_0x321663.retMsg = "尊敬的用户，您在该活动中存在未支付的订单，您可到充值订单中查询订单信息并完成支付，或者30分钟后重新下单。");
              var _0x4afaec = "";
              publicClient.confirmPlug("去支付", "取消", _0x321663.retMsg, function () {
                parseFloat(_0x6393e4.version) > 4.3 ? (_0x4afaec = "https://touch.10086.cn/i/mobile/ordersList.html?sign=fffffff0&c=11&e=99", _0x4ec71f.location.href.indexOf("gray") > -1 && (_0x4afaec = _0x4afaec.replace("touch.10086.cn/i", "touch.10086.cn/i/gray"))) : (_0x4afaec = "https://app.10086.cn/leadeon-cmcc-static/v2.0/pages/mall/order/orderlist.html?tab=1", _0x4ec71f.location.href.indexOf("gray") > -1 && (_0x4afaec = _0x4afaec.replace("leadeon-cmcc-static/", "leadeon-cmcc-static-test/")));
                leadeon.newWebview({
                  debug: !1,
                  markID: "",
                  type: "",
                  funCode: "",
                  bizCode: "",
                  url: _0x4afaec,
                  success: function (_0x4ec71f) {},
                  error: function (_0x4ec71f) {}
                });
              }, "");
            } else {
              "530002" == _0x321663.retCode ? (_0x3ffdb4(), $(".recharge-btn,.recharge-shadow").addClass("disable"), publicClient.showDialogPlug("尊敬的用户，您的充值操作过于频繁，请30分钟后再试。", "知道了")) : "531013" == _0x321663.retCode || "531014" == _0x321663.retCode ? publicClient.toastPlug("拉起支付失败，请重新尝试。", 2000) : "532018" == _0x321663.retCode ? publicClient.toastPlug(_0x321663.retMsg, 2000) : "531001" == _0x321663.retCode || "531012" == _0x321663.retCode ? (_0x3ffdb4(), $(".recharge-btn,.recharge-shadow").addClass("disable"), publicClient.showDialogPlug("尊敬的用户，请输入正确的移动手机号码。", "知道了")) : "531007" == _0x321663.retCode ? (_0x3ffdb4(), $(".recharge-btn,.recharge-shadow").addClass("disable"), publicClient.showDialogPlug("尊敬的用户，请进行实名制认证后再来充值。", "知道了")) : "531009" == _0x321663.retCode ? (_0x3ffdb4(), $(".recharge-btn,.recharge-shadow").addClass("disable"), publicClient.showDialogPlug("尊敬的用户，您的充值金额超过限额，请重新输入。", "知道了")) : "532002" == _0x321663.retCode ? (_0x3ffdb4(), publicClient.showDialogPlug("尊敬的用户，无优惠金额有误，请重新选择金额。", "知道了")) : "532003" == _0x321663.retCode ? (_0x3ffdb4(), publicClient.showDialogPlug("尊敬的用户，当前档位有默认优惠，请重新选择优惠信息。", "知道了")) : "533001" == _0x321663.retCode ? (_0x3ffdb4(), publicClient.showDialogPlug("尊敬的用户，订单提交失败，请您稍后再试。", "知道了")) : "500021" == _0x321663.retCode ? (_0x3ffdb4(), $(".rechargeSms-prompt").removeClass("hidden"), $(".rechargeSms-code").val(""), $(".rechargeSms-message").text(_0x321663.retMsg)) : "500022" == _0x321663.retCode ? (_0x3ffdb4(), $(".rechargeSms-prompt").removeClass("hidden"), $(".rechargeSms-code").val(""), $(".rechargeSms-message").text(_0x321663.retMsg)) : "500023" == _0x321663.retCode ? (_0x3ffdb4(), $(".rechargeSms-prompt").removeClass("hidden"), $(".rechargeSms-message").text(_0x321663.retMsg), $(".rechargeSms-btnDouble").addClass("hidden"), $(".rechargeSms-btnSingle").removeClass("hidden"), $(".rechargeSms-code").attr("disabled", !0).val(""), _0x2360f5 && clearInterval(_0x2360f5), $(".rechargeSms-codeBtn").text("重新获取").addClass("disable rechargeSms-gray"), $(".recharge-btn,.recharge-shadow").addClass("disable")) : "531019" == _0x321663.retCode ? (_0x3ffdb4(), $(".rechargeGraphic-prompt").removeClass("hidden"), $(".rechargeGraphic-message").text(_0x321663.retMsg)) : "531020" == _0x321663.retCode ? (_0x3ffdb4(), $(".rechargeGraphic-prompt").removeClass("hidden"), $(".rechargeGraphic-message").text(_0x321663.retMsg)) : "531021" == _0x321663.retCode ? (_0x3ffdb4(), publicClient.toastPlug(_0x321663.retMsg, 2000)) : "531015" == _0x321663.retCode ? publicClient.toastPlug("下单操作频繁，请稍后再试。", 2000) : "531022" == _0x321663.retCode ? (publicClient.toastPlug("充值下单异常，请稍后再试", 2000), $(".recharge-btn,.recharge-shadow").addClass("disable")) : "510002" == _0x321663.retCode ? (publicClient.toastMsgPlug("验证码超时，请重新获取", 2000), $(".recharge-btn,.recharge-shadow").addClass("disable")) : "510003" == _0x321663.retCode ? (publicClient.toastMsgPlug("验证码输入错误", 2000), $(".recharge-btn,.recharge-shadow").addClass("disable")) : "510004" == _0x321663.retCode ? (publicClient.toastMsgPlug("验证码输入错误3次，请重新获取", 2000), $(".recharge-btn,.recharge-shadow").addClass("disable")) : "531023" == _0x321663.retCode || "531027" == _0x321663.retCode ? (_0x3ffdb4(), _0x390686()) : "500038" == _0x321663.retCode ? (publicClient.toastMsgPlug(_0x321663.retMsg, 1500), _0x4ec71f.location.reload()) : (_0x3ffdb4(), $(".recharge-btn,.recharge-shadow").removeClass("disable"), publicClient.sessionFailurePrompt(_0x321663));
            }
          }
        }
      }
    }
  }
  function _0x483169() {
    _0x2ae527 = _0x8119c7 && _0x8119c7 == _0x1f5ee3 ? "1" : "";
    var _0x321663 = {};
    _0x4575c1 && (_0x36c5bb = _0x48acdc, _0x222291 = _0x51e60e);
    var _0x4afaec = (_0x31386a ? _0x31386a + "-" : "10-") + _0x6393e4.loginProvince + "-" + _0x6393e4.loginCity + "-" + (_0x41da91 || _0x6393e4.phoneNumber);
    _0x321663 = {
      operateId: _0x2257f2,
      amount: Number(_0x2763c2),
      serialNo: _0x36e6e0,
      smsCode: _0x230900,
      chargeMoney: Number($("#amoMoney").text()),
      choseMoney: _0x485ccd + "",
      pCardNo: _0x38d5a8 || "",
      numFlag: _0x2ae527,
      additionOperateId: _0x19bd19,
      additionAmount: _0x3a1842,
      additionType: _0x2ad995,
      reConfirmWay: _0x3cfc5c,
      coordinate: _0x20612b,
      channel: "11",
      payWay: "SDK",
      pointNum: _0x17942d ? _0x52c2ad : null,
      pointFee: _0x17942d ? _0x26a207 : null,
      invoinceType: _0x303d01,
      appUid: _0x237604,
      uid: _0x237604,
      appImei: _0x6393e4.imei,
      wtAc: _0x5d9956,
      wtAcId: _0x50b98f
    };
    _0x321663.serialNo = _0x5625fa || "-1" != _0x4b743d || _0x4258a1 ? _0x36e6e0 : _0x1ec67a;
    publicClient.getQueryString("channel") && "sign" == publicClient.getQueryString("channel") && (_0x321663.source = _0x4afaec);
    _0x17044a.includes(_0x2bdaee) && _0x1a912b(_0x321663);
    var _0x3c6953 = _0x5769d4 || "123456",
      _0x4cb89b = "107,107,57,110,53,52,86,104,50,66,99,56,97,88,67,104,76,72,89,80,84,81,61,61",
      _0xd2f33 = _0x4ec71f.recharge_H5module_inner.byteToString(_0x4cb89b.split(",")),
      _0x162414 = _0x15f644(_0x293bf2, _0x5d7a2d)(JSON.stringify(_0x321663), _0xd2f33, _0x3c6953),
      _0x12d890 = _0x5a189a(JSON.stringify(_0x321663)),
      _0x13ebb5 = {
        cellNum: _0x1f5ee3,
        payhmcc: _0x162414,
        param: _0x12d890
      };
    _0x50a380(_0x13ebb5);
  }
  function _0xfd33d7(_0x4ec71f, _0x321663, _0x4afaec, _0x3c6953, _0x4cb89b, _0xd2f33, _0x162414) {
    for (var _0x12d890 = _0x162414 || _0x485ccd, _0x13ebb5 = _0x4cb89b.split(","), _0x5ea2f4 = 0, _0x2da267 = 0; _0x2da267 < _0x13ebb5.length; _0x2da267++) {
      var _0x4db6f1 = _0x13ebb5[_0x2da267].split(":")[1],
        _0x577ed4 = _0x13ebb5[_0x2da267].split(":")[0].split("~")[1],
        _0x1a366a = _0x13ebb5[_0x2da267].split(":")[0].split("~")[0];
      Number(_0x12d890) >= _0x1a366a && Number(_0x12d890) <= _0x577ed4 && (_0x5ea2f4 = _0x4db6f1);
    }
    var _0x2a47b2 = _0x4ec71f,
      _0x4ccb5d = _0x321663;
    7 == _0x4afaec ? _0x4ccb5d = Number(_0x321663) + Number(_0x5ea2f4) : 8 == _0x4afaec ? (_0x2a47b2 = Number(_0x4ec71f) * Number(_0x5ea2f4), null != _0xd2f33 && void 0 !== _0xd2f33 && Number(_0xd2f33) / 100 < Number(_0x4ec71f) * (1 - Number(_0x5ea2f4)) && (_0x2a47b2 = Number(_0x4ec71f) - Number(_0xd2f33) / 100)) : 9 == _0x4afaec ? _0x4ccb5d = Number(_0x12d890) * Number(_0x5ea2f4) + Number(_0x321663) : 10 == _0x4afaec && (_0x2a47b2 = Number(_0x4ec71f) - Number(_0x5ea2f4));
    _0x2a47b2 = _0x44faa1(_0x2a47b2, _0x3c6953 || "");
    _0x4ccb5d = _0x44faa1(_0x4ccb5d, _0x3c6953 || "");
    return {
      pMon: _0x2a47b2,
      aMon: _0x4ccb5d
    };
  }
  function _0x46d003(_0x4ec71f) {
    var _0x321663 = "",
      _0x4afaec = "",
      _0x3c6953 = new Array(),
      _0x4cb89b = new Array(),
      _0xd2f33 = new Array(),
      _0x162414 = new Array();
    _0x321663 = _0x4ec71f.split(",");
    for (var _0x12d890 = 0; _0x12d890 < _0x321663.length; _0x12d890++) {
      _0x4afaec = _0x321663[_0x12d890].toString().split(":");
      _0x4cb89b.push(_0x4afaec[0]);
      _0x3c6953.push(_0x4afaec[1]);
    }
    for (var _0x12d890 = 0; _0x12d890 < _0x4cb89b.length; _0x12d890++) {
      _0x4afaec = _0x4cb89b[_0x12d890].toString().split("~");
      _0xd2f33.push(_0x4afaec[0]);
      _0x162414.push(_0x4afaec[1]);
    }
    return {
      min: _0xd2f33,
      max: _0x162414,
      dis: _0x3c6953
    };
  }
  function _0x44faa1(_0x4ec71f, _0x321663) {
    "3" == _0x321663 || "" == _0x321663 ? (_0x4ec71f = Math.round((100 * _0x4ec71f).toFixed(5)) / 100, _0x4ec71f = publicClient.floating(_0x4ec71f)) : "2" == _0x321663 ? (_0x4ec71f = Math.floor((100 * _0x4ec71f).toFixed(5)) / 100, _0x4ec71f = publicClient.floating(_0x4ec71f)) : "1" == _0x321663 && (_0x4ec71f = Math.ceil((100 * _0x4ec71f).toFixed(5)) / 100, _0x4ec71f = publicClient.floating(_0x4ec71f));
    return _0x4ec71f;
  }
  function _0x3405ef(_0x4ec71f, _0x321663, _0x4afaec, _0x3c6953) {
    var _0x4cb89b = "",
      _0xd2f33 = _0x4ec71f,
      _0x162414 = _0x4ec71f;
    switch (_0x321663) {
      case 1:
        _0x4cb89b = _0x4afaec.saleCode;
        _0xd2f33 = 1000 * Number(_0x4cb89b) * _0x4ec71f / 1000;
        break;
      case 2:
        _0x4cb89b = _0x46d003(_0x4afaec.saleCode);
        for (var _0x12d890 = 0; _0x12d890 < _0x4cb89b.dis.length; _0x12d890++) {
          _0x4ec71f >= Number(_0x4cb89b.min[_0x12d890]) && _0x4ec71f <= Number(_0x4cb89b.max[_0x12d890]) && (_0x162414 = _0x4ec71f + Number(_0x4cb89b.dis[_0x12d890]));
        }
        break;
      case 3:
        var _0x13ebb5 = _0x4afaec.saleCode.split("@"),
          _0x5ea2f4 = _0x13ebb5[0];
        _0x4cb89b = _0x46d003(_0x13ebb5[1]);
        for (var _0x12d890 = 0; _0x12d890 < _0x4cb89b.dis.length; _0x12d890++) {
          _0x4ec71f >= Number(_0x4cb89b.min[_0x12d890]) && _0x4ec71f <= Number(_0x4cb89b.max[_0x12d890]) && (_0x162414 = _0x4ec71f + Number(_0x4cb89b.dis[_0x12d890]));
          _0xd2f33 = 1000 * Number(_0x5ea2f4) * _0x4ec71f / 1000;
        }
        break;
      case 4:
        _0x4cb89b = _0x46d003(_0x4afaec.saleCode);
        for (var _0x12d890 = 0; _0x12d890 < _0x4cb89b.dis.length; _0x12d890++) {
          _0x4ec71f >= Number(_0x4cb89b.min[_0x12d890]) && _0x4ec71f <= Number(_0x4cb89b.max[_0x12d890]) && (_0x162414 = _0x4ec71f + 1000 * Number(_0x4cb89b.dis[_0x12d890]) * _0x4ec71f / 1000);
        }
        break;
      case 5:
        _0x4cb89b = _0x46d003(_0x4afaec.saleCode);
        for (var _0x12d890 = 0; _0x12d890 < _0x4cb89b.dis.length; _0x12d890++) {
          _0x4ec71f >= Number(_0x4cb89b.min[_0x12d890]) && _0x4ec71f <= Number(_0x4cb89b.max[_0x12d890]) && (_0xd2f33 = 1000 * Number(_0x4cb89b.dis[_0x12d890]) * _0x4ec71f / 1000);
        }
        break;
      case 6:
        for (var _0x13ebb5 = _0x4afaec.saleCode.split("@"), _0x2da267 = _0x46d003(_0x13ebb5[0]), _0x4db6f1 = _0x46d003(_0x13ebb5[1]), _0x12d890 = 0; _0x12d890 < _0x2da267.dis.length; _0x12d890++) {
          _0x4ec71f >= Number(_0x2da267.min[_0x12d890]) && _0x4ec71f <= Number(_0x2da267.max[_0x12d890]) && (_0xd2f33 = 1000 * Number(_0x2da267.dis[_0x12d890]) * _0x4ec71f / 1000);
        }
        for (var _0x12d890 = 0; _0x12d890 < _0x4db6f1.dis.length; _0x12d890++) {
          _0x4ec71f >= Number(_0x4db6f1.min[_0x12d890]) && _0x4ec71f <= Number(_0x4db6f1.max[_0x12d890]) && (_0x162414 = _0x4ec71f + Number(_0x4db6f1.dis[_0x12d890]));
        }
        break;
      case 14:
        _0x4cb89b = _0x46d003(_0x4afaec.saleCode);
        for (var _0x12d890 = 0; _0x12d890 < _0x4cb89b.dis.length; _0x12d890++) {
          _0x4ec71f >= Number(_0x4cb89b.min[_0x12d890]) && _0x4ec71f <= Number(_0x4cb89b.max[_0x12d890]) && (_0xd2f33 = 1000 * Number(_0x4cb89b.dis[_0x12d890]) * _0x4ec71f / 1000);
        }
        _0xd2f33 -= (_0x4afaec.presentCode || "").split("|")[1] || 0;
    }
    _0xd2f33 = _0x44faa1(_0xd2f33, _0x3c6953);
    _0x162414 = _0x44faa1(_0x162414, _0x3c6953);
    return {
      pMon: _0xd2f33,
      aMon: _0x162414
    };
  }
  function _0x58dc9f(_0x4ec71f, _0x321663, _0x4afaec) {
    var _0x3c6953 = _0x321663,
      _0x4cb89b = "";
    switch (_0x4afaec.saleType + "") {
      case "11":
        _0x4cb89b = _0x46d003(_0x4afaec.saleCode);
        for (var _0xd2f33 = 0; _0xd2f33 < _0x4cb89b.dis.length; _0xd2f33++) {
          _0x4ec71f >= Number(_0x4cb89b.min[_0xd2f33]) && _0x4ec71f <= Number(_0x4cb89b.max[_0xd2f33]) && (_0x3c6953 = _0x321663 + Number(_0x4cb89b.dis[_0xd2f33]));
        }
    }
    return _0x3c6953;
  }
  function _0x335fc8() {
    for (var _0x4ec71f = {
        maskRuleUse: [],
        maskRuleNouse: []
      }, _0x321663 = 0; _0x321663 < _0x326256.length; _0x321663++) {
      _0x326256[_0x321663].price = "";
      var _0x4afaec = _0x46d003(_0x326256[_0x321663].saleCode);
      if (_0x326256[_0x321663].price = Number(_0x4afaec.dis[0]).toFixed(2), "0" == _0x326256[_0x321663].usable) {
        for (var _0x3c6953 = !1, _0x4cb89b = 0; _0x4cb89b < _0x4afaec.max.length; _0x4cb89b++) {
          if (Number(_0x485ccd) >= Number(_0x4afaec.min[_0x4cb89b]) && Number(_0x485ccd) <= Number(_0x4afaec.max[_0x4cb89b])) {
            _0x3c6953 = !0;
            break;
          }
        }
        _0x3c6953 ? _0x4ec71f.maskRuleUse.push(_0x326256[_0x321663]) : _0x4ec71f.maskRuleNouse.push(_0x326256[_0x321663]);
      } else {
        _0x4ec71f.maskRuleNouse.push(_0x326256[_0x321663]);
      }
    }
    return _0x4ec71f;
  }
  function _0x194444() {
    for (var _0x4ec71f = {
        addtionRuleUse: [],
        addtionRuleNouse: []
      }, _0x321663 = 0; _0x321663 < _0x13c05b.length; _0x321663++) {
      _0x13c05b[_0x321663].price = "";
      var _0x4afaec = _0x46d003(_0x13c05b[_0x321663].saleCode);
      if (_0x13c05b[_0x321663].price = Number(_0x4afaec.dis[0]).toFixed(2), "0" == _0x13c05b[_0x321663].usable) {
        for (var _0x3c6953 = !1, _0x4cb89b = 0; _0x4cb89b < _0x4afaec.max.length; _0x4cb89b++) {
          if (Number(_0x485ccd) >= Number(_0x4afaec.min[_0x4cb89b]) && Number(_0x485ccd) <= Number(_0x4afaec.max[_0x4cb89b])) {
            _0x3c6953 = !0;
            break;
          }
        }
        _0x3c6953 ? _0x4ec71f.addtionRuleUse.push(_0x13c05b[_0x321663]) : _0x4ec71f.addtionRuleNouse.push(_0x13c05b[_0x321663]);
      } else {
        _0x4ec71f.addtionRuleNouse.push(_0x13c05b[_0x321663]);
      }
    }
    return _0x4ec71f;
  }
  function _0x1eb71a(_0x4ec71f, _0x321663) {
    var _0x4afaec = !1,
      _0x3c6953 = _0x46d003(_0x13c05b[_0x4ec71f].saleCode);
    if ("0" == _0x13c05b[_0x4ec71f].usable) {
      for (var _0x4cb89b = 0; _0x4cb89b < _0x3c6953.max.length; _0x4cb89b++) {
        if (Number(_0x321663) >= Number(_0x3c6953.min[_0x4cb89b]) && Number(_0x321663) <= Number(_0x3c6953.max[_0x4cb89b])) {
          _0x4afaec = !0;
          break;
        }
      }
    } else {
      _0x4afaec = !1;
    }
    return _0x4afaec;
  }
  function _0xf6b4a2(_0x4ec71f) {
    var _0x321663 = {
      dataGray: [],
      dataColor: []
    };
    if (_0x5c5d03.length > 0) {
      for (var _0x4afaec = 0; _0x4afaec < _0x5c5d03.length; _0x4afaec++) {
        if ("0" == _0x5c5d03[_0x4afaec].usable) {
          var _0x3c6953 = _0x5c5d03[_0x4afaec].saleCode.split(",");
          _0x5c5d03[_0x4afaec].isAdd = !1;
          for (var _0x4cb89b = 0; _0x4cb89b < _0x3c6953.length; _0x4cb89b++) {
            var _0xd2f33 = _0x3c6953[_0x4cb89b].split(":")[0].split("~"),
              _0x162414 = Number(_0xd2f33[0]),
              _0x12d890 = Number(_0xd2f33[1]);
            Number(_0x4ec71f || _0x485ccd) <= _0x12d890 && Number(_0x4ec71f || _0x485ccd) >= _0x162414 && (_0x5c5d03[_0x4afaec].isAdd = !0, _0x321663.dataColor.push(_0x5c5d03[_0x4afaec]));
          }
          _0x5c5d03[_0x4afaec].isAdd || _0x321663.dataGray.push(_0x5c5d03[_0x4afaec]);
        } else {
          _0x321663.dataGray.push(_0x5c5d03[_0x4afaec]);
        }
      }
    }
    return _0x321663;
  }
  function _0x380669(_0x4ec71f, _0x321663, _0x4afaec) {
    var _0x3c6953 = {
      selectFlag: !1,
      selectIndex: null
    };
    if (_0x321663.length > 0) {
      for (var _0x4cb89b = 0; _0x4cb89b < _0x321663.length; _0x4cb89b++) {
        _0x4ec71f == _0x321663[_0x4cb89b].operateId && _0x4afaec == _0x321663[_0x4cb89b].pcardNo && (_0x3c6953.selectIndex = _0x4cb89b, _0x3c6953.selectFlag = !0);
      }
      return _0x3c6953;
    }
    return _0x3c6953;
  }
  function _0x15332d(_0x4ec71f, _0x321663) {
    var _0x4afaec = {
      selectFlag: !1,
      selectIndex: null
    };
    if (_0x321663.length > 0) {
      for (var _0x3c6953 = 0, _0x4cb89b = 0; _0x4cb89b < _0x321663.length; _0x4cb89b++) {
        _0x321663[_0x4cb89b].activityShowArea == _0x1daf52 && _0x3c6953++;
        _0x4ec71f == _0x321663[_0x4cb89b].operateId && _0x321663[_0x4cb89b].activityShowArea != _0x1daf52 && (_0x4afaec.selectIndex = _0x4cb89b - _0x3c6953, _0x4afaec.selectFlag = !0);
      }
      return _0x4afaec;
    }
    return _0x4afaec;
  }
  function _0x4d433e(_0x4ec71f) {
    var _0x321663 = {
      ruleUse: [],
      ruleNouse: []
    };
    if (_0x3f82eb.length > 0) {
      for (var _0x4afaec = 0; _0x4afaec < _0x3f82eb.length; _0x4afaec++) {
        if (0 == _0x3f82eb[_0x4afaec].usable) {
          if ("1" == _0x3f82eb[_0x4afaec].saleType || "3" == _0x3f82eb[_0x4afaec].saleType) {
            _0x321663.ruleUse.push(_0x3f82eb[_0x4afaec]);
          } else {
            if ("2" == _0x3f82eb[_0x4afaec].saleType || "4" == _0x3f82eb[_0x4afaec].saleType || "5" == _0x3f82eb[_0x4afaec].saleType || "6" == _0x3f82eb[_0x4afaec].saleType || "14" == _0x3f82eb[_0x4afaec].saleType) {
              var _0x3c6953 = "";
              if ("6" == _0x3f82eb[_0x4afaec].saleType) {
                var _0x4cb89b = _0x3f82eb[_0x4afaec].saleCode.split("@"),
                  _0xd2f33 = _0x46d003(_0x4cb89b[0]),
                  _0x3c6953 = _0x46d003(_0x4cb89b[1]);
                _0x3c6953.max = _0x3c6953.max.concat(_0xd2f33.max);
                _0x3c6953.min = _0x3c6953.min.concat(_0xd2f33.min);
              } else {
                _0x3c6953 = _0x46d003(_0x3f82eb[_0x4afaec].saleCode);
              }
              for (var _0x162414 = !1, _0x12d890 = 0; _0x12d890 < _0x3c6953.max.length; _0x12d890++) {
                if (Number(_0x4ec71f || _0x485ccd) >= Number(_0x3c6953.min[_0x12d890]) && Number(_0x4ec71f || _0x485ccd) <= Number(_0x3c6953.max[_0x12d890])) {
                  _0x162414 = !0;
                  break;
                }
              }
              _0x162414 ? _0x321663.ruleUse.push(_0x3f82eb[_0x4afaec]) : _0x321663.ruleNouse.push(_0x3f82eb[_0x4afaec]);
            }
          }
        } else {
          _0x321663.ruleNouse.push(_0x3f82eb[_0x4afaec]);
        }
      }
    }
    return _0x321663;
  }
  function _0x48501c(_0x4ec71f) {
    if (_0x4ec71f) {
      return _0x4ec71f.substring(0, 4) + "-" + _0x4ec71f.substring(4, 6) + "-" + _0x4ec71f.substring(6, 8);
    }
  }
  function _0x38e4e2(_0x4ec71f) {
    if (_0x4ec71f) {
      return _0x4ec71f.substring(0, 4) + "年" + _0x4ec71f.substring(4, 6) + "月" + _0x4ec71f.substring(6, 8) + "日";
    }
  }
  function _0x361052(_0x4ec71f) {
    var _0x321663 = "";
    switch (_0x4ec71f.toLowerCase()) {
      case "hf0001":
      case "hf0003":
        _0x321663 = "加赠券";
        break;
      case "hf0002":
        _0x321663 = "折扣券";
        break;
      case "hf0005":
        _0x321663 = "满减券";
        break;
      case "hf0007":
        _0x321663 = "立减券";
        break;
      case "hf0008":
        _0x321663 = "折扣券";
        break;
      case "hf0009":
        _0x321663 = "原价券";
    }
    return _0x321663;
  }
  function _0x342993(_0x4ec71f) {
    if (!_0x4ec71f) {
      return "活动";
    }
    var _0x321663 = String(_0x4ec71f);
    if (_0x321663.indexOf("|") > -1) {
      for (var _0x4afaec = _0x321663.split("|"), _0x3c6953 = !1, _0x4cb89b = 0; _0x4cb89b < _0x4afaec.length; _0x4cb89b++) {
        if (_0x4afaec[_0x4cb89b].indexOf(";") > -1 && Number(_0x4afaec[_0x4cb89b].split(";")[0]) == _0x485ccd) {
          _0x3c6953 = !0;
          _0x321663 = _0x4afaec[_0x4cb89b].split(";")[1];
          break;
        }
      }
      _0x3c6953 || (_0x321663 = "活动");
    } else {
      _0x321663 = _0x321663.indexOf(";") > -1 ? _0x321663.split(";")[1] : _0x321663;
    }
    var _0xd2f33 = _0x321663.match(/\d/g);
    if (_0xd2f33) {
      var _0x162414 = _0x321663.substring(0, _0x321663.indexOf(_0xd2f33[0])),
        _0x12d890 = _0x321663.substring(_0x321663.lastIndexOf(_0xd2f33[_0xd2f33.length - 1]) + 1);
      if (_0x321663.indexOf(".") > -1) {
        return "<span class=\"small\">" + _0x162414 + "</span><span>" + _0x321663.substring(_0x321663.indexOf(_0xd2f33[0]), _0x321663.indexOf(".")) + "</span><span class=\"small\">" + _0x321663.substring(_0x321663.indexOf(".")) + "</span>";
      }
      return "<span class=\"small\">" + _0x162414 + "</span><span>" + _0xd2f33.join("") + "</span><span class=\"small\">" + _0x12d890 + "</span>";
    }
    return "活动" == _0x321663 ? "<span>" + _0x321663 + "</span>" : "<span class=\"small\">" + _0x321663 + "</span>";
  }
  function _0x12b924(_0x4ec71f, _0x321663, _0x4afaec) {
    if (8 == _0x321663) {
      if ("hf0007" == _0x4afaec) {
        return "<span class=\"small\">￥</span>" + _0x4ec71f;
      }
      var _0x3c6953 = 1000 * Number(_0x4ec71f) / 100 + "折",
        _0x4cb89b = "";
      _0x4cb89b = _0x3c6953.indexOf(".") > -1 ? _0x3c6953.indexOf(".") : _0x3c6953.indexOf("折");
      return _0x3c6953.substring(0, _0x4cb89b) + "<span class=\"small\">" + _0x3c6953.substring(_0x4cb89b) + "</span>";
    }
    return 7 == _0x321663 || 10 == _0x321663 ? "<span class=\"small\">￥</span>" + _0x4ec71f : 9 == _0x321663 ? "+" + _0x4ec71f + "<span class=\"small\">%</span>" : "";
  }
  function _0x4b9215(_0x4ec71f) {
    publicClient.showLoadPlug();
    recharge_H5module_inner.getRealFee({
      type: "get",
      userInfo: _0x6393e4,
      time: 1000,
      reqBody: {
        cellNum: _0x36c5bb
      },
      success: function (_0x321663) {
        var _0x4afaec, _0x3c6953;
        "000000" == _0x321663.retCode && (_0x3c6953 = _0x321663.data && (_0x321663.data.realBalanceFee || _0x321663.data.curFee), $("#balanceMoney").text(Number(_0x3c6953)), Number(_0x3c6953) < 10 && $("#balanceMoney").addClass("balanceRed"), Number(_0x3c6953) < 0 && (_0x4afaec = Math.abs(Number(_0x3c6953)), _0x4afaec < _0x58dd3c ? _0x4afaec = _0x58dd3c : _0x4afaec > _0xf316cf && (_0x4afaec = _0xf316cf)));
        _0x1c8c02(_0x4afaec);
        "function" == typeof _0x4ec71f && _0x4ec71f(_0x3c6953);
        $(".balance").removeClass("hidden");
        publicClient.closeLoadPlug();
      },
      error: function (_0x321663) {
        publicClient.closeLoadPlug();
        _0x1c8c02();
        "function" == typeof _0x4ec71f && _0x4ec71f();
      }
    });
  }
  function _0x3a95ab() {
    Number(String(_0x6393e4.version).split(".").splice(0, 3).join("")) >= 700 ? leadeon.getContactName({
      debug: !1,
      phoneNum: _0x1f5ee3,
      success: function (_0x4ec71f) {
        var _0x321663 = _0x4ec71f.userName;
        _0x321663 && $(".contacts-name").html("(" + _0x321663 + ")");
      },
      error: function (_0x4ec71f) {}
    }) : publicClient.getContactName(_0x4338f5, _0x1f5ee3);
  }
  function _0x4338f5(_0x4ec71f) {
    _0x4ec71f && "ok" == _0x4ec71f.RESULT && $(".contacts-name").html("(" + _0x4ec71f.NAME + ")");
  }
  function _0x209dfe(_0x4ec71f) {
    var _0x321663 = navigator.userAgent;
    (_0x321663.indexOf("Android") > -1 || _0x321663.indexOf("Linux") > -1) && (_0x4ec71f ? $(".noSelect").prev(".under-pay-rule-container").prevAll().slideUp() : $(".noSelect").prev(".under-pay-rule-container").prevAll().slideDown());
  }
  function _0x2f22f5(_0x4ec71f) {
    var _0x321663 = {
      lt: "<",
      gt: ">",
      nbsp: " ",
      amp: "&",
      quot: "\""
    };
    return _0x4ec71f.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (_0x4ec71f, _0x4afaec) {
      return _0x321663[_0x4afaec];
    });
  }
  function _0x4060fa() {
    _0x35d3c7();
    $(".num-his").off("fastClick");
    $(".num-his").on("fastClick", ".his-tel", function () {
      var _0x4ec71f = $(this).html();
      _0x1f5ee3 = _0x4ec71f.replace(/[^\d]/g, "");
      $(".contacts-name").html("");
      _0x3a95ab();
      _0x3c30cf();
    });
    $(".num-his").on("fastClick", ".del", function (_0x4ec71f) {
      _0x5c8a20($(this).siblings(".his-tel").html());
      _0x4ec71f.stopPropagation();
      _0x4ec71f.preventDefault();
    });
    $(".tel,.edit").click(function () {
      $(".tel,.edit").addClass("hidden");
      $(".del-no").removeClass("hidden");
      $(".num-his").removeClass("hidden");
      $(".tel-input").focus();
    });
    $(".tel-input").on("focus", function () {
      $(".num-his").removeClass("hidden");
      $(".tel,.edit").addClass("hidden");
      "" != $(this).val() && $(".del-no").removeClass("hidden");
    });
    $(".tel-input").off("input");
    $(".tel-input").on("input", function () {
      var _0x4ec71f = _0x2a2012($(this).val());
      if (_0x4ec71f && !(_0x4ec71f.length <= 0)) {
        $(".del-no").removeClass("hidden");
        $(this).val(_0x4ec71f);
        $(this).selectionEnd;
        var _0x321663 = this;
        setTimeout(function () {
          _0x321663.setSelectionRange(_0x4ec71f.length, _0x4ec71f.length);
        }, 0);
        _0x4ec71f && _0x4ec71f.length >= 0 && _0x4ec71f.length < 13 && ($(".recharge-btn,.recharge-shadow").addClass("disable"), _0x1f5ee3 = null, $(".edit").addClass("hidden"), $(".address-name").html("仅支持移动号码充值").removeClass("addActive lightBlue"), $(".contacts-name").html(""));
        _0x4ec71f && _0x4ec71f.length >= 13 && (publicClient.setGdpTrace({}, "clk", {
          WT_envName: "输入号码",
          WT_event: "P00000051686",
          WT_adverType: "122"
        }), $(this).blur(), $(".edit").removeClass("hidden"), $(".del-no").addClass("hidden"), _0x1f5ee3 = _0x4ec71f.replace(/[^\d]/g, ""), $(".contacts-name").html(""), _0x3a95ab(), _0x3c30cf());
      }
    });
    $(".tel-input").off("blur");
    $(".tel-input").on("blur", function () {
      $(".num-his").addClass("hidden");
      $(this).val().length > 0 && ($(".tel,.edit").removeClass("hidden"), $(".del-no").off("click").on("click", function () {
        $(".tel-input").val("");
        $(".tel-input").focus();
      }), setTimeout(function () {
        $(".del-no").addClass("hidden");
      }, 0));
    });
    $(".other-box").fastClick(function () {
      publicClient.setGdpTrace({}, "clk", {
        WT_envName: "他人充",
        WT_event: "P00000051688",
        WT_adverType: "122"
      });
      "250" == _0x6393e4.loginProvince ? _0x2fa4e9("https://wap.js.10086.cn/vw/navbar/friend_TXL?ch=7x") : leadeon.getContacts({
        debug: !1,
        success: function (_0x4ec71f) {
          _0x1f5ee3 = (_0x4ec71f.phoneNum + "").replace(/[^\d]/g, "");
          "+86" == _0x1f5ee3.substring(0, 3) && (_0x1f5ee3 = _0x1f5ee3.substring(3));
          "86" == _0x1f5ee3.substring(0, 2) && (_0x1f5ee3 = _0x1f5ee3.substring(2));
          "0086" == _0x1f5ee3.substring(0, 4) && (_0x1f5ee3 = _0x1f5ee3.substring(4));
          _0x1f5ee3.length > 11 && (_0x1f5ee3 = _0x1f5ee3.substr(-11));
          _0x1f5ee3.length < 11 ? publicClient.toastMsgPlug("号码异常，请输入正确移动号码", 2000) : ($(".address-name").html("").removeClass("addActive lightBlue"), $(".contacts-name").html("(" + _0x4ec71f.userName + ")"), setTimeout(function () {
            _0x3c30cf();
          }, 200));
        },
        error: function (_0x4ec71f) {}
      });
    });
    $(".num-list").on("fastClick", ".num-item", function () {
      if (_0x1cc9fd = !0, $(".arrow-container").children().removeClass("active-arrow"), $(".arrow-container").children().eq($(this).attr("posval") % 3).addClass("active-arrow"), _0x326102 = "-1", _0x4b743d = "-1", $(this).attr("posval") == _0x9abc0) {
        $(".num-item").removeClass("active");
        $(this).addClass("active");
        $(this).children(".money").addClass("hidden");
        var _0x4ec71f = this,
          _0x321663 = navigator.userAgent;
        _0x321663.indexOf("Android") > -1 || _0x321663.indexOf("Linux") > -1 ? setTimeout(function () {
          $(_0x4ec71f).children(".money-input").removeClass("hidden").focus();
        }, 5) : $(this).children(".money-input").removeClass("hidden").focus();
        _0x485ccd = $(".money-input").val();
        _0xf44882();
      } else {
        var _0x4afaec = parseInt($(this).children(".money").attr("real-val"));
        if (_0x5625fa && (_0xab89e7 = 0, _0x19da5a = _0xc0398b.addtionRights[_0xab89e7], _0x19da5a.additionOperateId = _0xc0398b.addtionBlindRules[_0xab89e7].operateId, _0x19da5a.price = _0xc0398b.addtionBlindRules[_0xab89e7].price, !_0x1eb71a(_0xab89e7, _0x4afaec))) {
          return void publicClient.showDialogPlug("请选择与搭售活动符合的档位", "我知道了");
        }
        if (_0x4afaec <= _0xf316cf && _0x4afaec >= _0x58dd3c || $(this).hasClass("num-item-gear-one")) {
          _0x485ccd = _0x4afaec;
          var _0x3c6953 = {
              0: "P00000051723",
              1: "P00000051690",
              2: "P00000051691",
              3: "P00000051692",
              4: "P00000051693",
              5: "P00000051694",
              6: "P00000051805"
            },
            _0x4cb89b = _0x3c6953[$(this).attr("buryingval")];
          publicClient.setGdpTrace({}, "clk", {
            WT_envName: _0x485ccd + "元",
            WT_event: _0x4cb89b,
            WT_adverType: "122"
          });
          $(".num-item").removeClass("active gear-one-active");
          $(this).hasClass("num-item-gear-one") ? $(this).addClass("gear-one-active") : $(this).addClass("active");
          _0xf44882();
        } else {
          publicClient.showDialogPlug("充值金额必须在" + _0x58dd3c + "~" + _0xf316cf + "之间", "知道了");
        }
      }
    });
    $("#special-area, .num-list").on("fastClick", ".num-item-img", function () {
      var _0x4ec71f = "";
      _0x4ec71f = $(this).attr("positionNo");
      var _0x321663 = {
        0: "P00000051696",
        1: "P00000051697",
        2: "P00000062035",
        3: "P00000062036",
        4: "P00000062037"
      };
      publicClient.setGdpTrace({}, "clk", {
        WT_envName: ($(this).find(".num-act-tit").html() || $(this).html() || "").trim(),
        WT_event: _0x321663[$(this).attr("posval")],
        WT_adverType: "122",
        WT_next_url: _0x4ec71f
      });
      "0" != _0x4ec71f && _0x2fa4e9(_0x4ec71f);
    });
    $(".num-list").on("focus", ".money-input", function () {
      var _0x4ec71f = $(this).val().length,
        _0x321663 = this;
      setTimeout(function () {
        _0x321663.setSelectionRange(_0x4ec71f, _0x4ec71f);
      }, 0);
      _0x209dfe(!0);
    });
    $(".num-list").on("input", ".money-input", function () {
      if (/^\d+(\.\d{0,2})?$/.test($(this).val())) {
        var _0x4ec71f = $(this).val();
        _0x4ec71f.indexOf(".") < 0 && "" != _0x4ec71f && (_0x4ec71f = parseFloat(_0x4ec71f));
        $(this).val(_0x4ec71f);
      } else {
        var _0x4ec71f = $(this).val().replace(/[^\d.]/g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".").replace(/^\./g, "").replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
        _0x4ec71f.indexOf(".") < 0 && "" != _0x4ec71f && (_0x4ec71f = parseFloat(_0x4ec71f));
        $(this).val(_0x4ec71f);
      }
      _0x485ccd = $(this).val();
      _0xf44882();
    });
    $(".num-list").on("blur", ".money-input", function () {
      if (_0x209dfe(!1), publicClient.setGdpTrace({}, "clk", {
        WT_envName: "自定义",
        WT_event: "P00000051695",
        WT_adverType: "122"
      }), _0x5625fa && $(".addtionSms").hasClass("hidden") && (_0xab89e7 = 0, _0x19da5a = _0xc0398b.addtionRights[_0xab89e7], _0x19da5a.additionOperateId = _0xc0398b.addtionBlindRules[_0xab89e7].operateId, _0x19da5a.price = _0xc0398b.addtionBlindRules[_0xab89e7].price, !_0x1eb71a(_0xab89e7, parseInt($(this).val())))) {
        return void publicClient.showDialogPlug("请选择与搭售活动符合的档位", "我知道了");
      }
      $(".num-item").eq(_0x9abc0).hasClass("active") && (_0x485ccd = $(this).val(), $(this).addClass("hidden"), _0x485ccd <= 0 ? (_0x485ccd = 0, $(".num-item").eq(_0x9abc0).children(".money").html("自定义" + _0x2d87bb).removeClass("hidden")) : ($(".num-item").eq(_0x9abc0).children(".money").html(_0x485ccd + "元" + _0x2d87bb).removeClass("hidden"), (_0x485ccd < _0x58dd3c || _0x485ccd > _0xf316cf) && publicClient.showDialogPlug("充值金额必须在" + _0x58dd3c + "~" + _0xf316cf + "之间", "知道了"), _0xf44882()));
    });
    $(".invoice-lists").on("fastClick", ".invoice-item", function () {
      $(this).hasClass("invoice-itemActive") || ($(this).siblings().removeClass("invoice-itemActive"), $(this).addClass("invoice-itemActive"));
    });
    $(".invoice-popup").on("fastClick", ".invoice-exit,.invoice-cancel", function () {
      $(".invoice-popup").addClass("hidden");
      $(".recharge-btn,.recharge-shadow").removeClass("disable");
    });
    $(".invoice-popup").on("fastClick", ".invoice-comfirm", function () {
      $(".invoice-popup").addClass("hidden");
      _0x303d01 = $(".invoice-itemActive").attr("type");
      _0x1c3473();
    });
    $(".discounted-main").fastClick(function () {
      $(".discounted-main").addClass("hidden");
    });
    $(".discounted-main").on("fastClick", ".discounted-item", function () {
      var _0x4ec71f = $(this).attr("data-targetNoType");
      if (Number($(this).attr("data-usable"))) {
        return !1;
      }
      "1" == _0x4ec71f ? _0x36c5bb ? _0x36c5bb == _0x1f5ee3 ? (_0x445393 = $(this).index(), _0xf44882()) : publicClient.showDialogPlug("该活动仅限登录用户自己充值", "知道了") : _0x4575c1 ? publicClient.singleButBack("该活动仅限移动号码登录充值", "我知道了", function () {}) : publicClient.confirmPlug("登录", "取消", "该活动仅限登录后的用户充值，是否登录？", function () {
        leadeon.showLogin();
      }, "") : "2" == _0x4ec71f || "3" == _0x4ec71f ? _0x36c5bb ? (_0x445393 = $(this).index(), _0xf44882()) : _0x4575c1 ? publicClient.singleButBack("该活动仅限移动号码登录充值", "我知道了", function () {}) : publicClient.confirmPlug("登录", "取消", "该活动仅限登录后充值，是否登录？", function () {
        leadeon.showLogin();
      }, "") : (_0x445393 = $(this).index(), _0xf44882());
    });
    $(".couponClick").fastClick(function () {
      $(".benefit-item >.coupon").hasClass("item-disable") || (_0x5c5d03 && _0x5c5d03.length > 0 || _0x3f82eb && _0x3f82eb.length > 0) && (publicClient.setGdpTrace({}, "popview", {
        WT_envName: "充值优惠弹窗_弹窗出现",
        WT_event: "H5PopShow",
        WT_es: _0x4ec71f.location.href,
        WT_ti: "客户端话费充值"
      }), _0x17044a.includes(_0x2bdaee) ? ($(".coupon-main-yn").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow"), $(".coupon-box").removeClass("reminder-to-bottom").addClass("reminder-to-top"), $(".coupon-main-yn").removeClass("hidden")) : ($(".coupon-main").removeClass("hidden coupon-mainNone").addClass("coupon-mainShow"), $(".coupon-box").removeClass("reminder-to-bottom").addClass("reminder-to-top"), $(".coupon-main").removeClass("hidden"), $(".coupon-main-yn").addClass("hidden")));
    });
    $(".coupon-main-yn").off("fastClick");
    $(".box_yn").on("fastClick", ".button_yn", function () {
      _0x370289();
    });
    $(".title-yn").on("fastClick", ".coupon-exit-yn", function () {
      _0x370289();
    });
    $(".coupon-main,.interests-exit,.coupon-exit,.interests-main").fastClick(function (_0x321663) {
      publicClient.setGdpTrace({}, "popview", {
        WT_envName: "充值优惠弹窗_弹窗关闭",
        WT_event: "H5PopHide",
        WT_es: _0x4ec71f.location.href,
        WT_ti: "客户端话费充值"
      });
      _0x3ffdb4();
    });
    $(".otherCharge").on("input", ".other-charge-input", function () {
      var _0x4ec71f = this,
        _0x321663 = $(this).val(),
        _0x4afaec = _0x2a2012($(this).val());
      if (_0x4afaec && !(_0x4afaec.length <= 0)) {
        $(this).val(_0x4afaec);
        $(this).selectionEnd;
        var _0x4ec71f = this;
        setTimeout(function () {
          _0x4ec71f.setSelectionRange(_0x4afaec.length, _0x4afaec.length);
        }, 0);
        var _0x3c6953 = /^[0-9]+.?[0-9]*$/;
        _0x321663 = _0x321663.replace(/[^\d]/g, "");
        _0x3c6953.test(_0x321663) ? _0x321663 == _0x1f5ee3 && ($(".other-charge-input-tip").html("*两次号码输入需保持一致"), $(".other-charge-input-tip").removeClass("other-charge-input-tip-error")) : ($(".other-charge-input-tip").html("*两次号码输入不一致，请重新输入"), $(".other-charge-input-tip").addClass("other-charge-input-tip-error"));
      }
    });
    $(".otherCharge").on("fastClick", ".otherCharge-no-button", function (_0x4ec71f) {
      _0x4ec71f.preventDefault();
      $(".otherCharge").addClass("hidden");
      $(".recharge-btn,.recharge-shadow").removeClass("disable");
    });
    $(".otherCharge").on("fastClick", ".otherCharge-button", function (_0x4ec71f) {
      if (_0x4ec71f.preventDefault(), _0x485ccd >= 100) {
        if (($("#other-charge-input-again").val() || "").replace(/[^\d]/g, "") != _0x1f5ee3) {
          $(".other-charge-input-tip").html("*两次号码输入不一致，请重新输入");
          return void $(".other-charge-input-tip").addClass("other-charge-input-tip-error");
        }
      }
      _0x483169();
      $(".otherCharge").addClass("hidden");
    });
    $(".jfRecharge").on("fastClick", ".otherCharge-no-button", function (_0x4ec71f) {
      _0x4ec71f.preventDefault();
      $(".jfRecharge").addClass("hidden");
      $(".recharge-btn,.recharge-shadow").removeClass("disable");
    });
    $(".jfRecharge").on("fastClick", ".otherCharge-button", function (_0x4ec71f) {
      _0x4ec71f.preventDefault();
      $(".jfRecharge").addClass("hidden");
      _0x5625fa ? _0x577ed4() : "-1" != _0x4b743d ? _0xc30dc9() : _0x483169();
    });
    $(".jfRecharge").on("fastClick", ".blind-tip-show", function (_0x321663) {
      var _0x4afaec = "https://touch.10086.cn/i/reapp/v2.0/pages/recharge/";
      _0x4ec71f.location.href.indexOf("/i/gray") > -1 && (_0x4afaec = "https://touch.10086.cn/i/gray/reapp/v2.0/pages/recharge/");
      _0x2fa4e9(_0x4afaec + "recharge_rule_jf.html");
    });
    $(".coupon-exit-addtion").fastClick(function (_0x321663) {
      _0x3ffdb4();
      $(".recharge-btn,.recharge-shadow").removeClass("disable");
      publicClient.setGdpTrace({}, "popview", {
        WT_envName: "加购热门权益_二次确认弹窗_弹窗关闭",
        WT_event: "H5PopHide",
        WT_es: _0x4ec71f.location.href,
        WT_ti: "客户端话费充值"
      });
    });
    $(".coupon-box, .reminder-alert,.box_yn,title-yn, .interests-box").fastClick(function (_0x4ec71f) {
      _0x4ec71f.preventDefault();
      _0x4ec71f.stopPropagation();
    });
    $(".coupon-list").on("fastClick", ".discount-item", function () {
      if (!$(this).hasClass("discount-itemNotClick")) {
        _0x326102 = "A";
        _0x359e03 = $(this).attr("type");
        var _0x4ec71f = "";
        if ("rule" == _0x359e03) {
          var _0x321663 = $(this).attr("targetNoType");
          "1" == _0x321663 ? _0x36c5bb ? _0x36c5bb == _0x1f5ee3 ? (_0x341d6e = $(this).index(), _0x445393 = $(this).attr("index"), _0x3cf65b($(this))) : (publicClient.showDialogPlug("该活动仅限登录用户自己充值", "知道了"), _0x17044a.includes(_0x2bdaee) && _0x3ffdb4()) : (_0x4575c1 ? publicClient.singleButBack("该活动仅限移动号码登录充值", "我知道了", function () {}) : publicClient.confirmPlug("登录", "取消", "该活动仅限登录后的用户充值，是否登录？", function () {
            leadeon.showLogin();
          }, ""), _0x17044a.includes(_0x2bdaee) && _0x3ffdb4()) : "2" == _0x321663 || "3" == _0x321663 ? _0x36c5bb ? (_0x341d6e = $(this).index(), _0x445393 = $(this).attr("index"), _0x3cf65b($(this))) : (_0x4575c1 ? publicClient.singleButBack("该活动仅限移动号码登录充值", "我知道了", function () {}) : publicClient.confirmPlug("登录", "取消", "该活动仅限登录后充值，是否登录？", function () {
            leadeon.showLogin();
          }, ""), _0x17044a.includes(_0x2bdaee) && _0x3ffdb4()) : (_0x341d6e = $(this).index(), _0x445393 = $(this).attr("index"), _0x3cf65b($(this)));
          _0x4ec71f = _0x3f82eb[_0x445393].saleName;
        } else {
          _0x341d6e = $(this).index();
          _0x445393 = $(this).attr("index");
          _0x4ec71f = _0x5c5d03[_0x445393].saleName;
          _0x3cf65b($(this));
        }
        _0x17044a.includes(_0x2bdaee) || _0x3ffdb4();
        publicClient.setGdpTrace({}, "clk", {
          WT_envName: _0x4ec71f,
          WT_event: "P00000051699",
          WT_adverType: "122"
        });
      }
    });
    $(".addtion-box").off("fastClick");
    $(".addtion-box").on("fastClick", ".addtionCheck", function () {
      if ($(".unit-order-product").removeClass("unit-order-product-active"), _0x4b743d = "-1", _0x4258a1 = !1, publicClient.setGdpTrace({}, "clk", {
        WT_envName: "勾选加购权益",
        WT_event: "P00000051701",
        WT_adverType: "122"
      }), $(".addtionCheck").hasClass("active")) {
        $(".addtionCheck").removeClass("active");
        _0x5625fa = !1;
        _0xf44882(!1);
      } else {
        if (_0x36c5bb != _0x1f5ee3) {
          return void publicClient.showDialogPlug("搭售活动仅限本机充值", "我知道了");
        }
        null == _0xae9b17 ? _0xc0398b.addtionBoxRules.length > 0 ? (_0xab89e7 = 0, _0x19da5a = _0xc0398b.addtionRights[_0xab89e7], _0x19da5a.additionOperateId = _0xc0398b.addtionBlindRules[_0xab89e7].operateId, _0x19da5a.price = _0xc0398b.addtionBlindRules[_0xab89e7].price, _0x5625fa = !0, _0xf44882(!1)) : publicClient.showDialogPlug("请选择与搭售活动符合的档位", "我知道了") : (_0x5625fa = !1, publicClient.showDialogPlug("搭售活动与权益活动不可同时参与！", "我知道了"));
      }
    });
    $(".addtion-box").on("fastClick", ".img-item3", function () {
      var _0x4ec71f = {
        0: "P00000051705",
        1: "P00000051706",
        2: "P00000051707",
        3: "P00000051708",
        4: "P00000051709",
        5: "P00000051710"
      };
      0 == _0x5625fa ? publicClient.showDialogPlug("请先勾选加购热门权益选择框", "我知道了") : ($(this).siblings().removeClass("current"), _0xab89e7 = $(this).attr("index"), _0x19da5a = _0xc0398b.addtionRights[_0xab89e7], _0x19da5a.additionOperateId = _0xc0398b.addtionBlindRules[_0xab89e7].operateId, _0x19da5a.price = _0xc0398b.addtionBlindRules[_0xab89e7].price, $(this).addClass("current"), $(".unit-order-product").removeClass("unit-order-product-active"), _0x4b743d = "-1", publicClient.setGdpTrace({}, "clk", {
        WT_envName: _0x19da5a.goodsName,
        WT_event: _0x4ec71f[$(this).attr("index")],
        WT_adverType: "122"
      }), $("#payMoney").html(publicClient.floating(Number(_0x2763c2) + Number(_0x19da5a.price))));
    });
    $(".addtion-box").on("fastClick", ".addtionRule-buy", function () {
      publicClient.setGdpTrace({}, "clk", {
        WT_envName: "规则",
        WT_event: "P00000051702",
        WT_adverType: "122"
      });
      publicClient.setGdpTrace({}, "popview", {
        WT_envName: "加购热门权益_规则弹窗_弹窗出现",
        WT_event: "H5PopShow",
        WT_es: _0x4ec71f.location.href,
        WT_ti: "客户端话费充值"
      });
      $(".addtionRule").removeClass("hidden");
    });
    $(".addtionRule").on("fastClick", ".blindBoxRecord-close", function () {
      publicClient.setGdpTrace({}, "popview", {
        WT_envName: "加购热门权益_规则弹窗_弹窗关闭",
        WT_event: "H5PopHide",
        WT_es: _0x4ec71f.location.href,
        WT_ti: "客户端话费充值"
      });
      $(".addtionRule").addClass("hidden");
    });
    $(".addtion-box").on("fastClick", ".addtion-record", function () {
      publicClient.setGdpTrace({}, "clk", {
        WT_envName: "购买记录",
        WT_event: "P00000051703",
        WT_adverType: "122"
      });
      _0x1a366a();
      $(".addtionRecord").removeClass("hidden");
    });
    $(".addtionRecord").on("fastClick", ".blindBoxRecord-button", function () {
      publicClient.setGdpTrace({}, "clk", {
        WT_envName: "购买记录_我知道了",
        WT_event: "P00000051704",
        WT_adverType: "122"
      });
      $(".addtionRecord").addClass("hidden");
      $(".blind-box-records").empty();
    });
    $(".preferential-pack-box").off("fastClick");
    $(".preferential-pack-box").on("fastClick", ".preferential-pack-down", function () {
      _0x3d353a[0] && _0x3d353a[0].sqbUrl && _0x2fa4e9(_0x3d353a[0].sqbUrl);
    });
    $(".preferential-pack-box").on("fastClick", ".preferential-pack-check", function () {
      var _0x4ec71f = (_0x3d353a && _0x3d353a[0] && _0x3d353a[0].presentCode || "").split("|")[1] || "";
      if ($(this).hasClass("active")) {
        if (_0x49bcaf += 1, publicClient.setGdpTrace({}, "clk", {
          WT_envName: "取消勾选",
          WT_event: "P00000097481",
          XY_sqb_group: _0x4ec71f
        }), 1 == _0x49bcaf && (_0x3d353a[0] || {}).sqbImage) {
          var _0x321663 = "https://touch.10086.cn/" + _0x26a2ec + "/operation/" + (_0x3d353a[0] || {}).sqbImage + ".png";
          publicClient.showDialogWanliu(function () {
            $(".preferential-pack-check").removeClass("active");
            _0x4258a1 = !1;
            _0xf44882(!1);
          }, _0x321663, _0x3d353a[0] || {});
        } else {
          _0x4258a1 = !1;
          _0xf44882(!1);
        }
      } else {
        if (!$(this).hasClass("item-disable")) {
          publicClient.setGdpTrace({}, "clk", {
            WT_envName: "勾选",
            WT_event: "P00000097480",
            XY_sqb_group: _0x4ec71f
          });
          var _0x4afaec = function (_0x4ec71f) {
              parseFloat(_0x4ec71f) > 6 ? (_0x4b743d = "-1", _0x5625fa = !1, _0xdc5f9b = !1, _0x4258a1 = !0, _0x2f371a(_0x3d353a[0].operateId, function (_0x4ec71f, _0x321663) {
                _0x4ec71f && publicClient.showDialogPro(_0x2f22f5(_0x4ec71f) || "", "我已阅读并同意", _0x321663, _0x3d353a[0]);
              }), _0xf44882(!1)) : (publicClient.toastPlug("当前话费余额不足，请充值后开通", 2000), $(".preferential-pack-check").removeClass("active"), $(".preferential-pack-check").addClass("item-disable"));
            },
            _0x3c6953 = parseFloat($("#balanceMoney").html()) || 0;
          "--" != $("#balanceMoney").html() ? _0x4afaec(_0x3c6953) : _0x4b9215(function (_0x4ec71f) {
            _0x4afaec(_0x4ec71f);
          });
        }
      }
    });
    $(".addtion-box").on("fastClick", ".go-to-repay-addtion,.do-cancel-addtion", function () {
      if (_0x36c5bb) {
        var _0x321663 = "https://touch.10086.cn/i/mobile/ordersList.html?sign=fffffff0&c=11&e=99";
        _0x4ec71f.location.href.indexOf("gray") > -1 && (_0x321663 = _0x321663.replace("touch.10086.cn/i", "touch.10086.cn/i/gray"));
        leadeon.newWebview({
          debug: !1,
          markID: "",
          type: "",
          funCode: "",
          bizCode: "",
          url: _0x321663,
          success: function (_0x4ec71f) {},
          error: function (_0x4ec71f) {}
        });
      } else {
        leadeon.showLogin();
      }
    });
    $(".mask-box").off("fastClick");
    $(".mask-box").on("fastClick", ".option", function () {
      if ($(".option").hasClass("active")) {
        $(".option").removeClass("active");
        _0xdc5f9b = !1;
        _0xf44882(!1);
      } else {
        var _0x4ec71f = {};
        _0x326256 && _0x326256.length > 0 && (_0x4ec71f = _0x335fc8());
        _0x4ec71f.maskRuleUse.length > 0 ? null == _0xae9b17 ? (_0xdc5f9b = !0, $(".unit-order-product").removeClass("unit-order-product-active"), _0x4b743d = "-1", _0xf44882(!1)) : (_0xdc5f9b = !1, publicClient.showDialogPlug("盲盒活动与权益活动不可同时参与！", "我知道了")) : (_0xdc5f9b = !1, publicClient.showDialogPlug("您选择得档位不支持活动加购，请选择30、50、100元！", "我知道了"));
      }
    });
    $(".mask-box").on("fastClick", ".rule-buy", function () {
      $(".blindRule").removeClass("hidden");
    });
    $(".blindRule").on("fastClick", ".blindBoxRecord-close", function () {
      $(".blindRule").addClass("hidden");
    });
    $(".mask-box").on("fastClick", ".record-buy", function () {
      _0x2a47b2();
      $(".blindRecord").removeClass("hidden");
    });
    $(".blindRecord").on("fastClick", ".blindBoxRecord-button", function () {
      $(".blindRecord").addClass("hidden");
      $(".blind-box-records").empty();
    });
    $(".mask-box").on("fastClick", ".do-cancel", function () {
      $(this).parent().parent().addClass("hidden");
    });
    $(".mask-box").on("fastClick", ".go-to-repay", function () {
      if (_0x36c5bb) {
        var _0x321663 = "https://touch.10086.cn/i/mobile/ordersList.html?sign=fffffff0&c=11&e=99";
        _0x4ec71f.location.href.indexOf("gray") > -1 && (_0x321663 = _0x321663.replace("touch.10086.cn/i", "touch.10086.cn/i/gray"));
        leadeon.newWebview({
          debug: !1,
          markID: "",
          type: "",
          funCode: "",
          bizCode: "",
          url: _0x321663,
          success: function (_0x4ec71f) {},
          error: function (_0x4ec71f) {}
        });
      } else {
        leadeon.showLogin();
      }
    });
    $(".maskSms-codeBtn").off("click");
    $(".maskSms-codeBtn").click(function () {
      if (!$(".maskSms-codeBtn").hasClass("disable")) {
        if (("-1" != _0x4b743d || _0x4258a1) && !$(".product-info-read-con").hasClass("active")) {
          return void publicClient.toastMsgPlug("请先同意勾选协议", 2000);
        }
        $(".rechargeSms-message").text("");
        $(".maskSms-codeBtn").addClass("disable");
        _0x29c0b8();
        var _0x4ec71f = _0x19da5a && _0x19da5a.goodsName || (_0x3ba5d4[_0x4b743d] || {}).saleName,
          _0x321663 = {
            WT_envName: "权益二次确认弹窗_获取验证码",
            WT_event: "P00000058054",
            WT_si_n: "充值" + _0x485ccd + "元" + (_0x4ec71f ? "_" + _0x4ec71f : ""),
            WT_si_x: "6",
            WT_goods_id: _0x19da5a && _0x19da5a.skuid,
            WT_sku_id: _0x19da5a && _0x19da5a.skuid
          };
        if ("-1" != _0x4b743d) {
          var _0x4afaec = ((_0x3ba5d4[_0x4b743d] || {}).presentCode || "").split("|");
          _0x321663 = {
            WT_envName: "充值同定产品二次确认弹窗_获取验证码",
            WT_event: "P00000059891",
            WT_si_n: "充值" + _0x485ccd + "元" + (_0x4ec71f ? "_" + _0x4ec71f : ""),
            WT_goods_id: _0x4afaec && _0x4afaec[0] || "",
            WT_si_x: "6"
          };
        }
        if (_0x4258a1) {
          var _0x3c6953 = _0x3d353a && _0x3d353a[0] && _0x3d353a[0].presentCode && _0x3d353a[0].presentCode.split("|");
          _0x321663 = {
            WT_envName: "获取验证码",
            WT_event: "P00000097487",
            XY_sqb_group: _0x3c6953[1] || "",
            WT_si_n: "充值" + _0x485ccd + "元_" + (_0x3d353a && _0x3d353a[0] && _0x3d353a[0].saleName || ""),
            WT_goods_id: _0x3c6953[0] || "",
            WT_si_x: "6"
          };
        }
        publicClient.setGdpTrace({}, "clk", _0x321663);
      }
    });
    $(".product-info-container").on("fastClick", ".product-info-read-check", function () {
      if ($(this).attr("does-click")) {
        if ($(".product-info-read-con").hasClass("active") ? $(".product-info-read-con").removeClass("active") : $(".product-info-read-con").addClass("active"), _0x4258a1) {
          var _0x4ec71f = _0x3d353a && _0x3d353a[0] && _0x3d353a[0].presentCode && _0x3d353a[0].presentCode.split("|");
          publicClient.setGdpTrace({}, "clk", {
            WT_envName: "勾选协议",
            WT_event: "P00000097486",
            XY_sqb_group: _0x4ec71f[1] || "",
            WT_si_n: "充值" + _0x485ccd + "元_" + (_0x3d353a && _0x3d353a[0] && _0x3d353a[0].saleName || ""),
            WT_goods_id: _0x4ec71f[0] || "",
            WT_si_x: "7"
          });
        } else {
          var _0x321663 = _0x19da5a && _0x19da5a.goodsName || (_0x3ba5d4[_0x4b743d] || {}).saleName,
            _0x4afaec = ((_0x3ba5d4[_0x4b743d] || {}).presentCode || "").split("|");
          publicClient.setGdpTrace({}, "clk", {
            WT_envName: "充值同定产品二次确认弹窗_勾选协议",
            WT_event: "P00000059894",
            WT_adverType: "122",
            WT_si_n: "充值" + _0x485ccd + "元" + (_0x321663 ? "_" + _0x321663 : ""),
            WT_goods_id: _0x4afaec && _0x4afaec[0] || "",
            WT_si_x: "7"
          });
        }
      }
    });
    $(".product-info-container").on("fastClick", ".product-info-use-desc-protocal", function () {
      $(this).attr("openUrl") && _0x2fa4e9($(this).attr("openUrl"));
    });
    $(".maskSms-code").on("blur", function () {
      var _0x321663 = document.documentElement.scrollTop || document.body.scrollTop;
      _0x4ec71f.scrollTo(0, parseFloat(_0x321663) + 1);
    });
    $(".maskSms-code").on("focus", function () {
      $(".rechargeSms-message").text("");
    });
    $(".maskSms-code").on("input", function () {
      4 == $(this).val().length ? $(".init-button").removeClass("disable") : $(".init-button").addClass("disable");
      var _0x4ec71f = _0x19da5a && _0x19da5a.goodsName || (_0x3ba5d4[_0x4b743d] || {}).saleName,
        _0x321663 = {
          WT_envName: "权益二次确认弹窗_输入验证码",
          WT_event: "P00000058056",
          WT_adverType: "122",
          WT_si_n: "充值" + _0x485ccd + "元" + (_0x4ec71f ? "_" + _0x4ec71f : ""),
          WT_si_x: "3",
          WT_goods_id: _0x19da5a && _0x19da5a.skuid,
          WT_sku_id: _0x19da5a && _0x19da5a.skuid
        };
      if ("-1" != _0x4b743d) {
        var _0x4afaec = ((_0x3ba5d4[_0x4b743d] || {}).presentCode || "").split("|");
        _0x321663 = {
          WT_envName: "充值同定产品二次确认弹窗_输入验证码",
          WT_event: "P00000059893",
          WT_adverType: "122",
          WT_si_n: "充值" + _0x485ccd + "元" + (_0x4ec71f ? "_" + _0x4ec71f : ""),
          WT_goods_id: _0x4afaec && _0x4afaec[0] || "",
          WT_si_x: "3"
        };
      }
      if (_0x4258a1) {
        var _0x3c6953 = _0x3d353a && _0x3d353a[0] && _0x3d353a[0].presentCode && _0x3d353a[0].presentCode.split("|");
        _0x321663 = {
          WT_envName: "输入验证码",
          WT_event: "P00000097488",
          XY_sqb_group: _0x3c6953[1] || "",
          WT_si_n: "充值" + _0x485ccd + "元_" + (_0x3d353a && _0x3d353a[0] && _0x3d353a[0].saleName || ""),
          WT_goods_id: _0x3c6953[0] || "",
          WT_si_x: "3"
        };
      }
      4 == $(this).val().length && publicClient.setGdpTrace({}, "clk", _0x321663);
    });
    $(".init-button").off("click");
    $(".init-button").click(function () {
      if (!$(this).hasClass("disable")) {
        if (_0x230900 = $(this).prev().children(".maskSms-code").val(), 4 != _0x230900.length) {
          return void (_0x4258a1 && !$(".product-info-read-con").hasClass("active") ? publicClient.toastMsgPlug("请先同意勾选协议", 2000) : publicClient.toastMsgPlug("验证码不正确，请核对后重新输入。", 2000));
        }
        if ("-1" != _0x4b743d && !$(".product-info-read-con").hasClass("active")) {
          return void publicClient.toastMsgPlug("请先同意勾选协议", 2000);
        }
        $(this).addClass("disable");
        publicClient.showLoadPlug();
        _0x483169();
        var _0x4ec71f = _0x19da5a && _0x19da5a.goodsName || (_0x3ba5d4[_0x4b743d] || {}).saleName,
          _0x321663 = {
            WT_envName: "权益二次确认弹窗_确认订购",
            WT_event: "P00000051726",
            WT_adverType: "122",
            WT_si_n: "充值" + _0x485ccd + "元" + (_0x4ec71f ? "_" + _0x4ec71f : ""),
            WT_si_x: "21",
            WT_goods_id: _0x19da5a && _0x19da5a.skuid,
            WT_sku_id: _0x19da5a && _0x19da5a.skuid
          };
        if ("-1" != _0x4b743d) {
          var _0x4afaec = ((_0x3ba5d4[_0x4b743d] || {}).presentCode || "").split("|");
          _0x321663 = {
            WT_envName: "充值同定产品二次确认弹窗_确认订购",
            WT_event: "P00000059892",
            WT_adverType: "122",
            WT_si_n: "充值" + _0x485ccd + "元" + (_0x4ec71f ? "_" + _0x4ec71f : ""),
            WT_goods_id: _0x4afaec && _0x4afaec[0] || "",
            WT_si_x: "21"
          };
        }
        if (_0x4258a1) {
          publicClient.setGdpTrace({}, "popview", {
            WT_envName: "充值页面_省钱包业务订购弹窗_弹窗关闭",
            WT_event: "H5PopHide",
            XY_sqb_group: ((_0x3d353a[0] || {}).presentCode || "").split("|")[1] || ""
          });
          var _0x3c6953 = _0x3d353a && _0x3d353a[0] && _0x3d353a[0].presentCode && _0x3d353a[0].presentCode.split("|");
          _0x321663 = {
            WT_envName: "确认订购",
            WT_event: "P00000094675",
            XY_sqb_group: _0x3c6953[1] || "",
            WT_si_n: "充值" + _0x485ccd + "元_" + (_0x3d353a && _0x3d353a[0] && _0x3d353a[0].saleName || ""),
            WT_goods_id: _0x3c6953[0] || "",
            WT_si_x: "21"
          };
        }
        publicClient.setGdpTrace({}, "clk", _0x321663);
      }
    });
    $(".interests-list").on("fastClick", ".interests-item", function () {
      _0xdc5f9b ? (_0x3ffdb4(), publicClient.showDialogPlug("盲盒活动与权益活动不可同时参与！", "我知道了")) : _0x5625fa ? (_0x3ffdb4(), publicClient.showDialogPlug("搭售活动与权益活动不可同时参与！", "我知道了")) : $(this).hasClass("interests-itemNotClick") || (_0xae9b17 = $(this).attr("index"), _0x588334 = $(this).index(), $(".interests-coupon").addClass("active"), $(".quanyi").addClass("hidden"), _0xf44882(), _0x3ffdb4());
    });
    $(".reload-text, .interests-reload-text").fastClick(function (_0x4ec71f) {
      _0x4ec71f.stopPropagation();
      _0x4ec71f.preventDefault();
      $(this).removeClass("blue").html("加载中");
      $(this).hasClass("reload-text") ? $(".reload-icon").addClass("loadRotate") : $(".interests-reload-icon").addClass("loadRotate");
      _0x46863d = !0;
      _0x33dfc2();
    });
    $(".recharge-btn").off("fastClick");
    $(".recharge-btn").fastClick(function () {
      if (!$(this).hasClass("disable") && _0x1f5ee3) {
        var _0x4ec71f = _0x19da5a && _0x19da5a.goodsName || "-",
          _0x321663 = (_0x3ba5d4[_0x4b743d] || {}).saleName || "-",
          _0x4afaec = {
            WT_envName: "立即支付",
            WT_event: "P00000051724",
            WT_adverType: "122",
            XY_czyh: _0x38d5a8 || _0x2257f2,
            WT_si_n: "充值" + _0x485ccd + "元_" + _0x4ec71f + "_" + _0x321663,
            WT_si_x: "20",
            WT_goods_id: "cz" + _0x485ccd
          };
        if (_0x321663 && "-" != _0x321663 && (_0x4afaec.XY_cztd = _0x321663), publicClient.setGdpTrace({}, "clk", _0x4afaec), "" != _0x36c5bb && _0x36c5bb != _0x1f5ee3 && $(".otherCharge").hasClass("hidden")) {
          $(".otherCharge").removeClass("hidden");
          var _0x3c6953 = $("#otherRechargeShowTpl").html(),
            _0x4cb89b = juicer(_0x3c6953, {
              littleGear: !0
            });
          _0x485ccd >= 100 && (_0x4cb89b = juicer(_0x3c6953, {
            littleGear: !1
          }));
          $(".otherCharge-dialog").html(_0x4cb89b);
          $(".text_phone").text(_0x1f5ee3);
          $(".text_val").text(Number($("#amoMoney").text()) + "元");
          return void publicClient.closeLoadPlug();
        }
        $(".recharge-btn,.recharge-shadow").addClass("disable");
        Number($("#payMoney").html());
        _0x21ea9a && _0x4575c1 ? publicClient.singleButBack("该活动仅限移动号码登录充值", "我知道了", function () {}) : (_0x303d01 = "", _0x1c3473());
      }
    });
    $(".prompt").fastClick(function () {
      $(".reminder-prompt").removeClass("hidden reminder-promptNone").addClass("reminder-promptShow");
      $(".reminder-alert").removeClass("reminder-to-bottom").addClass("reminder-to-top");
      publicClient.setGdpTrace({}, "clk", {
        WT_envName: "温馨提示",
        WT_event: "P00000051717",
        WT_adverType: "122"
      });
    });
    $(".reminder-prompt,.reminder-exit").fastClick(function () {
      $(".reminder-prompt").removeClass("reminder-promptShow").addClass("reminder-promptNone");
      $(".reminder-alert").removeClass("reminder-to-top").addClass("reminder-to-bottom");
      _0x4ce913 && clearTimeout(_0x4ce913);
      _0x4ce913 = setTimeout(function () {
        $(".reminder-prompt").addClass("hidden");
      }, 450);
    });
    $(".order").fastClick(function () {
      if (_0x36c5bb) {
        var _0x4ec71f = $(this).attr("jump-url");
        publicClient.setGdpTrace({}, "clk", {
          WT_envName: "我的订单",
          WT_event: "P00000051718",
          WT_adverType: "122",
          WT_next_url: _0x4ec71f
        });
        leadeon.newWebview({
          debug: !1,
          markID: "",
          type: "",
          funCode: "",
          bizCode: "",
          url: _0x4ec71f,
          success: function (_0x4ec71f) {},
          error: function (_0x4ec71f) {}
        });
      } else {
        leadeon.showLogin();
      }
    });
    $(".drawInvoice").fastClick(function () {
      var _0x4ec71f = $(".drawInvoice").attr("jump-url");
      publicClient.setGdpTrace({}, "clk", {
        WT_envName: "电子发票",
        WT_event: "P00000051719",
        WT_adverType: "122",
        WT_next_url: _0x4ec71f
      });
      leadeon.newWebview({
        debug: !1,
        markID: "",
        type: "",
        funCode: "",
        bizCode: "",
        url: _0x4ec71f,
        success: function (_0x4ec71f) {},
        error: function (_0x4ec71f) {}
      });
    });
    $(".unpaid-cancel").click(function () {
      $(".unpaid-prompt").addClass("hidden");
    });
    $(".unpaid-see").click(function () {
      if ($(".unpaid-prompt").addClass("hidden"), _0x36c5bb) {
        var _0x321663 = "https://touch.10086.cn/i/mobile/ordersList.html?sign=fffffff0&c=11&e=99";
        _0x4ec71f.location.href.indexOf("gray") > -1 && (_0x321663 = _0x321663.replace("touch.10086.cn/i", "touch.10086.cn/i/gray"));
        leadeon.newWebview({
          debug: !1,
          markID: "",
          type: "",
          funCode: "",
          bizCode: "",
          url: _0x321663,
          success: function (_0x4ec71f) {},
          error: function (_0x4ec71f) {}
        });
      } else {
        leadeon.showLogin();
      }
    });
    $(".recharge-content").on("fastClick", ".recharge-content-list", function () {
      var _0x4ec71f = $(this).attr("iconMessage"),
        _0x321663 = _0x5b8d95.lili[_0x4ec71f],
        _0x4afaec = (_0x321663.publishLocation, {
          0: "P00000051712",
          1: "P00000051713",
          2: "P00000051714",
          3: "P00000051715",
          4: "P00000051716"
        });
      publicClient.setGdpTrace({}, "clk", {
        WT_envName: _0x321663.iconName,
        WT_event: _0x4afaec[_0x4ec71f],
        WT_next_url: _0x321663.actionUrl
      });
      _0x281188(_0x321663);
    });
    $(_0x4ec71f).on("resize", function () {
      var _0x321663 = $(_0x4ec71f).height();
      _0x321663 && _0x29099e && _0x29099e == _0x321663 && !publicClient.versions.ios && ($(".tel-input").blur(), $(".money-input").blur());
    });
    $(".rechargeSms-codeBtn").off("click");
    $(".rechargeSms-codeBtn").click(function () {
      $(".rechargeSms-codeBtn").hasClass("disable") || ($(".rechargeSms-message").text(""), $(".rechargeSms-codeBtn").addClass("disable"), _0x2f2791());
    });
    $(".rechargeSms-code").on("blur", function () {
      var _0x321663 = document.documentElement.scrollTop || document.body.scrollTop;
      _0x4ec71f.scrollTo(0, parseFloat(_0x321663) + 1);
    });
    $(".rechargeSms-code").on("focus", function () {
      $(".rechargeSms-message").text("");
    });
    $(".rechargeSms-code").on("input", function () {
      4 == $(".rechargeSms-code").val().length ? $(".rechargeSms-confirm").removeClass("disable") : $(".rechargeSms-confirm").addClass("disable");
    });
    $(".rechargeSms-cancel").off("click");
    $(".rechargeSms-cancel").click(function () {
      _0x3dc6e0 = 180;
      _0x2360f5 && clearInterval(_0x2360f5);
      $(".rechargeSms-codeBtn").removeClass("disable").text("获取验证码");
      $(".rechargeSms-code").val("");
      $(".rechargeSms-prompt").addClass("hidden");
      $(".recharge-btn,.recharge-shadow").removeClass("disable");
    });
    $(".rechargeSms-close").off("click");
    $(".rechargeSms-close").click(function () {
      _0x3dc6e0 = 180;
      _0x2360f5 && clearInterval(_0x2360f5);
      $(".rechargeSms-codeBtn").removeClass("disable").text("获取验证码");
      $(".rechargeSms-code").val("");
      $(".rechargeSms-prompt").addClass("hidden");
      $(".recharge-btn,.recharge-shadow").removeClass("disable");
      _0x1f5ee3 = null;
    });
    $(".rechargeSms-confirm").off("click");
    $(".rechargeSms-confirm").click(function () {
      $(".rechargeSms-confirm").hasClass("disable") || ($(".rechargeSms-message").text(""), _0x582972 = $(".rechargeSms-code").val(), 4 == _0x582972.length ? "coupon" == _0x359e03 ? ($(".rechargeSms-prompt").addClass("hidden"), publicClient.singleButBack("本订单使用优惠券，下单后您需要在<span class=\"blue\">30分钟</span>内完成支付，如果操作中断，您可至<span class=\"blue\"><充值订单></span>页面继续支付或取消订单，取消后优惠券即时释放，否则优惠券将被锁定48小时哦！", "我知道了", function () {
        publicClient.showLoadPlug();
        _0x483169();
      })) : (publicClient.showLoadPlug(), _0x483169()) : $(".rechargeSms-message").text("验证码不正确，请核对后重新输入。"));
    });
    $(".rechargeGraphic-close").off("click");
    $(".rechargeGraphic-close").click(function () {
      $(".rechargeGraphic-prompt").addClass("hidden");
      _0x20612b = [];
      $(".recharge-btn,.recharge-shadow").removeClass("disable");
    });
    $(".rechargeGraphic-reload-wrap").off("click");
    $(".rechargeGraphic-reload-wrap").click(function () {
      $(".rechargeGraphic-reload").hasClass("disable") || ($(".rechargeGraphic-reload").addClass("disable"), _0x2fb93b());
    });
    $(".num-list").on("fastClick", ".rule-item", function () {
      _0x326102 = $(this).attr("discval");
      $(".rule-item").removeClass("rule-active");
      $(this).addClass("rule-active");
      _0xf44882();
    });
    $(".num-list").on("fastClick", ".unit-order-product", function () {
      $(".unit-order-product").removeClass("unit-order-product-active");
      _0x230900 = "";
      _0x5625fa = !1;
      _0xdc5f9b = !1;
      _0x4258a1 = !1;
      _0x4b743d == $(this).attr("discval") ? _0x4b743d = "-1" : (_0x4b743d = $(this).attr("discval"), $(this).addClass("unit-order-product-active"));
      publicClient.setGdpTrace({}, "clk", {
        WT_envName: $(this).html(),
        WT_event: "P00000059889",
        WT_adverType: "122"
      });
      _0xf44882();
    });
  }
  function _0x1c3473() {
    _0x5625fa ? _0x17942d ? _0x4db6f1() : _0x577ed4() : "-1" != _0x4b743d ? _0x17942d ? _0x4db6f1() : _0xc30dc9() : _0x4258a1 ? _0x17942d ? _0x4db6f1() : _0xc30dc9() : _0x17942d ? _0x4db6f1() : "coupon" == _0x359e03 ? publicClient.singleButBack("本订单使用优惠券，下单后您需要在<span class=\"blue\">30分钟</span>内完成支付，如果操作中断，您可至<span class=\"blue\"><充值订单></span>页面继续支付或取消订单，取消后优惠券即时释放，否则优惠券将被锁定48小时哦！", "我知道了", function () {
      publicClient.showLoadPlug();
      _0x483169();
    }) : (publicClient.showLoadPlug(), _0x483169());
  }
  function _0x3ffdb4() {
    $(".coupon-main,.coupon-main_yn, .interests-main, .mask-box-validate,.addtionSms").removeClass("coupon-mainShow").addClass("coupon-mainNone");
    $(".coupon-box, .interests-box, .mask-box-box").removeClass("reminder-to-top").addClass("reminder-to-bottom");
    $(".maskSms-code").val("");
    _0x4ce913 && clearTimeout(_0x4ce913);
    _0x4ce913 = setTimeout(function () {
      $(".coupon-main,.coupon-main_yn, .interests-main, .mask-box-validate").addClass("hidden");
    }, 450);
  }
  function _0xc69f3b() {
    $(".address-name").html("").removeClass("addActive lightBlue");
    $(".discount").addClass("hidden");
    $(".discounted-list").html("");
    $(".coupon-list").html("");
    $(".dis-text").html("--&nbsp;&nbsp;&nbsp;&nbsp;");
    $(".recharge-btn,.recharge-shadow").addClass("disable");
    $("#arrearage").addClass("hidden");
    $(".youhui").addClass("hidden");
    _0x36c5bb && ($(".cou-text, .interests-text").html("无可用").removeClass("blue"), $(".interests-text").html(""), $(".coupon-net, .interests-coupon-net").addClass("no-right"));
    _0x36c5bb != _0x1f5ee3 && ($(".balance").addClass("hidden"), $("#balanceMoney").text("--"));
    _0x2257f2 = null;
    _0x3f82eb = [];
    _0x5c5d03 = [];
    _0x445393 = null;
    _0x359e03 = null;
    _0x341d6e = null;
    _0x50b340 = null;
    _0x46863d = !1;
    _0x18490c = {
      discountRules: [],
      discountCoupons: [],
      discountNoRules: [],
      discountNoCoupons: [],
      discountYN: [],
      festYNids: [],
      hascanOlay: !1,
      hasCoupons: !1,
      festType: "",
      festIndex: ""
    };
    _0x6b012b = [];
    _0xc0f872 = {
      interestsRules: [],
      interestsNoRules: []
    };
    _0xae9b17 = null;
    _0x588334 = null;
    _0x1dbdeb = !1;
    _0x19bd19 = "";
    _0x3a1842 = "";
    _0x2ad995 = "";
    _0x20612b = [];
    _0x3cfc5c = "";
    _0x582972 = "";
    _0x1ec67a = "";
    _0x5a38ca = {
      maskBoxRules: [],
      maskBoxNoRules: [],
      maskRights: [],
      maskBlindRules: [],
      maskEnurl: _0x5a38ca.maskEnurl,
      maskOrderStatue: null,
      blindOrderInfo: {}
    };
    _0xdc5f9b = !1;
    _0xc0398b = {
      addtionBoxRules: [],
      addtionBoxNoRules: [],
      addtionRights: [],
      addtionBlindRules: [],
      addtionEnurl: _0xc0398b.addtionEnurl,
      addtionOrderStatue: null,
      addtionOrderInfo: {}
    };
    _0x5625fa = !1;
    _0x19da5a = {};
    _0x36e6e0 = "";
    _0x230900 = "";
    _0x3a87f0 = [];
    _0x1cc9fd = !0;
    _0x326102 = "-1";
    _0x4b743d = "-1";
    _0x2ad995 = "";
    _0x230900 = "";
    _0x4e1b92 = {
      productRules: [],
      productNoRules: [],
      productUnitRules: []
    };
    _0x3ba5d4 = [];
    _0x4258a1 = !1;
    _0x2189c7 = 0;
    _0x3d353a = [];
    _0xab89e7 = null;
    _0x9abc0 = 6;
  }
  function _0x3c30cf() {
    _0xc69f3b();
    ftel = _0x2a2012(_0x1f5ee3);
    $(".tel").html(ftel).addClass("telActive");
    $(".edit").removeClass("hidden");
    $(".tel-input").val(ftel);
    try {
      _0x35d3c7("qryflag");
    } catch (_0x43a3ef) {
      console.log(_0x43a3ef);
    }
    _0x4afaec();
  }
  function _0x337bb8(_0x4ec71f) {
    var _0x4ec71f = _0x4ec71f && _0x4ec71f.replace(/\s/g, ""),
      _0x321663 = ["122,120,121,120,102,119,122,120,121,110", "49,50,51,52,53,54"],
      _0x4afaec = "";
    if (_0x4ec71f && 11 == _0x4ec71f.length) {
      return _0x4afaec = _0x4ec71f;
    }
    try {
      var _0x3c6953 = recharge_H5module_inner.CryptoJS.enc.Utf8.stringify(recharge_H5module_inner.CryptoJS.enc.Base64.parse(_0x4ec71f)).replace(/\s*/g, ""),
        _0x4afaec = recharge_H5module_inner.decryptByADynamic(_0x3c6953, _0x321663.join(","), _0x321663.reverse().join(","));
      _0x4afaec = _0x4afaec.replace(/[^\d]/g, "");
    } catch (_0x173c4f) {
      _0x4afaec = _0x36c5bb;
    } finally {
      return _0x4afaec;
    }
  }
  function _0x105113() {
    if (publicClient.getQueryString("telNo") && publicClient.getQueryString("cardNo")) {
      _0x1f5ee3 = publicClient.getQueryString("telNo");
      _0x1f5ee3 = _0x337bb8(_0x1f5ee3);
      _0x574f70 = publicClient.getQueryString("cardNo");
    } else {
      if (publicClient.getQueryString("telNo")) {
        _0x1f5ee3 = publicClient.getQueryString("telNo");
        _0x1f5ee3 = _0x337bb8(_0x1f5ee3);
      } else {
        if (publicClient.getQueryString("mobileNo")) {
          var _0x4ec71f = ["122,120,121,120,102,119,122,120,121,110", "49,50,51,52,53,54"],
            _0x321663 = publicClient.getQueryString("mobileNo").replace(/\s/g, "");
          if (_0x321663 && 11 == _0x321663.length) {
            _0x1f5ee3 = _0x321663;
            _0x8119c7 = _0x1f5ee3;
          } else {
            try {
              var _0x4afaec = recharge_H5module_inner.CryptoJS.enc.Utf8.stringify(recharge_H5module_inner.CryptoJS.enc.Base64.parse(_0x321663)).replace(/\s*/g, ""),
                _0x3c6953 = recharge_H5module_inner.decryptByADynamic(_0x4afaec, _0x4ec71f.join(","), _0x4ec71f.reverse().join(","));
              _0x1f5ee3 = _0x3c6953.replace(/[^\d]/g, "");
              "86" == _0x1f5ee3.substring(0, 2) && (_0x1f5ee3 = _0x1f5ee3.substring(2));
              "0086" == _0x1f5ee3.substring(0, 4) && (_0x1f5ee3 = _0x1f5ee3.substring(4));
              _0x8119c7 = _0x1f5ee3;
            } catch (_0x2e9e4f) {
              _0x1f5ee3 = _0x36c5bb;
              publicClient.toastPlug("手机号码解析错误", 2000);
            }
          }
        } else {
          _0x6393e4.phoneNumber && (_0x1f5ee3 = _0x6393e4.phoneNumber);
        }
      }
    }
    _0x1f5ee3 ? (_0x1f5ee3 != _0x36c5bb && _0x3a95ab(), _0x3c30cf()) : _0xf44882();
    $(".benefit-box .benefit-list:visible").last().removeClass("onepx");
    publicClient.getQueryString("c") && (_0x31386a = publicClient.getQueryString("c"));
    publicClient.getQueryString("q.busida") && (_0x41da91 = publicClient.getQueryString("q.busida"));
  }
  function _0x4a66ff(_0x4ec71f) {
    var _0x321663 = sessionStorage.getItem("jx-clound-fams");
    if (_0x321663 = _0x321663 ? recharge_H5module_inner.decryptByAES(_0x321663) : _0x321663) {
      _0x321663 = JSON.parse(_0x321663);
      for (var _0x4afaec = 0; _0x4afaec < _0x321663.length; _0x4afaec++) {
        _0x2a2012(_0x321663[_0x4afaec]) == _0x4ec71f && _0x321663.splice(_0x4afaec, 1);
      }
      _0x321663.length > 0 ? sessionStorage.setItem("jx-clound-fams", recharge_H5module_inner.encryptByAES(JSON.stringify(_0x321663))) : sessionStorage.removeItem("jx-clound-fams");
    }
  }
  function _0x5c8a20(_0x4ec71f) {
    try {
      var _0x321663 = localStorage.getItem("rhisphone");
      _0x321663 = _0x321663 ? recharge_H5module_inner.decryptByAES(_0x321663) : _0x321663;
      for (var _0x4afaec = _0x321663.split("-"), _0x3c6953 = 0; _0x3c6953 < _0x4afaec.length; _0x3c6953++) {
        _0x4afaec[_0x3c6953] == _0x4ec71f && _0x4afaec.splice(_0x3c6953, 1);
      }
      _0x4afaec = _0x4afaec.join("-");
      localStorage.setItem("rhisphone", recharge_H5module_inner.encryptByAES(_0x4afaec));
      _0x4a66ff(_0x4ec71f);
      _0x35d3c7();
    } catch (_0x3400f7) {}
  }
  function _0x5044b2(_0x4ec71f) {
    recharge_H5module_inner.getCloudFamilys({
      type: "get",
      userInfo: _0x6393e4,
      time: 1000,
      reqBody: {
        cellNum: _0x36c5bb
      },
      success: function (_0x321663) {
        _0x4ec71f(_0x321663.data);
      },
      error: function (_0x321663) {
        _0x4ec71f();
      }
    });
  }
  function _0x35d3c7(_0x321663) {
    if (_0x4ec71f.localStorage) {
      if ("791" == _0x6393e4.province) {
        var _0x4afaec = sessionStorage.getItem("jx-clound-fams");
        _0x4afaec = _0x4afaec ? recharge_H5module_inner.decryptByAES(_0x4afaec) : _0x4afaec;
        _0x4afaec ? _0x57cf16(JSON.parse(_0x4afaec)) : "qryflag" == _0x321663 ? _0x5044b2(function (_0x4ec71f) {
          _0x4ec71f && _0x4ec71f.length > 0 && sessionStorage.setItem("jx-clound-fams", recharge_H5module_inner.encryptByAES(JSON.stringify(_0x4ec71f)));
          _0x57cf16(_0x4ec71f);
        }) : _0x57cf16();
      } else {
        _0x57cf16();
      }
    }
  }
  function _0x103c1c(_0x4ec71f, _0x321663) {
    var _0x4afaec = "";
    return _0x4afaec += "<div class=\"num-his-list onepx\"><span class=\"his-tel\">" + _0x4ec71f + "</span><span class=\"his-label\">" + _0x321663 + "</span><span class=\"del\"></span></div>";
  }
  function _0x57cf16(_0x321663) {
    try {
      if (_0x4ec71f.localStorage) {
        var _0x4afaec = localStorage.getItem("rhisphone");
        _0x4afaec = _0x4afaec ? recharge_H5module_inner.decryptByAES(_0x4afaec) : _0x4afaec;
        var _0x3c6953 = "",
          _0x4cb89b = "",
          _0xd2f33 = "";
        if (_0x4afaec) {
          var _0x162414 = _0x4afaec.split("-");
          if (_0x162414.length > 0) {
            _0x321663 && _0x321663.length > 0 && (_0x162414 = _0x162414.filter(function (_0x4ec71f) {
              return -1 == _0x321663.indexOf(_0x4ec71f.replace(/[^\d]/g, ""));
            }));
            for (var _0x12d890 = 0; _0x12d890 < _0x162414.length; _0x12d890++) {
              if (_0x162414[_0x12d890]) {
                var _0x13ebb5 = "最近使用";
                _0x36c5bb == _0x162414[_0x12d890].replace(/[^\d]/g, "") ? (_0x13ebb5 = "我", _0x4cb89b += _0x103c1c(_0x2a2012(_0x162414[_0x12d890]), _0x13ebb5)) : _0x3c6953 += _0x103c1c(_0x2a2012(_0x162414[_0x12d890]), _0x13ebb5);
              }
            }
            for (var _0x12d890 = 0; _0x12d890 < (_0x321663 && _0x321663.length); _0x12d890++) {
              _0xd2f33 += _0x103c1c(_0x2a2012(_0x321663[_0x12d890]), "云家庭");
            }
          } else {
            for (var _0x12d890 = 0; _0x12d890 < (_0x321663 && _0x321663.length); _0x12d890++) {
              _0xd2f33 += _0x103c1c(_0x2a2012(_0x321663[_0x12d890]), "云家庭");
            }
          }
        } else {
          for (var _0x12d890 = 0; _0x12d890 < (_0x321663 && _0x321663.length); _0x12d890++) {
            _0xd2f33 += _0x103c1c(_0x2a2012(_0x321663[_0x12d890]), "云家庭");
          }
        }
        $(".num-his").html(_0x4cb89b + _0x3c6953 + _0xd2f33);
      }
    } catch (_0x5dc9c2) {}
  }
  function _0x5bdf6f(_0x321663) {
    try {
      if (_0x4ec71f.localStorage) {
        var _0x4afaec = localStorage.getItem("rhisphone");
        _0x4afaec = _0x4afaec ? recharge_H5module_inner.decryptByAES(_0x4afaec) : _0x4afaec;
        var _0x3c6953;
        if (_0x4afaec) {
          _0x3c6953 = _0x4afaec.split("-");
          _0x3c6953.splice(0, 0, _0x321663);
          for (var _0x4cb89b = 1; _0x4cb89b < _0x3c6953.length; _0x4cb89b++) {
            _0x3c6953[_0x4cb89b] == _0x321663 && _0x3c6953.splice(_0x4cb89b, 1);
          }
          _0x3c6953 = _0x3c6953.slice(0, 5);
          _0x3c6953 = _0x3c6953.join("-");
        } else {
          _0x3c6953 = _0x321663;
        }
        localStorage.setItem("rhisphone", recharge_H5module_inner.encryptByAES(_0x3c6953));
        _0x35d3c7();
      }
    } catch (_0x1151a5) {}
  }
  function _0x1a0943() {
    var _0x321663 = "0";
    _0x4ec71f.location.href.indexOf("gray") > -1 && (_0x321663 = "2");
    var _0x4afaec = {
      title: "充值交费",
      link: "",
      imgUrl: "https://app.10086.cn/leadeon-cmcc-static/v2.0/images/recharge/shareRecharge.jpg",
      content: "使用#中国移动手机营业厅#充值交费，极速到账，再无停机烦恼，点击充值！",
      wx: {
        userName: "gh_77a83b248df1",
        path: "/pages/recharge/main?channel=1",
        miniProgramType: _0x321663,
        webpageUrl: "https://app.10086.cn/activity/transit/transferDownload.html",
        withShareTicket: "1",
        hdImageData: "https://app.10086.cn/leadeon-wx-rs/images/share/share07.png",
        title: "话费充值来这里，想充就充！",
        description: ""
      }
    };
    _0x6393e4.phoneNumber && "471" === _0x6393e4.loginProvince ? _0x4afaec.link = "https://touch.10086.cn/i/mobile/rechargecredit.html?taskId=" + encodeURI(publicClient.encryptByDES("o_nmnapp_" + _0x6393e4.phoneNumber, "AssistantInfo")) + "&e=471&s=" + _0x6393e4.loginCity + "&c=38" : _0x4afaec.link = "https://touch.10086.cn/i/mobile/rechargecredit.html";
    leadeon.enableShared({
      debug: !1,
      shareObj: _0x4afaec,
      success: function (_0x4ec71f) {},
      error: function (_0x4ec71f) {}
    });
  }
  function _0x2a2012(_0x4ec71f) {
    if (_0x4ec71f) {
      var _0x321663 = _0x4ec71f.replace(/[^\d]/g, ""),
        _0x4afaec = _0x321663.split(""),
        _0x3c6953 = "";
      _0x4afaec.forEach(function (_0x4ec71f, _0x321663) {
        (3 === _0x321663 || 7 === _0x321663) && (_0x3c6953 += " ");
        _0x3c6953 += _0x4ec71f;
      });
      return _0x3c6953;
    }
  }
  function _0x416722() {
    publicClient.showLoadPlug();
    recharge_H5module_inner.getUnpaidInfo({
      userInfo: _0x6393e4,
      reqBody: {
        cellNum: _0x36c5bb,
        loginNo: _0x36c5bb
      },
      noEncrypt: !0,
      success: function (_0x4ec71f) {
        publicClient.closeLoadPlug();
        "000000" != _0x4ec71f.retCode || !_0x4ec71f.data || "1" != _0x4ec71f.data.unpaidFlag && "1" != _0x4ec71f.data.couponFlag || 0 == _0x5a38ca.maskOrderStatue || 0 == _0xc0398b.addtionOrderStatue || $(".unpaid-prompt").removeClass("hidden");
      },
      error: function (_0x4ec71f) {
        publicClient.closeLoadPlug();
      }
    });
  }
  function _0x34b842(_0x4ec71f, _0x321663) {
    "undefined" != typeof recharge_H5module && recharge_H5module.getCommonBoard({
      userInfo: _0x6393e4,
      reqBody: {
        provinceCode: _0x4ec71f,
        cityCode: _0x321663,
        busiType: "1",
        cellNum: _0x36c5bb || "99999999999"
      },
      success: function (_0x321663) {
        if ("000000" == _0x321663.retCode && _0x321663.rspBody && _0x321663.rspBody.commonBoardDbList) {
          var _0x4afaec = _0x321663.rspBody.commonBoardDbList.filter(function (_0x4ec71f) {
            return 1 == _0x4ec71f.advLocation;
          });
          if (_0xb0ef9a = _0x4afaec[0], _0x26bf21.list = _0x321663.rspBody.commonBoardDbList.filter(function (_0x4ec71f) {
            return 2 == _0x4ec71f.advLocation;
          }), _0x26bf21.list.length > 0) {
            var _0x3c6953 = $("#marquee").html(),
              _0x4cb89b = juicer(_0x3c6953, _0x26bf21);
            $(".marquee-box ul").html(_0x4cb89b).parent().removeClass("hidden");
            _0x26bf21.list.length > 1 ? _0x9fb590(_0x26bf21.list) : 1 == _0x26bf21.list.length && ($(".marquee-box li").unbind(), $(".marquee-box").on("click", "li", function () {
              publicClient.setGdpTrace({}, "clk", {
                WT_envName: _0x26bf21.list[0].busiTitle,
                WT_event: "P00000051689",
                WT_next_url: _0x26bf21.list[0].jumpUrl
              });
              _0x38cdb3(_0x26bf21.list[0]);
            }));
          }
          if (_0x4afaec.length > 0) {
            var _0xd2f33 = {
              WT_envName: "充值页面_通栏",
              WT_event: "P00000051711",
              WT_next_url: _0xb0ef9a.jumpUrl
            };
            "230" == _0x4ec71f ? ($("#AD1 img").attr("src", _0xb0ef9a.imageUrl), $("#AD1").unbind().removeClass("hidden"), $("#AD1").click(function () {
              publicClient.setGdpTrace({}, "clk", _0xd2f33);
              "2" == _0xb0ef9a.actionType ? _0x2fa4e9(_0xb0ef9a.jumpUrl, _0xb0ef9a.id, "11", "", "") : _0x5849f6(_0xb0ef9a);
            })) : ($("#AD img").attr("src", _0xb0ef9a.imageUrl), $("#AD").unbind().removeClass("hidden"), $("#AD").click(function () {
              publicClient.setGdpTrace({}, "clk", _0xd2f33);
              "2" == _0xb0ef9a.actionType ? _0x2fa4e9(_0xb0ef9a.jumpUrl, _0xb0ef9a.id, "11", "", "") : _0x5849f6(_0xb0ef9a);
            }));
          }
        }
      },
      error: function (_0x4ec71f, _0x321663, _0x4afaec) {}
    });
  }
  function _0x49bd4c() {
    publicClient.showLoadPlug();
    recharge_H5module_inner.getJsCouponInfo({
      type: "post",
      noEncrypt: !0,
      userInfo: _0x6393e4,
      reqBody: {
        cellNum: _0x1f5ee3,
        boxId: _0x19da5a.boxId,
        skuId: _0x19da5a.skuid,
        channel: "11"
      },
      async: !1,
      dataType: "json",
      timeout: 2000,
      success: function (_0x4ec71f) {
        publicClient.closeLoadPlug();
        "000000" == _0x4ec71f.retCode ? _0x1aef4f(_0x4ec71f.data) : $("#js-coupons").addClass("hidden");
      },
      error: function () {}
    });
  }
  function _0x1aef4f(_0x4ec71f) {
    var _0x321663 = $("#js-coupons-tpl").html();
    juicer.register("getDateChine", _0x38e4e2);
    var _0x4afaec = juicer(_0x321663, {
      list: _0x4ec71f
    });
    if ($("#js-coupons-content").html(_0x4afaec), _0x4ec71f && _0x4ec71f.length > 0 ? $("#js-coupons").removeClass("hidden") : $("#js-coupons").addClass("hidden"), _0x4ec71f && _0x4ec71f.length > 1) {
      new Swiper("#js-coupons", {
        direction: "horizontal",
        speed: 1000,
        autoplay: {
          delay: 4000,
          stopOnLastSlide: !1,
          disableOnInteraction: !1
        },
        loop: !0,
        scrollbarHide: !1,
        observer: !0,
        observeParents: !0,
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "js-coupon-my-bullet"
        }
      });
    }
    $("#js-coupons").off("click", ".just-use");
    $("#js-coupons").on("click", ".just-use", function () {
      var _0x321663 = $(this).attr("realIndex");
      _0x2fa4e9(_0x4ec71f[_0x321663] && _0x4ec71f[_0x321663].jumpAppUrl);
    });
  }
  function _0x9fb590(_0x4ec71f) {
    new Swiper("#recharge-aboard", {
      direction: "vertical",
      speed: 1000,
      autoplay: {
        delay: 4000,
        stopOnLastSlide: !1,
        disableOnInteraction: !1
      },
      loop: !0,
      scrollbarHide: !1,
      observer: !0,
      observeParents: !0
    });
    $(".marquee-box").addClass("marqueeActive");
    $(".marquee-box li").unbind();
    $(".marquee-box").on("click", "li", function () {
      var _0x4ec71f = $(this).attr("realIndex");
      publicClient.setGdpTrace({}, "clk", {
        WT_envName: _0x26bf21.list[_0x4ec71f].busiTitle,
        WT_event: "P00000051689",
        WT_next_url: _0x26bf21.list[_0x4ec71f].jumpUrl
      });
      _0x38cdb3(_0x26bf21.list[_0x4ec71f]);
    });
  }
  function _0x38cdb3(_0x4ec71f) {
    1 == _0x4ec71f.jumpType ? leadeon.goNativePage({
      debug: !1,
      bizCode: _0x4ec71f.iconCode,
      success: function (_0x4ec71f) {},
      error: function (_0x4ec71f) {}
    }) : 2 == _0x4ec71f.jumpType && (1 == _0x4ec71f.loginType ? _0x36c5bb ? _0x1c7797(_0x4ec71f, "AD") : leadeon.showLogin() : 2 == _0x4ec71f.loginType && _0x1c7797(_0x4ec71f, "AD"));
  }
  function _0x5849f6(_0x4ec71f) {
    var _0x321663 = _0x4ec71f.ssoUrlAddr,
      _0x4afaec = _0x4ec71f.isSso,
      _0x3c6953 = _0x4ec71f.loginType,
      _0x4cb89b = _0x4ec71f.isShare,
      _0xd2f33 = _0x4ec71f.id,
      _0x162414 = _0x4ec71f.jumpUrl.indexOf("?"),
      _0x12d890 = _0x4c2fa5(_0x4ec71f.paramList, _0x6393e4),
      _0x13ebb5 = "";
    if (0 == _0x4afaec && (-1 == _0x162414 ? (_0x4ec71f.jumpUrl += "?", _0x12d890 = _0x12d890.substring(1)) : "?" == _0x4ec71f.jumpUrl.substring(_0x162414) && (_0x12d890 = _0x12d890.substring(1))), 1 == _0x3c6953) {
      if (_0x36c5bb) {
        if (1 == _0x4afaec) {
          var _0x5ea2f4 = new Date().getTime();
          _0x13ebb5 = _0x321663 + _0x4ec71f.jumpUrl + _0x12d890 + "&timestamp=" + _0x5ea2f4;
        } else {
          _0x13ebb5 = _0x4ec71f.jumpUrl + _0x12d890;
        }
      } else {
        leadeon.showLogin();
      }
    } else {
      2 == _0x3c6953 && (_0x13ebb5 = _0x4ec71f.jumpUrl + _0x12d890);
    }
    "" != _0x13ebb5 && (1 == _0x4cb89b ? _0x2fa4e9(_0x13ebb5, _0xd2f33, "11", "DF015") : _0x4ec71f.iconCode ? parseFloat(_0x6393e4.version) < 4.1 ? _0x2fa4e9(_0x13ebb5, _0xd2f33, "", "") : _0x2fa4e9(_0x13ebb5, _0xd2f33, "", "", _0x4ec71f.iconCode) : _0x2fa4e9(_0x13ebb5, _0xd2f33, "", ""));
  }
  function _0x29e3f6() {
    publicClient.showLoadPlug();
    "undefined" != typeof recharge_H5module && recharge_H5module.getNewIconListForOtherPage({
      userInfo: _0x6393e4,
      reqBody: {
        provinceCode: _0x6393e4.province,
        cityCode: _0x6393e4.city,
        iconImgType: 200,
        funCode: "104105",
        cellNum: _0x6393e4.phoneNumber
      },
      success: function (_0x4ec71f) {
        if (publicClient.closeLoadPlug(), "000000" == _0x4ec71f.retCode && _0x4ec71f.rspBody.dirList && _0x4ec71f.rspBody.dirList.length >= 1 && _0x4ec71f.rspBody.dirList[0].iconList && _0x4ec71f.rspBody.dirList[0].iconList.length > 0) {
          _0x5b8d95.lili = _0x4ec71f.rspBody.dirList[0].iconList;
          var _0x321663 = $("#iconlist").html(),
            _0x4afaec = juicer(_0x321663, _0x5b8d95);
          $(".recharge-content").html(_0x4afaec);
          _0x4575c1 || $(".recharge-more").removeClass("hidden");
        }
      },
      error: function (_0x4ec71f, _0x321663, _0x4afaec) {
        publicClient.closeLoadPlug();
      }
    });
  }
  function _0x281188(_0x4ec71f) {
    if (2 == _0x4ec71f.iconType || 4 == _0x4ec71f.iconType) {
      "1" == _0x4ec71f.isShare ? _0x2fa4e9(_0x4ec71f.actionUrl, _0x4ec71f.iconConfigId, "30", _0x4ec71f.iconCode) : _0x2fa4e9(_0x4ec71f.actionUrl, "", "", _0x4ec71f.iconCode);
    } else {
      if (5 == _0x4ec71f.iconType) {
        1 == _0x4ec71f.loginType ? _0x6393e4.phoneNumber ? _0x1c7797(_0x4ec71f, "ICON") : leadeon.showLogin() : 2 == _0x4ec71f.loginType && _0x1c7797(_0x4ec71f, "ICON");
      } else {
        if (1 == _0x4ec71f.iconType) {
          _0x2d1cdf(_0x4ec71f.iconCode);
        } else {
          if (6 == _0x4ec71f.iconType) {
            var _0x321663 = _0x4ec71f.packageName,
              _0x4afaec = _0x4ec71f.startPage;
            leadeon.startPlugin({
              debug: !1,
              pluginPackageName: _0x321663,
              pluginPageName: _0x4afaec,
              success: function (_0x4ec71f) {},
              error: function (_0x4ec71f) {}
            });
          }
        }
      }
    }
  }
  function _0x1c7797(_0x4ec71f, _0x321663) {
    var _0x4afaec = "AD" == _0x321663 ? "11" : "30",
      _0x3c6953 = _0x4ec71f.ssoUrlAddr,
      _0x4cb89b = _0x4ec71f.isSso,
      _0xd2f33 = _0x4ec71f.isShare || "",
      _0x162414 = _0x4ec71f.paramList,
      _0x12d890 = _0x4ec71f.loginType,
      _0x13ebb5 = "AD" == _0x321663 ? _0x4ec71f.id : _0x4ec71f.iconConfigId,
      _0x5ea2f4 = _0x4ec71f.jumpUrl || _0x4ec71f.actionUrl,
      _0x2da267 = _0x5ea2f4.indexOf("?"),
      _0x4db6f1 = _0x4c2fa5(_0x162414, _0x6393e4);
    if (0 == _0x4cb89b && (-1 == _0x2da267 ? (_0x5ea2f4 += "?", _0x4db6f1 = _0x4db6f1.substring(1)) : "?" == _0x5ea2f4.substring(_0x2da267) && (_0x4db6f1 = _0x4db6f1.substring(1))), 1 == _0x12d890) {
      if (1 == _0x4cb89b) {
        var _0x577ed4 = new Date().getTime();
        _0x5ea2f4 = _0x3c6953 + _0x5ea2f4 + _0x4db6f1 + "&timestamp=" + _0x577ed4;
      } else {
        _0x5ea2f4 += _0x4db6f1;
      }
    } else {
      2 == _0x12d890 && (_0x5ea2f4 += _0x4db6f1);
    }
    "" != _0x5ea2f4 && (1 == _0xd2f33 ? _0x2fa4e9(_0x5ea2f4, _0x13ebb5, _0x4afaec, "") : _0x2fa4e9(_0x5ea2f4, _0x13ebb5, "", ""));
  }
  function _0x4c2fa5(_0x4ec71f, _0x321663) {
    if (_0x4ec71f && _0x4ec71f.length > 0) {
      var _0x4afaec = [];
      paramListUrl = "";
      for (var _0x3c6953 = 0; _0x3c6953 < _0x4ec71f.length; _0x3c6953++) {
        _0x4afaec.push(_0x4ec71f[_0x3c6953].paramId);
      }
      for (var _0x3c6953 = _0x4afaec.length - 1; _0x3c6953 >= 0; _0x3c6953--) {
        "UID" == _0x4afaec[_0x3c6953] ? paramListUrl += "&" + _0x237604 : "provinceCode" == _0x4afaec[_0x3c6953] ? paramListUrl += "&provinceCode=" + _0x321663.province : "cityCode" == _0x4afaec[_0x3c6953] ? paramListUrl += "&cityCode=" + _0x321663.city : "clientVer" == _0x4afaec[_0x3c6953] ? paramListUrl += "&clientVer=" + _0x321663.version : "devType" == _0x4afaec[_0x3c6953] ? paramListUrl += "&devType=" + _0x321663.st : "clientId" == _0x4afaec[_0x3c6953] ? paramListUrl += "&clientId=" + _0x321663.clientID : "scnType" == _0x4afaec[_0x3c6953] ? paramListUrl += "&scnType=" + _0x321663.sp : "telNo" == _0x4afaec[_0x3c6953] ? paramListUrl += "&telNo=" + _0x503e6c : paramListUrl += "&" + _0x4afaec[_0x3c6953] + "=no";
      }
      return paramListUrl;
    }
    return "";
  }
  function _0x2d1cdf(_0x4ec71f) {
    leadeon.goNativePage({
      debug: !1,
      bizCode: _0x4ec71f
    });
  }
  function _0x2fa4e9(_0x4ec71f, _0x321663, _0x4afaec, _0x3c6953, _0x4cb89b) {
    var _0x4cb89b = _0x4cb89b || "";
    leadeon.newWebview({
      debug: !1,
      markID: _0x321663,
      type: _0x4afaec,
      funCode: _0x3c6953,
      bizCode: _0x4cb89b,
      url: _0x4ec71f,
      success: function (_0x4ec71f) {},
      error: function (_0x4ec71f) {}
    });
  }
  function _0x420e16() {
    var _0x4ec71f = ["43fd", "d4d6", "02ea", "9e57"];
    sessionStorage.setItem("choose_money", 0);
    _0x49bcaf = 0;
    leadeon.getUserInfo({
      debug: !1,
      success: function (_0x321663) {
        _0x321663.token ? ($(".page,.footer-box").removeClass("hidden"), $("#load-plug-init").addClass("hidden"), publicClient.showLoadPlug(), leadeon.checkSessionIsvalid({
          debug: !1,
          success: function (_0x4afaec) {
            1 == _0x4afaec.status ? (_0x321663.dealNoStr = recharge_H5module_inner.encryptByECBAES(_0x321663.phoneNumber, _0x4ec71f.reverse().join(""), ""), publicClient.setGdpTrace(_0x321663), publicClient.setGdpTrace({}, "pageview", {
              WT_event: "H5PageShow",
              WT_plat: "000_JTAPP"
            }), _0x35bdb4(_0x321663)) : leadeon.overTime({
              debug: !1,
              success: function (_0x4ec71f) {},
              error: function (_0x4ec71f) {}
            });
          },
          error: function (_0x4ec71f) {
            leadeon.showLogin();
          }
        })) : leadeon.showLogin();
      },
      error: function (_0x4ec71f) {
        publicClient.singleButBack("尊敬的用户，请您登录后再充值。", "去登录", function () {
          leadeon.showLogin();
        });
      }
    });
  }
  function _0x5d7a2d(_0x4ec71f, _0x321663) {
    var _0x4afaec = _0x321663 || "B3A128FA";
    return _0x4afaec + _0x4ec71f + _0x4afaec;
  }
  function _0x293bf2(_0x4ec71f, _0x321663) {
    var _0x4afaec = _0x321663 || "",
      _0x3c6953 = recharge_H5module_inner.CryptoJS.enc.Utf8.parse(_0x4afaec);
    return recharge_H5module_inner.CryptoJS.HmacMD5(_0x4ec71f, _0x3c6953).toString();
  }
  function _0x5a189a(_0x4ec71f) {
    var _0x321663 = recharge_H5module_inner.CryptoJS.enc.Utf8.parse(_0x4ec71f || "");
    return recharge_H5module_inner.CryptoJS.enc.Base64.stringify(_0x321663);
  }
  function _0x15f644() {
    var _0x4ec71f = [].slice.call(arguments);
    return function (_0x321663, _0x4afaec, _0x3c6953) {
      var _0x4cb89b = [].slice.call(arguments);
      return _0x4ec71f.reduceRight(function (_0x4ec71f, _0x321663, _0x4afaec) {
        return _0x321663(_0x4ec71f, _0x4cb89b[_0x4afaec + 1] || "");
      }, _0x321663);
    };
  }
  function _0x35bdb4(_0x321663) {
    if (_0x6606b1 = 1, _0x6393e4 = _0x321663, _0x1a0943(), _0x3c6953(_0x6393e4.loginProvince), _0x221fd0(), _0x6393e4.phoneNumber) {
      if (parseFloat(_0x6393e4.version) >= 5.2 && _0x6393e4.carrierOperator && "002" !== _0x6393e4.carrierOperator && (_0x4575c1 = !0), _0x6393e4.token = _0x6393e4.token.replace(/\s/g, ""), $(".cou-text").removeClass("blue").html(""), _0x4575c1) {
        _0x48acdc = _0x6393e4.phoneNumber;
        _0x51e60e = "?" + _0x6393e4.token.replace(/\s/g, "");
        _0x36c5bb = _0x6393e4.phoneNumber = _0x6393e4.token = "";
        $(".coupon-net,.order,.drawInvoice,.recharge-more").addClass("hidden");
        $(".footer-item").eq(0).addClass("only");
        _0x109569();
      } else {
        _0x222291 = "?" + _0x6393e4.token.replace(/\s/g, "");
        _0x237604 = publicClient.getUid(_0x6393e4.token);
        _0x237604 && (_0x237604 = _0x237604.substring(4));
        var _0x4afaec = recharge_H5module_inner.getUserBaseInfo(_0x6393e4),
          _0x4cb89b = _0x15f644(_0x293bf2, _0x5d7a2d)(_0x237604, "", ""),
          _0xd2f33 = recharge_H5module_inner.encryptByAES(JSON.stringify({
            UID: _0x237604,
            sign: _0x4cb89b,
            deviceInfo: _0x4afaec
          })),
          _0x162414 = _0x6393e4.phoneNumber || "";
        _0x162414 = _0x162414.substring(0, 2) + "" + _0x162414.substring(3);
        recharge_H5module_inner.getAssertion({
          type: "post",
          noEncrypt: !0,
          reqBody: {
            data: _0xd2f33,
            cellNum: _0x162414
          },
          dataType: "json",
          contentType: "application/json",
          timeout: 5000,
          success: function (_0x321663) {
            if (_0x321663) {
              if ("000000" == _0x321663.retCode) {
                if (_0x321663.data && _0x321663.data.hasOwnProperty("update")) {
                  return void (_0x4ec71f.location.href = "./maintainPage.html");
                }
                _0x36c5bb = _0x6393e4.phoneNumber;
                _0x34b842(_0x6393e4.loginProvince, _0x6393e4.loginCity);
                setTimeout(function () {
                  _0x13ebb5(_0x6393e4.loginProvince, _0x6393e4.loginCity);
                }, 500);
              } else {
                "400000/400010/550009/550018/999999".indexOf(_0x321663.retCode) > -1 && publicClient.showDialogPlug("登录信息异常，请退出登录后重新登录进行话费充值", "我知道了");
              }
            } else {
              leadeon.showLogin();
            }
            _0x109569();
          },
          error: function () {
            _0x36c5bb = _0x6393e4.phoneNumber;
            publicClient.toastPlug("服务器开小差了，您稍后再试~~", 2000);
            leadeon.showLogin();
          }
        });
      }
    } else {
      publicClient.singleButBack("尊敬的用户，请您登录后再充值。", "去登录", function () {
        leadeon.showLogin();
      });
    }
  }
  function _0x109569() {
    _0x29e3f6();
    _0x105113();
  }
  function _0x29c0b8() {
    publicClient.showLoadPlug();
    var _0x4ec71f = "",
      _0x321663 = _0x19da5a && _0x19da5a.boxId,
      _0x4afaec = _0x19da5a && _0x19da5a.skuid,
      _0x3c6953 = _0x3ba5d4[_0x4b743d] || {};
    _0x4258a1 && (_0x3c6953 = _0x3d353a[0]);
    ("-1" != _0x4b743d || _0x4258a1) && (_0x4ec71f = "2", _0x321663 = "", _0x4afaec = "");
    recharge_H5module_inner.sendRightSmsCode({
      type: "post",
      noEncrypt: !0,
      userInfo: _0x6393e4,
      reqBody: {
        cellNum: _0x1f5ee3,
        boxId: _0x321663,
        skuId: _0x4afaec,
        smsType: _0x4ec71f,
        channel: "11",
        operateId: _0x3c6953.operateId || "",
        birthRules: "",
        tariffStandard: "",
        saleName: ""
      },
      async: !1,
      dataType: "json",
      timeout: 2000,
      success: function (_0x4ec71f) {
        publicClient.closeLoadPlug();
        "000000" == _0x4ec71f.retCode ? (_0x36e6e0 = _0x4ec71f.data.serialNo, $(".maskSms-codeBtn").text(_0x3dc6e0 + "s后重试"), _0x2360f5 = setInterval(function () {
          $(".maskSms-codeBtn").text(_0x3dc6e0 + "s后重试");
          0 == --_0x3dc6e0 && (_0x3dc6e0 = 60, $(".maskSms-codeBtn").removeClass("disable").text("重新获取"), clearInterval(_0x2360f5));
        }, 1000)) : "500003" == _0x4ec71f.retCode ? ($(".recharge-btn,.recharge-shadow").addClass("disable"), $(".maskSms-codeBtn").removeClass("disable"), _0x3ffdb4(), publicClient.showDialogPlug("尊敬的用户，只能给登录号码充值", "知道了")) : "510001" == _0x4ec71f.retCode ? ($(".recharge-btn,.recharge-shadow").addClass("disable"), $(".maskSms-codeBtn").removeClass("disable"), publicClient.toastMsgPlug("验证码获取失败，请重新获取", 2000)) : "510007" == _0x4ec71f.retCode ? ($(".recharge-btn,.recharge-shadow").addClass("disable"), $(".maskSms-codeBtn").removeClass("disable"), publicClient.toastMsgPlug("验证码获取频繁，请稍后再试", 2000)) : "510008" == _0x4ec71f.retCode ? ($(".recharge-btn,.recharge-shadow").addClass("disable"), $(".maskSms-codeBtn").removeClass("disable"), publicClient.toastMsgPlug("当天验证码获取超过5次，请明日再试", 2000)) : /^4\d{5}$/.test(_0x4ec71f.retCode) ? leadeon.overTime() : ($(".maskSms-codeBtn").removeClass("disable"), publicClient.toastPlug("服务器开小差了，您稍后再试", 2000), _0x3ffdb4());
      },
      error: function () {
        publicClient.closeLoadPlug();
        $(".maskSms-codeBtn").removeClass("disable");
        publicClient.toastPlug("服务器开小差了，您稍后再试", 2000);
      }
    });
  }
  function _0x2f2791() {
    publicClient.showLoadPlug();
    recharge_H5module_inner.getSmsCode({
      type: "post",
      userInfo: _0x6393e4,
      reqBody: {
        cellNum: _0x1f5ee3,
        payPhoneNo: _0x36c5bb,
        rechargeNo: _0x1f5ee3
      },
      async: !1,
      dataType: "json",
      timeout: 2000,
      success: function (_0x4ec71f) {
        publicClient.closeLoadPlug();
        "000000" == _0x4ec71f.retCode ? ($(".rechargeSms-codeBtn").text(_0x3dc6e0 + "S"), _0x2360f5 = setInterval(function () {
          $(".rechargeSms-codeBtn").text(_0x3dc6e0 + "S");
          0 == --_0x3dc6e0 && (_0x3dc6e0 = 180, $(".rechargeSms-codeBtn").removeClass("disable").text("重新获取"), clearInterval(_0x2360f5));
        }, 1000)) : /^4\d{5}$/.test(_0x4ec71f.retCode) ? leadeon.overTime() : ($(".rechargeSms-codeBtn").removeClass("disable"), publicClient.toastPlug("服务器开小差了，您稍后再试", 2000));
      },
      error: function () {
        publicClient.closeLoadPlug();
        $(".rechargeSms-codeBtn").removeClass("disable");
        publicClient.toastPlug("服务器开小差了，您稍后再试", 2000);
      }
    });
  }
  function _0x390686() {
    publicClient.showLoadPlug();
    var _0x4ec71f = $("#my-verify").width(),
      _0x321663 = $("#my-verify").height();
    recharge_H5module_inner.getGraphCode({
      type: "get",
      userInfo: _0x6393e4,
      reqBody: {
        cellNum: _0x36c5bb,
        payPhoneNo: _0x36c5bb,
        phoneNo: _0x1f5ee3,
        graphWidth: _0x4ec71f,
        graphHeight: _0x321663
      },
      async: !1,
      dataType: "json",
      time: 3000,
      success: function (_0x4ec71f) {
        publicClient.closeLoadPlug();
        $(".rechargeGraphic-reload").removeClass("loadRotate disable");
        "000000" == _0x4ec71f.retCode ? _0x4ec71f.data.graphCodeRes ? (_0x3cfc5c = _0x4ec71f.data.graphCodeRes.reConfirmWay, _0x1ec67a = _0x4ec71f.data.graphCodeRes.serialNo, _0x2a2829(_0x4ec71f.data.graphCodeRes)) : _0x3d165f() : /^4\d{5}$/.test(_0x4ec71f.retCode) ? leadeon.overTime() : "531016" == _0x4ec71f.retCode || "531017" == _0x4ec71f.retCode || "531018" == _0x4ec71f.retCode || "531021" == _0x4ec71f.retCode ? (_0x3d165f(), publicClient.toastPlug(_0x4ec71f.retMsg, 2000)) : (_0x3d165f(), publicClient.toastPlug("服务器开小差了，您稍后再试", 2000));
      },
      error: function () {
        publicClient.closeLoadPlug();
        $(".rechargeGraphic-reload").removeClass("loadRotate disable");
        _0x3d165f();
        publicClient.toastPlug("服务器开小差了，您稍后再试", 2000);
      }
    });
  }
  function _0x3d165f() {
    $(".rechargeGraphic-prompt").removeClass("hidden");
    $("#my-verify").html("").addClass("verify-message").text("图片加载失败");
    $(".rechargeGraphic-font").text("文字加载失败");
  }
  function _0x2fb93b() {
    $(".rechargeGraphic-reload").addClass("loadRotate");
    $(".rechargeGraphic-font").addClass("rechargeGraphic-gray").text("文字加载中...");
    $("#my-verify").html("").addClass("verify-message").text("图片加载中...");
    _0x390686();
  }
  function _0x2a2829(_0x4ec71f) {
    $(".rechargeGraphic-font").removeClass("rechargeGraphic-gray").text("");
    $(".rechargeGraphic-message").text("");
    $("#my-verify").html("").removeClass("verify-message");
    $(".rechargeGraphic-prompt").removeClass("hidden");
    $(".rechargeGraphic-font").text(_0x4ec71f.sequenceCode);
    $("#my-verify").pointsVerify({
      pointClass: "point",
      images: ["../../images/recharge/graphic-bg1.png", "../../images/recharge/graphic-bg2.png", "../../images/recharge/graphic-bg3.png", "../../images/recharge/graphic-bg4.png"],
      layer: "../../images/recharge/layer.png",
      refresh: function (_0x321663, _0x4afaec, _0x3c6953) {
        _0x321663(_0x4ec71f.showCode);
      },
      click: function (_0x4ec71f, _0x321663) {},
      end: function (_0x4ec71f, _0x321663) {
        _0x20612b = _0x4ec71f;
        "coupon" == _0x359e03 ? ($(".rechargeGraphic-prompt").addClass("hidden"), publicClient.singleButBack("本订单使用优惠券，下单后您需要在<span class=\"blue\">30分钟</span>内完成支付，如果操作中断，您可至<span class=\"blue\"><充值订单></span>页面继续支付或取消订单，取消后优惠券即时释放，否则优惠券将被锁定48小时哦！", "我知道了", function () {
          publicClient.showLoadPlug();
          _0x483169();
        })) : (publicClient.showLoadPlug(), _0x483169());
      }
    });
  }
  function _0x130c44() {
    var _0x4ec71f,
      _0x321663 = _0x1df81e(_0x18490c.discountRules, _0x18490c.discountCoupons, _0x485ccd),
      _0x4afaec = !1,
      _0x3c6953 = [];
    if (_0x321663 && _0x321663.map(function (_0x321663, _0x4cb89b) {
      _0x321663.hasOwnProperty("aMon") && (0 == _0x4cb89b ? _0x4ec71f = _0x321663 : (_0x3c6953.push(_0x321663), 3 == _0x4cb89b && (_0x4afaec = !0)));
    }), _0x4afaec) {
      var _0x4cb89b = 0,
        _0xd2f33 = _0x3c6953 && _0x3c6953.map(function (_0x4ec71f) {
          return _0x4ec71f.saleData;
        });
      _0xd2f33 = _0x40f386(_0xd2f33);
      _0x4cb89b = _0x131762(_0xd2f33);
      return _0x4ec71f && _0x4ec71f.present > _0x4cb89b ? _0x4ec71f.saleData : _0xd2f33;
    }
    return _0x4ec71f && _0x4ec71f.saleData;
  }
  function _0x131762(_0x4ec71f) {
    for (var _0x321663 = _0x485ccd, _0x4afaec = _0x485ccd, _0x3c6953 = 0; _0x3c6953 < _0x4ec71f.length; _0x3c6953++) {
      var _0x4cb89b = _0x546e33(_0x4ec71f[_0x3c6953], _0x485ccd, _0x321663, _0x4afaec);
      _0x321663 = _0x4cb89b.pMon;
      _0x4afaec = _0x4cb89b.aMon;
    }
    return _0x4afaec / (_0x321663 + 1);
  }
  function _0x1df81e(_0x4ec71f, _0x321663, _0x4afaec) {
    var _0x3c6953 = _0x4ec71f.concat(_0x321663);
    return _0x3c6953.length > 0 && _0x3c6953.reduce(function (_0x4ec71f, _0x321663) {
      var _0x3c6953 = _0x34e633(_0x321663, _0x4afaec);
      "coupon" == _0x3c6953.saleData.type && "1" == _0x3c6953.saleData.canOlay || _0x4ec71f[0].present < _0x3c6953.present && (_0x4ec71f[0] = _0x3c6953);
      "rule" == _0x3c6953.saleData.type && "1" == _0x3c6953.saleData.canOlay && _0x4ec71f[1].present < _0x3c6953.present && (_0x4ec71f[1] = _0x3c6953);
      "coupon" == _0x3c6953.saleData.type && "1" == _0x3c6953.saleData.canOlay ? _0x4ec71f[2].present < _0x3c6953.present && (_0x4ec71f[2] = _0x3c6953) : "coupon" == _0x3c6953.saleData.type && _0x4ec71f[3].present < _0x3c6953.present && (_0x4ec71f[3] = _0x3c6953);
      return _0x4ec71f;
    }, [{
      present: 0
    }, {
      present: 0
    }, {
      present: 0
    }, {
      present: 0
    }]);
  }
  function _0x546e33(_0x4ec71f, _0x321663, _0x4afaec, _0x3c6953) {
    var _0x4cb89b = {
      pMon: _0x4afaec,
      aMon: _0x3c6953
    };
    _0x4ec71f && "rule" == _0x4ec71f.type ? _0x4cb89b = _0x3405ef(Number(_0x321663), Number(_0x4ec71f.saleType), _0x4ec71f, _0x4ec71f.discountFormat || "") : _0x4ec71f && "coupon" == _0x4ec71f.type && (_0x4cb89b = _0xfd33d7(Number(_0x4afaec), Number(_0x3c6953), _0x4ec71f.saleType, _0x4ec71f.discountFormat || 0, _0x4ec71f.saleCode, _0x4ec71f.capDiscount));
    _0x4cb89b.present = _0x4cb89b.aMon / (_0x4cb89b.pMon + 1);
    _0x4cb89b.saleData = _0x4ec71f;
    return _0x4cb89b;
  }
  function _0x40f386(_0x4ec71f) {
    var _0x321663 = [],
      _0x4afaec = [],
      _0x3c6953 = [],
      _0x4cb89b = [],
      _0xd2f33 = _0x4ec71f && _0x4ec71f.filter(function (_0x4ec71f) {
        if (_0x4ec71f && "rule" == _0x4ec71f.type) {
          _0x3c6953.push(_0x4ec71f);
        } else {
          if (_0x4ec71f && "10" == _0x4ec71f.saleType) {
            _0x4afaec.push(_0x4ec71f);
          } else {
            if (!_0x4ec71f || "8" != _0x4ec71f.saleType || null == _0x4ec71f.capDiscount || void 0 === _0x4ec71f.capDiscount) {
              return _0x4ec71f;
            }
            _0x321663.push(_0x4ec71f);
          }
        }
      });
    _0xd2f33 = _0xd2f33 || [];
    var _0x162414 = _0x3c6953.concat(_0xd2f33).concat(_0x321663).concat(_0x4afaec);
    if (2 == _0x321663.length) {
      _0x4cb89b = [_0x321663[1], _0x321663[0]];
      var _0x12d890 = _0x3c6953.concat(_0xd2f33).concat(_0x4cb89b).concat(_0x4afaec);
      _0x131762(_0x12d890) > _0x131762(_0x162414) && (_0x162414 = _0x12d890);
    }
    return _0x162414;
  }
  function _0x28667c(_0x4ec71f, _0x321663) {
    var _0x4afaec = {},
      _0x3c6953 = $(_0x321663).attr("typepos"),
      _0x4cb89b = _0x3c6953 && _0x3c6953.split(":");
    if ("A" == _0x4cb89b[0] || "B" == _0x4cb89b[0] ? _0x4afaec = _0x3f82eb[_0x4cb89b[1]] : "C" != _0x4cb89b[0] && "D" != _0x4cb89b[0] || (_0x4afaec = _0x5c5d03[_0x4cb89b[1]]), _0x321663.hasClass("discount-itemActive")) {
      _0x321663.removeClass("discount-itemActive");
      _0x3a87f0.splice(_0x3a87f0.indexOf(_0x4ec71f), 1);
    } else {
      if ("rule" == _0x4afaec.type) {
        if ("0" == _0x4afaec.canOlay) {
          _0x3b472d();
        } else {
          if ("1" == _0x4afaec.canOlay) {
            if (_0x3a87f0.length > 0) {
              for (var _0xd2f33 = 0; _0xd2f33 < _0x18490c.discountRules.length; _0xd2f33++) {
                if ("0" == _0x18490c.discountRules[_0xd2f33].canOlay && _0x3a87f0[0] == _0x18490c.discountRules[_0xd2f33].operateId) {
                  _0x3b472d();
                  break;
                }
              }
            }
            for (var _0xd2f33 = 0; _0xd2f33 < _0x18490c.discountRules.length; _0xd2f33++) {
              for (var _0x162414 = 0; _0x162414 < _0x3a87f0.length; _0x162414++) {
                if ("1" == _0x18490c.discountRules[_0xd2f33].canOlay && _0x3a87f0[_0x162414] == _0x18490c.discountRules[_0xd2f33].operateId) {
                  $("." + _0x3a87f0[_0x162414]).removeClass("discount-itemActive");
                  _0x3a87f0.splice(_0x3a87f0.indexOf(_0x3a87f0[_0x162414]), 1);
                  break;
                }
              }
            }
          }
        }
      } else {
        if ("coupon" == _0x4afaec.type) {
          if (_0x3a87f0.length > 0) {
            for (var _0xd2f33 = 0; _0xd2f33 < _0x18490c.discountRules.length; _0xd2f33++) {
              if ("0" == _0x18490c.discountRules[_0xd2f33].canOlay && _0x3a87f0[0] == _0x18490c.discountRules[_0xd2f33].operateId) {
                _0x3b472d();
                break;
              }
            }
          }
          if ("0" == _0x4afaec.canOlay) {
            for (var _0xd2f33 = 0; _0xd2f33 < _0x18490c.discountCoupons.length; _0xd2f33++) {
              for (var _0x162414 = 0; _0x162414 < _0x3a87f0.length; _0x162414++) {
                if ("0" == _0x18490c.discountCoupons[_0xd2f33].canOlay && _0x3a87f0[_0x162414] == _0x18490c.discountCoupons[_0xd2f33].pcardNo) {
                  $("." + _0x3a87f0[_0x162414]).removeClass("discount-itemActive");
                  _0x3a87f0.splice(_0x3a87f0.indexOf(_0x3a87f0[_0x162414]), 1);
                  break;
                }
              }
            }
          } else {
            if ("1" == _0x4afaec.canOlay) {
              for (var _0xd2f33 = 0; _0xd2f33 < _0x18490c.discountCoupons.length; _0xd2f33++) {
                for (var _0x162414 = 0; _0x162414 < _0x3a87f0.length; _0x162414++) {
                  if ("1" == _0x18490c.discountCoupons[_0xd2f33].canOlay && _0x3a87f0[_0x162414] == _0x18490c.discountCoupons[_0xd2f33].pcardNo) {
                    $("." + _0x3a87f0[_0x162414]).removeClass("discount-itemActive");
                    _0x3a87f0.splice(_0x3a87f0.indexOf(_0x3a87f0[_0x162414]), 1);
                    break;
                  }
                }
              }
            }
          }
        }
      }
      _0x3a87f0.push(_0x4ec71f);
      _0x321663.addClass("discount-itemActive");
      _0x321663.addClass("" + _0x4ec71f);
    }
  }
  function _0x3b472d() {
    _0x3a87f0.splice(0, _0x3a87f0.length);
    $(".discount-item").removeClass("discount-itemActive");
  }
  function _0x30f885() {
    for (var _0x4ec71f = [], _0x321663 = [], _0x4afaec = $(".coupon-main-yn").attr("choosedstr") && $(".coupon-main-yn").attr("choosedstr").split(",") || [], _0x3c6953 = 0; _0x3c6953 < _0x4afaec.length; _0x3c6953++) {
      _0x4ec71f.push(_0x4afaec[_0x3c6953]);
    }
    for (var _0x3c6953 = 0; _0x3c6953 < _0x4ec71f.length; _0x3c6953++) {
      for (var _0x4cb89b = 0; _0x4cb89b < _0x18490c.discountRules.length; _0x4cb89b++) {
        if (_0x18490c.discountRules[_0x4cb89b].operateId == _0x4ec71f[_0x3c6953]) {
          _0x321663.push(_0x18490c.discountRules[_0x4cb89b]);
          break;
        }
      }
      for (var _0x4cb89b = 0; _0x4cb89b < _0x18490c.discountCoupons.length; _0x4cb89b++) {
        if (_0x18490c.discountCoupons[_0x4cb89b].pcardNo == _0x4ec71f[_0x3c6953]) {
          _0x321663.push(_0x18490c.discountCoupons[_0x4cb89b]);
          break;
        }
      }
    }
    return _0x321663;
  }
  function _0x370289() {
    if (0 == _0x3a87f0.length) {
      return void publicClient.toastMsgPlug("优惠活动不能为空。", 2000);
    }
    if (1 == _0x3a87f0.length) {
      for (var _0x4ec71f = 0; _0x4ec71f < _0x18490c.discountCoupons.length; _0x4ec71f++) {
        if (_0x3a87f0[0] == _0x18490c.discountCoupons[_0x4ec71f].pcardNo && "1" == _0x18490c.discountCoupons[_0x4ec71f].canOlay) {
          return void publicClient.toastMsgPlug("叠加券需和话费券叠加使用", 2000);
        }
      }
    } else {
      if (2 == _0x3a87f0.length) {
        for (var _0x321663 = !1, _0x4ec71f = 0; _0x4ec71f < _0x18490c.discountCoupons.length; _0x4ec71f++) {
          "0" == _0x18490c.discountCoupons[_0x4ec71f].canOlay && (_0x3a87f0[0] == _0x18490c.discountCoupons[_0x4ec71f].pcardNo && (_0x321663 = !0), _0x3a87f0[1] == _0x18490c.discountCoupons[_0x4ec71f].pcardNo && (_0x321663 = !0));
        }
        if (!_0x321663) {
          return void publicClient.toastMsgPlug("叠加券需和话费券叠加使用", 2000);
        }
      }
    }
    $(".coupon-main-yn").attr("choosedstr", _0x3a87f0);
    _0x1cc9fd = !1;
    _0xf44882();
    _0x3ffdb4();
  }
  function _0x1a912b(_0x4ec71f) {
    var _0x321663 = "",
      _0x4afaec = 1,
      _0x3c6953 = [];
    _0x3c6953 = _0x30f885();
    var _0x4cb89b = _0x40f386(_0x3c6953);
    _0x4ec71f.pCardNo = "";
    _0x4cb89b[0] && (_0x4ec71f.operateId = _0x4cb89b[0].operateId, "coupon" == _0x4cb89b[0].type && (_0x4ec71f.pCardNo = _0x4cb89b[0].pcardNo));
    for (var _0xd2f33 = 1; _0xd2f33 < _0x4cb89b.length; _0xd2f33++) {
      _0x321663 += "cardNo" + _0x4afaec + "=" + _0x4cb89b[_0xd2f33].pcardNo + ",";
      _0x321663 += "coupon" + _0x4afaec + "=" + _0x4cb89b[_0xd2f33].operateId + ",";
      _0x4afaec++;
    }
    var _0x162414 = "";
    _0x162414 = _0x321663.slice(0, _0x321663.length - 1);
    _0x4ec71f.couponExp = _0x162414;
  }
  function _0x3e6d43(_0x4ec71f, _0x321663, _0x4afaec) {
    var _0x3c6953 = {
      p: _0x321663,
      a: _0x4afaec
    };
    if ("rule" == _0x4ec71f.type) {
      _0x2257f2 = _0x4ec71f.operateId;
      _0x21ea9a = 0 != _0x4ec71f.targetNoType;
      var _0x4cb89b = _0x3405ef(Number(_0x485ccd), Number(_0x4ec71f.saleType), _0x4ec71f, _0x4ec71f.discountFormat || "");
      _0x3c6953.p = _0x4cb89b.pMon;
      _0x3c6953.a = _0x4cb89b.aMon;
      _0x38d5a8 = "";
    } else {
      if ("coupon" == _0x4ec71f.type) {
        _0x2257f2 = _0x4ec71f.operateId;
        _0x38d5a8 = _0x4ec71f.pCardNo || _0x4ec71f.pcardNo;
        var _0x4cb89b = _0xfd33d7(Number(_0x321663), Number(_0x4afaec), _0x4ec71f.saleType, _0x4ec71f.discountFormat || 0, _0x4ec71f.saleCode, _0x4ec71f.capDiscount);
        _0x3c6953.p = _0x4cb89b.pMon;
        _0x3c6953.a = _0x4cb89b.aMon;
      }
    }
    _0x2763c2 = _0x3c6953.p;
    return _0x3c6953;
  }
  function _0x41465a(_0x4ec71f) {
    if (_0x3f82eb && _0x3f82eb.length > 0 || _0x5c5d03 && _0x5c5d03.length > 0) {
      var _0x321663 = _0x4d433e(),
        _0x4afaec = _0xf6b4a2();
      _0x18490c.discountRules = _0x321663.ruleUse;
      _0x18490c.discountNoRules = _0x321663.ruleNouse;
      _0x18490c.discountCoupons = _0x4afaec.dataColor;
      _0x18490c.discountNoCoupons = _0x4afaec.dataGray;
    }
    if (_0x326256 && _0x326256.length > 0) {
      var _0x3c6953 = _0x335fc8();
      _0x5a38ca.maskBoxRules = _0x3c6953.maskRuleUse;
      _0x5a38ca.maskBoxNoRules = _0x3c6953.maskRuleNouse;
      _0x5a38ca.maskBlindRules = _0x326256;
    }
    if (_0x13c05b && _0x13c05b.length > 0) {
      var _0x4cb89b = _0x194444();
      _0xc0398b.addtionBoxRules = _0x4cb89b.addtionRuleUse;
      _0xc0398b.addtionBoxNoRules = _0x4cb89b.addtionRuleNouse;
      _0xc0398b.addtionBlindRules = _0x13c05b;
    }
    var _0xd2f33 = !1;
    if (null != _0x574f70 && !_0x341d6e && 0 != _0x341d6e) {
      for (var _0x162414 = 0; _0x162414 < _0x18490c.discountCoupons.length; _0x162414++) {
        if ((_0x18490c.discountCoupons[_0x162414].pCardNo || _0x18490c.discountCoupons[_0x162414].pcardNo) == _0x574f70) {
          _0x341d6e = _0x18490c.discountRules.length;
          _0xd2f33 = !0;
          break;
        }
      }
    }
    _0x18490c.discountRules.length + _0x18490c.discountCoupons.length >= 1 ? $(".youhui").removeClass("hidden") : $(".youhui").addClass("hidden");
    var _0x12d890, _0x13ebb5, _0x5ea2f4;
    if (_0x17044a.includes(_0x2bdaee)) {
      var _0x2da267 = $("#discountTpl_yn").html();
      if (juicer.register("getDateym", _0x48501c), juicer.register("getCardType", _0x361052), juicer.register("getcouponValue", _0x12b924), juicer.register("getTipInfo", _0x342993), _0x13ebb5 = _0x130c44(), _0x18490c.festYNids = [], null != _0x13ebb5) {
        if (_0x13ebb5.length > 0) {
          for (var _0x4db6f1 = 0; _0x4db6f1 < _0x13ebb5.length; _0x4db6f1++) {
            "rule" == _0x13ebb5[_0x4db6f1].type ? _0x18490c.festYNids.push(_0x13ebb5[_0x4db6f1].operateId + "") : "coupon" == _0x13ebb5[_0x4db6f1].type && _0x18490c.festYNids.push(_0x13ebb5[_0x4db6f1].pcardNo);
          }
          $(".cou-text").html("组合优惠");
        } else {
          "rule" == _0x13ebb5.type ? _0x18490c.festYNids[0] = _0x13ebb5.operateId + "" : "coupon" == _0x13ebb5.type && (_0x18490c.festYNids[0] = _0x13ebb5.pcardNo);
          $(".cou-text").html(_0x13ebb5.saleName);
        }
      } else {
        if (_0x18490c.discountRules[0]) {
          _0x18490c.festYNids[0] = _0x18490c.discountRules[0].operateId + "";
        } else {
          for (var _0x4db6f1 = 0; _0x4db6f1 < _0x18490c.discountCoupons.length; _0x4db6f1++) {
            "0" == _0x18490c.discountCoupons[_0x4db6f1].canOlay && (_0x18490c.festYNids[0] = _0x18490c.discountCoupons[_0x4db6f1].pcardNo + "");
          }
        }
      }
      var _0x577ed4 = juicer(_0x2da267, _0x18490c);
      $(".coupon-list").html(_0x577ed4);
    } else {
      var _0x2da267 = $("#discountTpl").html();
      juicer.register("getDateym", _0x48501c);
      juicer.register("getCardType", _0x361052);
      juicer.register("getcouponValue", _0x12b924);
      juicer.register("getTipInfo", _0x342993);
      console.log("最优优惠--------");
      _0x13ebb5 = _0x4e64ad(_0x18490c.discountRules, _0x18490c.discountCoupons, _0x485ccd);
      _0x5ea2f4 = _0x13ebb5 && _0x13ebb5.saleData && _0x13ebb5.saleData.type;
      _0x12d890 = _0x13ebb5 && _0x13ebb5.saleData && _0x13ebb5.saleData.index;
      _0x18490c.festType = _0x5ea2f4;
      _0x18490c.festIndex = _0x12d890;
      var _0x577ed4 = juicer(_0x2da267, _0x18490c);
      $(".coupon-list").html(_0x577ed4);
    }
    var _0x1a366a = 0,
      _0x2a47b2 = 0;
    $(".num-item").each(function (_0x4ec71f) {
      $(this).hasClass("active") && (_0x1a366a = parseInt($(this).attr("posval") / 3), _0x2a47b2 = $(this).attr("posval") % 3);
    });
    var _0x4ccb5d = _0x18490c.discountRules.filter(function (_0x4ec71f) {
      return _0x4ec71f.activityShowArea == _0x1daf52;
    });
    if (_0x4ccb5d && _0x4ccb5d.length > 0) {
      var _0x32ed15 = null;
      _0x13ebb5 && 1 == _0x13ebb5.choosing ? _0x32ed15 = _0x13ebb5.saleData : _0x13ebb5 && _0x13ebb5.choosing > 1 && (_0x32ed15 = _0x13ebb5.mostObj.saleData);
      "-1" == _0x326102 && _0x32ed15 && (_0x18490c.discountRules.map(function (_0x4ec71f, _0x321663) {
        _0x4ec71f.index == _0x32ed15.index && "rule" == _0x32ed15.type && (_0x326102 = _0x4ec71f.index);
      }), "-1" != _0x326102 && _0x32ed15.activityShowArea != _0x1daf52 && (_0x326102 = "A"), null != _0x574f70 && _0xd2f33 && (_0x326102 = "A"));
      var _0x409808 = $("#gearsRulTpl").html(),
        _0x1c8c02 = juicer(_0x409808, {
          gearRules: _0x4ccb5d,
          arrowRules: [0, 1, 2],
          gearChoosedVal: _0x2a47b2,
          gearRuleChecked: _0x326102
        });
      $(".under-pay-rule-container").empty();
      $(".under-pay-rule-container").each(function (_0x4ec71f) {
        $(this).attr("posinxval") == _0x1a366a && $(this).html(_0x1c8c02);
      });
    } else {
      if (_0x4e1b92.productRules.length > 0) {
        if (_0x4e1b92.productUnitRules = _0x4e1b92.productRules.filter(function (_0x4ec71f) {
          return "11" == _0x4ec71f.saleType;
        }), (_0x4e1b92.productUnitRules || []).length > 0) {
          var _0x409808 = $("#productRulTpl").html(),
            _0x43041a = _0x4e1b92.productUnitRules.filter(function (_0x4ec71f) {
              return _0x4ec71f.imageCode;
            }).length,
            _0x1c8c02 = juicer(_0x409808, {
              gearRules: _0x4e1b92.productUnitRules,
              arrowRules: [0, 1, 2],
              gearChoosedVal: _0x2a47b2,
              gearRuleChecked: _0x4b743d,
              totalRowNum: _0x43041a,
              evestr: _0x26a2ec
            });
          $(".under-pay-rule-container").empty();
          $(".under-pay-rule-container").each(function (_0x4ec71f) {
            $(this).attr("posinxval") == _0x1a366a && $(this).html(_0x1c8c02);
          });
        }
      } else {
        $(".under-pay-rule-container").empty();
        _0x326102 = "A";
        _0x4b743d = "-1";
      }
    }
    var _0x555a09 = $("#interestsTpl").html(),
      _0x2f371a = juicer(_0x555a09, _0xc0f872);
    $(".interests-list").html(_0x2f371a);
    var _0xc30dc9 = $("#maskBoxTpl").html(),
      _0x43face = juicer(_0xc30dc9, _0x5a38ca),
      _0x1524a2 = $("#addtionBoxTpl").html(),
      _0x199f56 = juicer(_0x1524a2, _0xc0398b);
    void 0 === _0x4ec71f && (_0x4ec71f = !0);
    _0x4c6ac1 && $(".addtion-box").html(_0x199f56);
    _0x4ec71f && $(".mask-box").html(_0x43face);
    _0xc0398b.addtionRights.length > 0 && $(".addtion-box").removeClass("hidden");
    _0x5a38ca.maskRights.length > 0 && $(".mask-box").removeClass("hidden");
    publicClient.versions.ios || $(".discount-main-title-sign").addClass("discount-main-title-signAndrod");
    sessionStorage.getItem("choose_money") != _0x485ccd && (_0x445393 = _0x341d6e = _0x359e03 = null, _0x3a87f0 = [], sessionStorage.setItem("choose_money", _0x485ccd));
    var _0x33dfc2 = _0x485ccd,
      _0x3de808 = _0x485ccd;
    _0x2763c2 = _0x33dfc2;
    var _0x4e9f4e = "";
    if ("rule" == _0x359e03) {
      _0x4e9f4e = _0x15332d(_0x3f82eb[_0x445393].operateId, _0x18490c.discountRules);
      _0x4e9f4e.selectFlag ? _0x341d6e = _0x4e9f4e.selectIndex : _0x445393 = _0x341d6e = _0x359e03 = null;
    } else {
      if ("coupon" == _0x359e03) {
        var _0x34e633 = _0x5c5d03[_0x445393].operateId,
          _0xf44882 = _0x5c5d03[_0x445393].pcardNo;
        _0x4e9f4e = _0x380669(_0x34e633, _0x18490c.discountCoupons, _0xf44882);
        _0x4e9f4e.selectFlag ? _0x341d6e = _0x18490c.discountRules.length + _0x4e9f4e.selectIndex : _0x445393 = _0x341d6e = _0x359e03 = null;
      }
    }
    if (_0xdc5f9b && _0x5a38ca.maskBoxRules.length > 0 ? $(".option").addClass("active") : (_0xdc5f9b = !1, $(".option").removeClass("active")), _0x5625fa ? ($(".addtion-box .img-item3").eq(0).addClass("current"), $(".addtionCheck").addClass("active"), $(".unit-order-product").removeClass("unit-order-product-active")) : (_0x5625fa = !1, $(".addtionCheck").removeClass("active")), null == _0x445393 && !1 !== _0x12d890 && (_0x13ebb5 && 1 == _0x13ebb5.choosing ? (_0x359e03 = _0x5ea2f4, _0x445393 = _0x12d890, _0x341d6e = _0x13ebb5 && _0x13ebb5.checkInx) : _0x13ebb5 && _0x13ebb5.choosing > 1 && (_0x359e03 = _0x13ebb5 && _0x13ebb5.mostObj && _0x13ebb5.mostObj.saleData && _0x13ebb5.mostObj.saleData.type, _0x445393 = _0x13ebb5 && _0x13ebb5.mostObj && _0x13ebb5.mostObj.saleData && _0x13ebb5.mostObj.saleData.index, _0x341d6e = _0x13ebb5 && _0x13ebb5.mostObj && _0x13ebb5.mostObj.checkInx)), _0x17044a.includes(_0x2bdaee)) {
      if (_0x1cc9fd && (_0x3a87f0 = _0x18490c.festYNids, $(".coupon-main-yn").attr("choosedstr", _0x3a87f0)), _0x3a87f0.length > 1) {
        $(".cou-text").html("组合优惠");
      } else {
        if (1 == _0x3a87f0.length) {
          for (var _0x56ccae = "", _0x4db6f1 = 0; _0x4db6f1 < _0x18490c.discountRules.length; _0x4db6f1++) {
            if (_0x3a87f0[0] == _0x18490c.discountRules[_0x4db6f1].operateId) {
              _0x56ccae = _0x18490c.discountRules[_0x4db6f1].saleName;
              break;
            }
          }
          for (var _0x4db6f1 = 0; _0x4db6f1 < _0x18490c.discountCoupons.length; _0x4db6f1++) {
            if (_0x3a87f0[0] == _0x18490c.discountCoupons[_0x4db6f1].pcardNo) {
              _0x56ccae = _0x18490c.discountCoupons[_0x4db6f1].saleName;
              break;
            }
          }
          $(".cou-text").html(_0x56ccae);
        }
      }
    } else {
      _0x445393 || 0 == _0x445393 ? "rule" == _0x359e03 ? ($(".cou-text").html(_0x3f82eb[_0x445393].saleName), $(".coupon-net").remove("no-right")) : "coupon" == _0x359e03 && ($(".cou-text").html(_0x12c2ad(_0x5c5d03[_0x445393])), $(".coupon-net").remove("no-right")) : _0x18490c.discountRules.length > 0 ? (_0x341d6e = 0, _0x359e03 = "rule", _0x445393 = $(".discount-item").eq(0).attr("index"), $(".cou-text").html(_0x3f82eb[_0x445393].saleName)) : _0x18490c.discountCoupons.length > 0 ? (_0x341d6e = 0, _0x359e03 = "coupon", _0x445393 = $(".discount-item").eq(0).attr("index"), $(".cou-text").html(_0x12c2ad(_0x5c5d03[_0x445393]))) : (_0x445393 = _0x341d6e = _0x359e03 = null, _0x38d5a8 = "", _0x2257f2 = "", $(".cou-text").html("无可用").removeClass("blue"), $(".coupon-net").addClass("no-right"));
    }
    if (_0x17044a.includes(_0x2bdaee)) {
      for (var _0x4db6f1 = 0; _0x4db6f1 < _0x3a87f0.length; _0x4db6f1++) {
        $(".coupon-main-yn li").each(function () {
          $(this).attr("id") == _0x3a87f0[_0x4db6f1] && ($(this).addClass("discount-itemActive"), $(this).addClass(_0x3a87f0[_0x4db6f1]));
        });
      }
      var _0x50a380 = [];
      _0x50a380 = _0x30f885();
      for (var _0x2564a4 = _0x40f386(_0x50a380), _0x4db6f1 = 0; _0x4db6f1 < _0x2564a4.length; _0x4db6f1++) {
        var _0x483169 = _0x3e6d43(_0x2564a4[_0x4db6f1], _0x33dfc2, _0x3de808);
        _0x33dfc2 = _0x483169.p;
        _0x3de808 = _0x483169.a;
      }
      _0x258e14(_0x33dfc2, _0x2564a4[0]);
      _0x496a2c();
    } else {
      if (null != _0x445393) {
        if (null != _0x341d6e && $(".discount-item").removeClass("discount-itemActive").eq(Number(_0x341d6e)).addClass("discount-itemActive"), "rule" == _0x359e03) {
          var _0x46d003 = _0x3f82eb[_0x445393];
          _0x2257f2 = _0x46d003.operateId;
          _0x21ea9a = 0 != _0x46d003.targetNoType;
          var _0x44faa1 = _0x3405ef(Number(_0x485ccd), Number(_0x46d003.saleType), _0x46d003, _0x46d003.discountFormat || "");
          _0x33dfc2 = _0x44faa1.pMon;
          _0x3de808 = _0x44faa1.aMon;
          _0x38d5a8 = "";
        } else {
          if ("coupon" == _0x359e03) {
            var _0x46d003 = _0x5c5d03[_0x445393];
            _0x2257f2 = _0x46d003.operateId;
            _0x38d5a8 = _0x46d003.pCardNo || _0x46d003.pcardNo;
            var _0x44faa1 = _0xfd33d7(Number(_0x485ccd), Number(_0x485ccd), _0x46d003.saleType, _0x46d003.discountFormat || 0, _0x46d003.saleCode, _0x46d003.capDiscount);
            _0x33dfc2 = _0x44faa1.pMon;
            _0x3de808 = _0x44faa1.aMon;
          }
        }
        _0x2763c2 = _0x33dfc2;
        (!_0xae9b17 && 0 != _0xae9b17 || !_0x588334 && 0 != _0x588334) && _0x496a2c();
      } else {
        _0x496a2c();
      }
    }
    if (_0xdc5f9b && _0x5a38ca.maskBoxRules.length > 0) {
      var _0x1eb71a = _0x5a38ca.maskBoxRules && _0x5a38ca.maskBoxRules[0] && _0x5a38ca.maskBoxRules[0].price || 0;
      _0x19bd19 = _0x326256[0].operateId;
      _0x3a1842 = Number(_0x1eb71a);
      _0x2ad995 = "8";
      _0x33dfc2 = _0x58dc9f(Number(_0x485ccd), Number(_0x33dfc2), _0x5a38ca.maskBoxRules[0]);
    }
    if (_0xdc5f9b && $(".recharge-arrival").html("到账金额" + publicClient.floating(_0x3de808) + "元和一次拆盲盒权益机会"), 0 == _0x485ccd || null == _0x1f5ee3 ? $(".recharge-btn,.recharge-shadow").addClass("disable") : _0x247825 && $(".recharge-btn,.recharge-shadow").removeClass("disable"), $("#payMoney").html(publicClient.floating(_0x33dfc2)), $("#amoMoney").html(publicClient.floating(_0x3de808)), _0x5625fa && _0xc0398b.addtionBoxRules.length > 0) {
      $("#payMoney").html(publicClient.floating(Number(_0x2763c2) + Number(_0x19da5a.price)));
      $(".buttonShowAddText").removeClass("hidden");
      $("#buttonShowAddText").html("到账金额" + _0x3de808 + "元和您选购的权益");
    } else {
      if ("-1" != _0x4b743d) {
        var _0x38e4e2 = _0x3ba5d4[_0x4b743d] || {};
        _0x19bd19 = _0x38e4e2.operateId;
        _0x3a1842 = _0x38e4e2.price;
        _0x2ad995 = "7";
        "8" == _0x38e4e2.activityType && (_0x2ad995 = "6");
        $("#payMoney").html(publicClient.floating(Number(_0x2763c2) + Number(_0x38e4e2.price || 0)));
        $(".buttonShowAddText").removeClass("hidden");
        $("#buttonShowAddText").html("到账金额" + _0x3de808 + "元和" + _0x38e4e2.saleName);
      } else {
        _0x4258a1 ? (_0x2ad995 = "5", _0x19bd19 = _0x3d353a[0].operateId, _0x3a1842 = 0, $(".buttonShowAddText").removeClass("hidden"), $("#buttonShowAddText").html("到账金额" + _0x3de808 + "元和" + _0x3d353a[0].saleName)) : $(".buttonShowAddText").addClass("hidden");
      }
    }
    if (_0x341d6e == (_0x13ebb5 && _0x13ebb5.checkInx) ? $(".youhui").removeClass("youhui-normal").addClass("youhui-default") : $(".youhui").removeClass("youhui-default").addClass("youhui-normal"), _0x18490c.festYNids.length == _0x3a87f0.length) {
      for (var _0x4b9215 = !1, _0x4db6f1 = 0; _0x4db6f1 < _0x18490c.festYNids.length; _0x4db6f1++) {
        _0x3a87f0.includes(_0x18490c.festYNids[_0x4db6f1]) || (_0x4b9215 = !0);
      }
      _0x4b9215 ? $(".youhui").removeClass("youhui-default").addClass("youhui-normal") : $(".youhui").removeClass("youhui-normal").addClass("youhui-default");
    } else {
      $(".youhui").removeClass("youhui-default").addClass("youhui-normal");
    }
    _0x36c5bb && _0x36c5bb == _0x1f5ee3 && _0x2cf8dc && (_0x416722(), _0x2cf8dc = !1);
  }
  function _0x3cf65b(_0x4ec71f) {
    _0x17044a.includes(_0x2bdaee) ? _0x28667c($(_0x4ec71f).attr("id"), $(_0x4ec71f)) : _0xf44882();
  }
  function _0xf5e9e6() {
    document.hidden || (_0x420e16(), document.removeEventListener("visibilitychange", _0xf5e9e6, !0));
  }
  var _0x2bdaee,
    _0x35dd62,
    _0x2257f2,
    _0x6393e4 = {},
    _0x36c5bb = "",
    _0x1f5ee3 = null,
    _0x5d9956 = "",
    _0x50b98f = "",
    _0x485ccd = 100,
    _0x222291 = "",
    _0x3f82eb = [],
    _0xf316cf = 1000,
    _0x58dd3c = 10,
    _0x445393 = null,
    _0x359e03 = null,
    _0x341d6e = null,
    _0x5c5d03 = [],
    _0x50b340 = null,
    _0x38d5a8 = null,
    _0x574f70 = null,
    _0x31386a = null,
    _0x41da91 = null,
    _0x1549d2 = 0,
    _0xb0ef9a = null,
    _0x237604 = null,
    _0x503e6c = null,
    _0x8119c7 = "",
    _0x2ae527 = "",
    _0x46863d = !1,
    _0x2cf8dc = !0,
    _0x4575c1 = !1,
    _0x48acdc = "",
    _0x51e60e = "",
    _0x21ea9a = !1,
    _0x26bf21 = {
      list: []
    },
    _0x5b8d95 = {
      lili: []
    },
    _0x39d54b = [],
    _0x6606b1 = 0,
    _0x56ea59 = {
      10: 1,
      20: 2,
      30: 3,
      50: 4,
      100: 5,
      200: 6
    },
    _0x9abc0 = 6,
    _0x29099e = $(_0x4ec71f).height(),
    _0x18490c = {
      discountRules: [],
      discountCoupons: [],
      discountNoRules: [],
      discountNoCoupons: [],
      discountYN: [],
      festYNids: [],
      hascanOlay: !1,
      hasCoupons: !1,
      festType: "",
      festIndex: ""
    },
    _0x4ce913 = null,
    _0x1dbdeb = !1,
    _0x6b012b = [],
    _0x326256 = [],
    _0x13c05b = [],
    _0x4d05f9 = 6,
    _0x5a38ca = {
      maskBoxRules: [],
      maskBoxNoRules: [],
      maskRights: [],
      maskBlindRules: [],
      maskEnurl: "i",
      maskOrderStatue: null,
      blindOrderInfo: {}
    },
    _0xc0398b = {
      addtionBoxRules: [],
      addtionBoxNoRules: [],
      addtionRights: [],
      addtionBlindRules: [],
      addtionEnurl: "i",
      addtionOrderStatue: null,
      addtionOrderInfo: {}
    },
    _0x4c6ac1 = !1,
    _0x2189c7 = 0,
    _0x4258a1 = !1,
    _0x49bcaf = 0,
    _0x5625fa = !1,
    _0xdc5f9b = !1,
    _0x19da5a = {},
    _0x36e6e0 = "",
    _0x230900 = "",
    _0x3d353a = [],
    _0xc0f872 = {
      interestsRules: [],
      interestsNoRules: []
    },
    _0xae9b17 = null,
    _0xab89e7 = null,
    _0x588334 = null,
    _0x19bd19 = "",
    _0x3a1842 = "",
    _0x2ad995 = "",
    _0x2763c2 = "",
    _0x247825 = !0,
    _0x3cfc5c = "",
    _0x20612b = [],
    _0x582972 = "",
    _0x1ec67a = "",
    _0x3dc6e0 = 60,
    _0x2360f5 = null,
    _0x5769d4 = null,
    _0x303d01 = "",
    _0x17044a = ["871"],
    _0x4ff43c = [{}, {}],
    _0x3a87f0 = [],
    _0x1cc9fd = !0,
    _0x326102 = "-1",
    _0x17942d = !1,
    _0x52c2ad = 0,
    _0x26a207 = 0,
    _0x1daf52 = "1",
    _0x3ba5d4 = [],
    _0x4b743d = "-1",
    _0x2d87bb = "<span class=\"money-input-edit\"></span>",
    _0x4e1b92 = {
      productRules: [],
      productNoRules: [],
      productUnitRules: []
    },
    _0x26a2ec = "i";
  _0x4ec71f.location.href.indexOf("gray") > -1 && (_0x26a2ec = "i/gray");
  var _0x403f29 = ["200", "871", "230", "771", "931", "591"],
    _0x1e752a = function (_0x4ec71f) {
      var _0x321663 = {
          operateCorner: (_0x4ec71f.data.specialOfferZone || []).slice(0, 3)
        },
        _0x4afaec = $("#specialAreaTpl").html(),
        _0x3c6953 = juicer(_0x4afaec, _0x321663);
      $("#special-area").html(_0x3c6953);
    },
    _0x53821d = function () {
      var _0x4ec71f = _0x4ff43c && _0x4ff43c.filter(function (_0x4ec71f) {
        return 0 != Object.keys(_0x4ec71f).length;
      });
      _0x4ec71f.map(function (_0x4ec71f, _0x321663) {
        $("#operation" + _0x321663 + " > .num-item-img").html(_0x4ec71f.name);
        $("#operation" + _0x321663 + " > .num-item-img").attr("positionno", _0x4ec71f.gImage && _0x4ec71f.gImage[0] && _0x4ec71f.gImage[0].imageUrl);
        $("#operation" + _0x321663 + " > span").html(_0x4ec71f.jbText && _0x4ec71f.jbText.substr(0, 8));
        $("#operation" + _0x321663).css({
          display: "block"
        });
        $("#operation" + _0x321663).hasClass("num-img1") || $("#operation" + _0x321663).addClass("num-img1");
      });
      0 == _0x4ec71f.length && 7 == $(".noSelect").attr("posval") && ($("#operation0").removeClass("num-img1"), $("#operation0").css({
        display: "block"
      }));
      1 == _0x4ec71f.length && 6 == $(".noSelect").attr("posval") && ($("#operation1").removeClass("num-img1"), $("#operation1").css({
        display: "block"
      }));
    },
    _0x3b1321 = function (_0x4ec71f) {
      var _0x321663 = {
          chargeCornerDbList: _0x4ec71f,
          dynamicsCorner: _0x4ff43c
        },
        _0x4afaec = $("#gearsTpl").html(),
        _0x3c6953 = juicer(_0x4afaec, _0x321663);
      $(".num-list").html(_0x3c6953);
      _0x39d54b = _0x4ec71f;
      var _0x4cb89b = _0x39d54b.filter(function (_0x4ec71f) {
        return 1 == _0x4ec71f.isInitialAmount;
      });
      _0x53821d();
      _0x4ccb5d(_0x2bdaee);
      _0x4cb89b.length < _0x9abc0 && (_0x1dbdeb = !0);
    },
    _0xe1a0f5 = function (_0x4ec71f) {
      function _0x321663(_0x4ec71f, _0x321663) {
        var _0x4afaec = _0x3d353a && _0x3d353a[0] && _0x3d353a[0].presentCode && _0x3d353a[0].presentCode.split("|");
        _0x2189c7 += 1;
        _0x321663.unobserve(_0x4ec71f);
        publicClient.setGdpTrace({}, "imp", {
          WT_envName: "卡片",
          WT_event: "P00000097482",
          XY_sqb_group: _0x4afaec[1] || ""
        });
      }
      try {
        var _0x4afaec = new IntersectionObserver(function (_0x4ec71f) {
          _0x4ec71f.forEach(function (_0x4ec71f) {
            _0x4ec71f && _0x4ec71f.isIntersecting && _0x4ec71f.target && _0x321663(_0x4ec71f.target, _0x4afaec);
          });
        }, {
          root: null,
          threshold: [0],
          rootMargin: "-75px"
        });
        $(_0x4ec71f).each(function (_0x4ec71f, _0x321663) {
          _0x2189c7 < 1 && _0x4afaec.observe(_0x321663);
        });
      } catch (_0x29a91f) {}
    },
    _0x221fd0 = function () {
      try {
        _0x555a09(_0x6393e4.version, [9, 9, 0]) && leadeon.getConcatenationInfo && leadeon.getConcatenationInfo({
          debug: !1,
          success: function (_0x4ec71f) {
            var _0x321663 = _0x4ec71f.channelId,
              _0x4afaec = _0x4ec71f.yx,
              _0x3c6953 = _0x4ec71f.token;
            _0x5d9956 = _0x321663 + "_" + _0x4afaec;
            _0x50b98f = _0x3c6953;
          },
          error: function (_0x4ec71f) {}
        });
      } catch (_0x5c95af) {
        console.log(_0x5c95af);
      }
    };
  leadeon.init = function () {
    leadeon.setNavigationFuncAtSecRightBtn({
      debug: !1,
      funcName: "",
      secFuncName: "1",
      customServiceUrl: "https://wx.10086.cn/website/customerService/auth2/V6Bm3jkNKMI8KPPtca4aI9Nq6xBABmsk",
      success: function (_0x4ec71f) {},
      error: function (_0x4ec71f) {}
    });
    _0x4ec71f.location.href.indexOf("gray") > -1 && (_0x5a38ca.maskEnurl = "i/gray", _0xc0398b.addtionEnurl = "i/gray");
    _0x420e16();
    _0x4060fa();
  };
  setTimeout(function () {
    0 == _0x6606b1 && leadeon.init();
  }, 2500);
}(window);