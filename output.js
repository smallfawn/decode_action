//Sun Dec 01 2024 03:01:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(a4) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a6) {
        {
          return typeof a6;
        }
      } : function (a6) {
        {
          return a6 && "function" == typeof Symbol && a6.constructor === Symbol && a6 !== Symbol.prototype ? "symbol" : typeof a6;
        }
      };
      return b(a4);
    }
  }
  function c(a4, a5) {
    {
      var a7 = "undefined" != typeof Symbol && a4[Symbol.iterator] || a4["@@iterator"];
      if (!a7) {
        {
          if (Array.isArray(a4) || (a7 = d(a4)) || a5 && a4 && "number" == typeof a4.length) {
            {
              a7 && (a4 = a7);
              var a8 = 0;
              var a9 = function () {};
              return {
                s: a9,
                n: function () {
                  {
                    var af = {
                      done: true
                    };
                    return a8 >= a4.length ? af : {
                      done: false,
                      value: a4[a8++]
                    };
                  }
                },
                e: function (af) {
                  {
                    throw af;
                  }
                },
                f: a9
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var aa;
      var ab = true;
      var ac = false;
      return {
        s: function () {
          {
            a7 = a7.call(a4);
          }
        },
        n: function () {
          {
            var ah = a7.next();
            ab = ah.done;
            return ah;
          }
        },
        e: function (ag) {
          {
            ac = true;
            aa = ag;
          }
        },
        f: function () {
          {
            try {
              {
                ab || null == a7.return || a7.return();
              }
            } finally {
              {
                if (ac) {
                  throw aa;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(a4, a5) {
    {
      if (a4) {
        {
          if ("string" == typeof a4) {
            return f(a4, a5);
          }
          var a7 = {}.toString.call(a4).slice(8, -1);
          "Object" === a7 && a4.constructor && (a7 = a4.constructor.name);
          return "Map" === a7 || "Set" === a7 ? Array.from(a4) : "Arguments" === a7 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a7) ? f(a4, a5) : undefined;
        }
      }
    }
  }
  function f(a4, a5) {
    {
      (null == a5 || a5 > a4.length) && (a5 = a4.length);
      for (var a6 = 0, a7 = Array(a5); a6 < a5; a6++) {
        a7[a6] = a4[a6];
      }
      return a7;
    }
  }
  function g() {
    "use strict";

    var a4 = {
      fvKVf: "Utils_Code",
      CIsTd: function (aB, aC) {
        return aB(aC);
      },
      gplpG: "✅ Utils加载成功, 请继续",
      EZbqC: function (aB) {
        return aB();
      },
      cECMi: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
      ttGSx: "end",
      Bmelc: function (aB, aC) {
        return aB !== aC;
      },
      JUTkf: "BCyvu",
      iTmkx: function (aB, aC) {
        return aB + aC;
      },
      qTDxF: "VrbQU",
      UnXUN: function (aB, aC) {
        return aB in aC;
      },
      wuTeP: "UMrTY",
      pLTEm: function (aB, aC) {
        return aB !== aC;
      },
      XtPvO: "gtIoE",
      azksQ: "normal",
      pwtrw: function (aB, aC) {
        return aB === aC;
      },
      WAqAq: "tmmhq",
      qJpvu: "throw",
      lKSfC: function (aB, aC) {
        return aB === aC;
      },
      QwiIf: "KEaJa",
      Wiilr: function (aB, aC) {
        return aB === aC;
      },
      Jsevv: "xYNkJ",
      xaLEp: "FqRux",
      pMGuY: "anVwE",
      hIfbS: "next",
      EHULJ: "return",
      gOCLH: function (aB, aC) {
        return aB === aC;
      },
      uybpi: "bjJxL",
      ZusQq: function (aB, aC, aD, aE, aF) {
        return aB(aC, aD, aE, aF);
      },
      XioGl: "ijgDC",
      GGjtn: function (aB) {
        return aB();
      },
      TuaKJ: function (aB, aC, aD) {
        return aB(aC, aD);
      },
      QGlnO: "zrzOq",
      wCjna: "otbKU",
      Rsthc: "UTLKL",
      RlcMo: function (aB, aC, aD, aE, aF, aG, aH, aI) {
        return aB(aC, aD, aE, aF, aG, aH, aI);
      },
      qhvUq: function (aB, aC) {
        return aB(aC);
      },
      VEMmh: function (aB, aC) {
        return aB != aC;
      },
      rKcdn: "VGabU",
      lACRG: "YtLTA",
      yZjQK: function (aB, aC) {
        return aB !== aC;
      },
      gsKSn: "kYuoK",
      glDHT: "NRPPG",
      FWGaL: function (aB, aC) {
        return aB == aC;
      },
      RNwDY: "object",
      iURWt: function (aB, aC) {
        return aB(aC);
      },
      PwAko: "1|5|3|4|2|0",
      RvhZE: "client_id=",
      fecnb: "&password=",
      GrxmC: "&phone_number=",
      ldLHk: "post%%/web/oauth/credential_auth?",
      SsdZb: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB",
      hdrdy: "KqrBT",
      ARxWW: function (aB, aC, aD, aE) {
        return aB(aC, aD, aE);
      },
      BDQPL: "_invoke",
      yXCnq: " API请求失败，请检查网路重试",
      uUyce: function (aB) {
        return aB();
      },
      KXwQs: function (aB, aC) {
        return aB == aC;
      },
      Xawyl: function (aB, aC) {
        return aB > aC;
      },
      jfKzV: function (aB, aC) {
        return aB < aC;
      },
      TatRN: function (aB, aC) {
        return aB !== aC;
      },
      KiAPZ: "qcfwT",
      JTkxR: "Generator is already running",
      MwiPu: function (aB, aC) {
        return aB === aC;
      },
      rAhZI: "xqBRP",
      gwWUM: function (aB, aC) {
        return aB === aC;
      },
      vLhUg: function (aB, aC) {
        return aB === aC;
      },
      FiHgh: "pyiKr",
      GaGnG: "HEHPN",
      fZpBe: function (aB, aC, aD) {
        return aB(aC, aD);
      },
      XUzDs: "ROjiL",
      hRjjl: "TkVOg",
      NHMJy: function (aB, aC) {
        return aB === aC;
      },
      edANv: "rmVTZ",
      NrtaE: "BKwoE",
      EIDjh: function (aB, aC) {
        return aB === aC;
      },
      jOMAi: "tXHZf",
      UNDbb: "XbLTK",
      NoFxh: function (aB, aC, aD, aE) {
        return aB(aC, aD, aE);
      },
      BXVdm: "kNzsh",
      hpbwb: "3|0|4|2|1|5",
      ZxbCi: function (aB, aC) {
        return aB + aC;
      },
      babYL: function (aB, aC) {
        return aB + aC;
      },
      BgrFH: "The iterator does not provide a '",
      xEhZU: "' method",
      MSwHO: "iterator result is not an object",
      pFHFM: "ChDfy",
      BKdCt: "LGZRZ",
      CIebo: "function",
      YhtKV: function (aB, aC) {
        return aB === aC;
      },
      WezZc: "GeneratorFunction",
      HNSzp: "iuSbU",
      GHjZD: function (aB, aC) {
        return aB < aC;
      },
      EfTOC: "DMblk",
      boNUr: function (aB, aC) {
        return aB === aC;
      },
      FkKcC: "NZlrz",
      fFTDA: "xTHOx",
      bodCR: "UrXJL",
      oCIXK: function (aB, aC) {
        return aB + aC;
      },
      JGKug: function (aB, aC) {
        return aB(aC);
      },
      nBYRk: " is not iterable",
      Ofpfz: function (aB, aC) {
        return aB === aC;
      },
      OiAkf: "BBECk",
      nRIGx: "RECOm",
      tZqGs: function (aB, aC, aD, aE) {
        return aB(aC, aD, aE);
      },
      MGbDh: function (aB, aC) {
        return aB === aC;
      },
      XHKIE: "GOedR",
      EYxKB: function (aB, aC) {
        return aB !== aC;
      },
      ivKvQ: "KjOWM",
      deEUg: function (aB, aC) {
        return aB === aC;
      },
      kbTXa: "ejcmG",
      qyytO: "pafJd",
      UKKJr: function (aB, aC) {
        return aB in aC;
      },
      mwDMt: function (aB, aC) {
        return aB >= aC;
      },
      VQJqO: function (aB, aC) {
        return aB === aC;
      },
      SnCLJ: function (aB, aC) {
        return aB !== aC;
      },
      vCUDc: "cEEsB",
      vPILv: "DzSsa",
      pLNWl: function (aB) {
        return aB();
      },
      SRCFV: function (aB, aC) {
        return aB === aC;
      },
      AsKet: function (aB, aC, aD, aE, aF) {
        return aB(aC, aD, aE, aF);
      },
      WEYJd: "抽奖获得：",
      DFCnE: " 抽奖获得：",
      IIScI: "VjNiQ",
      mkPrN: "yqzZQ",
      XGTag: function (aB, aC) {
        return aB - aC;
      },
      YSspg: function (aB, aC) {
        return aB !== aC;
      },
      NJkZs: "GabCT",
      xFzHF: function (aB, aC) {
        return aB === aC;
      },
      hejnE: function (aB, aC) {
        return aB(aC);
      },
      TFboZ: function (aB, aC) {
        return aB <= aC;
      },
      KwxVg: function (aB, aC) {
        return aB !== aC;
      },
      bREVp: "finallyLoc",
      jmCJE: function (aB, aC) {
        return aB && aC;
      },
      RszQK: function (aB, aC) {
        return aB !== aC;
      },
      bPYqo: "FmiBm",
      IPVtj: "JtQNl",
      lwotf: function (aB, aC, aD) {
        return aB(aC, aD);
      },
      ENhYG: function (aB, aC) {
        return aB < aC;
      },
      uVrHU: "bjspj",
      HguKd: "vmPtO",
      qWMpy: "try statement without catch or finally",
      eqPZQ: function (aB, aC) {
        return aB(aC);
      },
      NTtXj: function (aB, aC) {
        return aB(aC);
      },
      eEnxr: "FajbY",
      PtLck: "uPmND",
      kQElh: function (aB, aC) {
        return aB !== aC;
      },
      Fyxld: "ssJmG",
      Duife: function (aB, aC) {
        return aB === aC;
      },
      tiPEw: "bShzH",
      Qbymn: function (aB, aC) {
        return aB === aC;
      },
      DlaJD: "break",
      wrsmJ: "continue",
      ytOOM: function (aB, aC) {
        return aB <= aC;
      },
      dXbTU: function (aB, aC) {
        return aB(aC);
      },
      owAKO: function (aB, aC) {
        return aB * aC;
      },
      hbuYd: function (aB, aC) {
        return aB & aC;
      },
      ltZjh: "JQDwq",
      qPrCV: "JecyD",
      UKERX: function (aB, aC) {
        return aB !== aC;
      },
      fqOUy: "bhjgR",
      pEOFp: "pdRYf",
      tKGvq: "illegal catch attempt",
      RSqGz: "[object Generator]"
    };
    g = function () {
      return a6;
    };
    var a5;
    var a6 = {
      wrap: af,
      isGeneratorFunction: function (aE) {
        {
          var aF = "function" == typeof aE && aE.constructor;
          return !!aF && (aF === an || "GeneratorFunction" === (aF.displayName || aF.name));
        }
      },
      mark: function (aE) {
        {
          Object.setPrototypeOf ? Object.setPrototypeOf(aE, ao) : (aE.__proto__ = ao, ae(aE, ad, "GeneratorFunction"));
          aE.prototype = Object.create(as);
          return aE;
        }
      },
      awrap: function (aE) {
        {
          var aF = {
            __await: aE
          };
          return aF;
        }
      }
    };
    var a7 = Object.prototype;
    var a8 = a7.hasOwnProperty;
    var a9 = Object.defineProperty || function (aB, aC, aD) {
      {
        aB[aC] = aD.value;
      }
    };
    var aa = "function" == typeof Symbol ? Symbol : {};
    var ab = aa.iterator || "@@iterator";
    var ac = aa.asyncIterator || "@@asyncIterator";
    var ad = aa.toStringTag || "@@toStringTag";
    function ae(aB, aC, aD) {
      {
        var aE = {
          value: aD,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aB, aC, aE);
        return aB[aC];
      }
    }
    try {
      ae({}, "");
    } catch (aC) {
      {
        ae = function (aE, aF, aG) {
          {
            return aE[aF] = aG;
          }
        };
      }
    }
    function af(aE, aF, aG, aH) {
      {
        var aI = aF && aF.prototype instanceof am ? aF : am;
        var aJ = Object.create(aI.prototype);
        var aK = new az(aH || []);
        a9(aJ, "_invoke", {
          value: av(aE, aG, aK)
        });
        return aJ;
      }
    }
    function ag(aE, aF, aG) {
      {
        try {
          return {
            type: "normal",
            arg: aE.call(aF, aG)
          };
        } catch (aK) {
          {
            var aI = {
              type: "throw",
              arg: aK
            };
            return aI;
          }
        }
      }
    }
    var ah = "suspendedStart";
    var ai = "suspendedYield";
    var aj = "executing";
    var ak = "completed";
    var al = {};
    function am() {}
    function an() {}
    function ao() {}
    var ap = {};
    ae(ap, ab, function () {
      {
        return this;
      }
    });
    var aq = Object.getPrototypeOf;
    var ar = aq && aq(aq(aA([])));
    ar && ar !== a7 && a8.call(ar, ab) && (ap = ar);
    ao.prototype = am.prototype = Object.create(ap);
    var as = ao.prototype;
    function at(aE) {
      {
        ["next", "throw", "return"].forEach(function (aG) {
          {
            ae(aE, aG, function (aJ) {
              {
                return this._invoke(aG, aJ);
              }
            });
          }
        });
      }
    }
    function au(aE, aF) {
      {
        function aJ(aK, aL, aM, aN) {
          {
            var aP = ag(aE[aK], aE, aL);
            if ("throw" !== aP.type) {
              {
                var aQ = aP.arg;
                var aR = aQ.value;
                return aR && "object" == b(aR) && a8.call(aR, "__await") ? aF.resolve(aR.__await).then(function (aS) {
                  aJ("next", aS, aM, aN);
                }, function (aS) {
                  {
                    aJ("throw", aS, aM, aN);
                  }
                }) : aF.resolve(aR).then(function (aS) {
                  {
                    aQ.value = aS;
                    aM(aQ);
                  }
                }, function (aS) {
                  {
                    return aJ("throw", aS, aM, aN);
                  }
                });
              }
            }
            aN(aP.arg);
          }
        }
        var aH;
        a9(this, "_invoke", {
          value: function (aK, aL) {
            {
              function aO() {
                return new aF(function (aP, aQ) {
                  {
                    aJ(aK, aL, aP, aQ);
                  }
                });
              }
              return aH = aH ? aH.then(aO, aO) : aO();
            }
          }
        });
      }
    }
    function av(aE, aF, aG) {
      {
        var aI = ah;
        return function (aJ, aK) {
          {
            if (aI === aj) {
              throw Error("Generator is already running");
            }
            if (aI === ak) {
              {
                if ("throw" === aJ) {
                  throw aK;
                }
                var aM = {
                  value: a5,
                  done: true
                };
                return aM;
              }
            }
            for (aG.method = aJ, aG.arg = aK;;) {
              {
                var aN = aG.delegate;
                if (aN) {
                  {
                    var aO = aw(aN, aG);
                    if (aO) {
                      {
                        if (aO === al) {
                          continue;
                        }
                        return aO;
                      }
                    }
                  }
                }
                if ("next" === aG.method) {
                  aG.sent = aG._sent = aG.arg;
                } else {
                  if ("throw" === aG.method) {
                    {
                      if (aI === ah) {
                        throw aI = ak, aG.arg;
                      }
                      aG.dispatchException(aG.arg);
                    }
                  } else {
                    "return" === aG.method && aG.abrupt("return", aG.arg);
                  }
                }
                aI = aj;
                var aP = ag(aE, aF, aG);
                if ("normal" === aP.type) {
                  {
                    if (aI = aG.done ? ak : ai, aP.arg === al) {
                      continue;
                    }
                    var aQ = {
                      value: aP.arg,
                      done: aG.done
                    };
                    return aQ;
                  }
                }
                "throw" === aP.type && (aI = ak, aG.method = "throw", aG.arg = aP.arg);
              }
            }
          }
        };
      }
    }
    function aw(aE, aF) {
      {
        var aK = aF.method;
        var aL = aE.iterator[aK];
        if (aL === a5) {
          aF.delegate = null;
          "throw" === aK && aE.iterator.return && (aF.method = "return", aF.arg = a5, aw(aE, aF), "throw" === aF.method) || "return" !== aK && (aF.method = "throw", aF.arg = new TypeError("The iterator does not provide a '" + aK + "' method"));
          return al;
        }
        var aM = ag(aL, aE.iterator, aF.arg);
        if ("throw" === aM.type) {
          aF.method = "throw";
          aF.arg = aM.arg;
          aF.delegate = null;
          return al;
        }
        var aJ = aM.arg;
        return aJ ? aJ.done ? (aF[aE.resultName] = aJ.value, aF.next = aE.nextLoc, "return" !== aF.method && (aF.method = "next", aF.arg = a5), aF.delegate = null, al) : aJ : (aF.method = "throw", aF.arg = new TypeError("iterator result is not an object"), aF.delegate = null, al);
      }
    }
    function ax(aE) {
      {
        var aH = {
          tryLoc: aE[0]
        };
        1 in aE && (aH.catchLoc = aE[1]);
        2 in aE && (aH.finallyLoc = aE[2], aH.afterLoc = aE[3]);
        this.tryEntries.push(aH);
      }
    }
    function ay(aE) {
      {
        var aF = aE.completion || {};
        aF.type = "normal";
        delete aF.arg;
        aE.completion = aF;
      }
    }
    function az(aE) {
      {
        var aG = {
          tryLoc: "root"
        };
        this.tryEntries = [aG];
        aE.forEach(ax, this);
        this.reset(true);
      }
    }
    function aA(aE) {
      {
        if (aE || "" === aE) {
          {
            var aG = aE[ab];
            if (aG) {
              return aG.call(aE);
            }
            if ("function" == typeof aE.next) {
              return aE;
            }
            if (!isNaN(aE.length)) {
              {
                var aH = -1;
                var aI = function aL() {
                  {
                    for (; ++aH < aE.length;) {
                      if (a8.call(aE, aH)) {
                        aL.value = aE[aH];
                        aL.done = false;
                        return aL;
                      }
                    }
                    aL.value = a5;
                    aL.done = true;
                    return aL;
                  }
                };
                return aI.next = aI;
              }
            }
          }
        }
        throw new TypeError(b(aE) + " is not iterable");
      }
    }
    an.prototype = ao;
    a9(as, "constructor", {
      value: ao,
      configurable: true
    });
    a9(ao, "constructor", {
      value: an,
      configurable: true
    });
    an.displayName = ae(ao, ad, "GeneratorFunction");
    at(au.prototype);
    ae(au.prototype, ac, function () {
      {
        return this;
      }
    });
    a6.AsyncIterator = au;
    a6.async = function (aE, aF, aG, aH, aI) {
      {
        undefined === aI && (aI = Promise);
        var aJ = new au(af(aE, aF, aG, aH), aI);
        return a6.isGeneratorFunction(aF) ? aJ : aJ.next().then(function (aL) {
          {
            return aL.done ? aL.value : aJ.next();
          }
        });
      }
    };
    at(as);
    ae(as, ad, "Generator");
    ae(as, ab, function () {
      {
        return this;
      }
    });
    ae(as, "toString", function () {
      return "[object Generator]";
    });
    a6.keys = function (aE) {
      {
        var aF = Object(aE);
        var aG = [];
        for (var aH in aF) aG.push(aH);
        aG.reverse();
        return function aJ() {
          {
            for (; aG.length;) {
              {
                var aK = aG.pop();
                if (aK in aF) {
                  aJ.value = aK;
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
    a6.values = aA;
    az.prototype = {
      constructor: az,
      reset: function (aE) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = a5, this.done = false, this.delegate = null, this.method = "next", this.arg = a5, this.tryEntries.forEach(ay), !aE) {
            for (var aG in this) "t" === aG.charAt(0) && a8.call(this, aG) && !isNaN(+aG.slice(1)) && (this[aG] = a5);
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
      dispatchException: function (aE) {
        {
          if (this.done) {
            throw aE;
          }
          var aG = this;
          function aM(aN, aO) {
            {
              aJ.type = "throw";
              aJ.arg = aE;
              aG.next = aN;
              aO && (aG.method = "next", aG.arg = a5);
              return !!aO;
            }
          }
          for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
            {
              var aI = this.tryEntries[aH];
              var aJ = aI.completion;
              if ("root" === aI.tryLoc) {
                return aM("end");
              }
              if (aI.tryLoc <= this.prev) {
                {
                  var aK = a8.call(aI, "catchLoc");
                  var aL = a8.call(aI, "finallyLoc");
                  if (aK && aL) {
                    {
                      if (this.prev < aI.catchLoc) {
                        return aM(aI.catchLoc, true);
                      }
                      if (this.prev < aI.finallyLoc) {
                        return aM(aI.finallyLoc);
                      }
                    }
                  } else {
                    if (aK) {
                      {
                        if (this.prev < aI.catchLoc) {
                          return aM(aI.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aL) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aI.finallyLoc) {
                          return aM(aI.finallyLoc);
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
      abrupt: function (aE, aF) {
        {
          for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
            {
              var aH = this.tryEntries[aG];
              if (aH.tryLoc <= this.prev && a8.call(aH, "finallyLoc") && this.prev < aH.finallyLoc) {
                {
                  var aI = aH;
                  break;
                }
              }
            }
          }
          aI && ("break" === aE || "continue" === aE) && aI.tryLoc <= aF && aF <= aI.finallyLoc && (aI = null);
          var aJ = aI ? aI.completion : {};
          aJ.type = aE;
          aJ.arg = aF;
          return aI ? (this.method = "next", this.next = aI.finallyLoc, al) : this.complete(aJ);
        }
      },
      complete: function (aE, aF) {
        {
          if ("throw" === aE.type) {
            throw aE.arg;
          }
          "break" === aE.type || "continue" === aE.type ? this.next = aE.arg : "return" === aE.type ? (this.rval = this.arg = aE.arg, this.method = "return", this.next = "end") : "normal" === aE.type && aF && (this.next = aF);
          return al;
        }
      },
      finish: function (aE) {
        for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
          {
            var aH = this.tryEntries[aG];
            if (aH.finallyLoc === aE) {
              this.complete(aH.completion, aH.afterLoc);
              ay(aH);
              return al;
            }
          }
        }
      },
      catch: function (aE) {
        {
          for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
            {
              var aH = this.tryEntries[aG];
              if (aH.tryLoc === aE) {
                {
                  var aI = aH.completion;
                  if ("throw" === aI.type) {
                    {
                      var aJ = aI.arg;
                      ay(aH);
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
      delegateYield: function (aE, aF, aG) {
        this.delegate = {
          iterator: aA(aE),
          resultName: aF,
          nextLoc: aG
        };
        "next" === this.method && (this.arg = a5);
        return al;
      }
    };
    return a6;
  }
  function h(a4, a5, a6, a7, a8, a9, aa) {
    {
      try {
        {
          var ac = a4[a9](aa);
          var ad = ac.value;
        }
      } catch (ag) {
        {
          return void a6(ag);
        }
      }
      ac.done ? a5(ad) : Promise.resolve(ad).then(a7, a8);
    }
  }
  function i(a4) {
    return function () {
      var a7 = this;
      var a8 = arguments;
      return new Promise(function (a9, aa) {
        var ac = a4.apply(a7, a8);
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
  var v = "10019";
  var w = "";
  var x = "";
  var y = "FR*r!isE5W";
  function z() {
    {
      return A.apply(this, arguments);
    }
  }
  function A() {
    var a4 = {
      DZkcX: function (a5, a6) {
        return a5 == a6;
      }
    };
    {
      A = i(g().mark(function a5() {
        var a6 = {
          KVbxN: "3|5|4|0|1|2",
          fJuHr: "throw",
          Qskvf: function (at, au) {
            return at !== au;
          },
          pJRDh: "return",
          GFXtB: "next",
          EhXSc: "iterator result is not an object",
          tpewF: function (at, au, av, aw) {
            return at(au, av, aw);
          },
          mINLI: function (at, au) {
            return at + au;
          },
          zoxaV: "The iterator does not provide a '",
          zqewC: "euhhq",
          yzaDH: function (at, au, av) {
            return at(au, av);
          },
          HFXLH: "activityId=67&sessionId=undefined&sig=undefined&token=undefined",
          Qepvp: " 抽奖获得：",
          erTwv: function (at) {
            return at();
          },
          YaPxV: "end",
          aBPVE: function (at, au) {
            return at !== au;
          },
          ahTYs: "NXzcI",
          ZXkdm: function (at, au) {
            return at(au);
          },
          cMLue: "root",
          VukNf: function (at, au) {
            return at == au;
          },
          NodDU: "string",
          dtERL: "Object",
          dBSYa: "Map",
          NWQai: function (at, au) {
            return at === au;
          },
          Ykvjo: "Arguments",
          pzdbJ: function (at, au) {
            return at !== au;
          },
          qgxob: "UXFzJ",
          AFufv: "QhElq",
          aOAQJ: function (at, au) {
            return at !== au;
          },
          gRuET: "PDpIn",
          KFMPl: "OCqBe",
          zMolp: function (at, au) {
            return at(au);
          },
          WPAiM: "先去boxjs填写账号密码",
          XakRz: function (at, au) {
            return at === au;
          },
          MXyXN: "SxtZh",
          ZkIvx: "nVepT",
          MXQSz: function (at) {
            return at();
          },
          cliYo: "用户：",
          BfBmB: "开始任务",
          LaNGh: "获取sessionId",
          wUzlz: "/api/account/init",
          laMQP: "获取signature_key",
          RyZRb: function (at, au) {
            return at(au);
          },
          BCqad: "/web/init?client_id=",
          GRqoT: "wQLIJ",
          aYiUn: "continue",
          GDEEB: function (at, au, av) {
            return at(au, av);
          },
          UfPXs: "/api/zbtxz/login",
          DsOPc: "登录成功",
          SJiVg: "/api/app_feature_switch/list",
          WRZvJ: "进入app：",
          FgoxE: "————————————",
          CdZbi: "获取登录cookie",
          ayPNQ: "&sessionId=",
          LnDms: function (at, au) {
            return at === au;
          },
          iaQdv: "uGDbW",
          iTGNy: "WetOq",
          pUepN: function (at, au) {
            return at(au);
          },
          hBUEL: "/prod-api/user-read/list/",
          bVRTf: function (at, au) {
            return at != au;
          },
          RVbBX: function (at, au) {
            return at === au;
          },
          HGwdL: "bRxoF",
          XedOB: "阅读已经完成",
          ihdif: function (at, au) {
            return at(au);
          },
          nDxwY: function (at, au) {
            return at !== au;
          },
          nzBow: "hHbww",
          ldjyb: "xsEoT",
          toZhe: "文章：",
          Agvqt: "AoqUz",
          QRRbW: "SAgfs",
          ynuCy: "/prod-api/already-read/article/new?signature=",
          PHXgN: function (at, au) {
            return at(au);
          },
          wHjAz: "/prod-api/user-read-count/count/",
          xznvB: "/tzrb/user/loginWC?accountId=",
          lJXxx: "获取抽奖cookie",
          jMpzu: "/tzrb/awardUpgrade/list?activityId=67",
          sAUpN: function (at) {
            return at();
          },
          ioZcv: "CNnry",
          ckome: function (at, au) {
            return at !== au;
          },
          SWwrE: "NKfHT"
        };
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
          return g().wrap(function (au) {
            {
              for (;;) {
                switch (au.prev = au.next) {
                  case 0:
                    if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                      {
                        au.next = 6;
                        break;
                      }
                    }
                    console.log("先去boxjs填写账号密码");
                    au.next = 5;
                    return a2("先去boxjs填写账号密码");
                  case 5:
                    return au.abrupt("return");
                  case 6:
                    au.next = 8;
                    return a0();
                  case 8:
                    k = au.sent;
                    a7 = j.split(" ");
                    a8 = c(a7);
                    au.prev = 11;
                    a8.s();
                  case 13:
                    if ((a9 = a8.n()).done) {
                      {
                        au.next = 120;
                        break;
                      }
                    }
                    aa = a9.value;
                    console.log("随机生成UA");
                    ab = Y();
                    n = ab.ua;
                    o = ab.commonUa;
                    p = ab.uuid;
                    console.log(n);
                    console.log(o);
                    t = aa.split("&")[0];
                    u = aa.split("&")[1];
                    console.log("用户：".concat(t, "开始任务"));
                    console.log("获取sessionId");
                    au.next = 28;
                    return H("/api/account/init");
                  case 28:
                    ac = au.sent;
                    w = ac.data.session.id;
                    console.log(w);
                    console.log("获取signature_key");
                    au.next = 34;
                    return B("/web/init?client_id=".concat(v));
                  case 34:
                    ad = au.sent;
                    l = ad.data.client.signature_key;
                    console.log(l);
                    console.log("获取code");
                    au.next = 40;
                    return D("/web/oauth/credential_auth");
                  case 40:
                    if (ae = au.sent, ae.data) {
                      {
                        au.next = 44;
                        break;
                      }
                    }
                    console.log(ae.message);
                    return au.abrupt("continue", 118);
                  case 44:
                    af = ae.data.authorization_code.code;
                    console.log(af);
                    console.log("登录");
                    au.next = 49;
                    return H("/api/zbtxz/login", "check_token=&code=".concat(af, "&token=&type=-1&union_id="));
                  case 49:
                    ag = au.sent;
                    console.log("登录成功");
                    s = ag.data.session.account_id;
                    w = ag.data.session.id;
                    au.next = 55;
                    return F("/api/app_feature_switch/list");
                  case 55:
                    ah = au.sent;
                    console.log("进入app：".concat(ah.message));
                    console.log("————————————");
                    console.log("阅读抽奖");
                    q = "";
                    console.log("获取登录cookie");
                    au.next = 63;
                    return J("/prod-api/user-read/app/login?id=".concat(s, "&sessionId=").concat(w, "&deviceId=").concat(p));
                  case 63:
                    if (q = au.sent, q) {
                      {
                        au.next = 66;
                        break;
                      }
                    }
                    return au.abrupt("continue", 118);
                  case 66:
                    console.log(q);
                    au.next = 69;
                    return L("/prod-api/user-read/list/".concat(X()));
                  case 69:
                    if (ai = au.sent, ai.data.completedCount != ai.data.sum) {
                      {
                        au.next = 74;
                        break;
                      }
                    }
                    console.log("阅读已经完成");
                    au.next = 98;
                    break;
                  case 74:
                    aj = c(ai.data.articleIsReadList);
                    au.prev = 75;
                    aj.s();
                  case 77:
                    if ((ak = aj.n()).done) {
                      {
                        au.next = 90;
                        break;
                      }
                    }
                    if (al = ak.value, console.log("文章：".concat(al.title)), !al.isRead) {
                      {
                        au.next = 83;
                        break;
                      }
                    }
                    console.log("已阅读");
                    return au.abrupt("continue", 88);
                  case 83:
                    am = JSON.stringify({
                      timestamp: Date.now(),
                      articleId: al.id,
                      accountId: s
                    });
                    au.next = 86;
                    return L("/prod-api/already-read/article/new?signature=".concat(T(am)), am);
                  case 86:
                    an = au.sent;
                    console.log("阅读：".concat(an.msg));
                  case 88:
                    au.next = 77;
                    break;
                  case 90:
                    au.next = 95;
                    break;
                  case 92:
                    au.prev = 92;
                    au.t0 = au.catch(75);
                    aj.e(au.t0);
                  case 95:
                    au.prev = 95;
                    aj.f();
                    return au.finish(95);
                  case 98:
                    au.next = 100;
                    return L("/prod-api/user-read-count/count/".concat(X()));
                  case 100:
                    ao = au.sent;
                    r = "";
                    au.next = 104;
                    return N("/tzrb/user/loginWC?accountId=".concat(s, "&sessionId=").concat(w));
                  case 104:
                    r = au.sent;
                    console.log("获取抽奖cookie");
                    console.log(r);
                    au.next = 109;
                    return P("/tzrb/awardUpgrade/list?activityId=67");
                  case 109:
                    ap = au.sent;
                    aq = ap.data;
                    ar = g().mark(function aD() {
                      {
                        var aF;
                        var aG;
                        return g().wrap(function (aH) {
                          {
                            for (;;) {
                              switch (aH.prev = aH.next) {
                                case 0:
                                  aH.next = 2;
                                  return R("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                                case 2:
                                  aF = aH.sent;
                                  aG = aq.findIndex(function (aK) {
                                    return aK.id == aF.data;
                                  });
                                  -1 != aG ? (console.log("抽奖获得：".concat(aq[aG].title)), x += "用户：".concat(t, " 抽奖获得：").concat(aq[aG].title, "\n")) : console.log(JSON.stringify(aF));
                                case 5:
                                case "end":
                                  return aH.stop();
                              }
                            }
                          }
                        }, aD);
                      }
                    });
                    as = 0;
                  case 113:
                    if (!(as < ao.data)) {
                      {
                        au.next = 118;
                        break;
                      }
                    }
                    return au.delegateYield(ar(), "t1", 115);
                  case 115:
                    as++;
                    au.next = 113;
                    break;
                  case 118:
                    au.next = 13;
                    break;
                  case 120:
                    au.next = 125;
                    break;
                  case 122:
                    au.prev = 122;
                    au.t2 = au.catch(11);
                    a8.e(au.t2);
                  case 125:
                    au.prev = 125;
                    a8.f();
                    return au.finish(125);
                  case 128:
                    if (!x) {
                      {
                        au.next = 131;
                        break;
                      }
                    }
                    au.next = 131;
                    return a2(x);
                  case 131:
                  case "end":
                    return au.stop();
                }
              }
            }
          }, a5, null, [[11, 122, 125, 128], [75, 92, 95, 98]]);
        }
      }));
      return A.apply(this, arguments);
    }
  }
  function B(a4) {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function a5(a6) {
      {
        return g().wrap(function (a8) {
          {
            for (;;) {
              switch (a8.prev = a8.next) {
                case 0:
                  return a8.abrupt("return", new Promise(function (ab) {
                    {
                      var ad = {
                        url: "https://passport.tmuyun.com".concat(a6),
                        headers: {
                          Connection: "Keep-Alive",
                          "Cache-Control": "no-cache",
                          "X-REQUEST-ID": W(),
                          "Accept-Encoding": "gzip",
                          "user-agent": n
                        }
                      };
                      $.get(ad, function () {
                        {
                          var ae = i(g().mark(function ag(ah, ai, aj) {
                            {
                              return g().wrap(function (al) {
                                {
                                  for (;;) {
                                    switch (al.prev = al.next) {
                                      case 0:
                                        try {
                                          ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(aj));
                                        } catch (ao) {
                                          {
                                            $.logErr(ao, ai);
                                          }
                                        } finally {
                                          {
                                            ab();
                                          }
                                        }
                                      case 1:
                                      case "end":
                                        return al.stop();
                                    }
                                  }
                                }
                              }, ag);
                            }
                          }));
                          return function (ah, ai, aj) {
                            {
                              return ae.apply(this, arguments);
                            }
                          };
                        }
                      }());
                    }
                  }));
                case 1:
                case "end":
                  return a8.stop();
              }
            }
          }
        }, a5);
      }
    }));
    return C.apply(this, arguments);
  }
  function D(a4) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function a5(a6) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = U();
              return a9.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://passport.tmuyun.com".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": a8.uuid,
                    "X-SIGNATURE": a8.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": n
                  },
                  body: a8.body
                };
                $.post(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              {
                                ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(aj));
                              }
                            } catch (an) {
                              $.logErr(an, ai);
                            } finally {
                              {
                                ab();
                              }
                            }
                          case 1:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ag);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return a9.stop();
          }
        }
      }, a5);
    }));
    return E.apply(this, arguments);
  }
  function F(a4) {
    return G.apply(this, arguments);
  }
  function G() {
    G = i(g().mark(function a5(a6) {
      var a7;
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              a7 = V(a6);
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://vapp.taizhou.com.cn".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a7.time,
                    "X-SESSION-ID": w,
                    "X-REQUEST-ID": a7.uuid,
                    "X-SIGNATURE": a7.signature,
                    "X-TENANT-ID": m,
                    "X-ACCOUNT-ID": s,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": o
                  }
                };
                $.get(ac, function () {
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
              return a8.stop();
          }
        }
      }, a5);
    }));
    return G.apply(this, arguments);
  }
  function H(a4, a5) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a4(a5, a6) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = V(a5);
              return a9.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://vapp.taizhou.com.cn".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a8.time,
                    "X-SESSION-ID": w,
                    "X-REQUEST-ID": a8.uuid,
                    "X-SIGNATURE": a8.signature,
                    "X-TENANT-ID": m,
                    "X-ACCOUNT-ID": s,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": o
                  },
                  body: a6
                };
                $.post(ac, function () {
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
                            aa(JSON.parse(ai));
                          case 9:
                            aj.next = 14;
                            break;
                          case 11:
                            aj.prev = 11;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ah);
                          case 14:
                            aj.prev = 14;
                            aa();
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
  function J(a4) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a4(a5) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a9) {
                var ab = {
                  url: "https://xmt.taizhou.com.cn".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: q,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !af) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 16;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(ah).code) {
                              ai.next = 13;
                              break;
                            }
                            console.log(JSON.parse(ah).msg);
                            x += "用户：".concat(t, " ").concat(JSON.parse(ah).msg, "\n");
                            a9("");
                            return ai.abrupt("return");
                          case 13:
                            q = $.isNode() ? ag.headers["set-cookie"][0] : ag.headers["set-cookie"] || ag.headers["Set-Cookie"];
                            q = q.split(";")[0];
                            a9(q);
                          case 16:
                            ai.next = 21;
                            break;
                          case 18:
                            ai.prev = 18;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, ag);
                          case 21:
                            ai.prev = 21;
                            a9();
                            return ai.finish(21);
                          case 24:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ae, null, [[0, 18, 21, 24]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
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
    return K.apply(this, arguments);
  }
  function L(a4) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a6(a7) {
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://xmt.taizhou.com.cn".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: q,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ac, function () {
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
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a6);
    }));
    return M.apply(this, arguments);
  }
  function N(a4) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a4(a5) {
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              return a7.abrupt("return", new Promise(function (a9) {
                var ab = {
                  url: "https://srv-app.taizhou.com.cn".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: r,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ab, function () {
                  var ad = i(g().mark(function ae(af, ag, ah) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            if (ai.prev = 0, !af) {
                              ai.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(af)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ai.next = 11;
                            break;
                          case 6:
                            ai.next = 8;
                            return $.wait(2000);
                          case 8:
                            r = $.isNode() ? ag.headers["set-cookie"][0] : ag.headers["set-cookie"] || ag.headers["Set-Cookie"];
                            r = r.split(";")[0];
                            a9(r);
                          case 11:
                            ai.next = 16;
                            break;
                          case 13:
                            ai.prev = 13;
                            ai.t0 = ai.catch(0);
                            $.logErr(ai.t0, ag);
                          case 16:
                            ai.prev = 16;
                            a9();
                            return ai.finish(16);
                          case 19:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ae, null, [[0, 13, 16, 19]]);
                  }));
                  return function (af, ag, ah) {
                    return ad.apply(this, arguments);
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
    return O.apply(this, arguments);
  }
  function P(a4) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function a5(a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  Connection: "Keep-Alive",
                  Accept: "*/*",
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  cookie: r,
                  Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                  "X-Requested-With": "com.shangc.tiennews.taizhou",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                };
                var ad = {
                  url: "https://srv-app.taizhou.com.cn".concat(a6),
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
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a5);
    }));
    return Q.apply(this, arguments);
  }
  function R(a4, a5) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function a5(a6, a7) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://srv-app.taizhou.com.cn".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: r,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  body: a7
                };
                $.post(ad, function () {
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
                            ab(JSON.parse(ai));
                          case 9:
                            ak.next = 14;
                            break;
                          case 11:
                            ak.prev = 11;
                            ak.t0 = ak.catch(0);
                            $.logErr(ak.t0, ah);
                          case 14:
                            ak.prev = 14;
                            ab();
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
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a5);
    }));
    return S.apply(this, arguments);
  }
  function T(a4) {
    var a5 = k.loadSM2();
    return a5.doEncrypt(a4, "04A50803A27F000D6B310607EBA2A1C899E82872C0B538CA41DB6F0183B4C7E164DAFC6946ABF93C8AF1C0AD96D0E770D29264EF9F907DDBAE97A2A0BB1036D4AC", 1);
  }
  function U() {
    var ac = new (k.loadJSEncrypt())();
    ac.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    u = ac.encrypt(u);
    var a6 = W();
    var a7 = "client_id=".concat(v, "&password=").concat(u, "&phone_number=").concat(t);
    var a8 = "post%%/web/oauth/credential_auth?".concat(a7, "%%").concat(a6, "%%");
    a7 = "client_id=".concat(v, "&password=").concat(encodeURIComponent(u), "&phone_number=").concat(t);
    CryptoJS = k.createCryptoJS();
    var a9 = CryptoJS.HmacSHA256(a8, l);
    var aa = CryptoJS.enc.Hex.stringify(a9);
    var ab = {
      uuid: a6,
      signature: aa,
      body: a7
    };
    return ab;
  }
  function V(a4) {
    var a5 = W();
    var a6 = Date.now();
    a4.indexOf("?") > 0 && (a4 = a4.substring(0, a4.indexOf("?")));
    CryptoJS = k.createCryptoJS();
    var a7 = CryptoJS.SHA256("".concat(a4, "&&").concat(w, "&&").concat(a5, "&&").concat(a6, "&&").concat(y, "&&").concat(m)).toString();
    var a8 = {
      uuid: a5,
      time: a6,
      signature: a7
    };
    return a8;
  }
  function W() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a4) {
      var a5 = 16 * Math.random() | 0;
      var a6 = "x" === a4 ? a5 : 3 & a5 | 8;
      return a6.toString(16);
    });
  }
  function X() {
    var a4 = new Date();
    var a5 = a4.getFullYear();
    var a6 = String(a4.getMonth() + 1).padStart(2, "0");
    var a7 = String(a4.getDate()).padStart(2, "0");
    return "".concat(a5).concat(a6).concat(a7);
  }
  function Y() {
    var a4 = "6.0.2";
    var a5 = W();
    var a6 = Z(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var a7 = "Xiaomi " + a6;
    var a8 = "Android";
    var a9 = "".concat(a8.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(a4, ";1.0;null;").concat(a6);
    var aa = "".concat(a4, ";").concat(a5, ";").concat(a7, ";").concat(a8, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0");
    var ab = {
      ua: a9,
      commonUa: aa,
      uuid: a5
    };
    return ab;
  }
  function Z(a4) {
    return a4[Math.floor(Math.random() * a4.length)];
  }
  function a0() {
    return a1.apply(this, arguments);
  }
  function a1() {
    a1 = i(g().mark(function a5() {
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
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ag) {
                            $.setdata(ag, "Utils_Code");
                            eval(ag);
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
      }, a5);
    }));
    return a1.apply(this, arguments);
  }
  function a2(a4) {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = i(g().mark(function a6(a7) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              if (!$.isNode()) {
                a8.next = 5;
                break;
              }
              a8.next = 3;
              return notify.sendNotify($.name, a7);
            case 3:
              a8.next = 6;
              break;
            case 5:
              $.msg($.name, "", a7);
            case 6:
            case "end":
              return a8.stop();
          }
        }
      }, a6);
    }));
    return a3.apply(this, arguments);
  }
  i(g().mark(function a4() {
    return g().wrap(function (a5) {
      for (;;) {
        switch (a5.prev = a5.next) {
          case 0:
            a5.next = 2;
            return z();
          case 2:
          case "end":
            return a5.stop();
        }
      }
    }, a4);
  }))().catch(function (a5) {
    $.log(a5);
  }).finally(function () {
    $.done({});
  });
})();