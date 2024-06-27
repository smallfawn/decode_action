/*
APP：全球购骑士特权

直接appstore搜索下载，方便的话可以微信扫下面图片二维码走邀请注册，谢谢
https://raw.githubusercontent.com/leafTheFish/DeathNote/main/blackUnique.jpg

定时为每小时一次，务必在0分到5分之间运行，目前每天大概1毛7
提现需要关注微信公众号，在公众号里申请提现

青龙：
捉https://market.chuxingyouhui.com/promo-bargain-api/activity/mqq/api/indexTopInfo的包
然后填在blackJSON里面，注意按照JSON格式填写。用青龙面板的环境变量或者外面用双引号的，字符串内需要用\"转义
export blackJSON='{"black-token":"", "token":"", "User-Agent":"", "appId":""}'

V2P，圈X：重写方法 -- 点击右下角【我的】-> 【每日签到赚现金】
[task_local]
#全球购骑士特权
0 * * * * https://raw.githubusercontent.com/leafTheFish/DeathNote/main/blackUnique.js, tag=全球购骑士特权, enabled=true
[rewrite_local]
https://market.chuxingyouhui.com/promo-bargain-api/activity/mqq/api/indexTopInfo? url script-request-header https://raw.githubusercontent.com/leafTheFish/DeathNote/main/blackUnique.js
[MITM]
hostname = market.chuxingyouhui.com

*/

const $ = new Env('全球购骑士特权')
const jsname = '全球购骑士特权'
const notifyFlag = 1; //0为关闭通知，1为打开通知,默认为1
const logDebug = 0

//const notify = $.isNode() ? require('./sendNotify') : '';
let notifyStr = ''

let blackJSON = ($.isNode() ? (process.env.blackJSON) : ($.getval('blackJSON'))) || ''
let blackArr = []

let userIdx = 0
let reqTime = ''
let userSign = ''
let redPacketId = ''
let fruitId = ''
let userFruitId = ''
let activityId = ''
let redPacketCount = 0
let waterCount = 0
let fertilizerCount = 0
let clickTreeTimes = 1
let signRetryTimes = 3
let signRetryCount = 0
let totalMoney = 0

var todayDate = formatDateTime(new Date());
let bussinessInfo = '{}'

let rndtime = "" //毫秒

///////////////////////////////////////////////////////////////////

!(async () => {

    if(typeof $request !== "undefined")
    {
        await getRewrite()
    }
    else
    {
        //检查环境变量
        if(!(await checkEnv())){
            return
        }
        
        console.log('\n提现需要关注微信公众号，在公众号里申请提现')
        
        for(userIdx=0; userIdx<blackArr.length; userIdx++) {
            console.log(`\n===== 开始用户${userIdx+1} 勋章任务 =====`)
            await querySignStatus()
            await listUserTask()
            //await listRedPacket()
            //收取存钱罐看视频需要前置条件
            //await queryPiggyInfo()
            //翻卡看视频需要前置条件
            //await getUserFlopRecord()
        }
        /*
        for(userIdx=0; userIdx<blackArr.length; userIdx++) {
            console.log(`\n===== 开始用户${userIdx+1} 视频任务 =====`)
            //收取存钱罐看视频需要前置条件
            //await queryPiggyInfo()
            //翻卡看视频需要前置条件
            //await getUserFlopRecord()
        }*/
        for(userIdx=0; userIdx<blackArr.length; userIdx++) {
            await userInfo()
        }
        
        await showmsg()
    }
  

})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

//通知
async function showmsg() {
    
    notifyBody = jsname + "运行通知\n\n" + notifyStr
    
    if (notifyFlag != 1) {
        console.log(notifyBody);
    }

    if (notifyFlag == 1) {
        $.msg(notifyBody);
        //if ($.isNode()){await notify.sendNotify($.name, notifyBody );}
    }
}

async function getRewrite()
{
    if($request.url.indexOf("mqq/api/indexTopInfo?appId=") > -1) {
        let blackCk = {"black-token":"", "token":"", "User-Agent":"", "appId":""}
        let msgStr = ''
        
        let matchItem = $request.url.match(/appId=([\w]+)/)
        blackCk['appId'] = matchItem[1]
        msgStr += `获取到appId: ${blackCk['appId']}\n`
        
        blackCk['black-token'] = $request.headers['black-token']
        msgStr += `获取到black-token: ${blackCk['black-token']}\n`
        
        blackCk['token'] = $request.headers['token']
        msgStr += `获取到token: ${blackCk['token']}\n`
        
        blackCk['User-Agent'] = $request.headers['User-Agent']
        msgStr += `获取到User-Agent: ${blackCk['User-Agent']}\n`
        
        if(blackCk['black-token']) {
            if(blackJSON) {
                if(blackJSON.indexOf(blackCk['black-token']) == -1) {
                    blackJSON = blackJSON + '@' + JSON.stringify(blackCk)
                    numUser = blackJSON.split('@')
                    msgStr = `获取到第${numUser.length}个账户ck\n` + msgStr
                    $.setdata(blackJSON,'blackJSON')
                    $.msg(msgStr)
                } else {
                    $.log('检测到重复的账户ck')
                }
            } else {
                msgStr = `获取到第一个账户ck\n` + msgStr
                $.setdata(JSON.stringify(blackCk),'blackJSON')
                $.msg(msgStr)
            }
        }
    }
}

async function checkEnv()
{
    if(blackJSON) {
        for(let users of blackJSON.split('@')) {
            blackArr.push(JSON.parse(users))
        }
    } else {
        console.log('未找到blackJSON')
        return false
    }
    
    if(blackArr.length == 0) {
        console.log('未找到有效的blackJSON')
        return false
    }
    
    console.log(`共找到${blackArr.length}个用户`)
    return true
}

//==========================================================================
//加密接口
async function getSignInfo(type, timeout=5000) {
    signRetryCount++
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let url = {
            url: `http://cxyh.sijia.fun/?type=${type}&token=${blackArr[userIdx]['token']}`,
            headers: {
                'Host' : 'cxyh.sijia.fun',
                'Connection' : 'keep-alive',
            },
        };
        $.get(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    if(signRetryCount < signRetryTimes) getSignInfo(type)
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.success == true) {
                            reqTime = result.requests_time
                            userSign = result.sign
                            redPacketId = result.redPacketId ? result.redPacketId : ''
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        },timeout);
    });
}

//获取视频信息
async function getBussinessInfo(adId,activityType,bussinessType,version) {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    reqBody = `{"adId":"${adId}","activityType":${activityType},"bussinessType":"${bussinessType}","version":"${version}"}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/video/api/v1_0/getBussinessInfo',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            bussinessInfo = result.data ? JSON.stringify(result.data) : '{}'
                        } else {
                            console.log(`获取视频信息失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//获取签到状态
async function querySignStatus() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/activity/weekSign/api/v1_0/calendar?appId='+blackArr[userIdx]['appId'],
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'Origin' : 'https://m.black-unique.com',
                'Accept-Encoding' : 'gzip, deflate, br',
                'Connection' : 'keep-alive',
                'black-token' : blackArr[userIdx]['black-token'],
                'Accept' : 'application/json, text/plain, */*',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'Referer' : 'https://m.black-unique.com/',
                'token' : blackArr[userIdx]['token'],
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
            },
        };
        $.get(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            if(result.data && result.data.calendar && Array.isArray(result.data.calendar)) {
                                for(let i=0; i< result.data.calendar.length; i++) {
                                    let signItem = result.data.calendar[i]
                                    if(signItem.isToday == true) {
                                        if(signItem.signStyle == 0) {
                                            await doSign()
                                        } else {
                                            console.log(`\n今日已签到\n`)
                                        }
                                    }
                                }
                            }
                        } else {
                            console.log(`\n获取签到状态失败：${result.msg}\n`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//签到
async function doSign() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    reqBody = `{}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/activity/weekSign/api/v1_0/sign?appId='+blackArr[userIdx]['appId'],
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            console.log(`\n签到成功获得：${result.data.reward}金币，已连续签到${result.data.continuouslyDay}天\n`)
                        } else {
                            console.log(`\n签到失败：${result.msg}\n`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//日常-任务列表
async function listUserTask() {
    let caller = printCaller()
    rndtime = Math.round(new Date().getTime())
    reqBody = `{"activityType":13}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/activity/task/api/list_user_task',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            if(result.data && Array.isArray(result.data)) {
                                for(let i=0; i<result.data.length; i++) {
                                    let taskItem = result.data[i]
                                    if(taskItem.status == 0 && taskItem.finishedTimes < taskItem.totalTimes) {
                                        if(taskItem.taskType.indexOf('RECEIVE_MEDAL') > -1 && (rndtime < taskItem.receiveStartTime || rndtime > taskItem.receiveEndTime)) {
                                            //非整点领勋章时间
                                            continue
                                        } else if(taskItem.taskType.indexOf('SHOPPING') > -1) {
                                            //跳过购物任务
                                            continue
                                        } else if(taskItem.taskType.indexOf('BROWSE_ARTICLE') > -1) {
                                            //看小说
                                            continue
                                        } else {
                                            await doTask(taskItem.taskType,taskItem.userTaskId,taskItem.taskTitle)
                                        }
                                    }
                                    
                                }
                            }
                        } else {
                            console.log(`查询任务列表失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//日常-完成任务
async function doTask(taskType,userTaskId,taskTitle) {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    reqBody = `{"activityType":13,"taskType":"${taskType}","userTaskId":"${userTaskId}"}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/activity/task/api/doTask',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            console.log(`完成任务【${result.data.taskTitle}】：获得${result.data.rewardScore}勋章`)
                        } else {
                            console.log(`完成任务【${taskTitle}】失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//存钱罐状态
async function queryPiggyInfo() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/activity/golden/api/queryUserAccountInfo?appId='+blackArr[userIdx]['appId'],
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'Origin' : 'https://m.black-unique.com',
                'Accept-Encoding' : 'gzip, deflate, br',
                'Connection' : 'keep-alive',
                'black-token' : blackArr[userIdx]['black-token'],
                'Accept' : 'application/json, text/plain, */*',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'Referer' : 'https://m.black-unique.com/',
                'token' : blackArr[userIdx]['token'],
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
            },
        };
        $.get(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            if(parseFloat(result.data.goldenAmount) < parseFloat(result.data.dayCeil)) {
                                if(parseFloat(result.data.piggyAmount) >= 1) {
                                    await getBussinessInfo(946088114,7,'GOLDEN_CLICK','v3')
                                    await clickPiggy()
                                }
                            } else {
                                console.log(`\n存钱罐提取已达到当天上限：${result.data.dayCeil}\n`)
                            }
                        } else {
                            console.log(`\n查询存钱罐状态失败：${result.msg}\n`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//提取存钱罐金币
async function clickPiggy() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    reqBody = `{"appId":"${blackArr[userIdx]['appId']}","extraReq":${bussinessInfo}}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/activity/golden/api/v1_0/click',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            console.log(`\n提取存钱罐金币成功，金币余额${result.data.goldenAmount}\n`)
                        } else {
                            console.log(`\n提取存钱罐金币失败：${result.msg}\n`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//查询翻牌领提现额度
async function getUserFlopRecord() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    reqBody = `{"appId":"${blackArr[userIdx]['appId']}","queryDay":"${todayDate}"}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/activity/flop/api/getUserFlopRecord',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            if(result.data && result.data.recordList && Array.isArray(result.data.recordList)) {
                                for (let i=0; i<result.data.recordList.length; i++) {
                                    let recordItem = result.data.recordList[i]
                                    if(!recordItem.status) {
                                        await getBussinessInfo(946087990,12,'WITHDRAWAL_WATCH_VIDEO','v3')
                                        await userFlop(recordItem.serialNumber)
                                    }
                                }
                            }
                        } else {
                            console.log(`查询翻牌状态失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//翻牌领提现额度
async function userFlop(serialNumber) {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    reqBody = `{"appId":"${blackArr[userIdx]['appId']}","serialNumber":${serialNumber},"flopDay":"${todayDate}","extraReq":${bussinessInfo}}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/activity/flop/api/flop',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            console.log(`翻牌获得提现额度：${result.data.amount}元`)
                        } else {
                            console.log(`翻牌获得提现额度失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//定点红包列表
async function listRedPacket() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    curTime = new Date()
    currentHour = curTime.getHours()
    let isGetRedTime = ((currentHour < 23) && (currentHour > 6)) ? 1 : 0
    return new Promise((resolve) => {
        let url = {
            url: 'https://fanxian-api.chuxingyouhui.com/api/redPacketIncome/v1_0/listRedPacket',
            headers: {
                'Host' : 'fanxian-api.chuxingyouhui.com',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'newcomer' : 'true',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'Referer' : 'https://m.black-unique.com/',
                'Content-Length' : '0',
                'Connection' : 'keep-alive',
                'Accept' : 'application/json, text/plain, */*',
            },
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            if(isGetRedTime == 1 && result.data && result.data.redPacketList && Array.isArray(result.data.redPacketList)) {
                                redPacketCount = 0
                                for(let i=0; i<result.data.redPacketList.length; i++) {
                                    let redItem = result.data.redPacketList[i]
                                    if(redItem.money > 0) {
                                        redPacketCount++
                                    }
                                    if(redItem.status == 2 && redItem.money == 0 && redPacketCount < 7) {
                                        signRetryCount = 0
                                        await getSignInfo('open')
                                        await openRedPacket()
                                    }
                                }
                            }
                        } else {
                            console.log(`查询红包列表失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//开定点红包
async function openRedPacket() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime()/1000)
    return new Promise((resolve) => {
        let url = {
            url: 'https://pyp-api.chuxingyouhui.com/api/knightCard/redPacket/v1_0/openRedPacket',
            headers: {
                'Host' : 'pyp-api.chuxingyouhui.com',
                'Accept' : 'application/json, text/plain, */*',
                'ymd' : '0',
                'newcomer' : 'true',
                'token' : blackArr[userIdx]['token'],
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'Referer' : 'https://m.black-unique.com/',
                'Accept-Encoding' : 'gzip, deflate, br',
                'Connection' : 'keep-alive',
                'Content-Type' : 'application/json;charset=utf-8',
            },
            body: `{"click":false,"sign":"${userSign}","ts":"${reqTime}"}`
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            console.log(`打开红包获得：${result.data.money}现金`)
                            signRetryCount = 0
                            await getSignInfo('boom')
                            await boomRedPacket()
                        } else {
                            console.log(`打开红包失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//定点红包翻倍
async function boomRedPacket() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime()/1000)
    return new Promise((resolve) => {
        let url = {
            url: 'https://fanxian-api.chuxingyouhui.com/api/redPacket/increase/v1_0/boom',
            headers: {
                'Host' : 'fanxian-api.chuxingyouhui.com',
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'token' : blackArr[userIdx]['token'],
                'Accept-Encoding' : 'gzip, deflate, br',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
                'Content-Type' : 'application/json;charset=utf-8',
            },
            body: `{"redPacketId":"${redPacketId}","sign":"${userSign}","ts":"${reqTime}"}`,
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            console.log(`红包翻倍获得：${result.data.redPacketIncreaseAmount}现金`)
                        } else {
                            console.log(`红包翻倍失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//果园状态
async function userFruitDetail() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime()/1000)
    reqBody = `{"appId":"${blackArr[userIdx]['appId']}","isMiniProgram":false}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/garden/api/v1_0/userFruitDetail',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Connection' : 'keep-alive',
            },
            body: reqBody,
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            console.log(`你现在种的水果是 ${result.data.fruitName} ${result.data.specification}，${result.data.progressWord}`)
                            console.log(`今天已浇水${result.data.wateredTimes}次，剩余水滴数量：${result.data.remainAmount}`)
                            fruitId = result.data.fruitId
                            userFruitId = result.data.userFruitId
                            activityId = result.data.activityId
                            if(result.data.canReceiveStatus == 1 && result.data.canReceiveAmount > 0) {
                                await receiveWaterDrop('TOMORROW_REWARD','null','每日水滴')
                            }
                            if(result.data.gardenStageRewardResp && result.data.gardenStageRewardResp.status == 1) {
                                await fruitStageReward()
                            }
                            if(result.data.remainAmount >= 10) {
                                waterCount = 0
                                console.log(`开始浇水，请等候......`)
                                await wateringFruit()
                                console.log(`浇水结束，本次共浇水${waterCount}次`)
                            }
                        } else {
                            console.log(`查询果园状态失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//果园水果进度奖励
async function fruitStageReward() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime()/1000)
    reqBody = `{"userFruitId":"${userFruitId}","appId":"${blackArr[userIdx]['appId']}"}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/garden/api/v1_0/receiveStageReward',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Connection' : 'keep-alive',
            },
            body: reqBody,
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            console.log(`领取水果进度奖励：${result.data.rewardNum}水滴`)
                        } else {
                            console.log(`领取水果进度奖励失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//果园浇水
async function wateringFruit() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime()/1000)
    reqBody = `{"userFruitId":"${userFruitId}"}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/garden/api/v1_0/watering',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Connection' : 'keep-alive',
            },
            body: reqBody,
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            if(result.data.level && !result.data.remindType) {
                                if(result.data.upgrade == true) {
                                    console.log(`果树升级到 ${result.data.level} 获得：${result.data.upgradeReward}水滴`)
                                }
                                waterCount++
                                await wateringFruit()
                            }
                        } else {
                            console.log(`浇水失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//果园水滴任务
async function waterTaskList() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime()/1000)
    reqBody = `{"activityId":"${activityId}","userFruitId":"${userFruitId}","clientType":1}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/garden/api/v1_0/userTaskList',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Connection' : 'keep-alive',
            },
            body: reqBody,
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            if(result.data && result.data.taskList && Array.isArray(result.data.taskList)) {
                                for(let i=0; i<result.data.taskList.length; i++) {
                                    let taskItem = result.data.taskList[i]
                                    if(taskItem.taskType.indexOf('CLICK_DO_TASK') > -1 || 
                                       taskItem.taskType.indexOf('WATCH_VIDEO') > -1   || 
                                       taskItem.taskType.indexOf('APP_LOGIN') > -1) {
                                        if(taskItem.status == 0) {
                                            await doWaterTask(taskItem.taskType,taskItem.taskId,taskItem.title)
                                        } else if(taskItem.status == 1) {
                                            await receiveWaterDrop(taskItem.taskType,taskItem.userTaskId,taskItem.title)
                                        }
                                    } else if(taskItem.taskType.indexOf('EVERY_DAY_WATERING_REWARD') > -1 ||
                                              taskItem.taskType.indexOf('OPEN_CHEST') > -1) {
                                        if(taskItem.status == 1) {
                                            await receiveWaterDrop(taskItem.taskType,taskItem.userTaskId,taskItem.title)
                                        }
                                    } else {
                                        if(taskItem.status == 0) {
                                            await receiveWaterDrop(taskItem.taskType,taskItem.userTaskId,taskItem.title)
                                        }
                                    } 
                                }
                            }
                        } else {
                            console.log(`获取果园水滴任务失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//果园-完成水滴任务
async function doWaterTask(taskType,taskId,taskTitle) {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    reqBody = `{"userFruitId":"${userFruitId}","taskType":"${taskType}","taskId":"${taskId}"}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/garden/api/v1_0/doTask',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            console.log(`完成水滴任务【${taskTitle}】成功`)
                        } else {
                            console.log(`完成水滴任务【${taskTitle}】失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//果园-领取水滴
async function receiveWaterDrop(taskType,userTaskId,taskTitle) {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    reqBody = `{"userFruitId":"${userFruitId}","taskType":"${taskType}","userTaskId":${userTaskId}}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/garden/api/v1_0/receiveWaterDrop',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            console.log(`领取水滴任务【${taskTitle}】奖励：${result.data.reward}水滴`)
                        } else {
                            console.log(`领取水滴任务【${taskTitle}】奖励失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//果园肥料任务
async function nutrientTaskList() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime()/1000)
    reqBody = `{"activityId":"${activityId}","userFruitId":"${userFruitId}"}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/garden/api/v1_0/getUserNutrientTaskList',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Connection' : 'keep-alive',
            },
            body: reqBody,
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            if(result.data && result.data.gardenFertilizerTaskDtoList && Array.isArray(result.data.gardenFertilizerTaskDtoList)) {
                                for(let i=0; i<result.data.gardenFertilizerTaskDtoList.length; i++) {
                                    let taskItem = result.data.gardenFertilizerTaskDtoList[i]
                                    if(taskItem.taskType.indexOf('ORDER_FOR_FERTILIZER') == -1 && taskItem.status != 2) {
                                        await doNutrientTask(taskItem.taskType,taskItem.taskId,taskItem.title)
                                    }
                                }
                            }
                        } else {
                            console.log(`获取果园肥料任务失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//果园-完成肥料任务
async function doNutrientTask(taskType,taskId,taskTitle) {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    reqBody = `{"taskId":"${taskId}","userFruitId":"${userFruitId}","taskType":"${taskType}","source":2}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/garden/api/v1_0/doTaskForNutrient',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            console.log(`完成肥料任务【${taskTitle}】成功`)
                        } else {
                            console.log(`完成肥料任务【${taskTitle}】失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//果园肥料状态
async function userFertilizerDetail(taskType,taskId,taskTitle) {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    reqBody = `{"activityId":"${activityId}","userFruitId":"${userFruitId}"}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/garden/api/v1_0/getUserFertilizerTool',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            fertilizerCount = 0
                            if(result.data.userSmallFertilizerTool.remainNum > 0 || result.data.userFertilizerTool.remainNum > 0) {
                                for(let i=0; i<result.data.userSmallFertilizerTool.remainNum; i++) {
                                    await useFertilizer(result.data.userSmallFertilizerTool.userToolIds)
                                }
                                for(let i=0; i<result.data.userFertilizerTool.remainNum; i++) {
                                    await useFertilizer(result.data.userFertilizerTool.userToolIds)
                                }
                                console.log(`施肥结束，本次共施肥${waterCount}次`)
                            }
                        } else {
                            console.log(`获取果园肥料状态失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//果园施肥
async function useFertilizer(userToolId) {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    reqBody = `{"userFruitId":"${userFruitId}","userToolId":"${userToolId}"}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/garden/api/v1_0/useFertilizer',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            //施肥成功
                        } else {
                            console.log(`施肥失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//果园-摇树得优惠券
async function getTreeCoupon() {
    console.log(`\n开始摇树${clickTreeTimes}次得优惠券`)
    for(let i=0; i<clickTreeTimes; i++) {
        await clickTree()
    }
}

//果园-点击树
async function clickTree() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    reqBody = `{"userFruitId":"${userFruitId}","appId":"${blackArr[userIdx]['appId']}"}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/garden/api/v1_0/clickTree',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            if(result.data.hasReward == true) {
                                await receiveReward(result.data.rewardId,result.data.rewardName,result.data.rewardInfo)
                            }
                        } else {
                            console.log(`果园点击树失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//果园-获得树干奖励
async function receiveReward(rewardId,rewardName,rewardInfo) {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    reqBody = `{"rewardId":"${rewardId}","userFruitId":"${userFruitId}","appId":"${blackArr[userIdx]['appId']}"}`
    encodeBody = encodeURIComponent(reqBody)
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/garden/api/v1_0/receiveReward',
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'request-body' : encodeBody,
                'Accept' : 'application/json, text/plain, */*',
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br',
                'token' : blackArr[userIdx]['token'],
                'Content-Type' : 'application/json;charset=utf-8',
                'Origin' : 'https://m.black-unique.com',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Referer' : 'https://m.black-unique.com/',
                'Connection' : 'keep-alive',
            },
            body: reqBody
        };
        $.post(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            console.log(`获得优惠券：${rewardName} -- ${rewardInfo}`)
                        } else {
                            console.log(`获取优惠券失败：${result.msg}`)
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//查询账户信息
async function userInfo() {
    console.log(`\n========= 账户${userIdx+1} 信息 =========`)
    notifyStr += `========= 账户${userIdx+1} 信息 =========\n`
    await getUserInfo()
    await userRebateInfo()
    await userTopInfo()
}

//查询现金余额
async function userRebateInfo() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let url = {
            url: 'https://pyp-api.chuxingyouhui.com/api/app/userCenter/v1/info',
            headers: {
                'Host' : 'pyp-api.chuxingyouhui.com',
                'Accept' : '*/*',
                'Accept-Language' : 'zh-Hans-CN;q=1',
                'token' : blackArr[userIdx]['token'],
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'black-token' : blackArr[userIdx]['black-token'],
                'Accept-Encoding' : 'gzip, deflate, br',
                'Connection' : 'keep-alive',
            },
        };
        $.get(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            totalMoney = 0
                            console.log(`【骑士卡号】：${result.data.userPointsResp.cardNo}`)
                            notifyStr += `【骑士卡号】：${result.data.userPointsResp.cardNo}\n`
                            console.log(`【现金余额】：${result.data.currencyBlanceResp.commission}元`)
                            notifyStr += `【现金余额】：${result.data.currencyBlanceResp.commission}元\n`
                            totalMoney += result.data.currencyBlanceResp.commission
                        } else {
                            console.log(`查询现金余额失败：${result.msg}`)
                            notifyStr += `查询现金余额失败：${result.msg}\n`
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//查询勋章余额
async function userTopInfo() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let url = {
            url: 'https://market.chuxingyouhui.com/promo-bargain-api/activity/mqq/api/indexTopInfo?appId='+blackArr[userIdx]['appId'],
            headers: {
                'Host' : 'market.chuxingyouhui.com',
                'Origin' : 'https://m.black-unique.com',
                'Accept-Encoding' : 'gzip, deflate, br',
                'Connection' : 'keep-alive',
                'black-token' : blackArr[userIdx]['black-token'],
                'Accept' : 'application/json, text/plain, */*',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'Referer' : 'https://m.black-unique.com/',
                'token' : blackArr[userIdx]['token'],
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
            },
        };
        $.get(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 200) {
                            console.log(`【勋章余额】：${result.data.score} ≈ ${result.data.score/10000}元`)
                            notifyStr += `【勋章余额】：${result.data.score} ≈ ${result.data.score/10000}元\n`
                            totalMoney += Math.floor(result.data.score/10000)
                            totalMoney = Math.floor(totalMoney * 100)/100
                            console.log(`【可提现余额】：${totalMoney}元`)
                            notifyStr += `【可提现余额】：${totalMoney}元\n`
                        } else {
                            console.log(`查询勋章余额失败：${result.msg}`)
                            notifyStr += `查询勋章余额失败：${result.msg}\n`
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

//查询勋章余额
async function getUserInfo() {
    let caller = printCaller()
    //rndtime = Math.round(new Date().getTime())
    return new Promise((resolve) => {
        let url = {
            url: 'https://facade-api.black-unique.com/user/common/v1/getUserInfo',
            headers: {
                'Host' : 'facade-api.black-unique.com',
                'Origin' : 'https://m.black-unique.com',
                'Accept-Encoding' : 'gzip, deflate, br',
                'Connection' : 'keep-alive',
                'black-token' : blackArr[userIdx]['black-token'],
                'Accept' : 'application/json, text/plain, */*',
                'User-Agent' : blackArr[userIdx]['User-Agent'],
                'Referer' : 'https://m.black-unique.com/',
                'token' : blackArr[userIdx]['token'],
                'Accept-Language' : 'zh-CN,zh-Hans;q=0.9',
            },
        };
        $.get(url, async (err, resp, data) => {
            try {
                if (err) {
                    console.log("Fucntion " + caller + ": API请求失败");
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        let result = JSON.parse(data);
                        if(logDebug) console.log(result);
                        if(result.code == 0) {
                            console.log(`【用户手机】：${result.data.phone}`)
                            notifyStr += `【用户手机】：${result.data.phone}\n`
                        } else {
                            console.log(`查询用户手机失败：${result.msg}`)
                            notifyStr += `查询用户手机失败：${result.msg}\n`
                        }
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}
////////////////////////////////////////////////////////////////////
function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == "object") {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

function printCaller(){
    return (new Error()).stack.split("\n")[2].trim().split(" ")[1]
}

function formatDateTime(inputTime) {
  var date = new Date(inputTime);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  return `${y}-${m}-${d}`;
};

function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
