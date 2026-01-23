/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/_entry.js"
/*!**********************!*\
  !*** ./js/_entry.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _back_to_top_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./back-to-top.js */ \"./js/back-to-top.js\");\n/* harmony import */ var _back_to_top_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_back_to_top_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _greeting_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./greeting.js */ \"./js/greeting.js\");\n/* harmony import */ var _greeting_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_greeting_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.js */ \"./js/navigation.js\");\n/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navigation_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _theme_switcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-switcher.js */ \"./js/theme-switcher.js\");\n/* harmony import */ var _theme_switcher_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_switcher_js__WEBPACK_IMPORTED_MODULE_3__);\n//\n// Javascript/s Entry Point\n//\n\n\n\n\n\n\nconsole.log('%c Afros Blog', 'font-size: 12px;');\n\n//\n// Your other JavaScript code can go here\n//\n\n//# sourceURL=webpack://afros-blog/./js/_entry.js?\n}");

/***/ },

/***/ "./js/back-to-top.js"
/*!***************************!*\
  !*** ./js/back-to-top.js ***!
  \***************************/
() {

eval("{document.addEventListener(\"DOMContentLoaded\", function () {\r\n    var scrollToTopBtn = document.getElementById(\"scrollToTopBtn\");\r\n\r\n    // Show the button when scrolling 400px down\r\n    window.onscroll = function () {\r\n        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {\r\n            scrollToTopBtn.style.display = \"block\";\r\n        } else {\r\n            scrollToTopBtn.style.display = \"none\";\r\n        }\r\n    };\r\n\r\n    // Click event to smoothly scroll to the top\r\n    scrollToTopBtn.addEventListener(\"click\", function () {\r\n        var currentPosition = window.scrollY || document.documentElement.scrollTop;\r\n        var targetPosition = 0;\r\n        var distance = currentPosition - targetPosition;\r\n        var duration = 500; // Duration of the scroll in ms\r\n        var startTime = null;\r\n\r\n        // Smooth scroll function using requestAnimationFrame\r\n        function scrollStep(timestamp) {\r\n            if (!startTime) startTime = timestamp;\r\n            var progress = timestamp - startTime;\r\n            var percentage = Math.min(progress / duration, 1);\r\n            window.scrollTo(0, currentPosition - distance * percentage);\r\n\r\n            if (progress < duration) {\r\n                requestAnimationFrame(scrollStep);\r\n            }\r\n        }\r\n        requestAnimationFrame(scrollStep);\r\n    });\r\n});\n\n//# sourceURL=webpack://afros-blog/./js/back-to-top.js?\n}");

/***/ },

/***/ "./js/greeting.js"
/*!************************!*\
  !*** ./js/greeting.js ***!
  \************************/
() {

eval("{document.addEventListener(\"DOMContentLoaded\", function () {\r\n    'use strict';\r\n\r\n    // Get the Current Hour of User's Device\r\n    let hr = new Date().getHours();\r\n\r\n    // Get the \"Greet User\" element\r\n    let welcome = document.getElementById(\"greet-user\");\r\n\r\n    // Set the greeting based on the hour range\r\n    if (hr >= 1 && hr <= 5) {\r\n        welcome.innerHTML = \"Night Owl Reading!\";\r\n    } else if (hr >= 6 && hr <= 11) {\r\n        welcome.innerHTML = \"Good morning!\";\r\n    } else if (hr >= 12 && hr <= 16) {\r\n        welcome.innerHTML = \"Good Afternoon!\";\r\n    } else {\r\n        welcome.innerHTML = \"Good Evening!\";\r\n    }\r\n});\n\n//# sourceURL=webpack://afros-blog/./js/greeting.js?\n}");

/***/ },

/***/ "./js/navigation.js"
/*!**************************!*\
  !*** ./js/navigation.js ***!
  \**************************/
() {

eval("{let navElement, mainElement, headerElement, overlayElement, menuTrigger;\n\nfunction createOverlay() {\n    // Create overlay element if it doesn't exist\n    let overlay = document.querySelector('.content-overlay');\n    if (!overlay) {\n        overlay = document.createElement('div');\n        overlay.classList.add('content-overlay');\n        document.body.appendChild(overlay);\n    }\n    return overlay;\n}\n\nfunction initNavigation() {\n    // Get DOM elements\n    navElement = document.getElementById(\"sideMenu\");\n    mainElement = document.querySelector(\"main\");\n    headerElement = document.querySelector(\"header\");\n    menuTrigger = document.querySelector('.menu-trigger');\n    overlayElement = createOverlay();\n\n    // Add event listeners for menu trigger\n    if (menuTrigger) {\n        menuTrigger.addEventListener('click', toggleNav);\n    }\n\n    // Add event listener for close button inside navigation\n    const closeMenuTrigger = document.querySelector('.close-menu-trigger');\n    if (closeMenuTrigger) {\n        closeMenuTrigger.addEventListener('click', closeNav);\n    }\n\n    // Close menu when clicking on overlay\n    overlayElement.addEventListener('click', closeNav);\n}\n\nfunction openNav() {\n    // Add active class for slide effect\n    navElement.classList.add('active');\n\n    // Toggle menu trigger to show X\n    menuTrigger.classList.add('active');\n\n    // Add class to body to indicate nav is open\n    document.body.classList.add('nav-open');\n\n    // Show overlay\n    overlayElement.classList.add('active');\n\n    // Apply blur effect to main and header\n    mainElement.classList.add('blurred');\n    headerElement.classList.add('blurred');\n\n    // Prevent body scroll when menu is open\n    document.body.style.overflow = 'hidden';\n}\n\nfunction closeNav() {\n    // Remove active class for slide effect\n    navElement.classList.remove('active');\n\n    // Remove active class from menu trigger to show hamburger\n    menuTrigger.classList.remove('active');\n\n    // Remove class from body to indicate nav is closed\n    document.body.classList.remove('nav-open');\n\n    // Hide overlay\n    overlayElement.classList.remove('active');\n\n    // Remove blur effect from main and header\n    mainElement.classList.remove('blurred');\n    headerElement.classList.remove('blurred');\n\n    // Re-enable body scroll when menu is closed\n    document.body.style.overflow = '';\n}\n\nfunction toggleNav() {\n    if (navElement.classList.contains('active')) {\n        closeNav();\n    } else {\n        openNav();\n    }\n}\n\n// Initialize navigation when DOM is loaded\ndocument.addEventListener('DOMContentLoaded', initNavigation);\n\n//# sourceURL=webpack://afros-blog/./js/navigation.js?\n}");

/***/ },

/***/ "./js/theme-switcher.js"
/*!******************************!*\
  !*** ./js/theme-switcher.js ***!
  \******************************/
() {

eval("{const toggleSwitch = document.querySelector('.theme-switcher__checkbox input[type=\"checkbox\"]');\r\n\r\nfunction switchTheme(e) {\r\n\tif (e.target.checked) {\r\n\t\tdocument.documentElement.setAttribute('data-theme', 'dark');\r\n\t} else {\r\n\t\tdocument.documentElement.setAttribute('data-theme', 'light');\r\n\t}\r\n}\r\ntoggleSwitch.addEventListener('change', switchTheme, false);\r\n\r\n// Store the user preference for future visits\r\nfunction switchTheme(e) {\r\n\tif (e.target.checked) {\r\n\t\tdocument.documentElement.setAttribute('data-theme', 'dark');\r\n\t\tlocalStorage.setItem('theme', 'dark');\r\n\t} else {\r\n\t\tdocument.documentElement.setAttribute('data-theme', 'light');\r\n\t\tlocalStorage.setItem('theme', 'light');\r\n\t}\r\n}\r\n\r\n// Check for saved user preference, if any, load on website reopening\r\nconst currentTheme = localStorage.getItem('theme');\r\nif (currentTheme) {\r\n\tdocument.documentElement.setAttribute('data-theme', currentTheme);\r\n\r\n\tif (currentTheme === 'dark') {\r\n\t\ttoggleSwitch.checked = true;\r\n\t}\r\n}\n\n//# sourceURL=webpack://afros-blog/./js/theme-switcher.js?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/_entry.js");
/******/ 	
/******/ })()
;