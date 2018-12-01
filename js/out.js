/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n    // console.log('hello');\n    var section = document.querySelector(\"#board\");\n\n    var Furry = __webpack_require__(/*! ./furry.js */ \"./js/furry.js\");\n    var Coin = __webpack_require__(/*! ./coin.js */ \"./js/coin.js\");\n    var Game = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\n\n    var game = new Game(); //nowy obiekt, do którego przekazuje wartości.\n    game.showFurry();\n    game.showCoin();\n    game.startGame(); //wywołuje rozpoczęcie gry;\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/coin.js":
/*!********************!*\
  !*** ./js/coin.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//pozycja monety na planszy;\nfunction Coin(x, y) {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n};\n\nmodule.exports = Coin;\n\n//# sourceURL=webpack:///./js/coin.js?");

/***/ }),

/***/ "./js/furry.js":
/*!*********************!*\
  !*** ./js/furry.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//pozycja Furry;\nfunction Furry(x, y, direction) {\n    this.x = 0;\n    this.y = 0;\n    this.direction = \"right\";\n};\n\nmodule.exports = Furry;\n\n//# sourceURL=webpack:///./js/furry.js?");

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//zarządzanie grą;\nvar Furry = __webpack_require__(/*! ./furry.js */ \"./js/furry.js\");\nvar Coin = __webpack_require__(/*! ./coin.js */ \"./js/coin.js\");\n\nfunction Game(board, furry, coin, score) {\n    this.board = document.querySelectorAll(\"#board div\"); //to są moje divy po których chodzi furry\n    this.furry = new Furry();\n    this.coin = new Coin();\n    this.score = 0;\n    this.index = function (x, y) {\n        return x + y * 10;\n    };\n    this.showFurry = function () {\n        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');\n    };\n\n    this.hideVisibleFurry = function () {\n        //czyszczenie pozycji Furry\n        var hidden = document.querySelector(\".furry\");\n        hidden.classList.remove(\"furry\"); // usunięcie klasy furry\n    };\n\n    this.showCoin = function () {\n        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');\n    };\n\n    this.moveFurry = function () {\n        //poruszanie się Furry\n        this.hideVisibleFurry(); //ukrycie klonów Furry\n        if (this.furry.direction === \"right\") {\n            this.furry.x = this.furry.x + 1;\n        } else if (this.furry.direction === \"left\") {\n            this.furry.x = this.furry.x - 1;\n        } else if (this.furry.direction === \"top\") {\n            this.furry.y = this.furry.y + 1;\n        } else if (this.furry.direction === \"botton\") {\n            this.furry.y = this.furry.y - 1;\n        };\n        if (!this.gameOver()) {\n            //wywołanie return w metodzie gameOver, bo tu pojawia się w if\n            this.showFurry();\n            this.showCoin();\n            this.checkCoinCollision();\n        };\n    };\n\n    this.turnFurry = function (e) {\n        //kierunek poruszania się Furry\n        var key = e.which;\n        switch (key) {\n            case 37:\n                this.furry.direction = \"left\"; //strzałaka w lewo\n                break;\n            case 39:\n                this.furry.direction = \"right\"; //strzałka w prawo\n                break;\n            case 40:\n                this.furry.direction = \"top\"; //strzałka do góry\n                break;\n            case 38:\n                this.furry.direction = \"botton\"; //strzałka do dołu\n                break;\n        };\n    };\n\n    this.hideCoin = function () {\n        var hide = document.querySelector(\".coin\");\n        hide.classList.remove(\"coin\");\n    };\n\n    this.startGame = function () {\n        //uruchomienie gry\n        var self = this; //nie moge użyć this bo wew\n        this.idSetInterval = setInterval(function () {\n            self.moveFurry();\n        }, 250);\n    };\n\n    var self = this; //przypisanie wydarzenia z klawiatury\n    window.addEventListener(\"keydown\", function (e) {\n        self.turnFurry(e);\n    });\n\n    this.scoreBoard = document.querySelector(\"#score strong\"); //ponieram pojemnik z wynikiem\n    this.actualScore = 0; //punktacja\n    this.checkCoinCollision = function () {\n        //gdy moneta i furry znajdą się w tym samym miejscu\n        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {\n            //sprawdzam pozycję monety i Furry\n            this.hideCoin(); //ukrywam monete z ekranu\n            this.actualScore += 1; //dodaje punkt\n            this.scoreBoard.innerText = this.actualScore; //pokazuje wynik na ekranie\n            this.coin = new Coin(); //tworzę nową monete\n            this.showCoin(); //pokazuję ją na ekranie - wywołuję,\n        };\n    };\n\n    this.gameOver = function () {\n        //koniec gry-trzeba zrobić return bo wywołana jest w if w moveFurry\n        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {\n            //koniec gry gdy dochodzi do ściany\n            clearInterval(this.idSetInterval);\n            window.alert(\"We're sorry! You game Over! Your score is\" + this.score);\n            this.hideVisibleFurry();\n            return true;\n        } else {\n            return false;\n        };\n    };\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ })

/******/ });