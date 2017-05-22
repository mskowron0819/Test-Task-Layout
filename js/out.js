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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
    var menu = document.getElementById('hamburger-menu');
    var nav = document.getElementById('nav-bar');

    menu.addEventListener('click', function (e) {
        menu.classList.toggle('open');
        nav.classList.toggle('show');
    });

    var historyData = 'https://efigence-camp.herokuapp.com/api/data/history';

    function insertContent(data) {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
            var item = '<div class="row history-item">' + '<div class="col-xs-2 date">' + data[i].date.slice(-5) + '</div>' + '<div class="col-xs-6 description">' + data[i].description + '<div class="row">' + '<div class="col-xs-4 category">' + '<select name="type">' + '<option value=${date[i].category}>' + data[i].category + '</option>' + '<option value="Food">Food</option>' + '<option value="Salary">Salary</option>' + '<option value="Fun">Fun</option>' + '</select>' + '</div>' + '</div>' + ' </div>' + '<div class="col-xs-4 amount"><strong>' + data[i].amount.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + '</strong> PLN</div>' + '</div>';
            $('#history').append(item);
        }
    }
    function loadHistory() {
        $.ajax({
            url: historyData
        }).done(function (response) {
            insertContent(response.content);
        }).fail(function (error) {
            console.log(error);
        });
    }
    loadHistory();
});

/***/ })
/******/ ]);