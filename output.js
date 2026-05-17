//Sun May 17 2026 07:33:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function toggleQuickBackupPanel() {
  const _0x20fbe4 = document.getElementById("quick-backup-float");
  const _0xd98071 = document.getElementById("quick-backup-panel");
  const _0x1c7fe6 = !_0x20fbe4.classList.contains("expanded");
  _0x1c7fe6 ? (adjustPanelPosition(), setTimeout(() => {
    document.addEventListener("click", handleClickOutsidePanel);
  }, 100)) : document.removeEventListener("click", handleClickOutsidePanel);
  _0x20fbe4.classList.toggle("expanded");
}
function handleClickOutsidePanel(_0x2f09cf) {
  const _0x47e4d9 = document.getElementById("quick-backup-float");
  const _0x60ef9e = document.getElementById("quick-backup-panel");
  const _0x4c927e = document.getElementById("quick-backup-circle");
  if (!_0x47e4d9.classList.contains("expanded")) {
    document.removeEventListener("click", handleClickOutsidePanel);
    return;
  }
  !_0x60ef9e.contains(_0x2f09cf.target) && !_0x4c927e.contains(_0x2f09cf.target) && (_0x47e4d9.classList.remove("expanded"), document.removeEventListener("click", handleClickOutsidePanel));
}
function adjustPanelPosition() {
  const _0x10b7b7 = document.getElementById("quick-backup-float");
  const _0x1fa103 = document.getElementById("quick-backup-panel");
  if (!_0x10b7b7 || !_0x1fa103) {
    return;
  }
  const _0x1f7c58 = _0x10b7b7.getBoundingClientRect();
  const _0x1e402f = 200;
  const _0xe6b411 = 70;
  _0x1fa103.style.left = "auto";
  _0x1fa103.style.right = "auto";
  _0x1fa103.style.top = "auto";
  _0x1fa103.style.bottom = "auto";
  const _0x503839 = _0x1f7c58.left > window.innerWidth / 2;
  const _0x23cf57 = _0x1f7c58.top > window.innerHeight / 2;
  if (_0x503839) {
    const _0x44e989 = window.innerWidth - _0x1f7c58.left;
    _0x44e989 < _0x1e402f + _0xe6b411 ? _0x1fa103.style.right = _0xe6b411 + "px" : _0x1fa103.style.right = _0xe6b411 + "px";
  } else {
    const _0x41f7ac = _0x1f7c58.right;
    _0x41f7ac < _0x1e402f + _0xe6b411 ? _0x1fa103.style.left = _0xe6b411 + "px" : _0x1fa103.style.right = _0xe6b411 + "px";
  }
  if (_0x23cf57) {
    const _0x4d6eaf = window.innerHeight - _0x1f7c58.bottom;
    _0x4d6eaf < 20 ? _0x1fa103.style.bottom = Math.max(20, _0x4d6eaf) + "px" : _0x1fa103.style.bottom = "0";
  } else {
    _0x1fa103.style.top = "0";
  }
}
function initFloatBallDrag() {
  const _0x1f8f54 = document.getElementById("quick-backup-float");
  const _0x3b55a1 = document.getElementById("quick-backup-circle");
  if (!_0x3b55a1 || _0x3b55a1.dataset.dragInitialized) {
    return;
  }
  let _0x304aff = false;
  let _0x25a1a9;
  let _0x418c99;
  let _0x2b5df6;
  let _0x3d29c0;
  let _0x2baf2c;
  let _0x5dbc63;
  let _0x3b62df;
  let _0x3c5c82 = false;
  function _0x3f6e9d() {
    const _0x1eca9b = _0x1f8f54.getBoundingClientRect();
    return {
      x: _0x1eca9b.left,
      y: _0x1eca9b.top
    };
  }
  function _0xc25d3a() {
    const _0x4702ab = _0x3f6e9d();
    localStorage.setItem("floatBallPosition", JSON.stringify(_0x4702ab));
  }
  function _0x3d676e() {
    const _0x32f9d6 = localStorage.getItem("floatBallPosition");
    if (_0x32f9d6) {
      try {
        const _0x130079 = JSON.parse(_0x32f9d6);
        _0x1f8f54.style.left = _0x130079.x + "px";
        _0x1f8f54.style.top = _0x130079.y + "px";
        _0x1f8f54.style.right = "auto";
        _0x1f8f54.style.bottom = "auto";
      } catch (_0x58bc68) {
        console.error("恢复悬浮球位置失败:", _0x58bc68);
      }
    }
  }
  function _0x164817(_0x196773) {
    _0x196773.preventDefault();
    const _0x3614c4 = _0x196773.type.includes("touch") ? _0x196773.touches[0] : _0x196773;
    _0x25a1a9 = _0x3614c4.clientX;
    _0x418c99 = _0x3614c4.clientY;
    const _0xa37119 = _0x3f6e9d();
    _0x2baf2c = _0xa37119.x;
    _0x5dbc63 = _0xa37119.y;
    _0x304aff = true;
    _0x3c5c82 = false;
    _0x3b55a1.classList.add("dragging");
    _0x1f8f54.classList.add("active");
    _0x3b62df = setTimeout(() => {
      _0x3c5c82 = true;
    }, 200);
  }
  function _0x40028d(_0x2133bc) {
    if (!_0x304aff) {
      return;
    }
    _0x2133bc.preventDefault();
    const _0x3b8c76 = _0x2133bc.type.includes("touch") ? _0x2133bc.touches[0] : _0x2133bc;
    _0x2b5df6 = _0x3b8c76.clientX - _0x25a1a9;
    _0x3d29c0 = _0x3b8c76.clientY - _0x418c99;
    (Math.abs(_0x2b5df6) > 5 || Math.abs(_0x3d29c0) > 5) && (_0x3c5c82 = true, clearTimeout(_0x3b62df));
    const _0x4fd908 = _0x2baf2c + _0x2b5df6;
    const _0x21684b = _0x5dbc63 + _0x3d29c0;
    const _0x35d713 = window.innerWidth - _0x1f8f54.offsetWidth;
    const _0x497487 = window.innerHeight - _0x1f8f54.offsetHeight;
    const _0x2e5296 = Math.max(0, Math.min(_0x4fd908, _0x35d713));
    const _0x27aec4 = Math.max(0, Math.min(_0x21684b, _0x497487));
    _0x1f8f54.style.left = _0x2e5296 + "px";
    _0x1f8f54.style.top = _0x27aec4 + "px";
    _0x1f8f54.style.right = "auto";
    _0x1f8f54.style.bottom = "auto";
  }
  function _0x55ba08(_0x1d9757) {
    if (!_0x304aff) {
      return;
    }
    _0x304aff = false;
    _0x3b55a1.classList.remove("dragging");
    clearTimeout(_0x3b62df);
    _0x3c5c82 && _0xc25d3a();
    setTimeout(() => {
      _0x1f8f54.classList.remove("active");
    }, 1000);
    !_0x3c5c82 && toggleQuickBackupPanel();
  }
  _0x3b55a1.addEventListener("mousedown", _0x164817);
  document.addEventListener("mousemove", _0x40028d);
  document.addEventListener("mouseup", _0x55ba08);
  _0x3b55a1.addEventListener("touchstart", _0x164817, {
    passive: false
  });
  document.addEventListener("touchmove", _0x40028d, {
    passive: false
  });
  document.addEventListener("touchend", _0x55ba08);
  _0x3b55a1.dataset.dragInitialized = "true";
  _0x3d676e();
  console.log("✅ 悬浮球拖动功能已初始化");
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", initFloatBallDrag) : initFloatBallDrag();