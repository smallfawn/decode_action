//Wed Oct 30 2024 05:27:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  function b(ae) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ah) {
        return typeof ah;
      } : function (ah) {
        {
          return ah && "function" == typeof Symbol && ah.constructor === Symbol && ah !== Symbol.prototype ? "symbol" : typeof ah;
        }
      };
      return b(ae);
    }
  }
  function c(ae, af) {
    {
      var ah = "undefined" != typeof Symbol && ae[Symbol.iterator] || ae["@@iterator"];
      if (!ah) {
        {
          if (Array.isArray(ae) || (ah = d(ae)) || af && ae && "number" == typeof ae.length) {
            {
              ah && (ae = ah);
              var ai = 0;
              var aj = function () {};
              return {
                s: aj,
                n: function () {
                  {
                    var ao = {
                      done: true
                    };
                    return ai >= ae.length ? ao : {
                      done: false,
                      value: ae[ai++]
                    };
                  }
                },
                e: function (ao) {
                  {
                    throw ao;
                  }
                },
                f: aj
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var ak;
      var al = true;
      var am = false;
      return {
        s: function () {
          {
            ah = ah.call(ae);
          }
        },
        n: function () {
          {
            var ar = ah.next();
            al = ar.done;
            return ar;
          }
        },
        e: function (ap) {
          am = true;
          ak = ap;
        },
        f: function () {
          {
            try {
              {
                al || null == ah.return || ah.return();
              }
            } finally {
              {
                if (am) {
                  throw ak;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(ae, af) {
    {
      if (ae) {
        if ("string" == typeof ae) {
          return f(ae, af);
        }
        var ag = {}.toString.call(ae).slice(8, -1);
        "Object" === ag && ae.constructor && (ag = ae.constructor.name);
        return "Map" === ag || "Set" === ag ? Array.from(ae) : "Arguments" === ag || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ag) ? f(ae, af) : undefined;
      }
    }
  }
  function f(ae, af) {
    {
      (null == af || af > ae.length) && (af = ae.length);
      for (var ah = 0, ai = Array(af); ah < af; ah++) {
        ai[ah] = ae[ah];
      }
      return ai;
    }
  }
  function g() {
    "use strict";

    g = function () {
      {
        return ag;
      }
    };
    var af;
    var ag = {
      wrap: ap,
      isGeneratorFunction: function (aO) {
        {
          var aP = "function" == typeof aO && aO.constructor;
          return !!aP && (aP === ax || "GeneratorFunction" === (aP.displayName || aP.name));
        }
      },
      mark: function (aO) {
        Object.setPrototypeOf ? Object.setPrototypeOf(aO, ay) : (aO.__proto__ = ay, ao(aO, an, "GeneratorFunction"));
        aO.prototype = Object.create(aC);
        return aO;
      },
      awrap: function (aO) {
        {
          var aP = {
            __await: aO
          };
          return aP;
        }
      },
      AsyncIterator: aE,
      async: function (aO, aP, aQ, aR, aS) {
        {
          undefined === aS && (aS = Promise);
          var aV = new aE(ap(aO, aP, aQ, aR), aS);
          return ag.isGeneratorFunction(aP) ? aV : aV.next().then(function (aX) {
            return aX.done ? aX.value : aV.next();
          });
        }
      }
    };
    var ah = Object.prototype;
    var ai = ah.hasOwnProperty;
    var aj = Object.defineProperty || function (aL, aM, aN) {
      {
        aL[aM] = aN.value;
      }
    };
    var ak = "function" == typeof Symbol ? Symbol : {};
    var al = ak.iterator || "@@iterator";
    var am = ak.asyncIterator || "@@asyncIterator";
    var an = ak.toStringTag || "@@toStringTag";
    function ao(aL, aM, aN) {
      {
        var aO = {
          value: aN,
          enumerable: true,
          configurable: true,
          writable: true
        };
        Object.defineProperty(aL, aM, aO);
        return aL[aM];
      }
    }
    try {
      {
        ao({}, "");
      }
    } catch (aM) {
      ao = function (aO, aP, aQ) {
        {
          return aO[aP] = aQ;
        }
      };
    }
    function ap(aO, aP, aQ, aR) {
      {
        var aS = aP && aP.prototype instanceof aw ? aP : aw;
        var aT = Object.create(aS.prototype);
        var aU = new aJ(aR || []);
        aj(aT, "_invoke", {
          value: aF(aO, aQ, aU)
        });
        return aT;
      }
    }
    function aq(aO, aP, aQ) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aO.call(aP, aQ)
            };
          }
        } catch (aV) {
          {
            var aS = {
              type: "throw",
              arg: aV
            };
            return aS;
          }
        }
      }
    }
    var ar = "suspendedStart";
    var as = "suspendedYield";
    var at = "executing";
    var au = "completed";
    var av = {};
    function aw() {}
    function ax() {}
    function ay() {}
    var az = {};
    ao(az, al, function () {
      {
        return this;
      }
    });
    var aA = Object.getPrototypeOf;
    var aB = aA && aA(aA(aK([])));
    aB && aB !== ah && ai.call(aB, al) && (az = aB);
    ay.prototype = aw.prototype = Object.create(az);
    var aC = ay.prototype;
    function aD(aO) {
      {
        ["next", "throw", "return"].forEach(function (aQ) {
          {
            ao(aO, aQ, function (aT) {
              {
                return this._invoke(aQ, aT);
              }
            });
          }
        });
      }
    }
    function aE(aO, aP) {
      {
        function aT(aU, aV, aW, aX) {
          {
            var aZ = aq(aO[aU], aO, aV);
            if ("throw" !== aZ.type) {
              {
                var b0 = aZ.arg;
                var b1 = b0.value;
                return b1 && "object" == b(b1) && ai.call(b1, "__await") ? aP.resolve(b1.__await).then(function (b2) {
                  {
                    aT("next", b2, aW, aX);
                  }
                }, function (b2) {
                  {
                    aT("throw", b2, aW, aX);
                  }
                }) : aP.resolve(b1).then(function (b2) {
                  {
                    b0.value = b2;
                    aW(b0);
                  }
                }, function (b2) {
                  return aT("throw", b2, aW, aX);
                });
              }
            }
            aX(aZ.arg);
          }
        }
        var aR;
        aj(this, "_invoke", {
          value: function (aU, aV) {
            {
              function aY() {
                {
                  return new aP(function (b0, b1) {
                    aT(aU, aV, b0, b1);
                  });
                }
              }
              return aR = aR ? aR.then(aY, aY) : aY();
            }
          }
        });
      }
    }
    function aF(aO, aP, aQ) {
      {
        var aS = ar;
        return function (aT, aU) {
          if (aS === at) {
            throw Error("Generator is already running");
          }
          if (aS === au) {
            {
              if ("throw" === aT) {
                throw aU;
              }
              var aW = {
                value: af,
                done: true
              };
              return aW;
            }
          }
          for (aQ.method = aT, aQ.arg = aU;;) {
            {
              var aX = aQ.delegate;
              if (aX) {
                {
                  var aY = aG(aX, aQ);
                  if (aY) {
                    {
                      if (aY === av) {
                        continue;
                      }
                      return aY;
                    }
                  }
                }
              }
              if ("next" === aQ.method) {
                aQ.sent = aQ._sent = aQ.arg;
              } else {
                if ("throw" === aQ.method) {
                  {
                    if (aS === ar) {
                      throw aS = au, aQ.arg;
                    }
                    aQ.dispatchException(aQ.arg);
                  }
                } else {
                  "return" === aQ.method && aQ.abrupt("return", aQ.arg);
                }
              }
              aS = at;
              var aZ = aq(aO, aP, aQ);
              if ("normal" === aZ.type) {
                {
                  if (aS = aQ.done ? au : as, aZ.arg === av) {
                    continue;
                  }
                  var b0 = {
                    value: aZ.arg,
                    done: aQ.done
                  };
                  return b0;
                }
              }
              "throw" === aZ.type && (aS = au, aQ.method = "throw", aQ.arg = aZ.arg);
            }
          }
        };
      }
    }
    function aG(aO, aP) {
      {
        var aV = aP.method;
        var aW = aO.iterator[aV];
        if (aW === af) {
          aP.delegate = null;
          "throw" === aV && aO.iterator.return && (aP.method = "return", aP.arg = af, aG(aO, aP), "throw" === aP.method) || "return" !== aV && (aP.method = "throw", aP.arg = new TypeError("The iterator does not provide a '" + aV + "' method"));
          return av;
        }
        var aT = aq(aW, aO.iterator, aP.arg);
        if ("throw" === aT.type) {
          aP.method = "throw";
          aP.arg = aT.arg;
          aP.delegate = null;
          return av;
        }
        var aU = aT.arg;
        return aU ? aU.done ? (aP[aO.resultName] = aU.value, aP.next = aO.nextLoc, "return" !== aP.method && (aP.method = "next", aP.arg = af), aP.delegate = null, av) : aU : (aP.method = "throw", aP.arg = new TypeError("iterator result is not an object"), aP.delegate = null, av);
      }
    }
    function aH(aO) {
      {
        var aQ = {
          tryLoc: aO[0]
        };
        1 in aO && (aQ.catchLoc = aO[1]);
        2 in aO && (aQ.finallyLoc = aO[2], aQ.afterLoc = aO[3]);
        this.tryEntries.push(aQ);
      }
    }
    function aI(aO) {
      {
        var aP = aO.completion || {};
        aP.type = "normal";
        delete aP.arg;
        aO.completion = aP;
      }
    }
    function aJ(aO) {
      {
        var aP = {
          tryLoc: "root"
        };
        this.tryEntries = [aP];
        aO.forEach(aH, this);
        this.reset(true);
      }
    }
    function aK(aO) {
      {
        if (aO || "" === aO) {
          {
            var aP = aO[al];
            if (aP) {
              return aP.call(aO);
            }
            if ("function" == typeof aO.next) {
              return aO;
            }
            if (!isNaN(aO.length)) {
              {
                var aQ = -1;
                var aR = function aS() {
                  {
                    for (; ++aQ < aO.length;) {
                      if (ai.call(aO, aQ)) {
                        aS.value = aO[aQ];
                        aS.done = false;
                        return aS;
                      }
                    }
                    aS.value = af;
                    aS.done = true;
                    return aS;
                  }
                };
                return aR.next = aR;
              }
            }
          }
        }
        throw new TypeError(b(aO) + " is not iterable");
      }
    }
    ax.prototype = ay;
    aj(aC, "constructor", {
      value: ay,
      configurable: true
    });
    aj(ay, "constructor", {
      value: ax,
      configurable: true
    });
    ax.displayName = ao(ay, an, "GeneratorFunction");
    aD(aE.prototype);
    ao(aE.prototype, am, function () {
      return this;
    });
    aD(aC);
    ao(aC, an, "Generator");
    ao(aC, al, function () {
      {
        return this;
      }
    });
    ao(aC, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    ag.keys = function (aO) {
      {
        var aQ = Object(aO);
        var aR = [];
        for (var aS in aQ) aR.push(aS);
        aR.reverse();
        return function aU() {
          {
            for (; aR.length;) {
              {
                var aV = aR.pop();
                if (aV in aQ) {
                  aU.value = aV;
                  aU.done = false;
                  return aU;
                }
              }
            }
            aU.done = true;
            return aU;
          }
        };
      }
    };
    ag.values = aK;
    aJ.prototype = {
      constructor: aJ,
      reset: function (aO) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = af, this.done = false, this.delegate = null, this.method = "next", this.arg = af, this.tryEntries.forEach(aI), !aO) {
            for (var aP in this) "t" === aP.charAt(0) && ai.call(this, aP) && !isNaN(+aP.slice(1)) && (this[aP] = af);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aP = this.tryEntries[0].completion;
          if ("throw" === aP.type) {
            throw aP.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aO) {
        {
          if (this.done) {
            throw aO;
          }
          var aQ = this;
          function aW(aX, aY) {
            aT.type = "throw";
            aT.arg = aO;
            aQ.next = aX;
            aY && (aQ.method = "next", aQ.arg = af);
            return !!aY;
          }
          for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
            {
              var aS = this.tryEntries[aR];
              var aT = aS.completion;
              if ("root" === aS.tryLoc) {
                return aW("end");
              }
              if (aS.tryLoc <= this.prev) {
                {
                  var aU = ai.call(aS, "catchLoc");
                  var aV = ai.call(aS, "finallyLoc");
                  if (aU && aV) {
                    {
                      if (this.prev < aS.catchLoc) {
                        return aW(aS.catchLoc, true);
                      }
                      if (this.prev < aS.finallyLoc) {
                        return aW(aS.finallyLoc);
                      }
                    }
                  } else {
                    if (aU) {
                      {
                        if (this.prev < aS.catchLoc) {
                          return aW(aS.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aV) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aS.finallyLoc) {
                          return aW(aS.finallyLoc);
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
      abrupt: function (aO, aP) {
        {
          for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
            {
              var aS = this.tryEntries[aR];
              if (aS.tryLoc <= this.prev && ai.call(aS, "finallyLoc") && this.prev < aS.finallyLoc) {
                {
                  var aT = aS;
                  break;
                }
              }
            }
          }
          aT && ("break" === aO || "continue" === aO) && aT.tryLoc <= aP && aP <= aT.finallyLoc && (aT = null);
          var aU = aT ? aT.completion : {};
          aU.type = aO;
          aU.arg = aP;
          return aT ? (this.method = "next", this.next = aT.finallyLoc, av) : this.complete(aU);
        }
      },
      complete: function (aO, aP) {
        {
          if ("throw" === aO.type) {
            throw aO.arg;
          }
          "break" === aO.type || "continue" === aO.type ? this.next = aO.arg : "return" === aO.type ? (this.rval = this.arg = aO.arg, this.method = "return", this.next = "end") : "normal" === aO.type && aP && (this.next = aP);
          return av;
        }
      },
      finish: function (aO) {
        {
          for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
            {
              var aR = this.tryEntries[aQ];
              if (aR.finallyLoc === aO) {
                this.complete(aR.completion, aR.afterLoc);
                aI(aR);
                return av;
              }
            }
          }
        }
      },
      catch: function (aO) {
        {
          for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
            {
              var aR = this.tryEntries[aQ];
              if (aR.tryLoc === aO) {
                {
                  var aS = aR.completion;
                  if ("throw" === aS.type) {
                    {
                      var aT = aS.arg;
                      aI(aR);
                    }
                  }
                  return aT;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aO, aP, aQ) {
        {
          this.delegate = {
            iterator: aK(aO),
            resultName: aP,
            nextLoc: aQ
          };
          "next" === this.method && (this.arg = af);
          return av;
        }
      }
    };
    return ag;
  }
  function h(ae, af, ag, ah, ai, aj, ak) {
    try {
      {
        var al = ae[aj](ak);
        var am = al.value;
      }
    } catch (ap) {
      {
        return void ag(ap);
      }
    }
    al.done ? af(am) : Promise.resolve(am).then(ah, ai);
  }
  function i(ae) {
    return function () {
      var ah = this;
      var ai = arguments;
      return new Promise(function (aj, ak) {
        var al = ae.apply(ah, ai);
        function am(ao) {
          {
            h(al, aj, ak, am, an, "next", ao);
          }
        }
        function an(ao) {
          {
            h(al, aj, ak, am, an, "throw", ao);
          }
        }
        am(undefined);
      });
    };
  }
  var j = $.getdata("QingJiao") || "";
  var k = $.getdata("OCR_SERVER") || "https://ddddocr.xzxxn7.live";
  var l = undefined;
  var m = "";
  var n = "";
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "23";
  var x = "34";
  var y = "FR*r!isE5W";
  var z = "9080827ac7bea8dd4f8987a4bfc85b15";
  var A = "";
  var B = "0";
  var D = "";
  var E = "";
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    {
      G = i(g().mark(function af() {
        var ag = {
          zLHLS: function (bl, bm) {
            return bl < bm;
          },
          fjEjw: function (bl, bm, bn) {
            return bl(bm, bn);
          },
          WYiFF: "normal",
          BgfYx: function (bl, bm, bn, bo, bp) {
            return bl(bm, bn, bo, bp);
          },
          kxZFl: function (bl, bm) {
            return bl === bm;
          },
          uJKJE: function (bl, bm) {
            return bl(bm);
          },
          AcrOT: function (bl, bm) {
            return bl in bm;
          },
          pMeVJ: function (bl, bm) {
            return bl | bm;
          },
          TkdBi: function (bl, bm) {
            return bl * bm;
          },
          fXEzm: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js",
          mqzEx: "end",
          ZJzCK: function (bl, bm) {
            return bl | bm;
          },
          DqLnn: " API请求失败，请检查网路重试",
          PReHG: function (bl) {
            return bl();
          },
          BGKBw: function (bl, bm) {
            return bl == bm;
          },
          iOWEF: function (bl, bm) {
            return bl === bm;
          },
          nhAij: "Map",
          NGPIw: "Set",
          AYSWA: function (bl, bm) {
            return bl === bm;
          },
          uBVmO: function (bl, bm, bn, bo) {
            return bl(bm, bn, bo);
          },
          rLVBn: "GeneratorFunction",
          xQfFw: function (bl, bm, bn, bo, bp, bq, br, bs) {
            return bl(bm, bn, bo, bp, bq, br, bs);
          },
          fmizQ: "throw",
          qegVt: function (bl) {
            return bl();
          },
          obYkT: "Utils_Code",
          jWgZV: "2|3|0|4|5|1",
          AXQlZ: function (bl, bm) {
            return bl !== bm;
          },
          XEAsb: "return",
          NxrhW: function (bl, bm, bn) {
            return bl(bm, bn);
          },
          jYgdn: function (bl, bm) {
            return bl + bm;
          },
          IhiCv: "The iterator does not provide a '",
          MhQzq: "' method",
          aFUrR: function (bl, bm) {
            return bl < bm;
          },
          ZXPYl: "function",
          MbeCX: function (bl, bm) {
            return bl(bm);
          },
          bYiAa: "slBSw",
          AGcmG: "作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n",
          BGPiq: function (bl, bm) {
            return bl === bm;
          },
          tffaD: "qKiKj",
          ZnnxU: "aHKLk",
          UnVod: function (bl, bm) {
            return bl(bm);
          },
          HzYHF: function (bl, bm) {
            return bl !== bm;
          },
          BAhNF: "WDIeT",
          TEcrP: "随机生成UA",
          jppkL: function (bl) {
            return bl();
          },
          UbSbM: "开始任务",
          fOkXQ: "获取sessionId",
          JtsCX: function (bl, bm) {
            return bl(bm);
          },
          GkwCs: "/api/account/init",
          bhpnw: "获取signature_key",
          oJSOP: "/web/init?client_id=",
          slmLk: "获取code",
          eQPVl: "/web/oauth/credential_auth",
          HWXwL: "OoAZB",
          kAtea: "EjufC",
          GECqn: "continue",
          tirni: function (bl, bm, bn) {
            return bl(bm, bn);
          },
          ihvxo: "check_token=&code=",
          IyVhw: "&token=&type=-1&union_id=",
          fYnQX: "登录成功",
          pIGvy: "————————————",
          LzFhj: "获取id",
          ABiwA: function (bl, bm) {
            return bl === bm;
          },
          YvGnh: "xXAVc",
          NFphs: function (bl, bm) {
            return bl(bm);
          },
          tTZnP: "/api/article/channel_list?channel_id=5d3e4442b198500f695bdd54&isDiFangHao=false&is_new=true&list_count=0&size=20",
          UKtGe: "ytXIq",
          WcGbp: "Yxqlt",
          aksSF: "获取id失败",
          Apsam: "获取apiDt",
          GoOiK: "/aosbase/_auth_dt",
          cTMXX: "jiaojiang",
          VTiEo: function (bl, bm) {
            return bl / bm;
          },
          dxVmG: "&appkey=",
          ifwKd: function (bl, bm, bn) {
            return bl(bm, bn);
          },
          wdsXK: "/aosbase/_auth_appuserinit",
          oYILc: function (bl, bm) {
            return bl + bm;
          },
          BRqZF: function (bl, bm) {
            return bl * bm;
          },
          vTiuT: function (bl, bm) {
            return bl(bm);
          },
          lGDbm: function (bl, bm) {
            return bl !== bm;
          },
          oTyoi: "qqTdA",
          aooCl: "/aoslearnfoot/optionp_detail?id=",
          RFaUX: function (bl, bm) {
            return bl <= bm;
          },
          LHgOU: function (bl, bm) {
            return bl !== bm;
          },
          wqDGB: "KlwQM",
          GJjxT: "olPmy",
          JXfRn: "lflNn",
          CwwUe: "获取滑块token",
          XXBYA: function (bl, bm) {
            return bl < bm;
          },
          jnIkp: "VQIOb",
          SvJDd: "CyrFq",
          FyrwO: function (bl, bm, bn) {
            return bl(bm, bn);
          },
          zvNpl: "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG",
          kkgxY: "8RsVKSCH8mQ4l7cu",
          rCycl: "/basemodule/_captcha_get?once=",
          dRbdb: "&timestamp=",
          yoCKH: "&type=1&signature=",
          awBXw: function (bl, bm) {
            return bl(bm);
          },
          GFtiq: "nyyYq",
          EMHIY: "ddddocr服务异常",
          xOAIl: function (bl, bm) {
            return bl(bm);
          },
          BXUza: function (bl, bm) {
            return bl / bm;
          },
          Jwbue: function (bl, bm) {
            return bl / bm;
          },
          GsvrA: "验证滑块",
          RstTe: "/basemodule/_captcha_check",
          JawyC: function (bl, bm) {
            return bl !== bm;
          },
          DINWn: "QJMbq",
          JhpSu: function (bl, bm, bn) {
            return bl(bm, bn);
          },
          UBewu: "/aosbasemodule/intelverifcode_check",
          ukMgM: "滑块token：",
          ZUdhM: "验证失败",
          mgcEO: function (bl, bm) {
            return bl !== bm;
          },
          pLmEe: "HbOHd",
          mGjUh: "/aosbasemodule/_task_list?offset=0&count=",
          ZlVOx: "&module_id=",
          msrwQ: "&activity_id=",
          lqJVE: "dPVLk",
          OIWze: "文章：",
          iierW: function (bl, bm) {
            return bl != bm;
          },
          obQBT: function (bl, bm) {
            return bl !== bm;
          },
          SdvdM: "ZKRXG",
          jdUBq: "veXtm",
          PubSR: "已完成",
          fXsmK: "/aosbasemodule/task_create",
          TvvMd: function (bl, bm, bn) {
            return bl(bm, bn);
          },
          BBnDi: "阅读：",
          OHDwY: "/aoslearnfoot/_ac_detail?id=",
          HrlwO: "/aoslottery/ac_lottery_times?id=",
          saBEo: function (bl, bm) {
            return bl > bm;
          },
          HqvqI: "nqZev",
          NrpjA: "irEHV",
          zgbjg: "获取抽奖滑块token",
          eXDAn: "buqMZ",
          LMqGl: function (bl, bm, bn) {
            return bl(bm, bn);
          },
          ZOmEJ: "https://jiaojiang.y-h5.iyunxh.com/module-lottery/home/home?hide_back=1",
          ycVpb: function (bl, bm, bn, bo) {
            return bl(bm, bn, bo);
          },
          aUwQe: function (bl, bm) {
            return bl(bm);
          },
          EOiML: "&referer=",
          ZrfZf: "背景：",
          SnZGh: function (bl, bm) {
            return bl !== bm;
          },
          PTwlx: "zLZvz",
          HZeex: "XEOsZ",
          mYeZR: function (bl, bm) {
            return bl / bm;
          },
          eDogD: function (bl, bm) {
            return bl / bm;
          },
          WpCsW: function (bl, bm) {
            return bl / bm;
          },
          stilx: function (bl, bm) {
            return bl === bm;
          },
          QtfHc: "mFpma",
          uBkQF: "验证成功",
          gJhDy: "yundian",
          IBGUR: "抽奖滑块token：",
          QvTdL: "break",
          KJdgm: function (bl, bm) {
            return bl === bm;
          },
          rJzmG: "wXIad",
          HDoHQ: "/aoslottery/_ac_detail?id=",
          TDaGa: function (bl, bm) {
            return bl === bm;
          },
          bznQu: "FPTHn",
          wJifg: "lotteryTake",
          mLyRP: "take",
          BnufX: "抽奖提交",
          VQjvm: "module-study/home/home",
          wTERU: "wifi",
          rveHo: "android",
          TVOKr: "Android 11",
          hMPgt: "抽奖提交：",
          GBCGr: function (bl, bm) {
            return bl == bm;
          },
          bbMuB: function (bl, bm) {
            return bl === bm;
          },
          qhNyF: function (bl, bm) {
            return bl == bm;
          },
          pMCQi: "o d w",
          dDiJd: function (bl, bm) {
            return bl(bm);
          },
          VqLpt: "/aoslottery/act_user?offset=0&count=20&activity_id=",
          ZCjpO: "ljpoF",
          CUlOp: "bOgSE",
          sWsUu: function (bl, bm) {
            return bl != bm;
          },
          qZpSD: "zUpvt",
          kKOqY: "奖品：",
          JWwNJ: "Zjgdz",
          cwoVs: "CqKIC",
          apHvD: "领取奖品",
          LVkDv: function (bl, bm) {
            return bl(bm);
          },
          HxDaj: "&cash_sign=",
          ttedi: "领取成功",
          FBrYt: "用户：",
          wXcNZ: " 抽奖获得：",
          FTLxO: " 领取结果：领取成功\n",
          zluSl: "请配置wxToken",
          uQSCG: " 请配置wxToken\n",
          XDSzY: "ljKRz",
          LYNTH: "SrSWd"
        };
        {
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
          var bf;
          var bg;
          var bh;
          var bi;
          var bj;
          var bk;
          return g().wrap(function (bl) {
            {
              for (;;) {
                switch (bl.prev = bl.next) {
                  case 0:
                    if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                      {
                        bl.next = 6;
                        break;
                      }
                    }
                    console.log("先去boxjs填写账号密码");
                    bl.next = 5;
                    return ac("先去boxjs填写账号密码");
                  case 5:
                    return bl.abrupt("return");
                  case 6:
                    bl.next = 8;
                    return aa();
                  case 8:
                    l = bl.sent;
                    ah = j.split(" ");
                    ai = c(ah);
                    bl.prev = 11;
                    ai.s();
                  case 13:
                    if ((aj = ai.n()).done) {
                      {
                        bl.next = 293;
                        break;
                      }
                    }
                    ak = aj.value;
                    console.log("随机生成UA");
                    al = a6();
                    t = al.ua;
                    u = al.commonUa;
                    v = al.uuid;
                    console.log(t);
                    console.log(u);
                    q = ak.split("&")[0];
                    r = ak.split("&")[1];
                    s = ak.split("&")[2];
                    console.log("用户：".concat(q, "开始任务"));
                    console.log("获取sessionId");
                    bl.next = 29;
                    return N("/api/account/init");
                  case 29:
                    am = bl.sent;
                    o = am.data.session.id;
                    console.log(o);
                    console.log("获取signature_key");
                    bl.next = 35;
                    return H("/web/init?client_id=".concat(x));
                  case 35:
                    an = bl.sent;
                    m = an.data.client.signature_key;
                    console.log(m);
                    console.log("获取code");
                    bl.next = 41;
                    return J("/web/oauth/credential_auth");
                  case 41:
                    if (ao = bl.sent, ao.data) {
                      {
                        bl.next = 45;
                        break;
                      }
                    }
                    console.log(ao.message);
                    return bl.abrupt("continue", 291);
                  case 45:
                    ap = ao.data.authorization_code.code;
                    console.log(ap);
                    console.log("登录");
                    bl.next = 50;
                    return N("/api/zbtxz/login", "check_token=&code=".concat(ap, "&token=&type=-1&union_id="));
                  case 50:
                    if (aq = bl.sent, console.log("登录成功"), p = aq.data.session.account_id, o = aq.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), E) {
                      {
                        bl.next = 64;
                        break;
                      }
                    }
                    bl.next = 60;
                    return L("/api/article/channel_list?channel_id=5d3e4442b198500f695bdd54&isDiFangHao=false&is_new=true&list_count=0&size=20");
                  case 60:
                    ar = bl.sent;
                    as = /\/module-study\/home\/home\?hide_back=1&id=([a-zA-Z0-9]+)/;
                    at = JSON.stringify(ar).match(as);
                    at && (E = at[1]);
                  case 64:
                    if (E) {
                      {
                        bl.next = 67;
                        break;
                      }
                    }
                    console.log("获取id失败");
                    return bl.abrupt("continue", 291);
                  case 67:
                    console.log(E);
                    console.log("获取apiDt");
                    bl.next = 71;
                    return P("/aosbase/_auth_dt");
                  case 71:
                    au = bl.sent;
                    A = au.data.substring(32, 68);
                    console.log(A);
                    B = "0";
                    av = {
                      app_user_token: o,
                      appid: "jiaojiang",
                      noncestr: a9(6, false),
                      phone: q,
                      portrait_url: aq.data.account.image_url,
                      timestamp: Math.round(new Date().getTime() / 1000).toString(),
                      user_id: aq.data.account.id,
                      user_name: aq.data.account.nick_name,
                      wx_openid: "",
                      wx_unionid: ""
                    };
                    av.signature = l.md5(a7(av) + "&appkey=".concat(z));
                    bl.next = 79;
                    return W("/aosbase/_auth_appuserinit", av);
                  case 79:
                    aw = bl.sent;
                    D = aw.data.access_token;
                    B = aw.data.data.user_id;
                    console.log("阅读token：".concat(D));
                    ax = "";
                    ay = Date.now() + "" + Math.floor(10000000 * Math.random());
                    bl.next = 87;
                    return R("/aoslearnfoot/_optionp_list?activity_id=".concat(E));
                  case 87:
                    az = bl.sent;
                    aA = c(az.data);
                    bl.prev = 89;
                    aA.s();
                  case 91:
                    if ((aB = aA.n()).done) {
                      {
                        bl.next = 178;
                        break;
                      }
                    }
                    aC = aB.value;
                    aD = aC.id;
                    console.log(aC.title);
                    bl.next = 97;
                    return R("/aoslearnfoot/optionp_detail?id=".concat(aC.id));
                  case 97:
                    if (aE = bl.sent, !(aE.data.task_num <= aE.data.user_done_num)) {
                      {
                        bl.next = 101;
                        break;
                      }
                    }
                    console.log("已完成");
                    return bl.abrupt("continue", 176);
                  case 101:
                    if (ax) {
                      {
                        bl.next = 142;
                        break;
                      }
                    }
                    console.log("获取滑块token");
                    aF = 0;
                  case 104:
                    if (!(aF < 3)) {
                      {
                        bl.next = 142;
                        break;
                      }
                    }
                    aG = a9(10, false);
                    aH = Math.round(new Date().getTime() / 1000).toString();
                    aI = "https://wifizs.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=".concat(aD);
                    aJ = a4({
                      once: aG,
                      referer: aI,
                      timestamp: aH,
                      type: "1"
                    }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
                    bl.next = 111;
                    return R("/basemodule/_captcha_get?once=".concat(aG, "&referer=").concat(aI, "&timestamp=").concat(aH, "&type=1&signature=").concat(encodeURIComponent(aJ)));
                  case 111:
                    aK = bl.sent;
                    console.log("滑块：".concat(aK.data.block));
                    console.log("背景：".concat(aK.data.background));
                    bl.next = 116;
                    return Y({
                      slidingImage: aK.data.block,
                      backImage: aK.data.background
                    });
                  case 116:
                    if (aL = bl.sent, aL) {
                      {
                        bl.next = 122;
                        break;
                      }
                    }
                    console.log("ddddocr服务异常");
                    bl.next = 121;
                    return ac("ddddocr服务异常");
                  case 121:
                    return bl.abrupt("continue", 139);
                  case 122:
                    console.log(aL);
                    aM = aL.result;
                    aN = a4({
                      x: aM,
                      width: 384,
                      track: [{
                        x: Math.floor(aM / 10),
                        y: 0,
                        time: 100
                      }, {
                        x: Math.floor(aM / 8),
                        y: 0,
                        time: 100
                      }, {
                        x: Math.floor(aM / 6),
                        y: 0,
                        time: 100
                      }, {
                        x: Math.floor(aM / 4),
                        y: 0,
                        time: 100
                      }, {
                        x: aM / 2,
                        y: 0,
                        time: 100
                      }, {
                        x: aM,
                        y: 0,
                        time: 100
                      }]
                    }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
                    console.log("验证滑块");
                    bl.next = 128;
                    return W("/basemodule/_captcha_check", {
                      token: aK.data.token,
                      data: aN,
                      referer: aI,
                      type: aK.data.type
                    });
                  case 128:
                    if (aO = bl.sent, !aO.data.result) {
                      {
                        bl.next = 138;
                        break;
                      }
                    }
                    var bn = {
                      validate: aO.data.token,
                      verif_type: 3,
                      afs_uuid: "",
                      source: "yundian"
                    };
                    bl.next = 132;
                    return W("/aosbasemodule/intelverifcode_check", bn);
                  case 132:
                    aP = bl.sent;
                    ax = aP.data.tokenid;
                    console.log("滑块token：".concat(ax));
                    return bl.abrupt("break", 142);
                  case 138:
                    console.log("验证失败");
                  case 139:
                    aF++;
                    bl.next = 104;
                    break;
                  case 142:
                    if (ax) {
                      {
                        bl.next = 144;
                        break;
                      }
                    }
                    return bl.abrupt("break", 178);
                  case 144:
                    bl.next = 146;
                    return R("/aosbasemodule/_task_list?offset=0&count=".concat(aC.task_num, "&module_id=").concat(aC.m_id, "&activity_id=").concat(aC.id));
                  case 146:
                    aQ = bl.sent;
                    aR = c(aQ.data);
                    bl.prev = 148;
                    aR.s();
                  case 150:
                    if ((aS = aR.n()).done) {
                      {
                        bl.next = 168;
                        break;
                      }
                    }
                    if (aT = aS.value, console.log("文章：".concat(aT.title)), 1 != aT.user_done) {
                      {
                        bl.next = 156;
                        break;
                      }
                    }
                    console.log("已完成");
                    return bl.abrupt("continue", 166);
                  case 156:
                    var bo = {
                      task_id: aT.id
                    };
                    bl.next = 158;
                    return W("/aosbasemodule/task_create", bo);
                  case 158:
                    aU = bl.sent;
                    bl.next = 161;
                    return L("/api/article/detail?id=".concat(JSON.parse(aT.rule).news_id));
                  case 161:
                    var bp = {
                      task_record_id: aU.data.task_record_id,
                      collect_info: "",
                      afs_tokenid: ax,
                      device_token: ay
                    };
                    bl.sent;
                    bl.next = 164;
                    return W("/aosbasemodule/task_done", bp);
                  case 164:
                    aV = bl.sent;
                    console.log("阅读：".concat(aV.msg));
                  case 166:
                    bl.next = 150;
                    break;
                  case 168:
                    bl.next = 173;
                    break;
                  case 170:
                    bl.prev = 170;
                    bl.t0 = bl.catch(148);
                    aR.e(bl.t0);
                  case 173:
                    bl.prev = 173;
                    aR.f();
                    return bl.finish(173);
                  case 176:
                    bl.next = 91;
                    break;
                  case 178:
                    bl.next = 183;
                    break;
                  case 180:
                    bl.prev = 180;
                    bl.t1 = bl.catch(89);
                    aA.e(bl.t1);
                  case 183:
                    bl.prev = 183;
                    aA.f();
                    return bl.finish(183);
                  case 186:
                    bl.next = 188;
                    return R("/aoslearnfoot/_ac_detail?id=".concat(E));
                  case 188:
                    aW = bl.sent;
                    aX = JSON.parse(aW.data.other_set).lottery.id;
                    bl.next = 192;
                    return R("/aoslottery/ac_lottery_times?id=".concat(aX));
                  case 192:
                    if (aY = bl.sent, console.log("拥有".concat(aY.data.day_remain, "次抽奖")), !(aY.data.day_remain > 0)) {
                      {
                        bl.next = 257;
                        break;
                      }
                    }
                    if (ax) {
                      {
                        bl.next = 237;
                        break;
                      }
                    }
                    console.log("获取抽奖滑块token");
                    aZ = 0;
                  case 198:
                    if (!(aZ < 3)) {
                      {
                        bl.next = 237;
                        break;
                      }
                    }
                    b0 = a9(10, false);
                    b1 = Math.round(new Date().getTime() / 1000).toString();
                    b2 = "https://jiaojiang.y-h5.iyunxh.com/module-lottery/home/home?hide_back=1";
                    b3 = a4({
                      once: b0,
                      referer: b2,
                      timestamp: b1,
                      type: "1"
                    }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
                    bl.next = 205;
                    return R("/basemodule/_captcha_get?once=".concat(b0, "&referer=").concat(b2, "&timestamp=").concat(b1, "&type=1&signature=").concat(encodeURIComponent(b3)));
                  case 205:
                    b4 = bl.sent;
                    console.log("滑块：".concat(b4.data.block));
                    console.log("背景：".concat(b4.data.background));
                    bl.next = 210;
                    return Y({
                      slidingImage: b4.data.block,
                      backImage: b4.data.background
                    });
                  case 210:
                    if (b5 = bl.sent, b5) {
                      {
                        bl.next = 216;
                        break;
                      }
                    }
                    console.log("ddddocr服务异常");
                    bl.next = 215;
                    return ac("ddddocr服务异常");
                  case 215:
                    return bl.abrupt("continue", 234);
                  case 216:
                    console.log(b5);
                    b6 = b5.result;
                    b7 = a4({
                      x: b6,
                      width: 384,
                      track: [{
                        x: Math.floor(b6 / 10),
                        y: 0,
                        time: 100
                      }, {
                        x: Math.floor(b6 / 8),
                        y: 0,
                        time: 100
                      }, {
                        x: Math.floor(b6 / 6),
                        y: 0,
                        time: 100
                      }, {
                        x: Math.floor(b6 / 4),
                        y: 0,
                        time: 100
                      }, {
                        x: b6 / 2,
                        y: 0,
                        time: 100
                      }, {
                        x: b6,
                        y: 0,
                        time: 100
                      }]
                    }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
                    console.log("验证滑块");
                    bl.next = 222;
                    return W("/basemodule/_captcha_check", {
                      token: b4.data.token,
                      data: b7,
                      referer: b2,
                      type: b4.data.type
                    });
                  case 222:
                    if (b8 = bl.sent, !b8.data.result) {
                      {
                        bl.next = 233;
                        break;
                      }
                    }
                    console.log("验证成功");
                    bl.next = 227;
                    return W("/aosbasemodule/intelverifcode_check", {
                      validate: b8.data.token,
                      verif_type: 3,
                      afs_uuid: "",
                      source: "yundian"
                    });
                  case 227:
                    b9 = bl.sent;
                    ax = b9.data.tokenid;
                    console.log("抽奖滑块token：".concat(ax));
                    return bl.abrupt("break", 237);
                  case 233:
                    console.log("验证失败");
                  case 234:
                    aZ++;
                    bl.next = 198;
                    break;
                  case 237:
                    if (ax) {
                      {
                        bl.next = 239;
                        break;
                      }
                    }
                    return bl.abrupt("continue", 291);
                  case 239:
                    bl.next = 241;
                    return R("/aoslottery/_ac_detail?id=".concat(aX));
                  case 241:
                    ba = bl.sent;
                    bb = 0;
                  case 243:
                    if (!(bb < aY.data.day_remain)) {
                      {
                        bl.next = 257;
                        break;
                      }
                    }
                    bl.next = 246;
                    return W("/aosstat/_event_sub", {
                      _need_stat: 0,
                      _need_task: 0,
                      _need_behavior: 1,
                      event: "lotteryTake",
                      action: "take",
                      brief: "抽奖提交",
                      client_type: 3,
                      module_id: ba.data.m_id,
                      content_id: ba.data.id,
                      num: 1,
                      duration: 0,
                      column_id: 0,
                      column_title: "",
                      title: ba.data.title,
                      device_token: ay,
                      user_id: aw.data.data.user_id,
                      user_name: aw.data.data.user_name,
                      phone_num: q,
                      page_path: "module-study/home/home",
                      version: "1.0.0",
                      network: "wifi",
                      client_model: "android",
                      system_version: "Android 11",
                      resolution: "",
                      baidu_longitude: "",
                      baidu_latitude: "",
                      longitude: 0,
                      latitude: 0,
                      province: "",
                      city: "",
                      area: "",
                      street: "",
                      address: ""
                    });
                  case 246:
                    if (bc = bl.sent, console.log("抽奖提交：".concat(bc.msg)), 0 == bc.code) {
                      bl.next = 250;
                      break;
                    }
                    return bl.abrupt("continue", 254);
                  case 250:
                    var bq = {
                      id: aX,
                      verif_uuid: "",
                      verif_code: "",
                      afs_tokenid: ax,
                      collect_info: "",
                      longitude: 0,
                      latitude: 0,
                      device_token: ay
                    };
                    bl.next = 252;
                    return W("/aoslottery/ac_sub", bq);
                  case 252:
                    bd = bl.sent;
                    0 == bd.code ? console.log("抽奖获得：".concat(null == bd || null === (be = bd.data) || undefined === be ? undefined : be.title)) : "o d w" == bd.msg ? console.log("谢谢参与") : console.log(bd.msg);
                  case 254:
                    bb++;
                    bl.next = 243;
                    break;
                  case 257:
                    bl.next = 259;
                    return R("/aoslottery/_ac_detail?id=".concat(aX));
                  case 259:
                    bf = bl.sent;
                    bl.next = 262;
                    return R("/aoslottery/act_user?offset=0&count=20&activity_id=".concat(aX, "&module_id=").concat(bf.data.m_id));
                  case 262:
                    if (bg = bl.sent, !bg.data) {
                      {
                        bl.next = 291;
                        break;
                      }
                    }
                    bh = c(bg.data);
                    bl.prev = 265;
                    bh.s();
                  case 267:
                    if ((bi = bh.n()).done) {
                      bl.next = 283;
                      break;
                    }
                    if (bj = bi.value, 3 != bj.type || 0 != bj.state) {
                      {
                        bl.next = 281;
                        break;
                      }
                    }
                    if (console.log("奖品：".concat(bj.title)), !s) {
                      {
                        bl.next = 279;
                        break;
                      }
                    }
                    console.log("领取奖品");
                    bl.next = 275;
                    return U("/aosbasemodule/cash_send?module_id=".concat(bj.module_id, "&activity_id=").concat(bj.id, "&cash_code=").concat(bj.code, "&cash_sign=").concat(bj.cash_data.cash_sign));
                  case 275:
                    bk = bl.sent;
                    0 == bk.code ? (console.log("领取成功"), n += "用户：".concat(q, " 抽奖获得：").concat(bj.title, " 领取结果：领取成功\n")) : (console.log(bk.msg), n += "用户：".concat(q, " 抽奖获得：").concat(bj.title, " 领取结果：").concat(bk.msg, "\n"));
                    bl.next = 281;
                    break;
                  case 279:
                    console.log("请配置wxToken");
                    n += "用户：".concat(q, " 请配置wxToken\n");
                  case 281:
                    bl.next = 267;
                    break;
                  case 283:
                    bl.next = 288;
                    break;
                  case 285:
                    bl.prev = 285;
                    bl.t2 = bl.catch(265);
                    bh.e(bl.t2);
                  case 288:
                    bl.prev = 288;
                    bh.f();
                    return bl.finish(288);
                  case 291:
                    bl.next = 13;
                    break;
                  case 293:
                    bl.next = 298;
                    break;
                  case 295:
                    bl.prev = 295;
                    bl.t3 = bl.catch(11);
                    ai.e(bl.t3);
                  case 298:
                    bl.prev = 298;
                    ai.f();
                    return bl.finish(298);
                  case 301:
                    if (!n) {
                      {
                        bl.next = 304;
                        break;
                      }
                    }
                    bl.next = 304;
                    return ac(n);
                  case 304:
                  case "end":
                    return bl.stop();
                }
              }
            }
          }, af, null, [[11, 295, 298, 301], [89, 180, 183, 186], [148, 170, 173, 176], [265, 285, 288, 291]]);
        }
      }));
      return G.apply(this, arguments);
    }
  }
  function H(ae) {
    {
      return I.apply(this, arguments);
    }
  }
  function I() {
    I = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                {
                  var am = {
                    url: "https://passport.tmuyun.com".concat(ag),
                    headers: {
                      Connection: "Keep-Alive",
                      "Cache-Control": "no-cache",
                      "X-REQUEST-ID": a3(),
                      "Accept-Encoding": "gzip",
                      "user-agent": t
                    }
                  };
                  $.get(am, function () {
                    {
                      var ap = i(g().mark(function ar(as, at, au) {
                        {
                          return g().wrap(function (ax) {
                            {
                              for (;;) {
                                switch (ax.prev = ax.next) {
                                  case 0:
                                    try {
                                      {
                                        as ? (console.log("".concat(JSON.stringify(as))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(au));
                                      }
                                    } catch (aB) {
                                      {
                                        $.logErr(aB, at);
                                      }
                                    } finally {
                                      ak();
                                    }
                                  case 1:
                                  case "end":
                                    return ax.stop();
                                }
                              }
                            }
                          }, ar);
                        }
                      }));
                      return function (as, at, au) {
                        {
                          return ap.apply(this, arguments);
                        }
                      };
                    }
                  }());
                }
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return I.apply(this, arguments);
  }
  function J(ae) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function af(ag) {
      var ah;
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              ah = a0();
              return ai.abrupt("return", new Promise(function (ak) {
                var al = {
                  url: "https://passport.tmuyun.com".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ah.uuid,
                    "X-SIGNATURE": ah.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  },
                  body: ah.body
                };
                $.post(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            try {
                              ap ? (console.log("".concat(JSON.stringify(ap))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(ar));
                            } catch (at) {
                              $.logErr(at, aq);
                            } finally {
                              ak();
                            }
                          case 1:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, ao);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return K.apply(this, arguments);
  }
  function L(ae) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function af(ag) {
      var ai;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ai = a1(ag);
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://vapp.tmuyun.com".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ai.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": ai.uuid,
                    "X-SIGNATURE": ai.signature,
                    "X-TENANT-ID": w,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  }
                };
                $.get(an, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !as) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            al(JSON.parse(au));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, at);
                          case 14:
                            av.prev = 14;
                            al();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ar, null, [[0, 11, 14, 17]]);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return M.apply(this, arguments);
  }
  function N(ae, af) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function af(ag, ah) {
      var ak;
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              ak = a1(ag);
              return al.abrupt("return", new Promise(function (an) {
                var ao = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ak.time,
                  "X-SESSION-ID": o,
                  "X-REQUEST-ID": ak.uuid,
                  "X-SIGNATURE": ak.signature,
                  "X-TENANT-ID": w,
                  "X-ACCOUNT-ID": p,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": u
                };
                var ap = {
                  url: "https://vapp.tmuyun.com".concat(ag),
                  headers: ao,
                  body: ah
                };
                $.post(ap, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    return g().wrap(function (ax) {
                      for (;;) {
                        switch (ax.prev = ax.next) {
                          case 0:
                            if (ax.prev = 0, !at) {
                              ax.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(at)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ax.next = 9;
                            break;
                          case 6:
                            ax.next = 8;
                            return $.wait(2000);
                          case 8:
                            an(JSON.parse(av));
                          case 9:
                            ax.next = 14;
                            break;
                          case 11:
                            ax.prev = 11;
                            ax.t0 = ax.catch(0);
                            $.logErr(ax.t0, au);
                          case 14:
                            ax.prev = 14;
                            an();
                            return ax.finish(14);
                          case 17:
                          case "end":
                            return ax.stop();
                        }
                      }
                    }, as, null, [[0, 11, 14, 17]]);
                  }));
                  return function (at, au, av) {
                    return ar.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return al.stop();
          }
        }
      }, af);
    }));
    return O.apply(this, arguments);
  }
  function P(ae) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function ae(af) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(af),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-T-Id-In": "2414",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jiaojiang;xsb_jiaojiang;1.2.4;native_app;6.8.0",
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": Date.now(),
                    "Access-T-Id": "2414",
                    Accept: "*/*",
                    Origin: "https://jiaojiang.y-h5.iyunxh.com",
                    "X-Requested-With": "com.zjonline.jiaojiang",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaojiang.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !ao) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            ai(JSON.parse(aq));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ap);
                          case 14:
                            ar.prev = 14;
                            ai();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
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
              return ah.stop();
          }
        }
      }, ae);
    }));
    return Q.apply(this, arguments);
  }
  function R(ae) {
    return T.apply(this, arguments);
  }
  function T() {
    T = i(g().mark(function af(ag) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var ak = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": a2(),
                    "Access-T-Id-In": "2414",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jiaojiang;xsb_jiaojiang;1.2.4;native_app;6.8.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": A,
                    "Access-T-Id": "2414",
                    Accept: "*/*",
                    Origin: "https://jiaojiang.y-h5.iyunxh.com",
                    "X-Requested-With": "com.zjonline.jiaojiang",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaojiang.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !ao) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(aq));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ap);
                          case 14:
                            ar.prev = 14;
                            aj();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
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
              return ah.stop();
          }
        }
      }, af);
    }));
    return T.apply(this, arguments);
  }
  function U(ae) {
    return V.apply(this, arguments);
  }
  function V() {
    V = i(g().mark(function ag(ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  Connection: "Keep-Alive",
                  "Access-T-Id-In": "1",
                  "Access-Wxclient-Type": "wx_minipro",
                  "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                  "Access-Token": s,
                  "Access-Api-Unique-Token": "1",
                  "Access-T-Id": "1",
                  Accept: "*/*",
                  Referer: "https://servicewechat.com/wx57d3a2086852ddcd/14/page-frame.html",
                  "Accept-Encoding": "gzip,compress,br,deflate"
                };
                var an = {
                  url: "https://ya.iyunxh.com/api".concat(ah),
                  headers: am
                };
                $.get(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !ar) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            ak();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, ag);
    }));
    return V.apply(this, arguments);
  }
  function W(ae, af) {
    return X.apply(this, arguments);
  }
  function X() {
    X = i(g().mark(function af(ag, ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var al = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": a2(),
                    "Access-T-Id-In": "2414",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_jiaojiang;xsb_jiaojiang;1.2.4;native_app;6.8.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Content-Type": "application/json",
                    "Access-Api-Dt": A,
                    "Access-T-Id": "2414",
                    Accept: "*/*",
                    Origin: "https://jiaojiang.y-h5.iyunxh.com",
                    "X-Requested-With": "com.zjonline.jiaojiang",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaojiang.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ah)
                };
                $.post(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !ap) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(ar));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, aq);
                          case 14:
                            at.prev = 14;
                            ak();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return X.apply(this, arguments);
  }
  function Y(ae) {
    return Z.apply(this, arguments);
  }
  function Z() {
    Z = i(g().mark(function ae(af) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var ak = {
                  "Content-Type": "application/json"
                };
                var al = {
                  url: "".concat(k, "/capcode"),
                  headers: ak,
                  body: JSON.stringify(af)
                };
                $.post(al, function (am, an, ao) {
                  try {
                    am ? (console.log("".concat(JSON.stringify(am))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aj(JSON.parse(ao));
                  } catch (ap) {
                    $.logErr(ap, an);
                  } finally {
                    aj();
                  }
                });
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ae);
    }));
    return Z.apply(this, arguments);
  }
  function a0() {
    var ag = new (l.loadJSEncrypt())();
    ag.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = ag.encrypt(r);
    var ah = a3();
    var ai = "client_id=".concat(x, "&password=").concat(r, "&phone_number=").concat(q);
    var aj = "post%%/web/oauth/credential_auth?".concat(ai, "%%").concat(ah, "%%");
    ai = "client_id=".concat(x, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var al = CryptoJS.HmacSHA256(aj, m);
    var am = CryptoJS.enc.Hex.stringify(al);
    var ak = {
      uuid: ah,
      signature: am,
      body: ai
    };
    return ak;
  }
  function a1(ae) {
    var af = a3();
    var ag = Date.now();
    ae.indexOf("?") > 0 && (ae = ae.substring(0, ae.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ah = CryptoJS.SHA256("".concat(ae, "&&").concat(o, "&&").concat(af, "&&").concat(ag, "&&").concat(y, "&&").concat(w)).toString();
    var ai = {
      uuid: af,
      time: ag,
      signature: ah
    };
    return ai;
  }
  function a2() {
    var ae = Date.now();
    var af = a9(32, false);
    var ag = "jiaojiang".concat(af).concat(ae, "60b56a9e29ea4cdbe7e6544bee4b6f9c");
    var ah = l.md5(ag);
    return "jiaojiang;".concat(af, ";").concat(ae, ";").concat(ah);
  }
  function a3() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (af) {
      var ag = 16 * Math.random() | 0;
      var ah = "x" === af ? ag : 3 & ag | 8;
      return ah.toString(16);
    });
  }
  function a4(ae, af, ag) {
    var ah = l.createCryptoJS();
    var ai = ah.enc.Utf8.parse(af);
    var aj = ah.enc.Utf8.parse(ag);
    var ak = ah.enc.Utf8.parse(JSON.stringify(ae));
    var al = ah.AES.encrypt(ak, ai, {
      iv: aj,
      mode: ah.mode.CBC,
      padding: ah.pad.Pkcs7
    });
    return ah.enc.Base64.stringify(al.ciphertext);
  }
  function a5(ae) {
    return ae[Math.floor(Math.random() * ae.length)];
  }
  function a6() {
    var ae = "1.2.4";
    var af = a3();
    var ag = a5(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var ah = "Xiaomi " + ag;
    var ai = "Android";
    var aj = "".concat(ai.toUpperCase(), ";").concat("11", ";").concat(x, ";").concat(ae, ";1.0;null;").concat(ag);
    var ak = "".concat(ae, ";").concat(af, ";").concat(ah, ";").concat(ai, ";").concat("11", ";Release;").concat("6.8.0");
    var al = {
      ua: aj,
      commonUa: ak,
      uuid: af
    };
    return al;
  }
  function a7() {
    var ae = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : {};
    var af = [];
    for (var ag in ae) {
      var ah = ae[ag];
      af.push(ag + "=" + a8(ah));
    }
    return af.length ? "" + af.join("&") : "";
  }
  function a8(ae) {
    ae = (ae + "").toString();
    return encodeURIComponent(ae).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+").replace(/~/g, "%7E");
  }
  function a9() {
    var ae = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 32;
    var af = !(arguments.length > 1 && undefined !== arguments[1]) || arguments[1];
    var ag = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null;
    var ah = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var ai = [];
    if (ag = ag || ah.length, ae) {
      for (var aj = 0; aj < ae; aj++) {
        ai[aj] = ah[0 | Math.random() * ag];
      }
    } else {
      var ak;
      ai[8] = ai[13] = ai[18] = ai[23] = "-";
      ai[14] = "4";
      for (var al = 0; al < 36; al++) {
        ai[al] || (ak = 0 | 16 * Math.random(), ai[al] = ah[19 == al ? 3 & ak | 8 : ak]);
      }
    }
    return af ? (ai.shift(), "u" + ai.join("")) : ai.join("");
  }
  function aa() {
    return ab.apply(this, arguments);
  }
  function ab() {
    ab = i(g().mark(function af() {
      var ah;
      return g().wrap(function ai(aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              if (ah = $.getdata("Utils_Code") || "", !ah || !Object.keys(ah).length) {
                aj.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ah);
              return aj.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return aj.abrupt("return", new Promise(function () {
                var am = i(g().mark(function an(ao) {
                  return g().wrap(function ap(aq) {
                    for (;;) {
                      switch (aq.prev = aq.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (as) {
                            $.setdata(as, "Utils_Code");
                            eval(as);
                            console.log("✅ Utils加载成功, 请继续");
                            ao(creatUtils());
                          });
                        case 1:
                        case "end":
                          return aq.stop();
                      }
                    }
                  }, an);
                }));
                return function (ao) {
                  return am.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return ab.apply(this, arguments);
  }
  function ac(ae) {
    return ad.apply(this, arguments);
  }
  function ad() {
    ad = i(g().mark(function ag(ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              $.msg($.name, "", ah);
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, ag);
    }));
    return ad.apply(this, arguments);
  }
  i(g().mark(function ae() {
    return g().wrap(function (ag) {
      for (;;) {
        switch (ag.prev = ag.next) {
          case 0:
            ag.next = 2;
            return F();
          case 2:
          case "end":
            return ag.stop();
        }
      }
    }, ae);
  }))().catch(function (af) {
    $.log(af);
  }).finally(function () {
    $.done({});
  });
})();