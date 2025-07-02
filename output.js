//Wed Jul 02 2025 06:09:57 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function _0x2bc3(_0x5e0aa9, _0x112568) {
  const _0x54c96f = _0x55b8();
  _0x2bc3 = function (_0x51deda, _0x28a7e4) {
    _0x51deda = _0x51deda - 241;
    let _0x2ef69d = _0x54c96f[_0x51deda];
    return _0x2ef69d;
  };
  return _0x2bc3(_0x5e0aa9, _0x112568);
}
const _0x30b83a = _0x2bc3;
(function (_0x509800, _0x41965d) {
  (function () {})();
  const _0x52c110 = _0x2bc3,
    _0x1f2e49 = _0x509800();
  while (true) {
    try {
      const _0x43dd1d = parseInt(_0x52c110(433)) / 1 * (parseInt(_0x52c110(264)) / 2) + parseInt(_0x52c110(273)) / 3 + parseInt(_0x52c110(405)) / 4 * (-parseInt(_0x52c110(326)) / 5) + -parseInt(_0x52c110(414)) / 6 * (-parseInt(_0x52c110(381)) / 7) + -parseInt(_0x52c110(310)) / 8 + -parseInt(_0x52c110(308)) / 9 + -parseInt(_0x52c110(315)) / 10 * (-parseInt(_0x52c110(396)) / 11);
      if (_0x43dd1d === _0x41965d) break;else _0x1f2e49.push(_0x1f2e49.shift());
    } catch (_0x26bb69) {
      _0x1f2e49.push(_0x1f2e49.shift());
    }
  }
})(_0x55b8, 458857);
const CAPTCHA_CONFIG = {
  "username": "37VAFj",
  "password": "37VAF0Nj",
  "typeid": "27",
  "softid": _0x30b83a(309),
  "apiUrl": "https://api.ttshitu.com/predict",
  "reportUrl": _0x30b83a(362)
};
function initCaptchaAutoSolver() {
  const _0x50eea7 = _0x30b83a;
  window.isProcessingCaptcha = false;
  window.lastCaptchaTime = 0;
  window[_0x50eea7(353)] = null;
  window[_0x50eea7(366)] = setInterval(detectAndSolveCaptcha, 2000);
  console[_0x50eea7(351)](_0x50eea7(357));
}
function stopCaptchaAutoSolver() {
  const _0x9f9e24 = _0x30b83a;
  window[_0x9f9e24(366)] && (clearInterval(window[_0x9f9e24(366)]), console[_0x9f9e24(351)](_0x9f9e24(342)));
}
async function detectAndSolveCaptcha() {
  const _0x5cb18f = _0x30b83a;
  if (window.lastCaptchaTime && Date[_0x5cb18f(276)]() - window.lastCaptchaTime < 3000) return;
  if (window.isProcessingCaptcha) return;
  window[_0x5cb18f(353)] && (await reportError(window.lastCaptchaId), window.lastCaptchaId = null);
  await new Promise(_0x55a8f5 => setTimeout(_0x55a8f5, 1000));
  const _0x30250a = document[_0x5cb18f(354)](_0x5cb18f(403));
  if (_0x30250a) {
    const _0x144130 = _0x30250a[_0x5cb18f(409)](_0x5cb18f(244));
    if (_0x144130.length === 9) {
      {
        console.log(_0x5cb18f(330));
        await solveGridCaptcha();
        return;
      }
    }
  }
  const _0x47d017 = document.querySelector(_0x5cb18f(307));
  if (_0x47d017) {
    {
      const _0x516458 = _0x47d017[_0x5cb18f(317)] || "";
      if (_0x516458[_0x5cb18f(314)](_0x5cb18f(419)) && _0x516458[_0x5cb18f(314)](_0x5cb18f(337))) {
        console.log(_0x5cb18f(296));
        await solveType2Captcha();
        return;
      }
    }
  }
  const _0x26411c = document[_0x5cb18f(354)](_0x5cb18f(248)) || document.querySelector("img[id*=\"captcha\"], img[class*=\"captcha\"]");
  _0x26411c && (console.log(_0x5cb18f(282)), await solveType1Captcha());
}
async function refreshType1Captcha() {
  const _0x380f2c = _0x30b83a;
  try {
    const _0x5683fc = [_0x380f2c(252), _0x380f2c(258), _0x380f2c(391), _0x380f2c(367)];
    let _0x243fd9;
    for (const _0x126904 of _0x5683fc) {
      _0x243fd9 = document[_0x380f2c(354)](_0x126904);
      if (_0x243fd9) break;
    }
    if (_0x243fd9) {
      {
        const _0x50d75d = new MouseEvent(_0x380f2c(293), {
          "view": window,
          "bubbles": true,
          "cancelable": true
        });
        _0x243fd9[_0x380f2c(429)](_0x50d75d);
        console[_0x380f2c(351)]("[验证码刷新] 已触发点击");
        const _0x4e4ebd = document.querySelector(_0x380f2c(248));
        if (_0x4e4ebd?.["src"]) {
          const _0x1f9946 = _0x4e4ebd[_0x380f2c(299)];
          await waitForChange(() => _0x4e4ebd[_0x380f2c(299)] !== _0x1f9946, 2000);
        }
      }
    } else console[_0x380f2c(412)](_0x380f2c(292));
  } catch (_0x139489) {
    {
      console[_0x380f2c(412)](_0x380f2c(256), _0x139489);
      throw _0x139489;
    }
  }
}
async function getImageBase64(_0x248fa8) {
  return new Promise(_0x5e5e80 => {
    const _0xbdfce6 = _0x2bc3,
      _0x5ea6dd = document[_0xbdfce6(334)](_0xbdfce6(389)),
      _0x27d09f = _0x5ea6dd.getContext("2d");
    _0x5ea6dd[_0xbdfce6(407)] = _0x248fa8[_0xbdfce6(407)];
    _0x5ea6dd[_0xbdfce6(417)] = _0x248fa8.height;
    _0x248fa8.setAttribute(_0xbdfce6(400), _0xbdfce6(442));
    function _0x1cfa23() {
      const _0x2d3cac = _0xbdfce6;
      try {
        {
          _0x27d09f[_0x2d3cac(348)](_0x248fa8, 0, 0, _0x5ea6dd[_0x2d3cac(407)], _0x5ea6dd.height);
          const _0x4c0279 = _0x5ea6dd[_0x2d3cac(356)](_0x2d3cac(251)).split(",")[1];
          _0x5e5e80(_0x4c0279);
        }
      } catch (_0x309414) {
        console[_0x2d3cac(412)]("获取图片Base64失败:", _0x309414);
        _0x5e5e80(null);
      }
    }
    _0x248fa8[_0xbdfce6(349)] ? _0x1cfa23() : (_0x248fa8[_0xbdfce6(286)] = _0x1cfa23, _0x248fa8[_0xbdfce6(301)] = () => _0x5e5e80(null));
  });
}
function getElementPosition(_0xdfdfbd) {
  const _0x3252b0 = _0x30b83a,
    _0x436167 = _0xdfdfbd.getBoundingClientRect();
  return {
    "x": _0x436167.left + window[_0x3252b0(413)],
    "y": _0x436167[_0x3252b0(399)] + window[_0x3252b0(268)],
    "width": _0x436167.width,
    "height": _0x436167[_0x3252b0(417)]
  };
}
async function simulateType1Clicks(_0x589751, _0x3f8d82) {
  const _0x596837 = _0x30b83a;
  console[_0x596837(351)]("[类型1点击] 开始模拟点击流程");
  const _0x12f906 = getElementPosition(_0x589751);
  console[_0x596837(351)](_0x596837(247) + _0x12f906.x + _0x596837(418) + _0x12f906.y + _0x596837(355) + _0x12f906[_0x596837(407)] + _0x596837(328) + _0x12f906.height);
  const _0x39c853 = _0x3f8d82[_0x596837(280)]("|"),
    _0x1e4188 = _0x39c853[_0x596837(250)](_0x19e0b9 => {
      const _0x97b0cf = _0x596837,
        [_0x202fbd, _0x5c94d6] = _0x19e0b9[_0x97b0cf(280)](",").map(Number);
      return {
        "x": _0x202fbd,
        "y": _0x5c94d6
      };
    });
  for (let _0x3ecf6b = 0; _0x3ecf6b < _0x1e4188[_0x596837(368)]; _0x3ecf6b++) {
    const _0x5cffa4 = _0x1e4188[_0x3ecf6b],
      _0x21cd99 = _0x12f906.x + _0x5cffa4.x,
      _0x4bbd58 = _0x12f906.y + _0x5cffa4.y;
    console[_0x596837(351)](_0x596837(432) + (_0x3ecf6b + 1) + " 个点: (" + _0x21cd99 + ", " + _0x4bbd58 + ")");
    await simulateClick(_0x21cd99, _0x4bbd58);
    await sleep(500);
  }
  console[_0x596837(351)](_0x596837(255));
}
async function solveType1Captcha() {
  const _0x7f43ad = _0x30b83a;
  window[_0x7f43ad(343)] = true;
  console[_0x7f43ad(351)](_0x7f43ad(425));
  try {
    (await isSpinnerVisible()) && (console.log("[类型1处理] 检测到加载动画，等待加载完成..."), await waitForSpinnerToDisappear());
    await refreshType1Captcha();
    await new Promise(_0x2a9975 => setTimeout(_0x2a9975, 500));
    (await isSpinnerVisible()) && (console.log(_0x7f43ad(398)), await waitForSpinnerToDisappear());
    const _0x385327 = document[_0x7f43ad(354)]("#captchaImg");
    if (!_0x385327) {
      console[_0x7f43ad(412)]("[类型1处理] 未找到验证码图片元素");
      return;
    }
    await waitForImageLoad(_0x385327);
    await new Promise(_0x52a0c6 => setTimeout(_0x52a0c6, 1500));
    const _0x318b84 = document[_0x7f43ad(354)](_0x7f43ad(438)) || document[_0x7f43ad(354)](_0x7f43ad(388));
    if (!_0x318b84) {
      {
        console[_0x7f43ad(412)](_0x7f43ad(305));
        return;
      }
    }
    const _0x741aaf = await getImageBase64(_0x385327);
    if (!_0x741aaf) {
      console[_0x7f43ad(412)](_0x7f43ad(262));
      return;
    }
    const _0x11ec2b = _0x318b84[_0x7f43ad(317)][_0x7f43ad(294)]();
    console[_0x7f43ad(351)](_0x7f43ad(431) + _0x11ec2b);
    const _0x52400e = await translateText(_0x11ec2b);
    console[_0x7f43ad(351)](_0x7f43ad(359) + _0x52400e);
    const _0x4cd79a = {
      "username": CAPTCHA_CONFIG[_0x7f43ad(420)],
      "password": CAPTCHA_CONFIG[_0x7f43ad(320)],
      "typeid": CAPTCHA_CONFIG[_0x7f43ad(321)],
      "softid": CAPTCHA_CONFIG[_0x7f43ad(318)],
      "remark": _0x52400e,
      "image": _0x741aaf,
      "prompt": _0x11ec2b
    };
    console[_0x7f43ad(351)](_0x7f43ad(270));
    const _0x5b6239 = await fetch(CAPTCHA_CONFIG[_0x7f43ad(311)], {
        "method": _0x7f43ad(249),
        "headers": {
          "Content-Type": _0x7f43ad(289)
        },
        "body": JSON[_0x7f43ad(319)](_0x4cd79a)
      }),
      _0x148ac5 = await _0x5b6239[_0x7f43ad(410)]();
    _0x148ac5[_0x7f43ad(360)] ? (console[_0x7f43ad(351)](_0x7f43ad(441) + _0x148ac5[_0x7f43ad(369)][_0x7f43ad(435)]), window[_0x7f43ad(353)] = _0x148ac5[_0x7f43ad(369)].id, await simulateType1Clicks(_0x385327, _0x148ac5[_0x7f43ad(369)].result)) : console[_0x7f43ad(412)]("[类型1处理] 识别失败: " + _0x148ac5[_0x7f43ad(377)]);
  } catch (_0x13d1b6) {
    console.error(_0x7f43ad(316), _0x13d1b6);
  } finally {
    window[_0x7f43ad(343)] = false;
    window[_0x7f43ad(380)] = Date[_0x7f43ad(276)]();
  }
}
async function solveType2Captcha() {
  const _0x1b2ed8 = _0x30b83a;
  window[_0x1b2ed8(343)] = true;
  console[_0x1b2ed8(351)]("[类型2处理] 开始处理多图验证码");
  try {
    {
      (await isSpinnerVisible()) && (console.log(_0x1b2ed8(300)), await waitForSpinnerToDisappear());
      await refreshType2Captcha();
      (await isSpinnerVisible()) && (console[_0x1b2ed8(351)]("[类型2处理] 刷新后检测到加载动画，等待加载完成..."), await waitForSpinnerToDisappear());
      const _0x28008f = document.querySelector(_0x1b2ed8(358));
      if (!_0x28008f) {
        console.error(_0x1b2ed8(291));
        return;
      }
      const _0x44178b = Array[_0x1b2ed8(373)](_0x28008f[_0x1b2ed8(409)](_0x1b2ed8(422)));
      if (_0x44178b.length < 2) {
        console[_0x1b2ed8(412)](_0x1b2ed8(257), _0x44178b[_0x1b2ed8(368)]);
        return;
      }
      for (const _0x1b1009 of _0x44178b) {
        await waitForImageLoad(_0x1b1009);
      }
      await new Promise(_0x19df62 => setTimeout(_0x19df62, 1500));
      const _0x4d0cec = document[_0x1b2ed8(354)](_0x1b2ed8(430)) || document[_0x1b2ed8(354)]("div._3S0ERvXx.VGrF02Bc");
      if (!_0x4d0cec) {
        console[_0x1b2ed8(412)](_0x1b2ed8(379));
        return;
      }
      const _0x5b8e4a = _0x4d0cec.textContent.trim();
      console[_0x1b2ed8(351)](_0x1b2ed8(340) + _0x5b8e4a);
      const _0x3c55b0 = await translateText(_0x5b8e4a);
      console[_0x1b2ed8(351)](_0x1b2ed8(283) + _0x3c55b0);
      const _0x2b9bd6 = await mergeType2CaptchaImages(_0x44178b);
      if (!_0x2b9bd6) {
        {
          console.error(_0x1b2ed8(361));
          return;
        }
      }
      const _0x163a03 = {
        "username": CAPTCHA_CONFIG[_0x1b2ed8(420)],
        "password": CAPTCHA_CONFIG.password,
        "typeid": CAPTCHA_CONFIG[_0x1b2ed8(321)],
        "softid": CAPTCHA_CONFIG[_0x1b2ed8(318)],
        "remark": _0x3c55b0,
        "image": _0x2b9bd6[_0x1b2ed8(242)],
        "prompt": _0x5b8e4a
      };
      console.log(_0x1b2ed8(390));
      const _0x3cc6ee = await fetch(CAPTCHA_CONFIG[_0x1b2ed8(311)], {
          "method": _0x1b2ed8(249),
          "headers": {
            "Content-Type": _0x1b2ed8(289)
          },
          "body": JSON[_0x1b2ed8(319)](_0x163a03)
        }),
        _0x24533c = await _0x3cc6ee[_0x1b2ed8(410)]();
      if (_0x24533c[_0x1b2ed8(360)]) {
        {
          console[_0x1b2ed8(351)]("[类型2处理] 识别成功: " + _0x24533c[_0x1b2ed8(369)][_0x1b2ed8(435)]);
          window[_0x1b2ed8(353)] = _0x24533c[_0x1b2ed8(369)].id;
          const _0x533318 = getElementPosition(_0x28008f);
          await simulateType2Clicks(_0x533318, _0x2b9bd6, _0x24533c[_0x1b2ed8(369)].result);
          (await isSpinnerVisible()) && (console[_0x1b2ed8(351)](_0x1b2ed8(426)), await waitForSpinnerToDisappear());
          await clickConfirmButton();
          (await isSpinnerVisible()) && (console[_0x1b2ed8(351)](_0x1b2ed8(347)), await waitForSpinnerToDisappear());
        }
      } else console[_0x1b2ed8(412)](_0x1b2ed8(303) + _0x24533c[_0x1b2ed8(377)]);
    }
  } catch (_0x39dcff) {
    console[_0x1b2ed8(412)](_0x1b2ed8(416), _0x39dcff);
  } finally {
    window[_0x1b2ed8(343)] = false;
    window[_0x1b2ed8(380)] = Date[_0x1b2ed8(276)]();
  }
}
async function mergeType2CaptchaImages(_0x215b8b) {
  return new Promise(_0x37a7d3 => {
    const _0x3407ed = _0x2bc3;
    try {
      const _0x2ca2c2 = document[_0x3407ed(334)](_0x3407ed(389)),
        _0x1fcc3e = _0x2ca2c2.getContext("2d"),
        _0x2d1661 = _0x215b8b[0][_0x3407ed(407)] + 13 + _0x215b8b[1][_0x3407ed(407)],
        _0x1865be = Math.max(_0x215b8b[0][_0x3407ed(417)], _0x215b8b[1][_0x3407ed(417)]);
      _0x2ca2c2.width = _0x2d1661;
      _0x2ca2c2[_0x3407ed(417)] = _0x1865be;
      _0x1fcc3e.drawImage(_0x215b8b[0], 0, 0, _0x215b8b[0][_0x3407ed(407)], _0x215b8b[0][_0x3407ed(417)]);
      _0x1fcc3e.drawImage(_0x215b8b[1], _0x215b8b[0][_0x3407ed(407)] + 13, 0, _0x215b8b[1][_0x3407ed(407)], _0x215b8b[1][_0x3407ed(417)]);
      const _0x153130 = _0x2ca2c2[_0x3407ed(356)](_0x3407ed(251))[_0x3407ed(280)](",")[1];
      _0x37a7d3({
        "base64": _0x153130,
        "width": _0x2d1661,
        "height": _0x1865be,
        "image1Width": _0x215b8b[0][_0x3407ed(407)],
        "image1Height": _0x215b8b[0][_0x3407ed(417)],
        "image2Width": _0x215b8b[1][_0x3407ed(407)],
        "image2Height": _0x215b8b[1][_0x3407ed(417)]
      });
    } catch (_0x81f56b) {
      console[_0x3407ed(412)]("[图片合并] 合并图片时出错:", _0x81f56b);
      _0x37a7d3(null);
    }
  });
}
function _0x55b8() {
  const _0x36354c = ["[类型1处理] 刷新后检测到加载动画，等待加载完成...", "top", "crossOrigin", "#verification > div > div > div > div.btnWrap-1LOpd > div.text-gSdWn.textBtn-2BG0E", ") 原始坐标: (", "._3Gh2KHBV", "[类型2点击] 合并图片尺寸: width=", "69292sCupGw", "display", "width", "[九宫格处理] 图片", "querySelectorAll", "json", "[九宫格处理] 验证码加载超时", "error", "pageXOffset", "18nvlabc", "text", "[类型2处理] 处理验证码时出错:", "height", ", y=", "Figure 1", "username", "readyState", "._2BsY-ufz", "style", "[九宫格处理] 刷新后验证码加载超时", "[类型1处理] 开始处理单图验证码", "[类型2处理] 点击后检测到加载动画，等待完成...", "[九宫格处理] 翻译结果: ", "type", "dispatchEvent", "div.subTitle-3S0ER.subTitle-VGrF0", "[类型1处理] 验证码提示: ", "[类型1点击] 准备点击第 ", "1iFbDis", "个点: (", "result", "加载失败，尺寸无效", "图片尺寸:", "#Picture > div._37VAF0Np > div._2Alt0zsN", "none", "[九宫格处理] 未找到提示词元素", "[类型1处理] 识别成功: ", "anonymous", "[九宫格确认] 点击确认按钮 (", "base64", "[九宫格确认] 未找到确认按钮", "img.lazy-image", "</li>", "[九宫格刷新] 等待加载完成...", "[类型1点击] 图片位置: x=", "#captchaImg", "POST", "map", "image/png", "._2zehNgas", "?inputtext=", "[九宫格处理] 处理验证码时出错:", "[类型1点击] 模拟点击流程完成", "[验证码刷新] 出错:", "[类型2处理] 未找到足够的验证码图片元素，当前找到:", ".ZVIQM964 svg", ") 的元素", "mousemove", "[九宫格处理] 识别失败: ", "[类型1处理] 验证码图片的Base64数据为空", "[类型2点击] 准备点击第 ", "980890yJsISk", "add", "options", "[九宫格处理] 未找到完整的九宫格图片元素，当前找到:", "pageYOffset", "[九宫格处理] 识别成功: ", "[类型1处理] 正在调用打码平台API...", "网络请求异常", "getBoundingClientRect", "1060710CYeYwg", "[九宫格合并] 需要9张图片", "round", "now", "remove", "mouseover", "[九宫格处理] 验证图片加载状态...", "split", "<ul id=\"translateResult\">", "[检测模块] 检测到单图验证码", "[类型2处理] 翻译结果: ", "mouseout", "[九宫格处理] 未找到验证码图片容器", "onload", "mousedown", "._2tSNOCuL", "application/json", "[类型2点击] 开始模拟点击流程 (基于合并后大图)", "[类型2处理] 未找到验证码图片容器", "[验证码刷新] 错误：未找到刷新按钮", "click", "trim", "._3Kspx2NT._3rODZQlY._1-CtAMMT._142Hsqej._3_x4R_c5", "[检测模块] 检测到双图验证码", "[九宫格点击] 点击第", "[类型2点击] 无效的坐标字符串", "src", "[类型2处理] 检测到加载动画，等待加载完成...", "onerror", "无法找到位于 (", "[类型2处理] 识别失败: ", ".picture-img-2BsY-", "[类型1处理] 未找到提示词元素", "[九宫格处理] 等待验证码完全加载...", "div[role=\"dialog\"]", "1801818CzTSNn", "ef8afb78e402495484642ea5deb8d443", "4003304CThNhd", "apiUrl", "active", "[九宫格刷新] 触发刷新...", "includes", "3210dDHUxN", "[类型1处理] 处理验证码时出错:", "textContent", "softid", "stringify", "password", "typeid", "[报错功能] 报错成功", "scrollX", "visibility", " 个点: (", "145reVQTI", "[类型2点击] 准备点击确认按钮，位置: (", ", height=", "._3Gh2KHBV img.lazy-image", "[检测模块] 检测到九宫格验证码", "[类型2点击] 确认按钮点击完成", "[类型2点击] 未找到确认按钮", "div._3S0ERvXx._24_syvQ2", "createElement", "getComputedStyle", "GET", "Figure 2", ".picWrap-1DemK", "[类型2处理] 已触发验证码刷新", "[类型2处理] 验证码提示: ", ".btn-3Kspx.primary-3rODZ.loose-1-CtA.xl-142Hs.btn-1je6A", "[系统初始化] 验证码自动识别系统已停止", "isProcessingCaptcha", "naturalWidth", "hidden", "filter", "[类型2处理] 确认后检测到加载动画，等待完成...", "drawImage", "complete", "[九宫格点击] 开始模拟点击 (容器位置:", "log", "[类型2处理] 刷新验证码时出错:", "lastCaptchaId", "querySelector", ", width=", "toDataURL", "[系统初始化] 验证码自动识别系统已启动", "._1DemKYKR", "[类型1处理] 翻译结果: ", "success", "[类型2处理] 合并验证码图片失败", "https://api.ttshitu.com/reporterror.json", "[九宫格刷新] 加载超时", "random", "[九宫格处理] 确认后加载超时", "captchaDetectionInterval", ".refresh-27d6x .icon-ZVIQM svg", "length", "data", "[九宫格处理] 验证码提示: ", "[九宫格处理] 合并验证码图片失败", "[九宫格点击] 无效坐标: ", "from", "classList", "个点击点", "warn", "message", "[类型2点击] 点击确认按钮时出错:", "[类型2处理] 未找到提示词元素", "lastCaptchaTime", "1568959CuzgLS", "elementFromPoint", "[九宫格刷新] 刷新出错:", "mouseup", "[九宫格点击] 无效坐标", ".gSdWn7Dw._1FtpsoBN", "load", ".picture-text-2Alt0", "canvas", "[类型2处理] 正在调用打码平台API...", ".refreshSvg-2zehN", "left", "text/html", "[类型2点击] 模拟点击流程完成", "substring", "4983hhiATw", "._3Kspx2NT._3rODZQlY._1-CtAMMT._142Hsqej._1je6AsL4"];
  _0x55b8 = function () {
    return _0x36354c;
  };
  return _0x55b8();
}
async function simulateType2Clicks(_0x1b6db4, _0x3a9f8d, _0x10afc0) {
  const _0x2afe79 = _0x30b83a;
  console.log(_0x2afe79(290));
  console.log("[类型2点击] 容器位置: x=" + _0x1b6db4.x + _0x2afe79(418) + _0x1b6db4.y);
  console[_0x2afe79(351)](_0x2afe79(404) + _0x3a9f8d.width + _0x2afe79(328) + _0x3a9f8d[_0x2afe79(417)]);
  const _0x1ffe71 = _0x10afc0[_0x2afe79(280)]("|")[_0x2afe79(346)](Boolean);
  if (_0x1ffe71[_0x2afe79(368)] === 0) {
    console.error(_0x2afe79(298));
    return;
  }
  const _0x1aed22 = _0x1ffe71.map(_0x26f73c => {
    {
      const [_0x307174, _0x33b3e0] = _0x26f73c.split(",").map(Number);
      return {
        "x": _0x307174,
        "y": _0x33b3e0
      };
    }
  });
  console.log("[类型2点击] 解析到" + _0x1aed22[_0x2afe79(368)] + _0x2afe79(375));
  for (let _0x57d0f2 = 0; _0x57d0f2 < _0x1aed22.length; _0x57d0f2++) {
    const _0x51f497 = _0x1aed22[_0x57d0f2],
      _0xf8eb01 = _0x1b6db4.x + _0x51f497.x,
      _0x3b33b2 = _0x1b6db4.y + _0x51f497.y;
    console.log(_0x2afe79(263) + (_0x57d0f2 + 1) + _0x2afe79(325) + _0xf8eb01 + ", " + _0x3b33b2 + ") - 原始坐标: (" + _0x51f497.x + ", " + _0x51f497.y + ")");
    await simulateClick(_0xf8eb01, _0x3b33b2);
    await sleep(500 + Math.random() * 300);
  }
  console.log(_0x2afe79(394));
}
async function refreshType2Captcha() {
  const _0x25d5a1 = _0x30b83a;
  try {
    const _0x4312ae = document[_0x25d5a1(354)](_0x25d5a1(401));
    if (_0x4312ae) {
      const _0x3d28dd = new MouseEvent(_0x25d5a1(293), {
        "view": window,
        "bubbles": true,
        "cancelable": true
      });
      _0x4312ae[_0x25d5a1(429)](_0x3d28dd);
      console.log(_0x25d5a1(339));
      await waitForChange(() => {
        const _0x433728 = _0x25d5a1,
          _0x9c2289 = document[_0x433728(354)](_0x433728(338));
        if (!_0x9c2289) return false;
        const _0x32ade0 = _0x9c2289[_0x433728(409)](_0x433728(304));
        return _0x32ade0 && _0x32ade0[_0x433728(368)] >= 2;
      }, 3000);
    }
  } catch (_0x15a840) {
    {
      console[_0x25d5a1(412)](_0x25d5a1(352), _0x15a840);
      throw _0x15a840;
    }
  }
}
async function clickConfirmButton() {
  const _0x249f03 = _0x30b83a;
  try {
    {
      const _0x174eb5 = document[_0x249f03(354)](_0x249f03(397)) || document.querySelector(_0x249f03(341));
      if (!_0x174eb5) {
        console[_0x249f03(412)](_0x249f03(332));
        return;
      }
      const _0x13991b = _0x174eb5[_0x249f03(272)](),
        _0x1a1101 = _0x13991b[_0x249f03(392)] + _0x13991b[_0x249f03(407)] / 2,
        _0x3a2762 = _0x13991b.top + _0x13991b[_0x249f03(417)] / 2;
      console[_0x249f03(351)](_0x249f03(327) + _0x1a1101 + ", " + _0x3a2762 + ")");
      const _0xc62168 = new MouseEvent(_0x249f03(278), {
        "view": window,
        "bubbles": true,
        "cancelable": true,
        "clientX": _0x1a1101,
        "clientY": _0x3a2762
      });
      _0x174eb5[_0x249f03(429)](_0xc62168);
      await sleep(50 + Math[_0x249f03(364)]() * 100);
      const _0x16e315 = new MouseEvent(_0x249f03(287), {
        "view": window,
        "bubbles": true,
        "cancelable": true,
        "clientX": _0x1a1101,
        "clientY": _0x3a2762,
        "button": 0
      });
      _0x174eb5[_0x249f03(429)](_0x16e315);
      _0x174eb5[_0x249f03(374)][_0x249f03(265)](_0x249f03(312));
      await sleep(100 + Math[_0x249f03(364)]() * 100);
      const _0x3ddf7a = new MouseEvent(_0x249f03(384), {
        "view": window,
        "bubbles": true,
        "cancelable": true,
        "clientX": _0x1a1101,
        "clientY": _0x3a2762,
        "button": 0
      });
      _0x174eb5[_0x249f03(429)](_0x3ddf7a);
      const _0x4348bd = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": true,
        "clientX": _0x1a1101,
        "clientY": _0x3a2762,
        "button": 0
      });
      _0x174eb5[_0x249f03(429)](_0x4348bd);
      _0x174eb5[_0x249f03(374)][_0x249f03(277)]("active");
      await sleep(50 + Math.random() * 100);
      const _0x155c9e = new MouseEvent(_0x249f03(284), {
        "view": window,
        "bubbles": true,
        "cancelable": true,
        "clientX": _0x1a1101 + 10,
        "clientY": _0x3a2762 + 10
      });
      _0x174eb5[_0x249f03(429)](_0x155c9e);
      console[_0x249f03(351)](_0x249f03(331));
    }
  } catch (_0x5ba727) {
    console.error(_0x249f03(378), _0x5ba727);
  }
}
async function solveGridCaptcha() {
  const _0x2aacf6 = _0x30b83a;
  window.isProcessingCaptcha = true;
  console[_0x2aacf6(351)]("[九宫格处理] 开始处理九宫格验证码");
  try {
    console[_0x2aacf6(351)](_0x2aacf6(306));
    if (!(await waitForCaptchaReady())) {
      console[_0x2aacf6(412)](_0x2aacf6(411));
      return;
    }
    await refreshGridCaptcha();
    console.log("[九宫格处理] 等待刷新后验证码加载...");
    if (!(await waitForCaptchaReady())) {
      console.error(_0x2aacf6(424));
      return;
    }
    const _0x2e296b = document[_0x2aacf6(354)](_0x2aacf6(403));
    if (!_0x2e296b) {
      console[_0x2aacf6(412)](_0x2aacf6(285));
      return;
    }
    const _0x1c6278 = Array.from(_0x2e296b.querySelectorAll(_0x2aacf6(244)));
    if (_0x1c6278[_0x2aacf6(368)] !== 9) {
      console.error(_0x2aacf6(267), _0x1c6278[_0x2aacf6(368)]);
      return;
    }
    console[_0x2aacf6(351)](_0x2aacf6(279));
    for (let _0x1975b8 = 0; _0x1975b8 < _0x1c6278[_0x2aacf6(368)]; _0x1975b8++) {
      const _0x42f726 = _0x1c6278[_0x1975b8];
      await waitForImageLoad(_0x42f726);
      if (_0x42f726[_0x2aacf6(407)] === 0 || _0x42f726[_0x2aacf6(417)] === 0) {
        console.error(_0x2aacf6(408) + (_0x1975b8 + 1) + _0x2aacf6(436));
        return;
      }
    }
    const _0x7c071f = document[_0x2aacf6(354)](_0x2aacf6(333));
    if (!_0x7c071f) {
      {
        console[_0x2aacf6(412)](_0x2aacf6(440));
        return;
      }
    }
    const _0x4c16ac = _0x7c071f[_0x2aacf6(317)][_0x2aacf6(294)]();
    console.log(_0x2aacf6(370) + _0x4c16ac);
    const _0x3fd2e9 = await translateText(_0x4c16ac);
    console.log(_0x2aacf6(427) + _0x3fd2e9);
    const _0x1be7fd = await mergeGridCaptchaImages(_0x1c6278);
    if (!_0x1be7fd) {
      console[_0x2aacf6(412)](_0x2aacf6(371));
      return;
    }
    const _0x37cf78 = {
      "username": CAPTCHA_CONFIG[_0x2aacf6(420)],
      "password": CAPTCHA_CONFIG.password,
      "typeid": CAPTCHA_CONFIG.typeid,
      "softid": CAPTCHA_CONFIG[_0x2aacf6(318)],
      "remark": _0x3fd2e9,
      "image": _0x1be7fd.base64,
      "prompt": _0x4c16ac
    };
    console[_0x2aacf6(351)]("[九宫格处理] 正在调用打码平台API...");
    const _0xee3e54 = await fetch(CAPTCHA_CONFIG.apiUrl, {
        "method": _0x2aacf6(249),
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(_0x37cf78)
      }),
      _0x41e1a6 = await _0xee3e54.json();
    if (_0x41e1a6.success) {
      {
        console[_0x2aacf6(351)](_0x2aacf6(269) + _0x41e1a6.data[_0x2aacf6(435)]);
        window.lastCaptchaId = _0x41e1a6.data.id;
        const _0x3fd7bd = getElementPosition(_0x2e296b);
        await simulateGridClicks(_0x3fd7bd, _0x1be7fd, _0x41e1a6[_0x2aacf6(369)].result);
        if (!(await waitForCaptchaReady())) {
          console[_0x2aacf6(412)]("[九宫格处理] 点击后加载超时");
          return;
        }
        await clickGridConfirmButton();
        !(await waitForCaptchaReady()) && console[_0x2aacf6(412)](_0x2aacf6(365));
      }
    } else console[_0x2aacf6(412)](_0x2aacf6(261) + _0x41e1a6.message);
  } catch (_0x572e67) {
    console[_0x2aacf6(412)](_0x2aacf6(254), _0x572e67);
  } finally {
    window[_0x2aacf6(343)] = false;
    window[_0x2aacf6(380)] = Date[_0x2aacf6(276)]();
  }
}
async function mergeGridCaptchaImages(_0xa33c2f) {
  return new Promise(_0xc0316b => {
    const _0x498ecb = _0x2bc3;
    try {
      if (_0xa33c2f[_0x498ecb(368)] !== 9) return console[_0x498ecb(412)](_0x498ecb(274)), _0xc0316b(null);
      const _0x598a0c = document[_0x498ecb(334)](_0x498ecb(389)),
        _0x186261 = _0x598a0c.getContext("2d"),
        _0x23913d = _0xa33c2f[0][_0x498ecb(407)],
        _0x5ed029 = _0xa33c2f[0].height,
        _0x1d7ddf = 7,
        _0x290619 = _0x23913d * 3 + _0x1d7ddf * 2,
        _0x5e79a6 = _0x5ed029 * 3 + _0x1d7ddf * 2;
      _0x598a0c.width = _0x290619;
      _0x598a0c[_0x498ecb(417)] = _0x5e79a6;
      for (let _0x34ef77 = 0; _0x34ef77 < 3; _0x34ef77++) {
        for (let _0x44399c = 0; _0x44399c < 3; _0x44399c++) {
          const _0x1f9bdb = _0x34ef77 * 3 + _0x44399c;
          _0x186261.drawImage(_0xa33c2f[_0x1f9bdb], _0x44399c * (_0x23913d + _0x1d7ddf), _0x34ef77 * (_0x5ed029 + _0x1d7ddf), _0x23913d, _0x5ed029);
        }
      }
      _0xc0316b({
        "base64": _0x598a0c.toDataURL(_0x498ecb(251))[_0x498ecb(280)](",")[1],
        "width": _0x290619,
        "height": _0x5e79a6,
        "imgWidth": _0x23913d,
        "imgHeight": _0x5ed029,
        "spacing": _0x1d7ddf
      });
    } catch (_0x1b51ca) {
      console[_0x498ecb(412)]("[九宫格合并] 合并图片时出错:", _0x1b51ca);
      _0xc0316b(null);
    }
  });
}
async function simulateGridClicks(_0x2fe73f, _0x4838e5, _0x25d16f) {
  const _0x3a675e = _0x30b83a;
  console[_0x3a675e(351)](_0x3a675e(350), _0x2fe73f, _0x3a675e(437), _0x4838e5[_0x3a675e(407)], "x", _0x4838e5[_0x3a675e(417)] + ")");
  const _0x55c53a = _0x25d16f.split("|")[_0x3a675e(346)](Boolean);
  if (_0x55c53a[_0x3a675e(368)] === 0) {
    {
      console[_0x3a675e(412)](_0x3a675e(385));
      return;
    }
  }
  const _0x150df4 = _0x55c53a[_0x3a675e(250)](_0x42c8bc => {
    {
      const _0xb96299 = _0x3a675e,
        [_0x2ba0b5, _0x54a30b] = _0x42c8bc[_0xb96299(280)](",")[_0xb96299(250)](Number);
      if (isNaN(_0x2ba0b5) || isNaN(_0x54a30b)) return console.error(_0xb96299(372) + _0x42c8bc), null;
      return {
        "x": _0x2ba0b5,
        "y": _0x54a30b
      };
    }
  }).filter(Boolean);
  if (_0x150df4[_0x3a675e(368)] === 0) return;
  for (let _0x5971b7 = 0; _0x5971b7 < _0x150df4.length; _0x5971b7++) {
    {
      const {
          x: _0x2c5ea5,
          y: _0x365275
        } = _0x150df4[_0x5971b7],
        _0x4d03c9 = Math[_0x3a675e(275)](_0x2fe73f.x + _0x2c5ea5 + 1),
        _0x48ffb5 = Math[_0x3a675e(275)](_0x2fe73f.y + _0x365275 + 1);
      console[_0x3a675e(351)](_0x3a675e(297) + (_0x5971b7 + 1) + _0x3a675e(434) + _0x4d03c9 + "," + _0x48ffb5 + _0x3a675e(402) + _0x2c5ea5 + "," + _0x365275 + ")");
      await simulateClick(_0x4d03c9, _0x48ffb5);
      await sleep(600 + Math[_0x3a675e(364)]() * 400);
    }
  }
}
async function refreshGridCaptcha() {
  const _0x3fa2ce = _0x30b83a;
  try {
    {
      const _0x352ba8 = document.querySelector(_0x3fa2ce(386));
      if (!_0x352ba8) {
        {
          console.error("[九宫格刷新] 未找到刷新按钮");
          return;
        }
      }
      console[_0x3fa2ce(351)](_0x3fa2ce(313));
      _0x352ba8.click();
      let _0x1a8dbc = false;
      for (let _0x4d361d = 0; _0x4d361d < 5; _0x4d361d++) {
        if (await isSpinnerVisible()) {
          {
            _0x1a8dbc = true;
            break;
          }
        }
        await sleep(300);
      }
      if (_0x1a8dbc) {
        console[_0x3fa2ce(351)](_0x3fa2ce(246));
        if (!(await waitForSpinnerToDisappear(5000))) {
          console[_0x3fa2ce(412)](_0x3fa2ce(363));
          return;
        }
      }
      await sleep(800);
      console[_0x3fa2ce(351)]("[九宫格刷新] 刷新完成");
    }
  } catch (_0x4f8045) {
    {
      console.error(_0x3fa2ce(383), _0x4f8045);
      throw _0x4f8045;
    }
  }
}
async function waitForCaptchaReady(_0x48cf0c = 8000) {
  const _0x11616c = _0x30b83a,
    _0x3ff722 = Date[_0x11616c(276)]();
  while (Date.now() - _0x3ff722 < _0x48cf0c) {
    const _0x1e04ad = document[_0x11616c(354)]("._2tSNOCuL");
    if (!_0x1e04ad || _0x1e04ad[_0x11616c(423)].display === _0x11616c(439)) {
      const _0x3b320e = document[_0x11616c(409)](_0x11616c(329));
      if (_0x3b320e[_0x11616c(368)] >= 9) {
        let _0xfc30cb = true;
        for (const _0x4b44a9 of _0x3b320e) {
          if (!_0x4b44a9[_0x11616c(349)] || _0x4b44a9[_0x11616c(344)] === 0) {
            _0xfc30cb = false;
            break;
          }
        }
        if (_0xfc30cb) return true;
      }
    }
    await sleep(200);
  }
  return false;
}
async function clickGridConfirmButton() {
  const _0x29b09b = _0x30b83a,
    _0x23f8c7 = document[_0x29b09b(354)](_0x29b09b(295));
  if (!_0x23f8c7) {
    {
      console[_0x29b09b(412)](_0x29b09b(243));
      return;
    }
  }
  const _0x2e0116 = _0x23f8c7[_0x29b09b(272)](),
    _0x281bd9 = _0x2e0116.left + _0x2e0116[_0x29b09b(407)] / 2,
    _0x1415eb = _0x2e0116[_0x29b09b(399)] + _0x2e0116[_0x29b09b(417)] / 2;
  console[_0x29b09b(351)](_0x29b09b(241) + Math[_0x29b09b(275)](_0x281bd9) + "," + Math[_0x29b09b(275)](_0x1415eb) + ")");
  const _0x31e31d = [{
    "type": _0x29b09b(278),
    "x": _0x281bd9,
    "y": _0x1415eb,
    "delay": 50
  }, {
    "type": _0x29b09b(287),
    "x": _0x281bd9,
    "y": _0x1415eb,
    "delay": 100
  }, {
    "type": "mouseup",
    "x": _0x281bd9,
    "y": _0x1415eb,
    "delay": 100
  }, {
    "type": "click",
    "x": _0x281bd9,
    "y": _0x1415eb,
    "delay": 50
  }, {
    "type": _0x29b09b(284),
    "x": _0x281bd9 + 5,
    "y": _0x1415eb + 5,
    "delay": 50
  }];
  for (const {
    type: _0x12d687,
    x: _0x3c38a1,
    y: _0x1b3fa8,
    delay: _0x6b050d
  } of _0x31e31d) {
    _0x23f8c7[_0x29b09b(429)](new MouseEvent(_0x12d687, {
      "bubbles": true,
      "cancelable": true,
      "view": window,
      "clientX": _0x3c38a1,
      "clientY": _0x1b3fa8
    }));
    await sleep(_0x6b050d + Math[_0x29b09b(364)]() * 50);
  }
}
async function isSpinnerVisible() {
  const _0x1dcdda = _0x30b83a,
    _0x8d7f08 = document.querySelector("._2tSNOCuL");
  return _0x8d7f08 && _0x8d7f08[_0x1dcdda(423)][_0x1dcdda(406)] !== _0x1dcdda(439);
}
async function waitForSpinnerToDisappear(_0x5cb161 = 5000) {
  const _0x9b818d = _0x30b83a,
    _0xa937c1 = Date.now();
  while (Date[_0x9b818d(276)]() - _0xa937c1 < _0x5cb161) {
    const _0x4e3fbe = document[_0x9b818d(354)](_0x9b818d(288));
    if (!_0x4e3fbe || _0x4e3fbe[_0x9b818d(423)].display === "none") return true;
    await sleep(200);
  }
  return false;
}
async function waitForImageLoad(_0x4aca20) {
  return new Promise(_0x17df03 => {
    {
      const _0x5aa851 = _0x2bc3;
      _0x4aca20[_0x5aa851(349)] ? _0x17df03() : (_0x4aca20[_0x5aa851(286)] = _0x17df03, _0x4aca20[_0x5aa851(301)] = _0x17df03);
    }
  });
}
function getElementPosition(_0x254b07) {
  const _0x1ef0cb = _0x30b83a,
    _0x17eea7 = _0x254b07[_0x1ef0cb(272)]();
  return {
    "x": _0x17eea7.left + window[_0x1ef0cb(323)],
    "y": _0x17eea7[_0x1ef0cb(399)] + window.scrollY,
    "width": _0x17eea7[_0x1ef0cb(407)],
    "height": _0x17eea7[_0x1ef0cb(417)]
  };
}
async function simulateClick(_0x3e7474, _0x52c5c0) {
  const _0x2057c9 = _0x30b83a,
    _0x16e7ab = document.elementFromPoint(_0x3e7474, _0x52c5c0);
  if (!_0x16e7ab) return;
  const _0x50379d = [new MouseEvent(_0x2057c9(287), {
    "bubbles": true,
    "clientX": _0x3e7474,
    "clientY": _0x52c5c0
  }), new MouseEvent(_0x2057c9(384), {
    "bubbles": true,
    "clientX": _0x3e7474,
    "clientY": _0x52c5c0
  }), new MouseEvent(_0x2057c9(293), {
    "bubbles": true,
    "clientX": _0x3e7474,
    "clientY": _0x52c5c0
  })];
  for (const _0x587295 of _0x50379d) {
    _0x16e7ab[_0x2057c9(429)](_0x587295);
    await sleep(50 + Math[_0x2057c9(364)]() * 50);
  }
}
function sleep(_0x4d88eb) {
  return new Promise(_0x12cb84 => setTimeout(_0x12cb84, _0x4d88eb));
}
async function waitForChange(_0x5d426b, _0x271345 = 3000) {
  const _0x423304 = _0x30b83a,
    _0x2283ba = Date[_0x423304(276)]();
  while (Date[_0x423304(276)]() - _0x2283ba < _0x271345) {
    {
      if (_0x5d426b()) return true;
      await sleep(200);
    }
  }
  return false;
}
async function translateText(_0x13d59b) {
  const _0x27f421 = _0x30b83a,
    _0x2d5aee = "https://www.1618.wang/api/translate",
    _0x2e71aa = encodeURIComponent(_0x13d59b);
  try {
    const _0xec0fcd = await fetch(_0x2d5aee + _0x27f421(253) + _0x2e71aa, {
        "method": _0x27f421(336),
        "headers": {
          "Accept": _0x27f421(393)
        }
      }),
      _0x1d8981 = await _0xec0fcd[_0x27f421(415)](),
      _0xa3e83d = extractTranslatedText(_0x1d8981);
    return _0xa3e83d || _0x13d59b;
  } catch (_0x3bda91) {
    console.error("[翻译功能] 翻译出错:", _0x3bda91);
    return _0x13d59b;
  }
}
function extractTranslatedText(_0x4877b3) {
  const _0x2e5977 = _0x30b83a,
    _0x28b388 = _0x2e5977(281),
    _0x2d5855 = _0x2e5977(245),
    _0x307cbc = _0x4877b3.indexOf(_0x28b388);
  if (_0x307cbc === -1) return null;
  const _0x1630e5 = _0x4877b3.indexOf("<li>", _0x307cbc) + 4,
    _0x5217bf = _0x4877b3.indexOf(_0x2d5855, _0x1630e5);
  return _0x4877b3[_0x2e5977(395)](_0x1630e5, _0x5217bf)[_0x2e5977(294)]();
}
async function reportError(_0x116dfa) {
  const _0xfbdf49 = _0x30b83a,
    _0x5e3c94 = CAPTCHA_CONFIG.reportUrl;
  try {
    console[_0xfbdf49(351)]("[报错功能] 正在报错ID: " + _0x116dfa);
    const _0x1104f8 = await fetch(_0x5e3c94, {
        "method": "POST",
        "headers": {
          "Content-Type": _0xfbdf49(289)
        },
        "body": JSON.stringify({
          "id": _0x116dfa
        })
      }),
      _0x23d670 = await _0x1104f8.json();
    return _0x23d670[_0xfbdf49(360)] ? (console[_0xfbdf49(351)](_0xfbdf49(322)), _0x23d670) : (console[_0xfbdf49(412)]("[报错功能] 报错失败:", _0x23d670.message), _0x23d670);
  } catch (_0x22f74d) {
    console[_0xfbdf49(412)]("[报错功能] 请求出错:", _0x22f74d);
    return {
      "success": false,
      "message": _0xfbdf49(271)
    };
  }
}
async function simulateClick(_0x502e1a, _0x269637) {
  const _0x5734bc = _0x30b83a,
    _0x5e5534 = document[_0x5734bc(382)](_0x502e1a - window[_0x5734bc(413)], _0x269637 - window[_0x5734bc(268)]);
  if (!_0x5e5534) {
    {
      console.error(_0x5734bc(302) + _0x502e1a + ", " + _0x269637 + _0x5734bc(259));
      return;
    }
  }
  const _0x198692 = [{
    "type": _0x5734bc(260),
    "options": {
      "clientX": _0x502e1a,
      "clientY": _0x269637
    }
  }, {
    "type": "mouseover",
    "options": {
      "clientX": _0x502e1a,
      "clientY": _0x269637
    }
  }, {
    "type": _0x5734bc(287),
    "options": {
      "clientX": _0x502e1a,
      "clientY": _0x269637,
      "button": 0
    }
  }, {
    "type": _0x5734bc(384),
    "options": {
      "clientX": _0x502e1a,
      "clientY": _0x269637,
      "button": 0
    }
  }, {
    "type": "click",
    "options": {
      "clientX": _0x502e1a,
      "clientY": _0x269637,
      "button": 0
    }
  }];
  for (const _0x3be7c8 of _0x198692) {
    {
      const _0x230cf4 = new MouseEvent(_0x3be7c8[_0x5734bc(428)], {
        "bubbles": true,
        "cancelable": true,
        "view": window,
        ..._0x3be7c8[_0x5734bc(266)]
      });
      _0x5e5534.dispatchEvent(_0x230cf4);
      await sleep(50 + Math[_0x5734bc(364)]() * 50);
    }
  }
}
function sleep(_0x126c8b) {
  return new Promise(_0x39bf63 => setTimeout(_0x39bf63, _0x126c8b));
}
function waitForChange(_0x2700bd, _0x4807e4 = 6000) {
  return new Promise(_0x119538 => {
    {
      const _0x3255f7 = Date.now(),
        _0x20f7f5 = () => {
          const _0x59cd70 = _0x2bc3;
          if (_0x2700bd()) _0x119538(true);else Date[_0x59cd70(276)]() - _0x3255f7 >= _0x4807e4 ? _0x119538(false) : setTimeout(_0x20f7f5, 100);
        };
      _0x20f7f5();
    }
  });
}
async function isSpinnerVisible() {
  const _0x3a080a = _0x30b83a,
    _0x576174 = document.querySelector(".root-2tSNO.Picture-spinner, .root-2tSNO.SemanticsVerify-spinner");
  if (!_0x576174) return false;
  const _0x5f3c55 = window[_0x3a080a(335)](_0x576174);
  return _0x5f3c55[_0x3a080a(406)] !== _0x3a080a(439) && _0x5f3c55[_0x3a080a(324)] !== _0x3a080a(345);
}
async function waitForSpinnerToDisappear(_0x2359ce = 10000) {
  const _0x202c8a = _0x30b83a,
    _0x5935c6 = Date[_0x202c8a(276)]();
  while (Date[_0x202c8a(276)]() - _0x5935c6 < _0x2359ce) {
    if (!(await isSpinnerVisible())) return;
    await new Promise(_0x3b557c => setTimeout(_0x3b557c, 200));
  }
  console[_0x202c8a(376)]("[加载检测] 等待加载动画超时");
}
function waitForImageLoad(_0x515208) {
  return new Promise(_0x21c5b7 => {
    const _0xfaea01 = _0x2bc3;
    _0x515208[_0xfaea01(349)] ? _0x21c5b7() : (_0x515208[_0xfaea01(286)] = () => _0x21c5b7(), _0x515208[_0xfaea01(301)] = () => _0x21c5b7());
  });
}
function initCaptchaAutoSolverWithCheck() {
  const _0x3b07cd = _0x30b83a;
  document[_0x3b07cd(421)] !== _0x3b07cd(349) ? window.addEventListener(_0x3b07cd(387), () => {
    setTimeout(conditionalInit, 3000);
  }) : setTimeout(conditionalInit, 3000);
}
function conditionalInit() {
  const _0x56d230 = _0x30b83a;
  try {
    {
      const _0x3168bf = document[_0x56d230(354)]("#temu-log-container");
      if (!_0x3168bf) return;
      initCaptchaAutoSolver();
    }
  } catch (_0x1b4845) {
    console.error("[系统启动] 初始化检查时出错:", _0x1b4845);
  }
}
initCaptchaAutoSolverWithCheck();