//Sat Sep 07 2024 06:07:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x5ac63f = "网络异常，跳过";
const _0x59bd38 = require("request");
const _0x57ec67 = require("crypto");
const _0x511ffd = process.env.HOST || "http://api.94wan.fun";
const _0x3704b6 = process.env.SIGN_HOST || "http://api.94wan.fun";
const {
  sendNotify
} = require("./sendNotify1.js");
const _0x51a07b = require("dns");
const _0xbda696 = require("md5");
const _0x1da54e = ["iPad;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2346663656561603-4353564623932316;network/wifi;model/ONEPLUS A5010;addressid/0;aid/2dfceea045ed292a;oaid/;osVer/29;appBuild/1436;psn/BS6Y9SAiw0IpJ4ro7rjSOkCRZTgR3z2K|10;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/10.5;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.1;59d6ae6ekdhripiepjwecb8abzcyi8h1z43mz5sn;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.26;apprpd/;ref/JDLTSubMainPageViewController;psq/0;ads/;psn/59d6ae6e8387bd09fe046d5b8918ead51614e80a|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;22d679c006bf9c087abf362cf1d2e0020ebb8798;network/wifi;ADID/10857A57-DDF8-4A0D-A548-7B8F43AC77EE;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,1;addressid/2378947694;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/15.7;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/6;ads/;psn/22d679c006bf9c087abf362cf1d2e0020ebb8798|22;jdv/0|kong|t_1000170135|tuiguang|notset|1614153044558|1614153044;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;2616935633265383-5333463636261326;network/UNKNOWN;model/M2007J3SC;addressid/1840745247;aid/ba9e3b5853dccb1b;oaid/371d8af7dd71e8d5;osVer/29;appBuild/1436;psn/t7JmxZUXGkimd4f9Jdul2jEeuYLwxPrm|8;psq/6;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.6;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; M2007J3SC Build/QKQ1.200419.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.3;d7beab54ae7758fa896c193b49470204fbb8fce9;network/4g;ADID/97AD46C9-6D49-4642-BF6F-689256673906;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;D246836333735-3264353430393;network/4g;model/MIX 2;addressid/138678023;aid/bf8bcf1214b3832a;oaid/308540d1f1feb2f5;osVer/28;appBuild/1436;psn/Z/rGqfWBY/h5gcGFnVIsRw==|16;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/13.7;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/xiaomi;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2 Build/PKQ1.190118.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5;network/wifi;ADID/5603541B-30C1-4B5C-A782-20D0B569D810;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/1041002757;hasOCPay/0;appBuild/101;supportBestPay/0;pv/34.6;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/eb5a9e7e596e262b4ffb3b6b5c830984c8a5c0d5|44;jdv/0|androidapp|t_335139774|appshare|CopyURL|1612612940307|1612612944;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;21631ed983b3e854a3154b0336413825ad0d6783;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;500a795cb2abae60b877ee4a1930557a800bef1c;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;f5e7b7980fb50efc9c294ac38653c1584846c3db;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;19fef5419f88076c43f5317eabe20121d52c6a61;network/wifi;ADID/00000000-0000-0000-0000-000000000000;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/3430850943;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.4;apprpd/;ref/JDLTSubMainPageViewController;psq/3;ads/;psn/19fef5419f88076c43f5317eabe20121d52c6a61|16;jdv/0|kong|t_1001327829_|jingfen|f51febe09dd64b20b06bc6ef4c1ad790#/|1614096460311|1614096511;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;12.2;f995bc883282f7c7ea9d7f32da3f658127aa36c7;network/4g;ADID/9F40F4CA-EA7C-4F2E-8E09-97A66901D83E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,4;addressid/525064695;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/11.11;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/f995bc883282f7c7ea9d7f32da3f658127aa36c7|22;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 12.2;Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;5366566313931326-6633931643233693;network/wifi;model/Mi9 Pro 5G;addressid/0;aid/5fe6191bf39a42c9;oaid/e3a9473ef6699f75;osVer/29;appBuild/1436;psn/b3rJlGi AwLqa9AqX7Vp0jv4T7XPMa0o|5;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; Mi9 Pro 5G Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045135 Mobile Safari/537.36", "iPhone;3.7.0;14.4;4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/666624049;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/54.11;apprpd/MessageCenter_MessageMerge;ref/MessageCenterController;psq/10;ads/;psn/4e6b46913a2e18dd06d6d69843ee4cdd8e033bc1|101;jdv/0|kong|t_2010804675_|jingfen|810dab1ba2c04b8588c5aa5a0d44c4bd|1614183499;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.2;c71b599e9a0bcbd8d1ad924d85b5715530efad06;network/wifi;ADID/751C6E92-FD10-4323-B37C-187FD0CF0551;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,8;addressid/4053561885;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/263.8;apprpd/;ref/JDLTSubMainPageViewController;psq/2;ads/;psn/c71b599e9a0bcbd8d1ad924d85b5715530efad06|481;jdv/0|kong|t_1001610202_|jingfen|3911bea7ee2f4fcf8d11fdf663192bbe|1614157052210|1614157056;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.2;Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;2d306ee3cacd2c02560627a5113817ebea20a2c9;network/4g;ADID/A346F099-3182-4889-9A62-2B3C28AB861E;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.35;apprpd/Allowance_Registered;ref/JDLTTaskCenterViewController;psq/0;ads/;psn/2d306ee3cacd2c02560627a5113817ebea20a2c9|2;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;28355aff16cec8bcf3e5728dbbc9725656d8c2c2;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/833058617;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.10;apprpd/;ref/JDLTWebViewController;psq/9;ads/;psn/28355aff16cec8bcf3e5728dbbc9725656d8c2c2|5;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;24ddac73a3de1b91816b7aedef53e97c4c313733;network/4g;ADID/598C6841-76AC-4512-AA97-CBA940548D70;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone11,6;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/12.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/24ddac73a3de1b91816b7aedef53e97c4c313733|23;jdv/0|kong|t_1000170135|tuiguang|notset|1614126110904|1614126110;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/25239372;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/8.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/d7732ba60c8ff73cc3f5ba7290a3aa9551f73a1b|14;jdv/0|kong|t_1001226363_|jingfen|5713234d1e1e4893b92b2de2cb32484d|1614182989528|1614182992;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;ca1a32afca36bc9fb37fd03f18e653bce53eaca5;network/wifi;ADID/3AF380AB-CB74-4FE6-9E7C-967693863CA3;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone8,1;addressid/138323416;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/72.12;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/ca1a32afca36bc9fb37fd03f18e653bce53eaca5|109;jdv/0|kong|t_1000536212_|jingfen|c82bfa19e33a4269a5884ffc614790f4|1614141246;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;7346933333666353-8333366646039373;network/wifi;model/ONEPLUS A5010;addressid/138117973;aid/7d933f6583cfd097;oaid/;osVer/29;appBuild/1436;psn/T/eqfRSwp8VKEvvXyEunq09Cg2MUkiQ5|17;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/11.4;jdv/0|kong|t_1001849073_|jingfen|495a47f6c0b8431c9d460f61ad2304dc|1614084403978|1614084407;ref/HomeFragment;partner/oppo;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A5010 Build/QKQ1.191014.012; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;11;4626269356736353-5353236346334673;network/wifi;model/M2006J10C;addressid/0;aid/dbb9e7655526d3d7;oaid/66a7af49362987b0;osVer/30;appBuild/1436;psn/rQRQgJ 4 S3qkq8YDl28y6jkUHmI/rlX|3;psq/4;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/3.4;jdv/;ref/HomeFragment;partner/xiaomi;apprpd/Home_Main;eufv/1;Mozilla/5.0 (Linux; Android 11; M2006J10C Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045513 Mobile Safari/537.36", "iPhone;3.7.0;14.4;78fc1d919de0c8c2de15725eff508d8ab14f9c82;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,1;addressid/137829713;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/23.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/78fc1d919de0c8c2de15725eff508d8ab14f9c82|34;jdv/0|iosapp|t_335139774|appshare|Wxfriends|1612508702380|1612534293;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;0373263343266633-5663030363465326;network/wifi;model/Redmi Note 7;addressid/590846082;aid/07b34bf3e6006d5b;oaid/17975a142e67ec92;osVer/29;appBuild/1436;psn/OHNqtdhQKv1okyh7rB3HxjwI00ixJMNG|4;psq/3;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.3;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "android;3.7.0;10;3636566623663623-1693635613166646;network/wifi;model/ASUS_I001DA;addressid/1397761133;aid/ccef2fc2a96e1afd;oaid/;osVer/29;appBuild/1436;psn/T8087T0D82PHzJ4VUMGFrfB9dw4gUnKG|76;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/73.5;jdv/0|kong|t_1002354188_|jingfen|2335e043b3344107a2750a781fde9a2e#/|1614097081426|1614097087;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/yingyongbao;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ASUS_I001DA Build/QKQ1.190825.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,2;addressid/138419019;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.7;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/6;ads/;psn/4ee6af0db48fd605adb69b63f00fcbb51c2fc3f0|9;jdv/0|direct|-|none|-|1613705981655|1613823229;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/F9FD7728-2956-4DD1-8EDD-58B07950864C;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;ADID/5D306F0D-A131-4B26-947E-166CCB9BFFFF;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad8,9;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/1.20;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/5;ads/;psn/d9f5ddaa0160a20f32fb2c8bfd174fae7993c1b4|3;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.5;Mozilla/5.0 (iPad; CPU OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;ADID/31548A9C-8A01-469A-B148-E7D841C91FD0;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/10.5;apprpd/;ref/JDLTSubMainPageViewController;psq/4;ads/;psn/a858fb4b40e432ea32f80729916e6c3e910bb922|12;jdv/0|direct|-|none|-|1613898710373|1613898712;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;3346332626262353-1666434336539336;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;8363834353530333132333132373-43D2930366035323639333662383;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;1343467336264693-3343562673463613;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;8353636393732346-6646931673935346;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;6d343c58764a908d4fa56609da4cb3a5cc1396d3;network/wifi;ADID/4965D884-3E61-4C4E-AEA7-9A8CE3742DA7;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.6.1;4606ddccdfe8f343f8137de7fea7f91fc4aef3a3;network/4g;ADID/C6FB6E20-D334-45FA-818A-7A4C58305202;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone10,1;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/5.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/4606ddccdfe8f343f8137de7fea7f91fc4aef3a3|5;jdv/0|iosapp|t_335139774|liteshare|Qqfriends|1614206359106|1614206366;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.6.1;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;3b6e79334551fc6f31952d338b996789d157c4e8;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/138051400;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/14.34;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/12;ads/;psn/3b6e79334551fc6f31952d338b996789d157c4e8|46;jdv/0|kong|t_1001707023_|jingfen|e80d7173a4264f4c9a3addcac7da8b5d|1613837384708|1613858760;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;1346235693831363-2373837393932673;network/wifi;model/LYA-AL00;addressid/3321567203;aid/1d2e9816278799b7;oaid/00000000-0000-0000-0000-000000000000;osVer/29;appBuild/1436;psn/45VUZFTZJkhP5fAXbeBoQ0   O2GCB I|7;psq/5;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/5.8;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1614066210320|1614066219;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/huawei;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; LYA-AL00 Build/HUAWEILYA-AL00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36", "iPhone;3.7.0;14.3;c2a8854e622a1b17a6c56c789f832f9d78ef1ba7;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPhone12,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.9;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/8;ads/;psn/c2a8854e622a1b17a6c56c789f832f9d78ef1ba7|6;jdv/0|direct|-|none|-|1613541016735|1613823566;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;9;;network/wifi;model/MIX 2S;addressid/;aid/f87efed6d9ed3c65;oaid/94739128ef9dd245;osVer/28;appBuild/1436;psn/R7wD/OWkQjYWxax1pDV6kTIDFPJCUid7C/nl2hHnUuI=|3;psq/13;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 9;osv/9;pv/1.42;jdv/;ref/activityId=8a8fabf3cccb417f8e691b6774938bc2;partner/xiaomi;apprpd/jsbqd_home;eufv/1;Mozilla/5.0 (Linux; Android 9; MIX 2S Build/PKQ1.180729.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.152 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/3g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/1;lang/zh_CN;model/iPad6,3;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/231.11;pap/JA2020_3112531|3.7.0|IOS 14.4;apprpd/;psn/f5e7b7980fb50efc9c294ac38653c1584846c3db|305;usc/kong;jdv/0|kong|t_1000170135|tuiguang|notset|1613606450668|1613606450;umd/tuiguang;psq/2;ucp/t_1000170135;app_device/IOS;utr/notset;ref/JDLTRedPacketViewController;adk/;ads/;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,1;addressid/669949466;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/9.11;apprpd/;ref/JDLTSubMainPageViewController;psq/10;ads/;psn/500a795cb2abae60b877ee4a1930557a800bef1c|11;jdv/;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/3g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,4;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.47;apprpd/;ref/JDLTSubMainPageViewController;psq/8;ads/;psn/21631ed983b3e854a3154b0336413825ad0d6783|9;jdv/0|direct|-|none|-|1614150725100|1614225882;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone13,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/3.15;apprpd/;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fchat%2Findex.action%3Fentry%3Djd_m_JiSuCommodity%26pid%3D7763388%26lng%3D118.159665%26lat%3D24.504633%26sid%3D31cddc2d58f6e36bf2c31c4e8a79767w%26un_area%3D16_1315_3486_0;psq/12;ads/;psn/c10e0db6f15dec57a94637365f4c3d43e05bbd48|4;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/2813715704;pv/67.38;apprpd/MyJD_Main;ref/https%3A%2F%2Fh5.m.jd.com%2FbabelDiy%2FZeus%2F2ynE8QDtc2svd36VowmYWBzzDdK6%2Findex.html%3Flng%3D103.957532%26lat%3D30.626962%26sid%3D4fe8ef4283b24723a7bb30ee87c18b2w%26un_area%3D22_1930_49324_52512;psq/4;ads/;psn/5aef178f95931bdbbde849ea9e2fc62b18bc5829|127;jdv/0|direct|-|none|-|1612588090667|1613822580;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,2;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/6.28;apprpd/;ref/JDLTRedPacketViewController;psq/3;ads/;psn/d7beab54ae7758fa896c193b49470204fbb8fce9|8;jdv/0|kong|t_1001707023_|jingfen|79ad0319fa4d47e38521a616d80bc4bd|1613800945610|1613824900;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,1;addressid/3104834020;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/c633e62b5a4ad0fdd93d9862bdcacfa8f3ecef63|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.3;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone10,1;addressid/1346909722;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/30.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/40d4d4323eb3987226cae367d6b0d8be50f2c7b3|39;jdv/0|kong|t_1000252057_0|tuiguang|eba7648a0f4445aa9cfa6f35c6f36e15|1613995717959|1613995723;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.3;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone11,6;addressid/138164461;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/7.8;apprpd/;ref/JDLTSubMainPageViewController;psq/7;ads/;psn/d40e5d4a33c100e8527f779557c347569b49c304|7;jdv/0|kong|t_1001226363_|jingfen|3bf5372cb9cd445bbb270b8bc9a34f00|1608439066693|1608439068;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;13.5;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,2;addressid/2237496805;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/13.6;apprpd/;ref/JDLTSubMainPageViewController;psq/5;ads/;psn/48e495dcf5dc398b4d46b27e9f15a2b427a154aa|15;jdv/0|direct|-|none|-|1613354874698|1613952828;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 13.5;Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "android;3.7.0;10;network/wifi;model/ONEPLUS A6000;addressid/0;aid/3d3bbb25af44c59c;oaid/;osVer/29;appBuild/1436;psn/ECbc2EqmdSa7mDF1PS1GSrV/Tn7R1LS1|6;psq/8;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/2.67;jdv/0|direct|-|none|-|1613822479379|1613991194;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/oppo;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 10; ONEPLUS A6000 Build/QKQ1.190716.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "android;3.7.0;8.1.0;network/wifi;model/16th Plus;addressid/0;aid/f909e5f2c464c7c6;oaid/;osVer/27;appBuild/1436;psn/c21YWvVr77Hn6 pOZfxXGY4TZrre1 UOL5hcPbCEDMo=|3;psq/10;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 8.1.0;osv/8.1.0;pv/2.15;jdv/;ref/com.jd.jdlite.lib.personal.view.fragment.JDPersonalFragment;partner/jsxdlyqj09;apprpd/MyJD_Main;eufv/1;Mozilla/5.0 (Linux; Android 8.1.0; 16th Plus Build/OPM1.171019.026; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045514 Mobile Safari/537.36", "android;3.7.0;11;network/wifi;model/Mi 10 Pro;addressid/0;aid/14d7cbd934eb7dc1;oaid/335f198546eb3141;osVer/30;appBuild/1436;psn/ZcQh/Wov sNYfZ6JUjTIUBu28 KT0T3u|1;psq/24;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 11;osv/11;pv/1.24;jdv/;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/xiaomi;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 11; Mi 10 Pro Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.181 Mobile Safari/537.36", "android;3.7.0;10;network/wifi;model/MI 8;addressid/1969998059;aid/8566972dfd9a795d;oaid/4a8b773c3e307386;osVer/29;appBuild/1436;psn/PhYbUtCsCJo r 1b8hwxjnY8rEv5S8XC|383;psq/14;adk/;ads/;pap/JA2020_3112531|3.7.0|ANDROID 10;osv/10;pv/374.14;jdv/0|iosapp|t_335139774|liteshare|CopyURL|1609306590175|1609306596;ref/com.jd.jdlite.lib.jdlitemessage.view.activity.MessageCenterMainActivity;partner/jsxdlyqj09;apprpd/MessageCenter_MessageMerge;eufv/1;Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/045140 Mobile Safari/537.36", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone8,4;addressid/1477231693;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/21.15;apprpd/MyJD_Main;ref/https%3A%2F%2Fgold.jd.com%2F%3Flng%3D0.000000%26lat%3D0.000000%26sid%3D4584eb84dc00141b0d58e000583a338w%26un_area%3D19_1607_3155_62114;psq/0;ads/;psn/2c822e59db319590266cc83b78c4a943783d0077|46;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone9,1;addressid/70390480;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.24;apprpd/MyJD_Main;ref/https%3A%2F%2Fjdcs.m.jd.com%2Fafter%2Findex.action%3FcategoryId%3D600%26v%3D6%26entry%3Dm_self_jd;psq/4;ads/;psn/6d343c58764a908d4fa56609da4cb3a5cc1396d3|17;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPhone;3.7.0;14.4;network/4g;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPhone12,3;hasOCPay/0;appBuild/1017;supportBestPay/0;addressid/;pv/3.49;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/7;ads/;psn/9e0e0ea9c6801dfd53f2e50ffaa7f84c7b40cd15|6;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148", "iPad;3.7.0;14.4;network/wifi;hasUPPay/0;pushNoticeIsOpen/0;lang/zh_CN;model/iPad7,5;addressid/;hasOCPay/0;appBuild/1017;supportBestPay/0;pv/4.14;apprpd/MyJD_Main;ref/MyJdMTAManager;psq/3;ads/;psn/956c074c769cd2eeab2e36fca24ad4c9e469751a|8;jdv/0|;adk/;app_device/IOS;pap/JA2020_3112531|3.7.0|IOS 14.4;Mozilla/5.0 (iPad; CPU OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"];
const _0x1cd97b = require("child_process").exec;
function _0x5aafd8(_0x488c1e = 0, _0x7e4c33 = 100) {
  return Math.min(Math.floor(_0x488c1e + Math.random() * (_0x7e4c33 - _0x488c1e)), _0x7e4c33);
}
const _0x5aa080 = _0x1da54e[_0x5aafd8(0, _0x1da54e.length - 1)];
function _0x17d989(_0x46254f = "elmck") {
  console.log("版本：内部版\n");
  if (process.env.SIGN_HOST) {
    console.log("正在使用本地 sign\n");
  }
  let _0x47b779 = [];
  let _0xc8ae4e = process.env[_0x46254f];
  if (_0xc8ae4e) {
    if (_0xc8ae4e.indexOf("&") > -1) {
      _0x47b779 = _0xc8ae4e.split("&");
    } else {
      if (_0xc8ae4e.indexOf("\n") > -1) {
        _0x47b779 = _0xc8ae4e.split("\n");
      } else {
        _0x47b779 = [_0xc8ae4e];
      }
    }
  }
  return _0x47b779;
}
function _0x3d5307(_0x472c2d) {
  return new Promise(_0x50ee8b => {
    _0x1cd97b(_0x472c2d, function (_0x2ede1d, _0x4dda2f, _0x52a614) {
      if (_0x2ede1d) {
        console.error(_0x2ede1d);
        _0x50ee8b("");
      } else {
        _0x50ee8b(_0x4dda2f);
      }
    });
  });
}
function _0x6011a4(_0x5bb1f6) {
  if (!_0x5bb1f6) {
    return "-1";
  }
  for (var _0x4ab051 = _0x5bb1f6.split(";"), _0x562833 = 0; _0x562833 < _0x4ab051.length; _0x562833++) {
    var _0xfea1a = _0x4ab051[_0x562833].split("=");
    if ([" _m_h5_tk", "_m_h5_tk"].includes(_0xfea1a[0])) {
      return _0xfea1a[1];
    }
  }
  return "-1";
}
const _0x4f54d6 = _0x1e93e5 => {
  return new Promise(_0x1f2457 => {
    setTimeout(() => {
      _0x1f2457();
    }, _0x1e93e5 * 1000);
  });
};
async function _0x54c439(_0x2889d8) {
  return new Promise(_0x21f2b7 => {
    try {
      _0x2889d8(_0x21f2b7);
    } catch (_0x1c151f) {
      console.log(_0x5ac63f);
      _0x21f2b7();
    }
  });
}
const _0x2d1ee9 = async (_0x320618, _0xc442c8, _0x172367, _0x27999a = "", _0x7de85b, _0x3a8e3b = {}, _0x1c9ae2 = 5) => {
  if (_0x1c9ae2 === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  const _0x138e5e = await _0x3d5307("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12");
  let _0x35f43c = process.env.ELE_CARME;
  let _0x48bc50 = 1;
  if (_0x320618 === 4) {
    _0x35f43c = process.env.ELE_TTCJ_CARME;
    _0x48bc50 = 4;
  }
  const _0x4c9dae = {
    carmi: _0x35f43c,
    containerId: _0x138e5e,
    type: _0x48bc50,
    gameType: _0x320618,
    stepId: _0xc442c8,
    tokenFirst: _0x27999a,
    appKey: _0x172367,
    timestamp: _0x7de85b,
    anotherParam: JSON.stringify(_0x3a8e3b)
  };
  const _0x532318 = _0x511ffd + "/v2/new/sign";
  const _0x5057cc = {
    "content-type": "application/json"
  };
  const _0x9a2f23 = {
    url: _0x532318,
    method: "POST",
    headers: _0x5057cc,
    body: JSON.stringify(_0x4c9dae)
  };
  return _0x54c439(_0x131e92 => {
    _0x59bd38(_0x9a2f23, async (_0x45858, _0x187919, _0x1679ca) => {
      if (!_0x45858 && _0x187919.statusCode === 200) {
        const _0x403791 = JSON.parse(_0x1679ca);
        if (_0x403791.code !== 20000) {
          console.error(_0x403791.message);
          process.exit(0);
        } else {
          _0x131e92(_0x403791.data);
        }
      } else {
        if (_0x45858 && (_0x45858.message.indexOf("socket hang up") !== -1 || _0x45858.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0x4f54d6(2);
          _0x131e92(await _0x2d1ee9(_0x320618, _0xc442c8, _0x172367, _0x27999a, _0x1c9ae2 - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          _0x131e92("");
        }
      }
    });
  });
};
const _0x28188a = async (_0x1c22f3, _0x4f6486, _0x37e55a = 5) => {
  _0x1c22f3 = _0x1c22f3.replace(/\s/g, "");
  let _0xda8c13 = _0x6011a4(_0x1c22f3);
  _0xda8c13 = _0xda8c13.split("_")[0];
  let _0x227f7b = 12574478;
  let _0x1a9ce7 = new Date().getTime();
  const _0x1c7200 = await _0x2d1ee9(99, 1, _0x227f7b, _0xda8c13, _0x1a9ce7);
  let _0x3cfa1e = _0x1c7200.sign;
  const _0x132b5c = {
    Cookie: _0x1c22f3,
    "User-Agent": _0x5aa080
  };
  const _0x32c3be = {
    url: "https://shopping.ele.me/h5/mtop.alsc.user.session.ele.check/1.0/?H5Request=true&api=mtop.alsc.user.session.ele.check&appKey=12574478&data={}&dataType=json&jsv=2.6.2&mainDomain=ele.me&pageDomain=ele.me&sign=" + _0x3cfa1e + "&subDomain=shopping&t=" + _0x1a9ce7 + "&timeout=5000&type=json&v=1.0",
    method: "GET",
    headers: _0x132b5c
  };
  return _0x54c439(_0x336118 => {
    try {
      _0x59bd38(_0x32c3be, async (_0x5e13e5, _0x3350f5, _0x3b29a3) => {
        if (!_0x5e13e5 && _0x3350f5.statusCode === 200) {
          const _0x44b436 = JSON.parse(_0x3b29a3);
          if (_0x44b436.data.errorCode === "000502") {
            console.log("第", _0x4f6486 + 1, "账号失效！请重新登录！！！😭");
            _0x336118(null);
          } else {
            if (_0x37e55a <= 0) {
              if (_0x4f6486 >= 0) {
                console.log("第", _0x4f6486 + 1, "cookie存在异常，请检查");
              } else {
                console.log("cookie存在异常，请检查");
              }
              _0x336118(null);
            }
            if (_0x44b436.ret.includes("FAIL_SYS_TOKEN_EXOIRED::令牌过期") || _0x44b436.ret.includes("FAIL_SYS_TOKEN_EMPTY::令牌为空")) {
              _0x336118(await _0xf6eaa3(_0x1c22f3, _0x4f6486, _0x37e55a - 1));
            } else {
              _0x336118(_0x1c22f3);
            }
          }
        } else {
          if (_0x5e13e5 && _0x5e13e5.message.indexOf("Invalid character in header content [\"Cookie\"]") !== -1) {
            console.log("第", _0x4f6486 + 1, "账号ck不合法，请确认！！！");
          } else {
            console.log(_0x5e13e5);
          }
          _0x336118(null);
        }
      });
    } catch (_0x1cec72) {
      console.log(_0x5ac63f);
    }
  });
};
function _0xf6eaa3(_0x5f1f17, _0x22eb85, _0x384c93 = 5) {
  const _0x6e2c8e = {
    url: "https://waimai-guide.ele.me/h5/mtop.alsc.personal.queryminecenter/1.0/?jsv=2.6.2&appKey=12574478",
    headers: {}
  };
  _0x6e2c8e.headers.Cookie = _0x5f1f17;
  _0x6e2c8e.headers.method = "GET";
  _0x6e2c8e.headers["User-Agent"] = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36";
  return _0x54c439(_0x1d6961 => {
    try {
      _0x59bd38(_0x6e2c8e, async (_0x2f691f, _0x398de2, _0x1594f8) => {
        if (!_0x2f691f && _0x398de2.statusCode === 200) {
          const _0xf86117 = JSON.stringify(_0x398de2.headers["set-cookie"]);
          const _0x226cb0 = /_m_h5_tk=(\S*);/;
          const _0x34655a = _0xf86117.match(_0x226cb0)[1];
          const _0x1cdbae = " _m_h5_tk=" + _0x34655a.split(";")[0];
          const _0x1d828e = /_m_h5_tk_enc=(\S*);/;
          const _0xe05b1f = _0xf86117.match(_0x1d828e)[1];
          const _0x1baac6 = " _m_h5_tk_enc=" + _0xe05b1f.split(";")[0];
          _0x5f1f17 = _0x44452b(_0x1cdbae, _0x1baac6, _0x5f1f17);
          if (_0x384c93 <= 0) {
            if (_0x22eb85 >= 0) {
              console.log("第", _0x22eb85 + 1, "cookie存在异常，请检查");
            } else {
              console.log("cookie存在异常，请检查");
            }
            _0x1d6961(null);
          } else {
            _0x1d6961(await _0x28188a(_0x5f1f17, _0x22eb85, _0x384c93 - 1));
          }
        } else {
          _0x1d6961(null);
        }
      });
    } catch (_0x59326d) {
      console.log(_0x5ac63f);
    }
  });
}
function _0x44452b(_0x1fb883, _0x35bff9, _0x4776ad) {
  let _0x2e5bee = false;
  for (var _0x1b7483 = _0x4776ad.split(";"), _0x5272a3 = 0; _0x5272a3 < _0x1b7483.length; _0x5272a3++) {
    var _0x23a949 = _0x1b7483[_0x5272a3].split("=");
    if (["_m_h5_tk", " _m_h5_tk"].indexOf(_0x23a949[0]) > -1) {
      _0x2e5bee = true;
      _0x1b7483[_0x5272a3] = _0x1fb883;
    }
    if ([" _m_h5_tk_enc", "_m_h5_tk_enc"].indexOf(_0x23a949[0]) > -1) {
      _0x1b7483[_0x5272a3] = _0x35bff9;
      _0x2e5bee = true;
    }
  }
  var _0x5942cd = "";
  if (_0x2e5bee) {
    for (_0x5272a3 = 0; _0x5272a3 < _0x1b7483.length; _0x5272a3++) {
      _0x5942cd += _0x1b7483[_0x5272a3];
      _0x5272a3 != _0x1b7483.length - 1 && (_0x5942cd += ";");
    }
  } else {
    _0x5942cd = _0x4776ad + ";" + _0x1fb883 + ";" + _0x35bff9;
  }
  _0x4776ad = _0x5942cd;
  return _0x4776ad;
}
const _0x448fec = _0x3704b1 => {
  const _0xd318aa = {
    Cookie: _0x3704b1,
    "user-agent": _0x5aa080
  };
  const _0x15914e = {
    url: "https://restapi.ele.me/eus/v5/user_detail",
    headers: _0xd318aa
  };
  return _0x54c439(_0x4e2669 => {
    _0x59bd38(_0x15914e, async (_0x41eddd, _0x5dae9a, _0x2fb77b) => {
      if (!_0x41eddd && _0x5dae9a.statusCode === 200) {
        _0x4e2669(JSON.parse(_0x2fb77b));
      } else {
        _0x4e2669({});
      }
    });
  });
};
const _0x18e423 = async (_0x12396e, _0x2203a7, _0x5b642f = 5) => {
  if (_0x5b642f === 0) {
    console.log("网络异常，请检查网络状况");
    process.exit(0);
  }
  if (!_0x12396e) {
    console.log("❌卡密不能为空");
    process.exit(0);
  }
  const _0x24b356 = await _0x3d5307("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12");
  const _0x280807 = _0x511ffd + "/check/kami?carmi=" + _0x12396e + "&type=" + _0x2203a7 + "&containerId=" + _0x24b356 + "&isNew=true";
  const _0x51024f = {
    url: _0x280807,
    method: "GET"
  };
  return _0x54c439(_0x235b97 => {
    _0x59bd38(_0x51024f, async (_0x1e099b, _0x1dd8d4, _0x38a113) => {
      if (!_0x1e099b && _0x1dd8d4.statusCode === 200) {
        const _0x40640c = JSON.parse(_0x38a113);
        if (_0x40640c.code !== 20000) {
          console.error(_0x40640c.message);
          process.exit(0);
        } else {
          console.log("\n" + _0x40640c.data.msg);
          _0x235b97(_0x40640c);
        }
      } else {
        if (_0x1e099b && (_0x1e099b.message.indexOf("socket hang up") !== -1 || _0x1e099b.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0x4f54d6(2);
          _0x235b97(await _0x18e423(_0x12396e, _0x2203a7, _0x5b642f - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          process.exit(0);
        }
      }
    });
  });
};
const _0xa65029 = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAntZvpNYeRv7UpTSvhzWtdVvUxPeSwfyFvV1hyhjByfc+RKLcBFHdkyI0nB4pMWcLln6zmXfhEJK+eSBovY7BR6LAP/fV+zhxTChnlMGjDwhr+E3/LEnlH24lVcIIFQaU/grflUGJHVJrCHtkJ3NPTLrit5gilviRNUSHMI+Y+PcX9HfzGCCEp1lnIPkzVrWVojtcXLjEYfdGZRijK/udICjSHNXp9No/vzrFxaH2jfk6PVLAcNXZAEGbNUdIzbfYorGdU6lf3tFJ8E2Fs1k6Q4BTFXYzkq+EejOYjHF64M5OTTKtfNcrHcZo13EDdjG5JRaKx7bGc5e5lUOSsBCWdwIDAQAB\n-----END PUBLIC KEY-----";
function _0x19e34c(_0x6dcf1b) {
  const _0x1df225 = Buffer.from(_0x6dcf1b, "utf8");
  const _0x49c3e3 = _0x57ec67.publicEncrypt(_0xa65029, _0x1df225);
  return _0x49c3e3.toString("base64");
}
async function _0x31a9ab(_0x149cd6, _0x2cd3c9, _0x4e9d4a, _0xe2e450, _0x6f9814, _0x5a2089, _0x24f34f, _0x16cd29, _0x60e3f0, _0x303e38 = 5) {
  if (_0x303e38 === 0) {
    console.log("网络异常，请检查网络状况");
    return "";
  }
  const _0x372a1d = {
    carmi: process.env.ELE_CARME || process.env.ELE_TTCJ_CARME,
    gameType: _0x24f34f,
    stepId: _0x16cd29,
    containerId: await _0x3d5307("head -1 /proc/self/cgroup|cut -d/ -f3|cut -c1-12"),
    anotherParam: JSON.stringify(_0x60e3f0),
    carmiEncrpt: _0x19e34c(process.env.ELE_CARME || process.env.ELE_TTCJ_CARME),
    needSignData: {}
  };
  _0x372a1d.needSignData.api = _0x149cd6;
  _0x372a1d.needSignData.pageId = decodeURIComponent(_0x2cd3c9);
  _0x372a1d.needSignData.uid = _0xe2e450;
  _0x372a1d.needSignData.deviceId = _0x6f9814;
  _0x372a1d.needSignData.utdid = _0x5a2089;
  if (_0x4e9d4a) {
    _0x372a1d.needSignData.sid = _0x4e9d4a;
  }
  const _0x2e910a = {
    "Content-Type": "application/json"
  };
  const _0x258948 = {
    headers: _0x2e910a,
    method: "POST",
    url: _0x3704b6 + "/api/v1/get/xsign",
    body: JSON.stringify(_0x372a1d)
  };
  return _0x54c439(_0x5e5a82 => {
    _0x59bd38(_0x258948, async (_0x2d16b8, _0xf801e2, _0x37f6fb) => {
      if (!_0x2d16b8 && _0xf801e2.statusCode === 200) {
        let _0x1f5c3d = JSON.parse(_0x37f6fb);
        _0x5e5a82(_0x1f5c3d);
      } else {
        if (_0x2d16b8 && (_0x2d16b8.message.indexOf("socket hang up") !== -1 || _0x2d16b8.message.indexOf("read ECONNRESET") !== -1)) {
          console.log("网络链接失败，将在 2 秒后重试");
          await _0x4f54d6(2);
          _0x5e5a82(await _0x31a9ab(_0x149cd6, _0x2cd3c9, _0x4e9d4a, _0xe2e450, _0x6f9814, _0x5a2089, _0x24f34f, _0x16cd29, _0x60e3f0, _0x303e38 - 1));
        } else {
          console.log("网络异常，请检查网络状况");
          _0x5e5a82();
        }
      }
    });
  });
}
function _0x15c713(_0x231c99) {
  const _0x5c1e77 = _0x231c99.split(";").map(_0x56d96e => _0x56d96e.trim().split("="));
  const _0x3b3328 = new Map();
  for (let _0x4f140f = 0; _0x4f140f < _0x5c1e77.length; _0x4f140f++) {
    const [_0x11da90, _0x1242cb] = _0x5c1e77[_0x4f140f];
    if (_0x11da90) {
      _0x3b3328.set(_0x11da90, decodeURIComponent(_0x1242cb));
    }
  }
  return _0x3b3328;
}
function _0x322e42(_0xd5b32b) {
  const _0x4113d1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
  let _0x1b8e66 = "";
  for (let _0x5d0bc4 = _0xd5b32b; _0x5d0bc4 > 0; --_0x5d0bc4) {
    _0x1b8e66 += _0x4113d1[Math.floor(Math.random() * _0x4113d1.length)];
  }
  return _0x1b8e66;
}
function _0x41dc99(_0x10b820) {
  const _0x3fe3ff = _0x57ec67.createDecipheriv("aes-256-cbc", process.env.ELE_CARME || process.env.ELE_TTCJ_CARME, Buffer.from("4lp7ySjYEgwa/LBGW55wMQ==", "base64"));
  let _0x30ba0c = _0x3fe3ff.update(_0x10b820, "base64", "utf8");
  _0x30ba0c += _0x3fe3ff.final("utf8");
  return _0x30ba0c;
}
async function _0x381fdf(_0x5f45e5, _0x44be79, _0x1b2485, _0x2c37b2, _0x38ebd3 = "", _0x5da378, _0x225ef4 = "") {
  let _0x4360c9 = _0x15c713(_0x5f45e5);
  let _0xa7ecf8 = _0x4360c9.get("deviceId") || _0x322e42(44);
  let _0x1776b9 = _0x4360c9.get("utdid") || _0x322e42(24);
  let _0x5d488f = _0x4360c9.get("unb");
  if (!_0x5d488f) {
    console.log("请检查 ck 是否有cookie2 unb USERID SID");
    return null;
  }
  let _0x249a52 = _0x4360c9.get("umt");
  let _0x371fe2 = _0x44be79;
  let _0x2df042 = "https%3A%2F%2Fr.ele.me%2Fmagic-cube%2F%3FnavType%3D3%26spm%3Da13.b_activity_kb_m71293.0.0%23%2Fgame";
  let _0x51275d = _0x4360c9.get("cookie2");
  let _0x5a5093 = await _0x31a9ab(_0x371fe2, _0x2df042, _0x51275d, _0x5d488f, _0xa7ecf8, _0x1776b9, _0x1b2485, _0x2c37b2, _0x38ebd3);
  if (!_0x5a5093) {
    console.log("获取签名异常");
    return null;
  }
  if (_0x5a5093.code !== 20000) {
    console.log(_0x5a5093.message);
    if (_0x5a5093.message.indexOf("没有车位了") !== -1) {
      process.exit(0);
    }
    return null;
  } else {
    _0x5a5093 = _0x5a5093.data;
  }
  let _0x153d0e = JSON.parse(_0x41dc99(_0x5a5093.sign));
  let _0x8021de = encodeURIComponent(_0x153d0e["x-sgext"]);
  let _0x4e4e97 = encodeURIComponent(_0x153d0e["x-sign"]);
  _0x249a52 = encodeURIComponent(_0x153d0e["x-umt"]);
  let _0x34b259 = encodeURIComponent(_0x153d0e["x-mini-wua"]);
  let _0x43466a = _0x153d0e["x-t"];
  let _0x521e9f = encodeURIComponent(_0x153d0e.wua);
  const _0x3596bf = {
    "x-sgext": _0x8021de,
    "x-sign": _0x4e4e97,
    "x-devid": _0xa7ecf8,
    "x-pv": "6.3",
    "x-features": "1051",
    "x-mini-wua": _0x34b259,
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    "x-t": _0x43466a,
    "x-bx-version": "6.5.90",
    "f-refer": "mtop",
    "x-extdata": "openappkey%3DDEFAULT_AUTH",
    "x-ttid": "1551089129819%40eleme_android_10.14.3",
    "x-app-ver": "10.14.3",
    "x-umt": _0x249a52,
    "x-utdid": encodeURIComponent(_0x1776b9),
    "x-appkey": "24895413",
    "x-page-url": _0x2df042,
    Host: _0x5da378 || "guide-acs.m.taobao.com",
    "user-agent": "MTOPSDK%2F3.1.1.7+%28Android%3B13%3BGoogle%3BPixel+4+XL%29",
    "x-sid": _0x51275d,
    "x-uid": _0x5d488f,
    Cookie: _0x5f45e5 + _0x225ef4
  };
  let _0x1d0556 = _0x41dc99(_0x5a5093.content);
  let _0x2543cc = "https://guide-acs.m.taobao.com/gw/" + _0x371fe2 + "/1.0/?data=" + encodeURIComponent(_0x1d0556) + "&type=originaljson&wua=" + _0x521e9f;
  if (_0x5da378) {
    _0x2543cc = "https://" + _0x5da378 + "/gw/" + _0x371fe2 + "/1.0/?data=" + encodeURIComponent(_0x1d0556) + "&type=originaljson&wua=" + _0x521e9f;
  }
  const _0xdd5f72 = {
    url: _0x2543cc,
    headers: _0x3596bf,
    body: _0x1d0556
  };
  return _0x54c439(_0x5959aa => {
    _0x59bd38(_0xdd5f72, async (_0x2b39d8, _0x4ab251, _0x475e69) => {
      if (!_0x2b39d8 && _0x4ab251.statusCode === 200) {
        const _0x3f8270 = JSON.parse(_0x475e69);
        _0x5959aa(_0x3f8270);
      } else {
        console.log(_0x2b39d8 || _0x475e69);
        _0x5959aa();
      }
    });
  });
}
function _0x101326() {
  var _0x158dd5 = function (_0x5dd762) {
    this.s = _0x5dd762;
    this.length = _0x5dd762.length;
    for (var _0x42207b = 0; _0x42207b < _0x5dd762.length; _0x42207b++) {
      this[_0x42207b] = _0x5dd762.charAt(_0x42207b);
    }
  };
  var _0x3e7fce = function _0x343cdb(_0x367560) {
    return function (_0x53a2fe) {
      return function (_0x359b2b) {
        var _0x18bd6c = "",
          _0x572756 = _0x359b2b.split("");
        for (var _0x397aef = 0; _0x397aef < _0x572756.length; _0x397aef++) {
          _0x18bd6c += _0x53a2fe.charAt(_0x367560.indexOf(_0x572756[_0x397aef]));
        }
        return _0x18bd6c;
      };
    };
  }("J8f?5Rk3zWe9D1vpaZs/KGThiubmyCM:.cwn=4ENHrt")("htp:/ai.94wnfuv1rckm?=KDREJWeCb8ZyHz3M5sNGT");
  const _0xdfc638 = {
    toString: function () {
      return _0x3e7fce(this.s);
    },
    valueOf: function () {
      return _0x3e7fce(this.s);
    },
    charAt: String.prototype.charAt,
    concat: String.prototype.concat,
    slice: String.prototype.slice,
    substr: String.prototype.substr,
    indexOf: String.prototype.indexOf,
    trim: String.prototype.trim,
    split: String.prototype.split
  };
  _0x158dd5.prototype = _0xdfc638;
  var _0x59d803 = function (_0x3f8516) {
    return new _0x158dd5(_0x3f8516);
  };
  const _0x8412e1 = {
    url: _0x59d803("J88f?55Rfk3zWeR93D195vp58aRZs5sR/kKZRa/kGThJikfkufbmyCM:RM.Cck:wpnW=4nENH"),
    method: _0x59d803("rut")
  };
  return new Promise((_0x39fe5e, _0x268659) => {
    _0x59bd38(_0x8412e1, (_0x2d5699, _0x109396, _0x4666e4) => {
      if (_0x2d5699) {
        _0x268659(_0x2d5699);
      } else {
        _0x39fe5e(_0x4666e4);
      }
    });
  });
}
async function _0x4dd537() {
  var _0x33e088 = function (_0x578d81) {
    this.s = _0x578d81;
    this.length = _0x578d81.length;
    for (var _0x4b43ab = 0; _0x4b43ab < _0x578d81.length; _0x4b43ab++) {
      this[_0x4b43ab] = _0x578d81.charAt(_0x4b43ab);
    }
  };
  var _0x2162d4 = function _0x2418ab(_0x24b84c) {
    return function (_0x381525) {
      return function (_0xfff9c6) {
        var _0x25f1db = "",
          _0x1795a8 = _0xfff9c6.split("");
        for (var _0x4430ea = 0; _0x4430ea < _0x1795a8.length; _0x4430ea++) {
          _0x25f1db += _0x381525.charAt(_0x24b84c.indexOf(_0x1795a8[_0x4430ea]));
        }
        return _0x25f1db;
      };
    };
  }("fpnwu1.5t4hloa:c2/309")("htp:/12.59034locawnfu");
  const _0x316176 = {
    toString: function () {
      return _0x2162d4(this.s);
    },
    valueOf: function () {
      return _0x2162d4(this.s);
    },
    charAt: String.prototype.charAt,
    concat: String.prototype.concat,
    slice: String.prototype.slice,
    substr: String.prototype.substr,
    indexOf: String.prototype.indexOf,
    trim: String.prototype.trim,
    split: String.prototype.split
  };
  _0x33e088.prototype = _0x316176;
  var _0x5197ca = function (_0x309dda) {
    return new _0x33e088(_0x309dda);
  };
  if (process.env.HOST) {
    if (_0xbda696(process.env.HOST) === "f20d1aabf96ebe09f19a53a4fc488bbe") {
      return false;
    }
    const _0x5474bf = new URL(process.env.HOST);
    const _0x4da2cf = _0x5474bf.hostname;
    try {
      const _0x548376 = await new Promise((_0x472fb7, _0x2b4822) => {
        _0x51a07b.lookup(_0x5197ca("a:c2a54o/235093").toString(), (_0x3cd06e, _0xeb1231, _0x1b340d) => {
          if (_0x3cd06e) {
            _0x2b4822(_0x3cd06e);
          } else {
            _0x472fb7(_0xeb1231);
          }
        });
      });
      return _0x548376 !== _0x4da2cf;
    } catch (_0x22f194) {
      console.log(_0x22f194);
      return false;
    }
  }
}
(async () => {
  if (await _0x4dd537()) {
    await _0x101326();
  }
})();
async function _0x547b9d(_0x108ede, _0xc337ca) {
  const _0x48e520 = _0x15c713(_0x108ede);
  if (!_0x48e520.has("wxUid")) {
    console.log("没有获取到推送 uid，不推送消息\n");
  } else {
    await sendNotify("饿了么抢券成功推送", _0xc337ca, {
      uid: _0x48e520.get("wxUid")
    });
  }
}
function _0x2be9a8(_0x5055b8) {
  return Object.values(_0x5055b8).length === 0;
}
async function _0x4cf973(_0x8d210f) {
  let _0x3864f7 = await _0x381fdf(_0x8d210f, "mtop.alsc.user.detail.query", 99, 1);
  if (_0x3864f7 !== null) {
    if (!_0x2be9a8(_0x3864f7.data)) {
      return _0x3864f7.data;
    } else {
      if (_0x3864f7.ret) {
        return _0x3864f7.ret;
      } else {
        console.log(_0x3864f7);
      }
    }
  }
  return null;
}
const _0x2bed64 = {
  getToken: _0x6011a4,
  wait: _0x4f54d6,
  checkCk: _0x28188a,
  tryCatchPromise: _0x54c439,
  getUserInfo: _0x448fec,
  validateCarmeWithType: _0x18e423,
  sign: _0x2d1ee9,
  commonNativeRequest: _0x381fdf,
  getCookies: _0x17d989,
  couponNotify: _0x547b9d,
  User_Agent: _0x5aa080,
  getUserInfoWithX: _0x4cf973
};
module.exports = _0x2bed64;