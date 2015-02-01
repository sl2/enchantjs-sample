enchant();
window.onload = function(){
    
    var game = new Core(320, 320);
    game.preload('./enchant.js/images/chara1.png');
    game.fps = 60;

    game.onload = function(){
        console.log("preload finished");

        //32x32のスプライトオブジェクトを生成
        var bear = new Sprite(32, 32);
        
        //スプライトに割り当てる画像を読込み
        bear.image = game.assets['./enchant.js/images/chara1.png'];
        //ルートシーンにスプライトを載せる
        game.rootScene.addChild(bear);
        
        //chara1.pngを32x32を最小単位として分割
        //その6,7分割目を以下の順でループアニメーションさせる
        bear.frame = [6, 6, 7, 7];   // select sprite frame
        
        bear.tl.moveBy(288, 0, 100)   // move right
            .scaleTo(-1, 1, 1)      // turn left
            .moveBy(0, 288, 100)     // move left
            .scaleTo(-1, 1, 1)       // turn right
            .moveBy(-288, 0, 100)     // move left
            .scaleTo(1, 1, 1)       // turn right
            .moveBy(0, -288, 100)     // move left
            .loop();                 // loop it
    };
    game.start();
};







