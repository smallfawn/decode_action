//Wed Jul 24 2024 10:34:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var l111ii1I = document.getElementById("getButton"),
  l11lIIil = document.getElementById("accountType"),
  ilil11iI = document.getElementById("username"),
  l1llI111 = document.getElementById("password"),
  l111I1 = document.getElementById("sauth");
l111ii1I.onclick = function () {
  if (l11lIIil.value == null | l11lIIil.value == "") {
    alert("请选择小号类型");
    return;
  }
  var i1iIlill = l11lIIil.value;
  const I1I1l1I1 = iI1IilII(),
    iIllI1Ii = "a7013b173206e040b5301ac8a77c901626f41bf2abadfcb22638018876ceb56022e63786e552f46029fac7c3e99ddec11317122445b904d6e696d944adfb2b2b" + I1I1l1I1,
    lliIiIiI = i1iIlill + iIllI1Ii,
    Ilii1lil = I1111iII(lliIiIiI),
    lili1i1 = JSON.stringify({
      "type": i1iIlill,
      "auth": Ilii1lil,
      "uuid": I1I1l1I1
    });
  fetch(apiUrl + "/get_account.php", {
    "method": "POST",
    "body": lili1i1
  }).then(function (II11l1Ii) {
    II11l1Ii.json().then(function (lI1i1ill) {
      if (lI1i1ill.state == -1) {
        alert(lI1i1ill.msg);
        return;
      }
      if (lI1i1ill.state != 1) {
        alert("返回了未知的状态码");
        return;
      }
      if (i1iIlill == "4399") {
        const il1l11I1 = lI1i1ill.data.split("----");
        ilil11iI.value = il1l11I1[0];
        l1llI111.value = il1l11I1[1];
      }
      i1iIlill == "sauth" && (l111I1.value = lI1i1ill.data);
    }).catch(function (l1I1lliI) {
      alert("服务器信息解析失败");
      return;
    });
  }).catch(function (Iiilil11) {
    alert("服务器访问失败");
    return;
  });
};
function llli1liI(lI1i1Ili) {
  const lllIIiIl = 8,
    IliiI1iI = 0;
  function IIili1(I1i11lIi, lIIIilli) {
    const IIiIIi1l = (I1i11lIi & 65535) + (lIIIilli & 65535),
      i1l1111i = (I1i11lIi >> 16) + (lIIIilli >> 16) + (IIiIIi1l >> 16);
    return i1l1111i << 16 | IIiIIi1l & 65535;
  }
  function l1llIi1l(iI1lliII, ililIll1) {
    return iI1lliII >>> ililIll1 | iI1lliII << 32 - ililIll1;
  }
  function lii1Iill(lill1i1, I111II1) {
    return lill1i1 >>> I111II1;
  }
  function Illil1I1(iiIll111, iilliiil, iililIl1) {
    return iiIll111 & iilliiil ^ ~iiIll111 & iililIl1;
  }
  function Ill1iIIl(i1i11ll1, liIIiiii, liI1II11) {
    return i1i11ll1 & liIIiiii ^ i1i11ll1 & liI1II11 ^ liIIiiii & liI1II11;
  }
  function i1iiliIi(IIii1l1) {
    return l1llIi1l(IIii1l1, 2) ^ l1llIi1l(IIii1l1, 13) ^ l1llIi1l(IIii1l1, 22);
  }
  function II1lii11(ii111li) {
    return l1llIi1l(ii111li, 6) ^ l1llIi1l(ii111li, 11) ^ l1llIi1l(ii111li, 25);
  }
  function l11il1I(IiIilIii) {
    return l1llIi1l(IiIilIii, 7) ^ l1llIi1l(IiIilIii, 18) ^ lii1Iill(IiIilIii, 3);
  }
  function l111lll(Il111IIl) {
    return l1llIi1l(Il111IIl, 17) ^ l1llIi1l(Il111IIl, 19) ^ lii1Iill(Il111IIl, 10);
  }
  function III11i1l(ii1l1iI1, IIIl111i) {
    const li1lIli = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
      iIllI11l = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
      i1IiI1li = new Array(64);
    let ilIiiIiI, l1i1Ilil, Ii1IlI1i, IIilIIIl, Ii1Ilii1, liIlii1l, IiIlIiII, Illi1I1i, II11iilI, l11ili, ili1lllI, liiIillI;
    ii1l1iI1[IIIl111i >> 5] |= 128 << 24 - IIIl111i % 32;
    ii1l1iI1[(IIIl111i + 64 >> 9 << 4) + 15] = IIIl111i;
    for (II11iilI = 0; II11iilI < ii1l1iI1.length; II11iilI += 16) {
      ilIiiIiI = iIllI11l[0];
      l1i1Ilil = iIllI11l[1];
      Ii1IlI1i = iIllI11l[2];
      IIilIIIl = iIllI11l[3];
      Ii1Ilii1 = iIllI11l[4];
      liIlii1l = iIllI11l[5];
      IiIlIiII = iIllI11l[6];
      Illi1I1i = iIllI11l[7];
      for (l11ili = 0; l11ili < 64; l11ili++) {
        l11ili < 16 ? i1IiI1li[l11ili] = ii1l1iI1[l11ili + II11iilI] : i1IiI1li[l11ili] = IIili1(IIili1(IIili1(l111lll(i1IiI1li[l11ili - 2]), i1IiI1li[l11ili - 7]), l11il1I(i1IiI1li[l11ili - 15])), i1IiI1li[l11ili - 16]);
        ili1lllI = IIili1(IIili1(IIili1(IIili1(Illi1I1i, II1lii11(Ii1Ilii1)), Illil1I1(Ii1Ilii1, liIlii1l, IiIlIiII)), li1lIli[l11ili]), i1IiI1li[l11ili]);
        liiIillI = IIili1(i1iiliIi(ilIiiIiI), Ill1iIIl(ilIiiIiI, l1i1Ilil, Ii1IlI1i));
        Illi1I1i = IiIlIiII;
        IiIlIiII = liIlii1l;
        liIlii1l = Ii1Ilii1;
        Ii1Ilii1 = IIili1(IIilIIIl, ili1lllI);
        IIilIIIl = Ii1IlI1i;
        Ii1IlI1i = l1i1Ilil;
        l1i1Ilil = ilIiiIiI;
        ilIiiIiI = IIili1(ili1lllI, liiIillI);
      }
      iIllI11l[0] = IIili1(ilIiiIiI, iIllI11l[0]);
      iIllI11l[1] = IIili1(l1i1Ilil, iIllI11l[1]);
      iIllI11l[2] = IIili1(Ii1IlI1i, iIllI11l[2]);
      iIllI11l[3] = IIili1(IIilIIIl, iIllI11l[3]);
      iIllI11l[4] = IIili1(Ii1Ilii1, iIllI11l[4]);
      iIllI11l[5] = IIili1(liIlii1l, iIllI11l[5]);
      iIllI11l[6] = IIili1(IiIlIiII, iIllI11l[6]);
      iIllI11l[7] = IIili1(Illi1I1i, iIllI11l[7]);
    }
    return iIllI11l;
  }
  function ii1lII1I(iII1i1) {
    const i1l11li1 = [],
      IIiIliI = (1 << lllIIiIl) - 1;
    for (let I1li1iIl = 0; I1li1iIl < iII1i1.length * lllIIiIl; I1li1iIl += lllIIiIl) {
      i1l11li1[I1li1iIl >> 5] |= (iII1i1.charCodeAt(I1li1iIl / lllIIiIl) & IIiIliI) << 24 - I1li1iIl % 32;
    }
    return i1l11li1;
  }
  function i1III1lI(lIiII1i1) {
    lIiII1i1 = lIiII1i1.replace(/\r\n/g, "\n");
    let liilI1li = "";
    for (let iil1I11I = 0; iil1I11I < lIiII1i1.length; iil1I11I++) {
      const IliIii1 = lIiII1i1.charCodeAt(iil1I11I);
      if (IliIii1 < 128) liilI1li += String.fromCharCode(IliIii1);else {
        if (IliIii1 > 127 && IliIii1 < 2048) {
          liilI1li += String.fromCharCode(IliIii1 >> 6 | 192);
          liilI1li += String.fromCharCode(IliIii1 & 63 | 128);
        } else {
          liilI1li += String.fromCharCode(IliIii1 >> 12 | 224);
          liilI1li += String.fromCharCode(IliIii1 >> 6 & 63 | 128);
          liilI1li += String.fromCharCode(IliIii1 & 63 | 128);
        }
      }
    }
    return liilI1li;
  }
  function liiI1(ililiiii) {
    const l1lI1l1 = IliiI1iI ? "0123456789ABCDEF" : "0123456789abcdef";
    let i1l1iIli = "";
    for (let lliiiili = 0; lliiiili < ililiiii.length * 4; lliiiili++) {
      i1l1iIli += l1lI1l1.charAt(ililiiii[lliiiili >> 2] >> (3 - lliiiili % 4) * 8 + 4 & 15) + l1lI1l1.charAt(ililiiii[lliiiili >> 2] >> (3 - lliiiili % 4) * 8 & 15);
    }
    return i1l1iIli;
  }
  return lI1i1Ili = i1III1lI(lI1i1Ili), liiI1(III11i1l(ii1lII1I(lI1i1Ili), lI1i1Ili.length * lllIIiIl));
}
function I1111iII(iI1IIii1) {
  var I1liiIi1 = 0,
    l11lil1i = "";
  function IilIilIi(lIiIlilI) {
    return iiliiIl1(i1II1l(Ilil1I1l(lIiIlilI)));
  }
  function i1II1l(iI1IliiI) {
    return Il1I11I(llIill1(ill1IIii(iI1IliiI), iI1IliiI.length * 8));
  }
  function l1Ill1Ii(Ii111I1l, IlII1l) {
    var liiIl1ll = ill1IIii(Ii111I1l);
    if (liiIl1ll.length > 32) liiIl1ll = llIill1(liiIl1ll, Ii111I1l.length * 8);
    var ii11Ii1l = Array(32),
      ii11iIi1 = Array(32);
    for (var ili1iiii = 0; ili1iiii < 32; ili1iiii++) {
      ii11Ii1l[ili1iiii] = liiIl1ll[ili1iiii] ^ 909522486;
      ii11iIi1[ili1iiii] = liiIl1ll[ili1iiii] ^ 1549556828;
    }
    var l11l1lIl = llIill1(ii11Ii1l.concat(ill1IIii(IlII1l)), 1024 + IlII1l.length * 8);
    return Il1I11I(llIill1(ii11iIi1.concat(l11l1lIl), 1024 + 512));
  }
  function iiliiIl1(l11illIi) {
    try {
      I1liiIi1;
    } catch (iI1lllII) {
      I1liiIi1 = 0;
    }
    var liIi1I1I = I1liiIi1 ? "0123456789ABCDEF" : "0123456789abcdef";
    var iliiIIIl = "";
    var IiIIiIII;
    for (var IiiIIiII = 0; IiiIIiII < l11illIi.length; IiiIIiII++) {
      IiIIiIII = l11illIi.charCodeAt(IiiIIiII);
      iliiIIIl += liIi1I1I.charAt(IiIIiIII >>> 4 & 15) + liIi1I1I.charAt(IiIIiIII & 15);
    }
    return iliiIIIl;
  }
  function I1Ii1II1(Ii1IiliI) {
    try {
      l11lil1i;
    } catch (illiiI) {
      l11lil1i = "";
    }
    var lII1IilI = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      llllIi = "",
      i11illil = Ii1IiliI.length;
    for (var llI1iiII = 0; llI1iiII < i11illil; llI1iiII += 3) {
      var lI1Ill1i = Ii1IiliI.charCodeAt(llI1iiII) << 16 | (llI1iiII + 1 < i11illil ? Ii1IiliI.charCodeAt(llI1iiII + 1) << 8 : 0) | (llI1iiII + 2 < i11illil ? Ii1IiliI.charCodeAt(llI1iiII + 2) : 0);
      for (var lil111II = 0; lil111II < 4; lil111II++) {
        if (llI1iiII * 8 + lil111II * 6 > Ii1IiliI.length * 8) llllIi += l11lil1i;else llllIi += lII1IilI.charAt(lI1Ill1i >>> 6 * (3 - lil111II) & 63);
      }
    }
    return llllIi;
  }
  function IIIiIIIi(ii1l1i11, ii1I11I1) {
    var l11lI111 = ii1I11I1.length,
      Ililll1,
      ii11iIIi,
      I1iiIi1,
      Il11lI1i,
      l1I1I1,
      llIII111 = Array(Math.ceil(ii1l1i11.length / 2));
    for (Ililll1 = 0; Ililll1 < llIII111.length; Ililll1++) {
      llIII111[Ililll1] = ii1l1i11.charCodeAt(Ililll1 * 2) << 8 | ii1l1i11.charCodeAt(Ililll1 * 2 + 1);
    }
    var ilIiI = Math.ceil(ii1l1i11.length * 8 / (Math.log(ii1I11I1.length) / Math.log(2))),
      iI1111lI = Array(ilIiI);
    for (ii11iIIi = 0; ii11iIIi < ilIiI; ii11iIIi++) {
      l1I1I1 = Array();
      Il11lI1i = 0;
      for (Ililll1 = 0; Ililll1 < llIII111.length; Ililll1++) {
        Il11lI1i = (Il11lI1i << 16) + llIII111[Ililll1];
        I1iiIi1 = Math.floor(Il11lI1i / l11lI111);
        Il11lI1i -= I1iiIi1 * l11lI111;
        if (l1I1I1.length > 0 || I1iiIi1 > 0) l1I1I1[l1I1I1.length] = I1iiIi1;
      }
      iI1111lI[ii11iIIi] = Il11lI1i;
      llIII111 = l1I1I1;
    }
    var i111i1li = "";
    for (Ililll1 = iI1111lI.length - 1; Ililll1 >= 0; Ililll1--) i111i1li += ii1I11I1.charAt(iI1111lI[Ililll1]);
    return i111i1li;
  }
  function Ilil1I1l(I1liiIli) {
    var iIIiII1 = "";
    var liiiiil = -1;
    var Iill1Ill, l11lIiii;
    while (++liiiiil < I1liiIli.length) {
      Iill1Ill = I1liiIli.charCodeAt(liiiiil);
      l11lIiii = liiiiil + 1 < I1liiIli.length ? I1liiIli.charCodeAt(liiiiil + 1) : 0;
      55296 <= Iill1Ill && Iill1Ill <= 56319 && 56320 <= l11lIiii && l11lIiii <= 57343 && (Iill1Ill = 65536 + ((Iill1Ill & 1023) << 10) + (l11lIiii & 1023), liiiiil++);
      if (Iill1Ill <= 127) iIIiII1 += String.fromCharCode(Iill1Ill);else {
        if (Iill1Ill <= 2047) iIIiII1 += String.fromCharCode(192 | Iill1Ill >>> 6 & 31, 128 | Iill1Ill & 63);else {
          if (Iill1Ill <= 65535) iIIiII1 += String.fromCharCode(224 | Iill1Ill >>> 12 & 15, 128 | Iill1Ill >>> 6 & 63, 128 | Iill1Ill & 63);else {
            if (Iill1Ill <= 2097151) iIIiII1 += String.fromCharCode(240 | Iill1Ill >>> 18 & 7, 128 | Iill1Ill >>> 12 & 63, 128 | Iill1Ill >>> 6 & 63, 128 | Iill1Ill & 63);
          }
        }
      }
    }
    return iIIiII1;
  }
  function l1l1ll1i(i11lIIl) {
    var IililIII = "";
    for (var ll11II11 = 0; ll11II11 < i11lIIl.length; ll11II11++) IililIII += String.fromCharCode(i11lIIl.charCodeAt(ll11II11) & 255, i11lIIl.charCodeAt(ll11II11) >>> 8 & 255);
    return IililIII;
  }
  function iiIl11lI(IliiIiI1) {
    var IlIlllll = "";
    for (var iIIiIIli = 0; iIIiIIli < IliiIiI1.length; iIIiIIli++) IlIlllll += String.fromCharCode(IliiIiI1.charCodeAt(iIIiIIli) >>> 8 & 255, IliiIiI1.charCodeAt(iIIiIIli) & 255);
    return IlIlllll;
  }
  function ill1IIii(iIIlIi1i) {
    var Il1Il1I = Array(iIIlIi1i.length >> 2);
    for (var l1lIlIi1 = 0; l1lIlIi1 < Il1Il1I.length; l1lIlIi1++) Il1Il1I[l1lIlIi1] = 0;
    for (var l1lIlIi1 = 0; l1lIlIi1 < iIIlIi1i.length * 8; l1lIlIi1 += 8) Il1Il1I[l1lIlIi1 >> 5] |= (iIIlIi1i.charCodeAt(l1lIlIi1 / 8) & 255) << 24 - l1lIlIi1 % 32;
    return Il1Il1I;
  }
  function Il1I11I(IIlIlIIl) {
    var Ili1ilii = "";
    for (var lII11Il1 = 0; lII11Il1 < IIlIlIIl.length * 32; lII11Il1 += 8) Ili1ilii += String.fromCharCode(IIlIlIIl[lII11Il1 >> 5] >>> 24 - lII11Il1 % 32 & 255);
    return Ili1ilii;
  }
  var ii1l1i1l;
  function llIill1(iIiIliii, ii111i11) {
    ii1l1i1l == undefined && (ii1l1i1l = new Array(new Il1lIli1(1116352408, -685199838), new Il1lIli1(1899447441, 602891725), new Il1lIli1(-1245643825, -330482897), new Il1lIli1(-373957723, -2121671748), new Il1lIli1(961987163, -213338824), new Il1lIli1(1508970993, -1241133031), new Il1lIli1(-1841331548, -1357295717), new Il1lIli1(-1424204075, -630357736), new Il1lIli1(-670586216, -1560083902), new Il1lIli1(310598401, 1164996542), new Il1lIli1(607225278, 1323610764), new Il1lIli1(1426881987, -704662302), new Il1lIli1(1925078388, -226784913), new Il1lIli1(-2132889090, 991336113), new Il1lIli1(-1680079193, 633803317), new Il1lIli1(-1046744716, -815192428), new Il1lIli1(-459576895, -1628353838), new Il1lIli1(-272742522, 944711139), new Il1lIli1(264347078, -1953704523), new Il1lIli1(604807628, 2007800933), new Il1lIli1(770255983, 1495990901), new Il1lIli1(1249150122, 1856431235), new Il1lIli1(1555081692, -1119749164), new Il1lIli1(1996064986, -2096016459), new Il1lIli1(-1740746414, -295247957), new Il1lIli1(-1473132947, 766784016), new Il1lIli1(-1341970488, -1728372417), new Il1lIli1(-1084653625, -1091629340), new Il1lIli1(-958395405, 1034457026), new Il1lIli1(-710438585, -1828018395), new Il1lIli1(113926993, -536640913), new Il1lIli1(338241895, 168717936), new Il1lIli1(666307205, 1188179964), new Il1lIli1(773529912, 1546045734), new Il1lIli1(1294757372, 1522805485), new Il1lIli1(1396182291, -1651133473), new Il1lIli1(1695183700, -1951439906), new Il1lIli1(1986661051, 1014477480), new Il1lIli1(-2117940946, 1206759142), new Il1lIli1(-1838011259, 344077627), new Il1lIli1(-1564481375, 1290863460), new Il1lIli1(-1474664885, -1136513023), new Il1lIli1(-1035236496, -789014639), new Il1lIli1(-949202525, 106217008), new Il1lIli1(-778901479, -688958952), new Il1lIli1(-694614492, 1432725776), new Il1lIli1(-200395387, 1467031594), new Il1lIli1(275423344, 851169720), new Il1lIli1(430227734, -1194143544), new Il1lIli1(506948616, 1363258195), new Il1lIli1(659060556, -544281703), new Il1lIli1(883997877, -509917016), new Il1lIli1(958139571, -976659869), new Il1lIli1(1322822218, -482243893), new Il1lIli1(1537002063, 2003034995), new Il1lIli1(1747873779, -692930397), new Il1lIli1(1955562222, 1575990012), new Il1lIli1(2024104815, 1125592928), new Il1lIli1(-2067236844, -1578062990), new Il1lIli1(-1933114872, 442776044), new Il1lIli1(-1866530822, 593698344), new Il1lIli1(-1538233109, -561857047), new Il1lIli1(-1090935817, -1295615723), new Il1lIli1(-965641998, -479046869), new Il1lIli1(-903397682, -366583396), new Il1lIli1(-779700025, 566280711), new Il1lIli1(-354779690, -840897762), new Il1lIli1(-176337025, -294727304), new Il1lIli1(116418474, 1914138554), new Il1lIli1(174292421, -1563912026), new Il1lIli1(289380356, -1090974290), new Il1lIli1(460393269, 320620315), new Il1lIli1(685471733, 587496836), new Il1lIli1(852142971, 1086792851), new Il1lIli1(1017036298, 365543100), new Il1lIli1(1126000580, -1676669620), new Il1lIli1(1288033470, -885112138), new Il1lIli1(1501505948, -60457430), new Il1lIli1(1607167915, 987167468), new Il1lIli1(1816402316, 1246189591)));
    var IIIII1li = new Array(new Il1lIli1(1779033703, -205731576), new Il1lIli1(-1150833019, -2067093701), new Il1lIli1(1013904242, -23791573), new Il1lIli1(-1521486534, 1595750129), new Il1lIli1(1359893119, -1377402159), new Il1lIli1(-1694144372, 725511199), new Il1lIli1(528734635, -79577749), new Il1lIli1(1541459225, 327033209)),
      II1IIIIl = new Il1lIli1(0, 0),
      il1iI11I = new Il1lIli1(0, 0),
      lIIiliI1 = new Il1lIli1(0, 0),
      II1liIli = new Il1lIli1(0, 0),
      li11li1I = new Il1lIli1(0, 0),
      illiI1iI = new Il1lIli1(0, 0),
      liiiilI = new Il1lIli1(0, 0),
      l11li11I = new Il1lIli1(0, 0),
      Il11lil = new Il1lIli1(0, 0),
      IliiiIli = new Il1lIli1(0, 0),
      IiIiilIi = new Il1lIli1(0, 0),
      lIIiIl1I = new Il1lIli1(0, 0),
      ill111l = new Il1lIli1(0, 0),
      IIiiil11 = new Il1lIli1(0, 0),
      illiIi1i = new Il1lIli1(0, 0),
      iiI1liII = new Il1lIli1(0, 0),
      IiiI1I1i = new Il1lIli1(0, 0),
      IiI1IIl,
      iilIiiII,
      lI11li1I = new Array(80);
    for (iilIiiII = 0; iilIiiII < 80; iilIiiII++) lI11li1I[iilIiiII] = new Il1lIli1(0, 0);
    iIiIliii[ii111i11 >> 5] |= 128 << 24 - (ii111i11 & 31);
    iIiIliii[(ii111i11 + 128 >> 10 << 5) + 31] = ii111i11;
    for (iilIiiII = 0; iilIiiII < iIiIliii.length; iilIiiII += 32) {
      i1iIiiI(lIIiliI1, IIIII1li[0]);
      i1iIiiI(II1liIli, IIIII1li[1]);
      i1iIiiI(li11li1I, IIIII1li[2]);
      i1iIiiI(illiI1iI, IIIII1li[3]);
      i1iIiiI(liiiilI, IIIII1li[4]);
      i1iIiiI(l11li11I, IIIII1li[5]);
      i1iIiiI(Il11lil, IIIII1li[6]);
      i1iIiiI(IliiiIli, IIIII1li[7]);
      for (IiI1IIl = 0; IiI1IIl < 16; IiI1IIl++) {
        lI11li1I[IiI1IIl].h = iIiIliii[iilIiiII + 2 * IiI1IIl];
        lI11li1I[IiI1IIl].l = iIiIliii[iilIiiII + 2 * IiI1IIl + 1];
      }
      for (IiI1IIl = 16; IiI1IIl < 80; IiI1IIl++) {
        lIi1lIi(illiIi1i, lI11li1I[IiI1IIl - 2], 19);
        l1Iiilli(iiI1liII, lI11li1I[IiI1IIl - 2], 29);
        I1IilIli(IiiI1I1i, lI11li1I[IiI1IIl - 2], 6);
        lIIiIl1I.l = illiIi1i.l ^ iiI1liII.l ^ IiiI1I1i.l;
        lIIiIl1I.h = illiIi1i.h ^ iiI1liII.h ^ IiiI1I1i.h;
        lIi1lIi(illiIi1i, lI11li1I[IiI1IIl - 15], 1);
        lIi1lIi(iiI1liII, lI11li1I[IiI1IIl - 15], 8);
        I1IilIli(IiiI1I1i, lI11li1I[IiI1IIl - 15], 7);
        IiIiilIi.l = illiIi1i.l ^ iiI1liII.l ^ IiiI1I1i.l;
        IiIiilIi.h = illiIi1i.h ^ iiI1liII.h ^ IiiI1I1i.h;
        lili11l1(lI11li1I[IiI1IIl], lIIiIl1I, lI11li1I[IiI1IIl - 7], IiIiilIi, lI11li1I[IiI1IIl - 16]);
      }
      for (IiI1IIl = 0; IiI1IIl < 80; IiI1IIl++) {
        ill111l.l = liiiilI.l & l11li11I.l ^ ~liiiilI.l & Il11lil.l;
        ill111l.h = liiiilI.h & l11li11I.h ^ ~liiiilI.h & Il11lil.h;
        lIi1lIi(illiIi1i, liiiilI, 14);
        lIi1lIi(iiI1liII, liiiilI, 18);
        l1Iiilli(IiiI1I1i, liiiilI, 9);
        lIIiIl1I.l = illiIi1i.l ^ iiI1liII.l ^ IiiI1I1i.l;
        lIIiIl1I.h = illiIi1i.h ^ iiI1liII.h ^ IiiI1I1i.h;
        lIi1lIi(illiIi1i, lIIiliI1, 28);
        l1Iiilli(iiI1liII, lIIiliI1, 2);
        l1Iiilli(IiiI1I1i, lIIiliI1, 7);
        IiIiilIi.l = illiIi1i.l ^ iiI1liII.l ^ IiiI1I1i.l;
        IiIiilIi.h = illiIi1i.h ^ iiI1liII.h ^ IiiI1I1i.h;
        IIiiil11.l = lIIiliI1.l & II1liIli.l ^ lIIiliI1.l & li11li1I.l ^ II1liIli.l & li11li1I.l;
        IIiiil11.h = lIIiliI1.h & II1liIli.h ^ lIIiliI1.h & li11li1I.h ^ II1liIli.h & li11li1I.h;
        i1i11iIl(II1IIIIl, IliiiIli, lIIiIl1I, ill111l, ii1l1i1l[IiI1IIl], lI11li1I[IiI1IIl]);
        lii1l11I(il1iI11I, IiIiilIi, IIiiil11);
        i1iIiiI(IliiiIli, Il11lil);
        i1iIiiI(Il11lil, l11li11I);
        i1iIiiI(l11li11I, liiiilI);
        lii1l11I(liiiilI, illiI1iI, II1IIIIl);
        i1iIiiI(illiI1iI, li11li1I);
        i1iIiiI(li11li1I, II1liIli);
        i1iIiiI(II1liIli, lIIiliI1);
        lii1l11I(lIIiliI1, II1IIIIl, il1iI11I);
      }
      lii1l11I(IIIII1li[0], IIIII1li[0], lIIiliI1);
      lii1l11I(IIIII1li[1], IIIII1li[1], II1liIli);
      lii1l11I(IIIII1li[2], IIIII1li[2], li11li1I);
      lii1l11I(IIIII1li[3], IIIII1li[3], illiI1iI);
      lii1l11I(IIIII1li[4], IIIII1li[4], liiiilI);
      lii1l11I(IIIII1li[5], IIIII1li[5], l11li11I);
      lii1l11I(IIIII1li[6], IIIII1li[6], Il11lil);
      lii1l11I(IIIII1li[7], IIIII1li[7], IliiiIli);
    }
    var liIii = new Array(16);
    for (iilIiiII = 0; iilIiiII < 8; iilIiiII++) {
      liIii[2 * iilIiiII] = IIIII1li[iilIiiII].h;
      liIii[2 * iilIiiII + 1] = IIIII1li[iilIiiII].l;
    }
    return liIii;
  }
  function Il1lIli1(iillIiii, llIlIl1i) {
    this.h = iillIiii;
    this.l = llIlIl1i;
  }
  function i1iIiiI(lII1IIlI, lIIliI1I) {
    lII1IIlI.h = lIIliI1I.h;
    lII1IIlI.l = lIIliI1I.l;
  }
  function lIi1lIi(i11IlII, illiil11, ii1i11Il) {
    i11IlII.l = illiil11.l >>> ii1i11Il | illiil11.h << 32 - ii1i11Il;
    i11IlII.h = illiil11.h >>> ii1i11Il | illiil11.l << 32 - ii1i11Il;
  }
  function l1Iiilli(lI1l1I11, Iill1ill, lil1lI1) {
    lI1l1I11.l = Iill1ill.h >>> lil1lI1 | Iill1ill.l << 32 - lil1lI1;
    lI1l1I11.h = Iill1ill.l >>> lil1lI1 | Iill1ill.h << 32 - lil1lI1;
  }
  function I1IilIli(ii11llII, l11iIliI, l11Iiii) {
    ii11llII.l = l11iIliI.l >>> l11Iiii | l11iIliI.h << 32 - l11Iiii;
    ii11llII.h = l11iIliI.h >>> l11Iiii;
  }
  function lii1l11I(liill1li, Iiiliiil, l1ilIIl1) {
    var IilIli11 = (Iiiliiil.l & 65535) + (l1ilIIl1.l & 65535);
    var Ilii1Ii = (Iiiliiil.l >>> 16) + (l1ilIIl1.l >>> 16) + (IilIli11 >>> 16);
    var l1il1ll = (Iiiliiil.h & 65535) + (l1ilIIl1.h & 65535) + (Ilii1Ii >>> 16);
    var i1l1I1I = (Iiiliiil.h >>> 16) + (l1ilIIl1.h >>> 16) + (l1il1ll >>> 16);
    liill1li.l = IilIli11 & 65535 | Ilii1Ii << 16;
    liill1li.h = l1il1ll & 65535 | i1l1I1I << 16;
  }
  function lili11l1(l11li1lI, iI1111Il, liiIl1, iIIiii1i, l1llIlii) {
    var i1i1ll11 = (iI1111Il.l & 65535) + (liiIl1.l & 65535) + (iIIiii1i.l & 65535) + (l1llIlii.l & 65535);
    var Il1IlI1i = (iI1111Il.l >>> 16) + (liiIl1.l >>> 16) + (iIIiii1i.l >>> 16) + (l1llIlii.l >>> 16) + (i1i1ll11 >>> 16);
    var II11II1i = (iI1111Il.h & 65535) + (liiIl1.h & 65535) + (iIIiii1i.h & 65535) + (l1llIlii.h & 65535) + (Il1IlI1i >>> 16);
    var IiiiiII = (iI1111Il.h >>> 16) + (liiIl1.h >>> 16) + (iIIiii1i.h >>> 16) + (l1llIlii.h >>> 16) + (II11II1i >>> 16);
    l11li1lI.l = i1i1ll11 & 65535 | Il1IlI1i << 16;
    l11li1lI.h = II11II1i & 65535 | IiiiiII << 16;
  }
  function i1i11iIl(llli1i1l, i1111li, iI1I1I1, I1l11iiI, li1Ill, l1il11Il) {
    var IIIIi1iI = (i1111li.l & 65535) + (iI1I1I1.l & 65535) + (I1l11iiI.l & 65535) + (li1Ill.l & 65535) + (l1il11Il.l & 65535);
    var l11l1111 = (i1111li.l >>> 16) + (iI1I1I1.l >>> 16) + (I1l11iiI.l >>> 16) + (li1Ill.l >>> 16) + (l1il11Il.l >>> 16) + (IIIIi1iI >>> 16);
    var iiI1i11I = (i1111li.h & 65535) + (iI1I1I1.h & 65535) + (I1l11iiI.h & 65535) + (li1Ill.h & 65535) + (l1il11Il.h & 65535) + (l11l1111 >>> 16);
    var i1iiI1I = (i1111li.h >>> 16) + (iI1I1I1.h >>> 16) + (I1l11iiI.h >>> 16) + (li1Ill.h >>> 16) + (l1il11Il.h >>> 16) + (iiI1i11I >>> 16);
    llli1i1l.l = IIIIi1iI & 65535 | l11l1111 << 16;
    llli1i1l.h = iiI1i11I & 65535 | i1iiI1I << 16;
  }
  return IilIilIi(iI1IIii1);
}
function iI1IilII() {
  let Il1I1II1 = new Date().getTime(),
    ii111ii = typeof performance !== "undefined" && performance.now && performance.now() * 1000 || 0;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, ii111ll => {
    let l11iI111 = Math.random() * 16;
    return Il1I1II1 > 0 ? (l11iI111 = (Il1I1II1 + l11iI111) % 16 | 0, Il1I1II1 = Math.floor(Il1I1II1 / 16)) : (l11iI111 = (ii111ii + l11iI111) % 16 | 0, ii111ii = Math.floor(ii111ii / 16)), (ii111ll === "x" ? l11iI111 : l11iI111 & 3 | 8).toString(16);
  });
}