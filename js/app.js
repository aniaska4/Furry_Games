document.addEventListener('DOMContentLoaded', function() {

        // console.log('hello');
    const section = document.querySelector("#board");

    
    var Furry = require("./furry.js");
    var Coin = require("./coin.js");
    var Game = require("./game.js");

    let game = new Game(); //nowy obiekt, do którego przekazuje wartości.
    game.showFurry();
    game.showCoin();
    game.startGame();//wywołuje rozpoczęcie gry;
    
});


