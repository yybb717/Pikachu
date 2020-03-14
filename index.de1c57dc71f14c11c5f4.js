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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDNUt0QjtBQUFBO0FBQThCOztBQUU5QjtBQUNBLGtCQUFrQiwrQ0FBTTtBQUN4Qiw2Q0FBNkMsK0NBQU07O0FBRW5EO0FBQ0E7QUFDQSxVQUFVLCtDQUFNO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBTTtBQUMxQjtBQUNBLCtDQUErQywrQ0FBTTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5kZTFjNTdkYzcxZjE0YzExYzVmNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3Qgc3RyaW5nID0gYFxuLyogQ1NTIFJlc2V0ICovXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLyrlhYjnlLvpu4Tpu4TnmoTnmq7ogqTlkKcqL1xuLnNraW4ge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU0LCAyMjgsIDUxKTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLyog5byA5aeL55S76by75a2Q5LqGICovXG4ubm9zZSB7XG4gIGJvcmRlcjogOHB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTkwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG4gIHotaW5kZXg6IDEwO1xufVxuLm5vc2UgPiBkaXYge1xuICBoZWlnaHQ6IDhweDtcbiAgd2lkdGg6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAtOHB4O1xuICBib3JkZXItcmFkaXVzOiAxM3B4IDEzcHggMCAwO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cbi8qIOiuqeWPr+eIseeahOm8u+WtkOaRh+i1t+adpSAqL1xuQGtleWZyYW1lcyB3YXZlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDMzJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB9XG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cbi5ub3NlOmhvdmVyIHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIGFuaW1hdGlvbjogd2F2ZSAzMDBtcyBpbmZpbml0ZSBsaW5lYXI7XG59XG4vKiDnlLvnnLznnZvllaYgKi9cbi5leWUge1xuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTAsIDEwLCAxMCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDU0cHg7XG4gIGhlaWdodDogNTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1MHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjdweDtcbiAgYmFja2dyb3VuZDogcmdiKDQ2LCA0NiwgNDYpO1xufVxuLmV5ZS5sZWZ0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMzBweCk7XG59XG4uZXllLnJpZ2h0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEzMHB4KTtcbn1cbi5leWU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogNnB4O1xufVxuLyog55S75oCn5oSf55qE5aSn5Zi05be0ICovXG4ubW91dGgge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMTZweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTEwMHB4O1xufVxuLm1vdXRoIC51cCAubGlwIHtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTQ1cHg7XG4gIGJvcmRlci10b3A6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyMjgsIDUxKTtcbiAgei1pbmRleDogMztcbn1cbi5tb3V0aCAudXAgLmxpcC5sZWZ0IHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiB0cmFuc3BhcmVudDtcbiAgdG9wOiAtNTBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKSB0cmFuc2xhdGVYKC01N3B4KTtcbn1cbi5tb3V0aCAudXAgLmxpcC5yaWdodCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMDAlIDA7XG4gIGJvcmRlci1sZWZ0OiB0cmFuc3BhcmVudDtcbiAgdG9wOiAtOTVweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpIHRyYW5zbGF0ZVgoNTVweCk7XG59XG4ubW91dGggLmRvd24ge1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gIHRvcDogMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubW91dGggLmRvd24gLnl1YW4xIHtcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgxNiwgMTYsIDE2LCA0MCUpO1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogMTAwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHgvMzAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYigxNTMsIDUsIDE5KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tb3V0aCAuZG93biAueXVhbjEgLnl1YW4yIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xuICB0b3A6IDg5JTtcbiAgYm9yZGVyLXJhZGl1czogMzAwcHgvMzAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYigyNTIsIDc0LCA5OCk7XG59XG4vKiDmnIDlkI7nlLvoha7nuqIgKi9cbi5mYWNlIHtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTQwcHg7XG4gIHRvcDogMjUwcHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cbi5mYWNlLmxlZnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMHB4KTtcbn1cbi5mYWNlLnJpZ2h0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcbn1cbi8qIOe7k+adn+WVpu+8geaIkeeahOearuWNoeS4mOWlveeci+WYmyAqL1xuYDtcbmV4cG9ydCBkZWZhdWx0IHN0cmluZztcbiIsImltcG9ydCBzdHJpbmcgZnJvbSBcIi4vY3NzLmpzXCI7XG5cbmxldCBuID0gMTtcbmRlbW8xLmlubmVyVGV4dCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgbik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbW8yXCIpLmlubmVySFRNTCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgbik7XG5cbmNvbnN0IHJ1biA9ICgpID0+IHtcbiAgbiArPSAxO1xuICBpZiAobiA+IHN0cmluZy5sZW5ndGgpIHtcbiAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRlbW8xLmlubmVyVGV4dCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgbik7XG4gIGRlbW8xLnNjcm9sbFRvcCA9IDk5OTk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVtbzJcIikuaW5uZXJIVE1MID0gc3RyaW5nLnN1YnN0cmluZygwLCBuKTtcbn07XG5sZXQgdGltZSA9IDEwMDtcbmNvbnN0IHBsYXkgPSAoKSA9PiB7XG4gIHJldHVybiBzZXRJbnRlcnZhbChydW4sIHRpbWUpO1xufTtcbmNvbnN0IHBhdXNlID0gKCkgPT4ge1xuICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpZCk7XG59O1xuXG5sZXQgaWQgPSBwbGF5KCk7XG5cbmJ0blBhdXNlLm9uY2xpY2sgPSAoKSA9PiB7XG4gIHBhdXNlKCk7XG59O1xuYnRuUGxheS5vbmNsaWNrID0gKCkgPT4ge1xuICBpZCA9IHBsYXkoKTtcbn07XG5idG5GYXN0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gIHBhdXNlKCk7XG4gIHRpbWUgPSAwO1xuICBpZCA9IHBsYXkoKTtcbn07XG5idG5Ob3JtYWwub25jbGljayA9ICgpID0+IHtcbiAgcGF1c2UoKTtcbiAgdGltZSA9IDEwMDtcbiAgaWQgPSBwbGF5KCk7XG59O1xuYnRuU2xvdy5vbmNsaWNrID0gKCkgPT4ge1xuICBwYXVzZSgpO1xuICB0aW1lID0gMzAwO1xuICBpZCA9IHBsYXkoKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9