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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/ball.js":
/*!************************!*\
  !*** ./source/ball.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Ball =\n/*#__PURE__*/\nfunction () {\n  function Ball() {\n    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 390;\n    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 190;\n    var vector = arguments.length > 2 ? arguments[2] : undefined;\n\n    _classCallCheck(this, Ball);\n\n    this.bgColor = 255;\n    this.x = x;\n    this.y = y;\n    this.height = 20;\n    this.width = 20;\n    this.vector = vector;\n  }\n\n  _createClass(Ball, [{\n    key: \"draw\",\n    value: function draw(p) {\n      p.fill(this.bgColor);\n      p.rect(this.x, this.y, this.width, this.height);\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      this.x += this.vector.x;\n      this.y += this.vector.y;\n    }\n  }, {\n    key: \"hitCorner\",\n    value: function hitCorner() {\n      if (this.y === 0) {\n        this.vector.y *= -1;\n      }\n\n      if (this.y === 400 - this.height) {\n        this.vector.y *= -1;\n      }\n    }\n  }, {\n    key: \"hitY\",\n    value: function hitY(player) {\n      return player.y <= this.y && player.y + player.height >= this.y;\n    }\n  }, {\n    key: \"hitRight\",\n    value: function hitRight(player) {\n      if (this.hitY(player)) {\n        if (player.x - player.width === this.x) {\n          this.vector.x *= -1;\n        }\n      }\n    }\n  }, {\n    key: \"hitLeft\",\n    value: function hitLeft(player) {\n      if (this.hitY(player)) {\n        if (player.x + player.width === this.x) {\n          this.vector.x *= -1;\n        }\n      }\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      this.x = 390;\n      this.y = 190;\n    }\n  }]);\n\n  return Ball;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ball);\n\n//# sourceURL=webpack:///./source/ball.js?");

/***/ }),

/***/ "./source/index.js":
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./source/player.js\");\n/* harmony import */ var _ball_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ball.js */ \"./source/ball.js\");\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! p5 */ \"p5\");\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar sketch = function sketch(p) {\n  var left,\n      right,\n      ball,\n      height = 400,\n      width = 800,\n      isPaused = false;\n\n  p.setup = function () {\n    left = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](20, 150);\n    right = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](width - 40, 150);\n    ball = new _ball_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](390, 190, {\n      x: 5,\n      y: -5\n    });\n    ;\n    p.createCanvas(width, height);\n  };\n\n  p.draw = function () {\n    p.background(0);\n    p.fill(255);\n\n    if (p.keyIsDown(p.DOWN_ARROW)) {\n      right.moveDown();\n    } else if (p.keyIsDown(p.UP_ARROW)) {\n      right.moveUp();\n    }\n\n    if (p.keyIsDown(87)) {\n      left.moveUp();\n    } else if (p.keyIsDown(83)) {\n      left.moveDown();\n    }\n\n    ball.hitCorner();\n    ball.hitLeft(left);\n    ball.hitRight(right);\n    ball.move();\n    left.draw(p);\n    right.draw(p);\n    ball.draw(p);\n    p.fill(\"yellow\");\n    p.textSize(16);\n    p.text(left.score, width / 2 - 20, 50);\n    p.text(right.score, width / 2 + 20, 50);\n    p.textSize(14);\n    p.text(\"W: Up\\tS: Down\", 20, height - 20);\n    p.text(\"Up Arrow\\tDown Arrow\", width - 180, height - 20);\n    p.text(\"Esc: Pause\", width / 2 - 20, height - 20);\n\n    if (ball.x < 0) {\n      right.score += 1;\n      ball.reset();\n    } else if (ball.x > width) {\n      left.score += 1;\n      ball.reset();\n    }\n  };\n\n  p.keyPressed = function () {\n    if (p.keyCode === p.ESCAPE) {\n      if (isPaused) {\n        p.loop();\n        isPaused = false;\n      } else {\n        p.noLoop();\n        isPaused = true;\n      }\n    }\n  };\n};\n\nnew p5__WEBPACK_IMPORTED_MODULE_2__(sketch);\n\n//# sourceURL=webpack:///./source/index.js?");

/***/ }),

/***/ "./source/player.js":
/*!**************************!*\
  !*** ./source/player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Player =\n/*#__PURE__*/\nfunction () {\n  function Player(x, y) {\n    _classCallCheck(this, Player);\n\n    this.bgColor = \"255\";\n    this.x = x;\n    this.y = y;\n    this.height = 100;\n    this.width = 20;\n    this.score = 0;\n  }\n\n  _createClass(Player, [{\n    key: \"draw\",\n    value: function draw(p) {\n      p.fill(this.bgColor);\n      p.rect(this.x, this.y, this.width, this.height);\n    }\n  }, {\n    key: \"moveUp\",\n    value: function moveUp() {\n      if (this.y > 0) {\n        this.y -= 10;\n      }\n    }\n  }, {\n    key: \"moveDown\",\n    value: function moveDown() {\n      if (this.y + this.height < 400) {\n        this.y += 10;\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./source/player.js?");

/***/ }),

/***/ "p5":
/*!*********************!*\
  !*** external "p5" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = p5;\n\n//# sourceURL=webpack:///external_%22p5%22?");

/***/ })

/******/ });