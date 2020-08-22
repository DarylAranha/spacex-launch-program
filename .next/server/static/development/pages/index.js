module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/filters.js":
/*!*******************************!*\
  !*** ./components/filters.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _filters_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters.module.css */ "./components/filters.module.css");
/* harmony import */ var _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_filters_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/shaun/react-project/space-x-launch/components/filters.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Filters(props) {
  let startYear = 2006;
  let endYear = 2020;
  let launchYearFilter = [];

  for (let i = startYear; i <= endYear; i++) {
    let buttonStyle = [_filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterButton];

    if (props.filters.filterYear == i) {
      buttonStyle.push(_filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterButtonClicked);
    }

    launchYearFilter.push(__jsx("button", {
      key: i,
      onClick: () => props.handleFilterYearClick(i),
      className: buttonStyle.join(' '),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, " ", i));
  }

  let filterSucessfulLaunchButtonClass = [_filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterButton];

  if (props.filters.sucessfulLaunch !== null) {
    filterSucessfulLaunchButtonClass.push(_filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterButtonClicked);
  }

  let filterSucessfulLandingButtonClass = [_filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterButton];

  if (props.filters.sucessfulLanding !== null) {
    filterSucessfulLandingButtonClass.push(_filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterButtonClicked);
  }

  return __jsx("div", {
    className: _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterContents,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterHeroTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "Filters"), __jsx("div", {
    className: _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filters,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterHero,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, " Year "), __jsx("div", {
    className: _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterContentOption,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, " ", launchYearFilter, " ")), __jsx("div", {
    className: _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filters,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterHero,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, " Sucessful Launch "), __jsx("div", {
    className: _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterContentOption,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => props.handleFilterSucessfulLaunch(true),
    className: props.filters.sucessfulLaunch === true ? filterSucessfulLaunchButtonClass.join(' ') : _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, " True"), __jsx("button", {
    onClick: () => props.handleFilterSucessfulLaunch(false),
    className: props.filters.sucessfulLaunch === false ? filterSucessfulLaunchButtonClass.join(' ') : _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, " False"))), __jsx("div", {
    className: _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filters,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterHero,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, " Sucessful Landing "), __jsx("div", {
    className: _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterContentOption,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: () => props.handleFilterSucessfulLanding(true),
    className: props.filters.sucessfulLanding === true ? filterSucessfulLandingButtonClass.join(' ') : _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, " True"), __jsx("button", {
    onClick: () => props.handleFilterSucessfulLanding(false),
    className: props.filters.sucessfulLanding === false ? filterSucessfulLandingButtonClass.join(' ') : _filters_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.filterButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, " False")))));
}

/***/ }),

/***/ "./components/filters.module.css":
/*!***************************************!*\
  !*** ./components/filters.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"filterContainer": "filters_filterContainer__1dShw",
	"filterContents": "filters_filterContents__1W3sW",
	"filterHeroTitle": "filters_filterHeroTitle__2vRvj",
	"filters": "filters_filters__3d_Im",
	"filterContentOption": "filters_filterContentOption__pecSY",
	"filterHero": "filters_filterHero__1t85x",
	"filterButton": "filters_filterButton__2_Ii5",
	"filterButtonClicked": "filters_filterButtonClicked__31fla"
};

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.module.css */ "./components/footer.module.css");
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/shaun/react-project/space-x-launch/components/footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Footer() {
  return __jsx("div", {
    className: _footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/",
    className: _footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa fa-github",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, " "))), __jsx("div", {
    className: _footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.author,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Developed by: Daryl Aranha"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/darylaranha/",
    className: _footer_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.links,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa fa-linkedin-square",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, " "))));
}

/***/ }),

/***/ "./components/footer.module.css":
/*!**************************************!*\
  !*** ./components/footer.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "footer_footer__1tNtI",
	"author": "footer_author__2BLYR",
	"links": "footer_links__2EWGx"
};

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.module.css */ "./components/header.module.css");
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/shaun/react-project/space-x-launch/components/header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Header() {
  return __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: _header_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.headerTitlePart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, " SpaceX "), " Launch Program"));
}

/***/ }),

/***/ "./components/header.module.css":
/*!**************************************!*\
  !*** ./components/header.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerContainer": "header_headerContainer__3U0WW",
	"header": "header_header__3w6qi",
	"headerTitlePart": "header_headerTitlePart__4gDT_"
};

/***/ }),

/***/ "./components/launchPanel.js":
/*!***********************************!*\
  !*** ./components/launchPanel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LaunchPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _launchPanel_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./launchPanel.module.css */ "./components/launchPanel.module.css");
/* harmony import */ var _launchPanel_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_launchPanel_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/shaun/react-project/space-x-launch/components/launchPanel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function LaunchPanel({
  launchData
}) {
  return __jsx("div", {
    className: _launchPanel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, launchData.map(function (singleData) {
    return __jsx("div", {
      key: singleData.flight_number,
      className: _launchPanel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _launchPanel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heroImageContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: singleData.links.mission_patch,
      alt: singleData.mission_name,
      className: _launchPanel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heroImage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: _launchPanel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.heroHeader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 25
      }
    }, " ", singleData.mission_name, " #", singleData.flight_number, " "), __jsx("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: _launchPanel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 25
      }
    }, " ", __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 59
      }
    }, "Mission Ids:"), " ", singleData.mission_id.length > 0 ? singleData.mission_id : __jsx("i", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 139
      }
    }, "No Records found"), " "), __jsx("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: _launchPanel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 25
      }
    }, __jsx("table", {
      className: _launchPanel_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.cardTable,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }
    }, __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 33
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 37
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 41
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 45
      }
    }, "Launch Year:")), __jsx("td", {
      style: {
        textAlign: "right",
        marginLeft: '10px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 41
      }
    }, singleData.launch_year || __jsx("i", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 121
      }
    }, "No Records found"))), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 37
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 41
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 45
      }
    }, "Successful Launch:")), __jsx("td", {
      style: {
        textAlign: "right",
        marginLeft: '10px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 41
      }
    }, " ", singleData.launch_success !== null ? singleData.launch_success ? 'Yes' : 'No' : __jsx("i", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 179
      }
    }, "Unknown"))), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 37
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 41
      }
    }, __jsx("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 45
      }
    }, "Successful Landing:")), __jsx("td", {
      style: {
        textAlign: "right",
        marginLeft: '10px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 41
      }
    }, " ", singleData.launch_failure_details ? 'Yes' : 'No'))))));
  }));
}

/***/ }),

/***/ "./components/launchPanel.module.css":
/*!*******************************************!*\
  !*** ./components/launchPanel.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "launchPanel_container__30ntu",
	"card": "launchPanel_card__2tqHT",
	"heroImageContainer": "launchPanel_heroImageContainer__366RE",
	"heroImage": "launchPanel_heroImage__1lYkf",
	"heroHeader": "launchPanel_heroHeader__3vC37",
	"cardText": "launchPanel_cardText__3i2YO",
	"cardTable": "launchPanel_cardTable__ZSAh-"
};

/***/ }),

/***/ "./components/main.js":
/*!****************************!*\
  !*** ./components/main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _launchPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./launchPanel */ "./components/launchPanel.js");
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters */ "./components/filters.js");
/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.module.css */ "./components/main.module.css");
/* harmony import */ var _main_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_main_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/shaun/react-project/space-x-launch/components/main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Header(props) {
  const {
    0: filterYear,
    1: setFilterYearClick
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: sucessfulLaunch,
    1: setFilterSucessfulLaunch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: sucessfulLanding,
    1: setFilterSucessfulLanding
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: launchData,
    1: setLaunchData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.launchData);

  let handleFilterYearClick = function (year) {
    if (filterYear === year) {
      setFilterYearClick('');
    } else {
      setFilterYearClick(year);
    }
  };

  let handleFilterSucessfulLaunch = function (filter) {
    if (sucessfulLaunch === filter) {
      setFilterSucessfulLaunch();
    } else {
      setFilterSucessfulLaunch(filter);
    }
  };

  let handleFilterSucessfulLanding = function (filter) {
    if (sucessfulLanding === filter) {
      setFilterSucessfulLanding();
    } else {
      setFilterSucessfulLanding(filter);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log('updating'); // https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014

    let generatedUrl = function () {
      let baseUrl = 'https://api.spaceXdata.com/v3/launches?limit=100';
      if (filterYear) baseUrl += '&launch_year=' + filterYear;
      if (typeof sucessfulLaunch === "boolean") baseUrl += '&launch_success=' + sucessfulLaunch;
      if (typeof sucessfulLanding === "boolean") baseUrl += '&land_success=' + sucessfulLanding;
      return baseUrl;
    };

    isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(generatedUrl()).then(response => response.json()).then(responseJson => setLaunchData(responseJson));
  }, [filterYear, sucessfulLaunch, sucessfulLanding]);
  console.log(filterYear);
  console.log(sucessfulLaunch);
  console.log(sucessfulLanding);
  return __jsx("div", {
    className: _main_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filters: {
      filterYear,
      sucessfulLaunch,
      sucessfulLanding
    },
    handleFilterYearClick: handleFilterYearClick,
    handleFilterSucessfulLaunch: handleFilterSucessfulLaunch,
    handleFilterSucessfulLanding: handleFilterSucessfulLanding,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx(_launchPanel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    launchData: launchData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/main.module.css":
/*!************************************!*\
  !*** ./components/main.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "main_main__2mURR"
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/main */ "./components/main.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
var _jsxFileName = "/home/shaun/react-project/space-x-launch/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // importing components




function Index({
  launchData
}) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "SpaceX Launch Record"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap",
    rel: "stylesheet",
    as: "font",
    crossOrigin: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    as: "font",
    crossOrigin: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  })), __jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx(_components_main__WEBPACK_IMPORTED_MODULE_4__["default"], {
    launchData: launchData || [],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }));
}
async function getStaticProps(context) {
  const response = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()('https://api.spaceXdata.com/v3/launches?limit=100');
  const jsonResponse = await response.json();
  return {
    props: {
      launchData: jsonResponse
    }
  };
}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shaun/react-project/space-x-launch/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map