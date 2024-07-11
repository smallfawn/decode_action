#2024-07-11 16:21:58
withdrawal_money=3000
import requests
import time
import os
from urllib.parse import urlparse,parse_qs,quote
import re
import random
import math
code="可乐阅读"
ver="1.4"
envname="yuanshen_klyd"
split_chars=['@','&','\n']
debug=False
debugcookie="b0c4fPHX7JPehO%2Fa0QqNW2xiVc%2BBrRiwd9EPFQYJ%2FlJLbdo%2FngG2mFGcoaqnkdOhAGuF31km6zj%2FgFK%2FSrCYIe3oKD%2FiIpWO1WQmIoy0tQm5Xn%2B17XsdjGrpjXKaTMD5c9vz8PeAM5Tn%2BCELwnjLC4wdV%2FGsW7rsiWgjVMuM2RQ"
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
  self.fuck_list=[1,2,126]
  self.biz_list=['MzkwNTY1MzYxOQ==','MzA3NzMzNjMwMQ==']
  self.cookies={"udtauth12":cookie}
 def tuisong(self):
  url=f"https://wxpusher.zjiecode.com/api/send/message/?appToken={appToken}&topicId={topicIds}&content=检测文章%0A请在20秒内完成验证!%0A%3Cbody+onload%3D%22window.location.href%3D%27{quote(self.readurl)}%27%22%3E"
  r=requests.get(url).json()
  print(f"🎉️检测文章推送结果{r}")
 def getmain(self):
  h={"Host":"m.zzyi4cf7z8.cn","Connection":"keep-alive","sec-ch-ua":"Chromium;v=122, Not(A:Brand;v=24, Android","sec-ch-ua-mobile":"?1","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220133 MMWEBSDK/20240404 MMWEBID/5295 MicroMessenger/8.0.49.2600(0x2800315A) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","sec-ch-ua-platform":"Android","Accept":"*/*","Origin":"https://zxrk0408154501-1317547672.cos.ap-nanjing.myqcloud.com","X-Requested-With":"com.tencent.mm","Sec-Fetch-Site":"cross-site","Sec-Fetch-Mode":"cors","Sec-Fetch-Dest":"empty","Referer":"https://zxrk0408154501-1317547672.cos.ap-nanjing.myqcloud.com/","Accept-Encoding":"gzip, deflate, br"}
  url='https://m.zzyi4cf7z8.cn/entry/new_ld'
  r=requests.get(url,headers=h).json()
  j=urlparse(r['jump'])
  self.mainurl='m.zzyi4cf7z8.cn'
  self.headers={"Host":self.mainurl,"Connection":"keep-alive","Accept":"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220133 MMWEBSDK/20240404 MMWEBID/5295 MicroMessenger/8.0.49.2600(0x2800315A) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","X-Requested-With":"XMLHttpRequest","Referer":f"http://{self.mainurl}/new?upuid=2306406","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  print(f"获取到主域名:[{self.mainurl}]")
 def getdomain(self):
  url=f'http://{self.mainurl}/tuijian?url='
  r=requests.get(url,headers=self.headers,cookies=self.cookies).json()
  if r['code']==0:
   self.today_num=int(r["data"]["infoView"]["num"])
   try:
    print(r["data"]["infoView"]["msg"])
    return False
   except:
    pass
  try:
   url=f'http://{self.mainurl}/new/bbbbb'
   r=requests.get(url,headers=self.headers,cookies=self.cookies)
   self.domain=r.json()['jump']
   j=urlparse(self.domain)
   p=parse_qs(self.domain.split('?')[1])
   self.iu=p.get('iu',[None])[0]
   self.domain_url=j.netloc
   print(f"获取域名成功:[{self.domain_url}][{self.iu}]")
   self.readh={"Host":self.domain_url,"Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220133 MMWEBSDK/20240404 MMWEBID/5295 MicroMessenger/8.0.49.2600(0x2800315A) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
   print("="*30)
   return True
  except:
   print("发生未知错误 获取域名失败")
   exit()
 def read(self):
  r=requests.get(self.domain,headers=self.readh)
  pattern=r"var url\d* = '([^']+)'"
  matches=re.findall(pattern,r.text)
  if matches:
   self.domain2=matches[0]
   j=urlparse(self.domain2)
   self.domain2_url=j.netloc
   print(f"获取阅读域名成功:[{self.domain2}]")
   self.readh2={"Host":self.domain2_url,"Connection":"keep-alive","sec-ch-ua":"Chromium;v=122, Not(A:Brand;v=24, Android","X-Requested-With":"XMLHttpRequest","sec-ch-ua-mobile":"?1","User-Agent":"Mozilla/5.0 (Linux; Android 14; 23113RKC6C Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220133 MMWEBSDK/20240404 MMWEBID/5295 MicroMessenger/8.0.49.2600(0x2800315A) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64","sec-ch-ua-platform":"Android","Accept":"*/*","Origin":"http://ng1230000001-1316100359.cos.ap-nanjing.myqcloud.com","Sec-Fetch-Site":"cross-site","Sec-Fetch-Mode":"cors","Sec-Fetch-Dest":"empty","Referer":"http://ng1230000001-1316100359.cos.ap-nanjing.myqcloud.com/","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  else:
   print("发生未知错误 获取阅读域名失败")
   exit()
  print(f"今日已读:[{self.today_num}]篇文章")
  jkey=None
  time.sleep(random.randint(2,5))
  while True:
   r=random.random()
   if jkey is None:
    url=f"{self.domain2}?iu={self.iu}&pageshow&r={r}"
   else:
    url=f"{self.domain2}?iu={self.iu}&pageshow&r={r}&jkey={jkey}"
   r=requests.get(url,headers=self.readh2).json()
   try:
    jkey=r["jkey"]
    self.readurl=r['url']
   except:
    print(f"获取文章链接失败[{r}]")
    break
   print(f"第[{self.today_num}]次获取文章成功:[{r['url']}]")
   k=urlparse(self.readurl)
   biz=parse_qs(k.query).get('__biz',[''])[0]if '__biz' in parse_qs(k.query)else ''
   if biz in self.biz_list or self.today_num in self.fuck_list:
    print('遇到检测文章，推送ing....')
    self.tuisong()
    time.sleep(random.randint(20,26))
   else:
    time.sleep(random.randint(8,18))
   self.today_num+=1
 def userinfo(self):
  url=f'http://{self.mainurl}/tuijian?url='
  r=requests.get(url,headers=self.headers,cookies=self.cookies).json()
  if r['code']==0:
   gold=float(r['data']['user']['score'])*100
   print(f'今日已赚金币:[{float(r["data"]["infoView"]["score"])*100}]\n当前账号剩余金币:[{gold}] = [{gold/10000}]元')
   if gold>=withdrawal_money:
    self.withdrawal()
   else:
    print(f"金币余额不足[{withdrawal_money}] 不提现")
  else:
   print(f"查询个人余额失败:[{r}]")
 def withdrawal(self):
  url=f'http://{self.mainurl}/withdrawal'
  r=requests.get(url,headers=self.headers,cookies=self.cookies).json()
  if r['code']==0:
   score=math.floor(float(r['data']['user']['score']))
   data={'amount':score,'type':'wx'}
   url=f'http://{self.mainurl}/withdrawal/doWithdraw'
   r=requests.post(url,data=data,headers=self.headers,cookies=self.cookies)
   print(f"提现结果:[{r.text}]")
 def main(self):
  self.getmain()
  time.sleep(random.randint(2,5))
  if self.getdomain():
   self.read()
  self.userinfo()
if __name__=='__main__':
 appToken=''
 topicIds=''
 if debug:
  appToken='AT_hlSclrcFUoJIk6JcAtGqZCiyB8lnDkBa'
  topicIds='24878'
 if not appToken or not topicIds:
  appToken=os.getenv('yuanshen_apptoken')
  topicIds=os.getenv('yuanshen_topicid')
  if not appToken or not topicIds:
   print("❌你还没有设置推送,请设置环境变量:yuanshen_topicid和yuanshen_apptoken")
   exit()
 env()
