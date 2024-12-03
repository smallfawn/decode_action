//Tue Dec 03 2024 08:00:49 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("望潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ab) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (af) {
      return typeof af;
    } : function (af) {
      {
        return af && "function" == typeof Symbol && af.constructor === Symbol && af !== Symbol.prototype ? "symbol" : typeof af;
      }
    };
    return b(ab);
  }
  function c(ab, ac) {
    {
      var ae = "undefined" != typeof Symbol && ab[Symbol.iterator] || ab["@@iterator"];
      if (!ae) {
        {
          if (Array.isArray(ab) || (ae = d(ab)) || ac && ab && "number" == typeof ab.length) {
            {
              ae && (ab = ae);
              var af = 0;
              var ag = function () {};
              return {
                s: ag,
                n: function () {
                  {
                    var am = {
                      done: true
                    };
                    return af >= ab.length ? am : {
                      done: false,
                      value: ab[af++]
                    };
                  }
                },
                e: function (al) {
                  {
                    throw al;
                  }
                },
                f: ag
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var ah;
      var ai = true;
      var aj = false;
      return {
        s: function () {
          {
            ae = ae.call(ab);
          }
        },
        n: function () {
          {
            var am = ae.next();
            ai = am.done;
            return am;
          }
        },
        e: function (am) {
          {
            aj = true;
            ah = am;
          }
        },
        f: function () {
          {
            try {
              {
                ai || null == ae.return || ae.return();
              }
            } finally {
              {
                if (aj) {
                  throw ah;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(ab, ac) {
    {
      if (ab) {
        {
          if ("string" == typeof ab) {
            return f(ab, ac);
          }
          var ad = {}.toString.call(ab).slice(8, -1);
          "Object" === ad && ab.constructor && (ad = ab.constructor.name);
          return "Map" === ad || "Set" === ad ? Array.from(ab) : "Arguments" === ad || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ad) ? f(ab, ac) : undefined;
        }
      }
    }
  }
  function f(ab, ac) {
    {
      (null == ac || ac > ab.length) && (ac = ab.length);
      for (var ad = 0, ae = Array(ac); ad < ac; ad++) {
        ae[ad] = ab[ad];
      }
      return ae;
    }
  }
  function g() {
    "use strict";

    g = function () {
      {
        return ad;
      }
    };
    var ac;
    var ad = {
      wrap: am,
      isGeneratorFunction: function (aL) {
        {
          var aN = "function" == typeof aL && aL.constructor;
          return !!aN && (aN === au || "GeneratorFunction" === (aN.displayName || aN.name));
        }
      },
      mark: function (aL) {
        Object.setPrototypeOf ? Object.setPrototypeOf(aL, av) : (aL.__proto__ = av, al(aL, ak, "GeneratorFunction"));
        aL.prototype = Object.create(az);
        return aL;
      },
      awrap: function (aL) {
        {
          var aM = {
            __await: aL
          };
          return aM;
        }
      },
      AsyncIterator: aB,
      async: function (aL, aM, aN, aO, aP) {
        {
          undefined === aP && (aP = Promise);
          var aS = new aB(am(aL, aM, aN, aO), aP);
          return ad.isGeneratorFunction(aM) ? aS : aS.next().then(function (aU) {
            return aU.done ? aU.value : aS.next();
          });
        }
      }
    };
    var ae = Object.prototype;
    var af = ae.hasOwnProperty;
    var ag = Object.defineProperty || function (aI, aJ, aK) {
      {
        aI[aJ] = aK.value;
      }
    };
    var ah = "function" == typeof Symbol ? Symbol : {};
    var ai = ah.iterator || "@@iterator";
    var aj = ah.asyncIterator || "@@asyncIterator";
    var ak = ah.toStringTag || "@@toStringTag";
    function al(aI, aJ, aK) {
      {
        var aL = {
          value: aK,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aI, aJ, aL);
        return aI[aJ];
      }
    }
    try {
      {
        al({}, "");
      }
    } catch (aJ) {
      {
        al = function (aL, aM, aN) {
          {
            return aL[aM] = aN;
          }
        };
      }
    }
    function am(aL, aM, aN, aO) {
      {
        var aQ = aM && aM.prototype instanceof at ? aM : at;
        var aR = Object.create(aQ.prototype);
        var aS = new aG(aO || []);
        ag(aR, "_invoke", {
          value: aC(aL, aN, aS)
        });
        return aR;
      }
    }
    function an(aL, aM, aN) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aL.call(aM, aN)
            };
          }
        } catch (aS) {
          {
            var aP = {
              type: "throw",
              arg: aS
            };
            return aP;
          }
        }
      }
    }
    var ao = "suspendedStart";
    var ap = "suspendedYield";
    var aq = "executing";
    var ar = "completed";
    var as = {};
    function at() {}
    function au() {}
    function av() {}
    var aw = {};
    al(aw, ai, function () {
      {
        return this;
      }
    });
    var ax = Object.getPrototypeOf;
    var ay = ax && ax(ax(aH([])));
    ay && ay !== ae && af.call(ay, ai) && (aw = ay);
    av.prototype = at.prototype = Object.create(aw);
    var az = av.prototype;
    function aA(aL) {
      {
        ["next", "throw", "return"].forEach(function (aO) {
          al(aL, aO, function (aQ) {
            {
              return this._invoke(aO, aQ);
            }
          });
        });
      }
    }
    function aB(aL, aM) {
      {
        function aP(aQ, aR, aS, aT) {
          {
            var aV = an(aL[aQ], aL, aR);
            if ("throw" !== aV.type) {
              {
                var aW = aV.arg;
                var aX = aW.value;
                return aX && "object" == b(aX) && af.call(aX, "__await") ? aM.resolve(aX.__await).then(function (b0) {
                  {
                    aP("next", b0, aS, aT);
                  }
                }, function (b0) {
                  {
                    aP("throw", b0, aS, aT);
                  }
                }) : aM.resolve(aX).then(function (b0) {
                  {
                    aW.value = b0;
                    aS(aW);
                  }
                }, function (b0) {
                  {
                    return aP("throw", b0, aS, aT);
                  }
                });
              }
            }
            aT(aV.arg);
          }
        }
        var aO;
        ag(this, "_invoke", {
          value: function (aQ, aR) {
            {
              function aT() {
                return new aM(function (aV, aW) {
                  {
                    aP(aQ, aR, aV, aW);
                  }
                });
              }
              return aO = aO ? aO.then(aT, aT) : aT();
            }
          }
        });
      }
    }
    function aC(aL, aM, aN) {
      {
        var aP = ao;
        return function (aR, aS) {
          {
            if (aP === aq) {
              throw Error("Generator is already running");
            }
            if (aP === ar) {
              {
                if ("throw" === aR) {
                  throw aS;
                }
                var aU = {
                  value: ac,
                  done: true
                };
                return aU;
              }
            }
            for (aN.method = aR, aN.arg = aS;;) {
              {
                var aV = aN.delegate;
                if (aV) {
                  {
                    var aW = aD(aV, aN);
                    if (aW) {
                      {
                        if (aW === as) {
                          continue;
                        }
                        return aW;
                      }
                    }
                  }
                }
                if ("next" === aN.method) {
                  aN.sent = aN._sent = aN.arg;
                } else {
                  if ("throw" === aN.method) {
                    {
                      if (aP === ao) {
                        throw aP = ar, aN.arg;
                      }
                      aN.dispatchException(aN.arg);
                    }
                  } else {
                    "return" === aN.method && aN.abrupt("return", aN.arg);
                  }
                }
                aP = aq;
                var aX = an(aL, aM, aN);
                if ("normal" === aX.type) {
                  {
                    if (aP = aN.done ? ar : ap, aX.arg === as) {
                      continue;
                    }
                    var aY = {
                      value: aX.arg,
                      done: aN.done
                    };
                    return aY;
                  }
                }
                "throw" === aX.type && (aP = ar, aN.method = "throw", aN.arg = aX.arg);
              }
            }
          }
        };
      }
    }
    function aD(aL, aM) {
      {
        var aN = aM.method;
        var aO = aL.iterator[aN];
        if (aO === ac) {
          aM.delegate = null;
          "throw" === aN && aL.iterator.return && (aM.method = "return", aM.arg = ac, aD(aL, aM), "throw" === aM.method) || "return" !== aN && (aM.method = "throw", aM.arg = new TypeError("The iterator does not provide a '" + aN + "' method"));
          return as;
        }
        var aP = an(aO, aL.iterator, aM.arg);
        if ("throw" === aP.type) {
          aM.method = "throw";
          aM.arg = aP.arg;
          aM.delegate = null;
          return as;
        }
        var aQ = aP.arg;
        return aQ ? aQ.done ? (aM[aL.resultName] = aQ.value, aM.next = aL.nextLoc, "return" !== aM.method && (aM.method = "next", aM.arg = ac), aM.delegate = null, as) : aQ : (aM.method = "throw", aM.arg = new TypeError("iterator result is not an object"), aM.delegate = null, as);
      }
    }
    function aE(aL) {
      {
        var aP = {
          tryLoc: aL[0]
        };
        1 in aL && (aP.catchLoc = aL[1]);
        2 in aL && (aP.finallyLoc = aL[2], aP.afterLoc = aL[3]);
        this.tryEntries.push(aP);
      }
    }
    function aF(aL) {
      {
        var aM = aL.completion || {};
        aM.type = "normal";
        delete aM.arg;
        aL.completion = aM;
      }
    }
    function aG(aL) {
      {
        var aM = {
          tryLoc: "root"
        };
        this.tryEntries = [aM];
        aL.forEach(aE, this);
        this.reset(true);
      }
    }
    function aH(aL) {
      {
        if (aL || "" === aL) {
          {
            var aN = aL[ai];
            if (aN) {
              return aN.call(aL);
            }
            if ("function" == typeof aL.next) {
              return aL;
            }
            if (!isNaN(aL.length)) {
              {
                var aO = -1;
                var aP = function aS() {
                  {
                    for (; ++aO < aL.length;) {
                      if (af.call(aL, aO)) {
                        aS.value = aL[aO];
                        aS.done = false;
                        return aS;
                      }
                    }
                    aS.value = ac;
                    aS.done = true;
                    return aS;
                  }
                };
                return aP.next = aP;
              }
            }
          }
        }
        throw new TypeError(b(aL) + " is not iterable");
      }
    }
    au.prototype = av;
    ag(az, "constructor", {
      value: av,
      configurable: true
    });
    ag(av, "constructor", {
      value: au,
      configurable: true
    });
    au.displayName = al(av, ak, "GeneratorFunction");
    aA(aB.prototype);
    al(aB.prototype, aj, function () {
      return this;
    });
    aA(az);
    al(az, ak, "Generator");
    al(az, ai, function () {
      {
        return this;
      }
    });
    al(az, "toString", function () {
      return "[object Generator]";
    });
    ad.keys = function (aL) {
      {
        var aN = Object(aL);
        var aO = [];
        for (var aP in aN) aO.push(aP);
        aO.reverse();
        return function aQ() {
          for (; aO.length;) {
            {
              var aR = aO.pop();
              if (aR in aN) {
                aQ.value = aR;
                aQ.done = false;
                return aQ;
              }
            }
          }
          aQ.done = true;
          return aQ;
        };
      }
    };
    ad.values = aH;
    aG.prototype = {
      constructor: aG,
      reset: function (aL) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = ac, this.done = false, this.delegate = null, this.method = "next", this.arg = ac, this.tryEntries.forEach(aF), !aL) {
            for (var aN in this) "t" === aN.charAt(0) && af.call(this, aN) && !isNaN(+aN.slice(1)) && (this[aN] = ac);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aL = this.tryEntries[0].completion;
          if ("throw" === aL.type) {
            throw aL.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aL) {
        {
          if (this.done) {
            throw aL;
          }
          var aN = this;
          function aT(aU, aV) {
            aQ.type = "throw";
            aQ.arg = aL;
            aN.next = aU;
            aV && (aN.method = "next", aN.arg = ac);
            return !!aV;
          }
          for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
            {
              var aP = this.tryEntries[aO];
              var aQ = aP.completion;
              if ("root" === aP.tryLoc) {
                return aT("end");
              }
              if (aP.tryLoc <= this.prev) {
                {
                  var aR = af.call(aP, "catchLoc");
                  var aS = af.call(aP, "finallyLoc");
                  if (aR && aS) {
                    {
                      if (this.prev < aP.catchLoc) {
                        return aT(aP.catchLoc, true);
                      }
                      if (this.prev < aP.finallyLoc) {
                        return aT(aP.finallyLoc);
                      }
                    }
                  } else {
                    if (aR) {
                      {
                        if (this.prev < aP.catchLoc) {
                          return aT(aP.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aS) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aP.finallyLoc) {
                          return aT(aP.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aL, aM) {
        {
          for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
            {
              var aP = this.tryEntries[aO];
              if (aP.tryLoc <= this.prev && af.call(aP, "finallyLoc") && this.prev < aP.finallyLoc) {
                {
                  var aQ = aP;
                  break;
                }
              }
            }
          }
          aQ && ("break" === aL || "continue" === aL) && aQ.tryLoc <= aM && aM <= aQ.finallyLoc && (aQ = null);
          var aR = aQ ? aQ.completion : {};
          aR.type = aL;
          aR.arg = aM;
          return aQ ? (this.method = "next", this.next = aQ.finallyLoc, as) : this.complete(aR);
        }
      },
      complete: function (aL, aM) {
        {
          if ("throw" === aL.type) {
            throw aL.arg;
          }
          "break" === aL.type || "continue" === aL.type ? this.next = aL.arg : "return" === aL.type ? (this.rval = this.arg = aL.arg, this.method = "return", this.next = "end") : "normal" === aL.type && aM && (this.next = aM);
          return as;
        }
      },
      finish: function (aL) {
        {
          for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
            {
              var aP = this.tryEntries[aO];
              if (aP.finallyLoc === aL) {
                this.complete(aP.completion, aP.afterLoc);
                aF(aP);
                return as;
              }
            }
          }
        }
      },
      catch: function (aL) {
        {
          for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
            {
              var aO = this.tryEntries[aN];
              if (aO.tryLoc === aL) {
                {
                  var aP = aO.completion;
                  if ("throw" === aP.type) {
                    {
                      var aQ = aP.arg;
                      aF(aO);
                    }
                  }
                  return aQ;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aL, aM, aN) {
        this.delegate = {
          iterator: aH(aL),
          resultName: aM,
          nextLoc: aN
        };
        "next" === this.method && (this.arg = ac);
        return as;
      }
    };
    return ad;
  }
  function h(ab, ac, ad, ae, af, ag, ah) {
    {
      try {
        {
          var ai = ab[ag](ah);
          var aj = ai.value;
        }
      } catch (am) {
        return void ad(am);
      }
      ai.done ? ac(aj) : Promise.resolve(aj).then(ae, af);
    }
  }
  function i(ab) {
    return function () {
      var ae = this;
      var af = arguments;
      return new Promise(function (ag, ah) {
        var aj = ab.apply(ae, af);
        function ak(am) {
          {
            h(aj, ag, ah, ak, al, "next", am);
          }
        }
        function al(am) {
          h(aj, ag, ah, ak, al, "throw", am);
        }
        ak(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.WangChao : $.getdata("WangChao")) || "";
  var k = undefined;
  var l = "";
  var m = "64";
  var n = "";
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "10019";
  var x = "";
  var y = "";
  var z = "FR*r!isE5W";
  function A() {
    return B.apply(this, arguments);
  }
  function B() {
    var ab = {
      NKuWZ: function (ac, ad) {
        return ac > ad;
      },
      vpKBE: function (ac, ad) {
        return ac in ad;
      },
      XQTHO: "Utils_Code",
      YoyuZ: function (ac) {
        return ac();
      },
      QhzEF: function (ac, ad) {
        return ac >= ad;
      },
      fMbFU: "✅ Utils加载成功, 请继续",
      vetym: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
      yjOUZ: "end",
      uYkfS: function (ac, ad) {
        return ac === ad;
      },
      dNHIA: "UbwIS",
      uuMlS: function (ac, ad, ae) {
        return ac(ad, ae);
      },
      djSKF: "抽奖获得：",
      MGfwx: "用户：",
      IHRJe: "NFxwg",
      zBntB: " API请求失败，请检查网路重试",
      UpqQm: "function",
      gxGJc: function (ac, ad) {
        return ac !== ad;
      },
      czWCE: "next",
      XtEPk: "iterator result is not an object",
      AoDnw: function (ac, ad) {
        return ac + ad;
      },
      pbvnR: "作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n",
      cCrlJ: "XhdHk",
      BzUxv: "先去boxjs填写账号密码",
      ikIpn: function (ac, ad) {
        return ac(ad);
      },
      YyvEp: "yNiIG",
      kAGQn: "随机生成UA",
      MfzGo: function (ac) {
        return ac();
      },
      xTmYv: "开始任务",
      EqXWU: "/api/account/init",
      fwqrp: "获取signature_key",
      QxlZc: "获取code",
      VzNGW: function (ac, ad) {
        return ac(ad);
      },
      nNkGc: "/web/oauth/credential_auth",
      WDMty: "&token=&type=-1&union_id=",
      eGlDI: "登录成功",
      vrWIh: "/api/app_feature_switch/list",
      SXKGU: "进入app：",
      evvpB: "阅读抽奖",
      ndERG: "获取登录cookie",
      uLlad: "/prod-api/user-read/app/login?id=",
      tgdiY: "&deviceId=",
      dmjNv: "XJnui",
      mewvk: "/prod-api/user-read/list/",
      hAkrQ: "TbmWK",
      aAAUP: "uEjdY",
      khDai: "文章：",
      VzyZd: "&is_end=true&read_time=7934",
      kjXhD: "阅读：",
      PBHRu: function (ac, ad) {
        return ac(ad);
      },
      AYfnl: function (ac) {
        return ac();
      },
      uiEWD: function (ac, ad) {
        return ac === ad;
      },
      rtWiC: "dvEdi",
      lsPTc: "&sessionId=",
      OTPXF: "/tzrb/awardUpgrade/list?activityId=67",
      TJkxw: function (ac, ad) {
        return ac < ad;
      },
      dafMB: function (ac, ad) {
        return ac !== ad;
      },
      DbtFd: "LDkOA",
      DHpuQ: "答题抽奖",
      rakPb: "/wcgames/WordFillGame/login/?accountId=",
      mSyuR: "rloEa",
      dYOne: function (ac, ad) {
        return ac < ad;
      },
      gNXvU: "GqyWH",
      oNvrK: "获取题目",
      bFNML: "HdkcV",
      PKcef: "题目：",
      ejDQo: "答题：",
      rgUCf: "已领取支付宝红包",
      ljdce: function (ac, ad) {
        return ac !== ad;
      },
      xeFHm: "Tgicu",
      fufVo: "未绑定支付宝",
      XPXLM: "/wcgames/WordFillGame/generate_custom_redpacket/",
      pbSOo: " 答题抽奖获得支付宝红包："
    };
    B = i(g().mark(function ad() {
      var ae = {
        ZRvfQ: function (aH) {
          return aH();
        },
        ybDHx: function (aH, aI) {
          return aH > aI;
        },
        YJvri: function (aH, aI) {
          return aH * aI;
        },
        VStIt: function (aH, aI) {
          return aH in aI;
        },
        jyvUA: "Utils_Code",
        yfkXO: function (aH, aI) {
          return aH(aI);
        },
        AguML: function (aH) {
          return aH();
        },
        wRqiz: function (aH, aI) {
          return aH >= aI;
        },
        HwmDA: "✅ Utils加载成功, 请继续",
        jItgY: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
        QHRdc: "end",
        NSZWt: function (aH, aI) {
          return aH === aI;
        },
        ADIkv: "UbwIS",
        HqSKe: function (aH, aI, aJ) {
          return aH(aI, aJ);
        },
        JwxFe: "抽奖获得：",
        oXmow: "用户：",
        cxOJF: " 抽奖获得：",
        iVSMJ: "NFxwg",
        wnRkj: " API请求失败，请检查网路重试",
        vCxjx: function (aH, aI) {
          return aH(aI);
        },
        axcFH: "function",
        FCwdj: function (aH, aI) {
          return aH !== aI;
        },
        fjBDC: "next",
        sdAwA: "iterator result is not an object",
        OXnBY: function (aH, aI) {
          return aH === aI;
        },
        PYbpz: function (aH, aI) {
          return aH + aI;
        },
        BhonC: "' method",
        JLyaB: "dAxoh",
        sdoVO: "作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n",
        mVKzB: function (aH, aI) {
          return aH === aI;
        },
        muqkR: "XhdHk",
        CjckF: "FxKdE",
        NSgcm: "先去boxjs填写账号密码",
        OSnNU: function (aH, aI) {
          return aH(aI);
        },
        wVNrH: function (aH) {
          return aH();
        },
        ZjCsb: function (aH, aI) {
          return aH(aI);
        },
        YeGNc: "yNiIG",
        wcTRt: "随机生成UA",
        Mcxku: function (aH) {
          return aH();
        },
        swUee: "开始任务",
        xbaUN: "获取sessionId",
        bNOBZ: function (aH, aI) {
          return aH(aI);
        },
        ELdDd: "/api/account/init",
        AvvSR: "获取signature_key",
        khMtj: "/web/init?client_id=",
        oRKWJ: "获取code",
        MNmyp: function (aH, aI) {
          return aH(aI);
        },
        LnfBp: "/web/oauth/credential_auth",
        OlTUP: "check_token=&code=",
        Wjwgg: "&token=&type=-1&union_id=",
        nEFRa: "登录成功",
        ZuzyV: "/api/app_feature_switch/list",
        SRdjx: "进入app：",
        iRxya: "————————————",
        eDhlM: "阅读抽奖",
        XlcRt: "获取登录cookie",
        OeYlI: "/prod-api/user-read/app/login?id=",
        BLlmD: "&deviceId=",
        adwhl: "XJnui",
        JrQAd: "continue",
        WxGrG: "/prod-api/user-read/list/",
        wVexC: "TbmWK",
        drBXs: "uEjdY",
        iUIPI: "文章：",
        BOsZw: function (aH, aI) {
          return aH(aI);
        },
        UrbOg: function (aH, aI) {
          return aH(aI);
        },
        nfibq: "/api/article/read_time?channel_article_id=",
        jlQXg: "&is_end=true&read_time=7934",
        fYjqJ: function (aH, aI, aJ) {
          return aH(aI, aJ);
        },
        jbbTL: "阅读：",
        IzaOT: function (aH, aI) {
          return aH(aI);
        },
        dHKJE: function (aH) {
          return aH();
        },
        hqrQd: "剩余抽奖次数：",
        KnxlH: function (aH, aI) {
          return aH === aI;
        },
        blpMJ: "dvEdi",
        GtCCX: "khLAr",
        ItHwj: "&sessionId=",
        tFYBp: "/tzrb/awardUpgrade/list?activityId=67",
        HwpkG: function (aH, aI) {
          return aH < aI;
        },
        yCNiD: function (aH, aI) {
          return aH !== aI;
        },
        nsrPJ: "LDkOA",
        KziCm: function (aH) {
          return aH();
        },
        BNJvT: "答题抽奖",
        EhpzD: "/wcgames/WordFillGame/login/?accountId=",
        qAuCV: "rloEa",
        epveO: "/wcgames/WordFillGame/get_user_info/",
        AOZNd: "/5 已闯过",
        DiAce: function (aH, aI) {
          return aH < aI;
        },
        MMtGu: "GqyWH",
        GIHHY: "获取题目",
        bgves: function (aH, aI) {
          return aH(aI);
        },
        eoSVA: function (aH, aI) {
          return aH !== aI;
        },
        EqxgY: "HdkcV",
        gzTKW: "题目：",
        ivMmQ: " 答案：",
        QiYMP: "/wcgames/WordFillGame/submit_answer/",
        jFPTS: "答题：",
        fujLV: function (aH, aI) {
          return aH != aI;
        },
        PIbuv: "已领取支付宝红包",
        SbaAr: function (aH, aI) {
          return aH !== aI;
        },
        ueAeD: "Tgicu",
        QgnvV: "未绑定支付宝",
        esQra: "/wcgames/WordFillGame/generate_custom_redpacket/",
        vgcRN: "答题抽奖获得支付宝红包：",
        XbIVB: " 答题抽奖获得支付宝红包：",
        MApmh: "iOpMd",
        EyFIf: function (aH, aI) {
          return aH(aI);
        }
      };
      var af;
      var ag;
      var ah;
      var ai;
      var aj;
      var ak;
      var al;
      var am;
      var an;
      var ao;
      var ap;
      var aq;
      var ar;
      var as;
      var at;
      var au;
      var av;
      var aw;
      var ax;
      var ay;
      var az;
      var aA;
      var aB;
      var aC;
      var aD;
      var aE;
      var aF;
      var aG;
      return g().wrap(function (aI) {
        {
          for (;;) {
            switch (aI.prev = aI.next) {
              case 0:
                if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                  {
                    aI.next = 6;
                    break;
                  }
                }
                console.log("先去boxjs填写账号密码");
                aI.next = 5;
                return a9("先去boxjs填写账号密码");
              case 5:
                return aI.abrupt("return");
              case 6:
                aI.next = 8;
                return a7();
              case 8:
                k = aI.sent;
                af = j.split(" ");
                ag = c(af);
                aI.prev = 11;
                ag.s();
              case 13:
                if ((ah = ag.n()).done) {
                  {
                    aI.next = 166;
                    break;
                  }
                }
                ai = ah.value;
                console.log("随机生成UA");
                aj = a5();
                n = aj.ua;
                o = aj.commonUa;
                p = aj.uuid;
                console.log(n);
                console.log(o);
                u = ai.split("&")[0];
                v = ai.split("&")[1];
                console.log("用户：".concat(u, "开始任务"));
                console.log("获取sessionId");
                aI.next = 28;
                return I("/api/account/init");
              case 28:
                ak = aI.sent;
                x = ak.data.session.id;
                console.log(x);
                console.log("获取signature_key");
                aI.next = 34;
                return C("/web/init?client_id=".concat(w));
              case 34:
                al = aI.sent;
                l = al.data.client.signature_key;
                console.log(l);
                console.log("获取code");
                aI.next = 40;
                return E("/web/oauth/credential_auth");
              case 40:
                if (am = aI.sent, am.data) {
                  {
                    aI.next = 44;
                    break;
                  }
                }
                console.log(am.message);
                return aI.abrupt("continue", 164);
              case 44:
                an = am.data.authorization_code.code;
                console.log(an);
                console.log("登录");
                aI.next = 49;
                return I("/api/zbtxz/login", "check_token=&code=".concat(an, "&token=&type=-1&union_id="));
              case 49:
                ao = aI.sent;
                console.log("登录成功");
                t = ao.data.session.account_id;
                x = ao.data.session.id;
                aI.next = 55;
                return G("/api/app_feature_switch/list");
              case 55:
                ap = aI.sent;
                console.log("进入app：".concat(ap.message));
                console.log("————————————");
                console.log("阅读抽奖");
                q = "";
                console.log("获取登录cookie");
                aI.next = 63;
                return K("/prod-api/user-read/app/login?id=".concat(t, "&sessionId=").concat(x, "&deviceId=").concat(p));
              case 63:
                if (q = aI.sent, q) {
                  {
                    aI.next = 66;
                    break;
                  }
                }
                return aI.abrupt("continue", 164);
              case 66:
                console.log(q);
                aI.next = 69;
                return M("/prod-api/user-read/list/".concat(a4()));
              case 69:
                aq = aI.sent;
                ar = c(aq.data.articleIsReadList);
                aI.prev = 71;
                ar.s();
              case 73:
                if ((as = ar.n()).done) {
                  {
                    aI.next = 89;
                    break;
                  }
                }
                at = as.value;
                console.log("文章：".concat(at.title));
                aI.next = 78;
                return G("/api/article/detail?id=".concat(at.newsId));
              case 78:
                aI.sent;
                aI.next = 81;
                return G("/api/article/read_time?channel_article_id=".concat(at.newsId, "&is_end=true&read_time=7934"));
              case 81:
                aI.sent;
                au = JSON.stringify({
                  timestamp: Date.now(),
                  articleId: at.id,
                  accountId: t
                });
                aI.next = 85;
                return M("/prod-api/already-read/article/new?signature=".concat(a0(au)), au);
              case 85:
                av = aI.sent;
                console.log("阅读：".concat(av.msg));
              case 87:
                aI.next = 73;
                break;
              case 89:
                aI.next = 94;
                break;
              case 91:
                aI.prev = 91;
                aI.t0 = aI.catch(71);
                ar.e(aI.t0);
              case 94:
                aI.prev = 94;
                ar.f();
                return aI.finish(94);
              case 97:
                aI.next = 99;
                return M("/prod-api/user-read-count/count/".concat(a4()));
              case 99:
                if (aw = aI.sent, console.log("剩余抽奖次数：".concat(aw.data)), !(aw.data > 0)) {
                  {
                    aI.next = 119;
                    break;
                  }
                }
                s = "";
                aI.next = 105;
                return O("/tzrb/user/loginWC?accountId=".concat(t, "&sessionId=").concat(x));
              case 105:
                s = aI.sent;
                console.log("获取抽奖cookie");
                console.log(s);
                aI.next = 110;
                return Q("/tzrb/awardUpgrade/list?activityId=67");
              case 110:
                ax = aI.sent;
                ay = ax.data;
                az = g().mark(function aQ() {
                  {
                    var aS;
                    var aT;
                    return g().wrap(function (aV) {
                      {
                        for (;;) {
                          switch (aV.prev = aV.next) {
                            case 0:
                              aV.next = 2;
                              return S("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                            case 2:
                              aS = aV.sent;
                              aT = ay.findIndex(function (aX) {
                                {
                                  return aX.id == aS.data;
                                }
                              });
                              -1 != aT ? (console.log("抽奖获得：".concat(ay[aT].title)), y += "用户：".concat(u, " 抽奖获得：").concat(ay[aT].title, "\n")) : console.log(JSON.stringify(aS));
                            case 5:
                            case "end":
                              return aV.stop();
                          }
                        }
                      }
                    }, aQ);
                  }
                });
                aA = 0;
              case 114:
                if (!(aA < aw.data)) {
                  {
                    aI.next = 119;
                    break;
                  }
                }
                return aI.delegateYield(az(), "t1", 116);
              case 116:
                aA++;
                aI.next = 114;
                break;
              case 119:
                console.log("————————————");
                console.log("答题抽奖");
                r = "";
                console.log("获取登录cookie");
                aI.next = 125;
                return U("/wcgames/WordFillGame/login/?accountId=".concat(t, "&sessionId=").concat(x));
              case 125:
                if (r = aI.sent, r) {
                  {
                    aI.next = 128;
                    break;
                  }
                }
                return aI.abrupt("continue", 164);
              case 128:
                console.log(r);
                aI.next = 131;
                return W("/wcgames/WordFillGame/get_user_info/");
              case 131:
                aB = aI.sent;
                console.log("今日答题进度：".concat(aB.data.answerCount, "/5 已闯过").concat(aB.data.level, "关"));
                aC = aB.data.answerCount;
              case 134:
                if (!(aC < 5)) {
                  {
                    aI.next = 150;
                    break;
                  }
                }
                console.log("获取题目");
                aI.next = 138;
                return W("/wcgames/WordFillGame/get_question/");
              case 138:
                if (aE = aI.sent, null != aE && null !== (aD = aE.data) && undefined !== aD && aD.question) {
                  {
                    aI.next = 142;
                    break;
                  }
                }
                console.log(aE.message);
                return aI.abrupt("break", 150);
              case 142:
                console.log("题目：".concat(aE.data.question, " 答案：").concat(aE.data.answer));
                aI.next = 145;
                return Y("/wcgames/WordFillGame/submit_answer/", "accountId=".concat(t));
              case 145:
                aF = aI.sent;
                console.log("答题：".concat(aF.message));
              case 147:
                aC++;
                aI.next = 134;
                break;
              case 150:
                aI.next = 152;
                return W("/wcgames/WordFillGame/get_user_info/");
              case 152:
                if (aB = aI.sent, 1 != aB.data.isGetRed) {
                  aI.next = 156;
                  break;
                }
                console.log("已领取支付宝红包");
                return aI.abrupt("continue", 164);
              case 156:
                if (1 == aB.data.alipayId_bind) {
                  {
                    aI.next = 159;
                    break;
                  }
                }
                console.log("未绑定支付宝");
                return aI.abrupt("continue", 164);
              case 159:
                aI.next = 161;
                return W("/wcgames/WordFillGame/generate_custom_redpacket/");
              case 161:
                aG = aI.sent;
                console.log("答题抽奖获得支付宝红包：".concat(aG.message, "元"));
                y += "用户：".concat(u, " 答题抽奖获得支付宝红包：").concat(aG.message, "元\n");
              case 164:
                aI.next = 13;
                break;
              case 166:
                aI.next = 171;
                break;
              case 168:
                aI.prev = 168;
                aI.t2 = aI.catch(11);
                ag.e(aI.t2);
              case 171:
                aI.prev = 171;
                ag.f();
                return aI.finish(171);
              case 174:
                if (!y) {
                  {
                    aI.next = 177;
                    break;
                  }
                }
                aI.next = 177;
                return a9(y);
              case 177:
              case "end":
                return aI.stop();
            }
          }
        }
      }, ad, null, [[11, 168, 171, 174], [71, 91, 94, 97]]);
    }));
    return B.apply(this, arguments);
  }
  function C(ab) {
    {
      return D.apply(this, arguments);
    }
  }
  function D() {
    {
      D = i(g().mark(function ad(ae) {
        return g().wrap(function (ag) {
          {
            for (;;) {
              switch (ag.prev = ag.next) {
                case 0:
                  return ag.abrupt("return", new Promise(function (ai) {
                    {
                      var ak = {
                        url: "https://passport.tmuyun.com".concat(ae),
                        headers: {
                          Connection: "Keep-Alive",
                          "Cache-Control": "no-cache",
                          "X-REQUEST-ID": a3(),
                          "Accept-Encoding": "gzip",
                          "user-agent": n
                        }
                      };
                      $.get(ak, function () {
                        {
                          var am = i(g().mark(function ao(ap, aq, ar) {
                            return g().wrap(function (at) {
                              {
                                for (;;) {
                                  switch (at.prev = at.next) {
                                    case 0:
                                      try {
                                        ap ? (console.log("".concat(JSON.stringify(ap))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ai(JSON.parse(ar));
                                      } catch (ax) {
                                        {
                                          $.logErr(ax, aq);
                                        }
                                      } finally {
                                        {
                                          ai();
                                        }
                                      }
                                    case 1:
                                    case "end":
                                      return at.stop();
                                  }
                                }
                              }
                            }, ao);
                          }));
                          return function (ap, aq, ar) {
                            {
                              return am.apply(this, arguments);
                            }
                          };
                        }
                      }());
                    }
                  }));
                case 1:
                case "end":
                  return ag.stop();
              }
            }
          }
        }, ad);
      }));
      return D.apply(this, arguments);
    }
  }
  function E(ab) {
    {
      return F.apply(this, arguments);
    }
  }
  function F() {
    F = i(g().mark(function ab(ac) {
      var ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              ae = a1();
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": ae.uuid,
                  "X-SIGNATURE": ae.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": n
                };
                var ak = {
                  url: "https://passport.tmuyun.com".concat(ac),
                  headers: aj,
                  body: ae.body
                };
                $.post(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (as) {
                      {
                        for (;;) {
                          switch (as.prev = as.next) {
                            case 0:
                              try {
                                {
                                  ao ? (console.log("".concat(JSON.stringify(ao))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ah(JSON.parse(aq));
                                }
                              } catch (aw) {
                                {
                                  $.logErr(aw, ap);
                                }
                              } finally {
                                {
                                  ah();
                                }
                              }
                            case 1:
                            case "end":
                              return as.stop();
                          }
                        }
                      }
                    }, an);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return af.stop();
          }
        }
      }, ab);
    }));
    return F.apply(this, arguments);
  }
  function G(ab) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function ac(ad) {
      var ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              ae = a2(ad);
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://vapp.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ae.time,
                    "X-SESSION-ID": x,
                    "X-REQUEST-ID": ae.uuid,
                    "X-SIGNATURE": ae.signature,
                    "X-TENANT-ID": m,
                    "X-ACCOUNT-ID": t,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": o
                  }
                };
                $.get(aj, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !am) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ao));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, an);
                          case 14:
                            aq.prev = 14;
                            ah();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, al, null, [[0, 11, 14, 17]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return H.apply(this, arguments);
  }
  function I(ab, ac) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function ab(ac, ad) {
      var af;
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              af = a2(ac);
              return ag.abrupt("return", new Promise(function (ah) {
                var aj = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": af.time,
                  "X-SESSION-ID": x,
                  "X-REQUEST-ID": af.uuid,
                  "X-SIGNATURE": af.signature,
                  "X-TENANT-ID": m,
                  "X-ACCOUNT-ID": t,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": o
                };
                var ak = {
                  url: "https://vapp.taizhou.com.cn".concat(ac),
                  headers: aj,
                  body: ad
                };
                $.post(ak, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !an) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ap));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ao);
                          case 14:
                            ar.prev = 14;
                            ah();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ag.stop();
          }
        }
      }, ab);
    }));
    return J.apply(this, arguments);
  }
  function K(ab) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function ab(ac) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ah = {
                  url: "https://xmt.taizhou.com.cn".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: q,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ah, function () {
                  var aj = i(g().mark(function ak(al, am, an) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            if (ap.prev = 0, !al) {
                              ap.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(al)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ap.next = 16;
                            break;
                          case 6:
                            ap.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(an).code) {
                              ap.next = 13;
                              break;
                            }
                            console.log(JSON.parse(an).msg);
                            y += "用户：".concat(u, " ").concat(JSON.parse(an).msg, "\n");
                            ag("");
                            return ap.abrupt("return");
                          case 13:
                            q = $.isNode() ? am.headers["set-cookie"][0] : am.headers["set-cookie"] || am.headers["Set-Cookie"];
                            q = q.split(";")[0];
                            ag(q);
                          case 16:
                            ap.next = 21;
                            break;
                          case 18:
                            ap.prev = 18;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, am);
                          case 21:
                            ap.prev = 21;
                            ag();
                            return ap.finish(21);
                          case 24:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, ak, null, [[0, 18, 21, 24]]);
                  }));
                  return function (al, am, an) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return L.apply(this, arguments);
  }
  function M(ab) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function ac(ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ag) {
                var ai = {
                  url: "https://xmt.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: q,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ai, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            if (ap.prev = 0, !am) {
                              ap.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ap.next = 9;
                            break;
                          case 6:
                            ap.next = 8;
                            return $.wait(2000);
                          case 8:
                            ag(JSON.parse(ao));
                          case 9:
                            ap.next = 14;
                            break;
                          case 11:
                            ap.prev = 11;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, an);
                          case 14:
                            ap.prev = 14;
                            ag();
                            return ap.finish(14);
                          case 17:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, al, null, [[0, 11, 14, 17]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return N.apply(this, arguments);
  }
  function O(ab) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function ac(ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ah = {
                  Connection: "Keep-Alive",
                  Accept: "*/*",
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  cookie: s,
                  Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                  "X-Requested-With": "com.shangc.tiennews.taizhou",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                };
                var ai = {
                  url: "https://srv-app.taizhou.com.cn".concat(ad),
                  headers: ah
                };
                $.get(ai, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !am) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 11;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            s = $.isNode() ? an.headers["set-cookie"][0] : an.headers["set-cookie"] || an.headers["Set-Cookie"];
                            s = s.split(";")[0];
                            ag(s);
                          case 11:
                            aq.next = 16;
                            break;
                          case 13:
                            aq.prev = 13;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, an);
                          case 16:
                            aq.prev = 16;
                            ag();
                            return aq.finish(16);
                          case 19:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, al, null, [[0, 13, 16, 19]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ac);
    }));
    return P.apply(this, arguments);
  }
  function Q(ab) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function ab(ac) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (af) {
                var ah = {
                  url: "https://srv-app.taizhou.com.cn".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ah, function () {
                  var aj = i(g().mark(function ak(al, am, an) {
                    return g().wrap(function (ao) {
                      for (;;) {
                        switch (ao.prev = ao.next) {
                          case 0:
                            if (ao.prev = 0, !al) {
                              ao.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(al)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ao.next = 9;
                            break;
                          case 6:
                            ao.next = 8;
                            return $.wait(2000);
                          case 8:
                            af(JSON.parse(an));
                          case 9:
                            ao.next = 14;
                            break;
                          case 11:
                            ao.prev = 11;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, am);
                          case 14:
                            ao.prev = 14;
                            af();
                            return ao.finish(14);
                          case 17:
                          case "end":
                            return ao.stop();
                        }
                      }
                    }, ak, null, [[0, 11, 14, 17]]);
                  }));
                  return function (al, am, an) {
                    return aj.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ab);
    }));
    return R.apply(this, arguments);
  }
  function S(ab, ac) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function ac(ad, ae) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://srv-app.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  body: ae
                };
                $.post(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !an) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(ap));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, ao);
                          case 14:
                            aq.prev = 14;
                            ah();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ac);
    }));
    return T.apply(this, arguments);
  }
  function U(ab) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function ac(ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ai = {
                  Connection: "Keep-Alive",
                  Accept: "*/*",
                  Cookie: r,
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  Referer: "https://srv2.taizhou.com.cn/html/poetry-competition/",
                  "X-Requested-With": "com.shangc.tiennews.taizhou",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                };
                var aj = {
                  url: "https://srv2.taizhou.com.cn".concat(ad),
                  headers: ai
                };
                $.get(aj, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !am) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 16;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(ao).code) {
                              aq.next = 13;
                              break;
                            }
                            console.log(JSON.parse(ao).msg);
                            y += "用户：".concat(u, " ").concat(JSON.parse(ao).msg, "\n");
                            ag("");
                            return aq.abrupt("return");
                          case 13:
                            r = $.isNode() ? an.headers["set-cookie"][0] || an.headers["Set-Cookie"][0] : an.headers["set-cookie"] || an.headers["Set-Cookie"];
                            r = r.split(";")[0];
                            ag(r);
                          case 16:
                            aq.next = 21;
                            break;
                          case 18:
                            aq.prev = 18;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, an);
                          case 21:
                            aq.prev = 21;
                            ag();
                            return aq.finish(21);
                          case 24:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, al, null, [[0, 18, 21, 24]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ac);
    }));
    return V.apply(this, arguments);
  }
  function W(ab) {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function ac(ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ag) {
                var ai = {
                  Connection: "Keep-Alive",
                  Accept: "*/*",
                  Cookie: r,
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  Referer: "https://srv2.taizhou.com.cn/html/poetry-competition/",
                  "X-Requested-With": "com.shangc.tiennews.taizhou",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                };
                var aj = {
                  url: "https://srv2.taizhou.com.cn".concat(ad),
                  headers: ai
                };
                $.get(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !an) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(an)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 9;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            ag(JSON.parse(ap));
                          case 9:
                            aq.next = 14;
                            break;
                          case 11:
                            aq.prev = 11;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, ao);
                          case 14:
                            aq.prev = 14;
                            ag();
                            return aq.finish(14);
                          case 17:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, am, null, [[0, 11, 14, 17]]);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return X.apply(this, arguments);
  }
  function Y(ab, ac) {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = i(g().mark(function ab(ac, ad) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://srv2.taizhou.com.cn".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: r,
                    "content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://srv2.taizhou.com.cn/html/poetry-competition/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  body: ad
                };
                $.post(al, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ao) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(aq));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, ap);
                          case 14:
                            as.prev = 14;
                            aj();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ab);
    }));
    return Z.apply(this, arguments);
  }
  function a0(ab) {
    var ac = k.loadSM2();
    return ac.doEncrypt(ab, "04A50803A27F000D6B310607EBA2A1C899E82872C0B538CA41DB6F0183B4C7E164DAFC6946ABF93C8AF1C0AD96D0E770D29264EF9F907DDBAE97A2A0BB1036D4AC", 1);
  }
  function a1() {
    var ab = new (k.loadJSEncrypt())();
    ab.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    v = ab.encrypt(v);
    var ac = a3();
    var ad = "client_id=".concat(w, "&password=").concat(v, "&phone_number=").concat(u);
    var ae = "post%%/web/oauth/credential_auth?".concat(ad, "%%").concat(ac, "%%");
    ad = "client_id=".concat(w, "&password=").concat(encodeURIComponent(v), "&phone_number=").concat(u);
    CryptoJS = k.createCryptoJS();
    var af = CryptoJS.HmacSHA256(ae, l);
    var ag = CryptoJS.enc.Hex.stringify(af);
    var ah = {
      uuid: ac,
      signature: ag,
      body: ad
    };
    return ah;
  }
  function a2(ab) {
    var ac = a3();
    var ad = Date.now();
    ab.indexOf("?") > 0 && (ab = ab.substring(0, ab.indexOf("?")));
    CryptoJS = k.createCryptoJS();
    var ae = CryptoJS.SHA256("".concat(ab, "&&").concat(x, "&&").concat(ac, "&&").concat(ad, "&&").concat(z, "&&").concat(m)).toString();
    var af = {
      uuid: ac,
      time: ad,
      signature: ae
    };
    return af;
  }
  function a3() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ab) {
      var ac = 16 * Math.random() | 0;
      var ad = "x" === ab ? ac : 3 & ac | 8;
      return ad.toString(16);
    });
  }
  function a4() {
    var ab = new Date();
    var ac = ab.getFullYear();
    var ad = String(ab.getMonth() + 1).padStart(2, "0");
    var ae = String(ab.getDate()).padStart(2, "0");
    return "".concat(ac).concat(ad).concat(ae);
  }
  function a5() {
    var ab = "6.0.2";
    var ac = a3();
    var ad = a6(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var ae = "Xiaomi " + ad;
    var af = "Android";
    var ag = "".concat(af.toUpperCase(), ";").concat("11", ";").concat(w, ";").concat(ab, ";1.0;null;").concat(ad);
    var ah = "".concat(ab, ";").concat(ac, ";").concat(ae, ";").concat(af, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0");
    var ai = {
      ua: ag,
      commonUa: ah,
      uuid: ac
    };
    return ai;
  }
  function a6(ab) {
    return ab[Math.floor(Math.random() * ab.length)];
  }
  function a7() {
    return a8.apply(this, arguments);
  }
  function a8() {
    a8 = i(g().mark(function ac() {
      var ad;
      return g().wrap(function ae(af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              if (ad = $.getdata("Utils_Code") || "", !ad || !Object.keys(ad).length) {
                af.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ad);
              return af.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return af.abrupt("return", new Promise(function () {
                var aj = i(g().mark(function ak(al) {
                  return g().wrap(function an(ao) {
                    for (;;) {
                      switch (ao.prev = ao.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ap) {
                            $.setdata(ap, "Utils_Code");
                            eval(ap);
                            console.log("✅ Utils加载成功, 请继续");
                            al(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ao.stop();
                      }
                    }
                  }, ak);
                }));
                return function (al) {
                  return aj.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return a8.apply(this, arguments);
  }
  function a9(ab) {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = i(g().mark(function ad(ae) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              if (!$.isNode()) {
                af.next = 5;
                break;
              }
              af.next = 3;
              return notify.sendNotify($.name, ae);
            case 3:
              af.next = 6;
              break;
            case 5:
              $.msg($.name, "", ae);
            case 6:
            case "end":
              return af.stop();
          }
        }
      }, ad);
    }));
    return aa.apply(this, arguments);
  }
  i(g().mark(function ab() {
    return g().wrap(function (ac) {
      for (;;) {
        switch (ac.prev = ac.next) {
          case 0:
            ac.next = 2;
            return A();
          case 2:
          case "end":
            return ac.stop();
        }
      }
    }, ab);
  }))().catch(function (ac) {
    $.log(ac);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}