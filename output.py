#2025-08-08 23:55:46
import json 
import requests 
import random 
import string 
import time 
import os 
def random_str():
 OO0000OOO0O000O00=["辞旧迎新越龙年。","通过辛勤工作获得财富才是人生的大快事。","黄金时代是在我们的前面，而不在我们的后面。","没有了理想，青春之花也便凋谢了。","别人能做到的事，自己也可以做到。","只有忍得住寂寞，才能够见明日的繁华。","给一中最好的回报就是交一份完美的答卷。","人生没有绝对精彩，雨后或许没有彩虹，但后退一步确是失败。","一切真实的感知，都是由汗水和泪水换来的。","当自己想放弃的时就想想当初为什么要坚持。","永远不会有任何人能代替你，这就是遗憾旳滋味。","坚持不懈，持之以恒，奋力拼搏，成就梦想。","志之所趋，无远勿届；志之所向，无坚不摧。","诚心诚意，诚字的另一半就是成功。","死的方式由上帝决定，活的方式由自己决定！","苦于现在，甜与未来，没有克服不了的困难。","被山花野草迷住的人，永远也登不上风光无限，近在眼前的顶峰。","我们的梦想只能看着明天的太阳，路很长，我们只有望向远方。","我们可以自己长得不漂亮，但绝对不能让自己的人生不漂亮。","成功的法则极为简单，但简单并不代表容易。","重要的不是要得到什么，是珍重已经拥有的。","自己的人生自己导演，自己的未来自己创造。","世界上没有绝对幸福圆满的婚姻，幸福只是来自于无限的容忍与互相尊重。","青春是使用意志和拼搏酿成的琼浆。","积极思考造成积极人生，消极思考造成消极人生。","虽然不能变过去，但是可以改变将来。","今日的努力，是为了不再重复痛苦的过去。","还记得最初的梦想吗？那就努力吧。","与其用泪水悔恨昨天，不如用汗水拼搏明天。","既然梦想在远方，那就努力去追赶。","不拼尽最后一丝力气，怎能确定你不行。","宝剑锋从磨砺出，梅花香自苦寒来。在逆境中拼搏，在逆境中奋斗。","我不怕自己努力了不成功，我只怕比我成功的人，比我更努力。","愚者用肉体监视心灵，智者用心灵监视肉体。","只有付出别人不愿付出的努力，才能得到别人的不到的收获。","无情岁月増中减，有味青春苦后甜。集雄心壮志，创锦绣前程。","只有坚持不断努力，才能进步。","步浩然：向竞争挑战，向压力挑战，更要向自己挑战时间就是一切。","珍惜现在的时光，每一天都可能决定你的未来。","空空的口袋不能阻碍你的未来，空空的.脑袋你将永远贫穷。","切莫垂头丧气，即使失去了一切，你还握有未来。","你想成为哪类人，并不取决于你的能力，而是取决于你的选择。","目标不是超过别人，是超过自己。想要得到的不是成绩而是知识。","学习如一粒种子，只有努力播种才会有收获。","卓越的人一大优点是：在不利与艰难的遭遇里百折不挠。","只要一个人还有追求，他就没有老；直到后悔取代了梦想，一个人才算老。","任何一种处境，无论是好是坏，都受到我们对待处境的态度的影响。","滴水能把石穿透，万事功到自然成。努力吧。","只求在多年后的今天回想今日，不要留下遗憾。","先飞的都不是笨鸟，只有笨鸟才不肯先飞。","天道酬勤再现辉煌王者风，闻鸡起舞成就拼搏劲旅师。","如果你曾歌颂黎明，那么也请你拥抱黑夜。","别人怎么对你，你用相同的态度回应就是了；人生，多欲者累，寡欲者安，无欲者刚。","自然界没有风风雨雨，大地就不会春华秋实。","做最好的今天，回顾最好的昨天，迎接最美好的明天。","能把在面前行走的机会抓住的人，十有八九都会成功。","世界是真的，付出都是值得的。","用辛勤的汗水浇灌成功，用智慧的结晶拼搏高考。","即使爬到最高的山上，一次也只能脚踏实地地迈一步。","生活会苦一阵子，但不会苦一辈子。","生活熬过苦难，才有回忆的笑谈。愿你成为自己的太阳，无需凭借谁的光。","比我差的人还没放弃，比我好的人仍在努力，我就更没资格说我无能为力！","有的人生来就不需要任何原谅，因为他们不论有多少次机会都没点改进。","绝大多数人，在绝大多数时候，都只能靠自己。","当你知道你不在是你的时候，你才是真正的你！","充沛的精力加上顽强的决心，曾经创造出许多奇迹。","每一枝玫瑰都有刺正如每个人的性格里都有你不能容忍的部分。","作为祖国的希望，请让我们抛洒血汗奋斗进取，燃烧青春的辉煌，那么有朝一日天鹏展翅冲灵霄之时，回首俯视，我们会因自己奋进过而无怨无悔！","快乐要懂得分享，才能加倍的快乐。","你可以遗憾，但是你绝对不能后悔。遗憾证明你努力过了，只是力有不逮。而后悔，只能说明你当时没努力过。","要记得，无论现在多么痛苦，在未来也一定会有让你开怀大笑的事情在等着。","你只看到我是带刺的仙人掌，却没见过我艳绝人寰的绽放。每一个平凡又普通的我们，没有富贵的出身，也没有傲人的外貌，只能靠自己的努力奋斗在这个残酷的世界上生存下去。但是不要灰心，总有一天我们会像仙人掌一样，怒放生命的绚丽。","人的最高尚行为除了传播真理外，就是公开放弃错误。","每个优秀的人，都有一段沉默的时光。那一段时光，是付出了很多努力，日后说起时，连自己都能被感动的日子。","保护好你的梦想，等到它开花结果的那天，它会让你俯视所有曾经看低你的人。","能让你精致的，除了化妆品，最厉害的是知识、努力和爱。","宁可清贫自乐，不可浊富多忧。","顽强的毅力，改变可以征服世界上任何一座高峰。","选择自己所爱的，爱自己所选择的。","没有了爱的语言，所有的文字都是乏味的。","纠结过去，担心未来，都不如抓住当下。过去是梦，未来是影，现在才是真真切的人生。","命运就像自己的掌纹，虽然弯弯曲曲，却永远掌握在自己手中。","嘴里说的人生，就是自己以后的人生。","我始终相信一句话，只有自己强大，才不会被别人践踏。","不苦不累，生活无味；不拼不搏，等于白活。","不要等待机会，而要创造机会。","生活不可能像你想的那么美好，但也不会像你想的那么糟。","有些人看起来原谅你了，可你已经是陌生人了。","相信自己能力的人，任何事情都能够做到。","励志是给人快乐，激励是给人痛苦。","无论未来的每一天，是什么样子，都是我自己的选择，按照自己的选择来生活，是送给自己最好的礼物。","一份耕耘，份收获，努力越大，收获越多，奋斗！奋斗！奋斗！","生活，匀速的是爱，不匀速则变成一种伤害。","生活中若没有朋友，就像生活中没有阳光一样。","奋斗，是成功路上不可避免的。植物以其可以获得新生。我们如果能真正做到这两字的话，那么祖国的未来会为我们更加强大！","任何一个人，失去了另一个人，都会活得一如既往。","没有退路的时候，正是潜力发挥最大的时候。","感觉活着真好，生死也就是一秒钟的事，一件事，想通了是天堂，想不通就是地狱。既然活着，就要好好活着。","最热烈的火焰，冰封在最沉默的火山深处。","人生便是一只风筝，只有努力向上飞的那只，才能成为天之骄子。",]
 OOOOOOOOO00O00O00=[OOO0OOO000O0O0OO0[:-1]for OOO0OOO000O0O0OO0 in OO0000OOO0O000O00]
 return random.choice(OOOOOOOOO00O00O00)
def generate_random_id():
 O0O000OO0O0OO0O0O=''.join(random.choices(string.ascii_uppercase,k=6))
 OO0O00O0OO0OO00O0=int(time.time()*1000)
 O00OO0O0OO0O0O00O=O0O000OO0O0OO0O0O+str(OO0O00O0OO0OO00O0)
 return O00OO0O0OO0O0O00O 
def get_task_list(O00OO00O00O0O00O0):
 OO0OO000OOO0OO0O0={"service":"media","api":"spreadActivity/getAppUserSpreadActivity","data":{"content":"null"},"userDevice":{"os":"9","deviceBrand":"Xiaomi","deviceId":"539d3978e1ece976","equipmentId":"539d3978e1ece976","deviceType":"Xiaomi MI 6","device":"android","clientVersion":"5.0.1"},"traceId":f"{generate_random_id()}","token":f"{O00OO00O00O0O00O0}"}
 OOO00O0000O00O00O={"Accept":"application/json","Accept-Language":"zh-cn","Connection":"Keep-Alive","Content-Length":str(len(OO0OO000OOO0OO0O0)),"Content-Type":"application/json; Charset=UTF-8","Host":"app.eyh.cn","Referer":"https://app.eyh.cn/gateway/api","User-Agent":"okhttp/5.0.0-alpha.2"}
 OO0OO000OOO0OO0O0=json.dumps(OO0OO000OOO0OO0O0)
 O0O000000O00OO000=requests.post(url=url,headers=OOO00O0000O00O00O,data=OO0OO000OOO0OO0O0)
 if O0O000000O00OO000.status_code==200:
  O0O000000O00OO000=O0O000000O00OO000.json()
  O0000O000000O0000=[]
  for OO000O00OO00OO000 in O0O000000O00OO000['data']['spreadArticleVoList']:
   print(OO000O00OO00OO000['articleId'])
   O0000O000000O0000.append(OO000O00OO00OO000['articleId'])
  print(f"一共有 【{len(O0000O000000O0000)}】个任务")
  return O0000O000000O0000 
 else:
  print(O0O000000O00OO000.text)
def complete_comment_task(O00OO0OOO0O0O0OOO,O0000OO0O0OO0OO00):
 O00000OO0O00O00O0={"service":"media","api":"article/saveComment","data":{"articleId":int(O00OO0OOO0O0O0OOO),"content":f"{random_str()}","isSpreadActivity":"1"},"userDevice":{"os":"9","deviceBrand":"Xiaomi","deviceId":"539d3978e1ece976","equipmentId":"539d3978e1ece976","deviceType":"Xiaomi MI 6","device":"android","clientVersion":"5.0.1"},"traceId":f"{generate_random_id()}","token":f"{O0000OO0O0OO0OO00}"}
 O00000OO0O00O00O0=json.dumps(O00000OO0O00O00O0).encode("utf-8")
 O00O0O0O0OO00O0O0={"Content-Type":"application/json; charset=utf-8","Content-Length":str(len(O00000OO0O00O00O0)),"Host":"app.eyh.cn","Connection":"Keep-Alive","Accept-Encoding":"gzip","User-Agent":"okhttp/5.0.0-alpha.2"}
 OOO000O00000O0000={OO00OOO0OO000OO0O:OO000O00O0O0O0O0O.encode('utf-8')for OO00OOO0OO000OO0O,OO000O00O0O0O0O0O in O00O0O0O0OO00O0O0.items()}
 O00O0000O0OOOOOOO=requests.post(url=url,headers=OOO000O00000O0000,data=O00000OO0O00O00O0)
 if O00O0000O0OOOOOOO.status_code==200:
  print("评论完成")
def complete_like_task(O0OO000O000O00OOO,O000000OOO00O00OO):
 OOO0O0000O00OOO0O={"service":"media","api":"article/savePraiseLog","data":{"articleId":int(O0OO000O000O00OOO),"isSpreadActivity":"1","content":"null"},"userDevice":{"os":"9","deviceBrand":"Xiaomi","deviceId":"539d3978e1ece976","equipmentId":"539d3978e1ece976","deviceType":"Xiaomi MI 6","device":"android","clientVersion":"5.0.1"},"traceId":f"{generate_random_id()}","token":f"{O000000OOO00O00OO}"}
 OO0O0OOOO0OOOOOOO={"Accept":"application/json","Accept-Language":"zh-cn","Connection":"Keep-Alive","Content-Length":str(len(OOO0O0000O00OOO0O)),"Content-Type":"application/json; Charset=UTF-8","Host":"app.eyh.cn","Referer":"https://app.eyh.cn/gateway"}
 OO0O0O0O0O0OO0000=requests.post(url=url,headers=OO0O0OOOO0OOOOOOO,data=json.dumps(OOO0O0000O00OOO0O))
 if OO0O0O0O0O0OO0000.status_code==200:
  print(OO0O0O0O0O0OO0000.json())
def complete_read_task(OOO0OOOOO000O000O,O0OO00O0000O0O0O0):
 O00OO00OOOO000000={"service":"media","api":"column/readArticle","data":{"articleId":int(OOO0OOOOO000O000O),"isSpreadActivity":"1","content":"null"},"userDevice":{"os":"9","deviceBrand":"Xiaomi","deviceId":"539d3978e1ece976","equipmentId":"539d3978e1ece976","deviceType":"Xiaomi MI 6","device":"android","clientVersion":"5.0.1"},"traceId":f"{generate_random_id()}","token":f"{O0OO00O0000O0O0O0}"}
 OO0000O0OOOO00000={"Accept":"application/json","Connection":"Keep-Alive","Content-Length":str(len(O00OO00OOOO000000)),"Content-Type":"application/json; Charset=UTF-8","Host":"app.eyh.cn","Referer":"https://app.eyh.cn/gateway/api","User-Agent":"okhttp/5.0.0-alpha.2"}
 OO000O00OOOOOOOOO=requests.post(url,headers=OO0000O0OOOO00000,data=json.dumps(O00OO00OOOO000000))
 if OO000O00OOOOOOOOO.status_code==200:
  print(OO000O00OOOOOOOOO.json())
def complete_share_task(O00O00OO00O00OO0O,OOOOO0OO0O00OOOOO):
 OO0O0OOO00OOO00OO={"Accept":"application/json","Accept-Language":"zh-cn","Connection":"Keep-Alive","Content-Length":"372","Content-Type":"application/json; Charset=UTF-8","Host":"app.eyh.cn","Referer":"https://app.eyh.cn/gateway/api","User-Agent":"okhttp/5.0.0-alpha.2"}
 O0O00OOOOOO000OO0={"service":"media","api":"article/saveShareLog","data":{"articleId":int(O00O00OO00O00OO0O),"isSpreadActivity":"1","content":"null"},"userDevice":{"os":"9","deviceBrand":"Xiaomi","deviceId":"539d3978e1ece976","equipmentId":"539d3978e1ece976","deviceType":"Xiaomi MI 6","device":"android","clientVersion":"5.0.1"},"traceId":f"{generate_random_id()}","token":f"{OOOOO0OO0O00OOOOO}"}
 OO00OO0O00O00OO00=requests.post(url,headers=OO0O0OOO00OOO00OO,data=json.dumps(O0O00OOOOOO000OO0))
 if OO00OO0O00O00OO00.status_code==200:
  print(OO00OO0O00O00OO00.json())
def lottery_draw(O000OOO00OO000O0O):
 OOO0OO0000OO0000O={"Accept":"application/json","Accept-Language":"zh-cn","Connection":"Keep-Alive","Content-Length":"380","Content-Type":"application/json; Charset=UTF-8","Host":"app.eyh.cn","Referer":"https://app.eyh.cn/gateway/api","User-Agent":"okhttp/5.0.0-alpha.2"}
 OO00OOOO0OO0OOO00={"service":"media","api":"lottery/lotteryActivityAward","data":{"uid":"30a7f9016d224fc2a8367200cbbab62a","content":"null"},"userDevice":{"os":"9","deviceBrand":"Xiaomi","deviceId":"539d3978e1ece976","equipmentId":"539d3978e1ece976","deviceType":"Xiaomi MI 6","device":"android","clientVersion":"5.0.1"},"traceId":f"{generate_random_id()}","token":f"{O000OOO00OO000O0O}"}
 for OOO000O0OO00OOOO0 in range(0,3):
  print(f"第{OOO000O0OO00OOOO0+1}次抽奖")
  O00OO0O0O000OO00O=requests.post(url,headers=OOO0OO0000OO0000O,data=json.dumps(OO00OOOO0OO0OOO00))
  if O00OO0O0O000OO00O.status_code==200:
   O00OO0O0O000OO00O=O00OO0O0O000OO00O.json()
   if '已用完'in O00OO0O0O000OO00O['message']:
    print(O00OO0O0O000OO00O)
    break 
   else:
    try:
     print(O00OO0O0O000OO00O['data']['description'])
    except:
     print(O00OO0O0O000OO00O)
  OO00000OO0OOOOOO0=random.uniform(3,5)
  print(f"随机延迟:{OO00000OO0OOOOOO0}秒")
  time.sleep(OO00000OO0OOOOOO0)
 print("抽奖结束")
def print_ascii_art():
 print("// ┏┓   ┏┓")
 print("// ┏┛┻━━━┛┻┓")
 print("// ┃       ┃")
 print("// ┃   ━   ┃")
 print("// ┃ ┳┛ ┗┳ ┃")
 print("// ┃       ┃")
 print("// ┃   ┻   ┃")
 print("// ┃       ┃")
 print("// ┗━┓   ┏━┛")
 print("// ┃   ┃ 分享群：")
 print("// ┃   ┃ 826307062")
 print("// ┃   ┗━━━┓")
 print("// ┃       ┣┓")
 print("// ┃       ┏┛")
 print("// ┗┓┓┏━┳┓┏┛")
 print("// ┃┫┫ ┃┫┫")
 print("// ┗┻┛ ┗┻┛")
if __name__=="__main__":
 print_ascii_art()
 url=r'https://app.eyh.cn/gateway/api'
 raw_token=os.environ.get('Look_at_Yuhang')
 if comment==1:
  print("开启评论任务")
 else:
  print("不做评论任务")
 if raw_token:
  delimiter="&"
  if delimiter not in raw_token:
   delimiter="\n"
  token_list=raw_token.split(delimiter)
  print(f"共找到{len(token_list)}个账号")
  for index,token in enumerate(token_list):
   print(f"当前执行第{index+1}个账号")
   articleId=get_task_list(token)
   for i in articleId:
    print(i)
    complete_read_task(i,token)
    sleep_random=random.uniform(3,5)
    print(f"随机延迟:{sleep_random}秒")
    time.sleep(sleep_random)
    complete_like_task(i,token)
    sleep_random=random.uniform(3,5)
    print(f"随机延迟:{sleep_random}秒")
    time.sleep(sleep_random)
    complete_share_task(i,token)
    sleep_random=random.uniform(3,5)
    print(f"随机延迟:{sleep_random}秒")
    time.sleep(sleep_random)
    if comment==1:
     complete_comment_task(i,token)
     complete_like_task(i,token)
     sleep_random=random.uniform(3,5)
     print(f"随机延迟:{sleep_random}秒")
     time.sleep(sleep_random)
   print("任务完成，准备抽奖"+"\n")
   lottery_draw(token)
   sleep_random=random.uniform(10,30)
   print(f"随机延迟:{sleep_random}秒")
   time.sleep(sleep_random)
 else:
  print("\n"+"没找到数据，请检查是否设置<Look_at_Yuhang>变量与值"+"\n")
