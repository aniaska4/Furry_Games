//zarządzanie grą;
var Furry = require("./furry.js");
var Coin = require("./coin.js");


function Game(board, furry, coin, score){
    this.board = document.querySelectorAll("#board div");//to są moje divy po których chodzi furry
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.index = function(x,y){
        return x +(y * 10);
    };
    this.showFurry=  function() {
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    };

    this.hideVisibleFurry = function() {//czyszczenie pozycji Furry
        var hidden = document.querySelector(".furry");
        hidden.classList.remove("furry"); // usunięcie klasy furry
    };

    this.showCoin = function() {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    };

    this.moveFurry = function(){ //poruszanie się Furry
        this.hideVisibleFurry();//ukrycie klonów Furry
        if(this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        }else if (this.furry.direction === "top") {
            this.furry.y = this.furry.y + 1;
        }else if (this.furry.direction === "botton") {
            this.furry.y = this.furry.y - 1;
        };
        if( !this.gameOver() ) {//wywołanie return w metodzie gameOver, bo tu pojawia się w if
            this.showFurry();
            this.showCoin();
            this.checkCoinCollision();
        };        
    };   

    this.turnFurry = function (e){//kierunek poruszania się Furry
        let key = e.which;
        switch(key){
            case 37:
                this.furry.direction = "left"; //strzałaka w lewo
                break;
            case 39:
                this.furry.direction = "right"; //strzałka w prawo
                break;
            case 40:
                this.furry.direction = "top" ; //strzałka do góry
                break;
            case 38:
                this.furry.direction = "botton"; //strzałka do dołu
                break;       
        };
    };
    

    this.hideCoin = function () {
        let hide = document.querySelector(".coin");
        hide.classList.remove("coin")
    };    

    this.startGame = function () {//uruchomienie gry
        let self = this;//nie moge użyć this bo wew
        this.idSetInterval = setInterval(function () {
            self.moveFurry();
        }, 250);            
    };        
    
    var self = this;//przypisanie wydarzenia z klawiatury
        window.addEventListener("keydown", function (e) {
            self.turnFurry(e);
        });
            
    this.scoreBoard = document.querySelector("#score strong");//ponieram pojemnik z wynikiem
    this.actualScore = 0;//punktacja
    this.checkCoinCollision = function () {//gdy moneta i furry znajdą się w tym samym miejscu
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y){//sprawdzam pozycję monety i Furry
            this.hideCoin();//ukrywam monete z ekranu
            this.actualScore += 1;//dodaje punkt
            this.scoreBoard.innerText = this.actualScore;//pokazuje wynik na ekranie
            this.coin = new Coin();//tworzę nową monete
            this.showCoin();//pokazuję ją na ekranie - wywołuję,
            };
        };

    this.gameOver = function () {//koniec gry-trzeba zrobić return bo wywołana jest w if w moveFurry
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {//koniec gry gdy dochodzi do ściany
            clearInterval(this.idSetInterval);
            window.alert(`We're sorry! You game Over! Your score is` + this.score);
            this.hideVisibleFurry(); 
            return true;
        } else {
            return false
        };
    };
    
};   

module.exports = Game;