//Mon Aug 11 2025 07:23:39 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
!function () {
  "use strict";
  const Q = window,
    b = Q.document,
    Y = Q.navigator;
  var g, z;
  function r(I) {
    function O(S) {
      return S ? 1 : 0;
    }
    var W = "";
    try {
      W = b.documentElement.getAttribute && b.documentElement.getAttribute("webdriver");
    } catch (S) {}
    var v,
      D = 0,
      y = (Q.hasOwnProperty && Object.keys(b).forEach(function (x) {
        var B = Q.document[x];
        (0 == x.indexOf("$cdc_asdjflasutopfhvcZLmcfl_") || B && B.hasOwnProperty("idPrefix_") && B.hasOwnProperty("cache_") && B.hasOwnProperty("nextId_")) && (D = 1);
      }), 1 != D && (v = new RegExp("^cdc_[a-zA-Z0-9]{22}_"), Object.keys(Q).forEach(function (x) {
        "$chrome_asyncScriptInfo" != x && !v.test(x) || (D = 1);
      })), new Date()),
      R = 0;
    y.toString = function () {
      if (2 == ++R) {
        return "";
      }
    };
    g && g(y);
    var A = 0,
      A = (A = (A = (A = (A = (A = (A = (A = (A = (A = (A = (A = (A = (A = (A = (A = (A |= O(1 < R ? 1 : 0) << 0) | O(Y.webdriver) << 1) | O(D) << 2) | O(Q._phantom) << 3) | O(Q.callPhantom) << 4) | O(Q.phantom) << 5) | O(Q.spawn) << 6) | O(Q.emit) << 7) | O(W) << 8) | O(Q.Buffer) << 9) | O(Q.domAutomation) << 10) | O(Q.webdriver) << 11) | O(b.__webdriver_script_fn) << 12) | O(Q.fxdriver_id) << 13) | O(Q.__fxdriver_unwrapped) << 14) | O(Q.ClientUtils) << 15) | O(Q.__nightmare) << 16;
    r = function () {
      return A;
    };
    return A;
  }
  Q.console && (g = Q.console.log.bind(Q.console), Q.console.debug.bind(Q.console));
  z = {
    ua: function (I, V) {
      var v = {};
      v.iPESF = "DGi0YA7BemWnQjCl4+bR3f8SKIF9tUz/xhr2oEOgPpac=61ZqwTudLkM5vHyNXsVJ";
      var D = v;
      if (null == I) {
        return "";
      }
      var y = z.uu(I, 6, function (R) {
        return D.iPESF.charAt(R);
      });
      if (V) {
        return y;
      }
      switch (y.length % 4) {
        default:
        case 0:
          return y;
        case 1:
          return y + "===";
        case 2:
          return y + "==";
        case 3:
          return y + "=";
      }
    },
    uu: function (I, V, O) {
      if (null == I) {
        return "";
      }
      for (var W, v, D, y, R = {}, A = {}, S = "", x = 2, B = 3, P = 2, N = [], w = 0, q = 0, C = 0; C < I.length; C += 1) {
        if (D = I.charAt(C), Object.prototype.hasOwnProperty.call(R, D) || (R[D] = B++, A[D] = !0), y = S + D, Object.prototype.hasOwnProperty.call(R, y)) {
          S = y;
        } else {
          if (Object.prototype.hasOwnProperty.call(A, S)) {
            if (S.charCodeAt(0) < 256) {
              for (W = 0; W < P; W++) {
                w <<= 1;
                q == V - 1 ? (q = 0, N.push(O(w)), w = 0) : q++;
              }
              for (v = S.charCodeAt(0), W = 0; W < 8; W++) {
                w = w << 1 | 1 & v;
                q == V - 1 ? (q = 0, N.push(O(w)), w = 0) : q++;
                v >>= 1;
              }
            } else {
              for (v = 1, W = 0; W < P; W++) {
                w = w << 1 | v;
                q == V - 1 ? (q = 0, N.push(O(w)), w = 0) : q++;
                v = 0;
              }
              for (v = S.charCodeAt(0), W = 0; W < 16; W++) {
                w = w << 1 | 1 & v;
                q == V - 1 ? (q = 0, N.push(O(w)), w = 0) : q++;
                v >>= 1;
              }
            }
            0 == --x && (x = Math.pow(2, P), P++);
            delete A[S];
          } else {
            for (v = R[S], W = 0; W < P; W++) {
              w = w << 1 | 1 & v;
              q == V - 1 ? (q = 0, N.push(O(w)), w = 0) : q++;
              v >>= 1;
            }
          }
          0 == --x && (x = Math.pow(2, P), P++);
          R[y] = B++;
          S = String(D);
        }
      }
      if ("" !== S) {
        if (Object.prototype.hasOwnProperty.call(A, S)) {
          if (S.charCodeAt(0) < 256) {
            for (W = 0; W < P; W++) {
              w <<= 1;
              q == V - 1 ? (q = 0, N.push(O(w)), w = 0) : q++;
            }
            for (v = S.charCodeAt(0), W = 0; W < 8; W++) {
              w = w << 1 | 1 & v;
              q == V - 1 ? (q = 0, N.push(O(w)), w = 0) : q++;
              v >>= 1;
            }
          } else {
            for (v = 1, W = 0; W < P; W++) {
              w = w << 1 | v;
              q == V - 1 ? (q = 0, N.push(O(w)), w = 0) : q++;
              v = 0;
            }
            for (v = S.charCodeAt(0), W = 0; W < 16; W++) {
              w = w << 1 | 1 & v;
              q == V - 1 ? (q = 0, N.push(O(w)), w = 0) : q++;
              v >>= 1;
            }
          }
          0 == --x && (x = Math.pow(2, P), P++);
          delete A[S];
        } else {
          for (v = R[S], W = 0; W < P; W++) {
            w = w << 1 | 1 & v;
            q == V - 1 ? (q = 0, N.push(O(w)), w = 0) : q++;
            v >>= 1;
          }
        }
        0 == --x && (x = Math.pow(2, P), P++);
      }
      for (v = 2, W = 0; W < P; W++) {
        w = w << 1 | 1 & v;
        q == V - 1 ? (q = 0, N.push(O(w)), w = 0) : q++;
        v >>= 1;
      }
      for (;;) {
        if (w <<= 1, q == V - 1) {
          N.push(O(w));
          break;
        }
        q++;
      }
      return N.join("");
    }
  };
  const F = z;
  function H(I) {
    var v = {};
    v.cYphH = "(((.+)+)+)+$";
    var D = v;
    var y = b.createElement("div");
    y.innerHTML = "<a></a>";
    y.firstChild.href = I;
    y.innerHTML = y.innerHTML;
    (I = y.firstChild).href = y.firstChild.href;
    return {
      protocol: I.protocol,
      host: I.host,
      hostname: I.hostname,
      port: I.port,
      pathname: "/" === I.pathname.substr(0, 1) ? I.pathname : "/" + I.pathname,
      search: I.search,
      hash: I.hash,
      U: I.href
    };
  }
  function X(I, V) {
    return I.protocol + "//" + I.host + I.pathname + I.search + (V ? "" : I.hash);
  }
  const E = ["type__", "refer__", "ipcity__", "md5__", "decode__", "encode__", "time__", "timestamp__", "type__"],
    Z = {},
    L = {
      un: function (I) {
        return !(!I.protocol || 0 == I.protocol.indexOf("data") || I.host.match(/(cloudauth-device|captcha-(pro-)?open).*?\.aliyuncs\.com$/));
      },
      sig: function (I) {
        for (var V = 0, O = encodeURIComponent(I), W = 0; W < O.length; W++) {
          V = (V << 7) - V + 398 + O.charCodeAt(W);
          V |= 0;
        }
        return V;
      },
      uf: function (I, V) {
        return !!L.un(I) && L.J(I, V);
      },
      c: function (I) {
        if (Z[I]) {
          return Z[I];
        }
        for (var V = 0, O = 0; O < I.length; O++) {
          V += I[O].charCodeAt();
        }
        var W = E[V % E.length] + V % 10000;
        return Z[I] = W;
      },
      K: function (I) {
        var y = H(I).host,
          y = L.c(y),
          R = y;
        if (-1 == I.indexOf(R + "=")) {
          return I;
        }
        y = H(I);
        if (!y.search) {
          return I;
        }
        var D = y.search.slice(1).split("&");
        if (0 == D.length) {
          return I;
        }
        var W,
          v = [];
        for (W in D) 0 != D[W].indexOf(R + "=") && v.push(D[W]);
        y.search = 0 == v.length ? "" : "?" + v.join("&");
        return X(y);
      },
      J: function (I, V) {
        var O = X(I, !0);
        V && (O += V);
        V = L.sig(O) + "|" + r() + "|" + new Date().getTime() + "|1";
        O = F.ua(V, !0);
        V = {};
        V[L.c(I.host)] = O;
        I.search = function (W, v) {
          if (0 != Object.keys(v).length) {
            var D,
              y = "";
            for (D in v) y += encodeURIComponent(D) + "=" + encodeURIComponent(v[D]) + "&";
            if (y = y.slice(0, y.length - 1), 0 == W.length) {
              W = "?" + y;
            } else {
              for (var R = W.slice(1).split("&"), A = [], S = Object.keys(v), x = 0; x < R.length; x++) {
                D = decodeURIComponent(R[x].split("=", 1)[0]);
                -1 == S.indexOf(D) && A.push(R[x]);
              }
              W = "?" + (0 == A.length ? "" : A.join("&") + "&") + y;
            }
          }
          return W;
        }(I.search, V);
        return X(I);
      }
    };
  L.uf;
  const j = L.J,
    T = L.K;
  b.location.href = j(H(T(b.location.href)));
}();