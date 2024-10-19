//Sat Oct 19 2024 01:04:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("大潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a3) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a4) {
        return typeof a4;
      } : function (a4) {
        {
          return a4 && "function" == typeof Symbol && a4.constructor === Symbol && a4 !== Symbol.prototype ? "symbol" : typeof a4;
        }
      };
      return b(a3);
    }
  }
  function c(a3, a4) {
    {
      var a6 = "undefined" != typeof Symbol && a3[Symbol.iterator] || a3["@@iterator"];
      if (!a6) {
        {
          if (Array.isArray(a3) || (a6 = d(a3)) || a4 && a3 && "number" == typeof a3.length) {
            {
              a6 && (a3 = a6);
              var a7 = 0;
              var a8 = function () {};
              return {
                s: a8,
                n: function () {
                  {
                    var ae = {
                      done: true
                    };
                    return a7 >= a3.length ? ae : {
                      done: false,
                      value: a3[a7++]
                    };
                  }
                },
                e: function (ae) {
                  {
                    throw ae;
                  }
                },
                f: a8
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var a9;
      var aa = true;
      var ab = false;
      return {
        s: function () {
          {
            a6 = a6.call(a3);
          }
        },
        n: function () {
          {
            var af = a6.next();
            aa = af.done;
            return af;
          }
        },
        e: function (af) {
          {
            ab = true;
            a9 = af;
          }
        },
        f: function () {
          {
            try {
              {
                aa || null == a6.return || a6.return();
              }
            } finally {
              {
                if (ab) {
                  throw a9;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(a3, a4) {
    {
      if (a3) {
        {
          if ("string" == typeof a3) {
            return f(a3, a4);
          }
          var a7 = {}.toString.call(a3).slice(8, -1);
          "Object" === a7 && a3.constructor && (a7 = a3.constructor.name);
          return "Map" === a7 || "Set" === a7 ? Array.from(a3) : "Arguments" === a7 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a7) ? f(a3, a4) : undefined;
        }
      }
    }
  }
  function f(a3, a4) {
    {
      (null == a4 || a4 > a3.length) && (a4 = a3.length);
      for (var a6 = 0, a7 = Array(a4); a6 < a4; a6++) {
        a7[a6] = a3[a6];
      }
      return a7;
    }
  }
  function g() {
    "use strict";

    var a3 = {
      tOrLA: function (aA) {
        return aA();
      },
      SkXEE: "end",
      EYkYt: function (aA, aB) {
        return aA !== aB;
      },
      HpPSv: "QDbsT",
      CNBjY: "throw",
      IgqKE: function (aA, aB) {
        return aA === aB;
      },
      wEoaY: function (aA, aB, aC, aD, aE) {
        return aA(aB, aC, aD, aE);
      },
      QTONV: " API请求失败，请检查网路重试",
      gWxXy: function (aA, aB) {
        return aA(aB);
      },
      aVtcC: "[object Generator]",
      CtwfZ: "iYVcf",
      HCzoB: "kyYFE",
      MtaZl: "KbTHr",
      WVJfc: "qVxkJ",
      glfaQ: function (aA, aB, aC, aD) {
        return aA(aB, aC, aD);
      },
      QVCgt: "GeneratorFunction",
      SlOwv: "DNeyz",
      LzSqx: "gUOVQ",
      HpURD: "PimHH",
      kdjSL: function (aA, aB) {
        return aA == aB;
      },
      idOWp: "HtdAH",
      oNIdr: "lpbKR",
      cZIZu: "OknKZ",
      eONXl: "ZGSSi",
      pxJyA: "return",
      xxlHm: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      HKuYj: function (aA, aB) {
        return aA + aB;
      },
      YFvUO: "The iterator does not provide a '",
      qIqrT: "' method",
      avyPq: function (aA, aB) {
        return aA !== aB;
      },
      diKkx: "next",
      gpUEs: "iterator result is not an object",
      teEvN: "DbQFB",
      GOBvS: function (aA, aB) {
        return aA(aB);
      },
      KfkNp: function (aA, aB) {
        return aA === aB;
      },
      otkAy: "jddQG",
      lsnlF: "IxQZd",
      yEAtZ: "tvnGy",
      ATIbv: "object",
      efgTv: function (aA, aB) {
        return aA(aB);
      },
      LfBIC: "__await",
      MuqFQ: function (aA, aB) {
        return aA !== aB;
      },
      VKcSK: "smcNp",
      WYUay: "catchLoc",
      AXhcI: "finallyLoc",
      vFdqy: function (aA, aB) {
        return aA && aB;
      },
      jtTGd: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      MVCml: function (aA, aB) {
        return aA < aB;
      },
      yiVDD: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      rMfMM: function (aA, aB) {
        return aA(aB);
      },
      eXqnm: "try statement without catch or finally",
      whryU: "upoTY",
      DxdvR: "wfgjF",
      viGhV: "UuiKr",
      JEDJX: "CutmW",
      uKmwF: "NcKqk",
      sMUEU: function (aA, aB) {
        return aA !== aB;
      },
      qJxAX: function (aA, aB) {
        return aA === aB;
      },
      WuLMb: function (aA, aB) {
        return aA !== aB;
      },
      ClrDE: "JLUjB",
      jpcCY: function (aA, aB, aC, aD) {
        return aA(aB, aC, aD);
      },
      YTglc: "ZYgFc",
      LJqex: function (aA, aB, aC, aD, aE, aF, aG, aH) {
        return aA(aB, aC, aD, aE, aF, aG, aH);
      },
      GxvYU: function (aA, aB) {
        return aA == aB;
      },
      LkJfl: function (aA, aB) {
        return aA === aB;
      },
      MuPmn: "ZCXFw",
      FHDnQ: "root",
      GbBjY: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
      NzFAw: function (aA, aB) {
        return aA !== aB;
      },
      eKqlI: "enoNT",
      AaPfU: function (aA, aB, aC, aD, aE) {
        return aA(aB, aC, aD, aE);
      },
      chOeV: "DsOee",
      Fxkbk: function (aA, aB) {
        return aA < aB;
      },
      ItYUZ: "function",
      unSof: function (aA, aB) {
        return aA(aB);
      },
      tSCum: " is not iterable",
      wqpkt: function (aA, aB) {
        return aA in aB;
      },
      dFgGL: function (aA, aB) {
        return aA === aB;
      },
      ZLwSp: "Yovds",
      HgGxU: "HfxQs",
      uFhNR: "pBZlo",
      Wxltq: function (aA, aB) {
        return aA !== aB;
      },
      cDvXD: "KwGyU",
      ZoQfH: function (aA, aB) {
        return aA === aB;
      },
      WjOov: function (aA, aB) {
        return aA(aB);
      },
      RpQVM: "KlkhF",
      jwmDU: function (aA, aB) {
        return aA !== aB;
      },
      bEuXl: "jeYnE",
      MVtCU: function (aA, aB) {
        return aA in aB;
      },
      JAGTV: "normal",
      ItIDw: "jPwMY",
      sIplG: function (aA, aB) {
        return aA === aB;
      },
      vdvRp: "cdHNe",
      gCZin: function (aA, aB) {
        return aA <= aB;
      },
      vdXoJ: function (aA, aB) {
        return aA === aB;
      },
      uSOGX: "cVGme",
      hgeoI: function (aA, aB) {
        return aA && aB;
      },
      znLmF: "fmWBr",
      XimnW: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      sEwBm: function (aA, aB) {
        return aA(aB);
      },
      NzqIa: function (aA, aB) {
        return aA === aB;
      },
      ZPrCj: "rikCU",
      aCwyO: "lFQui",
      EDpOg: "AEKgt",
      vkLoz: function (aA, aB) {
        return aA(aB);
      },
      gYfsX: "✅ Utils加载成功, 请继续",
      njXqF: function (aA) {
        return aA();
      },
      NRPeo: function (aA, aB) {
        return aA !== aB;
      },
      OuIBP: "twPCJ",
      rEFlr: function (aA, aB) {
        return aA - aB;
      },
      xKtGR: "fHQRB",
      PCMSx: function (aA, aB) {
        return aA !== aB;
      },
      RVcWn: "zajqQ",
      JNKYx: function (aA, aB) {
        return aA === aB;
      },
      QOfiU: "iXfuE",
      tZxZo: function (aA, aB) {
        return aA(aB);
      },
      WvYWs: "illegal catch attempt",
      VEgrr: function (aA, aB) {
        return aA === aB;
      },
      djMOz: "HvGrS",
      BitNh: function (aA, aB) {
        return aA(aB);
      }
    };
    g = function () {
      {
        return a5;
      }
    };
    var a4;
    var a5 = {
      wrap: ae
    };
    var a6 = Object.prototype;
    var a7 = a6.hasOwnProperty;
    var a8 = Object.defineProperty || function (aA, aB, aC) {
      aA[aB] = aC.value;
    };
    var a9 = "function" == typeof Symbol ? Symbol : {};
    var aa = a9.iterator || "@@iterator";
    var ab = a9.asyncIterator || "@@asyncIterator";
    var ac = a9.toStringTag || "@@toStringTag";
    function ad(aA, aB, aC) {
      {
        var aD = {
          value: aC,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aA, aB, aD);
        return aA[aB];
      }
    }
    try {
      {
        ad({}, "");
      }
    } catch (aB) {
      {
        ad = function (aD, aE, aF) {
          return aD[aE] = aF;
        };
      }
    }
    function ae(aD, aE, aF, aG) {
      {
        var aH = aE && aE.prototype instanceof al ? aE : al;
        var aI = Object.create(aH.prototype);
        var aJ = new ay(aG || []);
        a8(aI, "_invoke", {
          value: au(aD, aF, aJ)
        });
        return aI;
      }
    }
    function af(aD, aE, aF) {
      {
        try {
          return {
            type: "normal",
            arg: aD.call(aE, aF)
          };
        } catch (aK) {
          {
            var aH = {
              type: "throw",
              arg: aK
            };
            return aH;
          }
        }
      }
    }
    var ag = "suspendedStart";
    var ah = "suspendedYield";
    var ai = "executing";
    var aj = "completed";
    var ak = {};
    function al() {}
    function am() {}
    function an() {}
    var ao = {};
    ad(ao, aa, function () {
      {
        return this;
      }
    });
    var ap = Object.getPrototypeOf;
    var aq = ap && ap(ap(az([])));
    aq && aq !== a6 && a7.call(aq, aa) && (ao = aq);
    an.prototype = al.prototype = Object.create(ao);
    var ar = an.prototype;
    function as(aD) {
      {
        ["next", "throw", "return"].forEach(function (aG) {
          {
            ad(aD, aG, function (aI) {
              {
                return this._invoke(aG, aI);
              }
            });
          }
        });
      }
    }
    function at(aD, aE) {
      {
        function aH(aI, aJ, aK, aL) {
          {
            var aN = af(aD[aI], aD, aJ);
            if ("throw" !== aN.type) {
              {
                var aO = aN.arg;
                var aP = aO.value;
                return aP && "object" == b(aP) && a7.call(aP, "__await") ? aE.resolve(aP.__await).then(function (aQ) {
                  aH("next", aQ, aK, aL);
                }, function (aQ) {
                  {
                    aH("throw", aQ, aK, aL);
                  }
                }) : aE.resolve(aP).then(function (aQ) {
                  aO.value = aQ;
                  aK(aO);
                }, function (aQ) {
                  {
                    return aH("throw", aQ, aK, aL);
                  }
                });
              }
            }
            aL(aN.arg);
          }
        }
        var aG;
        a8(this, "_invoke", {
          value: function (aI, aJ) {
            {
              function aM() {
                {
                  return new aE(function (aO, aP) {
                    {
                      aH(aI, aJ, aO, aP);
                    }
                  });
                }
              }
              return aG = aG ? aG.then(aM, aM) : aM();
            }
          }
        });
      }
    }
    function au(aD, aE, aF) {
      {
        var aH = ag;
        return function (aJ, aK) {
          {
            if (aH === ai) {
              throw Error("Generator is already running");
            }
            if (aH === aj) {
              {
                if ("throw" === aJ) {
                  throw aK;
                }
                var aM = {
                  value: a4,
                  done: true
                };
                return aM;
              }
            }
            for (aF.method = aJ, aF.arg = aK;;) {
              {
                var aN = aF.delegate;
                if (aN) {
                  {
                    var aO = av(aN, aF);
                    if (aO) {
                      {
                        if (aO === ak) {
                          continue;
                        }
                        return aO;
                      }
                    }
                  }
                }
                if ("next" === aF.method) {
                  aF.sent = aF._sent = aF.arg;
                } else {
                  if ("throw" === aF.method) {
                    {
                      if (aH === ag) {
                        throw aH = aj, aF.arg;
                      }
                      aF.dispatchException(aF.arg);
                    }
                  } else {
                    "return" === aF.method && aF.abrupt("return", aF.arg);
                  }
                }
                aH = ai;
                var aP = af(aD, aE, aF);
                if ("normal" === aP.type) {
                  {
                    if (aH = aF.done ? aj : ah, aP.arg === ak) {
                      continue;
                    }
                    var aQ = {
                      value: aP.arg,
                      done: aF.done
                    };
                    return aQ;
                  }
                }
                "throw" === aP.type && (aH = aj, aF.method = "throw", aF.arg = aP.arg);
              }
            }
          }
        };
      }
    }
    function av(aD, aE) {
      {
        var aF = aE.method;
        var aG = aD.iterator[aF];
        if (aG === a4) {
          aE.delegate = null;
          "throw" === aF && aD.iterator.return && (aE.method = "return", aE.arg = a4, av(aD, aE), "throw" === aE.method) || "return" !== aF && (aE.method = "throw", aE.arg = new TypeError("The iterator does not provide a '" + aF + "' method"));
          return ak;
        }
        var aH = af(aG, aD.iterator, aE.arg);
        if ("throw" === aH.type) {
          aE.method = "throw";
          aE.arg = aH.arg;
          aE.delegate = null;
          return ak;
        }
        var aI = aH.arg;
        return aI ? aI.done ? (aE[aD.resultName] = aI.value, aE.next = aD.nextLoc, "return" !== aE.method && (aE.method = "next", aE.arg = a4), aE.delegate = null, ak) : aI : (aE.method = "throw", aE.arg = new TypeError("iterator result is not an object"), aE.delegate = null, ak);
      }
    }
    function aw(aD) {
      {
        var aF = {
          tryLoc: aD[0]
        };
        1 in aD && (aF.catchLoc = aD[1]);
        2 in aD && (aF.finallyLoc = aD[2], aF.afterLoc = aD[3]);
        this.tryEntries.push(aF);
      }
    }
    function ax(aD) {
      {
        var aF = aD.completion || {};
        aF.type = "normal";
        delete aF.arg;
        aD.completion = aF;
      }
    }
    function ay(aD) {
      {
        var aE = {
          tryLoc: "root"
        };
        this.tryEntries = [aE];
        aD.forEach(aw, this);
        this.reset(true);
      }
    }
    function az(aD) {
      {
        if (aD || "" === aD) {
          {
            var aF = aD[aa];
            if (aF) {
              return aF.call(aD);
            }
            if ("function" == typeof aD.next) {
              return aD;
            }
            if (!isNaN(aD.length)) {
              {
                var aG = -1;
                var aH = function aJ() {
                  {
                    for (; ++aG < aD.length;) {
                      if (a7.call(aD, aG)) {
                        aJ.value = aD[aG];
                        aJ.done = false;
                        return aJ;
                      }
                    }
                    aJ.value = a4;
                    aJ.done = true;
                    return aJ;
                  }
                };
                return aH.next = aH;
              }
            }
          }
        }
        throw new TypeError(b(aD) + " is not iterable");
      }
    }
    am.prototype = an;
    a8(ar, "constructor", {
      value: an,
      configurable: true
    });
    a8(an, "constructor", {
      value: am,
      configurable: true
    });
    am.displayName = ad(an, ac, "GeneratorFunction");
    a5.isGeneratorFunction = function (aD) {
      {
        var aF = "function" == typeof aD && aD.constructor;
        return !!aF && (aF === am || "GeneratorFunction" === (aF.displayName || aF.name));
      }
    };
    a5.mark = function (aD) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aD, an) : (aD.__proto__ = an, ad(aD, ac, "GeneratorFunction"));
        aD.prototype = Object.create(ar);
        return aD;
      }
    };
    a5.awrap = function (aD) {
      {
        var aE = {
          __await: aD
        };
        return aE;
      }
    };
    as(at.prototype);
    ad(at.prototype, ab, function () {
      {
        return this;
      }
    });
    a5.AsyncIterator = at;
    a5.async = function (aD, aE, aF, aG, aH) {
      {
        undefined === aH && (aH = Promise);
        var aJ = new at(ae(aD, aE, aF, aG), aH);
        return a5.isGeneratorFunction(aE) ? aJ : aJ.next().then(function (aL) {
          {
            return aL.done ? aL.value : aJ.next();
          }
        });
      }
    };
    as(ar);
    ad(ar, ac, "Generator");
    ad(ar, aa, function () {
      {
        return this;
      }
    });
    ad(ar, "toString", function () {
      return "[object Generator]";
    });
    a5.keys = function (aD) {
      {
        var aF = Object(aD);
        var aG = [];
        for (var aH in aF) aG.push(aH);
        aG.reverse();
        return function aJ() {
          {
            for (; aG.length;) {
              {
                var aL = aG.pop();
                if (aL in aF) {
                  aJ.value = aL;
                  aJ.done = false;
                  return aJ;
                }
              }
            }
            aJ.done = true;
            return aJ;
          }
        };
      }
    };
    a5.values = az;
    ay.prototype = {
      constructor: ay,
      reset: function (aD) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = a4, this.done = false, this.delegate = null, this.method = "next", this.arg = a4, this.tryEntries.forEach(ax), !aD) {
            for (var aF in this) "t" === aF.charAt(0) && a7.call(this, aF) && !isNaN(+aF.slice(1)) && (this[aF] = a4);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aE = this.tryEntries[0].completion;
          if ("throw" === aE.type) {
            throw aE.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aD) {
        {
          if (this.done) {
            throw aD;
          }
          var aF = this;
          function aL(aM, aN) {
            {
              aI.type = "throw";
              aI.arg = aD;
              aF.next = aM;
              aN && (aF.method = "next", aF.arg = a4);
              return !!aN;
            }
          }
          for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
            {
              var aH = this.tryEntries[aG];
              var aI = aH.completion;
              if ("root" === aH.tryLoc) {
                return aL("end");
              }
              if (aH.tryLoc <= this.prev) {
                {
                  var aJ = a7.call(aH, "catchLoc");
                  var aK = a7.call(aH, "finallyLoc");
                  if (aJ && aK) {
                    {
                      if (this.prev < aH.catchLoc) {
                        return aL(aH.catchLoc, true);
                      }
                      if (this.prev < aH.finallyLoc) {
                        return aL(aH.finallyLoc);
                      }
                    }
                  } else {
                    if (aJ) {
                      {
                        if (this.prev < aH.catchLoc) {
                          return aL(aH.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aK) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aH.finallyLoc) {
                          return aL(aH.finallyLoc);
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
      abrupt: function (aD, aE) {
        {
          for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
            {
              var aH = this.tryEntries[aG];
              if (aH.tryLoc <= this.prev && a7.call(aH, "finallyLoc") && this.prev < aH.finallyLoc) {
                {
                  var aI = aH;
                  break;
                }
              }
            }
          }
          aI && ("break" === aD || "continue" === aD) && aI.tryLoc <= aE && aE <= aI.finallyLoc && (aI = null);
          var aJ = aI ? aI.completion : {};
          aJ.type = aD;
          aJ.arg = aE;
          return aI ? (this.method = "next", this.next = aI.finallyLoc, ak) : this.complete(aJ);
        }
      },
      complete: function (aD, aE) {
        {
          if ("throw" === aD.type) {
            throw aD.arg;
          }
          "break" === aD.type || "continue" === aD.type ? this.next = aD.arg : "return" === aD.type ? (this.rval = this.arg = aD.arg, this.method = "return", this.next = "end") : "normal" === aD.type && aE && (this.next = aE);
          return ak;
        }
      },
      finish: function (aD) {
        {
          for (var aE = this.tryEntries.length - 1; aE >= 0; --aE) {
            {
              var aF = this.tryEntries[aE];
              if (aF.finallyLoc === aD) {
                this.complete(aF.completion, aF.afterLoc);
                ax(aF);
                return ak;
              }
            }
          }
        }
      },
      catch: function (aD) {
        {
          for (var aF = this.tryEntries.length - 1; aF >= 0; --aF) {
            {
              var aG = this.tryEntries[aF];
              if (aG.tryLoc === aD) {
                {
                  var aH = aG.completion;
                  if ("throw" === aH.type) {
                    {
                      var aI = aH.arg;
                      ax(aG);
                    }
                  }
                  return aI;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aD, aE, aF) {
        {
          this.delegate = {
            iterator: az(aD),
            resultName: aE,
            nextLoc: aF
          };
          "next" === this.method && (this.arg = a4);
          return ak;
        }
      }
    };
    return a5;
  }
  function h(a3, a4, a5, a6, a7, a8, a9) {
    {
      try {
        {
          var ab = a3[a8](a9);
          var ac = ab.value;
        }
      } catch (af) {
        {
          return void a5(af);
        }
      }
      ab.done ? a4(ac) : Promise.resolve(ac).then(a6, a7);
    }
  }
  function i(a3) {
    return function () {
      var a5 = this;
      var a6 = arguments;
      return new Promise(function (a7, a8) {
        var aa = a3.apply(a5, a6);
        function ab(ad) {
          h(aa, a7, a8, ab, ac, "next", ad);
        }
        function ac(ad) {
          {
            h(aa, a7, a8, ab, ac, "throw", ad);
          }
        }
        ab(undefined);
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
  function C() {
    {
      return D.apply(this, arguments);
    }
  }
  function D() {
    var a3 = {
      IVqVK: function (a4, a5) {
        return a4 | a5;
      },
      zWsVf: function (a4, a5) {
        return a4 === a5;
      },
      VuZNB: function (a4, a5) {
        return a4 & a5;
      },
      XRkmm: function (a4, a5) {
        return a4 === a5;
      },
      xuQpp: "break",
      FtQpP: "return",
      CwDLt: "end",
      oJRgp: " API请求失败，请检查网路重试",
      mELbB: function (a4) {
        return a4();
      },
      pqrna: function (a4, a5) {
        return a4 == a5;
      },
      mFXML: function (a4, a5) {
        return a4 !== a5;
      },
      YtMyt: "symbol",
      QGyBo: "function",
      MPdsr: function (a4, a5) {
        return a4(a5);
      },
      EIurF: function (a4, a5) {
        return a4 < a5;
      },
      nDBLJ: function (a4, a5, a6) {
        return a4(a5, a6);
      },
      mwchG: function (a4, a5) {
        return a4 >= a5;
      },
      miIRS: function (a4, a5) {
        return a4 !== a5;
      },
      vbcCA: "glgoS",
      RgCMs: "Knado",
      MHvls: "先去boxjs填写账号密码",
      gNCls: function (a4, a5) {
        return a4(a5);
      },
      tEmHj: "SJSli",
      sUykE: "随机生成UA",
      ZhPGh: "用户：",
      vouei: "开始任务",
      rYnRr: "获取sessionId",
      DZLRR: "/api/account/init",
      rcrJY: "/web/init?client_id=",
      KYCLD: function (a4, a5) {
        return a4 === a5;
      },
      uFsnL: "continue",
      thwrT: "&token=&type=-1&union_id=",
      cBgiq: "————————————",
      FzcPW: "有缘对对碰",
      GcZDM: "EbDau",
      aZCib: function (a4, a5, a6) {
        return a4(a5, a6);
      },
      WQgPD: "/open/xxdtest/dailyMatch/controller.php",
      rGHvK: "type=105&score=100",
      iObYv: "JeiwT",
      VDbXb: function (a4, a5) {
        return a4(a5);
      },
      tgfmu: "/api/user_mumber/account_detail",
      NoqqV: " &id&mobile&nick_name&&",
      DGpVm: "&&KO>N<O5&3^L1%23YH0H1#G91*2H",
      TuYGP: "xsb_hn",
      OWMSW: "/lotteryhy/designh5/client/activity/7ca9b5b985df4858726af59b2933d5eb",
      MXoQA: "次抽奖",
      THPsr: "oaHzz",
      zRLMW: "/lotteryhy/api/client/cj/awd/drw/7ca9b5b985df4858726af59b2933d5eb",
      ZunEH: "抽奖获得：",
      jmSwX: " 抽奖获得：",
      lbwcW: function (a4, a5) {
        return a4(a5);
      },
      xOVkv: "/lotteryhy/api/client/cj/my/prize/info/e43121da0225c1691d5bb9885522d8bb?page=1&count=100",
      EdDVF: "WGBRM",
      SfBMK: function (a4, a5) {
        return a4 != a5;
      },
      APgCB: "奖品：",
      bPMBN: " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=",
      ZoxAW: "oCatO",
      gktPc: "eBtVM",
      jBsRk: function (a4, a5) {
        return a4 === a5;
      },
      KXyvI: "xfYNw",
      CwNbx: "获取id",
      HPazw: "VdpgZ",
      zTLkQ: "/api/myPage/list",
      mcNEq: function (a4, a5) {
        return a4 && a5;
      },
      OEtSc: "mMCPS",
      Ubkqg: "oHJva",
      muBOt: "获取id失败",
      vsBIB: "阅读id：",
      ySryh: "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----",
      ELeGp: function (a4, a5) {
        return a4 / a5;
      },
      SOJXY: "/signhy/client/actSign/actSign",
      Olhfm: function (a4, a5) {
        return a4 === a5;
      },
      mISvJ: "HylYH",
      uuOKy: "活动：",
      GbxUq: function (a4, a5) {
        return a4 < a5;
      },
      huSlR: "rhbKm",
      CZThv: "hOJES",
      AVszw: "/lotteryhy/api/client/cj/awd/drw/",
      ioObg: function (a4, a5) {
        return a4(a5);
      },
      CTnmk: "/lotteryhy/api/client/cj/my/prize/info/",
      tcCCv: "?page=1&count=100",
      IqQKb: function (a4, a5) {
        return a4(a5);
      },
      jBAhe: "zHSSg",
      UnYPJ: "brFFn",
      FwHCH: function (a4, a5) {
        return a4 == a5;
      },
      JWDCS: function (a4, a5) {
        return a4 != a5;
      },
      McGWC: " code：",
      LsFKz: "tuzXO",
      Mhuga: "阅读抽奖",
      amsEB: function (a4, a5) {
        return a4(a5);
      },
      BwHKF: "/newshy/api/client/news/getTnCode?t=",
      GnxUO: "/crop",
      yPiQM: "nSCdj",
      OSftu: "ddddocr服务异常",
      rYOsR: function (a4, a5) {
        return a4(a5);
      },
      UAoWA: "/slideComparison",
      jvgWq: "tEXut",
      gLQST: function (a4, a5) {
        return a4(a5);
      },
      fvkbJ: function (a4, a5) {
        return a4(a5);
      },
      OXzsO: "/newshy/api/client/news/list/",
      NybQl: function (a4, a5) {
        return a4 !== a5;
      },
      exuSv: "kMkDN",
      dnbVJ: "文章：",
      CZEwq: function (a4, a5, a6) {
        return a4(a5, a6);
      },
      cnDwv: "/newshy/api/client/news/readArticle",
      VTWDh: "阅读：",
      fkxuM: "抽奖id：",
      oeRsn: "/lotteryhy/designh5/client/activity/",
      WktiX: "swkkC",
      WOMoS: "kEJHN",
      KJDUZ: function (a4, a5, a6) {
        return a4(a5, a6);
      },
      fgjRk: function (a4, a5) {
        return a4(a5);
      },
      xGhpL: function (a4, a5) {
        return a4 === a5;
      },
      MsLhJ: "FPekc",
      VwvZS: "okXrd",
      oqJKW: function (a4, a5) {
        return a4 === a5;
      },
      iWtDB: "kcPvx",
      JtyhR: "wRQyJ",
      NHYgX: function (a4, a5) {
        return a4 !== a5;
      },
      xIHJt: "fCdTZ",
      VIJzW: function (a4, a5) {
        return a4(a5);
      },
      uKrrW: "post%%/web/oauth/credential_auth?",
      HipLv: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB",
      ZoJpe: function (a4, a5) {
        return a4 == a5;
      },
      mTmiD: "throw",
      fxNbH: function (a4, a5) {
        return a4 === a5;
      },
      PEAJQ: "SJQeD",
      cSsqt: "jAQrr"
    };
    D = i(g().mark(function a5() {
      {
        var a7;
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
        return g().wrap(function (ba) {
          {
            for (;;) {
              switch (ba.prev = ba.next) {
                case 0:
                  if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                    {
                      ba.next = 6;
                      break;
                    }
                  }
                  console.log("先去boxjs填写账号密码");
                  ba.next = 5;
                  return a1("先去boxjs填写账号密码");
                case 5:
                  return ba.abrupt("return");
                case 6:
                  ba.next = 8;
                  return Z();
                case 8:
                  l = ba.sent;
                  a7 = j.split(" ");
                  a8 = c(a7);
                  ba.prev = 11;
                  a8.s();
                case 13:
                  if ((a9 = a8.n()).done) {
                    {
                      ba.next = 233;
                      break;
                    }
                  }
                  aa = a9.value;
                  console.log("随机生成UA");
                  ab = Y();
                  v = ab.ua;
                  w = ab.commonUa;
                  x = ab.uuid;
                  console.log(v);
                  console.log(w);
                  t = aa.split("&")[0];
                  u = aa.split("&")[1];
                  console.log("用户：".concat(t, "开始任务"));
                  console.log("获取sessionId");
                  ba.next = 28;
                  return K("/api/account/init");
                case 28:
                  ac = ba.sent;
                  p = ac.data.session.id;
                  console.log(p);
                  console.log("获取signature_key");
                  ba.next = 34;
                  return E("/web/init?client_id=".concat(s));
                case 34:
                  ad = ba.sent;
                  m = ad.data.client.signature_key;
                  console.log(m);
                  console.log("获取code");
                  ba.next = 40;
                  return G("/web/oauth/credential_auth");
                case 40:
                  if (af = ba.sent, af.data) {
                    {
                      ba.next = 44;
                      break;
                    }
                  }
                  console.log(af.message);
                  return ba.abrupt("continue", 231);
                case 44:
                  ag = af.data.authorization_code.code;
                  console.log(ag);
                  console.log("登录");
                  ba.next = 49;
                  return K("/api/zbtxz/login", "check_token=&code=".concat(ag, "&token=&type=-1&union_id="));
                case 49:
                  ah = ba.sent;
                  console.log("登录成功");
                  r = ah.data.session.account_id;
                  p = ah.data.session.id;
                  console.log("————————————");
                  console.log("有缘对对碰");
                  ai = 0;
                case 56:
                  if (!(ai < 5)) {
                    {
                      ba.next = 66;
                      break;
                    }
                  }
                  ba.next = 59;
                  return Q("/open/xxdtest/dailyMatch/controller.php", "type=105&score=100");
                case 59:
                  if (aj = ba.sent, console.log(aj), 1 == aj.status) {
                    {
                      ba.next = 63;
                      break;
                    }
                  }
                  return ba.abrupt("break", 66);
                case 63:
                  ai++;
                  ba.next = 56;
                  break;
                case 66:
                  ba.next = 68;
                  return I("/api/user_mumber/account_detail");
                case 68:
                  ak = ba.sent;
                  al = Math.round(new Date().getTime() / 1000).toString();
                  ba.next = 72;
                  return O("/memberhy/tm/signature", {
                    accountId: r,
                    signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(al, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                    mobile: "1",
                    sessionId: p,
                    login: "1",
                    user: {
                      realName: "",
                      image_url: ak.data.rst.image_url,
                      nick_name: ak.data.rst.nick_name,
                      is_face_verify: 0,
                      idcard: "",
                      id: r
                    },
                    timestamp: al,
                    sign: "xsb_hn"
                  });
                case 72:
                  am = ba.sent;
                  y = JSON.stringify({
                    id: am.id,
                    black: 0,
                    btoken: am.btoken,
                    expire: am.expire,
                    token: am.token,
                    source: "xsb_hn",
                    mobile: am.mobile,
                    mark: am.mark,
                    mtoken: am.mtoken,
                    stoken: am.stoken,
                    nick_name: encodeURI(am.nick_name),
                    avatar: am.avatar
                  });
                  ba.next = 76;
                  return M("/lotteryhy/designh5/client/activity/7ca9b5b985df4858726af59b2933d5eb");
                case 76:
                  an = ba.sent;
                  console.log("拥有".concat(an.response.remain_counts, "次抽奖"));
                  ao = 0;
                case 79:
                  if (!(ao < an.response.remain_counts)) {
                    {
                      ba.next = 87;
                      break;
                    }
                  }
                  ba.next = 82;
                  return O("/lotteryhy/api/client/cj/awd/drw/7ca9b5b985df4858726af59b2933d5eb", {});
                case 82:
                  ap = ba.sent;
                  ap.award_name ? (console.log("抽奖获得：".concat(ap.award_name)), n += "用户：".concat(t, " 抽奖获得：").concat(ap.award_name, "\n")) : (console.log(JSON.stringify(ap)), n += "用户：".concat(t, " 抽奖获得：").concat(ap.error_message, "\n"));
                case 84:
                  ao++;
                  ba.next = 79;
                  break;
                case 87:
                  ba.next = 89;
                  return M("/lotteryhy/api/client/cj/my/prize/info/e43121da0225c1691d5bb9885522d8bb?page=1&count=100");
                case 89:
                  aq = ba.sent;
                  ar = c(aq.data);
                  try {
                    {
                      for (ar.s(); !(as = ar.n()).done;) {
                        at = as.value;
                        3 == at.prize_type && 2 != at.status && (console.log("奖品：".concat(at.prize_content, " code：").concat(at.prize_info.code)), o += "用户：".concat(t, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(at.prize_info.code, "\n"));
                      }
                    }
                  } catch (bl) {
                    {
                      ar.e(bl);
                    }
                  } finally {
                    ar.f();
                  }
                  if (console.log("————————————"), console.log("获取id"), B) {
                    {
                      ba.next = 104;
                      break;
                    }
                  }
                  ba.next = 97;
                  return I("/api/myPage/list");
                case 97:
                  au = ba.sent;
                  av = /\/h5\?mark=sign@designh5&tid=([a-zA-Z0-9]+)/;
                  aw = JSON.stringify(au).match(av);
                  aw && (B = aw[1]);
                  av = /\/h5\?mark=news-read@designh5&tid=([a-zA-Z0-9]+)/;
                  aw = JSON.stringify(au).match(av);
                  aw && (A = aw[1]);
                case 104:
                  if (A && B) {
                    {
                      ba.next = 107;
                      break;
                    }
                  }
                  console.log("获取id失败");
                  return ba.abrupt("continue", 231);
                case 107:
                  console.log("签到id：".concat(B));
                  console.log("阅读id：".concat(A));
                  al = Math.round(new Date().getTime() / 1000).toString();
                  ba.next = 112;
                  return O("/memberhy/tm/signature", {
                    accountId: r,
                    signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(al, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                    mobile: "1",
                    sessionId: p,
                    login: "1",
                    user: {
                      realName: "",
                      image_url: ak.data.rst.image_url,
                      nick_name: ak.data.rst.nick_name,
                      is_face_verify: 0,
                      idcard: "",
                      id: r
                    },
                    timestamp: al,
                    sign: "xsb_hn"
                  });
                case 112:
                  am = ba.sent;
                  y = JSON.stringify({
                    id: am.id,
                    black: 0,
                    btoken: am.btoken,
                    expire: am.expire,
                    token: am.token,
                    source: "xsb_hn",
                    mobile: am.mobile,
                    mark: am.mark,
                    mtoken: am.mtoken,
                    stoken: am.stoken,
                    nick_name: encodeURI(am.nick_name),
                    avatar: am.avatar
                  });
                  console.log("开始签到");
                  ax = new (l.loadJSEncrypt())();
                  ax.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
                  ay = ax.encrypt(JSON.stringify({
                    activity_id: B,
                    timestamp: Math.round(new Date().getTime() / 1000).toString()
                  }));
                  ba.next = 120;
                  return O("/signhy/client/actSign/actSign", {
                    params: ay
                  });
                case 120:
                  az = ba.sent;
                  0 == az.error_code ? console.log("签到成功") : console.log(az.error_message);
                  ba.next = 124;
                  return M("/signhy/client/actSign/getRelationCjList?activity_id=".concat(B));
                case 124:
                  aA = ba.sent;
                  aB = c(aA.response);
                  ba.prev = 126;
                  aB.s();
                case 128:
                  if ((aC = aB.n()).done) {
                    {
                      ba.next = 148;
                      break;
                    }
                  }
                  aD = aC.value;
                  console.log("活动：".concat(aD.title));
                  console.log("拥有".concat(aD.draw_num, "次抽奖"));
                  aE = 0;
                case 133:
                  if (!(aE < aD.draw_num)) {
                    {
                      ba.next = 141;
                      break;
                    }
                  }
                  ba.next = 136;
                  return O("/lotteryhy/api/client/cj/awd/drw/".concat(aD.hashid), {});
                case 136:
                  aF = ba.sent;
                  aF.award_name ? (console.log("抽奖获得：".concat(aF.award_name)), n += "用户：".concat(t, " 抽奖获得：").concat(aF.award_name, "\n")) : (console.log(JSON.stringify(aF)), n += "用户：".concat(t, " 抽奖获得：").concat(aF.error_message, "\n"));
                case 138:
                  aE++;
                  ba.next = 133;
                  break;
                case 141:
                  ba.next = 143;
                  return M("/lotteryhy/api/client/cj/my/prize/info/".concat(aD.hashid, "?page=1&count=100"));
                case 143:
                  aG = ba.sent;
                  aH = c(aG.data);
                  try {
                    {
                      for (aH.s(); !(aI = aH.n()).done;) {
                        aJ = aI.value;
                        3 == aJ.prize_type && 2 != aJ.status && (console.log("奖品：".concat(aJ.prize_content, " code：").concat(aJ.prize_info.code)), o += "用户：".concat(t, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(aJ.prize_info.code, "\n"));
                      }
                    }
                  } catch (bt) {
                    {
                      aH.e(bt);
                    }
                  } finally {
                    {
                      aH.f();
                    }
                  }
                case 146:
                  ba.next = 128;
                  break;
                case 148:
                  ba.next = 153;
                  break;
                case 150:
                  ba.prev = 150;
                  ba.t0 = ba.catch(126);
                  aB.e(ba.t0);
                case 153:
                  ba.prev = 153;
                  aB.f();
                  return ba.finish(153);
                case 156:
                  console.log("————————————");
                  console.log("阅读抽奖");
                  console.log("滑块验证");
                  ba.next = 161;
                  return M("/newshy/api/client/news/getTnCode?t=".concat(Math.random()));
                case 161:
                  aK = ba.sent;
                  ba.next = 164;
                  return S("".concat(k, "/crop"), {
                    image: aK.img,
                    y_coordinate: 150
                  });
                case 164:
                  if (aL = ba.sent, aL) {
                    {
                      ba.next = 170;
                      break;
                    }
                  }
                  console.log("ddddocr服务异常");
                  ba.next = 169;
                  return a1("ddddocr服务异常");
                case 169:
                  return ba.abrupt("continue", 231);
                case 170:
                  var bc = {
                    slidingImage: aL.slidingImage,
                    backImage: aL.backImage
                  };
                  ba.next = 172;
                  return S("".concat(k, "/slideComparison"), bc);
                case 172:
                  if (aM = ba.sent, aM) {
                    {
                      ba.next = 178;
                      break;
                    }
                  }
                  console.log("ddddocr服务异常");
                  ba.next = 177;
                  return a1("ddddocr服务异常");
                case 177:
                  return ba.abrupt("continue", 231);
                case 178:
                  console.log(aM);
                  aN = aK.request_id;
                  aO = aM.result;
                  ba.next = 183;
                  return M("/newshy/api/client/news/list/".concat(A));
                case 183:
                  aP = ba.sent;
                  aQ = c(aP.data[0].information_content_data[0].data);
                  ba.prev = 185;
                  aQ.s();
                case 187:
                  if ((aR = aQ.n()).done) {
                    {
                      ba.next = 203;
                      break;
                    }
                  }
                  for (aS = aR.value, console.log("文章：".concat(aS.title)), aT = aS.link.split("?")[1], aU = {}, aV = aT.split("&"), aW = 0, aX = aV.length; aW < aX; aW++) {
                    aY = aV[aW].split("=");
                    aU[aY[0]] = aY[1];
                  }
                  aZ = new (l.loadJSEncrypt())();
                  aZ.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
                  b0 = aZ.encrypt(JSON.stringify({
                    news_id: A,
                    item_id: aS.item_id,
                    request_id: aN,
                    timestamp: Math.round(new Date().getTime() / 1000).toString(),
                    tn_x: aO
                  }));
                  ba.next = 199;
                  return O("/newshy/api/client/news/readArticle", {
                    params: b0
                  });
                case 199:
                  b1 = ba.sent;
                  console.log("阅读：".concat(null == b1 ? undefined : b1.success));
                case 201:
                  ba.next = 187;
                  break;
                case 203:
                  ba.next = 208;
                  break;
                case 205:
                  ba.prev = 205;
                  ba.t1 = ba.catch(185);
                  aQ.e(ba.t1);
                case 208:
                  ba.prev = 208;
                  aQ.f();
                  return ba.finish(208);
                case 211:
                  z = aP.data[0].draw.activity_id;
                  console.log("抽奖id：".concat(z));
                  ba.next = 215;
                  return M("/lotteryhy/designh5/client/activity/".concat(z));
                case 215:
                  b2 = ba.sent;
                  console.log("拥有".concat(b2.response.remain_counts, "次抽奖"));
                  b3 = 0;
                case 218:
                  if (!(b3 < b2.response.remain_counts)) {
                    {
                      ba.next = 226;
                      break;
                    }
                  }
                  ba.next = 221;
                  return O("/lotteryhy/api/client/cj/awd/drw/".concat(z), {});
                case 221:
                  b4 = ba.sent;
                  b4.award_name ? (console.log("抽奖获得：".concat(b4.award_name)), n += "用户：".concat(t, " 抽奖获得：").concat(b4.award_name, "\n")) : (console.log(JSON.stringify(b4)), n += "用户：".concat(t, " 抽奖获得：").concat(b4.error_message, "\n"));
                case 223:
                  b3++;
                  ba.next = 218;
                  break;
                case 226:
                  ba.next = 228;
                  return M("/lotteryhy/api/client/cj/my/prize/info/".concat(z, "?page=1&count=100"));
                case 228:
                  b5 = ba.sent;
                  b6 = c(b5.data);
                  try {
                    {
                      for (b6.s(); !(b7 = b6.n()).done;) {
                        b8 = b7.value;
                        3 == b8.prize_type && 2 != b8.status && (console.log("奖品：".concat(b8.prize_content, " code：").concat(b8.prize_info.code)), o += "用户：".concat(t, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(b8.prize_info.code, "\n"));
                      }
                    }
                  } catch (bB) {
                    {
                      b6.e(bB);
                    }
                  } finally {
                    b6.f();
                  }
                case 231:
                  ba.next = 13;
                  break;
                case 233:
                  ba.next = 238;
                  break;
                case 235:
                  ba.prev = 235;
                  ba.t2 = ba.catch(11);
                  a8.e(ba.t2);
                case 238:
                  ba.prev = 238;
                  a8.f();
                  return ba.finish(238);
                case 241:
                  if (!n) {
                    {
                      ba.next = 244;
                      break;
                    }
                  }
                  ba.next = 244;
                  return a1(n);
                case 244:
                  if (!o) {
                    {
                      ba.next = 247;
                      break;
                    }
                  }
                  ba.next = 247;
                  return a1(o);
                case 247:
                case "end":
                  return ba.stop();
              }
            }
          }
        }, a5, null, [[11, 235, 238, 241], [126, 150, 153, 156], [185, 205, 208, 211]]);
      }
    }));
    return D.apply(this, arguments);
  }
  function E(a3) {
    {
      return F.apply(this, arguments);
    }
  }
  function F() {
    F = i(g().mark(function a3(a4) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var aa = {
                  url: "https://passport.tmuyun.com".concat(a4),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": W(),
                    "Accept-Encoding": "gzip",
                    "user-agent": v
                  }
                };
                $.get(aa, function () {
                  {
                    var ac = i(g().mark(function ae(af, ag, ah) {
                      {
                        return g().wrap(function (aj) {
                          {
                            for (;;) {
                              switch (aj.prev = aj.next) {
                                case 0:
                                  try {
                                    af ? (console.log("".concat(JSON.stringify(af))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a8(JSON.parse(ah));
                                  } catch (ao) {
                                    {
                                      $.logErr(ao, ag);
                                    }
                                  } finally {
                                    {
                                      a8();
                                    }
                                  }
                                case 1:
                                case "end":
                                  return aj.stop();
                              }
                            }
                          }
                        }, ae);
                      }
                    }));
                    return function (af, ag, ah) {
                      return ac.apply(this, arguments);
                    };
                  }
                }());
              }));
            case 1:
            case "end":
              return a6.stop();
          }
        }
      }, a3);
    }));
    return F.apply(this, arguments);
  }
  function G(a3) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function a4(a5) {
      var a7;
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              a7 = U();
              return a8.abrupt("return", new Promise(function (aa) {
                var ab = {
                  url: "https://passport.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": a7.uuid,
                    "X-SIGNATURE": a7.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": v
                  },
                  body: a7.body
                };
                $.post(ab, function () {
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
            case 2:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return H.apply(this, arguments);
  }
  function I(a3) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function a4(a5) {
      var a7;
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              a7 = V(a5);
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": a7.time,
                  "X-SESSION-ID": p,
                  "X-REQUEST-ID": a7.uuid,
                  "X-SIGNATURE": a7.signature,
                  "X-TENANT-ID": q,
                  "X-ACCOUNT-ID": r,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": w
                };
                var ad = {
                  url: "https://vapp.tmuyun.com".concat(a5),
                  headers: ac
                };
                $.get(ad, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            if (ak.prev = 0, !ag) {
                              ak.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ag)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ak.next = 9;
                            break;
                          case 6:
                            ak.next = 8;
                            return $.wait(2000);
                          case 8:
                            aa(JSON.parse(ai));
                          case 9:
                            ak.next = 14;
                            break;
                          case 11:
                            ak.prev = 11;
                            ak.t0 = ak.catch(0);
                            $.logErr(ak.t0, ah);
                          case 14:
                            ak.prev = 14;
                            aa();
                            return ak.finish(14);
                          case 17:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, af, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return J.apply(this, arguments);
  }
  function K(a3, a4) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function a4(a5, a6) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = V(a5);
              return a9.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://vapp.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a8.time,
                    "X-SESSION-ID": p,
                    "X-REQUEST-ID": a8.uuid,
                    "X-SIGNATURE": a8.signature,
                    "X-TENANT-ID": q,
                    "X-ACCOUNT-ID": r,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  },
                  body: a6
                };
                $.post(ac, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            if (aj.prev = 0, !af) {
                              aj.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aj.next = 9;
                            break;
                          case 6:
                            aj.next = 8;
                            return $.wait(2000);
                          case 8:
                            aa(JSON.parse(ah));
                          case 9:
                            aj.next = 14;
                            break;
                          case 11:
                            aj.prev = 11;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ag);
                          case 14:
                            aj.prev = 14;
                            aa();
                            return aj.finish(14);
                          case 17:
                          case "end":
                            return aj.stop();
                        }
                      }
                    }, ae, null, [[0, 11, 14, 17]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a9.stop();
          }
        }
      }, a4);
    }));
    return L.apply(this, arguments);
  }
  function M(a3) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function a4(a5) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var a9 = {
                  url: "https://m.aihoge.com/api".concat(a5),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: y,
                    Limit: A,
                    sessionId: p,
                    "X-DEVICE-ID": "000",
                    accountId: r,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(A, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(a9, function () {
                  var ab = i(g().mark(function ac(ad, ae, af) {
                    return g().wrap(function (ag) {
                      for (;;) {
                        switch (ag.prev = ag.next) {
                          case 0:
                            if (ag.prev = 0, !ad) {
                              ag.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ad)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ag.next = 9;
                            break;
                          case 6:
                            ag.next = 8;
                            return $.wait(2000);
                          case 8:
                            a8(JSON.parse(af));
                          case 9:
                            ag.next = 14;
                            break;
                          case 11:
                            ag.prev = 11;
                            ag.t0 = ag.catch(0);
                            $.logErr(ag.t0, ae);
                          case 14:
                            ag.prev = 14;
                            a8();
                            return ag.finish(14);
                          case 17:
                          case "end":
                            return ag.stop();
                        }
                      }
                    }, ac, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ad, ae, af) {
                    return ab.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a6.stop();
          }
        }
      }, a4);
    }));
    return N.apply(this, arguments);
  }
  function O(a3, a4) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function a4(a5, a6) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a9) {
                var aa = {
                  url: "https://m.aihoge.com/api".concat(a5),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: y,
                    Limit: A,
                    sessionId: p,
                    "X-DEVICE-ID": "000",
                    accountId: r,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(A, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(a6)
                };
                $.post(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            if (ah.prev = 0, !ae) {
                              ah.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ah.next = 9;
                            break;
                          case 6:
                            ah.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ag));
                          case 9:
                            ah.next = 14;
                            break;
                          case 11:
                            ah.prev = 11;
                            ah.t0 = ah.catch(0);
                            $.logErr(ah.t0, af);
                          case 14:
                            ah.prev = 14;
                            a9();
                            return ah.finish(14);
                          case 17:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, ad, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a7.stop();
          }
        }
      }, a4);
    }));
    return P.apply(this, arguments);
  }
  function Q(a3, a4) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function a3(a4, a5) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a9) {
                var aa = {
                  url: "https://active.hndachao.cn".concat(a4),
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
                  body: a5
                };
                $.post(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            if (ah.prev = 0, !ae) {
                              ah.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ah.next = 9;
                            break;
                          case 6:
                            ah.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ag));
                          case 9:
                            ah.next = 14;
                            break;
                          case 11:
                            ah.prev = 11;
                            ah.t0 = ah.catch(0);
                            $.logErr(ah.t0, af);
                          case 14:
                            ah.prev = 14;
                            a9();
                            return ah.finish(14);
                          case 17:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, ad, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a7.stop();
          }
        }
      }, a3);
    }));
    return R.apply(this, arguments);
  }
  function S(a3, a4) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function a3(a4, a5) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a9) {
                var aa = {
                  "Content-Type": "application/json"
                };
                var ab = {
                  url: a4,
                  headers: aa,
                  body: JSON.stringify(a5)
                };
                $.post(ab, function (ac, ad, ae) {
                  try {
                    ac ? (console.log("".concat(JSON.stringify(ac))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a9(JSON.parse(ae));
                  } catch (af) {
                    $.logErr(af, ad);
                  } finally {
                    a9();
                  }
                });
              }));
            case 1:
            case "end":
              return a7.stop();
          }
        }
      }, a3);
    }));
    return T.apply(this, arguments);
  }
  function U() {
    var ab = new (l.loadJSEncrypt())();
    ab.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    u = ab.encrypt(u);
    var a6 = W();
    var a7 = "client_id=".concat(s, "&password=").concat(u, "&phone_number=").concat(t);
    var a8 = "post%%/web/oauth/credential_auth?".concat(a7, "%%").concat(a6, "%%");
    a7 = "client_id=".concat(s, "&password=").concat(encodeURIComponent(u), "&phone_number=").concat(t);
    CryptoJS = l.createCryptoJS();
    var a9 = CryptoJS.HmacSHA256(a8, m);
    var aa = CryptoJS.enc.Hex.stringify(a9);
    var a5 = {
      uuid: a6,
      signature: aa,
      body: a7
    };
    return a5;
  }
  function V(a3) {
    var a4 = W();
    var a5 = Date.now();
    a3.indexOf("?") > 0 && (a3 = a3.substring(0, a3.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var a6 = CryptoJS.SHA256("".concat(a3, "&&").concat(p, "&&").concat(a4, "&&").concat(a5, "&&FR*r!isE5W&&").concat(q)).toString();
    var a7 = {
      uuid: a4,
      time: a5,
      signature: a6
    };
    return a7;
  }
  function W() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a4) {
      var a5 = 16 * Math.random() | 0;
      var a6 = "x" === a4 ? a5 : 3 & a5 | 8;
      return a6.toString(16);
    });
  }
  function X(a3) {
    return a3[Math.floor(Math.random() * a3.length)];
  }
  function Y() {
    var a3 = "14.1.6";
    var a4 = W();
    var a5 = X(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var a6 = "Xiaomi " + a5;
    var a7 = "Android";
    var a8 = "".concat(a7.toUpperCase(), ";").concat("11", ";").concat(s, ";").concat(a3, ";1.0;null;").concat(a5);
    var a9 = "".concat(a3, ";").concat(a4, ";").concat(a6, ";").concat(a7, ";").concat("11", ";").concat("6.11.0");
    var aa = {
      ua: a8,
      commonUa: a9,
      uuid: a4
    };
    return aa;
  }
  function Z() {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function a4() {
      var a6;
      return g().wrap(function a7(a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              if (a6 = $.getdata("Utils_Code") || "", !a6 || !Object.keys(a6).length) {
                a8.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a6);
              return a8.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a8.abrupt("return", new Promise(function () {
                var aa = i(g().mark(function ab(ac) {
                  return g().wrap(function ae(af) {
                    for (;;) {
                      switch (af.prev = af.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ah) {
                            $.setdata(ah, "Utils_Code");
                            eval(ah);
                            console.log("✅ Utils加载成功, 请继续");
                            ac(creatUtils());
                          });
                        case 1:
                        case "end":
                          return af.stop();
                      }
                    }
                  }, ab);
                }));
                return function (ac) {
                  return aa.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return a0.apply(this, arguments);
  }
  function a1(a3) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function a3(a4) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              if (!$.isNode()) {
                a7.next = 5;
                break;
              }
              a7.next = 3;
              return notify.sendNotify($.name, a4);
            case 3:
              a7.next = 6;
              break;
            case 5:
              $.msg($.name, "", a4);
            case 6:
            case "end":
              return a7.stop();
          }
        }
      }, a3);
    }));
    return a2.apply(this, arguments);
  }
  i(g().mark(function a3() {
    return g().wrap(function (a4) {
      for (;;) {
        switch (a4.prev = a4.next) {
          case 0:
            a4.next = 2;
            return C();
          case 2:
          case "end":
            return a4.stop();
        }
      }
    }, a3);
  }))().catch(function (a4) {
    $.log(a4);
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