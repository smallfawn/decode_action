#2024-07-19 11:17:46
import os
import requests
import time
import random
import re
from urllib.parse import urlparse,parse_qs,quote
from functools import wraps
import threading
from concurrent.futures import ThreadPoolExecutor,as_completed
import hashlib
if not ua:
 print("为什么不在脚本里面填ua!!!为什么??!!\n"*100)
 exit()
lock=threading.Lock()
def printf(m):
 with lock:
  print(m)
def version():
 print(requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text)
def get_bizlist():
 global bizlist
 try:
  bizlist=requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/bizlist.txt").text.replace('"','').replace(' ','').split(",")
  print(f"🎉️从云服务器加载检测文章配置成功")
 except:
  print("⛔️从云服务器加载检测文章配置失败")
  bizlist=[]
def get_setting():
 global list
 list='1,2,3,31,125,126,127,128'
 list=list.split(",")
 list=[int(i)for i in list]
def retry(exceptions,tries=5,delay=2,backoff=2):
 def decorator(func):
  @wraps(func)
  def wrapper(*args,**kwargs):
   _tries,_delay=tries,delay
   while _tries>1:
    try:
     return func(*args,**kwargs)
    except exceptions as e:
     print(f"发生错误:[{e}], Retrying in {_delay} ...")
     time.sleep(_delay)
     _tries-=1
     _delay*=backoff
   try:
    return func(*args,**kwargs)
   except:
    print("重试了还失败。重开得了")
    exit()
  return wrapper
 return decorator
class yuanshen():
 def __init__(self,cookie,num)->None:
  self.num=num
  self.cookie=cookie
  self.num_list=list
  if "=" in self.cookie:
   printf("ck格式错误 呆瓜，PHPSESSID=不要给我放进去，ok？")
   exit()
  self.biz_=bizlist
 @retry(exceptions=Exception,tries=5,delay=2,backoff=2)
 def getmain(self):
  headers={"Host":"h5.zxds25snvvw.cn","Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":ua,"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":f"PHPSESSID={self.cookie}"}
  url="http://h5.zxds25snvvw.cn/pipa_read?upuid=2220314"
  r=requests.get(url,headers=headers,allow_redirects=False)
  redirect_url=r.headers.get('Location')
  self.mainurl=urlparse(redirect_url).netloc
  printf(f"🎉️第[{self.num}]个账号获取到主域名[{self.mainurl}]")
 def readnum(self):
  try:
   url=f"http://{self.mainurl}/pipa_read/"
   r=requests.get(url,headers=self.h3).text
   match=re.search(r'今日已读(\d+)篇',r)
   if match:
    printf(f"第[{self.num}]个账号获取已读文章数成功")
    return int(match.group(1))
   else:
    printf(f"第[{self.num}]个账号获取已读文章数失败")
    return None
  except Exception as e:
   printf(f"第[{self.num}]个账号获取已读文章数失败{e}")
   return None
 def tuisong(self):
  url=f"https://wxpusher.zjiecode.com/api/send/message/?appToken={appToken}&topicId={topicIds}&content=检测文章%0A请在20秒内完成验证!%0A%3Cbody+onload%3D%22window.location.href%3D%27{quote(self.readurl)}%27%22%3E"
  r=requests.get(url).json()
  printf(f"🎉️第[{self.num}]个账号检测文章推送结果{r}")
 def getdoamin(self):
  try:
   url=f"http://{self.mainurl}/read_task/ggg3"
   r=requests.get(url,headers=self.h).json()
   kurl=r['jump'].replace('\\','')
   j=urlparse(kurl)
   fragment=kurl.split('#')[-1]
   self.domain=j.netloc
   match=re.search(r'iu=([^&]*)',fragment)
   self.iu=match.group(1)if match else None
   printf(f"🎉️第[{self.num}]个账号获取到阅读域名[{self.domain}][{self.iu}]")
   h={"Host":self.domain,"Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":ua,"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
   r=requests.get(kurl,headers=h).text
   md5=hashlib.md5(r.encode('utf-8')).hexdigest()
   printf(f"阅读域名校准值:[{md5}]")
   if md5!="c2b3d76c1a570d83b151742353bcab84":
    print("检测到接口代码发生变化，火速跑路，台子抓人了")
    exit()
   if "rd" not in kurl:
    print("检测到接口链接发生变化，火速跑路，台子抓人了")
    exit()
   match=re.search(r"var url = '(.*)'",r)
   if match:
    self.canshu=match.group(1)
    j=urlparse(self.canshu)
    self.canshu_domain=j.netloc
   else:
    printf(f"第[{self.num}]个账号获取参数失败")
  except Exception as e:
   printf(f"第[{self.num}]个账号获取到阅读域名失败{e} 不会是封号了吧叼毛")
   exit()
 def read(self):
  num=self.readnum()+1
  jkey=None
  while True:
   num+=1
   r=random.random()
   if jkey is None:
    url=f"{self.canshu}?iu={self.iu}&type=7&type=7&pageshow&r={r}"
   else:
    url=f"{self.canshu}?iu={self.iu}&type=7&type=7&pageshow&r={r}&jkey={jkey}"
   r=requests.get(url,headers=self.h2).json()
   try:
    jkey,self.readurl=r['jkey'],r['url']
    k=urlparse(self.readurl)
    printf(f"✅️第[{self.num}]个账号获取文章成功[{self.readurl}]")
    biz=parse_qs(k.query).get('__biz',[''])[0]if '__biz' in parse_qs(k.query)else ''
    if biz not in self.biz_:
     if num in self.num_list:
      printf(f"第[{self.num}]个账号触发强检，推送ing...")
      self.tuisong()
      time.sleep(random.randint(20,30))
     else:
      time.sleep(random.randint(9,18))
    else:
     printf(f"第[{self.num}]个账号遇到检测文章，推送ing...")
     self.tuisong()
     time.sleep(random.randint(20,30))
    printf(f"🎉️第[{self.num}]个账号第[{num}]篇文章阅读成功！")
    if 'error' in r['url']:
     printf(f"⛔️第[{self.num}]个账号第[{num}]篇文章阅读失败！[{r['url']}]大概是本轮已经读完了，一小时再来运行俺")
     break
   except:
    printf(f"⛔️第[{self.num}]个账号第[{num}]篇文章阅读失败！大概是本轮已经读完了，一小时再来运行俺")
    try:
     printf(f"⛔️第[{self.num}]个账号阅读失败原因：[{r['url']}]")
     url=f"http://{self.domain}/read_task/finish?iu={self.iu}&type=7,7&upuid=&_t=799888"
     r=requests.get(url,headers=self.h2)
     if r.status_code==200:
      printf(f"✅️第[{self.num}]个账号阅读任务完成！")
     else:
      printf(f"⛔️第[{self.num}]个账号阅读任务完成失败！")
     break
    except:
     printf(f"⛔️第[{self.num}]个账号阅读任务完成失败！未知错误")
 @retry(exceptions=Exception,tries=5,delay=2,backoff=2)
 def userinfo(self):
  h={"Host":f"{self.mainurl}","Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":ua,"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Referer":f"http://{self.mainurl}/pipa_read/user/","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":f"PHPSESSID={self.cookie}"}
  url=f"http://{self.mainurl}/withdrawal"
  r=requests.get(url,headers=h).text
  m=re.compile(r'<p class="withdraw-main-myinfo-money"><span>([\d\.]+)</span>')
  match=m.search(r)
  if match:
   printf(f"💰️第[{self.num}]个账号当前余额：[{float(match.group(1))/100}]")
   if float(match.group(1))/100>=withdrawal_money:
    url=f"http://{self.mainurl}/withdrawal/submit_withdraw"
    data={"channel":"wechat","money":f"{match.group(1)}"}
    r=requests.post(url,data=data,headers=self.h_2).json()
    if r['code']==0:
     printf(f"🎉️第[{self.num}]个账号提现[{float(match.group(1))/100}]成功[{r['msg']}]！")
    else:printf(f"⛔️第[{self.num}]个账号提现失败[{r['msg']}]！")
   else:printf(f"⛔️第[{self.num}]个账号当前余额不足[{withdrawal_money}],无法提现")
  else:printf(f"⛔️第[{self.num}]个账号获取余额失败！")
 def main(self):
  self.getmain()
  time.sleep(2)
  self.h={"Host":f"{self.mainurl}","Connection":"keep-alive","Accept":"*/*","User-Agent":ua,"X-Requested-With":"XMLHttpRequest","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":f"PHPSESSID={self.cookie}"}
  self.h_2={"Host":f"{self.mainurl}","Connection":"keep-alive","Accept":"*/*","X-Requested-With":"XMLHttpRequest","User-Agent":ua,"Content-Type":"application/x-www-form-urlencoded","Origin":f"http://{self.mainurl}","Referer":f"http://{self.mainurl}/withdrawal","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":f"PHPSESSID={self.cookie}"}
  self.getdoamin()
  time.sleep(2)
  print("======================")
  self.h2={"Host":self.canshu_domain,"Connection":"keep-alive","sec-ch-ua":"Chromium;v=118, Android","X-Requested-With":"XMLHttpRequest","sec-ch-ua-mobile":"?1","User-Agent":ua,"sec-ch-ua-platform":"Android","Accept":"*/*","Origin":f"http://{self.domain}","Sec-Fetch-Site":"cross-site","Sec-Fetch-Mode":"cors","Sec-Fetch-Dest":"empty","Referer":f"http://{self.domain}/","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
  self.h3={"Host":f"{self.mainurl}","Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":ua,"Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Referer":f"http://{self.mainurl}/pipa_read/user/","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":f"PHPSESSID={self.cookie}"}
  self.read()
  time.sleep(2)
  print("======================")
  self.userinfo()
  print("===================")
if __name__=='__main__':
 appToken=""
 topicIds=""
 version()
 get_setting()
 get_bizlist()
 if not appToken:
  appToken=os.getenv("yuanshen_apptoken")
  if not appToken:
   print("❌你还没有设置推送,请设置环境变量:yuanshen_apptoken")
   exit()
 if not topicIds:
  topicIds=os.getenv("yuanshen_topicid")
  if not topicIds:
   print("❌你还没有设置推送,请设置环境变量:yuanshen_topicid")
   exit()
 cookie=''
 if not cookie:
  cookie=os.getenv("yuanshen_yuer")
  if not cookie:
   print("请设置环境变量:yuanshen_yuer")
   exit()
 cookies=cookie.split("@")
 print(f"一共获取到{len(cookies)}个账号")
 if max_threads!=1:
  tasks=[]
  num=1
  with ThreadPoolExecutor(max_workers=max_threads)as executor:
   futures=[]
   for ck in cookies:
    task=yuanshen(ck,num)
    future=executor.submit(task.main)
    futures.append(future)
    time.sleep(10)
    num+=1
   results=[future.result()for future in as_completed(futures)]
  print("所有任务执行完毕")
 else:
  i=1
  for cookie in cookies:
   printf(f"\n--------开始第{i}个账号--------")
   main=yuanshen(cookie,i)
   main.main()
   printf(f"--------第{i}个账号执行完毕--------")
   time.sleep(20)
   i+=1
