//Thu Jul 03 2025 07:37:59 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
!function () {
  var h = {
    721: function (J2, J3, J4) {
      var J6 = J4(429).s;
      J2.exports = {
        d: function (J7) {
          for (var J8 = JSON.parse("[15, 35, 29, 24, 33, 16, 1, 38, 10, 9, 19, 31, 40, 27, 22, 23, 25, 13, 6, 11,39,18,20,8, 14, 21, 32, 26, 2, 30, 7, 4, 17, 5, 3, 28, 34, 37, 12, 36]"), J9 = "3000176000856006061501533003690027800375", JJ = [], Jf = "", JF = "", Jt = 0; Jt < J7.length; Jt++) {
            for (var JU = J7[Jt], Js = 0; Js < J8.length; Js++) {
              J8[Js] == Jt + 1 && (JJ[Js] = JU);
            }
          }
          for (Jf = JJ.join(""), Jt = 0; Jt < Jf.length && Jt < J9.length; Jt += 2) {
            var Jd = (parseInt(Jf.slice(Jt, Jt + 2), 16) ^ parseInt(J9.slice(Jt, Jt + 2), 16)).toString(16);
            JF += Jd = 1 == Jd.length ? "0" + Jd : Jd;
          }
          J6("acw_sc__v2", JF, 3600000);
        }
      };
    },
    58: function (J2, J3, J4) {
      "use strict";

      var J6 = {
        P: function () {
          return Js;
        }
      };
      J4.d(J3, J6);
      var J7;
      var J8 = J4(170);
      function J9(Jd) {
        function JB(Jc) {
          return Jc ? 1 : 0;
        }
        var Jb = "";
        try {
          Jb = J8.B.documentElement.getAttribute && J8.B.documentElement.getAttribute("webdriver");
        } catch (Jc) {}
        var Ju;
        var JE = 0;
        J8.b.hasOwnProperty && Object.keys(J8.B).forEach(function (JD) {
          var JG = J8.b.document[JD];
          (0 == JD.indexOf("$cdc_asdjflasutopfhvcZLmcfl_") || JG && JG.hasOwnProperty("idPrefix_") && JG.hasOwnProperty("cache_") && JG.hasOwnProperty("nextId_")) && (JE = 1);
        });
        1 != JE && (Ju = new RegExp("^cdc_[a-zA-Z0-9]{22}_"), Object.keys(J8.b).forEach(function (JD) {
          "$chrome_asyncScriptInfo" != JD && !Ju.test(JD) || (JE = 1);
        }));
        var JL = new Date();
        var Jp = 0;
        JL.toString = function () {
          if (2 == ++Jp) {
            return "";
          }
        };
        J7 && J7(JL);
        var Jv = 0;
        var Jv = (Jv = (Jv = (Jv = (Jv = (Jv = (Jv = (Jv = (Jv = (Jv = (Jv = (Jv = (Jv = (Jv = (Jv = (Jv |= ((1 < Jp ? 1 : 0) ? 1 : 0) << 0) | JB(J8.u.webdriver) << 1) | (JE ? 1 : 0) << 2) | JB(J8.b._phantom) << 3) | JB(J8.b.callPhantom) << 4) | JB(J8.b.phantom) << 5) | JB(J8.b.spawn) << 6) | JB(J8.b.emit) << 7 | (Jb ? 1 : 0) << 8) | JB(J8.b.Buffer) << 9) | JB(J8.b.domAutomation) << 10) | JB(J8.b.webdriver) << 11) | JB(J8.B.__webdriver_script_fn) << 12) | JB(J8.b.fxdriver_id) << 13) | JB(J8.b.__fxdriver_unwrapped) << 14) | JB(J8.b.ClientUtils) << 15) | JB(J8.b.__nightmare) << 16;
        J9 = function () {
          return Jv;
        };
        return Jv;
      }
      J8.b.console && (J7 = J8.b.console.log.bind(J8.b.console), J8.b.console.debug.bind(J8.b.console));
      var JJ;
      JJ = {
        ua: function (Jd, JP) {
          if (null == Jd) {
            return "";
          }
          var Ju = JJ.uu(Jd, 6, function (Jp) {
            return "DGi0YA7BemWnQjCl4+bR3f8SKIF9tUz/xhr2oEOgPpac=61ZqwTudLkM5vHyNXsVJ".charAt(Jp);
          });
          if (JP) {
            return Ju;
          }
          switch (Ju.length % 4) {
            default:
            case 0:
              return Ju;
            case 1:
              return Ju + "===";
            case 2:
              return Ju + "==";
            case 3:
              return Ju + "=";
          }
        },
        uu: function (Jd, JP, JB) {
          if (null == Jd) {
            return "";
          }
          for (var Jb, Ju, JE, JL, Jp = {}, Jv = {}, Jc = "", JD = 2, JG = 3, JN = 2, JO = [], Jw = 0, Ja = 0, Jg = 0; Jg < Jd.length; Jg += 1) {
            if (JE = Jd.charAt(Jg), Object.prototype.hasOwnProperty.call(Jp, JE) || (Jp[JE] = JG++, Jv[JE] = true), JL = Jc + JE, Object.prototype.hasOwnProperty.call(Jp, JL)) {
              Jc = JL;
            } else {
              if (Object.prototype.hasOwnProperty.call(Jv, Jc)) {
                if (Jc.charCodeAt(0) < 256) {
                  for (Jb = 0; Jb < JN; Jb++) {
                    Jw <<= 1;
                    Ja == JP - 1 ? (Ja = 0, JO.push(JB(Jw)), Jw = 0) : Ja++;
                  }
                  for (Ju = Jc.charCodeAt(0), Jb = 0; Jb < 8; Jb++) {
                    Jw = Jw << 1 | 1 & Ju;
                    Ja == JP - 1 ? (Ja = 0, JO.push(JB(Jw)), Jw = 0) : Ja++;
                    Ju >>= 1;
                  }
                } else {
                  for (Ju = 1, Jb = 0; Jb < JN; Jb++) {
                    Jw = Jw << 1 | Ju;
                    Ja == JP - 1 ? (Ja = 0, JO.push(JB(Jw)), Jw = 0) : Ja++;
                    Ju = 0;
                  }
                  for (Ju = Jc.charCodeAt(0), Jb = 0; Jb < 16; Jb++) {
                    Jw = Jw << 1 | 1 & Ju;
                    Ja == JP - 1 ? (Ja = 0, JO.push(JB(Jw)), Jw = 0) : Ja++;
                    Ju >>= 1;
                  }
                }
                0 == --JD && (JD = Math.pow(2, JN), JN++);
                delete Jv[Jc];
              } else {
                for (Ju = Jp[Jc], Jb = 0; Jb < JN; Jb++) {
                  Jw = Jw << 1 | 1 & Ju;
                  Ja == JP - 1 ? (Ja = 0, JO.push(JB(Jw)), Jw = 0) : Ja++;
                  Ju >>= 1;
                }
              }
              0 == --JD && (JD = Math.pow(2, JN), JN++);
              Jp[JL] = JG++;
              Jc = String(JE);
            }
          }
          if ("" !== Jc) {
            if (Object.prototype.hasOwnProperty.call(Jv, Jc)) {
              if (Jc.charCodeAt(0) < 256) {
                for (Jb = 0; Jb < JN; Jb++) {
                  Jw <<= 1;
                  Ja == JP - 1 ? (Ja = 0, JO.push(JB(Jw)), Jw = 0) : Ja++;
                }
                for (Ju = Jc.charCodeAt(0), Jb = 0; Jb < 8; Jb++) {
                  Jw = Jw << 1 | 1 & Ju;
                  Ja == JP - 1 ? (Ja = 0, JO.push(JB(Jw)), Jw = 0) : Ja++;
                  Ju >>= 1;
                }
              } else {
                for (Ju = 1, Jb = 0; Jb < JN; Jb++) {
                  Jw = Jw << 1 | Ju;
                  Ja == JP - 1 ? (Ja = 0, JO.push(JB(Jw)), Jw = 0) : Ja++;
                  Ju = 0;
                }
                for (Ju = Jc.charCodeAt(0), Jb = 0; Jb < 16; Jb++) {
                  Jw = Jw << 1 | 1 & Ju;
                  Ja == JP - 1 ? (Ja = 0, JO.push(JB(Jw)), Jw = 0) : Ja++;
                  Ju >>= 1;
                }
              }
              0 == --JD && (JD = Math.pow(2, JN), JN++);
              delete Jv[Jc];
            } else {
              for (Ju = Jp[Jc], Jb = 0; Jb < JN; Jb++) {
                Jw = Jw << 1 | 1 & Ju;
                Ja == JP - 1 ? (Ja = 0, JO.push(JB(Jw)), Jw = 0) : Ja++;
                Ju >>= 1;
              }
            }
            0 == --JD && (JD = Math.pow(2, JN), JN++);
          }
          for (Ju = 2, Jb = 0; Jb < JN; Jb++) {
            Jw = Jw << 1 | 1 & Ju;
            Ja == JP - 1 ? (Ja = 0, JO.push(JB(Jw)), Jw = 0) : Ja++;
            Ju >>= 1;
          }
          for (;;) {
            if (Jw <<= 1, Ja == JP - 1) {
              JO.push(JB(Jw));
              break;
            }
            Ja++;
          }
          return JO.join("");
        }
      };
      var Jf = JJ;
      var JF = J4(554);
      var Jt = ["type__", "refer__", "ipcity__", "md5__", "decode__", "encode__", "time__", "timestamp__", "type__"];
      var JU = {
        un: function (Jd) {
          return !(!Jd.protocol || 0 == Jd.protocol.indexOf("data") || Jd.host.match(/(cloudauth-device|captcha-(pro-)?open).*?\.aliyuncs\.com$/));
        },
        sig: function (Jd) {
          for (var JP = 0, JB = encodeURIComponent(Jd), Jb = 0; Jb < JB.length; Jb++) {
            JP = (JP << 7) - JP + 398 + JB.charCodeAt(Jb);
            JP |= 0;
          }
          return JP;
        },
        uf: function (Jd, JP) {
          return !!JU.un(Jd) && JU.E(Jd, JP);
        },
        E: function (Jd, JP) {
          var Ju = (0, JF.p)(Jd, true);
          JP && (Ju += JP);
          for (var JP = JU.sig(Ju) + "|" + J9() + "|" + new Date().getTime() + "|1", Ju = Jf.ua(JP, true), JE = 0, JL = 0; JL < Jd.host.length; JL++) {
            JE += Jd.host[JL].charCodeAt();
          }
          JP = {};
          JP[Jt[JE % Jt.length] + JE % 10000] = Ju;
          Jd.search = (0, JF.L)(Jd.search, JP);
          return (0, JF.p)(Jd);
        }
      };
      var Js = JU.uf;
      JU.E;
    },
    170: function (J2, J3, J4) {
      "use strict";

      var J5 = {
        b: function () {
          return J6;
        },
        B: function () {
          return J7;
        },
        u: function () {
          return J8;
        },
        v: function () {
          return J9;
        }
      };
      J4.d(J3, J5);
      var J6 = window;
      var J7 = J6.document;
      var J8 = J6.navigator;
      var J9 = "2.0.2";
    },
    429: function (J2, J3, J4) {
      "use strict";

      var J6 = {
        s: function () {
          return J9;
        }
      };
      J4.r(J3);
      J4.d(J3, J6);
      var J7 = J4(554);
      var J8 = J4(170);
      function J9(JJ, Jf, JF, Jt) {
        var Jt = Jt || (0, J7.cd)();
        var JU = "number" == typeof JF ? ((JU = new Date()).setTime(JU.getTime() + JF), JU.toGMTString()) : JF;
        J8.B.cookie = JJ + "=" + Jf + ";expires=" + JU + ";path=/;domain=" + Jt;
      }
    },
    554: function (J2, J3, J4) {
      "use strict";

      var J6 = {
        L: function () {
          return JF;
        },
        cd: function () {
          return JJ;
        },
        p: function () {
          return Jt;
        },
        c: function () {
          return Jf;
        }
      };
      J4.d(J3, J6);
      var J7 = J4(170);
      var J8 = {};
      var J9 = /^(ac\.cn|ac\.id|ah\.cn|bj\.cn|club\.tw|co\.id|co\.jp|co\.kr|co\.nz|co\.uk|com\.cn|com\.hk|com\.mo|com\.my|com\.tw|cq\.cn|ebiz\.tw|edu\.cn|edu\.hk|edu\.mo|edu\.tw|fj\.cn|game\.tw|gd\.cn|go\.id|gov\.cn|gov\.hk|gov\.mo|gov\.my|gov\.ph|gov\.tw|gs\.cn|gx\.cn|gz\.cn|ha\.cn|hb\.cn|he\.cn|hi\.cn|hk\.cn|hl\.cn|hn\.cn|idv\.hk|idv\.tw|jl\.cn|js\.cn|jx\.cn|ln\.cn|mil\.cn|mil\.tw|mo\.cn|net\.cn|net\.hk|net\.mo|net\.tw|nm\.cn|nx\.cn|org\.cn|org\.hk|org\.mo|org\.tw|qh\.cn|sc\.cn|sd\.cn|sh\.cn|sn\.cn|sx\.cn|tj\.cn|tw\.cn|us\.org|xj\.cn|xz\.cn|yn\.cn|zj\.cn)$/;
      function JJ() {
        var JU;
        var Js;
        var Jd = J7.B.location.host.split(":")[0];
        J8[Jd] ? Jd = J8[Jd] : 2 < (Js = (JU = Jd.split(".")).length) && !/^(\d+\.)*\d+$/.test(Jd) && (Jd = JU[Js - 2] + "." + JU[Js - 1], J9.test(Jd)) && (Jd = JU[Js - 3] + "." + Jd);
        return Jd;
      }
      function Jf(JU) {
        var Js = J7.B.createElement("div");
        Js.innerHTML = "<a></a>";
        Js.firstChild.href = JU;
        Js.innerHTML = Js.innerHTML;
        (JU = Js.firstChild).href = Js.firstChild.href;
        return {
          protocol: JU.protocol,
          host: JU.host,
          hostname: JU.hostname,
          port: JU.port,
          pathname: "/" === JU.pathname.substr(0, 1) ? JU.pathname : "/" + JU.pathname,
          search: JU.search,
          hash: JU.hash,
          D: JU.href
        };
      }
      function JF(JU, Js) {
        if (0 != Object.keys(Js).length) {
          var Jd;
          var JP = "";
          for (Jd in Js) JP += encodeURIComponent(Jd) + "=" + encodeURIComponent(Js[Jd]) + "&";
          if (JP = JP.slice(0, JP.length - 1), 0 == JU.length) {
            JU = "?" + JP;
          } else {
            for (var JB = JU.slice(1).split("&"), Jb = [], Ju = Object.keys(Js), JE = 0; JE < JB.length; JE++) {
              Jd = decodeURIComponent(JB[JE].split("=", 1)[0]);
              -1 == Ju.indexOf(Jd) && Jb.push(JB[JE]);
            }
            JU = "?" + (0 == Jb.length ? "" : Jb.join("&") + "&") + JP;
          }
        }
        return JU;
      }
      function Jt(JU, Js) {
        return JU.protocol + "//" + JU.host + JU.pathname + JU.search + (Js ? "" : JU.hash);
      }
    }
  };
  var J0 = {};
  function J1(J2) {
    var J3 = J0[J2];
    var J4 = {
      exports: {}
    };
    undefined !== J3 || (J3 = J0[J2] = J4, h[J2](J3, J3.exports, J1));
    return J3.exports;
  }
  J1.d = function (J2, J3) {
    for (var J4 in J3) J1.G(J3, J4) && !J1.G(J2, J4) && Object.defineProperty(J2, J4, {
      enumerable: true,
      get: J3[J4]
    });
  };
  J1.G = function (J2, J3) {
    return Object.prototype.hasOwnProperty.call(J2, J3);
  };
  J1.r = function (J2) {
    var J3 = {
      value: true
    };
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(J2, Symbol.toStringTag, {
      value: "Module"
    });
    Object.defineProperty(J2, "__esModule", J3);
  };
  !function () {
    "use strict";
    var J4;
    var J5;
    var J6;
    var J7;
    var J8;
    var J9;
    var JJ;
    var Jf;
    var JF = J1(721);
    var Jt = J1(554);
    var JU = J1(429);
    var Js = J1(170);
    J6 = [];
    J7 = Js.B.documentElement;
    JO = J7.doScroll;
    J8 = "DOMContentLoaded";
    Jd = "addEventListener";
    J9 = "onreadystatechange";
    JJ = "readyState";
    Jf = (JO ? /^loaded|^c/ : /^loaded|c/).test(Js.B[JJ]);
    Js.B[Jd] && Js.B[Jd](J8, J5 = function () {
      Js.B.removeEventListener(J8, J5, false);
      JP();
    }, false);
    JO && Js.B.attachEvent(J9, J5 = function () {
      /^c/.test(Js.B[JJ]) && (Js.B.detachEvent(J9, J5), JP());
    });
    J4 = JO ? function (Ja) {
      if (self != top) {
        Jf ? Ja() : J6.push(Ja);
      } else {
        try {
          J7.doScroll("left");
        } catch (Jg) {
          return void setTimeout(function () {
            J4(Ja);
          }, 50);
        }
        Ja();
      }
    } : function (Ja) {
      Jf ? Ja() : J6.push(Ja);
    };
    var Jd = J4;
    function JP(Ja) {
      for (Jf = 1; Ja = J6.shift();) {
        Ja();
      }
    }
    var JB = XMLHttpRequest.prototype;
    var Jb = JB.send;
    var Ju = JB.open;
    var JE = JB.addEventListener;
    var JL = JB.removeEventListener;
    var Jp = JB.setRequestHeader;
    var Jv = Object.getOwnPropertyDescriptor(JB, "responseText");
    var Jc = Object.getOwnPropertyDescriptor(JB, "responseType");
    var JD = Object.getOwnPropertyDescriptor(JB, "response");
    function JG(Ja) {
      return (JG = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (Jg) {
        return typeof Jg;
      } : function (Jg) {
        return Jg && "function" == typeof Symbol && Jg.constructor === Symbol && Jg !== Symbol.prototype ? "symbol" : typeof Jg;
      })(Ja);
    }
    var JN;
    var JO;
    var Jw = J1(58).P;
    Js.b._waf_async_initialized || (Js.b._waf_is_mobile = false, Js.b._waf_traceid = "", Js.b._waf_nc_width = 300, Js.b._waf_websdk_version = Js.v, JO = Js.u.userAgent || Js.u.vendor || Js.b.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(JO) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(JO.substr(0, 4))) && (Js.b._waf_is_mobile = true), (JN = {
      N: [],
      O: [],
      w: undefined,
      a: undefined,
      g: undefined,
      z: function (Ja) {
        if (Ja) {
          switch (Ja.which) {
            case "jsclg":
              this.O.push(Ja);
              break;
            case "captcha":
              this.N.push(Ja);
          }
        }
      },
      Q: !(Js.b._waf_async_initialized = true),
      k: 0,
      R: function () {
        if (Js.b.XMLHttpRequest) {
          JB.open = function () {
            this.scene = undefined;
            this.__send_headers = {};
            this.__setHeaderHooked || (this.setRequestHeader = function (JQ, Jk) {
              this.__send_headers[JQ] = Jk;
              Jp.call(this, JQ, Jk);
            }, this.__setHeaderHooked = true);
            this.Y = arguments;
            Ju.apply(this, arguments);
          };
          JB.send = function (JQ) {
            this.scene && delete this.scene;
            this.j = JQ;
            var Jk = JN.V(this.Y[1]);
            var Jk = Jw(Jk, JQ);
            if (Jk) {
              this.Y[1] = Jk;
              var JR;
              var JY = this.__send_headers;
              for (JR in Ju.apply(this, this.Y), this.__send_headers = JY) Jp.apply(this, [JR, JY[JR]]);
            }
            this.S && this.S.readystatechange && 0 < this.S.readystatechange.length || JN.a.call(this, "readystatechange", function () {});
            Jb.call(this, JQ);
          };
          JN.w = JB.send;
          JN.a = JB.addEventListener = function (JQ, Jk) {
            this.S || (this.S = {});
            var JY;
            var Jj;
            var JV = Jk;
            Jk = "readystatechange" != JQ ? (Jj = Jk, function (JS) {
              !this.scene && Jj && Jj.call(this, JS);
            }) : (JY = Jk, function (JS) {
              if (!this.scene) {
                if (4 === this.readyState && JN.y(this.status, this.getResponseHeader("Content-Type"))) {
                  var Jq = "";
                  try {
                    Jq = Jv.get.call(this);
                  } catch (JM) {}
                  var Ji = this;
                  JN.C(Jq, function (Jr) {
                    Ji.scene = Jr;
                    JN.z({
                      type: "xhr",
                      which: Jr,
                      q: Ji
                    });
                  });
                }
                !this.scene && JY && JY.call(this, JS);
              }
            });
            JE.call(this, JQ, Jk);
            this.S[JQ] || (this.S[JQ] = []);
            this.S[JQ].push([JV, Jk]);
          };
          JN.g = JB.removeEventListener = function (JQ, Jk) {
            var JR;
            var JY = this.S[JQ];
            var Jj = Jk;
            for (JR in JY) if (JY[JR][0] == Jk) {
              Jj = JY[JR][1];
              JY.splice(JR, 1);
              break;
            }
            JL.call(this, JQ, Jj);
          };
          var Jg;
          var Jz = ["abort", "error", "load", "loadend", "loadstart", "progress", "timeout", "readystatechange"];
          for (Jg in Jz) !function (JQ) {
            Object.defineProperty(JB, "on" + JQ, {
              get: function () {
                return this.i ? this.i["on" + JQ] : undefined;
              },
              set: function (JR) {
                this.i || (this.i = {});
                this.i["on" + JQ] && (JN.g.call(this, JQ, this.i["on" + JQ]), delete this.i["on" + JQ]);
                JR && (JN.a.call(this, JQ, JR), this.i["on" + JQ] = JR);
              },
              configurable: true
            });
          }(Jz[Jg]);
          Object.defineProperty(JB, "responseType", {
            get: function () {
              return "json" != this.__real_responseType ? Jc.get.call(this) : "json";
            },
            set: function (JQ) {
              this.__real_responseType = JQ;
              Jc.set.call(this, "json" == JQ ? "text" : JQ);
            },
            configurable: true
          });
          Object.defineProperty(JB, "response", {
            get: function () {
              if ("json" != this.__real_responseType) {
                return JD.get.call(this);
              }
              try {
                return JSON.parse(Jv.get.call(this));
              } catch (JQ) {
                return null;
              }
            },
            configurable: true
          });
          Object.defineProperty(JB, "responseText", {
            get: function () {
              if ("json" != this.__real_responseType) {
                return Jv.get.call(this);
              }
              throw new Error("The value is only accessible if the object's 'responseType' is '' or 'text' (was 'json')");
            },
            configurable: true
          });
          XMLHttpRequest._waf_hook = true;
        }
      },
      C: function (Ja, Jg) {
        var Jz = "";
        var JQ = "";
        if (Ja && "string" == typeof Ja && -1 < Ja.indexOf("var AC_".concat("Opt = {")) && -1 < Ja.indexOf("userUserId: requestInfo.userUserId") && -1 < Ja.indexOf("window._waf_is_mobile") ? (Jz = "captcha", JQ = "2") : Ja && "string" == typeof Ja && -1 < Ja.indexOf("appkey:".concat(" \"CF_APP_WAF\", // 应用标识")) ? Jz = "captcha" : Ja && "string" == typeof Ja && -1 < Ja.indexOf("acw_s".concat("c__v2")) && -1 < Ja.indexOf("var arg1") && (Jz = "jsclg"), "" != Jz) {
          switch (Jg(Jz), Jz) {
            case "jsclg":
              var Jk;
              var JR;
              var JY = Ja.split("var arg1='")[1].split("';")[0];
              40 === JY.length ? ((0, JF.d)(JY), JN.M(null)) : (Jj = /<script\sname="aliyunwaf_6a6f5ea8">(.+)?<\/script>/gm.exec(Ja), Jk = Js.b.arg1, Js.b.arg1 = JY, Js.b.nothing2reload10ba = function (Jq) {
                Js.b.arg1 = Jk;
                (0, JU.s)("acw_sc__v2", Jq, 3600000);
                JR.remove();
                delete Js.b.nothing2reload10ba;
                JN.M(null);
              }, (JR = Js.B.createElement("script")).name = "aliyunwaf_6a6f5ea8", JR.innerText = Jj[1], (Js.B.head || Js.B.getElementsByTagName("head")[0]).appendChild(JR));
              return true;
            case "captcha":
              var JY = "cn";
              var Jj = "0b72f618-4c1-4aba-9a78-f" + new Date().getTime() + "ba";
              var JV = {};
              var JS = /var requestInfo = ({[\s\S]*?});/g.exec(Ja);
              if (null !== JS && (Jj = (JV = new Function("return " + JS[1])()).token), "2" === JQ) {
                JV.region && "sgp" == JV.region && (JY = "en");
                JV.e ? Js.b._waf_traceid = JV.e : Js.b._waf_traceid = JN.W(Ja);
              } else {
                if (Js.b._waf_traceid = JN.W(Ja), !JN.Q) {
                  var Jy;
                  var JC = /window.(aliyun_captcha(id|trace)_[0-9a-f]{4}) ='([0-9a-f]+)';/gm;
                  for (JV.o = []; null !== (Jy = JC.exec(Ja));) {
                    Jy.index === JC.lastIndex && JC.lastIndex++;
                    JV.o.push(Jy[1]);
                    Jy[1] && Jy[3] && (Js.b[Jy[1]] = Jy[3]);
                  }
                }
                (-1 < Ja.indexOf("language: \"en\",//语言包，默认中文") || -1 < Ja.indexOf("language: \"en\", //语言包，默认中文")) && (JY = "en");
              }
              JN.l(Jj, JY, JQ, JV);
              return true;
          }
        }
        return false;
      },
      Z: function () {
        var Jg;
        var Jz;
        Js.b.fetch && (Jg = Request, Js.b.Request = function (JQ, Jk) {
          JQ instanceof Jg && (Jk = Object.assign(JQ.init ? Object.assign({}, JQ.init) : {}, Jk), JQ = JQ.input);
          var JR = new Jg(JQ, Jk);
          JR.input = JQ;
          JR.init = Jk;
          return JR;
        }, Jz = fetch, Js.b.fetch = function () {
          var Jk = arguments[0];
          var JR = arguments[1];
          Jk instanceof Jg && (Jk = arguments[0].input, JR = arguments[0].init);
          null == JR ? JR = {
            credentials: "same-origin"
          } : JR.credentials || (JR.credentials = "same-origin");
          var JY = JN.V(Jk);
          var JY = Jw(JY, JR.body);
          JY && (Jk = JY);
          return Jz.call(this, Jk, JR).then(function (Jj) {
            return new Promise(function (JV, JS) {
              JN.y(Jj.status, Jj.headers.get("Content-Type")) ? Jj.clone().text().then(function (JC) {
                JN.C(JC, function (Ji) {
                  JN.z({
                    type: "fetch",
                    which: Ji,
                    H: Jk,
                    A: JR,
                    n: function (Jr) {
                      JV(Jr);
                    }
                  });
                }) || JV(Jj);
              }).catch(function (JC) {
                JV(Jj);
              }) : JV(Jj);
            });
          }).catch(function (Jj) {
            return Promise.reject(Jj);
          });
        }, Js.b.fetch._waf_hook = true);
      },
      y: function (Ja, Jg) {
        return 200 == Ja && Jg && -1 < Jg.indexOf("text/html");
      },
      l: function (Ja, Jg, Jz, JQ) {
        var JR;
        var JY;
        var Jj = this;
        function JV(JS, Jy, JC) {
          setTimeout(function () {
            var Ji;
            var JM;
            var Jr;
            Js.B.getElementById("waf_nc_block") ? (Js.B.getElementById("waf_nc_block").style.display = "block", Ji = "访问验证", JM = "为保证您的正常访问,请进行如下验证", "en" == Jg && (JM = "Please slide to verify that you're not a robot", Ji = "Access Verification"), (Jr = Js.B.getElementsByClassName("waf-nc-title")) && (Jr[0].innerText = Ji), (Jr = Js.B.getElementsByClassName(Js.b._waf_is_mobile ? "waf-nc-h5-description" : "waf-nc-description")) && (Jr[0].innerText = JM), Jy ? JC() : JN.m(JC, JS)) : JV(JS);
          }, 500);
        }
        Jj.Q || (Jj.Q = true, JN.K(Jz), 2 == Jz ? (JR = {
          userId: JQ.userId,
          userUserId: JQ.userUserId,
          SceneId: JQ.sceneId,
          mode: "embed",
          element: "#nocaptcha",
          slideStyle: {
            width: Js.b._waf_is_mobile ? Js.b._waf_nc_width : 320,
            height: Js.b._waf_is_mobile ? Js.b._waf_nc_width / 8 : 40
          },
          language: Jg,
          immediate: true,
          success: function (JS) {
            var Jy = {
              u_atoken: JQ.token,
              u_asig: JS,
              u_aref: JQ.refer
            };
            Jj.M(Jy);
          },
          fail: function (JS) {},
          getInstance: function (JS) {},
          verifyType: "1.0",
          region: JQ.region,
          UserCertifyId: JQ.e
        }, JV(Jz, Js.b.initAliyunCaptcha, function () {
          initAliyunCaptcha(JR);
        })) : (JY = {
          renderTo: "#nocaptcha",
          appkey: "CF_APP_WAF",
          scene: "register",
          trans: {
            key1: "code100",
            user: "default",
            aysnc: "1"
          },
          token: Ja,
          language: Jg,
          isEnabled: true,
          times: 3,
          success: function (JS) {
            if (undefined === JS.token && (JS.token = Ja), JQ.o) {
              for (var Jy = 0; Jy < JQ.o.length; ++Jy) {
                delete Js.b[JQ.o[Jy]];
              }
            }
            var JC = {
              u_atoken: JS.token,
              u_asession: JS.sessionId,
              u_asig: JS.sig
            };
            Jj.M(JC);
          },
          fail: function (JS) {},
          error: function (JS) {}
        }, Js.b._waf_is_mobile && (JY.scene = "register_h5", JY.width = Js.b._waf_nc_width), JV(Jz, Js.b.AWSC && Js.b.AWSC.use, function () {
          AWSC.use("nc", function (JS, Jy) {
            Js.b.nc = Jy.init(JY);
          });
        })), Js.B.getElementById("waf-nc-traceid") && (Js.B.getElementById("waf-nc-traceid").innerHTML = ("cn" == Jg ? "日志ID: " : "TraceID:") + Js.b._waf_traceid));
      },
      M: function (Ja) {
        var Jz;
        var JQ;
        var Jk = this;
        Ja ? (Jz = Js.B.getElementById("nocaptcha"), (JQ = Js.B.getElementById("waf_nc_block")) && (JQ.style.display = "none"), Jz && (Jz.innerHTML = ""), Jk.Q = false) : Jk.k += 1;
        (function JR(JY) {
          if (0 != JY.length) {
            var Jj = JY[0];
            if (JY.splice(0, 1), "xhr" === Jj.type) {
              var JV;
              var JS;
              var Jy = Jj.q;
              var JC = Jj.q;
              var Jq = JC.Y;
              var Ji = JC.j;
              var JM = Jq[1];
              "captcha" === Jj.which && ((JV = Jk.V(JM)).search = Jk.T(JV.search, Ja), Jq[1] = Jk.X(JV));
              var Jr = JC.__send_headers;
              for (JS in Ju.apply(Jy, Jq), JC.__send_headers = Jr) Jp.call(Jy, JS, Jr[JS]);
              Jy.addEventListener("readystatechange", function (Je) {
                4 === Jy.readyState && JR(JY);
              });
              JN.w.call(Jy, Ji);
            } else {
              "fetch" === Jj.type && (JM = Jj.H, Jq = Jj.A, "object" == JG(JM) && JM.url && Jj.I ? JM = Jj.I : "captcha" === Jj.which && ((JV = Jk.V(JM)).search = Jk.T(JV.search, Ja), JM = Jk.X(JV)), fetch(JM, Jq).then(function (Je) {
                200 <= Je.status && Je.status < 500 && Jj.n(Je);
                JR(JY);
              }).catch(function (Je) {}));
            }
          }
        })(Ja ? this.N : this.O);
      },
      V: Jt.c,
      X: Jt.p,
      T: Jt.L,
      W: function (Ja) {
        var Jg;
        var Jz;
        return -1 == (Jg = Ja.indexOf("id=\"traceid\"")) ? "" : (Jg = Ja.indexOf(": ", Jg), Jz = Ja.indexOf("</div>", Jg), Ja.substring(Jg + 2, Jz));
      },
      x: function (Ja) {
        var Jg;
        var Jz = Js.b._waf_is_mobile ? (Jg = "<div id=\"waf_nc_block\"style=\"display: none;\"><div class=\"waf-nc-h5-mask\"></div><div id=\"WAF_NC_WRAPPER\"class=\"waf-nc-h5-wrapper\"><p class=\"waf-nc-title\">访问验证</p><div class=\"waf-nc-h5-description\">为了您的操作安全，请完成以下验证</div><p id=\"waf-nc-traceid\" class=\"waf-nc-traceid-class\"></p><div id=\"nocaptcha\" data-nc-idx=\"1\"></div></div></div>", Jz = function () {
          try {
            var JR;
            var JY = Js.B.getElementsByName("viewport");
            return JY && 1 == JY.length && JY[0].content && -1 != JY[0].content.indexOf("initial-scale") ? (JY = JY[0].content.replace(/\s+/g, ""), 0 == (JR = parseFloat(JY.split("initial-scale=")[1].split(",")[0])) ? 1 : 1 / JR) : 1;
          } catch (Jj) {
            return 1;
          }
        }(), Js.b._waf_nc_width = 300 * Jz, "#waf_nc_block{position:fixed;_position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;z-index:99999}#waf_nc_block .waf-nc-h5-mask{background:#000;opacity:.5;filter:alpha(opacity=50);width:100%;height:100%}#waf_nc_block #aliyunCaptcha-sliding-slider{background:#ff6a00!important}#waf_nc_block .waf-nc-h5-wrapper{min-height:" + 220 * Jz + "px;width:94%;position:absolute;top:20%;left:50%;;margin-left:-47%;padding:5% 1%;background:#fff;border-radius:" + 9 * Jz + "px;box-sizing:border-box}#waf_nc_block .waf-nc-title{margin-top:" + +Jz + "px;font-size:" + 16 * Jz + "px;font-weight:500;color:#1a1a1a;text-align:center}#waf_nc_block .waf-nc-h5-description{margin-top:" + 24 * Jz + "px;font-size:" + 12 * Jz + "px;color:#595959;text-align:center}#waf_nc_block .waf-nc-traceid-class{margin-top:" + 8 * Jz + "px;font-size:" + 12 * Jz + "px;color:#999;text-align:center}#waf_nc_block .nc_bg{background:#fff3ea!important}#waf_nc_block .btn_slide{background:#ff6a00!important;border:0!important;color:#fff!important;width:" + 48 * Jz + "px!important;height:" + 48 * Jz + "px!important;font-size:" + 30 * Jz + "px;font-weight:900!important;line-height:" + 48 * Jz + "px!important}#waf_nc_block .btn_ok{background:#ff6a00!important;border:0!important;color:#fff!important;width:" + 48 * Jz + "px!important;height:" + 48 * Jz + "px!important;font-size:" + 30 * Jz + "px;font-weight:900!important;line-height:" + 48 * Jz + "px!important}#waf_nc_block .nc_scale{background:rgba(241,241,242,1)!important;height:" + 48 * Jz + "px!important}#waf_nc_block .nc-lang-cnt{height:" + 48 * Jz + "px!important;margin-left:" + 10 * Jz + "px!important;line-height:" + 48 * Jz + "px!important;font-size:" + 14 * Jz + "px!important}#waf_nc_block .nc_wrapper{margin-left: auto;  margin-right: auto;}#waf_nc_block .nc-container #nc_2_wrapper{height:70px}#waf_nc_block #aliyunCaptcha-sliding-text {font-size:" + 15 * Jz + "px}!important") : (Jg = "<div id=\"waf_nc_block\" style=\"display: none;\">\n    <div class=\"waf-nc-mask\"></div>\n    <div id=\"WAF_NC_WRAPPER\" class=\"waf-nc-wrapper\">\n        <p class=\"waf-nc-title\">访问验证</p>\n        <p class=\"waf-nc-description\">为保证您的正常访问，请进行如下验证。</p>\n        <p id=\"waf-nc-traceid\" class=\"waf-nc-traceid-class\"></p>\n        <div id=\"nocaptcha\"></div>\n    </div>\n</div>\n</div>", "#waf_nc_block{position:fixed;_position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;z-index:99999}\n#waf_nc_block #aliyunCaptcha-sliding-slider{background:#ff6a00!important}\n#waf_nc_block .aliyunCaptcha-show{margin-left: -24px;}\n#waf_nc_block .waf-nc-mask{background:#000;opacity:.5;filter:alpha(opacity=50);width:100%;height:100%}\n#waf_nc_block .waf-nc-wrapper{min-height:220px;width:348px;text-align:center;position:absolute;top:20%;left:50%;margin-left:-200px;margin-bottom:16px;background:#fff;box-shadow:0 0 10px 0 rgba(0,0,0,0.15)}\n#waf_nc_block .waf-nc-title{margin-top:28px;font-size:24px;font-weight:500;color:#181818;letter-spacing:1.71px;text-align:center}\n#waf_nc_block .waf-nc-description{margin-top:24px;margin-left:24px;font-size:14px;color:#666;text-align:left}\n#waf_nc_block .waf-nc-traceid-class{margin-top:8px;margin-left:24px;font-size:12px;color:#999;text-align:left}\n#nocaptcha{margin-left:24px;margin-top:14px}\n#waf_nc_block .nc_bg{background:#fff3ea!important}\n#waf_nc_block .btn_slide{background:#ff6a00!important;border:0!important;color:#fff!important;width:48px!important;height:48px!important;font-size:30px;font-weight:900!important;line-height:48px!important}\n#waf_nc_block .btn_ok{background:#ff6a00!important;border:0!important;color:#fff!important;width:48px!important;height:48px!important;font-size:30px;font-weight:900!important;line-height:48px!important}\n#waf_nc_block .nc_scale{background:rgba(241,241,242,1)!important;height:48px!important}#waf_nc_block .nc-lang-cnt{height:48px!important;margin-left:10px!important;line-height:48px!important;font-size:14px!important}\n#waf_nc_block .sm-pop-inner{position:relative!important}#waf_nc_block .nc-container #nc_2_wrapper{height:70px!important}");
        var JQ = Js.B.createElement("div");
        var Jk = Js.B.createElement("style");
        Jk.type = "text/css";
        JQ.innerHTML = Jg;
        try {
          Jk.appendChild(Js.B.createTextNode(Jz));
        } catch (JR) {
          Jk.styleSheet.cssText = Jz;
        }
        Js.B.body.appendChild(JQ.firstChild);
        (Js.B.head || Js.B.getElementsByTagName("head")[0]).appendChild(Jk);
      },
      K: function (Ja) {
        Js.B.getElementById("waf_nc_block") || JN.x(Ja);
      },
      m: function (Ja, Jg) {
        var JQ = Js.B.createElement("script");
        var Jk = new Date();
        var JR = Js.B.head || Js.B.getElementsByTagName("head")[0];
        var Jk = Jk.getFullYear() + (Jk.getMonth() + 1) + Jk.getDate() + Jk.getHours();
        JQ.src = 2 == Jg ? "//o.alicdn.com/captcha-frontend/aliyunCaptcha/AliyunCaptcha.js?t=" + Jk : "//g.alicdn.com/AWSC/AWSC/awsc.js?t=" + Jk;
        Ja && ("onload" in JQ ? JQ.onload = function () {
          Ja();
        } : JQ.onreadystatechange = function () {
          /loaded|complete/.test(JQ.readyState) && Ja();
        });
        JR.appendChild(JQ);
      }
    }).R(), JN.Z(), Jd(function () {
      Js.b._waf_body_copy = Js.B.body;
    }));
  }();
}();