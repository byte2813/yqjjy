
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/DeskSprite');
require('./assets/Script/GameConfig');
require('./assets/Script/GameTools');
require('./assets/Script/GameUiTools');
require('./assets/Script/Home');
require('./assets/Script/Number');
require('./assets/Script/eq4096');
require('./assets/Script/eqconf');
require('./assets/Script/main');
require('./assets/Script/panel/CblPanel');
require('./assets/Script/panel/HowGame');
require('./assets/Script/panel/JiasuPanel');
require('./assets/Script/panel/Jptj');
require('./assets/Script/panel/LixianPanel');
require('./assets/Script/panel/MiniProgram');
require('./assets/Script/panel/MoneyPanel');
require('./assets/Script/panel/NewPersion');
require('./assets/Script/panel/RankItem');
require('./assets/Script/panel/RankingListView');
require('./assets/Script/panel/SelfApp');
require('./assets/Script/panel/ShopItemList');
require('./assets/Script/panel/ShopPanel');
require('./assets/Script/panel/ShopTopLevel');
require('./assets/Script/panel/ShowMessage');
require('./assets/Script/panel/Sign');
require('./assets/Script/panel/TurnTable');
require('./assets/Script/sdk/EyouClientKs');
require('./assets/migration/use_reversed_rotateBy');
require('./assets/migration/use_reversed_rotateTo');
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/HowGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d60ahmrI5MSqUfkleNmeSM', 'HowGame');
// Script/panel/HowGame.js

"use strict";

var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  close: function close() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcSG93R2FtZS5qcyJdLCJuYW1lcyI6WyJHYW1lVG9vbHMiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJjbG9zZSIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsIm5vZGUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQ0MsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFDckJDLFVBQVUsRUFBRSxDQUVaLENBQUM7RUFDREMsTUFBTSxXQUFBQSxPQUFBLEVBQUUsQ0FFUixDQUFDO0VBQ0RDLEtBQUssRUFBRyxTQUFBQSxNQUFBLEVBQVU7SUFDZFAsU0FBUyxDQUFDUSxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sRUFBRTtFQUN2QjtBQUVKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgXG4gICAgfSxcbiAgICBvbkxvYWQoKXtcblxuICAgIH0sXG4gICAgY2xvc2UgOiBmdW5jdGlvbigpe1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDMpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH0sXG5cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameUiTools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0885UakEpDfKv50U/v34Q/', 'GameUiTools');
// Script/GameUiTools.js

"use strict";

var GameUiTools = {
  setSpriteFrame: function setSpriteFrame(spriteName, sprite) {
    cc.loader.loadRes(spriteName, cc.SpriteFrame, function (err, spriteFrame) {
      if (sprite.node != null) {
        sprite.spriteFrame = spriteFrame;
      }
    });
  },
  setButtonClickEvents: function setButtonClickEvents(component, menu, handler, customEventData, isScale) {
    var arrayMenu = new Array();
    if (menu.length == undefined) {
      arrayMenu[0] = menu;
    } else {
      arrayMenu = menu;
    }
    for (var i = 0; i < arrayMenu.length; i++) {
      var clickEventHandler = new cc.Component.EventHandler();
      clickEventHandler.target = component.node; //这个 node 节点是你的事件处理代码组件所属的节点
      clickEventHandler.component = component.node.name; //这个是代码文件名
      clickEventHandler.handler = handler;
      if (menu.length == undefined) {
        clickEventHandler.customEventData = customEventData;
      } else {
        clickEventHandler.customEventData = i;
      }
      var button = arrayMenu[i].addComponent(cc.Button);
      button.clickEvents.push(clickEventHandler);
      if (isScale == undefined || isScale) {
        button.transition = cc.Button.Transition.SCALE;
        button.duration = 0.1;
        button.zoomScale = 1.2;
      }
    }
  },
  scheduleOnce: function scheduleOnce(node, callFunc, delay) {
    //事件调度
    node.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(callFunc, node)));
  },
  loadingScene: function loadingScene(sceneName, isShowLayer) {
    //加载场景
    if (isShowLayer) {
      cc.loader.loadRes("panel/LoadingLayer", function (err, prefab) {
        var node = cc.instantiate(prefab);
        cc.director.getScene().children[0].addChild(node);
        cc.director.preloadScene(sceneName, function () {
          cc.director.loadScene(sceneName);
        });
      });
    } else {
      cc.director.preloadScene(sceneName, function () {
        cc.director.loadScene(sceneName);
      });
    }
  },
  loadingLayer: function loadingLayer(panelName) {
    //加载图层
    cc.loader.loadRes(panelName, function (err, prefab) {
      if (!err) {
        var node = cc.instantiate(prefab);
        cc.director.getScene().children[0].addChild(node);
      }
    });
  }
};
module.exports = GameUiTools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lVWlUb29scy5qcyJdLCJuYW1lcyI6WyJHYW1lVWlUb29scyIsInNldFNwcml0ZUZyYW1lIiwic3ByaXRlTmFtZSIsInNwcml0ZSIsImNjIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJub2RlIiwic2V0QnV0dG9uQ2xpY2tFdmVudHMiLCJjb21wb25lbnQiLCJtZW51IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImlzU2NhbGUiLCJhcnJheU1lbnUiLCJBcnJheSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImkiLCJjbGlja0V2ZW50SGFuZGxlciIsIkNvbXBvbmVudCIsIkV2ZW50SGFuZGxlciIsInRhcmdldCIsIm5hbWUiLCJidXR0b24iLCJhZGRDb21wb25lbnQiLCJCdXR0b24iLCJjbGlja0V2ZW50cyIsInB1c2giLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsIlNDQUxFIiwiZHVyYXRpb24iLCJ6b29tU2NhbGUiLCJzY2hlZHVsZU9uY2UiLCJjYWxsRnVuYyIsImRlbGF5IiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJsb2FkaW5nU2NlbmUiLCJzY2VuZU5hbWUiLCJpc1Nob3dMYXllciIsInByZWZhYiIsImluc3RhbnRpYXRlIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImNoaWxkcmVuIiwiYWRkQ2hpbGQiLCJwcmVsb2FkU2NlbmUiLCJsb2FkU2NlbmUiLCJsb2FkaW5nTGF5ZXIiLCJwYW5lbE5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFdBQVcsR0FBRztFQUNkQyxjQUFjLEVBQUUsU0FBQUEsZUFBVUMsVUFBVSxFQUFFQyxNQUFNLEVBQUU7SUFDMUNDLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUNKLFVBQVUsRUFBRUUsRUFBRSxDQUFDRyxXQUFX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QVMsQ0FBQztRQUNwQyxDQUFDLENBQUM7TUFDTixDQUFDLENBQUM7SUFDTixDQUFDLE1BQU07TUFDSHhDLEVBQUUsQ0FBQzRDLFFBQVEsQ0FBQ0ksWUFBWSxDQUFDUixTQUFTLEVBQUUsWUFBTTtRQUN0Q3hDLEVBQUUsQ0FBQzRDLFFBQVEsQ0FBQ0ssU0FBUyxDQUFDVCxTQUFTLENBQUM7TUFDcEMsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBQ0RVLFlBQVksV0FBQUEsYUFBQ0MsU0FBUyxFQUFFO0lBQUM7SUFDckJuRCxFQUFFLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDaUQsU0FBUyxFQUFFLFVBQUMvQyxHQUFHLEVBQUVzQyxNQUFNLEVBQUs7TUFDMUMsSUFBSSxDQUFDdEMsR0FBRyxFQUFFO1FBQ04sSUFBSUUsSUFBSSxHQUFHTixFQUFFLENBQUMyQyxXQUFXLENBQUNELE1BQU0sQ0FBQztRQUNqQzFDLEVBQUUsQ0FBQzRDLFFBQVEsQ0FBQ0MsUUFBUSxFQUFFLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDekMsSUFBSSxDQUFDO01BQ3JEO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDO0FBQ0Q4QyxNQUFNLENBQUNDLE9BQU8sR0FBR3pELFdBQVciLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgR2FtZVVpVG9vbHMgPSB7XHJcbiAgICBzZXRTcHJpdGVGcmFtZTogZnVuY3Rpb24gKHNwcml0ZU5hbWUsIHNwcml0ZSkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHNwcml0ZU5hbWUsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc3ByaXRlLm5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRCdXR0b25DbGlja0V2ZW50czogZnVuY3Rpb24gKGNvbXBvbmVudCwgbWVudSwgaGFuZGxlciwgY3VzdG9tRXZlbnREYXRhLCBpc1NjYWxlKSB7XHJcbiAgICAgICAgbGV0IGFycmF5TWVudSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIGlmIChtZW51Lmxlbmd0aCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYXJyYXlNZW51WzBdID0gbWVudTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXJyYXlNZW51ID0gbWVudTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheU1lbnUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gY29tcG9uZW50Lm5vZGU7IC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XHJcbiAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IGNvbXBvbmVudC5ub2RlLm5hbWU7Ly/ov5nkuKrmmK/ku6PnoIHmlofku7blkI1cclxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgICAgIGlmIChtZW51Lmxlbmd0aCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IGN1c3RvbUV2ZW50RGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGFycmF5TWVudVtpXS5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgICAgICAgICBpZiAoaXNTY2FsZSA9PSB1bmRlZmluZWQgfHwgaXNTY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRyYW5zaXRpb24gPSBjYy5CdXR0b24uVHJhbnNpdGlvbi5TQ0FMRTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5kdXJhdGlvbiA9IDAuMTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi56b29tU2NhbGUgPSAxLjI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2NoZWR1bGVPbmNlOiBmdW5jdGlvbiAobm9kZSwgY2FsbEZ1bmMsIGRlbGF5KSB7Ly/kuovku7bosIPluqZcclxuICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoZGVsYXkpLCBjYy5jYWxsRnVuYyhjYWxsRnVuYywgbm9kZSkpKTtcclxuICAgIH0sXHJcbiAgICBsb2FkaW5nU2NlbmUoc2NlbmVOYW1lLCBpc1Nob3dMYXllcikgey8v5Yqg6L295Zy65pmvXHJcbiAgICAgICAgaWYgKGlzU2hvd0xheWVyKSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwicGFuZWwvTG9hZGluZ0xheWVyXCIsIChlcnIsIHByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5jaGlsZHJlblswXS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShzY2VuZU5hbWUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmVOYW1lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoc2NlbmVOYW1lLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmVOYW1lKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxvYWRpbmdMYXllcihwYW5lbE5hbWUpIHsvL+WKoOi9veWbvuWxglxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHBhbmVsTmFtZSwgKGVyciwgcHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmNoaWxkcmVuWzBdLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZVVpVG9vbHM7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateTo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e65caAvVxpP+oVH6P4NyZ12', 'use_reversed_rotateTo');
// migration/use_reversed_rotateTo.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.2.1/v2.2.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.2.1/v2.2.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */

cc.RotateTo._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfcmV2ZXJzZWRfcm90YXRlVG8uanMiXSwibmFtZXMiOlsiY2MiLCJSb3RhdGVUbyIsIl9yZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLEdBQUcsSUFBSSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgdXNlZCBmb3IgcHJvamVjdHMgY29tcGF0aWJsZSB3aXRoIHYyLjEuMC92Mi4xLjEvdjIuMi4xL3YyLjIuMiB2ZXJzaW9ucy5cbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLkFjdGlvbiBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cbiAqXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wL3YyLjEuMS92Mi4yLjEvdjIuMi4yIOeJiOacrOeahOW3peeoi++8jFxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgQWN0aW9u77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxuICovXG5cbmNjLlJvdGF0ZVRvLl9yZXZlcnNlID0gdHJ1ZTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Home.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'Home');
// Script/Home.js

"use strict";

var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
var GameConfig = require("GameConfig");
cc.Class({
  "extends": cc.Component,
  properties: {
    label: {
      "default": null,
      type: cc.Label,
      displayName: "加载字"
    }
  },
  start: function start() {
    this.num = 0;
    this.schedule(this.updatelabel, 0.2);
  },
  onLoad: function onLoad() {
    GameConfig.buyGoldUpgrade[1] = Math.floor(GameTools.getItemByLocalStorage("buyGoldUpgrade1", 100));
    GameConfig.buyGoldUpgrade[2] = Math.floor(GameTools.getItemByLocalStorage("buyGoldUpgrade2", 1500));
    for (var i = 3; i <= 42; i++) {
      GameConfig.buyGoldUpgrade[i] = Math.floor(GameTools.getItemByLocalStorage("buyGoldUpgrade" + i, Math.floor(Math.pow(3 + Math.ceil(i / 10) * 0.1, i - 2) * 1500)));
    }
    GameConfig.buyCoinUpgrade[1] = Math.floor(GameTools.getItemByLocalStorage("buyCoinUpgrade1", 40));
    for (var _i = 2; _i <= 42; _i++) {
      if (_i < 10) {
        GameConfig.buyCoinUpgrade[_i] = Math.floor(GameTools.getItemByLocalStorage("buyCoinUpgrade" + _i, Math.floor(40 + 20 * (_i - 1))));
      } else {
        GameConfig.buyCoinUpgrade[_i] = Math.floor(GameTools.getItemByLocalStorage("buyCoinUpgrade" + _i, Math.floor(200 * Math.pow(1.5, _i))));
      }
    }
    this.setMessage();
    cc.director.preloadScene("helloworld", function () {
      cc.director.loadScene("helloworld");
    });
  },
  setMessage: function setMessage() {
    GameConfig.GameMoney = GameTools.getItemByLocalStorage("GameMoney", 1000);
    GameConfig.GameCoin = GameTools.getItemByLocalStorage("GameCoin", 0);
    GameConfig.GamePersonMaxLevel = GameTools.getItemByLocalStorage("GamePersonMaxLevel", 1);
    GameConfig.turnTableNum = GameTools.getItemByLocalStorage("turnNum", 0);
    console.log("平台:", cc.sys.platform);
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      //接入sdk登录

      // wx.request({
      //     url: '',
      //     success: function (res) {
      //         console.log(res);
      //         GameConfig.IS_GAME_SHARE = res.data.allow_share;
      //         GameConfig.shareData.title = res.data.share_title;
      //         GameConfig.shareData.url = res.data.share_img;
      //         console.log('获取资源成功',GameConfig.IS_GAME_SHARE);
      //     },
      //     fail: function () {
      //         console.log('获取资源失败',GameConfig.IS_GAME_SHARE);
      //     }
      // })
    } else if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {} else if (cc.sys.platform === cc.sys.QQ_PLAY) {
      BK.QQ.fetchOpenKey(function (errCode, cmd, data) {
        if (errCode == 0) {
          GameConfig.OPENID = data.openId;
          console.log('openId=' + data.openId);
        }
      });
    }
  },
  updatelabel: function updatelabel() {
    this.index++;
    if (this.index % 4 == 0) {
      this.label.string = "游戏正在加载..";
    } else if (this.index % 4 == 1) {
      this.label.string = "游戏正在加载...";
    } else if (this.index % 4 == 2) {
      this.label.string = "游戏正在加载。...";
    } else if (this.index % 4 == 3) {
      this.label.string = "游戏正在加载。....";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIb21lLmpzIl0sIm5hbWVzIjpbIkdhbWVUb29scyIsInJlcXVpcmUiLCJHYW1lVWlUb29scyIsIkdhbWVDb25maWciLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwidHlwZSIsIkxhYmVsIiwiZGlzcGxheU5hbWUiLCJzdGFydCIsIm51bSIsInNjaGVkdWxlIiwidXBkYXRlbGFiZWwiLCJvbkxvYWQiLCJidXlHb2xkVXBncmFkZSIsIk1hdGgiLCJmbG9vciIsImdldEl0ZW1CeUxvY2FsU3RvcmFnZSIsImkiLCJwb3ciLCJjZWlsIiwiYnV5Q29pblVwZ3JhZGUiLCJzZXRNZXNzYWdlIiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJsb2FkU2NlbmUiLCJHYW1lTW9uZXkiLCJHYW1lQ29pbiIsIkdhbWVQZXJzb25NYXhMZXZlbCIsInR1cm5UYWJsZU51bSIsImNvbnNvbGUiLCJsb2ciLCJzeXMiLCJwbGF0Zm9ybSIsIldFQ0hBVF9HQU1FIiwiQllURURBTkNFX0dBTUUiLCJRUV9QTEFZIiwiQksiLCJRUSIsImZldGNoT3BlbktleSIsImVyckNvZGUiLCJjbWQiLCJkYXRhIiwiT1BFTklEIiwib3BlbklkIiwiaW5kZXgiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN4QyxJQUFJRSxVQUFVLEdBQUdGLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFFdENHLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFFO01BQ0gsV0FBUyxJQUFJO01BQ2JDLElBQUksRUFBRUwsRUFBRSxDQUFDTSxLQUFLO01BQ2RDLFdBQVcsRUFBQztJ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eUMsTUFBTSxHQUFHLFVBQVU7SUFDbEMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDRCxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtNQUM1QixJQUFJLENBQUN4QyxLQUFLLENBQUN5QyxNQUFNLEdBQUcsV0FBVztJQUNuQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNELEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO01BQzVCLElBQUksQ0FBQ3hDLEtBQUssQ0FBQ3lDLE1BQU0sR0FBRyxZQUFZO0lBQ3BDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ0QsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7TUFDNUIsSUFBSSxDQUFDeEMsS0FBSyxDQUFDeUMsTUFBTSxHQUFHLGFBQWE7SUFDckM7RUFDSjtBQUVKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG52YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLliqDovb3lrZdcIixcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgfSxcbiAgICBzdGFydCgpe1xuICAgICAgICB0aGlzLm51bSA9IDA7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVsYWJlbCwwLjIpO1xuICAgIH0sXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVsxXSA9IE1hdGguZmxvb3IoR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcImJ1eUdvbGRVcGdyYWRlMVwiLCAxMDApKTtcbiAgICAgICAgR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVsyXSA9IE1hdGguZmxvb3IoR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcImJ1eUdvbGRVcGdyYWRlMlwiLCAxNTAwKSk7XG4gICAgICAgIGZvcihsZXQgaT0zO2k8PTQyO2krKyl7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW2ldPU1hdGguZmxvb3IoR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcImJ1eUdvbGRVcGdyYWRlXCIraSxNYXRoLmZsb29yKE1hdGgucG93KCgzK01hdGguY2VpbChpLzEwKSowLjEpLGktMikqMTUwMCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIEdhbWVDb25maWcuYnV5Q29pblVwZ3JhZGVbMV0gPSBNYXRoLmZsb29yKEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJidXlDb2luVXBncmFkZTFcIiwgNDApKTtcbiAgICAgICAgZm9yKGxldCBpPTI7aTw9NDI7aSsrKXtcbiAgICAgICAgICAgIGlmKGk8MTApe1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuYnV5Q29pblVwZ3JhZGVbaV09TWF0aC5mbG9vcihHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiYnV5Q29pblVwZ3JhZGVcIitpLE1hdGguZmxvb3IoNDArMjAqKGktMSkpKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLmJ1eUNvaW5VcGdyYWRlW2ldPU1hdGguZmxvb3IoR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcImJ1eUNvaW5VcGdyYWRlXCIraSxNYXRoLmZsb29yKDIwMCpNYXRoLnBvdygxLjUsaSkpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldE1lc3NhZ2UoKTtcbiAgICAgICAgXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZShcImhlbGxvd29ybGRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaGVsbG93b3JsZFwiKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXRNZXNzYWdlKCl7XG4gICAgICAgIEdhbWVDb25maWcuR2FtZU1vbmV5ID0gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVNb25leVwiLDEwMDApO1xuICAgICAgICBHYW1lQ29uZmlnLkdhbWVDb2luID0gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVDb2luXCIsMCk7XG4gICAgICAgIEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsID0gR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVQZXJzb25NYXhMZXZlbFwiLCAxKTtcbiAgICAgICAgR2FtZUNvbmZpZy50dXJuVGFibGVOdW0gPSBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwidHVybk51bVwiLDApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW5s+WPsDpcIixjYy5zeXMucGxhdGZvcm0pXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xuICAgICAgICAgICAgLy/mjqXlhaVzZGvnmbvlvZVcblxuICAgICAgICAgICAgLy8gd3gucmVxdWVzdCh7XG4gICAgICAgICAgICAvLyAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIC8vICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAvLyAgICAgICAgIEdhbWVDb25maWcuSVNfR0FNRV9TSEFSRSA9IHJlcy5kYXRhLmFsbG93X3NoYXJlO1xuICAgICAgICAgICAgLy8gICAgICAgICBHYW1lQ29uZmlnLnNoYXJlRGF0YS50aXRsZSA9IHJlcy5kYXRhLnNoYXJlX3RpdGxlO1xuICAgICAgICAgICAgLy8gICAgICAgICBHYW1lQ29uZmlnLnNoYXJlRGF0YS51cmwgPSByZXMuZGF0YS5zaGFyZV9pbWc7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5botYTmupDmiJDlip8nLEdhbWVDb25maWcuSVNfR0FNRV9TSEFSRSk7XG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5botYTmupDlpLHotKUnLEdhbWVDb25maWcuSVNfR0FNRV9TSEFSRSk7XG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgfWVsc2UgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKXtcblxuICAgICAgICB9ZWxzZSBpZihjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5RUV9QTEFZKXtcbiAgICAgICAgICAgIEJLLlFRLmZldGNoT3BlbktleShmdW5jdGlvbiAoZXJyQ29kZSwgY21kLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyckNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLk9QRU5JRCA9IGRhdGEub3BlbklkO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb3BlbklkPScrZGF0YS5vcGVuSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuXG4gICAgdXBkYXRlbGFiZWwoKXtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICBpZiAodGhpcy5pbmRleCAlIDQgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIua4uOaIj+ato+WcqOWKoOi9vS4uXCI7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCAlIDQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIua4uOaIj+ato+WcqOWKoOi9vS4uLlwiO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZXggJSA0ID09IDIpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCLmuLjmiI/mraPlnKjliqDovb3jgIIuLi5cIjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluZGV4ICUgNCA9PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwi5ri45oiP5q2j5Zyo5Yqg6L2944CCLi4uLlwiO1xuICAgICAgICB9XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/sdk/EyouClientKs.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2f7cpKa/BBhKJUyHUEiGj7', 'EyouClientKs');
// Script/sdk/EyouClientKs.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var BASE_URL = 'https://games.hndibei.com';
var EyouClientKs = /*#__PURE__*/function () {
  function EyouClientKs() {
    var F = null,
      I = 0x9,
      n = null,
      q = null,
      f = '-1',
      s = '-1',
      o = '4',
      i = null,
      X = null,
      u = null,
      w = null,
      t = null,
      C = null;
    var j = new Map();
    var P = null;
    var K = function K(S, J) {
        S['gameId'] = F, (S['platformId'] = I, S['sys'] = o), B(S)['then'](function (O) {
          if (O['payType'] == 0x4) tt['previewImage']({
            'urls': [O['payUrl']],
            'showmenu': !![]
          });else {
            if (O['payType'] == 0x8) O['balance'] > 0x0 ? r('充值提示', '账户余额:' + O['balance'] + '元,\x20还需充值:' + O['needPay'] + '元', function () {
              return l(O, J);
            }) : l(O, J);else {
              if (O['payType'] == 0x9) O['balance'] > 0x0 ? r('充值提示', '账户余额:' + O['balance'] + '元,\x20还需充值:' + O['needPay'] + '元', function () {
                return L(O, J);
              }) : L(O, J);else throw new Error('非法支付类型');
            }
          }
        });
      },
      l = function l(S, J) {
        if (S['needPay'] == 0x0) {
          x(S, J);
          return;
        }
        tt['requestGamePayment']({
          'mode': 'game',
          'env': 0x0,
          'currencyType': 'CNY',
          'platform': 'android',
          'buyQuantity': S['needPay'] * S['rate'],
          'zoneId': S['zoneId'],
          'customId': S['orderId'],
          'extraInfo': S['orderId'],
          'success': function success(O) {
            x(S, J);
          }
        });
      },
      L = function L(S, J) {
        if (S['needPay'] == 0x0) {
          x(S, J);
          return;
        }
        tt['openAwemeCustomerService']({
          'buyQuantity': S['needPay'] * S['rate'],
          'customId': S['orderId'],
          'currencyType': 'CNY',
          'zoneId': S['zoneId'],
          'extraInfo': S['orderId'],
          'success': function success(O) {
            J({
              'code': CodeStatus['SUCCESS'],
              'message': '操作成功',
              'data': null
            });
          },
          'fail': function fail(O) {
            J({
              'code': CodeStatus['FAIL'],
              'message': '操作失败',
              'data': null
            });
          }
        });
      },
      h = BASE_URL + '/market-multi-game-server/kuaiShouClient/deduct',
      x = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(S, J) {
          var O, d;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                O = {
                  'orderId': S['orderId'],
                  'gameId': F,
                  'platformId': I,
                  'userId': S['userId']
                };
                _context.next = 4;
                return p(h, O);
              case 4:
                d = _context.sent;
                d['code'] === CodeStatus['SUCCESS'] && J(d);
                _context.next = 11;
                break;
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console['error']('[扣款失败]异常:>', _context.t0);
              case 11:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 8]]);
        }));
        return function x(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }(),
      e = BASE_URL + '/market-multi-game-server/kuaiShouClient/pullPay',
      B = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(S) {
          var J, O, d, k, g;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                J = 0x3;
                O = 0x0, d = ![], k = ![];
              case 2:
                if (!(O < J && !d)) {
                  _context2.next = 20;
                  break;
                }
                _context2.prev = 3;
                _context2.next = 6;
                return p(e, S);
              case 6:
                g = _context2.sent;
                if (!(g['code'] === CodeStatus['SUCCESS'])) {
                  _context2.next = 11;
                  break;
                }
                return _context2.abrupt("return", g['data']);
              case 11:
                !k && (r('支付拉起失败', g['message']), k = !![]);
              case 12:
                _context2.next = 17;
                break;
              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](3);
                !k && (r('支付拉起失败', '网络超时'), k = !![]);
              case 17:
                O++;
                _context2.next = 2;
                break;
              case 20:
                throw new Error('支付拉起失败');
              case 21:
              case "end":
                return _context2.stop();
            }
          }, _callee2, null, [[3, 14]]);
        }));
        return function B(_x3) {
          return _ref2.apply(this, arguments);
        };
      }(),
      Q = function Q() {
        return new Promise(function (S, J) {
          ks['login']({
            'force': !![],
            'success': function success(_ref3) {
              var O = _ref3.code;
              O ? (console['log']('code:>', O), S(O)) : J(new Error('获取code失败'));
            },
            'fail': J
          });
        });
      },
      c = function c(S) {
        F = S;
        var J = ks['getSystemInfoSync']();
        o = J['platform'] === 'android' ? '4' : J['platform'] === 'ios' ? '5' : '6';
        var O = ks['getLaunchOptionsSync']()['query'];
        O && (n = O['channel'], q = O['sub_channel']);
        var d = {
          '10913': ['unit_id', 'callback']
        };
        if (d['hasOwnProperty'](n)) {
          var _d$n = d[n],
            k = _d$n[0],
            g = _d$n[1];
          f = O[k], s = O[g];
        } else n = '10906', q = '' + F + I + n + o + '0';
      },
      E = BASE_URL + '/market-multi-game-server/kuaiShouClient/adAction',
      m = function m(S, J, O) {
        var d = {
          'gameId': F,
          'platformId': I,
          'channelId': n,
          'subChannelId': q,
          'aid': f,
          'traceId': s,
          'sys': o,
          'userId': X,
          'adType': S,
          'adUnitId': J,
          'adActionType': O
        };
        p(E, d)['catch'](function (k) {
          console['log']('发送广告行为失败:>', k);
        });
      },
      M = function M(S) {
        var J = j['get'](S);
        if (!J) throw new Error('未创建编号为' + S + '的客服按钮');
        return J;
      },
      T = function T() {
        if (!P) throw new Error('未创建录屏管理器');
      },
      V = function V(S, J) {
        J(S);
      },
      r = function r(S, J, O, d) {
        tt['showModal']({
          'title': S,
          'content': J,
          'success': function success(k) {
            if (k['confirm'] && O) O();else k['cancel'] && d && d();
          }
        });
      },
      p = function p(S, J) {
        return new Promise(function (O, d) {
          ks['request']({
            'url': S,
            'method': 'POST',
            'header': {
              'Content-Type': 'application/json;charset=UTF-8'
            },
            'data': JSON['stringify'](J),
            'fail': d,
            'success': function success(k) {
              O(k['data']);
            },
            'complete': function complete(k) {
              console['log']('---------------------------------请求\x20BEGIN--------------------------------'), console['log']('Url:>', S), console['log']('请求参数:>', J);
              var g = k && (k['data'] || k['errMsg']) ? k['data'] || k['errMsg'] : 'No\x20response\x20data';
              console['log']('响应:>', g), console['log']('---------------------------------请求\x20END--------------------------------');
            }
          });
        });
      },
      H = BASE_URL + '/market-multi-game-server/kuaiShouClient/initGame';
    this['init'] = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(S, J) {
        var O, d;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              ks['onShareAppMessage'](function (k) {
                return {
                  'templateId': w,
                  'query': '',
                  'success': function success() {
                    console['log']('分享成功');
                  },
                  'fail': function fail(g) {
                    console['log']('分享失败', g);
                  }
                };
              });
              _context3.next = 4;
              return Q();
            case 4:
              i = _context3.sent;
              c(S);
              O = {
                'code': i,
                'gameId': F,
                'platformId': I,
                'channelId': n,
                'subChannelId': q,
                'aid': f,
                'traceId': s,
                'sys': o
              };
              _context3.next = 9;
              return p(H, O);
            case 9:
              d = _context3.sent;
              d['code'] === CodeStatus['SUCCESS'] && (X = d['data']['userId'], u = d['data']['unionId'], w = d['data']['shareTemplateId'], d['data'] = null), J(i);
              _context3.next = 16;
              break;
            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              console['error']('[初始化游戏]异常:>', _context3.t0);
            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 13]]);
      }));
      return function (_x4, _x5) {
        return _ref4.apply(this, arguments);
      };
    }(), this['login'] = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(S) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              S({
                'code': CodeStatus['SUCCESS'],
                'message': '操作成功',
                'data': {
                  'code': i
                }
              });
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x6) {
        return _ref5.apply(this, arguments);
      };
    }(), this['pay'] = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(S, J) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              tt['checkSession']({
                'success': function success(O) {
                  try {
                    K(S, J);
                  } catch (d) {
                    console['error']('[支付拉起]异常:>', d);
                  }
                },
                'fail': function fail(O) {
                  tt['login']({
                    'success': function success(d) {
                      try {
                        K(S, J);
                      } catch (k) {
                        console['error']('[支付拉起]异常:>', k);
                      }
                    }
                  });
                }
              });
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x7, _x8) {
        return _ref6.apply(this, arguments);
      };
    }();
    var G = BASE_URL + '/market-multi-game-server/kuaiShouClient/uploadRoleInfo';
    this['uploadRoleInfo'] = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(S, J) {
        var O;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              S['gameId'] = F, S['platformId'] = I;
              _context6.next = 4;
              return p(G, S);
            case 4:
              O = _context6.sent;
              J(O);
              _context6.next = 11;
              break;
            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](0);
              console['error']('上报角色数据异常:>', _context6.t0);
            case 11:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 8]]);
      }));
      return function (_x9, _x10) {
        return _ref7.apply(this, arguments);
      };
    }();
    var b = BASE_URL + '/market-multi-game-server/kuaiShouClient/antidirt';
    this['antidirt'] = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(S, J) {
        var O, d;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              O = {
                'gameId': F,
                'platformId': I,
                'contents': S
              };
              _context7.next = 4;
              return p(b, O);
            case 4:
              d = _context7.sent;
              J(d);
              _context7.next = 11;
              break;
            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](0);
              console['error']('[内容安全检测]异常:>', _context7.t0);
            case 11:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 8]]);
      }));
      return function (_x11, _x12) {
        return _ref8.apply(this, arguments);
      };
    }(), this['createRewardedVideoAd'] = function (S, J) {
      var O = {
        'adUnitId': S['adUnitId']
      };
      S['multiton'] && (O['multiton'] = S['multiton'], O['multitonRewardMsg'] = S['multitonRewardMsg'], O['multitonRewardTimes'] = S['multitonRewardTimes']), S['progressTip'] && (O['progressTip'] = S['progressTip']), C = ks['createRewardedVideoAd'](O), C['onClose'](function (d) {
        d && d['isEnded'] && (m(AdType['REWARDED_VIDEO_AD'], t, AdActionType['FINISHED']), console['log']('正常播放结束，可以下发游戏奖励')), S['onClose'] && S['onClose'](d), C['destroy']();
      }), S['onError'] && C['onError'](function (d) {
        S['onError'] && S['onError'](d), C['destroy']();
      }), t = S['adUnitId'], J({
        'code': CodeStatus['SUCCESS'],
        'message': '操作成功',
        'data': null
      });
    }, this['showRewardedVideoAd'] = function () {
      C && (C['load'](), C['show']()['then'](function () {
        return m(AdType['REWARDED_VIDEO_AD'], t, AdActionType['SHOW']);
      })['catch'](function (S) {
        C['load']()['then'](function () {
          C['show']()['then'](function () {
            return m(AdType['REWARDED_VIDEO_AD'], t, AdActionType['SHOW']);
          });
        })['catch'](function (J) {
          return console['log']('激励视频\x20广告显示失败');
        });
      }));
    }, this['createContactButton'] = function (S, J) {
      var O = tt['createContactButton'](S);
      j['set'](j['size'], O), J({
        'code': CodeStatus['SUCCESS'],
        'message': '操作成功',
        'data': {
          'contactBtnNo': j['size'] - 0x1
        }
      });
    }, this['contactBtnDestory'] = function (S) {
      var J = M(S);
      J['destory'](), j['set'](S, null);
    }, this['contactBtnShow'] = function (S) {
      var J = M(S);
      J['show']();
    }, this['contactBtnHide'] = function (S) {
      var J = M(S);
      J['hide']();
    }, this['createGameRecorder'] = function (S, J) {
      P = ks['getGameRecorder'](), S['onStart'] && P['on']('start', S['onStart']), S['onResume'] && P['on']('resume', S['onResume']), S['onPause'] && P['on']('pause', S['onPause']), S['onStop'] && P['on']('stop', S['onStop']), S['onError'] && P['on']('error', S['onError']), S['onAbort'] && P['on']('abort', S['onAbort']), J({
        'code': CodeStatus['SUCCESS'],
        'message': '操作成功',
        'data': null
      });
    }, this['gameRecorderStart'] = function (S) {
      T(), P['start'](S);
    }, this['gameRecorderPause'] = function () {
      T(), P['pause']();
    }, this['gameRecorderResume'] = function () {
      T(), P['resume']();
    }, this['gameRecorderStop'] = function () {
      T(), console['log']('触发停止录屏'), P['stop']();
    }, this['publishVideo'] = function (S) {
      T(), P['publishVideo']({
        'video': S['videoID'],
        'callback': function callback(J) {
          if (J != null && J != undefined) {
            console['log']('分享录屏失败:\x20', J);
            return;
          }
          console['log']('分享录屏成功');
        }
      });
    }, this['shareAppMessage'] = function (S, J) {
      ks['shareAppMessage'](_extends({}, S, {
        'templateId': w,
        'success': function success() {
          J({
            'code': CodeStatus['SUCCESS'],
            'message': '操作成功',
            'data': null
          });
        },
        'fail': function fail(O) {
          console['log']('[分享失败]:>', O), J({
            'code': CodeStatus['FAIL'],
            'message': '操作失败',
            'data': null
          });
        }
      }));
    }, this['addShortcut'] = function (S) {
      ks['addShortcut']({
        'complete': S
      });
    }, this['addCommonUse'] = function (S) {
      ks['addCommonUse']({
        'complete': S
      });
    }, this['checkSidebar'] = function (S) {
      tt['checkScene']({
        'scene': 'sidebar',
        'success': function success(J) {
          J && J['isExist'] && S({
            'code': CodeStatus['SUCCESS'],
            'message': '操作成功',
            'data': null
          });
        }
      });
    }, this['navigateToSidebar'] = function (S) {
      tt['navigateToScene']({
        'scene': 'sidebar',
        'success': function success(J) {
          S({
            'code': CodeStatus['SUCCESS'],
            'message': '操作成功',
            'data': null
          });
        },
        'fail': function fail(J) {
          console['log']('[跳转侧边栏失败]:>', J), S({
            'code': CodeStatus['FAIL'],
            'message': '操作失败',
            'data': null
          });
        }
      });
    }, this['onFromSidebar'] = function (S) {
      tt['onShow'](function (_ref9) {
        var J = _ref9.scene,
          O = _ref9.launch_from,
          d = _ref9.location;
        J == '021036' && O == 'homepage' && d == 'sidebar_card' && S({
          'code': CodeStatus['SUCCESS'],
          'message': '操作成功',
          'data': null
        });
      });
    }, this['onKeyboardComplete'] = function (S) {
      var J = function J(O) {
        S({
          'code': CodeStatus['SUCCESS'],
          'message': '操作成功',
          'data': O
        }), tt['offKeyboardComplete'](J);
      };
      tt['onKeyboardComplete'](J);
    }, this['requestSubscribeMessage'] = function (S, J) {
      tt['requestSubscribeMessage']({
        'tmplIds': S,
        'success': function success(O) {
          var d = Object['keys'](O)['filter'](function (k) {
            return O[k] === 'accept';
          });
          J({
            'code': CodeStatus['SUCCESS'],
            'message': '操作成功',
            'data': d
          });
        },
        'fail': function fail(O) {
          J({
            'code': CodeStatus['FAILED'],
            'message': O['errMsg'],
            'data': null
          });
        }
      });
    };
  }
  EyouClientKs['getIns'] = function getIns() {
    return !this['ins'] && (this['ins'] = new EyouClientKs()), this['ins'];
  };
  return EyouClientKs;
}();
exports["default"] = EyouClientKs;
var CodeStatus = function CodeStatus() {};
CodeStatus['SUCCESS'] = 0x0;
CodeStatus['FAIL'] = -0x1;
var AdType = function AdType() {};
AdType['REWARDED_VIDEO_AD'] = 0x1;
AdType['BANNER_AD'] = 0x2;
var AdActionType = function AdActionType() {};
AdActionType['SHOW'] = 0x1;
AdActionType['FINISHED'] = 0x2;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzZGtcXEV5b3VDbGllbnRLcy5qcyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsIkJBU0VfVVJMIiwiRXlvdUNsaWVudEtzIiwiRiIsIkkiLCJuIiwicSIsImYiLCJzIiwibyIsIlgiLCJ1IiwidyIsInQiLCJDIiwiaiIsIk1hcCIsIlAiLCJLIiwiUyIsIkoiLCJCIiwiTyIsInR0IiwiciIsImwiLCJMIiwieCIsInN1Y2Nlc3MiLCJDb2RlU3RhdHVzIiwiZmFpbCIsImgiLCJfcmVmIiwiX2NhbGxlZSIsImQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicCIsInQwIiwiY29uc29sZSIsIl94IiwiX3gyIiwiZSIsIl9yZWYyIiwiX2NhbGxlZTIiLCJrIiwiZyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl94MyIsIlEiLCJrcyIsIl9yZWYzIiwiY29kZSIsImMiLCJfZCRuIiwiRSIsIm0iLCJNIiwiVCIsIlYiLCJKU09OIiwiSCIsIl9yZWY0IiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfeDQiLCJfeDUiLCJfcmVmNSIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX3g2IiwiX3JlZjYiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl94NyIsIl94OCIsIkciLCJfcmVmNyIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiX3g5IiwiX3gxMCIsImIiLCJfcmVmOCIsIl9jYWxsZWU3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwiX3gxMSIsIl94MTIiLCJBZFR5cGUiLCJBZEFjdGlvblR5cGUiLCJjYWxsYmFjayIsIl9leHRlbmRzIiwiX3JlZjkiLCJzY2VuZSIsImxhdW5jaF9mcm9tIiwibG9jYXRpb24iLCJnZXRJbnMiLCJtb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBLHFKQUFBQSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxPQUFBLFNBQUFBLE9BQUEsT0FBQUMsRUFBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsTUFBQSxHQUFBSCxFQUFBLENBQUFJLGNBQUEsRUFBQUMsY0FBQSxHQUFBSixNQUFBLENBQUFJLGNBQUEs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QUksQ0FBQyxDQUFDLE9BQU8sRUFBQ0UsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUNBLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBRUYsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBQ0UsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUNDLENBQUMsQ0FBQztRQUFDLE1BQU0sRUFBQ1MsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUFDLFNBQVMsRUFBQyxNQUFNO1FBQUMsTUFBTSxFQUFDO01BQUksQ0FBQyxDQUFDO0lBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFDLFVBQUFWLENBQUMsRUFBRTtNQUFDd0MsQ0FBQyxFQUFFLEVBQUMxQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNFLENBQUMsQ0FBQztJQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBQyxZQUFJO01BQUN3QyxDQUFDLEVBQUUsRUFBQzFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBQyxZQUFJO01BQUMwQyxDQUFDLEVBQUUsRUFBQzFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBQyxZQUFJO01BQUMwQyxDQUFDLEVBQUUsRUFBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBQ3RCLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUMsVUFBQUUsQ0FBQyxFQUFFO01BQUN3QyxDQUFDLEVBQUUsRUFBQzFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUFDLE9BQU8sRUFBQ0UsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUFDLFVBQVUsRUFBQyxTQUFBNkUsU0FBQTVFLENBQUMsRUFBRTtVQUFDLElBQUdBLENBQUMsSUFBRSxJQUFJLElB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TSxFQUFDUyxVQUFVLENBQUMsU0FBUyxDQUFDO1lBQUMsU0FBUyxFQUFDLE1BQU07WUFBQyxNQUFNLEVBQUNLO1VBQUMsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUFDLE1BQU0sRUFBQyxTQUFBSixLQUFBUixDQUFDLEVBQUU7VUFBQ0YsQ0FBQyxDQUFDO1lBQUMsTUFBTSxFQUFDUyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQUMsU0FBUyxFQUFDUCxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQUMsTUFBTSxFQUFDO1VBQUksQ0FBQyxDQUFDO1FBQUM7TUFBQyxDQUFDLENBQUM7SUFBQyxDQUFDO0VBQUM7RUFBQ3BCLFlBQUEsQ0FBTyxRQUFRLElBQWYsU0FBQW9HLE9BQUEsRUFBa0I7SUFBQyxPQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBQyxJQUFJcEcsWUFBWSxFQUFFLENBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0VBQUMsQ0FBQztFQUFBLE9BQUFBLFlBQUE7QUFBQTtBQUFBcEosT0FBQSxjQUFBb0osWUFBQTtBQUFBLElBQU8yQixVQUFVLFlBQUFBLFdBQUE7QUFBVkEsVUFBVSxDQUFTLFNBQVMsSUFBRSxHQUFHO0FBQWpDQSxVQUFVLENBQWdDLE1BQU0sSUFBRSxDQUFDLEdBQUc7QUFBQSxJQUFRaUUsTUFBTSxZQUFBQSxPQUFBO0FBQU5BLE1BQU0sQ0FBUyxtQkFBbUIsSUFBRSxHQUFHO0FBQXZDQSxNQUFNLENBQTBDLFdBQVcsSUFBRSxHQUFHO0FBQUEsSUFBUUMsWUFBWSxZQUFBQSxhQUFBO0FBQVpBLFlBQVksQ0FBUyxNQUFNLElBQUUsR0FBRztBQUFoQ0EsWUFBWSxDQUE2QixVQUFVLElBQUUsR0FBRztBQUFBUSxNQUFBLENBQUF6UCxPQUFBLEdBQUFBLE9BQUEiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJBU0VfVVJMPSdodHRwczovL2dhbWVzLmhuZGliZWkuY29tJztleHBvcnQgZGVmYXVsdCBjbGFzcyBFeW91Q2xpZW50S3N7Y29uc3RydWN0b3IoKXtsZXQgRj1udWxsLEk9MHg5LG49bnVsbCxxPW51bGwsZj0nLTEnLHM9Jy0xJyxvPSc0JyxpPW51bGwsWD1udWxsLHU9bnVsbCx3PW51bGwsdD1udWxsLEM9bnVsbDtjb25zdCBqPW5ldyBNYXAoKTtsZXQgUD1udWxsO2NvbnN0IEs9KFMsSik9PntTWydnYW1lSWQnXT1GLChTWydwbGF0Zm9ybUlkJ109SSxTWydzeXMnXT1vKSxCKFMpWyd0aGVuJ10oTz0+e2lmKE9bJ3BheVR5cGUnXT09MHg0KXR0WydwcmV2aWV3SW1hZ2UnXSh7J3VybHMnOltPWydwYXlVcmwnXV0sJ3Nob3dtZW51JzohIVtdfSk7ZWxzZXtpZihPWydwYXlUeXBlJ109PTB4OClPWydiYWxhbmNlJ10+MHgwP3IoJ+WFheWAvOaPkOekuicsJ+i0puaIt+S9meminTonK09bJ2JhbGFuY2UnXSsn5YWDLFxceDIw6L+Y6ZyA5YWF5YC8OicrT1snbmVlZFBheSddKyflhYMnLCgpPT5sKE8sSikpOmwoTyxKKTtlbHNle2lmKE9bJ3BheVR5cGUnXT09MHg5KU9bJ2JhbGFuY2UnXT4weDA/cign5YWF5YC85o+Q56S6Jywn6LSm5oi35L2Z6aKdOicrT1snYmFsYW5jZSddKyflhYMsXFx4MjDov5jpnIDlhYXlgLw6JytPWyduZWVkUGF5J10rJ+WFgycsKCk9PkwoTyxKKSk6TChPLEopO2Vsc2UgdGhyb3cgbmV3IEVycm9yKCfpnZ7ms5XmlK/ku5jnsbvlnosnKTt9fX0pO30sbD0oUyxKKT0+e2lmKFNbJ25lZWRQYXknXT09MHgwKXt4KFMsSik7cmV0dXJuO310dFsncmVxdWVzdEdhbWVQYXltZW50J10oeydtb2RlJzonZ2FtZScsJ2Vudic6MHgwLCdjdXJyZW5jeVR5cGUnOidDTlknLCdwbGF0Zm9ybSc6J2FuZHJvaWQnLCdidXlRdWFudGl0eSc6U1snbmVlZFBheSddKlNbJ3JhdGUnXSwnem9uZUlkJzpTWyd6b25lSWQnXSwnY3VzdG9tSWQnOlNbJ29yZGVySWQnXSwnZXh0cmFJbmZvJzpTWydvcmRlcklkJ10sJ3N1Y2Nlc3MnOk89Pnt4KFMsSik7fX0pO30sTD0oUyxKKT0+e2lmKFNbJ25lZWRQYXknXT09MHgwKXt4KFMsSik7cmV0dXJuO310dFsnb3BlbkF3ZW1lQ3VzdG9tZXJTZXJ2aWNlJ10oeydidXlRdWFudGl0eSc6U1snbmVlZFBheSddKlNbJ3JhdGUnXSwnY3VzdG9tSWQnOlNbJ29yZGVySWQnXSwnY3VycmVuY3lUeXBlJzonQ05ZJywnem9uZUlkJzpTWyd6b25lSWQnXSwnZXh0cmFJbmZvJzpTWydvcmRlcklkJ10sJ3N1Y2Nlc3MnOk89PntKKHsnY29kZSc6Q29kZVN0YXR1c1snU1VDQ0VTUyddLCdtZXNzYWdlJzon5pON5L2c5oiQ5YqfJywnZGF0YSc6bnVsbH0pO30sJ2ZhaWwnOk89PntKKHsnY29kZSc6Q29kZVN0YXR1c1snRkFJTCddLCdtZXNzYWdlJzon5pON5L2c5aSx6LSlJywnZGF0YSc6bnVsbH0pO319KTt9LGg9QkFTRV9VUkwrJy9tYXJrZXQtbXVsdGktZ2FtZS1zZXJ2ZXIva3VhaVNob3VDbGllbnQvZGVkdWN0Jyx4PWFzeW5jKFMsSik9Pnt0cnl7Y29uc3QgTz17J29yZGVySWQnOlNbJ29yZGVySWQnXSwnZ2FtZUlkJzpGLCdwbGF0Zm9ybUlkJzpJLCd1c2VySWQnOlNbJ3VzZXJJZCddfTtsZXQgZD1hd2FpdCBwKGgsTyk7ZFsnY29kZSddPT09Q29kZVN0YXR1c1snU1VDQ0VTUyddJiZKKGQpO31jYXRjaChrKXtjb25zb2xlWydlcnJvciddKCdb5omj5qy+5aSx6LSlXeW8guW4uDo+JyxrKTt9fSxlPUJBU0VfVVJMKycvbWFya2V0LW11bHRpLWdhbWUtc2VydmVyL2t1YWlTaG91Q2xpZW50L3B1bGxQYXknLEI9YXN5bmMgUz0+e2NvbnN0IEo9MHgzO2xldCBPPTB4MCxkPSFbXSxrPSFbXTt3aGlsZShPPEomJiFkKXt0cnl7Y29uc3QgZz1hd2FpdCBwKGUsUyk7aWYoZ1snY29kZSddPT09Q29kZVN0YXR1c1snU1VDQ0VTUyddKXJldHVybiBnWydkYXRhJ107ZWxzZSFrJiYocign5pSv5LuY5ouJ6LW35aSx6LSlJyxnWydtZXNzYWdlJ10pLGs9ISFbXSk7fWNhdGNoKFcpeyFrJiYocign5pSv5LuY5ouJ6LW35aSx6LSlJywn572R57uc6LaF5pe2Jyksaz0hIVtdKTt9TysrO310aHJvdyBuZXcgRXJyb3IoJ+aUr+S7mOaLiei1t+Wksei0pScpO30sUT0oKT0+e3JldHVybiBuZXcgUHJvbWlzZSgoUyxKKT0+e2tzWydsb2dpbiddKHsnZm9yY2UnOiEhW10sJ3N1Y2Nlc3MnOih7Y29kZTpPfSk9PntPPyhjb25zb2xlWydsb2cnXSgnY29kZTo+JyxPKSxTKE8pKTpKKG5ldyBFcnJvcign6I635Y+WY29kZeWksei0pScpKTt9LCdmYWlsJzpKfSk7fSk7fSxjPVM9PntGPVM7Y29uc3QgSj1rc1snZ2V0U3lzdGVtSW5mb1N5bmMnXSgpO289SlsncGxhdGZvcm0nXT09PSdhbmRyb2lkJz8nNCc6SlsncGxhdGZvcm0nXT09PSdpb3MnPyc1JzonNic7Y29uc3QgTz1rc1snZ2V0TGF1bmNoT3B0aW9uc1N5bmMnXSgpWydxdWVyeSddO08mJihuPU9bJ2NoYW5uZWwnXSxxPU9bJ3N1Yl9jaGFubmVsJ10pO2NvbnN0IGQ9eycxMDkxMyc6Wyd1bml0X2lkJywnY2FsbGJhY2snXX07aWYoZFsnaGFzT3duUHJvcGVydHknXShuKSl7Y29uc3QgW2ssZ109ZFtuXTtmPU9ba10scz1PW2ddO31lbHNlIG49JzEwOTA2JyxxPScnK0YrSStuK28rJzAnO30sRT1CQVNFX1VSTCsnL21hcmtldC1tdWx0aS1nYW1lLXNlcnZlci9rdWFpU2hvdUNsaWVudC9hZEFjdGlvbicsbT0oUyxKLE8pPT57bGV0IGQ9eydnYW1lSWQnOkYsJ3BsYXRmb3JtSWQnOkksJ2NoYW5uZWxJZCc6biwnc3ViQ2hhbm5lbElkJzpxLCdhaWQnOmYsJ3RyYWNlSWQnOnMsJ3N5cyc6bywndXNlcklkJzpYLCdhZFR5cGUnOlMsJ2FkVW5pdElkJzpKLCdhZEFjdGlvblR5cGUnOk99O3AoRSxkKVsnY2F0Y2gnXShrPT57Y29uc29sZVsnbG9nJ10oJ+WPkemAgeW5v+WRiuihjOS4uuWksei0pTo+JyxrKTt9KTt9LE09Uz0+e2xldCBKPWpbJ2dldCddKFMpO2lmKCFKKXRocm93IG5ldyBFcnJvcign5pyq5Yib5bu657yW5Y+35Li6JytTKyfnmoTlrqLmnI3mjInpkq4nKTtyZXR1cm4gSjt9LFQ9KCk9PntpZighUCl0aHJvdyBuZXcgRXJyb3IoJ+acquWIm+W7uuW9leWxj+euoeeQhuWZqCcpO30sVj0oUyxKKT0+e0ooUyk7fSxyPShTLEosTyxkKT0+e3R0WydzaG93TW9kYWwnXSh7J3RpdGxlJzpTLCdjb250ZW50JzpKLCdzdWNjZXNzJzpmdW5jdGlvbihrKXtpZihrWydjb25maXJtJ10mJk8pTygpO2Vsc2Uga1snY2FuY2VsJ10mJmQmJmQoKTt9fSk7fSxwPShTLEopPT57cmV0dXJuIG5ldyBQcm9taXNlKChPLGQpPT57a3NbJ3JlcXVlc3QnXSh7J3VybCc6UywnbWV0aG9kJzonUE9TVCcsJ2hlYWRlcic6eydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLTgnfSwnZGF0YSc6SlNPTlsnc3RyaW5naWZ5J10oSiksJ2ZhaWwnOmQsJ3N1Y2Nlc3MnOmZ1bmN0aW9uKGspe08oa1snZGF0YSddKTt9LCdjb21wbGV0ZSc6ZnVuY3Rpb24oayl7Y29uc29sZVsnbG9nJ10oJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeivt+axglxceDIwQkVHSU4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpLGNvbnNvbGVbJ2xvZyddKCdVcmw6PicsUyksY29uc29sZVsnbG9nJ10oJ+ivt+axguWPguaVsDo+JyxKKTtjb25zdCBnPWsmJihrWydkYXRhJ118fGtbJ2Vyck1zZyddKT9rWydkYXRhJ118fGtbJ2Vyck1zZyddOidOb1xceDIwcmVzcG9uc2VcXHgyMGRhdGEnO2NvbnNvbGVbJ2xvZyddKCflk43lupQ6PicsZyksY29uc29sZVsnbG9nJ10oJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeivt+axglxceDIwRU5ELS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTt9fSk7fSk7fSxIPUJBU0VfVVJMKycvbWFya2V0LW11bHRpLWdhbWUtc2VydmVyL2t1YWlTaG91Q2xpZW50L2luaXRHYW1lJzt0aGlzWydpbml0J109YXN5bmMoUyxKKT0+e3RyeXtrc1snb25TaGFyZUFwcE1lc3NhZ2UnXShrPT57cmV0dXJueyd0ZW1wbGF0ZUlkJzp3LCdxdWVyeSc6JycsJ3N1Y2Nlc3MnOigpPT57Y29uc29sZVsnbG9nJ10oJ+WIhuS6q+aIkOWKnycpO30sJ2ZhaWwnOmc9Pntjb25zb2xlWydsb2cnXSgn5YiG5Lqr5aSx6LSlJyxnKTt9fTt9KSxpPWF3YWl0IFEoKSxjKFMpO2NvbnN0IE89eydjb2RlJzppLCdnYW1lSWQnOkYsJ3BsYXRmb3JtSWQnOkksJ2NoYW5uZWxJZCc6biwnc3ViQ2hhbm5lbElkJzpxLCdhaWQnOmYsJ3RyYWNlSWQnOnMsJ3N5cyc6b30sZD1hd2FpdCBwKEgsTyk7ZFsnY29kZSddPT09Q29kZVN0YXR1c1snU1VDQ0VTUyddJiYoWD1kWydkYXRhJ11bJ3VzZXJJZCddLHU9ZFsnZGF0YSddWyd1bmlvbklkJ10sdz1kWydkYXRhJ11bJ3NoYXJlVGVtcGxhdGVJZCddLGRbJ2RhdGEnXT1udWxsKSxKKGkpO31jYXRjaChrKXtjb25zb2xlWydlcnJvciddKCdb5Yid5aeL5YyW5ri45oiPXeW8guW4uDo+JyxrKTt9fSx0aGlzWydsb2dpbiddPWFzeW5jIFM9PntTKHsnY29kZSc6Q29kZVN0YXR1c1snU1VDQ0VTUyddLCdtZXNzYWdlJzon5pON5L2c5oiQ5YqfJywnZGF0YSc6eydjb2RlJzppfX0pO30sdGhpc1sncGF5J109YXN5bmMoUyxKKT0+e3R0WydjaGVja1Nlc3Npb24nXSh7J3N1Y2Nlc3MnOk89Pnt0cnl7SyhTLEopO31jYXRjaChkKXtjb25zb2xlWydlcnJvciddKCdb5pSv5LuY5ouJ6LW3XeW8guW4uDo+JyxkKTt9fSwnZmFpbCc6Tz0+e3R0Wydsb2dpbiddKHsnc3VjY2Vzcyc6ZD0+e3RyeXtLKFMsSik7fWNhdGNoKGspe2NvbnNvbGVbJ2Vycm9yJ10oJ1vmlK/ku5jmi4notbdd5byC5bi4Oj4nLGspO319fSk7fX0pO307Y29uc3QgRz1CQVNFX1VSTCsnL21hcmtldC1tdWx0aS1nYW1lLXNlcnZlci9rdWFpU2hvdUNsaWVudC91cGxvYWRSb2xlSW5mbyc7dGhpc1sndXBsb2FkUm9sZUluZm8nXT1hc3luYyhTLEopPT57dHJ5e1NbJ2dhbWVJZCddPUYsU1sncGxhdGZvcm1JZCddPUk7Y29uc3QgTz1hd2FpdCBwKEcsUyk7SihPKTt9Y2F0Y2goZCl7Y29uc29sZVsnZXJyb3InXSgn5LiK5oql6KeS6Imy5pWw5o2u5byC5bi4Oj4nLGQpO319O2NvbnN0IGI9QkFTRV9VUkwrJy9tYXJrZXQtbXVsdGktZ2FtZS1zZXJ2ZXIva3VhaVNob3VDbGllbnQvYW50aWRpcnQnO3RoaXNbJ2FudGlkaXJ0J109YXN5bmMoUyxKKT0+e3RyeXtsZXQgTz17J2dhbWVJZCc6RiwncGxhdGZvcm1JZCc6SSwnY29udGVudHMnOlN9O2NvbnN0IGQ9YXdhaXQgcChiLE8pO0ooZCk7fWNhdGNoKGspe2NvbnNvbGVbJ2Vycm9yJ10oJ1vlhoXlrrnlronlhajmo4DmtYtd5byC5bi4Oj4nLGspO319LHRoaXNbJ2NyZWF0ZVJld2FyZGVkVmlkZW9BZCddPShTLEopPT57bGV0IE89eydhZFVuaXRJZCc6U1snYWRVbml0SWQnXX07U1snbXVsdGl0b24nXSYmKE9bJ211bHRpdG9uJ109U1snbXVsdGl0b24nXSxPWydtdWx0aXRvblJld2FyZE1zZyddPVNbJ211bHRpdG9uUmV3YXJkTXNnJ10sT1snbXVsdGl0b25SZXdhcmRUaW1lcyddPVNbJ211bHRpdG9uUmV3YXJkVGltZXMnXSksU1sncHJvZ3Jlc3NUaXAnXSYmKE9bJ3Byb2dyZXNzVGlwJ109U1sncHJvZ3Jlc3NUaXAnXSksQz1rc1snY3JlYXRlUmV3YXJkZWRWaWRlb0FkJ10oTyksQ1snb25DbG9zZSddKGQ9PntkJiZkWydpc0VuZGVkJ10mJihtKEFkVHlwZVsnUkVXQVJERURfVklERU9fQUQnXSx0LEFkQWN0aW9uVHlwZVsnRklOSVNIRUQnXSksY29uc29sZVsnbG9nJ10oJ+ato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkea4uOaIj+WlluWKsScpKSxTWydvbkNsb3NlJ10mJlNbJ29uQ2xvc2UnXShkKSxDWydkZXN0cm95J10oKTt9KSxTWydvbkVycm9yJ10mJkNbJ29uRXJyb3InXShkPT57U1snb25FcnJvciddJiZTWydvbkVycm9yJ10oZCksQ1snZGVzdHJveSddKCk7fSksdD1TWydhZFVuaXRJZCddLEooeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzpudWxsfSk7fSx0aGlzWydzaG93UmV3YXJkZWRWaWRlb0FkJ109KCk9PntDJiYoQ1snbG9hZCddKCksQ1snc2hvdyddKClbJ3RoZW4nXSgoKT0+bShBZFR5cGVbJ1JFV0FSREVEX1ZJREVPX0FEJ10sdCxBZEFjdGlvblR5cGVbJ1NIT1cnXSkpWydjYXRjaCddKFM9PntDWydsb2FkJ10oKVsndGhlbiddKCgpPT57Q1snc2hvdyddKClbJ3RoZW4nXSgoKT0+bShBZFR5cGVbJ1JFV0FSREVEX1ZJREVPX0FEJ10sdCxBZEFjdGlvblR5cGVbJ1NIT1cnXSkpO30pWydjYXRjaCddKEo9PmNvbnNvbGVbJ2xvZyddKCfmv4DlirHop4bpopFcXHgyMOW5v+WRiuaYvuekuuWksei0pScpKTt9KSk7fSx0aGlzWydjcmVhdGVDb250YWN0QnV0dG9uJ109KFMsSik9Pntjb25zdCBPPXR0WydjcmVhdGVDb250YWN0QnV0dG9uJ10oUyk7alsnc2V0J10oalsnc2l6ZSddLE8pLEooeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzp7J2NvbnRhY3RCdG5Obyc6alsnc2l6ZSddLTB4MX19KTt9LHRoaXNbJ2NvbnRhY3RCdG5EZXN0b3J5J109Uz0+e2xldCBKPU0oUyk7SlsnZGVzdG9yeSddKCksalsnc2V0J10oUyxudWxsKTt9LHRoaXNbJ2NvbnRhY3RCdG5TaG93J109Uz0+e2xldCBKPU0oUyk7Slsnc2hvdyddKCk7fSx0aGlzWydjb250YWN0QnRuSGlkZSddPVM9PntsZXQgSj1NKFMpO0pbJ2hpZGUnXSgpO30sdGhpc1snY3JlYXRlR2FtZVJlY29yZGVyJ109KFMsSik9PntQPWtzWydnZXRHYW1lUmVjb3JkZXInXSgpLFNbJ29uU3RhcnQnXSYmUFsnb24nXSgnc3RhcnQnLFNbJ29uU3RhcnQnXSksU1snb25SZXN1bWUnXSYmUFsnb24nXSgncmVzdW1lJyxTWydvblJlc3VtZSddKSxTWydvblBhdXNlJ10mJlBbJ29uJ10oJ3BhdXNlJyxTWydvblBhdXNlJ10pLFNbJ29uU3RvcCddJiZQWydvbiddKCdzdG9wJyxTWydvblN0b3AnXSksU1snb25FcnJvciddJiZQWydvbiddKCdlcnJvcicsU1snb25FcnJvciddKSxTWydvbkFib3J0J10mJlBbJ29uJ10oJ2Fib3J0JyxTWydvbkFib3J0J10pLEooeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzpudWxsfSk7fSx0aGlzWydnYW1lUmVjb3JkZXJTdGFydCddPVM9PntUKCksUFsnc3RhcnQnXShTKTt9LHRoaXNbJ2dhbWVSZWNvcmRlclBhdXNlJ109KCk9PntUKCksUFsncGF1c2UnXSgpO30sdGhpc1snZ2FtZVJlY29yZGVyUmVzdW1lJ109KCk9PntUKCksUFsncmVzdW1lJ10oKTt9LHRoaXNbJ2dhbWVSZWNvcmRlclN0b3AnXT0oKT0+e1QoKSxjb25zb2xlWydsb2cnXSgn6Kem5Y+R5YGc5q2i5b2V5bGPJyksUFsnc3RvcCddKCk7fSx0aGlzWydwdWJsaXNoVmlkZW8nXT1TPT57VCgpLFBbJ3B1Ymxpc2hWaWRlbyddKHsndmlkZW8nOlNbJ3ZpZGVvSUQnXSwnY2FsbGJhY2snOko9PntpZihKIT1udWxsJiZKIT11bmRlZmluZWQpe2NvbnNvbGVbJ2xvZyddKCfliIbkuqvlvZXlsY/lpLHotKU6XFx4MjAnLEopO3JldHVybjt9Y29uc29sZVsnbG9nJ10oJ+WIhuS6q+W9leWxj+aIkOWKnycpO319KTt9LHRoaXNbJ3NoYXJlQXBwTWVzc2FnZSddPShTLEopPT57a3NbJ3NoYXJlQXBwTWVzc2FnZSddKHsuLi5TLCd0ZW1wbGF0ZUlkJzp3LCdzdWNjZXNzJzooKT0+e0ooeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzpudWxsfSk7fSwnZmFpbCc6Tz0+e2NvbnNvbGVbJ2xvZyddKCdb5YiG5Lqr5aSx6LSlXTo+JyxPKSxKKHsnY29kZSc6Q29kZVN0YXR1c1snRkFJTCddLCdtZXNzYWdlJzon5pON5L2c5aSx6LSlJywnZGF0YSc6bnVsbH0pO319KTt9LHRoaXNbJ2FkZFNob3J0Y3V0J109Uz0+e2tzWydhZGRTaG9ydGN1dCddKHsnY29tcGxldGUnOlN9KTt9LHRoaXNbJ2FkZENvbW1vblVzZSddPVM9Pntrc1snYWRkQ29tbW9uVXNlJ10oeydjb21wbGV0ZSc6U30pO30sdGhpc1snY2hlY2tTaWRlYmFyJ109Uz0+e3R0WydjaGVja1NjZW5lJ10oeydzY2VuZSc6J3NpZGViYXInLCdzdWNjZXNzJzpKPT57SiYmSlsnaXNFeGlzdCddJiZTKHsnY29kZSc6Q29kZVN0YXR1c1snU1VDQ0VTUyddLCdtZXNzYWdlJzon5pON5L2c5oiQ5YqfJywnZGF0YSc6bnVsbH0pO319KTt9LHRoaXNbJ25hdmlnYXRlVG9TaWRlYmFyJ109Uz0+e3R0WyduYXZpZ2F0ZVRvU2NlbmUnXSh7J3NjZW5lJzonc2lkZWJhcicsJ3N1Y2Nlc3MnOko9PntTKHsnY29kZSc6Q29kZVN0YXR1c1snU1VDQ0VTUyddLCdtZXNzYWdlJzon5pON5L2c5oiQ5YqfJywnZGF0YSc6bnVsbH0pO30sJ2ZhaWwnOko9Pntjb25zb2xlWydsb2cnXSgnW+i3s+i9rOS+p+i+ueagj+Wksei0pV06PicsSiksUyh7J2NvZGUnOkNvZGVTdGF0dXNbJ0ZBSUwnXSwnbWVzc2FnZSc6J+aTjeS9nOWksei0pScsJ2RhdGEnOm51bGx9KTt9fSk7fSx0aGlzWydvbkZyb21TaWRlYmFyJ109Uz0+e3R0WydvblNob3cnXSgoe3NjZW5lOkosbGF1bmNoX2Zyb206Tyxsb2NhdGlvbjpkfSk9PntKPT0nMDIxMDM2JyYmTz09J2hvbWVwYWdlJyYmZD09J3NpZGViYXJfY2FyZCcmJlMoeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzpudWxsfSk7fSk7fSx0aGlzWydvbktleWJvYXJkQ29tcGxldGUnXT1TPT57Y29uc3QgSj1PPT57Uyh7J2NvZGUnOkNvZGVTdGF0dXNbJ1NVQ0NFU1MnXSwnbWVzc2FnZSc6J+aTjeS9nOaIkOWKnycsJ2RhdGEnOk99KSx0dFsnb2ZmS2V5Ym9hcmRDb21wbGV0ZSddKEopO307dHRbJ29uS2V5Ym9hcmRDb21wbGV0ZSddKEopO30sdGhpc1sncmVxdWVzdFN1YnNjcmliZU1lc3NhZ2UnXT0oUyxKKT0+e3R0WydyZXF1ZXN0U3Vic2NyaWJlTWVzc2FnZSddKHsndG1wbElkcyc6Uywnc3VjY2Vzcyc6Tz0+e2xldCBkPU9iamVjdFsna2V5cyddKE8pWydmaWx0ZXInXShrPT5PW2tdPT09J2FjY2VwdCcpO0ooeydjb2RlJzpDb2RlU3RhdHVzWydTVUNDRVNTJ10sJ21lc3NhZ2UnOifmk43kvZzmiJDlip8nLCdkYXRhJzpkfSk7fSwnZmFpbCc6Tz0+e0ooeydjb2RlJzpDb2RlU3RhdHVzWydGQUlMRUQnXSwnbWVzc2FnZSc6T1snZXJyTXNnJ10sJ2RhdGEnOm51bGx9KTt9fSk7fTt9c3RhdGljWydnZXRJbnMnXSgpe3JldHVybiF0aGlzWydpbnMnXSYmKHRoaXNbJ2lucyddPW5ldyBFeW91Q2xpZW50S3MoKSksdGhpc1snaW5zJ107fX1jbGFzcyBDb2RlU3RhdHVze3N0YXRpYyBbJ1NVQ0NFU1MnXT0weDA7c3RhdGljIFsnRkFJTCddPS0weDE7fWNsYXNzIEFkVHlwZXtzdGF0aWMgWydSRVdBUkRFRF9WSURFT19BRCddPTB4MTtzdGF0aWMgWydCQU5ORVJfQUQnXT0weDI7fWNsYXNzIEFkQWN0aW9uVHlwZXtzdGF0aWMgWydTSE9XJ109MHgxO3N0YXRpYyBbJ0ZJTklTSEVEJ109MHgyO30iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Number.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '530caSlmu1BqoWKE/5ju/Ig', 'Number');
// Script/Number.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    numberSpriteFrames: {
      "default": [],
      type: cc.SpriteFrame
    },
    numberLayoutNode: {
      "default": null,
      type: cc.Node
    }
  },
  showNumber: function showNumber(number) {
    this.numberLayoutNode.removeAllChildren();
    if (number === null || number === '' || isNaN(number)) {
      return;
    }
    var numberString = parseInt(number).toString();
    for (var i = 0; i < numberString.length; i++) {
      this.addNumberNode(parseInt(numberString.charAt(i)));
    }
  },
  addNumberNode: function addNumberNode(num) {
    var numNode = new cc.Node();
    numNode.width = 16;
    numNode.height = 34;
    numNode.addComponent(cc.Sprite).spriteFrame = this.numberSpriteFrames[num];
    this.numberLayoutNode.addChild(numNode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOdW1iZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJudW1iZXJTcHJpdGVGcmFtZXMiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJudW1iZXJMYXlvdXROb2RlIiwiTm9kZSIsInNob3dOdW1iZXIiLCJudW1iZXIiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImlzTmFOIiwibnVtYmVyU3RyaW5nIiwicGFyc2VJbnQiLCJ0b1N0cmluZyIsImkiLCJsZW5ndGgiLCJhZGROdW1iZXJOb2RlIiwiY2hhckF0IiwibnVtIiwibnVtTm9kZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxrQkFBa0IsRUFBRTtNQUNoQixXQUFTLEVBQUU7TUFDWEMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBQ2IsQ0FBQztJQUNEQyxnQkFBZ0IsRUFBRTtNQUNkLFdBQVMsSUFBSTtNQUNiRixJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7SUFDYjtFQUNKLENBQUM7RUFDREMsVUFBVSxXQUFBQSxXQUFDQyxNQUFNLEVBQUU7SUFDZixJQUFJLENBQUNILGdCQUFnQixDQUFDSSxpQkFBaUIsRUFBRTtJQUN6QyxJQUFJRCxNQUFNLEtBQUssSUFBSSxJQUFJQSxNQUFNLEtBQUssRUFBRSxJQUFJRSxLQUFLLENBQUNGLE1BQU0sQ0FBQyxFQUFFO01BQ25EO0lBQ0o7SUFDQSxJQUFJRyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0osTUFBTSxDQUFDLENBQUNLLFFBQVEsRUFBRTtJQUM5QyxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0gsWUFBWSxDQUFDSSxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQzFDLElBQUksQ0FBQ0UsYUFBYSxDQUFDSixRQUFRLENBQUNELFlBQVksQ0FBQ00sTUFBTSxDQUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hEO0VBQ0osQ0FBQztFQUNERSxhQUFhLFdBQUFBLGNBQUNFLEdBQUcsRUFBRTtJQUNmLElBQUlDLE9BQU8sR0FBRyxJQUFJckIsRUFBRSxDQUFDUSxJQUFJLEVBQUU7SUFDM0JhLE9BQU8sQ0FBQ0MsS0FBSyxHQUFHLEVBQUU7SUFDbEJELE9BQU8sQ0FBQ0UsTUFBTSxHQUFHLEVBQUU7SUFDbkJGLE9BQU8sQ0FBQ0csWUFBWSxDQUFDeEIsRUFBRSxDQUFDeUIsTUFBTSxDQUFDLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUN0QixrQkFBa0IsQ0FBQ2dCLEdBQUcsQ0FBQztJQUMxRSxJQUFJLENBQUNiLGdCQUFnQixDQUFDb0IsUUFBUSxDQUFDTixPQUFPLENBQUM7RUFDM0M7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbnVtYmVyU3ByaXRlRnJhbWVzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG51bWJlckxheW91dE5vZGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNob3dOdW1iZXIobnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXJMYXlvdXROb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgaWYgKG51bWJlciA9PT0gbnVsbCB8fCBudW1iZXIgPT09ICcnIHx8IGlzTmFOKG51bWJlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbnVtYmVyU3RyaW5nID0gcGFyc2VJbnQobnVtYmVyKS50b1N0cmluZygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyU3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTnVtYmVyTm9kZShwYXJzZUludChudW1iZXJTdHJpbmcuY2hhckF0KGkpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFkZE51bWJlck5vZGUobnVtKSB7XHJcbiAgICAgICAgbGV0IG51bU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIG51bU5vZGUud2lkdGggPSAxNjtcclxuICAgICAgICBudW1Ob2RlLmhlaWdodCA9IDM0O1xyXG4gICAgICAgIG51bU5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLm51bWJlclNwcml0ZUZyYW1lc1tudW1dO1xyXG4gICAgICAgIHRoaXMubnVtYmVyTGF5b3V0Tm9kZS5hZGRDaGlsZChudW1Ob2RlKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/eqconf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50811oxLBpEfY55rC+DILJb', 'eqconf');
// Script/eqconf.js

"use strict";

exports.WXAPPID = "wxd252139bf2f8020e";
exports.EQVERSION = "1.0.1";
exports.EQCID = "WT05";
exports.EQWXAUTH = 1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxlcWNvbmYuanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIldYQVBQSUQiLCJFUVZFUlNJT04iLCJFUUNJRCIsIkVRV1hBVVRIIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPLENBQUNDLE9BQU8sR0FBQyxvQkFBb0I7QUFDcENELE9BQU8sQ0FBQ0UsU0FBUyxHQUFDLE9BQU87QUFDekJGLE9BQU8sQ0FBQ0csS0FBSyxHQUFDLE1BQU07QUFDcEJILE9BQU8sQ0FBQ0ksUUFBUSxHQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMuV1hBUFBJRD1cInd4ZDI1MjEzOWJmMmY4MDIwZVwiO1xuZXhwb3J0cy5FUVZFUlNJT049XCIxLjAuMVwiO1xuZXhwb3J0cy5FUUNJRD1cIldUMDVcIjtcbmV4cG9ydHMuRVFXWEFVVEg9MTtcblxuXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtYWluLmpzIl0sIm5hbWVzIjpbIkdhbWVUb29scyIsInJlcXVpcmUiLCJHYW1lVWlUb29scyIsIkdhbWVDb25maWciLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRlc2tOb2RlIiwidHlwZSIsIk5vZGUiLCJkaXNwbGF5TmFtZSIsImRlc2tTcHJpdGUiLCJQcmVmYWIiLCJtb3ZlRGVza1Nwcml0ZSIsIlNwcml0ZSIsInNlbGVjdERlc2tTcHJpdGUiLCJkZXNrQmciLCJqaWFzdUJ0biIsInNob3BCdG4iLCJyZWNvdmVyeWJ0biIsImJ1Z0dvbGRidG4iLCJidWdMYWJlbCIsIkxhYmVsIiwiYnVnR29sZExhYmVsIiwiZ29sZExhYmVsIiwiY29pbkJ0biIsImNvaW5MYWJlbCIsIm1vbmV5U3BlZWRMYWJlbCIsInJhbmtpbmdCdG4iLCJtb3JlR2lmdEJ0biIsInNpZ25CdG4iLCJ0dXJuVGFibGVCdG4iLCJwZXJzaW9uTmFtZSIsImdpZnRidG4iLCJqcHRqIiwibmF2aWdhdG9yIiwiaG93Z2FtZSIsImNiQnRuIiwiY3RvciIsIm1haW4iLCJzdGFydCIsIl90aGlzIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIm9uVG91Y2hCZWdhbiIsIlRPVUNIX01PVkUiLCJvblRvdWNoTW92ZWQiLCJUT1VDSF9FTkQiLCJvblRvdWNoRW5kZWQiLCJUT1VDSF9DQU5DRUwiLCJvblRvdWNoQ2FuY2VsIiwicGxheUJhY2tncm91bmRNdXNpYyIsInNldEJ1dHRvbkNsaWNrRXZlbnRzIiwic2NoZWR1bGUiLCJnYW1lR2lmdEJhZyIsIm1hY3JvIiwiUkVQRUFUX0ZPUkVWRVIiLCJidWdQZXJzaW9uTGV2ZWwiLCJzdHJpbmciLCJnZXROdW1iZXJTdHJpbmciLCJidXlHb2xkVXBncmFkZSIsInNldEdhbWVNb25leSIsInNldEdhbWVDb2luIiwidGltZXIiLCJjaG9vc2UiLCJwZXJOYW1lIiwiR2FtZVBlcnNvbk1heExldmVsIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsInd4Iiwib25TaG93Iiwic2hhcmVUaW1lIiwic2hhcmVDb21wb25lbnQiLCJuYW1lIiwiaW5kZXhPZiIsInJlVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiR2FtZUNvaW4iLCJzaG93VG9hc3QiLCJjdXJyZW50VGltZSIsInNoYXJlU3VjY2VzcyIsIndpbmRvdyIsInNoYXJlZENhbnZhcyIsInVuZGVmaW5lZCIsInRleCIsIlRleHR1cmUyRCIsIndpZHRoIiwiaGVpZ2h0IiwicG9zdE1lc3NhZ2UiLCJtZXNzYWdlVHlwZSIsIk1BSU5fTUVOVV9OVU0iLCJzY29yZSIsIkdhbWVNb25leSIsImxldmVsIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwiZ2FtZU5leHRSYW5rIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsIm9uSGlkZSIsIl90aW1lIiwibGFzdFRpbWUiLCJzZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJRUV9QTEFZIiwib25Mb2FkIiwiZGVza0FyciIsIkFycmF5IiwiaSIsIlJvdyIsImoiLCJDb2wiLCJkZXNrIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJpbml0RGVzayIsImdldEl0ZW1CeUxvY2FsU3RvcmFnZSIsImFkZENoaWxkIiwibm9kZSIsInpJbmRleCIsInNldEZpcnN0R2FtZSIsInN0YXJ0TXMiLCJjcCIsIklTX0xPQURfTUlOSSIsInNob3dNaW5Qcm9ncmFtIiwiaW5pdFNlbGZNaW5pUHJvZ3JhbSIsImZsYWciLCJpbml0RVFNaW5pUHJvZ3JhbSIsIlVzZXJJbmZvIiwiYWN0aXZlIiwic2V0UG9zaXRpb24iLCJzdG9wQWxsQWN0aW9ucyIsInJ1bkFjdGlvbiIsImp1bXBCeSIsIm5vdyIsInRvZGF5QmVnaW5UaW1lc3RhbXAiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInR1cm5UYWJsZU51bSIsIm5vd1RpbWUiLCJvZmZMaW5lVGltZSIsIk1hdGgiLCJmbG9vciIsImxvYWRpbmdMYXllciIsImJ0bkZ1bmMiLCJldmVudCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsImJ1dHRvbiIsInRhcmdldCIsInRvYXN0TWVzc2FnZSIsImJ1Z0dvbGRGdW5jIiwic2hhcmVQaWN0dXJlIiwic3VibWl0U2NvcmUiLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW0iLCJBUFBJRCIsIlBBVEgiLCJzZWxlY3REZXNrSGlkZSIsIm51bWJlciIsImRlc2tDbGlja1Nob3ciLCJ0b3VjaFBvaW50IiwidG91Y2giLCJnZXRMb2NhdGlvbiIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRCb3VuZGluZ0JveFRvV29ybGQiLCJjb250YWlucyIsInNldFNwcml0ZUZyYW1lIiwiX3RoaXMyIiwic2VxdWVuY2UiLCJtb3ZlVG8iLCJ4IiwieSIsImNhbGxGdW5jIiwic2hvd1BlcnNvbk51bWJlciIsImFkZERlc2tTcHJpdGVCeUxldmVsIiwiX3RoaXMzIiwibW92ZVRpbWUiLCJfbG9vcCIsIl9pMiIsIl9sb29wMiIsIl9qIiwiZGVza1Nob3ciLCJhZGROdW1iZXJBbmltIiwidiIsInNhdmVEZXNrQXJyIiwiX3JldDIiLCJfcmV0IiwiY2hvb3NlTGV2ZWwiLCJfdGhpczQiLCJfbG9vcDMiLCJfbG9vcDQiLCJnZXRQb3NpdGlvbiIsIl9yZXQ0IiwiX3JldDMiLCJzZXRCdWdHb2xkYnRuIiwiYnVnbGV2ZWwiLCJtYXRoIiwicmFuZG9tIiwiYnV5Q29pbkZ1bmMiLCJidXlDb2luVXBncmFkZSIsImdhbWVEb3VibGUiLCJudW0iLCJjb2xvciIsIkNvbG9yIiwiR1JBWSIsIkJ1dHRvbiIsImludGVyYWN0YWJsZSIsImlzU2VsZWN0IiwidCIsIm0iLCJzIiwiY291bnREb3duIiwibGVuZ3RoIiwiTnVtYmVyIiwiV0hJVEUiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJnZXRNb25leVNwZWVkIiwic3VtIiwiZXhwTnVtYmVyIiwic2NhbGVUbyIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxJQUFJQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDeEMsSUFBSUUsVUFBVSxHQUFHRixPQUFPLENBQUMsWUFBWSxDQUFDO0FBRXRDRyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBQztNQUNMLFdBQVEsSUFBSTtNQUNaQyxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFBSTtNQUNaQyxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEQyxVQUFVLEVBQUM7TUFDUCxXQUFRLElBQUk7TUFDWkgsSUFBSSxFQUFDTCxFQUFFLENBQUNTLE1BQU07TUFDZEYsV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDREcsY0FBYyxFQUFDO01BQ1gsV0FBUSxJQUFJO01BQ1pMLElBQUksRUFBQ0wsRUFBRSxDQUFDVyxNQUFNO01BQ2RKLFdBQVcsRUFBQztJQUNoQixDQUFDO0lBQ0RLLGdCQUFnQixFQUFDO01BQ2IsV0FBUSxJQUFJO01BQ1pQLElBQUksRUFBQ0wsRUFBRSxDQUFDRSxTQUFTO01BQ2pCSyxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNETSxNQUFNLEVBQUM7TUFDSCxXQUFRLElBQUk7TUFDWlIsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDRE8sUUFBUSxFQUFDO01BQ0wsV0FBUSxJQUFJO01BQ1pULElBQUksRUFBQ0wsRUFBRSxDQUFDTSxJQUFJO01BQ1pDLFdBQVcsRUFBQztJQUNoQixDQUFDO0lBQ0RRLE9BQU8sRUFBQztNQUNKLFdBQVEsSUFBSTtNQUNaVixJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFBSTtNQUNaQyxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEUyxXQUFXLEVBQUM7TUFDUixXQUFRLElBQUk7TUFDWlgsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDRFUsVUFBVSxFQUFDO01BQ1AsV0FBUSxJQUFJO01BQ1paLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxJQUFJO01BQ1pDLFdBQVcsRUFBQztJQUNoQixDQUFDO0lBQ0RXLFFBQVEsRUFBQztNQUNMLFdBQVEsSUFBSTtNQUNaYixJQUFJLEVBQUNMLEVBQUUsQ0FBQ21CLEtBQUs7TUFDYlosV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDRGEsWUFBWSxFQUFDO01BQ1QsV0FBUSxJQUFJO01BQ1pmLElBQUksRUFBQ0wsRUFBRSxDQUFDbUIsS0FBSztNQUNiWixXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEYyxTQUFTLEVBQUM7TUFDTixXQUFRLElBQUk7TUFDWmhCLElBQUksRUFBQ0wsRUFBRSxDQUFDbUIsS0FBSztNQUNiWixXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEZSxPQUFPLEVBQUM7TUFDSixXQUFRLElBQUk7TUFDWmpCLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxJQUFJO01BQ1pDLFdBQVcsRUFBQztJQUNoQixDQUFDO0lBQ0RnQixTQUFTLEVBQUM7TUFDTixXQUFRLElBQUk7TUFDWmxCLElBQUksRUFBQ0wsRUFBRSxDQUFDbUIsS0FBSztNQUNiWixXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEaUIsZUFBZSxFQUFDO01BQ1osV0FBUSxJQUFJO01BQ1puQixJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFBSTtNQUNaQyxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEa0IsVUFBVSxFQUFDO01BQ1AsV0FBUSxJQUFJO01BQ1pwQixJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFBSTtNQUNaQyxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEbUIsV0FBVyxFQUFDO01BQ1IsV0FBUSxJQUFJO01BQ1pyQixJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFBSTtNQUNaQyxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEb0IsT0FBTyxFQUFDO01BQ0osV0FBUSxJQUFJO01BQ1p0QixJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFBSTtNQUNaQyxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEcUIsWUFBWSxFQUFDO01BQ1QsV0FBUSxJQUFJO01BQ1p2QixJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFBSTtNQUNaQyxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEc0IsV0FBVyxFQUFDO01BQ1IsV0FBUSxJQUFJO01BQ1p4QixJQUFJLEVBQUNMLEVBQUUsQ0FBQ21CLEtBQUs7TUFDYlosV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDRHVCLE9BQU8sRUFBQztNQUNKLFdBQVEsSUFBSTtNQUNaekIsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDRHdCLElBQUksRUFBQztNQUNELFdBQVEsSUFBSTtNQUNaMUIsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDRHlCLFNBQVMsRUFBQztNQUNOLFdBQVEsSUFBSTtNQUNaM0IsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDRDBCLE9BQU8sRUFBQztNQUNKLFdBQVEsSUFBSTtNQUNaNUIsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDRDJCLEtBQUssRUFBQztNQUNGLFdBQVEsSUFBSTtNQUNaN0IsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCO0VBRUosQ0FBQztFQUNENEIsSUFBSSxXQUFBQSxLQUFBLEVBQUc7SUFDSHBDLFVBQVUsQ0FBQ3FDLElBQUksR0FBRyxJQUFJO0VBQzFCLENBQUM7RUFHREMsS0FBSyxXQUFBQSxNQUFBLEVBQUk7SUFBQSxJQUFBQyxLQUFBO0lBQ0wsSUFBSSxDQUFDekIsTUFBTSxDQUFDMEIsRUFBRSxDQUFDdkMsRUFBRSxDQUFDTSxJQUFJLENBQUNrQyxTQUFTLENBQUNDLFdBQVcsRUFBQyxJQUFJLENBQUNDLFlBQVksRUFBQyxJQUFJLENBQUM7SUFDcEUsSUFBSSxDQUFDN0IsTUFBTSxDQUFDMEIsRUFBRSxDQUFDdkMsRUFBRSxDQUFDTSxJQUFJLENBQUNrQyxTQUFTLENBQUNHLFVBQVUsRUFBQyxJQUFJLENBQUNDLFlBQVksRUFBQyxJQUFJLENBQUM7SUFDbkUsSUFBSSxDQUFDL0IsTUFBTSxDQUFDMEIsRUFBRSxDQUFDdkMsRUFBRSxDQUFDTSxJQUFJLENBQUNrQyxTQUFTLENBQUNLLFNBQVMsRUFBQyxJQUFJLENBQUNDLFlBQVksRUFBQyxJQUFJLENBQUM7SUFDbEUsSUFBSSxDQUFDakMsTUFBTSxDQUFDMEIsRUFBRSxDQUFDdkMsRUFBRSxDQUFDTSxJQUFJLENBQUNrQyxTQUFTLENBQUNPLFlBQVksRUFBQyxJQUFJLENBQUNDLGFBQWEsRUFBQyxJQUFJLENBQUM7SUFDdEVwRCxTQUFTLENBQUNxRCxtQkFBbUIsRUFBRTtJQUUvQm5ELFdBQVcsQ0FBQ29ELG9CQUFvQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUNsQyxXQUFXLEVBQUUsU0FBUyxDQUFDO0lBQ25FbEIsV0FBVyxDQUFDb0Qsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ2pDLFVBQVUsRUFBRSxTQUFTLENBQUM7SUFDbEVuQixXQUFXLENBQUNvRCxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDbkMsT0FBTyxFQUFFLFNBQVMsQ0FBQztJQUMvRGpCLFdBQVcsQ0FBQ29ELG9CQUFvQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUN2QixPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQy9EN0IsV0FBVyxDQUFDb0Qsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ3RCLFlBQVksRUFBRSxTQUFTLENBQUM7SUFDcEU5QixXQUFXLENBQUNvRCxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDcEMsUUFBUSxFQUFFLFNBQVMsQ0FBQztJQUNoRWhCLFdBQVcsQ0FBQ29ELG9CQUFvQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUM1QixPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQy9EeEIsV0FBVyxDQUFDb0Qsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ3BCLE9BQU8sRUFBRSxTQUFTLENBQUM7SUFDL0RoQyxXQUFXLENBQUNvRCxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDekIsVUFBVSxFQUFFLFNBQVMsQ0FBQztJQUNsRTNCLFdBQVcsQ0FBQ29ELG9CQUFvQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUNuQixJQUFJLEVBQUUsU0FBUyxDQUFDO0lBQzVEakMsV0FBVyxDQUFDb0Qsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ2xCLFNBQVMsRUFBRSxTQUFTLENBQUM7SUFDakVsQyxXQUFXLENBQUNvRCxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDeEIsV0FBVyxFQUFFLFNBQVMsQ0FBQztJQUNuRTVCLFdBQVcsQ0FBQ29ELG9CQUFvQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUNqQixPQUFPLEVBQUUsU0FBUyxDQUFDO0lBQy9EbkMsV0FBVyxDQUFDb0Qsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQ2hCLEtBQUssRUFBRSxTQUFTLENBQUM7SUFFN0QsSUFBSSxDQUFDaUIsUUFBUSxDQUFDLElBQUksQ0FBQ0MsV0FBVyxFQUFFLEdBQUcsRUFBRXBELEVBQUUsQ0FBQ3FELEtBQUssQ0FBQ0MsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUVsRSxJQUFJLENBQUNDLGVBQWUsR0FBRyxDQUFDO0lBQ3hCLElBQUksQ0FBQ25DLFlBQVksQ0FBQ29DLE1BQU0sR0FBRzVELFNBQVMsQ0FBQzZELGVBQWUsQ0FBQzFELFVBQVUsQ0FBQzJELGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRixJQUFJLENBQUNDLFlBQVksRUFBRTtJQUNuQixJQUFJLENBQUNDLFdBQVcsRUFBRTtJQUNsQixJQUFJLENBQUNDLEtBQUssR0FBRyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxNQUFNLEdBQUcsS0FBSztJQUNuQixJQUFJLENBQUNqQyxXQUFXLENBQUMyQixNQUFNLEdBQUd6RCxVQUFVLENBQUNnRSxPQUFPLENBQUNoRSxVQUFVLENBQUNpRSxrQkFBa0IsR0FBQyxDQUFDLENBQUM7SUFDN0U7O0lBR0EsSUFBR2hFLEVBQUUsQ0FBQ2lFLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLbEUsRUFBRSxDQUFDaUUsR0FBRyxDQUFDRSxXQUFXLEVBQUM7TUFDdENDLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDLFlBQUk7UUFDVixJQUFHdEUsVUFBVSxDQUFDdUUsU0FBUyxJQUFJLENBQUMsRUFBQztVQUN6QixJQUFHdkUsVUFBVSxDQUFDd0UsY0FBYyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQztZQUNwRCxJQUFJQyxNQUFNLEdBQUcsSUFBSUMsSUFBSSxFQUFFLENBQUNDLE9BQU8sRUFBRTtZQUNqQyxJQUFHRixNQUFNLEdBQUczRSxVQUFVLENBQUN1RSxTQUFTLElBQUksSUFBSSxFQUFDO2NBQ3JDO2NBQ0F2RSxVQUFVLENBQUM4RSxRQUFRLElBQUksR0FBRztjQUMxQnZDLEtBQUksQ0FBQ3NCLFdBQVcsRUFBRTtjQUNsQmhFLFNBQVMsQ0FBQ2tGLFNBQVMsQ0FBQyxJQUFJLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQztZQUN0QyxDQUFDLE1BQUk7Y0FDRGxGLFNBQVMsQ0FBQ2tGLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDL0I7VUFDSjtVQUNBLElBQUcvRSxVQUFVLENBQUN3RSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDO1lBQzFELElBQUlNLFdBQVcsR0FBRyxJQUFJSixJQUFJLEVBQUUsQ0FBQ0MsT0FBTyxFQUFFO1lBQ3RDLElBQUdHLFdBQVcsR0FBR2hGLFVBQVUsQ0FBQ3VFLFNBQVMsSUFBSSxJQUFJLEVBQUM7Y0FDMUN2RSxVQUFVLENBQUN3RSxjQUFjLENBQUNTLFlBQVksRUFBRTtZQUM1QyxDQUFDLE1BQUk7Y0FDRHBGLFNBQVMsQ0FBQ2tGLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDL0I7VUFDSjtVQUNBLElBQUcvRSxVQUFVLENBQUN3RSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDO1lBQzFELElBQUlNLFlBQVcsR0FBRyxJQUFJSixJQUFJLEVBQUUsQ0FBQ0MsT0FBTyxFQUFFO1lBQ3RDLElBQUdHLFlBQVcsR0FBR2hGLFVBQVUsQ0FBQ3VFLFNBQVMsSUFBSSxJQUFJLEVBQUM7Y0FDMUN2RSxVQUFVLENBQUN3RSxjQUFjLENBQUNTLFlBQVksRUFBRTtZQUM1QyxDQUFDLE1BQUk7Y0FDRHBGLFNBQVMsQ0FBQ2tGLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDL0I7VUFDSjtVQUNBLElBQUcvRSxVQUFVLENBQUN3RSxjQUFjLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDO1lBQzVELElBQUlNLGFBQVcsR0FBRyxJQUFJSixJQUFJLEVBQUUsQ0FBQ0MsT0FBTyxFQUFFO1lBQ3RDLElBQUdHLGFBQVcsR0FBR2hGLFVBQVUsQ0FBQ3VFLFNBQVMsSUFBSSxJQUFJLEVBQUM7Y0FDMUN2RSxVQUFVLENBQUN3RSxjQUFjLENBQUNTLFlBQVksRUFBRTtZQUM1QyxDQUFDLE1BQUk7Y0FDRHBGLFNBQVMsQ0FBQ2tGLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDL0I7VUFDSjtVQUNBL0UsVUFBVSxDQUFDdUUsU0FBUyxHQUFHLENBQUM7UUFDNUI7UUFFQSxJQUFJVyxNQUFNLENBQUNDLFlBQVksSUFBSUMsU0FBUyxFQUFFO1VBQ2xDN0MsS0FBSSxDQUFDOEMsR0FBRyxHQUFHLElBQUlwRixFQUFFLENBQUNxRixTQUFTLEVBQUU7VUFDN0JKLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDSSxLQUFLLEdBQUcsR0FBRztVQUMvQkwsTUFBTSxDQUFDQyxZQUFZLENBQUNLLE1BQU0sR0FBRyxJQUFJO1VBQ2pDO1VBQ0FOLE1BQU0sQ0FBQ2IsRUFBRSxDQUFDb0IsV0FBVyxDQUFDO1lBQ2xCQyxXQUFXLEVBQUMsQ0FBQztZQUNiQyxhQUFhLEVBQUUzRixVQUFVLENBQUMyRixhQUFhO1lBQ3ZDQyxLQUFLLEVBQUU1RixVQUFVLENBQUM2RixTQUFTO1lBQzNCQyxLQUFLLEVBQUU5RixVQUFVLENBQUNpRTtVQUN0QixDQUFDLENBQUM7VUFDRjhCLFVBQVUsQ0FBQyxZQUFJO1lBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDMUQsS0FBSSxDQUFDOEMsR0FBRyxDQUFDYSxlQUFlLENBQUNoQixNQUFNLENBQUNDLFlBQVksQ0FBQztZQUM3QzVDLEtBQUksQ0FBQzhDLEdBQUcsQ0FBQ2MsbUJBQW1CLEVBQUU7WUFDOUI1RCxLQUFJLENBQUM2RCxZQUFZLENBQUNDLFdBQVcsR0FBRyxJQUFJcEcsRUFBRSxDQUFDcUcsV0FBVyxDQUFDL0QsS0FBSSxDQUFDOEMsR0FBRyxDQUFDO1VBQ2hFLENBQUMsRUFBQyxJQUFJLENBQUM7UUFDWDtNQUNKLENBQUMsQ0FBQztNQUNGaEIsRUFBRSxDQUFDa0MsTUFBTSxDQUFDLFlBQUk7UUFDVixJQUFJQyxLQUFLLEdBQUcsSUFBSTVCLElBQUksRUFBRSxDQUFDQyxPQUFPLEVBQUU7UUFDaEM3RSxVQUFVLENBQUN5RyxRQUFRLEdBQUdELEtBQUssQ0FBQztRQUM1QjNHLFNBQVMsQ0FBQzZHLHFCQUFxQixDQUFDLFVBQVUsRUFBQzFHLFVBQVUsQ0FBQ3lHLFFBQVEsQ0FBQztNQUNuRSxDQUFDLENBQUM7TUFDRjtJQUNKLENBQUMsTUFBSyxJQUFHeEcsRUFBRSxDQUFDaUUsR0FBRyxDQUFDQyxRQUFRLEtBQUtsRSxFQUFFLENBQUNpRSxHQUFHLENBQUN5QyxPQUFPLEVBQUM7TUFDeENYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztNQUNuQjtJQUNKO0VBQ0osQ0FBQztFQUVEVyxNQUFNLFdBQUFBLE9BQUEsRUFBSTtJQUNOLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUlDLEtBQUssRUFBRTtJQUMxQixLQUFJLElBQUlDLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQy9HLFVBQVUsQ0FBQ2dILEdBQUcsRUFBQ0QsQ0FBQyxFQUFFLEVBQUM7TUFDN0IsSUFBSSxDQUFDRixPQUFPLENBQUNFLENBQUMsQ0FBQyxHQUFHRCxLQUFLLEVBQUU7SUFDN0I7SUFFQSxLQUFJLElBQUlDLEVBQUMsR0FBQyxDQUFDLEVBQUNBLEVBQUMsR0FBQy9HLFVBQVUsQ0FBQ2dILEdBQUcsRUFBQ0QsRUFBQyxFQUFFLEVBQUM7TUFDN0IsS0FBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNqSCxVQUFVLENBQUNrSCxHQUFHLEVBQUNELENBQUMsRUFBRSxFQUFDO1FBQzdCLElBQUlFLElBQUksR0FBR2xILEVBQUUsQ0FBQ21ILFdBQVcsQ0FBQyxJQUFJLENBQUMzRyxVQUFVLENBQUM7UUFDMUM7UUFDQTtRQUNBO1FBQ0EwRyxJQUFJLENBQUNFLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQ0MsUUFBUSxDQUFDekgsU0FBUyxDQUFDMEgscUJBQXFCLENBQUMsU0FBUyxHQUFDUixFQUFDLEdBQUNFLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDLEdBQUcsR0FBQyxLQUFLLEVBQUMsQ0FBQyxHQUFHLEdBQUNGLEVBQUMsR0FBQyxHQUFHLENBQUM7UUFDakg7UUFDQSxJQUFJLENBQUNGLE9BQU8sQ0FBQ0UsRUFBQyxDQUFDLENBQUNFLENBQUMsQ0FBQyxHQUFHRSxJQUFJLENBQUNFLFlBQVksQ0FBQyxZQUFZLENBQUM7UUFDcEQsSUFBSSxDQUFDaEgsUUFBUSxDQUFDbUgsUUFBUSxDQUFDTCxJQUFJLEVBQUNKLEVBQUMsRUFBQyxZQUFZLENBQUM7TUFDL0M7SUFDSjtJQUNBLElBQUksQ0FBQ3BHLGNBQWMsQ0FBQzhHLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUk7SUFDdEMsSUFBSSxDQUFDQyxZQUFZLEVBQUUsQ0FBQztJQUNwQjNILFVBQVUsQ0FBQzRILE9BQU8sR0FBRyxJQUFJaEQsSUFBSSxFQUFFLENBQUNDLE9BQU8sRUFBRTtJQUN6QyxJQUFHNUUsRUFBRSxDQUFDaUUsR0FBRyxDQUFDQyxRQUFRLEtBQUtsRSxFQUFFLENBQUNpRSxHQUFHLENBQUNFLFdBQVcsRUFBQztNQUN0Q2MsTUFBTSxDQUFDMkMsRUFBRSxHQUFHLElBQUk7TUFHaEIsSUFBRzdILFVBQVUsQ0FBQzhILFlBQVksRUFBQztRQUN2QjVDLE1BQU0sQ0FBQzJDLEVBQUUsQ0FBQ0UsY0FBYyxFQUFFO1FBQzFCN0MsTUFBTSxDQUFDMkMsRUFBRSxDQUFDekUsUUFBUSxDQUFDOEIsTUFBTSxDQUFDMkMsRUFBRSxDQUFDRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQy9DO1FBQ0E7UUFDQTtNQUNKLENBQUMsTUFBSTtRQUNEbEksU0FBUyxDQUFDbUksbUJBQW1CLENBQUMsVUFBVUMsSUFBSSxFQUFFO1VBQzFDcEksU0FBUyxDQUFDcUksaUJBQWlCLENBQUNsSSxVQUFVLENBQUNtSSxRQUFRLEVBQUUsVUFBVUYsSUFBSSxFQUFFO1lBQzdEL0MsTUFBTSxDQUFDMkMsRUFBRSxDQUFDRSxjQUFjLEVBQUU7WUFDMUI3QyxNQUFNLENBQUMyQyxFQUFFLENBQUN6RSxRQUFRLENBQUM4QixNQUFNLENBQUMyQyxFQUFFLENBQUNFLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFDL0M7WUFDQTtZQUNBO1lBQ0EvSCxVQUFVLENBQUM4SCxZQUFZLEdBQUcsSUFBSTtVQUNsQyxDQUFDLENBQUM7UUFDTixDQUFDLENBQUM7TUFDTjtJQUNKO0VBQ0osQ0FBQztFQUVEN0MsWUFBWSxXQUFBQSxhQUFBLEVBQUU7SUFDVmpGLFVBQVUsQ0FBQzhFLFFBQVEsSUFBSSxHQUFHO0lBQzFCLElBQUksQ0FBQ2pCLFdBQVcsRUFBRTtJQUNsQmhFLFNBQVMsQ0FBQ2tGLFNBQVMsQ0FBQyxJQUFJLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQztFQUN0QyxDQUFDO0VBRUQxQixXQUFXLFdBQUFBLFlBQUEsRUFBRztJQUFDO0lBQ1gsSUFBSSxDQUFDdEIsT0FBTyxDQUFDcUcsTUFBTSxHQUFHLElBQUk7SUFDMUIsSUFBSSxDQUFDckcsT0FBTyxDQUFDc0csV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUNuQyxJQUFJLENBQUN0RyxPQUFPLENBQUN1RyxjQUFjLEVBQUU7SUFDN0IsSUFBSSxDQUFDdkcsT0FBTyxDQUFDd0csU0FBUyxDQUFDdEksRUFBRSxDQUFDdUksTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUN4RCxDQUFDO0VBQ0RiLFlBQVksV0FBQUEsYUFBQSxFQUFFO0lBQ1YsSUFBSWMsR0FBRyxHQUFHLElBQUk3RCxJQUFJLEVBQUU7SUFDcEIsSUFBSThELG1CQUFtQixHQUFHLElBQUk5RCxJQUFJLENBQUM2RCxHQUFHLENBQUNFLFdBQVcsRUFBRSxFQUFFRixHQUFHLENBQUNHLFFBQVEsRUFBRSxFQUFFSCxHQUFHLENBQUNJLE9BQU8sRUFBRSxDQUFDLENBQUNoRSxPQUFPLEVBQUU7SUFDOUY3RSxVQUFVLENBQUN5RyxRQUFRLEdBQUc1RyxTQUFTLENBQUMwSCxxQkFBcUIsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQ25FO0lBQ0EsSUFBR21CLG1CQUFtQixHQUFHMUksVUFBVSxDQUFDeUcsUUFBUSxFQUFDO01BQ3pDekcsVUFBVSxDQUFDOEksWUFBWSxJQUFJLENBQUM7TUFDNUJqSixTQUFTLENBQUM2RyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUMxRyxVQUFVLENBQUM4SSxZQUFZLENBQUM7SUFDdEU7SUFDQSxJQUFHOUksVUFBVSxDQUFDeUcsUUFBUSxJQUFJLENBQUMsRUFBQztNQUN4QjtJQUNKO0lBQ0EsSUFBSXNDLE9BQU8sR0FBR04sR0FBRyxDQUFDNUQsT0FBTyxFQUFFO0lBQzNCLElBQUltRSxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUNILE9BQU8sR0FBRy9JLFVBQVUsQ0FBQ3lHLFFBQVEsSUFBRSxLQUFLLENBQUM7SUFDbkU7SUFDQSxJQUFHdUMsV0FBVyxHQUFHLEVBQUUsRUFBQztNQUNoQmpKLFdBQVcsQ0FBQ29KLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztNQUM3QztJQUNKO0VBQ0osQ0FBQzs7RUFDRHBCLGNBQWMsRUFBRyxTQUFBQSxlQUFBLEVBQVU7SUFDdkI7SUFDQWxJLFNBQVMsQ0FBQ2tJLGNBQWMsQ0FBQyxJQUFJLENBQUM5RixTQUFTLENBQUM7RUFDNUMsQ0FBQztFQUNEO0VBQ0FtSCxPQUFPLFdBQUFBLFFBQUNDLEtBQUssRUFBQztJQUNWeEosU0FBUyxDQUFDeUoscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUlDLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxNQUFNO0lBQ3pCLElBQUcsSUFBSSxDQUFDdkksV0FBVyxJQUFJc0ksTUFBTSxFQUFDO01BQzFCdkQsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ25CcEcsU0FBUyxDQUFDNEosWUFBWSxDQUFDLEVBQUUsQ0FBQztJQUM5QixDQUFDLE1BQUssSUFBRyxJQUFJLENBQUN2SSxVQUFVLElBQUlxSSxNQUFNLEVBQUM7TUFDL0J2RCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDbkIsSUFBSSxDQUFDeUQsV0FBVyxDQUFDLElBQUksQ0FBQ2xHLGVBQWUsQ0FBQztJQUMxQyxDQUFDLE1BQUssSUFBRyxJQUFJLENBQUN4QyxPQUFPLElBQUl1SSxNQUFNLEVBQUM7TUFDNUJ4SixXQUFXLENBQUNvSixZQUFZLENBQUMsaUJBQWlCLENBQUM7SUFDL0MsQ0FBQyxNQUFLLElBQUcsSUFBSSxDQUFDdkgsT0FBTyxJQUFJMkgsTUFBTSxFQUFDO01BQzVCeEosV0FBVyxDQUFDb0osWUFBWSxDQUFDLGlCQUFpQixDQUFDO0lBQy9DLENBQUMsTUFBSyxJQUFHLElBQUksQ0FBQ3RILFlBQVksSUFBSTBILE1BQU0sRUFBQztNQUNqQ3hKLFdBQVcsQ0FBQ29KLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztJQUMvQyxDQUFDLE1BQUssSUFBRyxJQUFJLENBQUNwSSxRQUFRLElBQUl3SSxNQUFNLEVBQUM7TUFDN0J4SixXQUFXLENBQUNvSixZQUFZLENBQUMsa0JBQWtCLENBQUM7SUFDaEQsQ0FBQyxNQUFLLElBQUcsSUFBSSxDQUFDNUgsT0FBTyxJQUFJZ0ksTUFBTSxFQUFDO01BQzVCdkosVUFBVSxDQUFDd0UsY0FBYyxHQUFHLElBQUk7TUFDaEMzRSxTQUFTLENBQUM4SixZQUFZLEVBQUU7TUFDeEIzSixVQUFVLENBQUN1RSxTQUFTLEdBQUksSUFBSUssSUFBSSxFQUFFLENBQUVDLE9BQU8sRUFBRTtJQUNqRCxDQUFDLE1BQUssSUFBRyxJQUFJLENBQUM5QyxPQUFPLElBQUl3SCxNQUFNLEVBQUM7TUFDNUJ4SixXQUFXLENBQUNvSixZQUFZLENBQUMsa0JBQWtCLENBQUM7TUFDNUMsSUFBSSxDQUFDcEgsT0FBTyxDQUFDcUcsTUFBTSxHQUFHLEtBQUs7SUFDL0IsQ0FBQyxNQUFLLElBQUcsSUFBSSxDQUFDMUcsVUFBVSxJQUFJNkgsTUFBTSxFQUFDO01BQy9CMUosU0FBUyxDQUFDK0osV0FBVyxDQUFDNUosVUFBVSxDQUFDNkYsU0FBUyxDQUFDLENBQUM7TUFDNUM5RixXQUFXLENBQUNvSixZQUFZLENBQUMsWUFBWSxDQUFDO0lBQzFDLENBQUMsTUFBSyxJQUFHLElBQUksQ0FBQ25ILElBQUksSUFBSXVILE1BQU0sRUFBQztNQUN6QixJQUFJLENBQUN2SCxJQUFJLENBQUNvRyxNQUFNLEdBQUcsS0FBSztNQUN4QnJJLFdBQVcsQ0FBQ29KLFlBQVksQ0FBQyxZQUFZLENBQUM7SUFDMUMsQ0FBQyxNQUFLLElBQUcsSUFBSSxDQUFDbEgsU0FBUyxJQUFJc0gsTUFBTSxFQUFDO01BQzlCMUosU0FBUyxDQUFDZ0sscUJBQXFCLENBQUM3SixVQUFVLENBQUM4SixLQUFLLEVBQUU5SixVQUFVLENBQUMrSixJQUFJLENBQUM7SUFDdEUsQ0FBQyxNQUFLLElBQUcsSUFBSSxDQUFDcEksV0FBVyxJQUFJNEgsTUFBTSxFQUFDO01BQ2hDeEosV0FBVyxDQUFDb0osWUFBWSxDQUFDLGVBQWUsQ0FBQztJQUM3QyxDQUFDLE1BQUssSUFBRyxJQUFJLENBQUNqSCxPQUFPLElBQUlxSCxNQUFNLEVBQUM7TUFDNUJ4SixXQUFXLENBQUNvSixZQUFZLENBQUMsZUFBZSxDQUFDO0lBQzdDLENBQUMsTUFBSyxJQUFJLElBQUksQ0FBQ2hILEtBQUssSUFBSW9ILE1BQU0sRUFBQztNQUMzQnZELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztNQUN0QmxHLFdBQVcsQ0FBQ29KLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQzs7TUFFMUM7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUNKO0VBQ0osQ0FBQztFQUdEO0VBQ0FhLGNBQWMsV0FBQUEsZUFBQ0MsTUFBTSxFQUFDO0lBQ2xCLEtBQUksSUFBSWxELENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQy9HLFVBQVUsQ0FBQ2dILEdBQUcsRUFBQ0QsQ0FBQyxFQUFFLEVBQUM7TUFDN0IsS0FBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNqSCxVQUFVLENBQUNrSCxHQUFHLEVBQUNELENBQUMsRUFBRSxFQUFDO1FBQzdCLElBQUcsSUFBSSxDQUFDSixPQUFPLENBQUNFLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ2dELE1BQU0sSUFBSUEsTUFBTSxFQUFDO1VBQ25DLElBQUksQ0FBQ3BELE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLENBQUMsQ0FBQyxDQUFDaUQsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN2QztNQUNKO0lBQ0o7RUFDSixDQUFDO0VBQ0Q7RUFDQXJILFlBQVksRUFBRSxTQUFBQSxhQUFVd0csS0FBSyxFQUFFO0lBQzNCLElBQUljLFVBQVUsR0FBR2QsS0FBSyxDQUFDZSxLQUFLLENBQUNDLFdBQVcsRUFBRTtJQUMxQyxJQUFJLENBQUMxSixjQUFjLENBQUM4RyxJQUFJLENBQUNZLFdBQVcsQ0FBQyxJQUFJLENBQUNoSSxRQUFRLENBQUNpSyxvQkFBb0IsQ0FBQ0gsVUFBVSxDQUFDLENBQUM7SUFDcEY7RUFDSixDQUFDOztFQUVEO0VBQ0F4SCxZQUFZLEVBQUUsU0FBQUEsYUFBVTBHLEtBQUssRUFBRTtJQUMzQixJQUFJYyxVQUFVLEdBQUdkLEtBQUssQ0FBQ2UsS0FBSyxDQUFDQyxXQUFXLEVBQUU7SUFDMUM7SUFDQSxJQUFJLENBQUN4SixnQkFBZ0IsR0FBRyxJQUFJO0lBQzVCLEtBQUksSUFBSWtHLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQy9HLFVBQVUsQ0FBQ2dILEdBQUcsRUFBQ0QsQ0FBQyxFQUFFLEVBQUM7TUFDN0IsS0FBSSxJQUFJRSxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNqSCxVQUFVLENBQUNrSCxHQUFHLEVBQUNELENBQUMsRUFBRSxFQUFDO1FBQzdCLElBQUcsSUFBSSxDQUFDSixPQUFPLENBQUNFLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ1EsSUFBSSxDQUFDOEMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDQyxxQkFBcUIsRUFBRSxDQUFDQyxRQUFRLENBQUNOLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQ3RELE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLENBQUMsQ0FBQyxDQUFDZ0QsTUFBTSxJQUFJLENBQUMsRUFBQztVQUMzSCxJQUFJLENBQUNwSixnQkFBZ0IsR0FBRyxJQUFJLENBQUNnRyxPQUFPLENBQUNFLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUM7VUFDMUMsSUFBSSxDQUFDSixPQUFPLENBQUNFLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ2lELGFBQWEsQ0FBQyxDQUFDLENBQUM7VUFDbkMsSUFBSSxDQUFDdkosY0FBYyxDQUFDOEcsSUFBSSxDQUFDVyxNQUFNLEdBQUcsSUFBSTtVQUN0QyxJQUFJLENBQUN6SCxjQUFjLENBQUM4RyxJQUFJLENBQUNZLFdBQVcsQ0FBQyxJQUFJLENBQUNoSSxRQUFRLENBQUNpSyxvQkFBb0IsQ0FBQ0gsVUFBVSxDQUFDLENBQUM7VUFDcEZwSyxXQUFXLENBQUMySyxjQUFjLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQzdELE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLENBQUMsQ0FBQyxDQUFDZ0QsTUFBTSxFQUFDLElBQUksQ0FBQ3RKLGNBQWMsQ0FBQztVQUV0RixJQUFJLENBQUNxSixjQUFjLENBQUMsSUFBSSxDQUFDbkQsT0FBTyxDQUFDRSxDQUFDLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNnRCxNQUFNLENBQUM7VUFDOUMsT0FBTyxJQUFJO1FBQ2Y7TUFDSjtJQUNKO0lBQ0EsT0FBTyxLQUFLO0VBQ2hCLENBQUM7RUFDRDtFQUNBaEgsYUFBYSxXQUFBQSxjQUFDb0csS0FBSyxFQUFDO0lBQUEsSUFBQXNCLE1BQUE7SUFDaEIsSUFBRyxJQUFJLENBQUM5SixnQkFBZ0IsSUFBSSxJQUFJLEVBQUM7TUFDN0I7SUFDSjtJQUNBLElBQUksQ0FBQ0YsY0FBYyxDQUFDOEcsSUFBSSxDQUFDYyxTQUFTLENBQUN0SSxFQUFFLENBQUMySyxRQUFRLENBQUMzSyxFQUFFLENBQUM0SyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQ2hLLGdCQUFnQixDQUFDNEcsSUFBSSxDQUFDcUQsQ0FBQyxFQUFFLElBQUksQ0FBQ2pLLGdCQUFnQixDQUFDNEcsSUFBSSxDQUFDc0QsQ0FBQyxDQUFDLEVBQUU5SyxFQUFFLENBQUMrSyxRQUFRLENBQUMsWUFBTTtNQUN6SUwsTUFBSSxDQUFDOUosZ0JBQWdCLENBQUNxSixhQUFhLENBQUMsQ0FBQyxDQUFDO01BQ3RDUyxNQUFJLENBQUNoSyxjQUFjLENBQUM4RyxJQUFJLENBQUNXLE1BQU0sR0FBRyxLQUFLO0lBQzNDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDUixDQUFDO0VBQ0Q7RUFDQTtFQUNBc0IsV0FBVyxXQUFBQSxZQUFDNUQsS0FBSyxFQUFDO0lBQ2RqRyxTQUFTLENBQUN5SixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBR3RKLFVBQVUsQ0FBQzZGLFNBQVMsR0FBRzdGLFVBQVUsQ0FBQzJELGNBQWMsQ0FBQ21DLEtBQUssQ0FBQyxFQUFDO01BQ3ZERSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDbkJwRyxTQUFTLENBQUM0SixZQUFZLENBQUMsRUFBRSxDQUFDO01BQzFCMUosV0FBVyxDQUFDb0osWUFBWSxDQUFDLGtCQUFrQixDQUFDO01BQzVDLE9BQU8sS0FBSztJQUNoQjtJQUNBLElBQUcsSUFBSSxDQUFDcEYsTUFBTSxFQUFDO01BQ1gvRCxVQUFVLENBQUNpTCxnQkFBZ0IsR0FBR25GLEtBQUssR0FBQyxDQUFDO01BQ3JDL0YsV0FBVyxDQUFDb0osWUFBWSxDQUFDLG9CQUFvQixDQUFDO01BQzlDLElBQUksQ0FBQ3BGLE1BQU0sR0FBRyxLQUFLO0lBQ3ZCLENBQUMsTUFBSTtNQUNELElBQUcsSUFBSSxDQUFDbUgsb0JBQW9CLENBQUNwRixLQUFLLENBQUMsRUFBQztRQUNoQzlGLFVBQVUsQ0FBQzZGLFNBQVMsSUFBSTdGLFVBQVUsQ0FBQzJELGNBQWMsQ0FBQ21DLEtBQUssQ0FBQztRQUN4RCxJQUFHQSxLQUFLLElBQUksQ0FBQyxFQUFDO1VBQ1Y5RixVQUFVLENBQUMyRCxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUdzRixJQUFJLENBQUNDLEtBQUssQ0FBQ2xKLFVBQVUsQ0FBQzJELGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbEYsQ0FBQyxNQUFJO1VBQ0QzRCxVQUFVLENBQUMyRCxjQUFjLENBQUNtQyxLQUFLLENBQUMsR0FBR21ELElBQUksQ0FBQ0MsS0FBSyxDQUFDbEosVUFBVSxDQUFDMkQsY0FBYyxDQUFDbUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzNGO1FBQ0FqRyxTQUFTLENBQUM2RyxxQkFBcUIsQ0FBQyxnQkFBZ0IsR0FBQ1osS0FBSyxFQUFDOUYsVUFBVSxDQUFDMkQsY0FBYyxDQUFDbUMsS0FBSyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDbEMsWUFBWSxFQUFFO1FBQ25CLE9BQU8sSUFBSTtNQUNmLENBQUMsTUFBSTtRQUNELE9BQU8sS0FBSztNQUNoQjtJQUNKO0VBQ0osQ0FBQztFQUNEO0VBQ0FiLFlBQVksRUFBRSxTQUFBQSxhQUFVc0csS0FBSyxFQUFFO0lBQUEsSUFBQThCLE1BQUE7SUFDM0IsS0FBSyxJQUFJcEUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHL0csVUFBVSxDQUFDZ0gsR0FBRyxFQUFFRCxDQUFDLEVBQUUsRUFBRTtNQUNyQyxLQUFLLElBQUlFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR2pILFVBQVUsQ0FBQ2tILEdBQUcsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7UUFDckMsSUFBSSxJQUFJLENBQUNKLE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ3BHLGdCQUFnQixFQUFFO1VBQzdDLElBQUksQ0FBQ2dHLE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLENBQUMsQ0FBQyxDQUFDaUQsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN2QztNQUNKO0lBQ0o7SUFDQSxJQUFJQyxVQUFVLEdBQUdkLEtBQUssQ0FBQ2UsS0FBSyxDQUFDQyxXQUFXLEVBQUU7SUFDMUM7SUFDQSxJQUFJZSxRQUFRLEdBQUcsR0FBRztJQUFDLElBQUFDLEtBQUEsWUFBQUEsTUFBQUMsR0FBQSxFQUNzQjtNQUFBLElBQUFDLE1BQUEsWUFBQUEsT0FBQUMsRUFBQSxFQUNJO1FBQ3JDLElBQUlMLE1BQUksQ0FBQ3RLLGdCQUFnQixJQUFJc0ssTUFBSSxDQUFDdEUsT0FBTyxDQUFDRSxHQUFDLENBQUMsQ0FBQ0UsRUFBQyxDQUFDLENBQUNRLElBQUksQ0FBQzhDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQ0MscUJBQXFCLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDTixVQUFVLENBQUMsSUFBSWdCLE1BQUksQ0FBQ3RFLE9BQU8sQ0FBQ0UsR0FBQyxDQUFDLENBQUNFLEVBQUMsQ0FBQyxJQUFJa0UsTUFBSSxDQUFDdEssZ0JBQWdCLEVBQUU7VUFDbkssSUFBSXNLLE1BQUksQ0FBQ3RFLE9BQU8sQ0FBQ0UsR0FBQyxDQUFDLENBQUNFLEVBQUMsQ0FBQyxDQUFDZ0QsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUFDO1lBQ2pDa0IsTUFBSSxDQUFDdEUsT0FBTyxDQUFDRSxHQUFDLENBQUMsQ0FBQ0UsRUFBQyxDQUFDLENBQUNnRCxNQUFNLEdBQUdrQixNQUFJLENBQUN0SyxnQkFBZ0IsQ0FBQ29KLE1BQU07WUFDeERrQixNQUFJLENBQUN0SyxnQkFBZ0IsQ0FBQ29KLE1BQU0sR0FBRyxDQUFDO1lBQ2hDa0IsTUFBSSxDQUFDdEUsT0FBTyxDQUFDRSxHQUFDLENBQUMsQ0FBQ0UsRUFBQyxDQUFDLENBQUN3RSxRQUFRLEVBQUU7WUFDN0JOLE1BQUksQ0FBQ3RFLE9BQU8sQ0FBQ0UsR0FBQyxDQUFDLENBQUNFLEVBQUMsQ0FBQyxDQUFDaUQsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNuQ2lCLE1BQUksQ0FBQ3hLLGNBQWMsQ0FBQzhHLElBQUksQ0FBQ2MsU0FBUyxDQUFDdEksRUFBRSxDQUFDMkssUUFBUSxDQUFDM0ssRUFBRSxDQUFDNEssTUFBTSxDQUFDTyxRQUFRLEVBQUVELE1BQUksQ0FBQ3RFLE9BQU8sQ0FBQ0UsR0FBQyxDQUFDLENBQUNFLEVBQUMsQ0FBQyxDQUFDUSxJQUFJLENBQUNxRCxDQUFDLEVBQUVLLE1BQUksQ0FBQ3RFLE9BQU8sQ0FBQ0UsR0FBQyxDQUFDLENBQUNFLEVBQUMsQ0FBQyxDQUFDUSxJQUFJLENBQUNzRCxDQUFDLENBQUMsRUFBRTlLLEVBQUUsQ0FBQytLLFFBQVEsQ0FBQyxZQUFNO2NBQ3hJRyxNQUFJLENBQUN0RSxPQUFPLENBQUNFLEdBQUMsQ0FBQyxDQUFDRSxFQUFDLENBQUMsQ0FBQ2lELGFBQWEsQ0FBQyxDQUFDLENBQUM7Y0FDbkNpQixNQUFJLENBQUN4SyxjQUFjLENBQUM4RyxJQUFJLENBQUNXLE1BQU0sR0FBRyxLQUFLO1lBQzNDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDUixDQUFDLE1BQU0sSUFBSStDLE1BQUksQ0FBQ3RFLE9BQU8sQ0FBQ0UsR0FBQyxDQUFDLENBQUNFLEVBQUMsQ0FBQyxDQUFDZ0QsTUFBTSxJQUFJa0IsTUFBSSxDQUFDdEssZ0JBQWdCLENBQUNvSixNQUFNLEVBQUU7WUFBQztZQUNuRSxJQUFJa0IsTUFBSSxDQUFDdEUsT0FBTyxDQUFDRSxHQUFDLENBQUMsQ0FBQ0UsRUFBQyxDQUFDLENBQUNnRCxNQUFNLEdBQUcsRUFBRSxFQUFFO2NBQ2hDcEssU0FBUyxDQUFDeUoscUJBQXFCLENBQUMsQ0FBQyxDQUFDO2NBQ2xDNkIsTUFBSSxDQUFDdEUsT0FBTyxDQUFDRSxHQUFDLENBQUMsQ0FBQ0UsRUFBQyxDQUFDLENBQUNnRCxNQUFNLEVBQUU7Y0FDM0I7Y0FDQWtCLE1BQUksQ0FBQ3RFLE9BQU8sQ0FBQ0UsR0FBQyxDQUFDLENBQUNFLEVBQUMsQ0FBQyxDQUFDeUUsYUFBYSxFQUFFO2NBQ2xDLElBQUlQLE1BQUksQ0FBQ3RFLE9BQU8sQ0FBQ0UsR0FBQyxDQUFDLENBQUNFLEVBQUMsQ0FBQyxDQUFDZ0QsTUFBTSxHQUFHakssVUFBVSxDQUFDaUUsa0JBQWtCLEVBQUU7Z0JBQUM7Z0JBQzVEakUsVUFBVSxDQUFDaUUsa0JBQWtCLEdBQUdrSCxNQUFJLENBQUN0RSxPQUFPLENBQUNFLEdBQUMsQ0FBQyxDQUFDRSxFQUFDLENBQUMsQ0FBQ2dELE1BQU07Z0JBQ3pEcEssU0FBUyxDQUFDNkcscUJBQXFCLENBQUMsb0JBQW9CLEVBQUUxRyxVQUFVLENBQUNpRSxrQkFBa0IsQ0FBQztnQkFDcEZqRSxVQUFVLENBQUNpTCxnQkFBZ0IsR0FBR2pMLFVBQVUsQ0FBQ2lFLGtCQUFrQjtnQkFDM0QrQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBQ2pHLFVBQVUsQ0FBQ2lFLGtCQUFrQixDQUFDO2dCQUM1RGxFLFdBQVcsQ0FBQ29KLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztnQkFDNUNnQyxNQUFJLENBQUNySixXQUFXLENBQUMyQixNQUFNLEdBQUd6RCxVQUFVLENBQUNnRSxPQUFPLENBQUNoRSxVQUFVLENBQUNpRSxrQkFBa0IsR0FBQyxDQUFDLENBQUM7Z0JBQzdFcEUsU0FBUyxDQUFDNEosWUFBWSxDQUFDLEVBQUUsQ0FBQztnQkFDMUI1SixTQUFTLENBQUMrSixXQUFXLENBQUM1SixVQUFVLENBQUM2RixTQUFTLENBQUMsQ0FBQztnQkFDNUM7Z0JBQ0E7Z0JBQ0E7Y0FDSixDQUFDLE1BQU07Z0JBQ0g7Z0JBQ0E7Y0FBQTtjQUVKaEcsU0FBUyxDQUFDNkcscUJBQXFCLENBQUMsWUFBWSxFQUFFMUcsVUFBVSxDQUFDaUUsa0JBQWtCLENBQUM7Y0FDNUVrSCxNQUFJLENBQUN4SyxjQUFjLENBQUM4RyxJQUFJLENBQUNjLFNBQVMsQ0FBQ3RJLEVBQUUsQ0FBQzJLLFFBQVEsQ0FBQzNLLEVBQUUsQ0FBQzRLLE1BQU0sQ0FBQ08sUUFBUSxFQUFFRCxNQUFJLENBQUN0RSxPQUFPLENBQUNFLEdBQUMsQ0FBQyxDQUFDRSxFQUFDLENBQUMsQ0FBQ1EsSUFBSSxDQUFDcUQsQ0FBQyxFQUFFSyxNQUFJLENBQUN0RSxPQUFPLENBQUNFLEdBQUMsQ0FBQyxDQUFDRSxFQUFDLENBQUMsQ0FBQ1EsSUFBSSxDQUFDc0QsQ0FBQyxDQUFDLEVBQUU5SyxFQUFFLENBQUMrSyxRQUFRLENBQUMsWUFBTTtnQkFDeElHLE1BQUksQ0FBQ3hLLGNBQWMsQ0FBQzhHLElBQUksQ0FBQ1csTUFBTSxHQUFHLEtBQUs7Y0FDM0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNKK0MsTUFBSSxDQUFDdEssZ0JBQWdCLENBQUNvSixNQUFNLEdBQUcsQ0FBQztjQUNoQ3BLLFNBQVMsQ0FBQzZHLHFCQUFxQixDQUFDLDBCQUEwQixFQUFFN0csU0FBUyxDQUFDMEgscUJBQXFCLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEksQ0FBQyxNQUFNO2NBQ0h2QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7Y0FDckJwRyxTQUFTLENBQUM0SixZQUFZLENBQUMsRUFBRSxDQUFDO2NBQzFCMEIsTUFBSSxDQUFDeEssY0FBYyxDQUFDOEcsSUFBSSxDQUFDYyxTQUFTLENBQUN0SSxFQUFFLENBQUMySyxRQUFRLENBQUMzSyxFQUFFLENBQUM0SyxNQUFNLENBQUNPLFFBQVEsRUFBRUQsTUFBSSxDQUFDdEssZ0JBQWdCLENBQUM0RyxJQUFJLENBQUNxRCxDQUFDLEVBQUVLLE1BQUksQ0FBQ3RLLGdCQUFnQixDQUFDNEcsSUFBSSxDQUFDc0QsQ0FBQyxDQUFDLEVBQUU5SyxFQUFFLENBQUMrSyxRQUFRLENBQUMsWUFBTTtnQkFDOUlHLE1BQUksQ0FBQ3RLLGdCQUFnQixDQUFDcUosYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDdENpQixNQUFJLENBQUN4SyxjQUFjLENBQUM4RyxJQUFJLENBQUNXLE1BQU0sR0FBRyxLQUFLO2NBQzNDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FBQztnQkFBQXVELENBQUE7a0JBQUFBLENBQUE7Z0JBQUE7Y0FBQTtZQUVUO1VBQ0osQ0FBQyxNQUFNO1lBQ0gsSUFBSTFCLE1BQU0sR0FBR2tCLE1BQUksQ0FBQ3RFLE9BQU8sQ0FBQ0UsR0FBQyxDQUFDLENBQUNFLEVBQUMsQ0FBQyxDQUFDZ0QsTUFBTTtZQUN0Q2tCLE1BQUksQ0FBQ3RFLE9BQU8sQ0FBQ0UsR0FBQyxDQUFDLENBQUNFLEVBQUMsQ0FBQyxDQUFDZ0QsTUFBTSxHQUFHa0IsTUFBSSxDQUFDdEssZ0JBQWdCLENBQUNvSixNQUFNO1lBQ3hEa0IsTUFBSSxDQUFDdEUsT0FBTyxDQUFDRSxHQUFDLENBQUMsQ0FBQ0UsRUFBQyxDQUFDLENBQUN3RSxRQUFRLEVBQUU7WUFDN0JOLE1BQUksQ0FBQ3RFLE9BQU8sQ0FBQ0UsR0FBQyxDQUFDLENBQUNFLEVBQUMsQ0FBQyxDQUFDaUQsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNuQ2lCLE1BQUksQ0FBQ3RLLGdCQUFnQixDQUFDb0osTUFBTSxHQUFHQSxNQUFNO1lBQ3JDa0IsTUFBSSxDQUFDeEssY0FBYyxDQUFDOEcsSUFBSSxDQUFDYyxTQUFTLENBQUN0SSxFQUFFLENBQUMySyxRQUFRLENBQUMzSyxFQUFFLENBQUM0SyxNQUFNLENBQUNPLFFBQVEsRUFBRUQsTUFBSSxDQUFDdEUsT0FBTyxDQUFDRSxHQUFDLENBQUMsQ0FBQ0UsRUFBQyxDQUFDLENBQUNRLElBQUksQ0FBQ3FELENBQUMsRUFBRUssTUFBSSxDQUFDdEUsT0FBTyxDQUFDRSxHQUFDLENBQUMsQ0FBQ0UsRUFBQyxDQUFDLENBQUNRLElBQUksQ0FBQ3NELENBQUMsQ0FBQyxFQUFFOUssRUFBRSxDQUFDK0ssUUFBUSxDQUFDLFlBQU07Y0FDeElHLE1BQUksQ0FBQ3RFLE9BQU8sQ0FBQ0UsR0FBQyxDQUFDLENBQUNFLEVBQUMsQ0FBQyxDQUFDaUQsYUFBYSxDQUFDLENBQUMsQ0FBQztjQUNuQ2lCLE1BQUksQ0FBQ3hLLGNBQWMsQ0FBQzhHLElBQUksQ0FBQ1csTUFBTSxHQUFHLEtBQUs7WUFDM0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNSO1VBQ0ErQyxNQUFJLENBQUN0SyxnQkFBZ0IsQ0FBQzRLLFFBQVEsRUFBRTtVQUNoQ04sTUFBSSxDQUFDdEssZ0JBQWdCLENBQUNxSixhQUFhLENBQUMsQ0FBQyxDQUFDO1VBQ3RDaUIsTUFBSSxDQUFDUyxXQUFXLEVBQUU7VUFBQztZQUFBRCxDQUFBO2NBQUFBLENBQUE7WUFBQTtVQUFBO1FBRXZCO01BQ0osQ0FBQztNQWhFRCxLQUFLLElBQUkxRSxFQUFDLEdBQUcsQ0FBQyxFQUFFQSxFQUFDLEdBQUdqSCxVQUFVLENBQUNrSCxHQUFHLEVBQUVELEVBQUMsRUFBRTtRQUFBLElBQUE0RSxLQUFBLEdBQUFOLE1BQUEsQ0FBQUMsRUFBQTtRQUFBLFdBQUFLLEtBQUEsc0JBQUFBLEtBQUEsQ0FBQUYsQ0FBQTtNQUFBO0lBaUUzQyxDQUFDO0lBbEVELEtBQUssSUFBSTVFLEdBQUMsR0FBRyxDQUFDLEVBQUVBLEdBQUMsR0FBRy9HLFVBQVUsQ0FBQ2dILEdBQUcsRUFBRUQsR0FBQyxFQUFFO01BQUEsSUFBQStFLElBQUEsR0FBQVQsS0FBQSxDQUFBQyxHQUFBO01BQUEsV0FBQVEsSUFBQSxzQkFBQUEsSUFBQSxDQUFBSCxDQUFBO0lBQUE7SUFtRXZDO0lBQ0EsSUFBSSxJQUFJLENBQUM5SyxnQkFBZ0IsSUFBSSxJQUFJLENBQUNJLFdBQVcsQ0FBQ3VKLHFCQUFxQixFQUFFLENBQUNDLFFBQVEsQ0FBQ04sVUFBVSxDQUFDLEVBQUU7TUFDeEZ0SyxTQUFTLENBQUN5SixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7TUFDbEMsSUFBSSxDQUFDM0ksY0FBYyxDQUFDOEcsSUFBSSxDQUFDVyxNQUFNLEdBQUcsS0FBSztNQUN2QyxJQUFJLENBQUN2SCxnQkFBZ0IsQ0FBQ29KLE1BQU0sR0FBRyxDQUFDO01BQ2hDLElBQUksQ0FBQ3BKLGdCQUFnQixDQUFDNEssUUFBUSxFQUFFO01BQ2hDLElBQUksQ0FBQ0csV0FBVyxFQUFFO01BQ2xCO0lBQ0o7SUFDQSxJQUFJLElBQUksQ0FBQy9LLGdCQUFnQixFQUFFO01BQ3ZCLElBQUksQ0FBQ0YsY0FBYyxDQUFDOEcsSUFBSSxDQUFDYyxTQUFTLENBQUN0SSxFQUFFLENBQUMySyxRQUFRLENBQUMzSyxFQUFFLENBQUM0SyxNQUFNLENBQUNPLFFBQVEsRUFBRSxJQUFJLENBQUN2SyxnQkFBZ0IsQ0FBQzRHLElBQUksQ0FBQ3FELENBQUMsRUFBRSxJQUFJLENBQUNqSyxnQkFBZ0IsQ0FBQzRHLElBQUksQ0FBQ3NELENBQUMsQ0FBQyxFQUFFOUssRUFBRSxDQUFDK0ssUUFBUSxDQUFDLFlBQU07UUFDOUlHLE1BQUksQ0FBQ3RLLGdCQUFnQixDQUFDcUosYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN0Q2lCLE1BQUksQ0FBQ3hLLGNBQWMsQ0FBQzhHLElBQUksQ0FBQ1csTUFBTSxHQUFHLEtBQUs7TUFDM0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSO0VBQ0osQ0FBQztFQUNEO0VBQ0EyRCxXQUFXLFdBQUFBLFlBQUNqRyxLQUFLLEVBQUM7SUFDZCxJQUFHLElBQUksQ0FBQ29GLG9CQUFvQixDQUFDcEYsS0FBSyxDQUFDLEVBQUM7TUFDaEM5RixVQUFVLENBQUM2RixTQUFTLElBQUk3RixVQUFVLENBQUMyRCxjQUFjLENBQUNtQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO01BQzFELElBQUdBLEtBQUssSUFBSSxDQUFDLEVBQUM7UUFDVjlGLFVBQVUsQ0FBQzJELGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBR3NGLElBQUksQ0FBQ0MsS0FBSyxDQUFDbEosVUFBVSxDQUFDMkQsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztNQUNsRixDQUFDLE1BQUk7UUFDRDNELFVBQVUsQ0FBQzJELGNBQWMsQ0FBQ21DLEtBQUssR0FBQyxDQUFDLENBQUMsR0FBR21ELElBQUksQ0FBQ0MsS0FBSyxDQUFDbEosVUFBVSxDQUFDMkQsY0FBYyxDQUFDbUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztNQUMvRjtNQUNBakcsU0FBUyxDQUFDNkcscUJBQXFCLENBQUMsZ0JBQWdCLEdBQUNaLEtBQUssR0FBQyxDQUFDLEVBQUM5RixVQUFVLENBQUMyRCxjQUFjLENBQUNtQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUM7TUFDNUYsSUFBSSxDQUFDbEMsWUFBWSxFQUFFO01BQ25CLE9BQU8sSUFBSTtJQUNmLENBQUMsTUFBSTtNQUNELE9BQU8sS0FBSztJQUNoQjtFQUNKLENBQUM7RUFDRDtFQUNBc0gsb0JBQW9CLFdBQUFBLHFCQUFDcEYsS0FBSyxFQUFDO0lBQUEsSUFBQWtHLE1BQUE7SUFBQSxJQUFBQyxNQUFBLFlBQUFBLE9BQUFsRixDQUFBLEVBQ1c7TUFBQSxJQUFBbUYsTUFBQSxZQUFBQSxPQUFBakYsQ0FBQSxFQUNHO1FBQzdCLElBQUcrRSxNQUFJLENBQUNuRixPQUFPLENBQUNFLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ2dELE1BQU0sSUFBSSxDQUFDLEVBQUM7VUFDOUIrQixNQUFJLENBQUNuRixPQUFPLENBQUNFLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ2lELGFBQWEsQ0FBQyxDQUFDLENBQUM7VUFDbkM4QixNQUFJLENBQUNyTCxjQUFjLENBQUM4RyxJQUFJLENBQUNXLE1BQU0sR0FBRyxJQUFJO1VBQ3RDNEQsTUFBSSxDQUFDckwsY0FBYyxDQUFDOEcsSUFBSSxDQUFDWSxXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxHQUFHLENBQUM7VUFDOUN0SSxXQUFXLENBQUMySyxjQUFjLENBQUMsWUFBWSxHQUFDNUUsS0FBSyxFQUFDa0csTUFBSSxDQUFDckwsY0FBYyxDQUFDO1VBQ2xFcUwsTUFBSSxDQUFDckwsY0FBYyxDQUFDOEcsSUFBSSxDQUFDYyxTQUFTLENBQUN0SSxFQUFFLENBQUMySyxRQUFRLENBQUMzSyxFQUFFLENBQUM0SyxNQUFNLENBQUMsR0FBRyxFQUFDbUIsTUFBSSxDQUFDbkYsT0FBTyxDQUFDRSxDQUFDLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNRLElBQUksQ0FBQzBFLFdBQVcsRUFBRSxDQUFDLEVBQUNsTSxFQUFFLENBQUMrSyxRQUFRLENBQUMsWUFBSTtZQUNoSGdCLE1BQUksQ0FBQ25GLE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLENBQUMsQ0FBQyxDQUFDaUQsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNuQzhCLE1BQUksQ0FBQ3JMLGNBQWMsQ0FBQzhHLElBQUksQ0FBQ1csTUFBTSxHQUFHLEtBQUs7VUFDM0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNKNEQsTUFBSSxDQUFDbkYsT0FBTyxDQUFDRSxDQUFDLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNnRCxNQUFNLEdBQUduRSxLQUFLO1VBQ2pDa0csTUFBSSxDQUFDbkYsT0FBTyxDQUFDRSxDQUFDLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUN3RSxRQUFRLEVBQUU7VUFDN0I1TCxTQUFTLENBQUM2RyxxQkFBcUIsQ0FBQyxTQUFTLEdBQUdLLENBQUMsR0FBR0UsQ0FBQyxFQUFFK0UsTUFBSSxDQUFDbkYsT0FBTyxDQUFDRSxDQUFDLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUNnRCxNQUFNLENBQUM7VUFDN0U7VUFBQTtZQUFBMEIsQ0FBQTtjQUFBQSxDQUFBLEVBQ087WUFBSTtVQUFBO1FBQ2Y7TUFDSixDQUFDO01BaEJELEtBQUksSUFBSTFFLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ2pILFVBQVUsQ0FBQ2tILEdBQUcsRUFBQ0QsQ0FBQyxFQUFFO1FBQUEsSUFBQW1GLEtBQUEsR0FBQUYsTUFBQSxDQUFBakYsQ0FBQTtRQUFBLFdBQUFtRixLQUFBLHNCQUFBQSxLQUFBLENBQUFULENBQUE7TUFBQTtJQWlCcEMsQ0FBQztJQWxCRCxLQUFJLElBQUk1RSxDQUFDLEdBQUUsQ0FBQyxFQUFDQSxDQUFDLEdBQUMvRyxVQUFVLENBQUNnSCxHQUFHLEVBQUNELENBQUMsRUFBRTtNQUFBLElBQUFzRixLQUFBLEdBQUFKLE1BQUEsQ0FBQWxGLENBQUE7TUFBQSxXQUFBc0YsS0FBQSxzQkFBQUEsS0FBQSxDQUFBVixDQUFBO0lBQUE7SUFtQmpDM0YsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO0lBQ3hCcEcsU0FBUyxDQUFDNEosWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6QixPQUFPLEtBQUs7RUFDaEIsQ0FBQztFQUVEO0VBQ0FtQyxXQUFXLFdBQUFBLFlBQUEsRUFBRztJQUNWLEtBQUssSUFBSTdFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRy9HLFVBQVUsQ0FBQ2dILEdBQUcsRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDckMsS0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdqSCxVQUFVLENBQUNrSCxHQUFHLEVBQUVELENBQUMsRUFBRSxFQUFFO1FBQ3JDcEgsU0FBUyxDQUFDNkcscUJBQXFCLENBQUMsU0FBUyxHQUFHSyxDQUFDLEdBQUdFLENBQUMsRUFBRSxJQUFJLENBQUNKLE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLENBQUMsQ0FBQyxDQUFDZ0QsTUFBTSxDQUFDO01BQ2pGO0lBQ0o7RUFDSixDQUFDO0VBQ0Q7RUFDQXFDLGFBQWEsV0FBQUEsY0FBQSxFQUFFO0lBQ1gsSUFBSXhHLEtBQUssR0FBRzlGLFVBQVUsQ0FBQ2lFLGtCQUFrQixHQUFDLENBQUM7SUFDM0MsSUFBRzZCLEtBQUssR0FBRyxDQUFDLEVBQUM7TUFDVCxLQUFJLElBQUl5RyxRQUFRLEdBQUd6RyxLQUFLLEVBQUN5RyxRQUFRLEdBQUMsQ0FBQyxFQUFDQSxRQUFRLEVBQUUsRUFBQztRQUMzQyxJQUFHdk0sVUFBVSxDQUFDNkYsU0FBUyxHQUFHN0YsVUFBVSxDQUFDMkQsY0FBYyxDQUFDNEksUUFBUSxDQUFDLEVBQUM7VUFDMUQsSUFBR0EsUUFBUSxHQUFDekcsS0FBSyxFQUFDO1lBQ2QsSUFBSTBHLElBQUksR0FBR3ZELElBQUksQ0FBQ3dELE1BQU0sRUFBRTtZQUN4QixJQUFHRCxJQUFJLEdBQUMsR0FBRyxFQUFDO2NBQ1IsSUFBSSxDQUFDekksTUFBTSxHQUFHLElBQUk7WUFDdEI7VUFDSjtVQUNBLElBQUksQ0FBQ1AsZUFBZSxHQUFHK0ksUUFBUTtVQUMvQixJQUFJLENBQUNwTCxRQUFRLENBQUNzQyxNQUFNLEdBQUcsS0FBSyxHQUFDOEksUUFBUSxDQUFDO1VBQ3RDLElBQUksQ0FBQ2xMLFlBQVksQ0FBQ29DLE1BQU0sR0FBRzVELFNBQVMsQ0FBQzZELGVBQWUsQ0FBQzFELFVBQVUsQ0FBQzJELGNBQWMsQ0FBQzRJLFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFDMUY7UUFDSjtNQUNKO0lBQ0osQ0FBQyxNQUFJO01BQ0QsSUFBSSxDQUFDL0ksZUFBZSxHQUFHLENBQUM7TUFDeEIsSUFBSSxDQUFDbkMsWUFBWSxDQUFDb0MsTUFBTSxHQUFHNUQsU0FBUyxDQUFDNkQsZUFBZSxDQUFDMUQsVUFBVSxDQUFDMkQsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2xGLElBQUksQ0FBQ3hDLFFBQVEsQ0FBQ3NDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDbEM7RUFDSixDQUFDO0VBQ0Q7RUFDQWlKLFdBQVcsV0FBQUEsWUFBQzVHLEtBQUssRUFBQztJQUNkakcsU0FBUyxDQUFDeUoscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUd0SixVQUFVLENBQUM4RSxRQUFRLEdBQUc5RSxVQUFVLENBQUMyTSxjQUFjLENBQUM3RyxLQUFLLENBQUMsRUFBQztNQUN0REUsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO01BQ25CcEcsU0FBUyxDQUFDNEosWUFBWSxDQUFDLENBQUMsQ0FBQztNQUN6QjtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBLE9BQU8sS0FBSztJQUNoQjtJQUNBLElBQUcsSUFBSSxDQUFDeUIsb0JBQW9CLENBQUNwRixLQUFLLENBQUMsRUFBQztNQUNoQzlGLFVBQVUsQ0FBQzhFLFFBQVEsSUFBSTlFLFVBQVUsQ0FBQzJNLGNBQWMsQ0FBQzdHLEtBQUssQ0FBQztNQUN2RDtNQUNBO01BQ0E7TUFDQTlGLFVBQVUsQ0FBQzJNLGNBQWMsQ0FBQzdHLEtBQUssQ0FBQyxHQUFHbUQsSUFBSSxDQUFDQyxLQUFLLENBQUNsSixVQUFVLENBQUMyTSxjQUFjLENBQUM3RyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7TUFDdkY7TUFDQWpHLFNBQVMsQ0FBQzZHLHFCQUFxQixDQUFDLGdCQUFnQixHQUFDWixLQUFLLEVBQUM5RixVQUFVLENBQUMyTSxjQUFjLENBQUM3RyxLQUFLLENBQUMsQ0FBQztNQUN4RixJQUFJLENBQUNqQyxXQUFXLEVBQUU7TUFDbEIsT0FBTyxJQUFJO0lBQ2YsQ0FBQyxNQUFJO01BQ0QsT0FBTyxLQUFLO0lBQ2hCO0VBQ0osQ0FBQztFQUVEO0VBQ0ErSSxVQUFVLFdBQUFBLFdBQUNDLEdBQUcsRUFBQztJQUNYLElBQUksQ0FBQzlMLFFBQVEsQ0FBQytMLEtBQUssR0FBRzdNLEVBQUUsQ0FBQzhNLEtBQUssQ0FBQ0MsSUFBSTtJQUNuQyxJQUFJLENBQUNqTSxRQUFRLENBQUNzRyxZQUFZLENBQUNwSCxFQUFFLENBQUNnTixNQUFNLENBQUMsQ0FBQ0MsWUFBWSxHQUFHLEtBQUs7SUFDMUQsSUFBSSxDQUFDbk0sUUFBUSxDQUFDd0osY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDbkMsTUFBTSxHQUFHLElBQUk7SUFDbkQsS0FBSSxJQUFJckIsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDL0csVUFBVSxDQUFDZ0gsR0FBRyxFQUFDRCxDQUFDLEVBQUUsRUFBQztNQUM3QixLQUFJLElBQUlFLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ2pILFVBQVUsQ0FBQ2tILEdBQUcsRUFBQ0QsQ0FBQyxFQUFFLEVBQUM7UUFDN0IsSUFBSSxDQUFDSixPQUFPLENBQUNFLENBQUMsQ0FBQyxDQUFDRSxDQUFDLENBQUMsQ0FBQ2tHLFFBQVEsR0FBRyxJQUFJO01BQ3RDO0lBQ0o7SUFDQSxJQUFJckosS0FBSyxHQUFDLElBQUk7SUFDZCxJQUFJc0osQ0FBQyxHQUFDUCxHQUFHO0lBQ1QsSUFBSVEsQ0FBQyxHQUFDLENBQUM7SUFDUCxJQUFJQyxDQUFDLEdBQUMsQ0FBQztJQUNQRCxDQUFDLEdBQUNwRSxJQUFJLENBQUNDLEtBQUssQ0FBQ2tFLENBQUMsR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDO0lBQ3JCQyxDQUFDLEdBQUMsRUFBRSxLQUFHQSxDQUFDLEdBQUMsR0FBRyxHQUFDQSxDQUFDLENBQUM7SUFDZkMsQ0FBQyxHQUFDckUsSUFBSSxDQUFDQyxLQUFLLENBQUNrRSxDQUFDLEdBQUMsRUFBRSxDQUFDO0lBQ2xCLFNBQVNHLFNBQVNBLENBQUEsRUFBRTtNQUNoQkQsQ0FBQyxFQUFFO01BQ0hBLENBQUMsR0FBQyxFQUFFLEtBQUdBLENBQUMsR0FBQyxHQUFHLEdBQUNBLENBQUMsQ0FBQztNQUNmLElBQUdBLENBQUMsQ0FBQ0UsTUFBTSxJQUFFLENBQUMsRUFBQztRQUNYRixDQUFDLEdBQUMsRUFBRTtRQUNKRCxDQUFDLEdBQUMsR0FBRyxJQUFFSSxNQUFNLENBQUNKLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztNQUN2QjtNQUNBLElBQUdBLENBQUMsQ0FBQ0csTUFBTSxJQUFFLENBQUMsRUFBQztRQUNYSCxDQUFDLEdBQUMsSUFBSTtRQUNOQyxDQUFDLEdBQUMsSUFBSTtRQUNOdE4sVUFBVSxDQUFDcUMsSUFBSSxDQUFDdEIsUUFBUSxDQUFDK0wsS0FBSyxHQUFHN00sRUFBRSxDQUFDOE0sS0FBSyxDQUFDVyxLQUFLO1FBQy9DMU4sVUFBVSxDQUFDcUMsSUFBSSxDQUFDdEIsUUFBUSxDQUFDc0csWUFBWSxDQUFDcEgsRUFBRSxDQUFDZ04sTUFBTSxDQUFDLENBQUNDLFlBQVksR0FBRyxJQUFJO1FBQ3BFbE4sVUFBVSxDQUFDcUMsSUFBSSxDQUFDdEIsUUFBUSxDQUFDd0osY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDbkMsTUFBTSxHQUFHLEtBQUs7UUFDL0QsS0FBSyxJQUFJckIsR0FBQyxHQUFHLENBQUMsRUFBRUEsR0FBQyxHQUFHL0csVUFBVSxDQUFDZ0gsR0FBRyxFQUFFRCxHQUFDLEVBQUUsRUFBRTtVQUNyQyxLQUFLLElBQUlFLEdBQUMsR0FBRyxDQUFDLEVBQUVBLEdBQUMsR0FBR2pILFVBQVUsQ0FBQ2tILEdBQUcsRUFBRUQsR0FBQyxFQUFFLEVBQUU7WUFDckNqSCxVQUFVLENBQUNxQyxJQUFJLENBQUN3RSxPQUFPLENBQUNFLEdBQUMsQ0FBQyxDQUFDRSxHQUFDLENBQUMsQ0FBQ2tHLFFBQVEsR0FBRyxLQUFLO1VBQ2xEO1FBQ0o7UUFDQVEsYUFBYSxDQUFDN0osS0FBSyxDQUFDO01BQ3hCO01BQ0E5RCxVQUFVLENBQUNxQyxJQUFJLENBQUN0QixRQUFRLENBQUN3SixjQUFjLENBQUMsT0FBTyxDQUFDLENBQUNBLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQ2xELFlBQVksQ0FBQ3BILEVBQUUsQ0FBQ21CLEtBQUssQ0FBQyxDQUFDcUMsTUFBTSxHQUFHNEosQ0FBQyxHQUFDLEdBQUcsR0FBR0MsQ0FBQztNQUNuSHRILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDb0gsQ0FBQyxHQUFDLElBQUksR0FBQ0MsQ0FBQyxHQUFDLEdBQUcsQ0FBQztJQUM3QjtJQUNBeEosS0FBSyxHQUFDOEosV0FBVyxDQUFDTCxTQUFTLEVBQUMsSUFBSSxDQUFDO0VBQ3JDLENBQUM7RUFDRDtFQUNBMUosV0FBVyxXQUFBQSxZQUFBLEVBQUU7SUFDVCxJQUFJLENBQUNyQyxTQUFTLENBQUNpQyxNQUFNLEdBQUc1RCxTQUFTLENBQUM2RCxlQUFlLENBQUMxRCxVQUFVLENBQUM4RSxRQUFRLENBQUM7SUFDdEVqRixTQUFTLENBQUM2RyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUMxRyxVQUFVLENBQUM4RSxRQUFRLENBQUM7RUFDbkUsQ0FBQztFQUNEO0VBQ0FsQixZQUFZLFdBQUFBLGFBQUEsRUFBRTtJQUNWLElBQUksQ0FBQ3RDLFNBQVMsQ0FBQ21DLE1BQU0sR0FBRzVELFNBQVMsQ0FBQzZELGVBQWUsQ0FBQzFELFVBQVUsQ0FBQzZGLFNBQVMsQ0FBQztJQUN2RWhHLFNBQVMsQ0FBQzZHLHFCQUFxQixDQUFDLFdBQVcsRUFBQzFHLFVBQVUsQ0FBQzZGLFNBQVMsQ0FBQztJQUNqRSxJQUFJLENBQUN5RyxhQUFhLEVBQUU7RUFDeEIsQ0FBQztFQUNEO0VBQ0F1QixhQUFhLFdBQUFBLGNBQUEsRUFBRTtJQUNYLElBQUlDLEdBQUcsR0FBRyxDQUFDO0lBQ1gsS0FBSSxJQUFJL0csQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFDL0csVUFBVSxDQUFDZ0gsR0FBRyxFQUFDRCxDQUFDLEVBQUUsRUFBQztNQUM3QixLQUFJLElBQUlFLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQ2pILFVBQVUsQ0FBQ2tILEdBQUcsRUFBQ0QsQ0FBQyxFQUFFLEVBQUM7UUFDN0IsSUFBRyxJQUFJLENBQUNKLE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLENBQUMsQ0FBQyxDQUFDZ0QsTUFBTSxJQUFHLENBQUMsRUFBQztVQUM3QixJQUFHLElBQUksQ0FBQ3BELE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLENBQUMsQ0FBQyxDQUFDa0csUUFBUSxFQUFDO1lBQzNCVyxHQUFHLElBQUksSUFBSSxDQUFDakgsT0FBTyxDQUFDRSxDQUFDLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLENBQUM4RyxTQUFTLEdBQUMsQ0FBQztVQUN6QyxDQUFDLE1BQUk7WUFDREQsR0FBRyxJQUFJLElBQUksQ0FBQ2pILE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLENBQUMsQ0FBQyxDQUFDOEcsU0FBUztVQUN2QztRQUNKO01BQ0o7SUFDSjtJQUNBLElBQUksQ0FBQ3RNLGVBQWUsQ0FBQzRGLFlBQVksQ0FBQ3BILEVBQUUsQ0FBQ21CLEtBQUssQ0FBQyxDQUFDcUMsTUFBTSxHQUFHNUQsU0FBUyxDQUFDNkQsZUFBZSxDQUFDb0ssR0FBRyxDQUFDLEdBQUMsSUFBSTtJQUN4RixJQUFJLENBQUNyTSxlQUFlLENBQUM4RyxTQUFTLENBQUN0SSxFQUFFLENBQUMySyxRQUFRLENBQUMzSyxFQUFFLENBQUMrTixPQUFPLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQy9OLEVBQUUsQ0FBQytOLE9BQU8sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEZoTyxVQUFVLENBQUM2RixTQUFTLElBQUlpSSxHQUFHLEdBQUMsQ0FBQztJQUM3QixJQUFJLENBQUNsSyxZQUFZLEVBQUU7SUFDbkIsT0FBT2tLLEdBQUc7RUFDZCxDQUFDO0VBQ0RHLE1BQU0sV0FBQUEsT0FBQ0MsRUFBRSxFQUFDO0lBQ04sSUFBSSxDQUFDcEssS0FBSyxJQUFJb0ssRUFBRTtJQUNoQixJQUFHLElBQUksQ0FBQ3BLLEtBQUssSUFBSSxDQUFDLEVBQUM7TUFDZixJQUFJLENBQUNBLEtBQUssR0FBRSxDQUFDO01BQ2IsSUFBSSxDQUFDK0osYUFBYSxFQUFFO0lBQ3hCO0VBQ0o7QUFHSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xudmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgZGVza05vZGU6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLmoYzlrZDoioLngrlcIlxuICAgICAgICB9LFxuICAgICAgICBkZXNrU3ByaXRlOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuUHJlZmFiLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6J+S6uueJqemihOWItidcbiAgICAgICAgfSxcbiAgICAgICAgbW92ZURlc2tTcHJpdGU6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5TcHJpdGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuenu+WKqOWbvueJh1wiXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdERlc2tTcHJpdGU6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Db21wb25lbnQsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuenu+WKqOeahOiKgueCuVwiXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2tCZzp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuWPr+eCueWHu+eahOiDjOaZr1wiXG4gICAgICAgIH0sXG4gICAgICAgIGppYXN1QnRuOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5Yqg6YCf5oyJ6ZKuXCJcbiAgICAgICAgfSxcbiAgICAgICAgc2hvcEJ0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuWVhuW6l+aMiemSrlwiXG4gICAgICAgIH0sXG4gICAgICAgIHJlY292ZXJ5YnRuOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5Z6D5Zy+5qG2XCJcbiAgICAgICAgfSxcbiAgICAgICAgYnVnR29sZGJ0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIui0reS5sOaMiemSrlwiXG4gICAgICAgIH0sXG4gICAgICAgIGJ1Z0xhYmVsOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIui0reS5sOaMiemSrueahOetiee6p1wiXG4gICAgICAgIH0sXG4gICAgICAgIGJ1Z0dvbGRMYWJlbDp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLotK3kubDmjInpkq7nmoTph5Hpop1cIlxuICAgICAgICB9LFxuICAgICAgICBnb2xkTGFiZWw6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi6YeR6ZKxbGFiZWxcIlxuICAgICAgICB9LFxuICAgICAgICBjb2luQnRuOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5YWD5a6d5oyJ6ZKuXCJcbiAgICAgICAgfSxcbiAgICAgICAgY29pbkxhYmVsOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuWFg+WunVwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vbmV5U3BlZWRMYWJlbDp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuS6p+eUn+mSseeahOmAn+W6plwiXG4gICAgICAgIH0sXG4gICAgICAgIHJhbmtpbmdCdG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLmjpLooYzmppzmjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICBtb3JlR2lmdEJ0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuabtOWkmuWlveekvOaMiemSrlwiXG4gICAgICAgIH0sXG4gICAgICAgIHNpZ25CdG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLnrb7liLDmjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICB0dXJuVGFibGVCdG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLovaznm5jmjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICBwZXJzaW9uTmFtZTp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLkxhYmVsLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLnlKjmiLfnmoTnrYnnuqdcIlxuICAgICAgICB9LFxuICAgICAgICBnaWZ0YnRuOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi56S854mpXCJcbiAgICAgICAgfSxcbiAgICAgICAganB0ajp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuWQiOS9nOaWuea1ruagh+WFpeWPo1wiXG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRvcjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuWKqOaAgea1ruagh1wiXG4gICAgICAgIH0sXG4gICAgICAgIGhvd2dhbWU6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLmgI7kuYjnjqlcIlxuICAgICAgICB9LFxuICAgICAgICBjYkJ0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuS+p+i+ueagj1wiXG4gICAgICAgIH0sXG5cbiAgICB9LFxuICAgIGN0b3IoKSB7XG4gICAgICAgIEdhbWVDb25maWcubWFpbiA9IHRoaXM7XG4gICAgfSxcblxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmRlc2tCZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLm9uVG91Y2hCZWdhbix0aGlzKTtcbiAgICAgICAgdGhpcy5kZXNrQmcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSx0aGlzLm9uVG91Y2hNb3ZlZCx0aGlzKTtcbiAgICAgICAgdGhpcy5kZXNrQmcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMub25Ub3VjaEVuZGVkLHRoaXMpO1xuICAgICAgICB0aGlzLmRlc2tCZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsdGhpcy5vblRvdWNoQ2FuY2VsLHRoaXMpO1xuICAgICAgICBHYW1lVG9vbHMucGxheUJhY2tncm91bmRNdXNpYygpO1xuXG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMucmVjb3ZlcnlidG4sIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5idWdHb2xkYnRuLCBcImJ0bkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuc2hvcEJ0biwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLnNpZ25CdG4sIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy50dXJuVGFibGVCdG4sIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5qaWFzdUJ0biwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmNvaW5CdG4sIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5naWZ0YnRuLCBcImJ0bkZ1bmNcIik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMucmFua2luZ0J0biwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmpwdGosIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5uYXZpZ2F0b3IsIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5tb3JlR2lmdEJ0biwgXCJidG5GdW5jXCIpO1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLCB0aGlzLmhvd2dhbWUsIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5jYkJ0biwgXCJidG5GdW5jXCIpO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5nYW1lR2lmdEJhZywgMTgwLCBjYy5tYWNyby5SRVBFQVRfRk9SRVZFUiwgMTApOy8v5byA5ZCv56S85YyF5oyJ6ZKu5Yqo55S7XG5cbiAgICAgICAgdGhpcy5idWdQZXJzaW9uTGV2ZWwgPSAxO1xuICAgICAgICB0aGlzLmJ1Z0dvbGRMYWJlbC5zdHJpbmcgPSBHYW1lVG9vbHMuZ2V0TnVtYmVyU3RyaW5nKEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbMV0pO1xuICAgICAgICB0aGlzLnNldEdhbWVNb25leSgpO1xuICAgICAgICB0aGlzLnNldEdhbWVDb2luKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aGlzLmNob29zZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBlcnNpb25OYW1lLnN0cmluZyA9IEdhbWVDb25maWcucGVyTmFtZVtHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbC0xXTtcbiAgICAgICAgLy8gdGhpcy5zZXRCdWdHb2xkYnRuKCk7XG5cblxuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XG4gICAgICAgICAgICB3eC5vblNob3coKCk9PntcbiAgICAgICAgICAgICAgICBpZihHYW1lQ29uZmlnLnNoYXJlVGltZSAhPSAwKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoR2FtZUNvbmZpZy5zaGFyZUNvbXBvbmVudC5uYW1lLmluZGV4T2YoXCJtYWluXCIpICE9IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZVRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlVGltZSAtIEdhbWVDb25maWcuc2hhcmVUaW1lID49IDMwMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdhbWVDb25maWcuc2hhcmVDb21wb25lbnQuc2hhcmVTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lQ29pbiArPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHYW1lQ29pbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoJ+iOt+W+lycrMTAwKyflhYPlrp0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoJ+WIhuS6q+Wksei0pScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKEdhbWVDb25maWcuc2hhcmVDb21wb25lbnQubmFtZS5pbmRleE9mKCdOZXdQZXJzaW9uJykgIT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihjdXJyZW50VGltZSAtIEdhbWVDb25maWcuc2hhcmVUaW1lID49IDMwMDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuc2hhcmVDb21wb25lbnQuc2hhcmVTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2hvd1RvYXN0KCfliIbkuqvlpLHotKUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZihHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50Lm5hbWUuaW5kZXhPZignTW9uZXlQYW5lbCcpICE9IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudFRpbWUgLSBHYW1lQ29uZmlnLnNoYXJlVGltZSA+PSAzMDAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50LnNoYXJlU3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNob3dUb2FzdCgn5YiG5Lqr5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYoR2FtZUNvbmZpZy5zaGFyZUNvbXBvbmVudC5uYW1lLmluZGV4T2YoJ1Nob3BUb3BMZXZlbCcpICE9IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudFRpbWUgLSBHYW1lQ29uZmlnLnNoYXJlVGltZSA+PSAzMDAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50LnNoYXJlU3VjY2VzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNob3dUb2FzdCgn5YiG5Lqr5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgR2FtZUNvbmZpZy5zaGFyZVRpbWUgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2hhcmVkQ2FudmFzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleCA9IG5ldyBjYy5UZXh0dXJlMkQoKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNoYXJlZENhbnZhcy53aWR0aCA9IDc1MDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNoYXJlZENhbnZhcy5oZWlnaHQgPSAxMzM0O1xuICAgICAgICAgICAgICAgICAgICAvLyDlj5Hmtojmga/nu5nlrZDln59cbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lnd4LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOjMsXG4gICAgICAgICAgICAgICAgICAgICAgICBNQUlOX01FTlVfTlVNOiBHYW1lQ29uZmlnLk1BSU5fTUVOVV9OVU0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZTogR2FtZUNvbmZpZy5HYW1lTW9uZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogR2FtZUNvbmZpZy5HYW1lUGVyc29uTWF4TGV2ZWwsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluaXRXaXRoRWxlbWVudC4uLi4uLlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXguaW5pdFdpdGhFbGVtZW50KHdpbmRvdy5zaGFyZWRDYW52YXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXguaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lTmV4dFJhbmsuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXgpO1xuICAgICAgICAgICAgICAgICAgICB9LDIwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB3eC5vbkhpZGUoKCk9PntcbiAgICAgICAgICAgICAgICBsZXQgX3RpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLmxhc3RUaW1lID0gX3RpbWU7Ly8g6K6w5b2V56a757q/5pe26Ze05oizXG4gICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcImxhc3RUaW1lXCIsR2FtZUNvbmZpZy5sYXN0VGltZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gR2FtZVRvb2xzLnNob3dCYW5uZXJBZCgpO1xuICAgICAgICB9ZWxzZSBpZihjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5RUV9QTEFZKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L295bm/5ZGKXCIpXG4gICAgICAgICAgICAvLyBHYW1lVG9vbHMuc2hvd0Jhbm5lckFkKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5kZXNrQXJyID0gbmV3IEFycmF5KCk7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8R2FtZUNvbmZpZy5Sb3c7aSsrKXtcbiAgICAgICAgICAgIHRoaXMuZGVza0FycltpXSA9IEFycmF5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVDb25maWcuUm93O2krKyl7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPEdhbWVDb25maWcuQ29sO2orKyl7XG4gICAgICAgICAgICAgICAgbGV0IGRlc2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRlc2tTcHJpdGUpO1xuICAgICAgICAgICAgICAgIC8vIGlmKGk9PTAmJiBqPT0wKXtcbiAgICAgICAgICAgICAgICAvLyBkZXNrLmdldENvbXBvbmVudCgnRGVza1Nwcml0ZScpLmluaXREZXNrKDEsaioxNzMtMjYyLjUsLTIwOSppKzExMyk7XG4gICAgICAgICAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgICAgICAgICAgZGVzay5nZXRDb21wb25lbnQoJ0Rlc2tTcHJpdGUnKS5pbml0RGVzayhHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiZGVza0FyclwiK2kraiwwKSxqKjE3My0yNjIuNSwtMjA5KmkrMTEzKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdID0gZGVzay5nZXRDb21wb25lbnQoXCJEZXNrU3ByaXRlXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVza05vZGUuYWRkQ2hpbGQoZGVzayxpLCdEZXNrU3ByaXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnpJbmRleCA9IDEwMDA7XG4gICAgICAgIHRoaXMuc2V0Rmlyc3RHYW1lKCk7Ly/liKTmlq3ku4rlpKnmmK/lkKbkuLrnrKzkuIDmrKHov5vmnaXlkoznprvnur/nmoTml7bpl7Tlt65cbiAgICAgICAgR2FtZUNvbmZpZy5zdGFydE1zID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcbiAgICAgICAgICAgIHdpbmRvdy5jcCA9IHRoaXM7XG5cblxuICAgICAgICAgICAgaWYoR2FtZUNvbmZpZy5JU19MT0FEX01JTkkpe1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jcC5zaG93TWluUHJvZ3JhbSgpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jcC5zY2hlZHVsZSh3aW5kb3cuY3Auc2hvd01pblByb2dyYW0sIDUpO1xuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cuY3Auc2hvd01pblByb2dyYW0oKTtcbiAgICAgICAgICAgICAgICAvLyB9LCA1MDAwKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIEdhbWVUb29scy5pbml0U2VsZk1pbmlQcm9ncmFtKGZ1bmN0aW9uIChmbGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5pbml0RVFNaW5pUHJvZ3JhbShHYW1lQ29uZmlnLlVzZXJJbmZvLCBmdW5jdGlvbiAoZmxhZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNwLnNob3dNaW5Qcm9ncmFtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY3Auc2NoZWR1bGUod2luZG93LmNwLnNob3dNaW5Qcm9ncmFtLCA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5jcC5zaG93TWluUHJvZ3JhbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSwgNTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLklTX0xPQURfTUlOSSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hhcmVTdWNjZXNzKCl7XG4gICAgICAgIEdhbWVDb25maWcuR2FtZUNvaW4gKz0gMTAwO1xuICAgICAgICB0aGlzLnNldEdhbWVDb2luKCk7XG4gICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoJ+iOt+W+lycrMTAwKyflhYPlrp0nKTtcbiAgICB9LFxuXG4gICAgZ2FtZUdpZnRCYWcoKSB7Ly/npLzljIXmjInpkq5cbiAgICAgICAgdGhpcy5naWZ0YnRuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2lmdGJ0bi5zZXRQb3NpdGlvbigtNDQzLCAzNTYpO1xuICAgICAgICB0aGlzLmdpZnRidG4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5naWZ0YnRuLnJ1bkFjdGlvbihjYy5qdW1wQnkoMTUsIDkwMCwgMCwgODAsIDUpKTtcbiAgICB9LFxuICAgIHNldEZpcnN0R2FtZSgpe1xuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHRvZGF5QmVnaW5UaW1lc3RhbXAgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgR2FtZUNvbmZpZy5sYXN0VGltZSA9IEdhbWVUb29scy5nZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJsYXN0VGltZVwiLDApO1xuICAgICAgICAvL+W9k+WJjeaYr+WQpuaYr+S7iuWkqeeahOesrOS4gOasoei/m+adpVxuICAgICAgICBpZih0b2RheUJlZ2luVGltZXN0YW1wID4gR2FtZUNvbmZpZy5sYXN0VGltZSl7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLnR1cm5UYWJsZU51bSArPSAyO1xuICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcInR1cm5OdW1cIixHYW1lQ29uZmlnLnR1cm5UYWJsZU51bSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoR2FtZUNvbmZpZy5sYXN0VGltZSA9PSAwKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbm93VGltZSA9IG5vdy5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBvZmZMaW5lVGltZSA9IE1hdGguZmxvb3IoKG5vd1RpbWUgLSBHYW1lQ29uZmlnLmxhc3RUaW1lKS82MDAwMCk7XG4gICAgICAgIC8v56a757q/5piv5ZCm5Li6MTDliIbpkp9cbiAgICAgICAgaWYob2ZmTGluZVRpbWUgPiAxMCl7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5sb2FkaW5nTGF5ZXIoXCJQYW5lbC9MaXhpYW5QYW5lbFwiKTtcbiAgICAgICAgICAgIC8vIHRoaXMub3Blbk9mZkxpbmVUaW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dNaW5Qcm9ncmFtIDogZnVuY3Rpb24oKXtcbiAgICAgICAgLy8g5LuW5Lq655qE5bCP56iL5bqP5a+86IiqXG4gICAgICAgIEdhbWVUb29scy5zaG93TWluUHJvZ3JhbSh0aGlzLm5hdmlnYXRvcik7XG4gICAgfSxcbiAgICAvL+aMiemSruWKn+iDveeCueWHu1xuICAgIGJ0bkZ1bmMoZXZlbnQpe1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDMpO1xuICAgICAgICBsZXQgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZih0aGlzLnJlY292ZXJ5YnRuID09IGJ1dHRvbil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWbnuaUtuaMiemSrlwiKTtcbiAgICAgICAgICAgIEdhbWVUb29scy50b2FzdE1lc3NhZ2UoMTEpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmJ1Z0dvbGRidG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6LSt5Lmw5oyJ6ZKuXCIpO1xuICAgICAgICAgICAgdGhpcy5idWdHb2xkRnVuYyh0aGlzLmJ1Z1BlcnNpb25MZXZlbCk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc2hvcEJ0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvU2hvcFBhbmVsXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnNpZ25CdG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL1NpZ25QYW5lbFwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy50dXJuVGFibGVCdG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL1RydW5QYW5lbFwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5qaWFzdUJ0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvSmlhc3VQYW5lbFwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5jb2luQnRuID09IGJ1dHRvbil7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgICAgIEdhbWVUb29scy5zaGFyZVBpY3R1cmUoKTtcbiAgICAgICAgICAgIEdhbWVDb25maWcuc2hhcmVUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5naWZ0YnRuID09IGJ1dHRvbil7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5sb2FkaW5nTGF5ZXIoXCJQYW5lbC9Nb25leVBhbmVsXCIpO1xuICAgICAgICAgICAgdGhpcy5naWZ0YnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnJhbmtpbmdCdG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIEdhbWVUb29scy5zdWJtaXRTY29yZShHYW1lQ29uZmlnLkdhbWVNb25leSk7Ly/mj5DkuqTmjpLooYzmlbDmja5cbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL3JhbmtcIik7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuanB0aiA9PSBidXR0b24pe1xuICAgICAgICAgICAgdGhpcy5qcHRqLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvSnB0alwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5uYXZpZ2F0b3IgPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIEdhbWVUb29scy5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oR2FtZUNvbmZpZy5BUFBJRCwgR2FtZUNvbmZpZy5QQVRIKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5tb3JlR2lmdEJ0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgR2FtZVVpVG9vbHMubG9hZGluZ0xheWVyKFwiUGFuZWwvU2VsZkFwcFwiKTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5ob3dnYW1lID09IGJ1dHRvbil7XG4gICAgICAgICAgICBHYW1lVWlUb29scy5sb2FkaW5nTGF5ZXIoXCJQYW5lbC9Ib3dHYW1lXCIpO1xuICAgICAgICB9ZWxzZSBpZiAodGhpcy5jYkJ0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vkvqfovrnmoI/mjInpkq5cIilcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL0NibFBhbmVsXCIpO1xuXG4gICAgICAgICAgICAvLyB0dC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiBcIui/m+WFpeS+p+i+ueagj1wiLFxuICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6IFwi6aKG5Y+W5aWW5YqxMTAw5YWD5a6dXCIsXG4gICAgICAgICAgICAvLyAgICAgY29uZmlybUNvbG9yOiBcIiMwNTA1MTFcIixcbiAgICAgICAgICAgIC8vICAgICBjYW5jZWxDb2xvcjogXCIjRkYwMDAwXCIsXG4gICAgICAgICAgICAvLyAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCLnlKjmiLfngrnlh7vkuoZcIiArIChyZXMuY29uZmlybSA/IFwi56Gu5a6aXCIgOiBcIuWPlua2iFwiKSlcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0dC5uYXZpZ2F0ZVRvU2NlbmUoe1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNjZW5lOiBcInNpZGViYXJcIixcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5hdmlnYXRlIHRvIHNjZW5lIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIC8vIOi3s+i9rOaIkOWKn+Wbnuiwg+mAu+i+kVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBsZXQgY29pbnMgPSBbMTAwXTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhYPlrp3lj5jmm7TliY1cIiwgR2FtZUNvbmZpZy5HYW1lQ29pbiAgKVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVDb2luICs9IGNvaW5zWzBdO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiR2FtZUNvaW5cIixHYW1lQ29uZmlnLkdhbWVDb2luKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhYPlrp3lj5jmm7TlkI5cIiwgR2FtZUNvbmZpZy5HYW1lQ29pbiAgKVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2hvd1RvYXN0KFwi6I635b6X5YWD5a6dK1wiICsgY29pbnNbMF0pO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgZmFpbDogKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5hdmlnYXRlIHRvIHNjZW5lIGZhaWw6IFwiLCByZXMpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAvLyDot7PovazlpLHotKXlm57osIPpgLvovpFcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIHR0LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5bmtognLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGljb246IFwibm9uZVwiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgZmFpbChlcnIpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ3Nob3dNb2RhbCBmYWlsJywgZXJyKTtcbiAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgLy8gICAgIGNvbXBsZXRlKHJlcykge1xuICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnc2hvd01vZGFsIGNvbXBsZXRlJywgcmVzKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxuICAgIC8v5oyJ5L2P5LiN5pS+5a+75om+55u45ZCM55qE5Lq654mpXG4gICAgc2VsZWN0RGVza0hpZGUobnVtYmVyKXtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxHYW1lQ29uZmlnLlJvdztpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxHYW1lQ29uZmlnLkNvbDtqKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgIT0gbnVtYmVyKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmRlc2tDbGlja1Nob3coMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+enu+WKqOS6uueJqVxuICAgIG9uVG91Y2hNb3ZlZDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCB0b3VjaFBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnNldFBvc2l0aW9uKHRoaXMuZGVza05vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hQb2ludCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuenu+WKqFwiLHRvdWNoUG9pbnQpO1xuICAgIH0sXG5cbiAgICAvL+eCueWHu1xuICAgIG9uVG91Y2hCZWdhbjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCB0b3VjaFBvaW50ID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLngrnlh7tcIix0b3VjaFBvaW50KTtcbiAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlID0gbnVsbDtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxHYW1lQ29uZmlnLlJvdztpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxHYW1lQ29uZmlnLkNvbDtqKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVza0FycltpXVtqXS5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdcIikuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY29udGFpbnModG91Y2hQb2ludCkgJiYgdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlciAhPSAwKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlID0gdGhpcy5kZXNrQXJyW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza0NsaWNrU2hvdygxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5zZXRQb3NpdGlvbih0aGlzLmRlc2tOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoUG9pbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZVVpVG9vbHMuc2V0U3ByaXRlRnJhbWUoXCJwZXJzaW9uL0xWXCIrdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlcix0aGlzLm1vdmVEZXNrU3ByaXRlKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERlc2tIaWRlKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgLy/np7vlh7rlsY/luZXlpJZcbiAgICBvblRvdWNoQ2FuY2VsKGV2ZW50KXtcbiAgICAgICAgaWYodGhpcy5zZWxlY3REZXNrU3ByaXRlID09IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuMSwgdGhpcy5zZWxlY3REZXNrU3ByaXRlLm5vZGUueCwgdGhpcy5zZWxlY3REZXNrU3ByaXRlLm5vZGUueSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5kZXNrQ2xpY2tTaG93KDIpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KSkpO1xuICAgIH0sXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG4gICAgLy/ph5HpkrHotK3kubDmjInpkq5cbiAgICBidWdHb2xkRnVuYyhsZXZlbCl7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMSk7XG4gICAgICAgIGlmKEdhbWVDb25maWcuR2FtZU1vbmV5IDwgR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtsZXZlbF0pe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLph5HpkrHkuI3otrNcIik7XG4gICAgICAgICAgICBHYW1lVG9vbHMudG9hc3RNZXNzYWdlKDEwKTtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL01vbmV5UGFuZWxcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5jaG9vc2Upe1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5zaG93UGVyc29uTnVtYmVyID0gbGV2ZWwrMTtcbiAgICAgICAgICAgIEdhbWVVaVRvb2xzLmxvYWRpbmdMYXllcihcIlBhbmVsL1Nob3BUb3BMZXZlbFwiKTtcbiAgICAgICAgICAgIHRoaXMuY2hvb3NlID0gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYodGhpcy5hZGREZXNrU3ByaXRlQnlMZXZlbChsZXZlbCkpe1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZU1vbmV5IC09IEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbbGV2ZWxdO1xuICAgICAgICAgICAgICAgIGlmKGxldmVsID09IDEpe1xuICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlWzFdID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlWzFdICogMS4wNyk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbbGV2ZWxdID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW2xldmVsXSAqIDEuMTc1KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcImJ1eUdvbGRVcGdyYWRlXCIrbGV2ZWwsR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtsZXZlbF0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0R2FtZU1vbmV5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v5pS+5byA5Lq654mpXG4gICAgb25Ub3VjaEVuZGVkOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lQ29uZmlnLlJvdzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ29sOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXNrQXJyW2ldW2pdICE9IHRoaXMuc2VsZWN0RGVza1Nwcml0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza0NsaWNrU2hvdygyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvdWNoUG9pbnQgPSBldmVudC50b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuaUvuW8gFwiLHRvdWNoUG9pbnQpO1xuICAgICAgICBsZXQgbW92ZVRpbWUgPSAwLjE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5Sb3c7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNvbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0RGVza1Nwcml0ZSAmJiB0aGlzLmRlc2tBcnJbaV1bal0ubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLmNvbnRhaW5zKHRvdWNoUG9pbnQpICYmIHRoaXMuZGVza0FycltpXVtqXSAhPSB0aGlzLnNlbGVjdERlc2tTcHJpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgPT0gMCkgey8v56e75Yqo55qE5L2N572u5rKh5Lq6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0ubnVtYmVyID0gdGhpcy5zZWxlY3REZXNrU3ByaXRlLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5udW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmRlc2tTaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza0NsaWNrU2hvdygxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKG1vdmVUaW1lLCB0aGlzLmRlc2tBcnJbaV1bal0ubm9kZS54LCB0aGlzLmRlc2tBcnJbaV1bal0ubm9kZS55KSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5kZXNrQ2xpY2tTaG93KDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlciA9PSB0aGlzLnNlbGVjdERlc2tTcHJpdGUubnVtYmVyKSB7Ly/nm7jlkIznrYnnuqcrMVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgPCA0Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZGVza0FycltpXVtqXS5kZXNrU2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5hZGROdW1iZXJBbmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgPiBHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbCkgey8v5ZCI5oiQ6LaF6L+H5b2T5YmN5pyA5aSn5Lq654mp562J57qnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsID0gdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVQZXJzb25NYXhMZXZlbFwiLCBHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuc2hvd1BlcnNvbk51bWJlciA9IEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuino+mUgeaWsOS4gOe6p+eahOWumOWVpu+8jOeOsOWcqOeahOWumOe6p+aYr1wiK0dhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVWlUb29scy5sb2FkaW5nTGF5ZXIoXCJQYW5lbC9OZXdQZXJzaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNpb25OYW1lLnN0cmluZyA9IEdhbWVDb25maWcucGVyTmFtZVtHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbC0xXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnRvYXN0TWVzc2FnZSgxNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zdWJtaXRTY29yZShHYW1lQ29uZmlnLkdhbWVNb25leSk7Ly/mj5DkuqTmlrDnmoTlrZDln5/kv6Hmga9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvL+WPr+WKoOS6uueJqeeahOmSseeahOaYvuekulxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdhbWVUb29scy50b2FzdE1lc3NhZ2UoMTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiR2FtZVBsYXllclwiLCBHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8obW92ZVRpbWUsIHRoaXMuZGVza0FycltpXVtqXS5ub2RlLngsIHRoaXMuZGVza0FycltpXVtqXS5ub2RlLnkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5udW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJHYW1lQ29tcG91bmRQZXJzb25OdW1iZXJcIiwgR2FtZVRvb2xzLmdldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVDb21wb3VuZFBlcnNvbk51bWJlclwiLCAwKSArIDEpOy8v5re75Yqg5ZCI5oiQ5Lq654mp5qyh5pWwXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5L2g5bey5Yiw6L6+5beF5bOwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnRvYXN0TWVzc2FnZSgxMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8obW92ZVRpbWUsIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5ub2RlLngsIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5ub2RlLnkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5kZXNrQ2xpY2tTaG93KDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtYmVyID0gdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgPSB0aGlzLnNlbGVjdERlc2tTcHJpdGUubnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmRlc2tTaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza0NsaWNrU2hvdygxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5udW1iZXIgPSBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbyhtb3ZlVGltZSwgdGhpcy5kZXNrQXJyW2ldW2pdLm5vZGUueCwgdGhpcy5kZXNrQXJyW2ldW2pdLm5vZGUueSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2tBcnJbaV1bal0uZGVza0NsaWNrU2hvdygyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5kZXNrU2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERlc2tTcHJpdGUuZGVza0NsaWNrU2hvdygyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlRGVza0FycigpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8v5Zue5pS2XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdERlc2tTcHJpdGUgJiYgdGhpcy5yZWNvdmVyeWJ0bi5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyh0b3VjaFBvaW50KSkge1xuICAgICAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5udW1iZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlLmRlc2tTaG93KCk7XG4gICAgICAgICAgICB0aGlzLnNhdmVEZXNrQXJyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0RGVza1Nwcml0ZSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8obW92ZVRpbWUsIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5ub2RlLngsIHRoaXMuc2VsZWN0RGVza1Nwcml0ZS5ub2RlLnkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3REZXNrU3ByaXRlLmRlc2tDbGlja1Nob3coMik7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/ljYfpq5jkuIDnrYnnuqdcbiAgICBjaG9vc2VMZXZlbChsZXZlbCl7XG4gICAgICAgIGlmKHRoaXMuYWRkRGVza1Nwcml0ZUJ5TGV2ZWwobGV2ZWwpKXtcbiAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZU1vbmV5IC09IEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbbGV2ZWwtMV07XG4gICAgICAgICAgICBpZihsZXZlbCA9PSAyKXtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlWzFdID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlWzFdICogMS4wNyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW2xldmVsLTFdID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW2xldmVsLTFdICogMS4xNzUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcImJ1eUdvbGRVcGdyYWRlXCIrbGV2ZWwtMSxHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW2xldmVsLTFdKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R2FtZU1vbmV5KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v54K55Ye76LSt5Lmw5oyJ6ZKu5Yik5pat5qGM5a2Q5Ye6546w5Lq654mp55qE5Yqf6IO9XG4gICAgYWRkRGVza1Nwcml0ZUJ5TGV2ZWwobGV2ZWwpe1xuICAgICAgICBmb3IobGV0IGkgPTA7aTxHYW1lQ29uZmlnLlJvdztpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxHYW1lQ29uZmlnLkNvbDtqKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5kZXNrQ2xpY2tTaG93KDEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlRGVza1Nwcml0ZS5ub2RlLnNldFBvc2l0aW9uKC01NSwtMzY2KTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZVVpVG9vbHMuc2V0U3ByaXRlRnJhbWUoXCJwZXJzaW9uL0xWXCIrbGV2ZWwsdGhpcy5tb3ZlRGVza1Nwcml0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURlc2tTcHJpdGUubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuMSx0aGlzLmRlc2tBcnJbaV1bal0ubm9kZS5nZXRQb3NpdGlvbigpKSxjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmRlc2tDbGlja1Nob3coMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEZXNrU3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgPSBsZXZlbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmRlc2tTaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJkZXNrQXJyXCIgKyBpICsgaiwgdGhpcy5kZXNrQXJyW2ldW2pdLm51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJkZXNrQXJyXCIgKyBpICsgaix0aGlzLmRlc2tBcnJbaV1bal0ubnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5Lmw5LiN5LiL5LqG77yM5bey57uP5ruh5LqGXCIpO1xuICAgICAgICBHYW1lVG9vbHMudG9hc3RNZXNzYWdlKDkpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8v5L+d5a2Y5qGM5a2Q5LiK55qE5Lq654mp5L+h5oGvXG4gICAgc2F2ZURlc2tBcnIoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5Sb3c7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lQ29uZmlnLkNvbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcImRlc2tBcnJcIiArIGkgKyBqLCB0aGlzLmRlc2tBcnJbaV1bal0ubnVtYmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/mmL7npLrotK3kubDkv6Hmga9cbiAgICBzZXRCdWdHb2xkYnRuKCl7XG4gICAgICAgIGxldCBsZXZlbCA9IEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsLTQ7XG4gICAgICAgIGlmKGxldmVsID4gMSl7XG4gICAgICAgICAgICBmb3IobGV0IGJ1Z2xldmVsID0gbGV2ZWw7YnVnbGV2ZWw+MDtidWdsZXZlbC0tKXtcbiAgICAgICAgICAgICAgICBpZihHYW1lQ29uZmlnLkdhbWVNb25leSA+IEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbYnVnbGV2ZWxdKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoYnVnbGV2ZWw8bGV2ZWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGggPSBNYXRoLnJhbmRvbSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihtYXRoPjAuOCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaG9vc2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVnUGVyc2lvbkxldmVsID0gYnVnbGV2ZWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVnTGFiZWwuc3RyaW5nID0gXCJMViBcIitidWdsZXZlbDsvL+i0reS5sOetiee6p1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1Z0dvbGRMYWJlbC5zdHJpbmcgPSBHYW1lVG9vbHMuZ2V0TnVtYmVyU3RyaW5nKEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbYnVnbGV2ZWxdKTsvL+i0reS5sOmHkeminVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuYnVnUGVyc2lvbkxldmVsID0gMTtcbiAgICAgICAgICAgIHRoaXMuYnVnR29sZExhYmVsLnN0cmluZyA9IEdhbWVUb29scy5nZXROdW1iZXJTdHJpbmcoR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVsxXSk7XG4gICAgICAgICAgICB0aGlzLmJ1Z0xhYmVsLnN0cmluZyA9IFwiTFYgMVwiOy8v6LSt5Lmw562J57qnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v5YWD5a6d6LSt5Lmw5oyJ6ZKuXG4gICAgYnV5Q29pbkZ1bmMobGV2ZWwpe1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDEpO1xuICAgICAgICBpZihHYW1lQ29uZmlnLkdhbWVDb2luIDwgR2FtZUNvbmZpZy5idXlDb2luVXBncmFkZVtsZXZlbF0pe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhYPlrp3kuI3otrNcIik7XG4gICAgICAgICAgICBHYW1lVG9vbHMudG9hc3RNZXNzYWdlKDgpO1xuICAgICAgICAgICAgLy8gbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgLy8gR2FtZVRvb2xzLl9jcmVhdGVWZWRpb0FkKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIC8vICAgICBpZiAocmVzLmlzRW5kZWQgfHwgcmVzLnJhdykge1xuICAgICAgICAgICAgLy8gICAgICAgICBHYW1lQ29uZmlnLkdhbWVDb2luICs9IDEwMDtcbiAgICAgICAgICAgIC8vICAgICAgICAgc2VsZi5zZXRHYW1lQ29pbigpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuYWRkRGVza1Nwcml0ZUJ5TGV2ZWwobGV2ZWwpKXtcbiAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUNvaW4gLT0gR2FtZUNvbmZpZy5idXlDb2luVXBncmFkZVtsZXZlbF07XG4gICAgICAgICAgICAvLyBpZihsZXZlbCA9PSAxKXtcbiAgICAgICAgICAgIC8vICAgICBHYW1lQ29uZmlnLmJ1eUNvaW5VcGdyYWRlWzFdID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUNvaW5VcGdyYWRlWzFdICogMS4wNyk7XG4gICAgICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgICAgIEdhbWVDb25maWcuYnV5Q29pblVwZ3JhZGVbbGV2ZWxdID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUNvaW5VcGdyYWRlW2xldmVsXSAqIDEuMTc1KTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJidXlDb2luVXBncmFkZVwiK2xldmVsLEdhbWVDb25maWcuYnV5Q29pblVwZ3JhZGVbbGV2ZWxdKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R2FtZUNvaW4oKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvL+WKoOmAn1xuICAgIGdhbWVEb3VibGUobnVtKXtcbiAgICAgICAgdGhpcy5qaWFzdUJ0bi5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgIHRoaXMuamlhc3VCdG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuamlhc3VCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJudW1iZ1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBmb3IobGV0IGk9MDtpPEdhbWVDb25maWcuUm93O2krKyl7XG4gICAgICAgICAgICBmb3IobGV0IGo9MDtqPEdhbWVDb25maWcuQ29sO2orKyl7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXNrQXJyW2ldW2pdLmlzU2VsZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgdGltZXI9bnVsbDtcbiAgICAgICAgbGV0IHQ9bnVtO1xuICAgICAgICBsZXQgbT0wO1xuICAgICAgICBsZXQgcz0wO1xuICAgICAgICBtPU1hdGguZmxvb3IodC82MCU2MCk7XG4gICAgICAgIG08MTAmJihtPScwJyttKTtcbiAgICAgICAgcz1NYXRoLmZsb29yKHQlNjApO1xuICAgICAgICBmdW5jdGlvbiBjb3VudERvd24oKXtcbiAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgIHM8MTAmJihzPScwJytzKTtcbiAgICAgICAgICAgIGlmKHMubGVuZ3RoPj0zKXtcbiAgICAgICAgICAgICAgICBzPTU5O1xuICAgICAgICAgICAgICAgIG09XCIwXCIrKE51bWJlcihtKS0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG0ubGVuZ3RoPj0zKXtcbiAgICAgICAgICAgICAgICBtPScwMCc7XG4gICAgICAgICAgICAgICAgcz0nMDAnO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcubWFpbi5qaWFzdUJ0bi5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcubWFpbi5qaWFzdUJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcubWFpbi5qaWFzdUJ0bi5nZXRDaGlsZEJ5TmFtZShcIm51bWJnXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZUNvbmZpZy5Sb3c7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEdhbWVDb25maWcuQ29sOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcubWFpbi5kZXNrQXJyW2ldW2pdLmlzU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lQ29uZmlnLm1haW4uamlhc3VCdG4uZ2V0Q2hpbGRCeU5hbWUoXCJudW1iZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIm51bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG0rXCI6XCIgKyBzO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobStcIuWIhumSn1wiK3MrXCLnp5JcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGltZXI9c2V0SW50ZXJ2YWwoY291bnREb3duLDEwMDApO1xuICAgIH0sXG4gICAgLy/lhYPlrp3nmoTlj5jliqhcbiAgICBzZXRHYW1lQ29pbigpe1xuICAgICAgICB0aGlzLmNvaW5MYWJlbC5zdHJpbmcgPSBHYW1lVG9vbHMuZ2V0TnVtYmVyU3RyaW5nKEdhbWVDb25maWcuR2FtZUNvaW4pO1xuICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiR2FtZUNvaW5cIixHYW1lQ29uZmlnLkdhbWVDb2luKTtcbiAgICB9LFxuICAgIC8v6YeR6ZKx55qE5Y+Y5YqoXG4gICAgc2V0R2FtZU1vbmV5KCl7XG4gICAgICAgIHRoaXMuZ29sZExhYmVsLnN0cmluZyA9IEdhbWVUb29scy5nZXROdW1iZXJTdHJpbmcoR2FtZUNvbmZpZy5HYW1lTW9uZXkpO1xuICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwiR2FtZU1vbmV5XCIsR2FtZUNvbmZpZy5HYW1lTW9uZXkpO1xuICAgICAgICB0aGlzLnNldEJ1Z0dvbGRidG4oKTtcbiAgICB9LFxuICAgIC8v55Sf5Lqn6YeR6ZKx55qE6YCf5bqmXG4gICAgZ2V0TW9uZXlTcGVlZCgpe1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgZm9yKGxldCBpPTA7aTxHYW1lQ29uZmlnLlJvdztpKyspe1xuICAgICAgICAgICAgZm9yKGxldCBqPTA7ajxHYW1lQ29uZmlnLkNvbDtqKyspe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGVza0FycltpXVtqXS5udW1iZXIgIT0wKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kZXNrQXJyW2ldW2pdLmlzU2VsZWN0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bSArPSB0aGlzLmRlc2tBcnJbaV1bal0uZXhwTnVtYmVyKjI7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VtICs9IHRoaXMuZGVza0FycltpXVtqXS5leHBOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb25leVNwZWVkTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBHYW1lVG9vbHMuZ2V0TnVtYmVyU3RyaW5nKHN1bSkrXCIv56eSXCI7XG4gICAgICAgIHRoaXMubW9uZXlTcGVlZExhYmVsLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMiwxLjMsMS4zKSxjYy5zY2FsZVRvKDAuMiwxLDEpKSk7XG4gICAgICAgIEdhbWVDb25maWcuR2FtZU1vbmV5ICs9IHN1bSozO1xuICAgICAgICB0aGlzLnNldEdhbWVNb25leSgpO1xuICAgICAgICByZXR1cm4gc3VtO1xuICAgIH0sXG4gICAgdXBkYXRlKGR0KXtcbiAgICAgICAgdGhpcy50aW1lciArPSBkdDtcbiAgICAgICAgaWYodGhpcy50aW1lciA+PSAzKXtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPTA7XG4gICAgICAgICAgICB0aGlzLmdldE1vbmV5U3BlZWQoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgXG4gICAgXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/JiasuPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '11f69zmTQlOLKd+DTsp3N7o', 'JiasuPanel');
// Script/panel/JiasuPanel.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    closebtn: cc.Node,
    sharebtn: cc.Node,
    videobtn: cc.Node
  },
  start: function start() {},
  onLoad: function onLoad() {
    window.cp = this;
  },
  shareClick: function shareClick() {
    GameTools.playSimpleAudioEngine(3);
    if (GameConfig.GameCoin < 10) {
      console.log("你的元宝不够");
    } else {
      GameConfig.GameCoin -= 10;
      this.closeClick();
      GameConfig.main.setGameCoin();
      GameConfig.main.gameDouble(60);
    }
  },
  videoClick: function videoClick() {
    GameTools.playSimpleAudioEngine(3);
    GameTools._createVedioAd(function (res) {
      if (res.isEnded || res.raw) {
        window.cp.node.destroy();
        GameConfig.main.gameDouble(200);
      }
    });
  },
  closeClick: function closeClick() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
  } // update (dt) {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcSmlhc3VQYW5lbC5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY2xvc2VidG4iLCJOb2RlIiwic2hhcmVidG4iLCJ2aWRlb2J0biIsInN0YXJ0Iiwib25Mb2FkIiwid2luZG93IiwiY3AiLCJzaGFyZUNsaWNrIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiR2FtZUNvaW4iLCJjb25zb2xlIiwibG9nIiwiY2xvc2VDbGljayIsIm1haW4iLCJzZXRHYW1lQ29pbiIsImdhbWVEb3VibGUiLCJ2aWRlb0NsaWNrIiwiX2NyZWF0ZVZlZGlvQWQiLCJyZXMiLCJpc0VuZGVkIiwicmF3Iiwibm9kZSIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUVwQ0UsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFFckJDLFVBQVUsRUFBRTtJQUNSQyxRQUFRLEVBQUNKLEVBQUUsQ0FBQ0ssSUFBSTtJQUNoQkMsUUFBUSxFQUFDTixFQUFFLENBQUNLLElBQUk7SUFDaEJFLFFBQVEsRUFBQ1AsRUFBRSxDQUFDSztFQUNoQixDQUFDO0VBQ0RHLEtBQUssV0FBQUEsTUFBQSxFQUFJLENBRVQsQ0FBQztFQUNEQyxNQUFNLFdBQUFBLE9BQUEsRUFBSTtJQUNOQyxNQUFNLENBQUNDLEVBQUUsR0FBRyxJQUFJO0VBQ3BCLENBQUM7RUFFREMsVUFBVSxXQUFBQSxXQUFBLEVBQUU7SUFDUmIsU0FBUyxDQUFDYyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBR2hCLFVBQVUsQ0FBQ2lCLFFBQVEsR0FBRSxFQUFFLEVBQUM7TUFDdkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDLE1BQUk7TUFDRG5CLFVBQVUsQ0FBQ2lCLFFBQVEsSUFBSSxFQUFFO01BQ3pCLElBQUksQ0FBQ0csVUFBVSxFQUFFO01BQ2pCcEIsVUFBVSxDQUFDcUIsSUFBSSxDQUFDQyxXQUFXLEVBQUU7TUFDN0J0QixVQUFVLENBQUNxQixJQUFJLENBQUNFLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDbEM7RUFDSixDQUFDO0VBQ0RDLFVBQVUsV0FBQUEsV0FBQSxFQUFFO0lBQ1J0QixTQUFTLENBQUNjLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNsQ2QsU0FBUyxDQUFDdUIsY0FBYyxDQUFDLFVBQVVDLEdBQUcsRUFBRTtNQUNwQyxJQUFJQSxHQUFHLENBQUNDLE9BQU8sSUFBSUQsR0FBRyxDQUFDRSxHQUFHLEVBQUU7UUFDeEJmLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDZSxJQUFJLENBQUNDLE9BQU8sRUFBRTtRQUN4QjlCLFVBQVUsQ0FBQ3FCLElBQUksQ0FBQ0UsVUFBVSxDQUFDLEdBQUcsQ0FBQztNQUNuQztJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFDREgsVUFBVSxXQUFBQSxXQUFBLEVBQUU7SUFDUmxCLFNBQVMsQ0FBQ2MscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQ2EsSUFBSSxDQUFDQyxPQUFPLEVBQUU7RUFDdkIsQ0FBQyxDQUVEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNsb3NlYnRuOmNjLk5vZGUsXG4gICAgICAgIHNoYXJlYnRuOmNjLk5vZGUsXG4gICAgICAgIHZpZGVvYnRuOmNjLk5vZGUsXG4gICAgfSxcbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHdpbmRvdy5jcCA9IHRoaXM7XG4gICAgfSxcblxuICAgIHNoYXJlQ2xpY2soKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgaWYoR2FtZUNvbmZpZy5HYW1lQ29pbiA8MTApe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvaDnmoTlhYPlrp3kuI3lpJ9cIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5HYW1lQ29pbiAtPSAxMDtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VDbGljaygpO1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5tYWluLnNldEdhbWVDb2luKCk7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLm1haW4uZ2FtZURvdWJsZSg2MCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHZpZGVvQ2xpY2soKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgR2FtZVRvb2xzLl9jcmVhdGVWZWRpb0FkKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMuaXNFbmRlZCB8fCByZXMucmF3KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNwLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIEdhbWVDb25maWcubWFpbi5nYW1lRG91YmxlKDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY2xvc2VDbGljaygpe1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDMpO1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/DeskSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e27a6lB9LFJWqRnJmb1op53', 'DeskSprite');
// Script/DeskSprite.js

"use strict";

var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
var DeskSprite = cc.Class({
  "extends": cc.Component,
  properties: {
    deskSpriteSke: cc.Sprite,
    levelbg: cc.Node,
    //等级红色底片
    level: cc.Node,
    //等级字母
    number: 0,
    // 显示数字
    isSelect: false,
    expNumber: 5,
    //经验值
    showEXP: cc.Node //展示的经验
  },

  ctor: function ctor() {},
  start: function start() {
    this.schedule(function () {
      var _this = this;
      // console.log("次数")
      // 三秒一次
      if (this.number != 0) {
        this.expNumber = GameTools.getEXPNumber(this.number);
        this.showEXP.active = true;
        if (this.isSelect) {
          this.showEXP.getComponent(cc.Label).string = "+" + GameTools.getNumberString(this.expNumber) + "x2";
        } else {
          this.showEXP.getComponent(cc.Label).string = "+" + GameTools.getNumberString(this.expNumber);
        }
        this.showEXP_Pos = this.showEXP.getPosition();
        this.showEXP.runAction(cc.sequence(cc.moveBy(0.2, 0, 60), cc.fadeOut(0.2), cc.callFunc(function () {
          _this.showEXP.active = false;
          _this.showEXP.setPosition(_this.showEXP_Pos);
          _this.showEXP.opacity = 255;
        })));
        this.deskSpriteSke.node.runAction(cc.sequence(cc.scaleTo(0.2, 1, 0.9), cc.scaleTo(0.2, 1, 1)));
      }
    }, 2.5);
  },
  //合成左右摇摆
  addNumberAnim: function addNumberAnim() {
    var _this2 = this;
    var moveTime = 0.1;
    var deskNode = cc.instantiate(this.deskSpriteSke.node);
    deskNode.runAction(cc.sequence(cc.moveBy(moveTime, -70, 0), cc.delayTime(0.1), cc.moveTo(moveTime, 0, 0), cc.removeSelf()));
    this.node.addChild(deskNode);
    var deskNode2 = cc.instantiate(this.deskSpriteSke.node);
    deskNode2.runAction(cc.sequence(cc.moveBy(moveTime, 70, 0), cc.delayTime(0.1), cc.moveTo(moveTime, 0, 0), cc.callFunc(function () {
      _this2.deskShow();
    }), cc.removeSelf()));
    this.node.addChild(deskNode2);
  },
  initDesk: function initDesk(numbers, DeskSpriteX, DeskSpriteY)
  // 初始化
  {
    // 初始化数字
    this.number = numbers;
    this.deskShow();
    this.node.setPosition(DeskSpriteX, DeskSpriteY);
  },
  deskShow: function deskShow() {
    if (this.number == 0) {
      this.deskSpriteSke.node.active = false;
      this.levelbg.active = false;
      // this.level.active = false;
    } else if (this.number >= 1 && this.number <= 42) {
      this.deskSpriteSke.node.active = true;
      this.levelbg.active = true;
      // this.level.active = true;
      GameUiTools.setSpriteFrame("persion/LV" + this.number, this.deskSpriteSke);
      // this.expNumber = GameTools.getBatteryexpNumber(this.number);
      this.level.getComponent('Number').showNumber(this.number);
    }
  },
  deskClickShow: function deskClickShow(clickType) {
    if (clickType == 1) {
      this.deskSpriteSke.node.opacity = 120;
    } else {
      this.deskSpriteSke.node.opacity = 255;
    }
  }
});
module.exports = DeskSprite;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEZXNrU3ByaXRlLmpzIl0sIm5hbWVzIjpbIkdhbWVUb29scyIsInJlcXVpcmUiLCJHYW1lVWlUb29scyIsIkRlc2tTcHJpdGUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImRlc2tTcHJpdGVTa2UiLCJTcHJpdGUiLCJsZXZlbGJnIiwiTm9kZSIsImxldmVsIiwibnVtYmVyIiwiaXNTZWxlY3QiLCJleHBOdW1iZXIiLCJzaG93RVhQIiwiY3RvciIsInN0YXJ0Iiwic2NoZWR1bGUiLCJfdGhpcyIsImdldEVYUE51bWJlciIsImFjdGl2ZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwiZ2V0TnVtYmVyU3RyaW5nIiwic2hvd0VYUF9Qb3MiLCJnZXRQb3NpdGlvbiIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwibW92ZUJ5IiwiZmFkZU91dCIsImNhbGxGdW5jIiwic2V0UG9zaXRpb24iLCJvcGFjaXR5Iiwibm9kZSIsInNjYWxlVG8iLCJhZGROdW1iZXJBbmltIiwiX3RoaXMyIiwibW92ZVRpbWUiLCJkZXNrTm9kZSIsImluc3RhbnRpYXRlIiwiZGVsYXlUaW1lIiwibW92ZVRvIiwicmVtb3ZlU2VsZiIsImFkZENoaWxkIiwiZGVza05vZGUyIiwiZGVza1Nob3ciLCJpbml0RGVzayIsIm51bWJlcnMiLCJEZXNrU3ByaXRlWCIsIkRlc2tTcHJpdGVZIiwic2V0U3ByaXRlRnJhbWUiLCJzaG93TnVtYmVyIiwiZGVza0NsaWNrU2hvdyIsImNsaWNrVHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDLElBQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUN4QyxJQUFJRSxVQUFVLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3RCLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUNyQkMsVUFBVSxFQUFFO0lBQ1JDLGFBQWEsRUFBRUosRUFBRSxDQUFDSyxNQUFNO0lBQ3hCQyxPQUFPLEVBQUNOLEVBQUUsQ0FBQ08sSUFBSTtJQUFDO0lBQ2hCQyxLQUFLLEVBQUVSLEVBQUUsQ0FBQ08sSUFBSTtJQUFDO0lBQ2ZFLE1BQU0sRUFBRSxDQUFDO0lBQUM7SUFDVkMsUUFBUSxFQUFFLEtBQUs7SUFDZkMsU0FBUyxFQUFFLENBQUM7SUFBQztJQUNiQyxPQUFPLEVBQUNaLEVBQUUsQ0FBQ08sSUFBSSxDQUFDO0VBQ3BCLENBQUM7O0VBQ0RNLElBQUksRUFBRSxTQUFBQSxLQUFBLEVBQVksQ0FFbEIsQ0FBQztFQUNEQyxLQUFLLFdBQUFBLE1BQUEsRUFBRztJQUNKLElBQUksQ0FBQ0MsUUFBUSxDQUFDLFlBQVc7TUFBQSxJQUFBQyxLQUFBO01BQ3JCO01BQ0E7TUFDQSxJQUFJLElBQUksQ0FBQ1AsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUNsQixJQUFJLENBQUNFLFNBQVMsR0FBR2YsU0FBUyxDQUFDcUIsWUFBWSxDQUFDLElBQUksQ0FBQ1IsTUFBTSxDQUFDO1FBQ3BELElBQUksQ0FBQ0csT0FBTyxDQUFDTSxNQUFNLEdBQUcsSUFBSTtRQUMxQixJQUFHLElBQUksQ0FBQ1IsUUFBUSxFQUFDO1VBQ2IsSUFBSSxDQUFDRSxPQUFPLENBQUNPLFlBQVksQ0FBQ25CLEVBQUUsQ0FBQ29CLEtBQUssQ0FBQyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxHQUFDekIsU0FBUyxDQUFDMEIsZUFBZSxDQUFDLElBQUksQ0FBQ1gsU0FBUyxDQUFDLEdBQUMsSUFBSTtRQUNuRyxDQUFDLE1BQUk7VUFDRCxJQUFJLENBQUNDLE9BQU8sQ0FBQ08sWUFBWSxDQUFDbkIsRUFBRSxDQUFDb0IsS0FBSyxDQUFDLENBQUNDLE1BQU0sR0FBRyxHQUFHLEdBQUN6QixTQUFTLENBQUMwQixlQUFlLENBQUMsSUFBSSxDQUFDWCxTQUFTLENBQUM7UUFDOUY7UUFDQSxJQUFJLENBQUNZLFdBQVcsR0FBRyxJQUFJLENBQUNYLE9BQU8sQ0FBQ1ksV0FBVyxFQUFFO1FBQzdDLElBQUksQ0FBQ1osT0FBTyxDQUFDYSxTQUFTLENBQUN6QixFQUFFLENBQUMwQixRQUFRLENBQUMxQixFQUFFLENBQUMyQixNQUFNLENBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBQzNCLEVBQUUsQ0FBQzRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQzVCLEVBQUUsQ0FBQzZCLFFBQVEsQ0FBQyxZQUFJO1VBQ25GYixLQUFJLENBQUNKLE9BQU8sQ0FBQ00sTUFBTSxHQUFHLEtBQUs7VUFDM0JGLEtBQUksQ0FBQ0osT0FBTyxDQUFDa0IsV0FBVyxDQUFDZCxLQUFJLENBQUNPLFdBQVcsQ0FBQztVQUMxQ1AsS0FBSSxDQUFDSixPQUFPLENBQUNtQixPQUFPLEdBQUcsR0FBRztRQUM5QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ0osSUFBSSxDQUFDM0IsYUFBYSxDQUFDNEIsSUFBSSxDQUFDUCxTQUFTLENBQUN6QixFQUFFLENBQUMwQixRQUFRLENBQUMxQixFQUFFLENBQUNpQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRWpDLEVBQUUsQ0FBQ2lDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbEc7SUFDSixDQUFDLEVBQUUsR0FBRyxDQUFDO0VBRVgsQ0FBQztFQUNEO0VBQ0FDLGFBQWEsV0FBQUEsY0FBQSxFQUFHO0lBQUEsSUFBQUMsTUFBQTtJQUNaLElBQUlDLFFBQVEsR0FBRyxHQUFHO0lBQ2xCLElBQUlDLFFBQVEsR0FBR3JDLEVBQUUsQ0FBQ3NDLFdBQVcsQ0FBQyxJQUFJLENBQUNsQyxhQUFhLENBQUM0QixJQUFJLENBQUM7SUFDdERLLFFBQVEsQ0FBQ1osU0FBUyxDQUFDekIsRUFBRSxDQUFDMEIsUUFBUSxDQUFDMUIsRUFBRSxDQUFDMkIsTUFBTSxDQUFDUyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUVwQyxFQUFFLENBQUN1QyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUV2QyxFQUFFLENBQUN3QyxNQUFNLENBQUNKLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUVwQyxFQUFFLENBQUN5QyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzNILElBQUksQ0FBQ1QsSUFBSSxDQUFDVSxRQUFRLENBQUNMLFFBQVEsQ0FBQztJQUM1QixJQUFJTSxTQUFTLEdBQUczQyxFQUFFLENBQUNzQyxXQUFXLENBQUMsSUFBSSxDQUFDbEMsYUFBYSxDQUFDNEIsSUFBSSxDQUFDO0lBQ3ZEVyxTQUFTLENBQUNsQixTQUFTLENBQUN6QixFQUFFLENBQUMwQixRQUFRLENBQUMxQixFQUFFLENBQUMyQixNQUFNLENBQUNTLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUVwQyxFQUFFLENBQUN1QyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUV2QyxFQUFFLENBQUN3QyxNQUFNLENBQUNKLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUVwQyxFQUFFLENBQUM2QixRQUFRLENBQUMsWUFBTTtNQUN4SE0sTUFBSSxDQUFDUyxRQUFRLEVBQUU7SUFDbkIsQ0FBQyxDQUFDLEVBQUU1QyxFQUFFLENBQUN5QyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLElBQUksQ0FBQ1QsSUFBSSxDQUFDVSxRQUFRLENBQUNDLFNBQVMsQ0FBQztFQUNqQyxDQUFDO0VBQ0RFLFFBQVEsRUFBRSxTQUFBQSxTQUFVQyxPQUFPLEVBQUVDLFdBQVcsRUFBRUMsV0FBVztFQUFDO0VBQ3REO0lBQ0k7SUFDQSxJQUFJLENBQUN2QyxNQUFNLEdBQUdxQyxPQUFPO0lBQ3JCLElBQUksQ0FBQ0YsUUFBUSxFQUFFO0lBQ2YsSUFBSSxDQUFDWixJQUFJLENBQUNGLFdBQVcsQ0FBQ2lCLFdBQVcsRUFBRUMsV0FBVyxDQUFDO0VBQ25ELENBQUM7RUFDREosUUFBUSxFQUFFLFNBQUFBLFNBQUEsRUFBWTtJQUNsQixJQUFJLElBQUksQ0FBQ25DLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFDbEIsSUFBSSxDQUFDTCxhQUFhLENBQUM0QixJQUFJLENBQUNkLE1BQU0sR0FBRyxLQUFLO01BQ3RDLElBQUksQ0FBQ1osT0FBTyxDQUFDWSxNQUFNLEdBQUcsS0FBSztNQUMzQjtJQUNKLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ1QsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUNBLE1BQU0sSUFBSSxFQUFFLEVBQUU7TUFDOUMsSUFBSSxDQUFDTCxhQUFhLENBQUM0QixJQUFJLENBQUNkLE1BQU0sR0FBRyxJQUFJO01BQ3JDLElBQUksQ0FBQ1osT0FBTyxDQUFDWSxNQUFNLEdBQUcsSUFBSTtNQUMxQjtNQUNBcEIsV0FBVyxDQUFDbUQsY0FBYyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUN4QyxNQUFNLEVBQUUsSUFBSSxDQUFDTCxhQUFhLENBQUM7TUFDMUU7TUFDQSxJQUFJLENBQUNJLEtBQUssQ0FBQ1csWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDK0IsVUFBVSxDQUFDLElBQUksQ0FBQ3pDLE1BQU0sQ0FBQztJQUM3RDtFQUNKLENBQUM7RUFDRDBDLGFBQWEsV0FBQUEsY0FBQ0MsU0FBUyxFQUFFO0lBQ3JCLElBQUlBLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDaEIsSUFBSSxDQUFDaEQsYUFBYSxDQUFDNEIsSUFBSSxDQUFDRCxPQUFPLEdBQUcsR0FBRztJQUN6QyxDQUFDLE1BQU07TUFDSCxJQUFJLENBQUMzQixhQUFhLENBQUM0QixJQUFJLENBQUNELE9BQU8sR0FBRyxHQUFHO0lBQ3pDO0VBQ0o7QUFFSixDQUFDLENBQUM7QUFFRnNCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHdkQsVUFBVSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xyXG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XHJcbnZhciBEZXNrU3ByaXRlID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGRlc2tTcHJpdGVTa2U6IGNjLlNwcml0ZSxcclxuICAgICAgICBsZXZlbGJnOmNjLk5vZGUsLy/nrYnnuqfnuqLoibLlupXniYdcclxuICAgICAgICBsZXZlbDogY2MuTm9kZSwvL+etiee6p+Wtl+avjVxyXG4gICAgICAgIG51bWJlcjogMCwvLyDmmL7npLrmlbDlrZdcclxuICAgICAgICBpc1NlbGVjdDogZmFsc2UsXHJcbiAgICAgICAgZXhwTnVtYmVyOiA1LC8v57uP6aqM5YC8XHJcbiAgICAgICAgc2hvd0VYUDpjYy5Ob2RlLC8v5bGV56S655qE57uP6aqMXHJcbiAgICB9LFxyXG4gICAgY3RvcjogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuasoeaVsFwiKVxyXG4gICAgICAgICAgICAvLyDkuInnp5LkuIDmrKFcclxuICAgICAgICAgICAgaWYgKHRoaXMubnVtYmVyICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwTnVtYmVyID0gR2FtZVRvb2xzLmdldEVYUE51bWJlcih0aGlzLm51bWJlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFWFAuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNTZWxlY3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VYUC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiK0dhbWVUb29scy5nZXROdW1iZXJTdHJpbmcodGhpcy5leHBOdW1iZXIpK1wieDJcIjtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VYUC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiK0dhbWVUb29scy5nZXROdW1iZXJTdHJpbmcodGhpcy5leHBOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RVhQX1BvcyA9IHRoaXMuc2hvd0VYUC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RVhQLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMC4yLDAsNjApLGNjLmZhZGVPdXQoMC4yKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VYUC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFWFAuc2V0UG9zaXRpb24odGhpcy5zaG93RVhQX1Bvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RVhQLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2tTcHJpdGVTa2Uubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjIsIDEsIDAuOSksIGNjLnNjYWxlVG8oMC4yLCAxLCAxKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMi41KTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICAvL+WQiOaIkOW3puWPs+aRh+aRhlxyXG4gICAgYWRkTnVtYmVyQW5pbSgpIHtcclxuICAgICAgICBsZXQgbW92ZVRpbWUgPSAwLjE7XHJcbiAgICAgICAgbGV0IGRlc2tOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5kZXNrU3ByaXRlU2tlLm5vZGUpO1xyXG4gICAgICAgIGRlc2tOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkobW92ZVRpbWUsIC03MCwgMCksIGNjLmRlbGF5VGltZSgwLjEpLCBjYy5tb3ZlVG8obW92ZVRpbWUsIDAsIDApLCBjYy5yZW1vdmVTZWxmKCkpKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZGVza05vZGUpO1xyXG4gICAgICAgIGxldCBkZXNrTm9kZTIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRlc2tTcHJpdGVTa2Uubm9kZSk7XHJcbiAgICAgICAgZGVza05vZGUyLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlQnkobW92ZVRpbWUsIDcwLCAwKSwgY2MuZGVsYXlUaW1lKDAuMSksIGNjLm1vdmVUbyhtb3ZlVGltZSwgMCwgMCksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kZXNrU2hvdygpO1xyXG4gICAgICAgIH0pLCBjYy5yZW1vdmVTZWxmKCkpKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZGVza05vZGUyKTtcclxuICAgIH0sXHJcbiAgICBpbml0RGVzazogZnVuY3Rpb24gKG51bWJlcnMsIERlc2tTcHJpdGVYLCBEZXNrU3ByaXRlWSkvLyDliJ3lp4vljJZcclxuICAgIHtcclxuICAgICAgICAvLyDliJ3lp4vljJbmlbDlrZdcclxuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcnM7XHJcbiAgICAgICAgdGhpcy5kZXNrU2hvdygpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihEZXNrU3ByaXRlWCwgRGVza1Nwcml0ZVkpO1xyXG4gICAgfSxcclxuICAgIGRlc2tTaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubnVtYmVyID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNrU3ByaXRlU2tlLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxiZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5sZXZlbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyID49IDEgJiYgdGhpcy5udW1iZXIgPD0gNDIpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNrU3ByaXRlU2tlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbGJnLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubGV2ZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgR2FtZVVpVG9vbHMuc2V0U3ByaXRlRnJhbWUoXCJwZXJzaW9uL0xWXCIgKyB0aGlzLm51bWJlciwgdGhpcy5kZXNrU3ByaXRlU2tlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5leHBOdW1iZXIgPSBHYW1lVG9vbHMuZ2V0QmF0dGVyeWV4cE51bWJlcih0aGlzLm51bWJlcik7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwuZ2V0Q29tcG9uZW50KCdOdW1iZXInKS5zaG93TnVtYmVyKHRoaXMubnVtYmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVza0NsaWNrU2hvdyhjbGlja1R5cGUpIHtcclxuICAgICAgICBpZiAoY2xpY2tUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNrU3ByaXRlU2tlLm5vZGUub3BhY2l0eSA9IDEyMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2tTcHJpdGVTa2Uubm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGVza1Nwcml0ZTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/LixianPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd25e8oFlaBLrJwnyPHapWnN', 'LixianPanel');
// Script/panel/LixianPanel.js

"use strict";

var GameConfig = require("GameConfig");
var GameUiTools = require("GameUiTools");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    moneylabel: {
      "default": null,
      type: cc.Label,
      displayName: "金钱数"
    },
    num: 0
  },
  start: function start() {},
  onLoad: function onLoad() {
    this.speed = GameConfig.main.getMoneySpeed();
    var nowTime = new Date().getTime();
    var lastGameTime = GameTools.getItemByLocalStorage("lastTime", 0);
    var offLineTime = Math.floor((nowTime - lastGameTime) / 6000);
    if (offLineTime <= 1000 * 60 * 30) {
      this.num = Math.floor(this.speed * offLineTime);
    } else if (offLineTime <= 1000 * 60 * 60 * 2) {
      this.num = Math.floor(this.speed * offLineTime * 0.5);
    } else {
      this.num = Math.floor(this.speed * offLineTime * 0.3);
    }
    this.moneylabel.string = this.num + "铜钱";
  },
  closeClick: function closeClick() {
    this.node.destroy();
    GameConfig.main.setGameMoney();
  },
  doubletakeClick: function doubletakeClick() {
    GameTools.playSimpleAudioEngine(3);
    var self = this;
    GameTools._createVedioAd(function (res) {
      if (res.isEnded || res.raw) {
        GameConfig.GameMoney += self.num * 3;
        self.closeClick();
      }
    });
  },
  takeClick: function takeClick() {
    GameTools.playSimpleAudioEngine(3);
    GameConfig.GameMoney += this.num;
    this.closeClick();
  } // update (dt) {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcTGl4aWFuUGFuZWwuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVWlUb29scyIsIkdhbWVUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW9uZXlsYWJlbCIsInR5cGUiLCJMYWJlbCIsImRpc3BsYXlOYW1lIiwibnVtIiwic3RhcnQiLCJvbkxvYWQiLCJzcGVlZCIsIm1haW4iLCJnZXRNb25leVNwZWVkIiwibm93VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwibGFzdEdhbWVUaW1lIiwiZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlIiwib2ZmTGluZVRpbWUiLCJNYXRoIiwiZmxvb3IiLCJzdHJpbmciLCJjbG9zZUNsaWNrIiwibm9kZSIsImRlc3Ryb3kiLCJzZXRHYW1lTW9uZXkiLCJkb3VibGV0YWtlQ2xpY2siLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJzZWxmIiwiX2NyZWF0ZVZlZGlvQWQiLCJyZXMiLCJpc0VuZGVkIiwicmF3IiwiR2FtZU1vbmV5IiwidGFrZUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxXQUFXLEdBQUdELE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDeEMsSUFBSUUsU0FBUyxHQUFHRixPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDRyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFVBQVUsRUFBQztNQUNQLFdBQVEsSUFBSTtNQUNaQyxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sS0FBSztNQUNiQyxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEQyxHQUFHLEVBQUM7RUFDUixDQUFDO0VBQ0RDLEtBQUssV0FBQUEsTUFBQSxFQUFJLENBQUMsQ0FBQztFQUNYQyxNQUFNLFdBQUFBLE9BQUEsRUFBSTtJQUNOLElBQUksQ0FBQ0MsS0FBSyxHQUFHZixVQUFVLENBQUNnQixJQUFJLENBQUNDLGFBQWEsRUFBRTtJQUM1QyxJQUFJQyxPQUFPLEdBQUcsSUFBSUMsSUFBSSxFQUFFLENBQUNDLE9BQU8sRUFBRTtJQUNsQyxJQUFJQyxZQUFZLEdBQUdsQixTQUFTLENBQUNtQixxQkFBcUIsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQ2hFLElBQUlDLFdBQVcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQ1AsT0FBTyxHQUFHRyxZQUFZLElBQUUsSUFBSSxDQUFDO0lBRTNELElBQUdFLFdBQVcsSUFBSSxJQUFJLEdBQUMsRUFBRSxHQUFDLEVBQUUsRUFBQztNQUN6QixJQUFJLENBQUNYLEdBQUcsR0FBR1ksSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDVixLQUFLLEdBQUdRLFdBQVcsQ0FBQztJQUNuRCxDQUFDLE1BQUssSUFBR0EsV0FBVyxJQUFJLElBQUksR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLENBQUMsRUFBQztNQUNqQyxJQUFJLENBQUNYLEdBQUcsR0FBR1ksSUFBSSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDVixLQUFLLEdBQUdRLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDekQsQ0FBQyxNQUFJO01BQ0QsSUFBSSxDQUFDWCxHQUFHLEdBQUdZLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQ1YsS0FBSyxHQUFHUSxXQUFXLEdBQUcsR0FBRyxDQUFDO0lBQ3pEO0lBQ0EsSUFBSSxDQUFDZixVQUFVLENBQUNrQixNQUFNLEdBQUcsSUFBSSxDQUFDZCxHQUFHLEdBQUMsSUFBSTtFQUMxQyxDQUFDO0VBRURlLFVBQVUsV0FBQUEsV0FBQSxFQUFFO0lBQ1IsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sRUFBRTtJQUNuQjdCLFVBQVUsQ0FBQ2dCLElBQUksQ0FBQ2MsWUFBWSxFQUFFO0VBQ2xDLENBQUM7RUFFREMsZUFBZSxXQUFBQSxnQkFBQSxFQUFFO0lBQ2I1QixTQUFTLENBQUM2QixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBSUMsSUFBSSxHQUFHLElBQUk7SUFDZjlCLFNBQVMsQ0FBQytCLGNBQWMsQ0FBQyxVQUFVQyxHQUFHLEVBQUU7TUFDcEMsSUFBSUEsR0FBRyxDQUFDQyxPQUFPLElBQUlELEdBQUcsQ0FBQ0UsR0FBRyxFQUFFO1FBQ3hCckMsVUFBVSxDQUFDc0MsU0FBUyxJQUFJTCxJQUFJLENBQUNyQixHQUFHLEdBQUMsQ0FBQztRQUNsQ3FCLElBQUksQ0FBQ04sVUFBVSxFQUFFO01BQ3JCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVEWSxTQUFTLFdBQUFBLFVBQUEsRUFBRTtJQUNQcEMsU0FBUyxDQUFDNkIscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDaEMsVUFBVSxDQUFDc0MsU0FBUyxJQUFJLElBQUksQ0FBQzFCLEdBQUc7SUFDaEMsSUFBSSxDQUFDZSxVQUFVLEVBQUU7RUFDckIsQ0FBQyxDQUNEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVVaVRvb2xzID0gcmVxdWlyZShcIkdhbWVVaVRvb2xzXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtb25leWxhYmVsOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIumHkemSseaVsFwiXG4gICAgICAgIH0sXG4gICAgICAgIG51bTowLFxuICAgIH0sXG4gICAgc3RhcnQgKCkge30sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IEdhbWVDb25maWcubWFpbi5nZXRNb25leVNwZWVkKCk7XG4gICAgICAgIGxldCBub3dUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGxldCBsYXN0R2FtZVRpbWUgPSBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwibGFzdFRpbWVcIiwwKTtcbiAgICAgICAgbGV0IG9mZkxpbmVUaW1lID0gTWF0aC5mbG9vcigobm93VGltZSAtIGxhc3RHYW1lVGltZSkvNjAwMCk7XG4gICAgICAgIFxuICAgICAgICBpZihvZmZMaW5lVGltZSA8PSAxMDAwKjYwKjMwKXtcbiAgICAgICAgICAgIHRoaXMubnVtID0gTWF0aC5mbG9vcih0aGlzLnNwZWVkICogb2ZmTGluZVRpbWUpO1xuICAgICAgICB9ZWxzZSBpZihvZmZMaW5lVGltZSA8PSAxMDAwKjYwKjYwKjIpe1xuICAgICAgICAgICAgdGhpcy5udW0gPSBNYXRoLmZsb29yKHRoaXMuc3BlZWQgKiBvZmZMaW5lVGltZSAqIDAuNSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5udW0gPSBNYXRoLmZsb29yKHRoaXMuc3BlZWQgKiBvZmZMaW5lVGltZSAqIDAuMyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb25leWxhYmVsLnN0cmluZyA9IHRoaXMubnVtK1wi6ZOc6ZKxXCI7XG4gICAgfSxcblxuICAgIGNsb3NlQ2xpY2soKXtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluLnNldEdhbWVNb25leSgpO1xuICAgIH0sXG5cbiAgICBkb3VibGV0YWtlQ2xpY2soKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBHYW1lVG9vbHMuX2NyZWF0ZVZlZGlvQWQoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy5pc0VuZGVkIHx8IHJlcy5yYXcpIHtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVNb25leSArPSBzZWxmLm51bSozO1xuICAgICAgICAgICAgICAgIHNlbGYuY2xvc2VDbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgdGFrZUNsaWNrKCl7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMyk7XG4gICAgICAgIEdhbWVDb25maWcuR2FtZU1vbmV5ICs9IHRoaXMubnVtO1xuICAgICAgICB0aGlzLmNsb3NlQ2xpY2soKTtcbiAgICB9LFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/Jptj.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba416ulXmVIiJOk9cVN+oUy', 'Jptj');
// Script/panel/Jptj.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    content: cc.Node,
    miniProgramItemPrb: cc.Prefab,
    // titleLabel : cc.Label,  
    tip: cc.Label
  },
  onLoad: function onLoad() {
    if (GameConfig.boxApps.length == 0) {
      this.tip.node.active = true;
    }
    console.log(GameConfig.boxApps.length);
    for (var i = 0; i < GameConfig.boxApps.length; i++) {
      var item = cc.instantiate(this.miniProgramItemPrb);
      item.getComponent("MiniProgram").init(GameConfig.boxApps[i]);
      this.content.addChild(item);
    }
  },
  close: function close() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
    GameConfig.main.jptj.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcSnB0ai5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJtaW5pUHJvZ3JhbUl0ZW1QcmIiLCJQcmVmYWIiLCJ0aXAiLCJMYWJlbCIsIm9uTG9hZCIsImJveEFwcHMiLCJsZW5ndGgiLCJub2RlIiwiYWN0aXZlIiwiY29uc29sZSIsImxvZyIsImkiLCJpdGVtIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJpbml0IiwiYWRkQ2hpbGQiLCJjbG9zZSIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsImRlc3Ryb3kiLCJtYWluIiwianB0aiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdEMsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDRSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUNyQkMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBR0osRUFBRSxDQUFDSyxJQUFJO0lBQ2pCQyxrQkFBa0IsRUFBR04sRUFBRSxDQUFDTyxNQUFNO0lBQzlCO0lBQ0FDLEdBQUcsRUFBSVIsRUFBRSxDQUFDUztFQUNkLENBQUM7RUFFREMsTUFBTSxXQUFBQSxPQUFBLEVBQUU7SUFDSixJQUFHYixVQUFVLENBQUNjLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJLENBQUMsRUFBQztNQUM5QixJQUFJLENBQUNKLEdBQUcsQ0FBQ0ssSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtJQUMvQjtJQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ25CLFVBQVUsQ0FBQ2MsT0FBTyxDQUFDQyxNQUFNLENBQUM7SUFDdEMsS0FBSSxJQUFJSyxDQUFDLEdBQUMsQ0FBQyxFQUFFQSxDQUFDLEdBQUNwQixVQUFVLENBQUNjLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFSyxDQUFDLEVBQUUsRUFBQztNQUMxQyxJQUFJQyxJQUFJLEdBQUdsQixFQUFFLENBQUNtQixXQUFXLENBQUMsSUFBSSxDQUFDYixrQkFBa0IsQ0FBQztNQUNsRFksSUFBSSxDQUFDRSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUNDLElBQUksQ0FBQ3hCLFVBQVUsQ0FBQ2MsT0FBTyxDQUFDTSxDQUFDLENBQUMsQ0FBQztNQUM1RCxJQUFJLENBQUNiLE9BQU8sQ0FBQ2tCLFFBQVEsQ0FBQ0osSUFBSSxDQUFDO0lBQy9CO0VBQ0osQ0FBQztFQUVESyxLQUFLLEVBQUcsU0FBQUEsTUFBQSxFQUFVO0lBQ2R4QixTQUFTLENBQUN5QixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBSSxDQUFDWCxJQUFJLENBQUNZLE9BQU8sRUFBRTtJQUNuQjVCLFVBQVUsQ0FBQzZCLElBQUksQ0FBQ0MsSUFBSSxDQUFDYixNQUFNLEdBQUcsSUFBSTtFQUN0QztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNvbnRlbnQgOiBjYy5Ob2RlLFxuICAgICAgICBtaW5pUHJvZ3JhbUl0ZW1QcmIgOiBjYy5QcmVmYWIsXG4gICAgICAgIC8vIHRpdGxlTGFiZWwgOiBjYy5MYWJlbCwgIFxuICAgICAgICB0aXAgIDogY2MuTGFiZWxcbiAgICB9LFxuXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIGlmKEdhbWVDb25maWcuYm94QXBwcy5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICB0aGlzLnRpcC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coR2FtZUNvbmZpZy5ib3hBcHBzLmxlbmd0aCk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPEdhbWVDb25maWcuYm94QXBwcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMubWluaVByb2dyYW1JdGVtUHJiKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiTWluaVByb2dyYW1cIikuaW5pdChHYW1lQ29uZmlnLmJveEFwcHNbaV0pO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNsb3NlIDogZnVuY3Rpb24oKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluLmpwdGouYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/eq4096.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b4d8xPgKNFmqt5jom0Qwwj', 'eq4096');
// Script/eq4096.js

"use strict";

var eqconf = require('./eqconf.js');
var EQ = {
  peq: null,
  Enable: function Enable() {
    if (this.peq) this.peq.config.enable = true;
  },
  Disable: function Disable() {
    if (this.peq) this.peq.config.enable = false;
  },
  init: function init(config) {
    var _this = this;
    this.config = config;
    this.config.cid = eqconf.EQCID;
    this.config.appid = eqconf.WXAPPID;
    this.config.wxauth = eqconf.EQWXAUTH;
    this.config.version = eqconf.EQVERSION;
    this.config.enable = false;
    this.config.data = {};
    wx.onShow(function (res) {
      _this.onShow(res);
    });
    wx.onHide(function (res) {
      _this.onHide(res);
    });
    wx.onError(function (msg, stack) {
      _this.onError(msg, stack);
    });
    this.config.launcheroption = wx.getLaunchOptionsSync();
    wx.getSystemInfo(function (res) {
      _this.config.sysinfo = res;
    }, function (e) {}, function (f) {});
    wx.onTouchEnd(function (res) {
      _this.touchend(res);
    });
    this.peq = this;
    this.peq.syncdata();
  },
  event: function event(e) {
    this.peq.config.event = e;
    this.peq.syncdata();
    this.peq.config.event = undefined;
  },
  codelogin: function codelogin(res) {
    var _this2 = this;
    console.log("codelogin===》", res);
    this.d(res);
    this.config.code = res.code;
    this.d(this.config);
    wx.request({
      url: this.config.wxlogin,
      method: "POST",
      dataType: "json",
      data: this.config,
      success: function success(d) {
        _this2.d(d);
        console.log("微信登录===》", d.data.data);
        if (d.data.ret == 0) {
          var openid = d.data.data.openid;
          res.openid = openid;
          _this2.showuserinfobutton(res);
        } else {
          res.fail(d.data);
        }
      },
      fail: function fail(data) {
        _this2.d(data);
        res.fail(data);
      }
    });
  },
  wxlogin: function wxlogin(config) {
    var _this3 = this;
    console.log("wxlogin===》", config);
    wx.login({
      success: function success(res) {
        _this3.d(res);
        console.log("微信登录code===》", res);
        if (res.code) {
          config.code = res.code;
          _this3.peq.codelogin(config);
        } else {
          config.fail(res);
        }
      }
    });
  },
  login: function login(config) {
    var _this4 = this;
    console.log("login===》", config);
    wx.checkSession({
      success: function success(res) {
        // 未过期
        config.success(res);
        wx.getStorage({
          key: 'eq4096user.json',
          success: function success(res) {
            if (res.data) {
              _this4.peq.d("read userinfo");
              config.success(res.data);
            } else {
              _this4.peq.wxlogin(config);
            }
          },
          fail: function fail(res) {
            _this4.peq.wxlogin(config);
          }
        });
      },
      fail: function fail() {
        // 过期
        _this4.peq.wxlogin(config);
      }
    });
  },
  showuserinfobutton: function showuserinfobutton(res) {
    var _this5 = this;
    var button = wx.createUserInfoButton(res);
    button.onTap(function (p) {
      _this5.d(p);
      p.openId = res.openid;
      p.userInfo.openId = res.openid;
      _this5.config.userinfo = p;
      wx.setStorage({
        key: 'eq4096user.json',
        data: p,
        success: function success(p2) {
          res.success(p);
          button.destroy();
        },
        fail: function fail(p3) {
          res.fail(p3);
        }
      });
      _this5.syncdata();
    });
  },
  getconfig: function getconfig() {
    return this.peq.config;
  },
  setuserinfo: function setuserinfo(userinfo) {
    if (!this.peq.config.userinfo) {
      this.peq.config.userinfo = userinfo;
      this.peq.syncdata();
    }
  },
  d: function d(s) {
    if (this.config.debug) console.log(s);
  },
  onError: function onError(msg, stack) {
    this.config.error = {
      msg: msg,
      stack: stack
    };
    this.syncdata();
    this.config.error = undefined;
    if (this.config.onError) {
      this.config.onError(msg, stack);
    }
  },
  touchend: function touchend(res) {
    this.touchflag = true;
  },
  syncdata: function syncdata() {
    var _this6 = this;
    this.d(JSON.stringify(this.config));
    wx.request({
      url: this.config.api_url,
      method: "POST",
      dataType: "json",
      data: this.config,
      success: function success(d) {
        _this6.d(d);
        if (d.data.ret == 0) {
          _this6.parseconfig(d.data.data);
        }
      },
      fail: function fail(data) {
        console.log(data);
      }
    });
  },
  touch: function touch(d) {
    var _this7 = this;
    switch (d.type) {
      case "img":
        wx.previewImage({
          urls: [d["shareimage"]]
        });
        break;
      case "wxapp":
        {
          d.success = function () {
            _this7.peq.config.opdata = d;
            _this7.peq.syncdata();
            _this7.peq.config.opdata = undefined;
          };
          wx[d["op"]](d);
        }
        break;
    }
  },
  SyncData: function SyncData() {
    if (this.peq) this.peq.syncdata();
  },
  onShow: function onShow(res) {
    this.config.start_res = res;
    if (this.config.onShow) {
      this.config.onShow(res);
    }
  },
  onHide: function onHide(res) {
    if (this.config.onHide) this.config.onHide(res);
  },
  parseconfig: function parseconfig(data) {
    this.config.data = data;
    if (this.config.parse) {
      this.config.parse(data);
    }
  }
};
module.exports = EQ;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxlcTQwOTYuanMiXSwibmFtZXMiOlsiZXFjb25mIiwicmVxdWlyZSIsIkVRIiwicGVxIiwiRW5hYmxlIiwiY29uZmlnIiwiZW5hYmxlIiwiRGlzYWJsZSIsImluaXQiLCJfdGhpcyIsImNpZCIsIkVRQ0lEIiwiYXBwaWQiLCJXWEFQUElEIiwid3hhdXRoIiwiRVFXWEFVVEgiLCJ2ZXJzaW9uIiwiRVFWRVJTSU9OIiwiZGF0YSIsInd4Iiwib25TaG93IiwicmVzIiwib25IaWRlIiwib25FcnJvciIsIm1zZyIsInN0YWNrIiwibGF1bmNoZXJvcHRpb24iLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsImdldFN5c3RlbUluZm8iLCJzeXNpbmZvIiwiZSIsImYiLCJvblRvdWNoRW5kIiwidG91Y2hlbmQiLCJzeW5jZGF0YSIsImV2ZW50IiwidW5kZWZpbmVkIiwiY29kZWxvZ2luIiwiX3RoaXMyIiwiY29uc29sZSIsImxvZyIsImQiLCJjb2RlIiwicmVxdWVzdCIsInVybCIsInd4bG9naW4iLCJtZXRob2QiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXQiLCJvcGVuaWQiLCJzaG93dXNlcmluZm9idXR0b24iLCJmYWlsIiwiX3RoaXMzIiwibG9naW4iLCJfdGhpczQiLCJjaGVja1Nlc3Npb24iLCJnZXRTdG9yYWdlIiwia2V5IiwiX3RoaXM1IiwiYnV0dG9uIiwiY3JlYXRlVXNlckluZm9CdXR0b24iLCJvblRhcCIsInAiLCJvcGVuSWQiLCJ1c2VySW5mbyIsInVzZXJpbmZvIiwic2V0U3RvcmFnZSIsInAyIiwiZGVzdHJveSIsInAzIiwiZ2V0Y29uZmlnIiwic2V0dXNlcmluZm8iLCJzIiwiZGVidWciLCJlcnJvciIsInRvdWNoZmxhZyIsIl90aGlzNiIsIkpTT04iLCJzdHJpbmdpZnkiLCJhcGlfdXJsIiwicGFyc2Vjb25maWciLCJ0b3VjaCIsIl90aGlzNyIsInR5cGUiLCJwcmV2aWV3SW1hZ2UiLCJ1cmxzIiwib3BkYXRhIiwiU3lu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QUFNLENBQUNDLE9BQU8sR0FBRzFGLEVBQUUiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIGVxY29uZiA9IHJlcXVpcmUoJy4vZXFjb25mLmpzJyk7XG5cbnZhciBFUSA9IHtcbiAgICBwZXEgOiBudWxsLFxuICAgIEVuYWJsZSgpIHtcbiAgICBpZiAodGhpcy5wZXEpIHRoaXMucGVxLmNvbmZpZy5lbmFibGUgPSB0cnVlO1xuICB9LFxuICAgRGlzYWJsZSgpIHtcbiAgICBpZiAodGhpcy5wZXEpdGhpcy5wZXEuY29uZmlnLmVuYWJsZSA9IGZhbHNlO1xuICB9LFxuICBpbml0KGNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMuY29uZmlnLmNpZCA9IGVxY29uZi5FUUNJRDtcbiAgICB0aGlzLmNvbmZpZy5hcHBpZCA9IGVxY29uZi5XWEFQUElEO1xuICAgIHRoaXMuY29uZmlnLnd4YXV0aCA9IGVxY29uZi5FUVdYQVVUSDtcbiAgICB0aGlzLmNvbmZpZy52ZXJzaW9uID0gZXFjb25mLkVRVkVSU0lPTjtcbiAgICB0aGlzLmNvbmZpZy5lbmFibGUgPSBmYWxzZTtcbiAgICB0aGlzLmNvbmZpZy5kYXRhID0ge307XG4gICAgd3gub25TaG93KChyZXMpID0+IHsgdGhpcy5vblNob3cocmVzKTsgfSk7XG4gICAgd3gub25IaWRlKChyZXMpID0+IHsgdGhpcy5vbkhpZGUocmVzKTsgfSk7XG4gICAgd3gub25FcnJvcigobXNnLCBzdGFjaykgPT4geyB0aGlzLm9uRXJyb3IobXNnLCBzdGFjayk7IH0pO1xuICAgIHRoaXMuY29uZmlnLmxhdW5jaGVyb3B0aW9uID0gd3guZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcbiAgICB3eC5nZXRTeXN0ZW1JbmZvKChyZXMpID0+IHtcbiAgICAgIHRoaXMuY29uZmlnLnN5c2luZm8gPSByZXM7XG4gICAgfSwgKGUpID0+IHsgfSwgKGYpID0+IHsgfSk7XG4gICAgd3gub25Ub3VjaEVuZCgocmVzKSA9PiB7XG4gICAgICB0aGlzLnRvdWNoZW5kKHJlcyk7XG4gICAgfSk7XG4gICAgdGhpcy5wZXEgPSB0aGlzO1xuICAgIHRoaXMucGVxLnN5bmNkYXRhKCk7XG5cbiAgfSxcbiAgZXZlbnQoZSkge1xuICAgIHRoaXMucGVxLmNvbmZpZy5ldmVudCA9IGU7XG4gICAgdGhpcy5wZXEuc3luY2RhdGEoKTtcbiAgICB0aGlzLnBlcS5jb25maWcuZXZlbnQgPSB1bmRlZmluZWQ7XG4gIH0sXG4gIGNvZGVsb2dpbihyZXMpIHtcbiAgICBjb25zb2xlLmxvZyhcImNvZGVsb2dpbj09PeOAi1wiLCByZXMpXG4gICAgdGhpcy5kKHJlcyk7XG4gICAgdGhpcy5jb25maWcuY29kZSA9IHJlcy5jb2RlO1xuICAgIHRoaXMuZCh0aGlzLmNvbmZpZyk7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IHRoaXMuY29uZmlnLnd4bG9naW4sXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgZGF0YTogdGhpcy5jb25maWcsXG4gICAgICBzdWNjZXNzOiAoZCkgPT4ge1xuICAgICAgICB0aGlzLmQoZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5b6u5L+h55m75b2VPT0944CLXCIsIGQuZGF0YS5kYXRhKVxuICAgICAgICBpZiAoZC5kYXRhLnJldCA9PSAwKSB7XG4gICAgICAgICAgdmFyIG9wZW5pZCA9IGQuZGF0YS5kYXRhLm9wZW5pZDtcbiAgICAgICAgICByZXMub3BlbmlkID0gb3BlbmlkO1xuICAgICAgICAgIHRoaXMuc2hvd3VzZXJpbmZvYnV0dG9uKHJlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLmZhaWwoZC5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IChkYXRhKSA9PiB7XG4gICAgICAgIHRoaXMuZChkYXRhKTtcbiAgICAgICAgcmVzLmZhaWwoZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cblxuXG4gIHd4bG9naW4oY29uZmlnKSB7XG4gICAgY29uc29sZS5sb2coXCJ3eGxvZ2luPT0944CLXCIsIGNvbmZpZylcbiAgICB3eC5sb2dpbih7XG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuZChyZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuW+ruS/oeeZu+W9lWNvZGU9PT3jgItcIiwgcmVzKVxuICAgICAgICBpZiAocmVzLmNvZGUpIHtcbiAgICAgICAgICBjb25maWcuY29kZSA9IHJlcy5jb2RlO1xuICAgICAgICAgIHRoaXMucGVxLmNvZGVsb2dpbihjb25maWcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbmZpZy5mYWlsKHJlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBsb2dpbihjb25maWcpIHtcbiAgICBjb25zb2xlLmxvZyhcImxvZ2luPT0944CLXCIsIGNvbmZpZylcbiAgICB3eC5jaGVja1Nlc3Npb24oe1xuICAgICAgc3VjY2VzczoocmVzKT0+e1xuICAgICAgICAvLyDmnKrov4fmnJ9cbiAgICAgICAgY29uZmlnLnN1Y2Nlc3MocmVzKTtcbiAgICAgICAgd3guZ2V0U3RvcmFnZSh7XG4gICAgICAgICAga2V5OidlcTQwOTZ1c2VyLmpzb24nLCBcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKT0+IHtcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhKSB7XG4gICAgICAgICAgICAgIHRoaXMucGVxLmQoXCJyZWFkIHVzZXJpbmZvXCIpO1xuICAgICAgICAgICAgICBjb25maWcuc3VjY2VzcyhyZXMuZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnBlcS53eGxvZ2luKGNvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOihyZXMpPT57XG4gICAgICAgICAgICB0aGlzLnBlcS53eGxvZ2luKGNvbmZpZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBmYWlsOigpPT57XG4gICAgICAgIC8vIOi/h+acn1xuICAgICAgICB0aGlzLnBlcS53eGxvZ2luKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHNob3d1c2VyaW5mb2J1dHRvbihyZXMpIHtcbiAgICBsZXQgYnV0dG9uID0gd3guY3JlYXRlVXNlckluZm9CdXR0b24ocmVzKTtcbiAgICBidXR0b24ub25UYXAoKHApID0+IHtcbiAgICAgIHRoaXMuZChwKTtcbiAgICAgIHAub3BlbklkID0gcmVzLm9wZW5pZDtcbiAgICAgIHAudXNlckluZm8ub3BlbklkID0gcmVzLm9wZW5pZDtcbiAgICAgIHRoaXMuY29uZmlnLnVzZXJpbmZvID0gcDtcbiAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6ICdlcTQwOTZ1c2VyLmpzb24nLFxuICAgICAgICBkYXRhOiBwLFxuICAgICAgICBzdWNjZXNzOiAocDIpPT4ge1xuICAgICAgICAgIHJlcy5zdWNjZXNzKHApO1xuICAgICAgICAgIGJ1dHRvbi5kZXN0cm95KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IChwMyk9PiB7XG4gICAgICAgICAgcmVzLmZhaWwocDMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc3luY2RhdGEoKTtcbiAgICB9KTtcbiAgfSxcblxuICBnZXRjb25maWcoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVxLmNvbmZpZztcbiAgfSxcbiAgc2V0dXNlcmluZm8odXNlcmluZm8pIHtcbiAgICBpZiAoIXRoaXMucGVxLmNvbmZpZy51c2VyaW5mbykge1xuICAgICAgdGhpcy5wZXEuY29uZmlnLnVzZXJpbmZvID0gdXNlcmluZm87XG4gICAgICB0aGlzLnBlcS5zeW5jZGF0YSgpO1xuICAgIH1cbiAgfSxcbiAgZChzKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmRlYnVnKSBjb25zb2xlLmxvZyhzKTtcbiAgfSxcblxuXG4gIG9uRXJyb3IobXNnLCBzdGFjaykge1xuICAgIHRoaXMuY29uZmlnLmVycm9yID0geyBtc2csIHN0YWNrIH07XG4gICAgdGhpcy5zeW5jZGF0YSgpO1xuICAgIHRoaXMuY29uZmlnLmVycm9yID0gdW5kZWZpbmVkO1xuICAgIGlmICh0aGlzLmNvbmZpZy5vbkVycm9yKSB7XG4gICAgICB0aGlzLmNvbmZpZy5vbkVycm9yKG1zZywgc3RhY2spO1xuICAgIH1cbiAgfSxcbiAgdG91Y2hlbmQocmVzKSB7XG4gICAgdGhpcy50b3VjaGZsYWcgPSB0cnVlO1xuICB9LFxuICBzeW5jZGF0YSgpIHtcbiAgICB0aGlzLmQoSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWcpKTtcbiAgICB3eC5yZXF1ZXN0KHtcbiAgICAgIHVybDogdGhpcy5jb25maWcuYXBpX3VybCxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICBkYXRhOiB0aGlzLmNvbmZpZyxcbiAgICAgIHN1Y2Nlc3M6IChkKSA9PiB7XG4gICAgICAgIHRoaXMuZChkKTtcbiAgICAgICAgaWYgKGQuZGF0YS5yZXQgPT0gMCkge1xuICAgICAgICAgIHRoaXMucGFyc2Vjb25maWcoZC5kYXRhLmRhdGEpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgdG91Y2goZCkge1xuICAgIHN3aXRjaCAoZC50eXBlKSB7XG4gICAgICBjYXNlIFwiaW1nXCI6XG4gICAgICAgIHd4LnByZXZpZXdJbWFnZSh7IHVybHM6IFtkW1wic2hhcmVpbWFnZVwiXV0gfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInd4YXBwXCI6IHtcbiAgICAgICAgZC5zdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGVxLmNvbmZpZy5vcGRhdGEgPSBkO1xuICAgICAgICAgIHRoaXMucGVxLnN5bmNkYXRhKCk7XG4gICAgICAgICAgdGhpcy5wZXEuY29uZmlnLm9wZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcbiAgICAgICAgd3hbZFtcIm9wXCJdXShkKTtcbiAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuICBTeW5jRGF0YSgpXG4gIHtcbiAgICBpZih0aGlzLnBlcSkgdGhpcy5wZXEuc3luY2RhdGEoKTtcbiAgfSxcbiAgb25TaG93KHJlcykge1xuICAgIHRoaXMuY29uZmlnLnN0YXJ0X3JlcyA9IHJlcztcbiAgICBpZiAodGhpcy5jb25maWcub25TaG93KSB7XG4gICAgICB0aGlzLmNvbmZpZy5vblNob3cocmVzKTtcbiAgICB9XG4gIH0sXG5cbiAgb25IaWRlKHJlcykge1xuICAgIGlmICh0aGlzLmNvbmZpZy5vbkhpZGUpXG4gICAgICB0aGlzLmNvbmZpZy5vbkhpZGUocmVzKTtcbiAgfSxcblxuICBwYXJzZWNvbmZpZyhkYXRhKSB7XG4gICAgICB0aGlzLmNvbmZpZy5kYXRhID0gZGF0YTtcbiAgICAgIGlmKHRoaXMuY29uZmlnLnBhcnNlKSB7XG4gICAgICAgIHRoaXMuY29uZmlnLnBhcnNlKGRhdGEpO1xuICAgICAgfVxuXG4gIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IEVRO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/MiniProgram.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c633dGipg5GwLP5E7pNhJN2', 'MiniProgram');
// Script/panel/MiniProgram.js

"use strict";

var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    iconSprite: cc.Sprite,
    nameLabel: cc.Label
  },
  start: function start() {},
  init: function init(data) {
    this.appId = data.appId;
    this.path = data.path;
    GameTools.createImageApp(data.icon, this.iconSprite);
    this.nameLabel.string = data.name;
  },
  navigateToMiniProgram: function navigateToMiniProgram() {
    GameTools.playSimpleAudioEngine(3);
    GameTools.navigateToMiniProgram(this.appId, this.path);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcTWluaVByb2dyYW0uanMiXSwibmFtZXMiOlsiR2FtZVRvb2xzIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaWNvblNwcml0ZSIsIlNwcml0ZSIsIm5hbWVMYWJlbCIsIkxhYmVsIiwic3RhcnQiLCJpbml0IiwiZGF0YSIsImFwcElkIiwicGF0aCIsImNyZWF0ZUltYWdlQXBwIiwiaWNvbiIsInN0cmluZyIsIm5hbWUiLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW0iLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBUyxHQUFHQyxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUNyQkMsVUFBVSxFQUFFO0lBQ1JDLFVBQVUsRUFBR0osRUFBRSxDQUFDSyxNQUFNO0lBQ3RCQyxTQUFTLEVBQUdOLEVBQUUsQ0FBQ087RUFDbkIsQ0FBQztFQUNEQyxLQUFLLFdBQUFBLE1BQUEsRUFBRyxDQUVSLENBQUM7RUFFREMsSUFBSSxFQUFFLFNBQUFBLEtBQVVDLElBQUksRUFBRTtJQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0QsSUFBSSxDQUFDQyxLQUFLO0lBQ3ZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHRixJQUFJLENBQUNFLElBQUk7SUFFckJkLFNBQVMsQ0FBQ2UsY0FBYyxDQUFDSCxJQUFJLENBQUNJLElBQUksRUFBQyxJQUFJLENBQUNWLFVBQVUsQ0FBQztJQUNuRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1MsTUFBTSxHQUFHTCxJQUFJLENBQUNNLElBQUk7RUFDckMsQ0FBQztFQUVEQyxxQkFBcUIsRUFBRyxTQUFBQSxzQkFBQSxFQUFVO0lBQzlCbkIsU0FBUyxDQUFDb0IscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDcEIsU0FBUyxDQUFDbUIscUJBQXFCLENBQUMsSUFBSSxDQUFDTixLQUFLLEVBQUMsSUFBSSxDQUFDQyxJQUFJLENBQUM7RUFDekQ7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWNvblNwcml0ZSA6IGNjLlNwcml0ZSxcbiAgICAgICAgbmFtZUxhYmVsIDogY2MuTGFiZWxcbiAgICB9LFxuICAgIHN0YXJ0KCkge1xuXG4gICAgfSxcbiAgICBcbiAgICBpbml0OiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB0aGlzLmFwcElkID0gZGF0YS5hcHBJZDtcbiAgICAgICAgdGhpcy5wYXRoID0gZGF0YS5wYXRoO1xuXG4gICAgICAgIEdhbWVUb29scy5jcmVhdGVJbWFnZUFwcChkYXRhLmljb24sdGhpcy5pY29uU3ByaXRlKTtcbiAgICAgICAgdGhpcy5uYW1lTGFiZWwuc3RyaW5nID0gZGF0YS5uYW1lO1xuICAgIH0sXG5cbiAgICBuYXZpZ2F0ZVRvTWluaVByb2dyYW0gOiBmdW5jdGlvbigpe1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDMpO1xuICAgICAgICBHYW1lVG9vbHMubmF2aWdhdGVUb01pbmlQcm9ncmFtKHRoaXMuYXBwSWQsdGhpcy5wYXRoKTtcbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/MoneyPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e191FlXvBMNZLtRaKcYN/B', 'MoneyPanel');
// Script/panel/MoneyPanel.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    moneylabel: {
      "default": null,
      type: cc.Label,
      displayName: "金钱数"
    },
    num: 0
  },
  start: function start() {},
  onLoad: function onLoad() {
    this.moneylabel.string = Math.floor(GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 2);
  },
  closeClick: function closeClick() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
  },
  doubletakeClick: function doubletakeClick() {
    GameTools.playSimpleAudioEngine(3);
    GameConfig.shareComponent = this;
    GameTools.sharePicture();
    GameConfig.shareTime = new Date().getTime();
  },
  shareSuccess: function shareSuccess() {
    GameConfig.GameMoney += GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 2;
    GameConfig.main.setGameMoney();
    this.closeClick();
    GameTools.showToast('获得' + GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 2 + '铜钱');
  } // update (dt) {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcTW9uZXlQYW5lbC5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibW9uZXlsYWJlbCIsInR5cGUiLCJMYWJlbCIsImRpc3BsYXlOYW1lIiwibnVtIiwic3RhcnQiLCJvbkxvYWQiLCJzdHJpbmciLCJNYXRoIiwiZmxvb3IiLCJidXlHb2xkVXBncmFkZSIsIkdhbWVQZXJzb25NYXhMZXZlbCIsImNsb3NlQ2xpY2siLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJub2RlIiwiZGVzdHJveSIsImRvdWJsZXRha2VDbGljayIsInNoYXJlQ29tcG9uZW50Iiwic2hhcmVQaWN0dXJlIiwic2hhcmVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJzaGFyZVN1Y2Nlc3MiLCJHYW1lTW9uZXkiLCJtYWluIiwic2V0R2FtZU1vbmV5Iiwic2hvd1RvYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcENFLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsVUFBVSxFQUFDO01BQ1AsV0FBUSxJQUFJO01BQ1pDLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxLQUFLO01BQ2JDLFdBQVcsRUFBQztJQUNoQixDQUFDO0lBQ0RDLEdBQUcsRUFBQztFQUNSLENBQUM7RUFFREMsS0FBSyxXQUFBQSxNQUFBLEVBQUksQ0FBQyxDQUFDO0VBQ1hDLE1BQU0sV0FBQUEsT0FBQSxFQUFJO0lBQ04sSUFBSSxDQUFDTixVQUFVLENBQUNPLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNoQixVQUFVLENBQUNpQixjQUFjLENBQUNqQixVQUFVLENBQUNrQixrQkFBa0IsQ0FBQyxHQUFDLENBQUMsQ0FBQztFQUNuRyxDQUFDO0VBQ0RDLFVBQVUsV0FBQUEsV0FBQSxFQUFFO0lBQ1JqQixTQUFTLENBQUNrQixxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBSSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sRUFBRTtFQUN2QixDQUFDO0VBQ0RDLGVBQWUsV0FBQUEsZ0JBQUEsRUFBRTtJQUNickIsU0FBUyxDQUFDa0IscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDcEIsVUFBVSxDQUFDd0IsY0FBYyxHQUFHLElBQUk7SUFDaEN0QixTQUFTLENBQUN1QixZQUFZLEVBQUU7SUFDeEJ6QixVQUFVLENBQUMwQixTQUFTLEdBQUksSUFBSUMsSUFBSSxFQUFFLENBQUVDLE9BQU8sRUFBRTtFQUNqRCxDQUFDO0VBQ0RDLFlBQVksV0FBQUEsYUFBQSxFQUFFO0lBQ1Y3QixVQUFVLENBQUM4QixTQUFTLElBQUk5QixVQUFVLENBQUNpQixjQUFjLENBQUNqQixVQUFVLENBQUNrQixrQkFBa0IsQ0FBQyxHQUFDLENBQUM7SUFDbEZsQixVQUFVLENBQUMrQixJQUFJLENBQUNDLFlBQVksRUFBRTtJQUM5QixJQUFJLENBQUNiLFVBQVUsRUFBRTtJQUNqQmpCLFNBQVMsQ0FBQytCLFNBQVMsQ0FBQyxJQUFJLEdBQUNqQyxVQUFVLENBQUNpQixjQUFjLENBQUNqQixVQUFVLENBQUNrQixrQkFBa0IsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUM7RUFDN0YsQ0FBQyxDQUVEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBtb25leWxhYmVsOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIumHkemSseaVsFwiXG4gICAgICAgIH0sXG4gICAgICAgIG51bTowLFxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7fSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLm1vbmV5bGFiZWwuc3RyaW5nID0gTWF0aC5mbG9vcihHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW0dhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsXSoyKTtcbiAgICB9LFxuICAgIGNsb3NlQ2xpY2soKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgIGRvdWJsZXRha2VDbGljaygpe1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDMpO1xuICAgICAgICBHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgR2FtZVRvb2xzLnNoYXJlUGljdHVyZSgpO1xuICAgICAgICBHYW1lQ29uZmlnLnNoYXJlVGltZSA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XG4gICAgfSxcbiAgICBzaGFyZVN1Y2Nlc3MoKXtcbiAgICAgICAgR2FtZUNvbmZpZy5HYW1lTW9uZXkgKz0gR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbF0qMjtcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluLnNldEdhbWVNb25leSgpO1xuICAgICAgICB0aGlzLmNsb3NlQ2xpY2soKTtcbiAgICAgICAgR2FtZVRvb2xzLnNob3dUb2FzdCgn6I635b6XJytHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW0dhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsXSoyKyfpk5zpkrEnKTtcbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/NewPersion.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '571afPXn1lOrogD+XxkAQQi', 'NewPersion');
// Script/panel/NewPersion.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    colsebtn: {
      "default": null,
      type: cc.Node,
      displayName: "关闭按钮"
    },
    clickbtn: {
      "default": null,
      type: cc.Node,
      displayName: "确定按钮"
    },
    persion: {
      "default": null,
      type: cc.Sprite,
      displayName: "人物"
    },
    persionName: {
      "default": null,
      type: cc.Label,
      displayName: "人物名称"
    },
    tip: {
      "default": null,
      type: cc.Node,
      displayName: "提示字"
    }
  },
  start: function start() {
    GameUiTools.setButtonClickEvents(this, this.colsebtn, "btnFunc");
    GameUiTools.setButtonClickEvents(this, this.clickbtn, "btnFunc");
  },
  onLoad: function onLoad() {
    GameUiTools.setSpriteFrame("persion/LV" + GameConfig.GamePersonMaxLevel, this.persion);
    this.persionName.string = GameConfig.perName[GameConfig.GamePersonMaxLevel - 1];
    if (!GameConfig.IS_GAME_SHARE) {
      this.tip.active = false;
    }
  },
  shareSuccess: function shareSuccess() {
    GameConfig.GameMoney += GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 2;
    GameConfig.main.setGameMoney();
    this.colsePanel();
    GameTools.showToast('获得' + GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 2 + '铜钱');
  },
  btnFunc: function btnFunc(event) {
    GameTools.playSimpleAudioEngine(3);
    var button = event.target;
    if (this.colsebtn == button) {
      this.colsePanel();
    } else if (this.clickbtn == button) {
      GameConfig.shareComponent = this;
      GameTools.sharePicture();
      GameConfig.shareTime = new Date().getTime();
    }
  },
  colsePanel: function colsePanel() {
    this.node.destroy();
  } // update (dt) {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcTmV3UGVyc2lvbi5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsIkdhbWVVaVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb2xzZWJ0biIsInR5cGUiLCJOb2RlIiwiZGlzcGxheU5hbWUiLCJjbGlja2J0biIsInBlcnNpb24iLCJTcHJpdGUiLCJwZXJzaW9uTmFtZSIsIkxhYmVsIiwidGlwIiwic3RhcnQiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsIm9uTG9hZCIsInNldFNwcml0ZUZyYW1lIiwiR2FtZVBlcnNvbk1heExldmVsIiwic3RyaW5nIiwicGVyTmFtZSIsIklTX0dBTUVfU0hBUkUiLCJhY3RpdmUiLCJzaGFyZVN1Y2Nlc3MiLCJHYW1lTW9uZXkiLCJidXlHb2xkVXBncmFkZSIsIm1haW4iLCJzZXRHYW1lTW9uZXkiLCJjb2xzZVBhbmVsIiwic2hvd1RvYXN0IiwiYnRuRnVuYyIsImV2ZW50IiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwiYnV0dG9uIiwidGFyZ2V0Iiwic2hhcmVDb21wb25lbnQiLCJzaGFyZVBpY3R1cmUiLCJzaGFyZVRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsIm5vZGUiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsYUFBYSxDQUFDO0FBRXhDRyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFFBQVEsRUFBQztNQUNMLFdBQVEsSUFBSTtNQUNaQyxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sSUFBSTtNQUNaQyxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNEQyxRQUFRLEVBQUM7TUFDTCxXQUFRLElBQUk7TUFDWkgsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDREUsT0FBTyxFQUFDO01BQ0osV0FBUSxJQUFJO01BQ1pKLElBQUksRUFBQ0wsRUFBRSxDQUFDVSxNQUFNO01BQ2RILFdBQVcsRUFBQztJQUNoQixDQUFDO0lBQ0RJLFdBQVcsRUFBQztNQUNSLFdBQVEsSUFBSTtNQUNaTixJQUFJLEVBQUNMLEVBQUUsQ0FBQ1ksS0FBSztNQUNiTCxXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNETSxHQUFHLEVBQUM7TUFDQSxXQUFRLElBQUk7TUFDWlIsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCO0VBRUosQ0FBQztFQUVETyxLQUFLLFdBQUFBLE1BQUEsRUFBSTtJQUNMZixXQUFXLENBQUNnQixvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDWCxRQUFRLEVBQUUsU0FBUyxDQUFDO0lBQ2hFTCxXQUFXLENBQUNnQixvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDUCxRQUFRLEVBQUUsU0FBUyxDQUFDO0VBQ3BFLENBQUM7RUFDRFEsTUFBTSxXQUFBQSxPQUFBLEVBQUk7SUFDTmpCLFdBQVcsQ0FBQ2tCLGNBQWMsQ0FBQyxZQUFZLEdBQUdyQixVQUFVLENBQUNzQixrQkFBa0IsRUFBRSxJQUFJLENBQUNULE9BQU8sQ0FBQztJQUN0RixJQUFJLENBQUNFLFdBQVcsQ0FBQ1EsTUFBTSxHQUFHdkIsVUFBVSxDQUFDd0IsT0FBTyxDQUFDeEIsVUFBVSxDQUFDc0Isa0JBQWtCLEdBQUMsQ0FBQyxDQUFDO0lBQzdFLElBQUcsQ0FBQ3RCLFVBQVUsQ0FBQ3lCLGFBQWEsRUFBQztNQUN6QixJQUFJLENBQUNSLEdBQUcsQ0FBQ1MsTUFBTSxHQUFHLEtBQUs7SUFDM0I7RUFDSixDQUFDO0VBRURDLFlBQVksV0FBQUEsYUFBQSxFQUFFO0lBQ1YzQixVQUFVLENBQUM0QixTQUFTLElBQUk1QixVQUFVLENBQUM2QixjQUFjLENBQUM3QixVQUFVLENBQUNzQixrQkFBa0IsQ0FBQyxHQUFDLENBQUM7SUFDbEZ0QixVQUFVLENBQUM4QixJQUFJLENBQUNDLFlBQVksRUFBRTtJQUM5QixJQUFJLENBQUNDLFVBQVUsRUFBRTtJQUNqQjlCLFNBQVMsQ0FBQytCLFNBQVMsQ0FBQyxJQUFJLEdBQUNqQyxVQUFVLENBQUM2QixjQUFjLENBQUM3QixVQUFVLENBQUNzQixrQkFBa0IsQ0FBQyxHQUFDLENBQUMsR0FBQyxJQUFJLENBQUM7RUFDN0YsQ0FBQztFQUNEWSxPQUFPLFdBQUFBLFFBQUNDLEtBQUssRUFBQztJQUNWakMsU0FBUyxDQUFDa0MscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUlDLE1BQU0sR0FBR0YsS0FBSyxDQUFDRyxNQUFNO0lBQ3pCLElBQUcsSUFBSSxDQUFDOUIsUUFBUSxJQUFJNkIsTUFBTSxFQUFDO01BQ3ZCLElBQUksQ0FBQ0wsVUFBVSxFQUFFO0lBQ3JCLENBQUMsTUFBSyxJQUFHLElBQUksQ0FBQ3BCLFFBQVEsSUFBSXlCLE1BQU0sRUFBQztNQUM3QnJDLFVBQVUsQ0FBQ3VDLGNBQWMsR0FBRyxJQUFJO01BQ2hDckMsU0FBUyxDQUFDc0MsWUFBWSxFQUFFO01BQ3hCeEMsVUFBVSxDQUFDeUMsU0FBUyxHQUFJLElBQUlDLElBQUksRUFBRSxDQUFFQyxPQUFPLEVBQUU7SUFDakQ7RUFDSixDQUFDO0VBRURYLFVBQVUsV0FBQUEsV0FBQSxFQUFFO0lBQ1IsSUFBSSxDQUFDWSxJQUFJLENBQUNDLE9BQU8sRUFBRTtFQUN2QixDQUFDLENBQ0Q7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY29sc2VidG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLlhbPpl63mjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICBjbGlja2J0bjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuehruWumuaMiemSrlwiXG4gICAgICAgIH0sXG4gICAgICAgIHBlcnNpb246e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5TcHJpdGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuS6uueJqVwiXG4gICAgICAgIH0sXG4gICAgICAgIHBlcnNpb25OYW1lOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuS6uueJqeWQjeensFwiXG4gICAgICAgIH0sXG4gICAgICAgIHRpcDp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuaPkOekuuWtl1wiXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuY29sc2VidG4sIFwiYnRuRnVuY1wiKTtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0QnV0dG9uQ2xpY2tFdmVudHModGhpcywgdGhpcy5jbGlja2J0biwgXCJidG5GdW5jXCIpO1xuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgR2FtZVVpVG9vbHMuc2V0U3ByaXRlRnJhbWUoXCJwZXJzaW9uL0xWXCIgKyBHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbCwgdGhpcy5wZXJzaW9uKTtcbiAgICAgICAgdGhpcy5wZXJzaW9uTmFtZS5zdHJpbmcgPSBHYW1lQ29uZmlnLnBlck5hbWVbR2FtZUNvbmZpZy5HYW1lUGVyc29uTWF4TGV2ZWwtMV07XG4gICAgICAgIGlmKCFHYW1lQ29uZmlnLklTX0dBTUVfU0hBUkUpe1xuICAgICAgICAgICAgdGhpcy50aXAuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hhcmVTdWNjZXNzKCl7XG4gICAgICAgIEdhbWVDb25maWcuR2FtZU1vbmV5ICs9IEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbR2FtZUNvbmZpZy5HYW1lUGVyc29uTWF4TGV2ZWxdKjI7XG4gICAgICAgIEdhbWVDb25maWcubWFpbi5zZXRHYW1lTW9uZXkoKTtcbiAgICAgICAgdGhpcy5jb2xzZVBhbmVsKCk7XG4gICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoJ+iOt+W+lycrR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbF0qMisn6ZOc6ZKxJyk7XG4gICAgfSxcbiAgICBidG5GdW5jKGV2ZW50KXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYodGhpcy5jb2xzZWJ0biA9PSBidXR0b24pe1xuICAgICAgICAgICAgdGhpcy5jb2xzZVBhbmVsKCk7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMuY2xpY2tidG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIEdhbWVDb25maWcuc2hhcmVDb21wb25lbnQgPSB0aGlzO1xuICAgICAgICAgICAgR2FtZVRvb2xzLnNoYXJlUGljdHVyZSgpO1xuICAgICAgICAgICAgR2FtZUNvbmZpZy5zaGFyZVRpbWUgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbHNlUGFuZWwoKXtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/RankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd553fmL+BGfJ9idSJ4ApIP', 'RankItem');
// Script/panel/RankItem.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  name: "RankItem",
  properties: {
    backSprite: cc.Node,
    rankImage: cc.Sprite,
    rankLabel: cc.Label,
    avatarImgSprite: cc.Sprite,
    nickLabel: cc.Label,
    topScoreLabel: cc.Label,
    levelName: cc.Label
  },
  start: function start() {},
  init: function init(rank, data) {
    var _this = this;
    var avatarUrl = data.url;
    // let nick = data.nickname.length <= 10 ? data.nickname : data.nickname.substr(0, 10) + "...";
    var nick = data.nick;
    var grade = data.score;
    var level = data.a1;
    if (rank < 3) {
      this.rankLabel.node.active = false;
      this.rankImage.node.active = true;
      cc.loader.loadRes("r" + (rank + 1), cc.SpriteFrame, function (err, spriteFrame) {
        _this.rankImage.spriteFrame = spriteFrame;
      });
    } else {
      this.rankLabel.string = (rank + 1).toString();
    }
    this.createImage(avatarUrl);
    this.nickLabel.string = nick;
    // this.topScoreLabel.string = grade.toString();
    this.topScoreLabel.string = GameTools.getNumberString(grade);
    if (level) {
      if (level > 42) {
        this.levelName.string = GameConfig.perName[0];
      } else this.levelName.string = GameConfig.perName[level - 1];
    } else {
      this.levelName.string = GameConfig.perName[0];
    }
  },
  createImage: function createImage(avatarUrl) {
    var _this2 = this;
    cc.loader.load({
      url: avatarUrl,
      type: 'jpg'
    }, function (err, texture) {
      _this2.avatarImgSprite.spriteFrame = new cc.SpriteFrame(texture);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcUmFua0l0ZW0uanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJHYW1lVG9vbHMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwibmFtZSIsInByb3BlcnRpZXMiLCJiYWNrU3ByaXRlIiwiTm9kZSIsInJhbmtJbWFnZSIsIlNwcml0ZSIsInJhbmtMYWJlbCIsIkxhYmVsIiwiYXZhdGFySW1nU3ByaXRlIiwibmlja0xhYmVsIiwidG9wU2NvcmVMYWJlbCIsImxldmVsTmFtZSIsInN0YXJ0IiwiaW5pdCIsInJhbmsiLCJkYXRhIiwiX3RoaXMiLCJhdmF0YXJVcmwiLCJ1cmwiLCJuaWNrIiwiZ3JhZGUiLCJzY29yZSIsImxldmVsIiwiYTEiLCJub2RlIiwiYWN0aXZlIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJzdHJpbmciLCJ0b1N0cmluZyIsImNyZWF0ZUltYWdlIiwiZ2V0TnVtYmVyU3RyaW5nIiwicGVyTmFtZSIsIl90aGlzMiIsImxvYWQiLCJ0eXBlIiwidGV4dHVyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDdEMsSUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3BDRSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUNyQkMsSUFBSSxFQUFFLFVBQVU7RUFDaEJDLFVBQVUsRUFBRTtJQUNSQyxVQUFVLEVBQUVMLEVBQUUsQ0FBQ00sSUFBSTtJQUNuQkMsU0FBUyxFQUFFUCxFQUFFLENBQUNRLE1BQU07SUFDcEJDLFNBQVMsRUFBRVQsRUFBRSxDQUFDVSxLQUFLO0lBQ25CQyxlQUFlLEVBQUVYLEVBQUUsQ0FBQ1EsTUFBTTtJQUMxQkksU0FBUyxFQUFFWixFQUFFLENBQUNVLEtBQUs7SUFDbkJHLGFBQWEsRUFBRWIsRUFBRSxDQUFDVSxLQUFLO0lBQ3ZCSSxTQUFTLEVBQUNkLEVBQUUsQ0FBQ1U7RUFDakIsQ0FBQztFQUNESyxLQUFLLFdBQUFBLE1BQUEsRUFBRyxDQUNSLENBQUM7RUFFREMsSUFBSSxFQUFFLFNBQUFBLEtBQVVDLElBQUksRUFBRUMsSUFBSSxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUN4QixJQUFJQyxTQUFTLEdBQUdGLElBQUksQ0FBQ0csR0FBRztJQUN4QjtJQUNBLElBQUlDLElBQUksR0FBR0osSUFBSSxDQUFDSSxJQUFJO0lBQ3BCLElBQUlDLEtBQUssR0FBR0wsSUFBSSxDQUFDTSxLQUFLO0lBQ3RCLElBQUlDLEtBQUssR0FBR1AsSUFBSSxDQUFDUSxFQUFFO0lBRW5CLElBQUlULElBQUksR0FBRyxDQUFDLEVBQUU7TUFDVixJQUFJLENBQUNSLFNBQVMsQ0FBQ2tCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEtBQUs7TUFDbEMsSUFBSSxDQUFDckIsU0FBUyxDQUFDb0IsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtNQUNqQzVCLEVBQUUsQ0FBQzZCLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsSUFBSWIsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFakIsRUFBRSxDQUFDK0IsV0FBVyxFQUFFLFVBQUNDLEdBQUcsRUFBRUMsV0FBVyxFQUFLO1FBQ3RFZCxLQUFJLENBQUNaLFNBQVMsQ0FBQzBCLFdBQVcsR0FBR0EsV0FBVztNQUM1QyxDQUFDLENBQUM7SUFDTixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUN4QixTQUFTLENBQUN5QixNQUFNLEdBQUcsQ0FBQ2pCLElBQUksR0FBRyxDQUFDLEVBQUVrQixRQUFRLEVBQUU7SUFDakQ7SUFFQSxJQUFJLENBQUNDLFdBQVcsQ0FBQ2hCLFNBQVMsQ0FBQztJQUMzQixJQUFJLENBQUNSLFNBQVMsQ0FBQ3NCLE1BQU0sR0FBR1osSUFBSTtJQUM1QjtJQUNBLElBQUksQ0FBQ1QsYUFBYSxDQUFDcUIsTUFBTSxHQUFHbkMsU0FBUyxDQUFDc0MsZUFBZSxDQUFDZCxLQUFLLENBQUM7SUFDNUQsSUFBR0UsS0FBSyxFQUFDO01BQ0wsSUFBR0EsS0FBSyxHQUFDLEVBQUUsRUFBQztRQUNSLElBQUksQ0FBQ1gsU0FBUyxDQUFDb0IsTUFBTSxHQUFHckMsVUFBVSxDQUFDeUMsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUNqRCxDQUFDLE1BQ0csSUFBSSxDQUFDeEIsU0FBUyxDQUFDb0IsTUFBTSxHQUFHckMsVUFBVSxDQUFDeUMsT0FBTyxDQUFDYixLQUFLLEdBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUMsTUFBSTtNQUNELElBQUksQ0FBQ1gsU0FBUyxDQUFDb0IsTUFBTSxHQUFHckMsVUFBVSxDQUFDeUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqRDtFQUNKLENBQUM7RUFDREYsV0FBVyxXQUFBQSxZQUFDaEIsU0FBUyxFQUFFO0lBQUEsSUFBQW1CLE1BQUE7SUFDbkJ2QyxFQUFFLENBQUM2QixNQUFNLENBQUNXLElBQUksQ0FBQztNQUNYbkIsR0FBRyxFQUFFRCxTQUFTO01BQUVxQixJQUFJLEVBQUU7SUFDMUIsQ0FBQyxFQUFFLFVBQUNULEdBQUcsRUFBRVUsT0FBTyxFQUFLO01BQ2pCSCxNQUFJLENBQUM1QixlQUFlLENBQUNzQixXQUFXLEdBQUcsSUFBSWpDLEVBQUUsQ0FBQytCLFdBQVcsQ0FBQ1csT0FBTyxDQUFDO0lBQ2xFLENBQUMsQ0FBQztFQUNOO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xyXG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgbmFtZTogXCJSYW5rSXRlbVwiLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJhY2tTcHJpdGU6IGNjLk5vZGUsXHJcbiAgICAgICAgcmFua0ltYWdlOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgcmFua0xhYmVsOiBjYy5MYWJlbCxcclxuICAgICAgICBhdmF0YXJJbWdTcHJpdGU6IGNjLlNwcml0ZSxcclxuICAgICAgICBuaWNrTGFiZWw6IGNjLkxhYmVsLFxyXG4gICAgICAgIHRvcFNjb3JlTGFiZWw6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxldmVsTmFtZTpjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24gKHJhbmssIGRhdGEpIHtcclxuICAgICAgICBsZXQgYXZhdGFyVXJsID0gZGF0YS51cmw7XHJcbiAgICAgICAgLy8gbGV0IG5pY2sgPSBkYXRhLm5pY2tuYW1lLmxlbmd0aCA8PSAxMCA/IGRhdGEubmlja25hbWUgOiBkYXRhLm5pY2tuYW1lLnN1YnN0cigwLCAxMCkgKyBcIi4uLlwiO1xyXG4gICAgICAgIGxldCBuaWNrID0gZGF0YS5uaWNrO1xyXG4gICAgICAgIGxldCBncmFkZSA9IGRhdGEuc2NvcmU7XHJcbiAgICAgICAgbGV0IGxldmVsID0gZGF0YS5hMTtcclxuXHJcbiAgICAgICAgaWYgKHJhbmsgPCAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFua0xhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucmFua0ltYWdlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJyXCIgKyAocmFuayArIDEpLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFua0ltYWdlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFua0xhYmVsLnN0cmluZyA9IChyYW5rICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlSW1hZ2UoYXZhdGFyVXJsKTtcclxuICAgICAgICB0aGlzLm5pY2tMYWJlbC5zdHJpbmcgPSBuaWNrO1xyXG4gICAgICAgIC8vIHRoaXMudG9wU2NvcmVMYWJlbC5zdHJpbmcgPSBncmFkZS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMudG9wU2NvcmVMYWJlbC5zdHJpbmcgPSBHYW1lVG9vbHMuZ2V0TnVtYmVyU3RyaW5nKGdyYWRlKTtcclxuICAgICAgICBpZihsZXZlbCl7XHJcbiAgICAgICAgICAgIGlmKGxldmVsPjQyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxOYW1lLnN0cmluZyA9IEdhbWVDb25maWcucGVyTmFtZVswXTtcclxuICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxOYW1lLnN0cmluZyA9IEdhbWVDb25maWcucGVyTmFtZVtsZXZlbC0xXTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbE5hbWUuc3RyaW5nID0gR2FtZUNvbmZpZy5wZXJOYW1lWzBdO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVJbWFnZShhdmF0YXJVcmwpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZCh7XHJcbiAgICAgICAgICAgIHVybDogYXZhdGFyVXJsLCB0eXBlOiAnanBnJ1xyXG4gICAgICAgIH0sIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hdmF0YXJJbWdTcHJpdGUuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/RankingListView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ab62uB5zZKCLuVeGbY8aHs', 'RankingListView');
// Script/panel/RankingListView.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    // backButton: cc.Node,
    shareButton: cc.Node,
    //分享按钮
    rankingScrollView: cc.Sprite,
    //显示排行榜
    shareTicket: null,
    worldRankLayout: cc.Node,
    prefabRankItem: cc.Prefab,
    selfcontent: cc.Node
  },
  onLoad: function onLoad() {},
  start: function start() {
    window.cp = this;
    if (cc.sys.platform === cc.sys.QQ_PLAY) {
      this.drawQQRank();
    } else {
      this.showFriendRank();
      if (!GameConfig.IS_GAME_SHARE) {
        this.shareButton.active = false;
      }
    }
  },
  drawQQRank: function drawQQRank() {
    var attr = "score";
    var order = 1;
    var rankType = 0;
    BK.QQ.getRankListWithoutRoom(attr, order, rankType, function (errCode, cmd, data) {
      BK.Script.log(1, 1, "getRankListWithoutRoom callback  cmd" + cmd + " errCode:" + errCode + "  data:" + JSON.stringify(data));
      // 返回错误码信息
      if (errCode !== 0) {
        BK.Script.log(1, 1, '获取排行榜数据失败!错误码：' + errCode);
        return;
      }
      // 解析数据
      if (data) {
        for (var i = 0; i < data.data.ranking_list.length; ++i) {
          var rd = data.data.ranking_list[i];
          // BK.Script.log(1, 1, '解析数据：' + rd);
          var item = cc.instantiate(window.cp.prefabRankItem);
          item.getComponent('RankItem').init(i, rd);
          window.cp.worldRankLayout.addChild(item);
          if (rd.selfFlag) {
            var userItem = cc.instantiate(window.cp.prefabRankItem);
            userItem.getComponent('RankItem').init(i, rd);
            // userItem.y = -259;
            window.cp.selfcontent.active = true;
            window.cp.selfcontent.addChild(userItem);
          }
        }
      } else {
        var gameTypeNode = new cc.Node();
        gameTypeNode.addComponent(cc.Label).string = "暂无排行榜数据";
        window.cp.node.addChild(gameTypeNode);
      }
    });
  },
  showFriendRank: function showFriendRank() {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      if (window.sharedCanvas != undefined) {
        this.tex = new cc.Texture2D();
        // window.sharedCanvas.width = 750;
        // window.sharedCanvas.height = 1334;
        // 发消息给子域
        console.log("发消息给子域", this.tex);
        if (this.shareTicket != null) {
          window.wx.postMessage({
            messageType: 5,
            MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM,
            shareTicket: this.shareTicket
          });
        } else {
          window.wx.postMessage({
            messageType: 1,
            MAIN_MENU_NUM: GameConfig.MAIN_MENU_NUM
          });
        }
      }
    } else {
      var gameTypeNode = new cc.Node();
      var label = gameTypeNode.addComponent(cc.Label);
      label.string = "暂无好友排行榜数据";
      label.lineHeight = 60;
      this.node.addChild(gameTypeNode);
    }
  },
  buttonFunc: function buttonFunc(event) {
    GameTools.playSimpleAudioEngine(3);
    // let button = event.target;
    // if (this.shareButton == button) {
    GameTools.sharePicture();
    // }
    // return true;
  },

  backButtonFunc: function backButtonFunc(event) {
    GameTools.removeRankData();
    this.node.destroy();
  },
  // 刷新子域的纹理
  _updateSubDomainCanvas: function _updateSubDomainCanvas() {
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      if (window.sharedCanvas != undefined) {
        console.log("刷新子域的纹理:", this.tex);
        var openDataContext = wx.getOpenDataContext();
        var sharedCanvas = openDataContext.canvas;
        console.log("刷新子域的纹理openDataContext:", openDataContext);
        console.log("刷新子域的纹理sharedCanvas:", sharedCanvas);
        this.tex.initWithElement(window.sharedCanvas);
        this.tex.handleLoadedTexture();
        this.rankingScrollView.spriteFrame = new cc.SpriteFrame(this.tex);
      }
    }
  },
  update: function update() {
    this._updateSubDomainCanvas();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcUmFua2luZ0xpc3RWaWV3LmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzaGFyZUJ1dHRvbiIsIk5vZGUiLCJyYW5raW5nU2Nyb2xsVmlldyIsIlNwcml0ZSIsInNoYXJlVGlja2V0Iiwid29ybGRSYW5rTGF5b3V0IiwicHJlZmFiUmFua0l0ZW0iLCJQcmVmYWIiLCJzZWxmY29udGVudCIsIm9uTG9hZCIsInN0YXJ0Iiwid2luZG93IiwiY3AiLCJzeXMiLCJwbGF0Zm9ybSIsIlFRX1BMQVkiLCJkcmF3UVFSYW5rIiwic2hvd0ZyaWVuZFJhbmsiLCJJU19HQU1FX1NIQVJFIiwiYWN0aXZlIiwiYXR0ciIsIm9yZGVyIiwicmFua1R5cGUiLCJCSyIsIlFRIiwiZ2V0UmFua0xpc3RXaXRob3V0Um9vbSIsImVyckNvZGUiLCJjbWQiLCJkYXRhIiwiU2NyaXB0IiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImkiLCJyYW5raW5nX2xpc3QiLCJsZW5ndGgiLCJyZCIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsImdldENvbXBvbmVudCIsImluaXQiLCJhZGRDaGlsZCIsInNlbGZGbGFnIiwidXNlckl0ZW0iLCJnYW1lVHlwZU5vZGUiLCJhZGRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsIm5vZGUiLCJXRUNIQVRfR0FNRSIsInNoYXJlZENhbnZhcyIsInVuZGVmaW5lZCIsInRleCIsIlRleHR1cmUyRCIsImNvbnNvbGUiLCJ3eCIsInBvc3RNZXNzYWdlIiwibWVzc2FnZVR5cGUiLCJNQUlOX01FTlVfTlVNIiwibGFiZWwiLCJsaW5lSGVpZ2h0IiwiYnV0dG9uRnVuYyIsImV2ZW50IiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwic2hhcmVQaWN0dXJlIiwiYmFja0J1dHRvbkZ1bmMiLCJyZW1vdmVSYW5rRGF0YSIsImRlc3Ryb3kiLCJfdXBkYXRlU3ViRG9tYWluQ2FudmFzIiwib3BlbkRhdGFDb250ZXh0IiwiZ2V0T3BlbkRhdGFDb250ZXh0IiwiY2FudmFzIiwiaW5pdFdpdGhFbGVtZW50IiwiaGFuZGxlTG9hZGVkVGV4dHVyZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQ0UsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFDckJDLFVBQVUsRUFBRTtJQUNSO0lBQ0FDLFdBQVcsRUFBRUosRUFBRSxDQUFDSyxJQUFJO0lBQUU7SUFDdEJDLGlCQUFpQixFQUFFTixFQUFFLENBQUNPLE1BQU07SUFBQztJQUM3QkMsV0FBVyxFQUFFLElBQUk7SUFDakJDLGVBQWUsRUFBQ1QsRUFBRSxDQUFDSyxJQUFJO0lBQ3ZCSyxjQUFjLEVBQUNWLEVBQUUsQ0FBQ1csTUFBTTtJQUN4QkMsV0FBVyxFQUFDWixFQUFFLENBQUNLO0VBQ25CLENBQUM7RUFDRFEsTUFBTSxXQUFBQSxPQUFBLEVBQUcsQ0FDVCxDQUFDO0VBQ0RDLEtBQUssV0FBQUEsTUFBQSxFQUFHO0lBQ0pDLE1BQU0sQ0FBQ0MsRUFBRSxHQUFHLElBQUk7SUFDaEIsSUFBR2hCLEVBQUUsQ0FBQ2lCLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLbEIsRUFBRSxDQUFDaUIsR0FBRyxDQUFDRSxPQUFPLEVBQUM7TUFDbEMsSUFBSSxDQUFDQyxVQUFVLEVBQUU7SUFDckIsQ0FBQyxNQUFJO01BQ0QsSUFBSSxDQUFDQyxjQUFjLEVBQUU7TUFDckIsSUFBRyxDQUFDeEIsVUFBVSxDQUFDeUIsYUFBYSxFQUFDO1FBQ3pCLElBQUksQ0FBQ2xCLFdBQVcsQ0FBQ21CLE1BQU0sR0FBRyxLQUFLO01BQ25DO0lB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USxLQUFLbEIsRUFBRSxDQUFDaUIsR0FBRyxDQUFDb0MsV0FBVyxFQUFFO01BQ3hDLElBQUl0QyxNQUFNLENBQUN1QyxZQUFZLElBQUlDLFNBQVMsRUFBRTtRQUNsQ0csT0FBTyxDQUFDeEIsR0FBRyxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUNzQixHQUFHLENBQUM7UUFDaEMsSUFBSWlCLGVBQWUsR0FBR2QsRUFBRSxDQUFDZSxrQkFBa0IsRUFBRTtRQUM3QyxJQUFJcEIsWUFBWSxHQUFHbUIsZUFBZSxDQUFDRSxNQUFNO1FBQ3pDakIsT0FBTyxDQUFDeEIsR0FBRyxDQUFDLHlCQUF5QixFQUFDdUMsZUFBZSxDQUFDO1FBQ3REZixPQUFPLENBQUN4QixHQUFHLENBQUMsc0JBQXNCLEVBQUNvQixZQUFZLENBQUM7UUFDaEQsSUFBSSxDQUFDRSxHQUFHLENBQUNvQixlQUFlLENBQUM3RCxNQUFNLENBQUN1QyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDRSxHQUFHLENBQUNxQixtQkFBbUIsRUFBRTtRQUM5QixJQUFJLENBQUN2RSxpQkFBaUIsQ0FBQ3dFLFdBQVcsR0FBRyxJQUFJOUUsRUFBRSxDQUFDK0UsV0FBVyxDQUFDLElBQUksQ0FBQ3ZCLEdBQUcsQ0FBQztNQUNyRTtJQUNKO0VBQ0osQ0FBQztFQUNEd0IsTUFBTSxXQUFBQSxPQUFBLEVBQUc7SUFDTCxJQUFJLENBQUNSLHNCQUFzQixFQUFFO0VBQ2pDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xyXG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGJhY2tCdXR0b246IGNjLk5vZGUsXHJcbiAgICAgICAgc2hhcmVCdXR0b246IGNjLk5vZGUsIC8v5YiG5Lqr5oyJ6ZKuXHJcbiAgICAgICAgcmFua2luZ1Njcm9sbFZpZXc6IGNjLlNwcml0ZSwvL+aYvuekuuaOkuihjOamnFxyXG4gICAgICAgIHNoYXJlVGlja2V0OiBudWxsLFxyXG4gICAgICAgIHdvcmxkUmFua0xheW91dDpjYy5Ob2RlLFxyXG4gICAgICAgIHByZWZhYlJhbmtJdGVtOmNjLlByZWZhYixcclxuICAgICAgICBzZWxmY29udGVudDpjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH0sXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB3aW5kb3cuY3AgPSB0aGlzO1xyXG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlFRX1BMQVkpe1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdRUVJhbmsoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93RnJpZW5kUmFuaygpO1xyXG4gICAgICAgICAgICBpZighR2FtZUNvbmZpZy5JU19HQU1FX1NIQVJFKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICBkcmF3UVFSYW5rOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGF0dHIgPSBcInNjb3JlXCI7XHJcbiAgICAgICAgdmFyIG9yZGVyID0gMTtcclxuICAgICAgICB2YXIgcmFua1R5cGUgPSAwO1xyXG4gICAgICAgIEJLLlFRLmdldFJhbmtMaXN0V2l0aG91dFJvb20oYXR0ciwgb3JkZXIsIHJhbmtUeXBlLCBmdW5jdGlvbiAoZXJyQ29kZSwgY21kLCBkYXRhKSB7XHJcbiAgICAgICAgICAgIEJLLlNjcmlwdC5sb2coMSwgMSwgXCJnZXRSYW5rTGlzdFdpdGhvdXRSb29tIGNhbGxiYWNrICBjbWRcIiArIGNtZCArIFwiIGVyckNvZGU6XCIgKyBlcnJDb2RlICsgXCIgIGRhdGE6XCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIC8vIOi/lOWbnumUmeivr+eggeS/oeaBr1xyXG4gICAgICAgICAgICBpZiAoZXJyQ29kZSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgQksuU2NyaXB0LmxvZygxLCAxLCAn6I635Y+W5o6S6KGM5qac5pWw5o2u5aSx6LSlIemUmeivr+egge+8micgKyBlcnJDb2RlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDop6PmnpDmlbDmja5cclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5kYXRhLnJhbmtpbmdfbGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZCA9IGRhdGEuZGF0YS5yYW5raW5nX2xpc3RbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQksuU2NyaXB0LmxvZygxLCAxLCAn6Kej5p6Q5pWw5o2u77yaJyArIHJkKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHdpbmRvdy5jcC5wcmVmYWJSYW5rSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoJ1JhbmtJdGVtJykuaW5pdChpLCByZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNwLndvcmxkUmFua0xheW91dC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmQuc2VsZkZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJJdGVtID0gY2MuaW5zdGFudGlhdGUod2luZG93LmNwLnByZWZhYlJhbmtJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckl0ZW0uZ2V0Q29tcG9uZW50KCdSYW5rSXRlbScpLmluaXQoaSwgcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2VySXRlbS55ID0gLTI1OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNwLnNlbGZjb250ZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jcC5zZWxmY29udGVudC5hZGRDaGlsZCh1c2VySXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGV0IGdhbWVUeXBlTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgICAgICAgICBnYW1lVHlwZU5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuaaguaXoOaOkuihjOamnOaVsOaNrlwiO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmNwLm5vZGUuYWRkQ2hpbGQoZ2FtZVR5cGVOb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNob3dGcmllbmRSYW5rKCkge1xyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnNoYXJlZENhbnZhcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4ID0gbmV3IGNjLlRleHR1cmUyRCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gd2luZG93LnNoYXJlZENhbnZhcy53aWR0aCA9IDc1MDtcclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5zaGFyZWRDYW52YXMuaGVpZ2h0ID0gMTMzNDtcclxuICAgICAgICAgICAgICAgIC8vIOWPkea2iOaBr+e7meWtkOWfn1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlj5Hmtojmga/nu5nlrZDln59cIix0aGlzLnRleCApXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGFyZVRpY2tldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lnd4LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1BSU5fTUVOVV9OVU06IEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVUaWNrZXQ6IHRoaXMuc2hhcmVUaWNrZXRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lnd4LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1BSU5fTUVOVV9OVU06IEdhbWVDb25maWcuTUFJTl9NRU5VX05VTSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBnYW1lVHlwZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBnYW1lVHlwZU5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCLmmoLml6Dlpb3lj4vmjpLooYzmppzmlbDmja5cIjtcclxuICAgICAgICAgICAgbGFiZWwubGluZUhlaWdodCA9IDYwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoZ2FtZVR5cGVOb2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYnV0dG9uRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcclxuICAgICAgICAvLyBsZXQgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnNoYXJlQnV0dG9uID09IGJ1dHRvbikge1xyXG4gICAgICAgIEdhbWVUb29scy5zaGFyZVBpY3R1cmUoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgYmFja0J1dHRvbkZ1bmM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIEdhbWVUb29scy5yZW1vdmVSYW5rRGF0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyDliLfmlrDlrZDln5/nmoTnurnnkIZcclxuICAgIF91cGRhdGVTdWJEb21haW5DYW52YXMoKSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2hhcmVkQ2FudmFzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliLfmlrDlrZDln5/nmoTnurnnkIY6XCIsdGhpcy50ZXgpXHJcbiAgICAgICAgICAgICAgICBsZXQgb3BlbkRhdGFDb250ZXh0ID0gd3guZ2V0T3BlbkRhdGFDb250ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2hhcmVkQ2FudmFzID0gb3BlbkRhdGFDb250ZXh0LmNhbnZhcztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yi35paw5a2Q5Z+f55qE57q555CGb3BlbkRhdGFDb250ZXh0OlwiLG9wZW5EYXRhQ29udGV4dClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yi35paw5a2Q5Z+f55qE57q555CGc2hhcmVkQ2FudmFzOlwiLHNoYXJlZENhbnZhcylcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4LmluaXRXaXRoRWxlbWVudCh3aW5kb3cuc2hhcmVkQ2FudmFzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4LmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFua2luZ1Njcm9sbFZpZXcuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGhpcy50ZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLl91cGRhdGVTdWJEb21haW5DYW52YXMoKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/ShopItemList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ce59Jg/9JNU52zLtP8+4EV', 'ShopItemList');
// Script/panel/ShopItemList.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    persion: {
      "default": null,
      type: cc.Node,
      displayName: "人物"
    },
    level: {
      "default": null,
      type: cc.Node,
      displayName: "人物等级"
    },
    perName: {
      "default": null,
      type: cc.Label,
      displayName: "角色名"
    },
    coinNode: {
      "default": null,
      type: cc.Node,
      displayName: "元宝"
    },
    moneytbtn: {
      "default": null,
      type: cc.Node,
      displayName: "金钱购买按钮"
    },
    unlock: {
      "default": null,
      type: cc.Sprite,
      displayName: "解锁"
    },
    moneyLabel: {
      "default": null,
      type: cc.Label,
      displayName: "金钱"
    },
    unpersion: {
      "default": null,
      type: cc.Node,
      displayName: "解锁的小人"
    },
    number: 1
  },
  initItem: function initItem(number) {
    console.log(this);
    this.number = number;
    this.showItemList();
  },
  coinButtonFunc: function coinButtonFunc() {
    if (GameConfig.main.buyCoinFunc(this.number)) {
      console.log("元宝成功购买");
      this.coinNode.getChildByName("Numcoin").getComponent(cc.Label).string = GameTools.getNumberString(GameConfig.buyCoinUpgrade[this.number]);
    }
  },
  showItemList: function showItemList() {
    this.level.getComponent('Number').showNumber(this.number);
    GameUiTools.setSpriteFrame("persion/LV" + this.number, this.persion.getComponent(cc.Sprite));
    if (this.number <= GameConfig.GamePersonMaxLevel) {
      this.persion.color = cc.Color.WHITE;
      this.perName.string = GameConfig.perName[this.number - 1];
      if (this.number == 1 || this.number <= GameConfig.GamePersonMaxLevel - 4) {
        GameUiTools.setSpriteFrame("shop/qb", this.unlock);
        this.moneyLabel.node.active = true;
        this.moneyLabel.string = GameTools.getNumberString(GameConfig.buyGoldUpgrade[this.number]);
        GameUiTools.setButtonClickEvents(this, this.moneytbtn, "buyButtonFunc");
      } else {
        this.unpersion.active = true;
        if (this.number <= GameConfig.GamePersonMaxLevel - 2) {
          this.coinNode.active = true;
          this.coinNode.getChildByName("Numcoin").getComponent(cc.Label).string = GameTools.getNumberString(GameConfig.buyCoinUpgrade[this.number]);
          //显示元宝的购买价格
          GameUiTools.setButtonClickEvents(this, this.coinNode, "coinButtonFunc");
        }
      }
    } else {
      this.persion.color = cc.Color.BLACK;
      this.perName.string = "??";
      this.unpersion.active = true;
    }
  },
  buyButtonFunc: function buyButtonFunc() {
    if (GameConfig.main.bugGoldFunc(this.number)) {
      console.log("购买成功");
      this.moneyLabel.string = GameTools.getNumberString(GameConfig.buyGoldUpgrade[this.number]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2hvcEl0ZW1MaXN0LmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZVVpVG9vbHMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBlcnNpb24iLCJ0eXBlIiwiTm9kZSIsImRpc3BsYXlOYW1lIiwibGV2ZWwiLCJwZXJOYW1lIiwiTGFiZWwiLCJjb2luTm9kZSIsIm1vbmV5dGJ0biIsInVubG9jayIsIlNwcml0ZSIsIm1vbmV5TGFiZWwiLCJ1bnBlcnNpb24iLCJudW1iZXIiLCJpbml0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJzaG93SXRlbUxpc3QiLCJjb2luQnV0dG9uRnVuYyIsIm1haW4iLCJidXlDb2luRnVuYyIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiZ2V0TnVtYmVyU3RyaW5nIiwiYnV5Q29pblVwZ3JhZGUiLCJzaG93TnVtYmVyIiwic2V0U3ByaXRlRnJhbWUiLCJHYW1lUGVyc29uTWF4TGV2ZWwiLCJjb2xvciIsIkNvbG9yIiwiV0hJVEUiLCJub2RlIiwiYWN0aXZlIiwiYnV5R29sZFVwZ3JhZGUiLCJzZXRCdXR0b25DbGlja0V2ZW50cyIsIkJMQUNLIiwiYnV5QnV0dG9uRnVuYyIsImJ1Z0dvbGRGdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFlBQVksQ0FBQztBQUN0QyxJQUFJQyxTQUFTLEdBQUdELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDcEMsSUFBSUUsV0FBVyxHQUFHRixPQUFPLENBQUMsYUFBYSxDQUFDO0FBRXhDRyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLE9BQU8sRUFBQztNQUNKLFdBQVEsSUFBSTtNQUNaQyxJQUFJLEVB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SUFDWCxJQUFHN0MsVUFBVSxDQUFDMkIsSUFBSSxDQUFDbUIsV0FBVyxDQUFDLElBQUksQ0FBQ3pCLE1BQU0sQ0FBQyxFQUFDO01BQ3hDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDbkIsSUFBSSxDQUFDTCxVQUFVLENBQUNZLE1BQU0sR0FBRzdCLFNBQVMsQ0FBQzhCLGVBQWUsQ0FBQ2hDLFVBQVUsQ0FBQzBDLGNBQWMsQ0FBQyxJQUFJLENBQUNyQixNQUFNLENBQUMsQ0FBQztJQUM5RjtFQUNKO0FBR0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBlcnNpb246e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLkurrnialcIlxuICAgICAgICB9LFxuICAgICAgICBsZXZlbDp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLk5vZGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuS6uueJqeetiee6p1wiXG4gICAgICAgIH0sXG4gICAgICAgIHBlck5hbWU6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi6KeS6Imy5ZCNXCJcbiAgICAgICAgfSxcbiAgICAgICAgY29pbk5vZGU6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLlhYPlrp1cIlxuICAgICAgICB9LFxuICAgICAgICBtb25leXRidG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLph5HpkrHotK3kubDmjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICB1bmxvY2s6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5TcHJpdGUsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIuino+mUgVwiXG4gICAgICAgIH0sXG4gICAgICAgIG1vbmV5TGFiZWw6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi6YeR6ZKxXCJcbiAgICAgICAgfSxcbiAgICAgICAgdW5wZXJzaW9uOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi6Kej6ZSB55qE5bCP5Lq6XCJcbiAgICAgICAgfSxcbiAgICAgICAgbnVtYmVyOjEsXG5cbiAgICB9LFxuICAgIGluaXRJdGVtKG51bWJlcil7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICAgIHRoaXMubnVtYmVyID0gbnVtYmVyO1xuICAgICAgICB0aGlzLnNob3dJdGVtTGlzdCgpO1xuICAgIH0sXG4gICAgY29pbkJ1dHRvbkZ1bmMoKXtcbiAgICAgICAgaWYoR2FtZUNvbmZpZy5tYWluLmJ1eUNvaW5GdW5jKHRoaXMubnVtYmVyKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWFg+WuneaIkOWKn+i0reS5sFwiKTtcbiAgICAgICAgICAgIHRoaXMuY29pbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJOdW1jb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gR2FtZVRvb2xzLmdldE51bWJlclN0cmluZyhHYW1lQ29uZmlnLmJ1eUNvaW5VcGdyYWRlW3RoaXMubnVtYmVyXSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dJdGVtTGlzdCgpe1xuICAgICAgICB0aGlzLmxldmVsLmdldENvbXBvbmVudCgnTnVtYmVyJykuc2hvd051bWJlcih0aGlzLm51bWJlcik7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldFNwcml0ZUZyYW1lKFwicGVyc2lvbi9MVlwiK3RoaXMubnVtYmVyLHRoaXMucGVyc2lvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSk7XG4gICAgICAgIGlmKHRoaXMubnVtYmVyIDw9IEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsKXtcbiAgICAgICAgICAgIHRoaXMucGVyc2lvbi5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgdGhpcy5wZXJOYW1lLnN0cmluZyA9IEdhbWVDb25maWcucGVyTmFtZVt0aGlzLm51bWJlci0xXTtcbiAgICAgICAgICAgIGlmKHRoaXMubnVtYmVyID09IDEgfHwgdGhpcy5udW1iZXIgPD0gKEdhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsIC00KSl7XG4gICAgICAgICAgICAgICAgR2FtZVVpVG9vbHMuc2V0U3ByaXRlRnJhbWUoXCJzaG9wL3FiXCIsdGhpcy51bmxvY2spO1xuICAgICAgICAgICAgICAgIHRoaXMubW9uZXlMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5tb25leUxhYmVsLnN0cmluZyA9IEdhbWVUb29scy5nZXROdW1iZXJTdHJpbmcoR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVt0aGlzLm51bWJlcl0pO1xuICAgICAgICAgICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMubW9uZXl0YnRuLCBcImJ1eUJ1dHRvbkZ1bmNcIik7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnVucGVyc2lvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubnVtYmVyIDw9IChHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbCAtMikpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvaW5Ob2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29pbk5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJOdW1jb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gR2FtZVRvb2xzLmdldE51bWJlclN0cmluZyhHYW1lQ29uZmlnLmJ1eUNvaW5VcGdyYWRlW3RoaXMubnVtYmVyXSk7XG4gICAgICAgICAgICAgICAgICAgIC8v5pi+56S65YWD5a6d55qE6LSt5Lmw5Lu35qC8XG4gICAgICAgICAgICAgICAgICAgIEdhbWVVaVRvb2xzLnNldEJ1dHRvbkNsaWNrRXZlbnRzKHRoaXMsIHRoaXMuY29pbk5vZGUsIFwiY29pbkJ1dHRvbkZ1bmNcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucGVyc2lvbi5jb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xuICAgICAgICAgICAgdGhpcy5wZXJOYW1lLnN0cmluZyA9IFwiPz9cIjtcbiAgICAgICAgICAgIHRoaXMudW5wZXJzaW9uLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGJ1eUJ1dHRvbkZ1bmMoKXtcbiAgICAgICAgaWYoR2FtZUNvbmZpZy5tYWluLmJ1Z0dvbGRGdW5jKHRoaXMubnVtYmVyKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIui0reS5sOaIkOWKn1wiKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlMYWJlbC5zdHJpbmcgPSBHYW1lVG9vbHMuZ2V0TnVtYmVyU3RyaW5nKEdhbWVDb25maWcuYnV5R29sZFVwZ3JhZGVbdGhpcy5udW1iZXJdKTtcbiAgICAgICAgfVxuICAgIH0sXG5cblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/ShopPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '88f8fhtf7xH87nhaVzumEAM', 'ShopPanel');
// Script/panel/ShopPanel.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    closebtn: {
      "default": null,
      type: cc.Node,
      displayName: "关闭按钮"
    },
    shopItemPrefab: {
      "default": null,
      type: cc.Prefab,
      displayName: "商品节点"
    },
    showContent: {
      "default": null,
      type: cc.Node,
      displayName: "显示商品内容"
    },
    moneyLabel: {
      "default": null,
      type: cc.Label,
      displayName: "金钱"
    }
  },
  onLoad: function onLoad() {
    var _this = this;
    this.setMoney();
    this.init(0);
    var i = 1;
    this.schedule(function () {
      _this.init(i++);
    }, 0.5, 5, 0.5);
  },
  start: function start() {
    GameUiTools.setButtonClickEvents(this, this.closebtn, "buttonFunc");
  },
  init: function init(count) {
    for (var i = count * 6; i < count * 6 + 6; i++) {
      var shopItem = cc.instantiate(this.shopItemPrefab);
      shopItem.getComponent('ShopItemList').initItem(i + 1);
      this.showContent.addChild(shopItem, i, "shopItem");
    }
  },
  closePanel: function closePanel() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
  },
  buttonFunc: function buttonFunc(event) {
    var button = event.target;
    if (this.closebtn == button) {
      this.closePanel();
    }
  },
  setMoney: function setMoney() {
    this.moneyLabel.string = GameTools.getNumberString(GameConfig.GameMoney);
  },
  update: function update(dt) {
    this.setMoney();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2hvcFBhbmVsLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZVVpVG9vbHMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNsb3NlYnRuIiwidHlwZSIsIk5vZGUiLCJkaXNwbGF5TmFtZSIsInNob3BJdGVtUHJlZmFiIiwiUHJlZmFiIiwic2hvd0NvbnRlbnQiLCJtb25leUxhYmVsIiwiTGFiZWwiLCJvbkxvYWQiLCJfdGhpcyIsInNldE1vbmV5IiwiaW5pdCIsImkiLCJzY2hlZHVsZSIsInN0YXJ0Iiwic2V0QnV0dG9uQ2xpY2tFdmVudHMiLCJjb3VudCIsInNob3BJdGVtIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJpbml0SXRlbSIsImFkZENoaWxkIiwiY2xvc2VQYW5lbCIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsIm5vZGUiLCJkZXN0cm95IiwiYnV0dG9uRnVuYyIsImV2ZW50IiwiYnV0dG9uIiwidGFyZ2V0Iiwic3RyaW5nIiwiZ2V0TnVtYmVyU3RyaW5nIiwiR2FtZU1vbmV5IiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFFeENHLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFDO01BQ0wsV0FBUSxJQUFJO01BQ1pDLElBQUksRUFBQ0wsRUFBRSxDQUFDTSxJQUFJO01BQ1pDLFdBQVcsRUFBQztJQUNoQixDQUFDO0lBQ0RDLGNBQWMsRUFBQztNQUNYLFdBQVEsSUFBSTtNQUNaSCxJQUFJLEVBQUNMLEVBQUUsQ0FBQ1MsTUFBTTtNQUNkRixXQUFXLEVBQUM7SUFDaEIsQ0FBQztJQUNERyxXQUFXLEVBQUM7TUFDUixXQUFRLElBQUk7TUFDWkwsSUFBSSxFQUFDTCxFQUFFLENBQUNNLElBQUk7TUFDWkMsV0FBVyxFQUFDO0lBQ2hCLENBQUM7SUFDREksVUFBVSxFQUFDO01BQ1AsV0FBUSxJQUFJO01BQ1pOLElBQUksRUFBQ0wsRUFBRSxDQUFDWSxLQUFLO01BQ2JMLFdBQVcsRUFBQztJQUNoQjtFQUNKLENBQUM7RUFHRE0sTUFBTSxXQUFBQSxPQUFBLEVBQUk7SUFBQSxJQUFBQyxLQUFBO0lBQ04sSUFBSSxDQUFDQyxRQUFRLEVBQUU7SUFDZixJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDWixJQUFJQyxDQUFDLEdBQUMsQ0FBQztJQUNQLElBQUksQ0FBQ0MsUUFBUSxDQUFDLFlBQUk7TUFDZEosS0FBSSxDQUFDRSxJQUFJLENBQUNDLENBQUMsRUFBRSxDQUFDO0lBQ2xCLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQztFQUNoQixDQUFDO0VBRURFLEtBQUssV0FBQUEsTUFBQSxFQUFJO0lBQ0xwQixXQUFXLENBQUNxQixvQkFBb0IsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDaEIsUUFBUSxFQUFDLFlBQVksQ0FBQztFQUNyRSxDQUFDO0VBQ0RZLElBQUksV0FBQUEsS0FBQ0ssS0FBSyxFQUFDO0lBQ1AsS0FBSSxJQUFJSixDQUFDLEdBQUNJLEtBQUssR0FBQyxDQUFDLEVBQUNKLENBQUMsR0FBQ0ksS0FBSyxHQUFDLENBQUMsR0FBQyxDQUFDLEVBQUNKLENBQUMsRUFBRSxFQUFDO01BQzlCLElBQUlLLFFBQVEsR0FBR3RCLEVBQUUsQ0FBQ3VCLFdBQVcsQ0FBQyxJQUFJLENBQUNmLGNBQWMsQ0FBQztNQUNsRGMsUUFBUSxDQUFDRSxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUNDLFFBQVEsQ0FBQ1IsQ0FBQyxHQUFDLENBQUMsQ0FBQztNQUNuRCxJQUFJLENBQUNQLFdBQVcsQ0FBQ2dCLFFBQVEsQ0FBQ0osUUFBUSxFQUFDTCxDQUFDLEVBQUMsVUFBVSxDQUFDO0lBRXBEO0VBQ0osQ0FBQztFQUNEVSxVQUFVLFdBQUFBLFdBQUEsRUFBRTtJQUNSN0IsU0FBUyxDQUFDOEIscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEVBQUU7RUFDdkIsQ0FBQztFQUVEQyxVQUFVLFdBQUFBLFdBQUNDLEtBQUssRUFBQztJQUNiLElBQUlDLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxNQUFNO0lBQ3pCLElBQUcsSUFBSSxDQUFDOUIsUUFBUSxJQUFJNkIsTUFBTSxFQUFDO01BQ3ZCLElBQUksQ0FBQ04sVUFBVSxFQUFFO0lBQ3JCO0VBQ0osQ0FBQztFQUNEWixRQUFRLFdBQUFBLFNBQUEsRUFBRTtJQUNOLElBQUksQ0FBQ0osVUFBVSxDQUFDd0IsTUFBTSxHQUFHckMsU0FBUyxDQUFDc0MsZUFBZSxDQUFDeEMsVUFBVSxDQUFDeUMsU0FBUyxDQUFDO0VBQzVFLENBQUM7RUFDREMsTUFBTSxXQUFBQSxPQUFFQyxFQUFFLEVBQUU7SUFDUixJQUFJLENBQUN4QixRQUFRLEVBQUU7RUFDbkI7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBHYW1lQ29uZmlnID0gcmVxdWlyZShcIkdhbWVDb25maWdcIik7XG52YXIgR2FtZVRvb2xzID0gcmVxdWlyZShcIkdhbWVUb29sc1wiKTtcbnZhciBHYW1lVWlUb29scyA9IHJlcXVpcmUoXCJHYW1lVWlUb29sc1wiKTtcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgY2xvc2VidG46e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLlhbPpl63mjInpkq5cIlxuICAgICAgICB9LFxuICAgICAgICBzaG9wSXRlbVByZWZhYjp7XG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXG4gICAgICAgICAgICB0eXBlOmNjLlByZWZhYixcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi5ZWG5ZOB6IqC54K5XCJcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0NvbnRlbnQ6e1xuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxuICAgICAgICAgICAgdHlwZTpjYy5Ob2RlLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6XCLmmL7npLrllYblk4HlhoXlrrlcIlxuICAgICAgICB9LFxuICAgICAgICBtb25leUxhYmVsOntcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTGFiZWwsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTpcIumHkemSsVwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zZXRNb25leSgpO1xuICAgICAgICB0aGlzLmluaXQoMCk7XG4gICAgICAgIGxldCBpPTE7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCk9PntcbiAgICAgICAgICAgIHRoaXMuaW5pdChpKyspO1xuICAgICAgICB9LDAuNSw1LDAuNSlcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBHYW1lVWlUb29scy5zZXRCdXR0b25DbGlja0V2ZW50cyh0aGlzLHRoaXMuY2xvc2VidG4sXCJidXR0b25GdW5jXCIpO1xuICAgIH0sXG4gICAgaW5pdChjb3VudCl7XG4gICAgICAgIGZvcihsZXQgaT1jb3VudCo2O2k8Y291bnQqNis2O2krKyl7XG4gICAgICAgICAgICBsZXQgc2hvcEl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnNob3BJdGVtUHJlZmFiKTtcbiAgICAgICAgICAgIHNob3BJdGVtLmdldENvbXBvbmVudCgnU2hvcEl0ZW1MaXN0JykuaW5pdEl0ZW0oaSsxKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQuYWRkQ2hpbGQoc2hvcEl0ZW0saSxcInNob3BJdGVtXCIpO1xuXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NlUGFuZWwoKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuXG4gICAgYnV0dG9uRnVuYyhldmVudCl7XG4gICAgICAgIGxldCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmKHRoaXMuY2xvc2VidG4gPT0gYnV0dG9uKXtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRNb25leSgpe1xuICAgICAgICB0aGlzLm1vbmV5TGFiZWwuc3RyaW5nID0gR2FtZVRvb2xzLmdldE51bWJlclN0cmluZyhHYW1lQ29uZmlnLkdhbWVNb25leSk7XG4gICAgfSxcbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIHRoaXMuc2V0TW9uZXkoKTtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/SelfApp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e001cqjoAlLlLXXJ4g/buUF', 'SelfApp');
// Script/panel/SelfApp.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    content: cc.Node,
    miniProgramItemPrb: cc.Node,
    tip: cc.Label
  },
  onLoad: function onLoad() {
    var _this = this;
    if (GameConfig.selfBoxApps.length == 0) {
      this.tip.node.active = true;
    }
    console.log(GameConfig.selfBoxApps.length);
    var _loop = function _loop(i) {
      var item = cc.instantiate(_this.miniProgramItemPrb);
      var app = item.getComponent(cc.Sprite);
      GameTools.createImage(GameConfig.selfBoxApps[i].icon, app);
      item.on(cc.Node.EventType.TOUCH_START, function () {
        GameTools.navigateToMiniProgram(null, GameConfig.selfBoxApps[i].path);
      });
      item.active = true;
      _this.content.addChild(item);
    };
    for (var i = 0; i < GameConfig.selfBoxApps.length; i++) {
      _loop(i);
    }
  },
  close: function close() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2VsZkFwcC5qcyJdLCJuYW1lcyI6WyJHYW1lQ29uZmlnIiwicmVxdWlyZSIsIkdhbWVUb29scyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJtaW5pUHJvZ3JhbUl0ZW1QcmIiLCJ0aXAiLCJMYWJlbCIsIm9uTG9hZCIsIl90aGlzIiwic2VsZkJveEFwcHMiLCJsZW5ndGgiLCJub2RlIiwiYWN0aXZlIiwiY29uc29sZSIsImxvZyIsIl9sb29wIiwiaSIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsImFwcCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImNyZWF0ZUltYWdlIiwiaWNvbiIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW0iLCJwYXRoIiwiYWRkQ2hpbGQiLCJjbG9zZSIsInBsYXlTaW1wbGVBdWRpb0VuZ2luZSIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQ0UsRUFBRSxDQUFDQyxLQUFLLENBQUM7RUFDTCxXQUFTRCxFQUFFLENBQUNFLFNBQVM7RUFDckJDLFVBQVUsRUFBRTtJQUNSQyxPQUFPLEVBQUdKLEVBQUUsQ0FBQ0ssSUFBSTtJQUNqQkMsa0JBQWtCLEVBQUdOLEVBQUUsQ0FBQ0ssSUFBSTtJQUM1QkUsR0FBRyxFQUFJUCxFQUFFLENBQUNRO0VBQ2QsQ0FBQztFQUVEQyxNQUFNLFdBQUFBLE9BQUEsRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDSixJQUFHYixVQUFVLENBQUNjLFdBQVcsQ0FBQ0MsTUFBTSxJQUFJLENBQUMsRUFBQztNQUNsQyxJQUFJLENBQUNMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSTtJQUMvQjtJQUNBQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ25CLFVBQVUsQ0FBQ2MsV0FBVyxDQUFDQyxNQUFNLENBQUM7SUFBQyxJQUFBSyxLQUFBLFlBQUFBLE1BQUFDLENBQUEsRUFDTztNQUM5QyxJQUFJQyxJQUFJLEdBQUduQixFQUFFLENBQUNvQixXQUFXLENBQUNWLEtBQUksQ0FBQ0osa0JBQWtCLENBQUM7TUFDbEQsSUFBSWUsR0FBRyxHQUFHRixJQUFJLENBQUNHLFlBQVksQ0FBQ3RCLEVBQUUsQ0FBQ3VCLE1BQU0sQ0FBQztNQUN0Q3hCLFNBQVMsQ0FBQ3lCLFdBQVcsQ0FBQzNCLFVBQVUsQ0FBQ2MsV0FBVyxDQUFDTyxDQUFDLENBQUMsQ0FBQ08sSUFBSSxFQUFDSixHQUFHLENBQUM7TUFFekRGLElBQUksQ0FBQ08sRUFBRSxDQUFDMUIsRUFBRSxDQUFDSyxJQUFJLENBQUNzQixTQUFTLENBQUNDLFdBQVcsRUFBQyxZQUFJO1FBQ3RDN0IsU0FBUyxDQUFDOEIscUJBQXFCLENBQUMsSUFBSSxFQUFDaEMsVUFBVSxDQUFDYyxXQUFXLENBQUNPLENBQUMsQ0FBQyxDQUFDWSxJQUFJLENBQUM7TUFDeEUsQ0FBQyxDQUFDO01BQ0ZYLElBQUksQ0FBQ0wsTUFBTSxHQUFHLElBQUk7TUFDbEJKLEtBQUksQ0FBQ04sT0FBTyxDQUFDMkIsUUFBUSxDQUFDWixJQUFJLENBQUM7SUFDL0IsQ0FBQztJQVZELEtBQUksSUFBSUQsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxHQUFDckIsVUFBVSxDQUFDYyxXQUFXLENBQUNDLE1BQU0sRUFBRU0sQ0FBQyxFQUFFO01BQUFELEtBQUEsQ0FBQUMsQ0FBQTtJQUFBO0VBV3JELENBQUM7RUFFRGMsS0FBSyxFQUFHLFNBQUFBLE1BQUEsRUFBVTtJQUNkakMsU0FBUyxDQUFDa0MscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQ3BCLElBQUksQ0FBQ3FCLE9BQU8sRUFBRTtFQUN2QjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSByZXF1aXJlKFwiR2FtZUNvbmZpZ1wiKTtcbnZhciBHYW1lVG9vbHMgPSByZXF1aXJlKFwiR2FtZVRvb2xzXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGNvbnRlbnQgOiBjYy5Ob2RlLFxuICAgICAgICBtaW5pUHJvZ3JhbUl0ZW1QcmIgOiBjYy5Ob2RlLCBcbiAgICAgICAgdGlwICA6IGNjLkxhYmVsXG4gICAgfSxcblxuICAgIG9uTG9hZCgpe1xuICAgICAgICBpZihHYW1lQ29uZmlnLnNlbGZCb3hBcHBzLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgIHRoaXMudGlwLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhHYW1lQ29uZmlnLnNlbGZCb3hBcHBzLmxlbmd0aCk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPEdhbWVDb25maWcuc2VsZkJveEFwcHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm1pbmlQcm9ncmFtSXRlbVByYik7XG4gICAgICAgICAgICBsZXQgYXBwID0gaXRlbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIEdhbWVUb29scy5jcmVhdGVJbWFnZShHYW1lQ29uZmlnLnNlbGZCb3hBcHBzW2ldLmljb24sYXBwKTtcblxuICAgICAgICAgICAgaXRlbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwoKT0+e1xuICAgICAgICAgICAgICAgIEdhbWVUb29scy5uYXZpZ2F0ZVRvTWluaVByb2dyYW0obnVsbCxHYW1lQ29uZmlnLnNlbGZCb3hBcHBzW2ldLnBhdGgpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNsb3NlIDogZnVuY3Rpb24oKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/ShopTopLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db37aqkQ91H26X0+qd933Mv', 'ShopTopLevel');
// Script/panel/ShopTopLevel.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
var GameUiTools = require("GameUiTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    closebtn: cc.Node,
    viedeobtn: cc.Node,
    picSprite: cc.Sprite,
    picName: cc.Label
  },
  viedeobtnFunc: function viedeobtnFunc() {
    GameTools.playSimpleAudioEngine(3);
    var math = Math.random();
    if (math < 0.5) {
      GameConfig.shareComponent = this;
      GameTools.sharePicture();
      GameConfig.shareTime = new Date().getTime();
    } else {
      var self = this;
      GameTools._createVedioAd(function (res) {
        if (res.isEnded || res.raw) {
          self.shareSuccess();
        }
      });
    }
  },
  closebtnFunc: function closebtnFunc() {
    GameTools.playSimpleAudioEngine(3);
    // GameConfig.main.choose = false;
    GameConfig.main.bugGoldFunc(GameConfig.showPersonNumber - 1);
    this.node.destroy();
  },
  shareSuccess: function shareSuccess() {
    GameConfig.main.chooseLevel(GameConfig.showPersonNumber);
    this.node.destroy();
  },
  onLoad: function onLoad() {
    GameUiTools.setSpriteFrame("persion/LV" + GameConfig.showPersonNumber, this.picSprite);
    this.picName.string = GameConfig.perName[GameConfig.showPersonNumber - 1];
  } // update (dt) {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2hvcFRvcExldmVsLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiR2FtZVVpVG9vbHMiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNsb3NlYnRuIiwiTm9kZSIsInZpZWRlb2J0biIsInBpY1Nwcml0ZSIsIlNwcml0ZSIsInBpY05hbWUiLCJMYWJlbCIsInZpZWRlb2J0bkZ1bmMiLCJwbGF5U2ltcGxlQXVkaW9FbmdpbmUiLCJtYXRoIiwiTWF0aCIsInJhbmRvbSIsInNoYXJlQ29tcG9uZW50Iiwic2hhcmVQaWN0dXJlIiwic2hhcmVUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJzZWxmIiwiX2NyZWF0ZVZlZGlvQWQiLCJyZXMiLCJpc0VuZGVkIiwicmF3Iiwic2hhcmVTdWNjZXNzIiwiY2xvc2VidG5GdW5jIiwibWFpbiIsImJ1Z0dvbGRGdW5jIiwic2hvd1BlcnNvbk51bWJlciIsIm5vZGUiLCJkZXN0cm95IiwiY2hvb3NlTGV2ZWwiLCJvbkxvYWQiLCJzZXRTcHJpdGVGcmFtZSIsInN0cmluZyIsInBlck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDLElBQUlDLFNBQVMsR0FBR0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUNwQyxJQUFJRSxXQUFXLEdBQUdGLE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDeENHLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQUFTO0VBRXJCQyxVQUFVLEVBQUU7SUFDUkMsUUFBUSxFQUFDSixFQUFFLENBQUNLLElBQUk7SUFDaEJDLFNBQVMsRUFBQ04sRUFBRSxDQUFDSyxJQUFJO0lBQ2pCRSxTQUFTLEVBQUNQLEVBQUUsQ0FBQ1EsTUFBTTtJQUNuQkMsT0FBTyxFQUFDVCxFQUFFLENBQUNVO0VBRWYsQ0FBQztFQUVEQyxhQUFhLFdBQUFBLGNBQUEsRUFBRTtJQUNYYixTQUFTLENBQUNjLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUNsQyxJQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsTUFBTSxFQUFFO0lBQ3hCLElBQUdGLElBQUksR0FBRyxHQUFHLEVBQUM7TUFDVmpCLFVBQVUsQ0FBQ29CLGNBQWMsR0FBRyxJQUFJO01BQ2hDbEIsU0FBUyxDQUFDbUIsWUFBWSxFQUFFO01BQ3hCckIsVUFBVSxDQUFDc0IsU0FBUyxHQUFJLElBQUlDLElBQUksRUFBRSxDQUFFQyxPQUFPLEVBQUU7SUFDakQsQ0FBQyxNQUFJO01BQ0QsSUFBSUMsSUFBSSxHQUFHLElBQUk7TUFDZnZCLFNBQVMsQ0FBQ3dCLGNBQWMsQ0FBQyxVQUFVQyxHQUFHLEVBQUU7UUFDcEMsSUFBSUEsR0FBRyxDQUFDQyxPQUFPLElBQUlELEdBQUcsQ0FBQ0UsR0FBRyxFQUFFO1VBQ3hCSixJQUFJLENBQUNLLFlBQVksRUFBRTtRQUN2QjtNQUNKLENBQUMsQ0FBQztJQUNOO0VBRUosQ0FBQztFQUNEQyxZQUFZLFdBQUFBLGFBQUEsRUFBRTtJQUNWN0IsU0FBUyxDQUFDYyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDbEM7SUFDQWhCLFVBQVUsQ0FBQ2dDLElBQUksQ0FBQ0MsV0FBVyxDQUFDakMsVUFBVSxDQUFDa0MsZ0JBQWdCLEdBQUMsQ0FBQyxDQUFDO0lBQzFELElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEVBQUU7RUFDdkIsQ0FBQztFQUNETixZQUFZLFdBQUFBLGFBQUEsRUFBRTtJQUNWOUIsVUFBVSxDQUFDZ0MsSUFBSSxDQUFDSyxXQUFXLENBQUNyQyxVQUFVLENBQUNrQyxnQkFBZ0IsQ0FBQztJQUN4RCxJQUFJLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxFQUFFO0VBQ3ZCLENBQUM7RUFDREUsTUFBTSxXQUFBQSxPQUFBLEVBQUk7SUFDTm5DLFdBQVcsQ0FBQ29DLGNBQWMsQ0FBQyxZQUFZLEdBQUN2QyxVQUFVLENBQUNrQyxnQkFBZ0IsRUFBQyxJQUFJLENBQUN2QixTQUFTLENBQUM7SUFDbkYsSUFBSSxDQUFDRSxPQUFPLENBQUMyQixNQUFNLEdBQUd4QyxVQUFVLENBQUN5QyxPQUFPLENBQUN6QyxVQUFVLENBQUNrQyxnQkFBZ0IsR0FBQyxDQUFDLENBQUM7RUFDM0UsQ0FBQyxDQUtEO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG52YXIgR2FtZVVpVG9vbHMgPSByZXF1aXJlKFwiR2FtZVVpVG9vbHNcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjbG9zZWJ0bjpjYy5Ob2RlLFxuICAgICAgICB2aWVkZW9idG46Y2MuTm9kZSxcbiAgICAgICAgcGljU3ByaXRlOmNjLlNwcml0ZSxcbiAgICAgICAgcGljTmFtZTpjYy5MYWJlbCxcblxuICAgIH0sXG5cbiAgICB2aWVkZW9idG5GdW5jKCl7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMyk7XG4gICAgICAgIGxldCBtYXRoID0gTWF0aC5yYW5kb20oKTtcbiAgICAgICAgaWYobWF0aCA8IDAuNSl7XG4gICAgICAgICAgICBHYW1lQ29uZmlnLnNoYXJlQ29tcG9uZW50ID0gdGhpcztcbiAgICAgICAgICAgIEdhbWVUb29scy5zaGFyZVBpY3R1cmUoKTtcbiAgICAgICAgICAgIEdhbWVDb25maWcuc2hhcmVUaW1lID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBHYW1lVG9vbHMuX2NyZWF0ZVZlZGlvQWQoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuaXNFbmRlZCB8fCByZXMucmF3KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2hhcmVTdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgY2xvc2VidG5GdW5jKCl7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMyk7XG4gICAgICAgIC8vIEdhbWVDb25maWcubWFpbi5jaG9vc2UgPSBmYWxzZTtcbiAgICAgICAgR2FtZUNvbmZpZy5tYWluLmJ1Z0dvbGRGdW5jKEdhbWVDb25maWcuc2hvd1BlcnNvbk51bWJlci0xKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgIHNoYXJlU3VjY2Vzcygpe1xuICAgICAgICBHYW1lQ29uZmlnLm1haW4uY2hvb3NlTGV2ZWwoR2FtZUNvbmZpZy5zaG93UGVyc29uTnVtYmVyKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIEdhbWVVaVRvb2xzLnNldFNwcml0ZUZyYW1lKFwicGVyc2lvbi9MVlwiK0dhbWVDb25maWcuc2hvd1BlcnNvbk51bWJlcix0aGlzLnBpY1Nwcml0ZSk7XG4gICAgICAgIHRoaXMucGljTmFtZS5zdHJpbmcgPSBHYW1lQ29uZmlnLnBlck5hbWVbR2FtZUNvbmZpZy5zaG93UGVyc29uTnVtYmVyLTFdXG4gICAgfSxcblxuXG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65d9f6nf75HT5t7ch1U7MsU', 'use_v2.1-2.2.1_cc.Toggle_event');
// migration/use_v2.1-2.2.1_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with the v2.1.0 ～ 2.2.1 version.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 ~ 2.2.1 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */

if (cc.Toggle) {
  // Whether to trigger 'toggle' and 'checkEvents' events when modifying 'toggle.isChecked' in the code
  // 在代码中修改 'toggle.isChecked' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_isChecked = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMS0yLjIuMV9jYy5Ub2dnbGVfZXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJUb2dnbGUiLCJfdHJpZ2dlckV2ZW50SW5TY3JpcHRfaXNDaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsRUFBRSxDQUFDQyxNQUFNLEVBQUU7RUFDWDtFQUNBO0VBQ0FELEVBQUUsQ0FBQ0MsTUFBTSxDQUFDQywrQkFBK0IsR0FBRyxJQUFJO0FBQ3BEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdGhlIHYyLjEuMCDvvZ4gMi4yLjEgdmVyc2lvbi5cbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLlRvZ2dsZSBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cbiAqXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wIH4gMi4yLjEg54mI5pys55qE5bel56iL77yMXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXG4gKi9cblxuaWYgKGNjLlRvZ2dsZSkge1xuICAgIC8vIFdoZXRoZXIgdG8gdHJpZ2dlciAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgd2hlbiBtb2RpZnlpbmcgJ3RvZ2dsZS5pc0NoZWNrZWQnIGluIHRoZSBjb2RlXG4gICAgLy8g5Zyo5Luj56CB5Lit5L+u5pS5ICd0b2dnbGUuaXNDaGVja2VkJyDml7bmmK/lkKbop6blj5EgJ3RvZ2dsZScg5LiOICdjaGVja0V2ZW50cycg5LqL5Lu2XG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9pc0NoZWNrZWQgPSB0cnVlO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/TurnTable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98155fIsX5PzbBTLcSvAMUr', 'TurnTable');
// Script/panel/TurnTable.js

"use strict";

var GameConfig = require("GameConfig");
var GameTools = require("GameTools");
cc.Class({
  "extends": cc.Component,
  properties: {
    freeCJBtn: cc.Node,
    turnTable: {
      "default": null,
      type: cc.Node,
      displayName: "转盘"
    },
    turnNum: cc.Label
  },
  start: function start() {},
  onLoad: function onLoad() {
    this.isClick = false;
    this.isTurning = false;
    this.lastAngle = 0;
    window.cp = this;
    GameConfig.turnTableNum = GameTools.getItemByLocalStorage("turnNum", 3);
    this.turnCount();
  },
  vedioCJ: function vedioCJ() {
    GameTools.playSimpleAudioEngine(3);
    if (this.isTurning) {
      return;
    }
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      // wx.aldSendEvent('视频抽奖',{'key' : 'value'});
    }
    GameTools._createVedioAd(function (res) {
      if (res.isEnded || res.raw) {
        GameConfig.turnTableNum += 2;
        window.cp.turnCount();
      }
    });
  },
  cjAction: function cjAction(callback) {
    // if(cc.sys.platform === cc.sys.WECHAT_GAME){
    //     wx.aldSendEvent('启动转盘',{'key' : 'value'})
    // }
    this.isClick = true;
    this.isTurning = true;
    //概率出结果
    var thanks = [0, 120, 240]; //金钱
    var coins = [60, 300]; //元宝
    var cards = [180]; //人
    var type;
    var num;
    var angle;
    var random = Math.random();
    if (random < 0.08) {
      angle = cards[0];
    } else if (random < 0.20) {
      type = 'coin';
      num = GameConfig.buyCoinUpgrade[GameConfig.GamePersonMaxLevel + 1] * 2;
      angle = coins[1];
    } else if (random < 0.35) {
      type = 'coin';
      num = GameConfig.buyCoinUpgrade[GameConfig.GamePersonMaxLevel + 1] * 4;
      angle = coins[0];
    } else if (0.7) {
      type = 'money';
      num = GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 4;
      angle = thanks[1];
    } else if (0.8) {
      type = 'money';
      num = GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 2;
      angle = thanks[0];
    } else {
      type = 'money';
      num = GameConfig.buyGoldUpgrade[GameConfig.GamePersonMaxLevel] * 6;
      angle = thanks[2];
    }
    var _this = this;
    var clickTimes = 6;
    var rounds = 10;
    var rotateBy = cc.rotateBy(clickTimes, this.lastAngle - (angle + 360 * rounds));
    var actionStep = _this.turnTable.runAction(rotateBy).easing(cc.easeCubicActionOut(clickTimes));
    this.scheduleOnce(function () {
      this.lastAngle = angle;
      callback && callback();
      console.log(type + " : " + num);
      this.isTurning = false;
      if (type == undefined) {
        GameTools.showToast('获得' + GameConfig.perName[GameConfig.GamePersonMaxLevel - 1]);
        GameConfig.main.addDeskSpriteByLevel(GameConfig.GamePersonMaxLevel);
      } else {
        if (type == 'coin') {
          GameTools.showToast("获得" + num + "元宝");
          GameConfig.GameCoin += num;
          GameTools.setItemByLocalStorage("GameCoin", GameConfig.GameCoin);
          GameConfig.main.setGameCoin();
        } else {
          GameTools.showToast("获得" + num + "铜钱");
          GameConfig.GameMoney += num;
          GameTools.setItemByLocalStorage("GameMoney", GameConfig.GameMoney);
          GameConfig.main.setGameMoney();
        }
      }
    }, 6);
  },
  freeCJ: function freeCJ() {
    GameTools.playSimpleAudioEngine(3);
    if (this.isTurning) {
      return;
    }
    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      // wx.aldSendEvent('抽奖',{'key' : 'value'});
    }
    if (GameConfig.turnTableNum < 1) {
      GameTools.showToast("暂无抽奖机会哦");
      return;
    }
    this.cjAction(function () {
      GameConfig.turnTableNum--;
      window.cp.turnCount();
    });
  },
  //抽奖次数的变动
  turnCount: function turnCount() {
    window.cp.turnNum.string = GameConfig.turnTableNum;
    GameTools.setItemByLocalStorage("turnNum", GameConfig.turnTableNum);
  },
  close: function close() {
    GameTools.playSimpleAudioEngine(3);
    this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcVHVyblRhYmxlLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJyZXF1aXJlIiwiR2FtZVRvb2xzIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJmcmVlQ0pCdG4iLCJOb2RlIiwidHVyblRhYmxlIiwidHlwZSIsImRpc3BsYXlOYW1lIiwidHVybk51bSIsIkxhYmVsIiwic3RhcnQiLCJvbkxvYWQiLCJpc0NsaWNrIiwiaXNUdXJuaW5nIiwibGFzdEFuZ2xlIiwid2luZG93IiwiY3AiLCJ0dXJuVGFibGVOdW0iLCJnZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJ0dXJuQ291bnQiLCJ2ZWRpb0NKIiwicGxheVNpbXBsZUF1ZGlvRW5naW5lIiwic3lzIiwicGxhdGZvcm0iLCJXRUNIQVRfR0FNRSIsIl9jcmVhdGVWZWRpb0FkIiwicmVzIiwiaXNFbmRlZCIsInJhdyIsImNqQWN0aW9uIiwiY2FsbGJhY2siLCJ0aGFua3MiLCJjb2lucyIsImNhcmRzIiwibnVtIiwiYW5nbGUiLCJyYW5kb20iLCJNYXRoIiwiYnV5Q29pblVwZ3JhZGUiLCJHYW1lUGVyc29uTWF4TGV2ZWwiLCJidXlHb2xkVXBncmFkZSIsIl90aGlzIiwiY2xpY2tUaW1lcyIsInJvdW5kcyIsInJvdGF0ZUJ5IiwiYWN0aW9uU3RlcCIsInJ1bkFjdGlvbiIsImVhc2luZyIsImVhc2VDdWJpY0FjdGlvbk91dCIsInNjaGVkdWxlT25jZSIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJzaG93VG9hc3QiLCJwZXJOYW1lIiwibWFpbiIsImFkZERlc2tTcHJpdGVCeUxldmVsIiwiR2FtZUNvaW4iLCJzZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJzZXRHYW1lQ29pbiIsIkdhbWVNb25leSIsInNldEdhbWVNb25leSIsImZyZWVDSiIsInN0cmluZyIsImNsb3NlIiwibm9kZSIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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QUM7RUFFREMsTUFBTSxFQUFHLFNBQUFBLE9BQUEsRUFBVTtJQUNmaEUsU0FBUyxDQUFDdUIscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUcsSUFBSSxDQUFDUixTQUFTLEVBQUM7TUFDZDtJQUNKO0lBQ0EsSUFBR2QsRUFBRSxDQUFDdUIsR0FBRyxDQUFDQyxRQUFRLEtBQUt4QixFQUFFLENBQUN1QixHQUFHLENBQUNFLFdBQVcsRUFBQztNQUN0QztJQUFBO0lBRUosSUFBRzVCLFVBQVUsQ0FBQ3FCLFlBQVksR0FBQyxDQUFDLEVBQUM7TUFDekJuQixTQUFTLENBQUN1RCxTQUFTLENBQUMsU0FBUyxDQUFDO01BQzlCO0lBQ0o7SUFDQSxJQUFJLENBQUN4QixRQUFRLENBQUMsWUFBVTtNQUNwQmpDLFVBQVUsQ0FBQ3FCLFlBQVksRUFBRTtNQUN6QkYsTUFBTSxDQUFDQyxFQUFFLENBQUNHLFNBQVMsRUFBRTtJQUN6QixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQ7RUFDQUEsU0FBUyxXQUFBQSxVQUFBLEVBQUU7SUFDUEosTUFBTSxDQUFDQyxFQUFFLENBQUNSLE9BQU8sQ0FBQ3VELE1BQU0sR0FBR25FLFVBQVUsQ0FBQ3FCLFlBQVk7SUFDbERuQixTQUFTLENBQUM0RCxxQkFBcUIsQ0FBQyxTQUFTLEVBQUM5RCxVQUFVLENBQUNxQixZQUFZLENBQUM7RUFDdEUsQ0FBQztFQUNEK0MsS0FBSyxFQUFHLFNBQUFBLE1BQUEsRUFBVTtJQUNkbEUsU0FBUyxDQUFDdUIscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQzRDLElBQUksQ0FBQ0MsT0FBTyxFQUFFO0VBQ3ZCO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xudmFyIEdhbWVUb29scyA9IHJlcXVpcmUoXCJHYW1lVG9vbHNcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGZyZWVDSkJ0biA6IGNjLk5vZGUsXG4gICAgICAgIHR1cm5UYWJsZSA6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOlwi6L2s55uYXCJcbiAgICAgICAgfSxcbiAgICAgICAgdHVybk51bSA6IGNjLkxhYmVsLFxuICAgIH0sXG4gICAgc3RhcnQoKXtcblxuICAgIH0sXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIHRoaXMuaXNDbGljayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVHVybmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RBbmdsZSA9IDA7XG4gICAgICAgIHdpbmRvdy5jcCA9IHRoaXM7XG5cbiAgICAgICAgR2FtZUNvbmZpZy50dXJuVGFibGVOdW0gPSBHYW1lVG9vbHMuZ2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwidHVybk51bVwiLDMpO1xuICAgICAgICB0aGlzLnR1cm5Db3VudCgpO1xuICAgICAgICBcbiAgICB9LFxuICAgIHZlZGlvQ0ogOiBmdW5jdGlvbigpe1xuICAgICAgICBHYW1lVG9vbHMucGxheVNpbXBsZUF1ZGlvRW5naW5lKDMpO1xuICAgICAgICBpZih0aGlzLmlzVHVybmluZyl7XG4gICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKXtcbiAgICAgICAgICAgIC8vIHd4LmFsZFNlbmRFdmVudCgn6KeG6aKR5oq95aWWJyx7J2tleScgOiAndmFsdWUnfSk7XG4gICAgICAgIH1cbiAgICAgICAgR2FtZVRvb2xzLl9jcmVhdGVWZWRpb0FkKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgIGlmIChyZXMuaXNFbmRlZCB8fCByZXMucmF3KSB7XG4gICAgICAgICAgICAgICAgR2FtZUNvbmZpZy50dXJuVGFibGVOdW0gKz0yO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jcC50dXJuQ291bnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGNqQWN0aW9uIDogZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICAvLyBpZihjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XG4gICAgICAgIC8vICAgICB3eC5hbGRTZW5kRXZlbnQoJ+WQr+WKqOi9rOebmCcseydrZXknIDogJ3ZhbHVlJ30pXG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5pc0NsaWNrID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1R1cm5pbmcgPSB0cnVlO1xuICAgICAgICAvL+amgueOh+WHuue7k+aenFxuICAgICAgICBsZXQgdGhhbmtzID0gWzAsMTIwLDI0MF07Ly/ph5HpkrFcbiAgICAgICAgbGV0IGNvaW5zID0gWzYwLDMwMF07Ly/lhYPlrp1cbiAgICAgICAgbGV0IGNhcmRzID0gWzE4MF07Ly/kurpcbiAgICAgICAgbGV0IHR5cGU7XG4gICAgICAgIGxldCBudW07XG4gICAgICAgIGxldCBhbmdsZTtcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gICAgICAgIGlmKHJhbmRvbSA8IDAuMDgpe1xuICAgICAgICAgICAgYW5nbGUgPSBjYXJkc1swXTtcbiAgICAgICAgfWVsc2UgaWYocmFuZG9tIDwgMC4yMCl7XG4gICAgICAgICAgICB0eXBlID0gJ2NvaW4nO1xuICAgICAgICAgICAgbnVtID0gR2FtZUNvbmZpZy5idXlDb2luVXBncmFkZVtHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbCsxXSoyO1xuICAgICAgICAgICAgYW5nbGUgPSBjb2luc1sxXTtcbiAgICAgICAgfWVsc2UgaWYocmFuZG9tIDwgMC4zNSl7XG4gICAgICAgICAgICB0eXBlID0gJ2NvaW4nO1xuICAgICAgICAgICAgbnVtID0gR2FtZUNvbmZpZy5idXlDb2luVXBncmFkZVtHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbCsxXSo0O1xuICAgICAgICAgICAgYW5nbGUgPSBjb2luc1swXTtcbiAgICAgICAgfWVsc2UgaWYoMC43KXtcbiAgICAgICAgICAgIHR5cGUgPSAnbW9uZXknO1xuICAgICAgICAgICAgbnVtID0gR2FtZUNvbmZpZy5idXlHb2xkVXBncmFkZVtHYW1lQ29uZmlnLkdhbWVQZXJzb25NYXhMZXZlbF0qNDtcbiAgICAgICAgICAgIGFuZ2xlID0gdGhhbmtzWzFdO1xuICAgICAgICB9ZWxzZSBpZigwLjgpe1xuICAgICAgICAgICAgdHlwZSA9ICdtb25leSc7XG4gICAgICAgICAgICBudW0gPSBHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW0dhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsXSoyO1xuICAgICAgICAgICAgYW5nbGUgPSB0aGFua3NbMF07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdHlwZSA9ICdtb25leSc7XG4gICAgICAgICAgICBudW0gPSBHYW1lQ29uZmlnLmJ1eUdvbGRVcGdyYWRlW0dhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsXSo2O1xuICAgICAgICAgICAgYW5nbGUgPSB0aGFua3NbMl07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY2xpY2tUaW1lcyA9IDY7XG4gICAgICAgIHZhciByb3VuZHMgPSAxMDtcbiAgICAgICAgdmFyIHJvdGF0ZUJ5ID0gY2Mucm90YXRlQnkoY2xpY2tUaW1lcyx0aGlzLmxhc3RBbmdsZS0oYW5nbGUgKyAzNjAqcm91bmRzKSk7XG5cbiAgICAgICAgdmFyIGFjdGlvblN0ZXAgPSBfdGhpcy50dXJuVGFibGUucnVuQWN0aW9uKHJvdGF0ZUJ5KS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KGNsaWNrVGltZXMpKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMubGFzdEFuZ2xlID0gYW5nbGU7XG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codHlwZStcIiA6IFwiK251bSk7XG4gICAgICAgICAgICB0aGlzLmlzVHVybmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYodHlwZSA9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoJ+iOt+W+lycrR2FtZUNvbmZpZy5wZXJOYW1lW0dhbWVDb25maWcuR2FtZVBlcnNvbk1heExldmVsLTFdKTtcbiAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLm1haW4uYWRkRGVza1Nwcml0ZUJ5TGV2ZWwoR2FtZUNvbmZpZy5HYW1lUGVyc29uTWF4TGV2ZWwpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaWYodHlwZSA9PSAnY29pbicpe1xuICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2hvd1RvYXN0KFwi6I635b6XXCIrbnVtK1wi5YWD5a6dXCIpO1xuICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVDb2luICs9IG51bTtcbiAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVDb2luXCIsR2FtZUNvbmZpZy5HYW1lQ29pbik7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcubWFpbi5zZXRHYW1lQ29pbigpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBHYW1lVG9vbHMuc2hvd1RvYXN0KFwi6I635b6XXCIrbnVtK1wi6ZOc6ZKxXCIpO1xuICAgICAgICAgICAgICAgICAgICBHYW1lQ29uZmlnLkdhbWVNb25leSArPSBudW07XG4gICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zZXRJdGVtQnlMb2NhbFN0b3JhZ2UoXCJHYW1lTW9uZXlcIixHYW1lQ29uZmlnLkdhbWVNb25leSk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcubWFpbi5zZXRHYW1lTW9uZXkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sNik7XG4gICAgfSxcblxuICAgIGZyZWVDSiA6IGZ1bmN0aW9uKCl7XG4gICAgICAgIEdhbWVUb29scy5wbGF5U2ltcGxlQXVkaW9FbmdpbmUoMyk7XG4gICAgICAgIGlmKHRoaXMuaXNUdXJuaW5nKXtcbiAgICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpe1xuICAgICAgICAgICAgLy8gd3guYWxkU2VuZEV2ZW50KCfmir3lpZYnLHsna2V5JyA6ICd2YWx1ZSd9KTtcbiAgICAgICAgfVxuICAgICAgICBpZihHYW1lQ29uZmlnLnR1cm5UYWJsZU51bTwxKXtcbiAgICAgICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoXCLmmoLml6Dmir3lpZbmnLrkvJrlk6ZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jakFjdGlvbihmdW5jdGlvbigpe1xuICAgICAgICAgICAgR2FtZUNvbmZpZy50dXJuVGFibGVOdW0tLTtcbiAgICAgICAgICAgIHdpbmRvdy5jcC50dXJuQ291bnQoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8v5oq95aWW5qyh5pWw55qE5Y+Y5YqoXG4gICAgdHVybkNvdW50KCl7XG4gICAgICAgIHdpbmRvdy5jcC50dXJuTnVtLnN0cmluZyA9IEdhbWVDb25maWcudHVyblRhYmxlTnVtO1xuICAgICAgICBHYW1lVG9vbHMuc2V0SXRlbUJ5TG9jYWxTdG9yYWdlKFwidHVybk51bVwiLEdhbWVDb25maWcudHVyblRhYmxlTnVtKTtcbiAgICB9LFxuICAgIGNsb3NlIDogZnVuY3Rpb24oKXtcbiAgICAgICAgR2FtZVRvb2xzLnBsYXlTaW1wbGVBdWRpb0VuZ2luZSgzKTtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICB9LFxufSk7XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/CblPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4b023hyS5P+ptp2Mi/3lZA', 'CblPanel');
// Script/panel/CblPanel.js

"use strict";

var GameConfig = require("GameConfig");
cc.Class({
  "extends": cc.Component,
  properties: {
    cancelButton: cc.Node,
    //分享按钮
    confirmButton: cc.Node //分享按钮
  },
  onLoad: function onLoad() {},
  start: function start() {
    window.cp = this;
    if (cc.sys.platform === cc.sys.QQ_PLAY) {} else {
      if (!GameConfig.IS_GAME_SHARE) {
        this.cancelButton.active = false;
      }
    }
  },
  buttonCancelFunc: function buttonCancelFunc(event) {
    this.node.destroy();
  },
  buttonConfirmFunc: function buttonConfirmFunc(event) {
    var _this = this;
    if (cc.sys.platform === cc.sys.BYTEDANCE_GAME) {
      tt.navigateToScene({
        scene: "sidebar",
        success: function success(res) {
          console.log("navigate to scene success");
          // 跳转成功回调逻辑
          var coins = [100];
          console.log("元宝变更前", GameConfig.GameCoin);
          GameConfig.GameCoin += coins[0];
          GameTools.setItemByLocalStorage("GameCoin", GameConfig.GameCoin);
          console.log("元宝变更后", GameConfig.GameCoin);
          GameTools.showToast("获得元宝+" + coins[0]);
        },
        fail: function fail(res) {
          console.log("navigate to scene fail: ", res);
          // 跳转失败回调逻辑
        },

        complete: function complete(res) {
          _this.node.destroy();
        }
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcQ2JsUGFuZWwuanMiXSwibmFtZXMiOlsiR2FtZUNvbmZpZyIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNhbmNlbEJ1dHRvbiIsIk5vZGUiLCJjb25maXJtQnV0dG9uIiwib25Mb2FkIiwic3RhcnQiLCJ3aW5kb3ciLCJjcCIsInN5cyIsInBsYXRmb3JtIiwiUVFfUExBWSIsIklTX0dBTUVfU0hBUkUiLCJhY3RpdmUiLCJidXR0b25DYW5jZWxGdW5jIiwiZXZlbnQiLCJub2RlIiwiZGVzdHJveSIsImJ1dHRvbkNvbmZpcm1GdW5jIiwiX3RoaXMiLCJCWVRFREFOQ0VfR0FNRSIsInR0IiwibmF2aWdhdGVUb1NjZW5lIiwic2NlbmUiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNvaW5zIiwiR2FtZUNvaW4iLCJHYW1lVG9vbHMiLCJzZXRJdGVtQnlMb2NhbFN0b3JhZ2UiLCJzaG93VG9hc3QiLCJmYWlsIiwiY29tcGxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsWUFBWSxDQUFDO0FBQ3RDQyxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUNyQkMsVUFBVSxFQUFFO0lBQ1JDLFlBQVksRUFBRUosRUFBRSxDQUFDSyxJQUFJO0lBQUU7SUFDdkJDLGFBQWEsRUFBRU4sRUFBRSxDQUFDSyxJQUFJLENBQUU7RUFDNUIsQ0FBQztFQUNERSxNQUFNLFdBQUFBLE9BQUEsRUFBRyxDQUNULENBQUM7RUFDREMsS0FBSyxXQUFBQSxNQUFBLEVBQUc7SUFDSkMsTUFBTSxDQUFDQyxFQUFFLEdBQUcsSUFBSTtJQUNoQixJQUFHVixFQUFFLENBQUNXLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLWixFQUFFLENBQUNXLEdBQUcsQ0FBQ0UsT0FBTyxFQUFDLENBQ3RDLENBQUMsTUFBSTtNQUNELElBQUcsQ0FBQ2YsVUFBVSxDQUFDZ0IsYUFBYSxFQUFDO1FBQ3pCLElBQUksQ0FBQ1YsWUFBWSxDQUFDVyxNQUFNLEdBQUcsS0FBSztNQUNwQztJQUNKO0VBQ0osQ0FBQztFQUVEQyxnQkFBZ0IsRUFBRSxTQUFBQSxpQkFBVUMsS0FBSyxFQUFFO0lBQy9CLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLEVBQUU7RUFDdkIsQ0FBQztFQUVEQyxpQkFBaUIsRUFBRSxTQUFBQSxrQkFBVUgsS0FBSyxFQUFFO0lBQUEsSUFBQUksS0FBQTtJQUNoQyxJQUFJckIsRUFBRSxDQUFDVyxHQUFHLENBQUNDLFFBQVEsS0FBS1osRUFBRSxDQUFDVyxHQUFHLENBQUNXLGNBQWMsRUFBQztNQUMxQ0MsRUFBRSxDQUFDQyxlQUFlLENBQUM7UUFDZkMsS0FBSyxFQUFFLFNBQVM7UUFDaEJDLE9BQU8sRUFBRSxTQUFBQSxRQUFDQyxHQUFHLEVBQUs7VUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsMkJBQTJCLENBQUM7VUFDeEM7VUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUM7VUFDakJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRS9CLFVBQVUsQ0FBQ2lDLFFBQVEsQ0FBRztVQUMzQ2pDLFVBQVUsQ0FBQ2lDLFFBQVEsSUFBSUQsS0FBSyxDQUFDLENBQUMsQ0FBQztVQUMvQkUsU0FBUyxDQUFDQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUNuQyxVQUFVLENBQUNpQyxRQUFRLENBQUM7VUFDL0RILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRS9CLFVBQVUsQ0FBQ2lDLFFBQVEsQ0FBRztVQUMzQ0MsU0FBUyxDQUFDRSxTQUFTLENBQUMsT0FBTyxHQUFHSixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNESyxJQUFJLEVBQUUsU0FBQUEsS0FBQ1IsR0FBRyxFQUFLO1VBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBCQUEwQixFQUFFRixHQUFHLENBQUM7VUFDNUM7UUFDSixDQUFDOztRQUNEUyxRQUFRLEVBQUUsU0FBQUEsU0FBQ1QsR0FBRyxFQUFLO1VBQ2ZOLEtBQUksQ0FBQ0gsSUFBSSxDQUFDQyxPQUFPLEVBQUU7UUFDdkI7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKO0FBR0osQ0FBQyxDQUFDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgR2FtZUNvbmZpZyA9IHJlcXVpcmUoXCJHYW1lQ29uZmlnXCIpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY2FuY2VsQnV0dG9uOiBjYy5Ob2RlLCAvL+WIhuS6q+aMiemSrlxyXG4gICAgICAgIGNvbmZpcm1CdXR0b246IGNjLk5vZGUsIC8v5YiG5Lqr5oyJ6ZKuXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfSxcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHdpbmRvdy5jcCA9IHRoaXM7XHJcbiAgICAgICAgaWYoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuUVFfUExBWSl7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKCFHYW1lQ29uZmlnLklTX0dBTUVfU0hBUkUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICBidXR0b25DYW5jZWxGdW5jOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBidXR0b25Db25maXJtRnVuYzogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLkJZVEVEQU5DRV9HQU1FKXtcclxuICAgICAgICAgICAgdHQubmF2aWdhdGVUb1NjZW5lKHtcclxuICAgICAgICAgICAgICAgIHNjZW5lOiBcInNpZGViYXJcIixcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5hdmlnYXRlIHRvIHNjZW5lIHN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6Lez6L2s5oiQ5Yqf5Zue6LCD6YC76L6RXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvaW5zID0gWzEwMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhYPlrp3lj5jmm7TliY1cIiwgR2FtZUNvbmZpZy5HYW1lQ29pbiAgKVxyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVDb25maWcuR2FtZUNvaW4gKz0gY29pbnNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgR2FtZVRvb2xzLnNldEl0ZW1CeUxvY2FsU3RvcmFnZShcIkdhbWVDb2luXCIsR2FtZUNvbmZpZy5HYW1lQ29pbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhYPlrp3lj5jmm7TlkI5cIiwgR2FtZUNvbmZpZy5HYW1lQ29pbiAgKVxyXG4gICAgICAgICAgICAgICAgICAgIEdhbWVUb29scy5zaG93VG9hc3QoXCLojrflvpflhYPlrp0rXCIgKyBjb2luc1swXSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmF2aWdhdGUgdG8gc2NlbmUgZmFpbDogXCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6Lez6L2s5aSx6LSl5Zue6LCD6YC76L6RXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c954TQ/CJDXJp0vbhbIAOQ', 'GameConfig');
// Script/GameConfig.js

"use strict";

var GameConfig = {
  IS_GAME_MUSIC: true,
  IS_GAME_VOICE: true,
  CurrentLevel: 1,
  Row: 3,
  //列
  Col: 4,
  //行
  GameMoney: 1000,
  //金钱
  GameCoin: 100,
  //元宝
  GamePersonMaxLevel: 1,
  //当前最大人物等级
  buyGoldUpgrade: [100],
  buyCoinUpgrade: [50],
  turnTableNum: 0,
  MAIN_MENU_NUM: "Classic",
  //无用

  showPersonNumber: -1,
  //显示当前解锁最大人物等级

  lastTime: 0,
  //离线的时间戳

  IS_GAME_SHARE: true,
  //是否允许分享
  shareTime: 0,
  //分享时间
  shareData: {
    title: "一起解解压",
    url: "https://6665-fengkuang-4g9tlbxqdf49e9be-1330392479.tcb.qcloud.la/images/fengkuang.png"
  },
  //游戏跳转
  APPID: null,
  PATH: null,
  MiniProgram: [],
  IS_LOAD_MINI: false,
  boxApps: [],
  selfBoxApps: [],
  perName: ["民生号", "海钓者", "劳动之星", "进步者", "快递侠", "文化行者", "多能手", "守护者", "法律守护者", "文雅行", "学府之光", "学府之光", "才子行", "安全卫士", "探索者", "领袖版", "防御者", "英勇者", "战略家", "协同者", "统帅版", "海洋领航者", "边境守护者", "英雄版", "文档管理者", "地方管理者", "明智行", "决策者", "文学之光", "正直行", "公正者", "高级管理者", "智慧行", "导师版", "尊贵行", "继承者", "贵族行", "皇家版", "王室行", "王室行", "至尊行", "传奇行"]
};
module.exports = GameConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lQ29uZmlnLmpzIl0sIm5hbWVzIjpbIkdhbWVDb25maWciLCJJU19HQU1FX01VU0lDIiwiSVNfR0FNRV9WT0lDRSIsIkN1cnJlbnRMZXZlbCIsIlJvdyIsIkNvbCIsIkdhbWVNb25leSIsIkdhbWVDb2luIiwiR2FtZVBlcnNvbk1heExldmVsIiwiYnV5R29sZFVwZ3JhZGUiLCJidXlDb2luVXBncmFkZSIsInR1cm5UYWJsZU51bSIsIk1BSU5fTUVOVV9OVU0iLCJzaG93UGVyc29uTnVtYmVyIiwibGFzdFRpbWUiLCJJU19HQU1FX1NIQVJFIiwic2hhcmVUaW1lIiwic2hhcmVEYXRhIiwidGl0bGUiLCJ1cmwiLCJBUFBJRCIsIlBBVEgiLCJNaW5pUHJvZ3JhbSIsIklTX0xPQURfTUlOSSIsImJveEFwcHMiLCJzZWxmQm94QXBwcyIsInBlck5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBRztFQUNiQyxhQUFhLEVBQUMsSUFBSTtFQUNsQkMsYUFBYSxFQUFDLElBQUk7RUFDbEJDLFlBQVksRUFBQyxDQUFDO0VBQ2RDLEdBQUcsRUFBQyxDQUFDO0VBQUM7RUFDTkMsR0FBRyxFQUFDLENBQUM7RUFBQztFQUNOQyxTQUFTLEVBQUMsSUFBSTtFQUFDO0VBQ2ZDLFFBQVEsRUFBQyxHQUFHO0VBQUM7RUFDYkMsa0JBQWtCLEVBQUMsQ0FBQztFQUFDO0VBQ3JCQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUM7RUFDckJDLGNBQWMsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUNwQkMsWUFBWSxFQUFDLENBQUM7RUFFZEMsYUFBYSxFQUFFLFNBQVM7RUFBQzs7RUFFekJDLGdCQUFnQixFQUFDLENBQUMsQ0FBQztFQUFDOztFQUVwQkMsUUFBUSxFQUFDLENBQUM7RUFBQzs7RUFFWEMsYUFBYSxFQUFDLElBQUk7RUFBQztFQUNuQkMsU0FBUyxFQUFDLENBQUM7RUFBQztFQUNaQyxTQUFTLEVBQUM7SUFDTkMsS0FBSyxFQUFDLE9BQU87SUFDYkMsR0FBRyxFQUFDO0VBQ1IsQ0FBQztFQUVEO0VBQ0FDLEtBQUssRUFBRyxJQUFJO0VBQ1pDLElBQUksRUFBRyxJQUFJO0VBQ1hDLFdBQVcsRUFBRyxFQUFFO0VBQ2hCQyxZQUFZLEVBQUcsS0FBSztFQUNwQkMsT0FBTyxFQUFDLEVBQUU7RUFDVkMsV0FBVyxFQUFDLEVBQUU7RUFFZEMsT0FBTyxFQUFDLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUNwRSxNQUFNLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQzlELEtBQUssRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFDcEUsS0FBSyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUM3RCxLQUFLLEVBQUMsS0FBSztBQUVuQixDQUFDO0FBQ0RDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHNUIsVUFBVSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEdhbWVDb25maWcgPSB7XG4gICAgSVNfR0FNRV9NVVNJQzp0cnVlLFxuICAgIElTX0dBTUVfVk9JQ0U6dHJ1ZSxcbiAgICBDdXJyZW50TGV2ZWw6MSxcbiAgICBSb3c6MywvL+WIl1xuICAgIENvbDo0LC8v6KGMXG4gICAgR2FtZU1vbmV5OjEwMDAsLy/ph5HpkrFcbiAgICBHYW1lQ29pbjoxMDAsLy/lhYPlrp1cbiAgICBHYW1lUGVyc29uTWF4TGV2ZWw6MSwvL+W9k+WJjeacgOWkp+S6uueJqeetiee6p1xuICAgIGJ1eUdvbGRVcGdyYWRlOiBbMTAwXSxcbiAgICBidXlDb2luVXBncmFkZTogWzUwXSxcbiAgICB0dXJuVGFibGVOdW06MCxcblxuICAgIE1BSU5fTUVOVV9OVU06IFwiQ2xhc3NpY1wiLC8v5peg55SoXG5cbiAgICBzaG93UGVyc29uTnVtYmVyOi0xLC8v5pi+56S65b2T5YmN6Kej6ZSB5pyA5aSn5Lq654mp562J57qnXG5cbiAgICBsYXN0VGltZTowLC8v56a757q/55qE5pe26Ze05oizXG4gICAgXG4gICAgSVNfR0FNRV9TSEFSRTp0cnVlLC8v5piv5ZCm5YWB6K645YiG5LqrXG4gICAgc2hhcmVUaW1lOjAsLy/liIbkuqvml7bpl7RcbiAgICBzaGFyZURhdGE6e1xuICAgICAgICB0aXRsZTpcIuS4gOi1t+ino+ino+WOi1wiLFxuICAgICAgICB1cmw6XCJodHRwczovLzY2NjUtZmVuZ2t1YW5nLTRnOXRsYnhxZGY0OWU5YmUtMTMzMDM5MjQ3OS50Y2IucWNsb3VkLmxhL2ltYWdlcy9mZW5na3VhbmcucG5nXCIsXG4gICAgfSxcblxuICAgIC8v5ri45oiP6Lez6L2sXG4gICAgQVBQSUQgOiBudWxsLFxuICAgIFBBVEggOiBudWxsLFxuICAgIE1pbmlQcm9ncmFtIDogW10sXG4gICAgSVNfTE9BRF9NSU5JIDogZmFsc2UsXG4gICAgYm94QXBwczpbXSxcbiAgICBzZWxmQm94QXBwczpbXSxcblxuICAgIHBlck5hbWU6W1wi5rCR55Sf5Y+3XCIsXCLmtbfpkpPogIVcIixcIuWKs+WKqOS5i+aYn1wiLFwi6L+b5q2l6ICFXCIsXCLlv6vpgJLkvqBcIixcIuaWh+WMluihjOiAhVwiLFwi5aSa6IO95omLXCIsXCLlrojmiqTogIVcIixcIuazleW+i+WuiOaKpOiAhVwiLFwi5paH6ZuF6KGMXCIsXG4gICAgICAgIFwi5a2m5bqc5LmL5YWJXCIsXCLlrablupzkuYvlhYlcIixcIuaJjeWtkOihjFwiLFwi5a6J5YWo5Y2r5aOrXCIsXCLmjqLntKLogIVcIixcIumihuiilueJiFwiLFwi6Ziy5b6h6ICFXCIsXCLoi7Hli4fogIVcIixcIuaImOeVpeWutlwiLFwi5Y2P5ZCM6ICFXCIsXG4gICAgICAgIFwi57uf5biF54mIXCIsXCLmtbfmtIvpooboiKrogIVcIixcIui+ueWig+WuiOaKpOiAhVwiLFwi6Iux6ZuE54mIXCIsXCLmlofmoaPnrqHnkIbogIVcIixcIuWcsOaWueeuoeeQhuiAhVwiLFwi5piO5pm66KGMXCIsXCLlhrPnrZbogIVcIixcIuaWh+WtpuS5i+WFiVwiLFwi5q2j55u06KGMXCIsXG4gICAgICAgIFwi5YWs5q2j6ICFXCIsXCLpq5jnuqfnrqHnkIbogIVcIixcIuaZuuaFp+ihjFwiLFwi5a+85biI54mIXCIsXCLlsIrotLXooYxcIixcIue7p+aJv+iAhVwiLFwi6LS15peP6KGMXCIsXCLnmoflrrbniYhcIixcIueOi+WupOihjFwiLFwi546L5a6k6KGMXCIsXG4gICAgICAgIFwi6Iez5bCK6KGMXCIsXCLkvKDlpYfooYxcIlxuICAgIF1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVDb25maWc7XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/panel/ShowMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38b70CDgDNDRrOc8pj7+Z2r', 'ShowMessage');
// Script/panel/ShowMessage.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    messageLabel: cc.Label,
    toastType: 0
  },
  start: function start() {
    this.node.runAction(cc.sequence(cc.fadeIn(0.5), cc.delayTime(1), cc.fadeOut(0.5), cc.removeSelf()));
  },
  setMessage: function setMessage(toastType) {
    this.toastType = toastType;
    var toastMessage = this.toastType;
    if (this.toastType == 0) {
      toastMessage = "该功能未开发。";
    } else if (this.toastType == 1) {
      toastMessage = "授权失败，重新授权或打开设置界面进行授权。";
    } else if (this.toastType == 2) {
      toastMessage = "要分享到群才可以免费获得";
    } else if (this.toastType == 3) {
      toastMessage = "暂无视频广告观看";
    } else if (this.toastType == 4) {
      toastMessage = "积分不足，无法复活。";
    } else if (this.toastType == 5) {
      // toastMessage = "恭喜您获得一个道具。";
    } else if (this.toastType == 6) {
      toastMessage = "该功能未开发。";
    } else if (this.toastType == 7) {
      toastMessage = "播放中途退出，无法获取奖励";
    } else if (this.toastType == 8) {
      toastMessage = "元宝不足";
    } else if (this.toastType == 9) {
      toastMessage = "没有空余的位置了";
    } else if (this.toastType == 10) {
      toastMessage = "铜钱不足";
    } else if (this.toastType == 11) {
      toastMessage = "不到万不得已，不要拖到这里哦";
    } else if (this.toastType == 12) {
      toastMessage = "恭喜您已经达到了亿万人之上";
    } else if (this.toastType == 13) {
      toastMessage = "你已到达巅峰";
    } else if (this.toastType == 14) {
      toastMessage = "截图已保存至相册，欢迎前去分享。";
    } else if (this.toastType == 15) {
      toastMessage = "恭喜您升级啦！";
    } else if (this.toastType == 16) {
      toastMessage = "请从群进入游戏，即可查看排行榜";
    } else if (this.toastType == 17) {
      toastMessage = "网络出错！";
    }
    this.messageLabel.string = toastMessage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwYW5lbFxcU2hvd01lc3NhZ2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJtZXNzYWdlTGFiZWwiLCJMYWJlbCIsInRvYXN0VHlwZSIsInN0YXJ0Iiwibm9kZSIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZmFkZUluIiwiZGVsYXlUaW1lIiwiZmFkZU91dCIsInJlbW92ZVNlbGYiLCJzZXRNZXNzYWdlIiwidG9hc3RNZXNzYWdlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUssQ0FBQztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FBUztFQUVyQkMsVUFBVSxFQUFFO0lBQ1JDLFlBQVksRUFBRUosRUFBRSxDQUFDSyxLQUFLO0lBQ3RCQyxTQUFTLEVBQUU7RUFDZixDQUFDO0VBRURDLEtBQUssV0FBQUEsTUFBQSxFQUFHO0lBQ0osSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1QsRUFBRSxDQUFDVSxRQUFRLENBQUNWLEVBQUUsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFWCxFQUFFLENBQUNZLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRVosRUFBRSxDQUFDYSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUViLEVBQUUsQ0FBQ2MsVUFBVSxFQUFFLENBQUMsQ0FBQztFQUN2RyxDQUFDO0VBRURDLFVBQVUsV0FBQUEsV0FBQ1QsU0FBUyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsU0FBUyxHQUFHQSxTQUFTO0lBQzFCLElBQUlVLFlBQVksR0FBRyxJQUFJLENBQUNWLFNBQVM7SUFDakMsSUFBSSxJQUFJLENBQUNBLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDckJVLFlBQVksR0FBRyxTQUFTO0lBQzVCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ1YsU0FBUyxJQUFJLENBQUMsRUFBRTtNQUM1QlUsWUFBWSxHQUFHLHVCQUF1QjtJQUMxQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNWLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDNUJVLFlBQVksR0FBRyxjQUFjO0lBQ2pDLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ1YsU0FBUyxJQUFJLENBQUMsRUFBRTtNQUM1QlUsWUFBWSxHQUFHLFVBQVU7SUFDN0IsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDVixTQUFTLElBQUksQ0FBQyxFQUFFO01BQzVCVSxZQUFZLEdBQUcsWUFBWTtJQUMvQixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNWLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDNUI7SUFBQSxDQUNILE1BQVEsSUFBSSxJQUFJLENBQUNBLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDOUJVLFlBQVksR0FBRyxTQUFTO0lBQzVCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ1YsU0FBUyxJQUFJLENBQUMsRUFBRTtNQUM1QlUsWUFBWSxHQUFHLGVBQWU7SUFDbEMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDVixTQUFTLElBQUksQ0FBQyxFQUFFO01BQzVCVSxZQUFZLEdBQUcsTUFBTTtJQUN6QixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNWLFNBQVMsSUFBSSxDQUFDLEVBQUU7TUFDNUJVLFlBQVksR0FBRyxVQUFVO0lBQzdCLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ1YsU0FBUyxJQUFJLEVBQUUsRUFBRTtNQUM3QlUsWUFBWSxHQUFHLE1BQU07SUFDekIsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDVixTQUFTLElBQUksRUFBRSxFQUFFO01BQzdCVSxZQUFZLEdBQUcsZ0JBQWdCO0lBQ25DLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ1YsU0FBUyxJQUFJLEVBQUUsRUFBRTtNQUM3QlUsWUFBWSxHQUFHLGVBQWU7SUFDbEMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDVixTQUFTLElBQUksRUFBRSxFQUFFO01BQzdCVSxZQUFZLEdBQUcsUUFBUTtJQUMzQixDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUNWLFNBQVMsSUFBSSxFQUFFLEVBQUU7TUFDN0JVLFlBQVksR0FBRyxrQkFBa0I7SUFDckMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDVixTQUFTLElBQUksRUFBRSxFQUFFO01BQzdCVSxZQUFZLEdBQUcsU0FBUztJQUM1QixDQUFDLE1BQUssSUFBRyxJQUFJLENBQUNWLFNBQVMsSUFBSSxFQUFFLEVBQUM7TUFDMUJVLFlBQVksR0FBRyxpQkFBaUI7SUFDcEMsQ0FBQyxNQUFLLElBQUcsSUFBSSxDQUFDVixTQUFTLElBQUksRUFBRSxFQUFDO01BQzFCVSxZQUFZLEdBQUcsT0FBTztJQUMxQjtJQUNBLElBQUksQ0FBQ1osWUFBWSxDQUFDYSxNQUFNLEdBQUdELFlBQVk7RUFDM0M7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIG1lc3NhZ2VMYWJlbDogY2MuTGFiZWwsXHJcbiAgICAgICAgdG9hc3RUeXBlOiAwLFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmZhZGVJbigwLjUpLCBjYy5kZWxheVRpbWUoMSksIGNjLmZhZGVPdXQoMC41KSwgY2MucmVtb3ZlU2VsZigpKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldE1lc3NhZ2UodG9hc3RUeXBlKSB7XHJcbiAgICAgICAgdGhpcy50b2FzdFR5cGUgPSB0b2FzdFR5cGU7XHJcbiAgICAgICAgbGV0IHRvYXN0TWVzc2FnZSA9IHRoaXMudG9hc3RUeXBlO1xyXG4gICAgICAgIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6K+l5Yqf6IO95pyq5byA5Y+R44CCXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5o6I5p2D5aSx6LSl77yM6YeN5paw5o6I5p2D5oiW5omT5byA6K6+572u55WM6Z2i6L+b6KGM5o6I5p2D44CCXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6KaB5YiG5Lqr5Yiw576k5omN5Y+v5Lul5YWN6LS56I635b6XXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5pqC5peg6KeG6aKR5bm/5ZGK6KeC55yLXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi56ev5YiG5LiN6Laz77yM5peg5rOV5aSN5rS744CCXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSA1KSB7XHJcbiAgICAgICAgICAgIC8vIHRvYXN0TWVzc2FnZSA9IFwi5oGt5Zac5oKo6I635b6X5LiA5Liq6YGT5YW344CCXCI7XHJcbiAgICAgICAgfSAgIGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDYpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLor6Xlip/og73mnKrlvIDlj5HjgIJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDcpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmkq3mlL7kuK3pgJTpgIDlh7rvvIzml6Dms5Xojrflj5blpZblirFcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDgpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLlhYPlrp3kuI3otrNcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDkpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmsqHmnInnqbrkvZnnmoTkvY3nva7kuoZcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDEwKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6ZOc6ZKx5LiN6LazXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAxMSkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuS4jeWIsOS4h+S4jeW+l+W3su+8jOS4jeimgeaLluWIsOi/memHjOWTplwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTIpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmga3llpzmgqjlt7Lnu4/ovr7liLDkuobkur/kuIfkurrkuYvkuIpcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9hc3RUeXBlID09IDEzKSB7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi5L2g5bey5Yiw6L6+5beF5bOwXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRvYXN0VHlwZSA9PSAxNCkge1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIuaIquWbvuW3suS/neWtmOiHs+ebuOWGjO+8jOasoui/juWJjeWOu+WIhuS6q+OAglwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy50b2FzdFR5cGUgPT0gMTUpIHtcclxuICAgICAgICAgICAgdG9hc3RNZXNzYWdlID0gXCLmga3llpzmgqjljYfnuqfllabvvIFcIjtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnRvYXN0VHlwZSA9PSAxNil7XHJcbiAgICAgICAgICAgIHRvYXN0TWVzc2FnZSA9IFwi6K+35LuO576k6L+b5YWl5ri45oiP77yM5Y2z5Y+v5p+l55yL5o6S6KGM5qacXCI7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy50b2FzdFR5cGUgPT0gMTcpe1xyXG4gICAgICAgICAgICB0b2FzdE1lc3NhZ2UgPSBcIue9kee7nOWHuumUme+8gVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1lc3NhZ2VMYWJlbC5zdHJpbmcgPSB0b2FzdE1lc3NhZ2U7XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateBy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '23e0386VVZMX7CSacwz6xSo', 'use_reversed_rotateBy');
// migration/use_reversed_rotateBy.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */

cc.RotateBy._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfcmV2ZXJzZWRfcm90YXRlQnkuanMiXSwibmFtZXMiOlsiY2MiLCJSb3RhdGVCeSIsIl9yZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFBLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRLEdBQUcsSUFBSSIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgdXNlZCBmb3IgcHJvamVjdHMgY29tcGF0aWJsZSB3aXRoIHYyLjEuMC92Mi4xLjEvdjIuMy4wL3YyLjMuMS92Mi4zLjIgdmVyc2lvbnMuXG4gKiBZb3UgZG8gbm90IG5lZWQgdG8gbWFudWFsbHkgYWRkIHRoaXMgc2NyaXB0IGluIGFueSBvdGhlciBwcm9qZWN0LlxuICogSWYgeW91IGRvbid0IHVzZSBjYy5BY3Rpb24gaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cbiAqIElmIHlvdXIgcHJvamVjdCBpcyBob3N0ZWQgaW4gVkNTIHN1Y2ggYXMgZ2l0LCBzdWJtaXQgdGhpcyBzY3JpcHQgdG9nZXRoZXIuXG4gKlxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMC92Mi4xLjEvdjIuMy4wL3YyLjMuMS92Mi4zLjIg54mI5pys55qE5bel56iL77yMXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBBY3Rpb27vvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXG4gKi9cblxuY2MuUm90YXRlQnkuX3JldmVyc2UgPSB0cnVlO1xuIl19
//------QC-SOURCE-SPLIT------
