
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0eb5fwQeclJya7iaPvZ+C50', 'GameTools');
// Script/GameTools.js

"use strict";

var GameConfig = require("GameConfig");
if (cc.sys.platform === cc.sys.WECHAT_GAME) {
  var EQ = require("eq4096");
  EQ.init({
    debug: false,
    showself: true
  });
}
var GameTools = {
  numberLabelAtlas: null,
  backMusicIsPlay: null,
  playSimpleAudioEngine: function playSimpleAudioEngine(engineType) {
    if (GameConfig.IS_GAME_VOICE) {
      switch (engineType) {
        case 0:
          cc.loader.loadRes('music/bg01', cc.AudioClip, function (err, clip) {
            cc.audioEngine.play(clip, true, 0.5);
          });
          break;
        case 1:
          cc.loader.loadRes('music/click', cc.AudioClip, function (err, clip) {
            cc.audioEngine.play(clip, false, 0.5);
          });
          break;
        case 2:
          cc.loader.loadRes('music/new', cc.AudioClip, function (err, clip) {
            cc.audioEngine.play(clip, false, 0.5);
          });
          break;
        case 3:
          cc.loader.loadRes('music/select', cc.AudioClip, function (err, clip) {
            cc.audioEngine.play(clip, false, 0.5);
          });
          break;
        default:
          break;
      }
    }
  },
  playAudio: function playAudio(src) {
    cc.loader.loadRes(src, cc.AudioClip, function (err, clip) {
      cc.audioEngine.play(clip, false, 0.5);
    });
  },
  playBackgroundMusic: function playBackgroundMusic() {
    if (GameTools.backMusicIsPlay == null && GameConfig.IS_GAME_MUSIC) {
      cc.loader.loadRes('music/bg01', cc.AudioClip, function (err, clip) {
        GameTools.backMusicIsPlay = cc.audioEngine.play(clip, true, 0.5);
      });
    }
  },
  stopBackgroundMusic: function stopBackgroundMusic() {
    if (GameTools.backMusicIsPlay != null) {
      cc.audioEngine.stop(GameTools.backMusicIsPlay);
      GameTools.backMusicIsPlay = null;
    }
  },
  getItemByLocalStorage: function getItemByLocalStorage(key, value) {
    var values = cc.sys.localStorage.getItem(key);
    if (values === undefined || values === null || values === '') {
      cc.sys.localStorage.setItem(key, value);
      return value;
    }
    if (typeof value === 'boolean') {
      if (typeof values === 'boolean') {
        return values;
      }
      return "true" == values;
    } else if (typeof value === 'number') {
      return Number(values);
    }
    return values;
  },
  setItemByLocalStorage: function setItemByLocalStorage(key, value) {
    cc.sys.localStorage.setItem(key, value);
  },
  showToast: function showToast(msg) {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.showToast({
        title: msg
      });
    }
    if (cc.sys.platform === cc.sys.QQ_PLAY) {
      BK.UI.showToast({
        title: msg,
        duration: 1500
      });
    } else {
      console.log(msg);
    }
  },
  toastMessage: function toastMessage(toastType) {
    cc.loader.loadRes("Panel/ShowMessage", function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        node.getComponent(cc.Component).setMessage(toastType);
        cc.director.getScene().children[0].addChild(node);
      }
    });
  },
  sharePicture: function sharePicture(pictureName, successCallFunc) {
    if (!GameConfig.IS_GAME_SHARE) {
      return;
    }
    GameTools.setItemByLocalStorage("GameCompoundShareNumber", GameTools.getItemByLocalStorage("GameCompoundShareNumber", 0) + 1);
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      var shareAppMessageValue = {
        title: GameConfig.shareData.title,
        query: "x=" + GameConfig.MAIN_MENU_NUM,
        //+ "&" + qingjs.instance.get_share_token(),
        imageUrl: GameConfig.shareData.url
      };
      if (wx.aldShareAppMessage) {
        wx.aldShareAppMessage(shareAppMessageValue);
      } else {
        window.wx.shareAppMessage(shareAppMessageValue);
      }
    } else if (cc.sys.platform === cc.sys.QQ_PLAY) {
      BK.Share.share({
        qqImgUrl: GameConfig.shareData.url,
        // socialPicPath: 'GameRes://localImage.png',
        title: '大明朝',
        summary: GameConfig.shareData.title,
        // extendInfo: '扩展信息，可选，默认为空',
        success: function success(succObj) {
          // callback && callback(true);
          BK.Console.log('分享成功', succObj.code, JSON.stringify(succObj.data));
          GameConfig.shareComponent.shareSuccess();
        },
        fail: function fail(failObj) {
          // callback && callback(false);
          BK.Console.log('分享失败', failObj.code, JSON.stringify(failObj.msg));
        },
        complete: function complete() {
          BK.Console.log('分享完成，不论成功失败');
        }
      });
    } else {
      if (successCallFunc != undefined) {
        successCallFunc();
      }
      this.toastMessage(0);
      cc.log("执行了截图");
    }
  },
  getEXPNumber: function getEXPNumber(number) {
    if (number == 0) {
      return false;
    }
    if (number <= 3) {
      var num = Math.pow(2, number - 1) * 5;
      return num;
    } else if (number > 3) {
      var _num = Math.pow(2.1, number - 3) * 20;
      return _num;
    }
  },
  createImageApp: function createImageApp(avatarUrl, sprite) {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      try {
        var image = wx.createImage();
        image.src = avatarUrl;
        image.onload = function () {
          try {
            var texture = new cc.Texture2D();
            texture.initWithElement(image);
            texture.handleLoadedTexture();
            texture.width = 110;
            texture.height = 110;
            sprite.spriteFrame = new cc.SpriteFrame(texture);
          } catch (e) {
            console.log(e);
            sprite.node.active = false;
          }
        };
      } catch (e) {
        console.log(e);
        sprite.node.active = false;
      }
    }
  },
  createImage: function createImage(avatarUrl, sprite) {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      try {
        var image = wx.createImage();
        image.src = avatarUrl;
        image.onload = function () {
          try {
            var texture = new cc.Texture2D();
            texture.initWithElement(image);
            texture.handleLoadedTexture();
            sprite.spriteFrame = new cc.SpriteFrame(texture);
          } catch (e) {
            console.log(e);
            sprite.node.active = false;
          }
        };
      } catch (e) {
        console.log(e);
        sprite.node.active = false;
      }
    }
  },
  //小游戏跳转
  navigateToMiniProgram: function navigateToMiniProgram(appId, path) {
    if (path == undefined && appId == undefined) {
      console.log("直接离开");
      return;
    }
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      //console.log(appId);

      if (appId === null) {
        console.log("二维码跳转");
        if (typeof path == 'array') {
          wx.previewImage({
            urls: path
          });
        } else {
          wx.previewImage({
            urls: [path]
          });
        }
      } else {
        console.log("直接跳转");
        wx.navigateToMiniProgram({
          appId: appId,
          path: path,
          envVersion: "release",
          success: function success() {
            console.log("navigate success");
          },
          fail: function fail() {
            console.log("navicate fail");
          }
        });
      }
    } else {
      cc.log("小程序跳转");
    }
  },
  getNumberString: function getNumberString(number) {
    if (number < 1000) {
      return Math.round(number);
    } else if (number < 1000000) {
      return (number / 1000).toFixed(2) + "K";
    } else if (number < 1000000000) {
      return (number / 1000000).toFixed(2) + "M";
    } else if (number < 1000000000000) {
      return (number / 1000000000).toFixed(2) + "B";
    } else if (number < 1000000000000000) {
      return (number / 1000000000000).toFixed(2) + "T";
    } else if (number < 1000000000000000000) {
      return (number / 1000000000000000).toFixed(2) + "aa";
    } else if (number < 1000000000000000000000) {
      return (number / 1000000000000000000).toFixed(2) + "Q";
    } else {
      return (number / 1000000000000000000).toFixed(2) + "Q+";
    }
  },
  //小游戏显示
  showMinProgram: function showMinProgram(node, flag) {
    if (GameConfig.MiniProgram == undefined || GameConfig.MiniProgram.length == 0) {
      return;
    }
    var randomIndex;
    // if(flag == 2){
    var length = GameConfig.MiniProgram.length - 1;
    randomIndex = Math.round(Math.random() * length);
    // }
    var miniProgram = GameConfig.MiniProgram[randomIndex];
    var image = wx.createImage();
    image.src = miniProgram.icon;
    image.onload = function () {
      try {
        if (node == undefined) {
          return;
        }
        node.active = true;
        var texture = new cc.Texture2D();
        texture.initWithElement(image);
        texture.handleLoadedTexture();
        texture.width = 90;
        texture.height = 90;
        if (node.getComponent(cc.Sprite) != undefined) {
          node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        }
        // cc.loader.load(miniProgram.path, (err, tex) => {
        //     if (!err) {
        //         node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
        //     }
        // });
        GameConfig.APPID = miniProgram.appId;
        GameConfig.PATH = miniProgram.path;
      } catch (e) {
        console.log(e);
      }
    };
  },
  //获取跳转的信息
  initEQMiniProgram: function initEQMiniProgram(userInfo, callback) {
    // if (userInfo == null) {
    //     callback(false);
    //     return;
    // }
    var launchOption = wx.getLaunchOptionsSync();
    EQ.setuserinfo(userInfo, launchOption);
    EQ.Enable();
    // let can = EQ.more();
    // if (can) {
    var config = EQ.getconfig();
    var recommender = config.data.recommender;
    if (recommender != undefined) {
      for (var i = 0; i < recommender.length; i++) {
        var ad = recommender[i];
        if (ad.type == 'wxapp') {
          GameConfig.MiniProgram.push({
            icon: ad.icon[0],
            appId: ad.appId,
            path: ad.path,
            name: ad.name
          });
        }
        if (ad.type == 'img') {
          GameConfig.MiniProgram.push({
            icon: ad.icon[0],
            appId: null,
            path: ad.path,
            name: ad.name
          });
        }
      }
      console.log("可以", GameConfig.MiniProgram);
      // callback && callback(true);
      // }else{
      //     this.initEQMiniProgram();
    }
    //解析盒子数据
    var box = config.data.box;
    if (box != undefined && GameConfig.boxApps.length == 0) {
      if (box.title != undefined) {
        GameConfig.boxTitle = box.title;
      }
      for (var _i = 0; _i < box.apps.length; _i++) {
        var _ad = box.apps[_i];
        // console.log(ad);
        if (_ad.type == 'wxapp') {
          GameConfig.boxApps.push({
            icon: _ad.icon[0],
            appId: _ad.appId,
            path: _ad.path,
            name: _ad.name
          });
        } else if (_ad.type == 'img') {
          GameConfig.boxApps.push({
            icon: _ad.icon[0],
            appId: null,
            path: _ad.path,
            name: _ad.name
          });
        }
      }
    }
    callback && callback(true);
    // } else {
    //     callback && callback(false);
    // } 
  },
  getRankData: function getRankData(shareTicket) {
    //获取排行榜
    console.log("获取排行榜");
    cc.loader.loadRes("panel/RankingListView", function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        if (shareTicket != undefined) {
          node.getComponent(cc.Component).shareTicket = shareTicket;
        }
        cc.director.getScene().children[0].addChild(node);
      }
    });
  },
  removeRankData: function removeRankData() {
    //移除排行榜数据
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      window.wx.postMessage({
        messageType: 0
      });
    } else {
      cc.log("移除排行榜数据。");
    }
  },
  //流量主
  _createVedioAd: function _createVedioAd(callback) {
    console.log("平台:", cc.sys.platform);
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      // wx.aldSendEvent('观看视频',{'key' : 'value'});
      var _videoAd = wx.createRewardedVideoAd({
        adUnitId: 'adunit-edfb4efcf6b9bb8a'
      });
      _videoAd.load().then(function () {
        return _videoAd.show();
      })["catch"](function (err) {
        console.log("视频加载失败", err);
        wx.showModal({
          title: '提示',
          content: '视频加载失败',
          showCancel: false
        });
      });
      _videoAd.onClose(function (res) {
        if (!_videoAd) {
          return;
        }
        if (res.isEnded) {
          // wx.aldSendEvent('完整观看视频',{'key' : 'value'});
          callback(res);
          _videoAd.offClose();
        } else {
          _videoAd.offClose();
        }
      });
      _videoAd.onError(function (msg) {
        wx.showToast({
          title: '错误'
        });
        console.log(msg);
      });
    } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
      var _videoAd2 = tt.createRewardedVideoAd({
        adUnitId: 'ee0p26br1fl1he0gi4'
      });
      _videoAd2.load().then(function () {
        return _videoAd2.show();
      })["catch"](function (err) {
        console.log("视频加载失败", err);
        tt.showModal({
          title: '提示',
          content: '视频加载失败',
          showCancel: false
        });
      });
      _videoAd2.onClose(function (res) {
        if (!_videoAd2) {
          return;
        }
        if (res.isEnded) {
          // wx.aldSendEvent('完整观看视频',{'key' : 'value'});
          callback(res);
          _videoAd2.offClose();
        } else {
          console.log("未播放完关闭");
          _videoAd2.offClose();
        }
      });
      _videoAd2.onError(function (msg) {
        tt.showToast({
          title: '错误'
        });
        console.log(msg);
      });
    } else if (cc.sys.platform === cc.sys.QQ_PLAY) {
      var videoAd = BK.Advertisement.createVideoAd();
      videoAd.onLoad(function () {
        //加载成功
        BK.Script.log(1, 1, "onLoad");
      });
      videoAd.onPlayStart(function () {
        //开始播放
        BK.Script.log(1, 1, "onPlayStart");
      });
      videoAd.onPlayFinish(function () {
        //播放结束
        BK.Script.log(1, 1, "onPlayFinish");
        callback({
          isEnded: true
        });
      });
      videoAd.onError(function (err) {
        //加载失败
        BK.Script.log(1, 1, "onError code:" + err.code + " msg:" + err.msg);
      });
      videoAd.show();
    } else {
      callback({
        raw: true
      });
    }
  },
  getUserInfo: function getUserInfo() {
    //获取用户信息
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            //是否授权用户信息
            wx.getUserInfo({
              success: function success(res) {
                var userInfo = res.userInfo;
                GameConfig.UserInfo.nickName = userInfo.nickName;
                GameConfig.UserInfo.avatarUrl = userInfo.avatarUrl;
                GameConfig.UserInfo = userInfo;
              }
            });
          } else {
            wx.authorize({
              scope: 'scope.userInfo',
              success: function success() {
                wx.getUserInfo({
                  success: function success(res) {
                    var userInfo = res.userInfo;
                    GameConfig.UserInfo.nickName = userInfo.nickName;
                    GameConfig.UserInfo.avatarUrl = userInfo.avatarUrl;
                    GameConfig.UserInfo = userInfo;
                  }
                });
              },
              fail: function fail() {
                GameTools.toastMessage(1);
              }
            });
          }
        }
      });
    } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
      console.log("字节getUserInfo");
    } else {
      GameConfig.UserInfo.nickName = GameConfig.playerName[Math.floor(Math.random() * 107)] + Math.floor(Math.random() * 107);
    }
  },
  submitScore: function submitScore(score) {
    //提交得分
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      window.wx.postMessage({
        messageType: 3,
        MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
        score: score,
        level: GameConfig.GamePersonMaxLevel
      });
    } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {} else if (cc.sys.platform === cc.sys.QQ_PLAY) {
      var data = {
        userData: [{
          openId: GameConfig.OPENID,
          startMs: GameConfig.startMs + '',
          //必填，游戏开始时间，单位为毫秒，字符串类型
          endMs: new Date().getTime().toString(),
          //必填，游戏结束时间，单位为毫秒，字符串类型
          scoreInfo: {
            score: score,
            //分数，类型必须是整型数
            a1: GameConfig.GamePersonMaxLevel
          }
        }],
        attr: {
          score: {
            type: 'rank',
            order: 1
          },
          a1: {
            type: 'rank',
            order: 1
          }
        }
      };
      // gameMode: 游戏模式，如果没有模式区分，直接填 1
      // 必须配置好周期规则后，才能使用数据上报和排行榜功能
      BK.QQ.uploadScoreWithoutRoom(1, data, function (errCode, cmd, data) {
        // 返回错误码信息
        if (errCode !== 0) {
          BK.Script.log(1, 1, '上传分数失败!错误码：' + errCode);
        }
      });
    } else {
      cc.log("提交得分:" + GameConfig.MAIN_MENU_NUM + " : " + score);
    }
  },
  //自家的appid
  initSelfMiniProgram: function initSelfMiniProgram(callback) {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {}
  }
};
module.exports = GameTools;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lVG9vbHMuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJjYyIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJFUSIsImluaXQiLCJkZWJ1ZyIsInNob3dzZWxmIiwiR2FtZVRvb2xzIiwibnVtYmVyTGFiZWxBdGxhcyIsImJhY2tNdXNpY0lzUGxheSIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsImVuZ2luZVR5cGUiLCJJU19HQU1FX1ZPSUNFIiwibG9hZGVyIiwibG9hZFJlcyIsIkF1ZGlvQ2xpcCIsImVyciIsImNsaXAiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJwbGF5QXVkaW8iLCJzcmMiLCJwbGF5QmFja2dyb3VuZE11c2ljIiwiSVNfR0FNRV9NVVNJQyIsInN0b3BCYWNrZ3JvdW5kTXVzaWMiLCJzdG9wIiwiZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlIiwia2V5IiwidmFsdWUiLCJ2YWx1ZXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidW5kZWZpbmVkIiwic2V0SXRlbSIsIk51bWJlciIsInNldEl0ZW1CeUxvY2FsU3RvcmFnZSIsInNob3dUb2FzdCIsIm1zZyIsInd4IiwidGl0bGUiLCJRUV9QTEFZIiwiQksiLCJVSSIsImR1cmF0aW9uIiwiY29uc29sZSIsImxvZyIsInRvYXN0TWVzc2FnZSIsInRvYXN0VHlwZSIsInByZWZhYiIsIm5vZGUiLCJpbnN0YW50aWF0ZSIsImdldENvbXBvbmVudCIsIkNvbXBvbmVudCIsInNldE1lc3NhZ2UiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiY2hpbGRyZW4iLCJhZGRDaGlsZCIsInNoYXJlUGljdHVyZSIsInBpY3R1cmVOYW1lIiwic3VjY2Vzc0NhbGxGdW5jIiwiSVNfR0FNRV9TSEFSRSIsInNoYXJlQXBwTWVzc2FnZVZhbHVlIiwic2hhcmVEYXRhIiwicXVlcnkiLCJNQUlOX01FTlVfTlVNIiwiaW1hZ2VVcmwiLCJ1cmwiLCJhbGRTaGFyZUFwcE1lc3NhZ2UiLCJ3aW5kb3ciLCJzaGFyZUFwcE1lc3NhZ2UiLCJTaGFyZSIsInNoYXJlIiwicXFJbWdVcmwiLCJzdW1tYXJ5Iiwic3VjY2VzcyIsInN1Y2NPYmoiLCJDb25zb2xlIiwiY29kZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic2hhcmVDb21wb25lbnQiLCJzaGFyZVN1Y2Nlc3MiLCJmYWlsIiwiZmFpbE9iaiIsImNvbXBsZXRlIiwiZ2V0RVhQTnVtYmVyIiwibnVtYmVyIiwibnVtIiwiTWF0aCIsInBvdyIsImNyZWF0ZUltYWdlQXBwIiwiYXZhdGFyVXJsIiwic3ByaXRlIiwiaW1hZ2UiLCJjcmVhdGVJbWFnZSIsIm9ubG9hZCIsInRleHR1cmUiLCJUZXh0dXJlMkQiLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwid2lkdGgiLCJoZWlnaHQiLCJzcHJpdGVGcmFtZSIsIlNwcml0ZUZyYW1lIiwiZSIsImFjdGl2ZSIsIm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSIsImFwcElkIiwicGF0aCIsInByZXZpZXdJbWFnZSIsInVybHMiLCJlbnZWZXJzaW9uIiwiZ2V0TnVtYmVyU3RyaW5nIiwicm91bmQiLCJ0b0ZpeGVkIiwic2hvd01pblByb2dyYW0iLCJmbGFnIiwiTWluaVByb2dyYW0iLCJsZW5ndGgiLCJyYW5kb21JbmRleCIsInJhbmRvbSIsIm1pbmlQcm9ncmFtIiwiaWNvbiIsIlNwcml0ZSIsIkFQUElEIiwiUEFUSCIsImluaXRFUU1pbmlQcm9ncmFtIiwidXNlckluZm8iLCJjYWxsYmFjayIsImxhdW5jaE9wdGlvbiIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwic2V0dXNlcmluZm8iLCJFbmFibGUiLCJjb25maWciLCJnZXRjb25maWciLCJyZWNvbW1lbmRlciIsImkiLCJhZCIsInR5cGUiLCJwdXNoIiwibmFtZSIsImJveCIsImJveEFwcHMiLCJib3hUaXRsZSIsImFwcHMiLCJnZXRSYW5rRGF0YSIsInNoYXJlVGlja2V0IiwicmVtb3ZlUmFua0RhdGEiLCJwb3N0TWVzc2FnZSIsIm1lc3NhZ2VUeXBlIiwiX2NyZWF0ZVZlZGlvQWQiLCJ2aWRlb0FkIiwiY3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwiYWRVbml0SWQiLCJsb2FkIiwidGhlbiIsInNob3ciLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsIm9uQ2xvc2UiLCJyZXMiLCJpc0VuZGVkIiwib2ZmQ2xvc2UiLCJvbkVycm9yIiwiQllURURBTkNFX0dBTUUiLCJ0dCIsIkFkdmVydGlzZW1lbnQiLCJjcmVhdGVWaWRlb0FkIiwib25Mb2FkIiwiU2NyaXB0Iiwib25QbGF5U3RhcnQiLCJvblBsYXlGaW5pc2giLCJyYXciLCJnZXRVc2VySW5mbyIsImdldFNldHRpbmciLCJhdXRoU2V0dGluZyIsIlVzZXJJbmZvIiwibmlja05hbWUiLCJhdXRob3JpemUiLCJzY29wZSIsInBsYXllck5hbWUiLCJmbG9vciIsInN1Ym1pdFNjb3JlIiwic2NvcmUiLCJsZXZlbCIsIkdhbWVQZXJzb25NYXhMZXZlbCIsInVzZXJEYXRhIiwib3BlbklkIiwiT1BFTklEIiwic3RhcnRNcyIsImVuZE1zIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsInNjb3JlSW5mbyIsImExIiwiYXR0ciIsIm9yZGVyIiwiUVEiLCJ1cGxvYWRTY29yZVdpdGhvdXRSb29tIiwiZXJyQ29kZSIsImNtZCIsImluaXRTZWxmTWluaVByb2dyYW0iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUV0QyxJQUFJQyxFQUFFLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLRixFQUFFLENBQUNDLEdBQUcsQ0FBQ0UsV0FBVyxFQUFFO0VBQ3hDLElBQUtDLEVBQUUsR0FBSUwsT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUM1QkssRUFBRSxDQUFDQyxJQUFJLENBQUM7SUFDSkMsS0FBSyxFQUFFLEtBQUs7SUFDWkMs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V0FBVyxFQUFFLENBQzVDO0VBQ0o7QUFDSixDQUFDO0FBRUQ0TSxNQUFNLENBQUNDLE9BQU8sR0FBR3hNLFNBQVMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XHJcblxyXG5pZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgIHZhciAgRVEgID0gcmVxdWlyZShcImVxNDA5NlwiKTtcclxuICAgIEVRLmluaXQoe1xyXG4gICAgICAgIGRlYnVnOiBmYWxzZSxcclxuICAgICAgICBzaG93c2VsZjogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxudmFyIEdhbWVUb29scyA9IHtcclxuICAgIG51bWJlckxhYmVsQXRsYXM6IG51bGwsXHJcbiAgICBiYWNrTXVzaWNJc1BsYXk6IG51bGwsXHJcbiAgICBwbGF5U2ltcGxlQXVkaW9FbmdpbmU6IGZ1bmN0aW9uIChlbmdpbmVUeXBlKSB7XHJcbiAgICAgICAgaWYgKEdhbWVDb25maWcuSVNfR0FNRV9WT0lDRSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGVuZ2luZVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbXVzaWMvYmcwMScsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIHRydWUsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ211c2ljL2NsaWNrJywgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgZmFsc2UsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ211c2ljL25ldycsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGZhbHNlLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdtdXNpYy9zZWxlY3QnLCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBmYWxzZSwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheUF1ZGlvKHNyYykge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHNyYywgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgZmFsc2UsIDAuNSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcGxheUJhY2tncm91bmRNdXNpYzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChHYW1lVG9vbHMuYmFja011c2ljSXNQbGF5ID09IG51bGwgJiYgR2FtZUNvbmZpZy5JU19HQU1FX01VU0lDKSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdtdXNpYy9iZzAxJywgY2MuQXVkaW9DbGlwLCBmdW5jdGlvbiAoZXJyLCBjbGlwKSB7XHJcbiAgICAgICAgICAgICAgICBHYW1lVG9vbHMuYmFja011c2ljSXNQbGF5ID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCB0cnVlLCAwLjUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RvcEJhY2tncm91bmRNdXNpYzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChHYW1lVG9vbHMuYmFja011c2ljSXNQbGF5ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChHYW1lVG9vbHMuYmFja011c2ljSXNQbGF5KTtcclxuICAgICAgICAgICAgR2FtZVRvb2xzLmJhY2tNdXNpY0lzUGxheSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldEl0ZW1CeUxvY2FsU3RvcmFnZTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICBsZXQgdmFsdWVzID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgaWYgKHZhbHVlcyA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlcyA9PT0gbnVsbCB8fCB2YWx1ZXMgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJ0cnVlXCIgPT0gdmFsdWVzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICB9LFxyXG4gICAgc2V0SXRlbUJ5TG9jYWxTdG9yYWdlOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd1RvYXN0KG1zZykge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1zZ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1pZihjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5RUV9QTEFZKXtcclxuICAgICAgICAgICAgQksuVUkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBtc2csXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjoxNTAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sXHJcbiAgICB0b2FzdE1lc3NhZ2UodG9hc3RUeXBlKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJQYW5lbC9TaG93TWVzc2FnZVwiLCAoZXJyLCBwcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFlcnIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCkuc2V0TWVzc2FnZSh0b2FzdFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5jaGlsZHJlblswXS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNoYXJlUGljdHVyZShwaWN0dXJlTmFtZSwgc3VjY2Vzc0NhbGxGdW5jKSB7XHJcbiAgICAgICAgaWYoIUdhbWVDb25maWcuSVNfR0FNRV9TSEFSRSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVDb21wb3VuZFNoYXJlTnVtYmVyXCIsIEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJHYW1lQ29tcG91bmRTaGFyZU51bWJlclwiLCAwKSArIDEpO1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICBsZXQgc2hhcmVBcHBNZXNzYWdlVmFsdWUgPSB7ICAgXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogR2FtZUNvbmZpZy5zaGFyZURhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTogXCJ4PVwiICsgR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNLCAvLysgXCImXCIgKyBxaW5nanMuaW5zdGFuY2UuZ2V0X3NoYXJlX3Rva2VuKCksXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybDogR2FtZUNvbmZpZy5zaGFyZURhdGEudXJsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAod3guYWxkU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5hbGRTaGFyZUFwcE1lc3NhZ2Uoc2hhcmVBcHBNZXNzYWdlVmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lnd4LnNoYXJlQXBwTWVzc2FnZShzaGFyZUFwcE1lc3NhZ2VWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5RUV9QTEFZKXtcclxuICAgICAgICAgICAgQksuU2hhcmUuc2hhcmUoe1xyXG4gICAgICAgICAgICAgICAgcXFJbWdVcmw6IEdhbWVDb25maWcuc2hhcmVEYXRhLnVybCxcclxuICAgICAgICAgICAgICAgIC8vIHNvY2lhbFBpY1BhdGg6ICdHYW1lUmVzOi8vbG9jYWxJbWFnZS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflpKfmmI7mnJ0nLFxyXG4gICAgICAgICAgICAgICAgc3VtbWFyeTogR2FtZUNvbmZpZy5zaGFyZURhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAvLyBleHRlbmRJbmZvOiAn5omp5bGV5L+h5oGv77yM5Y+v6YCJ77yM6buY6K6k5Li656m6JyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChzdWNjT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgQksuQ29uc29sZS5sb2coJ+WIhuS6q+aIkOWKnycsIHN1Y2NPYmouY29kZSwgSlNPTi5zdHJpbmdpZnkoc3VjY09iai5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5zaGFyZUNvbXBvbmVudC5zaGFyZVN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZmFpbE9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrICYmIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBCSy5Db25zb2xlLmxvZygn5YiG5Lqr5aSx6LSlJywgZmFpbE9iai5jb2RlLCBKU09OLnN0cmluZ2lmeShmYWlsT2JqLm1zZykpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQksuQ29uc29sZS5sb2coJ+WIhuS6q+WujOaIkO+8jFxi5LiN6K665oiQ5Yqf5aSx6LSlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChzdWNjZXNzQ2FsbEZ1bmMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzQ2FsbEZ1bmMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRvYXN0TWVzc2FnZSgwKTtcclxuICAgICAgICAgICAgY2MubG9nKFwi5omn6KGM5LqG5oiq5Zu+XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIGdldEVYUE51bWJlcihudW1iZXIpIHtcclxuICAgICAgICBpZihudW1iZXIgPT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG51bWJlciA8PSAzKSB7XHJcbiAgICAgICAgICAgIGxldCBudW0gPSBNYXRoLnBvdygyLChudW1iZXItMSkpKjU7XHJcbiAgICAgICAgICAgIHJldHVybiBudW07XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW1iZXIgPiAzKSB7XHJcbiAgICAgICAgICAgIGxldCBudW0gPSBNYXRoLnBvdygyLjEsKG51bWJlci0zKSkqMjA7XHJcbiAgICAgICAgICAgIHJldHVybiBudW07XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVJbWFnZUFwcChhdmF0YXJVcmwsIHNwcml0ZSkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlID0gd3guY3JlYXRlSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IGF2YXRhclVybDtcclxuICAgICAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5pbml0V2l0aEVsZW1lbnQoaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS53aWR0aCA9IDExMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5oZWlnaHQgPSAxMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZUltYWdlKGF2YXRhclVybCwgc3ByaXRlKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW1hZ2UgPSB3eC5jcmVhdGVJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3JjID0gYXZhdGFyVXJsO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLmluaXRXaXRoRWxlbWVudChpbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUuaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+Wwj+a4uOaIj+i3s+i9rFxyXG4gICAgbmF2aWdhdGVUb01pbmlQcm9ncmFtKGFwcElkLCBwYXRoKSB7XHJcbiAgICAgICAgaWYgKHBhdGggPT0gdW5kZWZpbmVkICYmIGFwcElkID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuebtOaOpeemu+W8gFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhcHBJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoYXBwSWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LqM57u056CB6Lez6L2sXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAocGF0aCkgPT0gJ2FycmF5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnByZXZpZXdJbWFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybHM6IHBhdGhcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxzOiBbcGF0aF1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnm7TmjqXot7PovaxcIik7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGVudlZlcnNpb246IFwicmVsZWFzZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuYXZpZ2F0ZSBzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5hdmljYXRlIGZhaWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwi5bCP56iL5bqP6Lez6L2sXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXROdW1iZXJTdHJpbmcobnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKG51bWJlciA8IDEwMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDEwMDAwMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIChudW1iZXIgLyAxMDAwKS50b0ZpeGVkKDIpICsgXCJLXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCAxMDAwMDAwMDAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobnVtYmVyIC8gMTAwMDAwMCkudG9GaXhlZCgyKSArIFwiTVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgMTAwMDAwMDAwMDAwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKG51bWJlciAvIDEwMDAwMDAwMDApLnRvRml4ZWQoMikgKyBcIkJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDEwMDAwMDAwMDAwMDAwMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIChudW1iZXIgLyAxMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpICsgXCJUXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCAxMDAwMDAwMDAwMDAwMDAwMDAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAobnVtYmVyIC8gMTAwMDAwMDAwMDAwMDAwMCkudG9GaXhlZCgyKSArIFwiYWFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDEwMDAwMDAwMDAwMDAwMDAwMDAwMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIChudW1iZXIgLyAxMDAwMDAwMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpICsgXCJRXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChudW1iZXIgLyAxMDAwMDAwMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDIpICsgXCJRK1wiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8v5bCP5ri45oiP5pi+56S6XHJcbiAgICBzaG93TWluUHJvZ3JhbShub2RlLGZsYWcpIHtcclxuICAgICAgICBpZiAoR2FtZUNvbmZpZy5NaW5pUHJvZ3JhbSA9PSB1bmRlZmluZWQgfHwgR2FtZUNvbmZpZy5NaW5pUHJvZ3JhbS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByYW5kb21JbmRleDtcclxuICAgICAgICAvLyBpZihmbGFnID09IDIpe1xyXG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gR2FtZUNvbmZpZy5NaW5pUHJvZ3JhbS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBtaW5pUHJvZ3JhbSA9IEdhbWVDb25maWcuTWluaVByb2dyYW1bcmFuZG9tSW5kZXhdO1xyXG4gICAgICAgIGxldCBpbWFnZSA9IHd4LmNyZWF0ZUltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gbWluaVByb2dyYW0uaWNvbjtcclxuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZihub2RlID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpO1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5pbml0V2l0aEVsZW1lbnQoaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGV4dHVyZS5oYW5kbGVMb2FkZWRUZXh0dXJlKCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLndpZHRoID0gOTA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlLmhlaWdodCA9IDkwO1xyXG4gICAgICAgICAgICAgICAgaWYobm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZChtaW5pUHJvZ3JhbS5wYXRoLCAoZXJyLCB0ZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkFQUElEID0gbWluaVByb2dyYW0uYXBwSWQ7XHJcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLlBBVEggPSBtaW5pUHJvZ3JhbS5wYXRoO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG5cclxuICAgIC8v6I635Y+W6Lez6L2s55qE5L+h5oGvXHJcbiAgICBpbml0RVFNaW5pUHJvZ3JhbTogZnVuY3Rpb24gKHVzZXJJbmZvLCBjYWxsYmFjayl7XHJcbiAgICAgICAgLy8gaWYgKHVzZXJJbmZvID09IG51bGwpIHtcclxuICAgICAgICAvLyAgICAgY2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCBsYXVuY2hPcHRpb24gPSB3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgICAgIEVRLnNldHVzZXJpbmZvKHVzZXJJbmZvLGxhdW5jaE9wdGlvbik7XHJcbiAgICAgICAgRVEuRW5hYmxlKCk7XHJcbiAgICAgICAgLy8gbGV0IGNhbiA9IEVRLm1vcmUoKTtcclxuICAgICAgICAvLyBpZiAoY2FuKSB7XHJcbiAgICAgICAgICAgIGxldCBjb25maWcgPSBFUS5nZXRjb25maWcoKTtcclxuICAgICAgICAgICAgbGV0IHJlY29tbWVuZGVyID0gY29uZmlnLmRhdGEucmVjb21tZW5kZXI7XHJcbiAgICAgICAgICAgIGlmIChyZWNvbW1lbmRlciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjb21tZW5kZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWQgPSByZWNvbW1lbmRlcltpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWQudHlwZSA9PSAnd3hhcHAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuTWluaVByb2dyYW0ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBhZC5pY29uWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IGFkLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogYWQucGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFkLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZC50eXBlID09ICdpbWcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuTWluaVByb2dyYW0ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBhZC5pY29uWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBhZC5wYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYWQubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWPr+S7pVwiLEdhbWVDb25maWcuTWluaVByb2dyYW0pXHJcbiAgICAgICAgICAgICAgICAvLyBjYWxsYmFjayAmJiBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgLy8gfWVsc2V7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmluaXRFUU1pbmlQcm9ncmFtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/op6PmnpDnm5LlrZDmlbDmja5cclxuICAgICAgICAgICAgbGV0IGJveCA9IGNvbmZpZy5kYXRhLmJveDtcclxuICAgICAgICAgICAgaWYoYm94ICE9IHVuZGVmaW5lZCAmJiBHYW1lQ29uZmlnLmJveEFwcHMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgaWYoYm94LnRpdGxlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5ib3hUaXRsZSA9IGJveC50aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm94LmFwcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWQgPSBib3guYXBwc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkLnR5cGUgPT0gJ3d4YXBwJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLmJveEFwcHMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBhZC5pY29uWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IGFkLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogYWQucGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFkLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYgKGFkLnR5cGUgPT0gJ2ltZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5ib3hBcHBzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogYWQuaWNvblswXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcElkOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogYWQucGF0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFkLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgIC8vIH0gXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG4gICAgZ2V0UmFua0RhdGEoc2hhcmVUaWNrZXQpIHsgLy/ojrflj5bmjpLooYzmppxcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuiOt+WPluaOkuihjOamnFwiKVxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwicGFuZWwvUmFua2luZ0xpc3RWaWV3XCIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWVycikge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNoYXJlVGlja2V0ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkNvbXBvbmVudCkuc2hhcmVUaWNrZXQgPSBzaGFyZVRpY2tldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuY2hpbGRyZW5bMF0uYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVSYW5rRGF0YSgpIHsvL+enu+mZpOaOkuihjOamnOaVsOaNrlxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICB3aW5kb3cud3gucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDAsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuenu+mZpOaOkuihjOamnOaVsOaNruOAglwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/mtYHph4/kuLtcclxuICAgIF9jcmVhdGVWZWRpb0FkOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuW5s+WPsDpcIixjYy5zeXMucGxhdGZvcm0pXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIC8vIHd4LmFsZFNlbmRFdmVudCgn6KeC55yL6KeG6aKRJyx7J2tleScgOiAndmFsdWUnfSk7XHJcbiAgICAgICAgICAgIGxldCB2aWRlb0FkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgICAgIGFkVW5pdElkOiAnYWR1bml0LWVkZmI0ZWZjZjZiOWJiOGEnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2aWRlb0FkLmxvYWQoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdmlkZW9BZC5zaG93KCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6KeG6aKR5Yqg6L295aSx6LSlXCIsZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfop4bpopHliqDovb3lpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZpZGVvQWQub25DbG9zZShmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZighdmlkZW9BZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHJlcy5pc0VuZGVkKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB3eC5hbGRTZW5kRXZlbnQoJ+WujOaVtOingueci+inhumikScseydrZXknIDogJ3ZhbHVlJ30pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9BZC5vZmZDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9BZC5vZmZDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmlkZW9BZC5vbkVycm9yKGZ1bmN0aW9uKG1zZyl7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6ZSZ6K+vJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuQllURURBTkNFX0dBTUUpe1xyXG4gICAgICAgICAgICBsZXQgdmlkZW9BZCA9IHR0LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogJ2VlMHAyNmJyMWZsMWhlMGdpNCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZpZGVvQWQubG9hZCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB2aWRlb0FkLnNob3coKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLop4bpopHliqDovb3lpLHotKVcIixlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHR0LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+inhumikeWKoOi9veWksei0pScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmlkZW9BZC5vbkNsb3NlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmKCF2aWRlb0FkKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocmVzLmlzRW5kZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHd4LmFsZFNlbmRFdmVudCgn5a6M5pW06KeC55yL6KeG6aKRJyx7J2tleScgOiAndmFsdWUnfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB2aWRlb0FkLm9mZkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuacquaSreaUvuWujOWFs+mXrVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQWQub2ZmQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZpZGVvQWQub25FcnJvcihmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgICAgICAgICAgdHQuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+mUmeivrydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1lbHNlIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlFRX1BMQVkpe1xyXG4gICAgICAgICAgICB2YXIgdmlkZW9BZCA9IEJLLkFkdmVydGlzZW1lbnQuY3JlYXRlVmlkZW9BZCgpO1xyXG4gICAgICAgICAgICB2aWRlb0FkLm9uTG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WKoOi9veaIkOWKn1xyXG4gICAgICAgICAgICAgICAgQksuU2NyaXB0LmxvZygxLCAxLCBcIm9uTG9hZFwiKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvQWQub25QbGF5U3RhcnQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy/lvIDlp4vmkq3mlL5cclxuICAgICAgICAgICAgICAgIEJLLlNjcmlwdC5sb2coMSwgMSwgXCJvblBsYXlTdGFydFwiKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZpZGVvQWQub25QbGF5RmluaXNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8v5pKt5pS+57uT5p2fXHJcbiAgICAgICAgICAgICAgICBCSy5TY3JpcHQubG9nKDEsIDEsIFwib25QbGF5RmluaXNoXCIpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soe2lzRW5kZWQgOiB0cnVlfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmlkZW9BZC5vbkVycm9yKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIC8v5Yqg6L295aSx6LSlXHJcbiAgICAgICAgICAgICAgICBCSy5TY3JpcHQubG9nKDEsIDEsIFwib25FcnJvciBjb2RlOlwiICsgZXJyLmNvZGUgKyBcIiBtc2c6XCIgKyBlcnIubXNnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2aWRlb0FkLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYWxsYmFjayh7IHJhdzogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFVzZXJJbmZvKCkgey8v6I635Y+W55So5oi35L+h5oGvXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7Ly/mmK/lkKbmjojmnYPnlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IHJlcy51c2VySW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLlVzZXJJbmZvLm5pY2tOYW1lID0gdXNlckluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5Vc2VySW5mby5hdmF0YXJVcmwgPSB1c2VySW5mby5hdmF0YXJVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5Vc2VySW5mbyA9IHVzZXJJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5hdXRob3JpemUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6ICdzY29wZS51c2VySW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5Vc2VySW5mby5uaWNrTmFtZSA9IHVzZXJJbmZvLm5pY2tOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5Vc2VySW5mby5hdmF0YXJVcmwgPSB1c2VySW5mby5hdmF0YXJVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLlVzZXJJbmZvID0gdXNlckluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy50b2FzdE1lc3NhZ2UoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuQllURURBTkNFX0dBTUUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWtl+iKgmdldFVzZXJJbmZvXCIpXHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBHYW1lQ29uZmlnLlVzZXJJbmZvLm5pY2tOYW1lID0gR2FtZUNvbmZpZy5wbGF5ZXJOYW1lW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwNyldICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTA3KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3VibWl0U2NvcmUoc2NvcmUpIHsgLy/mj5DkuqTlvpfliIZcclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgd2luZG93Lnd4LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiAzLFxyXG4gICAgICAgICAgICAgICAgTUFJTl9NRU5VX05VTTogR2FtZUNvbmZpZy5NQUlOX01FTlVfTlVNLFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IHNjb3JlLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWw6IEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuQllURURBTkNFX0dBTUUpe1xyXG5cclxuICAgICAgICB9ZWxzZSBpZihjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5RUV9QTEFZKXtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB1c2VyRGF0YTogW3tcclxuICAgICAgICAgICAgICAgICAgICBvcGVuSWQ6IEdhbWVDb25maWcuT1BFTklELFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0TXM6IEdhbWVDb25maWcuc3RhcnRNcyArICcnLCAvL+W/heWhq++8jOa4uOaIj+W8gOWni+aXtumXtO+8jOWNleS9jeS4uuavq+enku+8jOWtl+espuS4suexu+Wei1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZE1zOiAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSkudG9TdHJpbmcoKSwgLy/lv4XloavvvIzmuLjmiI/nu5PmnZ/ml7bpl7TvvIzljZXkvY3kuLrmr6vnp5LvvIzlrZfnrKbkuLLnsbvlnotcclxuICAgICAgICAgICAgICAgICAgICBzY29yZUluZm86IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmU6IHNjb3JlLCAvL+WIhuaVsO+8jOexu+Wei+W/hemhu+aYr+aVtOWei+aVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhMTogR2FtZUNvbmZpZy5HYW1lUGVyc29uTWF4TGV2ZWxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBdLFxyXG4gICAgICAgICAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3JlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyYW5rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBhMTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdyYW5rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gZ2FtZU1vZGU6IOa4uOaIj+aooeW8j++8jOWmguaenOayoeacieaooeW8j+WMuuWIhu+8jOebtOaOpeWhqyAxXHJcbiAgICAgICAgICAgIC8vIOW/hemhu+mFjee9ruWlveWRqOacn+inhOWImeWQju+8jOaJjeiDveS9v+eUqOaVsOaNruS4iuaKpeWSjOaOkuihjOamnOWKn+iDvVxyXG4gICAgICAgICAgICBCSy5RUS51cGxvYWRTY29yZVdpdGhvdXRSb29tKDEsIGRhdGEsIGZ1bmN0aW9uIChlcnJDb2RlLCBjbWQsIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIOi/lOWbnumUmeivr+eggeS/oeaBr1xyXG4gICAgICAgICAgICAgICAgaWYgKGVyckNvZGUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBCSy5TY3JpcHQubG9nKDEsIDEsICfkuIrkvKDliIbmlbDlpLHotKUh6ZSZ6K+v56CB77yaJyArIGVyckNvZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCLmj5DkuqTlvpfliIY6XCIgKyBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0gKyBcIiA6IFwiICsgc2NvcmUpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v6Ieq5a6255qEYXBwaWRcclxuICAgIGluaXRTZWxmTWluaVByb2dyYW06IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVUb29sczsiXX0=