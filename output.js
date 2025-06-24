//Tue Jun 24 2025 00:02:22 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("温度新闻");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a5) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a8) {
      return typeof a8;
    } : function (a8) {
      return a8 && "function" == typeof Symbol && a8.constructor === Symbol && a8 !== Symbol.prototype ? "symbol" : typeof a8;
    };
    return b(a5);
  }
  function c(a5, a6) {
    {
      var a8 = "undefined" != typeof Symbol && a5[Symbol.iterator] || a5["@@iterator"];
      if (!a8) {
        {
          if (Array.isArray(a5) || (a8 = d(a5)) || a6 && a5 && "number" == typeof a5.length) {
            {
              a8 && (a5 = a8);
              var a9 = 0;
              var aa = function () {};
              return {
                s: aa,
                n: function () {
                  {
                    var af = {
                      done: true
                    };
                    return a9 >= a5.length ? af : {
                      done: false,
                      value: a5[a9++]
                    };
                  }
                },
                e: function (af) {
                  {
                    throw af;
                  }
                },
                f: aa
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var ab;
      var ac = true;
      var ad = false;
      return {
        s: function () {
          {
            a8 = a8.call(a5);
          }
        },
        n: function () {
          {
            var ah = a8.next();
            ac = ah.done;
            return ah;
          }
        },
        e: function (ah) {
          ad = true;
          ab = ah;
        },
        f: function () {
          {
            try {
              {
                ac || null == a8.return || a8.return();
              }
            } finally {
              {
                if (ad) {
                  throw ab;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(a5, a6) {
    {
      if (a5) {
        {
          if ("string" == typeof a5) {
            return f(a5, a6);
          }
          var a8 = {}.toString.call(a5).slice(8, -1);
          "Object" === a8 && a5.constructor && (a8 = a5.constructor.name);
          return "Map" === a8 || "Set" === a8 ? Array.from(a5) : "Arguments" === a8 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a8) ? f(a5, a6) : undefined;
        }
      }
    }
  }
  function f(a5, a6) {
    {
      (null == a6 || a6 > a5.length) && (a6 = a5.length);
      for (var a7 = 0, a8 = Array(a6); a7 < a6; a7++) {
        a8[a7] = a5[a7];
      }
      return a8;
    }
  }
  function g() {
    "use strict";

    var a5 = {
      ZQqgI: function (aC, aD) {
        return aC === aD;
      },
      CSZBj: "aZLsl",
      FBNQG: function (aC) {
        return aC();
      },
      AmoVo: "end",
      SMXRh: function (aC, aD) {
        return aC == aD;
      },
      JomPh: "Wkvqg",
      XjIjp: "PjsQl",
      aciEh: "nUgJk",
      FSQHU: "normal",
      AzBwi: function (aC, aD) {
        return aC === aD;
      },
      gxHNw: "UGteq",
      JCUww: "[object Generator]",
      sXgyz: "bQvMZ",
      JCnwG: "&&35c782a2",
      SBHbm: function (aC, aD) {
        return aC !== aD;
      },
      XokKF: "wGowd",
      fNqar: "wbLvZ",
      EeKiB: function (aC, aD, aE, aF) {
        return aC(aD, aE, aF);
      },
      PuDSM: "QhXCs",
      WvEjE: "return",
      DFJBF: function (aC, aD) {
        return aC(aD);
      },
      DLvrk: "throw",
      Bkafb: "SqAKy",
      DOtFm: function (aC, aD, aE, aF, aG) {
        return aC(aD, aE, aF, aG);
      },
      XtfWZ: "bxVko",
      wBitD: function (aC, aD, aE, aF) {
        return aC(aD, aE, aF);
      },
      iFwrC: function (aC, aD) {
        return aC !== aD;
      },
      mSror: "WVHco",
      vYcEZ: "object",
      hHbTd: function (aC, aD) {
        return aC(aD);
      },
      uSrgw: function (aC, aD) {
        return aC(aD);
      },
      hHKzh: "QYzdm",
      YtIHg: " API请求失败，请检查网路重试",
      CmQsV: "uuwYc",
      OmQRe: function (aC, aD) {
        return aC === aD;
      },
      AwdAU: "QewfD",
      XZBku: function (aC) {
        return aC();
      },
      FpSei: "UWEam",
      xYhKL: "ovLLu",
      MxXhf: "looEV",
      bbVKg: "_invoke",
      aGZGR: function (aC, aD) {
        return aC < aD;
      },
      AZBgF: "break",
      AElBO: "cgpfY",
      Wtuyv: function (aC, aD) {
        return aC === aD;
      },
      gPRrh: "Generator is already running",
      zCXrf: "oQXxT",
      EfheD: "QXDGW",
      lLevV: "KLnil",
      QgoxD: "Aypdr",
      KeEuz: function (aC, aD, aE) {
        return aC(aD, aE);
      },
      yogeA: function (aC, aD) {
        return aC !== aD;
      },
      FDMbw: "ADwJh",
      RwEOy: function (aC, aD) {
        return aC !== aD;
      },
      qfPWu: "zccUH",
      Nmdpz: "AEvpn",
      cvcwU: function (aC, aD) {
        return aC === aD;
      },
      XPxYM: function (aC, aD) {
        return aC === aD;
      },
      VoXab: "4|1|2|3|0|5",
      ifRRz: function (aC, aD) {
        return aC === aD;
      },
      CYOVp: "The iterator does not provide a '",
      gNACA: "' method",
      volcY: "iterator result is not an object",
      HYHPl: "AalSs",
      CQLYZ: "mPDMX",
      ozrUu: function (aC, aD) {
        return aC === aD;
      },
      CrtlQ: "eomvy",
      kUEFZ: "1|0|5|3|4|2",
      JXxhP: function (aC, aD) {
        return aC === aD;
      },
      dRQSf: function (aC, aD) {
        return aC !== aD;
      },
      zJlqO: function (aC, aD) {
        return aC + aD;
      },
      JCIPq: function (aC, aD) {
        return aC + aD;
      },
      qOUFF: function (aC, aD) {
        return aC !== aD;
      },
      pgABx: function (aC, aD, aE, aF) {
        return aC(aD, aE, aF);
      },
      GyhYF: "next",
      TaHUh: function (aC, aD) {
        return aC(aD);
      },
      wStTX: "fJWQs",
      SgeBr: function (aC, aD) {
        return aC in aD;
      },
      xUuLX: function (aC, aD) {
        return aC < aD;
      },
      YtXDh: function (aC, aD) {
        return aC < aD;
      },
      JhYUA: function (aC, aD) {
        return aC(aD);
      },
      rNFnp: "SrWBj",
      wYGUn: "https://mediacloud-pub-oss.xinhuamm.net/lottery/activity/",
      RiEtf: "/index.json?timestamp=",
      Lpqwp: "&appId=",
      DVxyl: "抽奖获得：",
      tQWpX: "zCenA",
      iFJfX: "function",
      WREDa: function (aC, aD) {
        return aC(aD);
      },
      ylNqh: function (aC, aD) {
        return aC !== aD;
      },
      Ukqnr: "pZwfe",
      hPdxm: "UNAyV",
      AIpHp: "string",
      ISUYA: function (aC, aD) {
        return aC === aD;
      },
      jWZZr: "Set",
      lpaWB: "NKzjO",
      UtkHs: function (aC, aD) {
        return aC !== aD;
      },
      aQvib: "dthhI",
      keEcW: function (aC, aD) {
        return aC in aD;
      },
      uuqBd: function (aC, aD) {
        return aC === aD;
      },
      PXTqg: "hbCrj",
      pmvZk: function (aC, aD) {
        return aC(aD);
      },
      nrIOG: "wjQuo",
      nLzqC: function (aC, aD, aE, aF, aG, aH, aI, aJ) {
        return aC(aD, aE, aF, aG, aH, aI, aJ);
      },
      QaVAX: " is not iterable",
      fTTMc: function (aC, aD) {
        return aC === aD;
      },
      KAMlY: "WDyCC",
      QpArM: function (aC, aD) {
        return aC === aD;
      },
      bcSYG: function (aC, aD) {
        return aC === aD;
      },
      Vwcuc: "continue",
      zIyUx: function (aC, aD) {
        return aC | aD;
      },
      dvBxs: function (aC, aD) {
        return aC === aD;
      },
      xgRDM: function (aC, aD) {
        return aC | aD;
      },
      gHfFe: "https://ryapi.xinhuamm.net/lotteryapi/lottery/draw?id=",
      ObuBR: "NfTZZ",
      Bqcah: function (aC, aD) {
        return aC - aD;
      },
      RroBv: function (aC, aD) {
        return aC >= aD;
      },
      HHLMN: function (aC, aD) {
        return aC !== aD;
      },
      vZRgG: "GhlZA",
      dKtAS: function (aC, aD) {
        return aC(aD);
      },
      ruvTF: function (aC, aD) {
        return aC(aD);
      },
      CzFCK: "AHTjw",
      ByyAx: function (aC, aD) {
        return aC >= aD;
      },
      ZwYbY: "KFqtR",
      Qzsvk: "ToNAa",
      vHvFN: function (aC, aD) {
        return aC === aD;
      },
      spuKg: "pMBZd",
      JkZdo: "RNMtm",
      VyfZm: function (aC, aD) {
        return aC(aD);
      },
      UjkRx: "KxrVn",
      GWTPo: "RUDXR",
      sYxng: function (aC, aD) {
        return aC(aD);
      }
    };
    g = function () {
      return a7;
    };
    var a6;
    var a7 = {
      wrap: ag
    };
    var a8 = Object.prototype;
    var a9 = a8.hasOwnProperty;
    var aa = Object.defineProperty || function (aC, aD, aE) {
      {
        aC[aD] = aE.value;
      }
    };
    var ab = "function" == typeof Symbol ? Symbol : {};
    var ac = ab.iterator || "@@iterator";
    var ad = ab.asyncIterator || "@@asyncIterator";
    var ae = ab.toStringTag || "@@toStringTag";
    function af(aC, aD, aE) {
      {
        var aF = {
          value: aE,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aC, aD, aF);
        return aC[aD];
      }
    }
    try {
      {
        af({}, "");
      }
    } catch (aD) {
      {
        af = function (aF, aG, aH) {
          return aF[aG] = aH;
        };
      }
    }
    function ag(aF, aG, aH, aI) {
      {
        var aJ = aG && aG.prototype instanceof an ? aG : an;
        var aK = Object.create(aJ.prototype);
        var aL = new aA(aI || []);
        aa(aK, "_invoke", {
          value: aw(aF, aH, aL)
        });
        return aK;
      }
    }
    function ah(aF, aG, aH) {
      {
        try {
          return {
            type: "normal",
            arg: aF.call(aG, aH)
          };
        } catch (aM) {
          {
            var aJ = {
              type: "throw",
              arg: aM
            };
            return aJ;
          }
        }
      }
    }
    var ai = "suspendedStart";
    var aj = "suspendedYield";
    var ak = "executing";
    var al = "completed";
    var am = {};
    function an() {}
    function ao() {}
    function ap() {}
    var aq = {};
    af(aq, ac, function () {
      return this;
    });
    var ar = Object.getPrototypeOf;
    var as = ar && ar(ar(aB([])));
    as && as !== a8 && a9.call(as, ac) && (aq = as);
    ap.prototype = an.prototype = Object.create(aq);
    var at = ap.prototype;
    function au(aF) {
      {
        ["next", "throw", "return"].forEach(function (aG) {
          {
            af(aF, aG, function (aI) {
              return this._invoke(aG, aI);
            });
          }
        });
      }
    }
    function av(aF, aG) {
      {
        function aJ(aK, aL, aM, aN) {
          {
            var aP = ah(aF[aK], aF, aL);
            if ("throw" !== aP.type) {
              {
                var aQ = aP.arg;
                var aR = aQ.value;
                return aR && "object" == b(aR) && a9.call(aR, "__await") ? aG.resolve(aR.__await).then(function (aT) {
                  {
                    aJ("next", aT, aM, aN);
                  }
                }, function (aT) {
                  {
                    aJ("throw", aT, aM, aN);
                  }
                }) : aG.resolve(aR).then(function (aT) {
                  {
                    aQ.value = aT;
                    aM(aQ);
                  }
                }, function (aT) {
                  {
                    return aJ("throw", aT, aM, aN);
                  }
                });
              }
            }
            aN(aP.arg);
          }
        }
        var aI;
        aa(this, "_invoke", {
          value: function (aK, aL) {
            {
              function aN() {
                {
                  return new aG(function (aO, aP) {
                    {
                      aJ(aK, aL, aO, aP);
                    }
                  });
                }
              }
              return aI = aI ? aI.then(aN, aN) : aN();
            }
          }
        });
      }
    }
    function aw(aF, aG, aH) {
      {
        var aJ = ai;
        return function (aK, aL) {
          {
            if (aJ === ak) {
              throw Error("Generator is already running");
            }
            if (aJ === al) {
              {
                if ("throw" === aK) {
                  throw aL;
                }
                var aN = {
                  value: a6,
                  done: true
                };
                return aN;
              }
            }
            for (aH.method = aK, aH.arg = aL;;) {
              {
                var aO = aH.delegate;
                if (aO) {
                  {
                    var aP = ax(aO, aH);
                    if (aP) {
                      {
                        if (aP === am) {
                          continue;
                        }
                        return aP;
                      }
                    }
                  }
                }
                if ("next" === aH.method) {
                  aH.sent = aH._sent = aH.arg;
                } else {
                  if ("throw" === aH.method) {
                    {
                      if (aJ === ai) {
                        throw aJ = al, aH.arg;
                      }
                      aH.dispatchException(aH.arg);
                    }
                  } else {
                    "return" === aH.method && aH.abrupt("return", aH.arg);
                  }
                }
                aJ = ak;
                var aQ = ah(aF, aG, aH);
                if ("normal" === aQ.type) {
                  {
                    if (aJ = aH.done ? al : aj, aQ.arg === am) {
                      continue;
                    }
                    var aR = {
                      value: aQ.arg,
                      done: aH.done
                    };
                    return aR;
                  }
                }
                "throw" === aQ.type && (aJ = al, aH.method = "throw", aH.arg = aQ.arg);
              }
            }
          }
        };
      }
    }
    function ax(aF, aG) {
      {
        var aJ = aG.method;
        var aK = aF.iterator[aJ];
        if (aK === a6) {
          aG.delegate = null;
          "throw" === aJ && aF.iterator.return && (aG.method = "return", aG.arg = a6, ax(aF, aG), "throw" === aG.method) || "return" !== aJ && (aG.method = "throw", aG.arg = new TypeError("The iterator does not provide a '" + aJ + "' method"));
          return am;
        }
        var aM = ah(aK, aF.iterator, aG.arg);
        if ("throw" === aM.type) {
          aG.method = "throw";
          aG.arg = aM.arg;
          aG.delegate = null;
          return am;
        }
        var aL = aM.arg;
        return aL ? aL.done ? (aG[aF.resultName] = aL.value, aG.next = aF.nextLoc, "return" !== aG.method && (aG.method = "next", aG.arg = a6), aG.delegate = null, am) : aL : (aG.method = "throw", aG.arg = new TypeError("iterator result is not an object"), aG.delegate = null, am);
      }
    }
    function ay(aF) {
      {
        var aI = {
          tryLoc: aF[0]
        };
        1 in aF && (aI.catchLoc = aF[1]);
        2 in aF && (aI.finallyLoc = aF[2], aI.afterLoc = aF[3]);
        this.tryEntries.push(aI);
      }
    }
    function az(aF) {
      {
        var aH = aF.completion || {};
        aH.type = "normal";
        delete aH.arg;
        aF.completion = aH;
      }
    }
    function aA(aF) {
      {
        var aG = {
          tryLoc: "root"
        };
        this.tryEntries = [aG];
        aF.forEach(ay, this);
        this.reset(true);
      }
    }
    function aB(aF) {
      {
        if (aF || "" === aF) {
          {
            var aG = aF[ac];
            if (aG) {
              return aG.call(aF);
            }
            if ("function" == typeof aF.next) {
              return aF;
            }
            if (!isNaN(aF.length)) {
              {
                var aH = -1;
                var aI = function aL() {
                  {
                    for (; ++aH < aF.length;) {
                      if (a9.call(aF, aH)) {
                        aL.value = aF[aH];
                        aL.done = false;
                        return aL;
                      }
                    }
                    aL.value = a6;
                    aL.done = true;
                    return aL;
                  }
                };
                return aI.next = aI;
              }
            }
          }
        }
        throw new TypeError(b(aF) + " is not iterable");
      }
    }
    ao.prototype = ap;
    aa(at, "constructor", {
      value: ap,
      configurable: true
    });
    aa(ap, "constructor", {
      value: ao,
      configurable: true
    });
    ao.displayName = af(ap, ae, "GeneratorFunction");
    a7.isGeneratorFunction = function (aF) {
      {
        var aH = "function" == typeof aF && aF.constructor;
        return !!aH && (aH === ao || "GeneratorFunction" === (aH.displayName || aH.name));
      }
    };
    a7.mark = function (aF) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aF, ap) : (aF.__proto__ = ap, af(aF, ae, "GeneratorFunction"));
        aF.prototype = Object.create(at);
        return aF;
      }
    };
    a7.awrap = function (aF) {
      var aG = {
        __await: aF
      };
      return aG;
    };
    au(av.prototype);
    af(av.prototype, ad, function () {
      {
        return this;
      }
    });
    a7.AsyncIterator = av;
    a7.async = function (aF, aG, aH, aI, aJ) {
      {
        undefined === aJ && (aJ = Promise);
        var aL = new av(ag(aF, aG, aH, aI), aJ);
        return a7.isGeneratorFunction(aG) ? aL : aL.next().then(function (aN) {
          return aN.done ? aN.value : aL.next();
        });
      }
    };
    au(at);
    af(at, ae, "Generator");
    af(at, ac, function () {
      return this;
    });
    af(at, "toString", function () {
      return "[object Generator]";
    });
    a7.keys = function (aF) {
      {
        var aG = Object(aF);
        var aH = [];
        for (var aI in aG) aH.push(aI);
        aH.reverse();
        return function aK() {
          {
            for (; aH.length;) {
              {
                var aM = aH.pop();
                if (aM in aG) {
                  aK.value = aM;
                  aK.done = false;
                  return aK;
                }
              }
            }
            aK.done = true;
            return aK;
          }
        };
      }
    };
    a7.values = aB;
    aA.prototype = {
      constructor: aA,
      reset: function (aF) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = a6, this.done = false, this.delegate = null, this.method = "next", this.arg = a6, this.tryEntries.forEach(az), !aF) {
            for (var aG in this) "t" === aG.charAt(0) && a9.call(this, aG) && !isNaN(+aG.slice(1)) && (this[aG] = a6);
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
      dispatchException: function (aF) {
        {
          if (this.done) {
            throw aF;
          }
          var aH = this;
          function aN(aO, aP) {
            {
              aK.type = "throw";
              aK.arg = aF;
              aH.next = aO;
              aP && (aH.method = "next", aH.arg = a6);
              return !!aP;
            }
          }
          for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
            {
              var aJ = this.tryEntries[aI];
              var aK = aJ.completion;
              if ("root" === aJ.tryLoc) {
                return aN("end");
              }
              if (aJ.tryLoc <= this.prev) {
                {
                  var aL = a9.call(aJ, "catchLoc");
                  var aM = a9.call(aJ, "finallyLoc");
                  if (aL && aM) {
                    {
                      if (this.prev < aJ.catchLoc) {
                        return aN(aJ.catchLoc, true);
                      }
                      if (this.prev < aJ.finallyLoc) {
                        return aN(aJ.finallyLoc);
                      }
                    }
                  } else {
                    if (aL) {
                      {
                        if (this.prev < aJ.catchLoc) {
                          return aN(aJ.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aM) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aJ.finallyLoc) {
                          return aN(aJ.finallyLoc);
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
      abrupt: function (aF, aG) {
        {
          for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
            {
              var aJ = this.tryEntries[aI];
              if (aJ.tryLoc <= this.prev && a9.call(aJ, "finallyLoc") && this.prev < aJ.finallyLoc) {
                {
                  var aK = aJ;
                  break;
                }
              }
            }
          }
          aK && ("break" === aF || "continue" === aF) && aK.tryLoc <= aG && aG <= aK.finallyLoc && (aK = null);
          var aL = aK ? aK.completion : {};
          aL.type = aF;
          aL.arg = aG;
          return aK ? (this.method = "next", this.next = aK.finallyLoc, am) : this.complete(aL);
        }
      },
      complete: function (aF, aG) {
        {
          if ("throw" === aF.type) {
            throw aF.arg;
          }
          "break" === aF.type || "continue" === aF.type ? this.next = aF.arg : "return" === aF.type ? (this.rval = this.arg = aF.arg, this.method = "return", this.next = "end") : "normal" === aF.type && aG && (this.next = aG);
          return am;
        }
      },
      finish: function (aF) {
        {
          for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
            {
              var aJ = this.tryEntries[aI];
              if (aJ.finallyLoc === aF) {
                this.complete(aJ.completion, aJ.afterLoc);
                az(aJ);
                return am;
              }
            }
          }
        }
      },
      catch: function (aF) {
        {
          for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
            {
              var aH = this.tryEntries[aG];
              if (aH.tryLoc === aF) {
                {
                  var aI = aH.completion;
                  if ("throw" === aI.type) {
                    {
                      var aJ = aI.arg;
                      az(aH);
                    }
                  }
                  return aJ;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aF, aG, aH) {
        this.delegate = {
          iterator: aB(aF),
          resultName: aG,
          nextLoc: aH
        };
        "next" === this.method && (this.arg = a6);
        return am;
      }
    };
    return a7;
  }
  function h(a5, a6, a7, a8, a9, aa, ab) {
    {
      try {
        {
          var ac = a5[aa](ab);
          var ad = ac.value;
        }
      } catch (af) {
        {
          return void a7(af);
        }
      }
      ac.done ? a6(ad) : Promise.resolve(ad).then(a8, a9);
    }
  }
  function i(a5) {
    return function () {
      var a7 = this;
      var a8 = arguments;
      return new Promise(function (a9, aa) {
        var ac = a5.apply(a7, a8);
        function ad(af) {
          {
            h(ac, a9, aa, ad, ae, "next", af);
          }
        }
        function ae(af) {
          {
            h(ac, a9, aa, ad, ae, "throw", af);
          }
        }
        ad(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.WDXW : $.getdata("WDXW")) || "";
  var k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var l = $.getjson("WDXW_Device") || [];
  var m = undefined;
  var n = "";
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "";
  var x = "";
  var y = "";
  var z = "5c5555d0f9c249de9de7c46904b506b1";
  function A() {
    return B.apply(this, arguments);
  }
  function B() {
    {
      B = i(g().mark(function a6() {
        {
          var a8;
          var a9;
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
          return g().wrap(function (bd) {
            {
              for (;;) {
                switch (bd.prev = bd.next) {
                  case 0:
                    if (j) {
                      {
                        bd.next = 5;
                        break;
                      }
                    }
                    console.log("先填写账号密码");
                    bd.next = 4;
                    return a3("先填写账号密码");
                  case 4:
                    return bd.abrupt("return");
                  case 5:
                    bd.next = 7;
                    return Z();
                  case 7:
                    m = bd.sent;
                    a8 = j.split(" ");
                    a9 = 0;
                  case 10:
                    if (!(a9 < a8.length)) {
                      {
                        bd.next = 288;
                        break;
                      }
                    }
                    if (bd.prev = 11, !(a9 > 9)) {
                      {
                        bd.next = 14;
                        break;
                      }
                    }
                    return bd.abrupt("continue", 285);
                  case 14:
                    if (t = a8[a9].split("&")[0], u = a8[a9].split("&")[1], w = a8[a9].split("&")[2], console.log("用户：".concat(t, "开始任务")), ab = l.findIndex(function (bo) {
                      return bo.id == t;
                    }), -1 === ab) {
                      {
                        bd.next = 27;
                        break;
                      }
                    }
                    console.log("从缓存中取UA");
                    n = l[ab].ua;
                    o = l[ab].device;
                    console.log(n);
                    console.log(o);
                    bd.next = 35;
                    break;
                  case 27:
                    console.log("随机生成UA");
                    ac = Y();
                    n = ac.ua;
                    o = ac.device;
                    console.log(n);
                    console.log(o);
                    bd.next = 35;
                    return C();
                  case 35:
                    v = "";
                    console.log("获取publicKey");
                    bd.next = 39;
                    return E("/wzrbapp/app/sys/publicKey");
                  case 39:
                    ad = bd.sent;
                    q = ad.data.publicKey;
                    r = ad.data.key;
                    console.log(q);
                    af = new (m.loadJSEncrypt())();
                    af.setPublicKey(r);
                    u = af.encrypt(u);
                    console.log("登录");
                    bd.next = 49;
                    return G("/wzrbapp/app/sys/login/byPassword", "rasPassword=".concat(encodeURIComponent(u), "&username=").concat(t, "&publicKey=").concat(q, "&inviteCode=&longlat=,"));
                  case 49:
                    if (ag = bd.sent, 200 == ag.code) {
                      {
                        bd.next = 53;
                        break;
                      }
                    }
                    console.log(ag.message);
                    return bd.abrupt("continue", 285);
                  case 53:
                    console.log("登录成功");
                    v = ag.data.paAuthority;
                    x = ag.data.userId;
                    console.log("————————————");
                    ah = new Date().getTime() + "";
                    ai = ah.split("").reverse().slice(0, 8).reverse().join("");
                    aj = T({
                      redirectUrl: "https://activity.xinhuamm.net/statics/earn-coins2-h5/#/",
                      appId: z,
                      data: {
                        accessToken: v
                      }
                    }, "b557ddda1bf5e414".concat(ai), "0000000000000000");
                    ak = "----WebKitFormBoundary2V9BQiXoV3SzDQqC";
                    al = "--".concat(ak, "\r\n") + "Content-Disposition: form-data; name=\"timeStamp\"\r\n\r\n" + "".concat(ah, "\r\n") + "--".concat(ak, "\r\n") + "Content-Disposition: form-data; name=\"params\"\r\n\r\n" + "".concat(aj, "\r\n") + "--".concat(ak, "--\r\n");
                    bd.next = 64;
                    return I("https://ryapi.xinhuamm.net/token/api/token/getTokenInfo", al, ak);
                  case 64:
                    am = bd.sent;
                    an = U(am.obj, "414e5fb1addd755b", "0000000000000000");
                    y = an.token;
                    bd.next = 69;
                    return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/statistics/getStaticsInfo", {});
                  case 69:
                    ao = bd.sent;
                    console.log("今日获得暖暖币：".concat(ao.obj.todayCoin, " 我的零钱：").concat(ao.obj.balance, "元 邀请人数：").concat(ao.obj.totalInviteCount));
                    console.log("开启宝箱");
                    bd.next = 74;
                    return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/coin/openTreasureBox", {});
                  case 74:
                    ap = bd.sent;
                    console.log(ap.msg);
                    console.log("任务进度");
                    console.log("阅读：".concat(ao.obj.visitNum, " 点赞：").concat(ao.obj.supportNum, " 评论：").concat(ao.obj.commentNum, " 分享：").concat(ao.obj.shareNum));
                    bd.next = 80;
                    return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/content/getHighContentList", {});
                  case 80:
                    aq = bd.sent;
                    bd.next = 83;
                    return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/content/getUserContentInfo", {});
                  case 83:
                    ar = bd.sent;
                    as = c(aq.list);
                    bd.prev = 85;
                    as.s();
                  case 87:
                    if ((at = as.n()).done) {
                      {
                        bd.next = 112;
                        break;
                      }
                    }
                    if (au = at.value, console.log("文章：".concat(au.title)), ar.obj.visitList.includes(au.contentId)) {
                      {
                        bd.next = 95;
                        break;
                      }
                    }
                    bd.next = 93;
                    return G("/hybapp/c/docs/cbyd/event", "eventId=2&docId=".concat(au.contentId));
                  case 93:
                    av = bd.sent;
                    console.log("阅读：".concat(av.msg));
                  case 95:
                    if (ar.obj.supportList.includes(au.contentId)) {
                      {
                        bd.next = 100;
                        break;
                      }
                    }
                    bd.next = 98;
                    return G("/hybapp/c/docs/cbyd/event", "eventId=5&docId=".concat(au.contentId));
                  case 98:
                    aw = bd.sent;
                    console.log("点赞：".concat(aw.msg));
                  case 100:
                    if (ar.obj.commentList.includes(au.contentId)) {
                      {
                        bd.next = 105;
                        break;
                      }
                    }
                    bd.next = 103;
                    return G("/hybapp/c/docs/cbyd/event", "eventId=4&docId=".concat(au.contentId));
                  case 103:
                    ax = bd.sent;
                    console.log("评论：".concat(ax.msg));
                  case 105:
                    if (ar.obj.shareList.includes(au.contentId)) {
                      {
                        bd.next = 110;
                        break;
                      }
                    }
                    bd.next = 108;
                    return G("/hybapp/c/docs/cbyd/event", "eventId=3&docId=".concat(au.contentId));
                  case 108:
                    ay = bd.sent;
                    console.log("分享：".concat(ay.msg));
                  case 110:
                    bd.next = 87;
                    break;
                  case 112:
                    bd.next = 117;
                    break;
                  case 114:
                    bd.prev = 114;
                    bd.t0 = bd.catch(85);
                    as.e(bd.t0);
                  case 117:
                    bd.prev = 117;
                    as.f();
                    return bd.finish(117);
                  case 120:
                    bd.next = 122;
                    return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/global/config/getConfig", {});
                  case 122:
                    for (az = bd.sent, aA = az.obj.inviteLotteryPath, aB = aA.split("?")[1], aC = {}, aD = aB.split("&"), aE = 0, aF = aD.length; aE < aF; aE++) {
                      aG = aD[aE].split("=");
                      aC[aG[0]] = aG[1];
                    }
                    console.log("————————————");
                    console.log("每日抽奖");
                    bd.next = 132;
                    return K("https://mediacloud-pub-oss.xinhuamm.net/lottery/activity/".concat(z, "/").concat(aC.id, "/index.json?timestamp=").concat(Date.now()));
                  case 132:
                    aH = bd.sent;
                    bd.next = 135;
                    return K("https://ryapi.xinhuamm.net/lotteryapi/lottery/expandInfo/".concat(aC.id));
                  case 135:
                    aI = bd.sent;
                    console.log("剩余抽奖次数：".concat(aI.data.availableJoinCount));
                    aJ = g().mark(function bv() {
                      {
                        var bx;
                        var by;
                        return g().wrap(function (bz) {
                          {
                            for (;;) {
                              switch (bz.prev = bz.next) {
                                case 0:
                                  bz.next = 2;
                                  return K("https://ryapi.xinhuamm.net/lotteryapi/lottery/draw?id=".concat(aC.id, "&appId=").concat(z, "&password=&idcard="));
                                case 2:
                                  bx = bz.sent;
                                  by = aH.lotteryItems.findIndex(function (bC) {
                                    return bC.id == bx.data.prizeItemId;
                                  });
                                  console.log("抽奖获得：".concat(aH.lotteryItems[by].code));
                                case 5:
                                case "end":
                                  return bz.stop();
                              }
                            }
                          }
                        }, bv);
                      }
                    });
                    aK = 0;
                  case 139:
                    if (!(aK < aI.data.availableJoinCount)) {
                      {
                        bd.next = 144;
                        break;
                      }
                    }
                    return bd.delegateYield(aJ(), "t1", 141);
                  case 141:
                    aK++;
                    bd.next = 139;
                    break;
                  case 144:
                    bd.next = 146;
                    return M("https://ryapi.xinhuamm.net/lotteryapi/lottery/my/winningRecord/".concat(z, "/").concat(aC.id, "?pageNum=1&pageSize=20"), {});
                  case 146:
                    if (aL = bd.sent, null == aL || null === (aa = aL.data) || undefined === aa || !aa.list) {
                      {
                        bd.next = 175;
                        break;
                      }
                    }
                    aM = c(aL.data.list);
                    bd.prev = 149;
                    aM.s();
                  case 151:
                    if ((aN = aM.n()).done) {
                      {
                        bd.next = 167;
                        break;
                      }
                    }
                    if (aO = aN.value, 3 != aO.itemType || 0 != aO.redpackReceiveStatus) {
                      {
                        bd.next = 165;
                        break;
                      }
                    }
                    if (console.log("奖品：".concat(aO.itemCode)), !w) {
                      {
                        bd.next = 164;
                        break;
                      }
                    }
                    var bf = {
                      token: w,
                      ticket: aO.winningPrize.exchangeCode
                    };
                    console.log("领取奖品");
                    bd.next = 159;
                    return O(bf);
                  case 159:
                    aP = bd.sent;
                    console.log("领取结果：".concat(aP.msg));
                    s += "用户：".concat(t, " 抽奖获得：").concat(aO.itemCode, " 领取结果：").concat(aP.msg, "\n");
                    bd.next = 165;
                    break;
                  case 164:
                    console.log("请配置wxToken");
                  case 165:
                    bd.next = 151;
                    break;
                  case 167:
                    bd.next = 172;
                    break;
                  case 169:
                    bd.prev = 169;
                    bd.t2 = bd.catch(149);
                    aM.e(bd.t2);
                  case 172:
                    bd.prev = 172;
                    aM.f();
                    return bd.finish(172);
                  case 175:
                    for (console.log("————————————"), console.log("每日签到"), aA = az.obj.inviteSignPath, aB = aA.split("?")[1], aC = {}, aD = aB.split("&"), aQ = 0, aR = aD.length; aQ < aR; aQ++) {
                      aS = aD[aQ].split("=");
                      aC[aS[0]] = aS[1];
                    }
                    bd.next = 184;
                    return K("https://mediacloud-pub-oss.xinhuamm.net/sign/activity/".concat(z, "/").concat(aC.activityId, "/publish/index.json?device=brower").concat(Math.floor(new Date().getTime() / 1000)));
                  case 184:
                    aT = bd.sent;
                    bd.next = 187;
                    return M("https://signapi.xinhuamm.net/signapi/sign/getSignInfoById", {
                      id: aT.id
                    });
                  case 187:
                    if (aU = bd.sent, 1 != aU.obj.currentSign) {
                      {
                        bd.next = 193;
                        break;
                      }
                    }
                    console.log("今日已签到");
                    console.log("连续签到：".concat(aU.obj.continuityDays, "天"));
                    bd.next = 198;
                    break;
                  case 193:
                    var bg = {
                      activityId: aT.id
                    };
                    bd.next = 195;
                    return M("https://signapi.xinhuamm.net/signapi/sign/sign", bg);
                  case 195:
                    aW = bd.sent;
                    console.log(aW.msg);
                    console.log("连续签到：".concat(null == aW || null === (aV = aW.obj) || undefined === aV ? undefined : aV.continuityDays, "天"));
                  case 198:
                    bd.next = 200;
                    return M("https://signapi.xinhuamm.net/signapi/sign/getSevenDayAwardList", {});
                  case 200:
                    aX = bd.sent;
                    aY = c(aX.list);
                    bd.prev = 202;
                    aY.s();
                  case 204:
                    if ((aZ = aY.n()).done) {
                      {
                        bd.next = 251;
                        break;
                      }
                    }
                    b1 = aZ.value;
                    console.log("活动：".concat(b1.activityName));
                    bd.next = 209;
                    return K("https://ryapi.xinhuamm.net/lotteryapi/lottery/expandInfo/".concat(b1.signLotteryJoinId));
                  case 209:
                    b2 = bd.sent;
                    console.log("剩余抽奖次数：".concat(b2.data.availableJoinCount));
                    b3 = g().mark(function bD() {
                      {
                        var bG;
                        var bH;
                        return g().wrap(function (bJ) {
                          {
                            for (;;) {
                              switch (bJ.prev = bJ.next) {
                                case 0:
                                  bJ.next = 2;
                                  return K("https://mediacloud-pub-oss.xinhuamm.net/lottery/activity/".concat(z, "/").concat(b1.signLotteryJoinId, "/index.json?timestamp=").concat(Date.now()));
                                case 2:
                                  aH = bJ.sent;
                                  bJ.next = 5;
                                  return K("https://ryapi.xinhuamm.net/lotteryapi/lottery/draw?id=".concat(b1.signLotteryJoinId, "&appId=").concat(z, "&password=&idcard="));
                                case 5:
                                  bG = bJ.sent;
                                  bH = aH.lotteryItems.findIndex(function (bM) {
                                    {
                                      return bM.id == bG.data.prizeItemId;
                                    }
                                  });
                                  console.log("抽奖获得：".concat(aH.lotteryItems[bH].code));
                                case 8:
                                case "end":
                                  return bJ.stop();
                              }
                            }
                          }
                        }, bD);
                      }
                    });
                    b4 = 0;
                  case 213:
                    if (!(b4 < b2.data.availableJoinCount)) {
                      {
                        bd.next = 218;
                        break;
                      }
                    }
                    return bd.delegateYield(b3(), "t3", 215);
                  case 215:
                    b4++;
                    bd.next = 213;
                    break;
                  case 218:
                    bd.next = 220;
                    return M("https://ryapi.xinhuamm.net/lotteryapi/lottery/my/winningRecord/".concat(z, "/").concat(b1.signLotteryJoinId), {});
                  case 220:
                    if (b5 = bd.sent, null == b5 || null === (b0 = b5.data) || undefined === b0 || !b0.list) {
                      {
                        bd.next = 249;
                        break;
                      }
                    }
                    b6 = c(b5.data.list);
                    bd.prev = 223;
                    b6.s();
                  case 225:
                    if ((b7 = b6.n()).done) {
                      {
                        bd.next = 241;
                        break;
                      }
                    }
                    if (b8 = b7.value, 3 != b8.itemType || 0 != b8.redpackReceiveStatus) {
                      {
                        bd.next = 239;
                        break;
                      }
                    }
                    if (console.log("奖品：".concat(b8.itemCode)), !w) {
                      {
                        bd.next = 238;
                        break;
                      }
                    }
                    var bh = {
                      token: w,
                      ticket: b8.winningPrize.exchangeCode
                    };
                    console.log("领取奖品");
                    bd.next = 233;
                    return O(bh);
                  case 233:
                    b9 = bd.sent;
                    console.log("领取结果：".concat(b9.msg));
                    s += "用户：".concat(t, " 抽奖获得：").concat(b8.itemCode, " 领取结果：").concat(b9.msg, "\n");
                    bd.next = 239;
                    break;
                  case 238:
                    console.log("请配置wxToken");
                  case 239:
                    bd.next = 225;
                    break;
                  case 241:
                    bd.next = 246;
                    break;
                  case 243:
                    bd.prev = 243;
                    bd.t4 = bd.catch(223);
                    b6.e(bd.t4);
                  case 246:
                    bd.prev = 246;
                    b6.f();
                    return bd.finish(246);
                  case 249:
                    bd.next = 204;
                    break;
                  case 251:
                    bd.next = 256;
                    break;
                  case 253:
                    bd.prev = 253;
                    bd.t5 = bd.catch(202);
                    aY.e(bd.t5);
                  case 256:
                    bd.prev = 256;
                    aY.f();
                    return bd.finish(256);
                  case 259:
                    console.log("————————————");
                    console.log("查询零钱");
                    bd.next = 263;
                    return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/statistics/getStaticsInfo", {});
                  case 263:
                    if (ao = bd.sent, !(ao.obj.balance >= 10)) {
                      {
                        bd.next = 278;
                        break;
                      }
                    }
                    var bi = {
                      amount: ao.obj.balance
                    };
                    console.log("提现");
                    bd.next = 268;
                    return M("https://mkapi2.xinhuamm.net/coinApi2/clapi/account/withdrawal", bi);
                  case 268:
                    if (ba = bd.sent, 200 != ba.status) {
                      {
                        bd.next = 277;
                        break;
                      }
                    }
                    var bj = {
                      token: w,
                      ticket: ba.obj.ticket
                    };
                    bd.next = 272;
                    return Q(bj);
                  case 272:
                    bb = bd.sent;
                    console.log("提现结果：".concat(bb.msg));
                    s += "用户：".concat(t, " 提现：").concat(ao.obj.balance, " 提现结果：").concat(bb.msg, "\n");
                    bd.next = 278;
                    break;
                  case 277:
                    console.log(ba.msg);
                  case 278:
                    console.log("今日获得暖暖币：".concat(ao.obj.todayCoin, " 我的零钱：").concat(ao.obj.balance, "元 邀请人数：").concat(ao.obj.totalInviteCount));
                    s += "用户：".concat(t, " 零钱：").concat(ao.obj.balance, "\n");
                    bd.next = 285;
                    break;
                  case 282:
                    bd.prev = 282;
                    bd.t6 = bd.catch(11);
                    console.log(bd.t6);
                  case 285:
                    a9++;
                    bd.next = 10;
                    break;
                  case 288:
                    if (!s) {
                      {
                        bd.next = 291;
                        break;
                      }
                    }
                    bd.next = 291;
                    return a3(s);
                  case 291:
                  case "end":
                    return bd.stop();
                }
              }
            }
          }, a6, null, [[11, 282], [85, 114, 117, 120], [149, 169, 172, 175], [202, 253, 256, 259], [223, 243, 246, 249]]);
        }
      }));
      return B.apply(this, arguments);
    }
  }
  function C() {
    {
      return D.apply(this, arguments);
    }
  }
  function D() {
    {
      D = i(g().mark(function a7() {
        {
          var a9;
          var aa;
          var ab;
          return g().wrap(function (ad) {
            {
              for (;;) {
                switch (ad.prev = ad.next) {
                  case 0:
                    var af = {
                      id: t,
                      device: o,
                      ua: n
                    };
                    if (a9 = $.getjson("WDXW_Device") || [], aa = af, ab = a9.findIndex(function (ag) {
                      {
                        return ag.id == aa.id;
                      }
                    }), -1 === ab) {
                      {
                        ad.next = 12;
                        break;
                      }
                    }
                    if (a9[ab].device != aa.device || a9[ab].ua != aa.ua) {
                      {
                        ad.next = 8;
                        break;
                      }
                    }
                    return ad.abrupt("return");
                  case 8:
                    a9[ab] = aa;
                    console.log("🎉用户".concat(aa.id, "更新ua成功!"));
                  case 10:
                    ad.next = 14;
                    break;
                  case 12:
                    a9.push(aa);
                    console.log("🎉用户".concat(aa.id, "新增ua成功!"));
                  case 14:
                    $.setjson(a9, "WDXW_Device");
                  case 15:
                  case "end":
                    return ad.stop();
                }
              }
            }
          }, a7);
        }
      }));
      return D.apply(this, arguments);
    }
  }
  function E(a5) {
    return F.apply(this, arguments);
  }
  function F() {
    {
      F = i(g().mark(function a7(a8) {
        {
          var aa;
          return g().wrap(function (ac) {
            {
              for (;;) {
                switch (ac.prev = ac.next) {
                  case 0:
                    aa = S();
                    return ac.abrupt("return", new Promise(function (ae) {
                      {
                        var ag = {
                          url: "https://wdappapi.wzrb.com.cn".concat(a8),
                          headers: {
                            Connection: "Keep-Alive",
                            "X-DEVICE-ID": o,
                            "X-TIMESTAMP": aa.time,
                            APPWEBWZAUTHORITY: "",
                            "X-SITE-UID": "S_WDXW",
                            "X-SIGNATURE": aa.signature,
                            "X-USER-ID": "",
                            "X-REQUEST-ID": aa.uuid,
                            "X-SESSION-ID": "",
                            "X-TENANT-UID": "T_GOV",
                            "Accept-Encoding": "gzip",
                            "USER-AGENT": n
                          }
                        };
                        $.get(ag, function () {
                          {
                            var ai = i(g().mark(function ak(al, am, an) {
                              {
                                return g().wrap(function (ap) {
                                  {
                                    for (;;) {
                                      switch (ap.prev = ap.next) {
                                        case 0:
                                          try {
                                            {
                                              al ? (console.log("".concat(JSON.stringify(al))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ae(JSON.parse(an));
                                            }
                                          } catch (as) {
                                            {
                                              $.logErr(as, am);
                                            }
                                          } finally {
                                            {
                                              ae();
                                            }
                                          }
                                        case 1:
                                        case "end":
                                          return ap.stop();
                                      }
                                    }
                                  }
                                }, ak);
                              }
                            }));
                            return function (al, am, an) {
                              {
                                return ai.apply(this, arguments);
                              }
                            };
                          }
                        }());
                      }
                    }));
                  case 2:
                  case "end":
                    return ac.stop();
                }
              }
            }
          }, a7);
        }
      }));
      return F.apply(this, arguments);
    }
  }
  function G(a5, a6) {
    {
      return H.apply(this, arguments);
    }
  }
  function H() {
    H = i(g().mark(function a6(a7, a8) {
      var aa;
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = S();
              return ab.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://wdappapi.wzrb.com.cn".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-DEVICE-ID": o,
                    "X-TIMESTAMP": aa.time,
                    APPWEBWZAUTHORITY: v,
                    "X-SITE-UID": "S_WDXW",
                    "X-SIGNATURE": aa.signature,
                    "X-USER-ID": x,
                    "X-REQUEST-ID": aa.uuid,
                    "X-SESSION-ID": v,
                    "X-TENANT-UID": "T_GOV",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "gzip",
                    "USER-AGENT": n
                  },
                  body: a8
                };
                $.post(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    {
                      return g().wrap(function (am) {
                        {
                          for (;;) {
                            switch (am.prev = am.next) {
                              case 0:
                                try {
                                  {
                                    ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ak));
                                  }
                                } catch (aq) {
                                  {
                                    $.logErr(aq, aj);
                                  }
                                } finally {
                                  {
                                    ac();
                                  }
                                }
                              case 1:
                              case "end":
                                return am.stop();
                            }
                          }
                        }
                      }, ah);
                    }
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
      }, a6);
    }));
    return H.apply(this, arguments);
  }
  function I(a5, a6, a7) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function a6(a7, a8, a9) {
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              return ab.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    "Content-Type": "multipart/form-data; boundary=".concat(a9),
                    Accept: "*/*",
                    Origin: "https://activity.xinhuamm.net",
                    "X-Requested-With": "com.wznews.news.app",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://activity.xinhuamm.net/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; ".concat(p, " Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36/trs;trs_app")
                  },
                  body: a8
                };
                $.post(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ak));
                            } catch (am) {
                              $.logErr(am, aj);
                            } finally {
                              ac();
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
      }, a6);
    }));
    return J.apply(this, arguments);
  }
  function K(a5) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function a5(a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ab = {
                  url: "".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    dn: o,
                    token: y,
                    cookie: "token=".concat(y),
                    Accept: "*/*",
                    Origin: "https://activity.xinhuamm.net",
                    "X-Requested-With": "com.wznews.news.app",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://activity.xinhuamm.net/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; ".concat(p, " Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36/trs;trs_app")
                  }
                };
                $.get(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            try {
                              af ? (console.log("".concat(JSON.stringify(af))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ah));
                            } catch (aj) {
                              $.logErr(aj, ag);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ae);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a5);
    }));
    return L.apply(this, arguments);
  }
  function M(a5, a6) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function a7(a8, a9) {
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              return ab.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    dn: o,
                    token: y,
                    cookie: "token=".concat(y),
                    "Content-Type": "application/json",
                    Accept: "*/*",
                    Origin: "https://activity.xinhuamm.net",
                    "X-Requested-With": "com.wznews.news.app",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://activity.xinhuamm.net/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; ".concat(p, " Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36/trs;trs_app")
                  },
                  body: JSON.stringify(a9)
                };
                $.post(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ak));
                            } catch (an) {
                              $.logErr(an, aj);
                            } finally {
                              ac();
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
            case 1:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return N.apply(this, arguments);
  }
  function O(a5) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function a6(a7) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://ryapi.xinhuamm.net/lotteryapi/noLogin/redpack/redeem",
                  headers: {
                    Connection: "Keep-Alive",
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                    Referer: "https://servicewechat.com/wxe413e839239656fd/9/page-frame.html",
                    "Accept-Encoding": "gzip,compress,br,deflate",
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.50(0x18003237) NetType/WIFI Language/zh_CN"
                  },
                  body: JSON.stringify(a7)
                };
                $.post(ac, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            try {
                              ag ? (console.log("".concat(JSON.stringify(ag))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ai));
                            } catch (ak) {
                              $.logErr(ak, ah);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, af);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a6);
    }));
    return P.apply(this, arguments);
  }
  function Q(a5) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function a6(a7) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ab = {
                  url: "https://mkapi.xinhuamm.net/coinApi/cvapi/account/withdrawal/callback",
                  headers: {
                    Connection: "Keep-Alive",
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                    Referer: "https://servicewechat.com/wxe413e839239656fd/9/page-frame.html",
                    "Accept-Encoding": "gzip,compress,br,deflate",
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.50(0x18003237) NetType/WIFI Language/zh_CN"
                  },
                  body: JSON.stringify(a7)
                };
                $.post(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            try {
                              af ? (console.log("".concat(JSON.stringify(af))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(ah));
                            } catch (ak) {
                              $.logErr(ak, ag);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, ae);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a6);
    }));
    return R.apply(this, arguments);
  }
  function S() {
    var a5 = V();
    var a6 = Date.now();
    var a7 = m.createCryptoJS();
    var a8 = a7.SHA256("T_GOV&&S_WDXW&&".concat(a5, "&&").concat(v, "&&").concat(a6, "&&35c782a2")).toString();
    var a9 = {
      uuid: a5,
      time: a6,
      signature: a8
    };
    return a9;
  }
  function T(a5, a6, a7) {
    var a8 = m.createCryptoJS();
    var a9 = a8.enc.Utf8.parse(a6);
    var aa = a8.enc.Utf8.parse(a7);
    var ab = a8.enc.Utf8.parse(JSON.stringify(a5));
    var ac = a8.AES.encrypt(ab, a9, {
      iv: aa,
      mode: a8.mode.CBC,
      padding: a8.pad.Pkcs7
    });
    return a8.enc.Base64.stringify(ac.ciphertext);
  }
  function U(a5, a6, a7) {
    var a8 = m.createCryptoJS();
    var a9 = a8.enc.Utf8.parse(a6);
    var aa = a8.enc.Utf8.parse(a7);
    var ab = a5;
    var ac = a8.AES.decrypt(ab, a9, {
      iv: aa,
      mode: a8.mode.CBC,
      padding: a8.pad.Pkcs7
    });
    return JSON.parse(ac.toString(a8.enc.Utf8));
  }
  function V() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a5) {
      var a6 = 16 * Math.random() | 0;
      var a7 = "x" === a5 ? a6 : 3 & a6 | 8;
      return a7.toString(16);
    });
  }
  function W() {
    for (var a5 = "", a6 = 0; a6 < 16; a6++) {
      var a7 = Math.floor(16 * Math.random());
      a5 += "0123456789abcdef"[a7];
    }
    return a5;
  }
  function X(a5) {
    return a5[Math.floor(Math.random() * a5.length)];
  }
  function Y() {
    p = X(["M2103K19C", "M2104K10AC", "21121119SC", "21091116AC", "21091116C", "2201116SC", "21091116UC", "22101317C", "22101316C", "22101316UCP", "2312DRAABC", "2312DRA50C", "23090RA98C"]);
    var a5 = W();
    var a6 = "3565961356" + p.length % 10 + 19 + a5;
    var a7 = m.md5(a6).toUpperCase();
    var a8 = "8.2.3;".concat(a7, ";Redmi/").concat(p, ";ANDROID;11;");
    var a9 = {
      ua: a8,
      device: a7
    };
    return a9;
  }
  function Z() {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function a5() {
      var a7;
      return g().wrap(function a8(a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              if (a7 = $.getdata("Utils_Code") || "", !a7 || !Object.keys(a7).length) {
                a9.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a7);
              return a9.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a9.abrupt("return", new Promise(function () {
                var ac = i(g().mark(function ad(ae) {
                  return g().wrap(function ag(ah) {
                    for (;;) {
                      switch (ah.prev = ah.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (ai) {
                            $.setdata(ai, "Utils_Code");
                            eval(ai);
                            console.log("✅ Utils加载成功, 请继续");
                            ae(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ah.stop();
                      }
                    }
                  }, ad);
                }));
                return function (ae) {
                  return ac.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a9.stop();
          }
        }
      }, a5);
    }));
    return a0.apply(this, arguments);
  }
  function a1() {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function a6() {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(ac, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            try {
                              ag ? (console.log("".concat(JSON.stringify(ag))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(ai).notice);
                            } catch (al) {
                              $.logErr(al, ah);
                            } finally {
                              aa();
                            }
                          case 1:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, af);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a6);
    }));
    return a2.apply(this, arguments);
  }
  function a3(a5) {
    return a4.apply(this, arguments);
  }
  function a4() {
    a4 = i(g().mark(function a7(a8) {
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              if (!$.isNode()) {
                a9.next = 5;
                break;
              }
              a9.next = 3;
              return notify.sendNotify($.name, a8);
            case 3:
              a9.next = 6;
              break;
            case 5:
              $.msg($.name, "", a8);
            case 6:
            case "end":
              return a9.stop();
          }
        }
      }, a7);
    }));
    return a4.apply(this, arguments);
  }
  i(g().mark(function a5() {
    return g().wrap(function (a6) {
      for (;;) {
        switch (a6.prev = a6.next) {
          case 0:
            a6.next = 2;
            return a1();
          case 2:
            a6.next = 4;
            return A();
          case 4:
          case "end":
            return a6.stop();
        }
      }
    }, a5);
  }))().catch(function (a6) {
    $.log(a6);
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