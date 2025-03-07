//Fri Mar 07 2025 02:08:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("大潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ae) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ag) {
      {
        return typeof ag;
      }
    } : function (ag) {
      {
        return ag && "function" == typeof Symbol && ag.constructor === Symbol && ag !== Symbol.prototype ? "symbol" : typeof ag;
      }
    };
    return b(ae);
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
                    var ar = {
                      done: true
                    };
                    return ai >= ae.length ? ar : {
                      done: false,
                      value: ae[ai++]
                    };
                  }
                },
                e: function (ap) {
                  {
                    throw ap;
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
            var aq = ah.next();
            al = aq.done;
            return aq;
          }
        },
        e: function (aq) {
          am = true;
          ak = aq;
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
    if (ae) {
      {
        if ("string" == typeof ae) {
          return f(ae, af);
        }
        var ah = {}.toString.call(ae).slice(8, -1);
        "Object" === ah && ae.constructor && (ah = ae.constructor.name);
        return "Map" === ah || "Set" === ah ? Array.from(ae) : "Arguments" === ah || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ah) ? f(ae, af) : undefined;
      }
    }
  }
  function f(ae, af) {
    {
      (null == af || af > ae.length) && (af = ae.length);
      for (var ag = 0, ah = Array(af); ag < af; ag++) {
        ah[ag] = ae[ag];
      }
      return ah;
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
        {
          Object.setPrototypeOf ? Object.setPrototypeOf(aO, ay) : (aO.__proto__ = ay, ao(aO, an, "GeneratorFunction"));
          aO.prototype = Object.create(aC);
          return aO;
        }
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
          var aT = new aE(ap(aO, aP, aQ, aR), aS);
          return ag.isGeneratorFunction(aP) ? aT : aT.next().then(function (aU) {
            return aU.done ? aU.value : aT.next();
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
      {
        ao = function (aO, aP, aQ) {
          return aO[aP] = aQ;
        };
      }
    }
    function ap(aO, aP, aQ, aR) {
      {
        var aT = aP && aP.prototype instanceof aw ? aP : aw;
        var aU = Object.create(aT.prototype);
        var aV = new aJ(aR || []);
        aj(aU, "_invoke", {
          value: aF(aO, aQ, aV)
        });
        return aU;
      }
    }
    function aq(aO, aP, aQ) {
      {
        try {
          return {
            type: "normal",
            arg: aO.call(aP, aQ)
          };
        } catch (aU) {
          {
            var aS = {
              type: "throw",
              arg: aU
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
          ao(aO, aQ, function (aT) {
            {
              return this._invoke(aQ, aT);
            }
          });
        });
      }
    }
    function aE(aO, aP) {
      {
        function aS(aT, aU, aV, aW) {
          {
            var aY = aq(aO[aT], aO, aU);
            if ("throw" !== aY.type) {
              {
                var aZ = aY.arg;
                var b0 = aZ.value;
                return b0 && "object" == b(b0) && ai.call(b0, "__await") ? aP.resolve(b0.__await).then(function (b3) {
                  {
                    aS("next", b3, aV, aW);
                  }
                }, function (b3) {
                  {
                    aS("throw", b3, aV, aW);
                  }
                }) : aP.resolve(b0).then(function (b3) {
                  {
                    aZ.value = b3;
                    aV(aZ);
                  }
                }, function (b3) {
                  {
                    return aS("throw", b3, aV, aW);
                  }
                });
              }
            }
            aW(aY.arg);
          }
        }
        var aR;
        aj(this, "_invoke", {
          value: function (aT, aU) {
            {
              function aX() {
                return new aP(function (aY, aZ) {
                  {
                    aS(aT, aU, aY, aZ);
                  }
                });
              }
              return aR = aR ? aR.then(aX, aX) : aX();
            }
          }
        });
      }
    }
    function aF(aO, aP, aQ) {
      {
        var aS = ar;
        return function (aU, aV) {
          {
            if (aS === at) {
              throw Error("Generator is already running");
            }
            if (aS === au) {
              if ("throw" === aU) {
                throw aV;
              }
              var aW = {
                value: af,
                done: true
              };
              return aW;
            }
            for (aQ.method = aU, aQ.arg = aV;;) {
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
          }
        };
      }
    }
    function aG(aO, aP) {
      {
        var aS = aP.method;
        var aT = aO.iterator[aS];
        if (aT === af) {
          aP.delegate = null;
          "throw" === aS && aO.iterator.return && (aP.method = "return", aP.arg = af, aG(aO, aP), "throw" === aP.method) || "return" !== aS && (aP.method = "throw", aP.arg = new TypeError("The iterator does not provide a '" + aS + "' method"));
          return av;
        }
        var aU = aq(aT, aO.iterator, aP.arg);
        if ("throw" === aU.type) {
          aP.method = "throw";
          aP.arg = aU.arg;
          aP.delegate = null;
          return av;
        }
        var aV = aU.arg;
        return aV ? aV.done ? (aP[aO.resultName] = aV.value, aP.next = aO.nextLoc, "return" !== aP.method && (aP.method = "next", aP.arg = af), aP.delegate = null, av) : aV : (aP.method = "throw", aP.arg = new TypeError("iterator result is not an object"), aP.delegate = null, av);
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
            var aQ = aO[al];
            if (aQ) {
              return aQ.call(aO);
            }
            if ("function" == typeof aO.next) {
              return aO;
            }
            if (!isNaN(aO.length)) {
              {
                var aR = -1;
                var aS = function aW() {
                  {
                    for (; ++aR < aO.length;) {
                      if (ai.call(aO, aR)) {
                        aW.value = aO[aR];
                        aW.done = false;
                        return aW;
                      }
                    }
                    aW.value = af;
                    aW.done = true;
                    return aW;
                  }
                };
                return aS.next = aS;
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
      {
        return this;
      }
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
          var aO = this.tryEntries[0].completion;
          if ("throw" === aO.type) {
            throw aO.arg;
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
            {
              aT.type = "throw";
              aT.arg = aO;
              aQ.next = aX;
              aY && (aQ.method = "next", aQ.arg = af);
              return !!aY;
            }
          }
          for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
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
    {
      try {
        {
          var am = ae[aj](ak);
          var an = am.value;
        }
      } catch (ap) {
        return void ag(ap);
      }
      am.done ? af(an) : Promise.resolve(an).then(ah, ai);
    }
  }
  function i(ae) {
    return function () {
      var ah = this;
      var ai = arguments;
      return new Promise(function (aj, ak) {
        var am = ae.apply(ah, ai);
        function an(ap) {
          {
            h(am, aj, ak, an, ao, "next", ap);
          }
        }
        function ao(ap) {
          {
            h(am, aj, ak, an, ao, "throw", ap);
          }
        }
        an(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.DaChao : $.getdata("DaChao")) || "";
  var k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live";
  var l = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var m = undefined;
  window = {};
  var n = "";
  var o = "";
  var p = "";
  var q = "";
  var r = "94";
  var s = "";
  var t = "10048";
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
  var E = "";
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    {
      G = i(g().mark(function af() {
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
          return g().wrap(function (bh) {
            {
              for (;;) {
                switch (bh.prev = bh.next) {
                  case 0:
                    if (j) {
                      {
                        bh.next = 5;
                        break;
                      }
                    }
                    console.log("先去boxjs填写账号密码");
                    bh.next = 4;
                    return ac("先去boxjs填写账号密码");
                  case 4:
                    return bh.abrupt("return");
                  case 5:
                    bh.next = 7;
                    return a8();
                  case 7:
                    m = bh.sent;
                    ah = j.split(" ");
                    ai = c(ah);
                    bh.prev = 10;
                    ai.s();
                  case 12:
                    if ((aj = ai.n()).done) {
                      {
                        bh.next = 272;
                        break;
                      }
                    }
                    ak = aj.value;
                    console.log("随机生成UA");
                    al = a7();
                    x = al.ua;
                    y = al.commonUa;
                    z = al.uuid;
                    console.log(x);
                    console.log(y);
                    u = ak.split("&")[0];
                    v = ak.split("&")[1];
                    w = ak.split("&")[2];
                    console.log("用户：".concat(u, "开始任务"));
                    console.log("获取sessionId");
                    bh.next = 28;
                    return N("/api/account/init");
                  case 28:
                    am = bh.sent;
                    q = am.data.session.id;
                    console.log(q);
                    console.log("获取signature_key");
                    bh.next = 34;
                    return H("/web/init?client_id=".concat(t));
                  case 34:
                    an = bh.sent;
                    n = an.data.client.signature_key;
                    console.log(n);
                    console.log("获取code");
                    bh.next = 40;
                    return J("/web/oauth/credential_auth");
                  case 40:
                    if (ao = bh.sent, ao.data) {
                      {
                        bh.next = 44;
                        break;
                      }
                    }
                    console.log(ao.message);
                    return bh.abrupt("continue", 270);
                  case 44:
                    ap = ao.data.authorization_code.code;
                    console.log(ap);
                    console.log("登录");
                    bh.next = 49;
                    return N("/api/zbtxz/login", "check_token=&code=".concat(ap, "&token=&type=-1&union_id="));
                  case 49:
                    aq = bh.sent;
                    console.log("登录成功");
                    s = aq.data.session.account_id;
                    q = aq.data.session.id;
                    console.log("————————————");
                    console.log("有缘对对碰");
                    bh.next = 57;
                    return X("/open/xxdtest/dailyMatchTest/controller.php", "appid=".concat(q, "&openid=").concat(s, "&type=101"));
                  case 57:
                    bh.next = 59;
                    return bh.sent;
                  case 59:
                    ar = bh.sent;
                    console.log(ar);
                    as = 0;
                  case 62:
                    if (!(as < 5)) {
                      {
                        bh.next = 72;
                        break;
                      }
                    }
                    bh.next = 65;
                    return X("/open/xxdtest/dailyMatchTest/controller.php", "type=105&score=100");
                  case 65:
                    if (at = bh.sent, console.log(at), 1 == at.status) {
                      {
                        bh.next = 69;
                        break;
                      }
                    }
                    return bh.abrupt("break", 72);
                  case 69:
                    as++;
                    bh.next = 62;
                    break;
                  case 72:
                    if (B) {
                      {
                        bh.next = 80;
                        break;
                      }
                    }
                    console.log("获取对对碰抽奖id");
                    bh.next = 76;
                    return V("/open/xxdtest/dailyMatchTest/bookflip.php");
                  case 76:
                    au = bh.sent;
                    av = /\/h5\?mark=raffle@designh5&tid=([a-zA-Z0-9]+)/;
                    aw = au.match(av);
                    aw && (B = aw[1], console.log("对对碰抽奖id：".concat(B)));
                  case 80:
                    bh.next = 82;
                    return L("/api/user_mumber/account_detail");
                  case 82:
                    if (ax = bh.sent, !B) {
                      {
                        bh.next = 104;
                        break;
                      }
                    }
                    ay = Math.round(new Date().getTime() / 1000).toString();
                    bh.next = 87;
                    return R("/memberhy/tm/signature", {
                      accountId: s,
                      signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(ay, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                      mobile: "1",
                      sessionId: q,
                      login: "1",
                      user: {
                        realName: "",
                        image_url: ax.data.rst.image_url,
                        nick_name: ax.data.rst.nick_name,
                        is_face_verify: 0,
                        idcard: "",
                        id: s
                      },
                      timestamp: ay,
                      sign: "xsb_hn"
                    });
                  case 87:
                    az = bh.sent;
                    A = JSON.stringify({
                      id: az.id,
                      black: 0,
                      btoken: az.btoken,
                      expire: az.expire,
                      token: az.token,
                      source: "xsb_hn",
                      mobile: az.mobile,
                      mark: az.mark,
                      mtoken: az.mtoken,
                      stoken: az.stoken,
                      nick_name: encodeURI(az.nick_name),
                      avatar: az.avatar
                    });
                    bh.next = 91;
                    return P("/lotteryhy/designh5/client/activity/".concat(B));
                  case 91:
                    aA = bh.sent;
                    console.log("拥有".concat(aA.response.remain_counts, "次抽奖"));
                    aB = 0;
                  case 94:
                    if (!(aB < aA.response.remain_counts)) {
                      {
                        bh.next = 102;
                        break;
                      }
                    }
                    bh.next = 97;
                    return R("/lotteryhy/api/client/cj/awd/drw/".concat(B), {});
                  case 97:
                    aC = bh.sent;
                    aC.award_name ? (console.log("抽奖获得：".concat(aC.award_name)), o += "用户：".concat(u, " 抽奖获得：").concat(aC.award_name, "\n")) : (console.log(JSON.stringify(aC)), o += "用户：".concat(u, " 抽奖获得：").concat(aC.error_message, "\n"));
                  case 99:
                    aB++;
                    bh.next = 94;
                    break;
                  case 102:
                    bh.next = 105;
                    break;
                  case 104:
                    console.log("获取对对碰抽奖id失败");
                  case 105:
                    if (console.log("————————————"), console.log("获取id"), E && D) {
                      {
                        bh.next = 117;
                        break;
                      }
                    }
                    bh.next = 110;
                    return L("/api/myPage/list");
                  case 110:
                    aD = bh.sent;
                    aE = /\/h5\?mark=sign@designh5&tid=([a-zA-Z0-9]+)/;
                    aF = JSON.stringify(aD).match(aE);
                    aF && (E = aF[1]);
                    aE = /\/h5\?mark=news-read@designh5&tid=([a-zA-Z0-9]+)/;
                    aF = JSON.stringify(aD).match(aE);
                    aF && (D = aF[1]);
                  case 117:
                    if (!E) {
                      {
                        bh.next = 163;
                        break;
                      }
                    }
                    console.log("签到id：".concat(E));
                    timestamp = Math.round(new Date().getTime() / 1000).toString();
                    bh.next = 122;
                    return R("/memberhy/tm/signature", {
                      accountId: s,
                      signature: CryptoJS.SHA256(" &id&mobile&nick_name&&".concat(timestamp, "&&KO>N<O5&3^L1%23YH0H1#G91*2H")).toString(),
                      mobile: "1",
                      sessionId: q,
                      login: "1",
                      user: {
                        realName: "",
                        image_url: ax.data.rst.image_url,
                        nick_name: ax.data.rst.nick_name,
                        is_face_verify: 0,
                        idcard: "",
                        id: s
                      },
                      timestamp: timestamp,
                      sign: "xsb_hn"
                    });
                  case 122:
                    signature = bh.sent;
                    A = JSON.stringify({
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
                    aG = new (m.loadJSEncrypt())();
                    aG.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
                    aH = aG.encrypt(JSON.stringify({
                      activity_id: E,
                      timestamp: Math.round(new Date().getTime() / 1000).toString()
                    }));
                    bh.next = 130;
                    return R("/signhy/client/actSign/actSign", {
                      params: aH
                    });
                  case 130:
                    aI = bh.sent;
                    0 == aI.error_code ? console.log("签到成功") : console.log(aI.error_message);
                    bh.next = 134;
                    return P("/signhy/client/actSign/getRelationCjList?activity_id=".concat(E));
                  case 134:
                    aJ = bh.sent;
                    aK = c(aJ.response);
                    bh.prev = 136;
                    aK.s();
                  case 138:
                    if ((aL = aK.n()).done) {
                      {
                        bh.next = 153;
                        break;
                      }
                    }
                    aM = aL.value;
                    console.log("活动：".concat(aM.title));
                    console.log("拥有".concat(aM.draw_num, "次抽奖"));
                    aN = 0;
                  case 143:
                    if (!(aN < aM.draw_num)) {
                      {
                        bh.next = 151;
                        break;
                      }
                    }
                    bh.next = 146;
                    return R("/lotteryhy/api/client/cj/awd/drw/".concat(aM.hashid), {});
                  case 146:
                    aO = bh.sent;
                    aO.award_name ? (console.log("抽奖获得：".concat(aO.award_name)), o += "用户：".concat(u, " 抽奖获得：").concat(aO.award_name, "\n")) : (console.log(JSON.stringify(aO)), o += "用户：".concat(u, " 抽奖获得：").concat(aO.error_message, "\n"));
                  case 148:
                    aN++;
                    bh.next = 143;
                    break;
                  case 151:
                    bh.next = 138;
                    break;
                  case 153:
                    bh.next = 158;
                    break;
                  case 155:
                    bh.prev = 155;
                    bh.t0 = bh.catch(136);
                    aK.e(bh.t0);
                  case 158:
                    bh.prev = 158;
                    aK.f();
                    return bh.finish(158);
                  case 161:
                    bh.next = 164;
                    break;
                  case 163:
                    console.log("获取签到id失败");
                  case 164:
                    if (!D) {
                      {
                        bh.next = 238;
                        break;
                      }
                    }
                    console.log("————————————");
                    console.log("阅读抽奖");
                    console.log("阅读id：".concat(D));
                    console.log("滑块验证");
                    bh.next = 171;
                    return P("/newshy/api/client/news/getTnCode?t=".concat(Math.random()));
                  case 171:
                    aP = bh.sent;
                    bh.next = 174;
                    return a1("".concat(k, "/crop"), {
                      image: aP.img,
                      y_coordinate: 150
                    });
                  case 174:
                    if (aQ = bh.sent, aQ) {
                      {
                        bh.next = 180;
                        break;
                      }
                    }
                    console.log("ddddocr服务异常");
                    bh.next = 179;
                    return ac("ddddocr服务异常");
                  case 179:
                    return bh.abrupt("continue", 270);
                  case 180:
                    var bj = {
                      slidingImage: aQ.slidingImage,
                      backImage: aQ.backImage
                    };
                    bh.next = 182;
                    return a1("".concat(k, "/slideComparison"), bj);
                  case 182:
                    if (aR = bh.sent, aR) {
                      {
                        bh.next = 188;
                        break;
                      }
                    }
                    console.log("ddddocr服务异常");
                    bh.next = 187;
                    return ac("ddddocr服务异常");
                  case 187:
                    return bh.abrupt("continue", 270);
                  case 188:
                    console.log(aR);
                    aS = aP.request_id;
                    aT = aR.result;
                    bh.next = 193;
                    return P("/newshy/api/client/news/list/".concat(D));
                  case 193:
                    aU = bh.sent;
                    aV = c(aU.data[0].information_content_data[0].data);
                    bh.prev = 195;
                    aV.s();
                  case 197:
                    if ((aW = aV.n()).done) {
                      {
                        bh.next = 213;
                        break;
                      }
                    }
                    for (aX = aW.value, console.log("文章：".concat(aX.title)), aY = aX.link.split("?")[1], aZ = {}, b0 = aY.split("&"), b1 = 0, b2 = b0.length; b1 < b2; b1++) {
                      b3 = b0[b1].split("=");
                      aZ[b3[0]] = b3[1];
                    }
                    b4 = new (m.loadJSEncrypt())();
                    b4.setPublicKey("-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G25Cq2HxQQ+gX9H2dzb6sbRtHzD8JbHRmOrAFzaWI2kdzbPuga4ZlqxOAyoAm8ucIAeKD4joUn+dN1wYC03qCgloNU21KUJUls/Htp2RwxpmoncSIAOZvSQQ6Kl3vLPYlG6GetwYYN83sG85K+3w4D89hBGHuYqKQyQsUvntxi5UVoNfo674QsCvqxHxZAuEXKoEagzUoSu8gWrDTuhRK4aQcDpnCslwKycaO63UBvfTlBG0Jc7sqzXxapTArbqaA58XCM8dRIZdp7DR/V7qucn/PwIOGJrOu09/cjndwIpeki8HXa9rvgWwiwZCy289vgRoxzIcLrQJ2oC1MK2RwIDAQAB-----END PUBLIC KEY-----");
                    b5 = b4.encrypt(JSON.stringify({
                      news_id: D,
                      item_id: aX.item_id,
                      request_id: aS,
                      timestamp: Math.round(new Date().getTime() / 1000).toString(),
                      tn_x: aT
                    }));
                    bh.next = 209;
                    return R("/newshy/api/client/news/readArticle", {
                      params: b5
                    });
                  case 209:
                    b6 = bh.sent;
                    console.log("阅读：".concat(null == b6 ? undefined : b6.success));
                  case 211:
                    bh.next = 197;
                    break;
                  case 213:
                    bh.next = 218;
                    break;
                  case 215:
                    bh.prev = 215;
                    bh.t1 = bh.catch(195);
                    aV.e(bh.t1);
                  case 218:
                    bh.prev = 218;
                    aV.f();
                    return bh.finish(218);
                  case 221:
                    C = aU.data[0].draw.activity_id;
                    console.log("抽奖id：".concat(C));
                    bh.next = 225;
                    return P("/lotteryhy/designh5/client/activity/".concat(C));
                  case 225:
                    b7 = bh.sent;
                    console.log("拥有".concat(b7.response.remain_counts, "次抽奖"));
                    b8 = 0;
                  case 228:
                    if (!(b8 < b7.response.remain_counts)) {
                      {
                        bh.next = 236;
                        break;
                      }
                    }
                    bh.next = 231;
                    return R("/lotteryhy/api/client/cj/awd/drw/".concat(C), {});
                  case 231:
                    b9 = bh.sent;
                    b9.award_name ? (console.log("抽奖获得：".concat(b9.award_name)), o += "用户：".concat(u, " 抽奖获得：").concat(b9.award_name, "\n")) : (console.log(JSON.stringify(b9)), o += "用户：".concat(u, " 抽奖获得：").concat(b9.error_message, "\n"));
                  case 233:
                    b8++;
                    bh.next = 228;
                    break;
                  case 236:
                    bh.next = 239;
                    break;
                  case 238:
                    console.log("获取id失败");
                  case 239:
                    bh.next = 241;
                    return Z("/lotteryhy/api/client/cj/member/prize/info?prize_type=3&page=1&count=20");
                  case 241:
                    ba = bh.sent;
                    bb = c(ba.data);
                    bh.prev = 243;
                    bb.s();
                  case 245:
                    if ((bc = bb.n()).done) {
                      {
                        bh.next = 262;
                        break;
                      }
                    }
                    if (bd = bc.value, 2 == bd.status) {
                      {
                        bh.next = 260;
                        break;
                      }
                    }
                    if (be = JSON.parse(bd.prize_info).code, console.log("奖品：".concat(bd.prize_content, " code：").concat(be)), !w) {
                      {
                        bh.next = 259;
                        break;
                      }
                    }
                    var bk = {
                      code: be
                    };
                    bf = "";
                    bh.next = 254;
                    return T("/lotteryhy/api/client/cj/send/pak", bk);
                  case 254:
                    bg = bh.sent;
                    bg.success ? (console.log("领取成功"), bf = "领取成功") : (console.log(bg.error_message), bf = bg.error_message);
                    p += "用户：".concat(u, " 奖品：").concat(bd.prize_content, " 领取结果：").concat(bf, "\n");
                    bh.next = 260;
                    break;
                  case 259:
                    p += "用户：".concat(u, " 微信领取链接：https://m.aihoge.com/lottery/rotor/drawRedPacket?CHECK_CODE=").concat(be, "\n");
                  case 260:
                    bh.next = 245;
                    break;
                  case 262:
                    bh.next = 267;
                    break;
                  case 264:
                    bh.prev = 264;
                    bh.t2 = bh.catch(243);
                    bb.e(bh.t2);
                  case 267:
                    bh.prev = 267;
                    bb.f();
                    return bh.finish(267);
                  case 270:
                    bh.next = 12;
                    break;
                  case 272:
                    bh.next = 277;
                    break;
                  case 274:
                    bh.prev = 274;
                    bh.t3 = bh.catch(10);
                    ai.e(bh.t3);
                  case 277:
                    bh.prev = 277;
                    ai.f();
                    return bh.finish(277);
                  case 280:
                    if (!o) {
                      {
                        bh.next = 283;
                        break;
                      }
                    }
                    bh.next = 283;
                    return ac(o);
                  case 283:
                    if (!p) {
                      {
                        bh.next = 286;
                        break;
                      }
                    }
                    bh.next = 286;
                    return ac(p);
                  case 286:
                  case "end":
                    return bh.stop();
                }
              }
            }
          }, af, null, [[10, 274, 277, 280], [136, 155, 158, 161], [195, 215, 218, 221], [243, 264, 267, 270]]);
        }
      }));
      return G.apply(this, arguments);
    }
  }
  function H(ae) {
    return I.apply(this, arguments);
  }
  function I() {
    var ae = {
      FIHMz: "arfrb",
      NAQdQ: "jIkxv",
      iQWYz: function (af, ag) {
        return af(ag);
      },
      Wlzwi: "BQDDx",
      aeyvh: "Kbtjq",
      tILaM: "tsZRW",
      rrRrW: function (af) {
        return af();
      },
      fbnuy: function (af, ag, ah) {
        return af(ag, ah);
      },
      CZohp: "1|3|2|0|5|4",
      faQIc: "The iterator does not provide a '",
      MCTtQ: "' method",
      vnIBr: function (af, ag) {
        return af !== ag;
      },
      BpgJr: "qzZzg",
      OSgRj: "https://passport.tmuyun.com",
      xLTNa: "Keep-Alive",
      jxSOM: "gzip",
      Mzxls: "end",
      QWSdk: "hEFjd",
      lOYum: "try statement without catch or finally",
      SOItN: function (af, ag) {
        return af < ag;
      }
    };
    {
      I = i(g().mark(function af(ag) {
        var ah = {
          xWXQd: "LXhfc",
          hMcQX: "arfrb",
          XzmRa: "jIkxv",
          WjYGj: function (ai, aj) {
            return ai(aj);
          },
          qzroT: "BQDDx",
          uNLqR: "Kbtjq",
          PWsRh: "tsZRW",
          UORHa: function (ai) {
            return ai();
          },
          yWmtc: function (ai, aj, ak) {
            return ai(aj, ak);
          },
          phHop: function (ai, aj) {
            return ai === aj;
          },
          yHHjz: "1|3|2|0|5|4",
          vVMxe: "The iterator does not provide a '",
          NhAcG: "' method",
          gzVQJ: "kxkHH",
          bAcIR: function (ai, aj) {
            return ai !== aj;
          },
          WCvks: "JMZjL",
          KMjyY: "qzZzg",
          iKgZs: "https://passport.tmuyun.com",
          iwTVS: "Keep-Alive",
          lyhNH: "gzip",
          GpJiH: function (ai, aj) {
            return ai !== aj;
          },
          wadhr: "jfrIz",
          taOJW: "end"
        };
        return g().wrap(function (aj) {
          var ak = {
            FNGJM: function (al, am) {
              return al !== am;
            },
            mCrPi: "LXhfc",
            DTsqd: "arfrb",
            VVWzY: "jIkxv",
            PCYuh: function (al, am) {
              return al(am);
            },
            wfXUr: "BQDDx",
            liJOL: "Kbtjq",
            ktOWG: "tsZRW",
            DDaiA: function (al) {
              return al();
            },
            Nrkka: function (al, am, an) {
              return al(am, an);
            },
            OKTii: function (al, am) {
              return al === am;
            },
            ZgiGP: "pjukY",
            VloCV: "1|3|2|0|5|4",
            azDVX: "The iterator does not provide a '",
            SNWwq: "' method",
            itRve: "PUzfO",
            EDyhg: "kxkHH",
            qmgrs: function (al, am) {
              return al(am);
            },
            ywaYl: function (al, am) {
              return al !== am;
            },
            IqTCY: "JMZjL",
            WRPLx: "qzZzg",
            OfWQp: "https://passport.tmuyun.com",
            ihBLh: "Keep-Alive",
            snviL: "gzip"
          };
          {
            for (;;) {
              switch (aj.prev = aj.next) {
                case 0:
                  return aj.abrupt("return", new Promise(function (am) {
                    var an = {
                      tLXgz: "illegal catch attempt",
                      yJyEN: function (ap, aq) {
                        return ap !== aq;
                      },
                      DxFjk: "LXhfc",
                      NERgM: "arfrb",
                      lHDDw: "jIkxv",
                      RjZtQ: function (ap, aq) {
                        return ap(aq);
                      },
                      zmWZX: "BQDDx",
                      GiCgU: "Kbtjq",
                      nAVTf: "tsZRW",
                      WyqaR: function (ap) {
                        return ap();
                      },
                      uDaMB: function (ap, aq, ar) {
                        return ap(aq, ar);
                      },
                      pcfsZ: function (ap, aq) {
                        return ap === aq;
                      },
                      PuLZy: "pjukY",
                      YmAsp: "1|3|2|0|5|4",
                      pxcaz: "The iterator does not provide a '",
                      eZNTW: "' method",
                      RvcJl: "PUzfO",
                      wvjyn: function (ap, aq) {
                        return ap !== aq;
                      },
                      cuIGT: "kxkHH",
                      pePmH: function (ap, aq) {
                        return ap(aq);
                      },
                      MxkhS: function (ap) {
                        return ap();
                      }
                    };
                    {
                      var ao = {
                        url: "https://passport.tmuyun.com".concat(ag),
                        headers: {
                          Connection: "Keep-Alive",
                          "Cache-Control": "no-cache",
                          "X-REQUEST-ID": a5(),
                          "Accept-Encoding": "gzip",
                          "user-agent": x
                        }
                      };
                      $.get(ao, function () {
                        {
                          var aq = i(g().mark(function as(at, au, av) {
                            {
                              return g().wrap(function (ax) {
                                {
                                  for (;;) {
                                    switch (ax.prev = ax.next) {
                                      case 0:
                                        try {
                                          {
                                            at ? (console.log("".concat(JSON.stringify(at))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : am(JSON.parse(av));
                                          }
                                        } catch (aC) {
                                          {
                                            $.logErr(aC, au);
                                          }
                                        } finally {
                                          am();
                                        }
                                      case 1:
                                      case "end":
                                        return ax.stop();
                                    }
                                  }
                                }
                              }, as);
                            }
                          }));
                          return function (at, au, av) {
                            {
                              return aq.apply(this, arguments);
                            }
                          };
                        }
                      }());
                    }
                  }));
                case 1:
                case "end":
                  return aj.stop();
              }
            }
          }
        }, af);
      }));
      return I.apply(this, arguments);
    }
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
              ah = a3();
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://passport.tmuyun.com".concat(ag),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ah.uuid,
                    "X-SIGNATURE": ah.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": x
                  },
                  body: ah.body
                };
                $.post(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            try {
                              {
                                aq ? (console.log("".concat(JSON.stringify(aq))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(as));
                              }
                            } catch (aw) {
                              $.logErr(aw, ar);
                            } finally {
                              ak();
                            }
                          case 1:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
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
    M = i(g().mark(function ae(af) {
      var ah;
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              ah = a4(af);
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://vapp.tmuyun.com".concat(af),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ah.time,
                    "X-SESSION-ID": q,
                    "X-REQUEST-ID": ah.uuid,
                    "X-SIGNATURE": ah.signature,
                    "X-TENANT-ID": r,
                    "X-ACCOUNT-ID": s,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  }
                };
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !aq) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, ar);
                          case 14:
                            at.prev = 14;
                            ak();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ai.stop();
          }
        }
      }, ae);
    }));
    return M.apply(this, arguments);
  }
  function N(ae, af) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function ae(af, ag) {
      var ai;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ai = a4(af);
              return aj.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://vapp.tmuyun.com".concat(af),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ai.time,
                    "X-SESSION-ID": q,
                    "X-REQUEST-ID": ai.uuid,
                    "X-SIGNATURE": ai.signature,
                    "X-TENANT-ID": r,
                    "X-ACCOUNT-ID": s,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  },
                  body: ag
                };
                $.post(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !aq) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, ar);
                          case 14:
                            au.prev = 14;
                            ak();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aj.stop();
          }
        }
      }, ae);
    }));
    return O.apply(this, arguments);
  }
  function P(ae) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function af(ag) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://m.aihoge.com/api".concat(ag),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: A,
                    Limit: D,
                    sessionId: q,
                    "X-DEVICE-ID": "000",
                    accountId: s,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(D, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(al, function () {
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
              return ah.stop();
          }
        }
      }, af);
    }));
    return Q.apply(this, arguments);
  }
  function R(ae, af) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function ae(af, ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://m.aihoge.com/api".concat(af),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "xsb_hn",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: A,
                    Limit: D,
                    sessionId: q,
                    "X-DEVICE-ID": "000",
                    accountId: s,
                    "x-requested-with": "com.hoge.android.app.dachao",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    Referer: "https://m.aihoge.com/h5?mark=news-read@designh5&tid=".concat(D, "&path=index&isNeedLogin=true"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ag)
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
              return ai.stop();
          }
        }
      }, ae);
    }));
    return S.apply(this, arguments);
  }
  function T(ae, af) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function af(ag, ah) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (al) {
                var an = {
                  url: "https://m.aihoge.com/api".concat(ag),
                  headers: {
                    Connection: "keep-alive",
                    "X-DEVICE-SIGN": "wechat",
                    "X-CLIENT-VERSION": "1314",
                    "Content-Type": "application/json;charset=UTF-8",
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    "HTTP-X-H5-VERSION": "1",
                    member: w,
                    Limit: "default",
                    "X-DEVICE-ID": "000",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(ah)
                };
                $.post(an, function () {
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
                            al(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            al();
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
              return aj.stop();
          }
        }
      }, af);
    }));
    return U.apply(this, arguments);
  }
  function V(ae) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function af(ag) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (al) {
                var am = {
                  url: "https://active.hndachao.cn".concat(ag),
                  headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "x-requested-with": "XMLHttpRequest",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    origin: "https://active.hndachao.cn",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://active.hndachao.cn/open/xxdtest/dailyMatchTest/bookflip.php",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: "dachaogo={\"openid\":\"".concat(s, "\",\"platform\":3}")
                  }
                };
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !aq) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            al(as);
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, ar);
                          case 14:
                            at.prev = 14;
                            al();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return W.apply(this, arguments);
  }
  function X(ae, af) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function af(ag, ah) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (al) {
                var am = {
                  url: "https://active.hndachao.cn".concat(ag),
                  headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    accept: "application/json, text/javascript, */*; q=0.01",
                    "x-requested-with": "XMLHttpRequest",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                    origin: "https://active.hndachao.cn",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://active.hndachao.cn/open/xxdtest/dailyMatchTest/bookflip.php",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    cookie: "dachaogo={\"openid\":\"".concat(s, "\",\"platform\":3}")
                  },
                  body: ah
                };
                $.post(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !aq) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            al(JSON.parse(as));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, ar);
                          case 14:
                            au.prev = 14;
                            al();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return Y.apply(this, arguments);
  }
  function Z(ae) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function af(ag) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  Connection: "keep-alive",
                  "X-DEVICE-SIGN": "xsb_hn",
                  "X-CLIENT-VERSION": "1314",
                  accept: "application/json, text/plain, */*",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_hn;xsb_hn;14.1.6;native_app;6.11.0",
                  "HTTP-X-H5-VERSION": "1",
                  member: A,
                  Limit: "default",
                  sessionId: q,
                  "X-DEVICE-ID": "000",
                  accountId: s,
                  "x-requested-with": "com.hoge.android.app.dachao",
                  "sec-fetch-site": "same-origin",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  Referer: "https://axh5.aihoge.com/winningList?refresh_times=1641284795642",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var am = {
                  url: "https://axh5.aihoge.com/api".concat(ag),
                  headers: al
                };
                $.get(am, function () {
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
                            aj(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            aj();
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
              return ah.stop();
          }
        }
      }, af);
    }));
    return a0.apply(this, arguments);
  }
  function a1(ae, af) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function af(ag, ah) {
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              return aj.abrupt("return", new Promise(function (al) {
                var am = {
                  "Content-Type": "application/json"
                };
                var an = {
                  url: ag,
                  headers: am,
                  body: JSON.stringify(ah)
                };
                $.post(an, function (ao, ap, aq) {
                  try {
                    ao ? (console.log("".concat(JSON.stringify(ao))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : al(JSON.parse(aq));
                  } catch (ar) {
                    $.logErr(ar, ap);
                  } finally {
                    al();
                  }
                });
              }));
            case 1:
            case "end":
              return aj.stop();
          }
        }
      }, af);
    }));
    return a2.apply(this, arguments);
  }
  function a3() {
    var ae = new (m.loadJSEncrypt())();
    ae.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    v = ae.encrypt(v);
    var af = a5();
    var ag = "client_id=".concat(t, "&password=").concat(v, "&phone_number=").concat(u);
    var ah = "post%%/web/oauth/credential_auth?".concat(ag, "%%").concat(af, "%%");
    ag = "client_id=".concat(t, "&password=").concat(encodeURIComponent(v), "&phone_number=").concat(u);
    CryptoJS = m.createCryptoJS();
    var ai = CryptoJS.HmacSHA256(ah, n);
    var aj = CryptoJS.enc.Hex.stringify(ai);
    var ak = {
      uuid: af,
      signature: aj,
      body: ag
    };
    return ak;
  }
  function a4(ae) {
    var af = a5();
    var ag = Date.now();
    ae.indexOf("?") > 0 && (ae = ae.substring(0, ae.indexOf("?")));
    CryptoJS = m.createCryptoJS();
    var ah = CryptoJS.SHA256("".concat(ae, "&&").concat(q, "&&").concat(af, "&&").concat(ag, "&&FR*r!isE5W&&").concat(r)).toString();
    var ai = {
      uuid: af,
      time: ag,
      signature: ah
    };
    return ai;
  }
  function a5() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (af) {
      var ag = 16 * Math.random() | 0;
      var ah = "x" === af ? ag : 3 & ag | 8;
      return ah.toString(16);
    });
  }
  function a6(ae) {
    return ae[Math.floor(Math.random() * ae.length)];
  }
  function a7() {
    var ae = "14.1.6";
    var af = a5();
    var ag = a6(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var ah = "Xiaomi " + ag;
    var ai = "Android";
    var aj = "".concat(ai.toUpperCase(), ";").concat("11", ";").concat(t, ";").concat(ae, ";1.0;null;").concat(ag);
    var ak = "".concat(ae, ";").concat(af, ";").concat(ah, ";").concat(ai, ";").concat("11", ";").concat("6.11.0");
    var al = {
      ua: aj,
      commonUa: ak,
      uuid: af
    };
    return al;
  }
  function a8() {
    return a9.apply(this, arguments);
  }
  function a9() {
    a9 = i(g().mark(function ae() {
      var ag;
      return g().wrap(function ah(ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              if (ag = $.getdata("Utils_Code") || "", !ag || !Object.keys(ag).length) {
                ai.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ag);
              return ai.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ai.abrupt("return", new Promise(function () {
                var ak = i(g().mark(function al(am) {
                  return g().wrap(function ao(ap) {
                    for (;;) {
                      switch (ap.prev = ap.next) {
                        case 0:
                          $.getScript("".concat(l, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (aq) {
                            $.setdata(aq, "Utils_Code");
                            eval(aq);
                            console.log("✅ Utils加载成功, 请继续");
                            am(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ap.stop();
                      }
                    }
                  }, al);
                }));
                return function (am) {
                  return ak.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ai.stop();
          }
        }
      }, ae);
    }));
    return a9.apply(this, arguments);
  }
  function aa() {
    return ab.apply(this, arguments);
  }
  function ab() {
    ab = i(g().mark(function af() {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var ak = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            try {
                              ao ? (console.log("".concat(JSON.stringify(ao))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(aq).notice);
                            } catch (at) {
                              $.logErr(at, ap);
                            } finally {
                              aj();
                            }
                          case 1:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, an);
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
    return ab.apply(this, arguments);
  }
  function ac(ae) {
    return ad.apply(this, arguments);
  }
  function ad() {
    ad = i(g().mark(function ae(af) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              if (!$.isNode()) {
                ag.next = 5;
                break;
              }
              ag.next = 3;
              return notify.sendNotify($.name, af);
            case 3:
              ag.next = 6;
              break;
            case 5:
              $.msg($.name, "", af);
            case 6:
            case "end":
              return ag.stop();
          }
        }
      }, ae);
    }));
    return ad.apply(this, arguments);
  }
  i(g().mark(function ae() {
    return g().wrap(function (af) {
      for (;;) {
        switch (af.prev = af.next) {
          case 0:
            af.next = 2;
            return aa();
          case 2:
            af.next = 4;
            return F();
          case 4:
          case "end":
            return af.stop();
        }
      }
    }, ae);
  }))().catch(function (af) {
    $.log(af);
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