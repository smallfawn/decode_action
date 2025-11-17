//Mon Nov 17 2025 07:25:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {
  'use strict';

  class _0x2dd7fd {
    static init() {}
  }
  _0x2dd7fd.width = 750;
  _0x2dd7fd.height = 1334;
  _0x2dd7fd.scaleMode = "fixedwidth";
  _0x2dd7fd.screenMode = "none";
  _0x2dd7fd.alignV = "top";
  _0x2dd7fd.alignH = "left";
  _0x2dd7fd.startScene = "HomeView.scene";
  _0x2dd7fd.sceneRoot = "";
  _0x2dd7fd.debug = false;
  _0x2dd7fd.stat = false;
  _0x2dd7fd.physicsDebug = false;
  _0x2dd7fd.exportSceneToJson = false;
  _0x2dd7fd.init();
  class _0x5d2800 {
    static get User() {
      return this._User;
    }
    static set User(_0x19d216) {
      let _0x5cae70 = new _0x187ecc();
      for (let _0x4e4d1f in _0x19d216) {
        _0x5cae70[_0x4e4d1f] = _0x19d216[_0x4e4d1f];
      }
      this._User = _0x5cae70;
    }
  }
  _0x5d2800._User = null;
  _0x5d2800.Url = "https://jizhibao.wxgame666.cn";
  _0x5d2800.token = "9bd85b5b50c1d12dd0d6a23bec60f8b5";
  _0x5d2800.lvData = [];
  _0x5d2800.userInfo = 0;
  _0x5d2800.invite_id = 0;
  _0x5d2800.team_id = 0;
  _0x5d2800.Quest = [];
  _0x5d2800.Test = 0;
  _0x5d2800.postIndex = 1;
  _0x5d2800.defaultCount = 1500;
  _0x5d2800.guide = false;
  _0x5d2800.step = 0;
  class _0x187ecc {
    constructor() {}
  }
  class _0xa226b8 {
    constructor() {}
    static request(_0x1237c2) {
      let _0x2e29d5 = new Promise((_0x797ac6, _0x4c4218) => {
        let _0x2e6915 = new Laya.HttpRequest();
        _0x2e6915.once(Laya.Event.COMPLETE, this, _0x428510 => {
          _0x2e6915.offAll();
          _0x797ac6(_0x428510);
        });
        _0x2e6915.once(Laya.Event.ERROR, this, _0x18a0ad => {
          _0x2e6915.offAll();
          _0x4c4218(_0x18a0ad);
        });
        let _0x2cfc95 = _0x1237c2.resType || "text",
          _0x24f286 = _0x1237c2.headers || null;
        if (_0x1237c2.data && _0x1237c2.keyvalue) {
          _0x1237c2.data = this.postParse(_0x1237c2.data);
        }
        if (_0x1237c2.jiami) {
          let _0x13b40a = {
            data: this.encrypt(JSON.stringify(_0x1237c2.data), this.key, this.iv)
          };
          if (_0x5d2800.Test) {
            _0x13b40a.test = 1;
          }
          _0x1237c2.data = _0x13b40a;
        }
        _0x2e6915.send(_0x1237c2.url, _0x1237c2.data, _0x1237c2.method, _0x2cfc95, _0x24f286);
      });
      return _0x2e29d5;
    }
    static postParse(_0x127c70) {
      let _0x47c7c7 = "";
      for (var _0x3b95cf in _0x127c70) {
        _0x47c7c7 += _0x3b95cf + "=" + _0x127c70[_0x3b95cf] + "&";
      }
      return _0x47c7c7;
    }
    static base_jiekou(_0x3ff84c, _0x1c74fa, _0x5b46c0, _0x4a2266) {
      this.request({
        resType: "json",
        url: "" + _0x5d2800.Url + _0x3ff84c,
        data: _0x1c74fa,
        method: _0x4a2266 || "post",
        jiami: true
      }).then(_0x3ce2f0 => {
        _0x3ce2f0.code == 200 && (Array.isArray(_0x3ce2f0.data) && _0x3ce2f0.data.length == 0 ? _0x3ce2f0.data = _0x3ce2f0.data : _0x3ce2f0.data = this.jiemi(_0x3ce2f0.data));
        _0x5b46c0(_0x3ce2f0);
      });
    }
    static jiemi(_0x224c6d) {
      let _0x8d6e24 = this.decrypt(_0x224c6d, this.key, this.iv),
        _0xfa9c62 = JSON.parse(_0x8d6e24);
      return _0xfa9c62;
    }
    static encrypt(_0x4ec9a7, _0xc5f5cf, _0x315734) {
      const _0x54295d = CryptoJS.enc.Utf8.parse(_0xc5f5cf.padEnd(32).slice(0, 32)),
        _0x47a9ad = _0x315734 ? CryptoJS.enc.Utf8.parse(_0x315734.padEnd(16).slice(0, 16)) : CryptoJS.lib.WordArray.random(16),
        _0x1f6330 = CryptoJS.AES.encrypt(_0x4ec9a7, _0x54295d, {
          iv: _0x47a9ad,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });
      return _0x1f6330.toString();
    }
    static decrypt(_0x52d3f9, _0x15428b, _0x5e7c3a) {
      const _0x1b97dd = CryptoJS.enc.Utf8.parse(_0x15428b.padEnd(32).slice(0, 32)),
        _0x996803 = CryptoJS.enc.Utf8.parse(_0x5e7c3a.padEnd(16).slice(0, 16)),
        _0x4f315b = CryptoJS.AES.decrypt(_0x52d3f9, _0x1b97dd, {
          iv: _0x996803,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });
      return _0x4f315b.toString(CryptoJS.enc.Utf8);
    }
  }
  _0xa226b8.key = "cgru8KW7Pe3UjwlEcKnXV53YEPvFwg8J";
  _0xa226b8.iv = "727bq5087l5pqzbw";
  class _0x3c0181 {
    userInfo(_0x2aa2ee, _0x135a49) {
      let _0x63259 = "/home/Game/userInfo";
      _0xa226b8.base_jiekou(_0x63259, _0x2aa2ee, _0x135a49);
    }
    memberRank(_0x2c5d99, _0x123495) {
      let _0x22415d = "/home/Game/memberRank";
      _0xa226b8.base_jiekou(_0x22415d, _0x2c5d99, _0x123495);
    }
    teamRank(_0x25b0a1, _0x5eff76) {
      let _0x5c88c7 = "/home/Game/teamRank";
      _0xa226b8.base_jiekou(_0x5c88c7, _0x25b0a1, _0x5eff76);
    }
    inviteRank(_0x453e7d, _0x3607bf) {
      let _0x77dc57 = "/home/Game/inviteRank";
      _0xa226b8.base_jiekou(_0x77dc57, _0x453e7d, _0x3607bf);
    }
    myTeam(_0x119f73, _0x9b952) {
      let _0x64e91a = "/home/Game/myTeam";
      _0xa226b8.base_jiekou(_0x64e91a, _0x119f73, _0x9b952);
    }
    chooseMode(_0x3c7c0f, _0x522e9e) {
      let _0x354532 = "/home/Game/chooseMode";
      _0xa226b8.base_jiekou(_0x354532, _0x3c7c0f, _0x522e9e);
    }
    gameOver(_0x1abdc6, _0x1b5378) {
      let _0x185616 = "/home/Game/gameOver";
      _0xa226b8.base_jiekou(_0x185616, _0x1abdc6, _0x1b5378);
    }
    myInvite(_0x37e357, _0x49a166) {
      let _0x347298 = "/home/Game/myInvite";
      _0xa226b8.base_jiekou(_0x347298, _0x37e357, _0x49a166);
    }
    inviteTeamLog(_0xcf3b70, _0x4d45aa) {
      let _0x5c09ef = "/home/Game/inviteTeamLog";
      _0xa226b8.base_jiekou(_0x5c09ef, _0xcf3b70, _0x4d45aa);
    }
    agreeJoin(_0x2a453e, _0x4f026f) {
      let _0x21c0e1 = "/home/Game/agreeJoin";
      _0xa226b8.base_jiekou(_0x21c0e1, _0x2a453e, _0x4f026f);
    }
    login(_0x532c7a, _0x993501) {
      let _0x5414c7 = "/home/Login/login";
      _0xa226b8.base_jiekou(_0x5414c7, _0x532c7a, _0x993501);
    }
    doTransfer(_0x361f87, _0x4d9642) {
      let _0x1343d1 = "/home/Game/doTransfer";
      _0xa226b8.base_jiekou(_0x1343d1, _0x361f87, _0x4d9642);
    }
    myLevel(_0x2e4db1, _0x20b91d) {
      let _0x4a48c5 = "/home/Game/myLevel";
      _0xa226b8.base_jiekou(_0x4a48c5, _0x2e4db1, _0x20b91d);
    }
    myLevel(_0x1cee35, _0x2af892) {
      let _0x4ea6f7 = "/home/Game/myLevel";
      _0xa226b8.base_jiekou(_0x4ea6f7, _0x1cee35, _0x2af892);
    }
    share(_0x4803d8, _0x204bb6) {
      let _0x2b56bb = "/home/Game/share";
      _0xa226b8.base_jiekou(_0x2b56bb, _0x4803d8, _0x204bb6);
    }
    transferLog(_0x35250d, _0x5176ad) {
      let _0x4c526e = "/home/Game/transferLog";
      _0xa226b8.base_jiekou(_0x4c526e, _0x35250d, _0x5176ad);
    }
    cannel(_0x3671c9, _0x882376) {
      let _0x231929 = "/home/Game/cannel";
      _0xa226b8.base_jiekou(_0x231929, _0x3671c9, _0x882376);
    }
    getQuest(_0x43c084, _0x289edb) {
      let _0xec8845 = "/home/Game/topic";
      _0xa226b8.base_jiekou(_0xec8845, _0x43c084, _0x289edb);
    }
    red(_0x48bc3a, _0x1d7c4f) {
      let _0xe66e9b = "/home/Game/red";
      _0xa226b8.base_jiekou(_0xe66e9b, _0x48bc3a, _0x1d7c4f);
    }
    usePro(_0x4d95b7, _0x41c203) {
      let _0x9208bd = "/home/Game/usePro";
      _0xa226b8.base_jiekou(_0x9208bd, _0x4d95b7, _0x41c203);
    }
    updateXin(_0x16d4cf, _0x5b93c3) {
      let _0x449f86 = "/home/Game/updateXin";
      _0xa226b8.base_jiekou(_0x449f86, _0x16d4cf, _0x5b93c3);
    }
    lastWeek(_0x1ef8fc, _0x54d013) {
      let _0x52769f = "/home/Game/lastWeek";
      _0xa226b8.base_jiekou(_0x52769f, _0x1ef8fc, _0x54d013);
    }
    count(_0x49d776, _0x3214e1) {
      let _0xa90dfa = "/home/index/qasd";
      _0xa226b8.base_jiekou(_0xa90dfa, _0x49d776, _0x3214e1);
    }
  }
  var _0x45ad64 = new _0x3c0181();
  class _0x1e83ac {
    static socketUrl() {
      if (this.isDebug) {
        return "ws://127.0.0.1:4000";
      }
      return "wss://pernum.modn123.cn:" + this.port;
    }
  }
  _0x1e83ac.isDebug = _0x5d2800.Test;
  _0x1e83ac.port = 10155;
  class _0x58af8c extends Laya.View {
    constructor() {
      super();
      this._openList = [];
      this._closeList = [];
      this._openTasks = [];
      this.marginTop = 0;
      this.marginRight = 0;
      this.marginBottom = 0;
      this.marginLeft = 0;
    }
    get topView() {
      let _0x5d66e8 = this._openList,
        _0x952569 = _0x5d66e8.length;
      if (_0x952569 > 0) {
        return _0x5d66e8[_0x952569 - 1];
      }
      return null;
    }
    get viewCount() {
      return this._openList.length;
    }
    openView(_0x2428d9, _0x37e38b = false, _0x13f076 = false) {
      if (!_0x2428d9 || !_0x2428d9.class) {
        return;
      }
      let _0x57cf65 = this._getViewFromCloseList(_0x2428d9.class);
      !_0x57cf65 && (_0x57cf65 = this._createViewByClass(_0x2428d9.class));
      let _0x589f05 = this.topView;
      this.runOpenTasks(false);
      _0x57cf65.lo = _0x2428d9;
      _0x57cf65.name = "";
      if (_0x2428d9.name) {
        _0x57cf65.name = _0x2428d9.name;
      }
      this._openList.push(_0x57cf65);
      this.addChildAt(_0x57cf65, 0);
      _0x57cf65.width = this.width - this.marginLeft - this.marginRight;
      _0x57cf65.height = this.height - this.marginTop - this.marginBottom;
      _0x57cf65.onOpen && _0x57cf65.onOpen();
      _0x57cf65.onResize && _0x57cf65.onResize();
      _0x57cf65.updateMsg && _0x57cf65.updateMsg();
      _0x589f05 && (_0x37e38b ? this.doOpenEase(_0x589f05, _0x57cf65, _0x13f076) : _0x589f05.removeSelf());
      this.runOpenTasks();
    }
    doOpenEase(_0x2fedd1, _0xbb7714, _0x17d9b5) {
      _0x2fedd1.mouseEnabled = false;
      Laya.Tween.to(_0x2fedd1, {
        alpha: 0
      }, 400, null, Laya.Handler.create(this, this.onEaseOver, [_0x2fedd1, _0xbb7714, _0x17d9b5]));
    }
    onEaseOver(_0x3dfbb8, _0x5e33e8, _0x29a45a) {
      _0x3dfbb8.mouseEnabled = true;
      _0x3dfbb8.alpha = 1;
      _0x29a45a ? this._addToCloseList(_0x3dfbb8) : _0x3dfbb8.removeSelf();
    }
    runOpenTasks(_0xf55e1b = true) {
      let _0x4dba9a = this._openTasks,
        _0xd54082 = _0x4dba9a.length;
      for (let _0x581c9d = 0; _0x581c9d < _0xd54082; _0x581c9d++) {
        let _0x160bcf = _0x4dba9a[_0x581c9d],
          _0x2d5778 = _0x160bcf.after;
        _0x2d5778 == _0xf55e1b && _0x160bcf.fun && _0x160bcf.fun();
      }
    }
    closeView(_0x3753bc, _0x2fd213 = null) {
      if (!_0x3753bc) {
        return;
      }
      let _0x2c23a2 = this.viewExist(_0x3753bc, _0x2fd213);
      if (_0x2c23a2 != -1) {
        let _0x2c9064 = this._openList.splice(_0x2c23a2, 1)[0];
        this._addToCloseList(_0x2c9064);
        let _0x2e4c54 = this.topView;
        _0x2e4c54 && (this.addChild(_0x2e4c54), _0x2e4c54.onFrush && _0x2e4c54.onFrush(), _0x2e4c54.onResize && _0x2e4c54.onResize(), _0x2e4c54.updateMsg && _0x2e4c54.updateMsg());
      }
    }
    _addToCloseList(_0x143647) {
      this._closeList.push(_0x143647);
      _0x143647.removeSelf();
      _0x143647.onClose && _0x143647.onClose();
      _0x143647.closeTime = Date.now();
    }
    closeAllViews(_0x12a5ca = 0) {
      let _0x4e641b = this._openList,
        _0x17a9ee = _0x4e641b.length;
      for (let _0x370980 = _0x17a9ee - 1 - _0x12a5ca; _0x370980 >= 0; _0x370980--) {
        let _0x28f54b = _0x4e641b[_0x370980];
        this._addToCloseList(_0x28f54b);
      }
      this._openList.splice(0, _0x17a9ee - _0x12a5ca);
    }
    backView() {
      let _0x5cbf4e = this._openList,
        _0x479405 = _0x5cbf4e.length;
      if (_0x479405 > 1) {
        let _0x1467f7 = _0x5cbf4e.pop();
        this._addToCloseList(_0x1467f7);
        let _0x3035e1 = this.topView;
        _0x3035e1 && (this.addChild(_0x3035e1), _0x3035e1.onFrush && _0x3035e1.onFrush(), _0x3035e1.onResize && _0x3035e1.onResize(), _0x3035e1.updateMsg && _0x3035e1.updateMsg());
      } else {
        console.warn("top view ,can not back");
      }
    }
    backHome(_0x5a2b09, _0x5dceba = false) {
      this.closeAllViews(_0x5dceba ? 1 : 0);
      this.openView(_0x5a2b09, _0x5dceba, true);
    }
    createView(_0x5d2354) {
      if (!_0x5d2354 || !_0x5d2354.class) {
        return;
      }
      let _0x3d8e6a = this._getViewFromCloseList(_0x5d2354.class);
      !_0x3d8e6a && (_0x3d8e6a = this._createViewByClass(_0x5d2354.class));
      _0x3d8e6a.lo = _0x5d2354;
      _0x3d8e6a.onResize && _0x3d8e6a.onResize();
      this._closeList.push(_0x3d8e6a);
    }
    viewExist(_0x22b834, _0x2224bf = null) {
      let _0x4bfa2b = this._openList,
        _0xed1879 = _0x4bfa2b.length;
      for (let _0x466973 = _0xed1879 - 1; _0x466973 >= 0; _0x466973--) {
        let _0x535ff3 = _0x4bfa2b[_0x466973];
        if (_0x535ff3.lo.class == _0x22b834) {
          if (_0x2224bf) {
            if (_0x2224bf == _0x535ff3.name) {
              return _0x466973;
            }
          } else {
            return _0x466973;
          }
        }
      }
      return -1;
    }
    deleteView(_0x16b312, _0xa05c7b = null) {
      let _0x20b93a = this._closeList,
        _0x277140 = this._closeList.length,
        _0x46a65e = null;
      for (let _0x9018f6 = _0x277140 - 1; _0x9018f6 >= 0; _0x9018f6--) {
        let _0x4183cc = _0x20b93a[_0x9018f6];
        if (_0x4183cc.lo.class == _0x16b312) {
          _0xa05c7b ? _0xa05c7b == _0x4183cc.name && (_0x46a65e = _0x4183cc) : _0x46a65e = _0x4183cc;
          if (_0x46a65e) {
            _0x20b93a.splice(_0x9018f6, 1);
            break;
          }
        }
      }
      this._realDelete(_0x46a65e);
    }
    _realDelete(_0x58e41c) {
      if (!_0x58e41c) {
        return;
      }
      resultView.onDelete && resultView.onDelete();
    }
    deleteViewThis(_0x5d54f7) {
      let _0x3bfe34 = this._closeList,
        _0x253f95 = _0x3bfe34.indexOf(_0x5d54f7);
      _0x253f95 != -1 && (_0x3bfe34.splice(_0x253f95, 1), _0x5d54f7.onDelete && _0x5d54f7.onDelete());
    }
    getViewByClass(_0x1976d2, _0x54bcb6 = null) {
      let _0x49bdae = this.viewExist(_0x1976d2, _0x54bcb6);
      if (_0x49bdae != -1) {
        return this._openList[_0x49bdae];
      }
      return null;
    }
    getViewByIndex(_0x574b94) {
      if (_0x574b94 >= 0 && _0x574b94 < this._openList.length) {
        return this._openList[_0x574b94];
      }
      return null;
    }
    _getViewFromCloseList(_0x361dfa) {
      let _0x4fec57 = this._closeList,
        _0x4f2ed6 = _0x4fec57.length;
      for (let _0x213b43 = 0; _0x213b43 < _0x4f2ed6; _0x213b43++) {
        let _0x465e10 = _0x4fec57[_0x213b43];
        if (_0x465e10.lo.class == _0x361dfa) {
          _0x4fec57.splice(_0x213b43, 1);
          return _0x465e10;
        }
      }
      return null;
    }
    _createViewByClass(_0x199e59) {
      let _0x3e3f24 = new _0x199e59();
      return _0x3e3f24;
    }
    addTask(_0x4e093f) {
      let _0xcfef38 = _0x4e093f,
        _0x4f0877 = _0x4e093f.fun;
      if (_0xcfef38 && _0x4f0877) {
        if (_0x4e093f.after == undefined) {
          _0x4e093f.after = true;
        } else {
          _0x4e093f.after = _0x4e093f.after == true;
        }
        let _0x2cd13a = this._openTasks,
          _0xdb14ca = _0x2cd13a.length,
          _0x46bf15 = false;
        for (let _0x519ff0 = 0; _0x519ff0 < _0xdb14ca; _0x519ff0++) {
          let _0x5949e4 = _0x2cd13a[_0x519ff0];
          if (_0x5949e4.name == _0xcfef38) {
            _0x46bf15 = true;
            _0x2cd13a[_0x519ff0] = _0x4e093f;
            break;
          }
        }
        !_0x46bf15 && _0x2cd13a.push(_0x4e093f);
      }
    }
    removeTask(_0x1260a0) {
      let _0x5e7613 = this._openTasks,
        _0x478f5a = _0x5e7613.length;
      for (let _0x82e742 = 0; _0x82e742 < _0x478f5a; _0x82e742++) {
        let _0x159d68 = _0x5e7613[_0x82e742];
        if (_0x159d68.name == _0x1260a0) {
          _0x5e7613.splice(_0x82e742, 1);
          break;
        }
      }
    }
    updateMsg() {
      let _0x1d33e = this.topView;
      _0x1d33e && _0x1d33e.updateMsg && _0x1d33e.updateMsg();
    }
    onResize(_0x4ff812, _0x430e19, _0x22edf0, _0x2e48d9, _0x166ca4, _0x671e31) {
      this.width = _0x4ff812;
      this.height = _0x430e19;
      this.marginBottom = _0x166ca4;
      this.marginLeft = _0x671e31;
      this.marginRight = _0x2e48d9;
      this.marginTop = _0x22edf0;
      let _0xf50982 = this._openList,
        _0x5b7047 = _0xf50982.length;
      for (let _0x227f33 = 0; _0x227f33 < _0x5b7047; _0x227f33++) {
        let _0x49d60e = _0xf50982[_0x227f33];
        _0x49d60e.onResize ? _0x49d60e.onResize() : _0x49d60e.size(_0x4ff812, _0x430e19);
      }
    }
  }
  class _0x42abf1 extends Laya.View {
    constructor() {
      super();
      this.maskAlpha = 0.7;
      this._openList = [];
      this._closeList = [];
      this._maskBg = new Laya.Sprite();
      this._maskBg.alpha = this.maskAlpha;
      this._maskBg.mouseEnabled = true;
      this._maskBg.mouseThrough = false;
      this._maskBg.name = "popMask";
      this.mouseThrough = true;
      this._maskBg.on(Laya.Event.CLICK, this, this.onMaskClick);
    }
    get topPop() {
      let _0x5d0f20 = this._openList,
        _0x2132bb = _0x5d0f20.length;
      if (_0x2132bb > 0) {
        return _0x5d0f20[_0x2132bb - 1];
      }
      return null;
    }
    get popCount() {
      return this._openList.length;
    }
    get maskBg() {
      return this._maskBg;
    }
    openPop(_0x3ddf86) {
      if (!_0x3ddf86 || !_0x3ddf86.class) {
        return;
      }
      _0x3ddf86.class.isSingle && this.closePop(_0x3ddf86.class);
      if (_0x3ddf86.mask == undefined) {
        _0x3ddf86.mask = true;
      }
      let _0x3650af = this._getPopFromCloseList(_0x3ddf86.class);
      !_0x3650af && (_0x3650af = this._createPopByClass(_0x3ddf86.class));
      _0x3650af.lo = _0x3ddf86;
      _0x3650af.name = "";
      if (_0x3ddf86.name) {
        _0x3650af.name = _0x3ddf86.name;
      }
      this._openList.push(_0x3650af);
      this.addChild(_0x3650af);
      _0x3650af.scaleX = 1;
      _0x3650af.scaleY = 1;
      _0x3650af.onResize && _0x3650af.onResize();
      _0x3650af.onOpen && _0x3650af.onOpen();
      _0x3650af.updateMsg && _0x3650af.updateMsg();
      this._removeMask();
      let _0x2fe413 = this._checkMaskNeeded();
      if (_0x2fe413 != null) {
        this._addMask(_0x2fe413);
      }
      if (_0x3650af.dingwei) {
        _0x3ddf86.mask && (Laya.Tween.clearAll(this._maskBg), this._maskBg.alpha = this.getMaskAlpha(_0x3650af));
        return;
      }
      Laya.Tween.clearAll(_0x3650af);
      _0x3650af.anchorX = 0.5;
      _0x3650af.anchorY = 0.5;
      _0x3650af.scaleX = 0.1;
      _0x3650af.scaleY = 0.1;
      _0x3650af.x = Laya.stage.width / 2;
      _0x3650af.y = Laya.stage.height / 2;
      Laya.Tween.to(_0x3650af, {
        scaleX: 1,
        scaleY: 1
      }, 300, Laya.Ease.backOut);
      Laya.Tween.clearAll(this._maskBg);
      let _0xa4dca9 = this.getMaskAlpha(_0x3650af);
      this._getMaskNum() > 1 ? this._maskBg.alpha = _0xa4dca9 : (this._maskBg.alpha = 0, Laya.Tween.to(this._maskBg, {
        alpha: _0xa4dca9
      }, 200));
    }
    getMaskAlpha(_0x2d3cec) {
      if (_0x2d3cec.maskAlpha != undefined) {
        return _0x2d3cec.maskAlpha;
      }
      return this.maskAlpha;
    }
    _checkMaskNeeded() {
      let _0x5587af = this._openList,
        _0x207729 = _0x5587af.length,
        _0x33d5f0 = null;
      for (let _0x4b3127 = _0x207729 - 1; _0x4b3127 >= 0; _0x4b3127--) {
        let _0x260b43 = _0x5587af[_0x4b3127],
          _0x5d795a = true;
        if (_0x260b43.lo.mask != undefined) {
          _0x5d795a = _0x260b43.lo.mask;
        }
        if (_0x5d795a) {
          _0x33d5f0 = _0x260b43;
          break;
        }
      }
      return _0x33d5f0;
    }
    _getMaskNum() {
      let _0x21db68 = 0,
        _0x31fb2b = this._openList,
        _0x43e9a4 = _0x31fb2b.length;
      for (let _0xf031c2 = _0x43e9a4 - 1; _0xf031c2 >= 0; _0xf031c2--) {
        let _0x54fb9d = _0x31fb2b[_0xf031c2];
        if (_0x54fb9d.lo.mask) {
          _0x21db68++;
        }
      }
      return _0x21db68;
    }
    closePop(_0x42cd93, _0x50259 = null) {
      if (!_0x42cd93) {
        return;
      }
      let _0x22602b = this.popExist(_0x42cd93, _0x50259);
      if (_0x22602b == -1) {
        return;
      }
      let _0x487207 = this._openList.splice(_0x22602b, 1)[0];
      this._addToCloseList(_0x487207);
      if (_0x487207.dingwei) {
        _0x487207.removeSelf();
        this._removeMask();
        let _0x2a7953 = this._checkMaskNeeded();
        _0x2a7953 != null && this._addMask(_0x2a7953);
      } else {
        Laya.Tween.to(_0x487207, {
          scaleX: 0,
          scaleY: 0
        }, 200, null, Laya.Handler.create(this, _0x2bc53e => {
          _0x2bc53e.removeSelf();
          this._removeMask();
          let _0x37dff6 = this._checkMaskNeeded();
          if (_0x37dff6 != null) {
            let _0x521ebe = this.getMaskAlpha(_0x37dff6);
            this._maskBg.alpha = _0x521ebe;
            this._addMask(_0x37dff6);
          }
        }, [_0x487207]));
        Laya.Tween.clearAll(this._maskBg);
        Laya.Tween.to(this._maskBg, {
          alpha: 0.1
        }, 180);
      }
    }
    _addToCloseList(_0x1a602c) {
      this._closeList.push(_0x1a602c);
      _0x1a602c.onClose && _0x1a602c.onClose();
      _0x1a602c.closeTime = Date.now();
    }
    closeAllPops() {
      let _0x89712a = this._openList,
        _0x146850 = _0x89712a.length;
      for (let _0x27733d = _0x146850 - 1; _0x27733d >= 0; _0x27733d--) {
        let _0x4abc29 = _0x89712a[_0x27733d];
        _0x4abc29.removeSelf();
        this._addToCloseList(_0x4abc29);
      }
      this._openList.length = 0;
      this._removeMask();
    }
    deletePop(_0x623177, _0x1a515c = null) {
      if (!_0x623177) {
        return;
      }
      let _0x3495df = this._closeList,
        _0x49b6ed = _0x3495df.length,
        _0x2535ab = null;
      for (let _0x292f00 = _0x49b6ed - 2; _0x292f00 >= 0; _0x292f00--) {
        let _0x2f0db0 = _0x3495df[_0x292f00];
        if (_0x2f0db0.lo.class == _0x623177) {
          _0x1a515c ? _0x2f0db0.name == _0x1a515c && (_0x2535ab = _0x2f0db0, _0x3495df.splice(_0x292f00, 1)) : (_0x2535ab = _0x2f0db0, _0x3495df.splice(_0x292f00, 1));
          if (_0x2535ab) {
            break;
          }
        }
      }
      _0x2535ab && _0x2535ab.onDelete && _0x2535ab.onDelete();
    }
    popExist(_0x1bcc2f, _0x2a205e = null) {
      let _0x21f6e7 = this._openList,
        _0x151bf3 = _0x21f6e7.length;
      for (let _0x19a41f = _0x151bf3 - 1; _0x19a41f >= 0; _0x19a41f--) {
        let _0x264699 = _0x21f6e7[_0x19a41f];
        if (_0x264699.lo.class == _0x1bcc2f) {
          if (_0x2a205e) {
            if (_0x264699.name == _0x2a205e) {
              return _0x19a41f;
            }
          } else {
            return _0x19a41f;
          }
        }
      }
      return -1;
    }
    getPopByClass(_0x520be6, _0x4e3c16 = null) {
      let _0x104a8a = this.popExist(_0x520be6, _0x4e3c16);
      if (_0x104a8a != -1) {
        return this._openList[_0x104a8a];
      }
      return null;
    }
    getPopByIndex(_0x309b50) {
      if (_0x309b50 >= 0 && _0x309b50 < this._openList.length) {
        return this._openList[_0x309b50];
      }
      return null;
    }
    _drawMask() {
      this._maskBg.graphics.clear();
      this._maskBg.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#000000");
    }
    _removeMask() {
      this._maskBg.parent && this.removeChild(this._maskBg);
    }
    _addMask(_0x208bf1) {
      let _0x2feedb = this.getChildIndex(_0x208bf1);
      if (_0x2feedb == -1) {
        this._removeMask();
        return;
      }
      this._drawMask();
      let _0x598ec0 = this._maskBg;
      _0x598ec0.width = Laya.stage.width;
      _0x598ec0.height = Laya.stage.height;
      this.addChildAt(_0x598ec0, _0x2feedb);
    }
    _getPopFromCloseList(_0x41bbfc) {
      let _0x5966f4 = this._closeList,
        _0x1bd16f = _0x5966f4.length;
      for (let _0x2ba050 = 0; _0x2ba050 < _0x1bd16f; _0x2ba050++) {
        let _0x2fc364 = _0x5966f4[_0x2ba050];
        if (_0x2fc364.lo.class == _0x41bbfc) {
          _0x5966f4.splice(_0x2ba050, 1);
          return _0x2fc364;
        }
      }
      return null;
    }
    _createPopByClass(_0x57637b) {
      let _0x2e59c3 = new _0x57637b();
      return _0x2e59c3;
    }
    createPop(_0x2c85bc) {
      if (!_0x2c85bc || !_0x2c85bc.class) {
        return;
      }
      let _0x27046f = this._getPopFromCloseList(_0x2c85bc.class);
      !_0x27046f && (_0x27046f = this._createPopByClass(_0x2c85bc.class));
      _0x27046f.lo = _0x2c85bc;
      this._closeList.push(_0x27046f);
    }
    onResize() {
      this.width = Laya.stage.width;
      this.height = Laya.stage.height;
    }
    updateMsg() {
      let _0x223838 = this._openList,
        _0xe857b7 = _0x223838.length;
      for (let _0xd0d9e7 = 0; _0xd0d9e7 < _0xe857b7; _0xd0d9e7++) {
        let _0x43f9ec = _0x223838[_0xd0d9e7];
        _0x43f9ec.updateMsg && _0x43f9ec.updateMsg();
      }
    }
    onMaskClick(_0x50b353) {
      let _0x2e6ec6 = this.topPop;
      if (_0x2e6ec6 && _0x2e6ec6.lo.mask != false && _0x2e6ec6.onMaskClick) {
        _0x2e6ec6.onMaskClick();
      }
    }
  }
  class _0x4f2eaa extends Laya.Sprite {
    constructor() {
      super();
      this.waitList = [];
      this.txtPool = [];
      this.htmlPool = [];
      this.showList = [];
      this.showMax = 5;
      this.middleX = 0;
      this.middleY = 0;
      this.vSpace = 46;
      this.viewRect = new Laya.Rectangle();
      this.speed = 0.15;
      this.mouseEnabled = false;
      this.mouseThrough = true;
      this.bottomH = 280;
      this.resize();
    }
    get showCount() {
      return this.showList.length;
    }
    resize() {
      this.bottomH = Laya.stage.height / 2;
      this.realWidth = Laya.stage.width;
      this.realHeight = Laya.stage.height;
      this.width = this.realWidth;
      this.height = this.realHeight;
      this.middleX = this.realWidth / 2;
      this.middleY = this.realHeight - this.bottomH;
      this.viewRect.width = this.realWidth;
      this.viewRect.height = this.middleY + this.vSpace;
      this.viewport = this.viewRect;
    }
    addTip(_0x4b59fb) {
      if (this.showCount < this.showMax) {
        this._showOneTip(_0x4b59fb);
      } else {
        if (this.waitList.length > this.showMax * 2) {
          this.waitList.push(_0x4b59fb);
        }
      }
    }
    _showOneTip(_0x51ec42) {
      let _0x2e266d = _0x51ec42.t;
      if (!_0x2e266d) {
        return;
      }
      let _0xdcf069 = null,
        _0x31c183 = null;
      if (_0x2e266d.indexOf(" style") == -1) {
        _0xdcf069 = this._getOneTxtFromPool();
        _0x31c183 = _0xdcf069.getChildAt(0);
        _0x31c183.text = _0x2e266d;
        _0xdcf069.width = _0x31c183.textField.textWidth + 50;
        if (_0x51ec42.c) {
          _0x31c183.color = _0x51ec42.c;
        }
      } else {
        _0xdcf069 = this._getOneHtmlFromPool();
        _0x31c183 = _0xdcf069.getChildAt(0);
        _0x31c183.width = _0xdcf069.width;
        _0x31c183.innerHTML = _0x2e266d;
        _0x31c183.y = (_0xdcf069.height - _0x31c183.height) / 2;
      }
      _0xdcf069.y = this.middleY;
      if (this.showCount > 0) {
        let _0x2182c5 = this.showCount,
          _0x10d4c0 = this.middleY - this.vSpace;
        for (let _0x3598ed = _0x2182c5 - 1; _0x3598ed >= 0; _0x3598ed--) {
          let _0x2a96ab = this.showList[_0x3598ed];
          _0x2a96ab.y = _0x10d4c0;
          _0x10d4c0 -= this.vSpace;
        }
      }
      this.addChild(_0xdcf069);
      this.showList.push(_0xdcf069);
      _0xdcf069.alpha = 1;
      Laya.Tween.to(_0xdcf069, {
        alpha: 0
      }, 500, null, Laya.Handler.create(this, this._onTweenOver, [_0xdcf069]), 2000);
    }
    _onTweenOver(_0x273940) {
      this.removeChild(_0x273940);
      let _0x534ad5 = this.showList.indexOf(_0x273940);
      _0x534ad5 != -1 && this.showList.splice(_0x534ad5, 1);
      let _0xb4d16a = _0x273940.getChildAt(0);
      _0xb4d16a instanceof Laya.Label ? this.txtPool.push(_0x273940) : this.htmlPool.push(_0x273940);
      this.waitList.length > 0 && this._showOneTip(this.waitList.shift());
    }
    _getOneTxtFromPool() {
      let _0x101467 = this.txtPool.pop();
      if (!_0x101467) {
        _0x101467 = new Laya.Image("comp/piaozi.png");
        _0x101467.sizeGrid = "24,23,21,25";
        _0x101467.centerX = 0;
        _0x101467.width = 720;
        let _0xcf7786 = new Laya.Label();
        _0xcf7786.fontSize = 24;
        _0xcf7786.height = 26;
        _0xcf7786.valign = "middle";
        _0xcf7786.align = "center";
        _0xcf7786.color = "#ffffff";
        _0xcf7786.centerX = 0;
        _0xcf7786.centerY = 0;
        _0x101467.addChild(_0xcf7786);
      }
      return _0x101467;
    }
    _getOneHtmlFromPool() {
      let _0x2bfc18 = this.htmlPool.pop();
      if (!_0x2bfc18) {
        _0x2bfc18 = new Laya.Image("comp/piaozi.png");
        _0x2bfc18.centerX = 0;
        _0x2bfc18.width = 720;
        _0x2bfc18.height = this.vSpace - 2;
        let _0x44df58 = new Laya.HTMLDivElement();
        _0x44df58.style.fontSize = 24;
        _0x44df58.style.color = "#ffffff";
        _0x44df58.style.align = "center";
        _0x2bfc18.addChild(_0x44df58);
      }
      return _0x2bfc18;
    }
    onResize() {
      this.resize();
    }
  }
  class _0xfa0c80 extends Laya.Sprite {
    constructor() {
      super();
      this.showList = [];
      this.pool = [];
      this.tipBg = null;
      this.tipBox = null;
      this.tipSpace = 400;
      this.tipSpeed = 1;
      this.offsetY = 9;
      this.mouseEnabled = false;
      this.mouseThrough = true;
    }
    showNotice(_0x1e4f10, _0x5947a9 = 1) {
      !this.tipBg && (this.tipBg = new Laya.Image("comp/xiangqing/tishi.png"), this.tipBg.x = 6, this.tipBox = new Laya.Box(), this.tipBox.width = 1200, this.tipBox.height = 40, this.tipBox.scrollRect = new Laya.Rectangle(0, 0, this.tipBox.width, this.tipBox.height), this.addChild(this.tipBg), this.tipBox.pos((Laya.stage.width - this.tipBox.width) / 2, 0), this.addChild(this.tipBox));
      this.visible = true;
      this.showList.length == 0 && Laya.timer.frameLoop(1, this, this.onTimer);
      for (let _0x6de3a8 = 0; _0x6de3a8 < _0x5947a9; _0x6de3a8++) {
        this.addOneTip(_0x1e4f10);
      }
    }
    clearAllNotice() {
      Laya.timer.clear(this, this.onTimer);
      let _0x183fe9 = this.showList,
        _0x54d05a = _0x183fe9.length;
      for (let _0x5d4e79 = _0x54d05a - 1; _0x5d4e79 >= 0; _0x5d4e79--) {
        this.recoverTip(_0x183fe9[_0x5d4e79]);
      }
      _0x183fe9.length = 0;
      this.visible = false;
    }
    addOneTip(_0x5cbbb6) {
      let _0x405db2 = this.getTipFromPool();
      try {
        _0x405db2.innerHTML = _0x5cbbb6;
      } catch (_0x275759) {
        _0x405db2 = null;
        console.log(_0x275759);
      }
      if (!_0x405db2) {
        return;
      }
      _0x405db2.width = _0x405db2.contextWidth || 100;
      let _0x41918c = this.showList.length;
      if (_0x41918c == 0) {
        _0x405db2.x = this.tipBox.width;
      } else {
        let _0x49e2b6 = this.showList[_0x41918c - 1],
          _0x3d2ed6 = _0x49e2b6.x + _0x49e2b6.width + this.tipSpace;
        if (_0x3d2ed6 < this.tipBox.width) {
          _0x405db2.x = this.tipBox.width;
        } else {
          _0x405db2.x = _0x3d2ed6;
        }
      }
      this.tipBox.addChild(_0x405db2);
      this.showList.push(_0x405db2);
    }
    getTipFromPool() {
      let _0x57c752 = this.pool.pop();
      !_0x57c752 && (_0x57c752 = new Laya.HTMLDivElement(), _0x57c752.style.color = "#FDFFDD", _0x57c752.style.fontSize = 24, _0x57c752.style.wordWrap = false, _0x57c752.y = this.offsetY);
      return _0x57c752;
    }
    recoverTip(_0x1a32ad) {
      this.pool.indexOf(_0x1a32ad) == -1 && this.pool.push(_0x1a32ad);
    }
    onTimer() {
      let _0x12228b = this.showList,
        _0x934b66 = _0x12228b.length;
      for (let _0xf5eade = _0x934b66 - 1; _0xf5eade >= 0; _0xf5eade--) {
        let _0x1a7c2f = _0x12228b[_0xf5eade];
        _0x1a7c2f.x -= this.tipSpeed;
        _0x1a7c2f.x + _0x1a7c2f.width < 0 && (_0x12228b.splice(_0xf5eade, 1), this.recoverTip(_0x1a7c2f));
      }
      _0x12228b.length == 0 && (Laya.timer.clear(this, this.onTimer), this.visible = false);
    }
    onResize() {}
  }
  class _0x144d70 extends Laya.View {
    constructor() {
      super();
      this.marginTop = 0;
      this.marginLeft = 0;
      this.marginRight = 0;
      this.marginBottom = 0;
      this.normalGroup = new _0x42abf1();
      this.tipGroup = new _0x42abf1();
      this.guideGroup = new _0x42abf1();
      this.bottomPop = new _0x4f2eaa();
      this.topPop = new _0xfa0c80();
      this.addChild(this.normalGroup);
      this.addChild(this.guideGroup);
      this.addChild(this.tipGroup);
      this.addChild(this.bottomPop);
      this.addChild(this.topPop);
      this.topPop.y = 100;
      this.mouseThrough = true;
    }
    closeAllPops() {
      this.normalGroup.closeAllPops();
      this.tipGroup.closeAllPops();
    }
    showTip(_0xaae0f2) {
      this.bottomPop.addTip(_0xaae0f2);
    }
    showPmd(_0x29b797, _0x94e335) {
      this.topPop.showNotice(_0x29b797, _0x94e335);
    }
    closePopThis(_0x1651bc) {
      if (_0x1651bc && _0x1651bc.parent) {
        let _0xd318a0 = _0x1651bc.parent;
        _0xd318a0 instanceof _0x42abf1 && _0xd318a0.closePop(_0x1651bc.lo.class, _0x1651bc.name);
      }
    }
    onResize(_0x3a433b, _0x11fc12, _0x86f8a7, _0x36877f, _0x451543, _0x304302) {
      this.width = _0x3a433b;
      this.height = _0x11fc12;
      this.marginTop = _0x86f8a7;
      this.marginBottom = _0x451543;
      this.marginRight = _0x36877f;
      this.marginLeft = _0x304302;
      this.normalGroup.onResize();
      this.tipGroup.onResize();
      this.bottomPop.onResize();
      this.topPop.onResize();
      this.guideGroup.onResize();
    }
    deletePopThis(_0x3be5ec) {
      if (_0x3be5ec && _0x3be5ec.parent) {
        let _0x4de3a1 = _0x3be5ec.parent;
        _0x4de3a1 instanceof _0x42abf1 && _0x4de3a1.deletePop(_0x3be5ec.lo.class, _0x3be5ec.name);
      }
    }
    updateMsg() {
      this.normalGroup.updateMsg();
      this.tipGroup.updateMsg();
      this.guideGroup.updateMsg();
    }
    openGuide(_0x365c54) {
      Laya.stage.addChild(this.guideGroup);
      this.guideGroup.openPop(_0x365c54);
    }
  }
  class _0xccd285 {
    static init(_0x1bf746) {
      _0xccd285._eventer && console.warn("GameFrame已初始化，请勿重复调用");
      _0xccd285._eventer = new Laya.EventDispatcher();
      _0xccd285._viewMgr = new _0x58af8c();
      _0xccd285._popMgr = new _0x144d70();
      _0x1bf746.addChild(_0xccd285._viewMgr);
      _0x1bf746.addChild(_0xccd285._popMgr);
      Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);
      this.onResize();
      Laya.stage.on(Laya.Event.VISIBILITY_CHANGE, this, this.onVisibleChange);
      Laya.timer.loop(this.DeleteTime, this, this.onDeleteTime);
    }
    static get viewMgr() {
      return _0xccd285._viewMgr;
    }
    static get PopMgr() {
      return _0xccd285._popMgr;
    }
    static get marginLeft() {
      return this._marginLeft;
    }
    static set marginLeft(_0x402f40) {
      this._marginLeft = _0x402f40;
      this.onResize();
    }
    static get marginRight() {
      return this._marginRight;
    }
    static set marginRight(_0x58accb) {
      this._marginRight = _0x58accb;
      this.onResize();
    }
    static get marginTop() {
      return this._marginTop;
    }
    static set marginTop(_0x356edb) {
      this._marginTop = _0x356edb;
      this.onResize();
    }
    static get marginBottom() {
      return this._marginBottom;
    }
    static set marginBottom(_0x24891a) {
      this._marginLeft = _0x24891a;
      this.onResize();
    }
    static on(_0x3bb867, _0x38f2c2, _0x55630a, _0x4b2a2e = null) {
      _0xccd285._eventer.on(_0x3bb867, _0x38f2c2, _0x55630a, _0x4b2a2e);
    }
    static once(_0x2146a0, _0x2304e2, _0x13785e, _0x5673ec = null) {
      _0xccd285._eventer.once(_0x2146a0, _0x2304e2, _0x13785e, _0x5673ec);
    }
    static off(_0x43c7c3, _0x5b4d6e, _0x31641e, _0x8eb381) {
      _0xccd285._eventer.off(_0x43c7c3, _0x5b4d6e, _0x31641e, _0x8eb381);
    }
    static emit(_0x25c22a, _0x488ea4 = null) {
      return _0xccd285._eventer.event(_0x25c22a, _0x488ea4);
    }
    static openView(_0x42c337, _0xd7798c = false) {
      _0xccd285.viewMgr.openView(_0x42c337, _0xd7798c);
    }
    static closeView(_0x5d2592, _0xcc7916 = null) {
      _0xccd285.viewMgr.closeView(_0x5d2592, _0xcc7916);
    }
    static deleteView(_0x977a16, _0x39e48f = null) {
      _0xccd285.viewMgr.deleteView(_0x977a16, _0x39e48f);
    }
    static deleteViewThis(_0x12a75d) {
      _0xccd285.viewMgr.deleteViewThis(_0x12a75d);
    }
    static backView() {
      _0xccd285.viewMgr.backView();
    }
    static backHome(_0x31f1aa, _0x49ceb2 = false) {
      _0xccd285.viewMgr.backHome(_0x31f1aa, _0x49ceb2);
    }
    static closeAllViews() {
      _0xccd285.viewMgr.closeAllViews();
    }
    static showTip(_0x2f0755, _0x4a7c3b = "#ffffff") {
      _0xccd285.PopMgr.showTip({
        t: _0x2f0755,
        c: _0x4a7c3b
      });
    }
    static showPmd(_0x52b7f8, _0xbcdb10 = 1) {
      _0xccd285.PopMgr.showPmd(_0x52b7f8, _0xbcdb10);
    }
    static openPop(_0x2df716) {
      _0xccd285.PopMgr.normalGroup.openPop(_0x2df716);
    }
    static closePop(_0x42a210, _0x2ef12d = null) {
      _0xccd285.PopMgr.normalGroup.closePop(_0x42a210, _0x2ef12d);
    }
    static deletePop(_0x51e455, _0x4102b1 = null) {
      _0xccd285.PopMgr.normalGroup.deletePop(_0x51e455, _0x4102b1);
    }
    static deletePopThis(_0x24d7d0) {
      _0xccd285.PopMgr.deletePopThis(_0x24d7d0);
    }
    static addOpenTask(_0x2291ba) {
      _0xccd285.viewMgr.addTask(_0x2291ba);
    }
    static removeOpenTask(_0x3e2206) {
      _0xccd285.viewMgr.removeTask(_0x3e2206);
    }
    static closePopThis(_0x5b5376) {
      _0xccd285.PopMgr.closePopThis(_0x5b5376);
    }
    static onResize(_0x3db3b3) {
      _0xccd285.realWidth = Laya.stage.width;
      _0xccd285.realHeight = Laya.stage.height;
      _0xccd285.viewMgr.y = _0xccd285.marginTop;
      _0xccd285.viewMgr.x = _0xccd285.marginLeft;
      this.viewMgr.onResize(this.realWidth, this.realHeight, this.marginTop, this.marginLeft, this.marginBottom, this.marginLeft);
      this.PopMgr.onResize(this.realWidth, this.realHeight, this.marginTop, this.marginLeft, this.marginBottom, this.marginLeft);
    }
    static updateMsg() {
      _0xccd285.viewMgr.updateMsg();
      _0xccd285.PopMgr.updateMsg();
    }
    static onVisibleChange() {
      _0xccd285.visibleHandler(Laya.stage.isVisibility);
    }
    static visibleHandler(_0x59b313) {}
    static errorHandler(_0xe9839e) {
      console.log("unknown error:", _0xe9839e);
      let _0x8aa01e = _0xe9839e.error;
      if (_0x8aa01e && User.id) {
        let _0x4e22b1 = {
          message: _0x8aa01e.message,
          stack: _0x8aa01e.stack
        };
        socket.send(Protocol.recordError, _0x4e22b1);
      }
    }
    static onDeleteTime() {
      this.checkViewDelete(this.viewMgr._closeList);
      let _0x1c50e2 = ["normalGroup", "tipGroup", "guideGroup"],
        _0x2a85b5 = this.PopMgr,
        _0xa31250 = _0x1c50e2.length;
      for (let _0x58e2ff = 0; _0x58e2ff < _0xa31250; _0x58e2ff++) {
        let _0x24411b = _0x1c50e2[_0x58e2ff],
          _0x4d4e27 = _0x2a85b5[_0x24411b];
        _0x4d4e27 && this.checkViewDelete(_0x4d4e27._closeList);
      }
    }
    static checkViewDelete(_0x4a0baf) {
      let _0x4b294a = Date.now(),
        _0x55fa27 = this.DeleteTime,
        _0x48e219 = _0x4a0baf.length;
      for (let _0x2f4232 = _0x48e219 - 1; _0x2f4232 >= 0; _0x2f4232--) {
        let _0x2bddb1 = _0x4a0baf[_0x2f4232];
        if (_0x2bddb1.closeTime && _0x4b294a - _0x2bddb1.closeTime > _0x55fa27) {
          _0x4a0baf.splice(_0x2f4232, 1);
          _0x2bddb1.removeSelf();
          if (_0x2bddb1.onDelete) {
            _0x2bddb1.onDelete();
          }
        }
      }
    }
  }
  _0xccd285._eventer = null;
  _0xccd285.designWidth = 750;
  _0xccd285.designHeight = 1334;
  _0xccd285.realWidth = 750;
  _0xccd285.realHeight = 1334;
  _0xccd285._marginLeft = 0;
  _0xccd285._marginRight = 0;
  _0xccd285._marginTop = 0;
  _0xccd285._marginBottom = 0;
  _0xccd285.DeleteTime = 600000;
  class _0x48941d {}
  _0x48941d.progress = 0;
  _0x48941d.loadArr = ["ui.json", "res/atlas/comp/loading.atlas", "comp/loading/bg.jpg", "comp/loading/bg2.jpg"];
  _0x48941d.resArr = ["comp/gameBg.jpg", "comp/inviteBigPop.png", "comp/lvPop.png", "comp/rankPop.png", "comp/teamPop.png", "res/atlas/comp/icon.atlas", "res/atlas/comp.atlas"];
  _0x48941d.gameArr = ["comp/answerBg.jpg", "comp/poster1.jpg", "comp/poster2.jpg", "comp/poster3.jpg", "comp/poster4.jpg", "comp/poster6.jpg", "comp/posterbg.jpg", "comp/succPop.png"];
  function _0x578a73() {
    'use strict';

    var _0x304e02 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function _0xadf6e5(_0x4f5b8f) {
      this.message = _0x4f5b8f;
    }
    (_0xadf6e5.prototype = new Error()).name = "InvalidCharacterError";
    return {
      btoa: function (_0x12269f) {
        for (var _0x38d9eb, _0x21cd6f, _0x20cf55 = String(_0x12269f), _0x183339 = 0, _0x172eb9 = _0x304e02, _0x5acb1f = ""; _0x20cf55.charAt(0 | _0x183339) || (_0x172eb9 = "=", _0x183339 % 1); _0x5acb1f += _0x172eb9.charAt(63 & _0x38d9eb >> 8 - _0x183339 % 1 * 8)) {
          if (255 < (_0x21cd6f = _0x20cf55.charCodeAt(_0x183339 += 0.75))) {
            throw new _0xadf6e5("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
          }
          _0x38d9eb = _0x38d9eb << 8 | _0x21cd6f;
        }
        return _0x5acb1f;
      },
      atob: function (_0x1c9442) {
        var _0x3ea591 = String(_0x1c9442).replace(/[=]+$/, "");
        if (_0x3ea591.length % 4 == 1) {
          throw new _0xadf6e5("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (var _0x4b8e30, _0x485523, _0x4bfefa = 0, _0x28c3dc = 0, _0x368019 = ""; _0x485523 = _0x3ea591.charAt(_0x28c3dc++); ~_0x485523 && (_0x4b8e30 = _0x4bfefa % 4 ? 64 * _0x4b8e30 + _0x485523 : _0x485523, _0x4bfefa++ % 4) && (_0x368019 += String.fromCharCode(255 & _0x4b8e30 >> (-2 * _0x4bfefa & 6)))) {
          _0x485523 = _0x304e02.indexOf(_0x485523);
        }
        return _0x368019;
      }
    };
  }
  function _0x397a2c() {
    return function _0x30600b(_0x486d9c, _0x925952, _0x151ac1) {
      function _0x168375(_0x44efec, _0x1f0fbf) {
        if (!_0x925952[_0x44efec]) {
          if (!_0x486d9c[_0x44efec]) {
            var _0x585137 = "function" == typeof require && require;
            if (!_0x1f0fbf && _0x585137) {
              return _0x585137(_0x44efec, !0);
            }
            if (_0x5375d4) {
              return _0x5375d4(_0x44efec, !0);
            }
            var _0x1fe285 = new Error("Cannot find module '" + _0x44efec + "'");
            throw _0x1fe285.code = "MODULE_NOT_FOUND", _0x1fe285;
          }
          _0x925952[_0x44efec] = {
            exports: {}
          };
          var _0x40cca0 = _0x925952[_0x44efec];
          _0x486d9c[_0x44efec][0].call(_0x40cca0.exports, function (_0x4af78a) {
            return _0x168375(_0x486d9c[_0x44efec][1][_0x4af78a] || _0x4af78a);
          }, _0x40cca0, _0x40cca0.exports, _0x30600b, _0x486d9c, _0x925952, _0x151ac1);
        }
        return _0x925952[_0x44efec].exports;
      }
      for (var _0x5375d4 = "function" == typeof require && require, _0x5901bb = 0; _0x5901bb < _0x151ac1.length; _0x5901bb++) {
        _0x168375(_0x151ac1[_0x5901bb]);
      }
      return _0x168375;
    }({
      1: [function (_0x5a58ec, _0x5b9d62, _0x2d3444) {
        'use strict';

        var _0x57efe7 = _0x5a58ec("./zlib/deflate"),
          _0x1557b9 = _0x5a58ec("./utils/common"),
          _0x2dbbe6 = _0x5a58ec("./utils/strings"),
          _0x406297 = _0x5a58ec("./zlib/messages"),
          _0x2fd38d = _0x5a58ec("./zlib/zstream"),
          _0x468865 = Object.prototype.toString,
          _0x372492 = 0,
          _0x5810ea = -1,
          _0x239d96 = 0,
          _0x435ee8 = 8;
        function _0x3e3d21(_0x5aa94b) {
          if (!(this instanceof _0x3e3d21)) {
            return new _0x3e3d21(_0x5aa94b);
          }
          this.options = _0x1557b9.assign({
            level: _0x5810ea,
            method: _0x435ee8,
            chunkSize: 16384,
            windowBits: 15,
            memLevel: 8,
            strategy: _0x239d96,
            to: ""
          }, _0x5aa94b || {});
          var _0x339d0d = this.options;
          _0x339d0d.raw && 0 < _0x339d0d.windowBits ? _0x339d0d.windowBits = -_0x339d0d.windowBits : _0x339d0d.gzip && 0 < _0x339d0d.windowBits && _0x339d0d.windowBits < 16 && (_0x339d0d.windowBits += 16);
          this.err = 0;
          this.msg = "";
          this.ended = !1;
          this.chunks = [];
          this.strm = new _0x2fd38d();
          this.strm.avail_out = 0;
          var _0x34f25c = _0x57efe7.deflateInit2(this.strm, _0x339d0d.level, _0x339d0d.method, _0x339d0d.windowBits, _0x339d0d.memLevel, _0x339d0d.strategy);
          if (_0x34f25c !== _0x372492) {
            throw new Error(_0x406297[_0x34f25c]);
          }
          if (_0x339d0d.header && _0x57efe7.deflateSetHeader(this.strm, _0x339d0d.header), _0x339d0d.dictionary) {
            var _0x537d51;
            if (_0x537d51 = "string" == typeof _0x339d0d.dictionary ? _0x2dbbe6.string2buf(_0x339d0d.dictionary) : "[object ArrayBuffer]" === _0x468865.call(_0x339d0d.dictionary) ? new Uint8Array(_0x339d0d.dictionary) : _0x339d0d.dictionary, (_0x34f25c = _0x57efe7.deflateSetDictionary(this.strm, _0x537d51)) !== _0x372492) {
              throw new Error(_0x406297[_0x34f25c]);
            }
            this._dict_set = !0;
          }
        }
        function _0x24f420(_0x446755, _0x1dacab) {
          var _0x4978a6 = new _0x3e3d21(_0x1dacab);
          if (_0x4978a6.push(_0x446755, !0), _0x4978a6.err) {
            throw _0x4978a6.msg || _0x406297[_0x4978a6.err];
          }
          return _0x4978a6.result;
        }
        _0x3e3d21.prototype.push = function (_0x3dd8c0, _0x4c10ca) {
          var _0x2be09a,
            _0x3a38f3,
            _0x2615fe = this.strm,
            _0x289ed7 = this.options.chunkSize;
          if (this.ended) {
            return !1;
          }
          _0x3a38f3 = _0x4c10ca === ~~_0x4c10ca ? _0x4c10ca : !0 === _0x4c10ca ? 4 : 0;
          "string" == typeof _0x3dd8c0 ? _0x2615fe.input = _0x2dbbe6.string2buf(_0x3dd8c0) : "[object ArrayBuffer]" === _0x468865.call(_0x3dd8c0) ? _0x2615fe.input = new Uint8Array(_0x3dd8c0) : _0x2615fe.input = _0x3dd8c0;
          _0x2615fe.next_in = 0;
          _0x2615fe.avail_in = _0x2615fe.input.length;
          do {
            if (0 === _0x2615fe.avail_out && (_0x2615fe.output = new _0x1557b9.Buf8(_0x289ed7), _0x2615fe.next_out = 0, _0x2615fe.avail_out = _0x289ed7), 1 !== (_0x2be09a = _0x57efe7.deflate(_0x2615fe, _0x3a38f3)) && _0x2be09a !== _0x372492) {
              this.onEnd(_0x2be09a);
              return !(this.ended = !0);
            }
            0 !== _0x2615fe.avail_out && (0 !== _0x2615fe.avail_in || 4 !== _0x3a38f3 && 2 !== _0x3a38f3) || ("string" === this.options.to ? this.onData(_0x2dbbe6.buf2binstring(_0x1557b9.shrinkBuf(_0x2615fe.output, _0x2615fe.next_out))) : this.onData(_0x1557b9.shrinkBuf(_0x2615fe.output, _0x2615fe.next_out)));
          } while ((0 < _0x2615fe.avail_in || 0 === _0x2615fe.avail_out) && 1 !== _0x2be09a);
          return 4 === _0x3a38f3 ? (_0x2be09a = _0x57efe7.deflateEnd(this.strm), this.onEnd(_0x2be09a), this.ended = !0, _0x2be09a === _0x372492) : 2 !== _0x3a38f3 || (this.onEnd(_0x372492), !(_0x2615fe.avail_out = 0));
        };
        _0x3e3d21.prototype.onData = function (_0x51cb6c) {
          this.chunks.push(_0x51cb6c);
        };
        _0x3e3d21.prototype.onEnd = function (_0x2ca6fe) {
          _0x2ca6fe === _0x372492 && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = _0x1557b9.flattenChunks(this.chunks));
          this.chunks = [];
          this.err = _0x2ca6fe;
          this.msg = this.strm.msg;
        };
        _0x2d3444.Deflate = _0x3e3d21;
        _0x2d3444.deflate = _0x24f420;
        _0x2d3444.deflateRaw = function (_0xa4afdf, _0xb5cc5b) {
          (_0xb5cc5b = _0xb5cc5b || {}).raw = !0;
          return _0x24f420(_0xa4afdf, _0xb5cc5b);
        };
        _0x2d3444.gzip = function (_0xcb4e72, _0x1e7ccb) {
          (_0x1e7ccb = _0x1e7ccb || {}).gzip = !0;
          return _0x24f420(_0xcb4e72, _0x1e7ccb);
        };
      }, {
        "./utils/common": 3,
        "./utils/strings": 4,
        "./zlib/deflate": 8,
        "./zlib/messages": 13,
        "./zlib/zstream": 15
      }],
      2: [function (_0x44a809, _0x5c65b9, _0x4689b9) {
        'use strict';

        var _0x58e18c = _0x44a809("./zlib/inflate"),
          _0xd07f15 = _0x44a809("./utils/common"),
          _0x5b75ae = _0x44a809("./utils/strings"),
          _0x1cd71f = _0x44a809("./zlib/constants"),
          _0x55e8cf = _0x44a809("./zlib/messages"),
          _0x2cdc5a = _0x44a809("./zlib/zstream"),
          _0x14bf0a = _0x44a809("./zlib/gzheader"),
          _0x36edeb = Object.prototype.toString;
        function _0x18e833(_0x512e4e) {
          if (!(this instanceof _0x18e833)) {
            return new _0x18e833(_0x512e4e);
          }
          this.options = _0xd07f15.assign({
            chunkSize: 16384,
            windowBits: 0,
            to: ""
          }, _0x512e4e || {});
          var _0xe7582f = this.options;
          _0xe7582f.raw && 0 <= _0xe7582f.windowBits && _0xe7582f.windowBits < 16 && (_0xe7582f.windowBits = -_0xe7582f.windowBits, 0 === _0xe7582f.windowBits && (_0xe7582f.windowBits = -15));
          !(0 <= _0xe7582f.windowBits && _0xe7582f.windowBits < 16) || _0x512e4e && _0x512e4e.windowBits || (_0xe7582f.windowBits += 32);
          15 < _0xe7582f.windowBits && _0xe7582f.windowBits < 48 && 0 == (15 & _0xe7582f.windowBits) && (_0xe7582f.windowBits |= 15);
          this.err = 0;
          this.msg = "";
          this.ended = !1;
          this.chunks = [];
          this.strm = new _0x2cdc5a();
          this.strm.avail_out = 0;
          var _0x250089 = _0x58e18c.inflateInit2(this.strm, _0xe7582f.windowBits);
          if (_0x250089 !== _0x1cd71f.Z_OK) {
            throw new Error(_0x55e8cf[_0x250089]);
          }
          if (this.header = new _0x14bf0a(), _0x58e18c.inflateGetHeader(this.strm, this.header), _0xe7582f.dictionary && ("string" == typeof _0xe7582f.dictionary ? _0xe7582f.dictionary = _0x5b75ae.string2buf(_0xe7582f.dictionary) : "[object ArrayBuffer]" === _0x36edeb.call(_0xe7582f.dictionary) && (_0xe7582f.dictionary = new Uint8Array(_0xe7582f.dictionary)), _0xe7582f.raw && (_0x250089 = _0x58e18c.inflateSetDictionary(this.strm, _0xe7582f.dictionary)) !== _0x1cd71f.Z_OK)) {
            throw new Error(_0x55e8cf[_0x250089]);
          }
        }
        function _0x5054d8(_0x47ca9c, _0x5a8979) {
          var _0x4d9631 = new _0x18e833(_0x5a8979);
          if (_0x4d9631.push(_0x47ca9c, !0), _0x4d9631.err) {
            throw _0x4d9631.msg || _0x55e8cf[_0x4d9631.err];
          }
          return _0x4d9631.result;
        }
        _0x18e833.prototype.push = function (_0x3da75b, _0x197a07) {
          var _0x12c866,
            _0x2b92c9,
            _0x2afb99,
            _0x594c9a,
            _0x2c2698,
            _0x351f38 = this.strm,
            _0x5eb0b5 = this.options.chunkSize,
            _0x4b0a57 = this.options.dictionary,
            _0x3aa12c = !1;
          if (this.ended) {
            return !1;
          }
          _0x2b92c9 = _0x197a07 === ~~_0x197a07 ? _0x197a07 : !0 === _0x197a07 ? _0x1cd71f.Z_FINISH : _0x1cd71f.Z_NO_FLUSH;
          "string" == typeof _0x3da75b ? _0x351f38.input = _0x5b75ae.binstring2buf(_0x3da75b) : "[object ArrayBuffer]" === _0x36edeb.call(_0x3da75b) ? _0x351f38.input = new Uint8Array(_0x3da75b) : _0x351f38.input = _0x3da75b;
          _0x351f38.next_in = 0;
          _0x351f38.avail_in = _0x351f38.input.length;
          do {
            if (0 === _0x351f38.avail_out && (_0x351f38.output = new _0xd07f15.Buf8(_0x5eb0b5), _0x351f38.next_out = 0, _0x351f38.avail_out = _0x5eb0b5), (_0x12c866 = _0x58e18c.inflate(_0x351f38, _0x1cd71f.Z_NO_FLUSH)) === _0x1cd71f.Z_NEED_DICT && _0x4b0a57 && (_0x12c866 = _0x58e18c.inflateSetDictionary(this.strm, _0x4b0a57)), _0x12c866 === _0x1cd71f.Z_BUF_ERROR && !0 === _0x3aa12c && (_0x12c866 = _0x1cd71f.Z_OK, _0x3aa12c = !1), _0x12c866 !== _0x1cd71f.Z_STREAM_END && _0x12c866 !== _0x1cd71f.Z_OK) {
              this.onEnd(_0x12c866);
              return !(this.ended = !0);
            }
            _0x351f38.next_out && (0 !== _0x351f38.avail_out && _0x12c866 !== _0x1cd71f.Z_STREAM_END && (0 !== _0x351f38.avail_in || _0x2b92c9 !== _0x1cd71f.Z_FINISH && _0x2b92c9 !== _0x1cd71f.Z_SYNC_FLUSH) || ("string" === this.options.to ? (_0x2afb99 = _0x5b75ae.utf8border(_0x351f38.output, _0x351f38.next_out), _0x594c9a = _0x351f38.next_out - _0x2afb99, _0x2c2698 = _0x5b75ae.buf2string(_0x351f38.output, _0x2afb99), _0x351f38.next_out = _0x594c9a, _0x351f38.avail_out = _0x5eb0b5 - _0x594c9a, _0x594c9a && _0xd07f15.arraySet(_0x351f38.output, _0x351f38.output, _0x2afb99, _0x594c9a, 0), this.onData(_0x2c2698)) : this.onData(_0xd07f15.shrinkBuf(_0x351f38.output, _0x351f38.next_out))));
            0 === _0x351f38.avail_in && 0 === _0x351f38.avail_out && (_0x3aa12c = !0);
          } while ((0 < _0x351f38.avail_in || 0 === _0x351f38.avail_out) && _0x12c866 !== _0x1cd71f.Z_STREAM_END);
          _0x12c866 === _0x1cd71f.Z_STREAM_END && (_0x2b92c9 = _0x1cd71f.Z_FINISH);
          return _0x2b92c9 === _0x1cd71f.Z_FINISH ? (_0x12c866 = _0x58e18c.inflateEnd(this.strm), this.onEnd(_0x12c866), this.ended = !0, _0x12c866 === _0x1cd71f.Z_OK) : _0x2b92c9 !== _0x1cd71f.Z_SYNC_FLUSH || (this.onEnd(_0x1cd71f.Z_OK), !(_0x351f38.avail_out = 0));
        };
        _0x18e833.prototype.onData = function (_0x21cbcc) {
          this.chunks.push(_0x21cbcc);
        };
        _0x18e833.prototype.onEnd = function (_0x595aa4) {
          _0x595aa4 === _0x1cd71f.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = _0xd07f15.flattenChunks(this.chunks));
          this.chunks = [];
          this.err = _0x595aa4;
          this.msg = this.strm.msg;
        };
        _0x4689b9.Inflate = _0x18e833;
        _0x4689b9.inflate = _0x5054d8;
        _0x4689b9.inflateRaw = function (_0x199021, _0x4d9016) {
          (_0x4d9016 = _0x4d9016 || {}).raw = !0;
          return _0x5054d8(_0x199021, _0x4d9016);
        };
        _0x4689b9.ungzip = _0x5054d8;
      }, {
        "./utils/common": 3,
        "./utils/strings": 4,
        "./zlib/constants": 6,
        "./zlib/gzheader": 9,
        "./zlib/inflate": 11,
        "./zlib/messages": 13,
        "./zlib/zstream": 15
      }],
      3: [function (_0x2e486c, _0xa67f6c, _0x1b72ad) {
        'use strict';

        var _0x40e4a6 = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
        _0x1b72ad.assign = function (_0x483ef9) {
          for (var _0xb176fd, _0x2609e0, _0x5942d4 = Array.prototype.slice.call(arguments, 1); _0x5942d4.length;) {
            var _0x2844dd = _0x5942d4.shift();
            if (_0x2844dd) {
              if ("object" != typeof _0x2844dd) {
                throw new TypeError(_0x2844dd + "must be non-object");
              }
              for (var _0x20690d in _0x2844dd) {
                _0xb176fd = _0x2844dd;
                _0x2609e0 = _0x20690d;
                Object.prototype.hasOwnProperty.call(_0xb176fd, _0x2609e0) && (_0x483ef9[_0x20690d] = _0x2844dd[_0x20690d]);
              }
            }
          }
          return _0x483ef9;
        };
        _0x1b72ad.shrinkBuf = function (_0x5506e2, _0x1c7017) {
          return _0x5506e2.length === _0x1c7017 ? _0x5506e2 : _0x5506e2.subarray ? _0x5506e2.subarray(0, _0x1c7017) : (_0x5506e2.length = _0x1c7017, _0x5506e2);
        };
        var _0x4ddfb5 = {
            arraySet: function (_0x2e18cb, _0x437e83, _0x5b5982, _0x4fa89c, _0x1f0834) {
              if (_0x437e83.subarray && _0x2e18cb.subarray) {
                _0x2e18cb.set(_0x437e83.subarray(_0x5b5982, _0x5b5982 + _0x4fa89c), _0x1f0834);
              } else {
                for (var _0x2b38e4 = 0; _0x2b38e4 < _0x4fa89c; _0x2b38e4++) {
                  _0x2e18cb[_0x1f0834 + _0x2b38e4] = _0x437e83[_0x5b5982 + _0x2b38e4];
                }
              }
            },
            flattenChunks: function (_0x2c598e) {
              var _0x4e7446, _0x410e41, _0x482851, _0x1df9c1, _0x5bcfcc, _0x500c3b;
              for (_0x4e7446 = _0x482851 = 0, _0x410e41 = _0x2c598e.length; _0x4e7446 < _0x410e41; _0x4e7446++) {
                _0x482851 += _0x2c598e[_0x4e7446].length;
              }
              for (_0x500c3b = new Uint8Array(_0x482851), _0x4e7446 = _0x1df9c1 = 0, _0x410e41 = _0x2c598e.length; _0x4e7446 < _0x410e41; _0x4e7446++) {
                _0x5bcfcc = _0x2c598e[_0x4e7446];
                _0x500c3b.set(_0x5bcfcc, _0x1df9c1);
                _0x1df9c1 += _0x5bcfcc.length;
              }
              return _0x500c3b;
            }
          },
          _0xda1b19 = {
            arraySet: function (_0xc80197, _0x2b2142, _0x45a6f2, _0x197f41, _0x3b8dd3) {
              for (var _0x5453dd = 0; _0x5453dd < _0x197f41; _0x5453dd++) {
                _0xc80197[_0x3b8dd3 + _0x5453dd] = _0x2b2142[_0x45a6f2 + _0x5453dd];
              }
            },
            flattenChunks: function (_0x3d8daa) {
              return [].concat.apply([], _0x3d8daa);
            }
          };
        _0x1b72ad.setTyped = function (_0x5823f2) {
          _0x5823f2 ? (_0x1b72ad.Buf8 = Uint8Array, _0x1b72ad.Buf16 = Uint16Array, _0x1b72ad.Buf32 = Int32Array, _0x1b72ad.assign(_0x1b72ad, _0x4ddfb5)) : (_0x1b72ad.Buf8 = Array, _0x1b72ad.Buf16 = Array, _0x1b72ad.Buf32 = Array, _0x1b72ad.assign(_0x1b72ad, _0xda1b19));
        };
        _0x1b72ad.setTyped(_0x40e4a6);
      }, {}],
      4: [function (_0x4a3ebf, _0x1d3616, _0x3b548a) {
        'use strict';

        var _0x3a91bd = _0x4a3ebf("./common"),
          _0x19debf = !0,
          _0x48d7e0 = !0;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch (_0x3f1f3f) {
          _0x19debf = !1;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch (_0x1fe0ca) {
          _0x48d7e0 = !1;
        }
        for (var _0x3c36f9 = new _0x3a91bd.Buf8(256), _0x737fda = 0; _0x737fda < 256; _0x737fda++) {
          _0x3c36f9[_0x737fda] = 252 <= _0x737fda ? 6 : 248 <= _0x737fda ? 5 : 240 <= _0x737fda ? 4 : 224 <= _0x737fda ? 3 : 192 <= _0x737fda ? 2 : 1;
        }
        function _0x469122(_0x363098, _0x5a5896) {
          if (_0x5a5896 < 65534 && (_0x363098.subarray && _0x48d7e0 || !_0x363098.subarray && _0x19debf)) {
            return String.fromCharCode.apply(null, _0x3a91bd.shrinkBuf(_0x363098, _0x5a5896));
          }
          for (var _0x3f8ffa = "", _0x2e7e30 = 0; _0x2e7e30 < _0x5a5896; _0x2e7e30++) {
            _0x3f8ffa += String.fromCharCode(_0x363098[_0x2e7e30]);
          }
          return _0x3f8ffa;
        }
        _0x3c36f9[254] = _0x3c36f9[254] = 1;
        _0x3b548a.string2buf = function (_0x3d748d) {
          var _0x4f300b,
            _0x36ab19,
            _0x2155b8,
            _0x416428,
            _0x18615e,
            _0x419944 = _0x3d748d.length,
            _0x482cdf = 0;
          for (_0x416428 = 0; _0x416428 < _0x419944; _0x416428++) {
            55296 == (64512 & (_0x36ab19 = _0x3d748d.charCodeAt(_0x416428))) && _0x416428 + 1 < _0x419944 && 56320 == (64512 & (_0x2155b8 = _0x3d748d.charCodeAt(_0x416428 + 1))) && (_0x36ab19 = 65536 + (_0x36ab19 - 55296 << 10) + (_0x2155b8 - 56320), _0x416428++);
            _0x482cdf += _0x36ab19 < 128 ? 1 : _0x36ab19 < 2048 ? 2 : _0x36ab19 < 65536 ? 3 : 4;
          }
          for (_0x4f300b = new _0x3a91bd.Buf8(_0x482cdf), _0x416428 = _0x18615e = 0; _0x18615e < _0x482cdf; _0x416428++) {
            55296 == (64512 & (_0x36ab19 = _0x3d748d.charCodeAt(_0x416428))) && _0x416428 + 1 < _0x419944 && 56320 == (64512 & (_0x2155b8 = _0x3d748d.charCodeAt(_0x416428 + 1))) && (_0x36ab19 = 65536 + (_0x36ab19 - 55296 << 10) + (_0x2155b8 - 56320), _0x416428++);
            _0x36ab19 < 128 ? _0x4f300b[_0x18615e++] = _0x36ab19 : (_0x36ab19 < 2048 ? _0x4f300b[_0x18615e++] = 192 | _0x36ab19 >>> 6 : (_0x36ab19 < 65536 ? _0x4f300b[_0x18615e++] = 224 | _0x36ab19 >>> 12 : (_0x4f300b[_0x18615e++] = 240 | _0x36ab19 >>> 18, _0x4f300b[_0x18615e++] = 128 | _0x36ab19 >>> 12 & 63), _0x4f300b[_0x18615e++] = 128 | _0x36ab19 >>> 6 & 63), _0x4f300b[_0x18615e++] = 128 | 63 & _0x36ab19);
          }
          return _0x4f300b;
        };
        _0x3b548a.buf2binstring = function (_0x4b37b5) {
          return _0x469122(_0x4b37b5, _0x4b37b5.length);
        };
        _0x3b548a.binstring2buf = function (_0x10eae3) {
          for (var _0x51b2e8 = new _0x3a91bd.Buf8(_0x10eae3.length), _0x2f0e84 = 0, _0x2ba9cb = _0x51b2e8.length; _0x2f0e84 < _0x2ba9cb; _0x2f0e84++) {
            _0x51b2e8[_0x2f0e84] = _0x10eae3.charCodeAt(_0x2f0e84);
          }
          return _0x51b2e8;
        };
        _0x3b548a.buf2string = function (_0x15b913, _0x4e18a3) {
          var _0x363f6f,
            _0x1e7e68,
            _0x30396f,
            _0xd5776d,
            _0x46c4ce = _0x4e18a3 || _0x15b913.length,
            _0x533da6 = new Array(2 * _0x46c4ce);
          for (_0x363f6f = _0x1e7e68 = 0; _0x363f6f < _0x46c4ce;) {
            if ((_0x30396f = _0x15b913[_0x363f6f++]) < 128) {
              _0x533da6[_0x1e7e68++] = _0x30396f;
            } else {
              if (4 < (_0xd5776d = _0x3c36f9[_0x30396f])) {
                _0x533da6[_0x1e7e68++] = 65533;
                _0x363f6f += _0xd5776d - 1;
              } else {
                for (_0x30396f &= 2 === _0xd5776d ? 31 : 3 === _0xd5776d ? 15 : 7; 1 < _0xd5776d && _0x363f6f < _0x46c4ce;) {
                  _0x30396f = _0x30396f << 6 | 63 & _0x15b913[_0x363f6f++];
                  _0xd5776d--;
                }
                1 < _0xd5776d ? _0x533da6[_0x1e7e68++] = 65533 : _0x30396f < 65536 ? _0x533da6[_0x1e7e68++] = _0x30396f : (_0x30396f -= 65536, _0x533da6[_0x1e7e68++] = 55296 | _0x30396f >> 10 & 1023, _0x533da6[_0x1e7e68++] = 56320 | 1023 & _0x30396f);
              }
            }
          }
          return _0x469122(_0x533da6, _0x1e7e68);
        };
        _0x3b548a.utf8border = function (_0x466efe, _0x5bf411) {
          var _0x9e0c6;
          for ((_0x5bf411 = _0x5bf411 || _0x466efe.length) > _0x466efe.length && (_0x5bf411 = _0x466efe.length), _0x9e0c6 = _0x5bf411 - 1; 0 <= _0x9e0c6 && 128 == (192 & _0x466efe[_0x9e0c6]);) {
            _0x9e0c6--;
          }
          return _0x9e0c6 < 0 ? _0x5bf411 : 0 === _0x9e0c6 ? _0x5bf411 : _0x9e0c6 + _0x3c36f9[_0x466efe[_0x9e0c6]] > _0x5bf411 ? _0x9e0c6 : _0x5bf411;
        };
      }, {
        "./common": 3
      }],
      5: [function (_0x24def7, _0xfafeb, _0x33ae25) {
        'use strict';

        _0xfafeb.exports = function (_0x3452f9, _0x143d02, _0x62b7f2, _0x212a20) {
          for (var _0x3e1312 = 65535 & _0x3452f9 | 0, _0x3c70f1 = _0x3452f9 >>> 16 & 65535 | 0, _0x23a6d3 = 0; 0 !== _0x62b7f2;) {
            for (_0x62b7f2 -= _0x23a6d3 = 2000 < _0x62b7f2 ? 2000 : _0x62b7f2; _0x3c70f1 = _0x3c70f1 + (_0x3e1312 = _0x3e1312 + _0x143d02[_0x212a20++] | 0) | 0, --_0x23a6d3;) {}
            _0x3e1312 %= 65521;
            _0x3c70f1 %= 65521;
          }
          return _0x3e1312 | _0x3c70f1 << 16 | 0;
        };
      }, {}],
      6: [function (_0x36d4a3, _0x372cf8, _0xfa9812) {
        'use strict';

        _0x372cf8.exports = {
          Z_NO_FLUSH: 0,
          Z_PARTIAL_FLUSH: 1,
          Z_SYNC_FLUSH: 2,
          Z_FULL_FLUSH: 3,
          Z_FINISH: 4,
          Z_BLOCK: 5,
          Z_TREES: 6,
          Z_OK: 0,
          Z_STREAM_END: 1,
          Z_NEED_DICT: 2,
          Z_ERRNO: -1,
          Z_STREAM_ERROR: -2,
          Z_DATA_ERROR: -3,
          Z_BUF_ERROR: -5,
          Z_NO_COMPRESSION: 0,
          Z_BEST_SPEED: 1,
          Z_BEST_COMPRESSION: 9,
          Z_DEFAULT_COMPRESSION: -1,
          Z_FILTERED: 1,
          Z_HUFFMAN_ONLY: 2,
          Z_RLE: 3,
          Z_FIXED: 4,
          Z_DEFAULT_STRATEGY: 0,
          Z_BINARY: 0,
          Z_TEXT: 1,
          Z_UNKNOWN: 2,
          Z_DEFLATED: 8
        };
      }, {}],
      7: [function (_0x39ba28, _0x418071, _0x7a00f6) {
        'use strict';

        var _0x238616 = function () {
          for (var _0x55eafe, _0x11c649 = [], _0x35c830 = 0; _0x35c830 < 256; _0x35c830++) {
            _0x55eafe = _0x35c830;
            for (var _0x2ccdb3 = 0; _0x2ccdb3 < 8; _0x2ccdb3++) {
              _0x55eafe = 1 & _0x55eafe ? 3988292384 ^ _0x55eafe >>> 1 : _0x55eafe >>> 1;
            }
            _0x11c649[_0x35c830] = _0x55eafe;
          }
          return _0x11c649;
        }();
        _0x418071.exports = function (_0x2be2e7, _0x4cf42f, _0x34483b, _0xb52737) {
          var _0x33a185 = _0x238616,
            _0x4a87b7 = _0xb52737 + _0x34483b;
          _0x2be2e7 ^= -1;
          for (var _0x581f88 = _0xb52737; _0x581f88 < _0x4a87b7; _0x581f88++) {
            _0x2be2e7 = _0x2be2e7 >>> 8 ^ _0x33a185[255 & (_0x2be2e7 ^ _0x4cf42f[_0x581f88])];
          }
          return -1 ^ _0x2be2e7;
        };
      }, {}],
      8: [function (_0x8d278f, _0x6243a7, _0x21f8f0) {
        'use strict';

        var _0x1c9682,
          _0x59abb1 = _0x8d278f("../utils/common"),
          _0x56dedc = _0x8d278f("./trees"),
          _0x586cb7 = _0x8d278f("./adler32"),
          _0x2ac519 = _0x8d278f("./crc32"),
          _0x543a18 = _0x8d278f("./messages"),
          _0x4e29fd = 0,
          _0x3249ea = 4,
          _0xf0411a = 0,
          _0x13bfef = -2,
          _0x3655e3 = -1,
          _0x9e5c2c = 4,
          _0x247578 = 2,
          _0xd1037a = 8,
          _0x25313b = 9,
          _0x1ea88c = 286,
          _0x19e8dc = 30,
          _0x1e5ff1 = 19,
          _0x290b11 = 2 * _0x1ea88c + 1,
          _0x5c3c13 = 15,
          _0x2147fb = 3,
          _0x551eb6 = 258,
          _0x341c0d = _0x551eb6 + _0x2147fb + 1,
          _0x102218 = 42,
          _0xf1ca83 = 113,
          _0x2dbdca = 1,
          _0x10ba50 = 2,
          _0xf0c72e = 3,
          _0x57c286 = 4;
        function _0x56a98c(_0x410224, _0xaf06d9) {
          _0x410224.msg = _0x543a18[_0xaf06d9];
          return _0xaf06d9;
        }
        function _0x395f30(_0x292c4e) {
          return (_0x292c4e << 1) - (4 < _0x292c4e ? 9 : 0);
        }
        function _0x55580b(_0x356024) {
          for (var _0x2b98b9 = _0x356024.length; 0 <= --_0x2b98b9;) {
            _0x356024[_0x2b98b9] = 0;
          }
        }
        function _0x444fd1(_0x3a7420) {
          var _0x59de45 = _0x3a7420.state,
            _0x45d1bd = _0x59de45.pending;
          _0x45d1bd > _0x3a7420.avail_out && (_0x45d1bd = _0x3a7420.avail_out);
          0 !== _0x45d1bd && (_0x59abb1.arraySet(_0x3a7420.output, _0x59de45.pending_buf, _0x59de45.pending_out, _0x45d1bd, _0x3a7420.next_out), _0x3a7420.next_out += _0x45d1bd, _0x59de45.pending_out += _0x45d1bd, _0x3a7420.total_out += _0x45d1bd, _0x3a7420.avail_out -= _0x45d1bd, _0x59de45.pending -= _0x45d1bd, 0 === _0x59de45.pending && (_0x59de45.pending_out = 0));
        }
        function _0x14d300(_0x1a0629, _0x403c2a) {
          _0x56dedc._tr_flush_block(_0x1a0629, 0 <= _0x1a0629.block_start ? _0x1a0629.block_start : -1, _0x1a0629.strstart - _0x1a0629.block_start, _0x403c2a);
          _0x1a0629.block_start = _0x1a0629.strstart;
          _0x444fd1(_0x1a0629.strm);
        }
        function _0x8ca79d(_0x4dc57b, _0x43d587) {
          _0x4dc57b.pending_buf[_0x4dc57b.pending++] = _0x43d587;
        }
        function _0x48fba8(_0x235d46, _0x3d08bb) {
          _0x235d46.pending_buf[_0x235d46.pending++] = _0x3d08bb >>> 8 & 255;
          _0x235d46.pending_buf[_0x235d46.pending++] = 255 & _0x3d08bb;
        }
        function _0x5ae4c0(_0x1783e8, _0x557968) {
          var _0x1f7679,
            _0x10ccc1,
            _0x58d878 = _0x1783e8.max_chain_length,
            _0x1fd1e2 = _0x1783e8.strstart,
            _0x1f1c11 = _0x1783e8.prev_length,
            _0x1123b2 = _0x1783e8.nice_match,
            _0x4c8946 = _0x1783e8.strstart > _0x1783e8.w_size - _0x341c0d ? _0x1783e8.strstart - (_0x1783e8.w_size - _0x341c0d) : 0,
            _0x47a8df = _0x1783e8.window,
            _0x285f4b = _0x1783e8.w_mask,
            _0x1c7482 = _0x1783e8.prev,
            _0x1fc3c8 = _0x1783e8.strstart + _0x551eb6,
            _0x4d5b6c = _0x47a8df[_0x1fd1e2 + _0x1f1c11 - 1],
            _0x2ce848 = _0x47a8df[_0x1fd1e2 + _0x1f1c11];
          _0x1783e8.prev_length >= _0x1783e8.good_match && (_0x58d878 >>= 2);
          _0x1123b2 > _0x1783e8.lookahead && (_0x1123b2 = _0x1783e8.lookahead);
          do {
            if (_0x47a8df[(_0x1f7679 = _0x557968) + _0x1f1c11] === _0x2ce848 && _0x47a8df[_0x1f7679 + _0x1f1c11 - 1] === _0x4d5b6c && _0x47a8df[_0x1f7679] === _0x47a8df[_0x1fd1e2] && _0x47a8df[++_0x1f7679] === _0x47a8df[_0x1fd1e2 + 1]) {
              _0x1fd1e2 += 2;
              _0x1f7679++;
              do {} while (_0x47a8df[++_0x1fd1e2] === _0x47a8df[++_0x1f7679] && _0x47a8df[++_0x1fd1e2] === _0x47a8df[++_0x1f7679] && _0x47a8df[++_0x1fd1e2] === _0x47a8df[++_0x1f7679] && _0x47a8df[++_0x1fd1e2] === _0x47a8df[++_0x1f7679] && _0x47a8df[++_0x1fd1e2] === _0x47a8df[++_0x1f7679] && _0x47a8df[++_0x1fd1e2] === _0x47a8df[++_0x1f7679] && _0x47a8df[++_0x1fd1e2] === _0x47a8df[++_0x1f7679] && _0x47a8df[++_0x1fd1e2] === _0x47a8df[++_0x1f7679] && _0x1fd1e2 < _0x1fc3c8);
              if (_0x10ccc1 = _0x551eb6 - (_0x1fc3c8 - _0x1fd1e2), _0x1fd1e2 = _0x1fc3c8 - _0x551eb6, _0x1f1c11 < _0x10ccc1) {
                if (_0x1783e8.match_start = _0x557968, _0x1123b2 <= (_0x1f1c11 = _0x10ccc1)) {
                  break;
                }
                _0x4d5b6c = _0x47a8df[_0x1fd1e2 + _0x1f1c11 - 1];
                _0x2ce848 = _0x47a8df[_0x1fd1e2 + _0x1f1c11];
              }
            }
          } while ((_0x557968 = _0x1c7482[_0x557968 & _0x285f4b]) > _0x4c8946 && 0 != --_0x58d878);
          return _0x1f1c11 <= _0x1783e8.lookahead ? _0x1f1c11 : _0x1783e8.lookahead;
        }
        function _0x18bab3(_0x42a6b1) {
          var _0xbce7bb,
            _0x2e4031,
            _0x57bc69,
            _0x13a84f,
            _0x59a537,
            _0x4d5dec,
            _0x828f75,
            _0x3e5634,
            _0x4fb5f9,
            _0x3d872f,
            _0x1d5ad1 = _0x42a6b1.w_size;
          do {
            if (_0x13a84f = _0x42a6b1.window_size - _0x42a6b1.lookahead - _0x42a6b1.strstart, _0x42a6b1.strstart >= _0x1d5ad1 + (_0x1d5ad1 - _0x341c0d)) {
              for (_0x59abb1.arraySet(_0x42a6b1.window, _0x42a6b1.window, _0x1d5ad1, _0x1d5ad1, 0), _0x42a6b1.match_start -= _0x1d5ad1, _0x42a6b1.strstart -= _0x1d5ad1, _0x42a6b1.block_start -= _0x1d5ad1, _0xbce7bb = _0x2e4031 = _0x42a6b1.hash_size; _0x57bc69 = _0x42a6b1.head[--_0xbce7bb], _0x42a6b1.head[_0xbce7bb] = _0x1d5ad1 <= _0x57bc69 ? _0x57bc69 - _0x1d5ad1 : 0, --_0x2e4031;) {}
              for (_0xbce7bb = _0x2e4031 = _0x1d5ad1; _0x57bc69 = _0x42a6b1.prev[--_0xbce7bb], _0x42a6b1.prev[_0xbce7bb] = _0x1d5ad1 <= _0x57bc69 ? _0x57bc69 - _0x1d5ad1 : 0, --_0x2e4031;) {}
              _0x13a84f += _0x1d5ad1;
            }
            if (0 === _0x42a6b1.strm.avail_in) {
              break;
            }
            if (_0x4d5dec = _0x42a6b1.strm, _0x828f75 = _0x42a6b1.window, _0x3e5634 = _0x42a6b1.strstart + _0x42a6b1.lookahead, _0x4fb5f9 = _0x13a84f, _0x3d872f = void 0, _0x3d872f = _0x4d5dec.avail_in, _0x4fb5f9 < _0x3d872f && (_0x3d872f = _0x4fb5f9), _0x2e4031 = 0 === _0x3d872f ? 0 : (_0x4d5dec.avail_in -= _0x3d872f, _0x59abb1.arraySet(_0x828f75, _0x4d5dec.input, _0x4d5dec.next_in, _0x3d872f, _0x3e5634), 1 === _0x4d5dec.state.wrap ? _0x4d5dec.adler = _0x586cb7(_0x4d5dec.adler, _0x828f75, _0x3d872f, _0x3e5634) : 2 === _0x4d5dec.state.wrap && (_0x4d5dec.adler = _0x2ac519(_0x4d5dec.adler, _0x828f75, _0x3d872f, _0x3e5634)), _0x4d5dec.next_in += _0x3d872f, _0x4d5dec.total_in += _0x3d872f, _0x3d872f), _0x42a6b1.lookahead += _0x2e4031, _0x42a6b1.lookahead + _0x42a6b1.insert >= _0x2147fb) {
              for (_0x59a537 = _0x42a6b1.strstart - _0x42a6b1.insert, _0x42a6b1.ins_h = _0x42a6b1.window[_0x59a537], _0x42a6b1.ins_h = (_0x42a6b1.ins_h << _0x42a6b1.hash_shift ^ _0x42a6b1.window[_0x59a537 + 1]) & _0x42a6b1.hash_mask; _0x42a6b1.insert && (_0x42a6b1.ins_h = (_0x42a6b1.ins_h << _0x42a6b1.hash_shift ^ _0x42a6b1.window[_0x59a537 + _0x2147fb - 1]) & _0x42a6b1.hash_mask, _0x42a6b1.prev[_0x59a537 & _0x42a6b1.w_mask] = _0x42a6b1.head[_0x42a6b1.ins_h], _0x42a6b1.head[_0x42a6b1.ins_h] = _0x59a537, _0x59a537++, _0x42a6b1.insert--, !(_0x42a6b1.lookahead + _0x42a6b1.insert < _0x2147fb));) {}
            }
          } while (_0x42a6b1.lookahead < _0x341c0d && 0 !== _0x42a6b1.strm.avail_in);
        }
        function _0x566f9f(_0x173792, _0xe8a239) {
          for (var _0x38d8e9, _0x517f3;;) {
            if (_0x173792.lookahead < _0x341c0d) {
              if (_0x18bab3(_0x173792), _0x173792.lookahead < _0x341c0d && _0xe8a239 === _0x4e29fd) {
                return _0x2dbdca;
              }
              if (0 === _0x173792.lookahead) {
                break;
              }
            }
            if (_0x38d8e9 = 0, _0x173792.lookahead >= _0x2147fb && (_0x173792.ins_h = (_0x173792.ins_h << _0x173792.hash_shift ^ _0x173792.window[_0x173792.strstart + _0x2147fb - 1]) & _0x173792.hash_mask, _0x38d8e9 = _0x173792.prev[_0x173792.strstart & _0x173792.w_mask] = _0x173792.head[_0x173792.ins_h], _0x173792.head[_0x173792.ins_h] = _0x173792.strstart), 0 !== _0x38d8e9 && _0x173792.strstart - _0x38d8e9 <= _0x173792.w_size - _0x341c0d && (_0x173792.match_length = _0x5ae4c0(_0x173792, _0x38d8e9)), _0x173792.match_length >= _0x2147fb) {
              if (_0x517f3 = _0x56dedc._tr_tally(_0x173792, _0x173792.strstart - _0x173792.match_start, _0x173792.match_length - _0x2147fb), _0x173792.lookahead -= _0x173792.match_length, _0x173792.match_length <= _0x173792.max_lazy_match && _0x173792.lookahead >= _0x2147fb) {
                for (_0x173792.match_length--; _0x173792.strstart++, _0x173792.ins_h = (_0x173792.ins_h << _0x173792.hash_shift ^ _0x173792.window[_0x173792.strstart + _0x2147fb - 1]) & _0x173792.hash_mask, _0x38d8e9 = _0x173792.prev[_0x173792.strstart & _0x173792.w_mask] = _0x173792.head[_0x173792.ins_h], _0x173792.head[_0x173792.ins_h] = _0x173792.strstart, 0 != --_0x173792.match_length;) {}
                _0x173792.strstart++;
              } else {
                _0x173792.strstart += _0x173792.match_length;
                _0x173792.match_length = 0;
                _0x173792.ins_h = _0x173792.window[_0x173792.strstart];
                _0x173792.ins_h = (_0x173792.ins_h << _0x173792.hash_shift ^ _0x173792.window[_0x173792.strstart + 1]) & _0x173792.hash_mask;
              }
            } else {
              _0x517f3 = _0x56dedc._tr_tally(_0x173792, 0, _0x173792.window[_0x173792.strstart]);
              _0x173792.lookahead--;
              _0x173792.strstart++;
            }
            if (_0x517f3 && (_0x14d300(_0x173792, !1), 0 === _0x173792.strm.avail_out)) {
              return _0x2dbdca;
            }
          }
          _0x173792.insert = _0x173792.strstart < _0x2147fb - 1 ? _0x173792.strstart : _0x2147fb - 1;
          return _0xe8a239 === _0x3249ea ? (_0x14d300(_0x173792, !0), 0 === _0x173792.strm.avail_out ? _0xf0c72e : _0x57c286) : _0x173792.last_lit && (_0x14d300(_0x173792, !1), 0 === _0x173792.strm.avail_out) ? _0x2dbdca : _0x10ba50;
        }
        function _0x218864(_0x42aede, _0xc4623f) {
          for (var _0x11be4d, _0x490322, _0x1c8020;;) {
            if (_0x42aede.lookahead < _0x341c0d) {
              if (_0x18bab3(_0x42aede), _0x42aede.lookahead < _0x341c0d && _0xc4623f === _0x4e29fd) {
                return _0x2dbdca;
              }
              if (0 === _0x42aede.lookahead) {
                break;
              }
            }
            if (_0x11be4d = 0, _0x42aede.lookahead >= _0x2147fb && (_0x42aede.ins_h = (_0x42aede.ins_h << _0x42aede.hash_shift ^ _0x42aede.window[_0x42aede.strstart + _0x2147fb - 1]) & _0x42aede.hash_mask, _0x11be4d = _0x42aede.prev[_0x42aede.strstart & _0x42aede.w_mask] = _0x42aede.head[_0x42aede.ins_h], _0x42aede.head[_0x42aede.ins_h] = _0x42aede.strstart), _0x42aede.prev_length = _0x42aede.match_length, _0x42aede.prev_match = _0x42aede.match_start, _0x42aede.match_length = _0x2147fb - 1, 0 !== _0x11be4d && _0x42aede.prev_length < _0x42aede.max_lazy_match && _0x42aede.strstart - _0x11be4d <= _0x42aede.w_size - _0x341c0d && (_0x42aede.match_length = _0x5ae4c0(_0x42aede, _0x11be4d), _0x42aede.match_length <= 5 && (1 === _0x42aede.strategy || _0x42aede.match_length === _0x2147fb && 4096 < _0x42aede.strstart - _0x42aede.match_start) && (_0x42aede.match_length = _0x2147fb - 1)), _0x42aede.prev_length >= _0x2147fb && _0x42aede.match_length <= _0x42aede.prev_length) {
              for (_0x1c8020 = _0x42aede.strstart + _0x42aede.lookahead - _0x2147fb, _0x490322 = _0x56dedc._tr_tally(_0x42aede, _0x42aede.strstart - 1 - _0x42aede.prev_match, _0x42aede.prev_length - _0x2147fb), _0x42aede.lookahead -= _0x42aede.prev_length - 1, _0x42aede.prev_length -= 2; ++_0x42aede.strstart <= _0x1c8020 && (_0x42aede.ins_h = (_0x42aede.ins_h << _0x42aede.hash_shift ^ _0x42aede.window[_0x42aede.strstart + _0x2147fb - 1]) & _0x42aede.hash_mask, _0x11be4d = _0x42aede.prev[_0x42aede.strstart & _0x42aede.w_mask] = _0x42aede.head[_0x42aede.ins_h], _0x42aede.head[_0x42aede.ins_h] = _0x42aede.strstart), 0 != --_0x42aede.prev_length;) {}
              if (_0x42aede.match_available = 0, _0x42aede.match_length = _0x2147fb - 1, _0x42aede.strstart++, _0x490322 && (_0x14d300(_0x42aede, !1), 0 === _0x42aede.strm.avail_out)) {
                return _0x2dbdca;
              }
            } else {
              if (_0x42aede.match_available) {
                if ((_0x490322 = _0x56dedc._tr_tally(_0x42aede, 0, _0x42aede.window[_0x42aede.strstart - 1])) && _0x14d300(_0x42aede, !1), _0x42aede.strstart++, _0x42aede.lookahead--, 0 === _0x42aede.strm.avail_out) {
                  return _0x2dbdca;
                }
              } else {
                _0x42aede.match_available = 1;
                _0x42aede.strstart++;
                _0x42aede.lookahead--;
              }
            }
          }
          _0x42aede.match_available && (_0x490322 = _0x56dedc._tr_tally(_0x42aede, 0, _0x42aede.window[_0x42aede.strstart - 1]), _0x42aede.match_available = 0);
          _0x42aede.insert = _0x42aede.strstart < _0x2147fb - 1 ? _0x42aede.strstart : _0x2147fb - 1;
          return _0xc4623f === _0x3249ea ? (_0x14d300(_0x42aede, !0), 0 === _0x42aede.strm.avail_out ? _0xf0c72e : _0x57c286) : _0x42aede.last_lit && (_0x14d300(_0x42aede, !1), 0 === _0x42aede.strm.avail_out) ? _0x2dbdca : _0x10ba50;
        }
        function _0x2fc1f4(_0x112529, _0x57bded, _0x2656e3, _0x5a5bf, _0x5f370f) {
          this.good_length = _0x112529;
          this.max_lazy = _0x57bded;
          this.nice_length = _0x2656e3;
          this.max_chain = _0x5a5bf;
          this.func = _0x5f370f;
        }
        function _0x45c2c7() {
          this.strm = null;
          this.status = 0;
          this.pending_buf = null;
          this.pending_buf_size = 0;
          this.pending_out = 0;
          this.pending = 0;
          this.wrap = 0;
          this.gzhead = null;
          this.gzindex = 0;
          this.method = _0xd1037a;
          this.last_flush = -1;
          this.w_size = 0;
          this.w_bits = 0;
          this.w_mask = 0;
          this.window = null;
          this.window_size = 0;
          this.prev = null;
          this.head = null;
          this.ins_h = 0;
          this.hash_size = 0;
          this.hash_bits = 0;
          this.hash_mask = 0;
          this.hash_shift = 0;
          this.block_start = 0;
          this.match_length = 0;
          this.prev_match = 0;
          this.match_available = 0;
          this.strstart = 0;
          this.match_start = 0;
          this.lookahead = 0;
          this.prev_length = 0;
          this.max_chain_length = 0;
          this.max_lazy_match = 0;
          this.level = 0;
          this.strategy = 0;
          this.good_match = 0;
          this.nice_match = 0;
          this.dyn_ltree = new _0x59abb1.Buf16(2 * _0x290b11);
          this.dyn_dtree = new _0x59abb1.Buf16(2 * (2 * _0x19e8dc + 1));
          this.bl_tree = new _0x59abb1.Buf16(2 * (2 * _0x1e5ff1 + 1));
          _0x55580b(this.dyn_ltree);
          _0x55580b(this.dyn_dtree);
          _0x55580b(this.bl_tree);
          this.l_desc = null;
          this.d_desc = null;
          this.bl_desc = null;
          this.bl_count = new _0x59abb1.Buf16(_0x5c3c13 + 1);
          this.heap = new _0x59abb1.Buf16(2 * _0x1ea88c + 1);
          _0x55580b(this.heap);
          this.heap_len = 0;
          this.heap_max = 0;
          this.depth = new _0x59abb1.Buf16(2 * _0x1ea88c + 1);
          _0x55580b(this.depth);
          this.l_buf = 0;
          this.lit_bufsize = 0;
          this.last_lit = 0;
          this.d_buf = 0;
          this.opt_len = 0;
          this.static_len = 0;
          this.matches = 0;
          this.insert = 0;
          this.bi_buf = 0;
          this.bi_valid = 0;
        }
        function _0x238775(_0x40ab3a) {
          var _0xb87be5;
          return _0x40ab3a && _0x40ab3a.state ? (_0x40ab3a.total_in = _0x40ab3a.total_out = 0, _0x40ab3a.data_type = _0x247578, (_0xb87be5 = _0x40ab3a.state).pending = 0, _0xb87be5.pending_out = 0, _0xb87be5.wrap < 0 && (_0xb87be5.wrap = -_0xb87be5.wrap), _0xb87be5.status = _0xb87be5.wrap ? _0x102218 : _0xf1ca83, _0x40ab3a.adler = 2 === _0xb87be5.wrap ? 0 : 1, _0xb87be5.last_flush = _0x4e29fd, _0x56dedc._tr_init(_0xb87be5), _0xf0411a) : _0x56a98c(_0x40ab3a, _0x13bfef);
        }
        function _0x25b34b(_0xf91e1e) {
          var _0x11180b,
            _0x6eda5 = _0x238775(_0xf91e1e);
          _0x6eda5 === _0xf0411a && ((_0x11180b = _0xf91e1e.state).window_size = 2 * _0x11180b.w_size, _0x55580b(_0x11180b.head), _0x11180b.max_lazy_match = _0x1c9682[_0x11180b.level].max_lazy, _0x11180b.good_match = _0x1c9682[_0x11180b.level].good_length, _0x11180b.nice_match = _0x1c9682[_0x11180b.level].nice_length, _0x11180b.max_chain_length = _0x1c9682[_0x11180b.level].max_chain, _0x11180b.strstart = 0, _0x11180b.block_start = 0, _0x11180b.lookahead = 0, _0x11180b.insert = 0, _0x11180b.match_length = _0x11180b.prev_length = _0x2147fb - 1, _0x11180b.match_available = 0, _0x11180b.ins_h = 0);
          return _0x6eda5;
        }
        function _0x51add4(_0x459727, _0x22e56d, _0x10d792, _0x46e620, _0x246235, _0x1f699d) {
          if (!_0x459727) {
            return _0x13bfef;
          }
          var _0x2c64b0 = 1;
          if (_0x22e56d === _0x3655e3 && (_0x22e56d = 6), _0x46e620 < 0 ? (_0x2c64b0 = 0, _0x46e620 = -_0x46e620) : 15 < _0x46e620 && (_0x2c64b0 = 2, _0x46e620 -= 16), _0x246235 < 1 || _0x25313b < _0x246235 || _0x10d792 !== _0xd1037a || _0x46e620 < 8 || 15 < _0x46e620 || _0x22e56d < 0 || 9 < _0x22e56d || _0x1f699d < 0 || _0x9e5c2c < _0x1f699d) {
            return _0x56a98c(_0x459727, _0x13bfef);
          }
          8 === _0x46e620 && (_0x46e620 = 9);
          var _0x19dd1b = new _0x45c2c7();
          (_0x459727.state = _0x19dd1b).strm = _0x459727;
          _0x19dd1b.wrap = _0x2c64b0;
          _0x19dd1b.gzhead = null;
          _0x19dd1b.w_bits = _0x46e620;
          _0x19dd1b.w_size = 1 << _0x19dd1b.w_bits;
          _0x19dd1b.w_mask = _0x19dd1b.w_size - 1;
          _0x19dd1b.hash_bits = _0x246235 + 7;
          _0x19dd1b.hash_size = 1 << _0x19dd1b.hash_bits;
          _0x19dd1b.hash_mask = _0x19dd1b.hash_size - 1;
          _0x19dd1b.hash_shift = ~~((_0x19dd1b.hash_bits + _0x2147fb - 1) / _0x2147fb);
          _0x19dd1b.window = new _0x59abb1.Buf8(2 * _0x19dd1b.w_size);
          _0x19dd1b.head = new _0x59abb1.Buf16(_0x19dd1b.hash_size);
          _0x19dd1b.prev = new _0x59abb1.Buf16(_0x19dd1b.w_size);
          _0x19dd1b.lit_bufsize = 1 << _0x246235 + 6;
          _0x19dd1b.pending_buf_size = 4 * _0x19dd1b.lit_bufsize;
          _0x19dd1b.pending_buf = new _0x59abb1.Buf8(_0x19dd1b.pending_buf_size);
          _0x19dd1b.d_buf = 1 * _0x19dd1b.lit_bufsize;
          _0x19dd1b.l_buf = 3 * _0x19dd1b.lit_bufsize;
          _0x19dd1b.level = _0x22e56d;
          _0x19dd1b.strategy = _0x1f699d;
          _0x19dd1b.method = _0x10d792;
          return _0x25b34b(_0x459727);
        }
        _0x1c9682 = [new _0x2fc1f4(0, 0, 0, 0, function (_0x23279c, _0x55bfa8) {
          var _0x452582 = 65535;
          for (_0x452582 > _0x23279c.pending_buf_size - 5 && (_0x452582 = _0x23279c.pending_buf_size - 5);;) {
            if (_0x23279c.lookahead <= 1) {
              if (_0x18bab3(_0x23279c), 0 === _0x23279c.lookahead && _0x55bfa8 === _0x4e29fd) {
                return _0x2dbdca;
              }
              if (0 === _0x23279c.lookahead) {
                break;
              }
            }
            _0x23279c.strstart += _0x23279c.lookahead;
            _0x23279c.lookahead = 0;
            var _0x29f314 = _0x23279c.block_start + _0x452582;
            if ((0 === _0x23279c.strstart || _0x23279c.strstart >= _0x29f314) && (_0x23279c.lookahead = _0x23279c.strstart - _0x29f314, _0x23279c.strstart = _0x29f314, _0x14d300(_0x23279c, !1), 0 === _0x23279c.strm.avail_out)) {
              return _0x2dbdca;
            }
            if (_0x23279c.strstart - _0x23279c.block_start >= _0x23279c.w_size - _0x341c0d && (_0x14d300(_0x23279c, !1), 0 === _0x23279c.strm.avail_out)) {
              return _0x2dbdca;
            }
          }
          _0x23279c.insert = 0;
          return _0x55bfa8 === _0x3249ea ? (_0x14d300(_0x23279c, !0), 0 === _0x23279c.strm.avail_out ? _0xf0c72e : _0x57c286) : (_0x23279c.strstart > _0x23279c.block_start && (_0x14d300(_0x23279c, !1), _0x23279c.strm.avail_out), _0x2dbdca);
        }), new _0x2fc1f4(4, 4, 8, 4, _0x566f9f), new _0x2fc1f4(4, 5, 16, 8, _0x566f9f), new _0x2fc1f4(4, 6, 32, 32, _0x566f9f), new _0x2fc1f4(4, 4, 16, 16, _0x218864), new _0x2fc1f4(8, 16, 32, 32, _0x218864), new _0x2fc1f4(8, 16, 128, 128, _0x218864), new _0x2fc1f4(8, 32, 128, 256, _0x218864), new _0x2fc1f4(32, 128, 258, 1024, _0x218864), new _0x2fc1f4(32, 258, 258, 4096, _0x218864)];
        _0x21f8f0.deflateInit = function (_0x5dde0a, _0x21d1f7) {
          return _0x51add4(_0x5dde0a, _0x21d1f7, _0xd1037a, 15, 8, 0);
        };
        _0x21f8f0.deflateInit2 = _0x51add4;
        _0x21f8f0.deflateReset = _0x25b34b;
        _0x21f8f0.deflateResetKeep = _0x238775;
        _0x21f8f0.deflateSetHeader = function (_0x11f64f, _0x118565) {
          return _0x11f64f && _0x11f64f.state ? 2 !== _0x11f64f.state.wrap ? _0x13bfef : (_0x11f64f.state.gzhead = _0x118565, _0xf0411a) : _0x13bfef;
        };
        _0x21f8f0.deflate = function (_0x5e54fc, _0x1137e1) {
          var _0x331d07, _0x18fbe6, _0x52820b, _0x4fb131;
          if (!_0x5e54fc || !_0x5e54fc.state || 5 < _0x1137e1 || _0x1137e1 < 0) {
            return _0x5e54fc ? _0x56a98c(_0x5e54fc, _0x13bfef) : _0x13bfef;
          }
          if (_0x18fbe6 = _0x5e54fc.state, !_0x5e54fc.output || !_0x5e54fc.input && 0 !== _0x5e54fc.avail_in || 666 === _0x18fbe6.status && _0x1137e1 !== _0x3249ea) {
            return _0x56a98c(_0x5e54fc, 0 === _0x5e54fc.avail_out ? -5 : _0x13bfef);
          }
          if (_0x18fbe6.strm = _0x5e54fc, _0x331d07 = _0x18fbe6.last_flush, _0x18fbe6.last_flush = _0x1137e1, _0x18fbe6.status === _0x102218) {
            if (2 === _0x18fbe6.wrap) {
              _0x5e54fc.adler = 0;
              _0x8ca79d(_0x18fbe6, 31);
              _0x8ca79d(_0x18fbe6, 139);
              _0x8ca79d(_0x18fbe6, 8);
              _0x18fbe6.gzhead ? (_0x8ca79d(_0x18fbe6, (_0x18fbe6.gzhead.text ? 1 : 0) + (_0x18fbe6.gzhead.hcrc ? 2 : 0) + (_0x18fbe6.gzhead.extra ? 4 : 0) + (_0x18fbe6.gzhead.name ? 8 : 0) + (_0x18fbe6.gzhead.comment ? 16 : 0)), _0x8ca79d(_0x18fbe6, 255 & _0x18fbe6.gzhead.time), _0x8ca79d(_0x18fbe6, _0x18fbe6.gzhead.time >> 8 & 255), _0x8ca79d(_0x18fbe6, _0x18fbe6.gzhead.time >> 16 & 255), _0x8ca79d(_0x18fbe6, _0x18fbe6.gzhead.time >> 24 & 255), _0x8ca79d(_0x18fbe6, 9 === _0x18fbe6.level ? 2 : 2 <= _0x18fbe6.strategy || _0x18fbe6.level < 2 ? 4 : 0), _0x8ca79d(_0x18fbe6, 255 & _0x18fbe6.gzhead.os), _0x18fbe6.gzhead.extra && _0x18fbe6.gzhead.extra.length && (_0x8ca79d(_0x18fbe6, 255 & _0x18fbe6.gzhead.extra.length), _0x8ca79d(_0x18fbe6, _0x18fbe6.gzhead.extra.length >> 8 & 255)), _0x18fbe6.gzhead.hcrc && (_0x5e54fc.adler = _0x2ac519(_0x5e54fc.adler, _0x18fbe6.pending_buf, _0x18fbe6.pending, 0)), _0x18fbe6.gzindex = 0, _0x18fbe6.status = 69) : (_0x8ca79d(_0x18fbe6, 0), _0x8ca79d(_0x18fbe6, 0), _0x8ca79d(_0x18fbe6, 0), _0x8ca79d(_0x18fbe6, 0), _0x8ca79d(_0x18fbe6, 0), _0x8ca79d(_0x18fbe6, 9 === _0x18fbe6.level ? 2 : 2 <= _0x18fbe6.strategy || _0x18fbe6.level < 2 ? 4 : 0), _0x8ca79d(_0x18fbe6, 3), _0x18fbe6.status = _0xf1ca83);
            } else {
              var _0x5eb37f = _0xd1037a + (_0x18fbe6.w_bits - 8 << 4) << 8;
              _0x5eb37f |= (2 <= _0x18fbe6.strategy || _0x18fbe6.level < 2 ? 0 : _0x18fbe6.level < 6 ? 1 : 6 === _0x18fbe6.level ? 2 : 3) << 6;
              0 !== _0x18fbe6.strstart && (_0x5eb37f |= 32);
              _0x5eb37f += 31 - _0x5eb37f % 31;
              _0x18fbe6.status = _0xf1ca83;
              _0x48fba8(_0x18fbe6, _0x5eb37f);
              0 !== _0x18fbe6.strstart && (_0x48fba8(_0x18fbe6, _0x5e54fc.adler >>> 16), _0x48fba8(_0x18fbe6, 65535 & _0x5e54fc.adler));
              _0x5e54fc.adler = 1;
            }
          }
          if (69 === _0x18fbe6.status) {
            if (_0x18fbe6.gzhead.extra) {
              for (_0x52820b = _0x18fbe6.pending; _0x18fbe6.gzindex < (65535 & _0x18fbe6.gzhead.extra.length) && (_0x18fbe6.pending !== _0x18fbe6.pending_buf_size || (_0x18fbe6.gzhead.hcrc && _0x18fbe6.pending > _0x52820b && (_0x5e54fc.adler = _0x2ac519(_0x5e54fc.adler, _0x18fbe6.pending_buf, _0x18fbe6.pending - _0x52820b, _0x52820b)), _0x444fd1(_0x5e54fc), _0x52820b = _0x18fbe6.pending, _0x18fbe6.pending !== _0x18fbe6.pending_buf_size));) {
                _0x8ca79d(_0x18fbe6, 255 & _0x18fbe6.gzhead.extra[_0x18fbe6.gzindex]);
                _0x18fbe6.gzindex++;
              }
              _0x18fbe6.gzhead.hcrc && _0x18fbe6.pending > _0x52820b && (_0x5e54fc.adler = _0x2ac519(_0x5e54fc.adler, _0x18fbe6.pending_buf, _0x18fbe6.pending - _0x52820b, _0x52820b));
              _0x18fbe6.gzindex === _0x18fbe6.gzhead.extra.length && (_0x18fbe6.gzindex = 0, _0x18fbe6.status = 73);
            } else {
              _0x18fbe6.status = 73;
            }
          }
          if (73 === _0x18fbe6.status) {
            if (_0x18fbe6.gzhead.name) {
              _0x52820b = _0x18fbe6.pending;
              do {
                if (_0x18fbe6.pending === _0x18fbe6.pending_buf_size && (_0x18fbe6.gzhead.hcrc && _0x18fbe6.pending > _0x52820b && (_0x5e54fc.adler = _0x2ac519(_0x5e54fc.adler, _0x18fbe6.pending_buf, _0x18fbe6.pending - _0x52820b, _0x52820b)), _0x444fd1(_0x5e54fc), _0x52820b = _0x18fbe6.pending, _0x18fbe6.pending === _0x18fbe6.pending_buf_size)) {
                  _0x4fb131 = 1;
                  break;
                }
                _0x8ca79d(_0x18fbe6, _0x4fb131 = _0x18fbe6.gzindex < _0x18fbe6.gzhead.name.length ? 255 & _0x18fbe6.gzhead.name.charCodeAt(_0x18fbe6.gzindex++) : 0);
              } while (0 !== _0x4fb131);
              _0x18fbe6.gzhead.hcrc && _0x18fbe6.pending > _0x52820b && (_0x5e54fc.adler = _0x2ac519(_0x5e54fc.adler, _0x18fbe6.pending_buf, _0x18fbe6.pending - _0x52820b, _0x52820b));
              0 === _0x4fb131 && (_0x18fbe6.gzindex = 0, _0x18fbe6.status = 91);
            } else {
              _0x18fbe6.status = 91;
            }
          }
          if (91 === _0x18fbe6.status) {
            if (_0x18fbe6.gzhead.comment) {
              _0x52820b = _0x18fbe6.pending;
              do {
                if (_0x18fbe6.pending === _0x18fbe6.pending_buf_size && (_0x18fbe6.gzhead.hcrc && _0x18fbe6.pending > _0x52820b && (_0x5e54fc.adler = _0x2ac519(_0x5e54fc.adler, _0x18fbe6.pending_buf, _0x18fbe6.pending - _0x52820b, _0x52820b)), _0x444fd1(_0x5e54fc), _0x52820b = _0x18fbe6.pending, _0x18fbe6.pending === _0x18fbe6.pending_buf_size)) {
                  _0x4fb131 = 1;
                  break;
                }
                _0x8ca79d(_0x18fbe6, _0x4fb131 = _0x18fbe6.gzindex < _0x18fbe6.gzhead.comment.length ? 255 & _0x18fbe6.gzhead.comment.charCodeAt(_0x18fbe6.gzindex++) : 0);
              } while (0 !== _0x4fb131);
              _0x18fbe6.gzhead.hcrc && _0x18fbe6.pending > _0x52820b && (_0x5e54fc.adler = _0x2ac519(_0x5e54fc.adler, _0x18fbe6.pending_buf, _0x18fbe6.pending - _0x52820b, _0x52820b));
              0 === _0x4fb131 && (_0x18fbe6.status = 103);
            } else {
              _0x18fbe6.status = 103;
            }
          }
          if (103 === _0x18fbe6.status && (_0x18fbe6.gzhead.hcrc ? (_0x18fbe6.pending + 2 > _0x18fbe6.pending_buf_size && _0x444fd1(_0x5e54fc), _0x18fbe6.pending + 2 <= _0x18fbe6.pending_buf_size && (_0x8ca79d(_0x18fbe6, 255 & _0x5e54fc.adler), _0x8ca79d(_0x18fbe6, _0x5e54fc.adler >> 8 & 255), _0x5e54fc.adler = 0, _0x18fbe6.status = _0xf1ca83)) : _0x18fbe6.status = _0xf1ca83), 0 !== _0x18fbe6.pending) {
            if (_0x444fd1(_0x5e54fc), 0 === _0x5e54fc.avail_out) {
              _0x18fbe6.last_flush = -1;
              return _0xf0411a;
            }
          } else {
            if (0 === _0x5e54fc.avail_in && _0x395f30(_0x1137e1) <= _0x395f30(_0x331d07) && _0x1137e1 !== _0x3249ea) {
              return _0x56a98c(_0x5e54fc, -5);
            }
          }
          if (666 === _0x18fbe6.status && 0 !== _0x5e54fc.avail_in) {
            return _0x56a98c(_0x5e54fc, -5);
          }
          if (0 !== _0x5e54fc.avail_in || 0 !== _0x18fbe6.lookahead || _0x1137e1 !== _0x4e29fd && 666 !== _0x18fbe6.status) {
            var _0x8ffc70 = 2 === _0x18fbe6.strategy ? function (_0xd53223, _0x468b00) {
              for (var _0x1a7fe1;;) {
                if (0 === _0xd53223.lookahead && (_0x18bab3(_0xd53223), 0 === _0xd53223.lookahead)) {
                  if (_0x468b00 === _0x4e29fd) {
                    return _0x2dbdca;
                  }
                  break;
                }
                if (_0xd53223.match_length = 0, _0x1a7fe1 = _0x56dedc._tr_tally(_0xd53223, 0, _0xd53223.window[_0xd53223.strstart]), _0xd53223.lookahead--, _0xd53223.strstart++, _0x1a7fe1 && (_0x14d300(_0xd53223, !1), 0 === _0xd53223.strm.avail_out)) {
                  return _0x2dbdca;
                }
              }
              _0xd53223.insert = 0;
              return _0x468b00 === _0x3249ea ? (_0x14d300(_0xd53223, !0), 0 === _0xd53223.strm.avail_out ? _0xf0c72e : _0x57c286) : _0xd53223.last_lit && (_0x14d300(_0xd53223, !1), 0 === _0xd53223.strm.avail_out) ? _0x2dbdca : _0x10ba50;
            }(_0x18fbe6, _0x1137e1) : 3 === _0x18fbe6.strategy ? function (_0x158a73, _0x39f1b1) {
              for (var _0x57bab7, _0x8b4605, _0x2f9f52, _0x47c231, _0x2bc90b = _0x158a73.window;;) {
                if (_0x158a73.lookahead <= _0x551eb6) {
                  if (_0x18bab3(_0x158a73), _0x158a73.lookahead <= _0x551eb6 && _0x39f1b1 === _0x4e29fd) {
                    return _0x2dbdca;
                  }
                  if (0 === _0x158a73.lookahead) {
                    break;
                  }
                }
                if (_0x158a73.match_length = 0, _0x158a73.lookahead >= _0x2147fb && 0 < _0x158a73.strstart && (_0x8b4605 = _0x2bc90b[_0x2f9f52 = _0x158a73.strstart - 1]) === _0x2bc90b[++_0x2f9f52] && _0x8b4605 === _0x2bc90b[++_0x2f9f52] && _0x8b4605 === _0x2bc90b[++_0x2f9f52]) {
                  _0x47c231 = _0x158a73.strstart + _0x551eb6;
                  do {} while (_0x8b4605 === _0x2bc90b[++_0x2f9f52] && _0x8b4605 === _0x2bc90b[++_0x2f9f52] && _0x8b4605 === _0x2bc90b[++_0x2f9f52] && _0x8b4605 === _0x2bc90b[++_0x2f9f52] && _0x8b4605 === _0x2bc90b[++_0x2f9f52] && _0x8b4605 === _0x2bc90b[++_0x2f9f52] && _0x8b4605 === _0x2bc90b[++_0x2f9f52] && _0x8b4605 === _0x2bc90b[++_0x2f9f52] && _0x2f9f52 < _0x47c231);
                  _0x158a73.match_length = _0x551eb6 - (_0x47c231 - _0x2f9f52);
                  _0x158a73.match_length > _0x158a73.lookahead && (_0x158a73.match_length = _0x158a73.lookahead);
                }
                if (_0x158a73.match_length >= _0x2147fb ? (_0x57bab7 = _0x56dedc._tr_tally(_0x158a73, 1, _0x158a73.match_length - _0x2147fb), _0x158a73.lookahead -= _0x158a73.match_length, _0x158a73.strstart += _0x158a73.match_length, _0x158a73.match_length = 0) : (_0x57bab7 = _0x56dedc._tr_tally(_0x158a73, 0, _0x158a73.window[_0x158a73.strstart]), _0x158a73.lookahead--, _0x158a73.strstart++), _0x57bab7 && (_0x14d300(_0x158a73, !1), 0 === _0x158a73.strm.avail_out)) {
                  return _0x2dbdca;
                }
              }
              _0x158a73.insert = 0;
              return _0x39f1b1 === _0x3249ea ? (_0x14d300(_0x158a73, !0), 0 === _0x158a73.strm.avail_out ? _0xf0c72e : _0x57c286) : _0x158a73.last_lit && (_0x14d300(_0x158a73, !1), 0 === _0x158a73.strm.avail_out) ? _0x2dbdca : _0x10ba50;
            }(_0x18fbe6, _0x1137e1) : _0x1c9682[_0x18fbe6.level].func(_0x18fbe6, _0x1137e1);
            if (_0x8ffc70 !== _0xf0c72e && _0x8ffc70 !== _0x57c286 || (_0x18fbe6.status = 666), _0x8ffc70 === _0x2dbdca || _0x8ffc70 === _0xf0c72e) {
              0 === _0x5e54fc.avail_out && (_0x18fbe6.last_flush = -1);
              return _0xf0411a;
            }
            if (_0x8ffc70 === _0x10ba50 && (1 === _0x1137e1 ? _0x56dedc._tr_align(_0x18fbe6) : 5 !== _0x1137e1 && (_0x56dedc._tr_stored_block(_0x18fbe6, 0, 0, !1), 3 === _0x1137e1 && (_0x55580b(_0x18fbe6.head), 0 === _0x18fbe6.lookahead && (_0x18fbe6.strstart = 0, _0x18fbe6.block_start = 0, _0x18fbe6.insert = 0))), _0x444fd1(_0x5e54fc), 0 === _0x5e54fc.avail_out)) {
              _0x18fbe6.last_flush = -1;
              return _0xf0411a;
            }
          }
          return _0x1137e1 !== _0x3249ea ? _0xf0411a : _0x18fbe6.wrap <= 0 ? 1 : (2 === _0x18fbe6.wrap ? (_0x8ca79d(_0x18fbe6, 255 & _0x5e54fc.adler), _0x8ca79d(_0x18fbe6, _0x5e54fc.adler >> 8 & 255), _0x8ca79d(_0x18fbe6, _0x5e54fc.adler >> 16 & 255), _0x8ca79d(_0x18fbe6, _0x5e54fc.adler >> 24 & 255), _0x8ca79d(_0x18fbe6, 255 & _0x5e54fc.total_in), _0x8ca79d(_0x18fbe6, _0x5e54fc.total_in >> 8 & 255), _0x8ca79d(_0x18fbe6, _0x5e54fc.total_in >> 16 & 255), _0x8ca79d(_0x18fbe6, _0x5e54fc.total_in >> 24 & 255)) : (_0x48fba8(_0x18fbe6, _0x5e54fc.adler >>> 16), _0x48fba8(_0x18fbe6, 65535 & _0x5e54fc.adler)), _0x444fd1(_0x5e54fc), 0 < _0x18fbe6.wrap && (_0x18fbe6.wrap = -_0x18fbe6.wrap), 0 !== _0x18fbe6.pending ? _0xf0411a : 1);
        };
        _0x21f8f0.deflateEnd = function (_0x3d270e) {
          var _0x3882f4;
          return _0x3d270e && _0x3d270e.state ? (_0x3882f4 = _0x3d270e.state.status) !== _0x102218 && 69 !== _0x3882f4 && 73 !== _0x3882f4 && 91 !== _0x3882f4 && 103 !== _0x3882f4 && _0x3882f4 !== _0xf1ca83 && 666 !== _0x3882f4 ? _0x56a98c(_0x3d270e, _0x13bfef) : (_0x3d270e.state = null, _0x3882f4 === _0xf1ca83 ? _0x56a98c(_0x3d270e, -3) : _0xf0411a) : _0x13bfef;
        };
        _0x21f8f0.deflateSetDictionary = function (_0x10d988, _0x27280e) {
          var _0x45e3e4,
            _0x176bd2,
            _0x230116,
            _0x21b68e,
            _0x3436ee,
            _0x477518,
            _0x2f0604,
            _0x5c0cee,
            _0x8aa285 = _0x27280e.length;
          if (!_0x10d988 || !_0x10d988.state) {
            return _0x13bfef;
          }
          if (2 === (_0x21b68e = (_0x45e3e4 = _0x10d988.state).wrap) || 1 === _0x21b68e && _0x45e3e4.status !== _0x102218 || _0x45e3e4.lookahead) {
            return _0x13bfef;
          }
          for (1 === _0x21b68e && (_0x10d988.adler = _0x586cb7(_0x10d988.adler, _0x27280e, _0x8aa285, 0)), _0x45e3e4.wrap = 0, _0x8aa285 >= _0x45e3e4.w_size && (0 === _0x21b68e && (_0x55580b(_0x45e3e4.head), _0x45e3e4.strstart = 0, _0x45e3e4.block_start = 0, _0x45e3e4.insert = 0), _0x5c0cee = new _0x59abb1.Buf8(_0x45e3e4.w_size), _0x59abb1.arraySet(_0x5c0cee, _0x27280e, _0x8aa285 - _0x45e3e4.w_size, _0x45e3e4.w_size, 0), _0x27280e = _0x5c0cee, _0x8aa285 = _0x45e3e4.w_size), _0x3436ee = _0x10d988.avail_in, _0x477518 = _0x10d988.next_in, _0x2f0604 = _0x10d988.input, _0x10d988.avail_in = _0x8aa285, _0x10d988.next_in = 0, _0x10d988.input = _0x27280e, _0x18bab3(_0x45e3e4); _0x45e3e4.lookahead >= _0x2147fb;) {
            for (_0x176bd2 = _0x45e3e4.strstart, _0x230116 = _0x45e3e4.lookahead - (_0x2147fb - 1); _0x45e3e4.ins_h = (_0x45e3e4.ins_h << _0x45e3e4.hash_shift ^ _0x45e3e4.window[_0x176bd2 + _0x2147fb - 1]) & _0x45e3e4.hash_mask, _0x45e3e4.prev[_0x176bd2 & _0x45e3e4.w_mask] = _0x45e3e4.head[_0x45e3e4.ins_h], _0x45e3e4.head[_0x45e3e4.ins_h] = _0x176bd2, _0x176bd2++, --_0x230116;) {}
            _0x45e3e4.strstart = _0x176bd2;
            _0x45e3e4.lookahead = _0x2147fb - 1;
            _0x18bab3(_0x45e3e4);
          }
          _0x45e3e4.strstart += _0x45e3e4.lookahead;
          _0x45e3e4.block_start = _0x45e3e4.strstart;
          _0x45e3e4.insert = _0x45e3e4.lookahead;
          _0x45e3e4.lookahead = 0;
          _0x45e3e4.match_length = _0x45e3e4.prev_length = _0x2147fb - 1;
          _0x45e3e4.match_available = 0;
          _0x10d988.next_in = _0x477518;
          _0x10d988.input = _0x2f0604;
          _0x10d988.avail_in = _0x3436ee;
          _0x45e3e4.wrap = _0x21b68e;
          return _0xf0411a;
        };
        _0x21f8f0.deflateInfo = "pako deflate (from Nodeca project)";
      }, {
        "../utils/common": 3,
        "./adler32": 5,
        "./crc32": 7,
        "./messages": 13,
        "./trees": 14
      }],
      9: [function (_0x28c4d3, _0x5aa2d8, _0x27ea83) {
        'use strict';

        _0x5aa2d8.exports = function () {
          this.text = 0;
          this.time = 0;
          this.xflags = 0;
          this.os = 0;
          this.extra = null;
          this.extra_len = 0;
          this.name = "";
          this.comment = "";
          this.hcrc = 0;
          this.done = !1;
        };
      }, {}],
      10: [function (_0x48a413, _0x5435ba, _0x3e4b63) {
        'use strict';

        _0x5435ba.exports = function (_0x4ec007, _0x4de667) {
          var _0x220a6b, _0x38b69e, _0x4c9708, _0x5ba318, _0x5da1cd, _0x16fe87, _0x5b3354, _0x1d11b0, _0x193585, _0x2ef1aa, _0xc90c47, _0x398ea6, _0x2d699c, _0x13079d, _0x31b923, _0x42251e, _0x1a1ad1, _0x562b9a, _0x4ee34c, _0x238e30, _0x8af3b5, _0x3e46f9, _0x527187, _0x5e3939, _0x250b4e;
          _0x220a6b = _0x4ec007.state;
          _0x38b69e = _0x4ec007.next_in;
          _0x5e3939 = _0x4ec007.input;
          _0x4c9708 = _0x38b69e + (_0x4ec007.avail_in - 5);
          _0x5ba318 = _0x4ec007.next_out;
          _0x250b4e = _0x4ec007.output;
          _0x5da1cd = _0x5ba318 - (_0x4de667 - _0x4ec007.avail_out);
          _0x16fe87 = _0x5ba318 + (_0x4ec007.avail_out - 257);
          _0x5b3354 = _0x220a6b.dmax;
          _0x1d11b0 = _0x220a6b.wsize;
          _0x193585 = _0x220a6b.whave;
          _0x2ef1aa = _0x220a6b.wnext;
          _0xc90c47 = _0x220a6b.window;
          _0x398ea6 = _0x220a6b.hold;
          _0x2d699c = _0x220a6b.bits;
          _0x13079d = _0x220a6b.lencode;
          _0x31b923 = _0x220a6b.distcode;
          _0x42251e = (1 << _0x220a6b.lenbits) - 1;
          _0x1a1ad1 = (1 << _0x220a6b.distbits) - 1;
          _0x251ebb: do {
            _0x2d699c < 15 && (_0x398ea6 += _0x5e3939[_0x38b69e++] << _0x2d699c, _0x2d699c += 8, _0x398ea6 += _0x5e3939[_0x38b69e++] << _0x2d699c, _0x2d699c += 8);
            _0x562b9a = _0x13079d[_0x398ea6 & _0x42251e];
            _0x16913f: for (;;) {
              if (_0x398ea6 >>>= _0x4ee34c = _0x562b9a >>> 24, _0x2d699c -= _0x4ee34c, 0 === (_0x4ee34c = _0x562b9a >>> 16 & 255)) {
                _0x250b4e[_0x5ba318++] = 65535 & _0x562b9a;
              } else {
                if (!(16 & _0x4ee34c)) {
                  if (0 == (64 & _0x4ee34c)) {
                    _0x562b9a = _0x13079d[(65535 & _0x562b9a) + (_0x398ea6 & (1 << _0x4ee34c) - 1)];
                    continue _0x16913f;
                  }
                  if (32 & _0x4ee34c) {
                    _0x220a6b.mode = 12;
                    break _0x251ebb;
                  }
                  _0x4ec007.msg = "invalid literal/length code";
                  _0x220a6b.mode = 30;
                  break _0x251ebb;
                }
                _0x238e30 = 65535 & _0x562b9a;
                (_0x4ee34c &= 15) && (_0x2d699c < _0x4ee34c && (_0x398ea6 += _0x5e3939[_0x38b69e++] << _0x2d699c, _0x2d699c += 8), _0x238e30 += _0x398ea6 & (1 << _0x4ee34c) - 1, _0x398ea6 >>>= _0x4ee34c, _0x2d699c -= _0x4ee34c);
                _0x2d699c < 15 && (_0x398ea6 += _0x5e3939[_0x38b69e++] << _0x2d699c, _0x2d699c += 8, _0x398ea6 += _0x5e3939[_0x38b69e++] << _0x2d699c, _0x2d699c += 8);
                _0x562b9a = _0x31b923[_0x398ea6 & _0x1a1ad1];
                _0x203357: for (;;) {
                  if (_0x398ea6 >>>= _0x4ee34c = _0x562b9a >>> 24, _0x2d699c -= _0x4ee34c, !(16 & (_0x4ee34c = _0x562b9a >>> 16 & 255))) {
                    if (0 == (64 & _0x4ee34c)) {
                      _0x562b9a = _0x31b923[(65535 & _0x562b9a) + (_0x398ea6 & (1 << _0x4ee34c) - 1)];
                      continue _0x203357;
                    }
                    _0x4ec007.msg = "invalid distance code";
                    _0x220a6b.mode = 30;
                    break _0x251ebb;
                  }
                  if (_0x8af3b5 = 65535 & _0x562b9a, _0x2d699c < (_0x4ee34c &= 15) && (_0x398ea6 += _0x5e3939[_0x38b69e++] << _0x2d699c, (_0x2d699c += 8) < _0x4ee34c && (_0x398ea6 += _0x5e3939[_0x38b69e++] << _0x2d699c, _0x2d699c += 8)), _0x5b3354 < (_0x8af3b5 += _0x398ea6 & (1 << _0x4ee34c) - 1)) {
                    _0x4ec007.msg = "invalid distance too far back";
                    _0x220a6b.mode = 30;
                    break _0x251ebb;
                  }
                  if (_0x398ea6 >>>= _0x4ee34c, _0x2d699c -= _0x4ee34c, (_0x4ee34c = _0x5ba318 - _0x5da1cd) < _0x8af3b5) {
                    if (_0x193585 < (_0x4ee34c = _0x8af3b5 - _0x4ee34c) && _0x220a6b.sane) {
                      _0x4ec007.msg = "invalid distance too far back";
                      _0x220a6b.mode = 30;
                      break _0x251ebb;
                    }
                    if (_0x527187 = _0xc90c47, (_0x3e46f9 = 0) === _0x2ef1aa) {
                      if (_0x3e46f9 += _0x1d11b0 - _0x4ee34c, _0x4ee34c < _0x238e30) {
                        for (_0x238e30 -= _0x4ee34c; _0x250b4e[_0x5ba318++] = _0xc90c47[_0x3e46f9++], --_0x4ee34c;) {}
                        _0x3e46f9 = _0x5ba318 - _0x8af3b5;
                        _0x527187 = _0x250b4e;
                      }
                    } else {
                      if (_0x2ef1aa < _0x4ee34c) {
                        if (_0x3e46f9 += _0x1d11b0 + _0x2ef1aa - _0x4ee34c, (_0x4ee34c -= _0x2ef1aa) < _0x238e30) {
                          for (_0x238e30 -= _0x4ee34c; _0x250b4e[_0x5ba318++] = _0xc90c47[_0x3e46f9++], --_0x4ee34c;) {}
                          if (_0x3e46f9 = 0, _0x2ef1aa < _0x238e30) {
                            for (_0x238e30 -= _0x4ee34c = _0x2ef1aa; _0x250b4e[_0x5ba318++] = _0xc90c47[_0x3e46f9++], --_0x4ee34c;) {}
                            _0x3e46f9 = _0x5ba318 - _0x8af3b5;
                            _0x527187 = _0x250b4e;
                          }
                        }
                      } else {
                        if (_0x3e46f9 += _0x2ef1aa - _0x4ee34c, _0x4ee34c < _0x238e30) {
                          for (_0x238e30 -= _0x4ee34c; _0x250b4e[_0x5ba318++] = _0xc90c47[_0x3e46f9++], --_0x4ee34c;) {}
                          _0x3e46f9 = _0x5ba318 - _0x8af3b5;
                          _0x527187 = _0x250b4e;
                        }
                      }
                    }
                    for (; 2 < _0x238e30;) {
                      _0x250b4e[_0x5ba318++] = _0x527187[_0x3e46f9++];
                      _0x250b4e[_0x5ba318++] = _0x527187[_0x3e46f9++];
                      _0x250b4e[_0x5ba318++] = _0x527187[_0x3e46f9++];
                      _0x238e30 -= 3;
                    }
                    _0x238e30 && (_0x250b4e[_0x5ba318++] = _0x527187[_0x3e46f9++], 1 < _0x238e30 && (_0x250b4e[_0x5ba318++] = _0x527187[_0x3e46f9++]));
                  } else {
                    for (_0x3e46f9 = _0x5ba318 - _0x8af3b5; _0x250b4e[_0x5ba318++] = _0x250b4e[_0x3e46f9++], _0x250b4e[_0x5ba318++] = _0x250b4e[_0x3e46f9++], _0x250b4e[_0x5ba318++] = _0x250b4e[_0x3e46f9++], 2 < (_0x238e30 -= 3);) {}
                    _0x238e30 && (_0x250b4e[_0x5ba318++] = _0x250b4e[_0x3e46f9++], 1 < _0x238e30 && (_0x250b4e[_0x5ba318++] = _0x250b4e[_0x3e46f9++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (_0x38b69e < _0x4c9708 && _0x5ba318 < _0x16fe87);
          _0x38b69e -= _0x238e30 = _0x2d699c >> 3;
          _0x398ea6 &= (1 << (_0x2d699c -= _0x238e30 << 3)) - 1;
          _0x4ec007.next_in = _0x38b69e;
          _0x4ec007.next_out = _0x5ba318;
          _0x4ec007.avail_in = _0x38b69e < _0x4c9708 ? _0x4c9708 - _0x38b69e + 5 : 5 - (_0x38b69e - _0x4c9708);
          _0x4ec007.avail_out = _0x5ba318 < _0x16fe87 ? _0x16fe87 - _0x5ba318 + 257 : 257 - (_0x5ba318 - _0x16fe87);
          _0x220a6b.hold = _0x398ea6;
          _0x220a6b.bits = _0x2d699c;
        };
      }, {}],
      11: [function (_0x2e6a98, _0x3ad89d, _0xc0a1fe) {
        'use strict';

        var _0x31c659 = _0x2e6a98("../utils/common"),
          _0x37de8c = _0x2e6a98("./adler32"),
          _0x24a740 = _0x2e6a98("./crc32"),
          _0x3efb17 = _0x2e6a98("./inffast"),
          _0x2f328b = _0x2e6a98("./inftrees"),
          _0x4db202 = 1,
          _0x58a9a0 = 2,
          _0x2ea9e7 = 0,
          _0x23473d = -2,
          _0x3750f3 = 1,
          _0x3f1c29 = 852,
          _0x412ede = 592;
        function _0x4ebaab(_0x33d94e) {
          return (_0x33d94e >>> 24 & 255) + (_0x33d94e >>> 8 & 65280) + ((65280 & _0x33d94e) << 8) + ((255 & _0x33d94e) << 24);
        }
        function _0x13253d() {
          this.mode = 0;
          this.last = !1;
          this.wrap = 0;
          this.havedict = !1;
          this.flags = 0;
          this.dmax = 0;
          this.check = 0;
          this.total = 0;
          this.head = null;
          this.wbits = 0;
          this.wsize = 0;
          this.whave = 0;
          this.wnext = 0;
          this.window = null;
          this.hold = 0;
          this.bits = 0;
          this.length = 0;
          this.offset = 0;
          this.extra = 0;
          this.lencode = null;
          this.distcode = null;
          this.lenbits = 0;
          this.distbits = 0;
          this.ncode = 0;
          this.nlen = 0;
          this.ndist = 0;
          this.have = 0;
          this.next = null;
          this.lens = new _0x31c659.Buf16(320);
          this.work = new _0x31c659.Buf16(288);
          this.lendyn = null;
          this.distdyn = null;
          this.sane = 0;
          this.back = 0;
          this.was = 0;
        }
        function _0x526a6d(_0xa779d8) {
          var _0x1c7cbb;
          return _0xa779d8 && _0xa779d8.state ? (_0x1c7cbb = _0xa779d8.state, _0xa779d8.total_in = _0xa779d8.total_out = _0x1c7cbb.total = 0, _0xa779d8.msg = "", _0x1c7cbb.wrap && (_0xa779d8.adler = 1 & _0x1c7cbb.wrap), _0x1c7cbb.mode = _0x3750f3, _0x1c7cbb.last = 0, _0x1c7cbb.havedict = 0, _0x1c7cbb.dmax = 32768, _0x1c7cbb.head = null, _0x1c7cbb.hold = 0, _0x1c7cbb.bits = 0, _0x1c7cbb.lencode = _0x1c7cbb.lendyn = new _0x31c659.Buf32(_0x3f1c29), _0x1c7cbb.distcode = _0x1c7cbb.distdyn = new _0x31c659.Buf32(_0x412ede), _0x1c7cbb.sane = 1, _0x1c7cbb.back = -1, _0x2ea9e7) : _0x23473d;
        }
        function _0x4b9cf1(_0x56739b) {
          var _0x2f229c;
          return _0x56739b && _0x56739b.state ? ((_0x2f229c = _0x56739b.state).wsize = 0, _0x2f229c.whave = 0, _0x2f229c.wnext = 0, _0x526a6d(_0x56739b)) : _0x23473d;
        }
        function _0x3620d1(_0x132168, _0x2137d7) {
          var _0x45db1e, _0x7ad3b1;
          return _0x132168 && _0x132168.state ? (_0x7ad3b1 = _0x132168.state, _0x2137d7 < 0 ? (_0x45db1e = 0, _0x2137d7 = -_0x2137d7) : (_0x45db1e = 1 + (_0x2137d7 >> 4), _0x2137d7 < 48 && (_0x2137d7 &= 15)), _0x2137d7 && (_0x2137d7 < 8 || 15 < _0x2137d7) ? _0x23473d : (null !== _0x7ad3b1.window && _0x7ad3b1.wbits !== _0x2137d7 && (_0x7ad3b1.window = null), _0x7ad3b1.wrap = _0x45db1e, _0x7ad3b1.wbits = _0x2137d7, _0x4b9cf1(_0x132168))) : _0x23473d;
        }
        function _0x396af4(_0x8471e8, _0x9c1477) {
          var _0x391463, _0x37118b;
          return _0x8471e8 ? (_0x37118b = new _0x13253d(), (_0x8471e8.state = _0x37118b).window = null, (_0x391463 = _0x3620d1(_0x8471e8, _0x9c1477)) !== _0x2ea9e7 && (_0x8471e8.state = null), _0x391463) : _0x23473d;
        }
        var _0x28a994,
          _0x3326f9,
          _0x2f0651 = !0;
        function _0x5c88e3(_0x6b50e) {
          if (_0x2f0651) {
            var _0x1c78b6;
            for (_0x28a994 = new _0x31c659.Buf32(512), _0x3326f9 = new _0x31c659.Buf32(32), _0x1c78b6 = 0; _0x1c78b6 < 144;) {
              _0x6b50e.lens[_0x1c78b6++] = 8;
            }
            for (; _0x1c78b6 < 256;) {
              _0x6b50e.lens[_0x1c78b6++] = 9;
            }
            for (; _0x1c78b6 < 280;) {
              _0x6b50e.lens[_0x1c78b6++] = 7;
            }
            for (; _0x1c78b6 < 288;) {
              _0x6b50e.lens[_0x1c78b6++] = 8;
            }
            for (_0x2f328b(_0x4db202, _0x6b50e.lens, 0, 288, _0x28a994, 0, _0x6b50e.work, {
              bits: 9
            }), _0x1c78b6 = 0; _0x1c78b6 < 32;) {
              _0x6b50e.lens[_0x1c78b6++] = 5;
            }
            _0x2f328b(_0x58a9a0, _0x6b50e.lens, 0, 32, _0x3326f9, 0, _0x6b50e.work, {
              bits: 5
            });
            _0x2f0651 = !1;
          }
          _0x6b50e.lencode = _0x28a994;
          _0x6b50e.lenbits = 9;
          _0x6b50e.distcode = _0x3326f9;
          _0x6b50e.distbits = 5;
        }
        function _0x34cf6b(_0xe4ceae, _0x411e57, _0x52d1d8, _0x55b51b) {
          var _0x32b0a3,
            _0x13f904 = _0xe4ceae.state;
          null === _0x13f904.window && (_0x13f904.wsize = 1 << _0x13f904.wbits, _0x13f904.wnext = 0, _0x13f904.whave = 0, _0x13f904.window = new _0x31c659.Buf8(_0x13f904.wsize));
          _0x55b51b >= _0x13f904.wsize ? (_0x31c659.arraySet(_0x13f904.window, _0x411e57, _0x52d1d8 - _0x13f904.wsize, _0x13f904.wsize, 0), _0x13f904.wnext = 0, _0x13f904.whave = _0x13f904.wsize) : (_0x55b51b < (_0x32b0a3 = _0x13f904.wsize - _0x13f904.wnext) && (_0x32b0a3 = _0x55b51b), _0x31c659.arraySet(_0x13f904.window, _0x411e57, _0x52d1d8 - _0x55b51b, _0x32b0a3, _0x13f904.wnext), (_0x55b51b -= _0x32b0a3) ? (_0x31c659.arraySet(_0x13f904.window, _0x411e57, _0x52d1d8 - _0x55b51b, _0x55b51b, 0), _0x13f904.wnext = _0x55b51b, _0x13f904.whave = _0x13f904.wsize) : (_0x13f904.wnext += _0x32b0a3, _0x13f904.wnext === _0x13f904.wsize && (_0x13f904.wnext = 0), _0x13f904.whave < _0x13f904.wsize && (_0x13f904.whave += _0x32b0a3)));
          return 0;
        }
        _0xc0a1fe.inflateReset = _0x4b9cf1;
        _0xc0a1fe.inflateReset2 = _0x3620d1;
        _0xc0a1fe.inflateResetKeep = _0x526a6d;
        _0xc0a1fe.inflateInit = function (_0x417335) {
          return _0x396af4(_0x417335, 15);
        };
        _0xc0a1fe.inflateInit2 = _0x396af4;
        _0xc0a1fe.inflate = function (_0x8ba343, _0xa815e2) {
          var _0x31f3b3,
            _0x59be01,
            _0xf1b373,
            _0x54f2dc,
            _0x2592b9,
            _0x148de0,
            _0x5943ab,
            _0x4e85c8,
            _0x280fb2,
            _0x4ce796,
            _0x38da7a,
            _0x5888fa,
            _0x3e5c0f,
            _0x5afa10,
            _0x1f5259,
            _0x10b9ee,
            _0x388f5b,
            _0x2bf100,
            _0x3c0584,
            _0x4e7a62,
            _0x4b3fa9,
            _0x349c94,
            _0x346018,
            _0x457603,
            _0x3148d6 = 0,
            _0x4b805e = new _0x31c659.Buf8(4),
            _0x245326 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!_0x8ba343 || !_0x8ba343.state || !_0x8ba343.output || !_0x8ba343.input && 0 !== _0x8ba343.avail_in) {
            return _0x23473d;
          }
          12 === (_0x31f3b3 = _0x8ba343.state).mode && (_0x31f3b3.mode = 13);
          _0x2592b9 = _0x8ba343.next_out;
          _0xf1b373 = _0x8ba343.output;
          _0x5943ab = _0x8ba343.avail_out;
          _0x54f2dc = _0x8ba343.next_in;
          _0x59be01 = _0x8ba343.input;
          _0x148de0 = _0x8ba343.avail_in;
          _0x4e85c8 = _0x31f3b3.hold;
          _0x280fb2 = _0x31f3b3.bits;
          _0x4ce796 = _0x148de0;
          _0x38da7a = _0x5943ab;
          _0x349c94 = _0x2ea9e7;
          _0x11971a: for (;;) {
            switch (_0x31f3b3.mode) {
              case _0x3750f3:
                if (0 === _0x31f3b3.wrap) {
                  _0x31f3b3.mode = 13;
                  break;
                }
                for (; _0x280fb2 < 16;) {
                  if (0 === _0x148de0) {
                    break _0x11971a;
                  }
                  _0x148de0--;
                  _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                  _0x280fb2 += 8;
                }
                if (2 & _0x31f3b3.wrap && 35615 === _0x4e85c8) {
                  _0x4b805e[_0x31f3b3.check = 0] = 255 & _0x4e85c8;
                  _0x4b805e[1] = _0x4e85c8 >>> 8 & 255;
                  _0x31f3b3.check = _0x24a740(_0x31f3b3.check, _0x4b805e, 2, 0);
                  _0x280fb2 = _0x4e85c8 = 0;
                  _0x31f3b3.mode = 2;
                  break;
                }
                if (_0x31f3b3.flags = 0, _0x31f3b3.head && (_0x31f3b3.head.done = !1), !(1 & _0x31f3b3.wrap) || (((255 & _0x4e85c8) << 8) + (_0x4e85c8 >> 8)) % 31) {
                  _0x8ba343.msg = "incorrect header check";
                  _0x31f3b3.mode = 30;
                  break;
                }
                if (8 != (15 & _0x4e85c8)) {
                  _0x8ba343.msg = "unknown compression method";
                  _0x31f3b3.mode = 30;
                  break;
                }
                if (_0x280fb2 -= 4, _0x4b3fa9 = 8 + (15 & (_0x4e85c8 >>>= 4)), 0 === _0x31f3b3.wbits) {
                  _0x31f3b3.wbits = _0x4b3fa9;
                } else {
                  if (_0x4b3fa9 > _0x31f3b3.wbits) {
                    _0x8ba343.msg = "invalid window size";
                    _0x31f3b3.mode = 30;
                    break;
                  }
                }
                _0x31f3b3.dmax = 1 << _0x4b3fa9;
                _0x8ba343.adler = _0x31f3b3.check = 1;
                _0x31f3b3.mode = 512 & _0x4e85c8 ? 10 : 12;
                _0x280fb2 = _0x4e85c8 = 0;
                break;
              case 2:
                for (; _0x280fb2 < 16;) {
                  if (0 === _0x148de0) {
                    break _0x11971a;
                  }
                  _0x148de0--;
                  _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                  _0x280fb2 += 8;
                }
                if (_0x31f3b3.flags = _0x4e85c8, 8 != (255 & _0x31f3b3.flags)) {
                  _0x8ba343.msg = "unknown compression method";
                  _0x31f3b3.mode = 30;
                  break;
                }
                if (57344 & _0x31f3b3.flags) {
                  _0x8ba343.msg = "unknown header flags set";
                  _0x31f3b3.mode = 30;
                  break;
                }
                _0x31f3b3.head && (_0x31f3b3.head.text = _0x4e85c8 >> 8 & 1);
                512 & _0x31f3b3.flags && (_0x4b805e[0] = 255 & _0x4e85c8, _0x4b805e[1] = _0x4e85c8 >>> 8 & 255, _0x31f3b3.check = _0x24a740(_0x31f3b3.check, _0x4b805e, 2, 0));
                _0x280fb2 = _0x4e85c8 = 0;
                _0x31f3b3.mode = 3;
              case 3:
                for (; _0x280fb2 < 32;) {
                  if (0 === _0x148de0) {
                    break _0x11971a;
                  }
                  _0x148de0--;
                  _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                  _0x280fb2 += 8;
                }
                _0x31f3b3.head && (_0x31f3b3.head.time = _0x4e85c8);
                512 & _0x31f3b3.flags && (_0x4b805e[0] = 255 & _0x4e85c8, _0x4b805e[1] = _0x4e85c8 >>> 8 & 255, _0x4b805e[2] = _0x4e85c8 >>> 16 & 255, _0x4b805e[3] = _0x4e85c8 >>> 24 & 255, _0x31f3b3.check = _0x24a740(_0x31f3b3.check, _0x4b805e, 4, 0));
                _0x280fb2 = _0x4e85c8 = 0;
                _0x31f3b3.mode = 4;
              case 4:
                for (; _0x280fb2 < 16;) {
                  if (0 === _0x148de0) {
                    break _0x11971a;
                  }
                  _0x148de0--;
                  _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                  _0x280fb2 += 8;
                }
                _0x31f3b3.head && (_0x31f3b3.head.xflags = 255 & _0x4e85c8, _0x31f3b3.head.os = _0x4e85c8 >> 8);
                512 & _0x31f3b3.flags && (_0x4b805e[0] = 255 & _0x4e85c8, _0x4b805e[1] = _0x4e85c8 >>> 8 & 255, _0x31f3b3.check = _0x24a740(_0x31f3b3.check, _0x4b805e, 2, 0));
                _0x280fb2 = _0x4e85c8 = 0;
                _0x31f3b3.mode = 5;
              case 5:
                if (1024 & _0x31f3b3.flags) {
                  for (; _0x280fb2 < 16;) {
                    if (0 === _0x148de0) {
                      break _0x11971a;
                    }
                    _0x148de0--;
                    _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                    _0x280fb2 += 8;
                  }
                  _0x31f3b3.length = _0x4e85c8;
                  _0x31f3b3.head && (_0x31f3b3.head.extra_len = _0x4e85c8);
                  512 & _0x31f3b3.flags && (_0x4b805e[0] = 255 & _0x4e85c8, _0x4b805e[1] = _0x4e85c8 >>> 8 & 255, _0x31f3b3.check = _0x24a740(_0x31f3b3.check, _0x4b805e, 2, 0));
                  _0x280fb2 = _0x4e85c8 = 0;
                } else {
                  _0x31f3b3.head && (_0x31f3b3.head.extra = null);
                }
                _0x31f3b3.mode = 6;
              case 6:
                if (1024 & _0x31f3b3.flags && (_0x148de0 < (_0x5888fa = _0x31f3b3.length) && (_0x5888fa = _0x148de0), _0x5888fa && (_0x31f3b3.head && (_0x4b3fa9 = _0x31f3b3.head.extra_len - _0x31f3b3.length, _0x31f3b3.head.extra || (_0x31f3b3.head.extra = new Array(_0x31f3b3.head.extra_len)), _0x31c659.arraySet(_0x31f3b3.head.extra, _0x59be01, _0x54f2dc, _0x5888fa, _0x4b3fa9)), 512 & _0x31f3b3.flags && (_0x31f3b3.check = _0x24a740(_0x31f3b3.check, _0x59be01, _0x5888fa, _0x54f2dc)), _0x148de0 -= _0x5888fa, _0x54f2dc += _0x5888fa, _0x31f3b3.length -= _0x5888fa), _0x31f3b3.length)) {
                  break _0x11971a;
                }
                _0x31f3b3.length = 0;
                _0x31f3b3.mode = 7;
              case 7:
                if (2048 & _0x31f3b3.flags) {
                  if (0 === _0x148de0) {
                    break _0x11971a;
                  }
                  for (_0x5888fa = 0; _0x4b3fa9 = _0x59be01[_0x54f2dc + _0x5888fa++], _0x31f3b3.head && _0x4b3fa9 && _0x31f3b3.length < 65536 && (_0x31f3b3.head.name += String.fromCharCode(_0x4b3fa9)), _0x4b3fa9 && _0x5888fa < _0x148de0;) {}
                  if (512 & _0x31f3b3.flags && (_0x31f3b3.check = _0x24a740(_0x31f3b3.check, _0x59be01, _0x5888fa, _0x54f2dc)), _0x148de0 -= _0x5888fa, _0x54f2dc += _0x5888fa, _0x4b3fa9) {
                    break _0x11971a;
                  }
                } else {
                  _0x31f3b3.head && (_0x31f3b3.head.name = null);
                }
                _0x31f3b3.length = 0;
                _0x31f3b3.mode = 8;
              case 8:
                if (4096 & _0x31f3b3.flags) {
                  if (0 === _0x148de0) {
                    break _0x11971a;
                  }
                  for (_0x5888fa = 0; _0x4b3fa9 = _0x59be01[_0x54f2dc + _0x5888fa++], _0x31f3b3.head && _0x4b3fa9 && _0x31f3b3.length < 65536 && (_0x31f3b3.head.comment += String.fromCharCode(_0x4b3fa9)), _0x4b3fa9 && _0x5888fa < _0x148de0;) {}
                  if (512 & _0x31f3b3.flags && (_0x31f3b3.check = _0x24a740(_0x31f3b3.check, _0x59be01, _0x5888fa, _0x54f2dc)), _0x148de0 -= _0x5888fa, _0x54f2dc += _0x5888fa, _0x4b3fa9) {
                    break _0x11971a;
                  }
                } else {
                  _0x31f3b3.head && (_0x31f3b3.head.comment = null);
                }
                _0x31f3b3.mode = 9;
              case 9:
                if (512 & _0x31f3b3.flags) {
                  for (; _0x280fb2 < 16;) {
                    if (0 === _0x148de0) {
                      break _0x11971a;
                    }
                    _0x148de0--;
                    _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                    _0x280fb2 += 8;
                  }
                  if (_0x4e85c8 !== (65535 & _0x31f3b3.check)) {
                    _0x8ba343.msg = "header crc mismatch";
                    _0x31f3b3.mode = 30;
                    break;
                  }
                  _0x280fb2 = _0x4e85c8 = 0;
                }
                _0x31f3b3.head && (_0x31f3b3.head.hcrc = _0x31f3b3.flags >> 9 & 1, _0x31f3b3.head.done = !0);
                _0x8ba343.adler = _0x31f3b3.check = 0;
                _0x31f3b3.mode = 12;
                break;
              case 10:
                for (; _0x280fb2 < 32;) {
                  if (0 === _0x148de0) {
                    break _0x11971a;
                  }
                  _0x148de0--;
                  _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                  _0x280fb2 += 8;
                }
                _0x8ba343.adler = _0x31f3b3.check = _0x4ebaab(_0x4e85c8);
                _0x280fb2 = _0x4e85c8 = 0;
                _0x31f3b3.mode = 11;
              case 11:
                if (0 === _0x31f3b3.havedict) {
                  _0x8ba343.next_out = _0x2592b9;
                  _0x8ba343.avail_out = _0x5943ab;
                  _0x8ba343.next_in = _0x54f2dc;
                  _0x8ba343.avail_in = _0x148de0;
                  _0x31f3b3.hold = _0x4e85c8;
                  _0x31f3b3.bits = _0x280fb2;
                  return 2;
                }
                _0x8ba343.adler = _0x31f3b3.check = 1;
                _0x31f3b3.mode = 12;
              case 12:
                if (5 === _0xa815e2 || 6 === _0xa815e2) {
                  break _0x11971a;
                }
              case 13:
                if (_0x31f3b3.last) {
                  _0x4e85c8 >>>= 7 & _0x280fb2;
                  _0x280fb2 -= 7 & _0x280fb2;
                  _0x31f3b3.mode = 27;
                  break;
                }
                for (; _0x280fb2 < 3;) {
                  if (0 === _0x148de0) {
                    break _0x11971a;
                  }
                  _0x148de0--;
                  _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                  _0x280fb2 += 8;
                }
                switch (_0x31f3b3.last = 1 & _0x4e85c8, _0x280fb2 -= 1, 3 & (_0x4e85c8 >>>= 1)) {
                  case 0:
                    _0x31f3b3.mode = 14;
                    break;
                  case 1:
                    if (_0x5c88e3(_0x31f3b3), _0x31f3b3.mode = 20, 6 !== _0xa815e2) {
                      break;
                    }
                    _0x4e85c8 >>>= 2;
                    _0x280fb2 -= 2;
                    break _0x11971a;
                  case 2:
                    _0x31f3b3.mode = 17;
                    break;
                  case 3:
                    _0x8ba343.msg = "invalid block type";
                    _0x31f3b3.mode = 30;
                }
                _0x4e85c8 >>>= 2;
                _0x280fb2 -= 2;
                break;
              case 14:
                for (_0x4e85c8 >>>= 7 & _0x280fb2, _0x280fb2 -= 7 & _0x280fb2; _0x280fb2 < 32;) {
                  if (0 === _0x148de0) {
                    break _0x11971a;
                  }
                  _0x148de0--;
                  _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                  _0x280fb2 += 8;
                }
                if ((65535 & _0x4e85c8) != (_0x4e85c8 >>> 16 ^ 65535)) {
                  _0x8ba343.msg = "invalid stored block lengths";
                  _0x31f3b3.mode = 30;
                  break;
                }
                if (_0x31f3b3.length = 65535 & _0x4e85c8, _0x280fb2 = _0x4e85c8 = 0, _0x31f3b3.mode = 15, 6 === _0xa815e2) {
                  break _0x11971a;
                }
              case 15:
                _0x31f3b3.mode = 16;
              case 16:
                if (_0x5888fa = _0x31f3b3.length) {
                  if (_0x148de0 < _0x5888fa && (_0x5888fa = _0x148de0), _0x5943ab < _0x5888fa && (_0x5888fa = _0x5943ab), 0 === _0x5888fa) {
                    break _0x11971a;
                  }
                  _0x31c659.arraySet(_0xf1b373, _0x59be01, _0x54f2dc, _0x5888fa, _0x2592b9);
                  _0x148de0 -= _0x5888fa;
                  _0x54f2dc += _0x5888fa;
                  _0x5943ab -= _0x5888fa;
                  _0x2592b9 += _0x5888fa;
                  _0x31f3b3.length -= _0x5888fa;
                  break;
                }
                _0x31f3b3.mode = 12;
                break;
              case 17:
                for (; _0x280fb2 < 14;) {
                  if (0 === _0x148de0) {
                    break _0x11971a;
                  }
                  _0x148de0--;
                  _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                  _0x280fb2 += 8;
                }
                if (_0x31f3b3.nlen = 257 + (31 & _0x4e85c8), _0x4e85c8 >>>= 5, _0x280fb2 -= 5, _0x31f3b3.ndist = 1 + (31 & _0x4e85c8), _0x4e85c8 >>>= 5, _0x280fb2 -= 5, _0x31f3b3.ncode = 4 + (15 & _0x4e85c8), _0x4e85c8 >>>= 4, _0x280fb2 -= 4, 286 < _0x31f3b3.nlen || 30 < _0x31f3b3.ndist) {
                  _0x8ba343.msg = "too many length or distance symbols";
                  _0x31f3b3.mode = 30;
                  break;
                }
                _0x31f3b3.have = 0;
                _0x31f3b3.mode = 18;
              case 18:
                for (; _0x31f3b3.have < _0x31f3b3.ncode;) {
                  for (; _0x280fb2 < 3;) {
                    if (0 === _0x148de0) {
                      break _0x11971a;
                    }
                    _0x148de0--;
                    _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                    _0x280fb2 += 8;
                  }
                  _0x31f3b3.lens[_0x245326[_0x31f3b3.have++]] = 7 & _0x4e85c8;
                  _0x4e85c8 >>>= 3;
                  _0x280fb2 -= 3;
                }
                for (; _0x31f3b3.have < 19;) {
                  _0x31f3b3.lens[_0x245326[_0x31f3b3.have++]] = 0;
                }
                if (_0x31f3b3.lencode = _0x31f3b3.lendyn, _0x31f3b3.lenbits = 7, _0x346018 = {
                  bits: _0x31f3b3.lenbits
                }, _0x349c94 = _0x2f328b(0, _0x31f3b3.lens, 0, 19, _0x31f3b3.lencode, 0, _0x31f3b3.work, _0x346018), _0x31f3b3.lenbits = _0x346018.bits, _0x349c94) {
                  _0x8ba343.msg = "invalid code lengths set";
                  _0x31f3b3.mode = 30;
                  break;
                }
                _0x31f3b3.have = 0;
                _0x31f3b3.mode = 19;
              case 19:
                for (; _0x31f3b3.have < _0x31f3b3.nlen + _0x31f3b3.ndist;) {
                  for (; _0x10b9ee = (_0x3148d6 = _0x31f3b3.lencode[_0x4e85c8 & (1 << _0x31f3b3.lenbits) - 1]) >>> 16 & 255, _0x388f5b = 65535 & _0x3148d6, !((_0x1f5259 = _0x3148d6 >>> 24) <= _0x280fb2);) {
                    if (0 === _0x148de0) {
                      break _0x11971a;
                    }
                    _0x148de0--;
                    _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                    _0x280fb2 += 8;
                  }
                  if (_0x388f5b < 16) {
                    _0x4e85c8 >>>= _0x1f5259;
                    _0x280fb2 -= _0x1f5259;
                    _0x31f3b3.lens[_0x31f3b3.have++] = _0x388f5b;
                  } else {
                    if (16 === _0x388f5b) {
                      for (_0x457603 = _0x1f5259 + 2; _0x280fb2 < _0x457603;) {
                        if (0 === _0x148de0) {
                          break _0x11971a;
                        }
                        _0x148de0--;
                        _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                        _0x280fb2 += 8;
                      }
                      if (_0x4e85c8 >>>= _0x1f5259, _0x280fb2 -= _0x1f5259, 0 === _0x31f3b3.have) {
                        _0x8ba343.msg = "invalid bit length repeat";
                        _0x31f3b3.mode = 30;
                        break;
                      }
                      _0x4b3fa9 = _0x31f3b3.lens[_0x31f3b3.have - 1];
                      _0x5888fa = 3 + (3 & _0x4e85c8);
                      _0x4e85c8 >>>= 2;
                      _0x280fb2 -= 2;
                    } else {
                      if (17 === _0x388f5b) {
                        for (_0x457603 = _0x1f5259 + 3; _0x280fb2 < _0x457603;) {
                          if (0 === _0x148de0) {
                            break _0x11971a;
                          }
                          _0x148de0--;
                          _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                          _0x280fb2 += 8;
                        }
                        _0x280fb2 -= _0x1f5259;
                        _0x4b3fa9 = 0;
                        _0x5888fa = 3 + (7 & (_0x4e85c8 >>>= _0x1f5259));
                        _0x4e85c8 >>>= 3;
                        _0x280fb2 -= 3;
                      } else {
                        for (_0x457603 = _0x1f5259 + 7; _0x280fb2 < _0x457603;) {
                          if (0 === _0x148de0) {
                            break _0x11971a;
                          }
                          _0x148de0--;
                          _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                          _0x280fb2 += 8;
                        }
                        _0x280fb2 -= _0x1f5259;
                        _0x4b3fa9 = 0;
                        _0x5888fa = 11 + (127 & (_0x4e85c8 >>>= _0x1f5259));
                        _0x4e85c8 >>>= 7;
                        _0x280fb2 -= 7;
                      }
                    }
                    if (_0x31f3b3.have + _0x5888fa > _0x31f3b3.nlen + _0x31f3b3.ndist) {
                      _0x8ba343.msg = "invalid bit length repeat";
                      _0x31f3b3.mode = 30;
                      break;
                    }
                    for (; _0x5888fa--;) {
                      _0x31f3b3.lens[_0x31f3b3.have++] = _0x4b3fa9;
                    }
                  }
                }
                if (30 === _0x31f3b3.mode) {
                  break;
                }
                if (0 === _0x31f3b3.lens[256]) {
                  _0x8ba343.msg = "invalid code -- missing end-of-block";
                  _0x31f3b3.mode = 30;
                  break;
                }
                if (_0x31f3b3.lenbits = 9, _0x346018 = {
                  bits: _0x31f3b3.lenbits
                }, _0x349c94 = _0x2f328b(_0x4db202, _0x31f3b3.lens, 0, _0x31f3b3.nlen, _0x31f3b3.lencode, 0, _0x31f3b3.work, _0x346018), _0x31f3b3.lenbits = _0x346018.bits, _0x349c94) {
                  _0x8ba343.msg = "invalid literal/lengths set";
                  _0x31f3b3.mode = 30;
                  break;
                }
                if (_0x31f3b3.distbits = 6, _0x31f3b3.distcode = _0x31f3b3.distdyn, _0x346018 = {
                  bits: _0x31f3b3.distbits
                }, _0x349c94 = _0x2f328b(_0x58a9a0, _0x31f3b3.lens, _0x31f3b3.nlen, _0x31f3b3.ndist, _0x31f3b3.distcode, 0, _0x31f3b3.work, _0x346018), _0x31f3b3.distbits = _0x346018.bits, _0x349c94) {
                  _0x8ba343.msg = "invalid distances set";
                  _0x31f3b3.mode = 30;
                  break;
                }
                if (_0x31f3b3.mode = 20, 6 === _0xa815e2) {
                  break _0x11971a;
                }
              case 20:
                _0x31f3b3.mode = 21;
              case 21:
                if (6 <= _0x148de0 && 258 <= _0x5943ab) {
                  _0x8ba343.next_out = _0x2592b9;
                  _0x8ba343.avail_out = _0x5943ab;
                  _0x8ba343.next_in = _0x54f2dc;
                  _0x8ba343.avail_in = _0x148de0;
                  _0x31f3b3.hold = _0x4e85c8;
                  _0x31f3b3.bits = _0x280fb2;
                  _0x3efb17(_0x8ba343, _0x38da7a);
                  _0x2592b9 = _0x8ba343.next_out;
                  _0xf1b373 = _0x8ba343.output;
                  _0x5943ab = _0x8ba343.avail_out;
                  _0x54f2dc = _0x8ba343.next_in;
                  _0x59be01 = _0x8ba343.input;
                  _0x148de0 = _0x8ba343.avail_in;
                  _0x4e85c8 = _0x31f3b3.hold;
                  _0x280fb2 = _0x31f3b3.bits;
                  12 === _0x31f3b3.mode && (_0x31f3b3.back = -1);
                  break;
                }
                for (_0x31f3b3.back = 0; _0x10b9ee = (_0x3148d6 = _0x31f3b3.lencode[_0x4e85c8 & (1 << _0x31f3b3.lenbits) - 1]) >>> 16 & 255, _0x388f5b = 65535 & _0x3148d6, !((_0x1f5259 = _0x3148d6 >>> 24) <= _0x280fb2);) {
                  if (0 === _0x148de0) {
                    break _0x11971a;
                  }
                  _0x148de0--;
                  _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                  _0x280fb2 += 8;
                }
                if (_0x10b9ee && 0 == (240 & _0x10b9ee)) {
                  for (_0x2bf100 = _0x1f5259, _0x3c0584 = _0x10b9ee, _0x4e7a62 = _0x388f5b; _0x10b9ee = (_0x3148d6 = _0x31f3b3.lencode[_0x4e7a62 + ((_0x4e85c8 & (1 << _0x2bf100 + _0x3c0584) - 1) >> _0x2bf100)]) >>> 16 & 255, _0x388f5b = 65535 & _0x3148d6, !(_0x2bf100 + (_0x1f5259 = _0x3148d6 >>> 24) <= _0x280fb2);) {
                    if (0 === _0x148de0) {
                      break _0x11971a;
                    }
                    _0x148de0--;
                    _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                    _0x280fb2 += 8;
                  }
                  _0x4e85c8 >>>= _0x2bf100;
                  _0x280fb2 -= _0x2bf100;
                  _0x31f3b3.back += _0x2bf100;
                }
                if (_0x4e85c8 >>>= _0x1f5259, _0x280fb2 -= _0x1f5259, _0x31f3b3.back += _0x1f5259, _0x31f3b3.length = _0x388f5b, 0 === _0x10b9ee) {
                  _0x31f3b3.mode = 26;
                  break;
                }
                if (32 & _0x10b9ee) {
                  _0x31f3b3.back = -1;
                  _0x31f3b3.mode = 12;
                  break;
                }
                if (64 & _0x10b9ee) {
                  _0x8ba343.msg = "invalid literal/length code";
                  _0x31f3b3.mode = 30;
                  break;
                }
                _0x31f3b3.extra = 15 & _0x10b9ee;
                _0x31f3b3.mode = 22;
              case 22:
                if (_0x31f3b3.extra) {
                  for (_0x457603 = _0x31f3b3.extra; _0x280fb2 < _0x457603;) {
                    if (0 === _0x148de0) {
                      break _0x11971a;
                    }
                    _0x148de0--;
                    _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                    _0x280fb2 += 8;
                  }
                  _0x31f3b3.length += _0x4e85c8 & (1 << _0x31f3b3.extra) - 1;
                  _0x4e85c8 >>>= _0x31f3b3.extra;
                  _0x280fb2 -= _0x31f3b3.extra;
                  _0x31f3b3.back += _0x31f3b3.extra;
                }
                _0x31f3b3.was = _0x31f3b3.length;
                _0x31f3b3.mode = 23;
              case 23:
                for (; _0x10b9ee = (_0x3148d6 = _0x31f3b3.distcode[_0x4e85c8 & (1 << _0x31f3b3.distbits) - 1]) >>> 16 & 255, _0x388f5b = 65535 & _0x3148d6, !((_0x1f5259 = _0x3148d6 >>> 24) <= _0x280fb2);) {
                  if (0 === _0x148de0) {
                    break _0x11971a;
                  }
                  _0x148de0--;
                  _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                  _0x280fb2 += 8;
                }
                if (0 == (240 & _0x10b9ee)) {
                  for (_0x2bf100 = _0x1f5259, _0x3c0584 = _0x10b9ee, _0x4e7a62 = _0x388f5b; _0x10b9ee = (_0x3148d6 = _0x31f3b3.distcode[_0x4e7a62 + ((_0x4e85c8 & (1 << _0x2bf100 + _0x3c0584) - 1) >> _0x2bf100)]) >>> 16 & 255, _0x388f5b = 65535 & _0x3148d6, !(_0x2bf100 + (_0x1f5259 = _0x3148d6 >>> 24) <= _0x280fb2);) {
                    if (0 === _0x148de0) {
                      break _0x11971a;
                    }
                    _0x148de0--;
                    _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                    _0x280fb2 += 8;
                  }
                  _0x4e85c8 >>>= _0x2bf100;
                  _0x280fb2 -= _0x2bf100;
                  _0x31f3b3.back += _0x2bf100;
                }
                if (_0x4e85c8 >>>= _0x1f5259, _0x280fb2 -= _0x1f5259, _0x31f3b3.back += _0x1f5259, 64 & _0x10b9ee) {
                  _0x8ba343.msg = "invalid distance code";
                  _0x31f3b3.mode = 30;
                  break;
                }
                _0x31f3b3.offset = _0x388f5b;
                _0x31f3b3.extra = 15 & _0x10b9ee;
                _0x31f3b3.mode = 24;
              case 24:
                if (_0x31f3b3.extra) {
                  for (_0x457603 = _0x31f3b3.extra; _0x280fb2 < _0x457603;) {
                    if (0 === _0x148de0) {
                      break _0x11971a;
                    }
                    _0x148de0--;
                    _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                    _0x280fb2 += 8;
                  }
                  _0x31f3b3.offset += _0x4e85c8 & (1 << _0x31f3b3.extra) - 1;
                  _0x4e85c8 >>>= _0x31f3b3.extra;
                  _0x280fb2 -= _0x31f3b3.extra;
                  _0x31f3b3.back += _0x31f3b3.extra;
                }
                if (_0x31f3b3.offset > _0x31f3b3.dmax) {
                  _0x8ba343.msg = "invalid distance too far back";
                  _0x31f3b3.mode = 30;
                  break;
                }
                _0x31f3b3.mode = 25;
              case 25:
                if (0 === _0x5943ab) {
                  break _0x11971a;
                }
                if (_0x5888fa = _0x38da7a - _0x5943ab, _0x31f3b3.offset > _0x5888fa) {
                  if ((_0x5888fa = _0x31f3b3.offset - _0x5888fa) > _0x31f3b3.whave && _0x31f3b3.sane) {
                    _0x8ba343.msg = "invalid distance too far back";
                    _0x31f3b3.mode = 30;
                    break;
                  }
                  _0x5888fa > _0x31f3b3.wnext ? (_0x5888fa -= _0x31f3b3.wnext, _0x3e5c0f = _0x31f3b3.wsize - _0x5888fa) : _0x3e5c0f = _0x31f3b3.wnext - _0x5888fa;
                  _0x5888fa > _0x31f3b3.length && (_0x5888fa = _0x31f3b3.length);
                  _0x5afa10 = _0x31f3b3.window;
                } else {
                  _0x5afa10 = _0xf1b373;
                  _0x3e5c0f = _0x2592b9 - _0x31f3b3.offset;
                  _0x5888fa = _0x31f3b3.length;
                }
                for (_0x5943ab < _0x5888fa && (_0x5888fa = _0x5943ab), _0x5943ab -= _0x5888fa, _0x31f3b3.length -= _0x5888fa; _0xf1b373[_0x2592b9++] = _0x5afa10[_0x3e5c0f++], --_0x5888fa;) {}
                0 === _0x31f3b3.length && (_0x31f3b3.mode = 21);
                break;
              case 26:
                if (0 === _0x5943ab) {
                  break _0x11971a;
                }
                _0xf1b373[_0x2592b9++] = _0x31f3b3.length;
                _0x5943ab--;
                _0x31f3b3.mode = 21;
                break;
              case 27:
                if (_0x31f3b3.wrap) {
                  for (; _0x280fb2 < 32;) {
                    if (0 === _0x148de0) {
                      break _0x11971a;
                    }
                    _0x148de0--;
                    _0x4e85c8 |= _0x59be01[_0x54f2dc++] << _0x280fb2;
                    _0x280fb2 += 8;
                  }
                  if (_0x38da7a -= _0x5943ab, _0x8ba343.total_out += _0x38da7a, _0x31f3b3.total += _0x38da7a, _0x38da7a && (_0x8ba343.adler = _0x31f3b3.check = _0x31f3b3.flags ? _0x24a740(_0x31f3b3.check, _0xf1b373, _0x38da7a, _0x2592b9 - _0x38da7a) : _0x37de8c(_0x31f3b3.check, _0xf1b373, _0x38da7a, _0x2592b9 - _0x38da7a)), _0x38da7a = _0x5943ab, (_0x31f3b3.flags ? _0x4e85c8 : _0x4ebaab(_0x4e85c8)) !== _0x31f3b3.check) {
                    _0x8ba343.msg = "incorrect data check";
                    _0x31f3b3.mode = 30;
                    break;
                  }
                  _0x280fb2 = _0x4e85c8 = 0;
                }
                _0x31f3b3.mode = 28;
              case 28:
                if (_0x31f3b3.wrap && _0x31f3b3.flags) {
                  for (; _0x280fb2 < 32;) {
                    if (0 === _0x148de0) {
                      break _0x11971a;
                    }
                    _0x148de0--;
                    _0x4e85c8 += _0x59be01[_0x54f2dc++] << _0x280fb2;
                    _0x280fb2 += 8;
                  }
                  if (_0x4e85c8 !== (4294967295 & _0x31f3b3.total)) {
                    _0x8ba343.msg = "incorrect length check";
                    _0x31f3b3.mode = 30;
                    break;
                  }
                  _0x280fb2 = _0x4e85c8 = 0;
                }
                _0x31f3b3.mode = 29;
              case 29:
                _0x349c94 = 1;
                break _0x11971a;
              case 30:
                _0x349c94 = -3;
                break _0x11971a;
              case 31:
                return -4;
              case 32:
              default:
                return _0x23473d;
            }
          }
          _0x8ba343.next_out = _0x2592b9;
          _0x8ba343.avail_out = _0x5943ab;
          _0x8ba343.next_in = _0x54f2dc;
          _0x8ba343.avail_in = _0x148de0;
          _0x31f3b3.hold = _0x4e85c8;
          _0x31f3b3.bits = _0x280fb2;
          return (_0x31f3b3.wsize || _0x38da7a !== _0x8ba343.avail_out && _0x31f3b3.mode < 30 && (_0x31f3b3.mode < 27 || 4 !== _0xa815e2)) && _0x34cf6b(_0x8ba343, _0x8ba343.output, _0x8ba343.next_out, _0x38da7a - _0x8ba343.avail_out) ? (_0x31f3b3.mode = 31, -4) : (_0x4ce796 -= _0x8ba343.avail_in, _0x38da7a -= _0x8ba343.avail_out, _0x8ba343.total_in += _0x4ce796, _0x8ba343.total_out += _0x38da7a, _0x31f3b3.total += _0x38da7a, _0x31f3b3.wrap && _0x38da7a && (_0x8ba343.adler = _0x31f3b3.check = _0x31f3b3.flags ? _0x24a740(_0x31f3b3.check, _0xf1b373, _0x38da7a, _0x8ba343.next_out - _0x38da7a) : _0x37de8c(_0x31f3b3.check, _0xf1b373, _0x38da7a, _0x8ba343.next_out - _0x38da7a)), _0x8ba343.data_type = _0x31f3b3.bits + (_0x31f3b3.last ? 64 : 0) + (12 === _0x31f3b3.mode ? 128 : 0) + (20 === _0x31f3b3.mode || 15 === _0x31f3b3.mode ? 256 : 0), (0 === _0x4ce796 && 0 === _0x38da7a || 4 === _0xa815e2) && _0x349c94 === _0x2ea9e7 && (_0x349c94 = -5), _0x349c94);
        };
        _0xc0a1fe.inflateEnd = function (_0x804a29) {
          if (!_0x804a29 || !_0x804a29.state) {
            return _0x23473d;
          }
          var _0x2ac14b = _0x804a29.state;
          _0x2ac14b.window && (_0x2ac14b.window = null);
          _0x804a29.state = null;
          return _0x2ea9e7;
        };
        _0xc0a1fe.inflateGetHeader = function (_0x3a8220, _0x1cf426) {
          var _0x5ed0e3;
          return _0x3a8220 && _0x3a8220.state ? 0 == (2 & (_0x5ed0e3 = _0x3a8220.state).wrap) ? _0x23473d : ((_0x5ed0e3.head = _0x1cf426).done = !1, _0x2ea9e7) : _0x23473d;
        };
        _0xc0a1fe.inflateSetDictionary = function (_0x4f6764, _0x15bd52) {
          var _0x18bc26,
            _0x242a10 = _0x15bd52.length;
          return _0x4f6764 && _0x4f6764.state ? 0 !== (_0x18bc26 = _0x4f6764.state).wrap && 11 !== _0x18bc26.mode ? _0x23473d : 11 === _0x18bc26.mode && _0x37de8c(1, _0x15bd52, _0x242a10, 0) !== _0x18bc26.check ? -3 : _0x34cf6b(_0x4f6764, _0x15bd52, _0x242a10, _0x242a10) ? (_0x18bc26.mode = 31, -4) : (_0x18bc26.havedict = 1, _0x2ea9e7) : _0x23473d;
        };
        _0xc0a1fe.inflateInfo = "pako inflate (from Nodeca project)";
      }, {
        "../utils/common": 3,
        "./adler32": 5,
        "./crc32": 7,
        "./inffast": 10,
        "./inftrees": 12
      }],
      12: [function (_0x528c3f, _0x602420, _0x45a48a) {
        'use strict';

        var _0x201153 = _0x528c3f("../utils/common"),
          _0xe3b85f = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
          _0x2bf2d8 = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
          _0x2017bd = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
          _0x7ae3d1 = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        _0x602420.exports = function (_0x58f9c9, _0x98d3cb, _0xc27c87, _0xd629df, _0x1267dc, _0x5bc731, _0x1672c6, _0x5a3d09) {
          var _0x322884,
            _0x547104,
            _0x159ab3,
            _0x240f0b,
            _0x17d990,
            _0x1184e2,
            _0x3c4ad5,
            _0x1903a5,
            _0x1aa72f,
            _0x37ce02 = _0x5a3d09.bits,
            _0x1a6e91 = 0,
            _0x4f7cd8 = 0,
            _0x31cfee = 0,
            _0x1aff47 = 0,
            _0x5a0fb3 = 0,
            _0x5bfcd7 = 0,
            _0x1ba44c = 0,
            _0x2b19e6 = 0,
            _0x3946fd = 0,
            _0x1a885e = 0,
            _0x594583 = null,
            _0xb790c3 = 0,
            _0x334866 = new _0x201153.Buf16(16),
            _0xdaabb7 = new _0x201153.Buf16(16),
            _0x58dcf5 = null,
            _0x2c3749 = 0;
          for (_0x1a6e91 = 0; _0x1a6e91 <= 15; _0x1a6e91++) {
            _0x334866[_0x1a6e91] = 0;
          }
          for (_0x4f7cd8 = 0; _0x4f7cd8 < _0xd629df; _0x4f7cd8++) {
            _0x334866[_0x98d3cb[_0xc27c87 + _0x4f7cd8]]++;
          }
          for (_0x5a0fb3 = _0x37ce02, _0x1aff47 = 15; 1 <= _0x1aff47 && 0 === _0x334866[_0x1aff47]; _0x1aff47--) {}
          if (_0x1aff47 < _0x5a0fb3 && (_0x5a0fb3 = _0x1aff47), 0 === _0x1aff47) {
            _0x1267dc[_0x5bc731++] = 20971520;
            _0x1267dc[_0x5bc731++] = 20971520;
            _0x5a3d09.bits = 1;
            return 0;
          }
          for (_0x31cfee = 1; _0x31cfee < _0x1aff47 && 0 === _0x334866[_0x31cfee]; _0x31cfee++) {}
          for (_0x5a0fb3 < _0x31cfee && (_0x5a0fb3 = _0x31cfee), _0x1a6e91 = _0x2b19e6 = 1; _0x1a6e91 <= 15; _0x1a6e91++) {
            if (_0x2b19e6 <<= 1, (_0x2b19e6 -= _0x334866[_0x1a6e91]) < 0) {
              return -1;
            }
          }
          if (0 < _0x2b19e6 && (0 === _0x58f9c9 || 1 !== _0x1aff47)) {
            return -1;
          }
          for (_0xdaabb7[1] = 0, _0x1a6e91 = 1; _0x1a6e91 < 15; _0x1a6e91++) {
            _0xdaabb7[_0x1a6e91 + 1] = _0xdaabb7[_0x1a6e91] + _0x334866[_0x1a6e91];
          }
          for (_0x4f7cd8 = 0; _0x4f7cd8 < _0xd629df; _0x4f7cd8++) {
            0 !== _0x98d3cb[_0xc27c87 + _0x4f7cd8] && (_0x1672c6[_0xdaabb7[_0x98d3cb[_0xc27c87 + _0x4f7cd8]]++] = _0x4f7cd8);
          }
          if (0 === _0x58f9c9 ? (_0x594583 = _0x58dcf5 = _0x1672c6, _0x1184e2 = 19) : 1 === _0x58f9c9 ? (_0x594583 = _0xe3b85f, _0xb790c3 -= 257, _0x58dcf5 = _0x2bf2d8, _0x2c3749 -= 257, _0x1184e2 = 256) : (_0x594583 = _0x2017bd, _0x58dcf5 = _0x7ae3d1, _0x1184e2 = -1), _0x1a6e91 = _0x31cfee, _0x17d990 = _0x5bc731, _0x1ba44c = _0x4f7cd8 = _0x1a885e = 0, _0x159ab3 = -1, _0x240f0b = (_0x3946fd = 1 << (_0x5bfcd7 = _0x5a0fb3)) - 1, 1 === _0x58f9c9 && 852 < _0x3946fd || 2 === _0x58f9c9 && 592 < _0x3946fd) {
            return 1;
          }
          for (;;) {
            for (_0x3c4ad5 = _0x1a6e91 - _0x1ba44c, _0x1672c6[_0x4f7cd8] < _0x1184e2 ? (_0x1903a5 = 0, _0x1aa72f = _0x1672c6[_0x4f7cd8]) : _0x1672c6[_0x4f7cd8] > _0x1184e2 ? (_0x1903a5 = _0x58dcf5[_0x2c3749 + _0x1672c6[_0x4f7cd8]], _0x1aa72f = _0x594583[_0xb790c3 + _0x1672c6[_0x4f7cd8]]) : (_0x1903a5 = 96, _0x1aa72f = 0), _0x322884 = 1 << _0x1a6e91 - _0x1ba44c, _0x31cfee = _0x547104 = 1 << _0x5bfcd7; _0x1267dc[_0x17d990 + (_0x1a885e >> _0x1ba44c) + (_0x547104 -= _0x322884)] = _0x3c4ad5 << 24 | _0x1903a5 << 16 | _0x1aa72f | 0, 0 !== _0x547104;) {}
            for (_0x322884 = 1 << _0x1a6e91 - 1; _0x1a885e & _0x322884;) {
              _0x322884 >>= 1;
            }
            if (0 !== _0x322884 ? (_0x1a885e &= _0x322884 - 1, _0x1a885e += _0x322884) : _0x1a885e = 0, _0x4f7cd8++, 0 == --_0x334866[_0x1a6e91]) {
              if (_0x1a6e91 === _0x1aff47) {
                break;
              }
              _0x1a6e91 = _0x98d3cb[_0xc27c87 + _0x1672c6[_0x4f7cd8]];
            }
            if (_0x5a0fb3 < _0x1a6e91 && (_0x1a885e & _0x240f0b) !== _0x159ab3) {
              for (0 === _0x1ba44c && (_0x1ba44c = _0x5a0fb3), _0x17d990 += _0x31cfee, _0x2b19e6 = 1 << (_0x5bfcd7 = _0x1a6e91 - _0x1ba44c); _0x5bfcd7 + _0x1ba44c < _0x1aff47 && !((_0x2b19e6 -= _0x334866[_0x5bfcd7 + _0x1ba44c]) <= 0);) {
                _0x5bfcd7++;
                _0x2b19e6 <<= 1;
              }
              if (_0x3946fd += 1 << _0x5bfcd7, 1 === _0x58f9c9 && 852 < _0x3946fd || 2 === _0x58f9c9 && 592 < _0x3946fd) {
                return 1;
              }
              _0x1267dc[_0x159ab3 = _0x1a885e & _0x240f0b] = _0x5a0fb3 << 24 | _0x5bfcd7 << 16 | _0x17d990 - _0x5bc731 | 0;
            }
          }
          0 !== _0x1a885e && (_0x1267dc[_0x17d990 + _0x1a885e] = _0x1a6e91 - _0x1ba44c << 24 | 4194304 | 0);
          _0x5a3d09.bits = _0x5a0fb3;
          return 0;
        };
      }, {
        "../utils/common": 3
      }],
      13: [function (_0x354f18, _0x39dab6, _0x4e1c1d) {
        'use strict';

        _0x39dab6.exports = {
          2: "need dictionary",
          1: "stream end",
          0: "",
          "-1": "file error",
          "-2": "stream error",
          "-3": "data error",
          "-4": "insufficient memory",
          "-5": "buffer error",
          "-6": "incompatible version"
        };
      }, {}],
      14: [function (_0x1a2329, _0x1d4a6c, _0x43ac1c) {
        'use strict';

        var _0x3307a2 = _0x1a2329("../utils/common"),
          _0x19f6e4 = 0,
          _0x4e0ad5 = 1;
        function _0x62c12(_0x684254) {
          for (var _0x58702b = _0x684254.length; 0 <= --_0x58702b;) {
            _0x684254[_0x58702b] = 0;
          }
        }
        var _0x240f60 = 0,
          _0x72a1a = 29,
          _0x41eeaf = 256,
          _0x27b811 = _0x41eeaf + 1 + _0x72a1a,
          _0x6c046 = 30,
          _0xa089a = 19,
          _0x464c01 = 2 * _0x27b811 + 1,
          _0x5e31c6 = 15,
          _0x51822e = 16,
          _0x4c2893 = 7,
          _0x35bcbf = 256,
          _0x4a1f84 = 16,
          _0x408f27 = 17,
          _0x47a4ed = 18,
          _0xa9909b = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
          _0x344a12 = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
          _0x5ac4cb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
          _0x33e8a5 = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
          _0xa9d639 = new Array(2 * (_0x27b811 + 2));
        _0x62c12(_0xa9d639);
        var _0x1c33f0 = new Array(2 * _0x6c046);
        _0x62c12(_0x1c33f0);
        var _0x5c28f1 = new Array(512);
        _0x62c12(_0x5c28f1);
        var _0x2239ff = new Array(256);
        _0x62c12(_0x2239ff);
        var _0x64eebd = new Array(_0x72a1a);
        _0x62c12(_0x64eebd);
        var _0x3c1211,
          _0x1cfbaa,
          _0xfb421f,
          _0x54b181 = new Array(_0x6c046);
        function _0x4b12a3(_0x28c998, _0x3f00de, _0x4a096c, _0x8718ef, _0x3ccf35) {
          this.static_tree = _0x28c998;
          this.extra_bits = _0x3f00de;
          this.extra_base = _0x4a096c;
          this.elems = _0x8718ef;
          this.max_length = _0x3ccf35;
          this.has_stree = _0x28c998 && _0x28c998.length;
        }
        function _0x4274b8(_0x3961c7, _0x12ee05) {
          this.dyn_tree = _0x3961c7;
          this.max_code = 0;
          this.stat_desc = _0x12ee05;
        }
        function _0x486044(_0xaa67aa) {
          return _0xaa67aa < 256 ? _0x5c28f1[_0xaa67aa] : _0x5c28f1[256 + (_0xaa67aa >>> 7)];
        }
        function _0xf4f94d(_0x582ec1, _0x181342) {
          _0x582ec1.pending_buf[_0x582ec1.pending++] = 255 & _0x181342;
          _0x582ec1.pending_buf[_0x582ec1.pending++] = _0x181342 >>> 8 & 255;
        }
        function _0x5c8d35(_0x17d8d0, _0x16b2f4, _0x3b7d69) {
          _0x17d8d0.bi_valid > _0x51822e - _0x3b7d69 ? (_0x17d8d0.bi_buf |= _0x16b2f4 << _0x17d8d0.bi_valid & 65535, _0xf4f94d(_0x17d8d0, _0x17d8d0.bi_buf), _0x17d8d0.bi_buf = _0x16b2f4 >> _0x51822e - _0x17d8d0.bi_valid, _0x17d8d0.bi_valid += _0x3b7d69 - _0x51822e) : (_0x17d8d0.bi_buf |= _0x16b2f4 << _0x17d8d0.bi_valid & 65535, _0x17d8d0.bi_valid += _0x3b7d69);
        }
        function _0x2af57d(_0x5b9a06, _0x5ae006, _0x312f50) {
          _0x5c8d35(_0x5b9a06, _0x312f50[2 * _0x5ae006], _0x312f50[2 * _0x5ae006 + 1]);
        }
        function _0x5de58c(_0x513a6b, _0x223d7b) {
          for (var _0x165958 = 0; _0x165958 |= 1 & _0x513a6b, _0x513a6b >>>= 1, _0x165958 <<= 1, 0 < --_0x223d7b;) {}
          return _0x165958 >>> 1;
        }
        function _0x5870ea(_0x58d694, _0x33ec49, _0x11935b) {
          var _0x7e2b59,
            _0x5a780a,
            _0x477349 = new Array(_0x5e31c6 + 1),
            _0x25e05f = 0;
          for (_0x7e2b59 = 1; _0x7e2b59 <= _0x5e31c6; _0x7e2b59++) {
            _0x477349[_0x7e2b59] = _0x25e05f = _0x25e05f + _0x11935b[_0x7e2b59 - 1] << 1;
          }
          for (_0x5a780a = 0; _0x5a780a <= _0x33ec49; _0x5a780a++) {
            var _0x44042d = _0x58d694[2 * _0x5a780a + 1];
            0 !== _0x44042d && (_0x58d694[2 * _0x5a780a] = _0x5de58c(_0x477349[_0x44042d]++, _0x44042d));
          }
        }
        function _0x4e9647(_0x462f4d) {
          var _0x32de04;
          for (_0x32de04 = 0; _0x32de04 < _0x27b811; _0x32de04++) {
            _0x462f4d.dyn_ltree[2 * _0x32de04] = 0;
          }
          for (_0x32de04 = 0; _0x32de04 < _0x6c046; _0x32de04++) {
            _0x462f4d.dyn_dtree[2 * _0x32de04] = 0;
          }
          for (_0x32de04 = 0; _0x32de04 < _0xa089a; _0x32de04++) {
            _0x462f4d.bl_tree[2 * _0x32de04] = 0;
          }
          _0x462f4d.dyn_ltree[2 * _0x35bcbf] = 1;
          _0x462f4d.opt_len = _0x462f4d.static_len = 0;
          _0x462f4d.last_lit = _0x462f4d.matches = 0;
        }
        function _0x43a76c(_0xb1f4ed) {
          8 < _0xb1f4ed.bi_valid ? _0xf4f94d(_0xb1f4ed, _0xb1f4ed.bi_buf) : 0 < _0xb1f4ed.bi_valid && (_0xb1f4ed.pending_buf[_0xb1f4ed.pending++] = _0xb1f4ed.bi_buf);
          _0xb1f4ed.bi_buf = 0;
          _0xb1f4ed.bi_valid = 0;
        }
        function _0x48a295(_0x3397da, _0x34004f, _0x25faaf, _0x43149f) {
          var _0x17daf7 = 2 * _0x34004f,
            _0x56b531 = 2 * _0x25faaf;
          return _0x3397da[_0x17daf7] < _0x3397da[_0x56b531] || _0x3397da[_0x17daf7] === _0x3397da[_0x56b531] && _0x43149f[_0x34004f] <= _0x43149f[_0x25faaf];
        }
        function _0x51ae9d(_0x44c02b, _0x2965e3, _0x2955f0) {
          for (var _0x29715a = _0x44c02b.heap[_0x2955f0], _0x489933 = _0x2955f0 << 1; _0x489933 <= _0x44c02b.heap_len && (_0x489933 < _0x44c02b.heap_len && _0x48a295(_0x2965e3, _0x44c02b.heap[_0x489933 + 1], _0x44c02b.heap[_0x489933], _0x44c02b.depth) && _0x489933++, !_0x48a295(_0x2965e3, _0x29715a, _0x44c02b.heap[_0x489933], _0x44c02b.depth));) {
            _0x44c02b.heap[_0x2955f0] = _0x44c02b.heap[_0x489933];
            _0x2955f0 = _0x489933;
            _0x489933 <<= 1;
          }
          _0x44c02b.heap[_0x2955f0] = _0x29715a;
        }
        function _0x41f4d7(_0x232218, _0x2866e4, _0x514729) {
          var _0x51445a,
            _0x4a112c,
            _0x46ac1f,
            _0x538360,
            _0x5cf11a = 0;
          if (0 !== _0x232218.last_lit) {
            for (; _0x51445a = _0x232218.pending_buf[_0x232218.d_buf + 2 * _0x5cf11a] << 8 | _0x232218.pending_buf[_0x232218.d_buf + 2 * _0x5cf11a + 1], _0x4a112c = _0x232218.pending_buf[_0x232218.l_buf + _0x5cf11a], _0x5cf11a++, 0 === _0x51445a ? _0x2af57d(_0x232218, _0x4a112c, _0x2866e4) : (_0x2af57d(_0x232218, (_0x46ac1f = _0x2239ff[_0x4a112c]) + _0x41eeaf + 1, _0x2866e4), 0 !== (_0x538360 = _0xa9909b[_0x46ac1f]) && _0x5c8d35(_0x232218, _0x4a112c -= _0x64eebd[_0x46ac1f], _0x538360), _0x2af57d(_0x232218, _0x46ac1f = _0x486044(--_0x51445a), _0x514729), 0 !== (_0x538360 = _0x344a12[_0x46ac1f]) && _0x5c8d35(_0x232218, _0x51445a -= _0x54b181[_0x46ac1f], _0x538360)), _0x5cf11a < _0x232218.last_lit;) {}
          }
          _0x2af57d(_0x232218, _0x35bcbf, _0x2866e4);
        }
        function _0x47f625(_0x56f90b, _0xe3cf02) {
          var _0x4732be,
            _0x2572ca,
            _0x29b6cc,
            _0x5961ad = _0xe3cf02.dyn_tree,
            _0x421eda = _0xe3cf02.stat_desc.static_tree,
            _0x170a82 = _0xe3cf02.stat_desc.has_stree,
            _0x3e5658 = _0xe3cf02.stat_desc.elems,
            _0x420225 = -1;
          for (_0x56f90b.heap_len = 0, _0x56f90b.heap_max = _0x464c01, _0x4732be = 0; _0x4732be < _0x3e5658; _0x4732be++) {
            0 !== _0x5961ad[2 * _0x4732be] ? (_0x56f90b.heap[++_0x56f90b.heap_len] = _0x420225 = _0x4732be, _0x56f90b.depth[_0x4732be] = 0) : _0x5961ad[2 * _0x4732be + 1] = 0;
          }
          for (; _0x56f90b.heap_len < 2;) {
            _0x5961ad[2 * (_0x29b6cc = _0x56f90b.heap[++_0x56f90b.heap_len] = _0x420225 < 2 ? ++_0x420225 : 0)] = 1;
            _0x56f90b.depth[_0x29b6cc] = 0;
            _0x56f90b.opt_len--;
            _0x170a82 && (_0x56f90b.static_len -= _0x421eda[2 * _0x29b6cc + 1]);
          }
          for (_0xe3cf02.max_code = _0x420225, _0x4732be = _0x56f90b.heap_len >> 1; 1 <= _0x4732be; _0x4732be--) {
            _0x51ae9d(_0x56f90b, _0x5961ad, _0x4732be);
          }
          for (_0x29b6cc = _0x3e5658; _0x4732be = _0x56f90b.heap[1], _0x56f90b.heap[1] = _0x56f90b.heap[_0x56f90b.heap_len--], _0x51ae9d(_0x56f90b, _0x5961ad, 1), _0x2572ca = _0x56f90b.heap[1], _0x56f90b.heap[--_0x56f90b.heap_max] = _0x4732be, _0x56f90b.heap[--_0x56f90b.heap_max] = _0x2572ca, _0x5961ad[2 * _0x29b6cc] = _0x5961ad[2 * _0x4732be] + _0x5961ad[2 * _0x2572ca], _0x56f90b.depth[_0x29b6cc] = (_0x56f90b.depth[_0x4732be] >= _0x56f90b.depth[_0x2572ca] ? _0x56f90b.depth[_0x4732be] : _0x56f90b.depth[_0x2572ca]) + 1, _0x5961ad[2 * _0x4732be + 1] = _0x5961ad[2 * _0x2572ca + 1] = _0x29b6cc, _0x56f90b.heap[1] = _0x29b6cc++, _0x51ae9d(_0x56f90b, _0x5961ad, 1), 2 <= _0x56f90b.heap_len;) {}
          _0x56f90b.heap[--_0x56f90b.heap_max] = _0x56f90b.heap[1];
          (function (_0x52bfe, _0x44f160) {
            var _0x138038,
              _0xeedf82,
              _0x1580b7,
              _0xa78277,
              _0x49648d,
              _0x83d853,
              _0xe45853 = _0x44f160.dyn_tree,
              _0x425a79 = _0x44f160.max_code,
              _0x27f0c4 = _0x44f160.stat_desc.static_tree,
              _0x1d5424 = _0x44f160.stat_desc.has_stree,
              _0x42dc2c = _0x44f160.stat_desc.extra_bits,
              _0x3427c6 = _0x44f160.stat_desc.extra_base,
              _0x4e38ee = _0x44f160.stat_desc.max_length,
              _0x33133f = 0;
            for (_0xa78277 = 0; _0xa78277 <= _0x5e31c6; _0xa78277++) {
              _0x52bfe.bl_count[_0xa78277] = 0;
            }
            for (_0xe45853[2 * _0x52bfe.heap[_0x52bfe.heap_max] + 1] = 0, _0x138038 = _0x52bfe.heap_max + 1; _0x138038 < _0x464c01; _0x138038++) {
              _0x4e38ee < (_0xa78277 = _0xe45853[2 * _0xe45853[2 * (_0xeedf82 = _0x52bfe.heap[_0x138038]) + 1] + 1] + 1) && (_0xa78277 = _0x4e38ee, _0x33133f++);
              _0xe45853[2 * _0xeedf82 + 1] = _0xa78277;
              _0x425a79 < _0xeedf82 || (_0x52bfe.bl_count[_0xa78277]++, _0x49648d = 0, _0x3427c6 <= _0xeedf82 && (_0x49648d = _0x42dc2c[_0xeedf82 - _0x3427c6]), _0x83d853 = _0xe45853[2 * _0xeedf82], _0x52bfe.opt_len += _0x83d853 * (_0xa78277 + _0x49648d), _0x1d5424 && (_0x52bfe.static_len += _0x83d853 * (_0x27f0c4[2 * _0xeedf82 + 1] + _0x49648d)));
            }
            if (0 !== _0x33133f) {
              do {
                for (_0xa78277 = _0x4e38ee - 1; 0 === _0x52bfe.bl_count[_0xa78277];) {
                  _0xa78277--;
                }
                _0x52bfe.bl_count[_0xa78277]--;
                _0x52bfe.bl_count[_0xa78277 + 1] += 2;
                _0x52bfe.bl_count[_0x4e38ee]--;
                _0x33133f -= 2;
              } while (0 < _0x33133f);
              for (_0xa78277 = _0x4e38ee; 0 !== _0xa78277; _0xa78277--) {
                for (_0xeedf82 = _0x52bfe.bl_count[_0xa78277]; 0 !== _0xeedf82;) {
                  _0x425a79 < (_0x1580b7 = _0x52bfe.heap[--_0x138038]) || (_0xe45853[2 * _0x1580b7 + 1] !== _0xa78277 && (_0x52bfe.opt_len += (_0xa78277 - _0xe45853[2 * _0x1580b7 + 1]) * _0xe45853[2 * _0x1580b7], _0xe45853[2 * _0x1580b7 + 1] = _0xa78277), _0xeedf82--);
                }
              }
            }
          })(_0x56f90b, _0xe3cf02);
          _0x5870ea(_0x5961ad, _0x420225, _0x56f90b.bl_count);
        }
        function _0xcde358(_0x530b14, _0x49c0da, _0x45896c) {
          var _0x500257,
            _0x2ffc40,
            _0x1e3703 = -1,
            _0x22969c = _0x49c0da[1],
            _0x4ac50d = 0,
            _0xe7e2e0 = 7,
            _0x1a0a71 = 4;
          for (0 === _0x22969c && (_0xe7e2e0 = 138, _0x1a0a71 = 3), _0x49c0da[2 * (_0x45896c + 1) + 1] = 65535, _0x500257 = 0; _0x500257 <= _0x45896c; _0x500257++) {
            _0x2ffc40 = _0x22969c;
            _0x22969c = _0x49c0da[2 * (_0x500257 + 1) + 1];
            ++_0x4ac50d < _0xe7e2e0 && _0x2ffc40 === _0x22969c || (_0x4ac50d < _0x1a0a71 ? _0x530b14.bl_tree[2 * _0x2ffc40] += _0x4ac50d : 0 !== _0x2ffc40 ? (_0x2ffc40 !== _0x1e3703 && _0x530b14.bl_tree[2 * _0x2ffc40]++, _0x530b14.bl_tree[2 * _0x4a1f84]++) : _0x4ac50d <= 10 ? _0x530b14.bl_tree[2 * _0x408f27]++ : _0x530b14.bl_tree[2 * _0x47a4ed]++, _0x1e3703 = _0x2ffc40, (_0x4ac50d = 0) === _0x22969c ? (_0xe7e2e0 = 138, _0x1a0a71 = 3) : _0x2ffc40 === _0x22969c ? (_0xe7e2e0 = 6, _0x1a0a71 = 3) : (_0xe7e2e0 = 7, _0x1a0a71 = 4));
          }
        }
        function _0x1f2ab8(_0x258aae, _0x432651, _0x28ad2d) {
          var _0x1d6e3a,
            _0x483965,
            _0x35d91a = -1,
            _0x11afe1 = _0x432651[1],
            _0xc6820f = 0,
            _0x3851cb = 7,
            _0x51521a = 4;
          for (0 === _0x11afe1 && (_0x3851cb = 138, _0x51521a = 3), _0x1d6e3a = 0; _0x1d6e3a <= _0x28ad2d; _0x1d6e3a++) {
            if (_0x483965 = _0x11afe1, _0x11afe1 = _0x432651[2 * (_0x1d6e3a + 1) + 1], !(++_0xc6820f < _0x3851cb && _0x483965 === _0x11afe1)) {
              if (_0xc6820f < _0x51521a) {
                for (; _0x2af57d(_0x258aae, _0x483965, _0x258aae.bl_tree), 0 != --_0xc6820f;) {}
              } else {
                0 !== _0x483965 ? (_0x483965 !== _0x35d91a && (_0x2af57d(_0x258aae, _0x483965, _0x258aae.bl_tree), _0xc6820f--), _0x2af57d(_0x258aae, _0x4a1f84, _0x258aae.bl_tree), _0x5c8d35(_0x258aae, _0xc6820f - 3, 2)) : _0xc6820f <= 10 ? (_0x2af57d(_0x258aae, _0x408f27, _0x258aae.bl_tree), _0x5c8d35(_0x258aae, _0xc6820f - 3, 3)) : (_0x2af57d(_0x258aae, _0x47a4ed, _0x258aae.bl_tree), _0x5c8d35(_0x258aae, _0xc6820f - 11, 7));
              }
              _0x35d91a = _0x483965;
              (_0xc6820f = 0) === _0x11afe1 ? (_0x3851cb = 138, _0x51521a = 3) : _0x483965 === _0x11afe1 ? (_0x3851cb = 6, _0x51521a = 3) : (_0x3851cb = 7, _0x51521a = 4);
            }
          }
        }
        _0x62c12(_0x54b181);
        var _0x59bc0c = !1;
        function _0x399560(_0x5582d2, _0x57e843, _0x183cd1, _0x2f6f1c) {
          var _0x2dbf38, _0x4c05ee, _0x593a5d, _0x4683d7;
          _0x5c8d35(_0x5582d2, (_0x240f60 << 1) + (_0x2f6f1c ? 1 : 0), 3);
          _0x4c05ee = _0x57e843;
          _0x593a5d = _0x183cd1;
          _0x4683d7 = !0;
          _0x43a76c(_0x2dbf38 = _0x5582d2);
          _0x4683d7 && (_0xf4f94d(_0x2dbf38, _0x593a5d), _0xf4f94d(_0x2dbf38, ~_0x593a5d));
          _0x3307a2.arraySet(_0x2dbf38.pending_buf, _0x2dbf38.window, _0x4c05ee, _0x593a5d, _0x2dbf38.pending);
          _0x2dbf38.pending += _0x593a5d;
        }
        _0x43ac1c._tr_init = function (_0x4db0dc) {
          _0x59bc0c || (function () {
            var _0x39985f,
              _0x2c0bf5,
              _0x2a060e,
              _0x2265a4,
              _0x3ab182,
              _0xf0812d = new Array(_0x5e31c6 + 1);
            for (_0x2265a4 = _0x2a060e = 0; _0x2265a4 < _0x72a1a - 1; _0x2265a4++) {
              for (_0x64eebd[_0x2265a4] = _0x2a060e, _0x39985f = 0; _0x39985f < 1 << _0xa9909b[_0x2265a4]; _0x39985f++) {
                _0x2239ff[_0x2a060e++] = _0x2265a4;
              }
            }
            for (_0x2239ff[_0x2a060e - 1] = _0x2265a4, _0x2265a4 = _0x3ab182 = 0; _0x2265a4 < 16; _0x2265a4++) {
              for (_0x54b181[_0x2265a4] = _0x3ab182, _0x39985f = 0; _0x39985f < 1 << _0x344a12[_0x2265a4]; _0x39985f++) {
                _0x5c28f1[_0x3ab182++] = _0x2265a4;
              }
            }
            for (_0x3ab182 >>= 7; _0x2265a4 < _0x6c046; _0x2265a4++) {
              for (_0x54b181[_0x2265a4] = _0x3ab182 << 7, _0x39985f = 0; _0x39985f < 1 << _0x344a12[_0x2265a4] - 7; _0x39985f++) {
                _0x5c28f1[256 + _0x3ab182++] = _0x2265a4;
              }
            }
            for (_0x2c0bf5 = 0; _0x2c0bf5 <= _0x5e31c6; _0x2c0bf5++) {
              _0xf0812d[_0x2c0bf5] = 0;
            }
            for (_0x39985f = 0; _0x39985f <= 143;) {
              _0xa9d639[2 * _0x39985f + 1] = 8;
              _0x39985f++;
              _0xf0812d[8]++;
            }
            for (; _0x39985f <= 255;) {
              _0xa9d639[2 * _0x39985f + 1] = 9;
              _0x39985f++;
              _0xf0812d[9]++;
            }
            for (; _0x39985f <= 279;) {
              _0xa9d639[2 * _0x39985f + 1] = 7;
              _0x39985f++;
              _0xf0812d[7]++;
            }
            for (; _0x39985f <= 287;) {
              _0xa9d639[2 * _0x39985f + 1] = 8;
              _0x39985f++;
              _0xf0812d[8]++;
            }
            for (_0x5870ea(_0xa9d639, _0x27b811 + 1, _0xf0812d), _0x39985f = 0; _0x39985f < _0x6c046; _0x39985f++) {
              _0x1c33f0[2 * _0x39985f + 1] = 5;
              _0x1c33f0[2 * _0x39985f] = _0x5de58c(_0x39985f, 5);
            }
            _0x3c1211 = new _0x4b12a3(_0xa9d639, _0xa9909b, _0x41eeaf + 1, _0x27b811, _0x5e31c6);
            _0x1cfbaa = new _0x4b12a3(_0x1c33f0, _0x344a12, 0, _0x6c046, _0x5e31c6);
            _0xfb421f = new _0x4b12a3(new Array(0), _0x5ac4cb, 0, _0xa089a, _0x4c2893);
          }(), _0x59bc0c = !0);
          _0x4db0dc.l_desc = new _0x4274b8(_0x4db0dc.dyn_ltree, _0x3c1211);
          _0x4db0dc.d_desc = new _0x4274b8(_0x4db0dc.dyn_dtree, _0x1cfbaa);
          _0x4db0dc.bl_desc = new _0x4274b8(_0x4db0dc.bl_tree, _0xfb421f);
          _0x4db0dc.bi_buf = 0;
          _0x4db0dc.bi_valid = 0;
          _0x4e9647(_0x4db0dc);
        };
        _0x43ac1c._tr_stored_block = _0x399560;
        _0x43ac1c._tr_flush_block = function (_0x26f49c, _0x2b0118, _0x58d4f6, _0x2581a0) {
          var _0x14adc8,
            _0x9c8557,
            _0x3e393d = 0;
          0 < _0x26f49c.level ? (2 === _0x26f49c.strm.data_type && (_0x26f49c.strm.data_type = function (_0x4b3c4f) {
            var _0x469a50,
              _0x4016da = 4093624447;
            for (_0x469a50 = 0; _0x469a50 <= 31; _0x469a50++, _0x4016da >>>= 1) {
              if (1 & _0x4016da && 0 !== _0x4b3c4f.dyn_ltree[2 * _0x469a50]) {
                return _0x19f6e4;
              }
            }
            if (0 !== _0x4b3c4f.dyn_ltree[18] || 0 !== _0x4b3c4f.dyn_ltree[20] || 0 !== _0x4b3c4f.dyn_ltree[26]) {
              return _0x4e0ad5;
            }
            for (_0x469a50 = 32; _0x469a50 < _0x41eeaf; _0x469a50++) {
              if (0 !== _0x4b3c4f.dyn_ltree[2 * _0x469a50]) {
                return _0x4e0ad5;
              }
            }
            return _0x19f6e4;
          }(_0x26f49c)), _0x47f625(_0x26f49c, _0x26f49c.l_desc), _0x47f625(_0x26f49c, _0x26f49c.d_desc), _0x3e393d = function (_0x36a10c) {
            var _0x167f19;
            for (_0xcde358(_0x36a10c, _0x36a10c.dyn_ltree, _0x36a10c.l_desc.max_code), _0xcde358(_0x36a10c, _0x36a10c.dyn_dtree, _0x36a10c.d_desc.max_code), _0x47f625(_0x36a10c, _0x36a10c.bl_desc), _0x167f19 = _0xa089a - 1; 3 <= _0x167f19 && 0 === _0x36a10c.bl_tree[2 * _0x33e8a5[_0x167f19] + 1]; _0x167f19--) {}
            _0x36a10c.opt_len += 3 * (_0x167f19 + 1) + 5 + 5 + 4;
            return _0x167f19;
          }(_0x26f49c), _0x14adc8 = _0x26f49c.opt_len + 3 + 7 >>> 3, (_0x9c8557 = _0x26f49c.static_len + 3 + 7 >>> 3) <= _0x14adc8 && (_0x14adc8 = _0x9c8557)) : _0x14adc8 = _0x9c8557 = _0x58d4f6 + 5;
          _0x58d4f6 + 4 <= _0x14adc8 && -1 !== _0x2b0118 ? _0x399560(_0x26f49c, _0x2b0118, _0x58d4f6, _0x2581a0) : 4 === _0x26f49c.strategy || _0x9c8557 === _0x14adc8 ? (_0x5c8d35(_0x26f49c, 2 + (_0x2581a0 ? 1 : 0), 3), _0x41f4d7(_0x26f49c, _0xa9d639, _0x1c33f0)) : (_0x5c8d35(_0x26f49c, 4 + (_0x2581a0 ? 1 : 0), 3), function (_0x17a506, _0x1ddb4e, _0x1db320, _0x207c2a) {
            var _0x225c1b;
            for (_0x5c8d35(_0x17a506, _0x1ddb4e - 257, 5), _0x5c8d35(_0x17a506, _0x1db320 - 1, 5), _0x5c8d35(_0x17a506, _0x207c2a - 4, 4), _0x225c1b = 0; _0x225c1b < _0x207c2a; _0x225c1b++) {
              _0x5c8d35(_0x17a506, _0x17a506.bl_tree[2 * _0x33e8a5[_0x225c1b] + 1], 3);
            }
            _0x1f2ab8(_0x17a506, _0x17a506.dyn_ltree, _0x1ddb4e - 1);
            _0x1f2ab8(_0x17a506, _0x17a506.dyn_dtree, _0x1db320 - 1);
          }(_0x26f49c, _0x26f49c.l_desc.max_code + 1, _0x26f49c.d_desc.max_code + 1, _0x3e393d + 1), _0x41f4d7(_0x26f49c, _0x26f49c.dyn_ltree, _0x26f49c.dyn_dtree));
          _0x4e9647(_0x26f49c);
          _0x2581a0 && _0x43a76c(_0x26f49c);
        };
        _0x43ac1c._tr_tally = function (_0x4138a8, _0x47a1c7, _0x3a3d6e) {
          _0x4138a8.pending_buf[_0x4138a8.d_buf + 2 * _0x4138a8.last_lit] = _0x47a1c7 >>> 8 & 255;
          _0x4138a8.pending_buf[_0x4138a8.d_buf + 2 * _0x4138a8.last_lit + 1] = 255 & _0x47a1c7;
          _0x4138a8.pending_buf[_0x4138a8.l_buf + _0x4138a8.last_lit] = 255 & _0x3a3d6e;
          _0x4138a8.last_lit++;
          0 === _0x47a1c7 ? _0x4138a8.dyn_ltree[2 * _0x3a3d6e]++ : (_0x4138a8.matches++, _0x47a1c7--, _0x4138a8.dyn_ltree[2 * (_0x2239ff[_0x3a3d6e] + _0x41eeaf + 1)]++, _0x4138a8.dyn_dtree[2 * _0x486044(_0x47a1c7)]++);
          return _0x4138a8.last_lit === _0x4138a8.lit_bufsize - 1;
        };
        _0x43ac1c._tr_align = function (_0x88a55a) {
          var _0x26d411;
          _0x5c8d35(_0x88a55a, 2, 3);
          _0x2af57d(_0x88a55a, _0x35bcbf, _0xa9d639);
          16 === (_0x26d411 = _0x88a55a).bi_valid ? (_0xf4f94d(_0x26d411, _0x26d411.bi_buf), _0x26d411.bi_buf = 0, _0x26d411.bi_valid = 0) : 8 <= _0x26d411.bi_valid && (_0x26d411.pending_buf[_0x26d411.pending++] = 255 & _0x26d411.bi_buf, _0x26d411.bi_buf >>= 8, _0x26d411.bi_valid -= 8);
        };
      }, {
        "../utils/common": 3
      }],
      15: [function (_0x2a414b, _0x4c8b8e, _0x2d744e) {
        'use strict';

        _0x4c8b8e.exports = function () {
          this.input = null;
          this.next_in = 0;
          this.avail_in = 0;
          this.total_in = 0;
          this.output = null;
          this.next_out = 0;
          this.avail_out = 0;
          this.total_out = 0;
          this.msg = "";
          this.state = null;
          this.data_type = 2;
          this.adler = 0;
        };
      }, {}],
      "/": [function (_0x51a879, _0x3e23d7, _0x4c5451) {
        'use strict';

        var _0x1e9d53 = {};
        (0, _0x51a879("./lib/utils/common").assign)(_0x1e9d53, _0x51a879("./lib/deflate"), _0x51a879("./lib/inflate"), _0x51a879("./lib/zlib/constants"));
        _0x3e23d7.exports = _0x1e9d53;
      }, {
        "./lib/deflate": 1,
        "./lib/inflate": 2,
        "./lib/utils/common": 3,
        "./lib/zlib/constants": 6
      }]
    }, {}, [])("/");
  }
  function _0x385208(_0x304814) {
    for (let _0x4590b1 in _0x304814) {
      let _0x1188fe = _0x304814[_0x4590b1];
      _0x304814[_0x1188fe] = _0x4590b1;
    }
  }
  var _0x3d7526 = {
    Replace: 1,
    Offline: 2
  };
  function _0x5d448f() {
    for (let _0x2327fc in _0x265970) {
      let _0x509408 = _0x265970[_0x2327fc];
      _0x265970[_0x509408] = _0x2327fc;
    }
  }
  var _0x265970 = {
    login: "1001",
    aliveCheck: "1002",
    timeCheck: "1003",
    clientError: "1004",
    topNotice: "1005",
    replaceOffline: "1006",
    syncPos: "1007",
    stopMove: "1008",
    userOffline: "1009",
    getCount: "1010"
  };
  _0x5d448f();
  class _0x4dd487 {
    static handleMsg(_0x1a9d48, _0x337344) {
      _0x1a9d48 != "1002";
      let _0x1e364e = _0x265970[_0x1a9d48];
      if (!_0x1e364e) {
        console.log("协议：" + _0x1a9d48 + "不存在");
        return;
      }
      let _0x2bd425 = _0x1e364e + "Msg",
        _0x319ada = this[_0x2bd425];
      if (!_0x319ada) {
        return;
      }
      _0x319ada.call(_0x4dd487, _0x337344);
    }
    static aliveCheckMsg(_0x443500) {
      _0x37410c.send("1002");
      this.timeCheckMsg(_0x443500);
    }
    static timeCheckMsg(_0x4fb2bb) {
      let _0x1875ec = Date.now();
      _0x5d2800.errTime = _0x4fb2bb - _0x1875ec;
    }
    static replaceOfflineMsg(_0x48f0a7) {
      _0x37410c.closeReason = _0x3d7526.Replace;
    }
  }
  let _0x321a64 = _0x578a73(),
    _0x4e9acb = _0x397a2c();
  class _0x37410c {
    static get ws() {
      return this._ws;
    }
    static get connected() {
      return this._ws ? this._ws.connected : false;
    }
    static connect(_0xc74bdd, _0x570b73) {
      _0x37410c.host = _0xc74bdd;
      _0x37410c.port = _0x570b73;
      this.createSocket();
      this._ws.connect(_0xc74bdd, _0x570b73);
    }
    static connectByUrl(_0x3c0d82) {
      _0x37410c.url = _0x3c0d82;
      this.createSocket();
      this._ws.connectByUrl(_0x3c0d82);
    }
    static createSocket() {
      this.destroy();
      this._ws = new Laya.Socket();
      this._ws.disableInput = true;
      this._ws.on(Laya.Event.OPEN, this, this.onOpen);
      this._ws.on(Laya.Event.ERROR, this, this.onError);
      this._ws.on(Laya.Event.CLOSE, this, this.onClose);
      this._ws.on(Laya.Event.MESSAGE, this, this.onMessage);
    }
    static destroy() {
      this._ws && (this._ws.offAll(), this._ws.cleanSocket(), this._ws = null);
    }
    static onOpen(_0x4b3744) {
      console.log("链接成功");
      _0xccd285.emit("SocketMgr", {
        type: "open"
      });
    }
    static onError(_0x28b49d) {
      console.log("链接失败");
      console.error("error", _0x28b49d);
    }
    static onClose(_0x65bdab) {
      console.log("断开链接");
      if (this.closeReason) {
        return;
      }
      _0xccd285.emit("SocketMgr", {
        type: "close"
      });
    }
    static onMessage(_0x87ef21) {
      let _0x465067 = _0x87ef21,
        _0x4c9f84 = _0x321a64.atob(_0x465067),
        _0x379a28 = _0x4e9acb.inflate(_0x4c9f84, {
          to: "string"
        }),
        _0x16fab7 = JSON.parse(_0x379a28);
      _0x4dd487.handleMsg(_0x16fab7.msgId, _0x16fab7.data);
      _0xccd285.emit(_0x16fab7.msgId, _0x16fab7.data);
    }
    static send(_0x325480, _0x36fbd5) {
      if (!this.connected) {
        return;
      }
      let _0x5d7171 = {
        msgId: _0x325480,
        data: _0x36fbd5
      };
      var _0x1f5473 = JSON.stringify(_0x5d7171);
      let _0x46166c = _0x4e9acb.deflate(_0x1f5473, {
          to: "string",
          level: 6
        }),
        _0x5462e0 = _0x321a64.btoa(_0x46166c);
      this._ws.send(_0x5462e0);
    }
    static get connected() {
      if (!this.ws) {
        return false;
      }
      return this.ws.connected;
    }
    static closeSocket(_0x4dcb1e) {
      this.closeReason = _0x4dcb1e;
      this._ws && this._ws.close();
    }
    static repeatConnect() {
      if (this.url != "") {
        this.connectByUrl(this.url);
      } else {
        if (this.host != "") {
          this.connect(this.host, this.port);
        }
      }
    }
  }
  _0x37410c._ws = null;
  _0x37410c.host = "";
  _0x37410c.port = 0;
  _0x37410c.url = "";
  _0x37410c.closeReason = 0;
  _0x37410c.repeatConEnable = false;
  _0x37410c.repeatId = 0;
  class _0xc96d09 {
    static playSound(_0x5271a9, _0xeb2721 = 1, _0x334518 = "mp3") {
      Laya.SoundManager.playSound(this.root + _0x5271a9 + "." + _0x334518, _0xeb2721);
    }
    static playMusic(_0x313f11, _0x532525 = 0, _0x7bcf33 = "mp3") {
      Laya.SoundManager.playMusic(this.root + _0x313f11 + "." + _0x7bcf33, _0x532525);
      this.musicOn = true;
    }
    static stopMusic(_0x4512b0, _0xb4a156 = "mp3") {
      Laya.SoundManager.stopMusic(this.root + _0x4512b0 + "." + _0xb4a156);
    }
    static getSoundSet() {
      this.soundOn = Laya.LocalStorage.getItem("soundOn") != "0";
      this.changeSound(this.soundOn ? "1" : "0");
    }
    static getMusicSet() {
      this.musicOn = Laya.LocalStorage.getItem("musicOn") != "0";
      this.changeMusic(this.musicOn ? "1" : "0");
    }
    static getVibrate() {
      this.vibrateOn = Laya.LocalStorage.getItem("vibrateOn") != "0";
      this.changeVibrate(this.vibrateOn ? "1" : "0");
    }
    static getLocalSet() {
      this.getMusicSet();
      this.getSoundSet();
      this.getVibrate();
    }
    static changeSound(_0x558455 = "1") {
      this.soundOn = _0x558455 == "1";
      Laya.LocalStorage.setItem("soundOn", _0x558455);
      Laya.SoundManager.soundMuted = !this.soundOn;
    }
    static changeMusic(_0x3499a4 = "1") {
      this.musicOn = _0x3499a4 == "1";
      Laya.LocalStorage.setItem("musicOn", _0x3499a4);
      Laya.SoundManager.musicMuted = !this.musicOn;
    }
    static changeVibrate(_0x250cc9 = "1") {
      this.vibrateOn = _0x250cc9 == "1";
      Laya.LocalStorage.setItem("vibrateOn", _0x250cc9);
    }
  }
  _0xc96d09.root = "comp/sound/";
  _0xc96d09.musicOn = true;
  _0xc96d09.soundOn = true;
  _0xc96d09.vibrateOn = false;
  _0xc96d09.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
  var _0x1c3c22 = Laya.View,
    _0x182318 = Laya.Scene,
    _0x166aca = Laya.ClassUtils.regClass;
  class _0x8e18d3 extends _0x182318 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("ChooseView");
    }
  }
  _0x166aca("ui.ChooseViewUI", _0x8e18d3);
  class _0x483993 extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("ExitPop");
    }
  }
  _0x166aca("ui.ExitPopUI", _0x483993);
  class _0x260307 extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("FailPop");
    }
  }
  _0x166aca("ui.FailPopUI", _0x260307);
  class _0x2e0387 extends _0x182318 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("GameView");
    }
  }
  _0x166aca("ui.GameViewUI", _0x2e0387);
  class _0x144323 extends _0x182318 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("HomeView");
    }
  }
  _0x166aca("ui.HomeViewUI", _0x144323);
  class _0x4f1fdd extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("InvitePop");
    }
  }
  _0x166aca("ui.InvitePopUI", _0x4f1fdd);
  class _0x23dd58 extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("InviteTipPop");
    }
  }
  _0x166aca("ui.InviteTipPopUI", _0x23dd58);
  class _0x3f0abc extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("JoinPop");
    }
  }
  _0x166aca("ui.JoinPopUI", _0x3f0abc);
  class _0x562e9d extends _0x182318 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("LoadView");
    }
  }
  _0x166aca("ui.LoadViewUI", _0x562e9d);
  class _0x4595a4 extends _0x182318 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("PosterView");
    }
  }
  _0x166aca("ui.PosterViewUI", _0x4595a4);
  class _0x1a73ac extends _0x182318 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("QuestView");
    }
  }
  _0x166aca("ui.QuestViewUI", _0x1a73ac);
  class _0x235631 extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("RankPop");
    }
  }
  _0x166aca("ui.RankPopUI", _0x235631);
  class _0x6f6f06 extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("RecordPop");
    }
  }
  _0x166aca("ui.RecordPopUI", _0x6f6f06);
  class _0xadacf4 extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("RefreshTipPop");
    }
  }
  _0x166aca("ui.RefreshTipPopUI", _0xadacf4);
  class _0x380795 extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("RulePop");
    }
  }
  _0x166aca("ui.RulePopUI", _0x380795);
  class _0x38aa71 extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("SetPop");
    }
  }
  _0x166aca("ui.SetPopUI", _0x38aa71);
  class _0x5a38c6 extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("ShareTipPop");
    }
  }
  _0x166aca("ui.ShareTipPopUI", _0x5a38c6);
  class _0x410451 extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("SingleTipPop");
    }
  }
  _0x166aca("ui.SingleTipPopUI", _0x410451);
  class _0x3c334e extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("SuccPop");
    }
  }
  _0x166aca("ui.SuccPopUI", _0x3c334e);
  class _0xcd3ce2 extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("TeamPop");
    }
  }
  _0x166aca("ui.TeamPopUI", _0xcd3ce2);
  class _0x339a3a extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("TeamTipPop");
    }
  }
  _0x166aca("ui.TeamTipPopUI", _0x339a3a);
  class _0x34f04f extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("TipPop");
    }
  }
  _0x166aca("ui.TipPopUI", _0x34f04f);
  class _0x3e39db extends _0x1c3c22 {
    constructor() {
      super();
    }
    createChildren() {
      super.createChildren();
      this.loadScene("WalletPop");
    }
  }
  _0x166aca("ui.WalletPopUI", _0x3e39db);
  class _0x2245a8 extends _0x483993 {
    constructor() {
      super();
    }
    onAwake() {}
    onOpen() {
      this.exitBtn.on(Laya.Event.CLICK, this, this.exitFun);
      this.backBtn.on(Laya.Event.CLICK, this, this.closePop);
    }
    onClose() {
      this.backBtn.off(Laya.Event.CLICK, this, this.closePop);
      this.exitBtn.off(Laya.Event.CLICK, this, this.exitFun);
    }
    closePop() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
    }
    exitFun() {
      _0xc96d09.playSound("click");
      _0xccd285.emit("sureBack");
      _0xccd285.closePopThis(this);
    }
  }
  class _0x358fa2 extends _0x260307 {
    constructor() {
      super();
    }
    onOpen() {
      _0xc96d09.playSound("fail");
      this.backBtn.on(Laya.Event.CLICK, this, this.closePop);
      this.restartBtn.on(Laya.Event.CLICK, this, this.restartFun);
    }
    onClose() {
      this.backBtn.off(Laya.Event.CLICK, this, this.closePop);
      this.restartBtn.off(Laya.Event.CLICK, this, this.restartFun);
    }
    closeFun() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
    }
    closePop() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
      _0xccd285.backView();
    }
    restartFun() {
      _0xc96d09.playSound("click");
      _0xccd285.emit("startGame", this.lo.data.lv);
      _0xccd285.closePopThis(this);
    }
  }
  class _0x3d7fd4 {
    static timeToHMS(_0x5d301a) {
      let _0x4f32af = Math.floor(_0x5d301a / 3600),
        _0x4fd7d9 = Math.floor(_0x5d301a % 3600 / 60),
        _0x5576a0 = Math.floor(_0x5d301a % 3600 % 60);
      return this.add0(_0x4f32af) + ":" + this.add0(_0x4fd7d9) + ":" + this.add0(_0x5576a0);
    }
    static timeToMS(_0x3d78f3) {
      let _0x3da607 = Math.floor(_0x3d78f3 / 60),
        _0x5df258 = Math.floor(_0x3d78f3 % 60);
      return this.add0(_0x3da607) + ":" + this.add0(_0x5df258);
    }
    static add0(_0x530b8c) {
      return _0x530b8c < 10 ? "0" + _0x530b8c : _0x530b8c;
    }
    static format(_0x337e7a) {
      let _0x463b4b = new Date(_0x337e7a),
        _0x1d12a5 = _0x463b4b.getFullYear(),
        _0x1796f4 = _0x463b4b.getMonth() + 1,
        _0x1f4500 = _0x463b4b.getDate(),
        _0x26f367 = _0x463b4b.getHours(),
        _0x19e4d4 = _0x463b4b.getMinutes(),
        _0x349414 = _0x463b4b.getSeconds();
      return _0x1d12a5 + "-" + this.add0(_0x1796f4) + "-" + this.add0(_0x1f4500) + " " + this.add0(_0x26f367) + ":" + this.add0(_0x19e4d4) + ":" + this.add0(_0x349414);
    }
    static RandArr(_0x1bd33b) {
      let _0x42d6f8 = (_0x1e2093, _0x235a8c) => Math.random() > 0.5 ? -1 : 1;
      return _0x1bd33b.sort(_0x42d6f8);
    }
    static shareFun(_0x41f376) {
      _0x45ad64.share({
        url: window.location.href,
        type: _0x41f376
      }, _0x1d0617 => {
        _0x1d0617.code == 200 && (wx.config({
          debug: false,
          appId: _0x1d0617.data.appId,
          timestamp: _0x1d0617.data.timestamp,
          nonceStr: _0x1d0617.data.nonceStr,
          signature: _0x1d0617.data.signature,
          jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage"]
        }), wx.ready(() => {
          wx.onMenuShareAppMessage({
            title: "急支豹一爆，闯关领红包",
            desc: _0x41f376 == 2 ? "速来！组队刷分就差你了！！" : "每周4000元等你来赢!!",
            link: _0x1d0617.data.url,
            imgUrl: "https://jizhigame.oss-cn-beijing.aliyuncs.com/comp/share.jpg",
            success: () => {
              console.log("分享成功");
            },
            cancel: () => {
              console.log("取消了分享");
            }
          });
          wx.onMenuShareTimeline({
            title: "急支豹一爆，闯关领红包",
            link: _0x1d0617.data.url,
            imgUrl: "https://jizhigame.oss-cn-beijing.aliyuncs.com/comp/share.jpg",
            success: () => {
              console.log("分享成功");
            },
            cancel: () => {
              console.log("取消了分享");
            }
          });
        }));
      });
    }
  }
  class _0x144e7a extends _0x4595a4 {
    constructor() {
      super();
      this.poster = document.getElementById("poster");
      this._list.renderHandler = new Laya.Handler(this, this.onRender);
      this._list2.renderHandler = new Laya.Handler(this, this.onRender2);
    }
    onOpen() {
      _0x5d2800.postIndex = _0x5d2800.postIndex + 1 > 5 ? 1 : _0x5d2800.postIndex + 1;
      this._list2.on(Laya.Event.MOUSE_DOWN, this, this.stopScroll);
      this._list2.on(Laya.Event.MOUSE_MOVE, this, this.stopScroll);
      this.bg6.vScrollBar.value = 0;
      for (let _0x1a7856 = 1; _0x1a7856 <= 6; _0x1a7856++) {
        this["bg" + _0x1a7856].visible = false;
      }
      this["bg" + _0x5d2800.postIndex].visible = true;
      this.date.text = this.getMonday() + "─────" + this.getSundayOfThisWeek();
      this.strongBox.visible = false;
      this.getData();
    }
    stopScroll() {
      this.bg6.vScrollBar.stopScroll();
    }
    getMonday() {
      let _0x4a3f04 = new Date(),
        _0x5d2820 = _0x4a3f04.getDay() || 7,
        _0x2084b6 = _0x5d2820 - 1,
        _0x1efa30 = new Date(_0x4a3f04);
      _0x1efa30.setDate(_0x4a3f04.getDate() - _0x2084b6);
      let _0x4dd640 = _0x1efa30.getFullYear(),
        _0x32ecac = String(_0x1efa30.getMonth() + 1).padStart(2, "0"),
        _0x4b1e73 = String(_0x1efa30.getDate()).padStart(2, "0");
      return _0x4dd640 + "." + _0x32ecac + "." + _0x4b1e73;
    }
    getSundayOfThisWeek() {
      let _0xcbc61e = new Date(),
        _0x51e838 = _0xcbc61e.getDay(),
        _0x3389bc = 6 - _0x51e838,
        _0x54e287 = new Date(_0xcbc61e);
      _0x54e287.setDate(_0xcbc61e.getDate() + _0x3389bc);
      let _0x50e8a2 = _0x54e287.getFullYear(),
        _0x575a70 = String(_0x54e287.getMonth() + 1).padStart(2, "0"),
        _0x37761f = String(_0x54e287.getDate()).padStart(2, "0");
      return _0x50e8a2 + "." + _0x575a70 + "." + _0x37761f;
    }
    getData() {
      this._list.array = [];
      this._list2.array = [];
      _0x45ad64.lastWeek({}, _0x172feb => {
        _0x172feb.code == 200 && (this.strongBox.visible = _0x172feb.data.maxScore.m_id, this.nickName.text = _0x172feb.data.maxScore.nickname, this.tx.skin = _0x172feb.data.maxScore.headimgurl, this.score.text = _0x172feb.data.maxScore.score, this._list.array = _0x172feb.data.invite, this._list2.array = _0x172feb.data.scoreRank);
      });
    }
    onRender(_0x33356c, _0x197e7d) {
      let _0x51b4dc = _0x33356c.dataSource,
        _0x4c2dc1 = _0x33356c.getChildByName("rank"),
        _0x566c12 = _0x33356c.getChildByName("tx"),
        _0x2e1b53 = _0x33356c.getChildByName("name"),
        _0xdce6ef = _0x33356c.getChildByName("score");
      _0x4c2dc1.text = _0x197e7d + 1;
      _0x566c12.skin = _0x51b4dc.headimgurl;
      _0x2e1b53.text = _0x51b4dc.nickname;
      _0xdce6ef.text = _0x51b4dc.invite_num;
    }
    onRender2(_0x23f479, _0x5d3192) {
      let _0xfa03bf = _0x23f479.dataSource,
        _0x2ed3cb = _0x23f479.getChildByName("rank"),
        _0x4651fd = _0x23f479.getChildByName("tx"),
        _0x4934d6 = _0x23f479.getChildByName("name"),
        _0x431613 = _0x23f479.getChildByName("score");
      _0x2ed3cb.text = _0x5d3192 + 1;
      _0x4651fd.skin = _0xfa03bf.headimgurl;
      _0x4934d6.text = _0xfa03bf.nickname;
      _0x431613.text = _0xfa03bf.score;
    }
  }
  class _0x194d33 extends _0x3e39db {
    constructor() {
      super();
    }
    onOpen() {
      this.mouseEnabled = true;
      this.closeBtn.on(Laya.Event.CLICK, this, this.closeFun);
      this.closeBtn2.on(Laya.Event.CLICK, this, this.closeFun2);
      this.money.text = parseFloat(this.lo.data.money);
    }
    onClose() {
      this.closeBtn.off(Laya.Event.CLICK, this, this.closeFun);
      this.closeBtn2.off(Laya.Event.CLICK, this, this.closeFun2);
    }
    closeFun2() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
    }
    closeFun() {
      _0xc96d09.playSound("click");
      this.mouseEnabled = false;
      let _0x4947e4 = {};
      if (this.lo.data.id) {
        _0x4947e4 = {
          id: this.lo.data.id
        };
      }
      _0x45ad64.doTransfer(_0x4947e4, _0x140031 => {
        if (_0x140031.code == 200) {
          let _0x200fae = _0x140031.data.id;
          _0x45ad64.share({
            url: window.location.href
          }, _0xaf30a9 => {
            wx.config({
              debug: false,
              appId: _0xaf30a9.data.appId,
              timestamp: _0xaf30a9.data.timestamp,
              nonceStr: _0xaf30a9.data.nonceStr,
              signature: _0xaf30a9.data.signature,
              jsApiList: ["requestMerchantTransfer"]
            });
            wx.ready(() => {
              wx.checkJsApi({
                jsApiList: ["requestMerchantTransfer"],
                success: _0x582d76 => {
                  this.mouseEnabled = true;
                  _0x582d76.checkResult.requestMerchantTransfer ? WeixinJSBridge.invoke("requestMerchantTransfer", {
                    mchId: _0x140031.data.mchId,
                    appId: _0x140031.data.appId,
                    package: _0x140031.data.package
                  }, _0x7b1a68 => {
                    if (_0x7b1a68.err_msg === "requestMerchantTransfer:ok") {
                      for (let _0x2589b7 = 0; _0x2589b7 < _0x5d2800.User.is_tx.length; _0x2589b7++) {
                        if (_0x5d2800.User.is_tx[_0x2589b7].id == this.lo.data.id) {
                          _0x5d2800.User.is_tx.splice(_0x2589b7, 1);
                          break;
                        }
                      }
                      _0xccd285.closePopThis(this);
                    }
                    _0x7b1a68.err_msg === "requestMerchantTransfer:cancel" && _0x45ad64.cannel({
                      id: _0x200fae
                    }, _0x320eb1 => {});
                  }) : (this.mouseEnabled = true, alert("你的微信版本过低，请更新至最新版本。"));
                },
                fail: _0x12cf03 => {
                  this.mouseEnabled = true;
                  console.log(_0x12cf03, "失败");
                }
              });
            });
          });
        } else {
          this.mouseEnabled = true;
          _0xccd285.showTip(_0x140031.msg);
        }
      });
    }
  }
  class _0x54058d extends _0x1a73ac {
    constructor() {
      super();
    }
    onOpen() {
      this.click = false;
      this.mouseEnabled = false;
      this.optionBox.alpha = 0;
      this.closeBtn.on(Laya.Event.CLICK, this, this.closeFun);
      this.questData = _0x5d2800.Quest[Math.floor(Math.random() * _0x5d2800.Quest.length)];
      this.title.text = this.questData.title;
      for (let _0x4985e9 = 0; _0x4985e9 < 4; _0x4985e9++) {
        this.optionBox.getChildAt(_0x4985e9).getChildByName("txt").text = this.questData.option[_0x4985e9];
        this.optionBox.getChildAt(_0x4985e9).getChildByName("icon").visible = false;
        this.optionBox.getChildAt(_0x4985e9).on(Laya.Event.CLICK, this, this.chooseOption, [_0x4985e9]);
        this.optionBox.getChildAt(_0x4985e9).getChildByName("txt").color = "#AD6800";
        this.optionBox.getChildAt(_0x4985e9).visible = _0x4985e9 < this.questData.option.length;
      }
      Laya.Tween.to(this.optionBox, {
        alpha: 1
      }, 700, null, Laya.Handler.create(this, () => {
        this.mouseEnabled = true;
      }));
    }
    onClose() {
      Laya.Tween.clearAll(this.optionBox);
      Laya.timer.clearAll(this);
      if (this.click) {
        _0xccd285.emit("startCountDown", "answer");
      }
      this.closeBtn.off(Laya.Event.CLICK, this, this.closeFun);
    }
    closeFun() {
      this.click = true;
      _0xc96d09.playSound("click");
      _0xccd285.closeView(_0x54058d);
    }
    chooseOption(_0x35e348) {
      this.click = true;
      _0xc96d09.playSound("click");
      for (let _0x332e67 = 0; _0x332e67 < this.questData.option.length; _0x332e67++) {
        this.optionBox.getChildAt(_0x332e67).off(Laya.Event.CLICK, this, this.chooseOption);
      }
      _0x35e348 == this.questData.right && _0xccd285.emit("answerRight");
      this.optionBox.getChildAt(_0x35e348).getChildByName("icon").visible = true;
      this.optionBox.getChildAt(_0x35e348).getChildByName("icon").skin = "comp/" + (_0x35e348 == this.questData.right ? "right" : "error") + ".png";
      this.optionBox.getChildAt(_0x35e348).getChildByName("txt").color = _0x35e348 == this.questData.right ? "#009A1A" : "#BF000A";
      _0x35e348 == this.questData.right ? Laya.timer.once(500, this, () => {
        _0x45ad64.red({
          is_zq: 1
        }, _0x190838 => {
          if (_0x190838.code == 200) {
            if (_0x190838.data.tx || _0x190838.data.p) {
              if (_0x190838.data.tx) {
                let _0x4bdb6d = {
                  id: 0,
                  money: _0x190838.data.m
                };
                _0x5d2800.User.is_tx.push(_0x4bdb6d);
                _0x5d2800.User.daily_tx = 1;
                _0xccd285.openPop({
                  class: _0x194d33,
                  data: _0x4bdb6d
                });
              }
              if (_0x190838.data.p) {
                if (_0x190838.data.p == 1) {
                  _0x5d2800.User.tishi_prop += 1;
                }
                if (_0x190838.data.p == 2) {
                  _0x5d2800.User.luan_prop += 1;
                }
                _0xccd285.emit("updateProp");
                _0xccd285.showTip("恭喜获得" + (_0x190838.data.p == 1 ? "提示" : "打乱") + "道具");
                this.closeNowPage();
              }
            } else {
              !_0x5d2800.showPoster ? (_0xccd285.openView({
                class: _0x144e7a
              }), _0x5d2800.showPoster = true, this.closePage()) : Math.random < 0.4 ? (_0xccd285.openView({
                class: _0x144e7a
              }), _0x5d2800.showPoster = true, this.closePage()) : this.closeNowPage();
            }
          }
        });
      }) : this.closeNowPage();
    }
    closePage() {
      Laya.timer.once(1500, this, () => {
        _0xccd285.closeView(_0x54058d);
        _0xccd285.closeView(_0x144e7a);
      });
    }
    closeNowPage() {
      Laya.timer.once(1000, this, () => {
        _0xccd285.closeView(_0x54058d);
      });
    }
  }
  class _0x5bd331 extends _0xadacf4 {
    constructor() {
      super();
    }
    onOpen() {
      this.sureBtn.on(Laya.Event.CLICK, this, this.closeFun, [1]);
      this.closeBtn.on(Laya.Event.CLICK, this, this.closeFun, [0]);
    }
    onClose() {
      this.sureBtn.off(Laya.Event.CLICK, this, this.closeFun);
      this.closeBtn.off(Laya.Event.CLICK, this, this.closeFun);
    }
    closeFun(_0x44c86b) {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
      _0xccd285.emit("isRefresh", _0x44c86b);
    }
  }
  class _0x48cbdd extends _0x6f6f06 {
    constructor() {
      super();
      this._list.renderHandler = new Laya.Handler(this, this.onRender);
    }
    onOpen() {
      this.list = [];
      this._list.array = this.list;
      this.closeBtn.on(Laya.Event.CLICK, this, this.closeFun);
      this.getList();
    }
    onClose() {
      this.closeBtn.off(Laya.Event.CLICK, this, this.closeFun);
    }
    getList() {
      _0x45ad64.transferLog({}, _0x97ce39 => {
        _0x97ce39.code == 200 ? (this.list = _0x97ce39.data, this._list.array = this.list) : _0xccd285.showTip(_0x97ce39.msg);
      });
    }
    closeFun() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
    }
    onRender(_0x2cc626) {
      let _0xbb3673 = _0x2cc626.dataSource,
        _0x546da6 = _0x2cc626.getChildByName("txt"),
        _0x4581a5 = _0x2cc626.getChildByName("time"),
        _0x35c880 = _0x2cc626.getChildByName("statusTxt");
      _0x546da6.text = "" + _0xbb3673.str + parseFloat(_0xbb3673.money);
      _0x35c880.text = _0xbb3673.status == 2 ? "未提现" : _0xbb3673.status == 3 ? "已提现" : _0xbb3673.status == 5 ? "发放中" : "";
      _0x4581a5.text = _0xbb3673.update_time || _0xbb3673.create_time;
    }
  }
  class _0x5ca88d extends _0x38aa71 {
    constructor() {
      super();
      this._list.renderHandler = new Laya.Handler(this, this.onRender);
      this._list.scrollRect = new Laya.Rectangle(0, 0, this._list.width, 0);
    }
    onAwake() {
      if (Laya.stage.height < 1334) {
        let _0x5e4d9e = Laya.stage.height / 1334;
        this.mainBox.scale(_0x5e4d9e, _0x5e4d9e);
      }
    }
    onOpen() {
      this.canClick = true;
      this.list = [{
        txt: "古典",
        id: 1
      }, {
        txt: "轻快",
        id: 2
      }, {
        txt: "激昂",
        id: 3
      }];
      this._list.array = this.list;
      this.loadTab();
      this.closeBtn.on(Laya.Event.CLICK, this, this.closePop);
      this.musicBtn.on(Laya.Event.CLICK, this, this.setMusicFun);
      this.soundBtn.on(Laya.Event.CLICK, this, this.setSoundFun);
      this.vibrateBtn.on(Laya.Event.CLICK, this, this.setVibrateFun);
      this.recordBtn.on(Laya.Event.CLICK, this, this.openRecord);
      this.moreBtn.on(Laya.Event.CLICK, this, this.showMusic);
    }
    onClose() {
      this.closeBtn.off(Laya.Event.CLICK, this, this.closePop);
      this.musicBtn.off(Laya.Event.CLICK, this, this.setMusicFun);
      this.soundBtn.off(Laya.Event.CLICK, this, this.setSoundFun);
      this.vibrateBtn.off(Laya.Event.CLICK, this, this.setVibrateFun);
      this.recordBtn.off(Laya.Event.CLICK, this, this.openRecord);
      this.moreBtn.off(Laya.Event.CLICK, this, this.showMusic);
    }
    showMusic() {
      if (!this.canClick) {
        return;
      }
      this.canClick = false;
      _0xc96d09.playSound("click");
      let _0x202ccf = this.moreBtn.getChildAt(0).rotation,
        _0x496f65 = _0x202ccf == 0 ? this._list.height : 0;
      _0x202ccf = 180 - _0x202ccf;
      Laya.Tween.to(this.moreBtn.getChildAt(0), {
        rotation: _0x202ccf
      }, 300, null, Laya.Handler.create(this, () => {
        this.canClick = true;
      }));
      Laya.Tween.to(this._list.scrollRect, {
        height: _0x496f65
      }, 300);
    }
    onRender(_0x20220f) {
      let _0x42d6a6 = _0x20220f.dataSource,
        _0xdc58fc = _0x20220f.getChildByName("txt");
      _0xdc58fc.text = _0x42d6a6.txt;
      _0x20220f.on(Laya.Event.CLICK, this, this.chooseMusic, [_0x42d6a6]);
    }
    chooseMusic(_0x3d1519) {
      _0xc96d09.playSound("click");
      _0xc96d09.musicOn && _0xc96d09.playMusic("bgm" + _0x3d1519.id);
      let _0x5f305e = _0x3d1519.id;
      Laya.LocalStorage.setItem("bgm", _0x5f305e);
      this.txt.text = _0x3d1519.txt;
      this.showMusic();
    }
    closePop() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
    }
    openRecord() {
      _0xc96d09.playSound("click");
      _0xccd285.openPop({
        class: _0x48cbdd
      });
    }
    loadTab() {
      let _0x3b0ced = parseInt(Laya.LocalStorage.getItem("bgm")) || 1;
      this.txt.text = this.list[_0x3b0ced - 1].txt;
      this.musicBtn.getChildAt(0).x = _0xc96d09.musicOn ? 72 : 0;
      this.musicBtn.skin = "comp/" + (_0xc96d09.musicOn ? "on" : "off") + ".png";
      this.soundBtn.getChildAt(0).x = _0xc96d09.soundOn ? 72 : 0;
      this.soundBtn.skin = "comp/" + (_0xc96d09.soundOn ? "on" : "off") + ".png";
      this.vibrateBtn.getChildAt(0).x = _0xc96d09.vibrateOn ? 72 : 0;
      this.vibrateBtn.skin = "comp/" + (_0xc96d09.vibrateOn ? "on" : "off") + ".png";
    }
    setMusicFun() {
      _0xc96d09.playSound("click");
      _0xc96d09.changeMusic(1 - _0xc96d09.musicOn + "");
      if (_0xc96d09.musicOn) {
        let _0x35f400 = parseInt(Laya.LocalStorage.getItem("bgm")) || 1;
        _0xc96d09.playMusic("bgm" + _0x35f400);
      } else {
        let _0x137417 = parseInt(Laya.LocalStorage.getItem("bgm")) || 1;
        _0xc96d09.stopMusic("bgm" + _0x137417);
      }
      this.loadTab();
    }
    setSoundFun() {
      _0xc96d09.playSound("click");
      _0xc96d09.changeSound(1 - _0xc96d09.soundOn + "");
      this.loadTab();
    }
    setVibrateFun() {
      _0xc96d09.playSound("click");
      _0xc96d09.changeVibrate(1 - _0xc96d09.vibrateOn + "");
      this.loadTab();
    }
  }
  class _0x1c8fe5 extends _0x3c334e {
    constructor() {
      super();
    }
    onOpen() {
      for (let _0x27439d = 0; _0x27439d < 3; _0x27439d++) {
        this.starBox.getChildAt(_0x27439d).visible = false;
      }
      _0xc96d09.playSound("succ");
      this.backBtn.on(Laya.Event.CLICK, this, this.closePop);
      this.nextBtn.on(Laya.Event.CLICK, this, this.nextFun);
      this.nextBtn.visible = this.lo.data.lv != 100;
      this.backBtn.x = this.lo.data.lv != 100 ? 64 : 203;
      this.lo.data.lv == _0x5d2800.User.level && (_0x5d2800.User.level = Math.min(100, _0x5d2800.User.level + 1));
      this.useTime.text = this.lo.data.time + "秒";
      this.saveGame();
    }
    onClose() {
      this.backBtn.off(Laya.Event.CLICK, this, this.closePop);
      this.nextBtn.off(Laya.Event.CLICK, this, this.nextFun);
    }
    closePop() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
      _0xccd285.backView();
    }
    nextFun() {
      _0xc96d09.playSound("click");
      _0xccd285.emit("startGame", Math.min(100, this.lo.data.lv + 1));
      _0xccd285.closePopThis(this);
    }
    loadStar(_0x37b4e0) {
      for (let _0x4feacd = 0; _0x4feacd < 3; _0x4feacd++) {
        this.starBox.getChildAt(_0x4feacd).visible = _0x4feacd < _0x37b4e0;
      }
    }
    saveGame() {
      _0x45ad64.gameOver({
        level: this.lo.data.lv,
        use_time: this.lo.data.time,
        zq_num: this.lo.data.rightCount,
        t_num: this.lo.data.count
      }, _0xde19d => {
        _0xde19d.code == 200 ? (_0x5d2800.lvData[this.lo.data.lv - 1].star = _0xde19d.data.star, _0x5d2800.lvData[this.lo.data.lv - 1].lock = false, this.loadStar(_0xde19d.data.star)) : _0xccd285.showTip(_0xde19d.msg);
      });
    }
  }
  class _0x177791 extends _0x2e0387 {
    constructor() {
      super();
      this.w = 74;
      this.h = 77;
      this.hand = new Laya.Image("comp/hand.png");
      this.hand.anchorX = this.hand.anchorY = 1;
      this.addChild(this.hand);
      this.timeLine = new Laya.TimeLine();
      this.timeLine.to(this.hand, {
        rotation: 50
      }, 500, null, 0).to(this.hand, {
        rotation: 0
      }, 500, null, 0);
      this.hBox = new Laya.Box();
      this.hBox.bgColor = "#fff";
      this.hBox.alpha = 0.3;
      this.addChild(this.hBox);
      this.vBox = new Laya.Box();
      this.vBox.bgColor = "#fff";
      this.vBox.alpha = 0.3;
      this.addChild(this.vBox);
    }
    onOpen() {
      this.inidData();
      this.tipBtn.on(Laya.Event.CLICK, this, this.tipFun);
      this.refreshBtn.on(Laya.Event.CLICK, this, this.refreshFun);
      this.setBtn.on(Laya.Event.CLICK, this, this.setFun);
      this.on(Laya.Event.MOUSE_DOWN, this, this.iconDown);
      this.backBtn.on(Laya.Event.CLICK, this, this.backFun);
      _0xccd285.on("startGame", this, this.startGame);
      _0xccd285.on("isRefresh", this, this.isRefreshFun);
      _0xccd285.on("sureBack", this, this.sureBack);
      _0xccd285.on("startCountDown", this, this.startCountDown);
      _0xccd285.on("answerRight", this, this.rightFun);
      _0xccd285.on("updateProp", this, this.loadBtn);
    }
    onClose() {
      Laya.timer.clear(this, this.countDown);
      this.tipBtn.off(Laya.Event.CLICK, this, this.tipFun);
      this.refreshBtn.off(Laya.Event.CLICK, this, this.refreshFun);
      this.setBtn.off(Laya.Event.CLICK, this, this.setFun);
      this.off(Laya.Event.MOUSE_DOWN, this, this.iconDown);
      this.backBtn.off(Laya.Event.CLICK, this, this.backFun);
      _0xccd285.off("startGame", this, this.startGame);
      _0xccd285.off("isRefresh", this, this.isRefreshFun);
      _0xccd285.off("sureBack", this, this.sureBack);
      _0xccd285.off("startCountDown", this, this.startCountDown);
      _0xccd285.off("answerRight", this, this.rightFun);
      _0xccd285.off("updateProp", this, this.loadBtn);
    }
    sureBack() {
      _0xccd285.backView();
    }
    backFun() {
      _0xc96d09.playSound("click");
      _0xccd285.openPop({
        class: _0x2245a8
      });
    }
    onAwake() {
      this.stepArr = ["点击相邻的相同消除物可以进行消除", "点击可以连接一条直线的相同消除物，可以进行消除", "拖动消除物到进行消除", "拖动消除物到进行消除", "在找不到消除物时，试试提示和打乱吧"];
    }
    startGame(_0x206cf1) {
      this.lo.data.lv = _0x206cf1;
      this.inidData();
    }
    setFun() {
      _0xc96d09.playSound("click");
      _0xccd285.openPop({
        class: _0x5ca88d
      });
    }
    countDown() {
      this.time++;
      this.loadTime();
    }
    loadTime() {
      this.timeTxt.text = this.time + "s";
    }
    inidData() {
      this.pro.visible = true;
      this.zz.visible = _0x5d2800.guide;
      this.w = this.lo.data.lv <= 5 ? 120 : this.lo.data.lv <= 50 ? 90 : 74;
      this.h = this.lo.data.lv <= 5 ? 124 : this.lo.data.lv <= 50 ? 93 : 77;
      this.answerCount = 0;
      this.rightCount = 0;
      this.time = 0;
      this.loadTime();
      Laya.timer.loop(1000, this, this.countDown);
      this.isRefrush = false;
      Laya.MouseManager.multiTouchEnabled = false;
      this.useTip = 0;
      this.useRefresh = 0;
      this.lv = this.lo.data.lv;
      this.sumAnswer = Math.floor((this.lv - 1) / 20) + 3;
      let _0x1722e8 = this.getLevelData();
      this.col = _0x1722e8.col;
      this.row = _0x1722e8.row;
      this.sumCount = _0x1722e8.sum;
      this.over = false;
      this.help = false;
      this.isChoose = false;
      this.canClick = false;
      this.hand.visible = false;
      this.hBox.visible = this.vBox.visible = false;
      let _0x427af4 = _0x3d7fd4.RandArr(this.addIconType([]));
      this.createDataOrigin(_0x427af4, 0);
      this.openTween();
      this.adjustWH();
      this.loadBtn();
    }
    loadBtn() {
      let _0x3d982f = _0x5d2800.User.tishi_prop + (this.useTip == 1 ? 0 : 1),
        _0x140692 = _0x5d2800.User.luan_prop + (this.useRefresh == 1 ? 0 : 1);
      this.tipBtn.disabled = _0x3d982f == 0;
      this.refreshBtn.disabled = _0x140692 == 0;
      this.tipBtn.getChildByName("num").text = _0x3d982f;
      this.refreshBtn.getChildByName("num").text = _0x140692;
    }
    loadPro() {
      let _0x5e84a9 = (this.row * this.col - this.hasCount) / (this.row * this.col);
      this.pro.getChildAt(0).width = _0x5e84a9 * 340;
      this.pro.getChildAt(1).text = Math.floor(_0x5e84a9 * 100) + "%";
    }
    getLevelData() {
      let _0x21f38b = {
        row: 0,
        col: 0,
        sum: 0
      };
      1 <= this.lv && this.lv <= 5 && (_0x21f38b.row = _0x21f38b.col = 6, _0x21f38b.sum = 9);
      6 <= this.lv && this.lv <= 10 && (_0x21f38b.row = 6, _0x21f38b.col = 8, _0x21f38b.sum = 12);
      11 <= this.lv && this.lv <= 50 && (_0x21f38b.row = 8, _0x21f38b.col = 8, _0x21f38b.sum = 16);
      51 <= this.lv && this.lv <= 70 && (_0x21f38b.row = 8, _0x21f38b.col = 10, _0x21f38b.sum = 20);
      71 <= this.lv && this.lv <= 100 && (_0x21f38b.row = 12, _0x21f38b.col = 10, _0x21f38b.sum = 30);
      return _0x21f38b;
    }
    isRefreshFun(_0x2fba4c) {
      !_0x2fba4c ? (Laya.timer.clear(this, this.countDown), _0xccd285.openPop({
        class: _0x358fa2,
        data: {
          lv: this.lv
        }
      })) : (this.canClick = true, this.over = false, this.refreshFun());
    }
    createDataOrigin(_0x58889f, _0x2927f9) {
      this.dataArr = [];
      let _0x41ed62 = 0;
      for (let _0x35869c = 0; _0x35869c < this.row; _0x35869c++) {
        let _0x300bc2 = [];
        for (let _0xc7029b = 0; _0xc7029b < this.col; _0xc7029b++) {
          !_0x5d2800.guide ? _0x300bc2.push(_0x58889f[_0x41ed62]) : _0x300bc2.push(0);
          _0x41ed62++;
        }
        this.dataArr.push(_0x300bc2);
      }
      _0x5d2800.guide && (Laya.timer.clear(this, this.countDown), this.pro.visible = false, this.dataArr[0][3] = 2, this.dataArr[0][4] = 3, this.dataArr[1][2] = 4, this.dataArr[2][2] = 4, this.dataArr[1][5] = 2, this.dataArr[3][0] = 6, this.dataArr[3][5] = 6, this.dataArr[5][1] = 3);
      this.checkOver(true);
      if (this.over) {
        this.over = false;
        _0x58889f = _0x3d7fd4.RandArr(_0x58889f);
        this.createDataOrigin(_0x58889f, _0x2927f9);
        return;
      }
      this.mainBox.removeChildren();
      for (let _0x373d8d = 0; _0x373d8d < this.dataArr.length; _0x373d8d++) {
        let _0x4d52cc = this.dataArr[_0x373d8d];
        for (let _0x19703c = 0; _0x19703c < _0x4d52cc.length; _0x19703c++) {
          let _0x13b546 = this.createIcon(_0x4d52cc[_0x19703c]);
          _0x13b546.anchorX = _0x13b546.anchorY = 0.5;
          _0x13b546.size(this.w, this.h);
          _0x13b546.pos(_0x19703c * this.w + this.w / 2, _0x373d8d * this.h + this.h / 2);
          _0x13b546.alpha = _0x2927f9;
          this.mainBox.addChild(_0x13b546);
        }
      }
    }
    showGuide() {
      this.txt.text = this.stepArr[_0x5d2800.step];
      this.txt.y = 200;
      _0x5d2800.step == 0 && this.showClickTip([[2, 2], [1, 2]]);
      _0x5d2800.step == 1 && this.showClickTip([[3, 5], [3, 0]]);
      _0x5d2800.step == 2 && this.showMoveTip([1, 3], 0, 3);
      _0x5d2800.step == 3 && this.showMoveTip([0, 1], 0, 4);
      _0x5d2800.step == 4 && (this.txt.bottom = 200, this.addChildAt(this.bottomBox, this.numChildren - 1), _0x45ad64.updateXin({}, () => {}), Laya.timer.once(2000, this, () => {
        _0x5d2800.guide = false;
        _0xccd285.backView();
      }));
    }
    adjustWH() {
      this.mainBox.size(this.col * this.w, this.row * this.h);
      this.mainBg.size(this.col * this.w + 20, this.row * this.h + 20);
      this.hBox.size(this.mainBox.width, this.h);
      this.vBox.size(this.w, this.mainBox.height);
      if (Laya.stage.height < 1334) {
        let _0x3f3a12 = Laya.stage.height / 1334;
        this.mainBox.scale(_0x3f3a12, _0x3f3a12);
        this.mainBg.scale(_0x3f3a12, _0x3f3a12);
        this.hBox.scale(_0x3f3a12, _0x3f3a12);
        this.vBox.scale(_0x3f3a12, _0x3f3a12);
        this.bottomBox.scale(_0x3f3a12, _0x3f3a12);
      }
    }
    addIconType(_0x27eda7) {
      for (let _0x4d52b9 = 1; _0x4d52b9 <= this.sumCount; _0x4d52b9++) {
        _0x27eda7.push(_0x4d52b9, _0x4d52b9);
        if (_0x27eda7.length == this.row * this.col) {
          return _0x27eda7;
        }
        if (_0x4d52b9 == this.sumCount) {
          return this.addIconType(_0x27eda7);
        }
      }
    }
    openTween() {
      let _0x2d28a9 = 0,
        _0x5d3d30 = Math.floor(this.row / 2);
      for (let _0x3884a8 = 0; _0x3884a8 < _0x5d3d30; _0x3884a8++) {
        for (let _0x331499 = this.col - 1; _0x331499 >= 0; _0x331499--) {
          let _0xb31565 = this.getIndex(_0x3884a8, _0x331499),
            _0x47922b = this.mainBox.getChildAt(_0xb31565);
          Laya.timer.once(_0x2d28a9 * 50, this, () => {
            Laya.Tween.to(_0x47922b, {
              alpha: 1
            }, 500);
          });
          _0x2d28a9++;
        }
      }
      let _0x1a82ed = 0;
      for (let _0x3c90ea = _0x5d3d30; _0x3c90ea < this.row; _0x3c90ea++) {
        for (let _0x1aa16f = 0; _0x1aa16f < this.col; _0x1aa16f++) {
          let _0x43cf09 = this.getIndex(_0x3c90ea, _0x1aa16f),
            _0x32c299 = this.mainBox.getChildAt(_0x43cf09);
          Laya.timer.once(_0x1a82ed * 50, this, () => {
            Laya.Tween.to(_0x32c299, {
              alpha: 1
            }, 500, null, Laya.Handler.create(this, () => {
              if (_0x3c90ea == this.row - 1 && _0x1aa16f == this.col - 1) {
                this.canClick = true;
              }
              _0x5d2800.guide && Laya.timer.once(300, this, this.showGuide);
            }));
          });
          _0x1a82ed++;
        }
      }
    }
    createIcon(_0x743055) {
      let _0xbe6c = new Laya.Image(_0x743055 ? "comp/icon/" + _0x743055 + ".png" : "");
      _0xbe6c.size(this.w, this.h);
      let _0x383265 = new Laya.Image("comp/icon/shadow.png");
      _0x383265.size(this.w, this.h);
      _0x383265.centerX = _0x383265.centerY = 0;
      _0x383265.visible = false;
      _0xbe6c.addChild(_0x383265);
      _0xbe6c.type = _0x743055;
      return _0xbe6c;
    }
    tipFun() {
      if (_0x5d2800.guide) {
        return;
      }
      if (this.isChoose) {
        return;
      }
      if (!this.canClick) {
        return;
      }
      if (this.help) {
        return;
      }
      this.useTip == 1 && this.reduceProp(1);
      this.iconTween(this.tipBtn.getChildAt(2));
      this.useTip = 1;
      this.loadBtn();
      for (let _0x5380bf = 0; _0x5380bf < this.dataArr.length; _0x5380bf++) {
        let _0x4b10db = this.dataArr[_0x5380bf];
        for (let _0x42f54d = 0; _0x42f54d < _0x4b10db.length; _0x42f54d++) {
          let _0xe8cf70 = _0x4b10db[_0x42f54d];
          if (_0xe8cf70) {
            this.startRow = _0x5380bf;
            this.startCol = _0x42f54d;
            let _0x131b3d = this.isClickClear(_0x5380bf, _0x42f54d, this.dataArr);
            if (_0x131b3d.length) {
              _0x131b3d.push([_0x5380bf, _0x42f54d]);
              console.log(_0x131b3d);
              this.showClickTip(_0x131b3d);
              return;
            }
            _0x131b3d = this.isMoveClear(_0x5380bf, _0x42f54d);
            if (_0x131b3d.length) {
              this.showMoveTip(_0x131b3d, _0x5380bf, _0x42f54d);
              return;
            }
          }
        }
      }
    }
    refreshFun() {
      if (_0x5d2800.guide) {
        return;
      }
      if (!this.canClick) {
        return;
      }
      this.useRefresh == 1 && this.reduceProp(2);
      this.iconTween(this.refreshBtn.getChildAt(2));
      this.canClick = false;
      this.isRefrush = true;
      let _0x14da5a = [];
      for (let _0xf98efc = 0; _0xf98efc < this.mainBox.numChildren; _0xf98efc++) {
        let _0x5f11e3 = this.mainBox.getChildAt(_0xf98efc);
        _0x5f11e3.skin && (_0x5f11e3.rot = _0x14da5a.length * 20, _0x14da5a.push(_0x5f11e3), Laya.Tween.to(_0x5f11e3, {
          x: this.mainBox.width / 2 + Math.cos(_0x5f11e3.rot * (Math.PI / 180)) * 180,
          y: this.mainBox.height / 2 + Math.sin(_0x5f11e3.rot * (Math.PI / 180)) * 180
        }, 200));
      }
      this.circleNum = 0;
      Laya.timer.once(200, this, () => {
        Laya.timer.loop(30, this, this.circleTween, [_0x14da5a]);
      });
      this.useRefresh = 1;
      this.loadBtn();
    }
    circleTween(_0x4c4552) {
      this.circleNum++;
      let _0x4a5eda = this.circleNum > 30;
      if (_0x4a5eda) {
        this.isRefrush = false;
        Laya.timer.clear(this, this.circleTween);
        let _0x473e72 = [];
        for (let _0x5b9069 = 0; _0x5b9069 < this.dataArr.length; _0x5b9069++) {
          let _0x4417f9 = this.dataArr[_0x5b9069];
          for (let _0x67dc63 = 0; _0x67dc63 < _0x4417f9.length; _0x67dc63++) {
            _0x473e72.push(_0x4417f9[_0x67dc63]);
          }
        }
        _0x473e72 = _0x3d7fd4.RandArr(_0x473e72);
        this.createDataOrigin(_0x473e72, 1);
        this.canClick = true;
      }
      for (let _0x231ca1 = 0; _0x231ca1 < _0x4c4552.length; _0x231ca1++) {
        let _0x411c52 = _0x4c4552[_0x231ca1];
        !_0x4a5eda && (_0x411c52.rot += 10, _0x411c52.pos(this.mainBox.width / 2 + Math.cos(_0x411c52.rot * (Math.PI / 180)) * 180, this.mainBox.height / 2 + Math.sin(_0x411c52.rot * (Math.PI / 180)) * 180));
      }
    }
    checkOver(_0x3624fb) {
      this.hasCount = 0;
      for (let _0x360ba1 = 0; _0x360ba1 < this.dataArr.length; _0x360ba1++) {
        let _0x212fe6 = this.dataArr[_0x360ba1];
        for (let _0x49ce35 = 0; _0x49ce35 < _0x212fe6.length; _0x49ce35++) {
          if (_0x212fe6[_0x49ce35]) {
            this.hasCount++;
          }
        }
      }
      this.loadPro();
      if (!this.hasCount) {
        !_0x3624fb && !_0x5d2800.guide && (_0xccd285.openPop({
          class: _0x1c8fe5,
          data: {
            lv: this.lv,
            time: this.time,
            rightCount: this.rightCount,
            count: this.answerCount
          }
        }), Laya.timer.clear(this, this.countDown));
        this.over = true;
        return;
      }
      let _0x4a4db7 = true;
      for (let _0x23acef = 0; _0x23acef < this.dataArr.length; _0x23acef++) {
        let _0xce2d12 = this.dataArr[_0x23acef];
        for (let _0x41b3af = 0; _0x41b3af < _0xce2d12.length; _0x41b3af++) {
          let _0x4ea66c = _0xce2d12[_0x41b3af];
          if (_0x4ea66c) {
            this.startRow = _0x23acef;
            this.startCol = _0x41b3af;
            let _0x136043 = this.isClickClear(_0x23acef, _0x41b3af, this.dataArr);
            if (_0x136043.length) {
              _0x4a4db7 = false;
              break;
            } else {
              _0x136043 = this.isMoveClear(_0x23acef, _0x41b3af);
              if (_0x136043.length) {
                _0x4a4db7 = false;
                break;
              }
            }
          }
        }
      }
      if (_0x4a4db7) {
        this.canClick = false;
        if (!_0x3624fb) {
          let _0xf542b7 = _0x5d2800.User.luan_prop + (this.useRefresh == 1 ? 0 : 1);
          _0xf542b7 == 0 ? !this.isRefrush && (Laya.timer.clear(this, this.countDown), _0xccd285.openPop({
            class: _0x358fa2,
            data: {
              lv: this.lv
            }
          })) : _0xccd285.openPop({
            class: _0x5bd331
          });
        }
        this.over = true;
      }
    }
    isClickClear(_0x10f674, _0x15aca0, _0x5effe7) {
      let _0x26bf4c = _0x5effe7[_0x10f674][_0x15aca0],
        _0x12987b = [];
      for (let _0x484c7a = _0x15aca0 - 1; _0x484c7a >= 0; _0x484c7a--) {
        if (_0x5effe7[_0x10f674][_0x484c7a]) {
          _0x5effe7[_0x10f674][_0x484c7a] == _0x26bf4c && _0x484c7a != this.startCol && _0x12987b.push([_0x10f674, _0x484c7a]);
          break;
        }
      }
      for (let _0x3f6bd7 = _0x15aca0 + 1; _0x3f6bd7 < this.col; _0x3f6bd7++) {
        if (_0x5effe7[_0x10f674][_0x3f6bd7]) {
          _0x5effe7[_0x10f674][_0x3f6bd7] == _0x26bf4c && _0x3f6bd7 != this.startCol && _0x12987b.push([_0x10f674, _0x3f6bd7]);
          break;
        }
      }
      for (let _0x3b5298 = _0x10f674 - 1; _0x3b5298 >= 0; _0x3b5298--) {
        if (_0x5effe7[_0x3b5298][_0x15aca0]) {
          _0x5effe7[_0x3b5298][_0x15aca0] == _0x26bf4c && _0x3b5298 != this.startRow && _0x12987b.push([_0x3b5298, _0x15aca0]);
          break;
        }
      }
      for (let _0x3431c8 = _0x10f674 + 1; _0x3431c8 < this.row; _0x3431c8++) {
        if (_0x5effe7[_0x3431c8][_0x15aca0]) {
          _0x5effe7[_0x3431c8][_0x15aca0] == _0x26bf4c && _0x3431c8 != this.startRow && _0x12987b.push([_0x3431c8, _0x15aca0]);
          break;
        }
      }
      return _0x12987b;
    }
    isMoveClear(_0x19d788, _0x444b67) {
      if (_0x444b67 < this.col - 1) {
        let _0x5d3e80 = -1,
          _0x501bc2 = -1,
          _0xf73d92 = [];
        for (let _0x1905e3 = _0x444b67; _0x1905e3 < this.col; _0x1905e3++) {
          !this.dataArr[_0x19d788][_0x1905e3] && _0x5d3e80 == -1 && (_0x5d3e80 = _0x1905e3 - 1);
          if (_0x5d3e80 != -1 && this.dataArr[_0x19d788][_0x1905e3]) {
            _0x501bc2 = _0x1905e3 - 1;
            break;
          }
          if (_0x5d3e80 == -1) {
            _0xf73d92.push(this.dataArr[_0x19d788][_0x1905e3]);
          }
        }
        if (_0x501bc2 == -1) {
          _0x501bc2 = this.col - 1;
        }
        if (_0x5d3e80 != -1) {
          for (let _0x5a0440 = _0x444b67; _0x5a0440 < this.col; _0x5a0440++) {
            if (_0x5a0440 + _0xf73d92.length <= _0x501bc2) {
              let _0x1840e8 = _0x5a0440 + 1,
                _0x371a03 = _0x19d788,
                _0x1cac78 = JSON.parse(JSON.stringify(this.dataArr));
              for (let _0x3e280 = 0; _0x3e280 < _0xf73d92.length; _0x3e280++) {
                _0x1cac78[_0x19d788][_0x3e280 + _0x444b67] = 0;
              }
              for (let _0x50aaf8 = 0; _0x50aaf8 < _0xf73d92.length; _0x50aaf8++) {
                _0x1cac78[_0x19d788][_0x50aaf8 + _0x1840e8] = _0xf73d92[_0x50aaf8];
              }
              let _0x1bd8c0 = this.isClickClear(_0x371a03, _0x1840e8, _0x1cac78);
              if (_0x1bd8c0.length) {
                return [_0x371a03, _0x1840e8];
              }
            }
          }
        }
      }
      if (_0x444b67 > 0) {
        let _0x2f5b5f = -1,
          _0x260978 = -1,
          _0x4b6766 = [];
        for (let _0x54c78b = _0x444b67; _0x54c78b >= 0; _0x54c78b--) {
          !this.dataArr[_0x19d788][_0x54c78b] && _0x2f5b5f == -1 && (_0x2f5b5f = _0x54c78b + 1);
          if (_0x2f5b5f != -1 && this.dataArr[_0x19d788][_0x54c78b]) {
            _0x260978 = _0x54c78b + 1;
            break;
          }
          if (_0x2f5b5f == -1) {
            _0x4b6766.push(this.dataArr[_0x19d788][_0x54c78b]);
          }
        }
        if (_0x260978 == -1) {
          _0x260978 = 0;
        }
        if (_0x2f5b5f != -1) {
          for (let _0x267a27 = _0x444b67; _0x267a27 >= 0; _0x267a27--) {
            if (_0x267a27 - _0x4b6766.length >= _0x260978) {
              let _0x217609 = _0x267a27 - 1,
                _0x249c6f = _0x19d788,
                _0x3129ce = JSON.parse(JSON.stringify(this.dataArr));
              for (let _0x5000fe = 0; _0x5000fe < _0x4b6766.length; _0x5000fe++) {
                _0x3129ce[_0x19d788][_0x444b67 - _0x5000fe] = 0;
              }
              for (let _0x19761c = 0; _0x19761c < _0x4b6766.length; _0x19761c++) {
                _0x3129ce[_0x19d788][_0x217609 - _0x19761c] = _0x4b6766[_0x19761c];
              }
              let _0x4864dd = this.isClickClear(_0x249c6f, _0x217609, _0x3129ce);
              if (_0x4864dd.length) {
                return [_0x249c6f, _0x217609];
              }
            }
          }
        }
      }
      if (_0x19d788 < this.row - 1) {
        let _0x5e122f = -1,
          _0x2eb0de = -1,
          _0x182235 = [];
        for (let _0x1e29cb = _0x19d788; _0x1e29cb < this.row; _0x1e29cb++) {
          !this.dataArr[_0x1e29cb][_0x444b67] && _0x5e122f == -1 && (_0x5e122f = _0x1e29cb - 1);
          if (_0x5e122f != -1 && this.dataArr[_0x1e29cb][_0x444b67]) {
            _0x2eb0de = _0x1e29cb - 1;
            break;
          }
          if (_0x5e122f == -1) {
            _0x182235.push(this.dataArr[_0x1e29cb][_0x444b67]);
          }
        }
        if (_0x2eb0de == -1) {
          _0x2eb0de = this.row - 1;
        }
        if (_0x5e122f != -1) {
          for (let _0x171fc3 = _0x19d788; _0x171fc3 < this.row; _0x171fc3++) {
            if (_0x171fc3 + _0x182235.length <= _0x2eb0de) {
              let _0x5a6622 = _0x444b67,
                _0x2432bd = _0x171fc3 + 1,
                _0x4b867b = JSON.parse(JSON.stringify(this.dataArr));
              for (let _0x230cbc = 0; _0x230cbc < _0x182235.length; _0x230cbc++) {
                _0x4b867b[_0x230cbc + _0x19d788][_0x444b67] = 0;
              }
              for (let _0x49a5ec = 0; _0x49a5ec < _0x182235.length; _0x49a5ec++) {
                _0x4b867b[_0x49a5ec + _0x2432bd][_0x444b67] = _0x182235[_0x49a5ec];
              }
              let _0x2bca8f = this.isClickClear(_0x2432bd, _0x5a6622, _0x4b867b);
              if (_0x2bca8f.length) {
                return [_0x2432bd, _0x5a6622];
              }
            }
          }
        }
      }
      if (_0x19d788 > 0) {
        let _0xd55f60 = -1,
          _0x3e7b2b = -1,
          _0x4cf639 = [];
        for (let _0x507c63 = _0x19d788; _0x507c63 >= 0; _0x507c63--) {
          !this.dataArr[_0x507c63][_0x444b67] && _0xd55f60 == -1 && (_0xd55f60 = _0x507c63 + 1);
          if (_0xd55f60 != -1 && this.dataArr[_0x507c63][_0x444b67]) {
            _0x3e7b2b = _0x507c63 + 1;
            break;
          }
          if (_0xd55f60 == -1) {
            _0x4cf639.push(this.dataArr[_0x507c63][_0x444b67]);
          }
        }
        if (_0x3e7b2b == -1) {
          _0x3e7b2b = 0;
        }
        if (_0xd55f60 != -1) {
          for (let _0x1e25d9 = _0x19d788; _0x1e25d9 >= 0; _0x1e25d9--) {
            if (_0x1e25d9 - _0x4cf639.length >= _0x3e7b2b) {
              let _0x4f23c7 = _0x444b67,
                _0x5b055e = _0x1e25d9 - 1,
                _0x4b5621 = JSON.parse(JSON.stringify(this.dataArr));
              for (let _0x1a7f73 = 0; _0x1a7f73 < _0x4cf639.length; _0x1a7f73++) {
                _0x4b5621[_0x19d788 - _0x1a7f73][_0x444b67] = 0;
              }
              for (let _0xa68341 = 0; _0xa68341 < _0x4cf639.length; _0xa68341++) {
                _0x4b5621[_0x5b055e - _0xa68341][_0x444b67] = _0x4cf639[_0xa68341];
              }
              let _0xabe7d4 = this.isClickClear(_0x5b055e, _0x4f23c7, _0x4b5621);
              if (_0xabe7d4.length) {
                return [_0x5b055e, _0x4f23c7];
              }
            }
          }
        }
      }
      return [];
    }
    isShowShadow(_0x1610e6) {
      for (let _0x1efe93 = 0; _0x1efe93 < this.mainBox.numChildren; _0x1efe93++) {
        let _0x53079d = this.mainBox.getChildAt(_0x1efe93);
        _0x53079d.getChildAt(0).visible = _0x1610e6;
      }
    }
    tipOver() {
      this.timeLine.pause();
      this.hand.visible = false;
      this.isShowShadow(false);
      this.help = false;
      Laya.timer.clear(this, this.showClickTip);
      Laya.timer.clear(this, this.showMoveTip);
      Laya.Tween.clearAll(this.hand);
    }
    showClickTip(_0x21dd8d) {
      this.help = true;
      this.isShowShadow(true);
      for (let _0x283d7c = 0; _0x283d7c < _0x21dd8d.length; _0x283d7c++) {
        let _0x929c99 = this.getIndex(_0x21dd8d[_0x283d7c][0], _0x21dd8d[_0x283d7c][1]),
          _0x278ea5 = this.mainBox.getChildAt(_0x929c99);
        _0x278ea5.getChildAt(0).visible = false;
        _0x283d7c == _0x21dd8d.length - 1 && (this.hand.visible = true, this.hand.pos(this.mainBox.x + _0x278ea5.x + this.w / 2, this.mainBox.y + _0x278ea5.y + this.h / 2), this.timeLine.play(0, true));
      }
    }
    showMoveTip(_0x2635a3, _0x335c95, _0x246d60) {
      this.help = true;
      this.isShowShadow(true);
      let _0x4e87d8 = this.getIndex(_0x335c95, _0x246d60),
        _0x2d640f = this.getIndex(_0x2635a3[0], _0x2635a3[1]),
        _0x53890f = this.mainBox.getChildAt(_0x4e87d8),
        _0x7570cf = this.mainBox.getChildAt(_0x2d640f);
      _0x53890f.getChildAt(0).visible = false;
      this.hand.visible = true;
      this.hand.rotation = 0;
      this.hand.pos(this.mainBox.x + _0x53890f.x + this.w / 2, this.mainBox.y + _0x53890f.y + this.h / 2);
      let _0x4f8397 = Math.sqrt((_0x53890f.x - _0x7570cf.x) ** 2 + (_0x53890f.y - _0x7570cf.y) ** 2);
      Laya.Tween.to(this.hand, {
        x: this.mainBox.x + _0x7570cf.x + this.w / 2,
        y: this.mainBox.y + _0x7570cf.y + this.h / 2
      }, _0x4f8397 * 2.5, null, Laya.Handler.create(this, () => {
        Laya.timer.once(500, this, this.showMoveTip, [_0x2635a3, _0x335c95, _0x246d60]);
      }));
    }
    iconDown(_0x46b521) {
      if (this.help) {
        this.tipOver();
      }
      if (!this.canClick) {
        return;
      }
      let _0x224050 = Laya.Point.EMPTY;
      _0x224050.setTo(_0x46b521.stageX, _0x46b521.stageY);
      this.mainBox.globalToLocal(_0x224050);
      let _0x5ed270 = Math.floor(_0x224050.x / this.w),
        _0x5d976f = Math.floor(_0x224050.y / this.h);
      if (_0x5d976f < 0 || _0x5d976f >= this.row) {
        return;
      }
      if (_0x5ed270 < 0 || _0x5ed270 >= this.col) {
        return;
      }
      if (!this.dataArr[_0x5d976f][_0x5ed270]) {
        return;
      }
      if (_0x5d2800.guide && _0x5d2800.step == 0 && this.dataArr[_0x5d976f][_0x5ed270] != 4) {
        return;
      }
      if (_0x5d2800.guide && _0x5d2800.step == 1 && this.dataArr[_0x5d976f][_0x5ed270] != 6) {
        return;
      }
      if (_0x5d2800.guide && _0x5d2800.step == 2 && this.dataArr[_0x5d976f][_0x5ed270] != 2) {
        return;
      }
      if (_0x5d2800.guide && _0x5d2800.step == 3 && this.dataArr[_0x5d976f][_0x5ed270] != 3) {
        return;
      }
      let _0x55748c = this.mainBox.getChildAt(this.getIndex(_0x5d976f, _0x5ed270));
      if (!this.help && _0x55748c.getChildAt(0).visible) {
        return;
      }
      _0xc96d09.playSound("click");
      this.rot = -1;
      this.moveArr = [];
      this.startRow = _0x5d976f;
      this.startCol = _0x5ed270;
      this.count = 0;
      _0x55748c.downX = _0x55748c.x - _0x46b521.stageX;
      _0x55748c.downY = _0x55748c.y - _0x46b521.stageY;
      this.on(Laya.Event.MOUSE_MOVE, this, this.iconMove, [_0x5d976f, _0x5ed270]);
      this.on(Laya.Event.MOUSE_UP, this, this.iconUp, [_0x5d976f, _0x5ed270]);
      this.on(Laya.Event.MOUSE_OUT, this, this.iconUp, [_0x5d976f, _0x5ed270]);
    }
    iconMove(_0x387d96, _0x917a43, _0x18e19b) {
      let _0x50ee9c = this.mainBox.getChildAt(this.getIndex(_0x387d96, _0x917a43));
      if (_0x50ee9c.x == _0x917a43 * this.w + this.w / 2 && _0x50ee9c.y == _0x387d96 * this.h + this.h / 2) {
        this.rot = -1;
      }
      this.count++;
      if (this.rot == -1 && this.count > 10) {
        this.moveArr = [];
        this.endIndex = -1;
        this.endPos = -1;
        let _0x2e5f60 = Laya.Point.EMPTY;
        _0x2e5f60.setTo(_0x50ee9c.x, _0x50ee9c.y);
        this.mainBox.localToGlobal(_0x2e5f60);
        if (Math.abs(_0x18e19b.stageX - _0x2e5f60.x) >= Math.abs(_0x18e19b.stageY - _0x2e5f60.y)) {
          if (_0x18e19b.stageX > _0x2e5f60.x) {
            this.rot = 1;
            for (let _0x4d228f = _0x917a43; _0x4d228f < this.col; _0x4d228f++) {
              !this.dataArr[_0x387d96][_0x4d228f] && this.endIndex == -1 && (this.endIndex = _0x4d228f - 1);
              if (this.endIndex != -1 && this.dataArr[_0x387d96][_0x4d228f]) {
                this.endPos = _0x4d228f - 1;
                break;
              }
              if (this.endIndex == -1) {
                this.moveArr.push(this.mainBox.getChildAt(this.getIndex(_0x387d96, _0x4d228f)));
              }
            }
            if (this.endPos == -1) {
              this.endPos = this.col - 1;
            }
          } else {
            this.rot = 2;
            for (let _0x11375e = _0x917a43; _0x11375e >= 0; _0x11375e--) {
              !this.dataArr[_0x387d96][_0x11375e] && this.endIndex == -1 && (this.endIndex = _0x11375e + 1);
              if (this.endIndex != -1 && this.dataArr[_0x387d96][_0x11375e]) {
                this.endPos = _0x11375e + 1;
                break;
              }
              if (this.endIndex == -1) {
                this.moveArr.push(this.mainBox.getChildAt(this.getIndex(_0x387d96, _0x11375e)));
              }
            }
            if (this.endPos == -1) {
              this.endPos = 0;
            }
          }
        } else {
          if (_0x18e19b.stageY > _0x2e5f60.y) {
            this.rot = 3;
            for (let _0x2b2121 = _0x387d96; _0x2b2121 < this.row; _0x2b2121++) {
              !this.dataArr[_0x2b2121][_0x917a43] && this.endIndex == -1 && (this.endIndex = _0x2b2121 - 1);
              if (this.endIndex != -1 && this.dataArr[_0x2b2121][_0x917a43]) {
                this.endPos = _0x2b2121 - 1;
                break;
              }
              if (this.endIndex == -1) {
                this.moveArr.push(this.mainBox.getChildAt(this.getIndex(_0x2b2121, _0x917a43)));
              }
            }
            if (this.endPos == -1) {
              this.endPos = this.row - 1;
            }
          } else {
            this.rot = 4;
            for (let _0x2e94f4 = _0x387d96; _0x2e94f4 >= 0; _0x2e94f4--) {
              !this.dataArr[_0x2e94f4][_0x917a43] && this.endIndex == -1 && (this.endIndex = _0x2e94f4 + 1);
              if (this.endIndex != -1 && this.dataArr[_0x2e94f4][_0x917a43]) {
                this.endPos = _0x2e94f4 + 1;
                break;
              }
              if (this.endIndex == -1) {
                this.moveArr.push(this.mainBox.getChildAt(this.getIndex(_0x2e94f4, _0x917a43)));
              }
            }
            if (this.endPos == -1) {
              this.endPos = 0;
            }
          }
        }
      }
      if (this.endIndex == -1) {
        return;
      }
      if (this.endIndex != undefined) {
        this.showNowPos(_0x50ee9c);
      }
      if (this.rot == 1) {
        for (let _0xcbe72a = 0; _0xcbe72a < this.moveArr.length; _0xcbe72a++) {
          this.moveArr[_0xcbe72a].x = _0x18e19b.stageX + this.moveArr[0].downX + this.w * _0xcbe72a;
          this.moveArr[_0xcbe72a].y = _0x387d96 * this.h + this.h / 2;
          if (_0xcbe72a == this.moveArr.length - 1) {
            if (this.moveArr[_0xcbe72a].x + this.w / 2 >= (this.endPos + 1) * this.w) {
              for (let _0xd233b3 = 0; _0xd233b3 < this.moveArr.length; _0xd233b3++) {
                this.moveArr[_0xd233b3].x = (this.endPos - (this.moveArr.length - 1 - _0xd233b3)) * this.w + this.w / 2;
              }
            }
            if (this.moveArr[0].x - this.w / 2 <= _0x917a43 * this.w) {
              for (let _0x5eae6e = 0; _0x5eae6e < this.moveArr.length; _0x5eae6e++) {
                this.moveArr[_0x5eae6e].x = (_0x5eae6e + _0x917a43) * this.w + this.w / 2;
              }
              this.initMoveData();
            }
          }
        }
      }
      if (this.rot == 2) {
        for (let _0x18a9cf = 0; _0x18a9cf < this.moveArr.length; _0x18a9cf++) {
          this.moveArr[_0x18a9cf].x = _0x18e19b.stageX + this.moveArr[0].downX - this.w * _0x18a9cf;
          this.moveArr[_0x18a9cf].y = _0x387d96 * this.h + this.h / 2;
          if (_0x18a9cf == this.moveArr.length - 1) {
            if (this.moveArr[_0x18a9cf].x - this.w / 2 <= this.endPos * this.w) {
              for (let _0x2f7bc7 = 0; _0x2f7bc7 < this.moveArr.length; _0x2f7bc7++) {
                this.moveArr[_0x2f7bc7].x = (this.endPos + (this.moveArr.length - 1 - _0x2f7bc7)) * this.w + this.w / 2;
              }
            }
          }
          if (this.moveArr[0].x + this.w / 2 >= (_0x917a43 + 1) * this.w) {
            for (let _0x448932 = 0; _0x448932 < this.moveArr.length; _0x448932++) {
              this.moveArr[_0x448932].x = (_0x917a43 - _0x448932) * this.w + this.w / 2;
            }
            this.initMoveData();
          }
        }
      }
      if (this.rot == 3) {
        for (let _0xffd000 = 0; _0xffd000 < this.moveArr.length; _0xffd000++) {
          this.moveArr[_0xffd000].y = _0x18e19b.stageY + this.moveArr[0].downY + this.h * _0xffd000;
          this.moveArr[_0xffd000].x = _0x917a43 * this.w + this.w / 2;
          if (_0xffd000 == this.moveArr.length - 1) {
            if (this.moveArr[_0xffd000].y + this.h / 2 >= (this.endPos + 1) * this.h) {
              for (let _0x470637 = 0; _0x470637 < this.moveArr.length; _0x470637++) {
                this.moveArr[_0x470637].y = (this.endPos - (this.moveArr.length - 1 - _0x470637)) * this.h + this.h / 2;
              }
            }
          }
          if (this.moveArr[0].y - this.h / 2 <= _0x387d96 * this.h) {
            for (let _0x125d09 = 0; _0x125d09 < this.moveArr.length; _0x125d09++) {
              this.moveArr[_0x125d09].y = (_0x125d09 + _0x387d96) * this.h + this.h / 2;
            }
            this.initMoveData();
          }
        }
      }
      if (this.rot == 4) {
        for (let _0x20cbe8 = 0; _0x20cbe8 < this.moveArr.length; _0x20cbe8++) {
          this.moveArr[_0x20cbe8].y = _0x18e19b.stageY + this.moveArr[0].downY - this.h * _0x20cbe8;
          this.moveArr[_0x20cbe8].x = _0x917a43 * this.w + this.w / 2;
          if (_0x20cbe8 == this.moveArr.length - 1) {
            if (this.moveArr[_0x20cbe8].y - this.h / 2 <= this.endPos * this.h) {
              for (let _0x460c55 = 0; _0x460c55 < this.moveArr.length; _0x460c55++) {
                this.moveArr[_0x460c55].y = (this.endPos + (this.moveArr.length - 1 - _0x460c55)) * this.h + this.h / 2;
              }
            }
          }
          if (this.moveArr[0].y + this.h / 2 >= (_0x387d96 + 1) * this.h) {
            for (let _0x5b1487 = 0; _0x5b1487 < this.moveArr.length; _0x5b1487++) {
              this.moveArr[_0x5b1487].y = (_0x387d96 - _0x5b1487) * this.h + this.h / 2;
            }
            this.initMoveData();
          }
        }
      }
    }
    initMoveData() {
      this.rot = -1;
      this.count = 0;
      this.endIndex = undefined;
    }
    showNowPos(_0x3ea2d0) {
      this.vBox.visible = this.hBox.visible = true;
      let _0x5ae266 = Math.floor(_0x3ea2d0.x / this.w),
        _0x4a6596 = Math.floor(_0x3ea2d0.y / this.h),
        _0x568eb6 = Laya.Point.EMPTY;
      _0x568eb6.setTo(_0x5ae266 * this.w, this.mainBox.y);
      this.mainBox.localToGlobal(_0x568eb6);
      this.vBox.pos(_0x568eb6.x, this.mainBox.y);
      let _0x188cf0 = Laya.Point.EMPTY;
      _0x188cf0.setTo(this.mainBox.x, _0x4a6596 * this.h);
      this.mainBox.localToGlobal(_0x568eb6);
      this.hBox.pos(this.mainBox.x, _0x188cf0.y);
    }
    iconUp(_0x16fe3f, _0x3ebe1d) {
      this.off(Laya.Event.MOUSE_MOVE, this, this.iconMove);
      this.off(Laya.Event.MOUSE_UP, this, this.iconUp);
      this.off(Laya.Event.MOUSE_OUT, this, this.iconUp);
      this.tipOver();
      if (!this.moveArr.length) {
        this.showSameIcon(_0x16fe3f, _0x3ebe1d);
        return;
      }
      this.vBox.visible = this.hBox.visible = false;
      let _0x58a34e = Math.floor(this.moveArr[0].x / this.w),
        _0x4215df = Math.floor(this.moveArr[0].y / this.h),
        _0x39a91e = JSON.parse(JSON.stringify(this.dataArr)),
        _0x1716a6 = [];
      if (this.rot == 1) {
        for (let _0x5d2cee = 0; _0x5d2cee < this.moveArr.length; _0x5d2cee++) {
          _0x1716a6.push(_0x39a91e[_0x16fe3f][_0x5d2cee + _0x3ebe1d]);
          _0x39a91e[_0x16fe3f][_0x5d2cee + _0x3ebe1d] = 0;
        }
        for (let _0x3fcd9a = 0; _0x3fcd9a < _0x1716a6.length; _0x3fcd9a++) {
          _0x39a91e[_0x16fe3f][_0x3fcd9a + _0x58a34e] = _0x1716a6[_0x3fcd9a];
        }
      }
      if (this.rot == 2) {
        for (let _0x244151 = 0; _0x244151 < this.moveArr.length; _0x244151++) {
          _0x1716a6.push(_0x39a91e[_0x16fe3f][_0x3ebe1d - _0x244151]);
          _0x39a91e[_0x16fe3f][_0x3ebe1d - _0x244151] = 0;
        }
        for (let _0x15377c = 0; _0x15377c < _0x1716a6.length; _0x15377c++) {
          _0x39a91e[_0x16fe3f][_0x58a34e - _0x15377c] = _0x1716a6[_0x15377c];
        }
      }
      if (this.rot == 3) {
        for (let _0x2ddd47 = 0; _0x2ddd47 < this.moveArr.length; _0x2ddd47++) {
          _0x1716a6.push(_0x39a91e[_0x16fe3f + _0x2ddd47][_0x3ebe1d]);
          _0x39a91e[_0x16fe3f + _0x2ddd47][_0x3ebe1d] = 0;
        }
        for (let _0x4ff462 = 0; _0x4ff462 < _0x1716a6.length; _0x4ff462++) {
          _0x39a91e[_0x4215df + _0x4ff462][_0x3ebe1d] = _0x1716a6[_0x4ff462];
        }
      }
      if (this.rot == 4) {
        for (let _0x3539ad = 0; _0x3539ad < this.moveArr.length; _0x3539ad++) {
          _0x1716a6.push(_0x39a91e[_0x16fe3f - _0x3539ad][_0x3ebe1d]);
          _0x39a91e[_0x16fe3f - _0x3539ad][_0x3ebe1d] = 0;
        }
        for (let _0x46b40b = 0; _0x46b40b < _0x1716a6.length; _0x46b40b++) {
          _0x39a91e[_0x4215df - _0x46b40b][_0x3ebe1d] = _0x1716a6[_0x46b40b];
        }
      }
      this.startRow = _0x4215df;
      this.startCol = _0x58a34e;
      let _0x4194ca = this.isClickClear(_0x4215df, _0x58a34e, _0x39a91e);
      if (_0x4194ca.length) {
        let _0x155309 = [];
        if (this.rot == 1) {
          for (let _0x1fc993 = 0; _0x1fc993 < this.moveArr.length; _0x1fc993++) {
            _0x155309.push(this.dataArr[_0x16fe3f][_0x1fc993 + _0x3ebe1d]);
            this.dataArr[_0x16fe3f][_0x1fc993 + _0x3ebe1d] = 0;
            this.moveArr[_0x1fc993].x = (_0x1fc993 + _0x3ebe1d) * this.w + this.w / 2;
            this.moveArr[_0x1fc993].y = _0x16fe3f * this.h + this.h / 2;
            this.moveArr[_0x1fc993].skin = "";
          }
          for (let _0x1a1af8 = 0; _0x1a1af8 < _0x155309.length; _0x1a1af8++) {
            let _0x20fe55 = this.mainBox.getChildAt(this.getIndex(_0x16fe3f, _0x1a1af8 + _0x58a34e));
            this.dataArr[_0x16fe3f][_0x1a1af8 + _0x58a34e] = _0x155309[_0x1a1af8];
            _0x20fe55.skin = "comp/icon/" + _0x155309[_0x1a1af8] + ".png";
          }
        }
        if (this.rot == 2) {
          for (let _0x397e8c = 0; _0x397e8c < this.moveArr.length; _0x397e8c++) {
            _0x155309.push(this.dataArr[_0x16fe3f][_0x3ebe1d - _0x397e8c]);
            this.dataArr[_0x16fe3f][_0x3ebe1d - _0x397e8c] = 0;
            this.moveArr[_0x397e8c].x = (_0x3ebe1d - _0x397e8c) * this.w + this.w / 2;
            this.moveArr[_0x397e8c].y = _0x16fe3f * this.h + this.h / 2;
            this.moveArr[_0x397e8c].skin = "";
          }
          for (let _0x222f03 = 0; _0x222f03 < _0x155309.length; _0x222f03++) {
            let _0x3934a3 = this.mainBox.getChildAt(this.getIndex(_0x16fe3f, _0x58a34e - _0x222f03));
            this.dataArr[_0x16fe3f][_0x58a34e - _0x222f03] = _0x155309[_0x222f03];
            _0x3934a3.skin = "comp/icon/" + _0x155309[_0x222f03] + ".png";
          }
        }
        if (this.rot == 3) {
          for (let _0x29a43a = 0; _0x29a43a < this.moveArr.length; _0x29a43a++) {
            _0x155309.push(this.dataArr[_0x16fe3f + _0x29a43a][_0x3ebe1d]);
            this.dataArr[_0x16fe3f + _0x29a43a][_0x3ebe1d] = 0;
            this.moveArr[_0x29a43a].x = _0x3ebe1d * this.w + this.w / 2;
            this.moveArr[_0x29a43a].y = (_0x29a43a + _0x16fe3f) * this.h + this.h / 2;
            this.moveArr[_0x29a43a].skin = "";
          }
          for (let _0x225b00 = 0; _0x225b00 < _0x155309.length; _0x225b00++) {
            let _0x16d2e0 = this.mainBox.getChildAt(this.getIndex(_0x4215df + _0x225b00, _0x3ebe1d));
            this.dataArr[_0x4215df + _0x225b00][_0x3ebe1d] = _0x155309[_0x225b00];
            _0x16d2e0.skin = "comp/icon/" + _0x155309[_0x225b00] + ".png";
          }
        }
        if (this.rot == 4) {
          for (let _0x50b1fb = 0; _0x50b1fb < this.moveArr.length; _0x50b1fb++) {
            _0x155309.push(this.dataArr[_0x16fe3f - _0x50b1fb][_0x3ebe1d]);
            this.dataArr[_0x16fe3f - _0x50b1fb][_0x3ebe1d] = 0;
            this.moveArr[_0x50b1fb].x = _0x3ebe1d * this.w + this.w / 2;
            this.moveArr[_0x50b1fb].y = (_0x16fe3f - _0x50b1fb) * this.h + this.h / 2;
            this.moveArr[_0x50b1fb].skin = "";
          }
          for (let _0x30216e = 0; _0x30216e < _0x155309.length; _0x30216e++) {
            let _0x1470e5 = this.mainBox.getChildAt(this.getIndex(_0x4215df - _0x30216e, _0x3ebe1d));
            this.dataArr[_0x4215df - _0x30216e][_0x3ebe1d] = _0x155309[_0x30216e];
            _0x1470e5.skin = "comp/icon/" + _0x155309[_0x30216e] + ".png";
          }
        }
        if (_0x4194ca.length == 1) {
          _0x4194ca.push([_0x4215df, _0x58a34e]);
          this.clearFun(_0x4194ca);
        } else {
          this.isShowShadow(true);
          this.isChoose = true;
          this.firstRow = _0x16fe3f;
          this.firstCol = _0x3ebe1d;
          for (let _0x11c08b = 0; _0x11c08b < _0x4194ca.length; _0x11c08b++) {
            let _0x38c147 = this.getIndex(_0x4194ca[_0x11c08b][0], _0x4194ca[_0x11c08b][1]),
              _0x284d63 = this.mainBox.getChildAt(_0x38c147);
            _0x284d63.getChildAt(0).visible = false;
          }
        }
        this.initMoveData();
        return;
      }
      if (this.rot == 1) {
        for (let _0x59d34f = 0; _0x59d34f < this.moveArr.length; _0x59d34f++) {
          let _0x44112b = (_0x59d34f + _0x3ebe1d) * this.w + this.w / 2,
            _0xef3f35 = _0x16fe3f * this.h + this.h / 2;
          Laya.Tween.to(this.moveArr[_0x59d34f], {
            x: _0x44112b,
            y: _0xef3f35
          }, 100, Laya.Ease.elasticOut);
        }
      }
      if (this.rot == 2) {
        for (let _0x4e4441 = 0; _0x4e4441 < this.moveArr.length; _0x4e4441++) {
          let _0x502c67 = (_0x3ebe1d - _0x4e4441) * this.w + this.w / 2,
            _0x570d22 = _0x16fe3f * this.h + this.h / 2;
          Laya.Tween.to(this.moveArr[_0x4e4441], {
            x: _0x502c67,
            y: _0x570d22
          }, 100, Laya.Ease.elasticOut);
        }
      }
      if (this.rot == 3) {
        for (let _0x3a8e2f = 0; _0x3a8e2f < this.moveArr.length; _0x3a8e2f++) {
          let _0x4980f6 = _0x3ebe1d * this.w + this.w / 2,
            _0x4c99c1 = (_0x3a8e2f + _0x16fe3f) * this.h + this.h / 2;
          Laya.Tween.to(this.moveArr[_0x3a8e2f], {
            x: _0x4980f6,
            y: _0x4c99c1
          }, 100, Laya.Ease.elasticOut);
        }
      }
      if (this.rot == 4) {
        for (let _0x2d3b9c = 0; _0x2d3b9c < this.moveArr.length; _0x2d3b9c++) {
          let _0x5a8638 = _0x3ebe1d * this.w + this.w / 2,
            _0x1f2200 = (_0x16fe3f - _0x2d3b9c) * this.h + this.h / 2;
          Laya.Tween.to(this.moveArr[_0x2d3b9c], {
            x: _0x5a8638,
            y: _0x1f2200
          }, 100, Laya.Ease.elasticOut);
        }
      }
      this.initMoveData();
    }
    showSameIcon(_0x55aeb2, _0x51e7ec) {
      let _0x17dc4f = this.dataArr[_0x55aeb2][_0x51e7ec];
      if (!_0x17dc4f) {
        return;
      }
      let _0x28bc25 = this.isClickClear(_0x55aeb2, _0x51e7ec, this.dataArr);
      if (_0x28bc25.length) {
        if (_0x28bc25.length == 1) {
          _0x28bc25.push([_0x55aeb2, _0x51e7ec]);
          this.clearFun(_0x28bc25);
        } else {
          if (this.isChoose) {
            _0x28bc25 = [[_0x55aeb2, _0x51e7ec], [this.firstRow, this.firstCol]];
            this.clearFun(_0x28bc25);
            return;
          }
          this.isChoose = true;
          this.firstRow = _0x55aeb2;
          this.firstCol = _0x51e7ec;
          this.isShowShadow(true);
          for (let _0x3acc55 = 0; _0x3acc55 < _0x28bc25.length; _0x3acc55++) {
            let _0x266cc1 = this.getIndex(_0x28bc25[_0x3acc55][0], _0x28bc25[_0x3acc55][1]),
              _0x5bb2d8 = this.mainBox.getChildAt(_0x266cc1);
            _0x5bb2d8.getChildAt(0).visible = false;
          }
        }
        return;
      }
      for (let _0x1bfe60 = 0; _0x1bfe60 < this.dataArr.length; _0x1bfe60++) {
        let _0x261420 = this.dataArr[_0x1bfe60];
        for (let _0x4f78e9 = 0; _0x4f78e9 < _0x261420.length; _0x4f78e9++) {
          if (_0x261420[_0x4f78e9] == _0x17dc4f) {
            let _0x22ebef = this.getIndex(_0x1bfe60, _0x4f78e9),
              _0x1349b2 = this.mainBox.getChildAt(_0x22ebef);
            Laya.Tween.to(_0x1349b2, {
              rotation: -20
            }, 30, null, Laya.Handler.create(this, () => {
              Laya.Tween.to(_0x1349b2, {
                rotation: 20
              }, 60, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(_0x1349b2, {
                  rotation: 0
                }, 30, null, Laya.Handler.create(this, () => {
                  _0x1349b2.rotation = 0;
                }));
              }));
            }));
          }
        }
      }
    }
    clearFun(_0x513fd2) {
      _0xc96d09.playSound("bomb");
      this.canClick = false;
      this.clearType = this.dataArr[_0x513fd2[0][0]][_0x513fd2[0][1]];
      for (let _0x3abaf6 = 0; _0x3abaf6 < _0x513fd2.length; _0x3abaf6++) {
        let _0x288fe5 = _0x513fd2[_0x3abaf6][0],
          _0x40407d = _0x513fd2[_0x3abaf6][1],
          _0x30b7f5 = this.getIndex(_0x288fe5, _0x40407d);
        this.mainBox.getChildAt(_0x30b7f5) && (this.mainBox.getChildAt(_0x30b7f5).skin = "", this.dataArr[_0x288fe5][_0x40407d] = 0, this.createClearTween(_0x288fe5, _0x40407d, _0x3abaf6 == _0x513fd2.length - 1));
      }
      this.isChoose = false;
      let _0xba962f = {};
      for (let _0x5d8ad9 = 0; _0x5d8ad9 < this.dataArr.length; _0x5d8ad9++) {
        let _0x3675e5 = this.dataArr[_0x5d8ad9];
        for (let _0x3dc1ab = 0; _0x3dc1ab < _0x3675e5.length; _0x3dc1ab++) {
          if (_0x3675e5[_0x3dc1ab]) {
            if (_0xba962f[_0x3675e5[_0x3dc1ab]]) {
              _0xba962f[_0x3675e5[_0x3dc1ab]] += 1;
            } else {
              _0xba962f[_0x3675e5[_0x3dc1ab]] = 1;
            }
          }
        }
      }
      let _0x47bb17 = [];
      for (let _0x3c890b in _0xba962f) {
        _0xba962f[_0x3c890b] % 2 == 1 && _0x47bb17.push(_0x3c890b);
      }
      for (let _0x429034 = 0; _0x429034 < _0x47bb17.length; _0x429034++) {
        this.getSingle(_0x47bb17[_0x429034]);
      }
      for (let _0x2c8be3 = 0; _0x2c8be3 < this.dataArr.length; _0x2c8be3++) {
        let _0x3211e7 = this.dataArr[_0x2c8be3];
        for (let _0x3e1c24 = 0; _0x3e1c24 < _0x3211e7.length; _0x3e1c24++) {
          let _0x46c1c3 = this.getIndex(_0x2c8be3, _0x3e1c24);
          _0x3211e7[_0x3e1c24] ? this.mainBox.getChildAt(_0x46c1c3).skin = "comp/icon/" + _0x3211e7[_0x3e1c24] + ".png" : this.mainBox.getChildAt(_0x46c1c3).skin = "";
        }
      }
      _0x5d2800.guide && (_0x5d2800.step += 1, this.showGuide());
    }
    getSingle(_0x4ee6d3) {
      for (let _0x365a2d = 0; _0x365a2d < this.dataArr.length; _0x365a2d++) {
        for (let _0x341171 = 0; _0x341171 < this.dataArr[_0x365a2d].length; _0x341171++) {
          if (this.dataArr[_0x365a2d][_0x341171] && this.dataArr[_0x365a2d][_0x341171] == _0x4ee6d3) {
            this.dataArr[_0x365a2d][_0x341171] = 0;
            return;
          }
        }
      }
    }
    createClearTween(_0x408792, _0x3a7fce, _0x1b3dcc) {
      let _0x46f9eb = new Laya.Clip("comp/bombClip.png");
      _0x46f9eb.clipX = 5;
      _0x46f9eb.clipY = 2;
      _0x46f9eb.interval = 50;
      _0x46f9eb.anchorX = _0x46f9eb.anchorY = 0.5;
      let _0x44a8e1 = Laya.Point.EMPTY;
      _0x44a8e1.setTo(_0x3a7fce * this.w + this.w / 2, _0x408792 * this.h + this.h / 2);
      this.mainBox.localToGlobal(_0x44a8e1);
      _0x46f9eb.pos(_0x44a8e1.x, _0x44a8e1.y);
      _0x46f9eb.scale(0.3, 0.3);
      this.addChild(_0x46f9eb);
      _0x46f9eb.on(Laya.Event.COMPLETE, this, () => {
        Laya.timer.once(500, this, () => {
          _0x46f9eb.removeSelf();
        });
        if (_0x1b3dcc && !this.over) {
          this.checkOver();
          if (this.clearType && (this.clearType == 1 || this.clearType == 5)) {
            this.sumAnswer > 0 && this.openPage("answerPage");
          } else {
            this.lo.data.lv > 40 && Math.random() < 0.1 && this.sumAnswer > 0 && this.openPage("answerPage");
          }
          this.canClick = true;
        }
      });
      _0x46f9eb.play(0, 10);
    }
    getIndex(_0x526877, _0x2d3b0d) {
      return _0x526877 * this.col + _0x2d3b0d;
    }
    openPage(_0x6cc6c0) {
      _0x6cc6c0 == "answerPage" && (_0xccd285.closeView(_0x54058d), this.answerCount++, this.sumAnswer -= 1, this.loadBtn(), _0xccd285.openView({
        class: _0x54058d
      }));
      Laya.timer.clear(this, this.countDown);
    }
    startCountDown() {
      !this.over && Laya.timer.loop(1000, this, this.countDown);
    }
    rightFun() {
      this.rightCount++;
    }
    iconTween(_0x1584fb) {
      Laya.Tween.to(_0x1584fb, {
        scaleX: 1.2,
        scaleY: 1.2
      }, 150, null, Laya.Handler.create(this, () => {
        Laya.Tween.to(_0x1584fb, {
          scaleX: 1,
          scaleY: 1
        }, 150);
      }));
    }
    reduceProp(_0x5d90bf) {
      _0x45ad64.usePro({
        p: _0x5d90bf
      }, _0x29e8f3 => {
        if (_0x29e8f3.code == 200) {
          if (_0x5d90bf == 1) {
            _0x5d2800.User.tishi_prop -= 1;
          }
          if (_0x5d90bf == 2) {
            _0x5d2800.User.luan_prop -= 1;
          }
          this.loadBtn();
        }
      });
    }
  }
  class _0x276be6 extends _0x8e18d3 {
    constructor() {
      super();
      this._list.renderHandler = new Laya.Handler(this, this.onRender);
    }
    onOpen() {
      this._list.array = [];
      this.backBtn.on(Laya.Event.CLICK, this, this.backFun);
      this.setBtn.on(Laya.Event.CLICK, this, this.setFun);
      this._list.on(Laya.Event.MOUSE_DOWN, this, this.downFun);
      for (let _0x25e3c0 = 0; _0x25e3c0 < this.tabBox.numChildren; _0x25e3c0++) {
        this.tabBox.getChildAt(_0x25e3c0).on(Laya.Event.CLICK, this, this.choosePage, [_0x25e3c0]);
      }
      this.getMyLevel();
    }
    onClose() {
      this.backBtn.off(Laya.Event.CLICK, this, this.backFun);
      this.setBtn.off(Laya.Event.CLICK, this, this.setFun);
      this._list.off(Laya.Event.MOUSE_DOWN, this, this.downFun);
      for (let _0x917488 = 0; _0x917488 < this.tabBox.numChildren; _0x917488++) {
        this.tabBox.getChildAt(_0x917488).off(Laya.Event.CLICK, this, this.choosePage);
      }
    }
    onEnable() {
      _0x5d2800.lvData.length && this.loadLevel();
    }
    choosePage(_0x146017) {
      this.page = _0x146017;
      this.loadPage();
    }
    loadPage() {
      this._list.array = _0x5d2800.lvData.slice(this.page * 30, this.page * 30 + 30);
      for (let _0x29546f = 0; _0x29546f < this.tabBox.numChildren; _0x29546f++) {
        this.tabBox.getChildAt(_0x29546f).skin = _0x29546f == this.page ? "comp/Ellipse 22.png" : "comp/Ellipse 23.png";
      }
    }
    openGame(_0x2a5491) {
      if (_0x2a5491.lock) {
        return;
      }
      _0xc96d09.playSound("click");
      _0xccd285.openView({
        class: _0x177791,
        data: {
          lv: _0x2a5491.level
        }
      });
    }
    backFun() {
      _0xc96d09.playSound("click");
      _0xccd285.backView();
    }
    setFun() {
      _0xc96d09.playSound("click");
      _0xccd285.openPop({
        class: _0x5ca88d
      });
    }
    onRender(_0x1d51c7) {
      let _0x322e09 = _0x1d51c7.dataSource,
        _0x837307 = _0x1d51c7.getChildByName("bg"),
        _0x4924ea = _0x1d51c7.getChildByName("no"),
        _0x972c04 = _0x1d51c7.getChildByName("starBox");
      _0x837307.skin = _0x322e09.lock ? "comp/Group 245.png" : "comp/Group.png";
      _0x4924ea.text = _0x322e09.lock ? "" : _0x322e09.level;
      for (let _0x347b84 = 0; _0x347b84 < 3; _0x347b84++) {
        _0x972c04.getChildAt(_0x347b84).visible = _0x347b84 < _0x322e09.star;
      }
      _0x1d51c7.on(Laya.Event.CLICK, this, this.openGame, [_0x322e09]);
    }
    downFun(_0x564333) {
      this.startX = _0x564333.stageX;
      this.startY = _0x564333.stageY;
      this._list.on(Laya.Event.MOUSE_UP, this, this.upFun);
      this._list.on(Laya.Event.MOUSE_OUT, this, this.upFun);
    }
    upFun(_0x169024) {
      this._list.off(Laya.Event.MOUSE_UP, this, this.upFun);
      this._list.off(Laya.Event.MOUSE_OUT, this, this.upFun);
      Math.abs(_0x169024.stageX - this.startX) > 50 && (_0x169024.stageX > this.startX ? this.page = Math.max(this.page - 1, 0) : this.page = Math.min(this.page + 1, this.tabBox.numChildren - 1), this.loadPage());
    }
    getMyLevel() {
      _0x45ad64.myLevel({}, _0x56341d => {
        if (_0x56341d.code == 200) {
          _0x5d2800.lvData = _0x56341d.data;
          for (let _0x133167 = 0; _0x133167 < 100; _0x133167++) {
            if (_0x5d2800.lvData[_0x133167]) {
              _0x5d2800.lvData[_0x133167].lock = false;
            } else {
              _0x5d2800.lvData.push({
                level: _0x133167 + 1,
                star: 0,
                lock: true
              });
            }
          }
          this.loadLevel();
        } else {
          _0xccd285.showTip(_0x56341d.msg);
        }
      });
    }
    loadLevel() {
      let _0x515f3f = 100;
      for (let _0x4b847e = 0; _0x4b847e < _0x5d2800.lvData.length; _0x4b847e++) {
        if (_0x5d2800.lvData[_0x4b847e].star == 0) {
          _0x5d2800.lvData[_0x4b847e].lock = false;
          _0x515f3f = _0x5d2800.lvData[_0x4b847e].level;
          break;
        }
      }
      this.page = Math.floor(_0x515f3f / 30);
      this.loadPage();
    }
  }
  class _0x422e54 extends _0x5a38c6 {
    constructor() {
      super();
    }
    onOpen() {
      this.on(Laya.Event.CLICK, this, this.closeFun);
      _0x3d7fd4.shareFun(this.lo.data);
    }
    onClose() {
      this.off(Laya.Event.CLICK, this, this.closeFun);
    }
    closeFun() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
    }
  }
  class _0x5afea9 extends _0x4f1fdd {
    constructor() {
      super();
      this.t_list.renderHandler = new Laya.Handler(this, this.onTRender);
      this._list.renderHandler = new Laya.Handler(this, this.onRender);
    }
    onAwake() {
      this.dingwei = 1;
      this.size(Laya.stage.width, Laya.stage.height);
    }
    onOpen() {
      this.closeBtn.on(Laya.Event.CLICK, this, this.closeFun);
      this.inviteBtn.on(Laya.Event.CLICK, this, this.inviteFun);
      this.getRankList();
      this.getMyInvite();
    }
    onClose() {
      this.closeBtn.off(Laya.Event.CLICK, this, this.closeFun);
      this.inviteBtn.off(Laya.Event.CLICK, this, this.inviteFun);
    }
    inviteFun() {
      _0xc96d09.playSound("click");
      _0xccd285.openPop({
        class: _0x422e54,
        data: 2
      });
    }
    closeFun() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
    }
    getRankList() {
      this._list.array = [];
      _0x45ad64.inviteRank({}, _0x13df57 => {
        _0x13df57.code == 200 ? (this.loadMy(_0x13df57.data.my), this.loadRank(_0x13df57.data.rank)) : _0xccd285.showTip(_0x13df57.msg);
      });
    }
    loadRank(_0x1e42ff) {
      let _0x53a177 = _0x1e42ff.slice(0, 3);
      for (let _0x4cf8b9 = 0; _0x4cf8b9 < 3; _0x4cf8b9++) {
        this["rank" + _0x4cf8b9].visible = _0x4cf8b9 < _0x53a177.length;
        this["rank" + _0x4cf8b9].visible && (this["rank" + _0x4cf8b9].getChildByName("tx").skin = _0x53a177[_0x4cf8b9].headimgurl, this["rank" + _0x4cf8b9].getChildByName("name").text = _0x53a177[_0x4cf8b9].nickname, this["rank" + _0x4cf8b9].getChildByName("score").text = _0x53a177[_0x4cf8b9].invite_num);
      }
      let _0x23a936 = _0x1e42ff.slice(3, _0x1e42ff.length);
      this._list.array = _0x23a936;
    }
    loadMy(_0xa84c83) {
      let _0x4e9a75 = this.mine.getChildByName("rank"),
        _0x23b963 = this.mine.getChildByName("tx"),
        _0x11b4c2 = this.mine.getChildByName("name"),
        _0x1238e9 = this.mine.getChildByName("score");
      _0x4e9a75.text = _0xa84c83.rank;
      _0x23b963.skin = _0xa84c83.headimgurl;
      _0x1238e9.text = _0xa84c83.invite_num;
      _0x11b4c2.text = _0xa84c83.nickname;
      this.huiBox.removeChildren();
      for (let _0x5c2136 = 0; _0x5c2136 < _0xa84c83.yq_rank_num; _0x5c2136++) {
        let _0x3941fc = new Laya.Image("comp/yaoqingDaren.png");
        _0x3941fc.scale(0.5, 0.5);
        this.huiBox.addChild(_0x3941fc);
      }
    }
    onTRender(_0x1e282d) {
      let _0x4f998a = _0x1e282d.dataSource,
        _0x38effc = _0x1e282d.getChildByName("tx"),
        _0x44c157 = _0x1e282d.getChildByName("name");
      _0x38effc.skin = _0x4f998a.headimgurl;
      _0x44c157.text = _0x4f998a.nickname;
    }
    getMyInvite() {
      this.t_list.array = [];
      _0x45ad64.myInvite({}, _0x490b2d => {
        _0x490b2d.code == 200 ? (this.t_list.array = _0x490b2d.data, this.sumScore.text = _0x490b2d.data.length) : _0xccd285.showTip(_0x490b2d.msg);
      });
    }
    onRender(_0x21b7c0, _0x3b3a56) {
      let _0x3b4c8d = _0x21b7c0.dataSource,
        _0x3e0f48 = _0x21b7c0.getChildByName("tx"),
        _0xe0166a = _0x21b7c0.getChildByName("name"),
        _0xcfbe34 = _0x21b7c0.getChildByName("rank"),
        _0x2575b5 = _0x21b7c0.getChildByName("score");
      _0x3e0f48.skin = _0x3b4c8d.headimgurl;
      _0xe0166a.text = _0x3b4c8d.nickname;
      _0x2575b5.text = _0x3b4c8d.invite_num;
      _0xcfbe34.text = _0x3b3a56 + 4;
    }
  }
  class _0x11d50e extends _0x23dd58 {
    constructor() {
      super();
    }
    onOpen() {
      this.sureBtn.on(Laya.Event.CLICK, this, this.actFun, [1]);
      this.closeBtn.on(Laya.Event.CLICK, this, this.actFun, [2]);
      this.txt.text = "收到" + this.lo.data.nickname + "的邀请，加入其团队，每个周团队模式和个人模式只能选择一种，且无法切换。";
    }
    onClose() {
      this.sureBtn.off(Laya.Event.CLICK, this, this.actFun);
      this.closeBtn.off(Laya.Event.CLICK, this, this.actFun);
    }
    actFun(_0x15f12b) {
      _0xc96d09.playSound("click");
      _0x45ad64.agreeJoin({
        status: _0x15f12b,
        id: this.lo.data.id
      }, _0x31f6a7 => {
        _0x31f6a7.code == 200 ? _0x15f12b == 1 && (_0x5d2800.User.mode = 2, _0x5d2800.User.is_mode = 1, _0x5d2800.User.team_id = this.lo.data.team_id, _0xccd285.emit("loadMode")) : _0xccd285.showTip(_0x31f6a7.msg);
      });
      _0xccd285.closePopThis(this);
    }
  }
  class _0x44e6aa extends _0x235631 {
    constructor() {
      super();
    }
    onAwake() {
      this._list.renderHandler = new Laya.Handler(this, this.onRender);
    }
    onOpen() {
      this.list = [];
      this._list.array = this.list;
      this.chooseTab(0);
      this.closeBtn.on(Laya.Event.CLICK, this, this.closeFun);
      for (let _0x13e5c0 = 0; _0x13e5c0 < this.tabBox.numChildren; _0x13e5c0++) {
        this.tabBox.getChildAt(_0x13e5c0).on(Laya.Event.CLICK, this, this.chooseTab, [_0x13e5c0]);
      }
    }
    onClose() {
      this.closeBtn.off(Laya.Event.CLICK, this, this.closeFun);
      for (let _0x5f2642 = 0; _0x5f2642 < this.tabBox.numChildren; _0x5f2642++) {
        this.tabBox.getChildAt(_0x5f2642).off(Laya.Event.CLICK, this, this.chooseTab);
      }
    }
    closeFun() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
    }
    chooseTab(_0x5977d7) {
      this.index = _0x5977d7;
      _0xc96d09.playSound("click");
      for (let _0x466f07 = 0; _0x466f07 < this.tabBox.numChildren; _0x466f07++) {
        this.tabBox.getChildAt(_0x466f07).getChildAt(0).visible = _0x5977d7 == _0x466f07;
        this.tabBox.getChildAt(_0x466f07).getChildAt(1).skin = "comp/" + _0x466f07 + "_" + (_0x466f07 == _0x5977d7 ? "on" : "off") + ".png";
      }
      let _0x1bab43 = _0x5977d7 == 0 ? "memberRank" : "teamRank";
      _0x45ad64[_0x1bab43]({}, _0x49511a => {
        _0x49511a.code == 200 ? (this.list = _0x49511a.data.rank, this._list.array = this.list, this.loadMy(_0x49511a.data.my)) : _0xccd285.showTip(_0x49511a.msg);
      });
    }
    onRender(_0x159492, _0x45411c) {
      let _0x34ed11 = _0x159492.dataSource,
        _0x4f8a47 = _0x159492.getChildByName("icon"),
        _0xa4521 = _0x159492.getChildByName("rank"),
        _0x2b69d5 = _0x159492.getChildByName("tx"),
        _0x4ba5f0 = _0x159492.getChildByName("name"),
        _0x400924 = _0x159492.getChildByName("score"),
        _0x432fb7 = _0x159492.getChildByName("team");
      _0x4f8a47.skin = "comp/" + (_0x45411c < 3 ? _0x45411c + 1 : 4) + ".png";
      _0xa4521.text = _0x45411c < 3 ? "" : _0x45411c + 1;
      _0x4ba5f0.text = _0x34ed11.nickname;
      _0x2b69d5.skin = _0x34ed11.headimgurl;
      _0x400924.text = _0x34ed11.score;
      _0x432fb7.visible = this.index == 0 && _0x34ed11.team_id > 0;
    }
    loadMy(_0x282099) {
      if (Array.isArray(_0x282099) && _0x282099.length == 0) {
        this.mine.visible = false;
        return;
      }
      this.mine.visible = true;
      let _0x20f118 = this.mine.getChildByName("rank"),
        _0x4fcb60 = this.mine.getChildByName("tx"),
        _0xab07a6 = this.mine.getChildByName("name"),
        _0x29ea2e = this.mine.getChildByName("score"),
        _0x2cc741 = this.mine.getChildByName("icon");
      _0x2cc741.skin = _0x282099.rank > 0 ? "comp/myRankBg.png" : "comp/noRank.png";
      _0x20f118.text = _0x282099.rank > 0 ? _0x282099.rank : "";
      _0x4fcb60.skin = _0x282099.headimgurl;
      _0x29ea2e.text = _0x282099.score;
      _0xab07a6.text = _0x282099.nickname;
      this.huiBox.removeChildren();
      for (let _0x269590 = 0; _0x269590 < _0x282099.score_rank_num; _0x269590++) {
        let _0x19ccc = new Laya.Image("comp/zuiqiang.png");
        _0x19ccc.scale(0.5, 0.5);
        this.huiBox.addChild(_0x19ccc);
      }
    }
  }
  class _0x590035 extends _0x380795 {
    constructor() {
      super();
    }
    onOpen() {
      this.closeBtn.on(Laya.Event.CLICK, this, this.closeFun);
    }
    onClose() {
      this.closeBtn.off(Laya.Event.CLICK, this, this.closeFun);
    }
    closeFun() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
    }
  }
  class _0x14a3f9 extends _0x410451 {
    constructor() {
      super();
    }
    onOpen() {
      this.sureBtn.on(Laya.Event.CLICK, this, this.sureFun);
      this.closeBtn.on(Laya.Event.CLICK, this, this.closeFun);
    }
    onClose() {
      this.sureBtn.off(Laya.Event.CLICK, this, this.sureFun);
      this.closeBtn.off(Laya.Event.CLICK, this, this.closeFun);
    }
    closeFun() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
    }
    sureFun() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
      _0x45ad64.chooseMode({
        mode: 1
      }, _0x216e30 => {
        _0x216e30.code == 200 ? (_0x5d2800.User.mode = 1, _0x5d2800.User.is_mode = 1, _0xccd285.emit("loadMode")) : _0xccd285.showTip(_0x216e30.msg);
      });
    }
  }
  class _0x4cda1c extends _0xcd3ce2 {
    constructor() {
      super();
      this._list.renderHandler = new Laya.Handler(this, this.onRender);
    }
    onOpen() {
      this.canClick = true;
      this._list.array = [];
      this.closeBtn.on(Laya.Event.CLICK, this, this.closePop);
      this.inviteBtn.on(Laya.Event.CLICK, this, this.inviteFun);
      this.changeBtn.on(Laya.Event.CLICK, this, this.changeFun);
      this.getGroupData();
    }
    onClose() {
      Laya.timer.clear(this, this.countDown);
      this.closeBtn.off(Laya.Event.CLICK, this, this.closePop);
      this.inviteBtn.off(Laya.Event.CLICK, this, this.inviteFun);
      this.changeBtn.off(Laya.Event.CLICK, this, this.changeFun);
    }
    closePop() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
    }
    changeFun() {
      if (!this.canClick) {
        return;
      }
      this.canClick = false;
      _0xc96d09.playSound("click");
      _0x45ad64.myTeam({}, _0x596461 => {
        this.canClick = true;
        if (_0x596461.code == 200) {
          let _0x8e4333 = _0x596461.data.list;
          _0x8e4333.length >= 2 ? (_0xccd285.closePopThis(this), _0xccd285.openView({
            class: _0x276be6
          })) : _0xccd285.showTip("团队人数达到两人及以上开启挑战");
        }
      });
    }
    inviteFun() {
      _0xc96d09.playSound("click");
      _0xccd285.openPop({
        class: _0x422e54,
        data: 2
      });
    }
    getGroupData() {
      _0x45ad64.myTeam({}, _0x7b7b1 => {
        if (_0x7b7b1.code == 200) {
          let _0x338e04 = _0x7b7b1.data.team;
          if (_0x338e04.length == 0) {
            _0x5d2800.User.mode = 0;
            _0xccd285.closePopThis(this);
            _0xccd285.showTip("请重新选择模式");
            return;
          }
          let _0x764613 = _0x7b7b1.data.list;
          Array.isArray(_0x338e04) && _0x338e04.length == 0 && (_0x338e04 = {
            score: 0,
            rank: 0,
            m_id: 0,
            down_time: -1
          });
          this.loadTeamData(_0x338e04, _0x764613);
        } else {
          _0xccd285.showTip(_0x7b7b1.msg);
        }
      });
    }
    loadTeamData(_0x16c2e3, _0x4ce1dd) {
      this.teamRank.text = _0x16c2e3.rank;
      this.teamScore.text = _0x16c2e3.score;
      this.owner.visible = _0x4ce1dd.length > 0;
      for (let _0x5cd0b9 = 0; _0x5cd0b9 < _0x4ce1dd.length; _0x5cd0b9++) {
        if (_0x4ce1dd[_0x5cd0b9].id == _0x16c2e3.m_id) {
          let _0x33e181 = this.owner.getChildByName("tx"),
            _0x501ccc = this.owner.getChildByName("name"),
            _0x4c88c3 = this.owner.getChildByName("score");
          _0x33e181.skin = _0x4ce1dd[_0x5cd0b9].headimgurl;
          _0x4c88c3.text = _0x4ce1dd[_0x5cd0b9].score;
          _0x501ccc.text = _0x4ce1dd[_0x5cd0b9].nickname;
          _0x4ce1dd.splice(_0x5cd0b9, 1);
          break;
        }
      }
      this._list.array = _0x4ce1dd;
      this.noneBox.visible = _0x4ce1dd.length == 0;
      _0x16c2e3.down_time > -1 && (this.time = parseInt(_0x16c2e3.down_time), this.countDown(), Laya.timer.loop(1000, this, this.countDown));
    }
    countDown() {
      this.time -= 1;
      this.timeTxt.text = _0x3d7fd4.timeToHMS(this.time);
      this.time <= 0 && (this.getGroupData(), Laya.timer.clear(this, this.countDown), _0x5d2800.User.mode = 0, _0xccd285.closePopThis(this));
    }
    onRender(_0x3b9e53) {
      let _0x21a901 = _0x3b9e53.dataSource,
        _0x83a514 = _0x3b9e53.getChildByName("tx"),
        _0x78ccfa = _0x3b9e53.getChildByName("name"),
        _0x49e812 = _0x3b9e53.getChildByName("score");
      _0x83a514.skin = _0x21a901.headimgurl;
      _0x78ccfa.text = _0x21a901.nickname;
      _0x49e812.text = _0x21a901.score;
    }
  }
  class _0x5d1643 extends _0x339a3a {
    constructor() {
      super();
    }
    onOpen() {
      this.sureBtn.on(Laya.Event.CLICK, this, this.sureFun);
      this.closeBtn.on(Laya.Event.CLICK, this, this.closeFun);
    }
    onClose() {
      this.sureBtn.off(Laya.Event.CLICK, this, this.sureFun);
      this.closeBtn.off(Laya.Event.CLICK, this, this.closeFun);
    }
    closeFun() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
    }
    sureFun() {
      _0xc96d09.playSound("click");
      _0xccd285.closePopThis(this);
      _0x45ad64.chooseMode({
        mode: 2
      }, _0x20cfe1 => {
        _0x20cfe1.code == 200 ? (_0x5d2800.User.mode = 2, _0x5d2800.User.team_id = _0x20cfe1.data, _0x5d2800.User.is_mode = 1, _0xccd285.emit("loadMode")) : _0xccd285.showTip(_0x20cfe1.msg);
      });
    }
  }
  class _0x5c3ddc extends _0x144323 {
    constructor() {
      super();
    }
    onAwake() {
      this.bg.height = Laya.stage.height;
    }
    onOpen() {
      this.setBtn.on(Laya.Event.CLICK, this, this.setFun);
      this.moneyBtn.on(Laya.Event.CLICK, this, this.openWallet);
      this.ruleBtn.on(Laya.Event.CLICK, this, this.openRule);
      this.rankBtn.on(Laya.Event.CLICK, this, this.openRank);
      this.shareBtn.on(Laya.Event.CLICK, this, this.openShare);
      this.teamBtn.on(Laya.Event.CLICK, this, this.openTeam);
      this.singleBtn.on(Laya.Event.CLICK, this, this.openSingle);
      _0xccd285.on("loadMode", this, this.loadMode);
      this.inviteTeamLog();
      this.loadMode();
      this.getQuest();
    }
    onEnable() {
      this.moneyBtn.disabled = _0x5d2800.User.is_tx.length == 0;
    }
    onFrush() {
      this.loadMode();
    }
    onClose() {
      this.setBtn.off(Laya.Event.CLICK, this, this.setFun);
      this.moneyBtn.off(Laya.Event.CLICK, this, this.openWallet);
      this.ruleBtn.off(Laya.Event.CLICK, this, this.openRule);
      this.rankBtn.off(Laya.Event.CLICK, this, this.openRank);
      this.shareBtn.off(Laya.Event.CLICK, this, this.openShare);
      this.teamBtn.off(Laya.Event.CLICK, this, this.openTeam);
      this.singleBtn.off(Laya.Event.CLICK, this, this.openSingle);
      _0xccd285.off("loadMode", this, this.loadMode);
    }
    openWallet() {
      _0xc96d09.playSound("click");
      let _0x2d0bae = _0x5d2800.User.is_tx;
      for (let _0x4c6ed1 = 0; _0x4c6ed1 < _0x2d0bae.length; _0x4c6ed1++) {
        _0xccd285.openPop({
          class: _0x194d33,
          data: _0x2d0bae[_0x4c6ed1]
        });
      }
    }
    setFun() {
      _0xc96d09.playSound("click");
      _0xccd285.openPop({
        class: _0x5ca88d
      });
    }
    openRule() {
      _0xc96d09.playSound("click");
      _0xccd285.openPop({
        class: _0x590035
      });
    }
    openRank() {
      _0xccd285.openPop({
        class: _0x44e6aa
      });
    }
    openShare() {
      _0xc96d09.playSound("click");
      _0xccd285.openPop({
        class: _0x5afea9
      });
    }
    openTeam() {
      _0xc96d09.playSound("click");
      if (_0x5d2800.User.mode == 0) {
        _0xccd285.openPop({
          class: _0x5d1643
        });
        return;
      }
      _0x5d2800.guide ? _0xccd285.openView({
        class: _0x177791,
        data: {
          lv: 1
        }
      }) : _0xccd285.openPop({
        class: _0x4cda1c
      });
    }
    openSingle() {
      _0xc96d09.playSound("click");
      if (_0x5d2800.User.mode == 0) {
        _0xccd285.openPop({
          class: _0x14a3f9
        });
        return;
      }
      _0x5d2800.guide ? _0xccd285.openView({
        class: _0x177791,
        data: {
          lv: 1
        }
      }) : _0xccd285.openView({
        class: _0x276be6
      });
    }
    inviteTeamLog() {
      _0x45ad64.inviteTeamLog({}, _0x344eeb => {
        if (_0x344eeb.code == 200) {
          for (let _0x450c7c = 0; _0x450c7c < _0x344eeb.data.length; _0x450c7c++) {
            _0x344eeb.data[_0x450c7c].status == 1 && _0xccd285.openPop({
              class: _0x11d50e,
              data: _0x344eeb.data[_0x450c7c]
            });
          }
        }
      });
    }
    loadMode() {
      this.singleBtn.visible = _0x5d2800.User.mode == 1 || _0x5d2800.User.mode == 0;
      this.teamBtn.visible = _0x5d2800.User.mode == 2 || _0x5d2800.User.mode == 0;
    }
    getQuest() {
      _0x45ad64.getQuest({}, _0x291994 => {
        if (_0x291994.code == 200) {
          for (let _0x4f27e6 = 0; _0x4f27e6 < _0x291994.data.length; _0x4f27e6++) {
            _0x5d2800.Quest.push(this.handleOuest(_0x291994.data[_0x4f27e6]));
          }
        }
      });
    }
    handleOuest(_0x1b8f02) {
      let _0x58523f = {
        title: _0x1b8f02.title,
        option: []
      };
      if (_0x1b8f02.A) {
        _0x58523f.option.push(_0x1b8f02.A);
      }
      if (_0x1b8f02.B) {
        _0x58523f.option.push(_0x1b8f02.B);
      }
      if (_0x1b8f02.C) {
        _0x58523f.option.push(_0x1b8f02.C);
      }
      _0x58523f.right = _0x1b8f02.answer == "A" ? 0 : _0x1b8f02.answer == "B" ? 1 : 2;
      return _0x58523f;
    }
  }
  class _0x2fb508 extends _0x34f04f {
    constructor() {
      super();
    }
    onAwake() {
      this.video = new Laya.Video(Laya.stage.width, Laya.stage.height);
      Laya.stage.addChild(this.video);
    }
    onOpen() {
      this.sureBtn.on(Laya.Event.CLICK, this, this.openVideo);
    }
    onClose() {
      this.sureBtn.off(Laya.Event.CLICK, this, this.openVideo);
    }
    onEnable() {
      this.onResize();
      this.video.on("ended", this, this.onPlayOver);
      this.video.load("https://jizhigame.oss-cn-beijing.aliyuncs.com/comp/startVideo.mp4");
    }
    onResize() {
      this.size(Laya.stage.width, Laya.stage.height + 2);
      this.video.x = (Laya.stage.width - this.video.width) / 2;
      this.video.y = (Laya.stage.height - this.video.height) / 2;
    }
    openVideo() {
      let _0xe5d037 = parseInt(Laya.LocalStorage.getItem("bgm")) || 1;
      _0xc96d09.stopMusic("bgm" + _0xe5d037);
      _0xc96d09.playSound("click");
      this.video.play();
    }
    onDisable() {
      this.video && (this.video.removeSelf(), this.video.off("ended", this, this.onPlayOver), this.video.pause(), this.video.destroy(true));
    }
    onPlayOver() {
      this.video.play();
    }
  }
  class _0x4b9e8b extends _0x562e9d {
    constructor() {
      super();
      this.barImg.scrollRect = new Laya.Rectangle(0, 0, 0, this.barImg.height);
    }
    onAwake() {
      this.bg1.height = Laya.stage.height;
    }
    getDayStartTimestamp(_0x8f6f27, _0x537306, _0x4658e6) {
      const _0x360b8d = new Date(_0x8f6f27, _0x537306 - 1, _0x4658e6, 0, 0, 0, 0);
      return _0x360b8d.getTime();
    }
    onOpen() {
      let _0x76af61 = new Date().getTime(),
        _0xbb9ba9 = this.getDayStartTimestamp("2025", "10", "1");
      this.bg1.visible = _0x76af61 < _0xbb9ba9;
      this.bg2.visible = _0x76af61 >= _0xbb9ba9;
      this.startBtn.visible = false;
      this.pro.visible = false;
      if (!_0x5d2800.Test) {
        let _0x20c728 = this.GetQueryString("u");
        if (_0x20c728) {
          let _0x420019 = _0xa226b8.jiemi(_0x20c728);
          _0x5d2800.userInfo = _0x420019.user || 0;
          _0x5d2800.invite_id = _0x420019.invite_id || 0;
          _0x5d2800.team_id = _0x420019.team_id || 0;
          if (_0x420019.user == 2) {
            _0xccd285.openPop({
              class: _0x2fb508
            });
            return;
          }
        }
        if (!_0x5d2800.userInfo) {
          let _0x5385ed = "invite_id=" + _0x5d2800.invite_id + "&team_id=" + _0x5d2800.team_id,
            _0x41626c = _0xa226b8.encrypt(JSON.stringify(_0x5385ed), _0xa226b8.key, _0xa226b8.iv);
          window.location.href = "https://jizhibao.wxgame666.cn/home/Login/login?data=" + _0x41626c;
          return;
        }
      }
      this.startBtn.on(Laya.Event.CLICK, this, this.startGame);
      _0xccd285.on("1010", this, this.countBack);
      this.logo.scale(0, 0);
      this.logoTween();
      !_0x48941d.progress && (this.pro.visible = true, this.startLoad());
    }
    onClose() {
      Laya.Tween.clearAll(this.logo);
      this.startBtn.off(Laya.Event.CLICK, this, this.startGame);
      _0xccd285.off("1010", this, this.countBack);
    }
    startLoad() {
      Laya.loader.load(_0x48941d.resArr, Laya.Handler.create(this, this.onLoadOver), Laya.Handler.create(this, this.updateProgress, null, false));
    }
    updateProgress(_0x5ba9b2) {
      _0x48941d.progress = _0x5ba9b2;
      this.barImg.scrollRect.width = _0x5ba9b2 * this.barImg.width;
      this.proTxt.text = Math.floor(_0x5ba9b2 * 100) + "%";
      this.baozi.x = _0x5ba9b2 * this.barImg.width;
    }
    onLoadOver() {
      _0x48941d.progress = 1;
      let _0x12e2f0 = parseInt(Laya.LocalStorage.getItem("bgm")) || 1;
      _0xc96d09.musicOn && _0xc96d09.playMusic("bgm" + _0x12e2f0);
      this.pro.visible = false;
      this.startBtn.visible = true;
    }
    GetQueryString(_0x9c2434) {
      var _0x21bd83 = window.location.search.substring(1),
        _0x573c5f = _0x21bd83.split("&");
      for (var _0x498794 = 0; _0x498794 < _0x573c5f.length; _0x498794++) {
        var _0x2bf193 = _0x573c5f[_0x498794].split("=");
        if (_0x2bf193[0] == _0x9c2434) {
          return _0x2bf193[1];
        }
      }
      return false;
    }
    startGame() {
      this.getUserInfo();
    }
    tipFun() {
      _0xccd285.showTip("当前人数过多，请稍后尝试");
      Laya.timer.clear(this, this.tipFun);
    }
    countBack(_0x34893f) {
      Laya.timer.clear(this, this.tipFun);
      if (parseInt(_0x34893f) >= _0x5d2800.defaultCount) {
        _0xccd285.showTip("当前人数过多，请稍后尝试");
        return;
      }
      this.getUserInfo();
    }
    getUserInfo() {
      _0x45ad64.userInfo({}, _0x589fce => {
        _0x589fce.code == 200 ? (_0x5d2800.User = _0x589fce.data, _0x5d2800.guide = _0x5d2800.User.is_xin == 0, _0xccd285.backHome({
          class: _0x5c3ddc
        })) : _0xccd285.showTip(_0x589fce.msg);
      });
      _0x3d7fd4.shareFun(1);
    }
    logoTween() {
      Laya.Tween.to(this.logo, {
        scaleX: 1,
        scaleY: 1
      }, 500, Laya.Ease.backInOut, Laya.Handler.create(this, () => {}));
    }
  }
  class _0x33d3e1 {
    constructor() {
      Config.useWebGL2 = false;
      Config.isAntialias = true;
      if (window.Laya3D) {
        Laya3D.init(_0x2dd7fd.width, _0x2dd7fd.height);
      } else {
        Laya.init(_0x2dd7fd.width, _0x2dd7fd.height, Laya.WebGL);
      }
      Laya.Physics && Laya.Physics.enable();
      Laya.DebugPanel && Laya.DebugPanel.enable();
      Laya.stage.scaleMode = _0x2dd7fd.scaleMode;
      Laya.stage.screenMode = _0x2dd7fd.screenMode;
      Laya.stage.alignV = _0x2dd7fd.alignV;
      Laya.stage.alignH = _0x2dd7fd.alignH;
      Laya.URL.exportSceneToJson = _0x2dd7fd.exportSceneToJson;
      if (_0x2dd7fd.debug || Laya.Utils.getQueryString("debug") == "true") {
        Laya.enableDebugPanel();
      }
      if (_0x2dd7fd.physicsDebug && Laya.PhysicsDebugDraw) {
        Laya.PhysicsDebugDraw.enable();
      }
      if (_0x2dd7fd.stat) {
        Laya.Stat.show();
      }
      !_0x5d2800.Test && (Laya.URL.basePath = "https://jizhigame.oss-cn-beijing.aliyuncs.com/");
      Laya.stage.bgColor = "#fff";
      Laya.ResourceVersion.enable("version-a40848b63e.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
      _0xccd285.init(Laya.stage);
      _0xc96d09.getLocalSet();
    }
    onVersionLoaded() {
      Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    }
    onConfigLoaded() {
      Laya.loader.load(_0x48941d.loadArr, Laya.Handler.create(this, this.onUIOver));
    }
    onUIOver() {
      Laya.Scene.setUIMap("ui.json");
      _0xccd285.openView({
        class: _0x4b9e8b
      });
      Laya.loader.load(_0x48941d.gameArr);
      _0x45ad64.count({}, _0x5abcd1 => {
        _0x5abcd1.code == 200 && (_0x5d2800.defaultCount = _0x5abcd1.data);
      });
    }
    onSocketMgr(_0x5486be) {
      switch (_0x5486be.type) {
        case "open":
          break;
        case "close":
          break;
      }
    }
  }
  new _0x33d3e1();
})();