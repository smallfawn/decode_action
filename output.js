//Wed Aug 28 2024 03:57:28 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
chrome.storage.sync.set({
  executeStatus: ""
});
const commitButtonSelector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > div > div.ut-draggable > button.ut-squad-tab-button-control.actionTab.right.call-to-action",
  shieldSelector01 = "body > div.ut-click-shield.showing",
  shieldSelector02 = "body > div.ut-click-shield.showing.fsu-loading",
  claimReward82_02 = "body > div.view-modal-container.form-modal > div > div > section > section > div > div",
  user_index_id_selector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-leaderboards-tile-view.tile.col-1-1 > div.tileContent > div",
  fsu_status = "body > div.fc-header-view > a.header_explain";
function sleep(_0x46cdc8) {
  return new Promise(_0x1bb949 => setTimeout(_0x1bb949, _0x46cdc8));
}
document.addEventListener("DOMContentLoaded", () => {
  chrome.runtime.sendMessage({
    action: "pageLoaded"
  });
});
function waitCommitEnable(_0x111a35 = 2000, _0x948a70 = 3) {
  let _0x26cfbf = 0;
  return new Promise((_0x56bba3, _0x2a8928) => {
    const _0x6c5b7f = () => {
      if (_0x26cfbf >= _0x948a70) {
        _0x56bba3(false);
        return;
      }
      const _0x3752c7 = document.querySelector(commitButtonSelector);
      if (_0x3752c7 && !_0x3752c7.disabled) {
        _0x56bba3(true);
      } else {
        _0x26cfbf++;
        setTimeout(_0x6c5b7f, _0x111a35);
      }
    };
    _0x6c5b7f();
  });
}
function waitForTextLoad(_0x5cb848, _0xbaa54a = shieldSelector01, _0x1962a8 = 1000, _0x3f2b9a = 20) {
  let _0x2de0eb = 0;
  return new Promise((_0x1f57af, _0x1ce686) => {
    const _0x3b01c8 = () => {
      if (_0x2de0eb >= _0x3f2b9a) {
        _0x1f57af(false);
        return;
      }
      const _0x3f999f = document.querySelector(_0xbaa54a),
        _0x308e4f = document.querySelector(_0x5cb848);
      if (!_0x3f999f) {
        _0x308e4f && window.getComputedStyle(_0x308e4f).display !== "none" ? _0x1f57af(true) : (_0x2de0eb++, setTimeout(_0x3b01c8, _0x1962a8));
      } else {
        _0x2de0eb++;
        setTimeout(_0x3b01c8, _0x1962a8);
      }
    };
    _0x3b01c8();
  });
}
function waitForRating(_0x16700e = 3000, _0x252cdf = 10) {
  let _0x188c7f = 0;
  return new Promise((_0x4e2528, _0x5061f2) => {
    const _0x3fdc47 = () => {
      if (_0x188c7f >= _0x252cdf) {
        localStorage.setItem("shouldRunAfterRefresh", "true");
        location.reload();
        _0x4e2528(false);
        return;
      }
      const _0x1c349d = document.querySelector("body > main > section > section > div.ut-navigation-container-view--content > div > div > div > div.ut-draggable > div.ut-squad-pitch-view.f4321.sbc > div:nth-child(2) > div.small.player.item.rare.has-chemistry-breakdown.draggable.droppable.animateReplace.ut-item-loaded > div.ut-item-view--main.ut-item-view > div.playerOverview > div.rating") || document.querySelector("body > main > section > section > div.ut-navigation-container-view--content > div > div > div > div.ut-draggable > div.ut-squad-pitch-view.f4321.sbc > div.ut-squad-slot-view.ui-slot-selected > div.small.player.item.specials.has-chemistry-breakdown.draggable.droppable.animateReplace.ut-item-loaded > div.ut-item-view--main.ut-item-view > div.playerOverview > div.rating") || document.querySelector("body > main > section > section > div.ut-navigation-container-view--content > div > div > div > div.ut-draggable > div.ut-squad-pitch-view.f4321.sbc > div.ut-squad-slot-view.ui-slot-selected > div.small.player.item.rare.has-chemistry-breakdown.draggable.droppable.animateReplace.ut-item-loaded > div.ut-item-view--main.ut-item-view > div.playerOverview > div.rating") || document.querySelector("body > main > section > section > div.ut-navigation-container-view--content > div > div > div > div.ut-draggable > div.ut-squad-pitch-view.sbc.f4321 > div:nth-child(2) > div.small.player.item.specials.has-chemistry-breakdown.draggable.droppable.animateReplace.ut-item-loaded > div.ut-item-view--main.ut-item-view > div.playerOverview > div.rating") || document.querySelector("body > main > section > section > div.ut-navigation-container-view--content > div > div > div > div.ut-draggable > div.ut-squad-pitch-view.f4321.sbc > div:nth-child(2) > div.small.player.item.specials.has-chemistry-breakdown.draggable.droppable.animateReplace.ut-item-loaded > div.ut-item-view--main.ut-item-view > div.playerOverview > div.rating");
      if (_0x1c349d) {
        _0x4e2528(_0x1c349d);
      } else {
        _0x188c7f++;
        setTimeout(_0x3fdc47, _0x16700e);
      }
    };
    _0x3fdc47();
  });
}
function waitForTextRating(_0x40203b = 3000, _0x44ae55 = 10) {
  let _0x433764 = 0;
  return new Promise((_0x2c0c90, _0x23709e) => {
    const _0x1979ca = () => {
      if (_0x433764 >= _0x44ae55) {
        _0x2c0c90(false);
        return;
      }
      const _0x3859f6 = document.querySelector("body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-container-view--content > div > div.paginated-item-list.ut-pinned-list > ul > li:nth-child(1) > div > div.entityContainer > div.small.player.item.specials.ut-item-loaded > div.ut-item-view--main.ut-item-view > div.playerOverview > div.rating") || document.querySelector("body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-container-view--content > div > div.paginated-item-list.ut-pinned-list > ul > li:nth-child(1) > div > div.entityContainer > div.small.player.item.specials.ut-item-loaded > div.ut-item-view--main.ut-item-view > div.playerOverview > div.rating");
      if (_0x3859f6) {
        _0x2c0c90(_0x3859f6);
      } else {
        _0x433764++;
        setTimeout(_0x1979ca, _0x40203b);
      }
    };
    _0x1979ca();
  });
}
function waitForCondition(_0x306fb1, _0x46626b, _0x22ed80 = "body > div.ut-click-shield.showing", _0x1f752d = 1000, _0x39a0a5 = 15) {
  let _0x5ba5fe = 0;
  return new Promise((_0x4a96ee, _0x525a0d) => {
    const _0x4a5def = () => {
      if (_0x5ba5fe >= _0x39a0a5) {
        localStorage.setItem("shouldRunAfterRefresh", "true");
        location.reload();
        _0x4a96ee(false);
        return;
      }
      const _0x2dfb2e = document.querySelector(_0x22ed80);
      if (!_0x2dfb2e) {
        const _0x1571fd = Array.from(document.querySelectorAll(_0x306fb1)),
          _0x1f5f28 = _0x1571fd.find(_0x33bd2a => _0x33bd2a.textContent.trim().includes(_0x46626b));
        if (_0x1f5f28) {
          simulateMouseEvent(_0x1f5f28, "mousedown");
          simulateMouseEvent(_0x1f5f28, "mouseup");
          simulateMouseEvent(_0x1f5f28, "click");
          console.log("按下按钮:", _0x46626b);
          _0x4a96ee(true);
        } else {
          console.log("目标按钮未找到.", _0x46626b);
          _0x5ba5fe++;
          setTimeout(_0x4a5def, _0x1f752d);
        }
      } else {
        console.log("Shield element still present, continuing to check.");
        _0x5ba5fe++;
        setTimeout(_0x4a5def, _0x1f752d);
      }
    };
    _0x4a5def();
  });
}
function waitForCondition2(_0x48776f, _0x19091c, _0x2b2b25 = "body > div.ut-click-shield.showing", _0x109105 = 1000, _0x31df85 = 15) {
  let _0x1b171d = 0;
  return new Promise((_0x4b6e41, _0x3de899) => {
    const _0x41ca57 = () => {
      if (_0x1b171d >= _0x31df85) {
        _0x4b6e41(false);
        return;
      }
      const _0x1ab432 = document.querySelector(_0x2b2b25);
      if (!_0x1ab432) {
        const _0x209c1c = Array.from(document.querySelectorAll(_0x48776f)),
          _0x35e870 = _0x209c1c.find(_0x161727 => _0x161727.textContent.trim().includes(_0x19091c));
        if (_0x35e870 && !_0x35e870.disabled) {
          simulateMouseEvent(_0x35e870, "mousedown");
          simulateMouseEvent(_0x35e870, "mouseup");
          simulateMouseEvent(_0x35e870, "click");
          console.log("按下按钮:", _0x19091c);
          _0x4b6e41(true);
        } else {
          console.log("目标按钮未找到.", _0x19091c);
          _0x1b171d++;
          setTimeout(_0x41ca57, _0x109105);
        }
      } else {
        console.log("Shield element still present, continuing to check.");
        _0x1b171d++;
        setTimeout(_0x41ca57, _0x109105);
      }
    };
    _0x41ca57();
  });
}
function waitForSBC(_0x3ed5db, _0x1b2620, _0x4c74d6 = "body > div.ut-click-shield.showing", _0x214fe9 = 1000, _0x572eed = 15) {
  let _0xb7b01e = 0;
  return new Promise((_0x5f0880, _0x3331e6) => {
    const _0x2c87b9 = () => {
      if (_0xb7b01e >= _0x572eed) {
        _0x5f0880(false);
        return;
      }
      const _0x15faa6 = document.querySelector(_0x4c74d6);
      if (!_0x15faa6) {
        const _0x292043 = Array.from(document.querySelectorAll(_0x3ed5db)),
          _0x3968f6 = _0x292043.find(_0x2204b9 => _0x2204b9.textContent.trim() === _0x1b2620);
        if (_0x3968f6) {
          simulateMouseEvent(_0x3968f6, "mousedown");
          simulateMouseEvent(_0x3968f6, "mouseup");
          simulateMouseEvent(_0x3968f6, "click");
          console.log("按下按钮:", _0x1b2620);
          _0x5f0880(true);
        } else {
          console.log("目标按钮未找到.", _0x1b2620);
          _0xb7b01e++;
          setTimeout(_0x2c87b9, _0x214fe9);
        }
      } else {
        console.log("Shield element still present, continuing to check.");
        _0xb7b01e++;
        setTimeout(_0x2c87b9, _0x214fe9);
      }
    };
    _0x2c87b9();
  });
}
function waitForWithTargetSelectorCondition(_0x5ccb13, _0x26c380, _0xe0b968, _0x496cf8 = 1000, _0xd332f0 = 30) {
  let _0x48e9d7 = 0;
  return new Promise((_0x299acc, _0x107373) => {
    const _0x2e8bd7 = () => {
      if (_0x48e9d7 >= _0xd332f0) {
        localStorage.setItem("shouldRunAfterRefresh", "true");
        location.reload();
        _0x299acc(false);
        return;
      }
      const _0x17df51 = document.querySelector(_0xe0b968);
      if (_0x17df51) {
        const _0x319043 = Array.from(document.querySelectorAll(_0x5ccb13)),
          _0xebe16c = _0x319043.find(_0x692b0b => _0x692b0b.textContent.trim().includes(_0x26c380));
        if (_0xebe16c && !_0xebe16c.disabled) {
          simulateMouseEvent(_0xebe16c, "mousedown");
          simulateMouseEvent(_0xebe16c, "mouseup");
          simulateMouseEvent(_0xebe16c, "click");
          console.log("按下按钮:", _0x26c380);
          _0x299acc();
        } else {
          _0x48e9d7++;
          console.log("目标按钮未找到.", _0x26c380);
          setTimeout(_0x2e8bd7, _0x496cf8);
        }
      } else {
        console.log("targetElement不存在，重试");
        _0x48e9d7++;
        setTimeout(_0x2e8bd7, _0x496cf8);
      }
    };
    _0x2e8bd7();
  });
}
function waitForElementRemove(_0x4399a7, _0x33dd60, _0x414cb0, _0x4461fe = 3000, _0xacfba4 = 5) {
  let _0xc2ca3b = 0;
  return new Promise((_0x116410, _0x5f3a99) => {
    const _0x3416c7 = () => {
      if (_0xc2ca3b >= _0xacfba4) {
        console.log("功能卡顿");
        localStorage.setItem("shouldRunAfterRefresh", "true");
        location.reload();
        _0x116410(false);
        return;
      }
      const _0xd4c9d1 = document.querySelector(_0x33dd60),
        _0x52c3f5 = document.querySelector(_0x414cb0);
      if (!_0xd4c9d1) {
        if (_0x52c3f5) {
          console.log("快速");
          simulateMouseEvent(_0x52c3f5, "mousedown");
          simulateMouseEvent(_0x52c3f5, "mouseup");
          simulateMouseEvent(_0x52c3f5, "click");
          _0xc2ca3b++;
          setTimeout(_0x3416c7, _0x4461fe);
        } else {
          console.log(_0x4399a7);
          _0x116410(true);
        }
      } else {
        console.log(_0x33dd60 + "Shield element still present, continuing to check.");
        _0xc2ca3b++;
        setTimeout(_0x3416c7, _0x4461fe);
      }
    };
    _0x3416c7();
  });
}
function waitForElementRemove2(_0x398ec1, _0x4d7646, _0x427115, _0x44b3fc = 5000, _0x23c287 = 10) {
  let _0x5ea15d = 0;
  return new Promise((_0x5e56b9, _0x58b43a) => {
    const _0x49b792 = () => {
      if (_0x5ea15d >= _0x23c287) {
        _0x5e56b9(false);
        return;
      }
      const _0x54a69b = document.querySelector(_0x4d7646),
        _0xc9e73c = document.querySelector(_0x427115);
      if (!_0x54a69b) {
        if (_0xc9e73c) {
          console.log("快速");
          simulateMouseEvent(_0xc9e73c, "mousedown");
          simulateMouseEvent(_0xc9e73c, "mouseup");
          simulateMouseEvent(_0xc9e73c, "click");
          _0x5ea15d++;
          setTimeout(_0x49b792, _0x44b3fc);
        } else {
          console.log(_0x398ec1);
          _0x5e56b9(true);
        }
      } else {
        console.log(_0x4d7646 + "Shield element still present, continuing to check.");
        _0x5ea15d++;
        setTimeout(_0x49b792, _0x44b3fc);
      }
    };
    _0x49b792();
  });
}
function waitForElementRemoveByText(_0x5325c8, _0x1da798, _0x107ae9 = 500, _0x1d4b84 = 3) {
  let _0x13b4fc = 0;
  return new Promise((_0x202c04, _0x472134) => {
    const _0x4adaf3 = () => {
      if (_0x13b4fc >= _0x1d4b84) {
        _0x202c04(false);
        return;
      }
      console.log("监听是否有特殊弹窗");
      const _0x4532e4 = Array.from(document.querySelectorAll(_0x5325c8)),
        _0x5b6dea = _0x4532e4.find(_0x3ac059 => _0x3ac059.textContent.trim().includes(_0x1da798));
      if (_0x5b6dea) {
        console.log("特殊窗口存在，点击.");
        simulateMouseEvent(_0x5b6dea, "mousedown");
        simulateMouseEvent(_0x5b6dea, "mouseup");
        simulateMouseEvent(_0x5b6dea, "click");
        setTimeout(_0x4adaf3, _0x107ae9);
      } else {
        _0x13b4fc++;
        setTimeout(_0x4adaf3, _0x107ae9);
      }
    };
    _0x4adaf3();
  });
}
function waitForTargetSelector(_0xb4af0, _0x39f6f7 = 5000, _0x247dcb = 30) {
  let _0x39c5b7 = 0;
  return new Promise((_0x25c19a, _0x5337b8) => {
    const _0x1ecfb3 = () => {
      if (_0x39c5b7 >= _0x247dcb) {
        localStorage.setItem("shouldRunAfterRefresh", "true");
        location.reload();
        _0x25c19a(false);
        return;
      }
      if (_0xb4af0) {
        console.log("目标按钮存在，点击.");
        simulateMouseEvent(_0xb4af0, "mousedown");
        simulateMouseEvent(_0xb4af0, "mouseup");
        simulateMouseEvent(_0xb4af0, "click");
        simulateMouseEvent(_0xb4af0, "mousedown");
        simulateMouseEvent(_0xb4af0, "mouseup");
        simulateMouseEvent(_0xb4af0, "click");
        _0x25c19a(true);
      } else {
        console.log("目标按钮不存在：", _0xb4af0);
        _0x39c5b7++;
        setTimeout(_0x1ecfb3, _0x39f6f7);
      }
    };
    _0x1ecfb3();
  });
}
function waitForElementTagText(_0x1f5416, _0x180a0e, _0x31b9f8, _0x2e75a5 = 3000, _0x14ca04 = 30) {
  let _0xbf543e = 0;
  return new Promise((_0x3c958a, _0x265928) => {
    const _0x392241 = () => {
      if (_0xbf543e >= _0x14ca04) {
        _0x3c958a(false);
        return;
      }
      const _0x3c94a1 = Array.from(document.querySelectorAll(_0x180a0e)),
        _0x1f7218 = _0x3c94a1.find(_0x55dbd0 => _0x55dbd0.textContent.trim().includes(_0x31b9f8));
      if (_0x1f7218 && !window.getComputedStyle(_0x1f7218).display !== "none") {
        simulateMouseEvent(_0x1f7218, "mousedown");
        simulateMouseEvent(_0x1f7218, "mouseup");
        simulateMouseEvent(_0x1f7218, "click");
        console.log(_0x1f5416);
        _0x3c958a(true);
      } else {
        console.log("element不符合要求，重试");
        _0xbf543e++;
        setTimeout(_0x392241, _0x2e75a5);
      }
    };
    _0x392241();
  });
}
function simulateMouseEvent(_0xa9239c, _0x20e380) {
  var _0x1d80ff = new MouseEvent(_0x20e380, {
    view: window,
    bubbles: true,
    cancelable: true
  });
  _0xa9239c.dispatchEvent(_0x1d80ff);
}
chrome.runtime.onMessage.addListener((_0x2c5489, _0x490e85, _0x58ac41) => {
  if (_0x2c5489.type === "performBestScore") {
    performBestScore();
  } else {
    if (_0x2c5489.type === "performBestCompleteScore") {
      performBestCompleteScore();
    } else {
      if (_0x2c5489.type === "performScore") {
        performScore();
      } else {
        _0x2c5489.type === "stopTask" && (stopTask(), console.log("停止任务"));
      }
    }
  }
});
async function onPageLoad() {
  const _0x21b8a9 = localStorage.getItem("shouldRunAfterRefresh"),
    _0x4d8ceb = localStorage.getItem("mode");
  if (_0x21b8a9 === "true") {
    console.log("页面刷新后，继续执行滚卡脚本");
    localStorage.removeItem("shouldRunAfterRefresh");
    await sleep(20000);
    await waitForElementRemoveByText("button", "登录");
    await runRollingCardCycle(_0x4d8ceb);
  } else {
    console.log("初次加载，不执行滚卡脚本");
  }
}
window.addEventListener("load", onPageLoad);
async function findClubDiv() {
  const _0x5b9374 = Array.from(document.querySelectorAll("span")),
    _0x57672c = _0x5b9374.filter(_0x9c1dac => _0x9c1dac.textContent.trim().includes("拥有")),
    _0x420a3d = [];
  _0x57672c.forEach(_0x36ce7e => {
    _0x420a3d.push(_0x36ce7e.parentElement);
  });
  let _0x330fc3 = -Infinity,
    _0xef7f99 = null;
  const _0x32ba84 = [];
  if (_0x420a3d.length > 1) {
    const _0x25d276 = document.querySelectorAll("div.rating");
    _0x25d276.forEach(_0xdd5689 => {
      if (_0x420a3d.includes(_0xdd5689.parentElement.parentElement.parentElement.parentElement.parentElement)) {
        _0x32ba84.push(_0xdd5689);
      }
    });
  }
  _0x32ba84.forEach(_0xed17e => {
    var _0x3637c4 = parseInt(_0xed17e.innerText, 10);
    _0x3637c4 > _0x330fc3 && (_0x330fc3 = _0x3637c4, _0xef7f99 = _0xed17e);
  });
  if (_0x330fc3 >= 97) {
    port = await chrome.runtime.connect({
      name: "Screenshot"
    });
    await port.postMessage({
      message: "截图"
    });
    console.log("截图成功");
  } else {
    if (_0x330fc3 <= 86) {
      const _0x468d64 = _0x5b9374.filter(_0x9c6324 => _0x9c6324.textContent.trim().includes("已拥有")),
        _0x9b1fe4 = [];
      _0x468d64.forEach(_0x57a32b => {
        if (window.getComputedStyle(_0x57a32b).display === "none") {
          _0x9b1fe4.push(_0x57a32b.parentElement);
        }
      });
      if (_0x9b1fe4.length === 0) {
        return document.querySelector("body > main > div > div > div.content-container > section.large-picks-container > div.fsu-optionbest > div.player-pick-option");
      } else {
        var _0x4bdb37 = [];
        _0x32ba84.forEach(_0x16b814 => {
          if (_0x9b1fe4.includes(_0x16b814.parentElement.parentElement.parentElement.parentElement.parentElement)) {
            _0x4bdb37.push(_0x16b814);
          }
        });
        let _0x297592 = -Infinity,
          _0x165e34 = null;
        _0x4bdb37.forEach(_0x1cbf41 => {
          const _0x1fb618 = parseInt(_0x1cbf41.innerText, 10);
          if (_0x1fb618 > _0x297592) {
            _0x297592 = _0x1fb618;
            _0x165e34 = _0x1cbf41;
          }
        });
        return _0x165e34.parentElement.parentElement.parentElement.parentElement.parentElement;
      }
    }
  }
  return document.querySelector("body > main > div > div > div.content-container > section.large-picks-container > div.fsu-optionbest > div.player-pick-option");
}
async function checkRatings() {
  await sleep(8000);
  var _0x5e8ffd = document.querySelectorAll("div.rating");
  if (_0x5e8ffd.length !== 0) {
    let _0x291dae = parseInt(_0x5e8ffd[0].textContent, 10);
    if (_0x291dae >= 97) {
      port = await chrome.runtime.connect({
        name: "Screenshot"
      });
      await port.postMessage({
        message: "截图"
      });
      console.log("截图成功");
    }
  }
  return _0x5e8ffd;
}
async function repetitiveProcess() {
  await sleep(3000);
  var _0x4ba534 = document.querySelectorAll("div.rating"),
    _0x558fdd = Math.ceil(_0x4ba534.length / 2),
    _0x1a91d7 = [];
  for (var _0x12f0b5 = 0; _0x12f0b5 < _0x558fdd; _0x12f0b5++) {
    var _0xd8ba2b = _0x4ba534[_0x12f0b5].textContent || _0x4ba534[_0x12f0b5].innerText,
      _0x55e6af = parseInt(_0xd8ba2b, 10);
    console.log(_0x55e6af);
    if (!isNaN(_0x55e6af) && _0x55e6af >= 87 && _0x55e6af <= 89) {
      _0x1a91d7.push(_0x4ba534[_0x12f0b5]);
    } else {
      if (!isNaN(_0x55e6af) && _0x55e6af > 89) {
        var _0x3175f4 = document.createElement("div");
        _0x3175f4.classList.add("rating");
        _0x3175f4.textContent = "89";
        _0x1a91d7.push(_0x3175f4);
      }
    }
  }
  return _0x1a91d7;
}
async function selectPlayer(_0x175955) {
  simulateMouseEvent(_0x175955.find(_0x3ba7ba => _0x3ba7ba.textContent.trim() === "球员挑选物品"), "mousedown");
  simulateMouseEvent(_0x175955.find(_0x224f2d => _0x224f2d.textContent.trim() === "球员挑选物品"), "mouseup");
  simulateMouseEvent(_0x175955.find(_0x58ae06 => _0x58ae06.textContent.trim() === "球员挑选物品"), "click");
  await sleep(500);
  await waitForCondition("button", "兑换球员挑选物品");
  await sleep(2500);
  var _0x1063d0 = await findClubDiv();
  await waitForTargetSelector(_0x1063d0);
  await waitForWithTargetSelectorCondition("button", "确认", "body > main > div > div > div.content-container");
  await sleep(500);
  await waitForWithTargetSelectorCondition("button", "领取奖励", claimReward82_02);
}
async function cardManagementUndistributed() {
  await sleep(500);
  console.log("进入商店页面");
  await waitForCondition("button", "商店");
  await sleep(500);
  await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
  await sleep(500);
  console.log("进入组合包");
  await waitForCondition("h1", "组合包");
  await sleep(500);
  console.log("判断是否还存在未分配物品");
  while (await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 3)) {
    console.log("判断是否有可挑选球员");
    await sleep(2500);
    var _0x1210c2 = Array.from(document.querySelectorAll("div"));
    while (_0x1210c2.find(_0x5f35a3 => _0x5f35a3.textContent.trim() === "球员挑选物品")) {
      await selectPlayer(_0x1210c2);
      _0x1210c2 = Array.from(document.querySelectorAll("div"));
    }
    await sleep(500);
    console.log("进入商店页面");
    await waitForCondition("button", "商店");
    await sleep(500);
    await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
    await sleep(500);
    console.log("进入组合包");
    await waitForCondition("h1", "组合包");
    await sleep(500);
    var _0x27bb13 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 3);
    console.log("是否存在未分配物品：", _0x27bb13);
    if (_0x27bb13) {
      await sleep(500);
      var _0x1d1dc1 = await repetitiveProcess();
      if (_0x1d1dc1.length !== 0) {
        for (var _0x350ba1 = 0; _0x350ba1 < _0x1d1dc1.length; _0x350ba1++) {
          console.log("总评 " + _0x1d1dc1[_0x350ba1].textContent || _0x1d1dc1[_0x350ba1].innerText + " 重复物品交换");
          await highToLow("总评 " + _0x1d1dc1[_0x350ba1].textContent || _0x1d1dc1[_0x350ba1].innerText + " 重复物品交换", 95);
        }
        await sleep(500);
        console.log("进入商店页面");
        await waitForCondition("button", "商店");
        await sleep(500);
        await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
        await sleep(500);
        console.log("进入组合包");
        await waitForCondition("h1", "组合包");
        await sleep(500);
        var _0x27bb13 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 3);
        console.log("是否存在未分配物品：", _0x27bb13);
      }
      if (_0x27bb13) {
        await sleep(500);
        console.log("快速出售重复物品");
        await waitForCondition("button", "快速出售");
        await sleep(500);
        await waitForCondition("button", "确定");
        await sleep(500);
        console.log("进入商店页面");
        await waitForCondition("button", "商店");
        await sleep(500);
        await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
        await sleep(500);
        console.log("进入组合包");
        await waitForCondition("h1", "组合包");
      }
    }
  }
  await sleep(500);
  return "completed";
}
async function unpacking(_0x15cafe, _0xc62495) {
  const _0x2a0ce2 = document.querySelectorAll("h1");
  for (let _0x3e6026 of _0x2a0ce2) {
    if (_0x3e6026.textContent.trim() === _0x15cafe) {
      const _0x191d21 = _0x3e6026.closest("div"),
        _0x511e92 = _0x191d21.querySelectorAll("button");
      for (let _0x1198b4 of _0x511e92) {
        if (_0x1198b4.textContent.trim().includes(_0xc62495)) {
          simulateMouseEvent(_0x1198b4, "mousedown");
          simulateMouseEvent(_0x1198b4, "mouseup");
          simulateMouseEvent(_0x1198b4, "click");
          console.log("按下按钮: " + _0xc62495);
          await sleep(3000);
          return true;
        }
      }
    }
  }
  return false;
}
async function cardManagementPackage(_0x125d34 = 3) {
  await sleep(500);
  console.log("进入商店页面");
  await waitForCondition("button", "商店");
  await sleep(500);
  await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
  await sleep(500);
  console.log("组合包");
  await waitForCondition("h1", "组合包");
  await sleep(500);
  var _0x4a18b5 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 5);
  console.log("是否存在未分配物品：", _0x4a18b5);
  if (_0x4a18b5) {
    await sleep(500);
    console.log("快速出售重复物品");
    await waitForCondition("button", "快速出售");
    await sleep(500);
    await waitForCondition("button", "确定");
  }
  await sleep(500);
  console.log("进入商店页面");
  await waitForCondition("button", "商店");
  await sleep(500);
  console.log("组合包");
  await waitForCondition("h1", "组合包");
  await sleep(3000);
  var _0x542c11 = await unpacking("10 名 84+ 稀有黄金球员组合包", "打开");
  console.log("开包结果：", _0x542c11);
  if (_0x542c11) {
    await checkRatings();
    await sleep(500);
    console.log("进入商店页面");
    await waitForCondition("button", "商店");
    await sleep(500);
    await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
    await sleep(500);
    console.log("进入组合包");
    await waitForCondition("h1", "组合包");
    await sleep(500);
    var _0x4a18b5 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 5);
    console.log("是否存在未分配物品：", _0x4a18b5);
    if (_0x4a18b5) {
      var _0x8cac97 = await checkRatings();
      console.log(_0x8cac97);
      if (_0x125d34 === "2") {
        var _0x599a2a = 0,
          _0x42fa75 = 0,
          _0x16f0de = 0;
        if (_0x8cac97.length !== 0) {
          for (let _0x4ff345 = 0; _0x4ff345 < parseInt(_0x8cac97.length / 2); _0x4ff345++) {
            console.log(parseInt(_0x8cac97[_0x4ff345].textContent, 10));
            let _0x4a955f = parseInt(_0x8cac97[_0x4ff345].textContent, 10);
            if (!(_0x4a955f < 89)) {
              _0x599a2a = _0x599a2a + 1;
            }
            !(_0x4a955f < 88) && (_0x42fa75 = _0x42fa75 + 1);
            if (!(_0x4a955f < 87)) {
              _0x16f0de = _0x16f0de + 1;
            }
          }
          if (_0x599a2a > 2 || _0x42fa75 > 3 || _0x16f0de > 4) {
            console.log(_0x16f0de, _0x42fa75, _0x599a2a);
            var _0x2ceddb = await dealWith93Task();
            if (_0x2ceddb === false) {
              localStorage.setItem("shouldRunAfterRefresh", "true");
              location.reload();
            } else {
              if (_0x2ceddb === "completed") {
                var _0x2c4b05 = await cardManagementUndistributed();
                if (_0x2c4b05 === "completed") {
                  console.log("库存处理完成");
                  return "completed";
                }
              }
            }
          }
        }
      } else {
        if (_0x125d34 === "1") {
          var _0x599a2a = 0,
            _0x42fa75 = 0,
            _0x16f0de = 0;
          if (_0x8cac97.length !== 0) {
            for (let _0x5c6568 = 0; _0x5c6568 < parseInt(_0x8cac97.length / 2); _0x5c6568++) {
              console.log(parseInt(_0x8cac97[_0x5c6568].textContent, 10));
              let _0x146519 = parseInt(_0x8cac97[_0x5c6568].textContent, 10);
              if (!(_0x146519 < 89)) {
                _0x599a2a = _0x599a2a + 1;
              }
              if (!(_0x146519 < 88)) {
                _0x42fa75 = _0x42fa75 + 1;
              }
              !(_0x146519 < 87) && (_0x16f0de = _0x16f0de + 1);
            }
            if (_0x599a2a > 2 || _0x42fa75 > 3 || _0x16f0de > 4) {
              console.log(_0x16f0de, _0x42fa75, _0x599a2a);
              var _0x2ceddb = await dealWith92Task();
              if (_0x2ceddb === false) {
                localStorage.setItem("shouldRunAfterRefresh", "true");
                location.reload();
              } else {
                if (_0x2ceddb === "completed") {
                  var _0x2c4b05 = await cardManagementUndistributed();
                  if (_0x2c4b05 === "completed") {
                    console.log("库存处理完成");
                    return "completed";
                  }
                }
              }
            }
          }
        }
      }
    }
    console.log("开包成功");
    return "completed";
  }
  var _0x542c11 = await unpacking("51 名球员组合包", "打开");
  console.log("开包结果：", _0x542c11);
  if (_0x542c11) {
    await checkRatings();
    await sleep(500);
    console.log("进入商店页面");
    await waitForCondition("button", "商店");
    await sleep(500);
    await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
    await sleep(500);
    console.log("进入组合包");
    await waitForCondition("h1", "组合包");
    await sleep(500);
    var _0x4a18b5 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 5);
    console.log("是否存在未分配物品：", _0x4a18b5);
    if (_0x4a18b5) {
      await sleep(500);
      var _0x47ce00 = await repetitiveProcess();
      if (_0x47ce00.length !== 0) {
        for (var _0xdf76b = 0; _0xdf76b < _0x47ce00.length; _0xdf76b++) {
          console.log("总评 " + _0x47ce00[_0xdf76b].textContent || _0x47ce00[_0xdf76b].innerText + " 重复物品交换");
          await highToLow("总评 " + _0x47ce00[_0xdf76b].textContent || _0x47ce00[_0xdf76b].innerText + " 重复物品交换", 95);
        }
        await sleep(500);
        console.log("进入商店页面");
        await waitForCondition("button", "商店");
        await sleep(500);
        await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
        await sleep(500);
        console.log("进入组合包");
        await waitForCondition("h1", "组合包");
        await sleep(500);
        var _0x4a18b5 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 3);
        console.log("是否存在未分配物品：", _0x4a18b5);
      }
      if (_0x4a18b5) {
        await sleep(500);
        console.log("快速出售重复物品");
        await waitForCondition("button", "快速出售");
        await sleep(500);
        await waitForCondition("button", "确定");
      }
    }
    await sleep(500);
    return "completed";
  }
  _0x542c11 = await unpacking("27 名球员组合包", "打开");
  console.log("开包结果：", _0x542c11);
  if (_0x542c11) {
    await checkRatings();
    await sleep(500);
    console.log("进入阵容");
    await waitForCondition("button", "阵容");
    await sleep(500);
    console.log("进入商店页面");
    await waitForCondition("button", "商店");
    await sleep(500);
    await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
    await sleep(500);
    console.log("进入组合包");
    await waitForCondition("h1", "组合包");
    await sleep(500);
    var _0x4a18b5 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 3);
    console.log("是否存在未分配物品：", _0x4a18b5);
    if (_0x4a18b5) {
      await sleep(500);
      var _0x47ce00 = await repetitiveProcess();
      if (_0x47ce00.length !== 0) {
        for (var _0xdf76b = 0; _0xdf76b < _0x47ce00.length; _0xdf76b++) {
          console.log("总评 " + _0x47ce00[_0xdf76b].textContent || _0x47ce00[_0xdf76b].innerText + " 重复物品交换");
          await highToLow("总评 " + _0x47ce00[_0xdf76b].textContent || _0x47ce00[_0xdf76b].innerText + " 重复物品交换", 95);
        }
        await sleep(500);
        console.log("进入商店页面");
        await waitForCondition("button", "商店");
        await sleep(500);
        await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
        await sleep(500);
        console.log("进入组合包");
        await waitForCondition("h1", "组合包");
        await sleep(500);
        var _0x4a18b5 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 3);
        console.log("是否存在未分配物品：", _0x4a18b5);
      }
      if (_0x4a18b5) {
        await sleep(500);
        console.log("快速出售重复物品");
        await waitForCondition("button", "快速出售");
        await sleep(500);
        await waitForCondition("button", "确定");
      }
    }
    await sleep(500);
    return "completed";
  }
  _0x542c11 = await unpacking("19 名球员组合包", "打开");
  console.log("开包结果：", _0x542c11);
  if (_0x542c11) {
    await checkRatings();
    await sleep(500);
    console.log("进入阵容");
    await waitForCondition("button", "阵容");
    await sleep(500);
    console.log("进入商店页面");
    await waitForCondition("button", "商店");
    await sleep(500);
    await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
    await sleep(500);
    console.log("进入组合包");
    await waitForCondition("h1", "组合包");
    await sleep(500);
    var _0x4a18b5 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 3);
    console.log("是否存在未分配物品：", _0x4a18b5);
    if (_0x4a18b5) {
      await sleep(500);
      var _0x47ce00 = await repetitiveProcess();
      if (_0x47ce00.length !== 0) {
        for (var _0xdf76b = 0; _0xdf76b < _0x47ce00.length; _0xdf76b++) {
          console.log("总评 " + _0x47ce00[_0xdf76b].textContent || _0x47ce00[_0xdf76b].innerText + " 重复物品交换");
          await highToLow("总评 " + _0x47ce00[_0xdf76b].textContent || _0x47ce00[_0xdf76b].innerText + " 重复物品交换", 95);
        }
        await sleep(500);
        console.log("进入商店页面");
        await waitForCondition("button", "商店");
        await sleep(500);
        await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
        await sleep(500);
        console.log("进入组合包");
        await waitForCondition("h1", "组合包");
        await sleep(500);
        var _0x4a18b5 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 3);
        console.log("是否存在未分配物品：", _0x4a18b5);
      }
      if (_0x4a18b5) {
        await sleep(500);
        console.log("快速出售重复物品");
        await waitForCondition("button", "快速出售");
        await sleep(500);
        await waitForCondition("button", "确定");
      }
    }
    await sleep(500);
    return "completed";
  }
  _0x542c11 = await unpacking("11 名球员组合包", "打开");
  console.log("开包结果：", _0x542c11);
  if (_0x542c11) {
    await checkRatings();
    await sleep(500);
    console.log("进入阵容");
    await waitForCondition("button", "阵容");
    await sleep(500);
    console.log("进入商店页面");
    await waitForCondition("button", "商店");
    await sleep(500);
    await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
    await sleep(500);
    console.log("进入组合包");
    await waitForCondition("h1", "组合包");
    await sleep(500);
    var _0x4a18b5 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 3);
    console.log("是否存在未分配物品：", _0x4a18b5);
    if (_0x4a18b5) {
      await sleep(500);
      var _0x47ce00 = await repetitiveProcess();
      if (_0x47ce00.length !== 0) {
        for (var _0xdf76b = 0; _0xdf76b < _0x47ce00.length; _0xdf76b++) {
          console.log("总评 " + _0x47ce00[_0xdf76b].textContent || _0x47ce00[_0xdf76b].innerText + " 重复物品交换");
          await highToLow("总评 " + _0x47ce00[_0xdf76b].textContent || _0x47ce00[_0xdf76b].innerText + " 重复物品交换", 95);
        }
        await sleep(500);
        console.log("进入商店页面");
        await waitForCondition("button", "商店");
        await sleep(500);
        await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
        await sleep(500);
        console.log("进入组合包");
        await waitForCondition("h1", "组合包");
        await sleep(500);
        var _0x4a18b5 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 3);
        console.log("是否存在未分配物品：", _0x4a18b5);
      }
      if (_0x4a18b5) {
        await sleep(500);
        console.log("快速出售重复物品");
        await waitForCondition("button", "快速出售");
        await sleep(500);
        await waitForCondition("button", "确定");
      }
    }
    await sleep(500);
    return "completed";
  }
  _0x542c11 = await unpacking("7 名球员组合包", "打开");
  console.log("开包结果：", _0x542c11);
  if (_0x542c11) {
    await checkRatings();
    await sleep(500);
    console.log("进入阵容");
    await waitForCondition("button", "阵容");
    await sleep(500);
    console.log("进入商店页面");
    await waitForCondition("button", "商店");
    await sleep(500);
    await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
    await sleep(500);
    console.log("进入组合包");
    await waitForCondition("h1", "组合包");
    await sleep(500);
    var _0x4a18b5 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 3);
    console.log("是否存在未分配物品：", _0x4a18b5);
    if (_0x4a18b5) {
      await sleep(500);
      var _0x47ce00 = await repetitiveProcess();
      if (_0x47ce00.length !== 0) {
        for (var _0xdf76b = 0; _0xdf76b < _0x47ce00.length; _0xdf76b++) {
          console.log("总评 " + _0x47ce00[_0xdf76b].textContent || _0x47ce00[_0xdf76b].innerText + " 重复物品交换");
          await highToLow("总评 " + _0x47ce00[_0xdf76b].textContent || _0x47ce00[_0xdf76b].innerText + " 重复物品交换", 95);
        }
        await sleep(500);
        console.log("进入商店页面");
        await waitForCondition("button", "商店");
        await sleep(500);
        await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
        await sleep(500);
        console.log("进入组合包");
        await waitForCondition("h1", "组合包");
        await sleep(500);
        var _0x4a18b5 = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 3);
        console.log("是否存在未分配物品：", _0x4a18b5);
      }
      if (_0x4a18b5) {
        await sleep(500);
        console.log("快速出售重复物品");
        await waitForCondition("button", "快速出售");
        await sleep(500);
        await waitForCondition("button", "确定");
      }
    }
    await sleep(500);
    return "completed";
  }
  return "disabled";
}
async function cardManagementFUTTIESPackage() {
  await sleep(500);
  console.log("进入商店页面");
  await waitForCondition("button", "商店");
  await sleep(500);
  console.log("组合包");
  await waitForCondition("h1", "组合包");
  await sleep(500);
  var _0x409303 = await unpacking("5 名 77+ 稀有黄金球员组合包", "打开");
  console.log("开包结果：", _0x409303);
  if (_0x409303) {
    await sleep(500);
    console.log("进入商店页面");
    await waitForCondition("button", "商店");
    await sleep(500);
    await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
    await sleep(500);
    console.log("进入组合包");
    await waitForCondition("h1", "组合包");
    await sleep(500);
    var _0x4f1d8c = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 5);
    console.log("是否存在未分配物品：", _0x4f1d8c);
    if (_0x4f1d8c) {
      await sleep(500);
      var _0x36768c = await repetitiveProcess();
      if (_0x36768c.length !== 0) {
        for (var _0x268460 = 0; _0x268460 < _0x36768c.length; _0x268460++) {
          console.log("总评 " + _0x36768c[_0x268460].textContent || _0x36768c[_0x268460].innerText + " 重复物品交换");
          await highToLow("总评 " + _0x36768c[_0x268460].textContent || _0x36768c[_0x268460].innerText + " 重复物品交换", 95);
        }
        await sleep(500);
        console.log("进入商店页面");
        await waitForCondition("button", "商店");
        await sleep(500);
        await waitForElementRemove("不存在转入俱乐部的卡片按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-unassigned-tile-view.tile > div.data-container > button");
        await sleep(500);
        console.log("进入组合包");
        await waitForCondition("h1", "组合包");
        await sleep(500);
        var _0x4f1d8c = await waitForElementTagText("进入未分配页面", "h1", "未分配的物品", interval = 500, maxRetries = 3);
        console.log("是否存在未分配物品：", _0x4f1d8c);
      }
      if (_0x4f1d8c) {
        await sleep(500);
        console.log("快速出售重复物品");
        await waitForCondition("button", "快速出售");
        await sleep(500);
        await waitForCondition("button", "确定");
      }
    }
    await sleep(500);
    return "completed";
  }
  return "disabled";
}
async function tryUntilConditionMet(_0x42318e, _0x588b16, _0x50f98c, _0x4a9068) {
  let _0x1d8caf = 0;
  while (_0x1d8caf < _0x50f98c) {
    try {
      const _0x5017b7 = document.querySelector(_0x42318e);
      if (_0x5017b7 && _0x5017b7.textContent.trim().includes(_0x588b16)) {
        return "ban";
      }
    } catch (_0x1bb697) {
      console.error("在查询元素时发生错误:", _0x1bb697);
    }
    _0x1d8caf++;
    await new Promise(_0x3aac33 => setTimeout(_0x3aac33, _0x4a9068));
  }
  console.log("尝试了 " + _0x50f98c + " 次，未找到元素，跳过检查。");
  return true;
}
async function highToLow(_0x11c6b8, _0x58e7c8) {
  await sleep(500);
  console.log("进入sbc页面");
  await waitForSBC("button", "SBC");
  await sleep(500);
  console.log("进入任务标签");
  await waitForCondition("h1", _0x11c6b8);
  await sleep(500);
  console.log("自动填充卡片");
  success = await waitForCondition("button", "一键填充(优先重复)");
  if (!success) {
    localStorage.setItem("shouldRunAfterRefresh", "true");
    location.reload();
  }
  await sleep(2500);
  var _0x342b89 = await waitForRating();
  if (_0x342b89 && parseInt(_0x342b89.textContent.trim(), 10) <= _0x58e7c8) {
    console.log("判断是否可以提交阵容");
    if (await waitCommitEnable(commitButtonSelector)) {
      await sleep(500);
      console.log("满足阵容要求，提交任务");
      await waitForCondition("button", "提交", shieldSelector02);
      const _0x34de28 = await tryUntilConditionMet("#NotificationLayer > div", "提交挑战失败", 5, 500);
      if (_0x34de28 === "ban") {
        return "ban";
      }
      await waitForElementRemoveByText("button", "提交并且不再向我提醒");
      console.log("领取奖励");
      await waitForCondition("button", "领取奖励");
      await sleep(500);
      await waitForWithTargetSelectorCondition("button", "领取奖励", claimReward82_02);
      console.log("物品已发送到未分配");
      return "completed";
    } else {
      console.log("不满足阵容要求");
      return "disabled";
    }
  } else {
    _0x342b89 && console.log("填充卡片分数:");
    console.log("不满足阵容或配置要求");
    return "disabled";
  }
}
async function highToLowStrategy() {
  var _0x5d808b = await highToLow("总评 89 重复物品交换", 93);
  if (_0x5d808b !== "disabled") {
    return _0x5d808b;
  }
  _0x5d808b = await highToLow("总评 88 重复物品交换", 93);
  if (_0x5d808b !== "disabled") {
    return _0x5d808b;
  }
  _0x5d808b = await highToLow("总评 87 重复物品交换", 93);
  if (_0x5d808b !== "disabled") {
    return _0x5d808b;
  }
  _0x5d808b = await highToLow("总评 86 重复物品交换", 93);
  if (_0x5d808b !== "disabled") {
    return _0x5d808b;
  }
  _0x5d808b = await highToLow("总评 85 重复物品交换", 93);
  if (_0x5d808b !== "disabled") {
    return _0x5d808b;
  }
  return "disabled";
}
async function calculateHashes(_0x37d6f4) {
  let _0x2d3bb2 = "",
    _0x250c42 = "",
    _0x418a88 = new Date("2024-09-21");
  return new Promise(async _0x58a6f4 => {
    const _0x17cb47 = chrome.runtime.getManifest();
    if (Array.isArray(_0x17cb47.license) && _0x17cb47.license.length > 0) {
      let _0x14233f = false;
      for (let _0x46cfdc of _0x17cb47.license) {
        console.log(_0x37d6f4, _0x46cfdc.middletext, _0x37d6f4.includes(_0x46cfdc.middletext));
        if (_0x37d6f4.includes(_0x46cfdc.middletext)) {
          _0x2d3bb2 = _0x46cfdc.middletext;
          console.log("找到键:", _0x46cfdc.middletext, "对应的值:", _0x46cfdc.suffix);
          _0x250c42 = _0x46cfdc.suffix;
          _0x14233f = true;
          break;
        }
      }
      if (_0x14233f) {
        const _0x2c19e9 = await iterateDates(new Date(), _0x418a88, _0x2d3bb2, _0x250c42);
        _0x58a6f4(_0x2c19e9);
      } else {
        chrome.storage.sync.set({
          expiration_date: "l030fk3f43"
        });
        _0x58a6f4(false);
      }
    } else {
      chrome.storage.sync.set({
        expiration_date: "l030fk3f43"
      });
      _0x58a6f4(false);
    }
  });
}
async function iterateDates(_0x229556, _0x26af82, _0x411335, _0x46d36f) {
  let _0x5737ed = new Date(_0x229556.getTime());
  while (_0x5737ed <= _0x26af82) {
    let _0x4c8e14 = _0x5737ed.toISOString().split("T")[0],
      _0x3047cd = new TextEncoder(),
      _0x54b208 = await crypto.subtle.digest("SHA-256", _0x3047cd.encode(_0x4c8e14 + "pjsqj" + _0x411335)).then(_0x4c17db => Array.from(new Uint8Array(_0x4c17db)).map(_0x5c2e6e => _0x5c2e6e.toString(16).padStart(2, "0")).join("")).then(_0x1e795a => _0x1e795a.slice(-16));
    if (_0x54b208 === _0x46d36f) {
      chrome.storage.sync.set({
        expiration_date: _0x4c8e14
      });
      return true;
    }
    _0x5737ed.setDate(_0x5737ed.getDate() + 1);
  }
  return false;
}
async function runRollingCardCycle(_0x1cb098) {
  chrome.storage.sync.set({
    executeStatus: "任务进行中"
  });
  while (true) {
    await sleep(2500);
    console.log("进入主页");
    await waitForCondition("button", "主页");
    const _0x3bc31e = await waitForTextLoad(user_index_id_selector),
      _0x52c26d = await waitForTextLoad(fsu_status);
    if (_0x3bc31e && _0x52c26d) {
      console.log("ffwe2f32");
      try {
        const _0x40ec5c = await calculateHashes(document.querySelector(user_index_id_selector).textContent.trim());
        if (_0x40ec5c) {
          console.log("r2f2v24");
        } else {
          chrome.storage.sync.set({
            expiration_date: "9j9a9fwen"
          });
          location.reload();
        }
        await sleep(2500);
      } catch (_0x32100f) {
        console.error("egegewg314:", _0x32100f);
        chrome.storage.sync.set({
          expiration_date: ""
        });
        chrome.storage.sync.set({
          executeStatus: ""
        });
        location.reload();
      }
    } else {
      chrome.storage.sync.set({
        expiration_date: "使用环境初始化失败，请检查是否登录或fsu状态"
      });
      chrome.storage.sync.set({
        executeStatus: ""
      });
      location.reload();
    }
    await waitForElementRemoveByText("button", "继续");
    if (await waitForTextLoad("body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-player-picks-tile-view.tile.col-1-1", shieldSelector01, 1000, 3)) {
      await waitForTargetSelector(document.querySelector("body > main > section > section > div.ut-navigation-container-view--content > div > div > div.ut-player-picks-tile-view.tile.col-1-1"));
      await sleep(500);
      await waitForTargetSelector(document.querySelector("body > main > div > div > div.content-container > section.large-picks-container > div.fsu-optionbest > div.player-pick-option"));
      await sleep(500);
      await waitForWithTargetSelectorCondition("button", "确认", "body > main > div > div > div.content-container");
      await sleep(500);
      await waitForWithTargetSelectorCondition("button", "领取奖励", claimReward82_02);
    }
    while (true) {
      await sleep(500);
      console.log("进入sbc页面");
      await waitForSBC("button", "SBC", shieldSelector02);
      await sleep(2500);
      var _0x1f4d84 = await dealWith84Task();
      console.log("任务执行结果：", _0x1f4d84);
      if (_0x1f4d84 === false) {
        localStorage.setItem("shouldRunAfterRefresh", "true");
        location.reload();
      } else {
        if (_0x1f4d84 === "disabled") {
          console.log("84+执行失败");
          break;
        } else {
          if (_0x1f4d84 === "ban") {
            break;
          } else {
            if (_0x1f4d84 === "totx") {
              var _0xeca0ce = await dealWithTotxTask();
              if (_0xeca0ce === "completed") {
                var _0x4ee3e0 = await cardManagementUndistributed();
                _0x4ee3e0 === "completed" && console.log("库存处理完成");
              } else {
                if (_0xeca0ce === "ban") {
                  chrome.storage.sync.set({
                    executeStatus: "次数受限中，停止"
                  });
                  location.reload();
                  break;
                } else {
                  if (_0xeca0ce === "disabled") {
                    break;
                  } else {
                    _0xeca0ce === false && (localStorage.setItem("shouldRunAfterRefresh", "true"), location.reload());
                  }
                }
              }
            } else {
              if (_0x1f4d84 === "completed") {
                var _0x21aa9e = await cardManagementPackage(_0x1cb098);
              } else {
                if (_0x1f4d84 === "continue") {
                  continue;
                }
              }
            }
          }
        }
      }
      await sleep(2500);
    }
    var _0x21aa9e = await cardManagementPackage();
    if (_0x21aa9e === "completed") {
      console.log("库存处理完成");
      continue;
    }
    var _0x54e195 = await highToLowStrategy();
    if (_0x54e195 === "completed") {
      console.log("卡片分解完成");
    } else {
      _0x54e195 === "ban" && (chrome.storage.sync.set({
        executeStatus: "次数受限中，停止"
      }), location.reload());
    }
    var _0x21aa9e = await cardManagementPackage();
    _0x21aa9e === "completed" && console.log("库存处理完成");
    if (_0x54e195 === "disabled" && _0x1f4d84 === "disabled") {
      console.log("不存在任何滚卡条件，终止任务");
      break;
    }
  }
}
async function dealWithTask(_0x57df1d) {
  try {
    await sleep(500);
    var _0x14caaf = await waitForCondition("h1", _0x57df1d);
    if (!_0x14caaf) {
      return false;
    }
    await sleep(500);
    console.log("自动填充阵容");
    _0x14caaf = await waitForCondition("button", "一键填充(优先重复)");
    if (!_0x14caaf) {
      return false;
    }
    console.log("判断是否可以提交阵容");
    if (await waitCommitEnable(commitButtonSelector)) {
      await sleep(500);
      console.log("满足阵容要求，提交任务");
      await waitForCondition("button", "提交", shieldSelector02);
      _0x14caaf = await tryUntilConditionMet("#NotificationLayer > div", "提交挑战失败", 5, 500);
      if (_0x14caaf === "ban") {
        return "ban";
      }
      await waitForElementRemoveByText("button", "提交并且不再向我提醒");
      await sleep(500);
      console.log("领取奖励");
      await waitForCondition("button", "领取奖励");
      await sleep(500);
      await waitForWithTargetSelectorCondition("button", "领取奖励", claimReward82_02);
      await sleep(500);
      console.log("物品已发送到未分配");
      return _0x57df1d;
    } else {
      console.log("不满足阵容要求");
      return "disabled";
    }
  } catch (_0x1bca91) {
    console.error("执行deal_with_82_task出错：", _0x1bca91);
    return "error";
  }
}
async function isFieldPresent(_0x91b9b9) {
  const _0x564346 = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let _0x26e265;
  var _0xfeefa1 = false,
    _0xe60930 = false;
  while (_0x26e265 = _0x564346.nextNode()) {
    _0x26e265.nodeValue.trim() === "1/2 已完成" && (_0xfeefa1 = true);
    _0x26e265.nodeValue.trim() === _0x91b9b9 && (_0xe60930 = true);
  }
  if (_0xfeefa1 && _0xe60930) {
    return true;
  }
  return false;
}
async function dealWith92Task() {
  try {
    console.log("进入sbc页面");
    await waitForSBC("button", "SBC", shieldSelector02);
    await sleep(3500);
    var _0x4b02c8 = await waitForCondition("h1", "92+ PTG/MYM/TOTT/FUTTIES 球员挑选");
    if (!_0x4b02c8) {
      return false;
    }
    await sleep(2500);
    var _0x3a3466 = await isFieldPresent("交换一支评分为 89 的阵容。");
    if (!_0x3a3466) {
      _0x4b02c8 = await waitForCondition("button", "挑战");
      if (!_0x4b02c8) {
        return false;
      }
      await sleep(500);
      _0x4b02c8 = await waitForCondition2("button", "清除阵容", "body > div.ut-click-shield.showing", interval = 500, maxRetries = 3);
      _0x4b02c8 && (await sleep(1500), _0x4b02c8 = await waitForCondition("button", "确定"));
      await sleep(1500);
      var _0x2f8338 = await waitForCondition2("button", "重复球员填充阵容", "body > div.ut-click-shield.showing", interval = 500, maxRetries = 3);
      await sleep(500);
      console.log("自动填充阵容");
      _0x4b02c8 = await waitForCondition("button", "阵容补全(优先重复)");
      if (!_0x4b02c8) {
        return false;
      }
      await sleep(3000);
      var _0x3665ff = document.querySelector("body > div.view-modal-container.form-modal > section > div > p > input").value.trim();
      if (_0x3665ff === "" || _0x3665ff.includes("95") || _0x3665ff.includes("96") || _0x3665ff.includes("97") || _0x3665ff.includes("98") || _0x3665ff.includes("99") || _0x3665ff.includes("100")) {
        await sleep(500);
        console.log("不满足阵容要求");
        await waitForCondition("button", "取消");
        return "disabled";
      } else {
        await sleep(500);
        _0x4b02c8 = await waitForCondition("button", "确定");
        if (!_0x4b02c8) {
          return false;
        }
        console.log("判断是否可以提交阵容");
        if (await waitCommitEnable(commitButtonSelector)) {
          await sleep(500);
          console.log("满足阵容要求，提交任务");
          await waitForCondition("button", "提交", shieldSelector02);
          _0x4b02c8 = await tryUntilConditionMet("#NotificationLayer > div", "提交挑战失败", 5, 500);
          if (_0x4b02c8 === "ban") {
            return "ban";
          }
          await waitForElementRemoveByText("button", "提交并且不再向我提醒");
          await sleep(500);
          console.log("领取奖励");
          await waitForCondition("button", "领取奖励");
        } else {
          console.log("不满足阵容要求");
          return "disabled";
        }
      }
    }
    await sleep(2500);
    _0x4b02c8 = await waitForCondition("button", "挑战");
    if (!_0x4b02c8) {
      return false;
    }
    await sleep(500);
    _0x4b02c8 = await waitForCondition2("button", "清除阵容", "body > div.ut-click-shield.showing", interval = 500, maxRetries = 3);
    _0x4b02c8 && (await sleep(1500), _0x4b02c8 = await waitForCondition("button", "确定"));
    await sleep(1500);
    var _0x2f8338 = await waitForCondition2("button", "重复球员填充阵容", "body > div.ut-click-shield.showing", interval = 500, maxRetries = 3);
    await sleep(500);
    console.log("进入sbc页面");
    await waitForSBC("button", "SBC", shieldSelector02);
    var _0x4b02c8 = await waitForCondition("h1", "92+ PTG/MYM/TOTT/FUTTIES 球员挑选");
    if (!_0x4b02c8) {
      return false;
    }
    await sleep(500);
    _0x4b02c8 = await waitForCondition("button", "挑战");
    if (!_0x4b02c8) {
      return false;
    }
    await sleep(5000);
    var _0x5de89d = document.querySelector("body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div > section > div > div.ut-sbc-challenge-details-view > div.ut-sbc-challenge-requirements-view > ul > li.complete > button");
    if (!_0x5de89d) {
      console.log("填充totw");
      var _0x4b02c8 = await waitForElementRemove2("没有totx选择按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div > section > div > div.ut-sbc-challenge-details-view > div.ut-sbc-challenge-requirements-view > ul > li:nth-child(1) > button", interval = 500, maxRetries = 3);
      if (!_0x4b02c8) {
        return "totx";
      }
      await sleep(2500);
      var _0x599665 = await waitForTextRating();
      console.log("totx:", _0x599665);
      console.log(parseInt(_0x599665.textContent.trim(), 10));
      if (_0x599665 && parseInt(_0x599665.textContent.trim(), 10) >= 97) {
        return "totx";
      }
      await sleep(500);
      var _0x4b02c8 = await waitForElementRemove2("没有totx卡", shieldSelector01, targetSelector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-container-view--content > div > div.paginated-item-list.ut-pinned-list > ul > li:nth-child(1) > button", interval = 500, maxRetries = 3);
      if (!_0x4b02c8) {
        return "totx";
      }
      await sleep(500);
      await waitForElementRemove2("没有返回键", shieldSelector01, targetSelector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-bar-view.navbar-style-secondary > button", interval = 500, maxRetries = 3);
      await sleep(3000);
    }
    await sleep(500);
    console.log("自动填充阵容");
    _0x4b02c8 = await waitForCondition("button", "阵容补全(优先重复)");
    if (!_0x4b02c8) {
      return false;
    }
    await sleep(3000);
    var _0x3665ff = document.querySelector("body > div.view-modal-container.form-modal > section > div > p > input").value.trim();
    if (_0x3665ff === "" || _0x3665ff.includes("95") || _0x3665ff.includes("96") || _0x3665ff.includes("97") || _0x3665ff.includes("98") || _0x3665ff.includes("99") || _0x3665ff.includes("100")) {
      console.log("不满足阵容要求");
      await sleep(500);
      await waitForCondition("button", "取消");
      return "disabled";
    } else {
      await sleep(500);
      _0x4b02c8 = await waitForCondition("button", "确定");
      if (!_0x4b02c8) {
        return false;
      }
      console.log("判断是否可以提交阵容");
      if (await waitCommitEnable(commitButtonSelector)) {
        await sleep(500);
        console.log("满足阵容要求，提交任务");
        await waitForCondition("button", "提交", shieldSelector02);
        _0x4b02c8 = await tryUntilConditionMet("#NotificationLayer > div", "提交挑战失败", 5, 500);
        if (_0x4b02c8 === "ban") {
          return "ban";
        }
        await waitForElementRemoveByText("button", "提交并且不再向我提醒");
        await sleep(500);
        console.log("领取奖励");
        await waitForCondition("button", "领取奖励");
        await sleep(500);
        await waitForWithTargetSelectorCondition("button", "领取奖励", claimReward82_02);
        await sleep(500);
        console.log("物品已发送到未分配");
        return "completed";
      } else {
        console.log("不满足阵容要求");
        return "disabled";
      }
    }
  } catch (_0x51ecb1) {
    console.error("执行deal_with_92_task出错：", _0x51ecb1);
    return "error";
  }
}
async function dealWithTotxTask() {
  try {
    console.log("进入sbc页面");
    await waitForSBC("button", "SBC", shieldSelector02);
    await sleep(2500);
    var _0x2236e4 = await waitForCondition("h1", "83+ TOTW 球员挑选");
    if (!_0x2236e4) {
      return false;
    }
    await sleep(2500);
    var _0x51feb9 = await isFieldPresent("交换一支评分为 83 的阵容");
    if (!_0x51feb9) {
      await sleep(2500);
      _0x2236e4 = await waitForCondition("button", "挑战");
      if (!_0x2236e4) {
        return false;
      }
      await sleep(1500);
      _0x2236e4 = await waitForCondition2("button", "清除阵容", "body > div.ut-click-shield.showing", interval = 500, maxRetries = 3);
      if (_0x2236e4) {
        await sleep(1500);
        _0x2236e4 = await waitForCondition("button", "确定");
        console.log("进入sbc页面");
        await sleep(500);
        await waitForSBC("button", "SBC", shieldSelector02);
        await sleep(2500);
        var _0x2236e4 = await waitForCondition("h1", "83+ TOTW 球员挑选");
        if (!_0x2236e4) {
          return false;
        }
        await sleep(2500);
        _0x2236e4 = await waitForCondition("button", "挑战");
        if (!_0x2236e4) {
          return false;
        }
      }
      console.log("填充84");
      await sleep(500);
      await waitForElementRemove2("没有84选择按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div > section > div > div.ut-sbc-challenge-details-view > div.ut-sbc-challenge-requirements-view > ul > li:nth-child(1) > button", interval = 3000, maxRetries = 3);
      await sleep(500);
      await waitForElementRemove2("没有84卡", shieldSelector01, targetSelector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-container-view--content > div > div.paginated-item-list.ut-pinned-list > ul > li:nth-child(1) > button", interval = 3000, maxRetries = 3);
      await sleep(500);
      await waitForElementRemove2("没有返回键", shieldSelector01, targetSelector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-bar-view.navbar-style-secondary > button", interval = 3000, maxRetries = 3);
      await sleep(500);
      console.log("填充84");
      await waitForElementRemove2("没有84选择按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div > section > div > div.ut-sbc-challenge-details-view > div.ut-sbc-challenge-requirements-view > ul > li:nth-child(1) > button", interval = 3000, maxRetries = 3);
      await sleep(500);
      await waitForElementRemove2("没有84卡", shieldSelector01, targetSelector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-container-view--content > div > div.paginated-item-list.ut-pinned-list > ul > li:nth-child(1) > button", interval = 3000, maxRetries = 3);
      await sleep(500);
      await waitForElementRemove2("没有返回键", shieldSelector01, targetSelector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-bar-view.navbar-style-secondary > button", interval = 3000, maxRetries = 3);
      await sleep(3000);
      const _0x5cc0c8 = document.querySelectorAll("div.rating");
      for (let _0x28cd7a = 0; _0x28cd7a < _0x5cc0c8.length; _0x28cd7a++) {
        let _0x503af1 = parseInt(_0x5cc0c8[_0x28cd7a].textContent, 10);
        if (_0x503af1 >= 96) {
          console.log("不满足阵容要求");
          return "disabled";
        }
      }
      await sleep(500);
      console.log("自动填充阵容");
      _0x2236e4 = await waitForCondition("button", "阵容补全(优先重复)");
      if (!_0x2236e4) {
        return false;
      }
      var _0x27c73a = document.querySelector("body > div.view-modal-container.form-modal > section > div > p > input").value.trim();
      if (_0x27c73a === "" || _0x27c73a.includes("88") || _0x27c73a.includes("89") || _0x27c73a.includes("90") || _0x27c73a.includes("91") || _0x27c73a.includes("92") || _0x27c73a.includes("93") || _0x27c73a.includes("94") || _0x27c73a.includes("95") || _0x27c73a.includes("96") || _0x27c73a.includes("97") || _0x27c73a.includes("98") || _0x27c73a.includes("99") || _0x27c73a.includes("100")) {
        await sleep(500);
        console.log("不满足阵容要求");
        await waitForCondition("button", "取消");
        return "disabled";
      } else {
        await sleep(500);
        _0x2236e4 = await waitForCondition("button", "确定");
        if (!_0x2236e4) {
          return false;
        }
        console.log("判断是否可以提交阵容");
        if (await waitCommitEnable(commitButtonSelector)) {
          await sleep(500);
          console.log("满足阵容要求，提交任务");
          await waitForCondition("button", "提交", shieldSelector02);
          _0x2236e4 = await tryUntilConditionMet("#NotificationLayer > div", "提交挑战失败", 5, 500);
          if (_0x2236e4 === "ban") {
            return "ban";
          }
          await waitForElementRemoveByText("button", "提交并且不再向我提醒");
          await sleep(500);
          console.log("领取奖励");
          await waitForCondition("button", "领取奖励");
        } else {
          console.log("不满足阵容要求");
          return "disabled";
        }
      }
    }
    await sleep(2500);
    _0x2236e4 = await waitForCondition("button", "挑战");
    if (!_0x2236e4) {
      return false;
    }
    await sleep(1500);
    _0x2236e4 = await waitForCondition2("button", "清除阵容", "body > div.ut-click-shield.showing", interval = 500, maxRetries = 3);
    if (_0x2236e4) {
      await sleep(1500);
      _0x2236e4 = await waitForCondition("button", "确定");
      console.log("进入sbc页面");
      await sleep(500);
      await waitForSBC("button", "SBC", shieldSelector02);
      await sleep(2500);
      var _0x2236e4 = await waitForCondition("h1", "83+ TOTW 球员挑选");
      if (!_0x2236e4) {
        return false;
      }
      await sleep(1500);
      _0x2236e4 = await waitForCondition("button", "挑战");
      if (!_0x2236e4) {
        return false;
      }
    }
    await sleep(500);
    console.log("填充85");
    await waitForElementRemove2("没有85选择按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div > section > div > div.ut-sbc-challenge-details-view > div.ut-sbc-challenge-requirements-view > ul > li:nth-child(1) > button", interval = 3000, maxRetries = 3);
    await sleep(500);
    await waitForElementRemove2("没有85卡", shieldSelector01, targetSelector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-container-view--content > div > div.paginated-item-list.ut-pinned-list > ul > li:nth-child(1) > button", interval = 3000, maxRetries = 3);
    await sleep(500);
    await waitForElementRemove2("没有返回键", shieldSelector01, targetSelector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-bar-view.navbar-style-secondary > button", interval = 3000, maxRetries = 3);
    await sleep(3000);
    const _0x2f79a3 = document.querySelectorAll("div.rating");
    for (let _0x208d2d = 0; _0x208d2d < _0x2f79a3.length; _0x208d2d++) {
      let _0x1ebbd4 = parseInt(_0x2f79a3[_0x208d2d].textContent, 10);
      if (_0x1ebbd4 >= 96) {
        console.log("不满足阵容要求");
        return "disabled";
      }
    }
    await sleep(500);
    console.log("自动填充阵容");
    _0x2236e4 = await waitForCondition("button", "阵容补全(优先重复)");
    if (!_0x2236e4) {
      return false;
    }
    var _0x27c73a = document.querySelector("body > div.view-modal-container.form-modal > section > div > p > input").value.trim();
    if (_0x27c73a === "" || _0x27c73a.includes("88") || _0x27c73a.includes("89") || _0x27c73a.includes("90") || _0x27c73a.includes("91") || _0x27c73a.includes("92") || _0x27c73a.includes("93") || _0x27c73a.includes("94") || _0x27c73a.includes("95") || _0x27c73a.includes("96") || _0x27c73a.includes("97") || _0x27c73a.includes("98") || _0x27c73a.includes("99") || _0x27c73a.includes("100")) {
      console.log("不满足阵容要求");
      await sleep(500);
      await waitForCondition("button", "取消");
      return "disabled";
    } else {
      await sleep(500);
      _0x2236e4 = await waitForCondition("button", "确定");
      if (!_0x2236e4) {
        return false;
      }
      console.log("判断是否可以提交阵容");
      if (await waitCommitEnable(commitButtonSelector)) {
        await sleep(500);
        console.log("满足阵容要求，提交任务");
        await waitForCondition("button", "提交", shieldSelector02);
        _0x2236e4 = await tryUntilConditionMet("#NotificationLayer > div", "提交挑战失败", 5, 500);
        if (_0x2236e4 === "ban") {
          return "ban";
        }
        await waitForElementRemoveByText("button", "提交并且不再向我提醒");
        await sleep(500);
        console.log("领取奖励");
        await waitForCondition("button", "领取奖励");
        await sleep(500);
        await waitForWithTargetSelectorCondition("button", "领取奖励", claimReward82_02);
        await sleep(500);
        console.log("物品已发送到未分配");
        return "completed";
      } else {
        console.log("不满足阵容要求");
        return "disabled";
      }
    }
  } catch (_0x41deff) {
    console.error("执行deal_with_82_task出错：", _0x41deff);
    return "error";
  }
}
async function dealWith93Task() {
  try {
    console.log("进入sbc页面");
    await waitForSBC("button", "SBC", shieldSelector02);
    await sleep(3500);
    var _0x581245 = await waitForCondition("h1", "93+ GOTG/FUTTIES 超级巨星球员 3 选 1");
    if (!_0x581245) {
      return false;
    }
    await sleep(2500);
    var _0x1ed00e = await isFieldPresent("交换一支评分为 91 的阵容。");
    if (!_0x1ed00e) {
      _0x581245 = await waitForCondition("button", "挑战");
      if (!_0x581245) {
        return false;
      }
      await sleep(500);
      _0x581245 = await waitForCondition2("button", "清除阵容", "body > div.ut-click-shield.showing", interval = 500, maxRetries = 3);
      _0x581245 && (await sleep(1500), _0x581245 = await waitForCondition("button", "确定"));
      await sleep(1500);
      var _0xdfbe90 = await waitForCondition2("button", "重复球员填充阵容", "body > div.ut-click-shield.showing", interval = 500, maxRetries = 3);
      await sleep(500);
      console.log("进入sbc页面");
      await waitForSBC("button", "SBC", shieldSelector02);
      var _0x581245 = await waitForCondition("h1", "93+ GOTG/FUTTIES 超级巨星球员 3 选 1");
      if (!_0x581245) {
        return false;
      }
      await sleep(500);
      _0x581245 = await waitForCondition("button", "挑战");
      if (!_0x581245) {
        return false;
      }
      await sleep(5000);
      var _0x1d4651 = document.querySelector("body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div > section > div > div.ut-sbc-challenge-details-view > div.ut-sbc-challenge-requirements-view > ul > li.complete > button");
      if (!_0x1d4651) {
        console.log("填充totw");
        var _0x581245 = await waitForElementRemove2("没有totx选择按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div > section > div > div.ut-sbc-challenge-details-view > div.ut-sbc-challenge-requirements-view > ul > li:nth-child(1) > button", interval = 500, maxRetries = 3);
        if (!_0x581245) {
          return "totx";
        }
        await sleep(2500);
        var _0x4167f7 = await waitForTextRating();
        console.log("totx:", _0x4167f7);
        console.log(parseInt(_0x4167f7.textContent.trim(), 10));
        if (_0x4167f7 && parseInt(_0x4167f7.textContent.trim(), 10) >= 97) {
          return "totx";
        }
        await sleep(500);
        var _0x581245 = await waitForElementRemove2("没有totx卡", shieldSelector01, targetSelector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-container-view--content > div > div.paginated-item-list.ut-pinned-list > ul > li:nth-child(1) > button", interval = 500, maxRetries = 3);
        if (!_0x581245) {
          return "totx";
        }
        await sleep(500);
        await waitForElementRemove2("没有返回键", shieldSelector01, targetSelector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-bar-view.navbar-style-secondary > button", interval = 500, maxRetries = 3);
        await sleep(3000);
      }
      await sleep(500);
      console.log("自动填充阵容");
      _0x581245 = await waitForCondition("button", "阵容补全(优先重复)");
      if (!_0x581245) {
        return false;
      }
      var _0x54e8ba = document.querySelector("body > div.view-modal-container.form-modal > section > div > p > input").value.trim();
      if (_0x54e8ba === "" || _0x54e8ba.includes("95") || _0x54e8ba.includes("96") || _0x54e8ba.includes("97") || _0x54e8ba.includes("98") || _0x54e8ba.includes("99") || _0x54e8ba.includes("100")) {
        await sleep(500);
        console.log("不满足阵容要求");
        await waitForCondition("button", "取消");
        return "disabled";
      } else {
        await sleep(500);
        _0x581245 = await waitForCondition("button", "确定");
        if (!_0x581245) {
          return false;
        }
        console.log("判断是否可以提交阵容");
        if (await waitCommitEnable(commitButtonSelector)) {
          await sleep(500);
          console.log("满足阵容要求，提交任务");
          await waitForCondition("button", "提交", shieldSelector02);
          _0x581245 = await tryUntilConditionMet("#NotificationLayer > div", "提交挑战失败", 5, 500);
          if (_0x581245 === "ban") {
            return "ban";
          }
          await waitForElementRemoveByText("button", "提交并且不再向我提醒");
          await sleep(500);
          console.log("领取奖励");
          await waitForCondition("button", "领取奖励");
        } else {
          console.log("不满足阵容要求");
          return "disabled";
        }
      }
    }
    await sleep(2500);
    _0x581245 = await waitForCondition("button", "挑战");
    if (!_0x581245) {
      return false;
    }
    var _0xdfbe90 = await waitForCondition("button", "重复球员填充阵容", "body > div.ut-click-shield.showing", interval = 500, maxRetries = 3);
    await sleep(500);
    console.log("自动填充阵容");
    _0x581245 = await waitForCondition("button", "阵容补全(优先重复)");
    if (!_0x581245) {
      return false;
    }
    var _0x54e8ba = document.querySelector("body > div.view-modal-container.form-modal > section > div > p > input").value.trim();
    if (_0x54e8ba === "" || _0x54e8ba.includes("95") || _0x54e8ba.includes("96") || _0x54e8ba.includes("97") || _0x54e8ba.includes("98") || _0x54e8ba.includes("99") || _0x54e8ba.includes("100")) {
      console.log("不满足阵容要求");
      await sleep(500);
      await waitForCondition("button", "取消");
      return "disabled";
    } else {
      await sleep(500);
      _0x581245 = await waitForCondition("button", "确定");
      if (!_0x581245) {
        return false;
      }
      console.log("判断是否可以提交阵容");
      if (await waitCommitEnable(commitButtonSelector)) {
        await sleep(500);
        console.log("满足阵容要求，提交任务");
        await waitForCondition("button", "提交", shieldSelector02);
        _0x581245 = await tryUntilConditionMet("#NotificationLayer > div", "提交挑战失败", 5, 500);
        if (_0x581245 === "ban") {
          return "ban";
        }
        await waitForElementRemoveByText("button", "提交并且不再向我提醒");
        await sleep(500);
        console.log("领取奖励");
        await waitForCondition("button", "领取奖励");
        await sleep(500);
        await waitForWithTargetSelectorCondition("button", "领取奖励", claimReward82_02);
        await sleep(500);
        console.log("物品已发送到未分配");
        return "completed";
      } else {
        console.log("不满足阵容要求");
        return "disabled";
      }
    }
  } catch (_0x34e5f1) {
    console.error("执行deal_with_totx_task出错：", _0x34e5f1);
    return "error";
  }
}
async function dealWith84Task() {
  try {
    await sleep(500);
    var _0x5124e9 = await waitForCondition("h1", "10 名 84+ 升级");
    if (!_0x5124e9) {
      return false;
    }
    console.log("不满足阵容要求");
    await sleep(500);
    _0x5124e9 = await waitForCondition2("button", "清除阵容", "body > div.ut-click-shield.showing", interval = 500, maxRetries = 3);
    _0x5124e9 && (await sleep(1500), _0x5124e9 = await waitForCondition("button", "确定"));
    await sleep(1500);
    await sleep(500);
    console.log("进入sbc页面");
    await waitForSBC("button", "SBC", shieldSelector02);
    await sleep(500);
    var _0x5124e9 = await waitForCondition("h1", "10 名 84+ 升级");
    if (!_0x5124e9) {
      return false;
    }
    await sleep(2500);
    var _0x21e762 = document.querySelector("body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div > section > div > div.ut-sbc-challenge-details-view > div.ut-sbc-challenge-requirements-view > ul > li.complete > button");
    if (!_0x21e762) {
      console.log("填充totw");
      var _0x5124e9 = await waitForElementRemove2("没有totx选择按钮", shieldSelector01, "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div > section > div > div.ut-sbc-challenge-details-view > div.ut-sbc-challenge-requirements-view > ul > li:nth-child(1) > button", interval = 500, maxRetries = 3);
      if (!_0x5124e9) {
        return "totx";
      }
      await sleep(2500);
      var _0x1ba665 = await waitForTextRating();
      console.log("totx:", _0x1ba665);
      console.log(parseInt(_0x1ba665.textContent.trim(), 10));
      if (_0x1ba665 && parseInt(_0x1ba665.textContent.trim(), 10) >= 97) {
        return "totx";
      }
      await sleep(500);
      var _0x5124e9 = await waitForElementRemove2("没有totx卡", shieldSelector01, targetSelector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-container-view--content > div > div.paginated-item-list.ut-pinned-list > ul > li:nth-child(1) > button", interval = 500, maxRetries = 3);
      if (!_0x5124e9) {
        return "totx";
      }
      await sleep(500);
      await waitForElementRemove2("没有返回键", shieldSelector01, targetSelector = "body > main > section > section > div.ut-navigation-container-view--content > div > div > section > div.ut-navigation-bar-view.navbar-style-secondary > button", interval = 500, maxRetries = 3);
      await sleep(3000);
    }
    await sleep(500);
    console.log("自动填充阵容");
    _0x5124e9 = await waitForCondition("button", "阵容补全(优先重复)");
    if (!_0x5124e9) {
      return false;
    }
    await sleep(2500);
    var _0x109faf = document.querySelector("body > div.view-modal-container.form-modal > section > div > p > input").value.trim();
    if (_0x109faf === "" || _0x109faf.includes("95") || _0x109faf.includes("96") || _0x109faf.includes("97") || _0x109faf.includes("98") || _0x109faf.includes("99") || _0x109faf.includes("100")) {
      console.log("不满足阵容要求");
      await sleep(500);
      await waitForCondition("button", "取消");
      return "disabled";
    } else {
      await sleep(500);
      _0x5124e9 = await waitForCondition("button", "确定");
      if (!_0x5124e9) {
        return false;
      }
      console.log("判断是否可以提交阵容");
      if (await waitCommitEnable(commitButtonSelector)) {
        await sleep(1500);
        console.log("满足阵容要求，提交任务");
        await waitForCondition("button", "提交", shieldSelector02);
        await sleep(1500);
        _0x5124e9 = await tryUntilConditionMet("#NotificationLayer > div", "提交挑战失败", 5, 500);
        if (_0x5124e9 === "ban") {
          return "ban";
        }
        await waitForElementRemoveByText("button", "提交并且不再向我提醒");
        await sleep(500);
        console.log("领取奖励");
        await waitForCondition("button", "领取奖励");
        await sleep(500);
        await waitForWithTargetSelectorCondition("button", "领取奖励", claimReward82_02);
        await sleep(500);
        console.log("物品已发送到未分配");
        return "completed";
      } else {
        console.log("不满足阵容要求");
        return "disabled";
      }
    }
  } catch (_0x1a42dd) {
    console.error("执行deal_with_84_task出错：", _0x1a42dd);
    localStorage.setItem("shouldRunAfterRefresh", "true");
    location.reload();
  }
}
function performBestScore() {
  localStorage.setItem("mode", 1);
  runRollingCardCycle(localStorage.getItem("mode"));
}
function performBestCompleteScore() {
  localStorage.setItem("mode", 2);
  runRollingCardCycle(localStorage.getItem("mode"));
}
function performScore() {
  localStorage.setItem("mode", 3);
  runRollingCardCycle(localStorage.getItem("mode"));
}
function stopTask() {
  location.reload();
}