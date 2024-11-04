
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/Sign.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '126e8CHwslF0K3MAeMYYnht', 'Sign');
// Script/panel/Sign.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    signbg: {
      "default": [],
      type: cc.Sprite,
      displayName: "签到背景图片"
    },
    choose: {
      "default": [],
      type: cc.Node,
      displayName: "勾"
    },
    signBtn: {
      "default": null,
      type: cc.Node,
      displayName: "签到按钮"
    },
    doubleSignBtn: {
      "default": null,
      type: cc.Node,
      displayName: "双倍领取"
    }
  },
  onLoad: function onLoad() {
    // GameTools.setItemByLocalStorage("checkInTimestamp",0);
    // GameTools.setItemByLocalStorage("checkInDays",0);
    if (!GameConfig.IS_GAME_SHARE) {
      this.doubleSignBtn.active = false;
      this.signBtn.setPosition(0, -488);
    }
    if (this.hasCheckedToday()) {
      // GameTools.showToast('已签到');
      this.signBtn.color = new cc.Color(125, 125, 125);
      this.signBtn.removeComponent(cc.Button);
      this.doubleSignBtn.color = new cc.Color(125, 125, 125);
      this.doubleSignBtn.removeComponent(cc.Button);
    }

    // this.isClick = false;
    window.cp = this;
    this.SignDay = GameTools.getItemByLocalStorage('checkInDays', 0);
    this.day = this.SignDay % 7;
    var hasChecked = this.hasCheckedToday();
    for (var i = 0; i < 7; i++) {
      if (i < this.day || this.day === 0 && hasChecked) {
        this.choose[i].active = true;
        GameUiTools.setSpriteFrame("sign/bb2", this.signbg[i]);
      } else if (i === this.day && hasChecked) {
        this.choose[i].active = false;
        // this.takens[i].opacity = 0;
      } else {
        this.choose[i].active = false;
        // this.takens[i].opacity = 0;
      }
    }
  },
  //判断今天是否签到
  hasCheckedToday: function hasCheckedToday() {
    console.log("判断今天是否签到");
    var lastCheckInTimestamp = GameTools.getItemByLocalStorage("checkInTimestamp", 0);
    var now = new Date();
    var todayBeginTimestamp = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    return lastCheckInTimestamp >= todayBeginTimestamp; //真为已签到，假没签到
  },

  close: function close() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
  },
  disableBtn: function disableBtn(day) {
    // window.cp.takens[day].opacity = 255;
    window.cp.choose[day].active = true;
    GameUiTools.setSpriteFrame("sign/bb2", window.cp.signbg[day]);
    window.cp.doubleSignBtn.color = new cc.Color(125, 125, 125);
    window.cp.doubleSignBtn.removeComponent(cc.Button);
    window.cp.signBtn.color = new cc.Color(125, 125, 125);
    window.cp.signBtn.removeComponent(cc.Button);
  },
  doubleSign: function doubleSign() {
    GameTools.playSimpleAudioEngine(3);
    // this.isClick = true;
    var coins = [4000, 200, 8000, 400, 16000, 800, 30000];
    if (this.hasCheckedToday()) {
      console.log("已经签到");
      GameTools.showDialog('已经签到');
      return;
    }
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      // wx.aldSendEvent('看视频双倍签到',{'key' : 'value'});
    } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {}
    GameTools._createVedioAd(function (res) {
      if (res.isEnded || res.raw) {
        if (window.cp.day % 2 != 0) {
          GameConfig.GameCoin += coins[window.cp.day];
          GameTools.showToast("获得元宝+" + coins[window.cp.day]);
          GameTools.setItemByLocalStorage("GameCoin", GameConfig.GameCoin);
        } else {
          GameConfig.GameMoney += coins[window.cp.day];
          GameTools.showToast("获得铜钱+" + coins[window.cp.day]);
          GameTools.setItemByLocalStorage("GameMoney", GameConfig.GameMoney);
        }
        window.cp.disableBtn(window.cp.day); //按钮的判断
        GameTools.setItemByLocalStorage("checkInDays", window.cp.SignDay + 1);
        GameTools.setItemByLocalStorage("checkInTimestamp", Date.now());
      }
    });
  },
  sign: function sign() {
    GameTools.playSimpleAudioEngine(3);
    var coins = [2000, 100, 4000, 200, 8000, 400, 15000];
    if (this.hasCheckedToday()) {
      console.log("已经签到");
      GameTools.showDialog('已经签到');
      return;
    }
    if (this.day % 2 != 0) {
      GameConfig.GameCoin += coins[this.day];
      GameTools.showToast("获得元宝+" + coins[this.day]);
      GameTools.setItemByLocalStorage("GameCoin", GameConfig.GameCoin);
    } else {
      GameConfig.GameMoney += coins[this.day];
      GameTools.showToast("获得铜钱+" + coins[this.day]);
      GameTools.setItemByLocalStorage("GameMoney", GameConfig.GameMoney);
    }
    window.cp.disableBtn(this.day); //按钮的判断
    GameTools.setItemByLocalStorage("checkInDays", this.SignDay + 1);
    GameTools.setItemByLocalStorage("checkInTimestamp", Date.now());
    // GameData.setSignDay(GameData.getSignDay()+1);
    // GameData.setCheckInTimestamp(Date.now());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2lnbi5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzaWduYmciLCJ0eXBlIiwiU3ByaXRlIiwiZGlzcGxheU5hbWUiLCJjaG9vc2UiLCJOb2RlIiwic2lnbkJ0biIsImRvdWJsZVNpZ25CdG4iLCJvbkxvYWQiLCJJU19HQU1FX1NIQVJFIiwiYWN0aXZlIiwic2V0UG9zaXRpb24iLCJoYXNDaGVja2VkVG9kYXkiLCJjb2xvciIsIkNvbG9yIiwicmVtb3ZlQ29tcG9uZW50IiwiQnV0dG9uIiwid2luZG93IiwiY3AiLCJTaWduRGF5IiwiZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlIiwiZGF5IiwiaGFzQ2hlY2tlZCIsImkiLCJzZXRTcHJpdGVGcmFtZSIsImNvbnNvbGUiLCJsb2ciLCJsYXN0Q2hlY2tJblRpbWVzdGFtcCIsIm5vdyIsIkRhdGUiLCJ0b2RheUJlZ2luVGltZXN0YW1wIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRUaW1lIiwiY2xvc2UiLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJub2RlIiwiZGVzdHJveSIsImRpc2FibGVCdG4iLCJkb3VibGVTaWduIiwiY29pbnMiLCJzaG93RGlhbG9nIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsIkJZVEVEQU5DRV9HQU1FIiwiX2NyZWF0ZVZlZGlvQWQiLCJyZXMiLCJpc0VuZGVkIiwicmF3IiwiR2FtZUNvaW4iLCJzaG93VG9hc3QiLCJzZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJHYW1lTW9uZXkiLCJzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8s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QU0sQ0FBQztNQUNuQmhDLFNBQVMsQ0FBQ2dELFVBQVUsQ0FBQyxNQUFNLENBQUM7TUFDNUI7SUFDSjtJQUNBLElBQUcsSUFBSSxDQUFDckIsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7TUFDakI3QixVQUFVLENBQUMyRCxRQUFRLElBQUlWLEtBQUssQ0FBQyxJQUFJLENBQUNwQixHQUFHLENBQUM7TUFDdEMzQixTQUFTLENBQUMwRCxTQUFTLENBQUMsT0FBTyxHQUFHWCxLQUFLLENBQUMsSUFBSSxDQUFDcEIsR0FBRyxDQUFDLENBQUM7TUFDOUMzQixTQUFTLENBQUMyRCxxQkFBcUIsQ0FBQyxVQUFVLEVBQUM3RCxVQUFVLENBQUMyRCxRQUFRLENBQUM7SUFDbkUsQ0FBQyxNQUFJO01BQ0QzRCxVQUFVLENBQUM4RCxTQUFTLElBQUliLEtBQUssQ0FBQyxJQUFJLENBQUNwQixHQUFHLENBQUM7TUFDdkMzQixTQUFTLENBQUMwRCxTQUFTLENBQUMsT0FBTyxHQUFHWCxLQUFLLENBQUMsSUFBSSxDQUFDcEIsR0FBRyxDQUFDLENBQUM7TUFDOUMzQixTQUFTLENBQUMyRCxxQkFBcUIsQ0FBQyxXQUFXLEVBQUM3RCxVQUFVLENBQUM4RCxTQUFTLENBQUM7SUFDckU7SUFFQXJDLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDcUIsVUFBVSxDQUFDLElBQUksQ0FBQ2xCLEdBQUcsQ0FBQyxDQUFDO0lBQy9CM0IsU0FBUyxDQUFDMkQscUJBQXFCLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQ2xDLE9BQU8sR0FBQyxDQUFDLENBQUM7SUFDN0R6QixTQUFTLENBQUMyRCxxQkFBcUIsQ0FBQyxrQkFBa0IsRUFBQ3hCLElBQUksQ0FBQ0QsR0FBRyxFQUFFLENBQUM7SUFDOUQ7SUFDQTtFQUNKO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBzaWduYmc6e1xuICAgICAgICAgICAgZGVmYXVsdDpbXSxcbiAgICAgICAgICAgIHR5cGU6Y2MuU3ByaXRlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLnrb7liLDog4zmma/lm77niYdcIlxuICAgICAgICB9LFxuICAgICAgICBjaG9vc2U6e1xuICAgICAgICAgICAgZGVmYXVsdDpbXSxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5Yu+XCJcbiAgICAgICAgfSxcbiAgICAgICAgc2lnbkJ0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuetvuWIsOaMiemSrlwiXG4gICAgICAgIH0sXG4gICAgICAgIGRvdWJsZVNpZ25CdG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLlj4zlgI3pooblj5ZcIlxuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJjaGVja0luVGltZXN0YW1wXCIsMCk7XG4gICAgICAgIC8vIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJjaGVja0luRGF5c1wiLDApO1xuICAgICAgICBpZighR2FtZUNvbmZpZy5JU19HQU1FX1NIQVJFKXtcbiAgICAgICAgICAgIHRoaXMuZG91YmxlU2lnbkJ0bi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2lnbkJ0bi5zZXRQb3NpdGlvbigwLC00ODgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0NoZWNrZWRUb2RheSgpKSB7XG4gICAgICAgICAgICAvLyBHYW1lVG9vbHMuc2hvd1RvYXN0KCflt7Lnrb7liLAnKTtcbiAgICAgICAgICAgIHRoaXMuc2lnbkJ0bi5jb2xvciA9IG5ldyBjYy5Db2xvcigxMjUsIDEyNSwgMTI1KTtcbiAgICAgICAgICAgIHRoaXMuc2lnbkJ0bi5yZW1vdmVDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIHRoaXMuZG91YmxlU2lnbkJ0bi5jb2xvciA9IG5ldyBjYy5Db2xvcigxMjUsIDEyNSwgMTI1KTtcbiAgICAgICAgICAgIHRoaXMuZG91YmxlU2lnbkJ0bi5yZW1vdmVDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuaXNDbGljayA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuY3AgPSB0aGlzO1xuICAgICAgICB0aGlzLlNpZ25EYXkgPSBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKCdjaGVja0luRGF5cycsMCk7XG4gICAgICAgIHRoaXMuZGF5ID0gdGhpcy5TaWduRGF5ICUgNztcbiAgICAgICAgbGV0IGhhc0NoZWNrZWQgPSB0aGlzLmhhc0NoZWNrZWRUb2RheSgpO1xuICAgICAgICBmb3IobGV0IGkgPSAwO2k8NztpKyspe1xuICAgICAgICAgICAgaWYoaTx0aGlzLmRheSB8fCAodGhpcy5kYXkgPT09IDAgJiYgaGFzQ2hlY2tlZCkpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hvb3NlW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgR2FtZVVpVG9vbHMuc2V0U3ByaXRlRnJhbWUoXCJzaWduL2JiMlwiLHRoaXMuc2lnbmJnW2ldKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGkgPT09IHRoaXMuZGF5ICYmIGhhc0NoZWNrZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMuY2hvb3NlW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMudGFrZW5zW2ldLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5jaG9vc2VbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy50YWtlbnNbaV0ub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v5Yik5pat5LuK5aSp5piv5ZCm562+5YiwXG4gICAgaGFzQ2hlY2tlZFRvZGF5KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWIpOaWreS7iuWkqeaYr+WQpuetvuWIsFwiKVxuICAgICAgICBsZXQgbGFzdENoZWNrSW5UaW1lc3RhbXAgPSBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiY2hlY2tJblRpbWVzdGFtcFwiLDApO1xuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHRvZGF5QmVnaW5UaW1lc3RhbXAgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIGxhc3RDaGVja0luVGltZXN0YW1wID49IHRvZGF5QmVnaW5UaW1lc3RhbXA7Ly/nnJ/kuLrlt7Lnrb7liLDvvIzlgYfmsqHnrb7liLBcbiAgICB9LFxuXG4gICAgY2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuXG4gICAgZGlzYWJsZUJ0bjogZnVuY3Rpb24gKGRheSkge1xuICAgICAgICAvLyB3aW5kb3cuY3AudGFrZW5zW2RheV0ub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgd2luZG93LmNwLmNob29zZVtkYXldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldFNwcml0ZUZyYW1lKFwic2lnbi9iYjJcIix3aW5kb3cuY3Auc2lnbmJnW2RheV0pO1xuICAgICAgICB3aW5kb3cuY3AuZG91YmxlU2lnbkJ0bi5jb2xvciA9IG5ldyBjYy5Db2xvcigxMjUsIDEyNSwgMTI1KTtcbiAgICAgICAgd2luZG93LmNwLmRvdWJsZVNpZ25CdG4ucmVtb3ZlQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIHdpbmRvdy5jcC5zaWduQnRuLmNvbG9yID0gbmV3IGNjLkNvbG9yKDEyNSwgMTI1LCAxMjUpO1xuICAgICAgICB3aW5kb3cuY3Auc2lnbkJ0bi5yZW1vdmVDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICB9LFxuICAgIGRvdWJsZVNpZ246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgLy8gdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICAgICAgbGV0IGNvaW5zID0gWzQwMDAsIDIwMCwgODAwMCwgNDAwLCAxNjAwMCwgODAwLCAzMDAwMF07XG4gICAgICAgIGlmICh0aGlzLmhhc0NoZWNrZWRUb2RheSgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW3sue7j+etvuWIsFwiKVxuICAgICAgICAgICAgR2FtZVRvb2xzLnNob3dEaWFsb2coJ+W3sue7j+etvuWIsCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcbiAgICAgICAgICAgIC8vIHd4LmFsZFNlbmRFdmVudCgn55yL6KeG6aKR5Y+M5YCN562+5YiwJyx7J2tleScgOiAndmFsdWUnfSk7XG4gICAgICAgIH1lbHNlIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKXtcblxuICAgICAgICB9XG4gICAgICAgIEdhbWVUb29scy5fY3JlYXRlVmVkaW9BZChmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmlzRW5kZWQgfHwgcmVzLnJhdykge1xuICAgICAgICAgICAgICAgIGlmKHdpbmRvdy5jcC5kYXkgJSAyICE9IDApe1xuICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVDb2luICs9IGNvaW5zW3dpbmRvdy5jcC5kYXldO1xuICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2hvd1RvYXN0KFwi6I635b6X5YWD5a6dK1wiICsgY29pbnNbd2luZG93LmNwLmRheV0pO1xuICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiR2FtZUNvaW5cIixHYW1lQ29uZmlnLkdhbWVDb2luKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lTW9uZXkgKz0gY29pbnNbd2luZG93LmNwLmRheV07XG4gICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoXCLojrflvpfpk5zpkrErXCIgKyBjb2luc1t3aW5kb3cuY3AuZGF5XSk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJHYW1lTW9uZXlcIixHYW1lQ29uZmlnLkdhbWVNb25leSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd2luZG93LmNwLmRpc2FibGVCdG4od2luZG93LmNwLmRheSk7Ly/mjInpkq7nmoTliKTmlq1cbiAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiY2hlY2tJbkRheXNcIix3aW5kb3cuY3AuU2lnbkRheSsxKTtcbiAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiY2hlY2tJblRpbWVzdGFtcFwiLERhdGUubm93KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH0sXG5cbiAgICBzaWduOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMyk7XG4gICAgICAgIGxldCBjb2lucyA9IFsyMDAwLCAxMDAsIDQwMDAsIDIwMCwgODAwMCwgNDAwLCAxNTAwMF07XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzQ2hlY2tlZFRvZGF5KCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5bey57uP562+5YiwXCIpXG4gICAgICAgICAgICBHYW1lVG9vbHMuc2hvd0RpYWxvZygn5bey57uP562+5YiwJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5kYXkgJSAyICE9IDApe1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lQ29pbiArPSBjb2luc1t0aGlzLmRheV07XG4gICAgICAgICAgICBHYW1lVG9vbHMuc2hvd1RvYXN0KFwi6I635b6X5YWD5a6dK1wiICsgY29pbnNbdGhpcy5kYXldKTtcbiAgICAgICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJHYW1lQ29pblwiLEdhbWVDb25maWcuR2FtZUNvaW4pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZU1vbmV5ICs9IGNvaW5zW3RoaXMuZGF5XTtcbiAgICAgICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoXCLojrflvpfpk5zpkrErXCIgKyBjb2luc1t0aGlzLmRheV0pO1xuICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVNb25leVwiLEdhbWVDb25maWcuR2FtZU1vbmV5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5jcC5kaXNhYmxlQnRuKHRoaXMuZGF5KTsvL+aMiemSrueahOWIpOaWrVxuICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiY2hlY2tJbkRheXNcIix0aGlzLlNpZ25EYXkrMSk7XG4gICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJjaGVja0luVGltZXN0YW1wXCIsRGF0ZS5ub3coKSk7XG4gICAgICAgIC8vIEdhbWVEYXRhLnNldFNpZ25EYXkoR2FtZURhdGEuZ2V0U2lnbkRheSgpKzEpO1xuICAgICAgICAvLyBHYW1lRGF0YS5zZXRDaGVja0luVGltZXN0YW1wKERhdGUubm93KCkpO1xuICAgIH0sXG59KTtcbiJdfQ==