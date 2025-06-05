//Thu Jun 05 2025 13:32:01 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let canvas;
let ctx;
const app = new Vue({
  el: "#app",
  data: {
    radarImg: "",
    map: "",
    rate: 1.2,
    config: {
      hp: false,
      name: false,
      friend: false,
      c4: true,
      color: {
        mine: "rgba(145, 244, 69, 0.75)",
        friend: "rgba(97, 189, 255, 0.75)",
        enemy: "rgba(241, 3, 59, 0.75)",
        c4: "rgba(249, 229, 9, 0.75)"
      }
    },
    selectIndex: "",
    ws: "",
    radarPlayer: []
  },
  computed: {
    players: function () {
      let _0x2d36cc = [];
      if (!this.radarPlayer) {
        return;
      }
      this.radarPlayer.forEach(_0x18efb0 => {
        let _0x488372 = _0x18efb0.camp === 0 ? "匪" : "警";
        if (!_0x2d36cc.find(_0x44724a => _0x44724a.label === _0x488372)) {
          let _0x1a13fc = [];
          _0x1a13fc.push(_0x18efb0);
          _0x2d36cc.push({
            label: _0x488372,
            options: _0x1a13fc
          });
        } else {
          _0x2d36cc.forEach(_0xc8e11b => {
            _0xc8e11b.label === _0x488372 && _0xc8e11b.options.push(_0x18efb0);
          });
        }
      });
      return _0x2d36cc;
    },
    me: function () {
      return app.radarPlayer.find(_0xdcdde0 => _0xdcdde0.id === this.selectIndex);
    }
  },
  created: function () {
    this.ws = new SignalRWebSocket("ws://" + window.location.hostname + ":8081");
    this.ws.on("ChangeImage", _0x2e8442 => {
      this.map = _0x2e8442;
    });
    this.ws.on("ReceiveRadar", _0x3d5644 => {
      _0x3d5644.map !== this.map && (this.map = _0x3d5644.map);
      this.radarPlayer = _0x3d5644.players;
    });
    this.ws.open(() => {
      console.log(this);
      canvas = this.$refs.radarCanvas;
      ctx = canvas.getContext("2d");
      setTimeout(radarDraw, 1000);
    });
    this.ws.connect();
  },
  watch: {
    rate: function (_0x4c56e1) {
      this.$refs.radarCanvas.width = this.radarImg.width * _0x4c56e1;
      this.$refs.radarCanvas.height = this.radarImg.height * _0x4c56e1;
      ctx.scale(_0x4c56e1, _0x4c56e1);
    },
    map: function (_0x3bf75d) {
      this.radarImg = new Image();
      this.radarImg.src = _0x3bf75d;
      let _0x261eda = this.$refs.radarCanvas;
      _0x261eda.style.backgroundImage = "url(\"" + _0x3bf75d + "\")";
      this.radarImg.onload = () => {
        _0x261eda.height = this.radarImg.height * this.rate;
        _0x261eda.width = this.radarImg.width * this.rate;
        ctx.scale(this.rate, this.rate);
      };
    },
    selectedIndex: function (_0x12abc5) {
      if (!radarData.Players) {
        return;
      }
      radarData.Players.forEach(_0x27af3d => {
        _0x27af3d.Index === _0x12abc5 && (radarData.Me = _0x27af3d);
      });
    }
  }
});
function rgba(_0x97d041, _0x56606e, _0x1fa36f, _0x11a3eb) {
  return "#" + _0x97d041.toString(16).padStart(2, "0") + _0x56606e.toString(16).padStart(2, "0") + _0x1fa36f.toString(16).padStart(2, "0") + Math.floor(_0x11a3eb * 255).toString(16).padStart(2, "0");
}
function radarDraw() {
  app.radarPlayer && app.me && (ctx.clearRect(0, 0, canvas.width + 1, canvas.height + 1), app.radarPlayer.forEach(_0x1e31f0 => {
    if (!_0x1e31f0.isAlive) {
      return;
    }
    let _0x56c841 = _0x1e31f0.camp !== app.me.camp ? 2 : _0x1e31f0.id === app.me.id ? 0 : 1;
    !app.config.friend ? (_0x56c841 === 0 || _0x56c841 === 2) && DrawPlayer(_0x1e31f0, GetColor(_0x56c841)) : DrawPlayer(_0x1e31f0, GetColor(_0x56c841));
  }));
  requestAnimationFrame(radarDraw);
}
function GetColor(_0x8c8418) {
  switch (_0x8c8418) {
    case 0:
      return eval(app.config.color.mine);
    case 1:
      return eval(app.config.color.friend);
    case 2:
      return eval(app.config.color.enemy);
  }
}
function DrawPlayer(_0x5ebaa8, _0xa0ea7e) {
  let _0x531115 = ctx.createRadialGradient(_0x5ebaa8.vec.X, _0x5ebaa8.vec.Y, 0, _0x5ebaa8.rotate.X, _0x5ebaa8.rotate.Y, 45);
  _0x531115.addColorStop(0, _0xa0ea7e);
  _0x531115.addColorStop(1, calcAlpha(_0xa0ea7e, 1));
  ctx.fillStyle = _0x531115;
  ctx.arc(_0x5ebaa8.vec.X, _0x5ebaa8.vec.Y, 30, 0, 2 * Math.PI);
  ctx.fill();
  _0x5ebaa8.hasC4 && app.config.c4 && (ctx.beginPath(), ctx.fillStyle = eval(app.config.color.c4), ctx.arc(_0x5ebaa8.vec.X, _0x5ebaa8.vec.Y, 3, 0, 2 * Math.PI), ctx.closePath(), ctx.fill());
  ctx.beginPath();
  ctx.fillStyle = _0xa0ea7e;
  ctx.arc(_0x5ebaa8.vec.X, _0x5ebaa8.vec.Y, 2, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  if (app.config.hp) {
    ctx.font = "7px Arial";
    const _0x5392ec = ctx.measureText(_0x5ebaa8.health).width + 3;
    ctx.fillText(_0x5ebaa8.health, _0x5ebaa8.vec.X - _0x5392ec, _0x5ebaa8.vec.Y + 2);
  }
  app.config.name && (ctx.font = "7px Arial", ctx.fillText(_0x5ebaa8.name, _0x5ebaa8.vec.X + 3, _0x5ebaa8.vec.Y + 2));
}
function calcAlpha(_0x29868c, _0x51e15b) {
  let _0x367455 = _0x29868c.substring(1, 7);
  let _0x138625 = _0x51e15b.toString(16).padStart(2, "0");
  return "#" + _0x367455 + _0x138625;
}