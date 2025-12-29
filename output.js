//Mon Dec 29 2025 01:41:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let messageCount = 0;
let imageCount = 0;
let messageBuffer = [];
let lastMessageTime = 0;
const MESSAGE_BUFFER_TIMEOUT = 5000;
let audioElements = {};
const chatContainer = document.getElementById("chatContainer");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const emojiBtn = document.getElementById("emojiBtn");
const emojiContainer = document.getElementById("emojiContainer");
const imageBtn = document.getElementById("imageBtn");
const imageInput = document.getElementById("imageInput");
const imageModal = document.getElementById("imageModal");
const expandedImage = document.getElementById("expandedImage");
const dateMarker = document.getElementById("dateMarker");
const clearBtn = document.getElementById("clearBtn");
const helpBtn = document.getElementById("helpBtn");
const voiceBtn = document.getElementById("voiceBtn");
document.addEventListener("DOMContentLoaded", function () {
  const _0x5f49ff = localStorage.getItem("messageCount");
  if (_0x5f49ff !== null) {
    {
      messageCount = parseInt(_0x5f49ff);
    }
  }
  const _0x52b1fa = localStorage.getItem("imageCount");
  _0x52b1fa !== null && (imageCount = parseInt(_0x52b1fa));
});
function saveChatHistory() {
  const _0x245973 = [];
  document.querySelectorAll(".message-container").forEach(_0x1c0a00 => {
    {
      if (!_0x1c0a00.querySelector(".typing-indicator")) {
        {
          const _0xaed208 = _0x1c0a00.classList.contains("user");
          const _0x21e792 = _0x1c0a00.querySelector(".image-message") ? "image" : _0x1c0a00.querySelector(".voice-message") ? "voice" : "text";
          let _0x1feb10 = "";
          let _0x7b8dce = null;
          if (_0x21e792 === "image") {
            {
              _0x1feb10 = _0x1c0a00.querySelector("img").src;
            }
          } else {
            if (_0x21e792 === "voice") {
              _0x1feb10 = _0x1c0a00.querySelector(".voice-message").dataset.audioSrc;
              _0x7b8dce = _0x1c0a00.querySelector(".voice-duration").innerText.replace("\"", "");
            } else {
              {
                _0x1feb10 = _0x1c0a00.querySelector(".message").innerHTML;
              }
            }
          }
          _0x245973.push({
            type: _0x21e792,
            content: _0x1feb10,
            isUser: _0xaed208,
            time: _0x1c0a00.querySelector(".message-info span").innerText,
            duration: _0x7b8dce
          });
        }
      }
    }
  });
  localStorage.setItem("chatHistory", JSON.stringify(_0x245973));
  localStorage.setItem("imageCount", imageCount);
  localStorage.setItem("messageCount", messageCount);
}
function loadChatHistory() {
  const _0x1431aa = localStorage.getItem("chatHistory");
  if (_0x1431aa) {
    {
      try {
        {
          const _0xed222 = JSON.parse(_0x1431aa);
          _0xed222.forEach(_0x3f9c82 => {
            {
              if (_0x3f9c82.isUser) {
                {
                  if (_0x3f9c82.type === "image") {
                    {
                      addUserMessage(_0x3f9c82.content, "image", _0x3f9c82.time);
                    }
                  } else {
                    if (_0x3f9c82.type === "voice") {
                      addUserMessage(_0x3f9c82.content, "voice", _0x3f9c82.time, _0x3f9c82.duration);
                    } else {
                      {
                        addUserMessage(_0x3f9c82.content, "text", _0x3f9c82.time);
                      }
                    }
                  }
                }
              } else {
                {
                  if (_0x3f9c82.type === "voice") {
                    {
                      addBotVoiceMessage(_0x3f9c82.content, _0x3f9c82.duration, _0x3f9c82.time, false);
                    }
                  } else {
                    addBotMessage(_0x3f9c82.content, _0x3f9c82.time, false);
                  }
                }
              }
            }
          });
          setTimeout(() => {
            chatContainer.scrollTop = chatContainer.scrollHeight;
          }, 200);
          return true;
        }
      } catch (_0xc324b0) {
        {
          console.error("加载聊天记录失败:", _0xc324b0);
        }
      }
    }
  }
  return false;
}
function clearChatHistory() {
  if (confirm("确定要清空所有聊天记录吗？该操作不可撤销。")) {
    {
      document.querySelectorAll(".message-container").forEach(_0x1afd36 => _0x1afd36.remove());
      messageCount = 0;
      imageCount = 0;
      localStorage.removeItem("chatHistory");
      localStorage.removeItem("imageCount");
      localStorage.removeItem("messageCount");
      setTimeout(addWelcomeMessage, 500);
    }
  }
}
function addMessage(_0x31f8f3, _0x4a45e9, _0xe4a753, _0x25f753 = null, _0x5b7a57 = null) {
  const _0x3abc65 = document.createElement("div");
  _0x3abc65.className = "message-container " + _0xe4a753;
  if (!_0x25f753) {
    {
      const _0x38ea85 = {
        hour: "2-digit",
        minute: "2-digit"
      };
      _0x25f753 = new Date().toLocaleTimeString([], _0x38ea85);
    }
  }
  _0x3abc65.innerHTML = "\n        <div class=\"avatar-container\">\n            <div class=\"avatar\"></div>\n            <div class=\"username\">" + (_0xe4a753 === "user" ? config.user.name : config.bot.name) + "</div>\n        </div>\n        <div class=\"message-content\">\n            <div class=\"message\"></div>\n            <div class=\"message-info\">\n                <span>" + _0x25f753 + "</span>\n            </div>\n        </div>\n    ";
  const _0x569506 = _0x3abc65.querySelector(".message");
  if (_0x31f8f3 === "text") {
    _0x569506.innerHTML = _0x4a45e9;
  } else {
    if (_0x31f8f3 === "image") {
      {
        _0x569506.innerHTML = "\n            <div class=\"image-message\">\n                <img src=\"" + _0x4a45e9 + "\" alt=\"用户上传图片\">\n            </div>\n        ";
        const _0x447e7b = _0x569506.querySelector("img");
        _0x447e7b.onclick = function () {
          expandedImage.src = this.src;
          imageModal.classList.add("show");
        };
        imageCount++;
        saveChatHistory();
      }
    } else {
      if (_0x31f8f3 === "emoji") {
        {
          _0x569506.innerHTML = "<div style=\"font-size:38px;line-height:1\">" + _0x4a45e9 + "</div>";
        }
      } else {
        if (_0x31f8f3 === "voice") {
          {
            const _0x303bc4 = "audio-" + Date.now();
            _0x569506.innerHTML = "\n            <div class=\"voice-message\" data-audio-id=\"" + _0x303bc4 + "\" data-audio-src=\"" + _0x4a45e9 + "\">\n                <div class=\"play-icon\"></div>\n                <div class=\"voice-wave\">\n                    <span class=\"wave-bar\"></span>\n                    <span class=\"wave-bar\"></span>\n                    <span class=\"wave-bar\"></span>\n                    <span class=\"wave-bar\"></span>\n                    <span class=\"wave-bar\"></span>\n                </div>\n                <div class=\"voice-duration\">" + _0x5b7a57 + "\"</div>\n            </div>\n        ";
            const _0x39559b = new Audio(_0x4a45e9);
            audioElements[_0x303bc4] = _0x39559b;
            const _0xaf129f = _0x569506.querySelector(".voice-message");
            _0xaf129f.onclick = function () {
              {
                toggleVoiceMessage(this);
              }
            };
            _0x39559b.addEventListener("ended", function () {
              {
                const _0x21c295 = document.querySelector(".voice-message[data-audio-id=\"" + _0x303bc4 + "\"]");
                if (_0x21c295) {
                  {
                    _0x21c295.classList.remove("playing");
                    _0x21c295.querySelector(".play-icon").textContent = "";
                  }
                }
              }
            });
          }
        }
      }
    }
  }
  chatContainer.appendChild(_0x3abc65);
  setTimeout(() => {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, 100);
  saveChatHistory();
}
function toggleVoiceMessage(_0xa828c0) {
  const _0x6f098e = _0xa828c0.dataset.audioId;
  const _0x4acb8c = audioElements[_0x6f098e];
  if (!_0x4acb8c) {
    return;
  }
  Object.keys(audioElements).forEach(_0x1f3ecf => {
    {
      if (_0x1f3ecf !== _0x6f098e && !audioElements[_0x1f3ecf].paused) {
        {
          audioElements[_0x1f3ecf].pause();
          audioElements[_0x1f3ecf].currentTime = 0;
          const _0x41e49e = document.querySelector(".voice-message[data-audio-id=\"" + _0x1f3ecf + "\"]");
          _0x41e49e && (_0x41e49e.classList.remove("playing"), _0x41e49e.querySelector(".play-icon").textContent = "");
        }
      }
    }
  });
  if (_0x4acb8c.paused) {
    {
      _0x4acb8c.play();
      _0xa828c0.classList.add("playing");
      _0xa828c0.querySelector(".play-icon").textContent = "";
    }
  } else {
    _0x4acb8c.pause();
    _0x4acb8c.currentTime = 0;
    _0xa828c0.classList.remove("playing");
    _0xa828c0.querySelector(".play-icon").textContent = "";
  }
}
function addUserMessage(_0x3c21aa, _0x55d4d9 = "text", _0x1657da = null, _0x10d4cf = null) {
  addMessage(_0x55d4d9, _0x3c21aa, "user", _0x1657da, _0x10d4cf);
}
function addBotMessage(_0x33d0f5, _0x16f468 = null, _0x148671 = true) {
  addMessage("text", _0x33d0f5, "bot", _0x16f468);
  _0x148671 && new Audio("./img/xx.mp3").play();
}
function addBotVoiceMessage(_0x1f5637, _0x122a65, _0x30ad76 = null, _0x1eafc5 = true) {
  addMessage("voice", _0x1f5637, "bot", _0x30ad76, _0x122a65);
  if (_0x1eafc5) {
    {
      new Audio("./img/xx.mp3").play();
    }
  }
}
function processMessage(_0x2d5d71, _0x2d07f4 = "text") {
  const _0x52e359 = Date.now();
  if (_0x2d07f4 === "image") {
    {
      handleImageMessage();
      return;
    }
  }
  if (_0x52e359 - lastMessageTime < MESSAGE_BUFFER_TIMEOUT) {
    {
      messageBuffer.push(_0x2d5d71);
    }
  } else {
    messageBuffer = [_0x2d5d71];
  }
  lastMessageTime = _0x52e359;
  setTimeout(() => {
    {
      if (messageBuffer.length > 0) {
        {
          const _0x267999 = messageBuffer.join(" ");
          handleTextMessage(_0x267999);
          messageBuffer = [];
        }
      }
    }
  }, MESSAGE_BUFFER_TIMEOUT);
}
function handleTextMessage(_0x359e5f) {
  let _0x1444b6 = false;
  for (const _0x5ea4a2 in config.keywordReplies) {
    {
      const _0x3fe675 = new RegExp(_0x5ea4a2, "i");
      if (_0x3fe675.test(_0x359e5f)) {
        {
          const _0x278ca6 = config.keywordReplies[_0x5ea4a2];
          if (_0x278ca6.type === "text") {
            addBotMessage(_0x278ca6.content);
          } else {
            if (_0x278ca6.type === "voice") {
              {
                addBotVoiceMessage(_0x278ca6.content, _0x278ca6.duration);
              }
            }
          }
          _0x1444b6 = true;
          break;
        }
      }
    }
  }
  if (!_0x1444b6 && messageCount < config.sequentialReplies.length) {
    {
      const _0x37a5d8 = config.sequentialReplies[messageCount];
      if (_0x37a5d8.type === "text") {
        addBotMessage(_0x37a5d8.content);
      } else {
        _0x37a5d8.type === "voice" && addBotVoiceMessage(_0x37a5d8.content, _0x37a5d8.duration);
      }
      messageCount++;
      localStorage.setItem("messageCount", messageCount);
    }
  }
}
function handleImageMessage() {
  if (imageCount >= 3) {
    {
      const _0xa8a387 = Math.floor(Math.random() * 7000) + 3000;
      setTimeout(() => {
        addBotMessage(config.specialReply.content);
      }, _0xa8a387);
    }
  }
}
function handleSendMessage() {
  const _0x58da1a = messageInput.innerText.trim();
  _0x58da1a && (addUserMessage(_0x58da1a), messageInput.innerText = "", processMessage(_0x58da1a));
}
function initEmojiPanel() {
  config.emojis.forEach(_0x572fdd => {
    {
      const _0x54a8b4 = document.createElement("div");
      _0x54a8b4.className = "emoji-item";
      _0x54a8b4.innerText = _0x572fdd;
      _0x54a8b4.onclick = () => {
        {
          const _0x594ee2 = document.getElementById("messageInput");
          _0x594ee2.focus();
          const _0x58a765 = document.createTextNode(_0x572fdd);
          const _0x4c0c78 = window.getSelection();
          if (_0x4c0c78.rangeCount > 0) {
            {
              const _0x292c81 = _0x4c0c78.getRangeAt(0);
              _0x292c81.insertNode(_0x58a765);
              _0x292c81.collapse(false);
            }
          } else {
            _0x594ee2.appendChild(_0x58a765);
          }
        }
      };
      emojiContainer.appendChild(_0x54a8b4);
    }
  });
  emojiBtn.onclick = () => {
    {
      emojiContainer.style.display = emojiContainer.style.display === "flex" ? "none" : "flex";
    }
  };
  chatContainer.addEventListener("click", () => {
    {
      emojiContainer.style.display = "none";
    }
  });
}
function initImageUpload() {
  imageBtn.onclick = () => imageInput.click();
  imageInput.addEventListener("change", function (_0x2c3462) {
    {
      const _0x4d9975 = _0x2c3462.target.files[0];
      if (_0x4d9975 && _0x4d9975.type.match("image.*")) {
        {
          const _0x12c3bc = new FileReader();
          _0x12c3bc.onload = function (_0x5650c6) {
            {
              addUserMessage(_0x5650c6.target.result, "image");
              processMessage("", "image");
            }
          };
          _0x12c3bc.readAsDataURL(_0x4d9975);
          imageInput.value = null;
        }
      }
    }
  });
}
function initVoiceMessage() {
  let _0x12aa22 = false;
  let _0x3f453f;
  voiceBtn.addEventListener("click", function () {
    {
      if (_0x12aa22) {
        {
          clearTimeout(_0x3f453f);
          _0x12aa22 = false;
          voiceBtn.innerHTML = "<i class=\"fas fa-microphone\"></i>";
          const _0x1b69ad = Math.floor(Math.random() * 3);
          const _0xc8f019 = ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"];
          const _0x20be47 = [5, 8, 10];
          addUserMessage(_0xc8f019[_0x1b69ad], "voice", null, _0x20be47[_0x1b69ad]);
        }
      } else {
        _0x12aa22 = true;
        voiceBtn.innerHTML = "<i class=\"fas fa-stop\"></i>";
        _0x3f453f = setTimeout(() => {
          {
            _0x12aa22 = false;
            voiceBtn.innerHTML = "<i class=\"fas fa-microphone\"></i>";
            const _0xca76a = Math.floor(Math.random() * 3);
            const _0x304aa6 = ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"];
            const _0x294850 = [5, 8, 10];
            addUserMessage(_0x304aa6[_0xca76a], "voice", null, _0x294850[_0xca76a]);
          }
        }, 3000);
      }
    }
  });
}
imageModal.querySelector(".modal-close").onclick = function () {
  imageModal.classList.remove("show");
};
function addWelcomeMessage() {
  if (!localStorage.getItem("chatHistory")) {
    {
      addBotMessage("您好！把发评论的帐号发给我,系统自动审核后给您发地址");
      setTimeout(() => {
        {
          addBotVoiceMessage("./img/fjt.mp3", 5);
        }
      }, 6000);
    }
  }
}
function showHelp() {
  addBotMessage("这里是帮助信息：");
  addBotMessage("1. 输入文字发送消息");
  addBotMessage("2. 点击笑脸图标发送表情");
  addBotMessage("3. 点击图片图标发送图片");
  addBotMessage("4. 点击麦克风图标息");
  addBotMessage("5. 聊天记录自动保存在浏览器中");
  addBotMessage("6. 使用\"清空记录\"按钮可以清除所有聊天历史");
}
document.addEventListener("DOMContentLoaded", function () {
  initEmojiPanel();
  initImageUpload();
  initVoiceMessage();
  sendBtn.onclick = handleSendMessage;
  messageInput.addEventListener("keypress", function (_0xa6aea3) {
    {
      if (_0xa6aea3.key === "Enter" && !_0xa6aea3.shiftKey) {
        {
          _0xa6aea3.preventDefault();
          handleSendMessage();
        }
      }
    }
  });
  messageInput.addEventListener("input", function () {
    {
      if (this.innerText.trim().length > 0) {
        {
          sendBtn.style.background = "#1E9FFF";
        }
      } else {
        sendBtn.style.background = "#4ab2ff";
      }
    }
  });
  clearBtn.addEventListener("click", clearChatHistory);
  helpBtn.addEventListener("click", showHelp);
  !loadChatHistory() && setTimeout(addWelcomeMessage, 1000);
});