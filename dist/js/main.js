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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validations */ \"./modules/validations.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('26 march 2022')\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_validations__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/animate.js":
/*!****************************!*\
  !*** ./modules/animate.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration}) => {\r\n\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n}\n\n//# sourceURL=webpack:///./modules/animate.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n  const inputNumber = document.querySelectorAll(\".calc-block input\")\r\n\r\n  const regExpNumber = /[^0-9]+/i\r\n\r\n  inputNumber.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(regExpNumber, \"\")\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector('.menu')\r\n  const menu = document.querySelector('menu')\r\n  const closeBtn = menu.querySelector('.close-btn')\r\n  const menuItems = menu.querySelectorAll('ul>li>a')\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle('active-menu')\r\n  }\r\n\r\n  menuBtn.addEventListener('click', handleMenu)\r\n  closeBtn.addEventListener('click', handleMenu)\r\n\r\n  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animate */ \"./modules/animate.js\");\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector('.popup')\r\n  const buttons = document.querySelectorAll('.popup-btn')\r\n\r\n  // изначально модальное окно opacity = 0\r\n\r\n  buttons.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      if (screen.width >= 768) {\r\n        modal.style.display = 'block'\r\n        modal.style.opacity = 0\r\n\r\n        ;(0,_animate__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 800,\r\n          timing(timeFraction) {\r\n            return timeFraction;\r\n          },\r\n          draw(progress) {\r\n            modal.style.opacity = progress\r\n          }\r\n        });\r\n\r\n      } else {\r\n        modal.style.display = 'block'\r\n      }\r\n    })\r\n  })\r\n\r\n  modal.addEventListener('click', (e) => {\r\n    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n      modal.style.display = 'none'\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n  const menu = document.querySelector('menu')\r\n  const menuItems = menu.querySelectorAll('ul>li>a')\r\n  const smoothScroll = document.querySelector('.service-link')\r\n  const menuItemsAll = [...menuItems, smoothScroll]\r\n\r\n  menuItemsAll.forEach(menuItem => {\r\n    menuItem.addEventListener('click', (e) => {\r\n      e.preventDefault()\r\n\r\n      const blockID = menuItem.getAttribute(\"href\").substring(1)\r\n\r\n      document.getElementById(blockID).scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\"\r\n      })\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector('.service-header')\r\n  const tabs = document.querySelectorAll('.service-header-tab')\r\n  const tabContent = document.querySelectorAll('.service-tab')\r\n\r\n  tabPanel.addEventListener('click', (e) => {\r\n    if (e.target.closest('.service-header-tab')) {\r\n      const tabBtn = e.target.closest('.service-header-tab')\r\n\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add('active')\r\n          tabContent[index].classList.remove('d-none')\r\n        } else {\r\n          tab.classList.remove('active')\r\n          tabContent[index].classList.add('d-none')\r\n        }\r\n      })\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n  const timerDays = document.getElementById('timer-days')\n  const timerHours = document.getElementById('timer-hours')\n  const timerMinutes = document.getElementById('timer-minutes')\n  const timerSeconds = document.getElementById('timer-seconds')\n  let timerID\n\n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadline).getTime()\n    let dateNow = new Date().getTime()\n    let timeRemaining = (dateStop - dateNow) / 1000\n    let days = Math.floor(timeRemaining / 60 / 60 / 24)\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24)\n    let minutes = Math.floor((timeRemaining / 60) % 60)\n    let seconds = Math.floor(timeRemaining % 60)\n\n    return { timeRemaining, days, hours, minutes, seconds }\n  }\n\n  const updateClock = () => {\n    let getTime = getTimeRemaining()\n\n    timerHours.textContent = (getTime.hours < 10) ? '0' + getTime.hours : getTime.hours\n    timerMinutes.textContent = (getTime.minutes < 10) ? '0' + getTime.minutes : getTime.minutes\n    timerSeconds.textContent = (getTime.seconds < 10) ? '0' + getTime.seconds : getTime.seconds\n    timerDays.textContent = (getTime.days < 10) ? '0' + getTime.days : getTime.days\n  }\n\n  updateClock()\n\n  const intervalCall = () => {\n    let getTime = getTimeRemaining()\n\n    if (getTime.timeRemaining > 0) {\n\n      timerID = setInterval(updateClock, 1000)\n    } else {\n      timerHours.textContent = '00',\n      timerMinutes.textContent = '00',\n      timerSeconds.textContent = '00',\n      timerDays.textContent = '00'\n\n      clearInterval(timerID)\n    }\n  }\n  intervalCall()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validations.js":
/*!********************************!*\
  !*** ./modules/validations.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validations = () => {\r\n  const inputMessage = document.getElementById(\"form2-message\")\r\n  const inputText = document.querySelectorAll(\"form input[type='text']\")\r\n  const inputEmail = document.querySelectorAll(\"form input[type='email']\")\r\n  const inputPhone = document.querySelectorAll(\"form input[type='tel']\")\r\n\r\n  const regExpText = /[^а-я\\-\\s]+/i\r\n  const regExpEmail = /[^a-z\\@\\-\\_\\.\\!\\~\\*\\']+/i\r\n  const regExpPhone = /[^0-9\\(\\)\\-]+/i\r\n\r\n  const manyDash = /(\\-+)/g\r\n  const manySpace = /(\\s+)/g\r\n  const edgeDash = /^\\-|\\-$/g\r\n  const edgeSpace = /^\\s+|\\s+$/g\r\n\r\n  inputText.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(regExpText, \"\")\r\n    })\r\n  })\r\n\r\n  inputEmail.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(regExpEmail, \"\")\r\n    })\r\n  })\r\n\r\n  inputPhone.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(regExpPhone, \"\")\r\n    })\r\n  })\r\n\r\n  inputMessage.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(regExpText, \"\")\r\n  })\r\n\r\n  inputText.forEach((input) => {\r\n    input.addEventListener(\"blur\", (e) => {\r\n      let capitalizeLetterFunc = (match) => match.toUpperCase()\r\n\r\n      e.target.value = e.target.value\r\n        .replace(manyDash, \"-\")\r\n        .replace(manySpace, \" \")\r\n        .replace(edgeDash, \"\")\r\n        .replace(edgeSpace, \"\")\r\n      \r\n      e.target.value = e.target.value.toLowerCase()\r\n      e.target.value = e.target.value\r\n      .replace(/^[а-я]{1}|\\s{1}[а-я]{1}/gi, capitalizeLetterFunc)\r\n    })\r\n  })\r\n\r\n  inputEmail.forEach((input) => {\r\n    input.addEventListener(\"blur\", (e) => {\r\n      e.target.value = e.target.value\r\n        .replace(manyDash, \"-\")\r\n        .replace(manySpace, \" \")\r\n        .replace(edgeDash, \"\")\r\n        .replace(edgeSpace, \"\")\r\n    })\r\n  })\r\n\r\n  inputPhone.forEach((input) => {\r\n    input.addEventListener(\"blur\", (e) => {\r\n      e.target.value = e.target.value\r\n        .replace(manyDash, \"-\")\r\n        .replace(manySpace, \" \")\r\n        .replace(edgeDash, \"\")\r\n        .replace(edgeSpace, \"\")\r\n    })\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validations);\n\n//# sourceURL=webpack:///./modules/validations.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;