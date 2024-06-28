import requests
import os
import time
import random
from urllib.parse import urlparse,parse_qs,quote
import re
code="点点赚"
ver="1.1"
envname="yuanshen_ddz"
split_chars=['@','&','\n']
debug=False
debugcookie=""
def env(*args,**kwargs):
 def split_cookies(cookie,split_chars):
  for sep in split_chars:
   if sep in cookie:
    return cookie.split(sep)
  return[cookie]
 def scmain(cookies):
  for i,cookie in enumerate(cookies,1):
   print(f"--------开始第{i}个账号--------")
   main=yuanshen(cookie)
   main.main()
   print(f"--------第{i}个账号执行完毕--------")
   time.sleep(random.randint(10,20))
 if not os.getenv(envname)and not debug:
  print(f"请先设置环境变量[{envname}]")
  exit()
 cookie=os.getenv(envname,"")
 if debug:
  cookie=debugcookie
 try:
  print(requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text,"\n\n\n")
 except:
  print("网络异常,链接公告服务器失败(gitee)，请检查网络")
  exit()
 cookies=split_cookies(cookie,split_chars)
 account_count=len(cookies)
 print(f"一共获取到{account_count}个账号")
 print(f"=========🔔开始执行[{code}][{ver}]=========\n")
 start_time=time.time()
 if debug:
  scmain(cookies)
 else:
  try:
   scmain(cookies,*args,**kwargs)
  except Exception as e:
   print(f"脚本执行出错: {e}")
 end_time=time.time()
 execution_time=end_time-start_time
 print(f"\n============🔔脚本[{code}]执行结束============")
 print(f"本次脚本总运行时间: [{execution_time:.2f}] 秒")
class yuanshen:
 def __init__(self,cookie)->None:
  self.headers={"Host":"40417611257.sx.shuxiangby.cn","Connection":"keep-alive","Accept":"*/*","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220099 MMWEBSDK/20240404 MMWEBID/98 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","X-Requested-With":"XMLHttpRequest","Referer":"http://40417611257.sx.shuxiangby.cn/index/mob/index.html","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  self.headers2={"Host":"40417611257.sx.shuxiangby.cn","Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220099 MMWEBSDK/20240404 MMWEBID/98 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Referer":"http://40417611257.sx.shuxiangby.cn/index/mob/mine.html","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  self.cookie={"user_openid":f"{cookie.split('#')[0]}","uid":f"{cookie.split('#')[1]}","PHPSESSID":f"{cookie.split('#')[2]}"}
  self.uid=cookie.split('#')[1]
 def extract_url(self,url):
  parsed_url=urlparse(url)
  full_domain=parsed_url.netloc
  query_params=url.split('?')[1]
  if not query_params:
   query_params=None
  return full_domain,query_params
 def push(self):
  url=f"https://wxpusher.zjiecode.com/api/send/message/?appToken={appToken}&topicId={topicIds}&content=检测文章%0A请在20秒内完成验证!%0A%3Cbody+onload%3D%22window.location.href%3D%27{quote(self.acturl)}%27%22%3E"
  r=requests.get(url).json()
  print(f"🎉️账号检测文章推送结果{r}")
 def getreadurl(self):
  url="http://40417611257.sx.shuxiangby.cn/index/mob/get_read_qr.html"
  r=requests.get(url,headers=self.headers,cookies=self.cookie).json()
  if r['code']==1:
   url_pattern=r"http[s]?://[^\s]+"
   urls=re.findall(url_pattern,r['web_url'])
   self.domain,self.readcode=self.extract_url(urls[0])
   if urls:
    print(f"🔔获取到阅读链接: [{self.domain}][{self.readcode}]")
    self.readh={"Host":f"{self.domain}","Connection":"keep-alive","Content-Length":"47","Accept":"*/*","X-Requested-With":"XMLHttpRequest","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220099 MMWEBSDK/20240404 MMWEBID/5295 MicroMessenger/8.0.49.2600(0x28003159) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","Origin":f"http://{self.domain}","Referer":f"http://{self.domain}/?{self.readcode}","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
    return True
   else:
    print("❌️未获取到阅读链接")
    return False
  else:
   print(f"❌️未获取到阅读链接[{r}]")
   return False
 def read(self):
  url=f"http://{self.domain}/index/index/get_article.html"
  url2=f"http://{self.domain}/index/index/auth_record.html"
  cookie={"thinkphp_show_page_trace":"0|0"}
  while True:
   data={'code':self.readcode,'uid':self.uid}
   r=requests.post(url,headers=self.readh,data=data,cookies=cookie).json()
   if r['code']==1:
    self.acturl=r["data"]["info"]["link2"]
    rid=int(r['data']['info']['rid'])
    print(f"🎉获取文章成功: [{r['msg']}]")
    if 'addtime' not in r['data']['info']:
     print("遇到检测文章 推送ing...")
     self.push()
     time.sleep(random.randint(18,28))
    else:
     time.sleep(random.randint(9,18))
   else:
    print(f"❌️获取文章失败: [{r}]")
    break
   data={'rid':rid,'time_is_gou':1}
   r=requests.post(url2,headers=self.readh,data=data,cookies=cookie).json()
   if r['code']==1:
    print(f"🎉第[{r['txt']}]篇文章阅读成功")
   else:
    print(f"❌️阅读文章失败: [{r['msg']}]")
    if '完成' in r['msg']:
     url=f"http://{self.domain}/index/index/read_result.html"
     data={'code':self.readcode}
     r=requests.post(url,headers=self.readh,data=data,cookies=cookie).json()
     if r['code']==1:
      print(f"🔔结束阅读成功: [{r['msg']}]")
     else:
      print(f"❌️结束阅读失败: [{r}]")
    break
   time.sleep(random.randint(2,5))
 def userinfo(self):
  url='http://40417611257.sx.shuxiangby.cn/index/mob/index.html'
  r=requests.get(url,headers=self.headers2,cookies=self.cookie)
  if r.status_code==200:
   match=re.search(r'(?<=可用积分：)\d+',r.text)
   if match:
    points=int(match.group())
    print(f"🔔当前账号剩余积分:[{points}]=[{points/10000}]元💵")
   else:
    print("❌️没有获取到积分❌️")
 def main(self):
  if not self.getreadurl():
   return
  time.sleep(random.randint(3,5))
  self.read()
  time.sleep(random.randint(3,5))
  print("======================================")
  self.userinfo()
if __name__=='__main__':
 appToken=''
 topicIds=''
 if not appToken or not topicIds:
  appToken=os.getenv("yuanshen_apptoken")
  topicIds=os.getenv("yuanshen_topicid")
 if not appToken or not topicIds:
  print("请先配置appToken和topicIds")
  exit()
 env()
