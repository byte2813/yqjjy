
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10c24pts1ZLgpdWUSmC+YZp', 'main');
// Script/main.js

"use strict";

var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
var GameConfig = require("GameConfig");
cc.Class({
  "extends": cc.Component,
  properties: {
    deskNode: {
      "default": null,
      type: cc.Node,
      displayName: "桌子节点"
    },
    deskSprite: {
      "default": null,
      type: cc.Prefab,
      displayName: '人物预制'
    },
    moveDeskSprite: {
      "default": null,
      type: cc.Sprite,
      displayName: "移动图片"
    },
    selectDeskSprite: {
      "default": null,
      type: cc.Component,
      displayName: "移动的节点"
    },
    deskBg: {
      "default": null,
      type: cc.Node,
      displayName: "可点击的背景"
    },
    jiasuBtn: {
      "default": null,
      type: cc.Node,
      displayName: "加速按钮"
    },
    shopBtn: {
      "default": null,
      type: cc.Node,
      displayName: "商店按钮"
    },
    recoverybtn: {
      "default": null,
      type: cc.Node,
      displayName: "垃圾桶"
    },
    bugGoldbtn: {
      "default": null,
      type: cc.Node,
      displayName: "购买按钮"
    },
    bugLabel: {
      "default": null,
      type: cc.Label,
      displayName: "购买按钮的等级"
    },
    bugGoldLabel: {
      "default": null,
      type: cc.Label,
      displayName: "购买按钮的金额"
    },
    goldLabel: {
      "default": null,
      type: cc.Label,
      displayName: "金钱label"
    },
    coinBtn: {
      "default": null,
      type: cc.Node,
      displayName: "元宝按钮"
    },
    coinLabel: {
      "default": null,
      type: cc.Label,
      displayName: "元宝"
    },
    moneySpeedLabel: {
      "default": null,
      type: cc.Node,
      displayName: "产生钱的速度"
    },
    rankingBtn: {
      "default": null,
      type: cc.Node,
      displayName: "排行榜按钮"
    },
    moreGiftBtn: {
      "default": null,
      type: cc.Node,
      displayName: "更多好礼按钮"
    },
    signBtn: {
      "default": null,
      type: cc.Node,
      displayName: "签到按钮"
    },
    turnTableBtn: {
      "default": null,
      type: cc.Node,
      displayName: "转盘按钮"
    },
    persionName: {
      "default": null,
      type: cc.Label,
      displayName: "用户的等级"
    },
    giftbtn: {
      "default": null,
      type: cc.Node,
      displayName: "礼物"
    },
    jptj: {
      "default": null,
      type: cc.Node,
      displayName: "合作方浮标入口"
    },
    navigator: {
      "default": null,
      type: cc.Node,
      displayName: "动态浮标"
    },
    howgame: {
      "default": null,
      type: cc.Node,
      displayName: "怎么玩"
    },
    cbBtn: {
      "default": null,
      type: cc.Node,
      displayName: "侧边栏"
    }
  },
  ctor: function ctor() {
    GameConfig.main = this;
  },
  start: function start() {
    var _this = this;
    this.deskBg.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    this.deskBg.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
    this.deskBg.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
    this.deskBg.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    GameTools.playBackgroundMusic();
    GameUiTools.setButtonClickEvents(this, this.recoverybtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.bugGoldbtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.shopBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.signBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.turnTableBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.jiasuBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.coinBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.giftbtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.rankingBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.jptj, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.navigator, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.moreGiftBtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.howgame, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.cbBtn, "btnFunc");
    this.schedule(this.gameGiftBag, 180, cc.macro.REPEAT_FOREVER, 10); //开启礼包按钮动画

    this.bugPersionLevel = 1;
    this.bugGoldLabel.string = GameTools.getNumberString(GameConfig.buyGoldUpgrade[1]);
    this.setGameMoney();
    this.setGameCoin();
    this.timer = 0;
    this.choose = false;
    this.persionName.string = GameConfig.perName[GameConfig.GamePersonMaxLevel - 1];
    // this.setBugGoldbtn();

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      wx.onShow(function () {
        if (GameConfig.shareTime != 0) {
          if (GameConfig.shareComponent.name.indexOf("main") != -1) {
            var reTime = new Date().getTime();
            if (reTime - GameConfig.shareTime >= 3000) {
              // GameConfig.shareComponent.shareSuccess();
              GameConfig.GameCoin += 100;
              _this.setGameCoin();
              GameTools.showToast('获得' + 100 + '元宝');
            } else {
              GameTools.showToast('分享失败');
            }
          }
          if (GameConfig.shareComponent.name.indexOf('NewPersion') != -1) {
            var currentTime = new Date().getTime();
            if (currentTime - GameConfig.shareTime >= 3000) {
              GameConfig.shareComponent.shareSuccess();
            } else {
              GameTools.showToast('分享失败');
            }
          }
          if (GameConfig.shareComponent.name.indexOf('MoneyPanel') != -1) {
            var _currentTime = new Date().getTime();
            if (_currentTime - GameConfig.shareTime >= 3000) {
              GameConfig.shareComponent.shareSuccess();
            } else {
              GameTools.showToast('分享失败');
            }
          }
          if (GameConfig.shareComponent.name.indexOf('ShopTopLevel') != -1) {
            var _currentTime2 = new Date().getTime();
            if (_currentTime2 - GameConfig.shareTime >= 3000) {
              GameConfig.shareComponent.shareSuccess();
            } else {
              GameTools.showToast('分享失败');
            }
          }
          GameConfig.shareTime = 0;
        }
        if (window.sharedCanvas != undefined) {
          _this.tex = new cc.Texture2D();
          window.sharedCanvas.width = 750;
          window.sharedCanvas.height = 1334;
          // 发消息给子域
          window.wx.postMessage({
            messageType: 3,
            MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
            score: GameConfig.GameMoney,
            level: GameConfig.GamePersonMaxLevel
          });
          setTimeout(function () {
            console.log("initWithElement......");
            _this.tex.initWithElement(window.sharedCanvas);
            _this.tex.handleLoadedTexture();
            _this.gameNextRank.spriteFrame = new cc.SpriteFrame(_this.tex);
          }, 2000);
        }
      });
      wx.onHide(function () {
        var _time = new Date().getTime();
        GameConfig.lastTime = _time; // 记录离线时间戳
        GameTools.setItemByLocalStorage("lastTime", GameConfig.lastTime);
      });
      // GameTools.showBannerAd();
    } else if (cc.sys.platform === cc.sys.QQ_PLAY) {
      console.log("加载广告");
      // GameTools.showBannerAd();
    }
  },
  onLoad: function onLoad() {
    this.deskArr = new Array();
    for (var i = 0; i < GameConfig.Row; i++) {
      this.deskArr[i] = Array();
    }
    for (var _i = 0; _i < GameConfig.Row; _i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        var desk = cc.instantiate(this.deskSprite);
        // if(i==0&& j==0){
        // desk.getComponent('DeskSprite').initDesk(1,j*173-262.5,-209*i+113);
        // }else{
        desk.getComponent('DeskSprite').initDesk(GameTools.getItemByLocalStorage("deskArr" + _i + j, 0), j * 173 - 262.5, -209 * _i + 113);
        // }
        this.deskArr[_i][j] = desk.getComponent("DeskSprite");
        this.deskNode.addChild(desk, _i, 'DeskSprite');
      }
    }
    this.moveDeskSprite.node.zIndex = 1000;
    this.setFirstGame(); //判断今天是否为第一次进来和离线的时间差
    GameConfig.startMs = new Date().getTime();
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      window.cp = this;
      if (GameConfig.IS_LOAD_MINI) {
        window.cp.showMinProgram();
        window.cp.schedule(window.cp.showMinProgram, 5);
        // setTimeout(() => {
        //     window.cp.showMinProgram();
        // }, 5000);
      } else {
        GameTools.initSelfMiniProgram(function (flag) {
          GameTools.initEQMiniProgram(GameConfig.UserInfo, function (flag) {
            window.cp.showMinProgram();
            window.cp.schedule(window.cp.showMinProgram, 5);
            // setTimeout(() => {
            //     window.cp.showMinProgram();
            // }, 5000);
            GameConfig.IS_LOAD_MINI = true;
          });
        });
      }
    }
  },
  shareSuccess: function shareSuccess() {
    GameConfig.GameCoin += 100;
    this.setGameCoin();
    GameTools.showToast('获得' + 100 + '元宝');
  },
  gameGiftBag: function gameGiftBag() {
    //礼包按钮
    this.giftbtn.active = true;
    this.giftbtn.setPosition(-443, 356);
    this.giftbtn.stopAllActions();
    this.giftbtn.runAction(cc.jumpBy(15, 900, 0, 80, 5));
  },
  setFirstGame: function setFirstGame() {
    var now = new Date();
    var todayBeginTimestamp = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    GameConfig.lastTime = GameTools.getItemByLocalStorage("lastTime", 0);
    //当前是否是今天的第一次进来
    if (todayBeginTimestamp > GameConfig.lastTime) {
      GameConfig.turnTableNum += 2;
      GameTools.setItemByLocalStorage("turnNum", GameConfig.turnTableNum);
    }
    if (GameConfig.lastTime == 0) {
      return;
    }
    var nowTime = now.getTime();
    var offLineTime = Math.floor((nowTime - GameConfig.lastTime) / 60000);
    //离线是否为10分钟
    if (offLineTime > 10) {
      GameUiTools.loadingLayer("Panel/LixianPanel");
      // this.openOffLineTime();
    }
  },

  showMinProgram: function showMinProgram() {
    // 他人的小程序导航
    GameTools.showMinProgram(this.navigator);
  },
  //按钮功能点击
  btnFunc: function btnFunc(event) {
    GameTools.playSimpleAudioEngine(3);
    var button = event.target;
    if (this.recoverybtn == button) {
      console.log("回收按钮");
      GameTools.toastMessage(11);
    } else if (this.bugGoldbtn == button) {
      console.log("购买按钮");
      this.bugGoldFunc(this.bugPersionLevel);
    } else if (this.shopBtn == button) {
      GameUiTools.loadingLayer("Panel/ShopPanel");
    } else if (this.signBtn == button) {
      GameUiTools.loadingLayer("Panel/SignPanel");
    } else if (this.turnTableBtn == button) {
      GameUiTools.loadingLayer("Panel/TrunPanel");
    } else if (this.jiasuBtn == button) {
      GameUiTools.loadingLayer("Panel/JiasuPanel");
    } else if (this.coinBtn == button) {
      GameConfig.shareComponent = this;
      GameTools.sharePicture();
      GameConfig.shareTime = new Date().getTime();
    } else if (this.giftbtn == button) {
      GameUiTools.loadingLayer("Panel/MoneyPanel");
      this.giftbtn.active = false;
    } else if (this.rankingBtn == button) {
      GameTools.submitScore(GameConfig.GameMoney); //提交排行数据
      GameUiTools.loadingLayer("Panel/rank");
    } else if (this.jptj == button) {
      this.jptj.active = false;
      GameUiTools.loadingLayer("Panel/Jptj");
    } else if (this.navigator == button) {
      GameTools.navigateToMiniProgram(GameConfig.APPID, GameConfig.PATH);
    } else if (this.moreGiftBtn == button) {
      GameUiTools.loadingLayer("Panel/SelfApp");
    } else if (this.howgame == button) {
      GameUiTools.loadingLayer("Panel/HowGame");
    } else if (this.cbBtn == button) {
      console.log("点击侧边栏按钮");
      GameUiTools.loadingLayer("Panel/CblPanel");

      // tt.showModal({
      //     title: "进入侧边栏",
      //     content: "领取奖励100元宝",
      //     confirmColor: "#050511",
      //     cancelColor: "#FF0000",
      //     success(res) {
      //         console.log("用户点击了" + (res.confirm ? "确定" : "取消"))
      //         if (res.confirm) {
      //             tt.navigateToScene({
      //                 scene: "sidebar",
      //                 success: (res) => {
      //
      //                     console.log("navigate to scene success");
      //                     // 跳转成功回调逻辑
      //                     let coins = [100];
      //                     console.log("元宝变更前", GameConfig.GameCoin  )
      //                     GameConfig.GameCoin += coins[0];
      //                     GameTools.setItemByLocalStorage("GameCoin",GameConfig.GameCoin);
      //                     console.log("元宝变更后", GameConfig.GameCoin  )
      //                     GameTools.showToast("获得元宝+" + coins[0]);
      //                 },
      //                 fail: (res) => {
      //                     console.log("navigate to scene fail: ", res);
      //                     // 跳转失败回调逻辑
      //                 },
      //             });
      //         }
      //         if (res.cancel) {
      //             tt.showToast({
      //                 title: '取消',
      //                 icon: "none"
      //             });
      //         }
      //     },
      //     fail(err) {
      //         console.log('showModal fail', err);
      //     },
      //     complete(res) {
      //         console.log('showModal complete', res);
      //     }
      // });
    }
  },
  //按住不放寻找相同的人物
  selectDeskHide: function selectDeskHide(number) {
    for (var i = 0; i < GameConfig.Row; i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        if (this.deskArr[i][j].number != number) {
          this.deskArr[i][j].deskClickShow(1);
        }
      }
    }
  },
  //移动人物
  onTouchMoved: function onTouchMoved(event) {
    var touchPoint = event.touch.getLocation();
    this.moveDeskSprite.node.setPosition(this.deskNode.convertToNodeSpaceAR(touchPoint));
    // console.log("移动",touchPoint);
  },

  //点击
  onTouchBegan: function onTouchBegan(event) {
    var touchPoint = event.touch.getLocation();
    // console.log("点击",touchPoint);
    this.selectDeskSprite = null;
    for (var i = 0; i < GameConfig.Row; i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        if (this.deskArr[i][j].node.getChildByName("bg").getBoundingBoxToWorld().contains(touchPoint) && this.deskArr[i][j].number != 0) {
          this.selectDeskSprite = this.deskArr[i][j];
          this.deskArr[i][j].deskClickShow(1);
          this.moveDeskSprite.node.active = true;
          this.moveDeskSprite.node.setPosition(this.deskNode.convertToNodeSpaceAR(touchPoint));
          GameUiTools.setSpriteFrame("persion/LV" + this.deskArr[i][j].number, this.moveDeskSprite);
          this.selectDeskHide(this.deskArr[i][j].number);
          return true;
        }
      }
    }
    return false;
  },
  //移出屏幕外
  onTouchCancel: function onTouchCancel(event) {
    var _this2 = this;
    if (this.selectDeskSprite == null) {
      return;
    }
    this.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(0.1, this.selectDeskSprite.node.x, this.selectDeskSprite.node.y), cc.callFunc(function () {
      _this2.selectDeskSprite.deskClickShow(2);
      _this2.moveDeskSprite.node.active = false;
    })));
  },
  // update (dt) {},
  //金钱购买按钮
  bugGoldFunc: function bugGoldFunc(level) {
    GameTools.playSimpleAudioEngine(1);
    if (GameConfig.GameMoney < GameConfig.buyGoldUpgrade[level]) {
      console.log("金钱不足");
      GameTools.toastMessage(10);
      GameUiTools.loadingLayer("Panel/MoneyPanel");
      return false;
    }
    if (this.choose) {
      GameConfig.showPersonNumber = level + 1;
      GameUiTools.loadingLayer("Panel/ShopTopLevel");
      this.choose = false;
    } else {
      if (this.addDeskSpriteByLevel(level)) {
        GameConfig.GameMoney -= GameConfig.buyGoldUpgrade[level];
        if (level == 1) {
          GameConfig.buyGoldUpgrade[1] = Math.floor(GameConfig.buyGoldUpgrade[1] * 1.07);
        } else {
          GameConfig.buyGoldUpgrade[level] = Math.floor(GameConfig.buyGoldUpgrade[level] * 1.175);
        }
        GameTools.setItemByLocalStorage("buyGoldUpgrade" + level, GameConfig.buyGoldUpgrade[level]);
        this.setGameMoney();
        return true;
      } else {
        return false;
      }
    }
  },
  //放开人物
  onTouchEnded: function onTouchEnded(event) {
    var _this3 = this;
    for (var i = 0; i < GameConfig.Row; i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        if (this.deskArr[i][j] != this.selectDeskSprite) {
          this.deskArr[i][j].deskClickShow(2);
        }
      }
    }
    var touchPoint = event.touch.getLocation();
    // console.log("放开",touchPoint);
    var moveTime = 0.1;
    var _loop = function _loop(_i2) {
      var _loop2 = function _loop2(_j) {
        if (_this3.selectDeskSprite && _this3.deskArr[_i2][_j].node.getChildByName("bg").getBoundingBoxToWorld().contains(touchPoint) && _this3.deskArr[_i2][_j] != _this3.selectDeskSprite) {
          if (_this3.deskArr[_i2][_j].number == 0) {
            //移动的位置没人
            _this3.deskArr[_i2][_j].number = _this3.selectDeskSprite.number;
            _this3.selectDeskSprite.number = 0;
            _this3.deskArr[_i2][_j].deskShow();
            _this3.deskArr[_i2][_j].deskClickShow(1);
            _this3.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(moveTime, _this3.deskArr[_i2][_j].node.x, _this3.deskArr[_i2][_j].node.y), cc.callFunc(function () {
              _this3.deskArr[_i2][_j].deskClickShow(2);
              _this3.moveDeskSprite.node.active = false;
            })));
          } else if (_this3.deskArr[_i2][_j].number == _this3.selectDeskSprite.number) {
            //相同等级+1
            if (_this3.deskArr[_i2][_j].number < 42) {
              GameTools.playSimpleAudioEngine(2);
              _this3.deskArr[_i2][_j].number++;
              // this.deskArr[i][j].deskShow();
              _this3.deskArr[_i2][_j].addNumberAnim();
              if (_this3.deskArr[_i2][_j].number > GameConfig.GamePersonMaxLevel) {
                //合成超过当前最大人物等级
                GameConfig.GamePersonMaxLevel = _this3.deskArr[_i2][_j].number;
                GameTools.setItemByLocalStorage("GamePersonMaxLevel", GameConfig.GamePersonMaxLevel);
                GameConfig.showPersonNumber = GameConfig.GamePersonMaxLevel;
                console.log("解锁新一级的官啦，现在的官级是" + GameConfig.GamePersonMaxLevel);
                GameUiTools.loadingLayer("Panel/NewPersion");
                _this3.persionName.string = GameConfig.perName[GameConfig.GamePersonMaxLevel - 1];
                GameTools.toastMessage(15);
                GameTools.submitScore(GameConfig.GameMoney); //提交新的子域信息
                // setTimeout(() => {
                //     //可加人物的钱的显示
                // }, 300);
              } else {
                // GameTools.toastMessage(12);
                // GameTools.playSimpleAudioEngine(2);
              }
              GameTools.setItemByLocalStorage("GamePlayer", GameConfig.GamePersonMaxLevel);
              _this3.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(moveTime, _this3.deskArr[_i2][_j].node.x, _this3.deskArr[_i2][_j].node.y), cc.callFunc(function () {
                _this3.moveDeskSprite.node.active = false;
              })));
              _this3.selectDeskSprite.number = 0;
              GameTools.setItemByLocalStorage("GameCompoundPersonNumber", GameTools.getItemByLocalStorage("GameCompoundPersonNumber", 0) + 1); //添加合成人物次数
            } else {
              console.log("你已到达巅峰");
              GameTools.toastMessage(13);
              _this3.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(moveTime, _this3.selectDeskSprite.node.x, _this3.selectDeskSprite.node.y), cc.callFunc(function () {
                _this3.selectDeskSprite.deskClickShow(2);
                _this3.moveDeskSprite.node.active = false;
              })));
              return {
                v: {
                  v: void 0
                }
              };
            }
          } else {
            var number = _this3.deskArr[_i2][_j].number;
            _this3.deskArr[_i2][_j].number = _this3.selectDeskSprite.number;
            _this3.deskArr[_i2][_j].deskShow();
            _this3.deskArr[_i2][_j].deskClickShow(1);
            _this3.selectDeskSprite.number = number;
            _this3.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(moveTime, _this3.deskArr[_i2][_j].node.x, _this3.deskArr[_i2][_j].node.y), cc.callFunc(function () {
              _this3.deskArr[_i2][_j].deskClickShow(2);
              _this3.moveDeskSprite.node.active = false;
            })));
          }
          _this3.selectDeskSprite.deskShow();
          _this3.selectDeskSprite.deskClickShow(2);
          _this3.saveDeskArr();
          return {
            v: {
              v: void 0
            }
          };
        }
      };
      for (var _j = 0; _j < GameConfig.Col; _j++) {
        var _ret2 = _loop2(_j);
        if (typeof _ret2 === "object") return _ret2.v;
      }
    };
    for (var _i2 = 0; _i2 < GameConfig.Row; _i2++) {
      var _ret = _loop(_i2);
      if (typeof _ret === "object") return _ret.v;
    }
    //回收
    if (this.selectDeskSprite && this.recoverybtn.getBoundingBoxToWorld().contains(touchPoint)) {
      GameTools.playSimpleAudioEngine(3);
      this.moveDeskSprite.node.active = false;
      this.selectDeskSprite.number = 0;
      this.selectDeskSprite.deskShow();
      this.saveDeskArr();
      return;
    }
    if (this.selectDeskSprite) {
      this.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(moveTime, this.selectDeskSprite.node.x, this.selectDeskSprite.node.y), cc.callFunc(function () {
        _this3.selectDeskSprite.deskClickShow(2);
        _this3.moveDeskSprite.node.active = false;
      })));
    }
  },
  //升高一等级
  chooseLevel: function chooseLevel(level) {
    if (this.addDeskSpriteByLevel(level)) {
      GameConfig.GameMoney -= GameConfig.buyGoldUpgrade[level - 1];
      if (level == 2) {
        GameConfig.buyGoldUpgrade[1] = Math.floor(GameConfig.buyGoldUpgrade[1] * 1.07);
      } else {
        GameConfig.buyGoldUpgrade[level - 1] = Math.floor(GameConfig.buyGoldUpgrade[level - 1] * 1.175);
      }
      GameTools.setItemByLocalStorage("buyGoldUpgrade" + level - 1, GameConfig.buyGoldUpgrade[level - 1]);
      this.setGameMoney();
      return true;
    } else {
      return false;
    }
  },
  //点击购买按钮判断桌子出现人物的功能
  addDeskSpriteByLevel: function addDeskSpriteByLevel(level) {
    var _this4 = this;
    var _loop3 = function _loop3(i) {
      var _loop4 = function _loop4(j) {
        if (_this4.deskArr[i][j].number == 0) {
          _this4.deskArr[i][j].deskClickShow(1);
          _this4.moveDeskSprite.node.active = true;
          _this4.moveDeskSprite.node.setPosition(-55, -366);
          GameUiTools.setSpriteFrame("persion/LV" + level, _this4.moveDeskSprite);
          _this4.moveDeskSprite.node.runAction(cc.sequence(cc.moveTo(0.1, _this4.deskArr[i][j].node.getPosition()), cc.callFunc(function () {
            _this4.deskArr[i][j].deskClickShow(2);
            _this4.moveDeskSprite.node.active = false;
          })));
          _this4.deskArr[i][j].number = level;
          _this4.deskArr[i][j].deskShow();
          GameTools.setItemByLocalStorage("deskArr" + i + j, _this4.deskArr[i][j].number);
          // GameTools.setItemByLocalStorage("deskArr" + i + j,this.deskArr[i][j].number);
          return {
            v: {
              v: true
            }
          };
        }
      };
      for (var j = 0; j < GameConfig.Col; j++) {
        var _ret4 = _loop4(j);
        if (typeof _ret4 === "object") return _ret4.v;
      }
    };
    for (var i = 0; i < GameConfig.Row; i++) {
      var _ret3 = _loop3(i);
      if (typeof _ret3 === "object") return _ret3.v;
    }
    console.log("买不下了，已经满了");
    GameTools.toastMessage(9);
    return false;
  },
  //保存桌子上的人物信息
  saveDeskArr: function saveDeskArr() {
    for (var i = 0; i < GameConfig.Row; i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        GameTools.setItemByLocalStorage("deskArr" + i + j, this.deskArr[i][j].number);
      }
    }
  },
  //显示购买信息
  setBugGoldbtn: function setBugGoldbtn() {
    var level = GameConfig.GamePersonMaxLevel - 4;
    if (level > 1) {
      for (var buglevel = level; buglevel > 0; buglevel--) {
        if (GameConfig.GameMoney > GameConfig.buyGoldUpgrade[buglevel]) {
          if (buglevel < level) {
            var math = Math.random();
            if (math > 0.8) {
              this.choose = true;
            }
          }
          this.bugPersionLevel = buglevel;
          this.bugLabel.string = "LV " + buglevel; //购买等级
          this.bugGoldLabel.string = GameTools.getNumberString(GameConfig.buyGoldUpgrade[buglevel]); //购买金额
          return;
        }
      }
    } else {
      this.bugPersionLevel = 1;
      this.bugGoldLabel.string = GameTools.getNumberString(GameConfig.buyGoldUpgrade[1]);
      this.bugLabel.string = "LV 1"; //购买等级
    }
  },
  //元宝购买按钮
  buyCoinFunc: function buyCoinFunc(level) {
    GameTools.playSimpleAudioEngine(1);
    if (GameConfig.GameCoin < GameConfig.buyCoinUpgrade[level]) {
      console.log("元宝不足");
      GameTools.toastMessage(8);
      // let self = this;
      // GameTools._createVedioAd(function (res) {
      //     if (res.isEnded || res.raw) {
      //         GameConfig.GameCoin += 100;
      //         self.setGameCoin();
      //     }
      // });
      return false;
    }
    if (this.addDeskSpriteByLevel(level)) {
      GameConfig.GameCoin -= GameConfig.buyCoinUpgrade[level];
      // if(level == 1){
      //     GameConfig.buyCoinUpgrade[1] = Math.floor(GameConfig.buyCoinUpgrade[1] * 1.07);
      // }else{
      GameConfig.buyCoinUpgrade[level] = Math.floor(GameConfig.buyCoinUpgrade[level] * 1.175);
      // }
      GameTools.setItemByLocalStorage("buyCoinUpgrade" + level, GameConfig.buyCoinUpgrade[level]);
      this.setGameCoin();
      return true;
    } else {
      return false;
    }
  },
  //加速
  gameDouble: function gameDouble(num) {
    this.jiasuBtn.color = cc.Color.GRAY;
    this.jiasuBtn.getComponent(cc.Button).interactable = false;
    this.jiasuBtn.getChildByName("numbg").active = true;
    for (var i = 0; i < GameConfig.Row; i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        this.deskArr[i][j].isSelect = true;
      }
    }
    var timer = null;
    var t = num;
    var m = 0;
    var s = 0;
    m = Math.floor(t / 60 % 60);
    m < 10 && (m = '0' + m);
    s = Math.floor(t % 60);
    function countDown() {
      s--;
      s < 10 && (s = '0' + s);
      if (s.length >= 3) {
        s = 59;
        m = "0" + (Number(m) - 1);
      }
      if (m.length >= 3) {
        m = '00';
        s = '00';
        GameConfig.main.jiasuBtn.color = cc.Color.WHITE;
        GameConfig.main.jiasuBtn.getComponent(cc.Button).interactable = true;
        GameConfig.main.jiasuBtn.getChildByName("numbg").active = false;
        for (var _i3 = 0; _i3 < GameConfig.Row; _i3++) {
          for (var _j2 = 0; _j2 < GameConfig.Col; _j2++) {
            GameConfig.main.deskArr[_i3][_j2].isSelect = false;
          }
        }
        clearInterval(timer);
      }
      GameConfig.main.jiasuBtn.getChildByName("numbg").getChildByName("number").getComponent(cc.Label).string = m + ":" + s;
      console.log(m + "分钟" + s + "秒");
    }
    timer = setInterval(countDown, 1000);
  },
  //元宝的变动
  setGameCoin: function setGameCoin() {
    this.coinLabel.string = GameTools.getNumberString(GameConfig.GameCoin);
    GameTools.setItemByLocalStorage("GameCoin", GameConfig.GameCoin);
  },
  //金钱的变动
  setGameMoney: function setGameMoney() {
    this.goldLabel.string = GameTools.getNumberString(GameConfig.GameMoney);
    GameTools.setItemByLocalStorage("GameMoney", GameConfig.GameMoney);
    this.setBugGoldbtn();
  },
  //生产金钱的速度
  getMoneySpeed: function getMoneySpeed() {
    var sum = 0;
    for (var i = 0; i < GameConfig.Row; i++) {
      for (var j = 0; j < GameConfig.Col; j++) {
        if (this.deskArr[i][j].number != 0) {
          if (this.deskArr[i][j].isSelect) {
            sum += this.deskArr[i][j].expNumber * 2;
          } else {
            sum += this.deskArr[i][j].expNumber;
          }
        }
      }
    }
    this.moneySpeedLabel.getComponent(cc.Label).string = GameTools.getNumberString(sum) + "/秒";
    this.moneySpeedLabel.runAction(cc.sequence(cc.scaleTo(0.2, 1.3, 1.3), cc.scaleTo(0.2, 1, 1)));
    GameConfig.GameMoney += sum * 3;
    this.setGameMoney();
    return sum;
  },
  update: function update(dt) {
    this.timer += dt;
    if (this.timer >= 3) {
      this.timer = 0;
      this.getMoneySpeed();
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtYWluLmpzIl0sIm5hbWVzIjpbIkdhbWVUb29scyIsInJlcXVpcmUiLCJHYW1lVWlUb29scyIsIkdhbWVDb25maWciLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRlc2tOb2RlIiwidHlwZSIsIk5vZGUiLCJkaXNwbGF5TmFtZSIsImRlc2tTcHJpdGUiLCJQcmVmYWIiLCJtb3ZlRGVza1Nwcml0ZSIsIlNwcml0ZSIsInNlbGVjdERlc2tTcHJpdGUiLCJkZXNrQmciLCJqaWFzdUJ0biIsInNob3BCdG4iLCJyZWNvdmVyeWJ0biIsImJ1Z0dvbGRidG4iLCJidWdMYWJlbCIsIkxhYmVsIiwiYnVnR29sZExhYmVsIiwiZ29sZExhYmVsIiwiY29pbkJ0biIsImNvaW5MYWJlbCIsIm1vbmV5U3BlZWRMYWJlbCIsInJhbmtpbmdCdG4iLCJtb3JlR2lmdEJ0biIsInNpZ25CdG4iLCJ0dXJuVGFibGVCdG4iLCJwZXJzaW9uTmFtZSIsImdpZnRidG4iLCJqcHRqIiwibmF2aWdhdG9yIiwiaG93Z2FtZSIsImNiQnRuIiwiY3RvciIsIm1haW4iLCJzdGFydCIsIl90aGlzIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hCZWdhbiIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZWQiLCJUT1VDSF9FTkQiLCJvblRvdWNoRW5kZWQiLCJUT1VDSF9DQU5DRUwiLCJvblRvdWNoQ2FuY2VsIiwicGxheUJhY2tncm91bmRNdXNpYyIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwic2NoZWR1bGUiLCJnYW1lR2lmdEJhZyIsIm1hY3JvIiwiUkVQRUFUX0ZPUkVWRVIiLCJidWdQZXJzaW9uTGV2ZWwiLCJzdHJpbmciLCJnZXROdW1iZXJTdHJpbmciLCJidXlHb2xkVXBncmFkZSIsInNldEdhbWVNb25leSIsInNldEdhbWVDb2luIiwidGltZXIiLCJjaG9vc2UiLCJwZXJOYW1lIiwiR2FtZVBlcnNvbk1heExldmVsIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4Iiwib25TaG93Iiwic2hhcmVUaW1lIiwic2hhcmVDb21wb25lbnQiLCJuYW1lIiwiaW5kZXhPZiIsInJlVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiR2FtZUNvaW4iLCJzaG93VG9hc3QiLCJjdXJyZW50VGltZSIsInNoYXJlU3VjY2VzcyIsIndpbmRvdyIsInNoYXJlZENhbnZhcyIsInVuZGVmaW5lZCIsInRleCIsIlRleHR1cmUyRCIsIndpZHRoIiwiaGVpZ2h0IiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsIk1BSU5fTUVOVV9OVU0iLCJzY29yZSIsIkdhbWVNb25leSIsImxldmVsIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwiZ2FtZU5leHRSYW5rIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsIm9uSGlkZSIsIl90aW1lIiwibGFzdFRpbWUiLCJzZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJRUV9QTEFZIiwib25Mb2FkIiwiZGVza0FyciIsIkFycmF5IiwiaSIsIlJvdyIsImoiLCJDb2wiLCJkZXNrIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJpbml0RGVzayIsImdldEl0ZW1CeUxvY2FsU3RvcmFnZSIsImFkZENoaWxkIiwibm9kZSIsInpJbmRleCIsInNldEZpcnN0R2FtZSIsInN0YXJ0TXMiLCJjcCIsIklTX0xPQURfTUlOSSIsInNob3dNaW5Qcm9ncmFtIiwiaW5pdFNlbGZNaW5pUHJvZ3JhbSIsImZsYWciLCJpbml0RVFNaW5pUHJvZ3JhbSIsIlVzZXJJbmZvIiwiYWN0aXZlIiwic2V0UG9zaXRpb24iLCJzdG9wQWxsQWN0aW9ucyIsInJ1bkFjdGlvbiIsImp1bXBCeSIsIm5vdyIsInRvZGF5QmVnaW5UaW1lc3RhbXAiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInR1cm5UYWJsZU51bSIsIm5vd1RpbWUiLCJvZmZMaW5lVGltZSIsIk1hdGgiLCJmbG9vciIsImxvYWRpbmdMYXllciIsImJ0bkZ1bmMiLCJldmVudCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsImJ1dHRvbiIsInRhcmdldCIsInRvYXN0TWVzc2FnZSIsImJ1Z0dvbGRGdW5jIiwic2hhcmVQaWN0dXJlIiwic3VibWl0U2NvcmUiLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW0iLCJBUFBJRCIsIlBBVEgiLCJzZWxlY3REZXNrSGlkZSIsIm51bWJlciIsImRlc2tDbGlja1Nob3ciLCJ0b3VjaFBvaW50IiwidG91Y2giLCJnZXRMb2NhdGlvbiIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRCb3VuZGluZ0JveFRvV29ybGQiLCJjb250YWlucyIsInNldFNwcml0ZUZyYW1lIiwiX3RoaXMyIiwic2VxdWVuY2UiLCJtb3ZlVG8iLCJ4IiwieSIsImNhbGxGdW5jIiwic2hvd1BlcnNvbk51bWJlciIsImFkZERlc2tTcHJpdGVCeUxldmVsIiwiX3RoaXMzIiwibW92ZVRpbWUiLCJfbG9vcCIsIl9pMiIsIl9sb29wMiIsIl9qIiwiZGVza1Nob3ciLCJhZGROdW1iZXJBbmltIiwidiIsInNhdmVEZXNrQXJyIiwiX3JldDIiLCJfcmV0IiwiY2hvb3NlTGV2ZWwiLCJfdGhpczQiLCJfbG9vcDMiLCJfbG9vcDQiLCJnZXRQb3NpdGlvbiIsIl9yZXQ0IiwiX3JldDMiLCJzZXRCdWdHb2xkYnRuIiwiYnVnbGV2ZWwiLCJtYXRoIiwicmFuZG9tIiwiYnV5Q29pbkZ1bmMiLCJidXlDb2luVXBncmFkZSIsImdhbWVEb3VibGUiLCJudW0iLCJjb2xvciIsIkNvbG9yIiwiR1JBWSIsIkJ1dHRvbiIsImludGVyYWN0YWJsZSIsImlzU2VsZWN0IiwidCIsIm0iLCJzIiwiY291bnREb3duIiwibGVuZ3RoIiwiTnVtYmVyIiwiV0hJVEUiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnZXRNb25leVNwZWVkIiwic3VtIiwi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QUksQ0FBQ3BLLEtBQUssSUFBSSxDQUFDLEVBQUM7TUFDZixJQUFJLENBQUNBLEtBQUssR0FBRSxDQUFDO01BQ2IsSUFBSSxDQUFDK0osYUFBYSxFQUFFO0lBQ3hCO0VBQ0o7QUFHSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xudmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZGVza05vZGU6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLmoYzlrZDoioLngrlcIlxuICAgICAgICB9LFxuICAgICAgICBkZXNrU3ByaXRlOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuUHJlZmFiLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J+S6uueJqemihOWItidcbiAgICAgICAgfSxcbiAgICAgICAgbW92ZURlc2tTcHJpdGU6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5TcHJpdGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuenu+WKqOWbvueJh1wiXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdERlc2tTcHJpdGU6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Db21wb25lbnQsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuenu+WKqOeahOiKgueCuVwiXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2tCZzp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuWPr+eCueWHu+eahOiDjOaZr1wiXG4gICAgICAgIH0sXG4gICAgICAgIGppYXN1QnRuOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5Yqg6YCf5oyJ6ZKuXCJcbiAgICAgICAgfSxcbiAgICAgICAgc2hvcEJ0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuWVhuW6l+aMiemSrlwiXG4gICAgICAgIH0sXG4gICAgICAgIHJlY292ZXJ5YnRuOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5Z6D5Zy+5qG2XCJcbiAgICAgICAgfSxcbiAgICAgICAgYnVnR29sZGJ0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIui0reS5sOaMiemSrlwiXG4gICAgICAgIH0sXG4gICAgICAgIGJ1Z0xhYmVsOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIui0reS5sOaMiemSrueahOetiee6p1wiXG4gICAgICAgIH0sXG4gICAgICAgIGJ1Z0dvbGRMYWJlbDp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLotK3kubDmjInpkq7nmoTph5Hpop1cIlxuICAgICAgICB9LFxuICAgICAgICBnb2xkTGFiZWw6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi6YeR6ZKxbGFiZWxcIlxuICAgICAgICB9LFxuICAgICAgICBjb2luQnRuOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5YWD5a6d5oyJ6ZKuXCJcbiAgICAgICAgfSxcbiAgICAgICAgY29pbkxhYmVsOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuWFg+WunVwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vbmV5U3BlZWRMYWJlbDp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuS6p+eUn+mSseeahOmAn+W6plwiXG4gICAgICAgIH0sXG4gICAgICAgIHJhbmtpbmdCdG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLmjpLooYzmppzmjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICBtb3JlR2lmdEJ0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuabtOWkmuWlveekvOaMiemSrlwiXG4gICAgICAgIH0sXG4gICAgICAgIHNpZ25CdG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLnrb7liLDmjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICB0dXJuVGFibGVCdG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLovaznm5jmjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICBwZXJzaW9uTmFtZTp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLnlKjmiLfnmoTnrYnnuqdcIlxuICAgICAgICB9LFxuICAgICAgICBnaWZ0YnRuOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi56S854mpXCJcbiAgICAgICAgfSxcbiAgICAgICAganB0ajp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuWQiOS9nOaWuea1ruagh+WFpeWPo1wiXG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRvcjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuWKqOaAgea1ruagh1wiXG4gICAgICAgIH0sXG4gICAgICAgIGhvd2dhbWU6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLmgI7kuYjnjqlcIlxuICAgICAgICB9LFxuICAgICAgICBjYkJ0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuS+p+i+ueagj1wiXG4gICAgICAgIH0sXG5cbiAgICB9LFxuICAgIGN0b3IoKSB7XG4gICAgICAgIEdhbWVDb25maWcubWFpbiA9IHRoaXM7XG4gICAgfSxcblxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmRlc2tCZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uVG91Y2hCZWdhbix0aGlzKTtcbiAgICAgICAgdGhpcy5kZXNrQmcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSx0aGlzLm9uVG91Y2hNb3ZlZCx0aGlzKTtcbiAgICAgICAgdGhpcy5kZXNrQmcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMub25Ub3VjaEVuZGVkLHRoaXMpO1xuICAgICAgICB0aGlzLmRlc2tCZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsdGhpcy5vblRvdWNoQ2FuY2VsLHRoaXMpO1xuICAgICAgICBHYW1lVG9vbHMucGxheUJhY2tncm91bmRNdXNpYygpO1xuXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMucmVjb3ZlcnlidG4sIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5idWdHb2xkYnRuLCBcImJ0bkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuc2hvcEJ0biwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnNpZ25CdG4sIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy50dXJuVGFibGVCdG4sIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5qaWFzdUJ0biwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmNvaW5CdG4sIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5naWZ0YnRuLCBcImJ0bkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMucmFua2luZ0J0biwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmpwdGosIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5uYXZpZ2F0b3IsIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5tb3JlR2lmdEJ0biwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmhvd2dhbWUsIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5jYkJ0biwgXCJidG5GdW5jXCIpO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5nYW1lR2lmdEJhZywgMTgwLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMTApOy8v5byA5ZCv56S85YyF5oyJ6ZKu5Yqo55S7XG5cbiAgICAgICAgdGhpcy5idWdQZXJzaW9uTGV2ZWwgPSAxO1xuICAgICAgICB0aGlzLmJ1Z0dvbGRMYWJlbC5zdHJpbmcgPSBHYW1lVG9vbHMuZ2V0TnVtYmVyU3RyaW5nKEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbMV0pO1xuICAgICAgICB0aGlzLnNldEdhbWVNb25leSgpO1xuICAgICAgICB0aGlzLnNldEdhbWVDb2luKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aGlzLmNob29zZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBlcnNpb25OYW1lLnN0cmluZyA9IEdhbWVDb25maWcucGVyTmFtZVtHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbC0xXTtcbiAgICAgICAgLy8gdGhpcy5zZXRCdWdHb2xkYnRuKCk7XG5cblxuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XG4gICAgICAgICAgICB3eC5vblNob3coKCk9PntcbiAgICAgICAgICAgICAgICBpZihHYW1lQ29uZmlnLnNoYXJlVGltZSAhPSAwKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoR2FtZUNvbmZpZy5zaGFyZUNvbXBvbmVudC5uYW1lLmluZGV4T2YoXCJtYWluXCIpICE9IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlVGltZSAtIEdhbWVDb25maWcuc2hhcmVUaW1lID49IDMwMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdhbWVDb25maWcuc2hhcmVDb21wb25lbnQuc2hhcmVTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lQ29pbiArPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lQ29pbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoJ+iOt+W+lycrMTAwKyflhYPlrp0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoJ+WIhuS6q+Wksei0pScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKEdhbWVDb25maWcuc2hhcmVDb21wb25lbnQubmFtZS5pbmRleE9mKCdOZXdQZXJzaW9uJykgIT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50VGltZSAtIEdhbWVDb25maWcuc2hhcmVUaW1lID49IDMwMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuc2hhcmVDb21wb25lbnQuc2hhcmVTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2hvd1RvYXN0KCfliIbkuqvlpLHotKUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50Lm5hbWUuaW5kZXhPZignTW9uZXlQYW5lbCcpICE9IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudFRpbWUgLSBHYW1lQ29uZmlnLnNoYXJlVGltZSA+PSAzMDAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50LnNoYXJlU3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNob3dUb2FzdCgn5YiG5Lqr5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoR2FtZUNvbmZpZy5zaGFyZUNvbXBvbmVudC5uYW1lLmluZGV4T2YoJ1Nob3BUb3BMZXZlbCcpICE9IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudFRpbWUgLSBHYW1lQ29uZmlnLnNoYXJlVGltZSA+PSAzMDAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50LnNoYXJlU3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNob3dUb2FzdCgn5YiG5Lqr5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5zaGFyZVRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2hhcmVkQ2FudmFzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleCA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNoYXJlZENhbnZhcy53aWR0aCA9IDc1MDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNoYXJlZENhbnZhcy5oZWlnaHQgPSAxMzM0O1xuICAgICAgICAgICAgICAgICAgICAvLyDlj5Hmtojmga/nu5nlrZDln59cbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lnd4LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOjMsXG4gICAgICAgICAgICAgICAgICAgICAgICBNQUlOX01FTlVfTlVNOiBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogR2FtZUNvbmZpZy5HYW1lTW9uZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogR2FtZUNvbmZpZy5HYW1lUGVyc29uTWF4TGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXRXaXRoRWxlbWVudC4uLi4uLlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXguaW5pdFdpdGhFbGVtZW50KHdpbmRvdy5zaGFyZWRDYW52YXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXguaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lTmV4dFJhbmsuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXgpO1xuICAgICAgICAgICAgICAgICAgICB9LDIwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB3eC5vbkhpZGUoKCk9PntcbiAgICAgICAgICAgICAgICBsZXQgX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLmxhc3RUaW1lID0gX3RpbWU7Ly8g6K6w5b2V56a757q/5pe26Ze05oizXG4gICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcImxhc3RUaW1lXCIsR2FtZUNvbmZpZy5sYXN0VGltZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gR2FtZVRvb2xzLnNob3dCYW5uZXJBZCgpO1xuICAgICAgICB9ZWxzZSBpZihjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5RUV9QTEFZKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L295bm/5ZGKXCIpXG4gICAgICAgICAgICAvLyBHYW1lVG9vbHMuc2hvd0Jhbm5lckFkKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5kZXNrQXJyID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8R2FtZUNvbmZpZy5Sb3c7aSsrKXtcbiAgICAgICAgICAgIHRoaXMuZGVza0FycltpXSA9IEFycmF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVDb25maWcuUm93O2krKyl7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPEdhbWVDb25maWcuQ29sO2orKyl7XG4gICAgICAgICAgICAgICAgbGV0IGRlc2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRlc2tTcHJpdGUpO1xuICAgICAgICAgICAgICAgIC8vIGlmKGk9PTAmJiBqPT0wKXtcbiAgICAgICAgICAgICAgICAvLyBkZXNrLmdldENvbXBvbmVudCgnRGVza1Nwcml0ZScpLmluaXREZXNrKDEsaioxNzMtMjYyLjUsLTIwOSppKzExMyk7XG4gICAgICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICAgICAgZGVzay5nZXRDb21wb25lbnQoJ0Rlc2tTcHJpdGUnKS5pbml0RGVzayhHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiZGVza0FyclwiK2kraiwwKSxqKjE3My0yNjIuNSwtMjA5KmkrMTEzKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdID0gZGVzay5nZXRDb21wb25lbnQoXCJEZXNrU3ByaXRlXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVza05vZGUuYWRkQ2hpbGQoZGVzayxpLCdEZXNrU3ByaXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnpJbmRleCA9IDEwMDA7XG4gICAgICAgIHRoaXMuc2V0Rmlyc3RHYW1lKCk7Ly/liKTmlq3ku4rlpKnmmK/lkKbkuLrnrKzkuIDmrKHov5vmnaXlkoznprvnur/nmoTml7bpl7Tlt65cbiAgICAgICAgR2FtZUNvbmZpZy5zdGFydE1zID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcbiAgICAgICAgICAgIHdpbmRvdy5jcCA9IHRoaXM7XG5cblxuICAgICAgICAgICAgaWYoR2FtZUNvbmZpZy5JU19MT0FEX01JTkkpe1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jcC5zaG93TWluUHJvZ3JhbSgpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jcC5zY2hlZHVsZSh3aW5kb3cuY3Auc2hvd01pblByb2dyYW0sIDUpO1xuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cuY3Auc2hvd01pblByb2dyYW0oKTtcbiAgICAgICAgICAgICAgICAvLyB9LCA1MDAwKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIEdhbWVUb29scy5pbml0U2VsZk1pbmlQcm9ncmFtKGZ1bmN0aW9uIChmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5pbml0RVFNaW5pUHJvZ3JhbShHYW1lQ29uZmlnLlVzZXJJbmZvLCBmdW5jdGlvbiAoZmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNwLnNob3dNaW5Qcm9ncmFtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3Auc2NoZWR1bGUod2luZG93LmNwLnNob3dNaW5Qcm9ncmFtLCA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5jcC5zaG93TWluUHJvZ3JhbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSwgNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLklTX0xPQURfTUlOSSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hhcmVTdWNjZXNzKCl7XG4gICAgICAgIEdhbWVDb25maWcuR2FtZUNvaW4gKz0gMTAwO1xuICAgICAgICB0aGlzLnNldEdhbWVDb2luKCk7XG4gICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoJ+iOt+W+lycrMTAwKyflhYPlrp0nKTtcbiAgICB9LFxuXG4gICAgZ2FtZUdpZnRCYWcoKSB7Ly/npLzljIXmjInpkq5cbiAgICAgICAgdGhpcy5naWZ0YnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2lmdGJ0bi5zZXRQb3NpdGlvbigtNDQzLCAzNTYpO1xuICAgICAgICB0aGlzLmdpZnRidG4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5naWZ0YnRuLnJ1bkFjdGlvbihjYy5qdW1wQnkoMTUsIDkwMCwgMCwgODAsIDUpKTtcbiAgICB9LFxuICAgIHNldEZpcnN0R2FtZSgpe1xuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHRvZGF5QmVnaW5UaW1lc3RhbXAgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgR2FtZUNvbmZpZy5sYXN0VGltZSA9IEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJsYXN0VGltZVwiLDApO1xuICAgICAgICAvL+W9k+WJjeaYr+WQpuaYr+S7iuWkqeeahOesrOS4gOasoei/m+adpVxuICAgICAgICBpZih0b2RheUJlZ2luVGltZXN0YW1wID4gR2FtZUNvbmZpZy5sYXN0VGltZSl7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLnR1cm5UYWJsZU51bSArPSAyO1xuICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcInR1cm5OdW1cIixHYW1lQ29uZmlnLnR1cm5UYWJsZU51bSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoR2FtZUNvbmZpZy5sYXN0VGltZSA9PSAwKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm93VGltZSA9IG5vdy5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBvZmZMaW5lVGltZSA9IE1hdGguZmxvb3IoKG5vd1RpbWUgLSBHYW1lQ29uZmlnLmxhc3RUaW1lKS82MDAwMCk7XG4gICAgICAgIC8v56a757q/5piv5ZCm5Li6MTDliIbpkp9cbiAgICAgICAgaWYob2ZmTGluZVRpbWUgPiAxMCl7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5sb2FkaW5nTGF5ZXIoXCJQYW5lbC9MaXhpYW5QYW5lbFwiKTtcbiAgICAgICAgICAgIC8vIHRoaXMub3Blbk9mZkxpbmVUaW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dNaW5Qcm9ncmFtIDogZnVuY3Rpb24oKXtcbiAgICAgICAgLy8g5LuW5Lq655qE5bCP56iL5bqP5a+86IiqXG4gICAgICAgIEdhbWVUb29scy5zaG93TWluUHJvZ3JhbSh0aGlzLm5hdmlnYXRvcik7XG4gICAgfSxcbiAgICAvL+aMiemSruWKn+iDveeCueWHu1xuICAgIGJ0bkZ1bmMoZXZlbnQpe1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDMpO1xuICAgICAgICBsZXQgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZih0aGlzLnJlY292ZXJ5YnRuID09IGJ1dHRvbil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWbnuaUtuaMiemSrlwiKTtcbiAgICAgICAgICAgIEdhbWVUb29scy50b2FzdE1lc3NhZ2UoMTEpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmJ1Z0dvbGRidG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6LSt5Lmw5oyJ6ZKuXCIpO1xuICAgICAgICAgICAgdGhpcy5idWdHb2xkRnVuYyh0aGlzLmJ1Z1BlcnNpb25MZXZlbCk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc2hvcEJ0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvU2hvcFBhbmVsXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnNpZ25CdG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL1NpZ25QYW5lbFwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy50dXJuVGFibGVCdG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL1RydW5QYW5lbFwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5qaWFzdUJ0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvSmlhc3VQYW5lbFwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb2luQnRuID09IGJ1dHRvbil7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgICAgIEdhbWVUb29scy5zaGFyZVBpY3R1cmUoKTtcbiAgICAgICAgICAgIEdhbWVDb25maWcuc2hhcmVUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5naWZ0YnRuID09IGJ1dHRvbil7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5sb2FkaW5nTGF5ZXIoXCJQYW5lbC9Nb25leVBhbmVsXCIpO1xuICAgICAgICAgICAgdGhpcy5naWZ0YnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnJhbmtpbmdCdG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIEdhbWVUb29scy5zdWJtaXRTY29yZShHYW1lQ29uZmlnLkdhbWVNb25leSk7Ly/mj5DkuqTmjpLooYzmlbDmja5cbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL3JhbmtcIik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuanB0aiA9PSBidXR0b24pe1xuICAgICAgICAgICAgdGhpcy5qcHRqLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvSnB0alwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5uYXZpZ2F0b3IgPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIEdhbWVUb29scy5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oR2FtZUNvbmZpZy5BUFBJRCwgR2FtZUNvbmZpZy5QQVRIKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5tb3JlR2lmdEJ0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvU2VsZkFwcFwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5ob3dnYW1lID09IGJ1dHRvbil7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5sb2FkaW5nTGF5ZXIoXCJQYW5lbC9Ib3dHYW1lXCIpO1xuICAgICAgICB9ZWxzZSBpZiAodGhpcy5jYkJ0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vkvqfovrnmoI/mjInpkq5cIilcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL0NibFBhbmVsXCIpO1xuXG4gICAgICAgICAgICAvLyB0dC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiBcIui/m+WFpeS+p+i+ueagj1wiLFxuICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6IFwi6aKG5Y+W5aWW5YqxMTAw5YWD5a6dXCIsXG4gICAgICAgICAgICAvLyAgICAgY29uZmlybUNvbG9yOiBcIiMwNTA1MTFcIixcbiAgICAgICAgICAgIC8vICAgICBjYW5jZWxDb2xvcjogXCIjRkYwMDAwXCIsXG4gICAgICAgICAgICAvLyAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCLnlKjmiLfngrnlh7vkuoZcIiArIChyZXMuY29uZmlybSA/IFwi56Gu5a6aXCIgOiBcIuWPlua2iFwiKSlcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0dC5uYXZpZ2F0ZVRvU2NlbmUoe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNjZW5lOiBcInNpZGViYXJcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5hdmlnYXRlIHRvIHNjZW5lIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIOi3s+i9rOaIkOWKn+Wbnuiwg+mAu+i+kVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBsZXQgY29pbnMgPSBbMTAwXTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhYPlrp3lj5jmm7TliY1cIiwgR2FtZUNvbmZpZy5HYW1lQ29pbiAgKVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVDb2luICs9IGNvaW5zWzBdO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiR2FtZUNvaW5cIixHYW1lQ29uZmlnLkdhbWVDb2luKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhYPlrp3lj5jmm7TlkI5cIiwgR2FtZUNvbmZpZy5HYW1lQ29pbiAgKVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2hvd1RvYXN0KFwi6I635b6X5YWD5a6dK1wiICsgY29pbnNbMF0pO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZmFpbDogKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5hdmlnYXRlIHRvIHNjZW5lIGZhaWw6IFwiLCByZXMpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyDot7PovazlpLHotKXlm57osIPpgLvovpFcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHR0LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5bmtognLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGljb246IFwibm9uZVwiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgZmFpbChlcnIpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3Nob3dNb2RhbCBmYWlsJywgZXJyKTtcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gICAgIGNvbXBsZXRlKHJlcykge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnc2hvd01vZGFsIGNvbXBsZXRlJywgcmVzKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8v5oyJ5L2P5LiN5pS+5a+75om+55u45ZCM55qE5Lq654mpXG4gICAgc2VsZWN0RGVza0hpZGUobnVtYmVyKXtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxHYW1lQ29uZmlnLlJvdztpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxHYW1lQ29uZmlnLkNvbDtqKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgIT0gbnVtYmVyKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmRlc2tDbGlja1Nob3coMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+enu+WKqOS6uueJqVxuICAgIG9uVG91Y2hNb3ZlZDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCB0b3VjaFBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuZGVza05vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hQb2ludCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuenu+WKqFwiLHRvdWNoUG9pbnQpO1xuICAgIH0sXG5cbiAgICAvL+eCueWHu1xuICAgIG9uVG91Y2hCZWdhbjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCB0b3VjaFBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLngrnlh7tcIix0b3VjaFBvaW50KTtcbiAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlID0gbnVsbDtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxHYW1lQ29uZmlnLlJvdztpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxHYW1lQ29uZmlnLkNvbDtqKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVza0FycltpXVtqXS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnModG91Y2hQb2ludCkgJiYgdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlciAhPSAwKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlID0gdGhpcy5kZXNrQXJyW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza0NsaWNrU2hvdygxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5zZXRQb3NpdGlvbih0aGlzLmRlc2tOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoUG9pbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZVVpVG9vbHMuc2V0U3ByaXRlRnJhbWUoXCJwZXJzaW9uL0xWXCIrdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlcix0aGlzLm1vdmVEZXNrU3ByaXRlKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERlc2tIaWRlKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgLy/np7vlh7rlsY/luZXlpJZcbiAgICBvblRvdWNoQ2FuY2VsKGV2ZW50KXtcbiAgICAgICAgaWYodGhpcy5zZWxlY3REZXNrU3ByaXRlID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuMSwgdGhpcy5zZWxlY3REZXNrU3ByaXRlLm5vZGUueCwgdGhpcy5zZWxlY3REZXNrU3ByaXRlLm5vZGUueSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5kZXNrQ2xpY2tTaG93KDIpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KSkpO1xuICAgIH0sXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG4gICAgLy/ph5HpkrHotK3kubDmjInpkq5cbiAgICBidWdHb2xkRnVuYyhsZXZlbCl7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMSk7XG4gICAgICAgIGlmKEdhbWVDb25maWcuR2FtZU1vbmV5IDwgR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtsZXZlbF0pe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLph5HpkrHkuI3otrNcIik7XG4gICAgICAgICAgICBHYW1lVG9vbHMudG9hc3RNZXNzYWdlKDEwKTtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL01vbmV5UGFuZWxcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5jaG9vc2Upe1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5zaG93UGVyc29uTnVtYmVyID0gbGV2ZWwrMTtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL1Nob3BUb3BMZXZlbFwiKTtcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYodGhpcy5hZGREZXNrU3ByaXRlQnlMZXZlbChsZXZlbCkpe1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZU1vbmV5IC09IEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbbGV2ZWxdO1xuICAgICAgICAgICAgICAgIGlmKGxldmVsID09IDEpe1xuICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlWzFdID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlWzFdICogMS4wNyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbbGV2ZWxdID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW2xldmVsXSAqIDEuMTc1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcImJ1eUdvbGRVcGdyYWRlXCIrbGV2ZWwsR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtsZXZlbF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZU1vbmV5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v5pS+5byA5Lq654mpXG4gICAgb25Ub3VjaEVuZGVkOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLlJvdzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ29sOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXNrQXJyW2ldW2pdICE9IHRoaXMuc2VsZWN0RGVza1Nwcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza0NsaWNrU2hvdygyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvdWNoUG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaUvuW8gFwiLHRvdWNoUG9pbnQpO1xuICAgICAgICBsZXQgbW92ZVRpbWUgPSAwLjE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5Sb3c7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNvbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0RGVza1Nwcml0ZSAmJiB0aGlzLmRlc2tBcnJbaV1bal0ubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHRvdWNoUG9pbnQpICYmIHRoaXMuZGVza0FycltpXVtqXSAhPSB0aGlzLnNlbGVjdERlc2tTcHJpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgPT0gMCkgey8v56e75Yqo55qE5L2N572u5rKh5Lq6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0ubnVtYmVyID0gdGhpcy5zZWxlY3REZXNrU3ByaXRlLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5udW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmRlc2tTaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza0NsaWNrU2hvdygxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKG1vdmVUaW1lLCB0aGlzLmRlc2tBcnJbaV1bal0ubm9kZS54LCB0aGlzLmRlc2tBcnJbaV1bal0ubm9kZS55KSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5kZXNrQ2xpY2tTaG93KDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlciA9PSB0aGlzLnNlbGVjdERlc2tTcHJpdGUubnVtYmVyKSB7Ly/nm7jlkIznrYnnuqcrMVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgPCA0Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZGVza0FycltpXVtqXS5kZXNrU2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5hZGROdW1iZXJBbmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgPiBHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbCkgey8v5ZCI5oiQ6LaF6L+H5b2T5YmN5pyA5aSn5Lq654mp562J57qnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsID0gdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVQZXJzb25NYXhMZXZlbFwiLCBHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuc2hvd1BlcnNvbk51bWJlciA9IEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuino+mUgeaWsOS4gOe6p+eahOWumOWVpu+8jOeOsOWcqOeahOWumOe6p+aYr1wiK0dhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVWlUb29scy5sb2FkaW5nTGF5ZXIoXCJQYW5lbC9OZXdQZXJzaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNpb25OYW1lLnN0cmluZyA9IEdhbWVDb25maWcucGVyTmFtZVtHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbC0xXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnRvYXN0TWVzc2FnZSgxNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zdWJtaXRTY29yZShHYW1lQ29uZmlnLkdhbWVNb25leSk7Ly/mj5DkuqTmlrDnmoTlrZDln5/kv6Hmga9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvL+WPr+WKoOS6uueJqeeahOmSseeahOaYvuekulxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdhbWVUb29scy50b2FzdE1lc3NhZ2UoMTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiR2FtZVBsYXllclwiLCBHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8obW92ZVRpbWUsIHRoaXMuZGVza0FycltpXVtqXS5ub2RlLngsIHRoaXMuZGVza0FycltpXVtqXS5ub2RlLnkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5udW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJHYW1lQ29tcG91bmRQZXJzb25OdW1iZXJcIiwgR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVDb21wb3VuZFBlcnNvbk51bWJlclwiLCAwKSArIDEpOy8v5re75Yqg5ZCI5oiQ5Lq654mp5qyh5pWwXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5L2g5bey5Yiw6L6+5beF5bOwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnRvYXN0TWVzc2FnZSgxMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8obW92ZVRpbWUsIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5ub2RlLngsIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5ub2RlLnkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5kZXNrQ2xpY2tTaG93KDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtYmVyID0gdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgPSB0aGlzLnNlbGVjdERlc2tTcHJpdGUubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmRlc2tTaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza0NsaWNrU2hvdygxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5udW1iZXIgPSBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbyhtb3ZlVGltZSwgdGhpcy5kZXNrQXJyW2ldW2pdLm5vZGUueCwgdGhpcy5kZXNrQXJyW2ldW2pdLm5vZGUueSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza0NsaWNrU2hvdygyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5kZXNrU2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERlc2tTcHJpdGUuZGVza0NsaWNrU2hvdygyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlRGVza0FycigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5Zue5pS2XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdERlc2tTcHJpdGUgJiYgdGhpcy5yZWNvdmVyeWJ0bi5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyh0b3VjaFBvaW50KSkge1xuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5udW1iZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlLmRlc2tTaG93KCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVEZXNrQXJyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0RGVza1Nwcml0ZSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8obW92ZVRpbWUsIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5ub2RlLngsIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5ub2RlLnkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlLmRlc2tDbGlja1Nob3coMik7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/ljYfpq5jkuIDnrYnnuqdcbiAgICBjaG9vc2VMZXZlbChsZXZlbCl7XG4gICAgICAgIGlmKHRoaXMuYWRkRGVza1Nwcml0ZUJ5TGV2ZWwobGV2ZWwpKXtcbiAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZU1vbmV5IC09IEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbbGV2ZWwtMV07XG4gICAgICAgICAgICBpZihsZXZlbCA9PSAyKXtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlWzFdID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlWzFdICogMS4wNyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW2xldmVsLTFdID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW2xldmVsLTFdICogMS4xNzUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcImJ1eUdvbGRVcGdyYWRlXCIrbGV2ZWwtMSxHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW2xldmVsLTFdKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R2FtZU1vbmV5KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v54K55Ye76LSt5Lmw5oyJ6ZKu5Yik5pat5qGM5a2Q5Ye6546w5Lq654mp55qE5Yqf6IO9XG4gICAgYWRkRGVza1Nwcml0ZUJ5TGV2ZWwobGV2ZWwpe1xuICAgICAgICBmb3IobGV0IGkgPTA7aTxHYW1lQ29uZmlnLlJvdztpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxHYW1lQ29uZmlnLkNvbDtqKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5kZXNrQ2xpY2tTaG93KDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnNldFBvc2l0aW9uKC01NSwtMzY2KTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZVVpVG9vbHMuc2V0U3ByaXRlRnJhbWUoXCJwZXJzaW9uL0xWXCIrbGV2ZWwsdGhpcy5tb3ZlRGVza1Nwcml0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuMSx0aGlzLmRlc2tBcnJbaV1bal0ubm9kZS5nZXRQb3NpdGlvbigpKSxjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmRlc2tDbGlja1Nob3coMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgPSBsZXZlbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmRlc2tTaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJkZXNrQXJyXCIgKyBpICsgaiwgdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJkZXNrQXJyXCIgKyBpICsgaix0aGlzLmRlc2tBcnJbaV1bal0ubnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Lmw5LiN5LiL5LqG77yM5bey57uP5ruh5LqGXCIpO1xuICAgICAgICBHYW1lVG9vbHMudG9hc3RNZXNzYWdlKDkpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8v5L+d5a2Y5qGM5a2Q5LiK55qE5Lq654mp5L+h5oGvXG4gICAgc2F2ZURlc2tBcnIoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5Sb3c7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNvbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcImRlc2tBcnJcIiArIGkgKyBqLCB0aGlzLmRlc2tBcnJbaV1bal0ubnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/mmL7npLrotK3kubDkv6Hmga9cbiAgICBzZXRCdWdHb2xkYnRuKCl7XG4gICAgICAgIGxldCBsZXZlbCA9IEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsLTQ7XG4gICAgICAgIGlmKGxldmVsID4gMSl7XG4gICAgICAgICAgICBmb3IobGV0IGJ1Z2xldmVsID0gbGV2ZWw7YnVnbGV2ZWw+MDtidWdsZXZlbC0tKXtcbiAgICAgICAgICAgICAgICBpZihHYW1lQ29uZmlnLkdhbWVNb25leSA+IEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbYnVnbGV2ZWxdKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoYnVnbGV2ZWw8bGV2ZWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGggPSBNYXRoLnJhbmRvbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRoPjAuOCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9vc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVnUGVyc2lvbkxldmVsID0gYnVnbGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVnTGFiZWwuc3RyaW5nID0gXCJMViBcIitidWdsZXZlbDsvL+i0reS5sOetiee6p1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1Z0dvbGRMYWJlbC5zdHJpbmcgPSBHYW1lVG9vbHMuZ2V0TnVtYmVyU3RyaW5nKEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbYnVnbGV2ZWxdKTsvL+i0reS5sOmHkeminVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuYnVnUGVyc2lvbkxldmVsID0gMTtcbiAgICAgICAgICAgIHRoaXMuYnVnR29sZExhYmVsLnN0cmluZyA9IEdhbWVUb29scy5nZXROdW1iZXJTdHJpbmcoR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVsxXSk7XG4gICAgICAgICAgICB0aGlzLmJ1Z0xhYmVsLnN0cmluZyA9IFwiTFYgMVwiOy8v6LSt5Lmw562J57qnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v5YWD5a6d6LSt5Lmw5oyJ6ZKuXG4gICAgYnV5Q29pbkZ1bmMobGV2ZWwpe1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDEpO1xuICAgICAgICBpZihHYW1lQ29uZmlnLkdhbWVDb2luIDwgR2FtZUNvbmZpZy5idXlDb2luVXBncmFkZVtsZXZlbF0pe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhYPlrp3kuI3otrNcIik7XG4gICAgICAgICAgICBHYW1lVG9vbHMudG9hc3RNZXNzYWdlKDgpO1xuICAgICAgICAgICAgLy8gbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgLy8gR2FtZVRvb2xzLl9jcmVhdGVWZWRpb0FkKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIC8vICAgICBpZiAocmVzLmlzRW5kZWQgfHwgcmVzLnJhdykge1xuICAgICAgICAgICAgLy8gICAgICAgICBHYW1lQ29uZmlnLkdhbWVDb2luICs9IDEwMDtcbiAgICAgICAgICAgIC8vICAgICAgICAgc2VsZi5zZXRHYW1lQ29pbigpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuYWRkRGVza1Nwcml0ZUJ5TGV2ZWwobGV2ZWwpKXtcbiAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUNvaW4gLT0gR2FtZUNvbmZpZy5idXlDb2luVXBncmFkZVtsZXZlbF07XG4gICAgICAgICAgICAvLyBpZihsZXZlbCA9PSAxKXtcbiAgICAgICAgICAgIC8vICAgICBHYW1lQ29uZmlnLmJ1eUNvaW5VcGdyYWRlWzFdID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUNvaW5VcGdyYWRlWzFdICogMS4wNyk7XG4gICAgICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgICAgIEdhbWVDb25maWcuYnV5Q29pblVwZ3JhZGVbbGV2ZWxdID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUNvaW5VcGdyYWRlW2xldmVsXSAqIDEuMTc1KTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJidXlDb2luVXBncmFkZVwiK2xldmVsLEdhbWVDb25maWcuYnV5Q29pblVwZ3JhZGVbbGV2ZWxdKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R2FtZUNvaW4oKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL+WKoOmAn1xuICAgIGdhbWVEb3VibGUobnVtKXtcbiAgICAgICAgdGhpcy5qaWFzdUJ0bi5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgIHRoaXMuamlhc3VCdG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuamlhc3VCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJudW1iZ1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVDb25maWcuUm93O2krKyl7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPEdhbWVDb25maWcuQ29sO2orKyl7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmlzU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGltZXI9bnVsbDtcbiAgICAgICAgbGV0IHQ9bnVtO1xuICAgICAgICBsZXQgbT0wO1xuICAgICAgICBsZXQgcz0wO1xuICAgICAgICBtPU1hdGguZmxvb3IodC82MCU2MCk7XG4gICAgICAgIG08MTAmJihtPScwJyttKTtcbiAgICAgICAgcz1NYXRoLmZsb29yKHQlNjApO1xuICAgICAgICBmdW5jdGlvbiBjb3VudERvd24oKXtcbiAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgIHM8MTAmJihzPScwJytzKTtcbiAgICAgICAgICAgIGlmKHMubGVuZ3RoPj0zKXtcbiAgICAgICAgICAgICAgICBzPTU5O1xuICAgICAgICAgICAgICAgIG09XCIwXCIrKE51bWJlcihtKS0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG0ubGVuZ3RoPj0zKXtcbiAgICAgICAgICAgICAgICBtPScwMCc7XG4gICAgICAgICAgICAgICAgcz0nMDAnO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcubWFpbi5qaWFzdUJ0bi5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcubWFpbi5qaWFzdUJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcubWFpbi5qaWFzdUJ0bi5nZXRDaGlsZEJ5TmFtZShcIm51bWJnXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5Sb3c7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ29sOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcubWFpbi5kZXNrQXJyW2ldW2pdLmlzU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lQ29uZmlnLm1haW4uamlhc3VCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJudW1iZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIm51bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG0rXCI6XCIgKyBzO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobStcIuWIhumSn1wiK3MrXCLnp5JcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGltZXI9c2V0SW50ZXJ2YWwoY291bnREb3duLDEwMDApO1xuICAgIH0sXG4gICAgLy/lhYPlrp3nmoTlj5jliqhcbiAgICBzZXRHYW1lQ29pbigpe1xuICAgICAgICB0aGlzLmNvaW5MYWJlbC5zdHJpbmcgPSBHYW1lVG9vbHMuZ2V0TnVtYmVyU3RyaW5nKEdhbWVDb25maWcuR2FtZUNvaW4pO1xuICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiR2FtZUNvaW5cIixHYW1lQ29uZmlnLkdhbWVDb2luKTtcbiAgICB9LFxuICAgIC8v6YeR6ZKx55qE5Y+Y5YqoXG4gICAgc2V0R2FtZU1vbmV5KCl7XG4gICAgICAgIHRoaXMuZ29sZExhYmVsLnN0cmluZyA9IEdhbWVUb29scy5nZXROdW1iZXJTdHJpbmcoR2FtZUNvbmZpZy5HYW1lTW9uZXkpO1xuICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiR2FtZU1vbmV5XCIsR2FtZUNvbmZpZy5HYW1lTW9uZXkpO1xuICAgICAgICB0aGlzLnNldEJ1Z0dvbGRidG4oKTtcbiAgICB9LFxuICAgIC8v55Sf5Lqn6YeR6ZKx55qE6YCf5bqmXG4gICAgZ2V0TW9uZXlTcGVlZCgpe1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxHYW1lQ29uZmlnLlJvdztpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxHYW1lQ29uZmlnLkNvbDtqKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgIT0wKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kZXNrQXJyW2ldW2pdLmlzU2VsZWN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSB0aGlzLmRlc2tBcnJbaV1bal0uZXhwTnVtYmVyKjI7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IHRoaXMuZGVza0FycltpXVtqXS5leHBOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb25leVNwZWVkTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBHYW1lVG9vbHMuZ2V0TnVtYmVyU3RyaW5nKHN1bSkrXCIv56eSXCI7XG4gICAgICAgIHRoaXMubW9uZXlTcGVlZExhYmVsLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMiwxLjMsMS4zKSxjYy5zY2FsZVRvKDAuMiwxLDEpKSk7XG4gICAgICAgIEdhbWVDb25maWcuR2FtZU1vbmV5ICs9IHN1bSozO1xuICAgICAgICB0aGlzLnNldEdhbWVNb25leSgpO1xuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH0sXG4gICAgdXBkYXRlKGR0KXtcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgaWYodGhpcy50aW1lciA+PSAzKXtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPTA7XG4gICAgICAgICAgICB0aGlzLmdldE1vbmV5U3BlZWQoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgXG59KTtcbiJdfQ==