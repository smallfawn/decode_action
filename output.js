//Mon Apr 28 2025 09:51:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
运行状态 = true;
运行状态储存.put("运行状态储存", true);
var 文件;
if (平台读写.get("引流平台读写") == "某喑" || 平台读写.get("引流平台读写") == "抖音") {
  文件 = "douying2.js";
  if (功能读写.get("功能读写").indexOf("获客") > -1) {
    文件 = "douying_huo.js";
  }
} else if (平台读写.get("引流平台读写") == "某手" || 平台读写.get("引流平台读写") == "快手") {
  文件 = "kuaishou.js";
  if (功能读写.get("功能读写").indexOf("获客") > -1) {
    文件 = "kuaishou_huo.js";
  }
} else if (平台读写.get("引流平台读写") == "佰度" || 平台读写.get("引流平台读写") == "百度") {
  文件 = "baidu.js";
} else if (平台读写.get("引流平台读写") == "小红书" || 平台读写.get("引流平台读写") == "小红薯") {
  文件 = "xiaohongshu.js";
  if (功能读写.get("功能读写").indexOf("获客") > -1) {
    文件 = "xiaohongshu_huo.js";
  }
} else if (平台读写.get("引流平台读写") == "某头条" || 平台读写.get("引流平台读写") == "今日头条") {
  文件 = "jinritoutiao.js";
} else if (平台读写.get("引流平台读写") == "饿了么" || 平台读写.get("引流平台读写") == "饿了麽") {
  文件 = "elme.js";
} else if (平台读写.get("引流平台读写") == "美团" || 平台读写.get("引流平台读写") == "镁团") {
  文件 = "meituan.js";
  if (功能读写.get("功能读写").indexOf("获客") > -1) {
    文件 = "meituan_huo.js";
  }
} else if (平台读写.get("引流平台读写") == "哔哩哔哩" || 平台读写.get("引流平台读写") == "B哩b哩") {
  文件 = "bilibili.js";
  if (功能读写.get("功能读写").indexOf("获客") > -1) {
    文件 = "bilibili_huo.js";
  }
} else if (平台读写.get("引流平台读写") == "拼多多" || 平台读写.get("引流平台读写") == "拼DD") {
  文件 = "pdd.js";
} else if (平台读写.get("引流平台读写") == "微博" || 平台读写.get("引流平台读写") == "微搏") {
  文件 = "weibo.js";
} else if (平台读写.get("引流平台读写") == "优酷" || 平台读写.get("引流平台读写") == "忧酷") {
  文件 = "youku.js";
} else if (平台读写.get("引流平台读写") == "爱奇艺" || 平台读写.get("引流平台读写") == "爱奇亿") {
  文件 = "aiqiyi.js";
} else if (平台读写.get("引流平台读写") == "百度贴吧" || 平台读写.get("引流平台读写") == "佰度贴吧") {
  文件 = "tieba.js";
} else if (平台读写.get("引流平台读写") == "某呱视频" || 平台读写.get("引流平台读写") == "西瓜视频") {
  文件 = "xigua.js";
} else if (平台读写.get("引流平台读写") == "陌陌" || 平台读写.get("引流平台读写") == "陌mo") {
  文件 = "momo.js";
} else if (平台读写.get("引流平台读写") == "探探" || 平台读写.get("引流平台读写") == "探tan") {
  文件 = "tantan.js";
} else if (平台读写.get("引流平台读写") == "SOUL" || 平台读写.get("引流平台读写") == "Suol") {
  文件 = "soul.js";
} else if (平台读写.get("引流平台读写") == "微信" || 平台读写.get("引流平台读写") == "V信") {
  文件 = "shipinhao.js";
  if (功能读写.get("功能读写").indexOf("自动添加微信") > -1) {
    文件 = "weixin_huo.js";
  }
} else if (平台读写.get("引流平台读写") == "QQ" || 平台读写.get("引流平台读写") == "扣扣") {
  文件 = "qqfujin.js";
} else if (平台读写.get("引流平台读写") == "知乎" || 平台读写.get("引流平台读写") == "知呼") {
  文件 = "zhihu.js";
} else if (平台读写.get("引流平台读写") == "豆瓣" || 平台读写.get("引流平台读写") == "豆辦") {
  文件 = "douban.js";
} else if (平台读写.get("引流平台读写") == "好看视频" || 平台读写.get("引流平台读写") == "好㸔视频") {
  文件 = "haokanshipin.js";
} else if (平台读写.get("引流平台读写") == "某讯视频" || 平台读写.get("引流平台读写") == "腾讯视频") {
  文件 = "tengxunshipin.js";
} else if (平台读写.get("引流平台读写") == "搜狐视频" || 平台读写.get("引流平台读写") == "搜弧视频") {
  文件 = "souhushipin.js";
} else if (平台读写.get("引流平台读写") == "芒果TV" || 平台读写.get("引流平台读写") == "芒菓TV") {
  文件 = "mangguoshipin.js";
} else if (平台读写.get("引流平台读写") == "闲鱼" || 平台读写.get("引流平台读写") == "闲渔") {
  文件 = "xianyu.js";
} else if (平台读写.get("引流平台读写") == "百度地图" || 平台读写.get("引流平台读写") == "佰度地图") {
  文件 = "baiduditu_huo.js";
  if (功能读写.get("功能读写").indexOf("获客") > -1) {
    文件 = "baiduditu_huo.js";
  }
} else if (平台读写.get("引流平台读写") == "高德地图" || 平台读写.get("引流平台读写") == "高得地图") {
  文件 = "gaodeditu_huo.js";
  if (功能读写.get("功能读写").indexOf("获客") > -1) {
    文件 = "gaodeditu_huo.js";
  }
} else if (平台读写.get("引流平台读写") == "爱企查" || 平台读写.get("引流平台读写") == "爱企碴") {
  文件 = "aiqicha_huo.js";
  if (功能读写.get("功能读写").indexOf("获客") > -1) {
    文件 = "aiqicha_huo.js";
  }
} else if (平台读写.get("引流平台读写") == "企业微信" || 平台读写.get("引流平台读写") == "企业V信") {
  文件 = "qiyeweixin_huo.js";
  if (功能读写.get("功能读写").indexOf("获客") > -1) {
    文件 = "qiyeweixin_huo.js";
  }
} else {
  文件 = "douying2.js";
}
_0xodK = "jsjiami.com.v6";