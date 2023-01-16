/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/scss/homePage.scss":
/*!**************************************!*\
  !*** ./resources/scss/homePage.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://blackjack/./resources/scss/homePage.scss?");

/***/ }),

/***/ "./resources/ts/classes/Card.ts":
/*!**************************************!*\
  !*** ./resources/ts/classes/Card.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n/**\r\n *  Card class instance\r\n *\r\n *  @param {string} suit The suit/family of the card\r\n *  @param {string} value The numerical or letter-based value of the card\r\n */\r\nclass Card {\r\n    // Constructor for a single Card\r\n    constructor(suit, value) {\r\n        this.suit = suit;\r\n        this.value = value;\r\n    }\r\n    // Getter for suit value\r\n    get getSuit() {\r\n        return this.suit;\r\n    }\r\n    // Getter for card value\r\n    get getValue() {\r\n        return this.value;\r\n    }\r\n}\r\nexports[\"default\"] = Card;\r\n\n\n//# sourceURL=webpack://blackjack/./resources/ts/classes/Card.ts?");

/***/ }),

/***/ "./resources/ts/classes/Deck.ts":
/*!**************************************!*\
  !*** ./resources/ts/classes/Deck.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst cardProperties_1 = __webpack_require__(/*! ./cardProperties */ \"./resources/ts/classes/cardProperties.ts\");\r\nconst Card_1 = __importDefault(__webpack_require__(/*! ./Card */ \"./resources/ts/classes/Card.ts\"));\r\n/**\r\n *  Deck class instance\r\n */\r\nclass Deck {\r\n    // Constructor for deck of cards\r\n    constructor() {\r\n        this.cards = cardProperties_1.suits.flatMap((suit) => {\r\n            return cardProperties_1.values.map((value) => {\r\n                return new Card_1.default(suit, value);\r\n            });\r\n        });\r\n    }\r\n    // Get size of deck\r\n    get deckSize() {\r\n        return this.cards.length;\r\n    }\r\n    // Shuffle deck since constructor builds in specific order\r\n    shuffle() {\r\n        for (let index = this.deckSize - 1; index > 0; index--) {\r\n            const newIndex = Math.floor(Math.random() * (index + 1));\r\n            const newCard = this.cards[newIndex];\r\n            this.cards[newIndex] = this.cards[index];\r\n            this.cards[index] = newCard;\r\n        }\r\n    }\r\n}\r\nexports[\"default\"] = Deck;\r\n\n\n//# sourceURL=webpack://blackjack/./resources/ts/classes/Deck.ts?");

/***/ }),

/***/ "./resources/ts/classes/cardProperties.ts":
/*!************************************************!*\
  !*** ./resources/ts/classes/cardProperties.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.values = exports.suits = void 0;\r\n/**\r\n *  Possible suits for a card\r\n */\r\nexports.suits = ['♣', '♦', '♥', '♠'];\r\n/**\r\n *  Possible face values for a card\r\n */\r\nexports.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];\r\n\n\n//# sourceURL=webpack://blackjack/./resources/ts/classes/cardProperties.ts?");

/***/ }),

/***/ "./resources/ts/helpers/calculateCardValue.ts":
/*!****************************************************!*\
  !*** ./resources/ts/helpers/calculateCardValue.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.calculateHandValue = void 0;\r\n/**\r\n *  Calculate the total value of a hand (Blackjack) by iterating through each card\r\n *\r\n * @param {Card[]} hand Array representing the cards in a player/dealer hand\r\n */\r\nconst calculateHandValue = (hand) => {\r\n    let handValue = 0;\r\n    // Iterate through hand and sum up each card value\r\n    hand.map((card) => {\r\n        // Initial check for if face is a letter, otherwise do regular string -> number conversion\r\n        if (isNaN(Number(card.getValue))) {\r\n            switch (card.getValue) {\r\n                case 'A':\r\n                    if (handValue < 11) {\r\n                        handValue += 11;\r\n                    }\r\n                    else {\r\n                        handValue++;\r\n                    }\r\n                    break;\r\n                case 'J':\r\n                    handValue += 10;\r\n                    break;\r\n                case 'Q':\r\n                    handValue += 10;\r\n                    break;\r\n                case 'K':\r\n                    handValue += 10;\r\n                    break;\r\n                // Default case handling unexpected letters\r\n                default:\r\n                    handValue += 0;\r\n                    break;\r\n            }\r\n        }\r\n        else {\r\n            handValue += Number(card.getValue);\r\n        }\r\n    });\r\n    return handValue;\r\n};\r\nexports.calculateHandValue = calculateHandValue;\r\n\n\n//# sourceURL=webpack://blackjack/./resources/ts/helpers/calculateCardValue.ts?");

/***/ }),

/***/ "./resources/ts/homePage.ts":
/*!**********************************!*\
  !*** ./resources/ts/homePage.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst calculateCardValue_1 = __webpack_require__(/*! ./helpers/calculateCardValue */ \"./resources/ts/helpers/calculateCardValue.ts\");\r\nconst Deck_1 = __importDefault(__webpack_require__(/*! ./classes/Deck */ \"./resources/ts/classes/Deck.ts\"));\r\n__webpack_require__(/*! ../scss/homePage */ \"./resources/scss/homePage.scss\");\r\nconst Card_1 = __importDefault(__webpack_require__(/*! ./classes/Card */ \"./resources/ts/classes/Card.ts\"));\r\n// Create playing deck\r\nconst dealerDeck = new Deck_1.default();\r\ndealerDeck.shuffle();\r\n// Test function that calculates total hand value\r\nconst card1 = new Card_1.default('♣', 'J');\r\nconst card2 = new Card_1.default('♣', '9');\r\nconst card3 = new Card_1.default('♣', 'A');\r\nconst hand1 = [card1, card2]; // 19\r\nconst hand2 = [card2, card3]; // 20\r\nconst hand3 = [card1, card3]; // 21\r\nconst hand4 = [card3, card3]; // 12\r\nconst hand5 = [card1, card2, card3]; // 20\r\nconsole.log((0, calculateCardValue_1.calculateHandValue)(hand1));\r\nconsole.log((0, calculateCardValue_1.calculateHandValue)(hand2));\r\nconsole.log((0, calculateCardValue_1.calculateHandValue)(hand3));\r\nconsole.log((0, calculateCardValue_1.calculateHandValue)(hand4));\r\nconsole.log((0, calculateCardValue_1.calculateHandValue)(hand5));\r\n\n\n//# sourceURL=webpack://blackjack/./resources/ts/homePage.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/ts/homePage.ts");
/******/ 	
/******/ })()
;