//Tue Oct 07 2025 05:26:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
var shenyou_spanl23 = function (_0x3e1a55) {
  function _0x558fd1() {
    var _0x4e51b8 = _0x3e1a55.call(this) || this;
    _0x4e51b8.roleIndex = 0;
    _0x4e51b8.oldIndex = 0;
    _0x4e51b8.skinName = "shenyouboxskin23";
    _0x4e51b8.isTopLevel = true;
    return _0x4e51b8;
  }
  __extends(_0x558fd1, _0x3e1a55);
  _0x558fd1.prototype.initUI = function () {};
  _0x558fd1.prototype.open = function () {
    this.addTouchEvent(this.closeBtn, this.onClick);
    this.oldIndex = this.tab.selectedIndex = this.viewStack.selectedIndex = _0x3e1a55[0] ? _0x3e1a55[0] : 0;
    this.addTouchEvent(this, this.onClick);
    this.addChangingEvent(this.tab, this.checkIsOpen);
    this.setOpenIndex(0);
  };
  _0x558fd1.prototype.close = function () {
    for (var _0x4146e0 = [], _0x5f4ddf = 0; _0x5f4ddf < arguments.length; _0x5f4ddf++) {
      _0x4146e0[_0x5f4ddf] = arguments[_0x5f4ddf];
    }
    var _0x53228a = ViewManager.ins().getView(UIView2);
    _0x53228a && _0x53228a.closeNav(UIView2.NAV_ROLE);
    for (var _0xf850b9 = this.viewStack.numChildren, _0x42c970 = 0; _0xf850b9 > _0x42c970; _0x42c970++) {
      this.viewStack.getChildAt(_0x42c970) instanceof eui.Group || this.viewStack.getChildAt(_0x42c970).close();
    }
  };
  _0x558fd1.prototype.checkIsOpen = function (_0x13daf1) {
    this.setOpenIndex(this.tab.selectedIndex);
    this.viewStack.selectedIndex = this.tab.selectedIndex;
    this.viewStack.getElementAt(this.oldIndex).close();
  };
  _0x558fd1.prototype.allclose = function (_0xf108dc) {
    for (i = 1; i < 1; i++) {
      this["tgwu" + i].close();
    }
  };
  _0x558fd1.prototype.setOpenIndex = function (_0x37d353) {
    if (this.oldIndex && 1 == this.oldIndex && this.oldIndex != _0x37d353 && this.getWingPanelInfo()) {
      this.doOpenHintWin(1, this.tab.selectedIndex);
      return void (this.tab.selectedIndex = this.oldIndex);
    }
    this.allclose();
    switch (_0x37d353) {
      case 0:
        this.tgwu1.open();
    }
  };
  _0x558fd1.prototype.onClick = function (_0x2dc487) {
    switch (_0x2dc487.target) {
      case this.closeBtn:
      case this.closeBtn0:
        ViewManager.ins().close(this);
    }
  };
  return _0x558fd1;
}(BaseEuiView);
__reflect(shenyou_spanl23.prototype, "shenyou_spanl23");
ViewManager.ins().reg(shenyou_spanl23, LayerManager.UI_Main);
var shenyou1panl23 = function (_0x8100b9) {
  function _0x202acd() {
    var _0x4a67bc = _0x8100b9.call(this) || this,
      _0x408c71 = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<e:Skin class=\"shenyou1skin\" width=\"580\" height=\"930\" xmlns:e=\"http://ns.egret.com/eui\" xmlns:w=\"http://ns.egret.com/wing\"\r\n        xmlns:ns1=\"*\" xmlns:euiextension=\"euiextension.*\" >\r\n<e:Group top=\"0\" bottom=\"0\" width=\"580\" horizontalCenter=\"0\">\r\n<e:Group left=\"0\" right=\"0\" top=\"0\" bottom=\"-4\">\r\n<e:Image top=\"40\" left=\"0\" source=\"\" scale9Grid=\"19,12,14,25\" right=\"0\" bottom=\"0\"/>\r\n<e:Group id=\"xinb1\" top=\"0\" left=\"0\" right=\"0\" bottom=\"0\">\r\n<e:Rect left=\"0\" right=\"0\" bottom=\"0\" top=\"0\" fillAlpha=\"0\"/>\r\n<e:Image source=\"shenyou_bg\" left=\"0\" right=\"0\" bottom=\"0\" top=\"0\"/>\r\n<e:Group left=\"0\" right=\"0\" top=\"0\" bottom=\"0\">\r\n<e:Image source=\"\" left=\"0\" right=\"0\" bottom=\"0\"/>\r\n<e:Group id=\"bodyeff\" horizontalCenter=\"20\" verticalCenter=\"0\"/>\r\n</e:Group>\r\n<e:Group left=\"0\" top=\"220\" bottom=\"2\" width=\"110\">\r\n<e:Rect left=\"0\" right=\"0\" bottom=\"0\" top=\"0\" fillAlpha=\"0\"/>\r\n<e:Scroller scrollPolicyH=\"off\" left=\"10\" right=\"0\" top=\"0\" bottom=\"0\"><e:List id=\"list\" left=\"0\" y=\"-3\" itemRendererSkinName=\"shenyouItemSkin\">\r\n<e:layout>\r\n</e:layout>\r\n<e:ArrayCollection>\r\n<e:Array>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n<e:Object a=\"null\"/>\r\n</e:Array>\r\n</e:ArrayCollection>\r\n</e:List>\r\n</e:Scroller>\r\n</e:Group>\r\n<e:Group left=\"110\" right=\"0\" bottom=\"50\" shenyou_spanl=\"126\">\r\n<e:Image source=\"\" left=\"0\" right=\"0\" height=\"126\"/>\r\n\t\t<e:Label id=\"attr\" textColor=\"0x1adb3e\" lineSpacing=\"6\" left=\"15\" right=\"0\" verticalCenter=\"8.5\" size=\"18\"/>\r\n\t\t<e:Label id=\"attr1\" textColor=\"0x84ff00\" lineSpacing=\"6\" horizontalCenter=\"40\" right=\"0\" verticalCenter=\"8.5\" size=\"18\"/>\r\n\t\t<e:Label id=\"attr2\" textColor=\"0xd3c2c2\" lineSpacing=\"6\" horizontalCenter=\"0\" right=\"0\" verticalCenter=\"8.5\" size=\"18\" visible=\"false\"/>\r\n</e:Group>\r\n<e:Group width=\"160\" bottom=\"300\" right=\"0\">\r\n\t\t<e:Label id=\"costs\" textColor=\"0xe51515\" lineSpacing=\"6\"  bottom=\"60\" size=\"16\" right=\"10\" text=\"神佑 (100/100000)\"/>\r\n<e:Button id=\"changeBtn\" label=\"进  阶\" name=\"changeBtn\" skinName=\"Btn3Skin\" bottom=\"0\" width=\"120\" right=\"10\"/>\r\n</e:Group>\r\n</e:Group>\r\n</e:Group>\n\t<ns1:BaseComponent id=\"powerPanel\" skinName=\"PowerPanelSkin\" className=\"PowerPanel\" horizontalCenter=\"60\" top=\"130\"/><ns1:BaseComponent id=\"roleSelect\" y=\"0\" skinName=\"RoleSelectPanelSkin\" className=\"RoleSelectPanel\"  width=\"580\" horizontalCenter=\"0\" />\r\n</e:Group><e:Image id=\"biaoti\" y=\"8\" source=\"title_shenyou\" x=\"50\" scaleX=\"1.2\" scaleY=\"1.2\"/>\r\n\t\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</e:Skin>";
    _0x4a67bc.skinName = _0x408c71;
    _0x4a67bc.Totime = 60;
    _0x4a67bc._curIndex = 0;
    _0x4a67bc.Maxxing = 10;
    _0x4a67bc.Indexid = 1;
    _0x4a67bc.lastindex = 0;
    return _0x4a67bc;
  }
  __extends(_0x202acd, _0x8100b9);
  _0x202acd.prototype.childrenCreated = function () {
    _0x8100b9.prototype.childrenCreated.call(this);
    this.list.itemRenderer = shenyouItembarPanel;
    this._col = new eui.ArrayCollection();
    this.list.dataProvider = this._col;
  };
  _0x202acd.prototype.open = function () {
    this.observe(Dress.ins().postDressInfo, this.update);
    this.observe(UserBag.ins().postItemAdd, this.update);
    this.observe(UserBag.ins().postItemDel, this.update);
    this.observe(UserBag.ins().postItemCountChange, this.update);
    this.roleSelect.setCurRole(this.curRole);
    this.roleSelect.parent.touchEnabled = true;
    SubRoles.ins().getSubRoleByIndex(0);
    this.roleSelect.setCurRole(0);
    this.curRole = 0;
    this.addChangeEvent(this.roleSelect, this.onChange);
    this.addChangeEvent(this.list, this.onList);
    this.addTouchEvent(this.changeBtn, this.onClicks);
    this.update();
  };
  _0x202acd.prototype.Ladbodyeff = function (_0x151ce6) {
    var _0x151ce6 = SubRoles.ins().getSubRoleByIndex(this.curRole);
    this.maceff || (this.maceff = new MovieClip());
    this.bodyeff.addChild(this.maceff);
    this.maceff.playFile("/resource/newUI/shenyou/1/shield_01" + (parseInt(this._curIndex) + 1), -1);
  };
  _0x202acd.prototype.onChange = function (_0xebfa5a) {
    this.curRole = this.roleSelect.getCurRole();
    this.update();
  };
  _0x202acd.prototype.Listdate = function (_0x29c43a) {
    this.curRole = this.roleSelect.getCurRole();
    var _0x55551e = Dress.ins();
    this.listInfo = [];
    var _0x4edb40 = ConfgMgr.shenyouid14cf;
    for (var _0x437704 in _0x4edb40) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == _0x4edb40[_0x437704].roletype) {
      var _0x3c1c8d = new DressItemInfo(),
        _0x366085 = _0x4edb40[_0x437704],
        _0xcc0d55 = _0x366085.id;
      _0x3c1c8d.lv = 0;
      _0x3c1c8d.id = _0xcc0d55;
      _0x3c1c8d.uid = _0x366085.uid;
      _0x3c1c8d.job = _0x366085.roletype;
      _0x55551e.timeInfo[_0xcc0d55] && (_0x3c1c8d.timer = _0x55551e.timeInfo[_0xcc0d55].invalidtime, _0x3c1c8d.lv = _0x55551e.timeInfo[_0xcc0d55].lv);
      this.listInfo.push(_0x3c1c8d);
    }
    return this.listInfo;
  };
  _0x202acd.prototype.update = function () {
    var _0x529648 = ConfgMgr.shenyou14cf,
      _0xe9a8dc = [],
      _0x610377 = 0,
      _0x4ea0f4 = this.Listdate();
    this._col.replaceAll(_0xe9a8dc);
    for (var _0x569f41 in _0x529648) {
      _0xe9a8dc.push({
        ling: _0x569f41 == this._curIndex ? 1 : 0,
        item: _0x529648[_0x569f41].itemid,
        id: _0x4ea0f4[_0x569f41].id,
        lv: _0x4ea0f4[_0x569f41].lv
      });
    }
    this._col.replaceAll(_0xe9a8dc);
    this.Ladbodyeff();
    var _0x459871 = _0x529648[this._curIndex];
    this._lv = _0x4ea0f4[this._curIndex].lv;
    this._lv = this._lv >= _0x459871.maxlevel ? _0x459871.maxlevel : this._lv;
    this._maxvll = _0x459871.maxlevel;
    var _0x20f3cb = [],
      _0x198afe = [];
    for (x = 0; x < _0x459871.type.length; x++) {
      var _0x610377 = {},
        _0x1ae7fb = {};
      _0x610377.type = _0x1ae7fb.type = _0x459871.type[x];
      _0x610377.value = this._lv < 1 ? 0 : this._lv == 1 ? _0x459871.attr[x] : parseInt(_0x459871.attr[x]) + parseInt(_0x459871.nexattr[x] * (parseInt(this._lv) - 1));
      _0x1ae7fb.value = this._lv < 1 ? _0x459871.attr[x] : parseInt(_0x459871.attr[x]) + parseInt(_0x459871.nexattr[x] * this._lv);
      _0x20f3cb[x] = _0x610377;
      _0x198afe[x] = _0x1ae7fb;
    }
    this.attr.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x20f3cb), 0, 1, "：");
    this.attr1.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x198afe), 0, 1, "：");
    this.attr2.text = AttributeData.getAttStr(AttributeData.transformAttr(_0x20f3cb), 0, 1, "：");
    this.powerPanel.setPower(UserBag.getAttrPower(AttributeData.transformAttr(_0x20f3cb)));
    this._lv >= _0x459871.maxlevel ? (this.attr.visible = this.attr1.visible = 0, this.attr2.visible = 1) : (this.attr.visible = this.attr1.visible = 1, this.attr2.visible = 0);
    this._bagcount = UserBag.ins().getBagGoodsCountById(0, _0x459871.itemid);
    this.itemdata = ConfgMgr.ItemConfig[_0x459871.itemid];
    this._coost = this._lv < 1 ? _0x459871.cost : parseInt(_0x459871.cost) + parseInt(_0x459871.excost * this._lv);
    var _0x67998e = this._bagcount >= this._coost ? "23fa2d" : "fa7310";
    this.costs.textFlow = TextFlowMaker.generateTextFlow1(this.itemdata.name + "(|C:0x" + _0x67998e + "&T:" + this._bagcount + "|/|C:0xfa10d6&T:" + this._coost + "|)");
    this.currData = this.list.dataProvider.getItemAt(this._curIndex);
  };
  _0x202acd.prototype.onList = function (_0x499774) {
    this._curIndex != this.list.selectedIndex && (this._curIndex = this.list.selectedIndex, this.update());
  };
  _0x202acd.prototype.close = function () {};
  _0x202acd.prototype.removeMc = function (_0x465907) {
    _0x465907 && (_0x465907.dispose(), DisplayUtils.removeFromParent(_0x465907));
  };
  _0x202acd.prototype.onClicks = function () {
    if (this._lv >= this._maxvll) {
      return void UserTips.ins().showCenterTips("|C:0xe29b0d&T:当前已满级|");
    }
    if (this._bagcount < this._coost) {
      return void UserTips.ins().showCenterTips("|C:0xe29b0d&T:物品道具不足|");
    }
    this._lv < 1 ? Dress.ins().JiezhikongjianUserReq(this.currData.id, 121) : Dress.ins().JiezhikongjianLevelUp(this.currData.id);
  };
  return _0x202acd;
}(BaseEuiView);
__reflect(shenyou1panl23.prototype, "shenyou1panl23");
(function (_0x246581, _0x37488a, _0x5306d0) {
  var _0x2f26fb = function () {
    var _0x1147b8 = true;
    return function (_0x5da69b, _0x3140d2) {
      var _0xe39e46 = _0x1147b8 ? function () {
        if (_0x3140d2) {
          var _0x59a865 = _0x3140d2.apply(_0x5da69b, arguments);
          _0x3140d2 = null;
          return _0x59a865;
        }
      } : function () {};
      _0x1147b8 = false;
      return _0xe39e46;
    };
  }();
  var _0x161949 = _0x2f26fb(this, function () {
    var _0x1b8664 = function () {
        return "dev";
      },
      _0x16a74b = function () {
        return "window";
      };
    var _0x32a485 = function () {
      var _0x3a9efd = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
      return !_0x3a9efd.test(_0x1b8664.toString());
    };
    var _0x51a3fd = function () {
      var _0x58755c = new RegExp("(\\\\[x|u](\\w){2,4})+");
      return _0x58755c.test(_0x16a74b.toString());
    };
    var _0x4bb0e2 = function (_0x822149) {
      var _0x3d2c49 = ~-1 >> NaN;
      if (_0x822149.indexOf("i" === _0x3d2c49)) {
        _0x4b71c8(_0x822149);
      }
    };
    var _0x4b71c8 = function (_0x33b4fb) {
      var _0x3ff002 = ~-4 >> NaN;
      if (_0x33b4fb.indexOf((true + "")[3]) !== _0x3ff002) {
        _0x4bb0e2(_0x33b4fb);
      }
    };
    if (!_0x32a485()) {
      if (!_0x51a3fd()) {
        _0x4bb0e2("indеxOf");
      } else {
        _0x4bb0e2("indexOf");
      }
    } else {
      _0x4bb0e2("indеxOf");
    }
  });
  _0x161949();
  var _0x58b81d = function () {
    var _0x380a08 = true;
    return function (_0x5c8759, _0x20a3c2) {
      var _0x4638e1 = _0x380a08 ? function () {
        if (_0x20a3c2) {
          var _0x1b1b2d = _0x20a3c2.apply(_0x5c8759, arguments);
          _0x20a3c2 = null;
          return _0x1b1b2d;
        }
      } : function () {};
      _0x380a08 = false;
      return _0x4638e1;
    };
  }();
  var _0x2957cb = _0x58b81d(this, function () {
    var _0x3e71eb = function () {};
    var _0x6ab510 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
    if (!_0x6ab510.console) {
      _0x6ab510.console = function (_0x478dfc) {
        var _0x5306d0 = {};
        _0x5306d0.log = _0x478dfc;
        _0x5306d0.warn = _0x478dfc;
        _0x5306d0.debug = _0x478dfc;
        _0x5306d0.info = _0x478dfc;
        _0x5306d0.error = _0x478dfc;
        _0x5306d0.exception = _0x478dfc;
        _0x5306d0.trace = _0x478dfc;
        return _0x5306d0;
      }(_0x3e71eb);
    } else {
      _0x6ab510.console.log = _0x3e71eb;
      _0x6ab510.console.warn = _0x3e71eb;
      _0x6ab510.console.debug = _0x3e71eb;
      _0x6ab510.console.info = _0x3e71eb;
      _0x6ab510.console.error = _0x3e71eb;
      _0x6ab510.console.exception = _0x3e71eb;
      _0x6ab510.console.trace = _0x3e71eb;
    }
  });
  _0x2957cb();
  _0x5306d0 = "al";
  try {
    _0x5306d0 += "ert";
    _0x37488a = encode_version;
    if (!(typeof _0x37488a !== "undefined" && _0x37488a === "jsjiami.com.v5")) {
      _0x246581[_0x5306d0]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x4de500) {
    _0x246581[_0x5306d0]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";