//Tue May 05 2026 05:21:17 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x1a58f5 = _0x4727;
(function (_0x3ead01, _0x15bce4) {
  const _0x1d5ce9 = _0x4727;
  const _0x2c5123 = _0x3ead01();
  while (true) {
    try {
      const _0x2badb6 = -parseInt(_0x1d5ce9(826)) / 1 + parseInt(_0x1d5ce9(1088)) / 2 + -parseInt(_0x1d5ce9(580)) / 3 * (parseInt(_0x1d5ce9(773)) / 4) + -parseInt(_0x1d5ce9(883)) / 5 * (parseInt(_0x1d5ce9(1167)) / 6) + -parseInt(_0x1d5ce9(1268)) / 7 + -parseInt(_0x1d5ce9(1042)) / 8 * (parseInt(_0x1d5ce9(743)) / 9) + -parseInt(_0x1d5ce9(919)) / 10 * (-parseInt(_0x1d5ce9(778)) / 11);
      if (_0x2badb6 === _0x15bce4) {
        break;
      } else {
        _0x2c5123.push(_0x2c5123.shift());
      }
    } catch (_0x16819f) {
      _0x2c5123.push(_0x2c5123.shift());
    }
  }
})(_0x30ac, 963985);
const querystring = require(_0x1a58f5(1139) + "g");
const axios = require(_0x1a58f5(484));
const fs = require("fs");
const path = require(_0x1a58f5(599));
const {
  SocksProxyAgent
} = require(_0x1a58f5(1041) + _0x1a58f5(1236));
const dns = require(_0x1a58f5(1054));
const {
  promisify
} = require(_0x1a58f5(1120));
const util = require(_0x1a58f5(1120));
dns[_0x1a58f5(1288) + _0x1a58f5(695) + "r"](_0x1a58f5(1112));
dns[_0x1a58f5(933)]([_0x1a58f5(1282), _0x1a58f5(488) + _0x1a58f5(971), _0x1a58f5(776), _0x1a58f5(1179)]);
const writeFile = promisify(fs[_0x1a58f5(1216)]);
const copyFile = promisify(fs[_0x1a58f5(1065)]);
const CURRENT_VERSION = _0x1a58f5(519);
const UPDATE_CHECK_URL = _0x1a58f5(735) + _0x1a58f5(640) + _0x1a58f5(477) + _0x1a58f5(541);
let updateInfo = null;
let localPublicIP = null;
let GLOBAL_TOTAL_EARNED_COINS = 0;
function parseTaskConfig() {
  const _0x534d1a = _0x1a58f5;
  const _0x12cb3b = {
    FAeZJ: function (_0x457b74, _0xc08834) {
      return _0x457b74 < _0xc08834;
    },
    vxLuB: function (_0x56b7e3, _0x10f8dd) {
      return _0x56b7e3(_0x10f8dd);
    },
    dEJhR: function (_0x3bcc72, _0x1d18ce) {
      return _0x3bcc72(_0x1d18ce);
    },
    Dzeru: function (_0x4feb9d, _0x517fc4) {
      return _0x4feb9d <= _0x517fc4;
    },
    aHBtm: _0x534d1a(848),
    csRTd: _0x534d1a(1064) + _0x534d1a(843) + _0x534d1a(820),
    UrEqV: _0x534d1a(636) + _0x534d1a(1174) + _0x534d1a(691) + _0x534d1a(1229) + _0x534d1a(961),
    dlEYJ: _0x534d1a(1001),
    vavFI: _0x534d1a(604)
  };
  const _0x29ee4f = process[_0x534d1a(666)][_0x534d1a(1211)] || _0x12cb3b[_0x534d1a(729)];
  if (!_0x29ee4f) {
    console[_0x534d1a(789)](_0x12cb3b[_0x534d1a(709)]);
    return [];
  }
  try {
    return _0x29ee4f[_0x534d1a(818)](";")[_0x534d1a(1079)](_0x3bdc24 => {
      const _0x179135 = _0x534d1a;
      const _0x5b0ea2 = _0x3bdc24[_0x179135(818)](",")[_0x179135(1079)](_0x3c5fb9 => _0x3c5fb9[_0x179135(581)]());
      if (_0x12cb3b[_0x179135(540)](_0x5b0ea2[_0x179135(1182)], 2)) {
        return null;
      }
      const _0x5d986b = _0x5b0ea2[0];
      const _0x524f0f = _0x12cb3b[_0x179135(1259)](parseInt, _0x5b0ea2[1]);
      if (!_0x5d986b || _0x12cb3b[_0x179135(503)](isNaN, _0x524f0f) || _0x12cb3b[_0x179135(1004)](_0x524f0f, 0)) {
        return null;
      }
      return {
        type: _0x5d986b,
        targetCount: _0x524f0f
      };
    })[_0x534d1a(1093)](_0x5108f7 => _0x5108f7 !== null);
  } catch (_0x3a4eb2) {
    console[_0x534d1a(789)](_0x12cb3b[_0x534d1a(922)]);
    return [{
      type: _0x12cb3b[_0x534d1a(602)],
      targetCount: 1
    }, {
      type: _0x12cb3b[_0x534d1a(1077)],
      targetCount: 2
    }];
  }
}
const ENV_CONFIG = {
  TASK_CONFIG: parseTaskConfig(),
  CYCLE_ROUNDS: parseInt(process[_0x1a58f5(666)][_0x1a58f5(1105) + _0x1a58f5(832)] || 0),
  WATCH_MIN: parseInt(process[_0x1a58f5(666)][_0x1a58f5(644) + "IN"] || 20),
  WATCH_MAX: parseInt(process[_0x1a58f5(666)][_0x1a58f5(644) + "AX"] || 31),
  AD_FAIL_LIMIT: parseInt(process[_0x1a58f5(666)][_0x1a58f5(775) + _0x1a58f5(481)] || 5),
  PHP_PROXY_URL: process[_0x1a58f5(666)][_0x1a58f5(1026) + _0x1a58f5(659)] || _0x1a58f5(1145) + _0x1a58f5(1037) + _0x1a58f5(1066) + _0x1a58f5(1269),
  PHP_PROXY_URL_DOUBLE: process[_0x1a58f5(666)][_0x1a58f5(1026) + _0x1a58f5(499)] || process[_0x1a58f5(666)][_0x1a58f5(1026) + _0x1a58f5(659)] || _0x1a58f5(1145) + _0x1a58f5(1037) + _0x1a58f5(1066) + _0x1a58f5(563),
  PHP_PROXY_URL_BASIC: process[_0x1a58f5(666)][_0x1a58f5(1026) + _0x1a58f5(733)] || process[_0x1a58f5(666)][_0x1a58f5(1026) + _0x1a58f5(659)] || _0x1a58f5(1145) + _0x1a58f5(1037) + _0x1a58f5(1066) + _0x1a58f5(653),
  CONTINUOUS_1COIN_LIMIT: parseInt(process[_0x1a58f5(666)][_0x1a58f5(1154) + _0x1a58f5(805) + _0x1a58f5(959)] || 3),
  LOG_TARGET: process[_0x1a58f5(666)][_0x1a58f5(751) + _0x1a58f5(976)] || "DE",
  LOG_LEVEL: process[_0x1a58f5(666)][_0x1a58f5(1285) + "EL"] || _0x1a58f5(606),
  PROXY_CONNECT_TIMEOUT: parseInt(process[_0x1a58f5(666)][_0x1a58f5(1218) + _0x1a58f5(1178)] || 3000),
  PROXY_KEEP_ALIVE: process[_0x1a58f5(666)][_0x1a58f5(1096) + _0x1a58f5(693)] === _0x1a58f5(603) || true,
  PLATFORM_CONFIG: {
    KUAISHOU: {
      name: "普通",
      accountInfoUrl: _0x1a58f5(871) + _0x1a58f5(1111) + _0x1a58f5(656) + _0x1a58f5(655) + _0x1a58f5(543) + _0x1a58f5(664) + _0x1a58f5(520),
      host: _0x1a58f5(831) + _0x1a58f5(1246) + "om",
      kpn: _0x1a58f5(525)
    },
    NEBULA: {
      name: "极速",
      accountInfoUrl: _0x1a58f5(558) + _0x1a58f5(1134) + _0x1a58f5(868) + _0x1a58f5(549) + _0x1a58f5(1262) + _0x1a58f5(1075) + _0x1a58f5(511) + _0x1a58f5(1071),
      host: _0x1a58f5(1339) + _0x1a58f5(532),
      kpn: _0x1a58f5(1009)
    }
  }
};
function logDev(_0x11569f, _0x317770 = null) {
  const _0x76ab25 = _0x1a58f5;
  const _0x16d129 = {
    EBxGs: function (_0x3eb148, _0x541370) {
      return _0x3eb148 !== _0x541370;
    },
    hUgzd: _0x76ab25(956),
    cwvOj: function (_0x45599d, _0x26fb47) {
      return _0x45599d === _0x26fb47;
    },
    xZeZk: _0x76ab25(544)
  };
  if (_0x16d129[_0x76ab25(574)](ENV_CONFIG[_0x76ab25(1192)], _0x16d129[_0x76ab25(1313)])) {
    return;
  }
  console[_0x76ab25(789)](_0x76ab25(1168) + " " + _0x11569f);
  _0x317770 && console[_0x76ab25(789)](_0x76ab25(792) + util[_0x76ab25(948)](_0x317770, {
    depth: _0x16d129[_0x76ab25(527)](ENV_CONFIG[_0x76ab25(1163)], _0x16d129[_0x76ab25(1341)]) ? 5 : 2
  }));
}
function logUser(_0x49e274, _0x35d55a = _0x1a58f5(829)) {
  const _0x561565 = _0x1a58f5;
  const _0x1a5ab5 = {
    info: "ℹ️",
    success: "✅",
    warn: "⚠️",
    error: "❌"
  };
  const _0x9b94b6 = _0x1a5ab5[_0x35d55a] || _0x1a5ab5[_0x561565(829)];
  console[_0x561565(789)](_0x9b94b6 + " " + _0x49e274);
}
function _0x4727(_0x144e56, _0xfa464a) {
  const _0x1604b9 = _0x30ac();
  _0x4727 = function (_0x12e40d, _0x2e7650) {
    _0x12e40d = _0x12e40d - 460;
    let _0x56f71d = _0x1604b9[_0x12e40d];
    return _0x56f71d;
  };
  return _0x4727(_0x144e56, _0xfa464a);
}
function logError(_0x4e7b06, _0x3d298e, _0x272283 = "") {
  const _0x362e91 = _0x1a58f5;
  const _0x4f2c63 = {
    KaZxX: function (_0x339133, _0x4a1acc, _0x4e3e95) {
      return _0x339133(_0x4a1acc, _0x4e3e95);
    },
    fPVpy: _0x362e91(486),
    KuqRv: function (_0x181830, _0x13ca93) {
      return _0x181830 === _0x13ca93;
    },
    STiaO: _0x362e91(956),
    bAMHr: _0x362e91(836) + "4",
    AXDHN: _0x362e91(544),
    PidYz: function (_0x35fd62, _0x2f9f43) {
      return _0x35fd62 || _0x2f9f43;
    },
    TZqUe: _0x362e91(568)
  };
  _0x4f2c63[_0x362e91(1253)](logUser, _0x4e7b06, _0x4f2c63[_0x362e91(625)]);
  if (_0x4f2c63[_0x362e91(1196)](ENV_CONFIG[_0x362e91(1192)], _0x4f2c63[_0x362e91(1013)])) {
    const _0x495642 = _0x4f2c63[_0x362e91(551)][_0x362e91(818)]("|");
    let _0xad8173 = 0;
    while (true) {
      switch (_0x495642[_0xad8173++]) {
        case "0":
          console[_0x362e91(789)](_0x362e91(1144) + (_0x3d298e[_0x362e91(763)] || "无"));
          continue;
        case "1":
          _0x4f2c63[_0x362e91(1196)](ENV_CONFIG[_0x362e91(1163)], _0x4f2c63[_0x362e91(1043)]) && _0x3d298e[_0x362e91(917)] && console[_0x362e91(789)](_0x362e91(801) + _0x3d298e[_0x362e91(917)][_0x362e91(1024)](0, 800));
          continue;
        case "2":
          _0x3d298e[_0x362e91(1119)] && (console[_0x362e91(789)](_0x362e91(1270) + (_0x3d298e[_0x362e91(1119)][_0x362e91(1058)] || "无")), console[_0x362e91(789)](_0x362e91(887) + util[_0x362e91(948)](_0x3d298e[_0x362e91(1119)][_0x362e91(715)], {
            depth: 2
          })));
          continue;
        case "3":
          console[_0x362e91(789)](_0x362e91(476) + _0x362e91(1053) + _0x4f2c63[_0x362e91(1295)](_0x272283, _0x4f2c63[_0x362e91(1106)]));
          continue;
        case "4":
          console[_0x362e91(789)](_0x362e91(938) + _0x362e91(938) + _0x362e91(938) + _0x362e91(938));
          continue;
        case "5":
          _0x3d298e[_0x362e91(1086)] && console[_0x362e91(789)](_0x362e91(907) + util[_0x362e91(948)](_0x3d298e[_0x362e91(1086)], {
            depth: 2
          }));
          continue;
      }
      break;
    }
  }
}
const IP_DETECTION_APIS = [_0x1a58f5(840) + _0x1a58f5(722), _0x1a58f5(1126) + _0x1a58f5(1331) + _0x1a58f5(1343), _0x1a58f5(1019) + _0x1a58f5(990), _0x1a58f5(1126) + _0x1a58f5(855) + _0x1a58f5(993) + _0x1a58f5(1183), _0x1a58f5(1356) + _0x1a58f5(746) + "t", _0x1a58f5(909) + _0x1a58f5(1129), _0x1a58f5(646) + _0x1a58f5(785) + "p", _0x1a58f5(1291) + _0x1a58f5(612) + _0x1a58f5(1327) + _0x1a58f5(629)];
async function getPublicIP() {
  const _0x273351 = _0x1a58f5;
  const _0x3a6b4e = {
    tKkrt: function (_0x46eecf, _0x3066d5, _0x26697e) {
      return _0x46eecf(_0x3066d5, _0x26697e);
    },
    ddYmG: _0x273351(829),
    jWALp: _0x273351(803),
    yZyQu: _0x273351(1012) + _0x273351(613) + _0x273351(954) + _0x273351(1328) + _0x273351(721) + _0x273351(1073),
    TIpTd: function (_0x4edd3c, _0x1d380e, _0x2dba55) {
      return _0x4edd3c(_0x1d380e, _0x2dba55);
    },
    OpBdo: _0x273351(937),
    OwbJI: function (_0x3804d6, _0x2b0ead, _0x223cc9, _0x15f32e) {
      return _0x3804d6(_0x2b0ead, _0x223cc9, _0x15f32e);
    },
    uHGcH: _0x273351(877) + "失败",
    RweUg: _0x273351(1350)
  };
  _0x3a6b4e[_0x273351(858)](logUser, _0x273351(1292) + _0x273351(879), _0x3a6b4e[_0x273351(893)]);
  for (const _0x1d46a4 of IP_DETECTION_APIS) {
    try {
      const _0x3ad859 = await axios[_0x273351(1314)](_0x1d46a4, {
        timeout: 8000,
        responseType: _0x3a6b4e[_0x273351(474)],
        proxy: false,
        headers: {
          "User-Agent": _0x3a6b4e[_0x273351(999)]
        }
      });
      const _0x3fc192 = _0x3ad859[_0x273351(715)][_0x273351(581)]()[_0x273351(1348)](/\d+\.\d+\.\d+\.\d+/);
      if (_0x3fc192 && _0x3fc192[0]) {
        const _0x388d66 = _0x3fc192[0];
        localPublicIP = _0x388d66;
        _0x3a6b4e[_0x273351(1080)](logUser, _0x273351(1191) + _0x273351(988) + _0x388d66, _0x3a6b4e[_0x273351(1231)]);
        return _0x388d66;
      }
    } catch (_0x8e1525) {
      _0x3a6b4e[_0x273351(858)](logDev, _0x273351(930) + _0x1d46a4, _0x8e1525[_0x273351(763)]);
      continue;
    }
  }
  _0x3a6b4e[_0x273351(1164)](logError, _0x273351(600) + _0x273351(786), new Error(_0x3a6b4e[_0x273351(1330)]), _0x3a6b4e[_0x273351(700)]);
  process[_0x273351(966)](1);
}
function generateAndroidHexStr(_0x5dfb00 = 16) {
  const _0x351160 = _0x1a58f5;
  const _0x693567 = {
    lwuSu: _0x351160(783) + _0x351160(852),
    CsLZG: function (_0x1c0925, _0x5e3650) {
      return _0x1c0925 < _0x5e3650;
    },
    SWgQV: function (_0xf96c58, _0x31a3fc) {
      return _0xf96c58 * _0x31a3fc;
    }
  };
  const _0x493729 = _0x693567[_0x351160(712)];
  let _0x30567a = "";
  for (let _0x86e31c = 0; _0x693567[_0x351160(562)](_0x86e31c, _0x5dfb00); _0x86e31c++) {
    _0x30567a += _0x493729[Math[_0x351160(857)](_0x693567[_0x351160(1153)](Math[_0x351160(1280)](), _0x493729[_0x351160(1182)]))];
  }
  return _0x351160(874) + _0x30567a;
}
function _0x30ac() {
  const _0x124564 = ["脚本执行异常", "MbhAS", "PROXY_KEEP", "脚本执行失败", "使用者非法牟利将由使", "ate, br", "nickname", "applicatio", "httpsAgent", "错误详情] ", "dns", "广告配置-参数", "sBMFK", "oMWLh", "status", "Vdqpf", "ion", "taskCount", "uTMyX", "广告配置-PHP返回", "未设置 kstask", "copyFile", "9:54188/qm", "次)（含llsid解", "kpALG", "QkIeR", "BXwFV", "Info", "MIT", "Kit/537.36", "XdCeP", "/earn/over", "entries", "vavFI", "nAxNE", "map", "TIpTd", "] 账户信息请求无返", "ELxxA", "proxyUrl", "zuJIS", "gbXQI", "config", "Socks", "679406uvtnfp", "_ALIVE", "配置格式错误，需至少", "AqfnB", "originalCo", "filter", "无有效账号配置", "nJHfd", "KS_PROXY_K", "iSEzs", "allCash", "WsJUS", "PROXY_CONN", "，Cookie可能已", "qMAEL", "手动停止或其他异常", "stopAllTas", "KS_CYCLE_R", "TZqUe", "oUrl", "bcurm", "feeds", "laxcw", "courage.ku", "ipv4first", "USnVC", "neXuV", "DmsPz", "replace", "KcMUu", "gpoiE", "response", "util", "unzLS", "sjDMx", "解析失败", "submitRepo", "push", "https://ip", "，初始现金=", "currentCoi", "nfo.io/ip", "currentCou", "edWqK", "nlURo", "KBawB", "bula.kuais", "更新检查接口返回数据", "DoAjf", "now", "户金币余额: ", "querystrin", " | 原因: ", "PLATFORM_C", "xNcjA", "nNJrH", "   错误信息: ", "http://115", "账号总数: ", "] 开始任务循环", "TASK_CONFI", "，将使用本地模式", "059158520;", "0|3|4|2|1", "zTcbL", "SWgQV", "KS_CONTINU", "] 成功获取广告：", "uqoYA", "累计失败", "0.1:1080", "initialCoi", "Cookie过期", "eTvKm", "0 | socks5", "LOG_LEVEL", "OwbJI", "... 当前版本: ", "zuBgu", "9176298XzuJaM", "\n🔧 [开发者日志]", "vGXUA", "HaPNx", "广告配置异常", " - 请求配置", "1CoinCount", "k 变量失败，请检查", "toFixed", "IzsXg", "ECT_TIMEOU", "IMEOUT", "1.1.1.1", "clientIP", "continuous", "length", "ient_ip", "xxTNF", "量未配置或为空，请设", "yOuyC", "获得金币", "xAvfw", "次1金币，禁用账号", "jjfYE", " 本地直连公网IP检", "LOG_TARGET", "未知广告", "oLBMu", "retryOpera", "KuqRv", "IfjnI", "OxPuF", "URgyq", "次）：", "FQwDQ", "totalRewar", "次仍无有效结果", "SbmOH", " kstask=lo", "all", "广告信息", "rRuev", "98c6-dbae8", "fWdoH", "kstask", "onceAgainR", "YGMBz", "gzip, defl", "式要求：", "writeFile", "Salt[#Prox", "KS_PROXY_T", "FuGFu", " fqm_pvqid", "taskQueue", "kpn", "SOCKS5代理检测", "wcdnA", "XHyma", "]: 执行", "JEgct", "🔍 正在检查脚本更新", "：look,1;fo", "WPPPN", "OpBdo", "tmKlj", "Vmlog", "FYohV", "proxy", "y-agent", "置任务列表 (例如:", "n/json", "SLvzU", "getAdInfo", "AySLu", "GxBHt", "\n[进度] 执行 ", "次重试失败", " | 最终现金余额:", "kuaishou.c", "当前版本(", "JtBnW", "脚本主函数", "Cookie过期或无", "\n=========", "报告配置异常", "KaZxX", " 启动并发执行，账号", "广告配置失败: ", ";did=", "creativeId", "bPOaS", "vxLuB", ")高于最新版本(", "hsKKJ", "a/activity", "wXFqp", "] 初始化失败", "startsWith", "NudqT", "所有指定任务已完成", "4735710nBwmsF", ".php", "   响应状态: ", "|检测到追加广告", "bwDLx", "latestVers", "...", "缺失Cookie", "ins", "不符合Socks5格", "niDWL", "dkwBH", "random", "jscOF", "8.8.8.8", ")为最新版本", "h://127.0.", "KS_LOG_LEV", "HmMHb", "rZfnP", "setDefault", "ksck", "rDYTN", "https://ap", "🔍 正在检测本地直连", "果不慎启动请立即关闭", "accountInf", "PidYz", "XsFeg", "报告提交", "] 开始提交", "报告配置", "nyVtZ", "配置为空或非字符串", "KaBHl", "脚本更新检查失败，跳", "任务报告", "通用请求", "nzSaw", "TGDLV", "BrYss", "理URL格式", "累计: ", "MHyPu", "VmKjZ", "hUgzd", "get", "vYkcV", "inspirePer", "extData", "lipiS", "ckExpired", "SJqlN", "nuous1Coin", "rJkRQ", "*/*", "mKgRF", ")，可能是测试版本", "uRCfI", "g?format=t", "Win64; x64", "Viusy", "uHGcH", "v4.icanhaz", "金币 | 最终账户金", "sxerp", "📊 全局汇总统计", "wPixX", " (KHTML, l", "WATCH_MAX", "llsid", "nebula.kua", "qPvTb", "xZeZk", "oding", "ip.com", "get_report", "广告llsid解析失", "次 | 获", "AKyKp", "match", "oEfSr", "本地公网IP检测", "号累计: ", "代理URL校验失败", "变量为空或格式错误)", "cNkWJ", "加载账号", "https://my", "开始SOCKS5代理", "XXgrq", "hUCwx", "dGKXE", "alEarned", "LVfet", "cid", "form", "代理IP检测无有效结", "gUCMz", "alXUV", "IP...", "rHQpb", "Cxskq", "jWALp", "] 提交报告前获取账", "\n❌ [开发者日志-", ":8080/ks-u", "gsrFi", "MYYRq", "] 账户信息请求异常", "_LIMIT", "tQhjY", "pabDF", "axios", "IsExL", "error", "salt", "114.114.11", "ViNjm", "tion", "FZkWu", "] 开始获取", "pHCRa", " 秒...", "MWgxM", "Display", "] 请求", "stopReason", "URL_DOUBLE", "KHQHk", "xQXyz", "code", "dEJhR", "tmZbY", "VaZJr", "ZLLHj", "Cookie过期或接", ";odid=", "检测失败（已重试", "neoValue", "view/basic", "bvGRb", "任务提交成功，本次未", "initExitIP", "代理IP检测-健康校", "PHP返回无有效签名", "sprvs", "3|2|1|0|4", "1.8.8", "icInfo", "nfo", "1CoinLimit", "kstask 环境变", "TpCYU", "KUAISHOU", "kwmcL", "cwvOj", "] 账户基础信息请求", "nJEDK", "yAqIx", "id aegon/3", "ishou.com", "UXpsu", "用者承担所有后果，如", "删除本程序", "败（为空）", "rTwPv", "广告内容请求", "xRpaY", "FAeZJ", "pdate-info", "Accept-Enc", "ncourage/a", "detail", "广告配置获取失败", "UZqta", "kLoop", "stringify", "st/n/nebul", "kwai-andro", "bAMHr", "zyYSq", "includes", "（代理URL：", "次失败-", "failed", "[账户余额] 当前账", "https://ne", "缺失PHP Key", "VtGzu", "WeCXm", "CsLZG", "fb.php", "---", "] 提交报告前账户金", "ike Gecko)", "次1金币", "未知上下文", "name", "QILaF", "XiRMT", "==========", "] 广告获取失败次数", "EBxGs", "did=", "WPAzZ", "Hytxu", "广告配置请求", "KUalY", "2406qctbLx", "trim", "报告提交-前置校验", "udJmx", "代理模式", "金币 | llsid", "vQnVn", "getNextTas", "eached", "sfQis", "] 解析广告预计金币", "结果码:", "adDataV2", "iHwGR", "result", "oESzx", "mwCuu", "inspireAdI", "RRLZt", "path", "本地直连公网IP检测", "pAkCd", "dlEYJ", "true", "food", "executeTas", "simple", "4段（备注#PHPK", ")可更新", "本地模式", "test", "url", "i.ipify.or", "0 (Windows", "OYSxe", "备注为空，使用默认名", "rtzRq", "广告获取失败达上限(", "DUYyT", "Mgkvs", "yCkkS", "errorMsg", "任务提交成功！", "检测未知错误", "] 账户信息返回数据", "fPVpy", "wrdnc", "Dstri", " |  预计获得", "ext", "n/x-www-fo", "round", "] 提交报告后获取账", "request_co", "cks5://127", "phpKey", "❌ 解析 kstas", "ZEbuy", "sKdTW", "body", "239.198.88", " | 停止原因: ", "NMAXI", "任务达上限", "KS_WATCH_M", "platform", "http://htt", " 浏览中 ", "iZGLF", "qkRCn", "yMgKq", "dFmHj", "remark", "bd.php", "ocxoQ", "/rest/wd/e", "aishou.com", "本程序仅供学习参考，", "AdHaX", "URL", ".56.0", "oXFIq", ". [", "] IP初始化", "ccount/bas", "df83-4304-", "env", "ONFIG", "UtbUC", "socks5", "lZVfM", "] 初始化完成 | ", "method", "\n  各账号详情:", "parse", "kwrqe", "dwXlK", "nEuNQ", "HyjCt", "] 账户信息请求-参", "KpqjO", "🔍 正在检测代理出口", " 任务 (", "SOCKS5代理正常", "广告内容解析失败", "报告配置-PHP返回", "dBiCF", "脚本版本更新检查", "] 代理IP初始化", "fari/537.3", "] 账号执行失败", "格式，将使用默认配置", "exp_tag", "EEP_ALIVE", "RIVgV", "ResultOrde", "PHP返回无有效配置", "RHmsK", "iCpTm", "代理连接异常：", "RweUg", "\n 脚本执行完毕！", "AD_FAIL_LI", "Xgqyv", "TXsQF", "ok,10;food", "  有效账号: ", "报告配置请求", "配置解析", "csRTd", "jrFaJ", "未获取到最新版本信息", "lwuSu", "健康检测，最多", "WsYSe", "data", "ddVPl", "MfkNE", "代理URL为空或非字", "账号累计获得: ", "金币 | 全局所有账", ") AppleWeb", "nhazip.com", "] 账户信息校验", "❌ SOCKS5代理", "awardCoin", "timeout", "广告信息获取失败（含", "hasRewardE", "aHBtm", "Count", "_1COIN_LIM", "  过期账号: ", "URL_BASIC", "TLSv1.3", "http://47.", "mQaBa", "IBmzC", "oyJHk", "YjhBH", "et=UTF-8", "] 解析追加广告标识", "uWEDc", "78417FUmjxu", "NFkUL", "cookie", "ip.ipip.ne", "gNsvW", "msg", "缺失必要参数: ", "无效的Socks5代", "KS_LOG_TAR", "金币 | 当前账户金", "headers", "llsid解析失败）", "环境变量校验", "njbDI", "报告配置失败: ", "TtDAx", "targetCoun", "NhjCp", "oHTMv", "AtwYm", "message", "join", "RMCpi", "缺失Salt", "jUWxY", "AeHpz", "非Socks5代理：", "startTime", "coinAmount", "TuVHs", "1812UQmTiY", "edEYM", "KS_AD_FAIL", "223.5.5.5", "广告配置", "1120218TzqCYL", "  全局所有账号最终", "报告签名配置", "index", "累计获得: ", "0123456789", ")，当前版本(", "pbin.org/i", "失败，网络异常", "UBMXF", " Chrome/12", "log", "cZPhr", "  总执行任务: ", "   详情: ", "KQrOo", "yEUvO", "peGcF", ".0.0.1:108", "_config", "ewardInfo", "taskLimitR", "[累计统计] 本账号", "   错误堆栈: ", "dztKc", "text", "PnqxG", "OUS_1COIN_", "totalCoin", "lwfFM", "keep-alive", "FzZko", "UuIXR", "yqiXu", "endTime", "Connection", "过更新", "nBalance", "ofiQG", "fig", "split", "jguQf", "认空配置", "nfig", "sonalize", "析失败）", "] 获取", "fsTmt", "304402CKqJdF", "b6c200b", "ribHV", "info", "userData", "encourage.", "OUNDS", "kGzll", "总数: ", "lweJL", "3|0|1|5|2|", "QvqJh", "lpFuL", "达上限(", "http://ica", "wqPTV", "户信息失败", " 环境变量，将使用默", "] 任务计划: ", "币余额: ", "oqIZC", "httpAgent", "food,2", "get_ad_con", "adInfoFail", "ljKqv", "abcdef", "exitIP", "expectedCo", "v4.gdt.qq.", "错误码:", "floor", "tKkrt", "任务执行失败", "报告提交-后置校验", "TzHHY", "Content-Ty", "0.0.0.0 Sa", "[休息] 任务间隔 ", "代理配置警告", "eACkk", "前置余额记录", "hou.com/re", "requestCon", "MEHMc", "https://en", "FacPp", "pLxMm", "ANDROID_", "okie", "qDbli", "所有IP检测接口请求", ",10)", "公网IP...", "task_param", "QIKMD", "caption", "5KeIXVt", "POST", "avdiC", "oMwvO", "   响应数据: ", "次)，停止当前账号任", "y]）", "tWieO", "GevNh", "jqJns", "ddYmG", "报告提交失败", "ey#Cookie#", "任务 (kstask", "=28d9ba83-", "nIqze", "WATCH_MIN", "] 任务结束 | 本", "ded; chars", "解析警告", "checkConti", "cuQca", "KLGAa", "KrMub", "   请求配置: ", "yZtLb", "http://ipi", "iguOQ", "reduce", "ydBmT", "rm-urlenco", "OwyKi", "TlHlN", "SHWKK", "stack", "awardValue", "370hMBxJT", "URL环境变量未配置", "IAZbA", "UrEqV", "初始化失败", "accountTot", "次重试", "金币 | IP: ", "toUpperCas", "xHakP", "] ⚠️ 没有配置任何", "本地IP检测失败-", "afpam", "] 重置连续1金币计", "setServers", "kmvTT", "账号加载", "5代理URL格式", "success", "----------", "CyBpG", "] 成功获取", "检测到新版本(", ", 消息:", "has", "oupDU", "BYuwz", "已重试", "广告内容获取失败", "inspect", "LoukY", "广告金币解析", "aOikv", "未命名", "cashAmount", " NT 10.0; ", "add", "DEV", "host", "cTQrH", "LIMIT", "User-Agent", "od,2", "zrcBx", "maxAdInfoF", "HVTow", "qZTWw", "exit", "IjYET", "GkHmD", "[账号", " 重试失败", "4.114", "odid=", "接口返回空数据", "ZMKaA", "yToIw", "GET", "forEach", "kkFUk", "yGHus", "开始加载账号配置", "lGYvW", "，正确格式示例：so", " - 响应状态", "taskStats", "gRZBx", "] 账户信息：初始金", "OoHoJ", "测成功: ", "CQPTN", ".ident.me", "gFTbg", "JQHdh", "com/get_cl", "口异常", "MOUYC", "] 连续", "报告配置参数校验", "max", "yZyQu", "pQZfi", "look", "type", "] 获取广告失败", "Dzeru", "正常结束", "TLSv1.2", "接口返回无效IP数据", "uSNeq", "NEBULA", "报告配置失败", "reward", "Mozilla/5.", "STiaO", "warn", "❌ 无效的Socks", "qHUig", " 执行失败", "PQDPq", "https://v4", "[奖励明细] 本次获", "ailCount", "qeWGi", "报告配置-参数", "substring", " | 现金余额: ", "PHP_PROXY_", "hasMore", "qHLjy", "] 初始化中...", " 账号加载完成，有效", "SjajC", "CONTINUOUS", "，出口IP: ", "pgv_pvid=2", "string", "aKNuT", ".191.27.22", "出口IP: ", "] 账户信息获取失败", "LBmBq", "socks-prox", "248KPpbou", "AXDHN"];
  _0x30ac = function () {
    return _0x124564;
  };
  return _0x30ac();
}
function generateDidOdid() {
  const _0x17431f = _0x1a58f5;
  const _0x3cbb02 = {
    jrFaJ: function (_0x4d2b40, _0x331e2b) {
      return _0x4d2b40(_0x331e2b);
    },
    FYohV: function (_0xa3b29, _0x28ebdb) {
      return _0xa3b29(_0x28ebdb);
    }
  };
  const _0x39161f = _0x3cbb02[_0x17431f(710)](generateAndroidHexStr, 16);
  const _0xad20cf = _0x3cbb02[_0x17431f(1234)](generateAndroidHexStr, 16);
  return {
    did: _0x39161f,
    odid: _0xad20cf
  };
}
function replaceDidOdidInCookie(_0x4b4656, _0x3cd553, _0xa466f5) {
  const _0x38015f = _0x1a58f5;
  const _0x472b5f = {
    WsYSe: function (_0x4bfa2f, _0x1c91ac) {
      return _0x4bfa2f || _0x1c91ac;
    },
    nJHfd: _0x38015f(575),
    Mgkvs: _0x38015f(972)
  };
  let _0x3b9944 = _0x472b5f[_0x38015f(714)](_0x4b4656, "");
  _0x3b9944 = _0x3b9944[_0x38015f(1116)](/did=[^;]+/g, _0x38015f(575) + _0x3cd553);
  _0x3b9944 = _0x3b9944[_0x38015f(1116)](/odid=[^;]+/g, _0x38015f(972) + _0xa466f5);
  if (!_0x3b9944[_0x38015f(553)](_0x472b5f[_0x38015f(1095)])) {
    _0x3b9944 += _0x38015f(1256) + _0x3cd553;
  }
  if (!_0x3b9944[_0x38015f(553)](_0x472b5f[_0x38015f(619)])) {
    _0x3b9944 += _0x38015f(508) + _0xa466f5;
  }
  return _0x3b9944[_0x38015f(581)]();
}
async function checkSocks5ProxyHealth(_0x892a9f) {
  const _0x5dfa5a = _0x1a58f5;
  const _0x327d47 = {
    iHwGR: _0x5dfa5a(1126) + _0x5dfa5a(855) + _0x5dfa5a(993) + _0x5dfa5a(1183),
    nNJrH: _0x5dfa5a(646) + _0x5dfa5a(785) + "p",
    UuIXR: _0x5dfa5a(1291) + _0x5dfa5a(612) + _0x5dfa5a(1327) + _0x5dfa5a(629),
    jscOF: function (_0x118c73, _0x4ae0e0) {
      return _0x118c73(_0x4ae0e0);
    },
    WsJUS: _0x5dfa5a(1015) + _0x5dfa5a(936),
    KrMub: function (_0x42d6d1, _0x576f87) {
      return _0x42d6d1 < _0x576f87;
    },
    gNsvW: function (_0x3c7006, _0x456d5d) {
      return _0x3c7006 % _0x456d5d;
    },
    vQnVn: _0x5dfa5a(1012) + _0x5dfa5a(613) + _0x5dfa5a(954) + _0x5dfa5a(1328) + _0x5dfa5a(721) + _0x5dfa5a(1073) + _0x5dfa5a(1336) + _0x5dfa5a(566) + _0x5dfa5a(788) + _0x5dfa5a(863) + _0x5dfa5a(689) + "6",
    jjfYE: _0x5dfa5a(1323),
    RHmsK: _0x5dfa5a(808),
    yAqIx: _0x5dfa5a(1034) + _0x5dfa5a(1150) + _0x5dfa5a(1220) + _0x5dfa5a(897) + _0x5dfa5a(665) + _0x5dfa5a(1209) + _0x5dfa5a(827),
    sBMFK: function (_0x598f97, _0x4684dd) {
      return _0x598f97 === _0x4684dd;
    },
    pabDF: _0x5dfa5a(1035),
    QkIeR: function (_0x245334, _0x42a206) {
      return _0x245334 !== _0x42a206;
    },
    WPPPN: function (_0x3b5619, _0x2ae2c6, _0x5781b5) {
      return _0x3b5619(_0x2ae2c6, _0x5781b5);
    },
    OxPuF: _0x5dfa5a(937),
    IzsXg: _0x5dfa5a(1007),
    ribHV: function (_0x3aa221, _0x148256, _0x22152e) {
      return _0x3aa221(_0x148256, _0x22152e);
    },
    AqfnB: function (_0x587535, _0x18ca22) {
      return _0x587535 % _0x18ca22;
    },
    IsExL: function (_0x16385, _0x3712e1) {
      return _0x16385 >= _0x3712e1;
    },
    oqIZC: _0x5dfa5a(724) + _0x5dfa5a(623)
  };
  const _0x1c735c = 8;
  let _0x363bdf = 0;
  const _0x49d4e9 = [_0x327d47[_0x5dfa5a(593)], _0x327d47[_0x5dfa5a(1143)], _0x327d47[_0x5dfa5a(810)]];
  if (!_0x327d47[_0x5dfa5a(1281)](validateSocks5ProxyUrl, _0x892a9f)) {
    return {
      ok: false,
      msg: _0x327d47[_0x5dfa5a(1099)],
      ip: null
    };
  }
  _0x327d47[_0x5dfa5a(1281)](logDev, _0x5dfa5a(460) + _0x5dfa5a(713) + _0x1c735c + _0x5dfa5a(925));
  while (_0x327d47[_0x5dfa5a(906)](_0x363bdf, _0x1c735c)) {
    const _0x11deb7 = _0x49d4e9[_0x327d47[_0x5dfa5a(747)](_0x363bdf, _0x49d4e9[_0x5dfa5a(1182)])];
    try {
      const _0x5eca5d = {
        timeout: ENV_CONFIG[_0x5dfa5a(1100) + _0x5dfa5a(1177) + "T"],
        keepAlive: ENV_CONFIG[_0x5dfa5a(1046) + _0x5dfa5a(1089)],
        keepAliveMsecs: 60000,
        maxSockets: 5,
        maxFreeSockets: 2,
        timeoutSocket: 10000
      };
      const _0x151da5 = new SocksProxyAgent(_0x892a9f, _0x5eca5d);
      const _0x23bb6d = await axios[_0x5dfa5a(1314)](_0x11deb7, {
        httpAgent: _0x151da5,
        httpsAgent: _0x151da5,
        timeout: 15000,
        headers: {
          "User-Agent": _0x327d47[_0x5dfa5a(586)],
          Accept: _0x327d47[_0x5dfa5a(1190)],
          Connection: _0x327d47[_0x5dfa5a(697)],
          Cookie: _0x327d47[_0x5dfa5a(530)]
        },
        proxy: false,
        https: {
          rejectUnauthorized: false
        }
      });
      if (_0x327d47[_0x5dfa5a(1056)](_0x23bb6d[_0x5dfa5a(1058)], 200) && _0x23bb6d[_0x5dfa5a(715)] && _0x327d47[_0x5dfa5a(1056)](typeof _0x23bb6d[_0x5dfa5a(715)], _0x327d47[_0x5dfa5a(483)])) {
        const _0x449b91 = _0x23bb6d[_0x5dfa5a(715)][_0x5dfa5a(581)]()[_0x5dfa5a(1348)](/\d+\.\d+\.\d+\.\d+/);
        const _0x3a02a2 = _0x449b91 ? _0x449b91[0] : _0x23bb6d[_0x5dfa5a(715)][_0x5dfa5a(581)]();
        if (_0x3a02a2 && _0x327d47[_0x5dfa5a(1069)](_0x3a02a2, "")) {
          const _0xb338bb = _0x5dfa5a(683) + _0x5dfa5a(1033) + _0x3a02a2;
          _0x327d47[_0x5dfa5a(1230)](logUser, _0xb338bb, _0x327d47[_0x5dfa5a(1198)]);
          return {
            ok: true,
            msg: _0xb338bb,
            ip: _0x3a02a2
          };
        }
      }
      throw new Error(_0x327d47[_0x5dfa5a(1176)]);
    } catch (_0x191e86) {
      _0x363bdf++;
      _0x327d47[_0x5dfa5a(828)](logDev, _0x5dfa5a(1223) + "第" + _0x363bdf + _0x5dfa5a(555) + _0x49d4e9[_0x327d47[_0x5dfa5a(1091)](_0x363bdf, _0x49d4e9[_0x5dfa5a(1182)])], _0x191e86[_0x5dfa5a(763)]);
      if (_0x327d47[_0x5dfa5a(485)](_0x363bdf, _0x1c735c)) {
        return {
          ok: false,
          msg: _0x5dfa5a(724) + _0x5dfa5a(509) + _0x1c735c + _0x5dfa5a(1200) + _0x191e86[_0x5dfa5a(763)],
          ip: null
        };
      }
      await new Promise(_0x3350c4 => setTimeout(_0x3350c4, 1500 * _0x363bdf));
    }
  }
  return {
    ok: false,
    msg: _0x327d47[_0x5dfa5a(846)],
    ip: null
  };
}
async function getProxyExitIP(_0x397c24) {
  const _0x22a534 = _0x1a58f5;
  const _0x208833 = {
    mKgRF: function (_0x3c75bb, _0x47e640, _0x527a7c) {
      return _0x3c75bb(_0x47e640, _0x527a7c);
    },
    avdiC: _0x22a534(829),
    oXFIq: function (_0x5b75d8, _0x527b2f) {
      return _0x5b75d8(_0x527b2f);
    },
    lwfFM: function (_0x1bb41e, _0x1306a0, _0x709ed6, _0x4d250e) {
      return _0x1bb41e(_0x1306a0, _0x709ed6, _0x4d250e);
    },
    yOuyC: _0x22a534(515) + "验"
  };
  _0x208833[_0x22a534(1324)](logUser, _0x22a534(681) + _0x22a534(471), _0x208833[_0x22a534(885)]);
  const _0xf6b490 = await _0x208833[_0x22a534(661)](checkSocks5ProxyHealth, _0x397c24);
  if (!_0xf6b490.ok) {
    _0x208833[_0x22a534(807)](logError, _0xf6b490[_0x22a534(748)], new Error(_0xf6b490[_0x22a534(748)]), _0x208833[_0x22a534(1186)]);
    return null;
  }
  return _0xf6b490.ip;
}
function validateSocks5ProxyUrl(_0x29330b) {
  const _0x152a31 = _0x1a58f5;
  const _0x21297a = {
    sKdTW: function (_0x2d95f8, _0x17e930) {
      return _0x2d95f8 !== _0x17e930;
    },
    bvGRb: _0x152a31(1035),
    oLBMu: function (_0x14f1eb, _0x437f5c, _0x41dcf9) {
      return _0x14f1eb(_0x437f5c, _0x41dcf9);
    },
    HyjCt: _0x152a31(1352),
    sxerp: _0x152a31(718) + "符串"
  };
  if (!_0x29330b || _0x21297a[_0x152a31(638)](typeof _0x29330b, _0x21297a[_0x152a31(512)])) {
    _0x21297a[_0x152a31(1194)](logDev, _0x21297a[_0x152a31(678)], _0x21297a[_0x152a31(1333)]);
    return false;
  }
  const _0x178905 = /^socks5h?:\/\/(?:[a-zA-Z0-9:_.-]+@)?(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[?[a-fA-F0-9:]+\]?):\d{1,5}$/;
  if (!_0x178905[_0x152a31(610)](_0x29330b)) {
    _0x21297a[_0x152a31(1194)](logDev, _0x21297a[_0x152a31(678)], _0x152a31(1277) + _0x152a31(1215) + _0x29330b + (_0x152a31(982) + _0x152a31(634) + _0x152a31(796) + _0x152a31(1162) + _0x152a31(1284) + _0x152a31(1158)));
    return false;
  }
  return true;
}
function compareVersions(_0x121575, _0x3283b4) {
  const _0xc62761 = _0x1a58f5;
  const _0x3f5bf9 = {
    VtGzu: function (_0x58911d, _0x5c7741) {
      return _0x58911d < _0x5c7741;
    },
    nlURo: function (_0xe4ae0e, _0x38f81e) {
      return _0xe4ae0e > _0x38f81e;
    }
  };
  const _0x1db087 = _0x121575[_0xc62761(818)](".")[_0xc62761(1079)](Number);
  const _0x28df29 = _0x3283b4[_0xc62761(818)](".")[_0xc62761(1079)](Number);
  const _0x237a03 = Math[_0xc62761(998)](_0x1db087[_0xc62761(1182)], _0x28df29[_0xc62761(1182)]);
  for (let _0x2bc0b6 = 0; _0x3f5bf9[_0xc62761(560)](_0x2bc0b6, _0x237a03); _0x2bc0b6++) {
    const _0x1496c8 = _0x1db087[_0x2bc0b6] || 0;
    const _0x55e882 = _0x28df29[_0x2bc0b6] || 0;
    if (_0x3f5bf9[_0xc62761(1132)](_0x1496c8, _0x55e882)) {
      return 1;
    }
    if (_0x3f5bf9[_0xc62761(560)](_0x1496c8, _0x55e882)) {
      return -1;
    }
  }
  return 0;
}
async function checkForUpdates() {
  const _0x4029cd = _0x1a58f5;
  const _0x27c465 = {
    dFmHj: function (_0xbfef37, _0x32d2ef, _0x53ec0e) {
      return _0xbfef37(_0x32d2ef, _0x53ec0e);
    },
    PQDPq: _0x4029cd(829),
    rDYTN: _0x4029cd(1012) + "0",
    mwCuu: function (_0x289412, _0x3b8f8e, _0x8c26ad) {
      return _0x289412(_0x3b8f8e, _0x8c26ad);
    },
    cuQca: _0x4029cd(1135),
    jUWxY: function (_0x13b24d, _0x275410, _0x3f8f5e) {
      return _0x13b24d(_0x275410, _0x3f8f5e);
    },
    aKNuT: _0x4029cd(711),
    KHQHk: _0x4029cd(1014),
    dkwBH: function (_0x12ed55, _0x2b5025) {
      return _0x12ed55 === _0x2b5025;
    },
    jguQf: function (_0x34a626, _0x5389d7) {
      return _0x34a626 === _0x5389d7;
    },
    wPixX: function (_0x59d8b5, _0x40946e, _0x33e734) {
      return _0x59d8b5(_0x40946e, _0x33e734);
    },
    lGYvW: function (_0x3019e1, _0x1d3526, _0x130478) {
      return _0x3019e1(_0x1d3526, _0x130478);
    },
    LoukY: function (_0x4be400, _0x49dbe4, _0x300959, _0x41c93e) {
      return _0x4be400(_0x49dbe4, _0x300959, _0x41c93e);
    },
    rtzRq: _0x4029cd(1303) + _0x4029cd(814),
    uTMyX: _0x4029cd(687)
  };
  _0x27c465[_0x4029cd(651)](logUser, _0x4029cd(1228) + _0x4029cd(1165) + CURRENT_VERSION, _0x27c465[_0x4029cd(1018)]);
  try {
    const _0x28d373 = await axios[_0x4029cd(1314)](UPDATE_CHECK_URL, {
      timeout: 10000,
      validateStatus: _0x16fd8e => _0x16fd8e === 200,
      proxy: false,
      headers: {
        "User-Agent": _0x27c465[_0x4029cd(1290)]
      }
    });
    updateInfo = _0x28d373[_0x4029cd(715)];
    _0x27c465[_0x4029cd(596)](logDev, _0x27c465[_0x4029cd(904)], updateInfo);
    if (!updateInfo[_0x4029cd(1273) + _0x4029cd(1060)]) {
      _0x27c465[_0x4029cd(767)](logUser, _0x27c465[_0x4029cd(1036)], _0x27c465[_0x4029cd(500)]);
      return false;
    }
    const _0xa9cc8e = _0x27c465[_0x4029cd(596)](compareVersions, CURRENT_VERSION, updateInfo[_0x4029cd(1273) + _0x4029cd(1060)]);
    if (_0x27c465[_0x4029cd(1279)](_0xa9cc8e, 0)) {
      _0x27c465[_0x4029cd(596)](logUser, _0x4029cd(1247) + CURRENT_VERSION + _0x4029cd(1283), _0x27c465[_0x4029cd(1018)]);
    } else {
      _0x27c465[_0x4029cd(819)](_0xa9cc8e, 1) ? _0x27c465[_0x4029cd(1335)](logUser, _0x4029cd(1247) + CURRENT_VERSION + _0x4029cd(1260) + updateInfo[_0x4029cd(1273) + _0x4029cd(1060)] + _0x4029cd(1325), _0x27c465[_0x4029cd(1018)]) : _0x27c465[_0x4029cd(981)](logUser, _0x4029cd(941) + updateInfo[_0x4029cd(1273) + _0x4029cd(1060)] + _0x4029cd(784) + CURRENT_VERSION + _0x4029cd(608), _0x27c465[_0x4029cd(1018)]);
    }
    return true;
  } catch (_0x3c5e5f) {
    _0x27c465[_0x4029cd(949)](logError, _0x27c465[_0x4029cd(616)], _0x3c5e5f, _0x27c465[_0x4029cd(1062)]);
    return false;
  }
}
function cleanHeaderValue(_0x3d907d) {
  const _0x57aa6d = _0x1a58f5;
  const _0x21ad23 = {
    KQrOo: function (_0x1d5843, _0x22d6b8) {
      return _0x1d5843 !== _0x22d6b8;
    },
    XdCeP: _0x57aa6d(1035),
    uWEDc: function (_0x4bc68b, _0x1893a8) {
      return _0x4bc68b(_0x1893a8);
    },
    WeCXm: function (_0x415c54, _0x1727e4) {
      return _0x415c54 || _0x1727e4;
    }
  };
  if (_0x21ad23[_0x57aa6d(793)](typeof _0x3d907d, _0x21ad23[_0x57aa6d(1074)])) {
    _0x3d907d = _0x21ad23[_0x57aa6d(742)](String, _0x21ad23[_0x57aa6d(561)](_0x3d907d, ""));
  }
  return _0x3d907d[_0x57aa6d(1116)](/[\x00-\x1F\x7F\u2000-\u200F\u3000]/g, "")[_0x57aa6d(581)]()[_0x57aa6d(1116)](/[^\x20-\x7E]/g, "");
}
async function request(_0x306491, _0x8f906b = null, _0x4620f3 = _0x1a58f5(1305)) {
  const _0x135aee = _0x1a58f5;
  const _0x30cd56 = {
    pAkCd: _0x135aee(976),
    LVfet: _0x135aee(1006),
    uSNeq: _0x135aee(734),
    KBawB: function (_0x408281, _0x3e4a66) {
      return _0x408281(_0x3e4a66);
    },
    WPAzZ: _0x135aee(750) + _0x135aee(1309),
    hUCwx: function (_0x1d67ab, _0x29b481) {
      return _0x1d67ab(_0x29b481);
    },
    cTQrH: _0x135aee(960),
    TlHlN: _0x135aee(1012) + _0x135aee(613) + _0x135aee(954) + _0x135aee(1328) + _0x135aee(721) + _0x135aee(1073) + _0x135aee(1336) + _0x135aee(566) + _0x135aee(788) + _0x135aee(863) + _0x135aee(689) + "6",
    unzLS: _0x135aee(813),
    iguOQ: _0x135aee(808),
    nAxNE: _0x135aee(542) + _0x135aee(1342),
    XHyma: _0x135aee(1214) + _0x135aee(1049),
    nzSaw: function (_0x43cd8, _0xb53f73) {
      return _0x43cd8 === _0xb53f73;
    },
    IfjnI: _0x135aee(884),
    bcurm: _0x135aee(862) + "pe",
    yEUvO: _0x135aee(1051) + _0x135aee(630) + _0x135aee(913) + _0x135aee(901) + _0x135aee(740),
    kGzll: function (_0x5de7fb, _0x2b10ca, _0x4e6400) {
      return _0x5de7fb(_0x2b10ca, _0x4e6400);
    },
    OwyKi: function (_0x57271b, _0x5f46a3) {
      return _0x57271b || _0x5f46a3;
    },
    JQHdh: _0x135aee(1087),
    LBmBq: function (_0x3a2f23, _0x248100, _0x12398a, _0x2f7d95) {
      return _0x3a2f23(_0x248100, _0x12398a, _0x2f7d95);
    }
  };
  try {
    const _0x602061 = {
      method: _0x306491[_0x135aee(672)] || _0x30cd56[_0x135aee(601)],
      url: _0x306491[_0x135aee(611)],
      headers: {},
      data: _0x306491[_0x135aee(639)] || _0x306491[_0x135aee(467)],
      timeout: _0x306491[_0x135aee(726)] || 15000,
      https: {
        rejectUnauthorized: false,
        minVersion: _0x30cd56[_0x135aee(465)],
        maxVersion: _0x30cd56[_0x135aee(1008)]
      },
      validateStatus: () => true,
      followRedirects: true,
      maxRedirects: 5
    };
    if (_0x8f906b) {
      const _0x185211 = _0x30cd56[_0x135aee(1133)](validateSocks5ProxyUrl, _0x8f906b);
      if (!_0x185211) {
        throw new Error(_0x30cd56[_0x135aee(576)]);
      }
      const _0x4b9b9f = {
        timeout: ENV_CONFIG[_0x135aee(1100) + _0x135aee(1177) + "T"],
        keepAlive: ENV_CONFIG[_0x135aee(1046) + _0x135aee(1089)],
        keepAliveMsecs: 60000,
        maxSockets: 5,
        maxFreeSockets: 2,
        timeoutSocket: 12000
      };
      const _0xdac19d = new SocksProxyAgent(_0x8f906b, _0x4b9b9f);
      _0x602061[_0x135aee(847)] = _0xdac19d;
      _0x602061[_0x135aee(1052)] = _0xdac19d;
      _0x602061[_0x135aee(1235)] = false;
    } else {
      _0x602061[_0x135aee(1235)] = false;
    }
    if (_0x306491[_0x135aee(753)]) {
      for (const [_0x2b3098, _0x572453] of Object[_0x135aee(1076)](_0x306491[_0x135aee(753)])) {
        _0x602061[_0x135aee(753)][_0x2b3098] = _0x30cd56[_0x135aee(462)](cleanHeaderValue, _0x572453);
      }
    }
    !_0x602061[_0x135aee(753)][_0x30cd56[_0x135aee(958)]] && (_0x602061[_0x135aee(753)][_0x30cd56[_0x135aee(958)]] = _0x30cd56[_0x135aee(915)]);
    !_0x602061[_0x135aee(753)][_0x30cd56[_0x135aee(1121)]] && (_0x602061[_0x135aee(753)][_0x30cd56[_0x135aee(1121)]] = _0x30cd56[_0x135aee(910)]);
    !_0x602061[_0x135aee(753)][_0x30cd56[_0x135aee(1078)]] && (_0x602061[_0x135aee(753)][_0x30cd56[_0x135aee(1078)]] = _0x30cd56[_0x135aee(1225)]);
    _0x306491[_0x135aee(467)] && _0x30cd56[_0x135aee(1306)](_0x306491[_0x135aee(672)], _0x30cd56[_0x135aee(1197)]) && !_0x602061[_0x135aee(753)][_0x30cd56[_0x135aee(1108)]] && (_0x602061[_0x135aee(753)][_0x30cd56[_0x135aee(1108)]] = _0x30cd56[_0x135aee(794)], _0x602061[_0x135aee(715)] = querystring[_0x135aee(548)](_0x306491[_0x135aee(467)]));
    _0x30cd56[_0x135aee(833)](logDev, _0x4620f3 + _0x135aee(1172), {
      url: _0x602061[_0x135aee(611)],
      method: _0x602061[_0x135aee(672)],
      proxy: _0x30cd56[_0x135aee(914)](_0x8f906b, "无")
    });
    const _0x5a90a6 = await _0x30cd56[_0x135aee(1133)](axios, _0x602061);
    _0x30cd56[_0x135aee(833)](logDev, _0x4620f3 + _0x135aee(983), _0x5a90a6[_0x135aee(1058)]);
    return {
      body: _0x5a90a6[_0x135aee(715)],
      status: _0x5a90a6[_0x135aee(1058)]
    };
  } catch (_0x34b014) {
    let _0x29246e = _0x34b014[_0x135aee(763)];
    if (_0x8f906b && _0x29246e[_0x135aee(553)](_0x30cd56[_0x135aee(992)])) {
      _0x29246e = _0x135aee(699) + _0x29246e + _0x135aee(554) + _0x8f906b + "）";
    }
    _0x30cd56[_0x135aee(1040)](logError, _0x4620f3 + _0x135aee(1017), new Error(_0x29246e), _0x4620f3);
    return {
      body: null,
      status: 0
    };
  }
}
function getPlatformFromCookie(_0x4e149c) {
  const _0xb38a = _0x1a58f5;
  const _0x1994c7 = {
    SHWKK: _0xb38a(1009)
  };
  const _0x531334 = _0x4e149c[_0xb38a(1348)](/kpn=([^;]+)/);
  const _0x4e285b = _0x531334 ? _0x531334[1][_0xb38a(927) + "e"]() : _0x1994c7[_0xb38a(916)];
  return ENV_CONFIG[_0xb38a(1141) + _0xb38a(667)][_0x4e285b] || ENV_CONFIG[_0xb38a(1141) + _0xb38a(667)][_0xb38a(1009)];
}
async function getAdConfigFromPHP(_0xd8e225, _0x1f45e, _0x547b12, _0x3fc315, _0x55f076, _0x5eae0c) {
  const _0x2d5c6f = _0x1a58f5;
  const _0x17d715 = {
    KLGAa: function (_0x442054, _0x1ad9d4, _0x57456b) {
      return _0x442054(_0x1ad9d4, _0x57456b);
    },
    niDWL: function (_0x2a349f, _0x31c4e3, _0x56c7d0, _0x4601c5) {
      return _0x2a349f(_0x31c4e3, _0x56c7d0, _0x4601c5);
    },
    GkHmD: _0x2d5c6f(884),
    oEfSr: _0x2d5c6f(1051) + _0x2d5c6f(1238),
    AKyKp: function (_0x593f85, _0x150e44) {
      return _0x593f85(_0x150e44);
    },
    wqPTV: _0x2d5c6f(849) + _0x2d5c6f(817),
    cZPhr: function (_0x4759c1, _0x54426e) {
      return _0x4759c1(_0x54426e);
    },
    iCpTm: function (_0x1981f6, _0x1dcf3f, _0x10a176) {
      return _0x1981f6(_0x1dcf3f, _0x10a176);
    },
    FacPp: function (_0x3bb873, _0x3b4ef0) {
      return _0x3bb873 === _0x3b4ef0;
    },
    oMWLh: function (_0xdebc84, _0x1aedb6, _0x21e8c3) {
      return _0xdebc84(_0x1aedb6, _0x21e8c3);
    },
    gsrFi: _0x2d5c6f(937),
    Hytxu: function (_0x2bd8ca, _0x4db867, _0x2cf5e3) {
      return _0x2bd8ca(_0x4db867, _0x2cf5e3);
    },
    mQaBa: _0x2d5c6f(696),
    zuBgu: _0x2d5c6f(486)
  };
  try {
    _0x17d715[_0x2d5c6f(905)](logDev, "[" + _0xd8e225[_0x2d5c6f(569)] + _0x2d5c6f(497) + _0x1f45e + _0x2d5c6f(1055), {
      kpn: _0xd8e225[_0x2d5c6f(1222)],
      taskType: _0x1f45e,
      ip: _0x55f076
    });
    const {
      body: _0x2e17a4
    } = await _0x17d715[_0x2d5c6f(1278)](request, {
      method: _0x17d715[_0x2d5c6f(968)],
      url: ENV_CONFIG[_0x2d5c6f(1026) + _0x2d5c6f(659)],
      headers: {
        "Content-Type": _0x17d715[_0x2d5c6f(1349)],
        Authorization: _0x17d715[_0x2d5c6f(1347)](cleanHeaderValue, _0x5eae0c)
      },
      body: JSON[_0x2d5c6f(548)]({
        action: _0x17d715[_0x2d5c6f(841)],
        key: _0x17d715[_0x2d5c6f(790)](cleanHeaderValue, _0x5eae0c),
        kpn: _0xd8e225[_0x2d5c6f(1222)],
        task_type: _0x1f45e,
        salt: _0x547b12,
        ck: _0x3fc315,
        ip: _0x55f076
      }),
      timeout: 15000
    }, null, "[" + _0xd8e225[_0x2d5c6f(569)] + _0x2d5c6f(824) + _0x1f45e + _0x2d5c6f(777));
    _0x17d715[_0x2d5c6f(698)](logDev, "[" + _0xd8e225[_0x2d5c6f(569)] + "] " + _0x1f45e + _0x2d5c6f(1063), _0x2e17a4);
    if (_0x2e17a4 && _0x17d715[_0x2d5c6f(872)](_0x2e17a4[_0x2d5c6f(502)], 200) && _0x2e17a4[_0x2d5c6f(715)]?.[_0x2d5c6f(633) + _0x2d5c6f(821)]) {
      _0x17d715[_0x2d5c6f(1057)](logUser, "[" + _0xd8e225[_0x2d5c6f(569)] + _0x2d5c6f(940) + _0x1f45e + _0x2d5c6f(777), _0x17d715[_0x2d5c6f(478)]);
      return {
        requestConfig: _0x2e17a4[_0x2d5c6f(715)][_0x2d5c6f(633) + _0x2d5c6f(821)],
        taskParams: _0x2e17a4[_0x2d5c6f(715)][_0x2d5c6f(880) + "s"]
      };
    }
    _0x17d715[_0x2d5c6f(577)](logUser, "[" + _0xd8e225[_0x2d5c6f(569)] + _0x2d5c6f(824) + _0x1f45e + _0x2d5c6f(1255) + (_0x2e17a4?.[_0x2d5c6f(748)] || _0x17d715[_0x2d5c6f(736)]), _0x17d715[_0x2d5c6f(1166)]);
    return null;
  } catch (_0x39a4de) {
    _0x17d715[_0x2d5c6f(1278)](logError, "[" + _0xd8e225[_0x2d5c6f(569)] + _0x2d5c6f(824) + _0x1f45e + _0x2d5c6f(1171), _0x39a4de, "[" + _0xd8e225[_0x2d5c6f(569)] + "] " + _0x1f45e + _0x2d5c6f(578));
    return null;
  }
}
async function getReportConfigFromPHP(_0x3afda3, _0x5aefef, _0x5f34c1, _0x43f32c, _0x2ad027, _0x2140d9, _0x4484de, _0x5351a7) {
  const _0x580213 = _0x1a58f5;
  const _0x5f0982 = {
    OoHoJ: _0x580213(1257),
    uqoYA: _0x580213(1338),
    yGHus: _0x580213(770),
    njbDI: _0x580213(812),
    afpam: function (_0xd8c3cd, _0x2025a1) {
      return _0xd8c3cd > _0x2025a1;
    },
    rRuev: function (_0x21bd28, _0x5b14af, _0x255fea, _0x174c91) {
      return _0x21bd28(_0x5b14af, _0x255fea, _0x174c91);
    },
    NMAXI: _0x580213(1344) + _0x580213(797),
    eTvKm: function (_0x256fc8, _0x58d219) {
      return _0x256fc8 > _0x58d219;
    },
    fsTmt: function (_0x377661, _0x68bbe6) {
      return _0x377661 === _0x68bbe6;
    },
    YGMBz: function (_0x2b2d00, _0x57bd3d, _0x42a722) {
      return _0x2b2d00(_0x57bd3d, _0x42a722);
    },
    nEuNQ: _0x580213(884),
    FzZko: _0x580213(1051) + _0x580213(1238),
    neXuV: function (_0x401887, _0x2003de) {
      return _0x401887(_0x2003de);
    },
    PnqxG: function (_0x423fd0, _0x56ed3b) {
      return _0x423fd0(_0x56ed3b);
    },
    kmvTT: function (_0x44029b, _0x669e6d, _0x3bbb31) {
      return _0x44029b(_0x669e6d, _0x3bbb31);
    },
    ofiQG: _0x580213(937),
    ljKqv: _0x580213(516),
    VaZJr: _0x580213(486),
    lweJL: function (_0x16bf5a, _0x5a8f43, _0x90dc6a, _0x108cae) {
      return _0x16bf5a(_0x5a8f43, _0x90dc6a, _0x108cae);
    }
  };
  try {
    const _0x3ddce2 = [_0x5f0982[_0x580213(987)], _0x5f0982[_0x580213(1156)], _0x5f0982[_0x580213(979)], _0x5f0982[_0x580213(756)]];
    const _0x128432 = _0x3ddce2[_0x580213(1093)](_0x287535 => !_0x2140d9[_0x287535]);
    if (_0x5f0982[_0x580213(931)](_0x128432[_0x580213(1182)], 0)) {
      _0x5f0982[_0x580213(1208)](logError, "[" + _0x3afda3[_0x580213(569)] + _0x580213(824) + _0x5aefef + _0x580213(1010), new Error(_0x580213(749) + _0x128432[_0x580213(764)](",")), "[" + _0x3afda3[_0x580213(569)] + "] " + _0x5aefef + _0x580213(997));
      return null;
    }
    let _0x31f357 = _0x5f0982[_0x580213(642)];
    let _0x4409ce = ENV_CONFIG[_0x580213(1026) + _0x580213(659)];
    if (_0x5f0982[_0x580213(1161)](_0x5351a7, 1000)) {
      _0x4409ce = ENV_CONFIG[_0x580213(1026) + _0x580213(499)];
    } else {
      if (_0x5f0982[_0x580213(825)](_0x5351a7, 1)) {
        _0x4409ce = ENV_CONFIG[_0x580213(1026) + _0x580213(733)];
      }
    }
    _0x5f0982[_0x580213(1213)](logDev, "[" + _0x3afda3[_0x580213(569)] + _0x580213(497) + _0x5aefef + _0x580213(1023), {
      kpn: _0x3afda3[_0x580213(1222)],
      taskType: _0x5aefef,
      creativeId: _0x2140d9[_0x580213(1257)],
      action: _0x31f357,
      expectedCoins: _0x5351a7,
      phpUrl: _0x4409ce
    });
    const {
      body: _0x25d184
    } = await _0x5f0982[_0x580213(1208)](request, {
      method: _0x5f0982[_0x580213(677)],
      url: _0x4409ce,
      headers: {
        "Content-Type": _0x5f0982[_0x580213(809)],
        Authorization: _0x5f0982[_0x580213(1114)](cleanHeaderValue, _0x4484de)
      },
      body: JSON[_0x580213(548)]({
        action: _0x31f357,
        key: _0x5f0982[_0x580213(804)](cleanHeaderValue, _0x4484de),
        kpn: _0x3afda3[_0x580213(1222)],
        task_type: _0x5aefef,
        salt: _0x5f34c1,
        ck: _0x43f32c,
        ip: _0x2ad027,
        ..._0x2140d9
      }),
      timeout: 15000
    }, null, "[" + _0x3afda3[_0x580213(569)] + _0x580213(824) + _0x5aefef + _0x580213(1299));
    _0x5f0982[_0x580213(934)](logDev, "[" + _0x3afda3[_0x580213(569)] + "] " + _0x5aefef + _0x580213(685), _0x25d184);
    if (_0x25d184 && _0x5f0982[_0x580213(825)](_0x25d184[_0x580213(502)], 200) && _0x25d184[_0x580213(715)]?.[_0x580213(633) + _0x580213(821)]) {
      _0x5f0982[_0x580213(934)](logUser, "[" + _0x3afda3[_0x580213(569)] + _0x580213(940) + _0x5aefef + _0x580213(780), _0x5f0982[_0x580213(816)]);
      return _0x25d184[_0x580213(715)][_0x580213(633) + _0x580213(821)];
    }
    _0x5f0982[_0x580213(934)](logUser, "[" + _0x3afda3[_0x580213(569)] + _0x580213(824) + _0x5aefef + _0x580213(757) + (_0x25d184?.[_0x580213(748)] || _0x5f0982[_0x580213(851)]), _0x5f0982[_0x580213(505)]);
    return null;
  } catch (_0x5b5227) {
    _0x5f0982[_0x580213(835)](logError, "[" + _0x3afda3[_0x580213(569)] + _0x580213(824) + _0x5aefef + _0x580213(1252), _0x5b5227, "[" + _0x3afda3[_0x580213(569)] + "] " + _0x5aefef + _0x580213(707));
    return null;
  }
}
async function getAccountBasicInfo(_0x46196c, _0x349390, _0x5f4c06) {
  const _0x1dac74 = _0x1a58f5;
  const _0x2be730 = {
    dztKc: function (_0x1d8a57, _0x36fa1a, _0x5bf3f7) {
      return _0x1d8a57(_0x36fa1a, _0x5bf3f7);
    },
    VmKjZ: function (_0x1c365f, _0x22e210) {
      return _0x1c365f || _0x22e210;
    },
    XiRMT: function (_0x2a9dfe, _0x9db5d4, _0x544c1a, _0x284a17) {
      return _0x2a9dfe(_0x9db5d4, _0x544c1a, _0x284a17);
    },
    Vdqpf: _0x1dac74(976),
    YjhBH: _0x1dac74(550) + _0x1dac74(531) + _0x1dac74(660),
    yqiXu: function (_0x57ecb9, _0x2be243, _0x207047) {
      return _0x57ecb9(_0x2be243, _0x207047);
    },
    oESzx: _0x1dac74(973),
    AeHpz: function (_0x498428, _0x460549) {
      return _0x498428 === _0x460549;
    },
    iSEzs: _0x1dac74(525),
    Xgqyv: function (_0xdfd9e6, _0x5ee594) {
      return _0xdfd9e6 === _0x5ee594;
    },
    rTwPv: function (_0x23b6e4, _0x1ebdf4) {
      return _0x23b6e4(_0x1ebdf4);
    },
    UBMXF: function (_0x33d912, _0x44b48f) {
      return _0x33d912 === _0x44b48f;
    },
    RIVgV: _0x1dac74(1009),
    KaBHl: function (_0x435cad, _0x4ff8ad) {
      return _0x435cad === _0x4ff8ad;
    },
    JtBnW: function (_0x44b9ba, _0x1d42d6) {
      return _0x44b9ba(_0x1d42d6);
    },
    vYkcV: _0x1dac74(486),
    FQwDQ: function (_0x62bbf2, _0x1c948f, _0x6ff034, _0x4cbd1b) {
      return _0x62bbf2(_0x1c948f, _0x6ff034, _0x4cbd1b);
    }
  };
  try {
    _0x2be730[_0x1dac74(802)](logDev, "[" + _0x349390[_0x1dac74(569)] + (_0x1dac74(679) + "数"), {
      url: _0x349390[_0x1dac74(1294) + _0x1dac74(1107)],
      proxy: _0x2be730[_0x1dac74(1312)](_0x5f4c06, "无")
    });
    const {
      body: _0x4cb4c8
    } = await _0x2be730[_0x1dac74(571)](request, {
      method: _0x2be730[_0x1dac74(1059)],
      url: _0x349390[_0x1dac74(1294) + _0x1dac74(1107)],
      headers: {
        Host: _0x349390[_0x1dac74(957)],
        "User-Agent": _0x2be730[_0x1dac74(739)],
        Cookie: _0x46196c
      },
      timeout: 12000
    }, _0x5f4c06, "[" + _0x349390[_0x1dac74(569)] + _0x1dac74(528));
    _0x2be730[_0x1dac74(811)](logDev, "[" + _0x349390[_0x1dac74(569)] + _0x1dac74(624), _0x4cb4c8);
    if (!_0x4cb4c8) {
      _0x2be730[_0x1dac74(571)](logError, "[" + _0x349390[_0x1dac74(569)] + (_0x1dac74(1081) + "回"), new Error(_0x2be730[_0x1dac74(595)]), "[" + _0x349390[_0x1dac74(569)] + _0x1dac74(528));
      return {
        success: false,
        ckExpired: true
      };
    }
    if (_0x2be730[_0x1dac74(768)](_0x349390[_0x1dac74(1222)], _0x2be730[_0x1dac74(1097)]) && _0x2be730[_0x1dac74(703)](_0x4cb4c8[_0x1dac74(594)], 1) && _0x4cb4c8[_0x1dac74(715)]) {
      const _0x177df4 = _0x2be730[_0x1dac74(537)](Number, _0x4cb4c8[_0x1dac74(715)][_0x1dac74(771)]) || 0;
      const _0x1668f3 = _0x2be730[_0x1dac74(537)](Number, _0x4cb4c8[_0x1dac74(715)][_0x1dac74(953) + _0x1dac74(496)]) || 0;
      return {
        nickname: _0x4cb4c8[_0x1dac74(715)][_0x1dac74(830)]?.[_0x1dac74(1050)],
        totalCoin: _0x177df4,
        allCash: _0x1668f3,
        success: true,
        ckExpired: false
      };
    } else {
      if (_0x2be730[_0x1dac74(787)](_0x349390[_0x1dac74(1222)], _0x2be730[_0x1dac74(694)]) && _0x2be730[_0x1dac74(1302)](_0x4cb4c8[_0x1dac74(594)], 1) && _0x4cb4c8[_0x1dac74(715)]) {
        const _0x49c1d0 = _0x2be730[_0x1dac74(537)](Number, _0x4cb4c8[_0x1dac74(715)][_0x1dac74(806)]) || 0;
        const _0x1fdaf1 = _0x2be730[_0x1dac74(1248)](Number, _0x4cb4c8[_0x1dac74(715)][_0x1dac74(1098)]) || 0;
        return {
          nickname: _0x4cb4c8[_0x1dac74(715)][_0x1dac74(830)]?.[_0x1dac74(1050)],
          totalCoin: _0x49c1d0,
          allCash: _0x1fdaf1,
          success: true,
          ckExpired: false
        };
      }
    }
    _0x2be730[_0x1dac74(811)](logUser, "[" + _0x349390[_0x1dac74(569)] + (_0x1dac74(1039) + _0x1dac74(1101) + "过期"), _0x2be730[_0x1dac74(1315)]);
    return {
      success: false,
      ckExpired: true
    };
  } catch (_0x532da9) {
    _0x2be730[_0x1dac74(1201)](logError, "[" + _0x349390[_0x1dac74(569)] + _0x1dac74(480), _0x532da9, "[" + _0x349390[_0x1dac74(569)] + _0x1dac74(528));
    return {
      success: false,
      ckExpired: true
    };
  }
}
class KuaishouAccount {
  constructor({
    index: _0x31ab4d,
    salt: _0x2a4143,
    cookie: _0x393955,
    remark = _0x1a58f5(952),
    proxyUrl = null,
    phpKey: _0xe2eac3
  }) {
    const _0x5b774a = _0x1a58f5;
    const _0x5eee03 = {
      Viusy: function (_0x110b4f, _0x33a635) {
        return _0x110b4f || _0x33a635;
      },
      qHUig: function (_0x3716db, _0x503166) {
        return _0x3716db(_0x503166);
      },
      GevNh: function (_0x4ee113, _0x158ab1) {
        return _0x4ee113 - _0x158ab1;
      },
      tQhjY: function (_0x304d0d, _0x32b62b, _0x22f90c) {
        return _0x304d0d(_0x32b62b, _0x22f90c);
      },
      DmsPz: _0x5b774a(829),
      dBiCF: function (_0x65fb0f, _0x22bd7f) {
        return _0x65fb0f > _0x22bd7f;
      },
      KUalY: function (_0x132468, _0x128cfa, _0x5c26b6) {
        return _0x132468(_0x128cfa, _0x5c26b6);
      },
      xAvfw: _0x5b774a(1014)
    };
    this[_0x5b774a(781)] = _0x5eee03[_0x5b774a(1329)](_0x31ab4d, 1);
    this[_0x5b774a(487)] = _0x2a4143;
    this[_0x5b774a(1092) + _0x5b774a(875)] = _0x393955;
    this[_0x5b774a(745)] = _0x393955;
    this[_0x5b774a(652)] = remark;
    this[_0x5b774a(1083)] = proxyUrl;
    this[_0x5b774a(635)] = _0xe2eac3;
    this[_0x5b774a(645)] = _0x5eee03[_0x5b774a(1016)](getPlatformFromCookie, _0x393955);
    this[_0x5b774a(1180)] = null;
    this[_0x5b774a(1104) + "ks"] = false;
    this[_0x5b774a(1181) + _0x5b774a(1173)] = 0;
    this[_0x5b774a(1181) + _0x5b774a(522)] = ENV_CONFIG[_0x5b774a(1032) + _0x5b774a(731) + "IT"];
    this[_0x5b774a(850) + _0x5b774a(730)] = 0;
    this[_0x5b774a(963) + _0x5b774a(1021)] = ENV_CONFIG[_0x5b774a(702) + _0x5b774a(1072)];
    this[_0x5b774a(1221)] = ENV_CONFIG[_0x5b774a(1148) + "G"][_0x5b774a(1079)](_0x2d4317 => ({
      ..._0x2d4317,
      currentCount: 0
    }));
    this[_0x5b774a(770)] = Date[_0x5b774a(1137)]();
    this[_0x5b774a(812)] = _0x5eee03[_0x5b774a(891)](this[_0x5b774a(770)], 30000);
    this[_0x5b774a(984)] = {};
    this[_0x5b774a(799) + _0x5b774a(588)] = {};
    this[_0x5b774a(924) + _0x5b774a(464)] = 0;
    this[_0x5b774a(1159) + _0x5b774a(815)] = 0;
    this[_0x5b774a(1128) + _0x5b774a(815)] = 0;
    this[_0x5b774a(1221)][_0x5b774a(977)](_0x190842 => {
      const _0xb1d15 = _0x5b774a;
      this[_0xb1d15(984)][_0x190842[_0xb1d15(1002)]] = {
        success: 0,
        failed: 0,
        totalReward: 0
      };
      this[_0xb1d15(799) + _0xb1d15(588)][_0x190842[_0xb1d15(1002)]] = false;
    });
    _0x5eee03[_0x5b774a(482)](logUser, _0x5b774a(969) + this[_0x5b774a(781)] + _0x5b774a(1029), _0x5eee03[_0x5b774a(1115)]);
    if (_0x5eee03[_0x5b774a(686)](this[_0x5b774a(1221)][_0x5b774a(1182)], 0)) {
      const _0x19ada7 = this[_0x5b774a(1221)][_0x5b774a(1079)](_0x5250e2 => _0x5250e2[_0x5b774a(1002)] + "(" + _0x5250e2[_0x5b774a(759) + "t"] + "次)")[_0x5b774a(764)](", ");
      _0x5eee03[_0x5b774a(482)](logUser, _0x5b774a(969) + this[_0x5b774a(781)] + _0x5b774a(844) + _0x19ada7, _0x5eee03[_0x5b774a(1115)]);
    } else {
      _0x5eee03[_0x5b774a(579)](logUser, _0x5b774a(969) + this[_0x5b774a(781)] + (_0x5b774a(929) + _0x5b774a(896) + _0x5b774a(1353)), _0x5eee03[_0x5b774a(1188)]);
    }
    this[_0x5b774a(514)]();
  }
  async [_0x1a58f5(514)]() {
    const _0x47d2e4 = _0x1a58f5;
    const _0x4af898 = {
      yZtLb: function (_0x81d79f, _0x11245f) {
        return _0x81d79f(_0x11245f);
      },
      qMAEL: function (_0xde7635, _0x118a81, _0x2b6fc2, _0x38d67a) {
        return _0xde7635(_0x118a81, _0x2b6fc2, _0x38d67a);
      },
      wrdnc: _0x47d2e4(468) + "果",
      BrYss: function (_0x242bb0) {
        return _0x242bb0();
      },
      MYYRq: function (_0xe8334c, _0x2dcbca, _0xa44d59) {
        return _0xe8334c(_0x2dcbca, _0xa44d59);
      },
      nIqze: _0x47d2e4(937)
    };
    try {
      if (this[_0x47d2e4(1083)]) {
        const _0x274795 = await _0x4af898[_0x47d2e4(908)](getProxyExitIP, this[_0x47d2e4(1083)]);
        if (!_0x274795) {
          this[_0x47d2e4(1104) + "ks"] = true;
          _0x4af898[_0x47d2e4(1102)](logError, _0x47d2e4(969) + this[_0x47d2e4(781)] + _0x47d2e4(1264), new Error(_0x4af898[_0x47d2e4(626)]), _0x47d2e4(969) + this[_0x47d2e4(781)] + _0x47d2e4(688));
          return;
        }
        this[_0x47d2e4(1180)] = _0x274795;
      } else {
        if (!localPublicIP) {
          await _0x4af898[_0x47d2e4(1308)](getPublicIP);
        }
        this[_0x47d2e4(1180)] = localPublicIP;
      }
      _0x4af898[_0x47d2e4(479)](logUser, _0x47d2e4(969) + this[_0x47d2e4(781)] + (_0x47d2e4(671) + _0x47d2e4(1038)) + this[_0x47d2e4(1180)], _0x4af898[_0x47d2e4(898)]);
    } catch (_0x26b692) {
      this[_0x47d2e4(1104) + "ks"] = true;
      _0x4af898[_0x47d2e4(1102)](logError, _0x47d2e4(969) + this[_0x47d2e4(781)] + _0x47d2e4(1264), _0x26b692, _0x47d2e4(969) + this[_0x47d2e4(781)] + _0x47d2e4(663));
    }
  }
  async [_0x1a58f5(1195) + _0x1a58f5(490)](_0x44c9de, _0x448587, _0x8294a1 = 3) {
    const _0x5ea4e4 = _0x1a58f5;
    const _0x54be69 = {
      NFkUL: function (_0x58fc80, _0x5943a2) {
        return _0x58fc80 < _0x5943a2;
      },
      qPvTb: function (_0x2648ea) {
        return _0x2648ea();
      },
      kwrqe: function (_0x40e4d0, _0x2d9592, _0x3e9a6e) {
        return _0x40e4d0(_0x2d9592, _0x3e9a6e);
      },
      UtbUC: function (_0xf63b37, _0x529858) {
        return _0xf63b37 + _0x529858;
      },
      MWgxM: function (_0x585fec, _0xda636a, _0x494c38, _0x26d566) {
        return _0x585fec(_0xda636a, _0x494c38, _0x26d566);
      }
    };
    let _0x1370e3 = 0;
    while (_0x54be69[_0x5ea4e4(744)](_0x1370e3, _0x8294a1) && !this[_0x5ea4e4(1104) + "ks"]) {
      try {
        const _0x5e63c6 = await _0x54be69[_0x5ea4e4(1340)](_0x44c9de);
        if (_0x5e63c6) {
          return _0x5e63c6;
        }
      } catch (_0x4aecfa) {
        _0x54be69[_0x5ea4e4(675)](logDev, _0x448587 + " 第" + _0x54be69[_0x5ea4e4(668)](_0x1370e3, 1) + _0x5ea4e4(1244), _0x4aecfa[_0x5ea4e4(763)]);
      }
      _0x1370e3++;
      if (_0x54be69[_0x5ea4e4(744)](_0x1370e3, _0x8294a1) && !this[_0x5ea4e4(1104) + "ks"]) {
        await new Promise(_0x4c1fe1 => setTimeout(_0x4c1fe1, 2000));
      }
    }
    _0x54be69[_0x5ea4e4(495)](logError, _0x448587 + _0x5ea4e4(970), new Error(_0x5ea4e4(946) + _0x8294a1 + _0x5ea4e4(1203)), "[" + this[_0x5ea4e4(645)][_0x5ea4e4(569)] + _0x5ea4e4(564) + this[_0x5ea4e4(652)] + "] " + _0x448587 + "重试");
    return null;
  }
  async [_0x1a58f5(1240)](_0x583585) {
    const _0x46c1d9 = _0x1a58f5;
    const _0x964581 = {
      NhjCp: function (_0x40c2d3, _0x3a8db4, _0x4eb967) {
        return _0x40c2d3(_0x3a8db4, _0x4eb967);
      },
      SjajC: _0x46c1d9(829),
      FZkWu: function (_0x365990, _0x3887c4, _0x5ae2b5) {
        return _0x365990(_0x3887c4, _0x5ae2b5);
      },
      yMgKq: function (_0x40b9ad, _0x278895) {
        return _0x40b9ad >= _0x278895;
      },
      pLxMm: function (_0x5b16d7, _0x31dde3, _0x38adbe) {
        return _0x5b16d7(_0x31dde3, _0x38adbe);
      },
      nJEDK: _0x46c1d9(486),
      KcMUu: function (_0x28334f, _0x5c73fd, _0x2d0e7c, _0x441c3a) {
        return _0x28334f(_0x5c73fd, _0x2d0e7c, _0x441c3a);
      },
      edWqK: function (_0x341b83, _0x18fdd9, _0xf2a4c8) {
        return _0x341b83(_0x18fdd9, _0xf2a4c8);
      },
      bPOaS: function (_0x3673f8, _0x436fcc) {
        return _0x3673f8 === _0x436fcc;
      },
      oMwvO: _0x46c1d9(1193),
      IjYET: function (_0x218901, _0x5f16ae) {
        return _0x218901 > _0x5f16ae;
      },
      KpqjO: function (_0x2207a0, _0x4c6fde) {
        return _0x2207a0 + _0x4c6fde;
      },
      zrcBx: _0x46c1d9(1274),
      NudqT: function (_0x189820, _0x4d1d3a) {
        return _0x189820(_0x4d1d3a);
      },
      SbmOH: function (_0x19eeb5, _0x5dd43d) {
        return _0x19eeb5 === _0x5dd43d;
      },
      TtDAx: _0x46c1d9(518),
      Cxskq: function (_0x1d4a54, _0x16869f, _0x2de568) {
        return _0x1d4a54(_0x16869f, _0x2de568);
      },
      GxBHt: function (_0x3a4e10, _0x2c30c6, _0x54d607) {
        return _0x3a4e10(_0x2c30c6, _0x54d607);
      },
      JEgct: _0x46c1d9(937),
      OYSxe: function (_0x2bb23b, _0x3c587d, _0x1afea8) {
        return _0x2bb23b(_0x3c587d, _0x1afea8);
      },
      gFTbg: function (_0x1e574e, _0x516495, _0x1d06cf) {
        return _0x1e574e(_0x516495, _0x1d06cf);
      },
      eACkk: function (_0x178bad, _0xb6eb4a) {
        return _0x178bad >= _0xb6eb4a;
      },
      XXgrq: function (_0x2769e5, _0x266d85, _0xef79e2) {
        return _0x2769e5(_0x266d85, _0xef79e2);
      }
    };
    if (this[_0x46c1d9(1104) + "ks"]) {
      return null;
    }
    _0x964581[_0x46c1d9(760)](logUser, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + _0x46c1d9(492) + _0x583585 + _0x46c1d9(1207), _0x964581[_0x46c1d9(1031)]);
    const _0x272496 = await this[_0x46c1d9(1195) + _0x46c1d9(490)](() => getAdConfigFromPHP(this[_0x46c1d9(645)], _0x583585, this[_0x46c1d9(487)], this[_0x46c1d9(745)], this[_0x46c1d9(1180)], this[_0x46c1d9(635)]), "获取" + _0x583585 + _0x46c1d9(777));
    if (!_0x272496 || this[_0x46c1d9(1104) + "ks"]) {
      !this[_0x46c1d9(1104) + "ks"] && (this[_0x46c1d9(850) + _0x46c1d9(730)]++, _0x964581[_0x46c1d9(491)](logDev, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + "] " + _0x583585 + _0x46c1d9(545), _0x46c1d9(1157) + this[_0x46c1d9(850) + _0x46c1d9(730)] + "/" + this[_0x46c1d9(963) + _0x46c1d9(1021)]), _0x964581[_0x46c1d9(650)](this[_0x46c1d9(850) + _0x46c1d9(730)], this[_0x46c1d9(963) + _0x46c1d9(1021)]) && (this[_0x46c1d9(1104) + "ks"] = true, _0x964581[_0x46c1d9(873)](logUser, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + (_0x46c1d9(573) + _0x46c1d9(839)) + this[_0x46c1d9(963) + _0x46c1d9(1021)] + (_0x46c1d9(888) + "务"), _0x964581[_0x46c1d9(529)])));
      return null;
    }
    const {
      body: _0x1a181c
    } = await _0x964581[_0x46c1d9(1117)](request, {
      method: _0x272496[_0x46c1d9(869) + _0x46c1d9(817)][_0x46c1d9(672)],
      url: _0x272496[_0x46c1d9(869) + _0x46c1d9(817)][_0x46c1d9(611)],
      headers: _0x272496[_0x46c1d9(869) + _0x46c1d9(817)][_0x46c1d9(753)],
      form: _0x272496[_0x46c1d9(869) + _0x46c1d9(817)][_0x46c1d9(467)],
      timeout: _0x272496[_0x46c1d9(869) + _0x46c1d9(817)][_0x46c1d9(726)] || 12000
    }, this[_0x46c1d9(1083)], "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + "] " + _0x583585 + _0x46c1d9(538));
    if (!_0x1a181c || this[_0x46c1d9(1104) + "ks"]) {
      this[_0x46c1d9(850) + _0x46c1d9(730)]++;
      _0x964581[_0x46c1d9(491)](logDev, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + "] " + _0x583585 + _0x46c1d9(947), _0x46c1d9(1157) + this[_0x46c1d9(850) + _0x46c1d9(730)] + "/" + this[_0x46c1d9(963) + _0x46c1d9(1021)]);
      _0x964581[_0x46c1d9(650)](this[_0x46c1d9(850) + _0x46c1d9(730)], this[_0x46c1d9(963) + _0x46c1d9(1021)]) && (this[_0x46c1d9(1104) + "ks"] = true, _0x964581[_0x46c1d9(1131)](logUser, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + (_0x46c1d9(573) + _0x46c1d9(839)) + this[_0x46c1d9(963) + _0x46c1d9(1021)] + (_0x46c1d9(888) + "务"), _0x964581[_0x46c1d9(529)]));
      return null;
    }
    if (_0x964581[_0x46c1d9(1258)](_0x1a181c[_0x46c1d9(621)], "OK") && _0x1a181c[_0x46c1d9(1109)] && _0x1a181c[_0x46c1d9(1109)][0] && _0x1a181c[_0x46c1d9(1109)][0].ad) {
      const _0x422541 = _0x1a181c[_0x46c1d9(1109)][0];
      const _0x361ed9 = _0x422541[_0x46c1d9(882)] || _0x422541.ad[_0x46c1d9(882)] || _0x964581[_0x46c1d9(886)];
      const _0x13ca83 = _0x964581[_0x46c1d9(967)](_0x361ed9[_0x46c1d9(1182)], 50) ? _0x964581[_0x46c1d9(680)](_0x361ed9[_0x46c1d9(1024)](0, 50), _0x964581[_0x46c1d9(962)]) : _0x361ed9;
      let _0x3e2671 = 0;
      try {
        if (_0x422541.ad[_0x46c1d9(1317)]) {
          const _0x1b9e13 = JSON[_0x46c1d9(674)](_0x422541.ad[_0x46c1d9(1317)]);
          _0x3e2671 = _0x964581[_0x46c1d9(1266)](Number, _0x1b9e13[_0x46c1d9(725)]) || 0;
        }
        _0x964581[_0x46c1d9(1204)](_0x3e2671, 0) && (_0x3e2671 = _0x964581[_0x46c1d9(1266)](parseInt, _0x422541.ad[_0x46c1d9(592)]?.[_0x46c1d9(1316) + _0x46c1d9(822)]?.[_0x46c1d9(918)] || _0x422541.ad[_0x46c1d9(592)]?.[_0x46c1d9(597) + _0x46c1d9(521)]?.[_0x46c1d9(1316) + _0x46c1d9(822)]?.[_0x46c1d9(510)] || _0x422541.ad[_0x46c1d9(725)] || 0) || 0);
      } catch (_0x40c7ed) {
        _0x964581[_0x46c1d9(1117)](logError, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + (_0x46c1d9(590) + "失败"), _0x40c7ed, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + "] " + _0x583585 + _0x46c1d9(950));
        _0x3e2671 = 0;
      }
      const _0x35ce32 = _0x422541[_0x46c1d9(692)] || "";
      const _0x582c97 = _0x35ce32[_0x46c1d9(818)]("/")[1]?.[_0x46c1d9(818)]("_")?.[0] || "";
      if (!_0x582c97 || _0x964581[_0x46c1d9(1258)](_0x582c97[_0x46c1d9(581)](), "")) {
        const _0x14e552 = _0x964581[_0x46c1d9(758)][_0x46c1d9(818)]("|");
        let _0x3f7c78 = 0;
        while (true) {
          switch (_0x14e552[_0x3f7c78++]) {
            case "0":
              _0x964581[_0x46c1d9(650)](this[_0x46c1d9(850) + _0x46c1d9(730)], this[_0x46c1d9(963) + _0x46c1d9(1021)]) && (this[_0x46c1d9(1104) + "ks"] = true, _0x964581[_0x46c1d9(473)](logUser, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + (_0x46c1d9(573) + _0x46c1d9(839)) + this[_0x46c1d9(963) + _0x46c1d9(1021)] + (_0x46c1d9(888) + "务"), _0x964581[_0x46c1d9(529)]));
              continue;
            case "1":
              _0x964581[_0x46c1d9(1131)](logDev, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + "] " + _0x583585 + (_0x46c1d9(1345) + _0x46c1d9(536)), _0x46c1d9(1157) + this[_0x46c1d9(850) + _0x46c1d9(730)] + "/" + this[_0x46c1d9(963) + _0x46c1d9(1021)]);
              continue;
            case "2":
              this[_0x46c1d9(850) + _0x46c1d9(730)]++;
              continue;
            case "3":
              _0x964581[_0x46c1d9(1242)](logUser, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + _0x46c1d9(1003), _0x964581[_0x46c1d9(529)]);
              continue;
            case "4":
              return null;
          }
          break;
        }
      }
      _0x964581[_0x46c1d9(873)](logUser, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + _0x46c1d9(1155) + _0x13ca83 + _0x46c1d9(628) + _0x3e2671 + (_0x46c1d9(585) + ": ") + _0x582c97, _0x964581[_0x46c1d9(1227)]);
      let _0x47652f = false;
      try {
        _0x47652f = _0x422541.ad[_0x46c1d9(592)]?.[_0x46c1d9(1212) + _0x46c1d9(798)]?.[_0x46c1d9(1027)] || false;
      } catch (_0x84d673) {
        _0x964581[_0x46c1d9(614)](logDev, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + (_0x46c1d9(741) + "失败"), _0x84d673[_0x46c1d9(763)]);
      }
      return {
        cid: _0x422541.ad[_0x46c1d9(1257)],
        llsid: _0x582c97,
        hasRewardEnd: _0x47652f,
        expectedCoins: _0x3e2671
      };
    }
    this[_0x46c1d9(850) + _0x46c1d9(730)]++;
    _0x964581[_0x46c1d9(760)](logUser, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + _0x46c1d9(1003), _0x964581[_0x46c1d9(529)]);
    _0x964581[_0x46c1d9(991)](logDev, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + "] " + _0x583585 + _0x46c1d9(684), _0x46c1d9(1157) + this[_0x46c1d9(850) + _0x46c1d9(730)] + "/" + this[_0x46c1d9(963) + _0x46c1d9(1021)]);
    _0x964581[_0x46c1d9(866)](this[_0x46c1d9(850) + _0x46c1d9(730)], this[_0x46c1d9(963) + _0x46c1d9(1021)]) && (this[_0x46c1d9(1104) + "ks"] = true, _0x964581[_0x46c1d9(461)](logUser, "[" + this[_0x46c1d9(645)][_0x46c1d9(569)] + _0x46c1d9(564) + this[_0x46c1d9(652)] + (_0x46c1d9(573) + _0x46c1d9(839)) + this[_0x46c1d9(963) + _0x46c1d9(1021)] + (_0x46c1d9(888) + "务"), _0x964581[_0x46c1d9(529)]));
    return null;
  }
  async [_0x1a58f5(1124) + "rt"](_0x5aa4ba, _0x451327, _0x2d0573, _0x2a094e) {
    const _0x51ce57 = _0x1a58f5;
    const _0x1b47bc = {
      lZVfM: function (_0x19b63b, _0x5e5422, _0x3356e4) {
        return _0x19b63b(_0x5e5422, _0x3356e4);
      },
      ELxxA: _0x51ce57(829),
      qkRCn: function (_0x20b6cb, _0x56997e, _0x40ff10, _0x1189d5) {
        return _0x20b6cb(_0x56997e, _0x40ff10, _0x1189d5);
      },
      IAZbA: function (_0x49e32e, _0x4d9714, _0x3eeab5, _0x30f730) {
        return _0x49e32e(_0x4d9714, _0x3eeab5, _0x30f730);
      },
      ZMKaA: _0x51ce57(507) + _0x51ce57(994),
      UZqta: _0x51ce57(867),
      AtwYm: function (_0x9ac496, _0x10ce30, _0x285dd7, _0x2381c6) {
        return _0x9ac496(_0x10ce30, _0x285dd7, _0x2381c6);
      },
      CyBpG: function (_0x281329, _0x31868e) {
        return _0x281329 === _0x31868e;
      },
      dGKXE: function (_0x6cec65, _0x5b2ee2) {
        return _0x6cec65 - _0x5b2ee2;
      },
      fWdoH: function (_0x37da38, _0x4f1348) {
        return _0x37da38 > _0x4f1348;
      },
      sprvs: _0x51ce57(1151),
      URgyq: function (_0x17f355, _0x30071d, _0x1bac78) {
        return _0x17f355(_0x30071d, _0x1bac78);
      },
      XsFeg: _0x51ce57(937),
      RMCpi: function (_0x4b2a73, _0x5dcb9c, _0x2d2f81) {
        return _0x4b2a73(_0x5dcb9c, _0x2d2f81);
      },
      QILaF: function (_0x3fafcb, _0xb748f4, _0x9b2b5f, _0x24e77f) {
        return _0x3fafcb(_0xb748f4, _0x9b2b5f, _0x24e77f);
      }
    };
    if (this[_0x51ce57(1104) + "ks"]) {
      return {
        success: false,
        reward: 0
      };
    }
    _0x1b47bc[_0x51ce57(670)](logUser, "[" + this[_0x51ce57(645)][_0x51ce57(569)] + _0x51ce57(564) + this[_0x51ce57(652)] + _0x51ce57(1298) + _0x2d0573 + _0x51ce57(1304), _0x1b47bc[_0x51ce57(1082)]);
    const _0xbea480 = await _0x1b47bc[_0x51ce57(649)](getAccountBasicInfo, this[_0x51ce57(745)], this[_0x51ce57(645)], this[_0x51ce57(1083)]);
    if (!_0xbea480[_0x51ce57(937)]) {
      _0x1b47bc[_0x51ce57(921)](logError, "[" + this[_0x51ce57(645)][_0x51ce57(569)] + _0x51ce57(564) + this[_0x51ce57(652)] + (_0x51ce57(475) + _0x51ce57(842)), new Error(_0x1b47bc[_0x51ce57(974)]), "[" + this[_0x51ce57(645)][_0x51ce57(569)] + _0x51ce57(564) + this[_0x51ce57(652)] + "] " + _0x2d0573 + _0x51ce57(582));
      return {
        success: false,
        reward: 0
      };
    }
    const _0x489fd0 = _0xbea480[_0x51ce57(806)];
    _0x1b47bc[_0x51ce57(670)](logDev, "[" + this[_0x51ce57(645)][_0x51ce57(569)] + _0x51ce57(564) + this[_0x51ce57(652)] + (_0x51ce57(565) + _0x51ce57(845)) + _0x489fd0, _0x1b47bc[_0x51ce57(546)]);
    const _0x37d87e = {
      creativeId: _0x5aa4ba,
      llsid: _0x451327,
      startTime: this[_0x51ce57(770)],
      endTime: this[_0x51ce57(812)]
    };
    const _0x3414a0 = await this[_0x51ce57(1195) + _0x51ce57(490)](() => getReportConfigFromPHP(this[_0x51ce57(645)], _0x2d0573, this[_0x51ce57(487)], this[_0x51ce57(745)], this[_0x51ce57(1180)], _0x37d87e, this[_0x51ce57(635)], _0x2a094e), "获取" + _0x2d0573 + _0x51ce57(780));
    if (!_0x3414a0 || this[_0x51ce57(1104) + "ks"]) {
      return {
        success: false,
        reward: 0
      };
    }
    const _0x4ab5c7 = {
      method: _0x3414a0[_0x51ce57(672)],
      url: _0x3414a0[_0x51ce57(611)],
      headers: _0x3414a0[_0x51ce57(753)],
      timeout: _0x3414a0[_0x51ce57(726)] || 12000
    };
    if (_0x3414a0[_0x51ce57(639)]) {
      _0x4ab5c7[_0x51ce57(467)] = querystring[_0x51ce57(674)](_0x3414a0[_0x51ce57(639)]);
    } else {
      if (_0x3414a0[_0x51ce57(467)]) {
        _0x4ab5c7[_0x51ce57(467)] = _0x3414a0[_0x51ce57(467)];
      }
    }
    const {
      body: _0x545c20
    } = await _0x1b47bc[_0x51ce57(762)](request, _0x4ab5c7, this[_0x51ce57(1083)], "[" + this[_0x51ce57(645)][_0x51ce57(569)] + _0x51ce57(564) + this[_0x51ce57(652)] + "] " + _0x2d0573 + _0x51ce57(1297));
    if (!_0x545c20 || this[_0x51ce57(1104) + "ks"]) {
      return {
        success: false,
        reward: 0
      };
    }
    if (_0x1b47bc[_0x51ce57(939)](_0x545c20[_0x51ce57(594)], 1)) {
      await new Promise(_0x503130 => setTimeout(_0x503130, 2000));
      const _0x5467f5 = await _0x1b47bc[_0x51ce57(649)](getAccountBasicInfo, this[_0x51ce57(745)], this[_0x51ce57(645)], this[_0x51ce57(1083)]);
      if (!_0x5467f5[_0x51ce57(937)]) {
        _0x1b47bc[_0x51ce57(649)](logError, "[" + this[_0x51ce57(645)][_0x51ce57(569)] + _0x51ce57(564) + this[_0x51ce57(652)] + (_0x51ce57(632) + _0x51ce57(842)), new Error(_0x1b47bc[_0x51ce57(974)]), "[" + this[_0x51ce57(645)][_0x51ce57(569)] + _0x51ce57(564) + this[_0x51ce57(652)] + "] " + _0x2d0573 + _0x51ce57(860));
        return {
          success: true,
          reward: 0
        };
      }
      const _0x144519 = _0x5467f5[_0x51ce57(806)];
      const _0x480430 = Math[_0x51ce57(998)](0, _0x1b47bc[_0x51ce57(463)](_0x144519, _0x489fd0));
      this[_0x51ce57(1128) + _0x51ce57(815)] = _0x144519;
      this[_0x51ce57(984)][_0x2d0573][_0x51ce57(1202) + "d"] += _0x480430;
      if (_0x1b47bc[_0x51ce57(1210)](_0x480430, 0)) {
        const _0x34f8a4 = _0x1b47bc[_0x51ce57(517)][_0x51ce57(818)]("|");
        let _0x3f9318 = 0;
        while (true) {
          switch (_0x34f8a4[_0x3f9318++]) {
            case "0":
              this[_0x51ce57(924) + _0x51ce57(464)] += _0x480430;
              continue;
            case "1":
              _0x1b47bc[_0x51ce57(1199)](logUser, _0x51ce57(800) + _0x51ce57(1310) + this[_0x51ce57(924) + _0x51ce57(464)] + (_0x51ce57(720) + _0x51ce57(1351)) + GLOBAL_TOTAL_EARNED_COINS + "金币", _0x1b47bc[_0x51ce57(1082)]);
              continue;
            case "2":
              _0x1b47bc[_0x51ce57(1199)](logUser, _0x51ce57(1020) + "得" + _0x480430 + (_0x51ce57(752) + _0x51ce57(845)) + _0x144519 + _0x51ce57(1025) + _0x5467f5[_0x51ce57(1098)][_0x51ce57(1175)](2), _0x1b47bc[_0x51ce57(1296)]);
              continue;
            case "3":
              GLOBAL_TOTAL_EARNED_COINS += _0x480430;
              continue;
            case "4":
              _0x1b47bc[_0x51ce57(765)](logUser, "[" + this[_0x51ce57(645)][_0x51ce57(569)] + _0x51ce57(564) + this[_0x51ce57(652)] + "] " + _0x2d0573 + _0x51ce57(622), _0x1b47bc[_0x51ce57(1296)]);
              continue;
          }
          break;
        }
      } else {
        _0x1b47bc[_0x51ce57(1199)](logUser, "[" + this[_0x51ce57(645)][_0x51ce57(569)] + _0x51ce57(564) + this[_0x51ce57(652)] + "] " + _0x2d0573 + (_0x51ce57(513) + _0x51ce57(1187)), _0x1b47bc[_0x51ce57(1296)]);
        _0x1b47bc[_0x51ce57(1199)](logUser, _0x51ce57(557) + _0x51ce57(1138) + _0x144519 + _0x51ce57(1025) + _0x5467f5[_0x51ce57(1098)][_0x51ce57(1175)](2), _0x1b47bc[_0x51ce57(1082)]);
      }
      this[_0x51ce57(903) + _0x51ce57(1321)](_0x480430);
      return {
        success: true,
        reward: _0x480430
      };
    }
    const _0x3ef7f9 = [20107, 20108, 1003, 415];
    if (_0x3ef7f9[_0x51ce57(553)](_0x545c20[_0x51ce57(594)])) {
      this[_0x51ce57(799) + _0x51ce57(588)][_0x2d0573] = true;
      _0x1b47bc[_0x51ce57(765)](logDev, "[" + this[_0x51ce57(645)][_0x51ce57(569)] + _0x51ce57(564) + this[_0x51ce57(652)] + "] " + _0x2d0573 + _0x51ce57(643), _0x51ce57(856) + _0x545c20[_0x51ce57(594)]);
      return {
        success: false,
        reward: 0,
        limitReached: true
      };
    }
    _0x1b47bc[_0x51ce57(570)](logError, "[" + this[_0x51ce57(645)][_0x51ce57(569)] + _0x51ce57(564) + this[_0x51ce57(652)] + "] " + _0x2d0573 + _0x51ce57(894), new Error(_0x51ce57(591) + _0x545c20[_0x51ce57(594)] + _0x51ce57(942) + _0x545c20[_0x51ce57(621)]), "[" + this[_0x51ce57(645)][_0x51ce57(569)] + _0x51ce57(564) + this[_0x51ce57(652)] + "] " + _0x2d0573 + _0x51ce57(1297));
    return {
      success: false,
      reward: 0
    };
  }
  [_0x1a58f5(903) + _0x1a58f5(1321)](_0x4f9026) {
    const _0x4b3d0d = _0x1a58f5;
    const _0x3bfe5b = {
      QvqJh: function (_0xaabca3, _0x3eff23) {
        return _0xaabca3 < _0x3eff23;
      },
      qeWGi: function (_0x2cf14d) {
        return _0x2cf14d();
      },
      DUYyT: function (_0x24cec5, _0x353abc, _0x19dd9f, _0x30b38f) {
        return _0x24cec5(_0x353abc, _0x19dd9f, _0x30b38f);
      },
      lipiS: function (_0x72b0c2, _0x59f552) {
        return _0x72b0c2 >= _0x59f552;
      },
      TuVHs: function (_0x30da37, _0x314e91, _0x4925fc) {
        return _0x30da37(_0x314e91, _0x4925fc);
      },
      DoAjf: _0x4b3d0d(486),
      gUCMz: function (_0xfaf97c, _0x4eae4a) {
        return _0xfaf97c > _0x4eae4a;
      },
      Dstri: function (_0x13e736, _0x472d84, _0x1e9d6d) {
        return _0x13e736(_0x472d84, _0x1e9d6d);
      },
      xQXyz: _0x4b3d0d(829)
    };
    if (_0x3bfe5b[_0x4b3d0d(837)](_0x4f9026, 10)) {
      this[_0x4b3d0d(1181) + _0x4b3d0d(1173)]++;
      const {
        did: _0x1ac0c8,
        odid: _0x2c2fe7
      } = _0x3bfe5b[_0x4b3d0d(1022)](generateDidOdid);
      this[_0x4b3d0d(745)] = _0x3bfe5b[_0x4b3d0d(618)](replaceDidOdidInCookie, this[_0x4b3d0d(745)], _0x1ac0c8, _0x2c2fe7);
      _0x3bfe5b[_0x4b3d0d(1318)](this[_0x4b3d0d(1181) + _0x4b3d0d(1173)], this[_0x4b3d0d(1181) + _0x4b3d0d(522)]) && (this[_0x4b3d0d(1104) + "ks"] = true, _0x3bfe5b[_0x4b3d0d(772)](logUser, "[" + this[_0x4b3d0d(645)][_0x4b3d0d(569)] + _0x4b3d0d(564) + this[_0x4b3d0d(652)] + _0x4b3d0d(996) + this[_0x4b3d0d(1181) + _0x4b3d0d(522)] + _0x4b3d0d(1189), _0x3bfe5b[_0x4b3d0d(1136)]));
    } else {
      _0x3bfe5b[_0x4b3d0d(469)](this[_0x4b3d0d(1181) + _0x4b3d0d(1173)], 0) && (this[_0x4b3d0d(1181) + _0x4b3d0d(1173)] = 0, _0x3bfe5b[_0x4b3d0d(627)](logUser, "[" + this[_0x4b3d0d(645)][_0x4b3d0d(569)] + _0x4b3d0d(564) + this[_0x4b3d0d(652)] + (_0x4b3d0d(932) + "数器"), _0x3bfe5b[_0x4b3d0d(501)]));
    }
  }
  async [_0x1a58f5(605) + "k"](_0x5f11dd) {
    const _0x4ad657 = _0x1a58f5;
    const _0x282707 = {
      kpALG: function (_0x5c358b, _0x4e18b5, _0x9dec65) {
        return _0x5c358b(_0x4e18b5, _0x9dec65);
      },
      qDbli: _0x4ad657(727) + _0x4ad657(754),
      ViNjm: function (_0x4ba33a, _0xe6500d) {
        return _0x4ba33a * _0xe6500d;
      },
      ddVPl: function (_0x160651, _0x30c850) {
        return _0x160651 + _0x30c850;
      },
      hsKKJ: function (_0x4e3ef2, _0x58ce61) {
        return _0x4e3ef2 - _0x58ce61;
      },
      ZLLHj: function (_0x408bef, _0x1e827a) {
        return _0x408bef / _0x1e827a;
      },
      ZEbuy: _0x4ad657(1271),
      cNkWJ: _0x4ad657(829)
    };
    if (this[_0x4ad657(799) + _0x4ad657(588)][_0x5f11dd] || this[_0x4ad657(1104) + "ks"]) {
      return {
        success: false,
        reward: 0,
        hasRewardEnd: false
      };
    }
    const _0x1cffbe = await this[_0x4ad657(1240)](_0x5f11dd);
    if (!_0x1cffbe || this[_0x4ad657(1104) + "ks"]) {
      this[_0x4ad657(984)][_0x5f11dd][_0x4ad657(556)]++;
      _0x282707[_0x4ad657(1068)](logDev, "[" + this[_0x4ad657(645)][_0x4ad657(569)] + _0x4ad657(564) + this[_0x4ad657(652)] + "] " + _0x5f11dd + _0x4ad657(859), _0x282707[_0x4ad657(876)]);
      return {
        success: false,
        reward: 0,
        hasRewardEnd: false
      };
    }
    const _0x202dba = _0x282707[_0x4ad657(489)](Math[_0x4ad657(857)](_0x282707[_0x4ad657(716)](_0x282707[_0x4ad657(489)](Math[_0x4ad657(1280)](), _0x282707[_0x4ad657(1261)](ENV_CONFIG[_0x4ad657(1337)], ENV_CONFIG[_0x4ad657(899)])), ENV_CONFIG[_0x4ad657(899)])), 1000);
    const _0x19d822 = Math[_0x4ad657(631)](_0x282707[_0x4ad657(506)](_0x202dba, 1000));
    const _0x211168 = _0x1cffbe[_0x4ad657(728) + "nd"] ? _0x282707[_0x4ad657(637)] : "";
    _0x282707[_0x4ad657(1068)](logUser, "[" + this[_0x4ad657(645)][_0x4ad657(569)] + _0x4ad657(564) + this[_0x4ad657(652)] + "] " + _0x5f11dd + _0x4ad657(647) + _0x19d822 + "秒 " + _0x211168, _0x282707[_0x4ad657(1354)]);
    await new Promise(_0x40e7ee => setTimeout(_0x40e7ee, _0x202dba));
    this[_0x4ad657(812)] = Date[_0x4ad657(1137)]();
    this[_0x4ad657(770)] = _0x282707[_0x4ad657(1261)](this[_0x4ad657(812)], _0x202dba);
    const _0xffa58d = await this[_0x4ad657(1124) + "rt"](_0x1cffbe[_0x4ad657(466)], _0x1cffbe[_0x4ad657(1338)], _0x5f11dd, _0x1cffbe[_0x4ad657(854) + _0x4ad657(1276)]);
    if (!this[_0x4ad657(1104) + "ks"]) {
      if (_0xffa58d[_0x4ad657(937)]) {
        this[_0x4ad657(984)][_0x5f11dd][_0x4ad657(937)]++;
      } else {
        this[_0x4ad657(984)][_0x5f11dd][_0x4ad657(556)]++;
      }
    }
    return {
      success: _0xffa58d[_0x4ad657(937)],
      reward: _0xffa58d[_0x4ad657(1011)],
      hasRewardEnd: _0x1cffbe[_0x4ad657(728) + "nd"]
    };
  }
  [_0x1a58f5(587) + "k"]() {
    const _0x50ae56 = _0x1a58f5;
    const _0x3d9844 = {
      alXUV: function (_0x4b134c, _0x48e4ed) {
        return _0x4b134c < _0x48e4ed;
      }
    };
    if (this[_0x50ae56(1104) + "ks"]) {
      return null;
    }
    for (let _0x549c61 of this[_0x50ae56(1221)]) {
      if (_0x3d9844[_0x50ae56(470)](_0x549c61[_0x50ae56(1130) + "nt"], _0x549c61[_0x50ae56(759) + "t"]) && !this[_0x50ae56(799) + _0x50ae56(588)][_0x549c61[_0x50ae56(1002)]]) {
        return _0x549c61;
      }
    }
    return null;
  }
  async [_0x1a58f5(605) + _0x1a58f5(547)]() {
    const _0x466543 = _0x1a58f5;
    const _0x24a838 = {
      rZfnP: _0x466543(923),
      RRLZt: function (_0x2d1214, _0x153f90, _0x5f1e67, _0x5b9c26) {
        return _0x2d1214(_0x153f90, _0x5f1e67, _0x5b9c26);
      },
      oHTMv: function (_0x2d0a8d, _0x2cb39e, _0x2c5233, _0x58ff56) {
        return _0x2d0a8d(_0x2cb39e, _0x2c5233, _0x58ff56);
      },
      ocxoQ: _0x466543(1250) + "效",
      TXsQF: _0x466543(1160),
      MfkNE: function (_0x4bee90, _0x3b645f, _0x14d9de) {
        return _0x4bee90(_0x3b645f, _0x14d9de);
      },
      yToIw: _0x466543(937),
      CQPTN: function (_0xc95360, _0x3b7b18, _0x49bf91) {
        return _0xc95360(_0x3b7b18, _0x49bf91);
      },
      xxTNF: _0x466543(1005),
      tWieO: function (_0x16149c, _0x4083c0, _0x4093ac) {
        return _0x16149c(_0x4083c0, _0x4093ac);
      },
      xHakP: function (_0x1b68b1, _0x51e528) {
        return _0x1b68b1 + _0x51e528;
      },
      IBmzC: _0x466543(829),
      zuJIS: function (_0x2545c1, _0x2bc5aa) {
        return _0x2545c1 * _0x2bc5aa;
      },
      uRCfI: function (_0xca3765, _0x300cfb) {
        return _0xca3765 / _0x300cfb;
      },
      lpFuL: function (_0x452f6f, _0x2d08c9) {
        return _0x452f6f >= _0x2d08c9;
      },
      yCkkS: function (_0x38df17, _0x448a6f) {
        return _0x38df17 >= _0x448a6f;
      },
      laxcw: _0x466543(1267),
      edEYM: _0x466543(1103),
      iZGLF: function (_0x16b671, _0x417c40, _0x2b3910, _0x53672a) {
        return _0x16b671(_0x417c40, _0x2b3910, _0x53672a);
      },
      pHCRa: function (_0x19ffbc, _0x53e535, _0x4e7e79) {
        return _0x19ffbc(_0x53e535, _0x4e7e79);
      }
    };
    if (this[_0x466543(1104) + "ks"]) {
      return {
        success: false,
        index: this[_0x466543(781)],
        remark: this[_0x466543(652)],
        platform: this[_0x466543(645)][_0x466543(569)],
        taskCount: 0,
        totalReward: 0,
        exitIP: this[_0x466543(1180)],
        stopReason: _0x24a838[_0x466543(1287)]
      };
    }
    const _0x3d30d9 = await _0x24a838[_0x466543(598)](getAccountBasicInfo, this[_0x466543(745)], this[_0x466543(645)], this[_0x466543(1083)]);
    if (!_0x3d30d9[_0x466543(937)]) {
      _0x24a838[_0x466543(761)](logError, "[" + this[_0x466543(645)][_0x466543(569)] + _0x466543(564) + this[_0x466543(652)] + _0x466543(690), new Error(_0x24a838[_0x466543(654)]), "[" + this[_0x466543(645)][_0x466543(569)] + _0x466543(564) + this[_0x466543(652)] + _0x466543(723));
      return {
        success: false,
        index: this[_0x466543(781)],
        remark: this[_0x466543(652)],
        platform: this[_0x466543(645)][_0x466543(569)],
        taskCount: 0,
        totalReward: 0,
        exitIP: this[_0x466543(1180)],
        stopReason: _0x24a838[_0x466543(704)]
      };
    }
    this[_0x466543(1159) + _0x466543(815)] = _0x3d30d9[_0x466543(806)];
    this[_0x466543(1128) + _0x466543(815)] = _0x3d30d9[_0x466543(806)];
    const _0x19baea = _0x3d30d9[_0x466543(1098)][_0x466543(1175)](2);
    _0x24a838[_0x466543(717)](logUser, "[" + this[_0x466543(645)][_0x466543(569)] + _0x466543(564) + this[_0x466543(652)] + (_0x466543(986) + "币=") + _0x3d30d9[_0x466543(806)] + _0x466543(1127) + _0x19baea, _0x24a838[_0x466543(975)]);
    _0x24a838[_0x466543(989)](logUser, "[" + this[_0x466543(645)][_0x466543(569)] + _0x466543(564) + this[_0x466543(652)] + _0x466543(1147), _0x24a838[_0x466543(975)]);
    let _0x48a09c = 0;
    let _0x3a82ad = _0x24a838[_0x466543(1184)];
    let _0x1173aa;
    while ((_0x1173aa = this[_0x466543(587) + "k"]()) && !this[_0x466543(1104) + "ks"]) {
      _0x24a838[_0x466543(890)](logUser, _0x466543(1243) + _0x1173aa[_0x466543(1002)] + _0x466543(682) + _0x24a838[_0x466543(928)](_0x1173aa[_0x466543(1130) + "nt"], 1) + "/" + _0x1173aa[_0x466543(759) + "t"] + ")", _0x24a838[_0x466543(737)]);
      await this[_0x466543(605) + "k"](_0x1173aa[_0x466543(1002)]);
      _0x1173aa[_0x466543(1130) + "nt"]++;
      _0x48a09c++;
      if (this[_0x466543(587) + "k"]() && !this[_0x466543(1104) + "ks"]) {
        const _0x27a247 = _0x24a838[_0x466543(928)](Math[_0x466543(857)](_0x24a838[_0x466543(1084)](Math[_0x466543(1280)](), 20100)), 10000);
        _0x24a838[_0x466543(717)](logUser, _0x466543(864) + Math[_0x466543(631)](_0x24a838[_0x466543(1326)](_0x27a247, 1000)) + _0x466543(494), _0x24a838[_0x466543(737)]);
        await new Promise(_0x20619c => setTimeout(_0x20619c, _0x27a247));
      }
    }
    if (_0x24a838[_0x466543(838)](this[_0x466543(1181) + _0x466543(1173)], this[_0x466543(1181) + _0x466543(522)])) {
      _0x3a82ad = "连续" + this[_0x466543(1181) + _0x466543(522)] + _0x466543(567);
    } else {
      if (_0x24a838[_0x466543(620)](this[_0x466543(850) + _0x466543(730)], this[_0x466543(963) + _0x466543(1021)])) {
        _0x3a82ad = _0x466543(617) + this[_0x466543(963) + _0x466543(1021)] + (_0x466543(1067) + _0x466543(823));
      } else {
        if (!this[_0x466543(587) + "k"]()) {
          _0x3a82ad = _0x24a838[_0x466543(1110)];
        } else {
          if (_0x3d30d9[_0x466543(1319)]) {
            _0x3a82ad = _0x24a838[_0x466543(704)];
          } else {
            if (this[_0x466543(1104) + "ks"]) {
              _0x3a82ad = _0x24a838[_0x466543(774)];
            }
          }
        }
      }
    }
    const _0x18bc02 = await _0x24a838[_0x466543(648)](getAccountBasicInfo, this[_0x466543(745)], this[_0x466543(645)], this[_0x466543(1083)]);
    const _0x575be8 = _0x18bc02[_0x466543(937)] ? _0x18bc02[_0x466543(806)] : this[_0x466543(1128) + _0x466543(815)];
    const _0x551b51 = _0x18bc02[_0x466543(937)] ? _0x18bc02[_0x466543(1098)][_0x466543(1175)](2) : "未知";
    _0x24a838[_0x466543(493)](logUser, "[" + this[_0x466543(645)][_0x466543(569)] + _0x466543(564) + this[_0x466543(652)] + (_0x466543(900) + _0x466543(719)) + this[_0x466543(924) + _0x466543(464)] + (_0x466543(1332) + _0x466543(845)) + _0x575be8 + (_0x466543(1245) + " ") + _0x551b51 + _0x466543(641) + _0x3a82ad, _0x24a838[_0x466543(975)]);
    return {
      success: true,
      index: this[_0x466543(781)],
      remark: this[_0x466543(652)],
      platform: this[_0x466543(645)][_0x466543(569)],
      taskCount: _0x48a09c,
      totalReward: this[_0x466543(924) + _0x466543(464)],
      exitIP: this[_0x466543(1180)],
      stopReason: _0x3a82ad
    };
  }
}
async function runConcurrentTasks(_0x1a9a9b) {
  const _0x299edf = _0x1a58f5;
  const _0xa97fec = {
    AdHaX: function (_0x214a81, _0x7a4aaa, _0x417874) {
      return _0x214a81(_0x7a4aaa, _0x417874);
    },
    gpoiE: _0x299edf(937)
  };
  _0xa97fec[_0x299edf(658)](logUser, _0x299edf(1254) + _0x299edf(834) + _0x1a9a9b[_0x299edf(1182)], _0xa97fec[_0x299edf(1118)]);
  const _0xe46816 = _0x1a9a9b[_0x299edf(1079)](_0x9d478 => {
    return async () => {
      const _0x510e5b = _0x4727;
      const _0x2d8a8e = new KuaishouAccount(_0x9d478);
      await new Promise(_0x181f20 => setTimeout(_0x181f20, 200));
      return await _0x2d8a8e[_0x510e5b(605) + _0x510e5b(547)]();
    };
  });
  const _0x5341d5 = await Promise[_0x299edf(1206)](_0xe46816[_0x299edf(1079)](_0x4ec611 => _0x4ec611()));
  return _0x5341d5;
}
function parseAccountConfig(_0x56ad46, _0x5002d4) {
  const _0x123c76 = _0x1a58f5;
  const _0x26333c = {
    MOUYC: function (_0x2aa8b3, _0x40573e) {
      return _0x2aa8b3 !== _0x40573e;
    },
    MEHMc: _0x123c76(1035),
    HaPNx: function (_0x1094cc, _0x59bb57, _0x34351f, _0x5b281c) {
      return _0x1094cc(_0x59bb57, _0x34351f, _0x5b281c);
    },
    wcdnA: _0x123c76(1301),
    rJkRQ: function (_0x57b9b0, _0x999a6e) {
      return _0x57b9b0 < _0x999a6e;
    },
    MbhAS: function (_0x27cee1, _0x1163f5, _0x30e69f, _0x5b9075) {
      return _0x27cee1(_0x1163f5, _0x30e69f, _0x5b9075);
    },
    aOikv: function (_0xd3369d, _0x48ef5c, _0x4da7ea) {
      return _0xd3369d(_0x48ef5c, _0x4da7ea);
    },
    TzHHY: _0x123c76(615),
    BXwFV: function (_0x4f5a90, _0x1798d1, _0x5a72a4, _0x5b542f) {
      return _0x4f5a90(_0x1798d1, _0x5a72a4, _0x5b542f);
    },
    oupDU: _0x123c76(559),
    UXpsu: function (_0x155227, _0x530a27, _0x4152c9, _0x3c80b6) {
      return _0x155227(_0x530a27, _0x4152c9, _0x3c80b6);
    },
    MHyPu: _0x123c76(1275),
    jqJns: _0x123c76(766),
    qHLjy: _0x123c76(609),
    pQZfi: _0x123c76(669),
    AySLu: _0x123c76(584),
    BYuwz: function (_0x5b87a9, _0x232959, _0x5371fa) {
      return _0x5b87a9(_0x232959, _0x5371fa);
    },
    xRpaY: function (_0x4ab941, _0x3d4308) {
      return _0x4ab941 || _0x3d4308;
    },
    dwXlK: _0x123c76(952),
    wXFqp: _0x123c76(937)
  };
  if (!_0x56ad46 || _0x26333c[_0x123c76(995)](typeof _0x56ad46, _0x26333c[_0x123c76(870)])) {
    _0x26333c[_0x123c76(1170)](logError, "账号" + _0x5002d4 + _0x123c76(1123), new Error(_0x26333c[_0x123c76(1224)]), "账号" + _0x5002d4 + _0x123c76(708));
    return null;
  }
  const _0x5d28e2 = _0x56ad46[_0x123c76(818)]("#")[_0x123c76(1079)](_0x30ac9a => _0x30ac9a[_0x123c76(581)]());
  if (_0x26333c[_0x123c76(1322)](_0x5d28e2[_0x123c76(1182)], 4)) {
    _0x26333c[_0x123c76(1045)](logError, "账号" + _0x5002d4 + _0x123c76(1123), new Error(_0x123c76(1090) + _0x123c76(607) + _0x123c76(895) + _0x123c76(1217) + _0x123c76(889)), "账号" + _0x5002d4 + _0x123c76(708));
    return null;
  }
  const [_0x918ab, _0x43f3b9, _0x1432ff, _0x25a7f8, _0x52cff7] = _0x5d28e2;
  if (!_0x918ab) {
    _0x26333c[_0x123c76(951)](logDev, "账号" + _0x5002d4 + _0x123c76(902), _0x26333c[_0x123c76(861)]);
  }
  if (!_0x43f3b9) {
    _0x26333c[_0x123c76(1070)](logError, "账号" + _0x5002d4 + _0x123c76(1123), new Error(_0x26333c[_0x123c76(944)]), "账号" + _0x5002d4 + _0x123c76(708));
    return null;
  }
  if (!_0x1432ff) {
    _0x26333c[_0x123c76(533)](logError, "账号" + _0x5002d4 + _0x123c76(1123), new Error(_0x26333c[_0x123c76(1311)]), "账号" + _0x5002d4 + _0x123c76(708));
    return null;
  }
  if (!_0x25a7f8) {
    _0x26333c[_0x123c76(1045)](logError, "账号" + _0x5002d4 + _0x123c76(1123), new Error(_0x26333c[_0x123c76(892)]), "账号" + _0x5002d4 + _0x123c76(708));
    return null;
  }
  let _0x4806d1 = null;
  let _0x3659eb = _0x26333c[_0x123c76(1028)];
  if (_0x52cff7 && _0x52cff7[_0x123c76(1265)](_0x26333c[_0x123c76(1000)])) {
    _0x4806d1 = _0x52cff7;
    _0x3659eb = _0x26333c[_0x123c76(1241)];
  } else {
    _0x52cff7 && _0x26333c[_0x123c76(951)](logDev, "账号" + _0x5002d4 + _0x123c76(865), _0x123c76(769) + _0x52cff7 + _0x123c76(1149));
  }
  _0x26333c[_0x123c76(945)](logUser, _0x123c76(1355) + _0x5002d4 + ": " + _0x26333c[_0x123c76(539)](_0x918ab, _0x26333c[_0x123c76(676)]) + " (" + _0x3659eb + ")", _0x26333c[_0x123c76(1263)]);
  return {
    index: _0x5002d4,
    remark: _0x26333c[_0x123c76(539)](_0x918ab, _0x26333c[_0x123c76(676)]),
    phpKey: _0x43f3b9,
    cookie: _0x1432ff,
    salt: _0x25a7f8,
    proxyUrl: _0x4806d1,
    runMode: _0x3659eb
  };
}
function loadAccountsFromEnv() {
  const _0x58051d = _0x1a58f5;
  const _0x5584f3 = {
    HVTow: function (_0x479df6, _0x5c42d3, _0xfa743b) {
      return _0x479df6(_0x5c42d3, _0xfa743b);
    },
    qZTWw: _0x58051d(980),
    zTcbL: _0x58051d(829),
    TpCYU: function (_0x49dea7, _0x514c2d) {
      return _0x49dea7 <= _0x514c2d;
    },
    tmZbY: function (_0x1ed9ed, _0x38c417, _0x15802f) {
      return _0x1ed9ed(_0x38c417, _0x15802f);
    },
    bwDLx: function (_0x463d8c, _0x5c63ce, _0x2f7004) {
      return _0x463d8c(_0x5c63ce, _0x2f7004);
    },
    zyYSq: _0x58051d(937)
  };
  const _0x52edcd = [];
  const _0xb3db94 = new Set();
  let _0x5e6402 = 1;
  _0x5584f3[_0x58051d(964)](logUser, _0x5584f3[_0x58051d(965)], _0x5584f3[_0x58051d(1152)]);
  process[_0x58051d(666)][_0x58051d(1289)] && process[_0x58051d(666)][_0x58051d(1289)][_0x58051d(818)]("&")[_0x58051d(977)](_0x5e0426 => {
    const _0x10452d = _0x58051d;
    _0x5e0426 = _0x5e0426[_0x10452d(581)]();
    if (_0x5e0426 && !_0xb3db94[_0x10452d(943)](_0x5e0426)) {
      const _0xda81bb = _0x5584f3[_0x10452d(964)](parseAccountConfig, _0x5e0426, _0x5e6402);
      _0xda81bb && (_0x52edcd[_0x10452d(1125)](_0xda81bb), _0xb3db94[_0x10452d(955)](_0x5e0426), _0x5e6402++);
    }
  });
  for (let _0x53dce9 = 1; _0x5584f3[_0x58051d(524)](_0x53dce9, 666); _0x53dce9++) {
    const _0x1d0f27 = _0x58051d(1289) + _0x53dce9;
    if (process[_0x58051d(666)][_0x1d0f27]) {
      const _0x56b8b1 = process[_0x58051d(666)][_0x1d0f27][_0x58051d(581)]();
      if (_0x56b8b1 && !_0xb3db94[_0x58051d(943)](_0x56b8b1)) {
        const _0x220634 = _0x5584f3[_0x58051d(504)](parseAccountConfig, _0x56b8b1, _0x5e6402);
        _0x220634 && (_0x52edcd[_0x58051d(1125)](_0x220634), _0xb3db94[_0x58051d(955)](_0x56b8b1), _0x5e6402++);
      }
    }
  }
  _0x5584f3[_0x58051d(1272)](logUser, _0x58051d(1030) + _0x58051d(1146) + _0x52edcd[_0x58051d(1182)] + "个", _0x5584f3[_0x58051d(552)]);
  return _0x52edcd;
}
async function main() {
  const _0x4d3859 = _0x1a58f5;
  const _0x2335c0 = {
    tmKlj: function (_0x56538d, _0x25dff3, _0x7eb01e) {
      return _0x56538d(_0x25dff3, _0x7eb01e);
    },
    FuGFu: function (_0x161579, _0x383b1d) {
      return _0x161579 + _0x383b1d;
    },
    QIKMD: _0x4d3859(829),
    peGcF: function (_0x1affec) {
      return _0x1affec();
    },
    SJqlN: function (_0x56ccf2, _0x41529a, _0x4a237b) {
      return _0x56ccf2(_0x41529a, _0x4a237b);
    },
    HmMHb: function (_0x5939e9, _0x164d06, _0x34afc7, _0x94494d) {
      return _0x5939e9(_0x164d06, _0x34afc7, _0x94494d);
    },
    gRZBx: _0x4d3859(1026) + _0x4d3859(920),
    xNcjA: _0x4d3859(755),
    ydBmT: function (_0x4e2a69, _0x1ca175) {
      return _0x4e2a69 === _0x1ca175;
    },
    nyVtZ: function (_0x1c454d, _0x50eeee, _0x3f6313, _0xe12e52) {
      return _0x1c454d(_0x50eeee, _0x3f6313, _0xe12e52);
    },
    USnVC: _0x4d3859(523) + _0x4d3859(1185) + _0x4d3859(1237) + _0x4d3859(1205) + _0x4d3859(705) + _0x4d3859(878),
    SLvzU: function (_0x1afe5a, _0x4774ec, _0xbf8099) {
      return _0x1afe5a(_0x4774ec, _0xbf8099);
    },
    gbXQI: function (_0x347c6f) {
      return _0x347c6f();
    },
    sjDMx: _0x4d3859(1094),
    TGDLV: _0x4d3859(935),
    sfQis: function (_0x5d514f, _0x546885) {
      return _0x5d514f(_0x546885);
    },
    vGXUA: function (_0x34266a, _0x3349f2, _0x2f1f9c) {
      return _0x34266a(_0x3349f2, _0x2f1f9c);
    },
    Vmlog: function (_0x13728e, _0x1d992d, _0x5efc09) {
      return _0x13728e(_0x1d992d, _0x5efc09);
    },
    kkFUk: _0x4d3859(937),
    rHQpb: function (_0x1a5835, _0x4a7885) {
      return _0x1a5835 > _0x4a7885;
    },
    kwmcL: function (_0x4633b2, _0x30f700, _0x21e24c) {
      return _0x4633b2(_0x30f700, _0x21e24c);
    },
    oyJHk: function (_0x3744d2, _0x4f0bb4, _0x47d375) {
      return _0x3744d2(_0x4f0bb4, _0x47d375);
    },
    udJmx: _0x4d3859(1249)
  };
  _0x2335c0[_0x4d3859(1232)](logUser, _0x4d3859(657) + _0x4d3859(1048) + _0x4d3859(534) + _0x4d3859(1293) + _0x4d3859(535), _0x2335c0[_0x4d3859(881)]);
  _0x2335c0[_0x4d3859(1232)](logUser, _0x4d3859(572) + _0x4d3859(572) + _0x4d3859(572) + _0x4d3859(572) + "=\n", _0x2335c0[_0x4d3859(881)]);
  try {
    await _0x2335c0[_0x4d3859(795)](getPublicIP);
    await _0x2335c0[_0x4d3859(795)](checkForUpdates);
    _0x2335c0[_0x4d3859(1320)](logUser, _0x4d3859(1251) + _0x4d3859(572) + _0x4d3859(572) + _0x4d3859(572) + "==", _0x2335c0[_0x4d3859(881)]);
    !ENV_CONFIG[_0x4d3859(1026) + _0x4d3859(659)] && (_0x2335c0[_0x4d3859(1286)](logError, _0x4d3859(1047), new Error(_0x2335c0[_0x4d3859(985)]), _0x2335c0[_0x4d3859(1142)]), process[_0x4d3859(966)](1));
    _0x2335c0[_0x4d3859(912)](ENV_CONFIG[_0x4d3859(1148) + "G"][_0x4d3859(1182)], 0) && (_0x2335c0[_0x4d3859(1300)](logError, _0x4d3859(1047), new Error(_0x2335c0[_0x4d3859(1113)]), _0x2335c0[_0x4d3859(1142)]), process[_0x4d3859(966)](1));
    _0x2335c0[_0x4d3859(1239)](logUser, _0x4d3859(1251) + _0x4d3859(572) + _0x4d3859(572) + _0x4d3859(572) + "==", _0x2335c0[_0x4d3859(881)]);
    const _0x7fb952 = _0x2335c0[_0x4d3859(1085)](loadAccountsFromEnv);
    _0x2335c0[_0x4d3859(912)](_0x7fb952[_0x4d3859(1182)], 0) && (_0x2335c0[_0x4d3859(1300)](logError, _0x4d3859(1047), new Error(_0x2335c0[_0x4d3859(1122)]), _0x2335c0[_0x4d3859(1307)]), process[_0x4d3859(966)](1));
    const _0x4e6958 = await _0x2335c0[_0x4d3859(589)](runConcurrentTasks, _0x7fb952);
    _0x2335c0[_0x4d3859(1169)](logUser, _0x4d3859(1251) + _0x4d3859(572) + _0x4d3859(572) + _0x4d3859(572) + "==", _0x2335c0[_0x4d3859(881)]);
    _0x2335c0[_0x4d3859(1232)](logUser, _0x4d3859(1334), _0x2335c0[_0x4d3859(881)]);
    const _0x5b1367 = _0x4e6958[_0x4d3859(1093)](_0x5c26a2 => _0x5c26a2[_0x4d3859(937)]);
    const _0x5af34d = _0x4e6958[_0x4d3859(1093)](_0x4e9b2d => !_0x4e9b2d[_0x4d3859(937)] && _0x4e9b2d[_0x4d3859(498)] === _0x4d3859(1160))[_0x4d3859(1182)];
    const _0x3959d0 = _0x5b1367[_0x4d3859(911)]((_0x127255, _0x5cbc26) => _0x127255 + _0x5cbc26[_0x4d3859(1061)], 0);
    _0x2335c0[_0x4d3859(1233)](logUser, _0x4d3859(706) + _0x5b1367[_0x4d3859(1182)] + "/" + _0x7fb952[_0x4d3859(1182)], _0x2335c0[_0x4d3859(881)]);
    _0x2335c0[_0x4d3859(1233)](logUser, _0x4d3859(732) + _0x5af34d, _0x2335c0[_0x4d3859(881)]);
    _0x2335c0[_0x4d3859(1239)](logUser, _0x4d3859(791) + _0x3959d0 + "次", _0x2335c0[_0x4d3859(881)]);
    _0x2335c0[_0x4d3859(1233)](logUser, _0x4d3859(779) + _0x4d3859(782) + GLOBAL_TOTAL_EARNED_COINS + "金币", _0x2335c0[_0x4d3859(978)]);
    _0x2335c0[_0x4d3859(472)](_0x5b1367[_0x4d3859(1182)], 0) && (_0x2335c0[_0x4d3859(526)](logUser, _0x4d3859(673), _0x2335c0[_0x4d3859(881)]), _0x5b1367[_0x4d3859(977)]((_0x47f06c, _0x394235) => {
      const _0x215c2e = _0x4d3859;
      _0x2335c0[_0x215c2e(1232)](logUser, "  " + _0x2335c0[_0x215c2e(1219)](_0x394235, 1) + _0x215c2e(662) + _0x47f06c[_0x215c2e(645)] + _0x215c2e(564) + _0x47f06c[_0x215c2e(652)] + _0x215c2e(1226) + _0x47f06c[_0x215c2e(1061)] + _0x215c2e(1346) + _0x47f06c[_0x215c2e(1202) + "d"] + _0x215c2e(926) + _0x47f06c[_0x215c2e(853)] + _0x215c2e(1140) + _0x47f06c[_0x215c2e(498)], _0x2335c0[_0x215c2e(881)]);
    }));
    _0x2335c0[_0x4d3859(738)](logUser, _0x4d3859(701), _0x2335c0[_0x4d3859(978)]);
    process[_0x4d3859(966)](0);
  } catch (_0x398d13) {
    _0x2335c0[_0x4d3859(1286)](logError, _0x4d3859(1044), _0x398d13, _0x2335c0[_0x4d3859(583)]);
    process[_0x4d3859(966)](1);
  }
}
main();