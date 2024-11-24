//Sun Nov 24 2024 06:33:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function () {
  var f = function () {
    return (() => {
      var i = {
          80620: (m, q, u) => {
            'use strict';

            Object.defineProperty(q, "__esModule", {
              value: !0
            });
            q.default = void 0;
            var v = x($app_require$("@app-module/service.ad")),
              w = x($app_require$("@app-module/system.device"));
            function x(E) {
              return E && E.__esModule ? E : {
                default: E
              };
            }
            function y(E, F) {
              var G = Object.keys(E);
              if (Object.getOwnPropertySymbols) {
                var H = Object.getOwnPropertySymbols(E);
                F && (H = H.filter(function (I) {
                  return Object.getOwnPropertyDescriptor(E, I).enumerable;
                }));
                G.push.apply(G, H);
              }
              return G;
            }
            function z(E) {
              for (var F = 1; F < arguments.length; F++) {
                var G = null != arguments[F] ? arguments[F] : {};
                F % 2 ? y(Object(G), !0).forEach(function (H) {
                  A(E, H, G[H]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(G)) : y(Object(G)).forEach(function (H) {
                  Object.defineProperty(E, H, Object.getOwnPropertyDescriptor(G, H));
                });
              }
              return E;
            }
            function A(E, F, G) {
              F in E ? Object.defineProperty(E, F, {
                value: G,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : E[F] = G;
              return E;
            }
            const B = {
                public: {
                  jumpPage: "",
                  bookId: "",
                  chapterId: "",
                  channelCode: "",
                  userSource: "",
                  notice: 0,
                  shareKey: "",
                  source: "",
                  back_name: "",
                  back_url: "",
                  back_pkg: "",
                  adview_param: "",
                  startPageSource: "",
                  sceneid: "",
                  userId: "",
                  transitionlink: "",
                  isShowKaiping: !1,
                  urlParams: "",
                  hapType: "",
                  source_channel_id: ""
                },
                private: {
                  dialogShow: !1,
                  defaultBookId: "825500002",
                  signTextValue: "",
                  webShow: !1,
                  webUrlv1: "",
                  myString: "JlPoReXvMbFrszDbzNCbB==++//**"
                },
                onInit(E) {
                  this.urlParams = E;
                  this.$app.sensorsTrack("quickapp_monitor_link", z(z({}, this.urlParams), {}, {
                    urlParams: JSON.stringify(this.urlParams)
                  }));
                  this.$app.$def.data.isAdShowTime = Date.now();
                  this.initData();
                  this.jumpPage && this.initFn();
                  this.initXieyiDialog();
                },
                onShow() {
                  if (u.g.sensors.pageShow(), this.webShow) {
                    let E = "haijz" === this.$app.$def.data.commonParams.appname ? "/JzHome" : "/Page_Home";
                    u.g.$utils.router.replace({
                      uri: E
                    });
                  }
                },
                onHide() {
                  u.g.page.onHide(this);
                },
                onBackPress() {
                  this.getNetwork();
                  return !0;
                },
                async getNetwork() {
                  let E;
                  setTimeout(() => {
                    E || this.$app.exit();
                  }, 500);
                  E = await u.g.$utils.networkGetType();
                  "none" === E && this.$app.exit();
                },
                async initData() {
                  this.initUserId();
                  this.initChannelCode();
                  this.initIsPulled();
                  this.appGetInfo();
                  this.source_channel_id || (this.source_channel_id = this.$app.$def.data.channelCode);
                  u.g.sensors.registerApp({
                    start_promotion_channel: this.source_channel_id
                  });
                  let E = {
                    start_status: "开始",
                    hapType: "" + this.hapType,
                    single_day_number: this.$app.$def.data.givenDayPurchaseNumber
                  };
                  this.jumpPage && (await this.userGivenDayPurchaseNumber(), this.startPageSource && "H5" === this.startPageSource || this.$app.sensorsTrack("quickAppStart", E), "newWelfare" !== this.jumpPage && "newWelfareTwo" !== this.jumpPage || (u.g.$utils.reloadSingleAllAd(this.$app), u.g.$utils.reloadRewardAd(this.$app, this, "GG-302")));
                  this.startPageSource && "H5" === this.startPageSource && (E.page_source = "落地页", E.single_day_number = this.$app.$def.data.givenDayPurchaseNumber, this.$app.sensorsTrack("quickAppStart", E));
                  let F = this.$app.$def.data.commonParams.appname && this.$app.$def.data.commonParams.appname.toUpperCase();
                  "XDMFTSH" === F && (F = "XIADU");
                  this.saveUrlParams();
                  this.$app.setCommonParams("sceneid", this.sceneid);
                  this.chooseAdSpace();
                  this.$app.$def.data.isShowKaiping = this.isShowKaiping;
                },
                async userGivenDayPurchaseNumber() {
                  let E = u.g.$utils.timestampToDay(new Date().getTime()),
                    F = await u.g.$utils._getStorage("given_day_number"),
                    G = !0;
                  F && (F = JSON.parse(F), F.time === E && (F.num = ++F.num, G = !1));
                  G && (F = {
                    time: E,
                    num: 1
                  });
                  this.$app.$def.data.givenDayPurchaseNumber = F.num;
                  u.g.$utils.setStorage("given_day_number", F);
                  this.userGivenDayPushNumber();
                },
                async userGivenDayPushNumber() {
                  u.g.$utils.timestampToDay(new Date().getTime());
                  let E = await u.g.$utils._getStorage("given_day_ad_show_number");
                  this.$app.$def.data.adShowNumber = E;
                },
                initUserId() {
                  this.$app.$def.data.userId = "";
                },
                initSignTextValue() {
                  let E = u.g.$utils.timestampToCurrentDate(Date.now()),
                    F = this.$app.$def.data.userId;
                  this.signTextValue = "" + E + F.substr(F.length - 8);
                },
                async initChannelCode() {
                  let E = "0001";
                  if (this.channelCode) {
                    E = this.channelCode;
                  } else {
                    let F = await u.g.$utils._getStorage("channelCode");
                    F && (E = F);
                  }
                  this.$app.$def.data.channelCode = E;
                  this.$app.setCommonParams("channelCode", E);
                },
                initIsPulled() {
                  this.jumpPage || this.bookId ? u.g.dataSpace.is_pulled = !0 : u.g.dataSpace.is_pulled = !1;
                  u.g.sensors.registerApp({
                    is_pulled: u.g.dataSpace.is_pulled
                  });
                },
                initKaiPing() {
                  if ("oppo" !== this.$app.$def.data.ad.adProvider) {
                    return;
                  }
                  let E = u.g.$utils.getAdConfig(this, "239", "String").split(","),
                    F = !this.channelCode || !E.includes(this.channelCode);
                  v.default.setSplashAdSwitch({
                    switch: F
                  });
                  v.default.splashAdSwitch({
                    success: G => {
                      this.$app && this.$app.sensorsTrack("systemAdOpen", {
                        status: G ? "开启" : "关闭"
                      });
                    }
                  });
                },
                appGetInfo() {
                  this.$app.$def.data.appInfo = u.g.$utils.appGetInfo();
                  let E = "";
                  this.$app.$def.data.appInfo.source && this.$app.$def.data.appInfo.source.packageName && (E = this.$app.$def.data.appInfo.source.packageName);
                  u.g.sensors.registerApp({
                    $source_package_name: E
                  });
                },
                async initXieyiDialog() {
                  if (this.jumpPage) {
                    this.dialogShow = !1;
                    u.g.$utils.setStorage("dialog_xieyi", 1);
                  } else {
                    let E = await u.g.$utils._getStorage("dialog_xieyi");
                    Number(E) ? (this.dialogShow = !1, this.initFn()) : this.dialogShow = !0;
                  }
                },
                emit_cmp_xieyi_dialog(E) {
                  switch (this.dialogShow = !1, E.detail.emitCode) {
                    case "emit_exit":
                      this.$app.exit();
                      break;
                    case "emit_confirm":
                      this.initFn();
                  }
                },
                initFn() {
                  this.stepOne();
                },
                saveUrlParams() {
                  let E = {
                    notice: this.notice,
                    jumpPage: this.jumpPage,
                    bookId: this.bookId,
                    chapterId: this.chapterId,
                    channelCode: this.channelCode,
                    userSource: this.userSource,
                    shareKey: this.shareKey,
                    promotionSource: this.source || "",
                    adview_param: this.adview_param
                  };
                  this.$app.$def.data.urlParam = E;
                  this.shareKey && u.g.$utils.setStorage("shareKey", this.shareKey);
                },
                chooseAdSpace() {
                  let E;
                  E = u.g.dataSpace.is_pulled ? {
                    "开屏": "GG-301",
                    "激励视频": "GG-302",
                    "底通-翻页": "GG-304",
                    "融合信息流-翻页": "GG-306",
                    "退出阅读器-翻页": "GG-308",
                    "退出应用": "GG-309",
                    "切屏": "GG-310",
                    "插屏": "GG-312",
                    "章首": "GG-313",
                    "蒙版误触": "GG-314",
                    "自启动插屏": "GG-315",
                    "播放器-顶部": "GG-316",
                    "阅读器退出按钮蒙版319": "GG-319",
                    "阅读器退出插屏": "GG-320",
                    "退出应用按钮蒙版323": "GG-323",
                    "重复展示": "GG-326",
                    "厂商插屏": "GG-327",
                    "自渲染插屏": "GG-328",
                    "福利页广告": "GG-329",
                    "福利页广告2": "GG-330",
                    "福利页广告3": "GG-331",
                    "福利页广告4": "GG-332",
                    "福利页广告5": "GG-333",
                    "无网络页面": "GG-334",
                    "福利页广告X": "GG-335",
                    "签到-底通": "GG-339",
                    "签到-插页": "GG-340",
                    "开屏蒙版": "GG-341",
                    "退出阅读器蒙层": "GG-343",
                    "退出应用蒙层": "GG-344",
                    "解锁插屏1": "GG-347",
                    "解锁插屏2": "GG-348",
                    "摇一摇链路01": "GG-349",
                    "摇一摇链路02": "GG-350"
                  } : {
                    "开屏": "GG-201",
                    "激励视频": "GG-202",
                    "底通-翻页": "GG-204",
                    "融合信息流-翻页": "GG-206",
                    "退出阅读器-翻页": "GG-208",
                    "退出应用": "GG-209",
                    "切屏": "GG-210",
                    "插屏": "GG-212",
                    "章首": "GG-213",
                    "自启动插屏": "GG-215",
                    "播放器-顶部": "GG-216",
                    "福利页广告": "GG-229",
                    "福利页广告2": "GG-230",
                    "福利页广告3": "GG-231",
                    "签到-底通": "GG-239",
                    "签到-插页": "GG-240"
                  };
                  this.$app.$def.data.adSpace = E;
                },
                getProvider() {
                  let E = v.default.getProvider();
                  E && (E = E.toLowerCase(), this.$app.$def.data.ad.adProvider = E, this.checkAdVersion(E), -1 !== E.toLowerCase().indexOf("oppo") && this.$app.$def.data.deviceInfo.platformVersionCode >= 1110 && $app_require$("@app-module/service.ad").setKeyWords({
                    transportData: this.$app.$def.data.channelCode
                  }), "huawei" === E && this.$app.$def.topon_sdk_instance && this.$app.$def.topon_sdk_instance.setChannel(this.$app.$def.data.channelCode));
                },
                checkAdVersion(E) {
                  let F = this.$app.$def.data;
                  "vivo" === E && F.deviceInfo.platformVersionCode >= 1094 ? this.$app.$def.data.ad.nativeAdVersion = "vivo_v2" : "oppo" === E && F.deviceInfo.platformVersionCode >= 1091 ? this.$app.$def.data.ad.nativeAdVersion = "oppo_v2" : "huawei" === E && F.deviceInfo.platformVersionCode >= 1101 ? this.$app.$def.data.ad.nativeAdVersion = "huawei_agd" : "xiaomi" === E && w.default && w.default.host && w.default.host.versionCode >= 11030201 ? this.$app.$def.data.ad.nativeAdVersion = "xiaomi_v2" : this.$app.$def.data.ad.nativeAdVersion = "native_v1";
                },
                setShortcutHints(E) {
                  if (!E) {
                    return;
                  }
                  let F = {};
                  for (const G of E) F[G.placeId] = G;
                  this.$app.$def.data.shortcutHints = F;
                },
                async setAdConfig(E) {
                  if (this.$app, !E) {
                    return;
                  }
                  let {
                    adConfig: F,
                    shieldAd: G,
                    customAd: H,
                    promotionChannels: I,
                    cnidInfo: J,
                    adSource: K,
                    adSourceInfo: L,
                    adCopywriter: M,
                    isHotDog: N,
                    relations: O,
                    configHomepageAdimages: P,
                    eventReport: Q
                  } = E;
                  if (F && F.length) {
                    let T = {};
                    for (const U of F) T[U.placeId] = U;
                    this.$app.$def.data.ad.adConfig = T;
                  }
                  if (this.$app.$def.data.eventReport = Q, u.g.sensors.registerApp({
                    exp: Q ? "1" : "0"
                  }), this.initKaiPing(), G && G.manus) {
                    let V = G.manus.split(",");
                    this.$app.$def.data.ad.adShield.manufacturer = V;
                    this.$app.$def.data.ad.adShield.version = G.version;
                  }
                  if (H && H.length && (this.$app.$def.data.ad.customAd = H), I && I.length && (this.$app.$def.data.ad.promotionChannels = I), J) {
                    u.g.sensors.registerApp({
                      cooperator: J.cooperator
                    });
                    this.$app.$def.data.cnidInfo = J;
                    let W = Number(J.baseData);
                    W > 0 && (this.$app.$def.data.callbackTime = W, u.g.$utils.callbackTimeFn(!0, this));
                  }
                  let R = u.g.$utils.getAdConfig(this, "258", "String").split(","),
                    S = this.$app.$def.data.appInfo && this.$app.$def.data.appInfo.source;
                  if (R && R.length && S && R.includes(S.packageName) && (this.$app.$def.data.is_from_lock_screen = !0), this.$app.$def.data.is_support_mistake_click = !!K, this.$app.$def.data.is_support_mistake_click || this.$app.sensorsTrack("why_mistake_is_false", {
                    reason: "服务端adSource返回为false"
                  }), this.$app.$def.data.isHotDog = N || "", this.$app.$def.data.relations = O || [], this.$app.$def.data.welfareBackImageList = P && P.length ? P : [{
                    backgroundUrl: "http://images-pro.cread.com/images/bookstore-lightapp/20240126133809664.png",
                    windowUrl: "http://images-pro.cread.com/images/bookstore-lightapp/20240126133836274.png",
                    buttonUrl: "http://images-pro.cread.com/images/bookstore-lightapp/20240126133857358.png"
                  }, {
                    backgroundUrl: "http://images-pro.cread.com/images/bookstore-lightapp/20240126133823909.png",
                    windowUrl: "http://images-pro.cread.com/images/bookstore-lightapp/20240126133847034.png",
                    buttonUrl: "http://images-pro.cread.com/images/bookstore-lightapp/20230703172835804.png"
                  }], this.$app.$def.data.is_support_mistake_click) {
                    let X = u.g.$utils.getAdConfig(this, "241", "String").split(",");
                    X.length && X.forEach(Y => {
                      let Z = Y.split("&"),
                        a0 = this.$app.$def.data.appInfo && this.$app.$def.data.appInfo.source,
                        a1 = this.$app.$def.data.ad.adProvider;
                      a0 && a0.packageName === Z[0] && (Z.length > 1 && Z.includes(a1) || Z.length <= 1) && (this.$app.$def.data.is_support_mistake_click = !1, this.$app.sensorsTrack("why_mistake_is_false", {
                        reason: "来源包名为配置241敏感应用--" + a0.packageName
                      }));
                    });
                  }
                  if (this.$app.$def.data.is_support_mistake_click && "xiaomi" === this.$app.$def.data.ad.adProvider && this.$app.$def.data.deviceInfo && -1 !== this.$app.$def.data.deviceInfo.model.toLowerCase().indexOf("mix") && (this.$app.$def.data.is_support_mistake_click = !1, this.$app.sensorsTrack("why_mistake_is_false", {
                    reason: "小米MIX机型"
                  })), this.$app.$def.data.is_support_mistake_click) {
                    let Y = ["OPPO Find N2", "OPPO Find N", "vivo X Fold2", "vivo X Flip", "ALT-AL10", "BRA-AL00", "ALN-AL80", "ALN-AL00", "ALN-AL10", "ALN-AL10", "ALT-AL00", "TET-AN00", "NEO-AL00", "CET-AL00", "DCO-AL00", "DCO-AL00", "CET-AL60"],
                      Z = this.$app.$def.data.deviceInfo && this.$app.$def.data.deviceInfo.model;
                    "oppo" === this.$app.$def.data.ad.adProvider && (Z = "OPPO " + Z);
                    Y.forEach(a0 => {
                      Z === a0 && (this.$app.$def.data.is_support_mistake_click = !1, this.$app.sensorsTrack("why_mistake_is_false", {
                        reason: "OVH高端机型--" + a0
                      }));
                    });
                  }
                  if (this.$app.$def.data.is_support_mistake_click && u.g.$utils.getAdConfig(this, "249", "Boolean")) {
                    let a0 = await u.g.$utils.getBatteryInfo();
                    a0 && a0.charging && 1 == a0.level && (this.$app.$def.data.is_support_mistake_click = !1, this.$app.sensorsTrack("why_mistake_is_false", {
                      reason: "配置249满电且充电状态"
                    }));
                  }
                  if (this.$app.$def.data.is_support_mistake_click) {
                    let a1 = u.g.$utils.getAdConfig(this, "240", "String").split(",");
                    this.channelCode && a1.includes(this.channelCode) && (this.$app.$def.data.is_support_mistake_click = !1, this.$app.sensorsTrack("why_mistake_is_false", {
                      reason: "配置240渠道号--" + this.channelCode
                    }));
                  }
                  this.$app.$def.data.is_support_mistake_click && (await u.g.$utils.setHideCountFn(this));
                  L && (L = JSON.parse(L), this.$app.$def.data.market_name_source = L.market_name, "huawei" === this.$app.$def.data.ad.adProvider && -1 !== ["hzs", "mfhzs"].indexOf(this.$app.$def.data.commonParams.appname) && (this.$app.$def.data.is_from_huawei = "HUAWEI" === this.$app.$def.data.market_name_source), L.market_account_id && u.g.sensors.registerApp({
                    market_account_id: L.market_account_id
                  }), L.market_campaign_id && u.g.sensors.registerApp({
                    market_campaign_id: L.market_campaign_id
                  }), L.market_ad_id && u.g.sensors.registerApp({
                    market_ad_id: L.market_ad_id
                  }), L.market_creative_id && u.g.sensors.registerApp({
                    market_creative_id: L.market_creative_id
                  }));
                  M && (this.$app.$def.data.ad.adCopywriter = M);
                },
                checkAdOpen() {
                  if (this.$app.$def.data.appInfo || (this.$app.$def.data.appInfo = u.g.$utils.appGetInfo()), u.g.dataSpace.is_pulled) {
                    return void (this.$app.$def.data.ad.open = !0);
                  }
                  let E = this.$app.$def.data;
                  if (u.g.$utils.versionStringToNumber(E.appInfo.versionName) >= u.g.$utils.versionStringToNumber(E.ad.adShield.version)) {
                    for (const F of E.ad.adShield.manufacturer) void 0 !== E.deviceInfo.manufacturer && F === E.deviceInfo.manufacturer.toLowerCase() && (this.$app.$def.data.ad.open = !1);
                  }
                },
                async stepOne_deviceGetInfo() {
                  try {
                    let E = await u.g.$utils.deviceGetInfo();
                    this.$app.$def.data.deviceInfo = E;
                    E.manufacturer && this.$app.setCommonParams("manufacturer", E.manufacturer.toLowerCase());
                    u.g.sensors.registerApp({
                      platformVersionCode: E.platformVersionCode
                    });
                  } catch (F) {}
                },
                async stepOne_deviceGetId() {
                  try {
                    let E = await u.g.$utils.deviceGetId();
                    201 === E ? u.g.sensors.registerApp({
                      has_device_id: !1
                    }) : (this.$app.$def.data.deviceId = z(z({}, this.$app.$def.data.deviceId), E), E.device && 15 === E.device.length && this.$app.setCommonParams("imei", E.device), E.mac && this.$app.setCommonParams("mac", E.mac), u.g.sensors.registerApp({
                      has_device_id: !0
                    }));
                  } catch (F) {}
                },
                async stepOne_deviceGetOAID() {
                  try {
                    let E = await u.g.$utils.deviceGetOAID();
                    E && E.oaid && (this.$app.$def.data.deviceId = z(z({}, this.$app.$def.data.deviceId), {}, {
                      oaid: E.oaid
                    }), this.$app.setCommonParams("oaid", E.oaid), u.g.sensors.registerApp({
                      oaid: E.oaid
                    }));
                  } catch (F) {}
                },
                stepOne() {
                  Promise.all([this.stepOne_deviceGetInfo(), this.stepOne_deviceGetId(), this.stepOne_deviceGetOAID(), this.stepTwo_getUserInfo()]).then(E => {
                    "Array" === u.g.$utils.isType(E) && (this.getProvider(), this.getAdminConfig(), this.$app.getAdsNew());
                  }).catch(E => {
                    this.routeFn();
                    u.g.sensors.track("quickAppError", {
                      details: JSON.stringify(E)
                    });
                  });
                },
                async stepTwo_getUserInfo() {
                  try {
                    let E = await u.g.$utils._getStorage("userId");
                    if (E) {
                      let G = await u.g.$apis.user.getUserInfo({
                        userId: E
                      });
                      if (G) {
                        let {
                          code: H,
                          data: I
                        } = G;
                        if ("20060315186133" === E && (H = 400), 200 === H || 0 === H && I && I.user) {
                          return void this.setUser(I.user);
                        }
                      }
                    }
                    let F = await u.g.sensors.store.getDistinctId();
                    if (F) {
                      let J = "书友";
                      "haijz" === this.$app.$def.data.commonParams.appname ? J = "记账" : "fqcy" === this.$app.$def.data.commonParams.appname ? J = "成语" : "magicbox" === this.$app.$def.data.commonParams.appname && (J = "用户");
                      this.setUser({
                        unionid: F,
                        coin: 0,
                        userCash: 0,
                        isVip: 0,
                        integral: 0,
                        nickName: "" + J + F.substr(F.length - 4)
                      });
                    } else {
                      this.$app.setCommonParams("userId", E);
                      this.$app.setCommonParams("channelCode", this.$app.$def.data.channelCode);
                    }
                  } catch (K) {}
                },
                setUser(E) {
                  this.$app.$def.data.userId = E.unionid;
                  this.initSignTextValue();
                  this.$app.$def.data.userInfo = E;
                  this.$app.setCommonParams("userId", E.unionid);
                },
                getAdminConfig() {
                  let E = this.$app.$def.data.commonParams.appname && this.$app.$def.data.commonParams.appname.toUpperCase();
                  "XDMFTSH" === E && (E = "XIADU");
                  u.g.$apis.others.getClipboard(E, z(z({}, this.$app.$def.data.commonParams), {}, {
                    urlParams: encodeURIComponent(JSON.stringify(this.urlParams))
                  }));
                  u.g.$apis.others.getNewConfig(z(z({}, this.$app.$def.data.commonParams), {}, {
                    adImageConfigNew: 1
                  })).then(F => {
                    if (F) {
                      let {
                        code: G,
                        data: H
                      } = F;
                      0 === G ? (this.myString = this.myString.slice(10, 23), H = JSON.parse(u.g.$utils.decryptByDES(H, this.myString)), this.setShortcutHints(H.copywriterConfig), this.setAdConfig(H), this.checkAdOpen(), this.routeFn()) : this.routeFn();
                    } else {
                      this.routeFn();
                    }
                  }).catch(F => {
                    this.routeFn();
                    u.g.sensors.track("quickAppError", {
                      details: JSON.stringify(F)
                    });
                  });
                },
                async routeFn() {
                  if (await u.g.$utils.shortcutHasInstalled()) {
                    let F = await u.g.$utils._getStorage("read_time_today"),
                      G = u.g.$utils.getAdConfig(this, "243", "Number");
                    if (F && G) {
                      F = JSON.parse(F);
                      let H = new Date().Format("yyyy-MM-dd");
                      F[H] && F[H].readTime / 60000 > G && (this.$app.$def.data.ad.open = !1, this.$app.$def.data.is_support_mistake_click = !1, this.$app.sensorsTrack("why_mistake_is_false", {
                        reason: "配置243满足阅读时长"
                      }));
                    }
                  }
                  if (u.g.$utils.router.clear(), u.g.dataSpace.is_pulled) {
                    let I = await u.g.$utils._getStorage("install_test_app"),
                      J = u.g.$utils.getAdConfig(this, "251", "String") + u.g.$utils.getAdConfig(this, "335", "String");
                    I && J && -1 !== J.indexOf(I) && (this.$app.$def.data.is_support_mistake_click = !1, this.$app.sensorsTrack("why_mistake_is_false", {
                      reason: "手机安装本地缓存敏感应用--" + I
                    }), u.g.sensors.registerApp({
                      is_support_mistake_click: !1
                    }));
                    let K = this.$app,
                      L = this;
                    try {
                      if (this.$app.$def.data.is_support_mistake_click) {
                        let M = u.g.$utils.getAdConfig(this, "335", "String");
                        if (M && "0" !== M) {
                          let N;
                          if (-1 !== M.indexOf(",")) {
                            if (N = M.split(","), N && N.length) {
                              for (let O = 0; O < N.length; O++) {
                                let P = N[O].split("-");
                                if (P[0] === K.$def.data.ad.adProvider && (await u.g.$utils.pkgHasInstalled(P[1]))) {
                                  K.$def.data.is_support_mistake_click = !1;
                                  K.sensorsTrack("why_mistake_is_false", {
                                    reason: "手机安装配置335敏感应用--" + P[1]
                                  });
                                  u.g.$utils.setStorage("install_test_app", P[1]);
                                  return void L.toTeader();
                                }
                              }
                            }
                          } else {
                            N = M;
                            let Q = N.split("-");
                            if (Q[0] === K.$def.data.ad.adProvider && (await u.g.$utils.pkgHasInstalled(Q[1]))) {
                              K.$def.data.is_support_mistake_click = !1;
                              K.sensorsTrack("why_mistake_is_false", {
                                reason: "手机安装配置335敏感应用--" + Q[1]
                              });
                              u.g.$utils.setStorage("install_test_app", Q[1]);
                              return void L.toTeader();
                            }
                          }
                        }
                      }
                    } catch (R) {}
                    return void L.toTeader();
                  }
                  if (this.dialogShow) {
                    return;
                  }
                  if (this.$app.$def.data.ad.open) {
                    return void u.g.$utils.router.replace({
                      uri: "/ad_kaiping"
                    });
                  }
                  let E = "haijz" === this.$app.$def.data.commonParams.appname ? "/JzHome" : "/Page_Home";
                  u.g.$utils.router.replace({
                    uri: E
                  });
                },
                replaceUrlParam(E, F, G) {
                  for (var H = [], I = (E.split("?")[1] || "").split("&"), J = 0; J < I.length; J++) {
                    I[J].split("=")[0] === F ? H.push(F + "=" + G) : H.push(I[J]);
                  }
                  return E.split("?")[0] + "?" + H.join("&");
                },
                clickToB() {
                  let E = u.g.$utils.getAdConfig(this, "492", "String");
                  if (Math.random(), E) {
                    let F = Math.random();
                    E = this.replaceUrlParam(E, "random", "" + F);
                    this.webUrlv1 = E;
                    let G = "";
                    const H = {};
                    E.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (I, J, K) {
                      H[J] = decodeURIComponent(K);
                    });
                    G = H.channelCode;
                    u.g.$apis.others.hapCallback(G, F).then(I => {
                      E.includes("hap:") ? $app_require$("@app-module/nearme.browser").open({
                        url: E,
                        type: 1
                      }) : this.webShow = !0;
                    }).finally(() => {});
                  }
                },
                toTeader() {
                  u.g.sensors.registerApp({
                    is_support_mistake_click: this.$app.$def.data.is_support_mistake_click
                  });
                  let E = this.$app.$def.data.urlParam,
                    F = "";
                  if (F = 1 == E.notice ? "通知消息" : 2 == E.notice ? "push推送" : "deeplink", this.transitionlink && -1 !== this.transitionlink.indexOf("://")) {
                    return void u.g.$utils.router.replace({
                      uri: "/transition",
                      params: {
                        bookId: E.bookId || this.defaultBookId,
                        chapterId: E.chapterId || "",
                        transitionlink: this.transitionlink,
                        recommended_position_name: F
                      }
                    });
                  }
                  if ("newWelfareTwo" === this.jumpPage && u.g.$utils.getAdConfig(this, {
                    oppo: "353",
                    vivo: "352"
                  }[this.$app.$def.data.ad.adProvider], "Boolean") && (this.jumpPage = "newWelfare"), "newWelfareTwo" === this.jumpPage && this.$app.$def.data.is_support_mistake_click) {
                    this.$app.$def.data.is_from_huawei && (this.$app.$def.data.is_first_into_newWelfareTwo = !0);
                    return void u.g.$utils.router.replace({
                      uri: "/newWelfareTwo",
                      params: {
                        last_page: "启动页",
                        bookId: E.bookId || this.defaultBookId,
                        chapterId: E.chapterId || "",
                        recommended_plate_name: "",
                        recommended_page_name: "",
                        recommended_position_name: F,
                        recommended_position_id: ""
                      }
                    });
                  }
                  let G = u.g.$utils.getAdConfig(this, "500", "Number"),
                    H = !0;
                  G && this.$app.$def.data.adShowNumber > G && (H = !1);
                  let I = u.g.$utils.getAdConfig(this, "502", "Number");
                  if ("newWelfare" === this.jumpPage && this.$app.$def.data.is_support_mistake_click && H) {
                    return void u.g.$utils.router.replace({
                      uri: "/newWelfare",
                      params: {
                        last_page: "启动页",
                        bookId: E.bookId,
                        chapterId: E.chapterId || "",
                        recommended_plate_name: "",
                        recommended_page_name: "",
                        recommended_position_name: F,
                        recommended_position_id: "",
                        source_channel_id: "" + this.source_channel_id
                      }
                    });
                  }
                  if ("newWelfare" === this.jumpPage && this.$app.$def.data.is_support_mistake_click && !H && I) {
                    u.g.$utils.router.replace({
                      uri: "/newWelfare",
                      params: {
                        last_page: "启动页",
                        bookId: E.bookId,
                        chapterId: E.chapterId || "",
                        recommended_plate_name: "",
                        recommended_page_name: "",
                        recommended_position_name: F,
                        recommended_position_id: "",
                        source_channel_id: "" + this.source_channel_id
                      }
                    });
                    return void this.clickToB();
                  }
                  if ("readerTwo" === this.jumpPage && this.$app.$def.data.is_support_mistake_click) {
                    return void u.g.$utils.router.replace({
                      uri: "/readerTwo",
                      params: {
                        last_page: "启动页",
                        bookId: E.bookId || this.defaultBookId,
                        chapterId: E.chapterId || "",
                        recommended_plate_name: "",
                        recommended_page_name: "",
                        recommended_position_name: F,
                        recommended_position_id: ""
                      }
                    });
                  }
                  "readerFour" === this.jumpPage && this.$app.$def.data.is_support_mistake_click && (this.$app.$def.data.readerFour = !0);
                  let J = "novel" !== this.$app.$def.data.appType ? "haijz" === this.$app.$def.data.commonParams.appname ? "/JzHome" : "/Page_Home" : "/reader";
                  u.g.$utils.router.replace({
                    uri: J,
                    params: {
                      last_page: "启动页",
                      bookId: E.bookId || this.defaultBookId,
                      chapterId: E.chapterId || "",
                      recommended_plate_name: "",
                      recommended_page_name: "",
                      recommended_position_name: F,
                      recommended_position_id: ""
                    }
                  });
                }
              },
              C = B,
              D = ["public", "protected", "private"];
            if (C.data && D.some(function (E) {
              return C[E];
            })) {
              throw new Error("页面VM对象中的属性data不可与\"" + D.join(",") + "\"同时存在，请使用private替换data名称");
            }
            C.data || (C.data = {}, C._descriptor = {}, D.forEach(function (E) {
              const F = typeof C[E];
              if ("object" === F) {
                C.data = Object.assign(C.data, C[E]);
                for (const G in C[E]) C._descriptor[G] = {
                  access: E
                };
              } else {
                "function" === F && console.warn("页面VM对象中的属性" + E + "的值不能是函数，请使用对象");
              }
            }));
            q.default = B;
          },
          84375: (l, m, n) => {
            'use strict';

            Object.defineProperty(m, "__esModule", {
              value: !0
            });
            m.default = void 0;
            m.default = {
              props: {},
              onInit() {},
              emitFn(o) {
                let p;
                "exit" === o ? p = "emit_exit" : "confirm" === o && (p = "emit_confirm", n.g.$utils.setStorage("dialog_xieyi", "1"));
                this.$emit("emit_cmp_xieyi_dialog", {
                  emitCode: p,
                  data: {}
                });
              },
              routeFn(o) {
                switch (o) {
                  case "clause":
                    n.g.$utils.router.push({
                      uri: "/Page_Web",
                      params: {
                        url: this.$app.$data.userAgreement
                      }
                    });
                    break;
                  case "privacyPolicy":
                    n.g.$utils.router.push({
                      uri: "/Page_Web",
                      params: {
                        url: this.$app.$data.privacyPolicy
                      }
                    });
                }
              }
            };
          },
          81555: (l, m) => {
            'use strict';

            Object.defineProperty(m, "__esModule", {
              value: !0
            });
            m.default = void 0;
            m.default = {
              props: {
                signText: {
                  type: String,
                  default: ""
                }
              }
            };
          },
          90153: l => {
            l.exports = {
              ".iconfont": {
                fontFamily: "iconfont"
              },
              "@FONT-FACE": {
                grade: {
                  fontFamily: "grade",
                  src: ["/assets/styles/font/Bebas-Regular.ttf"],
                  fontName: "grade",
                  fontSrc: ["/assets/styles/font/Bebas-Regular.ttf"]
                },
                iconfont: {
                  fontFamily: "iconfont",
                  src: ["/assets/styles/font/iconfont.ttf"],
                  fontName: "iconfont",
                  fontSrc: ["/assets/styles/font/iconfont.ttf"]
                }
              },
              ".translate-up": {
                animationName: "translateup",
                animationDuration: "150ms"
              },
              ".translate-down": {
                animationName: "translatedown",
                animationDuration: "150ms"
              },
              "@KEYFRAMES": {
                translateup: [{
                  transform: "{\"translateY\":\"100px\"}",
                  time: 0
                }, {
                  transform: "{\"translateY\":\"0px\"}",
                  time: 100
                }],
                translatedown: [{
                  transform: "{\"translateY\":\"-100px\"}",
                  time: 0
                }, {
                  transform: "{\"translateY\":\"0px\"}",
                  time: 100
                }],
                show: [{
                  opacity: 0,
                  time: 0
                }, {
                  opacity: 1,
                  time: 100
                }],
                size: [{
                  transform: "{\"scaleX\":1,\"scaleY\":1}",
                  time: 0
                }, {
                  transform: "{\"scaleX\":0.9,\"scaleY\":0.9}",
                  time: 50
                }, {
                  transform: "{\"scaleX\":1,\"scaleY\":1}",
                  time: 100
                }]
              },
              ".animation-show": {
                animationName: "show",
                animationDuration: "150ms"
              },
              ".animation-show-newWelfareTwo": {
                animationName: "show",
                animationDuration: "800ms"
              },
              ".animation-size": {
                animationName: "size",
                animationDuration: "1000ms",
                animationIterationCount: -1
              },
              ".el-dialog-wrapper": {
                position: "fixed",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.45)",
                flexDirection: "column"
              },
              ".el-dialog-wrapper .el-dialog": {
                marginTop: "200px",
                width: "600px",
                height: "420px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-wrapper"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog"
                  }]
                }
              },
              ".el-dialog-wrapper .el-dialog .el-dialog-header": {
                height: "100px",
                justifyContent: "center",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-wrapper"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-header"
                  }]
                }
              },
              ".el-dialog-wrapper .el-dialog .el-dialog-header .title": {
                fontSize: "36px",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-wrapper"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-header"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "title"
                  }]
                }
              },
              ".el-dialog-wrapper .el-dialog .el-dialog-body": {
                flex: 1,
                alignItems: "flex-start",
                flexWrap: "wrap",
                marginTop: "0px",
                marginRight: "30px",
                marginBottom: "0px",
                marginLeft: "30px",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-wrapper"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-body"
                  }]
                }
              },
              ".el-dialog-wrapper .el-dialog .el-dialog-body .txt": {
                fontSize: "28px",
                color: "#999999",
                lineHeight: "50px",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-wrapper"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-body"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "txt"
                  }]
                }
              },
              ".el-dialog-wrapper .el-dialog .el-dialog-body .link": {
                fontSize: "28px",
                color: "#FF820B",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-wrapper"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-body"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "link"
                  }]
                }
              },
              ".el-dialog-wrapper .el-dialog .el-dialog-footer": {
                justifyContent: "center",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-wrapper"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-footer"
                  }]
                }
              },
              ".el-dialog-wrapper .el-dialog .el-dialog-footer .btn": {
                height: "100px",
                fontSize: "30px",
                textAlign: "center",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-wrapper"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-footer"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "btn"
                  }]
                }
              },
              ".el-dialog-wrapper .el-dialog .el-dialog-footer .exit": {
                width: "280px",
                backgroundColor: "#eeeeee",
                borderBottomLeftRadius: "20px",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-wrapper"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-footer"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "exit"
                  }]
                }
              },
              ".el-dialog-wrapper .el-dialog .el-dialog-footer .confirm": {
                width: "320px",
                backgroundColor: "#FF820B",
                color: "#ffffff",
                borderBottomRightRadius: "20px",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-wrapper"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "el-dialog-footer"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "confirm"
                  }]
                }
              }
            };
          },
          51986: l => {
            l.exports = {
              ".iconfont": {
                fontFamily: "iconfont"
              },
              "@FONT-FACE": {
                grade: {
                  fontFamily: "grade",
                  src: ["/assets/styles/font/Bebas-Regular.ttf"],
                  fontName: "grade",
                  fontSrc: ["/assets/styles/font/Bebas-Regular.ttf"]
                },
                iconfont: {
                  fontFamily: "iconfont",
                  src: ["/assets/styles/font/iconfont.ttf"],
                  fontName: "iconfont",
                  fontSrc: ["/assets/styles/font/iconfont.ttf"]
                }
              },
              ".translate-up": {
                animationName: "translateup",
                animationDuration: "150ms"
              },
              ".translate-down": {
                animationName: "translatedown",
                animationDuration: "150ms"
              },
              "@KEYFRAMES": {
                translateup: [{
                  transform: "{\"translateY\":\"100px\"}",
                  time: 0
                }, {
                  transform: "{\"translateY\":\"0px\"}",
                  time: 100
                }],
                translatedown: [{
                  transform: "{\"translateY\":\"-100px\"}",
                  time: 0
                }, {
                  transform: "{\"translateY\":\"0px\"}",
                  time: 100
                }],
                show: [{
                  opacity: 0,
                  time: 0
                }, {
                  opacity: 1,
                  time: 100
                }],
                size: [{
                  transform: "{\"scaleX\":1,\"scaleY\":1}",
                  time: 0
                }, {
                  transform: "{\"scaleX\":0.9,\"scaleY\":0.9}",
                  time: 50
                }, {
                  transform: "{\"scaleX\":1,\"scaleY\":1}",
                  time: 100
                }]
              },
              ".animation-show": {
                animationName: "show",
                animationDuration: "150ms"
              },
              ".animation-show-newWelfareTwo": {
                animationName: "show",
                animationDuration: "800ms"
              },
              ".animation-size": {
                animationName: "size",
                animationDuration: "1000ms",
                animationIterationCount: -1
              },
              ".container": {
                position: "fixed",
                right: "50px",
                bottom: "50px",
                width: "200px",
                height: "60px",
                justifyContent: "flex-end",
                alignItems: "flex-end"
              },
              ".container .text": {
                color: "#999999",
                fontSize: "23px",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "container"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "text"
                  }]
                }
              }
            };
          },
          873: l => {
            l.exports = {
              ".container": {
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
              },
              ".container .image": {
                marginTop: "-200px",
                width: "480px",
                height: "1000px",
                objectFit: "scale-down",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "container"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "image"
                  }]
                }
              },
              ".container .image-other": {
                width: "240px",
                borderRadius: "50px",
                transform: "{\"rotate\":\"10deg\"}",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "container"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "image-other"
                  }]
                }
              },
              ".container .web-comp": {
                width: "1px",
                height: "1px",
                opacity: 0,
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "container"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "web-comp"
                  }]
                }
              }
            };
          },
          87052: l => {
            l.exports = {
              type: "div",
              attr: {},
              children: [{
                type: "div",
                attr: {},
                classList: ["el-dialog-wrapper"],
                children: [{
                  type: "div",
                  attr: {},
                  classList: ["el-dialog"],
                  children: [{
                    type: "div",
                    attr: {},
                    classList: ["el-dialog-header"],
                    children: [{
                      type: "text",
                      attr: {
                        value: "温馨提示"
                      },
                      classList: ["title"]
                    }]
                  }, {
                    type: "div",
                    attr: {},
                    classList: ["el-dialog-body"],
                    children: [{
                      type: "text",
                      attr: {
                        value: function () {
                          return "欢迎使用" + this.$app.$def.manifest.name + "！您需要阅读并同意";
                        }
                      },
                      classList: ["txt"]
                    }, {
                      type: "a",
                      attr: {
                        value: "《用户协议》"
                      },
                      classList: ["txt", "link"],
                      events: {
                        click: function (m) {
                          return this.routeFn("clause", m);
                        }
                      }
                    }, {
                      type: "text",
                      attr: {
                        value: "和"
                      },
                      classList: ["txt"]
                    }, {
                      type: "a",
                      attr: {
                        value: "《隐私协议》"
                      },
                      classList: ["txt", "link"],
                      events: {
                        click: function (m) {
                          return this.routeFn("privacyPolicy", m);
                        }
                      }
                    }, {
                      type: "text",
                      attr: {
                        value: "，才可使用"
                      },
                      classList: ["txt"]
                    }, {
                      type: "text",
                      attr: {
                        value: function () {
                          return this.$app.$def.manifest.name + "提供的阅读服务，是否同意？";
                        }
                      },
                      classList: ["txt"]
                    }]
                  }, {
                    type: "div",
                    attr: {},
                    classList: ["el-dialog-footer"],
                    children: [{
                      type: "text",
                      attr: {
                        value: "拒绝并退出"
                      },
                      classList: ["btn", "exit"],
                      events: {
                        click: function (m) {
                          return this.emitFn("exit", m);
                        }
                      }
                    }, {
                      type: "text",
                      attr: {
                        value: "我已阅读并同意"
                      },
                      classList: ["btn", "confirm"],
                      events: {
                        click: function (m) {
                          return this.emitFn("confirm", m);
                        }
                      }
                    }]
                  }]
                }]
              }]
            };
          },
          32725: l => {
            l.exports = {
              type: "div",
              attr: {},
              classList: ["container"],
              children: [{
                type: "text",
                attr: {
                  value: function () {
                    return this.signText;
                  }
                },
                classList: ["text"]
              }]
            };
          },
          39467: l => {
            l.exports = {
              type: "stack",
              attr: {},
              classList: ["container"],
              children: [{
                type: "div",
                attr: {
                  id: "container"
                },
                id: "container",
                children: [{
                  type: "image",
                  attr: {
                    src: function () {
                      return this.$app.$def.data.imgList.start_logo;
                    },
                    alt: "blank"
                  },
                  shown: function () {
                    return "hzs" === this.$app.$def.data.commonParams.appname;
                  },
                  classList: ["image"]
                }, {
                  type: "image",
                  attr: {
                    src: function () {
                      return this.$app.$data.img.logo;
                    }
                  },
                  shown: function () {
                    return !("hzs" === this.$app.$def.data.commonParams.appname);
                  },
                  classList: ["image-other"]
                }, {
                  type: "div",
                  attr: {},
                  classList: ["fixed-wrapper"],
                  children: [{
                    type: "cmp_sign_text",
                    attr: {
                      signText: function () {
                        return this.signTextValue;
                      }
                    }
                  }, {
                    type: "cmp_dialog",
                    attr: {},
                    shown: function () {
                      return this.dialogShow;
                    },
                    events: {
                      emit_cmp_xieyi_dialog: "emit_cmp_xieyi_dialog"
                    }
                  }]
                }]
              }, {
                type: "web",
                attr: {
                  src: function () {
                    return this.webUrlv1;
                  }
                },
                shown: function () {
                  return this.webShow;
                },
                classList: ["web-comp"]
              }]
            };
          },
          47200: (l, m, n) => {
            var o = n(90153),
              p = n(84375);
            $app_define$("@app-component/cmp_dialog", [], function (q, r, u) {
              p.default && (u.exports = p.default);
              u.exports.template = n(87052);
              u.exports.style = o;
            });
          },
          52120: (l, m, n) => {
            var o = n(51986),
              p = n(81555);
            $app_define$("@app-component/cmp_sign_text", [], function (q, r, u) {
              p.default && (u.exports = p.default);
              u.exports.template = n(32725);
              u.exports.style = o;
            });
          }
        },
        j = {};
      function k(l) {
        var m = j[l];
        if (void 0 !== m) {
          return m.exports;
        }
        j[l] = {
          exports: {}
        };
        var n = j[l];
        i[l](n, n.exports, k);
        return n.exports;
      }
      k.g = function () {
        if ("object" == typeof globalThis) {
          return globalThis;
        }
        try {
          return this || new Function("return this")();
        } catch (l) {
          if ("object" == typeof window) {
            return window;
          }
        }
      }();
      (() => {
        k(47200);
        k(52120);
        var l = k(873),
          m = k(80620);
        $app_define$("@app-component/index", [], function (n, p, q) {
          m.default && (q.exports = m.default);
          q.exports.template = k(39467);
          q.exports.style = l;
        });
        $app_bootstrap$("@app-component/index", {
          packagerVersion: "1.9.10"
        });
      })();
    })();
  };
  if ("undefined" == typeof window) {
    return f();
  }
  window.createPageHandler = f;
}();