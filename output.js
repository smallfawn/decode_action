//Sun Mar 02 2025 10:33:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("西施眼");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a7) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (aa) {
      return typeof aa;
    } : function (aa) {
      {
        return aa && "function" == typeof Symbol && aa.constructor === Symbol && aa !== Symbol.prototype ? "symbol" : typeof aa;
      }
    };
    return b(a7);
  }
  function c(a7, a8) {
    {
      var aa = "undefined" != typeof Symbol && a7[Symbol.iterator] || a7["@@iterator"];
      if (!aa) {
        {
          if (Array.isArray(a7) || (aa = g(a7)) || a8 && a7 && "number" == typeof a7.length) {
            {
              aa && (a7 = aa);
              var ab = 0;
              var ac = function () {};
              return {
                s: ac,
                n: function () {
                  {
                    var ai = {
                      done: true
                    };
                    return ab >= a7.length ? ai : {
                      done: false,
                      value: a7[ab++]
                    };
                  }
                },
                e: function (ai) {
                  {
                    throw ai;
                  }
                },
                f: ac
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var ad;
      var ae = true;
      var af = false;
      return {
        s: function () {
          {
            aa = aa.call(a7);
          }
        },
        n: function () {
          {
            var aj = aa.next();
            ae = aj.done;
            return aj;
          }
        },
        e: function (aj) {
          {
            af = true;
            ad = aj;
          }
        },
        f: function () {
          {
            try {
              {
                ae || null == aa.return || aa.return();
              }
            } finally {
              {
                if (af) {
                  throw ad;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(a7, a8) {
    {
      return j(a7) || i(a7, a8) || g(a7, a8) || f();
    }
  }
  function f() {
    {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
  }
  function g(a7, a8) {
    {
      if (a7) {
        {
          if ("string" == typeof a7) {
            return h(a7, a8);
          }
          var aa = {}.toString.call(a7).slice(8, -1);
          "Object" === aa && a7.constructor && (aa = a7.constructor.name);
          return "Map" === aa || "Set" === aa ? Array.from(a7) : "Arguments" === aa || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(aa) ? h(a7, a8) : undefined;
        }
      }
    }
  }
  function h(a7, a8) {
    {
      (null == a8 || a8 > a7.length) && (a8 = a7.length);
      for (var a9 = 0, aa = Array(a8); a9 < a8; a9++) {
        aa[a9] = a7[a9];
      }
      return aa;
    }
  }
  function i(a7, a8) {
    var a9 = {
      NRkkW: function (ai, aj, ak, al) {
        return ai(aj, ak, al);
      },
      cNhlo: function (ai, aj) {
        return ai < aj;
      },
      ljvSU: "function",
      lXLAV: function (ai, aj) {
        return ai === aj;
      },
      Zqdor: function (ai, aj) {
        return ai === aj;
      },
      dplcu: "throw",
      kkiuZ: "return",
      WQcdn: function (ai, aj, ak) {
        return ai(aj, ak);
      },
      zohOx: function (ai, aj) {
        return ai === aj;
      },
      spnLr: function (ai, aj) {
        return ai !== aj;
      },
      YpdnY: function (ai, aj) {
        return ai + aj;
      },
      EBQnK: function (ai, aj) {
        return ai + aj;
      },
      zhnZb: "' method",
      DHEUi: function (ai, aj, ak, al) {
        return ai(aj, ak, al);
      },
      TuNhE: function (ai, aj) {
        return ai === aj;
      },
      vuFjx: "next",
      YHnCh: "iterator result is not an object",
      owNIZ: function (ai, aj) {
        return ai >= aj;
      }
    };
    {
      var aa = null == a7 ? null : "undefined" != typeof Symbol && a7[Symbol.iterator] || a7["@@iterator"];
      if (null != aa) {
        var ab;
        var ac;
        var ad;
        var ae;
        var af = [];
        var ag = true;
        var ah = false;
        try {
          {
            if (ad = (aa = aa.call(a7)).next, 0 === a8) {
              {
                if (Object(aa) !== aa) {
                  return;
                }
                ag = false;
              }
            } else {
              for (; !(ag = (ab = ad.call(aa)).done) && (af.push(ab.value), af.length !== a8); ag = true) {}
            }
          }
        } catch (ak) {
          {
            ah = true;
            ac = ak;
          }
        } finally {
          {
            try {
              {
                if (!ag && null != aa.return && (ae = aa.return(), Object(ae) !== ae)) {
                  return;
                }
              }
            } finally {
              {
                if (ah) {
                  throw ac;
                }
              }
            }
          }
        }
        return af;
      }
    }
  }
  function j(a7) {
    if (Array.isArray(a7)) {
      return a7;
    }
  }
  function k() {
    "use strict";

    k = function () {
      {
        return a9;
      }
    };
    var a8;
    var a9 = {
      wrap: ai,
      isGeneratorFunction: function (aH) {
        {
          var aI = "function" == typeof aH && aH.constructor;
          return !!aI && (aI === aq || "GeneratorFunction" === (aI.displayName || aI.name));
        }
      },
      mark: function (aH) {
        {
          Object.setPrototypeOf ? Object.setPrototypeOf(aH, ar) : (aH.__proto__ = ar, ah(aH, ag, "GeneratorFunction"));
          aH.prototype = Object.create(av);
          return aH;
        }
      }
    };
    var aa = Object.prototype;
    var ab = aa.hasOwnProperty;
    var ac = Object.defineProperty || function (aE, aF, aG) {
      {
        aE[aF] = aG.value;
      }
    };
    var ad = "function" == typeof Symbol ? Symbol : {};
    var ae = ad.iterator || "@@iterator";
    var af = ad.asyncIterator || "@@asyncIterator";
    var ag = ad.toStringTag || "@@toStringTag";
    function ah(aE, aF, aG) {
      {
        var aH = {
          value: aG,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aE, aF, aH);
        return aE[aF];
      }
    }
    try {
      {
        ah({}, "");
      }
    } catch (aF) {
      {
        ah = function (aG, aH, aI) {
          return aG[aH] = aI;
        };
      }
    }
    function ai(aH, aI, aJ, aK) {
      {
        var aL = aI && aI.prototype instanceof ap ? aI : ap;
        var aM = Object.create(aL.prototype);
        var aN = new aC(aK || []);
        ac(aM, "_invoke", {
          value: ay(aH, aJ, aN)
        });
        return aM;
      }
    }
    function aj(aH, aI, aJ) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aH.call(aI, aJ)
            };
          }
        } catch (aP) {
          {
            var aM = {
              type: "throw",
              arg: aP
            };
            return aM;
          }
        }
      }
    }
    var ak = "suspendedStart";
    var al = "suspendedYield";
    var am = "executing";
    var an = "completed";
    var ao = {};
    function ap() {}
    function aq() {}
    function ar() {}
    var as = {};
    ah(as, ae, function () {
      return this;
    });
    var at = Object.getPrototypeOf;
    var au = at && at(at(aD([])));
    au && au !== aa && ab.call(au, ae) && (as = au);
    ar.prototype = ap.prototype = Object.create(as);
    var av = ar.prototype;
    function aw(aH) {
      {
        ["next", "throw", "return"].forEach(function (aJ) {
          {
            ah(aH, aJ, function (aM) {
              {
                return this._invoke(aJ, aM);
              }
            });
          }
        });
      }
    }
    function ax(aH, aI) {
      {
        function aL(aM, aN, aO, aP) {
          {
            var aR = aj(aH[aM], aH, aN);
            if ("throw" !== aR.type) {
              {
                var aS = aR.arg;
                var aT = aS.value;
                return aT && "object" == b(aT) && ab.call(aT, "__await") ? aI.resolve(aT.__await).then(function (aV) {
                  {
                    aL("next", aV, aO, aP);
                  }
                }, function (aV) {
                  {
                    aL("throw", aV, aO, aP);
                  }
                }) : aI.resolve(aT).then(function (aV) {
                  aS.value = aV;
                  aO(aS);
                }, function (aV) {
                  {
                    return aL("throw", aV, aO, aP);
                  }
                });
              }
            }
            aP(aR.arg);
          }
        }
        var aK;
        ac(this, "_invoke", {
          value: function (aM, aN) {
            {
              function aP() {
                {
                  return new aI(function (aR, aS) {
                    {
                      aL(aM, aN, aR, aS);
                    }
                  });
                }
              }
              return aK = aK ? aK.then(aP, aP) : aP();
            }
          }
        });
      }
    }
    function ay(aH, aI, aJ) {
      {
        var aL = ak;
        return function (aN, aO) {
          {
            if (aL === am) {
              throw Error("Generator is already running");
            }
            if (aL === an) {
              {
                if ("throw" === aN) {
                  throw aO;
                }
                var aQ = {
                  value: a8,
                  done: true
                };
                return aQ;
              }
            }
            for (aJ.method = aN, aJ.arg = aO;;) {
              {
                var aR = aJ.delegate;
                if (aR) {
                  {
                    var aS = az(aR, aJ);
                    if (aS) {
                      {
                        if (aS === ao) {
                          continue;
                        }
                        return aS;
                      }
                    }
                  }
                }
                if ("next" === aJ.method) {
                  aJ.sent = aJ._sent = aJ.arg;
                } else {
                  if ("throw" === aJ.method) {
                    {
                      if (aL === ak) {
                        throw aL = an, aJ.arg;
                      }
                      aJ.dispatchException(aJ.arg);
                    }
                  } else {
                    "return" === aJ.method && aJ.abrupt("return", aJ.arg);
                  }
                }
                aL = am;
                var aT = aj(aH, aI, aJ);
                if ("normal" === aT.type) {
                  {
                    if (aL = aJ.done ? an : al, aT.arg === ao) {
                      continue;
                    }
                    var aU = {
                      value: aT.arg,
                      done: aJ.done
                    };
                    return aU;
                  }
                }
                "throw" === aT.type && (aL = an, aJ.method = "throw", aJ.arg = aT.arg);
              }
            }
          }
        };
      }
    }
    function az(aH, aI) {
      {
        var aN = aI.method;
        var aO = aH.iterator[aN];
        if (aO === a8) {
          aI.delegate = null;
          "throw" === aN && aH.iterator.return && (aI.method = "return", aI.arg = a8, az(aH, aI), "throw" === aI.method) || "return" !== aN && (aI.method = "throw", aI.arg = new TypeError("The iterator does not provide a '" + aN + "' method"));
          return ao;
        }
        var aP = aj(aO, aH.iterator, aI.arg);
        if ("throw" === aP.type) {
          aI.method = "throw";
          aI.arg = aP.arg;
          aI.delegate = null;
          return ao;
        }
        var aM = aP.arg;
        return aM ? aM.done ? (aI[aH.resultName] = aM.value, aI.next = aH.nextLoc, "return" !== aI.method && (aI.method = "next", aI.arg = a8), aI.delegate = null, ao) : aM : (aI.method = "throw", aI.arg = new TypeError("iterator result is not an object"), aI.delegate = null, ao);
      }
    }
    function aA(aH) {
      {
        var aJ = {
          tryLoc: aH[0]
        };
        1 in aH && (aJ.catchLoc = aH[1]);
        2 in aH && (aJ.finallyLoc = aH[2], aJ.afterLoc = aH[3]);
        this.tryEntries.push(aJ);
      }
    }
    function aB(aH) {
      var aJ = aH.completion || {};
      aJ.type = "normal";
      delete aJ.arg;
      aH.completion = aJ;
    }
    function aC(aH) {
      {
        var aI = {
          tryLoc: "root"
        };
        this.tryEntries = [aI];
        aH.forEach(aA, this);
        this.reset(true);
      }
    }
    function aD(aH) {
      {
        if (aH || "" === aH) {
          {
            var aK = aH[ae];
            if (aK) {
              return aK.call(aH);
            }
            if ("function" == typeof aH.next) {
              return aH;
            }
            if (!isNaN(aH.length)) {
              {
                var aL = -1;
                var aM = function aO() {
                  {
                    for (; ++aL < aH.length;) {
                      if (ab.call(aH, aL)) {
                        aO.value = aH[aL];
                        aO.done = false;
                        return aO;
                      }
                    }
                    aO.value = a8;
                    aO.done = true;
                    return aO;
                  }
                };
                return aM.next = aM;
              }
            }
          }
        }
        throw new TypeError(b(aH) + " is not iterable");
      }
    }
    aq.prototype = ar;
    ac(av, "constructor", {
      value: ar,
      configurable: true
    });
    ac(ar, "constructor", {
      value: aq,
      configurable: true
    });
    aq.displayName = ah(ar, ag, "GeneratorFunction");
    a9.awrap = function (aH) {
      {
        var aI = {
          __await: aH
        };
        return aI;
      }
    };
    aw(ax.prototype);
    ah(ax.prototype, af, function () {
      {
        return this;
      }
    });
    a9.AsyncIterator = ax;
    a9.async = function (aH, aI, aJ, aK, aL) {
      {
        undefined === aL && (aL = Promise);
        var aN = new ax(ai(aH, aI, aJ, aK), aL);
        return a9.isGeneratorFunction(aI) ? aN : aN.next().then(function (aP) {
          return aP.done ? aP.value : aN.next();
        });
      }
    };
    aw(av);
    ah(av, ag, "Generator");
    ah(av, ae, function () {
      {
        return this;
      }
    });
    ah(av, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    a9.keys = function (aH) {
      {
        var aI = Object(aH);
        var aJ = [];
        for (var aK in aI) aJ.push(aK);
        aJ.reverse();
        return function aM() {
          {
            for (; aJ.length;) {
              {
                var aO = aJ.pop();
                if (aO in aI) {
                  aM.value = aO;
                  aM.done = false;
                  return aM;
                }
              }
            }
            aM.done = true;
            return aM;
          }
        };
      }
    };
    a9.values = aD;
    aC.prototype = {
      constructor: aC,
      reset: function (aH) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = a8, this.done = false, this.delegate = null, this.method = "next", this.arg = a8, this.tryEntries.forEach(aB), !aH) {
            for (var aI in this) "t" === aI.charAt(0) && ab.call(this, aI) && !isNaN(+aI.slice(1)) && (this[aI] = a8);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aH = this.tryEntries[0].completion;
          if ("throw" === aH.type) {
            throw aH.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aH) {
        {
          if (this.done) {
            throw aH;
          }
          var aJ = this;
          function aQ(aR, aS) {
            {
              aM.type = "throw";
              aM.arg = aH;
              aJ.next = aR;
              aS && (aJ.method = "next", aJ.arg = a8);
              return !!aS;
            }
          }
          for (var aK = this.tryEntries.length - 1; aK >= 0; --aK) {
            {
              var aL = this.tryEntries[aK];
              var aM = aL.completion;
              if ("root" === aL.tryLoc) {
                return aQ("end");
              }
              if (aL.tryLoc <= this.prev) {
                {
                  var aN = ab.call(aL, "catchLoc");
                  var aO = ab.call(aL, "finallyLoc");
                  if (aN && aO) {
                    {
                      if (this.prev < aL.catchLoc) {
                        return aQ(aL.catchLoc, true);
                      }
                      if (this.prev < aL.finallyLoc) {
                        return aQ(aL.finallyLoc);
                      }
                    }
                  } else {
                    if (aN) {
                      if (this.prev < aL.catchLoc) {
                        return aQ(aL.catchLoc, true);
                      }
                    } else {
                      {
                        if (!aO) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aL.finallyLoc) {
                          return aQ(aL.finallyLoc);
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
      abrupt: function (aH, aI) {
        {
          for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
            {
              var aK = this.tryEntries[aJ];
              if (aK.tryLoc <= this.prev && ab.call(aK, "finallyLoc") && this.prev < aK.finallyLoc) {
                {
                  var aL = aK;
                  break;
                }
              }
            }
          }
          aL && ("break" === aH || "continue" === aH) && aL.tryLoc <= aI && aI <= aL.finallyLoc && (aL = null);
          var aM = aL ? aL.completion : {};
          aM.type = aH;
          aM.arg = aI;
          return aL ? (this.method = "next", this.next = aL.finallyLoc, ao) : this.complete(aM);
        }
      },
      complete: function (aH, aI) {
        {
          if ("throw" === aH.type) {
            throw aH.arg;
          }
          "break" === aH.type || "continue" === aH.type ? this.next = aH.arg : "return" === aH.type ? (this.rval = this.arg = aH.arg, this.method = "return", this.next = "end") : "normal" === aH.type && aI && (this.next = aI);
          return ao;
        }
      },
      finish: function (aH) {
        {
          for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
            {
              var aK = this.tryEntries[aJ];
              if (aK.finallyLoc === aH) {
                this.complete(aK.completion, aK.afterLoc);
                aB(aK);
                return ao;
              }
            }
          }
        }
      },
      catch: function (aH) {
        {
          for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
            {
              var aK = this.tryEntries[aJ];
              if (aK.tryLoc === aH) {
                {
                  var aL = aK.completion;
                  if ("throw" === aL.type) {
                    {
                      var aM = aL.arg;
                      aB(aK);
                    }
                  }
                  return aM;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aH, aI, aJ) {
        this.delegate = {
          iterator: aD(aH),
          resultName: aI,
          nextLoc: aJ
        };
        "next" === this.method && (this.arg = a8);
        return ao;
      }
    };
    return a9;
  }
  function l(a7, a8, a9, aa, ab, ac, ad) {
    {
      try {
        {
          var ae = a7[ac](ad);
          var af = ae.value;
        }
      } catch (ah) {
        {
          return void a9(ah);
        }
      }
      ae.done ? a8(af) : Promise.resolve(af).then(aa, ab);
    }
  }
  function m(a7) {
    return function () {
      var aa = this;
      var ab = arguments;
      return new Promise(function (ac, ad) {
        var ae = a7.apply(aa, ab);
        function af(ah) {
          {
            l(ae, ac, ad, af, ag, "next", ah);
          }
        }
        function ag(ah) {
          {
            l(ae, ac, ad, af, ag, "throw", ah);
          }
        }
        af(undefined);
      });
    };
  }
  var n = ($.isNode() ? process.env.XiShiYan : $.getdata("XiShiYan")) || "";
  var o = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live";
  var p = undefined;
  var q = "";
  var r = "";
  var s = "";
  var t = "34";
  var u = "";
  var v = "50";
  var w = "";
  var x = "";
  var y = "";
  var z = "";
  var A = "";
  var B = "";
  var C = "";
  var D = "uhzfzpj5l78yq6di";
  var E = "35c782a2";
  var F = "FR*r!isE5W";
  function G() {
    {
      return H.apply(this, arguments);
    }
  }
  function H() {
    {
      H = m(k().mark(function a8() {
        {
          var aa;
          var ab;
          var ac;
          var ad;
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
          var aH;
          var aI;
          var aJ;
          var aK;
          var aL;
          var aM;
          var aN;
          var aO;
          var aP;
          var aQ;
          var aR;
          var aS;
          var aT;
          var aU;
          var aV;
          var aW;
          var aX;
          var aY;
          var aZ;
          var b0;
          var b1;
          var b2;
          var b3;
          var b4;
          var b5;
          var b6;
          var b7;
          var b8;
          var b9;
          var ba;
          var bb;
          var bc;
          var bd;
          var bf;
          var bg;
          var bh;
          var bi;
          var bj;
          var bk;
          var bl;
          var bm;
          var bn;
          var bo;
          var bp;
          var bq;
          var br;
          var bs;
          var bt;
          var bu;
          var bv;
          var bw;
          var bx;
          return k().wrap(function (by) {
            {
              for (;;) {
                switch (by.prev = by.next) {
                  case 0:
                    if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                      {
                        by.next = 6;
                        break;
                      }
                    }
                    console.log("先去boxjs填写账号密码");
                    by.next = 5;
                    return a5("先去boxjs填写账号密码");
                  case 5:
                    return by.abrupt("return");
                  case 6:
                    by.next = 8;
                    return a3();
                  case 8:
                    p = by.sent;
                    aa = n.split(" ");
                    ab = c(aa);
                    by.prev = 11;
                    ab.s();
                  case 13:
                    if ((ac = ab.n()).done) {
                      {
                        by.next = 286;
                        break;
                      }
                    }
                    ad = ac.value;
                    console.log("随机生成UA");
                    af = a2();
                    y = af.ua;
                    z = af.commonUa;
                    A = af.uuid;
                    console.log(y);
                    console.log(z);
                    w = ad.split("&")[0];
                    x = ad.split("&")[1];
                    console.log("用户：".concat(w, "开始任务"));
                    console.log("获取sessionId");
                    by.next = 28;
                    return O("/api/account/init");
                  case 28:
                    ag = by.sent;
                    s = ag.data.session.id;
                    console.log(s);
                    console.log("获取signature_key");
                    by.next = 34;
                    return I("/web/init?client_id=".concat(v));
                  case 34:
                    ah = by.sent;
                    q = ah.data.client.signature_key;
                    console.log(q);
                    console.log("获取code");
                    by.next = 40;
                    return K("/web/oauth/credential_auth");
                  case 40:
                    if (ai = by.sent, ai.data) {
                      {
                        by.next = 44;
                        break;
                      }
                    }
                    console.log(ai.message);
                    return by.abrupt("continue", 284);
                  case 44:
                    aj = ai.data.authorization_code.code;
                    console.log(aj);
                    console.log("登录");
                    by.next = 49;
                    return O("/api/zbtxz/login", "check_token=&code=".concat(aj, "&token=&type=-1&union_id="));
                  case 49:
                    if (ak = by.sent, console.log("登录成功"), u = ak.data.session.account_id, s = ak.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取articleId"), B) {
                      {
                        by.next = 63;
                        break;
                      }
                    }
                    by.next = 59;
                    return M("/api/article/channel_list?channel_id=5de768411b011b48a65b772f&isDiFangHao=false&is_new=true&list_count=0&size=30");
                  case 59:
                    al = by.sent;
                    am = /\/webDetails\/link\?id=(\d+)/;
                    an = JSON.stringify(al).match(am);
                    an && (B = an[1]);
                  case 63:
                    if (!B) {
                      {
                        by.next = 195;
                        break;
                      }
                    }
                    console.log(B);
                    console.log("获取id");
                    by.next = 68;
                    return M("/api/article/detail?id=".concat(B));
                  case 68:
                    for (ao = by.sent, ap = ao.data.article.share_url, aq = ap.split("?")[1], ar = {}, as = aq.split("&"), at = 0, au = as.length; at < au; at++) {
                      av = as[at].split("=");
                      ar[av[0]] = av[1];
                    }
                    var bA = {
                      debug: 0,
                      userId: ""
                    };
                    aw = ar.id;
                    console.log(aw);
                    console.log("获取key和token");
                    by.next = 79;
                    return Q("/api/member/login", bA);
                  case 79:
                    ax = by.sent;
                    E = ax.data.key;
                    C = "Bearer " + ax.data.token;
                    console.log(E);
                    console.log(C);
                    console.log("获取抽奖id");
                    by.next = 87;
                    return S("/api/study/detail?id=".concat(aw), {
                      id: aw
                    });
                  case 87:
                    ay = by.sent;
                    az = ay.data.lottery.lottery_id;
                    console.log(az);
                    console.log("开始阅读");
                    aA = c(ay.data.levels);
                    by.prev = 92;
                    aA.s();
                  case 94:
                    if ((aB = aA.n()).done) {
                      {
                        by.next = 140;
                        break;
                      }
                    }
                    aC = aB.value;
                    by.next = 98;
                    return S("/api/study/level?id=".concat(aC.id), {
                      id: aC.id
                    });
                  case 98:
                    if (aD = by.sent, console.log(aD.data.level.name), aD.data.level.task_num != aD.data.completedTasks.length) {
                      {
                        by.next = 103;
                        break;
                      }
                    }
                    console.log("已完成");
                    return by.abrupt("continue", 138);
                  case 103:
                    aE = c(aD.data.tasks);
                    by.prev = 104;
                    aE.s();
                  case 106:
                    if ((aF = aE.n()).done) {
                      {
                        by.next = 130;
                        break;
                      }
                    }
                    if (aG = aF.value, console.log("文章：".concat(aG.name)), 1 != aG.read) {
                      {
                        by.next = 112;
                        break;
                      }
                    }
                    console.log("已阅读");
                    return by.abrupt("continue", 128);
                  case 112:
                    for (aH = aG.link, aI = aH.split("?")[1], aJ = {}, aK = aI.split("&"), aL = 0, aM = aK.length; aL < aM; aL++) {
                      aN = aK[aL].split("=");
                      aJ[aN[0]] = aN[1];
                    }
                    by.next = 119;
                    return M("/api/article/detail?id=".concat(aJ.id));
                  case 119:
                    by.sent;
                    by.next = 122;
                    return M("/api/article/read_time?channel_article_id=".concat(aJ.id, "&is_end=true&read_time=4931"));
                  case 122:
                    var bB = {
                      id: aG.id
                    };
                    aO = by.sent;
                    console.log("阅读：".concat(aO.message));
                    by.next = 126;
                    return Q("/api/study/task/complete", bB);
                  case 126:
                    aP = by.sent;
                    console.log("完成：".concat(aP.message));
                  case 128:
                    by.next = 106;
                    break;
                  case 130:
                    by.next = 135;
                    break;
                  case 132:
                    by.prev = 132;
                    by.t0 = by.catch(104);
                    aE.e(by.t0);
                  case 135:
                    by.prev = 135;
                    aE.f();
                    return by.finish(135);
                  case 138:
                    by.next = 94;
                    break;
                  case 140:
                    by.next = 145;
                    break;
                  case 142:
                    by.prev = 142;
                    by.t1 = by.catch(92);
                    aA.e(by.t1);
                  case 145:
                    by.prev = 145;
                    aA.f();
                    return by.finish(145);
                  case 148:
                    by.next = 150;
                    return Q("/api/lotterybigwheel/_ac_lottery_count", {
                      id: az,
                      module: "study"
                    });
                  case 150:
                    aQ = by.sent;
                    aR = 0;
                  case 152:
                    if (!(aR < aQ.data.count)) {
                      {
                        by.next = 193;
                        break;
                      }
                    }
                    by.next = 155;
                    return Q("/api/lotterybigwheel/_ac_lottery", {
                      id: az,
                      app_id: D,
                      module: "study",
                      optionHash: ""
                    });
                  case 155:
                    if (aS = by.sent, 10000 != aS.code) {
                      {
                        by.next = 189;
                        break;
                      }
                    }
                    console.log(aS.message);
                    by.next = 160;
                    return Q("/api/captcha/get", {
                      activity_id: az,
                      module: "bigWheel"
                    });
                  case 160:
                    aT = by.sent;
                    aU = aT.data.jigsawImageUrl;
                    aV = aT.data.originalImageUrl;
                    console.log("滑块：".concat(aU));
                    console.log("背景：".concat(aV));
                    aW = aT.data.token;
                    aX = aT.data.secretKey;
                    console.log("秘钥：".concat(aX));
                    by.next = 170;
                    return U({
                      slidingImage: aU,
                      backImage: aV
                    });
                  case 170:
                    if (aY = by.sent, aY) {
                      {
                        by.next = 176;
                        break;
                      }
                    }
                    console.log("ddddocr服务异常");
                    by.next = 175;
                    return a5("ddddocr服务异常");
                  case 175:
                    return by.abrupt("continue", 190);
                  case 176:
                    console.log(aY);
                    aZ = W(JSON.stringify({
                      x: aY.result,
                      y: 5
                    }), aX);
                    by.next = 180;
                    return Q("/api/captcha/check", {
                      activity_id: az,
                      module: "bigWheel",
                      cap_token: aW,
                      point: aZ
                    });
                  case 180:
                    if (b0 = by.sent, console.log("验证滑块：" + b0.message), "操作成功" != b0.message) {
                      {
                        by.next = 187;
                        break;
                      }
                    }
                    by.next = 185;
                    return Q("/api/lotterybigwheel/_ac_lottery", {
                      id: az,
                      app_id: D,
                      module: "study",
                      optionHash: ""
                    });
                  case 185:
                    aS = by.sent;
                    null !== (b1 = aS) && undefined !== b1 && null !== (b1 = b1.data) && undefined !== b1 && b1.code ? (console.log("抽奖获得：".concat(null === (b2 = aS) || undefined === b2 || null === (b2 = b2.data) || undefined === b2 ? undefined : b2.title)), r += "用户：".concat(w, " 抽奖获得：").concat(null === (b3 = aS) || undefined === b3 || null === (b3 = b3.data) || undefined === b3 ? undefined : b3.title, "\n")) : (console.log("抽奖获得：".concat(null === (b4 = aS) || undefined === b4 || null === (b4 = b4.data) || undefined === b4 ? undefined : b4.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(null === (b5 = aS) || undefined === b5 || null === (b5 = b5.data) || undefined === b5 ? undefined : b5.tip_title, "\n"));
                  case 187:
                    by.next = 190;
                    break;
                  case 189:
                    null !== (b6 = aS) && undefined !== b6 && null !== (b6 = b6.data) && undefined !== b6 && b6.code ? (console.log("抽奖获得：".concat(null === (b7 = aS) || undefined === b7 || null === (b7 = b7.data) || undefined === b7 ? undefined : b7.title)), r += "用户：".concat(w, " 抽奖获得：").concat(null === (b8 = aS) || undefined === b8 || null === (b8 = b8.data) || undefined === b8 ? undefined : b8.title, "\n")) : (console.log("抽奖获得：".concat(null === (b9 = aS) || undefined === b9 || null === (b9 = b9.data) || undefined === b9 ? undefined : b9.tip_title)), r += "用户：".concat(w, " 抽奖获得：").concat(null === (ba = aS) || undefined === ba || null === (ba = ba.data) || undefined === ba ? undefined : ba.tip_title, "\n"));
                  case 190:
                    aR++;
                    by.next = 152;
                    break;
                  case 193:
                    by.next = 196;
                    break;
                  case 195:
                    console.log("未匹配到id");
                  case 196:
                    console.log("————————————");
                    console.log("开始签到");
                    by.next = 200;
                    return M("/api/user_mumber/sign");
                  case 200:
                    bb = by.sent;
                    console.log("签到获得：".concat(bb.data.signIntegral, "积分"));
                    console.log("————————————");
                    console.log("开始任务");
                    bc = true;
                    bd = true;
                    bf = true;
                    by.next = 209;
                    return M("/api/user_center/task?type=1&current=1&size=20");
                  case 209:
                    bg = by.sent;
                    bh = c(bg.data.list);
                    by.prev = 211;
                    bh.s();
                  case 213:
                    if ((bi = bh.n()).done) {
                      {
                        by.next = 235;
                        break;
                      }
                    }
                    if (bj = bi.value, console.log("任务：".concat(bj.name)), 1 != bj.completed) {
                      {
                        by.next = 219;
                        break;
                      }
                    }
                    console.log("任务已完成");
                    return by.abrupt("continue", 233);
                  case 219:
                    if (console.log("任务进度：".concat(bj.finish_times, "/").concat(bj.frequency)), "使用本地服务" != bj.name) {
                      {
                        by.next = 230;
                        break;
                      }
                    }
                    bk = bj.finish_times;
                  case 222:
                    if (!(bk < bj.frequency)) {
                      {
                        by.next = 230;
                        break;
                      }
                    }
                    by.next = 225;
                    return O("/api/user_mumber/doTask", "memberType=6&member_type=6");
                  case 225:
                    bl = by.sent;
                    console.log("任务完成获得：".concat(bl.data.score_notify.integral, "积分"));
                  case 227:
                    bk++;
                    by.next = 222;
                    break;
                  case 230:
                    "新闻资讯阅读" == bj.name && (bc = false);
                    "新闻资讯点赞" == bj.name && (bd = false);
                    "分享资讯给好友" == bj.name && (bf = false);
                  case 233:
                    by.next = 213;
                    break;
                  case 235:
                    by.next = 240;
                    break;
                  case 237:
                    by.prev = 237;
                    by.t2 = by.catch(211);
                    bh.e(by.t2);
                  case 240:
                    by.prev = 240;
                    bh.f();
                    return by.finish(240);
                  case 243:
                    if (bc && bd && bf) {
                      {
                        by.next = 278;
                        break;
                      }
                    }
                    by.next = 246;
                    return M("/api/article/channel_list?channel_id=5de768411b011b48a65b772f&isDiFangHao=false&is_new=true&list_count=0&size=30");
                  case 246:
                    bm = by.sent;
                    bn = c(bm.data.article_list);
                    by.prev = 248;
                    bn.s();
                  case 250:
                    if ((bo = bn.n()).done) {
                      {
                        by.next = 270;
                        break;
                      }
                    }
                    if (bp = bo.value, bq = bp.id, bc) {
                      {
                        by.next = 258;
                        break;
                      }
                    }
                    by.next = 256;
                    return M("/api/article/read_time?channel_article_id=".concat(bq, "&is_end=true&read_time=3051"));
                  case 256:
                    br = by.sent;
                    br.data.score_notify ? console.log("阅读获得：".concat(null === (bs = br.data) || undefined === bs || null === (bs = bs.score_notify) || undefined === bs ? undefined : bs.integral, "积分")) : console.log("文章已经阅读过了");
                  case 258:
                    if (bd) {
                      {
                        by.next = 263;
                        break;
                      }
                    }
                    by.next = 261;
                    return O("/api/favorite/like", "action=true&id=".concat(bq));
                  case 261:
                    bt = by.sent;
                    bt.data ? console.log("点赞获得：".concat(null === (bu = bt.data) || undefined === bu || null === (bu = bu.score_notify) || undefined === bu ? undefined : bu.integral, "积分")) : console.log("文章已经点赞过了");
                  case 263:
                    if (bf) {
                      {
                        by.next = 268;
                        break;
                      }
                    }
                    by.next = 266;
                    return O("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id==".concat(bq));
                  case 266:
                    bv = by.sent;
                    bv.data.score_notify ? console.log("分享获得：".concat(null === (bw = bv.data) || undefined === bw || null === (bw = bw.score_notify) || undefined === bw ? undefined : bw.integral, "积分")) : console.log("文章已经分享过了");
                  case 268:
                    by.next = 250;
                    break;
                  case 270:
                    by.next = 275;
                    break;
                  case 272:
                    by.prev = 272;
                    by.t3 = by.catch(248);
                    bn.e(by.t3);
                  case 275:
                    by.prev = 275;
                    bn.f();
                    return by.finish(275);
                  case 278:
                    console.log("————————————");
                    console.log("查询积分");
                    by.next = 282;
                    return M("/api/user_mumber/account_detail");
                  case 282:
                    bx = by.sent;
                    console.log("拥有积分：".concat(bx.data.rst.total_integral, "\n"));
                  case 284:
                    by.next = 13;
                    break;
                  case 286:
                    by.next = 291;
                    break;
                  case 288:
                    by.prev = 288;
                    by.t4 = by.catch(11);
                    ab.e(by.t4);
                  case 291:
                    by.prev = 291;
                    ab.f();
                    return by.finish(291);
                  case 294:
                    if (!r) {
                      {
                        by.next = 297;
                        break;
                      }
                    }
                    by.next = 297;
                    return a5(r);
                  case 297:
                  case "end":
                    return by.stop();
                }
              }
            }
          }, a8, null, [[11, 288, 291, 294], [92, 142, 145, 148], [104, 132, 135, 138], [211, 237, 240, 243], [248, 272, 275, 278]]);
        }
      }));
      return H.apply(this, arguments);
    }
  }
  function I(a7) {
    {
      return J.apply(this, arguments);
    }
  }
  function J() {
    J = m(k().mark(function a8(a9) {
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              return ab.abrupt("return", new Promise(function (ad) {
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a9),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a0(),
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  }
                };
                $.get(ae, function () {
                  var ag = m(k().mark(function ah(ai, aj, ak) {
                    return k().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ad(JSON.parse(ak));
                            } catch (am) {
                              $.logErr(am, aj);
                            } finally {
                              ad();
                            }
                          case 1:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ah);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ab.stop();
          }
        }
      }, a8);
    }));
    return J.apply(this, arguments);
  }
  function K(a7) {
    return L.apply(this, arguments);
  }
  function L() {
    L = m(k().mark(function a7(a8) {
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = X();
              return ab.abrupt("return", new Promise(function (ad) {
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": aa.uuid,
                    "X-SIGNATURE": aa.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  },
                  body: aa.body
                };
                $.post(ae, function () {
                  var ag = m(k().mark(function ah(ai, aj, ak) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ad(JSON.parse(ak));
                            } catch (an) {
                              $.logErr(an, aj);
                            } finally {
                              ad();
                            }
                          case 1:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ah);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return L.apply(this, arguments);
  }
  function M(a7) {
    return N.apply(this, arguments);
  }
  function N() {
    N = m(k().mark(function a9(aa) {
      var ac;
      return k().wrap(function (ad) {
        for (;;) {
          switch (ad.prev = ad.next) {
            case 0:
              ac = Z(aa);
              return ad.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://vapp.tmuyun.com".concat(aa),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ac.time,
                    "X-SESSION-ID": s,
                    "X-REQUEST-ID": ac.uuid,
                    "X-SIGNATURE": ac.signature,
                    "X-TENANT-ID": t,
                    "X-ACCOUNT-ID": u,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  }
                };
                $.get(ag, function () {
                  var ai = m(k().mark(function aj(ak, al, am) {
                    return k().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !ak) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ak)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(am));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, al);
                          case 14:
                            an.prev = 14;
                            ae();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, aj, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ad.stop();
          }
        }
      }, a9);
    }));
    return N.apply(this, arguments);
  }
  function O(a7, a8) {
    return P.apply(this, arguments);
  }
  function P() {
    P = m(k().mark(function a8(a9, aa) {
      var ad;
      return k().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              ad = Z(a9);
              return ae.abrupt("return", new Promise(function (ag) {
                var ah = {
                  url: "https://vapp.tmuyun.com".concat(a9),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ad.time,
                    "X-SESSION-ID": s,
                    "X-REQUEST-ID": ad.uuid,
                    "X-SIGNATURE": ad.signature,
                    "X-TENANT-ID": t,
                    "X-ACCOUNT-ID": u,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  },
                  body: aa
                };
                $.post(ah, function () {
                  var aj = m(k().mark(function ak(al, am, an) {
                    return k().wrap(function (ao) {
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
                            ag(JSON.parse(an));
                          case 9:
                            ao.next = 14;
                            break;
                          case 11:
                            ao.prev = 11;
                            ao.t0 = ao.catch(0);
                            $.logErr(ao.t0, am);
                          case 14:
                            ao.prev = 14;
                            ag();
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
            case 2:
            case "end":
              return ae.stop();
          }
        }
      }, a8);
    }));
    return P.apply(this, arguments);
  }
  function Q(a7, a8) {
    return R.apply(this, arguments);
  }
  function R() {
    R = m(k().mark(function a8(a9, aa) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = Y(aa);
              return ac.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a9),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": A,
                    "access-auth-id": u,
                    "access-api-signature": ab.signature,
                    "access-nonce-str": ab.uuid,
                    authorization: C,
                    "access-app-id": D,
                    "access-timestamp": ab.time,
                    "access-api-token": s,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_zhuji;xsb_zhuji;1.3.2;native_app;6.10.0",
                    "content-type": "application/json; charset=UTF-8",
                    origin: "https://op-h5.cloud.jinhua.com.cn",
                    "x-requested-with": "com.zjonline.zhuji",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://op-h5.cloud.jinhua.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(aa)
                };
                $.post(ag, function () {
                  var ai = m(k().mark(function aj(ak, al, am) {
                    return k().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !ak) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ak)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(am));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, al);
                          case 14:
                            an.prev = 14;
                            ae();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, aj, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ac.stop();
          }
        }
      }, a8);
    }));
    return R.apply(this, arguments);
  }
  function S(a7, a8) {
    return T.apply(this, arguments);
  }
  function T() {
    T = m(k().mark(function a7(a8, a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = Y(a9);
              return ac.abrupt("return", new Promise(function (ae) {
                var af = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a8),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": A,
                    "access-auth-id": u,
                    "access-api-signature": ab.signature,
                    "access-nonce-str": ab.uuid,
                    authorization: C,
                    "access-app-id": D,
                    "access-timestamp": ab.time,
                    "access-api-token": s,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_zhuji;xsb_zhuji;1.3.2;native_app;6.10.0",
                    origin: "https://op-h5.cloud.jinhua.com.cn",
                    "x-requested-with": "com.zjonline.zhuji",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://op-h5.cloud.jinhua.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(af, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !aj) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(al));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ak);
                          case 14:
                            am.prev = 14;
                            ae();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ac.stop();
          }
        }
      }, a7);
    }));
    return T.apply(this, arguments);
  }
  function U(a7) {
    return V.apply(this, arguments);
  }
  function V() {
    V = m(k().mark(function a7(a8) {
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  url: "".concat(o, "/capcode"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(a8)
                };
                $.post(ad, function (ae, af, ag) {
                  try {
                    ae ? (console.log("".concat(JSON.stringify(ae))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ag));
                  } catch (ah) {
                    $.logErr(ah, af);
                  } finally {
                    ac();
                  }
                });
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return V.apply(this, arguments);
  }
  function W(a7, a8) {
    CryptoJS = p.createCryptoJS();
    var a9 = CryptoJS.enc.Utf8.parse(a8);
    var aa = CryptoJS.enc.Utf8.parse(a7);
    var ab = CryptoJS.AES.encrypt(aa, a9, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
    return ab.toString();
  }
  function X() {
    var a7 = new (p.loadJSEncrypt())();
    a7.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    x = a7.encrypt(x);
    var a8 = a0();
    var a9 = "client_id=".concat(v, "&password=").concat(x, "&phone_number=").concat(w);
    var aa = "post%%/web/oauth/credential_auth?".concat(a9, "%%").concat(a8, "%%");
    a9 = "client_id=".concat(v, "&password=").concat(encodeURIComponent(x), "&phone_number=").concat(w);
    CryptoJS = p.createCryptoJS();
    var ab = CryptoJS.HmacSHA256(aa, q);
    var ac = CryptoJS.enc.Hex.stringify(ab);
    var ad = {
      uuid: a8,
      signature: ac,
      body: a9
    };
    return ad;
  }
  function Y(a7) {
    var aa = a0();
    var ab = Date.now();
    var ac = {
      app_id: D,
      device_id: A,
      nonce_str: aa,
      source_type: "app",
      timestamp: ab,
      auth_id: u,
      token: s
    };
    Object.entries(a7).forEach(function (ah) {
      var ai = d(ah, 2);
      var aj = ai[0];
      var ak = ai[1];
      ac[aj] = ak;
    });
    var ad = Object.keys(ac).sort();
    var ae = ad.map(function (ah) {
      return "".concat(ah, "=").concat(ac[ah]);
    }).join("&&");
    ae = ae + "&&" + E;
    CryptoJS = p.createCryptoJS();
    var af = CryptoJS.SHA256(ae).toString();
    var ag = {
      uuid: aa,
      time: ab,
      signature: af
    };
    return ag;
  }
  function Z(a7) {
    var a8 = a0();
    var a9 = Date.now();
    a7.indexOf("?") > 0 && (a7 = a7.substring(0, a7.indexOf("?")));
    CryptoJS = p.createCryptoJS();
    var aa = CryptoJS.SHA256("".concat(a7, "&&").concat(s, "&&").concat(a8, "&&").concat(a9, "&&").concat(F, "&&").concat(t)).toString();
    var ab = {
      uuid: a8,
      time: a9,
      signature: aa
    };
    return ab;
  }
  function a0() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a8) {
      var a9 = 16 * Math.random() | 0;
      var aa = "x" === a8 ? a9 : 3 & a9 | 8;
      return aa.toString(16);
    });
  }
  function a1(a7) {
    return a7[Math.floor(Math.random() * a7.length)];
  }
  function a2() {
    var a7 = "1.3.2";
    var a8 = a0();
    var a9 = a1(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var aa = "Xiaomi " + a9;
    var ab = "Android";
    var ac = "".concat(ab.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(a7, ";1.0;null;").concat(a9);
    var ad = "".concat(a7, ";").concat(a8, ";").concat(aa, ";").concat(ab, ";").concat("11", ";").concat("Release", ";").concat("6.10.0");
    var ae = {
      ua: ac,
      commonUa: ad,
      uuid: a8
    };
    return ae;
  }
  function a3() {
    return a4.apply(this, arguments);
  }
  function a4() {
    a4 = m(k().mark(function a8() {
      var aa;
      return k().wrap(function ab(ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              if (aa = $.getdata("Utils_Code") || "", !aa || !Object.keys(aa).length) {
                ac.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(aa);
              return ac.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ac.abrupt("return", new Promise(function () {
                var ag = m(k().mark(function ah(ai) {
                  return k().wrap(function ak(al) {
                    for (;;) {
                      switch (al.prev = al.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (am) {
                            $.setdata(am, "Utils_Code");
                            eval(am);
                            console.log("✅ Utils加载成功, 请继续");
                            ai(creatUtils());
                          });
                        case 1:
                        case "end":
                          return al.stop();
                      }
                    }
                  }, ah);
                }));
                return function (ai) {
                  return ag.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ac.stop();
          }
        }
      }, a8);
    }));
    return a4.apply(this, arguments);
  }
  function a5(a7) {
    return a6.apply(this, arguments);
  }
  function a6() {
    a6 = m(k().mark(function a8(a9) {
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              if (!$.isNode()) {
                aa.next = 5;
                break;
              }
              aa.next = 3;
              return notify.sendNotify($.name, a9);
            case 3:
              aa.next = 6;
              break;
            case 5:
              $.msg($.name, "", a9);
            case 6:
            case "end":
              return aa.stop();
          }
        }
      }, a8);
    }));
    return a6.apply(this, arguments);
  }
  m(k().mark(function a7() {
    return k().wrap(function (a8) {
      for (;;) {
        switch (a8.prev = a8.next) {
          case 0:
            a8.next = 2;
            return G();
          case 2:
          case "end":
            return a8.stop();
        }
      }
    }, a7);
  }))().catch(function (a8) {
    $.log(a8);
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