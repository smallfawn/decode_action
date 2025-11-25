//Tue Nov 25 2025 02:03:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
document.addEventListener("DOMContentLoaded", function () {
  const _0x87596d = document.querySelectorAll(".tooltip");
  _0x87596d.forEach(function (_0xf73530) {
    const _0x208d1b = _0xf73530.querySelector(".tooltiptext");
    if (_0x208d1b) {
      _0x208d1b.style.visibility = "hidden";
      _0x208d1b.style.opacity = "0";
      _0x208d1b.style.position = "absolute";
      _0x208d1b.style.left = "50%";
      _0x208d1b.style.transform = "translateX(-50%)";
      _0x208d1b.style.backgroundColor = "#555";
      _0x208d1b.style.color = "#fff";
      _0x208d1b.style.padding = "5px 10px";
      _0x208d1b.style.borderRadius = "4px";
      _0x208d1b.style.whiteSpace = "nowrap";
      _0x208d1b.style.zIndex = "10000";
      _0x208d1b.style.transition = "opacity 0.3s";
      _0x208d1b.style.fontSize = "12px";
      _0x208d1b.style.pointerEvents = "none";
      const _0xda1bf7 = document.createElement("div");
      _0xda1bf7.style.content = "\"\"";
      _0xda1bf7.style.position = "absolute";
      _0xda1bf7.style.left = "50%";
      _0xda1bf7.style.transform = "translateX(-50%)";
      _0xda1bf7.style.borderWidth = "5px";
      _0xda1bf7.style.borderStyle = "solid";
      _0x208d1b.appendChild(_0xda1bf7);
      _0xf73530.addEventListener("mouseenter", function (_0x256d8e) {
        const _0x19d6aa = _0xf73530.getBoundingClientRect(),
          _0x2407ab = _0x208d1b.offsetHeight;
        _0x19d6aa.top < _0x2407ab + 10 ? (_0x208d1b.style.top = "100%", _0x208d1b.style.bottom = "auto", _0x208d1b.style.marginTop = "5px", _0xda1bf7.style.top = "100%", _0xda1bf7.style.bottom = "auto", _0xda1bf7.style.borderTop = "5px solid #555", _0xda1bf7.style.borderBottom = "none") : (_0x208d1b.style.top = "auto", _0x208d1b.style.bottom = "100%", _0x208d1b.style.marginBottom = "5px", _0xda1bf7.style.top = "auto", _0xda1bf7.style.bottom = "100%", _0xda1bf7.style.borderTop = "none", _0xda1bf7.style.borderBottom = "5px solid #555");
        _0x208d1b.style.visibility = "visible";
        _0x208d1b.style.opacity = "1";
      });
      _0xf73530.addEventListener("mouseleave", function (_0x1756ad) {
        _0x208d1b.style.visibility = "hidden";
        _0x208d1b.style.opacity = "0";
      });
    }
  });
});
class BlockTableManager {
  constructor() {
    this.blockTable = $("#blockTable tbody");
    this.stockTable = $("#stockTable tbody");
    this.datePicker = $("#datePicker");
    this.settingBtn = $("#settingBtn");
    this.cleanBtn = $("#cleanBtn");
    this.exportBtn = $("#exportBtn");
    this.prevDateBtn = $("#prevDateBtn");
    this.nextDateBtn = $("#nextDateBtn");
    this.refreshBtn = $("#refreshBtn");
    this.blockCount = localStorage.getItem("blockCount") ? parseInt(localStorage.getItem("blockCount")) : 20;
    this.blockData = [];
    this.tradedaylist = [];
    const _0x4e208f = new Date(),
      _0x216704 = _0x4e208f.getFullYear(),
      _0x4c6f07 = String(_0x4e208f.getMonth() + 1).padStart(2, "0"),
      _0x3f0a14 = String(_0x4e208f.getDate()).padStart(2, "0");
    this.todayDate = _0x216704 + "-" + _0x4c6f07 + "-" + _0x3f0a14;
    this.tradeDate = "";
    this.order = 1;
    this.old = 1;
    this.st = localStorage.getItem("st") ? parseInt(localStorage.getItem("st")) : 30;
    this.type = 6;
    this.blockCode = "";
    this.stockCode = "";
    this.actions = "bkStockBtn";
    this.b5Block = ["海峡两岸", "机器人", "人工智能", "芯片", "算力", "华为", "新能源车", "光伏", "储能", "半导体", "军工"];
    this.processBlocksNum = localStorage.getItem("processBlocksNum") ? parseInt(localStorage.getItem("processBlocksNum")) : 5;
    this.bkStockBtn = $("#bkStockBtn");
    this.ztStockBtn = $("#ztStockBtn");
    this.zaStockBtn = $("#zaStockBtn");
    this.dmStockBtn = $("#dmStockBtn");
    this.p5StockBtn = $("#p5StockBtn");
    this.b5StockBtn = $("#b5StockBtn");
    this.rqStockBtn = $("#rqStockBtn");
    this.jgStockBtn = $("#jgStockBtn");
    this.blStockBtn = $("#blStockBtn");
    this.buttonEvents = {
      ztStockBtn: "最新涨停",
      zaStockBtn: "涨停炸板",
      dmStockBtn: "大面股票",
      p5StockBtn: "即将涨停",
      b5StockBtn: "热门题材叠加",
      rqStockBtn: "人气榜排序前10",
      jgStockBtn: "本季度机构建仓超2000万",
      blStockBtn: "量比排序前10"
    };
    this.init();
  }
  init() {
    this.fetchTradeDateList();
    this.datePicker.val(this.todayDate);
    this.updateDateDisplay();
    this.fetchBlockData();
    this.bindEvents();
    const _0x115f75 = localStorage.getItem("refreshInterval") ? parseInt(localStorage.getItem("refreshInterval")) : 10000,
      _0x2d4e8c = localStorage.getItem("timerEnabled") !== "false";
    _0x2d4e8c ? $("#refreshButtonContainer").hide() : $("#refreshButtonContainer").show();
    _0x2d4e8c && (this.refreshIntervalId = setInterval(() => {
      this.tradeDate === "" && this.fetchBlockData();
    }, _0x115f75));
  }
  fetchTradeDateList(_0x266df2 = true) {
    $.ajax({
      url: "http://localhost:5000/api/get_tradeday_list",
      method: "GET",
      dataType: "json",
      async: _0x266df2,
      success: _0x25181f => {
        this.tradedaylist = _0x25181f;
        console.log("交易日期列表已更新:", this.tradedaylist);
      },
      error: (_0x5f5d89, _0x3584c0, _0x1d2f7b) => {
        console.error("获取交易日期列表失败:", _0x1d2f7b);
      }
    });
  }
  bindEvents() {
    this.datePicker.on("change", _0x1acd66 => {
      this.handleDateChange(_0x1acd66);
    });
    this.blockTable.on("click", "tr", this.handleBlockRowClick.bind(this));
    this.settingBtn.parent().parent().on("click", () => this.handleSettingClick());
    this.cleanBtn.parent().parent().on("click", () => this.handleCleanClick());
    this.exportBtn.parent().parent().on("click", () => this.handleExportClick());
    $("#hotBlockSettingBtn").parent().parent().on("click", () => this.handleHotBlockSettingClick());
    this.prevDateBtn.parent().parent().on("click", () => this.handlePrevDateClick());
    this.nextDateBtn.parent().parent().on("click", () => this.handleNextDateClick());
    $("#refreshBtn").on("click", () => {
      this.fetchBlockData();
    });
    this.bkStockBtn.on("click", _0x2aa0ea => {
      _0x2aa0ea.stopPropagation();
      this.handleButtonClickCommon.call(this, {
        target: this.bkStockBtn[0]
      });
    });
    this.ztStockBtn.on("click", _0xf54aa5 => {
      _0xf54aa5.stopPropagation();
      this.handleButtonClickCommon.call(this, {
        target: this.ztStockBtn[0]
      });
    });
    this.zaStockBtn.on("click", _0x7d5497 => {
      _0x7d5497.stopPropagation();
      this.handleButtonClickCommon.call(this, {
        target: this.zaStockBtn[0]
      });
    });
    this.dmStockBtn.on("click", _0x18d629 => {
      _0x18d629.stopPropagation();
      this.handleButtonClickCommon.call(this, {
        target: this.dmStockBtn[0]
      });
    });
    this.p5StockBtn.on("click", _0x1a209c => {
      _0x1a209c.stopPropagation();
      this.handleButtonClickCommon.call(this, {
        target: this.p5StockBtn[0]
      });
    });
    this.b5StockBtn.on("click", _0x540122 => {
      _0x540122.stopPropagation();
      this.handleButtonClickCommon.call(this, {
        target: this.b5StockBtn[0]
      });
    });
    this.rqStockBtn.on("click", _0x4749d6 => {
      _0x4749d6.stopPropagation();
      this.handleButtonClickCommon.call(this, {
        target: this.rqStockBtn[0]
      });
    });
    this.jgStockBtn.on("click", _0xad5349 => {
      _0xad5349.stopPropagation();
      this.handleButtonClickCommon.call(this, {
        target: this.jgStockBtn[0]
      });
    });
    this.blStockBtn.on("click", _0xfa2306 => {
      _0xfa2306.stopPropagation();
      this.handleButtonClickCommon.call(this, {
        target: this.blStockBtn[0]
      });
    });
  }
  fetchBlockData() {
    $("#blockName").text("正在获取数据...");
    const _0x2f7f8a = this.isCurrentDate() ? "http://localhost:5000/api/get_hot_block_list?count=" + this.blockCount : "http://localhost:5000/api/get_hot_block_list_his?count=" + this.blockCount + "&Date=" + this.tradeDate;
    fetch(_0x2f7f8a).then(_0x326930 => _0x326930.json()).then(_0x329a88 => {
      this.handleFetchBlockDataSuccess(_0x329a88);
    }).catch(_0x2cd56a => {
      console.error("Error:", _0x2cd56a);
      $("#blockName").text("");
      this.populateTable([], "#blockTable");
      this.populateTable([], "#stockTable");
    });
  }
  handleFetchBlockDataSuccess(_0x3802ec) {
    this.blockData = [];
    if (_0x3802ec && _0x3802ec.list && _0x3802ec.list.length > 0) {
      const _0x27432b = _0x3802ec.list.slice(0, this.blockCount),
        _0x1c3f28 = [];
      for (let _0x2928da = 0; _0x2928da < _0x27432b.length; _0x2928da++) {
        const _0x4e14e4 = {
          "代码": _0x27432b[_0x2928da][0],
          "简称": _0x27432b[_0x2928da][1],
          "强度": _0x27432b[_0x2928da][2],
          "涨幅": this.keepTwoDecimal(_0x27432b[_0x2928da][3]),
          "主力净额": this.NumberTransform(_0x27432b[_0x2928da][6]),
          "300W": this.NumberTransform(_0x27432b[_0x2928da][12]),
          "机构增仓": this.NumberTransform(_0x27432b[_0x2928da][14]),
          "量比": this.keepTwoDecimal(_0x27432b[_0x2928da][9])
        };
        this.blockData.push(_0x4e14e4);
        _0x1c3f28.push(_0x27432b[_0x2928da][0]);
      }
      this.fetchAllStockData(_0x1c3f28).then(_0x4fa692 => {
        this.blockData && this.blockData.length > 0 && this.blockData.forEach(_0x4edbdf => {
          if (_0x4edbdf && _0x4edbdf["代码"]) {
            const _0x417a19 = _0x4fa692.find(_0x283186 => _0x283186.blockCode === _0x4edbdf["代码"]);
            if (_0x417a19 && _0x417a19.success) {
              let _0x2f95ae = 0;
              if (_0x417a19.stockData.length > 0) {
                for (let _0x5acabb = 0; _0x5acabb < _0x417a19.stockData.length; _0x5acabb++) {
                  let _0x593f9e = _0x417a19.stockData[_0x5acabb]["连板"];
                  _0x593f9e !== "" && _0x593f9e.indexOf("昨") == -1 && _0x2f95ae++;
                }
              }
              _0x4edbdf["涨停"] = _0x2f95ae;
            } else {
              _0x4edbdf["涨停"] = 0;
            }
          }
        });
        this.populateTable(this.blockData, "#blockTable");
        this.highlightRows();
        if (this.blockData.length > 0) {
          const _0x5779df = this.blockData.some(_0x4875ed => _0x4875ed["代码"] === this.blockCode);
          let _0x2655de = this.blockData.find(_0x13061b => _0x13061b["代码"] === this.blockCode);
          _0x5779df && _0x2655de ? this.actions === "bkStockBtn" && $("#blockName").text(_0x2655de["简称"]) : (this.blockCode = this.blockData[0]["代码"], this.actions === "bkStockBtn" && $("#blockName").text(this.blockData[0]["简称"]));
        } else {
          this.blockCode = "";
          $("#blockName").text("");
        }
        if (this.actions === "bkStockBtn") {
          if (this.blockCode) {
            const _0x4a9734 = JSON.parse(localStorage.getItem("stockData_" + this.blockCode));
            _0x4a9734 ? this.populateTable(_0x4a9734, "#stockTable") : ($("#blockName").text(""), this.populateTable([], "#stockTable"));
          } else {
            this.populateTable([], "#stockTable");
          }
        } else {
          this.handleButtonClickCommon({
            target: document.querySelector("#" + this.actions)
          });
        }
      }).catch(_0xa5b508 => {
        console.error("处理板块数据时发生错误:", _0xa5b508);
        this.populateTable(this.blockData, "#blockTable");
        this.populateTable([], "#stockTable");
      });
    } else {
      this.populateTable([], "#blockTable");
      this.populateTable([], "#stockTable");
      this.blockCode = "";
      $("#blockName").text("");
    }
  }
  isCurrentDate() {
    return this.tradeDate === "";
  }
  fetchAllStockData(_0x5d30c2) {
    const _0x35e80b = 3,
      _0x4863a9 = 8000,
      _0x16df91 = (_0x4f5954, _0x3d4221 = 0) => {
        let _0x486829 = "http://localhost:5000/api/get_block_stock_list?bk_code=" + _0x4f5954 + "&Type=" + this.type + "&Order=" + this.order + "&Index=0&st=" + this.st,
          _0x1eee6c = "http://localhost:5000/api/get_block_stock_list_his?bk_code=" + _0x4f5954 + "&Type=" + this.type + "&Order=" + this.order + "&Index=0&st=" + this.st + "&old=" + this.old + "&Date=" + this.tradeDate;
        const _0x57a673 = this.isCurrentDate() ? _0x486829 : _0x1eee6c;
        return $.ajax({
          type: "get",
          url: _0x57a673,
          dataType: "json",
          cache: false,
          timeout: _0x4863a9
        }).then(_0x3682c6 => {
          let _0x255d78 = [];
          this.handleFetchStockDataSuccess(_0x3682c6, _0x255d78, _0x4f5954);
          console.debug("fetchAllStockData 获取数据成功: " + _0x4f5954);
          return {
            blockCode: _0x4f5954,
            stockData: _0x255d78,
            success: true
          };
        }).catch(_0x4961da => {
          console.error("Error fetching stock data for block " + _0x4f5954 + " (attempt " + (_0x3d4221 + 1) + "):", _0x4961da);
          _0x4961da.readyState === 0 && console.warn("Network connection issue for block " + _0x4f5954 + ". readyState=0 indicates connection failure.");
          if (_0x3d4221 < _0x35e80b) {
            const _0x484b7f = Math.pow(2, _0x3d4221) * 1000;
            console.log("Retrying fetch for block " + _0x4f5954 + " after " + _0x484b7f + "ms...");
            return new Promise(_0x51435f => setTimeout(() => {
              _0x51435f(_0x16df91(_0x4f5954, _0x3d4221 + 1));
            }, _0x484b7f));
          }
          console.error("Failed to fetch data for block " + _0x4f5954 + " after " + (_0x35e80b + 1) + " attempts.");
          return {
            blockCode: _0x4f5954,
            stockData: [],
            success: false
          };
        });
      },
      _0xc39060 = 6,
      _0x2d6fd1 = _0x32d506 => {
        const _0x22a93f = _0x32d506.map(_0xce05ba => _0x16df91(_0xce05ba));
        return Promise.all(_0x22a93f);
      },
      _0x578641 = [];
    for (let _0x42d0f0 = 0; _0x42d0f0 < _0x5d30c2.length; _0x42d0f0 += _0xc39060) {
      _0x578641.push(_0x5d30c2.slice(_0x42d0f0, _0x42d0f0 + _0xc39060));
    }
    return _0x578641.reduce((_0x18ee66, _0x4b9b0f) => {
      return _0x18ee66.then(_0x5ec587 => {
        return _0x2d6fd1(_0x4b9b0f).then(_0x120515 => {
          return _0x5ec587.concat(_0x120515);
        });
      });
    }, Promise.resolve([]));
  }
  handleFetchStockDataSuccess(_0x50ec0a, _0x495490, _0x52d224) {
    if (_0x50ec0a && _0x50ec0a.list) {
      for (let _0x354af5 = 0; _0x354af5 < _0x50ec0a.list.length; _0x354af5++) {
        (_0x50ec0a.list[_0x354af5][6] > 5 || _0x50ec0a.list[_0x354af5][23].length > 0 || Number(_0x50ec0a.list[_0x354af5][13]) > 100000000) && !_0x50ec0a.list[_0x354af5][1].includes("ST") && _0x495490.push({
          "代码": _0x50ec0a.list[_0x354af5][0],
          "简称": _0x50ec0a.list[_0x354af5][1],
          "涨幅": _0x50ec0a.list[_0x354af5][6],
          "涨速": this.keepTwoDecimal(_0x50ec0a.list[_0x354af5][9]),
          "量比": this.keepTwoDecimal(_0x50ec0a.list[_0x354af5][21]),
          "主力净额": this.NumberTransform(_0x50ec0a.list[_0x354af5][13]),
          "领次": _0x50ec0a.list[_0x354af5][40],
          "领涨": _0x50ec0a.list[_0x354af5][24],
          "连板": _0x50ec0a.list[_0x354af5][23],
          "300W": this.NumberTransform(_0x50ec0a.list[_0x354af5][50]),
          "人气": _0x50ec0a.list[_0x354af5][58],
          "变动": _0x50ec0a.list[_0x354af5][59],
          "板块": _0x50ec0a.list[_0x354af5][4],
          "机构增仓": this.NumberTransform(_0x50ec0a.list[_0x354af5][42]),
          "主力买入": this.NumberTransform(_0x50ec0a.list[_0x354af5][11]),
          "主力卖出": this.NumberTransform(_0x50ec0a.list[_0x354af5][12]),
          "封额": this.NumberTransform(_0x50ec0a.list[_0x354af5][28]),
          "最大封额": this.NumberTransform(_0x50ec0a.list[_0x354af5][29]),
          "流通市值": this.NumberTransform(_0x50ec0a.list[_0x354af5][38])
        });
      }
    } else {
      if (_0x50ec0a && _0x50ec0a.response && _0x50ec0a.response.data) {
        const _0x14e78a = _0x50ec0a.response.data;
        _0x14e78a.forEach(_0x40c004 => {
          const _0xa8d159 = _0x40c004["100"];
          let _0x44431c = _0x40c004["3"] == "2" ? "破板" : "",
            _0x5a299c = _0x40c004["6"] == undefined ? "" : _0x40c004["6"];
          (_0xa8d159[2] > 5 || _0x40c004["6"] !== "" || Number(_0xa8d159[9]) > 100000000) && !_0x40c004["2"].includes("ST") && _0x495490.push({
            "代码": _0x40c004["1"],
            "简称": _0x40c004["2"],
            "涨幅": _0xa8d159[2],
            "涨速": this.keepTwoDecimal(_0xa8d159[5]),
            "量比": this.keepTwoDecimal(_0xa8d159[17]),
            "主力净额": this.NumberTransform(_0xa8d159[9]),
            "领次": _0xa8d159[40],
            "领涨": _0x5a299c + _0x44431c,
            "连板": _0xa8d159[18],
            "300W": this.NumberTransform(_0xa8d159[50]),
            "人气": _0xa8d159[58],
            "变动": _0xa8d159[59],
            "板块": _0xa8d159[0],
            "机构增仓": this.NumberTransform(_0xa8d159[33]),
            "主力买入": this.NumberTransform(_0xa8d159[7]),
            "主力卖出": this.NumberTransform(_0xa8d159[8]),
            "封额": this.NumberTransform(_0xa8d159[21]),
            "最大封额": this.NumberTransform(_0xa8d159[22]),
            "流通市值": this.NumberTransform(_0xa8d159[28])
          });
        });
      }
    }
    localStorage.setItem("stockData_" + _0x52d224, JSON.stringify(_0x495490));
  }
  fetchStockData(_0x5cdfdf, _0x4257d3 = 0, _0xdcd82c = "") {
    let _0x4f2edb = "http://localhost:5000/api/get_block_stock_list?bk_code=" + _0x5cdfdf + "&Type=" + this.type + "&Order=" + this.order + "&Index=0&st=" + this.st,
      _0x48d664 = "http://localhost:5000/api/get_block_stock_list_his?bk_code=" + _0x5cdfdf + "&Type=" + this.type + "&Order=" + this.order + "&Index=0&st=" + this.st + "&old=" + this.old + "&Date=" + this.tradeDate;
    const _0x470669 = this.isCurrentDate() ? _0x4f2edb : _0x48d664;
    let _0x67ad9 = [];
    $.ajax({
      type: "get",
      url: _0x470669,
      dataType: "json",
      async: false,
      cache: false,
      timeout: 3000,
      success: function (_0x55ffda) {
        this.handleFetchStockDataSuccess(_0x55ffda, _0x67ad9, _0x5cdfdf);
      }.bind(this),
      error: (_0xaab0cf, _0x1f0959, _0x4a32dd) => {
        console.error("Error fetching stock data:", _0x4a32dd);
      }
    });
    if (_0x4257d3 == 1) {
      this.populateTable(_0x67ad9, "#stockTable");
    } else {
      let _0x9bd5f6 = 0;
      if (_0x67ad9.length > 0) {
        for (let _0x1df757 = 0; _0x1df757 < _0x67ad9.length; _0x1df757++) {
          let _0x2b1e98 = _0x67ad9[_0x1df757]["连板"];
          _0x2b1e98 !== "" && _0x2b1e98.indexOf("昨") == -1 && _0x9bd5f6++;
        }
      }
      return _0x9bd5f6;
    }
  }
  keepTwoDecimal(_0x5b71bd) {
    let _0x39a04f = parseFloat(_0x5b71bd);
    if (isNaN(_0x39a04f)) {
      return false;
    }
    _0x39a04f = Math.round(_0x5b71bd * 100) / 100;
    return _0x39a04f;
  }
  NumberTransform(_0x5a59dd) {
    let _0x548277 = _0x5a59dd;
    if (Math.abs(_0x5a59dd) > 100000000) {
      _0x548277 = _0x5a59dd / 100000000;
      _0x548277 = _0x548277.toFixed(2) + "亿";
    } else {
      Math.abs(_0x5a59dd) > 10000 && (_0x548277 = _0x5a59dd / 10000, _0x548277 = _0x548277.toFixed(0) + "万");
    }
    return _0x548277;
  }
  populateTable(_0x45c34c, _0x228b72) {
    const _0x185292 = $(_0x228b72);
    if (this.actions !== "bkStockBtn" && _0x228b72 === "#stockTable") {
      let _0x4d1a8a = [],
        _0x54169f = this.b5Block;
      _0x45c34c.forEach(_0xda0cd3 => {
        switch (this.actions) {
          case "ztStockBtn":
            _0xda0cd3["涨幅"] >= 9.9 && _0x4d1a8a.push(_0xda0cd3);
            break;
          case "zaStockBtn":
            _0xda0cd3["领涨"] === "破板" && _0x4d1a8a.push(_0xda0cd3);
            break;
          case "dmStockBtn":
            parseFloat(_0xda0cd3["涨幅"]) < -5 && _0x4d1a8a.push(_0xda0cd3);
            break;
          case "p5StockBtn":
            _0xda0cd3["涨幅"] > 5 && _0xda0cd3["涨幅"] < 9.8 && _0x4d1a8a.push(_0xda0cd3);
            break;
          case "b5StockBtn":
            const _0x5097ed = _0xda0cd3["板块"].split("、");
            let _0x269a23 = 0;
            _0x54169f.forEach(_0x2e7756 => {
              _0x5097ed.includes(_0x2e7756) && (_0x269a23 += 1);
            });
            _0x269a23 > 1 && _0x4d1a8a.push(_0xda0cd3);
            break;
          case "rqStockBtn":
            _0x4d1a8a.push(_0xda0cd3);
            break;
          case "jgStockBtn":
            this.convertToMillion(_0xda0cd3["机构增仓"]) > 2000 && _0x4d1a8a.push(_0xda0cd3);
            break;
          case "blStockBtn":
            _0x4d1a8a.push(_0xda0cd3);
            break;
        }
      });
      _0x45c34c = _0x4d1a8a;
    }
    const _0x21a17f = _0x185292.find("tbody").empty(),
      _0x553762 = _0x185292.find("thead").empty(),
      _0x1fa6f1 = _0x553762.find("th"),
      _0x24597c = _0x1fa6f1.length;
    $.tablesorter.addParser({
      id: "chineseNumeric",
      is: function (_0x33ca8f) {
        return /[\u4e00-\u9fa5]/.test(_0x33ca8f) && (_0x33ca8f.includes("亿") || _0x33ca8f.includes("万"));
      },
      format: function (_0x3c58d0) {
        const _0x9bb1bb = _0x3c58d0.replace(/[^\d.-\u4e00-\u9fa5]/g, "");
        if (_0x3c58d0.includes("亿")) {
          const _0x45a24b = parseFloat(_0x9bb1bb);
          return isNaN(_0x45a24b) ? 0 : _0x45a24b * 100000000;
        } else {
          if (_0x3c58d0.includes("万")) {
            const _0x4f439c = parseFloat(_0x9bb1bb);
            return isNaN(_0x4f439c) ? 0 : _0x4f439c * 10000;
          }
        }
        const _0x150277 = parseFloat(_0x9bb1bb);
        return isNaN(_0x150277) ? 0 : _0x150277;
      },
      type: "numeric"
    });
    _0x185292.trigger("destroy");
    if (_0x45c34c.length === 0) {
      const _0xe87f07 = $("<tr>").append($("<td>").attr("colspan", _0x24597c).text("暂无数据"));
      _0x21a17f.append(_0xe87f07);
      return;
    }
    if (_0x1fa6f1.length === 0) {
      const _0x5e9c81 = $("<tr>"),
        _0x5a5851 = Object.keys(_0x45c34c[0]);
      _0x5a5851.forEach(_0x4a1875 => {
        const _0xf77a01 = $("<th>").text(_0x4a1875);
        _0x4a1875 === "代码" && _0x185292.attr("id") === "blockTable" && _0xf77a01.css("display", "none");
        _0x5e9c81.append(_0xf77a01);
      });
      _0x553762.empty().append(_0x5e9c81);
    }
    _0x45c34c.forEach(_0x499d7b => {
      const _0x2d4c35 = $("<tr>");
      Object.keys(_0x45c34c[0]).forEach(_0x4d52fb => {
        const _0xa2ebeb = _0x499d7b[_0x4d52fb];
        var _0x30bbfc = _0xa2ebeb !== undefined ? _0xa2ebeb : "N/A";
        _0x4d52fb === "领涨" && _0x30bbfc === "N/A" && (_0x30bbfc = "");
        var _0x6c77e5 = $("<td>").text(_0x30bbfc);
        _0x4d52fb === "领涨" && _0xa2ebeb && _0xa2ebeb.indexOf("破板") !== -1 && _0x6c77e5.css("color", "lightgreen");
        if (_0x4d52fb === "涨速" || _0x4d52fb === "涨幅" || _0x4d52fb === "涨停") {
          if (parseFloat(_0xa2ebeb) > 0) {
            _0x6c77e5.css("color", "red");
          } else {
            parseFloat(_0xa2ebeb) < 0 && _0x6c77e5.css("color", "lightgreen");
          }
        }
        if (_0x4d52fb === "主力买入" || _0x4d52fb === "机构增仓" || _0x4d52fb === "主力净额" || _0x4d52fb === "300W") {
          const _0x1771c1 = this.convertToMillion(_0xa2ebeb);
          if (!isNaN(_0x1771c1)) {
            if (_0x1771c1 > 0) {
              _0x6c77e5.css("color", "red");
            } else {
              _0x1771c1 < 0 && _0x6c77e5.css("color", "lightgreen");
            }
          }
        }
        _0x4d52fb === "主力卖出" && _0x6c77e5.css("color", "lightgreen");
        _0x4d52fb === "连板" && _0xa2ebeb && typeof _0xa2ebeb === "string" && _0xa2ebeb.indexOf("首板") !== -1 && _0x6c77e5.css("color", "#FFFF99");
        if (_0x4d52fb === "量比") {
          const _0x436b8a = parseFloat(_0xa2ebeb);
          !isNaN(_0x436b8a) && _0x436b8a > 2.5 && _0x6c77e5.css("color", "#FFFF99");
        }
        (_0x4d52fb === "代码" || _0x4d52fb === "简称") && _0x6c77e5.css("padding-right", "2px");
        if (_0x4d52fb === "领次") {
          _0x6c77e5.addClass("center-align");
        } else {
          this.isNumeric(_0xa2ebeb) ? _0x6c77e5.addClass("right-align") : _0x6c77e5.addClass("center-align");
        }
        _0x4d52fb === "代码" && _0x185292.attr("id") === "blockTable" && _0x6c77e5.css("display", "none");
        _0x4d52fb === "涨停" && _0x6c77e5.addClass("center-align");
        _0x2d4c35.append(_0x6c77e5);
      });
      _0x2d4c35.on("click", () => {
        var _0x10f060 = _0x2d4c35.find("td:first").text();
        this.changeCss(_0x2d4c35, _0x10f060);
      });
      _0x21a17f.append(_0x2d4c35);
    });
    const _0x5d8309 = Object.keys(_0x45c34c[0]),
      _0x57d492 = {};
    _0x5d8309.forEach((_0x2d9131, _0x1e2471) => {
      ["主力净额", "300W", "机构增仓", "量比"].includes(_0x2d9131) && (_0x57d492[_0x1e2471] = {
        sorter: "chineseNumeric"
      });
    });
    _0x185292.tablesorter({
      headers: _0x57d492
    });
    _0x185292.trigger("update");
    _0x185292.attr("id") === "stockTable" && this.updateTableColumns();
  }
  convertToMillion(_0x2b4eb7) {
    if (_0x2b4eb7 === "-") {
      return 0;
    }
    let _0x47bffc = "";
    try {
      _0x47bffc = _0x2b4eb7.replace(/[^\d.亿万千-]/g, "");
    } catch (_0x4ab916) {
      console.log("value:" + _0x2b4eb7 + ",Error replace value");
      return 0;
    }
    if (_0x47bffc.includes("亿")) {
      const _0x50b140 = _0x47bffc.split("亿"),
        _0x4058c3 = parseFloat(_0x50b140[0]);
      return _0x4058c3 * 10000;
    } else {
      if (_0x47bffc.includes("万")) {
        const _0x428512 = _0x47bffc.split("万"),
          _0x498107 = parseFloat(_0x428512[0]);
        return _0x498107;
      } else {
        const _0x1edd60 = parseFloat(_0x47bffc);
        return isNaN(_0x1edd60) ? 0 : _0x1edd60;
      }
    }
  }
  updateTableColumns() {
    const _0x37f7f6 = JSON.parse(localStorage.getItem("selectedColumns_" + this.type)) || [],
      _0x3dab88 = document.querySelectorAll("#stockTable thead th"),
      _0x59c918 = document.querySelectorAll("#stockTable tbody tr");
    _0x37f7f6.length === 0 && _0x37f7f6.push(...Array.from(_0x3dab88).map(_0x557e0c => _0x557e0c.innerText));
    _0x3dab88.forEach(function (_0x3ff77a, _0x53d275) {
      const _0x475240 = _0x3ff77a.innerText;
      _0x37f7f6.includes(_0x475240) ? (_0x3ff77a.style.display = "", _0x59c918.forEach(function (_0x2c4450) {
        _0x2c4450.children[_0x53d275].style.display = "";
      })) : (_0x3ff77a.style.display = "none", _0x59c918.forEach(function (_0x4c2b1b) {
        _0x4c2b1b.children[_0x53d275].style.display = "none";
      }));
    });
  }
  changeCss(_0x171121, _0x374a10) {
    if (!_0x171121 || !_0x171121.length) {
      return;
    }
    this.selectedRow && this.selectedRow.css("backgroundColor", "");
    if (this.isInTdxw()) {
      const _0x263998 = "http://www.treeid/code_" + _0x374a10;
      window.location.href = _0x263998;
    }
    this.selectedRow = _0x171121;
    this.selectedRow.css("backgroundColor", "#800080");
  }
  isInTdxw() {
    let _0x3c33e5 = window.navigator.userAgent,
      _0xc5acd2 = /.*TdxW.*/i;
    return _0xc5acd2.test(_0x3c33e5);
  }
  isNumeric(_0x238ff1) {
    return /^-?\d+(\.\d+)?$/.test(_0x238ff1);
  }
  highlightRows() {
    const _0x5d9547 = this.blockTable.find("tr");
    _0x5d9547.each((_0x311b19, _0x421f83) => {
      _0x311b19 < 5 && $(_0x421f83).addClass("highlight" + (_0x311b19 + 1));
    });
  }
  handleHotBlockSettingClick() {
    let _0x165018 = localStorage.getItem("hotBlocks");
    !_0x165018 ? _0x165018 = this.b5Block.join(" ") : this.b5Block = _0x165018.split(" ");
    let _0x16dd1d = localStorage.getItem("processBlocksNum");
    !_0x16dd1d && (_0x16dd1d = this.processBlocksNum);
    const _0x5f5013 = localStorage.getItem("blockCount") || this.blockCount || 20,
      _0x54d366 = localStorage.getItem("st") || this.st || 30,
      _0x1e02f0 = localStorage.getItem("refreshInterval") || 10000,
      _0x11facb = localStorage.getItem("timerEnabled") !== "false";
    let _0xf3d1a2 = "\n                    <div id=\"hotBlockSettingsModal\" class=\"modal\">\n                        <div class=\"modal-content\">\n                            <div class=\"header\">\n                                <h3>热点板块设置</h3>\n                                <span class=\"close-btn\">&times;</span>\n                            </div>\n                            <div class=\"content\">\n                                <label for=\"hotBlocksInput\">请输入热点板块名称，用空格分隔：</label>\n                                <textarea id=\"hotBlocksInput\" rows=\"2\" style=\"width: 100%;\">" + _0x165018 + "</textarea>\n                                <br/><br/>\n                                <div style=\"display: flex; align-items: center; gap: 20px;\">\n                                    <div>\n                                        <label for=\"blockCountInput\">显示板块数：</label>\n                                        <input type=\"number\" id=\"blockCountInput\" value=\"" + _0x5f5013 + "\" min=\"1\" max=\"100\" style=\"width: 4ch;\">\n                                    </div>\n                                    <div>\n                                        <label for=\"processBlocksNumInput\">处理板块数：</label>\n                                        <input type=\"number\" id=\"processBlocksNumInput\" value=\"" + _0x16dd1d + "\" min=\"1\" max=\"50\" style=\"width: 4ch;\">\n                                    </div>\n                                </div>\n                                <br/>\n                                <label for=\"stInput\">获取股票数量：</label>\n                                <input type=\"number\" id=\"stInput\" value=\"" + _0x54d366 + "\" min=\"1\" max=\"200\" style=\"width: 4ch;\">\n                                <br/><br/>\n                                <div style=\"display: flex; align-items: center; gap: 10px;\">\n                                    <input type=\"checkbox\" id=\"timerEnabledCheckbox\" " + (_0x11facb ? "checked" : "") + ">\n                                    <label for=\"timerEnabledCheckbox\" style=\"margin: 0;\">定时器开启</label>\n                                    <div id=\"timerSettings\" style=\"display: " + (_0x11facb ? "flex" : "none") + "; align-items: center; gap: 10px;\">\n                                        <label for=\"refreshIntervalInput\" style=\"margin: 0;\">定时刷新时间：</label>\n                                        <input type=\"number\" id=\"refreshIntervalInput\" value=\"" + _0x1e02f0 + "\" min=\"1000\" max=\"60000\" style=\"width: 8ch;\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"buttons\">\n                                <button id=\"saveHotBlocks\">保存</button>\n                                <button id=\"cancelHotBlocks\">取消</button>\n                            </div>\n                        </div>\n                    </div>\n                ";
    $("body").append(_0xf3d1a2);
    $("#hotBlockSettingsModal").show();
    $("#timerEnabledCheckbox").off("change").on("change", function () {
      this.checked ? $("#timerSettings").css("display", "flex") : $("#timerSettings").hide();
    });
    $("#saveHotBlocks").off("click").on("click", () => {
      const _0x4c21d5 = $("#hotBlocksInput").val(),
        _0x26ea3e = _0x4c21d5.split(" ").filter(_0x3b9696 => _0x3b9696.trim() !== "");
      localStorage.setItem("hotBlocks", _0x26ea3e.join(" "));
      this.b5Block = _0x26ea3e;
      const _0x2ecee4 = $("#processBlocksNumInput").val();
      localStorage.setItem("processBlocksNum", _0x2ecee4);
      this.processBlocksNum = parseInt(_0x2ecee4);
      const _0x92652 = $("#blockCountInput").val();
      localStorage.setItem("blockCount", _0x92652);
      this.blockCount = parseInt(_0x92652);
      const _0x50b24d = $("#stInput").val();
      localStorage.setItem("st", _0x50b24d);
      this.st = parseInt(_0x50b24d);
      const _0x57c284 = $("#timerEnabledCheckbox").is(":checked");
      localStorage.setItem("timerEnabled", _0x57c284);
      _0x57c284 ? $("#refreshButtonContainer").hide() : $("#refreshButtonContainer").show();
      if (_0x57c284) {
        const _0x4176c5 = $("#refreshIntervalInput").val();
        localStorage.setItem("refreshInterval", _0x4176c5);
        this.refreshIntervalId && clearInterval(this.refreshIntervalId);
        this.refreshIntervalId = setInterval(() => {
          this.tradeDate === "" && this.fetchBlockData();
        }, parseInt(_0x4176c5));
      } else {
        this.refreshIntervalId && (clearInterval(this.refreshIntervalId), this.refreshIntervalId = null);
      }
      $("#hotBlockSettingsModal").hide().remove();
      this.actions === "b5StockBtn" && this.fetchStockData();
    });
    $("#cancelHotBlocks").off("click").on("click", () => {
      $("#hotBlockSettingsModal").hide().remove();
    });
    $(".close-btn").off("click").on("click", () => {
      $("#hotBlockSettingsModal").hide().remove();
    });
  }
  handleSettingClick() {
    $("#settingsModal").length && $("#settingsModal").remove();
    const _0x52ab3c = $("#stockTable thead th"),
      _0xbe78da = _0x52ab3c.length,
      _0x15be52 = Math.ceil(_0xbe78da / 2),
      _0x148b89 = localStorage.getItem("selectedColumns_" + this.type),
      _0x40df2b = !_0x148b89;
    let _0x592ee4 = "<div id=\"settingsModal\" class=\"modal\">\n                                            <div class=\"modal-content\">\n                                                <div class=\"header\">\n                                                    <h3>选择股票显示列标题</h3>\n                                                    <span class=\"close-btn\">&times;</span>\n                                                </div>\n                                                <div class=\"columns-container\">";
    _0x592ee4 += "<div class=\"column\">";
    for (let _0x426d24 = 0; _0x426d24 < _0x15be52; _0x426d24++) {
      const _0x1b52d0 = _0x52ab3c[_0x426d24].innerText,
        _0x2f69bb = _0x148b89 ? JSON.parse(_0x148b89).includes(_0x1b52d0) : _0x40df2b;
      _0x592ee4 += "<div><label><input type=\"checkbox\" value=\"" + _0x1b52d0 + "\" " + (_0x2f69bb ? "checked" : "") + ">" + _0x1b52d0 + "</label></div>";
    }
    _0x592ee4 += "</div>";
    _0x592ee4 += "<div class=\"column\">";
    for (let _0x420778 = _0x15be52; _0x420778 < _0xbe78da; _0x420778++) {
      const _0x29cd8b = _0x52ab3c[_0x420778].innerText,
        _0x412367 = _0x148b89 ? JSON.parse(_0x148b89).includes(_0x29cd8b) : _0x40df2b;
      _0x592ee4 += "<div><label><input type=\"checkbox\" value=\"" + _0x29cd8b + "\" " + (_0x412367 ? "checked" : "") + ">" + _0x29cd8b + "</label></div>";
    }
    _0x592ee4 += "</div>";
    _0x592ee4 += "</div>";
    _0x592ee4 += "<div class=\"buttons\">";
    _0x592ee4 += "<button id=\"selectAll\">全选</button>";
    _0x592ee4 += "<button id=\"selectNone\">全否</button>";
    _0x592ee4 += "<button id=\"saveSettings\">确定</button>";
    _0x592ee4 += "</div>";
    _0x592ee4 += "</div></div>";
    $("body").append(_0x592ee4);
    $("#settingsModal").show();
    this.bindModalButtonEvents();
  }
  bindModalButtonEvents() {
    $("#selectAll").off("click").on("click", () => {
      $("#settingsModal input[type=\"checkbox\"]").prop("checked", true);
    });
    $("#selectNone").off("click").on("click", () => {
      $("#settingsModal input[type=\"checkbox\"]").prop("checked", false);
    });
    $("#saveSettings").off("click").on("click", () => {
      const _0x37aa16 = [];
      $("#settingsModal input[type=\"checkbox\"]:checked").each(function () {
        _0x37aa16.push(this.value);
      });
      localStorage.setItem("selectedColumns_" + this.type, JSON.stringify(_0x37aa16));
      $("#settingsModal").hide().remove();
      this.updateTableColumns();
    });
    $(".close-btn").off("click").on("click", () => {
      $("#settingsModal").hide().remove();
    });
    $(document).on("click", _0x541d66 => {
      $(_0x541d66.target).closest("#settingsModal").length && (_0x541d66.stopPropagation(), ($(_0x541d66.target).hasClass("close-btn") || $(_0x541d66.target).attr("id") === "saveSettings") && $("#settingsModal").hide().remove());
    });
  }
  handlePrevDateClick() {
    this.handleDateChange(-1);
  }
  handleNextDateClick() {
    this.handleDateChange(1);
  }
  updateDateDisplay() {
    const _0x564cb0 = this.datePicker.val(),
      _0x2805a9 = this.getTodayDate();
    _0x564cb0 === _0x2805a9 ? this.datePicker.css({
      "background-color": "#8B0000",
      color: "white",
      "font-weight": "bold"
    }) : this.datePicker.css({
      "background-color": "#1c1d21",
      color: "white",
      "font-weight": "normal"
    });
  }
  handleDateChange(_0xcd9031) {
    if (typeof _0xcd9031 === "object" && _0xcd9031.target) {
      const _0x355d16 = _0xcd9031.target.value;
      if (_0x355d16 === this.getTodayDate()) {
        this.tradeDate = "";
      } else {
        let _0x173cc5 = this.getTradeDateNew(_0x355d16);
        this.tradeDate = _0x173cc5 !== this.todayDate ? _0x173cc5 : "";
        _0xcd9031.target.value = this.tradeDate;
      }
    } else {
      if (typeof _0xcd9031 === "number") {
        const _0x32b924 = $("#datePicker"),
          _0x121be9 = _0x32b924.val(),
          _0x4e2f3f = this.getTradeDateNew(_0x121be9, _0xcd9031);
        this.tradeDate = _0x4e2f3f !== this.todayDate ? _0x4e2f3f : "";
        _0x32b924.val(_0x4e2f3f);
      }
    }
    this.updateDateDisplay();
    this.fetchBlockData();
  }
  handleBlockRowClick(_0x55a9d1) {
    const _0x5658ba = $(_0x55a9d1.target).closest("tr"),
      _0x1db141 = _0x5658ba.find("td:first").text();
    this.blockCode = _0x1db141;
    const _0x3b770a = JSON.parse(localStorage.getItem("stockData_" + this.blockCode));
    _0x3b770a ? this.populateTable(_0x3b770a, "#stockTable") : this.fetchStockData(_0x1db141, 1);
    if (this.blockData && this.blockData.length > 0) {
      let _0x2711ca = this.blockData.find(_0x4c4221 => _0x4c4221["代码"] === this.blockCode);
      _0x2711ca && $("#blockName").text(_0x2711ca["简称"]);
    }
  }
  handleCleanClick() {
    localStorage.clear();
  }
  handleExportClick() {
    const _0xdca127 = $("#stockTable"),
      _0x2b48bc = _0xdca127.find("tr");
    let _0x272c8d = "";
    _0x2b48bc.each((_0x2164be, _0x579bdf) => {
      if (_0x2164be === 0) {
        return;
      }
      const _0x229b27 = $(_0x579bdf).find("td").first();
      if (_0x229b27.length > 0) {
        const _0x4188b2 = _0x229b27.text().trim();
        let _0x18760b = "2#";
        if (_0x4188b2.startsWith("6")) {
          _0x18760b = "1#";
        } else {
          (_0x4188b2.startsWith("3") || _0x4188b2.startsWith("0")) && (_0x18760b = "0#");
        }
        _0x272c8d += "" + _0x18760b + _0x4188b2 + "|";
      }
    });
    _0x272c8d.length > 7 && (_0x272c8d = _0x272c8d.slice(0, -1), window.location = "http://www.treeid/AddToBlock_" + _0x272c8d);
  }
  handleButtonClickCommon(_0x2e4748) {
    const _0xa56f77 = _0x2e4748.target.id,
      _0x2967c6 = document.querySelectorAll(".button-container .btn");
    _0x2967c6.forEach(_0x307c59 => _0x307c59.classList.remove("active"));
    _0x2e4748.target.classList.add("active");
    this.actions = _0xa56f77;
    this.populateTable(this.blockData || [], "#blockTable");
    if (this.actions === "bkStockBtn") {
      if (this.blockData && this.blockData.length > 0) {
        let _0x2524f2 = this.blockData.find(_0x2ed115 => _0x2ed115["代码"] === this.blockCode);
        _0x2524f2 ? $("#blockName").text(_0x2524f2["简称"]) : (this.blockCode = this.blockData[0]["代码"], $("#blockName").text(this.blockData[0]["简称"]));
      } else {
        this.blockCode = "";
        $("#blockName").text("");
      }
      const _0x3b5fcf = JSON.parse(localStorage.getItem("stockData_" + this.blockCode)) || [];
      this.populateTable(_0x3b5fcf, "#stockTable");
      return;
    }
    const _0x276fc0 = this.blockData && this.blockData.length > 0 ? this.blockData.slice(0, this.processBlocksNum) : [],
      _0x549d53 = this.buttonEvents[_0xa56f77];
    _0x549d53 ? $("#blockName").text(_0x549d53) : $("#blockName").text("");
    let _0x397079 = [];
    _0x276fc0.length > 0 && (_0x276fc0.forEach(_0x2c0b2c => {
      const _0x35163e = JSON.parse(localStorage.getItem("stockData_" + _0x2c0b2c["代码"]));
      _0x35163e && Array.isArray(_0x35163e) && (_0x397079 = _0x397079.concat(_0x35163e));
    }), _0x397079 = _0x397079.filter((_0x49741c, _0x4c5c2a, _0x567859) => _0x4c5c2a === _0x567859.findIndex(_0x2f2210 => _0x2f2210["代码"] === _0x49741c["代码"])));
    this.populateTable(_0x397079, "#stockTable");
  }
  getTradeDateNew(_0x5dd90d, _0x3bb046 = 0) {
    if (!this.tradedaylist || this.tradedaylist.length === 0) {
      this.fetchTradeDateList(false);
      if (!this.tradedaylist || this.tradedaylist.length === 0) {
        return _0x5dd90d;
      }
    }
    let _0x36b4f5 = _0x5dd90d;
    if (_0x3bb046 !== 0) {
      let _0x25038e = new Date(_0x5dd90d);
      _0x25038e.setTime(_0x25038e.getTime() + _0x3bb046 * 24 * 60 * 60 * 1000);
      _0x36b4f5 = this.formatDate(_0x25038e);
    }
    _0x36b4f5 = _0x36b4f5 > this.todayDate ? this.todayDate : _0x36b4f5;
    let _0x5c5ebc = this.todayDate,
      _0x22b360 = false;
    if (_0x3bb046 <= 0) {
      for (let _0x3d31ee = 0; _0x3d31ee < this.tradedaylist.length; _0x3d31ee++) {
        if (this.tradedaylist[_0x3d31ee] <= _0x36b4f5) {
          _0x5c5ebc = this.tradedaylist[_0x3d31ee];
          _0x22b360 = true;
          break;
        }
      }
    } else {
      for (let _0x43129e = this.tradedaylist.length - 1; _0x43129e >= 0; _0x43129e--) {
        if (this.tradedaylist[_0x43129e] >= _0x36b4f5) {
          _0x5c5ebc = this.tradedaylist[_0x43129e];
          _0x22b360 = true;
          break;
        }
      }
    }
    !_0x22b360 && (_0x5c5ebc = _0x36b4f5);
    return _0x5c5ebc;
  }
  getTodayDate() {
    const _0x5648bf = new Date(),
      _0x27f5c7 = _0x5648bf.getFullYear(),
      _0x16b660 = String(_0x5648bf.getMonth() + 1).padStart(2, "0"),
      _0x2944dc = String(_0x5648bf.getDate()).padStart(2, "0");
    return _0x27f5c7 + "-" + _0x16b660 + "-" + _0x2944dc;
  }
  formatDate(_0x3adde1) {
    const _0x10f7c9 = _0x3adde1.getFullYear(),
      _0x4f963d = String(_0x3adde1.getMonth() + 1).padStart(2, "0"),
      _0x19eb17 = String(_0x3adde1.getDate()).padStart(2, "0");
    return _0x10f7c9 + "-" + _0x4f963d + "-" + _0x19eb17;
  }
}
$(document).ready(() => {
  console.log("ready");
  new BlockTableManager();
});