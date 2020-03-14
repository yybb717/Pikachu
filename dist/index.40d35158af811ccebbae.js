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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDNUt0QjtBQUFBO0FBQThCOztBQUU5QjtBQUNBLGtCQUFrQiwrQ0FBTTtBQUN4Qiw2Q0FBNkMsK0NBQU07O0FBRW5EO0FBQ0E7QUFDQSxVQUFVLCtDQUFNO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBTTtBQUMxQjtBQUNBLCtDQUErQywrQ0FBTTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC40MGQzNTE1OGFmODExY2NlYmJhZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3Qgc3RyaW5nID0gYFxyXG4vKiBDU1MgUmVzZXQgKi9cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi8q5YWI55S76buE6buE55qE55qu6IKk5ZCnKi9cclxuLnNraW4ge1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTQsIDIyOCwgNTEpO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi8qIOW8gOWni+eUu+m8u+WtkOS6hiAqL1xyXG4ubm9zZSB7XHJcbiAgYm9yZGVyOiA4cHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuXHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB3aWR0aDogMHB4O1xyXG4gIGhlaWdodDogMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE5MHB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLThweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4ubm9zZSA+IGRpdiB7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweCAxM3B4IDAgMDtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG4vKiDorqnlj6/niLHnmoTpvLvlrZDmkYfotbfmnaUgKi9cclxuQGtleWZyYW1lcyB3YXZlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMzMlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcclxuICB9XHJcbiAgNjYlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxufVxyXG4ubm9zZTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgYW5pbWF0aW9uOiB3YXZlIDMwMG1zIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG4vKiDnlLvnnLznnZvllaYgKi9cclxuLmV5ZSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDEwLCAxMCwgMTApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNTRweDtcclxuICBoZWlnaHQ6IDU0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjdweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNDYsIDQ2LCA0Nik7XHJcbn1cclxuLmV5ZS5sZWZ0IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEzMHB4KTtcclxufVxyXG4uZXllLnJpZ2h0IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTMwcHgpO1xyXG59XHJcbi5leWU6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiA2cHg7XHJcbn1cclxuLyog55S75oCn5oSf55qE5aSn5Zi05be0ICovXHJcbi5tb3V0aCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjE2cHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbn1cclxuLm1vdXRoIC51cCAubGlwIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogLTQ1cHg7XHJcbiAgYm9yZGVyLXRvcDogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwgMjI4LCA1MSk7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4ubW91dGggLnVwIC5saXAubGVmdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgMTAwJTtcclxuICBib3JkZXItcmlnaHQ6IHRyYW5zcGFyZW50O1xyXG4gIHRvcDogLTUwcHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKSB0cmFuc2xhdGVYKC01N3B4KTtcclxufVxyXG4ubW91dGggLnVwIC5saXAucmlnaHQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMDAlIDA7XHJcbiAgYm9yZGVyLWxlZnQ6IHRyYW5zcGFyZW50O1xyXG4gIHRvcDogLTk1cHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpIHRyYW5zbGF0ZVgoNTVweCk7XHJcbn1cclxuLm1vdXRoIC5kb3duIHtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcclxuICB0b3A6IDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm1vdXRoIC5kb3duIC55dWFuMSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgxNiwgMTYsIDE2LCA0MCUpO1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBoZWlnaHQ6IDEwMDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4LzMwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigxNTMsIDUsIDE5KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5tb3V0aCAuZG93biAueXVhbjEgLnl1YW4yIHtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcclxuICB0b3A6IDg5JTtcclxuICBib3JkZXItcmFkaXVzOiAzMDBweC8zMDBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjUyLCA3NCwgOTgpO1xyXG59XHJcbi8qIOacgOWQjueUu+iFrue6oiAqL1xyXG4uZmFjZSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICB0b3A6IDI1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxufVxyXG4uZmFjZS5sZWZ0IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwMHB4KTtcclxufVxyXG4uZmFjZS5yaWdodCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTtcclxufVxyXG4vKiDnu5PmnZ/llabvvIHmiJHnmoTnmq7ljaHkuJjlpb3nnIvlmJsgKi9cclxuYDtcclxuZXhwb3J0IGRlZmF1bHQgc3RyaW5nO1xyXG4iLCJpbXBvcnQgc3RyaW5nIGZyb20gXCIuL2Nzcy5qc1wiO1xyXG5cclxubGV0IG4gPSAxO1xyXG5kZW1vMS5pbm5lclRleHQgPSBzdHJpbmcuc3Vic3RyaW5nKDAsIG4pO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbW8yXCIpLmlubmVySFRNTCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgbik7XHJcblxyXG5jb25zdCBydW4gPSAoKSA9PiB7XHJcbiAgbiArPSAxO1xyXG4gIGlmIChuID4gc3RyaW5nLmxlbmd0aCkge1xyXG4gICAgd2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBkZW1vMS5pbm5lclRleHQgPSBzdHJpbmcuc3Vic3RyaW5nKDAsIG4pO1xyXG4gIGRlbW8xLnNjcm9sbFRvcCA9IDk5OTk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZW1vMlwiKS5pbm5lckhUTUwgPSBzdHJpbmcuc3Vic3RyaW5nKDAsIG4pO1xyXG59O1xyXG5sZXQgdGltZSA9IDEwMDtcclxuY29uc3QgcGxheSA9ICgpID0+IHtcclxuICByZXR1cm4gc2V0SW50ZXJ2YWwocnVuLCB0aW1lKTtcclxufTtcclxuY29uc3QgcGF1c2UgPSAoKSA9PiB7XHJcbiAgd2luZG93LmNsZWFySW50ZXJ2YWwoaWQpO1xyXG59O1xyXG5cclxubGV0IGlkID0gcGxheSgpO1xyXG5cclxuYnRuUGF1c2Uub25jbGljayA9ICgpID0+IHtcclxuICBwYXVzZSgpO1xyXG59O1xyXG5idG5QbGF5Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgaWQgPSBwbGF5KCk7XHJcbn07XHJcbmJ0bkZhc3Qub25jbGljayA9ICgpID0+IHtcclxuICBwYXVzZSgpO1xyXG4gIHRpbWUgPSAwO1xyXG4gIGlkID0gcGxheSgpO1xyXG59O1xyXG5idG5Ob3JtYWwub25jbGljayA9ICgpID0+IHtcclxuICBwYXVzZSgpO1xyXG4gIHRpbWUgPSAxMDA7XHJcbiAgaWQgPSBwbGF5KCk7XHJcbn07XHJcbmJ0blNsb3cub25jbGljayA9ICgpID0+IHtcclxuICBwYXVzZSgpO1xyXG4gIHRpbWUgPSAzMDA7XHJcbiAgaWQgPSBwbGF5KCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=