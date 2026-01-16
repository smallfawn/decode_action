//Fri Jan 16 2026 10:07:49 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("爱路桥");
const notify = $.isNode() ? require("./sendNotify") : "";
(() => {
  function b(C) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (E) {
      {
        return typeof E;
      }
    } : function (E) {
      return E && "function" == typeof Symbol && E.constructor === Symbol && E !== Symbol.prototype ? "symbol" : typeof E;
    };
    return b(C);
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
                    var M = {
                      done: true
                    };
                    return G >= C.length ? M : {
                      done: false,
                      value: C[G++]
                    };
                  }
                },
                e: function (M) {
                  {
                    throw M;
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
          F = F.call(C);
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
      EOjdf: function (ag, ah) {
        return ag === ah;
      },
      JPcbt: "eUhQK",
      giiLH: function (ag, ah, ai, aj, ak) {
        return ag(ah, ai, aj, ak);
      },
      LSUpd: function (ag, ah) {
        return ag !== ah;
      },
      lbIjF: "iHpPk",
      nANbv: function (ag, ah, ai) {
        return ag(ah, ai);
      },
      GOrtZ: function (ag, ah) {
        return ag < ah;
      },
      IhqTa: function (ag, ah) {
        return ag(ah);
      },
      sDDKm: "5|3|4|0|1|2",
      mrivl: "throw",
      XRwKR: "return",
      eStyu: "next",
      JpDmX: "iterator result is not an object",
      fzBZU: function (ag, ah) {
        return ag === ah;
      },
      LGweT: function (ag, ah, ai) {
        return ag(ah, ai);
      },
      Ltmqr: function (ag, ah) {
        return ag !== ah;
      },
      MDZtk: function (ag, ah) {
        return ag + ah;
      },
      izNbz: "The iterator does not provide a '",
      fBaKV: "' method",
      iMKjV: function (ag, ah, ai, aj) {
        return ag(ah, ai, aj);
      },
      MReVU: "UmMFT",
      IfoYd: "ymvXY",
      FMIgB: function (ag, ah) {
        return ag instanceof ah;
      },
      TurBa: "_invoke",
      GVjqf: "bEOee",
      xBIMa: "FUNLb",
      WYqJO: "iQznO",
      FMbpr: "normal",
      GoWhK: "HrlFK",
      ngZtl: "BxLOn",
      eqpsC: "RbaDx",
      KGwjy: function (ag, ah, ai, aj) {
        return ag(ah, ai, aj);
      },
      gclXw: function (ag, ah) {
        return ag == ah;
      },
      OtfjJ: "function",
      QuhWB: function (ag, ah) {
        return ag + ah;
      },
      LLuSs: " is not iterable",
      vskuk: function (ag, ah) {
        return ag === ah;
      },
      WiEtS: function (ag, ah) {
        return ag === ah;
      },
      ZIOMu: "JfvOd",
      cOiLD: "wNlXj",
      VELPP: function (ag, ah) {
        return ag === ah;
      },
      usuNm: function (ag, ah) {
        return ag(ah);
      },
      lYaHQ: "Generator is already running",
      DouTk: "BRzUU",
      bnelt: "llrki",
      ppboF: function (ag, ah) {
        return ag === ah;
      },
      BqWZu: "pTMsK",
      FZCkd: "HHLyc",
      FzeKr: function (ag, ah, ai) {
        return ag(ah, ai);
      },
      IDjrm: "GJGCs",
      vRNCn: function (ag, ah) {
        return ag === ah;
      },
      boqIG: "pQJLv",
      XKKyB: function (ag, ah) {
        return ag === ah;
      },
      lTpTH: function (ag, ah) {
        return ag === ah;
      },
      uURwC: function (ag, ah, ai, aj) {
        return ag(ah, ai, aj);
      },
      yoSRL: function (ag, ah) {
        return ag === ah;
      },
      sBFkK: "ZDhQD",
      BqhLJ: function (ag, ah) {
        return ag === ah;
      },
      mKSWd: function (ag, ah) {
        return ag === ah;
      },
      kcsmU: "qwpZX",
      WWynD: "1|4|0|3|2|5",
      vcYkU: function (ag, ah) {
        return ag === ah;
      },
      JmDVN: function (ag, ah) {
        return ag + ah;
      },
      AnQyt: function (ag, ah) {
        return ag + ah;
      },
      ggpMK: function (ag, ah) {
        return ag !== ah;
      },
      gnKff: function (ag, ah) {
        return ag < ah;
      },
      xouJb: "MWjbG",
      VjWDZ: function (ag, ah) {
        return ag in ah;
      },
      kLiMG: function (ag) {
        return ag();
      },
      XgpDC: "end",
      vtIZN: "break",
      TCoOH: function (ag, ah, ai, aj, ak, al, am, an) {
        return ag(ah, ai, aj, ak, al, am, an);
      },
      wmwoW: "jZafV",
      sgJYR: "JkHYd",
      cBnMp: function (ag, ah) {
        return ag < ah;
      },
      lLIzf: "jtpbR",
      hoNjt: "jTPcQ",
      rimcC: function (ag, ah) {
        return ag == ah;
      },
      cOjhS: function (ag, ah) {
        return ag === ah;
      },
      KXWng: function (ag, ah) {
        return ag + ah;
      },
      KMJLm: "HniBG",
      dbydL: function (ag, ah) {
        return ag == ah;
      },
      oIZJS: function (ag, ah) {
        return ag === ah;
      },
      IDuEM: "GeneratorFunction",
      dcujp: function (ag, ah) {
        return ag >= ah;
      },
      VUfMb: function (ag, ah) {
        return ag > ah;
      },
      moyZO: function (ag, ah) {
        return ag < ah;
      },
      JaqPB: "PXnIc",
      kjYTD: function (ag, ah) {
        return ag == ah;
      },
      FgAFk: function (ag, ah) {
        return ag === ah;
      },
      Pkkvj: "symbol",
      PSFzk: function (ag, ah) {
        return ag(ah);
      },
      TDxLl: function (ag, ah) {
        return ag == ah;
      },
      kWrfL: "1|4|0|3|2",
      TNJLg: "ailuqiaoAb112112",
      amzDe: function (ag, ah, ai, aj) {
        return ag(ah, ai, aj);
      },
      RgTrn: function (ag, ah) {
        return ag - ah;
      },
      QQQGL: function (ag, ah) {
        return ag >= ah;
      },
      NpydI: function (ag, ah) {
        return ag === ah;
      },
      qcjiA: function (ag, ah) {
        return ag(ah);
      },
      FFFuw: "pPDGd",
      tNSOr: "root",
      OkaZV: "siUaB",
      kldgf: function (ag, ah) {
        return ag <= ah;
      },
      UPpRg: "inpqX",
      fpOdQ: "catchLoc",
      pmDez: "finallyLoc",
      bzaSd: function (ag, ah) {
        return ag && ah;
      },
      SmiYu: "OMjFZ",
      FRFsJ: function (ag, ah, ai) {
        return ag(ah, ai);
      },
      VcpQa: function (ag, ah) {
        return ag(ah);
      },
      MKMnd: "rFpRQ",
      Flttn: function (ag, ah) {
        return ag < ah;
      },
      RScLZ: function (ag, ah) {
        return ag === ah;
      },
      LqBvP: "KiDmg",
      IlGDI: "RryvP",
      ClOva: function (ag, ah) {
        return ag(ah);
      },
      NyEPG: "try statement without catch or finally",
      XFGfr: function (ag, ah) {
        return ag(ah);
      },
      YtMSp: "[object Generator]",
      KnAAc: "iisdh",
      fputh: function (ag, ah) {
        return ag === ah;
      },
      aBqli: "continue",
      qHBhk: function (ag, ah) {
        return ag === ah;
      },
      cTueN: function (ag, ah) {
        return ag == ah;
      },
      BEcfK: function (ag, ah) {
        return ag === ah;
      },
      uEkIG: "aaPwl",
      SrjUx: function (ag, ah) {
        return ag >= ah;
      },
      pCUzK: "WaaDZ",
      BqabV: "VURXE",
      zhIPM: function (ag, ah) {
        return ag(ah);
      },
      FIpTF: "string",
      sHUMz: function (ag, ah) {
        return ag === ah;
      },
      UUmeP: function (ag, ah) {
        return ag === ah;
      },
      TeSQt: "Arguments",
      pGztu: "✅ Utils加载成功, 请继续",
      paPgm: function (ag, ah) {
        return ag === ah;
      }
    };
    g = function () {
      {
        return F;
      }
    };
    var D;
    var F = {
      wrap: U
    };
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
        var ak = {
          value: ai,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(ag, ah, ak);
        return ag[ah];
      }
    }
    try {
      {
        R({}, "");
      }
    } catch (ah) {
      {
        R = function (aj, ak, al) {
          {
            return aj[ak] = al;
          }
        };
      }
    }
    function U(aj, ak, al, am) {
      {
        var an = ak && ak.prototype instanceof a1 ? ak : a1;
        var ao = Object.create(an.prototype);
        var ap = new ae(am || []);
        J(ao, "_invoke", {
          value: aa(aj, al, ap)
        });
        return ao;
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
        } catch (ap) {
          {
            var an = {
              type: "throw",
              arg: ap
            };
            return an;
          }
        }
      }
    }
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
      {
        return this;
      }
    });
    var a5 = Object.getPrototypeOf;
    var a6 = a5 && a5(a5(af([])));
    a6 && a6 !== H && I.call(a6, M) && (a4 = a6);
    a3.prototype = a1.prototype = Object.create(a4);
    var a7 = a3.prototype;
    function a8(aj) {
      {
        ["next", "throw", "return"].forEach(function (am) {
          {
            R(aj, am, function (an) {
              {
                return this._invoke(am, an);
              }
            });
          }
        });
      }
    }
    function a9(aj, ak) {
      {
        function an(ao, ap, aq, ar) {
          {
            var at = V(aj[ao], aj, ap);
            if ("throw" !== at.type) {
              {
                var au = at.arg;
                var av = au.value;
                return av && "object" == b(av) && I.call(av, "__await") ? ak.resolve(av.__await).then(function (ay) {
                  {
                    an("next", ay, aq, ar);
                  }
                }, function (ay) {
                  {
                    an("throw", ay, aq, ar);
                  }
                }) : ak.resolve(av).then(function (ay) {
                  {
                    au.value = ay;
                    aq(au);
                  }
                }, function (ay) {
                  {
                    return an("throw", ay, aq, ar);
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
                  return new ak(function (at, au) {
                    {
                      an(ao, ap, at, au);
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
        return function (ap, aq) {
          {
            if (an === Y) {
              throw Error("Generator is already running");
            }
            if (an === Z) {
              {
                if ("throw" === ap) {
                  throw aq;
                }
                var as = {
                  value: D,
                  done: true
                };
                return as;
              }
            }
            for (al.method = ap, al.arg = aq;;) {
              {
                var at = al.delegate;
                if (at) {
                  {
                    var au = ab(at, al);
                    if (au) {
                      {
                        if (au === a0) {
                          continue;
                        }
                        return au;
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
                var av = V(aj, ak, al);
                if ("normal" === av.type) {
                  {
                    if (an = al.done ? Z : X, av.arg === a0) {
                      continue;
                    }
                    var aw = {
                      value: av.arg,
                      done: al.done
                    };
                    return aw;
                  }
                }
                "throw" === av.type && (an = Z, al.method = "throw", al.arg = av.arg);
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
        var an = V(ap, aj.iterator, ak.arg);
        if ("throw" === an.type) {
          ak.method = "throw";
          ak.arg = an.arg;
          ak.delegate = null;
          return a0;
        }
        var aq = an.arg;
        return aq ? aq.done ? (ak[aj.resultName] = aq.value, ak.next = aj.nextLoc, "return" !== ak.method && (ak.method = "next", ak.arg = D), ak.delegate = null, a0) : aq : (ak.method = "throw", ak.arg = new TypeError("iterator result is not an object"), ak.delegate = null, a0);
      }
    }
    function ac(aj) {
      {
        var am = {
          tryLoc: aj[0]
        };
        1 in aj && (am.catchLoc = aj[1]);
        2 in aj && (am.finallyLoc = aj[2], am.afterLoc = aj[3]);
        this.tryEntries.push(am);
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
                var an = function ar() {
                  {
                    for (; ++am < aj.length;) {
                      if (I.call(aj, am)) {
                        ar.value = aj[am];
                        ar.done = false;
                        return ar;
                      }
                    }
                    ar.value = D;
                    ar.done = true;
                    return ar;
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
        var al = "function" == typeof aj && aj.constructor;
        return !!al && (al === a2 || "GeneratorFunction" === (al.displayName || al.name));
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
      return this;
    });
    F.AsyncIterator = a9;
    F.async = function (aj, ak, al, am, an) {
      {
        undefined === an && (an = Promise);
        var ap = new a9(U(aj, ak, al, am), an);
        return F.isGeneratorFunction(ak) ? ap : ap.next().then(function (ar) {
          {
            return ar.done ? ar.value : ap.next();
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
      {
        return "[object Generator]";
      }
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
          for (var al = this.tryEntries.length - 1; al >= 0; --al) {
            {
              var am = this.tryEntries[al];
              if (am.tryLoc <= this.prev && I.call(am, "finallyLoc") && this.prev < am.finallyLoc) {
                {
                  var an = am;
                  break;
                }
              }
            }
          }
          an && ("break" === aj || "continue" === aj) && an.tryLoc <= ak && ak <= an.finallyLoc && (an = null);
          var ao = an ? an.completion : {};
          ao.type = aj;
          ao.arg = ak;
          return an ? (this.method = "next", this.next = an.finallyLoc, a0) : this.complete(ao);
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
          for (var ak = this.tryEntries.length - 1; ak >= 0; --ak) {
            {
              var al = this.tryEntries[ak];
              if (al.tryLoc === aj) {
                {
                  var am = al.completion;
                  if ("throw" === am.type) {
                    {
                      var an = am.arg;
                      ad(al);
                    }
                  }
                  return an;
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
          var J = C[H](I);
          var K = J.value;
        }
      } catch (N) {
        {
          return void E(N);
        }
      }
      J.done ? D(K) : Promise.resolve(K).then(F, G);
    }
  }
  function i(C) {
    return function () {
      var E = this;
      var F = arguments;
      return new Promise(function (G, H) {
        var J = C.apply(E, F);
        function K(M) {
          h(J, G, H, K, L, "next", M);
        }
        function L(M) {
          {
            h(J, G, H, K, L, "throw", M);
          }
        }
        K(undefined);
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
      var aF;
      return g().wrap(function (aG) {
        for (;;) {
          switch (aG.prev = aG.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                aG.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              aG.next = 5;
              return A("先去boxjs填写账号密码");
            case 5:
              return aG.abrupt("return");
            case 6:
              aG.next = 8;
              return y();
            case 8:
              k = aG.sent;
              W = j.split(" ");
              X = c(W);
              aG.prev = 11;
              X.s();
            case 13:
              if ((Y = X.n()).done) {
                aG.next = 203;
                break;
              }
              if (Z = Y.value, l = Z, console.log("用户：".concat(l, "开始任务")), console.log("阅读抽奖"), n) {
                aG.next = 25;
                break;
              }
              console.log("获取cid");
              aG.next = 22;
              return s("/myinfo?uid=".concat(l));
            case 22:
              a0 = aG.sent;
              n = a0.data.cid;
              console.log(n);
            case 25:
              console.log("获取tid");
              aG.next = 28;
              return s("/system_settings");
            case 28:
              a1 = aG.sent;
              a2 = c(a1);
              aG.prev = 30;
              a2.s();
            case 32:
              if ((a3 = a2.n()).done) {
                aG.next = 44;
                break;
              }
              if (a4 = a3.value, "浮窗" != a4.key) {
                aG.next = 42;
                break;
              }
              for (a5 = a4.url.split("?")[1], a6 = {}, a7 = a5.split("&"), a8 = 0, a9 = a7.length; a8 < a9; a8++) {
                aa = a7[a8].split("=");
                a6[aa[0]] = aa[1];
              }
              m = a6.id;
              console.log(m);
              return aG.abrupt("break", 44);
            case 42:
              aG.next = 32;
              break;
            case 44:
              aG.next = 49;
              break;
            case 46:
              aG.prev = 46;
              aG.t0 = aG.catch(30);
              a2.e(aG.t0);
            case 49:
              aG.prev = 49;
              a2.f();
              return aG.finish(49);
            case 52:
              if (!m || !n) {
                aG.next = 113;
                break;
              }
              aG.next = 55;
              return s("/red_activity?tid=".concat(m, "&uid=").concat(l, "&cid=").concat(n));
            case 55:
              ab = aG.sent;
              ac = c(ab.data);
              aG.prev = 57;
              ac.s();
            case 59:
              if ((ad = ac.n()).done) {
                aG.next = 90;
                break;
              }
              ae = ad.value;
              console.log(ae.title);
              aG.next = 64;
              return s("/red_news?red_id=".concat(ae.id, "&uid=").concat(l, "&tid=").concat(m, "&cid=").concat(n));
            case 64:
              af = aG.sent;
              ag = c(af.data);
              aG.prev = 66;
              ag.s();
            case 68:
              if ((ah = ag.n()).done) {
                aG.next = 80;
                break;
              }
              if (ai = ah.value, console.log("文章：".concat(ai.title)), 1 != ai.task) {
                aG.next = 74;
                break;
              }
              console.log("已阅读");
              return aG.abrupt("continue", 78);
            case 74:
              aG.next = 76;
              return s("/red_news_record?newsId=".concat(ai.newsId, "&uid=").concat(l));
            case 76:
              aj = aG.sent;
              1 == aj.status ? console.log("阅读成功") : console.log(aj.msg);
            case 78:
              aG.next = 68;
              break;
            case 80:
              aG.next = 85;
              break;
            case 82:
              aG.prev = 82;
              aG.t1 = aG.catch(66);
              ag.e(aG.t1);
            case 85:
              aG.prev = 85;
              ag.f();
              return aG.finish(85);
            case 88:
              aG.next = 59;
              break;
            case 90:
              aG.next = 95;
              break;
            case 92:
              aG.prev = 92;
              aG.t2 = aG.catch(57);
              ac.e(aG.t2);
            case 95:
              aG.prev = 95;
              ac.f();
              return aG.finish(95);
            case 98:
              aG.next = 100;
              return s("/luck_chance_get?uid=".concat(l, "&tid=").concat(m));
            case 100:
              ak = aG.sent;
              console.log("剩余抽奖次数：".concat(ak.chance));
              al = 0;
            case 103:
              if (!(al < ak.chance)) {
                aG.next = 111;
                break;
              }
              aG.next = 106;
              return s("/red_luck?uid=".concat(l, "&tid=").concat(m, "&cid=").concat(n));
            case 106:
              am = aG.sent;
              1 == am.status ? (console.log("抽奖获得：".concat(am.data.prize)), p += "用户：".concat(l, " 抽奖获得：").concat(am.data.prize, "\n")) : console.log(am.msg);
            case 108:
              al++;
              aG.next = 103;
              break;
            case 111:
              aG.next = 114;
              break;
            case 113:
              console.log("获取tid或cid失败");
            case 114:
              console.log("————————————");
              console.log("开始任务");
              console.log("开始签到");
              aG.next = 119;
              return s("/mysign?uid=".concat(l));
            case 119:
              an = aG.sent;
              1 == an.status ? console.log("签到成功") : console.log(an.msg);
              ao = true;
              ap = true;
              aq = true;
              aG.next = 126;
              return s("/integral_rule?uid=".concat(l));
            case 126:
              ar = aG.sent;
              as = c(ar.info);
              aG.prev = 128;
              as.s();
            case 130:
              if ((at = as.n()).done) {
                aG.next = 142;
                break;
              }
              if (au = at.value, console.log("任务：".concat(au.name)), 1 != au.status) {
                aG.next = 136;
                break;
              }
              console.log("任务已完成");
              return aG.abrupt("continue", 140);
            case 136:
              console.log("任务进度：".concat(au.n1, "/").concat(au.n2));
              "阅读新闻" == au.name && (ao = false);
              "点赞新闻" == au.name && (ap = false);
              "转发新闻" == au.name && (aq = false);
            case 140:
              aG.next = 130;
              break;
            case 142:
              aG.next = 147;
              break;
            case 144:
              aG.prev = 144;
              aG.t3 = aG.catch(128);
              as.e(aG.t3);
            case 147:
              aG.prev = 147;
              as.f();
              return aG.finish(147);
            case 150:
              if (ao && ap && aq) {
                aG.next = 194;
                break;
              }
              aG.next = 153;
              return s("/news?columnId=1&page=0&limit=10&time=".concat(x(), "&uid=").concat(l));
            case 153:
              av = aG.sent;
              aw = c(av.data);
              aG.prev = 155;
              aw.s();
            case 157:
              if ((ax = aw.n()).done) {
                aG.next = 186;
                break;
              }
              if (ay = ax.value, az = ay.newsid, console.log("文章：".concat(ay.title)), ao) {
                aG.next = 166;
                break;
              }
              aG.next = 164;
              return s("/myintegral_save?iid=11&rid=".concat(az, "&uid=").concat(l));
            case 164:
              aA = aG.sent;
              1 == aA.status ? (console.log("阅读成功"), console.log("获得：".concat(aA.num, "积分"))) : console.log(aA.msg);
            case 166:
              if (ap) {
                aG.next = 175;
                break;
              }
              aG.next = 169;
              return u("/news/like", "id=".concat(az, "&cid=").concat(n, "&uid=").concat(l));
            case 169:
              aB = aG.sent;
              console.log(aB.message);
              aG.next = 173;
              return s("/myintegral_save?iid=13&rid=".concat(az, "&uid=").concat(l));
            case 173:
              aC = aG.sent;
              1 == aC.status ? console.log("获得：".concat(aC.num, "积分")) : console.log(aC.msg);
            case 175:
              if (aq) {
                aG.next = 184;
                break;
              }
              aG.next = 178;
              return u("/news/share", "cid=".concat(n, "id=").concat(az, "&&uid=").concat(l));
            case 178:
              aD = aG.sent;
              console.log(aD.message);
              aG.next = 182;
              return s("/myintegral_save?iid=14&rid=".concat(az, "&uid=").concat(l));
            case 182:
              aE = aG.sent;
              1 == aE.status ? console.log("获得：".concat(aE.num, "积分")) : console.log(aE.msg);
            case 184:
              aG.next = 157;
              break;
            case 186:
              aG.next = 191;
              break;
            case 188:
              aG.prev = 188;
              aG.t4 = aG.catch(155);
              aw.e(aG.t4);
            case 191:
              aG.prev = 191;
              aw.f();
              return aG.finish(191);
            case 194:
              console.log("————————————");
              console.log("查询积分");
              aG.next = 198;
              return s("/myinfo?uid=".concat(l));
            case 198:
              aF = aG.sent;
              console.log("拥有积分：".concat(aF.data.integral, "\n"));
              o += "用户：".concat(l, " 积分：").concat(aF.data.integral, "\n");
            case 201:
              aG.next = 13;
              break;
            case 203:
              aG.next = 208;
              break;
            case 205:
              aG.prev = 205;
              aG.t5 = aG.catch(11);
              X.e(aG.t5);
            case 208:
              aG.prev = 208;
              X.f();
              return aG.finish(208);
            case 211:
              if (!o) {
                aG.next = 214;
                break;
              }
              aG.next = 214;
              return A(o);
            case 214:
              if (!p) {
                aG.next = 217;
                break;
              }
              aG.next = 217;
              return A(p);
            case 217:
            case "end":
              return aG.stop();
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
      return g().wrap(function (F) {
        for (;;) {
          switch (F.prev = F.next) {
            case 0:
              return F.abrupt("return", new Promise(function (H) {
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
              return F.stop();
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
      return g().wrap(function (G) {
        for (;;) {
          switch (G.prev = G.next) {
            case 0:
              return G.abrupt("return", new Promise(function (I) {
                var K = {
                  url: "https://www.ailuqiao.cn/mobile".concat(E),
                  headers: {
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 uni-app Html5Plus/1.0 (Immersed/34.909092)",
                    Connection: "Keep-Alive",
                    "Accept-Encoding": "gzip",
                    "Content-Type": "application/x-www-form-urlencoded"
                  },
                  body: F
                };
                $.post(K, function () {
                  var L = i(g().mark(function M(N, O, P) {
                    return g().wrap(function (S) {
                      for (;;) {
                        switch (S.prev = S.next) {
                          case 0:
                            if (S.prev = 0, !N) {
                              S.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(N)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            S.next = 9;
                            break;
                          case 6:
                            S.next = 8;
                            return $.wait(2000);
                          case 8:
                            I(JSON.parse(P));
                          case 9:
                            S.next = 14;
                            break;
                          case 11:
                            S.prev = 11;
                            S.t0 = S.catch(0);
                            $.logErr(S.t0, O);
                          case 14:
                            S.prev = 14;
                            I();
                            return S.finish(14);
                          case 17:
                          case "end":
                            return S.stop();
                        }
                      }
                    }, M, null, [[0, 11, 14, 17]]);
                  }));
                  return function (N, O, P) {
                    return L.apply(this, arguments);
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
    return v.apply(this, arguments);
  }
  function w(C) {
    CryptoJS = k.createCryptoJS();
    var D = CryptoJS.enc.Utf8.parse("ailuqiaoAb112112");
    var E = CryptoJS.enc.Utf8.parse("ailuqiaobagebaao");
    C = CryptoJS.enc.Utf8.parse(C);
    var F = CryptoJS.AES.encrypt(C, D, {
      iv: E,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
    return F;
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
      return g().wrap(function (G) {
        for (;;) {
          switch (G.prev = G.next) {
            case 0:
              if (!$.isNode()) {
                G.next = 5;
                break;
              }
              G.next = 3;
              return notify.sendNotify($.name, D);
            case 3:
              G.next = 6;
              break;
            case 5:
              $.msg($.name, "", D);
            case 6:
            case "end":
              return G.stop();
          }
        }
      }, C);
    }));
    return B.apply(this, arguments);
  }
  i(g().mark(function C() {
    return g().wrap(function (D) {
      for (;;) {
        switch (D.prev = D.next) {
          case 0:
            D.next = 2;
            return q();
          case 2:
          case "end":
            return D.stop();
        }
      }
    }, C);
  }))().catch(function (D) {
    $.log(D);
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
      const i = new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
      return t.timeout ? ((t, e = 1000) => Promise.race([t, new Promise((t, s) => {
        setTimeout(() => {
          s(new Error("请求超时"));
        }, e);
      })]))(i, t.timeout) : i;
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
          policy: "DIRECT",
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
      switch (t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
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
          case "Node.js":
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