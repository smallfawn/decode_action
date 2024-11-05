//Tue Nov 05 2024 06:50:11 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
// noinspection DuplicatedCode

let mode = __dirname.includes("magic");
const {
  Env,
  cheerio
} = mode ? require("../magic") : require("./magic");
const $ = new Env("M\u7EC4\u961F\u74DC\u5206");
$.activityUrl = decodeURIComponent(process.argv.splice(2)?.[0] || process.env.M_WX_TEAM_URL);
if (mode) {
  $.activityUrl = `https://cjhy-isv.isvjcloud.com/wxTeam/activity?activityId=bbab575d8ff0427c989fe02d84b5e16a`;
  $.activityUrl = `https://lzkj-isv.isvjcloud.com/wxTeam/activity2/3d8c84144c714543be4665c265e8bd21?activityId=3d8c84144c714543be4665c265e8bd21`;
  $.activityUrl = `https://lzkj-isv.isvjcloud.com/prod/cc/interactsaas/index?activityType=10033&activityId=1674586872175251457&templateId=2021062190900zdgf081&nodeId=101001&prd=cjwx&adsource=tg_storePage`;
  $.activityUrl = `https://jinggeng-isv.isvjcloud.com/ql/front/showPartition?id=9e8080b5890a206c01890b12420746e2&user_id=1000102195`;
  $.activityUrl = `https://hdb-isv.isvjcloud.com/h5/pages/partitionTeam/partitionTeam?id=5a387f9f1e81f5ba037da023d0ae449b&userId=1000009802`;
}
let centerIndex = parseInt(process.env?.M_CENTER_INDEX || 1);
//前n个号有机会成为队长
let leaderNumber = parseInt(process.env.M_WX_TEAM_MASTER_LEADER_NUM || 3);
//只跑豆子？1：2
let onlyBean = parseInt(process.env.M_WX_TEAM_ONLY_BEAN || 2);
//超过这个才跑
let beanLimit = parseInt(process.env.M_WX_TEAM_BEAN_LIMIT || 0);
//不组队的店铺
$.notTeamList = process.env?.M_WX_NOT_TEAM_LIST?.split("@") || "\u6C83\u9686@\u6D77\u5C14".split("@");
var version_ = "jsjiami.com.v7";
function _0x4d5f() {
  const _0x5c4567 = function () {
    return [version_, "HjkksAjrwKixraGgrmihl.JCcYMoIFmU.QvOY7Vn==", "W73dLCkgW4Xi", "hmknpSoW", "WPnxgs3cUCoG", "iWTDc8opxCoJyL8WaGy", "W7LxyCkmWOxdRqahW7xdUq", "h8kimY0NWPm", "W6Deea", "5BwS5yUE5ywi6zQP5l2Q", "nddcGCkzbmoqtSk+iCk0ea", "W7tdTSo5ySkC", "WPr2WQxcN0rPW63dHa", "6kYo5PM45Pwh6isD5P25", "m35nW4LMWO7dJse", "W4tdK2KXWQa", "bSktiWuS", "uhtdUJBdSt8", "uGuWWRLa", "W5ThWPtcNty", "WPZdTmkdDtqOW7GSW47dHghdT8kYkY/cISky", "54Mg5AAX6iUL5l2i5zkv", "W4pcLmoeW4FcKq", "gCo4l192W5RdVcS", "WPm3W5rLAW", "W49nWPG", "WO9vWOxcNfS", "W6hdLxaUWRC", "W4vuibXm", "B8oTW6jUw2W", "ovWnWQtdQa", "WOf2WQZcMgj0", "pt9YW7j8WOdcOr8", "l3Ksvw0", "wmo9W7PiEa", "WQ3cRCoe", "WOTWWQu", "W7dcILqnbhxcJqq8h8o4uq", "bSkgvmoUma", "W7nifJPy", "W7Ggvwz5", "W4CKW70", "W6H9W7Plva", "WQtcUSotySkfWRC", "WQXUW5zepZ4", "h8oJjv1NW5ldTxm", "W7eYW7BdTNK", "W7xcTNK/lG", "5zYO5z215RAH5yIl", "WQyTW4rniW", "W4regCkeEH9Xkq", "amkQECo4la", "W5vlASoRmmkSimoVWRFdS8k/W7KktSoHdSoVkK7dHCkuW6qujmoer8o8WOxcKJZdSK/dTq", "kmkiyL9m", "W6hcJ1Wfbw/cGrK7", "W7m8rCoJja", "WP9bdshcSW", "bW9kW5Tv", "W7iqw0bw", "jCoyW6VcMSoUW6FcN8kJ", "ktpcUNJdOCofjCkrWQuQpSkL", "WRiNW6lcOCk1", "ASoRW7nryw8", "iZzPW6fA", "W6/dSLKfWRy", "Ab0UWPfx", "nqH+u8kC", "ggazWR7dPSo8W4u", "WONdHMS0W5RcNa/cIuKVwLvwWQBcV8o6WRJdLcBcGmkqW7hcHIxdTCkoW7NcPSoYW5Sm", "W5vmAmoTCCkSBSo9WR/cQmk5W70ew8o2smo/ihpdJSkLW6Hji8omrCoWWQNcNrJdO0/dSCkR", "W5ldR8kjW4v7", "i3vyW5jlWOi", "kJzPW6m", "W40hr3rYmxnSWPiPFXVcTshdIfH2jG", "W4SswG", "W5pdTCkzW5bWfmkWxYVcKM4OWPBcOmkvWRntWOdcOwldMHBcRvy3WO4XiSkZF8k1WQJcT8oKWP/cU8oTFtb2vSoLWPX6dSkkW5FcJs48WP3cRJG9WP3cTGbGiCo4fx55B8khcSkajSkQWP0KWPdcRCkamcFcQ1lcS2DLmZbxvSoTpfFcR8oUW5VdSaFcQI3dRSkNWPjv", "WPzcFW", "l2nlW5DmWOpdJg8", "WO0iW7dcL8k+", "5ys15RoL5BQ/6zgb", "WPvMeYFcOq", "igrgW5jkWO8", "bMWnWQpdKSoUW4Kr", "W4HuW6fiEW", "WOrQWRdcG3rYW7ddTmk6wWhcSW", "5AEo5zo15lIB5Ogn5Pcv6icT6ig46l65", "ub4sWO58", "W4nxnIDVW7e4W7S", "WPFcLYTUW4y", "ahypWR/dQCo6W40q", "lW99wmkXW7VcP8k2", "W4/dIx84WO0", "W6tdVSoQBmk6", "W5jfjZq", "Amocj8k2W4Sa", "WONdLSkCWO9kldVcTmkjWRadW5pcPW", "5Bse57UG57QT5RQL", "WPWdW7/cP8kK", "z8k5rbpcR20", "WO/cHZDLbaq", "W5XzFCoLm8krA8kZWRRdSSk6W6nfu8o2v8oSmuldMCkkW6Wfo8kqfCoWWOtcIIBdSLNcPCkRgCk6vmky", "WQlcT8oqF8kyWR9xW7C4W5KwW5O7W4bHW47cLmk+", "W63cImonW4Ky", "AmomomkPW4mmWOSrhmoMW5W", "WRFdLCkcCI8", "W4ldHM88", "omkxjSo9nW", "jhLAW5DS", "lfy9zMq", "WPm+W5DvnSot", "5Bs257Qb57Mc5RUZ", "W7vhCG", "WRhcT8oxrSkeWRu", "W4Szl8k9AmoVpCk+WQ7dLSkCW7yRFG", "nwrpW5vSWPldGhG", "WPBcNcbeaGFcVve", "iwObWQJdQq", "zSommmkAW5akWPaT", "W5GUW7tdH1HjoezhWP/cHq", "oaDUvW", "iJRcNSkyaW", "fMyQCNu", "AmovzML7W4lcPhHHWQFdGa", "uMtdVq7dRIW", "5BE75yQn5yEV5yMs5lI85lQr", "BfxdUHBdTgnQa2NcSa7cR8oKW5/cIqLvW7rOWQOggq", "lSkglmk2W5yOW49blG", "iCkmuCoVedddRmkQFCosDq", "W5bhWPhcRbRdR8oOgYjZWPy", "dSoXne4", "B8oTW6vl", "hYRcL8kjfG", "mZhcLSkHfmovrSkb", "W6ZcL1O", "W5ZcHCoAW50n", "W4lcM3SvnW", "WQzogCkciHNdMCkKoWy", "ldRcH8k+cmoEtq", "W4rBWQJdSCoRgSkdW6OXphLPWPC", "dX95W5Pw", "txldQq", "W616vmkOWOe", "hmoFW6y", "BmoWW7LtzMPfWPa", "W41drCkhWRO", "5BAE5Psy6lYR5AAS", "CWzFfSo5wSoJDG", "W4PmWPVcRsW", "W5hdQmkdW4DKs8oXf2/cLNPVWOJdP8ovW7mjWOhcUhtdHH/dPbS7WOW", "zCk1xXhcSghcPmobamoGna", "i39AW5rlWQRdJg/cNuX6CW", "W4Wlxu5Ona", "jSo7k3To", "Fmo3W7Liqw4", "kd5ZW6TbWOK", "W6tcP8o9W6C", "WP45W5X7zq", "rCoXmeyxW4/dSd3dQ0zQWRGSF8kJW4tdLr18WOJcIYLyWR7dQbqSWP3cHKxcQq", "ACoFBa", "W7dcJuK6eLW", "gqWuW57dUq", "d8oImKbkW7BdTd3dSWHIWQ8", "uYiWWR9Y", "WOaEW77cSmkdrmoxWQ0", "b8kkzejU", "WQJcRmohBSkp", "BCk4sbtcS2ZcTCol", "wbmXWPu", "W6ZdO0qqWRtcUIxcV3y", "W4a6refH", "xSkHCwTAW5FdIr/dPW", "WP5kbttcRSo3mCkiWOxdLI47W4xcMW", "BCoJwKLY", "wXCXWQbqWPOu", "WPr+WRtcLfj9W7tdLmk+uWlLV4lLUR7VVO4", "W4ncfCkpqq", "W544W7/dKv9y", "nN9bW4fCWRpdKgZcIW", "W63cNvavbeNcUWyRfmo+", "WRvGdcpcIa", "5Bsn57I957Qh5RUj", "d3uSuM9e", "l2nmW55b", "WQ5vWQJcHvK", "EbyRWQbC", "d8kcvunJ", "W5tcJConW5qkCgZcSa", "dxu0EG", "kIRcGCkaeSow", "ygTAW5ruWRpdKgZcIXbCrSoV", "kIJcTgZdKCo+oCky", "BL/dPqZdTLK/i1tcGIq", "WQdcOCoxySkbWRTgW7XdW4CdW4S", "W5u1W49tnmoPW5JcSWi", "W6RcR8oNW6hcP8kvW7JcL8ofW4OtW7Snhmk1jSocW7ewsmkFWRWSEW", "WOPqoIfTW7vR5RAL5yUM5BA857Qb5PYJWR8MW7DmWPOfWPi6", "W43cLSoAW7umCW", "WOCsygy2WQDLW6qDpXGQW4q", "WRhcQSoPFCk8", "otdcMSkMcmou", "AKRdGY7dLW", "W6SnsmoelGK", "W7vkeCkPAG", "uZy8WR5X", "WP/dPCkzBIyq", "WRq7W7jFvf4", "hCkFW7e1WQPyWPNdSsXei8okW53dKeWAWOxdSghdPh8FWRBdGKJdKa", "5BIQ6zcz5l605zoG", "eXNcH8kLfq", "DSozBgvlW4xcJNm", "W41CW45OAG", "W6VdQmkd", "eXeLW6FdRCkfbtGjWR/cHdu", "lGnPrSk7W63cOCk2ra", "W4FcILyeiW", "WPVcLSoDW50ns2dcP8oz", "W4JdQmkkW45ww8o2fa", "FCoijSk5W4CxWQW5", "z8oeo8kP", "W68OW57dSw8", "pqvUx8ksW6S", "lCkDiSkIW6yjW59v", "ugeODJnxWPhcLSkrW6bxzxldTK/dRKmiWPldLwZdGZvEW7ldVSkkWRKjgGWZsCkH", "WOuyW6JcQG", "5BE757UP57Mx5RMW", "jt9lxSk9", "EvtdUSoRBCorW5FdNSoRWQJcOIS", "5PY1552957Mf5P6/", "qx/dVZxdPW", "AuVdNtBdHq", "5BE257Iz57UV5RQz", "WPXeDmoWo8kQ", "pdBcMCk5bmod", "WRxcRCoiBSkz", "WQlcQmolCG", "WP0NW5ZcR8kw", "CCkLtGRcQgNcVCoD", "W6b0hbhdVJa", "WQXUW5rzksq", "CmkZsHxcJ2W", "W61hCmkxWP3dPrKB", "W5zrWPRcUJRdU8oOha", "WPKcW7W", "W6vHW4PciIldNmoJWPVcLCo/WOZdGSowWOtcN8khWOJdVqxcGZVcQgtcJCkKW6PnttddPCoQWQ8nu8okkmoHW6RcJW", "5BAh5PEL6lYm5AE5", "pdjUW7DEWPu", "bCkwlSo0lfNcT8oX", "W4BdNmoCCSkzk21cu8oTqq", "5RwH5yU35Bsh57IE5PY+", "WP4YW4Pq", "WO/cParjdW", "n8kAiCkPW4S", "fSkkE8ozjW", "5Rwo5yQT5P2a5B+n5Awm", "W6xdKSorz8kW", "W7BcO8oNW6lcU8ksW5/dNG", "WOPSWQu", "c8kFvG", "fXy4W6ddUmkLbaeoWRVcMW", "WOnCddBcPCoKhCkA", "E8oyo8k1", "WPxdISk1CGi", "hSkDpSoTnuK", "W4iguqPYl3uUWP4BAGxcNYpdGujez8oPp8or", "hmk5icmc", "pMeAWQNdRG", "5lUW5lM6x+wnLW", "bCkzba85WPzBWP9IW7WNW6hdRwHFza", "orTiW7P2", "sWOrWPfyWPPEW4jZwSk8kSkncv9sn8kKCSkFW4xdKW", "W5fbjWzPW78LW5aViZC", "AwXyW5iwWPpdIg/cHqjYzmoyzSoVgCoNDCkaW4bTW5tcIxhdSmkEW71ldCoZW6ntAa", "W4/cHSoDW4GGExRcPa", "WPWdW7JcRSkPsCowW6m", "W64lwCo7faO", "fSkvW6S7WRTuWOpdR0Hj", "tCkqwrdcSG", "vCozzq", "W4zwoI9KW54GW7mSkYap", "ASoaBMvDW5hcLxm", "WONdUCkeBW", "achcRLVMNOlLPylLJBhNUO0", "W6HXW6XisCkO", "W6TDCSklWQBdSr0A", "W6BPMjJLK6a"].concat(function () {
      return ["loMzSoMvHW", "WO9EFCo2mmk5ySoR", "hmkkjmoIpgNcQ8oYWO4", "WPDmBmoNnG", "W7qMsCoZhW", "zSoywwf7", "nmkauCoIls0", "rfNdPdJdRq", "gwK0A3Lr", "W4GQW7tdQxLvoW", "W4pdLwKYWOFcPqVcIvfHuKi", "WRNcRSolxmkp", "CCoPW7vuqW", "E1pdV8o0", "kKP+W7DJ", "cSk+EmonmG", "y8ozzwjTW5G", "W4vnndTuW6u8W7O", "W6xcGe0Ee14", "uhpdPWhdPXBdQYrBWORdRee", "WPDiDCoMo8kQq8oNWQFdSW", "uMtdVqVdNtVdSs1C", "WQLSWONOV7yVpCob6zQD5l+1", "W4PmWPZcPchdVSoGcG", "AmovEhH/W5FcGG", "W5zrWPRcUH3dVG", "6lgp5A295Bkf5lU3", "WPVcK8ohW5zc", "WO1SW7vMaW", "WOumW6NcTSk1wCoAW78mgvzEWR3dQrhcLLJdOCo1WPrFW7q", "W4ldLmo+xmkW", "W4JdPmkdW4rnw8oYeIFcJxO", "h8kinaG", "hmkuia4bWOftWO8", "yepdRHZdVG", "bCkwkCo9iq", "kmoxW7ZcLW", "5RAq5yUJ5P6W5B6J5AED", "nXy8W6BdIG", "W6XDEmkaWOddSbutW4W", "ih9hW5vnW4JdJ3pcGKfYyCoSB8oUaa", "hmkzp8oSmeNcU8oTWOxcH2pcVY5/WRWFWR88Fsa", "CfJdNYhdHW", "d3ddOLtdPcRdSsDnW4ddRvRcNYhdTfLbW6SIECkjz8o8a8oFWQu2", "xCo7W5bbFG", "iCkawmoLcZddQmkS", "W6hcPCo9W4pcSmkeW4ldK8oAW4W", "WRpcI8oKFCk4", "W4JdTCkmW5j3ESo2hsC", "W5bnptXYW7G", "W5tdMSogF8kHn3rzF8o7dW", "W6D2W6nqwCk+W7jM", "pt56W6XNWPtcPr4", "W5pdKmoEySkYla", "5Bwr57UT57I75RIP", "nCkXxCoimq", "g2eSFG", "W4ZdG1GYWPJcIG/cJNzLvePIWQlcPCoNWQVdNXu", "nSkis8oQ", "W7WmW5VdPwm", "lmkrnSk5W58i", "gc4qW7JdGG", "DILvhCo9", "W5zMWOCC57Qa5RMx", "W4zAWO/cOsBdVW", "o8kmmCk+W5iSW4rymrtdP8omW5hcN0GxWOi", "p8kir8omlcRdTmk4", "WPPkbYpcV8oT", "W4ynve51", "FXb/wmkaW6VcVmknscq", "hgSoWQJdVW", "W7bYfbtdGIddJ8oP", "BrXF", "W4mkCgXQ", "e8kxW6SZ", "WQ5MW4Xm", "iCkRn8o3aW", "E0JdUqZdQMm", "WPWdW63cQ8kOsmobW4qlifzm", "W48QW67dGG", "sCkCjbqlWP1EW5y", "WO3dQCkwAHWC", "kX5ou8kfW6pdOCkHqdBcL1NcJ3D3kmk/", "W44dr0y", "W5KkxfDvpw5L", "ELpdSmoY", "W6efv2fQ", "eMDkW6jO", "d8kcuKPUWRBdPYe", "kcRcMW", "5BUz6zkT5lYh5zoA", "gqOZW7ddSa", "uNtdOH4", "gwOn", "CCovC38", "W4RdIhW", "W4WUW67dT39rma", "5lU56lAJ6lcd5A6K57U96zUO", "5yY26lwO5OUA6zUU55Qv5PYM5l6E55Ai5A2t5lQ85zco", "WRpdImkOrra5W4q", "kMjp", "5BA+5yIw5yET5yUD5lIH5lIf", "WQZcQHT+hq", "BCk4tX3cVG", "W7fACCkaWOS", "WQ4pW65pjq", "Bf7dO8o4ESo6", "W48Ar1v6dhfPWO0nuHRcKs3dI0vt", "W4f1W5Hlwq", "WOvWWQBcIa", "5z215z245RAC5yQu", "W58rvLv1pw5L", "yqXmpCocs8oEE0y8", "5RA15yQW5BwY57UZ57U/5P6f", "W6P5W7nQza", "W6TCDmkxWPy", "umk5qb3cQa", "iCkisCoUeYddRmkQFCos5BYe5BQ+", "WPxcMY1peaBcTKxcMvZcLZPwktHpveetpmk+W608zwRdOq", "W5jsocze", "W4Cds2bPm3zW", "CmodBNLWW5hcINi", "hMmSDMPg", "5Psv6lYl5AAV6yoc5ysM", "5BET57Mx5yI25ywg", "W4jbWOVcOsldS8oXaa5L", "W7dcILqnbg/cGrK7", "W4GeW7JdKN4", "WQTuESo3da", "W4fPWQFcN3v5W7BdQCk7bW", "W4mmueTUogzZ", "h8kDi8o8f0JcV8oGWO7cOxu", "W6OBtmoBlGK", "oGnGqCkC", "W7pcJe8Ed1ZcKq8N", "CCkYuGVcQq", "5P225B2M5AEr", "5P+C5B2g5AwS", "WPnoW458hW", "W7dcTmoGW7ZcU8k0W6/dISos", "5RsK5yIW5BwK57UW5P23", "WQZcSCoe", "W5JdNmoFDmkYlenpq8oXrG", "jwXyW49yWO7dH1dcH15P", "CbPlea", "W544W7/dKxHDoee", "nmkDk8kRW4OjW5GCorlcH8oqW4/cI0CgWP1uW5bvWRX9WP1q", "eIBcT0tdTq", "lSkbmCkbW4aB", "FSoOW78", "5Aw25zoa5lQa5Oot5PgK6ioX6iks6l6o", "yexdItldTW", "W4OOW67dIMbviv1RWOK", "WOfoada", "WOa4W5xcP8kT", "W7irsG", "b8kdW6SFWR5A", "W5tcJCokW50h", "WRq8W69OqM3cU0hdUG", "ACovzwXQW5G", "WQDLlsBcOq", "kSoeW6FcMmoVWQZcNmk/W7ldR8o0WQ/cS8kqW4iT", "dJdcNSkOdW", "W5bbksj5", "mc/cT2FdVa", "v3NdNq/dRsG", "W71mzCkmWOhdOq", "omkDkCk4W5yo", "W7TRW6voqSk7W7PW", "WPjoW7fElq", "nZRcMmkVbmodB8kBo8kZ", "lCoHW5RcMSob", "AKNdT8o0", "iJH6", "mmo5W6zkb39jWOy5q8k8vmkqB2OPjNJcGSkzvCkijqldVCofWRddNf7dPG", "WPOPW4a", "aMqdWRK", "WPDFaa", "5lQW6lEu6lcS5A6D57Md6zQe", "W4hdLSozC8k5", "WR3dR8kZvsW", "ub0I", "zepdVSoZBCoTW7ldGCoGWRFcTq", "oCofW63cHmo1W6lcL8k1", "W5xdJ3qTWRZcJa", "BvCUamowWRVdVSkasa3cN0xcOa", "WQT3W5e", "W5jvdSkdxq8", "5Bwu57MO57UF5RQ8", "FSoElCkVW4WeWOG4", "W4rQnrnk", "zGzweCoFrW", "lZrPW6TeWOq", "W6zggCkpEG", "ns7cTa", "kCooW7JcN8oPW6y", "CCkLtGRcJ2W", "zCoAaSkPW6q", "W4X/hJ3dVa", "oSkvmCkT", "fWWAW73dOG", "h8oJjv1wW5RdVcS", "hSkyW7W+WRHzWPldPq", "WPBcNcDndW", "WQ0GW6v+uL3cP0i", "W5tdMSogF8kHoW", "WOuFW7lcUmk5y8ogW70akefm", "bCkzEuXR", "WR90W51FbtldJG", "WOddJCkVBHK", "rgddUHO", "mZhcKCkOgq", "W6hcTSoG", "WONdUCkdsIyF", "WOz5WPFcLwq", "W5NcLCofW6WA", "W55dgSkpvW", "bCktW6WNWQfj", "EvpdOmo5", "W5Gxx0i", "cmkzoCo5", "W4vidCkACaDRkG", "W6hcJeKf", "WPHmdSkdab55pSkwvCoMpCoIWO/dNSkRDSo4d8oyAWBcQSkGjxNcNc/cR3iT", "d3iXzxLVWPNcLSko", "BSovomk0W5aa", "W4jEg8kyqqT1ka", "ggWJWRtdSa", "o8khw8oUjG", "5B2Z5yMm54Ug5P2xWRG", "W7ldSuOoWP8", "W6DyWPtcVs0", "h8kdW6WuWOy", "nqH5wSkrW6RcQ8kH", "ySk/rWZcO3O", "B0/dVCo4E8o3", "e8kFvfr1WRpdRZC", "W5FdPmkdW4D3rG", "cCo/l0rrW54", "hGBcR8kbfG", "a8ksia", "jmkiu8o+oW", "m0WIWQJdLG", "W4RdRCocW4zXqCoXbg3cJ2zQW5ldNSohW7CxWOVcOhldNbu", "bmkFW7G8WPHiWP7dSG", "pdjUW7jTWOlcOX7dPq", "E0pdOmoKzmoR", "W4jsWPy", "p8kxmCkLW4uvW4jiaHu", "p8kAwa", "WQ/cRCoxx8ksWRnFW4L+W40h", "W5RdOSkzW4L1r8oRcqVcMW", "W4vyeSkp", "W4ymrCorkG", "lXnQu8kwW5JcQ8kGuINcNxO", "W48mv3nYmwy", "FmkbwSoQoMxcR8kRD8ovAmoYW4LFdG", "EK/dTmo/xCoQW4VdLW", "WRPKW7P7kG", "emkjq1vYWR3dRa", "u2JdQrxdLY3dTY0", "odxcP3ddKmoKjCkKWQ4UiSkX", "WR9gW595lq", "WQ00W6j3Cq", "W7xcTCoSW7tcSmkbW7VdNW", "a8o+jePa", "5Bwy5PAc6l2v5Ast", "W697W7rvwSk/", "WP9vAmoTlmk9", "WPDCmrdcHG", "W5feeSkEsHG", "Emoel8kZW7CqWOW5", "WPVcKmohW58rqxZcQSkaW4C", "W4fVWQVcNYW", "DCofF0zTW5C", "W47dSSkiW5jksG", "W4DycSkNxa0", "d3iXzxL3WONcLCkF", "W5NcGIPgsG", "zXL6dCow", "g8ktW7e1WRLv", "W7TnW45zxq", "yrHzcSoiE8oZyK4", "pJFcLSkBgq", "W7rJia7dUcu"].concat(function () {
        return ["eqCJW7ZdVSkcbruLWRRdLa", "l8ogW4dcLmoW", "W4SDkmk3Bq", "rci9WQva", "BqPlc8onsmoV", "W4bnWPdcOZ3dVW", "W7NdS8oRrmke", "W63cMuuWe1tcJrK", "kqxcPSkSka", "W5NcGSoAW5K", "zCkMqG", "W7vvyCkgWPS", "yeJdSmo9FCo7W4FdGa", "DmkKqGlcO0BcPCovn8o3kG0", "WPqoW6/cH8kYsCoNW7Kpka", "WOzAhqNcUmoI", "kd5XW7zxWPm", "5RA15yQW5BwY57UV5P2Z", "gCkWDCoceG", "iY5jW6DtWOZcGbxdPW", "W4BdKCoDzSkzp21f", "icrFW5P4", "DUMzGoMwIG", "W7vvBCkIWOhdQWeo", "j3LCW4LTWOJdNetcH0XZCq", "5lQY6lsN6loz5AYc57Ij6zII", "DCofEgm", "WPrrWRdcKeC", "z8k3wWZcP2hcVSoOj8o7iHS", "ldlcTNddQSoQpCkz", "W4BdNmogw8k+jK5jvCo05Asd6lsY", "p8oFW6/cMmooW7BcK8k0", "aGeKW6ddPmkF", "5Bwp5BkS6jAt", "WPb5WOdcO1a", "W7zOfGJdUttdI8oO", "j2emWOZdPq", "BuZdVHG", "Amk5ta", "WPygWQROVjNcV0BcGEMAJ+s9RW", "WOLfECo2o8knFmoRWQBdJSkY", "mCkNqNbx", "WRtPMkVLKy0", "fCkfvKHoWQFdQZy", "rd0aWObP", "oZZcGCkKf8oyv8klhCk1ca", "b8kdW6W6", "WRzpWO/cQuq", "b8o1m1XzW5ZdTa", "WQiPW4XzkG", "WOJcMaTJgG", "WOZcMYrgiHBcSuy", "CbW0WPbF", "y8oNd8kWW6G", "eMaEWOddVSolW4KBoG", "aCkznCoFk1lcP8oY", "obFcP8kNoSkQWPldOCoGWOdcVqNcKW", "cSkfnWKMWPe", "WR90W51FiJFcNSoN", "WRFdGSk2uae", "ghyn", "WORdQCkzyXSnW6CNW5hdK1W", "h8krkSo2deJcU8oM", "W4/cHSoDW40tya", "57Un6zIY5lQa6zIP", "EKtdRrFdK2iJkG", "WPDEFW", "W4Wlx1n+lG", "W7tcQCo9W6FcSSkWW6tdK8onW4XZW6Ct", "yepdQrxdS3mVpq", "gNGODM5g", "CbPmnCoFsa", "W7DJWPVcPX8", "W4xdI8oBBmkYeMLtqG", "gCo1lKT2W47dVcZdPrT2", "WPzNWQVcTMi", "aCklkG", "CSkLBs3cJW", "WPRdOSkbtrO", "W5Gjwf5w", "nNHCW7zkWOa", "zIuQWPnO", "5BsZ5yMI5yEg5yIG5lMn5lMu", "a8kEq0LPWP/dPYhcI8oVe0e", "W4xdIhq2WPZcJq", "kWXsFCkj", "tg7dQq", "W7OrqmoxdGm", "WOzDad7cRSojgCkmWPa", "5BE35yIq5ywU6zIu5lYt", "5Rwo5yQT5BAy57Ic57Mu5P+e", "pSkgwa", "W4LnWPBcPGtdU8o3ds51WOXXsSkNW5TpWQS", "W5hdMmogDW", "W5L3gJVdKa", "ndlcTa", "WQxcO8oxAG", "vCoCW4LUAvLJWRag", "a8kzW7q3WQm", "W6DHk8k55lY15zcY", "kmozW6xcL8oYW60", "6l6u5Rcx5RMP5zkU", "W4jnpJbYW6q0W7m+", "a8kykqCGWPW", "DmoPw1jN", "WORdPmkyDXSzW6CG", "WOfJkWJcOa", "W5j7WQ/cKs0", "WP9bcIJcVSoHfCkm", "jCoyW6ZcK8oJ", "WQCVW7zMrLdcRh3dTLWm", "WPnDgYVcUCoifCkmWPFdHs0q", "W4iNrvzU", "WPDTWQVcI3riW73dKmk6", "6zQC5lYw5BAb57Q15RM25zcn", "oIdcO3BdPCoIpSkWWQ48oa", "5BEs57Uo57Mk5RQA", "W5Oxqe8", "jmkmuCoVoZFdImkS", "W4yUW7FdGxnofKTxWOpcGG", "gYKYW73dUW", "W5tdMSogF8kHn3rzF8o7", "WPNcHWrQea", "WRm2W5j3rLtdRvddVfSrWPJcT8oFW6K2iCohW6VcO8oWaW", "vrWHWPfb", "W6NcQmoTW6pcPG", "WR50qSoikq", "WPjsbXnEkhTtWR8c", "WQFcQ8opF8ksWQa", "WRKRW79lmq", "W75TW7rXx8k9", "omozW7ZcL8o3W5pcImk5W6tdPSovWQ3cJq", "W5pdI8oDEmkJCwzpwSoZxwbhWRpcM8kf", "WRamW4jniG", "fSkmnZag", "FZlcUMxdQSoEjCkvWQnY", "WRlcQ8oezCkIWQDBW6e", "W53dQmkdW4LWrG", "ceWAu3C", "W7CqsCothW", "WOiGW751hq", "W7SgxCoFfqG", "W7hcLbire1tcLH1XcSoLuCkmo8k/W47dKCoRW4dcTSoqfq", "W5BdKMG1", "5yAV6zIy5OQO5yQY", "ySodlmk4W5O", "WPqzW6/cSmkiqSogW4Gllf1y", "bxaEWOddTmo8", "WPuPW4HxlCot", "WOrWWQ3cMNH5", "W6hdKSkCW4H7", "p8kxmCkFW4CDW4rfhXJdHmoC", "u8kextlcQa", "W5mTv8ozpq", "W7mBqmouaH/dOSkybGldKa", "W78ora", "wCojFmkVAa/dPmo7WQdcUMZcHc4", "mCkXdSkQW4u", "W7OtBmobbH/dHCke", "kIRcHSkL", "WQGHW6e", "W656cZ3dPtRdK8o9", "W6D2W6rzva", "zepdGc3dKW", "bmkcW607WQnAWP7dShG", "ASoRW7nrrMPfWPa", "taCXWRLkWPa", "CgRdRqRdPq", "pYFcHCkKe8ou", "WO/cHZba", "dSkEmYu6WPbUWOjBW7W", "WP4sW7jxpa", "W5rlnYW", "fSkgW7y", "W7iKW47dLgu", "BZODWR5r", "zrDieCoEsG", "oCo5W7vxD2jmW4G", "W5DuoG", "WPxcMCksnUE4K+A6VW", "WQKei8oqW4lcSee8W4JdQ8oCW6r6", "kttcP0/dT8oS", "5Oo65BsB5yQF5yEU5ysO5lQt6zQE5l+f77Yz", "yCkUwXhcTg0", "W6viW4XVDG", "WQZcO8oBtmkfWR1hW7u", "W5ldR8koW4X2sSo6aW", "W5/cSSoCW4GP", "WR5IW5Labti", "xreMWPfkWOq9W4X3", "uCoFyg5W", "rxNdUGNdOWJdRcbdWORdKeFcNttdGuPa", "WOaEW77cSmkYtmoEW7u", "WOyPW6LryG", "a8o+i0nnW5/dTd0", "nhaSWQNdQa", "tCkNwrxcJW", "lqO1umkwW6hcOmkMdJdcNwFcNKP0p8k5WOJdLCk1iSk0", "D8k+sGRcO13cO8oDj8oBpa", "y8ozz397W4i", "er7cKCkxga", "FSk5rr3cJa", "EvtdUSoRBColW5VdG8oS", "WOvohYhcHSoGhCkDWOhdLUw9Iow5JE++QG", "W75QW6LgsCkuW6j4ldiQya", "wHSRWP1kWP8", "DmkJxZxcTw8", "W4CBz0j6mu9VWPa", "W5xdJNWZWQdcNqFcNG", "FSoElCkVW6SbW5G", "AexdP8o4FSo2W5BdISoCWR/cVa", "j31b", "ewqEWQW", "drlcN8kGnW", "WO3cRmosB8kr", "nSkguSoQnYS", "sXmSWOa", "aby+W6/dRCkLbaeoWRVcMZu", "WORdPCkqAqanW6mH", "W57cJmobW5mwCq", "omozW6pcK8o1", "kY9TW6TaWOq", "W7ldIha4WPS", "BmoEB25M", "pSo/k0Pw", "lZrPW6TeWOJcUapdIuFdNa", "W69uWPFcUai", "aSkCpYCMWPTpWPS", "cNm9Bvvh", "W47dSSkiW5jTt8oYfq", "rmoLgmkAW5G", "pSkmuCoSkI0", "chCGDN4", "W6zxW5Ltqa", "W5SAW5NdI0y", "W7ddSSkvpSogW6yhW4DJW4GgW5yB", "przZ", "D8ofz24", "W5nCiZXZW7u", "6i6+5y+WW4FdVMpdUSom5AAc6lAS", "W4VdQmkd", "frWNW7ZdUSko", "WPddOSkuAYaCW682", "W5nwitPZW50WW609lZuz", "W4RcTmonW6K4", "WPe2W6bjfW", "W5blWPJcPGhdR8oShq", "xWiLW7RdPSkFxG0pWQRcGdaYcCkkW7dcTmkEWQmyW4hdMSoKkmk0W7xdGstdGgNcOqqpW44", "W6RcQCoGW6JcMmkmW7FdNq", "grbZW7v/", "5RA+6ys95y2g", "sZfPw35pWQJcTmkD", "5BET55AW5AYA", "wuBdQqJdOq", "DCocyNf7W6tcNMDX", "pmoGW4/cL8oJ", "WQnPW5Xina", "AfNdVGS", "dJvxBSks", "B0tdPG3dO2u", "AgZdQJVcVCkY", "WPDmymodlmk3ESo+", "lbnUE8kxW6K", "dSk+W6G/WR8", "nSkqj8oHW5OpW4aFiGldN8otW5/cKuiqWPuvW4zEW78", "W4VdTmkzW61Wsq", "ASogW6hcMmosW67cNCoT", "WOddK348WPJcOqRdHW", "W7TBESkoWPRdOq", "WPhcNtq", "bSktjaWHWPbFWPG", "AfldP8oJxmoWW5FdQ8oGWQZcVJ8", "gCo1ngjrW4pdNYFdOWlLPltOT68", "W5Plna", "WQKVW75vvvBcT0e", "WPVMMzFOGOpLI47MLOi", "WPjSWQFcG399W6NdHq", "AmkZrr/cSMa", "W71XW6DsECkVW75X", "W7rrE8kcWOFdRa", "m35nW4LxWOBdHhK", "W5XDCCoQyW", "WONcKY9DeG"];
      }());
    }());
  }();
  _0x4d5f = function () {
    return _0x5c4567;
  };
  return _0x4d5f();
}
;
const _0x44391e = _0x2ba1;
(function (_0x402969, _0x31e8d2, _0x248b70, _0x1ad2d0, _0x2033a4, _0x3e9faf, _0x4082f0) {
  return _0x402969 = _0x402969 >> 2, _0x3e9faf = "hs", _0x4082f0 = "hs", function (_0x645be2, _0x865432, _0x544902, _0x2d3097, _0x97835b) {
    const _0x7c4fa0 = _0x2ba1;
    _0x2d3097 = "tfi", _0x3e9faf = _0x2d3097 + _0x3e9faf, _0x97835b = "up", _0x4082f0 += _0x97835b, _0x3e9faf = _0x544902(_0x3e9faf), _0x4082f0 = _0x544902(_0x4082f0), _0x544902 = 0;
    const _0x520038 = _0x645be2();
    while (!![] && --_0x1ad2d0 + _0x865432) {
      try {
        _0x2d3097 = -parseInt(_0x7c4fa0(616, "00s8")) / 1 + -parseInt(_0x7c4fa0(800, "$Aj8")) / 2 + parseInt(_0x7c4fa0(832, "SHzY")) / 3 * (-parseInt(_0x7c4fa0(798, "&1MZ")) / 4) + -parseInt(_0x7c4fa0(437, "]KP7")) / 5 + parseInt(_0x7c4fa0(757, "RJYp")) / 6 + parseInt(_0x7c4fa0(537, "JIq2")) / 7 + parseInt(_0x7c4fa0(775, "twF#")) / 8;
      } catch (_0x2b6ef2) {
        _0x2d3097 = _0x544902;
      } finally {
        _0x97835b = _0x520038[_0x3e9faf]();
        if (_0x402969 <= _0x1ad2d0) _0x544902 ? _0x2033a4 ? _0x2d3097 = _0x97835b : _0x2033a4 = _0x97835b : _0x544902 = _0x97835b;else {
          if (_0x544902 == _0x2033a4["replace"](/[HVkQJAGhgIrlCUKOMwFxnY=]/g, "")) {
            if (_0x2d3097 === _0x865432) {
              _0x520038["un" + _0x3e9faf](_0x97835b);
              break;
            }
            _0x520038[_0x4082f0](_0x97835b);
          }
        }
      }
    }
  }(_0x248b70, _0x31e8d2, function (_0x42d88c, _0x29b1c3, _0xe0f40a, _0xc0d6d, _0x5819d6, _0x275880, _0x29c37c) {
    return _0x29b1c3 = "split", _0x42d88c = arguments[0], _0x42d88c = _0x42d88c[_0x29b1c3](""), _0xe0f40a = "reverse", _0x42d88c = _0x42d88c[_0xe0f40a]("v"), _0xc0d6d = "join", 1313166, _0x42d88c[_0xc0d6d]("");
  });
}(808, 948418, _0x4d5f, 204), _0x4d5f) && (version_ = _0x4d5f);
let leaders = [],
  skipCookieNumber = 0;
$[_0x44391e(355, "zFPO")] = "v1.1.0", console[_0x44391e(795, "*Z9Q")](_0x44391e(325, "Ouj[") + $[_0x44391e(799, "iS*B")] + ",\u4F9D\u8D56\u7248\u672C:" + $[_0x44391e(350, "oArr")]), $["logic"] = async function () {
  const _0x3faf06 = _0x44391e,
    _0xcde141 = {
      "hJGmJ": "\u5DF2\u65E0\u8F66\u5934",
      "Pkcqg": function (_0x2f7c4e, _0x6bafdb) {
        return _0x2f7c4e * _0x6bafdb;
      },
      "dvksE": _0x3faf06(497, "Ouj["),
      "GbLmW": function (_0x4807f3, _0xd8186b) {
        return _0x4807f3 + _0xd8186b;
      },
      "ZSqhx": _0x3faf06(1083, "oArr"),
      "dhcVx": _0x3faf06(710, "ah)q"),
      "RdfAb": _0x3faf06(1048, "2xjF"),
      "CRMAO": _0x3faf06(889, "ObyE"),
      "zoneJ": _0x3faf06(675, "O7^Z"),
      "xekUb": function (_0x5f4333, _0xdc6893) {
        return _0x5f4333 !== _0xdc6893;
      },
      "lFBuW": "BzCJS",
      "UkqtT": "mktLw",
      "HfMGB": _0x3faf06(925, "5gFI"),
      "eaZcY": _0x3faf06(856, "TdVM"),
      "gXbCo": _0x3faf06(830, "Vbg%"),
      "OHPGz": _0x3faf06(1046, "O7^Z"),
      "tOAWM": function (_0x15ce18, _0x40b3ab) {
        return _0x15ce18 <= _0x40b3ab;
      },
      "BcFbV": function (_0x35d28e, _0x29d662) {
        return _0x35d28e === _0x29d662;
      },
      "YkCgT": _0x3faf06(475, "wlX5"),
      "llWzE": function (_0x1843e8, _0x214407) {
        return _0x1843e8 === _0x214407;
      },
      "zXPOP": _0x3faf06(714, "twF#"),
      "iXBKF": _0x3faf06(473, "O$86"),
      "nqzWw": "\u6218\u961F\u5DF2\u6EE1\u5458",
      "chRje": _0x3faf06(868, "D7$P"),
      "wgKGI": function (_0x6b3788, _0x2fb4d8, _0x2042f5) {
        return _0x6b3788(_0x2fb4d8, _0x2042f5);
      },
      "jsXaR": _0x3faf06(855, "(iSg"),
      "DcDRy": _0x3faf06(1056, "btDD"),
      "aWRlZ": function (_0x2b1e02, _0x2b2b07, _0x295537) {
        return _0x2b1e02(_0x2b2b07, _0x295537);
      },
      "GelkP": _0x3faf06(1016, "oArr"),
      "Lnqdf": _0x3faf06(663, "0v8Q"),
      "TjbYQ": _0x3faf06(667, "fuCp"),
      "ApyGK": function (_0x13eb5a, _0x40d0c1, _0x7b10cc) {
        return _0x13eb5a(_0x40d0c1, _0x7b10cc);
      },
      "UwPbI": _0x3faf06(352, "U1HL"),
      "LJYRS": function (_0x45d25c, _0x3ecf90) {
        return _0x45d25c < _0x3ecf90;
      },
      "QybsR": _0x3faf06(513, "Y8Z1"),
      "IUBXC": function (_0x24da7) {
        return _0x24da7();
      },
      "GrksB": function (_0xc0d180, _0x2ddb4f) {
        return _0xc0d180 === _0x2ddb4f;
      },
      "niCOY": _0x3faf06(420, "$Aj8"),
      "ihCKq": function (_0xf42e3c) {
        return _0xf42e3c();
      },
      "YoTws": _0x3faf06(750, "Vbg%"),
      "ZTRBo": "/api/task/organizeTeam/activity",
      "sDgCV": "aJkgE",
      "dasVH": _0x3faf06(398, "ITCc"),
      "SXXVj": _0x3faf06(414, "RJYp"),
      "MSzoZ": _0x3faf06(737, "I%HD"),
      "KgdFq": function (_0x4489ac, _0x522960) {
        return _0x4489ac > _0x522960;
      },
      "nwuMy": function (_0x5e339e, _0x22b5ef) {
        return _0x5e339e == _0x22b5ef;
      },
      "diExB": function (_0x1e6e58, _0x439f32) {
        return _0x1e6e58 === _0x439f32;
      },
      "ZWogQ": _0x3faf06(328, "D7$P"),
      "hOYol": _0x3faf06(1044, "FYfc"),
      "rkkyM": function (_0x234640, _0x1f4782) {
        return _0x234640 === _0x1f4782;
      },
      "dvkTe": _0x3faf06(349, "&1MZ"),
      "WGAFu": "/api/task/share/getUserId",
      "BgoCE": function (_0x1fa81a, _0x4ed454) {
        return _0x1fa81a * _0x4ed454;
      },
      "IFrht": function (_0x40308b, _0x26a4b1) {
        return _0x40308b > _0x26a4b1;
      },
      "yAXiL": function (_0x42f438, _0x1e69f5) {
        return _0x42f438 != _0x1e69f5;
      },
      "oPuKK": function (_0x5819fd, _0x318ac6) {
        return _0x5819fd % _0x318ac6;
      },
      "spsIM": _0x3faf06(639, "oArr"),
      "FLatW": "LMkSZ",
      "TAdoK": _0x3faf06(731, "twF#"),
      "SHXJh": "FtkaA",
      "aQLmn": function (_0xd3de7, _0xb7876a) {
        return _0xd3de7 == _0xb7876a;
      },
      "WtUzp": _0x3faf06(708, "ah)q"),
      "LYgio": _0x3faf06(686, "C%Im"),
      "FIHeQ": _0x3faf06(671, "&1MZ"),
      "WRvJn": function (_0x44108d) {
        return _0x44108d();
      },
      "OdmGk": function (_0x1f8687, _0x16b5ac) {
        return _0x1f8687 === _0x16b5ac;
      },
      "qYPYy": function (_0x4fa571, _0x203c8b) {
        return _0x4fa571 === _0x203c8b;
      },
      "hexcV": function (_0x315d4e, _0x57dbdc) {
        return _0x315d4e !== _0x57dbdc;
      },
      "HRuLa": "NvivO",
      "yHwmr": _0x3faf06(930, "Gshr"),
      "NNAWT": _0x3faf06(504, "C%Im"),
      "ElEoY": function (_0x121230, _0x223190) {
        return _0x121230 === _0x223190;
      },
      "SVeyx": _0x3faf06(399, "U1HL"),
      "cuHjp": function (_0x13fc0e, _0x3ffadd) {
        return _0x13fc0e - _0x3ffadd;
      },
      "FTklK": function (_0x217a70, _0x372bbb) {
        return _0x217a70 > _0x372bbb;
      },
      "WGnwM": function (_0x5c47c1, _0x4efdf3) {
        return _0x5c47c1 * _0x4efdf3;
      },
      "SZUmk": function (_0x46a15a, _0x3b1f50) {
        return _0x46a15a < _0x3b1f50;
      },
      "GJyci": function (_0x376805, _0x146119) {
        return _0x376805 + _0x146119;
      },
      "NUbDG": function (_0x3c922d, _0x2b0d4a) {
        return _0x3c922d <= _0x2b0d4a;
      },
      "gvBuz": _0x3faf06(865, "FYfc"),
      "EubDw": "IIBVH",
      "QGXzm": _0x3faf06(615, "ah)q"),
      "xOEtP": function (_0x2d7fd4, _0x42c301) {
        return _0x2d7fd4 === _0x42c301;
      },
      "FJeqf": _0x3faf06(763, "00s8")
    };
  if (!$["superVersion"]) throw new Error(_0xcde141[_0x3faf06(582, "qg[H")]);
  $[_0x3faf06(964, "3yKb")] = leaders[_0x3faf06(366, "(5Ak")](_0x503b82 => _0x503b82[_0x3faf06(866, "O7^Z")] === ![])?.[0]?.[_0x3faf06(446, "!L7m")] || "";
  if ($[_0x3faf06(604, "[mDh")] > leaderNumber && !$["signUuid"]) {
    if (_0xcde141[_0x3faf06(740, "$Aj8")](_0xcde141[_0x3faf06(923, "O7^Z")], _0xcde141["UkqtT"])) {
      $[_0x3faf06(654, "3yKb")](_0xcde141[_0x3faf06(897, "$Aj8")]), $[_0x3faf06(1011, "O$86")] = !![];
      return;
    } else {
      _0x331247[_0x3faf06(703, "ah)q")](_0xcde141[_0x3faf06(1008, "AYhb")]), _0x17b034[_0x3faf06(438, "mkh4")] = !![];
      return;
    }
  }
  if (!$[_0x3faf06(502, "Y8Z1")] || !$[_0x3faf06(591, "]KP7")]) {
    $[_0x3faf06(336, "mkh4")]("\u6D3B\u52A8id\u4E0D\u5B58\u5728"), $[_0x3faf06(619, "3yKb")] = !![];
    return;
  }
  $["UA"] = $["ua"]();
  let _0x43ad3b = await $["isvObfuscator"]();
  if (_0x43ad3b[_0x3faf06(268, "]KP7")] !== "0") {
    $["putMsg"](_0x3faf06(620, "]KP7"));
    return;
  }
  $["Token"] = _0x43ad3b?.["token"];
  if ([_0xcde141["HfMGB"], _0xcde141["eaZcY"]][_0x3faf06(651, "mkh4")]($["domain"])) {
    await this["login"]();
    let _0x30720a = await this[_0x3faf06(554, "D7$P")](_0x3faf06(905, "Ebju"), {
        "teamId": $[_0x3faf06(883, "E8ox")]
      }),
      _0xd0101e = _0x30720a[_0x3faf06(907, "Gshr")][_0x3faf06(988, "JIq2")];
    $["prizeList"] = [{
      "prizeType": _0xd0101e[_0x3faf06(378, "fuCp")][_0x3faf06(489, "F8au")](_0xcde141[_0x3faf06(1002, "U1HL")]) || _0xd0101e["awardType"][_0x3faf06(1035, "zFPO")](_0xcde141[_0x3faf06(611, "w2JZ")]) ? 1 : 4
    }], $[_0x3faf06(436, "JIq2")] = _0xd0101e[_0x3faf06(1025, "$Aj8")], $["prizeType"] = _0xd0101e[_0x3faf06(378, "fuCp")]["includes"](_0x3faf06(478, "ObyE")) || _0xd0101e[_0x3faf06(716, "*Z9Q")]["includes"](_0xcde141["OHPGz"]) ? 1 : 4, $[_0x3faf06(585, "ITCc")] = _0xd0101e[_0x3faf06(833, "F8au")], $[_0x3faf06(455, "SHzY")] = _0xd0101e["awardTotalNum"], $["extraPrizeNumbers"] = _0xd0101e["inviterAwardNum"];
    if (_0xcde141["tOAWM"]($[_0x3faf06(913, "E8ox")], leaderNumber)) {
      if (_0x30720a[_0x3faf06(444, "RJYp")]["myTeamLog"]?.["teamId"]) $[_0x3faf06(646, "I%HD")]("\u5DF2\u6709" + _0x30720a[_0x3faf06(1007, "E8ox")][_0x3faf06(746, "btDD")]["length"] + "\u4EBA"), leaders[_0x3faf06(524, "Vbg%")]({
        "index": $[_0x3faf06(718, "F8au")],
        "cookie": $["cookie"],
        "token": $[_0x3faf06(727, "FYfc")],
        "signUuid": _0x30720a[_0x3faf06(342, "]KP7")][_0x3faf06(400, "Gshr")][_0x3faf06(901, "qg[H")],
        "username": $[_0x3faf06(416, "wlX5")],
        "finish": ![]
      });else {
        if (_0xcde141[_0x3faf06(797, "*Z9Q")](_0xcde141["YkCgT"], "XEbSQ")) {
          if (_0x47ca70[_0x3faf06(583, "]KP7")]) {
            let _0x16df43 = _0x5e9d28[_0x378565[_0x3faf06(494, "btDD")]];
            _0x469c9c["msg"]["push"]("    \u6700\u591A\u53EF\u7EC4" + _0x412042["maxGroup"] + "\u961F,\u5171" + _0xb4a774[_0x3faf06(789, "U1HL")] + _0x16df43 + " " + _0x208a7a[_0x3faf06(913, "E8ox")]);
            let _0x48942d = _0xcde141["Pkcqg"](_0x51d71e[_0x3faf06(302, "$Aj8")] + _0xeb06a3[_0x3faf06(1012, "E8ox")], _0x1d6ada[_0x3faf06(779, "w2JZ")]),
              _0x15c5e2 = _0x48942d + _0x3b457a[_0x3faf06(585, "ITCc")];
            _0x166681[_0x3faf06(919, "zFPO")]["push"]("    \u7EC4\u6EE1" + _0x15c5e2 + _0x16df43 + ",\u961F\u957F" + _0x48942d + _0x16df43 + _0x3faf06(423, "aK^[") + _0x1cfd4f["prizeNumbers"] + _0x16df43);
          }
        } else await $["wait"](3000, 5000), await saveCaptain(0);
      }
    }
    $[_0x3faf06(443, "JIq2")] = leaders[_0x3faf06(580, "[mDh")](_0x258be3 => _0x258be3[_0x3faf06(331, "]KP7")] === ![])?.[0]?.["signUuid"] || "";
    if (_0xcde141[_0x3faf06(748, "FYfc")]($[_0x3faf06(324, "U1HL")], 1) || !$[_0x3faf06(432, "0v8Q")]) return;
    let _0x22aad2 = await this[_0x3faf06(343, "O$86")](_0xcde141["zXPOP"], {
      "teamId": $[_0x3faf06(599, "O7^Z")],
      "tidaType": _0xcde141["iXBKF"]
    });
    _0x22aad2["result"]?.[_0x3faf06(539, "&1MZ")] || _0x22aad2["message"]?.[_0x3faf06(1077, "5gFI")](_0xcde141["nqzWw"]) ? ($["index"] = leaders[_0x3faf06(330, "qg[H")](_0x30e81c => _0x30e81c["finish"] === ![])?.[0]?.["index"], $[_0x3faf06(322, "(5Ak")] = leaders[_0x3faf06(580, "[mDh")](_0x44b905 => _0x44b905["finish"] === ![])?.[0]?.[_0x3faf06(902, "aK^[")], this[_0x3faf06(252, "D7$P")](_0xcde141[_0x3faf06(1066, "3yKb")]), leaders["filter"](_0x10ef41 => _0x10ef41[_0x3faf06(589, "Vbg%")] === $[_0x3faf06(674, "btDD")])[0][_0x3faf06(963, "[mDh")] = !![]) : this[_0x3faf06(843, "YiQW")](_0x22aad2[_0x3faf06(429, "SHzY")] || _0x22aad2["result"]?.["message"] || _0xcde141[_0x3faf06(684, "TdVM")]);
    return;
  } else {
    if ($["domain"][_0x3faf06(450, "!L7m")](_0xcde141[_0x3faf06(952, "[mDh")])) {
      let _0x47748c = await $["api"]("front/setMixNick", "strTMMixNick=" + $["Token"] + "&userId=" + $[_0x3faf06(292, "qg[H")] + "&source=01");
      if (!_0x47748c[_0x3faf06(1032, "]KP7")]) {
        if (_0xcde141[_0x3faf06(782, "iS*B")]("VaGDM", _0x3faf06(382, "2xjF"))) {
          $[_0x3faf06(528, "fV8@")](_0x3faf06(653, "SHzY"));
          return;
        } else {
          _0x48de63[_0x3faf06(942, "O7^Z")]({
            "index": _0x20f823[_0x3faf06(728, "oArr")],
            "cookie": _0x4a2c75[_0x3faf06(600, "RJYp")],
            "token": _0x3c0e40[_0x3faf06(1063, "qg[H")],
            "username": _0xbc0564[_0x3faf06(546, "ObyE")],
            "finish": !![]
          }), _0x3510f8[_0x3faf06(244, "E8ox")](_0xcde141["dvksE"]);
          return;
        }
      }
      let _0x5b0c49 = await $["api"](_0x3faf06(990, "Ouj[") + $[_0x3faf06(248, "ah)q")] + _0x3faf06(877, "RJYp") + $[_0x3faf06(724, "ObyE")] + _0x3faf06(762, "twF#"));
      if (_0x5b0c49["includes"](_0x3faf06(857, "3yKb"))) {
        $[_0x3faf06(761, "0v8Q")]("\u6D3B\u52A8\u5DF2\u7ED3\u675F"), $[_0x3faf06(666, "F8au")] = !![];
        return;
      }
      const _0xd5c2ac = cheerio["load"](cheerio["load"](_0x5b0c49)[_0x3faf06(911, "(iSg")]());
      $[_0x3faf06(280, "Vbg%")] = _0xcde141["wgKGI"](_0xd5c2ac, _0xcde141["jsXaR"], _0xcde141[_0x3faf06(914, "U1HL")])["attr"](_0x3faf06(337, "U1HL")), $[_0x3faf06(879, "w2JZ")] = _0xcde141[_0x3faf06(267, "2xjF")](_0xd5c2ac, _0xcde141[_0x3faf06(696, "ObyE")], _0x3faf06(553, "3yKb"))[_0x3faf06(638, "!L7m")](_0xcde141[_0x3faf06(433, "FYfc")]), $[_0x3faf06(805, "ObyE")] = _0xd5c2ac("#shop_title", _0xcde141[_0x3faf06(881, "ah)q")])[_0x3faf06(318, "*Z9Q")](_0xcde141[_0x3faf06(595, "00s8")]), $[_0x3faf06(849, "YiQW")] = _0xd5c2ac(_0xcde141[_0x3faf06(1034, "#TbG")], "body")["html"]();
      const _0x3e1971 = /(\d+-\d+-\d+\s\d+:\d+:\d+)/g,
        _0x4e5703 = $[_0x3faf06(315, "5gFI")][_0x3faf06(950, "twF#")](_0x3e1971),
        _0x367a12 = _0x4e5703[0],
        _0x1f7659 = _0x4e5703[1];
      $[_0x3faf06(532, "E8ox")] = new Date(_0x367a12)[_0x3faf06(835, "FYfc")](), $[_0x3faf06(1059, "fuCp")] = new Date(_0x1f7659)[_0x3faf06(1043, "ah)q")](), $[_0x3faf06(1067, "5gFI")] = _0xcde141[_0x3faf06(711, "(iSg")]($[_0x3faf06(618, "[mDh")][_0x3faf06(725, "Gshr")](/每个玩家可创建(\d+)个战队/)[1], 1), $[_0x3faf06(254, "C%Im")] = $[_0x3faf06(348, "(5Ak")][_0x3faf06(777, "0v8Q")]("\u79EF\u5206") ? 4 : 1, $["prizeNumbers"] = $[_0x3faf06(960, "]KP7")][_0x3faf06(392, "aK^[")](/组队成功后每人可获得(\d+)/)[1] * 1, $[_0x3faf06(1078, "JIq2")] = _0xcde141[_0x3faf06(764, "RJYp")](_0xcde141["ApyGK"](_0xd5c2ac, _0xcde141[_0x3faf06(806, "aK^[")], _0xcde141[_0x3faf06(276, "O7^Z")])[_0x3faf06(1041, "[mDh")]()["match"](/(\d+)/)[0], 1), $["extraPrizeNumbers"] = _0xcde141[_0x3faf06(634, "!L7m")]($[_0x3faf06(1039, "Ouj[")]["match"](/组队成功后队长可获得额外(\d+)/)[1], 1);
      if ($["actStartTime"] > Date["now"]()) {
        $["putMsg"](_0x3faf06(984, "ah)q")), $[_0x3faf06(705, "00s8")] = !![];
        return;
      }
      if (_0xcde141[_0x3faf06(387, "Y8Z1")]($[_0x3faf06(551, "mkh4")], Date[_0x3faf06(650, "0v8Q")]())) {
        $[_0x3faf06(867, "C%Im")]("\u6D3B\u52A8\u5DF2\u7ED3\u675F"), $["expire"] = !![];
        return;
      }
      $[_0x3faf06(913, "E8ox")] <= leaderNumber && (await $[_0x3faf06(308, "TdVM")](_0xcde141[_0x3faf06(1075, "twF#")], "userId=" + $[_0x3faf06(838, "ah)q")]), await $["wait"](3000, 5000), await saveCaptain(), await $["wait"](3000, 5000));
      await _0xcde141[_0x3faf06(726, "Vbg%")](saveMember);
      if (_0xcde141[_0x3faf06(985, "AYhb")]($[_0x3faf06(753, "Vbg%")], 2) && _0xcde141[_0x3faf06(876, "*Z9Q")](leaders[_0x3faf06(255, "[mDh")], 2)) {
        $["log"](_0xcde141["niCOY"]);
        let _0x1012c1 = leaders[0],
          _0x41c2fb = leaders[1];
        $[_0x3faf06(605, "SHzY")] = _0x1012c1[_0x3faf06(479, "D7$P")], $[_0x3faf06(529, "(iSg")] = _0x1012c1["cookie"], $[_0x3faf06(809, "O$86")] = _0x1012c1[_0x3faf06(543, "ITCc")], $[_0x3faf06(279, "2xjF")] = _0x1012c1[_0x3faf06(297, "SHzY")], $[_0x3faf06(443, "JIq2")] = _0x41c2fb[_0x3faf06(883, "E8ox")], await $[_0x3faf06(597, "FYfc")](3000, 5000), await _0xcde141[_0x3faf06(247, "!L7m")](saveMember);
      }
      return;
    }
  }
  if ([_0xcde141[_0x3faf06(555, "ah)q")]]["includes"]($["activityType"])) {
    await $[_0x3faf06(1015, "5gFI")]();
    let _0x42ce34 = await $["api"](_0xcde141["ZTRBo"], {
      "shareUserId": $["signUuid"] || ""
    });
    if (_0x42ce34[_0x3faf06(341, "Gshr")] !== 0) {
      if (_0xcde141[_0x3faf06(681, "O$86")](_0xcde141["sDgCV"], _0xcde141[_0x3faf06(926, "mkh4")])) {
        _0x3a32f0[_0x3faf06(761, "0v8Q")](_0x3faf06(398, "ITCc")), _0x540d0f[_0x3faf06(622, "AYhb")] = !![];
        return;
      } else {
        $[_0x3faf06(452, "fuCp")](_0xcde141["dasVH"]), $["expire"] = !![];
        return;
      }
    }
    for (let _0x22f9fc of $[_0x3faf06(346, "00s8")]) {
      if ($[_0x3faf06(1031, "5gFI")]["includes"](_0x22f9fc)) {
        $[_0x3faf06(965, "*Z9Q")] = !![], $[_0x3faf06(461, "#TbG")](_0xcde141[_0x3faf06(1049, "0v8Q")]);
        return;
      }
    }
    $[_0x3faf06(652, "]KP7")] = _0xcde141[_0x3faf06(1023, "JIq2")], $[_0x3faf06(424, "zFPO")] = leaders[_0x3faf06(894, "iS*B")](_0x419709 => _0x419709[_0x3faf06(953, "U1HL")] === ![])?.[0]?.[_0x3faf06(744, "fV8@")] || "";
    if (_0xcde141[_0x3faf06(1033, "5gFI")]($[_0x3faf06(490, "2xjF")], leaderNumber) && !$[_0x3faf06(353, "]KP7")]) {
      $[_0x3faf06(1042, "Vbg%")](_0xcde141[_0x3faf06(434, "w2JZ")]), $[_0x3faf06(451, "YiQW")] = !![];
      return;
    }
    $["prizeNumbers"] = _0x42ce34[_0x3faf06(1030, "5gFI")][_0x3faf06(278, "]KP7")], $[_0x3faf06(909, "Y8Z1")] = _0x42ce34["data"][_0x3faf06(454, "Y8Z1")][0][_0x3faf06(449, "TdVM")] || 0, $["extraPrizeNumbers"] = _0x42ce34["data"]["captainPrize"], $["prizeType"] = _0x42ce34[_0x3faf06(755, "3yKb")][_0x3faf06(494, "btDD")], $["maxGroup"] = _0x42ce34[_0x3faf06(418, "!L7m")][_0x3faf06(920, "AYhb")];
    if ($[_0x3faf06(307, "iS*B")] > leaderNumber && _0x42ce34[_0x3faf06(968, "Ouj[")] == 1000) {
      $[_0x3faf06(795, "*Z9Q")](_0x3faf06(786, "!L7m"));
      return;
    }
    if (_0xcde141[_0x3faf06(680, "FYfc")](_0x42ce34[_0x3faf06(1022, "Ebju")][_0x3faf06(629, "TdVM")], 4) && _0xcde141[_0x3faf06(243, "Bg0s")]($[_0x3faf06(847, "zFPO")], leaderNumber)) {
      console[_0x3faf06(290, "Bg0s")](_0xcde141[_0x3faf06(417, "fV8@")]);
      return;
    }
    if (_0xcde141["diExB"]($[_0x3faf06(839, "#TbG")], 4) && onlyBean === 1) {
      if (_0x3faf06(359, "C%Im") !== _0xcde141[_0x3faf06(462, "FYfc")]) {
        $["putMsg"](_0xcde141[_0x3faf06(614, "ITCc")]), $[_0x3faf06(283, "(5Ak")] = !![];
        return;
      } else {
        _0x2bd318[_0x3faf06(795, "*Z9Q")](_0xcde141[_0x3faf06(688, "btDD")]), _0x748f91[_0x3faf06(564, "qg[H")] = !![];
        return;
      }
    }
    if ($[_0x3faf06(490, "2xjF")] <= leaderNumber) {
      let _0x36dad3 = 0;
      for (let _0x5c5c03 of _0x42ce34[_0x3faf06(781, "oArr")][_0x3faf06(765, "w2JZ")] || []) {
        if (_0xcde141["rkkyM"](_0xcde141[_0x3faf06(311, "RJYp")], _0x3faf06(720, "5gFI"))) _0x36dad3 += _0x5c5c03[_0x3faf06(500, "ah)q")];else {
          try {
            if (_0x5adb23[_0x3faf06(373, "YiQW")]) {
              let _0x3e63af = _0x301cd0[_0x43f23a["prizeType"]];
              _0x7a430c[_0x3faf06(457, "JIq2")][_0x3faf06(427, "D7$P")]("    \u6700\u591A\u53EF\u7EC4" + _0x5007b1["maxGroup"] + "\u961F,\u5171" + _0x2f0962[_0x3faf06(978, "I%HD")] + _0x3e63af + " " + _0x2a446f["index"]);
              let _0x2a0a55 = _0xcde141[_0x3faf06(916, "Y8Z1")](_0x182045[_0x3faf06(888, "]KP7")] + _0x2b8150["extraPrizeNumbers"], _0x190683["maxGroup"]),
                _0x523a78 = _0xcde141["GbLmW"](_0x2a0a55, _0xce1bbe[_0x3faf06(394, "qg[H")]);
              _0x4ae14c["msg"][_0x3faf06(498, "5gFI")](_0x3faf06(560, "Y8Z1") + _0x523a78 + _0x3e63af + _0x3faf06(403, "iS*B") + _0x2a0a55 + _0x3e63af + ",\u961F\u5458" + _0x39f532[_0x3faf06(699, "*Z9Q")] + _0x3e63af);
            }
          } catch (_0x1d390c) {
            _0x28afb2[_0x3faf06(738, "twF#")](_0x1d390c);
          }
          _0x1fc066[_0x3faf06(1019, "fuCp")]["push"]("export M_WX_TEAM_URL=\"" + _0x46f955[_0x3faf06(426, "iS*B")] + "\"");
        }
      }
      await $["api"](_0x3faf06(270, "ObyE"), {
        "shareUserId": $[_0x3faf06(412, "2xjF")] || ""
      });
      let _0x12cd9a = await $["api"](_0xcde141[_0x3faf06(1006, "ah)q")], {
        "shareUserId": $["signUuid"] || ""
      });
      if (_0xcde141[_0x3faf06(574, "C%Im")]($["maxGroup"], 5) === _0x36dad3) {
        leaders[_0x3faf06(540, "iS*B")]({
          "index": $[_0x3faf06(253, "RJYp")],
          "cookie": $[_0x3faf06(386, "O$86")],
          "token": $[_0x3faf06(605, "SHzY")],
          "username": $[_0x3faf06(1058, "5gFI")],
          "finish": !![]
        }), $["putMsg"](_0xcde141["dvksE"]);
        return;
      }
      if (_0xcde141[_0x3faf06(938, "qg[H")](_0x42ce34["data"]?.["captainList"]?.[_0x3faf06(612, "U1HL")], 0) && _0xcde141[_0x3faf06(305, "O7^Z")](_0xcde141[_0x3faf06(824, "FYfc")](_0x36dad3, 5), 0)) _0xcde141[_0x3faf06(690, "3yKb")] === _0xcde141[_0x3faf06(745, "ITCc")] ? (_0x2f44d7[_0x3faf06(370, "[mDh")](_0xcde141[_0x3faf06(531, "I%HD")]), _0x44db7f[_0x3faf06(1053, "]KP7")] = !![]) : (leaders[_0x3faf06(524, "Vbg%")]({
        "index": $[_0x3faf06(732, "I%HD")],
        "cookie": $[_0x3faf06(334, "SHzY")],
        "token": $["Token"],
        "signUuid": _0x12cd9a[_0x3faf06(306, "Ouj[")][_0x3faf06(421, "twF#")],
        "teamId": _0x42ce34["data"][_0x3faf06(491, "C%Im")][_0x3faf06(900, "Ebju")](_0x3870b6 => _0x3870b6[_0x3faf06(840, "*Z9Q")] !== 5)[0]["id"],
        "username": $[_0x3faf06(898, "qg[H")],
        "finish": ![]
      }), $[_0x3faf06(511, "ITCc")]("\u5DF2\u6709" + _0x36dad3 + "\u4EBA"));else {
        await $["api"](_0xcde141[_0x3faf06(453, "O$86")], {});
        let _0x20a237 = await $[_0x3faf06(592, "#TbG")](_0x3faf06(730, "Vbg%"), {
          "shareUserId": $[_0x3faf06(808, "fuCp")] || ""
        });
        leaders[_0x3faf06(885, "$Aj8")]({
          "index": $[_0x3faf06(361, "SHzY")],
          "cookie": $[_0x3faf06(334, "SHzY")],
          "token": $["Token"],
          "signUuid": _0x12cd9a[_0x3faf06(791, "SHzY")][_0x3faf06(579, "qg[H")],
          "teamId": _0x20a237[_0x3faf06(817, "TdVM")][_0x3faf06(1090, "#TbG")][_0x3faf06(944, "ITCc")](_0x1b21f6 => _0x1b21f6[_0x3faf06(1089, "Y8Z1")] !== 5)[0]["id"],
          "username": $["username"],
          "finish": ![]
        }), $[_0x3faf06(309, "O7^Z")]("\u5EFA\u961F");
      }
    }
    if ($[_0x3faf06(1011, "O$86")]) {
      if (_0xcde141[_0x3faf06(460, "5gFI")](_0xcde141[_0x3faf06(556, "FYfc")], _0x3faf06(515, "mkh4"))) {
        for (let _0x1140bc of _0x306ca0[_0x3faf06(672, "iS*B")]) {
          if (_0x919875[_0x3faf06(694, "Gshr")]["includes"](_0x1140bc)) {
            _0x3e7654[_0x3faf06(557, "fuCp")] = !![], _0x1a1296[_0x3faf06(547, "FYfc")](_0xcde141[_0x3faf06(379, "iS*B")]);
            return;
          }
        }
        if (_0x40db05["shopName"]["includes"]("\u6D77\u5C14") || _0x584455[_0x3faf06(685, "SHzY")][_0x3faf06(329, "oArr")]("\u6C83\u9686")) {
          _0x1a07b0["expire"] = !![];
          return;
        }
      } else return;
    }
    if (_0xcde141[_0x3faf06(991, "ObyE")]($[_0x3faf06(505, "FYfc")], 1)) return;
    if (_0xcde141["aQLmn"](_0x42ce34[_0x3faf06(875, "oArr")], 1000)) {
      if (_0xcde141["WtUzp"] !== _0xcde141[_0x3faf06(692, "fV8@")]) {
        $[_0x3faf06(541, "C%Im")](_0xcde141[_0x3faf06(338, "fV8@")]);
        return;
      } else return;
    }
    $["signUuid"] = leaders[_0x3faf06(509, "00s8")](_0x443213 => _0x443213[_0x3faf06(813, "5gFI")] === ![])?.[0]?.[_0x3faf06(980, "mkh4")] || "", $["teamId"] = leaders[_0x3faf06(955, "YiQW")](_0x1d68e2 => _0x1d68e2["finish"] === ![])?.[0]?.["teamId"] || "", await _0xcde141[_0x3faf06(533, "qg[H")](saveMember);
    if (_0xcde141[_0x3faf06(294, "wlX5")]($[_0x3faf06(981, "!L7m")], 2) && _0xcde141[_0x3faf06(488, "O$86")](leaders[_0x3faf06(660, "aK^[")], 2)) {
      if (_0xcde141["hexcV"](_0xcde141[_0x3faf06(890, "!L7m")], _0xcde141[_0x3faf06(644, "D7$P")])) {
        $[_0x3faf06(654, "3yKb")]("ck1\u8FDBck2\u961F\u4F0D");
        let _0x272992 = leaders[0],
          _0x5935eb = leaders[1];
        $["Token"] = _0x272992[_0x3faf06(275, "Y8Z1")], $[_0x3faf06(760, "qg[H")] = _0x272992["cookie"], $[_0x3faf06(260, "Bg0s")] = _0x272992[_0x3faf06(520, "&1MZ")], $[_0x3faf06(751, "fV8@")] = _0x272992["username"], $[_0x3faf06(627, "O$86")] = _0x5935eb[_0x3faf06(627, "O$86")], $["teamId"] = _0x5935eb["teamId"], await saveMember();
      } else {
        _0xd4a51b[_0x3faf06(687, "O$86")](_0xcde141[_0x3faf06(702, "5gFI")]);
        return;
      }
    }
    return;
  }
  await $[_0x3faf06(735, "5gFI")]();
  if ($[_0x3faf06(549, "iS*B")]) return;
  await $[_0x3faf06(435, "fV8@")]();
  if (!$["Pin"]) return;
  await $[_0x3faf06(570, "FYfc")](), $[_0x3faf06(405, "#TbG")] = _0xcde141[_0x3faf06(534, "&1MZ")], $[_0x3faf06(674, "btDD")] = leaders[_0x3faf06(893, "twF#")](_0x59cd5b => _0x59cd5b[_0x3faf06(706, "Ebju")] === ![])?.[0]?.["signUuid"] || "";
  if ($[_0x3faf06(1038, "AYhb")] > leaderNumber && !$[_0x3faf06(712, "(5Ak")]) {
    $[_0x3faf06(472, "U1HL")](_0x3faf06(362, "5gFI")), $[_0x3faf06(602, "Gshr")] = !![];
    return;
  }
  activityContent = await $[_0x3faf06(536, "&1MZ")](_0xcde141[_0x3faf06(440, "O7^Z")], _0x3faf06(997, "Y8Z1") + $["activityId"] + _0x3faf06(662, "twF#") + $[_0x3faf06(670, "(5Ak")] + _0x3faf06(368, "RJYp") + ($[_0x3faf06(776, "#TbG")] || ""));
  if (!activityContent["result"] || !activityContent[_0x3faf06(1021, "D7$P")]) {
    $[_0x3faf06(528, "fV8@")](activityContent[_0x3faf06(823, "SHzY")]), await $[_0x3faf06(380, "wlX5")](activityContent[_0x3faf06(812, "#TbG")]);
    return;
  }
  $[_0x3faf06(532, "E8ox")] = activityContent[_0x3faf06(1003, "YiQW")]["active"]["startTime"], $[_0x3faf06(395, "$Aj8")] = activityContent[_0x3faf06(477, "00s8")]["active"][_0x3faf06(351, "5gFI")], $["prizeNumbers"] = activityContent[_0x3faf06(316, "JIq2")][_0x3faf06(301, "Y8Z1")][_0x3faf06(940, "3yKb")], $[_0x3faf06(780, "ah)q")] = activityContent[_0x3faf06(390, "RJYp")][_0x3faf06(882, "oArr")][_0x3faf06(790, "O$86")], $[_0x3faf06(1054, "5gFI")] = activityContent["data"][_0x3faf06(288, "Gshr")]["extraPrizeNumbers"], $["prizeType"] = activityContent["data"][_0x3faf06(363, "ITCc")][_0x3faf06(1073, "*Z9Q")], $[_0x3faf06(608, "mkh4")] = activityContent["data"][_0x3faf06(1069, "YiQW")]["maxGroup"], $[_0x3faf06(486, "O7^Z")] = await $[_0x3faf06(932, "3yKb")]();
  if ($["prizeType"] * 1 === 9) {
    for (let _0x371dda of $["notTeamList"]) {
      if ("qacDv" !== _0x3faf06(887, "oArr")) {
        if ($[_0x3faf06(401, "Y8Z1")]["includes"](_0x371dda)) {
          $[_0x3faf06(733, "#TbG")] = !![], $[_0x3faf06(821, "*Z9Q")](_0x3faf06(1057, "(iSg"));
          return;
        }
      } else {
        _0x14b986["putMsg"]("\u5DF2\u7ECF\u7EC4\u6EE1");
        return;
      }
    }
    if ($["shopName"][_0x3faf06(721, "2xjF")]("\u6D77\u5C14") || $["shopName"][_0x3faf06(935, "$Aj8")]("\u6C83\u9686")) {
      if (_0xcde141[_0x3faf06(701, "3yKb")](_0xcde141[_0x3faf06(770, "YiQW")], "KYJIL")) {
        $[_0x3faf06(438, "mkh4")] = !![];
        return;
      } else _0x8c02d1 += _0x40bf9e[_0x3faf06(784, "[mDh")];
    }
  }
  let _0x188c08 = _0xcde141[_0x3faf06(303, "zFPO")]($["actStartTime"][_0x3faf06(995, "I%HD")], $[_0x3faf06(986, "aK^[")]());
  _0xcde141[_0x3faf06(664, "I%HD")](_0x188c08, 0) && _0xcde141["LJYRS"](_0x188c08, _0xcde141[_0x3faf06(630, "Gshr")](_0xcde141[_0x3faf06(864, "(5Ak")](1000, 60), 30)) ? await $[_0x3faf06(272, "fV8@")](_0x188c08 + 10) : "";
  if ($[_0x3faf06(993, "TdVM")] <= $[_0x3faf06(483, "3yKb")]()) {
    $[_0x3faf06(643, "oArr")](_0xcde141[_0x3faf06(1061, "ITCc")]), $["expire"] = !![];
    return;
  }
  let _0x30fdaa = activityContent["data"][_0x3faf06(956, "ah)q")];
  if ($[_0x3faf06(913, "E8ox")] > leaderNumber && !_0x30fdaa) {
    $[_0x3faf06(271, "(iSg")](_0x3faf06(463, "00s8"));
    return;
  }
  if (_0xcde141[_0x3faf06(485, "[mDh")]($[_0x3faf06(635, "[mDh")], 9) && onlyBean === 1) {
    $["putMsg"](_0x3faf06(274, "fV8@")), $["expire"] = !![];
    return;
  }
  if ($[_0x3faf06(788, "E8ox")] === 6 && _0xcde141["SZUmk"](_0xcde141["GJyci"](_0xcde141["BgoCE"](_0xcde141[_0x3faf06(723, "$Aj8")]($[_0x3faf06(966, "Ouj[")], $[_0x3faf06(572, "Ouj[")]), $[_0x3faf06(404, "aK^[")]), $["prizeNumbers"]), beanLimit)) {
    $[_0x3faf06(858, "RJYp")](_0x3faf06(973, "!L7m") + beanLimit + _0x3faf06(656, "(5Ak")), $[_0x3faf06(771, "(iSg")] = !![];
    return;
  }
  if (_0xcde141["NUbDG"]($["index"], leaderNumber)) {
    let _0x44820e = activityContent["data"][_0x3faf06(945, "aK^[")],
      _0x185660 = 0;
    for (let _0x5a7b09 of activityContent[_0x3faf06(295, "E8ox")]["successRetList"] || []) {
      if (_0xcde141["GrksB"]("yCdNa", _0x3faf06(846, "FYfc"))) {
        _0x25b51d[_0x3faf06(550, "0v8Q")]({
          "index": _0x7d2abf[_0x3faf06(827, "00s8")],
          "cookie": _0x8f9e83[_0x3faf06(529, "(iSg")],
          "token": _0x121fe2[_0x3faf06(768, "JIq2")],
          "pin": _0x289507["Pin"],
          "signUuid": _0x13a8e4,
          "username": _0xbd88ff[_0x3faf06(1068, "[mDh")],
          "finish": !![]
        }), _0x471018["putMsg"](_0x3faf06(758, "F8au")), _0x5b6aed += _0xcde141[_0x3faf06(548, "Ouj[")](_0x15b9f4[_0x3faf06(388, "*Z9Q")], 4);
        return;
      } else _0x185660 += _0x5a7b09[_0x3faf06(967, "twF#")]["length"];
    }
    if ($[_0x3faf06(655, "C%Im")] * 5 === _0x185660) {
      leaders[_0x3faf06(979, "mkh4")]({
        "index": $[_0x3faf06(1017, "fV8@")],
        "cookie": $[_0x3faf06(649, "aK^[")],
        "token": $["Token"],
        "pin": $["Pin"],
        "signUuid": _0x44820e,
        "username": $["username"],
        "finish": !![]
      }), $[_0x3faf06(843, "YiQW")](_0x3faf06(886, "]KP7")), skipCookieNumber += $[_0x3faf06(542, "wlX5")] * 4;
      return;
    }
    let _0x4b9d04 = activityContent[_0x3faf06(418, "!L7m")][_0x3faf06(880, "w2JZ")]?.[_0x3faf06(1014, "F8au")];
    _0xcde141[_0x3faf06(870, "iS*B")](_0x4b9d04, 0) ? (leaders[_0x3faf06(407, "[mDh")]({
      "index": $[_0x3faf06(361, "SHzY")],
      "cookie": $["cookie"],
      "token": $[_0x3faf06(778, "fV8@")],
      "pin": $["Pin"],
      "signUuid": _0x44820e,
      "username": $[_0x3faf06(241, "ah)q")],
      "finish": ![]
    }), $[_0x3faf06(858, "RJYp")]("\u5DF2\u6709" + _0x4b9d04 + "\u4EBA")) : _0xcde141["xekUb"](_0xcde141[_0x3faf06(375, "fuCp")], _0x3faf06(538, "E8ox")) ? await saveCaptain(0) : (_0x580061[_0x3faf06(587, "qg[H")]("\u5DF2\u6709" + _0x4f8fab[_0x3faf06(924, "JIq2")][_0x3faf06(874, "AYhb")][_0x3faf06(376, "D7$P")] + "\u4EBA"), _0x563e70[_0x3faf06(314, "]KP7")]({
      "index": _0x38f372[_0x3faf06(637, "Ebju")],
      "cookie": _0x2f21bf[_0x3faf06(649, "aK^[")],
      "token": _0xe2033c["Token"],
      "signUuid": _0x3ef0cc[_0x3faf06(413, "AYhb")][_0x3faf06(588, "5gFI")]["teamId"],
      "username": _0x530bc2[_0x3faf06(610, "I%HD")],
      "finish": ![]
    }));
  }
  if ($["expire"]) {
    if ("nqcwk" === _0x3faf06(959, "ObyE")) return;else return;
  }
  if ($[_0x3faf06(678, "mkh4")] === 1 && $[_0x3faf06(481, "2xjF")][_0x3faf06(970, "O$86")](_0x3faf06(896, "00s8"))) {
    if (_0xcde141[_0x3faf06(793, "iS*B")] !== "IIBVH") this[_0x3faf06(511, "ITCc")](_0x6748a9[_0x3faf06(385, "fuCp")] || _0x122d40[_0x3faf06(785, "Ouj[")]?.[_0x3faf06(729, "fV8@")] || _0xcde141["CRMAO"]);else return;
  }
  if (!_0x30fdaa) {
    if (_0xcde141["rkkyM"](_0xcde141[_0x3faf06(754, "Y8Z1")], _0x3faf06(493, "5gFI"))) return;else {
      $["log"]("\u5DF2\u52A0\u5165\u961F\u4F0D");
      return;
    }
  }
  $[_0x3faf06(599, "O7^Z")] = leaders["filter"](_0x3d5a2c => _0x3d5a2c["finish"] === ![])?.[0]?.[_0x3faf06(871, "[mDh")] || "", await _0xcde141[_0x3faf06(1020, "5gFI")](saveMember);
  if (_0xcde141[_0x3faf06(425, "FYfc")]($[_0x3faf06(260, "Bg0s")], 2) && _0xcde141[_0x3faf06(689, "Vbg%")](leaders["length"], 2)) {
    $[_0x3faf06(541, "C%Im")](_0x3faf06(969, "Ebju"));
    let _0x2867ce = leaders[0],
      _0x317bad = leaders[1];
    $["Pin"] = _0x2867ce[_0x3faf06(621, "I%HD")], $["index"] = _0x2867ce[_0x3faf06(759, "$Aj8")], $["Token"] = _0x2867ce[_0x3faf06(837, "(5Ak")], $[_0x3faf06(600, "RJYp")] = _0x2867ce["cookie"], $[_0x3faf06(360, "TdVM")] = _0x2867ce[_0x3faf06(410, "Bg0s")], $[_0x3faf06(356, "Ouj[")] = _0x317bad[_0x3faf06(852, "Bg0s")], await $[_0x3faf06(536, "&1MZ")](_0xcde141[_0x3faf06(514, "(iSg")], _0x3faf06(590, "w2JZ") + $[_0x3faf06(499, "U1HL")] + "&token=" + $[_0x3faf06(430, "(iSg")] + _0x3faf06(851, "#TbG")), await _0xcde141[_0x3faf06(822, "AYhb")](saveMember);
  }
};
function _0x2ba1(_0x4e1e14, _0x454deb) {
  const _0x4d5f01 = _0x4d5f();
  return _0x2ba1 = function (_0x2ba16b, _0x500216) {
    _0x2ba16b = _0x2ba16b - 240;
    let _0x451ba0 = _0x4d5f01[_0x2ba16b];
    if (_0x2ba1["XdxBtG"] === undefined) {
      var _0x29c831 = function (_0x542a0f) {
        const _0xf3a8d4 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x9ce448 = "",
          _0x35b956 = "";
        for (let _0x2ec023 = 0, _0x7b76f6, _0x59bfc7, _0x410a4f = 0; _0x59bfc7 = _0x542a0f["charAt"](_0x410a4f++); ~_0x59bfc7 && (_0x7b76f6 = _0x2ec023 % 4 ? _0x7b76f6 * 64 + _0x59bfc7 : _0x59bfc7, _0x2ec023++ % 4) ? _0x9ce448 += String["fromCharCode"](255 & _0x7b76f6 >> (-2 * _0x2ec023 & 6)) : 0) {
          _0x59bfc7 = _0xf3a8d4["indexOf"](_0x59bfc7);
        }
        for (let _0x57ff71 = 0, _0x3bea0c = _0x9ce448["length"]; _0x57ff71 < _0x3bea0c; _0x57ff71++) {
          _0x35b956 += "%" + ("00" + _0x9ce448["charCodeAt"](_0x57ff71)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x35b956);
      };
      const _0x39cb24 = function (_0x3352ed, _0x530fd2) {
        let _0x112e03 = [],
          _0x49e45b = 0,
          _0x36fcdd,
          _0x5092d2 = "";
        _0x3352ed = _0x29c831(_0x3352ed);
        let _0x4c1804;
        for (_0x4c1804 = 0; _0x4c1804 < 256; _0x4c1804++) {
          _0x112e03[_0x4c1804] = _0x4c1804;
        }
        for (_0x4c1804 = 0; _0x4c1804 < 256; _0x4c1804++) {
          _0x49e45b = (_0x49e45b + _0x112e03[_0x4c1804] + _0x530fd2["charCodeAt"](_0x4c1804 % _0x530fd2["length"])) % 256, _0x36fcdd = _0x112e03[_0x4c1804], _0x112e03[_0x4c1804] = _0x112e03[_0x49e45b], _0x112e03[_0x49e45b] = _0x36fcdd;
        }
        _0x4c1804 = 0, _0x49e45b = 0;
        for (let _0x5ced93 = 0; _0x5ced93 < _0x3352ed["length"]; _0x5ced93++) {
          _0x4c1804 = (_0x4c1804 + 1) % 256, _0x49e45b = (_0x49e45b + _0x112e03[_0x4c1804]) % 256, _0x36fcdd = _0x112e03[_0x4c1804], _0x112e03[_0x4c1804] = _0x112e03[_0x49e45b], _0x112e03[_0x49e45b] = _0x36fcdd, _0x5092d2 += String["fromCharCode"](_0x3352ed["charCodeAt"](_0x5ced93) ^ _0x112e03[(_0x112e03[_0x4c1804] + _0x112e03[_0x49e45b]) % 256]);
        }
        return _0x5092d2;
      };
      _0x2ba1["aAxjLD"] = _0x39cb24, _0x4e1e14 = arguments, _0x2ba1["XdxBtG"] = !![];
    }
    const _0x490f21 = _0x4d5f01[0],
      _0x4054cb = _0x2ba16b + _0x490f21,
      _0x57f88d = _0x4e1e14[_0x4054cb];
    return !_0x57f88d ? (_0x2ba1["uTIMoJ"] === undefined && (_0x2ba1["uTIMoJ"] = !![]), _0x451ba0 = _0x2ba1["aAxjLD"](_0x451ba0, _0x500216), _0x4e1e14[_0x4054cb] = _0x451ba0) : _0x451ba0 = _0x57f88d, _0x451ba0;
  }, _0x2ba1(_0x4e1e14, _0x454deb);
}
let typeObj = {
  "1": "\u4EAC\u8C46",
  "2": _0x44391e(631, "0v8Q"),
  "4": "\u79EF\u5206",
  "6": "\u4EAC\u8C46",
  "7": "\u5B9E\u7269",
  "8": "\u4E13\u4EAB\u4EF7",
  "9": "\u79EF\u5206",
  "13": _0x44391e(928, "oArr"),
  "14": _0x44391e(683, "D7$P"),
  "15": _0x44391e(480, "(5Ak")
};
$["getPrizeList"] = async function () {
  const _0xb3cc5a = _0x44391e;
  try {
    let _0x519c9e = await $["api"](_0xb3cc5a(819, "SHzY"), {
      "shareUserId": $["signUuid"] || ""
    });
    $[_0xb3cc5a(949, "JIq2")] = _0x519c9e["data"]["prizeType"], $["prizeNumbers"] = _0x519c9e[_0xb3cc5a(593, "fV8@")]["memberPrize"], $[_0xb3cc5a(442, "O7^Z")] = _0x519c9e[_0xb3cc5a(1026, "ah)q")][_0xb3cc5a(469, "F8au")][0][_0xb3cc5a(512, "2xjF")] || 0, $["extraPrizeNumbers"] = _0x519c9e["data"][_0xb3cc5a(409, "qg[H")], $["prizeType"] = _0x519c9e["data"][_0xb3cc5a(1086, "TdVM")], $[_0xb3cc5a(1013, "U1HL")] = _0x519c9e[_0xb3cc5a(734, "Gshr")][_0xb3cc5a(853, "!L7m")], $[_0xb3cc5a(320, "YiQW")] = [{
      "prizeType": $[_0xb3cc5a(373, "YiQW")],
      "prizeName": typeObj[$["prizeType"]]
    }];
  } catch (_0x83d754) {
    console[_0xb3cc5a(277, "FYfc")](_0x83d754);
  }
};
async function saveCaptain(_0x2a5d20 = 0) {
  const _0x445628 = _0x44391e,
    _0x33dc5a = {
      "MjYIy": _0x445628(470, "[mDh"),
      "UkCUx": _0x445628(645, "E8ox"),
      "vsFUI": _0x445628(242, "E8ox"),
      "gpGuS": function (_0x3609b3, _0x1d0522) {
        return _0x3609b3 === _0x1d0522;
      },
      "YIvQS": _0x445628(354, "Ebju"),
      "COegC": _0x445628(628, "AYhb"),
      "nsBXJ": _0x445628(1062, "aK^["),
      "fwxdE": _0x445628(445, "!L7m"),
      "AHdXd": _0x445628(1065, "0v8Q"),
      "hTUkx": _0x445628(578, "oArr"),
      "ghMhj": function (_0x5586f3, _0x251f48) {
        return _0x5586f3 < _0x251f48;
      },
      "IXWYg": _0x445628(594, "iS*B"),
      "AOKtK": _0x445628(987, "#TbG"),
      "LQEfK": function (_0x550cdb, _0x2c242c) {
        return _0x550cdb === _0x2c242c;
      },
      "LEGMy": "jkBgz",
      "QkgeU": _0x445628(335, "iS*B"),
      "lmYXN": function (_0xba9523, _0x5de8f0) {
        return _0xba9523 === _0x5de8f0;
      },
      "Ujvli": _0x445628(1045, "btDD"),
      "hSQBl": "\u5DF2\u7ECF\u7EC4\u6EE1",
      "tfYIY": "jQurK",
      "mBhUC": "wxTeam/saveCaptain",
      "LkkTv": function (_0x5e0e67, _0x1b7048) {
        return _0x5e0e67(_0x1b7048);
      },
      "icwhy": function (_0x53cc78, _0x351448) {
        return _0x53cc78 < _0x351448;
      },
      "bQrpV": function (_0x293cd5, _0x2c2ac7) {
        return _0x293cd5(_0x2c2ac7);
      },
      "jXdEx": _0x445628(747, "aK^["),
      "IUlql": _0x445628(482, "2xjF"),
      "QJDbj": _0x445628(931, "FYfc"),
      "cgIWQ": _0x445628(1084, "(iSg"),
      "AuFdo": function (_0x348ab8, _0x105858) {
        return _0x348ab8 === _0x105858;
      },
      "OrtdZ": _0x445628(958, "00s8"),
      "ITmMP": function (_0x370568, _0x2e8015) {
        return _0x370568 + _0x2e8015;
      },
      "IJSMG": _0x445628(836, "btDD")
    };
  let _0x31f624 = $[_0x445628(520, "&1MZ")],
    _0xadac6e = $[_0x445628(573, "$Aj8")];
  if ([_0x33dc5a["UkCUx"], _0x33dc5a[_0x445628(458, "qg[H")]][_0x445628(777, "0v8Q")]($[_0x445628(468, "&1MZ")])) {
    if (_0x33dc5a[_0x445628(626, "(iSg")](_0x33dc5a[_0x445628(1085, "Ebju")], _0x445628(422, "zFPO"))) {
      _0x309620[_0x445628(904, "$Aj8")](_0x33dc5a["MjYIy"]);
      return;
    } else {
      let _0x52ed4c = await $["api"](_0x33dc5a[_0x445628(841, "F8au")], {
        "tidaType": _0x33dc5a[_0x445628(402, "Gshr")]
      });
      if (_0x52ed4c[_0x445628(971, "[mDh")]?.[_0x445628(567, "I%HD")](_0x33dc5a["fwxdE"])) {
        $["putMsg"](_0x445628(772, "C%Im"));
        return;
      }
      $["putMsg"]("\u5EFA\u961F"), leaders["push"]({
        "index": $[_0x445628(604, "[mDh")],
        "cookie": $[_0x445628(756, "w2JZ")],
        "token": $[_0x445628(605, "SHzY")],
        "signUuid": _0x52ed4c["result"][_0x445628(569, "Ebju")],
        "username": $[_0x445628(948, "twF#")],
        "finish": ![]
      });
    }
  } else {
    if ($[_0x445628(596, "U1HL")][_0x445628(794, "iS*B")](_0x33dc5a[_0x445628(801, "Gshr")])) {
      let _0x2289e6 = await $["api"](_0x33dc5a[_0x445628(552, "(iSg")], _0x445628(825, "$Aj8") + $[_0x445628(371, "I%HD")] + _0x445628(558, "ObyE") + $[_0x445628(347, "I%HD")]);
      _0x2289e6["msg"] ? $[_0x445628(698, "btDD")](_0x2289e6[_0x445628(441, "fV8@")]) : "";
      if (_0x2289e6["msg"]?.[_0x445628(794, "iS*B")](_0x445628(741, "#TbG")) && _0x33dc5a[_0x445628(296, "AYhb")](_0x2a5d20, 3)) {
        if (_0x445628(742, "F8au") === _0x33dc5a[_0x445628(719, "Gshr")]) _0x2496db[_0x445628(240, "fuCp")]({
          "index": _0x415e02[_0x445628(506, "TdVM")],
          "cookie": _0x5e2597[_0x445628(899, "wlX5")],
          "token": _0x1d1f01["Token"],
          "pin": _0x3e0694["Pin"],
          "signUuid": _0x1108b5,
          "username": _0xd496ea[_0x445628(657, "btDD")],
          "finish": ![]
        }), _0x2d545d["putMsg"]("\u5DF2\u6709" + _0x2cb485 + "\u4EBA");else {
          let _0x50ee06 = await $[_0x445628(559, "3yKb")](_0x33dc5a[_0x445628(673, "Y8Z1")], "userId=" + $["userId"]);
          if (!_0x50ee06["success"]) {
            if (_0x33dc5a["LQEfK"](_0x33dc5a["LEGMy"], _0x445628(927, "fV8@"))) {
              _0x657fbd[_0x445628(774, "00s8")](_0x445628(411, "Y8Z1"));
              return;
            } else {
              $[_0x445628(691, "ObyE")](_0x50ee06["msg"]);
              return;
            }
          }
          await $[_0x445628(249, "F8au")](3000, 5000), _0x2289e6 = await $[_0x445628(245, "ObyE")](_0x445628(523, "*Z9Q"), _0x445628(707, "SHzY") + $[_0x445628(609, "YiQW")] + "&act_id=" + $[_0x445628(937, "D7$P")]);
        }
      }
      if (_0x2289e6["msg"]?.[_0x445628(298, "D7$P")](_0x445628(471, "fV8@"))) {
        if (_0x33dc5a["gpGuS"](_0x33dc5a[_0x445628(289, "(5Ak")], _0x445628(507, "twF#"))) console[_0x445628(269, "Gshr")](_0x2289e6);else return;
      }
      let _0x1058fb = _0x2289e6[_0x445628(829, "FYfc")][_0x445628(976, "$Aj8")][0];
      _0x33dc5a["lmYXN"](_0x1058fb[_0x445628(929, "mkh4")][_0x445628(484, "mkh4")], 5) ? _0x2289e6[_0x445628(447, "twF#")]?.[_0x445628(739, "#TbG")](_0x33dc5a["Ujvli"]) && $[_0x445628(691, "ObyE")](_0x33dc5a[_0x445628(834, "[mDh")]) : leaders["push"]({
        "index": $[_0x445628(844, "#TbG")],
        "cookie": $[_0x445628(465, "Vbg%")],
        "token": $[_0x445628(258, "iS*B")],
        "signUuid": _0x1058fb["jdCombatTeamSetting"]["id"],
        "username": $[_0x445628(439, "Ebju")],
        "finish": _0x33dc5a["lmYXN"](_0x1058fb["jdCombatTeamLogs"][_0x445628(255, "[mDh")], 5)
      });
    } else {
      if ("jQurK" === _0x33dc5a[_0x445628(521, "(iSg")]) {
        let _0x43e94f = await $[_0x445628(391, "qg[H")](_0x33dc5a[_0x445628(717, "&1MZ")], _0x445628(381, "AYhb") + $["activityId"] + _0x445628(369, "btDD") + $["Pin"] + "&venderId=" + $["venderId"] + "&pinImg=" + _0x33dc5a[_0x445628(814, "SHzY")](encodeURIComponent, $[_0x445628(527, "$Aj8")]));
        if (_0x43e94f[_0x445628(1024, "!L7m")] && _0x43e94f[_0x445628(983, "2xjF")]) $["putMsg"]("\u5EFA\u961F"), leaders["push"]({
          "index": $[_0x445628(913, "E8ox")],
          "cookie": $[_0x445628(530, "btDD")],
          "token": $[_0x445628(700, "U1HL")],
          "pin": $[_0x445628(939, "[mDh")],
          "signUuid": _0x43e94f[_0x445628(1026, "ah)q")][_0x445628(883, "E8ox")],
          "username": $[_0x445628(661, "#TbG")],
          "finish": ![]
        });else {
          if (_0x43e94f["errorMessage"][_0x445628(623, "O7^Z")](_0x445628(869, "RJYp")) && _0x33dc5a["icwhy"](_0x2a5d20, 3)) await $[_0x445628(941, "[mDh")](), await _0x33dc5a[_0x445628(568, "RJYp")](saveCaptain, _0x2a5d20++);else {
            if (_0x43e94f["errorMessage"][_0x445628(970, "O$86")](_0x33dc5a[_0x445628(951, "&1MZ")]) && _0x2a5d20 === 0) await _0x33dc5a["bQrpV"](saveCaptain, 1);else {
              if (_0x43e94f["errorMessage"][_0x445628(848, "RJYp")](_0x33dc5a["IUlql"])) {
                $[_0x445628(461, "#TbG")]("\u5EFA\u961F");
                let _0x1ffa31 = await $[_0x445628(273, "F8au")](_0x33dc5a[_0x445628(256, "F8au")], "activityId=" + $[_0x445628(668, "aK^[")] + _0x445628(374, "0v8Q") + $[_0x445628(873, "I%HD")] + "&signUuid=" + ($["signUuid"] || ""));
                leaders[_0x445628(922, "w2JZ")]({
                  "index": $[_0x445628(526, "w2JZ")],
                  "cookie": $[_0x445628(465, "Vbg%")],
                  "token": $[_0x445628(603, "Vbg%")],
                  "pin": $[_0x445628(804, "2xjF")],
                  "signUuid": _0x1ffa31[_0x445628(477, "00s8")]["signUuid"],
                  "username": $[_0x445628(921, "F8au")],
                  "finish": ![]
                });
              } else _0x43e94f["errorMessage"][_0x445628(998, "ITCc")](_0x33dc5a["cgIWQ"]) ? _0x33dc5a[_0x445628(576, "fV8@")](_0x33dc5a["OrtdZ"], _0x445628(766, "O7^Z")) ? _0x4b2a91[_0x445628(669, "mkh4")](_0x445628(284, "Vbg%")) : ($["putMsg"](_0x33dc5a[_0x445628(862, "!L7m")]), $[_0x445628(564, "qg[H")] = !![]) : $[_0x445628(336, "mkh4")](_0x33dc5a["ITmMP"](_0x33dc5a[_0x445628(891, "Ouj[")], JSON[_0x445628(1081, "*Z9Q")](_0x43e94f)));
            }
          }
        }
      } else {
        _0x416732["putMsg"](_0x445628(915, "fV8@")), _0x59f00a[_0x445628(291, "2xjF")] = !![];
        return;
      }
    }
  }
}
async function saveMember(_0x1a870f = 0) {
  const _0x482efd = _0x44391e,
    _0x1aece5 = {
      "PyJJq": _0x482efd(892, "qg[H"),
      "XIIsa": function (_0x417a36, _0x38b967) {
        return _0x417a36 > _0x38b967;
      },
      "wjHKm": function (_0x105d55, _0xc970e3) {
        return _0x105d55 === _0xc970e3;
      },
      "CDNTF": _0x482efd(406, "D7$P"),
      "ZwZiB": "\u8BF7\u66F4\u65B0\u811A\u672C",
      "GkMKO": _0x482efd(1087, "ObyE"),
      "LvhpV": "\u9012\u5F52\u5F02\u5E38\u9000\u51FA",
      "bYHZG": _0x482efd(383, "twF#"),
      "pnMth": _0x482efd(1055, "ITCc"),
      "rIGvO": _0x482efd(1070, "$Aj8"),
      "uNDHO": _0x482efd(525, "Ebju"),
      "fezwx": function (_0xc87b14, _0x533a54) {
        return _0xc87b14 === _0x533a54;
      },
      "uNAMr": _0x482efd(459, "O7^Z"),
      "miIyw": _0x482efd(319, "(5Ak"),
      "btrlU": _0x482efd(1082, "qg[H"),
      "kMehs": _0x482efd(807, "JIq2"),
      "uUNeq": function (_0x4566d0, _0x396760) {
        return _0x4566d0(_0x396760);
      },
      "cVhei": _0x482efd(339, "I%HD"),
      "wmLJg": _0x482efd(1060, "ITCc"),
      "kPLSZ": _0x482efd(327, "O$86"),
      "pVGax": function (_0x1b6c70, _0x3e915e) {
        return _0x1b6c70 < _0x3e915e;
      },
      "sNraV": _0x482efd(257, "2xjF"),
      "qxiGs": "\u5DF2\u6EE1\u5458",
      "raEPk": function (_0x421a6d, _0x3ceb8a) {
        return _0x421a6d !== _0x3ceb8a;
      },
      "ReHGz": _0x482efd(415, "btDD"),
      "vFmeQ": _0x482efd(713, "U1HL"),
      "DBNVQ": "lvlea",
      "zXPxb": function (_0x2d14aa, _0x251941) {
        return _0x2d14aa(_0x251941);
      },
      "wWcQG": function (_0x15a06f, _0x24dfa4) {
        return _0x15a06f !== _0x24dfa4;
      },
      "IqrmI": _0x482efd(326, "Vbg%"),
      "gaJYq": _0x482efd(428, "btDD"),
      "Eoalu": function (_0x4fbbfd, _0x1148c2) {
        return _0x4fbbfd !== _0x1148c2;
      },
      "NdSyW": _0x482efd(310, "btDD"),
      "XWGFl": _0x482efd(1037, "Gshr"),
      "fuGBg": _0x482efd(961, "#TbG"),
      "MtnAk": _0x482efd(860, "00s8"),
      "cObqh": _0x482efd(989, "Ouj["),
      "sZSaI": function (_0x3766b7, _0x87f415) {
        return _0x3766b7(_0x87f415);
      },
      "xPxQy": _0x482efd(246, "Ouj["),
      "uAgTa": function (_0x9d9916, _0x5140a5) {
        return _0x9d9916(_0x5140a5);
      },
      "wwxib": _0x482efd(1071, "ObyE"),
      "asXTM": function (_0x4f8197, _0x4ea442) {
        return _0x4f8197 !== _0x4ea442;
      },
      "jXwfz": _0x482efd(519, "YiQW"),
      "XRVrm": function (_0x4a0faa, _0x2168a7) {
        return _0x4a0faa + _0x2168a7;
      }
    };
  if (_0x1a870f > 5) {
    console[_0x482efd(698, "btDD")](_0x1aece5[_0x482efd(607, "O$86")]);
    return;
  }
  let _0xb7212f = $["index"],
    _0x48b04d = $["username"];
  if ([_0x1aece5["bYHZG"]]["includes"]($[_0x482efd(854, "00s8")])) {
    if (!$["teamId"] || !$[_0x482efd(752, "oArr")]) {
      if (_0x1aece5[_0x482efd(431, "0v8Q")](_0x482efd(510, "(iSg"), _0x1aece5["pnMth"])) {
        console[_0x482efd(1040, "fV8@")](_0x1aece5[_0x482efd(994, "00s8")]);
        return;
      } else {
        _0x2ce944[_0x482efd(562, "Bg0s")](_0x482efd(910, "iS*B")), _0x2abd67["expire"] = !![];
        return;
      }
    }
    let _0x4db43e = await $[_0x482efd(736, "5gFI")](_0x482efd(933, "#TbG"), {
      "teamId": $[_0x482efd(1028, "O7^Z")],
      "shareUserId": $[_0x482efd(883, "E8ox")]
    });
    $["log"](_0x4db43e[_0x482efd(767, "Vbg%")] ? _0x1aece5[_0x482efd(709, "*Z9Q")] : _0x4db43e[_0x482efd(934, "RJYp")]);
    if (_0x1aece5["fezwx"](_0x4db43e[_0x482efd(1005, "U1HL")]?.[_0x482efd(266, "iS*B")]?.[_0x482efd(658, "qg[H")], 5)) {
      if (_0x1aece5[_0x482efd(803, "aK^[")] !== _0x482efd(783, "YiQW")) {
        let _0x5f9454 = leaders[_0x482efd(263, "E8ox")](_0x2e3b1c => _0x2e3b1c["signUuid"] === $[_0x482efd(999, "Gshr")])[0];
        $[_0x482efd(396, "F8au")](_0x482efd(1001, "O$86")), $[_0x482efd(571, "[mDh")] = _0x5f9454[_0x482efd(601, "2xjF")];
        let _0x15289a = await $[_0x482efd(617, "oArr")](_0x482efd(884, "YiQW"), {});
        if (_0x1aece5[_0x482efd(704, "ITCc")](_0x15289a[_0x482efd(341, "Gshr")], 0)) {
          let _0x44a2ce = await $["api"](_0x1aece5[_0x482efd(323, "fV8@")], {
            "shareUserId": $[_0x482efd(424, "zFPO")] || ""
          });
          $[_0x482efd(774, "00s8")]("\u5EFA\u961F"), _0x5f9454["teamId"] = _0x44a2ce[_0x482efd(474, "Y8Z1")][_0x482efd(496, "Bg0s")][_0x482efd(640, "!L7m")](_0x4405da => _0x4405da[_0x482efd(535, "&1MZ")] !== 5)[0]["id"];
        } else _0x5f9454[_0x482efd(743, "#TbG")] = !![], $["log"](_0x15289a[_0x482efd(317, "(5Ak")]);
        return;
      } else _0x5442aa["index"] = _0x48d409[_0x482efd(366, "(5Ak")](_0x3ee9dc => _0x3ee9dc[_0x482efd(518, "I%HD")] === ![])?.[0]?.[_0x482efd(312, "(5Ak")], _0x237448[_0x482efd(332, "zFPO")] = _0x5b799f["filter"](_0x507b0d => _0x507b0d[_0x482efd(996, "3yKb")] === ![])?.[0]?.[_0x482efd(285, "w2JZ")], this[_0x482efd(679, "Ouj[")](_0x1aece5[_0x482efd(695, "YiQW")]), _0x4eba02["filter"](_0x1ce69a => _0x1ce69a[_0x482efd(356, "Ouj[")] === _0x3a45b6["signUuid"])[0][_0x482efd(816, "Gshr")] = !![];
    }
    if (_0x4db43e["resp_msg"][_0x482efd(908, "JIq2")](_0x482efd(563, "U1HL"))) return;
    if (_0x4db43e["resp_msg"]["includes"]("\u60A8\u7684\u597D\u53CB\u7EC4\u961F\u6570\u5DF2\u8FBE\u4E0A\u9650\uFF01")) {
      if (_0x1aece5[_0x482efd(769, "#TbG")] !== _0x1aece5[_0x482efd(677, "Vbg%")]) _0x501c31[_0x482efd(697, "00s8")](_0x2d4918);else {
        let _0x3dbbd0 = leaders[_0x482efd(448, "5gFI")](_0x49e604 => _0x49e604[_0x482efd(980, "mkh4")] === $[_0x482efd(517, "00s8")])[0];
        _0x3dbbd0[_0x482efd(866, "O7^Z")] = !![], $[_0x482efd(361, "SHzY")] = _0x3dbbd0[_0x482efd(982, "JIq2")], $[_0x482efd(410, "Bg0s")] = _0x3dbbd0[_0x482efd(360, "TdVM")], $[_0x482efd(936, "&1MZ")](_0x482efd(842, "0v8Q")), $[_0x482efd(749, "3yKb")] = _0x48b04d, $[_0x482efd(847, "zFPO")] = _0xb7212f, _0x3dbbd0 = leaders[_0x482efd(944, "ITCc")](_0x479b0b => _0x479b0b["finish"] === ![])?.[0];
        if (!_0x3dbbd0) {
          $[_0x482efd(821, "*Z9Q")](_0x1aece5[_0x482efd(501, "AYhb")]), $[_0x482efd(321, "w2JZ")] = !![];
          return;
        }
        $[_0x482efd(1079, "&1MZ")] = _0x3dbbd0?.["teamId"] || "", $[_0x482efd(340, "D7$P")] = _0x3dbbd0?.[_0x482efd(1018, "wlX5")] || "", await _0x1aece5[_0x482efd(377, "ITCc")](saveMember, _0x1a870f++);
      }
    }
  } else {
    if ($[_0x482efd(468, "&1MZ")]["includes"](_0x482efd(810, "I%HD"))) {
      if ($[_0x482efd(367, "w2JZ")]) {
        let _0x48ce81 = await $[_0x482efd(391, "qg[H")](_0x1aece5["cVhei"], _0x482efd(676, "#TbG") + $[_0x482efd(972, "O$86")] + _0x482efd(1027, "mkh4") + $[_0x482efd(1072, "O$86")] + _0x482efd(648, "Vbg%") + $[_0x482efd(871, "[mDh")]);
        _0x48ce81[_0x482efd(773, "aK^[")] ? $[_0x482efd(820, "[mDh")](_0x48ce81["msg"]) : "";
        if (_0x48ce81[_0x482efd(476, "Bg0s")]?.[_0x482efd(575, "SHzY")](_0x1aece5[_0x482efd(977, "Y8Z1")])) {
          $[_0x482efd(364, "twF#")] = !![];
          return;
        }
        if (_0x48ce81["msg"]?.[_0x482efd(970, "O$86")]("\u706B\u7206") || _0x48ce81[_0x482efd(918, "btDD")]?.[_0x482efd(300, "C%Im")](_0x482efd(633, "ObyE"))) {
          if (_0x1aece5["wjHKm"](_0x1aece5["kPLSZ"], _0x1aece5[_0x482efd(565, "ITCc")])) return;else return;
        }
        if (_0x48ce81[_0x482efd(441, "fV8@")]?.[_0x482efd(393, "]KP7")]("\u5173\u6CE8") && _0x1aece5[_0x482efd(636, "2xjF")](_0x1a870f, 3)) {
          await $[_0x482efd(282, "Ebju")](_0x1aece5[_0x482efd(408, "btDD")], _0x482efd(304, "Ebju") + $[_0x482efd(863, "&1MZ")]), await $[_0x482efd(597, "FYfc")](3000, 5000), await saveMember(_0x1a870f++);
          return;
        }
        if (_0x48ce81[_0x482efd(1088, "00s8")]?.["includes"](_0x1aece5[_0x482efd(456, "btDD")])) {
          let _0x3cd682 = leaders["filter"](_0x5c99d6 => _0x5c99d6["signUuid"] === $[_0x482efd(674, "btDD")])[0];
          _0x3cd682["finish"] = !![], $["Token"] = _0x3cd682[_0x482efd(895, "00s8")], $[_0x482efd(299, "0v8Q")] = _0x3cd682[_0x482efd(1050, "qg[H")], $["username"] = _0x3cd682["username"], $[_0x482efd(815, "ObyE")] = _0x3cd682[_0x482efd(760, "qg[H")], await _0x1aece5[_0x482efd(250, "$Aj8")](saveCaptain, 0), $[_0x482efd(992, "U1HL")] = leaders["filter"](_0x4ed6d0 => _0x4ed6d0[_0x482efd(287, "fuCp")] === ![])?.[0]?.["signUuid"] || "";
          if (_0x1aece5["XIIsa"]($[_0x482efd(604, "[mDh")], leaderNumber) && !$[_0x482efd(340, "D7$P")]) {
            if (_0x1aece5["raEPk"](_0x1aece5["ReHGz"], _0x1aece5[_0x482efd(1009, "fuCp")])) $["log"](_0x1aece5["kMehs"]), $["expire"] = !![];else {
              if (_0x1aece5[_0x482efd(265, "Ebju")](_0x462c6f[_0x482efd(1050, "qg[H")], _0x1a2aba)) return;
              _0x39488b["putMsg"]("\u5165" + _0x4a59c8[_0x482efd(903, "O$86")] + "\u961F\u4F0D");
            }
          }
        }
      }
    } else {
      if (_0x1aece5[_0x482efd(466, "oArr")](_0x1aece5["DBNVQ"], _0x1aece5[_0x482efd(544, "Ouj[")])) {
        let _0x574648 = await $["api"](_0x482efd(1029, "oArr"), _0x482efd(606, "Gshr") + $[_0x482efd(344, "E8ox")] + _0x482efd(516, "Bg0s") + $[_0x482efd(878, "I%HD")] + _0x482efd(974, "RJYp") + $["Pin"] + _0x482efd(1076, "btDD") + $[_0x482efd(917, "TdVM")] + _0x482efd(647, "2xjF") + _0x1aece5["zXPxb"](encodeURIComponent, $[_0x482efd(357, "Bg0s")])),
          _0x908fba = leaders[_0x482efd(894, "iS*B")](_0x385bdc => _0x385bdc[_0x482efd(627, "O$86")] === $[_0x482efd(945, "aK^[")])[0];
        if (_0x574648[_0x482efd(313, "D7$P")] && _0x574648["data"]) {
          if (_0x1aece5[_0x482efd(1052, "(iSg")]($[_0x482efd(253, "RJYp")], leaderNumber)) {
            if (_0x1aece5[_0x482efd(625, "RJYp")](_0x1aece5[_0x482efd(577, "qg[H")], _0x1aece5["gaJYq"])) return;else _0x2fd81f["push"]({
              "index": _0x2a846b["index"],
              "cookie": _0x3f9d01[_0x482efd(861, "iS*B")],
              "token": _0x140956["Token"],
              "signUuid": _0x14663e[_0x482efd(1004, "Vbg%")]["id"],
              "username": _0x13f70c["username"],
              "finish": _0x1aece5["wjHKm"](_0x10278a["jdCombatTeamLogs"][_0x482efd(333, "I%HD")], 5)
            });
          }
          $[_0x482efd(850, "iS*B")]("\u5165" + _0x908fba[_0x482efd(751, "fV8@")] + "\u961F\u4F0D");
        } else {
          if (_0x1aece5["Eoalu"](_0x482efd(826, "zFPO"), _0x1aece5[_0x482efd(715, "zFPO")])) {
            _0x410a4f[_0x482efd(1047, "#TbG")]("\u6D3B\u52A8id\u4E0D\u5B58\u5728"), _0x57ff71[_0x482efd(262, "aK^[")] = !![];
            return;
          } else {
            if (_0x574648["errorMessage"][_0x482efd(567, "I%HD")](_0x1aece5[_0x482efd(962, "U1HL")]) && _0x1aece5[_0x482efd(912, "0v8Q")](_0x1a870f, 3)) await $["openCard"](), await _0x1aece5["zXPxb"](saveMember, _0x1a870f++);else {
              if (_0x574648[_0x482efd(624, "3yKb")]["includes"](_0x482efd(495, "wlX5"))) {
                if (_0x1aece5[_0x482efd(1080, "oArr")](_0x1aece5[_0x482efd(503, "0v8Q")], _0x1aece5[_0x482efd(954, "!L7m")])) {
                  _0x57e6ac[_0x482efd(372, "(5Ak")](_0x1aece5[_0x482efd(872, "ITCc")]), _0xba930f[_0x482efd(522, "&1MZ")] = !![];
                  return;
                } else {
                  $[_0x482efd(541, "C%Im")](_0x908fba), $[_0x482efd(1038, "AYhb")] = _0x908fba[_0x482efd(982, "JIq2")], $[_0x482efd(657, "btDD")] = _0x908fba[_0x482efd(264, "ITCc")], $[_0x482efd(396, "F8au")]("\u5DF2\u7ECF\u7EC4\u6EE1"), $[_0x482efd(297, "SHzY")] = _0x48b04d, $[_0x482efd(1051, "aK^[")] = _0xb7212f, leaders[_0x482efd(397, "Gshr")](_0x2f45cc => _0x2f45cc[_0x482efd(412, "2xjF")] === $["signUuid"])[0][_0x482efd(693, "btDD")] = !![], $[_0x482efd(659, "ITCc")] = leaders[_0x482efd(1000, "Y8Z1")](_0x406ca1 => _0x406ca1[_0x482efd(586, "FYfc")] === ![])?.[0]?.[_0x482efd(752, "oArr")] || "";
                  if (!$["signUuid"]) {
                    if (_0x482efd(293, "w2JZ") === _0x1aece5[_0x482efd(1074, "ah)q")]) {
                      _0x2c26e4[_0x482efd(309, "O7^Z")](_0xb90879[_0x482efd(345, "U1HL")]);
                      return;
                    } else {
                      $[_0x482efd(251, "&1MZ")](_0x482efd(906, "fV8@")), $["expire"] = !![];
                      return;
                    }
                  }
                  await _0x1aece5[_0x482efd(389, "iS*B")](saveMember, 0);
                }
              } else {
                if (_0x574648["errorMessage"]["includes"](_0x1aece5[_0x482efd(384, "FYfc")]) && _0x1aece5[_0x482efd(259, "3yKb")](_0x1a870f, 0)) await _0x1aece5[_0x482efd(358, "Ebju")](saveMember, 1);else {
                  if (_0x574648[_0x482efd(957, "Vbg%")][_0x482efd(828, "qg[H")](_0x1aece5[_0x482efd(613, "YiQW")])) {
                    if (_0x1aece5[_0x482efd(365, "F8au")](_0x482efd(487, "F8au"), _0x1aece5[_0x482efd(831, "5gFI")])) throw new _0x542a0f(_0x1aece5[_0x482efd(818, "C%Im")]);else $["putMsg"](_0x574648[_0x482efd(492, "F8au")]);
                  } else $["putMsg"](_0x574648["errorMessage"] || _0x482efd(1064, "U1HL")), await $[_0x482efd(261, "Ouj[")](_0x574648[_0x482efd(464, "zFPO")]), $["log"](_0x1aece5["XRVrm"](_0x482efd(584, "F8au"), JSON[_0x482efd(545, "D7$P")](_0x574648)));
                }
              }
            }
          }
        }
      } else {
        _0x582a87[_0x482efd(867, "C%Im")](_0x1aece5[_0x482efd(975, "Ebju")]), _0x318416["expire"] = !![];
        return;
      }
    }
  }
}
$[_0x44391e(796, "RJYp")] = async function () {
  const _0x4c7dea = _0x44391e,
    _0x4b4720 = {
      "rNfFK": function (_0x21eb61, _0x29f358) {
        return _0x21eb61 * _0x29f358;
      },
      "KAdZy": function (_0x3acd30, _0x1e35fd) {
        return _0x3acd30 + _0x1e35fd;
      },
      "IJjtH": function (_0x54307f, _0x39c342) {
        return _0x54307f + _0x39c342;
      }
    };
  try {
    if ($["prizeType"]) {
      let _0x5c7abc = typeObj[$["prizeType"]];
      $["msg"][_0x4c7dea(665, "JIq2")](_0x4c7dea(943, "Ouj[") + $[_0x4c7dea(642, "twF#")] + "\u961F,\u5171" + $["sendNumbers"] + _0x5c7abc + " " + $["index"]);
      let _0x16a394 = _0x4b4720[_0x4c7dea(286, "3yKb")](_0x4b4720[_0x4c7dea(581, "iS*B")]($[_0x4c7dea(699, "*Z9Q")], $[_0x4c7dea(682, "O7^Z")]), $[_0x4c7dea(566, "00s8")]),
        _0x1ece7e = _0x4b4720[_0x4c7dea(845, "btDD")](_0x16a394, $[_0x4c7dea(598, "AYhb")]);
      $[_0x4c7dea(802, "Ouj[")][_0x4c7dea(792, "ObyE")](_0x4c7dea(1010, "(iSg") + _0x1ece7e + _0x5c7abc + _0x4c7dea(947, "fuCp") + _0x16a394 + _0x5c7abc + _0x4c7dea(946, "Ebju") + $[_0x4c7dea(722, "Bg0s")] + _0x5c7abc);
    }
  } catch (_0x5bb21b) {
    console[_0x4c7dea(467, "Ouj[")](_0x5bb21b);
  }
  $["msg"][_0x4c7dea(885, "$Aj8")](_0x4c7dea(787, "!L7m") + $[_0x4c7dea(811, "qg[H")] + "\"");
}, $[_0x44391e(1036, "iS*B")]({
  "whitelist": [_0x44391e(641, "Bg0s")],
  "multCenter": !![],
  "mod": centerIndex * 1
})["catch"](_0x4dcead => $[_0x44391e(419, "qg[H")](_0x4dcead));
var version_ = "jsjiami.com.v7";