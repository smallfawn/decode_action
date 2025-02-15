//Sat Feb 15 2025 02:26:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("大潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ab) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ae) {
      return typeof ae;
    } : function (ae) {
      return ae && "function" == typeof Symbol && ae.constructor === Symbol && ae !== Symbol.prototype ? "symbol" : typeof ae;
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
                    var an = {
                      done: true
                    };
                    return af >= ab.length ? an : {
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
          var ae = {}.toString.call(ab).slice(8, -1);
          "Object" === ae && ab.constructor && (ae = ab.constructor.name);
          return "Map" === ae || "Set" === ae ? Array.from(ab) : "Arguments" === ae || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae) ? f(ab, ac) : undefined;
        }
      }
    }
  }
  function f(ab, ac) {
    {
      (null == ac || ac > ab.length) && (ac = ab.length);
      for (var ae = 0, af = Array(ac); ae < ac; ae++) {
        af[ae] = ab[ae];
      }
      return af;
    }
  }
  function g() {
    "use strict";

    var ab = {
      psPJg: function (aI, aJ, aK, aL, aM) {
        return aI(aJ, aK, aL, aM);
      },
      okLNi: function (aI, aJ) {
        return aI !== aJ;
      },
      zOxrd: "NOQmp",
      eIBYC: function (aI, aJ) {
        return aI === aJ;
      },
      kuBBi: "RNCAA",
      AUmbC: "IBMIc",
      jtdyM: " API请求失败，请检查网路重试",
      mQsNb: function (aI, aJ) {
        return aI(aJ);
      },
      unxCw: function (aI, aJ) {
        return aI === aJ;
      },
      PTHhF: "thxPw",
      LZMGX: "gxptx",
      AfbRV: function (aI, aJ) {
        return aI instanceof aJ;
      },
      GQIqA: function (aI, aJ, aK, aL) {
        return aI(aJ, aK, aL);
      },
      Gqnou: function (aI, aJ, aK, aL) {
        return aI(aJ, aK, aL);
      },
      RaXIf: "normal",
      yndbA: function (aI, aJ) {
        return aI === aJ;
      },
      ZieOt: "pMoyv",
      fJMdj: "try statement without catch or finally",
      RIvlM: "axAEG",
      hBOVh: "mJfna",
      qBmID: "next",
      BtxlX: "throw",
      FJurl: "return",
      jSOjh: function (aI) {
        return aI();
      },
      fPuDn: function (aI, aJ) {
        return aI === aJ;
      },
      hLXyd: "Arguments",
      KHDLy: function (aI, aJ, aK) {
        return aI(aJ, aK);
      },
      norCq: "VMarc",
      KZlaE: "LqtKl",
      GqZCv: function (aI, aJ, aK, aL, aM) {
        return aI(aJ, aK, aL, aM);
      },
      QSvFc: function (aI, aJ) {
        return aI == aJ;
      },
      YEYvV: "function",
      cyAKe: function (aI, aJ) {
        return aI !== aJ;
      },
      aFoni: "symbol",
      WKjOI: function (aI, aJ, aK, aL, aM, aN, aO, aP) {
        return aI(aJ, aK, aL, aM, aN, aO, aP);
      },
      nqlRj: "zZLJZ",
      zsccd: "CulYr",
      Koati: "OyoqF",
      GQvUJ: "cliBZ",
      uazAG: "UfZHQ",
      hAqvT: "rNQFS",
      KxzYL: "5|0|3|1|4|2",
      xcXZh: "&password=",
      ZfAHq: function (aI, aJ) {
        return aI(aJ);
      },
      lrfNE: "&phone_number=",
      CQzCU: function (aI) {
        return aI();
      },
      liHSl: "client_id=",
      WBFFy: "post%%/web/oauth/credential_auth?",
      xvwqT: "BYUCY",
      bJETe: "1|5|2|0|4|3",
      Noolk: function (aI, aJ) {
        return aI === aJ;
      },
      LXKAm: "iterator result is not an object",
      LFsEI: function (aI, aJ) {
        return aI + aJ;
      },
      fYybj: "' method",
      WHGME: function (aI, aJ) {
        return aI * aJ;
      },
      wgppO: "vCoqd",
      aDCXq: function (aI, aJ) {
        return aI in aJ;
      },
      recPR: "end",
      NliqI: "dhCNQ",
      fNNQI: "iJofq",
      QlYxY: function (aI, aJ) {
        return aI === aJ;
      },
      OKeRO: function (aI, aJ) {
        return aI(aJ);
      },
      pcdAm: "kgFvS",
      GNrkb: function (aI, aJ) {
        return aI >= aJ;
      },
      aBYWW: function (aI, aJ) {
        return aI(aJ);
      },
      qeCcF: "illegal catch attempt",
      kPxtf: function (aI, aJ) {
        return aI + aJ;
      },
      Zrzgi: " is not iterable",
      oPabU: function (aI, aJ) {
        return aI < aJ;
      },
      YDLmX: "LkLVJ",
      QCVuC: "OkIQT",
      TNeDd: function (aI, aJ, aK, aL) {
        return aI(aJ, aK, aL);
      },
      fjadx: "GeneratorFunction",
      jTaEH: function (aI, aJ) {
        return aI !== aJ;
      },
      oKQbl: "bnrHM",
      DHinQ: "fvztQ",
      aXYmt: "2|0|1|3|5|4",
      qxqHS: function (aI, aJ) {
        return aI + aJ;
      },
      TQCrA: "The iterator does not provide a '",
      goBGW: function (aI, aJ) {
        return aI !== aJ;
      },
      ffgXD: "Utils_Code",
      TMEsO: "✅ Utils加载成功, 请继续",
      zlJEi: function (aI, aJ) {
        return aI(aJ);
      },
      WIFav: "ferTA",
      sncbS: "JnhPb",
      AvGZG: "[object Generator]",
      mhllY: "hEzrT",
      rteaG: "LmRGO",
      PQOZH: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
      bDczA: function (aI, aJ) {
        return aI(aJ);
      },
      ievXY: function (aI) {
        return aI();
      },
      QYHTb: "vDvjQ",
      jJsYy: "kanfz",
      gjaZP: "3|4|2|1|0",
      eyfPt: function (aI, aJ) {
        return aI < aJ;
      },
      kyJiY: function (aI, aJ, aK, aL, aM) {
        return aI(aJ, aK, aL, aM);
      },
      fBuBr: function (aI, aJ) {
        return aI >= aJ;
      },
      oUHUt: "wyKKM",
      BHbyj: "tkGmY",
      Hihtp: "yFePp",
      QuADO: "IjpDU",
      fXwfl: function (aI, aJ) {
        return aI === aJ;
      },
      YUYKD: "root",
      ISdfh: function (aI, aJ) {
        return aI <= aJ;
      },
      xVHmM: function (aI, aJ) {
        return aI !== aJ;
      },
      FOmLZ: "lAEsR",
      jvDHi: "BpXAs",
      yXpBx: "finallyLoc",
      Gbanj: function (aI, aJ) {
        return aI && aJ;
      },
      zhTYp: "uEjCR",
      GrgBO: function (aI, aJ, aK) {
        return aI(aJ, aK);
      },
      cVzMK: "yPQOX",
      Rbypf: "qiEaX",
      TMZlY: function (aI, aJ) {
        return aI !== aJ;
      },
      pTxde: function (aI, aJ) {
        return aI(aJ);
      },
      GzHOT: function (aI, aJ) {
        return aI === aJ;
      },
      TpwMd: "YJfuL",
      eTniS: function (aI, aJ) {
        return aI - aJ;
      },
      XkMIm: "XtHlZ",
      fxdmg: "zUGIv",
      GSUCR: "break",
      xREAB: function (aI, aJ) {
        return aI === aJ;
      },
      UNdJN: "continue",
      LTrQV: function (aI, aJ) {
        return aI <= aJ;
      },
      xWGdN: function (aI, aJ, aK, aL, aM, aN, aO, aP) {
        return aI(aJ, aK, aL, aM, aN, aO, aP);
      },
      RJYkp: function (aI, aJ) {
        return aI(aJ);
      },
      yFAAt: function (aI) {
        return aI();
      },
      qtDLg: function (aI, aJ) {
        return aI === aJ;
      },
      bzTrW: function (aI, aJ) {
        return aI >= aJ;
      },
      YMtYq: function (aI, aJ) {
        return aI === aJ;
      },
      tUkEP: "YOUue"
    };
    g = function () {
      {
        return ad;
      }
    };
    var ac;
    var ad = {};
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
        al = function (aK, aL, aM) {
          {
            return aK[aL] = aM;
          }
        };
      }
    }
    function am(aL, aM, aN, aO) {
      {
        var aP = aM && aM.prototype instanceof at ? aM : at;
        var aQ = Object.create(aP.prototype);
        var aR = new aG(aO || []);
        ag(aQ, "_invoke", {
          value: aC(aL, aN, aR)
        });
        return aQ;
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
        } catch (aQ) {
          {
            var aO = {
              type: "throw",
              arg: aQ
            };
            return aO;
          }
        }
      }
    }
    ad.wrap = am;
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
          {
            al(aL, aO, function (aQ) {
              {
                return this._invoke(aO, aQ);
              }
            });
          }
        });
      }
    }
    function aB(aL, aM) {
      {
        function aQ(aR, aS, aT, aU) {
          {
            var aW = an(aL[aR], aL, aS);
            if ("throw" !== aW.type) {
              {
                var aX = aW.arg;
                var aY = aX.value;
                return aY && "object" == b(aY) && af.call(aY, "__await") ? aM.resolve(aY.__await).then(function (b0) {
                  aQ("next", b0, aT, aU);
                }, function (b0) {
                  {
                    aQ("throw", b0, aT, aU);
                  }
                }) : aM.resolve(aY).then(function (b0) {
                  {
                    aX.value = b0;
                    aT(aX);
                  }
                }, function (b0) {
                  return aQ("throw", b0, aT, aU);
                });
              }
            }
            aU(aW.arg);
          }
        }
        var aO;
        ag(this, "_invoke", {
          value: function (aR, aS) {
            {
              function aU() {
                {
                  return new aM(function (aW, aX) {
                    {
                      aQ(aR, aS, aW, aX);
                    }
                  });
                }
              }
              return aO = aO ? aO.then(aU, aU) : aU();
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
        var aP = aM.method;
        var aQ = aL.iterator[aP];
        if (aQ === ac) {
          aM.delegate = null;
          "throw" === aP && aL.iterator.return && (aM.method = "return", aM.arg = ac, aD(aL, aM), "throw" === aM.method) || "return" !== aP && (aM.method = "throw", aM.arg = new TypeError("The iterator does not provide a '" + aP + "' method"));
          return as;
        }
        var aR = an(aQ, aL.iterator, aM.arg);
        if ("throw" === aR.type) {
          aM.method = "throw";
          aM.arg = aR.arg;
          aM.delegate = null;
          return as;
        }
        var aS = aR.arg;
        return aS ? aS.done ? (aM[aL.resultName] = aS.value, aM.next = aL.nextLoc, "return" !== aM.method && (aM.method = "next", aM.arg = ac), aM.delegate = null, as) : aS : (aM.method = "throw", aM.arg = new TypeError("iterator result is not an object"), aM.delegate = null, as);
      }
    }
    function aE(aL) {
      {
        var aN = {
          tryLoc: aL[0]
        };
        1 in aL && (aN.catchLoc = aL[1]);
        2 in aL && (aN.finallyLoc = aL[2], aN.afterLoc = aL[3]);
        this.tryEntries.push(aN);
      }
    }
    function aF(aL) {
      {
        var aN = aL.completion || {};
        aN.type = "normal";
        delete aN.arg;
        aL.completion = aN;
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
    ad.isGeneratorFunction = function (aL) {
      {
        var aN = "function" == typeof aL && aL.constructor;
        return !!aN && (aN === au || "GeneratorFunction" === (aN.displayName || aN.name));
      }
    };
    ad.mark = function (aL) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aL, av) : (aL.__proto__ = av, al(aL, ak, "GeneratorFunction"));
        aL.prototype = Object.create(az);
        return aL;
      }
    };
    ad.awrap = function (aL) {
      {
        var aM = {
          __await: aL
        };
        return aM;
      }
    };
    aA(aB.prototype);
    al(aB.prototype, aj, function () {
      {
        return this;
      }
    });
    ad.AsyncIterator = aB;
    ad.async = function (aL, aM, aN, aO, aP) {
      {
        undefined === aP && (aP = Promise);
        var aR = new aB(am(aL, aM, aN, aO), aP);
        return ad.isGeneratorFunction(aM) ? aR : aR.next().then(function (aS) {
          return aS.done ? aS.value : aR.next();
        });
      }
    };
    aA(az);
    al(az, ak, "Generator");
    al(az, ai, function () {
      {
        return this;
      }
    });
    al(az, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    ad.keys = function (aL) {
      {
        var aN = Object(aL);
        var aO = [];
        for (var aP in aN) aO.push(aP);
        aO.reverse();
        return function aQ() {
          {
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
          }
        };
      }
    };
    ad.values = aH;
    aG.prototype = {
      constructor: aG,
      reset: function (aL) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = ac, this.done = false, this.delegate = null, this.method = "next", this.arg = ac, this.tryEntries.forEach(aF), !aL) {
            for (var aM in this) "t" === aM.charAt(0) && af.call(this, aM) && !isNaN(+aM.slice(1)) && (this[aM] = ac);
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
            {
              aQ.type = "throw";
              aQ.arg = aL;
              aN.next = aU;
              aV && (aN.method = "next", aN.arg = ac);
              return !!aV;
            }
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
          for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
            {
              var aO = this.tryEntries[aN];
              if (aO.tryLoc <= this.prev && af.call(aO, "finallyLoc") && this.prev < aO.finallyLoc) {
                {
                  var aP = aO;
                  break;
                }
              }
            }
          }
          aP && ("break" === aL || "continue" === aL) && aP.tryLoc <= aM && aM <= aP.finallyLoc && (aP = null);
          var aQ = aP ? aP.completion : {};
          aQ.type = aL;
          aQ.arg = aM;
          return aP ? (this.method = "next", this.next = aP.finallyLoc, as) : this.complete(aQ);
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
          for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
            {
              var aO = this.tryEntries[aN];
              if (aO.finallyLoc === aL) {
                this.complete(aO.completion, aO.afterLoc);
                aF(aO);
                return as;
              }
            }
          }
        }
      },
      catch: function (aL) {
        {
          for (var aM = this.tryEntries.length - 1; aM >= 0; --aM) {
            {
              var aN = this.tryEntries[aM];
              if (aN.tryLoc === aL) {
                {
                  var aO = aN.completion;
                  if ("throw" === aO.type) {
                    {
                      var aP = aO.arg;
                      aF(aN);
                    }
                  }
                  return aP;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aL, aM, aN) {
        {
          this.delegate = {
            iterator: aH(aL),
            resultName: aM,
            nextLoc: aN
          };
          "next" === this.method && (this.arg = ac);
          return as;
        }
      }
    };
    return ad;
  }
  function h(ab, ac, ad, ae, af, ag, ah) {
    {
      try {
        {
          var aj = ab[ag](ah);
          var ak = aj.value;
        }
      } catch (an) {
        {
          return void ad(an);
        }
      }
      aj.done ? ac(ak) : Promise.resolve(ak).then(ae, af);
    }
  }
  function i(ab) {
    return function () {
      var ad = this;
      var ae = arguments;
      return new Promise(function (af, ag) {
        var ai = ab.apply(ad, ae);
        function aj(al) {
          h(ai, af, ag, aj, ak, "next", al);
        }
        function ak(al) {
          h(ai, af, ag, aj, ak, "throw", al);
        }
        aj(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.DaChao : $.getdata("DaChao")) || "";
  var k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live";
  var l = undefined;
  window = {};
  var m = "";
  var n = "";
  var o = "";
  var p = "";
  var q = "94";
  var r = "";
  var s = "10048";
  var t = "";
  var u = "";
  var v = "";
  var w = "";
  var x = "";
  var y = "";
  var z = "";
  var A = "";
  var B = "";
  var C = "";
  var D = "";
  function E() {
    return F.apply(this, arguments);
  }
  function F() {
    F = i(g().mark(function ac() {
      {
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
        var be;
        return g().wrap(function (bf) {
          {
            for (;;) {
              switch (bf.prev = bf.next) {
                case 0:
                  if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                    {
                      bf.next = 6;
                      break;
                    }
                  }
                  console.log("先去boxjs填写账号密码");
                  bf.next = 5;
                  return a9("先去boxjs填写账号密码");
                case 5:
                  return bf.abrupt("return");
                case 6:
                  bf.next = 8;
                  return a7();
                case 8:
                  l = bf.sent;
                  af = j.split(" ");
                  ag = c(af);
                  bf.prev = 11;
                  ag.s();
                case 13:
                  if ((ah = ag.n()).done) {
                    {
                      bf.next = 273;
                      break;
                    }
                  }
                  ai = ah.value;
                  console.log("随机生成UA");
                  aj = a6();
                  w = aj.ua;
                  x = aj.commonUa;
                  y = aj.uuid;
                  console.log(w);
                  console.log(x);
                  t = ai.split("&")[0];
                  u = ai.split("&")[1];
                  v = ai.split("&")[2];
                  console.log("用户：".concat(t, "开始任务"));
                  console.log("获取sessionId");
                  bf.next = 29;
                  return M("/api/account/init");
                case 29:
                  ak = bf.sent;
                  p = ak.data.session.id;
                  console.log(p);
                  console.log("获取signature_key");
                  bf.next = 35;
                  return G("/web/init?client_id=".concat(s));
                case 35:
                  al = bf.sent;
                  m = al.data.client.signature_key;
                  console.log(m);
                  console.log("获取code");
                  bf.next = 41;
                  return I("/web/oauth/credential_auth");
                case 41:
                  if (am = bf.sent, am.data) {
                    {
                      bf.next = 45;
                      break;
                    }
                  }
                  console.log(am.message);
                  return bf.abrupt("continue", 271);
                case 45:
                  an = am.data.authorization_code.code;
                  console.log(an);
                  console.log("登录");
                  bf.next = 50;
                  return M("/api/zbtxz/login", "check_token=&code=".concat(an, "&token=&type=-1&union_id="));
                case 50:
                  ao = bf.sent;
                  console.log("登录成功");
                  r = ao.data.session.account_id;
                  p = ao.data.session.id;
                  console.log("————————————");
                  console.log("有缘对对碰");
                  bf.next = 58;
                  return W("/open/xxdtest/dailyMatch/controller.php", "appid=".concat(p, "&openid=").concat(r, "&type=101"));
                case 58:
                  bf.next = 60;
                  return bf.sent;
                case 60:
                  ap = bf.sent;
                  console.log(ap);
                  aq = 0;
                case 63:
                  if (!(aq < 5)) {
                    {
                      bf.next = 73;
                      break;
                    }
                  }
                  bf.next = 66;
                  return W("/open/xxdtest/dailyMatch/controller.php", "type=105&score=100");
                case 66:
                  if (ar = bf.sent, console.log(ar), 1 == ar.status) {
                    {
                      bf.next = 70;
                      break;
                    }
                  }
                  return bf.abrupt("break", 73);
                case 70:
                  aq++;
                  bf.next = 63;
                  break;
                case 73:
                  if (A) {
                    {
                      bf.next = 81;
                      break;
                    }
                  }
                  console.log("获取对对碰抽奖id");
                  bf.next = 77;
                  return U("/open/xxdtest/dailyMatch/bookflip.php");
                case 77:
                  as = bf.sent;
                  at = /\/h5\?mark=raffle@designh5&tid=([a-zA-Z0-9]+)/;
                  au = as.match(at);
                  au && (A = au[1], console.log("对对碰抽奖id：".concat(A)));
                case 81:
                  bf.next = 83;
                  return K("/api/user_mumber/account_detail");
                case 83:
                  if (av = bf.sent, !A) {
                    {
                      bf.next = 105;
                      break;
                    }
                  }
                  aw = Math.round(new Date().getTime() / 1000).toString();
                  bf.next = 88;
                  return Q("/memberhy/tm/signature", {
                    accountId: r,
                    signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(aw, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                    mobile: "1",
                    sessionId: p,
                    login: "1",
                    user: {
                      realName: "",
                      image_url: av.data.rst.image_url,
                      nick_name: av.data.rst.nick_name,
                      is_face_verify: 0,
                      idcard: "",
                      id: r
                    },
                    timestamp: aw,
                    sign: "xsb_hn"
                  });
                case 88:
                  ax = bf.sent;
                  z = JSON.stringify({
                    id: ax.id,
                    black: 0,
                    btoken: ax.btoken,
                    expire: ax.expire,
                    token: ax.token,
                    source: "xsb_hn",
                    mobile: ax.mobile,
                    mark: ax.mark,
                    mtoken: ax.mtoken,
                    stoken: ax.stoken,
                    nick_name: encodeURI(ax.nick_name),
                    avatar: ax.avatar
                  });
                  bf.next = 92;
                  return O("/lotteryhy/designh5/client/activity/".concat(A));
                case 92:
                  ay = bf.sent;
                  console.log("拥有".concat(ay.response.remain_counts, "次抽奖"));
                  az = 0;
                case 95:
                  if (!(az < ay.response.remain_counts)) {
                    {
                      bf.next = 103;
                      break;
                    }
                  }
                  bf.next = 98;
                  return Q("/lotteryhy/api/client/cj/awd/drw/".concat(A), {});
                case 98:
                  aA = bf.sent;
                  aA.award_name ? (console.log("抽奖获得：".concat(aA.award_name)), n += "用户：".concat(t, " 抽奖获得：").concat(aA.award_name, "\n")) : (console.log(JSON.stringify(aA)), n += "用户：".concat(t, " 抽奖获得：").concat(aA.error_message, "\n"));
                case 100:
                  az++;
                  bf.next = 95;
                  break;
                case 103:
                  bf.next = 106;
                  break;
                case 105:
                  console.log("获取对对碰抽奖id失败");
                case 106:
                  if (console.log("————————————"), console.log("获取id"), D && C) {
                    {
                      bf.next = 118;
                      break;
                    }
                  }
                  bf.next = 111;
                  return K("/api/myPage/list");
                case 111:
                  aB = bf.sent;
                  aC = /\/h5\?mark=sign@designh5&tid=([a-zA-Z0-9]+)/;
                  aD = JSON.stringify(aB).match(aC);
                  aD && (D = aD[1]);
                  aC = /\/h5\?mark=news-read@designh5&tid=([a-zA-Z0-9]+)/;
                  aD = JSON.stringify(aB).match(aC);
                  aD && (C = aD[1]);
                case 118:
                  if (!D) {
                    {
                      bf.next = 164;
                      break;
                    }
                  }
                  console.log("签到id：".concat(D));
                  timestamp = Math.round(new Date().getTime() / 1000).toString();
                  bf.next = 123;
                  return Q("/memberhy/tm/signature", {
                    accountId: r,
                    signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(timestamp, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                    mobile: "1",
                    sessionId: p,
                    login: "1",
                    user: {
                      realName: "",
                      image_url: av.data.rst.image_url,
                      nick_name: av.data.rst.nick_name,
                      is_face_verify: 0,
                      idcard: "",
                      id: r
                    },
                    timestamp: timestamp,
                    sign: "xsb_hn"
                  });
                case 123:
                  signature = bf.sent;
                  z = JSON.stringify({
                    id: signature.id,
                    black: 0,
                    btoken: signature.btoken,
                    expire: signature.expire,
                    token: signature.token,
                    source: "xsb_hn",
                    mobile: signature.mobile,
                    mark: signature.mark,
                    mtoken: signature.mtoken,
                    stoken: signature.stoken,
                    nick_name: encodeURI(signature.nick_name),
                    avatar: signature.avatar
                  });
                  console.log("开始签到");
                  aE = new (l.loadJSEncrypt())();
                  aE.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
                  aF = aE.encrypt(JSON.stringify({
                    activity_id: D,
                    timestamp: Math.round(new Date().getTime() / 1000).toString()
                  }));
                  bf.next = 131;
                  return Q("/signhy/client/actSign/actSign", {
                    params: aF
                  });
                case 131:
                  aG = bf.sent;
                  0 == aG.error_code ? console.log("签到成功") : console.log(aG.error_message);
                  bf.next = 135;
                  return O("/signhy/client/actSign/getRelationCjList?activity_id=".concat(D));
                case 135:
                  aH = bf.sent;
                  aI = c(aH.response);
                  bf.prev = 137;
                  aI.s();
                case 139:
                  if ((aJ = aI.n()).done) {
                    {
                      bf.next = 154;
                      break;
                    }
                  }
                  aK = aJ.value;
                  console.log("活动：".concat(aK.title));
                  console.log("拥有".concat(aK.draw_num, "次抽奖"));
                  aL = 0;
                case 144:
                  if (!(aL < aK.draw_num)) {
                    {
                      bf.next = 152;
                      break;
                    }
                  }
                  bf.next = 147;
                  return Q("/lotteryhy/api/client/cj/awd/drw/".concat(aK.hashid), {});
                case 147:
                  aM = bf.sent;
                  aM.award_name ? (console.log("抽奖获得：".concat(aM.award_name)), n += "用户：".concat(t, " 抽奖获得：").concat(aM.award_name, "\n")) : (console.log(JSON.stringify(aM)), n += "用户：".concat(t, " 抽奖获得：").concat(aM.error_message, "\n"));
                case 149:
                  aL++;
                  bf.next = 144;
                  break;
                case 152:
                  bf.next = 139;
                  break;
                case 154:
                  bf.next = 159;
                  break;
                case 156:
                  bf.prev = 156;
                  bf.t0 = bf.catch(137);
                  aI.e(bf.t0);
                case 159:
                  bf.prev = 159;
                  aI.f();
                  return bf.finish(159);
                case 162:
                  bf.next = 165;
                  break;
                case 164:
                  console.log("获取签到id失败");
                case 165:
                  if (!C) {
                    {
                      bf.next = 239;
                      break;
                    }
                  }
                  console.log("————————————");
                  console.log("阅读抽奖");
                  console.log("阅读id：".concat(C));
                  console.log("滑块验证");
                  bf.next = 172;
                  return O("/newshy/api/client/news/getTnCode?t=".concat(Math.random()));
                case 172:
                  aN = bf.sent;
                  bf.next = 175;
                  return a0("".concat(k, "/crop"), {
                    image: aN.img,
                    y_coordinate: 150
                  });
                case 175:
                  if (aO = bf.sent, aO) {
                    {
                      bf.next = 181;
                      break;
                    }
                  }
                  console.log("ddddocr服务异常");
                  bf.next = 180;
                  return a9("ddddocr服务异常");
                case 180:
                  return bf.abrupt("continue", 271);
                case 181:
                  var bh = {
                    slidingImage: aO.slidingImage,
                    backImage: aO.backImage
                  };
                  bf.next = 183;
                  return a0("".concat(k, "/slideComparison"), bh);
                case 183:
                  if (aP = bf.sent, aP) {
                    {
                      bf.next = 189;
                      break;
                    }
                  }
                  console.log("ddddocr服务异常");
                  bf.next = 188;
                  return a9("ddddocr服务异常");
                case 188:
                  return bf.abrupt("continue", 271);
                case 189:
                  console.log(aP);
                  aQ = aN.request_id;
                  aR = aP.result;
                  bf.next = 194;
                  return O("/newshy/api/client/news/list/".concat(C));
                case 194:
                  aS = bf.sent;
                  aT = c(aS.data[0].information_content_data[0].data);
                  bf.prev = 196;
                  aT.s();
                case 198:
                  if ((aU = aT.n()).done) {
                    {
                      bf.next = 214;
                      break;
                    }
                  }
                  for (aV = aU.value, console.log("文章：".concat(aV.title)), aW = aV.link.split("?")[1], aX = {}, aY = aW.split("&"), aZ = 0, b0 = aY.length; aZ < b0; aZ++) {
                    b1 = aY[aZ].split("=");
                    aX[b1[0]] = b1[1];
                  }
                  b2 = new (l.loadJSEncrypt())();
                  b2.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
                  b3 = b2.encrypt(JSON.stringify({
                    news_id: C,
                    item_id: aV.item_id,
                    request_id: aQ,
                    timestamp: Math.round(new Date().getTime() / 1000).toString(),
                    tn_x: aR
                  }));
                  bf.next = 210;
                  return Q("/newshy/api/client/news/readArticle", {
                    params: b3
                  });
                case 210:
                  b4 = bf.sent;
                  console.log("阅读：".concat(null == b4 ? undefined : b4.success));
                case 212:
                  bf.next = 198;
                  break;
                case 214:
                  bf.next = 219;
                  break;
                case 216:
                  bf.prev = 216;
                  bf.t1 = bf.catch(196);
                  aT.e(bf.t1);
                case 219:
                  bf.prev = 219;
                  aT.f();
                  return bf.finish(219);
                case 222:
                  B = aS.data[0].draw.activity_id;
                  console.log("抽奖id：".concat(B));
                  bf.next = 226;
                  return O("/lotteryhy/designh5/client/activity/".concat(B));
                case 226:
                  b5 = bf.sent;
                  console.log("拥有".concat(b5.response.remain_counts, "次抽奖"));
                  b6 = 0;
                case 229:
                  if (!(b6 < b5.response.remain_counts)) {
                    {
                      bf.next = 237;
                      break;
                    }
                  }
                  bf.next = 232;
                  return Q("/lotteryhy/api/client/cj/awd/drw/".concat(B), {});
                case 232:
                  b7 = bf.sent;
                  b7.award_name ? (console.log("抽奖获得：".concat(b7.award_name)), n += "用户：".concat(t, " 抽奖获得：").concat(b7.award_name, "\n")) : (console.log(JSON.stringify(b7)), n += "用户：".concat(t, " 抽奖获得：").concat(b7.error_message, "\n"));
                case 234:
                  b6++;
                  bf.next = 229;
                  break;
                case 237:
                  bf.next = 240;
                  break;
                case 239:
                  console.log("获取id失败");
                case 240:
                  bf.next = 242;
                  return Y("/lotteryhy/api/client/cj/member/prize/info?prize_type=3&page=1&count=20");
                case 242:
                  b8 = bf.sent;
                  b9 = c(b8.data);
                  bf.prev = 244;
                  b9.s();
                case 246:
                  if ((ba = b9.n()).done) {
                    {
                      bf.next = 263;
                      break;
                    }
                  }
                  if (bb = ba.value, 2 == bb.status) {
                    {
                      bf.next = 261;
                      break;
                    }
                  }
                  if (bc = JSON.parse(bb.prize_info).code, console.log("奖品：".concat(bb.prize_content, " code：").concat(bc)), !v) {
                    {
                      bf.next = 260;
                      break;
                    }
                  }
                  var bi = {
                    code: bc
                  };
                  bd = "";
                  bf.next = 255;
                  return S("/lotteryhy/api/client/cj/send/pak", bi);
                case 255:
                  be = bf.sent;
                  be.success ? (console.log("领取成功"), bd = "领取成功") : (console.log(be.error_message), bd = be.error_message);
                  o += "用户：".concat(t, " 奖品：").concat(bb.prize_content, " 领取结果：").concat(bd, "\n");
                  bf.next = 261;
                  break;
                case 260:
                  o += "用户：".concat(t, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(bc, "\n");
                case 261:
                  bf.next = 246;
                  break;
                case 263:
                  bf.next = 268;
                  break;
                case 265:
                  bf.prev = 265;
                  bf.t2 = bf.catch(244);
                  b9.e(bf.t2);
                case 268:
                  bf.prev = 268;
                  b9.f();
                  return bf.finish(268);
                case 271:
                  bf.next = 13;
                  break;
                case 273:
                  bf.next = 278;
                  break;
                case 275:
                  bf.prev = 275;
                  bf.t3 = bf.catch(11);
                  ag.e(bf.t3);
                case 278:
                  bf.prev = 278;
                  ag.f();
                  return bf.finish(278);
                case 281:
                  if (!n) {
                    {
                      bf.next = 284;
                      break;
                    }
                  }
                  bf.next = 284;
                  return a9(n);
                case 284:
                  if (!o) {
                    {
                      bf.next = 287;
                      break;
                    }
                  }
                  bf.next = 287;
                  return a9(o);
                case 287:
                case "end":
                  return bf.stop();
              }
            }
          }
        }, ac, null, [[11, 275, 278, 281], [137, 156, 159, 162], [196, 216, 219, 222], [244, 265, 268, 271]]);
      }
    }));
    return F.apply(this, arguments);
  }
  function G(ab) {
    {
      return H.apply(this, arguments);
    }
  }
  function H() {
    H = i(g().mark(function ac(ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var ak = {
                  url: "https://passport.tmuyun.com".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a4(),
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  }
                };
                $.get(ak, function () {
                  {
                    var am = i(g().mark(function an(ao, ap, aq) {
                      {
                        return g().wrap(function (as) {
                          {
                            for (;;) {
                              switch (as.prev = as.next) {
                                case 0:
                                  try {
                                    {
                                      ao ? (console.log("".concat(JSON.stringify(ao))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ah(JSON.parse(aq));
                                    }
                                  } catch (av) {
                                    $.logErr(av, ap);
                                  } finally {
                                    ah();
                                  }
                                case 1:
                                case "end":
                                  return as.stop();
                              }
                            }
                          }
                        }, an);
                      }
                    }));
                    return function (ao, ap, aq) {
                      return am.apply(this, arguments);
                    };
                  }
                }());
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return H.apply(this, arguments);
  }
  function I(ab) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function ab(ac) {
      var ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              ae = a2();
              return af.abrupt("return", new Promise(function (ag) {
                var ai = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": ae.uuid,
                  "X-SIGNATURE": ae.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": w
                };
                var aj = {
                  url: "https://passport.tmuyun.com".concat(ac),
                  headers: ai,
                  body: ae.body
                };
                $.post(aj, function () {
                  var al = i(g().mark(function am(an, ao, ap) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            try {
                              an ? (console.log("".concat(JSON.stringify(an))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ag(JSON.parse(ap));
                            } catch (ar) {
                              $.logErr(ar, ao);
                            } finally {
                              ag();
                            }
                          case 1:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, am);
                  }));
                  return function (an, ao, ap) {
                    return al.apply(this, arguments);
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
    return J.apply(this, arguments);
  }
  function K(ab) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function ab(ac) {
      var ae;
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              ae = a3(ac);
              return af.abrupt("return", new Promise(function (ah) {
                var ai = {
                  url: "https://vapp.tmuyun.com".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ae.time,
                    "X-SESSION-ID": p,
                    "X-REQUEST-ID": ae.uuid,
                    "X-SIGNATURE": ae.signature,
                    "X-TENANT-ID": q,
                    "X-ACCOUNT-ID": r,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": x
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
                            ah(JSON.parse(ao));
                          case 9:
                            ap.next = 14;
                            break;
                          case 11:
                            ap.prev = 11;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, an);
                          case 14:
                            ap.prev = 14;
                            ah();
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
            case 2:
            case "end":
              return af.stop();
          }
        }
      }, ab);
    }));
    return L.apply(this, arguments);
  }
  function M(ab, ac) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function ab(ac, ad) {
      var af;
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              af = a3(ac);
              return ag.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://vapp.tmuyun.com".concat(ac),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": af.time,
                    "X-SESSION-ID": p,
                    "X-REQUEST-ID": af.uuid,
                    "X-SIGNATURE": af.signature,
                    "X-TENANT-ID": q,
                    "X-ACCOUNT-ID": r,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": x
                  },
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
                            ai(JSON.parse(ap));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ao);
                          case 14:
                            ar.prev = 14;
                            ai();
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
    return N.apply(this, arguments);
  }
  function O(ab) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function ac(ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var ai = {
                  url: "https://m.aihoge.com/api".concat(ad),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: z,
                    Limit: C,
                    sessionId: p,
                    "X-DEVICE-ID": "000",
                    accountId: r,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(C, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
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
                            ah(JSON.parse(ao));
                          case 9:
                            ap.next = 14;
                            break;
                          case 11:
                            ap.prev = 11;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, an);
                          case 14:
                            ap.prev = 14;
                            ah();
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
    return P.apply(this, arguments);
  }
  function Q(ab, ac) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function ab(ac, ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://m.aihoge.com/api".concat(ac),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: z,
                    Limit: C,
                    sessionId: p,
                    "X-DEVICE-ID": "000",
                    accountId: r,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(C, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ad)
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
              return af.stop();
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
              return ag.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://m.aihoge.com/api".concat(ad),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "wechat",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: v,
                    Limit: "default",
                    "X-DEVICE-ID": "000",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ae)
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
                            ai(JSON.parse(ap));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ao);
                          case 14:
                            ar.prev = 14;
                            ai();
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
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://active.hndachao.cn".concat(ad),
                  headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "x-requested-with": "XMLHttpRequest",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    origin: "https://active.hndachao.cn",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://active.hndachao.cn/open/xxdtest/dailyMatch/bookflip.php",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: "dachaogo={\"openid\":\"".concat(r, "\",\"platform\":3}")
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
                            ah(ao);
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
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return V.apply(this, arguments);
  }
  function W(ab, ac) {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function ab(ac, ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://active.hndachao.cn".concat(ac),
                  headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "x-requested-with": "XMLHttpRequest",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    origin: "https://active.hndachao.cn",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://active.hndachao.cn/open/xxdtest/dailyMatch/bookflip.php",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: "dachaogo={\"openid\":\"".concat(r, "\",\"platform\":3}")
                  },
                  body: ad
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
              return af.stop();
          }
        }
      }, ab);
    }));
    return X.apply(this, arguments);
  }
  function Y(ab) {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = i(g().mark(function ac(ad) {
      return g().wrap(function (ae) {
        for (;;) {
          switch (ae.prev = ae.next) {
            case 0:
              return ae.abrupt("return", new Promise(function (ag) {
                var ah = {
                  url: "https://axh5.aihoge.com/api".concat(ad),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: z,
                    Limit: "default",
                    sessionId: p,
                    "X-DEVICE-ID": "000",
                    accountId: r,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://axh5.aihoge.com/winningList?refresh_times=1641284795642",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
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
            case 1:
            case "end":
              return ae.stop();
          }
        }
      }, ac);
    }));
    return Z.apply(this, arguments);
  }
  function a0(ab, ac) {
    return a1.apply(this, arguments);
  }
  function a1() {
    a1 = i(g().mark(function ac(ad, ae) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var ai = {
                  "Content-Type": "application/json"
                };
                var aj = {
                  url: ad,
                  headers: ai,
                  body: JSON.stringify(ae)
                };
                $.post(aj, function (ak, al, am) {
                  try {
                    ak ? (console.log("".concat(JSON.stringify(ak))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ah(JSON.parse(am));
                  } catch (an) {
                    $.logErr(an, al);
                  } finally {
                    ah();
                  }
                });
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return a1.apply(this, arguments);
  }
  function a2() {
    var aj = new (l.loadJSEncrypt())();
    aj.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    u = aj.encrypt(u);
    var ae = a4();
    var af = "client_id=".concat(s, "&password=").concat(u, "&phone_number=").concat(t);
    var ag = "post%%/web/oauth/credential_auth?".concat(af, "%%").concat(ae, "%%");
    af = "client_id=".concat(s, "&password=").concat(encodeURIComponent(u), "&phone_number=").concat(t);
    CryptoJS = l.createCryptoJS();
    var ah = CryptoJS.HmacSHA256(ag, m);
    var ai = CryptoJS.enc.Hex.stringify(ah);
    var ad = {
      uuid: ae,
      signature: ai,
      body: af
    };
    return ad;
  }
  function a3(ab) {
    var ac = a4();
    var ad = Date.now();
    ab.indexOf("?") > 0 && (ab = ab.substring(0, ab.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ae = CryptoJS.SHA256("".concat(ab, "&&").concat(p, "&&").concat(ac, "&&").concat(ad, "&&FR*r!isE5W&&").concat(q)).toString();
    var af = {
      uuid: ac,
      time: ad,
      signature: ae
    };
    return af;
  }
  function a4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ac) {
      var ad = 16 * Math.random() | 0;
      var ae = "x" === ac ? ad : 3 & ad | 8;
      return ae.toString(16);
    });
  }
  function a5(ab) {
    return ab[Math.floor(Math.random() * ab.length)];
  }
  function a6() {
    var ab = "14.1.6";
    var ac = a4();
    var ad = a5(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var ae = "Xiaomi " + ad;
    var af = "Android";
    var ag = "".concat(af.toUpperCase(), ";").concat("11", ";").concat(s, ";").concat(ab, ";1.0;null;").concat(ad);
    var ah = "".concat(ab, ";").concat(ac, ";").concat(ae, ";").concat(af, ";").concat("11", ";").concat("6.11.0");
    var ai = {
      ua: ag,
      commonUa: ah,
      uuid: ac
    };
    return ai;
  }
  function a7() {
    return a8.apply(this, arguments);
  }
  function a8() {
    a8 = i(g().mark(function ab() {
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
                var ah = i(g().mark(function ai(aj) {
                  return g().wrap(function ak(al) {
                    for (;;) {
                      switch (al.prev = al.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (an) {
                            $.setdata(an, "Utils_Code");
                            eval(an);
                            console.log("✅ Utils加载成功, 请继续");
                            aj(creatUtils());
                          });
                        case 1:
                        case "end":
                          return al.stop();
                      }
                    }
                  }, ai);
                }));
                return function (aj) {
                  return ah.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return af.stop();
          }
        }
      }, ab);
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
    return g().wrap(function (ae) {
      for (;;) {
        switch (ae.prev = ae.next) {
          case 0:
            ae.next = 2;
            return E();
          case 2:
          case "end":
            return ae.stop();
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