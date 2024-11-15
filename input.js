
!function () {
  var _0x4997f9 = function () {
    return (() => {
      var _0x4b476b = {
          41393: _0x59bf15 => {
            _0x59bf15.exports = function (_0x25e721, _0x2c0897, _0x3efc43) {
              'use strict';

              Object.defineProperty(_0x2c0897, "__esModule", {
                value: !0
              });
              _0x2c0897.default = void 0;
              var _0x551af4 = {
                data: () => ({}),
                onInit() {},
                onReady() {},
                onShow() {
                  this.$broadcast("onPageShow");
                },
                onHide() {
                  this.$broadcast("onPageHide");
                },
                onBackPress: () => !0,
                onMenuPress: () => !0
              };
              _0x2c0897.default = _0x551af4;
              const _0x544dac = _0x2c0897.default || _0x25e721.exports,
                _0xaf5232 = ["public", "protected", "private"];
              if (_0x544dac.data && _0xaf5232.some(function (_0x36d47a) {
                return _0x544dac[_0x36d47a];
              })) {
                throw new Error("页面VM对象中的属性data不可与\"" + _0xaf5232.join(",") + "\"同时存在，请使用private替换data名称");
              }
              _0x544dac.data || (_0x544dac.data = {}, _0x544dac._descriptor = {}, _0xaf5232.forEach(function (_0x2919a4) {
                const _0x4b7a37 = typeof _0x544dac[_0x2919a4];
                if ("object" === _0x4b7a37) {
                  _0x544dac.data = Object.assign(_0x544dac.data, _0x544dac[_0x2919a4]);
                  for (const _0x2c8e0d in _0x544dac[_0x2919a4]) _0x544dac._descriptor[_0x2c8e0d] = {
                    access: _0x2919a4
                  };
                }
              }));
            };
          },
          22649: (_0x26a1a8, _0x304f3b, _0x3304e0) => {
            _0x26a1a8.exports = function (_0x295dff, _0x3a87b0, _0xa3cb02) {
              'use strict';

              Object.defineProperty(_0x3a87b0, "__esModule", {
                value: !0
              });
              _0x3a87b0.default = void 0;
              var _0x56a462 = _0x3304e0(76331),
                _0x1a6f4f = {
                  data: () => ({
                    adId: "",
                    isPrepared: !1,
                    isRewarded: !1,
                    isFinish: !1,
                    isShowClose: !1,
                    isShowDetainmentDialog: !1,
                    detainmentTitle: "完整观看即可获得奖励",
                    detainmentDesc: "确认离开吗？",
                    isShowEndCard: !1,
                    videoMuted: !1,
                    videoDuration: 0,
                    appStatus: 0,
                    scoreIcon: "",
                    controlsTop: 118,
                    playProgress: 0,
                    downloadProgress: 0,
                    adData: {}
                  }),
                  onInit() {
                    _0x56a462.defineAdScene.call(this, "RewardVideoAd");
                    this.$on("onPageShow", this.onPageShow);
                    this.$on("onPageHide", this.onPageHide);
                  },
                  onReady() {
                    _0x56a462.dispatchAdEvent.call(this, "onReady");
                  },
                  onPageShow() {
                    _0x56a462.dispatchAdEvent.call(this, "onPageShow");
                  },
                  onPageHide() {
                    _0x56a462.dispatchAdEvent.call(this, "onPageHide");
                  },
                  onDestroy() {
                    _0x56a462.dispatchAdEvent.call(this, "onDestroy");
                  },
                  onBackPress: () => !0,
                  onMenuPress: () => !0
                };
              _0x3a87b0.default = _0x1a6f4f;
            };
          },
          68983: (_0x420053, _0x225f08, _0x8cfadf) => {
            _0x420053.exports = function (_0x35980d, _0x113e09, _0x1c9e68) {
              'use strict';

              Object.defineProperty(_0x113e09, "__esModule", {
                value: !0
              });
              _0x113e09.default = void 0;
              var _0x3dfc82 = _0x8cfadf(76331),
                _0x1201dd = {
                  data: () => ({
                    logo: ""
                  }),
                  externalClasses: ["custom-class"],
                  props: {
                    iconType: {
                      type: String,
                      default: "2"
                    },
                    customStyle: {
                      type: String,
                      default: "width:88px;height:32px;"
                    }
                  },
                  onInit() {
                    _0x3dfc82.defineAdComponent.call(this, "AmsLogo");
                  }
                };
              _0x113e09.default = _0x1201dd;
            };
          },
          25174: (_0x59ac71, _0xc29ba0, _0x5d0e28) => {
            _0x59ac71.exports = function (_0x145a65, _0x91b72b, _0x128441) {
              'use strict';

              Object.defineProperty(_0x91b72b, "__esModule", {
                value: !0
              });
              _0x91b72b.default = void 0;
              var _0x18a77a = _0x5d0e28(76331),
                _0x1b92b5 = {
                  data: () => ({
                    isShow: !1,
                    showItems: [],
                    webItems: []
                  }),
                  externalClasses: ["custom-class"],
                  props: {
                    adId: {
                      type: String,
                      required: !0
                    },
                    type: {
                      type: String,
                      default: "render"
                    },
                    customStyle: {
                      type: String,
                      default: ""
                    }
                  },
                  onInit() {
                    _0x18a77a.defineAdComponent.call(this, "AppInfo");
                  }
                };
              _0x91b72b.default = _0x1b92b5;
            };
          },
          12498: (_0x5e9bd5, _0x1732d5, _0x5b54e0) => {
            _0x5e9bd5.exports = function (_0x31f760, _0x3e662d, _0x338abf) {
              'use strict';

              Object.defineProperty(_0x3e662d, "__esModule", {
                value: !0
              });
              _0x3e662d.default = void 0;
              var _0x202f6c = _0x5b54e0(76331),
                _0x933c46 = {
                  data: () => ({
                    id: Math.random(),
                    defaultStyle: ""
                  }),
                  props: {
                    customStyle: {
                      type: String,
                      default: ""
                    }
                  },
                  onInit() {
                    _0x202f6c.defineAdComponent.call(this, "CloseButton");
                  }
                };
              _0x3e662d.default = _0x933c46;
            };
          },
          5087: (_0x42625b, _0x144fc7, _0x265b97) => {
            _0x42625b.exports = function (_0x282296, _0x271990, _0x4fed94) {
              'use strict';

              Object.defineProperty(_0x271990, "__esModule", {
                value: !0
              });
              _0x271990.default = void 0;
              var _0x338355 = _0x265b97(76331),
                _0x168639 = {
                  data: () => ({
                    isLoading: !1,
                    buttonSize: "",
                    containerStyle: "",
                    loadingStyle: "",
                    color: "",
                    bgColor: "",
                    txtStyle: "",
                    bgTxtStyle: "",
                    ctaTxt: "",
                    shakeIcon: ""
                  }),
                  props: {
                    adId: {
                      type: String,
                      required: !0
                    },
                    status: {
                      type: Number,
                      required: !0
                    },
                    progress: {
                      type: Number,
                      required: !0
                    },
                    customStyle: {
                      type: String,
                      default: "position:relative;"
                    },
                    progressBackColor: {
                      type: String,
                      default: "#eaeaea"
                    }
                  },
                  onInit() {
                    _0x338355.defineAdComponent.call(this, "CtaButton");
                  },
                  onReady() {
                    _0x338355.dispatchAdEvent.call(this, "onReady");
                  }
                };
              _0x271990.default = _0x168639;
            };
          },
          45934: _0x22d051 => {
            _0x22d051.exports = function (_0x27500e, _0x21eedb, _0xd90ab2) {
              'use strict';

              Object.defineProperty(_0x21eedb, "__esModule", {
                value: !0
              });
              _0x21eedb.default = void 0;
              var _0x5b2a28 = {
                data: () => ({}),
                props: {
                  title: {
                    type: String,
                    required: !0
                  },
                  desc: {
                    type: String,
                    required: !0
                  },
                  cancelTxt: {
                    type: String,
                    default: "放弃奖励离开"
                  },
                  confirmTxt: {
                    type: String,
                    default: "抓住奖励机会"
                  }
                },
                externalClasses: ["custom-class"],
                onCancel() {
                  this.$emit("cancel");
                },
                onConfirm() {
                  this.$emit("confirm");
                }
              };
              _0x21eedb.default = _0x5b2a28;
            };
          },
          80912: (_0x42f565, _0x4c09e7, _0x59bbf7) => {
            _0x42f565.exports = function (_0x4b0c3e, _0x1a7eef, _0x1d0165) {
              'use strict';

              Object.defineProperty(_0x1a7eef, "__esModule", {
                value: !0
              });
              _0x1a7eef.default = void 0;
              var _0x573bb7 = _0x59bbf7(76331),
                _0xbb1175 = {
                  data: () => ({
                    isRewarded: !1,
                    rewardedTips: "",
                    showRemainingTime: 0
                  }),
                  props: {},
                  onInit() {
                    _0x573bb7.defineAdComponent.call(this, "RewardTips");
                  }
                };
              _0x1a7eef.default = _0xbb1175;
            };
          },
          41469: (_0x4d1c2b, _0x51d55c, _0x2eb16d) => {
            _0x4d1c2b.exports = function (_0x14bf8f, _0x21ee0e, _0x7e9239) {
              'use strict';

              Object.defineProperty(_0x21ee0e, "__esModule", {
                value: !0
              });
              _0x21ee0e.default = void 0;
              var _0x32d67d = _0x2eb16d(76331),
                _0x4259d8 = {
                  data() {
                    return {
                      id: "",
                      containerStyle: this.customStyle,
                      videoStyle: "",
                      maskStyle: ""
                    };
                  },
                  externalClasses: ["video-class"],
                  props: {
                    adId: {
                      type: String,
                      required: !0
                    },
                    src: {
                      type: String,
                      required: !0
                    },
                    poster: {
                      type: String
                    },
                    muted: {
                      type: Boolean,
                      default: !1
                    },
                    autoplay: {
                      type: Boolean,
                      default: !0
                    },
                    orientation: {
                      type: String,
                      default: "portrait"
                    },
                    customStyle: {
                      type: String
                    }
                  },
                  onInit() {
                    _0x32d67d.defineAdComponent.call(this, "VideoPlayer");
                  }
                };
              _0x21ee0e.default = _0x4259d8;
            };
          },
          60681: (_0x10eb71, _0x5e5843, _0x34f1ec) => {
            _0x10eb71.exports = function (_0x1a926b, _0x2128ac, _0x875d4f) {
              'use strict';

              Object.defineProperty(_0x2128ac, "__esModule", {
                value: !0
              });
              _0x2128ac.default = void 0;
              var _0x5ea00b = _0x34f1ec(76331),
                _0x2ee6e0 = {
                  data: () => ({
                    id: "",
                    volumeIcon: "",
                    defaultStyle: ""
                  }),
                  props: {
                    muted: {
                      type: Boolean,
                      default: !0
                    },
                    customStyle: {
                      type: String,
                      default: ""
                    }
                  },
                  onInit() {
                    _0x5ea00b.defineAdComponent.call(this, "VolumeButton");
                  },
                  watchMutedChange() {}
                };
              _0x2128ac.default = _0x2ee6e0;
            };
          },
          48680: _0x328c85 => {
            _0x328c85.exports = function (_0x5b8d35, _0x24293c, _0x3224c7) {
              'use strict';

              function _0xf281cc(_0x37b384) {
                return "https://qzs.gdtimg.com/union/res/union_cdn/page/temp_v2/" + _0x37b384 + ".png";
              }
              Object.defineProperty(_0x24293c, "__esModule", {
                value: !0
              });
              _0x24293c.default = void 0;
              var _0x48ef5f = {
                data: () => ({
                  arrows: [{
                    rotate: 0
                  }, {
                    rotate: 45
                  }, {
                    rotate: 90
                  }, {
                    rotate: 135
                  }],
                  arrowIcon: _0xf281cc("mini_arrow"),
                  whiteHandIcon: _0xf281cc("quick_app_white_hand")
                }),
                props: {
                  adId: {
                    type: String,
                    required: !0
                  },
                  scene: {
                    type: String,
                    default: "reward"
                  },
                  prefixBottom: {
                    type: Number,
                    default: 0
                  },
                  tipTxt: {
                    type: String,
                    default: "随意滑动下载或打开第三方应用"
                  }
                },
                onInit() {}
              };
              _0x24293c.default = _0x48ef5f;
            };
          },
          50929: _0x5b8a52 => {
            _0x5b8a52.exports = {};
          },
          34208: _0x2bf49b => {
            _0x2bf49b.exports = {
              ".reward-container": {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                backgroundColor: "#000000"
              },
              ".video-container": {
                width: "750px",
                height: "1333.33px"
              },
              ".reward-controls": {
                top: "118px",
                left: "40px",
                height: "52px"
              },
              ".progress-bg": {
                position: "absolute",
                width: "750px",
                bottom: "72px",
                height: "4px",
                borderRadius: "2px",
                backgroundColor: "rgba(255,255,255,0.2)"
              },
              ".play-progress": {
                width: "0px",
                height: "100%",
                borderRadius: "2px",
                backgroundColor: "rgba(231,114,76,1)"
              },
              ".bottom-card-container": {
                position: "absolute",
                width: "670px",
                flexDirection: "column",
                alignItems: "center",
                left: "40px",
                bottom: "112px"
              },
              ".bottom-card": {
                width: "670px",
                height: "192px"
              },
              ".master-logo": {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "80px",
                height: "80px",
                borderRadius: "16px"
              },
              ".ad-title": {
                position: "absolute",
                left: "104px",
                top: "0px",
                width: "432px",
                height: "40px",
                color: "#ffffff",
                fontSize: "28px",
                lineHeight: "40px",
                lines: 1,
                textOverflow: "ellipsis"
              },
              ".ad-desc": {
                position: "absolute",
                left: "104px",
                top: "44px",
                width: "432px",
                height: "34px",
                fontSize: "24px",
                lineHeight: "34px",
                color: "rgba(255,255,255,0.6)",
                lines: 1,
                textOverflow: "ellipsis"
              },
              ".lyh-logo": {
                position: "absolute"
              },
              ".logo-play": {
                top: "0px",
                right: "0px"
              },
              ".play-button": {
                position: "absolute",
                left: "0px",
                bottom: "0px"
              },
              ".logo-end-card": {
                right: "32px",
                bottom: "84px"
              },
              ".end-card": {
                position: "absolute",
                top: "0px",
                bottom: "0px",
                right: "0px",
                left: "0px"
              },
              ".end-card-bg": {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,1)"
              },
              ".end-card-bg-img": {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "{\"blur\":\"20px\"}"
              },
              ".end-card-mask": {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.7)"
              },
              ".content-container": {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "space-between"
              },
              ".content-inner": {
                position: "absolute",
                width: "750px",
                height: "840px",
                flexDirection: "column",
                alignItems: "center"
              },
              ".content-up": {
                flexDirection: "column",
                alignItems: "center",
                opacity: 0,
                top: "3000px",
                animationName: "baseInfoShow",
                animationDuration: "400ms",
                animationDelay: "200ms",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: 1,
                animationFillMode: "forwards"
              },
              "@KEYFRAMES": {
                baseInfoShow: [{
                  opacity: 0,
                  transform: "{\"translateY\":\"0px\"}",
                  time: 0
                }, {
                  opacity: 1,
                  transform: "{\"translateY\":\"-3000px\"}",
                  time: 100
                }],
                scoreShow: [{
                  opacity: 0,
                  time: 0
                }, {
                  opacity: 1,
                  time: 100
                }],
                ctaShow: [{
                  opacity: 1,
                  transform: "{\"scaleX\":1,\"scaleY\":1,\"scaleZ\":1}",
                  time: 0
                }, {
                  transform: "{\"scaleX\":0.8,\"scaleY\":0.8,\"scaleZ\":0.8}",
                  time: 50
                }, {
                  opacity: 1,
                  transform: "{\"scaleX\":1,\"scaleY\":1,\"scaleZ\":1}",
                  time: 100
                }]
              },
              ".end-card-img2": {
                width: "176px",
                height: "176px",
                borderRadius: "32px"
              },
              ".end-card-txt": {
                marginTop: "48px",
                marginBottom: "8px",
                width: "576px",
                height: "48px",
                fontSize: "44px",
                lines: 1,
                textOverflow: "ellipsis",
                textAlign: "center",
                color: "#ffffff"
              },
              ".end-card-desc": {
                width: "576px",
                height: "40px",
                fontSize: "28px",
                lines: 1,
                textOverflow: "ellipsis",
                textAlign: "center",
                color: "rgba(153,153,153,1)"
              },
              ".score-icon": {
                marginTop: "80px",
                width: "430px",
                height: "128px",
                opacity: 0,
                animationName: "scoreShow",
                animationDuration: "320ms",
                animationDelay: "600ms",
                animationTimingFunction: "ease-in-out",
                animationIterationCount: 1,
                animationFillMode: "forwards"
              },
              ".end-card-cta-container": {
                marginTop: "172px",
                width: "640px",
                height: "140px",
                opacity: 0,
                animationName: "ctaShow",
                animationDuration: "800ms",
                animationDelay: "920ms",
                animationTimingFunction: "linear",
                animationIterationCount: -1,
                animationFillMode: "forwards",
                transitionProperty: "opacity",
                transitionDuration: "320ms",
                transitionDelay: "920ms"
              }
            };
          },
          61223: _0x39a737 => {
            _0x39a737.exports = {};
          },
          25863: _0x57f519 => {
            _0x57f519.exports = {
              ".app-info": {
                width: "670px"
              },
              ".visible-true": {
                display: "flex"
              },
              ".visible-false": {
                display: "none"
              },
              ".app-info-placeholder": {
                opacity: 0
              },
              ".inner": {
                width: "100%",
                flexWrap: "wrap",
                alignItems: "flex-start"
              },
              ".inner > text": {
                fontSize: "16px",
                color: "rgba(255,255,255,0.6)",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "inner"
                  }, {
                    t: "child"
                  }, {
                    t: "t",
                    n: "text"
                  }]
                }
              },
              ".pipeline": {
                marginTop: "0px",
                marginRight: "8px",
                marginBottom: "0px",
                marginLeft: "8px"
              },
              ".underline-text": {
                textDecoration: "underline"
              }
            };
          },
          5884: _0x44e916 => {
            _0x44e916.exports = {
              ".rotate": {
                position: "absolute",
                width: "30px",
                height: "2px",
                left: "11px",
                top: "25px",
                backgroundColor: "#ffffff",
                borderRadius: "2px"
              },
              ".rotate-45": {
                transform: "{\"rotate\":\"45deg\"}"
              },
              ".rotate-135": {
                transform: "{\"rotate\":\"135deg\"}"
              }
            };
          },
          82126: _0xb88505 => {
            _0xb88505.exports = {
              ".on-download-bg": {
                width: "100%",
                height: "100%"
              },
              ".init-text-container": {
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              ".init-text": {
                fontSize: "28px",
                color: "#ffffff"
              },
              ".downloading-text-mask": {
                position: "absolute",
                top: "0px",
                left: "0px",
                height: "100%",
                transitionProperty: "width",
                transitionDuration: "0.3s"
              },
              ".downloading-text-container": {
                top: "0px",
                left: "0px",
                flexShrink: 0,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              ".shake-icon": {
                width: "64px",
                height: "64px",
                marginRight: "16px"
              },
              ".download-text": {
                color: "#ffffff",
                fontSize: "28px"
              }
            };
          },
          40744: _0x45c5e7 => {
            _0x45c5e7.exports = {
              ".mask": {
                position: "absolute",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              ".dialog": {
                width: "614px",
                height: "338px",
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                flexDirection: "column"
              },
              ".content": {
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              },
              ".message": {
                fontSize: "32px",
                color: "#000000",
                fontWeight: "600"
              },
              ".footer": {
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                borderTopWidth: "1px",
                borderTopStyle: "solid",
                borderTopColor: "rgba(229,229,229,1)"
              },
              ".btn-txt": {
                fontSize: "32px",
                color: "#000000",
                fontWeight: "600",
                height: "130px",
                flex: 1,
                textAlign: "center"
              },
              ".confirm": {
                color: "rgba(49,133,252,1)",
                borderLeftWidth: "1px",
                borderLeftStyle: "solid",
                borderLeftColor: "rgba(229,229,229,1)"
              }
            };
          },
          2893: _0x16068a => {
            _0x16068a.exports = {
              ".gradient-mask": {
                position: "absolute",
                left: "0px",
                bottom: "0px",
                width: "750px",
                height: "340px",
                background: "{\"values\":[{\"type\":\"linearGradient\",\"directions\":[\"to\",\"top\"],\"values\":[\"rgba(0,0,0,1)\",\"rgba(0,0,0,0)\"]}]}"
              }
            };
          },
          72611: _0x4d7584 => {
            _0x4d7584.exports = {
              ".icons-container": {
                backgroundColor: "rgba(0,0,0,0.5)",
                alignItems: "center",
                justifyContent: "center",
                height: "52px",
                borderRadius: "52px"
              },
              ".reward-tip": {
                paddingTop: "8px",
                paddingRight: "16px",
                paddingBottom: "8px",
                paddingLeft: "16px"
              },
              ".reward-inner": {
                alignItems: "center"
              },
              ".tip-txt": {
                color: "#ffffff",
                fontSize: "24px"
              },
              ".tip-txt-time": {
                width: "42px",
                display: "flex",
                textAlign: "center"
              }
            };
          },
          45588: _0x2b8f8 => {
            _0x2b8f8.exports = {
              ".video-player": {
                width: "100%",
                height: "100%"
              }
            };
          },
          13537: _0x502bcd => {
            _0x502bcd.exports = {
              ".volume": {
                width: "52px",
                height: "52px",
                marginRight: "24px"
              },
              ".volume-icon": {
                width: "32px",
                height: "32px"
              }
            };
          },
          88794: _0x41a434 => {
            _0x41a434.exports = {
              ".hand-mask": {
                position: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                paddingBottom: "112px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end"
              },
              ".mask-reward": {
                backgroundColor: "rgba(0,0,0,0.2)",
                animationName: "whiteContainerAnimation",
                animationDuration: "6s",
                animationTimingFunction: "ease-in-out",
                animationDelay: "0s",
                animationIterationCount: 2,
                animationFillMode: "forwards"
              },
              "@KEYFRAMES": {
                whiteContainerAnimation: [{
                  opacity: 1,
                  transform: "{\"translateX\":\"0px\"}",
                  time: 0
                }, {
                  opacity: 1,
                  transform: "{\"translateX\":\"0px\"}",
                  time: 66.6667
                }, {
                  opacity: 0,
                  transform: "{\"translateX\":\"0px\"}",
                  time: 67
                }, {
                  transform: "{\"translateX\":\"-750px\"}",
                  time: 68
                }, {
                  opacity: 0,
                  transform: "{\"translateX\":\"-750px\"}",
                  time: 100
                }],
                guideHand: [{
                  opacity: 0,
                  transform: "{\"translateX\":\"0px\",\"translateY\":\"0px\",\"translateZ\":\"0px\"}",
                  time: 0
                }, {
                  opacity: 1,
                  time: 5
                }, {
                  opacity: 1,
                  time: 10
                }, {
                  transform: "{\"translateY\":\"-80px\"}",
                  time: 13.3333
                }, {
                  opacity: 0,
                  transform: "{\"translateY\":\"-80px\"}",
                  time: 16.6667
                }, {
                  opacity: 0,
                  transform: "{\"translateX\":\"0px\",\"translateY\":\"0px\",\"translateZ\":\"0px\"}",
                  time: 17
                }, {
                  opacity: 1,
                  time: 22
                }, {
                  opacity: 1,
                  time: 27
                }, {
                  transform: "{\"translateX\":\"80px\"}",
                  time: 30.3333
                }, {
                  opacity: 0,
                  transform: "{\"translateX\":\"80px\"}",
                  time: 33.6666
                }, {
                  opacity: 0,
                  transform: "{\"translateX\":\"0px\",\"translateY\":\"0px\",\"translateZ\":\"0px\"}",
                  time: 34
                }, {
                  opacity: 1,
                  time: 39
                }, {
                  opacity: 1,
                  time: 44
                }, {
                  transform: "{\"translateY\":\"80px\"}",
                  time: 47.3333
                }, {
                  opacity: 0,
                  transform: "{\"translateY\":\"80px\"}",
                  time: 50.6667
                }, {
                  opacity: 0,
                  transform: "{\"translateX\":\"0px\",\"translateY\":\"0px\",\"translateZ\":\"0px\"}",
                  time: 51
                }, {
                  opacity: 1,
                  time: 56
                }, {
                  opacity: 1,
                  time: 61
                }, {
                  transform: "{\"translateX\":\"-80px\"}",
                  time: 64.3333
                }, {
                  opacity: 0,
                  transform: "{\"translateX\":\"-80px\"}",
                  time: 67.6667
                }, {
                  transform: "{\"translateX\":\"0px\",\"translateY\":\"0px\",\"translateZ\":\"0px\"}",
                  time: 68
                }, {
                  opacity: 0,
                  transform: "{\"translateX\":\"0px\",\"translateY\":\"0px\",\"translateZ\":\"0px\"}",
                  time: 100
                }],
                splashSlideHand: [{
                  opacity: 0,
                  transform: "{\"translateX\":\"0px\",\"translateY\":\"0px\",\"translateZ\":\"0px\"}",
                  time: 0
                }, {
                  opacity: 1,
                  time: 7.5
                }, {
                  opacity: 1,
                  time: 15
                }, {
                  transform: "{\"translateY\":\"-80px\"}",
                  time: 20
                }, {
                  opacity: 0,
                  transform: "{\"translateY\":\"-80px\"}",
                  time: 25
                }, {
                  opacity: 0,
                  transform: "{\"translateX\":\"0px\",\"translateY\":\"0px\",\"translateZ\":\"0px\"}",
                  time: 25.5
                }, {
                  opacity: 1,
                  time: 32.5
                }, {
                  opacity: 1,
                  time: 40
                }, {
                  transform: "{\"translateX\":\"80px\"}",
                  time: 45
                }, {
                  opacity: 0,
                  transform: "{\"translateX\":\"80px\"}",
                  time: 45.5
                }, {
                  opacity: 0,
                  transform: "{\"translateX\":\"0px\",\"translateY\":\"0px\",\"translateZ\":\"0px\"}",
                  time: 52.5
                }, {
                  opacity: 1,
                  time: 60
                }, {
                  opacity: 1,
                  time: 65
                }, {
                  transform: "{\"translateY\":\"80px\"}",
                  time: 70
                }, {
                  opacity: 0,
                  transform: "{\"translateY\":\"80px\"}",
                  time: 75
                }, {
                  opacity: 0,
                  transform: "{\"translateX\":\"0px\",\"translateY\":\"0px\",\"translateZ\":\"0px\"}",
                  time: 75.5
                }, {
                  opacity: 1,
                  time: 82.5
                }, {
                  opacity: 1,
                  time: 90
                }, {
                  transform: "{\"translateX\":\"-80px\"}",
                  time: 95
                }, {
                  opacity: 0,
                  transform: "{\"translateX\":\"-80px\"}",
                  time: 100
                }]
              },
              ".hand-container": {
                marginBottom: "192px",
                width: "750px",
                height: "404px"
              },
              ".mask-splash .hand-container": {
                marginBottom: "247px",
                _meta: {
                  ruleDef: [{
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "mask-splash"
                  }, {
                    t: "d"
                  }, {
                    t: "a",
                    n: "class",
                    i: !1,
                    a: "element",
                    v: "hand-container"
                  }]
                }
              },
              ".arrow-container": {
                position: "absolute",
                left: "293px",
                top: "100px",
                width: "164px",
                height: "164px"
              },
              ".arrow-item": {
                position: "absolute",
                left: "70px",
                width: "24px",
                height: "164px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column"
              },
              ".rotate-45deg": {
                transform: "{\"rotate\":\"45deg\"}"
              },
              ".rotate-90deg": {
                transform: "{\"rotate\":\"90deg\"}"
              },
              ".rotate-135deg": {
                transform: "{\"rotate\":\"135deg\"}"
              },
              ".direction-arrow": {
                objectFit: "contain",
                width: "24px",
                height: "42px"
              },
              ".arrow-bottom": {
                transform: "{\"rotate\":\"180deg\"}"
              },
              ".white-hand-icon": {
                position: "absolute",
                top: "160px",
                left: "353px",
                width: "144px",
                height: "144px",
                objectFit: "contain"
              },
              ".hand-icon-reward": {
                animationName: "guideHand",
                animationDuration: "6s",
                animationTimingFunction: "ease-in-out",
                animationDelay: "0s",
                animationIterationCount: 2,
                animationFillMode: "forwards"
              },
              ".hand-icon-splash": {
                animationName: "splashSlideHand",
                animationDuration: "4s",
                animationTimingFunction: "ease-in-out",
                animationDelay: "0s",
                animationIterationCount: -1,
                animationFillMode: "forwards"
              },
              ".shake-tip-txt": {
                position: "absolute",
                bottom: "46px",
                width: "750px",
                height: "34px",
                fontSize: "24px",
                color: "rgba(255,255,255,0.8)",
                textAlign: "center"
              },
              ".app-info-container": {
                opacity: 0
              },
              ".splash-placeholder": {
                height: "44px",
                width: "100%"
              }
            };
          },
          80800: _0x49f0a6 => {
            _0x49f0a6.exports = {
              type: "div",
              attr: {},
              classList: ["reward"],
              children: [{
                type: "ylh-reward-video-ad",
                attr: {}
              }]
            };
          },
          49987: _0x59edff => {
            _0x59edff.exports = {
              type: "stack",
              attr: {
                id: "rwd"
              },
              id: "rwd",
              classList: ["reward-container"],
              children: [{
                type: "stack",
                attr: {},
                classList: ["video-container"],
                children: [{
                  type: "video-player",
                  attr: {
                    adId: function () {
                      return this.adId;
                    },
                    muted: function () {
                      return this.videoMuted;
                    },
                    src: function () {
                      return this.adData.video;
                    },
                    poster: function () {
                      return this.adData.img;
                    }
                  },
                  events: {
                    prepared: "onVideoPrepared",
                    start: "onVideoStart",
                    pause: "onVideoPause",
                    finish: "onVideoFinish",
                    timeupdate: "onVideoTimeupdate",
                    error: "onVideoError"
                  }
                }, {
                  type: "gradient-mask",
                  attr: {}
                }]
              }, {
                type: "div",
                attr: {},
                classList: ["progress-bg"],
                children: [{
                  type: "div",
                  attr: {},
                  classList: ["play-progress"],
                  style: {
                    width: function () {
                      return this.playProgress + "%";
                    }
                  }
                }]
              }, {
                type: "div",
                attr: {},
                classList: ["bottom-card-container"],
                children: [{
                  type: "div",
                  attr: {},
                  classList: ["bottom-card"],
                  events: {
                    touchstart: "onTouchstart",
                    touchend: function (_0xdbaf7b) {
                      return this.onTouchend({
                        params: {
                          ca: 3
                        }
                      }, _0xdbaf7b);
                    }
                  },
                  children: [{
                    type: "image",
                    attr: {
                      src: function () {
                        return this.adData.img2;
                      },
                      alt: "blank"
                    },
                    classList: ["master-logo"]
                  }, {
                    type: "text",
                    attr: {
                      value: function () {
                        return this.adData.txt;
                      }
                    },
                    classList: ["ad-title"]
                  }, {
                    type: "text",
                    attr: {
                      value: function () {
                        return this.adData.desc;
                      }
                    },
                    classList: ["ad-desc"]
                  }, {
                    type: "ams-logo",
                    attr: {
                      customClass: "lyh-logo logo-play"
                    }
                  }, {
                    type: "cta-button",
                    attr: {
                      adId: function () {
                        return this.adId;
                      },
                      status: function () {
                        return this.appStatus;
                      },
                      progress: function () {
                        return this.downloadProgress;
                      },
                      customStyle: "position:absolute;left:0;bottom:0;"
                    }
                  }]
                }, {
                  type: "app-info",
                  attr: {
                    adId: function () {
                      return this.adId;
                    },
                    customStyle: "width:670px;margin-top:44px;"
                  }
                }]
              }, {
                type: "white-hand-slide",
                attr: {
                  adId: function () {
                    return this.adId;
                  }
                },
                events: {
                  touchstart: "onTouchstart",
                  touchend: function (_0x2af123) {
                    return this.onTouchend({
                      params: {
                        ca: 3
                      }
                    }, _0x2af123);
                  }
                }
              }, {
                type: "div",
                attr: {},
                classList: ["reward-controls"],
                style: {
                  top: function () {
                    return this.controlsTop + "px";
                  }
                },
                children: [{
                  type: "close-button",
                  attr: {
                    customStyle: "margin-right:24px;"
                  },
                  shown: function () {
                    return this.isShowClose;
                  },
                  events: {
                    close: "onPlayPageClose"
                  }
                }, {
                  type: "volume-button",
                  attr: {
                    muted: function () {
                      return this.videoMuted;
                    }
                  },
                  events: {
                    "muted-change": "onMutedChange"
                  }
                }, {
                  type: "reward-tips",
                  attr: {},
                  shown: function () {
                    return this.isPrepared;
                  }
                }]
              }, {
                type: "detainment-dialog",
                attr: {
                  title: function () {
                    return this.detainmentTitle;
                  },
                  desc: function () {
                    return this.detainmentDesc;
                  }
                },
                shown: function () {
                  return this.isShowDetainmentDialog;
                },
                events: {
                  confirm: "onDialogConfirm",
                  cancel: "onDialogCancel"
                }
              }, {
                type: "stack",
                attr: {
                  id: "endCard"
                },
                id: "endCard",
                shown: function () {
                  return this.isShowEndCard;
                },
                classList: ["end-card"],
                events: {
                  touchstart: "onTouchstart",
                  touchend: function (_0x25c6b1) {
                    return this.onTouchend({
                      params: {
                        ca: 2
                      }
                    }, _0x25c6b1);
                  }
                },
                children: [{
                  type: "div",
                  attr: {},
                  classList: ["end-card-bg"]
                }, {
                  type: "image",
                  attr: {
                    src: function () {
                      return this.adData.img;
                    },
                    alt: "blank"
                  },
                  classList: ["end-card-bg-img"]
                }, {
                  type: "div",
                  attr: {},
                  classList: ["end-card-mask"]
                }, {
                  type: "div",
                  attr: {},
                  classList: ["content-container"],
                  children: [{
                    type: "div",
                    attr: {},
                    classList: ["content-inner"],
                    children: [{
                      type: "div",
                      attr: {},
                      classList: ["content-up"],
                      children: [{
                        type: "image",
                        attr: {
                          src: function () {
                            return this.adData.img2;
                          },
                          alt: "blank"
                        },
                        classList: ["end-card-img2"]
                      }, {
                        type: "text",
                        attr: {
                          value: function () {
                            return this.adData.txt;
                          }
                        },
                        classList: ["end-card-txt"]
                      }, {
                        type: "text",
                        attr: {
                          value: function () {
                            return this.adData.desc;
                          }
                        },
                        classList: ["end-card-desc"]
                      }]
                    }, {
                      type: "image",
                      attr: {
                        alt: "blank",
                        src: function () {
                          return this.scoreIcon;
                        }
                      },
                      classList: ["score-icon"]
                    }, {
                      type: "div",
                      attr: {},
                      classList: ["end-card-cta-container"],
                      children: [{
                        type: "cta-button",
                        attr: {
                          adId: function () {
                            return this.adId;
                          },
                          customStyle: "width:640px;height:140px;font-size:32px",
                          status: function () {
                            return this.appStatus;
                          },
                          progress: function () {
                            return this.downloadProgress;
                          }
                        }
                      }]
                    }]
                  }]
                }, {
                  type: "close-button",
                  attr: {
                    customStyle: "position:absolute;top:118px;left:40px;"
                  },
                  events: {
                    close: "onAdClose"
                  }
                }, {
                  type: "app-info",
                  attr: {
                    adId: function () {
                      return this.adId;
                    },
                    customStyle: "position:absolute;width:566px;left:40px;bottom:84px;font-size:32px;"
                  }
                }, {
                  type: "ams-logo",
                  attr: {
                    customClass: "lyh-logo logo-end-card"
                  }
                }]
              }]
            };
          },
          47558: _0x53222e => {
            _0x53222e.exports = {
              type: "image",
              attr: {
                src: function () {
                  return this.logo;
                },
                alt: "blank"
              },
              classList: ["custom-class"],
              style: function () {
                return this.customStyle;
              },
              events: {
                error: "onError"
              }
            };
          },
          57803: _0x3ce2f0 => {
            _0x3ce2f0.exports = {
              type: "div",
              attr: {},
              classList: function () {
                return ["custom-class", "app-info", "visible-" + this.isShow, "app-info-" + this.type];
              },
              style: function () {
                return this.customStyle;
              },
              children: [{
                type: "div",
                attr: {},
                classList: ["inner"],
                children: [{
                  type: "block",
                  attr: {},
                  repeat: {
                    exp: function () {
                      return this.showItems;
                    },
                    value: "item"
                  },
                  children: [{
                    type: "text",
                    attr: {
                      value: function () {
                        return this.item.value;
                      }
                    }
                  }, {
                    type: "text",
                    attr: {
                      value: "|"
                    },
                    classList: ["pipeline"]
                  }]
                }, {
                  type: "block",
                  attr: {},
                  repeat: {
                    exp: function () {
                      return this.webItems;
                    },
                    key: "idx",
                    value: "item"
                  },
                  children: [{
                    type: "text",
                    attr: {
                      id: function () {
                        return this.item.id;
                      },
                      value: function () {
                        return this.item.value;
                      }
                    },
                    id: function () {
                      return this.item.id;
                    },
                    classList: ["underline-text"],
                    events: {
                      touchend: function (_0x31950a) {
                        return this.onClick(this.item.id, _0x31950a);
                      }
                    }
                  }, {
                    type: "text",
                    attr: {
                      value: "|"
                    },
                    classList: ["pipeline"],
                    shown: function () {
                      return this.idx < this.webItems.length - 1;
                    }
                  }]
                }]
              }]
            };
          },
          46379: _0x5eb4b3 => {
            _0x5eb4b3.exports = {
              type: "stack",
              attr: {
                id: function () {
                  return this.id;
                }
              },
              id: function () {
                return this.id;
              },
              classList: ["ad-close"],
              style: function () {
                return "" + this.defaultStyle + this.customStyle;
              },
              events: {
                touchend: "onClose"
              },
              children: [{
                type: "div",
                attr: {},
                classList: ["rotate", "rotate-45"]
              }, {
                type: "div",
                attr: {},
                classList: ["rotate", "rotate-135"]
              }]
            };
          },
          46501: _0x17fbbc => {
            _0x17fbbc.exports = {
              type: "stack",
              attr: {
                id: "btn"
              },
              id: "btn",
              classList: ["cta-container"],
              style: function () {
                return this.containerStyle;
              },
              children: [{
                type: "div",
                attr: {},
                classList: ["init-text-container"],
                children: [{
                  type: "image",
                  attr: {
                    src: function () {
                      return this.shakeIcon;
                    },
                    alt: "blank"
                  },
                  shown: function () {
                    return !this.isLoading;
                  },
                  classList: ["shake-icon"]
                }, {
                  type: "text",
                  attr: {
                    value: function () {
                      return this.ctaTxt;
                    }
                  },
                  classList: ["init-text"],
                  style: function () {
                    return this.bgTxtStyle;
                  }
                }]
              }, {
                type: "div",
                attr: {},
                classList: ["downloading-text-mask"],
                style: {
                  width: function () {
                    return this.progress + "%";
                  }
                },
                children: [{
                  type: "stack",
                  attr: {},
                  classList: ["downloading-text-container"],
                  style: function () {
                    return this.loadingStyle;
                  },
                  children: [{
                    type: "div",
                    attr: {},
                    children: [{
                      type: "image",
                      attr: {
                        src: function () {
                          return this.shakeIcon;
                        },
                        alt: "blank"
                      },
                      shown: function () {
                        return !this.isLoading;
                      },
                      classList: ["shake-icon"]
                    }, {
                      type: "text",
                      attr: {
                        value: function () {
                          return this.ctaTxt;
                        }
                      },
                      classList: ["download-text"],
                      style: function () {
                        return this.txtStyle;
                      }
                    }]
                  }]
                }]
              }]
            };
          },
          96020: _0xd78c42 => {
            _0xd78c42.exports = {
              type: "div",
              attr: {},
              classList: ["mask"],
              children: [{
                type: "div",
                attr: {},
                classList: ["dialog", "custom-class"],
                children: [{
                  type: "div",
                  attr: {},
                  classList: ["content"],
                  children: [{
                    type: "text",
                    attr: {
                      value: function () {
                        return this.title;
                      }
                    },
                    classList: ["message", "title"]
                  }, {
                    type: "text",
                    attr: {
                      value: function () {
                        return this.desc;
                      }
                    },
                    classList: ["message", "desc"]
                  }]
                }, {
                  type: "div",
                  attr: {},
                  classList: ["footer"],
                  children: [{
                    type: "text",
                    attr: {
                      value: function () {
                        return this.cancelTxt;
                      }
                    },
                    classList: ["btn-txt", "cancel"],
                    events: {
                      click: "onCancel"
                    }
                  }, {
                    type: "text",
                    attr: {
                      value: function () {
                        return this.confirmTxt;
                      }
                    },
                    classList: ["btn-txt", "confirm"],
                    events: {
                      click: "onConfirm"
                    }
                  }]
                }]
              }]
            };
          },
          5550: _0x3a8b3b => {
            _0x3a8b3b.exports = {
              type: "div",
              attr: {},
              classList: ["gradient-mask"]
            };
          },
          38738: _0x564aba => {
            _0x564aba.exports = {
              type: "div",
              attr: {},
              classList: ["icons-container", "reward-tip"],
              children: [{
                type: "text",
                attr: {
                  value: function () {
                    return this.rewardedTips;
                  }
                },
                shown: function () {
                  return this.isRewarded;
                },
                classList: ["tip-txt"]
              }, {
                type: "div",
                attr: {},
                shown: function () {
                  return !this.isRewarded;
                },
                classList: ["reward-inner"],
                children: [{
                  type: "text",
                  attr: {
                    value: "奖励将于"
                  },
                  classList: ["tip-txt"]
                }, {
                  type: "text",
                  attr: {
                    value: function () {
                      return this.showRemainingTime;
                    }
                  },
                  classList: ["tip-txt", "tip-txt-time"]
                }, {
                  type: "text",
                  attr: {
                    value: "秒后发放"
                  },
                  classList: ["tip-txt"]
                }]
              }]
            };
          },
          73498: _0x53f476 => {
            _0x53f476.exports = {
              type: "stack",
              attr: {},
              style: function () {
                return this.containerStyle;
              },
              classList: ["video-class"],
              children: [{
                type: "video",
                attr: {
                  id: function () {
                    return this.id;
                  },
                  poster: function () {
                    return this.poster;
                  },
                  controls: function () {
                    return !1;
                  },
                  muted: function () {
                    return this.muted;
                  },
                  autoplay: function () {
                    return this.autoplay;
                  },
                  orientation: function () {
                    return this.orientation;
                  },
                  src: function () {
                    return this.src;
                  }
                },
                id: function () {
                  return this.id;
                },
                classList: ["video-player"],
                style: function () {
                  return this.videoStyle;
                },
                events: {
                  prepared: "onPrepared",
                  start: "onStart",
                  pause: "onPause",
                  finish: "onFinish",
                  timeupdate: "onTimeupdate",
                  error: "onError"
                }
              }, {
                type: "div",
                attr: {},
                style: function () {
                  return this.maskStyle;
                }
              }]
            };
          },
          7624: _0x435e2a => {
            _0x435e2a.exports = {
              type: "div",
              attr: {
                id: function () {
                  return this.id;
                }
              },
              id: function () {
                return this.id;
              },
              classList: ["volume"],
              style: function () {
                return "" + this.defaultStyle + this.customStyle;
              },
              children: [{
                type: "image",
                attr: {
                  src: function () {
                    return this.volumeIcon;
                  },
                  alt: "blank"
                },
                classList: ["volume-icon"],
                events: {
                  touchend: "onVolumeChange"
                }
              }]
            };
          },
          96919: _0x52dd01 => {
            _0x52dd01.exports = {
              type: "div",
              attr: {},
              classList: function () {
                return ["hand-mask", "mask-" + this.scene];
              },
              children: [{
                type: "div",
                attr: {},
                classList: ["hand-container"],
                children: [{
                  type: "div",
                  attr: {},
                  classList: ["arrow-container"],
                  children: [{
                    type: "block",
                    attr: {},
                    repeat: {
                      exp: function () {
                        return this.arrows;
                      },
                      value: "arrow"
                    },
                    children: [{
                      type: "div",
                      attr: {},
                      classList: function () {
                        return ["arrow-item", "rotate-" + this.arrow.rotate + "deg"];
                      },
                      children: [{
                        type: "image",
                        attr: {
                          src: function () {
                            return this.arrowIcon;
                          },
                          alt: "blank"
                        },
                        classList: ["direction-arrow", "arrow-top"]
                      }, {
                        type: "image",
                        attr: {
                          src: function () {
                            return this.arrowIcon;
                          },
                          alt: "blank"
                        },
                        classList: ["direction-arrow", "arrow-bottom"]
                      }]
                    }]
                  }]
                }, {
                  type: "text",
                  attr: {
                    value: function () {
                      return this.tipTxt;
                    }
                  },
                  classList: ["shake-tip-txt"]
                }, {
                  type: "image",
                  attr: {
                    src: function () {
                      return this.whiteHandIcon;
                    },
                    alt: "blank"
                  },
                  classList: function () {
                    return ["white-hand-icon", "hand-icon-" + this.scene];
                  },
                  style: {
                    objectFit: "contain"
                  }
                }]
              }, {
                type: "app-info",
                attr: {
                  adId: function () {
                    return this.adId;
                  },
                  type: "placeholder",
                  customClass: "app-info-container",
                  customStyle: "width:670px;margin-top:44px;"
                },
                shown: function () {
                  return "reward" === this.scene;
                }
              }, {
                type: "div",
                attr: {},
                shown: function () {
                  return "splash" === this.scene;
                },
                classList: ["splash-placeholder"]
              }]
            };
          },
          81626: (_0x5c7089, _0x5ba49d, _0x4d112) => {
            _0x4d112(22979);
            _0x4d112(14002);
            _0x4d112(62880);
            _0x4d112(14569);
            _0x4d112(40389);
            _0x4d112(1830);
            _0x4d112(6084);
            _0x4d112(74311);
            _0x4d112(38045);
            _0x4d112(82625);
            var _0x5c3548 = _0x4d112(34208),
              _0x2a9bc1 = _0x4d112(22649);
            $app_define$("@app-component/ylh-reward-video-ad", [], function (_0x15f5ea, _0x7ead17, _0x1c866c) {
              _0x2a9bc1(_0x1c866c, _0x7ead17, _0x15f5ea);
              _0x7ead17.__esModule && _0x7ead17.default && (_0x1c866c.exports = _0x7ead17.default);
              _0x1c866c.exports.template = _0x4d112(49987);
              _0x1c866c.exports.style = _0x5c3548;
            });
          },
          22979: (_0x5c7f0e, _0x535626, _0xb86909) => {
            var _0x14eeb3 = _0xb86909(61223),
              _0x56bc99 = _0xb86909(68983);
            $app_define$("@app-component/ams-logo", [], function (_0x5d6324, _0x3aa54e, _0x3e32c1) {
              _0x56bc99(_0x3e32c1, _0x3aa54e, _0x5d6324);
              _0x3aa54e.__esModule && _0x3aa54e.default && (_0x3e32c1.exports = _0x3aa54e.default);
              _0x3e32c1.exports.template = _0xb86909(47558);
              _0x3e32c1.exports.style = _0x14eeb3;
            });
          },
          38045: (_0x7f86ce, _0x2f974f, _0x568120) => {
            var _0x429754 = _0x568120(25863),
              _0x1e5783 = _0x568120(25174);
            $app_define$("@app-component/app-info", [], function (_0xd0920c, _0x34c083, _0x3a809f) {
              _0x1e5783(_0x3a809f, _0x34c083, _0xd0920c);
              _0x34c083.__esModule && _0x34c083.default && (_0x3a809f.exports = _0x34c083.default);
              _0x3a809f.exports.template = _0x568120(57803);
              _0x3a809f.exports.style = _0x429754;
            });
          },
          14569: (_0x53492f, _0x4e158a, _0x40a063) => {
            var _0x5ff5b9 = _0x40a063(5884),
              _0xd22a76 = _0x40a063(12498);
            $app_define$("@app-component/close-button", [], function (_0x2c9b7f, _0x2c0529, _0x6f4597) {
              _0xd22a76(_0x6f4597, _0x2c0529, _0x2c9b7f);
              _0x2c0529.__esModule && _0x2c0529.default && (_0x6f4597.exports = _0x2c0529.default);
              _0x6f4597.exports.template = _0x40a063(46379);
              _0x6f4597.exports.style = _0x5ff5b9;
            });
          },
          14002: (_0x38f922, _0x4a7b05, _0x331860) => {
            var _0x144507 = _0x331860(82126),
              _0x27b179 = _0x331860(5087);
            $app_define$("@app-component/cta-button", [], function (_0x5007a1, _0x3db979, _0x748bd3) {
              _0x27b179(_0x748bd3, _0x3db979, _0x5007a1);
              _0x3db979.__esModule && _0x3db979.default && (_0x748bd3.exports = _0x3db979.default);
              _0x748bd3.exports.template = _0x331860(46501);
              _0x748bd3.exports.style = _0x144507;
            });
          },
          82625: (_0x111bd5, _0x5a2fd9, _0x7c620) => {
            var _0x3ea082 = _0x7c620(40744),
              _0x552029 = _0x7c620(45934);
            $app_define$("@app-component/detainment-dialog", [], function (_0x4a142c, _0x214a7e, _0x4e01df) {
              _0x552029(_0x4e01df, _0x214a7e, _0x4a142c);
              _0x214a7e.__esModule && _0x214a7e.default && (_0x4e01df.exports = _0x214a7e.default);
              _0x4e01df.exports.template = _0x7c620(96020);
              _0x4e01df.exports.style = _0x3ea082;
            });
          },
          6084: (_0x39e44c, _0x5baa6a, _0x7875e) => {
            var _0x2ef249 = _0x7875e(2893);
            $app_define$("@app-component/gradient-mask", [], function (_0x49966e, _0x2606a0, _0x50e3db) {
              _0x50e3db.exports.template = _0x7875e(5550);
              _0x50e3db.exports.style = _0x2ef249;
            });
          },
          62880: (_0x5236ef, _0x4cd5ff, _0x1bb819) => {
            var _0x3424c8 = _0x1bb819(72611),
              _0x1c1bf3 = _0x1bb819(80912);
            $app_define$("@app-component/reward-tips", [], function (_0x320fb1, _0x49c106, _0x26480e) {
              _0x1c1bf3(_0x26480e, _0x49c106, _0x320fb1);
              _0x49c106.__esModule && _0x49c106.default && (_0x26480e.exports = _0x49c106.default);
              _0x26480e.exports.template = _0x1bb819(38738);
              _0x26480e.exports.style = _0x3424c8;
            });
          },
          1830: (_0x2fdc2e, _0x10fc78, _0x45da6a) => {
            var _0x2f4013 = _0x45da6a(45588),
              _0x2112b0 = _0x45da6a(41469);
            $app_define$("@app-component/video-player", [], function (_0xf7c32b, _0x1b489f, _0x4fe77d) {
              _0x2112b0(_0x4fe77d, _0x1b489f, _0xf7c32b);
              _0x1b489f.__esModule && _0x1b489f.default && (_0x4fe77d.exports = _0x1b489f.default);
              _0x4fe77d.exports.template = _0x45da6a(73498);
              _0x4fe77d.exports.style = _0x2f4013;
            });
          },
          40389: (_0x4ba627, _0x3c424e, _0x17697b) => {
            var _0x4f7c99 = _0x17697b(13537),
              _0x563424 = _0x17697b(60681);
            $app_define$("@app-component/volume-button", [], function (_0x3d6516, _0x42c1fc, _0x70809b) {
              _0x563424(_0x70809b, _0x42c1fc, _0x3d6516);
              _0x42c1fc.__esModule && _0x42c1fc.default && (_0x70809b.exports = _0x42c1fc.default);
              _0x70809b.exports.template = _0x17697b(7624);
              _0x70809b.exports.style = _0x4f7c99;
            });
          },
          74311: (_0x197779, _0x3e40d8, _0x57490f) => {
            _0x57490f(38045);
            var _0x34bca5 = _0x57490f(88794),
              _0x2696ec = _0x57490f(48680);
            $app_define$("@app-component/white-hand-slide", [], function (_0x5ce87c, _0x254590, _0x1819a3) {
              _0x2696ec(_0x1819a3, _0x254590, _0x5ce87c);
              _0x254590.__esModule && _0x254590.default && (_0x1819a3.exports = _0x254590.default);
              _0x1819a3.exports.template = _0x57490f(96919);
              _0x1819a3.exports.style = _0x34bca5;
            });
          },
          76331: (_0x331e3d, _0x1bada6) => {
            'use strict';

            function _0x3f4ffd(_0x4fd426, _0x4f859f) {
              try {
                var _0x57ff1b, _0x3f46cd;
                if (this.isAdDestroyed) {
                  return;
                }
                this.lifetimes && null !== (_0x57ff1b = this.lifetimes) && void 0 !== _0x57ff1b && _0x57ff1b[_0x4fd426] ? this.lifetimes[_0x4fd426].call(this, _0x4f859f) : this.events && null !== (_0x3f46cd = this.events) && void 0 !== _0x3f46cd && _0x3f46cd[_0x4fd426] && this.events[_0x4fd426].call(this, _0x4f859f);
              } catch (_0x3ecd47) {}
            }
            function _0x488a06(_0x10b391, _0x330071) {
              if (this.$app) {
                var _0x3842d4, _0x34ed45, _0x3f63a7;
                const _0x1db7fe = null === (_0x3842d4 = this.$app.$def) || void 0 === _0x3842d4 || null === (_0x34ed45 = _0x3842d4.ylh_sdk) || void 0 === _0x34ed45 || null === (_0x3f63a7 = _0x34ed45.components) || void 0 === _0x3f63a7 ? void 0 : _0x3f63a7[_0x10b391];
                _0x1db7fe && (Object.keys(_0x1db7fe).forEach(_0x47894f => {
                  this[_0x47894f] = _0x1db7fe[_0x47894f];
                }), _0x3f4ffd.call(this, "onInit", _0x10b391), _0x330071 && clearInterval(_0x330071));
              }
            }
            function _0x1a432d(_0x22fabc) {
              try {
                var _0x1d52c, _0x33d78a, _0x137dc1;
                if (this.adTimer && clearInterval(this.adTimer), null !== (_0x1d52c = this.$app) && void 0 !== _0x1d52c && null !== (_0x33d78a = _0x1d52c.$def) && void 0 !== _0x33d78a && null !== (_0x137dc1 = _0x33d78a.ylh_sdk) && void 0 !== _0x137dc1 && _0x137dc1.components) {
                  _0x488a06.call(this, _0x22fabc, void 0);
                } else {
                  let _0x339594 = 0;
                  const _0x4732da = setInterval(() => {
                    _0x339594 > 5000 && clearInterval(_0x4732da);
                    _0x488a06.call(this, _0x22fabc, _0x4732da);
                    _0x339594 += 10;
                  }, 10);
                }
              } catch (_0x4ecad2) {
                this.onYLHSDKError && this.onYLHSDKError(_0x4ecad2.message);
              }
            }
            Object.defineProperty(_0x1bada6, "__esModule", {
              value: !0
            });
            _0x1bada6.classCallCheck = function (_0xb169b2, _0x571b10) {
              if (!(_0xb169b2 instanceof _0x571b10)) {
                throw new TypeError("Cannot call a class as a function");
              }
            };
            _0x1bada6.defineAdComponent = _0x1a432d;
            _0x1bada6.defineAdScene = function (_0x1487ec) {
              _0x1a432d.call(this, _0x1487ec);
            };
            _0x1bada6.dispatchAdEvent = _0x3f4ffd;
            _0x1bada6.getCoreVersionByUrl = function (_0x434e4e = "") {
              const _0xbfe6dc = _0x434e4e.match(/ylh-sdk-(?:[a-z]+)-v(\d+\.\d+\.\d+)(?:@debug)?\.min\.js/),
                _0x524133 = _0xbfe6dc && _0xbfe6dc[1] ? _0xbfe6dc[1] : "",
                [_0x264015, _0x1549ef, _0x1b28d7] = _0x524133.split(".");
              return [_0x264015 + "." + _0x1549ef + ".0", Number(_0x1b28d7.substr(0, 4))];
            };
            _0x1bada6.initYLHSDK = function (_0x3b7de7) {
              var _0xebb5dd;
              if (null !== (_0xebb5dd = _0x3b7de7.$def) && void 0 !== _0xebb5dd && _0xebb5dd.ylh_sdk) {
                return;
              }
              _0x3b7de7.$def.ylh_sdk = {
                onYlhReady(_0x28a2a0) {
                  const {
                    onYlhReadyCallback: _0x186851 = []
                  } = _0x3b7de7.$def.ylh_sdk;
                  if (!("function" != typeof _0x28a2a0)) {
                    if (_0x3b7de7.$def.ylh_sdk.SDK_CORE_READY) {
                      return _0x28a2a0();
                    }
                    _0x3b7de7.$def.ylh_sdk.onYlhReadyCallback = [..._0x186851, _0x28a2a0];
                  }
                }
              };
            };
          }
        },
        _0x5074db = {};
      function _0x529dec(_0x332f64) {
        var _0x41bb0b = _0x5074db[_0x332f64];
        if (void 0 !== _0x41bb0b) {
          return _0x41bb0b.exports;
        }
        _0x5074db[_0x332f64] = {
          exports: {}
        };
        var _0x19f6f5 = _0x5074db[_0x332f64];
        _0x4b476b[_0x332f64](_0x19f6f5, _0x19f6f5.exports, _0x529dec);
        return _0x19f6f5.exports;
      }
      (() => {
        _0x529dec(81626);
        var _0x579ef5 = _0x529dec(50929),
          _0x3aae98 = _0x529dec(41393);
        $app_define$("@app-component/index", [], function (_0x7af052, _0x10115a, _0x286f15) {
          _0x3aae98(_0x286f15, _0x10115a, _0x7af052);
          _0x10115a.__esModule && _0x10115a.default && (_0x286f15.exports = _0x10115a.default);
          _0x286f15.exports.template = _0x529dec(80800);
          _0x286f15.exports.style = _0x579ef5;
        });
        $app_bootstrap$("@app-component/index", {
          packagerVersion: void 0
        });
      })();
    })();
  };
  if ("undefined" == typeof window) {
    return _0x4997f9();
  }
  window.createPageHandler = _0x4997f9;
}();
