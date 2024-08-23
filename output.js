//Fri Aug 23 2024 04:06:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("望潮");
const notify = $.isNode() ? require("./sendNotify") : "";
(() => {
  function b(a4) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a6) {
      return typeof a6;
    } : function (a6) {
      return a6 && "function" == typeof Symbol && a6.constructor === Symbol && a6 !== Symbol.prototype ? "symbol" : typeof a6;
    };
    return b(a4);
  }
  function c(a4, a5) {
    var a7 = "undefined" != typeof Symbol && a4[Symbol.iterator] || a4["@@iterator"];
    if (!a7) {
      if (Array.isArray(a4) || (a7 = d(a4)) || a5 && a4 && "number" == typeof a4.length) {
        a7 && (a4 = a7);
        var a8 = 0,
          a9 = function () {};
        return {
          s: a9,
          n: function () {
            var af = {
              done: !0
            };
            return a8 >= a4.length ? af : {
              done: !1,
              value: a4[a8++]
            };
          },
          e: function (af) {
            throw af;
          },
          f: a9
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var aa,
      ab = !0,
      ac = !1;
    return {
      s: function () {
        a7 = a7.call(a4);
      },
      n: function () {
        var ah = a7.next();
        ab = ah.done;
        return ah;
      },
      e: function (ag) {
        ac = !0;
        aa = ag;
      },
      f: function () {
        try {
          ab || null == a7.return || a7.return();
        } finally {
          if (ac) {
            throw aa;
          }
        }
      }
    };
  }
  function d(a4, a5) {
    if (a4) {
      if ("string" == typeof a4) {
        return f(a4, a5);
      }
      var a7 = {}.toString.call(a4).slice(8, -1);
      "Object" === a7 && a4.constructor && (a7 = a4.constructor.name);
      return "Map" === a7 || "Set" === a7 ? Array.from(a4) : "Arguments" === a7 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a7) ? f(a4, a5) : void 0;
    }
  }
  function f(a4, a5) {
    (null == a5 || a5 > a4.length) && (a5 = a4.length);
    for (var a6 = 0, a7 = Array(a5); a6 < a5; a6++) {
      a7[a6] = a4[a6];
    }
    return a7;
  }
  function g() {
    'use strict';

    g = function () {
      return a6;
    };
    var a5,
      a6 = {},
      a7 = Object.prototype,
      a8 = a7.hasOwnProperty,
      a9 = Object.defineProperty || function (aB, aC, aD) {
        aB[aC] = aD.value;
      },
      aa = "function" == typeof Symbol ? Symbol : {},
      ab = aa.iterator || "@@iterator",
      ac = aa.asyncIterator || "@@asyncIterator",
      ad = aa.toStringTag || "@@toStringTag";
    function ae(aB, aC, aD) {
      var aE = {
        value: aD,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aB, aC, aE);
      return aB[aC];
    }
    try {
      ae({}, "");
    } catch (aC) {
      ae = function (aE, aF, aG) {
        return aE[aF] = aG;
      };
    }
    function af(aE, aF, aG, aH) {
      var aI = aF && aF.prototype instanceof am ? aF : am,
        aJ = Object.create(aI.prototype),
        aK = new az(aH || []);
      a9(aJ, "_invoke", {
        value: av(aE, aG, aK)
      });
      return aJ;
    }
    function ag(aE, aF, aG) {
      try {
        return {
          type: "normal",
          arg: aE.call(aF, aG)
        };
      } catch (aK) {
        var aI = {
          type: "throw",
          arg: aK
        };
        return aI;
      }
    }
    a6.wrap = af;
    var ah = "suspendedStart",
      ai = "suspendedYield",
      aj = "executing",
      ak = "completed",
      al = {};
    function am() {}
    function an() {}
    function ao() {}
    var ap = {};
    ae(ap, ab, function () {
      return this;
    });
    var aq = Object.getPrototypeOf,
      ar = aq && aq(aq(aA([])));
    ar && ar !== a7 && a8.call(ar, ab) && (ap = ar);
    ao.prototype = am.prototype = Object.create(ap);
    var as = ao.prototype;
    function at(aE) {
      ["next", "throw", "return"].forEach(function (aG) {
        ae(aE, aG, function (aJ) {
          return this._invoke(aG, aJ);
        });
      });
    }
    function au(aE, aF) {
      function aJ(aK, aL, aM, aN) {
        var aP = ag(aE[aK], aE, aL);
        if ("throw" !== aP.type) {
          var aQ = aP.arg,
            aR = aQ.value;
          return aR && "object" == b(aR) && a8.call(aR, "__await") ? aF.resolve(aR.__await).then(function (aS) {
            aJ("next", aS, aM, aN);
          }, function (aS) {
            aJ("throw", aS, aM, aN);
          }) : aF.resolve(aR).then(function (aS) {
            aQ.value = aS;
            aM(aQ);
          }, function (aS) {
            return aJ("throw", aS, aM, aN);
          });
        }
        aN(aP.arg);
      }
      var aH;
      a9(this, "_invoke", {
        value: function (aK, aL) {
          function aO() {
            return new aF(function (aP, aQ) {
              aJ(aK, aL, aP, aQ);
            });
          }
          return aH = aH ? aH.then(aO, aO) : aO();
        }
      });
    }
    function av(aE, aF, aG) {
      var aI = ah;
      return function (aJ, aK) {
        if (aI === aj) {
          throw Error("Generator is already running");
        }
        if (aI === ak) {
          if ("throw" === aJ) {
            throw aK;
          }
          var aM = {
            value: a5,
            done: !0
          };
          return aM;
        }
        for (aG.method = aJ, aG.arg = aK;;) {
          var aN = aG.delegate;
          if (aN) {
            var aO = aw(aN, aG);
            if (aO) {
              if (aO === al) {
                continue;
              }
              return aO;
            }
          }
          if ("next" === aG.method) {
            aG.sent = aG._sent = aG.arg;
          } else {
            if ("throw" === aG.method) {
              if (aI === ah) {
                throw aI = ak, aG.arg;
              }
              aG.dispatchException(aG.arg);
            } else {
              "return" === aG.method && aG.abrupt("return", aG.arg);
            }
          }
          aI = aj;
          var aP = ag(aE, aF, aG);
          if ("normal" === aP.type) {
            if (aI = aG.done ? ak : ai, aP.arg === al) {
              continue;
            }
            var aQ = {};
            aQ.value = aP.arg;
            aQ.done = aG.done;
            return aQ;
          }
          "throw" === aP.type && (aI = ak, aG.method = "throw", aG.arg = aP.arg);
        }
      };
    }
    function aw(aE, aF) {
      var aK = aF.method,
        aL = aE.iterator[aK];
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
    function ax(aE) {
      var aG = {
        tryLoc: aE[0]
      };
      var aH = aG;
      1 in aE && (aH.catchLoc = aE[1]);
      2 in aE && (aH.finallyLoc = aE[2], aH.afterLoc = aE[3]);
      this.tryEntries.push(aH);
    }
    function ay(aE) {
      var aF = aE.completion || {};
      aF.type = "normal";
      delete aF.arg;
      aE.completion = aF;
    }
    function az(aE) {
      var aG = {
        tryLoc: "root"
      };
      this.tryEntries = [aG];
      aE.forEach(ax, this);
      this.reset(!0);
    }
    function aA(aE) {
      if (aE || "" === aE) {
        var aG = aE[ab];
        if (aG) {
          return aG.call(aE);
        }
        if ("function" == typeof aE.next) {
          return aE;
        }
        if (!isNaN(aE.length)) {
          var aH = -1,
            aI = function aL() {
              for (; ++aH < aE.length;) {
                if (a8.call(aE, aH)) {
                  aL.value = aE[aH];
                  aL.done = !1;
                  return aL;
                }
              }
              aL.value = a5;
              aL.done = !0;
              return aL;
            };
          return aI.next = aI;
        }
      }
      throw new TypeError(b(aE) + " is not iterable");
    }
    an.prototype = ao;
    a9(as, "constructor", {
      value: ao,
      configurable: !0
    });
    a9(ao, "constructor", {
      value: an,
      configurable: !0
    });
    an.displayName = ae(ao, ad, "GeneratorFunction");
    a6.isGeneratorFunction = function (aE) {
      var aF = "function" == typeof aE && aE.constructor;
      return !!aF && (aF === an || "GeneratorFunction" === (aF.displayName || aF.name));
    };
    a6.mark = function (aE) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aE, ao) : (aE.__proto__ = ao, ae(aE, ad, "GeneratorFunction"));
      aE.prototype = Object.create(as);
      return aE;
    };
    a6.awrap = function (aE) {
      var aF = {
        __await: aE
      };
      return aF;
    };
    at(au.prototype);
    ae(au.prototype, ac, function () {
      return this;
    });
    a6.AsyncIterator = au;
    a6.async = function (aE, aF, aG, aH, aI) {
      void 0 === aI && (aI = Promise);
      var aJ = new au(af(aE, aF, aG, aH), aI);
      return a6.isGeneratorFunction(aF) ? aJ : aJ.next().then(function (aL) {
        return aL.done ? aL.value : aJ.next();
      });
    };
    at(as);
    ae(as, ad, "Generator");
    ae(as, ab, function () {
      return this;
    });
    ae(as, "toString", function () {
      return "[object Generator]";
    });
    a6.keys = function (aE) {
      var aF = Object(aE),
        aG = [];
      for (var aH in aF) aG.push(aH);
      aG.reverse();
      return function aJ() {
        for (; aG.length;) {
          var aK = aG.pop();
          if (aK in aF) {
            aJ.value = aK;
            aJ.done = !1;
            return aJ;
          }
        }
        aJ.done = !0;
        return aJ;
      };
    };
    a6.values = aA;
    az.prototype = {
      constructor: az,
      reset: function (aE) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a5, this.done = !1, this.delegate = null, this.method = "next", this.arg = a5, this.tryEntries.forEach(ay), !aE) {
          for (var aG in this) "t" === aG.charAt(0) && a8.call(this, aG) && !isNaN(+aG.slice(1)) && (this[aG] = a5);
        }
      },
      stop: function () {
        this.done = !0;
        var aE = this.tryEntries[0].completion;
        if ("throw" === aE.type) {
          throw aE.arg;
        }
        return this.rval;
      },
      dispatchException: function (aE) {
        if (this.done) {
          throw aE;
        }
        var aG = this;
        function aM(aN, aO) {
          aJ.type = "throw";
          aJ.arg = aE;
          aG.next = aN;
          aO && (aG.method = "next", aG.arg = a5);
          return !!aO;
        }
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH],
            aJ = aI.completion;
          if ("root" === aI.tryLoc) {
            return aM("end");
          }
          if (aI.tryLoc <= this.prev) {
            var aK = a8.call(aI, "catchLoc"),
              aL = a8.call(aI, "finallyLoc");
            if (aK && aL) {
              if (this.prev < aI.catchLoc) {
                return aM(aI.catchLoc, !0);
              }
              if (this.prev < aI.finallyLoc) {
                return aM(aI.finallyLoc);
              }
            } else {
              if (aK) {
                if (this.prev < aI.catchLoc) {
                  return aM(aI.catchLoc, !0);
                }
              } else {
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
      },
      abrupt: function (aE, aF) {
        for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
          var aH = this.tryEntries[aG];
          if (aH.tryLoc <= this.prev && a8.call(aH, "finallyLoc") && this.prev < aH.finallyLoc) {
            var aI = aH;
            break;
          }
        }
        aI && ("break" === aE || "continue" === aE) && aI.tryLoc <= aF && aF <= aI.finallyLoc && (aI = null);
        var aJ = aI ? aI.completion : {};
        aJ.type = aE;
        aJ.arg = aF;
        return aI ? (this.method = "next", this.next = aI.finallyLoc, al) : this.complete(aJ);
      },
      complete: function (aE, aF) {
        if ("throw" === aE.type) {
          throw aE.arg;
        }
        "break" === aE.type || "continue" === aE.type ? this.next = aE.arg : "return" === aE.type ? (this.rval = this.arg = aE.arg, this.method = "return", this.next = "end") : "normal" === aE.type && aF && (this.next = aF);
        return al;
      },
      finish: function (aE) {
        for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
          var aH = this.tryEntries[aG];
          if (aH.finallyLoc === aE) {
            this.complete(aH.completion, aH.afterLoc);
            ay(aH);
            return al;
          }
        }
      },
      catch: function (aE) {
        for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
          var aH = this.tryEntries[aG];
          if (aH.tryLoc === aE) {
            var aI = aH.completion;
            if ("throw" === aI.type) {
              var aJ = aI.arg;
              ay(aH);
            }
            return aJ;
          }
        }
        throw Error("illegal catch attempt");
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
    try {
      var ac = a4[a9](aa),
        ad = ac.value;
    } catch (ag) {
      return void a6(ag);
    }
    ac.done ? a5(ad) : Promise.resolve(ad).then(a7, a8);
  }
  function i(a4) {
    return function () {
      var a7 = this,
        a8 = arguments;
      return new Promise(function (a9, aa) {
        var ac = a4.apply(a7, a8);
        function ad(af) {
          h(ac, a9, aa, ad, ae, "next", af);
        }
        function ae(af) {
          h(ac, a9, aa, ad, ae, "throw", af);
        }
        ad(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.WangChao : $.getdata("WangChao")) || "",
    k = void 0,
    l = "",
    m = "64",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "10019",
    w = "",
    x = "",
    y = "FR*r!isE5W";
  function z() {
    return A.apply(this, arguments);
  }
  function A() {
    A = i(g().mark(function a5() {
      var a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as;
      return g().wrap(function (au) {
        for (;;) {
          switch (au.prev = au.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                au.next = 6;
                break;
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
                au.next = 120;
                break;
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
                au.next = 44;
                break;
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
                au.next = 66;
                break;
              }
              return au.abrupt("continue", 118);
            case 66:
              console.log(q);
              au.next = 69;
              return L("/prod-api/user-read/list/".concat(X()));
            case 69:
              if (ai = au.sent, ai.data.completedCount != ai.data.sum) {
                au.next = 74;
                break;
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
                au.next = 90;
                break;
              }
              if (al = ak.value, console.log("文章：".concat(al.title)), !al.isRead) {
                au.next = 83;
                break;
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
                var aF, aG;
                return g().wrap(function (aH) {
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
                }, aD);
              });
              as = 0;
            case 113:
              if (!(as < ao.data)) {
                au.next = 118;
                break;
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
                au.next = 131;
                break;
              }
              au.next = 131;
              return a2(x);
            case 131:
            case "end":
              return au.stop();
          }
        }
      }, a5, null, [[11, 122, 125, 128], [75, 92, 95, 98]]);
    }));
    return A.apply(this, arguments);
  }
  function B(a4) {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function a5(a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (ab) {
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
                  var ae = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(aj));
                            } catch (ao) {
                              $.logErr(ao, ai);
                            } finally {
                              ab();
                            }
                          case 1:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ag);
                  }));
                  return function (ah, ai, aj) {
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
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(aj));
                            } catch (an) {
                              $.logErr(an, ai);
                            } finally {
                              ab();
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
    var a6 = W(),
      a7 = "client_id=".concat(v, "&password=").concat(u, "&phone_number=").concat(t),
      a8 = "post%%/web/oauth/credential_auth?".concat(a7, "%%").concat(a6, "%%");
    a7 = "client_id=".concat(v, "&password=").concat(encodeURIComponent(u), "&phone_number=").concat(t);
    CryptoJS = k.createCryptoJS();
    var a9 = CryptoJS.HmacSHA256(a8, l),
      aa = CryptoJS.enc.Hex.stringify(a9);
    var ab = {};
    ab.uuid = a6;
    ab.signature = aa;
    ab.body = a7;
    return ab;
  }
  function V(a4) {
    var a5 = W(),
      a6 = Date.now();
    a4.indexOf("?") > 0 && (a4 = a4.substring(0, a4.indexOf("?")));
    CryptoJS = k.createCryptoJS();
    var a7 = CryptoJS.SHA256("".concat(a4, "&&").concat(w, "&&").concat(a5, "&&").concat(a6, "&&").concat(y, "&&").concat(m)).toString(),
      a8 = {
        uuid: a5,
        time: a6,
        signature: a7
      };
    return a8;
  }
  function W() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a4) {
      var a5 = 16 * Math.random() | 0,
        a6 = "x" === a4 ? a5 : 3 & a5 | 8;
      return a6.toString(16);
    });
  }
  function X() {
    var a4 = new Date(),
      a5 = a4.getFullYear(),
      a6 = String(a4.getMonth() + 1).padStart(2, "0"),
      a7 = String(a4.getDate()).padStart(2, "0");
    return "".concat(a5).concat(a6).concat(a7);
  }
  function Y() {
    var a4 = "6.0.2",
      a5 = W(),
      a6 = Z(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      a7 = "Xiaomi " + a6,
      a8 = "Android",
      a9 = "".concat(a8.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(a4, ";1.0;null;").concat(a6),
      aa = "".concat(a4, ";").concat(a5, ";").concat(a7, ";").concat(a8, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0"),
      ab = {
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
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
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
        return !1;
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
        const [r, a] = i.split("@"),
          n = {
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
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
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
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
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
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
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
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
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
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
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
              } = t,
              n = s.decode(a, this.encoding);
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
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
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
              } = t,
              n = i.decode(a, this.encoding);
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
          case void 0:
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
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
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
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
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