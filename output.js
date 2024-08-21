//Wed Aug 21 2024 13:33:09 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x12dc06 = function () {
    let _0xd18a68 = true;
    return function (_0x9ca5af, _0x27dbf8) {
      const _0x466ee7 = _0xd18a68 ? function () {
        if (_0x27dbf8) {
          const _0x10de97 = _0x27dbf8.apply(_0x9ca5af, arguments);
          _0x27dbf8 = null;
          return _0x10de97;
        }
      } : function () {};
      _0xd18a68 = false;
      return _0x466ee7;
    };
  }(),
  _0x4b2f66 = _0x12dc06(this, function () {
    const _0x4f5e7a = function () {},
      _0x304ebf = function () {
        let _0x2718d8;
        try {
          _0x2718d8 = Function("return (function() {}.constructor(\"return this\")( ));")();
        } catch (_0x3f072e) {
          _0x2718d8 = window;
        }
        return _0x2718d8;
      },
      _0x2cd8eb = _0x304ebf();
    if (!_0x2cd8eb.console) {
      _0x2cd8eb.console = function (_0x59bc35) {
        const _0x39a4cc = {
          log: _0x59bc35,
          warn: _0x59bc35,
          debug: _0x59bc35,
          info: _0x59bc35,
          error: _0x59bc35,
          exception: _0x59bc35,
          table: _0x59bc35,
          trace: _0x59bc35
        };
        return _0x39a4cc;
      }(_0x4f5e7a);
    } else {
      _0x2cd8eb.console.log = _0x4f5e7a;
      _0x2cd8eb.console.warn = _0x4f5e7a;
      _0x2cd8eb.console.debug = _0x4f5e7a;
      _0x2cd8eb.console.info = _0x4f5e7a;
      _0x2cd8eb.console.error = _0x4f5e7a;
      _0x2cd8eb.console.exception = _0x4f5e7a;
      _0x2cd8eb.console.table = _0x4f5e7a;
      _0x2cd8eb.console.trace = _0x4f5e7a;
    }
  });
_0x4b2f66();
"use strict";
const Controller = require("egg").Controller,
  fs = require("fs");
const path = require("path"),
  sharp = require("sharp");
class AdminController extends Controller {
  async login() {
    await this.ctx.render("admin/login.pug", {
      title: "登录后台",
      info: this.ctx.flash
    });
  }
  async category() {
    const _0x4739b4 = await this.ctx.model.Category.find();
    await this.ctx.render("admin/category.pug", {
      categories: _0x4739b4,
      title: "分类管理"
    });
  }
  async addcategory() {
    const {
        titles
      } = this.ctx.request.body,
      _0x4c4792 = titles.split(",");
    let _0x54d755 = [];
    _0x54d755 = _0x54d755.concat(_0x4c4792);
    for (let _0x116c75 = 0; _0x116c75 < _0x54d755.length; _0x116c75++) {
      const _0x51f747 = _0x54d755[_0x116c75];
      await this.ctx.model.Category.create({
        title: _0x51f747
      });
    }
    this.ctx.body = {
      success: 1
    };
  }
  async apigetcategory() {
    const {
        id
      } = this.ctx.request.query,
      _0x51e60c = await this.ctx.model.Category.findById(id);
    this.ctx.body = {
      success: 1,
      category: _0x51e60c
    };
  }
  async apipostcategory() {
    const {
      id,
      title
    } = this.ctx.request.body;
    await this.ctx.model.Category.updateOne({
      _id: id
    }, {
      $set: {
        title: title
      }
    });
    this.ctx.body = {
      success: 1
    };
  }
  async apichangecategory() {
    const {
      id,
      categoryid
    } = this.ctx.request.body;
    await this.ctx.model.Movie.updateOne({
      _id: id
    }, {
      $set: {
        categoryid: categoryid
      }
    });
    this.ctx.body = {
      success: 1
    };
  }
  async postlogin() {
    const {
        email,
        password
      } = this.ctx.request.body,
      _0x5657d4 = this.config.admin.authcode;
    if (_0x5657d4.length !== 10) {
      return this.ctx.redirect("https://www.efvcms.com/tip");
    }
    let _0x41f2bc;
    const _0x2fbdf6 = Date.now(),
      _0x2830de = this.ctx.service.ffmpeg.cryptoCode(_0x5657d4, _0x2fbdf6, 1),
      _0x4376aa = this.ctx.service.ffmpeg.cryptoCode(_0x5657d4, _0x2fbdf6, 0);
    try {
      _0x41f2bc = await this.ctx.curl("https://a.zhuanma.org/api/checkauth", {
        method: "POST",
        contentType: "json",
        timeout: 2000,
        data: {
          code: _0x5657d4,
          time: _0x2fbdf6
        },
        dataType: "json"
      });
    } catch (_0x1c5dcb) {
      console.log(_0x1c5dcb);
      _0x41f2bc = await this.ctx.curl("https://b.zhuanma.org/api/checkauth", {
        method: "POST",
        contentType: "json",
        timeout: 5000,
        data: {
          code: _0x5657d4,
          time: _0x2fbdf6
        },
        dataType: "json"
      });
    }
    if (_0x41f2bc.status !== 200 || _0x41f2bc.data.pass === _0x4376aa) {
      return this.ctx.redirect("https://www.efvcms.com/tip");
    }
    if (_0x41f2bc.data.pass !== _0x2830de) {
      return this.ctx.redirect("https://www.efvcms.com/tip");
    }
    if (this.config.admin.email === email && this.config.admin.password === password) {
      this.ctx.session.adminuser = email;
      this.ctx.redirect("/admin");
    } else {
      this.ctx.flash = {
        type: "info",
        message: "对不起，邮箱或密码错误，请重试。"
      };
      this.ctx.redirect(this.config.admin.admin);
    }
  }
  async index() {
    const _0x1dc5ac = this.ctx.request.query.page > 0 ? this.ctx.request.query.page : 1,
      _0x5afec9 = this.ctx.request.query.counts > 0 ? this.ctx.request.query.counts * 1 : 20,
      _0xa5c230 = this.ctx.request.query.q;
    let _0x5c1e2c = {};
    if (_0xa5c230 && _0xa5c230 !== "") {
      const _0x3002b9 = new RegExp(_0xa5c230);
      _0x5c1e2c = {
        title: _0x3002b9
      };
    }
    const _0x2a0f16 = await this.ctx.model.Movie.countDocuments(),
      _0x46b727 = await this.ctx.model.Movie.find(_0x5c1e2c).sort("-createAt").limit(_0x5afec9).skip((_0x1dc5ac - 1) * _0x5afec9),
      _0x379c4c = await this.ctx.model.Setting.findOne(),
      _0x52103c = await this.ctx.model.Category.find(),
      _0x3d4691 = await this.ctx.model.Movie.countDocuments({
        status: "完成"
      }),
      _0x1cfb69 = await this.ctx.model.Movie.findOne({
        status: "转码或切片中"
      });
    await this.ctx.render("admin/index.pug", {
      title: "oneacg后台管理中心",
      movies: _0x46b727,
      page: _0x1dc5ac,
      moviescounts: _0x2a0f16,
      setting: _0x379c4c,
      counts: _0x2a0f16,
      finishedcounts: _0x3d4691,
      categories: _0x52103c,
      transcoding: _0x1cfb69,
      pages: Math.ceil(_0x2a0f16 / _0x5afec9)
    });
  }
  async caiji() {
    const _0x49f5ef = await this.ctx.model.Setting.findOne(),
      {
        category
      } = this.ctx.request.query;
    let _0x38ccbe = {};
    category && (_0x38ccbe = {
      categoryid: category
    });
    if (!_0x49f5ef.caiji) {
      this.ctx.status = 404;
      this.ctx.body = {
        message: "对不起，没有找到此页面"
      };
    } else {
      const _0x326e4c = this.ctx.request.query.page > 0 ? this.ctx.request.query.page : 1,
        _0x1f5328 = this.ctx.request.query.counts > 0 ? this.ctx.request.query.counts * 1 : 20,
        _0x43bc69 = await this.ctx.model.Movie.countDocuments(_0x38ccbe),
        _0x450fbb = await this.ctx.model.Movie.find(_0x38ccbe).where("status", "完成").sort("-createAt").limit(_0x1f5328).skip((_0x326e4c - 1) * _0x1f5328),
        _0x2ec98a = await this.ctx.model.Category.find();
      await this.ctx.render("admin/caiji.pug", {
        title: "专用采集页面",
        movies: _0x450fbb,
        page: _0x326e4c,
        setting: _0x49f5ef,
        categories: _0x2ec98a,
        pages: Math.ceil(_0x43bc69 / _0x1f5328)
      });
    }
  }
  async settingdelogo() {
    const {
      ids,
      x,
      y,
      width,
      height
    } = this.ctx.request.body;
    for (let _0x1a2a03 = 0; _0x1a2a03 < ids.length; _0x1a2a03++) {
      const _0x126974 = ids[_0x1a2a03],
        _0x1baf9a = await this.ctx.model.Movie.findById(_0x126974);
      if (_0x1baf9a.status === "等待") {
        const _0x2a1c71 = await this.ctx.model.Delogo.findOne({
          movieid: _0x126974
        });
        if (!_0x2a1c71) {
          await this.ctx.model.Delogo.create({
            movieid: _0x126974,
            x: x,
            y: y,
            width: width,
            height: height
          });
        } else {
          await this.ctx.model.Delogo.updateOne({
            movie: _0x126974
          }, {
            $set: {
              x: x,
              y: y,
              width: width,
              height: height
            }
          });
        }
      }
    }
    this.ctx.body = {
      success: 1
    };
  }
  async caijiitem() {
    const _0x3d54a3 = await this.ctx.model.Setting.findOne();
    if (!_0x3d54a3.caiji) {
      this.ctx.status = 404;
      this.ctx.body = {
        message: "对不起，没有找到此页面"
      };
    } else {
      const _0x1b01f4 = this.ctx.params.id,
        _0x42e2f3 = await this.ctx.model.Movie.findById(_0x1b01f4);
      await this.ctx.render("admin/caijiitem.pug", {
        title: _0x42e2f3.title,
        movie: _0x42e2f3,
        setting: _0x3d54a3
      });
    }
  }
  async setting() {
    const _0x1f816c = await this.ctx.model.Setting.findOne();
    await this.ctx.render("admin/setting.pug", {
      title: "核心设置",
      setting: _0x1f816c
    });
  }
  async fenfa() {
    const _0x1234c0 = this.ctx,
      _0x5424df = await _0x1234c0.model.Fenfa.findOne();
    await _0x1234c0.render("admin/fenfa.pug", {
      title: "分发配置",
      fenfa: _0x5424df
    });
  }
  async postfenfa() {
    const _0x5bd673 = this.ctx,
      {
        kaiguan,
        domains
      } = _0x5bd673.request.body,
      _0x267ba9 = await _0x5bd673.model.Fenfa.findOne();
    if (_0x267ba9) {
      await _0x5bd673.model.Fenfa.updateOne({
        _id: _0x267ba9._id
      }, {
        $set: {
          kaiguan: kaiguan,
          domains: domains
        }
      });
    } else {
      await _0x5bd673.model.Fenfa.create({
        kaiguan: kaiguan,
        domains: domains
      });
    }
    _0x5bd673.redirect("/admin/fenfa");
  }
  async postsetting() {
    const {
        host,
        path,
        rukupath,
        tsduration,
        hd,
        keepmp4,
        isqiepian,
        isqiangqie,
        miaoqie,
        paomadeng,
        paotime,
        paojiange,
        gifkaiguan,
        gifduration,
        gifwidth,
        screenshots,
        antikaiguan,
        antiurl,
        wmplace,
        rate,
        transcounts,
        caiji,
        tsjiami,
        watermark,
        wmmove,
        piantou,
        globalcut,
        api,
        apikey
      } = this.ctx.request.body,
      _0x5d6341 = this.config.admin.authcode;
    if (_0x5d6341.length !== 10) {
      return this.ctx.redirect("https://www.moemv.com");
    }
    let _0x3a793c;
    const _0x47bce6 = Date.now(),
      _0x86df18 = this.service.ffmpeg.cryptoCode(_0x5d6341, _0x47bce6, 1),
      _0x35b14 = this.service.ffmpeg.cryptoCode(_0x5d6341, _0x47bce6, 0);
    try {
      _0x3a793c = await this.ctx.curl("https://a.zhuanma.org/api/checkauth", {
        method: "POST",
        contentType: "json",
        timeout: 2000,
        data: {
          code: _0x5d6341,
          time: _0x47bce6
        },
        dataType: "json"
      });
    } catch (_0x320f14) {
      _0x3a793c = await this.ctx.curl("https://b.zhuanma.org/api/checkauth", {
        method: "POST",
        contentType: "json",
        timeout: 5000,
        data: {
          code: _0x5d6341,
          time: _0x47bce6
        },
        dataType: "json"
      });
    }
    if (_0x3a793c.status !== 200 || _0x3a793c.data.pass === _0x35b14) {
      return this.ctx.redirect("https://www.moemv.com");
    }
    if (_0x3a793c.data.pass !== _0x86df18) {
      return this.ctx.redirect("https://www.moemv.com");
    }
    const _0x451810 = await this.ctx.model.Setting.findOne();
    if (_0x451810) {
      await this.ctx.model.Setting.updateOne({
        _id: _0x451810._id
      }, {
        $set: {
          host: host,
          path: path,
          rukupath: rukupath,
          tsduration: tsduration,
          hd: hd,
          keepmp4: keepmp4,
          rate: rate,
          isqiepian: isqiepian,
          isqiangqie: isqiangqie,
          miaoqie: miaoqie,
          gifkaiguan: gifkaiguan,
          gifduration: gifduration,
          gifwidth: gifwidth,
          screenshots: screenshots,
          antikaiguan: antikaiguan,
          antiurl: antiurl,
          paomadeng: paomadeng,
          paojiange: paojiange,
          paotime: paotime,
          wmplace: wmplace,
          caiji: caiji,
          tsjiami: tsjiami,
          watermark: watermark,
          wmmove: wmmove,
          transcounts: transcounts,
          piantou: piantou,
          globalcut: globalcut,
          api: api,
          apikey: apikey
        }
      });
    } else {
      await this.ctx.model.Setting.create({
        host: host,
        path: path,
        rukupath: rukupath,
        tsduration: tsduration,
        hd: hd,
        keepmp4: keepmp4,
        rate: rate,
        isqiepian: isqiepian,
        isqiangqie: isqiangqie,
        miaoqie: miaoqie,
        gifkaiguan: gifkaiguan,
        gifduration: gifduration,
        gifwidth: gifwidth,
        screenshots: screenshots,
        antikaiguan: antikaiguan,
        paomadeng: paomadeng,
        paojiange: paojiange,
        paotime: paotime,
        antiurl: antiurl,
        wmplace: wmplace,
        caiji: caiji,
        tsjiami: tsjiami,
        watermark: watermark,
        wmmove: wmmove,
        transcounts: transcounts,
        piantou: piantou,
        globalcut: globalcut,
        api: api,
        apikey: apikey
      });
    }
    this.ctx.redirect("/admin/setting");
  }
  logout() {
    this.ctx.session.adminuser = null;
    this.ctx.redirect("/");
  }
  async upload() {
    await this.ctx.render("admin/upload.pug", {
      title: "上传视频"
    });
  }
  async edittitle() {
    const {
      id,
      title
    } = this.ctx.request.body;
    await this.ctx.model.Movie.updateOne({
      _id: id
    }, {
      $set: {
        title: title
      }
    });
    this.ctx.body = {
      success: 1
    };
  }
  async apiuploadposter() {
    const _0x2c540e = this.ctx,
      _0x4ecc93 = _0x2c540e.request.files[0],
      {
        id
      } = _0x2c540e.request.body,
      _0x15cf80 = "./app/public/images/poster",
      _0x5ac2b2 = _0x4ecc93.filename,
      _0x58b8e9 = _0x5ac2b2.split("."),
      _0x23b91c = _0x58b8e9[_0x58b8e9.length - 1],
      _0x3b6fd9 = id + "." + _0x23b91c,
      _0x2fa851 = fs.createReadStream(_0x4ecc93.filepath),
      _0xc58557 = fs.createWriteStream(_0x15cf80 + "/" + _0x3b6fd9);
    _0x2fa851.pipe(_0xc58557);
    await _0x2c540e.cleanupRequestFiles();
    await _0x2c540e.model.Movie.updateOne({
      _id: id
    }, {
      $set: {
        poster: "/public/images/poster/" + _0x3b6fd9
      }
    });
    _0x2c540e.body = {
      success: 1
    };
  }
  async uploadad() {
    const _0x3ee974 = this.ctx,
      _0x44807e = _0x3ee974.request.files[0],
      _0x3cb932 = "./ad",
      _0x15d978 = _0x3ee974.request.body,
      _0x37fe5f = _0x44807e.filename,
      _0x32599a = _0x37fe5f.split(".");
    _0x32599a.pop();
    const _0x38602a = _0x32599a.join("."),
      _0x15b1c0 = _0x3cb932 + "/" + _0x38602a,
      _0x3e3fda = fs.existsSync(_0x15b1c0);
    !_0x3e3fda && fs.mkdirSync(_0x15b1c0);
    const _0x4c5b98 = _0x37fe5f + _0x15d978.chunk,
      _0x5b24e4 = fs.createReadStream(_0x44807e.filepath),
      _0x2953e3 = fs.createWriteStream(_0x15b1c0 + "/" + _0x4c5b98);
    _0x5b24e4.pipe(_0x2953e3);
    _0x5b24e4.on("end", async function () {
      if (_0x15d978.chunk * 1 + 1 === _0x15d978.chunks * 1) {
        const _0x566678 = fs.readdirSync(_0x15b1c0);
        for (let _0x2db20e = 0; _0x2db20e < _0x566678.length; _0x2db20e++) {
          fs.appendFileSync(_0x3cb932 + "/" + _0x44807e.filename, fs.readFileSync(_0x15b1c0 + "/" + _0x37fe5f + _0x2db20e));
          fs.unlinkSync(_0x15b1c0 + "/" + _0x37fe5f + _0x2db20e);
        }
        fs.rmdirSync(_0x15b1c0);
        await _0x3ee974.cleanupRequestFiles();
        const _0x2ffa66 = {
          status: "等待转码切片",
          title: _0x44807e.filename,
          path: _0x3cb932 + "/" + _0x44807e.filename,
          size: _0x15d978.size
        };
        await _0x3ee974.model.Ad.create(_0x2ffa66);
      }
    });
    _0x3ee974.body = {
      done: 1
    };
  }
  async postupload() {
    const _0x4dae69 = this.ctx,
      _0x5e38c0 = _0x4dae69.request.files[0],
      _0x1fdb0b = _0x4dae69.request.body,
      _0x19071c = await _0x4dae69.model.Setting.findOne(),
      _0x141589 = _0x19071c.path,
      _0x42b484 = _0x5e38c0.filename,
      _0xf3d99c = _0x42b484.split(".");
    _0xf3d99c.pop();
    const _0x16d87c = _0xf3d99c.join("."),
      _0x2c7f71 = _0x141589 + "/" + _0x16d87c,
      _0x5dc1b0 = fs.existsSync(_0x2c7f71);
    !_0x5dc1b0 && fs.mkdirSync(_0x2c7f71);
    const _0x425f21 = _0x42b484 + _0x1fdb0b.chunk,
      _0x560f29 = fs.createReadStream(_0x5e38c0.filepath),
      _0x50e013 = fs.createWriteStream(_0x2c7f71 + "/" + _0x425f21);
    _0x560f29.pipe(_0x50e013);
    _0x560f29.on("end", async function () {
      if (_0x1fdb0b.chunk * 1 + 1 === _0x1fdb0b.chunks * 1) {
        const _0x1141c9 = fs.readdirSync(_0x2c7f71);
        for (let _0x479b0a = 0; _0x479b0a < _0x1141c9.length; _0x479b0a++) {
          fs.appendFileSync(_0x141589 + "/" + _0x5e38c0.filename, fs.readFileSync(_0x2c7f71 + "/" + _0x42b484 + _0x479b0a));
          fs.unlinkSync(_0x2c7f71 + "/" + _0x42b484 + _0x479b0a);
        }
        fs.rmdirSync(_0x2c7f71);
        await _0x4dae69.cleanupRequestFiles();
        const _0x2841d2 = {
          status: "等待",
          title: _0x5e38c0.filename,
          path: _0x141589 + "/" + _0x5e38c0.filename,
          size: _0x1fdb0b.size,
          md5: _0x1fdb0b.filemd5
        };
        await _0x4dae69.model.Movie.create(_0x2841d2);
      }
    });
    _0x4dae69.body = {
      done: 1
    };
  }
  async checkfilemd5() {
    const _0x3a11ae = this.ctx.request.body.md5,
      _0xd7c8f0 = await this.ctx.model.Movie.findOne({
        md5: _0x3a11ae
      });
    let _0x4f45a1 = false;
    _0xd7c8f0 && (_0x4f45a1 = true);
    this.ctx.body = {
      exist: _0x4f45a1
    };
  }
  async whattrans() {
    const _0x117b1c = await this.ctx.model.Setting.findOne();
    if (_0x117b1c) {
      await this.ctx.model.Setting.updateOne({
        _id: _0x117b1c._id
      }, {
        $set: {
          stop: 0
        }
      });
    }
    await this.ctx.service.ffmpeg.whattrans();
    this.ctx.body = {
      done: 1
    };
  }
  async stoplist() {
    const _0x1e7dd8 = await this.ctx.model.Setting.findOne();
    _0x1e7dd8 && (await this.ctx.model.Setting.updateOne({
      _id: _0x1e7dd8._id
    }, {
      $set: {
        stop: 1
      }
    }));
    this.ctx.service.ffmpeg.stoplist();
    this.ctx.body = {
      success: 1
    };
  }
  async cuthead() {
    const _0xca1a43 = this.ctx.request.body.ids,
      _0x1201ad = this.ctx.request.body.duration,
      _0x424800 = this.ctx.request.body.iskeepsource,
      _0x1ff3b8 = this.ctx.request.body.iskeephead,
      _0x58f5d2 = this.ctx;
    let _0x113cc5 = [];
    _0x113cc5 = _0x113cc5.concat(_0xca1a43);
    for (let _0x698fca = 0; _0x698fca < _0x113cc5.length; _0x698fca++) {
      const _0x2e11c3 = _0x113cc5[_0x698fca],
        _0x15f5aa = await _0x58f5d2.model.Movie.findById(_0x2e11c3);
      _0x58f5d2.service.ffmpeg.cuthead(_0x15f5aa, _0x1201ad, _0x424800, _0x1ff3b8);
    }
    this.ctx.body = {
      success: 1
    };
  }
  async transcodead() {
    const _0x2d6bfd = await this.ctx.model.Ad.find({
      status: "等待转码切片"
    });
    for (let _0x33a8da = 0; _0x33a8da < _0x2d6bfd.length; _0x33a8da++) {
      const _0x572b87 = _0x2d6bfd[_0x33a8da];
      this.ctx.service.ffmpeg.transcodead(_0x572b87);
    }
    this.ctx.body = {
      success: 1
    };
  }
  async deletead() {
    const _0x787d7e = this.ctx.request.query.id,
      _0x19fad0 = await this.ctx.model.Ad.findById(_0x787d7e);
    fs.exists(_0x19fad0.path, function (_0x5e7b9a) {
      _0x5e7b9a && fs.unlinkSync(_0x19fad0.path);
    });
    this.ctx.helper.deleteall("./app/public/ad/" + _0x787d7e);
    await this.ctx.model.Ad.deleteOne({
      _id: _0x787d7e
    });
    this.ctx.body = {
      success: 1
    };
  }
  async deletemovie() {
    const _0x109cea = this.ctx.request.query.id,
      _0x1358f2 = await this.ctx.model.Movie.findById(_0x109cea);
    if (_0x1358f2.path) {
      fs.exists(_0x1358f2.path, function (_0x5661d2) {
        _0x5661d2 && fs.unlinkSync(_0x1358f2.path);
      });
    }
    this.ctx.helper.deleteall("./app/public/videos/" + _0x109cea);
    await this.ctx.model.Movie.deleteOne({
      _id: _0x109cea
    });
    this.ctx.body = {
      success: 1
    };
  }
  async deleteallmovies() {
    const {
      ids
    } = this.ctx.request.body;
    for (let _0x452b55 = 0; _0x452b55 < ids.length; _0x452b55++) {
      const _0x444b9b = ids[_0x452b55];
      await this.ctx.model.Movie.deleteOne({
        _id: _0x444b9b
      });
    }
    this.ctx.body = {
      success: 1
    };
  }
  async deletecategory() {
    const _0x344638 = this.ctx.request.query.id;
    await this.ctx.model.Category.deleteOne({
      _id: _0x344638
    });
    this.ctx.body = {
      success: 1
    };
  }
  async play() {
    const _0x4507e0 = this.ctx.params.id,
      _0x9b431c = await this.ctx.model.Movie.findById(_0x4507e0);
    await this.ctx.render("play.pug", {
      title: "播放预览",
      id: _0x4507e0,
      movie: _0x9b431c
    });
  }
  async uploadappimg() {
    const _0x49d8fc = this.ctx,
      _0x3026fa = _0x49d8fc.request.files[0],
      _0x5c7967 = "/public/images/app",
      _0x9bdbf2 = _0x3026fa.filename,
      _0x53f3bd = path.join(this.app.baseDir, "/app" + _0x5c7967 + "/" + _0x9bdbf2),
      _0x3eb187 = _0x5c7967 + "/" + _0x9bdbf2,
      _0x5eb030 = fs.createReadStream(_0x3026fa.filepath),
      _0x1d91a2 = fs.createWriteStream(_0x53f3bd);
    _0x5eb030.pipe(_0x1d91a2);
    _0x49d8fc.body = {
      done: 1,
      src: _0x3eb187
    };
  }
  async uploadwm() {
    const _0x4b1f25 = this,
      _0x3a2460 = this.ctx,
      _0x120905 = _0x3a2460.request.files[0],
      _0x1a3356 = "/public/images/watermark",
      _0x3ed9a9 = _0x120905.filename,
      _0x3a35fb = _0x3ed9a9.split("."),
      _0x47a9fb = _0x3a35fb[_0x3a35fb.length - 1];
    _0x3a35fb.pop();
    const _0x5930bb = [360, 480, 640, 720],
      _0x47a9e7 = path.join(this.app.baseDir, "/app" + _0x1a3356 + "/" + 1080 + "." + _0x47a9fb),
      _0x5b3f86 = _0x1a3356 + "/" + 1080 + "." + _0x47a9fb,
      _0x5e229c = fs.createReadStream(_0x120905.filepath),
      _0x4cdb53 = fs.createWriteStream(_0x47a9e7);
    _0x5e229c.pipe(_0x4cdb53);
    _0x5e229c.on("end", async function () {
      const _0x48337b = sharp(_0x120905.filepath);
      _0x48337b.metadata().then(function (_0x6677aa) {
        for (let _0x2c0a0d = 0; _0x2c0a0d < _0x5930bb.length; _0x2c0a0d++) {
          const _0x132595 = _0x5930bb[_0x2c0a0d];
          _0x48337b.resize(Math.round(_0x6677aa.width * _0x132595 / 1080)).toFile(path.join(_0x4b1f25.app.baseDir, "/app" + _0x1a3356 + "/" + _0x132595 + "." + _0x47a9fb), _0x37531d => {
            if (_0x37531d) {
              console.log(_0x37531d);
            }
          });
        }
      });
    });
    _0x3a2460.body = {
      done: 1,
      res: _0x5b3f86
    };
  }
  async getad() {
    const _0x46bbab = this.ctx,
      _0x4cc324 = await _0x46bbab.model.Ad.find();
    await this.ctx.render("admin/ad.pug", {
      title: "可替换片头广告管理",
      ads: _0x4cc324
    });
  }
  async ruku() {
    const _0x3483a8 = this.ctx,
      _0x4110dc = await this.ctx.model.Setting.findOne(),
      _0x9f4090 = _0x4110dc.rukupath,
      _0x5387f8 = fs.readdirSync(_0x9f4090);
    _0x5387f8.forEach(async _0x18a199 => {
      const _0x48ef42 = _0x9f4090 + "/" + _0x18a199;
      if (fs.statSync(_0x48ef42).isDirectory()) {
        let _0x1908b9 = await this.ctx.model.Category.findOne({
          title: _0x18a199
        });
        if (!_0x1908b9) {
          _0x1908b9 = await this.ctx.model.Category.create({
            title: _0x18a199
          });
        }
        const _0x2883ae = _0x1908b9._id;
        fs.readdir(_0x48ef42, function (_0x302d86, _0x11d316) {
          if (_0x302d86) {
            console.log(_0x302d86);
          }
          _0x11d316.forEach(function (_0x18d714) {
            const _0x216574 = _0x48ef42 + "/" + _0x18d714;
            fs.stat(_0x216574, async function (_0xf7d4b5, _0x1a83ed) {
              if (_0xf7d4b5) {
                console.log(_0xf7d4b5);
              }
              if (_0x1a83ed.isFile && _0x1a83ed.size > 500000) {
                const _0x28abb1 = await _0x3483a8.model.Movie.findOne({
                  title: _0x18d714
                });
                if (!_0x28abb1) {
                  const _0x417259 = {
                      title: _0x18d714,
                      status: "等待",
                      path: _0x48ef42 + "/" + _0x18d714,
                      size: _0x1a83ed.size,
                      categoryid: _0x2883ae,
                      createAt: Date.now()
                    },
                    _0x5d8eb3 = _0x18d714.split(".");
                  _0x5d8eb3.pop();
                  const _0x37843a = _0x5d8eb3.join("."),
                    _0x4f7561 = _0x48ef42 + "/" + _0x37843a + ".jpg",
                    _0x11572e = _0x48ef42 + "/" + _0x37843a + ".png",
                    _0x4a34a0 = _0x48ef42 + "/" + _0x37843a + ".jpeg";
                  if (fs.existsSync(_0x4f7561)) {
                    const _0x5d47d7 = fs.createReadStream(_0x4f7561),
                      _0xb38f5f = "./app/public/images/poster",
                      _0x32da29 = fs.createWriteStream(_0xb38f5f + "/" + _0x37843a + ".jpg");
                    _0x5d47d7.pipe(_0x32da29);
                    _0x417259.poster = "/public/images/poster/" + _0x37843a + ".jpg";
                  }
                  if (fs.existsSync(_0x11572e)) {
                    const _0x4c92a3 = fs.createReadStream(_0x11572e),
                      _0x1fbd3a = "./app/public/images/poster",
                      _0x4ed77f = fs.createWriteStream(_0x1fbd3a + "/" + _0x37843a + ".png");
                    _0x4c92a3.pipe(_0x4ed77f);
                    _0x417259.poster = "/public/images/poster/" + _0x37843a + ".png";
                  }
                  if (fs.existsSync(_0x4a34a0)) {
                    const _0x1f99e8 = fs.createReadStream(_0x4a34a0),
                      _0x5a172e = "./app/public/images/poster",
                      _0x2efe7c = fs.createWriteStream(_0x5a172e + "/" + _0x37843a + ".jpeg");
                    _0x1f99e8.pipe(_0x2efe7c);
                    _0x417259.poster = "/public/images/poster/" + _0x37843a + ".jpeg";
                  }
                  await _0x3483a8.model.Movie.create(_0x417259);
                }
              }
            });
          });
        });
      } else {
        const _0x360944 = fs.statSync(_0x9f4090 + "/" + _0x18a199);
        if (_0x360944.isFile && _0x360944.size > 500000) {
          const _0x29803c = await _0x3483a8.model.Movie.findOne({
            title: _0x18a199
          });
          if (!_0x29803c) {
            const _0x10978c = {
                title: _0x18a199,
                status: "等待",
                path: _0x9f4090 + "/" + _0x18a199,
                size: _0x360944.size,
                createAt: Date.now()
              },
              _0x3ceddb = _0x18a199.split(".");
            _0x3ceddb.pop();
            const _0x22029c = _0x3ceddb.join("."),
              _0x305c7d = _0x9f4090 + "/" + _0x22029c + ".jpg",
              _0x10be68 = _0x9f4090 + "/" + _0x22029c + ".png",
              _0x30e026 = _0x9f4090 + "/" + _0x22029c + ".jpeg";
            if (fs.existsSync(_0x305c7d)) {
              const _0x584a78 = fs.createReadStream(_0x305c7d),
                _0x4416c4 = "./app/public/images/poster",
                _0x196907 = fs.createWriteStream(_0x4416c4 + "/" + _0x22029c + ".jpg");
              _0x584a78.pipe(_0x196907);
              _0x10978c.poster = "/public/images/poster/" + _0x22029c + ".jpg";
            }
            if (fs.existsSync(_0x10be68)) {
              const _0x352284 = fs.createReadStream(_0x10be68),
                _0x509294 = "./app/public/images/poster",
                _0x17a43c = fs.createWriteStream(_0x509294 + "/" + _0x22029c + ".png");
              _0x352284.pipe(_0x17a43c);
              _0x10978c.poster = "/public/images/poster/" + _0x22029c + ".png";
            }
            if (fs.existsSync(_0x30e026)) {
              const _0x41b46a = fs.createReadStream(_0x30e026),
                _0x3b6e48 = "./app/public/images/poster",
                _0x5088f5 = fs.createWriteStream(_0x3b6e48 + "/" + _0x22029c + ".jpeg");
              _0x41b46a.pipe(_0x5088f5);
              _0x10978c.poster = "/public/images/poster/" + _0x22029c + ".jpeg";
            }
            await _0x3483a8.model.Movie.create(_0x10978c);
          }
        }
      }
    });
    _0x3483a8.body = {
      done: 1
    };
  }
  async getscreenshot() {
    const _0x40afc7 = this.ctx,
      {
        time,
        id
      } = _0x40afc7.request.query,
      _0x30bca0 = await _0x40afc7.model.Movie.findById(id);
    if (_0x30bca0.status === "完成") {
      _0x40afc7.body = {
        success: 0,
        message: "对不起，您所选择视频已经转码完成，无法设置去水印。"
      };
    } else {
      const _0x1b161e = await _0x40afc7.service.ffmpeg.getscreenshot(time, id);
      _0x40afc7.body = {
        success: 1,
        screenshot: _0x1b161e.screenshot,
        duration: _0x1b161e.duration
      };
    }
  }
  async getdownload() {
    const _0x99840f = this.ctx,
      _0x4d3fa3 = await _0x99840f.model.Download.find();
    await this.ctx.render("admin/download.pug", {
      title: "下载管理中心",
      downloads: _0x4d3fa3
    });
  }
  async adddownload() {
    await this.ctx.render("admin/adddownload.pug", {
      title: "添加下载任务"
    });
  }
  async postadddownload() {
    const {
      name,
      url
    } = this.ctx.request.body;
    await this.ctx.model.Download.create({
      name: name,
      url: url,
      path: "./download/" + name + ".mp4",
      status: "等待下载"
    });
    this.ctx.redirect("/admin/download");
  }
  async apiautodownload() {
    this.ctx.service.ffmpeg.autodownload();
    this.ctx.body = {
      success: 1
    };
  }
  async deletedownload() {
    const _0x286b72 = this.ctx.request.query.id,
      _0x52a4f2 = await this.ctx.model.Download.findById(_0x286b72);
    fs.existsSync(_0x52a4f2.path) && fs.unlinkSync(_0x52a4f2.path);
    await this.ctx.model.Download.deleteOne({
      _id: _0x286b72
    });
    this.ctx.body = {
      success: 1
    };
  }
  async getappad() {
    const _0x34601c = await this.ctx.model.App.find();
    await this.ctx.render("admin/app.pug", {
      title: "app广告管理",
      apps: _0x34601c
    });
  }
  async deleteapp() {
    const _0x2a7145 = this.ctx.request.query.id;
    await this.ctx.model.App.deleteOne({
      _id: _0x2a7145
    });
    this.ctx.body = {
      success: 1
    };
  }
  async getaddapp() {
    await this.ctx.render("admin/addapp.pug", {
      title: "添加APP广告"
    });
  }
  async addvideo() {
    await this.ctx.render("admin/addvideo.pug", {
      title: "添加第三方资源"
    });
  }
  async postaddvideo() {
    const _0x3791a0 = this.ctx,
      {
        title,
        m3u8
      } = _0x3791a0.request.body,
      _0x379f6d = await this.ctx.model.Movie.create({
        title: title,
        m3u8: m3u8,
        status: "完成",
        size: "0"
      });
    await _0x3791a0.service.ffmpeg.screenshotVideo(_0x379f6d);
    _0x3791a0.redirect("/admin");
  }
  async apiaddvideo() {
    const _0x32af5d = this.ctx,
      {
        title,
        m3u8
      } = _0x32af5d.request.body,
      _0x10e175 = await this.ctx.model.Movie.create({
        title: title,
        m3u8: m3u8,
        status: "完成",
        size: "0"
      });
    await _0x32af5d.service.ffmpeg.screenshotVideo(_0x10e175);
    _0x32af5d.body = {
      success: 1
    };
  }
  async apiuploadvideoposter() {
    const _0xc5fd87 = this.ctx,
      _0x7011f5 = _0xc5fd87.request.files[0],
      {
        id
      } = _0xc5fd87.request.body,
      _0x48d047 = "./app/public/images/poster",
      _0x2fc263 = _0x7011f5.filename,
      _0x43030c = _0x2fc263.split("."),
      _0x2a5c77 = _0x43030c[_0x43030c.length - 1],
      _0x396d29 = id + "." + _0x2a5c77,
      _0x2e32bb = fs.createReadStream(_0x7011f5.filepath),
      _0x1c8e6b = fs.createWriteStream(_0x48d047 + "/" + _0x396d29);
    _0x2e32bb.pipe(_0x1c8e6b);
    await _0xc5fd87.cleanupRequestFiles();
    _0xc5fd87.body = {
      src: "/public/images/poster/" + _0x396d29,
      success: 1
    };
  }
  async postaddapp() {
    const {
      title,
      body,
      img,
      link,
      type
    } = this.ctx.request.body;
    await this.ctx.model.App.create({
      title: title,
      body: body,
      img: img,
      link: link,
      type: type
    });
    this.ctx.redirect("/admin/app");
  }
  crossdomain() {
    const _0x38c3e8 = "<?xml version=\"1.0\"?>\n    <!DOCTYPE cross-domain-policy SYSTEM \"http://www.macromedia.com/xml/dtds/cross-domain-policy.dtd\">\n    <cross-domain-policy>\n    <allow-access-from secure=\"false\" domain=\"*\" />\n    <allow-http-request-headers-from domain=\"*\" headers=\"*\"/>\n    </cross-domain-policy>";
    this.ctx.set("content-type", "text/xml");
    this.ctx.body = _0x38c3e8;
  }
}
module.exports = AdminController;