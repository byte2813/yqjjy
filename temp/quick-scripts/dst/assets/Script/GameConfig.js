
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