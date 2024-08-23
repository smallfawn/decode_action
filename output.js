//Fri Aug 23 2024 02:31:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("望潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a3) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a6) {
      return typeof a6;
    } : function (a6) {
      return a6 && "function" == typeof Symbol && a6.constructor === Symbol && a6 !== Symbol.prototype ? "symbol" : typeof a6;
    };
    return b(a3);
  }
  function c(a3, a4) {
    var a6 = "undefined" != typeof Symbol && a3[Symbol.iterator] || a3["@@iterator"];
    if (!a6) {
      if (Array.isArray(a3) || (a6 = d(a3)) || a4 && a3 && "number" == typeof a3.length) {
        a6 && (a3 = a6);
        var a7 = 0,
          a8 = function () {};
        return {
          s: a8,
          n: function () {
            var ae = {
              done: !0
            };
            return a7 >= a3.length ? ae : {
              done: !1,
              value: a3[a7++]
            };
          },
          e: function (ae) {
            throw ae;
          },
          f: a8
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a9,
      aa = !0,
      ab = !1;
    return {
      s: function () {
        a6 = a6.call(a3);
      },
      n: function () {
        var af = a6.next();
        aa = af.done;
        return af;
      },
      e: function (af) {
        ab = !0;
        a9 = af;
      },
      f: function () {
        try {
          aa || null == a6.return || a6.return();
        } finally {
          if (ab) {
            throw a9;
          }
        }
      }
    };
  }
  function d(a3, a4) {
    if (a3) {
      if ("string" == typeof a3) {
        return f(a3, a4);
      }
      var a7 = {}.toString.call(a3).slice(8, -1);
      "Object" === a7 && a3.constructor && (a7 = a3.constructor.name);
      return "Map" === a7 || "Set" === a7 ? Array.from(a3) : "Arguments" === a7 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a7) ? f(a3, a4) : void 0;
    }
  }
  function f(a3, a4) {
    (null == a4 || a4 > a3.length) && (a4 = a3.length);
    for (var a6 = 0, a7 = Array(a4); a6 < a4; a6++) {
      a7[a6] = a3[a6];
    }
    return a7;
  }
  function g() {
    'use strict';

    g = function () {
      return a5;
    };
    var a4,
      a5 = {},
      a6 = Object.prototype,
      a7 = a6.hasOwnProperty,
      a8 = Object.defineProperty || function (aA, aB, aC) {
        aA[aB] = aC.value;
      },
      a9 = "function" == typeof Symbol ? Symbol : {},
      aa = a9.iterator || "@@iterator",
      ab = a9.asyncIterator || "@@asyncIterator",
      ac = a9.toStringTag || "@@toStringTag";
    function ad(aA, aB, aC) {
      var aD = {
        value: aC,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aA, aB, aD);
      return aA[aB];
    }
    try {
      ad({}, "");
    } catch (aB) {
      ad = function (aC, aD, aE) {
        return aC[aD] = aE;
      };
    }
    function ae(aD, aE, aF, aG) {
      var aH = aE && aE.prototype instanceof al ? aE : al,
        aI = Object.create(aH.prototype),
        aJ = new ay(aG || []);
      a8(aI, "_invoke", {
        value: au(aD, aF, aJ)
      });
      return aI;
    }
    function af(aD, aE, aF) {
      try {
        return {
          type: "normal",
          arg: aD.call(aE, aF)
        };
      } catch (aK) {
        var aH = {
          type: "throw",
          arg: aK
        };
        return aH;
      }
    }
    a5.wrap = ae;
    var ag = "suspendedStart",
      ah = "suspendedYield",
      ai = "executing",
      aj = "completed",
      ak = {};
    function al() {}
    function am() {}
    function an() {}
    var ao = {};
    ad(ao, aa, function () {
      return this;
    });
    var ap = Object.getPrototypeOf,
      aq = ap && ap(ap(az([])));
    aq && aq !== a6 && a7.call(aq, aa) && (ao = aq);
    an.prototype = al.prototype = Object.create(ao);
    var ar = an.prototype;
    function as(aD) {
      ["next", "throw", "return"].forEach(function (aG) {
        ad(aD, aG, function (aI) {
          return this._invoke(aG, aI);
        });
      });
    }
    function at(aD, aE) {
      function aI(aJ, aK, aL, aM) {
        var aO = af(aD[aJ], aD, aK);
        if ("throw" !== aO.type) {
          var aP = aO.arg,
            aQ = aP.value;
          return aQ && "object" == b(aQ) && a7.call(aQ, "__await") ? aE.resolve(aQ.__await).then(function (aS) {
            aI("next", aS, aL, aM);
          }, function (aS) {
            aI("throw", aS, aL, aM);
          }) : aE.resolve(aQ).then(function (aS) {
            aP.value = aS;
            aL(aP);
          }, function (aS) {
            return aI("throw", aS, aL, aM);
          });
        }
        aM(aO.arg);
      }
      var aG;
      a8(this, "_invoke", {
        value: function (aJ, aK) {
          function aM() {
            return new aE(function (aP, aQ) {
              aI(aJ, aK, aP, aQ);
            });
          }
          return aG = aG ? aG.then(aM, aM) : aM();
        }
      });
    }
    function au(aD, aE, aF) {
      var aG = ag;
      return function (aI, aJ) {
        if (aG === ai) {
          throw Error("Generator is already running");
        }
        if (aG === aj) {
          if ("throw" === aI) {
            throw aJ;
          }
          var aL = {
            value: a4,
            done: !0
          };
          return aL;
        }
        for (aF.method = aI, aF.arg = aJ;;) {
          var aM = aF.delegate;
          if (aM) {
            var aN = av(aM, aF);
            if (aN) {
              if (aN === ak) {
                continue;
              }
              return aN;
            }
          }
          if ("next" === aF.method) {
            aF.sent = aF._sent = aF.arg;
          } else {
            if ("throw" === aF.method) {
              if (aG === ag) {
                throw aG = aj, aF.arg;
              }
              aF.dispatchException(aF.arg);
            } else {
              "return" === aF.method && aF.abrupt("return", aF.arg);
            }
          }
          aG = ai;
          var aO = af(aD, aE, aF);
          if ("normal" === aO.type) {
            if (aG = aF.done ? aj : ah, aO.arg === ak) {
              continue;
            }
            var aP = {};
            aP.value = aO.arg;
            aP.done = aF.done;
            return aP;
          }
          "throw" === aO.type && (aG = aj, aF.method = "throw", aF.arg = aO.arg);
        }
      };
    }
    function av(aD, aE) {
      var aF = aE.method,
        aG = aD.iterator[aF];
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
    function aw(aD) {
      var aE = {
        tryLoc: aD[0]
      };
      var aF = aE;
      1 in aD && (aF.catchLoc = aD[1]);
      2 in aD && (aF.finallyLoc = aD[2], aF.afterLoc = aD[3]);
      this.tryEntries.push(aF);
    }
    function ax(aD) {
      var aE = aD.completion || {};
      aE.type = "normal";
      delete aE.arg;
      aD.completion = aE;
    }
    function ay(aD) {
      var aE = {
        tryLoc: "root"
      };
      this.tryEntries = [aE];
      aD.forEach(aw, this);
      this.reset(!0);
    }
    function az(aD) {
      if (aD || "" === aD) {
        var aF = aD[aa];
        if (aF) {
          return aF.call(aD);
        }
        if ("function" == typeof aD.next) {
          return aD;
        }
        if (!isNaN(aD.length)) {
          var aG = -1,
            aH = function aK() {
              for (; ++aG < aD.length;) {
                if (a7.call(aD, aG)) {
                  aK.value = aD[aG];
                  aK.done = !1;
                  return aK;
                }
              }
              aK.value = a4;
              aK.done = !0;
              return aK;
            };
          return aH.next = aH;
        }
      }
      throw new TypeError(b(aD) + " is not iterable");
    }
    am.prototype = an;
    a8(ar, "constructor", {
      value: an,
      configurable: !0
    });
    a8(an, "constructor", {
      value: am,
      configurable: !0
    });
    am.displayName = ad(an, ac, "GeneratorFunction");
    a5.isGeneratorFunction = function (aD) {
      var aF = "function" == typeof aD && aD.constructor;
      return !!aF && (aF === am || "GeneratorFunction" === (aF.displayName || aF.name));
    };
    a5.mark = function (aD) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aD, an) : (aD.__proto__ = an, ad(aD, ac, "GeneratorFunction"));
      aD.prototype = Object.create(ar);
      return aD;
    };
    a5.awrap = function (aD) {
      var aE = {
        __await: aD
      };
      return aE;
    };
    as(at.prototype);
    ad(at.prototype, ab, function () {
      return this;
    });
    a5.AsyncIterator = at;
    a5.async = function (aD, aE, aF, aG, aH) {
      void 0 === aH && (aH = Promise);
      var aI = new at(ae(aD, aE, aF, aG), aH);
      return a5.isGeneratorFunction(aE) ? aI : aI.next().then(function (aK) {
        return aK.done ? aK.value : aI.next();
      });
    };
    as(ar);
    ad(ar, ac, "Generator");
    ad(ar, aa, function () {
      return this;
    });
    ad(ar, "toString", function () {
      return "[object Generator]";
    });
    a5.keys = function (aD) {
      var aF = Object(aD),
        aG = [];
      for (var aH in aF) aG.push(aH);
      aG.reverse();
      return function aI() {
        for (; aG.length;) {
          var aK = aG.pop();
          if (aK in aF) {
            aI.value = aK;
            aI.done = !1;
            return aI;
          }
        }
        aI.done = !0;
        return aI;
      };
    };
    a5.values = az;
    ay.prototype = {
      constructor: ay,
      reset: function (aD) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a4, this.done = !1, this.delegate = null, this.method = "next", this.arg = a4, this.tryEntries.forEach(ax), !aD) {
          for (var aF in this) "t" === aF.charAt(0) && a7.call(this, aF) && !isNaN(+aF.slice(1)) && (this[aF] = a4);
        }
      },
      stop: function () {
        this.done = !0;
        var aF = this.tryEntries[0].completion;
        if ("throw" === aF.type) {
          throw aF.arg;
        }
        return this.rval;
      },
      dispatchException: function (aD) {
        if (this.done) {
          throw aD;
        }
        var aF = this;
        function aM(aN, aO) {
          aI.type = "throw";
          aI.arg = aD;
          aF.next = aN;
          aO && (aF.method = "next", aF.arg = a4);
          return !!aO;
        }
        for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
          var aH = this.tryEntries[aG],
            aI = aH.completion;
          if ("root" === aH.tryLoc) {
            return aM("end");
          }
          if (aH.tryLoc <= this.prev) {
            var aJ = a7.call(aH, "catchLoc"),
              aK = a7.call(aH, "finallyLoc");
            if (aJ && aK) {
              if (this.prev < aH.catchLoc) {
                return aM(aH.catchLoc, !0);
              }
              if (this.prev < aH.finallyLoc) {
                return aM(aH.finallyLoc);
              }
            } else {
              if (aJ) {
                if (this.prev < aH.catchLoc) {
                  return aM(aH.catchLoc, !0);
                }
              } else {
                if (!aK) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aH.finallyLoc) {
                  return aM(aH.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aD, aE) {
        for (var aG = this.tryEntries.length - 1; aG >= 0; --aG) {
          var aH = this.tryEntries[aG];
          if (aH.tryLoc <= this.prev && a7.call(aH, "finallyLoc") && this.prev < aH.finallyLoc) {
            var aI = aH;
            break;
          }
        }
        aI && ("break" === aD || "continue" === aD) && aI.tryLoc <= aE && aE <= aI.finallyLoc && (aI = null);
        var aJ = aI ? aI.completion : {};
        aJ.type = aD;
        aJ.arg = aE;
        return aI ? (this.method = "next", this.next = aI.finallyLoc, ak) : this.complete(aJ);
      },
      complete: function (aD, aE) {
        if ("throw" === aD.type) {
          throw aD.arg;
        }
        "break" === aD.type || "continue" === aD.type ? this.next = aD.arg : "return" === aD.type ? (this.rval = this.arg = aD.arg, this.method = "return", this.next = "end") : "normal" === aD.type && aE && (this.next = aE);
        return ak;
      },
      finish: function (aD) {
        for (var aF = this.tryEntries.length - 1; aF >= 0; --aF) {
          var aG = this.tryEntries[aF];
          if (aG.finallyLoc === aD) {
            this.complete(aG.completion, aG.afterLoc);
            ax(aG);
            return ak;
          }
        }
      },
      catch: function (aD) {
        for (var aE = this.tryEntries.length - 1; aE >= 0; --aE) {
          var aF = this.tryEntries[aE];
          if (aF.tryLoc === aD) {
            var aG = aF.completion;
            if ("throw" === aG.type) {
              var aH = aG.arg;
              ax(aF);
            }
            return aH;
          }
        }
        throw Error("illegal catch attempt");
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
    try {
      var ac = a3[a8](a9),
        ad = ac.value;
    } catch (af) {
      return void a5(af);
    }
    ac.done ? a4(ad) : Promise.resolve(ad).then(a6, a7);
  }
  function i(a3) {
    return function () {
      var a5 = this,
        a6 = arguments;
      return new Promise(function (a7, a8) {
        var aa = a3.apply(a5, a6);
        function ab(ad) {
          h(aa, a7, a8, ab, ac, "next", ad);
        }
        function ac(ad) {
          h(aa, a7, a8, ab, ac, "throw", ad);
        }
        ab(void 0);
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
    A = i(g().mark(function a4() {
      var a6, a7, a8, a9, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as;
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
              return a1("先去boxjs填写账号密码");
            case 5:
              return au.abrupt("return");
            case 6:
              au.next = 8;
              return Z();
            case 8:
              k = au.sent;
              a6 = j.split(" ");
              a7 = c(a6);
              au.prev = 11;
              a7.s();
            case 13:
              if ((a8 = a7.n()).done) {
                au.next = 119;
                break;
              }
              a9 = a8.value;
              console.log("随机生成UA");
              aa = X();
              n = aa.ua;
              o = aa.commonUa;
              p = aa.uuid;
              console.log(n);
              console.log(o);
              t = a9.split("&")[0];
              u = a9.split("&")[1];
              console.log("用户：".concat(t, "开始任务"));
              console.log("获取sessionId");
              au.next = 28;
              return H("/api/account/init");
            case 28:
              ab = au.sent;
              w = ab.data.session.id;
              console.log(w);
              console.log("获取signature_key");
              au.next = 34;
              return B("/web/init?client_id=".concat(v));
            case 34:
              ac = au.sent;
              l = ac.data.client.signature_key;
              console.log(l);
              console.log("获取code");
              au.next = 40;
              return D("/web/oauth/credential_auth");
            case 40:
              if (ad = au.sent, ad.data) {
                au.next = 44;
                break;
              }
              console.log(ad.message);
              return au.abrupt("continue", 117);
            case 44:
              ae = ad.data.authorization_code.code;
              console.log(ae);
              console.log("登录");
              au.next = 49;
              return H("/api/zbtxz/login", "check_token=&code=".concat(ae, "&token=&type=-1&union_id="));
            case 49:
              af = au.sent;
              console.log("登录成功");
              s = af.data.session.account_id;
              w = af.data.session.id;
              au.next = 55;
              return F("/api/app_feature_switch/list");
            case 55:
              ag = au.sent;
              console.log("进入app：".concat(ag.message));
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
              return au.abrupt("continue", 117);
            case 66:
              console.log(q);
              au.next = 69;
              return L("/prod-api/user-read/list/".concat(W()));
            case 69:
              if (ah = au.sent, ah.data.completedCount != ah.data.sum) {
                au.next = 74;
                break;
              }
              console.log("阅读已经完成");
              au.next = 97;
              break;
            case 74:
              ai = c(ah.data.articleIsReadList);
              au.prev = 75;
              ai.s();
            case 77:
              if ((aj = ai.n()).done) {
                au.next = 89;
                break;
              }
              if (ak = aj.value, !ak.isRead) {
                au.next = 81;
                break;
              }
              return au.abrupt("continue", 87);
            case 81:
              al = Date.now();
              am = k.md5("&&".concat(ak.id, "&&TlGFQAOlCIVxnKopQnW&&").concat(al));
              au.next = 85;
              return L("/prod-api/already-read/article?articid=".concat(ak.id, "&timestamp=").concat(al, "&signature=").concat(am));
            case 85:
              an = au.sent;
              console.log(an.msg);
            case 87:
              au.next = 77;
              break;
            case 89:
              au.next = 94;
              break;
            case 91:
              au.prev = 91;
              au.t0 = au.catch(75);
              ai.e(au.t0);
            case 94:
              au.prev = 94;
              ai.f();
              return au.finish(94);
            case 97:
              au.next = 99;
              return L("/prod-api/user-read-count/count/".concat(W()));
            case 99:
              ao = au.sent;
              r = "";
              au.next = 103;
              return N("/tzrb/user/loginWC?accountId=".concat(s, "&sessionId=").concat(w));
            case 103:
              r = au.sent;
              console.log("获取抽奖cookie");
              console.log(r);
              au.next = 108;
              return P("/tzrb/awardUpgrade/list?activityId=67");
            case 108:
              ap = au.sent;
              aq = ap.data;
              ar = g().mark(function aE() {
                var aG, aH;
                return g().wrap(function (aJ) {
                  for (;;) {
                    switch (aJ.prev = aJ.next) {
                      case 0:
                        aJ.next = 2;
                        return R("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                      case 2:
                        aG = aJ.sent;
                        aH = aq.findIndex(function (aM) {
                          return aM.id == aG.data;
                        });
                        -1 != aH ? (console.log("抽奖获得：".concat(aq[aH].title)), x += "用户：".concat(t, " 抽奖获得：").concat(aq[aH].title, "\n")) : console.log(JSON.stringify(aG));
                      case 5:
                      case "end":
                        return aJ.stop();
                    }
                  }
                }, aE);
              });
              as = 0;
            case 112:
              if (!(as < ao.data)) {
                au.next = 117;
                break;
              }
              return au.delegateYield(ar(), "t1", 114);
            case 114:
              as++;
              au.next = 112;
              break;
            case 117:
              au.next = 13;
              break;
            case 119:
              au.next = 124;
              break;
            case 121:
              au.prev = 121;
              au.t2 = au.catch(11);
              a7.e(au.t2);
            case 124:
              au.prev = 124;
              a7.f();
              return au.finish(124);
            case 127:
              if (!x) {
                au.next = 130;
                break;
              }
              au.next = 130;
              return a1(x);
            case 130:
            case "end":
              return au.stop();
          }
        }
      }, a4, null, [[11, 121, 124, 127], [75, 91, 94, 97]]);
    }));
    return A.apply(this, arguments);
  }
  function B(a3) {
    return C.apply(this, arguments);
  }
  function C() {
    C = i(g().mark(function a4(a5) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://passport.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": V(),
                    "Accept-Encoding": "gzip",
                    "user-agent": n
                  }
                };
                $.get(ac, function () {
                  var af = i(g().mark(function ag(ah, ai, aj) {
                    return g().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            try {
                              ah ? (console.log("".concat(JSON.stringify(ah))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : aa(JSON.parse(aj));
                            } catch (ao) {
                              $.logErr(ao, ai);
                            } finally {
                              aa();
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
            case 1:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return C.apply(this, arguments);
  }
  function D(a3) {
    return E.apply(this, arguments);
  }
  function E() {
    E = i(g().mark(function a4(a5) {
      var a6;
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              a6 = T();
              return a7.abrupt("return", new Promise(function (a9) {
                var ab = {
                  url: "https://passport.tmuyun.com".concat(a5),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": a6.uuid,
                    "X-SIGNATURE": a6.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": n
                  },
                  body: a6.body
                };
                $.post(ab, function () {
                  var ac = i(g().mark(function ad(ae, af, ag) {
                    return g().wrap(function (ai) {
                      for (;;) {
                        switch (ai.prev = ai.next) {
                          case 0:
                            try {
                              ae ? (console.log("".concat(JSON.stringify(ae))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : a9(JSON.parse(ag));
                            } catch (al) {
                              $.logErr(al, af);
                            } finally {
                              a9();
                            }
                          case 1:
                          case "end":
                            return ai.stop();
                        }
                      }
                    }, ad);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
                  };
                }());
              }));
            case 2:
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
    G = i(g().mark(function a3(a4) {
      var a6;
      return g().wrap(function (a7) {
        for (;;) {
          switch (a7.prev = a7.next) {
            case 0:
              a6 = U(a4);
              return a7.abrupt("return", new Promise(function (a9) {
                var aa = {
                  url: "https://vapp.taizhou.com.cn".concat(a4),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a6.time,
                    "X-SESSION-ID": w,
                    "X-REQUEST-ID": a6.uuid,
                    "X-SIGNATURE": a6.signature,
                    "X-TENANT-ID": m,
                    "X-ACCOUNT-ID": s,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": o
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
            case 2:
            case "end":
              return a7.stop();
          }
        }
      }, a3);
    }));
    return G.apply(this, arguments);
  }
  function H(a3, a4) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function a3(a4, a5) {
      var a7;
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              a7 = U(a4);
              return a8.abrupt("return", new Promise(function (aa) {
                var ac = {
                  url: "https://vapp.taizhou.com.cn".concat(a4),
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
                  },
                  body: a5
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
              return a8.stop();
          }
        }
      }, a3);
    }));
    return I.apply(this, arguments);
  }
  function J(a3) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function a3(a4) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var aa = {
                  url: "https://xmt.taizhou.com.cn".concat(a4),
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
                $.get(aa, function () {
                  var ab = i(g().mark(function ac(ad, ae, af) {
                    return g().wrap(function (ah) {
                      for (;;) {
                        switch (ah.prev = ah.next) {
                          case 0:
                            if (ah.prev = 0, !ad) {
                              ah.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ad)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ah.next = 16;
                            break;
                          case 6:
                            ah.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(af).code) {
                              ah.next = 13;
                              break;
                            }
                            console.log(JSON.parse(af).msg);
                            x += "用户：".concat(t, " ").concat(JSON.parse(af).msg, "\n");
                            a8("");
                            return ah.abrupt("return");
                          case 13:
                            q = $.isNode() ? ae.headers["set-cookie"][0] : ae.headers["set-cookie"] || ae.headers["Set-Cookie"];
                            q = q.split(";")[0];
                            a8(q);
                          case 16:
                            ah.next = 21;
                            break;
                          case 18:
                            ah.prev = 18;
                            ah.t0 = ah.catch(0);
                            $.logErr(ah.t0, ae);
                          case 21:
                            ah.prev = 21;
                            a8();
                            return ah.finish(21);
                          case 24:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, ac, null, [[0, 18, 21, 24]]);
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
      }, a3);
    }));
    return K.apply(this, arguments);
  }
  function L(a3) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function a3(a4) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var a9 = {
                  url: "https://xmt.taizhou.com.cn".concat(a4),
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
      }, a3);
    }));
    return M.apply(this, arguments);
  }
  function N(a3) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function a4(a5) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var aa = {
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
                            ah.next = 11;
                            break;
                          case 6:
                            ah.next = 8;
                            return $.wait(2000);
                          case 8:
                            r = $.isNode() ? af.headers["set-cookie"][0] : af.headers["set-cookie"] || af.headers["Set-Cookie"];
                            r = r.split(";")[0];
                            a8(r);
                          case 11:
                            ah.next = 16;
                            break;
                          case 13:
                            ah.prev = 13;
                            ah.t0 = ah.catch(0);
                            $.logErr(ah.t0, af);
                          case 16:
                            ah.prev = 16;
                            a8();
                            return ah.finish(16);
                          case 19:
                          case "end":
                            return ah.stop();
                        }
                      }
                    }, ad, null, [[0, 13, 16, 19]]);
                  }));
                  return function (ae, af, ag) {
                    return ac.apply(this, arguments);
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
    return O.apply(this, arguments);
  }
  function P(a3) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function a4(a5) {
      return g().wrap(function (a6) {
        for (;;) {
          switch (a6.prev = a6.next) {
            case 0:
              return a6.abrupt("return", new Promise(function (a8) {
                var a9 = {
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
                var aa = {
                  url: "https://srv-app.taizhou.com.cn".concat(a5),
                  headers: a9
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
              return a6.stop();
          }
        }
      }, a4);
    }));
    return Q.apply(this, arguments);
  }
  function R(a3, a4) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function a4(a5, a6) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              return a8.abrupt("return", new Promise(function (a9) {
                var ab = {
                  url: "https://srv-app.taizhou.com.cn".concat(a5),
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
                  body: a6
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
    return S.apply(this, arguments);
  }
  function T() {
    var a7 = new (k.loadJSEncrypt())();
    a7.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    u = a7.encrypt(u);
    var a8 = V(),
      a9 = "client_id=".concat(v, "&password=").concat(u, "&phone_number=").concat(t),
      aa = "post%%/web/oauth/credential_auth?".concat(a9, "%%").concat(a8, "%%");
    a9 = "client_id=".concat(v, "&password=").concat(encodeURIComponent(u), "&phone_number=").concat(t);
    CryptoJS = k.createCryptoJS();
    var a5 = CryptoJS.HmacSHA256(aa, l),
      a6 = CryptoJS.enc.Hex.stringify(a5);
    var ab = {};
    ab.uuid = a8;
    ab.signature = a6;
    ab.body = a9;
    return ab;
  }
  function U(a3) {
    var a4 = V(),
      a5 = Date.now();
    a3.indexOf("?") > 0 && (a3 = a3.substring(0, a3.indexOf("?")));
    CryptoJS = k.createCryptoJS();
    var a6 = CryptoJS.SHA256("".concat(a3, "&&").concat(w, "&&").concat(a4, "&&").concat(a5, "&&").concat(y, "&&").concat(m)).toString(),
      a7 = {
        uuid: a4,
        time: a5,
        signature: a6
      };
    return a7;
  }
  function V() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a4) {
      var a5 = 16 * Math.random() | 0,
        a6 = "x" === a4 ? a5 : 3 & a5 | 8;
      return a6.toString(16);
    });
  }
  function W() {
    var a3 = new Date(),
      a4 = a3.getFullYear(),
      a5 = String(a3.getMonth() + 1).padStart(2, "0"),
      a6 = String(a3.getDate()).padStart(2, "0");
    return "".concat(a4).concat(a5).concat(a6);
  }
  function X() {
    var a3 = "6.0.2",
      a4 = V(),
      a5 = Y(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      a6 = "Xiaomi " + a5,
      a7 = "Android",
      a8 = "".concat(a7.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(a3, ";1.0;null;").concat(a5),
      a9 = "".concat(a3, ";").concat(a4, ";").concat(a6, ";").concat(a7, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0"),
      aa = {
        ua: a8,
        commonUa: a9,
        uuid: a4
      };
    return aa;
  }
  function Y(a3) {
    return a3[Math.floor(Math.random() * a3.length)];
  }
  function Z() {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function a4() {
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
                var ab = i(g().mark(function ac(ad) {
                  return g().wrap(function af(ag) {
                    for (;;) {
                      switch (ag.prev = ag.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ah) {
                            $.setdata(ah, "Utils_Code");
                            eval(ah);
                            console.log("✅ Utils加载成功, 请继续");
                            ad(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ag.stop();
                      }
                    }
                  }, ac);
                }));
                return function (ad) {
                  return ab.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return a7.stop();
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
    a2 = i(g().mark(function a4(a5) {
      return g().wrap(function (a8) {
        for (;;) {
          switch (a8.prev = a8.next) {
            case 0:
              if (!$.isNode()) {
                a8.next = 5;
                break;
              }
              a8.next = 3;
              return notify.sendNotify($.name, a5);
            case 3:
              a8.next = 6;
              break;
            case 5:
              $.msg($.name, "", a5);
            case 6:
            case "end":
              return a8.stop();
          }
        }
      }, a4);
    }));
    return a2.apply(this, arguments);
  }
  i(g().mark(function a3() {
    return g().wrap(function (a4) {
      for (;;) {
        switch (a4.prev = a4.next) {
          case 0:
            a4.next = 2;
            return z();
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