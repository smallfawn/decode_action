//Mon Aug 05 2024 02:15:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let IllIII = require("ds");
try {
  IllIII.toString() === "[object Object]" && (IllIII = IllIII.DS);
} catch {}
function ii1li(IIll1 = 0, ll1il = null) {
  let lilii = this;
  lilii.now = function () {
    return new Date().getTime();
  };
  lilii.ttl = IIll1 || 0;
  if (ll1il) lilii.data = new IllIII(ll1il);else {
    lilii.data = new IllIII();
  }
  let l1iiI = function () {
      if (ll1il) lilii.data.save(ll1il);
      return lilii;
    },
    ll1li = function (I11iIl) {
      return delete lilii.data[I11iIl], l1iiI(), lilii;
    };
  lilii.get = function (l1iIl, illIll) {
    let l1iIIl = null,
      iiilll = lilii.data[l1iIl];
    iiilll && (iiilll.expires == 0 || lilii.now() < iiilll.expires ? l1iIIl = iiilll.val : (l1iIIl = null, ll1li(l1iIl)));
    if (illIll) illIll(l1iIIl);
    return l1iIIl;
  };
  lilii.del = function (IilIl1, lIII1l) {
    let IiII = lilii.get(IilIl1);
    ll1li(IilIl1);
    if (lIII1l) lIII1l(IiII);
    return IiII;
  };
  lilii.put = function (llIIli, lIII1I = null, illIlI = 0, liIiI) {
    if (illIlI == 0) illIlI = lilii.ttl;
    let l1il1I = illIlI == 0 ? 0 : lilii.now() + illIlI;
    var Iiili = lilii.del(llIIli);
    lIII1I !== null && (lilii.data[llIIli] = {
      "expires": l1il1I,
      "val": lIII1I
    }, l1iiI());
    if (liIiI) liIiI(Iiili);
    return Iiili;
  };
}
module.exports = ii1li;