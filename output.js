//Wed Nov 06 2024 04:23:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(a3) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a5) {
      {
        return typeof a5;
      }
    } : function (a5) {
      return a5 && "function" == typeof Symbol && a5.constructor === Symbol && a5 !== Symbol.prototype ? "symbol" : typeof a5;
    };
    return b(a3);
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
                    var ad = {
                      done: true
                    };
                    return a7 >= a3.length ? ad : {
                      done: false,
                      value: a3[a7++]
                    };
                  }
                },
                e: function (ad) {
                  {
                    throw ad;
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
            var ag = a6.next();
            aa = ag.done;
            return ag;
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
          var a6 = {}.toString.call(a3).slice(8, -1);
          "Object" === a6 && a3.constructor && (a6 = a3.constructor.name);
          return "Map" === a6 || "Set" === a6 ? Array.from(a3) : "Arguments" === a6 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a6) ? f(a3, a4) : undefined;
        }
      }
    }
  }
  function f(a3, a4) {
    {
      (null == a4 || a4 > a3.length) && (a4 = a3.length);
      for (var a5 = 0, a6 = Array(a4); a5 < a4; a5++) {
        a6[a5] = a3[a5];
      }
      return a6;
    }
  }
  function g() {
    "use strict";

    var a3 = {
      jZifn: "Utils_Code",
      wFTNj: function (aA, aB) {
        return aA(aB);
      },
      qIXMM: "✅ Utils加载成功, 请继续",
      IQcpr: function (aA) {
        return aA();
      },
      iIdbW: "end",
      cQQer: function (aA) {
        return aA();
      },
      ZKtaC: function (aA, aB) {
        return aA(aB);
      },
      XlKeT: "ejjwz",
      niehG: "uqKlN",
      CAyHd: function (aA) {
        return aA();
      },
      dAYep: function (aA, aB) {
        return aA !== aB;
      },
      HmzGG: "LQiTB",
      TqaaC: function (aA, aB) {
        return aA instanceof aB;
      },
      YbxUl: function (aA, aB, aC, aD) {
        return aA(aB, aC, aD);
      },
      PPLHK: "_invoke",
      lhuyO: function (aA, aB, aC, aD) {
        return aA(aB, aC, aD);
      },
      JQxkZ: "AoZud",
      ibFmA: function (aA, aB, aC, aD) {
        return aA(aB, aC, aD);
      },
      amLQb: function (aA, aB) {
        return aA === aB;
      },
      yLyIs: "hKtai",
      VjEME: function (aA) {
        return aA();
      },
      XEjkm: "continue",
      zJAvk: "return",
      zCpEE: function (aA, aB) {
        return aA === aB;
      },
      PlNuZ: "wKwTc",
      OrBZQ: "Generator is already running",
      zIBGu: function (aA, aB) {
        return aA === aB;
      },
      FbnJs: "rWZHi",
      UZPkm: "TwvYA",
      KngOY: "throw",
      qyqHM: "CTPwK",
      JLnuk: "xPHDw",
      dALrz: "YMZpQ",
      asktA: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      IzZmR: "KGBqr",
      RGaeC: "nNXkG",
      Bojxy: function (aA, aB) {
        return aA === aB;
      },
      gNvee: "next",
      JdXUF: function (aA, aB) {
        return aA === aB;
      },
      ekJQY: "iGhKc",
      tQCgp: "normal",
      oepAz: function (aA, aB) {
        return aA === aB;
      },
      udeoq: "Yuzqy",
      MBvsl: "hJQWK",
      ryThN: function (aA, aB) {
        return aA === aB;
      },
      QuHNT: function (aA, aB) {
        return aA == aB;
      },
      YvlWM: "function",
      qOYpA: "GeneratorFunction",
      JYIJc: "LKdru",
      zLoCM: "YvTrh",
      qCvWy: function (aA, aB, aC) {
        return aA(aB, aC);
      },
      cqObp: function (aA, aB) {
        return aA + aB;
      },
      FThrf: "The iterator does not provide a '",
      USUGo: function (aA, aB, aC, aD) {
        return aA(aB, aC, aD);
      },
      UqOXN: function (aA, aB) {
        return aA !== aB;
      },
      wMnAk: "iterator result is not an object",
      eGjKg: function (aA, aB) {
        return aA(aB);
      },
      QyOYw: "hRgww",
      GsWDZ: "hPRDI",
      EDhVI: function (aA, aB) {
        return aA < aB;
      },
      IsUgK: function (aA, aB) {
        return aA !== aB;
      },
      QyXDp: "CzEoL",
      UtDea: function (aA, aB) {
        return aA !== aB;
      },
      JFBtK: "vtyYr",
      nrbBJ: function (aA, aB) {
        return aA(aB);
      },
      otjKQ: "DnrKt",
      syoMO: "IksYM",
      iyVDE: function (aA, aB) {
        return aA(aB);
      },
      WZnQc: " is not iterable",
      xxaIt: function (aA, aB) {
        return aA < aB;
      },
      ZzCES: function (aA, aB) {
        return aA === aB;
      },
      HmRIv: "luFrU",
      YWsrK: function (aA, aB) {
        return aA === aB;
      },
      fpywq: "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
      hkSJT: function (aA, aB) {
        return aA | aB;
      },
      ZjBwg: function (aA, aB) {
        return aA & aB;
      },
      juiPF: function (aA, aB) {
        return aA === aB;
      },
      jNAoO: "MmAHb",
      auPTN: "sXHpN",
      QBhpd: "ibyLw",
      ALLlW: "ZPEsD",
      rKzJQ: function (aA, aB) {
        return aA == aB;
      },
      qJcjj: function (aA, aB) {
        return aA > aB;
      },
      lqNEU: function (aA, aB) {
        return aA !== aB;
      },
      vvBow: "rGMCr",
      SIxnH: function (aA) {
        return aA();
      },
      qzayS: "WHGbs",
      ECiSb: "ARdik",
      UKgGl: "xmGPG",
      ejwpF: function (aA, aB) {
        return aA === aB;
      },
      piZKW: "hLNim",
      oCbxB: "[object Generator]",
      xWzhl: "Eybrv",
      wgfau: "ivFNY",
      cSGav: "bYodM",
      NQWBe: "rfAEI",
      wLMLP: "eWSiR",
      Faotf: function (aA, aB) {
        return aA === aB;
      },
      eNjYP: "vWQWC",
      tpxuH: "nviSd",
      IlftK: function (aA, aB) {
        return aA === aB;
      },
      OwINo: " API请求失败，请检查网路重试",
      JiRUc: function (aA, aB) {
        return aA(aB);
      },
      bRzGH: function (aA, aB) {
        return aA === aB;
      },
      RarVg: "fBwte",
      aYfuQ: function (aA, aB) {
        return aA - aB;
      },
      ziPto: function (aA, aB) {
        return aA >= aB;
      },
      TJJGd: function (aA, aB) {
        return aA === aB;
      },
      ABCqp: "oBXCk",
      ItWSp: "UpxYS",
      JKbNH: "finallyLoc",
      BeCrI: "dauxj",
      tJKKq: "break",
      RsIRo: function (aA, aB) {
        return aA <= aB;
      },
      tAFcp: function (aA, aB) {
        return aA <= aB;
      },
      wGbzI: "vpMvk",
      KqSSg: function (aA, aB) {
        return aA(aB);
      },
      DXUuQ: "MJvBD",
      ORewy: "YZAsK",
      lLZrF: function (aA, aB) {
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
      {
        aA[aB] = aC.value;
      }
    };
    var a9 = "function" == typeof Symbol ? Symbol : {};
    var aa = a9.iterator || "@@iterator";
    var ab = a9.asyncIterator || "@@asyncIterator";
    var ac = a9.toStringTag || "@@toStringTag";
    function ad(aA, aB, aC) {
      {
        var aE = {
          value: aC,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aA, aB, aE);
        return aA[aB];
      }
    }
    try {
      {
        ad({}, "");
      }
    } catch (aB) {
      ad = function (aC, aD, aE) {
        return aC[aD] = aE;
      };
    }
    function ae(aD, aE, aF, aG) {
      {
        var aI = aE && aE.prototype instanceof al ? aE : al;
        var aJ = Object.create(aI.prototype);
        var aK = new ay(aG || []);
        a8(aJ, "_invoke", {
          value: au(aD, aF, aK)
        });
        return aJ;
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
        ["next", "throw", "return"].forEach(function (aF) {
          ad(aD, aF, function (aH) {
            {
              return this._invoke(aF, aH);
            }
          });
        });
      }
    }
    function at(aD, aE) {
      {
        function aI(aJ, aK, aL, aM) {
          {
            var aO = af(aD[aJ], aD, aK);
            if ("throw" !== aO.type) {
              {
                var aP = aO.arg;
                var aQ = aP.value;
                return aQ && "object" == b(aQ) && a7.call(aQ, "__await") ? aE.resolve(aQ.__await).then(function (aS) {
                  {
                    aI("next", aS, aL, aM);
                  }
                }, function (aS) {
                  aI("throw", aS, aL, aM);
                }) : aE.resolve(aQ).then(function (aS) {
                  aP.value = aS;
                  aL(aP);
                }, function (aS) {
                  return aI("throw", aS, aL, aM);
                });
              }
            }
            aM(aO.arg);
          }
        }
        var aG;
        a8(this, "_invoke", {
          value: function (aJ, aK) {
            {
              function aL() {
                return new aE(function (aO, aP) {
                  {
                    aI(aJ, aK, aO, aP);
                  }
                });
              }
              return aG = aG ? aG.then(aL, aL) : aL();
            }
          }
        });
      }
    }
    function au(aD, aE, aF) {
      {
        var aH = ag;
        return function (aI, aJ) {
          {
            if (aH === ai) {
              throw Error("Generator is already running");
            }
            if (aH === aj) {
              {
                if ("throw" === aI) {
                  throw aJ;
                }
                var aM = {
                  value: a4,
                  done: true
                };
                return aM;
              }
            }
            for (aF.method = aI, aF.arg = aJ;;) {
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
        var aI = aE.method;
        var aJ = aD.iterator[aI];
        if (aJ === a4) {
          aE.delegate = null;
          "throw" === aI && aD.iterator.return && (aE.method = "return", aE.arg = a4, av(aD, aE), "throw" === aE.method) || "return" !== aI && (aE.method = "throw", aE.arg = new TypeError("The iterator does not provide a '" + aI + "' method"));
          return ak;
        }
        var aK = af(aJ, aD.iterator, aE.arg);
        if ("throw" === aK.type) {
          aE.method = "throw";
          aE.arg = aK.arg;
          aE.delegate = null;
          return ak;
        }
        var aH = aK.arg;
        return aH ? aH.done ? (aE[aD.resultName] = aH.value, aE.next = aD.nextLoc, "return" !== aE.method && (aE.method = "next", aE.arg = a4), aE.delegate = null, ak) : aH : (aE.method = "throw", aE.arg = new TypeError("iterator result is not an object"), aE.delegate = null, ak);
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
        var aF = {
          tryLoc: "root"
        };
        this.tryEntries = [aF];
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
                var aH = function aL() {
                  {
                    for (; ++aG < aD.length;) {
                      if (a7.call(aD, aG)) {
                        aL.value = aD[aG];
                        aL.done = false;
                        return aL;
                      }
                    }
                    aL.value = a4;
                    aL.done = true;
                    return aL;
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
        var aE = "function" == typeof aD && aD.constructor;
        return !!aE && (aE === am || "GeneratorFunction" === (aE.displayName || aE.name));
      }
    };
    a5.mark = function (aD) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aD, an) : (aD.__proto__ = an, ad(aD, ac, "GeneratorFunction"));
      aD.prototype = Object.create(ar);
      return aD;
    };
    a5.awrap = function (aD) {
      {
        var aF = {
          __await: aD
        };
        return aF;
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
        var aK = new at(ae(aD, aE, aF, aG), aH);
        return a5.isGeneratorFunction(aE) ? aK : aK.next().then(function (aM) {
          {
            return aM.done ? aM.value : aK.next();
          }
        });
      }
    };
    as(ar);
    ad(ar, ac, "Generator");
    ad(ar, aa, function () {
      return this;
    });
    ad(ar, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    a5.keys = function (aD) {
      {
        var aE = Object(aD);
        var aF = [];
        for (var aG in aE) aF.push(aG);
        aF.reverse();
        return function aH() {
          {
            for (; aF.length;) {
              {
                var aI = aF.pop();
                if (aI in aE) {
                  aH.value = aI;
                  aH.done = false;
                  return aH;
                }
              }
            }
            aH.done = true;
            return aH;
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
          var aD = this.tryEntries[0].completion;
          if ("throw" === aD.type) {
            throw aD.arg;
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
            aI.type = "throw";
            aI.arg = aD;
            aF.next = aM;
            aN && (aF.method = "next", aF.arg = a4);
            return !!aN;
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
          for (var aE = this.tryEntries.length - 1; aE >= 0; --aE) {
            {
              var aF = this.tryEntries[aE];
              if (aF.tryLoc === aD) {
                {
                  var aG = aF.completion;
                  if ("throw" === aG.type) {
                    {
                      var aH = aG.arg;
                      ax(aF);
                    }
                  }
                  return aH;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aD, aE, aF) {
        this.delegate = {
          iterator: az(aD),
          resultName: aE,
          nextLoc: aF
        };
        "next" === this.method && (this.arg = a4);
        return ak;
      }
    };
    return a5;
  }
  function h(a3, a4, a5, a6, a7, a8, a9) {
    {
      try {
        {
          var ac = a3[a8](a9);
          var ad = ac.value;
        }
      } catch (ag) {
        {
          return void a5(ag);
        }
      }
      ac.done ? a4(ad) : Promise.resolve(ad).then(a6, a7);
    }
  }
  function i(a3) {
    return function () {
      var a6 = this;
      var a7 = arguments;
      return new Promise(function (a8, a9) {
        var aa = a3.apply(a6, a7);
        function ab(ad) {
          {
            h(aa, a8, a9, ab, ac, "next", ad);
          }
        }
        function ac(ad) {
          {
            h(aa, a8, a9, ab, ac, "throw", ad);
          }
        }
        ab(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.LanJingLing : $.getdata("LanJingLing")) || "";
  var k = undefined;
  var l = "";
  var m = "";
  var n = "";
  var o = "72";
  var p = "";
  var q = "10026";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "";
  var x = "";
  var y = "";
  var z = "";
  var A = "FR*r!isE5W";
  function B() {
    {
      return C.apply(this, arguments);
    }
  }
  function C() {
    var a3 = {
      pEYwO: function (a4, a5) {
        return a4 >= a5;
      },
      tJZkH: function (a4, a5) {
        return a4 === a5;
      },
      kWiNO: "throw",
      QcWJD: function (a4, a5) {
        return a4(a5);
      },
      rjMRO: function (a4, a5) {
        return a4 === a5;
      },
      TvsTi: function (a4, a5, a6) {
        return a4(a5, a6);
      },
      SuZOJ: "Object",
      VxQfL: "Map",
      PTDNp: "Arguments",
      DJQso: "normal",
      rBopR: function (a4) {
        return a4();
      },
      EInUn: function (a4, a5) {
        return a4 == a5;
      },
      sxrTT: "function",
      ZaoVd: function (a4, a5) {
        return a4 !== a5;
      },
      AEpfL: function (a4, a5) {
        return a4 + a5;
      },
      zBXJs: function (a4, a5) {
        return a4 < a5;
      },
      ynmHC: function (a4, a5) {
        return a4 < a5;
      },
      idhHP: function (a4, a5) {
        return a4 !== a5;
      },
      KCOkO: "GMARM",
      kyDMP: "作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n",
      HkvhL: "GPUob",
      mHQkf: "HlMyX",
      JIMYP: "先去boxjs填写账号密码",
      zUMTc: function (a4, a5) {
        return a4(a5);
      },
      LcPZA: "return",
      zXGAs: "BYIrw",
      tEtaf: "用户：",
      TJtJf: "开始任务",
      bjkWk: "获取sessionId",
      SQHkP: "/api/account/init",
      NKGbb: "获取signature_key",
      OWxKR: "/web/init?client_id=",
      baQvg: function (a4, a5) {
        return a4(a5);
      },
      nkaNk: "/web/oauth/credential_auth",
      olpRG: "HCAuS",
      ubIfX: "continue",
      bUGSP: function (a4, a5, a6) {
        return a4(a5, a6);
      },
      SNGiU: "check_token=&code=",
      egjHS: "登录成功",
      qSqIW: "阅读抽奖",
      ePAUo: "获取token",
      dPesK: "/auth/userinfo_with_account?accountId=",
      ENwAt: "获取id",
      PbSFJ: "/tasks",
      ILXZC: function (a4, a5) {
        return a4 === a5;
      },
      sforV: "JMmaB",
      PVetf: "未找到活动",
      oFrQH: function (a4, a5) {
        return a4 === a5;
      },
      LyGom: "DTBSV",
      IyUGj: "开始阅读",
      sFmdP: function (a4, a5) {
        return a4(a5);
      },
      BXoVq: "/news?task_id=",
      GtNmT: "&session_id=",
      nznfa: "&device=",
      dZbjn: "TLKXI",
      qUkCd: "rvyYw",
      bTCOC: "已完成",
      ivHpv: function (a4, a5) {
        return a4 === a5;
      },
      PtdDa: "JYsKF",
      JArFm: "aoaha",
      xUiLX: function (a4, a5) {
        return a4 / a5;
      },
      OZWkG: function (a4, a5) {
        return a4 !== a5;
      },
      DquML: function (a4, a5) {
        return a4 !== a5;
      },
      DyMfF: "HqJLY",
      BgKwk: "HxYNh",
      CSfiu: function (a4, a5) {
        return a4(a5);
      },
      hmgTU: function (a4, a5) {
        return a4(a5);
      },
      bUIPh: "/news/record?t=am&news_id=",
      mCClR: "&timestamp=",
      ZndjH: "&sign=",
      yhzfR: function (a4, a5) {
        return a4 === a5;
      },
      zzpOM: "阅读：",
      BrLdC: "like",
      ebrWy: function (a4, a5) {
        return a4 !== a5;
      },
      PUxzM: "XkadG",
      PIKzr: function (a4, a5, a6) {
        return a4(a5, a6);
      },
      MAMvz: "点赞：",
      fKdrF: "share",
      lRIGo: "fDCiJ",
      GjTtI: "memberType=3&member_type=3&target_id=",
      hNpxj: "分享：",
      DlCSt: "comment",
      TxArz: function (a4, a5) {
        return a4 === a5;
      },
      BZdRg: "PVDPT",
      KsAiG: "UrAKH",
      OSzCY: "评论：",
      rqNsk: function (a4, a5) {
        return a4(a5);
      },
      pHXTB: "&account_id=",
      cqaig: function (a4, a5) {
        return a4(a5);
      },
      MWliW: "/draw/code",
      tdHiO: "次抽奖",
      fMbBc: "iJpTO",
      lGkSE: "xCpMA",
      KSEpl: function (a4, a5, a6) {
        return a4(a5, a6);
      },
      YkqFC: "抽奖获得红包",
      JeEjK: "谢谢参与",
      FhaQS: "开始提现",
      ZyhVN: function (a4, a5) {
        return a4 && a5;
      },
      bHJhb: function (a4, a5) {
        return a4 !== a5;
      },
      jpeMU: "PFrKL",
      kyKGZ: "请填写支付宝信息",
      DHPRh: function (a4, a5) {
        return a4 !== a5;
      },
      ZXqFp: "aSedc",
      NGxmN: "绑定支付宝：",
      BLKXm: "余额：",
      ImlPY: function (a4, a5) {
        return a4 !== a5;
      },
      RdGsa: "FHFDW",
      bCRLr: "/order/receive",
      OICpK: "提现：",
      HpYDF: " 提现成功：",
      YzNbX: "/api/account_comment/comment_list?size=20",
      Uzxvl: "taBIK",
      WCFni: "IIjls",
      kegIr: "comment_id=",
      vAqyC: "删除评论：",
      reQpH: "PKqwT",
      HFXqv: "end",
      cUQVX: function (a4, a5, a6, a7, a8) {
        return a4(a5, a6, a7, a8);
      },
      cUcqO: function (a4, a5, a6, a7, a8, a9, aa, ab) {
        return a4(a5, a6, a7, a8, a9, aa, ab);
      },
      ywtJo: "next",
      wmesY: function (a4, a5) {
        return a4 !== a5;
      },
      MheLx: "gVQQZ",
      sZMnd: "YqjxS"
    };
    {
      C = i(g().mark(function a5() {
        {
          var a7;
          var a8;
          var a9;
          var aa;
          var ab;
          var ac;
          var ad;
          var ae;
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
          return g().wrap(function (aP) {
            {
              for (;;) {
                switch (aP.prev = aP.next) {
                  case 0:
                    if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                      {
                        aP.next = 6;
                        break;
                      }
                    }
                    console.log("先去boxjs填写账号密码");
                    aP.next = 5;
                    return a1("先去boxjs填写账号密码");
                  case 5:
                    return aP.abrupt("return");
                  case 6:
                    aP.next = 8;
                    return Z();
                  case 8:
                    k = aP.sent;
                    a7 = j.split(" ");
                    a8 = c(a7);
                    aP.prev = 11;
                    a8.s();
                  case 13:
                    if ((a9 = a8.n()).done) {
                      {
                        aP.next = 213;
                        break;
                      }
                    }
                    ac = a9.value;
                    console.log("随机生成UA");
                    ad = Y();
                    v = ad.ua;
                    w = ad.commonUa;
                    x = ad.uuid;
                    console.log(v);
                    console.log(w);
                    r = ac.split("&")[0];
                    s = ac.split("&")[1];
                    t = ac.split("&")[2];
                    u = ac.split("&")[3] || r;
                    console.log("用户：".concat(r, "开始任务"));
                    console.log("获取sessionId");
                    aP.next = 30;
                    return J("/api/account/init");
                  case 30:
                    ae = aP.sent;
                    n = ae.data.session.id;
                    console.log(n);
                    console.log("获取signature_key");
                    aP.next = 36;
                    return D("/web/init?client_id=".concat(q));
                  case 36:
                    af = aP.sent;
                    l = af.data.client.signature_key;
                    console.log(l);
                    console.log("获取code");
                    aP.next = 42;
                    return F("/web/oauth/credential_auth");
                  case 42:
                    if (ag = aP.sent, ag.data) {
                      {
                        aP.next = 46;
                        break;
                      }
                    }
                    console.log(ag.message);
                    return aP.abrupt("continue", 211);
                  case 46:
                    ah = ag.data.authorization_code.code;
                    console.log(ah);
                    console.log("登录");
                    aP.next = 51;
                    return J("/api/zbtxz/login", "check_token=&code=".concat(ah, "&token=&type=-1&union_id="));
                  case 51:
                    ai = aP.sent;
                    console.log("登录成功");
                    p = ai.data.session.account_id;
                    n = ai.data.session.id;
                    console.log("————————————");
                    console.log("阅读抽奖");
                    console.log("获取token");
                    aP.next = 60;
                    return P("/auth/userinfo_with_account?accountId=".concat(p, "&sessionId=").concat(n));
                  case 60:
                    aj = aP.sent;
                    y = "Bearer " + aj.result.userinfo.token;
                    console.log(y);
                    console.log("获取id");
                    aP.next = 66;
                    return P("/tasks");
                  case 66:
                    if (ak = aP.sent, al = V(), z = null === (aa = ak.result[al.month][al.day]) || undefined === aa ? undefined : aa.id, z) {
                      {
                        aP.next = 72;
                        break;
                      }
                    }
                    console.log("未找到活动");
                    return aP.abrupt("continue", 211);
                  case 72:
                    if (console.log(z), null === (ab = ak.result[al.month][al.day]) || undefined === ab || !ab.is_fin) {
                      {
                        aP.next = 76;
                        break;
                      }
                    }
                    console.log("阅读已完成");
                    return aP.abrupt("continue", 211);
                  case 76:
                    console.log("开始阅读");
                    aP.next = 79;
                    return P("/news?task_id=".concat(z, "&account_id=").concat(p, "&session_id=").concat(n, "&device=").concat(x));
                  case 79:
                    am = aP.sent;
                    an = c(am.result);
                    aP.prev = 81;
                    an.s();
                  case 83:
                    if ((ao = an.n()).done) {
                      {
                        aP.next = 139;
                        break;
                      }
                    }
                    if (ap = ao.value, console.log(ap.name), !ap.is_fin) {
                      {
                        aP.next = 89;
                        break;
                      }
                    }
                    console.log("已完成");
                    return aP.abrupt("continue", 137);
                  case 89:
                    aq = ap.task_config;
                    ar = c(ap.news);
                    aP.prev = 91;
                    ar.s();
                  case 93:
                    if ((as = ar.n()).done) {
                      {
                        aP.next = 129;
                        break;
                      }
                    }
                    if (at = as.value, console.log("文章：".concat(at.title)), !aq.includes("read")) {
                      {
                        aP.next = 109;
                        break;
                      }
                    }
                    aw = String(Date.parse(new Date()) / 1000);
                    aP.next = 100;
                    return R({
                      time: aw
                    });
                  case 100:
                    if (ax = aP.sent, null !== (au = ax) && undefined !== au && au.sign) {
                      {
                        aP.next = 105;
                        break;
                      }
                    }
                    var aR = {
                      time: aw
                    };
                    aP.next = 104;
                    return R(aR);
                  case 104:
                    ax = aP.sent;
                  case 105:
                    aP.next = 107;
                    return P("/news/record?t=am&news_id=".concat(at.id, "&timestamp=").concat(aw, "&sign=").concat(null === (av = ax) || undefined === av ? undefined : av.sign, "&session_id=").concat(n, "&device=").concat(x, ")"));
                  case 107:
                    ay = aP.sent;
                    console.log("阅读：".concat(ay.msg));
                  case 109:
                    if (!aq.includes("like") && !aq.includes("vote")) {
                      {
                        aP.next = 114;
                        break;
                      }
                    }
                    aP.next = 112;
                    return J("/api/favorite/like", "action=true&id=".concat(at.news_id));
                  case 112:
                    az = aP.sent;
                    console.log("点赞：".concat(az.message));
                  case 114:
                    if (!aq.includes("share")) {
                      {
                        aP.next = 119;
                        break;
                      }
                    }
                    aP.next = 117;
                    return J("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id=".concat(at.news_id));
                  case 117:
                    aA = aP.sent;
                    console.log("分享：".concat(aA.message));
                  case 119:
                    if (!aq.includes("comment")) {
                      {
                        aP.next = 124;
                        break;
                      }
                    }
                    var aS = {
                      channel_article_id: at.news_id,
                      content: "好"
                    };
                    aP.next = 122;
                    return L("/api/comment/create/v2", aS);
                  case 122:
                    aB = aP.sent;
                    console.log("评论：".concat(aB.message));
                  case 124:
                    aP.next = 126;
                    return P("/news?task_id=".concat(z, "&account_id=").concat(p, "&session_id=").concat(n, "&device=").concat(x));
                  case 126:
                    aP.sent;
                  case 127:
                    aP.next = 93;
                    break;
                  case 129:
                    aP.next = 134;
                    break;
                  case 131:
                    aP.prev = 131;
                    aP.t0 = aP.catch(91);
                    ar.e(aP.t0);
                  case 134:
                    aP.prev = 134;
                    ar.f();
                    return aP.finish(134);
                  case 137:
                    aP.next = 83;
                    break;
                  case 139:
                    aP.next = 144;
                    break;
                  case 141:
                    aP.prev = 141;
                    aP.t1 = aP.catch(81);
                    an.e(aP.t1);
                  case 144:
                    aP.prev = 144;
                    an.f();
                    return aP.finish(144);
                  case 147:
                    aP.next = 149;
                    return P("/draw/code");
                  case 149:
                    aC = aP.sent;
                    console.log("拥有".concat(aC.result.length, "次抽奖"));
                    aD = c(aC.result);
                    aP.prev = 152;
                    aD.s();
                  case 154:
                    if ((aE = aD.n()).done) {
                      {
                        aP.next = 162;
                        break;
                      }
                    }
                    aF = aE.value;
                    aP.next = 158;
                    return N("/draw/lottery", {
                      code: aF.code
                    });
                  case 158:
                    aG = aP.sent;
                    0 == aG.result ? console.log("抽奖获得红包") : console.log("谢谢参与");
                  case 160:
                    aP.next = 154;
                    break;
                  case 162:
                    aP.next = 167;
                    break;
                  case 164:
                    aP.prev = 164;
                    aP.t2 = aP.catch(152);
                    aD.e(aP.t2);
                  case 167:
                    aP.prev = 167;
                    aD.f();
                    return aP.finish(167);
                  case 170:
                    if (console.log("开始提现"), u && t) {
                      {
                        aP.next = 174;
                        break;
                      }
                    }
                    console.log("请填写支付宝信息");
                    return aP.abrupt("continue", 211);
                  case 174:
                    aP.next = 176;
                    return P("/order/profile");
                  case 176:
                    if (aH = aP.sent, aH.result.alipay_account) {
                      {
                        aP.next = 182;
                        break;
                      }
                    }
                    var aT = {
                      order_id: 0,
                      alipay_account: u,
                      username: t
                    };
                    aP.next = 180;
                    return N("/order/bind", aT);
                  case 180:
                    aI = aP.sent;
                    console.log("绑定支付宝：".concat(aI.result));
                  case 182:
                    if (console.log("余额：".concat(aH.result.unreceived)), !(aH.result.unreceived > 0)) {
                      {
                        aP.next = 189;
                        break;
                      }
                    }
                    var aU = {
                      order_id: 0,
                      alipay_account: u,
                      username: t
                    };
                    aP.next = 186;
                    return N("/order/receive", aU);
                  case 186:
                    aJ = aP.sent;
                    console.log("提现：".concat(aJ.result));
                    aJ.msg && (m += "用户".concat(r, " 提现成功：").concat(aH.result.unreceived, "元\n"));
                  case 189:
                    aP.next = 191;
                    return H("/api/account_comment/comment_list?size=20");
                  case 191:
                    aK = aP.sent;
                    aL = c(aK.data.comment_list);
                    aP.prev = 193;
                    aL.s();
                  case 195:
                    if ((aM = aL.n()).done) {
                      {
                        aP.next = 203;
                        break;
                      }
                    }
                    aN = aM.value;
                    aP.next = 199;
                    return J("/api/comment/delete", "comment_id=".concat(aN.id));
                  case 199:
                    aO = aP.sent;
                    console.log("删除评论：".concat(aO.message));
                  case 201:
                    aP.next = 195;
                    break;
                  case 203:
                    aP.next = 208;
                    break;
                  case 205:
                    aP.prev = 205;
                    aP.t3 = aP.catch(193);
                    aL.e(aP.t3);
                  case 208:
                    aP.prev = 208;
                    aL.f();
                    return aP.finish(208);
                  case 211:
                    aP.next = 13;
                    break;
                  case 213:
                    aP.next = 218;
                    break;
                  case 215:
                    aP.prev = 215;
                    aP.t4 = aP.catch(11);
                    a8.e(aP.t4);
                  case 218:
                    aP.prev = 218;
                    a8.f();
                    return aP.finish(218);
                  case 221:
                    if (!m) {
                      {
                        aP.next = 224;
                        break;
                      }
                    }
                    aP.next = 224;
                    return a1(m);
                  case 224:
                  case "end":
                    return aP.stop();
                }
              }
            }
          }, a5, null, [[11, 215, 218, 221], [81, 141, 144, 147], [91, 131, 134, 137], [152, 164, 167, 170], [193, 205, 208, 211]]);
        }
      }));
      return C.apply(this, arguments);
    }
  }
  function D(a3) {
    {
      return E.apply(this, arguments);
    }
  }
  function E() {
    var a3 = {
      fjTop: function (a4, a5) {
        return a4(a5);
      },
      OZsrN: "CwWXL",
      grBZS: function (a4, a5) {
        return a4 === a5;
      },
      bcAOy: function (a4, a5) {
        return a4 !== a5;
      },
      GyNMi: "KVImJ",
      ndrFj: "throw",
      smqUK: "tNXlO",
      TyupP: function (a4, a5) {
        return a4(a5);
      },
      DyMrx: function (a4) {
        return a4();
      },
      QAAjH: "end"
    };
    E = i(g().mark(function a4(a5) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a9) {
                var aa = {
                  url: "https://passport.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": W(),
                    "Accept-Encoding": "gzip",
                    "user-agent": v
                  }
                };
                $.get(aa, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    {
                      return g().wrap(function (ai) {
                        {
                          for (;;) {
                            switch (ai.prev = ai.next) {
                              case 0:
                                try {
                                  {
                                    ae ? (console.log("".concat(JSON.stringify(ae))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a9(JSON.parse(ag));
                                  }
                                } catch (am) {
                                  {
                                    $.logErr(am, af);
                                  }
                                } finally {
                                  {
                                    a9();
                                  }
                                }
                              case 1:
                              case "end":
                                return ai.stop();
                            }
                          }
                        }
                      }, ad);
                    }
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
    return E.apply(this, arguments);
  }
  function F(a3) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function a4(a5) {
      var a7;
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              a7 = T();
              return a8.abrupt("return", new Promise(function (a9) {
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
                              af ? (console.log("".concat(JSON.stringify(af))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a9(JSON.parse(ah));
                            } catch (aj) {
                              $.logErr(aj, ag);
                            } finally {
                              a9();
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
    return G.apply(this, arguments);
  }
  function H(a3) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a4(a5) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = U(a5);
              return a9.abrupt("return", new Promise(function (ab) {
                var ac = {
                  url: "https://vapp.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a8.time,
                    "X-SESSION-ID": n,
                    "X-REQUEST-ID": a8.uuid,
                    "X-SIGNATURE": a8.signature,
                    "X-TENANT-ID": o,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  }
                };
                $.get(ac, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (aj) {
                      for (;;) {
                        switch (aj.prev = aj.next) {
                          case 0:
                            if (aj.prev = 0, !ag) {
                              aj.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ag)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aj.next = 9;
                            break;
                          case 6:
                            aj.next = 8;
                            return $.wait(2000);
                          case 8:
                            ab(JSON.parse(ai));
                          case 9:
                            aj.next = 14;
                            break;
                          case 11:
                            aj.prev = 11;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ah);
                          case 14:
                            aj.prev = 14;
                            ab();
                            return aj.finish(14);
                          case 17:
                          case "end":
                            return aj.stop();
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
              return a9.stop();
          }
        }
      }, a4);
    }));
    return I.apply(this, arguments);
  }
  function J(a3, a4) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a4(a5, a6) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = U(a5);
              return a9.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://vapp.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a8.time,
                    "X-SESSION-ID": n,
                    "X-REQUEST-ID": a8.uuid,
                    "X-SIGNATURE": a8.signature,
                    "X-TENANT-ID": o,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded",
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
    return K.apply(this, arguments);
  }
  function L(a3, a4) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a4(a5, a6) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = U(a5);
              return a9.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://vapp.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a8.time,
                    "X-SESSION-ID": n,
                    "X-REQUEST-ID": a8.uuid,
                    "X-SIGNATURE": a8.signature,
                    "X-TENANT-ID": o,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/json; charset=utf-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": w
                  },
                  body: JSON.stringify(a6)
                };
                $.post(ac, function () {
                  var ae = i(g().mark(function af(ag, ah, ai) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ag) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ag)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            aa(JSON.parse(ai));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, ah);
                          case 14:
                            al.prev = 14;
                            aa();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
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
              return a9.stop();
          }
        }
      }, a4);
    }));
    return M.apply(this, arguments);
  }
  function N(a3, a4) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a4(a5, a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (a9) {
                var ab = {
                  url: "https://yuedulanxi.lxnews.cn/api".concat(a5),
                  headers: {
                    Connection: "keep-alive",
                    Authorization: y,
                    accept: "*/*",
                    "content-type": "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_lanjingling;xsb_lanjingling;2.0.9;native_app;6.9.0",
                    "x-requested-with": "com.shixian.lanxi",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(a6)
                };
                $.post(ab, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !ae) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ae)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 9;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            a9(JSON.parse(ag));
                          case 9:
                            ai.next = 14;
                            break;
                          case 11:
                            ai.prev = 11;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, af);
                          case 14:
                            ai.prev = 14;
                            a9();
                            return ai.finish(14);
                          case 17:
                          case "end":
                            return ai.stop();
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
              return a8.stop();
          }
        }
      }, a4);
    }));
    return O.apply(this, arguments);
  }
  function P(a3) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function a4(a5) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a8) {
                var aa = {
                  url: "https://yuedulanxi.lxnews.cn/api".concat(a5),
                  headers: {
                    Connection: "keep-alive",
                    Authorization: y,
                    accept: "*/*",
                    "content-type": "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_lanjingling;xsb_lanjingling;2.0.9;native_app;6.9.0",
                    "x-requested-with": "com.shixian.lanxi",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(aa, function () {
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
                            a8(JSON.parse(ag));
                          case 9:
                            ah.next = 14;
                            break;
                          case 11:
                            ah.prev = 11;
                            ah.t0 = ah.catch(0);
                            $.logErr(ah.t0, af);
                          case 14:
                            ah.prev = 14;
                            a8();
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
    return Q.apply(this, arguments);
  }
  function R(a3) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function a4(a5) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a9) {
                var ab = {
                  "Content-Type": "application/json"
                };
                var ac = {
                  url: "https://lanjingling.xzxxn7.live/md5",
                  headers: ab,
                  body: JSON.stringify(a5)
                };
                $.post(ac, function (ad, ae, af) {
                  try {
                    ad ? (console.log("".concat(JSON.stringify(ad))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a9(JSON.parse(af));
                  } catch (ag) {
                    $.logErr(ag, ae);
                  } finally {
                    a9();
                  }
                });
              }));
            case 1:
            case "end":
              return a6.stop();
          }
        }
      }, a4);
    }));
    return S.apply(this, arguments);
  }
  function T() {
    var a3 = new (k.loadJSEncrypt())();
    a3.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    s = a3.encrypt(s);
    var a4 = W();
    var a5 = "client_id=".concat(q, "&password=").concat(s, "&phone_number=").concat(r);
    var a6 = "post%%/web/oauth/credential_auth?".concat(a5, "%%").concat(a4, "%%");
    a5 = "client_id=".concat(q, "&password=").concat(encodeURIComponent(s), "&phone_number=").concat(r);
    CryptoJS = k.createCryptoJS();
    var a7 = CryptoJS.HmacSHA256(a6, l);
    var a8 = CryptoJS.enc.Hex.stringify(a7);
    var a9 = {
      uuid: a4,
      signature: a8,
      body: a5
    };
    return a9;
  }
  function U(a3) {
    var a4 = W();
    var a5 = Date.now();
    a3.indexOf("?") > 0 && (a3 = a3.substring(0, a3.indexOf("?")));
    CryptoJS = k.createCryptoJS();
    var a6 = CryptoJS.SHA256("".concat(a3, "&&").concat(n, "&&").concat(a4, "&&").concat(a5, "&&").concat(A, "&&").concat(o)).toString();
    var a7 = {
      uuid: a4,
      time: a5,
      signature: a6
    };
    return a7;
  }
  function V() {
    var a3 = new Date();
    var a4 = a3.getFullYear();
    var a5 = String(a3.getMonth() + 1).padStart(2, "0");
    var a6 = String(a3.getDate()).padStart(2, "0");
    return {
      month: "".concat(a4, "-").concat(a5),
      day: "".concat(a4, "-").concat(a5, "-").concat(a6)
    };
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
    var a3 = "1.1.9";
    var a4 = W();
    var a5 = X(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var a6 = "Xiaomi " + a5;
    var a7 = "Android";
    var a8 = "".concat(a7.toUpperCase(), ";").concat("11", ";").concat(q, ";").concat(a3, ";1.0;null;").concat(a5);
    var a9 = "".concat(a3, ";").concat(a4, ";").concat(a6, ";").concat(a7, ";").concat("11", ";").concat("Release", ";").concat("6.11.0");
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
    a0 = i(g().mark(function a3() {
      var a5;
      return g().wrap(function a6(a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              if (a5 = $.getdata("Utils_Code") || "", !a5 || !Object.keys(a5).length) {
                a7.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a5);
              return a7.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return a7.abrupt("return", new Promise(function () {
                var aa = i(g().mark(function ab(ac) {
                  return g().wrap(function ad(ae) {
                    for (;;) {
                      switch (ae.prev = ae.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ag) {
                            $.setdata(ag, "Utils_Code");
                            eval(ag);
                            console.log("✅ Utils加载成功, 请继续");
                            ac(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ae.stop();
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
              return a7.stop();
          }
        }
      }, a3);
    }));
    return a0.apply(this, arguments);
  }
  function a1(a3) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function a4(a5) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              if (!$.isNode()) {
                a6.next = 5;
                break;
              }
              a6.next = 3;
              return notify.sendNotify($.name, a5);
            case 3:
              a6.next = 6;
              break;
            case 5:
              $.msg($.name, "", a5);
            case 6:
            case "end":
              return a6.stop();
          }
        }
      }, a4);
    }));
    return a2.apply(this, arguments);
  }
  i(g().mark(function a3() {
    return g().wrap(function (a5) {
      for (;;) {
        switch (a5.prev = a5.next) {
          case 0:
            a5.next = 2;
            return B();
          case 2:
          case "end":
            return a5.stop();
        }
      }
    }, a3);
  }))().catch(function (a4) {
    $.log(a4);
  }).finally(function () {
    $.done({});
  });
})();