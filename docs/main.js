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

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://7-days-of-code/./src/styles/styles.css?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./src/styles/styles.css\");\n\r\nlet btnCadastrar = document.querySelectorAll(\".btnCadastrar\");\r\nlet containerBtnCadastrar = document.querySelectorAll(\r\n  \".container-btnCadastrar\"\r\n);\r\n\r\nfor (let i = 0; i < btnCadastrar.length; i++) {\r\n  btnCadastrar[i].addEventListener(\"mouseover\", function () {\r\n    btnCadastrar[i].classList.remove(\"text-black\");\r\n    for (let j = 0; j < containerBtnCadastrar.length; j++) {\r\n      containerBtnCadastrar[j].classList.remove(\"bg-orange-900/20\");\r\n      containerBtnCadastrar[j].classList.add(\"cor-saturada\");\r\n    }\r\n  });\r\n\r\n  btnCadastrar[i].addEventListener(\"mouseout\", function () {\r\n    for (let j = 0; j < containerBtnCadastrar.length; j++) {\r\n      containerBtnCadastrar[j].classList.remove(\"cor-saturada\");\r\n      containerBtnCadastrar[j].classList.add(\"bg-orange-900/20\");\r\n    }\r\n  });\r\n}\r\n\r\nconst checkboxMobile = document.getElementById(\"checkbox-mobile\");\r\nconst body = document.body;\r\n\r\ncheckboxMobile.addEventListener(\"change\", function () {\r\n  if (checkboxMobile.checked) {\r\n    body.classList.add(\"overflow-hidden\");\r\n  } else {\r\n    body.classList.remove(\"overflow-hidden\");\r\n  }\r\n});\r\n\r\ndocument.getElementById(\"email\").classList.add(\"placeholder\");\r\n\n\n//# sourceURL=webpack://7-days-of-code/./src/scripts/main.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;