/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* src/style.css */


/* GLOBAL */

* {
  /* outline: 1px solid lightyellow; */
  margin: 0;

}

#content {
  display: grid;
  grid-template-columns: 18rem auto;
  grid-template-rows: 3rem 100vh;
}

body {
  color: #E2E2E2;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 14px;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}




/* TOP BAR */
.top-bar {
  display: flex;
  align-items: center;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  background-color: #333333;
  position: fixed;
  width: 100%;
  height: 3rem;
  z-index: 1;
}

.top-bar-wrapper {
  display: flex;
  gap: .5rem;
  align-items: center;
  margin-left: 2rem;
}

.home-btn,
.menu-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, .0);
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: .25rem;
}

.home-btn:hover,
.menu-btn:hover {
  background-color: rgb(255, 255, 255, .20);
}



/* LEFT MENU */
.left-menu-container {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-color: #282828;
  position: fixed;
  top: 48px;
  height: calc(100% - 48px);
  width: 18rem;
}

.left-menu-wrapper {
  margin: 2.5rem 0 0 2rem;
}

.inbox-option {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.project-list li {
  margin-bottom: .5rem;
}

.inbox-option {
  color: #fff;
  padding: 10px 0 10px 8px;
  border-radius: 4px 0 0 4px;

  display: flex;
  align-items: center;
  gap: .5rem;
}

.inbox-option:hover {
  background-color: #333333;
}

.project-item {
  display: flex;
  align-items: center;
  gap: .25rem;
  padding: 10px 0 10px 8px;
  border-radius: 4px 0 0 4px;
}

.project-item:hover {
  background-color: #333333;
}

.add-project-btn {
  display: flex;
  gap: .5rem;
  padding: 8px;
  border-radius: 4px;
  border: none;
  background-color: rgb(255, 255, 255, .0);
  color: #fff;
  margin-left: 6px;
}

.add-project-btn:hover {
  background-color: rgb(255, 255, 255, .10);
}



/* MAIN */
.main-container {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: #1E1E1E;
}

.main-wrapper {
  max-width: 50rem;
  margin: 3rem auto;
  padding: 0 2rem;
}

h1 {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
}

.task-item {
  display: flex;
  gap: 1rem;
  padding: .75rem 0 .5rem;
  border-bottom: 1px solid rgb(58, 58, 58);
}

.checkbox-btn {
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid #989898;
  border-radius: 20px;
  background-color: rgb(0, 0, 0, .0);
}

.checkbox-btn:hover {
  background-color: #3b3b3b;
}

.checkmark-icon {
  position: absolute;
  top: -2px;
  right: -2px;
}

.checkbox-btn .checkmark-icon {
  visibility: hidden;
}

.checkbox-btn:hover .checkmark-icon {
  visibility: visible;
}

.add-task-btn {
  display: flex;
  gap: .5rem;
  padding: 8px;
  border-radius: 4px;
  border: none;
  background-color: rgb(255, 255, 255, .0);
  color: #fff;
  margin-top: .5rem;
}

.add-task-btn:hover {
  background-color: rgb(255, 255, 255, .10);
}

.title {
  margin-bottom: .5rem;
  line-height: 1.75;
}

.description {
  margin-bottom: .75rem;
  color: #8f8f8f;
  font-size: .75rem;
  font-weight: 300;
}

.due-date {
  font-size: .75rem;
  font-weight: 300;
}





/* FORM */

.form-container>form {
  display: flex;
  flex-direction: column;
}

form {
  padding: .5rem .5rem 0;
  border: 1px solid rgb(98, 98, 98);
  border-radius: 8px;
}

input,
textarea {
  height: 2rem;
  background-color: rgb(0, 0, 0, .0);
  border: none;
  color: #fff;
}

.form-options {
  margin: .5rem 0;
}

input:focus,
textarea:focus {
  outline: none;
}

.form-footer {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(98, 98, 98);
  padding: .75rem 0;
}

.cancel-btn,
.submit-btn {
  padding: .5rem 1rem;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 4px;
}

select {
  padding: .5rem;
  background-color: rgb(0, 0, 0, .0);
  color: white;
  border: 1px solid rgb(98, 98, 98);
  border-radius: 4px;
}

#due-date {
  padding: 0 .5rem;
  background-color: rgb(0, 0, 0, .0);
  color: white;
  border: 1px solid rgb(98, 98, 98);
  border-radius: 4px;
  margin-right: 4px;
}

input[type="date"] {
  filter: invert(45%) hue-rotate(180deg);
}

.submit-btn {
  background-color: #DD4B4A;
  margin-left: .25rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* src/style.css */\n\n\n/* GLOBAL */\n\n* {\n  /* outline: 1px solid lightyellow; */\n  margin: 0;\n\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 18rem auto;\n  grid-template-rows: 3rem 100vh;\n}\n\nbody {\n  color: #E2E2E2;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n\n\n\n/* TOP BAR */\n.top-bar {\n  display: flex;\n  align-items: center;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  background-color: #333333;\n  position: fixed;\n  width: 100%;\n  height: 3rem;\n  z-index: 1;\n}\n\n.top-bar-wrapper {\n  display: flex;\n  gap: .5rem;\n  align-items: center;\n  margin-left: 2rem;\n}\n\n.home-btn,\n.menu-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  padding: .25rem;\n}\n\n.home-btn:hover,\n.menu-btn:hover {\n  background-color: rgb(255, 255, 255, .20);\n}\n\n\n\n/* LEFT MENU */\n.left-menu-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background-color: #282828;\n  position: fixed;\n  top: 48px;\n  height: calc(100% - 48px);\n  width: 18rem;\n}\n\n.left-menu-wrapper {\n  margin: 2.5rem 0 0 2rem;\n}\n\n.inbox-option {\n  margin-bottom: 2rem;\n}\n\nh2 {\n  font-size: 1.25rem;\n  margin-bottom: 1rem;\n}\n\n.project-list li {\n  margin-bottom: .5rem;\n}\n\n.inbox-option {\n  color: #fff;\n  padding: 10px 0 10px 8px;\n  border-radius: 4px 0 0 4px;\n\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n}\n\n.inbox-option:hover {\n  background-color: #333333;\n}\n\n.project-item {\n  display: flex;\n  align-items: center;\n  gap: .25rem;\n  padding: 10px 0 10px 8px;\n  border-radius: 4px 0 0 4px;\n}\n\n.project-item:hover {\n  background-color: #333333;\n}\n\n.add-project-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-left: 6px;\n}\n\n.add-project-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n}\n\n\n\n/* MAIN */\n.main-container {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #1E1E1E;\n}\n\n.main-wrapper {\n  max-width: 50rem;\n  margin: 3rem auto;\n  padding: 0 2rem;\n}\n\nh1 {\n  font-size: 1.5rem;\n  margin: 2rem 0 1rem;\n}\n\n.task-item {\n  display: flex;\n  gap: 1rem;\n  padding: .75rem 0 .5rem;\n  border-bottom: 1px solid rgb(58, 58, 58);\n}\n\n.checkbox-btn {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #989898;\n  border-radius: 20px;\n  background-color: rgb(0, 0, 0, .0);\n}\n\n.checkbox-btn:hover {\n  background-color: #3b3b3b;\n}\n\n.checkmark-icon {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n}\n\n.checkbox-btn .checkmark-icon {\n  visibility: hidden;\n}\n\n.checkbox-btn:hover .checkmark-icon {\n  visibility: visible;\n}\n\n.add-task-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-top: .5rem;\n}\n\n.add-task-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n}\n\n.title {\n  margin-bottom: .5rem;\n  line-height: 1.75;\n}\n\n.description {\n  margin-bottom: .75rem;\n  color: #8f8f8f;\n  font-size: .75rem;\n  font-weight: 300;\n}\n\n.due-date {\n  font-size: .75rem;\n  font-weight: 300;\n}\n\n\n\n\n\n/* FORM */\n\n.form-container>form {\n  display: flex;\n  flex-direction: column;\n}\n\nform {\n  padding: .5rem .5rem 0;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 8px;\n}\n\ninput,\ntextarea {\n  height: 2rem;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  color: #fff;\n}\n\n.form-options {\n  margin: .5rem 0;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n.form-footer {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid rgb(98, 98, 98);\n  padding: .75rem 0;\n}\n\n.cancel-btn,\n.submit-btn {\n  padding: .5rem 1rem;\n  background-color: #333333;\n  color: white;\n  border: none;\n  border-radius: 4px;\n}\n\nselect {\n  padding: .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n}\n\n#due-date {\n  padding: 0 .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n  margin-right: 4px;\n}\n\ninput[type=\"date\"] {\n  filter: invert(45%) hue-rotate(180deg);\n}\n\n.submit-btn {\n  background-color: #DD4B4A;\n  margin-left: .25rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// src/index.js




// Set the data structure to store tasks
let myTasks = [
  { 
    category: 'Inbox',
    title: 'My first task', 
    description: 'Description of my first task', 
    dueDate: '2023-10-30', 
    priority: 'high', 
    completeStatus: 'not completed'
  }
]

// Function to create tasks
class Task {
  constructor(category, title, description, dueDate, priority, completeStatus) {
    this.category = category;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completeStatus = completeStatus;
  }
}

// Function to create tasks
function createTask(category, title, description, dueDate, priority, completeStatus) {
  
  const task = new Task(category, title, description, dueDate, priority, completeStatus);

  myTasks.push(task)

  // Update the UI
  displayTasks();
}

function displayTasks() {
  //
}


// Function to delete tasks
function deleteTask() {

}


// Function to mark tasks as complete
function toggleTaskCompletion() {

}


// Function to edit a task
function editTask() {

}


// Function to change priority of a task
function setPriority() {

}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8seUZBQXlGLFlBQVksS0FBSyxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksVUFBVSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxTQUFTLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcs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O0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRXFCOzs7QUFHckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogc3JjL3N0eWxlLmNzcyAqL1xuXG5cbi8qIEdMT0JBTCAqL1xuXG4qIHtcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGxpZ2h0eWVsbG93OyAqL1xuICBtYXJnaW46IDA7XG5cbn1cblxuI2NvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4cmVtIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxMDB2aDtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiAjRTJFMkUyO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuXG5cblxuLyogVE9QIEJBUiAqL1xuLnRvcC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcmVtO1xuICB6LWluZGV4OiAxO1xufVxuXG4udG9wLWJhci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG5cbi5ob21lLWJ0bixcbi5tZW51LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IC4yNXJlbTtcbn1cblxuLmhvbWUtYnRuOmhvdmVyLFxuLm1lbnUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4yMCk7XG59XG5cblxuXG4vKiBMRUZUIE1FTlUgKi9cbi5sZWZ0LW1lbnUtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0OHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xuICB3aWR0aDogMThyZW07XG59XG5cbi5sZWZ0LW1lbnUtd3JhcHBlciB7XG4gIG1hcmdpbjogMi41cmVtIDAgMCAycmVtO1xufVxuXG4uaW5ib3gtb3B0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5wcm9qZWN0LWxpc3QgbGkge1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLmluYm94LW9wdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogLjVyZW07XG59XG5cbi5pbmJveC1vcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xufVxuXG4ucHJvamVjdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAuMjVyZW07XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG59XG5cbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAuNXJlbTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4wKTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5hZGQtcHJvamVjdC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcbn1cblxuXG5cbi8qIE1BSU4gKi9cbi5tYWluLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgbWFyZ2luOiAzcmVtIGF1dG87XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luOiAycmVtIDAgMXJlbTtcbn1cblxuLnRhc2staXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogLjc1cmVtIDAgLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTgsIDU4LCA1OCk7XG59XG5cbi5jaGVja2JveC1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5ODk4OTg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG59XG5cbi5jaGVja2JveC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2IzYjNiO1xufVxuXG4uY2hlY2ttYXJrLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTJweDtcbiAgcmlnaHQ6IC0ycHg7XG59XG5cbi5jaGVja2JveC1idG4gLmNoZWNrbWFyay1pY29uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2hlY2tib3gtYnRuOmhvdmVyIC5jaGVja21hcmstaWNvbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5hZGQtdGFzay1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IC41cmVtO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjApO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogLjVyZW07XG59XG5cbi5hZGQtdGFzay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XG4gIGNvbG9yOiAjOGY4ZjhmO1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmR1ZS1kYXRlIHtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cblxuXG5cblxuLyogRk9STSAqL1xuXG4uZm9ybS1jb250YWluZXI+Zm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZvcm0tb3B0aW9ucyB7XG4gIG1hcmdpbjogLjVyZW0gMDtcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcbiAgcGFkZGluZzogLjc1cmVtIDA7XG59XG5cbi5jYW5jZWwtYnRuLFxuLnN1Ym1pdC1idG4ge1xuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5zZWxlY3Qge1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI2R1ZS1kYXRlIHtcbiAgcGFkZGluZzogMCAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgZmlsdGVyOiBpbnZlcnQoNDUlKSBodWUtcm90YXRlKDE4MGRlZyk7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEI0QTtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCOzs7QUFHbEIsV0FBVzs7QUFFWDtFQUNFLG9DQUFvQztFQUNwQyxTQUFTOztBQUVYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbURBQW1EO0VBQ25ELGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7Ozs7QUFLQSxZQUFZO0FBQ1o7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixX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O0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHNyYy9zdHlsZS5jc3MgKi9cXG5cXG5cXG4vKiBHTE9CQUwgKi9cXG5cXG4qIHtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodHllbGxvdzsgKi9cXG4gIG1hcmdpbjogMDtcXG5cXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMThyZW0gYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogI0UyRTJFMjtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxudWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuXFxuXFxuXFxuLyogVE9QIEJBUiAqL1xcbi50b3AtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnRvcC1iYXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuLmhvbWUtYnRuLFxcbi5tZW51LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4uaG9tZS1idG46aG92ZXIsXFxuLm1lbnUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xcbn1cXG5cXG5cXG5cXG4vKiBMRUZUIE1FTlUgKi9cXG4ubGVmdC1tZW51LWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA0OHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcXG4gIHdpZHRoOiAxOHJlbTtcXG59XFxuXFxuLmxlZnQtbWVudS13cmFwcGVyIHtcXG4gIG1hcmdpbjogMi41cmVtIDAgMCAycmVtO1xcbn1cXG5cXG4uaW5ib3gtb3B0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWxpc3QgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbi5pbmJveC1vcHRpb24ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLmluYm94LW9wdGlvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAuMjVyZW07XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IC41cmVtO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4wKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLWxlZnQ6IDZweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcXG59XFxuXFxuXFxuXFxuLyogTUFJTiAqL1xcbi5tYWluLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xcbn1cXG5cXG4ubWFpbi13cmFwcGVyIHtcXG4gIG1heC13aWR0aDogNTByZW07XFxuICBtYXJnaW46IDNyZW0gYXV0bztcXG4gIHBhZGRpbmc6IDAgMnJlbTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW46IDJyZW0gMCAxcmVtO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAuNzVyZW0gMCAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTgsIDU4LCA1OCk7XFxufVxcblxcbi5jaGVja2JveC1idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTg5ODk4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcXG59XFxuXFxuLmNoZWNrbWFyay1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTJweDtcXG4gIHJpZ2h0OiAtMnB4O1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuIC5jaGVja21hcmstaWNvbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIgLmNoZWNrbWFyay1pY29uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogLjVyZW07XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjApO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XFxuICBjb2xvcjogIzhmOGY4ZjtcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRk9STSAqL1xcblxcbi5mb3JtLWNvbnRhaW5lcj5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBhZGRpbmc6IC41cmVtIC41cmVtIDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmZvcm0tb3B0aW9ucyB7XFxuICBtYXJnaW46IC41cmVtIDA7XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mb3JtLWZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcXG4gIHBhZGRpbmc6IC43NXJlbSAwO1xcbn1cXG5cXG4uY2FuY2VsLWJ0bixcXG4uc3VibWl0LWJ0biB7XFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuI2R1ZS1kYXRlIHtcXG4gIHBhZGRpbmc6IDAgLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICBmaWx0ZXI6IGludmVydCg0NSUpIGh1ZS1yb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEI0QTtcXG4gIG1hcmdpbi1sZWZ0OiAuMjVyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBzcmMvaW5kZXguanNcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuLy8gU2V0IHRoZSBkYXRhIHN0cnVjdHVyZSB0byBzdG9yZSB0YXNrc1xubGV0IG15VGFza3MgPSBbXG4gIHsgXG4gICAgY2F0ZWdvcnk6ICdJbmJveCcsXG4gICAgdGl0bGU6ICdNeSBmaXJzdCB0YXNrJywgXG4gICAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiBvZiBteSBmaXJzdCB0YXNrJywgXG4gICAgZHVlRGF0ZTogJzIwMjMtMTAtMzAnLCBcbiAgICBwcmlvcml0eTogJ2hpZ2gnLCBcbiAgICBjb21wbGV0ZVN0YXR1czogJ25vdCBjb21wbGV0ZWQnXG4gIH1cbl1cblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIHRhc2tzXG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoY2F0ZWdvcnksIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlU3RhdHVzKSB7XG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZVN0YXR1cyA9IGNvbXBsZXRlU3RhdHVzO1xuICB9XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSB0YXNrc1xuZnVuY3Rpb24gY3JlYXRlVGFzayhjYXRlZ29yeSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVTdGF0dXMpIHtcbiAgXG4gIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhjYXRlZ29yeSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVTdGF0dXMpO1xuXG4gIG15VGFza3MucHVzaCh0YXNrKVxuXG4gIC8vIFVwZGF0ZSB0aGUgVUlcbiAgZGlzcGxheVRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcygpIHtcbiAgLy9cbn1cblxuXG4vLyBGdW5jdGlvbiB0byBkZWxldGUgdGFza3NcbmZ1bmN0aW9uIGRlbGV0ZVRhc2soKSB7XG5cbn1cblxuXG4vLyBGdW5jdGlvbiB0byBtYXJrIHRhc2tzIGFzIGNvbXBsZXRlXG5mdW5jdGlvbiB0b2dnbGVUYXNrQ29tcGxldGlvbigpIHtcblxufVxuXG5cbi8vIEZ1bmN0aW9uIHRvIGVkaXQgYSB0YXNrXG5mdW5jdGlvbiBlZGl0VGFzaygpIHtcblxufVxuXG5cbi8vIEZ1bmN0aW9uIHRvIGNoYW5nZSBwcmlvcml0eSBvZiBhIHRhc2tcbmZ1bmN0aW9uIHNldFByaW9yaXR5KCkge1xuXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=