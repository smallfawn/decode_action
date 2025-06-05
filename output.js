//Thu Jun 05 2025 13:33:37 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
class SignalRWebSocket {
  constructor(_0x89343e) {
    this.url = _0x89343e;
    this.socket = null;
    this.callbacks = {};
  }
  connect() {
    this.socket = new WebSocket(this.url);
    this.socket.addEventListener("open", () => {
      console.log("WebSocket connection established.");
      const _0x2298b3 = this.callbacks.connect;
      _0x2298b3 && _0x2298b3();
    });
    this.socket.addEventListener("message", _0xa111fb => {
      const _0x446a3c = JSON.parse(_0xa111fb.data);
      const _0x8153f9 = this.callbacks[_0x446a3c.type];
      _0x8153f9 && _0x8153f9(_0x446a3c.payload);
    });
    this.socket.addEventListener("close", () => {
      console.log("WebSocket connection closed.");
    });
  }
  open(_0x459568) {
    this.callbacks.connect = _0x459568;
  }
  on(_0x326460, _0xe2fe06) {
    this.callbacks[_0x326460] = _0xe2fe06;
  }
  off(_0x232863) {
    delete this.callbacks[_0x232863];
  }
  send(_0x252b86, _0x495671) {
    const _0x560a47 = JSON.stringify({
      type: _0x252b86,
      payload: _0x495671
    });
    this.socket.send(_0x560a47);
  }
  disconnect() {
    this.socket.close();
  }
}