//Sat Jun 21 2025 09:29:30 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("新江北");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a5) {
    {
      b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a8) {
        {
          return typeof a8;
        }
      } : function (a8) {
        {
          return a8 && "function" == typeof Symbol && a8.constructor === Symbol && a8 !== Symbol.prototype ? "symbol" : typeof a8;
        }
      };
      return b(a5);
    }
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
                    var ag = {
                      done: true
                    };
                    return a9 >= a5.length ? ag : {
                      done: false,
                      value: a5[a9++]
                    };
                  }
                },
                e: function (ag) {
                  {
                    throw ag;
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
            var ai = a8.next();
            ac = ai.done;
            return ai;
          }
        },
        e: function (ah) {
          {
            ad = true;
            ab = ah;
          }
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
    if (a5) {
      {
        if ("string" == typeof a5) {
          return f(a5, a6);
        }
        var a7 = {}.toString.call(a5).slice(8, -1);
        "Object" === a7 && a5.constructor && (a7 = a5.constructor.name);
        return "Map" === a7 || "Set" === a7 ? Array.from(a5) : "Arguments" === a7 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a7) ? f(a5, a6) : undefined;
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

    g = function () {
      {
        return a7;
      }
    };
    var a6;
    var a7 = {
      wrap: ag,
      isGeneratorFunction: function (aF) {
        var aH = "function" == typeof aF && aF.constructor;
        return !!aH && (aH === ao || "GeneratorFunction" === (aH.displayName || aH.name));
      },
      mark: function (aF) {
        Object.setPrototypeOf ? Object.setPrototypeOf(aF, ap) : (aF.__proto__ = ap, af(aF, ae, "GeneratorFunction"));
        aF.prototype = Object.create(at);
        return aF;
      },
      awrap: function (aF) {
        {
          var aH = {
            __await: aF
          };
          return aH;
        }
      },
      AsyncIterator: av,
      async: function (aF, aG, aH, aI, aJ) {
        {
          undefined === aJ && (aJ = Promise);
          var aM = new av(ag(aF, aG, aH, aI), aJ);
          return a7.isGeneratorFunction(aG) ? aM : aM.next().then(function (aO) {
            return aO.done ? aO.value : aM.next();
          });
        }
      }
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
      af({}, "");
    } catch (aD) {
      {
        af = function (aE, aF, aG) {
          {
            return aE[aF] = aG;
          }
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
          {
            return {
              type: "normal",
              arg: aF.call(aG, aH)
            };
          }
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
        ["next", "throw", "return"].forEach(function (aH) {
          {
            af(aF, aH, function (aK) {
              {
                return this._invoke(aH, aK);
              }
            });
          }
        });
      }
    }
    function av(aF, aG) {
      {
        function aK(aL, aM, aN, aO) {
          var aQ = ah(aF[aL], aF, aM);
          if ("throw" !== aQ.type) {
            {
              var aR = aQ.arg;
              var aS = aR.value;
              return aS && "object" == b(aS) && a9.call(aS, "__await") ? aG.resolve(aS.__await).then(function (aU) {
                aK("next", aU, aN, aO);
              }, function (aU) {
                aK("throw", aU, aN, aO);
              }) : aG.resolve(aS).then(function (aU) {
                {
                  aR.value = aU;
                  aN(aR);
                }
              }, function (aU) {
                {
                  return aK("throw", aU, aN, aO);
                }
              });
            }
          }
          aO(aQ.arg);
        }
        var aI;
        aa(this, "_invoke", {
          value: function (aL, aM) {
            {
              function aO() {
                {
                  return new aG(function (aP, aQ) {
                    {
                      aK(aL, aM, aP, aQ);
                    }
                  });
                }
              }
              return aI = aI ? aI.then(aO, aO) : aO();
            }
          }
        });
      }
    }
    function aw(aF, aG, aH) {
      {
        var aJ = ai;
        return function (aL, aM) {
          {
            if (aJ === ak) {
              throw Error("Generator is already running");
            }
            if (aJ === al) {
              {
                if ("throw" === aL) {
                  throw aM;
                }
                var aO = {
                  value: a6,
                  done: true
                };
                return aO;
              }
            }
            for (aH.method = aL, aH.arg = aM;;) {
              {
                var aP = aH.delegate;
                if (aP) {
                  {
                    var aQ = ax(aP, aH);
                    if (aQ) {
                      {
                        if (aQ === am) {
                          continue;
                        }
                        return aQ;
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
                var aR = ah(aF, aG, aH);
                if ("normal" === aR.type) {
                  {
                    if (aJ = aH.done ? al : aj, aR.arg === am) {
                      continue;
                    }
                    var aS = {
                      value: aR.arg,
                      done: aH.done
                    };
                    return aS;
                  }
                }
                "throw" === aR.type && (aJ = al, aH.method = "throw", aH.arg = aR.arg);
              }
            }
          }
        };
      }
    }
    function ax(aF, aG) {
      {
        var aH = aG.method;
        var aI = aF.iterator[aH];
        if (aI === a6) {
          aG.delegate = null;
          "throw" === aH && aF.iterator.return && (aG.method = "return", aG.arg = a6, ax(aF, aG), "throw" === aG.method) || "return" !== aH && (aG.method = "throw", aG.arg = new TypeError("The iterator does not provide a '" + aH + "' method"));
          return am;
        }
        var aJ = ah(aI, aF.iterator, aG.arg);
        if ("throw" === aJ.type) {
          aG.method = "throw";
          aG.arg = aJ.arg;
          aG.delegate = null;
          return am;
        }
        var aK = aJ.arg;
        return aK ? aK.done ? (aG[aF.resultName] = aK.value, aG.next = aF.nextLoc, "return" !== aG.method && (aG.method = "next", aG.arg = a6), aG.delegate = null, am) : aK : (aG.method = "throw", aG.arg = new TypeError("iterator result is not an object"), aG.delegate = null, am);
      }
    }
    function ay(aF) {
      var aH = {
        tryLoc: aF[0]
      };
      1 in aF && (aH.catchLoc = aF[1]);
      2 in aF && (aH.finallyLoc = aF[2], aH.afterLoc = aF[3]);
      this.tryEntries.push(aH);
    }
    function az(aF) {
      {
        var aG = aF.completion || {};
        aG.type = "normal";
        delete aG.arg;
        aF.completion = aG;
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
                var aI = function aK() {
                  {
                    for (; ++aH < aF.length;) {
                      if (a9.call(aF, aH)) {
                        aK.value = aF[aH];
                        aK.done = false;
                        return aK;
                      }
                    }
                    aK.value = a6;
                    aK.done = true;
                    return aK;
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
    au(av.prototype);
    af(av.prototype, ad, function () {
      {
        return this;
      }
    });
    au(at);
    af(at, ae, "Generator");
    af(at, ac, function () {
      {
        return this;
      }
    });
    af(at, "toString", function () {
      {
        return "[object Generator]";
      }
    });
    a7.keys = function (aF) {
      {
        var aH = Object(aF);
        var aI = [];
        for (var aJ in aH) aI.push(aJ);
        aI.reverse();
        return function aL() {
          {
            for (; aI.length;) {
              {
                var aM = aI.pop();
                if (aM in aH) {
                  aL.value = aM;
                  aL.done = false;
                  return aL;
                }
              }
            }
            aL.done = true;
            return aL;
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
          var aF = this.tryEntries[0].completion;
          if ("throw" === aF.type) {
            throw aF.arg;
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
            aK.type = "throw";
            aK.arg = aF;
            aH.next = aO;
            aP && (aH.method = "next", aH.arg = a6);
            return !!aP;
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
          for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
            {
              var aI = this.tryEntries[aH];
              if (aI.finallyLoc === aF) {
                this.complete(aI.completion, aI.afterLoc);
                az(aI);
                return am;
              }
            }
          }
        }
      },
      catch: function (aF) {
        {
          for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
            {
              var aI = this.tryEntries[aH];
              if (aI.tryLoc === aF) {
                {
                  var aJ = aI.completion;
                  if ("throw" === aJ.type) {
                    {
                      var aK = aJ.arg;
                      az(aI);
                    }
                  }
                  return aK;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aF, aG, aH) {
        {
          this.delegate = {
            iterator: aB(aF),
            resultName: aG,
            nextLoc: aH
          };
          "next" === this.method && (this.arg = a6);
          return am;
        }
      }
    };
    return a7;
  }
  function h(a5, a6, a7, a8, a9, aa, ab) {
    {
      try {
        {
          var ae = a5[aa](ab);
          var af = ae.value;
        }
      } catch (ah) {
        {
          return void a7(ah);
        }
      }
      ae.done ? a6(af) : Promise.resolve(af).then(a8, a9);
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
  var j = ($.isNode() ? process.env.XinJiangBei : $.getdata("XinJiangBei")) || "";
  var k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var l = undefined;
  window = {};
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
  var w = "";
  var x = "";
  var y = "";
  var z = "";
  var A = "102";
  var B = "10050";
  var C = "FR*r!isE5W";
  function D() {
    {
      return E.apply(this, arguments);
    }
  }
  function E() {
    {
      E = i(g().mark(function a7() {
        {
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
          return g().wrap(function b5(b6) {
            {
              for (;;) {
                switch (b6.prev = b6.next) {
                  case 0:
                    if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                      {
                        b6.next = 6;
                        break;
                      }
                    }
                    console.log("先去boxjs填写账号密码");
                    b6.next = 5;
                    return a3("先去boxjs填写账号密码");
                  case 5:
                    return b6.abrupt("return");
                  case 6:
                    b6.next = 8;
                    return a1();
                  case 8:
                    l = b6.sent;
                    a9 = j.split(" ");
                    aa = c(a9);
                    b6.prev = 11;
                    aa.s();
                  case 13:
                    if ((ab = aa.n()).done) {
                      {
                        b6.next = 236;
                        break;
                      }
                    }
                    ac = ab.value;
                    console.log("随机生成UA");
                    ad = Z();
                    u = ad.ua;
                    v = ad.commonUa;
                    w = ad.uuid;
                    console.log(u);
                    console.log(v);
                    q = ac.split("&")[0];
                    r = ac.split("&")[1];
                    s = ac.split("&")[2];
                    t = ac.split("&")[3] || q;
                    console.log("用户：".concat(q, "开始任务"));
                    console.log("获取sessionId");
                    b6.next = 30;
                    return L("/api/account/init");
                  case 30:
                    ae = b6.sent;
                    o = ae.data.session.id;
                    console.log(o);
                    console.log("获取signature_key");
                    b6.next = 36;
                    return F("/web/init?client_id=".concat(B));
                  case 36:
                    af = b6.sent;
                    m = af.data.client.signature_key;
                    console.log(m);
                    console.log("获取code");
                    b6.next = 42;
                    return H("/web/oauth/credential_auth");
                  case 42:
                    if (ag = b6.sent, ag.data) {
                      {
                        b6.next = 46;
                        break;
                      }
                    }
                    console.log(ag.message);
                    return b6.abrupt("continue", 234);
                  case 46:
                    ah = ag.data.authorization_code.code;
                    console.log(ah);
                    console.log("登录");
                    b6.next = 51;
                    return L("/api/zbtxz/login", "check_token=&code=".concat(ah, "&token=&type=-1&union_id="));
                  case 51:
                    if (ai = b6.sent, console.log("登录成功"), p = ai.data.session.account_id, o = ai.data.session.id, console.log("————————————"), y) {
                      {
                        b6.next = 64;
                        break;
                      }
                    }
                    console.log("获取id");
                    b6.next = 60;
                    return J("/api/buoy/list");
                  case 60:
                    aj = b6.sent;
                    ak = /hdtool%2Findex%3Fid%3D(\d+)/;
                    al = JSON.stringify(aj).match(ak);
                    al && (y = al[1]);
                  case 64:
                    if (!y) {
                      {
                        b6.next = 144;
                        break;
                      }
                    }
                    console.log("阅读登录");
                    b6.next = 68;
                    return N("/customActivity/zjtm/autoLogin?_=".concat(Date.now(), "&sessionId=").concat(o, "&accountId=").concat(p, "&redirectUrl=https://92261.activity-14.m.duiba.com.cn/hdtool/index?id=").concat(y, "&dbnewopen"));
                  case 68:
                    am = b6.sent;
                    an = am.data;
                    x = "";
                    b6.next = 73;
                    return R(an);
                  case 73:
                    x = b6.sent;
                    console.log("获取抽奖key");
                    b6.next = 77;
                    return P("https://92261.activity-14.m.duiba.com.cn/hdtool/index?id=".concat(y, "&dbnewopen&from=login&spm=92261.1.1.1"));
                  case 77:
                    ao = b6.sent;
                    b6.next = 80;
                    return T("/hdtool/ajaxElement?_=".concat(Date.now()), "hdType=dev&hdToolId=&preview=false&actId=".concat(y, "&adslotId="));
                  case 80:
                    ap = b6.sent;
                    console.log("拥有".concat(ap.element.freeLimit, "次抽奖"));
                    aq = 0;
                  case 83:
                    if (!(aq < ap.element.freeLimit)) {
                      {
                        b6.next = 142;
                        break;
                      }
                    }
                    b6.next = 86;
                    return T("/hdtool/ctoken/getTokenNew", "timestamp=".concat(Date.now(), "&activityId=").concat(y, "&activityType=hdtool&consumerId=").concat(z));
                  case 86:
                    ar = b6.sent;
                    eval(ar.token);
                    as = window[ao];
                    b6.next = 91;
                    return T("/hdtool/dy/doJoin?dpm=92261.3.1.0&activityId=".concat(y, "&_=").concat(Date.now()), "actId=".concat(y, "&oaId=").concat(y, "&activityType=hdtool&consumerId=").concat(z, "&token=").concat(as));
                  case 91:
                    if (at = b6.sent, !at.success) {
                      {
                        b6.next = 138;
                        break;
                      }
                    }
                    if (at.orderId) {
                      {
                        b6.next = 96;
                        break;
                      }
                    }
                    console.log(at.message);
                    return b6.abrupt("break", 142);
                  case 96:
                    au = at.orderId;
                    av = 0;
                  case 98:
                    if (0 != av) {
                      {
                        b6.next = 136;
                        break;
                      }
                    }
                    b6.next = 101;
                    return T("/hdtool/getOrderStatus?_=".concat(Date.now()), "orderId=".concat(au, "&adslotId="));
                  case 101:
                    if (aw = b6.sent, av = aw.result, 0 != av) {
                      {
                        b6.next = 107;
                        break;
                      }
                    }
                    console.log(aw.message);
                    b6.next = 134;
                    break;
                  case 107:
                    if ("thanks" == aw.lottery.type && console.log("谢谢参与"), "alipay" != aw.lottery.type) {
                      {
                        b6.next = 134;
                        break;
                      }
                    }
                    for (console.log("抽奖获得支付宝红包：".concat(aw.lottery.title)), ax = aw.lottery.link, ay = ax.split("?")[1], az = {}, aA = ay.split("&"), aB = 0, aC = aA.length; aB < aC; aB++) {
                      aD = aA[aB].split("=");
                      az[aD[0]] = aD[1];
                    }
                    if (aE = az.recordId, !s || !t) {
                      {
                        b6.next = 133;
                        break;
                      }
                    }
                    console.log("获取兑换key");
                    b6.next = 120;
                    return P("https://92261.activity-14.m.duiba.com.cn/activity/takePrizeNew?recordId=".concat(aE, "&dbnewopen"));
                  case 120:
                    ao = b6.sent;
                    b6.next = 123;
                    return T("/ctoken/getToken.do");
                  case 123:
                    aF = b6.sent;
                    eval(aF.token);
                    aG = window[ao];
                    b6.next = 128;
                    return T("/activity/doTakePrize", "alipay=".concat(t, "&realname=").concat(encodeURI(s), "&recordId=").concat(aE, "&token=").concat(aG));
                  case 128:
                    aH = b6.sent;
                    console.log(aH.message);
                    n += "用户：".concat(q, " 抽奖获得：").concat(aw.lottery.title, " 领取结果：").concat(aH.message, "\n");
                    b6.next = 134;
                    break;
                  case 133:
                    console.log("请设置支付宝姓名和账号");
                  case 134:
                    b6.next = 98;
                    break;
                  case 136:
                    b6.next = 139;
                    break;
                  case 138:
                    console.log(at.message);
                  case 139:
                    aq++;
                    b6.next = 83;
                    break;
                  case 142:
                    b6.next = 145;
                    break;
                  case 144:
                    console.log("获取id失败");
                  case 145:
                    console.log("————————————");
                    console.log("开始签到");
                    b6.next = 149;
                    return J("/api/user_mumber/sign");
                  case 149:
                    aI = b6.sent;
                    console.log("签到获得：".concat(aI.data.signIntegral, "积分"));
                    console.log("————————————");
                    console.log("开始任务");
                    aJ = true;
                    aK = true;
                    aL = true;
                    b6.next = 158;
                    return J("/api/user_center/task?type=1&current=1&size=20");
                  case 158:
                    aM = b6.sent;
                    aN = c(aM.data.list);
                    b6.prev = 160;
                    aN.s();
                  case 162:
                    if ((aO = aN.n()).done) {
                      {
                        b6.next = 184;
                        break;
                      }
                    }
                    if (aP = aO.value, console.log("任务：".concat(aP.name)), 1 != aP.completed) {
                      {
                        b6.next = 168;
                        break;
                      }
                    }
                    console.log("任务已完成");
                    return b6.abrupt("continue", 182);
                  case 168:
                    if (console.log("任务进度：".concat(aP.finish_times, "/").concat(aP.frequency)), "使用本地服务" != aP.name) {
                      {
                        b6.next = 179;
                        break;
                      }
                    }
                    aQ = aP.finish_times;
                  case 171:
                    if (!(aQ < aP.frequency)) {
                      {
                        b6.next = 179;
                        break;
                      }
                    }
                    b6.next = 174;
                    return L("/api/user_mumber/doTask", "memberType=6&member_type=6");
                  case 174:
                    aR = b6.sent;
                    console.log("任务完成获得：".concat(aR.data.score_notify.integral, "积分"));
                  case 176:
                    aQ++;
                    b6.next = 171;
                    break;
                  case 179:
                    "新闻资讯阅读" == aP.name && (aJ = false);
                    "新闻资讯点赞" == aP.name && (aK = false);
                    "分享资讯给好友" == aP.name && (aL = false);
                  case 182:
                    b6.next = 162;
                    break;
                  case 184:
                    b6.next = 189;
                    break;
                  case 186:
                    b6.prev = 186;
                    b6.t0 = b6.catch(160);
                    aN.e(b6.t0);
                  case 189:
                    b6.prev = 189;
                    aN.f();
                    return b6.finish(189);
                  case 192:
                    if (aJ && aK && aL) {
                      {
                        b6.next = 227;
                        break;
                      }
                    }
                    b6.next = 195;
                    return J("/api/article/channel_list?channel_id=65e80c4779f6be5b358ba671&isDiFangHao=false&is_new=true&list_count=0&size=30");
                  case 195:
                    aS = b6.sent;
                    aT = c(aS.data.article_list);
                    b6.prev = 197;
                    aT.s();
                  case 199:
                    if ((aU = aT.n()).done) {
                      {
                        b6.next = 219;
                        break;
                      }
                    }
                    if (aV = aU.value, aW = aV.id, aJ) {
                      {
                        b6.next = 207;
                        break;
                      }
                    }
                    b6.next = 205;
                    return J("/api/article/read_time?channel_article_id=".concat(aW, "&is_end=true&read_time=3051"));
                  case 205:
                    aX = b6.sent;
                    aX.data ? console.log("阅读获得：".concat(null === (aY = aX.data) || undefined === aY || null === (aY = aY.score_notify) || undefined === aY ? undefined : aY.integral, "积分")) : console.log("文章已经阅读过了");
                  case 207:
                    if (aK) {
                      {
                        b6.next = 212;
                        break;
                      }
                    }
                    b6.next = 210;
                    return L("/api/favorite/like", "action=true&id=".concat(aW));
                  case 210:
                    aZ = b6.sent;
                    aZ.data ? console.log("点赞获得：".concat(null === (b0 = aZ.data) || undefined === b0 || null === (b0 = b0.score_notify) || undefined === b0 ? undefined : b0.integral, "积分")) : console.log("文章已经点赞过了");
                  case 212:
                    if (aL) {
                      {
                        b6.next = 217;
                        break;
                      }
                    }
                    b6.next = 215;
                    return L("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id==".concat(aW));
                  case 215:
                    b1 = b6.sent;
                    b1.data.score_notify ? console.log("分享获得：".concat(null === (b2 = b1.data) || undefined === b2 || null === (b2 = b2.score_notify) || undefined === b2 ? undefined : b2.integral, "积分")) : console.log("文章已经分享过了");
                  case 217:
                    b6.next = 199;
                    break;
                  case 219:
                    b6.next = 224;
                    break;
                  case 221:
                    b6.prev = 221;
                    b6.t1 = b6.catch(197);
                    aT.e(b6.t1);
                  case 224:
                    b6.prev = 224;
                    aT.f();
                    return b6.finish(224);
                  case 227:
                    console.log("————————————");
                    console.log("查询积分");
                    b6.next = 231;
                    return J("/api/user_mumber/account_detail");
                  case 231:
                    b3 = b6.sent;
                    console.log("拥有积分：".concat(b3.data.rst.total_integral, "\n"));
                    n += "用户：".concat(q, " 积分：").concat(b3.data.rst.total_integral, "\n");
                  case 234:
                    b6.next = 13;
                    break;
                  case 236:
                    b6.next = 241;
                    break;
                  case 238:
                    b6.prev = 238;
                    b6.t2 = b6.catch(11);
                    aa.e(b6.t2);
                  case 241:
                    b6.prev = 241;
                    aa.f();
                    return b6.finish(241);
                  case 244:
                    if (!n) {
                      {
                        b6.next = 247;
                        break;
                      }
                    }
                    b6.next = 247;
                    return a3(n);
                  case 247:
                  case "end":
                    return b6.stop();
                }
              }
            }
          }, a7, null, [[11, 238, 241, 244], [160, 186, 189, 192], [197, 221, 224, 227]]);
        }
      }));
      return E.apply(this, arguments);
    }
  }
  function F(a5) {
    {
      return G.apply(this, arguments);
    }
  }
  function G() {
    G = i(g().mark(function a5(a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (a9) {
                var ab = {
                  url: "https://passport.tmuyun.com".concat(a6),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": X(),
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  }
                };
                $.get(ab, function () {
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
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a5);
    }));
    return G.apply(this, arguments);
  }
  function H(a5) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a6(a7) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = V();
              return a9.abrupt("return", new Promise(function (ab) {
                var ad = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": a8.uuid,
                  "X-SIGNATURE": a8.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": u
                };
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a7),
                  headers: ad,
                  body: a8.body
                };
                $.post(ae, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(ak));
                            } catch (am) {
                              $.logErr(am, aj);
                            } finally {
                              ab();
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
            case 2:
            case "end":
              return a9.stop();
          }
        }
      }, a6);
    }));
    return I.apply(this, arguments);
  }
  function J(a5) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a5(a6) {
      var a8;
      return g().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              a8 = W(a6);
              return a9.abrupt("return", new Promise(function (aa) {
                var ac = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": a8.time,
                  "X-SESSION-ID": o,
                  "X-REQUEST-ID": a8.uuid,
                  "X-SIGNATURE": a8.signature,
                  "X-TENANT-ID": A,
                  "X-ACCOUNT-ID": p,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": v
                };
                var ad = {
                  url: "https://vapp.tmuyun.com".concat(a6),
                  headers: ac
                };
                $.get(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            if (ak.prev = 0, !ah) {
                              ak.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ak.next = 9;
                            break;
                          case 6:
                            ak.next = 8;
                            return $.wait(2000);
                          case 8:
                            aa(JSON.parse(aj));
                          case 9:
                            ak.next = 14;
                            break;
                          case 11:
                            ak.prev = 11;
                            ak.t0 = ak.catch(0);
                            $.logErr(ak.t0, ai);
                          case 14:
                            ak.prev = 14;
                            aa();
                            return ak.finish(14);
                          case 17:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, ag, null, [[0, 11, 14, 17]]);
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
    return K.apply(this, arguments);
  }
  function L(a5, a6) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a6(a7, a8) {
      var aa;
      return g().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = W(a7);
              return ab.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://vapp.tmuyun.com".concat(a7),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": aa.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": aa.uuid,
                    "X-SIGNATURE": aa.signature,
                    "X-TENANT-ID": A,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": v
                  },
                  body: a8
                };
                $.post(ae, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ah) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            ac(JSON.parse(aj));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, ai);
                          case 14:
                            al.prev = 14;
                            ac();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ag, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
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
    return M.apply(this, arguments);
  }
  function N(a5) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a5(a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (a9) {
                var ab = {
                  accept: "*/*",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                  "x-requested-with": "io.pailian.jiangbei",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "cors",
                  "sec-fetch-dest": "empty",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var ac = {
                  url: "https://92261.activity-42.m.duiba.com.cn".concat(a6),
                  headers: ab
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
                            a9(JSON.parse(ah));
                          case 9:
                            aj.next = 14;
                            break;
                          case 11:
                            aj.prev = 11;
                            aj.t0 = aj.catch(0);
                            $.logErr(aj.t0, ag);
                          case 14:
                            aj.prev = 14;
                            a9();
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
              return a8.stop();
          }
        }
      }, a5);
    }));
    return O.apply(this, arguments);
  }
  function P(a5) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function a5(a6) {
      return g().wrap(function a8(a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (ab) {
                var ad = {
                  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "upgrade-insecure-requests": "1",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                  "x-requested-with": "io.pailian.jiangbei",
                  "sec-fetch-site": "same-site",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-user": "?1",
                  "sec-fetch-dest": "document",
                  referer: "https://92261.activity-42.m.duiba.com.cn/",
                  "accept-encoding": "gzip, deflate",
                  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  cookie: x
                };
                var af = {
                  url: a6,
                  headers: ad
                };
                $.get(af, function () {
                  var ag = i(g().mark(function ah(ai, aj, ak) {
                    var am;
                    var an;
                    var ao;
                    var ap;
                    return g().wrap(function aq(ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !ai) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 18;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            am = /<script type\b[^>]*>\s*var([\s\S]*?)<\/script>/.exec(ak)[1];
                            eval(am);
                            an = /var\s+key\s+=\s+'([^']+)';/.exec(getDuibaToken.toString())[1];
                            console.log(an);
                            console.log("获取consumerId");
                            ao = /consumerId:'(\d+)'/;
                            ap = ak.match(ao);
                            z = ap ? ap[1] : "4134698352";
                            console.log(z);
                            ab(an);
                          case 18:
                            ar.next = 23;
                            break;
                          case 20:
                            ar.prev = 20;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, aj);
                          case 23:
                            ar.prev = 23;
                            ab();
                            return ar.finish(23);
                          case 26:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, ah, null, [[0, 20, 23, 26]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a5);
    }));
    return Q.apply(this, arguments);
  }
  function R(a5) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function a6(a7) {
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  url: "https:".concat(a7),
                  headers: {
                    accept: "*/*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                    "x-requested-with": "io.pailian.jiangbei",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  followRedirect: false
                };
                $.get(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    var ak;
                    var al;
                    return g().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !ah) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 10;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            if ($.isNode()) {
                              for (ak = ai.headers["set-cookie"] || ai.headers["Set-Cookie"], al = 0; al < ak.length; al++) {
                                x += ak[al].split(";")[0] + ";";
                              }
                            } else {
                              x = ai.headers["set-cookie"] || ai.headers["Set-Cookie"];
                              x = a0(x);
                            }
                            ac(x);
                          case 10:
                            am.next = 15;
                            break;
                          case 12:
                            am.prev = 12;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ai);
                          case 15:
                            am.prev = 15;
                            ac();
                            return am.finish(15);
                          case 18:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ag, null, [[0, 12, 15, 18]]);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a6);
    }));
    return S.apply(this, arguments);
  }
  function T(a5, a6) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function a6(a7, a8) {
      return g().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              return aa.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://92261.activity-14.m.duiba.com.cn".concat(a7),
                  headers: {
                    accept: "application/json",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_xinjiangbei;xsb_xinjiangbei;1.7.0;native_app;6.9.0",
                    "x-requested-with": "XMLHttpRequest",
                    "content-type": "application/x-www-form-urlencoded",
                    origin: "https://92261.activity-14.m.duiba.com.cn",
                    cookie: x,
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://92261.activity-14.m.duiba.com.cn/hdtool/index?id=".concat(y, "&dbnewopen&from=login&spm=92261.1.1.1"),
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: a8
                };
                $.post(ad, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            if (ak.prev = 0, !ah) {
                              ak.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ah)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ak.next = 9;
                            break;
                          case 6:
                            ak.next = 8;
                            return $.wait(2000);
                          case 8:
                            ab(JSON.parse(aj));
                          case 9:
                            ak.next = 14;
                            break;
                          case 11:
                            ak.prev = 11;
                            ak.t0 = ak.catch(0);
                            $.logErr(ak.t0, ai);
                          case 14:
                            ak.prev = 14;
                            ab();
                            return ak.finish(14);
                          case 17:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, ag, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ah, ai, aj) {
                    return af.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return aa.stop();
          }
        }
      }, a6);
    }));
    return U.apply(this, arguments);
  }
  function V() {
    var ad = new (l.loadJSEncrypt())();
    ad.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = ad.encrypt(r);
    var a8 = X();
    var a9 = "client_id=".concat(B, "&password=").concat(r, "&phone_number=").concat(q);
    var aa = "post%%/web/oauth/credential_auth?".concat(a9, "%%").concat(a8, "%%");
    a9 = "client_id=".concat(B, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var ab = CryptoJS.HmacSHA256(aa, m);
    var ac = CryptoJS.enc.Hex.stringify(ab);
    var a7 = {
      uuid: a8,
      signature: ac,
      body: a9
    };
    return a7;
  }
  function W(a5) {
    var a6 = X();
    var a7 = Date.now();
    a5.indexOf("?") > 0 && (a5 = a5.substring(0, a5.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var a8 = CryptoJS.SHA256("".concat(a5, "&&").concat(o, "&&").concat(a6, "&&").concat(a7, "&&").concat(C, "&&").concat(A)).toString();
    var a9 = {
      uuid: a6,
      time: a7,
      signature: a8
    };
    return a9;
  }
  function X() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a5) {
      var a6 = 16 * Math.random() | 0;
      var a7 = "x" === a5 ? a6 : 3 & a6 | 8;
      return a7.toString(16);
    });
  }
  function Y(a5) {
    return a5[Math.floor(Math.random() * a5.length)];
  }
  function Z() {
    var a5 = "1.7.0";
    var a6 = X();
    var a7 = Y(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var a8 = "Xiaomi " + a7;
    var a9 = "Android";
    var aa = "".concat(a9.toUpperCase(), ";").concat("11", ";").concat(B, ";").concat(a5, ";1.0;null;").concat(a7);
    var ab = "".concat(a5, ";").concat(a6, ";").concat(a8, ";").concat(a9, ";").concat("11", ";").concat("6.9.0");
    var ac = {
      ua: aa,
      commonUa: ab,
      uuid: a6
    };
    return ac;
  }
  function a0(a5) {
    var a6 = a5.split(", ");
    var a7 = a6.map(function (a8) {
      var a9 = a8.split(";")[0];
      return a9.trim();
    });
    return a7.join(";");
  }
  function a1() {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = i(g().mark(function a6() {
      var a8;
      return g().wrap(function a9(aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              if (a8 = $.getdata("Utils_Code") || "", !a8 || !Object.keys(a8).length) {
                aa.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a8);
              return aa.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return aa.abrupt("return", new Promise(function () {
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
              return aa.stop();
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
    a4 = i(g().mark(function a6(a7) {
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
    return a4.apply(this, arguments);
  }
  i(g().mark(function a5() {
    return g().wrap(function (a6) {
      for (;;) {
        switch (a6.prev = a6.next) {
          case 0:
            a6.next = 2;
            return D();
          case 2:
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