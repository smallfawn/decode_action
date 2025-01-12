//Sun Jan 12 2025 12:12:04 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function () {
  var w = {
    669: function (y, N, G) {
      "use strict";

      var M = {
        f4: function () {
          return O;
        },
        f5: function () {
          return J;
        },
        f6: function () {
          return E;
        },
        f7: function () {
          return C;
        },
        f8: function () {
          return K;
        },
        f9: function () {
          return v;
        },
        ff: function () {
          return H;
        },
        fA: function () {
          return P;
        }
      };
      G.d(N, M);
      var W = G(376);
      var x = G(980);
      var S = G(606);
      var U = G(554);
      var Q = ["type__", "refer__", "ipcity__", "md5__", "decode__", "encode__", "time__", "timestamp__", "type__"];
      var T = {};
      function V(j) {
        return j + "_dySig";
      }
      var F = {
        fw: function (j) {
          return !!(0, S.fD)(V(j.host));
        },
        fR: function (j) {
          (0, S.fy)(V(j.host), "true", 43200000);
        },
        un: function (j) {
          return !((0, U.fN)(j) || j.host.match(/(cloudauth-device|captcha-(pro-)?open).*?\.aliyuncs\.com$/) || !F.fw(j));
        },
        fp: function (j) {
          for (var k = 0, q = encodeURIComponent(j), I = 0; I < q.length; I++) {
            k = (k << 7) - k + 398 + q.charCodeAt(I);
            k |= 0;
          }
          return k;
        },
        uf: function (j, k) {
          return !!F.un(j) && F.fu(j, k);
        },
        fG: function (j) {
          if (T[j]) {
            return T[j];
          }
          for (var k = 0, q = 0; q < j.length; q++) {
            k += j[q].charCodeAt();
          }
          var I = Q[k % Q.length] + k % 10000;
          return T[j] = I;
        },
        fL: function (j) {
          var k = (0, U.fb)(j).host;
          var k = F.fG(k);
          return (0, U.fM)(j, k);
        },
        fu: function (j, k) {
          var q = (0, U.fW)(j, true);
          k && (q += k);
          k = F.fp(q) + "|" + (0, W.n)() + "|" + new Date().getTime() + "|1";
          q = x.fh.ua(k, true);
          k = {};
          k[F.fG(j.host)] = q;
          j.search = (0, U.fx)(j.search, k);
          return (0, U.fW)(j);
        }
      };
      var P = F.uf;
      F.fu;
      var E = F.fL;
      var O = F.fR;
      var K = F.fG;
      var v = 30;
      var J = 0;
      function C() {
        J++;
      }
      function H(j) {
        return -1 < j.indexOf("var".concat(" _0x2576")) && -1 < j.indexOf("duCiQ',".concat("'MOvsy")) || -1 < j.indexOf("function r(a".concat(",J)")) && -1 < j.indexOf("IunBRbfp7MLmwv6AckTt".concat("iY1jgrHZxGhlzW3aVPqEFN5J")) || -1 < j.indexOf("function e(l".concat(",m)")) && -1 < j.indexOf("6l9vPJp1BwS5GC".concat("Ae8L70NoszbtVcuhx3igmdrFf")) || -1 < j.indexOf("aliyun_".concat("waf_")) && -1 < j.indexOf("371ac51ab53".concat("fc53eb6bf9aa462a72e9f")) && -1 < j.indexOf("b63e746d3d0".concat("f33fa6ce3709868ba5f8b"));
      }
    },
    540: function (y, N, p) {
      "use strict";

      var L = {
        fS: function () {
          return S;
        },
        fU: function () {
          return U;
        },
        fQ: function () {
          return Q;
        },
        fd: function () {
          return x;
        }
      };
      p.r(N);
      p.d(N, L);
      var b = p(429);
      var M = p(606);
      var W = p(554);
      var h = p(170);
      var x = "acw_sc__v2";
      function S(m, T) {
        h.fm[h.fT] && (0, W.ft)(m, location.href) && Q(m, T);
        (0, b.fV)(x, T, 3600000);
      }
      function U(m) {
        return m + "_" + x;
      }
      function Q(m, T) {
        m = (0, W.fb)(m).host;
        (0, M.fy)(U(m), T);
      }
    },
    721: function (y, N, u) {
      var G = u(540).fS;
      y.exports = {
        fF: function (L, b) {
          for (var M = JSON.parse("[15, 35, 29, 24, 33, 16, 1, 38, 10, 9, 19, 31, 40, 27, 22, 23, 25, 13, 6, 11,39,18,20,8, 14, 21, 32, 26, 2, 30, 7, 4, 17, 5, 3, 28, 34, 37, 12, 36]"), W = "3000176000856006061501533003690027800375", h = [], x = "", S = "", U = 0; U < L.length; U++) {
            for (var Q = L[U], m = 0; m < M.length; m++) {
              M[m] == U + 1 && (h[m] = Q);
            }
          }
          for (x = h.join(""), U = 0; U < x.length && U < W.length; U += 2) {
            var T = (parseInt(x.slice(U, U + 2), 16) ^ parseInt(W.slice(U, U + 2), 16)).toString(16);
            S += T = 1 == T.length ? "0" + T : T;
          }
          G(b, S);
        }
      };
    },
    170: function (y, N, G) {
      "use strict";

      var L = {
        fm: function () {
          return S;
        },
        fo: function () {
          return b;
        },
        fP: function () {
          return M;
        },
        fE: function () {
          return W;
        },
        fT: function () {
          return x;
        },
        fs: function () {
          return h;
        }
      };
      G.d(N, L);
      var b = window;
      var M = b.document;
      var W = b.navigator;
      var h = "2.1.5d";
      var x = "xdomain";
      var S = {
        x: true
      };
      var U = M.currentScript;
      if (!U) {
        for (var Q = M.getElementsByTagName("script"), m = 0; m < Q.length; ++m) {
          if ("6cc076e6727a87d6" == Q[m].getAttribute("id")) {
            U = Q[m];
            break;
          }
        }
      }
      U && "false" == U.getAttribute(x) && (S[x] = false);
    },
    376: function (y, N, p) {
      "use strict";

      var L = {
        n: function () {
          return W;
        }
      };
      p.d(N, L);
      var b;
      var M = p(170);
      function W(h) {
        function S(P) {
          return P ? 1 : 0;
        }
        var U = "";
        try {
          U = M.fP.documentElement.getAttribute && M.fP.documentElement.getAttribute("webdriver");
        } catch (P) {}
        var Q;
        var m = 0;
        M.fo.hasOwnProperty && Object.keys(M.fP).forEach(function (E) {
          var O = M.fo.document[E];
          (0 == E.indexOf("$cdc_asdjflasutopfhvcZLmcfl_") || O && O.hasOwnProperty("idPrefix_") && O.hasOwnProperty("cache_") && O.hasOwnProperty("nextId_")) && (m = 1);
        });
        1 != m && (Q = new RegExp("^cdc_[a-zA-Z0-9]{22}_"), Object.keys(M.fo).forEach(function (E) {
          "$chrome_asyncScriptInfo" != E && !Q.test(E) || (m = 1);
        }));
        var T = new Date();
        var V = 0;
        T.toString = function () {
          if (2 == ++V) {
            return "";
          }
        };
        b && b(T);
        var F = 0;
        var F = (F = (F = (F = (F = (F = (F = (F = (F = (F = (F = (F = (F = (F = (F = (F |= ((1 < V ? 1 : 0) ? 1 : 0) << 0) | S(M.fE.webdriver) << 1) | (m ? 1 : 0) << 2) | S(M.fo._phantom) << 3) | S(M.fo.callPhantom) << 4) | S(M.fo.phantom) << 5) | S(M.fo.spawn) << 6) | S(M.fo.emit) << 7 | (U ? 1 : 0) << 8) | S(M.fo.Buffer) << 9) | S(M.fo.domAutomation) << 10) | S(M.fo.webdriver) << 11) | S(M.fP.__webdriver_script_fn) << 12) | S(M.fo.fxdriver_id) << 13) | S(M.fo.__fxdriver_unwrapped) << 14) | S(M.fo.ClientUtils) << 15) | S(M.fo.__nightmare) << 16;
        W = function () {
          return F;
        };
        return F;
      }
      M.fo.console && (b = M.fo.console.log.bind(M.fo.console), M.fo.console.debug.bind(M.fo.console));
    },
    429: function (y, N, p) {
      "use strict";

      var u = {
        fV: function () {
          return b;
        }
      };
      p.d(N, u);
      var G = p(554);
      var L = p(170);
      function b(M, W, h, x) {
        var x = x || (0, G.cd)();
        var S = "number" == typeof h ? ((S = new Date()).setTime(S.getTime() + h), S.toGMTString()) : h;
        L.fP.cookie = M + "=" + W + ";expires=" + S + ";path=/;domain=" + x;
      }
    },
    980: function (y, N, p) {
      "use strict";

      var G = {
        fh: function () {
          return b;
        }
      };
      p.d(N, G);
      var L;
      L = {
        ua: function (M, W) {
          if (null == M) {
            return "";
          }
          var S = L.uu(M, 6, function (m) {
            return "DGi0YA7BemWnQjCl4+bR3f8SKIF9tUz/xhr2oEOgPpac=61ZqwTudLkM5vHyNXsVJ".charAt(m);
          });
          if (W) {
            return S;
          }
          switch (S.length % 4) {
            default:
            case 0:
              return S;
            case 1:
              return S + "===";
            case 2:
              return S + "==";
            case 3:
              return S + "=";
          }
        },
        uu: function (M, W, x) {
          if (null == M) {
            return "";
          }
          for (var S, U, Q, m, T = {}, V = {}, F = "", P = 2, E = 3, O = 2, K = [], v = 0, J = 0, C = 0; C < M.length; C += 1) {
            if (Q = M.charAt(C), Object.prototype.hasOwnProperty.call(T, Q) || (T[Q] = E++, V[Q] = true), m = F + Q, Object.prototype.hasOwnProperty.call(T, m)) {
              F = m;
            } else {
              if (Object.prototype.hasOwnProperty.call(V, F)) {
                if (F.charCodeAt(0) < 256) {
                  for (S = 0; S < O; S++) {
                    v <<= 1;
                    J == W - 1 ? (J = 0, K.push(x(v)), v = 0) : J++;
                  }
                  for (U = F.charCodeAt(0), S = 0; S < 8; S++) {
                    v = v << 1 | 1 & U;
                    J == W - 1 ? (J = 0, K.push(x(v)), v = 0) : J++;
                    U >>= 1;
                  }
                } else {
                  for (U = 1, S = 0; S < O; S++) {
                    v = v << 1 | U;
                    J == W - 1 ? (J = 0, K.push(x(v)), v = 0) : J++;
                    U = 0;
                  }
                  for (U = F.charCodeAt(0), S = 0; S < 16; S++) {
                    v = v << 1 | 1 & U;
                    J == W - 1 ? (J = 0, K.push(x(v)), v = 0) : J++;
                    U >>= 1;
                  }
                }
                0 == --P && (P = Math.pow(2, O), O++);
                delete V[F];
              } else {
                for (U = T[F], S = 0; S < O; S++) {
                  v = v << 1 | 1 & U;
                  J == W - 1 ? (J = 0, K.push(x(v)), v = 0) : J++;
                  U >>= 1;
                }
              }
              0 == --P && (P = Math.pow(2, O), O++);
              T[m] = E++;
              F = String(Q);
            }
          }
          if ("" !== F) {
            if (Object.prototype.hasOwnProperty.call(V, F)) {
              if (F.charCodeAt(0) < 256) {
                for (S = 0; S < O; S++) {
                  v <<= 1;
                  J == W - 1 ? (J = 0, K.push(x(v)), v = 0) : J++;
                }
                for (U = F.charCodeAt(0), S = 0; S < 8; S++) {
                  v = v << 1 | 1 & U;
                  J == W - 1 ? (J = 0, K.push(x(v)), v = 0) : J++;
                  U >>= 1;
                }
              } else {
                for (U = 1, S = 0; S < O; S++) {
                  v = v << 1 | U;
                  J == W - 1 ? (J = 0, K.push(x(v)), v = 0) : J++;
                  U = 0;
                }
                for (U = F.charCodeAt(0), S = 0; S < 16; S++) {
                  v = v << 1 | 1 & U;
                  J == W - 1 ? (J = 0, K.push(x(v)), v = 0) : J++;
                  U >>= 1;
                }
              }
              0 == --P && (P = Math.pow(2, O), O++);
              delete V[F];
            } else {
              for (U = T[F], S = 0; S < O; S++) {
                v = v << 1 | 1 & U;
                J == W - 1 ? (J = 0, K.push(x(v)), v = 0) : J++;
                U >>= 1;
              }
            }
            0 == --P && (P = Math.pow(2, O), O++);
          }
          for (U = 2, S = 0; S < O; S++) {
            v = v << 1 | 1 & U;
            J == W - 1 ? (J = 0, K.push(x(v)), v = 0) : J++;
            U >>= 1;
          }
          for (;;) {
            if (v <<= 1, J == W - 1) {
              K.push(x(v));
              break;
            }
            J++;
          }
          return K.join("");
        }
      };
      var b = L;
    },
    606: function (y, N, p) {
      "use strict";

      var L = {
        fD: function () {
          return Q;
        },
        fy: function () {
          return U;
        }
      };
      p.d(N, L);
      var b = "||";
      var M = undefined;
      function W() {
        this.storage = {};
      }
      function h() {
        return M = M || (function () {
          try {
            var V = "aliyun_waf_testLocalStorage";
            localStorage.setItem(V, V);
            localStorage.removeItem(V);
            return 1;
          } catch (F) {}
        }() ? localStorage : new W());
      }
      W.prototype.setItem = function (m, T) {
        this.storage[m] = T;
      };
      W.prototype.getItem = function (m) {
        return this.storage[m];
      };
      W.prototype.removeItem = function (m) {
        delete this.storage[m];
      };
      var x = {};
      function S(m, T) {
        T = T || 1800000;
        return m + b + (new Date().getTime() + T);
      }
      function U(m, T, V) {
        var F = h();
        T = S(T, V);
        x[m] = T;
        F.setItem(m, T);
      }
      function Q(m) {
        var T;
        var V;
        var F = h();
        var P = x[m] || F.getItem(m);
        return P ? (V = (T = P.split(b))[1]) && new Date().getTime() > parseInt(V) ? (F.removeItem(m), void delete x[m]) : (x[m] = P, T[0]) : (x[m] = S("", 300000), "");
      }
    },
    554: function (y, N, G) {
      "use strict";

      var b = {
        fN: function () {
          return m;
        },
        fx: function () {
          return Q;
        },
        ft: function () {
          return V;
        },
        cd: function () {
          return S;
        },
        fW: function () {
          return T;
        },
        fb: function () {
          return U;
        },
        fM: function () {
          return F;
        }
      };
      G.d(N, b);
      var M = G(170);
      var W = {};
      var x = /^(ac\.cn|ac\.id|ah\.cn|bj\.cn|club\.tw|co\.id|co\.jp|co\.kr|co\.nz|co\.uk|com\.cn|com\.hk|com\.mo|com\.my|com\.sg|com\.tw|cq\.cn|ebiz\.tw|edu\.cn|edu\.hk|edu\.mo|edu\.tw|fj\.cn|game\.tw|gd\.cn|go\.id|gov\.cn|gov\.hk|gov\.mo|gov\.my|gov\.ph|gov\.tw|gs\.cn|gx\.cn|gz\.cn|ha\.cn|hb\.cn|he\.cn|hi\.cn|hk\.cn|hl\.cn|hn\.cn|idv\.hk|idv\.tw|jl\.cn|js\.cn|jx\.cn|ln\.cn|mil\.cn|mil\.tw|mo\.cn|net\.cn|net\.hk|net\.mo|net\.tw|nm\.cn|nx\.cn|org\.cn|org\.hk|org\.mo|org\.tw|qh\.cn|sc\.cn|sd\.cn|sh\.cn|sn\.cn|sx\.cn|tj\.cn|tw\.cn|us\.org|xj\.cn|xz\.cn|yn\.cn|zj\.cn)$/;
      function S() {
        var P;
        var E;
        var O = M.fP.location.host.split(":")[0];
        W[O] ? O = W[O] : 2 < (E = (P = O.split(".")).length) && !/^(\d+\.)*\d+$/.test(O) && (O = P[E - 2] + "." + P[E - 1], x.test(O)) && (O = P[E - 3] + "." + O);
        return O;
      }
      function U(P) {
        var E = M.fP.createElement("div");
        E.innerHTML = "<a></a>";
        E.firstChild.href = P;
        E.innerHTML = E.innerHTML;
        (P = E.firstChild).href = E.firstChild.href;
        return {
          protocol: P.protocol,
          host: P.host,
          hostname: P.hostname,
          port: P.port,
          pathname: "/" === P.pathname.substr(0, 1) ? P.pathname : "/" + P.pathname,
          search: P.search,
          hash: P.hash,
          fi: P.href
        };
      }
      function Q(P, E) {
        if (0 != Object.keys(E).length) {
          var O;
          var K = "";
          for (O in E) K += encodeURIComponent(O) + "=" + encodeURIComponent(E[O]) + "&";
          if (K = K.slice(0, K.length - 1), 0 == P.length) {
            P = "?" + K;
          } else {
            for (var v = P.slice(1).split("&"), J = [], C = Object.keys(E), H = 0; H < v.length; H++) {
              O = decodeURIComponent(v[H].split("=", 1)[0]);
              -1 == C.indexOf(O) && J.push(v[H]);
            }
            P = "?" + (0 == J.length ? "" : J.join("&") + "&") + K;
          }
        }
        return P;
      }
      function m(P) {
        return !(!P.protocol || "data:" != P.protocol && "blob:" != P.protocol);
      }
      function T(P, E) {
        var O = m(P);
        var K = P.pathname;
        O && 0 == K.indexOf("/") && (K = P.pathname.slice(1));
        return P.protocol + (O ? "" : "//" + P.host) + K + P.search + (E ? "" : P.hash);
      }
      function V(P, E) {
        return M.fo.top !== M.fo.self || !(m(P = U(P)) || (E = U(E), P.host == E.host && P.protocol == E.protocol));
      }
      function F(P, E) {
        if (-1 == P.indexOf(E + "=")) {
          return P;
        }
        var H = U(P);
        if (!H.search) {
          return P;
        }
        var v = H.search.slice(1).split("&");
        if (0 == v.length) {
          return P;
        }
        for (var J = [], C = 0; C < v.length; ++C) {
          0 != v[C].indexOf(E + "=") && J.push(v[C]);
        }
        H.search = 0 == J.length ? "" : "?" + J.join("&");
        return T(H);
      }
    }
  };
  var D = {};
  function R(y) {
    var N = D[y];
    var p = {
      exports: {}
    };
    undefined !== N || (N = D[y] = p, w[y](N, N.exports, R));
    return N.exports;
  }
  R.d = function (y, N) {
    for (var p in N) R.fc(N, p) && !R.fc(y, p) && Object.defineProperty(y, p, {
      enumerable: true,
      get: N[p]
    });
  };
  R.fc = function (y, N) {
    return Object.prototype.hasOwnProperty.call(y, N);
  };
  R.r = function (y) {
    var N = {
      value: true
    };
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(y, Symbol.toStringTag, {
      value: "Module"
    });
    Object.defineProperty(y, "__esModule", N);
  };
  !function () {
    "use strict";

    var AA = R(554);
    var Aw = R(429);
    var AD = R(980);
    var AR = R(170);
    var Ay = R(376);
    function AN(wJ, wr, wC) {
      for (var wH = 0, wl = wr, wj = wJ.length, wn = wC || 1; wl < wj;) {
        wH = (wH = (wH << 5) - wH) + wJ.charCodeAt(wl) >>> 0;
        wl += wn;
      }
      return wH;
    }
    AG = [];
    AL = AR.fP.documentElement;
    Ao = AL.doScroll;
    Ab = "DOMContentLoaded";
    Ax = "addEventListener";
    AM = "onreadystatechange";
    AW = "readyState";
    Ah = (Ao ? /^loaded|^c/ : /^loaded|c/).test(AR.fP[AW]);
    AR.fP[Ax] && AR.fP[Ax](Ab, Au = function () {
      AR.fP.removeEventListener(Ab, Au, false);
      AS();
    }, false);
    Ao && AR.fP.attachEvent(AM, Au = function () {
      /^c/.test(AR.fP[AW]) && (AR.fP.detachEvent(AM, Au), AS());
    });
    var Ap;
    var Au;
    var AG;
    var AL;
    var Ab;
    var AM;
    var AW;
    var Ah;
    Ap = Ao ? function (wJ) {
      if (self != top) {
        Ah ? wJ() : AG.push(wJ);
      } else {
        try {
          AL.doScroll("left");
        } catch (wC) {
          return void setTimeout(function () {
            Ap(wJ);
          }, 50);
        }
        wJ();
      }
    } : function (wJ) {
      Ah ? wJ() : AG.push(wJ);
    };
    var Ax = Ap;
    function AS(wJ) {
      for (Ah = 1; wJ = AG.shift();) {
        wJ();
      }
    }
    var AU;
    var AQ = false;
    function Ad() {
      AR.fo.aliyun_csp_inline_test && (AQ = true, delete AR.fo.aliyun_csp_inline_test);
      AU.remove();
      delete AR.fo.aliyun_csp_inline_test_func;
    }
    function Am(wJ) {
      var wr = AR.fP.createElement("style");
      wr.type = "text/css";
      try {
        wr.appendChild(AR.fP.createTextNode(wJ));
      } catch (wC) {
        wr.styleSheet.cssText = wJ;
      }
      return wr;
    }
    function AT() {
      return AR.fP.head || AR.fP.getElementsByTagName("head")[0];
    }
    AU = document.createElement("script");
    AR.fo.aliyun_csp_inline_test_func = AU.text = "window.aliyun_csp_inline_test = 1;aliyun_csp_inline_test_func()";
    Ao = document.head.firstChild;
    AR.fo.aliyun_csp_inline_test_func = Ad;
    document.head.insertBefore(AU, Ao);
    setTimeout(function () {
      Ad();
    }, 200);
    if (!AR.fo._waf_async_initialized1) {
      var AF;
      var Ao = function (wJ, wr) {
        var wk = 0;
        return function () {
          var wq = arguments;
          var wI = Date.now();
          wr <= wI - wk && (wk = wI, wJ.apply(this, wq));
        };
      };
      AR.fo._waf_async_initialized1 = true;
      var AP = new Date().getTime();
      var AE = "websdk" + AR.fs;
      var As = [];
      var Ai = [];
      var Ac = [];
      var AO = [];
      var AK = [];
      var Aa = false;
      ("ontouchstart" in window || navigator.maxTouchPoints) && (Aa = true);
      var Av = [0];
      var AJ = (0, AA.cd)();
      var Ar = Ao(function () {
        (0, Aw.fV)("ssxmod_itna", Aa ? AD.fh.ua(As.join("^") + "M" + AO.length + "^" + AK.length + "^" + Av.length) : AD.fh.ua(As.join("^") + "P" + Ai.length + "^" + Ac.length + "^" + Av.length), wb, AJ);
        (0, Aw.fV)("ssxmod_itna2", Aa ? AD.fh.ua(As.slice(0, 4).join("^") + "tm" + w0 + "|" + AO.join("|") + "tc" + w3 + "|" + AK.join("|") + "kb" + Av.join("|")) : AD.fh.ua(As.slice(0, 4).join("^") + "mm" + An + "|" + Ai.join("|") + "mc" + AZ + "|" + Ac.join("|") + "kb" + Av.join("|")), wb, AJ);
      }, 60);
      undefined !== AR.fP.hidden ? (AF = "hidden", Aq = "visibilitychange") : undefined !== AR.fP.mozHidden ? (AF = "mozHidden", Aq = "mozvisibilitychange") : undefined !== AR.fP.msHidden ? (AF = "msHidden", Aq = "msvisibilitychange") : undefined !== AR.fP.webkitHidden && (AF = "webkitHidden", Aq = "webkitvisibilitychange");
      AR.fP.addEventListener && AF ? AR.fP.addEventListener(Aq, function () {
        !AR.fP[AF] && 20 < As.length && As[20]++;
      }) : AR.fP.attachEvent && AR.fP.attachEvent("on" + Aq, function () {
        !AR.fP[AF] && 20 < As.length && As[20]++;
      });
      var AC = 0;
      var AH = 0;
      var Al = AP;
      var Aj = 0;
      var An = 0;
      var Ak = !AR.fP.addEventListener && AR.fP.attachEvent;
      var Aq = Ao(function (wJ) {
        var wr;
        var wC;
        var wH;
        var wl;
        Aa || (Ak && (wJ = AR.fo.event), 100 < Aj && (wr = Ai[1].split("+"), wC = Ai[0].split("+"), Ai[1] = parseInt(wr[0]) + parseInt(wC[0]) + "+" + (parseInt(wr[1]) + parseInt(wC[1])) + "+" + (parseInt(wr[2]) + parseInt(wC[2])), Ai.shift()), Aj++, wr = wJ.pageX, wC = wJ.pageY, undefined === wr && (wH = AR.fP.body ? AR.fP.body.scrollLeft : 0, wl = AR.fP.body ? AR.fP.body.scrollTop : 0, wr = wJ.clientX + wH, wC = wJ.clientY + wl), wH = wr - AC, wJ = wC - AH, wl = new Date().getTime() - Al, 1 == Aj && (An = wl), As[3]++, Ai.push(wH + "+" + wJ + "+" + wl), Ar(), AC = wr, AH = wC, Al += wl);
      }, 30);
      AR.fP.addEventListener ? AR.fP.addEventListener("mousemove", Aq, true) : AR.fP.attachEvent && AR.fP.attachEvent("onmousemove", Aq);
      var AI = AP;
      var Az = 0;
      var AZ = 0;
      var Aq = function (wJ) {
        var wr;
        var wC;
        var wH;
        var wl;
        Aa || (Ak && (wJ = AR.fo.event), 10 < Az && Ac.shift(), Az++, wH = wJ.pageX, wl = wJ.pageY, undefined === wH && (wr = AR.fP.body ? AR.fP.body.scrollLeft : 0, wC = AR.fP.body ? AR.fP.body.scrollTop : 0, wH = wJ.clientX + wr, wl = wJ.clientY + wC), wr = parseInt(wH), wC = parseInt(wl), wH = new Date().getTime() - AI, wl = wJ.which || 9, 1 == Az && (AZ = wH), As[3]++, Ac.push(wl + ("mousedown" == wJ.type ? "0" : "1") + "+" + wr + "+" + wC + "+" + wH), Ar(), AI += wH);
      };
      AR.fP.addEventListener ? (AR.fP.addEventListener("mousedown", Aq, true), AR.fP.addEventListener("mouseup", Aq, true)) : AR.fP.attachEvent && (AR.fP.attachEvent("onmousedown", Aq), AR.fP.attachEvent("onmouseup", Aq));
      var AB = 0;
      var Ag = 0;
      var AX = AP;
      var AY = 0;
      var w0 = 0;
      var Aq = Ao(function (wJ) {
        var wr;
        var wC;
        var wH;
        (Aa = true) && (Ak && (wJ = AR.fo.event), 100 < AY && (wr = AO[1].split("+"), wC = AO[0].split("+"), AO[1] = parseInt(wr[0]) + parseInt(wC[0]) + "+" + (parseInt(wr[1]) + parseInt(wC[1])) + "+" + (parseInt(wr[2]) + parseInt(wC[2])), AO.shift()), AY++, wr = parseInt(wJ.touches[0].pageX) - AB, wC = parseInt(wJ.touches[0].pageY) - Ag, wH = new Date().getTime() - AX, As[3]++, AO.push(wr + "+" + wC + "+" + wH), 1 == AY && (w0 = wH), Ar(), AB = parseInt(wJ.touches[0].pageX), Ag = parseInt(wJ.touches[0].pageY), AX += wH);
      }, 30);
      AR.fP.addEventListener ? AR.fP.addEventListener("touchmove", Aq, true) : AR.fP.attachEvent && AR.fP.attachEvent("ontouchmove", Aq);
      var w1 = AP;
      var w2 = 0;
      var w3 = 0;
      var Ao = function (wJ) {
        var wr;
        var wC;
        var wH;
        "touchstart" == wJ.type && (wr = (screen.availWidth - AR.fo.outerWidth < 10) << 0, As[21] = wr);
        (Aa = true) && (Ak && (wJ = AR.fo.event), 10 < w2 && AK.shift(), w2++, wr = parseInt(wJ["touchstart" == wJ.type ? "touches" : "changedTouches"][0].pageX), wC = parseInt(wJ["touchstart" == wJ.type ? "touches" : "changedTouches"][0].pageY), wH = new Date().getTime() - w1, As[3]++, AK.push(("touchstart" == wJ.type ? "0" : 1) + "+" + wr + "+" + wC + "+" + wH), 1 == w2 && (w3 = wH), Ar(), w1 += wH);
      };
      AR.fP.addEventListener ? (AR.fP.addEventListener("touchstart", Ao, true), AR.fP.addEventListener("touchend", Ao, true)) : AR.fP.attachEvent && (AR.fP.attachEvent("ontouchstart", Ao), AR.fP.attachEvent("ontouchend", Ao));
      var w4 = AP;
      var w5 = 0;
      var Aq = function (wJ) {
        var wr;
        w5 <= 20 && ((wJ = Ak ? AR.fo.event : wJ).isComposing && (Av[0] = 1), w5++, wr = wJ.code, (/(Key)[a-zA-Z]/.test(wr) || /(Digit)[0-9]/.test(wr)) && (wr = ""), wr = new Date().getTime() - w4, As[3]++, Av.push(("keydown" == wJ.type ? 0 : 1) + wr), Ar(), w4 += wr);
      };
      AR.fP.addEventListener ? (AR.fP.addEventListener("keydown", Aq, true), AR.fP.addEventListener("keyup", Aq, true)) : AR.fP.attachEvent && (AR.fP.attachEvent("onkeydown", Aq), AR.fP.attachEvent("onkeyup", Aq));
      As.push(AN((4294967295 * Math.random() >>> 0) + "|" + AP, 0, 1));
      As.push(AE);
      As.push(AP);
      As.push(1);
      for (var Ao = !!(AR.fo.webkitRTCPeerConnection || AR.fo.Element && AR.fo.Element.prototype && AR.fo.Element.prototype.webkitMatchesSelector) << 0, wp = (Ao = (Ao = (Ao = (Ao |= (undefined !== AR.fo.mozPaintCount) << 1) | (undefined !== AR.fo.mozInnerScreenX) << 2) | !!AR.fo.Debug << 3) | !!AR.fo.WebKitPlaybackTargetAvailabilityEvent << 4, 0), wu = ["zoom", "resize", "text-rendering", "text-align-last", "-webkit-hyphens"], wG = AR.fP.createElement("cc"), wD = 0; wD < wu.length; wD++) {
        wp |= (undefined !== wG.style[wu[wD]] ? 1 : 0) << wD;
      }
      As.push(Ao + "|" + wp);
      for (var Ao = AR.fE.language || AR.fE.userLanguage, Ao = (As.push(Ao), new Date().getTimezoneOffset()), w6 = (As.push(Ao), Ao = AR.fo.hasOwnProperty ? (Ao = !![].copyWithin << 0, Ao = (Ao = (Ao = (Ao = (Ao = (Ao = (Ao |= !![].includes << 1) | AR.fo.hasOwnProperty("Touch") << 2) | AR.fo.hasOwnProperty("Proxy") << 3) | (AR.fo.Symbol && AR.fo.Symbol.hasOwnProperty && AR.fo.Symbol.hasOwnProperty("match")) << 4) | !!function () {}.name << 5) | (AR.fo.Object.hasOwnProperty && AR.fo.Object.hasOwnProperty("values")) << 6) | (AR.fo.OfflineAudioContext && AR.fo.OfflineAudioContext.prototype.hasOwnProperty("close")) << 7, wf = AR.fP.createElement("canvas"), Ao = (Ao = (Ao = (Ao = (Ao = (Ao = (Ao = (Ao = (Ao = (Ao = (Ao |= !!"".padStart << 9) | (AR.fo.PointerEvent && AR.fo.PointerEvent.prototype.hasOwnProperty("getCoalescedEvents")) << 10) | AR.fo.hasOwnProperty("BudgetService") << 12) | !(!wf || !wf.getAttributeNames) << 13) | !(!AR.fo.performance || undefined === AR.fo.performance.timeOrigin) << 14) | (AR.fo.Intl && AR.fo.Intl.hasOwnProperty && AR.fo.Intl.hasOwnProperty("PluralRules")) << 15) | AR.fo.hasOwnProperty("getMatchedCSSRules") << 16) | AR.fo.hasOwnProperty("PerformanceServerTiming") << 17) | !![].values << 18) | AR.fo.hasOwnProperty("BigInt") << 19) | (undefined !== AR.fP.wasDiscarded) << 20, w6 = (AR.fo.Symbol && AR.fo.Symbol.hasOwnProperty && AR.fo.Symbol.hasOwnProperty("species")) << 0, Ao + "|" + (w6 = (w6 = (w6 = (w6 = (w6 = (w6 = (w6 = (w6 = (w6 = (w6 = (w6 |= AR.fo.hasOwnProperty("Reflect") << 1) | (AR.fo.Symbol && AR.fo.Symbol.hasOwnProperty && AR.fo.Symbol.hasOwnProperty("toPrimitive")) << 2) | (AR.fo.WeakMap && AR.fo.WeakMap.prototype.hasOwnProperty("clear")) << 3) | (AR.fo.DOMTokenList && AR.fo.DOMTokenList.prototype.hasOwnProperty("replace")) << 4) | (AR.fo.Symbol && AR.fo.Symbol.hasOwnProperty && AR.fo.Symbol.hasOwnProperty("hasInstance")) << 5) | AR.fo.hasOwnProperty("isSecureContext") << 6) | AR.fo.self.hasOwnProperty("origin") << 7) | (AR.fo.PerformanceTiming && AR.fo.PerformanceTiming.prototype.hasOwnProperty("secureConnectionStart")) << 8) | AR.fo.hasOwnProperty("showModalDialog") << 9) | (AR.fo.HTMLDocument && AR.fo.HTMLDocument.prototype.hasOwnProperty("getSelection")) << 10) | (AR.fo.HTMLMediaElement && AR.fo.HTMLMediaElement.prototype.hasOwnProperty("mozAutoplayEnabled")) << 11)) : "0|0", As.push(Ao), AR.fo.screen), Ao = AR.fP.documentElement, Aq = w6.width || 0, AE = w6.height || 0, w7 = AR.fo.innerWidth || Ao && Ao.clientWidth || AR.fP.body && AR.fP.body.clientWidth || 0, Ao = AR.fo.innerHeight || Ao && Ao.clientHeight || AR.fP.body && AR.fP.body.clientHeight || 0, w8 = AR.fo.screenTop || AR.fo.screenY || 0, w9 = AR.fo.screenLeft || AR.fo.screenX || 0, Aq = (As.push(Aq + "|" + AE + "|" + w7 + "|" + Ao + "|" + w8 + "|" + w9), AR.fo.hasOwnProperty && AR.fo.hasOwnProperty("history") ? AR.fo.history.length : -1), AE = (As.push(Aq), AR.fE.platform), w7 = (As.push(AE), AR.fE.hardwareConcurrency || 0), Ao = (As.push(w7), ""), wf = AR.fP.createElement("canvas"), AE = (Ao = wf.getContext ? (w8 = wf.getContext("webgl") || wf.getContext("experimental-webgl")) ? (w9 = w8.getExtension("WEBGL_debug_renderer_info")) ? (Aq = w8.getParameter(w9.UNMASKED_VENDOR_WEBGL), w8.getParameter(w9.UNMASKED_RENDERER_WEBGL) + "|" + Aq) : "ns|3" : "ns|2" : "ns|1", As.push(Ao), w6.colorDepth + "|" + w6.pixelDepth), w7 = (As.push(AE), AR.fE.oscpu || 0), wA = (As.push(w7), wL = AR.fo.hasOwnProperty ? (wL = AR.fo.hasOwnProperty("ApplePaySession") << 0, (wL = (wL = (wL |= AR.fo.hasOwnProperty("ApplePayError") << 1) | AR.fo.hasOwnProperty("Bluetooth") << 2) | AR.fo.hasOwnProperty("BluetoothDevice") << 3) | AR.fo.hasOwnProperty("BluetoothUUID") << 4) : 0, As.push(wL), ""), ww = AR.fE.plugins, wD = 0; ww && wD < ww.length; wD++) {
        wA += ww[wD].name + ww[wD].filename;
        ww[wD].version && (wA += ww[wD].version + "<br>");
        for (var wR = 0; wR < ww[wD].length; wR++) {
          var wy = ww[wD][wR];
          var wN = 0;
          (wN = wy ? wy.type : wN) && (wA += wN.substring(12));
        }
      }
      wA = (ww ? ww.length : 0) + "|" + AN(wA, 0, 1);
      As.push(wA);
      As.push((wf = AR.fP.createElement("canvas"), w8 = "", wf.getContext && (w9 = wf.getContext("2d"), wf.height = 60, wf.width = 400, wf.style.display = "inline", w9.textBaseline = "alphabetic", w9.fillStyle = "#f60", w9.fillRect(125, 1, 62, 20), w9.fillStyle = "#069", w9.font = "11pt no-real-font-123", w9.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), w9.fillStyle = "rgba(102, 204, 0, 0.7)", w9.font = "18pt Arial", w9.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), w8 = AN(w8 = wf.toDataURL() || "", 0, 1)), w8));
      var Ao = (Aq = AR.fE.userAgent) ? AN(Aq, 0, 1) : 0;
      As.push(Ao);
      var AE = AR.fP.hidden || AR.fP.mozHidden ? 0 : 1;
      As.push(AE);
      As.push(0);
      var w7 = (w6.availWidth - AR.fo.outerWidth < 10) << 0;
      As.push(w7);
      var wL = (0, Ay.n)(true);
      As.push(wL);
      var wb = new Date(AP + 15552000000).toUTCString();
      Ar();
    }
    var wM = R(721);
    var wW = XMLHttpRequest.prototype;
    var wh = wW.send;
    var wx = wW.open;
    var wS = wW.addEventListener;
    var wU = wW.removeEventListener;
    var wQ = wW.setRequestHeader;
    var wd = Object.getOwnPropertyDescriptor(wW, "responseText");
    var wm = Object.getOwnPropertyDescriptor(wW, "responseType");
    var wT = Object.getOwnPropertyDescriptor(wW, "response");
    var wt = R(606);
    var wV = "acw-sc--v3";
    var wF = "acw_sc__v3";
    function wo(wJ) {
      return wJ + "_" + wF;
    }
    function wP(wJ, wr) {
      var wC;
      AR.fm[AR.fT] && wr && (wC = (0, AA.fb)(wJ)).host && (0, AA.ft)(wJ, location.href) && (0, wt.fy)(wo(wC.host), wr);
    }
    var wE = R(540);
    var ws = {};
    function wi(wJ) {
      if (!AR.fm[AR.fT] || !(0, AA.ft)(wJ, location.href)) {
        return wJ;
      }
      var wr;
      var wC = (0, AA.fb)(wJ);
      var wH = {};
      var wl = 0;
      for (wr in ws) {
        var wj = (0, wt.fD)(ws[wr](wC.host));
        wj && (wH[wr] = wj, ++wl);
      }
      return 0 == wl ? wJ : (wC.search = (0, AA.fx)(wC.search, wH), (0, AA.fW)(wC));
    }
    ws[wE.fd] = wE.fU;
    ws[wF] = wo;
    var wc = R(669);
    function wO(wJ) {
      return (wO = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (wC) {
        return typeof wC;
      } : function (wC) {
        return wC && "function" == typeof Symbol && wC.constructor === Symbol && wC !== Symbol.prototype ? "symbol" : typeof wC;
      })(wJ);
    }
    var wK;
    var wa = R(669).fA;
    var wv = R(669).f6;
    AR.fo._waf_async_initialized || (AR.fo._waf_is_mobile = false, AR.fo._waf_traceid = "", AR.fo._waf_nc_width = 300, AR.fo._waf_websdk_version = AR.fs, w9 = AR.fE.userAgent || AR.fE.vendor || AR.fo.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(w9) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(w9.substr(0, 4))) && (AR.fo._waf_is_mobile = true), (wK = {
      fO: [],
      fK: [],
      fe: undefined,
      fa: undefined,
      fv: undefined,
      fJ: undefined,
      fr: undefined,
      fC: function (wJ) {
        if (wJ) {
          switch (wJ.which) {
            case "jsclg":
              this.fK.push(wJ);
              break;
            case "captcha":
              this.fO.push(wJ);
          }
        }
      },
      fH: !(AR.fo._waf_async_initialized = true),
      fl: 0,
      fj: function (wJ) {
        var wr;
        var wC = wJ.__send_headers;
        for (wr in wK.fa.apply(wJ, wJ.openArgs), wJ.__send_headers = wC) wQ.call(wJ, wr, wC[wr]);
      },
      fn: function () {
        if (AR.fo.XMLHttpRequest) {
          wK.fa = wW.open = function () {
            this.scene = undefined;
            this.__send_headers = {};
            this.__setHeaderHooked || (this.setRequestHeader = function (wl, wj) {
              this.__send_headers[wl] = wj;
              wQ.call(this, wl, wj);
            }, this.__setHeaderHooked = true);
            var wH = arguments[1];
            wH = wi(wH = wv(wH));
            arguments[1] = wH;
            this.openArgs = arguments;
            wx.apply(this, arguments);
          };
          wK.fe = wW.send = function (wH) {
            this.scene && delete this.scene;
            this.sendBody = wH;
            var wl = wK.fk(this.openArgs[1]);
            var wl = wa(wl, wH);
            if (wl) {
              this.openArgs[1] = wl;
              var wj;
              var wn = this.__send_headers;
              for (wj in wx.apply(this, this.openArgs), this.__send_headers = wn) wQ.apply(this, [wj, wn[wj]]);
            }
            this.ori_event && this.ori_event.readystatechange && 0 < this.ori_event.readystatechange.length || wK.fv.call(this, "readystatechange", function () {});
            wh.call(this, wH);
          };
          wK.fe = wW.send;
          wK.fv = wW.addEventListener = function (wH, wl) {
            this.ori_event || (this.ori_event = {});
            var wn;
            var wk;
            var wq = wl;
            wl = "readystatechange" != wH ? (wk = wl, function (wI) {
              !this.scene && wk && wk.call(this, wI);
            }) : (wn = wl, function (wI) {
              if (!this.scene) {
                var wZ = this.openArgs[1];
                if (4 === this.readyState && this.fq && (0, AA.ft)(wZ, location.href) && (wB = this.getAllResponseHeaders()) && -1 < wB.indexOf(wV) && (this.fq = false, wP(wZ, this.getResponseHeader(wV))), 4 === this.readyState && wK.fI(this.status, this.getResponseHeader("Content-Type"))) {
                  var wB = "";
                  try {
                    wB = wd.get.call(this);
                  } catch (wX) {}
                  var wg = this;
                  wK.fz(wB, function (wY) {
                    "dySig" == (wg.scene = wY) ? AR.fo.setTimeout(function () {
                      wK.fj(wg);
                      wK.fe.call(wg, wg.sendBody);
                    }) : wK.fC({
                      type: "xhr",
                      which: wY,
                      fZ: wg
                    });
                  }, this.openArgs[1], false === this.openArgs[2]);
                }
                wn && !this.scene && wn.call(this, wI);
              }
            });
            wS.call(this, wH, wl);
            this.ori_event[wH] || (this.ori_event[wH] = []);
            this.ori_event[wH].push([wq, wl]);
          };
          wK.fJ = wW.removeEventListener = function (wH, wl) {
            if (this.ori_event) {
              for (var wj = this.ori_event[wH], wn = wl, wk = 0; wk < wj.length; ++wk) {
                if (wj[wk][0] == wl) {
                  wn = wj[wk][1];
                  wj.splice(wk, 1);
                  break;
                }
              }
              wU.call(this, wH, wn);
            }
          };
          for (var wr = ["abort", "error", "load", "loadend", "loadstart", "progress", "timeout", "readystatechange"], wC = 0; wC < wr.length; ++wC) {
            !function (wH) {
              Object.defineProperty(wW, "on" + wH, {
                get: function () {
                  return this.fB ? this.fB["on" + wH] : undefined;
                },
                set: function (wl) {
                  this.fB || (this.fB = {});
                  this.fB["on" + wH] && (wK.fJ.call(this, wH, this.fB["on" + wH]), delete this.fB["on" + wH]);
                  wl && (wK.fv.call(this, wH, wl), this.fB["on" + wH] = wl);
                },
                configurable: true
              });
            }(wr[wC]);
          }
          Object.defineProperty(wW, "responseType", {
            get: function () {
              return "json" != this.__real_responseType ? wm.get.call(this) : "json";
            },
            set: function (wH) {
              this.__real_responseType = wH;
              wm.set.call(this, "json" == wH ? "text" : wH);
            },
            configurable: true
          });
          Object.defineProperty(wW, "response", {
            get: function () {
              if ("json" != this.__real_responseType) {
                return wT.get.call(this);
              }
              try {
                return JSON.parse(wd.get.call(this));
              } catch (wH) {
                return null;
              }
            },
            configurable: true
          });
          Object.defineProperty(wW, "responseText", {
            get: function () {
              if ("json" != this.__real_responseType) {
                return wd.get.call(this);
              }
              throw new Error("The value is only accessible if the object's 'responseType' is '' or 'text' (was 'json')");
            },
            configurable: true
          });
          XMLHttpRequest._waf_hook = true;
        }
      },
      fz: function (wJ, wr, wC, wH) {
        var wl = (0, AA.fb)(wC);
        var wj = "";
        var wn = "";
        if (!(0, AA.fN)(wl)) {
          if (wJ && "string" == typeof wJ && -1 < wJ.indexOf("initAli".concat("yunCaptcha")) && /userUserId: ?requestInfo.userUserId/.test(wJ) && -1 < wJ.indexOf("window._w".concat("af_is_mobile"))) {
            wj = "captcha";
            wn = "2";
          } else {
            if (wJ && "string" == typeof wJ && -1 < wJ.indexOf("appkey:".concat(" \"CF_APP_WAF\", // 应用鏍囪瘑"))) {
              wj = "captcha";
            } else {
              if (wJ && "string" == typeof wJ && -1 < wJ.indexOf("acw_s".concat("c__v2")) && -1 < wJ.indexOf("var arg1")) {
                wj = "jsclg";
              } else {
                if (wJ && "string" == typeof wJ && (0, wc.ff)(wJ)) {
                  -1 < wC.indexOf((0, wc.f8)(wl.host)) && (0, wc.f7)();
                  return !(wc.f5 > wc.f9 || ((0, wc.f4)(wl), wr("dySig"), 0));
                }
              }
            }
          }
          if ("" != wj) {
            switch (wr(wj), wj) {
              case "jsclg":
                var wk = wJ.split("var arg1='")[1].split("';")[0];
                if (40 === wk.length) {
                  (0, wM.fF)(wk, wC);
                  wH ? wK.fg() : AR.fo.setTimeout(wK.fg.bind(wK));
                } else {
                  var wq = /<script\sname="aliyunwaf_6a6f5ea8">(.+)?<\/script>/gm.exec(wJ);
                  var wI = AR.fo.arg1;
                  AR.fo.arg1 = wk;
                  AR.fo.nothing2reload10ba = function (wY) {
                    AR.fo.arg1 = wI;
                    (0, wE.fS)(wC, wY);
                    wz.remove();
                    delete AR.fo.nothing2reload10ba;
                    wH ? wK.fg() : AR.fo.setTimeout(wK.fg.bind(wK));
                  };
                  var wz = AR.fP.createElement("script");
                  wz.name = "aliyunwaf_6a6f5ea8";
                  AQ ? wz.innerText = wq[1] : wz.src = "/nfb8ouq4/om6lhs71/109xfjkc";
                  try {
                    AT().appendChild(wz);
                  } catch (wY) {}
                }
                return true;
              case "captcha":
                var wk = "cn";
                var wq = "0b72f618-4c1-4aba-9a78-f" + new Date().getTime() + "ba";
                var wZ = {};
                var wB = /var requestInfo = ({[\s\S]*?});/g.exec(wJ);
                if (null !== wB && (wq = (wZ = new Function("return " + wB[1])()).token), "2" === wn) {
                  wZ.region && "sgp" == wZ.region && (wk = "en");
                  wZ.traceid ? AR.fo._waf_traceid = wZ.traceid : AR.fo._waf_traceid = wK.fX(wJ);
                } else {
                  if (AR.fo._waf_traceid = wK.fX(wJ), !wK.fH) {
                    var wg;
                    var wX = /window.(aliyun_captcha(id|trace)_[0-9a-f]{4}) ='([0-9a-f]+)';/gm;
                    for (wZ.fY = []; null !== (wg = wX.exec(wJ));) {
                      wg.index === wX.lastIndex && wX.lastIndex++;
                      wZ.fY.push(wg[1]);
                      wg[1] && wg[3] && (AR.fo[wg[1]] = wg[3]);
                    }
                  }
                  (-1 < wJ.indexOf("language: \"en\",//语言包，默认中文") || -1 < wJ.indexOf("language: \"en\", //语言包，默认中文")) && (wk = "en");
                }
                wK.A0(wq, wk, wn, wZ);
                return true;
            }
          }
        }
        return false;
      },
      A1: function () {
        var wr;
        var wC;
        AR.fo.fetch && (wr = Request, AR.fo.Request = function (wH, wl) {
          var wj = new wr(wH, wl);
          wH instanceof wr && (wl = Object.assign(wH.init ? Object.assign({}, wH.init) : {}, wl), wH = wH.input);
          wj.input = wH;
          wj.init = wl;
          return wj;
        }, wC = fetch, AR.fo.fetch = function () {
          var wH = arguments[0];
          var wl = arguments[1];
          wH instanceof wr && (wH = arguments[0].input, wl = arguments[0].init);
          null == wl ? wl = {
            credentials: "same-origin"
          } : wl.credentials || (wl.credentials = "same-origin");
          wH = wi(wH = wv(wH));
          var wj = wK.fk(wH);
          var wj = wa(wj, wl.body);
          wj && (wH = wj);
          return wC.call(this, wH, wl).then(function (wn) {
            return new Promise(function (wq, wI) {
              wP(wH, wn.headers.get(wV));
              wK.fI(wn.status, wn.headers.get("Content-Type")) ? wn.clone().text().then(function (wZ) {
                wK.fz(wZ, function (wg) {
                  "dySig" == wg ? fetch(wH, wl).then(function (wY) {
                    200 <= wY.status && wY.status < 500 && wq(wY);
                  }).catch(function (wY) {}) : wK.fC({
                    type: "fetch",
                    which: wg,
                    A2: wH,
                    A3: wl,
                    A4: function (wY) {
                      wq(wY);
                    }
                  });
                }, wH) || wq(wn);
              }).catch(function (wZ) {
                wq(wn);
              }) : wq(wn);
            });
          }).catch(function (wn) {
            return Promise.reject(wn);
          });
        }, AR.fo.fetch._waf_hook = true);
      },
      fI: function (wJ, wr) {
        return 200 == wJ && wr && -1 < wr.indexOf("text/html");
      },
      A0: function (wJ, wr, wC, wH) {
        var wj;
        var wn;
        var wk = this;
        function wq(wI, wz, wZ) {
          setTimeout(function () {
            var wg;
            var wX;
            var wY;
            AR.fP.getElementById("waf_nc_block") ? (AR.fP.getElementById("waf_nc_block").style.display = "block", wK.fr || (wK.fr = Am("body * {pointer-events:auto!important}")), AT().appendChild(wK.fr), wg = "访问验证", wX = "为保证您的正常访问,请进行如下验证", "en" == wr && (wX = "Please slide to verify that you're not a robot", wg = "Access Verification"), (wY = AR.fP.getElementsByClassName("waf-nc-title")) && (wY[0].innerText = wg), (wY = AR.fP.getElementsByClassName(AR.fo._waf_is_mobile ? "waf-nc-h5-description" : "waf-nc-description")) && (wY[0].innerText = wX), wz ? wZ() : wK.A5(wZ, wI)) : wq(wI);
          }, 500);
        }
        wk.fH || (wk.fH = true, wK.A6(wC), 2 == wC ? (wj = {
          userId: wH.userId,
          userUserId: wH.userUserId,
          SceneId: wH.sceneId,
          mode: "embed",
          element: "#nocaptcha",
          slideStyle: {
            width: AR.fo._waf_is_mobile ? AR.fo._waf_nc_width : 320,
            height: AR.fo._waf_is_mobile ? AR.fo._waf_nc_width / 8 : 40
          },
          language: wr,
          immediate: true,
          success: function (wI) {
            var wz = {
              u_atoken: wH.token,
              u_asig: wI,
              u_aref: wH.refer
            };
            wk.fg(wz);
          },
          fail: function (wI) {},
          getInstance: function (wI) {},
          verifyType: "1.0",
          region: wH.region,
          UserCertifyId: wH.traceid
        }, wq(wC, AR.fo.initAliyunCaptcha, function () {
          initAliyunCaptcha(wj);
        })) : (wn = {
          renderTo: "#nocaptcha",
          appkey: "CF_APP_WAF",
          scene: "register",
          trans: {
            key1: "code100",
            user: "default",
            aysnc: "1"
          },
          token: wJ,
          language: wr,
          isEnabled: true,
          times: 3,
          success: function (wI) {
            if (undefined === wI.token && (wI.token = wJ), wH.fY) {
              for (var wz = 0; wz < wH.fY.length; ++wz) {
                delete AR.fo[wH.fY[wz]];
              }
            }
            var wZ = {
              u_atoken: wI.token,
              u_asession: wI.sessionId,
              u_asig: wI.sig
            };
            wk.fg(wZ);
          },
          fail: function (wI) {},
          error: function (wI) {}
        }, AR.fo._waf_is_mobile && (wn.scene = "register_h5", wn.width = AR.fo._waf_nc_width), wq(wC, AR.fo.AWSC && AR.fo.AWSC.use, function () {
          AWSC.use("nc", function (wI, wz) {
            AR.fo.nc = wz.init(wn);
          });
        })), AR.fP.getElementById("waf-nc-traceid") && (AR.fP.getElementById("waf-nc-traceid").innerHTML = ("cn" == wr ? "日志ID: " : "TraceID:") + AR.fo._waf_traceid));
      },
      fg: function (wJ) {
        var wC = this;
        if (wJ) {
          var wH = AR.fP.getElementById("nocaptcha");
          var wl = AR.fP.getElementById("waf_nc_block");
          wl && (wl.style.display = "none");
          wH && (wH.innerHTML = "");
          wC.fH = false;
          try {
            wK.fr.remove();
          } catch (wj) {}
        } else {
          wC.fl += 1;
        }
        !function wn(wk) {
          var wq;
          var wI;
          var wz;
          var wZ;
          var wB;
          var wg;
          var wX;
          0 != wk.length && (wq = wk[0], wk.splice(0, 1), "xhr" === wq.type ? (wI = wq.fZ, wg = (wz = wq.fZ).openArgs, wZ = wz.sendBody, wB = wg[1], "captcha" === wq.which && ((wX = wC.fk(wB)).search = wC.A7(wX.search, wJ), wg[1] = wC.A8(wX), wI.fq = true), wK.fj(wz), wI.addEventListener("readystatechange", function (wY) {
            4 === wI.readyState && wn(wk);
          }), wK.fe.call(wI, wZ)) : "fetch" === wq.type && (wB = wq.A2, wg = wq.A3, "object" == wO(wB) && wB.url && wq.A9 ? wB = wq.A9 : "captcha" === wq.which && ((wX = wC.fk(wB)).search = wC.A7(wX.search, wJ), wB = wC.A8(wX)), fetch(wB, wg).then(function (wY) {
            200 <= wY.status && wY.status < 500 && wq.A4(wY);
            wn(wk);
          }).catch(function (wY) {})));
        }(wJ ? this.fO : this.fK);
      },
      fk: AA.fb,
      A8: AA.fW,
      A7: AA.fx,
      fX: function (wJ) {
        var wr;
        var wC;
        return -1 == (wr = wJ.indexOf("id=\"traceid\"")) ? "" : (wr = wJ.indexOf(": ", wr), wC = wJ.indexOf("</div>", wr), wJ.substring(wr + 2, wC));
      },
      Af: function (wJ) {
        var wC = AR.fo._waf_is_mobile ? (wl = "<div id=\"waf_nc_block\"style=\"display: none;\"><div class=\"waf-nc-h5-mask\"></div><div id=\"WAF_NC_WRAPPER\"class=\"waf-nc-h5-wrapper\"><p class=\"waf-nc-title\">访问验证</p><div class=\"waf-nc-h5-description\">为了您的操作安全，请完成以下验证</div><p id=\"waf-nc-traceid\" class=\"waf-nc-traceid-class\"></p><div id=\"nocaptcha\" data-nc-idx=\"1\"></div></div></div>", wC = function () {
          try {
            var wj;
            var wn = AR.fP.getElementsByName("viewport");
            return wn && 1 == wn.length && wn[0].content && -1 != wn[0].content.indexOf("initial-scale") ? (wn = wn[0].content.replace(/\s+/g, ""), 0 == (wj = parseFloat(wn.split("initial-scale=")[1].split(",")[0])) ? 1 : 1 / wj) : 1;
          } catch (wk) {
            return 1;
          }
        }(), AR.fo._waf_nc_width = 300 * wC, "#waf_nc_block * {pointer-events: auto;}#waf_nc_block{position:fixed;_position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;z-index:2000000000;}#waf_nc_block .waf-nc-h5-mask{background:#000;opacity:.5;filter:alpha(opacity=50);width:100%;height:100%}#waf_nc_block #aliyunCaptcha-sliding-slider{background:#ff6a00!important;font-size:" + 16 * wC + "px!important}#waf_nc_block .waf-nc-h5-wrapper{min-height:" + 220 * wC + "px;width:94%;position:absolute;top:20%;left:50%;;margin-left:-47%;padding:5% 1%;background:#fff;border-radius:" + 9 * wC + "px;box-sizing:border-box}#waf_nc_block .waf-nc-title{margin-top:" + +wC + "px;font-size:" + 16 * wC + "px;font-weight:500;color:#1a1a1a;text-align:center}#waf_nc_block .waf-nc-h5-description{margin-top:" + 24 * wC + "px;font-size:" + 12 * wC + "px;color:#595959;text-align:center}#waf_nc_block .waf-nc-traceid-class{margin-top:" + 8 * wC + "px;font-size:" + 12 * wC + "px;color:#999;text-align:center}#waf_nc_block .nc_bg{background:#fff3ea!important}#waf_nc_block .btn_slide{background:#ff6a00!important;border:0!important;color:#fff!important;width:" + 48 * wC + "px!important;height:" + 48 * wC + "px!important;font-size:" + 30 * wC + "px;font-weight:900!important;line-height:" + 48 * wC + "px!important}#waf_nc_block .btn_ok{background:#ff6a00!important;border:0!important;color:#fff!important;width:" + 48 * wC + "px!important;height:" + 48 * wC + "px!important;font-size:" + 30 * wC + "px;font-weight:900!important;line-height:" + 48 * wC + "px!important}#waf_nc_block .nc_scale{background:rgba(241,241,242,1)!important;height:" + 48 * wC + "px!important}#waf_nc_block .nc-lang-cnt{height:" + 48 * wC + "px!important;margin-left:" + 10 * wC + "px!important;line-height:" + 48 * wC + "px!important;font-size:" + 14 * wC + "px!important}#waf_nc_block .nc_wrapper{margin-left: auto;  margin-right: auto;}#waf_nc_block .nc-container #nc_2_wrapper{height:70px}#waf_nc_block #aliyunCaptcha-sliding-text {font-size:" + 15 * wC + "px}!important") : (wl = "<div id=\"waf_nc_block\" style=\"display: none;\">\n    <div class=\"waf-nc-mask\"></div>\n    <div id=\"WAF_NC_WRAPPER\" class=\"waf-nc-wrapper\">\n        <p class=\"waf-nc-title\">访问验证</p>\n        <p class=\"waf-nc-description\">为保证您的正常访问，请进行如下验证。</p>\n        <p id=\"waf-nc-traceid\" class=\"waf-nc-traceid-class\"></p>\n        <div id=\"nocaptcha\"></div>\n    </div>\n</div>\n</div>", "#waf_nc_block * {pointer-events: auto;}\n#waf_nc_block{position:fixed;_position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;z-index:2000000000;}\n#waf_nc_block #aliyunCaptcha-sliding-slider{background:#ff6a00!important}\n#waf_nc_block .aliyunCaptcha-show{margin-left: -24px;}\n#waf_nc_block .waf-nc-mask{background:#000;opacity:.5;filter:alpha(opacity=50);width:100%;height:100%}\n#waf_nc_block .waf-nc-wrapper{min-height:220px;width:348px;text-align:center;position:absolute;top:20%;left:50%;margin-left:-200px;margin-bottom:16px;background:#fff;box-shadow:0 0 10px 0 rgba(0,0,0,0.15)}\n#waf_nc_block .waf-nc-title{margin-top:28px;font-size:24px;font-weight:500;color:#181818;letter-spacing:1.71px;text-align:center}\n#waf_nc_block .waf-nc-description{margin-top:24px;margin-left:24px;font-size:14px;color:#666;text-align:left}\n#waf_nc_block .waf-nc-traceid-class{margin-top:8px;margin-left:24px;font-size:12px;color:#999;text-align:left}\n#nocaptcha{margin-left:24px;margin-top:14px}\n#waf_nc_block .nc_bg{background:#fff3ea!important}\n#waf_nc_block .btn_slide{background:#ff6a00!important;border:0!important;color:#fff!important;width:48px!important;height:48px!important;font-size:30px;font-weight:900!important;line-height:48px!important}\n#waf_nc_block .btn_ok{background:#ff6a00!important;border:0!important;color:#fff!important;width:48px!important;height:48px!important;font-size:30px;font-weight:900!important;line-height:48px!important}\n#waf_nc_block .nc_scale{background:rgba(241,241,242,1)!important;height:48px!important}#waf_nc_block .nc-lang-cnt{height:48px!important;margin-left:10px!important;line-height:48px!important;font-size:14px!important}\n#waf_nc_block .sm-pop-inner{position:relative!important}#waf_nc_block .nc-container #nc_2_wrapper{height:70px!important}");
        var wH = AR.fP.createElement("div");
        wH.innerHTML = wl;
        var wl = Am(wC);
        AR.fP.body.appendChild(wH.firstChild);
        AT().appendChild(wl);
      },
      A6: function (wJ) {
        AR.fP.getElementById("waf_nc_block") || wK.Af(wJ);
      },
      A5: function (wJ, wr) {
        var wH = AR.fP.createElement("script");
        var wl = new Date();
        var wj = AR.fP.head || AR.fP.getElementsByTagName("head")[0];
        var wl = wl.getFullYear() + (wl.getMonth() + 1) + wl.getDate() + wl.getHours();
        wH.src = 2 == wr ? "//o.alicdn.com/captcha-frontend/aliyunCaptcha/AliyunCaptcha.js?t=" + wl : "//g.alicdn.com/AWSC/AWSC/awsc.js?t=" + wl;
        wJ && ("onload" in wH ? wH.onload = function () {
          wJ();
        } : wH.onreadystatechange = function () {
          /loaded|complete/.test(wH.readyState) && wJ();
        });
        wj.appendChild(wH);
      }
    }).fn(), wK.A1(), Ax(function () {
      AR.fo._waf_body_copy = AR.fP.body;
    }));
  }();
}();
