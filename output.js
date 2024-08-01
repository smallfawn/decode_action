//Thu Aug 01 2024 11:47:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function () {
  var U = {
      669: function (D, y, G) {
        'use strict';

        var S = {
          F4: function () {
            return V;
          },
          F5: function () {
            return K;
          }
        };
        G.d(y, S);
        var m = G(376),
          E = G(980),
          H = G(554),
          W = ["type__", "refer__", "ipcity__", "md5__", "decode__", "encode__", "time__", "timestamp__", "type__"],
          P = {},
          M = {
            un: function (L) {
              return !(!L.protocol || 0 == L.protocol.indexOf("data") || L.host.match(/(cloudauth-device|captcha-(pro-)?open).*?\.aliyuncs\.com$/));
            },
            sig: function (L) {
              for (var N = 0, g = encodeURIComponent(L), B = 0; B < g.length; B++) {
                N = (N << 7) - N + 398 + g.charCodeAt(B);
                N |= 0;
              }
              return N;
            },
            uf: function (L, N) {
              return !!M.un(L) && M.F6(L, N);
            },
            F7: function (L) {
              if (P[L]) {
                return P[L];
              }
              for (var N = 0, g = 0; g < L.length; g++) {
                N += L[g].charCodeAt();
              }
              var B = W[N % W.length] + N % 10000;
              return P[L] = B;
            },
            F8: function (L) {
              var N = (0, H.F9)(L).host,
                N = M.F7(N);
              return (0, H.FF)(L, N);
            },
            F6: function (L, N) {
              var g = (0, H.FY)(L, !0);
              N && (g += N);
              N = M.sig(g) + "|" + (0, m.n)() + "|" + new Date().getTime() + "|1";
              g = E.FU.ua(N, !0);
              N = {};
              N[M.F7(L.host)] = g;
              L.search = (0, H.Fa)(L.search, N);
              return (0, H.FY)(L);
            }
          },
          K = M.uf,
          V = (M.F6, M.F8);
      },
      540: function (D, y, G) {
        'use strict';

        var m = {
          FA: function () {
            return M;
          },
          Fr: function () {
            return K;
          },
          FD: function () {
            return V;
          },
          Fo: function () {
            return P;
          }
        };
        G.r(y);
        G.d(y, m);
        var E = G(429),
          H = G(606),
          W = G(554),
          P = "acw_sc__v2";
        function M(L, N) {
          (0, W.Fn)(L, location.href) && V(L, N);
          (0, E.Fi)(P, N, 3600000);
        }
        function K(L) {
          return L + "_" + P;
        }
        function V(L, N) {
          L = (0, W.F9)(L).host;
          (0, H.Fy)(K(L), N);
        }
      },
      721: function (D, i, y) {
        var S = y(540).FA;
        D.exports = {
          FG: function (m, E) {
            for (var H = JSON.parse("[15, 35, 29, 24, 33, 16, 1, 38, 10, 9, 19, 31, 40, 27, 22, 23, 25, 13, 6, 11,39,18,20,8, 14, 21, 32, 26, 2, 30, 7, 4, 17, 5, 3, 28, 34, 37, 12, 36]"), W = "3000176000856006061501533003690027800375", P = [], M = "", K = "", V = 0; V < m.length; V++) {
              for (var L = m[V], N = 0; N < H.length; N++) {
                H[N] == V + 1 && (P[N] = L);
              }
            }
            for (M = P.join(""), V = 0; V < M.length && V < W.length; V += 2) {
              var g = (parseInt(M.slice(V, V + 2), 16) ^ parseInt(W.slice(V, V + 2), 16)).toString(16);
              K += g = 1 == g.length ? "0" + g : g;
            }
            S(E, K);
          }
        };
      },
      170: function (D, y, G) {
        'use strict';

        var S = {
          FS: function () {
            return m;
          },
          Fm: function () {
            return l;
          },
          Fl: function () {
            return E;
          },
          FE: function () {
            return H;
          }
        };
        G.d(y, S);
        var m = window,
          l = m.document,
          E = m.navigator,
          H = "2.1.0d";
      },
      376: function (D, i, y) {
        'use strict';

        var S = {
          n: function () {
            return H;
          }
        };
        y.d(i, S);
        var m,
          E = y(170);
        function H(W) {
          function M(Q) {
            return Q ? 1 : 0;
          }
          var K = "";
          try {
            K = E.Fm.documentElement.getAttribute && E.Fm.documentElement.getAttribute("webdriver");
          } catch (Q) {}
          var V,
            L = 0,
            N = (E.FS.hasOwnProperty && Object.keys(E.Fm).forEach(function (R) {
              var f = E.FS.document[R];
              (0 == R.indexOf("$cdc_asdjflasutopfhvcZLmcfl_") || f && f.hasOwnProperty("idPrefix_") && f.hasOwnProperty("cache_") && f.hasOwnProperty("nextId_")) && (L = 1);
            }), 1 != L && (V = new RegExp("^cdc_[a-zA-Z0-9]{22}_"), Object.keys(E.FS).forEach(function (R) {
              "$chrome_asyncScriptInfo" != R && !V.test(R) || (L = 1);
            })), new Date()),
            g = 0;
          N.toString = function () {
            if (2 == ++g) {
              return "";
            }
          };
          m && m(N);
          var B = 0,
            B = (B = (B = (B = (B = (B = (B = (B = (B = (B = (B = (B = (B = (B = (B = (B |= ((1 < g ? 1 : 0) ? 1 : 0) << 0) | M(E.Fl.webdriver) << 1) | (L ? 1 : 0) << 2) | M(E.FS._phantom) << 3) | M(E.FS.callPhantom) << 4) | M(E.FS.phantom) << 5) | M(E.FS.spawn) << 6) | M(E.FS.emit) << 7 | (K ? 1 : 0) << 8) | M(E.FS.Buffer) << 9) | M(E.FS.domAutomation) << 10) | M(E.FS.webdriver) << 11) | M(E.Fm.__webdriver_script_fn) << 12) | M(E.FS.fxdriver_id) << 13) | M(E.FS.__fxdriver_unwrapped) << 14) | M(E.FS.ClientUtils) << 15) | M(E.FS.__nightmare) << 16;
          H = function () {
            return B;
          };
          return B;
        }
        E.FS.console && (m = E.FS.console.log.bind(E.FS.console), E.FS.console.debug.bind(E.FS.console));
      },
      429: function (D, i, y) {
        'use strict';

        var S = {
          Fi: function () {
            return E;
          }
        };
        y.d(i, S);
        var m = y(554),
          l = y(170);
        function E(H, W, P, M) {
          var M = M || (0, m.cd)(),
            K = "number" == typeof P ? ((K = new Date()).setTime(K.getTime() + P), K.toGMTString()) : P;
          l.Fm.cookie = H + "=" + W + ";expires=" + K + ";path=/;domain=" + M;
        }
      },
      980: function (D, y, G) {
        'use strict';

        var S = {
          FU: function () {
            return l;
          }
        };
        G.d(y, S);
        m = {
          ua: function (E, H) {
            var K = {};
            K.uGGDj = "DGi0YA7BemWnQjCl4+bR3f8SKIF9tUz/xhr2oEOgPpac=61ZqwTudLkM5vHyNXsVJ";
            var V = K;
            if (null == E) {
              return "";
            }
            var M = m.uu(E, 6, function (L) {
              return V.uGGDj.charAt(L);
            });
            if (H) {
              return M;
            }
            switch (M.length % 4) {
              default:
              case 0:
                return M;
              case 1:
                return M + "===";
              case 2:
                return M + "==";
              case 3:
                return M + "=";
            }
          },
          uu: function (E, H, W) {
            if (null == E) {
              return "";
            }
            for (var P, M, K, V, L = {}, N = {}, B = "", Q = 2, R = 3, I = 2, T = [], w = 0, k = 0, v = 0; v < E.length; v += 1) {
              if (K = E.charAt(v), Object.prototype.hasOwnProperty.call(L, K) || (L[K] = R++, N[K] = !0), V = B + K, Object.prototype.hasOwnProperty.call(L, V)) {
                B = V;
              } else {
                if (Object.prototype.hasOwnProperty.call(N, B)) {
                  if (B.charCodeAt(0) < 256) {
                    for (P = 0; P < I; P++) {
                      w <<= 1;
                      k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
                    }
                    for (M = B.charCodeAt(0), P = 0; P < 8; P++) {
                      w = w << 1 | 1 & M;
                      k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
                      M >>= 1;
                    }
                  } else {
                    for (M = 1, P = 0; P < I; P++) {
                      w = w << 1 | M;
                      k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
                      M = 0;
                    }
                    for (M = B.charCodeAt(0), P = 0; P < 16; P++) {
                      w = w << 1 | 1 & M;
                      k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
                      M >>= 1;
                    }
                  }
                  0 == --Q && (Q = Math.pow(2, I), I++);
                  delete N[B];
                } else {
                  for (M = L[B], P = 0; P < I; P++) {
                    w = w << 1 | 1 & M;
                    k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
                    M >>= 1;
                  }
                }
                0 == --Q && (Q = Math.pow(2, I), I++);
                L[V] = R++;
                B = String(K);
              }
            }
            if ("" !== B) {
              if (Object.prototype.hasOwnProperty.call(N, B)) {
                if (B.charCodeAt(0) < 256) {
                  for (P = 0; P < I; P++) {
                    w <<= 1;
                    k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
                  }
                  for (M = B.charCodeAt(0), P = 0; P < 8; P++) {
                    w = w << 1 | 1 & M;
                    k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
                    M >>= 1;
                  }
                } else {
                  for (M = 1, P = 0; P < I; P++) {
                    w = w << 1 | M;
                    k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
                    M = 0;
                  }
                  for (M = B.charCodeAt(0), P = 0; P < 16; P++) {
                    w = w << 1 | 1 & M;
                    k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
                    M >>= 1;
                  }
                }
                0 == --Q && (Q = Math.pow(2, I), I++);
                delete N[B];
              } else {
                for (M = L[B], P = 0; P < I; P++) {
                  w = w << 1 | 1 & M;
                  k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
                  M >>= 1;
                }
              }
              0 == --Q && (Q = Math.pow(2, I), I++);
            }
            for (M = 2, P = 0; P < I; P++) {
              w = w << 1 | 1 & M;
              k == H - 1 ? (k = 0, T.push(W(w)), w = 0) : k++;
              M >>= 1;
            }
            for (;;) {
              if (w <<= 1, k == H - 1) {
                T.push(W(w));
                break;
              }
              k++;
            }
            return T.join("");
          }
        };
        var m,
          l = m;
      },
      606: function (D, y, G) {
        'use strict';

        var m = {
          FH: function () {
            return M;
          },
          Fy: function () {
            return P;
          }
        };
        G.d(y, m);
        var l = "||",
          E = void 0;
        function H() {
          this.storage = {};
        }
        function W() {
          return E = E || (function () {
            try {
              var K = "aliyun_waf_testLocalStorage";
              localStorage.setItem(K, K);
              localStorage.removeItem(K);
              return 1;
            } catch (V) {}
          }() ? localStorage : new H());
        }
        function P(K, V, L) {
          var N = W();
          L = L || 1800000;
          V = V + l + (new Date().getTime() + L);
          N.setItem(K, V);
        }
        function M(K) {
          var V = W();
          if (L = V.getItem(K)) {
            var L,
              N = (L = L.split(l))[1];
            if (!(N && new Date().getTime() > parseInt(N))) {
              return L[0];
            }
            V.removeItem(K);
          }
        }
        H.prototype.setItem = function (K, V) {
          this.storage[K] = V;
        };
        H.prototype.getItem = function (K) {
          return this.storage[K];
        };
        H.prototype.removeItem = function (K) {
          delete this.storage[K];
        };
      },
      554: function (D, y, G) {
        'use strict';

        var m = {
          Fa: function () {
            return K;
          },
          Fn: function () {
            return L;
          },
          cd: function () {
            return P;
          },
          FY: function () {
            return V;
          },
          F9: function () {
            return M;
          },
          FF: function () {
            return N;
          }
        };
        G.d(y, m);
        var E = G(170),
          H = {},
          W = /^(ac\.cn|ac\.id|ah\.cn|bj\.cn|club\.tw|co\.id|co\.jp|co\.kr|co\.nz|co\.uk|com\.cn|com\.hk|com\.mo|com\.my|com\.sg|com\.tw|cq\.cn|ebiz\.tw|edu\.cn|edu\.hk|edu\.mo|edu\.tw|fj\.cn|game\.tw|gd\.cn|go\.id|gov\.cn|gov\.hk|gov\.mo|gov\.my|gov\.ph|gov\.tw|gs\.cn|gx\.cn|gz\.cn|ha\.cn|hb\.cn|he\.cn|hi\.cn|hk\.cn|hl\.cn|hn\.cn|idv\.hk|idv\.tw|jl\.cn|js\.cn|jx\.cn|ln\.cn|mil\.cn|mil\.tw|mo\.cn|net\.cn|net\.hk|net\.mo|net\.tw|nm\.cn|nx\.cn|org\.cn|org\.hk|org\.mo|org\.tw|qh\.cn|sc\.cn|sd\.cn|sh\.cn|sn\.cn|sx\.cn|tj\.cn|tw\.cn|us\.org|xj\.cn|xz\.cn|yn\.cn|zj\.cn)$/;
        function P() {
          var g,
            B,
            Q = E.Fm.location.host.split(":")[0];
          H[Q] ? Q = H[Q] : 2 < (B = (g = Q.split(".")).length) && !/^(\d+\.)*\d+$/.test(Q) && (Q = g[B - 2] + "." + g[B - 1], W.test(Q)) && (Q = g[B - 3] + "." + Q);
          return Q;
        }
        function M(g) {
          var B = E.Fm.createElement("div");
          B.innerHTML = "<a></a>";
          B.firstChild.href = g;
          B.innerHTML = B.innerHTML;
          (g = B.firstChild).href = B.firstChild.href;
          return {
            protocol: g.protocol,
            host: g.host,
            hostname: g.hostname,
            port: g.port,
            pathname: "/" === g.pathname.substr(0, 1) ? g.pathname : "/" + g.pathname,
            search: g.search,
            hash: g.hash,
            FW: g.href
          };
        }
        function K(g, B) {
          if (0 != Object.keys(B).length) {
            var Q,
              R = "";
            for (Q in B) R += encodeURIComponent(Q) + "=" + encodeURIComponent(B[Q]) + "&";
            if (R = R.slice(0, R.length - 1), 0 == g.length) {
              g = "?" + R;
            } else {
              for (var f = g.slice(1).split("&"), u = [], I = Object.keys(B), T = 0; T < f.length; T++) {
                Q = decodeURIComponent(f[T].split("=", 1)[0]);
                -1 == I.indexOf(Q) && u.push(f[T]);
              }
              g = "?" + (0 == u.length ? "" : u.join("&") + "&") + R;
            }
          }
          return g;
        }
        function V(g, B) {
          return g.protocol + "//" + g.host + g.pathname + g.search + (B ? "" : g.hash);
        }
        function L(g, B) {
          return E.FS.top !== E.FS.self || (g = M(g), B = M(B), !(g.host == B.host && g.protocol == B.protocol));
        }
        function N(g, B) {
          if (-1 == g.indexOf(B + "=")) {
            return g;
          }
          var T = M(g);
          if (!T.search) {
            return g;
          }
          var f = T.search.slice(1).split("&");
          if (0 == f.length) {
            return g;
          }
          var u,
            I = [];
          for (u in f) 0 != f[u].indexOf(B + "=") && I.push(f[u]);
          T.search = 0 == I.length ? "" : "?" + I.join("&");
          return V(T);
        }
      }
    },
    a = {};
  function A(D) {
    var i = a[D],
      y = {
        exports: {}
      };
    void 0 !== i || (i = a[D] = y, U[D](i, i.exports, A));
    return i.exports;
  }
  A.d = function (D, i) {
    for (var y in i) A.FP(i, y) && !A.FP(D, y) && Object.defineProperty(D, y, {
      enumerable: !0,
      get: i[y]
    });
  };
  A.FP = function (D, i) {
    return Object.prototype.hasOwnProperty.call(D, i);
  };
  A.r = function (D) {
    var i = {
      value: !0
    };
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(D, Symbol.toStringTag, {
      value: "Module"
    });
    Object.defineProperty(D, "__esModule", i);
  };
  !function () {
    'use strict';

    var Fd = A(554),
      Fz = A(429),
      Y0 = A(980),
      Y1 = A(170),
      Y2 = A(376);
    function Y3(UP, UM, UK) {
      for (var UV = 0, UL = UM, UN = UP.length, Ug = UK || 1; UL < UN;) {
        UV = (UV = (UV << 5) - UV) + UP.charCodeAt(UL) >>> 0;
        UL += Ug;
      }
      return UV;
    }
    Y6 = [];
    Y7 = Y1.Fm.documentElement;
    Yi = Y7.doScroll;
    Y8 = "DOMContentLoaded";
    YU = "addEventListener";
    Y9 = "onreadystatechange";
    YF = "readyState";
    YY = (Yi ? /^loaded|^c/ : /^loaded|c/).test(Y1.Fm[YF]);
    Y1.Fm[YU] && Y1.Fm[YU](Y8, Y5 = function () {
      Y1.Fm.removeEventListener(Y8, Y5, !1);
      Ya();
    }, !1);
    Yi && Y1.Fm.attachEvent(Y9, Y5 = function () {
      /^c/.test(Y1.Fm[YF]) && (Y1.Fm.detachEvent(Y9, Y5), Ya());
    });
    Y4 = Yi ? function (UP) {
      if (self != top) {
        YY ? UP() : Y6.push(UP);
      } else {
        try {
          Y7.doScroll("left");
        } catch (UK) {
          return void setTimeout(function () {
            Y4(UP);
          }, 50);
        }
        UP();
      }
    } : function (UP) {
      YY ? UP() : Y6.push(UP);
    };
    var Y4,
      Y5,
      Y6,
      Y7,
      Y8,
      Y9,
      YF,
      YY,
      YU = Y4;
    function Ya(UP) {
      for (YY = 1; UP = Y6.shift();) {
        UP();
      }
    }
    var YA,
      Yr = !1;
    function YD() {
      Y1.FS.aliyun_csp_inline_test && (Yr = !0, delete Y1.FS.aliyun_csp_inline_test);
      YA.remove();
      delete Y1.FS.aliyun_csp_inline_test_func;
    }
    YA = document.createElement("script");
    Y1.FS.aliyun_csp_inline_test_func = YA.text = "window.aliyun_csp_inline_test = 1;aliyun_csp_inline_test_func()";
    Yi = document.head.firstChild;
    Y1.FS.aliyun_csp_inline_test_func = YD;
    document.head.insertBefore(YA, Yi);
    setTimeout(function () {
      YD();
    }, 200);
    if (!Y1.FS._waf_async_initialized1) {
      var Yf,
        Yi = function (UP, UM) {
          var UV = 0;
          return function () {
            var UL = arguments,
              UN = Date.now();
            UM <= UN - UV && (UV = UN, UP.apply(this, UL));
          };
        },
        Yu = (Y1.FS._waf_async_initialized1 = !0, new Date().getTime()),
        Yy = Y1.FE,
        YI = [],
        YT = [],
        Yw = [],
        Yk = [],
        Yp = [],
        Yv = !1,
        YX = (("ontouchstart" in window || navigator.maxTouchPoints) && (Yv = !0), [0]),
        YC = (0, Fd.cd)(),
        YZ = Yi(function () {
          (0, Fz.Fi)("ssxmod_itna", Yv ? Y0.FU.ua(YI.join("^") + "M" + Yk.length + "^" + Yp.length + "^" + YX.length) : Y0.FU.ua(YI.join("^") + "P" + YT.length + "^" + Yw.length + "^" + YX.length), Ym, YC);
          (0, Fz.Fi)("ssxmod_itna2", Yv ? Y0.FU.ua(YI.slice(0, 4).join("^") + "tm" + U0 + "|" + Yk.join("|") + "tc" + U3 + "|" + Yp.join("|") + "kb" + YX.join("|")) : Y0.FU.ua(YI.slice(0, 4).join("^") + "mm" + Yx + "|" + YT.join("|") + "mc" + YO + "|" + Yw.join("|") + "kb" + YX.join("|")), Ym, YC);
        }, 60),
        Yj = (void 0 !== Y1.Fm.hidden ? (Yf = "hidden", YE = "visibilitychange") : void 0 !== Y1.Fm.mozHidden ? (Yf = "mozHidden", YE = "mozvisibilitychange") : void 0 !== Y1.Fm.msHidden ? (Yf = "msHidden", YE = "msvisibilitychange") : void 0 !== Y1.Fm.webkitHidden && (Yf = "webkitHidden", YE = "webkitvisibilitychange"), Y1.Fm.addEventListener && Yf ? Y1.Fm.addEventListener(YE, function () {
          !Y1.Fm[Yf] && 20 < YI.length && YI[20]++;
        }) : Y1.Fm.attachEvent && Y1.Fm.attachEvent("on" + YE, function () {
          !Y1.Fm[Yf] && 20 < YI.length && YI[20]++;
        }), 0),
        Yc = 0,
        Ys = Yu,
        Yb = 0,
        Yx = 0,
        Yh = !Y1.Fm.addEventListener && Y1.Fm.attachEvent,
        YE = Yi(function (UP) {
          var UM, UK, UV, UL;
          Yv || (Yh && (UP = Y1.FS.event), 100 < Yb && (UM = YT[1].split("+"), UK = YT[0].split("+"), YT[1] = parseInt(UM[0]) + parseInt(UK[0]) + "+" + (parseInt(UM[1]) + parseInt(UK[1])) + "+" + (parseInt(UM[2]) + parseInt(UK[2])), YT.shift()), Yb++, UM = UP.pageX, UK = UP.pageY, void 0 === UM && (UV = Y1.Fm.body ? Y1.Fm.body.scrollLeft : 0, UL = Y1.Fm.body ? Y1.Fm.body.scrollTop : 0, UM = UP.clientX + UV, UK = UP.clientY + UL), UV = UM - Yj, UP = UK - Yc, UL = new Date().getTime() - Ys, 1 == Yb && (Yx = UL), YI[3]++, YT.push(UV + "+" + UP + "+" + UL), YZ(), Yj = UM, Yc = UK, Ys += UL);
        }, 30),
        YJ = (Y1.Fm.addEventListener ? Y1.Fm.addEventListener("mousemove", YE, !0) : Y1.Fm.attachEvent && Y1.Fm.attachEvent("onmousemove", YE), Yu),
        Ye = 0,
        YO = 0,
        YE = function (UP) {
          var UM, UK, UV, UL;
          Yv || (Yh && (UP = Y1.FS.event), 10 < Ye && Yw.shift(), Ye++, UV = UP.pageX, UL = UP.pageY, void 0 === UV && (UM = Y1.Fm.body ? Y1.Fm.body.scrollLeft : 0, UK = Y1.Fm.body ? Y1.Fm.body.scrollTop : 0, UV = UP.clientX + UM, UL = UP.clientY + UK), UM = parseInt(UV), UK = parseInt(UL), UV = new Date().getTime() - YJ, UL = UP.which || 9, 1 == Ye && (YO = UV), YI[3]++, Yw.push(UL + ("mousedown" == UP.type ? "0" : "1") + "+" + UM + "+" + UK + "+" + UV), YZ(), YJ += UV);
        },
        Yt = (Y1.Fm.addEventListener ? (Y1.Fm.addEventListener("mousedown", YE, !0), Y1.Fm.addEventListener("mouseup", YE, !0)) : Y1.Fm.attachEvent && (Y1.Fm.attachEvent("onmousedown", YE), Y1.Fm.attachEvent("onmouseup", YE)), 0),
        Yq = 0,
        Yd = Yu,
        Yz = 0,
        U0 = 0,
        YE = Yi(function (UP) {
          var UM, UK, UV;
          (Yv = !0) && (Yh && (UP = Y1.FS.event), 100 < Yz && (UM = Yk[1].split("+"), UK = Yk[0].split("+"), Yk[1] = parseInt(UM[0]) + parseInt(UK[0]) + "+" + (parseInt(UM[1]) + parseInt(UK[1])) + "+" + (parseInt(UM[2]) + parseInt(UK[2])), Yk.shift()), Yz++, UM = parseInt(UP.touches[0].pageX) - Yt, UK = parseInt(UP.touches[0].pageY) - Yq, UV = new Date().getTime() - Yd, YI[3]++, Yk.push(UM + "+" + UK + "+" + UV), 1 == Yz && (U0 = UV), YZ(), Yt = parseInt(UP.touches[0].pageX), Yq = parseInt(UP.touches[0].pageY), Yd += UV);
        }, 30),
        U1 = (Y1.Fm.addEventListener ? Y1.Fm.addEventListener("touchmove", YE, !0) : Y1.Fm.attachEvent && Y1.Fm.attachEvent("ontouchmove", YE), Yu),
        U2 = 0,
        U3 = 0,
        Yi = function (UP) {
          var UM, UK, UV;
          "touchstart" == UP.type && (UM = (screen.availWidth - Y1.FS.outerWidth < 10) << 0, YI[21] = UM);
          (Yv = !0) && (Yh && (UP = Y1.FS.event), 10 < U2 && Yp.shift(), U2++, UM = parseInt(UP["touchstart" == UP.type ? "touches" : "changedTouches"][0].pageX), UK = parseInt(UP["touchstart" == UP.type ? "touches" : "changedTouches"][0].pageY), UV = new Date().getTime() - U1, YI[3]++, Yp.push(("touchstart" == UP.type ? "0" : 1) + "+" + UM + "+" + UK + "+" + UV), 1 == U2 && (U3 = UV), YZ(), U1 += UV);
        },
        U4 = (Y1.Fm.addEventListener ? (Y1.Fm.addEventListener("touchstart", Yi, !0), Y1.Fm.addEventListener("touchend", Yi, !0)) : Y1.Fm.attachEvent && (Y1.Fm.attachEvent("ontouchstart", Yi), Y1.Fm.attachEvent("ontouchend", Yi)), Yu),
        U5 = 0,
        YE = function (UP) {
          var UM;
          U5 <= 20 && ((UP = Yh ? Y1.FS.event : UP).isComposing && (YX[0] = 1), U5++, UM = UP.code, (/(Key)[a-zA-Z]/.test(UM) || /(Digit)[0-9]/.test(UM)) && (UM = ""), UM = new Date().getTime() - U4, YI[3]++, YX.push(("keydown" == UP.type ? 0 : 1) + UM), YZ(), U4 += UM);
        };
      Y1.Fm.addEventListener ? (Y1.Fm.addEventListener("keydown", YE, !0), Y1.Fm.addEventListener("keyup", YE, !0)) : Y1.Fm.attachEvent && (Y1.Fm.attachEvent("onkeydown", YE), Y1.Fm.attachEvent("onkeyup", YE));
      YI.push(Y3((4294967295 * Math.random() >>> 0) + "|" + Yu, 0, 1));
      YI.push(Yy);
      YI.push(Yu);
      YI.push(1);
      for (var Yi = !!(Y1.FS.webkitRTCPeerConnection || Y1.FS.Element && Y1.FS.Element.prototype && Y1.FS.Element.prototype.webkitMatchesSelector) << 0, YB = (Yi = (Yi = (Yi = (Yi |= (void 0 !== Y1.FS.mozPaintCount) << 1) | (void 0 !== Y1.FS.mozInnerScreenX) << 2) | !!Y1.FS.Debug << 3) | !!Y1.FS.WebKitPlaybackTargetAvailabilityEvent << 4, 0), YQ = ["zoom", "resize", "text-rendering", "text-align-last", "-webkit-hyphens"], YR = Y1.Fm.createElement("cc"), YV = 0; YV < YQ.length; YV++) {
        YB |= (void 0 !== YR.style[YQ[YV]] ? 1 : 0) << YV;
      }
      YI.push(Yi + "|" + YB);
      for (var Yi = Y1.Fl.language || Y1.Fl.userLanguage, Yi = (YI.push(Yi), new Date().getTimezoneOffset()), Yl = (YI.push(Yi), Yi = Y1.FS.hasOwnProperty ? (Yi = !![].copyWithin << 0, Yi = (Yi = (Yi = (Yi = (Yi = (Yi = (Yi |= !![].includes << 1) | Y1.FS.hasOwnProperty("Touch") << 2) | Y1.FS.hasOwnProperty("Proxy") << 3) | (Y1.FS.Symbol && Y1.FS.Symbol.hasOwnProperty && Y1.FS.Symbol.hasOwnProperty("match")) << 4) | !!function () {}.name << 5) | (Y1.FS.Object.hasOwnProperty && Y1.FS.Object.hasOwnProperty("values")) << 6) | (Y1.FS.OfflineAudioContext && Y1.FS.OfflineAudioContext.prototype.hasOwnProperty("close")) << 7, YP = Y1.Fm.createElement("canvas"), Yi = (Yi = (Yi = (Yi = (Yi = (Yi = (Yi = (Yi = (Yi = (Yi = (Yi |= !!"".padStart << 9) | (Y1.FS.PointerEvent && Y1.FS.PointerEvent.prototype.hasOwnProperty("getCoalescedEvents")) << 10) | Y1.FS.hasOwnProperty("BudgetService") << 12) | !(!YP || !YP.getAttributeNames) << 13) | !(!Y1.FS.performance || void 0 === Y1.FS.performance.timeOrigin) << 14) | (Y1.FS.Intl && Y1.FS.Intl.hasOwnProperty && Y1.FS.Intl.hasOwnProperty("PluralRules")) << 15) | Y1.FS.hasOwnProperty("getMatchedCSSRules") << 16) | Y1.FS.hasOwnProperty("PerformanceServerTiming") << 17) | !![].values << 18) | Y1.FS.hasOwnProperty("BigInt") << 19) | (void 0 !== Y1.Fm.wasDiscarded) << 20, Yl = (Y1.FS.Symbol && Y1.FS.Symbol.hasOwnProperty && Y1.FS.Symbol.hasOwnProperty("species")) << 0, Yi + "|" + (Yl = (Yl = (Yl = (Yl = (Yl = (Yl = (Yl = (Yl = (Yl = (Yl = (Yl |= Y1.FS.hasOwnProperty("Reflect") << 1) | (Y1.FS.Symbol && Y1.FS.Symbol.hasOwnProperty && Y1.FS.Symbol.hasOwnProperty("toPrimitive")) << 2) | (Y1.FS.WeakMap && Y1.FS.WeakMap.prototype.hasOwnProperty("clear")) << 3) | (Y1.FS.DOMTokenList && Y1.FS.DOMTokenList.prototype.hasOwnProperty("replace")) << 4) | (Y1.FS.Symbol && Y1.FS.Symbol.hasOwnProperty && Y1.FS.Symbol.hasOwnProperty("hasInstance")) << 5) | Y1.FS.hasOwnProperty("isSecureContext") << 6) | Y1.FS.self.hasOwnProperty("origin") << 7) | (Y1.FS.PerformanceTiming && Y1.FS.PerformanceTiming.prototype.hasOwnProperty("secureConnectionStart")) << 8) | Y1.FS.hasOwnProperty("showModalDialog") << 9) | (Y1.FS.HTMLDocument && Y1.FS.HTMLDocument.prototype.hasOwnProperty("getSelection")) << 10) | (Y1.FS.HTMLMediaElement && Y1.FS.HTMLMediaElement.prototype.hasOwnProperty("mozAutoplayEnabled")) << 11)) : "0|0", YI.push(Yi), Y1.FS.screen), Yi = Y1.Fm.documentElement, YE = Yl.width || 0, Yy = Yl.height || 0, YG = Y1.FS.innerWidth || Yi && Yi.clientWidth || Y1.Fm.body && Y1.Fm.body.clientWidth || 0, Yi = Y1.FS.innerHeight || Yi && Yi.clientHeight || Y1.Fm.body && Y1.Fm.body.clientHeight || 0, YH = Y1.FS.screenTop || Y1.FS.screenY || 0, YW = Y1.FS.screenLeft || Y1.FS.screenX || 0, YE = (YI.push(YE + "|" + Yy + "|" + YG + "|" + Yi + "|" + YH + "|" + YW), Y1.FS.hasOwnProperty && Y1.FS.hasOwnProperty("history") ? Y1.FS.history.length : -1), Yy = (YI.push(YE), Y1.Fl.platform), YG = (YI.push(Yy), Y1.Fl.hardwareConcurrency || 0), Yi = (YI.push(YG), ""), YP = Y1.Fm.createElement("canvas"), Yy = (Yi = YP.getContext ? (YH = YP.getContext("webgl") || YP.getContext("experimental-webgl")) ? (YW = YH.getExtension("WEBGL_debug_renderer_info")) ? (YE = YH.getParameter(YW.UNMASKED_VENDOR_WEBGL), YH.getParameter(YW.UNMASKED_RENDERER_WEBGL) + "|" + YE) : "ns|3" : "ns|2" : "ns|1", YI.push(Yi), Yl.colorDepth + "|" + Yl.pixelDepth), YG = (YI.push(Yy), Y1.Fl.oscpu || 0), YM = (YI.push(YG), YS = Y1.FS.hasOwnProperty ? (YS = Y1.FS.hasOwnProperty("ApplePaySession") << 0, (YS = (YS = (YS |= Y1.FS.hasOwnProperty("ApplePayError") << 1) | Y1.FS.hasOwnProperty("Bluetooth") << 2) | Y1.FS.hasOwnProperty("BluetoothDevice") << 3) | Y1.FS.hasOwnProperty("BluetoothUUID") << 4) : 0, YI.push(YS), ""), YK = Y1.Fl.plugins, YV = 0; YK && YV < YK.length; YV++) {
        YM += YK[YV].name + YK[YV].filename;
        YK[YV].version && (YM += YK[YV].version + "<br>");
        for (var YL = 0; YL < YK[YV].length; YL++) {
          var YN = YK[YV][YL],
            Yg = 0;
          (Yg = YN ? YN.type : Yg) && (YM += Yg.substring(12));
        }
      }
      YM = (YK ? YK.length : 0) + "|" + Y3(YM, 0, 1);
      YI.push(YM);
      YI.push((YP = Y1.Fm.createElement("canvas"), YH = "", YP.getContext && (YW = YP.getContext("2d"), YP.height = 60, YP.width = 400, YP.style.display = "inline", YW.textBaseline = "alphabetic", YW.fillStyle = "#f60", YW.fillRect(125, 1, 62, 20), YW.fillStyle = "#069", YW.font = "11pt no-real-font-123", YW.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), YW.fillStyle = "rgba(102, 204, 0, 0.7)", YW.font = "18pt Arial", YW.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), YH = Y3(YH = YP.toDataURL() || "", 0, 1)), YH));
      var Yi = (YE = Y1.Fl.userAgent) ? Y3(YE, 0, 1) : 0,
        Yy = (YI.push(Yi), Y1.Fm.hidden || Y1.Fm.mozHidden ? 0 : 1),
        YG = (YI.push(Yy), YI.push(0), (Yl.availWidth - Y1.FS.outerWidth < 10) << 0),
        YS = (YI.push(YG), (0, Y2.n)(!0)),
        Ym = (YI.push(YS), new Date(Yu + 15552000000).toUTCString());
      YZ();
    }
    var U6 = A(721),
      U7 = XMLHttpRequest.prototype,
      U8 = U7.send,
      U9 = U7.open,
      UF = U7.addEventListener,
      UY = U7.removeEventListener,
      UU = U7.setRequestHeader,
      Ua = Object.getOwnPropertyDescriptor(U7, "responseText"),
      UA = Object.getOwnPropertyDescriptor(U7, "responseType"),
      Ur = Object.getOwnPropertyDescriptor(U7, "response"),
      UD = A(606),
      Uo = "acw-sc--v3",
      Un = "acw_sc__v3";
    function Ui(UP) {
      return UP + "_" + Un;
    }
    function Uy(UP, UM) {
      UM && (UP = (0, Fd.F9)(UP)).host && (0, UD.Fy)(Ui(UP.host), UM);
    }
    var UG = A(540),
      US = {};
    function Um(UP) {
      var UM,
        UK = (0, Fd.F9)(UP),
        UV = {};
      for (UM in US) {
        var UL = (0, UD.FH)(US[UM](UK.host));
        UL && (UV[UM] = UL);
      }
      UK.search = (0, Fd.Fa)(UK.search, UV);
      return (0, Fd.FY)(UK);
    }
    function Ul(UP) {
      return (Ul = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (UM) {
        return typeof UM;
      } : function (UM) {
        return UM && "function" == typeof Symbol && UM.constructor === Symbol && UM !== Symbol.prototype ? "symbol" : typeof UM;
      })(UP);
    }
    US[UG.Fo] = UG.Fr;
    US[Un] = Ui;
    var UE,
      UH = A(669).F5,
      UW = A(669).F4;
    Y1.FS._waf_async_initialized || (Y1.FS._waf_is_mobile = !1, Y1.FS._waf_traceid = "", Y1.FS._waf_nc_width = 300, Y1.FS._waf_websdk_version = Y1.FE, YW = Y1.Fl.userAgent || Y1.Fl.vendor || Y1.FS.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(YW) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(YW.substr(0, 4))) && (Y1.FS._waf_is_mobile = !0), (UE = {
      FM: [],
      FK: [],
      FV: void 0,
      FL: void 0,
      FN: void 0,
      Fg: void 0,
      FB: function (UP) {
        if (UP) {
          switch (UP.which) {
            case "jsclg":
              this.FK.push(UP);
              break;
            case "captcha":
              this.FM.push(UP);
          }
        }
      },
      FQ: !(Y1.FS._waf_async_initialized = !0),
      FR: 0,
      Ff: function () {
        if (Y1.FS.XMLHttpRequest) {
          UE.FL = U7.open = function () {
            this.scene = void 0;
            this.__send_headers = {};
            this.__setHeaderHooked || (this.setRequestHeader = function (UL, UN) {
              this.__send_headers[UL] = UN;
              UU.call(this, UL, UN);
            }, this.__setHeaderHooked = !0);
            var UV = UW(UV = arguments[1]);
            (0, Fd.Fn)(UV, location.href) && (UV = Um(UV), arguments[1] = UV);
            this.openArgs = arguments;
            U9.apply(this, arguments);
          };
          UE.FV = U7.send = function (UV) {
            this.scene && delete this.scene;
            this.sendBody = UV;
            var UL = UE.Fu(this.openArgs[1]),
              UL = UH(UL, UV);
            if (UL) {
              this.openArgs[1] = UL;
              var UN,
                Ug = this.__send_headers;
              for (UN in U9.apply(this, this.openArgs), this.__send_headers = Ug) UU.apply(this, [UN, Ug[UN]]);
            }
            this.ori_event && this.ori_event.readystatechange && 0 < this.ori_event.readystatechange.length || UE.FN.call(this, "readystatechange", function () {});
            U8.call(this, UV);
          };
          UE.FV = U7.send;
          UE.FN = U7.addEventListener = function (UV, UL) {
            this.ori_event || (this.ori_event = {});
            var UN,
              Ug,
              UB = UL;
            UL = "readystatechange" != UV ? (Ug = UL, function (UQ) {
              !this.scene && Ug && Ug.call(this, UQ);
            }) : (UN = UL, function (UQ) {
              if (!this.scene) {
                var Uu = this.openArgs[1];
                if (4 === this.readyState && this.FI && (0, Fd.Fn)(Uu, location.href) && (UI = this.getAllResponseHeaders()) && -1 < UI.indexOf(Uo) && (this.FI = !1, Uy(Uu, this.getResponseHeader(Uo))), 4 === this.readyState && UE.FT(this.status, this.getResponseHeader("Content-Type"))) {
                  var UI = "";
                  try {
                    UI = Ua.get.call(this);
                  } catch (Uw) {}
                  var UT = this;
                  UE.Fw(UI, function (Uk) {
                    UT.scene = Uk;
                    UE.FB({
                      type: "xhr",
                      which: Uk,
                      Fk: UT
                    });
                  }, this.openArgs[1]);
                }
                !this.scene && UN && UN.call(this, UQ);
              }
            });
            UF.call(this, UV, UL);
            this.ori_event[UV] || (this.ori_event[UV] = []);
            this.ori_event[UV].push([UB, UL]);
          };
          UE.Fg = U7.removeEventListener = function (UV, UL) {
            var UN,
              Ug = this.ori_event[UV],
              UB = UL;
            for (UN in Ug) if (Ug[UN][0] == UL) {
              UB = Ug[UN][1];
              Ug.splice(UN, 1);
              break;
            }
            UY.call(this, UV, UB);
          };
          var UM,
            UK = ["abort", "error", "load", "loadend", "loadstart", "progress", "timeout", "readystatechange"];
          for (UM in UK) !function (UV) {
            Object.defineProperty(U7, "on" + UV, {
              get: function () {
                return this.Fp ? this.Fp["on" + UV] : void 0;
              },
              set: function (UL) {
                this.Fp || (this.Fp = {});
                this.Fp["on" + UV] && (UE.Fg.call(this, UV, this.Fp["on" + UV]), delete this.Fp["on" + UV]);
                UL && (UE.FN.call(this, UV, UL), this.Fp["on" + UV] = UL);
              },
              configurable: !0
            });
          }(UK[UM]);
          Object.defineProperty(U7, "responseType", {
            get: function () {
              return "json" != this.__real_responseType ? UA.get.call(this) : "json";
            },
            set: function (UV) {
              this.__real_responseType = UV;
              UA.set.call(this, "json" == UV ? "text" : UV);
            },
            configurable: !0
          });
          Object.defineProperty(U7, "response", {
            get: function () {
              if ("json" != this.__real_responseType) {
                return Ur.get.call(this);
              }
              try {
                return JSON.parse(Ua.get.call(this));
              } catch (UV) {
                return null;
              }
            },
            configurable: !0
          });
          Object.defineProperty(U7, "responseText", {
            get: function () {
              if ("json" != this.__real_responseType) {
                return Ua.get.call(this);
              }
              throw new Error("The value is only accessible if the object's 'responseType' is '' or 'text' (was 'json')");
            },
            configurable: !0
          });
          XMLHttpRequest._waf_hook = !0;
        }
      },
      Fw: function (UP, UM, UK) {
        var UV = "",
          UL = "";
        if (UP && "string" == typeof UP && -1 < UP.indexOf("initAli".concat("yunCaptcha")) && /userUserId: ?requestInfo.userUserId/.test(UP) && -1 < UP.indexOf("window._w".concat("af_is_mobile")) ? (UV = "captcha", UL = "2") : UP && "string" == typeof UP && -1 < UP.indexOf("appkey:".concat(" \"CF_APP_WAF\", // 应用标识")) ? UV = "captcha" : UP && "string" == typeof UP && -1 < UP.indexOf("acw_s".concat("c__v2")) && -1 < UP.indexOf("var arg1") && (UV = "jsclg"), "" != UV) {
          switch (UM(UV), UV) {
            case "jsclg":
              var UN = UP.split("var arg1='")[1].split("';")[0];
              if (40 === UN.length) {
                (0, U6.FG)(UN, UK);
                UE.Fv(null);
              } else {
                var Ug = /<script\sname="aliyunwaf_6a6f5ea8">(.+)?<\/script>/gm.exec(UP),
                  UB = Y1.FS.arg1,
                  UQ = (Y1.FS.arg1 = UN, Y1.FS.nothing2reload10ba = function (UT) {
                    Y1.FS.arg1 = UB;
                    (0, UG.FA)(UK, UT);
                    UQ.remove();
                    delete Y1.FS.nothing2reload10ba;
                    UE.Fv(null);
                  }, Y1.Fm.createElement("script")),
                  UN = (UQ.name = "aliyunwaf_6a6f5ea8", Yr ? UQ.innerText = Ug[1] : UQ.src = "/nfb8ouq4/om6lhs71/109xfjkc", Y1.Fm.head || Y1.Fm.getElementsByTagName("head")[0]);
                try {
                  UN.appendChild(UQ);
                } catch (UT) {}
              }
              return !0;
            case "captcha":
              var Ug = "cn",
                UN = "0b72f618-4c1-4aba-9a78-f" + new Date().getTime() + "ba",
                UR = {},
                Uf = /var requestInfo = ({[\s\S]*?});/g.exec(UP);
              if (null !== Uf && (UN = (UR = new Function("return " + Uf[1])()).token), "2" === UL) {
                UR.region && "sgp" == UR.region && (Ug = "en");
                UR.FX ? Y1.FS._waf_traceid = UR.FX : Y1.FS._waf_traceid = UE.FC(UP);
              } else {
                if (Y1.FS._waf_traceid = UE.FC(UP), !UE.FQ) {
                  var Uu,
                    UI = /window.(aliyun_captcha(id|trace)_[0-9a-f]{4}) ='([0-9a-f]+)';/gm;
                  for (UR.FZ = []; null !== (Uu = UI.exec(UP));) {
                    Uu.index === UI.lastIndex && UI.lastIndex++;
                    UR.FZ.push(Uu[1]);
                    Uu[1] && Uu[3] && (Y1.FS[Uu[1]] = Uu[3]);
                  }
                }
                (-1 < UP.indexOf("language: \"en\",//语言包，默认中文") || -1 < UP.indexOf("language: \"en\", //语言包，默认中文")) && (Ug = "en");
              }
              UE.Fj(UN, Ug, UL, UR);
              return !0;
          }
        }
        return !1;
      },
      Fc: function () {
        var UP, UM;
        Y1.FS.fetch && (UP = Request, Y1.FS.Request = function (UK, UV) {
          var UL = new UP(UK, UV);
          UK instanceof UP && (UV = Object.assign(UK.init ? Object.assign({}, UK.init) : {}, UV), UK = UK.input);
          UL.input = UK;
          UL.init = UV;
          return UL;
        }, UM = fetch, Y1.FS.fetch = function () {
          var UV = arguments[0],
            UL = arguments[1],
            UN = (UV instanceof UP && (UV = arguments[0].input, UL = arguments[0].init), null == UL ? UL = {
              credentials: "same-origin"
            } : UL.credentials || (UL.credentials = "same-origin"), UV = UW(UV), (0, Fd.Fn)(UV, location.href) && (UV = Um(UV)), UE.Fu(UV)),
            UN = UH(UN, UL.body);
          UN && (UV = UN);
          return UM.call(this, UV, UL).then(function (Ug) {
            return new Promise(function (UQ, UR) {
              Uy(UV, Ug.headers.get(Uo));
              UE.FT(Ug.status, Ug.headers.get("Content-Type")) ? Ug.clone().text().then(function (Uu) {
                UE.Fw(Uu, function (UT) {
                  UE.FB({
                    type: "fetch",
                    which: UT,
                    Fs: UV,
                    Fb: UL,
                    Fx: function (Uw) {
                      UQ(Uw);
                    }
                  });
                }, UV) || UQ(Ug);
              }).catch(function (Uu) {
                UQ(Ug);
              }) : UQ(Ug);
            });
          }).catch(function (Ug) {
            return Promise.reject(Ug);
          });
        }, Y1.FS.fetch._waf_hook = !0);
      },
      FT: function (UP, UM) {
        return 200 == UP && UM && -1 < UM.indexOf("text/html");
      },
      Fj: function (UP, UM, UK, UV) {
        var UN,
          Ug,
          UB = this;
        function UQ(UR, Uf, Uu) {
          setTimeout(function () {
            var UI, UT, Uw;
            Y1.Fm.getElementById("waf_nc_block") ? (Y1.Fm.getElementById("waf_nc_block").style.display = "block", UI = "访问验证", UT = "为保证您的正常访问,请进行如下验证", "en" == UM && (UT = "Please slide to verify that you're not a robot", UI = "Access Verification"), (Uw = Y1.Fm.getElementsByClassName("waf-nc-title")) && (Uw[0].innerText = UI), (Uw = Y1.Fm.getElementsByClassName(Y1.FS._waf_is_mobile ? "waf-nc-h5-description" : "waf-nc-description")) && (Uw[0].innerText = UT), Uf ? Uu() : UE.Fh(Uu, UR)) : UQ(UR);
          }, 500);
        }
        UB.FQ || (UB.FQ = !0, UE.FJ(UK), 2 == UK ? (UN = {
          userId: UV.userId,
          userUserId: UV.userUserId,
          SceneId: UV.sceneId,
          mode: "embed",
          element: "#nocaptcha",
          slideStyle: {
            width: Y1.FS._waf_is_mobile ? Y1.FS._waf_nc_width : 320,
            height: Y1.FS._waf_is_mobile ? Y1.FS._waf_nc_width / 8 : 40
          },
          language: UM,
          immediate: !0,
          success: function (UR) {
            var Uf = {
              u_atoken: UV.token,
              u_asig: UR,
              u_aref: UV.refer
            };
            UB.Fv(Uf);
          },
          fail: function (UR) {},
          getInstance: function (UR) {},
          verifyType: "1.0",
          region: UV.region,
          UserCertifyId: UV.FX
        }, UQ(UK, Y1.FS.initAliyunCaptcha, function () {
          initAliyunCaptcha(UN);
        })) : (Ug = {
          renderTo: "#nocaptcha",
          appkey: "CF_APP_WAF",
          scene: "register",
          trans: {
            key1: "code100",
            user: "default",
            aysnc: "1"
          },
          token: UP,
          language: UM,
          isEnabled: !0,
          times: 3,
          success: function (UR) {
            if (void 0 === UR.token && (UR.token = UP), UV.FZ) {
              for (var Uf = 0; Uf < UV.FZ.length; ++Uf) {
                delete Y1.FS[UV.FZ[Uf]];
              }
            }
            var Uu = {
              u_atoken: UR.token,
              u_asession: UR.sessionId,
              u_asig: UR.sig
            };
            UB.Fv(Uu);
          },
          fail: function (UR) {},
          error: function (UR) {}
        }, Y1.FS._waf_is_mobile && (Ug.scene = "register_h5", Ug.width = Y1.FS._waf_nc_width), UQ(UK, Y1.FS.AWSC && Y1.FS.AWSC.use, function () {
          AWSC.use("nc", function (UR, Uf) {
            Y1.FS.nc = Uf.init(Ug);
          });
        })), Y1.Fm.getElementById("waf-nc-traceid") && (Y1.Fm.getElementById("waf-nc-traceid").innerHTML = ("cn" == UM ? "日志ID: " : "TraceID:") + Y1.FS._waf_traceid));
      },
      Fv: function (UP) {
        var UK,
          UV,
          UL = this;
        UP ? (UK = Y1.Fm.getElementById("nocaptcha"), (UV = Y1.Fm.getElementById("waf_nc_block")) && (UV.style.display = "none"), UK && (UK.innerHTML = ""), UL.FQ = !1) : UL.FR += 1;
        (function UN(Ug) {
          if (0 != Ug.length) {
            var UQ = Ug[0];
            if (Ug.splice(0, 1), "xhr" === UQ.type) {
              var UR,
                Uf,
                Uu = UQ.Fk,
                UI = UQ.Fk,
                UT = UI.openArgs,
                Uw = UI.sendBody,
                Uk = UT[1],
                Up = ("captcha" === UQ.which && ((UR = UL.Fu(Uk)).search = UL.Fe(UR.search, UP), UT[1] = UL.FO(UR), Uu.FI = !0), UI.__send_headers);
              for (Uf in UE.FL.apply(Uu, UT), UI.__send_headers = Up) UU.call(Uu, Uf, Up[Uf]);
              Uu.addEventListener("readystatechange", function (Uv) {
                4 === Uu.readyState && UN(Ug);
              });
              UE.FV.call(Uu, Uw);
            } else {
              "fetch" === UQ.type && (Uk = UQ.Fs, UT = UQ.Fb, "object" == Ul(Uk) && Uk.url && UQ.Ft ? Uk = UQ.Ft : "captcha" === UQ.which && ((UR = UL.Fu(Uk)).search = UL.Fe(UR.search, UP), Uk = UL.FO(UR)), fetch(Uk, UT).then(function (Uv) {
                200 <= Uv.status && Uv.status < 500 && UQ.Fx(Uv);
                UN(Ug);
              }).catch(function (Uv) {}));
            }
          }
        })(UP ? this.FM : this.FK);
      },
      Fu: Fd.F9,
      FO: Fd.FY,
      Fe: Fd.Fa,
      FC: function (UP) {
        var UM, UK;
        return -1 == (UM = UP.indexOf("id=\"traceid\"")) ? "" : (UM = UP.indexOf(": ", UM), UK = UP.indexOf("</div>", UM), UP.substring(UM + 2, UK));
      },
      Fq: function (UP) {
        var UL,
          UN = Y1.FS._waf_is_mobile ? (UL = "<div id=\"waf_nc_block\"style=\"display: none;\"><div class=\"waf-nc-h5-mask\"></div><div id=\"WAF_NC_WRAPPER\"class=\"waf-nc-h5-wrapper\"><p class=\"waf-nc-title\">访问验证</p><div class=\"waf-nc-h5-description\">为了您的操作安全，请完成以下验证</div><p id=\"waf-nc-traceid\" class=\"waf-nc-traceid-class\"></p><div id=\"nocaptcha\" data-nc-idx=\"1\"></div></div></div>", UN = function () {
            try {
              var UQ,
                UR = Y1.Fm.getElementsByName("viewport");
              return UR && 1 == UR.length && UR[0].content && -1 != UR[0].content.indexOf("initial-scale") ? (UR = UR[0].content.replace(/\s+/g, ""), 0 == (UQ = parseFloat(UR.split("initial-scale=")[1].split(",")[0])) ? 1 : 1 / UQ) : 1;
            } catch (Uf) {
              return 1;
            }
          }(), Y1.FS._waf_nc_width = 300 * UN, "#waf_nc_block{position:fixed;_position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;z-index:99999}#waf_nc_block .waf-nc-h5-mask{background:#000;opacity:.5;filter:alpha(opacity=50);width:100%;height:100%}#waf_nc_block #aliyunCaptcha-sliding-slider{background:#ff6a00!important;font-size:" + 16 * UN + "px!important}#waf_nc_block .waf-nc-h5-wrapper{min-height:" + 220 * UN + "px;width:94%;position:absolute;top:20%;left:50%;;margin-left:-47%;padding:5% 1%;background:#fff;border-radius:" + 9 * UN + "px;box-sizing:border-box}#waf_nc_block .waf-nc-title{margin-top:" + +UN + "px;font-size:" + 16 * UN + "px;font-weight:500;color:#1a1a1a;text-align:center}#waf_nc_block .waf-nc-h5-description{margin-top:" + 24 * UN + "px;font-size:" + 12 * UN + "px;color:#595959;text-align:center}#waf_nc_block .waf-nc-traceid-class{margin-top:" + 8 * UN + "px;font-size:" + 12 * UN + "px;color:#999;text-align:center}#waf_nc_block .nc_bg{background:#fff3ea!important}#waf_nc_block .btn_slide{background:#ff6a00!important;border:0!important;color:#fff!important;width:" + 48 * UN + "px!important;height:" + 48 * UN + "px!important;font-size:" + 30 * UN + "px;font-weight:900!important;line-height:" + 48 * UN + "px!important}#waf_nc_block .btn_ok{background:#ff6a00!important;border:0!important;color:#fff!important;width:" + 48 * UN + "px!important;height:" + 48 * UN + "px!important;font-size:" + 30 * UN + "px;font-weight:900!important;line-height:" + 48 * UN + "px!important}#waf_nc_block .nc_scale{background:rgba(241,241,242,1)!important;height:" + 48 * UN + "px!important}#waf_nc_block .nc-lang-cnt{height:" + 48 * UN + "px!important;margin-left:" + 10 * UN + "px!important;line-height:" + 48 * UN + "px!important;font-size:" + 14 * UN + "px!important}#waf_nc_block .nc_wrapper{margin-left: auto;  margin-right: auto;}#waf_nc_block .nc-container #nc_2_wrapper{height:70px}#waf_nc_block #aliyunCaptcha-sliding-text {font-size:" + 15 * UN + "px}!important") : (UL = "<div id=\"waf_nc_block\" style=\"display: none;\">\n    <div class=\"waf-nc-mask\"></div>\n    <div id=\"WAF_NC_WRAPPER\" class=\"waf-nc-wrapper\">\n        <p class=\"waf-nc-title\">访问验证</p>\n        <p class=\"waf-nc-description\">为保证您的正常访问，请进行如下验证。</p>\n        <p id=\"waf-nc-traceid\" class=\"waf-nc-traceid-class\"></p>\n        <div id=\"nocaptcha\"></div>\n    </div>\n</div>\n</div>", "#waf_nc_block{position:fixed;_position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;z-index:99999}\n#waf_nc_block #aliyunCaptcha-sliding-slider{background:#ff6a00!important}\n#waf_nc_block .aliyunCaptcha-show{margin-left: -24px;}\n#waf_nc_block .waf-nc-mask{background:#000;opacity:.5;filter:alpha(opacity=50);width:100%;height:100%}\n#waf_nc_block .waf-nc-wrapper{min-height:220px;width:348px;text-align:center;position:absolute;top:20%;left:50%;margin-left:-200px;margin-bottom:16px;background:#fff;box-shadow:0 0 10px 0 rgba(0,0,0,0.15)}\n#waf_nc_block .waf-nc-title{margin-top:28px;font-size:24px;font-weight:500;color:#181818;letter-spacing:1.71px;text-align:center}\n#waf_nc_block .waf-nc-description{margin-top:24px;margin-left:24px;font-size:14px;color:#666;text-align:left}\n#waf_nc_block .waf-nc-traceid-class{margin-top:8px;margin-left:24px;font-size:12px;color:#999;text-align:left}\n#nocaptcha{margin-left:24px;margin-top:14px}\n#waf_nc_block .nc_bg{background:#fff3ea!important}\n#waf_nc_block .btn_slide{background:#ff6a00!important;border:0!important;color:#fff!important;width:48px!important;height:48px!important;font-size:30px;font-weight:900!important;line-height:48px!important}\n#waf_nc_block .btn_ok{background:#ff6a00!important;border:0!important;color:#fff!important;width:48px!important;height:48px!important;font-size:30px;font-weight:900!important;line-height:48px!important}\n#waf_nc_block .nc_scale{background:rgba(241,241,242,1)!important;height:48px!important}#waf_nc_block .nc-lang-cnt{height:48px!important;margin-left:10px!important;line-height:48px!important;font-size:14px!important}\n#waf_nc_block .sm-pop-inner{position:relative!important}#waf_nc_block .nc-container #nc_2_wrapper{height:70px!important}"),
          Ug = Y1.Fm.createElement("div"),
          UB = Y1.Fm.createElement("style");
        UB.type = "text/css";
        Ug.innerHTML = UL;
        try {
          UB.appendChild(Y1.Fm.createTextNode(UN));
        } catch (UQ) {
          UB.styleSheet.cssText = UN;
        }
        Y1.Fm.body.appendChild(Ug.firstChild);
        (Y1.Fm.head || Y1.Fm.getElementsByTagName("head")[0]).appendChild(UB);
      },
      FJ: function (UP) {
        Y1.Fm.getElementById("waf_nc_block") || UE.Fq(UP);
      },
      Fh: function (UP, UM) {
        var UK = Y1.Fm.createElement("script"),
          UV = new Date(),
          UL = Y1.Fm.head || Y1.Fm.getElementsByTagName("head")[0],
          UV = UV.getFullYear() + (UV.getMonth() + 1) + UV.getDate() + UV.getHours();
        UK.src = 2 == UM ? "//o.alicdn.com/captcha-frontend/aliyunCaptcha/AliyunCaptcha.js?t=" + UV : "//g.alicdn.com/AWSC/AWSC/awsc.js?t=" + UV;
        UP && ("onload" in UK ? UK.onload = function () {
          UP();
        } : UK.onreadystatechange = function () {
          /loaded|complete/.test(UK.readyState) && UP();
        });
        UL.appendChild(UK);
      }
    }).Ff(), UE.Fc(), YU(function () {
      Y1.FS._waf_body_copy = Y1.Fm.body;
    }));
  }();
}();