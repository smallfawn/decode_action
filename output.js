//Sat Dec 28 2024 03:30:18 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll("link[rel=\"modulepreload\"]")) n(o);
  new MutationObserver(o => {
    for (const a of o) if (a.type === "childList") for (const i of a.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, {
    childList: !0,
    subtree: !0
  });
  function r(o) {
    const a = {};
    return o.integrity && (a.integrity = o.integrity), o.referrerpolicy && (a.referrerPolicy = o.referrerpolicy), o.crossorigin === "use-credentials" ? a.credentials = "include" : o.crossorigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const a = r(o);
    fetch(o.href, a);
  }
})();
function Ts(e, t) {
  const r = Object.create(null),
    n = e.split(",");
  for (let o = 0; o < n.length; o++) r[n[o]] = !0;
  return t ? o => !!r[o.toLowerCase()] : o => !!r[o];
}
function ve(e) {
  if (be(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r],
        o = je(n) ? dp(n) : ve(n);
      if (o) for (const a in o) t[a] = o[a];
    }
    return t;
  } else {
    if (je(e)) return e;
    if (He(e)) return e;
  }
}
const up = /;(?![^(]*\))/g,
  cp = /:([^]+)/,
  fp = /\/\*.*?\*\//gs;
function dp(e) {
  const t = {};
  return e.replace(fp, "").split(up).forEach(r => {
    if (r) {
      const n = r.split(cp);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function H(e) {
  let t = "";
  if (je(e)) t = e;else if (be(e)) for (let r = 0; r < e.length; r++) {
    const n = H(e[r]);
    n && (t += n + " ");
  } else if (He(e)) for (const r in e) e[r] && (t += r + " ");
  return t.trim();
}
const pp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  vp = Ts(pp);
function rc(e) {
  return !!e || e === "";
}
const De = e => je(e) ? e : e == null ? "" : be(e) || He(e) && (e.toString === ic || !Be(e.toString)) ? JSON.stringify(e, nc, 2) : String(e),
  nc = (e, t) => t && t.__v_isRef ? nc(e, t.value) : tn(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, o]) => (r[`${n} =>`] = o, r), {})
  } : oc(t) ? {
    [`Set(${t.size})`]: [...t.values()]
  } : He(t) && !be(t) && !sc(t) ? String(t) : t,
  Ne = {},
  en = [],
  Tt = () => {},
  hp = () => !1,
  xp = /^on[^a-z]/,
  Ha = e => xp.test(e),
  Rs = e => e.startsWith("onUpdate:"),
  Je = Object.assign,
  Ps = (e, t) => {
    const r = e.indexOf(t);
    r > -1 && e.splice(r, 1);
  },
  mp = Object.prototype.hasOwnProperty,
  Oe = (e, t) => mp.call(e, t),
  be = Array.isArray,
  tn = e => Ma(e) === "[object Map]",
  oc = e => Ma(e) === "[object Set]",
  Be = e => typeof e == "function",
  je = e => typeof e == "string",
  $s = e => typeof e == "symbol",
  He = e => e !== null && typeof e == "object",
  ac = e => He(e) && Be(e.then) && Be(e.catch),
  ic = Object.prototype.toString,
  Ma = e => ic.call(e),
  gp = e => Ma(e).slice(8, -1),
  sc = e => Ma(e) === "[object Object]",
  Ls = e => je(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  bo = Ts(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
  Ua = e => {
    const t = Object.create(null);
    return r => t[r] || (t[r] = e(r));
  },
  yp = /-(\w)/g,
  Mt = Ua(e => e.replace(yp, (t, r) => r ? r.toUpperCase() : "")),
  bp = /\B([A-Z])/g,
  bn = Ua(e => e.replace(bp, "-$1").toLowerCase()),
  Va = Ua(e => e.charAt(0).toUpperCase() + e.slice(1)),
  wi = Ua(e => e ? `on${Va(e)}` : ""),
  Un = (e, t) => !Object.is(e, t),
  Fi = (e, t) => {
    for (let r = 0; r < e.length; r++) e[r](t);
  },
  Ko = (e, t, r) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      value: r
    });
  },
  Cp = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Ep = e => {
    const t = je(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Pl;
const Bp = () => Pl || (Pl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let _t;
class lc {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = _t, !t && _t && (this.index = (_t.scopes || (_t.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const r = _t;
      try {
        return _t = this, t();
      } finally {
        _t = r;
      }
    }
  }
  on() {
    _t = this;
  }
  off() {
    _t = this.parent;
  }
  stop(t) {
    if (this._active) {
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++) this.effects[r].stop();
      for (r = 0, n = this.cleanups.length; r < n; r++) this.cleanups[r]();
      if (this.scopes) for (r = 0, n = this.scopes.length; r < n; r++) this.scopes[r].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Ap(e) {
  return new lc(e);
}
function wp(e, t = _t) {
  t && t.active && t.effects.push(e);
}
function Fp() {
  return _t;
}
const Is = e => {
    const t = new Set(e);
    return t.w = 0, t.n = 0, t;
  },
  uc = e => (e.w & br) > 0,
  cc = e => (e.n & br) > 0,
  Sp = ({
    deps: e
  }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= br;
  },
  Dp = e => {
    const {
      deps: t
    } = e;
    if (t.length) {
      let r = 0;
      for (let n = 0; n < t.length; n++) {
        const o = t[n];
        uc(o) && !cc(o) ? o.delete(e) : t[r++] = o, o.w &= ~br, o.n &= ~br;
      }
      t.length = r;
    }
  },
  Go = new WeakMap();
let Tn = 0,
  br = 1;
const Wi = 30;
let kt;
const zr = Symbol(""),
  qi = Symbol("");
class Ns {
  constructor(t, r = null, n) {
    this.fn = t, this.scheduler = r, this.active = !0, this.deps = [], this.parent = void 0, wp(this, n);
  }
  run() {
    if (!this.active) return this.fn();
    let t = kt,
      r = hr;
    for (; t;) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return this.parent = kt, kt = this, hr = !0, br = 1 << ++Tn, Tn <= Wi ? Sp(this) : $l(this), this.fn();
    } finally {
      Tn <= Wi && Dp(this), br = 1 << --Tn, kt = this.parent, hr = r, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    kt === this ? this.deferStop = !0 : this.active && ($l(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function $l(e) {
  const {
    deps: t
  } = e;
  if (t.length) {
    for (let r = 0; r < t.length; r++) t[r].delete(e);
    t.length = 0;
  }
}
let hr = !0;
const fc = [];
function Cn() {
  fc.push(hr), hr = !1;
}
function En() {
  const e = fc.pop();
  hr = e === void 0 ? !0 : e;
}
function ut(e, t, r) {
  if (hr && kt) {
    let n = Go.get(e);
    n || Go.set(e, n = new Map());
    let o = n.get(r);
    o || n.set(r, o = Is()), dc(o);
  }
}
function dc(e, t) {
  let r = !1;
  Tn <= Wi ? cc(e) || (e.n |= br, r = !uc(e)) : r = !e.has(kt), r && (e.add(kt), kt.deps.push(e));
}
function Qt(e, t, r, n, o, a) {
  const i = Go.get(e);
  if (!i) return;
  let s = [];
  if (t === "clear") s = [...i.values()];else if (r === "length" && be(e)) {
    const u = Number(n);
    i.forEach((l, c) => {
      (c === "length" || c >= u) && s.push(l);
    });
  } else switch (r !== void 0 && s.push(i.get(r)), t) {
    case "add":
      be(e) ? Ls(r) && s.push(i.get("length")) : (s.push(i.get(zr)), tn(e) && s.push(i.get(qi)));
      break;
    case "delete":
      be(e) || (s.push(i.get(zr)), tn(e) && s.push(i.get(qi)));
      break;
    case "set":
      tn(e) && s.push(i.get(zr));
      break;
  }
  if (s.length === 1) s[0] && Ki(s[0]);else {
    const u = [];
    for (const l of s) l && u.push(...l);
    Ki(Is(u));
  }
}
function Ki(e, t) {
  const r = be(e) ? e : [...e];
  for (const n of r) n.computed && Ll(n);
  for (const n of r) n.computed || Ll(n);
}
function Ll(e, t) {
  (e !== kt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function _p(e, t) {
  var r;
  return (r = Go.get(e)) === null || r === void 0 ? void 0 : r.get(t);
}
const kp = Ts("__proto__,__v_isRef,__isVue"),
  pc = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter($s)),
  Op = zs(),
  Tp = zs(!1, !0),
  Rp = zs(!0),
  Il = Pp();
function Pp() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
    e[t] = function (...r) {
      const n = ke(this);
      for (let a = 0, i = this.length; a < i; a++) ut(n, "get", a + "");
      const o = n[t](...r);
      return o === -1 || o === !1 ? n[t](...r.map(ke)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
    e[t] = function (...r) {
      Cn();
      const n = ke(this)[t].apply(this, r);
      return En(), n;
    };
  }), e;
}
function $p(e) {
  const t = ke(this);
  return ut(t, "has", e), t.hasOwnProperty(e);
}
function zs(e = !1, t = !1) {
  return function (n, o, a) {
    if (o === "__v_isReactive") return !e;
    if (o === "__v_isReadonly") return e;
    if (o === "__v_isShallow") return t;
    if (o === "__v_raw" && a === (e ? t ? Qp : gc : t ? mc : xc).get(n)) return n;
    const i = be(n);
    if (!e) {
      if (i && Oe(Il, o)) return Reflect.get(Il, o, a);
      if (o === "hasOwnProperty") return $p;
    }
    const s = Reflect.get(n, o, a);
    return ($s(o) ? pc.has(o) : kp(o)) || (e || ut(n, "get", o), t) ? s : tt(s) ? i && Ls(o) ? s : s.value : He(s) ? e ? yc(s) : ht(s) : s;
  };
}
const Lp = vc(),
  Ip = vc(!0);
function vc(e = !1) {
  return function (r, n, o, a) {
    let i = r[n];
    if (cn(i) && tt(i) && !tt(o)) return !1;
    if (!e && (!Yo(o) && !cn(o) && (i = ke(i), o = ke(o)), !be(r) && tt(i) && !tt(o))) return i.value = o, !0;
    const s = be(r) && Ls(n) ? Number(n) < r.length : Oe(r, n),
      u = Reflect.set(r, n, o, a);
    return r === ke(a) && (s ? Un(o, i) && Qt(r, "set", n, o) : Qt(r, "add", n, o)), u;
  };
}
function Np(e, t) {
  const r = Oe(e, t);
  e[t];
  const n = Reflect.deleteProperty(e, t);
  return n && r && Qt(e, "delete", t, void 0), n;
}
function zp(e, t) {
  const r = Reflect.has(e, t);
  return (!$s(t) || !pc.has(t)) && ut(e, "has", t), r;
}
function Hp(e) {
  return ut(e, "iterate", be(e) ? "length" : zr), Reflect.ownKeys(e);
}
const hc = {
    get: Op,
    set: Lp,
    deleteProperty: Np,
    has: zp,
    ownKeys: Hp
  },
  Mp = {
    get: Rp,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    }
  },
  Up = Je({}, hc, {
    get: Tp,
    set: Ip
  }),
  Hs = e => e,
  ja = e => Reflect.getPrototypeOf(e);
function lo(e, t, r = !1, n = !1) {
  e = e.__v_raw;
  const o = ke(e),
    a = ke(t);
  r || (t !== a && ut(o, "get", t), ut(o, "get", a));
  const {
      has: i
    } = ja(o),
    s = n ? Hs : r ? js : Vn;
  if (i.call(o, t)) return s(e.get(t));
  if (i.call(o, a)) return s(e.get(a));
  e !== o && e.get(t);
}
function uo(e, t = !1) {
  const r = this.__v_raw,
    n = ke(r),
    o = ke(e);
  return t || (e !== o && ut(n, "has", e), ut(n, "has", o)), e === o ? r.has(e) : r.has(e) || r.has(o);
}
function co(e, t = !1) {
  return e = e.__v_raw, !t && ut(ke(e), "iterate", zr), Reflect.get(e, "size", e);
}
function Nl(e) {
  e = ke(e);
  const t = ke(this);
  return ja(t).has.call(t, e) || (t.add(e), Qt(t, "add", e, e)), this;
}
function zl(e, t) {
  t = ke(t);
  const r = ke(this),
    {
      has: n,
      get: o
    } = ja(r);
  let a = n.call(r, e);
  a || (e = ke(e), a = n.call(r, e));
  const i = o.call(r, e);
  return r.set(e, t), a ? Un(t, i) && Qt(r, "set", e, t) : Qt(r, "add", e, t), this;
}
function Hl(e) {
  const t = ke(this),
    {
      has: r,
      get: n
    } = ja(t);
  let o = r.call(t, e);
  o || (e = ke(e), o = r.call(t, e)), n && n.call(t, e);
  const a = t.delete(e);
  return o && Qt(t, "delete", e, void 0), a;
}
function Ml() {
  const e = ke(this),
    t = e.size !== 0,
    r = e.clear();
  return t && Qt(e, "clear", void 0, void 0), r;
}
function fo(e, t) {
  return function (n, o) {
    const a = this,
      i = a.__v_raw,
      s = ke(i),
      u = t ? Hs : e ? js : Vn;
    return !e && ut(s, "iterate", zr), i.forEach((l, c) => n.call(o, u(l), u(c), a));
  };
}
function po(e, t, r) {
  return function (...n) {
    const o = this.__v_raw,
      a = ke(o),
      i = tn(a),
      s = e === "entries" || e === Symbol.iterator && i,
      u = e === "keys" && i,
      l = o[e](...n),
      c = r ? Hs : t ? js : Vn;
    return !t && ut(a, "iterate", u ? qi : zr), {
      next() {
        const {
          value: d,
          done: f
        } = l.next();
        return f ? {
          value: d,
          done: f
        } : {
          value: s ? [c(d[0]), c(d[1])] : c(d),
          done: f
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function or(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function Vp() {
  const e = {
      get(a) {
        return lo(this, a);
      },
      get size() {
        return co(this);
      },
      has: uo,
      add: Nl,
      set: zl,
      delete: Hl,
      clear: Ml,
      forEach: fo(!1, !1)
    },
    t = {
      get(a) {
        return lo(this, a, !1, !0);
      },
      get size() {
        return co(this);
      },
      has: uo,
      add: Nl,
      set: zl,
      delete: Hl,
      clear: Ml,
      forEach: fo(!1, !0)
    },
    r = {
      get(a) {
        return lo(this, a, !0);
      },
      get size() {
        return co(this, !0);
      },
      has(a) {
        return uo.call(this, a, !0);
      },
      add: or("add"),
      set: or("set"),
      delete: or("delete"),
      clear: or("clear"),
      forEach: fo(!0, !1)
    },
    n = {
      get(a) {
        return lo(this, a, !0, !0);
      },
      get size() {
        return co(this, !0);
      },
      has(a) {
        return uo.call(this, a, !0);
      },
      add: or("add"),
      set: or("set"),
      delete: or("delete"),
      clear: or("clear"),
      forEach: fo(!0, !0)
    };
  return ["keys", "values", "entries", Symbol.iterator].forEach(a => {
    e[a] = po(a, !1, !1), r[a] = po(a, !0, !1), t[a] = po(a, !1, !0), n[a] = po(a, !0, !0);
  }), [e, r, t, n];
}
const [jp, Wp, qp, Kp] = Vp();
function Ms(e, t) {
  const r = t ? e ? Kp : qp : e ? Wp : jp;
  return (n, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(Oe(r, o) && o in n ? r : n, o, a);
}
const Gp = {
    get: Ms(!1, !1)
  },
  Yp = {
    get: Ms(!1, !0)
  },
  Xp = {
    get: Ms(!0, !1)
  },
  xc = new WeakMap(),
  mc = new WeakMap(),
  gc = new WeakMap(),
  Qp = new WeakMap();
function Zp(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Jp(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Zp(gp(e));
}
function ht(e) {
  return cn(e) ? e : Us(e, !1, hc, Gp, xc);
}
function ev(e) {
  return Us(e, !1, Up, Yp, mc);
}
function yc(e) {
  return Us(e, !0, Mp, Xp, gc);
}
function Us(e, t, r, n, o) {
  if (!He(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
  const a = o.get(e);
  if (a) return a;
  const i = Jp(e);
  if (i === 0) return e;
  const s = new Proxy(e, i === 2 ? n : r);
  return o.set(e, s), s;
}
function rn(e) {
  return cn(e) ? rn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function cn(e) {
  return !!(e && e.__v_isReadonly);
}
function Yo(e) {
  return !!(e && e.__v_isShallow);
}
function bc(e) {
  return rn(e) || cn(e);
}
function ke(e) {
  const t = e && e.__v_raw;
  return t ? ke(t) : e;
}
function Vs(e) {
  return Ko(e, "__v_skip", !0), e;
}
const Vn = e => He(e) ? ht(e) : e,
  js = e => He(e) ? yc(e) : e;
function Cc(e) {
  hr && kt && (e = ke(e), dc(e.dep || (e.dep = Is())));
}
function Ec(e, t) {
  e = ke(e);
  const r = e.dep;
  r && Ki(r);
}
function tt(e) {
  return !!(e && e.__v_isRef === !0);
}
function Y(e) {
  return Bc(e, !1);
}
function tv(e) {
  return Bc(e, !0);
}
function Bc(e, t) {
  return tt(e) ? e : new rv(e, t);
}
class rv {
  constructor(t, r) {
    this.__v_isShallow = r, this.dep = void 0, this.__v_isRef = !0, this._rawValue = r ? t : ke(t), this._value = r ? t : Vn(t);
  }
  get value() {
    return Cc(this), this._value;
  }
  set value(t) {
    const r = this.__v_isShallow || Yo(t) || cn(t);
    t = r ? t : ke(t), Un(t, this._rawValue) && (this._rawValue = t, this._value = r ? t : Vn(t), Ec(this));
  }
}
function qe(e) {
  return tt(e) ? e.value : e;
}
const nv = {
  get: (e, t, r) => qe(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const o = e[t];
    return tt(o) && !tt(r) ? (o.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function Ac(e) {
  return rn(e) ? e : new Proxy(e, nv);
}
function ov(e) {
  const t = be(e) ? new Array(e.length) : {};
  for (const r in e) t[r] = iv(e, r);
  return t;
}
class av {
  constructor(t, r, n) {
    this._object = t, this._key = r, this._defaultValue = n, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return _p(ke(this._object), this._key);
  }
}
function iv(e, t, r) {
  const n = e[t];
  return tt(n) ? n : new av(e, t, r);
}
var wc;
class sv {
  constructor(t, r, n, o) {
    this._setter = r, this.dep = void 0, this.__v_isRef = !0, this[wc] = !1, this._dirty = !0, this.effect = new Ns(t, () => {
      this._dirty || (this._dirty = !0, Ec(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = n;
  }
  get value() {
    const t = ke(this);
    return Cc(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
wc = "__v_isReadonly";
function lv(e, t, r = !1) {
  let n, o;
  const a = Be(e);
  return a ? (n = e, o = Tt) : (n = e.get, o = e.set), new sv(n, o, a || !o, r);
}
function xr(e, t, r, n) {
  let o;
  try {
    o = n ? e(...n) : e();
  } catch (a) {
    Wa(a, t, r);
  }
  return o;
}
function Ct(e, t, r, n) {
  if (Be(e)) {
    const a = xr(e, t, r, n);
    return a && ac(a) && a.catch(i => {
      Wa(i, t, r);
    }), a;
  }
  const o = [];
  for (let a = 0; a < e.length; a++) o.push(Ct(e[a], t, r, n));
  return o;
}
function Wa(e, t, r, n = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const i = t.proxy,
      s = r;
    for (; a;) {
      const l = a.ec;
      if (l) {
        for (let c = 0; c < l.length; c++) if (l[c](e, i, s) === !1) return;
      }
      a = a.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      xr(u, null, 10, [e, i, s]);
      return;
    }
  }
  uv(e, r, o, n);
}
function uv(e, t, r, n = !0) {
  console.error(e);
}
let jn = !1,
  Gi = !1;
const ot = [];
let It = 0;
const nn = [];
let qt = null,
  $r = 0;
const Fc = Promise.resolve();
let Ws = null;
function Rt(e) {
  const t = Ws || Fc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function cv(e) {
  let t = It + 1,
    r = ot.length;
  for (; t < r;) {
    const n = t + r >>> 1;
    Wn(ot[n]) < e ? t = n + 1 : r = n;
  }
  return t;
}
function qs(e) {
  (!ot.length || !ot.includes(e, jn && e.allowRecurse ? It + 1 : It)) && (e.id == null ? ot.push(e) : ot.splice(cv(e.id), 0, e), Sc());
}
function Sc() {
  !jn && !Gi && (Gi = !0, Ws = Fc.then(_c));
}
function fv(e) {
  const t = ot.indexOf(e);
  t > It && ot.splice(t, 1);
}
function dv(e) {
  be(e) ? nn.push(...e) : (!qt || !qt.includes(e, e.allowRecurse ? $r + 1 : $r)) && nn.push(e), Sc();
}
function Ul(e, t = jn ? It + 1 : 0) {
  for (; t < ot.length; t++) {
    const r = ot[t];
    r && r.pre && (ot.splice(t, 1), t--, r());
  }
}
function Dc(e) {
  if (nn.length) {
    const t = [...new Set(nn)];
    if (nn.length = 0, qt) {
      qt.push(...t);
      return;
    }
    for (qt = t, qt.sort((r, n) => Wn(r) - Wn(n)), $r = 0; $r < qt.length; $r++) qt[$r]();
    qt = null, $r = 0;
  }
}
const Wn = e => e.id == null ? Infinity : e.id,
  pv = (e, t) => {
    const r = Wn(e) - Wn(t);
    if (r === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return r;
  };
function _c(e) {
  Gi = !1, jn = !0, ot.sort(pv);
  const t = Tt;
  try {
    for (It = 0; It < ot.length; It++) {
      const r = ot[It];
      r && r.active !== !1 && xr(r, null, 14);
    }
  } finally {
    It = 0, ot.length = 0, Dc(), jn = !1, Ws = null, (ot.length || nn.length) && _c();
  }
}
function vv(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ne;
  let o = r;
  const a = t.startsWith("update:"),
    i = a && t.slice(7);
  if (i && i in n) {
    const c = `${i === "modelValue" ? "model" : i}Modifiers`,
      {
        number: d,
        trim: f
      } = n[c] || Ne;
    f && (o = r.map(p => je(p) ? p.trim() : p)), d && (o = r.map(Cp));
  }
  let s,
    u = n[s = wi(t)] || n[s = wi(Mt(t))];
  !u && a && (u = n[s = wi(bn(t))]), u && Ct(u, e, 6, o);
  const l = n[s + "Once"];
  if (l) {
    if (!e.emitted) e.emitted = {};else if (e.emitted[s]) return;
    e.emitted[s] = !0, Ct(l, e, 6, o);
  }
}
function kc(e, t, r = !1) {
  const n = t.emitsCache,
    o = n.get(e);
  if (o !== void 0) return o;
  const a = e.emits;
  let i = {},
    s = !1;
  if (!Be(e)) {
    const u = l => {
      const c = kc(l, t, !0);
      c && (s = !0, Je(i, c));
    };
    !r && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !a && !s ? (He(e) && n.set(e, null), null) : (be(a) ? a.forEach(u => i[u] = null) : Je(i, a), He(e) && n.set(e, i), i);
}
function qa(e, t) {
  return !e || !Ha(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Oe(e, t[0].toLowerCase() + t.slice(1)) || Oe(e, bn(t)) || Oe(e, t));
}
let rt = null,
  Ka = null;
function Xo(e) {
  const t = rt;
  return rt = e, Ka = e && e.type.__scopeId || null, t;
}
function Bn(e) {
  Ka = e;
}
function An() {
  Ka = null;
}
function he(e, t = rt, r) {
  if (!t || e._n) return e;
  const n = (...o) => {
    n._d && Jl(-1);
    const a = Xo(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Xo(a), n._d && Jl(1);
    }
    return i;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Si(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: o,
    props: a,
    propsOptions: [i],
    slots: s,
    attrs: u,
    emit: l,
    render: c,
    renderCache: d,
    data: f,
    setupState: p,
    ctx: v,
    inheritAttrs: h
  } = e;
  let g, b;
  const m = Xo(e);
  try {
    if (r.shapeFlag & 4) {
      const y = o || n;
      g = Lt(c.call(y, y, d, a, p, f, v)), b = u;
    } else {
      const y = t;
      g = Lt(y.length > 1 ? y(a, {
        attrs: u,
        slots: s,
        emit: l
      }) : y(a, null)), b = t.props ? u : hv(u);
    }
  } catch (y) {
    Ln.length = 0, Wa(y, e, 1), g = Q(vt);
  }
  let x = g;
  if (b && h !== !1) {
    const y = Object.keys(b),
      {
        shapeFlag: w
      } = x;
    y.length && w & 7 && (i && y.some(Rs) && (b = xv(b, i)), x = Br(x, b));
  }
  return r.dirs && (x = Br(x), x.dirs = x.dirs ? x.dirs.concat(r.dirs) : r.dirs), r.transition && (x.transition = r.transition), g = x, Xo(m), g;
}
const hv = e => {
    let t;
    for (const r in e) (r === "class" || r === "style" || Ha(r)) && ((t || (t = {}))[r] = e[r]);
    return t;
  },
  xv = (e, t) => {
    const r = {};
    for (const n in e) (!Rs(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
    return r;
  };
function mv(e, t, r) {
  const {
      props: n,
      children: o,
      component: a
    } = e,
    {
      props: i,
      children: s,
      patchFlag: u
    } = t,
    l = a.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (r && u >= 0) {
    if (u & 1024) return !0;
    if (u & 16) return n ? Vl(n, i, l) : !!i;
    if (u & 8) {
      const c = t.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        const f = c[d];
        if (i[f] !== n[f] && !qa(l, f)) return !0;
      }
    }
  } else return (o || s) && (!s || !s.$stable) ? !0 : n === i ? !1 : n ? i ? Vl(n, i, l) : !0 : !!i;
  return !1;
}
function Vl(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < n.length; o++) {
    const a = n[o];
    if (t[a] !== e[a] && !qa(r, a)) return !0;
  }
  return !1;
}
function gv({
  vnode: e,
  parent: t
}, r) {
  for (; t && t.subTree === e;) (e = t.vnode).el = r, t = t.parent;
}
const yv = e => e.__isSuspense;
function bv(e, t) {
  t && t.pendingBranch ? be(e) ? t.effects.push(...e) : t.effects.push(e) : dv(e);
}
function on(e, t) {
  if (Ke) {
    let r = Ke.provides;
    const n = Ke.parent && Ke.parent.provides;
    n === r && (r = Ke.provides = Object.create(n)), r[e] = t;
  }
}
function pt(e, t, r = !1) {
  const n = Ke || rt;
  if (n) {
    const o = n.parent == null ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return r && Be(t) ? t.call(n.proxy) : t;
  }
}
const vo = {};
function Se(e, t, r) {
  return Oc(e, t, r);
}
function Oc(e, t, {
  immediate: r,
  deep: n,
  flush: o,
  onTrack: a,
  onTrigger: i
} = Ne) {
  const s = Fp() === (Ke == null ? void 0 : Ke.scope) ? Ke : null;
  let u,
    l = !1,
    c = !1;
  if (tt(e) ? (u = () => e.value, l = Yo(e)) : rn(e) ? (u = () => e, n = !0) : be(e) ? (c = !0, l = e.some(x => rn(x) || Yo(x)), u = () => e.map(x => {
    if (tt(x)) return x.value;
    if (rn(x)) return Nr(x);
    if (Be(x)) return xr(x, s, 2);
  })) : Be(e) ? t ? u = () => xr(e, s, 2) : u = () => {
    if (!(s && s.isUnmounted)) return d && d(), Ct(e, s, 3, [f]);
  } : u = Tt, t && n) {
    const x = u;
    u = () => Nr(x());
  }
  let d,
    f = x => {
      d = b.onStop = () => {
        xr(x, s, 4);
      };
    },
    p;
  if (Yn) if (f = Tt, t ? r && Ct(t, s, 3, [u(), c ? [] : void 0, f]) : u(), o === "sync") {
    const x = lh();
    p = x.__watcherHandles || (x.__watcherHandles = []);
  } else return Tt;
  let v = c ? new Array(e.length).fill(vo) : vo;
  const h = () => {
    if (b.active) if (t) {
      const x = b.run();
      (n || l || (c ? x.some((y, w) => Un(y, v[w])) : Un(x, v))) && (d && d(), Ct(t, s, 3, [x, v === vo ? void 0 : c && v[0] === vo ? [] : v, f]), v = x);
    } else b.run();
  };
  h.allowRecurse = !!t;
  let g;
  o === "sync" ? g = h : o === "post" ? g = () => lt(h, s && s.suspense) : (h.pre = !0, s && (h.id = s.uid), g = () => qs(h));
  const b = new Ns(u, g);
  t ? r ? h() : v = b.run() : o === "post" ? lt(b.run.bind(b), s && s.suspense) : b.run();
  const m = () => {
    b.stop(), s && s.scope && Ps(s.scope.effects, b);
  };
  return p && p.push(m), m;
}
function Cv(e, t, r) {
  const n = this.proxy,
    o = je(e) ? e.includes(".") ? Tc(n, e) : () => n[e] : e.bind(n, n);
  let a;
  Be(t) ? a = t : (a = t.handler, r = t);
  const i = Ke;
  fn(this);
  const s = Oc(o, a.bind(n), r);
  return i ? fn(i) : Hr(), s;
}
function Tc(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let o = 0; o < r.length && n; o++) n = n[r[o]];
    return n;
  };
}
function Nr(e, t) {
  if (!He(e) || e.__v_skip || (t = t || new Set(), t.has(e))) return e;
  if (t.add(e), tt(e)) Nr(e.value, t);else if (be(e)) for (let r = 0; r < e.length; r++) Nr(e[r], t);else if (oc(e) || tn(e)) e.forEach(r => {
    Nr(r, t);
  });else if (sc(e)) for (const r in e) Nr(e[r], t);
  return e;
}
function Rc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map()
  };
  return xt(() => {
    e.isMounted = !0;
  }), Za(() => {
    e.isUnmounting = !0;
  }), e;
}
const gt = [Function, Array],
  Ev = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: gt,
      onEnter: gt,
      onAfterEnter: gt,
      onEnterCancelled: gt,
      onBeforeLeave: gt,
      onLeave: gt,
      onAfterLeave: gt,
      onLeaveCancelled: gt,
      onBeforeAppear: gt,
      onAppear: gt,
      onAfterAppear: gt,
      onAppearCancelled: gt
    },
    setup(e, {
      slots: t
    }) {
      const r = Sr(),
        n = Rc();
      let o;
      return () => {
        const a = t.default && Ks(t.default(), !0);
        if (!a || !a.length) return;
        let i = a[0];
        if (a.length > 1) {
          for (const h of a) if (h.type !== vt) {
            i = h;
            break;
          }
        }
        const s = ke(e),
          {
            mode: u
          } = s;
        if (n.isLeaving) return Di(i);
        const l = jl(i);
        if (!l) return Di(i);
        const c = qn(l, s, n, r);
        Kn(l, c);
        const d = r.subTree,
          f = d && jl(d);
        let p = !1;
        const {
          getTransitionKey: v
        } = l.type;
        if (v) {
          const h = v();
          o === void 0 ? o = h : h !== o && (o = h, p = !0);
        }
        if (f && f.type !== vt && (!Lr(l, f) || p)) {
          const h = qn(f, s, n, r);
          if (Kn(f, h), u === "out-in") return n.isLeaving = !0, h.afterLeave = () => {
            n.isLeaving = !1, r.update.active !== !1 && r.update();
          }, Di(i);
          u === "in-out" && l.type !== vt && (h.delayLeave = (g, b, m) => {
            const x = $c(n, f);
            x[String(f.key)] = f, g._leaveCb = () => {
              b(), g._leaveCb = void 0, delete c.delayedLeave;
            }, c.delayedLeave = m;
          });
        }
        return i;
      };
    }
  },
  Pc = Ev;
function $c(e, t) {
  const {
    leavingVNodes: r
  } = e;
  let n = r.get(t.type);
  return n || (n = Object.create(null), r.set(t.type, n)), n;
}
function qn(e, t, r, n) {
  const {
      appear: o,
      mode: a,
      persisted: i = !1,
      onBeforeEnter: s,
      onEnter: u,
      onAfterEnter: l,
      onEnterCancelled: c,
      onBeforeLeave: d,
      onLeave: f,
      onAfterLeave: p,
      onLeaveCancelled: v,
      onBeforeAppear: h,
      onAppear: g,
      onAfterAppear: b,
      onAppearCancelled: m
    } = t,
    x = String(e.key),
    y = $c(r, e),
    w = (F, O) => {
      F && Ct(F, n, 9, O);
    },
    C = (F, O) => {
      const B = O[1];
      w(F, O), be(F) ? F.every(A => A.length <= 1) && B() : F.length <= 1 && B();
    },
    _ = {
      mode: a,
      persisted: i,
      beforeEnter(F) {
        let O = s;
        if (!r.isMounted) if (o) O = h || s;else return;
        F._leaveCb && F._leaveCb(!0);
        const B = y[x];
        B && Lr(e, B) && B.el._leaveCb && B.el._leaveCb(), w(O, [F]);
      },
      enter(F) {
        let O = u,
          B = l,
          A = c;
        if (!r.isMounted) if (o) O = g || u, B = b || l, A = m || c;else return;
        let D = !1;
        const k = F._enterCb = X => {
          D || (D = !0, X ? w(A, [F]) : w(B, [F]), _.delayedLeave && _.delayedLeave(), F._enterCb = void 0);
        };
        O ? C(O, [F, k]) : k();
      },
      leave(F, O) {
        const B = String(e.key);
        if (F._enterCb && F._enterCb(!0), r.isUnmounting) return O();
        w(d, [F]);
        let A = !1;
        const D = F._leaveCb = k => {
          A || (A = !0, O(), k ? w(v, [F]) : w(p, [F]), F._leaveCb = void 0, y[B] === e && delete y[B]);
        };
        y[B] = e, f ? C(f, [F, D]) : D();
      },
      clone(F) {
        return qn(F, t, r, n);
      }
    };
  return _;
}
function Di(e) {
  if (Ga(e)) return e = Br(e), e.children = null, e;
}
function jl(e) {
  return Ga(e) ? e.children ? e.children[0] : void 0 : e;
}
function Kn(e, t) {
  e.shapeFlag & 6 && e.component ? Kn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ks(e, t = !1, r) {
  let n = [],
    o = 0;
  for (let a = 0; a < e.length; a++) {
    let i = e[a];
    const s = r == null ? i.key : String(r) + String(i.key != null ? i.key : a);
    i.type === Ue ? (i.patchFlag & 128 && o++, n = n.concat(Ks(i.children, t, s))) : (t || i.type !== vt) && n.push(s != null ? Br(i, {
      key: s
    }) : i);
  }
  if (o > 1) for (let a = 0; a < n.length; a++) n[a].patchFlag = -2;
  return n;
}
function Fe(e) {
  return Be(e) ? {
    setup: e,
    name: e.name
  } : e;
}
const Rn = e => !!e.type.__asyncLoader,
  Ga = e => e.type.__isKeepAlive;
function Ya(e, t) {
  Lc(e, "a", t);
}
function Xa(e, t) {
  Lc(e, "da", t);
}
function Lc(e, t, r = Ke) {
  const n = e.__wdc || (e.__wdc = () => {
    let o = r;
    for (; o;) {
      if (o.isDeactivated) return;
      o = o.parent;
    }
    return e();
  });
  if (Qa(t, n, r), r) {
    let o = r.parent;
    for (; o && o.parent;) Ga(o.parent.vnode) && Bv(n, t, r, o), o = o.parent;
  }
}
function Bv(e, t, r, n) {
  const o = Qa(t, e, n, !0);
  Fr(() => {
    Ps(n[t], o);
  }, r);
}
function Qa(e, t, r = Ke, n = !1) {
  if (r) {
    const o = r[e] || (r[e] = []),
      a = t.__weh || (t.__weh = (...i) => {
        if (r.isUnmounted) return;
        Cn(), fn(r);
        const s = Ct(t, r, e, i);
        return Hr(), En(), s;
      });
    return n ? o.unshift(a) : o.push(a), a;
  }
}
const er = e => (t, r = Ke) => (!Yn || e === "sp") && Qa(e, (...n) => t(...n), r),
  Ic = er("bm"),
  xt = er("m"),
  Av = er("bu"),
  to = er("u"),
  Za = er("bum"),
  Fr = er("um"),
  wv = er("sp"),
  Fv = er("rtg"),
  Sv = er("rtc");
function Dv(e, t = Ke) {
  Qa("ec", e, t);
}
function Ze(e, t) {
  const r = rt;
  if (r === null) return e;
  const n = ri(r) || r.proxy,
    o = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [i, s, u, l = Ne] = t[a];
    i && (Be(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Nr(s), o.push({
      dir: i,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: u,
      modifiers: l
    }));
  }
  return e;
}
function Or(e, t, r, n) {
  const o = e.dirs,
    a = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const s = o[i];
    a && (s.oldValue = a[i].value);
    let u = s.dir[n];
    u && (Cn(), Ct(u, r, 8, [e.el, s, e, t]), En());
  }
}
const Gs = "components",
  _v = "directives";
function Ve(e, t) {
  return Xs(Gs, e, !0, t) || e;
}
const Nc = Symbol();
function Ys(e) {
  return je(e) ? Xs(Gs, e, !1) || e : e || Nc;
}
function Cr(e) {
  return Xs(_v, e);
}
function Xs(e, t, r = !0, n = !1) {
  const o = rt || Ke;
  if (o) {
    const a = o.type;
    if (e === Gs) {
      const s = ah(a, !1);
      if (s && (s === t || s === Mt(t) || s === Va(Mt(t)))) return a;
    }
    const i = Wl(o[e] || a[e], t) || Wl(o.appContext[e], t);
    return !i && n ? a : i;
  }
}
function Wl(e, t) {
  return e && (e[t] || e[Mt(t)] || e[Va(Mt(t))]);
}
function Qo(e, t, r, n) {
  let o;
  const a = r && r[n];
  if (be(e) || je(e)) {
    o = new Array(e.length);
    for (let i = 0, s = e.length; i < s; i++) o[i] = t(e[i], i, void 0, a && a[i]);
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, a && a[i]);
  } else if (He(e)) {
    if (e[Symbol.iterator]) o = Array.from(e, (i, s) => t(i, s, void 0, a && a[s]));else {
      const i = Object.keys(e);
      o = new Array(i.length);
      for (let s = 0, u = i.length; s < u; s++) {
        const l = i[s];
        o[s] = t(e[l], l, s, a && a[s]);
      }
    }
  } else o = [];
  return r && (r[n] = o), o;
}
function xe(e, t, r = {}, n, o) {
  if (rt.isCE || rt.parent && Rn(rt.parent) && rt.parent.isCE) return t !== "default" && (r.name = t), Q("slot", r, n && n());
  let a = e[t];
  a && a._c && (a._d = !1), q();
  const i = a && zc(a(r)),
    s = ze(Ue, {
      key: r.key || i && i.key || `_${t}`
    }, i || (n ? n() : []), i && e._ === 1 ? 64 : -2);
  return !o && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), a && a._c && (a._d = !0), s;
}
function zc(e) {
  return e.some(t => Er(t) ? !(t.type === vt || t.type === Ue && !zc(t.children)) : !0) ? e : null;
}
const Yi = e => e ? Xc(e) ? ri(e) || e.proxy : Yi(e.parent) : null,
  Pn = Je(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Yi(e.parent),
    $root: e => Yi(e.root),
    $emit: e => e.emit,
    $options: e => Qs(e),
    $forceUpdate: e => e.f || (e.f = () => qs(e.update)),
    $nextTick: e => e.n || (e.n = Rt.bind(e.proxy)),
    $watch: e => Cv.bind(e)
  }),
  _i = (e, t) => e !== Ne && !e.__isScriptSetup && Oe(e, t),
  kv = {
    get({
      _: e
    }, t) {
      const {
        ctx: r,
        setupState: n,
        data: o,
        props: a,
        accessCache: i,
        type: s,
        appContext: u
      } = e;
      let l;
      if (t[0] !== "$") {
        const p = i[t];
        if (p !== void 0) switch (p) {
          case 1:
            return n[t];
          case 2:
            return o[t];
          case 4:
            return r[t];
          case 3:
            return a[t];
        } else {
          if (_i(n, t)) return i[t] = 1, n[t];
          if (o !== Ne && Oe(o, t)) return i[t] = 2, o[t];
          if ((l = e.propsOptions[0]) && Oe(l, t)) return i[t] = 3, a[t];
          if (r !== Ne && Oe(r, t)) return i[t] = 4, r[t];
          Xi && (i[t] = 0);
        }
      }
      const c = Pn[t];
      let d, f;
      if (c) return t === "$attrs" && ut(e, "get", t), c(e);
      if ((d = s.__cssModules) && (d = d[t])) return d;
      if (r !== Ne && Oe(r, t)) return i[t] = 4, r[t];
      if (f = u.config.globalProperties, Oe(f, t)) return f[t];
    },
    set({
      _: e
    }, t, r) {
      const {
        data: n,
        setupState: o,
        ctx: a
      } = e;
      return _i(o, t) ? (o[t] = r, !0) : n !== Ne && Oe(n, t) ? (n[t] = r, !0) : Oe(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = r, !0);
    },
    has({
      _: {
        data: e,
        setupState: t,
        accessCache: r,
        ctx: n,
        appContext: o,
        propsOptions: a
      }
    }, i) {
      let s;
      return !!r[i] || e !== Ne && Oe(e, i) || _i(t, i) || (s = a[0]) && Oe(s, i) || Oe(n, i) || Oe(Pn, i) || Oe(o.config.globalProperties, i);
    },
    defineProperty(e, t, r) {
      return r.get != null ? e._.accessCache[t] = 0 : Oe(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
    }
  };
let Xi = !0;
function Ov(e) {
  const t = Qs(e),
    r = e.proxy,
    n = e.ctx;
  Xi = !1, t.beforeCreate && ql(t.beforeCreate, e, "bc");
  const {
    data: o,
    computed: a,
    methods: i,
    watch: s,
    provide: u,
    inject: l,
    created: c,
    beforeMount: d,
    mounted: f,
    beforeUpdate: p,
    updated: v,
    activated: h,
    deactivated: g,
    beforeDestroy: b,
    beforeUnmount: m,
    destroyed: x,
    unmounted: y,
    render: w,
    renderTracked: C,
    renderTriggered: _,
    errorCaptured: F,
    serverPrefetch: O,
    expose: B,
    inheritAttrs: A,
    components: D,
    directives: k,
    filters: X
  } = t;
  if (l && Tv(l, n, null, e.appContext.config.unwrapInjectedRef), i) for (const V in i) {
    const z = i[V];
    Be(z) && (n[V] = z.bind(r));
  }
  if (o) {
    const V = o.call(r, r);
    He(V) && (e.data = ht(V));
  }
  if (Xi = !0, a) for (const V in a) {
    const z = a[V],
      se = Be(z) ? z.bind(r, r) : Be(z.get) ? z.get.bind(r, r) : Tt,
      fe = !Be(z) && Be(z.set) ? z.set.bind(r) : Tt,
      L = pe({
        get: se,
        set: fe
      });
    Object.defineProperty(n, V, {
      enumerable: !0,
      configurable: !0,
      get: () => L.value,
      set: R => L.value = R
    });
  }
  if (s) for (const V in s) Hc(s[V], n, r, V);
  if (u) {
    const V = Be(u) ? u.call(r) : u;
    Reflect.ownKeys(V).forEach(z => {
      on(z, V[z]);
    });
  }
  c && ql(c, e, "c");
  function ae(V, z) {
    be(z) ? z.forEach(se => V(se.bind(r))) : z && V(z.bind(r));
  }
  if (ae(Ic, d), ae(xt, f), ae(Av, p), ae(to, v), ae(Ya, h), ae(Xa, g), ae(Dv, F), ae(Sv, C), ae(Fv, _), ae(Za, m), ae(Fr, y), ae(wv, O), be(B)) if (B.length) {
    const V = e.exposed || (e.exposed = {});
    B.forEach(z => {
      Object.defineProperty(V, z, {
        get: () => r[z],
        set: se => r[z] = se
      });
    });
  } else e.exposed || (e.exposed = {});
  w && e.render === Tt && (e.render = w), A != null && (e.inheritAttrs = A), D && (e.components = D), k && (e.directives = k);
}
function Tv(e, t, r = Tt, n = !1) {
  be(e) && (e = Qi(e));
  for (const o in e) {
    const a = e[o];
    let i;
    He(a) ? "default" in a ? i = pt(a.from || o, a.default, !0) : i = pt(a.from || o) : i = pt(a), tt(i) && n ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: s => i.value = s
    }) : t[o] = i;
  }
}
function ql(e, t, r) {
  Ct(be(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function Hc(e, t, r, n) {
  const o = n.includes(".") ? Tc(r, n) : () => r[n];
  if (je(e)) {
    const a = t[e];
    Be(a) && Se(o, a);
  } else if (Be(e)) Se(o, e.bind(r));else if (He(e)) if (be(e)) e.forEach(a => Hc(a, t, r, n));else {
    const a = Be(e.handler) ? e.handler.bind(r) : t[e.handler];
    Be(a) && Se(o, a, e);
  }
}
function Qs(e) {
  const t = e.type,
    {
      mixins: r,
      extends: n
    } = t,
    {
      mixins: o,
      optionsCache: a,
      config: {
        optionMergeStrategies: i
      }
    } = e.appContext,
    s = a.get(t);
  let u;
  return s ? u = s : !o.length && !r && !n ? u = t : (u = {}, o.length && o.forEach(l => Zo(u, l, i, !0)), Zo(u, t, i)), He(t) && a.set(t, u), u;
}
function Zo(e, t, r, n = !1) {
  const {
    mixins: o,
    extends: a
  } = t;
  a && Zo(e, a, r, !0), o && o.forEach(i => Zo(e, i, r, !0));
  for (const i in t) if (!(n && i === "expose")) {
    const s = Rv[i] || r && r[i];
    e[i] = s ? s(e[i], t[i]) : t[i];
  }
  return e;
}
const Rv = {
  data: Kl,
  props: Pr,
  emits: Pr,
  methods: Pr,
  computed: Pr,
  beforeCreate: at,
  created: at,
  beforeMount: at,
  mounted: at,
  beforeUpdate: at,
  updated: at,
  beforeDestroy: at,
  beforeUnmount: at,
  destroyed: at,
  unmounted: at,
  activated: at,
  deactivated: at,
  errorCaptured: at,
  serverPrefetch: at,
  components: Pr,
  directives: Pr,
  watch: $v,
  provide: Kl,
  inject: Pv
};
function Kl(e, t) {
  return t ? e ? function () {
    return Je(Be(e) ? e.call(this, this) : e, Be(t) ? t.call(this, this) : t);
  } : t : e;
}
function Pv(e, t) {
  return Pr(Qi(e), Qi(t));
}
function Qi(e) {
  if (be(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
    return t;
  }
  return e;
}
function at(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Pr(e, t) {
  return e ? Je(Je(Object.create(null), e), t) : t;
}
function $v(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = Je(Object.create(null), e);
  for (const n in t) r[n] = at(e[n], t[n]);
  return r;
}
function Lv(e, t, r, n = !1) {
  const o = {},
    a = {};
  Ko(a, ti, 1), e.propsDefaults = Object.create(null), Mc(e, t, o, a);
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  r ? e.props = n ? o : ev(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function Iv(e, t, r, n) {
  const {
      props: o,
      attrs: a,
      vnode: {
        patchFlag: i
      }
    } = e,
    s = ke(o),
    [u] = e.propsOptions;
  let l = !1;
  if ((n || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (qa(e.emitsOptions, f)) continue;
        const p = t[f];
        if (u) {
          if (Oe(a, f)) p !== a[f] && (a[f] = p, l = !0);else {
            const v = Mt(f);
            o[v] = Zi(u, s, v, p, e, !1);
          }
        } else p !== a[f] && (a[f] = p, l = !0);
      }
    }
  } else {
    Mc(e, t, o, a) && (l = !0);
    let c;
    for (const d in s) (!t || !Oe(t, d) && ((c = bn(d)) === d || !Oe(t, c))) && (u ? r && (r[d] !== void 0 || r[c] !== void 0) && (o[d] = Zi(u, s, d, void 0, e, !0)) : delete o[d]);
    if (a !== s) for (const d in a) (!t || !Oe(t, d)) && (delete a[d], l = !0);
  }
  l && Qt(e, "set", "$attrs");
}
function Mc(e, t, r, n) {
  const [o, a] = e.propsOptions;
  let i = !1,
    s;
  if (t) for (let u in t) {
    if (bo(u)) continue;
    const l = t[u];
    let c;
    o && Oe(o, c = Mt(u)) ? !a || !a.includes(c) ? r[c] = l : (s || (s = {}))[c] = l : qa(e.emitsOptions, u) || (!(u in n) || l !== n[u]) && (n[u] = l, i = !0);
  }
  if (a) {
    const u = ke(r),
      l = s || Ne;
    for (let c = 0; c < a.length; c++) {
      const d = a[c];
      r[d] = Zi(o, u, d, l[d], e, !Oe(l, d));
    }
  }
  return i;
}
function Zi(e, t, r, n, o, a) {
  const i = e[r];
  if (i != null) {
    const s = Oe(i, "default");
    if (s && n === void 0) {
      const u = i.default;
      if (i.type !== Function && Be(u)) {
        const {
          propsDefaults: l
        } = o;
        r in l ? n = l[r] : (fn(o), n = l[r] = u.call(null, t), Hr());
      } else n = u;
    }
    i[0] && (a && !s ? n = !1 : i[1] && (n === "" || n === bn(r)) && (n = !0));
  }
  return n;
}
function Uc(e, t, r = !1) {
  const n = t.propsCache,
    o = n.get(e);
  if (o) return o;
  const a = e.props,
    i = {},
    s = [];
  let u = !1;
  if (!Be(e)) {
    const c = d => {
      u = !0;
      const [f, p] = Uc(d, t, !0);
      Je(i, f), p && s.push(...p);
    };
    !r && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!a && !u) return He(e) && n.set(e, en), en;
  if (be(a)) for (let c = 0; c < a.length; c++) {
    const d = Mt(a[c]);
    Gl(d) && (i[d] = Ne);
  } else if (a) for (const c in a) {
    const d = Mt(c);
    if (Gl(d)) {
      const f = a[c],
        p = i[d] = be(f) || Be(f) ? {
          type: f
        } : Object.assign({}, f);
      if (p) {
        const v = Ql(Boolean, p.type),
          h = Ql(String, p.type);
        p[0] = v > -1, p[1] = h < 0 || v < h, (v > -1 || Oe(p, "default")) && s.push(d);
      }
    }
  }
  const l = [i, s];
  return He(e) && n.set(e, l), l;
}
function Gl(e) {
  return e[0] !== "$";
}
function Yl(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function Xl(e, t) {
  return Yl(e) === Yl(t);
}
function Ql(e, t) {
  return be(t) ? t.findIndex(r => Xl(r, e)) : Be(t) && Xl(t, e) ? 0 : -1;
}
const Vc = e => e[0] === "_" || e === "$stable",
  Zs = e => be(e) ? e.map(Lt) : [Lt(e)],
  Nv = (e, t, r) => {
    if (t._n) return t;
    const n = he((...o) => Zs(t(...o)), r);
    return n._c = !1, n;
  },
  jc = (e, t, r) => {
    const n = e._ctx;
    for (const o in e) {
      if (Vc(o)) continue;
      const a = e[o];
      if (Be(a)) t[o] = Nv(o, a, n);else if (a != null) {
        const i = Zs(a);
        t[o] = () => i;
      }
    }
  },
  Wc = (e, t) => {
    const r = Zs(t);
    e.slots.default = () => r;
  },
  zv = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (e.slots = ke(t), Ko(t, "_", r)) : jc(t, e.slots = {});
    } else e.slots = {}, t && Wc(e, t);
    Ko(e.slots, ti, 1);
  },
  Hv = (e, t, r) => {
    const {
      vnode: n,
      slots: o
    } = e;
    let a = !0,
      i = Ne;
    if (n.shapeFlag & 32) {
      const s = t._;
      s ? r && s === 1 ? a = !1 : (Je(o, t), !r && s === 1 && delete o._) : (a = !t.$stable, jc(t, o)), i = t;
    } else t && (Wc(e, t), i = {
      default: 1
    });
    if (a) for (const s in o) !Vc(s) && !(s in i) && delete o[s];
  };
function qc() {
  return {
    app: null,
    config: {
      isNativeTag: hp,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}
let Mv = 0;
function Uv(e, t) {
  return function (n, o = null) {
    Be(n) || (n = Object.assign({}, n)), o != null && !He(o) && (o = null);
    const a = qc(),
      i = new Set();
    let s = !1;
    const u = a.app = {
      _uid: Mv++,
      _component: n,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: uh,
      get config() {
        return a.config;
      },
      set config(l) {},
      use(l, ...c) {
        return i.has(l) || (l && Be(l.install) ? (i.add(l), l.install(u, ...c)) : Be(l) && (i.add(l), l(u, ...c))), u;
      },
      mixin(l) {
        return a.mixins.includes(l) || a.mixins.push(l), u;
      },
      component(l, c) {
        return c ? (a.components[l] = c, u) : a.components[l];
      },
      directive(l, c) {
        return c ? (a.directives[l] = c, u) : a.directives[l];
      },
      mount(l, c, d) {
        if (!s) {
          const f = Q(n, o);
          return f.appContext = a, c && t ? t(f, l) : e(f, l, d), s = !0, u._container = l, l.__vue_app__ = u, ri(f.component) || f.component.proxy;
        }
      },
      unmount() {
        s && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(l, c) {
        return a.provides[l] = c, u;
      }
    };
    return u;
  };
}
function Ji(e, t, r, n, o = !1) {
  if (be(e)) {
    e.forEach((f, p) => Ji(f, t && (be(t) ? t[p] : t), r, n, o));
    return;
  }
  if (Rn(n) && !o) return;
  const a = n.shapeFlag & 4 ? ri(n.component) || n.component.proxy : n.el,
    i = o ? null : a,
    {
      i: s,
      r: u
    } = e,
    l = t && t.r,
    c = s.refs === Ne ? s.refs = {} : s.refs,
    d = s.setupState;
  if (l != null && l !== u && (je(l) ? (c[l] = null, Oe(d, l) && (d[l] = null)) : tt(l) && (l.value = null)), Be(u)) xr(u, s, 12, [i, c]);else {
    const f = je(u),
      p = tt(u);
    if (f || p) {
      const v = () => {
        if (e.f) {
          const h = f ? Oe(d, u) ? d[u] : c[u] : u.value;
          o ? be(h) && Ps(h, a) : be(h) ? h.includes(a) || h.push(a) : f ? (c[u] = [a], Oe(d, u) && (d[u] = c[u])) : (u.value = [a], e.k && (c[e.k] = u.value));
        } else f ? (c[u] = i, Oe(d, u) && (d[u] = i)) : p && (u.value = i, e.k && (c[e.k] = i));
      };
      i ? (v.id = -1, lt(v, r)) : v();
    }
  }
}
const lt = bv;
function Vv(e) {
  return jv(e);
}
function jv(e, t) {
  const r = Bp();
  r.__VUE__ = !0;
  const {
      insert: n,
      remove: o,
      patchProp: a,
      createElement: i,
      createText: s,
      createComment: u,
      setText: l,
      setElementText: c,
      parentNode: d,
      nextSibling: f,
      setScopeId: p = Tt,
      insertStaticContent: v
    } = e,
    h = (E, S, P, N = null, W = null, J = null, oe = !1, Z = null, ee = !!S.dynamicChildren) => {
      if (E === S) return;
      E && !Lr(E, S) && (N = j(E), R(E, W, J, !0), E = null), S.patchFlag === -2 && (ee = !1, S.dynamicChildren = null);
      const {
        type: K,
        ref: ue,
        shapeFlag: le
      } = S;
      switch (K) {
        case ei:
          g(E, S, P, N);
          break;
        case vt:
          b(E, S, P, N);
          break;
        case ki:
          E == null && m(S, P, N, oe);
          break;
        case Ue:
          D(E, S, P, N, W, J, oe, Z, ee);
          break;
        default:
          le & 1 ? w(E, S, P, N, W, J, oe, Z, ee) : le & 6 ? k(E, S, P, N, W, J, oe, Z, ee) : (le & 64 || le & 128) && K.process(E, S, P, N, W, J, oe, Z, ee, me);
      }
      ue != null && W && Ji(ue, E && E.ref, J, S || E, !S);
    },
    g = (E, S, P, N) => {
      if (E == null) n(S.el = s(S.children), P, N);else {
        const W = S.el = E.el;
        S.children !== E.children && l(W, S.children);
      }
    },
    b = (E, S, P, N) => {
      E == null ? n(S.el = u(S.children || ""), P, N) : S.el = E.el;
    },
    m = (E, S, P, N) => {
      [E.el, E.anchor] = v(E.children, S, P, N, E.el, E.anchor);
    },
    x = ({
      el: E,
      anchor: S
    }, P, N) => {
      let W;
      for (; E && E !== S;) W = f(E), n(E, P, N), E = W;
      n(S, P, N);
    },
    y = ({
      el: E,
      anchor: S
    }) => {
      let P;
      for (; E && E !== S;) P = f(E), o(E), E = P;
      o(S);
    },
    w = (E, S, P, N, W, J, oe, Z, ee) => {
      oe = oe || S.type === "svg", E == null ? C(S, P, N, W, J, oe, Z, ee) : O(E, S, W, J, oe, Z, ee);
    },
    C = (E, S, P, N, W, J, oe, Z) => {
      let ee, K;
      const {
        type: ue,
        props: le,
        shapeFlag: de,
        transition: ye,
        dirs: Ce
      } = E;
      if (ee = E.el = i(E.type, J, le && le.is, le), de & 8 ? c(ee, E.children) : de & 16 && F(E.children, ee, null, N, W, J && ue !== "foreignObject", oe, Z), Ce && Or(E, null, N, "created"), _(ee, E, E.scopeId, oe, N), le) {
        for (const $e in le) $e !== "value" && !bo($e) && a(ee, $e, null, le[$e], J, E.children, N, W, U);
        "value" in le && a(ee, "value", null, le.value), (K = le.onVnodeBeforeMount) && $t(K, N, E);
      }
      Ce && Or(E, null, N, "beforeMount");
      const Re = (!W || W && !W.pendingBranch) && ye && !ye.persisted;
      Re && ye.beforeEnter(ee), n(ee, S, P), ((K = le && le.onVnodeMounted) || Re || Ce) && lt(() => {
        K && $t(K, N, E), Re && ye.enter(ee), Ce && Or(E, null, N, "mounted");
      }, W);
    },
    _ = (E, S, P, N, W) => {
      if (P && p(E, P), N) for (let J = 0; J < N.length; J++) p(E, N[J]);
      if (W) {
        let J = W.subTree;
        if (S === J) {
          const oe = W.vnode;
          _(E, oe, oe.scopeId, oe.slotScopeIds, W.parent);
        }
      }
    },
    F = (E, S, P, N, W, J, oe, Z, ee = 0) => {
      for (let K = ee; K < E.length; K++) {
        const ue = E[K] = Z ? fr(E[K]) : Lt(E[K]);
        h(null, ue, S, P, N, W, J, oe, Z);
      }
    },
    O = (E, S, P, N, W, J, oe) => {
      const Z = S.el = E.el;
      let {
        patchFlag: ee,
        dynamicChildren: K,
        dirs: ue
      } = S;
      ee |= E.patchFlag & 16;
      const le = E.props || Ne,
        de = S.props || Ne;
      let ye;
      P && Tr(P, !1), (ye = de.onVnodeBeforeUpdate) && $t(ye, P, S, E), ue && Or(S, E, P, "beforeUpdate"), P && Tr(P, !0);
      const Ce = W && S.type !== "foreignObject";
      if (K ? B(E.dynamicChildren, K, Z, P, N, Ce, J) : oe || z(E, S, Z, null, P, N, Ce, J, !1), ee > 0) {
        if (ee & 16) A(Z, S, le, de, P, N, W);else if (ee & 2 && le.class !== de.class && a(Z, "class", null, de.class, W), ee & 4 && a(Z, "style", le.style, de.style, W), ee & 8) {
          const Re = S.dynamicProps;
          for (let $e = 0; $e < Re.length; $e++) {
            const Me = Re[$e],
              st = le[Me],
              ct = de[Me];
            (ct !== st || Me === "value") && a(Z, Me, st, ct, W, E.children, P, N, U);
          }
        }
        ee & 1 && E.children !== S.children && c(Z, S.children);
      } else !oe && K == null && A(Z, S, le, de, P, N, W);
      ((ye = de.onVnodeUpdated) || ue) && lt(() => {
        ye && $t(ye, P, S, E), ue && Or(S, E, P, "updated");
      }, N);
    },
    B = (E, S, P, N, W, J, oe) => {
      for (let Z = 0; Z < S.length; Z++) {
        const ee = E[Z],
          K = S[Z],
          ue = ee.el && (ee.type === Ue || !Lr(ee, K) || ee.shapeFlag & 70) ? d(ee.el) : P;
        h(ee, K, ue, null, N, W, J, oe, !0);
      }
    },
    A = (E, S, P, N, W, J, oe) => {
      if (P !== N) {
        if (P !== Ne) for (const Z in P) !bo(Z) && !(Z in N) && a(E, Z, P[Z], null, oe, S.children, W, J, U);
        for (const Z in N) {
          if (bo(Z)) continue;
          const ee = N[Z],
            K = P[Z];
          ee !== K && Z !== "value" && a(E, Z, K, ee, oe, S.children, W, J, U);
        }
        "value" in N && a(E, "value", P.value, N.value);
      }
    },
    D = (E, S, P, N, W, J, oe, Z, ee) => {
      const K = S.el = E ? E.el : s(""),
        ue = S.anchor = E ? E.anchor : s("");
      let {
        patchFlag: le,
        dynamicChildren: de,
        slotScopeIds: ye
      } = S;
      ye && (Z = Z ? Z.concat(ye) : ye), E == null ? (n(K, P, N), n(ue, P, N), F(S.children, P, ue, W, J, oe, Z, ee)) : le > 0 && le & 64 && de && E.dynamicChildren ? (B(E.dynamicChildren, de, P, W, J, oe, Z), (S.key != null || W && S === W.subTree) && Js(E, S, !0)) : z(E, S, P, ue, W, J, oe, Z, ee);
    },
    k = (E, S, P, N, W, J, oe, Z, ee) => {
      S.slotScopeIds = Z, E == null ? S.shapeFlag & 512 ? W.ctx.activate(S, P, N, oe, ee) : X(S, P, N, W, J, oe, ee) : ie(E, S, ee);
    },
    X = (E, S, P, N, W, J, oe) => {
      const Z = E.component = eh(E, N, W);
      if (Ga(E) && (Z.ctx.renderer = me), th(Z), Z.asyncDep) {
        if (W && W.registerDep(Z, ae), !E.el) {
          const ee = Z.subTree = Q(vt);
          b(null, ee, S, P);
        }
        return;
      }
      ae(Z, E, S, P, W, J, oe);
    },
    ie = (E, S, P) => {
      const N = S.component = E.component;
      if (mv(E, S, P)) {
        if (N.asyncDep && !N.asyncResolved) {
          V(N, S, P);
          return;
        } else N.next = S, fv(N.update), N.update();
      } else S.el = E.el, N.vnode = S;
    },
    ae = (E, S, P, N, W, J, oe) => {
      const Z = () => {
          if (E.isMounted) {
            let {
                next: ue,
                bu: le,
                u: de,
                parent: ye,
                vnode: Ce
              } = E,
              Re = ue,
              $e;
            Tr(E, !1), ue ? (ue.el = Ce.el, V(E, ue, oe)) : ue = Ce, le && Fi(le), ($e = ue.props && ue.props.onVnodeBeforeUpdate) && $t($e, ye, ue, Ce), Tr(E, !0);
            const Me = Si(E),
              st = E.subTree;
            E.subTree = Me, h(st, Me, d(st.el), j(st), E, W, J), ue.el = Me.el, Re === null && gv(E, Me.el), de && lt(de, W), ($e = ue.props && ue.props.onVnodeUpdated) && lt(() => $t($e, ye, ue, Ce), W);
          } else {
            let ue;
            const {
                el: le,
                props: de
              } = S,
              {
                bm: ye,
                m: Ce,
                parent: Re
              } = E,
              $e = Rn(S);
            if (Tr(E, !1), ye && Fi(ye), !$e && (ue = de && de.onVnodeBeforeMount) && $t(ue, Re, S), Tr(E, !0), le && ge) {
              const Me = () => {
                E.subTree = Si(E), ge(le, E.subTree, E, W, null);
              };
              $e ? S.type.__asyncLoader().then(() => !E.isUnmounted && Me()) : Me();
            } else {
              const Me = E.subTree = Si(E);
              h(null, Me, P, N, E, W, J), S.el = Me.el;
            }
            if (Ce && lt(Ce, W), !$e && (ue = de && de.onVnodeMounted)) {
              const Me = S;
              lt(() => $t(ue, Re, Me), W);
            }
            (S.shapeFlag & 256 || Re && Rn(Re.vnode) && Re.vnode.shapeFlag & 256) && E.a && lt(E.a, W), E.isMounted = !0, S = P = N = null;
          }
        },
        ee = E.effect = new Ns(Z, () => qs(K), E.scope),
        K = E.update = () => ee.run();
      K.id = E.uid, Tr(E, !0), K();
    },
    V = (E, S, P) => {
      S.component = E;
      const N = E.vnode.props;
      E.vnode = S, E.next = null, Iv(E, S.props, N, P), Hv(E, S.children, P), Cn(), Ul(), En();
    },
    z = (E, S, P, N, W, J, oe, Z, ee = !1) => {
      const K = E && E.children,
        ue = E ? E.shapeFlag : 0,
        le = S.children,
        {
          patchFlag: de,
          shapeFlag: ye
        } = S;
      if (de > 0) {
        if (de & 128) {
          fe(K, le, P, N, W, J, oe, Z, ee);
          return;
        } else if (de & 256) {
          se(K, le, P, N, W, J, oe, Z, ee);
          return;
        }
      }
      ye & 8 ? (ue & 16 && U(K, W, J), le !== K && c(P, le)) : ue & 16 ? ye & 16 ? fe(K, le, P, N, W, J, oe, Z, ee) : U(K, W, J, !0) : (ue & 8 && c(P, ""), ye & 16 && F(le, P, N, W, J, oe, Z, ee));
    },
    se = (E, S, P, N, W, J, oe, Z, ee) => {
      E = E || en, S = S || en;
      const K = E.length,
        ue = S.length,
        le = Math.min(K, ue);
      let de;
      for (de = 0; de < le; de++) {
        const ye = S[de] = ee ? fr(S[de]) : Lt(S[de]);
        h(E[de], ye, P, null, W, J, oe, Z, ee);
      }
      K > ue ? U(E, W, J, !0, !1, le) : F(S, P, N, W, J, oe, Z, ee, le);
    },
    fe = (E, S, P, N, W, J, oe, Z, ee) => {
      let K = 0;
      const ue = S.length;
      let le = E.length - 1,
        de = ue - 1;
      for (; K <= le && K <= de;) {
        const ye = E[K],
          Ce = S[K] = ee ? fr(S[K]) : Lt(S[K]);
        if (Lr(ye, Ce)) h(ye, Ce, P, null, W, J, oe, Z, ee);else break;
        K++;
      }
      for (; K <= le && K <= de;) {
        const ye = E[le],
          Ce = S[de] = ee ? fr(S[de]) : Lt(S[de]);
        if (Lr(ye, Ce)) h(ye, Ce, P, null, W, J, oe, Z, ee);else break;
        le--, de--;
      }
      if (K > le) {
        if (K <= de) {
          const ye = de + 1,
            Ce = ye < ue ? S[ye].el : N;
          for (; K <= de;) h(null, S[K] = ee ? fr(S[K]) : Lt(S[K]), P, Ce, W, J, oe, Z, ee), K++;
        }
      } else if (K > de) for (; K <= le;) R(E[K], W, J, !0), K++;else {
        const ye = K,
          Ce = K,
          Re = new Map();
        for (K = Ce; K <= de; K++) {
          const nt = S[K] = ee ? fr(S[K]) : Lt(S[K]);
          nt.key != null && Re.set(nt.key, K);
        }
        let $e,
          Me = 0;
        const st = de - Ce + 1;
        let ct = !1,
          rr = 0;
        const kr = new Array(st);
        for (K = 0; K < st; K++) kr[K] = 0;
        for (K = ye; K <= le; K++) {
          const nt = E[K];
          if (Me >= st) {
            R(nt, W, J, !0);
            continue;
          }
          let mt;
          if (nt.key != null) mt = Re.get(nt.key);else for ($e = Ce; $e <= de; $e++) if (kr[$e - Ce] === 0 && Lr(nt, S[$e])) {
            mt = $e;
            break;
          }
          mt === void 0 ? R(nt, W, J, !0) : (kr[mt - Ce] = K + 1, mt >= rr ? rr = mt : ct = !0, h(nt, S[mt], P, null, W, J, oe, Z, ee), Me++);
        }
        const Fn = ct ? Wv(kr) : en;
        for ($e = Fn.length - 1, K = st - 1; K >= 0; K--) {
          const nt = Ce + K,
            mt = S[nt],
            so = nt + 1 < ue ? S[nt + 1].el : N;
          kr[K] === 0 ? h(null, mt, P, so, W, J, oe, Z, ee) : ct && ($e < 0 || K !== Fn[$e] ? L(mt, P, so, 2) : $e--);
        }
      }
    },
    L = (E, S, P, N, W = null) => {
      const {
        el: J,
        type: oe,
        transition: Z,
        children: ee,
        shapeFlag: K
      } = E;
      if (K & 6) {
        L(E.component.subTree, S, P, N);
        return;
      }
      if (K & 128) {
        E.suspense.move(S, P, N);
        return;
      }
      if (K & 64) {
        oe.move(E, S, P, me);
        return;
      }
      if (oe === Ue) {
        n(J, S, P);
        for (let le = 0; le < ee.length; le++) L(ee[le], S, P, N);
        n(E.anchor, S, P);
        return;
      }
      if (oe === ki) {
        x(E, S, P);
        return;
      }
      if (N !== 2 && K & 1 && Z) {
        if (N === 0) Z.beforeEnter(J), n(J, S, P), lt(() => Z.enter(J), W);else {
          const {
              leave: le,
              delayLeave: de,
              afterLeave: ye
            } = Z,
            Ce = () => n(J, S, P),
            Re = () => {
              le(J, () => {
                Ce(), ye && ye();
              });
            };
          de ? de(J, Ce, Re) : Re();
        }
      } else n(J, S, P);
    },
    R = (E, S, P, N = !1, W = !1) => {
      const {
        type: J,
        props: oe,
        ref: Z,
        children: ee,
        dynamicChildren: K,
        shapeFlag: ue,
        patchFlag: le,
        dirs: de
      } = E;
      if (Z != null && Ji(Z, null, P, E, !0), ue & 256) {
        S.ctx.deactivate(E);
        return;
      }
      const ye = ue & 1 && de,
        Ce = !Rn(E);
      let Re;
      if (Ce && (Re = oe && oe.onVnodeBeforeUnmount) && $t(Re, S, E), ue & 6) T(E.component, P, N);else {
        if (ue & 128) {
          E.suspense.unmount(P, N);
          return;
        }
        ye && Or(E, null, S, "beforeUnmount"), ue & 64 ? E.type.remove(E, S, P, W, me, N) : K && (J !== Ue || le > 0 && le & 64) ? U(K, S, P, !1, !0) : (J === Ue && le & 384 || !W && ue & 16) && U(ee, S, P), N && $(E);
      }
      (Ce && (Re = oe && oe.onVnodeUnmounted) || ye) && lt(() => {
        Re && $t(Re, S, E), ye && Or(E, null, S, "unmounted");
      }, P);
    },
    $ = E => {
      const {
        type: S,
        el: P,
        anchor: N,
        transition: W
      } = E;
      if (S === Ue) {
        I(P, N);
        return;
      }
      if (S === ki) {
        y(E);
        return;
      }
      const J = () => {
        o(P), W && !W.persisted && W.afterLeave && W.afterLeave();
      };
      if (E.shapeFlag & 1 && W && !W.persisted) {
        const {
            leave: oe,
            delayLeave: Z
          } = W,
          ee = () => oe(P, J);
        Z ? Z(E.el, J, ee) : ee();
      } else J();
    },
    I = (E, S) => {
      let P;
      for (; E !== S;) P = f(E), o(E), E = P;
      o(S);
    },
    T = (E, S, P) => {
      const {
        bum: N,
        scope: W,
        update: J,
        subTree: oe,
        um: Z
      } = E;
      N && Fi(N), W.stop(), J && (J.active = !1, R(oe, E, S, P)), Z && lt(Z, S), lt(() => {
        E.isUnmounted = !0;
      }, S), S && S.pendingBranch && !S.isUnmounted && E.asyncDep && !E.asyncResolved && E.suspenseId === S.pendingId && (S.deps--, S.deps === 0 && S.resolve());
    },
    U = (E, S, P, N = !1, W = !1, J = 0) => {
      for (let oe = J; oe < E.length; oe++) R(E[oe], S, P, N, W);
    },
    j = E => E.shapeFlag & 6 ? j(E.component.subTree) : E.shapeFlag & 128 ? E.suspense.next() : f(E.anchor || E.el),
    G = (E, S, P) => {
      E == null ? S._vnode && R(S._vnode, null, null, !0) : h(S._vnode || null, E, S, null, null, null, P), Ul(), Dc(), S._vnode = E;
    },
    me = {
      p: h,
      um: R,
      m: L,
      r: $,
      mt: X,
      mc: F,
      pc: z,
      pbc: B,
      n: j,
      o: e
    };
  let we, ge;
  return t && ([we, ge] = t(me)), {
    render: G,
    hydrate: we,
    createApp: Uv(G, we)
  };
}
function Tr({
  effect: e,
  update: t
}, r) {
  e.allowRecurse = t.allowRecurse = r;
}
function Js(e, t, r = !1) {
  const n = e.children,
    o = t.children;
  if (be(n) && be(o)) for (let a = 0; a < n.length; a++) {
    const i = n[a];
    let s = o[a];
    s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = o[a] = fr(o[a]), s.el = i.el), r || Js(i, s)), s.type === ei && (s.el = i.el);
  }
}
function Wv(e) {
  const t = e.slice(),
    r = [0];
  let n, o, a, i, s;
  const u = e.length;
  for (n = 0; n < u; n++) {
    const l = e[n];
    if (l !== 0) {
      if (o = r[r.length - 1], e[o] < l) {
        t[n] = o, r.push(n);
        continue;
      }
      for (a = 0, i = r.length - 1; a < i;) s = a + i >> 1, e[r[s]] < l ? a = s + 1 : i = s;
      l < e[r[a]] && (a > 0 && (t[n] = r[a - 1]), r[a] = n);
    }
  }
  for (a = r.length, i = r[a - 1]; a-- > 0;) r[a] = i, i = t[i];
  return r;
}
const qv = e => e.__isTeleport,
  $n = e => e && (e.disabled || e.disabled === ""),
  Zl = e => typeof SVGElement < "u" && e instanceof SVGElement,
  es = (e, t) => {
    const r = e && e.to;
    return je(r) ? t ? t(r) : null : r;
  },
  Kv = {
    __isTeleport: !0,
    process(e, t, r, n, o, a, i, s, u, l) {
      const {
          mc: c,
          pc: d,
          pbc: f,
          o: {
            insert: p,
            querySelector: v,
            createText: h,
            createComment: g
          }
        } = l,
        b = $n(t.props);
      let {
        shapeFlag: m,
        children: x,
        dynamicChildren: y
      } = t;
      if (e == null) {
        const w = t.el = h(""),
          C = t.anchor = h("");
        p(w, r, n), p(C, r, n);
        const _ = t.target = es(t.props, v),
          F = t.targetAnchor = h("");
        _ && (p(F, _), i = i || Zl(_));
        const O = (B, A) => {
          m & 16 && c(x, B, A, o, a, i, s, u);
        };
        b ? O(r, C) : _ && O(_, F);
      } else {
        t.el = e.el;
        const w = t.anchor = e.anchor,
          C = t.target = e.target,
          _ = t.targetAnchor = e.targetAnchor,
          F = $n(e.props),
          O = F ? r : C,
          B = F ? w : _;
        if (i = i || Zl(C), y ? (f(e.dynamicChildren, y, O, o, a, i, s), Js(e, t, !0)) : u || d(e, t, O, B, o, a, i, s, !1), b) F || ho(t, r, w, l, 1);else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const A = t.target = es(t.props, v);
          A && ho(t, A, null, l, 0);
        } else F && ho(t, C, _, l, 1);
      }
      Kc(t);
    },
    remove(e, t, r, n, {
      um: o,
      o: {
        remove: a
      }
    }, i) {
      const {
        shapeFlag: s,
        children: u,
        anchor: l,
        targetAnchor: c,
        target: d,
        props: f
      } = e;
      if (d && a(c), (i || !$n(f)) && (a(l), s & 16)) for (let p = 0; p < u.length; p++) {
        const v = u[p];
        o(v, t, r, !0, !!v.dynamicChildren);
      }
    },
    move: ho,
    hydrate: Gv
  };
function ho(e, t, r, {
  o: {
    insert: n
  },
  m: o
}, a = 2) {
  a === 0 && n(e.targetAnchor, t, r);
  const {
      el: i,
      anchor: s,
      shapeFlag: u,
      children: l,
      props: c
    } = e,
    d = a === 2;
  if (d && n(i, t, r), (!d || $n(c)) && u & 16) for (let f = 0; f < l.length; f++) o(l[f], t, r, 2);
  d && n(s, t, r);
}
function Gv(e, t, r, n, o, a, {
  o: {
    nextSibling: i,
    parentNode: s,
    querySelector: u
  }
}, l) {
  const c = t.target = es(t.props, u);
  if (c) {
    const d = c._lpa || c.firstChild;
    if (t.shapeFlag & 16) if ($n(t.props)) t.anchor = l(i(e), t, s(e), r, n, o, a), t.targetAnchor = d;else {
      t.anchor = i(e);
      let f = d;
      for (; f;) if (f = i(f), f && f.nodeType === 8 && f.data === "teleport anchor") {
        t.targetAnchor = f, c._lpa = t.targetAnchor && i(t.targetAnchor);
        break;
      }
      l(d, t, c, r, n, o, a);
    }
    Kc(t);
  }
  return t.anchor && i(t.anchor);
}
const Ja = Kv;
function Kc(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let r = e.children[0].el;
    for (; r !== e.targetAnchor;) r.nodeType === 1 && r.setAttribute("data-v-owner", t.uid), r = r.nextSibling;
    t.ut();
  }
}
const Ue = Symbol(void 0),
  ei = Symbol(void 0),
  vt = Symbol(void 0),
  ki = Symbol(void 0),
  Ln = [];
let Ot = null;
function q(e = !1) {
  Ln.push(Ot = e ? null : []);
}
function Yv() {
  Ln.pop(), Ot = Ln[Ln.length - 1] || null;
}
let Gn = 1;
function Jl(e) {
  Gn += e;
}
function Gc(e) {
  return e.dynamicChildren = Gn > 0 ? Ot || en : null, Yv(), Gn > 0 && Ot && Ot.push(e), e;
}
function re(e, t, r, n, o, a) {
  return Gc(ne(e, t, r, n, o, a, !0));
}
function ze(e, t, r, n, o) {
  return Gc(Q(e, t, r, n, o, !0));
}
function Er(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Lr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ti = "__vInternal",
  Yc = ({
    key: e
  }) => e ?? null,
  Co = ({
    ref: e,
    ref_key: t,
    ref_for: r
  }) => e != null ? je(e) || tt(e) || Be(e) ? {
    i: rt,
    r: e,
    k: t,
    f: !!r
  } : e : null;
function ne(e, t = null, r = null, n = 0, o = null, a = e === Ue ? 0 : 1, i = !1, s = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Yc(t),
    ref: t && Co(t),
    scopeId: Ka,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: n,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: rt
  };
  return s ? (el(u, r), a & 128 && e.normalize(u)) : r && (u.shapeFlag |= je(r) ? 8 : 16), Gn > 0 && !i && Ot && (u.patchFlag > 0 || a & 6) && u.patchFlag !== 32 && Ot.push(u), u;
}
const Q = Xv;
function Xv(e, t = null, r = null, n = 0, o = null, a = !1) {
  if ((!e || e === Nc) && (e = vt), Er(e)) {
    const s = Br(e, t, !0);
    return r && el(s, r), Gn > 0 && !a && Ot && (s.shapeFlag & 6 ? Ot[Ot.indexOf(e)] = s : Ot.push(s)), s.patchFlag |= -2, s;
  }
  if (ih(e) && (e = e.__vccOpts), t) {
    t = Qv(t);
    let {
      class: s,
      style: u
    } = t;
    s && !je(s) && (t.class = H(s)), He(u) && (bc(u) && !be(u) && (u = Je({}, u)), t.style = ve(u));
  }
  const i = je(e) ? 1 : yv(e) ? 128 : qv(e) ? 64 : He(e) ? 4 : Be(e) ? 2 : 0;
  return ne(e, t, r, n, o, i, a, !0);
}
function Qv(e) {
  return e ? bc(e) || ti in e ? Je({}, e) : e : null;
}
function Br(e, t, r = !1) {
  const {
      props: n,
      ref: o,
      patchFlag: a,
      children: i
    } = e,
    s = t ? Ft(n || {}, t) : n;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: s,
    key: s && Yc(s),
    ref: t && t.ref ? r && o ? be(o) ? o.concat(Co(t)) : [o, Co(t)] : Co(t) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ue ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Br(e.ssContent),
    ssFallback: e.ssFallback && Br(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Le(e = " ", t = 0) {
  return Q(ei, null, e, t);
}
function Ee(e = "", t = !1) {
  return t ? (q(), ze(vt, null, e)) : Q(vt, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? Q(vt) : be(e) ? Q(Ue, null, e.slice()) : typeof e == "object" ? fr(e) : Q(ei, null, String(e));
}
function fr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Br(e);
}
function el(e, t) {
  let r = 0;
  const {
    shapeFlag: n
  } = e;
  if (t == null) t = null;else if (be(t)) r = 16;else if (typeof t == "object") {
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), el(e, o()), o._c && (o._d = !0));
      return;
    } else {
      r = 32;
      const o = t._;
      !o && !(ti in t) ? t._ctx = rt : o === 3 && rt && (rt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  } else Be(t) ? (t = {
    default: t,
    _ctx: rt
  }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [Le(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Ft(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const o in n) if (o === "class") t.class !== n.class && (t.class = H([t.class, n.class]));else if (o === "style") t.style = ve([t.style, n.style]);else if (Ha(o)) {
      const a = t[o],
        i = n[o];
      i && a !== i && !(be(a) && a.includes(i)) && (t[o] = a ? [].concat(a, i) : i);
    } else o !== "" && (t[o] = n[o]);
  }
  return t;
}
function $t(e, t, r, n = null) {
  Ct(e, t, 7, [r, n]);
}
const Zv = qc();
let Jv = 0;
function eh(e, t, r) {
  const n = e.type,
    o = (t ? t.appContext : e.appContext) || Zv,
    a = {
      uid: Jv++,
      vnode: e,
      type: n,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new lc(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Uc(n, o),
      emitsOptions: kc(n, o),
      emit: null,
      emitted: null,
      propsDefaults: Ne,
      inheritAttrs: n.inheritAttrs,
      ctx: Ne,
      data: Ne,
      props: Ne,
      attrs: Ne,
      slots: Ne,
      refs: Ne,
      setupState: Ne,
      setupContext: null,
      suspense: r,
      suspenseId: r ? r.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
  return a.ctx = {
    _: a
  }, a.root = t ? t.root : a, a.emit = vv.bind(null, a), e.ce && e.ce(a), a;
}
let Ke = null;
const Sr = () => Ke || rt,
  fn = e => {
    Ke = e, e.scope.on();
  },
  Hr = () => {
    Ke && Ke.scope.off(), Ke = null;
  };
function Xc(e) {
  return e.vnode.shapeFlag & 4;
}
let Yn = !1;
function th(e, t = !1) {
  Yn = t;
  const {
      props: r,
      children: n
    } = e.vnode,
    o = Xc(e);
  Lv(e, r, o, t), zv(e, n);
  const a = o ? rh(e, t) : void 0;
  return Yn = !1, a;
}
function rh(e, t) {
  const r = e.type;
  e.accessCache = Object.create(null), e.proxy = Vs(new Proxy(e.ctx, kv));
  const {
    setup: n
  } = r;
  if (n) {
    const o = e.setupContext = n.length > 1 ? oh(e) : null;
    fn(e), Cn();
    const a = xr(n, e, 0, [e.props, o]);
    if (En(), Hr(), ac(a)) {
      if (a.then(Hr, Hr), t) return a.then(i => {
        e0(e, i, t);
      }).catch(i => {
        Wa(i, e, 0);
      });
      e.asyncDep = a;
    } else e0(e, a, t);
  } else Qc(e, t);
}
function e0(e, t, r) {
  Be(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : He(t) && (e.setupState = Ac(t)), Qc(e, r);
}
let t0;
function Qc(e, t, r) {
  const n = e.type;
  if (!e.render) {
    if (!t && t0 && !n.render) {
      const o = n.template || Qs(e).template;
      if (o) {
        const {
            isCustomElement: a,
            compilerOptions: i
          } = e.appContext.config,
          {
            delimiters: s,
            compilerOptions: u
          } = n,
          l = Je(Je({
            isCustomElement: a,
            delimiters: s
          }, i), u);
        n.render = t0(o, l);
      }
    }
    e.render = n.render || Tt;
  }
  fn(e), Cn(), Ov(e), En(), Hr();
}
function nh(e) {
  return new Proxy(e.attrs, {
    get(t, r) {
      return ut(e, "get", "$attrs"), t[r];
    }
  });
}
function oh(e) {
  const t = n => {
    e.exposed = n || {};
  };
  let r;
  return {
    get attrs() {
      return r || (r = nh(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ri(e) {
  if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Ac(Vs(e.exposed)), {
    get(t, r) {
      if (r in t) return t[r];
      if (r in Pn) return Pn[r](e);
    },
    has(t, r) {
      return r in t || r in Pn;
    }
  }));
}
function ah(e, t = !0) {
  return Be(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ih(e) {
  return Be(e) && "__vccOpts" in e;
}
const pe = (e, t) => lv(e, t, Yn);
function ni(e, t, r) {
  const n = arguments.length;
  return n === 2 ? He(t) && !be(t) ? Er(t) ? Q(e, null, [t]) : Q(e, t) : Q(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Er(r) && (r = [r]), Q(e, t, r));
}
const sh = Symbol(""),
  lh = () => pt(sh),
  uh = "3.2.47",
  ch = "http://www.w3.org/2000/svg",
  Ir = typeof document < "u" ? document : null,
  r0 = Ir && Ir.createElement("template"),
  fh = {
    insert: (e, t, r) => {
      t.insertBefore(e, r || null);
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, r, n) => {
      const o = t ? Ir.createElementNS(ch, e) : Ir.createElement(e, r ? {
        is: r
      } : void 0);
      return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o;
    },
    createText: e => Ir.createTextNode(e),
    createComment: e => Ir.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Ir.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, r, n, o, a) {
      const i = r ? r.previousSibling : t.lastChild;
      if (o && (o === a || o.nextSibling)) for (; t.insertBefore(o.cloneNode(!0), r), !(o === a || !(o = o.nextSibling)););else {
        r0.innerHTML = n ? `<svg>${e}</svg>` : e;
        const s = r0.content;
        if (n) {
          const u = s.firstChild;
          for (; u.firstChild;) s.appendChild(u.firstChild);
          s.removeChild(u);
        }
        t.insertBefore(s, r);
      }
      return [i ? i.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild];
    }
  };
function dh(e, t, r) {
  const n = e._vtc;
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
function ph(e, t, r) {
  const n = e.style,
    o = je(r);
  if (r && !o) {
    if (t && !je(t)) for (const a in t) r[a] == null && ts(n, a, "");
    for (const a in r) ts(n, a, r[a]);
  } else {
    const a = n.display;
    o ? t !== r && (n.cssText = r) : t && e.removeAttribute("style"), "_vod" in e && (n.display = a);
  }
}
const n0 = /\s*!important$/;
function ts(e, t, r) {
  if (be(r)) r.forEach(n => ts(e, t, n));else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);else {
    const n = vh(e, t);
    n0.test(r) ? e.setProperty(bn(n), r.replace(n0, ""), "important") : e[n] = r;
  }
}
const o0 = ["Webkit", "Moz", "ms"],
  Oi = {};
function vh(e, t) {
  const r = Oi[t];
  if (r) return r;
  let n = Mt(t);
  if (n !== "filter" && n in e) return Oi[t] = n;
  n = Va(n);
  for (let o = 0; o < o0.length; o++) {
    const a = o0[o] + n;
    if (a in e) return Oi[t] = a;
  }
  return t;
}
const a0 = "http://www.w3.org/1999/xlink";
function hh(e, t, r, n, o) {
  if (n && t.startsWith("xlink:")) r == null ? e.removeAttributeNS(a0, t.slice(6, t.length)) : e.setAttributeNS(a0, t, r);else {
    const a = vp(t);
    r == null || a && !rc(r) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : r);
  }
}
function xh(e, t, r, n, o, a, i) {
  if (t === "innerHTML" || t === "textContent") {
    n && i(n, o, a), e[t] = r ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = r;
    const u = r ?? "";
    (e.value !== u || e.tagName === "OPTION") && (e.value = u), r == null && e.removeAttribute(t);
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const u = typeof e[t];
    u === "boolean" ? r = rc(r) : r == null && u === "string" ? (r = "", s = !0) : u === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {}
  s && e.removeAttribute(t);
}
function mh(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function gh(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
function yh(e, t, r, n, o = null) {
  const a = e._vei || (e._vei = {}),
    i = a[t];
  if (n && i) i.value = n;else {
    const [s, u] = bh(t);
    if (n) {
      const l = a[t] = Bh(n, o);
      mh(e, s, l, u);
    } else i && (gh(e, s, i, u), a[t] = void 0);
  }
}
const i0 = /(?:Once|Passive|Capture)$/;
function bh(e) {
  let t;
  if (i0.test(e)) {
    t = {};
    let n;
    for (; n = e.match(i0);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : bn(e.slice(2)), t];
}
let Ti = 0;
const Ch = Promise.resolve(),
  Eh = () => Ti || (Ch.then(() => Ti = 0), Ti = Date.now());
function Bh(e, t) {
  const r = n => {
    if (!n._vts) n._vts = Date.now();else if (n._vts <= r.attached) return;
    Ct(Ah(n, r.value), t, 5, [n]);
  };
  return r.value = e, r.attached = Eh(), r;
}
function Ah(e, t) {
  if (be(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(n => o => !o._stopped && n && n(o));
  } else return t;
}
const s0 = /^on[a-z]/,
  wh = (e, t, r, n, o = !1, a, i, s, u) => {
    t === "class" ? dh(e, n, o) : t === "style" ? ph(e, r, n) : Ha(t) ? Rs(t) || yh(e, t, r, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Fh(e, t, n, o)) ? xh(e, t, n, a, i, s, u) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), hh(e, t, n, o));
  };
function Fh(e, t, r, n) {
  return n ? !!(t === "innerHTML" || t === "textContent" || t in e && s0.test(t) && Be(r)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || s0.test(t) && je(r) ? !1 : t in e;
}
const ar = "transition",
  Sn = "animation",
  it = (e, {
    slots: t
  }) => ni(Pc, Jc(e), t);
it.displayName = "Transition";
const Zc = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  },
  Sh = it.props = Je({}, Pc.props, Zc),
  Rr = (e, t = []) => {
    be(e) ? e.forEach(r => r(...t)) : e && e(...t);
  },
  l0 = e => e ? be(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function Jc(e) {
  const t = {};
  for (const D in e) D in Zc || (t[D] = e[D]);
  if (e.css === !1) return t;
  const {
      name: r = "v",
      type: n,
      duration: o,
      enterFromClass: a = `${r}-enter-from`,
      enterActiveClass: i = `${r}-enter-active`,
      enterToClass: s = `${r}-enter-to`,
      appearFromClass: u = a,
      appearActiveClass: l = i,
      appearToClass: c = s,
      leaveFromClass: d = `${r}-leave-from`,
      leaveActiveClass: f = `${r}-leave-active`,
      leaveToClass: p = `${r}-leave-to`
    } = e,
    v = Dh(o),
    h = v && v[0],
    g = v && v[1],
    {
      onBeforeEnter: b,
      onEnter: m,
      onEnterCancelled: x,
      onLeave: y,
      onLeaveCancelled: w,
      onBeforeAppear: C = b,
      onAppear: _ = m,
      onAppearCancelled: F = x
    } = t,
    O = (D, k, X) => {
      cr(D, k ? c : s), cr(D, k ? l : i), X && X();
    },
    B = (D, k) => {
      D._isLeaving = !1, cr(D, d), cr(D, p), cr(D, f), k && k();
    },
    A = D => (k, X) => {
      const ie = D ? _ : m,
        ae = () => O(k, D, X);
      Rr(ie, [k, ae]), u0(() => {
        cr(k, D ? u : a), Wt(k, D ? c : s), l0(ie) || c0(k, n, h, ae);
      });
    };
  return Je(t, {
    onBeforeEnter(D) {
      Rr(b, [D]), Wt(D, a), Wt(D, i);
    },
    onBeforeAppear(D) {
      Rr(C, [D]), Wt(D, u), Wt(D, l);
    },
    onEnter: A(!1),
    onAppear: A(!0),
    onLeave(D, k) {
      D._isLeaving = !0;
      const X = () => B(D, k);
      Wt(D, d), tf(), Wt(D, f), u0(() => {
        D._isLeaving && (cr(D, d), Wt(D, p), l0(y) || c0(D, n, g, X));
      }), Rr(y, [D, X]);
    },
    onEnterCancelled(D) {
      O(D, !1), Rr(x, [D]);
    },
    onAppearCancelled(D) {
      O(D, !0), Rr(F, [D]);
    },
    onLeaveCancelled(D) {
      B(D), Rr(w, [D]);
    }
  });
}
function Dh(e) {
  if (e == null) return null;
  if (He(e)) return [Ri(e.enter), Ri(e.leave)];
  {
    const t = Ri(e);
    return [t, t];
  }
}
function Ri(e) {
  return Ep(e);
}
function Wt(e, t) {
  t.split(/\s+/).forEach(r => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set())).add(t);
}
function cr(e, t) {
  t.split(/\s+/).forEach(n => n && e.classList.remove(n));
  const {
    _vtc: r
  } = e;
  r && (r.delete(t), r.size || (e._vtc = void 0));
}
function u0(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let _h = 0;
function c0(e, t, r, n) {
  const o = e._endId = ++_h,
    a = () => {
      o === e._endId && n();
    };
  if (r) return setTimeout(a, r);
  const {
    type: i,
    timeout: s,
    propCount: u
  } = ef(e, t);
  if (!i) return n();
  const l = i + "end";
  let c = 0;
  const d = () => {
      e.removeEventListener(l, f), a();
    },
    f = p => {
      p.target === e && ++c >= u && d();
    };
  setTimeout(() => {
    c < u && d();
  }, s + 1), e.addEventListener(l, f);
}
function ef(e, t) {
  const r = window.getComputedStyle(e),
    n = v => (r[v] || "").split(", "),
    o = n(`${ar}Delay`),
    a = n(`${ar}Duration`),
    i = f0(o, a),
    s = n(`${Sn}Delay`),
    u = n(`${Sn}Duration`),
    l = f0(s, u);
  let c = null,
    d = 0,
    f = 0;
  t === ar ? i > 0 && (c = ar, d = i, f = a.length) : t === Sn ? l > 0 && (c = Sn, d = l, f = u.length) : (d = Math.max(i, l), c = d > 0 ? i > l ? ar : Sn : null, f = c ? c === ar ? a.length : u.length : 0);
  const p = c === ar && /\b(transform|all)(,|$)/.test(n(`${ar}Property`).toString());
  return {
    type: c,
    timeout: d,
    propCount: f,
    hasTransform: p
  };
}
function f0(e, t) {
  for (; e.length < t.length;) e = e.concat(e);
  return Math.max(...t.map((r, n) => d0(r) + d0(e[n])));
}
function d0(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1000;
}
function tf() {
  return document.body.offsetHeight;
}
const rf = new WeakMap(),
  nf = new WeakMap(),
  of = {
    name: "TransitionGroup",
    props: Je({}, Sh, {
      tag: String,
      moveClass: String
    }),
    setup(e, {
      slots: t
    }) {
      const r = Sr(),
        n = Rc();
      let o, a;
      return to(() => {
        if (!o.length) return;
        const i = e.moveClass || `${e.name || "v"}-move`;
        if (!$h(o[0].el, r.vnode.el, i)) return;
        o.forEach(Th), o.forEach(Rh);
        const s = o.filter(Ph);
        tf(), s.forEach(u => {
          const l = u.el,
            c = l.style;
          Wt(l, i), c.transform = c.webkitTransform = c.transitionDuration = "";
          const d = l._moveCb = f => {
            f && f.target !== l || (!f || /transform$/.test(f.propertyName)) && (l.removeEventListener("transitionend", d), l._moveCb = null, cr(l, i));
          };
          l.addEventListener("transitionend", d);
        });
      }), () => {
        const i = ke(e),
          s = Jc(i);
        let u = i.tag || Ue;
        o = a, a = t.default ? Ks(t.default()) : [];
        for (let l = 0; l < a.length; l++) {
          const c = a[l];
          c.key != null && Kn(c, qn(c, s, n, r));
        }
        if (o) for (let l = 0; l < o.length; l++) {
          const c = o[l];
          Kn(c, qn(c, s, n, r)), rf.set(c, c.el.getBoundingClientRect());
        }
        return Q(u, null, a);
      };
    }
  },
  kh = e => delete e.mode;
of.props;
const Oh = of;
function Th(e) {
  const t = e.el;
  t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
}
function Rh(e) {
  nf.set(e, e.el.getBoundingClientRect());
}
function Ph(e) {
  const t = rf.get(e),
    r = nf.get(e),
    n = t.left - r.left,
    o = t.top - r.top;
  if (n || o) {
    const a = e.el.style;
    return a.transform = a.webkitTransform = `translate(${n}px,${o}px)`, a.transitionDuration = "0s", e;
  }
}
function $h(e, t, r) {
  const n = e.cloneNode();
  e._vtc && e._vtc.forEach(i => {
    i.split(/\s+/).forEach(s => s && n.classList.remove(s));
  }), r.split(/\s+/).forEach(i => i && n.classList.add(i)), n.style.display = "none";
  const o = t.nodeType === 1 ? t : t.parentNode;
  o.appendChild(n);
  const {
    hasTransform: a
  } = ef(n);
  return o.removeChild(n), a;
}
const Lh = ["ctrl", "shift", "alt", "meta"],
  Ih = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button" in e && e.button !== 0,
    middle: e => "button" in e && e.button !== 1,
    right: e => "button" in e && e.button !== 2,
    exact: (e, t) => Lh.some(r => e[`${r}Key`] && !t.includes(r))
  },
  oi = (e, t) => (r, ...n) => {
    for (let o = 0; o < t.length; o++) {
      const a = Ih[t[o]];
      if (a && a(r, t)) return;
    }
    return e(r, ...n);
  },
  Nt = {
    beforeMount(e, {
      value: t
    }, {
      transition: r
    }) {
      e._vod = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Dn(e, t);
    },
    mounted(e, {
      value: t
    }, {
      transition: r
    }) {
      r && t && r.enter(e);
    },
    updated(e, {
      value: t,
      oldValue: r
    }, {
      transition: n
    }) {
      !t != !r && (n ? t ? (n.beforeEnter(e), Dn(e, !0), n.enter(e)) : n.leave(e, () => {
        Dn(e, !1);
      }) : Dn(e, t));
    },
    beforeUnmount(e, {
      value: t
    }) {
      Dn(e, t);
    }
  };
function Dn(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Nh = Je({
  patchProp: wh
}, fh);
let p0;
function zh() {
  return p0 || (p0 = Vv(Nh));
}
const af = (...e) => {
  const t = zh().createApp(...e),
    {
      mount: r
    } = t;
  return t.mount = n => {
    const o = Hh(n);
    if (!o) return;
    const a = t._component;
    !Be(a) && !a.render && !a.template && (a.template = o.innerHTML), o.innerHTML = "";
    const i = r(o, !1, o instanceof SVGElement);
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function Hh(e) {
  return je(e) ? document.querySelector(e) : e;
}
var Mh = !1; /*!
             * pinia v2.0.30
             * (c) 2023 Eduardo San Martin Morote
             * @license MIT
             */
const Uh = Symbol();
var v0;
(function (e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(v0 || (v0 = {}));
function Vh() {
  const e = Ap(!0),
    t = e.run(() => Y({}));
  let r = [],
    n = [];
  const o = Vs({
    install(a) {
      o._a = a, a.provide(Uh, o), a.config.globalProperties.$pinia = o, n.forEach(i => r.push(i)), n = [];
    },
    use(a) {
      return !this._a && !Mh ? n.push(a) : r.push(a), this;
    },
    _p: r,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t
  });
  return o;
}
var sf = {
  locks: {},
  zIndex: 2000,
  touchmoveForbid: !0
};
ht(sf);
const Gt = ht(sf),
  St = e => typeof e == "string",
  rs = e => typeof e == "boolean",
  qr = e => typeof e == "number",
  jh = e => Object.prototype.toString.call(e) === "[object Object]",
  Zt = e => Array.isArray(e),
  Wh = e => e ? /^(http)|(\.*\/)/.test(e) : !1,
  Kt = e => e == null || e === "" || Array.isArray(e) && !e.length,
  Et = e => e == null ? 0 : St(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : rs(e) ? Number(e) : e,
  ai = (e, t) => {
    if (e.length) {
      const r = e.indexOf(t);
      if (r > -1) return e.splice(r, 1);
    }
  },
  lf = (e, t = 200) => {
    let r,
      n = 0;
    return function o(...a) {
      const i = Date.now(),
        s = i - n;
      n || (n = i), r && window.clearTimeout(r), s >= t ? (e.apply(this, a), n = i) : r = window.setTimeout(() => {
        o.apply(this, a);
      }, t - s);
    };
  },
  qh = () => typeof window < "u",
  Kh = (e, t, r = "start") => {
    let n = r === "start" ? 0 : e.length - 1;
    for (; e.length > 0 && n >= 0 && n <= e.length - 1;) {
      if (t(e[n], n, e)) return [e[n], n];
      r === "start" ? n++ : n--;
    }
    return [null, -1];
  };
var Gh = e => {
    var t = [];
    return {
      cache: t,
      has(r) {
        return this.cache.includes(r);
      },
      add(r) {
        this.has(r) || (this.cache.length === e && t.shift(), this.cache.push(r));
      },
      remove(r) {
        this.has(r) && ai(this.cache, r);
      },
      clear() {
        this.cache.length = 0;
      }
    };
  },
  ns = e => e,
  Yh = (e, t) => e ?? t,
  Xh = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self;
function h0(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i),
      u = s.value;
  } catch (l) {
    r(l);
    return;
  }
  s.done ? t(u) : Promise.resolve(u).then(n, o);
}
function Qh(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(t, r);
      function i(u) {
        h0(a, n, o, i, s, "next", u);
      }
      function s(u) {
        h0(a, n, o, i, s, "throw", u);
      }
      i(void 0);
    });
  };
}
function x0(e) {
  var {
    top: t
  } = e.getBoundingClientRect();
  return t + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Zh(e) {
  var t = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(t, 0);
}
function Jh(e) {
  var t = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(t, 0);
}
function e1(e) {
  return os.apply(this, arguments);
}
function os() {
  return os = Qh(function* (e) {
    yield dn();
    var {
        top: t,
        bottom: r,
        left: n,
        right: o
      } = e.getBoundingClientRect(),
      {
        innerWidth: a,
        innerHeight: i
      } = window,
      s = n <= a && o >= 0,
      u = t <= i && r >= 0;
    return s && u;
  }), os.apply(this, arguments);
}
function tl(e) {
  for (var t = e; t && !(!t.parentNode || (t = t.parentNode, t === document.body || t === document.documentElement));) {
    var r = /(scroll|auto)/,
      {
        overflowY: n,
        overflow: o
      } = window.getComputedStyle(t);
    if (r.test(n) || r.test(o)) return t;
  }
  return window;
}
function t1(e) {
  for (var t = [], r = e; r !== window;) r = tl(r), t.push(r);
  return t;
}
var uf = e => St(e) && e.endsWith("rem"),
  r1 = e => St(e) && e.endsWith("px") || qr(e),
  n1 = e => St(e) && e.endsWith("%"),
  cf = e => St(e) && e.endsWith("vw"),
  ff = e => St(e) && e.endsWith("vh"),
  o1 = e => St(e) && e.startsWith("calc("),
  a1 = e => St(e) && e.startsWith("var("),
  zt = e => {
    if (qr(e)) return e;
    if (r1(e)) return +e.replace("px", "");
    if (cf(e)) return +e.replace("vw", "") * window.innerWidth / 100;
    if (ff(e)) return +e.replace("vh", "") * window.innerHeight / 100;
    if (uf(e)) {
      var t = +e.replace("rem", ""),
        r = window.getComputedStyle(document.documentElement).fontSize;
      return t * parseFloat(r);
    }
    return St(e) ? Et(e) : 0;
  },
  Ge = e => {
    if (e != null) return n1(e) || cf(e) || ff(e) || uf(e) || o1(e) || a1(e) ? e : zt(e) + "px";
  },
  i1 = function (e, t) {
    if (t === void 0 && (t = 1), e != null) {
      var r = Ge(e),
        n = r.match(/(vh|%|rem|px|vw)$/)[0];
      return "" + parseFloat(r) * t + n;
    }
  };
function Ur(e) {
  var t = Xh();
  return t.requestAnimationFrame ? t.requestAnimationFrame(e) : t.setTimeout(e, 16);
}
function X4(e) {
  Ur(() => {
    Ur(e);
  });
}
function dn() {
  return new Promise(e => {
    Ur(() => {
      Ur(e);
    });
  });
}
function s1() {
  return new Promise(e => {
    Ur(e);
  });
}
function as(e, t) {
  var {
      top: r = 0,
      left: n = 0,
      duration: o = 300,
      animation: a
    } = t,
    i = Date.now(),
    s = Zh(e),
    u = Jh(e);
  return new Promise(l => {
    var c = () => {
      var d = (Date.now() - i) / o;
      if (d < 1) {
        var f = s + (r - s) * a(d),
          p = u + (n - u) * a(d);
        e.scrollTo(p, f), Ur(c);
      } else e.scrollTo(n, r), l();
    };
    Ur(c);
  });
}
function l1() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var u1 = ["collect", "clear"];
function m0(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i),
      u = s.value;
  } catch (l) {
    r(l);
    return;
  }
  s.done ? t(u) : Promise.resolve(u).then(n, o);
}
function g0(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(t, r);
      function i(u) {
        m0(a, n, o, i, s, "next", u);
      }
      function s(u) {
        m0(a, n, o, i, s, "throw", u);
      }
      i(void 0);
    });
  };
}
function c1(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    o,
    a;
  for (a = 0; a < n.length; a++) o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
function Jo() {
  return Jo = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jo.apply(this, arguments);
}
function bt(e, t) {
  return Array.isArray(t) ? t.reduce((r, n) => (r[n] = e[n], r), {}) : e[t];
}
function f1(e) {
  var t = af(e),
    r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: t.mount(r),
    unmount() {
      t.unmount(), document.body.removeChild(r);
    }
  };
}
function df(e, t, r) {
  t === void 0 && (t = {}), r === void 0 && (r = {});
  var n = {
      setup() {
        return () => ni(e, Jo({}, t, r));
      }
    },
    {
      unmount: o
    } = f1(n);
  return {
    unmountInstance: o
  };
}
function d1(e) {
  var t = [],
    r = n => {
      if (n != null && n.component) {
        r(n == null ? void 0 : n.component.subTree);
        return;
      }
      Array.isArray(n == null ? void 0 : n.children) && n.children.forEach(o => {
        Er(o) && (t.push(o), r(o));
      });
    };
  return r(e), t;
}
function rl(e) {
  var t = ht([]),
    r = Sr(),
    n = () => {
      var s = d1(r.subTree);
      t.sort((u, l) => s.indexOf(u.vnode) - s.indexOf(l.vnode));
    },
    o = s => {
      t.push(s), n();
    },
    a = s => {
      ai(t, s);
    };
  on(e, {
    collect: o,
    clear: a,
    instances: t
  });
  var i = pe(() => t.length);
  return {
    length: i
  };
}
function ii(e) {
  if (!pf(e)) return {
    index: null
  };
  var t = pt(e),
    {
      collect: r,
      clear: n,
      instances: o
    } = t,
    a = Sr();
  xt(() => {
    Rt().then(() => r(a));
  }), Fr(() => {
    Rt().then(() => n(a));
  });
  var i = pe(() => o.indexOf(a));
  return {
    index: i
  };
}
function si(e) {
  var t = [],
    r = a => {
      t.push(a);
    },
    n = a => {
      ai(t, a);
    },
    o = a => {
      on(e, Jo({
        collect: r,
        clear: n
      }, a));
    };
  return {
    childProviders: t,
    bindChildren: o
  };
}
function ro(e) {
  if (!pf(e)) return {
    parentProvider: null,
    bindParent: null
  };
  var t = pt(e),
    {
      collect: r,
      clear: n
    } = t,
    o = c1(t, u1),
    a = i => {
      xt(() => r(i)), Za(() => n(i));
    };
  return {
    parentProvider: o,
    bindParent: a
  };
}
function pf(e) {
  var t = Sr();
  return e in t.provides;
}
function li() {
  var e = Y(""),
    t = function () {
      var o = g0(function* (a, i, s) {
        if (!Zt(a) || !a.length) return !0;
        var u = yield Promise.all(a.map(l => l(i, s)));
        return !u.some(l => l !== !0 ? (e.value = String(l), !0) : !1);
      });
      return function (i, s, u) {
        return o.apply(this, arguments);
      };
    }(),
    r = () => {
      e.value = "";
    },
    n = function () {
      var o = g0(function* (a, i, s, u, l) {
        a.includes(i) && (yield t(s, u, l)) && (e.value = "");
      });
      return function (i, s, u, l, c) {
        return o.apply(this, arguments);
      };
    }();
  return {
    errorMessage: e,
    validate: t,
    resetValidation: r,
    validateWithTrigger: n
  };
}
function p1(e) {
  xt(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), Fr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function nl() {
  var e = Y(!1);
  return Ya(() => {
    e.value = !1;
  }), Xa(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function Pe(e) {
  var t = "var",
    r = t + "-" + e,
    n = a => a ? a[0] === "$" ? a.replace("$", t) : a.startsWith("--") ? "" + r + a : r + "__" + a : r,
    o = function () {
      for (var a = arguments.length, i = new Array(a), s = 0; s < a; s++) i[s] = arguments[s];
      return i.map(u => {
        if (Zt(u)) {
          var [l, c, d = null] = u;
          return l ? c : d;
        }
        return u;
      });
    };
  return {
    n,
    classes: o
  };
}
function te(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  if (Zt(e)) return e.map(o => o(...r));
  if (e) return e(...r);
}
function ce(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function ea() {
  return ea = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ea.apply(this, arguments);
}
var {
    n: vf
  } = Pe("ripple"),
  y0 = 250;
function v1(e) {
  var {
    zIndex: t,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), t === "auto" && (e.style.zIndex = "1");
}
function h1(e, t) {
  var {
      top: r,
      left: n
    } = e.getBoundingClientRect(),
    {
      clientWidth: o,
      clientHeight: a
    } = e,
    i = Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2)) / 2,
    s = i * 2,
    u = t.touches[0].clientX - n,
    l = t.touches[0].clientY - r,
    c = (o - i * 2) / 2,
    d = (a - i * 2) / 2,
    f = u - i,
    p = l - i;
  return {
    x: f,
    y: p,
    centerX: c,
    centerY: d,
    size: s
  };
}
function hf(e) {
  var t = this._ripple;
  if (t.removeRipple(), !(t.disabled || t.tasker)) {
    var r = () => {
      t.tasker = null;
      var {
          x: n,
          y: o,
          centerX: a,
          centerY: i,
          size: s
        } = h1(this, e),
        u = document.createElement("div");
      u.classList.add(vf()), u.style.opacity = "0", u.style.transform = "translate(" + n + "px, " + o + "px) scale3d(.3, .3, .3)", u.style.width = s + "px", u.style.height = s + "px", t.color && (u.style.backgroundColor = t.color), u.dataset.createdAt = String(performance.now()), v1(this), this.appendChild(u), window.setTimeout(() => {
        u.style.transform = "translate(" + a + "px, " + i + "px) scale3d(1, 1, 1)", u.style.opacity = ".25";
      }, 20);
    };
    t.tasker = window.setTimeout(r, 60);
  }
}
function is() {
  var e = this._ripple,
    t = () => {
      var r = this.querySelectorAll("." + vf());
      if (r.length) {
        var n = r[r.length - 1],
          o = y0 - performance.now() + Number(n.dataset.createdAt);
        setTimeout(() => {
          n.style.opacity = "0", setTimeout(() => {
            var a;
            return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
          }, y0);
        }, o);
      }
    };
  e.tasker ? setTimeout(t, 60) : t();
}
function xf() {
  var e = this._ripple;
  l1() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function x1(e, t) {
  var r, n, o;
  e._ripple = ea({
    tasker: null
  }, (r = t.value) != null ? r : {}, {
    touchmoveForbid: (n = (o = t.value) == null ? void 0 : o.touchmoveForbid) != null ? n : Gt.touchmoveForbid,
    removeRipple: is.bind(e)
  }), e.addEventListener("touchstart", hf, {
    passive: !0
  }), e.addEventListener("touchmove", xf, {
    passive: !0
  }), e.addEventListener("dragstart", is, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function m1(e) {
  e.removeEventListener("touchstart", hf), e.removeEventListener("touchmove", xf), e.removeEventListener("dragstart", is), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function g1(e, t) {
  var r,
    n,
    o,
    a,
    i,
    s,
    u,
    l = {
      touchmoveForbid: (r = (n = t.value) == null ? void 0 : n.touchmoveForbid) != null ? r : Gt.touchmoveForbid,
      color: (o = t.value) == null ? void 0 : o.color,
      disabled: (a = t.value) == null ? void 0 : a.disabled
    },
    c = l.touchmoveForbid !== ((i = e._ripple) == null ? void 0 : i.touchmoveForbid) || l.color !== ((s = e._ripple) == null ? void 0 : s.color) || l.disabled !== ((u = e._ripple) == null ? void 0 : u.disabled);
  if (c) {
    var d, f;
    e._ripple = ea({
      tasker: l.disabled ? null : (d = e._ripple) == null ? void 0 : d.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, l);
  }
}
var y1 = {
  mounted: x1,
  unmounted: m1,
  updated: g1,
  install(e) {
    e.directive("ripple", this);
  }
};
const Kr = y1;
function b1(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var mf = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: b1
  },
  transition: {
    type: String
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: {
    type: String
  },
  overlayStyle: {
    type: Object
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: String
  },
  onOpen: ce(),
  onOpened: ce(),
  onClose: ce(),
  onClosed: ce(),
  onClickOverlay: ce(),
  "onUpdate:show": ce(),
  onRouteChange: ce()
};
function gf() {
  var e = Object.keys(Gt.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function xo(e) {
  Gt.locks[e] = 1, gf();
}
function mo(e) {
  delete Gt.locks[e], gf();
}
function ui(e, t) {
  var {
    uid: r
  } = Sr();
  t && Se(t, n => {
    n === !1 ? mo(r) : n === !0 && e() === !0 && xo(r);
  }), Se(e, n => {
    t && t() === !1 || (n === !0 ? xo(r) : mo(r));
  }), Ic(() => {
    t && t() === !1 || e() === !0 && xo(r);
  }), Fr(() => {
    t && t() === !1 || e() === !0 && mo(r);
  }), Ya(() => {
    t && t() === !1 || e() === !0 && xo(r);
  }), Xa(() => {
    t && t() === !1 || e() === !0 && mo(r);
  });
}
function no(e, t) {
  var r = Y(Gt.zIndex);
  return Se(e, n => {
    n && (Gt.zIndex += t, r.value = Gt.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function ss() {
  return ss = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ss.apply(this, arguments);
}
function C1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Er(e);
}
var {
  n: Vt,
  classes: Pi
} = Pe("popup");
const Eo = Fe({
  name: "VarPopup",
  inheritAttrs: !1,
  props: mf,
  setup(e, t) {
    var {
        slots: r,
        attrs: n
      } = t,
      {
        zIndex: o
      } = no(() => e.show, 3),
      {
        disabled: a
      } = nl(),
      i = () => {
        var {
          closeOnClickOverlay: c,
          onClickOverlay: d
        } = e;
        te(d), c && te(e["onUpdate:show"], !1);
      };
    ui(() => e.show, () => e.lockScroll), Se(() => e.show, c => {
      te(c ? e.onOpen : e.onClose);
    }), p1(() => te(e.onRouteChange));
    var s = () => {
        var {
          overlayClass: c = "",
          overlayStyle: d
        } = e;
        return Q("div", {
          class: Pi(Vt("overlay"), c),
          style: ss({
            zIndex: o.value - 1
          }, d),
          onClick: i
        }, null);
      },
      u = () => Q("div", Ft({
        class: Pi(Vt("content"), Vt("--" + e.position), [e.defaultStyle, Vt("--content-background-color")], [e.defaultStyle, Vt("$-elevation--3")]),
        style: {
          zIndex: o.value
        }
      }, n), [te(r.default)]),
      l = () => {
        var {
          onOpened: c,
          onClosed: d,
          show: f,
          overlay: p,
          transition: v,
          position: h
        } = e;
        return Q(it, {
          name: Vt("$-fade"),
          onAfterEnter: c,
          onAfterLeave: d
        }, {
          default: () => [Ze(Q("div", {
            class: Pi(Vt("$--box"), Vt()),
            style: {
              zIndex: o.value - 2
            }
          }, [p && s(), Q(it, {
            name: v || Vt("$-pop-" + h)
          }, {
            default: () => [f && u()]
          })]), [[Nt, f]])]
        });
      };
    return () => {
      var {
        teleport: c
      } = e;
      if (c) {
        var d;
        return Q(Ja, {
          to: c,
          disabled: a.value
        }, C1(d = l()) ? d : {
          default: () => [d]
        });
      }
      return l();
    };
  }
});
Eo.install = function (e) {
  e.component(Eo.name, Eo);
};
var yf = {
  name: {
    type: String
  },
  size: {
    type: [Number, String]
  },
  color: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  onClick: ce()
};
function b0(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i),
      u = s.value;
  } catch (l) {
    r(l);
    return;
  }
  s.done ? t(u) : Promise.resolve(u).then(n, o);
}
function E1(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(t, r);
      function i(u) {
        b0(a, n, o, i, s, "next", u);
      }
      function s(u) {
        b0(a, n, o, i, s, "throw", u);
      }
      i(void 0);
    });
  };
}
var {
  n: B1,
  classes: A1
} = Pe("icon");
function w1(e, t) {
  return q(), ze(Ys(e.isURL(e.name) ? "img" : "i"), {
    class: H(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
    style: ve({
      color: e.color,
      transition: "transform " + e.toNumber(e.transition) + "ms",
      width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
      fontSize: e.toSizeUnit(e.size)
    }),
    src: e.isURL(e.name) ? e.nextName : null,
    onClick: e.onClick
  }, null, 8, ["class", "style", "src", "onClick"]);
}
var bf = Fe({
  name: "VarIcon",
  props: yf,
  setup(e) {
    var t = Y(""),
      r = Y(!1),
      n = function () {
        var o = E1(function* (a, i) {
          var {
            transition: s
          } = e;
          if (i == null || Et(s) === 0) {
            t.value = a;
            return;
          }
          r.value = !0, yield Rt(), setTimeout(() => {
            i != null && (t.value = a), r.value = !1;
          }, Et(s));
        });
        return function (i, s) {
          return o.apply(this, arguments);
        };
      }();
    return Se(() => e.name, n, {
      immediate: !0
    }), {
      n: B1,
      classes: A1,
      nextName: t,
      shrinking: r,
      isURL: Wh,
      toNumber: Et,
      toSizeUnit: Ge
    };
  }
});
bf.render = w1;
const Bt = bf;
Bt.install = function (e) {
  e.component(Bt.name, Bt);
};
var F1 = Bt;
const S1 = {
  dialogTitle: "\u63D0\u793A",
  dialogConfirmButtonText: "\u786E\u8BA4",
  dialogCancelButtonText: "\u53D6\u6D88",
  actionSheetTitle: "\u8BF7\u9009\u62E9",
  listLoadingText: "\u52A0\u8F7D\u4E2D",
  listFinishedText: "\u6CA1\u6709\u66F4\u591A\u4E86",
  listErrorText: "\u52A0\u8F7D\u5931\u8D25",
  pickerTitle: "\u8BF7\u9009\u62E9",
  pickerConfirmButtonText: "\u786E\u8BA4",
  pickerCancelButtonText: "\u53D6\u6D88",
  datePickerMonthDict: {
    "01": {
      name: "\u4E00\u6708",
      abbr: "\u4E00\u6708"
    },
    "02": {
      name: "\u4E8C\u6708",
      abbr: "\u4E8C\u6708"
    },
    "03": {
      name: "\u4E09\u6708",
      abbr: "\u4E09\u6708"
    },
    "04": {
      name: "\u56DB\u6708",
      abbr: "\u56DB\u6708"
    },
    "05": {
      name: "\u4E94\u6708",
      abbr: "\u4E94\u6708"
    },
    "06": {
      name: "\u516D\u6708",
      abbr: "\u516D\u6708"
    },
    "07": {
      name: "\u4E03\u6708",
      abbr: "\u4E03\u6708"
    },
    "08": {
      name: "\u516B\u6708",
      abbr: "\u516B\u6708"
    },
    "09": {
      name: "\u4E5D\u6708",
      abbr: "\u4E5D\u6708"
    },
    10: {
      name: "\u5341\u6708",
      abbr: "\u5341\u6708"
    },
    11: {
      name: "\u5341\u4E00\u6708",
      abbr: "\u5341\u4E00\u6708"
    },
    12: {
      name: "\u5341\u4E8C\u6708",
      abbr: "\u5341\u4E8C\u6708"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "\u661F\u671F\u65E5",
      abbr: "\u65E5"
    },
    1: {
      name: "\u661F\u671F\u4E00",
      abbr: "\u4E00"
    },
    2: {
      name: "\u661F\u671F\u4E8C",
      abbr: "\u4E8C"
    },
    3: {
      name: "\u661F\u671F\u4E09",
      abbr: "\u4E09"
    },
    4: {
      name: "\u661F\u671F\u56DB",
      abbr: "\u56DB"
    },
    5: {
      name: "\u661F\u671F\u4E94",
      abbr: "\u4E94"
    },
    6: {
      name: "\u661F\u671F\u516D",
      abbr: "\u516D"
    }
  },
  datePickerSelected: "\u4E2A\u88AB\u9009\u62E9",
  paginationItem: "\u6761",
  paginationPage: "\u9875",
  paginationJump: "\u524D\u5F80"
};
function ls() {
  return ls = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ls.apply(this, arguments);
}
function D1() {
  var e = {},
    t = Y({}),
    r = (a, i) => {
      i.lang = a, e[a] = i;
    },
    n = a => {
      if (!e[a]) return console.warn("The " + a + " does not exist. You can mount a language package using the add method"), {};
      t.value = e[a];
    },
    o = (a, i) => {
      if (!e[a]) {
        console.warn("The " + a + " does not exist. You can mount a language package using the add method");
        return;
      }
      e[a] = ls({}, e[a], i), n(a);
    };
  return {
    packs: e,
    pack: t,
    add: r,
    use: n,
    merge: o
  };
}
var {
  packs: Q4,
  pack: _1,
  add: k1,
  use: O1,
  merge: Z4
} = D1();
k1("zh-CN", S1);
O1("zh-CN");
function T1(e) {
  var t = ["left", "center", "right"];
  return t.includes(e);
}
var R1 = {
    color: {
      type: String
    },
    textColor: {
      type: String
    },
    title: {
      type: String
    },
    titlePosition: {
      type: String,
      default: "left",
      validator: T1
    },
    elevation: {
      type: Boolean,
      default: !0
    },
    round: {
      type: Boolean,
      default: !1
    }
  },
  {
    n: P1,
    classes: $1
  } = Pe("app-bar");
function L1(e, t) {
  return q(), re("div", {
    class: H(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
    style: ve({
      background: e.color,
      color: e.textColor
    })
  }, [ne("div", {
    class: H(e.n("left"))
  }, [xe(e.$slots, "left"), e.titlePosition === "left" ? (q(), re("div", {
    key: 0,
    class: H(e.n("title")),
    style: ve({
      paddingLeft: e.paddingLeft
    })
  }, [xe(e.$slots, "default", {}, () => [Le(De(e.title), 1)])], 6)) : Ee("v-if", !0)], 2), e.titlePosition === "center" ? (q(), re("div", {
    key: 0,
    class: H(e.n("title"))
  }, [xe(e.$slots, "default", {}, () => [Le(De(e.title), 1)])], 2)) : Ee("v-if", !0), ne("div", {
    class: H(e.n("right"))
  }, [e.titlePosition === "right" ? (q(), re("div", {
    key: 0,
    class: H(e.n("title")),
    style: ve({
      paddingRight: e.paddingRight
    })
  }, [xe(e.$slots, "default", {}, () => [Le(De(e.title), 1)])], 6)) : Ee("v-if", !0), xe(e.$slots, "right")], 2)], 6);
}
var Cf = Fe({
  name: "VarAppBar",
  props: R1,
  setup(e, t) {
    var {
        slots: r
      } = t,
      n = Y(),
      o = Y(),
      a = () => {
        n.value = r.left ? 0 : void 0, o.value = r.right ? 0 : void 0;
      };
    return xt(a), to(a), {
      n: P1,
      classes: $1,
      paddingLeft: n,
      paddingRight: o
    };
  }
});
Cf.render = L1;
const Bo = Cf;
Bo.install = function (e) {
  e.component(Bo.name, Bo);
};
var I1 = Bo;
function N1(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function z1(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var vr = {
    type: {
      type: String,
      default: "circle",
      validator: N1
    },
    radius: {
      type: [String, Number]
    },
    size: {
      type: String,
      default: "normal",
      validator: z1
    },
    color: {
      type: String
    },
    description: {
      type: String
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  {
    n: H1,
    classes: M1
  } = Pe("loading"),
  U1 = e => (Bn(""), e = e(), An(), e),
  V1 = U1(() => ne("svg", {
    viewBox: "25 25 50 50"
  }, [ne("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })], -1)),
  j1 = [V1];
function W1(e, t) {
  return q(), re("div", {
    class: H(e.n())
  }, [e.$slots.default ? (q(), re("div", {
    key: 0,
    class: H(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
  }, [xe(e.$slots, "default"), e.loading ? (q(), re("div", {
    key: 0,
    class: H(e.n("content-mask"))
  }, null, 2)) : Ee("v-if", !0)], 2)) : Ee("v-if", !0), e.isShow ? (q(), re("div", {
    key: 1,
    class: H(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
  }, [e.type === "circle" ? (q(), re("div", {
    key: 0,
    class: H(e.n("circle"))
  }, [ne("span", {
    class: H(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
    style: ve({
      width: e.multiplySizeUnit(e.radius, 2),
      height: e.multiplySizeUnit(e.radius, 2),
      color: e.color
    })
  }, j1, 6)], 2)) : Ee("v-if", !0), (q(!0), re(Ue, null, Qo(e.loadingTypeDict, (r, n) => (q(), re(Ue, {
    key: n
  }, [e.type === n ? (q(), re("div", {
    key: 0,
    class: H(e.classes(e.n(n), e.n(n + "--" + e.size)))
  }, [(q(!0), re(Ue, null, Qo(r, o => (q(), re("div", {
    key: o + n,
    style: ve({
      backgroundColor: e.color
    }),
    class: H(e.classes(e.n(n + "-item"), e.n(n + "-item--" + e.size)))
  }, null, 6))), 128))], 2)) : Ee("v-if", !0)], 64))), 128)), e.$slots.description || e.description ? (q(), re("div", {
    key: 1,
    class: H(e.classes(e.n("description"), e.n("description--" + e.size))),
    style: ve({
      color: e.color
    })
  }, [xe(e.$slots, "description", {}, () => [Le(De(e.description), 1)])], 6)) : Ee("v-if", !0)], 2)) : Ee("v-if", !0)], 2);
}
var Ef = Fe({
  name: "VarLoading",
  props: vr,
  setup(e, t) {
    var {
        slots: r
      } = t,
      n = {
        wave: 5,
        cube: 4,
        rect: 8,
        disappear: 3
      },
      o = pe(() => te(r.default) ? e.loading : !0);
    return {
      n: H1,
      classes: M1,
      multiplySizeUnit: i1,
      loadingTypeDict: n,
      isShow: o
    };
  }
});
Ef.render = W1;
const an = Ef;
an.install = function (e) {
  e.component(an.name, an);
};
var q1 = an;
function us() {
  return us = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, us.apply(this, arguments);
}
function K1(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function G1(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Y1(e) {
  return ["button", "reset", "submit"].includes(e);
}
var X1 = {
    type: {
      type: String,
      default: "default",
      validator: K1
    },
    nativeType: {
      type: String,
      default: "button",
      validator: Y1
    },
    size: {
      type: String,
      default: "normal",
      validator: G1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    round: {
      type: Boolean,
      default: !1
    },
    block: {
      type: Boolean,
      default: !1
    },
    text: {
      type: Boolean,
      default: !1
    },
    outline: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    ripple: {
      type: Boolean,
      default: !0
    },
    color: {
      type: String
    },
    textColor: {
      type: String
    },
    autoLoading: {
      type: Boolean,
      default: !1
    },
    loadingRadius: {
      type: [Number, String]
    },
    loadingType: bt(vr, "type"),
    loadingSize: bt(vr, "size"),
    loadingColor: us({}, bt(vr, "color"), {
      default: "currentColor"
    }),
    onClick: ce(),
    onTouchstart: ce()
  },
  {
    n: Q1,
    classes: Z1
  } = Pe("button"),
  J1 = ["type", "disabled"];
function ex(e, t) {
  var r = Ve("var-loading"),
    n = Cr("ripple");
  return Ze((q(), re("button", {
    class: H(e.classes(e.n(), e.n("$--box"), e.n("--" + e.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.text, e.n("--text-" + e.type) + " " + e.n("--text"), e.n("--" + e.type) + " " + e.n("$-elevation--2")], [e.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.outline, e.n("--outline")])),
    style: ve({
      color: e.textColor,
      background: e.color
    }),
    type: e.nativeType,
    disabled: e.disabled,
    onClick: t[0] || (t[0] = function () {
      return e.handleClick && e.handleClick(...arguments);
    }),
    onTouchstart: t[1] || (t[1] = function () {
      return e.handleTouchstart && e.handleTouchstart(...arguments);
    })
  }, [e.loading || e.pending ? (q(), ze(r, {
    key: 0,
    class: H(e.n("loading")),
    "var-button-cover": "",
    color: e.loadingColor,
    type: e.loadingType,
    size: e.loadingSize,
    radius: e.loadingRadius
  }, null, 8, ["class", "color", "type", "size", "radius"])) : Ee("v-if", !0), ne("div", {
    class: H(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
  }, [xe(e.$slots, "default")], 2)], 46, J1)), [[n, {
    disabled: e.disabled || !e.ripple
  }]]);
}
var Bf = Fe({
  name: "VarButton",
  components: {
    VarLoading: an
  },
  directives: {
    Ripple: Kr
  },
  props: X1,
  setup(e) {
    var t = Y(!1),
      r = a => {
        e.autoLoading && (t.value = !0, a = Zt(a) ? a : [a], Promise.all(a).then(() => {
          t.value = !1;
        }).catch(() => {
          t.value = !1;
        }));
      },
      n = a => {
        var {
          loading: i,
          disabled: s,
          onClick: u
        } = e;
        !u || i || s || t.value || r(te(u, a));
      },
      o = a => {
        var {
          loading: i,
          disabled: s,
          onTouchstart: u
        } = e;
        !u || i || s || t.value || r(te(u, a));
      };
    return {
      n: Q1,
      classes: Z1,
      pending: t,
      handleClick: n,
      handleTouchstart: o
    };
  }
});
Bf.render = ex;
const Mr = Bf;
Mr.install = function (e) {
  e.component(Mr.name, Mr);
};
var tx = Mr;
function rx(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function nx(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var ox = {
    type: {
      type: String,
      default: "default",
      validator: rx
    },
    hidden: {
      type: Boolean,
      default: !1
    },
    dot: {
      type: Boolean,
      default: !1
    },
    value: {
      type: [String, Number],
      default: 0
    },
    maxValue: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    position: {
      type: String,
      default: "right-top",
      validator: nx
    },
    icon: {
      type: String
    }
  },
  {
    n: ir,
    classes: ax
  } = Pe("badge"),
  ix = {
    key: 1
  };
function sx(e, t) {
  var r = Ve("var-icon");
  return q(), re("div", {
    class: H(e.classes(e.n(), e.n("$--box")))
  }, [Q(it, {
    name: e.n("$-badge-fade")
  }, {
    default: he(() => [Ze(ne("span", Ft(e.$attrs, {
      class: e.classes(e.n("content"), ...e.contentClass),
      style: {
        background: e.color
      }
    }), [e.icon && !e.dot ? (q(), ze(r, {
      key: 0,
      name: e.icon,
      size: "10px"
    }, null, 8, ["name"])) : (q(), re("span", ix, De(e.values), 1))], 16), [[Nt, !e.hidden]])]),
    _: 1
  }, 8, ["name"]), xe(e.$slots, "default")], 2);
}
var Af = Fe({
  name: "VarBadge",
  components: {
    VarIcon: Bt
  },
  inheritAttrs: !1,
  props: ox,
  setup(e, t) {
    var {
        slots: r
      } = t,
      n = pe(() => {
        var {
            type: i,
            position: s,
            dot: u,
            icon: l
          } = e,
          c = r.default && ir("position") + " " + ir("--" + s),
          d = u ? ir("dot") : null,
          f = a(),
          p = l ? ir("icon") : null;
        return [ir("--" + i), c, d, f, p];
      }),
      o = pe(() => {
        var {
          dot: i,
          value: s,
          maxValue: u
        } = e;
        return i ? "" : s !== void 0 && u !== void 0 && Et(s) > u ? u + "+" : s;
      }),
      a = () => {
        var {
          position: i,
          dot: s
        } = e;
        if (s && i.includes("right")) return ir("dot--right");
        if (s && i.includes("left")) return ir("dot--left");
      };
    return {
      n: ir,
      classes: ax,
      values: o,
      contentClass: n
    };
  }
});
Af.render = sx;
const Ao = Af;
Ao.install = function (e) {
  e.component(Ao.name, Ao);
};
var lx = {
    active: {
      type: [Number, String],
      default: 0
    },
    fixed: {
      type: Boolean,
      default: !1
    },
    border: {
      type: Boolean,
      default: !1
    },
    safeArea: {
      type: Boolean,
      default: !1
    },
    zIndex: {
      type: [Number, String],
      default: 1
    },
    activeColor: {
      type: String
    },
    inactiveColor: {
      type: String
    },
    onChange: ce(),
    "onUpdate:active": ce(),
    onBeforeChange: ce(),
    onFabClick: ce(),
    fabProps: {
      type: Object
    }
  },
  wf = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"),
  Ff = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function ux() {
  var {
      childProviders: e,
      bindChildren: t
    } = si(wf),
    {
      length: r
    } = rl(Ff);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: t
  };
}
function cs() {
  return cs = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cs.apply(this, arguments);
}
var {
    n: cx,
    classes: fx
  } = Pe("bottom-navigation"),
  {
    n: ci
  } = Pe("bottom-navigation-item"),
  C0 = ci("--right-half-space"),
  E0 = ci("--left-half-space"),
  B0 = ci("--right-space"),
  dx = {
    type: "primary"
  };
function px(e, t) {
  var r = Ve("var-button");
  return q(), re("div", {
    class: H(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
    ref: "bottomNavigationDom",
    style: ve("z-index:" + e.zIndex)
  }, [xe(e.$slots, "default"), e.$slots.fab ? (q(), ze(r, Ft({
    key: 0,
    class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
    "var-bottom-navigation__fab": "",
    onClick: e.handleFabClick
  }, e.fabProps, {
    round: ""
  }), {
    default: he(() => [xe(e.$slots, "fab")]),
    _: 3
  }, 16, ["class", "onClick"])) : Ee("v-if", !0)], 6);
}
var Sf = Fe({
  name: "VarBottomNavigation",
  components: {
    VarButton: Mr
  },
  props: lx,
  setup(e, t) {
    var {
        slots: r
      } = t,
      n = Y(null),
      o = pe(() => e.active),
      a = pe(() => e.activeColor),
      i = pe(() => e.inactiveColor),
      s = Y({}),
      {
        length: u,
        bottomNavigationItems: l,
        bindBottomNavigationItem: c
      } = ux(),
      d = () => {
        u.value === 0 || f() || p() || v();
      },
      f = () => l.find(F => {
        var {
          name: O
        } = F;
        return o.value === O.value;
      }),
      p = () => l.find(F => {
        var {
          index: O
        } = F;
        return o.value === O.value;
      }),
      v = () => {
        qr(o.value) && (o.value < 0 ? te(e["onUpdate:active"], 0) : o.value > u.value - 1 && te(e["onUpdate:active"], u.value - 1));
      },
      h = F => {
        o.value !== F && (e.onBeforeChange ? g(F) : b(F));
      },
      g = F => {
        var O = te(e.onBeforeChange, F);
        O = Zt(O) ? O : [O], Promise.all(O).then(B => {
          B.some(A => !A) || b(F);
        });
      },
      b = F => {
        te(e["onUpdate:active"], F), te(e.onChange, F);
      },
      m = () => {
        var F = w();
        F.forEach(O => {
          O.classList.remove(C0, E0, B0);
        });
      },
      x = F => {
        var O = w(),
          B = O.length,
          A = F % 2 === 0;
        O.forEach((D, k) => {
          y(A, D, k, B);
        });
      },
      y = (F, O, B, A) => {
        var D = B === A - 1;
        if (!F && D) {
          O.classList.add(B0);
          return;
        }
        var k = B === A / 2 - 1,
          X = B === A / 2;
        k ? O.classList.add(C0) : X && O.classList.add(E0);
      },
      w = () => Array.from(n.value.querySelectorAll("." + ci())),
      C = () => {
        te(e.onFabClick);
      },
      _ = {
        active: o,
        activeColor: a,
        inactiveColor: i,
        onToggle: h
      };
    return c(_), Se(() => u.value, d), Se(() => e.fabProps, F => {
      s.value = cs({}, dx, F);
    }, {
      immediate: !0,
      deep: !0
    }), xt(() => {
      r.fab && x(u.value);
    }), to(() => {
      m(), r.fab && x(u.value);
    }), {
      n: cx,
      classes: fx,
      length: u,
      bottomNavigationDom: n,
      handleFabClick: C,
      fabProps: s
    };
  }
});
Sf.render = px;
const wo = Sf;
wo.install = function (e) {
  e.component(wo.name, wo);
};
var vx = wo,
  hx = {
    name: {
      type: String
    },
    icon: {
      type: String
    },
    label: {
      type: String
    },
    namespace: {
      type: String,
      default: "var-icon"
    },
    badge: {
      type: [Boolean, Object],
      default: !1
    },
    onClick: ce()
  };
function xx() {
  var {
      parentProvider: e,
      bindParent: t
    } = ro(wf),
    {
      index: r
    } = ii(Ff);
  if (!e || !t || !r) throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: t
  };
}
var {
    n: mx,
    classes: gx
  } = Pe("bottom-navigation-item"),
  yx = {
    type: "danger",
    dot: !0
  };
function bx(e, t) {
  var r = Ve("var-icon"),
    n = Ve("var-badge"),
    o = Cr("ripple");
  return Ze((q(), re("button", {
    class: H(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
    style: ve({
      color: e.computeColorStyle()
    }),
    onClick: t[0] || (t[0] = function () {
      return e.handleClick && e.handleClick(...arguments);
    })
  }, [e.icon && !e.$slots.icon ? (q(), ze(r, {
    key: 0,
    name: e.icon,
    namespace: e.namespace,
    class: H(e.n("icon")),
    "var-bottom-navigation-item-cover": ""
  }, null, 8, ["name", "namespace", "class"])) : Ee("v-if", !0), xe(e.$slots, "icon", {
    active: e.active === e.index || e.active === e.name
  }), e.badge ? (q(), ze(n, Ft({
    key: 1
  }, e.badgeProps, {
    class: e.n("badge"),
    "var-bottom-navigation-item-cover": ""
  }), null, 16, ["class"])) : Ee("v-if", !0), ne("span", {
    class: H(e.n("label"))
  }, [e.$slots.default ? Ee("v-if", !0) : (q(), re(Ue, {
    key: 0
  }, [Le(De(e.label), 1)], 2112)), xe(e.$slots, "default")], 2)], 6)), [[o]]);
}
var Df = Fe({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: Ao,
    VarIcon: Bt
  },
  directives: {
    Ripple: Kr
  },
  props: hx,
  setup(e) {
    var t = pe(() => e.name),
      r = pe(() => e.badge),
      n = Y({}),
      {
        index: o,
        bottomNavigation: a,
        bindBottomNavigation: i
      } = xx(),
      {
        active: s,
        activeColor: u,
        inactiveColor: l
      } = a,
      c = {
        name: t,
        index: o
      },
      d = () => s.value === t.value || s.value === o.value ? u.value : l.value,
      f = () => {
        var p,
          v = (p = t.value) != null ? p : o.value;
        te(e.onClick, v), te(a.onToggle, v);
      };
    return i(c), Se(() => r.value, p => {
      n.value = p === !0 ? yx : r.value;
    }, {
      immediate: !0
    }), {
      n: mx,
      classes: gx,
      index: o,
      active: s,
      badge: r,
      badgeProps: n,
      computeColorStyle: d,
      handleClick: f
    };
  }
});
Df.render = bx;
const Fo = Df;
Fo.install = function (e) {
  e.component(Fo.name, Fo);
};
var Cx = Fo;
function Ex(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Bx = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Ex,
    default: "cover"
  },
  imageHeight: {
    type: [String, Number]
  },
  imageWidth: {
    type: [String, Number]
  },
  outline: {
    type: Boolean,
    default: !1
  },
  layout: {
    type: String,
    default: "column"
  },
  floating: {
    type: Boolean,
    default: !1
  },
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  description: {
    type: String
  },
  elevation: {
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: ce(),
  "onUpdate:floating": ce()
};
function A0(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i),
      u = s.value;
  } catch (l) {
    r(l);
    return;
  }
  s.done ? t(u) : Promise.resolve(u).then(n, o);
}
function w0(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(t, r);
      function i(u) {
        A0(a, n, o, i, s, "next", u);
      }
      function s(u) {
        A0(a, n, o, i, s, "throw", u);
      }
      i(void 0);
    });
  };
}
var {
    n: Ax,
    classes: wx
  } = Pe("card"),
  Fx = 500,
  Sx = ["src", "alt"];
function Dx(e, t) {
  var r = Ve("var-icon"),
    n = Ve("var-button"),
    o = Cr("ripple");
  return Ze((q(), re("div", {
    ref: "card",
    class: H(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
    style: ve({
      zIndex: e.floated ? e.zIndex : void 0
    }),
    onClick: t[0] || (t[0] = function () {
      return e.onClick && e.onClick(...arguments);
    })
  }, [ne("div", {
    ref: "cardFloater",
    class: H(e.n("floater")),
    style: ve({
      width: e.floaterWidth,
      height: e.floaterHeight,
      top: e.floaterTop,
      left: e.floaterLeft,
      overflow: e.floaterOverflow,
      position: e.floaterPosition,
      transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
    })
  }, [xe(e.$slots, "image", {}, () => [e.src ? (q(), re("img", {
    key: 0,
    class: H(e.n("image")),
    style: ve({
      objectFit: e.fit,
      height: e.toSizeUnit(e.imageHeight),
      width: e.toSizeUnit(e.imageWidth)
    }),
    src: e.src,
    alt: e.alt
  }, null, 14, Sx)) : Ee("v-if", !0)]), ne("div", {
    class: H(e.n("container"))
  }, [xe(e.$slots, "title", {}, () => [e.title ? (q(), re("div", {
    key: 0,
    class: H(e.n("title"))
  }, De(e.title), 3)) : Ee("v-if", !0)]), xe(e.$slots, "subtitle", {}, () => [e.subtitle ? (q(), re("div", {
    key: 0,
    class: H(e.n("subtitle"))
  }, De(e.subtitle), 3)) : Ee("v-if", !0)]), xe(e.$slots, "description", {}, () => [e.description ? (q(), re("div", {
    key: 0,
    class: H(e.n("description"))
  }, De(e.description), 3)) : Ee("v-if", !0)]), e.$slots.extra ? (q(), re("div", {
    key: 0,
    class: H(e.n("footer"))
  }, [xe(e.$slots, "extra")], 2)) : Ee("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (q(), re("div", {
    key: 1,
    class: H(e.n("floating-content")),
    style: ve({
      height: e.contentHeight,
      opacity: e.opacity,
      transition: "opacity " + e.floatingDuration * 2 + "ms"
    })
  }, [xe(e.$slots, "floating-content")], 6)) : Ee("v-if", !0)], 2), e.showFloatingButtons ? (q(), re("div", {
    key: 0,
    class: H(e.classes(e.n("floating-buttons"), e.n("$--box"))),
    style: ve({
      zIndex: e.zIndex,
      opacity: e.opacity,
      transition: "opacity " + e.floatingDuration * 2 + "ms"
    })
  }, [xe(e.$slots, "close-button", {}, () => [Q(n, {
    "var-card-cover": "",
    round: "",
    class: H(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
    onClick: oi(e.close, ["stop"])
  }, {
    default: he(() => [Q(r, {
      "var-card-cover": "",
      name: "window-close",
      class: H(e.n("close-button-icon"))
    }, null, 8, ["class"])]),
    _: 1
  }, 8, ["class", "onClick"])])], 6)) : Ee("v-if", !0)], 6), ne("div", {
    class: H(e.n("holder")),
    style: ve({
      width: e.holderWidth,
      height: e.holderHeight
    })
  }, null, 6)], 6)), [[o, {
    disabled: !e.ripple || e.floater
  }]]);
}
var _f = Fe({
  name: "VarCard",
  directives: {
    Ripple: Kr
  },
  components: {
    VarIcon: Bt,
    VarButton: Mr
  },
  props: Bx,
  setup(e) {
    var t = Y(null),
      r = Y(null),
      n = Y("auto"),
      o = Y("auto"),
      a = Y("100%"),
      i = Y("100%"),
      s = Y("auto"),
      u = Y("auto"),
      l = Y(void 0),
      c = Y("hidden"),
      d = Y("0px"),
      f = Y("0"),
      p = pe(() => e.layout === "row"),
      v = Y(!1),
      h = Y(!1),
      {
        zIndex: g
      } = no(() => e.floating, 1);
    ui(() => e.floating, () => !p.value);
    var b = "auto",
      m = "auto",
      x = null,
      y = Y(null),
      w = function () {
        var F = w0(function* () {
          clearTimeout(y.value), clearTimeout(x), y.value = null, y.value = setTimeout(w0(function* () {
            var {
              width: O,
              height: B,
              left: A,
              top: D
            } = t.value.getBoundingClientRect();
            n.value = Ge(O), o.value = Ge(B), a.value = n.value, i.value = o.value, s.value = Ge(D), u.value = Ge(A), l.value = "fixed", b = s.value, m = u.value, v.value = !0, yield dn(), s.value = "0", u.value = "0", a.value = "100vw", i.value = "100vh", d.value = "auto", f.value = "1", c.value = "auto", h.value = !0;
          }), e.ripple ? Fx : 0);
        });
        return function () {
          return F.apply(this, arguments);
        };
      }(),
      C = () => {
        clearTimeout(x), clearTimeout(y.value), y.value = null, a.value = n.value, i.value = o.value, s.value = b, u.value = m, d.value = "0px", f.value = "0", v.value = !1, x = setTimeout(() => {
          n.value = "auto", o.value = "auto", a.value = "100%", i.value = "100%", s.value = "auto", u.value = "auto", b = "auto", m = "auto", c.value = "hidden", l.value = void 0, h.value = !1;
        }, e.floatingDuration);
      },
      _ = () => {
        te(e["onUpdate:floating"], !1);
      };
    return Se(() => e.floating, F => {
      p.value || Rt(() => {
        F ? w() : C();
      });
    }, {
      immediate: !0
    }), {
      n: Ax,
      classes: wx,
      toSizeUnit: Ge,
      card: t,
      cardFloater: r,
      holderWidth: n,
      holderHeight: o,
      floater: y,
      floaterWidth: a,
      floaterHeight: i,
      floaterTop: s,
      floaterLeft: u,
      floaterPosition: l,
      floaterOverflow: c,
      contentHeight: d,
      opacity: f,
      zIndex: g,
      isRow: p,
      close: _,
      showFloatingButtons: v,
      floated: h
    };
  }
});
_f.render = Dx;
const So = _f;
So.install = function (e) {
  e.component(So.name, So);
};
var _x = So,
  kx = {
    errorMessage: {
      type: String,
      default: ""
    },
    extraMessage: {
      type: String,
      default: ""
    }
  },
  {
    n: Ox
  } = Pe("form-details"),
  Tx = {
    key: 0
  },
  Rx = {
    key: 0
  };
function Px(e, t) {
  return q(), ze(it, {
    name: e.n()
  }, {
    default: he(() => [e.errorMessage || e.extraMessage ? (q(), re("div", {
      key: 0,
      class: H(e.n())
    }, [ne("div", {
      class: H(e.n("error-message"))
    }, [Q(it, {
      name: e.n("message")
    }, {
      default: he(() => [e.errorMessage ? (q(), re("div", Tx, De(e.errorMessage), 1)) : Ee("v-if", !0)]),
      _: 1
    }, 8, ["name"])], 2), ne("div", {
      class: H(e.n("extra-message"))
    }, [Q(it, {
      name: e.n("message")
    }, {
      default: he(() => [e.extraMessage ? (q(), re("div", Rx, De(e.extraMessage), 1)) : Ee("v-if", !0)]),
      _: 1
    }, 8, ["name"])], 2)], 2)) : Ee("v-if", !0)]),
    _: 1
  }, 8, ["name"]);
}
var kf = Fe({
  name: "VarFormDetails",
  props: kx,
  setup: () => ({
    n: Ox
  })
});
kf.render = Px;
const sn = kf;
sn.install = function (e) {
  e.component(sn.name, sn);
};
var $x = {
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: !1
    },
    checkedValue: {
      type: [String, Number, Boolean, Object, Array],
      default: !0
    },
    uncheckedValue: {
      type: [String, Number, Boolean, Object, Array],
      default: !1
    },
    checkedColor: {
      type: String
    },
    uncheckedColor: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    iconSize: {
      type: [String, Number]
    },
    ripple: {
      type: Boolean,
      default: !0
    },
    validateTrigger: {
      type: Array,
      default: ["onChange"]
    },
    rules: {
      type: Array
    },
    onClick: ce(),
    onChange: ce(),
    "onUpdate:modelValue": ce()
  },
  Lx = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"),
  Ix = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function Nx() {
  var {
      bindParent: e,
      parentProvider: t
    } = ro(Lx),
    {
      index: r
    } = ii(Ix);
  return {
    index: r,
    checkboxGroup: t,
    bindCheckboxGroup: e
  };
}
function fs() {
  return fs = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fs.apply(this, arguments);
}
var Of = Symbol("FORM_BIND_FORM_ITEM_KEY");
function fi() {
  var {
      bindParent: e,
      parentProvider: t
    } = ro(Of),
    r = Sr(),
    n = e ? o => {
      e(fs({}, o, {
        instance: r
      }));
    } : null;
  return {
    bindForm: n,
    form: t
  };
}
function zx() {
  var {
    bindChildren: e,
    childProviders: t
  } = si(Of);
  return {
    formItems: t,
    bindFormItems: e
  };
}
var {
  n: Hx,
  classes: Mx
} = Pe("checkbox");
function Ux(e, t) {
  var r = Ve("var-icon"),
    n = Ve("var-form-details"),
    o = Cr("ripple");
  return q(), re("div", {
    class: H(e.n("wrap")),
    onClick: t[0] || (t[0] = function () {
      return e.handleClick && e.handleClick(...arguments);
    })
  }, [ne("div", {
    class: H(e.n())
  }, [Ze((q(), re("div", {
    class: H(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: ve({
      color: e.checked ? e.checkedColor : e.uncheckedColor
    })
  }, [e.checked ? xe(e.$slots, "checked-icon", {
    key: 0
  }, () => [Q(r, {
    class: H(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
    name: "checkbox-marked",
    size: e.iconSize,
    "var-checkbox-cover": ""
  }, null, 8, ["class", "size"])]) : xe(e.$slots, "unchecked-icon", {
    key: 1
  }, () => [Q(r, {
    class: H(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
    name: "checkbox-blank-outline",
    size: e.iconSize,
    "var-checkbox-cover": ""
  }, null, 8, ["class", "size"])])], 6)), [[o, {
    disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
  }]]), ne("div", {
    class: H(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
  }, [xe(e.$slots, "default")], 2)], 2), Q(n, {
    "error-message": e.errorMessage
  }, null, 8, ["error-message"])], 2);
}
var Tf = Fe({
  name: "VarCheckbox",
  directives: {
    Ripple: Kr
  },
  components: {
    VarIcon: Bt,
    VarFormDetails: sn
  },
  props: $x,
  setup(e) {
    var t = Y(!1),
      r = pe(() => t.value === e.checkedValue),
      n = pe(() => e.checkedValue),
      o = Y(!1),
      {
        checkboxGroup: a,
        bindCheckboxGroup: i
      } = Nx(),
      {
        form: s,
        bindForm: u
      } = fi(),
      {
        errorMessage: l,
        validateWithTrigger: c,
        validate: d,
        resetValidation: f
      } = li(),
      p = C => {
        Rt(() => {
          var {
            validateTrigger: _,
            rules: F,
            modelValue: O
          } = e;
          c(_, C, F, O);
        });
      },
      v = C => {
        t.value = C;
        var {
          checkedValue: _,
          onChange: F
        } = e;
        te(e["onUpdate:modelValue"], t.value), te(F, t.value), p("onChange"), C === _ ? a == null || a.onChecked(_) : a == null || a.onUnchecked(_);
      },
      h = C => {
        var {
          disabled: _,
          readonly: F,
          checkedValue: O,
          uncheckedValue: B,
          onClick: A
        } = e;
        if (!(s != null && s.disabled.value || _) && (te(A, C), !(s != null && s.readonly.value || F))) {
          o.value = !0;
          var D = a ? a.checkedCount.value >= Number(a.max.value) : !1;
          !r.value && D || v(r.value ? B : O);
        }
      },
      g = C => {
        var {
          checkedValue: _,
          uncheckedValue: F
        } = e;
        t.value = C.includes(_) ? _ : F;
      },
      b = () => {
        o.value = !1;
      },
      m = () => {
        te(e["onUpdate:modelValue"], e.uncheckedValue), f();
      },
      x = C => {
        var {
            checkedValue: _,
            uncheckedValue: F
          } = e,
          O = ![_, F].includes(C);
        O && (C = r.value ? F : _), v(C);
      },
      y = () => d(e.rules, e.modelValue);
    Se(() => e.modelValue, C => {
      t.value = C;
    }, {
      immediate: !0
    });
    var w = {
      checkedValue: n,
      checked: r,
      sync: g,
      validate: y,
      resetValidation: f,
      reset: m,
      resetWithAnimation: b
    };
    return te(i, w), te(u, w), {
      withAnimation: o,
      checked: r,
      errorMessage: l,
      checkboxGroupErrorMessage: a == null ? void 0 : a.errorMessage,
      formDisabled: s == null ? void 0 : s.disabled,
      formReadonly: s == null ? void 0 : s.readonly,
      n: Hx,
      classes: Mx,
      handleClick: h,
      toggle: x,
      reset: m,
      validate: y,
      resetValidation: f
    };
  }
});
Tf.render = Ux;
const Do = Tf;
Do.install = function (e) {
  e.component(Do.name, Do);
};
function Vx(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function jx(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Wx = {
    type: {
      type: String,
      default: "default",
      validator: Vx
    },
    size: {
      type: String,
      default: "normal",
      validator: jx
    },
    color: {
      type: String
    },
    textColor: {
      type: String
    },
    iconName: bt(yf, "name"),
    plain: {
      type: Boolean,
      default: !1
    },
    round: {
      type: Boolean,
      default: !0
    },
    block: {
      type: Boolean,
      default: !1
    },
    closable: {
      type: Boolean,
      default: !1
    },
    onClose: ce()
  },
  {
    n: sr,
    classes: qx
  } = Pe("chip");
function Kx(e, t) {
  var r = Ve("var-icon");
  return q(), ze(it, {
    name: e.n("$-fade")
  }, {
    default: he(() => [ne("span", Ft({
      class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
      style: e.chipStyles
    }, e.$attrs), [xe(e.$slots, "left"), ne("span", {
      class: H(e.n("text-" + e.size))
    }, [xe(e.$slots, "default")], 2), xe(e.$slots, "right"), e.closable ? (q(), re("span", {
      key: 0,
      class: H(e.n("--close")),
      onClick: t[0] || (t[0] = function () {
        return e.onClose && e.onClose(...arguments);
      })
    }, [Q(r, {
      name: "" + (e.iconName ? e.iconName : "close-circle")
    }, null, 8, ["name"])], 2)) : Ee("v-if", !0)], 16)]),
    _: 3
  }, 8, ["name"]);
}
var Rf = Fe({
  name: "VarChip",
  components: {
    VarIcon: Bt
  },
  inheritAttrs: !1,
  props: Wx,
  setup(e) {
    var t = pe(() => {
        var {
          plain: n,
          textColor: o,
          color: a
        } = e;
        return n ? {
          color: o || a,
          borderColor: a
        } : {
          color: o,
          background: a
        };
      }),
      r = pe(() => {
        var {
            size: n,
            block: o,
            type: a,
            plain: i,
            round: s
          } = e,
          u = sr(o ? "$--flex" : "$--inline-flex"),
          l = i ? sr("plain") + " " + sr("plain-" + a) : sr("--" + a),
          c = s ? sr("--round") : null;
        return [sr("--" + n), u, l, c];
      });
    return {
      n: sr,
      classes: qx,
      chipStyles: t,
      contentClass: r
    };
  }
});
Rf.render = Kx;
const In = Rf;
In.install = function (e) {
  e.component(In.name, In);
};
var Gx = In;
function ds() {
  return ds = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ds.apply(this, arguments);
}
function Yx(e) {
  return ["left", "center", "right"].includes(e);
}
var Xx = ds({
  show: {
    type: Boolean,
    default: !1
  },
  width: {
    type: [Number, String]
  },
  title: {
    type: String
  },
  message: {
    type: String
  },
  messageAlign: {
    type: String,
    default: "left",
    validator: Yx
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  confirmButtonColor: {
    type: String
  },
  cancelButtonColor: {
    type: String
  },
  dialogClass: {
    type: String
  },
  dialogStyle: {
    type: Object
  },
  onBeforeClose: ce(),
  onConfirm: ce(),
  onCancel: ce(),
  "onUpdate:show": ce()
}, bt(mf, ["overlay", "overlayClass", "overlayStyle", "lockScroll", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"]));
function ps() {
  return ps = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ps.apply(this, arguments);
}
var {
  n: Qx,
  classes: Zx
} = Pe("dialog");
function Jx(e, t) {
  var r = Ve("var-button"),
    n = Ve("var-popup");
  return q(), ze(n, {
    class: H(e.n("popup")),
    "var-dialog-cover": "",
    show: e.popupShow,
    overlay: e.overlay,
    "overlay-class": e.overlayClass,
    "overlay-style": e.overlayStyle,
    "lock-scroll": e.lockScroll,
    "close-on-click-overlay": e.popupCloseOnClickOverlay,
    teleport: e.teleport,
    onOpen: e.onOpen,
    onClose: e.onClose,
    onClosed: e.onClosed,
    onOpened: e.onOpened,
    onRouteChange: e.onRouteChange,
    onClickOverlay: e.handleClickOverlay
  }, {
    default: he(() => [ne("div", Ft({
      class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
      style: ps({
        width: e.toSizeUnit(e.width)
      }, e.dialogStyle)
    }, e.$attrs), [ne("div", {
      class: H(e.n("title"))
    }, [xe(e.$slots, "title", {}, () => [Le(De(e.dt(e.title, e.pack.dialogTitle)), 1)])], 2), ne("div", {
      class: H(e.n("message")),
      style: ve({
        textAlign: e.messageAlign
      })
    }, [xe(e.$slots, "default", {}, () => [Le(De(e.message), 1)])], 6), ne("div", {
      class: H(e.n("actions"))
    }, [e.cancelButton ? (q(), ze(r, {
      key: 0,
      class: H(e.classes(e.n("button"), e.n("cancel-button"))),
      "var-dialog-cover": "",
      text: "",
      "text-color": e.cancelButtonTextColor,
      color: e.cancelButtonColor,
      onClick: e.cancel
    }, {
      default: he(() => [Le(De(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)), 1)]),
      _: 1
    }, 8, ["class", "text-color", "color", "onClick"])) : Ee("v-if", !0), e.confirmButton ? (q(), ze(r, {
      key: 1,
      class: H(e.classes(e.n("button"), e.n("confirm-button"))),
      "var-dialog-cover": "",
      text: "",
      "text-color": e.confirmButtonTextColor,
      color: e.confirmButtonColor,
      onClick: e.confirm
    }, {
      default: he(() => [Le(De(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)), 1)]),
      _: 1
    }, 8, ["class", "text-color", "color", "onClick"])) : Ee("v-if", !0)], 2)], 16)]),
    _: 3
  }, 8, ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]);
}
var Pf = Fe({
  name: "VarDialog",
  components: {
    VarPopup: Eo,
    VarButton: Mr
  },
  inheritAttrs: !1,
  props: Xx,
  setup(e) {
    var t = Y(!1),
      r = Y(!1),
      n = () => te(e["onUpdate:show"], !1),
      o = () => {
        var {
          closeOnClickOverlay: s,
          onClickOverlay: u,
          onBeforeClose: l
        } = e;
        if (te(u), !!s) {
          if (l != null) {
            l("close", n);
            return;
          }
          te(e["onUpdate:show"], !1);
        }
      },
      a = () => {
        var {
          onBeforeClose: s,
          onConfirm: u
        } = e;
        if (te(u), s != null) {
          s("confirm", n);
          return;
        }
        te(e["onUpdate:show"], !1);
      },
      i = () => {
        var {
          onBeforeClose: s,
          onCancel: u
        } = e;
        if (te(u), s != null) {
          s("cancel", n);
          return;
        }
        te(e["onUpdate:show"], !1);
      };
    return Se(() => e.show, s => {
      t.value = s;
    }, {
      immediate: !0
    }), Se(() => e.closeOnClickOverlay, s => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = s;
    }, {
      immediate: !0
    }), {
      n: Qx,
      classes: Zx,
      pack: _1,
      dt: Yh,
      popupShow: t,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: o,
      confirm: a,
      cancel: i,
      toSizeUnit: Ge
    };
  }
});
Pf.render = Jx;
const mr = Pf;
var pr;
function di(e) {
  return qh() ? new Promise(t => {
    di.close();
    var r = St(e) || qr(e) ? {
        message: String(e)
      } : e,
      n = ht(r);
    n.teleport = "body", pr = n;
    var {
      unmountInstance: o
    } = df(mr, n, {
      onConfirm: () => {
        te(n.onConfirm), t("confirm");
      },
      onCancel: () => {
        te(n.onCancel), t("cancel");
      },
      onClose: () => {
        te(n.onClose), t("close");
      },
      onClosed: () => {
        te(n.onClosed), o(), pr === n && (pr = null);
      },
      onRouteChange: () => {
        o(), pr === n && (pr = null);
      },
      "onUpdate:show": a => {
        n.show = a;
      }
    });
    n.show = !0;
  }) : Promise.resolve();
}
mr.install = function (e) {
  e.component(mr.name, mr);
};
di.install = function (e) {
  e.component(mr.name, mr);
};
di.close = () => {
  if (pr != null) {
    var e = pr;
    pr = null, Rt().then(() => {
      e.show = !1;
    });
  }
};
di.Component = mr;
var em = mr,
  tm = {
    inset: {
      type: [Boolean, Number, String],
      default: !1
    },
    vertical: {
      type: Boolean,
      default: !1
    },
    description: {
      type: String
    },
    margin: {
      type: String
    },
    dashed: {
      type: Boolean,
      default: !1
    },
    hairline: {
      type: Boolean,
      default: !1
    }
  };
function Jr() {
  return Jr = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jr.apply(this, arguments);
}
var {
  n: rm,
  classes: nm
} = Pe("divider");
function om(e, t) {
  return q(), re("div", {
    class: H(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
    style: ve(e.style)
  }, [xe(e.$slots, "default", {}, () => [e.description ? (q(), re("span", {
    key: 0,
    class: H(e.n("text"))
  }, De(e.description), 3)) : Ee("v-if", !0)])], 6);
}
var $f = Fe({
  name: "VarDivider",
  props: tm,
  setup(e, t) {
    var {
        slots: r
      } = t,
      n = ht({
        withText: !1
      }),
      o = pe(() => rs(e.inset) ? e.inset : !0),
      a = pe(() => {
        var {
            inset: s,
            vertical: u,
            margin: l
          } = e,
          c = {
            margin: l
          };
        if (rs(s) || s === 0) return Jr({}, c);
        var d = Et(s),
          f = Math.abs(d) + (s + "").replace(d + "", "");
        return u ? Jr({}, c, {
          height: "calc(80% - " + Ge(f) + ")"
        }) : Jr({}, c, {
          width: "calc(100% - " + Ge(f) + ")",
          left: d > 0 ? Ge(f) : Ge(0)
        });
      }),
      i = () => {
        n.withText = Boolean(r.default) || Boolean(e.description);
      };
    return xt(() => {
      i();
    }), to(() => {
      i();
    }), Jr({
      n: rm,
      classes: nm
    }, ov(n), {
      style: a,
      isInset: o
    });
  }
});
$f.render = om;
const _o = $f;
_o.install = function (e) {
  e.component(_o.name, _o);
};
var am = _o;
function im(e) {
  return ["start", "end"].includes(e);
}
var sm = {
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  scrollToError: {
    type: String,
    validator: im
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function F0(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i),
      u = s.value;
  } catch (l) {
    r(l);
    return;
  }
  s.done ? t(u) : Promise.resolve(u).then(n, o);
}
function lm(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(t, r);
      function i(u) {
        F0(a, n, o, i, s, "next", u);
      }
      function s(u) {
        F0(a, n, o, i, s, "throw", u);
      }
      i(void 0);
    });
  };
}
var {
  n: um
} = Pe("form");
function cm(e, t) {
  return q(), re("div", {
    class: H(e.n())
  }, [xe(e.$slots, "default")], 2);
}
var Lf = Fe({
  name: "VarForm",
  props: sm,
  setup(e) {
    var t = pe(() => e.disabled),
      r = pe(() => e.readonly),
      {
        formItems: n,
        bindFormItems: o
      } = zx(),
      a = (c, d) => {
        setTimeout(() => {
          var f = tl(d),
            p = f === window ? 0 : x0(f),
            v = x0(d) - p - zt(e.scrollToErrorOffsetY);
          as(f, {
            top: v,
            animation: ns
          });
        }, 300);
      },
      i = function () {
        var c = lm(function* () {
          var d = yield Promise.all(n.map(g => {
            var {
              validate: b
            } = g;
            return b();
          }));
          if (e.scrollToError) {
            var [, f] = Kh(d, g => g === !1, e.scrollToError),
              p = f > -1;
            if (p) {
              var v,
                h = (v = n[f].instance.proxy) == null ? void 0 : v.$el;
              a(f, h);
            }
            return !p;
          }
          return d.every(g => g === !0);
        });
        return function () {
          return c.apply(this, arguments);
        };
      }(),
      s = () => n.forEach(c => {
        var {
          reset: d
        } = c;
        return d();
      }),
      u = () => n.forEach(c => {
        var {
          resetValidation: d
        } = c;
        return d();
      }),
      l = {
        disabled: t,
        readonly: r
      };
    return o(l), {
      n: um,
      validate: i,
      reset: s,
      resetValidation: u
    };
  }
});
Lf.render = cm;
const ln = Lf;
ln.install = function (e) {
  e.component(ln.name, ln);
};
ln.useValidation = li;
ln.useForm = fi;
var fm = ln;
function S0(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i),
      u = s.value;
  } catch (l) {
    r(l);
    return;
  }
  s.done ? t(u) : Promise.resolve(u).then(n, o);
}
function pi(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(t, r);
      function i(u) {
        S0(a, n, o, i, s, "next", u);
      }
      function s(u) {
        S0(a, n, o, i, s, "throw", u);
      }
      i(void 0);
    });
  };
}
function vs() {
  return vs = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vs.apply(this, arguments);
}
var dm = "background-image",
  pm = "lazy-loading",
  vm = "lazy-error",
  D0 = "lazy-attempt",
  hm = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"],
  hs = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
  pn = [],
  ta = [],
  If = Gh(100),
  Xe = {
    loading: hs,
    error: hs,
    attempt: 3,
    throttleWait: 300,
    events: hm
  },
  ol = lf(oo, Xe.throttleWait);
function vi(e, t) {
  e._lazy.arg === dm ? e.style.backgroundImage = "url(" + t + ")" : e.setAttribute("src", t);
}
function xm(e) {
  e._lazy.loading && vi(e, e._lazy.loading), oo();
}
function mm(e) {
  e._lazy.error && vi(e, e._lazy.error), e._lazy.state = "error", il(e), oo();
}
function Nf(e, t) {
  vi(e, t), e._lazy.state = "success", il(e), oo();
}
function gm(e) {
  var t;
  ta.includes(e) || (ta.push(e), (t = Xe.events) == null || t.forEach(r => {
    e.addEventListener(r, ol, {
      passive: !0
    });
  }));
}
function ym() {
  ta.forEach(e => {
    var t;
    (t = Xe.events) == null || t.forEach(r => {
      e.removeEventListener(r, ol);
    });
  }), ta.length = 0;
}
function bm(e, t) {
  var r,
    n,
    o = {
      loading: (r = e.getAttribute(pm)) != null ? r : Xe.loading,
      error: (n = e.getAttribute(vm)) != null ? n : Xe.error,
      attempt: e.getAttribute(D0) ? Number(e.getAttribute(D0)) : Xe.attempt
    };
  e._lazy = vs({
    src: t.value,
    arg: t.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, o), vi(e, hs), te(Xe.filter, e._lazy);
}
function Cm(e, t) {
  var r = new Image();
  r.src = t, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, If.add(t), Nf(e, t);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? mm(e) : zf(e);
  });
}
function zf(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: t
    } = e._lazy;
    if (If.has(t)) {
      Nf(e, t), e._lazy.attemptLock = !1;
      return;
    }
    xm(e), Cm(e, t);
  }
}
function al(e) {
  return xs.apply(this, arguments);
}
function xs() {
  return xs = pi(function* (e) {
    (yield e1(e)) && zf(e);
  }), xs.apply(this, arguments);
}
function oo() {
  pn.forEach(e => al(e));
}
function Em(e) {
  return ms.apply(this, arguments);
}
function ms() {
  return ms = pi(function* (e) {
    !pn.includes(e) && pn.push(e), t1(e).forEach(gm), yield al(e);
  }), ms.apply(this, arguments);
}
function il(e) {
  ai(pn, e), pn.length === 0 && ym();
}
function Bm(e, t) {
  var {
    src: r,
    arg: n
  } = e._lazy;
  return r !== t.value || n !== t.arg;
}
function Hf(e, t) {
  return gs.apply(this, arguments);
}
function gs() {
  return gs = pi(function* (e, t) {
    bm(e, t), yield Em(e);
  }), gs.apply(this, arguments);
}
function Am(e, t) {
  return ys.apply(this, arguments);
}
function ys() {
  return ys = pi(function* (e, t) {
    if (!Bm(e, t)) {
      pn.includes(e) && (yield al(e));
      return;
    }
    yield Hf(e, t);
  }), ys.apply(this, arguments);
}
function wm(e) {
  e === void 0 && (e = {});
  var {
    events: t,
    loading: r,
    error: n,
    attempt: o,
    throttleWait: a,
    filter: i
  } = e;
  Xe.events = t ?? Xe.events, Xe.loading = r ?? Xe.loading, Xe.error = n ?? Xe.error, Xe.attempt = o ?? Xe.attempt, Xe.throttleWait = a ?? Xe.throttleWait, Xe.filter = i;
}
var Fm = {
  mounted: Hf,
  unmounted: il,
  updated: Am,
  install(e, t) {
    wm(t), ol = lf(oo, Xe.throttleWait), e.directive("lazy", this);
  }
};
const Sm = Fm;
function Dm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var _m = {
    src: {
      type: String
    },
    fit: {
      type: String,
      validator: Dm,
      default: "fill"
    },
    alt: {
      type: String
    },
    title: {
      type: String
    },
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
    radius: {
      type: [String, Number],
      default: 0
    },
    loading: {
      type: String
    },
    error: {
      type: String
    },
    lazy: {
      type: Boolean,
      default: !1
    },
    ripple: {
      type: Boolean,
      default: !1
    },
    block: {
      type: Boolean,
      default: !0
    },
    onClick: ce(),
    onLoad: ce(),
    onError: ce()
  },
  {
    n: km,
    classes: Om
  } = Pe("image"),
  Tm = ["alt", "title", "lazy-error", "lazy-loading"],
  Rm = ["alt", "title", "src"];
function Pm(e, t) {
  var r = Cr("lazy"),
    n = Cr("ripple");
  return Ze((q(), re("div", {
    class: H(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
    style: ve({
      width: e.toSizeUnit(e.width),
      height: e.toSizeUnit(e.height),
      "border-radius": e.toSizeUnit(e.radius)
    })
  }, [e.lazy ? Ze((q(), re("img", {
    key: 0,
    class: H(e.n("image")),
    alt: e.alt,
    title: e.title,
    "lazy-error": e.error,
    "lazy-loading": e.loading,
    style: ve({
      objectFit: e.fit
    }),
    onLoad: t[0] || (t[0] = function () {
      return e.handleLoad && e.handleLoad(...arguments);
    }),
    onError: t[1] || (t[1] = function () {
      return e.handleError && e.handleError(...arguments);
    }),
    onClick: t[2] || (t[2] = function () {
      return e.onClick && e.onClick(...arguments);
    })
  }, null, 46, Tm)), [[r, e.src]]) : (q(), re("img", {
    key: 1,
    class: H(e.n("image")),
    alt: e.alt,
    title: e.title,
    style: ve({
      objectFit: e.fit
    }),
    src: e.src,
    onLoad: t[3] || (t[3] = function () {
      return e.handleLoad && e.handleLoad(...arguments);
    }),
    onError: t[4] || (t[4] = function () {
      return e.handleError && e.handleError(...arguments);
    }),
    onClick: t[5] || (t[5] = function () {
      return e.onClick && e.onClick(...arguments);
    })
  }, null, 46, Rm))], 6)), [[n, {
    disabled: !e.ripple
  }]]);
}
var Mf = Fe({
  name: "VarImage",
  directives: {
    Lazy: Sm,
    Ripple: Kr
  },
  props: _m,
  setup(e) {
    var t = n => {
        var o = n.currentTarget,
          {
            lazy: a,
            onLoad: i,
            onError: s
          } = e;
        a ? (o._lazy.state === "success" && te(i, n), o._lazy.state === "error" && te(s, n)) : te(i, n);
      },
      r = n => {
        var {
          lazy: o,
          onError: a
        } = e;
        !o && te(a, n);
      };
    return {
      n: km,
      classes: Om,
      toSizeUnit: Ge,
      handleLoad: t,
      handleError: r
    };
  }
});
Mf.render = Pm;
const ko = Mf;
ko.install = function (e) {
  e.component(ko.name, ko);
};
var $m = ko,
  Oo = {
    offsetTop: {
      type: [String, Number],
      default: 0
    },
    zIndex: {
      type: [String, Number],
      default: 10
    },
    cssMode: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    onScroll: ce()
  };
function _0(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i),
      u = s.value;
  } catch (l) {
    r(l);
    return;
  }
  s.done ? t(u) : Promise.resolve(u).then(n, o);
}
function k0(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(t, r);
      function i(u) {
        _0(a, n, o, i, s, "next", u);
      }
      function s(u) {
        _0(a, n, o, i, s, "throw", u);
      }
      i(void 0);
    });
  };
}
var {
  n: Lm,
  classes: Im
} = Pe("sticky");
function Nm(e, t) {
  return q(), re("div", {
    class: H(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
    ref: "stickyEl",
    style: ve({
      zIndex: e.toNumber(e.zIndex),
      top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
      width: e.enableFixedMode ? e.fixedWidth : void 0,
      height: e.enableFixedMode ? e.fixedHeight : void 0
    })
  }, [ne("div", {
    class: H(e.n("wrapper")),
    ref: "wrapperEl",
    style: ve({
      zIndex: e.toNumber(e.zIndex),
      position: e.enableFixedMode ? "fixed" : void 0,
      width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
      height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
      left: e.enableFixedMode ? e.fixedLeft : void 0,
      top: e.enableFixedMode ? e.fixedTop : void 0
    })
  }, [xe(e.$slots, "default")], 6)], 6);
}
var Uf = Fe({
  name: "VarSticky",
  props: Oo,
  setup(e) {
    var t = Y(null),
      r = Y(null),
      n = Y(!1),
      o = Y("0px"),
      a = Y("0px"),
      i = Y("auto"),
      s = Y("auto"),
      u = Y("auto"),
      l = Y("auto"),
      c = pe(() => !e.disabled && e.cssMode),
      d = pe(() => !e.disabled && !e.cssMode && n.value),
      f = pe(() => zt(e.offsetTop)),
      p,
      v = () => {
        var {
          cssMode: x,
          disabled: y
        } = e;
        if (!y) {
          var w = 0;
          if (p !== window) {
            var {
              top: C
            } = p.getBoundingClientRect();
            w = C;
          }
          var _ = r.value,
            F = t.value,
            {
              top: O,
              left: B
            } = F.getBoundingClientRect(),
            A = O - w;
          return A <= f.value ? (x || (i.value = F.offsetWidth + "px", s.value = F.offsetHeight + "px", o.value = w + f.value + "px", a.value = B + "px", u.value = _.offsetWidth + "px", l.value = _.offsetHeight + "px", n.value = !0), {
            offsetTop: f.value,
            isFixed: !0
          }) : (n.value = !1, {
            offsetTop: A,
            isFixed: !1
          });
        }
      },
      h = () => {
        var x = v();
        x && te(e.onScroll, x.offsetTop, x.isFixed);
      },
      g = function () {
        var x = k0(function* () {
          n.value = !1, yield s1(), v();
        });
        return function () {
          return x.apply(this, arguments);
        };
      }(),
      b = function () {
        var x = k0(function* () {
          yield dn(), p = tl(t.value), p !== window && p.addEventListener("scroll", h), window.addEventListener("scroll", h), h();
        });
        return function () {
          return x.apply(this, arguments);
        };
      }(),
      m = () => {
        p !== window && p.removeEventListener("scroll", h), window.removeEventListener("scroll", h);
      };
    return Se(() => e.disabled, g), Ya(b), Xa(m), xt(b), Fr(m), {
      n: Lm,
      classes: Im,
      resize: g,
      stickyEl: t,
      wrapperEl: r,
      isFixed: n,
      offsetTop: f,
      fixedTop: o,
      fixedLeft: a,
      fixedWidth: i,
      fixedHeight: s,
      fixedWrapperWidth: u,
      fixedWrapperHeight: l,
      enableCSSMode: c,
      enableFixedMode: d,
      toNumber: Et
    };
  }
});
Uf.render = Nm;
const To = Uf;
To.install = function (e) {
  e.component(To.name, To);
};
function zm(e) {
  return ["text", "password", "number"].includes(e);
}
var Hm = {
    modelValue: {
      type: String
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    },
    type: {
      type: String,
      default: "text",
      validator: zm
    },
    textarea: {
      type: Boolean,
      default: !1
    },
    rows: {
      type: [String, Number],
      default: 8
    },
    placeholder: {
      type: String
    },
    line: {
      type: Boolean,
      default: !0
    },
    hint: {
      type: Boolean,
      default: !0
    },
    textColor: {
      type: String
    },
    focusColor: {
      type: String
    },
    blurColor: {
      type: String
    },
    maxlength: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    resize: {
      type: Boolean,
      default: !1
    },
    autofocus: {
      type: Boolean,
      default: !1
    },
    validateTrigger: {
      type: Array,
      default: () => ["onInput", "onClear"]
    },
    rules: {
      type: Array
    },
    onFocus: ce(),
    onBlur: ce(),
    onClick: ce(),
    onClear: ce(),
    onInput: ce(),
    onChange: ce(),
    "onUpdate:modelValue": ce()
  },
  {
    n: $i,
    classes: Mm
  } = Pe("input"),
  Um = ["id", "disabled", "type", "value", "maxlength", "rows"],
  Vm = ["id", "disabled", "type", "value", "maxlength"],
  jm = ["for"];
function Wm(e, t) {
  var r = Ve("var-icon"),
    n = Ve("var-form-details");
  return q(), re("div", {
    class: H(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
    onClick: t[10] || (t[10] = function () {
      return e.handleClick && e.handleClick(...arguments);
    })
  }, [ne("div", {
    class: H(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: ve({
      color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
    })
  }, [ne("div", {
    class: H(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
  }, [xe(e.$slots, "prepend-icon")], 2), ne("div", {
    class: H(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
  }, [e.type === "password" ? (q(), re("input", {
    key: 0,
    class: H(e.n("autocomplete"))
  }, null, 2)) : Ee("v-if", !0), e.textarea ? (q(), re("textarea", {
    key: 1,
    class: H(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
    ref: "el",
    autocomplete: "new-password",
    id: e.id,
    disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
    type: e.type,
    value: e.modelValue,
    maxlength: e.maxlength,
    rows: e.rows,
    style: ve({
      color: e.textColor,
      caretColor: e.errorMessage ? void 0 : e.focusColor,
      resize: e.resize ? "vertical" : "none"
    }),
    onFocus: t[0] || (t[0] = function () {
      return e.handleFocus && e.handleFocus(...arguments);
    }),
    onBlur: t[1] || (t[1] = function () {
      return e.handleBlur && e.handleBlur(...arguments);
    }),
    onInput: t[2] || (t[2] = function () {
      return e.handleInput && e.handleInput(...arguments);
    }),
    onChange: t[3] || (t[3] = function () {
      return e.handleChange && e.handleChange(...arguments);
    }),
    onTouchstart: t[4] || (t[4] = function () {
      return e.handleTouchstart && e.handleTouchstart(...arguments);
    })
  }, `
        `, 46, Um)) : (q(), re("input", {
    key: 2,
    class: H(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
    ref: "el",
    autocomplete: "new-password",
    id: e.id,
    disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
    type: e.type,
    value: e.modelValue,
    maxlength: e.maxlength,
    style: ve({
      color: e.textColor,
      caretColor: e.errorMessage ? void 0 : e.focusColor
    }),
    onFocus: t[5] || (t[5] = function () {
      return e.handleFocus && e.handleFocus(...arguments);
    }),
    onBlur: t[6] || (t[6] = function () {
      return e.handleBlur && e.handleBlur(...arguments);
    }),
    onInput: t[7] || (t[7] = function () {
      return e.handleInput && e.handleInput(...arguments);
    }),
    onChange: t[8] || (t[8] = function () {
      return e.handleChange && e.handleChange(...arguments);
    }),
    onTouchstart: t[9] || (t[9] = function () {
      return e.handleTouchstart && e.handleTouchstart(...arguments);
    })
  }, null, 46, Vm)), ne("label", {
    class: H(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
    style: ve({
      color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
    }),
    for: e.id
  }, De(e.placeholder), 15, jm)], 2), ne("div", {
    class: H(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
  }, [xe(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (q(), ze(r, {
    key: 0,
    class: H(e.n("clear-icon")),
    "var-input-cover": "",
    name: "close-circle",
    size: "14px",
    onClick: e.handleClear
  }, null, 8, ["class", "onClick"])) : Ee("v-if", !0)])], 2)], 6), e.line ? (q(), re("div", {
    key: 0,
    class: H(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
    style: ve({
      background: e.errorMessage ? void 0 : e.blurColor
    })
  }, [ne("div", {
    class: H(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
    style: ve({
      background: e.errorMessage ? void 0 : e.focusColor
    })
  }, null, 6)], 6)) : Ee("v-if", !0), Q(n, {
    "error-message": e.errorMessage,
    "extra-message": e.maxlengthText
  }, null, 8, ["error-message", "extra-message"])], 2);
}
var Vf = Fe({
  name: "VarInput",
  components: {
    VarIcon: Bt,
    VarFormDetails: sn
  },
  props: Hm,
  setup(e) {
    var t = Y("var-input-" + Sr().uid),
      r = Y(null),
      n = Y(!1),
      o = pe(() => {
        var {
          maxlength: A,
          modelValue: D
        } = e;
        return A ? Kt(D) ? "0 / " + A : String(D).length + "/" + A : "";
      }),
      {
        bindForm: a,
        form: i
      } = fi(),
      {
        errorMessage: s,
        validateWithTrigger: u,
        validate: l,
        resetValidation: c
      } = li(),
      d = A => {
        Rt(() => {
          var {
            validateTrigger: D,
            rules: k,
            modelValue: X
          } = e;
          u(D, A, k, X);
        });
      },
      f = () => {
        var {
          hint: A,
          modelValue: D
        } = e;
        if (!A && !Kt(D)) return $i("--placeholder-hidden");
        if (A && (!Kt(D) || n.value)) return $i("--placeholder-hint");
      },
      p = A => {
        n.value = !0, te(e.onFocus, A), d("onFocus");
      },
      v = A => {
        n.value = !1, te(e.onBlur, A), d("onBlur");
      },
      h = A => {
        var D = A.target,
          {
            value: k
          } = D;
        k = y(x(k)), D.value = k, te(e["onUpdate:modelValue"], k), te(e.onInput, k, A), d("onInput");
      },
      g = A => {
        var D = A.target,
          {
            value: k
          } = D;
        k = y(x(k)), D.value = k, te(e.onChange, k, A), d("onChange");
      },
      b = () => {
        var {
          disabled: A,
          readonly: D,
          clearable: k,
          onClear: X
        } = e;
        i != null && i.disabled.value || i != null && i.readonly.value || A || D || !k || (te(e["onUpdate:modelValue"], ""), te(X, ""), d("onClear"));
      },
      m = A => {
        var {
          disabled: D,
          onClick: k
        } = e;
        i != null && i.disabled.value || D || (te(k, A), d("onClick"));
      },
      x = A => e.modelModifiers.trim ? A.trim() : A,
      y = A => e.maxlength ? A.slice(0, Et(e.maxlength)) : A,
      w = A => {
        var {
          disabled: D,
          readonly: k
        } = e;
        i != null && i.disabled.value || i != null && i.readonly.value || D || k || A.stopPropagation();
      },
      C = () => {
        te(e["onUpdate:modelValue"], ""), c();
      },
      _ = () => l(e.rules, e.modelValue),
      F = () => {
        var A;
        (A = r.value) == null || A.focus();
      },
      O = () => {
        r.value.blur();
      },
      B = {
        reset: C,
        validate: _,
        resetValidation: c
      };
    return te(a, B), xt(() => {
      e.autofocus && F();
    }), {
      el: r,
      id: t,
      isFocus: n,
      errorMessage: s,
      maxlengthText: o,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: $i,
      classes: Mm,
      isEmpty: Kt,
      computePlaceholderState: f,
      handleFocus: p,
      handleBlur: v,
      handleInput: h,
      handleChange: g,
      handleClear: b,
      handleClick: m,
      handleTouchstart: w,
      validate: _,
      resetValidation: c,
      reset: C,
      focus: F,
      blur: O
    };
  }
});
Vf.render = Wm;
const Ro = Vf;
Ro.install = function (e) {
  e.component(Ro.name, Ro);
};
var jf = Ro;
function qm(e) {
  return ["click", "hover"].includes(e);
}
function Km(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Gm = {
    show: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    trigger: {
      type: String,
      default: "click",
      validator: qm
    },
    placement: {
      type: String,
      default: "cover-top-start",
      validator: Km
    },
    offsetX: {
      type: [Number, String],
      default: 0
    },
    offsetY: {
      type: [Number, String],
      default: 0
    },
    teleport: {
      type: [String, Object],
      default: "body"
    },
    sameWidth: {
      type: Boolean,
      default: !1
    },
    defaultStyle: {
      type: Boolean,
      default: !0
    },
    onOpen: ce(),
    onOpened: ce(),
    onClose: ce(),
    onClosed: ce(),
    "onUpdate:show": ce()
  },
  Ym = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
function Po(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return Ym[t];
  });
}
var Yt = "top",
  Ar = "bottom",
  Vr = "right",
  gr = "left",
  sl = "auto",
  hi = [Yt, Ar, Vr, gr],
  xi = "start",
  Xn = "end",
  Xm = "clippingParents",
  Wf = "viewport",
  _n = "popper",
  Qm = "reference",
  O0 = hi.reduce(function (e, t) {
    return e.concat([t + "-" + xi, t + "-" + Xn]);
  }, []),
  qf = [].concat(hi, [sl]).reduce(function (e, t) {
    return e.concat([t, t + "-" + xi, t + "-" + Xn]);
  }, []),
  Zm = "beforeRead",
  Jm = "read",
  eg = "afterRead",
  tg = "beforeMain",
  rg = "main",
  ng = "afterMain",
  og = "beforeWrite",
  ag = "write",
  ig = "afterWrite",
  sg = [Zm, Jm, eg, tg, rg, ng, og, ag, ig];
function yr(e) {
  return e.split("-")[0];
}
var lg = {
  start: "end",
  end: "start"
};
function T0(e) {
  return e.replace(/start|end/g, function (t) {
    return lg[t];
  });
}
function Dt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function jr(e) {
  var t = Dt(e).Element;
  return e instanceof t || e instanceof Element;
}
function At(e) {
  var t = Dt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ll(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Dt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Dr(e) {
  return ((jr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
var Nn = Math.max,
  R0 = Math.min,
  vn = Math.round;
function bs() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function (t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Kf() {
  return !/^((?!chrome|android).)*safari/i.test(bs());
}
function hn(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    o = 1,
    a = 1;
  t && At(e) && (o = e.offsetWidth > 0 && vn(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && vn(n.height) / e.offsetHeight || 1);
  var i = jr(e) ? Dt(e) : window,
    s = i.visualViewport,
    u = !Kf() && r,
    l = (n.left + (u && s ? s.offsetLeft : 0)) / o,
    c = (n.top + (u && s ? s.offsetTop : 0)) / a,
    d = n.width / o,
    f = n.height / a;
  return {
    width: d,
    height: f,
    top: c,
    right: l + d,
    bottom: c + f,
    left: l,
    x: l,
    y: c
  };
}
function ul(e) {
  var t = Dt(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function cl(e) {
  return hn(Dr(e)).left + ul(e).scrollLeft;
}
function ug(e, t) {
  var r = Dt(e),
    n = Dr(e),
    o = r.visualViewport,
    a = n.clientWidth,
    i = n.clientHeight,
    s = 0,
    u = 0;
  if (o) {
    a = o.width, i = o.height;
    var l = Kf();
    (l || !l && t === "fixed") && (s = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + cl(e),
    y: u
  };
}
function Jt(e) {
  return Dt(e).getComputedStyle(e);
}
function cg(e) {
  var t,
    r = Dr(e),
    n = ul(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    a = Nn(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
    i = Nn(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
    s = -n.scrollLeft + cl(e),
    u = -n.scrollTop;
  return Jt(o || r).direction === "rtl" && (s += Nn(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: u
  };
}
function Ut(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function mi(e) {
  return Ut(e) === "html" ? e : e.assignedSlot || e.parentNode || (ll(e) ? e.host : null) || Dr(e);
}
function fl(e) {
  var t = Jt(e),
    r = t.overflow,
    n = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function Gf(e) {
  return ["html", "body", "#document"].indexOf(Ut(e)) >= 0 ? e.ownerDocument.body : At(e) && fl(e) ? e : Gf(mi(e));
}
function zn(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Gf(e),
    o = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = Dt(n),
    i = o ? [a].concat(a.visualViewport || [], fl(n) ? n : []) : n,
    s = t.concat(i);
  return o ? s : s.concat(zn(mi(i)));
}
function fg(e) {
  return ["table", "td", "th"].indexOf(Ut(e)) >= 0;
}
function P0(e) {
  return !At(e) || Jt(e).position === "fixed" ? null : e.offsetParent;
}
function dg(e) {
  var t = /firefox/i.test(bs()),
    r = /Trident/i.test(bs());
  if (r && At(e)) {
    var n = Jt(e);
    if (n.position === "fixed") return null;
  }
  var o = mi(e);
  for (ll(o) && (o = o.host); At(o) && ["html", "body"].indexOf(Ut(o)) < 0;) {
    var a = Jt(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none") return o;
    o = o.parentNode;
  }
  return null;
}
function dl(e) {
  for (var t = Dt(e), r = P0(e); r && fg(r) && Jt(r).position === "static";) r = P0(r);
  return r && (Ut(r) === "html" || Ut(r) === "body" && Jt(r).position === "static") ? t : r || dg(e) || t;
}
function pg(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && ll(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Cs(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function vg(e, t) {
  var r = hn(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function $0(e, t, r) {
  return t === Wf ? Cs(ug(e, r)) : jr(t) ? vg(t, r) : Cs(cg(Dr(e)));
}
function hg(e) {
  var t = zn(mi(e)),
    r = ["absolute", "fixed"].indexOf(Jt(e).position) >= 0,
    n = r && At(e) ? dl(e) : e;
  return jr(n) ? t.filter(function (o) {
    return jr(o) && pg(o, n) && Ut(o) !== "body";
  }) : [];
}
function xg(e, t, r, n) {
  var o = t === "clippingParents" ? hg(e) : [].concat(t),
    a = [].concat(o, [r]),
    i = a[0],
    s = a.reduce(function (u, l) {
      var c = $0(e, l, n);
      return u.top = Nn(c.top, u.top), u.right = R0(c.right, u.right), u.bottom = R0(c.bottom, u.bottom), u.left = Nn(c.left, u.left), u;
    }, $0(e, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Qn(e) {
  return e.split("-")[1];
}
function mg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Yf(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    o = n ? yr(n) : null,
    a = n ? Qn(n) : null,
    i = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    u;
  switch (o) {
    case Yt:
      u = {
        x: i,
        y: t.y - r.height
      };
      break;
    case Ar:
      u = {
        x: i,
        y: t.y + t.height
      };
      break;
    case Vr:
      u = {
        x: t.x + t.width,
        y: s
      };
      break;
    case gr:
      u = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var l = o ? mg(o) : null;
  if (l != null) {
    var c = l === "y" ? "height" : "width";
    switch (a) {
      case xi:
        u[l] = u[l] - (t[c] / 2 - r[c] / 2);
        break;
      case Xn:
        u[l] = u[l] + (t[c] / 2 - r[c] / 2);
        break;
    }
  }
  return u;
}
function gg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function yg(e) {
  return Object.assign({}, gg(), e);
}
function bg(e, t) {
  return t.reduce(function (r, n) {
    return r[n] = e, r;
  }, {});
}
function Xf(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    o = n === void 0 ? e.placement : n,
    a = r.strategy,
    i = a === void 0 ? e.strategy : a,
    s = r.boundary,
    u = s === void 0 ? Xm : s,
    l = r.rootBoundary,
    c = l === void 0 ? Wf : l,
    d = r.elementContext,
    f = d === void 0 ? _n : d,
    p = r.altBoundary,
    v = p === void 0 ? !1 : p,
    h = r.padding,
    g = h === void 0 ? 0 : h,
    b = yg(typeof g != "number" ? g : bg(g, hi)),
    m = f === _n ? Qm : _n,
    x = e.rects.popper,
    y = e.elements[v ? m : f],
    w = xg(jr(y) ? y : y.contextElement || Dr(e.elements.popper), u, c, i),
    C = hn(e.elements.reference),
    _ = Yf({
      reference: C,
      element: x,
      strategy: "absolute",
      placement: o
    }),
    F = Cs(Object.assign({}, x, _)),
    O = f === _n ? F : C,
    B = {
      top: w.top - O.top + b.top,
      bottom: O.bottom - w.bottom + b.bottom,
      left: w.left - O.left + b.left,
      right: O.right - w.right + b.right
    },
    A = e.modifiersData.offset;
  if (f === _n && A) {
    var D = A[o];
    Object.keys(B).forEach(function (k) {
      var X = [Vr, Ar].indexOf(k) >= 0 ? 1 : -1,
        ie = [Yt, Ar].indexOf(k) >= 0 ? "y" : "x";
      B[k] += D[ie] * X;
    });
  }
  return B;
}
function Cg(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    o = r.boundary,
    a = r.rootBoundary,
    i = r.padding,
    s = r.flipVariations,
    u = r.allowedAutoPlacements,
    l = u === void 0 ? qf : u,
    c = Qn(n),
    d = c ? s ? O0 : O0.filter(function (v) {
      return Qn(v) === c;
    }) : hi,
    f = d.filter(function (v) {
      return l.indexOf(v) >= 0;
    });
  f.length === 0 && (f = d);
  var p = f.reduce(function (v, h) {
    return v[h] = Xf(e, {
      placement: h,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[yr(h)], v;
  }, {});
  return Object.keys(p).sort(function (v, h) {
    return p[v] - p[h];
  });
}
function Eg(e) {
  if (yr(e) === sl) return [];
  var t = Po(e);
  return [T0(e), t, T0(t)];
}
function Bg(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !0 : i, u = r.fallbackPlacements, l = r.padding, c = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, v = p === void 0 ? !0 : p, h = r.allowedAutoPlacements, g = t.options.placement, b = yr(g), m = b === g, x = u || (m || !v ? [Po(g)] : Eg(g)), y = [g].concat(x).reduce(function (I, T) {
        return I.concat(yr(T) === sl ? Cg(t, {
          placement: T,
          boundary: c,
          rootBoundary: d,
          padding: l,
          flipVariations: v,
          allowedAutoPlacements: h
        }) : T);
      }, []), w = t.rects.reference, C = t.rects.popper, _ = new Map(), F = !0, O = y[0], B = 0; B < y.length; B++) {
      var A = y[B],
        D = yr(A),
        k = Qn(A) === xi,
        X = [Yt, Ar].indexOf(D) >= 0,
        ie = X ? "width" : "height",
        ae = Xf(t, {
          placement: A,
          boundary: c,
          rootBoundary: d,
          altBoundary: f,
          padding: l
        }),
        V = X ? k ? Vr : gr : k ? Ar : Yt;
      w[ie] > C[ie] && (V = Po(V));
      var z = Po(V),
        se = [];
      if (a && se.push(ae[D] <= 0), s && se.push(ae[V] <= 0, ae[z] <= 0), se.every(function (I) {
        return I;
      })) {
        O = A, F = !1;
        break;
      }
      _.set(A, se);
    }
    if (F) for (var fe = v ? 3 : 1, L = function (T) {
        var U = y.find(function (j) {
          var G = _.get(j);
          if (G) return G.slice(0, T).every(function (me) {
            return me;
          });
        });
        if (U) return O = U, "break";
      }, R = fe; R > 0; R--) {
      var $ = L(R);
      if ($ === "break") break;
    }
    t.placement !== O && (t.modifiersData[n]._skip = !0, t.placement = O, t.reset = !0);
  }
}
const Ag = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Bg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function wg(e, t, r) {
  var n = yr(e),
    o = [gr, Yt].indexOf(n) >= 0 ? -1 : 1,
    a = typeof r == "function" ? r(Object.assign({}, t, {
      placement: e
    })) : r,
    i = a[0],
    s = a[1];
  return i = i || 0, s = (s || 0) * o, [gr, Vr].indexOf(n) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function Fg(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    o = r.offset,
    a = o === void 0 ? [0, 0] : o,
    i = qf.reduce(function (c, d) {
      return c[d] = wg(d, t.rects, a), c;
    }, {}),
    s = i[t.placement],
    u = s.x,
    l = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += l), t.modifiersData[n] = i;
}
const Sg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Fg
};
function Dg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function _g(e) {
  return e === Dt(e) || !At(e) ? ul(e) : Dg(e);
}
function kg(e) {
  var t = e.getBoundingClientRect(),
    r = vn(t.width) / e.offsetWidth || 1,
    n = vn(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Og(e, t, r) {
  r === void 0 && (r = !1);
  var n = At(t),
    o = At(t) && kg(t),
    a = Dr(t),
    i = hn(e, o, r),
    s = {
      scrollLeft: 0,
      scrollTop: 0
    },
    u = {
      x: 0,
      y: 0
    };
  return (n || !n && !r) && ((Ut(t) !== "body" || fl(a)) && (s = _g(t)), At(t) ? (u = hn(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = cl(a))), {
    x: i.left + s.scrollLeft - u.x,
    y: i.top + s.scrollTop - u.y,
    width: i.width,
    height: i.height
  };
}
function Tg(e) {
  var t = hn(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function Rg(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function (s) {
      if (!r.has(s)) {
        var u = t.get(s);
        u && o(u);
      }
    }), n.push(a);
  }
  return e.forEach(function (a) {
    r.has(a.name) || o(a);
  }), n;
}
function Pg(e) {
  var t = Rg(e);
  return sg.reduce(function (r, n) {
    return r.concat(t.filter(function (o) {
      return o.phase === n;
    }));
  }, []);
}
function $g(e) {
  var t;
  return function () {
    return t || (t = new Promise(function (r) {
      Promise.resolve().then(function () {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Lg(e) {
  var t = e.reduce(function (r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var L0 = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function I0() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Ig(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    o = t.defaultOptions,
    a = o === void 0 ? L0 : o;
  return function (s, u, l) {
    l === void 0 && (l = a);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, L0, a),
        modifiersData: {},
        elements: {
          reference: s,
          popper: u
        },
        attributes: {},
        styles: {}
      },
      d = [],
      f = !1,
      p = {
        state: c,
        setOptions: function (b) {
          var m = typeof b == "function" ? b(c.options) : b;
          h(), c.options = Object.assign({}, a, c.options, m), c.scrollParents = {
            reference: jr(s) ? zn(s) : s.contextElement ? zn(s.contextElement) : [],
            popper: zn(u)
          };
          var x = Pg(Lg([].concat(n, c.options.modifiers)));
          return c.orderedModifiers = x.filter(function (y) {
            return y.enabled;
          }), v(), p.update();
        },
        forceUpdate: function () {
          if (!f) {
            var b = c.elements,
              m = b.reference,
              x = b.popper;
            if (I0(m, x)) {
              c.rects = {
                reference: Og(m, dl(x), c.options.strategy === "fixed"),
                popper: Tg(x)
              }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function (B) {
                return c.modifiersData[B.name] = Object.assign({}, B.data);
              });
              for (var y = 0; y < c.orderedModifiers.length; y++) {
                if (c.reset === !0) {
                  c.reset = !1, y = -1;
                  continue;
                }
                var w = c.orderedModifiers[y],
                  C = w.fn,
                  _ = w.options,
                  F = _ === void 0 ? {} : _,
                  O = w.name;
                typeof C == "function" && (c = C({
                  state: c,
                  options: F,
                  name: O,
                  instance: p
                }) || c);
              }
            }
          }
        },
        update: $g(function () {
          return new Promise(function (g) {
            p.forceUpdate(), g(c);
          });
        }),
        destroy: function () {
          h(), f = !0;
        }
      };
    if (!I0(s, u)) return p;
    p.setOptions(l).then(function (g) {
      !f && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function v() {
      c.orderedModifiers.forEach(function (g) {
        var b = g.name,
          m = g.options,
          x = m === void 0 ? {} : m,
          y = g.effect;
        if (typeof y == "function") {
          var w = y({
              state: c,
              name: b,
              instance: p,
              options: x
            }),
            C = function () {};
          d.push(w || C);
        }
      });
    }
    function h() {
      d.forEach(function (g) {
        return g();
      }), d = [];
    }
    return p;
  };
}
var go = {
  passive: !0
};
function Ng(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    o = n.scroll,
    a = o === void 0 ? !0 : o,
    i = n.resize,
    s = i === void 0 ? !0 : i,
    u = Dt(t.elements.popper),
    l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && l.forEach(function (c) {
    c.addEventListener("scroll", r.update, go);
  }), s && u.addEventListener("resize", r.update, go), function () {
    a && l.forEach(function (c) {
      c.removeEventListener("scroll", r.update, go);
    }), s && u.removeEventListener("resize", r.update, go);
  };
}
const zg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Ng,
  data: {}
};
function Hg(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Yf({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Mg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Hg,
  data: {}
};
var Ug = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Vg(e) {
  var t = e.x,
    r = e.y,
    n = window,
    o = n.devicePixelRatio || 1;
  return {
    x: vn(t * o) / o || 0,
    y: vn(r * o) / o || 0
  };
}
function N0(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    o = e.placement,
    a = e.variation,
    i = e.offsets,
    s = e.position,
    u = e.gpuAcceleration,
    l = e.adaptive,
    c = e.roundOffsets,
    d = e.isFixed,
    f = i.x,
    p = f === void 0 ? 0 : f,
    v = i.y,
    h = v === void 0 ? 0 : v,
    g = typeof c == "function" ? c({
      x: p,
      y: h
    }) : {
      x: p,
      y: h
    };
  p = g.x, h = g.y;
  var b = i.hasOwnProperty("x"),
    m = i.hasOwnProperty("y"),
    x = gr,
    y = Yt,
    w = window;
  if (l) {
    var C = dl(r),
      _ = "clientHeight",
      F = "clientWidth";
    if (C === Dt(r) && (C = Dr(r), Jt(C).position !== "static" && s === "absolute" && (_ = "scrollHeight", F = "scrollWidth")), C = C, o === Yt || (o === gr || o === Vr) && a === Xn) {
      y = Ar;
      var O = d && C === w && w.visualViewport ? w.visualViewport.height : C[_];
      h -= O - n.height, h *= u ? 1 : -1;
    }
    if (o === gr || (o === Yt || o === Ar) && a === Xn) {
      x = Vr;
      var B = d && C === w && w.visualViewport ? w.visualViewport.width : C[F];
      p -= B - n.width, p *= u ? 1 : -1;
    }
  }
  var A = Object.assign({
      position: s
    }, l && Ug),
    D = c === !0 ? Vg({
      x: p,
      y: h
    }) : {
      x: p,
      y: h
    };
  if (p = D.x, h = D.y, u) {
    var k;
    return Object.assign({}, A, (k = {}, k[y] = m ? "0" : "", k[x] = b ? "0" : "", k.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", k));
  }
  return Object.assign({}, A, (t = {}, t[y] = m ? h + "px" : "", t[x] = b ? p + "px" : "", t.transform = "", t));
}
function jg(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    o = n === void 0 ? !0 : n,
    a = r.adaptive,
    i = a === void 0 ? !0 : a,
    s = r.roundOffsets,
    u = s === void 0 ? !0 : s,
    l = {
      placement: yr(t.placement),
      variation: Qn(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed"
    };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, N0(Object.assign({}, l, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, N0(Object.assign({}, l, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Wg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: jg,
  data: {}
};
function qg(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      o = t.attributes[r] || {},
      a = t.elements[r];
    !At(a) || !Ut(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function (i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function Kg(e) {
  var t = e.state,
    r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function () {
    Object.keys(t.elements).forEach(function (n) {
      var o = t.elements[n],
        a = t.attributes[n] || {},
        i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
        s = i.reduce(function (u, l) {
          return u[l] = "", u;
        }, {});
      !At(o) || !Ut(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function (u) {
        o.removeAttribute(u);
      }));
    });
  };
}
const Gg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: qg,
  effect: Kg,
  requires: ["computeStyles"]
};
var Yg = [zg, Mg, Wg, Gg],
  Xg = Ig({
    defaultModifiers: Yg
  });
function ra() {
  return ra = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ra.apply(this, arguments);
}
function z0(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i),
      u = s.value;
  } catch (l) {
    r(l);
    return;
  }
  s.done ? t(u) : Promise.resolve(u).then(n, o);
}
function H0(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(t, r);
      function i(u) {
        z0(a, n, o, i, s, "next", u);
      }
      function s(u) {
        z0(a, n, o, i, s, "throw", u);
      }
      i(void 0);
    });
  };
}
function Qg(e) {
  var t = Y(null),
    r = Y(null),
    n = Y(!1),
    o = Y({
      width: 0,
      height: 0
    }),
    {
      zIndex: a
    } = no(() => n.value, 1),
    i = null,
    s = !1,
    u = !1,
    l = !1,
    c = () => {
      var {
        width: C,
        height: _
      } = window.getComputedStyle(t.value);
      o.value = {
        width: zt(C),
        height: zt(_)
      };
    },
    d = () => {
      e.trigger === "hover" && (l = !0, y());
    },
    f = function () {
      var C = H0(function* () {
        e.trigger === "hover" && (l = !1, yield dn(), !u && w());
      });
      return function () {
        return C.apply(this, arguments);
      };
    }(),
    p = () => {
      e.trigger === "hover" && (u = !0);
    },
    v = function () {
      var C = H0(function* () {
        e.trigger === "hover" && (u = !1, yield dn(), !l && w());
      });
      return function () {
        return C.apply(this, arguments);
      };
    }(),
    h = () => {
      y(), s = !0;
    },
    g = () => {
      if (s) {
        s = !1;
        return;
      }
      n.value = !1, te(e["onUpdate:show"], !1);
    },
    b = () => {
      c();
      var C = {
        x: zt(e.offsetX),
        y: zt(e.offsetY)
      };
      switch (e.placement) {
        case "cover-top":
          return {
            placement: "bottom",
            skidding: C.x,
            distance: C.y - o.value.height
          };
        case "cover-top-start":
          return {
            placement: "bottom-start",
            skidding: C.x,
            distance: C.y - o.value.height
          };
        case "cover-top-end":
          return {
            placement: "bottom-end",
            skidding: C.x,
            distance: C.y - o.value.height
          };
        case "cover-bottom":
          return {
            placement: "top",
            skidding: C.x,
            distance: -C.y - o.value.height
          };
        case "cover-bottom-start":
          return {
            placement: "top-start",
            skidding: C.x,
            distance: -C.y - o.value.height
          };
        case "cover-bottom-end":
          return {
            placement: "top-end",
            skidding: C.x,
            distance: -C.y - o.value.height
          };
        case "cover-left":
          return {
            placement: "right",
            skidding: C.y,
            distance: C.x - o.value.width
          };
        case "cover-right":
          return {
            placement: "left",
            skidding: C.y,
            distance: -C.x - o.value.width
          };
        case "left":
        case "left-start":
        case "left-end":
          return {
            placement: e.placement,
            skidding: C.y,
            distance: -C.x
          };
        case "top":
        case "top-start":
        case "top-end":
          return {
            placement: e.placement,
            skidding: C.x,
            distance: -C.y
          };
        case "bottom":
        case "bottom-start":
        case "bottom-end":
          return {
            placement: e.placement,
            skidding: C.x,
            distance: C.y
          };
        case "right":
        case "right-start":
        case "right-end":
          return {
            placement: e.placement,
            skidding: C.y,
            distance: C.x
          };
      }
    },
    m = () => {
      var {
          placement: C,
          skidding: _,
          distance: F
        } = b(),
        O = [ra({}, Ag, {
          enabled: n.value
        }), ra({}, Sg, {
          options: {
            offset: [_, F]
          }
        })];
      return {
        placement: C,
        modifiers: O
      };
    },
    x = () => {
      i.setOptions(m());
    },
    y = () => {
      var {
        disabled: C
      } = e;
      C || (n.value = !0, te(e["onUpdate:show"], !0));
    },
    w = () => {
      n.value = !1, te(e["onUpdate:show"], !1);
    };
  return Se(() => e.show, C => {
    n.value = C ?? !1;
  }, {
    immediate: !0
  }), Se(() => e.offsetX, x), Se(() => e.offsetY, x), Se(() => e.placement, x), Se(() => n.value, C => {
    C ? (x(), te(e.onOpen)) : te(e.onClose);
  }), Se(() => e.trigger, C => {
    C === "click" ? document.addEventListener("click", g) : document.removeEventListener("click", g);
  }), Se(() => e.disabled, w), xt(() => {
    i = Xg(t.value, r.value, m()), e.trigger === "click" && document.addEventListener("click", g);
  }), Fr(() => {
    document.removeEventListener("click", g), i.destroy();
  }), {
    show: n,
    popover: r,
    zIndex: a,
    host: t,
    hostSize: o,
    handleHostClick: h,
    handleHostMouseenter: d,
    handleHostMouseleave: f,
    handlePopoverClose: g,
    handlePopoverMouseenter: p,
    handlePopoverMouseleave: v,
    resize: x,
    open: y,
    close: w
  };
}
var {
  n: Zg,
  classes: Jg
} = Pe("menu");
function ey(e, t) {
  return q(), re("div", {
    ref: "host",
    class: H(e.n()),
    onClick: t[3] || (t[3] = function () {
      return e.handleHostClick && e.handleHostClick(...arguments);
    }),
    onMouseenter: t[4] || (t[4] = function () {
      return e.handleHostMouseenter && e.handleHostMouseenter(...arguments);
    }),
    onMouseleave: t[5] || (t[5] = function () {
      return e.handleHostMouseleave && e.handleHostMouseleave(...arguments);
    })
  }, [xe(e.$slots, "default"), (q(), ze(Ja, {
    to: e.teleport
  }, [Q(it, {
    name: e.n(),
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: he(() => [Ze(ne("div", {
      ref: "popover",
      style: ve({
        zIndex: e.zIndex,
        width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
      }),
      class: H(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
      onClick: t[0] || (t[0] = oi(() => {}, ["stop"])),
      onMouseenter: t[1] || (t[1] = function () {
        return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
      }),
      onMouseleave: t[2] || (t[2] = function () {
        return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
      })
    }, [xe(e.$slots, "menu")], 38), [[Nt, e.show]])]),
    _: 3
  }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to"]))], 34);
}
var Qf = Fe({
  name: "VarMenu",
  props: Gm,
  setup(e) {
    var {
      popover: t,
      host: r,
      hostSize: n,
      show: o,
      zIndex: a,
      handleHostClick: i,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: c,
      handlePopoverClose: d,
      open: f,
      close: p,
      resize: v
    } = Qg(e);
    return {
      popover: t,
      host: r,
      hostSize: n,
      show: o,
      zIndex: a,
      toSizeUnit: Ge,
      n: Zg,
      classes: Jg,
      handleHostClick: i,
      handleHostMouseenter: s,
      handleHostMouseleave: u,
      handlePopoverMouseenter: l,
      handlePopoverMouseleave: c,
      handlePopoverClose: d,
      resize: v,
      open: f,
      close: p
    };
  }
});
Qf.render = ey;
const $o = Qf;
$o.install = function (e) {
  e.component($o.name, $o);
};
var Zf = Symbol("SELECT_BIND_OPTION_KEY"),
  Jf = Symbol("SELECT_COUNT_OPTION_KEY");
function ty() {
  var {
      bindChildren: e,
      childProviders: t
    } = si(Zf),
    {
      length: r
    } = rl(Jf);
  return {
    length: r,
    options: t,
    bindOptions: e
  };
}
function ry() {
  var {
      bindParent: e,
      parentProvider: t
    } = ro(Zf),
    {
      index: r
    } = ii(Jf);
  if (!e || !t) throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: t,
    bindSelect: e
  };
}
var ny = {
    label: {},
    value: {}
  },
  {
    n: oy,
    classes: ay
  } = Pe("option");
function iy(e, t) {
  var r = Ve("var-checkbox"),
    n = Cr("ripple");
  return Ze((q(), re("div", {
    class: H(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
    style: ve({
      width: e.wrapWidth,
      color: e.optionSelected ? e.focusColor : void 0
    }),
    onClick: t[2] || (t[2] = function () {
      return e.handleClick && e.handleClick(...arguments);
    })
  }, [ne("div", {
    class: H(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
    style: ve({
      background: e.optionSelected ? e.focusColor : void 0
    })
  }, null, 6), e.multiple ? (q(), ze(r, {
    key: 0,
    ref: "checkbox",
    "checked-color": e.focusColor,
    modelValue: e.optionSelected,
    "onUpdate:modelValue": t[0] || (t[0] = o => e.optionSelected = o),
    onClick: t[1] || (t[1] = oi(() => {}, ["stop"])),
    onChange: e.handleSelect
  }, null, 8, ["checked-color", "modelValue", "onChange"])) : Ee("v-if", !0), ne("div", {
    class: H(e.classes(e.n("text"), e.n("$--ellipsis")))
  }, [xe(e.$slots, "default", {}, () => [Le(De(e.label), 1)])], 2)], 6)), [[n]]);
}
var ed = Fe({
  name: "VarOption",
  directives: {
    Ripple: Kr
  },
  components: {
    VarCheckbox: Do
  },
  props: ny,
  setup(e) {
    var t = Y(!1),
      r = pe(() => t.value),
      n = pe(() => e.label),
      o = pe(() => e.value),
      {
        select: a,
        bindSelect: i
      } = ry(),
      {
        wrapWidth: s,
        multiple: u,
        focusColor: l,
        onSelect: c
      } = a,
      d = () => {
        t.value = !t.value, c(v);
      },
      f = () => c(v),
      p = h => {
        t.value = h;
      },
      v = {
        label: n,
        value: o,
        selected: r,
        sync: p
      };
    return Se([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null) throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), i(v), {
      n: oy,
      classes: ay,
      optionSelected: t,
      wrapWidth: s,
      multiple: u,
      focusColor: l,
      handleClick: d,
      handleSelect: f
    };
  }
});
ed.render = iy;
const Lo = ed;
Lo.install = function (e) {
  e.component(Lo.name, Lo);
};
var sy = Lo,
  ly = {
    show: {
      type: Boolean,
      default: !1
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    teleport: {
      type: String
    },
    onClick: ce(),
    "onUpdate:show": ce()
  };
function uy(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Er(e);
}
var {
  n: M0
} = Pe("overlay");
const Io = Fe({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: ly,
  setup(e, t) {
    var {
        slots: r,
        attrs: n
      } = t,
      {
        zIndex: o
      } = no(() => e.show, 1),
      {
        disabled: a
      } = nl(),
      i = () => {
        te(e.onClick), te(e["onUpdate:show"], !1);
      };
    ui(() => e.show, () => e.lockScroll);
    var s = () => Q("div", Ft({
        class: M0(),
        style: {
          zIndex: o.value - 1
        }
      }, n, {
        onClick: i
      }), [te(r.default)]),
      u = () => {
        var {
          show: l
        } = e;
        return Q(it, {
          name: M0("--fade")
        }, {
          default: () => [l && s()]
        });
      };
    return () => {
      var {
        teleport: l
      } = e;
      if (l) {
        var c;
        return Q(Ja, {
          to: l,
          disabled: a.value
        }, uy(c = u()) ? c : {
          default: () => [c]
        });
      }
      return u();
    };
  }
});
Io.install = function (e) {
  e.component(Io.name, Io);
};
var cy = Io;
function fy(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var dy = {
    imageSize: {
      type: [String, Number]
    },
    type: {
      type: String,
      default: "success",
      validator: fy
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    animation: {
      type: Boolean,
      default: !0
    }
  },
  py = e => (Bn(""), e = e(), An(), e),
  vy = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "2 3.6 20 20"
  },
  hy = py(() => ne("path", {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  }, null, -1)),
  xy = [hy];
function my(e, t) {
  return q(), re("svg", vy, xy);
}
var td = Fe({});
td.render = my;
const gy = td;
var yy = e => (Bn(""), e = e(), An(), e),
  by = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "2 2 20 20"
  },
  Cy = yy(() => ne("path", {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  }, null, -1)),
  Ey = [Cy];
function By(e, t) {
  return q(), re("svg", by, Ey);
}
var rd = Fe({});
rd.render = By;
const Ay = rd;
var wy = e => (Bn(""), e = e(), An(), e),
  Fy = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-6 -4 35 35"
  },
  Sy = wy(() => ne("path", {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  }, null, -1)),
  Dy = [Sy];
function _y(e, t) {
  return q(), re("svg", Fy, Dy);
}
var nd = Fe({});
nd.render = _y;
const ky = nd;
var {
  n: Oy,
  classes: Ty
} = Pe("result");
function Ry(e, t) {
  return q(), re(Ue, null, [ne("span", {
    class: H(e.n("success-cover-left"))
  }, null, 2), ne("span", {
    class: H(e.classes(e.n("success-line"), e.n("success-line-tip"))),
    style: ve({
      animationDuration: e.animation ? "760ms" : "0ms",
      borderRadius: "calc(" + e.borderSize + " * 0.625)"
    })
  }, null, 6), ne("span", {
    class: H(e.classes(e.n("success-line"), e.n("success-line-long"))),
    style: ve({
      animationDuration: e.animation ? "770ms" : "0ms",
      borderRadius: "calc(" + e.borderSize + " * 0.625)"
    })
  }, null, 6), ne("span", {
    ref: "circle",
    class: H(e.n("success-circle")),
    style: ve({
      left: "-" + e.borderSize,
      top: "-" + e.borderSize,
      borderWidth: e.borderSize
    })
  }, null, 6), ne("span", {
    class: H(e.n("success-line-fix"))
  }, null, 2), ne("span", {
    class: H(e.n("success-cover-right")),
    style: ve({
      animationDuration: e.animation ? "4250ms" : "0ms"
    })
  }, null, 6)], 64);
}
var od = Fe({
  props: {
    animation: {
      type: Boolean
    },
    borderSize: {
      type: String
    }
  },
  setup() {
    return {
      n: Oy,
      classes: Ty,
      toNumber: Et
    };
  }
});
od.render = Ry;
const Py = od;
var $y = e => (Bn(""), e = e(), An(), e),
  Ly = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-3 -3 30 30"
  },
  Iy = $y(() => ne("path", {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  }, null, -1)),
  Ny = [Iy];
function zy(e, t) {
  return q(), re("svg", Ly, Ny);
}
var ad = Fe({});
ad.render = zy;
const Hy = ad;
var My = e => (Bn(""), e = e(), An(), e),
  Uy = {
    viewBox: "-4 -4 32 32"
  },
  Vy = My(() => ne("path", {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  }, null, -1)),
  jy = [Vy];
function Wy(e, t) {
  return q(), re("svg", Uy, jy);
}
var id = Fe({});
id.render = Wy;
const qy = id;
var {
  n: Ky,
  classes: Gy
} = Pe("result");
function Yy(e, t) {
  return q(), re("div", {
    class: H(e.classes(e.n(), e.n("$--box")))
  }, [xe(e.$slots, "image", {}, () => [e.type ? (q(), re("div", {
    key: 0,
    class: H(e.n("image-container"))
  }, [ne("div", {
    class: H(e.classes(e.n("image"), e.n(e.type))),
    style: ve({
      width: e.circleSize,
      height: e.circleSize,
      borderWidth: e.borderSize
    })
  }, [(q(), ze(Ys(e.type), {
    "border-size": e.borderSize,
    animation: e.animation
  }, null, 8, ["border-size", "animation"]))], 6)], 2)) : Ee("v-if", !0)]), xe(e.$slots, "title", {}, () => [e.title ? (q(), re("div", {
    key: 0,
    class: H(e.n("title"))
  }, De(e.title), 3)) : Ee("v-if", !0)]), xe(e.$slots, "description", {}, () => [e.description ? (q(), re("div", {
    key: 0,
    class: H(e.n("description"))
  }, De(e.description), 3)) : Ee("v-if", !0)]), e.$slots.footer ? (q(), re("div", {
    key: 0,
    class: H(e.n("footer"))
  }, [xe(e.$slots, "footer")], 2)) : Ee("v-if", !0)], 2);
}
var sd = Fe({
  name: "VarResult",
  components: {
    Info: gy,
    Success: Py,
    Warning: ky,
    Error: Ay,
    Question: Hy,
    Empty: qy
  },
  props: dy,
  setup(e) {
    var t = pe(() => {
        var {
          imageSize: n
        } = e;
        return "calc(" + (n ? Ge(n) : "var(--result-image-size)") + " * 0.9)";
      }),
      r = pe(() => {
        var {
          imageSize: n
        } = e;
        return "calc(" + (n ? Ge(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
      });
    return {
      n: Ky,
      classes: Gy,
      toNumber: Et,
      toPxNum: zt,
      toSizeUnit: Ge,
      circleSize: t,
      borderSize: r
    };
  }
});
sd.render = Yy;
const No = sd;
No.install = function (e) {
  e.component(No.name, No);
};
var Xy = No;
function Qy(e) {
  return ["left", "right", "center"].includes(e);
}
var Zy = {
    modelValue: {
      default: void 0
    },
    placeholder: {
      type: String
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    offsetY: {
      type: [String, Number],
      default: 0
    },
    chip: {
      type: Boolean,
      default: !1
    },
    line: {
      type: Boolean,
      default: !0
    },
    hint: {
      type: Boolean,
      default: !0
    },
    textColor: {
      type: String
    },
    focusColor: {
      type: String
    },
    blurColor: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    separator: {
      type: String,
      default: ","
    },
    textAlign: {
      type: String,
      default: "left",
      validator: Qy
    },
    validateTrigger: {
      type: Array,
      default: () => ["onChange", "onClear", "onClose"]
    },
    rules: {
      type: Array
    },
    onFocus: ce(),
    onBlur: ce(),
    onClick: ce(),
    onClear: ce(),
    onClose: ce(),
    onChange: ce(),
    "onUpdate:modelValue": ce()
  },
  {
    n: Li,
    classes: Jy
  } = Pe("select"),
  e2 = {
    key: 1
  };
function t2(e, t) {
  var r = Ve("var-chip"),
    n = Ve("var-icon"),
    o = Ve("var-menu"),
    a = Ve("var-form-details");
  return q(), re("div", {
    class: H(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
    onClick: t[3] || (t[3] = function () {
      return e.handleClick && e.handleClick(...arguments);
    })
  }, [ne("div", {
    class: H(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
    style: ve({
      color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
    })
  }, [ne("div", {
    class: H(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
  }, [xe(e.$slots, "prepend-icon")], 2), ne("div", {
    class: H(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
    ref: "wrapEl",
    onClick: t[2] || (t[2] = function () {
      return e.handleFocus && e.handleFocus(...arguments);
    })
  }, [Q(o, {
    "var-select-cover": "",
    class: H(e.classes(e.n("menu"))),
    "offset-y": e.offsetY,
    disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
    "default-style": !1,
    show: e.isFocus,
    "onUpdate:show": t[1] || (t[1] = i => e.isFocus = i),
    onClose: e.handleBlur
  }, {
    menu: he(() => [ne("div", {
      ref: "menuEl",
      class: H(e.classes(e.n("scroller"), e.n("$-elevation--3")))
    }, [xe(e.$slots, "default")], 2)]),
    default: he(() => [ne("div", {
      class: H(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
      style: ve({
        textAlign: e.textAlign,
        color: e.textColor
      })
    }, [ne("div", {
      class: H(e.n("label"))
    }, [e.isEmptyModelValue ? Ee("v-if", !0) : xe(e.$slots, "selected", {
      key: 0
    }, () => [e.multiple ? (q(), re(Ue, {
      key: 0
    }, [e.chip ? (q(), re("div", {
      key: 0,
      class: H(e.n("chips"))
    }, [(q(!0), re(Ue, null, Qo(e.labels, i => (q(), ze(r, {
      class: H(e.n("chip")),
      "var-select-cover": "",
      closable: "",
      size: "small",
      type: e.errorMessage ? "danger" : void 0,
      key: i,
      onClick: t[0] || (t[0] = oi(() => {}, ["stop"])),
      onClose: () => e.handleClose(i)
    }, {
      default: he(() => [Le(De(i), 1)]),
      _: 2
    }, 1032, ["class", "type", "onClose"]))), 128))], 2)) : (q(), re("div", {
      key: 1,
      class: H(e.n("values"))
    }, De(e.labels.join(e.separator)), 3))], 2112)) : (q(), re("span", e2, De(e.label), 1))])], 2), xe(e.$slots, "arrow-icon", {
      focus: e.isFocus
    }, () => [Q(n, {
      class: H(e.classes(e.n("arrow"), [e.isFocus, e.n("--arrow-rotate")])),
      "var-select-cover": "",
      name: "menu-down",
      transition: 300
    }, null, 8, ["class"])])], 6), ne("label", {
      class: H(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
      style: ve({
        color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
      })
    }, De(e.placeholder), 7)]),
    _: 3
  }, 8, ["class", "offset-y", "disabled", "show", "onClose"])], 2), ne("div", {
    class: H(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
  }, [xe(e.$slots, "append-icon", {}, () => [e.clearable ? (q(), ze(n, {
    key: 0,
    class: H(e.n("clear-icon")),
    name: "close-circle",
    size: "14px",
    onClick: e.handleClear
  }, null, 8, ["class", "onClick"])) : Ee("v-if", !0)])], 2)], 6), e.line ? (q(), re("div", {
    key: 0,
    class: H(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
    style: ve({
      background: e.errorMessage ? void 0 : e.blurColor
    })
  }, [ne("div", {
    class: H(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
    style: ve({
      background: e.errorMessage ? void 0 : e.focusColor
    })
  }, null, 6)], 6)) : Ee("v-if", !0), Q(a, {
    "error-message": e.errorMessage
  }, null, 8, ["error-message"])], 2);
}
var ld = Fe({
  name: "VarSelect",
  components: {
    VarIcon: Bt,
    VarMenu: $o,
    VarChip: In,
    VarFormDetails: sn
  },
  props: Zy,
  setup(e) {
    var t = Y(null),
      r = Y(!1),
      n = pe(() => e.multiple),
      o = pe(() => e.focusColor),
      a = Y(""),
      i = Y([]),
      s = pe(() => Kt(e.modelValue)),
      u = Y("0px"),
      l = Y(0),
      {
        bindForm: c,
        form: d
      } = fi(),
      {
        length: f,
        options: p,
        bindOptions: v
      } = ty(),
      {
        errorMessage: h,
        validateWithTrigger: g,
        validate: b,
        resetValidation: m
      } = li(),
      x = Y(null),
      y = () => {
        var {
          multiple: R,
          modelValue: $
        } = e;
        if (R) {
          var I = $;
          i.value = I.map(_);
        }
        !R && !Kt($) && (a.value = _($)), !R && Kt($) && (a.value = "");
      },
      w = R => {
        Rt(() => {
          var {
            validateTrigger: $,
            rules: I,
            modelValue: T
          } = e;
          g($, R, I, T);
        });
      },
      C = R => {
        var {
          value: $,
          label: I
        } = R;
        return $.value != null ? $.value : I.value;
      },
      _ = R => {
        var $,
          I,
          T = p.find(U => {
            var {
              value: j
            } = U;
            return j.value === R;
          });
        return T || (T = p.find(U => {
          var {
            label: j
          } = U;
          return j.value === R;
        })), ($ = (I = T) == null ? void 0 : I.label.value) != null ? $ : "";
      },
      F = () => {
        var {
          hint: R,
          modelValue: $
        } = e;
        if (!R && !Kt($)) return Li("--placeholder-hidden");
        if (R && (!Kt($) || r.value)) return Li("--placeholder-hint");
      },
      O = () => t.value && window.getComputedStyle(t.value).width || "0px",
      B = () => {
        var {
          disabled: R,
          readonly: $,
          onFocus: I
        } = e;
        d != null && d.disabled.value || d != null && d.readonly.value || R || $ || (u.value = O(), l.value = zt(e.offsetY), r.value = !0, te(I), w("onFocus"));
      },
      A = () => {
        var {
          disabled: R,
          readonly: $,
          onBlur: I
        } = e;
        d != null && d.disabled.value || d != null && d.readonly.value || R || $ || (te(I), w("onBlur"));
      },
      D = R => {
        var {
          disabled: $,
          readonly: I,
          multiple: T,
          onChange: U
        } = e;
        if (!(d != null && d.disabled.value || d != null && d.readonly.value || $ || I)) {
          var j = T ? p.filter(G => {
            var {
              selected: me
            } = G;
            return me.value;
          }).map(C) : C(R);
          te(e["onUpdate:modelValue"], j), te(U, j), w("onChange"), !T && (r.value = !1);
        }
      },
      k = () => {
        var {
          disabled: R,
          readonly: $,
          multiple: I,
          clearable: T,
          onClear: U
        } = e;
        if (!(d != null && d.disabled.value || d != null && d.readonly.value || R || $ || !T)) {
          var j = I ? [] : void 0;
          te(e["onUpdate:modelValue"], j), te(U, j), w("onClear");
        }
      },
      X = R => {
        var {
          disabled: $,
          onClick: I
        } = e;
        d != null && d.disabled.value || $ || (te(I, R), w("onClick"));
      },
      ie = R => {
        var {
          disabled: $,
          readonly: I,
          modelValue: T,
          onClose: U
        } = e;
        if (!(d != null && d.disabled.value || d != null && d.readonly.value || $ || I)) {
          var j = T,
            G = p.find(we => {
              var {
                label: ge
              } = we;
              return ge.value === R;
            }),
            me = j.filter(we => {
              var ge;
              return we !== ((ge = G.value.value) != null ? ge : G.label.value);
            });
          te(e["onUpdate:modelValue"], me), te(U, me), w("onClose");
        }
      },
      ae = () => {
        var {
          multiple: R,
          modelValue: $
        } = e;
        if (R) {
          var I = $;
          p.forEach(T => T.sync(I.includes(C(T))));
        } else p.forEach(T => T.sync($ === C(T)));
        y();
      },
      V = () => {
        u.value = O(), l.value = zt(e.offsetY), r.value = !0;
      },
      z = () => {
        r.value = !1;
      },
      se = () => b(e.rules, e.modelValue),
      fe = () => {
        te(e["onUpdate:modelValue"], e.multiple ? [] : void 0), m();
      };
    Se(() => e.multiple, () => {
      var {
        multiple: R,
        modelValue: $
      } = e;
      if (R && !Zt($)) throw Error("The modelValue must be an array when multiple is true");
    }), Se(() => e.modelValue, ae, {
      deep: !0
    }), Se(() => f.value, ae);
    var L = {
      wrapWidth: pe(() => u.value),
      multiple: n,
      focusColor: o,
      onSelect: D,
      reset: fe,
      validate: se,
      resetValidation: m
    };
    return v(L), te(c, L), {
      wrapEl: t,
      offsetY: l,
      isFocus: r,
      errorMessage: h,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: a,
      labels: i,
      isEmptyModelValue: s,
      menuEl: x,
      n: Li,
      classes: Jy,
      computePlaceholderState: F,
      handleFocus: B,
      handleBlur: A,
      handleClear: k,
      handleClick: X,
      handleClose: ie,
      reset: fe,
      validate: se,
      resetValidation: m,
      focus: V,
      blur: z
    };
  }
});
ld.render = t2;
const zo = ld;
zo.install = function (e) {
  e.component(zo.name, zo);
};
var r2 = zo;
function Es() {
  return Es = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Es.apply(this, arguments);
}
function n2(e) {
  var t = ["top", "center", "bottom"];
  return t.includes(e);
}
function o2(e) {
  return pl.includes(e);
}
var ud = {
    type: {
      type: String,
      validator: o2
    },
    position: {
      type: String,
      default: "top",
      validator: n2
    },
    content: {
      type: String
    },
    contentClass: {
      type: String
    },
    duration: {
      type: Number,
      default: 3000
    },
    vertical: {
      type: Boolean,
      default: !1
    },
    loadingType: bt(vr, "type"),
    loadingSize: bt(vr, "size"),
    loadingRadius: bt(vr, "radius"),
    loadingColor: Es({}, bt(vr, "color"), {
      default: "currentColor"
    }),
    lockScroll: {
      type: Boolean,
      default: !1
    },
    show: {
      type: Boolean,
      default: !1
    },
    teleport: {
      type: String,
      default: "body"
    },
    forbidClick: {
      type: Boolean,
      default: !1
    },
    onOpen: ce(),
    onOpened: ce(),
    onClose: ce(),
    onClosed: ce(),
    "onUpdate:show": ce(),
    _update: {
      type: String
    }
  },
  {
    n: a2,
    classes: i2
  } = Pe("snackbar"),
  s2 = {
    success: "checkbox-marked-circle",
    warning: "warning",
    info: "information",
    error: "error",
    loading: ""
  };
function l2(e, t) {
  var r = Ve("var-icon"),
    n = Ve("var-loading");
  return Ze((q(), re("div", {
    class: H(e.n()),
    style: ve({
      pointerEvents: e.isForbidClick ? "auto" : "none",
      zIndex: e.zIndex
    })
  }, [ne("div", {
    class: H(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
    style: ve({
      zIndex: e.zIndex
    })
  }, [ne("div", {
    class: H([e.n("content"), e.contentClass])
  }, [xe(e.$slots, "default", {}, () => [Le(De(e.content), 1)])], 2), ne("div", {
    class: H(e.n("action"))
  }, [e.iconName ? (q(), ze(r, {
    key: 0,
    name: e.iconName
  }, null, 8, ["name"])) : Ee("v-if", !0), e.type === "loading" ? (q(), ze(n, {
    key: 1,
    type: e.loadingType,
    size: e.loadingSize,
    color: e.loadingColor,
    radius: e.loadingRadius
  }, null, 8, ["type", "size", "color", "radius"])) : Ee("v-if", !0), xe(e.$slots, "action")], 2)], 6)], 6)), [[Nt, e.show]]);
}
var cd = Fe({
  name: "VarSnackbarCore",
  components: {
    VarLoading: an,
    VarIcon: Bt
  },
  props: ud,
  setup(e) {
    var t = Y(null),
      {
        zIndex: r
      } = no(() => e.show, 1);
    ui(() => e.show, () => e.lockScroll);
    var n = pe(() => e.type === "loading" || e.forbidClick),
      o = pe(() => e.type ? s2[e.type] : ""),
      a = () => {
        t.value = setTimeout(() => {
          e.type !== "loading" && te(e["onUpdate:show"], !1);
        }, e.duration);
      };
    return Se(() => e.show, i => {
      i ? (te(e.onOpen), a()) : i === !1 && (clearTimeout(t.value), te(e.onClose));
    }), Se(() => e._update, () => {
      clearTimeout(t.value), a();
    }), xt(() => {
      e.show && (te(e.onOpen), a());
    }), {
      SNACKBAR_TYPE: pl,
      n: a2,
      classes: i2,
      zIndex: r,
      iconName: o,
      isForbidClick: n
    };
  }
});
cd.render = l2;
const fd = cd;
var {
  n: u2
} = Pe("snackbar");
function c2(e, t) {
  var r = Ve("var-snackbar-core");
  return q(), ze(Ja, {
    to: e.teleport,
    disabled: e.disabled
  }, [Q(it, {
    name: e.n() + "-fade",
    onAfterEnter: e.onOpened,
    onAfterLeave: e.onClosed
  }, {
    default: he(() => [Q(r, Ft(e.$props, {
      class: e.n("transition")
    }), {
      action: he(() => [xe(e.$slots, "action")]),
      default: he(() => [xe(e.$slots, "default", {}, () => [Le(De(e.content), 1)])]),
      _: 3
    }, 16, ["class"])]),
    _: 3
  }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 8, ["to", "disabled"]);
}
var dd = Fe({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: fd
  },
  props: ud,
  setup() {
    var {
      disabled: e
    } = nl();
    return {
      n: u2,
      disabled: e
    };
  }
});
dd.render = c2;
const un = dd;
function Zn() {
  return Zn = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Zn.apply(this, arguments);
}
function f2(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Er(e);
}
var pl = ["loading", "success", "warning", "info", "error"],
  U0 = 0,
  Bs = !1,
  pd,
  xn = !1,
  wt = ht([]),
  d2 = {
    type: void 0,
    content: "",
    position: "top",
    duration: 3000,
    vertical: !1,
    contentClass: void 0,
    loadingType: "circle",
    loadingSize: "normal",
    lockScroll: !1,
    teleport: "body",
    forbidClick: !1,
    onOpen: () => {},
    onOpened: () => {},
    onClose: () => {},
    onClosed: () => {}
  },
  p2 = {
    name: "var-snackbar-fade",
    tag: "div",
    class: "var-transition-group"
  },
  v2 = {
    setup() {
      return () => {
        var e = wt.map(r => {
            var {
                id: n,
                reactiveSnackOptions: o,
                _update: a
              } = r,
              i = document.querySelector(".var-transition-group");
            o.forbidClick || o.type === "loading" ? i.classList.add("var-pointer-auto") : i.classList.remove("var-pointer-auto"), xn && (o.position = "top");
            var s = xn ? "relative" : "absolute",
              u = Zn({
                position: s
              }, y2(o.position));
            return Q(fd, Ft(o, {
              key: n,
              style: u,
              "data-id": n,
              _update: a,
              show: o.show,
              "onUpdate:show": l => o.show = l
            }), null);
          }),
          t = Gt.zIndex;
        return Q(Oh, Ft(p2, {
          style: {
            zIndex: t
          },
          onAfterEnter: h2,
          onAfterLeave: x2
        }), f2(e) ? e : {
          default: () => [e]
        });
      };
    }
  },
  Wr = function (e) {
    var t = St(e) || qr(e) ? {
        content: String(e)
      } : e,
      r = ht(Zn({}, d2, t));
    r.show = !0, Bs || (Bs = !0, pd = df(v2).unmountInstance);
    var {
        length: n
      } = wt,
      o = {
        id: U0++,
        reactiveSnackOptions: r
      };
    if (n === 0 || xn) m2(o);else {
      var a = "update-" + U0;
      g2(r, a);
    }
    return {
      clear() {
        !xn && wt.length ? wt[0].reactiveSnackOptions.show = !1 : r.show = !1;
      }
    };
  };
pl.forEach(e => {
  Wr[e] = t => (jh(t) ? t.type = e : t = {
    content: t,
    type: e
  }, Wr(t));
});
Wr.install = function (e) {
  e.component(un.name, un);
};
Wr.allowMultiple = function (e) {
  e === void 0 && (e = !1), e !== xn && (wt.forEach(t => {
    t.reactiveSnackOptions.show = !1;
  }), xn = e);
};
Wr.clear = function () {
  wt.forEach(e => {
    e.reactiveSnackOptions.show = !1;
  });
};
Wr.Component = un;
function h2(e) {
  var t = e.getAttribute("data-id"),
    r = wt.find(n => n.id === Et(t));
  r && te(r.reactiveSnackOptions.onOpened);
}
function x2(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var t = e.getAttribute("data-id"),
    r = wt.find(o => o.id === Et(t));
  r && (r.animationEnd = !0, te(r.reactiveSnackOptions.onClosed));
  var n = wt.every(o => o.animationEnd);
  n && (te(pd), wt = ht([]), Bs = !1);
}
function m2(e) {
  wt.push(e);
}
function g2(e, t) {
  var [r] = wt;
  r.reactiveSnackOptions = Zn({}, r.reactiveSnackOptions, e), r._update = t;
}
function y2(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
un.install = function (e) {
  e.component(un.name, un);
};
const Ye = Wr;
var vd = e => ["mini", "small", "normal", "large"].includes(e),
  b2 = e => vd(e) || Zt(e) || qr(e) || St(e),
  C2 = e => ["start", "end", "center", "space-around", "space-between"].includes(e),
  E2 = {
    align: {
      type: String
    },
    size: {
      type: [String, Number, Array],
      default: "normal",
      validator: b2
    },
    wrap: {
      type: Boolean,
      default: !0
    },
    direction: {
      type: String,
      default: "row"
    },
    justify: {
      type: String,
      default: "start",
      validator: C2
    },
    inline: {
      type: Boolean,
      default: !1
    }
  };
function dt(e) {
  return "calc(" + e + " / 2)";
}
function B2(e, t, r) {
  var {
      direction: n,
      justify: o,
      index: a,
      lastIndex: i
    } = r,
    s = "0";
  return n === "row" && (o === "start" || o === "center" || o === "end" ? a !== i ? s = dt(e) + " " + t + " " + dt(e) + " 0" : s = dt(e) + " 0" : o === "space-around" ? s = dt(e) + " " + dt(t) : o === "space-between" && (a === 0 ? s = dt(e) + " " + dt(t) + " " + dt(e) + " 0" : a === i ? s = dt(e) + " 0 " + dt(e) + " " + dt(t) : s = dt(e) + " " + dt(t))), n === "column" && a !== i && (s = "0 0 " + e + " 0"), s;
}
var {
  n: Ii,
  classes: A2
} = Pe("space");
const Ho = Fe({
  name: "VarSpace",
  props: E2,
  setup(e, t) {
    var {
        slots: r
      } = t,
      n = (a, i) => i ? ["var(--space-size-" + a + "-y)", "var(--space-size-" + a + "-x)"] : Zt(a) ? a.map(Ge) : [Ge(a), Ge(a)],
      o = a => a === "start" || a === "end" ? "flex-" + a : a;
    return () => {
      var a,
        {
          inline: i,
          justify: s,
          align: u,
          wrap: l,
          direction: c,
          size: d
        } = e,
        f = (a = te(r.default)) != null ? a : [],
        p = vd(d),
        [v, h] = n(d, p),
        g = x => {
          var y = [];
          return x.forEach(w => {
            if (w.type !== vt) {
              if (w.type === Ue && Zt(w.children)) {
                w.children.forEach(C => {
                  y.push(C);
                });
                return;
              }
              y.push(w);
            }
          }), y;
        };
      f = g(f);
      var b = f.length - 1,
        m = f.map((x, y) => {
          var w = B2(v, h, {
            direction: c,
            justify: s,
            index: y,
            lastIndex: b
          });
          return Q("div", {
            style: {
              margin: w
            }
          }, [x]);
        });
      return Q("div", {
        class: A2(Ii(), Ii("$--box"), [i, Ii("--inline")]),
        style: {
          flexDirection: c,
          justifyContent: o(s),
          alignItems: o(u),
          flexWrap: l ? "wrap" : "nowrap",
          margin: c === "row" ? "calc(-1 * " + v + " / 2) 0" : void 0
        }
      }, [m]);
    };
  }
});
Ho.install = function (e) {
  e.component(Ho.name, Ho);
};
var w2 = Ho,
  F2 = {
    name: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    onClick: ce()
  },
  hd = Symbol("TABS_BIND_TAB_KEY"),
  xd = Symbol("TABS_COUNT_TAB_KEY");
function S2() {
  var {
      childProviders: e,
      bindChildren: t
    } = si(hd),
    {
      length: r
    } = rl(xd);
  return {
    length: r,
    tabList: e,
    bindTabList: t
  };
}
function D2() {
  var {
      parentProvider: e,
      bindParent: t
    } = ro(hd),
    {
      index: r
    } = ii(xd);
  if (!e || !t || !r) throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: t
  };
}
var {
  n: yo,
  classes: _2
} = Pe("tab");
function k2(e, t) {
  var r = Cr("ripple");
  return Ze((q(), re("div", {
    class: H(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
    ref: "tabEl",
    style: ve({
      color: e.computeColorStyle()
    }),
    onClick: t[0] || (t[0] = function () {
      return e.handleClick && e.handleClick(...arguments);
    })
  }, [xe(e.$slots, "default")], 6)), [[r, {
    disabled: e.disabled
  }]]);
}
var md = Fe({
  name: "VarTab",
  directives: {
    Ripple: Kr
  },
  props: F2,
  setup(e) {
    var t = Y(null),
      r = pe(() => e.name),
      n = pe(() => e.disabled),
      o = pe(() => t.value),
      {
        index: a,
        tabs: i,
        bindTabs: s
      } = D2(),
      {
        onTabClick: u,
        active: l,
        activeColor: c,
        inactiveColor: d,
        disabledColor: f,
        itemDirection: p,
        resize: v
      } = i,
      h = {
        name: r,
        index: a,
        disabled: n,
        element: o
      };
    s(h);
    var g = () => {
        var {
          disabled: x,
          name: y
        } = e;
        return x ? f.value : l.value === y || l.value === (a == null ? void 0 : a.value) ? c.value : d.value;
      },
      b = () => {
        var {
          disabled: x,
          name: y
        } = e;
        return x ? yo("$-tab--disabled") : l.value === y || l.value === (a == null ? void 0 : a.value) ? yo("$-tab--active") : yo("$-tab--inactive");
      },
      m = x => {
        var {
          disabled: y,
          name: w,
          onClick: C
        } = e;
        y || (te(C, w ?? a.value, x), u(h));
      };
    return Se(() => e.name, v), Se(() => e.disabled, v), {
      n: yo,
      classes: _2,
      tabEl: t,
      active: l,
      activeColor: c,
      inactiveColor: d,
      itemDirection: p,
      computeColorStyle: g,
      computeColorClass: b,
      handleClick: m
    };
  }
});
md.render = k2;
const Mo = md;
Mo.install = function (e) {
  e.component(Mo.name, Mo);
};
var O2 = Mo;
function V0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var T2 = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: V0
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: V0
  },
  fixedBottom: {
    type: Boolean,
    default: !1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  disabledColor: {
    type: String
  },
  color: {
    type: String
  },
  indicatorColor: {
    type: String
  },
  indicatorSize: {
    type: [String, Number]
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: bt(Oo, "cssMode"),
  stickyZIndex: bt(Oo, "zIndex"),
  offsetTop: bt(Oo, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: ce(),
  onChange: ce(),
  "onUpdate:active": ce()
};
function j0(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i),
      u = s.value;
  } catch (l) {
    r(l);
    return;
  }
  s.done ? t(u) : Promise.resolve(u).then(n, o);
}
function W0(e) {
  return function () {
    var t = this,
      r = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(t, r);
      function i(u) {
        j0(a, n, o, i, s, "next", u);
      }
      function s(u) {
        j0(a, n, o, i, s, "throw", u);
      }
      i(void 0);
    });
  };
}
var {
  n: R2,
  classes: P2
} = Pe("tabs");
function $2(e, t) {
  return q(), ze(Ys(e.sticky ? e.n("$-sticky") : e.Transition), {
    ref: e.sticky ? "stickyComponent" : void 0,
    "css-mode": e.sticky ? e.stickyCssMode : void 0,
    "offset-top": e.sticky ? e.offsetTop : void 0,
    "z-index": e.sticky ? e.stickyZIndex : void 0
  }, {
    default: he(() => [ne("div", Ft({
      class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
      style: {
        background: e.color
      }
    }, e.$attrs), [ne("div", {
      ref: "scrollerEl",
      class: H(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
    }, [xe(e.$slots, "default"), ne("div", {
      class: H(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
      style: ve({
        width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
        height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
        transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")",
        background: e.indicatorColor || e.activeColor
      })
    }, null, 6)], 2)], 16)]),
    _: 3
  }, 8, ["css-mode", "offset-top", "z-index"]);
}
var gd = Fe({
  name: "VarTabs",
  components: {
    VarSticky: To
  },
  inheritAttrs: !1,
  props: T2,
  setup(e) {
    var t = Y("0px"),
      r = Y("0px"),
      n = Y("0px"),
      o = Y("0px"),
      a = Y(!1),
      i = Y(null),
      s = pe(() => e.active),
      u = pe(() => e.activeColor),
      l = pe(() => e.inactiveColor),
      c = pe(() => e.disabledColor),
      d = pe(() => e.itemDirection),
      f = Y(null),
      {
        tabList: p,
        bindTabList: v,
        length: h
      } = S2(),
      g = B => {
        var A,
          D = (A = B.name.value) != null ? A : B.index.value,
          {
            active: k,
            onChange: X,
            onClick: ie
          } = e;
        te(e["onUpdate:active"], D), te(ie, D), D !== k && te(X, D);
      },
      b = () => p.find(B => {
        var {
          name: A
        } = B;
        return e.active === A.value;
      }),
      m = B => p.find(A => {
        var {
          index: D
        } = A;
        return (B ?? e.active) === D.value;
      }),
      x = () => {
        if (h.value !== 0) {
          var {
            active: B
          } = e;
          if (qr(B)) {
            var A = B > h.value - 1 ? h.value - 1 : 0;
            return te(e["onUpdate:active"], A), m(A);
          }
        }
      },
      y = () => {
        a.value = p.length >= 5;
      },
      w = B => {
        var {
            element: A
          } = B,
          D = A.value;
        e.layoutDirection === "horizontal" ? (t.value = (D == null ? void 0 : D.offsetWidth) + "px", n.value = (D == null ? void 0 : D.offsetLeft) + "px") : (r.value = (D == null ? void 0 : D.offsetHeight) + "px", o.value = (D == null ? void 0 : D.offsetTop) + "px");
      },
      C = B => {
        var {
          element: A
        } = B;
        if (a.value) {
          var D = i.value,
            k = A.value;
          if (e.layoutDirection === "horizontal") {
            var X = k.offsetLeft + k.offsetWidth / 2 - D.offsetWidth / 2;
            as(D, {
              left: X,
              animation: ns
            });
          } else {
            var ie = k.offsetTop + k.offsetHeight / 2 - D.offsetHeight / 2;
            as(D, {
              top: ie,
              animation: ns
            });
          }
        }
      },
      _ = () => {
        var B = b() || m() || x();
        !B || B.disabled.value || (y(), w(B), C(B));
      },
      F = function () {
        var B = W0(function* () {
          e.sticky && f.value && (yield f.value.resize());
        });
        return function () {
          return B.apply(this, arguments);
        };
      }(),
      O = {
        active: s,
        activeColor: u,
        inactiveColor: l,
        disabledColor: c,
        itemDirection: d,
        resize: _,
        onTabClick: g
      };
    return v(O), Se(() => h.value, W0(function* () {
      yield dn(), _();
    })), Se(() => e.active, _), xt(() => window.addEventListener("resize", _)), Fr(() => window.removeEventListener("resize", _)), {
      stickyComponent: f,
      indicatorWidth: t,
      indicatorHeight: r,
      indicatorX: n,
      indicatorY: o,
      scrollable: a,
      scrollerEl: i,
      Transition: it,
      toSizeUnit: Ge,
      n: R2,
      classes: P2,
      resize: _,
      resizeSticky: F
    };
  }
});
gd.render = $2;
const Uo = gd;
Uo.install = function (e) {
  e.component(Uo.name, Uo);
};
var L2 = Uo; /*!
             * vue-router v4.1.6
             * (c) 2022 Eduardo San Martin Morote
             * @license MIT
             */
const Zr = typeof window < "u";
function I2(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const Ie = Object.assign;
function Ni(e, t) {
  const r = {};
  for (const n in t) {
    const o = t[n];
    r[n] = Pt(o) ? o.map(e) : e(o);
  }
  return r;
}
const Hn = () => {},
  Pt = Array.isArray,
  N2 = /\/$/,
  z2 = e => e.replace(N2, "");
function zi(e, t, r = "/") {
  let n,
    o = {},
    a = "",
    i = "";
  const s = t.indexOf("#");
  let u = t.indexOf("?");
  return s < u && s >= 0 && (u = -1), u > -1 && (n = t.slice(0, u), a = t.slice(u + 1, s > -1 ? s : t.length), o = e(a)), s > -1 && (n = n || t.slice(0, s), i = t.slice(s, t.length)), n = V2(n ?? t, r), {
    fullPath: n + (a && "?") + a + i,
    path: n,
    query: o,
    hash: i
  };
}
function H2(e, t) {
  const r = t.query ? e(t.query) : "";
  return t.path + (r && "?") + r + (t.hash || "");
}
function q0(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function M2(e, t, r) {
  const n = t.matched.length - 1,
    o = r.matched.length - 1;
  return n > -1 && n === o && mn(t.matched[n], r.matched[o]) && yd(t.params, r.params) && e(t.query) === e(r.query) && t.hash === r.hash;
}
function mn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function yd(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r in e) if (!U2(e[r], t[r])) return !1;
  return !0;
}
function U2(e, t) {
  return Pt(e) ? K0(e, t) : Pt(t) ? K0(t, e) : e === t;
}
function K0(e, t) {
  return Pt(t) ? e.length === t.length && e.every((r, n) => r === t[n]) : e.length === 1 && e[0] === t;
}
function V2(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const r = t.split("/"),
    n = e.split("/");
  let o = r.length - 1,
    a,
    i;
  for (a = 0; a < n.length; a++) if (i = n[a], i !== ".") if (i === "..") o > 1 && o--;else break;
  return r.slice(0, o).join("/") + "/" + n.slice(a - (a === n.length ? 1 : 0)).join("/");
}
var Jn;
(function (e) {
  e.pop = "pop", e.push = "push";
})(Jn || (Jn = {}));
var Mn;
(function (e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(Mn || (Mn = {}));
function j2(e) {
  if (!e) if (Zr) {
    const t = document.querySelector("base");
    e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
  } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), z2(e);
}
const W2 = /^[^#]+#/;
function q2(e, t) {
  return e.replace(W2, "#") + t;
}
function K2(e, t) {
  const r = document.documentElement.getBoundingClientRect(),
    n = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: n.left - r.left - (t.left || 0),
    top: n.top - r.top - (t.top || 0)
  };
}
const gi = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset
});
function G2(e) {
  let t;
  if ("el" in e) {
    const r = e.el,
      n = typeof r == "string" && r.startsWith("#"),
      o = typeof r == "string" ? n ? document.getElementById(r.slice(1)) : document.querySelector(r) : r;
    if (!o) return;
    t = K2(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset);
}
function G0(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const As = new Map();
function Y2(e, t) {
  As.set(e, t);
}
function X2(e) {
  const t = As.get(e);
  return As.delete(e), t;
}
let Q2 = () => location.protocol + "//" + location.host;
function bd(e, t) {
  const {
      pathname: r,
      search: n,
      hash: o
    } = t,
    a = e.indexOf("#");
  if (a > -1) {
    let s = o.includes(e.slice(a)) ? e.slice(a).length : 1,
      u = o.slice(s);
    return u[0] !== "/" && (u = "/" + u), q0(u, "");
  }
  return q0(r, e) + n + o;
}
function Z2(e, t, r, n) {
  let o = [],
    a = [],
    i = null;
  const s = ({
    state: f
  }) => {
    const p = bd(e, location),
      v = r.value,
      h = t.value;
    let g = 0;
    if (f) {
      if (r.value = p, t.value = f, i && i === v) {
        i = null;
        return;
      }
      g = h ? f.position - h.position : 0;
    } else n(p);
    o.forEach(b => {
      b(r.value, v, {
        delta: g,
        type: Jn.pop,
        direction: g ? g > 0 ? Mn.forward : Mn.back : Mn.unknown
      });
    });
  };
  function u() {
    i = r.value;
  }
  function l(f) {
    o.push(f);
    const p = () => {
      const v = o.indexOf(f);
      v > -1 && o.splice(v, 1);
    };
    return a.push(p), p;
  }
  function c() {
    const {
      history: f
    } = window;
    f.state && f.replaceState(Ie({}, f.state, {
      scroll: gi()
    }), "");
  }
  function d() {
    for (const f of a) f();
    a = [], window.removeEventListener("popstate", s), window.removeEventListener("beforeunload", c);
  }
  return window.addEventListener("popstate", s), window.addEventListener("beforeunload", c), {
    pauseListeners: u,
    listen: l,
    destroy: d
  };
}
function Y0(e, t, r, n = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: r,
    replaced: n,
    position: window.history.length,
    scroll: o ? gi() : null
  };
}
function J2(e) {
  const {
      history: t,
      location: r
    } = window,
    n = {
      value: bd(e, r)
    },
    o = {
      value: t.state
    };
  o.value || a(n.value, {
    back: null,
    current: n.value,
    forward: null,
    position: t.length - 1,
    replaced: !0,
    scroll: null
  }, !0);
  function a(u, l, c) {
    const d = e.indexOf("#"),
      f = d > -1 ? (r.host && document.querySelector("base") ? e : e.slice(d)) + u : Q2() + e + u;
    try {
      t[c ? "replaceState" : "pushState"](l, "", f), o.value = l;
    } catch (p) {
      console.error(p), r[c ? "replace" : "assign"](f);
    }
  }
  function i(u, l) {
    const c = Ie({}, t.state, Y0(o.value.back, u, o.value.forward, !0), l, {
      position: o.value.position
    });
    a(u, c, !0), n.value = u;
  }
  function s(u, l) {
    const c = Ie({}, o.value, t.state, {
      forward: u,
      scroll: gi()
    });
    a(c.current, c, !0);
    const d = Ie({}, Y0(n.value, u, null), {
      position: c.position + 1
    }, l);
    a(u, d, !1), n.value = u;
  }
  return {
    location: n,
    state: o,
    push: s,
    replace: i
  };
}
function eb(e) {
  e = j2(e);
  const t = J2(e),
    r = Z2(e, t.state, t.location, t.replace);
  function n(a, i = !0) {
    i || r.pauseListeners(), history.go(a);
  }
  const o = Ie({
    location: "",
    base: e,
    go: n,
    createHref: q2.bind(null, e)
  }, t, r);
  return Object.defineProperty(o, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(o, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), o;
}
function tb(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Cd(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const lr = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  Ed = Symbol("");
var X0;
(function (e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(X0 || (X0 = {}));
function gn(e, t) {
  return Ie(new Error(), {
    type: e,
    [Ed]: !0
  }, t);
}
function jt(e, t) {
  return e instanceof Error && Ed in e && (t == null || !!(e.type & t));
}
const Q0 = "[^/]+?",
  rb = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
  },
  nb = /[.+*?^${}()[\]/\\]/g;
function ob(e, t) {
  const r = Ie({}, rb, t),
    n = [];
  let o = r.start ? "^" : "";
  const a = [];
  for (const l of e) {
    const c = l.length ? [] : [90];
    r.strict && !l.length && (o += "/");
    for (let d = 0; d < l.length; d++) {
      const f = l[d];
      let p = 40 + (r.sensitive ? 0.25 : 0);
      if (f.type === 0) d || (o += "/"), o += f.value.replace(nb, "\\$&"), p += 40;else if (f.type === 1) {
        const {
          value: v,
          repeatable: h,
          optional: g,
          regexp: b
        } = f;
        a.push({
          name: v,
          repeatable: h,
          optional: g
        });
        const m = b || Q0;
        if (m !== Q0) {
          p += 10;
          try {
            new RegExp(`(${m})`);
          } catch (y) {
            throw new Error(`Invalid custom RegExp for param "${v}" (${m}): ` + y.message);
          }
        }
        let x = h ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`;
        d || (x = g && l.length < 2 ? `(?:/${x})` : "/" + x), g && (x += "?"), o += x, p += 20, g && (p += -8), h && (p += -20), m === ".*" && (p += -50);
      }
      c.push(p);
    }
    n.push(c);
  }
  if (r.strict && r.end) {
    const l = n.length - 1;
    n[l][n[l].length - 1] += 0.7000000000000001;
  }
  r.strict || (o += "/?"), r.end ? o += "$" : r.strict && (o += "(?:/|$)");
  const i = new RegExp(o, r.sensitive ? "" : "i");
  function s(l) {
    const c = l.match(i),
      d = {};
    if (!c) return null;
    for (let f = 1; f < c.length; f++) {
      const p = c[f] || "",
        v = a[f - 1];
      d[v.name] = p && v.repeatable ? p.split("/") : p;
    }
    return d;
  }
  function u(l) {
    let c = "",
      d = !1;
    for (const f of e) {
      (!d || !c.endsWith("/")) && (c += "/"), d = !1;
      for (const p of f) if (p.type === 0) c += p.value;else if (p.type === 1) {
        const {
            value: v,
            repeatable: h,
            optional: g
          } = p,
          b = v in l ? l[v] : "";
        if (Pt(b) && !h) throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);
        const m = Pt(b) ? b.join("/") : b;
        if (!m) if (g) f.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : d = !0);else throw new Error(`Missing required param "${v}"`);
        c += m;
      }
    }
    return c || "/";
  }
  return {
    re: i,
    score: n,
    keys: a,
    parse: s,
    stringify: u
  };
}
function ab(e, t) {
  let r = 0;
  for (; r < e.length && r < t.length;) {
    const n = t[r] - e[r];
    if (n) return n;
    r++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function ib(e, t) {
  let r = 0;
  const n = e.score,
    o = t.score;
  for (; r < n.length && r < o.length;) {
    const a = ab(n[r], o[r]);
    if (a) return a;
    r++;
  }
  if (Math.abs(o.length - n.length) === 1) {
    if (Z0(n)) return 1;
    if (Z0(o)) return -1;
  }
  return o.length - n.length;
}
function Z0(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const sb = {
    type: 0,
    value: ""
  },
  lb = /[a-zA-Z0-9_]/;
function ub(e) {
  if (!e) return [[]];
  if (e === "/") return [[sb]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${r})/"${l}": ${p}`);
  }
  let r = 0,
    n = r;
  const o = [];
  let a;
  function i() {
    a && o.push(a), a = [];
  }
  let s = 0,
    u,
    l = "",
    c = "";
  function d() {
    l && (r === 0 ? a.push({
      type: 0,
      value: l
    }) : r === 1 || r === 2 || r === 3 ? (a.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
      type: 1,
      value: l,
      regexp: c,
      repeatable: u === "*" || u === "+",
      optional: u === "*" || u === "?"
    })) : t("Invalid state to consume buffer"), l = "");
  }
  function f() {
    l += u;
  }
  for (; s < e.length;) {
    if (u = e[s++], u === "\\" && r !== 2) {
      n = r, r = 4;
      continue;
    }
    switch (r) {
      case 0:
        u === "/" ? (l && d(), i()) : u === ":" ? (d(), r = 1) : f();
        break;
      case 4:
        f(), r = n;
        break;
      case 1:
        u === "(" ? r = 2 : lb.test(u) ? f() : (d(), r = 0, u !== "*" && u !== "?" && u !== "+" && s--);
        break;
      case 2:
        u === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + u : r = 3 : c += u;
        break;
      case 3:
        d(), r = 0, u !== "*" && u !== "?" && u !== "+" && s--, c = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return r === 2 && t(`Unfinished custom RegExp for param "${l}"`), d(), i(), o;
}
function cb(e, t, r) {
  const n = ob(ub(e.path), r),
    o = Ie(n, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function fb(e, t) {
  const r = [],
    n = new Map();
  t = tu({
    strict: !1,
    end: !0,
    sensitive: !1
  }, t);
  function o(c) {
    return n.get(c);
  }
  function a(c, d, f) {
    const p = !f,
      v = db(c);
    v.aliasOf = f && f.record;
    const h = tu(t, c),
      g = [v];
    if ("alias" in c) {
      const x = typeof c.alias == "string" ? [c.alias] : c.alias;
      for (const y of x) g.push(Ie({}, v, {
        components: f ? f.record.components : v.components,
        path: y,
        aliasOf: f ? f.record : v
      }));
    }
    let b, m;
    for (const x of g) {
      const {
        path: y
      } = x;
      if (d && y[0] !== "/") {
        const w = d.record.path,
          C = w[w.length - 1] === "/" ? "" : "/";
        x.path = d.record.path + (y && C + y);
      }
      if (b = cb(x, d, h), f ? f.alias.push(b) : (m = m || b, m !== b && m.alias.push(b), p && c.name && !eu(b) && i(c.name)), v.children) {
        const w = v.children;
        for (let C = 0; C < w.length; C++) a(w[C], b, f && f.children[C]);
      }
      f = f || b, (b.record.components && Object.keys(b.record.components).length || b.record.name || b.record.redirect) && u(b);
    }
    return m ? () => {
      i(m);
    } : Hn;
  }
  function i(c) {
    if (Cd(c)) {
      const d = n.get(c);
      d && (n.delete(c), r.splice(r.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i));
    } else {
      const d = r.indexOf(c);
      d > -1 && (r.splice(d, 1), c.record.name && n.delete(c.record.name), c.children.forEach(i), c.alias.forEach(i));
    }
  }
  function s() {
    return r;
  }
  function u(c) {
    let d = 0;
    for (; d < r.length && ib(c, r[d]) >= 0 && (c.record.path !== r[d].record.path || !Bd(c, r[d]));) d++;
    r.splice(d, 0, c), c.record.name && !eu(c) && n.set(c.record.name, c);
  }
  function l(c, d) {
    let f,
      p = {},
      v,
      h;
    if ("name" in c && c.name) {
      if (f = n.get(c.name), !f) throw gn(1, {
        location: c
      });
      h = f.record.name, p = Ie(J0(d.params, f.keys.filter(m => !m.optional).map(m => m.name)), c.params && J0(c.params, f.keys.map(m => m.name))), v = f.stringify(p);
    } else if ("path" in c) v = c.path, f = r.find(m => m.re.test(v)), f && (p = f.parse(v), h = f.record.name);else {
      if (f = d.name ? n.get(d.name) : r.find(m => m.re.test(d.path)), !f) throw gn(1, {
        location: c,
        currentLocation: d
      });
      h = f.record.name, p = Ie({}, d.params, c.params), v = f.stringify(p);
    }
    const g = [];
    let b = f;
    for (; b;) g.unshift(b.record), b = b.parent;
    return {
      name: h,
      path: v,
      params: p,
      matched: g,
      meta: vb(g)
    };
  }
  return e.forEach(c => a(c)), {
    addRoute: a,
    resolve: l,
    removeRoute: i,
    getRoutes: s,
    getRecordMatcher: o
  };
}
function J0(e, t) {
  const r = {};
  for (const n of t) n in e && (r[n] = e[n]);
  return r;
}
function db(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: pb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && {
      default: e.component
    }
  };
}
function pb(e) {
  const t = {},
    r = e.props || !1;
  if ("component" in e) t.default = r;else for (const n in e.components) t[n] = typeof r == "boolean" ? r : r[n];
  return t;
}
function eu(e) {
  for (; e;) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function vb(e) {
  return e.reduce((t, r) => Ie(t, r.meta), {});
}
function tu(e, t) {
  const r = {};
  for (const n in e) r[n] = n in t ? t[n] : e[n];
  return r;
}
function Bd(e, t) {
  return t.children.some(r => r === e || Bd(e, r));
}
const Ad = /#/g,
  hb = /&/g,
  xb = /\//g,
  mb = /=/g,
  gb = /\?/g,
  wd = /\+/g,
  yb = /%5B/g,
  bb = /%5D/g,
  Fd = /%5E/g,
  Cb = /%60/g,
  Sd = /%7B/g,
  Eb = /%7C/g,
  Dd = /%7D/g,
  Bb = /%20/g;
function vl(e) {
  return encodeURI("" + e).replace(Eb, "|").replace(yb, "[").replace(bb, "]");
}
function Ab(e) {
  return vl(e).replace(Sd, "{").replace(Dd, "}").replace(Fd, "^");
}
function ws(e) {
  return vl(e).replace(wd, "%2B").replace(Bb, "+").replace(Ad, "%23").replace(hb, "%26").replace(Cb, "`").replace(Sd, "{").replace(Dd, "}").replace(Fd, "^");
}
function wb(e) {
  return ws(e).replace(mb, "%3D");
}
function Fb(e) {
  return vl(e).replace(Ad, "%23").replace(gb, "%3F");
}
function Sb(e) {
  return e == null ? "" : Fb(e).replace(xb, "%2F");
}
function na(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Db(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const n = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let o = 0; o < n.length; ++o) {
    const a = n[o].replace(wd, " "),
      i = a.indexOf("="),
      s = na(i < 0 ? a : a.slice(0, i)),
      u = i < 0 ? null : na(a.slice(i + 1));
    if (s in t) {
      let l = t[s];
      Pt(l) || (l = t[s] = [l]), l.push(u);
    } else t[s] = u;
  }
  return t;
}
function ru(e) {
  let t = "";
  for (let r in e) {
    const n = e[r];
    if (r = wb(r), n == null) {
      n !== void 0 && (t += (t.length ? "&" : "") + r);
      continue;
    }
    (Pt(n) ? n.map(a => a && ws(a)) : [n && ws(n)]).forEach(a => {
      a !== void 0 && (t += (t.length ? "&" : "") + r, a != null && (t += "=" + a));
    });
  }
  return t;
}
function _b(e) {
  const t = {};
  for (const r in e) {
    const n = e[r];
    n !== void 0 && (t[r] = Pt(n) ? n.map(o => o == null ? null : "" + o) : n == null ? n : "" + n);
  }
  return t;
}
const kb = Symbol(""),
  nu = Symbol(""),
  yi = Symbol(""),
  hl = Symbol(""),
  Fs = Symbol("");
function kn() {
  let e = [];
  function t(n) {
    return e.push(n), () => {
      const o = e.indexOf(n);
      o > -1 && e.splice(o, 1);
    };
  }
  function r() {
    e = [];
  }
  return {
    add: t,
    list: () => e,
    reset: r
  };
}
function dr(e, t, r, n, o) {
  const a = n && (n.enterCallbacks[o] = n.enterCallbacks[o] || []);
  return () => new Promise((i, s) => {
    const u = d => {
        d === !1 ? s(gn(4, {
          from: r,
          to: t
        })) : d instanceof Error ? s(d) : tb(d) ? s(gn(2, {
          from: t,
          to: d
        })) : (a && n.enterCallbacks[o] === a && typeof d == "function" && a.push(d), i());
      },
      l = e.call(n && n.instances[o], t, r, u);
    let c = Promise.resolve(l);
    e.length < 3 && (c = c.then(u)), c.catch(d => s(d));
  });
}
function Hi(e, t, r, n) {
  const o = [];
  for (const a of e) for (const i in a.components) {
    let s = a.components[i];
    if (!(t !== "beforeRouteEnter" && !a.instances[i])) if (Ob(s)) {
      const l = (s.__vccOpts || s)[t];
      l && o.push(dr(l, r, n, a, i));
    } else {
      let u = s();
      o.push(() => u.then(l => {
        if (!l) return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${a.path}"`));
        const c = I2(l) ? l.default : l;
        a.components[i] = c;
        const f = (c.__vccOpts || c)[t];
        return f && dr(f, r, n, a, i)();
      }));
    }
  }
  return o;
}
function Ob(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ou(e) {
  const t = pt(yi),
    r = pt(hl),
    n = pe(() => t.resolve(qe(e.to))),
    o = pe(() => {
      const {
          matched: u
        } = n.value,
        {
          length: l
        } = u,
        c = u[l - 1],
        d = r.matched;
      if (!c || !d.length) return -1;
      const f = d.findIndex(mn.bind(null, c));
      if (f > -1) return f;
      const p = au(u[l - 2]);
      return l > 1 && au(c) === p && d[d.length - 1].path !== p ? d.findIndex(mn.bind(null, u[l - 2])) : f;
    }),
    a = pe(() => o.value > -1 && $b(r.params, n.value.params)),
    i = pe(() => o.value > -1 && o.value === r.matched.length - 1 && yd(r.params, n.value.params));
  function s(u = {}) {
    return Pb(u) ? t[qe(e.replace) ? "replace" : "push"](qe(e.to)).catch(Hn) : Promise.resolve();
  }
  return {
    route: n,
    href: pe(() => n.value.href),
    isActive: a,
    isExactActive: i,
    navigate: s
  };
}
const Tb = Fe({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [String, Object],
        required: !0
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink: ou,
    setup(e, {
      slots: t
    }) {
      const r = ht(ou(e)),
        {
          options: n
        } = pt(yi),
        o = pe(() => ({
          [iu(e.activeClass, n.linkActiveClass, "router-link-active")]: r.isActive,
          [iu(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
        }));
      return () => {
        const a = t.default && t.default(r);
        return e.custom ? a : ni("a", {
          "aria-current": r.isExactActive ? e.ariaCurrentValue : null,
          href: r.href,
          onClick: r.navigate,
          class: o.value
        }, a);
      };
    }
  }),
  Rb = Tb;
function Pb(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function $b(e, t) {
  for (const r in t) {
    const n = t[r],
      o = e[r];
    if (typeof n == "string") {
      if (n !== o) return !1;
    } else if (!Pt(o) || o.length !== n.length || n.some((a, i) => a !== o[i])) return !1;
  }
  return !0;
}
function au(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const iu = (e, t, r) => e ?? t ?? r,
  Lb = Fe({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(e, {
      attrs: t,
      slots: r
    }) {
      const n = pt(Fs),
        o = pe(() => e.route || n.value),
        a = pt(nu, 0),
        i = pe(() => {
          let l = qe(a);
          const {
            matched: c
          } = o.value;
          let d;
          for (; (d = c[l]) && !d.components;) l++;
          return l;
        }),
        s = pe(() => o.value.matched[i.value]);
      on(nu, pe(() => i.value + 1)), on(kb, s), on(Fs, o);
      const u = Y();
      return Se(() => [u.value, s.value, e.name], ([l, c, d], [f, p, v]) => {
        c && (c.instances[d] = l, p && p !== c && l && l === f && (c.leaveGuards.size || (c.leaveGuards = p.leaveGuards), c.updateGuards.size || (c.updateGuards = p.updateGuards))), l && c && (!p || !mn(c, p) || !f) && (c.enterCallbacks[d] || []).forEach(h => h(l));
      }, {
        flush: "post"
      }), () => {
        const l = o.value,
          c = e.name,
          d = s.value,
          f = d && d.components[c];
        if (!f) return su(r.default, {
          Component: f,
          route: l
        });
        const p = d.props[c],
          v = p ? p === !0 ? l.params : typeof p == "function" ? p(l) : p : null,
          g = ni(f, Ie({}, v, t, {
            onVnodeUnmounted: b => {
              b.component.isUnmounted && (d.instances[c] = null);
            },
            ref: u
          }));
        return su(r.default, {
          Component: g,
          route: l
        }) || g;
      };
    }
  });
function su(e, t) {
  if (!e) return null;
  const r = e(t);
  return r.length === 1 ? r[0] : r;
}
const _d = Lb;
function Ib(e) {
  const t = fb(e.routes, e),
    r = e.parseQuery || Db,
    n = e.stringifyQuery || ru,
    o = e.history,
    a = kn(),
    i = kn(),
    s = kn(),
    u = tv(lr);
  let l = lr;
  Zr && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const c = Ni.bind(null, T => "" + T),
    d = Ni.bind(null, Sb),
    f = Ni.bind(null, na);
  function p(T, U) {
    let j, G;
    return Cd(T) ? (j = t.getRecordMatcher(T), G = U) : G = T, t.addRoute(G, j);
  }
  function v(T) {
    const U = t.getRecordMatcher(T);
    U && t.removeRoute(U);
  }
  function h() {
    return t.getRoutes().map(T => T.record);
  }
  function g(T) {
    return !!t.getRecordMatcher(T);
  }
  function b(T, U) {
    if (U = Ie({}, U || u.value), typeof T == "string") {
      const E = zi(r, T, U.path),
        S = t.resolve({
          path: E.path
        }, U),
        P = o.createHref(E.fullPath);
      return Ie(E, S, {
        params: f(S.params),
        hash: na(E.hash),
        redirectedFrom: void 0,
        href: P
      });
    }
    let j;
    if ("path" in T) j = Ie({}, T, {
      path: zi(r, T.path, U.path).path
    });else {
      const E = Ie({}, T.params);
      for (const S in E) E[S] == null && delete E[S];
      j = Ie({}, T, {
        params: d(T.params)
      }), U.params = d(U.params);
    }
    const G = t.resolve(j, U),
      me = T.hash || "";
    G.params = c(f(G.params));
    const we = H2(n, Ie({}, T, {
        hash: Ab(me),
        path: G.path
      })),
      ge = o.createHref(we);
    return Ie({
      fullPath: we,
      hash: me,
      query: n === ru ? _b(T.query) : T.query || {}
    }, G, {
      redirectedFrom: void 0,
      href: ge
    });
  }
  function m(T) {
    return typeof T == "string" ? zi(r, T, u.value.path) : Ie({}, T);
  }
  function x(T, U) {
    if (l !== T) return gn(8, {
      from: U,
      to: T
    });
  }
  function y(T) {
    return _(T);
  }
  function w(T) {
    return y(Ie(m(T), {
      replace: !0
    }));
  }
  function C(T) {
    const U = T.matched[T.matched.length - 1];
    if (U && U.redirect) {
      const {
        redirect: j
      } = U;
      let G = typeof j == "function" ? j(T) : j;
      return typeof G == "string" && (G = G.includes("?") || G.includes("#") ? G = m(G) : {
        path: G
      }, G.params = {}), Ie({
        query: T.query,
        hash: T.hash,
        params: "path" in G ? {} : T.params
      }, G);
    }
  }
  function _(T, U) {
    const j = l = b(T),
      G = u.value,
      me = T.state,
      we = T.force,
      ge = T.replace === !0,
      E = C(j);
    if (E) return _(Ie(m(E), {
      state: typeof E == "object" ? Ie({}, me, E.state) : me,
      force: we,
      replace: ge
    }), U || j);
    const S = j;
    S.redirectedFrom = U;
    let P;
    return !we && M2(n, G, j) && (P = gn(16, {
      to: S,
      from: G
    }), fe(G, G, !0, !1)), (P ? Promise.resolve(P) : O(S, G)).catch(N => jt(N) ? jt(N, 2) ? N : se(N) : V(N, S, G)).then(N => {
      if (N) {
        if (jt(N, 2)) return _(Ie({
          replace: ge
        }, m(N.to), {
          state: typeof N.to == "object" ? Ie({}, me, N.to.state) : me,
          force: we
        }), U || S);
      } else N = A(S, G, !0, ge, me);
      return B(S, G, N), N;
    });
  }
  function F(T, U) {
    const j = x(T, U);
    return j ? Promise.reject(j) : Promise.resolve();
  }
  function O(T, U) {
    let j;
    const [G, me, we] = Nb(T, U);
    j = Hi(G.reverse(), "beforeRouteLeave", T, U);
    for (const E of G) E.leaveGuards.forEach(S => {
      j.push(dr(S, T, U));
    });
    const ge = F.bind(null, T, U);
    return j.push(ge), Xr(j).then(() => {
      j = [];
      for (const E of a.list()) j.push(dr(E, T, U));
      return j.push(ge), Xr(j);
    }).then(() => {
      j = Hi(me, "beforeRouteUpdate", T, U);
      for (const E of me) E.updateGuards.forEach(S => {
        j.push(dr(S, T, U));
      });
      return j.push(ge), Xr(j);
    }).then(() => {
      j = [];
      for (const E of T.matched) if (E.beforeEnter && !U.matched.includes(E)) if (Pt(E.beforeEnter)) for (const S of E.beforeEnter) j.push(dr(S, T, U));else j.push(dr(E.beforeEnter, T, U));
      return j.push(ge), Xr(j);
    }).then(() => (T.matched.forEach(E => E.enterCallbacks = {}), j = Hi(we, "beforeRouteEnter", T, U), j.push(ge), Xr(j))).then(() => {
      j = [];
      for (const E of i.list()) j.push(dr(E, T, U));
      return j.push(ge), Xr(j);
    }).catch(E => jt(E, 8) ? E : Promise.reject(E));
  }
  function B(T, U, j) {
    for (const G of s.list()) G(T, U, j);
  }
  function A(T, U, j, G, me) {
    const we = x(T, U);
    if (we) return we;
    const ge = U === lr,
      E = Zr ? history.state : {};
    j && (G || ge ? o.replace(T.fullPath, Ie({
      scroll: ge && E && E.scroll
    }, me)) : o.push(T.fullPath, me)), u.value = T, fe(T, U, j, ge), se();
  }
  let D;
  function k() {
    D || (D = o.listen((T, U, j) => {
      if (!I.listening) return;
      const G = b(T),
        me = C(G);
      if (me) {
        _(Ie(me, {
          replace: !0
        }), G).catch(Hn);
        return;
      }
      l = G;
      const we = u.value;
      Zr && Y2(G0(we.fullPath, j.delta), gi()), O(G, we).catch(ge => jt(ge, 12) ? ge : jt(ge, 2) ? (_(ge.to, G).then(E => {
        jt(E, 20) && !j.delta && j.type === Jn.pop && o.go(-1, !1);
      }).catch(Hn), Promise.reject()) : (j.delta && o.go(-j.delta, !1), V(ge, G, we))).then(ge => {
        ge = ge || A(G, we, !1), ge && (j.delta && !jt(ge, 8) ? o.go(-j.delta, !1) : j.type === Jn.pop && jt(ge, 20) && o.go(-1, !1)), B(G, we, ge);
      }).catch(Hn);
    }));
  }
  let X = kn(),
    ie = kn(),
    ae;
  function V(T, U, j) {
    se(T);
    const G = ie.list();
    return G.length ? G.forEach(me => me(T, U, j)) : console.error(T), Promise.reject(T);
  }
  function z() {
    return ae && u.value !== lr ? Promise.resolve() : new Promise((T, U) => {
      X.add([T, U]);
    });
  }
  function se(T) {
    return ae || (ae = !T, k(), X.list().forEach(([U, j]) => T ? j(T) : U()), X.reset()), T;
  }
  function fe(T, U, j, G) {
    const {
      scrollBehavior: me
    } = e;
    if (!Zr || !me) return Promise.resolve();
    const we = !j && X2(G0(T.fullPath, 0)) || (G || !j) && history.state && history.state.scroll || null;
    return Rt().then(() => me(T, U, we)).then(ge => ge && G2(ge)).catch(ge => V(ge, T, U));
  }
  const L = T => o.go(T);
  let R;
  const $ = new Set(),
    I = {
      currentRoute: u,
      listening: !0,
      addRoute: p,
      removeRoute: v,
      hasRoute: g,
      getRoutes: h,
      resolve: b,
      options: e,
      push: y,
      replace: w,
      go: L,
      back: () => L(-1),
      forward: () => L(1),
      beforeEach: a.add,
      beforeResolve: i.add,
      afterEach: s.add,
      onError: ie.add,
      isReady: z,
      install(T) {
        const U = this;
        T.component("RouterLink", Rb), T.component("RouterView", _d), T.config.globalProperties.$router = U, Object.defineProperty(T.config.globalProperties, "$route", {
          enumerable: !0,
          get: () => qe(u)
        }), Zr && !R && u.value === lr && (R = !0, y(o.location).catch(me => {}));
        const j = {};
        for (const me in lr) j[me] = pe(() => u.value[me]);
        T.provide(yi, U), T.provide(hl, ht(j)), T.provide(Fs, u);
        const G = T.unmount;
        $.add(T), T.unmount = function () {
          $.delete(T), $.size < 1 && (l = lr, D && D(), D = null, u.value = lr, R = !1, ae = !1), G();
        };
      }
    };
  return I;
}
function Xr(e) {
  return e.reduce((t, r) => t.then(() => r()), Promise.resolve());
}
function Nb(e, t) {
  const r = [],
    n = [],
    o = [],
    a = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < a; i++) {
    const s = t.matched[i];
    s && (e.matched.find(l => mn(l, s)) ? n.push(s) : r.push(s));
    const u = e.matched[i];
    u && (t.matched.find(l => mn(l, u)) || o.push(u));
  }
  return [r, n, o];
}
function kd() {
  return pt(yi);
}
function zb() {
  return pt(hl);
}
const Od = {
  __name: "loading",
  setup(e) {
    const t = Y(!1),
      r = () => {
        Rt(() => {
          t.value = !0;
        });
      };
    return (n, o) => {
      const a = q1,
        i = cy;
      return q(), re("main", null, [Q(i, {
        show: t.value,
        "onUpdate:show": o[0] || (o[0] = s => t.value = s),
        onClick: r
      }, {
        default: he(() => [Q(a, {
          type: "rect",
          color: "#ff9f00"
        })]),
        _: 1
      }, 8, ["show"])]);
    };
  }
};
function Td(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const {
    toString: Rd
  } = Object.prototype,
  {
    getPrototypeOf: xl
  } = Object,
  ml = (e => t => {
    const r = Rd.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  tr = e => (e = e.toLowerCase(), t => ml(t) === e),
  bi = e => t => typeof t === e,
  {
    isArray: wn
  } = Array,
  eo = bi("undefined");
function Hb(e) {
  return e !== null && !eo(e) && e.constructor !== null && !eo(e.constructor) && wr(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Pd = tr("ArrayBuffer");
function Mb(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Pd(e.buffer), t;
}
const Ub = bi("string"),
  wr = bi("function"),
  $d = bi("number"),
  gl = e => e !== null && typeof e == "object",
  Vb = e => e === !0 || e === !1,
  Vo = e => {
    if (ml(e) !== "object") return !1;
    const t = xl(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  },
  jb = tr("Date"),
  Wb = tr("File"),
  qb = tr("Blob"),
  Kb = tr("FileList"),
  Gb = e => gl(e) && wr(e.pipe),
  Yb = e => {
    const t = "[object FormData]";
    return e && (typeof FormData == "function" && e instanceof FormData || Rd.call(e) === t || wr(e.toString) && e.toString() === t);
  },
  Xb = tr("URLSearchParams"),
  Qb = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ao(e, t, {
  allOwnKeys: r = !1
} = {}) {
  if (e === null || typeof e > "u") return;
  let n, o;
  if (typeof e != "object" && (e = [e]), wn(e)) for (n = 0, o = e.length; n < o; n++) t.call(null, e[n], n, e);else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = a.length;
    let s;
    for (n = 0; n < i; n++) s = a[n], t.call(null, e[s], s, e);
  }
}
function Ld(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length,
    o;
  for (; n-- > 0;) if (o = r[n], t === o.toLowerCase()) return o;
  return null;
}
const Id = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
  Nd = e => !eo(e) && e !== Id;
function Ss() {
  const {
      caseless: e
    } = Nd(this) && this || {},
    t = {},
    r = (n, o) => {
      const a = e && Ld(t, o) || o;
      Vo(t[a]) && Vo(n) ? t[a] = Ss(t[a], n) : Vo(n) ? t[a] = Ss({}, n) : wn(n) ? t[a] = n.slice() : t[a] = n;
    };
  for (let n = 0, o = arguments.length; n < o; n++) arguments[n] && ao(arguments[n], r);
  return t;
}
const Zb = (e, t, r, {
    allOwnKeys: n
  } = {}) => (ao(t, (o, a) => {
    r && wr(o) ? e[a] = Td(o, r) : e[a] = o;
  }, {
    allOwnKeys: n
  }), e),
  Jb = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  eC = (e, t, r, n) => {
    e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
      value: t.prototype
    }), r && Object.assign(e.prototype, r);
  },
  tC = (e, t, r, n) => {
    let o, a, i;
    const s = {};
    if (t = t || {}, e == null) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0;) i = o[a], (!n || n(i, e, t)) && !s[i] && (t[i] = e[i], s[i] = !0);
      e = r !== !1 && xl(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  },
  rC = (e, t, r) => {
    e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
    const n = e.indexOf(t, r);
    return n !== -1 && n === r;
  },
  nC = e => {
    if (!e) return null;
    if (wn(e)) return e;
    let t = e.length;
    if (!$d(t)) return null;
    const r = new Array(t);
    for (; t-- > 0;) r[t] = e[t];
    return r;
  },
  oC = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && xl(Uint8Array)),
  aC = (e, t) => {
    const n = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = n.next()) && !o.done;) {
      const a = o.value;
      t.call(e, a[0], a[1]);
    }
  },
  iC = (e, t) => {
    let r;
    const n = [];
    for (; (r = e.exec(t)) !== null;) n.push(r);
    return n;
  },
  sC = tr("HTMLFormElement"),
  lC = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (r, n, o) {
    return n.toUpperCase() + o;
  }),
  lu = (({
    hasOwnProperty: e
  }) => (t, r) => e.call(t, r))(Object.prototype),
  uC = tr("RegExp"),
  zd = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e),
      n = {};
    ao(r, (o, a) => {
      t(o, a, e) !== !1 && (n[a] = o);
    }), Object.defineProperties(e, n);
  },
  cC = e => {
    zd(e, (t, r) => {
      if (wr(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1) return !1;
      const n = e[r];
      if (wr(n)) {
        if (t.enumerable = !1, "writable" in t) {
          t.writable = !1;
          return;
        }
        t.set || (t.set = () => {
          throw Error("Can not rewrite read-only method '" + r + "'");
        });
      }
    });
  },
  fC = (e, t) => {
    const r = {},
      n = o => {
        o.forEach(a => {
          r[a] = !0;
        });
      };
    return wn(e) ? n(e) : n(String(e).split(t)), r;
  },
  dC = () => {},
  pC = (e, t) => (e = +e, Number.isFinite(e) ? e : t),
  Mi = "abcdefghijklmnopqrstuvwxyz",
  uu = "0123456789",
  Hd = {
    DIGIT: uu,
    ALPHA: Mi,
    ALPHA_DIGIT: Mi + Mi.toUpperCase() + uu
  },
  vC = (e = 16, t = Hd.ALPHA_DIGIT) => {
    let r = "";
    const {
      length: n
    } = t;
    for (; e--;) r += t[Math.random() * n | 0];
    return r;
  };
function hC(e) {
  return !!(e && wr(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const xC = e => {
    const t = new Array(10),
      r = (n, o) => {
        if (gl(n)) {
          if (t.indexOf(n) >= 0) return;
          if (!("toJSON" in n)) {
            t[o] = n;
            const a = wn(n) ? [] : {};
            return ao(n, (i, s) => {
              const u = r(i, o + 1);
              !eo(u) && (a[s] = u);
            }), t[o] = void 0, a;
          }
        }
        return n;
      };
    return r(e, 0);
  },
  M = {
    isArray: wn,
    isArrayBuffer: Pd,
    isBuffer: Hb,
    isFormData: Yb,
    isArrayBufferView: Mb,
    isString: Ub,
    isNumber: $d,
    isBoolean: Vb,
    isObject: gl,
    isPlainObject: Vo,
    isUndefined: eo,
    isDate: jb,
    isFile: Wb,
    isBlob: qb,
    isRegExp: uC,
    isFunction: wr,
    isStream: Gb,
    isURLSearchParams: Xb,
    isTypedArray: oC,
    isFileList: Kb,
    forEach: ao,
    merge: Ss,
    extend: Zb,
    trim: Qb,
    stripBOM: Jb,
    inherits: eC,
    toFlatObject: tC,
    kindOf: ml,
    kindOfTest: tr,
    endsWith: rC,
    toArray: nC,
    forEachEntry: aC,
    matchAll: iC,
    isHTMLForm: sC,
    hasOwnProperty: lu,
    hasOwnProp: lu,
    reduceDescriptors: zd,
    freezeMethods: cC,
    toObjectSet: fC,
    toCamelCase: lC,
    noop: dC,
    toFiniteNumber: pC,
    findKey: Ld,
    global: Id,
    isContextDefined: Nd,
    ALPHABET: Hd,
    generateString: vC,
    isSpecCompliantForm: hC,
    toJSONObject: xC
  };
function Te(e, t, r, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o);
}
M.inherits(Te, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: M.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Md = Te.prototype,
  Ud = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
  Ud[e] = {
    value: e
  };
});
Object.defineProperties(Te, Ud);
Object.defineProperty(Md, "isAxiosError", {
  value: !0
});
Te.from = (e, t, r, n, o, a) => {
  const i = Object.create(Md);
  return M.toFlatObject(e, i, function (u) {
    return u !== Error.prototype;
  }, s => s !== "isAxiosError"), Te.call(i, e.message, t, r, n, o), i.cause = e, i.name = e.name, a && Object.assign(i, a), i;
};
const mC = null;
function Ds(e) {
  return M.isPlainObject(e) || M.isArray(e);
}
function Vd(e) {
  return M.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function cu(e, t, r) {
  return e ? e.concat(t).map(function (o, a) {
    return o = Vd(o), !r && a ? "[" + o + "]" : o;
  }).join(r ? "." : "") : t;
}
function gC(e) {
  return M.isArray(e) && !e.some(Ds);
}
const yC = M.toFlatObject(M, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Ci(e, t, r) {
  if (!M.isObject(e)) throw new TypeError("target must be an object");
  t = t || new FormData(), r = M.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function (h, g) {
    return !M.isUndefined(g[h]);
  });
  const n = r.metaTokens,
    o = r.visitor || c,
    a = r.dots,
    i = r.indexes,
    u = (r.Blob || typeof Blob < "u" && Blob) && M.isSpecCompliantForm(t);
  if (!M.isFunction(o)) throw new TypeError("visitor must be a function");
  function l(v) {
    if (v === null) return "";
    if (M.isDate(v)) return v.toISOString();
    if (!u && M.isBlob(v)) throw new Te("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(v) || M.isTypedArray(v) ? u && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function c(v, h, g) {
    let b = v;
    if (v && !g && typeof v == "object") {
      if (M.endsWith(h, "{}")) h = n ? h : h.slice(0, -2), v = JSON.stringify(v);else if (M.isArray(v) && gC(v) || (M.isFileList(v) || M.endsWith(h, "[]")) && (b = M.toArray(v))) return h = Vd(h), b.forEach(function (x, y) {
        !(M.isUndefined(x) || x === null) && t.append(i === !0 ? cu([h], y, a) : i === null ? h : h + "[]", l(x));
      }), !1;
    }
    return Ds(v) ? !0 : (t.append(cu(g, h, a), l(v)), !1);
  }
  const d = [],
    f = Object.assign(yC, {
      defaultVisitor: c,
      convertValue: l,
      isVisitable: Ds
    });
  function p(v, h) {
    if (!M.isUndefined(v)) {
      if (d.indexOf(v) !== -1) throw Error("Circular reference detected in " + h.join("."));
      d.push(v), M.forEach(v, function (b, m) {
        (!(M.isUndefined(b) || b === null) && o.call(t, b, M.isString(m) ? m.trim() : m, h, f)) === !0 && p(b, h ? h.concat(m) : [m]);
      }), d.pop();
    }
  }
  if (!M.isObject(e)) throw new TypeError("data must be an object");
  return p(e), t;
}
function fu(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return t[n];
  });
}
function yl(e, t) {
  this._pairs = [], e && Ci(e, this, t);
}
const jd = yl.prototype;
jd.append = function (t, r) {
  this._pairs.push([t, r]);
};
jd.toString = function (t) {
  const r = t ? function (n) {
    return t.call(this, n, fu);
  } : fu;
  return this._pairs.map(function (o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function bC(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Wd(e, t, r) {
  if (!t) return e;
  const n = r && r.encode || bC,
    o = r && r.serialize;
  let a;
  if (o ? a = o(t, r) : a = M.isURLSearchParams(t) ? t.toString() : new yl(t, r).toString(n), a) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class CC {
  constructor() {
    this.handlers = [];
  }
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    M.forEach(this.handlers, function (n) {
      n !== null && t(n);
    });
  }
}
const du = CC,
  qd = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  EC = typeof URLSearchParams < "u" ? URLSearchParams : yl,
  BC = FormData,
  AC = (() => {
    let e;
    return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
  })(),
  wC = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
  Ht = {
    isBrowser: !0,
    classes: {
      URLSearchParams: EC,
      FormData: BC,
      Blob
    },
    isStandardBrowserEnv: AC,
    isStandardBrowserWebWorkerEnv: wC,
    protocols: ["http", "https", "file", "blob", "url", "data"]
  };
function FC(e, t) {
  return Ci(e, new Ht.classes.URLSearchParams(), Object.assign({
    visitor: function (r, n, o, a) {
      return Ht.isNode && M.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function SC(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0]);
}
function DC(e) {
  const t = {},
    r = Object.keys(e);
  let n;
  const o = r.length;
  let a;
  for (n = 0; n < o; n++) a = r[n], t[a] = e[a];
  return t;
}
function Kd(e) {
  function t(r, n, o, a) {
    let i = r[a++];
    const s = Number.isFinite(+i),
      u = a >= r.length;
    return i = !i && M.isArray(o) ? o.length : i, u ? (M.hasOwnProp(o, i) ? o[i] = [o[i], n] : o[i] = n, !s) : ((!o[i] || !M.isObject(o[i])) && (o[i] = []), t(r, n, o[i], a) && M.isArray(o[i]) && (o[i] = DC(o[i])), !s);
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const r = {};
    return M.forEachEntry(e, (n, o) => {
      t(SC(n), o, r, 0);
    }), r;
  }
  return null;
}
const _C = {
  "Content-Type": void 0
};
function kC(e, t, r) {
  if (M.isString(e)) try {
    return (t || JSON.parse)(e), M.trim(e);
  } catch (n) {
    if (n.name !== "SyntaxError") throw n;
  }
  return (r || JSON.stringify)(e);
}
const Ei = {
  transitional: qd,
  adapter: ["xhr", "http"],
  transformRequest: [function (t, r) {
    const n = r.getContentType() || "",
      o = n.indexOf("application/json") > -1,
      a = M.isObject(t);
    if (a && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t)) return o && o ? JSON.stringify(Kd(t)) : t;
    if (M.isArrayBuffer(t) || M.isBuffer(t) || M.isStream(t) || M.isFile(t) || M.isBlob(t)) return t;
    if (M.isArrayBufferView(t)) return t.buffer;
    if (M.isURLSearchParams(t)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1) return FC(t, this.formSerializer).toString();
      if ((s = M.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Ci(s ? {
          "files[]": t
        } : t, u && new u(), this.formSerializer);
      }
    }
    return a || o ? (r.setContentType("application/json", !1), kC(t)) : t;
  }],
  transformResponse: [function (t) {
    const r = this.transitional || Ei.transitional,
      n = r && r.forcedJSONParsing,
      o = this.responseType === "json";
    if (t && M.isString(t) && (n && !this.responseType || o)) {
      const i = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (i) throw s.name === "SyntaxError" ? Te.from(s, Te.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ht.classes.FormData,
    Blob: Ht.classes.Blob
  },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
M.forEach(["delete", "get", "head"], function (t) {
  Ei.headers[t] = {};
});
M.forEach(["post", "put", "patch"], function (t) {
  Ei.headers[t] = M.merge(_C);
});
const bl = Ei,
  OC = M.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
  TC = e => {
    const t = {};
    let r, n, o;
    return e && e.split(`
`).forEach(function (i) {
      o = i.indexOf(":"), r = i.substring(0, o).trim().toLowerCase(), n = i.substring(o + 1).trim(), !(!r || t[r] && OC[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
    }), t;
  },
  pu = Symbol("internals");
function On(e) {
  return e && String(e).trim().toLowerCase();
}
function jo(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(jo) : String(e);
}
function RC(e) {
  const t = Object.create(null),
    r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e);) t[n[1]] = n[2];
  return t;
}
function PC(e) {
  return /^[-_a-zA-Z]+$/.test(e.trim());
}
function Ui(e, t, r, n) {
  if (M.isFunction(n)) return n.call(this, t, r);
  if (M.isString(t)) {
    if (M.isString(n)) return t.indexOf(n) !== -1;
    if (M.isRegExp(n)) return n.test(t);
  }
}
function $C(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function LC(e, t) {
  const r = M.toCamelCase(" " + t);
  ["get", "set", "has"].forEach(n => {
    Object.defineProperty(e, n + r, {
      value: function (o, a, i) {
        return this[n].call(this, t, o, a, i);
      },
      configurable: !0
    });
  });
}
class Bi {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const o = this;
    function a(s, u, l) {
      const c = On(u);
      if (!c) throw new Error("header name must be a non-empty string");
      const d = M.findKey(o, c);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || u] = jo(s));
    }
    const i = (s, u) => M.forEach(s, (l, c) => a(l, c, u));
    return M.isPlainObject(t) || t instanceof this.constructor ? i(t, r) : M.isString(t) && (t = t.trim()) && !PC(t) ? i(TC(t), r) : t != null && a(r, t, n), this;
  }
  get(t, r) {
    if (t = On(t), t) {
      const n = M.findKey(this, t);
      if (n) {
        const o = this[n];
        if (!r) return o;
        if (r === !0) return RC(o);
        if (M.isFunction(r)) return r.call(this, o, n);
        if (M.isRegExp(r)) return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = On(t), t) {
      const n = M.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || Ui(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let o = !1;
    function a(i) {
      if (i = On(i), i) {
        const s = M.findKey(n, i);
        s && (!r || Ui(n, n[s], s, r)) && (delete n[s], o = !0);
      }
    }
    return M.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length,
      o = !1;
    for (; n--;) {
      const a = r[n];
      (!t || Ui(this, this[a], a, t)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const r = this,
      n = {};
    return M.forEach(this, (o, a) => {
      const i = M.findKey(n, a);
      if (i) {
        r[i] = jo(o), delete r[a];
        return;
      }
      const s = t ? $C(a) : String(a).trim();
      s !== a && delete r[a], r[s] = jo(o), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = Object.create(null);
    return M.forEach(this, (n, o) => {
      n != null && n !== !1 && (r[o] = t && M.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach(o => n.set(o)), n;
  }
  static accessor(t) {
    const n = (this[pu] = this[pu] = {
        accessors: {}
      }).accessors,
      o = this.prototype;
    function a(i) {
      const s = On(i);
      n[s] || (LC(o, i), n[s] = !0);
    }
    return M.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
Bi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
M.freezeMethods(Bi.prototype);
M.freezeMethods(Bi);
const Xt = Bi;
function Vi(e, t) {
  const r = this || bl,
    n = t || r,
    o = Xt.from(n.headers);
  let a = n.data;
  return M.forEach(e, function (s) {
    a = s.call(r, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function Gd(e) {
  return !!(e && e.__CANCEL__);
}
function io(e, t, r) {
  Te.call(this, e ?? "canceled", Te.ERR_CANCELED, t, r), this.name = "CanceledError";
}
M.inherits(io, Te, {
  __CANCEL__: !0
});
function IC(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Te("Request failed with status code " + r.status, [Te.ERR_BAD_REQUEST, Te.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r));
}
const NC = Ht.isStandardBrowserEnv ? function () {
  return {
    write: function (r, n, o, a, i, s) {
      const u = [];
      u.push(r + "=" + encodeURIComponent(n)), M.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), M.isString(a) && u.push("path=" + a), M.isString(i) && u.push("domain=" + i), s === !0 && u.push("secure"), document.cookie = u.join("; ");
    },
    read: function (r) {
      const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
      return n ? decodeURIComponent(n[3]) : null;
    },
    remove: function (r) {
      this.write(r, "", Date.now() - 86400000);
    }
  };
}() : function () {
  return {
    write: function () {},
    read: function () {
      return null;
    },
    remove: function () {}
  };
}();
function zC(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function HC(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Yd(e, t) {
  return e && !zC(t) ? HC(e, t) : t;
}
const MC = Ht.isStandardBrowserEnv ? function () {
  const t = /(msie|trident)/i.test(navigator.userAgent),
    r = document.createElement("a");
  let n;
  function o(a) {
    let i = a;
    return t && (r.setAttribute("href", i), i = r.href), r.setAttribute("href", i), {
      href: r.href,
      protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
      host: r.host,
      search: r.search ? r.search.replace(/^\?/, "") : "",
      hash: r.hash ? r.hash.replace(/^#/, "") : "",
      hostname: r.hostname,
      port: r.port,
      pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
    };
  }
  return n = o(window.location.href), function (i) {
    const s = M.isString(i) ? o(i) : i;
    return s.protocol === n.protocol && s.host === n.host;
  };
}() : function () {
  return function () {
    return !0;
  };
}();
function UC(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function VC(e, t) {
  e = e || 10;
  const r = new Array(e),
    n = new Array(e);
  let o = 0,
    a = 0,
    i;
  return t = t !== void 0 ? t : 1000, function (u) {
    const l = Date.now(),
      c = n[a];
    i || (i = l), r[o] = u, n[o] = l;
    let d = a,
      f = 0;
    for (; d !== o;) f += r[d++], d = d % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), l - i < t) return;
    const p = c && l - c;
    return p ? Math.round(f * 1000 / p) : void 0;
  };
}
function vu(e, t) {
  let r = 0;
  const n = VC(50, 250);
  return o => {
    const a = o.loaded,
      i = o.lengthComputable ? o.total : void 0,
      s = a - r,
      u = n(s),
      l = a <= i;
    r = a;
    const c = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && i && l ? (i - a) / u : void 0,
      event: o
    };
    c[t ? "download" : "upload"] = !0, e(c);
  };
}
const jC = typeof XMLHttpRequest < "u",
  WC = jC && function (e) {
    return new Promise(function (r, n) {
      let o = e.data;
      const a = Xt.from(e.headers).normalize(),
        i = e.responseType;
      let s;
      function u() {
        e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
      }
      M.isFormData(o) && (Ht.isStandardBrowserEnv || Ht.isStandardBrowserWebWorkerEnv) && a.setContentType(!1);
      let l = new XMLHttpRequest();
      if (e.auth) {
        const p = e.auth.username || "",
          v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
        a.set("Authorization", "Basic " + btoa(p + ":" + v));
      }
      const c = Yd(e.baseURL, e.url);
      l.open(e.method.toUpperCase(), Wd(c, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
      function d() {
        if (!l) return;
        const p = Xt.from("getAllResponseHeaders" in l && l.getAllResponseHeaders()),
          h = {
            data: !i || i === "text" || i === "json" ? l.responseText : l.response,
            status: l.status,
            statusText: l.statusText,
            headers: p,
            config: e,
            request: l
          };
        IC(function (b) {
          r(b), u();
        }, function (b) {
          n(b), u();
        }, h), l = null;
      }
      if ("onloadend" in l ? l.onloadend = d : l.onreadystatechange = function () {
        !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(d);
      }, l.onabort = function () {
        l && (n(new Te("Request aborted", Te.ECONNABORTED, e, l)), l = null);
      }, l.onerror = function () {
        n(new Te("Network Error", Te.ERR_NETWORK, e, l)), l = null;
      }, l.ontimeout = function () {
        let v = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
        const h = e.transitional || qd;
        e.timeoutErrorMessage && (v = e.timeoutErrorMessage), n(new Te(v, h.clarifyTimeoutError ? Te.ETIMEDOUT : Te.ECONNABORTED, e, l)), l = null;
      }, Ht.isStandardBrowserEnv) {
        const p = (e.withCredentials || MC(c)) && e.xsrfCookieName && NC.read(e.xsrfCookieName);
        p && a.set(e.xsrfHeaderName, p);
      }
      o === void 0 && a.setContentType(null), "setRequestHeader" in l && M.forEach(a.toJSON(), function (v, h) {
        l.setRequestHeader(h, v);
      }), M.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), i && i !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", vu(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", vu(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = p => {
        l && (n(!p || p.type ? new io(null, e, l) : p), l.abort(), l = null);
      }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
      const f = UC(c);
      if (f && Ht.protocols.indexOf(f) === -1) {
        n(new Te("Unsupported protocol " + f + ":", Te.ERR_BAD_REQUEST, e));
        return;
      }
      l.send(o || null);
    });
  },
  Wo = {
    http: mC,
    xhr: WC
  };
M.forEach(Wo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", {
        value: t
      });
    } catch {}
    Object.defineProperty(e, "adapterName", {
      value: t
    });
  }
});
const qC = {
  getAdapter: e => {
    e = M.isArray(e) ? e : [e];
    const {
      length: t
    } = e;
    let r, n;
    for (let o = 0; o < t && (r = e[o], !(n = M.isString(r) ? Wo[r.toLowerCase()] : r)); o++);
    if (!n) throw n === !1 ? new Te(`Adapter ${r} is not supported by the environment`, "ERR_NOT_SUPPORT") : new Error(M.hasOwnProp(Wo, r) ? `Adapter '${r}' is not available in the build` : `Unknown adapter '${r}'`);
    if (!M.isFunction(n)) throw new TypeError("adapter is not a function");
    return n;
  },
  adapters: Wo
};
function ji(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new io(null, e);
}
function hu(e) {
  return ji(e), e.headers = Xt.from(e.headers), e.data = Vi.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), qC.getAdapter(e.adapter || bl.adapter)(e).then(function (n) {
    return ji(e), n.data = Vi.call(e, e.transformResponse, n), n.headers = Xt.from(n.headers), n;
  }, function (n) {
    return Gd(n) || (ji(e), n && n.response && (n.response.data = Vi.call(e, e.transformResponse, n.response), n.response.headers = Xt.from(n.response.headers))), Promise.reject(n);
  });
}
const xu = e => e instanceof Xt ? e.toJSON() : e;
function yn(e, t) {
  t = t || {};
  const r = {};
  function n(l, c, d) {
    return M.isPlainObject(l) && M.isPlainObject(c) ? M.merge.call({
      caseless: d
    }, l, c) : M.isPlainObject(c) ? M.merge({}, c) : M.isArray(c) ? c.slice() : c;
  }
  function o(l, c, d) {
    if (M.isUndefined(c)) {
      if (!M.isUndefined(l)) return n(void 0, l, d);
    } else return n(l, c, d);
  }
  function a(l, c) {
    if (!M.isUndefined(c)) return n(void 0, c);
  }
  function i(l, c) {
    if (M.isUndefined(c)) {
      if (!M.isUndefined(l)) return n(void 0, l);
    } else return n(void 0, c);
  }
  function s(l, c, d) {
    if (d in t) return n(l, c);
    if (d in e) return n(void 0, l);
  }
  const u = {
    url: a,
    method: a,
    data: a,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: (l, c) => o(xu(l), xu(c), !0)
  };
  return M.forEach(Object.keys(e).concat(Object.keys(t)), function (c) {
    const d = u[c] || o,
      f = d(e[c], t[c], c);
    M.isUndefined(f) && d !== s || (r[c] = f);
  }), r;
}
const Xd = "1.3.2",
  Cl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Cl[e] = function (n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const mu = {};
Cl.transitional = function (t, r, n) {
  function o(a, i) {
    return "[Axios v" + Xd + "] Transitional option '" + a + "'" + i + (n ? ". " + n : "");
  }
  return (a, i, s) => {
    if (t === !1) throw new Te(o(i, " has been removed" + (r ? " in " + r : "")), Te.ERR_DEPRECATED);
    return r && !mu[i] && (mu[i] = !0, console.warn(o(i, " has been deprecated since v" + r + " and will be removed in the near future"))), t ? t(a, i, s) : !0;
  };
};
function KC(e, t, r) {
  if (typeof e != "object") throw new Te("options must be an object", Te.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0;) {
    const a = n[o],
      i = t[a];
    if (i) {
      const s = e[a],
        u = s === void 0 || i(s, a, e);
      if (u !== !0) throw new Te("option " + a + " must be " + u, Te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0) throw new Te("Unknown option " + a, Te.ERR_BAD_OPTION);
  }
}
const _s = {
    assertOptions: KC,
    validators: Cl
  },
  ur = _s.validators;
class oa {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new du(),
      response: new du()
    };
  }
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = yn(this.defaults, r);
    const {
      transitional: n,
      paramsSerializer: o,
      headers: a
    } = r;
    n !== void 0 && _s.assertOptions(n, {
      silentJSONParsing: ur.transitional(ur.boolean),
      forcedJSONParsing: ur.transitional(ur.boolean),
      clarifyTimeoutError: ur.transitional(ur.boolean)
    }, !1), o !== void 0 && _s.assertOptions(o, {
      encode: ur.function,
      serialize: ur.function
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let i;
    i = a && M.merge(a.common, a[r.method]), i && M.forEach(["delete", "get", "head", "post", "put", "patch", "common"], v => {
      delete a[v];
    }), r.headers = Xt.concat(i, a);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function (h) {
      typeof h.runWhen == "function" && h.runWhen(r) === !1 || (u = u && h.synchronous, s.unshift(h.fulfilled, h.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function (h) {
      l.push(h.fulfilled, h.rejected);
    });
    let c,
      d = 0,
      f;
    if (!u) {
      const v = [hu.bind(this), void 0];
      for (v.unshift.apply(v, s), v.push.apply(v, l), f = v.length, c = Promise.resolve(r); d < f;) c = c.then(v[d++], v[d++]);
      return c;
    }
    f = s.length;
    let p = r;
    for (d = 0; d < f;) {
      const v = s[d++],
        h = s[d++];
      try {
        p = v(p);
      } catch (g) {
        h.call(this, g);
        break;
      }
    }
    try {
      c = hu.call(this, p);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, f = l.length; d < f;) c = c.then(l[d++], l[d++]);
    return c;
  }
  getUri(t) {
    t = yn(this.defaults, t);
    const r = Yd(t.baseURL, t.url);
    return Wd(r, t.params, t.paramsSerializer);
  }
}
M.forEach(["delete", "get", "head", "options"], function (t) {
  oa.prototype[t] = function (r, n) {
    return this.request(yn(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
M.forEach(["post", "put", "patch"], function (t) {
  function r(n) {
    return function (a, i, s) {
      return this.request(yn(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: i
      }));
    };
  }
  oa.prototype[t] = r(), oa.prototype[t + "Form"] = r(!0);
});
const qo = oa;
class El {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function (a) {
      r = a;
    });
    const n = this;
    this.promise.then(o => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0;) n._listeners[a](o);
      n._listeners = null;
    }), this.promise.then = o => {
      let a;
      const i = new Promise(s => {
        n.subscribe(s), a = s;
      }).then(o);
      return i.cancel = function () {
        n.unsubscribe(a);
      }, i;
    }, t(function (a, i, s) {
      n.reason || (n.reason = new io(a, i, s), r(n.reason));
    });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  static source() {
    let t;
    return {
      token: new El(function (o) {
        t = o;
      }),
      cancel: t
    };
  }
}
const GC = El;
function YC(e) {
  return function (r) {
    return e.apply(null, r);
  };
}
function XC(e) {
  return M.isObject(e) && e.isAxiosError === !0;
}
const ks = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ks).forEach(([e, t]) => {
  ks[t] = e;
});
const QC = ks;
function Qd(e) {
  const t = new qo(e),
    r = Td(qo.prototype.request, t);
  return M.extend(r, qo.prototype, t, {
    allOwnKeys: !0
  }), M.extend(r, t, null, {
    allOwnKeys: !0
  }), r.create = function (o) {
    return Qd(yn(e, o));
  }, r;
}
const Qe = Qd(bl);
Qe.Axios = qo;
Qe.CanceledError = io;
Qe.CancelToken = GC;
Qe.isCancel = Gd;
Qe.VERSION = Xd;
Qe.toFormData = Ci;
Qe.AxiosError = Te;
Qe.Cancel = Qe.CanceledError;
Qe.all = function (t) {
  return Promise.all(t);
};
Qe.spread = YC;
Qe.isAxiosError = XC;
Qe.mergeConfig = yn;
Qe.AxiosHeaders = Xt;
Qe.formToJSON = e => Kd(M.isHTMLForm(e) ? new FormData(e) : e);
Qe.HttpStatusCode = QC;
Qe.default = Qe;
const ZC = Qe,
  We = ZC.create({
    baseURL: {}.VITE_BASE_URL,
    timeout: 1800000
  });
We.interceptors.response.use(e => e, e => {
  console.log(e.response), e.response.status == 500 && Ye.error("\u54E6\u8C41,\u670D\u52A1\u5668\u5D29\u4E86");
});
class JC {
  constructor() {}
  get_title() {
    return We({
      url: "/api/Title",
      method: "get"
    });
  }
  get_Config() {
    return We({
      url: "/api/Config",
      method: "get"
    });
  }
  get_qrcode() {
    return We({
      url: "/api/GenQrCode",
      method: "post"
    });
  }
  get_qrcode_check(t) {
    return We({
      url: "/api/QrCheck",
      method: "post",
      data: t
    });
  }
  get_user_info(t) {
    return We({
      url: "/api/User",
      method: "get",
      params: t
    });
  }
  update_remark(t) {
    return We({
      url: "/api/Upremarks",
      method: "post",
      data: t
    });
  }
  get_user_bean(t) {
    return We({
      url: "/api/Bean",
      method: "post",
      data: t
    });
  }
  get_version() {
    return We({
      url: "/api/version",
      method: "get"
    });
  }
  check_version() {
    return We({
      url: "/api/checkVer",
      method: "get"
    });
  }
  update(t) {
    return We({
      url: "/api/update",
      method: "post",
      data: t
    });
  }
  get_ql_config(t) {
    return We({
      url: "/api/QLConfig",
      method: "get",
      params: t
    });
  }
  get_config_info(t) {
    return We({
      url: "/api/GetConfig",
      method: "get",
      params: t
    });
  }
  save_config(t, r) {
    return We({
      url: "/api/EditConfig?pwd=" + t,
      method: "post",
      data: r
    });
  }
  test_ql(t) {
    return We({
      url: "/api/QLTest",
      method: "post",
      data: t
    });
  }
  send_sms(t) {
    return We({
      url: "/sms/sendSMS",
      method: "post",
      data: t
    });
  }
  auto_captcha(t) {
    return We({
      url: "/sms/AutoCaptcha",
      method: "post",
      data: t
    });
  }
  verify_code(t) {
    return We({
      url: "/sms/VerifyCode",
      method: "post",
      data: t
    });
  }
  account_init(t) {
    return We({
      url: "/pwd/init",
      method: "post",
      data: t
    });
  }
  account_auto_captcha(t) {
    return We({
      url: "/pwd/auto_captcha",
      method: "post",
      data: t
    });
  }
  account_login(t) {
    return We({
      url: "/pwd/login",
      method: "post",
      data: t
    });
  }
}
const yt = new JC();
const Bl = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [n, o] of t) r[n] = o;
    return r;
  },
  e8 = {
    class: "bar"
  },
  t8 = {
    __name: "tabbar",
    setup(e) {
      const t = Y(0),
        r = Y(!1),
        n = kd(),
        o = zb(),
        a = i => {
          switch (t.value = i, i) {
            case 0:
              n.push({
                name: "dashboard"
              });
              break;
            case 1:
              n.push({
                name: "personal"
              });
              break;
          }
        };
      return Se(o, i => {
        i.name == "dashboard" || i.name == null ? t.value = 0 : t.value = 1, i.name == "editConfig" ? r.value = !1 : r.value = !0;
      }), (i, s) => {
        const u = Cx,
          l = vx;
        return Ze((q(), re("div", e8, [Q(l, {
          active: t.value,
          "onUpdate:active": s[0] || (s[0] = c => t.value = c),
          "active-color": "var(--app-color)",
          onChange: a
        }, {
          default: he(() => [Q(u, {
            label: "\u767B\u5F55",
            icon: "qrcode-scan"
          }), Q(u, {
            label: "\u4E2A\u4EBA",
            icon: "account-circle"
          })]),
          _: 1
        }, 8, ["active"])], 512)), [[Nt, r.value]]);
      };
    }
  },
  r8 = Bl(t8, [["__scopeId", "data-v-d277e557"]]);
const n8 = {
    __name: "App",
    setup(e) {
      const t = Y("Rabbit"),
        r = Y({}),
        n = Y({}),
        o = Y(!1),
        a = Y(""),
        i = async () => {
          const {
            data: u
          } = await yt.get_title();
          console.log(u), t.value = u.data.title;
        };
      return (async () => {
        const {
          data: u
        } = await yt.get_version();
        r.value = u;
      })(), i(), (u, l) => {
        const c = I1,
          d = jf,
          f = em;
        return q(), re(Ue, null, [Q(c, {
          color: "var(--app-color)"
        }, {
          left: he(() => [ne("span", null, De(t.value), 1)]),
          right: he(() => [ne("span", null, De(r.value.version), 1)]),
          _: 1
        }), Q(qe(_d)), Q(Od), Q(r8), Q(f, {
          show: o.value,
          "onUpdate:show": l[1] || (l[1] = p => o.value = p),
          confirmButtonText: "\u66F4\u65B0",
          onConfirm: u.confirm
        }, {
          title: he(() => [Le(" \u5F53\u524D\u6700\u65B0\u7248\u672C\uFF1A" + De(n.value.version), 1)]),
          default: he(() => [Q(d, {
            placeholder: "\u8BF7\u8F93\u5165\u66F4\u65B0\u5BC6\u7801",
            modelValue: a.value,
            "onUpdate:modelValue": l[0] || (l[0] = p => a.value = p),
            clearable: "",
            type: "password"
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["show", "onConfirm"])], 64);
      };
    }
  },
  o8 = Bl(n8, [["__scopeId", "data-v-3be05ce7"]]),
  a8 = "modulepreload",
  i8 = function (e, t) {
    return new URL(e, t).href;
  },
  gu = {},
  yu = function (t, r, n) {
    if (!r || r.length === 0) return t();
    const o = document.getElementsByTagName("link");
    return Promise.all(r.map(a => {
      if (a = i8(a, n), a in gu) return;
      gu[a] = !0;
      const i = a.endsWith(".css"),
        s = i ? "[rel=\"stylesheet\"]" : "";
      if (!!n) for (let c = o.length - 1; c >= 0; c--) {
        const d = o[c];
        if (d.href === a && (!i || d.rel === "stylesheet")) return;
      } else if (document.querySelector(`link[href="${a}"]${s}`)) return;
      const l = document.createElement("link");
      if (l.rel = i ? "stylesheet" : a8, i || (l.as = "script", l.crossOrigin = ""), l.href = a, document.head.appendChild(l), i) return new Promise((c, d) => {
        l.addEventListener("load", c), l.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${a}`)));
      });
    })).then(() => t());
  };
var Ae = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function s8(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      if (this instanceof n) {
        var o = [null];
        o.push.apply(o, arguments);
        var a = Function.bind.apply(t, o);
        return new a();
      }
      return t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.keys(e).forEach(function (n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function () {
        return e[n];
      }
    });
  }), r;
}
var l8 = function () {
    var e = document.getSelection();
    if (!e.rangeCount) return function () {};
    for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n));
    switch (t.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return e.removeAllRanges(), function () {
      e.type === "Caret" && e.removeAllRanges(), e.rangeCount || r.forEach(function (o) {
        e.addRange(o);
      }), t && t.focus();
    };
  },
  u8 = l8,
  bu = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  },
  c8 = "Copy to clipboard: #{key}, Enter";
function f8(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function d8(e, t) {
  var r,
    n,
    o,
    a,
    i,
    s,
    u = !1;
  t || (t = {}), r = t.debug || !1;
  try {
    o = u8(), a = document.createRange(), i = document.getSelection(), s = document.createElement("span"), s.textContent = e, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function (c) {
      if (c.stopPropagation(), t.format) if (c.preventDefault(), typeof c.clipboardData > "u") {
        r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
        var d = bu[t.format] || bu.default;
        window.clipboardData.setData(d, e);
      } else c.clipboardData.clearData(), c.clipboardData.setData(t.format, e);
      t.onCopy && (c.preventDefault(), t.onCopy(c.clipboardData));
    }), document.body.appendChild(s), a.selectNodeContents(s), i.addRange(a);
    var l = document.execCommand("copy");
    if (!l) throw new Error("copy command was unsuccessful");
    u = !0;
  } catch (c) {
    r && console.error("unable to copy using execCommand: ", c), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), u = !0;
    } catch (d) {
      r && console.error("unable to copy using clipboardData: ", d), r && console.error("falling back to prompt"), n = f8("message" in t ? t.message : c8), window.prompt(n, e);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(a) : i.removeAllRanges()), s && document.body.removeChild(s), o();
  }
  return u;
}
var p8 = d8,
  Os = {},
  v8 = {
    get exports() {
      return Os;
    },
    set exports(e) {
      Os = e;
    }
  };
function h8(e) {
  throw new Error("Could not dynamically require \"" + e + "\". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.");
}
var aa = {},
  x8 = {
    get exports() {
      return aa;
    },
    set exports(e) {
      aa = e;
    }
  };
const m8 = {},
  g8 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: m8
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  y8 = s8(g8);
var Cu;
function _e() {
  return Cu || (Cu = 1, function (e, t) {
    (function (r, n) {
      e.exports = n();
    })(Ae, function () {
      var r = r || function (n, o) {
        var a;
        if (typeof window < "u" && window.crypto && (a = window.crypto), typeof self < "u" && self.crypto && (a = self.crypto), typeof globalThis < "u" && globalThis.crypto && (a = globalThis.crypto), !a && typeof window < "u" && window.msCrypto && (a = window.msCrypto), !a && typeof Ae < "u" && Ae.crypto && (a = Ae.crypto), !a && typeof h8 == "function") try {
          a = y8;
        } catch {}
        var i = function () {
            if (a) {
              if (typeof a.getRandomValues == "function") try {
                return a.getRandomValues(new Uint32Array(1))[0];
              } catch {}
              if (typeof a.randomBytes == "function") try {
                return a.randomBytes(4).readInt32LE();
              } catch {}
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          },
          s = Object.create || function () {
            function m() {}
            return function (x) {
              var y;
              return m.prototype = x, y = new m(), m.prototype = null, y;
            };
          }(),
          u = {},
          l = u.lib = {},
          c = l.Base = function () {
            return {
              extend: function (m) {
                var x = s(this);
                return m && x.mixIn(m), (!x.hasOwnProperty("init") || this.init === x.init) && (x.init = function () {
                  x.$super.init.apply(this, arguments);
                }), x.init.prototype = x, x.$super = this, x;
              },
              create: function () {
                var m = this.extend();
                return m.init.apply(m, arguments), m;
              },
              init: function () {},
              mixIn: function (m) {
                for (var x in m) m.hasOwnProperty(x) && (this[x] = m[x]);
                m.hasOwnProperty("toString") && (this.toString = m.toString);
              },
              clone: function () {
                return this.init.prototype.extend(this);
              }
            };
          }(),
          d = l.WordArray = c.extend({
            init: function (m, x) {
              m = this.words = m || [], x != o ? this.sigBytes = x : this.sigBytes = m.length * 4;
            },
            toString: function (m) {
              return (m || p).stringify(this);
            },
            concat: function (m) {
              var x = this.words,
                y = m.words,
                w = this.sigBytes,
                C = m.sigBytes;
              if (this.clamp(), w % 4) for (var _ = 0; _ < C; _++) {
                var F = y[_ >>> 2] >>> 24 - _ % 4 * 8 & 255;
                x[w + _ >>> 2] |= F << 24 - (w + _) % 4 * 8;
              } else for (var O = 0; O < C; O += 4) x[w + O >>> 2] = y[O >>> 2];
              return this.sigBytes += C, this;
            },
            clamp: function () {
              var m = this.words,
                x = this.sigBytes;
              m[x >>> 2] &= 4294967295 << 32 - x % 4 * 8, m.length = n.ceil(x / 4);
            },
            clone: function () {
              var m = c.clone.call(this);
              return m.words = this.words.slice(0), m;
            },
            random: function (m) {
              for (var x = [], y = 0; y < m; y += 4) x.push(i());
              return new d.init(x, m);
            }
          }),
          f = u.enc = {},
          p = f.Hex = {
            stringify: function (m) {
              for (var x = m.words, y = m.sigBytes, w = [], C = 0; C < y; C++) {
                var _ = x[C >>> 2] >>> 24 - C % 4 * 8 & 255;
                w.push((_ >>> 4).toString(16)), w.push((_ & 15).toString(16));
              }
              return w.join("");
            },
            parse: function (m) {
              for (var x = m.length, y = [], w = 0; w < x; w += 2) y[w >>> 3] |= parseInt(m.substr(w, 2), 16) << 24 - w % 8 * 4;
              return new d.init(y, x / 2);
            }
          },
          v = f.Latin1 = {
            stringify: function (m) {
              for (var x = m.words, y = m.sigBytes, w = [], C = 0; C < y; C++) {
                var _ = x[C >>> 2] >>> 24 - C % 4 * 8 & 255;
                w.push(String.fromCharCode(_));
              }
              return w.join("");
            },
            parse: function (m) {
              for (var x = m.length, y = [], w = 0; w < x; w++) y[w >>> 2] |= (m.charCodeAt(w) & 255) << 24 - w % 4 * 8;
              return new d.init(y, x);
            }
          },
          h = f.Utf8 = {
            stringify: function (m) {
              try {
                return decodeURIComponent(escape(v.stringify(m)));
              } catch {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function (m) {
              return v.parse(unescape(encodeURIComponent(m)));
            }
          },
          g = l.BufferedBlockAlgorithm = c.extend({
            reset: function () {
              this._data = new d.init(), this._nDataBytes = 0;
            },
            _append: function (m) {
              typeof m == "string" && (m = h.parse(m)), this._data.concat(m), this._nDataBytes += m.sigBytes;
            },
            _process: function (m) {
              var x,
                y = this._data,
                w = y.words,
                C = y.sigBytes,
                _ = this.blockSize,
                F = _ * 4,
                O = C / F;
              m ? O = n.ceil(O) : O = n.max((O | 0) - this._minBufferSize, 0);
              var B = O * _,
                A = n.min(B * 4, C);
              if (B) {
                for (var D = 0; D < B; D += _) this._doProcessBlock(w, D);
                x = w.splice(0, B), y.sigBytes -= A;
              }
              return new d.init(x, A);
            },
            clone: function () {
              var m = c.clone.call(this);
              return m._data = this._data.clone(), m;
            },
            _minBufferSize: 0
          });
        l.Hasher = g.extend({
          cfg: c.extend(),
          init: function (m) {
            this.cfg = this.cfg.extend(m), this.reset();
          },
          reset: function () {
            g.reset.call(this), this._doReset();
          },
          update: function (m) {
            return this._append(m), this._process(), this;
          },
          finalize: function (m) {
            m && this._append(m);
            var x = this._doFinalize();
            return x;
          },
          blockSize: 16,
          _createHelper: function (m) {
            return function (x, y) {
              return new m.init(y).finalize(x);
            };
          },
          _createHmacHelper: function (m) {
            return function (x, y) {
              return new b.HMAC.init(m, y).finalize(x);
            };
          }
        });
        var b = u.algo = {};
        return u;
      }(Math);
      return r;
    });
  }(x8)), aa;
}
var ia = {},
  b8 = {
    get exports() {
      return ia;
    },
    set exports(e) {
      ia = e;
    }
  },
  Eu;
function Ai() {
  return Eu || (Eu = 1, function (e, t) {
    (function (r, n) {
      e.exports = n(_e());
    })(Ae, function (r) {
      return function (n) {
        var o = r,
          a = o.lib,
          i = a.Base,
          s = a.WordArray,
          u = o.x64 = {};
        u.Word = i.extend({
          init: function (l, c) {
            this.high = l, this.low = c;
          }
        }), u.WordArray = i.extend({
          init: function (l, c) {
            l = this.words = l || [], c != n ? this.sigBytes = c : this.sigBytes = l.length * 8;
          },
          toX32: function () {
            for (var l = this.words, c = l.length, d = [], f = 0; f < c; f++) {
              var p = l[f];
              d.push(p.high), d.push(p.low);
            }
            return s.create(d, this.sigBytes);
          },
          clone: function () {
            for (var l = i.clone.call(this), c = l.words = this.words.slice(0), d = c.length, f = 0; f < d; f++) c[f] = c[f].clone();
            return l;
          }
        });
      }(), r;
    });
  }(b8)), ia;
}
var sa = {},
  C8 = {
    get exports() {
      return sa;
    },
    set exports(e) {
      sa = e;
    }
  },
  Bu;
function E8() {
  return Bu || (Bu = 1, function (e, t) {
    (function (r, n) {
      e.exports = n(_e());
    })(Ae, function (r) {
      return function () {
        if (typeof ArrayBuffer == "function") {
          var n = r,
            o = n.lib,
            a = o.WordArray,
            i = a.init,
            s = a.init = function (u) {
              if (u instanceof ArrayBuffer && (u = new Uint8Array(u)), (u instanceof Int8Array || typeof Uint8ClampedArray < "u" && u instanceof Uint8ClampedArray || u instanceof Int16Array || u instanceof Uint16Array || u instanceof Int32Array || u instanceof Uint32Array || u instanceof Float32Array || u instanceof Float64Array) && (u = new Uint8Array(u.buffer, u.byteOffset, u.byteLength)), u instanceof Uint8Array) {
                for (var l = u.byteLength, c = [], d = 0; d < l; d++) c[d >>> 2] |= u[d] << 24 - d % 4 * 8;
                i.call(this, c, l);
              } else i.apply(this, arguments);
            };
          s.prototype = a;
        }
      }(), r.lib.WordArray;
    });
  }(C8)), sa;
}
var la = {},
  B8 = {
    get exports() {
      return la;
    },
    set exports(e) {
      la = e;
    }
  },
  Au;
function A8() {
  return Au || (Au = 1, function (e, t) {
    (function (r, n) {
      e.exports = n(_e());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.WordArray,
          i = n.enc;
        i.Utf16 = i.Utf16BE = {
          stringify: function (u) {
            for (var l = u.words, c = u.sigBytes, d = [], f = 0; f < c; f += 2) {
              var p = l[f >>> 2] >>> 16 - f % 4 * 8 & 65535;
              d.push(String.fromCharCode(p));
            }
            return d.join("");
          },
          parse: function (u) {
            for (var l = u.length, c = [], d = 0; d < l; d++) c[d >>> 1] |= u.charCodeAt(d) << 16 - d % 2 * 16;
            return a.create(c, l * 2);
          }
        }, i.Utf16LE = {
          stringify: function (u) {
            for (var l = u.words, c = u.sigBytes, d = [], f = 0; f < c; f += 2) {
              var p = s(l[f >>> 2] >>> 16 - f % 4 * 8 & 65535);
              d.push(String.fromCharCode(p));
            }
            return d.join("");
          },
          parse: function (u) {
            for (var l = u.length, c = [], d = 0; d < l; d++) c[d >>> 1] |= s(u.charCodeAt(d) << 16 - d % 2 * 16);
            return a.create(c, l * 2);
          }
        };
        function s(u) {
          return u << 8 & 4278255360 | u >>> 8 & 16711935;
        }
      }(), r.enc.Utf16;
    });
  }(B8)), la;
}
var ua = {},
  w8 = {
    get exports() {
      return ua;
    },
    set exports(e) {
      ua = e;
    }
  },
  wu;
function Gr() {
  return wu || (wu = 1, function (e, t) {
    (function (r, n) {
      e.exports = n(_e());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.WordArray,
          i = n.enc;
        i.Base64 = {
          stringify: function (u) {
            var l = u.words,
              c = u.sigBytes,
              d = this._map;
            u.clamp();
            for (var f = [], p = 0; p < c; p += 3) for (var v = l[p >>> 2] >>> 24 - p % 4 * 8 & 255, h = l[p + 1 >>> 2] >>> 24 - (p + 1) % 4 * 8 & 255, g = l[p + 2 >>> 2] >>> 24 - (p + 2) % 4 * 8 & 255, b = v << 16 | h << 8 | g, m = 0; m < 4 && p + m * 0.75 < c; m++) f.push(d.charAt(b >>> 6 * (3 - m) & 63));
            var x = d.charAt(64);
            if (x) for (; f.length % 4;) f.push(x);
            return f.join("");
          },
          parse: function (u) {
            var l = u.length,
              c = this._map,
              d = this._reverseMap;
            if (!d) {
              d = this._reverseMap = [];
              for (var f = 0; f < c.length; f++) d[c.charCodeAt(f)] = f;
            }
            var p = c.charAt(64);
            if (p) {
              var v = u.indexOf(p);
              v !== -1 && (l = v);
            }
            return s(u, l, d);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function s(u, l, c) {
          for (var d = [], f = 0, p = 0; p < l; p++) if (p % 4) {
            var v = c[u.charCodeAt(p - 1)] << p % 4 * 2,
              h = c[u.charCodeAt(p)] >>> 6 - p % 4 * 2,
              g = v | h;
            d[f >>> 2] |= g << 24 - f % 4 * 8, f++;
          }
          return a.create(d, f);
        }
      }(), r.enc.Base64;
    });
  }(w8)), ua;
}
var ca = {},
  F8 = {
    get exports() {
      return ca;
    },
    set exports(e) {
      ca = e;
    }
  },
  Fu;
function S8() {
  return Fu || (Fu = 1, function (e, t) {
    (function (r, n) {
      e.exports = n(_e());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.WordArray,
          i = n.enc;
        i.Base64url = {
          stringify: function (u, l) {
            l === void 0 && (l = !0);
            var c = u.words,
              d = u.sigBytes,
              f = l ? this._safe_map : this._map;
            u.clamp();
            for (var p = [], v = 0; v < d; v += 3) for (var h = c[v >>> 2] >>> 24 - v % 4 * 8 & 255, g = c[v + 1 >>> 2] >>> 24 - (v + 1) % 4 * 8 & 255, b = c[v + 2 >>> 2] >>> 24 - (v + 2) % 4 * 8 & 255, m = h << 16 | g << 8 | b, x = 0; x < 4 && v + x * 0.75 < d; x++) p.push(f.charAt(m >>> 6 * (3 - x) & 63));
            var y = f.charAt(64);
            if (y) for (; p.length % 4;) p.push(y);
            return p.join("");
          },
          parse: function (u, l) {
            l === void 0 && (l = !0);
            var c = u.length,
              d = l ? this._safe_map : this._map,
              f = this._reverseMap;
            if (!f) {
              f = this._reverseMap = [];
              for (var p = 0; p < d.length; p++) f[d.charCodeAt(p)] = p;
            }
            var v = d.charAt(64);
            if (v) {
              var h = u.indexOf(v);
              h !== -1 && (c = h);
            }
            return s(u, c, f);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function s(u, l, c) {
          for (var d = [], f = 0, p = 0; p < l; p++) if (p % 4) {
            var v = c[u.charCodeAt(p - 1)] << p % 4 * 2,
              h = c[u.charCodeAt(p)] >>> 6 - p % 4 * 2,
              g = v | h;
            d[f >>> 2] |= g << 24 - f % 4 * 8, f++;
          }
          return a.create(d, f);
        }
      }(), r.enc.Base64url;
    });
  }(F8)), ca;
}
var fa = {},
  D8 = {
    get exports() {
      return fa;
    },
    set exports(e) {
      fa = e;
    }
  },
  Su;
function Yr() {
  return Su || (Su = 1, function (e, t) {
    (function (r, n) {
      e.exports = n(_e());
    })(Ae, function (r) {
      return function (n) {
        var o = r,
          a = o.lib,
          i = a.WordArray,
          s = a.Hasher,
          u = o.algo,
          l = [];
        (function () {
          for (var h = 0; h < 64; h++) l[h] = n.abs(n.sin(h + 1)) * 4294967296 | 0;
        })();
        var c = u.MD5 = s.extend({
          _doReset: function () {
            this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878]);
          },
          _doProcessBlock: function (h, g) {
            for (var b = 0; b < 16; b++) {
              var m = g + b,
                x = h[m];
              h[m] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360;
            }
            var y = this._hash.words,
              w = h[g + 0],
              C = h[g + 1],
              _ = h[g + 2],
              F = h[g + 3],
              O = h[g + 4],
              B = h[g + 5],
              A = h[g + 6],
              D = h[g + 7],
              k = h[g + 8],
              X = h[g + 9],
              ie = h[g + 10],
              ae = h[g + 11],
              V = h[g + 12],
              z = h[g + 13],
              se = h[g + 14],
              fe = h[g + 15],
              L = y[0],
              R = y[1],
              $ = y[2],
              I = y[3];
            L = d(L, R, $, I, w, 7, l[0]), I = d(I, L, R, $, C, 12, l[1]), $ = d($, I, L, R, _, 17, l[2]), R = d(R, $, I, L, F, 22, l[3]), L = d(L, R, $, I, O, 7, l[4]), I = d(I, L, R, $, B, 12, l[5]), $ = d($, I, L, R, A, 17, l[6]), R = d(R, $, I, L, D, 22, l[7]), L = d(L, R, $, I, k, 7, l[8]), I = d(I, L, R, $, X, 12, l[9]), $ = d($, I, L, R, ie, 17, l[10]), R = d(R, $, I, L, ae, 22, l[11]), L = d(L, R, $, I, V, 7, l[12]), I = d(I, L, R, $, z, 12, l[13]), $ = d($, I, L, R, se, 17, l[14]), R = d(R, $, I, L, fe, 22, l[15]), L = f(L, R, $, I, C, 5, l[16]), I = f(I, L, R, $, A, 9, l[17]), $ = f($, I, L, R, ae, 14, l[18]), R = f(R, $, I, L, w, 20, l[19]), L = f(L, R, $, I, B, 5, l[20]), I = f(I, L, R, $, ie, 9, l[21]), $ = f($, I, L, R, fe, 14, l[22]), R = f(R, $, I, L, O, 20, l[23]), L = f(L, R, $, I, X, 5, l[24]), I = f(I, L, R, $, se, 9, l[25]), $ = f($, I, L, R, F, 14, l[26]), R = f(R, $, I, L, k, 20, l[27]), L = f(L, R, $, I, z, 5, l[28]), I = f(I, L, R, $, _, 9, l[29]), $ = f($, I, L, R, D, 14, l[30]), R = f(R, $, I, L, V, 20, l[31]), L = p(L, R, $, I, B, 4, l[32]), I = p(I, L, R, $, k, 11, l[33]), $ = p($, I, L, R, ae, 16, l[34]), R = p(R, $, I, L, se, 23, l[35]), L = p(L, R, $, I, C, 4, l[36]), I = p(I, L, R, $, O, 11, l[37]), $ = p($, I, L, R, D, 16, l[38]), R = p(R, $, I, L, ie, 23, l[39]), L = p(L, R, $, I, z, 4, l[40]), I = p(I, L, R, $, w, 11, l[41]), $ = p($, I, L, R, F, 16, l[42]), R = p(R, $, I, L, A, 23, l[43]), L = p(L, R, $, I, X, 4, l[44]), I = p(I, L, R, $, V, 11, l[45]), $ = p($, I, L, R, fe, 16, l[46]), R = p(R, $, I, L, _, 23, l[47]), L = v(L, R, $, I, w, 6, l[48]), I = v(I, L, R, $, D, 10, l[49]), $ = v($, I, L, R, se, 15, l[50]), R = v(R, $, I, L, B, 21, l[51]), L = v(L, R, $, I, V, 6, l[52]), I = v(I, L, R, $, F, 10, l[53]), $ = v($, I, L, R, ie, 15, l[54]), R = v(R, $, I, L, C, 21, l[55]), L = v(L, R, $, I, k, 6, l[56]), I = v(I, L, R, $, fe, 10, l[57]), $ = v($, I, L, R, A, 15, l[58]), R = v(R, $, I, L, z, 21, l[59]), L = v(L, R, $, I, O, 6, l[60]), I = v(I, L, R, $, ae, 10, l[61]), $ = v($, I, L, R, _, 15, l[62]), R = v(R, $, I, L, X, 21, l[63]), y[0] = y[0] + L | 0, y[1] = y[1] + R | 0, y[2] = y[2] + $ | 0, y[3] = y[3] + I | 0;
          },
          _doFinalize: function () {
            var h = this._data,
              g = h.words,
              b = this._nDataBytes * 8,
              m = h.sigBytes * 8;
            g[m >>> 5] |= 128 << 24 - m % 32;
            var x = n.floor(b / 4294967296),
              y = b;
            g[(m + 64 >>> 9 << 4) + 15] = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360, g[(m + 64 >>> 9 << 4) + 14] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, h.sigBytes = (g.length + 1) * 4, this._process();
            for (var w = this._hash, C = w.words, _ = 0; _ < 4; _++) {
              var F = C[_];
              C[_] = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360;
            }
            return w;
          },
          clone: function () {
            var h = s.clone.call(this);
            return h._hash = this._hash.clone(), h;
          }
        });
        function d(h, g, b, m, x, y, w) {
          var C = h + (g & b | ~g & m) + x + w;
          return (C << y | C >>> 32 - y) + g;
        }
        function f(h, g, b, m, x, y, w) {
          var C = h + (g & m | b & ~m) + x + w;
          return (C << y | C >>> 32 - y) + g;
        }
        function p(h, g, b, m, x, y, w) {
          var C = h + (g ^ b ^ m) + x + w;
          return (C << y | C >>> 32 - y) + g;
        }
        function v(h, g, b, m, x, y, w) {
          var C = h + (b ^ (g | ~m)) + x + w;
          return (C << y | C >>> 32 - y) + g;
        }
        o.MD5 = s._createHelper(c), o.HmacMD5 = s._createHmacHelper(c);
      }(Math), r.MD5;
    });
  }(D8)), fa;
}
var da = {},
  _8 = {
    get exports() {
      return da;
    },
    set exports(e) {
      da = e;
    }
  },
  Du;
function Zd() {
  return Du || (Du = 1, function (e, t) {
    (function (r, n) {
      e.exports = n(_e());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.WordArray,
          i = o.Hasher,
          s = n.algo,
          u = [],
          l = s.SHA1 = i.extend({
            _doReset: function () {
              this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
            },
            _doProcessBlock: function (c, d) {
              for (var f = this._hash.words, p = f[0], v = f[1], h = f[2], g = f[3], b = f[4], m = 0; m < 80; m++) {
                if (m < 16) u[m] = c[d + m] | 0;else {
                  var x = u[m - 3] ^ u[m - 8] ^ u[m - 14] ^ u[m - 16];
                  u[m] = x << 1 | x >>> 31;
                }
                var y = (p << 5 | p >>> 27) + b + u[m];
                m < 20 ? y += (v & h | ~v & g) + 1518500249 : m < 40 ? y += (v ^ h ^ g) + 1859775393 : m < 60 ? y += (v & h | v & g | h & g) - 1894007588 : y += (v ^ h ^ g) - 899497514, b = g, g = h, h = v << 30 | v >>> 2, v = p, p = y;
              }
              f[0] = f[0] + p | 0, f[1] = f[1] + v | 0, f[2] = f[2] + h | 0, f[3] = f[3] + g | 0, f[4] = f[4] + b | 0;
            },
            _doFinalize: function () {
              var c = this._data,
                d = c.words,
                f = this._nDataBytes * 8,
                p = c.sigBytes * 8;
              return d[p >>> 5] |= 128 << 24 - p % 32, d[(p + 64 >>> 9 << 4) + 14] = Math.floor(f / 4294967296), d[(p + 64 >>> 9 << 4) + 15] = f, c.sigBytes = d.length * 4, this._process(), this._hash;
            },
            clone: function () {
              var c = i.clone.call(this);
              return c._hash = this._hash.clone(), c;
            }
          });
        n.SHA1 = i._createHelper(l), n.HmacSHA1 = i._createHmacHelper(l);
      }(), r.SHA1;
    });
  }(_8)), da;
}
var pa = {},
  k8 = {
    get exports() {
      return pa;
    },
    set exports(e) {
      pa = e;
    }
  },
  _u;
function Al() {
  return _u || (_u = 1, function (e, t) {
    (function (r, n) {
      e.exports = n(_e());
    })(Ae, function (r) {
      return function (n) {
        var o = r,
          a = o.lib,
          i = a.WordArray,
          s = a.Hasher,
          u = o.algo,
          l = [],
          c = [];
        (function () {
          function p(b) {
            for (var m = n.sqrt(b), x = 2; x <= m; x++) if (!(b % x)) return !1;
            return !0;
          }
          function v(b) {
            return (b - (b | 0)) * 4294967296 | 0;
          }
          for (var h = 2, g = 0; g < 64;) p(h) && (g < 8 && (l[g] = v(n.pow(h, 0.5))), c[g] = v(n.pow(h, 0.3333333333333333)), g++), h++;
        })();
        var d = [],
          f = u.SHA256 = s.extend({
            _doReset: function () {
              this._hash = new i.init(l.slice(0));
            },
            _doProcessBlock: function (p, v) {
              for (var h = this._hash.words, g = h[0], b = h[1], m = h[2], x = h[3], y = h[4], w = h[5], C = h[6], _ = h[7], F = 0; F < 64; F++) {
                if (F < 16) d[F] = p[v + F] | 0;else {
                  var O = d[F - 15],
                    B = (O << 25 | O >>> 7) ^ (O << 14 | O >>> 18) ^ O >>> 3,
                    A = d[F - 2],
                    D = (A << 15 | A >>> 17) ^ (A << 13 | A >>> 19) ^ A >>> 10;
                  d[F] = B + d[F - 7] + D + d[F - 16];
                }
                var k = y & w ^ ~y & C,
                  X = g & b ^ g & m ^ b & m,
                  ie = (g << 30 | g >>> 2) ^ (g << 19 | g >>> 13) ^ (g << 10 | g >>> 22),
                  ae = (y << 26 | y >>> 6) ^ (y << 21 | y >>> 11) ^ (y << 7 | y >>> 25),
                  V = _ + ae + k + c[F] + d[F],
                  z = ie + X;
                _ = C, C = w, w = y, y = x + V | 0, x = m, m = b, b = g, g = V + z | 0;
              }
              h[0] = h[0] + g | 0, h[1] = h[1] + b | 0, h[2] = h[2] + m | 0, h[3] = h[3] + x | 0, h[4] = h[4] + y | 0, h[5] = h[5] + w | 0, h[6] = h[6] + C | 0, h[7] = h[7] + _ | 0;
            },
            _doFinalize: function () {
              var p = this._data,
                v = p.words,
                h = this._nDataBytes * 8,
                g = p.sigBytes * 8;
              return v[g >>> 5] |= 128 << 24 - g % 32, v[(g + 64 >>> 9 << 4) + 14] = n.floor(h / 4294967296), v[(g + 64 >>> 9 << 4) + 15] = h, p.sigBytes = v.length * 4, this._process(), this._hash;
            },
            clone: function () {
              var p = s.clone.call(this);
              return p._hash = this._hash.clone(), p;
            }
          });
        o.SHA256 = s._createHelper(f), o.HmacSHA256 = s._createHmacHelper(f);
      }(Math), r.SHA256;
    });
  }(k8)), pa;
}
var va = {},
  O8 = {
    get exports() {
      return va;
    },
    set exports(e) {
      va = e;
    }
  },
  ku;
function T8() {
  return ku || (ku = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), Al());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.WordArray,
          i = n.algo,
          s = i.SHA256,
          u = i.SHA224 = s.extend({
            _doReset: function () {
              this._hash = new a.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
            },
            _doFinalize: function () {
              var l = s._doFinalize.call(this);
              return l.sigBytes -= 4, l;
            }
          });
        n.SHA224 = s._createHelper(u), n.HmacSHA224 = s._createHmacHelper(u);
      }(), r.SHA224;
    });
  }(O8)), va;
}
var ha = {},
  R8 = {
    get exports() {
      return ha;
    },
    set exports(e) {
      ha = e;
    }
  },
  Ou;
function Jd() {
  return Ou || (Ou = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), Ai());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.Hasher,
          i = n.x64,
          s = i.Word,
          u = i.WordArray,
          l = n.algo;
        function c() {
          return s.create.apply(s, arguments);
        }
        var d = [c(1116352408, 3609767458), c(1899447441, 602891725), c(3049323471, 3964484399), c(3921009573, 2173295548), c(961987163, 4081628472), c(1508970993, 3053834265), c(2453635748, 2937671579), c(2870763221, 3664609560), c(3624381080, 2734883394), c(310598401, 1164996542), c(607225278, 1323610764), c(1426881987, 3590304994), c(1925078388, 4068182383), c(2162078206, 991336113), c(2614888103, 633803317), c(3248222580, 3479774868), c(3835390401, 2666613458), c(4022224774, 944711139), c(264347078, 2341262773), c(604807628, 2007800933), c(770255983, 1495990901), c(1249150122, 1856431235), c(1555081692, 3175218132), c(1996064986, 2198950837), c(2554220882, 3999719339), c(2821834349, 766784016), c(2952996808, 2566594879), c(3210313671, 3203337956), c(3336571891, 1034457026), c(3584528711, 2466948901), c(113926993, 3758326383), c(338241895, 168717936), c(666307205, 1188179964), c(773529912, 1546045734), c(1294757372, 1522805485), c(1396182291, 2643833823), c(1695183700, 2343527390), c(1986661051, 1014477480), c(2177026350, 1206759142), c(2456956037, 344077627), c(2730485921, 1290863460), c(2820302411, 3158454273), c(3259730800, 3505952657), c(3345764771, 106217008), c(3516065817, 3606008344), c(3600352804, 1432725776), c(4094571909, 1467031594), c(275423344, 851169720), c(430227734, 3100823752), c(506948616, 1363258195), c(659060556, 3750685593), c(883997877, 3785050280), c(958139571, 3318307427), c(1322822218, 3812723403), c(1537002063, 2003034995), c(1747873779, 3602036899), c(1955562222, 1575990012), c(2024104815, 1125592928), c(2227730452, 2716904306), c(2361852424, 442776044), c(2428436474, 593698344), c(2756734187, 3733110249), c(3204031479, 2999351573), c(3329325298, 3815920427), c(3391569614, 3928383900), c(3515267271, 566280711), c(3940187606, 3454069534), c(4118630271, 4000239992), c(116418474, 1914138554), c(174292421, 2731055270), c(289380356, 3203993006), c(460393269, 320620315), c(685471733, 587496836), c(852142971, 1086792851), c(1017036298, 365543100), c(1126000580, 2618297676), c(1288033470, 3409855158), c(1501505948, 4234509866), c(1607167915, 987167468), c(1816402316, 1246189591)],
          f = [];
        (function () {
          for (var v = 0; v < 80; v++) f[v] = c();
        })();
        var p = l.SHA512 = a.extend({
          _doReset: function () {
            this._hash = new u.init([new s.init(1779033703, 4089235720), new s.init(3144134277, 2227873595), new s.init(1013904242, 4271175723), new s.init(2773480762, 1595750129), new s.init(1359893119, 2917565137), new s.init(2600822924, 725511199), new s.init(528734635, 4215389547), new s.init(1541459225, 327033209)]);
          },
          _doProcessBlock: function (v, h) {
            for (var g = this._hash.words, b = g[0], m = g[1], x = g[2], y = g[3], w = g[4], C = g[5], _ = g[6], F = g[7], O = b.high, B = b.low, A = m.high, D = m.low, k = x.high, X = x.low, ie = y.high, ae = y.low, V = w.high, z = w.low, se = C.high, fe = C.low, L = _.high, R = _.low, $ = F.high, I = F.low, T = O, U = B, j = A, G = D, me = k, we = X, ge = ie, E = ae, S = V, P = z, N = se, W = fe, J = L, oe = R, Z = $, ee = I, K = 0; K < 80; K++) {
              var ue,
                le,
                de = f[K];
              if (K < 16) le = de.high = v[h + K * 2] | 0, ue = de.low = v[h + K * 2 + 1] | 0;else {
                var ye = f[K - 15],
                  Ce = ye.high,
                  Re = ye.low,
                  $e = (Ce >>> 1 | Re << 31) ^ (Ce >>> 8 | Re << 24) ^ Ce >>> 7,
                  Me = (Re >>> 1 | Ce << 31) ^ (Re >>> 8 | Ce << 24) ^ (Re >>> 7 | Ce << 25),
                  st = f[K - 2],
                  ct = st.high,
                  rr = st.low,
                  kr = (ct >>> 19 | rr << 13) ^ (ct << 3 | rr >>> 29) ^ ct >>> 6,
                  Fn = (rr >>> 19 | ct << 13) ^ (rr << 3 | ct >>> 29) ^ (rr >>> 6 | ct << 26),
                  nt = f[K - 7],
                  mt = nt.high,
                  so = nt.low,
                  Sl = f[K - 16],
                  ep = Sl.high,
                  Dl = Sl.low;
                ue = Me + so, le = $e + mt + (ue >>> 0 < Me >>> 0 ? 1 : 0), ue = ue + Fn, le = le + kr + (ue >>> 0 < Fn >>> 0 ? 1 : 0), ue = ue + Dl, le = le + ep + (ue >>> 0 < Dl >>> 0 ? 1 : 0), de.high = le, de.low = ue;
              }
              var tp = S & N ^ ~S & J,
                _l = P & W ^ ~P & oe,
                rp = T & j ^ T & me ^ j & me,
                np = U & G ^ U & we ^ G & we,
                op = (T >>> 28 | U << 4) ^ (T << 30 | U >>> 2) ^ (T << 25 | U >>> 7),
                kl = (U >>> 28 | T << 4) ^ (U << 30 | T >>> 2) ^ (U << 25 | T >>> 7),
                ap = (S >>> 14 | P << 18) ^ (S >>> 18 | P << 14) ^ (S << 23 | P >>> 9),
                ip = (P >>> 14 | S << 18) ^ (P >>> 18 | S << 14) ^ (P << 23 | S >>> 9),
                Ol = d[K],
                sp = Ol.high,
                Tl = Ol.low,
                ft = ee + ip,
                nr = Z + ap + (ft >>> 0 < ee >>> 0 ? 1 : 0),
                ft = ft + _l,
                nr = nr + tp + (ft >>> 0 < _l >>> 0 ? 1 : 0),
                ft = ft + Tl,
                nr = nr + sp + (ft >>> 0 < Tl >>> 0 ? 1 : 0),
                ft = ft + ue,
                nr = nr + le + (ft >>> 0 < ue >>> 0 ? 1 : 0),
                Rl = kl + np,
                lp = op + rp + (Rl >>> 0 < kl >>> 0 ? 1 : 0);
              Z = J, ee = oe, J = N, oe = W, N = S, W = P, P = E + ft | 0, S = ge + nr + (P >>> 0 < E >>> 0 ? 1 : 0) | 0, ge = me, E = we, me = j, we = G, j = T, G = U, U = ft + Rl | 0, T = nr + lp + (U >>> 0 < ft >>> 0 ? 1 : 0) | 0;
            }
            B = b.low = B + U, b.high = O + T + (B >>> 0 < U >>> 0 ? 1 : 0), D = m.low = D + G, m.high = A + j + (D >>> 0 < G >>> 0 ? 1 : 0), X = x.low = X + we, x.high = k + me + (X >>> 0 < we >>> 0 ? 1 : 0), ae = y.low = ae + E, y.high = ie + ge + (ae >>> 0 < E >>> 0 ? 1 : 0), z = w.low = z + P, w.high = V + S + (z >>> 0 < P >>> 0 ? 1 : 0), fe = C.low = fe + W, C.high = se + N + (fe >>> 0 < W >>> 0 ? 1 : 0), R = _.low = R + oe, _.high = L + J + (R >>> 0 < oe >>> 0 ? 1 : 0), I = F.low = I + ee, F.high = $ + Z + (I >>> 0 < ee >>> 0 ? 1 : 0);
          },
          _doFinalize: function () {
            var v = this._data,
              h = v.words,
              g = this._nDataBytes * 8,
              b = v.sigBytes * 8;
            h[b >>> 5] |= 128 << 24 - b % 32, h[(b + 128 >>> 10 << 5) + 30] = Math.floor(g / 4294967296), h[(b + 128 >>> 10 << 5) + 31] = g, v.sigBytes = h.length * 4, this._process();
            var m = this._hash.toX32();
            return m;
          },
          clone: function () {
            var v = a.clone.call(this);
            return v._hash = this._hash.clone(), v;
          },
          blockSize: 32
        });
        n.SHA512 = a._createHelper(p), n.HmacSHA512 = a._createHmacHelper(p);
      }(), r.SHA512;
    });
  }(R8)), ha;
}
var xa = {},
  P8 = {
    get exports() {
      return xa;
    },
    set exports(e) {
      xa = e;
    }
  },
  Tu;
function $8() {
  return Tu || (Tu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), Ai(), Jd());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.x64,
          a = o.Word,
          i = o.WordArray,
          s = n.algo,
          u = s.SHA512,
          l = s.SHA384 = u.extend({
            _doReset: function () {
              this._hash = new i.init([new a.init(3418070365, 3238371032), new a.init(1654270250, 914150663), new a.init(2438529370, 812702999), new a.init(355462360, 4144912697), new a.init(1731405415, 4290775857), new a.init(2394180231, 1750603025), new a.init(3675008525, 1694076839), new a.init(1203062813, 3204075428)]);
            },
            _doFinalize: function () {
              var c = u._doFinalize.call(this);
              return c.sigBytes -= 16, c;
            }
          });
        n.SHA384 = u._createHelper(l), n.HmacSHA384 = u._createHmacHelper(l);
      }(), r.SHA384;
    });
  }(P8)), xa;
}
var ma = {},
  L8 = {
    get exports() {
      return ma;
    },
    set exports(e) {
      ma = e;
    }
  },
  Ru;
function I8() {
  return Ru || (Ru = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), Ai());
    })(Ae, function (r) {
      return function (n) {
        var o = r,
          a = o.lib,
          i = a.WordArray,
          s = a.Hasher,
          u = o.x64,
          l = u.Word,
          c = o.algo,
          d = [],
          f = [],
          p = [];
        (function () {
          for (var g = 1, b = 0, m = 0; m < 24; m++) {
            d[g + 5 * b] = (m + 1) * (m + 2) / 2 % 64;
            var x = b % 5,
              y = (2 * g + 3 * b) % 5;
            g = x, b = y;
          }
          for (var g = 0; g < 5; g++) for (var b = 0; b < 5; b++) f[g + 5 * b] = b + (2 * g + 3 * b) % 5 * 5;
          for (var w = 1, C = 0; C < 24; C++) {
            for (var _ = 0, F = 0, O = 0; O < 7; O++) {
              if (w & 1) {
                var B = (1 << O) - 1;
                B < 32 ? F ^= 1 << B : _ ^= 1 << B - 32;
              }
              w & 128 ? w = w << 1 ^ 113 : w <<= 1;
            }
            p[C] = l.create(_, F);
          }
        })();
        var v = [];
        (function () {
          for (var g = 0; g < 25; g++) v[g] = l.create();
        })();
        var h = c.SHA3 = s.extend({
          cfg: s.cfg.extend({
            outputLength: 512
          }),
          _doReset: function () {
            for (var g = this._state = [], b = 0; b < 25; b++) g[b] = new l.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function (g, b) {
            for (var m = this._state, x = this.blockSize / 2, y = 0; y < x; y++) {
              var w = g[b + 2 * y],
                C = g[b + 2 * y + 1];
              w = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
              var _ = m[y];
              _.high ^= C, _.low ^= w;
            }
            for (var F = 0; F < 24; F++) {
              for (var O = 0; O < 5; O++) {
                for (var B = 0, A = 0, D = 0; D < 5; D++) {
                  var _ = m[O + 5 * D];
                  B ^= _.high, A ^= _.low;
                }
                var k = v[O];
                k.high = B, k.low = A;
              }
              for (var O = 0; O < 5; O++) for (var X = v[(O + 4) % 5], ie = v[(O + 1) % 5], ae = ie.high, V = ie.low, B = X.high ^ (ae << 1 | V >>> 31), A = X.low ^ (V << 1 | ae >>> 31), D = 0; D < 5; D++) {
                var _ = m[O + 5 * D];
                _.high ^= B, _.low ^= A;
              }
              for (var z = 1; z < 25; z++) {
                var B,
                  A,
                  _ = m[z],
                  se = _.high,
                  fe = _.low,
                  L = d[z];
                L < 32 ? (B = se << L | fe >>> 32 - L, A = fe << L | se >>> 32 - L) : (B = fe << L - 32 | se >>> 64 - L, A = se << L - 32 | fe >>> 64 - L);
                var R = v[f[z]];
                R.high = B, R.low = A;
              }
              var $ = v[0],
                I = m[0];
              $.high = I.high, $.low = I.low;
              for (var O = 0; O < 5; O++) for (var D = 0; D < 5; D++) {
                var z = O + 5 * D,
                  _ = m[z],
                  T = v[z],
                  U = v[(O + 1) % 5 + 5 * D],
                  j = v[(O + 2) % 5 + 5 * D];
                _.high = T.high ^ ~U.high & j.high, _.low = T.low ^ ~U.low & j.low;
              }
              var _ = m[0],
                G = p[F];
              _.high ^= G.high, _.low ^= G.low;
            }
          },
          _doFinalize: function () {
            var g = this._data,
              b = g.words;
            this._nDataBytes * 8;
            var m = g.sigBytes * 8,
              x = this.blockSize * 32;
            b[m >>> 5] |= 1 << 24 - m % 32, b[(n.ceil((m + 1) / x) * x >>> 5) - 1] |= 128, g.sigBytes = b.length * 4, this._process();
            for (var y = this._state, w = this.cfg.outputLength / 8, C = w / 8, _ = [], F = 0; F < C; F++) {
              var O = y[F],
                B = O.high,
                A = O.low;
              B = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, _.push(A), _.push(B);
            }
            return new i.init(_, w);
          },
          clone: function () {
            for (var g = s.clone.call(this), b = g._state = this._state.slice(0), m = 0; m < 25; m++) b[m] = b[m].clone();
            return g;
          }
        });
        o.SHA3 = s._createHelper(h), o.HmacSHA3 = s._createHmacHelper(h);
      }(Math), r.SHA3;
    });
  }(L8)), ma;
}
var ga = {},
  N8 = {
    get exports() {
      return ga;
    },
    set exports(e) {
      ga = e;
    }
  },
  Pu;
function z8() {
  return Pu || (Pu = 1, function (e, t) {
    (function (r, n) {
      e.exports = n(_e());
    })(Ae, function (r) {
      /** @preserve
      (c) 2012 by Cédric Mesnil. All rights reserved.
      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      */
      return function (n) {
        var o = r,
          a = o.lib,
          i = a.WordArray,
          s = a.Hasher,
          u = o.algo,
          l = i.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]),
          c = i.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]),
          d = i.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]),
          f = i.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]),
          p = i.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
          v = i.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
          h = u.RIPEMD160 = s.extend({
            _doReset: function () {
              this._hash = i.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
            },
            _doProcessBlock: function (C, _) {
              for (var F = 0; F < 16; F++) {
                var O = _ + F,
                  B = C[O];
                C[O] = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360;
              }
              var A = this._hash.words,
                D = p.words,
                k = v.words,
                X = l.words,
                ie = c.words,
                ae = d.words,
                V = f.words,
                z,
                se,
                fe,
                L,
                R,
                $,
                I,
                T,
                U,
                j;
              $ = z = A[0], I = se = A[1], T = fe = A[2], U = L = A[3], j = R = A[4];
              for (var G, F = 0; F < 80; F += 1) G = z + C[_ + X[F]] | 0, F < 16 ? G += g(se, fe, L) + D[0] : F < 32 ? G += b(se, fe, L) + D[1] : F < 48 ? G += m(se, fe, L) + D[2] : F < 64 ? G += x(se, fe, L) + D[3] : G += y(se, fe, L) + D[4], G = G | 0, G = w(G, ae[F]), G = G + R | 0, z = R, R = L, L = w(fe, 10), fe = se, se = G, G = $ + C[_ + ie[F]] | 0, F < 16 ? G += y(I, T, U) + k[0] : F < 32 ? G += x(I, T, U) + k[1] : F < 48 ? G += m(I, T, U) + k[2] : F < 64 ? G += b(I, T, U) + k[3] : G += g(I, T, U) + k[4], G = G | 0, G = w(G, V[F]), G = G + j | 0, $ = j, j = U, U = w(T, 10), T = I, I = G;
              G = A[1] + fe + U | 0, A[1] = A[2] + L + j | 0, A[2] = A[3] + R + $ | 0, A[3] = A[4] + z + I | 0, A[4] = A[0] + se + T | 0, A[0] = G;
            },
            _doFinalize: function () {
              var C = this._data,
                _ = C.words,
                F = this._nDataBytes * 8,
                O = C.sigBytes * 8;
              _[O >>> 5] |= 128 << 24 - O % 32, _[(O + 64 >>> 9 << 4) + 14] = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360, C.sigBytes = (_.length + 1) * 4, this._process();
              for (var B = this._hash, A = B.words, D = 0; D < 5; D++) {
                var k = A[D];
                A[D] = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360;
              }
              return B;
            },
            clone: function () {
              var C = s.clone.call(this);
              return C._hash = this._hash.clone(), C;
            }
          });
        function g(C, _, F) {
          return C ^ _ ^ F;
        }
        function b(C, _, F) {
          return C & _ | ~C & F;
        }
        function m(C, _, F) {
          return (C | ~_) ^ F;
        }
        function x(C, _, F) {
          return C & F | _ & ~F;
        }
        function y(C, _, F) {
          return C ^ (_ | ~F);
        }
        function w(C, _) {
          return C << _ | C >>> 32 - _;
        }
        o.RIPEMD160 = s._createHelper(h), o.HmacRIPEMD160 = s._createHmacHelper(h);
      }(), r.RIPEMD160;
    });
  }(N8)), ga;
}
var ya = {},
  H8 = {
    get exports() {
      return ya;
    },
    set exports(e) {
      ya = e;
    }
  },
  $u;
function wl() {
  return $u || ($u = 1, function (e, t) {
    (function (r, n) {
      e.exports = n(_e());
    })(Ae, function (r) {
      (function () {
        var n = r,
          o = n.lib,
          a = o.Base,
          i = n.enc,
          s = i.Utf8,
          u = n.algo;
        u.HMAC = a.extend({
          init: function (l, c) {
            l = this._hasher = new l.init(), typeof c == "string" && (c = s.parse(c));
            var d = l.blockSize,
              f = d * 4;
            c.sigBytes > f && (c = l.finalize(c)), c.clamp();
            for (var p = this._oKey = c.clone(), v = this._iKey = c.clone(), h = p.words, g = v.words, b = 0; b < d; b++) h[b] ^= 1549556828, g[b] ^= 909522486;
            p.sigBytes = v.sigBytes = f, this.reset();
          },
          reset: function () {
            var l = this._hasher;
            l.reset(), l.update(this._iKey);
          },
          update: function (l) {
            return this._hasher.update(l), this;
          },
          finalize: function (l) {
            var c = this._hasher,
              d = c.finalize(l);
            c.reset();
            var f = c.finalize(this._oKey.clone().concat(d));
            return f;
          }
        });
      })();
    });
  }(H8)), ya;
}
var ba = {},
  M8 = {
    get exports() {
      return ba;
    },
    set exports(e) {
      ba = e;
    }
  },
  Lu;
function U8() {
  return Lu || (Lu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), Al(), wl());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.Base,
          i = o.WordArray,
          s = n.algo,
          u = s.SHA256,
          l = s.HMAC,
          c = s.PBKDF2 = a.extend({
            cfg: a.extend({
              keySize: 4,
              hasher: u,
              iterations: 250000
            }),
            init: function (d) {
              this.cfg = this.cfg.extend(d);
            },
            compute: function (d, f) {
              for (var p = this.cfg, v = l.create(p.hasher, d), h = i.create(), g = i.create([1]), b = h.words, m = g.words, x = p.keySize, y = p.iterations; b.length < x;) {
                var w = v.update(f).finalize(g);
                v.reset();
                for (var C = w.words, _ = C.length, F = w, O = 1; O < y; O++) {
                  F = v.finalize(F), v.reset();
                  for (var B = F.words, A = 0; A < _; A++) C[A] ^= B[A];
                }
                h.concat(w), m[0]++;
              }
              return h.sigBytes = x * 4, h;
            }
          });
        n.PBKDF2 = function (d, f, p) {
          return c.create(p).compute(d, f);
        };
      }(), r.PBKDF2;
    });
  }(M8)), ba;
}
var Ca = {},
  V8 = {
    get exports() {
      return Ca;
    },
    set exports(e) {
      Ca = e;
    }
  },
  Iu;
function _r() {
  return Iu || (Iu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), Zd(), wl());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.Base,
          i = o.WordArray,
          s = n.algo,
          u = s.MD5,
          l = s.EvpKDF = a.extend({
            cfg: a.extend({
              keySize: 4,
              hasher: u,
              iterations: 1
            }),
            init: function (c) {
              this.cfg = this.cfg.extend(c);
            },
            compute: function (c, d) {
              for (var f, p = this.cfg, v = p.hasher.create(), h = i.create(), g = h.words, b = p.keySize, m = p.iterations; g.length < b;) {
                f && v.update(f), f = v.update(c).finalize(d), v.reset();
                for (var x = 1; x < m; x++) f = v.finalize(f), v.reset();
                h.concat(f);
              }
              return h.sigBytes = b * 4, h;
            }
          });
        n.EvpKDF = function (c, d, f) {
          return l.create(f).compute(c, d);
        };
      }(), r.EvpKDF;
    });
  }(V8)), Ca;
}
var Ea = {},
  j8 = {
    get exports() {
      return Ea;
    },
    set exports(e) {
      Ea = e;
    }
  },
  Nu;
function et() {
  return Nu || (Nu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), _r());
    })(Ae, function (r) {
      r.lib.Cipher || function (n) {
        var o = r,
          a = o.lib,
          i = a.Base,
          s = a.WordArray,
          u = a.BufferedBlockAlgorithm,
          l = o.enc;
        l.Utf8;
        var c = l.Base64,
          d = o.algo,
          f = d.EvpKDF,
          p = a.Cipher = u.extend({
            cfg: i.extend(),
            createEncryptor: function (B, A) {
              return this.create(this._ENC_XFORM_MODE, B, A);
            },
            createDecryptor: function (B, A) {
              return this.create(this._DEC_XFORM_MODE, B, A);
            },
            init: function (B, A, D) {
              this.cfg = this.cfg.extend(D), this._xformMode = B, this._key = A, this.reset();
            },
            reset: function () {
              u.reset.call(this), this._doReset();
            },
            process: function (B) {
              return this._append(B), this._process();
            },
            finalize: function (B) {
              B && this._append(B);
              var A = this._doFinalize();
              return A;
            },
            keySize: 4,
            ivSize: 4,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            _createHelper: function () {
              function B(A) {
                return typeof A == "string" ? O : C;
              }
              return function (A) {
                return {
                  encrypt: function (D, k, X) {
                    return B(k).encrypt(A, D, k, X);
                  },
                  decrypt: function (D, k, X) {
                    return B(k).decrypt(A, D, k, X);
                  }
                };
              };
            }()
          });
        a.StreamCipher = p.extend({
          _doFinalize: function () {
            var B = this._process(!0);
            return B;
          },
          blockSize: 1
        });
        var v = o.mode = {},
          h = a.BlockCipherMode = i.extend({
            createEncryptor: function (B, A) {
              return this.Encryptor.create(B, A);
            },
            createDecryptor: function (B, A) {
              return this.Decryptor.create(B, A);
            },
            init: function (B, A) {
              this._cipher = B, this._iv = A;
            }
          }),
          g = v.CBC = function () {
            var B = h.extend();
            B.Encryptor = B.extend({
              processBlock: function (D, k) {
                var X = this._cipher,
                  ie = X.blockSize;
                A.call(this, D, k, ie), X.encryptBlock(D, k), this._prevBlock = D.slice(k, k + ie);
              }
            }), B.Decryptor = B.extend({
              processBlock: function (D, k) {
                var X = this._cipher,
                  ie = X.blockSize,
                  ae = D.slice(k, k + ie);
                X.decryptBlock(D, k), A.call(this, D, k, ie), this._prevBlock = ae;
              }
            });
            function A(D, k, X) {
              var ie,
                ae = this._iv;
              ae ? (ie = ae, this._iv = n) : ie = this._prevBlock;
              for (var V = 0; V < X; V++) D[k + V] ^= ie[V];
            }
            return B;
          }(),
          b = o.pad = {},
          m = b.Pkcs7 = {
            pad: function (B, A) {
              for (var D = A * 4, k = D - B.sigBytes % D, X = k << 24 | k << 16 | k << 8 | k, ie = [], ae = 0; ae < k; ae += 4) ie.push(X);
              var V = s.create(ie, k);
              B.concat(V);
            },
            unpad: function (B) {
              var A = B.words[B.sigBytes - 1 >>> 2] & 255;
              B.sigBytes -= A;
            }
          };
        a.BlockCipher = p.extend({
          cfg: p.cfg.extend({
            mode: g,
            padding: m
          }),
          reset: function () {
            var B;
            p.reset.call(this);
            var A = this.cfg,
              D = A.iv,
              k = A.mode;
            this._xformMode == this._ENC_XFORM_MODE ? B = k.createEncryptor : (B = k.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == B ? this._mode.init(this, D && D.words) : (this._mode = B.call(k, this, D && D.words), this._mode.__creator = B);
          },
          _doProcessBlock: function (B, A) {
            this._mode.processBlock(B, A);
          },
          _doFinalize: function () {
            var B,
              A = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (A.pad(this._data, this.blockSize), B = this._process(!0)) : (B = this._process(!0), A.unpad(B)), B;
          },
          blockSize: 4
        });
        var x = a.CipherParams = i.extend({
            init: function (B) {
              this.mixIn(B);
            },
            toString: function (B) {
              return (B || this.formatter).stringify(this);
            }
          }),
          y = o.format = {},
          w = y.OpenSSL = {
            stringify: function (B) {
              var A,
                D = B.ciphertext,
                k = B.salt;
              return k ? A = s.create([1398893684, 1701076831]).concat(k).concat(D) : A = D, A.toString(c);
            },
            parse: function (B) {
              var A,
                D = c.parse(B),
                k = D.words;
              return k[0] == 1398893684 && k[1] == 1701076831 && (A = s.create(k.slice(2, 4)), k.splice(0, 4), D.sigBytes -= 16), x.create({
                ciphertext: D,
                salt: A
              });
            }
          },
          C = a.SerializableCipher = i.extend({
            cfg: i.extend({
              format: w
            }),
            encrypt: function (B, A, D, k) {
              k = this.cfg.extend(k);
              var X = B.createEncryptor(D, k),
                ie = X.finalize(A),
                ae = X.cfg;
              return x.create({
                ciphertext: ie,
                key: D,
                iv: ae.iv,
                algorithm: B,
                mode: ae.mode,
                padding: ae.padding,
                blockSize: B.blockSize,
                formatter: k.format
              });
            },
            decrypt: function (B, A, D, k) {
              k = this.cfg.extend(k), A = this._parse(A, k.format);
              var X = B.createDecryptor(D, k).finalize(A.ciphertext);
              return X;
            },
            _parse: function (B, A) {
              return typeof B == "string" ? A.parse(B, this) : B;
            }
          }),
          _ = o.kdf = {},
          F = _.OpenSSL = {
            execute: function (B, A, D, k, X) {
              if (k || (k = s.random(8)), X) var ie = f.create({
                keySize: A + D,
                hasher: X
              }).compute(B, k);else var ie = f.create({
                keySize: A + D
              }).compute(B, k);
              var ae = s.create(ie.words.slice(A), D * 4);
              return ie.sigBytes = A * 4, x.create({
                key: ie,
                iv: ae,
                salt: k
              });
            }
          },
          O = a.PasswordBasedCipher = C.extend({
            cfg: C.cfg.extend({
              kdf: F
            }),
            encrypt: function (B, A, D, k) {
              k = this.cfg.extend(k);
              var X = k.kdf.execute(D, B.keySize, B.ivSize, k.salt, k.hasher);
              k.iv = X.iv;
              var ie = C.encrypt.call(this, B, A, X.key, k);
              return ie.mixIn(X), ie;
            },
            decrypt: function (B, A, D, k) {
              k = this.cfg.extend(k), A = this._parse(A, k.format);
              var X = k.kdf.execute(D, B.keySize, B.ivSize, A.salt, k.hasher);
              k.iv = X.iv;
              var ie = C.decrypt.call(this, B, A, X.key, k);
              return ie;
            }
          });
      }();
    });
  }(j8)), Ea;
}
var Ba = {},
  W8 = {
    get exports() {
      return Ba;
    },
    set exports(e) {
      Ba = e;
    }
  },
  zu;
function q8() {
  return zu || (zu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), et());
    })(Ae, function (r) {
      return r.mode.CFB = function () {
        var n = r.lib.BlockCipherMode.extend();
        n.Encryptor = n.extend({
          processBlock: function (a, i) {
            var s = this._cipher,
              u = s.blockSize;
            o.call(this, a, i, u, s), this._prevBlock = a.slice(i, i + u);
          }
        }), n.Decryptor = n.extend({
          processBlock: function (a, i) {
            var s = this._cipher,
              u = s.blockSize,
              l = a.slice(i, i + u);
            o.call(this, a, i, u, s), this._prevBlock = l;
          }
        });
        function o(a, i, s, u) {
          var l,
            c = this._iv;
          c ? (l = c.slice(0), this._iv = void 0) : l = this._prevBlock, u.encryptBlock(l, 0);
          for (var d = 0; d < s; d++) a[i + d] ^= l[d];
        }
        return n;
      }(), r.mode.CFB;
    });
  }(W8)), Ba;
}
var Aa = {},
  K8 = {
    get exports() {
      return Aa;
    },
    set exports(e) {
      Aa = e;
    }
  },
  Hu;
function G8() {
  return Hu || (Hu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), et());
    })(Ae, function (r) {
      return r.mode.CTR = function () {
        var n = r.lib.BlockCipherMode.extend(),
          o = n.Encryptor = n.extend({
            processBlock: function (a, i) {
              var s = this._cipher,
                u = s.blockSize,
                l = this._iv,
                c = this._counter;
              l && (c = this._counter = l.slice(0), this._iv = void 0);
              var d = c.slice(0);
              s.encryptBlock(d, 0), c[u - 1] = c[u - 1] + 1 | 0;
              for (var f = 0; f < u; f++) a[i + f] ^= d[f];
            }
          });
        return n.Decryptor = o, n;
      }(), r.mode.CTR;
    });
  }(K8)), Aa;
}
var wa = {},
  Y8 = {
    get exports() {
      return wa;
    },
    set exports(e) {
      wa = e;
    }
  },
  Mu;
function X8() {
  return Mu || (Mu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), et());
    })(Ae, function (r) {
      /** @preserve
      * Counter block mode compatible with  Dr Brian Gladman fileenc.c
      * derived from CryptoJS.mode.CTR
      * Jan Hruby jhruby.web@gmail.com
      */
      return r.mode.CTRGladman = function () {
        var n = r.lib.BlockCipherMode.extend();
        function o(s) {
          if ((s >> 24 & 255) === 255) {
            var u = s >> 16 & 255,
              l = s >> 8 & 255,
              c = s & 255;
            u === 255 ? (u = 0, l === 255 ? (l = 0, c === 255 ? c = 0 : ++c) : ++l) : ++u, s = 0, s += u << 16, s += l << 8, s += c;
          } else s += 16777216;
          return s;
        }
        function a(s) {
          return (s[0] = o(s[0])) === 0 && (s[1] = o(s[1])), s;
        }
        var i = n.Encryptor = n.extend({
          processBlock: function (s, u) {
            var l = this._cipher,
              c = l.blockSize,
              d = this._iv,
              f = this._counter;
            d && (f = this._counter = d.slice(0), this._iv = void 0), a(f);
            var p = f.slice(0);
            l.encryptBlock(p, 0);
            for (var v = 0; v < c; v++) s[u + v] ^= p[v];
          }
        });
        return n.Decryptor = i, n;
      }(), r.mode.CTRGladman;
    });
  }(Y8)), wa;
}
var Fa = {},
  Q8 = {
    get exports() {
      return Fa;
    },
    set exports(e) {
      Fa = e;
    }
  },
  Uu;
function Z8() {
  return Uu || (Uu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), et());
    })(Ae, function (r) {
      return r.mode.OFB = function () {
        var n = r.lib.BlockCipherMode.extend(),
          o = n.Encryptor = n.extend({
            processBlock: function (a, i) {
              var s = this._cipher,
                u = s.blockSize,
                l = this._iv,
                c = this._keystream;
              l && (c = this._keystream = l.slice(0), this._iv = void 0), s.encryptBlock(c, 0);
              for (var d = 0; d < u; d++) a[i + d] ^= c[d];
            }
          });
        return n.Decryptor = o, n;
      }(), r.mode.OFB;
    });
  }(Q8)), Fa;
}
var Sa = {},
  J8 = {
    get exports() {
      return Sa;
    },
    set exports(e) {
      Sa = e;
    }
  },
  Vu;
function e4() {
  return Vu || (Vu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), et());
    })(Ae, function (r) {
      return r.mode.ECB = function () {
        var n = r.lib.BlockCipherMode.extend();
        return n.Encryptor = n.extend({
          processBlock: function (o, a) {
            this._cipher.encryptBlock(o, a);
          }
        }), n.Decryptor = n.extend({
          processBlock: function (o, a) {
            this._cipher.decryptBlock(o, a);
          }
        }), n;
      }(), r.mode.ECB;
    });
  }(J8)), Sa;
}
var Da = {},
  t4 = {
    get exports() {
      return Da;
    },
    set exports(e) {
      Da = e;
    }
  },
  ju;
function r4() {
  return ju || (ju = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), et());
    })(Ae, function (r) {
      return r.pad.AnsiX923 = {
        pad: function (n, o) {
          var a = n.sigBytes,
            i = o * 4,
            s = i - a % i,
            u = a + s - 1;
          n.clamp(), n.words[u >>> 2] |= s << 24 - u % 4 * 8, n.sigBytes += s;
        },
        unpad: function (n) {
          var o = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= o;
        }
      }, r.pad.Ansix923;
    });
  }(t4)), Da;
}
var _a = {},
  n4 = {
    get exports() {
      return _a;
    },
    set exports(e) {
      _a = e;
    }
  },
  Wu;
function o4() {
  return Wu || (Wu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), et());
    })(Ae, function (r) {
      return r.pad.Iso10126 = {
        pad: function (n, o) {
          var a = o * 4,
            i = a - n.sigBytes % a;
          n.concat(r.lib.WordArray.random(i - 1)).concat(r.lib.WordArray.create([i << 24], 1));
        },
        unpad: function (n) {
          var o = n.words[n.sigBytes - 1 >>> 2] & 255;
          n.sigBytes -= o;
        }
      }, r.pad.Iso10126;
    });
  }(n4)), _a;
}
var ka = {},
  a4 = {
    get exports() {
      return ka;
    },
    set exports(e) {
      ka = e;
    }
  },
  qu;
function i4() {
  return qu || (qu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), et());
    })(Ae, function (r) {
      return r.pad.Iso97971 = {
        pad: function (n, o) {
          n.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(n, o);
        },
        unpad: function (n) {
          r.pad.ZeroPadding.unpad(n), n.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(a4)), ka;
}
var Oa = {},
  s4 = {
    get exports() {
      return Oa;
    },
    set exports(e) {
      Oa = e;
    }
  },
  Ku;
function l4() {
  return Ku || (Ku = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), et());
    })(Ae, function (r) {
      return r.pad.ZeroPadding = {
        pad: function (n, o) {
          var a = o * 4;
          n.clamp(), n.sigBytes += a - (n.sigBytes % a || a);
        },
        unpad: function (n) {
          for (var o = n.words, a = n.sigBytes - 1, a = n.sigBytes - 1; a >= 0; a--) if (o[a >>> 2] >>> 24 - a % 4 * 8 & 255) {
            n.sigBytes = a + 1;
            break;
          }
        }
      }, r.pad.ZeroPadding;
    });
  }(s4)), Oa;
}
var Ta = {},
  u4 = {
    get exports() {
      return Ta;
    },
    set exports(e) {
      Ta = e;
    }
  },
  Gu;
function c4() {
  return Gu || (Gu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), et());
    })(Ae, function (r) {
      return r.pad.NoPadding = {
        pad: function () {},
        unpad: function () {}
      }, r.pad.NoPadding;
    });
  }(u4)), Ta;
}
var Ra = {},
  f4 = {
    get exports() {
      return Ra;
    },
    set exports(e) {
      Ra = e;
    }
  },
  Yu;
function d4() {
  return Yu || (Yu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), et());
    })(Ae, function (r) {
      return function (n) {
        var o = r,
          a = o.lib,
          i = a.CipherParams,
          s = o.enc,
          u = s.Hex,
          l = o.format;
        l.Hex = {
          stringify: function (c) {
            return c.ciphertext.toString(u);
          },
          parse: function (c) {
            var d = u.parse(c);
            return i.create({
              ciphertext: d
            });
          }
        };
      }(), r.format.Hex;
    });
  }(f4)), Ra;
}
var Pa = {},
  p4 = {
    get exports() {
      return Pa;
    },
    set exports(e) {
      Pa = e;
    }
  },
  Xu;
function v4() {
  return Xu || (Xu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), Gr(), Yr(), _r(), et());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.BlockCipher,
          i = n.algo,
          s = [],
          u = [],
          l = [],
          c = [],
          d = [],
          f = [],
          p = [],
          v = [],
          h = [],
          g = [];
        (function () {
          for (var x = [], y = 0; y < 256; y++) y < 128 ? x[y] = y << 1 : x[y] = y << 1 ^ 283;
          for (var w = 0, C = 0, y = 0; y < 256; y++) {
            var _ = C ^ C << 1 ^ C << 2 ^ C << 3 ^ C << 4;
            _ = _ >>> 8 ^ _ & 255 ^ 99, s[w] = _, u[_] = w;
            var F = x[w],
              O = x[F],
              B = x[O],
              A = x[_] * 257 ^ _ * 16843008;
            l[w] = A << 24 | A >>> 8, c[w] = A << 16 | A >>> 16, d[w] = A << 8 | A >>> 24, f[w] = A;
            var A = B * 16843009 ^ O * 65537 ^ F * 257 ^ w * 16843008;
            p[_] = A << 24 | A >>> 8, v[_] = A << 16 | A >>> 16, h[_] = A << 8 | A >>> 24, g[_] = A, w ? (w = F ^ x[x[x[B ^ F]]], C ^= x[x[C]]) : w = C = 1;
          }
        })();
        var b = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
          m = i.AES = a.extend({
            _doReset: function () {
              var x;
              if (!(this._nRounds && this._keyPriorReset === this._key)) {
                for (var y = this._keyPriorReset = this._key, w = y.words, C = y.sigBytes / 4, _ = this._nRounds = C + 6, F = (_ + 1) * 4, O = this._keySchedule = [], B = 0; B < F; B++) B < C ? O[B] = w[B] : (x = O[B - 1], B % C ? C > 6 && B % C == 4 && (x = s[x >>> 24] << 24 | s[x >>> 16 & 255] << 16 | s[x >>> 8 & 255] << 8 | s[x & 255]) : (x = x << 8 | x >>> 24, x = s[x >>> 24] << 24 | s[x >>> 16 & 255] << 16 | s[x >>> 8 & 255] << 8 | s[x & 255], x ^= b[B / C | 0] << 24), O[B] = O[B - C] ^ x);
                for (var A = this._invKeySchedule = [], D = 0; D < F; D++) {
                  var B = F - D;
                  if (D % 4) var x = O[B];else var x = O[B - 4];
                  D < 4 || B <= 4 ? A[D] = x : A[D] = p[s[x >>> 24]] ^ v[s[x >>> 16 & 255]] ^ h[s[x >>> 8 & 255]] ^ g[s[x & 255]];
                }
              }
            },
            encryptBlock: function (x, y) {
              this._doCryptBlock(x, y, this._keySchedule, l, c, d, f, s);
            },
            decryptBlock: function (x, y) {
              var w = x[y + 1];
              x[y + 1] = x[y + 3], x[y + 3] = w, this._doCryptBlock(x, y, this._invKeySchedule, p, v, h, g, u);
              var w = x[y + 1];
              x[y + 1] = x[y + 3], x[y + 3] = w;
            },
            _doCryptBlock: function (x, y, w, C, _, F, O, B) {
              for (var A = this._nRounds, D = x[y] ^ w[0], k = x[y + 1] ^ w[1], X = x[y + 2] ^ w[2], ie = x[y + 3] ^ w[3], ae = 4, V = 1; V < A; V++) {
                var z = C[D >>> 24] ^ _[k >>> 16 & 255] ^ F[X >>> 8 & 255] ^ O[ie & 255] ^ w[ae++],
                  se = C[k >>> 24] ^ _[X >>> 16 & 255] ^ F[ie >>> 8 & 255] ^ O[D & 255] ^ w[ae++],
                  fe = C[X >>> 24] ^ _[ie >>> 16 & 255] ^ F[D >>> 8 & 255] ^ O[k & 255] ^ w[ae++],
                  L = C[ie >>> 24] ^ _[D >>> 16 & 255] ^ F[k >>> 8 & 255] ^ O[X & 255] ^ w[ae++];
                D = z, k = se, X = fe, ie = L;
              }
              var z = (B[D >>> 24] << 24 | B[k >>> 16 & 255] << 16 | B[X >>> 8 & 255] << 8 | B[ie & 255]) ^ w[ae++],
                se = (B[k >>> 24] << 24 | B[X >>> 16 & 255] << 16 | B[ie >>> 8 & 255] << 8 | B[D & 255]) ^ w[ae++],
                fe = (B[X >>> 24] << 24 | B[ie >>> 16 & 255] << 16 | B[D >>> 8 & 255] << 8 | B[k & 255]) ^ w[ae++],
                L = (B[ie >>> 24] << 24 | B[D >>> 16 & 255] << 16 | B[k >>> 8 & 255] << 8 | B[X & 255]) ^ w[ae++];
              x[y] = z, x[y + 1] = se, x[y + 2] = fe, x[y + 3] = L;
            },
            keySize: 8
          });
        n.AES = a._createHelper(m);
      }(), r.AES;
    });
  }(p4)), Pa;
}
var $a = {},
  h4 = {
    get exports() {
      return $a;
    },
    set exports(e) {
      $a = e;
    }
  },
  Qu;
function x4() {
  return Qu || (Qu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), Gr(), Yr(), _r(), et());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.WordArray,
          i = o.BlockCipher,
          s = n.algo,
          u = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4],
          l = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32],
          c = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
          d = [{
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          }, {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          }, {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          }, {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          }, {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          }, {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          }, {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          }, {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }],
          f = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679],
          p = s.DES = i.extend({
            _doReset: function () {
              for (var b = this._key, m = b.words, x = [], y = 0; y < 56; y++) {
                var w = u[y] - 1;
                x[y] = m[w >>> 5] >>> 31 - w % 32 & 1;
              }
              for (var C = this._subKeys = [], _ = 0; _ < 16; _++) {
                for (var F = C[_] = [], O = c[_], y = 0; y < 24; y++) F[y / 6 | 0] |= x[(l[y] - 1 + O) % 28] << 31 - y % 6, F[4 + (y / 6 | 0)] |= x[28 + (l[y + 24] - 1 + O) % 28] << 31 - y % 6;
                F[0] = F[0] << 1 | F[0] >>> 31;
                for (var y = 1; y < 7; y++) F[y] = F[y] >>> (y - 1) * 4 + 3;
                F[7] = F[7] << 5 | F[7] >>> 27;
              }
              for (var B = this._invSubKeys = [], y = 0; y < 16; y++) B[y] = C[15 - y];
            },
            encryptBlock: function (b, m) {
              this._doCryptBlock(b, m, this._subKeys);
            },
            decryptBlock: function (b, m) {
              this._doCryptBlock(b, m, this._invSubKeys);
            },
            _doCryptBlock: function (b, m, x) {
              this._lBlock = b[m], this._rBlock = b[m + 1], v.call(this, 4, 252645135), v.call(this, 16, 65535), h.call(this, 2, 858993459), h.call(this, 8, 16711935), v.call(this, 1, 1431655765);
              for (var y = 0; y < 16; y++) {
                for (var w = x[y], C = this._lBlock, _ = this._rBlock, F = 0, O = 0; O < 8; O++) F |= d[O][((_ ^ w[O]) & f[O]) >>> 0];
                this._lBlock = _, this._rBlock = C ^ F;
              }
              var B = this._lBlock;
              this._lBlock = this._rBlock, this._rBlock = B, v.call(this, 1, 1431655765), h.call(this, 8, 16711935), h.call(this, 2, 858993459), v.call(this, 16, 65535), v.call(this, 4, 252645135), b[m] = this._lBlock, b[m + 1] = this._rBlock;
            },
            keySize: 2,
            ivSize: 2,
            blockSize: 2
          });
        function v(b, m) {
          var x = (this._lBlock >>> b ^ this._rBlock) & m;
          this._rBlock ^= x, this._lBlock ^= x << b;
        }
        function h(b, m) {
          var x = (this._rBlock >>> b ^ this._lBlock) & m;
          this._lBlock ^= x, this._rBlock ^= x << b;
        }
        n.DES = i._createHelper(p);
        var g = s.TripleDES = i.extend({
          _doReset: function () {
            var b = this._key,
              m = b.words;
            if (m.length !== 2 && m.length !== 4 && m.length < 6) throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var x = m.slice(0, 2),
              y = m.length < 4 ? m.slice(0, 2) : m.slice(2, 4),
              w = m.length < 6 ? m.slice(0, 2) : m.slice(4, 6);
            this._des1 = p.createEncryptor(a.create(x)), this._des2 = p.createEncryptor(a.create(y)), this._des3 = p.createEncryptor(a.create(w));
          },
          encryptBlock: function (b, m) {
            this._des1.encryptBlock(b, m), this._des2.decryptBlock(b, m), this._des3.encryptBlock(b, m);
          },
          decryptBlock: function (b, m) {
            this._des3.decryptBlock(b, m), this._des2.encryptBlock(b, m), this._des1.decryptBlock(b, m);
          },
          keySize: 6,
          ivSize: 2,
          blockSize: 2
        });
        n.TripleDES = i._createHelper(g);
      }(), r.TripleDES;
    });
  }(h4)), $a;
}
var La = {},
  m4 = {
    get exports() {
      return La;
    },
    set exports(e) {
      La = e;
    }
  },
  Zu;
function g4() {
  return Zu || (Zu = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), Gr(), Yr(), _r(), et());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.StreamCipher,
          i = n.algo,
          s = i.RC4 = a.extend({
            _doReset: function () {
              for (var c = this._key, d = c.words, f = c.sigBytes, p = this._S = [], v = 0; v < 256; v++) p[v] = v;
              for (var v = 0, h = 0; v < 256; v++) {
                var g = v % f,
                  b = d[g >>> 2] >>> 24 - g % 4 * 8 & 255;
                h = (h + p[v] + b) % 256;
                var m = p[v];
                p[v] = p[h], p[h] = m;
              }
              this._i = this._j = 0;
            },
            _doProcessBlock: function (c, d) {
              c[d] ^= u.call(this);
            },
            keySize: 8,
            ivSize: 0
          });
        function u() {
          for (var c = this._S, d = this._i, f = this._j, p = 0, v = 0; v < 4; v++) {
            d = (d + 1) % 256, f = (f + c[d]) % 256;
            var h = c[d];
            c[d] = c[f], c[f] = h, p |= c[(c[d] + c[f]) % 256] << 24 - v * 8;
          }
          return this._i = d, this._j = f, p;
        }
        n.RC4 = a._createHelper(s);
        var l = i.RC4Drop = s.extend({
          cfg: s.cfg.extend({
            drop: 192
          }),
          _doReset: function () {
            s._doReset.call(this);
            for (var c = this.cfg.drop; c > 0; c--) u.call(this);
          }
        });
        n.RC4Drop = a._createHelper(l);
      }(), r.RC4;
    });
  }(m4)), La;
}
var Ia = {},
  y4 = {
    get exports() {
      return Ia;
    },
    set exports(e) {
      Ia = e;
    }
  },
  Ju;
function b4() {
  return Ju || (Ju = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), Gr(), Yr(), _r(), et());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.StreamCipher,
          i = n.algo,
          s = [],
          u = [],
          l = [],
          c = i.Rabbit = a.extend({
            _doReset: function () {
              for (var f = this._key.words, p = this.cfg.iv, v = 0; v < 4; v++) f[v] = (f[v] << 8 | f[v] >>> 24) & 16711935 | (f[v] << 24 | f[v] >>> 8) & 4278255360;
              var h = this._X = [f[0], f[3] << 16 | f[2] >>> 16, f[1], f[0] << 16 | f[3] >>> 16, f[2], f[1] << 16 | f[0] >>> 16, f[3], f[2] << 16 | f[1] >>> 16],
                g = this._C = [f[2] << 16 | f[2] >>> 16, f[0] & 4294901760 | f[1] & 65535, f[3] << 16 | f[3] >>> 16, f[1] & 4294901760 | f[2] & 65535, f[0] << 16 | f[0] >>> 16, f[2] & 4294901760 | f[3] & 65535, f[1] << 16 | f[1] >>> 16, f[3] & 4294901760 | f[0] & 65535];
              this._b = 0;
              for (var v = 0; v < 4; v++) d.call(this);
              for (var v = 0; v < 8; v++) g[v] ^= h[v + 4 & 7];
              if (p) {
                var b = p.words,
                  m = b[0],
                  x = b[1],
                  y = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360,
                  w = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360,
                  C = y >>> 16 | w & 4294901760,
                  _ = w << 16 | y & 65535;
                g[0] ^= y, g[1] ^= C, g[2] ^= w, g[3] ^= _, g[4] ^= y, g[5] ^= C, g[6] ^= w, g[7] ^= _;
                for (var v = 0; v < 4; v++) d.call(this);
              }
            },
            _doProcessBlock: function (f, p) {
              var v = this._X;
              d.call(this), s[0] = v[0] ^ v[5] >>> 16 ^ v[3] << 16, s[1] = v[2] ^ v[7] >>> 16 ^ v[5] << 16, s[2] = v[4] ^ v[1] >>> 16 ^ v[7] << 16, s[3] = v[6] ^ v[3] >>> 16 ^ v[1] << 16;
              for (var h = 0; h < 4; h++) s[h] = (s[h] << 8 | s[h] >>> 24) & 16711935 | (s[h] << 24 | s[h] >>> 8) & 4278255360, f[p + h] ^= s[h];
            },
            blockSize: 4,
            ivSize: 2
          });
        function d() {
          for (var f = this._X, p = this._C, v = 0; v < 8; v++) u[v] = p[v];
          p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < u[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < u[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < u[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < u[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < u[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < u[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < u[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < u[7] >>> 0 ? 1 : 0;
          for (var v = 0; v < 8; v++) {
            var h = f[v] + p[v],
              g = h & 65535,
              b = h >>> 16,
              m = ((g * g >>> 17) + g * b >>> 15) + b * b,
              x = ((h & 4294901760) * h | 0) + ((h & 65535) * h | 0);
            l[v] = m ^ x;
          }
          f[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, f[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, f[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, f[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, f[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, f[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, f[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, f[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
        }
        n.Rabbit = a._createHelper(c);
      }(), r.Rabbit;
    });
  }(y4)), Ia;
}
var Na = {},
  C4 = {
    get exports() {
      return Na;
    },
    set exports(e) {
      Na = e;
    }
  },
  ec;
function E4() {
  return ec || (ec = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), Gr(), Yr(), _r(), et());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.StreamCipher,
          i = n.algo,
          s = [],
          u = [],
          l = [],
          c = i.RabbitLegacy = a.extend({
            _doReset: function () {
              var f = this._key.words,
                p = this.cfg.iv,
                v = this._X = [f[0], f[3] << 16 | f[2] >>> 16, f[1], f[0] << 16 | f[3] >>> 16, f[2], f[1] << 16 | f[0] >>> 16, f[3], f[2] << 16 | f[1] >>> 16],
                h = this._C = [f[2] << 16 | f[2] >>> 16, f[0] & 4294901760 | f[1] & 65535, f[3] << 16 | f[3] >>> 16, f[1] & 4294901760 | f[2] & 65535, f[0] << 16 | f[0] >>> 16, f[2] & 4294901760 | f[3] & 65535, f[1] << 16 | f[1] >>> 16, f[3] & 4294901760 | f[0] & 65535];
              this._b = 0;
              for (var g = 0; g < 4; g++) d.call(this);
              for (var g = 0; g < 8; g++) h[g] ^= v[g + 4 & 7];
              if (p) {
                var b = p.words,
                  m = b[0],
                  x = b[1],
                  y = (m << 8 | m >>> 24) & 16711935 | (m << 24 | m >>> 8) & 4278255360,
                  w = (x << 8 | x >>> 24) & 16711935 | (x << 24 | x >>> 8) & 4278255360,
                  C = y >>> 16 | w & 4294901760,
                  _ = w << 16 | y & 65535;
                h[0] ^= y, h[1] ^= C, h[2] ^= w, h[3] ^= _, h[4] ^= y, h[5] ^= C, h[6] ^= w, h[7] ^= _;
                for (var g = 0; g < 4; g++) d.call(this);
              }
            },
            _doProcessBlock: function (f, p) {
              var v = this._X;
              d.call(this), s[0] = v[0] ^ v[5] >>> 16 ^ v[3] << 16, s[1] = v[2] ^ v[7] >>> 16 ^ v[5] << 16, s[2] = v[4] ^ v[1] >>> 16 ^ v[7] << 16, s[3] = v[6] ^ v[3] >>> 16 ^ v[1] << 16;
              for (var h = 0; h < 4; h++) s[h] = (s[h] << 8 | s[h] >>> 24) & 16711935 | (s[h] << 24 | s[h] >>> 8) & 4278255360, f[p + h] ^= s[h];
            },
            blockSize: 4,
            ivSize: 2
          });
        function d() {
          for (var f = this._X, p = this._C, v = 0; v < 8; v++) u[v] = p[v];
          p[0] = p[0] + 1295307597 + this._b | 0, p[1] = p[1] + 3545052371 + (p[0] >>> 0 < u[0] >>> 0 ? 1 : 0) | 0, p[2] = p[2] + 886263092 + (p[1] >>> 0 < u[1] >>> 0 ? 1 : 0) | 0, p[3] = p[3] + 1295307597 + (p[2] >>> 0 < u[2] >>> 0 ? 1 : 0) | 0, p[4] = p[4] + 3545052371 + (p[3] >>> 0 < u[3] >>> 0 ? 1 : 0) | 0, p[5] = p[5] + 886263092 + (p[4] >>> 0 < u[4] >>> 0 ? 1 : 0) | 0, p[6] = p[6] + 1295307597 + (p[5] >>> 0 < u[5] >>> 0 ? 1 : 0) | 0, p[7] = p[7] + 3545052371 + (p[6] >>> 0 < u[6] >>> 0 ? 1 : 0) | 0, this._b = p[7] >>> 0 < u[7] >>> 0 ? 1 : 0;
          for (var v = 0; v < 8; v++) {
            var h = f[v] + p[v],
              g = h & 65535,
              b = h >>> 16,
              m = ((g * g >>> 17) + g * b >>> 15) + b * b,
              x = ((h & 4294901760) * h | 0) + ((h & 65535) * h | 0);
            l[v] = m ^ x;
          }
          f[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, f[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, f[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, f[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, f[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, f[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, f[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, f[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
        }
        n.RabbitLegacy = a._createHelper(c);
      }(), r.RabbitLegacy;
    });
  }(C4)), Na;
}
var za = {},
  B4 = {
    get exports() {
      return za;
    },
    set exports(e) {
      za = e;
    }
  },
  tc;
function A4() {
  return tc || (tc = 1, function (e, t) {
    (function (r, n, o) {
      e.exports = n(_e(), Gr(), Yr(), _r(), et());
    })(Ae, function (r) {
      return function () {
        var n = r,
          o = n.lib,
          a = o.BlockCipher,
          i = n.algo;
        const s = 16,
          u = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731],
          l = [[3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946], [1266315497, 3048417604, 3681880366, 3289982499, 2909710000, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055], [3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504], [976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409000, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462]];
        var c = {
          pbox: [],
          sbox: []
        };
        function d(g, b) {
          let m = b >> 24 & 255,
            x = b >> 16 & 255,
            y = b >> 8 & 255,
            w = b & 255,
            C = g.sbox[0][m] + g.sbox[1][x];
          return C = C ^ g.sbox[2][y], C = C + g.sbox[3][w], C;
        }
        function f(g, b, m) {
          let x = b,
            y = m,
            w;
          for (let C = 0; C < s; ++C) x = x ^ g.pbox[C], y = d(g, x) ^ y, w = x, x = y, y = w;
          return w = x, x = y, y = w, y = y ^ g.pbox[s], x = x ^ g.pbox[s + 1], {
            left: x,
            right: y
          };
        }
        function p(g, b, m) {
          let x = b,
            y = m,
            w;
          for (let C = s + 1; C > 1; --C) x = x ^ g.pbox[C], y = d(g, x) ^ y, w = x, x = y, y = w;
          return w = x, x = y, y = w, y = y ^ g.pbox[1], x = x ^ g.pbox[0], {
            left: x,
            right: y
          };
        }
        function v(g, b, m) {
          for (let _ = 0; _ < 4; _++) {
            g.sbox[_] = [];
            for (let F = 0; F < 256; F++) g.sbox[_][F] = l[_][F];
          }
          let x = 0;
          for (let _ = 0; _ < s + 2; _++) g.pbox[_] = u[_] ^ b[x], x++, x >= m && (x = 0);
          let y = 0,
            w = 0,
            C = 0;
          for (let _ = 0; _ < s + 2; _ += 2) C = f(g, y, w), y = C.left, w = C.right, g.pbox[_] = y, g.pbox[_ + 1] = w;
          for (let _ = 0; _ < 4; _++) for (let F = 0; F < 256; F += 2) C = f(g, y, w), y = C.left, w = C.right, g.sbox[_][F] = y, g.sbox[_][F + 1] = w;
          return !0;
        }
        var h = i.Blowfish = a.extend({
          _doReset: function () {
            if (this._keyPriorReset !== this._key) {
              var g = this._keyPriorReset = this._key,
                b = g.words,
                m = g.sigBytes / 4;
              v(c, b, m);
            }
          },
          encryptBlock: function (g, b) {
            var m = f(c, g[b], g[b + 1]);
            g[b] = m.left, g[b + 1] = m.right;
          },
          decryptBlock: function (g, b) {
            var m = p(c, g[b], g[b + 1]);
            g[b] = m.left, g[b + 1] = m.right;
          },
          blockSize: 2,
          keySize: 4,
          ivSize: 2
        });
        n.Blowfish = a._createHelper(h);
      }(), r.Blowfish;
    });
  }(B4)), za;
}
(function (e, t) {
  (function (r, n, o) {
    e.exports = n(_e(), Ai(), E8(), A8(), Gr(), S8(), Yr(), Zd(), Al(), T8(), Jd(), $8(), I8(), z8(), wl(), U8(), _r(), et(), q8(), G8(), X8(), Z8(), e4(), r4(), o4(), i4(), l4(), c4(), d4(), v4(), x4(), g4(), b4(), E4(), A4());
  })(Ae, function (r) {
    return r;
  });
})(v8);
const Qr = Os;
const w4 = {
    class: "tip"
  },
  F4 = {
    class: "tip-content"
  },
  S4 = ["innerHTML"],
  D4 = {
    class: "text-center",
    style: {
      marginBottom: "15px"
    }
  },
  _4 = {
    class: "tabs-item"
  },
  k4 = {
    key: 0
  },
  O4 = {
    key: 0
  },
  T4 = {
    class: "form-box",
    style: {
      width: "80%",
      margin: "auto"
    }
  },
  R4 = {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end"
    }
  },
  P4 = {
    class: "login-btn",
    style: {
      textAlign: "center",
      margin: "25px auto 0",
      width: "80%"
    }
  },
  $4 = {
    key: 1,
    style: {
      margin: "auto",
      textAlign: "center"
    }
  },
  L4 = {
    class: "qrcode",
    style: {
      marginTop: "20px"
    }
  },
  I4 = {
    key: 1
  },
  N4 = {
    key: 0
  },
  z4 = {
    class: "form-box",
    style: {
      width: "80%",
      margin: "auto"
    }
  },
  H4 = {
    class: "login-btn",
    style: {
      textAlign: "center",
      margin: "25px auto 0",
      width: "80%"
    }
  },
  M4 = {
    key: 1,
    style: {
      margin: "auto",
      textAlign: "center"
    }
  },
  U4 = {
    class: "qrcode",
    style: {
      marginTop: "20px"
    }
  },
  V4 = {
    key: 2
  },
  j4 = {
    key: 0,
    class: "qrcode"
  },
  W4 = {
    style: {
      marginTop: "12px"
    }
  },
  q4 = {
    class: "select"
  },
  K4 = {
    __name: "dashboard",
    setup(e) {
      const t = Y(0);
      Y(!1);
      const r = Y(!1),
        n = Y({}),
        o = Y("");
      let a = Y({}),
        i = Y(5),
        s = Y({}),
        u = Y({}),
        l = Y(!0),
        c = Y(!0);
      const d = Y(!1),
        f = Y(!1),
        p = Y(!1),
        v = Y(!1),
        h = Y(!1),
        g = Y({}),
        b = Y({}),
        m = Y("");
      Y({});
      const x = Y(0),
        y = kd(),
        w = V => {
          var se;
          let z = (se = n.value) == null ? void 0 : se.list.filter(fe => fe.container_id == V)[0];
          o.value = z.container_id, C(z);
        },
        C = async V => {
          const {
            data: z
          } = await yt.get_ql_config({
            container_id: V.container_id
          });
          console.log(z), n.value.ckcount = z.data.ckcount;
        },
        _ = async () => {
          var z, se;
          const {
            data: V
          } = await yt.get_Config();
          n.value = V.data, n.value.container_capacity = (z = n.value) == null ? void 0 : z.list[0].container_capacity, o.value = (se = n.value) == null ? void 0 : se.list[0].container_id, m.value = n.value.announcement, i.value = Number(V.data.autocount);
        },
        F = async (V = "qrcode") => {
          f.value = !0;
          try {
            const {
              data: z
            } = await yt.get_qrcode();
            if (z.code !== 0) return Ye.error(z.msg);
            if (g.value = z, V === "qrcode") d.value = !0, h.value = !0;else if (V === "app") {
              const se = `openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://qr.m.jd.com/p?k=${g.value.QRCodeKey}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;
              window.location.href = se, h.value = !0;
            } else p8(z.jcommond), Ye.success("\u590D\u5236\u6210\u529F"), umpAppStatus.value = !0;
            b.value.msg = "\u4E8C\u7EF4\u7801\u672A\u626B\u63CF\uFF0C\u8BF7\u626B\u63CF\u4E8C\u7EF4\u7801", setTimeout(async () => {
              await B();
            }, 2000);
          } catch {} finally {
            f.value = !1;
          }
        },
        O = V => new Promise(z => setTimeout(z, V)),
        B = async () => {
          let V = 0;
          const {
            data: z
          } = await yt.get_qrcode_check({
            token: "",
            container_id: o.value,
            QRCodeKey: g.value.QRCodeKey
          });
          if (z.code === 503 && Ye.error(z.msg), b.value = z, V = b.value.code, b.value.code === 200) {
            v.value = !0;
            let se = localStorage.getItem("userList") ? JSON.parse(localStorage.getItem("userList")) : [],
              fe = se.filter(L => L.pin === b.value.pin);
            fe.length <= 0 ? se.push({
              container_id: b.value.container_id,
              user_index: b.value.user_index,
              pin: b.value.pin
            }) : (fe[0].container_id = b.value.container_id, fe[0].user_index = b.value.user_index), localStorage.setItem("userList", JSON.stringify(se)), y.push("/personal");
          } else b.value.code === 503 || b.value.code === 502 ? (d.value = !1, h.value = !1, b.value.msg = null) : V === 54 || setTimeout(async () => {
            await B();
          }, 2000);
        },
        A = async () => {
          p.value = !0;
          const {
            data: V
          } = await yt.send_sms({
            Phone: a.value.Phone,
            container_id: o.value
          });
          !V.success && V.code === 505 && V.data.status === 666 ? await D() : !V.success && V.code === 505 || V.code === 502 ? (p.value = !1, Ye.error(`${V.message}`)) : V.success ? (Ye.success("\u53D1\u9001\u6210\u529F"), p.value = !1) : (p.value = !1, Ye.error(`${V.message}`));
        },
        D = async () => {
          const {
            data: V
          } = await yt.auto_captcha({
            Phone: a.value.Phone
          });
          i.value--, V.success ? (Ye.success("\u53D1\u9001\u6210\u529F"), p.value = !1) : V.code === 666 ? (await O(2000), i.value > 0 ? await D() : (Ye.error("\u56FE\u5F62\u9A8C\u8BC1\u5931\u8D25"), p.value = !1)) : (Ye.error(`发送失败，原因：${V.message}`), p.value = !1);
        },
        k = async () => {
          if (!a.value.Phone || !a.value.Code) return Ye.error("\u8BF7\u8F93\u5165\u6B63\u786E\u624B\u673A\u53F7\u6216\u8005\u9A8C\u8BC1\u7801");
          r.value = !0;
          const {
            data: V
          } = await yt.verify_code({
            Phone: a.value.Phone,
            Code: a.value.Code,
            container_id: o.value
          });
          if (V.code === 200) {
            r.value = !1, Ye.success("\u767B\u5F55\u6210\u529F");
            let z = localStorage.getItem("userList") ? JSON.parse(localStorage.getItem("userList")) : [],
              se = z.filter(fe => fe.pin === V.pin);
            se.length <= 0 ? z.push({
              container_id: V.container_id,
              user_index: V.user_index,
              pin: V.pin
            }) : (se[0].container_id = V.container_id, se[0].user_index = V.user_index), localStorage.setItem("userList", JSON.stringify(z)), y.push("/personal");
          } else r.value = !1, V.code === 555 && (l.value = !1, s.value = V), Ye.error(V.message);
        },
        X = V => {
          const z = Qr.enc.Utf8.parse("wn:_/imCQF;rBNS{V=|kML[(+$%Tjgy)"),
            se = Qr.enc.Utf8.parse("zA#f.x>jN!h-0[{$"),
            fe = Qr.AES.encrypt(V, z, {
              iv: se,
              mode: Qr.mode.CBC,
              padding: Qr.pad.Pkcs7
            });
          return Qr.enc.Base64.stringify(fe.ciphertext);
        },
        ie = async () => {
          var se;
          if (!a.value.Phone || !a.value.Password) return Ye.error("\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u548C\u5BC6\u7801");
          r.value = !0;
          const V = await yt.account_init({
            account: a.value.Phone,
            container_id: o.value
          });
          let z;
          if (!V.data.success) if (V.code === 505) Ye.error(V.message), r.value = !1;else if (V.data.code === 666) {
            for (let fe = 0; fe < 5 && (z = await yt.account_auto_captcha({
              account: a.value.Phone,
              container_id: o.value
            }), !z.data.success); fe++) if (z.data.code === 505) Ye.error(z.data.message), r.value = !1;else {
              if (z.data.code === 666) continue;
              Ye.error(z.data.message), r.value = !1;
            }
          } else Ye.error(V.data.message), r.value = !1;
          if (V.data.success || (se = z == null ? void 0 : z.data) != null && se.success) {
            const fe = X(a.value.Password),
              {
                data: L
              } = await yt.account_login({
                account: a.value.Phone,
                pwd: fe,
                container_id: o.value
              });
            if (L.code === 200) {
              r.value = !1, Ye.success("\u767B\u5F55\u6210\u529F");
              let R = localStorage.getItem("userList") ? JSON.parse(localStorage.getItem("userList")) : [],
                $ = R.filter(I => I.pin == L.pin);
              $.length <= 0 ? R.push({
                container_id: L.container_id,
                user_index: L.user_index,
                pin: L.pin
              }) : ($[0].container_id = L.container_id, $[0].user_index = L.user_index), localStorage.setItem("userList", JSON.stringify(R)), y.push("/personal");
            } else r.value = !1, L.code === 555 ? (c.value = !1, u.value = L) : Ye.error(L.message);
          }
        },
        ae = async () => {
          const V = `openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"${s.value.RiskUrl}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;
          window.location.href = V;
        };
      return Za(() => {
        clearInterval(x.value);
      }), _(), (V, z) => {
        const se = F1,
          fe = _x,
          L = am,
          R = Gx,
          $ = w2,
          I = O2,
          T = L2,
          U = jf,
          j = tx,
          G = fm,
          me = $m,
          we = Xy,
          ge = sy,
          E = r2;
        return q(), re("main", null, [ne("div", w4, [Q(fe, {
          outline: ""
        }, {
          title: he(() => [ne("div", F4, [Q(se, {
            name: "bell"
          }), Le(" \u516C\u544A ")])]),
          description: he(() => [ne("div", {
            class: "tip-content",
            innerHTML: m.value
          }, null, 8, S4)]),
          _: 1
        })]), Q(L, {
          dashed: "",
          margin: "15px 0"
        }), ne("div", D4, [Q($, {
          justify: "space-between"
        }, {
          default: he(() => [Q(R, {
            type: "primary",
            size: "small",
            color: "var(--app-color)"
          }, {
            default: he(() => [Le("CK\u5BB9\u91CF: " + De(n.value.ckcount), 1)]),
            _: 1
          }), Q(R, {
            type: "primary",
            size: "small",
            color: "var(--app-color)"
          }, {
            default: he(() => [Le("\u5360\u7528\u8D44\u6E90: " + De(n.value.totalcount), 1)]),
            _: 1
          }), Q(R, {
            type: "primary",
            size: "small",
            color: "var(--app-color)"
          }, {
            default: he(() => [Le("\u5269\u4F59\u8D44\u6E90: " + De(n.value.tabcount), 1)]),
            _: 1
          })]),
          _: 1
        })]), Q(T, {
          active: t.value,
          "onUpdate:active": z[0] || (z[0] = S => t.value = S),
          elevation: "",
          color: "var(--app-color)",
          "active-color": "#fff",
          "inactive-color": "hsla(0, 0%, 100%, .6)"
        }, {
          default: he(() => [Q(I, null, {
            default: he(() => [Le("\u77ED\u4FE1\u767B\u5F55")]),
            _: 1
          }), Q(I, null, {
            default: he(() => [Le("\u5E10\u5BC6\u767B\u5F55")]),
            _: 1
          }), Q(I, null, {
            default: he(() => [Le("\u626B\u7801\u767B\u5F55")]),
            _: 1
          })]),
          _: 1
        }, 8, ["active"]), ne("div", _4, [Q(it, {
          name: "fade",
          mode: "out-in"
        }, {
          default: he(() => [t.value == 0 ? (q(), re("div", k4, [qe(l) ? (q(), re("div", O4, [ne("div", T4, [Q(G, {
            ref: "form",
            "scroll-to-error": "start"
          }, {
            default: he(() => [Q($, {
              direction: "column",
              size: [10, 0]
            }, {
              default: he(() => [Q(U, {
                placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
                modelValue: qe(a).Phone,
                "onUpdate:modelValue": z[1] || (z[1] = S => qe(a).Phone = S),
                clearable: ""
              }, null, 8, ["modelValue"]), ne("div", R4, [Q(U, {
                placeholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
                modelValue: qe(a).Code,
                "onUpdate:modelValue": z[2] || (z[2] = S => qe(a).Code = S),
                clearable: "",
                style: {
                  flex: "1"
                }
              }, null, 8, ["modelValue"]), Q(j, {
                type: "primary",
                color: "var(--app-color)",
                style: {
                  marginLeft: "20px",
                  width: "100px"
                },
                loading: p.value,
                "loading-type": "rect",
                onClick: A
              }, {
                default: he(() => [Le("\u83B7\u53D6\u9A8C\u8BC1\u7801 ")]),
                _: 1
              }, 8, ["loading"])])]),
              _: 1
            })]),
            _: 1
          }, 512)]), ne("div", P4, [Q(j, {
            type: "primary",
            block: "",
            color: "var(--app-color)",
            onClick: k,
            loading: r.value
          }, {
            default: he(() => [Le("\u767B \u5F55 ")]),
            _: 1
          }, 8, ["loading"])])])) : (q(), re("div", $4, [ne("p", {
            style: ve({
              color: "var(--app-color)"
            })
          }, De(qe(s).message), 5), ne("div", L4, [Q(me, {
            src: `data:image/jpg;base64,${qe(s).RiskQRCode}`
          }, null, 8, ["src"])]), Q(j, {
            style: {
              marginTop: "20px"
            },
            type: "primary",
            color: "var(--app-color)",
            onClick: ae
          }, {
            default: he(() => [Le("\u5524\u9192\u4EAC\u4E1C\u9A8C\u8BC1 ")]),
            _: 1
          })]))])) : t.value == 1 ? (q(), re("div", I4, [qe(c) ? (q(), re("div", N4, [ne("div", z4, [Q(G, {
            ref: "form",
            "scroll-to-error": "start"
          }, {
            default: he(() => [Q($, {
              direction: "column",
              size: [10, 0]
            }, {
              default: he(() => [Q(U, {
                placeholder: "\u8BF7\u8F93\u5165\u8D26\u53F7\u6216\u624B\u673A\u53F7",
                modelValue: qe(a).Phone,
                "onUpdate:modelValue": z[3] || (z[3] = S => qe(a).Phone = S),
                clearable: ""
              }, null, 8, ["modelValue"]), Q(U, {
                placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
                modelValue: qe(a).Password,
                "onUpdate:modelValue": z[4] || (z[4] = S => qe(a).Password = S),
                clearable: "",
                type: "password"
              }, null, 8, ["modelValue"])]),
              _: 1
            })]),
            _: 1
          }, 512)]), ne("div", H4, [Q(j, {
            type: "primary",
            block: "",
            color: "var(--app-color)",
            onClick: ie,
            loading: r.value
          }, {
            default: he(() => [Le("\u767B \u5F55 ")]),
            _: 1
          }, 8, ["loading"])])])) : (q(), re("div", M4, [ne("p", {
            style: ve({
              color: "var(--app-color)"
            })
          }, De(qe(u).message), 5), ne("div", U4, [Q(me, {
            src: `data:image/jpg;base64,${qe(u).RiskQRCode}`
          }, null, 8, ["src"])]), Q(j, {
            style: {
              marginTop: "20px"
            },
            type: "primary",
            color: "var(--app-color)",
            onClick: ae
          }, {
            default: he(() => [Le("\u5524\u9192\u4EAC\u4E1C\u9A8C\u8BC1 ")]),
            _: 1
          })]))])) : (q(), re("div", V4, [Q(it, {
            name: "slide-up"
          }, {
            default: he(() => [d.value && !v.value ? (q(), re("div", j4, [Q(me, {
              src: `data:image/jpg;base64,${g.value.qr}`
            }, null, 8, ["src"])])) : Ee("", !0)]),
            _: 1
          }), v.value ? (q(), ze(we, {
            key: 0,
            type: "success",
            title: "\u767B\u5F55\u6210\u529F",
            description: "\u8BF7\u4FDD\u62A4\u597D\u8D26\u53F7\u5B89\u5168~"
          })) : Ee("", !0), ne("div", {
            style: ve({
              color: "var(--app-color)",
              textAlign: "center"
            })
          }, [Ze(ne("span", null, "\u8BF7\u5148\u83B7\u53D6\u4E8C\u7EF4\u7801", 512), [[Nt, !d.value && !h.value]]), Ze(ne("span", null, "\u8BF7\u5728\u4EAC\u4E1Capp\u6388\u6743\u767B\u5F55", 512), [[Nt, h.value]]), ne("div", W4, [Q($, {
            justify: "center"
          }, {
            default: he(() => [Ze(Q(j, {
              type: "primary",
              color: "var(--app-color)",
              loading: f.value,
              "loading-type": "rect",
              onClick: z[5] || (z[5] = S => F("qrcode")),
              disabled: d.value
            }, {
              default: he(() => {
                var S, P;
                return [Le(De((S = b.value) != null && S.msg ? (P = b.value) == null ? void 0 : P.msg : "\u83B7\u53D6\u4E8C\u7EF4\u7801"), 1)];
              }),
              _: 1
            }, 8, ["loading", "disabled"]), [[Nt, !v.value]]), Ze(Q(j, {
              type: "primary",
              color: "var(--app-color)",
              loading: f.value,
              "loading-type": "rect",
              onClick: z[6] || (z[6] = S => F("app")),
              disabled: d.value
            }, {
              default: he(() => [Le(" \u5524\u9192\u4EAC\u4E1C\u6388\u6743 ")]),
              _: 1
            }, 8, ["loading", "disabled"]), [[Nt, !h.value]]), Ze(Q(j, {
              type: "primary",
              color: "var(--app-color)",
              loading: f.value,
              "loading-type": "rect",
              onClick: z[7] || (z[7] = S => F("jcommond")),
              disabled: d.value
            }, {
              default: he(() => [Le(" \u53E3\u4EE4\u767B\u5F55 ")]),
              _: 1
            }, 8, ["loading", "disabled"]), [[Nt, !h.value]])]),
            _: 1
          })])], 4)]))]),
          _: 1
        })]), ne("div", q4, [Q(E, {
          placeholder: "\u8BF7\u9009\u62E9\u670D\u52A1\u5668",
          modelValue: o.value,
          "onUpdate:modelValue": z[8] || (z[8] = S => o.value = S),
          onChange: w
        }, {
          default: he(() => [(q(!0), re(Ue, null, Qo(n.value.list, S => (q(), ze(ge, {
            label: S.container_name,
            key: "container_id",
            value: S.container_id
          }, null, 8, ["label", "value"]))), 128))]),
          _: 1
        }, 8, ["modelValue"])]), Q(Od)]);
      };
    }
  },
  G4 = Bl(K4, [["__scopeId", "data-v-9887a52c"]]),
  Y4 = Ib({
    history: eb("./"),
    routes: [{
      path: "/",
      name: "dashboard",
      component: G4
    }, {
      path: "/personal",
      name: "personal",
      component: () => yu(() => import("./personal-a282acd1.js"), ["./personal-a282acd1.js", "./personal-75293eaf.css"], import.meta.url)
    }, {
      path: "/editConfig",
      name: "editConfig",
      component: () => yu(() => import("./editConfig-1fdccab9.js"), ["./editConfig-1fdccab9.js", "./editConfig-4872edf2.css"], import.meta.url)
    }]
  });
const Fl = af(o8);
Fl.use(Vh());
Fl.use(Y4);
Fl.mount("#app");
export { qe as $, yt as A, am as B, $m as C, q1 as D, oi as E, Ue as F, Bn as G, An as H, di as I, sy as J, rl as K, si as L, Se as M, Rt as N, H as O, Zt as P, ro as Q, ii as R, Ye as S, Bt as T, Ve as U, Ze as V, Nt as W, Ur as X, X4 as Y, ht as Z, Bl as _, Fe as a, tt as a0, em as a1, tx as a2, fm as a3, w2 as a4, Pe as b, pe as c, ce as d, ze as e, Ys as f, te as g, Ae as h, Y as i, re as j, Q as k, Ee as l, Ft as m, _x as n, q as o, ne as p, Le as q, xe as r, Qo as s, Ge as t, De as u, p8 as v, he as w, F1 as x, r2 as y, jf as z };