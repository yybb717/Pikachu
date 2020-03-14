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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css.js":
/*!********************!*\
  !*** ./src/css.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const string = `
/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*::before,
*::after {
  box-sizing: border-box;
}
/*先画黄黄的皮肤吧*/
.skin {
  background: rgb(254, 228, 51);
  min-height: 100%;
  position: relative;
}
/* 开始画鼻子了 */
.nose {
  border: 8px solid black;
  border-color: black transparent transparent;

  border-bottom: none;
  width: 0px;
  height: 0px;
  position: absolute;
  top: 190px;
  left: 50%;
  margin-left: -8px;
  z-index: 10;
}
.nose > div {
  height: 8px;
  width: 16px;
  position: absolute;
  bottom: 100%;
  margin-bottom: 8px;
  margin-left: -8px;
  border-radius: 13px 13px 0 0;
  background: black;
}
/* 让可爱的鼻子摇起来 */
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(-5deg);
  }
  66% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: 50% 100%;
  animation: wave 300ms infinite linear;
}
/* 画眼睛啦 */
.eye {
  border: 3px solid rgb(10, 10, 10);
  border-radius: 50%;
  width: 54px;
  height: 54px;
  position: absolute;
  top: 150px;
  left: 50%;
  margin-left: -27px;
  background: rgb(46, 46, 46);
}
.eye.left {
  transform: translateX(-130px);
}
.eye.right {
  transform: translateX(130px);
}
.eye::before {
  content: "";
  display: block;
  width: 28px;
  height: 28px;
  border: 3px solid black;
  background: white;
  border-radius: 50%;
  position: relative;
  top: 0px;
  left: 6px;
}
/* 画性感的大嘴巴 */
.mouth {
  width: 200px;
  height: 150px;
  position: absolute;
  top: 216px;
  left: 50%;
  margin-left: -100px;
}
.mouth .up .lip {
  border: 3px solid black;
  width: 90px;
  height: 46px;
  position: relative;
  left: 50%;
  margin-left: -45px;
  border-top: transparent;
  background-color: rgb(254, 228, 51);
  z-index: 3;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 100%;
  border-right: transparent;
  top: -50px;
  transform: rotate(-30deg) translateX(-57px);
}
.mouth .up .lip.right {
  border-radius: 0 0 100% 0;
  border-left: transparent;
  top: -95px;
  transform: rotate(30deg) translateX(55px);
}
.mouth .down {
  width: 160px;
  height: 140px;
  position: absolute;
  left: 50%;
  margin-left: -80px;
  top: 0%;
  overflow: hidden;
}
.mouth .down .yuan1 {
  border: 3px solid rgba(16, 16, 16, 40%);
  width: 160px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  border-radius: 100px/300px;
  background: rgb(153, 5, 19);
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
  width: 160px;
  height: 500px;
  position: absolute;
  left: 50%;
  margin-left: -80px;
  top: 89%;
  border-radius: 300px/300px;
  background: rgb(252, 74, 98);
}
/* 最后画腮红 */
.face {
  border: 3px solid black;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 11;
  left: 50%;
  margin-left: -40px;
  top: 250px;
  background: red;
}
.face.left {
  transform: translateX(-200px);
}
.face.right {
  transform: translateX(200px);
}
@media (max-width: 500px) {
  .face {
    width: 60px;
    height: 60px;
    margin-left: -30px;
  }
  .face.left {
    transform: translateX(-150px);
  }
  .face.right {
    transform: translateX(150px);
  }
}
/* 结束啦！我的皮卡丘好看嘛 */
`;
/* harmony default export */ __webpack_exports__["default"] = (string);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css.js */ "./src/css.js");


let n = 1;
demo1.innerText = _css_js__WEBPACK_IMPORTED_MODULE_0__["default"].substring(0, n);
document.querySelector("#demo2").innerHTML = _css_js__WEBPACK_IMPORTED_MODULE_0__["default"].substring(0, n);

const run = () => {
  n += 1;
  if (n > _css_js__WEBPACK_IMPORTED_MODULE_0__["default"].length) {
    window.clearInterval(id);
    return;
  }
  demo1.innerText = _css_js__WEBPACK_IMPORTED_MODULE_0__["default"].substring(0, n);
  demo1.scrollTop = 9999;
  document.querySelector("#demo2").innerHTML = _css_js__WEBPACK_IMPORTED_MODULE_0__["default"].substring(0, n);
};
let time = 100;
const play = () => {
  return setInterval(run, time);
};
const pause = () => {
  window.clearInterval(id);
};

let id = play();

btnPause.onclick = () => {
  pause();
};
btnPlay.onclick = () => {
  id = play();
};
btnFast.onclick = () => {
  pause();
  time = 0;
  id = play();
};
btnNormal.onclick = () => {
  pause();
  time = 100;
  id = play();
};
btnSlow.onclick = () => {
  pause();
  time = 300;
  id = play();
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN6THRCO0FBQUE7QUFBOEI7O0FBRTlCO0FBQ0Esa0JBQWtCLCtDQUFNO0FBQ3hCLDZDQUE2QywrQ0FBTTs7QUFFbkQ7QUFDQTtBQUNBLFVBQVUsK0NBQU07QUFDaEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFNO0FBQzFCO0FBQ0EsK0NBQStDLCtDQUFNO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LjkwOGI4MTBhODgwMGRkNmJlOTI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBzdHJpbmcgPSBgXG4vKiBDU1MgUmVzZXQgKi9cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4vKuWFiOeUu+m7hOm7hOeahOearuiCpOWQpyovXG4uc2tpbiB7XG4gIGJhY2tncm91bmQ6IHJnYigyNTQsIDIyOCwgNTEpO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4vKiDlvIDlp4vnlLvpvLvlrZDkuoYgKi9cbi5ub3NlIHtcbiAgYm9yZGVyOiA4cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG5cbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOTBweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLThweDtcbiAgei1pbmRleDogMTA7XG59XG4ubm9zZSA+IGRpdiB7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHggMTNweCAwIDA7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuLyog6K6p5Y+v54ix55qE6by75a2Q5pGH6LW35p2lICovXG5Aa2V5ZnJhbWVzIHdhdmUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMzMlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbiAgNjYlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuLm5vc2U6aG92ZXIge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgYW5pbWF0aW9uOiB3YXZlIDMwMG1zIGluZmluaXRlIGxpbmVhcjtcbn1cbi8qIOeUu+ecvOedm+WVpiAqL1xuLmV5ZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYigxMCwgMTAsIDEwKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNTRweDtcbiAgaGVpZ2h0OiA1NHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yN3B4O1xuICBiYWNrZ3JvdW5kOiByZ2IoNDYsIDQ2LCA0Nik7XG59XG4uZXllLmxlZnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEzMHB4KTtcbn1cbi5leWUucmlnaHQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMwcHgpO1xufVxuLmV5ZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiA2cHg7XG59XG4vKiDnlLvmgKfmhJ/nmoTlpKflmLTlt7QgKi9cbi5tb3V0aCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIxNnB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XG59XG4ubW91dGggLnVwIC5saXAge1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogNDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDVweDtcbiAgYm9yZGVyLXRvcDogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTQsIDIyOCwgNTEpO1xuICB6LWluZGV4OiAzO1xufVxuLm1vdXRoIC51cCAubGlwLmxlZnQge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMCAxMDAlO1xuICBib3JkZXItcmlnaHQ6IHRyYW5zcGFyZW50O1xuICB0b3A6IC01MHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpIHRyYW5zbGF0ZVgoLTU3cHgpO1xufVxuLm1vdXRoIC51cCAubGlwLnJpZ2h0IHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwMCUgMDtcbiAgYm9yZGVyLWxlZnQ6IHRyYW5zcGFyZW50O1xuICB0b3A6IC05NXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZykgdHJhbnNsYXRlWCg1NXB4KTtcbn1cbi5tb3V0aCAuZG93biB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcbiAgdG9wOiAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tb3V0aCAuZG93biAueXVhbjEge1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDE2LCAxNiwgMTYsIDQwJSk7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxMDAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDBweC8zMDBweDtcbiAgYmFja2dyb3VuZDogcmdiKDE1MywgNSwgMTkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1vdXRoIC5kb3duIC55dWFuMSAueXVhbjIge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gIHRvcDogODklO1xuICBib3JkZXItcmFkaXVzOiAzMDBweC8zMDBweDtcbiAgYmFja2dyb3VuZDogcmdiKDI1MiwgNzQsIDk4KTtcbn1cbi8qIOacgOWQjueUu+iFrue6oiAqL1xuLmZhY2Uge1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDExO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgdG9wOiAyNTBweDtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuLmZhY2UubGVmdCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwcHgpO1xufVxuLmZhY2UucmlnaHQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5mYWNlIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xuICB9XG4gIC5mYWNlLmxlZnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwcHgpO1xuICB9XG4gIC5mYWNlLnJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUwcHgpO1xuICB9XG59XG4vKiDnu5PmnZ/llabvvIHmiJHnmoTnmq7ljaHkuJjlpb3nnIvlmJsgKi9cbmA7XG5leHBvcnQgZGVmYXVsdCBzdHJpbmc7XG4iLCJpbXBvcnQgc3RyaW5nIGZyb20gXCIuL2Nzcy5qc1wiO1xuXG5sZXQgbiA9IDE7XG5kZW1vMS5pbm5lclRleHQgPSBzdHJpbmcuc3Vic3RyaW5nKDAsIG4pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZW1vMlwiKS5pbm5lckhUTUwgPSBzdHJpbmcuc3Vic3RyaW5nKDAsIG4pO1xuXG5jb25zdCBydW4gPSAoKSA9PiB7XG4gIG4gKz0gMTtcbiAgaWYgKG4gPiBzdHJpbmcubGVuZ3RoKSB7XG4gICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBkZW1vMS5pbm5lclRleHQgPSBzdHJpbmcuc3Vic3RyaW5nKDAsIG4pO1xuICBkZW1vMS5zY3JvbGxUb3AgPSA5OTk5O1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbW8yXCIpLmlubmVySFRNTCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgbik7XG59O1xubGV0IHRpbWUgPSAxMDA7XG5jb25zdCBwbGF5ID0gKCkgPT4ge1xuICByZXR1cm4gc2V0SW50ZXJ2YWwocnVuLCB0aW1lKTtcbn07XG5jb25zdCBwYXVzZSA9ICgpID0+IHtcbiAgd2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xufTtcblxubGV0IGlkID0gcGxheSgpO1xuXG5idG5QYXVzZS5vbmNsaWNrID0gKCkgPT4ge1xuICBwYXVzZSgpO1xufTtcbmJ0blBsYXkub25jbGljayA9ICgpID0+IHtcbiAgaWQgPSBwbGF5KCk7XG59O1xuYnRuRmFzdC5vbmNsaWNrID0gKCkgPT4ge1xuICBwYXVzZSgpO1xuICB0aW1lID0gMDtcbiAgaWQgPSBwbGF5KCk7XG59O1xuYnRuTm9ybWFsLm9uY2xpY2sgPSAoKSA9PiB7XG4gIHBhdXNlKCk7XG4gIHRpbWUgPSAxMDA7XG4gIGlkID0gcGxheSgpO1xufTtcbmJ0blNsb3cub25jbGljayA9ICgpID0+IHtcbiAgcGF1c2UoKTtcbiAgdGltZSA9IDMwMDtcbiAgaWQgPSBwbGF5KCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==