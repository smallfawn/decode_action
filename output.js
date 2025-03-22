//Sat Mar 22 2025 06:33:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const {
  JSDOM
} = require("jsdom");
const dom = new JSDOM("");
window = dom.window;
document = dom.window.document;
Image = dom.window.Image;
function getEnvs(proxyObjs) {
  for (let i = 0; i < proxyObjs.length; i++) {
    const handler = `{
      get: function(target, property, receiver) {
        console.log("方法:", "get  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", "target[property]", ", 属性值类型：", typeof target[property]);
        return target[property];
      },
      set: function(target, property, value, receiver) {
        console.log("方法:", "set  ", "对象:", "${proxyObjs[i]}", "  属性:", property, "  属性类型：", typeof property, ", 属性值：", value, ", 属性值类型：", typeof target[property]);
        return Reflect.set(...arguments);
      }
    }`;
    eval(`try {
            ${proxyObjs[i]};
            ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
        } catch (e) {
            ${proxyObjs[i]} = {};
            ${proxyObjs[i]} = new Proxy(${proxyObjs[i]}, ${handler});
        }`);
  }
}
proxyObjs = ["window", "document", "location", "navigator"];
getEnvs(proxyObjs);
!function t() {
  var i = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, n, i) {
    t == Array.prototype || t == Object.prototype || (t[n] = i.value);
    return t;
  };
  function e(t) {
    t = ["object" == typeof globalThis && globalThis, t, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var n = 0; n < t.length; ++n) {
      var i = t[n];
      if (i && i.Math == Math) {
        return i;
      }
    }
    throw Error("Cannot find global object");
  }
  var x = e(this);
  function a(t, n) {
    if (n) {
      t: {
        var e = x;
        t = t.split(".");
        for (var a = 0; a < t.length - 1; a++) {
          var o = t[a];
          if (!(o in e)) {
            break t;
          }
          e = e[o];
        }
        (n = n(a = e[t = t[t.length - 1]])) != a && null != n && i(e, t, {
          configurable: true,
          writable: true,
          value: n
        });
      }
    }
  }
  function o(t) {
    return t || Array.prototype.fill;
  }
  function c(t) {
    var n = 0;
    return function () {
      return n < t.length ? {
        done: false,
        value: t[n++]
      } : {
        done: true
      };
    };
  }
  function u(t) {
    var n = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
    return n ? n.call(t) : {
      next: c(t)
    };
  }
  a("Array.from", function (t) {
    return t || function (t, n, i) {
      n = null != n ? n : function (t) {
        return t;
      };
      var e = [];
      var x = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
      if ("function" == typeof x) {
        t = x.call(t);
        for (var a = 0; !(x = t.next()).done;) {
          e.push(n.call(i, x.value, a++));
        }
      } else {
        for (x = t.length, a = 0; a < x; a++) {
          e.push(n.call(i, t[a], a));
        }
      }
      return e;
    };
  });
  a("Array.prototype.fill", function (t) {
    return t || function (t, n, i) {
      var e = this.length || 0;
      for (n < 0 && (n = Math.max(0, e + n)), (null == i || e < i) && (i = e), (i = Number(i)) < 0 && (i = Math.max(0, e + i)), n = Number(n || 0); n < i; n++) {
        this[n] = t;
      }
      return this;
    };
  });
  a("Int8Array.prototype.fill", o);
  a("Uint8Array.prototype.fill", o);
  a("Uint8ClampedArray.prototype.fill", o);
  a("Int16Array.prototype.fill", o);
  a("Uint16Array.prototype.fill", o);
  a("Int32Array.prototype.fill", o);
  a("Uint32Array.prototype.fill", o);
  a("Float32Array.prototype.fill", o);
  a("Float64Array.prototype.fill", o);
  a("Promise", function (t) {
    function n(t) {
      this.A = 0;
      this.D = undefined;
      this.j = [];
      this.ta = false;
      var n = this.H();
      try {
        t(n.resolve, n.reject);
      } catch (t) {
        n.reject(t);
      }
    }
    function i() {
      this.j = null;
    }
    function e(t) {
      return t instanceof n ? t : new n(function (n) {
        n(t);
      });
    }
    if (t) {
      return t;
    }
    i.prototype.A = function (t) {
      var n;
      null == this.j && (this.j = [], (n = this).D(function () {
        n.I();
      }));
      this.j.push(t);
    };
    var a = x.setTimeout;
    i.prototype.D = function (t) {
      a(t, 0);
    };
    i.prototype.I = function () {
      for (; this.j && this.j.length;) {
        var t = this.j;
        this.j = [];
        for (var n = 0; n < t.length; ++n) {
          var i = t[n];
          t[n] = null;
          try {
            i();
          } catch (t) {
            this.H(t);
          }
        }
      }
      this.j = null;
    };
    i.prototype.H = function (t) {
      this.D(function () {
        throw t;
      });
    };
    n.prototype.H = function () {
      function t(t) {
        return function (i) {
          r || (r = true, t.call(n, i));
        };
      }
      var n = this;
      var r = false;
      return {
        resolve: t(this.vd),
        reject: t(this.I)
      };
    };
    n.prototype.vd = function (t) {
      if (t === this) {
        this.I(new TypeError("A Promise cannot resolve to itself"));
      } else {
        if (t instanceof n) {
          this.yd(t);
        } else {
          t: switch (typeof t) {
            case "object":
              var i = null != t;
              break t;
            case "function":
              i = true;
              break t;
            default:
              i = false;
          }
          i ? this.Rb(t) : this.Va(t);
        }
      }
    };
    n.prototype.Rb = function (t) {
      var n = undefined;
      try {
        n = t.then;
      } catch (t) {
        return void this.I(t);
      }
      "function" == typeof n ? this.Bd(n, t) : this.Va(t);
    };
    n.prototype.I = function (t) {
      this.va(2, t);
    };
    n.prototype.Va = function (t) {
      this.va(1, t);
    };
    n.prototype.va = function (t, n) {
      if (0 != this.A) {
        throw Error("Cannot settle(" + t + ", " + n + "): Promise already settled in state" + this.A);
      }
      this.A = t;
      this.D = n;
      2 === this.A && this.wd();
      this.Lb();
    };
    n.prototype.wd = function () {
      var t = this;
      a(function () {
        var n;
        !t.Nb() || undefined !== (n = x.console) && n.error(t.D);
      }, 1);
    };
    n.prototype.Nb = function () {
      if (this.ta) {
        return false;
      }
      var t = x.CustomEvent;
      var n = x.Event;
      var i = x.dispatchEvent;
      return undefined === i || ("function" == typeof t ? t = new t("unhandledrejection", {
        cancelable: true
      }) : "function" == typeof n ? t = new n("unhandledrejection", {
        cancelable: true
      }) : (t = x.document.createEvent("CustomEvent")).initCustomEvent("unhandledrejection", false, true, t), t.promise = this, t.reason = this.D, i(t));
    };
    n.prototype.Lb = function () {
      if (null != this.j) {
        for (var t = 0; t < this.j.length; ++t) {
          o.A(this.j[t]);
        }
        this.j = null;
      }
    };
    var o = new i();
    n.prototype.yd = function (t) {
      var n = this.H();
      t.la(n.resolve, n.reject);
    };
    n.prototype.Bd = function (t, n) {
      var i = this.H();
      try {
        t.call(n, i.resolve, i.reject);
      } catch (t) {
        i.reject(t);
      }
    };
    n.prototype.then = function (t, r) {
      function i(t, n) {
        return "function" == typeof t ? function (n) {
          try {
            e(t(n));
          } catch (n) {
            x(n);
          }
        } : n;
      }
      var e;
      var x;
      var a = new n(function (t, n) {
        e = t;
        x = n;
      });
      this.la(i(t, e), i(r, x));
      return a;
    };
    n.prototype.catch = function (t) {
      return this.then(undefined, t);
    };
    n.prototype.la = function (t, n) {
      function i() {
        switch (e.A) {
          case 1:
            t(e.D);
            break;
          case 2:
            n(e.D);
            break;
          default:
            throw Error("Unexpected state: " + e.A);
        }
      }
      var e = this;
      null == this.j ? o.A(i) : this.j.push(i);
      this.ta = true;
    };
    n.resolve = e;
    n.reject = function (t) {
      return new n(function (n, r) {
        r(t);
      });
    };
    n.race = function (t) {
      return new n(function (n, i) {
        for (var x = u(t), a = x.next(); !a.done; a = x.next()) {
          e(a.value).la(n, i);
        }
      });
    };
    n.all = function (t) {
      var i = u(t);
      var x = i.next();
      return x.done ? e([]) : new n(function (t, n) {
        for (var a = [], o = 0; a.push(undefined), o++, e(x.value).la(function (n) {
          return function (r) {
            a[n] = r;
            0 == --o && t(a);
          };
        }(a.length - 1), n), !(x = i.next()).done;) {}
      });
    };
    return n;
  });
  var f = "function" == typeof Object.assign ? Object.assign : function (t, n) {
    for (var i = 1; i < arguments.length; i++) {
      var e = arguments[i];
      if (e) {
        for (var x in e) {
          Object.prototype.hasOwnProperty.call(e, x) && (t[x] = e[x]);
        }
      }
    }
    return t;
  };
  a("Object.assign", function (t) {
    return t || f;
  });
  (function () {
    function n() {
      return 0;
    }
    function i(t, n) {
      try {
        return t && t.apply(Vt, n || []) || "";
      } catch (t) {
        return "";
      }
    }
    function e(t, n) {
      return i(Vt[t], n);
    }
    function x(t, n, i) {
      t.addEventListener ? t.addEventListener(n, i, true) : t.attachEvent && t.attachEvent("on" + n, i, true);
    }
    function a(t, n, i) {
      t.addEventListener ? t.removeEventListener(n, i, true) : t.attachEvent && t.detachEvent("on" + n, i, true);
    }
    function o() {
      return new Date().getTime();
    }
    function c(t) {
      return "[object Function]" === Object.prototype.toString.apply(t);
    }
    function u(t, n) {
      function i() {
        !a && e() && (a = 1, t.apply(null, n));
      }
      function e() {
        var t = Xt.readyState;
        return "interactive" === t || "complete" === t;
      }
      var a;
      undefined === n && (n = []);
      e() ? i() : (x(Xt, "readystatechange", i), x(Vt, "load", i));
    }
    function f(t, n) {
      var i = "";
      c(t) ? i = t() : "[object String]" === Object.prototype.toString.apply(t) ? i = t : undefined === t && (i = n ? f(n) : "");
      return i;
    }
    function s(t, n, i, e) {
      t = "object" == typeof t ? JSON.stringify(t) : undefined === t ? "" : "" + t;
      e = e ? ln : xn;
      return En.encrypt(t, fn(n), {
        iv: fn(i)
      }).W.toString(e);
    }
    function h(t, n, i, e) {
      t = En.decrypt(hn.create({
        W: (e ? ln : xn).parse(t)
      }), fn(n), {
        iv: fn(i),
        mode: pn,
        padding: yn
      });
      return un(t);
    }
    function l(t, n) {
      console.log(t = {
        data: s(t, "E0C544117AAE4F63", "636014d173e04409", !n),
        key_id: "f9a98d46d41c44cd"
      }, n || (t.enc = 2), JSON.stringify(t));
      t = {
        data: s(t, "E0C544117AAE4F63", "636014d173e04409", !n),
        key_id: "f9a98d46d41c44cd"
      };
      n || (t.enc = 2);
      return JSON.stringify(t);
    }
    function v(t) {
      try {
        Vt.__abbaidu_2055_cb ? e("__abbaidu_2055_cb", [t]) : e("__abbaidu_20181211_cb", [t]);
      } catch (x) {
        var n = t;
        var i = null;
        -1 !== t.indexOf("|") && (n = (i = t.split("|"))[0], i = i[1]);
        e("__abbaidu_20180306_idcb", [n]);
        e("__abbaidu_20180315_scorecb", [i]);
        e("__abbaidu_20180315_lid_score_cb", [n, i]);
        e("__abbaidu_20190124_cb", [t]);
      }
    }
    function d(t) {
      var n;
      var i = document.getElementById("__sdk_log_data");
      i && ((n = JSON.parse(i.innerText || "[]")).push(t), i.innerText = JSON.stringify(n, null, 2));
    }
    function b(t) {
      var n = t.url;
      var e = t.data;
      var x = t.Y;
      var a = t.error;
      var o = t.headers;
      var c = undefined === o ? {} : o;
      var u = t.withCredentials;
      var f = Vt.XDomainRequest;
      undefined === u && (u = true);
      i(f ? function () {
        var t = new f();
        t.open("post", n, true);
        u && (t.withCredentials = true);
        t.onerror = function (t) {
          a && a(t);
        };
        t.onload = function () {
          var n = t.responseText;
          x && x(n);
        };
        t.send(e);
      } : function () {
        var t;
        var i = new Vt.XMLHttpRequest();
        for (t in i.open("POST", n, true), c) {
          i.setRequestHeader(t, c[t]);
        }
        u && (i.withCredentials = true);
        i.onreadystatechange = function () {
          var t;
          4 === i.readyState && 200 === i.status && (t = i.responseText, x && x(t, i));
        };
        i.onerror = function (t) {
          a && a(t);
        };
        i.send(e);
      });
    }
    function p(t) {
      t([undefined === Zt.prototype, "eval" === Zt.name, -1 != Zt.toString().indexOf("native")].join());
    }
    function y(t) {
      t([!!Xt.getBoxObjectFor, !!Vt.opera].join());
    }
    function _(t) {
      var n = 0;
      var e = 0;
      undefined !== $t.maxTouchPoints ? n = $t.maxTouchPoints : undefined !== $t.msMaxTouchPoints && (n = $t.msMaxTouchPoints);
      i(function () {
        Xt.createEvent && Xt.createEvent("TouchEvent");
        e = 1;
      });
      t([n, e, +("ontouchstart" in Vt)].join());
    }
    function g(t) {
      t([$t.product, $t.productSub, $t.vendor, $t.vendorSub, $t.appCodeName, $t.appName, $t.platform].join());
    }
    function w(t) {
      t(Zt.toString().length);
    }
    function m(t) {
      t($t.H || "");
    }
    function S(t) {
      t($t.platform || "");
    }
    function j(t) {
      t((Vt.innerWidth || Xt.documentElement.clientWidth || Xt.body.clientWidth) + "x" + (Vt.innerHeight || Xt.documentElement.clientHeight || Xt.body.clientHeight));
    }
    function O(t) {
      t(Qt.colorDepth || "");
    }
    function T(t) {
      t(Qt.width + "x" + Qt.height);
    }
    function I(t) {
      t(Qt.availWidth + "x" + Qt.availHeight);
    }
    function k(t) {
      t([Qt.deviceXDPI || "", Qt.j || ""].join());
    }
    function R(t, n) {
      for (var i = "", e = t.length, x = 0; x < e; x++) {
        i += "," + encodeURIComponent(t[x][n]);
      }
      return i.substr(1);
    }
    function P(t) {
      t(R($t.plugins, "name"));
    }
    function A(t) {
      t(R($t.mimeTypes, "description"));
    }
    function M(t) {
      try {
        var n = +!!Vt.localStorage;
      } catch (t) {
        n = 1;
      }
      t(n);
    }
    function C(t) {
      try {
        var n = +!!Vt.indexedDB;
      } catch (t) {
        n = 1;
      }
      t(n);
    }
    function L(t) {
      try {
        var n = +!!Vt.sessionStorage;
      } catch (t) {
        n = 1;
      }
      t(n);
    }
    function N(t) {
      t($t.cookieEnabled || "");
    }
    function E(t) {
      t(new Date().getTimezoneOffset());
    }
    function U(t) {
      t($t.userAgent || "");
    }
    function D(t) {
      t(Xt.referrer);
    }
    function B(t) {
      t(Xt.URL);
    }
    function H(t) {
      t($t.language || "");
    }
    function J(t) {
      t($t.Va || "");
    }
    function W(t) {
      var n = $t.languages;
      if ("[object String]" === Object.prototype.toString.apply(n)) {
        return t("-1");
      }
      t(n && n.join(",") || "");
    }
    function G(t) {
      function n(t, n) {
        return t.canPlayType(n).replace(/^no$/, "0").replace(/^probably$/, "1").replace(/^maybe$/, "1");
      }
      var e = Xt.createElement("video");
      var x = false;
      i(function () {
        (x = !!e.canPlayType) && ((x = new Boolean(x)).D = n(e, "video/ogg; codecs=\"theora\""), x.j = n(e, "video/mp4; codecs=\"avc1.42E01E\""), x.I = n(e, "video/webm; codecs=\"vp8, vorbis\""), x.H = n(e, "video/webm; codecs=\"vp9\""), x.A = n(e, "application/x-mpegURL; codecs=\"avc1.42E01E\""));
      });
      t([+!!x, x.D || "0", x.j || "0", x.I || "0", x.H || "0", x.A || "0"].join());
    }
    function F(t) {
      t(Vt.devicePixelRatio || "");
    }
    function q(t) {
      t($t.hardwareConcurrency || "");
    }
    function z(t) {
      var n = Xt.createElement("div");
      n.innerHTML = "&nbsp;";
      var i = !(n.className = "adsbox");
      try {
        var e = Xt.body;
        e.appendChild(n);
        i = +(0 === Xt.getElementsByClassName("adsbox")[0].offsetHeight);
        e.removeChild(n);
      } catch (t) {
        i = false;
      }
      t(i);
    }
    function K(t) {
      return undefined !== $t.j ? t($t.j + "") : undefined !== $t.A ? t($t.A + "") : undefined !== Vt.j ? t($t.j + "") : t("");
    }
    function V(t) {
      try {
        var n;
        var i;
        var e = Xt.createElement("canvas");
        var x = e.getContext("webgl") || e.getContext("experimental-webgl");
        var a = 0 <= x.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") ? (n = x.getExtension("WEBGL_debug_renderer_info"), i = x.getParameter(n.UNMASKED_VENDOR_WEBGL), x.getParameter(n.UNMASKED_RENDERER_WEBGL)) : i = "Not supported";
        var o = [i, a].join();
      } catch (t) {
        o = ",";
      }
      t(o);
    }
    function X(t) {
      t(Xt.body.addBehavior ? 1 : 0);
    }
    function Y(t) {
      t($t.deviceMemory || "");
    }
    function $(t) {
      t([!!($t.D || $t.I || $t.va), Wn].join());
    }
    function Q(t) {
      t.set(35, $);
      Wn && t.M(41, 42, 43, 44, function (t) {
        new Gn(function (t) {
          function n(n) {
            i || (i = true, t(n));
          }
          var i = false;
          setTimeout(function () {
            n([-1, -1, -1, -1]);
          }, 110);
          $t.getBattery().then(function (t) {
            n([t.charging, t.chargingTime, t.dischargingTime, t.level]);
          }).catch(function () {
            n([-1, -1, -1, -1]);
          });
        }).then(function (n) {
          t.apply(null, n);
        }).catch(function () {
          t([-1, -1, -1, -1]);
        });
      });
    }
    function Z(t) {
      var n = new zn().encode(t);
      return Vt.crypto.subtle.digest("SHA-1", n).then(function (t) {
        for (var n = "", i = (t = Array.from(new Kn(t))).length, e = 0; e < i; e++) {
          var x = t[e].toString(16);
          n += x = 1 === x.length ? "0" + x : x;
        }
        return n;
      }).catch(function () {
        return qn(t).toString(xn);
      });
    }
    function tt(t, n) {
      Vn ? Z(t).then(function (t) {
        n(t);
      }) : (t = qn(t).toString(xn), n(t));
    }
    function nt(t) {
      tt([Xn(0.12312423423423424), Yn(1e+308), nn.log(1e+154 + nn.sqrt(1e+308)), $n(0.12312423423423424), Qn(1), nn.log(1 + nn.sqrt(2)), Zn(0.5), nn.log(3) / 2, tr(0.5), nr(-1e+300), rr(1), nn.exp(1) - 1 / nn.exp(1) / 2, ir(10.000000000123), er(1), (nn.exp(1) + 1 / nn.exp(1)) / 2, xr(-1e+300), ar(1), (nn.exp(2) - 1) / (nn.exp(2) + 1), or(1), cr(1), nn.exp(1) - 1, ur(10), nn.log(11), nn.pow(nn.PI, -100)].join(""), function (n) {
        t((n || "").substr(0, 8));
      });
    }
    function rt(t) {
      return t.sort(function (t, n) {
        return n < t ? 1 : -1;
      });
    }
    function it(t) {
      t.set(301, function (t) {
        try {
          tt(function () {
            var t;
            var n = [];
            for (t in $t) {
              n.push(t);
            }
            return rt(n);
          }().join(""), function (n) {
            t((n || "").substr(0, 16));
          });
        } catch (n) {
          t("-1");
        }
      });
      t.set(302, function (t) {
        try {
          var n;
          var i = [];
          for (n in Vt) {
            var e;
            var x;
            var a;
            var o;
            var c = Vt[n];
            c && c.toString && -1 === (e = c.toString()).indexOf("[native code]") && 0 !== n.indexOf("screen") && 0 !== n.indexOf("inner") && 0 !== n.indexOf("outer") && 0 !== n.indexOf("webkit") && "location" !== n && "origin" !== n && "chrome" !== n && "speechSynthesis" !== n && "pageYOffset" !== n && (x = true, 0 === e.indexOf("[object ") && ("Object" === (a = e.substring(8, e.length - 1)) || (o = Vt[a]) && o.toString && -1 < o.toString().indexOf("[native code]") && (x = false)), x && i.push(n));
          }
          t(rt(i).slice(0, 30).join(","));
        } catch (n) {
          t("-1");
        }
      });
    }
    function et(t) {
      t.set(4, O);
      t.set(5, T);
      t.set(6, I);
      t.set(7, k);
      t.set(8, P);
      t.set(9, A);
      t.set(11, M);
      t.set(12, L);
      t.set(13, N);
      t.set(14, E);
      t.set(15, H);
      t.set(16, J);
      t.set(17, G);
      t.set(18, F);
      t.set(19, q);
      t.set(20, z);
      t.set(21, K);
      t.set(22, g);
      t.set(23, _);
      t.set(24, C);
      t.set(25, V);
      t.set(27, U);
      t.set(28, y);
      t.set(29, p);
      t.set(30, X);
      t.set(31, Y);
      t.set(34, S);
      t.set(72, W);
      t.set(107, "3.11.3");
      t.set(108, B);
      t.set(109, D);
      t.set(198, w);
      t.set(199, m);
      t.set(200, 1);
      t.set(300, nt);
      it(t);
      var n = e("__abbaidu_2055_zidgetf");
      var i = e("__abbaidu_2055_bidgetf");
      var x = e("__abbaidu_2055_subidgetf") || e("__abbaidu_20180315_subidgetf");
      var a = e("__abbaidu_2055_extra_datagetf");
      t.set(112, n);
      t.set(113, i);
      t.set(114, x);
      t.set(115, a);
      t.set(106, 2055);
      t.set(116, function (t) {
        if (fr) {
          return t("-1");
        }
        var n = Vt.sessionStorage;
        if (!Vt.localStorage || !n) {
          return t("-1");
        }
        n = sr.getItem("MIAO_LID");
        if (n) {
          return t(n);
        }
        n = document.URL;
        var i = document.referrer;
        var e = navigator.userAgent || "";
        var x = o();
        return tt("lid" + Math.random() + n + i + e + x, function (n) {
          sr.setItem("MIAO_LID", n);
          t(n);
        });
      });
    }
    function xt() {
      this.Cb = {};
    }
    function at(t) {
      undefined === t && (t = {});
      this.oa = function () {
        for (;;) {
          var t = Math.random();
          if (!vr[t]) {
            vr[t] = {};
            return t;
          }
        }
      }();
      this.Ra = {
        set: t.set || function (t) {
          return t;
        },
        get: t.get || function (t) {
          return t;
        }
      };
    }
    function ot(t) {
      for (var n = t.F.length, i = 0; i < n; i++) {
        (0, t.F[i])(t.value);
      }
      t.F = [];
    }
    function ct() {
      return "function" == typeof t ? t.toString() : "";
    }
    function ut() {
      var t = ct();
      var n = undefined;
      undefined === n && (n = 100);
      for (var i = "", e = (t = t.replace(/[\u4e00-\u9fa5]/g, "")).length, x = 0; x < e; x += n) {
        i += t[x];
      }
      return i;
    }
    function ft(t) {
      t.set(82, function (t) {
        var n;
        Vn ? Z(ut()).then(function (n) {
          t(n);
        }).catch(function () {
          t("");
        }) : t((n = ut(), qn(n).toString(xn)));
      });
    }
    function st(t) {
      var n = parseInt(Math.random() * t.length);
      var i = t[n];
      t.splice(n, 1);
      return i;
    }
    function ht(t) {
      t.set(78, function (n) {
        t.Ta.apply(t, br.concat([function (i) {
          t.Ta.apply(t, pr.concat([function (t) {
            for (var e = 0; e < pr.length; e++) {
              var x = pr[e];
              i[x] = t[x];
            }
            e = (t = []).concat;
            x = [st(x = [].concat(pr)), st(x)];
            (function (t, n, i) {
              for (var e = [], x = [], a = t.length, o = 0; o < a; o++) {
                var c = st(t);
                x.push(n[c]);
                e.push(c);
              }
              tt(x.join(","), function (t) {
                var n = s(e.join(","), "E0C544117AAE4F63", "636014d173e04409");
                i(t + "_" + n);
              });
            })(t = e.call(t, br, x), i, n);
          }]));
        }]));
      });
    }
    function lt(t) {
      var n = t || 0;
      var i = [];
      var e = {
        next: function () {
          return ++n;
        },
        sa: function (t) {
          return n += t;
        },
        store: function (x) {
          x = x ? t + x : n;
          i.push(x);
          return e;
        },
        O: function (t) {
          for (var x = 0, a = t.length; x < a; x++) {
            i.push(n + t[x]);
          }
          return e;
        },
        l: function () {
          return i.join("_");
        }
      };
      return e;
    }
    function vt() {
      for (var t = [], n = Array.prototype.slice.call(arguments), i = 0, e = n.length; i < e; i++) {
        var x = n[i];
        x && t.push.apply(t, x.split("_"));
      }
      return t.join("_");
    }
    function dt(t, n) {
      var i = sr.Sa("MIAO_CS");
      undefined === n ? delete i[t] : i[t] = n;
      sr.setItem("MIAO_CS", i);
    }
    function bt(t, n) {
      try {
        var i = Object.getOwnPropertyDescriptor(t, n);
        return i && i.get ? i.get.toString().length : 0;
      } catch (t) {
        return 0;
      }
    }
    function pt(t) {
      var n = bt($t, "webdriver");
      t(n);
      return n;
    }
    function yt(t, n) {
      var i;
      undefined === t && (t = []);
      "object" == typeof n ? i = function (t) {
        return t in n;
      } : c(n) && (i = n);
      for (var e = [], x = t.length, a = 0; a < x; a++) {
        i(t[a]) && e.push(a + 1);
      }
      return e;
    }
    function _t(t) {
      var n;
      var i;
      var e;
      var x;
      var a = lt(Or.Kd);
      i = function (n) {
        n && a.store();
        a.next();
        "" === $t.languages && a.store();
        t(a.l());
      };
      null != (e = (n = $t).permissions) && e.query ? (x = Vt.Notification, n.permissions.query({
        name: "notifications"
      }).then(function (t) {
        t = t.state;
        i("denied" === x.permission && "prompt" === t);
      }).catch(function () {
        i(false);
      })) : i(false);
    }
    function gt(t) {
      var n;
      var i;
      var e;
      var x = function () {
        var t = lt(Or.Gd);
        var n = ["callPhantom", "_phantom"];
        var i = yt(n, Vt);
        i.length && t.O(i);
        t.sa(n.length + 1);
        Vt.A && ("object" == typeof (n = Vt.A) && "object" == typeof n.ke && true === n.ke.ve || t.store());
        t.next();
        try {
          null[0]();
        } catch (n) {
          n.stack && -1 < n.stack.toString().indexOf("phantomjs") && t.store();
        }
        return t.l();
      }();
      i = lt(Or.Ed);
      (e = yt(["__nightmare"], Vt)).length && i.O(e);
      var a = i.l();
      var c = function () {
        var t = lt(Or.Md);
        var n = ["_Selenium_IDE_Recorder", "callSelenium", "_selenium"];
        var i = yt(n, Vt);
        for (e in i.length && t.O(i), t.sa(n.length), (i = yt(n = "__webdriver_script_fn __driver_evaluate __webdriver_evaluate __selenium_evaluate __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __selenium_unwrapped __fxdriver_unwrapped __webdriver_script_func __webdriver_script_function $chrome_asyncScriptInfo".split(" "), Xt)).length && t.O(i), t.sa(n.length + 1), Xt) {
          if (e.match(/\$[a-z]dc_/) && Xt[e].cache_) {
            t.store();
            break;
          }
        }
        var e;
        var x = Xt.documentElement;
        (e = yt(["selenium", "webdriver", "driver"], function (t) {
          return null !== x.getAttribute(t);
        })).length && t.O(e);
        return t.l();
      }();
      n = lt(Or.Hd);
      e = "_playwrightRecorderSetSelector _playwrightResume _playwrightRecorderPerformAction __playwright_binding_call__ _playwrightRecorderRecordAction _playwrightRecorderState _playwrightRefreshOverlay".split(" ");
      (i = yt(e, Vt)).length && n.O(i);
      n.sa(e.length + 1);
      Nr ? n.store() : (e = sr.Sa("MIAO_CS").p) && (e = new Date(parseInt(e, 10)).getTime(), o() - e <= 7200000 ? (Nr = true, n.store()) : dt("p", undefined));
      var u = n.l();
      t.M(((n = {})[60] = x, n[61] = a, n[62] = c, n[63] = kr, n[64] = Ir, n[65] = Rr, n[69] = pt, n));
      t.set(74, function (t) {
        _t(function (n) {
          t(n);
        });
      });
      t.set(58, function (n) {
        t.X(60, 61, 62, 74, function (t, r, i, e) {
          t = vt(t, r, i, e, u);
          n(t);
        });
      });
      t.M(70, 71, function (n) {
        var i = [];
        Ir && i.push(Or.Od);
        Tr && i.push(Or.xd);
        t.get(58, function (t) {
          var e = lt(Or.Jd);
          800 === Vt.innerWidth && 600 === Vt.innerHeight && 1200 === Vt.outerWidth && e.store();
          e.next();
          0 === Vt.outerWidth && e.store();
          e = e.l();
          var x = vt(i.join("_"), e);
          t ? n(1, x) : e ? n(10, x) : n(0, "");
        });
      });
    }
    function wt() {
      var t = lt(_r);
      (function () {
        try {
          tn.prototype.toString.call("");
          return false;
        } catch (r) {
          if (!r.stack) {
            return false;
          }
          var t = r.stack.split("\n");
          if (t.length < 2) {
            return true;
          }
          for (var n = 0, i = t.length; n < i; n++) {
            var e = t[n];
            if (undefined === t[e]) {
              t[e] = n;
            } else {
              if (e === t[n + (n - t[e])]) {
                return true;
              }
            }
          }
          return false;
        }
      })() && t.store();
      return t.l();
    }
    function mt(t) {
      return new Vt.RegExp("^\\n?function " + t + "\\(\\) \\{\\n?\\s+\\[native code\\]\\s+\\n?\\}\\n?$");
    }
    function St(t, n) {
      n = mt(n = (n || "").toLowerCase());
      var i = mt("toString");
      var e = t.toString.toString();
      return !n.test(t.toString().toLowerCase()) || !i.test(e);
    }
    function jt() {
      var t = Vt.HTMLIFrameElement;
      var n = Vt.Math;
      var i = Vt.Object;
      var e = lt(gr);
      if (!t) {
        return e.l();
      }
      t = St((x = i.getOwnPropertyDescriptor(t.prototype, "contentWindow")).get, "get contentWindow");
      var x = St(x.get, "contentWindow");
      if (t && x && e.store(), Pr || Ar || Mr) {
        return e.l();
      }
      e.next();
      t = Xt.createElement("iframe");
      for (var a = 0, o = (x = [{
          key: "srcdoc"
        }, {}, {
          key: "contentWindow"
        }]).length; a < o; a++) {
        var c = x[a];
        c.key && i.getOwnPropertyDescriptor(t, c.key) && e.store();
        e.next();
        c.after && c.after();
      }
      t.contentWindow && (Vt.__ivt__ = n.random(), t.contentWindow.__ivt__ === Vt.__ivt__ && e.store(), delete Vt.__ivt__);
      e.next();
      Vt.Document.prototype.createElement !== Xt.createElement && e.store();
      return e.l();
    }
    function Ot() {
      var t;
      var n = lt(wr);
      if (!$t.permissions) {
        return n.l();
      }
      Vt.Permissions.prototype.query !== $t.permissions.query && n.store();
      n.next();
      St($t.permissions.query, "query") && n.store();
      n.next();
      try {
        $t.permissions.query.toString.call();
      } catch (i) {
        -1 < (null == (t = i.stack) ? undefined : t.indexOf("at functionToString")) && n.store();
      }
      return n.l();
    }
    function Tt() {
      function t(t, n, i) {
        return !!(t = x.getOwnPropertyDescriptor(t, n)) && (!!t.get || !(t.value instanceof i));
      }
      var n = lt(mr);
      var i = Vt.PluginArray;
      var e = Vt.MimeTypeArray;
      var x = Vt.Object;
      return $t.plugins instanceof i && $t.mimeTypes instanceof e ? (n.next(), i = t($t, "plugins", i), e = t($t, "mimeTypes", e), i || e ? n.store().l() : (n.next(), $t.plugins._k = 0, -1 === x.getOwnPropertyNames($t.plugins).indexOf("_k") ? n.store().l() : (delete $t.plugins._k, n.l()))) : n.store().l();
    }
    function It() {
      var t = Vt.WebGLRenderingContext;
      var n = Vt.WebGL2RenderingContext;
      var i = lt(Sr);
      t && St(t.prototype.getParameter, "getParameter") && i.store();
      i.next();
      n && St(n.prototype.getParameter, "getParameter") && i.store();
      return i.l();
    }
    function kt(t) {
      t.set(73, function (t) {
        var n = false;
        var i = false;
        var e = "";
        var x = "";
        !function (t) {
          try {
            !function (t) {
              var n = lt(jr);
              Cr && n.store(99);
              t(n.l());
            }(function (n) {
              t(n);
            });
          } catch (n) {
            t("");
          }
        }(function (r) {
          i = true;
          e = r;
          n && i && t(vt(x, e));
        });
        x = function () {
          for (var t = [wt, jt, Ot, Tt, It], n = "", i = 0; i < t.length; i++) {
            var e = t[i];
            try {
              var x = e();
              n = vt(n, x);
            } catch (t) {}
          }
          return n;
        }();
        n = true;
        i && t(vt(x, e));
      });
    }
    function Rt(t) {
      if (!(n = bt($t, "plugins"))) {
        for (var n, i = 0, e = (n = $t.plugins).length, x = 0; x < e; x++) {
          var a = bt(n[x], "name");
          i += a;
        }
        n = i;
      }
      i = bt(Qt, "availWidth") + bt(Qt, "availHeight");
      e = bt(Qt, "width") + bt(Qt, "height");
      t([n, i, x = bt($t, "hardwareConcurrency"), a = bt($t, "platform"), e].join());
    }
    function Pt(t) {
      function n(t, n) {
        if (!t) {
          return false;
        }
        var i = mt(n);
        return !(t = t[n] || {}).toString || t.toString && !i.test(t.toString());
      }
      var e = Xt.createElement("canvas");
      var x = false;
      i(function () {
        x = n(e, "toDataURL");
      });
      var a = false;
      i(function () {
        var t;
        var i;
        e && e.getContext && (a = !!n(e, "getContext") || (t = n(i = e.getContext("webgl") || e.getContext("experimental-webgl"), "getSupportedExtensions"), i = n(i, "getParameter"), t || i));
      });
      var o = false;
      i(function () {
        var t = Xt.createElement("video");
        o = t.canPlayType && n(t, "canPlayType");
      });
      var c = false;
      i(function () {
        c = Xt.createEvent && n(Xt, "createEvent");
      });
      var u = bt($t, "maxTouchPoints");
      var f = bt($t, "msMaxTouchPoints");
      u = c || u || f;
      var s = false;
      i(function () {
        s = $t.getBattery && n($t, "getBattery");
      });
      t([x ? 1 : 0, a ? 1 : 0, o ? 1 : 0, u ? 1 : 0, s ? 1 : 0].join());
    }
    function At(t) {
      t(new Vt.RegExp("function\\s?\\(\\)\\{return\\sdocument").test(function () {
        return Xt.cookie;
      } + "") ? 0 : 1);
    }
    function Mt(t) {
      var n;
      var e;
      var x;
      var a;
      n = Vt.Object;
      e = false;
      n.defineProperty && n.defineProperty(Vt, "eval", {
        get: function () {
          if (!e) {
            var t = Error();
            if (t.stack) {
              try {
                Lr.o("EVAK_CALL", t.stack);
              } catch (t) {}
            }
          }
          return Zt;
        }
      });
      ft(t);
      ht(t);
      (x = t).set(85, function (t) {
        x.Ta.apply(x, dr.concat([function (n) {
          for (var r = dr, i = [], e = r.length, x = 0; x < e; x++) {
            i.push(n[r[x]] || "");
          }
          tt(i.join("_"), t);
        }]));
      });
      gt(t);
      kt(t);
      t.set(76, function (t) {
        for (var n = 0, r = Er.length; n < r; n++) {
          if ("function" == typeof Vt[Er[n]]) {
            return t(1);
          }
        }
        t(0);
      });
      t.set(81, At);
      t.set(79, Rt);
      t.set(80, Pt);
      (a = t).set(401, function (t) {
        function n(t, n) {
          (e = e || {})[t] = n;
        }
        var e;
        var x = Vt.HTMLIFrameElement;
        var o = Vt.Object;
        var c = Vt.WebGLRenderingContext;
        var u = Vt.WebGL2RenderingContext;
        a.get(73, function (a) {
          a = a || "";
          i(function () {
            var t;
            -1 < a.indexOf("300") && x && (t = o.getOwnPropertyDescriptor(x.prototype, "contentWindow")).get && n("73_300", t.get.toString());
            -1 < a.indexOf("401") && $t.permissions && n("73_401", $t.permissions.query.toString());
            -1 < a.indexOf("600") && c && n("73_600", c.prototype.getParameter.toString());
            -1 < a.indexOf("601") && u && n("73_601", u.prototype.getParameter.toString());
          });
          t(JSON.stringify(e));
        });
      });
    }
    function Ct() {
      var t = Xt.getElementsByTagName("iframe");
      var n = [];
      i(function () {
        for (var i = 0; i < t.length; i++) {
          var e = t[i].getBoundingClientRect();
          n.push({
            x: e.x,
            y: e.y,
            w: e.width,
            h: e.height
          });
        }
      });
      return JSON.stringify(n);
    }
    function Lt(t) {
      var n = Vt.btoa;
      Math.random() < 0.001 && n && t.X(106, 3, 82, 107, 108, function (t, i, e, x, a) {
        var o;
        b({
          url: "https://zhitong.baidu.com/castor/gateway/rr/jtcr",
          headers: {
            "Content-Type": "text/plain;charset=UTF-8"
          },
          withCredentials: !(Lt.Ld = true),
          data: n(JSON.stringify(((o = {}).sid = t, o.c = i, o.s = e, o.v = x, o.co = ct(), o.u = a, o)))
        });
      });
    }
    function Nt() {
      lr.start("cn");
      var t = [];
      var n = Xt.createElement("canvas");
      n.width = 2000;
      n.height = 200;
      n.style.display = "inline";
      var i = n.getContext("2d");
      var e = 2 * Math.PI;
      i.rect(0, 0, 10, 10);
      i.rect(2, 2, 6, 6);
      i.isPointInPath && t.push("canvas winding:" + (false === i.isPointInPath(5, 5, "evenodd") ? "yes" : "no"));
      i.textBaseline = "alphabetic";
      i.fillStyle = "#f60";
      i.fillRect(125, 1, 62, 20);
      i.fillStyle = "#069";
      i.font = "11pt Arial";
      i.fillText("antifraud", 2, 15);
      i.fillStyle = "rgba(102, 204, 0, 0.2)";
      i.font = "18pt Arial";
      i.fillText("antifraud", 4, 45);
      i.globalCompositeOperation = "multiply";
      i.fillStyle = "rgb(255,0,255)";
      i.beginPath();
      i.arc(50, 50, 50, 0, e, true);
      i.closePath();
      i.fill();
      i.fillStyle = "rgb(0,255,255)";
      i.beginPath();
      i.arc(100, 50, 50, 0, e, true);
      i.closePath();
      i.fill();
      i.fillStyle = "rgb(255,255,0)";
      i.beginPath();
      i.arc(75, 100, 50, 0, e, true);
      i.closePath();
      i.fill();
      i.fillStyle = "rgb(255,0,255)";
      i.arc(75, 75, 75, 0, e, true);
      i.arc(75, 75, 25, 0, e, true);
      i.fill("evenodd");
      t.push("canvas fp:" + n.toDataURL());
      lr.end("cn");
      return t.join("~");
    }
    function Et(t) {
      var n = function () {
        var t = Xt.createElement("canvas");
        try {
          return +!(!t.getContext || !t.getContext("2d"));
        } catch (t) {
          return 0;
        }
      }();
      t.set(1, n);
      t.set(3, function (t) {
        var i;
        n ? Vn ? (i = Nt(), lr.start("cs"), Z(i).then(function (t) {
          lr.end("cs");
          return t;
        }).then(function (n) {
          t(n);
        }).catch(function () {
          t("-1");
        })) : t(function () {
          lr.start("c");
          var t = Nt();
          lr.start("cs");
          t = qn(t).toString(xn);
          lr.end("cs");
          lr.end("c");
          return t;
        }()) : t("");
      });
    }
    function Ut(t) {
      t && (Yr = t, Xr = o());
    }
    function Dt(t) {
      try {
        new Promise(function (n) {
          try {
            function e(t) {
              (t = c.exec(t)) && "0.0.0.0" !== (t = t[1]) && (undefined === a[t] && x.push(t), a[t] = true);
            }
            var x;
            var a;
            var o;
            var c;
            var u;
            var f;
            var s;
            var h = Vt.RTCPeerConnection || Vt.I || Vt.webkitRTCPeerConnection;
            h ? (x = [], a = {}, o = new h({
              iceServers: [{
                urls: "stun:stun.services.mozilla.com"
              }]
            }, {
              optional: [{
                RtpDataChannels: true
              }]
            }), c = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/, o.onicecandidate = function (t) {
              t.candidate && e(t.candidate.candidate);
            }, o.createDataChannel(""), u = function () {}, i(function () {
              o.createOffer().then(function (t) {
                o.setLocalDescription(t, u, u);
              }, u).catch(function () {});
            }), i(function () {
              o.createOffer(function (t) {
                o.setLocalDescription(t, u, u);
              }, u).catch(function () {});
            }), f = 0, s = setInterval(function () {
              try {
                o.localDescription.sdp.split("\n").forEach(function (t) {
                  0 !== t.indexOf("a=candidate:") && 0 !== t.indexOf("c=IN") || e(t);
                });
                (0 < x.length || 2 < ++f) && (n(x.join(",")), clearInterval(s));
              } catch (t) {
                n(x.join(","));
                clearInterval(s);
              }
            }, 1000)) : n("");
          } catch (f) {
            Ut("");
            t("");
          }
        }).then(function (n) {
          Ut(n);
          t(n);
        }).catch(function () {
          Ut("");
          t("");
        });
      } catch (n) {
        Ut("");
        t("");
      }
    }
    function Bt(t) {
      this.ja = t;
      t = new at();
      var n = new at();
      this.Ib = false;
      this.ma = t;
      this.na = n;
    }
    function Ht(t, n) {
      var i;
      var e;
      var x;
      var c;
      t.Ib || (i = 0 !== Xr && 0 !== Ii, (i = !!n || i) && (zr && a(Vt, "devicemotion", zr), t.Ib = true, e = Xr, x = Yr, c = t.na, t.ja.C.X(101, 103, function (t, n) {
        var i;
        var a = lr.getTime("t");
        var u = lr.getData();
        var f = Ii;
        var s = (_ = [wi, mi, Si, yi, _i, gi, ji, Oi, Ti])[0];
        var h = _[1];
        var l = _[2];
        var v = _[3];
        var d = _[4];
        var b = _[5];
        var p = _[6];
        var y = _[7];
        var _ = _[8];
        c.M(((i = {})[1] = s, i[2] = h, i[3] = l, i[4] = v, i[5] = d, i[6] = b, i[7] = p, i[8] = y, i[9] = _, i[10] = 0 !== f ? f - n + "" : -1, i[11] = x, i[12] = 0 !== e ? e - n + "" : "-1", i[101] = t, i[103] = o(), i[106] = 2055, i[107] = "3.11.3", i[109] = function (t) {
          return D(function (n) {
            t(2500 < n.length ? "-1" : n);
          });
        }, i[110] = U, i[200] = 3, i[300] = a, i[302] = u, i));
      }), t.ja.o(Fr, t), t.na.pa(function (t) {
        Jt(t);
      })));
    }
    function Jt(t) {
      d(t);
      8000 < (t = "https://miao.baidu.com/abdr?data=" + encodeURIComponent(l(t)) + "&_=" + Math.random()) || (new Image().src = t);
    }
    function Wt(t) {
      if ("string" != typeof t) {
        return {
          data: t,
          type: 1
        };
      }
      for (var n = t.length, i = [], e = 0; e < n; e++) {
        i.push(t[e].charCodeAt() * n);
      }
      return {
        data: i,
        type: 2
      };
    }
    function Gt(t) {
      if (t.type === 1) {
        return t.data;
      }
      for (var n = "", i = (t = t.data).length, e = 0; e < i; e++) {
        n += Ri.fromCharCode(t[e] / i);
      }
      return n;
    }
    function Ft() {
      this.C = new at({
        set: Wt,
        get: Gt
      });
      this.Hb = false;
      this.ra = [];
    }
    function qt() {
      return (qt = Object.assign || function (t) {
        for (var n = 1; n < arguments.length; n++) {
          var i;
          var e = arguments[n];
          for (i in e) {
            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          }
        }
        return t;
      }).apply(this, arguments);
    }
    function zt(t) {
      function n() {
        var n;
        t.Ua = true;
        n = t;
        u(function () {
          i(Kt, [n]);
        });
      }
      t = t || new Ft();
      var e;
      var x;
      var a = {
        miaowu: a.miao = function (n) {
          if (!t.Ua && Ai) {
            throw Error("Advanced mode error: must run 'BCat_2055.init()' before 'BCat_2055.miaowu()'");
          }
          t.ae(n);
        }
      };
      Ai && (a.init = n, x = t, (e = a).initData = function (t, n) {
        x.Ua = true;
        u(function () {
          x.qa(function (i) {
            var e = f(t && t.extraData, undefined);
            var x = f(t && t.subid, undefined);
            e && (i[115] = e);
            x && (i[114] = x);
            i = l(i);
            n(i);
          });
        });
      }, e.initActiveData = function (t, n) {
        x.Eb(t, function (t) {
          t = l(t);
          n(t);
        });
      }, e.report = function (t) {
        var n = (t = undefined === t ? {} : t).success;
        var i = t.error;
        x.Wa(qt({}, t, {
          Y: function (t, r) {
            n && n(t, r);
            x.Fb();
          },
          error: function (t) {
            i && i(t);
          }
        }));
      });
      Vt.BCat = Vt.BCat_2055 = a;
      return n;
    }
    function Kt(t) {
      t.qa(function (n) {
        d(n);
        n = l(n);
        t.Wa({
          data: n,
          Y: function (n) {
            v(n);
            t.Fb();
          }
        });
      });
    }
    var Vt = window;
    var Xt = Vt.document;
    var Yt = Vt.location;
    var $t = Vt.navigator;
    var Qt = Vt.screen;
    var Zt = Vt.eval;
    var tn = Vt.Function;
    var nn = Vt.Math;
    var rn = Object.create || function (t) {
      Cn.prototype = t;
      t = new Cn();
      Cn.prototype = null;
      return t;
    };
    var en = {
      extend: function (t) {
        var n = rn(this);
        t && n.Db(t);
        n.hasOwnProperty("init") || this.g !== n.g || (n.g = function () {
          n.Jb.g.apply(this, arguments);
        });
        (n.g.prototype = n).Jb = this;
        return n;
      },
      create: function () {
        var t = this.extend();
        t.g.apply(t, arguments);
        return t;
      },
      g: function () {},
      Db: function (t) {
        for (var n in t) {
          t.hasOwnProperty(n) && (this[n] = t[n]);
        }
        t.hasOwnProperty("toString") && (this.toString = t.toString);
      },
      clone: function () {
        return this.g.prototype.extend(this);
      }
    };
    var xn = {
      stringify: function (t) {
        var n = t.m;
        t = t.i;
        for (var i = [], e = 0; e < t; e++) {
          var x = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;
          i.push((x >>> 4).toString(16));
          i.push((15 & x).toString(16));
        }
        return i.join("");
      },
      parse: function (t) {
        for (var n = t.length, i = [], e = 0; e < n; e += 2) {
          i[e >>> 3] |= parseInt(t.substr(e, 2), 16) << 24 - e % 8 * 4;
        }
        return new an.g(i, n / 2);
      }
    };
    var an = en.extend({
      g: function (t, n) {
        t = this.m = t || [];
        this.i = null != n ? n : 4 * t.length;
      },
      toString: function (t) {
        return (t || xn).stringify(this);
      },
      concat: function (t) {
        var n = this.m;
        var r = t.m;
        var i = this.i;
        if (t = t.i, this.Oa(), i % 4) {
          for (var e = 0; e < t; e++) {
            n[i + e >>> 2] |= (r[e >>> 2] >>> 24 - e % 4 * 8 & 255) << 24 - (i + e) % 4 * 8;
          }
        } else {
          for (e = 0; e < t; e += 4) {
            n[i + e >>> 2] = r[e >>> 2];
          }
        }
        this.i += t;
        return this;
      },
      Oa: function () {
        var t = this.m;
        var n = this.i;
        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8;
        t.length = Math.ceil(n / 4);
      },
      clone: function () {
        var t = en.clone.call(this);
        t.m = this.m.slice(0);
        return t;
      },
      random: function (t) {
        for (var n = [], i = 0; i < t; i += 4) {
          var e = function (t) {
            var n = 987654321;
            return function () {
              return ((((n = 36969 * (65535 & n) + (n >> 16) & 4294967295) << 16) + (t = 18000 * (65535 & t) + (t >> 16) & 4294967295) & 4294967295) / 4294967296 + 0.5) * (0.5 < Math.random() ? 1 : -1);
            };
          }(4294967296 * (x || Math.random()));
          var x = 987654071 * e();
          n.push(4294967296 * e() | 0);
        }
        return new an.g(n, t);
      }
    });
    var on = function (t) {
      var n = t.m;
      t = t.i;
      for (var i = [], e = 0; e < t; e++) {
        i.push(String.fromCharCode(n[e >>> 2] >>> 24 - e % 4 * 8 & 255));
      }
      return i.join("");
    };
    var cn = function (t) {
      for (var n = t.length, i = [], e = 0; e < n; e++) {
        i[e >>> 2] |= (255 & t.charCodeAt(e)) << 24 - e % 4 * 8;
      }
      return new an.g(i, n);
    };
    var un = function (t) {
      try {
        return decodeURIComponent(escape(on(t)));
      } catch (t) {
        throw Error("Malformed UTF-8 data");
      }
    };
    var fn = function (t) {
      return cn(unescape(encodeURIComponent(t)));
    };
    var sn = en.extend({
      reset: function () {
        this.N = new an.g();
        this.Na = 0;
      },
      ha: function (t) {
        "string" == typeof t && (t = fn(t));
        this.N.concat(t);
        this.Na += t.i;
      },
      V: function (t) {
        var n;
        var i = this.N;
        var e = i.m;
        var x = i.i;
        var a = this.blockSize;
        var o = x / (4 * a);
        if (t = (o = t ? Math.ceil(o) : Math.max((0 | o) - this.yb, 0)) * a, x = Math.min(4 * t, x), t) {
          for (n = 0; n < t; n += a) {
            this.ub(e, n);
          }
          n = e.splice(0, t);
          i.i -= x;
        }
        return new an.g(n, x);
      },
      clone: function () {
        var t = en.clone.call(this);
        t.N = this.N.clone();
        return t;
      },
      yb: 0
    });
    var hn = en.extend({
      g: function (t) {
        this.Db(t);
      },
      toString: function (t) {
        return (t || this.ee).stringify(this);
      }
    });
    var ln = {
      stringify: function (t) {
        var n = t.m;
        var i = t.i;
        var e = this.xb;
        t.Oa();
        t = [];
        for (var x = 0; x < i; x += 3) {
          for (var a = (n[x >>> 2] >>> 24 - x % 4 * 8 & 255) << 16 | (n[x + 1 >>> 2] >>> 24 - (x + 1) % 4 * 8 & 255) << 8 | n[x + 2 >>> 2] >>> 24 - (x + 2) % 4 * 8 & 255, o = 0; o < 4 && x + 0.75 * o < i; o++) {
            t.push(e.charAt(a >>> 6 * (3 - o) & 63));
          }
        }
        n = e.charAt(64);
        if (n) {
          for (; t.length % 4;) {
            t.push(n);
          }
        }
        return t.join("");
      },
      parse: function (t) {
        var n = t.length;
        var i = this.xb;
        if (!(e = this.$d)) {
          for (var e = this.$d = [], x = 0; x < i.length; x++) {
            e[i.charCodeAt(x)] = x;
          }
        }
        !(i = i.charAt(64)) || -1 !== (i = t.indexOf(i)) && (n = i);
        i = [];
        for (var a = x = 0; a < n; a++) {
          a % 4 && (i[x >>> 2] |= (e[t.charCodeAt(a - 1)] << a % 4 * 2 | e[t.charCodeAt(a)] >>> 6 - a % 4 * 2) << 24 - x % 4 * 8, x++);
        }
        return an.create(i, x);
      },
      xb: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
    var vn = en.extend({
      B: en.extend({
        format: {
          stringify: function (t) {
            var n = t.W;
            return ((t = t.salt) ? an.create([1398893684, 1701076831]).concat(t).concat(n) : n).toString(ln);
          },
          parse: function (t) {
            var n;
            var i = (t = ln.parse(t)).m;
            1398893684 === i[0] && 1701076831 === i[1] && (n = an.create(i.slice(2, 4)), i.splice(0, 4), t.i -= 16);
            return hn.create({
              W: t,
              salt: n
            });
          }
        }
      }),
      encrypt: function (t, n, i, e) {
        e = this.B.extend(e);
        var x = t.Qa(i, e);
        n = x.G(n);
        x = x.B;
        return hn.create({
          W: n,
          key: i,
          iv: x.iv,
          algorithm: t,
          mode: x.mode,
          padding: x.padding,
          blockSize: t.blockSize,
          ee: e.format
        });
      },
      decrypt: function (t, n, i, e) {
        e = this.B.extend(e);
        n = this.Zd(n, e.format);
        return t.Pa(i, e).G(n.W);
      },
      Zd: function (t, n) {
        return "string" == typeof t ? n.parse(t, this) : t;
      }
    });
    var dn = sn.extend({
      B: en.extend(),
      Qa: function (t, n) {
        return this.create(this.Ia, t, n);
      },
      Pa: function (t, n) {
        return this.create(this.Rd, t, n);
      },
      g: function (t, n, i) {
        this.B = this.B.extend(i);
        this.Bb = t;
        this.wb = n;
        this.reset();
      },
      reset: function () {
        sn.reset.call(this);
        this.La();
      },
      process: function (t) {
        this.ha(t);
        return this.V();
      },
      G: function (t) {
        t && this.ha(t);
        return this.Ka();
      },
      ge: 4,
      we: 4,
      Ia: 1,
      Rd: 2,
      Ja: function (t) {
        return {
          encrypt: function (n, i, e) {
            return Mn(i).encrypt(t, n, i, e);
          },
          decrypt: function (n, i, e) {
            return Mn(i).decrypt(t, n, i, e);
          }
        };
      }
    });
    var bn = en.extend({
      Qa: function (t, n) {
        return this.Qb.create(t, n);
      },
      Pa: function (t, n) {
        return this.Ob.create(t, n);
      },
      g: function (t, n) {
        this.sb = t;
        this.vb = n;
      }
    });
    (Nn = bn.extend()).Qb = Nn.extend({
      Gb: function (t, n) {
        var i = this.sb;
        var e = i.blockSize;
        An.call(this, t, n, e);
        i.ce(t, n);
        this.Ab = t.slice(n, n + e);
      }
    });
    Nn.Ob = Nn.extend({
      Gb: function (t, n) {
        var i = this.sb;
        var e = i.blockSize;
        var x = t.slice(n, n + e);
        i.be(t, n);
        An.call(this, t, n, e);
        this.Ab = x;
      }
    });
    var pn = Nn;
    var yn = {
      ie: function (t, n) {
        n *= 4;
        for (var i = (n -= t.i % n) << 24 | n << 16 | n << 8 | n, e = [], x = 0; x < n; x += 4) {
          e.push(i);
        }
        n = an.create(e, n);
        t.concat(n);
      },
      le: function (t) {
        t.i -= 255 & t.m[t.i - 1 >>> 2];
      }
    };
    bn = dn.extend({
      B: dn.B.extend({
        mode: pn,
        padding: yn
      }),
      reset: function () {
        dn.reset.call(this);
        var t = this.B;
        var n = t.iv;
        var i = t.mode;
        this.Bb == this.Ia ? t = i.Qa : (t = i.Pa, this.yb = 1);
        this.U && this.U.Sd == t ? this.U.g(this, n && n.m) : (this.U = t.call(i, this, n && n.m), this.U.Sd = t);
      },
      ub: function (t, n) {
        this.U.Gb(t, n);
      },
      Ka: function () {
        var t;
        var n = this.B.padding;
        this.Bb == this.Ia ? (n.ie(this.N, this.blockSize), t = this.V(true)) : (t = this.V(true), n.le(t));
        return t;
      },
      blockSize: 4
    });
    var _n = en.extend({
      g: function (t, n) {
        t = this.Ma = new t.g();
        "string" == typeof n && (n = fn(n));
        var i = t.blockSize;
        var e = 4 * i;
        (n = n.i > e ? t.G(n) : n).Oa();
        t = this.Yd = n.clone();
        n = this.Ud = n.clone();
        for (var x = t.m, a = n.m, o = 0; o < i; o++) {
          x[o] ^= 1549556828;
          a[o] ^= 909522486;
        }
        t.i = n.i = e;
        this.reset();
      },
      reset: function () {
        var t = this.Ma;
        t.reset();
        t.update(this.Ud);
      },
      update: function (t) {
        this.Ma.update(t);
        return this;
      },
      G: function (t) {
        var n = this.Ma;
        t = n.G(t);
        n.reset();
        return n.G(this.Yd.clone().concat(t));
      }
    });
    var gn = sn.extend({
      B: en.extend(),
      g: function (t) {
        this.B = this.B.extend(t);
        this.reset();
      },
      reset: function () {
        sn.reset.call(this);
        this.La();
      },
      update: function (t) {
        this.ha(t);
        this.V();
        return this;
      },
      G: function (t) {
        t && this.ha(t);
        return this.Ka();
      },
      blockSize: 16,
      Ja: function (t) {
        return function (n, r) {
          return new t.g(r).G(n);
        };
      },
      te: function (t) {
        return function (n, r) {
          return new _n.g(t, r).G(n);
        };
      }
    });
    var wn = [];
    var mn = [];
    var Sn = [];
    var jn = [];
    var On = [];
    var Tn = [];
    var In = [];
    var kn = [];
    var Rn = [];
    var Pn = [];
    function An(t, n, r) {
      var i;
      (i = this.vb) ? this.vb = undefined : i = this.Ab;
      for (var e = 0; e < r; e++) {
        t[n + e] ^= i[e];
      }
    }
    function Mn(t) {
      if ("string" != typeof t) {
        return vn;
      }
    }
    function Cn() {}
    !function () {
      for (var t = [], n = 0; n < 256; n++) {
        t[n] = n < 128 ? n << 1 : n << 1 ^ 283;
      }
      var r = 0;
      var i = 0;
      for (n = 0; n < 256; n++) {
        var e = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4;
        wn[r] = e = e >>> 8 ^ 255 & e ^ 99;
        var x = t[mn[e] = r];
        var a = t[x];
        var o = t[a];
        var c = 257 * t[e] ^ 16843008 * e;
        Sn[r] = c << 24 | c >>> 8;
        jn[r] = c << 16 | c >>> 16;
        On[r] = c << 8 | c >>> 24;
        Tn[r] = c;
        In[e] = (c = 16843009 * o ^ 65537 * a ^ 257 * x ^ 16843008 * r) << 24 | c >>> 8;
        kn[e] = c << 16 | c >>> 16;
        Rn[e] = c << 8 | c >>> 24;
        Pn[e] = c;
        r ? (r = x ^ t[t[t[o ^ x]]], i ^= t[t[i]]) : r = i = 1;
      }
    }();
    var Ln = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    var Nn = bn.extend({
      La: function () {
        if (!this.zb || this.Wd !== this.wb) {
          for (var t = this.Wd = this.wb, n = t.m, r = t.i / 4, i = 4 * ((this.zb = r + 6) + 1), e = this.Xd = [], x = 0; x < i; x++) {
            x < r ? e[x] = n[x] : (t = e[x - 1], x % r ? 6 < r && 4 == x % r && (t = wn[t >>> 24] << 24 | wn[t >>> 16 & 255] << 16 | wn[t >>> 8 & 255] << 8 | wn[255 & t]) : (t = wn[(t = t << 8 | t >>> 24) >>> 24] << 24 | wn[t >>> 16 & 255] << 16 | wn[t >>> 8 & 255] << 8 | wn[255 & t], t ^= Ln[x / r | 0] << 24), e[x] = e[x - r] ^ t);
          }
          for (n = this.Vd = [], r = 0; r < i; r++) {
            x = i - r;
            t = r % 4 ? e[x] : e[x - 4];
            n[r] = r < 4 || x <= 4 ? t : In[wn[t >>> 24]] ^ kn[wn[t >>> 16 & 255]] ^ Rn[wn[t >>> 8 & 255]] ^ Pn[wn[255 & t]];
          }
        }
      },
      ce: function (t, n) {
        this.tb(t, n, this.Xd, Sn, jn, On, Tn, wn);
      },
      be: function (t, n) {
        var r = t[n + 1];
        t[n + 1] = t[n + 3];
        t[n + 3] = r;
        this.tb(t, n, this.Vd, In, kn, Rn, Pn, mn);
        r = t[n + 1];
        t[n + 1] = t[n + 3];
        t[n + 3] = r;
      },
      tb: function (t, n, r, i, e, x, a, o) {
        for (var c = this.zb, u = t[n] ^ r[0], f = t[n + 1] ^ r[1], s = t[n + 2] ^ r[2], h = t[n + 3] ^ r[3], l = 4, v = 1; v < c; v++) {
          var d = i[u >>> 24] ^ e[f >>> 16 & 255] ^ x[s >>> 8 & 255] ^ a[255 & h] ^ r[l++];
          var b = i[f >>> 24] ^ e[s >>> 16 & 255] ^ x[h >>> 8 & 255] ^ a[255 & u] ^ r[l++];
          var p = i[s >>> 24] ^ e[h >>> 16 & 255] ^ x[u >>> 8 & 255] ^ a[255 & f] ^ r[l++];
          h = i[h >>> 24] ^ e[u >>> 16 & 255] ^ x[f >>> 8 & 255] ^ a[255 & s] ^ r[l++];
          u = d;
          f = b;
          s = p;
        }
        d = (o[u >>> 24] << 24 | o[f >>> 16 & 255] << 16 | o[s >>> 8 & 255] << 8 | o[255 & h]) ^ r[l++];
        b = (o[f >>> 24] << 24 | o[s >>> 16 & 255] << 16 | o[h >>> 8 & 255] << 8 | o[255 & u]) ^ r[l++];
        p = (o[s >>> 24] << 24 | o[h >>> 16 & 255] << 16 | o[u >>> 8 & 255] << 8 | o[255 & f]) ^ r[l++];
        h = (o[h >>> 24] << 24 | o[u >>> 16 & 255] << 16 | o[f >>> 8 & 255] << 8 | o[255 & s]) ^ r[l++];
        t[n] = d;
        t[n + 1] = b;
        t[n + 2] = p;
        t[n + 3] = h;
      },
      ge: 8
    });
    var En = bn.Ja(Nn);
    Vt.__$abe = s;
    Vt.__$abd = h;
    var Un;
    var Dn;
    var Bn;
    var Wn = !!$t.getBattery;
    var Gn = Vt.Promise;
    var Fn = [];
    bn = gn.extend({
      La: function () {
        this.ia = new an.g([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      ub: function (t, n) {
        for (var r, i = this.ia.m, e = i[0], x = i[1], a = i[2], o = i[3], c = i[4], u = 0; u < 80; u++) {
          u < 16 ? Fn[u] = 0 | t[n + u] : (r = Fn[u - 3] ^ Fn[u - 8] ^ Fn[u - 14] ^ Fn[u - 16], Fn[u] = r << 1 | r >>> 31);
          r = (e << 5 | e >>> 27) + c + Fn[u];
          r = u < 20 ? r + (1518500249 + (x & a | ~x & o)) : u < 40 ? r + (1859775393 + (x ^ a ^ o)) : u < 60 ? r + ((x & a | x & o | a & o) - 1894007588) : r + ((x ^ a ^ o) - 899497514);
          c = o;
          o = a;
          a = x << 30 | x >>> 2;
          x = e;
          e = r;
        }
        i[0] = i[0] + e | 0;
        i[1] = i[1] + x | 0;
        i[2] = i[2] + a | 0;
        i[3] = i[3] + o | 0;
        i[4] = i[4] + c | 0;
      },
      Ka: function () {
        var t = this.N;
        var n = t.m;
        var i = 8 * this.Na;
        var e = 8 * t.i;
        n[e >>> 5] |= 128 << 24 - e % 32;
        n[14 + (64 + e >>> 9 << 4)] = Math.floor(i / 4294967296);
        n[15 + (64 + e >>> 9 << 4)] = i;
        t.i = 4 * n.length;
        this.V();
        return this.ia;
      },
      clone: function () {
        var t = gn.clone.call(this);
        t.ia = this.ia.clone();
        return t;
      }
    });
    var qn = gn.Ja(bn);
    Nn = Vt.crypto;
    var zn = Vt.TextEncoder;
    var Kn = Vt.Uint8Array;
    var Vn = !!(zn && Nn && Nn.subtle && Nn.subtle.digest);
    var Xn = nn.acos || n;
    var Yn = nn.acosh || n;
    var $n = nn.asin || n;
    var Qn = nn.asinh || n;
    var Zn = nn.atanh || n;
    var tr = nn.atan || n;
    var nr = nn.sin || n;
    var rr = nn.sinh || n;
    var ir = nn.cos || n;
    var er = nn.cosh || n;
    var xr = nn.tan || n;
    var ar = nn.tanh || n;
    var or = nn.exp || n;
    var cr = nn.expm1 || n;
    var ur = nn.log1p || n;
    var fr = "about:blank" === Xt.URL;
    Bn = fr ? {
      setItem: function () {},
      getItem: function () {},
      Sa: function () {
        return {};
      }
    } : (Un = Vt.localStorage, Dn = Vt.sessionStorage, {
      setItem: function (t, n) {
        "object" == typeof n && (n = JSON.stringify(n));
        Un && Un.setItem(t, n);
        Dn && Dn.setItem(t, n);
      },
      getItem: function (t) {
        if (Un) {
          var n = Un.getItem(t);
          return n || (Dn ? Dn.getItem(t) : undefined);
        }
      },
      Sa: function (t) {
        try {
          return JSON.parse(Bn.getItem(t) || "{}");
        } catch (t) {
          return {};
        }
      }
    });
    var sr = Bn;
    var lr = {
      Z: {},
      start: function (t) {
        lr.Z[t] = o();
      },
      end: function (t) {
        lr.Z[t] = o() - lr.Z[t];
      },
      getTime: function (t) {
        return 13 !== ((t = undefined === lr.Z[t] ? "" : lr.Z[t]) + "").length ? t : "";
      },
      getData: function () {
        var t = [];
        t.push(lr.getTime("cid"));
        t.push(lr.getTime("biel"));
        t.push(lr.getTime("w"));
        t.push(lr.getTime("c"));
        t.push(lr.getTime("cn"));
        t.push(lr.getTime("cs"));
        t.push(lr.getTime("fs"));
        t.push(lr.getTime("codes"));
        return t.join(",");
      },
      addEventListener: function (t) {
        t.J("beforeSet", function (t) {
          switch (t) {
            case 3:
              lr.start("c");
              break;
            case 25:
              lr.start("w");
              break;
            case 78:
              lr.start("fs");
              break;
            case 82:
              lr.start("codes");
              break;
            case 41:
              lr.start("biel");
          }
        });
        t.J("afterSet", function (t) {
          switch (t) {
            case 3:
              lr.end("c");
              break;
            case 25:
              lr.end("w");
              break;
            case 78:
              lr.end("fs");
              break;
            case 82:
              lr.end("codes");
              break;
            case 41:
              lr.end("biel");
          }
        });
      }
    };
    xt.prototype.J = function (t, n) {
      var r = this.Cb;
      r[t] || (r[t] = []);
      r[t].push(n);
    };
    xt.prototype.o = function (t) {
      for (var n = this.Cb[t] || [], i = n.length, e = Array.prototype.slice.call(arguments, 1), x = 0; x < i; x++) {
        n[x].apply(this, e);
      }
    };
    var vr = {};
    (at.prototype = new xt()).set = function (t, n) {
      var i = this;
      var e = vr[this.oa];
      var x = e[t] || {};
      true !== x.ka && this.o("beforeSet", t, n);
      var a = this.Ra.set;
      "function" != typeof n ? (x.status = 2, x.value = a(n), x.ka = true, x.F = x.F || [], ot(x), this.o("afterSet", t, n)) : (x.status = 1, x.value = "", x.ka = true, x.F = x.F || [], x.ue = n(function (n) {
        x.status = 2;
        x.value = a(n);
        i.o("afterSet", t, n);
        ot(x);
      }));
      e[t] = x;
    };
    at.prototype.M = function () {
      var t = Array.prototype.slice.call(arguments);
      var n = t.length;
      var i = vr[this.oa];
      if (n < 1) {
        throw Error("set multiple field function arguments length must gt 0");
      }
      var e = typeof t[0];
      var x = t[n - 1];
      var a = this;
      if ("number" === e || "string" === e) {
        for (var o = n - 1, c = 0; c < o; c++) {
          (e = i[n = t[c]]) ? true !== e.ka && this.o("beforeSet", n) : (i[n] = {
            status: 1,
            value: "",
            F: [],
            ka: true
          }, this.o("beforeSet", n));
        }
        x(function () {
          var n = Array.prototype.slice.call(arguments);
          if (n.length !== o) {
            throw Error("setMult callback arguments count must eq set field count.");
          }
          for (var i = 0; i < o; i++) {
            a.set(t[i], n[i]);
          }
        });
      } else {
        if ("object" !== e) {
          throw Error("set mult field abnormal");
        }
        for (c in i = t[0]) {
          x = parseInt(c, 10);
          "NaN" !== x.toString() && (c = x);
          a.set(c, i[c]);
        }
      }
    };
    at.prototype.get = function (t, n) {
      var i = vr[this.oa];
      var e = i[t];
      var x = this.Ra.get;
      if (2 === (e = e || (i[t] = {
        status: 1,
        value: "",
        F: []
      })).status) {
        n(x(e.value));
      } else {
        if (1 !== e.status) {
          throw Error("field " + t + " status abnormal");
        }
        e.F.push(function (t) {
          return n(x(t));
        });
      }
    };
    at.prototype.X = function () {
      var t = this;
      var n = Array.prototype.slice.call(arguments);
      if ((o = n.length) <= 1) {
        throw Error("get multiple field function arguments length must gt 1");
      }
      for (var i = o - 1, e = n[o - 1], x = 0, a = [], o = 0; o < i; o++) {
        !function (o) {
          t.get(n[o], function (n) {
            x++;
            a[o] = n;
            x === i && e.apply(t, a);
          });
        }(o);
      }
    };
    at.prototype.Ta = function () {
      var t = arguments.length;
      var n = arguments[t - 1];
      var i = Array.prototype.slice.call(arguments, 0, t - 1);
      this.X.apply(this, i.concat([function () {
        for (var t = {}, e = Array.prototype.slice.call(arguments), x = 0; x < e.length; x++) {
          t[i[x]] = e[x];
        }
        n(t);
      }]));
    };
    at.prototype.pa = function (t, n) {
      function i() {
        if (!s) {
          s = true;
          e.o("compeled");
          var n;
          var i = [];
          for (n in u) {
            Object.hasOwnProperty.call(u, n) && u[n] && i.push(n);
          }
          t(c, i);
        }
      }
      var e = this;
      undefined === n && (n = 0);
      this.o("beforeCompele");
      var x;
      var a = vr[this.oa];
      var o = this.Ra.get;
      var c = {};
      var u = {};
      var f = 0;
      var s = false;
      for (x in 0 < n && setTimeout(i, n), a) {
        !function (t) {
          var n = a[t];
          if (1 === n.status) {
            f++;
            u[t] = 1;
            n.F.push(function (n) {
              u[t] = 0;
              c[t] = o(n);
              0 === --f && i();
            });
          } else {
            if (2 !== n.status) {
              throw Error("field " + t + " status abnormal");
            }
            c[t] = o(n.value);
          }
        }(x);
      }
      0 === f && i();
    };
    var dr = [78, 101, 103, 82];
    var br = [3, 8, 19, 25, 34];
    var pr = [5, 6, 9, 14, 15, 27];
    var _r = 100;
    var gr = 300;
    var wr = 400;
    var mr = 500;
    var Sr = 600;
    var jr = 700;
    var Or = {
      Od: -1,
      xd: -2,
      Ed: 1000,
      Gd: 2000,
      Md: 3000,
      Kd: 4002,
      Jd: 5000,
      Hd: 6000,
      oe: 7000
    };
    bn = $t.userAgent;
    Nn = ($t.userAgent || "").toLowerCase();
    var Tr = -1 < Nn.indexOf("headless");
    var Ir = !!$t.ta;
    var kr = "webdriver" in $t;
    var Rr = !!Vt.H;
    var Pr = 5 == (0 <= Nn.indexOf("firefox") ? 3 : 0 <= Nn.indexOf("opera") || 0 <= Nn.indexOf("opr") ? 4 : 0 <= Nn.indexOf("chrome") ? 1 : 0 <= Nn.indexOf("safari") ? 2 : 0 <= Nn.indexOf("trident") ? 5 : 6);
    var Ar = -1 < bn.indexOf("SE 2.X MetaSr 1.0");
    var Mr = -1 < bn.indexOf("QQBrowser");
    var Cr = -1 < Nn.indexOf("miniprogram") || "miniprogram" === Vt.D;
    var Lr = new xt();
    var Nr = false;
    Lr.J("EVAK_CALL", function (t) {
      var n = -1 < t.indexOf("evaluate@") && -1 < t.indexOf("callFunctionOn@");
      var i = function () {
        if (!t) {
          return false;
        }
        for (var n = t.split("\n"), i = 0; i < n.length - 1; i++) {
          if (-1 < n[i].indexOf("evaluate@debugger") && n[i + 1] && 0 === n[i + 1].indexOf("@debugger")) {
            return !n[i + 2];
          }
        }
        return false;
      }();
      (Nr = -1 < t.indexOf("at UtilityScript.evaluate") || n || i) && dt("p", o());
    });
    var Er = ["cc11001100_hook", "vpn_set_obj", "vpn_get_obj", "vpn_fn_call"];
    var Ur = "ai";
    var Dr = "bc";
    var Br = "ac";
    var Hr = "ars";
    var Jr = "c";
    var Wr = "barc";
    var Gr = "berc";
    var Fr = "bcrc";
    var qr = [];
    bn = {};
    bn[Ur] = function (t) {
      var n = o();
      x(Xt, "mousemove", function (t) {
        var i = t.clientX;
        t = t.clientY;
        var e = o();
        qr.unshift([i, t, e - n]);
        qr = qr.slice(0, 20);
      });
      t.J(Dr, function () {
        t.C.set(130, JSON.stringify(qr));
        t.C.set(136, Ct());
      });
      t.J(Wr, function () {
        t.C.set(130, JSON.stringify(qr));
        t.C.set(136, Ct());
      });
      t.J(Gr, function (t) {
        t.ma.set(130, JSON.stringify(qr));
        t.ma.set(136, Ct());
      });
      t.J(Fr, function (t) {
        t.na.set(130, JSON.stringify(qr));
        t.na.set(136, Ct());
      });
    };
    Nn = {};
    Nn[Ur] = function (t) {
      t.J(Dr, function () {
        var n = t.C;
        n.get(81, function (t) {
          t && Lt(n);
        });
      });
    };
    Nn[Hr] = function (t, n, e) {
      i(function () {
        if (e && (n = e.getResponseHeader("Authentication"))) {
          var n;
          var i = (n = h(n.substr(0, n.length - 16), n.substr(-16), "636014d173e04409").split("|")).length;
          if (0 < i && 0 == i % 2) {
            for (var x = {}, a = 0; a < i; a += 2) {
              x[n[a]] = n[a + 1];
            }
            -1 < [x[83], x[86]].indexOf("1") && (Lt.Ld || Lt(t.C));
          }
        }
      });
    };
    var zr;
    var Kr;
    var Vr = [bn, Nn];
    var Xr = 0;
    var Yr = "";
    var $r = 1;
    var Qr = 2;
    var Zr = 3;
    var ti = 4;
    var ni = 5;
    var ri = 6;
    var ii = 7;
    var ei = 8;
    var xi = 9;
    var ai = 10;
    var oi = 11;
    var ci = 13;
    var ui = 14;
    var fi = 15;
    var si = 16;
    var hi = 17;
    var li = 18;
    var vi = 19;
    var di = 20;
    var bi = 110;
    var yi = 0;
    var _i = 0;
    var gi = 0;
    var wi = 0;
    var mi = 0;
    var Si = 0;
    var ji = 0;
    var Oi = 0;
    var Ti = 0;
    var Ii = 0;
    Bt.prototype.qa = function () {
      var t = this;
      this.he();
      Dt(function (n) {
        n && Ht(t, false);
      });
      setTimeout(function () {
        Ht(t, true);
      }, 3000);
    };
    var ki = !(Bt.prototype.he = function () {
      var t;
      var n;
      var i = this;
      t = function () {
        Ht(i, false);
      };
      x(Vt, "devicemotion", zr = function (n) {
        var i = n.accelerationIncludingGravity;
        i && (yi = i.x || 0, _i = i.y || 0, gi = i.z || 0);
        (i = n.acceleration) && (wi = i.x || 0, mi = i.y || 0, Si = i.z || 0);
        (n = n.rotationRate) && (ji = n.alpha || 0, Oi = n.beta || 0, Ti = n.gamma || 0);
        0 !== Ii || 0 === wi && 0 === mi && 0 === Si || (Ii = o());
        t();
      });
      n = function (t) {
        var n;
        var e;
        n = t;
        e = i.ma;
        i.ja.C.X(101, 103, function (t, i) {
          var x;
          var a = o();
          var c = (b = [wi, mi, Si, yi, _i, gi, ji, Oi, Ti])[0];
          var u = b[1];
          var f = b[2];
          var s = b[3];
          var h = b[4];
          var l = b[5];
          var v = b[6];
          var d = b[7];
          var b = b[8];
          e.M(((x = {})[$r] = n.type, x[Qr] = n.clientX, x[Zr] = n.clientY, x[ti] = n.pageX, x[ni] = n.pageY, x[ri] = function (t) {
            t: {
              for (var i = n.target, e = []; i && 1 === i.nodeType; i = i.parentNode) {
                if (i.hasAttribute("id")) {
                  e.unshift("id(\"" + i.getAttribute("id") + "\")");
                  i = e.join("/");
                  break t;
                }
                if (i.hasAttribute("class")) {
                  e.unshift(i.localName.toLowerCase() + "[@class=\"" + i.getAttribute("class") + "\"]");
                } else {
                  for (var x = 1, a = i.previousSibling; a; a = a.previousSibling) {
                    a.localName === i.localName && x++;
                  }
                  e.unshift(i.localName.toLowerCase() + "[" + x + "]");
                }
              }
              i = e.length ? "/" + e.join("/") : null;
            }
            return t(i);
          }, x[ii] = a, x[ei] = c, x[xi] = u, x[ai] = f, x[oi] = undefined === n.isTrusted ? 2 : n.isTrusted ? 1 : 0, x[ci] = s, x[ui] = h, x[fi] = l, x[si] = v, x[hi] = d, x[li] = b, x[vi] = j, x[di] = a - i, x[bi] = U, x[101] = t, x[103] = a, x[106] = 2055, x[107] = "3.11.3", x[109] = function (t) {
            return D(function (n) {
              t(2500 < n.length ? "-1" : n);
            });
          }, x[200] = 2, x));
        });
        i.ja.o(Gr, i);
        i.ma.pa(function (t) {
          Jt(t);
        });
      };
      x(Xt, "click", Kr = function (t) {
        Kr && a(Xt, "click", Kr);
        n(t);
      });
    });
    var Ri = Vt.String;
    (Ft.prototype = new xt()).g = function () {
      this.Ua = true;
      var t;
      var n = o();
      this.C.set(103, n);
      t = this.C;
      n = this;
      ki && !n || (ki = true, t.set(101, function (n) {
        t.get(103, function (t) {
          var i = Xt.URL;
          var e = Xt.referrer;
          var x = $t.userAgent || "";
          lr.start("cid");
          tt("anti-bot-df" + Math.random() + i + e + x + t, function (t) {
            lr.end("cid");
            n(t);
          });
        });
      }));
      t.get(101, function (t) {
        e("__abbaidu_2055_cidcb", [t]);
        e("__abbaidu_20180315_cidcb", [t]);
      });
      lr.start("t");
      this.fe(Vr);
    };
    Ft.prototype.je = function (t) {
      this.ra.push(t);
    };
    Ft.prototype.de = function () {
      this.Hb = true;
      this.ra.length && (this.ra.forEach(function (t) {
        t();
      }), this.ra = []);
    };
    Ft.prototype.fe = function (t) {
      function n(n) {
        e.J(n, function () {
          for (var e = arguments, x = this, a = 0, o = t.length; a < o; a++) {
            !function (a) {
              var o = t[a][n];
              o && i(function () {
                o.apply(x, e);
              });
            }(a);
          }
        });
      }
      var e = this;
      n(Ur);
      n(Br);
      n(Hr);
    };
    Ft.prototype.qa = function (t) {
      var n = this;
      this.g();
      var i = this.C;
      this.o(Ur, this);
      lr.addEventListener(i);
      Q(i);
      Et(i);
      Mt(i);
      et(i);
      this.o(Dr, this);
      i.pa(function (i, e) {
        n.o(Jr, n);
        i[32] = o() - i[103];
        i[402] = e.join(",");
        t(i);
        n.de();
      }, 0);
    };
    Ft.prototype.Wa = function (t) {
      var n = t.url;
      var i = t.data;
      var x = this;
      var a = t.Y || v;
      t = t.error || function (t) {
        return e("__abbaidu_2055_onerror", [t]);
      };
      lr.end("t");
      b({
        url: n || "https://miao.baidu.com/abdr?_o=" + encodeURIComponent(Yt.protocol + "//" + Yt.host),
        data: i,
        Y: function (t, n) {
          x instanceof Ft && x.o(Hr, x, t, n);
          a(t, n);
        },
        error: t
      });
    };
    Ft.prototype.Fb = function () {
      this.Td || (this.Td = true, new Bt(this).qa());
    };
    (Nn = Ft).prototype.Eb = function (t, n) {
      function i() {
        var i;
        var a;
        var o;
        o = x;
        a = f((i = t) && i.extraData, "");
        i = f(i && i.subid, Vt.__abbaidu_2055_subidgetf);
        o.M(((o = {})[114] = i, o[160] = a, o));
        (o = x).M(((o = {})[108] = B, o[200] = "4", o));
        e.o(Wr);
        x.pa(function (t) {
          n(t);
        });
      }
      var e = this;
      var x = this.C;
      this.Hb ? i() : this.je(i);
    };
    Nn.prototype.ae = function (t) {
      var n = this;
      t = t || {};
      this.Eb(t, function (i) {
        var e = t.success;
        var x = t.error;
        d(i);
        i = l(i);
        n.Wa({
          data: i,
          Y: e,
          error: x
        });
      });
    };
    Nn = !!Vt.__abbaidu_2055_paris;
    var Ai = !!Vt.__abbaidu_2055_advanced || Nn;
    Nn = zt();
    Ai || Nn();
  })();
}();