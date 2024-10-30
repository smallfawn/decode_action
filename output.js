//Wed Oct 30 2024 05:18:32 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(C) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (E) {
        return typeof E;
      } : function (E) {
        {
          return E && "function" == typeof Symbol && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E;
        }
      };
      return b(C);
    }
  }
  function c(C, D) {
    {
      var F = "undefined" != typeof Symbol && C[Symbol.iterator] || C["@@iterator"];
      if (!F) {
        {
          if (Array.isArray(C) || (F = d(C)) || D && C && "number" == typeof C.length) {
            {
              F && (C = F);
              var G = 0;
              var H = function () {};
              return {
                s: H,
                n: function () {
                  {
                    var L = {
                      done: true
                    };
                    return G >= C.length ? L : {
                      done: false,
                      value: C[G++]
                    };
                  }
                },
                e: function (L) {
                  {
                    throw L;
                  }
                },
                f: H
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var I;
      var J = true;
      var K = false;
      return {
        s: function () {
          {
            F = F.call(C);
          }
        },
        n: function () {
          {
            var N = F.next();
            J = N.done;
            return N;
          }
        },
        e: function (N) {
          {
            K = true;
            I = N;
          }
        },
        f: function () {
          {
            try {
              {
                J || null == F.return || F.return();
              }
            } finally {
              {
                if (K) {
                  throw I;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(C, D) {
    {
      if (C) {
        {
          if ("string" == typeof C) {
            return f(C, D);
          }
          var E = {}.toString.call(C).slice(8, -1);
          "Object" === E && C.constructor && (E = C.constructor.name);
          return "Map" === E || "Set" === E ? Array.from(C) : "Arguments" === E || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E) ? f(C, D) : undefined;
        }
      }
    }
  }
  function f(C, D) {
    {
      (null == D || D > C.length) && (D = C.length);
      for (var E = 0, F = Array(D); E < D; E++) {
        F[E] = C[E];
      }
      return F;
    }
  }
  function g() {
    "use strict";

    var C = {
      JoUdl: "rNXMK",
      lHOcd: function (ag) {
        return ag();
      },
      HrGFF: function (ag, ah) {
        return ag === ah;
      },
      rJxRF: "BHNLk",
      MqSQE: "uSEbR",
      GyXxh: function (ag, ah) {
        return ag < ah;
      },
      pcJsI: function (ag, ah) {
        return ag - ah;
      },
      iVYlX: function (ag, ah) {
        return ag >= ah;
      },
      CUWyx: function (ag, ah) {
        return ag(ah);
      },
      NQbcy: "rELeu",
      dpMzb: "rPpgI",
      HfQnI: function (ag, ah, ai, aj) {
        return ag(ah, ai, aj);
      },
      gaRQd: "_invoke",
      nzTks: function (ag, ah, ai, aj) {
        return ag(ah, ai, aj);
      },
      insbe: "throw",
      vFAwf: "return",
      GVsOY: function (ag) {
        return ag();
      },
      ghxym: "end",
      FEQOg: "XQeVC",
      JgotL: function (ag, ah) {
        return ag === ah;
      },
      ZqYmh: "otReD",
      jUQCo: "normal",
      rjnqQ: "RzejI",
      JnYyO: "QrtzV",
      rINCP: "function",
      bkYGK: "vCPDQ",
      LIryG: "uqqnS",
      LxxXI: function (ag, ah, ai, aj, ak) {
        return ag(ah, ai, aj, ak);
      },
      WVRZg: "OmdZM",
      EHFcf: function (ag, ah) {
        return ag !== ah;
      },
      pqUjJ: "fXsMP",
      FXxWg: function (ag) {
        return ag();
      },
      ysUmn: "ZkAAk",
      LVdyl: "ncUYb",
      lUbBM: "3|5|4|1|0|2",
      SHXFu: "next",
      lxkLR: "iterator result is not an object",
      teaRX: function (ag, ah, ai) {
        return ag(ah, ai);
      },
      yovMN: "The iterator does not provide a '",
      pWSQn: "KNUUv",
      pVVyc: function (ag, ah) {
        return ag in ah;
      },
      zlHvb: function (ag, ah) {
        return ag in ah;
      },
      BGMrA: "finallyLoc",
      wbMou: function (ag, ah) {
        return ag && ah;
      },
      TOQOu: function (ag, ah) {
        return ag < ah;
      },
      OmeGu: "qvZzA",
      rShCl: function (ag, ah) {
        return ag == ah;
      },
      kgSfm: "string",
      SqVNG: function (ag, ah, ai) {
        return ag(ah, ai);
      },
      gMqBp: "Object",
      DpHPn: "Map",
      KiNpZ: "Set",
      rVxfn: "Arguments",
      EhALk: "cQrFY",
      IITht: "root",
      AffoA: function (ag, ah) {
        return ag(ah);
      },
      WDxGH: "✅ Utils加载成功, 请继续",
      ssgys: function (ag, ah) {
        return ag !== ah;
      },
      UByJs: "IZflX",
      BgcVK: function (ag, ah, ai, aj) {
        return ag(ah, ai, aj);
      },
      YACXk: "jXGhl",
      lxKMS: function (ag, ah) {
        return ag > ah;
      },
      PsveZ: function (ag, ah) {
        return ag < ah;
      },
      FpSBP: "QcyGt",
      NSGSj: function (ag, ah) {
        return ag !== ah;
      },
      tOoRw: "NUtoJ",
      ZGenB: function (ag, ah, ai, aj, ak) {
        return ag(ah, ai, aj, ak);
      },
      DuVdm: function (ag, ah) {
        return ag(ah);
      },
      wIgzz: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
      PefkS: function (ag, ah) {
        return ag === ah;
      },
      dDuOW: function (ag, ah) {
        return ag(ah);
      },
      ccpQU: "pTRLS",
      WsNie: "[object Generator]",
      ploHv: function (ag, ah) {
        return ag === ah;
      },
      lmCKn: "symbol",
      aCgkx: function (ag, ah) {
        return ag(ah);
      },
      pOpmj: function (ag, ah) {
        return ag < ah;
      },
      XCHkW: "Potbu",
      vGYmZ: "WbCrg",
      fDdqC: function (ag, ah) {
        return ag !== ah;
      },
      AKMHT: "kEoGn",
      mmDRp: function (ag, ah) {
        return ag(ah);
      },
      ZcbXQ: "OomHt",
      GFWsi: "dIlRs",
      eiDxJ: "TDhON",
      QKzET: function (ag, ah) {
        return ag < ah;
      },
      vOBYG: "bNaiW",
      pmkDo: "gbfYF",
      Dxuto: function (ag, ah) {
        return ag === ah;
      },
      CMmRX: "break",
      voYSj: function (ag, ah) {
        return ag === ah;
      },
      qmZNp: function (ag, ah) {
        return ag <= ah;
      },
      PRpko: function (ag, ah) {
        return ag === ah;
      },
      OhrMf: function (ag, ah, ai, aj) {
        return ag(ah, ai, aj);
      },
      daWyR: "GeneratorFunction",
      liBvV: "xvevx",
      ryZqu: function (ag, ah) {
        return ag >= ah;
      },
      ZybVC: "ScGdz",
      ERRgZ: "fvRGY",
      hmBDJ: function (ag, ah) {
        return ag === ah;
      },
      TnbIe: function (ag, ah) {
        return ag === ah;
      },
      emmSr: "continue",
      ZMtJy: "YKHfs",
      rFWGh: "lChkh",
      yzVBA: function (ag, ah) {
        return ag - ah;
      },
      jYPmj: "tFiUa",
      CUbXt: "qzEuK",
      nYbgH: "dCsuK",
      upGPV: "VMUZH",
      uGiIq: function (ag, ah) {
        return ag === ah;
      },
      RVMjr: "bzWHn",
      JaPLI: "PbVXX",
      BKPtO: function (ag, ah) {
        return ag(ah);
      },
      iEOjq: "illegal catch attempt",
      vpBnE: "hCsMb"
    };
    g = function () {
      {
        return F;
      }
    };
    var D;
    var F = {};
    var H = Object.prototype;
    var I = H.hasOwnProperty;
    var J = Object.defineProperty || function (ag, ah, ai) {
      ag[ah] = ai.value;
    };
    var K = "function" == typeof Symbol ? Symbol : {};
    var M = K.iterator || "@@iterator";
    var N = K.asyncIterator || "@@asyncIterator";
    var Q = K.toStringTag || "@@toStringTag";
    function R(ag, ah, ai) {
      {
        var aj = {
          value: ai,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(ag, ah, aj);
        return ag[ah];
      }
    }
    try {
      {
        R({}, "");
      }
    } catch (ah) {
      R = function (aj, ak, al) {
        {
          return aj[ak] = al;
        }
      };
    }
    function U(aj, ak, al, am) {
      {
        var ao = ak && ak.prototype instanceof a1 ? ak : a1;
        var ap = Object.create(ao.prototype);
        var aq = new ae(am || []);
        J(ap, "_invoke", {
          value: aa(aj, al, aq)
        });
        return ap;
      }
    }
    function V(aj, ak, al) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aj.call(ak, al)
            };
          }
        } catch (aq) {
          {
            var an = {
              type: "throw",
              arg: aq
            };
            return an;
          }
        }
      }
    }
    F.wrap = U;
    var W = "suspendedStart";
    var X = "suspendedYield";
    var Y = "executing";
    var Z = "completed";
    var a0 = {};
    function a1() {}
    function a2() {}
    function a3() {}
    var a4 = {};
    R(a4, M, function () {
      return this;
    });
    var a5 = Object.getPrototypeOf;
    var a6 = a5 && a5(a5(af([])));
    a6 && a6 !== H && I.call(a6, M) && (a4 = a6);
    a3.prototype = a1.prototype = Object.create(a4);
    var a7 = a3.prototype;
    function a8(aj) {
      {
        ["next", "throw", "return"].forEach(function (al) {
          {
            R(aj, al, function (an) {
              {
                return this._invoke(al, an);
              }
            });
          }
        });
      }
    }
    function a9(aj, ak) {
      var al = {
        viyKI: function (an, ao) {
          return an < ao;
        },
        HnhsE: function (an, ao) {
          return an == ao;
        },
        YbiUt: "function",
        HZdGh: function (an, ao) {
          return an(ao);
        },
        pfBId: "aUhPj",
        RWMem: "dfdiW",
        zNCwp: "throw",
        cFpUB: "normal",
        BuGPW: function (an, ao) {
          return an === ao;
        },
        oqiMB: function (an, ao) {
          return an === ao;
        },
        atxGG: "return",
        uOlzu: function (an, ao) {
          return an !== ao;
        },
        tDFss: "fvvmv",
        ZKCYu: function (an, ao, ap, aq, ar) {
          return an(ao, ap, aq, ar);
        },
        ZXZXh: "xlIAW",
        FCkyB: function (an, ao) {
          return an !== ao;
        },
        ezUtA: function (an, ao) {
          return an === ao;
        },
        xcgCd: "LZPrI",
        IFJGi: "object",
        iiHTr: "__await",
        iMwpt: function (an, ao) {
          return an(ao);
        }
      };
      {
        function an(ao, ap, aq, ar) {
          {
            var at = V(aj[ao], aj, ap);
            if ("throw" !== at.type) {
              {
                var au = at.arg;
                var av = au.value;
                return av && "object" == b(av) && I.call(av, "__await") ? ak.resolve(av.__await).then(function (ax) {
                  {
                    an("next", ax, aq, ar);
                  }
                }, function (ax) {
                  {
                    an("throw", ax, aq, ar);
                  }
                }) : ak.resolve(av).then(function (ax) {
                  au.value = ax;
                  aq(au);
                }, function (ax) {
                  {
                    return an("throw", ax, aq, ar);
                  }
                });
              }
            }
            ar(at.arg);
          }
        }
        var am;
        J(this, "_invoke", {
          value: function (ao, ap) {
            {
              function as() {
                {
                  return new ak(function (av, aw) {
                    {
                      an(ao, ap, av, aw);
                    }
                  });
                }
              }
              return am = am ? am.then(as, as) : as();
            }
          }
        });
      }
    }
    function aa(aj, ak, al) {
      {
        var an = W;
        return function (ao, ap) {
          {
            if (an === Y) {
              throw Error("Generator is already running");
            }
            if (an === Z) {
              if ("throw" === ao) {
                throw ap;
              }
              var ar = {
                value: D,
                done: true
              };
              return ar;
            }
            for (al.method = ao, al.arg = ap;;) {
              {
                var as = al.delegate;
                if (as) {
                  {
                    var at = ab(as, al);
                    if (at) {
                      {
                        if (at === a0) {
                          continue;
                        }
                        return at;
                      }
                    }
                  }
                }
                if ("next" === al.method) {
                  al.sent = al._sent = al.arg;
                } else {
                  if ("throw" === al.method) {
                    {
                      if (an === W) {
                        throw an = Z, al.arg;
                      }
                      al.dispatchException(al.arg);
                    }
                  } else {
                    "return" === al.method && al.abrupt("return", al.arg);
                  }
                }
                an = Y;
                var au = V(aj, ak, al);
                if ("normal" === au.type) {
                  {
                    if (an = al.done ? Z : X, au.arg === a0) {
                      continue;
                    }
                    var av = {
                      value: au.arg,
                      done: al.done
                    };
                    return av;
                  }
                }
                "throw" === au.type && (an = Z, al.method = "throw", al.arg = au.arg);
              }
            }
          }
        };
      }
    }
    function ab(aj, ak) {
      {
        var ao = ak.method;
        var ap = aj.iterator[ao];
        if (ap === D) {
          ak.delegate = null;
          "throw" === ao && aj.iterator.return && (ak.method = "return", ak.arg = D, ab(aj, ak), "throw" === ak.method) || "return" !== ao && (ak.method = "throw", ak.arg = new TypeError("The iterator does not provide a '" + ao + "' method"));
          return a0;
        }
        var aq = V(ap, aj.iterator, ak.arg);
        if ("throw" === aq.type) {
          ak.method = "throw";
          ak.arg = aq.arg;
          ak.delegate = null;
          return a0;
        }
        var an = aq.arg;
        return an ? an.done ? (ak[aj.resultName] = an.value, ak.next = aj.nextLoc, "return" !== ak.method && (ak.method = "next", ak.arg = D), ak.delegate = null, a0) : an : (ak.method = "throw", ak.arg = new TypeError("iterator result is not an object"), ak.delegate = null, a0);
      }
    }
    function ac(aj) {
      {
        var al = {
          tryLoc: aj[0]
        };
        1 in aj && (al.catchLoc = aj[1]);
        2 in aj && (al.finallyLoc = aj[2], al.afterLoc = aj[3]);
        this.tryEntries.push(al);
      }
    }
    function ad(aj) {
      {
        var al = aj.completion || {};
        al.type = "normal";
        delete al.arg;
        aj.completion = al;
      }
    }
    function ae(aj) {
      {
        var ak = {
          tryLoc: "root"
        };
        this.tryEntries = [ak];
        aj.forEach(ac, this);
        this.reset(true);
      }
    }
    function af(aj) {
      {
        if (aj || "" === aj) {
          {
            var al = aj[M];
            if (al) {
              return al.call(aj);
            }
            if ("function" == typeof aj.next) {
              return aj;
            }
            if (!isNaN(aj.length)) {
              {
                var am = -1;
                var an = function ap() {
                  {
                    for (; ++am < aj.length;) {
                      if (I.call(aj, am)) {
                        ap.value = aj[am];
                        ap.done = false;
                        return ap;
                      }
                    }
                    ap.value = D;
                    ap.done = true;
                    return ap;
                  }
                };
                return an.next = an;
              }
            }
          }
        }
        throw new TypeError(b(aj) + " is not iterable");
      }
    }
    a2.prototype = a3;
    J(a7, "constructor", {
      value: a3,
      configurable: true
    });
    J(a3, "constructor", {
      value: a2,
      configurable: true
    });
    a2.displayName = R(a3, Q, "GeneratorFunction");
    F.isGeneratorFunction = function (aj) {
      {
        var ak = "function" == typeof aj && aj.constructor;
        return !!ak && (ak === a2 || "GeneratorFunction" === (ak.displayName || ak.name));
      }
    };
    F.mark = function (aj) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aj, a3) : (aj.__proto__ = a3, R(aj, Q, "GeneratorFunction"));
        aj.prototype = Object.create(a7);
        return aj;
      }
    };
    F.awrap = function (aj) {
      {
        var al = {
          __await: aj
        };
        return al;
      }
    };
    a8(a9.prototype);
    R(a9.prototype, N, function () {
      {
        return this;
      }
    });
    F.AsyncIterator = a9;
    F.async = function (aj, ak, al, am, an) {
      {
        undefined === an && (an = Promise);
        var ap = new a9(U(aj, ak, al, am), an);
        return F.isGeneratorFunction(ak) ? ap : ap.next().then(function (aq) {
          {
            return aq.done ? aq.value : ap.next();
          }
        });
      }
    };
    a8(a7);
    R(a7, Q, "Generator");
    R(a7, M, function () {
      {
        return this;
      }
    });
    R(a7, "toString", function () {
      return "[object Generator]";
    });
    F.keys = function (aj) {
      {
        var al = Object(aj);
        var am = [];
        for (var an in al) am.push(an);
        am.reverse();
        return function ap() {
          {
            for (; am.length;) {
              {
                var ar = am.pop();
                if (ar in al) {
                  ap.value = ar;
                  ap.done = false;
                  return ap;
                }
              }
            }
            ap.done = true;
            return ap;
          }
        };
      }
    };
    F.values = af;
    ae.prototype = {
      constructor: ae,
      reset: function (aj) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = D, this.done = false, this.delegate = null, this.method = "next", this.arg = D, this.tryEntries.forEach(ad), !aj) {
            for (var ak in this) "t" === ak.charAt(0) && I.call(this, ak) && !isNaN(+ak.slice(1)) && (this[ak] = D);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aj = this.tryEntries[0].completion;
          if ("throw" === aj.type) {
            throw aj.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aj) {
        {
          if (this.done) {
            throw aj;
          }
          var al = this;
          function as(at, au) {
            ao.type = "throw";
            ao.arg = aj;
            al.next = at;
            au && (al.method = "next", al.arg = D);
            return !!au;
          }
          for (var am = this.tryEntries.length - 1; am >= 0; --am) {
            {
              var an = this.tryEntries[am];
              var ao = an.completion;
              if ("root" === an.tryLoc) {
                return as("end");
              }
              if (an.tryLoc <= this.prev) {
                {
                  var ap = I.call(an, "catchLoc");
                  var aq = I.call(an, "finallyLoc");
                  if (ap && aq) {
                    {
                      if (this.prev < an.catchLoc) {
                        return as(an.catchLoc, true);
                      }
                      if (this.prev < an.finallyLoc) {
                        return as(an.finallyLoc);
                      }
                    }
                  } else {
                    if (ap) {
                      {
                        if (this.prev < an.catchLoc) {
                          return as(an.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aq) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < an.finallyLoc) {
                          return as(an.finallyLoc);
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
      abrupt: function (aj, ak) {
        {
          for (var am = this.tryEntries.length - 1; am >= 0; --am) {
            {
              var an = this.tryEntries[am];
              if (an.tryLoc <= this.prev && I.call(an, "finallyLoc") && this.prev < an.finallyLoc) {
                {
                  var ao = an;
                  break;
                }
              }
            }
          }
          ao && ("break" === aj || "continue" === aj) && ao.tryLoc <= ak && ak <= ao.finallyLoc && (ao = null);
          var ap = ao ? ao.completion : {};
          ap.type = aj;
          ap.arg = ak;
          return ao ? (this.method = "next", this.next = ao.finallyLoc, a0) : this.complete(ap);
        }
      },
      complete: function (aj, ak) {
        {
          if ("throw" === aj.type) {
            throw aj.arg;
          }
          "break" === aj.type || "continue" === aj.type ? this.next = aj.arg : "return" === aj.type ? (this.rval = this.arg = aj.arg, this.method = "return", this.next = "end") : "normal" === aj.type && ak && (this.next = ak);
          return a0;
        }
      },
      finish: function (aj) {
        {
          for (var ak = this.tryEntries.length - 1; ak >= 0; --ak) {
            {
              var al = this.tryEntries[ak];
              if (al.finallyLoc === aj) {
                this.complete(al.completion, al.afterLoc);
                ad(al);
                return a0;
              }
            }
          }
        }
      },
      catch: function (aj) {
        {
          for (var al = this.tryEntries.length - 1; al >= 0; --al) {
            {
              var am = this.tryEntries[al];
              if (am.tryLoc === aj) {
                {
                  var an = am.completion;
                  if ("throw" === an.type) {
                    {
                      var ao = an.arg;
                      ad(am);
                    }
                  }
                  return ao;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aj, ak, al) {
        {
          this.delegate = {
            iterator: af(aj),
            resultName: ak,
            nextLoc: al
          };
          "next" === this.method && (this.arg = D);
          return a0;
        }
      }
    };
    return F;
  }
  function h(C, D, E, F, G, H, I) {
    {
      try {
        {
          var K = C[H](I);
          var L = K.value;
        }
      } catch (O) {
        {
          return void E(O);
        }
      }
      K.done ? D(L) : Promise.resolve(L).then(F, G);
    }
  }
  function i(C) {
    return function () {
      var E = this;
      var F = arguments;
      return new Promise(function (G, H) {
        var I = C.apply(E, F);
        function J(L) {
          {
            h(I, G, H, J, K, "next", L);
          }
        }
        function K(L) {
          {
            h(I, G, H, J, K, "throw", L);
          }
        }
        J(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.AiLuQiao : $.getdata("AiLuQiao")) || "";
  var k = undefined;
  var l = "";
  var m = "";
  var n = "";
  var o = "";
  var p = "";
  function q() {
    {
      return r.apply(this, arguments);
    }
  }
  function r() {
    r = i(g().mark(function D() {
      var V;
      var W;
      var X;
      var Y;
      var Z;
      var a0;
      var a1;
      var a2;
      var a3;
      var a4;
      var a5;
      var a6;
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
      return g().wrap(function (aF) {
        for (;;) {
          switch (aF.prev = aF.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                aF.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              aF.next = 5;
              return A("先去boxjs填写账号密码");
            case 5:
              return aF.abrupt("return");
            case 6:
              aF.next = 8;
              return y();
            case 8:
              k = aF.sent;
              V = j.split(" ");
              W = c(V);
              aF.prev = 11;
              W.s();
            case 13:
              if ((X = W.n()).done) {
                aF.next = 203;
                break;
              }
              if (Y = X.value, l = Y, console.log("用户：".concat(l, "开始任务")), console.log("阅读抽奖"), n) {
                aF.next = 25;
                break;
              }
              console.log("获取cid");
              aF.next = 22;
              return s("/myinfo?uid=".concat(l));
            case 22:
              Z = aF.sent;
              n = Z.data.cid;
              console.log(n);
            case 25:
              console.log("获取tid");
              aF.next = 28;
              return s("/system_settings");
            case 28:
              a0 = aF.sent;
              a1 = c(a0);
              aF.prev = 30;
              a1.s();
            case 32:
              if ((a2 = a1.n()).done) {
                aF.next = 44;
                break;
              }
              if (a3 = a2.value, "浮窗" != a3.key) {
                aF.next = 42;
                break;
              }
              for (a4 = a3.url.split("?")[1], a5 = {}, a6 = a4.split("&"), a7 = 0, a8 = a6.length; a7 < a8; a7++) {
                a9 = a6[a7].split("=");
                a5[a9[0]] = a9[1];
              }
              m = a5.id;
              console.log(m);
              return aF.abrupt("break", 44);
            case 42:
              aF.next = 32;
              break;
            case 44:
              aF.next = 49;
              break;
            case 46:
              aF.prev = 46;
              aF.t0 = aF.catch(30);
              a1.e(aF.t0);
            case 49:
              aF.prev = 49;
              a1.f();
              return aF.finish(49);
            case 52:
              if (!m || !n) {
                aF.next = 113;
                break;
              }
              aF.next = 55;
              return s("/red_activity?tid=".concat(m, "&uid=").concat(l, "&cid=").concat(n));
            case 55:
              aa = aF.sent;
              ab = c(aa.data);
              aF.prev = 57;
              ab.s();
            case 59:
              if ((ac = ab.n()).done) {
                aF.next = 90;
                break;
              }
              ad = ac.value;
              console.log(ad.title);
              aF.next = 64;
              return s("/red_news?red_id=".concat(ad.id, "&uid=").concat(l, "&tid=").concat(m, "&cid=").concat(n));
            case 64:
              ae = aF.sent;
              af = c(ae.data);
              aF.prev = 66;
              af.s();
            case 68:
              if ((ag = af.n()).done) {
                aF.next = 80;
                break;
              }
              if (ah = ag.value, console.log("文章：".concat(ah.title)), 1 != ah.task) {
                aF.next = 74;
                break;
              }
              console.log("已阅读");
              return aF.abrupt("continue", 78);
            case 74:
              aF.next = 76;
              return s("/red_news_record?newsId=".concat(ah.newsId, "&uid=").concat(l));
            case 76:
              ai = aF.sent;
              1 == ai.status ? console.log("阅读成功") : console.log(ai.msg);
            case 78:
              aF.next = 68;
              break;
            case 80:
              aF.next = 85;
              break;
            case 82:
              aF.prev = 82;
              aF.t1 = aF.catch(66);
              af.e(aF.t1);
            case 85:
              aF.prev = 85;
              af.f();
              return aF.finish(85);
            case 88:
              aF.next = 59;
              break;
            case 90:
              aF.next = 95;
              break;
            case 92:
              aF.prev = 92;
              aF.t2 = aF.catch(57);
              ab.e(aF.t2);
            case 95:
              aF.prev = 95;
              ab.f();
              return aF.finish(95);
            case 98:
              aF.next = 100;
              return s("/luck_chance_get?uid=".concat(l, "&tid=").concat(m));
            case 100:
              aj = aF.sent;
              console.log("剩余抽奖次数：".concat(aj.chance));
              ak = 0;
            case 103:
              if (!(ak < aj.chance)) {
                aF.next = 111;
                break;
              }
              aF.next = 106;
              return s("/red_luck?uid=".concat(l, "&tid=").concat(m, "&cid=").concat(n));
            case 106:
              al = aF.sent;
              1 == al.status ? (console.log("抽奖获得：".concat(al.data.prize)), p += "用户：".concat(l, " 抽奖获得：").concat(al.data.prize, "\n")) : console.log(al.msg);
            case 108:
              ak++;
              aF.next = 103;
              break;
            case 111:
              aF.next = 114;
              break;
            case 113:
              console.log("获取tid或cid失败");
            case 114:
              console.log("————————————");
              console.log("开始任务");
              console.log("开始签到");
              aF.next = 119;
              return s("/mysign?uid=".concat(l));
            case 119:
              am = aF.sent;
              1 == am.status ? console.log("签到成功") : console.log(am.msg);
              an = true;
              ao = true;
              ap = true;
              aF.next = 126;
              return s("/integral_rule?uid=".concat(l));
            case 126:
              aq = aF.sent;
              ar = c(aq.info);
              aF.prev = 128;
              ar.s();
            case 130:
              if ((as = ar.n()).done) {
                aF.next = 142;
                break;
              }
              if (at = as.value, console.log("任务：".concat(at.name)), 1 != at.status) {
                aF.next = 136;
                break;
              }
              console.log("任务已完成");
              return aF.abrupt("continue", 140);
            case 136:
              console.log("任务进度：".concat(at.n1, "/").concat(at.n2));
              "阅读新闻" == at.name && (an = false);
              "点赞新闻" == at.name && (ao = false);
              "转发新闻" == at.name && (ap = false);
            case 140:
              aF.next = 130;
              break;
            case 142:
              aF.next = 147;
              break;
            case 144:
              aF.prev = 144;
              aF.t3 = aF.catch(128);
              ar.e(aF.t3);
            case 147:
              aF.prev = 147;
              ar.f();
              return aF.finish(147);
            case 150:
              if (an && ao && ap) {
                aF.next = 194;
                break;
              }
              aF.next = 153;
              return s("/news?columnId=1&page=0&limit=10&time=".concat(x(), "&uid=").concat(l));
            case 153:
              au = aF.sent;
              av = c(au.data);
              aF.prev = 155;
              av.s();
            case 157:
              if ((aw = av.n()).done) {
                aF.next = 186;
                break;
              }
              if (ax = aw.value, ay = ax.newsid, console.log("文章：".concat(ax.title)), an) {
                aF.next = 166;
                break;
              }
              aF.next = 164;
              return s("/myintegral_save?iid=11&rid=".concat(ay, "&uid=").concat(l));
            case 164:
              az = aF.sent;
              1 == az.status ? (console.log("阅读成功"), console.log("获得：".concat(az.num, "积分"))) : console.log(az.msg);
            case 166:
              if (ao) {
                aF.next = 175;
                break;
              }
              aF.next = 169;
              return u("/news/like", "id=".concat(ay, "&cid=").concat(n, "&uid=").concat(l));
            case 169:
              aA = aF.sent;
              console.log(aA.message);
              aF.next = 173;
              return s("/myintegral_save?iid=13&rid=".concat(ay, "&uid=").concat(l));
            case 173:
              aB = aF.sent;
              1 == aB.status ? console.log("获得：".concat(aB.num, "积分")) : console.log(aB.msg);
            case 175:
              if (ap) {
                aF.next = 184;
                break;
              }
              aF.next = 178;
              return u("/news/share", "cid=".concat(n, "&id=").concat(ay, "&uid=").concat(l));
            case 178:
              aC = aF.sent;
              console.log(aC.message);
              aF.next = 182;
              return s("/myintegral_save?iid=14&rid=".concat(ay, "&uid=").concat(l));
            case 182:
              aD = aF.sent;
              1 == aD.status ? console.log("获得：".concat(aD.num, "积分")) : console.log(aD.msg);
            case 184:
              aF.next = 157;
              break;
            case 186:
              aF.next = 191;
              break;
            case 188:
              aF.prev = 188;
              aF.t4 = aF.catch(155);
              av.e(aF.t4);
            case 191:
              aF.prev = 191;
              av.f();
              return aF.finish(191);
            case 194:
              console.log("————————————");
              console.log("查询积分");
              aF.next = 198;
              return s("/myinfo?uid=".concat(l));
            case 198:
              aE = aF.sent;
              console.log("拥有积分：".concat(aE.data.integral, "\n"));
              o += "用户：".concat(l, " 积分：").concat(aE.data.integral, "\n");
            case 201:
              aF.next = 13;
              break;
            case 203:
              aF.next = 208;
              break;
            case 205:
              aF.prev = 205;
              aF.t5 = aF.catch(11);
              W.e(aF.t5);
            case 208:
              aF.prev = 208;
              W.f();
              return aF.finish(208);
            case 211:
              if (!o) {
                aF.next = 214;
                break;
              }
              aF.next = 214;
              return A(o);
            case 214:
              if (!p) {
                aF.next = 217;
                break;
              }
              aF.next = 217;
              return A(p);
            case 217:
            case "end":
              return aF.stop();
          }
        }
      }, D, null, [[11, 205, 208, 211], [30, 46, 49, 52], [57, 92, 95, 98], [66, 82, 85, 88], [128, 144, 147, 150], [155, 188, 191, 194]]);
    }));
    return r.apply(this, arguments);
  }
  function s(C) {
    return t.apply(this, arguments);
  }
  function t() {
    t = i(g().mark(function D(E) {
      return g().wrap(function (G) {
        for (;;) {
          switch (G.prev = G.next) {
            case 0:
              return G.abrupt("return", new Promise(function (H) {
                var J = {
                  url: "https://www.ailuqiao.cn/mobile".concat(E),
                  headers: {
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)",
                    Connection: "Keep-Alive",
                    "Accept-Encoding": "gzip",
                    "Content-Type": w(l),
                    "Content-Type2": w(x())
                  }
                };
                $.get(J, function () {
                  var K = i(g().mark(function L(M, N, O) {
                    return g().wrap(function (Q) {
                      for (;;) {
                        switch (Q.prev = Q.next) {
                          case 0:
                            if (Q.prev = 0, !M) {
                              Q.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(M)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            Q.next = 9;
                            break;
                          case 6:
                            Q.next = 8;
                            return $.wait(2000);
                          case 8:
                            H(JSON.parse(O));
                          case 9:
                            Q.next = 14;
                            break;
                          case 11:
                            Q.prev = 11;
                            Q.t0 = Q.catch(0);
                            $.logErr(Q.t0, N);
                          case 14:
                            Q.prev = 14;
                            H();
                            return Q.finish(14);
                          case 17:
                          case "end":
                            return Q.stop();
                        }
                      }
                    }, L, null, [[0, 11, 14, 17]]);
                  }));
                  return function (M, N, O) {
                    return K.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return G.stop();
          }
        }
      }, D);
    }));
    return t.apply(this, arguments);
  }
  function u(C, D) {
    return v.apply(this, arguments);
  }
  function v() {
    v = i(g().mark(function D(E, F) {
      return g().wrap(function (H) {
        for (;;) {
          switch (H.prev = H.next) {
            case 0:
              return H.abrupt("return", new Promise(function (I) {
                var K = {
                  "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)",
                  Connection: "Keep-Alive",
                  "Accept-Encoding": "gzip",
                  "Content-Type": "application/x-www-form-urlencoded"
                };
                var L = {
                  url: "https://www.ailuqiao.cn/mobile".concat(E),
                  headers: K,
                  body: F
                };
                $.post(L, function () {
                  var N = i(g().mark(function O(P, Q, R) {
                    return g().wrap(function (S) {
                      for (;;) {
                        switch (S.prev = S.next) {
                          case 0:
                            if (S.prev = 0, !P) {
                              S.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(P)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            S.next = 9;
                            break;
                          case 6:
                            S.next = 8;
                            return $.wait(2000);
                          case 8:
                            I(JSON.parse(R));
                          case 9:
                            S.next = 14;
                            break;
                          case 11:
                            S.prev = 11;
                            S.t0 = S.catch(0);
                            $.logErr(S.t0, Q);
                          case 14:
                            S.prev = 14;
                            I();
                            return S.finish(14);
                          case 17:
                          case "end":
                            return S.stop();
                        }
                      }
                    }, O, null, [[0, 11, 14, 17]]);
                  }));
                  return function (P, Q, R) {
                    return N.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return H.stop();
          }
        }
      }, D);
    }));
    return v.apply(this, arguments);
  }
  function w(C) {
    CryptoJS = k.createCryptoJS();
    var F = CryptoJS.enc.Utf8.parse("ailuqiaoAb112112");
    var G = CryptoJS.enc.Utf8.parse("ailuqiaobagebaao");
    C = CryptoJS.enc.Utf8.parse(C);
    var H = CryptoJS.AES.encrypt(C, F, {
      iv: G,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
    return H;
  }
  function x() {
    var C = new Date();
    var D = C.getFullYear();
    var E = String(C.getMonth() + 1).padStart(2, "0");
    var F = String(C.getDate()).padStart(2, "0");
    var G = String(C.getHours()).padStart(2, "0");
    var H = String(C.getMinutes()).padStart(2, "0");
    var I = String(C.getSeconds()).padStart(2, "0");
    return "".concat(D, "-").concat(E, "-").concat(F, " ").concat(G, ":").concat(H, ":").concat(I);
  }
  function y() {
    return z.apply(this, arguments);
  }
  function z() {
    z = i(g().mark(function C() {
      var E;
      return g().wrap(function F(G) {
        for (;;) {
          switch (G.prev = G.next) {
            case 0:
              if (E = $.getdata("Utils_Code") || "", !E || !Object.keys(E).length) {
                G.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(E);
              return G.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return G.abrupt("return", new Promise(function () {
                var J = i(g().mark(function K(L) {
                  return g().wrap(function M(N) {
                    for (;;) {
                      switch (N.prev = N.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (P) {
                            $.setdata(P, "Utils_Code");
                            eval(P);
                            console.log("✅ Utils加载成功, 请继续");
                            L(creatUtils());
                          });
                        case 1:
                        case "end":
                          return N.stop();
                      }
                    }
                  }, K);
                }));
                return function (L) {
                  return J.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return G.stop();
          }
        }
      }, C);
    }));
    return z.apply(this, arguments);
  }
  function A(C) {
    return B.apply(this, arguments);
  }
  function B() {
    B = i(g().mark(function C(D) {
      return g().wrap(function (E) {
        for (;;) {
          switch (E.prev = E.next) {
            case 0:
              if (!$.isNode()) {
                E.next = 5;
                break;
              }
              E.next = 3;
              return notify.sendNotify($.name, D);
            case 3:
              E.next = 6;
              break;
            case 5:
              $.msg($.name, "", D);
            case 6:
            case "end":
              return E.stop();
          }
        }
      }, C);
    }));
    return B.apply(this, arguments);
  }
  i(g().mark(function C() {
    return g().wrap(function (E) {
      for (;;) {
        switch (E.prev = E.next) {
          case 0:
            E.next = 2;
            return q();
          case 2:
          case "end":
            return E.stop();
        }
      }
    }, C);
  }))().catch(function (D) {
    $.log(D);
  }).finally(function () {
    $.done({});
  });
})();