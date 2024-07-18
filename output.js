//Thu Jul 18 2024 05:35:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x552525 = "网络异常，跳过";
const _0x3f15de = require("request");
const _0xec3aa5 = require("crypto");
const _0x1805af = process.env.HOST || "http://api.94wan.fun";
const _0x54c651 = process.env.SIGN_HOST || "http://api.94wan.fun";
const {
  sendNotify
} = require("./sendNotify1.js");
const _0x40fda8 = require("dns");
const _0x3a0254 = require("md5");
const _0x2177e6 = ["iPad;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2346663656561603-4353564623932316;network/wifi;model/ONEPLUS A5010;addressid/0;aid/2dfceea045ed292a;oaid/;osVer/29;appBuild/1436;psn/BS6Y9SAiw0IpJ4ro7rjSOkCRZTgR3z2K|10;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/10.5;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.1;59d6ae6ekdhripiepjwecb8abzcyi8h1z43mz5sn;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.26;apprpd/;ref/JDLTSubMainPageViewController;psq/0;ads/;psn/59d6ae6e8387bd09fe046d5b8918ead51614e80a|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;22d679c006bf9c087abf362cf1d2e0020ebb8798;network/wifi;ADID/10857A57-DDF8-4A0D-A548-7B8F43AC77EE;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,1;addressid/2378947694;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/15.7;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/6;ads/;psn/22d679c006bf9c087abf362cf1d2e0020ebb8798|22;jdv/0|kong|t_1000170135|tuiguang|notset|1614153044558|1614153044;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2616935633265383-5333463636261326;network/UNKNOWN;model/M2007J3SC;addressid/1840745247;aid/ba9e3b5853dccb1b;oaid/371d8af7dd71e8d5;osVer/29;appBuild/1436;psn/t7JmxZUXGkimd4f9Jdul2jEeuYLwxPrm|8;psq/6;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.6;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; M2007J3SC Build/QKQ1.200419.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.3;d7beab54ae7758fa896c193b49470204fbb8fce9;network/4g;ADID/97AD46C9-6D49-4642-BF6F-689256673906;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;D246836333735-3264353430393;network/4g;model/MIX 2;addressid/138678023;aid/bf8bcf1214b3832a;oaid/308540d1f1feb2f5;osVer/28;appBuild/1436;psn/Z/rGqfWBY/h5gcGFnVIsRw==|16;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/13.7;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/xiaomi;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5;network/wifi;ADID/5603541B-30C1-4B5C-A782-20D0B569D810;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/1041002757;hasOCPay/0;appBuild/101;supportBestPay/0;pv/34.6;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5|44;jdv/0|androidapp|t_335139774|appshare|CopyURL|1612612940307|1612612944;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;21631ed983b3e854a3154b0336413825ad0d6783;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;500a795cb2abae60b877ee4a1930557a800bef1c;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;f5e7b7980fb50efc9c294ac38653c1584846c3db;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;19fef5419f88076c43f5317eabe20121d52c6a61;network/wifi;ADID/00000000-0000-0000-0000-000000000000;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/3430850943;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.4;apprpd/;ref/JDLTSubMainPageViewController;psq/3;ads/;psn/19fef5419f88076c43f5317eabe20121d52c6a61|16;jdv/0|kong|t_1001327829_|jingfen|f51febe09dd64b20b06bc6ef4c1ad790#/|1614096460311|1614096511;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;12.2;f995bc883282f7c7ea9d7f32da3f658127aa36c7;network/4g;ADID/9F40F4CA-EA7C-4F2E-8E09-97A66901D83E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,4;addressid/525064695;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/11.11;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/f995bc883282f7c7ea9d7f32da3f658127aa36c7|22;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 12.2;Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;5366566313931326-6633931643233693;network/wifi;model/Mi9 Pro 5G;addressid/0;aid/5fe6191bf39a42c9;oaid/e3a9473ef6699f75;osVer/29;appBuild/1436;psn/b3rJlGi AwLqa9AqX7Vp0jv4T7XPMa0o|5;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; Mi9 Pro 5G Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/666624049;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/54.11;apprpd/MessageCenter_MessageMerge;ref/MessageCenterController;psq/10;ads/;psn/4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1|101;jdv/0|kong|t_2010804675_|jingfen|810dab1ba2c04b8588c5aa5a0d44c4bd|1614183499;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.2;c71b599e9a0bcbd8d1ad924d85b5715530efad06;network/wifi;ADID/751C6E92-FD10-4323-B37C-187FD0CF0551;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/4053561885;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/263.8;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/c71b599e9a0bcbd8d1ad924d85b5715530efad06|481;jdv/0|kong|t_1001610202_|jingfen|3911bea7ee2f4fcf8d11fdf663192bbe|1614157052210|1614157056;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;2d306ee3cacd2c02560627a5113817ebea20a2c9;network/4g;ADID/A346F099-3182-4889-9A62-2B3C28AB861E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.35;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/0;ads/;psn/2d306ee3cacd2c02560627a5113817ebea20a2c9|2;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;28355aff16cec8bcf3e5728dbbc9725656d8c2c2;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/833058617;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.10;apprpd/;ref/JDLTWebViewController;psq/9;ads/;psn/28355aff16cec8bcf3e5728dbbc9725656d8c2c2|5;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;24ddac73a3de1b91816b7aedef53e97c4c313733;network/4g;ADID/598C6841-76AC-4512-AA97-CBA940548D70;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone11,6;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/12.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/24ddac73a3de1b91816b7aedef53e97c4c313733|23;jdv/0|kong|t_1000170135|tuiguang|notset|1614126110904|1614126110;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/25239372;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/8.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b|14;jdv/0|kong|t_1001226363_|jingfen|5713234d1e1e4893b92b2de2cb32484d|1614182989528|1614182992;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;ca1a32afca36bc9fb37fd03f18e653bce53eaca5;network/wifi;ADID/3AF380AB-CB74-4FE6-9E7C-967693863CA3;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone8,1;addressid/138323416;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/72.12;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/ca1a32afca36bc9fb37fd03f18e653bce53eaca5|109;jdv/0|kong|t_1000536212_|jingfen|c82bfa19e33a4269a5884ffc614790f4|1614141246;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;7346933333666353-8333366646039373;network/wifi;model/ONEPLUS A5010;addressid/138117973;aid/7d933f6583cfd097;oaid/;osVer/29;appBuild/1436;psn/T/eqfRSwp8VKEvvXyEunq09Cg2MUkiQ5|17;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/11.4;jdv/0|kong|t_1001849073_|jingfen|495a47f6c0b8431c9d460f61ad2304dc|1614084403978|1614084407;ref/HomeFragment;partner/oppo;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;11;4626269356736353-5353236346334673;network/wifi;model/M2006J10C;addressid/0;aid/dbb9e7655526d3d7;oaid/66a7af49362987b0;osVer/30;appBuild/1436;psn/rQRQgJ 4 S3qkq8YDl28y6jkUHmI/rlX|3;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/3.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 11; M2006J10C Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045513 Mobile Safari/537.36", "iPhone;3.7.0;14.4;78fc1d919de0c8c2de15725eff508d8ab14f9c82;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,1;addressid/137829713;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/23.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/78fc1d919de0c8c2de15725eff508d8ab14f9c82|34;jdv/0|iosapp|t_335139774|appshare|Wxfriends|1612508702380|1612534293;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;0373263343266633-5663030363465326;network/wifi;model/Redmi Note 7;addressid/590846082;aid/07b34bf3e6006d5b;oaid/17975a142e67ec92;osVer/29;appBuild/1436;psn/OHNqtdhQKv1okyh7rB3HxjwI00ixJMNG|4;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.3;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "android;3.7.0;10;3636566623663623-1693635613166646;network/wifi;model/ASUS_I001DA;addressid/1397761133;aid/ccef2fc2a96e1afd;oaid/;osVer/29;appBuild/1436;psn/T8087T0D82PHzJ4VUMGFrfB9dw4gUnKG|76;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/73.5;jdv/0|kong|t_1002354188_|jingfen|2335e043b3344107a2750a781fde9a2e#/|1614097081426|1614097087;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/yingyongbao;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ASUS_I001DA Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/138419019;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.7;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/6;ads/;psn/4ee6af0db48fd605adb69b63f00fcbb51c2fc3f0|9;jdv/0|direct|-|none|-|1613705981655|1613823229;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/F9FD7728-2956-4DD1-8EDD-58B07950864C;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;ADID/5D306F0D-A131-4B26-947E-166CCB9BFFFF;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad8,9;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.20;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/d9f5ddaa0160a20f32fb2c8bfd174fae7993c1b4|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.5;Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/31548A9C-8A01-469A-B148-E7D841C91FD0;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.5;apprpd/;ref/JDLTSubMainPageViewController;psq/4;ads/;psn/a858fb4b40e432ea32f80729916e6c3e910bb922|12;jdv/0|direct|-|none|-|1613898710373|1613898712;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;3346332626262353-1666434336539336;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;8363834353530333132333132373-43D2930366035323639333662383;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;1343467336264693-3343562673463613;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;8353636393732346-6646931673935346;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;6d343c58764a908d4fa56609da4cb3a5cc1396d3;network/wifi;ADID/4965D884-3E61-4C4E-AEA7-9A8CE3742DA7;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.6.1;4606ddccdfe8f343f8137de7fea7f91fc4aef3a3;network/4g;ADID/C6FB6E20-D334-45FA-818A-7A4C58305202;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone10,1;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/4606ddccdfe8f343f8137de7fea7f91fc4aef3a3|5;jdv/0|iosapp|t_335139774|liteshare|Qqfriends|1614206359106|1614206366;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.6.1;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;3b6e79334551fc6f31952d338b996789d157c4e8;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/138051400;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/14.34;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/12;ads/;psn/3b6e79334551fc6f31952d338b996789d157c4e8|46;jdv/0|kong|t_1001707023_|jingfen|e80d7173a4264f4c9a3addcac7da8b5d|1613837384708|1613858760;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;1346235693831363-2373837393932673;network/wifi;model/LYA-AL00;addressid/3321567203;aid/1d2e9816278799b7;oaid/00000000-0000-0000-0000-000000000000;osVer/29;appBuild/1436;psn/45VUZFTZJkhP5fAXbeBoQ0   O2GCB I|7;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.8;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1614066210320|1614066219;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/huawei;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; LYA-AL00 Build/HUAWEILYA-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36", "iPhone;3.7.0;14.3;c2a8854e622a1b17a6c56c789f832f9d78ef1ba7;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/c2a8854e622a1b17a6c56c789f832f9d78ef1ba7|6;jdv/0|direct|-|none|-|1613541016735|1613823566;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;;network/wifi;model/MIX 2S;addressid/;aid/f87efed6d9ed3c65;oaid/94739128ef9dd245;osVer/28;appBuild/1436;psn/R7wD/OWkQjYWxax1pDV6kTIDFPJCUid7C/nl2hHnUuI=|3;psq/13;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/1.42;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2S Build/PKQ1.180729.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/3g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/2813715704;pv/67.38;apprpd/MyJD_Main;ref/https%3A%2F%2Fh5.m.jd.com%2FbabelDiy%2FZeus%2F2ynE8QDtc2svd36VowmYWBzzDdK6%2Findex.html%3Flng%3D103.957532%26lat%3D30.626962%26sid%3D4fe8ef4283b24723a7bb30ee87c18b2w%26un_area%3D22_1930_49324_52512;psq/4;ads/;psn/5aef178f95931bdbbde849ea9e2fc62b18bc5829|127;jdv/0|direct|-|none|-|1612588090667|1613822580;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/3104834020;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/c633e62b5a4ad0fdd93d9862bdcacfa8f3ecef63|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,4;addressid/1477231693;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/21.15;apprpd/MyJD_Main;ref/https%3A%2F%2Fgold.jd.com%2F%3Flng%3D0.000000%26lat%3D0.000000%26sid%3D4584eb84dc00141b0d58e000583a338w%26un_area%3D19_1607_3155_62114;psq/0;ads/;psn/2c822e59db319590266cc83b78c4a943783d0077|46;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/3.49;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/7;ads/;psn/9e0e0ea9c6801dfd53f2e50ffaa7f84c7b40cd15|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad7,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.14;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/3;ads/;psn/956c074c769cd2eeab2e36fca24ad4c9e469751a|8;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"];
const _0xcb6c21 = require("child_process").exec;
const {
  getEnvsByName,
  addEnv,
  updateEnv,
  updateEnv11
} = require("./ql");
function _0x232b4d(_0x5c6eea = 0, _0x287308 = 100) {
  return Math.min(Math.floor(_0x5c6eea + Math.random() * (_0x287308 - _0x5c6eea)), _0x287308);
}
const _0x24d1ea = _0x2177e6[_0x232b4d(0, _0x2177e6.length - 1)];
function _0x48b915(_0x388c42 = "elmck") {
  console.log("版本：内部版1.0.1\n");
  if (process.env.SIGN_HOST) {
    console.log("正在使用本地 sign\n");
  }
  let _0x3b2615 = [];
  let _0x32bb10 = process.env[_0x388c42];
  if (_0x32bb10) {
    if (_0x32bb10.indexOf("&") > -1) {
      _0x3b2615 = _0x32bb10.split("&");
    } else {
      if (_0x32bb10.indexOf("\n") > -1) {
        _0x3b2615 = _0x32bb10.split("\n");
      } else {
        _0x3b2615 = [_0x32bb10];
      }
    }
  }
  return _0x3b2615;
}
function _0x406efc(_0x2f2156) {
  return new Promise(_0xc825ff => {
    _0xcb6c21(_0x2f2156, function (_0x2f07c2, _0xdd06ee, _0x391c0c) {
      if (_0x2f07c2) {
        console.error(_0x2f07c2);
        _0xc825ff("");
      } else {
        _0xc825ff(_0xdd06ee);
      }
    });
  });
}
function _0x26dee0(_0x3d422d) {
  if (!_0x3d422d) {
    return "-1";
  }
  for (var _0x1f5037 = _0x3d422d.split(";"), _0x48166b = 0; _0x48166b < _0x1f5037.length; _0x48166b++) {
    var _0x489816 = _0x1f5037[_0x48166b].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0x489816[0])) {
      return _0x489816[1];
    }
  }
  return "-1";
}
const _0xae6ea4 = _0x26fedb => {
  return new Promise(_0x12d107 => {
    setTimeout(() => {
      _0x12d107();
    }, _0x26fedb * 1000);
  });
};
async function _0xf3750a(_0xb94afa) {
  return new Promise(_0xdf26ae => {
    try {
      _0xb94afa(_0xdf26ae);
    } catch (_0x517d6c) {
      console.log(_0x552525);
      _0xdf26ae();
    }
  });
}
const _0x5066e0 = async (_0xb0004, _0x5c76c9, _0x5a0698, _0x34cbf4 = "", _0x212d58, _0x47deb9 = {}, _0x33e907 = 5) => {
  if (_0x33e907 === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  const _0x15e028 = await _0x406efc("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12");
  let _0x20e121 = process.env.ELE_CARME;
  let _0x5e4b8 = 1;
  if (_0xb0004 === 4) {
    _0x20e121 = process.env.ELE_TTCJ_CARME;
    _0x5e4b8 = 4;
  }
  const _0x31d10a = {
    carmi: _0x20e121,
    containerId: _0x15e028,
    type: _0x5e4b8,
    gameType: _0xb0004,
    stepId: _0x5c76c9,
    tokenFirst: _0x34cbf4,
    appKey: _0x5a0698,
    timestamp: _0x212d58,
    anotherParam: JSON.stringify(_0x47deb9)
  };
  const _0x29da01 = _0x54c651 + "/v2/new/sign";
  const _0x1991f8 = {
    "content-type": "application/json"
  };
  const _0x525cfe = {
    url: _0x29da01,
    method: "POST",
    headers: _0x1991f8,
    body: JSON.stringify(_0x31d10a)
  };
  return _0xf3750a(_0x23100a => {
    _0x3f15de(_0x525cfe, async (_0x3e6f33, _0x2b7cd7, _0x31c035) => {
      if (!_0x3e6f33 && _0x2b7cd7.statusCode === 200) {
        const _0x44e1a4 = JSON.parse(_0x31c035);
        if (_0x44e1a4.code !== 20000) {
          console.error(_0x44e1a4.message);
          process.exit(0);
        } else {
          _0x23100a(_0x44e1a4.data);
        }
      } else {
        if (_0x3e6f33 && (_0x3e6f33.message.indexOf("socket hang up") !== -1 || _0x3e6f33.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0xae6ea4(2);
          _0x23100a(await _0x5066e0(_0xb0004, _0x5c76c9, _0x5a0698, _0x34cbf4, _0x33e907 - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          _0x23100a("");
        }
      }
    });
  });
};
const _0x414685 = async (_0x588e28, _0xf10126, _0x373e55 = 5) => {
  _0x588e28 = _0x588e28.replace(/\s/g, "");
  let _0x195a47 = _0x26dee0(_0x588e28);
  _0x195a47 = _0x195a47.split("_")[0];
  let _0x2dea83 = 12574478;
  let _0x602f2 = new Date().getTime();
  const _0x364d86 = await _0x5066e0(99, 1, _0x2dea83, _0x195a47, _0x602f2);
  let _0x1e3368 = _0x364d86.sign;
  const _0x13dc63 = {
    Cookie: _0x588e28,
    "User-Agent": _0x24d1ea
  };
  const _0x1568c3 = {
    url: "https://shopping.ele.me/h5/mtop.alsc.user.session.ele.check/1.0/?H5Request=true&api=mtop.alsc.user.session.ele.check&appKey=12574478&data={}&dataType=json&jsv=2.6.2&mainDomain=ele.me&pageDomain=ele.me&sign=" + _0x1e3368 + "&subDomain=shopping&t=" + _0x602f2 + "&timeout=5000&type=json&v=1.0",
    method: "GET",
    headers: _0x13dc63
  };
  return _0xf3750a(_0x215e3a => {
    try {
      _0x3f15de(_0x1568c3, async (_0x2407c6, _0x5cb689, _0x129a02) => {
        if (!_0x2407c6 && _0x5cb689.statusCode === 200) {
          const _0x194a07 = JSON.parse(_0x129a02);
          if (_0x194a07.data.errorCode === "000502") {
            console.log("第", _0xf10126 + 1, "账号失效！请重新登录！！！😭");
            _0x215e3a(null);
          } else {
            if (_0x373e55 <= 0) {
              if (_0xf10126 >= 0) {
                console.log("第", _0xf10126 + 1, "cookie存在异常，请检查");
              } else {
                console.log("cookie存在异常，请检查");
              }
              _0x215e3a(null);
            }
            if (_0x194a07.ret.includes("FAIL_SYS_TOKEN_EXOIRED::令牌过期") || _0x194a07.ret.includes("FAIL_SYS_TOKEN_EMPTY::令牌为空")) {
              _0x215e3a(await _0x3535c0(_0x588e28, _0xf10126, _0x373e55 - 1));
            } else {
              _0x215e3a(_0x588e28);
            }
          }
        } else {
          if (_0x2407c6 && _0x2407c6.message.indexOf("Invalid character in header content [\"Cookie\"]") !== -1) {
            console.log("第", _0xf10126 + 1, "账号ck不合法，请确认！！！");
          } else {
            console.log(_0x2407c6);
          }
          _0x215e3a(null);
        }
      });
    } catch (_0x319d69) {
      console.log(_0x552525);
    }
  });
};
function _0x3535c0(_0x4ec224, _0x32bb92, _0x19d5eb = 5) {
  const _0x50b048 = {
    url: "https://waimai-guide.ele.me/h5/mtop.alsc.personal.queryminecenter/1.0/?jsv=2.6.2&appKey=12574478",
    headers: {}
  };
  _0x50b048.headers.Cookie = _0x4ec224;
  _0x50b048.headers.method = "GET";
  _0x50b048.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36";
  return _0xf3750a(_0x30d465 => {
    try {
      _0x3f15de(_0x50b048, async (_0x1a1de8, _0x3ef15d, _0x54fb59) => {
        if (!_0x1a1de8 && _0x3ef15d.statusCode === 200) {
          const _0x4c2479 = JSON.stringify(_0x3ef15d.headers["set-cookie"]);
          const _0x2f3aaf = /_m_h5_tk=(\S*);/;
          const _0x5532b7 = _0x4c2479.match(_0x2f3aaf)[1];
          const _0x19724b = " _m_h5_tk=" + _0x5532b7.split(";")[0];
          const _0x2e049d = /_m_h5_tk_enc=(\S*);/;
          const _0x450178 = _0x4c2479.match(_0x2e049d)[1];
          const _0x28e0a3 = " _m_h5_tk_enc=" + _0x450178.split(";")[0];
          _0x4ec224 = _0x598e88(_0x19724b, _0x28e0a3, _0x4ec224);
          if (_0x19d5eb <= 0) {
            if (_0x32bb92 >= 0) {
              console.log("第", _0x32bb92 + 1, "cookie存在异常，请检查");
            } else {
              console.log("cookie存在异常，请检查");
            }
            _0x30d465(null);
          } else {
            _0x30d465(await _0x414685(_0x4ec224, _0x32bb92, _0x19d5eb - 1));
          }
        } else {
          _0x30d465(null);
        }
      });
    } catch (_0x232c30) {
      console.log(_0x552525);
    }
  });
}
function _0x598e88(_0x5f56ea, _0x1f5ef4, _0x830353) {
  let _0x249d91 = false;
  for (var _0x1780a3 = _0x830353.split(";"), _0x525186 = 0; _0x525186 < _0x1780a3.length; _0x525186++) {
    var _0x50eb5b = _0x1780a3[_0x525186].split("=");
    if (["_m_h5_tk", " _m_h5_tk"].indexOf(_0x50eb5b[0]) > -1) {
      _0x249d91 = true;
      _0x1780a3[_0x525186] = _0x5f56ea;
    }
    if ([" _m_h5_tk_enc", "_m_h5_tk_enc"].indexOf(_0x50eb5b[0]) > -1) {
      _0x1780a3[_0x525186] = _0x1f5ef4;
      _0x249d91 = true;
    }
  }
  var _0x547b63 = "";
  if (_0x249d91) {
    for (_0x525186 = 0; _0x525186 < _0x1780a3.length; _0x525186++) {
      _0x547b63 += _0x1780a3[_0x525186];
      _0x525186 != _0x1780a3.length - 1 && (_0x547b63 += ";");
    }
  } else {
    _0x547b63 = _0x830353 + ";" + _0x5f56ea + ";" + _0x1f5ef4;
  }
  _0x830353 = _0x547b63;
  return _0x830353;
}
const _0x4993b3 = _0xd080fa => {
  const _0x2c76ab = {
    Cookie: _0xd080fa,
    "user-agent": _0x24d1ea
  };
  const _0x3cc9f6 = {
    url: "https://restapi.ele.me/eus/v5/user_detail",
    headers: _0x2c76ab
  };
  return _0xf3750a(_0x1e7017 => {
    _0x3f15de(_0x3cc9f6, async (_0x1d58b7, _0x1762e5, _0x545962) => {
      if (!_0x1d58b7 && _0x1762e5.statusCode === 200) {
        _0x1e7017(JSON.parse(_0x545962));
      } else {
        _0x1e7017({});
      }
    });
  });
};
const _0x4d5828 = async (_0x1bef9d, _0x2daa50, _0x4963df = 5) => {
  if (_0x4963df === 0) {
    console.log("网络异常，请检查网络状况");
    process.exit(0);
  }
  if (!_0x1bef9d) {
    console.log("❌卡密不能为空");
    process.exit(0);
  }
  const _0x5cafb9 = await _0x406efc("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12");
  const _0x3b2905 = _0x1805af + "/check/kami?carmi=" + _0x1bef9d + "&type=" + _0x2daa50 + "&containerId=" + _0x5cafb9 + "&isNew=true";
  const _0x2bc271 = {
    url: _0x3b2905,
    method: "GET"
  };
  return _0xf3750a(_0xed393b => {
    _0x3f15de(_0x2bc271, async (_0x330a77, _0x128c67, _0x168eb8) => {
      if (!_0x330a77 && _0x128c67.statusCode === 200) {
        const _0x225037 = JSON.parse(_0x168eb8);
        if (_0x225037.code !== 20000) {
          console.error(_0x225037.message);
          process.exit(0);
        } else {
          console.log("\n" + _0x225037.data.msg);
          _0xed393b(_0x225037);
        }
      } else {
        if (_0x330a77 && (_0x330a77.message.indexOf("socket hang up") !== -1 || _0x330a77.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0xae6ea4(2);
          _0xed393b(await _0x4d5828(_0x1bef9d, _0x2daa50, _0x4963df - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          process.exit(0);
        }
      }
    });
  });
};
const _0x189396 = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAntZvpNYeRv7UpTSvhzWtdVvUxPeSwfyFvV1hyhjByfc+RKLcBFHdkyI0nB4pMWcLln6zmXfhEJK+eSBovY7BR6LAP/fV+zhxTChnlMGjDwhr+E3/LEnlH24lVcIIFQaU/grflUGJHVJrCHtkJ3NPTLrit5gilviRNUSHMI+Y+PcX9HfzGCCEp1lnIPkzVrWVojtcXLjEYfdGZRijK/udICjSHNXp9No/vzrFxaH2jfk6PVLAcNXZAEGbNUdIzbfYorGdU6lf3tFJ8E2Fs1k6Q4BTFXYzkq+EejOYjHF64M5OTTKtfNcrHcZo13EDdjG5JRaKx7bGc5e5lUOSsBCWdwIDAQAB\n-----END PUBLIC KEY-----";
function _0x4667e7(_0x3ac54a) {
  const _0x43d837 = Buffer.from(_0x3ac54a, "utf8");
  const _0x402519 = _0xec3aa5.publicEncrypt(_0x189396, _0x43d837);
  return _0x402519.toString("base64");
}
async function _0x34073b(_0x316aea, _0x139070, _0x13b6dc, _0x37c821, _0x1b7e49, _0x58813a, _0x2caa97, _0x2ddcd8, _0x3f8f4f, _0x4d516f = 5) {
  if (_0x4d516f === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  const _0x4ac164 = {
    carmi: process.env.ELE_CARME || process.env.ELE_TTCJ_CARME,
    gameType: _0x2caa97,
    stepId: _0x2ddcd8,
    containerId: await _0x406efc("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12"),
    anotherParam: JSON.stringify(_0x3f8f4f),
    carmiEncrpt: _0x4667e7(process.env.ELE_CARME || process.env.ELE_TTCJ_CARME),
    needSignData: {}
  };
  _0x4ac164.needSignData.api = _0x316aea;
  _0x4ac164.needSignData.pageId = decodeURIComponent(_0x139070);
  _0x4ac164.needSignData.uid = _0x37c821;
  _0x4ac164.needSignData.deviceId = _0x1b7e49;
  _0x4ac164.needSignData.utdid = _0x58813a;
  if (_0x13b6dc) {
    _0x4ac164.needSignData.sid = _0x13b6dc;
  }
  const _0x718b1d = {
    "Content-Type": "application/json"
  };
  const _0x22a565 = {
    headers: _0x718b1d,
    method: "POST",
    url: _0x54c651 + "/api/v1/get/xsign",
    body: JSON.stringify(_0x4ac164)
  };
  return _0xf3750a(_0x7c2643 => {
    _0x3f15de(_0x22a565, async (_0x114d39, _0x4639c3, _0x30431e) => {
      if (!_0x114d39 && _0x4639c3.statusCode === 200) {
        let _0x22b59d = JSON.parse(_0x30431e);
        _0x7c2643(_0x22b59d);
      } else {
        if (_0x114d39 && (_0x114d39.message.indexOf("socket hang up") !== -1 || _0x114d39.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0xae6ea4(2);
          _0x7c2643(await _0x34073b(_0x316aea, _0x139070, _0x13b6dc, _0x37c821, _0x1b7e49, _0x58813a, _0x2caa97, _0x2ddcd8, _0x3f8f4f, _0x4d516f - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          _0x7c2643();
        }
      }
    });
  });
}
function _0x50d247(_0x1aa8a5) {
  const _0x4c5c79 = _0x1aa8a5.split(";").map(_0x126f13 => _0x126f13.trim().split("="));
  const _0x2fe5eb = new Map();
  for (let _0xa69f2c = 0; _0xa69f2c < _0x4c5c79.length; _0xa69f2c++) {
    const [_0x8b4a6e, _0x1c31cb] = _0x4c5c79[_0xa69f2c];
    if (_0x8b4a6e) {
      _0x2fe5eb.set(_0x8b4a6e, decodeURIComponent(_0x1c31cb));
    }
  }
  return _0x2fe5eb;
}
function _0x2fc72c(_0x2d240c) {
  const _0x2bbc0c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  let _0x11ccff = "";
  for (let _0x20daed = _0x2d240c; _0x20daed > 0; --_0x20daed) {
    _0x11ccff += _0x2bbc0c[Math.floor(Math.random() * _0x2bbc0c.length)];
  }
  return _0x11ccff;
}
function _0xb8fcd3(_0x380064) {
  const _0x27fa8d = _0xec3aa5.createDecipheriv("aes-256-cbc", process.env.ELE_CARME || process.env.ELE_TTCJ_CARME, Buffer.from("4lp7ySjYEgwa/LBGW55wMQ==", "base64"));
  let _0x19f4a1 = _0x27fa8d.update(_0x380064, "base64", "utf8");
  _0x19f4a1 += _0x27fa8d.final("utf8");
  return _0x19f4a1;
}
async function _0x2824cc(_0x1e7cac, _0x277df5, _0x5ca708, _0x5b60ca, _0x155e75 = "", _0x11559f, _0xb1d266 = "", _0x5d0411 = 3) {
  if (_0x5d0411 < 0) {
    return null;
  }
  let _0x5dd76c = _0x50d247(_0x1e7cac);
  let _0x1031ef = _0x5dd76c.get("deviceId") || _0x2fc72c(44);
  let _0x130e07 = _0x5dd76c.get("utdid") || _0x2fc72c(24);
  let _0x39b83c = _0x5dd76c.get("unb");
  if (!_0x39b83c) {
    console.log("请检查 ck 是否有cookie2 unb USERID SID");
    return null;
  }
  let _0x2f7553 = _0x5dd76c.get("umt");
  let _0x597181 = _0x277df5;
  let _0x16ed1d = "https%3A%2F%2Fr.ele.me%2Fmagic-cube%2F%3FnavType%3D3%26spm%3Da13.b_activity_kb_m71293.0.0%23%2Fgame";
  let _0x235136 = _0x5dd76c.get("cookie2");
  let _0x59d111 = await _0x34073b(_0x597181, _0x16ed1d, _0x235136, _0x39b83c, _0x1031ef, _0x130e07, _0x5ca708, _0x5b60ca, _0x155e75);
  if (!_0x59d111) {
    console.log("获取签名异常");
    return null;
  }
  if (_0x59d111.code !== 20000) {
    console.log(_0x59d111.message);
    if (_0x59d111.message.indexOf("没有车位了") !== -1) {
      process.exit(0);
    }
    return null;
  } else {
    _0x59d111 = _0x59d111.data;
  }
  if (!_0x1e7cac.endsWith(";")) {
    _0x1e7cac = _0x1e7cac + ";";
  }
  let _0x1546fe = JSON.parse(_0xb8fcd3(_0x59d111.sign));
  let _0x32b1bd = encodeURIComponent(_0x1546fe["x-sgext"]);
  let _0x321bff = encodeURIComponent(_0x1546fe["x-sign"]);
  _0x2f7553 = encodeURIComponent(_0x1546fe["x-umt"]);
  let _0x55c60c = encodeURIComponent(_0x1546fe["x-mini-wua"]);
  let _0x41dcf4 = _0x1546fe["x-t"];
  let _0x54ee13 = encodeURIComponent(_0x1546fe.wua);
  const _0x521a5e = {
    "x-sgext": _0x32b1bd,
    "x-sign": _0x321bff,
    "x-devid": _0x1031ef,
    "x-pv": "6.3",
    "x-features": "1051",
    "x-mini-wua": _0x55c60c,
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-t": _0x41dcf4,
    "x-bx-version": "6.5.90",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_10.14.3",
    "x-app-ver": "10.14.3",
    "x-umt": _0x2f7553,
    "x-utdid": encodeURIComponent(_0x130e07),
    "x-appkey": "24895413",
    "x-page-url": _0x16ed1d,
    Host: _0x11559f || "guide-acs.m.taobao.com",
    "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B13%3BGoogle%3BPixel+4+XL%29",
    "x-sid": _0x235136,
    "x-uid": _0x39b83c,
    Cookie: _0x1e7cac + _0xb1d266
  };
  let _0x2a532b = _0xb8fcd3(_0x59d111.content);
  let _0x6bfb29 = "https://guide-acs.m.taobao.com/gw/" + _0x597181 + "/1.0/?data=" + encodeURIComponent(_0x2a532b) + "&type=originaljson&wua=" + _0x54ee13;
  if (_0x11559f) {
    _0x6bfb29 = "https://" + _0x11559f + "/gw/" + _0x597181 + "/1.0/?data=" + encodeURIComponent(_0x2a532b) + "&type=originaljson&wua=" + _0x54ee13;
  }
  const _0x193a71 = {
    url: _0x6bfb29,
    headers: _0x521a5e,
    body: _0x2a532b
  };
  return _0xf3750a(_0x288f3e => {
    _0x3f15de(_0x193a71, async (_0x3f238f, _0x531645, _0x7a6706) => {
      if (!_0x3f238f && _0x531645.statusCode === 200) {
        const _0x23752f = JSON.parse(_0x7a6706);
        _0x288f3e(_0x23752f);
      } else {
        if (_0x531645.statusCode === 419) {
          console.log("正在破解滑块，请稍后...");
          let _0x36f834 = _0x531645.headers;
          let _0x5aafe4 = _0x36f834.location;
          let _0xf610e1 = _0x36f834["set-cookie"][0];
          const _0x548837 = _0xf610e1.split("=")[1].split(";")[0];
          let _0x5cde33 = await _0x4da9ab(_0x548837, _0x5aafe4, _0x5ca708, _0x39b83c);
          process.env.x5sec = _0x5cde33;
          _0x288f3e(await _0x2824cc(_0x1e7cac, _0x597181, _0x5ca708, _0x5b60ca, _0x155e75, _0x11559f, _0x5cde33, _0x5d0411 - 1));
        } else {
          console.log(_0x3f238f || _0x7a6706);
          _0x288f3e();
        }
      }
    });
  });
}
async function _0x4da9ab(_0x3198dd, _0x45c285, _0x15917a, _0x255f5c) {
  const _0x1c9021 = {
    carmi: process.env.ELE_CARME || process.env.ELE_TTCJ_CARME,
    gameType: _0x15917a,
    containerId: await _0x406efc("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12"),
    x5secData: _0x4667e7(_0x3198dd),
    userId: _0x255f5c,
    slideUrl: encodeURIComponent(_0x45c285)
  };
  const _0x438523 = {
    url: _0x1805af + "/v1/get/x5sec",
    method: "POST",
    headers: {},
    body: JSON.stringify(_0x1c9021)
  };
  _0x438523.headers["Content-Type"] = "application/json";
  return _0xf3750a((_0x59a9d9, _0x8260ae) => {
    _0x3f15de(_0x438523, async (_0x107e81, _0x25a15d, _0x12d839) => {
      if (!_0x107e81 && _0x25a15d.statusCode === 200) {
        const _0x5e13b3 = JSON.parse(_0x12d839);
        if (_0x5e13b3.flag) {
          let _0x4eb533 = JSON.parse(_0xb8fcd3(_0x5e13b3.data.sign));
          let _0xd80b45 = _0x4eb533.x5sec + ";";
          let _0x15f5e1 = await getEnvsByName("x5sec");
          if (_0x15f5e1.length > 0) {
            let _0x232cf0 = _0x15f5e1[0];
            if (_0x232cf0.id) {
              await updateEnv11(_0xd80b45, _0x232cf0.id, _0x232cf0.remarks, "x5sec");
            } else {
              await updateEnv(_0xd80b45, _0x232cf0._id, _0x232cf0.remarks, "x5sec");
            }
          } else {
            await addEnv(_0xd80b45, "x5sec", "x5sec");
            console.log("添加⬇x5sec", _0xd80b45);
          }
          _0x59a9d9(_0xd80b45);
        } else {
          console.log(_0x5e13b3.message);
          _0x59a9d9(null);
        }
      } else {
        console.log(_0x107e81);
        _0x59a9d9(null);
      }
    });
  });
}
function _0x164661() {
  var _0x5cbda7 = function (_0x3499ef) {
    this.s = _0x3499ef;
    this.length = _0x3499ef.length;
    for (var _0x71ea39 = 0; _0x71ea39 < _0x3499ef.length; _0x71ea39++) {
      this[_0x71ea39] = _0x3499ef.charAt(_0x71ea39);
    }
  };
  var _0x58b4f5 = function _0x3cedd4(_0x4eb48f) {
    return function (_0x4fdb77) {
      return function (_0x31506f) {
        var _0x39363f = "",
          _0x4c1484 = _0x31506f.split("");
        for (var _0x41ba22 = 0; _0x41ba22 < _0x4c1484.length; _0x41ba22++) {
          _0x39363f += _0x4fdb77.charAt(_0x4eb48f.indexOf(_0x4c1484[_0x41ba22]));
        }
        return _0x39363f;
      };
    };
  }("J8f?5Rk3zWe9D1vpaZs/KGThiubmyCM:.cwn=4ENHrt")("htp:/ai.94wnfuv1rckm?=KDREJWeCb8ZyHz3M5sNGT");
  const _0x2d7c9b = {
    toString: function () {
      const _0x3da329 = {};
      _0x3da329.lamYf = function (_0x4eff64, _0x245e42) {
        return _0x4eff64 < _0x245e42;
      };
      _0x3da329.sUmEr = function (_0x429544, _0x5d191b) {
        return _0x429544 != _0x5d191b;
      };
      _0x3da329.pLliD = function (_0x563f4c, _0x385d35) {
        return _0x563f4c - _0x385d35;
      };
      return _0x58b4f5(this.s);
    },
    valueOf: function () {
      const _0x5e8fcd = {};
      _0x5e8fcd.MgPKC = function (_0x637b27, _0x334cfe) {
        return _0x637b27(_0x334cfe);
      };
      _0x5e8fcd.uGocU = function (_0x1d0214) {
        return _0x1d0214();
      };
      return _0x58b4f5(this.s);
    },
    charAt: String.prototype.charAt,
    concat: String.prototype.concat,
    slice: String.prototype.slice,
    substr: String.prototype.substr,
    indexOf: String.prototype.indexOf,
    trim: String.prototype.trim,
    split: String.prototype.split
  };
  _0x5cbda7.prototype = _0x2d7c9b;
  var _0x4a5c5d = function (_0x448e1a) {
    return new _0x5cbda7(_0x448e1a).toString();
  };
  const _0x4ba16b = {
    url: _0x4a5c5d("J88f?55Rfk3zWeR93D195vp58aRZs5sR/kKZRa/kGThJikfkufbmyCM:RM.Cck:wpnW=4nENH"),
    method: _0x4a5c5d("rut")
  };
  return new Promise((_0x12b987, _0x5db751) => {
    _0x3f15de(_0x4ba16b, (_0x1f1c27, _0x662e30, _0x5cec24) => {
      if (_0x1f1c27) {
        _0x5db751(_0x1f1c27);
      } else {
        _0x12b987(_0x5cec24);
      }
    });
  });
}
async function _0x14c373() {
  var _0x20e4aa = function (_0x3d9bb6) {
    this.s = _0x3d9bb6;
    this.length = _0x3d9bb6.length;
    for (var _0x43dab1 = 0; _0x43dab1 < _0x3d9bb6.length; _0x43dab1++) {
      this[_0x43dab1] = _0x3d9bb6.charAt(_0x43dab1);
    }
  };
  var _0x2dd2c6 = function _0x4517b1(_0x209e6d) {
    return function (_0xb0cf32) {
      return function (_0x5b6c76) {
        var _0x542047 = "",
          _0x28d802 = _0x5b6c76.split("");
        for (var _0x59638e = 0; _0x59638e < _0x28d802.length; _0x59638e++) {
          _0x542047 += _0xb0cf32.charAt(_0x209e6d.indexOf(_0x28d802[_0x59638e]));
        }
        return _0x542047;
      };
    };
  }("fpnwu1.5t4hloa:c2/309")("htp:/12.59034locawnfu");
  const _0x3e14b4 = {
    toString: function () {
      return _0x2dd2c6(this.s);
    },
    valueOf: function () {
      return _0x2dd2c6(this.s);
    },
    charAt: String.prototype.charAt,
    concat: String.prototype.concat,
    slice: String.prototype.slice,
    substr: String.prototype.substr,
    indexOf: String.prototype.indexOf,
    trim: String.prototype.trim,
    split: String.prototype.split
  };
  _0x20e4aa.prototype = _0x3e14b4;
  var _0x203bc5 = function (_0x444daf) {
    return new _0x20e4aa(_0x444daf);
  };
  if (process.env.HOST) {
    if (_0x3a0254(process.env.HOST) === "f20d1aabf96ebe09f19a53a4fc488bbe") {
      return false;
    }
    const _0x4a3438 = new URL(process.env.HOST);
    const _0x22e599 = _0x4a3438.hostname;
    try {
      const _0x2b5446 = await new Promise((_0x293808, _0x1d3233) => {
        _0x40fda8.lookup(_0x203bc5("a:c2a54o/235093").toString(), (_0x352aa7, _0x32d503, _0x3ba7b2) => {
          if (_0x352aa7) {
            _0x1d3233(_0x352aa7);
          } else {
            _0x293808(_0x32d503);
          }
        });
      });
      return _0x2b5446 !== _0x22e599;
    } catch (_0x362be8) {
      console.log(_0x362be8);
      return false;
    }
  }
}
(async () => {
  if (await _0x14c373()) {
    await _0x164661();
  }
})();
async function _0x313f71(_0x3dee97, _0x4dac56) {
  const _0x120308 = _0x50d247(_0x3dee97);
  if (!_0x120308.has("wxUid")) {
    console.log("没有获取到推送 uid，不推送消息\n");
  } else {
    await sendNotify("饿了么抢券成功推送", _0x4dac56, {
      uid: _0x120308.get("wxUid")
    });
  }
}
function _0x277927(_0x589090) {
  return Object.values(_0x589090).length === 0;
}
async function _0x465c69(_0x436121) {
  let _0x279fe7 = await _0x2824cc(_0x436121, "mtop.alsc.user.detail.query", 99, 1);
  if (_0x279fe7 !== null) {
    if (!_0x277927(_0x279fe7.data)) {
      return _0x279fe7.data;
    } else {
      if (_0x279fe7.ret) {
        return _0x279fe7.ret;
      } else {
        console.log(_0x279fe7);
      }
    }
  }
  return null;
}
const _0x369d9d = {
  getToken: _0x26dee0,
  wait: _0xae6ea4,
  checkCk: _0x414685,
  tryCatchPromise: _0xf3750a,
  getUserInfo: _0x4993b3,
  validateCarmeWithType: _0x4d5828,
  sign: _0x5066e0,
  commonNativeRequest: _0x2824cc,
  getCookies: _0x48b915,
  couponNotify: _0x313f71,
  User_Agent: _0x24d1ea,
  getUserInfoWithX: _0x465c69
};
module.exports = _0x369d9d;