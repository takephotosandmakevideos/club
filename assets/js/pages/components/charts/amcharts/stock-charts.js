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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/charts/amcharts/stock-charts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/charts/amcharts/stock-charts.js":
/*!*************************************************************************!*\
  !*** ../src/assets/js/pages/components/charts/amcharts/stock-charts.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


        // Class definition
        var KTamChartsStockChartsDemo = function () {
            
            var demo3 = function () {
                var chartData = generateChartData();

                function generateChartData() {
                    var chartData = [];
                    var firstDate = new Date(2012, 0, 1);
                    firstDate.setDate(firstDate.getDate() - 500);
                    firstDate.setHours(0, 0, 0, 0);

                    for (var i = 0; i < 500; i++) {
                        var newDate = new Date(firstDate);
                        newDate.setDate(newDate.getDate() + i);

                        var value = Math.round(Math.random() * (40 + i)) + 100 + i;

                        chartData.push({
                            "date": newDate,
                            "value": value
                        });
                    }
                    return chartData;
                }


                var chart = AmCharts.makeChart("kt_amcharts_3", {
                    "type": "stock",
                    "theme": "light",
                    "dataSets": [{
                        "color": "#b0de09",
                        "fieldMappings": [{
                            "fromField": "value",
                            "toField": "value"
                        }],
                        "dataProvider": chartData,
                        "categoryField": "date"
                    }],

                    "panels": [{
                        "showCategoryAxis": true,
                        "title": "Value",
                        "eraseAll": false,
                        //"allLabels": [{
                        //    "x": 0,
                        //    "y": 115,
                        //    "text": "Click on the pencil icon on top-right to start drawing",
                        //    "align": "center",
                        //    "size": 16
                        //}],

                        "stockGraphs": [{
                            "id": "g1",
                            "valueField": "value",
                            "useDataSetColors": false
                        }],

                        "stockLegend": {
                            "valueTextRegular": " ",
                            "markerType": "none"
                        },

                        "drawingIconsEnabled": false
                    }],

                    "chartScrollbarSettings": {
                        "graph": "g1"
                    },
                    "chartCursorSettings": {
                        "valueBalloonsEnabled": true
                    },
                    "periodSelector": {
                        "position": "bottom",
                        "periods": [{
                            "period": "DD",
                            "count": 10,
                            "label": "10 days"
                        }, {
                            "period": "MM",
                            "count": 1,
                            "label": "1 month"
                        }, {
                            "period": "YYYY",
                            "count": 1,
                            "label": "1 year"
                        }, {
                            "period": "YTD",
                            "label": "YTD"
                        }, {
                            "period": "MAX",
                            "label": "MAX"
                        }]
                    }
                });
            }
            return {
                // public functions
                init: function () {
                    demo3();
                }
            };
        }();

        jQuery(document).ready(function () {
            KTamChartsStockChartsDemo.init();
        });

//# sourceURL=webpack:///../src/assets/js/pages/components/charts/amcharts/stock-charts.js?

/***/ })

/******/ });