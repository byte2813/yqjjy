var GameConfig = {
    IS_GAME_MUSIC:true,
    IS_GAME_VOICE:true,
    CurrentLevel:1,
    Row:3,//列
    Col:4,//行
    GameMoney:1000,//金钱
    GameCoin:100,//元宝
    GamePersonMaxLevel:1,//当前最大人物等级
    buyGoldUpgrade: [100],
    buyCoinUpgrade: [50],
    turnTableNum:0,

    MAIN_MENU_NUM: "Classic",//无用

    showPersonNumber:-1,//显示当前解锁最大人物等级

    lastTime:0,//离线的时间戳
    
    IS_GAME_SHARE:true,//是否允许分享
    shareTime:0,//分享时间
    shareData:{
        title:"一起解解压",
        url:"https://6665-fengkuang-4g9tlbxqdf49e9be-1330392479.tcb.qcloud.la/images/fengkuang.png",
    },

    //游戏跳转
    APPID : null,
    PATH : null,
    MiniProgram : [],
    IS_LOAD_MINI : false,
    boxApps:[],
    selfBoxApps:[],

    perName:["民生号","海钓者","劳动之星","进步者","快递侠","文化行者","多能手","守护者","法律守护者","文雅行",
        "学府之光","学府之光","才子行","安全卫士","探索者","领袖版","防御者","英勇者","战略家","协同者",
        "统帅版","海洋领航者","边境守护者","英雄版","文档管理者","地方管理者","明智行","决策者","文学之光","正直行",
        "公正者","高级管理者","智慧行","导师版","尊贵行","继承者","贵族行","皇家版","王室行","王室行",
        "至尊行","传奇行"
    ]
};
module.exports = GameConfig;
