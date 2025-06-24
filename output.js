//Tue Jun 24 2025 00:11:18 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("有道词典");
const md5 = require('md5-node');
let envSplitor = ['\n'];
let money = '1';
let yduuid = '8dde6fb7-d0e9-442d-8786-4a7312345678';
let model = 'V1824A';
let os = 'xiaomi';
let app = '9.2.38';
var _0xod3 = 'jsjiami.com.v6',
  _0xod3_ = ['_0xod3'],
  _0x5761 = [_0xod3, '\x69\x73\x4e\x6f\x64\x65', '\x65\x6e\x76', '\x79\x64\x63\x64', '\x67\x65\x74\x64\x61\x74\x61', '\x69\x6e\x64\x65\x78', '\x6e\x61\x6d\x65', '\x76\x61\x6c\x69\x64', '\x63\x61\x6e\x52\x65\x61\x64', '\x70\x61\x72\x61\x6d', '\x73\x74\x72\x32\x6a\x73\x6f\x6e', '\x63\x6b\x56\x61\x6c\x69\x64', '\x6c\x6f\x67\x41\x6e\x64\x4e\x6f\x74\x69\x66\x79', '\u8d26\u53f7\x5b', '\x5d\x43\x4b\u683c\u5f0f\u9519\u8bef', '\x67\x65\x74\x54\x69\x6d\x65', '\x61\x62\x74\x65\x73\x74\x3d\x31\x26\x61\x70\x70\x56\x65\x72\x73\x69\x6f\x6e\x3d', '\x26\x63\x6c\x69\x65\x6e\x74\x3d\x61\x6e\x64\x72\x6f\x69\x64\x26\x64\x65\x76\x5f\x6e\x61\x6d\x65\x3d', '\x26\x69\x6d\x65\x69\x3d', '\x26\x6b\x65\x79\x66\x72\x6f\x6d\x3d\x6d\x64\x69\x63\x74\x2e', '\x2e\x61\x6e\x64\x72\x6f\x69\x64\x26\x6b\x65\x79\x69\x64\x3d\x64\x69\x63\x74\x2d\x75\x73\x65\x72\x74\x61\x73\x6b\x2d\x6b\x65\x79\x26\x6d\x69\x64\x3d\x31\x30\x26\x6d\x6f\x64\x65\x6c\x3d', '\x26\x6d\x79\x73\x74\x69\x63\x54\x69\x6d\x65\x3d', '\x26\x6e\x65\x74\x77\x6f\x72\x6b\x3d\x77\x69\x66\x69\x26\x6e\x65\x77\x49\x6d\x65\x69\x3d\x43\x51\x6c\x6c\x4f\x54\x46\x6d\x4f\x44\x64\x69\x59\x54\x64\x6a\x4e\x6a\x41\x31\x4d\x57\x55\x78\x43\x58\x56\x75\x61\x32\x35\x76\x64\x32\x34\x25\x33\x44\x26\x70\x72\x6f\x64\x75\x63\x74\x3d\x6d\x64\x69\x63\x74\x26\x73\x63\x72\x65\x65\x6e\x3d\x31\x30\x38\x30\x78\x32\x34\x30\x30\x26\x76\x65\x6e\x64\x6f\x72\x3d', '\x26\x79\x64\x75\x75\x69\x64\x3d', '\x26\x6b\x65\x79\x3d\x74\x74\x66\x4d\x46\x61\x61\x37\x74\x69\x50\x79\x41\x63\x33\x44\x61\x6e\x4b\x65\x49\x4d\x7a\x45\x65\x6a\x6d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x69\x63\x74\x2e\x79\x6f\x75\x64\x61\x6f\x2e\x63\x6f\x6d\x2f\x64\x69\x63\x74\x75\x73\x65\x72\x74\x61\x73\x6b\x2f\x77\x69\x74\x68\x64\x72\x61\x77\x2f\x61\x63\x63\x6f\x75\x6e\x74\x3f\x70\x6f\x69\x6e\x74\x50\x61\x72\x61\x6d\x3d\x64\x65\x76\x5f\x6e\x61\x6d\x65\x2c\x70\x72\x6f\x64\x75\x63\x74\x2c\x61\x70\x70\x56\x65\x72\x73\x69\x6f\x6e\x2c\x6b\x65\x79\x66\x72\x6f\x6d\x2c\x6d\x69\x64\x2c\x73\x63\x72\x65\x65\x6e\x2c\x6b\x65\x79\x69\x64\x2c\x6d\x79\x73\x74\x69\x63\x54\x69\x6d\x65\x2c\x6e\x65\x74\x77\x6f\x72\x6b\x2c\x61\x62\x74\x65\x73\x74\x2c\x79\x64\x75\x75\x69\x64\x2c\x76\x65\x6e\x64\x6f\x72\x2c\x63\x6c\x69\x65\x6e\x74\x2c\x69\x6d\x65\x69\x2c\x6d\x6f\x64\x65\x6c\x2c\x6e\x65\x77\x49\x6d\x65\x69\x26\x73\x69\x67\x6e\x3d', '\x26\x6b\x65\x79\x69\x64\x3d\x64\x69\x63\x74\x2d\x75\x73\x65\x72\x74\x61\x73\x6b\x2d\x6b\x65\x79\x26\x6d\x79\x73\x74\x69\x63\x54\x69\x6d\x65\x3d', '\x26\x64\x65\x76\x5f\x6e\x61\x6d\x65\x3d', '\x26\x70\x72\x6f\x64\x75\x63\x74\x3d\x6d\x64\x69\x63\x74\x26\x61\x70\x70\x56\x65\x72\x73\x69\x6f\x6e\x3d', '\x2e\x61\x6e\x64\x72\x6f\x69\x64\x26\x6d\x69\x64\x3d\x31\x30\x26\x73\x63\x72\x65\x65\x6e\x3d\x31\x30\x38\x30\x78\x32\x34\x30\x30\x26\x73\x73\x69\x64\x3d\x26\x6e\x65\x74\x77\x6f\x72\x6b\x3d\x77\x69\x66\x69\x26\x61\x62\x74\x65\x73\x74\x3d\x31\x26\x79\x64\x75\x75\x69\x64\x3d', '\x26\x76\x65\x6e\x64\x6f\x72\x3d', '\x26\x63\x6c\x69\x65\x6e\x74\x3d\x61\x6e\x64\x72\x6f\x69\x64\x26\x69\x6d\x65\x69\x3d', '\x26\x6d\x6f\x64\x65\x6c\x3d', '\x26\x6e\x65\x77\x49\x6d\x65\x69\x3d\x43\x51\x6c\x6c\x4f\x54\x46\x6d\x4f\x44\x64\x69\x59\x54\x64\x6a\x4e\x6a\x41\x31\x4d\x57\x55\x78\x43\x58\x56\x75\x61\x32\x35\x76\x64\x32\x34\x25\x32\x35\x33\x44', '\x67\x65\x74', '\x63\x6f\x64\x65', '\x64\x61\x74\x61', '\x77\x65\x63\x68\x61\x74\x4e\x61\x6d\x65', '\x20\u53ef\u63d0\u73b0\u4f59\u989d\x3a', '\x61\x6d\x6f\x75\x6e\x74', '\x6d\x73\x67', '\x72\x65\x73\x6f\x6c\x76\x65', '\x62\x6f\x78', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x69\x63\x74\x2e\x79\x6f\x75\x64\x61\x6f\x2e\x63\x6f\x6d\x2f\x64\x69\x63\x74\x75\x73\x65\x72\x74\x61\x73\x6b\x2f\x6c\x6f\x74\x74\x65\x72\x79\x2f\x69\x6e\x66\x6f\x3f\x70\x6f\x69\x6e\x74\x50\x61\x72\x61\x6d\x3d\x64\x65\x76\x5f\x6e\x61\x6d\x65\x2c\x70\x72\x6f\x64\x75\x63\x74\x2c\x61\x70\x70\x56\x65\x72\x73\x69\x6f\x6e\x2c\x6b\x65\x79\x66\x72\x6f\x6d\x2c\x6d\x69\x64\x2c\x73\x63\x72\x65\x65\x6e\x2c\x6b\x65\x79\x69\x64\x2c\x6d\x79\x73\x74\x69\x63\x54\x69\x6d\x65\x2c\x6e\x65\x74\x77\x6f\x72\x6b\x2c\x61\x62\x74\x65\x73\x74\x2c\x79\x64\x75\x75\x69\x64\x2c\x76\x65\x6e\x64\x6f\x72\x2c\x63\x6c\x69\x65\x6e\x74\x2c\x69\x6d\x65\x69\x2c\x6d\x6f\x64\x65\x6c\x2c\x6e\x65\x77\x49\x6d\x65\x69\x26\x73\x69\x67\x6e\x3d', '\x6c\x6f\x74\x74\x65\x72\x79\x49\x6e\x66\x6f', '\x66\x72\x65\x65\x54\x69\x6d\x65\x73', '\x5d\u76f2\u76d2\u8fd8\u672a\u5f00\u542f', '\x6f\x70\x65\x6e\x62\x6f\x78', '\x5d\u76f2\u76d2\u5df2\u5f00\u542f', '\x2e\x61\x6e\x64\x72\x6f\x69\x64\x26\x6b\x65\x79\x69\x64\x3d\x64\x69\x63\x74\x2d\x75\x73\x65\x72\x74\x61\x73\x6b\x2d\x6b\x65\x79\x26\x6c\x6f\x74\x74\x65\x72\x79\x54\x79\x70\x65\x3d\x30\x26\x6d\x69\x64\x3d\x31\x30\x26\x6d\x6f\x64\x65\x6c\x3d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x69\x63\x74\x2e\x79\x6f\x75\x64\x61\x6f\x2e\x63\x6f\x6d\x2f\x64\x69\x63\x74\x75\x73\x65\x72\x74\x61\x73\x6b\x2f\x6c\x6f\x74\x74\x65\x72\x79\x2f\x65\x78\x65\x63\x75\x74\x65\x3f\x64\x65\x76\x5f\x6e\x61\x6d\x65\x3d', '\x70\x6f\x69\x6e\x74\x50\x61\x72\x61\x6d\x3d\x64\x65\x76\x5f\x6e\x61\x6d\x65\x25\x32\x43\x70\x72\x6f\x64\x75\x63\x74\x25\x32\x43\x61\x70\x70\x56\x65\x72\x73\x69\x6f\x6e\x25\x32\x43\x6b\x65\x79\x66\x72\x6f\x6d\x25\x32\x43\x6d\x69\x64\x25\x32\x43\x73\x63\x72\x65\x65\x6e\x25\x32\x43\x6b\x65\x79\x69\x64\x25\x32\x43\x6d\x79\x73\x74\x69\x63\x54\x69\x6d\x65\x25\x32\x43\x6c\x6f\x74\x74\x65\x72\x79\x54\x79\x70\x65\x25\x32\x43\x6e\x65\x74\x77\x6f\x72\x6b\x25\x32\x43\x61\x62\x74\x65\x73\x74\x25\x32\x43\x79\x64\x75\x75\x69\x64\x25\x32\x43\x76\x65\x6e\x64\x6f\x72\x25\x32\x43\x63\x6c\x69\x65\x6e\x74\x25\x32\x43\x69\x6d\x65\x69\x25\x32\x43\x6d\x6f\x64\x65\x6c\x25\x32\x43\x6e\x65\x77\x49\x6d\x65\x69\x26\x73\x69\x67\x6e\x3d', '\x26\x6c\x6f\x74\x74\x65\x72\x79\x54\x79\x70\x65\x3d\x30', '\x70\x6f\x73\x74', '\x5d\u5f00\u76f2\u76d2\u6d3b\u52a8\x3a', '\x67\x6f\x6c\x64\x49\x6e\x66\x6f', '\x6e\x75\x6d', '\u829d\u58eb\u5e01', '\x73\x69\x67\x69\x6e', '\x2e\x61\x6e\x64\x72\x6f\x69\x64\x26\x6b\x65\x79\x69\x64\x3d\x64\x69\x63\x74\x2d\x75\x73\x65\x72\x74\x61\x73\x6b\x2d\x6b\x65\x79\x26\x6d\x69\x64\x3d\x31\x30\x26\x6d\x69\x73\x73\x69\x6f\x6e\x49\x64\x3d\x38\x38\x38\x38\x26\x6d\x6f\x64\x65\x6c\x3d', '\x26\x6e\x65\x74\x77\x6f\x72\x6b\x3d\x75\x6e\x6b\x6e\x6f\x77\x6e\x26\x6e\x65\x77\x49\x6d\x65\x69\x3d\x43\x51\x6c\x6c\x4f\x54\x46\x6d\x4f\x44\x64\x69\x59\x54\x64\x6a\x4e\x6a\x41\x31\x4d\x57\x55\x78\x43\x58\x56\x75\x61\x32\x35\x76\x64\x32\x34\x25\x33\x44\x26\x70\x72\x6f\x64\x75\x63\x74\x3d\x6d\x64\x69\x63\x74\x26\x73\x63\x72\x65\x65\x6e\x3d\x31\x30\x38\x30\x78\x32\x34\x30\x30\x26\x76\x65\x6e\x64\x6f\x72\x3d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x69\x63\x74\x2e\x79\x6f\x75\x64\x61\x6f\x2e\x63\x6f\x6d\x2f\x64\x69\x63\x74\x75\x73\x65\x72\x74\x61\x73\x6b\x2f\x63\x68\x65\x65\x73\x65\x2f\x63\x6f\x6c\x6c\x65\x63\x74\x3f\x70\x6f\x69\x6e\x74\x50\x61\x72\x61\x6d\x3d\x64\x65\x76\x5f\x6e\x61\x6d\x65\x2c\x70\x72\x6f\x64\x75\x63\x74\x2c\x61\x70\x70\x56\x65\x72\x73\x69\x6f\x6e\x2c\x6d\x69\x73\x73\x69\x6f\x6e\x49\x64\x2c\x6b\x65\x79\x66\x72\x6f\x6d\x2c\x6d\x69\x64\x2c\x73\x63\x72\x65\x65\x6e\x2c\x6b\x65\x79\x69\x64\x2c\x6d\x79\x73\x74\x69\x63\x54\x69\x6d\x65\x2c\x6e\x65\x74\x77\x6f\x72\x6b\x2c\x61\x62\x74\x65\x73\x74\x2c\x79\x64\x75\x75\x69\x64\x2c\x76\x65\x6e\x64\x6f\x72\x2c\x63\x6c\x69\x65\x6e\x74\x2c\x69\x6d\x65\x69\x2c\x6d\x6f\x64\x65\x6c\x2c\x6e\x65\x77\x49\x6d\x65\x69\x26\x73\x69\x67\x6e\x3d', '\x26\x6b\x65\x79\x69\x64\x3d\x64\x69\x63\x74\x2d\x75\x73\x65\x72\x74\x61\x73\x6b\x2d\x6b\x65\x79\x26\x6d\x69\x73\x73\x69\x6f\x6e\x49\x64\x3d\x38\x38\x38\x38\x26\x6d\x79\x73\x74\x69\x63\x54\x69\x6d\x65\x3d', '\x2e\x61\x6e\x64\x72\x6f\x69\x64\x26\x6d\x69\x64\x3d\x31\x30\x26\x73\x63\x72\x65\x65\x6e\x3d\x31\x30\x38\x30\x78\x32\x34\x30\x30\x26\x73\x73\x69\x64\x3d\x26\x6e\x65\x74\x77\x6f\x72\x6b\x3d\x75\x6e\x6b\x6e\x6f\x77\x6e\x26\x61\x62\x74\x65\x73\x74\x3d\x31\x26\x79\x64\x75\x75\x69\x64\x3d', '\x5d\u7b7e\u5230\u6210\u529f', '\x5d\u4eca\u65e5\u5df2\u7b7e\u5230', '\x26\x69\x73\x46\x69\x6e\x69\x73\x68\x65\x64\x3d\x31\x26\x6b\x65\x79\x66\x72\x6f\x6d\x3d\x6d\x64\x69\x63\x74\x2e', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x69\x63\x74\x2e\x79\x6f\x75\x64\x61\x6f\x2e\x63\x6f\x6d\x2f\x64\x69\x63\x74\x75\x73\x65\x72\x74\x61\x73\x6b\x2f\x77\x69\x74\x68\x64\x72\x61\x77\x2f\x72\x65\x64\x70\x61\x63\x6b\x65\x74\x3f\x70\x6f\x69\x6e\x74\x50\x61\x72\x61\x6d\x3d\x64\x65\x76\x5f\x6e\x61\x6d\x65\x2c\x70\x72\x6f\x64\x75\x63\x74\x2c\x61\x70\x70\x56\x65\x72\x73\x69\x6f\x6e\x2c\x6b\x65\x79\x66\x72\x6f\x6d\x2c\x6d\x69\x64\x2c\x73\x63\x72\x65\x65\x6e\x2c\x6b\x65\x79\x69\x64\x2c\x6d\x79\x73\x74\x69\x63\x54\x69\x6d\x65\x2c\x69\x73\x46\x69\x6e\x69\x73\x68\x65\x64\x2c\x6e\x65\x74\x77\x6f\x72\x6b\x2c\x61\x62\x74\x65\x73\x74\x2c\x79\x64\x75\x75\x69\x64\x2c\x76\x65\x6e\x64\x6f\x72\x2c\x63\x6c\x69\x65\x6e\x74\x2c\x69\x6d\x65\x69\x2c\x6d\x6f\x64\x65\x6c\x2c\x6e\x65\x77\x49\x6d\x65\x69\x26\x73\x69\x67\x6e\x3d', '\x26\x69\x73\x46\x69\x6e\x69\x73\x68\x65\x64\x3d\x31\x26\x64\x65\x76\x5f\x6e\x61\x6d\x65\x3d', '\x67\x65\x74\x52\x65\x64\x50\x61\x63\x6b\x65\x74\x54\x69\x6d\x65\x73', '\x5d\u5f00\u7ea2\u5305\u83b7\u5f97\x3a', '\x72\x65\x64\x50\x61\x63\x6b\x65\x74\x41\x6d\x6f\x75\x6e\x74', '\x77\x61\x69\x74', '\x5d\u7ea2\u5305\u5df2\u5f00\u5b8c', '\x70\x61\x79', '\x26\x6d\x6f\x6e\x65\x79\x3d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x69\x63\x74\x2e\x79\x6f\x75\x64\x61\x6f\x2e\x63\x6f\x6d\x2f\x64\x69\x63\x74\x75\x73\x65\x72\x74\x61\x73\x6b\x2f\x77\x69\x74\x68\x64\x72\x61\x77\x2f\x65\x78\x65\x63\x75\x74\x65\x3f\x70\x6f\x69\x6e\x74\x50\x61\x72\x61\x6d\x3d\x64\x65\x76\x5f\x6e\x61\x6d\x65\x2c\x70\x72\x6f\x64\x75\x63\x74\x2c\x61\x70\x70\x56\x65\x72\x73\x69\x6f\x6e\x2c\x6b\x65\x79\x66\x72\x6f\x6d\x2c\x6d\x69\x64\x2c\x73\x63\x72\x65\x65\x6e\x2c\x6b\x65\x79\x69\x64\x2c\x6d\x79\x73\x74\x69\x63\x54\x69\x6d\x65\x2c\x6e\x65\x74\x77\x6f\x72\x6b\x2c\x61\x62\x74\x65\x73\x74\x2c\x79\x64\x75\x75\x69\x64\x2c\x6d\x6f\x6e\x65\x79\x2c\x76\x65\x6e\x64\x6f\x72\x2c\x63\x6c\x69\x65\x6e\x74\x2c\x69\x6d\x65\x69\x2c\x6d\x6f\x64\x65\x6c\x2c\x6e\x65\x77\x49\x6d\x65\x69\x26\x73\x69\x67\x6e\x3d', '\u63d0\u73b0\u6210\u529f\x3a\u5269\u4f59', '\x61\x63\x63\x6f\x75\x6e\x74', '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64', '\x66\x69\x6c\x74\x65\x72', '\x0a\u901a\u77e5\u533a\uff1a\x0a\x0a\u53d8\u5f97\u662f\u9713\u88f3\x20\u4e0d\u53d8\u7684\u662f\u521d\u5fc3\x20\u4e0d\u662f\u8c01\u90fd\u751f\u6765\u4f18\u79c0\x20\u4f46\u6211\u6709\u9897\u6267\u7740\u5411\u4e0a\u7684\u5fc3\ufe0f', '\x6c\x65\x6e\x67\x74\x68', '\x0a\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x20\u8d26\u53f7\u68c0\u6d4b\x20\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d', '\x70\x75\x73\x68', '\x61\x6c\x6c', '\x0a\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x20\u81ea\u52a8\u63d0\u73b0\x20\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d', '\x0a\u81ea\u52a8\u63d0\u73b0\x3a\u8865\u5305\u65f6\u95f4\u4e3a\u6bcf\u5929\u96f6\u70b9\u6574\uff0c\u63a8\u8350\u5b9a\u65f6\u4e3a\x3a\x30\x20\x30\x20\x30\x2c\x39\x20\x2a\x20\x2a\x20\x3f\x20', '\x0a\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x20\u6bcf\u65e5\u4efb\u52a1\x20\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d\x2d', '\x73\x68\x6f\x77\x6d\x73\x67', '\x63\x61\x74\x63\x68', '\x6c\x6f\x67', '\x66\x69\x6e\x61\x6c\x6c\x79', '\x64\x6f\x6e\x65', '\x69\x6e\x64\x65\x78\x4f\x66', '\x73\x70\x6c\x69\x74', '\u672a\u627e\u5230\x43\x4b\x20\u8bf7\u9605\u8bfb\u811a\u672c\u8bf4\u660e', '\u5171\u627e\u5230', '\u4e2a\u8d26\u53f7', '\x72\x65\x70\x6c\x61\x63\x65', '\x79\x6f\x75\x64\x61\x6f\x5f\x64\x69\x63\x74\x5f\x61\x6e\x64\x72\x6f\x69\x64', '\x62\x6f\x64\x79', '\x68\x65\x61\x64\x65\x72\x73', '\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64\x3b\x63\x68\x61\x72\x73\x65\x74\x3d\x75\x74\x66\x2d\x38', '\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x4c\x65\x6e\x67\x74\x68', '\x73\x65\x6e\x64', '\u8bf7\u6c42\u5931\u8d25', '\x73\x74\x72\x69\x6e\x67\x69\x66\x79', '\x6f\x62\x6a\x65\x63\x74', '\x70\x61\x72\x73\x65', '\x67\x65\x74\x48\x6f\x75\x72\x73', '\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73', '\x77\x6a\x72\x56\x43\x73\x6a\x4b\x69\x61\x79\x4b\x64\x43\x6d\x42\x51\x42\x69\x2e\x48\x49\x63\x6f\x41\x6d\x2e\x76\x36\x3d\x3d'];
function _0x4040(_0x551c5d, _0x3dc08c) {
  _0x551c5d = ~~'0x'['concat'](_0x551c5d['slice'](0x0));
  var _0x22b32b = _0x5761[_0x551c5d];
  return _0x22b32b;
}
;
(function (_0x3814ee, _0x322548) {
  var _0x49531e = 0x0;
  for (_0x322548 = _0x3814ee['shift'](_0x49531e >> 0x2); _0x322548 && _0x322548 !== (_0x3814ee['pop'](_0x49531e >> 0x3) + '')['replace'](/[wrVCKyKdCBQBHIA=]/g, ''); _0x49531e++) {
    _0x49531e = _0x49531e ^ 0x1214d0;
  }
})(_0x5761, _0x4040);
let httpResult, httpReq, httpResp;
let userCookie = ($[_0x4040('0')]() ? process[_0x4040('1')][_0x4040('2')] : $[_0x4040('3')](_0x4040('2'))) || '';
let userList = [];
let userIdx = 0x0;
let userCount = 0x0;
let h = local_hours();
let m = local_minutes();
class UserInfo {
  constructor(_0x4104af) {
    this[_0x4040('4')] = ++userIdx;
    this[_0x4040('5')] = this[_0x4040('4')];
    this[_0x4040('6')] = ![];
    this[_0x4040('7')] = ![];
    try {
      this[_0x4040('8')] = $[_0x4040('9')](_0x4104af);
      this[_0x4040('a')] = !![];
    } catch (_0x300f24) {
      this[_0x4040('a')] = ![];
      $[_0x4040('b')](_0x4040('c') + this[_0x4040('4')] + _0x4040('d'));
    }
  }
  async ['\x6d\x79']() {
    try {
      let _0x57fea9 = new Date()[_0x4040('e')]();
      let _0x15df16 = _0x4040('f') + app + _0x4040('10') + model + _0x4040('11') + yduuid + _0x4040('12') + app + _0x4040('13') + model + _0x4040('14') + _0x57fea9 + _0x4040('15') + os + _0x4040('16') + yduuid + _0x4040('17');
      let _0x28c65f = md5(_0x15df16);
      let _0x37ddbd = _0x4040('18') + _0x28c65f + _0x4040('19') + _0x57fea9 + _0x4040('1a') + model + _0x4040('1b') + app + _0x4040('12') + app + _0x4040('1c') + yduuid + _0x4040('1d') + os + _0x4040('1e') + yduuid + _0x4040('1f') + model + _0x4040('20');
      let _0x40b561 = '';
      let _0xc0741a = '' + this[_0x4040('8')]['\x63\x6b'];
      let _0x15bea2 = populateUrlObject(_0x37ddbd, _0xc0741a, _0x40b561);
      await httpRequest(_0x4040('21'), _0x15bea2);
      let _0x3c3e6f = httpResult;
      if (!_0x3c3e6f) {
        return;
      }
      if (_0x3c3e6f[_0x4040('22')] == 0x0) {
        $[_0x4040('b')](_0x4040('c') + this[_0x4040('5')] + '\x5d' + _0x3c3e6f[_0x4040('23')][_0x4040('24')] + _0x4040('25') + _0x3c3e6f[_0x4040('23')][_0x4040('26')] + '\u5143');
        this[_0x4040('6')] = !![];
        this[_0x4040('7')] = !![];
      } else {
        $[_0x4040('b')](_0x4040('c') + this[_0x4040('5')] + '\x5d' + _0x3c3e6f[_0x4040('27')]);
      }
    } catch (_0x2b24de) {} finally {
      return Promise[_0x4040('28')](0x1);
    }
  }
  async [_0x4040('29')]() {
    try {
      let _0xfb44f0 = new Date()[_0x4040('e')]();
      let _0x54cbbd = _0x4040('f') + app + _0x4040('10') + model + _0x4040('11') + yduuid + _0x4040('12') + app + _0x4040('13') + model + _0x4040('14') + _0xfb44f0 + _0x4040('15') + os + _0x4040('16') + yduuid + _0x4040('17');
      let _0x4caaf2 = md5(_0x54cbbd);
      let _0x41906e = _0x4040('2a') + _0x4caaf2 + _0x4040('19') + _0xfb44f0 + _0x4040('1a') + model + _0x4040('1b') + app + _0x4040('12') + app + _0x4040('1c') + yduuid + _0x4040('1d') + os + _0x4040('1e') + yduuid + _0x4040('1f') + model + _0x4040('20');
      let _0x2ab3e8 = '';
      let _0x11d0d7 = '' + this[_0x4040('8')]['\x63\x6b'];
      let _0x5ea188 = populateUrlObject(_0x41906e, _0x11d0d7, _0x2ab3e8);
      await httpRequest(_0x4040('21'), _0x5ea188);
      let _0x890855 = httpResult;
      if (!_0x890855) {
        return;
      }
      if (_0x890855[_0x4040('23')][_0x4040('2b')][_0x4040('2c')] == 0x1) {
        $[_0x4040('b')](_0x4040('c') + this[_0x4040('5')] + _0x4040('2d'));
        await this[_0x4040('2e')]();
      } else {
        $[_0x4040('b')](_0x4040('c') + this[_0x4040('5')] + _0x4040('2f'));
      }
    } catch (_0x163c41) {} finally {
      return Promise[_0x4040('28')](0x1);
    }
  }
  async [_0x4040('2e')]() {
    try {
      let _0x4361ce = new Date()[_0x4040('e')]();
      let _0x5329d6 = _0x4040('f') + app + _0x4040('10') + model + _0x4040('11') + yduuid + _0x4040('12') + app + _0x4040('30') + model + _0x4040('14') + _0x4361ce + _0x4040('15') + os + _0x4040('16') + yduuid + _0x4040('17');
      let _0x3427b4 = md5(_0x5329d6);
      let _0x13a014 = _0x4040('31') + model + _0x4040('1b') + app + _0x4040('12') + app + _0x4040('1c') + yduuid + _0x4040('1d') + os + _0x4040('1e') + yduuid + _0x4040('1f') + model + _0x4040('20');
      let _0x909b0f = _0x4040('32') + _0x3427b4 + _0x4040('19') + _0x4361ce + _0x4040('33');
      let _0x3244c9 = '' + this[_0x4040('8')]['\x63\x6b'];
      let _0xb16f7b = populateUrlObject(_0x13a014, _0x3244c9, _0x909b0f);
      await httpRequest(_0x4040('34'), _0xb16f7b);
      let _0xb298e4 = httpResult;
      if (!_0xb298e4) {
        return;
      }
      if (_0xb298e4[_0x4040('22')] == 0x0) {
        $[_0x4040('b')](_0x4040('c') + this[_0x4040('5')] + _0x4040('35') + _0xb298e4[_0x4040('23')][_0x4040('36')][_0x4040('37')] + _0x4040('38'));
      } else {
        $[_0x4040('b')](_0x4040('c') + this[_0x4040('5')] + _0x4040('35') + _0xb298e4[_0x4040('27')]);
      }
    } catch (_0x247a73) {} finally {
      return Promise[_0x4040('28')](0x1);
    }
  }
  async [_0x4040('39')]() {
    try {
      let _0x2e15bc = new Date()[_0x4040('e')]();
      let _0x29c727 = _0x4040('f') + app + _0x4040('10') + model + _0x4040('11') + yduuid + _0x4040('12') + app + _0x4040('3a') + model + _0x4040('14') + _0x2e15bc + _0x4040('3b') + os + _0x4040('16') + yduuid + _0x4040('17');
      let _0x368899 = md5(_0x29c727);
      let _0x391d71 = _0x4040('3c') + _0x368899 + _0x4040('3d') + _0x2e15bc + _0x4040('1a') + model + _0x4040('1b') + app + _0x4040('12') + app + _0x4040('3e') + yduuid + _0x4040('1d') + os + _0x4040('1e') + yduuid + _0x4040('1f') + model + _0x4040('20');
      let _0x262e4b = '';
      let _0x1e3e9c = '' + this[_0x4040('8')]['\x63\x6b'];
      let _0x1f352e = populateUrlObject(_0x391d71, _0x1e3e9c, _0x262e4b);
      await httpRequest(_0x4040('21'), _0x1f352e);
      let _0x2d2b64 = httpResult;
      if (!_0x2d2b64) {
        return;
      }
      if (_0x2d2b64[_0x4040('22')] == 0x0) {
        $[_0x4040('b')](_0x4040('c') + this[_0x4040('5')] + _0x4040('3f'));
      } else {
        $[_0x4040('b')](_0x4040('c') + this[_0x4040('5')] + _0x4040('40'));
      }
    } catch (_0x3186c0) {} finally {
      return Promise[_0x4040('28')](0x1);
    }
  }
  async ['\x68\x62']() {
    try {
      let _0x136ac2 = new Date()[_0x4040('e')]();
      let _0x5b8ebf = _0x4040('f') + app + _0x4040('10') + model + _0x4040('11') + yduuid + _0x4040('41') + app + _0x4040('13') + model + _0x4040('14') + _0x136ac2 + _0x4040('15') + os + _0x4040('16') + yduuid + _0x4040('17');
      let _0x353613 = md5(_0x5b8ebf);
      let _0x25be25 = _0x4040('42') + _0x353613 + _0x4040('19') + _0x136ac2 + _0x4040('43') + model + _0x4040('1b') + app + _0x4040('12') + app + _0x4040('1c') + yduuid + _0x4040('1d') + os + _0x4040('1e') + yduuid + _0x4040('1f') + model + _0x4040('20');
      let _0x584b3a = '';
      let _0x15bd24 = '' + this[_0x4040('8')]['\x63\x6b'];
      let _0x4a84c9 = populateUrlObject(_0x25be25, _0x15bd24, _0x584b3a);
      await httpRequest(_0x4040('21'), _0x4a84c9);
      let _0x541f77 = httpResult;
      if (!_0x541f77) {
        return;
      }
      if (_0x541f77[_0x4040('23')][_0x4040('44')] <= 0x3) {
        $[_0x4040('b')](_0x4040('c') + this[_0x4040('5')] + _0x4040('45') + _0x541f77[_0x4040('23')][_0x4040('46')] + '\u5143');
        await $[_0x4040('47')](0x7530);
        await this['\x68\x62']();
      } else {
        $[_0x4040('b')](_0x4040('c') + this[_0x4040('5')] + _0x4040('48'));
      }
    } catch (_0xf1e623) {} finally {
      return Promise[_0x4040('28')](0x1);
    }
  }
  async [_0x4040('49')]() {
    try {
      let _0x40703f = new Date()[_0x4040('e')]();
      let _0x456575 = _0x4040('f') + app + _0x4040('10') + model + _0x4040('11') + yduuid + _0x4040('12') + app + _0x4040('13') + model + _0x4040('4a') + money + _0x4040('14') + _0x40703f + _0x4040('3b') + os + _0x4040('16') + yduuid + _0x4040('17');
      let _0x27e669 = md5(_0x456575);
      let _0x46dfc1 = _0x4040('4b') + _0x27e669 + _0x4040('19') + _0x40703f + _0x4040('4a') + money + _0x4040('1a') + model + _0x4040('1b') + app + _0x4040('12') + app + _0x4040('3e') + yduuid + _0x4040('1d') + os + _0x4040('1e') + yduuid + _0x4040('1f') + model + _0x4040('20');
      let _0x4032ca = '';
      let _0x5f581a = '' + this[_0x4040('8')]['\x63\x6b'];
      let _0x372aea = populateUrlObject(_0x46dfc1, _0x5f581a, _0x4032ca);
      await httpRequest(_0x4040('21'), _0x372aea);
      let _0x522ab9 = httpResult;
      if (!_0x522ab9) {
        return;
      }
      if (_0x522ab9[_0x4040('22')] == 0x0) {
        $[_0x4040('b')](_0x4040('c') + this[_0x4040('5')] + _0x4040('4c') + _0x522ab9[_0x4040('23')][_0x4040('4d')] + '\u5143');
      }
      if (_0x522ab9[_0x4040('22')] == 0x3ef) {
        $[_0x4040('b')](_0x4040('c') + this[_0x4040('5')] + '\x5d' + _0x522ab9[_0x4040('27')]);
        if (m < 0x1) {
          await $[_0x4040('47')](0x3e8);
          await this[_0x4040('49')]();
        }
      } else {
        $[_0x4040('b')](_0x4040('c') + this[_0x4040('5')] + '\x5d' + _0x522ab9[_0x4040('27')]);
      }
    } catch (_0x2731de) {} finally {
      return Promise[_0x4040('28')](0x1);
    }
  }
}
!(async () => {
  if (typeof $request !== _0x4040('4e')) {} else {
    if (!(await checkEnv())) {
      return;
    }
    let _0x41c933 = [];
    let _0xd43783 = userList[_0x4040('4f')](_0x28df5f => _0x28df5f[_0x4040('a')]);
    $[_0x4040('b')](_0x4040('50'));
    if (_0xd43783[_0x4040('51')] > 0x0) {
      $[_0x4040('b')](_0x4040('52'));
      _0x41c933 = [];
      for (let _0xb8acfe of _0xd43783) {
        _0x41c933[_0x4040('53')](_0xb8acfe['\x6d\x79']());
      }
      await Promise[_0x4040('54')](_0x41c933);
      _0xd43783 = _0xd43783[_0x4040('4f')](_0x105882 => _0x105882[_0x4040('6')]);
      if (_0xd43783[_0x4040('51')] > 0x0) {
        $[_0x4040('b')](_0x4040('55'));
        _0x41c933 = [];
        for (let _0x2601f4 of _0xd43783[_0x4040('4f')](_0x26f495 => _0x26f495[_0x4040('7')])) {
          if (h == 0x0 && m < 0x1) {
            _0x41c933[_0x4040('53')](_0x2601f4[_0x4040('49')]());
          } else {
            $[_0x4040('b')](_0x4040('56'));
          }
        }
        await Promise[_0x4040('54')](_0x41c933);
        $[_0x4040('b')](_0x4040('57'));
        _0x41c933 = [];
        for (let _0x2ec262 of _0xd43783[_0x4040('4f')](_0x1f07ba => _0x1f07ba[_0x4040('7')])) {
          _0x41c933[_0x4040('53')](_0x2ec262[_0x4040('39')]());
          await $[_0x4040('47')](0x1388);
          _0x41c933[_0x4040('53')](_0x2ec262[_0x4040('29')]());
          await $[_0x4040('47')](0x1388);
          _0x41c933[_0x4040('53')](_0x2ec262['\x68\x62']());
        }
        await Promise[_0x4040('54')](_0x41c933);
      }
    }
    await $[_0x4040('58')]();
  }
})()[_0x4040('59')](_0x56f233 => console[_0x4040('5a')](_0x56f233))[_0x4040('5b')](() => $[_0x4040('5c')]());
async function checkEnv() {
  if (userCookie) {
    let _0x4bd4b0 = envSplitor[0x0];
    for (let _0x3ef521 of envSplitor) {
      if (userCookie[_0x4040('5d')](_0x3ef521) > -0x1) {
        _0x4bd4b0 = _0x3ef521;
        break;
      }
    }
    for (let _0x36ddc0 of userCookie[_0x4040('5e')](_0x4bd4b0)) {
      if (_0x36ddc0) {
        userList[_0x4040('53')](new UserInfo(_0x36ddc0));
      }
    }
    userCount = userList[_0x4040('51')];
  } else {
    console[_0x4040('5a')](_0x4040('5f'));
    return;
  }
  console[_0x4040('5a')](_0x4040('60') + userCount + _0x4040('61'));
  return !![];
}
function populateUrlObject(_0x33a3ed, _0x2abd5f, _0x547f7b = '') {
  let _0x115735 = _0x33a3ed[_0x4040('62')]('\x2f\x2f', '\x2f')[_0x4040('5e')]('\x2f')[0x1];
  let _0x2f69e1 = {
    '\x75\x72\x6c': _0x33a3ed,
    '\x68\x65\x61\x64\x65\x72\x73': {
      'Host': _0x115735,
      'Cookie': _0x2abd5f,
      'User-Agent': _0x4040('63')
    },
    '\x74\x69\x6d\x65\x6f\x75\x74': 0x1388
  };
  if (_0x547f7b) {
    _0x2f69e1[_0x4040('64')] = _0x547f7b;
    _0x2f69e1[_0x4040('65')][_0x4040('66')] = _0x4040('67');
    _0x2f69e1[_0x4040('64')] ? _0x2f69e1[_0x4040('65')][_0x4040('68')] = _0x2f69e1[_0x4040('64')][_0x4040('51')] : _0x2f69e1[_0x4040('65')][_0x4040('68')] = 0x0;
  }
  return _0x2f69e1;
}
async function httpRequest(_0x94509e, _0x10400e) {
  httpResult = null;
  httpReq = null;
  httpResp = null;
  return new Promise(_0x2fcbd3 => {
    $[_0x4040('69')](_0x94509e, _0x10400e, async (_0x42bf33, _0x368d43, _0x3f6d73) => {
      try {
        httpReq = _0x368d43;
        httpResp = _0x3f6d73;
        if (_0x42bf33) {
          console[_0x4040('5a')](_0x94509e + _0x4040('6a'));
          console[_0x4040('5a')](JSON[_0x4040('6b')](_0x42bf33));
        } else {
          if (_0x3f6d73[_0x4040('64')]) {
            if (typeof _0x3f6d73[_0x4040('64')] == _0x4040('6c')) {
              httpResult = _0x3f6d73[_0x4040('64')];
            } else {
              try {
                httpResult = JSON[_0x4040('6d')](_0x3f6d73[_0x4040('64')]);
              } catch (_0x20ede0) {
                httpResult = _0x3f6d73[_0x4040('64')];
              }
            }
          }
        }
      } catch (_0x2416b5) {
        console[_0x4040('5a')](_0x2416b5);
      } finally {
        _0x2fcbd3();
      }
    });
  });
}
function local_hours() {
  let _0x2a6084 = new Date();
  let _0x4b8609 = _0x2a6084[_0x4040('6e')]();
  return _0x4b8609;
}
function local_minutes() {
  let _0x4b4bb1 = new Date();
  let _0x3b1bef = _0x4b4bb1[_0x4040('6f')]();
  return _0x3b1bef;
}
;
_0xod3 = 'jsjiami.com.v6';
function Env(name, env) {
  if ("undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1) {
    process.exit(0);
  }
  return new class {
    constructor(name, env) {
      this.name = name;
      this.notifyStr = '';
      this.startTime = new Date().getTime();
      Object.assign(this, env);
      console.log(`${this.name} 开始运行：\n`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            t ? e = this.lodash_get(t, i, "") : e = e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    send(m, t, e = () => {}) {
      if (m != 'get' && m != 'post' && m != 'put' && m != 'delete') {
        console.log(`无效的http方法：${m}`);
        return;
      }
      if (m == 'get' && t.headers) {
        delete t.headers["content-type"];
        delete t.headers["Content-Length"];
      } else {
        if (t.body && t.headers) {
          if (!t.headers["content-type"]) {
            t.headers["content-type"] = "application/json";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          t.headers = t.headers || {};
          Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          });
        }
        let conf = {
          method: m,
          url: t.url,
          headers: t.headers,
          timeout: t.timeout,
          data: t.body
        };
        if (m == 'get') {
          delete conf.data;
        }
        $axios(conf).then(t => {
          const {
            status: i,
            request: q,
            headers: r,
            data: o
          } = t;
          e(null, q, {
            statusCode: i,
            headers: r,
            body: o
          });
        }).catch(err => console.log(err));
      } else {
        if (this.isQuanX()) {
          t.method = m.toUpperCase();
          if (this.isNeedRewrite) {
            t.opts = t.opts || {};
            Object.assign(t.opts, {
              hints: !1
            });
          }
          $task.fetch(t).then(t => {
            const {
              statusCode: i,
              request: q,
              headers: r,
              body: o
            } = t;
            e(null, q, {
              statusCode: i,
              headers: r,
              body: o
            });
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.got ? this.got = this.got : this.got = require("got");
            const {
              url: s,
              ...i
            } = t;
            this.instance = this.got.extend({
              followRedirect: false
            });
            this.instance[m](s, i).then(t => {
              const {
                statusCode: i,
                request: q,
                headers: r,
                body: o
              } = t;
              e(null, q, {
                statusCode: i,
                headers: r,
                body: o
              });
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t) {
      let e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      if (/(y+)/.test(t)) {
        t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let s in e) if (new RegExp("(" + s + ")").test(t)) {
        t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length));
      }
      return t;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let notifyBody = this.name + " 运行通知\n\n" + this.notifyStr;
      if ($.isNode()) {
        var notify = require('./sendNotify');
        console.log('\n============== 推送 ==============');
        await notify.sendNotify(this.name, notifyBody);
      } else {
        this.msg(notifyBody);
      }
    }
    logAndNotify(str) {
      console.log(str);
      this.notifyStr += str;
      this.notifyStr += '\n';
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "============== 系统通知 =============="];
      h.push(e);
      if (s) {
        h.push(s);
      }
      if (i) {
        h.push(i);
      }
      console.log(h.join("\n"));
    }
    getMin(a, b) {
      return a < b ? a : b;
    }
    getMax(a, b) {
      return a < b ? b : a;
    }
    padStr(num, length, padding = '0') {
      let numStr = String(num);
      let numPad = length > numStr.length ? length - numStr.length : 0;
      let retStr = '';
      for (let i = 0; i < numPad; i++) {
        retStr += padding;
      }
      retStr += numStr;
      return retStr;
    }
    json2str(obj, c, encodeUrl = false) {
      let ret = [];
      for (let keys of Object.keys(obj).sort()) {
        let v = obj[keys];
        if (v && encodeUrl) {
          v = encodeURIComponent(v);
        }
        ret.push(keys + '=' + v);
      }
      return ret.join(c);
    }
    str2json(str, decodeUrl = false) {
      let ret = {};
      for (let item of str.split('&')) {
        if (!item) {
          continue;
        }
        let idx = item.indexOf('=');
        if (idx == -1) {
          continue;
        }
        let k = item.substr(0, idx);
        let v = item.substr(idx + 1);
        if (decodeUrl) {
          v = decodeURIComponent(v);
        }
        ret[k] = v;
      }
      return ret;
    }
    randomString(len, charset = 'abcdef0123456789') {
      let str = '';
      for (let i = 0; i < len; i++) {
        str += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return str;
    }
    randomList(a) {
      let idx = Math.floor(Math.random() * a.length);
      return a[idx];
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      console.log(`\n${this.name} 运行结束，共运行了 ${s} 秒！`);
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(t);
      }
    }
  }(name, env);
}