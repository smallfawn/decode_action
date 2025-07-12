//Sat Jul 12 2025 04:00:31 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var peishirukou = function (_0x9e3181) {
  function _0x353191(_0xa1e70e, _0x1c3215) {
    var _0x1c6630 = _0x9e3181.call(this, _0xa1e70e, _0x1c3215) || this;
    _0x1c6630.showMessage = [UserZs.ins().postZsData];
    _0x1c6630.updateMessage = [KFBattleRedPoint.ins().postRedPoint, DevildomRedPoint.ins().postRedPoint, KfArenaRedPoint.ins().postRedPoint];
    return _0x1c6630;
  }
  __extends(_0x353191, _0x9e3181);
  _0x353191.prototype.checkShowIcon = function () {
    {
      var _0x23c4af = KFBossSys.ins().isOpen();
      return _0x23c4af;
    }
  };
  _0x353191.prototype.checkShowRedPoint = function () {
    {
      return KFBattleRedPoint.ins().redPoint || DevildomRedPoint.ins().redPoint || KfArenaRedPoint.ins().redpoint;
    }
  };
  _0x353191.prototype.tapExecute = function () {
    ViewManager.ins().open(juesepeishizbyewanchupin);
  };
  return _0x353191;
}(RuleIconBase);
__reflect(peishirukou.prototype, "peishirukou");
var juesepeishizbyewanchupin = function (_0x501ee6) {
  function _0x260abc() {
    {
      var _0x5d5f56 = _0x501ee6.call(this) || this;
      _0x5d5f56.roleIndex = 0;
      _0x5d5f56.oldIndex = 0;
      _0x5d5f56.roleSelectVis = true;
      _0x5d5f56.skinName = "juesepeishiskin";
      _0x5d5f56.isTopLevel = true;
      _0x5d5f56.addExclusionWin(egret.getQualifiedClassName(SmeltEquipTotalWin));
      return _0x5d5f56;
    }
  }
  __extends(_0x260abc, _0x501ee6);
  _0x260abc.prototype.initUI = function () {};
  _0x260abc.prototype.open = function () {
    {
      this.addTouchEvent(this.closeBtn, this.onClick);
      _0x501ee6[0] ? this.oldIndex = this.tab.selectedIndex = this.viewStack.selectedIndex = _0x501ee6[0] : this.oldIndex = this.tab.selectedIndex = this.viewStack.selectedIndex = 0;
      this.addTouchEvent(this, this.onClick);
      this.addChangingEvent(this.tab, this.checkIsOpen);
      this.setOpenIndex(0);
    }
  };
  _0x260abc.prototype.close = function () {
    for (var _0x10dc05 = [], _0xbe9fd3 = 0; _0xbe9fd3 < arguments.length; _0xbe9fd3++) {
      _0x10dc05[_0xbe9fd3] = arguments[_0xbe9fd3];
    }
    var _0x47baa4 = ViewManager.ins().getView(UIView2);
    if (_0x47baa4) {
      {
        _0x47baa4.closeNav(UIView2.NAV_ROLE);
      }
    }
    for (var _0x3ecd2f = this.viewStack.numChildren, _0x412f59 = 0; _0x3ecd2f > _0x412f59; _0x412f59++) {
      this.viewStack.getChildAt(_0x412f59) instanceof eui.Group || this.viewStack.getChildAt(_0x412f59).close();
    }
  };
  _0x260abc.prototype.checkIsOpen = function (_0x292458) {
    this.setOpenIndex(this.tab.selectedIndex);
    this.viewStack.selectedIndex = this.tab.selectedIndex;
    this.viewStack.getElementAt(this.oldIndex).close();
  };
  _0x260abc.prototype.setOpenIndex = function (_0x2e030b) {
    if (this.oldIndex && 1 == this.oldIndex && this.oldIndex != _0x2e030b && this.getWingPanelInfo()) {
      this.doOpenHintWin(1, this.tab.selectedIndex);
      return void (this.tab.selectedIndex = this.oldIndex);
    }
    switch (_0x2e030b) {
      case 0:
        this.XuemaiPanel.open();
        break;
      case 1:
        this.HunhuanEquipPanel.open();
    }
  };
  _0x260abc.prototype.onClick = function (_0x11c716) {
    {
      switch (_0x11c716.target) {
        case this.closeBtn:
        case this.closeBtn0:
          ViewManager.ins().close(this);
      }
    }
  };
  return _0x260abc;
}(BaseEuiView);
__reflect(juesepeishizbyewanchupin.prototype, "juesepeishizbyewanchupin");
ViewManager.ins().reg(juesepeishizbyewanchupin, LayerManager.UI_Main);
var XuemaiPanel = function (_0x28f9a3) {
  function _0x13dbbb() {
    {
      var _0x2d0098 = _0x28f9a3.call(this) || this;
      _0x2d0098._cost = 0;
      _0x2d0098.isTopLevel = true;
      _0x2d0098.skinName = "Xuemaiskin";
      return _0x2d0098;
    }
  }
  __extends(_0x13dbbb, _0x28f9a3);
  _0x13dbbb.prototype.init = function () {};
  _0x13dbbb.prototype.open = function () {
    {
      this.roleSelect.setCurRole(this.curRole);
      this.addChangeEvent(this.roleSelect, this.sonChange);
      this.roleSelect.parent.touchEnabled = true;
      SubRoles.ins().getSubRoleByIndex(0);
      this.roleSelect.setCurRole(0);
      this.observe(Dress.ins().postDressInfo, this.edata);
      this.observe(GameLogic.ins().postSubRoleChange, this.getpassInfo);
      this.observe(UserBag.ins().postItemAdd, this.edata);
      this.observe(UserBag.ins().postItemDel, this.edata);
      this.observe(UserBag.ins().postItemCountChange, this.edata);
      this.addTouchEvent(this.item0, this.onlikes);
      this.addTouchEvent(this.item1, this.onlikes);
      this.addTouchEvent(this.item2, this.onlikes);
      this.addTouchEvent(this.item3, this.onlikes);
      this.addTouchEvent(this.item4, this.onlikes);
      this.addTouchEvent(this.item5, this.onlikes);
      this.addTouchEvent(this.item6, this.onlikes);
      this.addTouchEvent(this.item7, this.onlikes);
      this.addTouchEvent(this.upGradeBtn, this.closeMenu);
      this._curRole = 0;
      this._indexid = 0;
      this.edata();
    }
  };
  _0x13dbbb.prototype.close = function (_0x51b6cf) {};
  _0x13dbbb.prototype.sonChange = function (_0x2c17b3) {
    this._curRole = this.roleSelect.getCurRole();
    this.edata();
  };
  _0x13dbbb.prototype.Bsdate = function () {
    {
      this.curRole = this.roleSelect.getCurRole();
      var _0x33df57 = Dress.ins();
      this.listInfo = [];
      for (var _0x146c64 in ConfgMgr.hatzgnyijhsjconfig) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == ConfgMgr.hatzgnyijhsjconfig[_0x146c64].juesezhiye) {
        var _0x23960b = new DressItemInfo();
        var _0x2b2370 = ConfgMgr.hatzgnyijhsjconfig[_0x146c64];
        var _0x107523 = _0x2b2370.id;
        if (_0x33df57.timeInfo[_0x107523]) {
          {
            _0x23960b.lv = _0x33df57.timeInfo[_0x107523].lv;
          }
        } else {
          _0x23960b.lv = 0;
        }
        _0x23960b.id = _0x107523;
        _0x23960b.job = _0x2b2370.juesezhiye;
        this.listInfo.push(_0x23960b);
      }
      return this.listInfo;
    }
  };
  _0x13dbbb.prototype.getpassInfo = function () {};
  _0x13dbbb.prototype.edata = function (_0x325aa1) {
    {
      var _0x4eb31f = this.Bsdate();
      var _0x31755c = 0;
      var _0x2eec29 = ConfgMgr.Xuemaiupconfig;
      for (x = 0; x < _0x4eb31f.length; x++) {
        {
          var _0x55c65b = _0x4eb31f[x].lv;
          this["xuemaiMC" + x] || (this["xuemaiMC" + x] = new MovieClip(), this["xuemaiMC" + x].scaleX = this["xuemaiMC" + x].scaleY = 1, this["xuemaiMC" + x].x = -60, this["xuemaiMC" + x].y = -55);
          this["xuemaiMC" + x].playFile(RES_DIR_EFF + "kuangbao" + x, -1);
          this["item" + x].equip.parent.addChild(this["xuemaiMC" + x]);
          if (_0x55c65b < 1) {
            {
              this["xuemaiMC" + x].filters = [FilterUtil.grayFilter];
            }
          } else {
            this["xuemaiMC" + x].filters = null;
          }
          this["item" + x].redPoint.visible = 0;
          this["item" + x].isSelected.visible = 0;
          if (x == this._indexid) {
            var _0x12678a = ["|C:0x53FF53&T:卍█卧龙出世█卐冰霜定乾坤Ω剑|", "|C:0x53FF53&T:卍█卧龙出世█卐冰霜定乾坤Ω甲|", "|C:0x53FF53&T:卍█卧龙出世█卐冰霜定乾坤Ω盔|", "|C:0x53FF53&T:卍█卧龙出世█卐冰霜定乾坤Ω链|", "|C:0x53FF53&T:卍█卧龙出世█卐冰霜定乾坤Ω镯|", "|C:0x53FF53&T:卍█卧龙出世█卐冰霜定乾坤Ω带|", "|C:0x53FF53&T:卍█卧龙出世█卐冰霜定乾坤Ω戒|", "|C:0x53FF53&T:卍█卧龙出世█卐冰霜定乾坤Ω靴|"];
            this.xmlv.textFlow = TextFlowMaker.generateTextFlow1(_0x12678a[x] + "|C:0xB766AD&T: Lv: " + _0x55c65b + "|");
            this["item" + x].isSelected.visible = 1;
            var _0x4721dc = _0x2eec29[x + 1][_0x55c65b];
            var _0x46cdd7 = _0x2eec29[x + 1][_0x55c65b + 1];
            this.attr0.text = this.getattrlv(_0x4721dc.attr);
            var _0x31755c = parseInt(_0x31755c) + UserBag.getAttrPower(AttributeData.transformAttr(_0x2eec29[x + 1][_0x55c65b].attr));
            if (_0x46cdd7) {
              {
                this.addAttr0.text = this.getattrlv(_0x46cdd7.attr);
                this.addAttr0.visible = 1;
                this.upGradeBtn.visible = this.costGroup.visible = 1;
                this.nexmanlv.visible = 0;
                this._lv = _0x55c65b;
                this._item = _0x46cdd7.itemid;
                this._count = _0x46cdd7.count;
                this._num = UserBag.ins().getBagGoodsCountById(0, this._item);
                this.icon.source = ConfgMgr.ItemConfig[this._item].icon + "_png";
                this.countLabel.text = ConfgMgr.ItemConfig[this._item].name + "(" + this._num + "/" + this._count + ")";
                this._openid = _0x4eb31f[x].id;
                _0x55c65b < 1 ? this.upGradeBtn.label = "激  活" : this.upGradeBtn.label = "进  阶";
                this._num < this._count ? this.countLabel.textColor = "0xf58220" : this.countLabel.textColor = "0xff0012";
              }
            } else {
              this.upGradeBtn.visible = this.costGroup.visible = this.addAttr0.visible = 0;
              this.nexmanlv.visible = 1;
            }
            this.powerPanel.setPower(_0x31755c);
          }
        }
      }
    }
  };
  _0x13dbbb.prototype.getattrlv = function (_0x35686f) {
    {
      var _0x365f8f = AttributeData.getAttStr(AttributeData.transformAttr(_0x35686f), 0, 1, ":");
      return _0x365f8f;
    }
  };
  _0x13dbbb.prototype.getattrnexlv = function (_0x9088a0, _0x505e51) {
    {
      var _0x18e5e7 = 0;
      if (_0x9088a0[_0x18e5e7].type == _0x505e51[_0x18e5e7].type && _0x9088a0[_0x18e5e7].value != _0x505e51[_0x18e5e7].value) {
        {
          var _0x4ea98c = _0x9088a0[_0x18e5e7].value;
          var _0x35cd82 = _0x505e51[_0x18e5e7].value;
          var _0x1ada9c = _0x35cd82 - _0x4ea98c;
          var _0xbe48e1 = _0x9088a0[_0x18e5e7].type;
          var _0x299b6d = this.Getattrsuanshu(_0x1ada9c, _0xbe48e1);
          return _0x299b6d;
        }
      } else {
        {
          return 0;
        }
      }
    }
  };
  _0x13dbbb.prototype.Getattrsuanshu = function (_0x4d7f7f, _0x4b660d) {
    if (_0x4b660d == 11) {
      var _0x545791 = _0x4d7f7f / 100 + "%";
    } else {
      if (_0x4b660d == 12) {
        var _0x1ef1e5 = _0x4d7f7f / 100;
        var _0x545791 = _0x1ef1e5.toFixed(1) + "%";
      } else {
        {
          var _0x545791 = _0x4d7f7f;
        }
      }
    }
    return _0x545791;
  };
  _0x13dbbb.prototype.getattrnewnum = function (_0x2bef96) {};
  _0x13dbbb.prototype.closeMenu = function (_0x1aec17) {
    if (this._num < this._count) {
      return void UserTips.ins().showTips("|C:0xFFFF00&T:  物品道具不足！！！！！！|");
    }
    this._lv < 1 ? Dress.ins().JiezhikongjianUserReq(this._openid, 5) : Dress.ins().JiezhikongjianLevelUp(this._openid);
  };
  _0x13dbbb.prototype.getBaolv = function (_0x138aef) {
    {
      var _0x11bbcd = this.Bsdate();
      var _0x7d4d22 = _0x11bbcd[_0x138aef].lv;
      return _0x7d4d22;
    }
  };
  _0x13dbbb.prototype.onlikes = function (_0x14b872) {
    {
      SoundManager.ins().playEffect(SoundUtil.WINDOW);
      switch (_0x14b872.currentTarget) {
        case this.item0:
          this._indexid = 0;
          this.edata();
          break;
        case this.item1:
          this._indexid = 1;
          this.edata();
          break;
        case this.item2:
          this._indexid = 2;
          this.edata();
          break;
        case this.item3:
          this._indexid = 3;
          this.edata();
          break;
        case this.item6:
          this._indexid = 6;
          this.edata();
          break;
        case this.item7:
          this._indexid = 7;
          this.edata();
          break;
        case this.item4:
          this._indexid = 4;
          this.edata();
          break;
        case this.item5:
          this._indexid = 5;
          this.edata();
      }
    }
  };
  _0x13dbbb.prototype.closeMenus = function (_0x51f84e) {
    ViewManager.ins().close(this);
    SoundManager.ins().playEffect(SoundUtil.WINDOW);
  };
  return _0x13dbbb;
}(BaseView);
__reflect(XuemaiPanel.prototype, "XuemaiPanel");
var HunhuanEquipPanel = function (_0x4b1bed) {
  function _0x1d475b() {
    {
      var _0x2bd99d = _0x4b1bed.call(this) || this;
      _0x2bd99d._cost = 0;
      _0x2bd99d.isTopLevel = true;
      _0x2bd99d.skinName = "HunhuanEquipSkin";
      return _0x2bd99d;
    }
  }
  __extends(_0x1d475b, _0x4b1bed);
  _0x1d475b.prototype.init = function () {};
  _0x1d475b.prototype.open = function () {
    this.ringEff || (this.ringEff = new MovieClip());
    this.roleSelect.setCurRole(this.curRole);
    this.addChangeEvent(this.roleSelect, this.sonChange);
    this.roleSelect.parent.touchEnabled = true;
    SubRoles.ins().getSubRoleByIndex(0);
    this.roleSelect.setCurRole(0);
    this.observe(Dress.ins().postDressInfo, this.edata);
    this.observe(GameLogic.ins().postSubRoleChange, this.getDressInfo);
    this.observe(UserBag.ins().postItemAdd, this.edata);
    this.observe(UserBag.ins().postItemDel, this.edata);
    this.observe(UserBag.ins().postItemCountChange, this.edata);
    this.observe(GameLogic.ins().postSubRoleChange, this.getpassInfo);
    this.addTouchEvent(this.item0, this.onlikes);
    this.addTouchEvent(this.item1, this.onlikes);
    this.addTouchEvent(this.item2, this.onlikes);
    this.addTouchEvent(this.item3, this.onlikes);
    this.addTouchEvent(this.item4, this.onlikes);
    this.addTouchEvent(this.item5, this.onlikes);
    this.addTouchEvent(this.upGradeBtn, this.closeMenu);
    this._curRole = 0;
    this._indexid = 0;
    this.edata();
  };
  _0x1d475b.prototype.close = function (_0x4a2fb0) {};
  _0x1d475b.prototype.sonChange = function (_0x49374f) {
    this._curRole = this.roleSelect.getCurRole();
    this.edata();
  };
  _0x1d475b.prototype.Bsdate = function () {
    this.curRole = this.roleSelect.getCurRole();
    var _0x402a45 = Dress.ins();
    this.listInfo = [];
    for (var _0x51dc8d in ConfgMgr.miaoshazbsjjhconfig) if (SubRoles.ins().getSubRoleByIndex(this.curRole).job == ConfgMgr.miaoshazbsjjhconfig[_0x51dc8d].sanzhiyepdrole) {
      var _0x13303c = new DressItemInfo();
      var _0x3faf4e = ConfgMgr.miaoshazbsjjhconfig[_0x51dc8d];
      var _0x189ddf = _0x3faf4e.id;
      if (_0x402a45.timeInfo[_0x189ddf]) {
        {
          _0x13303c.lv = _0x402a45.timeInfo[_0x189ddf].lv;
        }
      } else {
        _0x13303c.lv = 0;
      }
      _0x13303c.id = _0x189ddf;
      _0x13303c.job = _0x3faf4e.sanzhiyepdrole;
      this.listInfo.push(_0x13303c);
    }
    return this.listInfo;
  };
  _0x1d475b.prototype.getpassInfo = function () {};
  _0x1d475b.prototype.openeff = function (_0x53e6b9) {
    {
      this.removeMc(this.ringEff);
      this.ringEff.scaleX = this.ringEff.scaleY = 1.2;
      this.ringEff.x = 50;
      this.ringEff.y = -150;
      this.HHEff.parent && this.HHEff.parent.addChild(this.ringEff);
      this.ringEff.playFile(RES_DIR_EFF + "hunhuans00" + (_0x53e6b9 + 1), -1);
    }
  };
  _0x1d475b.prototype.removeMc = function (_0x50e1f4) {
    _0x50e1f4 && (_0x50e1f4.dispose(), DisplayUtils.removeFromParent(_0x50e1f4));
  };
  _0x1d475b.prototype.edata = function (_0x44a4b8) {
    var _0x547dfa = this.Bsdate();
    var _0x3c2928 = 0;
    var _0xb412d8 = ConfgMgr.Hunhuanupconfig;
    for (x = 0; x < _0x547dfa.length; x++) {
      {
        this._delv = _0x547dfa[x].lv;
        this._deid = _0x547dfa[x].id;
        var _0x268a91 = _0x547dfa[x].lv;
        this["item" + x].Icon.source = "hunhuan_n" + [x + 1] + "_png";
        this["item" + x].level.text = "\n\n\n\nLv: " + _0x268a91;
        this["item" + x].isSelected.visible = 0;
        if (x == this._indexid) {
          this["item" + x].isSelected.visible = 1;
          var _0x1c0733 = _0xb412d8[x + 1][_0x268a91];
          var _0x28db4c = _0xb412d8[x + 1][_0x268a91 + 1];
          var _0x3c2928 = parseInt(_0x3c2928) + UserBag.getAttrPower(AttributeData.transformAttr(_0xb412d8[x + 1][_0x268a91].attr));
          this.attr0.text = this.getattrlv(_0x1c0733.attr);
          if (_0x28db4c) {
            this.addAttr0.text = this.getattrlv(_0x28db4c.attr);
            this.addAttr0.visible = 1;
            this.upGradeBtn.visible = this.costGroup.visible = 1;
            this.nexmanlv.visible = 0;
            this._lv = _0x268a91;
            this._item = _0x28db4c.itemid;
            this._count = _0x28db4c.count;
            this._num = UserBag.ins().getBagGoodsCountById(0, this._item);
            this.icon.source = ConfgMgr.ItemConfig[this._item].icon + "_png";
            this.countLabel.text = ConfgMgr.ItemConfig[this._item].name + "(" + this._num + "/" + this._count + ")";
            this._openid = _0x547dfa[x].id;
            _0x268a91 < 1 ? this.upGradeBtn.label = "激  活" : this.upGradeBtn.label = "升  级";
            this._num < this._count ? this.countLabel.textColor = "0xd1c28f" : this.countLabel.textColor = "0xff0012";
          } else {
            this.upGradeBtn.visible = this.costGroup.visible = this.addAttr0.visible = 0;
            this.nexmanlv.visible = 1;
          }
          this.openeff(x);
          this.powerPanel.setPower(_0x3c2928);
        }
      }
    }
  };
  _0x1d475b.prototype.getattrlv = function (_0x39858e) {
    {
      var _0x3e0cdf = AttributeData.getAttStr(AttributeData.transformAttr(_0x39858e), 0, 1, ": ");
      return _0x3e0cdf;
    }
  };
  _0x1d475b.prototype.getattrnexlv = function (_0x5b3cfe, _0x4458b3) {
    var _0x552601 = 0;
    if (_0x5b3cfe[_0x552601].type == _0x4458b3[_0x552601].type && _0x5b3cfe[_0x552601].value != _0x4458b3[_0x552601].value) {
      var _0x475de2 = _0x5b3cfe[_0x552601].value;
      var _0x11dc8f = _0x4458b3[_0x552601].value;
      var _0x314c04 = _0x11dc8f - _0x475de2;
      var _0x2afa98 = _0x5b3cfe[_0x552601].type;
      var _0x13d2af = this.Getattrsuanshu(_0x314c04, _0x2afa98);
      return _0x13d2af;
    } else {
      return 0;
    }
  };
  _0x1d475b.prototype.Getattrsuanshu = function (_0x144e5, _0x1cdafb) {
    if (_0x1cdafb == 7) {
      var _0x192dba = _0x144e5 / 100 + "%";
    } else {
      if (_0x1cdafb == 20) {
        var _0x1fbd04 = _0x144e5 / 100;
        var _0x192dba = _0x1fbd04.toFixed(1) + "%";
      } else {
        var _0x192dba = _0x144e5;
      }
    }
    return _0x192dba;
  };
  _0x1d475b.prototype.getattrnewnum = function (_0x13dd78) {};
  _0x1d475b.prototype.closeMenu = function (_0x3f5721) {
    if (this._num < this._count) {
      return void UserTips.ins().showTips("|C:0xFFFF00&T:  物品道具不足|");
    }
    this._lv < 1 ? Dress.ins().JiezhikongjianUserReq(this._openid, 5) : Dress.ins().JiezhikongjianLevelUp(this._openid);
  };
  _0x1d475b.prototype.getBaolv = function (_0x953188) {
    var _0x1c23af = this.Bsdate();
    var _0x184837 = _0x1c23af[_0x953188].lv;
    return _0x184837;
  };
  _0x1d475b.prototype.onlikes = function (_0x1bfa60) {
    {
      SoundManager.ins().playEffect(SoundUtil.WINDOW);
      switch (_0x1bfa60.currentTarget) {
        case this.item0:
          this._indexid = 0;
          this.edata();
          break;
        case this.item1:
          this._indexid = 1;
          this.edata();
          break;
        case this.item2:
          this._indexid = 2;
          this.edata();
          break;
        case this.item3:
          this._indexid = 3;
          this.edata();
          break;
        case this.item4:
          this._indexid = 4;
          this.edata();
          break;
        case this.item5:
          this._indexid = 5;
          this.edata();
      }
    }
  };
  _0x1d475b.prototype.closeMenus = function (_0x2f7fb3) {
    ViewManager.ins().close(this);
    SoundManager.ins().playEffect(SoundUtil.WINDOW);
  };
  return _0x1d475b;
}(BaseView);
__reflect(HunhuanEquipPanel.prototype, "HunhuanEquipPanel");
var rrVVVsoushouIconRule = function (_0x179ca7) {
  function _0x404818(_0x30bc69, _0x1967af) {
    var _0x2e4cca = _0x179ca7.call(this, _0x30bc69, _0x1967af) || this;
    _0x2e4cca.showMessage = [UserZs.ins().postZsData];
    _0x2e4cca.updateMessage = [KFBattleRedPoint.ins().postRedPoint, DevildomRedPoint.ins().postRedPoint, KfArenaRedPoint.ins().postRedPoint];
    return _0x2e4cca;
  }
  __extends(_0x404818, _0x179ca7);
  _0x404818.prototype.checkShowIcon = function () {
    return 1;
  };
  _0x404818.prototype.checkShowRedPoint = function () {
    {
      return 0;
    }
  };
  _0x404818.prototype.getEffName = function (_0x4bad9c) {
    this.effX = 38;
    this.effY = 38;
    return "actIconCircle";
  };
  _0x404818.prototype.tapExecute = function () {
    ViewManager.ins().open(SuperVipWin7);
  };
  return _0x404818;
}(RuleIconBase);
__reflect(rrVVVsoushouIconRule.prototype, "rrVVVsoushouIconRule");
var SuperVipWin7 = function (_0x33d317) {
  function _0x331da2() {
    return _0x33d317.call(this) || this;
  }
  __extends(_0x331da2, _0x33d317);
  _0x331da2.prototype.initUI = function () {
    _0x33d317.prototype.initUI.call(this);
    this.skinName = "<?xml version='1.0' encoding='utf-8'?>\r\n<e:Skin class=\"gsvipSkin7\" currentState=\"default\" xmlns:e=\"http://ns.egret.com/eui\"\r\n        xmlns:w=\"http://ns.egret.com/wing\" xmlns:euiextension=\"euiextension.*\" xmlns:ns1=\"*\" height=\"930\" width=\"580\"    states=\"maoer,default,sswxfbxzf\" >\r\n\t<e:Rect id=\"bgClose\" left=\"0\" right=\"0\" top=\"0\" bottom=\"0\" fillAlpha=\"0.7\"/>\r\n\t<e:Group id=\"anigroup\"  horizontalCenter=\"0\" verticalCenter=\"0\" width=\"488\" height=\"600\">\r\n\t\t<e:Group id=\"tipGroup\" touchChildren=\"false\" touchEnabled=\"false\" horizontalCenter=\"0\" bottom=\"-40\">\r\n\t\t\t<e:Image source=\"bantoutiaobg\" height=\"30\" horizontalCenter=\"0\" scale9Grid=\"128,2,15,41\" width=\"300\"/>\r\n\t\t\t<e:Label text=\"点击空白区域关闭窗口\" size=\"20\" bold=\"true\" textColor=\"0x7E6437\" y=\"5\" horizontalCenter=\"0\"/>\r\n\t\t\t<e:Button id=\"closeBtn1\" y=\"-17\" skinName=\"Btn0Skin\" right=\"-10\" x=\"188\" visible=\"false\"/>\r\n\t\t</e:Group>\r\n\t\t<e:Image scale9Grid=\"18,14,12,20\" source=\"tongyongkuang3bg\"     top=\"0\" bottom=\"0\" left=\"0\" right=\"0\"/>\r\n\t\t<e:Image source=\"tongyongkuang3tou\" scale9Grid=\"66,0,271,47\"   left=\"0\" right=\"0\"/>\r\n\t\t<e:Image scale9Grid=\"66,0,271,47\" source=\"biaoti_gs_png\" horizontalCenter=\"0\"/>\r\n\t\t<e:Image   source=\"gsvipbg2_png\" top=\"48\" bottom=\"6\" left=\"6\" right=\"6\"/>\r\n\t\t<e:Image id=\"headImg\" y=\"66\" width=\"230\" height=\"230\" horizontalCenter=\"-98\" source=\"gshead256_jpg\"/>\r\n\t\t<e:Image width=\"250\" height=\"250\" y=\"56\" source=\"touxiangkuang3\" scale9Grid=\"32,28,1,1\" horizontalCenter=\"-98\"/>\r\n\t\t<e:Image x=\"218\" y=\"52\" source=\"gstou0\"/>\r\n\t\t<e:Image x=\"6\" y=\"195\" source=\"gstou1\"/>\r\n\t\t<e:Image source=\"gshead\" x=\"60\" y=\"38\"/>\r\n\t\t<e:Image source=\"gshead\" x=\"6\" y=\"-13\" rotation=\"40\" width=\"40\" height=\"38\"/>\r\n\t\t<e:Image source=\"gshead\" x=\"30\" y=\"34\" width=\"30\" height=\"28\" rotation=\"10\"/>\r\n\t\t<e:Image source=\"gshead\" x=\"23\" y=\"67\" width=\"20\" height=\"20\" rotation=\"50\"/>\r\n\t\t<e:Button id=\"closeBtn\" skinName=\"Btn0Skin\" icon=\"chatclose\" right=\"0\"/>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\t\t<e:Group id=\"qq\" y=\"66\" x=\"287\">\r\n\t\t\t<e:Label text=\"\" size=\"20\" id=\"kfnamenel\" textColor=\"0xd1c28f\"/>\r\n\t\t\t<e:Image source=\"\" y=\"26\" id=\"kficons\" x=\"2\" includeIn=\"maoer,default\"/>\r\n\t\t\t<e:Label id=\"tag\" text=\"\" size=\"20\" y=\"29\" textColor=\"0xF8B141\" x=\"51\" includeIn=\"default,sswxfbxzf\" text.sswxfbxzf=\"\" size.sswxfbxzf=\"20\" x.sswxfbxzf=\"0\"/>\r\n\t\t\t<e:Label id=\"qqtxt\" text=\"\" size=\"24\" y=\"58\" textColor=\"0xf8b141\" x=\"26\"/>\r\n\r\n\t\t</e:Group>\r\n\r\n\r\n\r\n\t\t<e:Button id=\"copy\" label=\"\" skinName=\"Btn15Skin\" width=\"180\" height=\"50\" y=\"151\" x=\"281\" label.sswxfbxzf=\"\"/>\r\n\t\t<e:Group id=\"nopay0\" y=\"208\" x=\"286\" alpha=\"0\">\r\n\t\t\t<e:Label text=\"成为尊贵的超级会员\" size=\"18\" textColor=\"0xF8B141\"/>\r\n\t\t\t<e:Label y=\"22\" text=\"获取美女客服复制微信号\" size=\"18\" textColor=\"0xF8B141\" x=\"4\"/>\r\n\t\t\t<e:Button id=\"pey\" label=\"立刻充值\" skinName=\"Btn15Skin\" width=\"150\" height=\"50\" y=\"46\" x=\"6\"/>\r\n\t\t</e:Group>\r\n\r\n\r\n\t\t<e:Group y=\"316\" width=\"476\" x=\"6\">\r\n\t\t\t<e:Image scale9Grid=\"0,1,62,30\" source=\"gsbiaoti0\"/>\r\n\t\t\t<e:Image scale9Grid=\"0,1,62,30\" scaleX=\"-1\" source=\"gsbiaoti0\" right=\"0\"/>\r\n\t\t\t<e:Image y=\"4\" source=\"gsbiaoti2\" horizontalCenter=\"0\"/>\r\n\t\t</e:Group>\r\n\t\t<e:Group y=\"588\" width=\"476\" x=\"6\">\r\n\t\t\t<e:Image scale9Grid=\"0,1,62,30\" source=\"gsbiaoti0\" visible=\"false\"/>\r\n\t\t\t<e:Image scale9Grid=\"0,1,62,30\" scaleX=\"-1\" source=\"gsbiaoti0\" right=\"0\" visible=\"false\"/>\r\n\t\t\t<e:Image y=\"4\" horizontalCenter=\"0\" source=\"gsbiaoti3\" visible=\"false\"/>\r\n\t\t</e:Group>\r\n\t\t<e:Group y=\"348\" x=\"24\">\r\n\t\t\t<e:Group>\r\n\t\t\t\t<e:Image source=\"gsbiaoti1\"/>\r\n\t\t\t\t<e:Label y=\"5\" text=\"\" size=\"20\" textColor=\"0xf8b141\" id=\"tps1\" bold=\"true\" x=\"33\"/>\r\n\t\t\t\t<e:Image x=\"4\" y=\"2\" source=\"vip_v1_png\"/>\r\n\t\t\t</e:Group>\r\n\t\t\t<e:Label id=\"des0\" y=\"34\" text=\"\" size=\"18\" x=\"30\" textColor=\"0xd1c28f\"/>\r\n\t\t\t<e:Group y=\"60\">\r\n\t\t\t\t<e:Image source=\"gsbiaoti1\"/>\r\n\t\t\t\t<e:Label y=\"5\" text=\"\" id=\"tps2\" size=\"20\" textColor=\"0xF8B141\" bold=\"true\" x=\"33\"/>\r\n\t\t\t\t<e:Image x=\"4\" y=\"2\" source=\"vip_v2_png\"/>\r\n\t\t\t</e:Group>\r\n\t\t\t<e:Label id=\"des1\" y=\"94\" text=\"\" size=\"18\" x=\"30\" textColor=\"0xD1C28F\"/>\r\n\t\t\t<e:Group y=\"120\">\r\n\t\t\t\t<e:Image source=\"gsbiaoti1\"/>\r\n\t\t\t\t<e:Label y=\"5\" text=\"\" id=\"tps3\" size=\"20\" textColor=\"0xF8B141\" bold=\"true\" x=\"33\"/>\r\n\t\t\t\t<e:Image x=\"4\" y=\"2\" source=\"vip_v3_png\"/>\r\n\t\t\t</e:Group>\r\n\t\t\t<e:Label id=\"des2\" y=\"154\" text=\"\" size=\"18\" x=\"30\" textColor=\"0xD1C28F\"/>\r\n\t\t\t<e:Group y=\"180\">\r\n\t\t\t\t<e:Image source=\"gsbiaoti1\"/>\r\n\t\t\t\t<e:Label y=\"5\" text=\"\" id=\"tps4\" size=\"20\" textColor=\"0xF8B141\" bold=\"true\" x=\"33\"/>\r\n\t\t\t\t<e:Image x=\"4\" y=\"2\" source=\"vip_v4_png\"/>\r\n\t\t\t</e:Group>\r\n\t\t\t<e:Label id=\"des3\" y=\"214\" text=\"\" size=\"18\" x=\"30\" textColor=\"0xD1C28F\"/>\r\n\t\t</e:Group>\r\n\t\t<e:Group id=\"pay0\" y=\"626\" horizontalCenter=\"0\" visible.sswxfbxzf=\"false\" visible=\"false\">\r\n\t\t\t<e:Label text=\"您已成为最尊贵的超级会员\" size=\"22\" textColor=\"0xF8B141\" horizontalCenter=\"0\"/>\r\n\t\t\t<e:Label y=\"26\" text=\"立即添加专属VIP的微信号，享受美女客服最贴心的服务\" size=\"18\" textColor=\"0x2cc2f8\" horizontalCenter=\"0\" text.sswxfbxzf=\"立即添加专属VIP的微信号，享受美女客服最贴心的服务\"/>\r\n\t\t</e:Group>\r\n\t\t<e:Group id=\"nopay1\" y=\"626\" x=\"26\" visible=\"false\">\r\n\t\t\t<e:Label y=\"7\" text=\"充值达到2000元。\" size=\"18\" x=\"30\" textColor=\"0xD1C28F\" text.maoer=\"充值达到3000元。\"/>\r\n\r\n\t\t\t<e:Group>\r\n\r\n\r\n\t\t\t<e:Label y=\"150\" text=\"方法二：不限时间累计充值5000元。\" size=\"18\" textColor=\"0xD1C28F\" visible=\"false\"/>\r\n\t\t\t<e:layout>\r\n\t\t\t\t<e:VerticalLayout gap=\"10\"/>\r\n\t\t\t</e:layout>\r\n\t\t\t</e:Group>\r\n\t\t\t<e:Label id=\"cond1\" y=\"7\" text=\"（4990/5000）\" size=\"18\" x=\"310\" textColor=\"0xD1C28F\"/>\r\n\t\t\t<e:Group x=\"310\">\r\n\t\t\t\t<e:Label id=\"cond0\" y=\"30\" text=\"（0/2000）\" size=\"18\" textColor=\"0xD1C28F\" visible=\"false\"/>\r\n\r\n\r\n\t\t\t\t<e:Label id=\"cond2\" y=\"50\" text=\"（4000/5000）\" size=\"18\" x=\"20\" textColor=\"0xD1C28F\" visible=\"false\"/>\r\n\t\t\t\t<e:layout>\r\n\t\t\t\t<e:VerticalLayout gap=\"10\"/>\r\n\t\t\t\t</e:layout>\r\n\t\t\t</e:Group>\r\n\t\t</e:Group>\r\n\t\t<e:Group id=\"warnGroup\" x=\"289\" y=\"207\" width.sswxfbxzf=\"157\">\r\n\t\t\t<e:Label text=\"温馨提醒：\" textColor=\"0xff0000\" size=\"18\" width=\"169\" fontFamily=\"Microsoft YaHei\"/>\r\n\t\t\t<e:Label text=\"\" id=\"tips1\" x=\"1\" y=\"23\" size=\"16\" textColor=\"0xd1c28f\" fontFamily=\"Microsoft YaHei\" width.sswxfbxzf=\"157\" text.sswxfbxzf=\"添加客服QQ\\n领取超值豪礼！\"/>\r\n\t\t\t<e:layout>\r\n\t\t\t\t<e:VerticalLayout/>\r\n\t\t\t</e:layout>\r\n\t\t</e:Group>\r\n\r\n\r\n\r\n\t</e:Group>\r\n</e:Skin>";
    this.list && (this.list.itemRenderer = ItemBase);
    var _0x476a32 = ["gaore", "default"];
    this.validateNow();
  };
  _0x331da2.prototype.open = function () {
    this.addTouchEvent(this.closeBtn, this.onTap);
    this.addTouchEvent(this.bgClose, this.onTap);
    this.pey && this.addTouchEvent(this.pey, this.onTap);
    this.copy && this.addTouchEvent(this.copy, this.onTap);
    this.checkBoxAutoOpen && this.addTouchEvent(this.checkBoxAutoOpen, this.onCheckBoxAutoOpen);
    this.observe(UserVip.ins().postSuperVipInfo, this.initView);
    UserVip.ins().sendGetSuperVipInfo();
    this.initView();
  };
  _0x331da2.prototype.initView = function () {
    var _0x563f86 = ConfgMgr.meinvkefuconfig;
    this.qqtxt.text = ["lycq123888"];
    this.headImg.source = _0x563f86.icon;
    this.kficons.source = _0x563f86.kficon;
    this.copy.label = _0x563f86.desc6;
    this.kfnamenel.text = _0x563f86.desc8;
    this.tag.text = _0x563f86.desc7;
    this.tips1.text = _0x563f86.desc5;
    this.tps1.text = _0x563f86.desc1[0];
    this.tps2.text = _0x563f86.desc2[0];
    this.tps3.text = _0x563f86.desc3[0];
    this.tps4.text = _0x563f86.desc4[0];
    this.des0.text = _0x563f86.desc1[1];
    this.des1.text = _0x563f86.desc2[1];
    this.des2.text = _0x563f86.desc3[1];
    this.des3.text = _0x563f86.desc4[1];
  };
  _0x331da2.prototype.updateAward = function () {
    if (this.list) {
      var _0x176f6a = LocationProperty.superVipAward;
      if (_0x176f6a) {
        {
          var _0x1c5ee1 = _0x176f6a.split(/[:;]/);
          var _0x324926 = [];
          if (_0x1c5ee1.length > 1) {
            for (var _0x59621f = 0; _0x59621f < _0x1c5ee1.length; _0x59621f += 2) {
              var _0x4813c2 = new RewardData();
              _0x4813c2.id = +_0x1c5ee1[_0x59621f];
              _0x4813c2.type = ConfgMgr.ItemConfig[_0x4813c2.id] ? 1 : 0;
              _0x4813c2.count = +_0x1c5ee1[_0x59621f + 1] || 1;
              _0x324926.push(_0x4813c2);
            }
          }
          this.list.dataProvider = new eui.ArrayCollection(_0x324926);
        }
      } else {
        this.list.dataProvider = new eui.ArrayCollection();
      }
    }
  };
  _0x331da2.prototype.onTap = function (_0x461bc9) {
    {
      var _0x2ccd22 = _0x461bc9.currentTarget;
      switch (_0x2ccd22) {
        case this.closeBtn:
        case this.bgClose:
          ViewManager.ins().close(this);
          break;
        case this.pey:
          Recharge.ins().showRechargeType(RechargeShowType.TYPE2);
          ViewManager.ins().close(this);
          break;
        case this.copy:
          if (PfActivity.ins().copyMsgToBoard(this.qqtxt.text)) {
            UserTips.ins().showCenterTips("复制成功");
            return true;
          }
          window.prompt && (DeviceUtils.IsMobile ? window.prompt("请长按链接复制微信号：", this.qqtxt.text) : window.prompt("请复制微信号：", this.qqtxt.text));
      }
    }
  };
  _0x331da2.prototype.onCheckBoxAutoOpen = function () {
    {
      Setting.ins().setBitValue(ClientSetBit.superVipIsAutoOpen, this.checkBoxAutoOpen.selected ? 1 : 0);
    }
  };
  return _0x331da2;
}(BaseEuiView);
__reflect(SuperVipWin7.prototype, "SuperVipWin7");
ViewManager.ins().reg(SuperVipWin7, LayerManager.UI_Popup);
var puijinBossWin = function (_0x2c73a8) {
  function _0x28d6cd() {
    {
      var _0xf4c4a4 = _0x2c73a8.call(this) || this;
      _0xf4c4a4.floorArr = [];
      _0xf4c4a4.isTopLevel = true;
      _0xf4c4a4.skinName = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<e:Skin class=\"puijinBossSkin\" width=\"580\" height=\"930\" xmlns:e=\"http://ns.egret.com/eui\" xmlns:ns1=\"*\"\n        xmlns:w=\"http://ns.egret.com/wing\">\r\n<e:Group top=\"0\" width=\"580\" horizontalCenter=\"0\" bottom=\"0\">\n\t<e:Rect left=\"0\" right=\"0\" top=\"0\" bottom=\"0\" fillAlpha=\"0.6\" />\n\t<e:Image top=\"0\" bottom=\"0\" source=\"tongyongmianbanbg2\" width=\"580\" horizontalCenter=\"0\" scale9Grid=\"15,12,2,3\" />\n\t<e:Group width=\"556\" horizontalCenter=\"0\" bottom=\"58\">\n\t\t<e:Image source=\"bantoumingkuang4\" x=\"0\" top=\"0\" bottom=\"0\" width=\"278\" height=\"90\" />\n\t\t<e:Image source=\"bantoumingkuang4\" scaleX=\"-1\" right=\"0\" top=\"0\" bottom=\"0\" width=\"278\" height=\"90\" />\n\t</e:Group>\n\t<e:Image width=\"570\" horizontalCenter=\"0\" source=\"tongyongmianbanbg\" scale9Grid=\"19,12,14,25\" top=\"44\" bottom=\"120\" />\n\t<ns1:BaseComponent id=\"roleSelect\" y=\"0\" skinName=\"RoleSelectPanelSkin\" className=\"RoleSelectPanel\" width=\"580\"\n\t                   horizontalCenter=\"0\" currentState=\"nohead\" />\n\t<e:Image y=\"12\" left=\"65\" source=\"newdldldthh\" />\n\t<e:Button id=\"seeRule\" label=\"按钮\" icon=\"wenhao\" skinName=\"Btn0Skin\" horizontalCenter=\"-259\" y=\"5\" scaleX=\"0.9\"\n\t          scaleY=\"0.9\" visible=\"false\"/>\n\t<e:Image source=\"\" scaleX=\"-1\" anchorOffsetX=\"0\" width=\"410\" anchorOffsetY=\"0\"\n\t         height=\"447\"  horizontalCenter=\"69\" bottom=\"294\"/>\n\t<e:Image verticalCenter=\"-45\" source=\"dldlbgthh2\" left=\"13\" right=\"13\"/>\n\t<e:Group width=\"417\" height=\"279\" left=\"0\" bottom=\"126\">\n\t\t<e:Image x=\"0\" y=\"61\" source=\"\" width=\"417\" anchorOffsetY=\"0\" height=\"216\" scale9Grid=\"22,12,138,72\" />\n\t\t<e:Label id=\"isChallenge\" text=\"未满足开启条件\" x=\"117.98000000000002\" y=\"242.64999999999998\" size=\"16\" textColor=\"0xd20506\"\n\t\t         bold=\"true\" scaleX=\"1\" scaleY=\"1\" />\n\t\t<e:Label id=\"RemainCount\" text=\"剩余归属次数：\" bottom=\"130\" horizontalCenter=\"80\" size=\"16\" bold=\"true\" scaleX=\"1\" scaleY=\"1\" textColor=\"0x89713c\" />\n\t\t<e:Button id=\"challengeBtn\" label=\"挑 战\" icon=\"swjd_btn\" skinName=\"Btn23Skin\" bottom=\"23\" horizontalCenter=\"80\" />\n\t</e:Group>\r\n\t<ns1:BaseComponent id=\"siwangmc3\" skinName=\"effskillpos\" width=\"200\" height=\"150\" top=\"-50\" left=\"60\" scaleX=\"2.5\" scaleY=\"2.5\"/>\n\t<e:Group id=\"bossGroup\" width=\"200\" height=\"200\" left=\"210\" verticalCenter=\"-50\"/>\n\t<e:Scroller width=\"139\" bottom=\"175\" top=\"95\" right=\"4300000\">\n\t\t<e:List id=\"listBoss\" top=\"614\" anchorOffsetX=\"0\" anchorOffsetY=\"0\" itemRendererSkinName=\"shenshoubosslist\"\n\t\t        horizontalCenter=\"-207.5\" bottom=\"126\">\n\t\t\t<e:ArrayCollection>\n\t\t\t\t<e:Array>\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t\t<e:Object null=\"null\" />\n\t\t\t\t\t<e:Object null=\"null\" />\n\t\t\t\t\t<e:Object null=\"null\" />\n\t\t\t\t\t<e:Object null=\"null\" />\n\t\t\t\t\t<e:Object null=\"null\" />\n\t\t\t\t</e:Array>\n\t\t\t</e:ArrayCollection>\n\t\t\t<e:layout>\n\t\t\t\t<e:TileLayout verticalGap=\"6\" requestedColumnCount=\"1\" />\n\t\t\t</e:layout>\n\t\t</e:List>\n\t</e:Scroller>\r\n\t\t<e:Image source=\"teshuwenzibg\"  top=\"-5555\" x=\"70\" y=\"55\" scaleX=\"1.5\" scaleY=\"1.5\"/>\n\t\t<e:Label id=\"bossName\" text=\"暗殿：沙城之王(13转)\" width=\"370\" size=\"16\" textColor=\"0x9f500d\" bold=\"true\" horizontalCenter=\"0\" top=\"-7500000\" scaleX=\"1\" scaleY=\"1\" />\n\t<e:Image id=\"stateImage\" source=\"zdbossyijisha\" horizontalCenter=\"70\" verticalCenter=\"0\" />\r\n\t\t<e:Image source=\"niuquitemlongjiao\" left=\"100\" verticalCenter=\"72\" scaleX=\"1\" scale9Grid=\"187,4,4,24\"/>\r\n\t\t<e:Image source=\"shuxingbg\" left=\"35\" right=\"35\" verticalCenter=\"100\" bottom=\"285\"/>\n\t\t<e:List id=\"listItem\" itemRendererSkinName=\"ItemSkin\" horizontalCenter=\"0\" verticalCenter=\"130\" scaleX=\"0.8\"\n\t\t        scaleY=\"0.8\">\n\t\t\t<e:ArrayCollection>\n\t\t\t\t<e:Array>\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t</e:Array>\n\t\t\t</e:ArrayCollection>\n\t\t\t<e:layout>\n\t\t\t\t<e:HorizontalLayout gap=\"17\" />\n\t\t\t</e:layout>\n\t\t</e:List>\r\n\t<e:Group horizontalCenter=\"0\" verticalCenter=\"50\">\r\n\t\t<e:Image source=\"\"/>\r\n\t\t<e:Image x=\"31\" y=\"10\" source=\"\"/>\r\n\t\t<e:layout>\r\n\t\t<e:HorizontalLayout gap=\"-5\"/>\r\n\t\t</e:layout>\r\n\t</e:Group>\r\n\t\t<e:Label id=\"countdown\" text=\"05:59:24后刷新\" size=\"16\" textColor=\"0x00ff00\" horizontalCenter=\"0\" top=\"515\"/>\r\n\t<e:Group x=\"441\" y=\"0\">\r\n\t\t<e:Image source=\"\" x=\"64\" y=\"60\"/>\r\n\t</e:Group>\r\n\t<e:Image id=\"bossName\" left=\"25\" source=\"\" y=\"150\"/>\r\n\t\t<e:Button id=\"closeBtn\" label=\"按钮\" skinName=\"Btn0Skin\" icon=\"chatclose\" y=\"51\" scaleX=\"0.8\" scaleY=\"0.8\" right=\"5\" />\r\n</e:Group>\n</e:Skin>";
      return _0xf4c4a4;
    }
  }
  __extends(_0x28d6cd, _0x2c73a8);
  _0x28d6cd.prototype.initUI = function () {
    {
      this.bossImage = new MovieClip();
      this.bossImage.scaleX = -1;
      this.bossImage.scaleY = 1;
      this.bossImage.x = 78;
      this.bossImage.y = 220;
      this.bossGroup.touchEnabled = this.bossGroup.touchChildren = false;
      for (var _0xaf62ee in ConfgMgr.puijinnuberconfig) this.floorArr.push(_0xaf62ee);
      this.listFloorData = new eui.ArrayCollection();
      this.listItem.itemRenderer = ItemBase;
      this.listBoss.itemRenderer = KFAnDianBossItem;
      this.listBossData = new eui.ArrayCollection();
      this.listBoss.dataProvider = this.listBossData;
    }
  };
  _0x28d6cd.prototype.open = function () {
    for (var _0x37fca6 = [], _0x5c44f8 = 0; _0x5c44f8 < arguments.length; _0x5c44f8++) {
      _0x37fca6[_0x5c44f8] = arguments[_0x5c44f8];
    }
    KFBossSys.ins().sendADBossInfo();
    this.bossGroup.addChild(this.bossImage);
    this.listBoss.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickBoss, this);
    this.addTouchEvent(this.seeRule, this.onGetItem);
    this.addTouchEvent(this.challengeBtn, this.onGetItem);
    this.addTouchEvent(this.closeBtn, this.closeMenu);
    this.observe(KFBossSys.ins().postADAttributionInfo, this.setBossInfo);
    this.observe(KFBossSys.ins().postADRedPoint, this.setData);
    this.observe(KFBossSys.ins().postADBossRefTime, this.setData);
    this.bosmc();
    this.setData();
  };
  _0x28d6cd.prototype.closeMenu = function (_0x23f443) {
    ViewManager.ins().close(this);
  };
  _0x28d6cd.prototype.bosmc = function () {
    this.siwangmc3.visible = false;
  };
  _0x28d6cd.prototype.onClickMenu = function (_0x24b9b9) {
    this.setData();
  };
  _0x28d6cd.prototype.onClickBoss = function (_0x4257f0) {
    this.currData = this.listBoss.dataProvider.getItemAt(_0x4257f0.itemIndex);
    this.setBossInfo();
  };
  _0x28d6cd.prototype.setData = function () {
    {
      var _0x298c40 = this.listBoss.parent;
      _0x298c40.stopAnimation();
      this.listBoss.scrollV = 0;
      var _0x2f7109 = KFBossSys.ins().ADBossInfo;
      var _0x3163e5 = [];
      var _0x59d6cd = [];
      var _0x166d7f = [];
      var _0x1b08d8 = [];
      var _0x1a433d = [];
      var _0x4bc8a8 = [];
      1000 * UserZs.ins().lv + Actor.level;
      var _0xe0c4ab = 64;
      var _0x27076c = ConfgMgr.puijinnuberconfig[_0xe0c4ab];
      var _0x660c7b = _0x27076c.bossId;
      for (var _0x29ac4d in _0x2f7109) if (-1 != _0x660c7b.indexOf(_0x2f7109[_0x29ac4d].id)) {
        var _0x5126d7 = _0x2f7109[_0x29ac4d].time - egret.getTimer() >> 0 > 0;
        var _0x54e5fa = KFBossSys.ins().getLingLiBossOpen(_0x2f7109[_0x29ac4d].id);
        if (_0x54e5fa) {
          _0x2f7109[_0x29ac4d].id;
          var _0x478eee = KFBossSys.ins().getBossRemindByIndex(_0x2f7109[_0x29ac4d].id);
          _0x478eee ? _0x5126d7 ? _0x166d7f.push(_0x2f7109[_0x29ac4d]) : _0x59d6cd.push(_0x2f7109[_0x29ac4d]) : _0x5126d7 ? _0x1a433d.push(_0x2f7109[_0x29ac4d]) : _0x1b08d8.push(_0x2f7109[_0x29ac4d]);
        } else {
          _0x4bc8a8.push(_0x2f7109[_0x29ac4d]);
        }
      }
      _0x59d6cd.sort(this.compareFn);
      _0x166d7f.sort(this.compareFn);
      _0x1b08d8.sort(this.compareFn);
      _0x1a433d.sort(this.compareFn);
      _0x4bc8a8.sort(this.compareFn);
      _0x3163e5 = _0x59d6cd.concat(_0x166d7f, _0x1b08d8, _0x1a433d, _0x4bc8a8);
      this.listBossData.replaceAll(_0x3163e5);
      this.listFloorData.replaceAll(this.floorArr);
      this.listBoss.selectedIndex = 0;
      this.currData = this.listBoss.dataProvider.getItemAt(0);
      this.setBossInfo();
    }
  };
  _0x28d6cd.prototype.bosstimes = function () {
    var _0x39423a = this.currData.time - egret.getTimer();
    var _0x54c56c = DateUtils.getFormatBySecond(Math.floor(_0x39423a / 1000), 1);
    if (_0x39423a > 0) {
      {
        this.countdown.text = _0x54c56c + " 后刷新";
        this.countdown.visible = true;
      }
    } else {
      this.countdown.text = "";
      this.countdown.visible = false;
    }
  };
  _0x28d6cd.prototype.setBossInfo = function () {
    if (this.currData) {
      {
        var _0x1fdd07 = ConfgMgr.DarkHallBossConfig[this.currData.id];
        this.listItem.dataProvider = new eui.ArrayCollection(_0x1fdd07.belongRewardshow);
        var _0x18edca = ConfgMgr.MonstersConfig[_0x1fdd07.bossId];
        this.bossName.text = _0x18edca.name + "(" + _0x1fdd07.zsLevel + "转)";
        this.RemainCount.textFlow = TextFlowMaker.generateTextFlow1("剩余BOSS归属次数: |C:447235&T:" + KFBossSys.ins().PJBossCount + "| 次");
        var _0x2c4809 = this.currData.time - egret.getTimer() >> 0;
        _0x2c4809 > 0 ? this.stateImage.source = "zdbossyijisha" : 0 >= _0x2c4809 ? this.stateImage.source = "zdbosskejisha" : this.stateImage.source = "";
        this.bossImage.playFile(RES_DIR_MONSTER + ("monster" + _0x18edca.avatar + "_4s"), -1);
        var _0x2fb57a = KFBossSys.ins().getLingLiBossOpen(this.currData.id);
        var _0x45a0b4 = this.currData.time - egret.getTimer();
        if (_0x45a0b4 > 0) {
          var _0x3f082c = DateUtils.getFormatBySecond(Math.floor(_0x45a0b4 / 1000), 1);
          this.countdown.text = _0x3f082c + " 后刷新";
          this.countdown.visible = true;
          this.bosstimes();
        } else {
          this.countdown.text = "";
          this.countdown.visible = false;
        }
        this.challengeBtn.visible = _0x2fb57a;
        this.isChallenge.visible = !_0x2fb57a;
        this.stateImage.visible = _0x2fb57a;
      }
    }
  };
  _0x28d6cd.prototype.onGetItem = function (_0x59e135) {
    switch (_0x59e135.currentTarget) {
      case this.seeRule:
        ViewManager.ins().open(CommonHelpWin, ConfgMgr.HelpInfoConfig[65535].text);
        break;
      case this.challengeBtn:
        if (1 > KFBossSys.ins().PJBossCount) {
          void WarnWin.show("次数不足,请使用挑战卷", function () {
            {
              return void UserTips.ins().showTips("确定");
            }
          }, this);
          return SoundManager.ins().playEffect("cishubuzubgm");
        }
        d = (KFBossSys.ins().ADBossEnterCD - egret.getTimer()) / 1000 >> 0;
        if (0 < d) {
          void UserTips.ins().showTips("|C:0xf3311e&T:" + d + "秒后可以进入！");
          return SoundManager.ins().playEffect("cddaojishibgm");
        }
        if (0 < this.currData.time - egret.getTimer() >> 0) {
          void UserTips.ins().showTips("|C:0xf3311e&T:BOSS未复活，不可挑战！");
          return SoundManager.ins().playEffect("bossweifuhuobgm");
        }
        this.currData && KFBossSys.ins().sendEnterADFb(this.currData.id);
    }
  };
  _0x28d6cd.prototype.compareFn = function (_0x5ce4e6, _0x43ad6d) {
    var _0x3ee489 = ConfgMgr.DarkHallBossConfig[_0x5ce4e6.id];
    var _0x165efe = ConfgMgr.DarkHallBossConfig[_0x43ad6d.id];
    return _0x3ee489.zsLevel < _0x165efe.zsLevel ? 1 : _0x3ee489.zsLevel > _0x165efe.zsLevel ? -1 : _0x3ee489.level < _0x165efe.level ? 1 : _0x3ee489.level > _0x165efe.level ? -1 : 0;
  };
  _0x28d6cd.prototype.close = function () {
    {
      for (var _0x300ecc = [], _0x991db6 = 0; _0x991db6 < arguments.length; _0x991db6++) {
        _0x300ecc[_0x991db6] = arguments[_0x991db6];
      }
    }
  };
  return _0x28d6cd;
}(BaseEuiView);
__reflect(puijinBossWin.prototype, "puijinBossWin");
ViewManager.ins().reg(puijinBossWin, LayerManager.UI_Main);
var piwangsdBossWin = function (_0x15a452) {
  function _0x19184a() {
    var _0x20ac42 = _0x15a452.call(this) || this;
    _0x20ac42.floorArr = [];
    _0x20ac42.isTopLevel = true;
    _0x20ac42.skinName = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<e:Skin class=\"piwangsdBossSkin\" width=\"580\" height=\"930\" xmlns:e=\"http://ns.egret.com/eui\" xmlns:ns1=\"*\"\n        xmlns:w=\"http://ns.egret.com/wing\">\r\n<e:Group top=\"0\" width=\"580\" horizontalCenter=\"0\" bottom=\"0\">\n\t<e:Rect left=\"0\" right=\"0\" top=\"0\" bottom=\"0\" fillAlpha=\"0.6\" />\n\t<e:Image top=\"0\" bottom=\"0\" source=\"tongyongmianbanbg2\" width=\"580\" horizontalCenter=\"0\" scale9Grid=\"15,12,2,3\" />\n\t<e:Group width=\"556\" horizontalCenter=\"0\" bottom=\"58\">\n\t\t<e:Image source=\"bantoumingkuang4\" x=\"0\" top=\"0\" bottom=\"0\" width=\"278\" height=\"90\" />\n\t\t<e:Image source=\"bantoumingkuang4\" scaleX=\"-1\" right=\"0\" top=\"0\" bottom=\"0\" width=\"278\" height=\"90\" />\n\t</e:Group>\n\t<e:Image width=\"570\" horizontalCenter=\"0\" source=\"tongyongmianbanbg\" scale9Grid=\"19,12,14,25\" top=\"44\" bottom=\"120\" />\n\t<ns1:BaseComponent id=\"roleSelect\" y=\"0\" skinName=\"RoleSelectPanelSkin\" className=\"RoleSelectPanel\" width=\"580\"\n\t                   horizontalCenter=\"0\" currentState=\"nohead\" />\n\t<e:Image y=\"9\" left=\"65\" source=\"newdldldthh\" />\n\t<e:Button id=\"seeRule\" label=\"按钮\" icon=\"wenhao\" skinName=\"Btn0Skin\" horizontalCenter=\"-259\" y=\"5\" scaleX=\"0.9\"\n\t          scaleY=\"0.9\" />\n\t<e:Image source=\"\" scaleX=\"-1\" anchorOffsetX=\"0\" width=\"410\" anchorOffsetY=\"0\"\n\t         height=\"447\"  horizontalCenter=\"69\" bottom=\"294\"/>\n\t<e:Image verticalCenter=\"-45\" source=\"dldlbgthh1\" left=\"13\" right=\"13\"/>\n\t<e:Group width=\"417\" height=\"279\" left=\"0\" bottom=\"1260000\">\n\t\t<e:Image x=\"0\" y=\"61\" source=\"\" width=\"417\" anchorOffsetY=\"0\" height=\"216\" scale9Grid=\"22,12,138,72\" />\n\t\t<e:List id=\"listItem\" itemRendererSkinName=\"ItemSkin\" horizontalCenter=\"0.5\" bottom=\"105\" x=\"72\" scaleX=\"0.8\"\n\t\t        scaleY=\"0.8\">\n\t\t\t<e:ArrayCollection>\n\t\t\t\t<e:Array>\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t</e:Array>\n\t\t\t</e:ArrayCollection>\n\t\t\t<e:layout>\n\t\t\t\t<e:HorizontalLayout gap=\"17\" />\n\t\t\t</e:layout>\n\t\t</e:List>\n\t\t<e:Label text=\"BOSS掉落\" x=\"163\" bottom=\"195\" size=\"16\" textColor=\"0xde7f04\" bold=\"true\" scaleX=\"1\" scaleY=\"1\" />\n\t\t<e:Label id=\"isChallenge\" text=\"未满足开启条件\" x=\"117.98000000000002\" y=\"242.64999999999998\" size=\"16\" textColor=\"0xd20506\"\n\t\t         bold=\"true\" scaleX=\"1\" scaleY=\"1\" />\n\t</e:Group>\n\t<e:Group id=\"bossGroup\" width=\"200\" height=\"200\" left=\"210\" verticalCenter=\"-150\"/>\r\n\t<ns1:BaseComponent id=\"siwangmc1\" skinName=\"effskillpos\" width=\"130\" height=\"100\" verticalCenter=\"-220\" left=\"-15\" scaleX=\"1.5\" scaleY=\"1.5\"/>\r\n\t<ns1:BaseComponent id=\"siwangmc2\" skinName=\"effskillpos\" width=\"130\" height=\"100\" verticalCenter=\"-220\" right=\"35\" scaleX=\"1.5\" scaleY=\"1.5\"/>\r\n\t<ns1:BaseComponent id=\"siwangmc3\" skinName=\"effskillpos\" width=\"200\" height=\"150\" verticalCenter=\"-200\" left=\"125\" scaleX=\"2\" scaleY=\"2\"/>\r\n<e:Image source=\"siwangliantiao\" left=\"10\" right=\"10\" verticalCenter=\"100\" scaleX=\"1\" scaleY=\"1\"/>\n\t<e:Scroller width=\"139\" bottom=\"175\" top=\"95\" right=\"-1143\">\n\t\t<e:List id=\"listBoss\" top=\"614\" anchorOffsetX=\"0\" anchorOffsetY=\"0\" itemRendererSkinName=\"shenshoubosslist\"\n\t\t        horizontalCenter=\"-207.5\" bottom=\"126\">\n\t\t\t<e:ArrayCollection>\n\t\t\t\t<e:Array>\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t\t<e:Object null=\"\" />\n\t\t\t\t\t<e:Object null=\"null\" />\n\t\t\t\t\t<e:Object null=\"null\" />\n\t\t\t\t\t<e:Object null=\"null\" />\n\t\t\t\t\t<e:Object null=\"null\" />\n\t\t\t\t\t<e:Object null=\"null\" />\n\t\t\t\t</e:Array>\n\t\t\t</e:ArrayCollection>\n\t\t\t<e:layout>\n\t\t\t\t<e:TileLayout verticalGap=\"6\" requestedColumnCount=\"1\" />\n\t\t\t</e:layout>\n\t\t</e:List>\n\t</e:Scroller>\r\n\t\t<e:Image source=\"teshuwenzibg\"  top=\"-55555\" x=\"70\" y=\"55\" scaleX=\"1.5\" scaleY=\"1.5\"/>\n\t\t<e:Label id=\"bossName\" text=\"暗殿：沙城之王(13转)\" width=\"370\" size=\"16\" textColor=\"0x9f500d\" bold=\"true\" horizontalCenter=\"0\" top=\"-55575\" scaleX=\"1\" scaleY=\"1\" />\n\t<e:Image id=\"stateImage\" source=\"zdbossyijisha\" horizontalCenter=\"100\" verticalCenter=\"-100\" />\r\n\t\t<e:Group id=\"reward\" x=\"32\" verticalCenter=\"120\">\r\n\t\t\t<ns1:BaseComponent id=\"itemReward0\" skinName=\"ItemSkin\" className=\"ItemBase\" left=\"0\" bottom=\"44\"/>\r\n\t\t\t<ns1:BaseComponent id=\"itemReward1\" skinName=\"ItemSkin\" className=\"ItemBase\"  left=\"142\" bottom=\"-11\"/>\r\n\t\t\t<ns1:BaseComponent id=\"itemReward2\" skinName=\"ItemSkin\" className=\"ItemBase\"  left=\"292\" bottom=\"-11\"/>\r\n\t\t\t<ns1:BaseComponent id=\"itemReward3\" skinName=\"ItemSkin\" className=\"ItemBase\"  left=\"423\" bottom=\"44\"/>\r\n\t\t</e:Group>\n\t\t<e:Button id=\"challengeBtn\" label=\"挑 战\" skinName=\"Btn23Skin\" icon=\"swjd_btn\" bottom=\"140\" horizontalCenter=\"-8.5\" />\r\n\t<e:Image id=\"bossName\" left=\"40\" source=\"\" top=\"100\"/>\r\n\t<e:Image id=\"fbName\" source=\"\" right=\"10\" top=\"100\"/>\r\n\t<e:Group id=\"levelLock\" width=\"130\" height=\"29\" horizontalCenter=\"0\" verticalCenter=\"50\">\r\n\t\t<e:Image source=\"\" left=\"0\"/>\r\n\t\t<e:Image source=\"\" right=\"1\"/>\r\n\t\t<e:Label id=\"countdown\" text=\"05:59:24后刷新\" size=\"16\" textColor=\"0x00ff00\" horizontalCenter=\"0\" y=\"30\"/>\n\t\t<e:Label id=\"RemainCount\" text=\"剩余归属次数：\" bottom=\"-160\" horizontalCenter=\"0\" size=\"16\" bold=\"true\" scaleX=\"1\" scaleY=\"1\" textColor=\"0x89713c\" />\r\n\t</e:Group>\r\n\t\t<e:Button id=\"closeBtn\" label=\"按钮\" skinName=\"Btn0Skin\" icon=\"chatclose\" y=\"51\" scaleX=\"0.8\" scaleY=\"0.8\" right=\"5\" />\r\n</e:Group>\n</e:Skin>";
    return _0x20ac42;
  }
  __extends(_0x19184a, _0x15a452);
  _0x19184a.prototype.initUI = function () {
    this.bossImage = new MovieClip();
    this.bossImage.scaleX = -1;
    this.bossImage.scaleY = 1;
    this.bossImage.x = 78;
    this.bossImage.y = 165;
    this.bossGroup.touchEnabled = this.bossGroup.touchChildren = false;
    for (var _0x16ceb9 in ConfgMgr.piwangbossnuberconfig) this.floorArr.push(_0x16ceb9);
    this.listFloorData = new eui.ArrayCollection();
    this.listItem.itemRenderer = ItemBase;
    this.listBoss.itemRenderer = KFAnDianBossItem;
    this.listBossData = new eui.ArrayCollection();
    this.listBoss.dataProvider = this.listBossData;
  };
  _0x19184a.prototype.open = function () {
    {
      for (var _0x435821 = [], _0x364295 = 0; _0x364295 < arguments.length; _0x364295++) {
        _0x435821[_0x364295] = arguments[_0x364295];
      }
      KFBossSys.ins().sendADBossInfo();
      this.bossGroup.addChild(this.bossImage);
      this.listBoss.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onClickBoss, this);
      this.addTouchEvent(this.seeRule, this.onGetItem);
      this.addTouchEvent(this.challengeBtn, this.onGetItem);
      this.addTouchEvent(this.closeBtn, this.closeMenu);
      this.observe(KFBossSys.ins().postADAttributionInfo, this.setBossInfo);
      this.observe(KFBossSys.ins().postADRedPoint, this.setData);
      this.observe(KFBossSys.ins().postADBossRefTime, this.setData);
      this.isDie ? this.playDieEff(-1) : this.bossmacs();
      this.setData();
    }
  };
  _0x19184a.prototype.closeMenu = function (_0x441479) {
    ViewManager.ins().close(this);
  };
  _0x19184a.prototype.onClickMenu = function (_0x5c6987) {
    this.setData();
  };
  _0x19184a.prototype.onClickBoss = function (_0x1df1f8) {
    this.currData = this.listBoss.dataProvider.getItemAt(_0x1df1f8.itemIndex);
    this.setBossInfo();
  };
  _0x19184a.prototype.setData = function () {
    var _0x5d8dad = this.listBoss.parent;
    _0x5d8dad.stopAnimation();
    this.listBoss.scrollV = 0;
    var _0x1fc6bf = KFBossSys.ins().ADBossInfo;
    var _0x522fdd = [];
    var _0x34d023 = [];
    var _0x4cc2c5 = [];
    var _0x32f44c = [];
    var _0x2220c3 = [];
    var _0xaed96c = [];
    1000 * UserZs.ins().lv + Actor.level;
    var _0x195e72 = 65;
    var _0x50591c = ConfgMgr.piwangbossnuberconfig[_0x195e72];
    var _0x2a970d = _0x50591c.bossId;
    for (var _0x45da31 in _0x1fc6bf) if (-1 != _0x2a970d.indexOf(_0x1fc6bf[_0x45da31].id)) {
      var _0x514e4a = _0x1fc6bf[_0x45da31].time - egret.getTimer() >> 0 > 0;
      var _0xd9615a = KFBossSys.ins().getLingLiBossOpen(_0x1fc6bf[_0x45da31].id);
      if (_0xd9615a) {
        {
          _0x1fc6bf[_0x45da31].id;
          var _0x2560ca = KFBossSys.ins().getBossRemindByIndex(_0x1fc6bf[_0x45da31].id);
          _0x2560ca ? _0x514e4a ? _0x4cc2c5.push(_0x1fc6bf[_0x45da31]) : _0x34d023.push(_0x1fc6bf[_0x45da31]) : _0x514e4a ? _0x2220c3.push(_0x1fc6bf[_0x45da31]) : _0x32f44c.push(_0x1fc6bf[_0x45da31]);
        }
      } else {
        _0xaed96c.push(_0x1fc6bf[_0x45da31]);
      }
    }
    _0x34d023.sort(this.compareFn);
    _0x4cc2c5.sort(this.compareFn);
    _0x32f44c.sort(this.compareFn);
    _0x2220c3.sort(this.compareFn);
    _0xaed96c.sort(this.compareFn);
    _0x522fdd = _0x34d023.concat(_0x4cc2c5, _0x32f44c, _0x2220c3, _0xaed96c);
    this.listBossData.replaceAll(_0x522fdd);
    this.listFloorData.replaceAll(this.floorArr);
    this.listBoss.selectedIndex = 0;
    this.currData = this.listBoss.dataProvider.getItemAt(0);
    this.setBossInfo();
  };
  _0x19184a.prototype.swsditem = function (_0x180ca1) {
    var _0x579db5 = ConfgMgr.DarkHallBossConfig[_0x180ca1];
    var _0x4903bb = _0x579db5.belongRewardshow;
    for (y = 0; y < _0x4903bb.length; y++) {
      this["itemReward" + y].data = _0x4903bb[y];
    }
  };
  _0x19184a.prototype.bossmacs = function () {
    this.kfBossMc || (this.kfBossMc = new MovieClip(), this.kfBossMc.scaleX = this.kfBossMc.scaleY = 0.45, this.kfBossMc.x = 0, this.kfBossMc.y = 35);
    this.siwangmc1.boossGroup.addChild(this.kfBossMc);
    this.kfBossMc.playFile(RES_DIR_EFF + "dtxstx02", -1);
    this.kfBossMc1 || (this.kfBossMc1 = new MovieClip(), this.kfBossMc1.scaleX = this.kfBossMc1.scaleY = 0.45, this.kfBossMc1.x = 0, this.kfBossMc1.y = 35);
    this.siwangmc2.boossGroup.addChild(this.kfBossMc1);
    this.kfBossMc1.playFile(RES_DIR_EFF + "dtxstx02", -1);
  };
  _0x19184a.prototype.setBossInfo = function () {
    if (this.currData) {
      var _0x344efa = this.currData.id;
      var _0x17d7a7 = ConfgMgr.DarkHallBossConfig[_0x344efa];
      this.listItem.dataProvider = new eui.ArrayCollection(_0x17d7a7.belongRewardshow);
      var _0x9395a6 = ConfgMgr.MonstersConfig[_0x17d7a7.bossId];
      this.bossName.text = _0x9395a6.name + "(" + _0x17d7a7.zsLevel + "转)";
      this.RemainCount.textFlow = TextFlowMaker.generateTextFlow1("剩余归属次数:|C:447235&T:" + KFBossSys.ins().PWBossCount + "|次");
      var _0x29b9de = this.currData.time - egret.getTimer() >> 0;
      _0x29b9de > 0 ? this.stateImage.source = "zdbossyijisha" : 0 >= _0x29b9de ? this.stateImage.source = "zdbosskejisha" : this.stateImage.source = "";
      this.bossImage.playFile(RES_DIR_MONSTER + ("monster" + _0x9395a6.avatar + "_3s"), -1);
      var _0x3ee788 = KFBossSys.ins().getLingLiBossOpen(this.currData.id);
      var _0x1579c7 = this.currData.time - egret.getTimer();
      if (_0x1579c7 > 0) {
        {
          var _0x45a738 = DateUtils.getFormatBySecond(Math.floor(_0x1579c7 / 1000), 1);
          this.countdown.text = _0x45a738 + " 后刷新";
          this.countdown.visible = true;
          this.bosstimes();
        }
      } else {
        this.countdown.text = "";
        this.countdown.visible = false;
      }
      this.challengeBtn.visible = _0x3ee788;
      this.isChallenge.visible = !_0x3ee788;
      this.stateImage.visible = _0x3ee788;
      this.swsditem(_0x344efa);
      this.bossmacs();
    }
  };
  _0x19184a.prototype.bosstimes = function () {
    {
      var _0x2253e0 = this.currData.time - egret.getTimer();
      var _0x2a0422 = DateUtils.getFormatBySecond(Math.floor(_0x2253e0 / 1000), 1);
      if (_0x2253e0 > 0) {
        {
          this.countdown.text = _0x2a0422 + " 后刷新";
          this.countdown.visible = true;
        }
      } else {
        {
          this.countdown.text = "";
          this.countdown.visible = false;
        }
      }
    }
  };
  _0x19184a.prototype.onGetItem = function (_0x3fe99b) {
    {
      switch (_0x3fe99b.currentTarget) {
        case this.seeRule:
          ViewManager.ins().open(CommonHelpWin, ConfgMgr.HelpInfoConfig[65535].text);
          break;
        case this.challengeBtn:
          d = KFBossSys.ins().PWBossCount;
          KFBossSys.ins();
          if (1 > d) {
            return void WarnWin.show("挑战次数不足", function () {
              {
                return void UserTips.ins().showTips("确定");
              }
            }, this);
          }
          d = (KFBossSys.ins().ADBossEnterCD - egret.getTimer()) / 1000 >> 0;
          if (0 < d) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:" + d + "秒后可以进入！");
          }
          if (0 < this.currData.time - egret.getTimer() >> 0) {
            return void UserTips.ins().showTips("|C:0xf3311e&T:BOSS未复活，不可挑战！");
          }
          this.currData && KFBossSys.ins().sendEnterADFb(this.currData.id);
      }
    }
  };
  _0x19184a.prototype.compareFn = function (_0x2c9ace, _0xebb4d5) {
    {
      var _0x20685c = ConfgMgr.DarkHallBossConfig[_0x2c9ace.id];
      var _0x3ae0b3 = ConfgMgr.DarkHallBossConfig[_0xebb4d5.id];
      return _0x20685c.zsLevel < _0x3ae0b3.zsLevel ? 1 : _0x20685c.zsLevel > _0x3ae0b3.zsLevel ? -1 : _0x20685c.level < _0x3ae0b3.level ? 1 : _0x20685c.level > _0x3ae0b3.level ? -1 : 0;
    }
  };
  _0x19184a.prototype.close = function () {
    for (var _0x19eadb = [], _0x42b7b9 = 0; _0x42b7b9 < arguments.length; _0x42b7b9++) {
      _0x19eadb[_0x42b7b9] = arguments[_0x42b7b9];
    }
  };
  return _0x19184a;
}(BaseEuiView);
__reflect(piwangsdBossWin.prototype, "piwangsdBossWin");
ViewManager.ins().reg(piwangsdBossWin, LayerManager.UI_Main);