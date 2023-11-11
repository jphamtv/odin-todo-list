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

#grid-container {
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

.btn {
  padding: 8px;
  border-radius: 4px;
  border: none;
  color: #fff;
  background-color: rgb(255, 255, 255, .10);
}

.btn:hover{
  background-color: rgb(255, 255, 255, .20);
  cursor: pointer;
}

.current {
  background-color: #333333;
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
  cursor: pointer;
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
  margin: 2.5rem 1.5rem 0 2rem;
}

.inbox-option {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.inbox-option {
  color: #fff;
  padding: 10px 0 10px 8px;
  border-radius: 6px;
  
  display: flex;
  align-items: center;
  gap: .5rem;
}

.inbox-option:hover {
  background-color: #333333;
  cursor: pointer;
}

.projects-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}

#project-list li {
  margin-bottom: .5rem;
}

.project-item {
  display: flex;
  align-items: center;
  gap: .25rem;
  padding: 10px 0 10px 8px;
  border-radius: 6px;
}

.project-item:hover {
  background-color: #333333;
  cursor: pointer;
}

.add-project-btn {
  display: flex;
  gap: .5rem;
  padding: 5px 8px;
  border-radius: 4px;
  border: none;
  background-color: rgb(255, 255, 255, .0);
  color: #fff;
  margin-left: 6px;
}

.add-project-btn:hover {
  background-color: rgb(255, 255, 255, .10);
  cursor: pointer;
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
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0 1rem;
}


.toggle-completed-tasks-btn {
  display: block;
  padding: 8px;
  border-radius: 4px;
  border: none;
  color: #fff;
  background-color: rgb(255, 255, 255, .10);
}

.toggle-completed-tasks-btn:hover{
  background-color: rgb(255, 255, 255, .20);
  cursor: pointer;
}

.task-item {
  display: flex;
  gap: 1rem;
  padding: .75rem 0 .5rem;
  border-bottom: 1px solid rgb(58, 58, 58);
}

.task-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.task-title-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  cursor: pointer;
}

.checkmark-icon {
  position: absolute;
  top: -3px;
  right: -3px;
}

.checkbox-btn .checkmark-icon {
  visibility: hidden;
}

.checkbox-btn:hover .checkmark-icon {
  visibility: visible;
}

.checkbox-btn.checked {
  background-color: #989898;
  visibility: visible;
}

.checkmark-icon.checked {
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
  cursor: pointer;
}

.title {
  margin-bottom: .5rem;
  line-height: 1.75;
}

.title.checked {
  color: #7f7f7f;
  text-decoration: line-through;
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
  margin-bottom: .5rem;
}





/* FORM */

.form-container {
  display: none;
}

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
  cursor: pointer;
}

.submit-btn {
  background-color: #DD4B4A;
  margin-left: .25rem;
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




/* MODAL */

dialog {
  background-color: #1E1E1E;
  border: none;
  border-radius: 4px;
  margin: 10rem auto;
}

#project-title-input {
  height: 28px;
  margin-bottom: 1rem;
  border: 1px solid #3b3b3b;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

#create-project-form {
  border: none;
  width: 300px;
}

.add-project-modal-title {
  color: #fff;
}

.modal-btns {
  display: flex;
  justify-content: flex-end;
  gap: .5rem;
  padding-top: 1rem;
}

.close-modal-btn,
.add-project-to-list {
  padding: .5rem 1rem;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 4px;
}

.add-project-to-list {
  background-color: #DD4B4A;
  margin-left: .25rem;
}

::backdrop {
  background-color: black;
  opacity: 0.5;
}




/* UPDATE TASK MODAL */

.form-container-modal {
  height: 200px;
  width: 600px;
}

.form-container-modal>form {
  display: flex;
  flex-direction: column;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* src/style.css */\n\n\n/* GLOBAL */\n\n* {\n  /* outline: 1px solid lightyellow; */\n  margin: 0;\n\n}\n\n#grid-container {\n  display: grid;\n  grid-template-columns: 18rem auto;\n  grid-template-rows: 3rem 100vh;\n}\n\nbody {\n  color: #E2E2E2;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.btn {\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background-color: rgb(255, 255, 255, .10);\n}\n\n.btn:hover{\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\n.current {\n  background-color: #333333;\n}\n\n\n/* TOP BAR */\n.top-bar {\n  display: flex;\n  align-items: center;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  background-color: #333333;\n  position: fixed;\n  width: 100%;\n  height: 3rem;\n  z-index: 1;\n}\n\n.top-bar-wrapper {\n  display: flex;\n  gap: .5rem;\n  align-items: center;\n  margin-left: 2rem;\n}\n\n.home-btn,\n.menu-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  padding: .25rem;\n}\n\n.home-btn:hover,\n.menu-btn:hover {\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\n\n\n/* LEFT MENU */\n.left-menu-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background-color: #282828;\n  position: fixed;\n  top: 48px;\n  height: calc(100% - 48px);\n  width: 18rem;\n}\n\n.left-menu-wrapper {\n  margin: 2.5rem 1.5rem 0 2rem;\n}\n\n.inbox-option {\n  margin-bottom: 2rem;\n}\n\nh2 {\n  font-size: 1.25rem;\n  margin-bottom: 1rem;\n}\n\n.inbox-option {\n  color: #fff;\n  padding: 10px 0 10px 8px;\n  border-radius: 6px;\n  \n  display: flex;\n  align-items: center;\n  gap: .5rem;\n}\n\n.inbox-option:hover {\n  background-color: #333333;\n  cursor: pointer;\n}\n\n.projects-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n}\n\n#project-list li {\n  margin-bottom: .5rem;\n}\n\n.project-item {\n  display: flex;\n  align-items: center;\n  gap: .25rem;\n  padding: 10px 0 10px 8px;\n  border-radius: 6px;\n}\n\n.project-item:hover {\n  background-color: #333333;\n  cursor: pointer;\n}\n\n.add-project-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 5px 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-left: 6px;\n}\n\n.add-project-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n  cursor: pointer;\n}\n\n\n\n/* MAIN */\n.main-container {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #1E1E1E;\n}\n\n.main-wrapper {\n  max-width: 50rem;\n  margin: 3rem auto;\n  padding: 0 2rem;\n}\n\nh1 {\n  font-size: 1.5rem;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2rem 0 1rem;\n}\n\n\n.toggle-completed-tasks-btn {\n  display: block;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background-color: rgb(255, 255, 255, .10);\n}\n\n.toggle-completed-tasks-btn:hover{\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\n.task-item {\n  display: flex;\n  gap: 1rem;\n  padding: .75rem 0 .5rem;\n  border-bottom: 1px solid rgb(58, 58, 58);\n}\n\n.task-content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.task-title-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox-btn {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #989898;\n  border-radius: 20px;\n  background-color: rgb(0, 0, 0, .0);\n}\n\n.checkbox-btn:hover {\n  background-color: #3b3b3b;\n  cursor: pointer;\n}\n\n.checkmark-icon {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n}\n\n.checkbox-btn .checkmark-icon {\n  visibility: hidden;\n}\n\n.checkbox-btn:hover .checkmark-icon {\n  visibility: visible;\n}\n\n.checkbox-btn.checked {\n  background-color: #989898;\n  visibility: visible;\n}\n\n.checkmark-icon.checked {\n  visibility: visible;\n}\n\n.add-task-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-top: .5rem;\n}\n\n.add-task-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n  cursor: pointer;\n}\n\n.title {\n  margin-bottom: .5rem;\n  line-height: 1.75;\n}\n\n.title.checked {\n  color: #7f7f7f;\n  text-decoration: line-through;\n}\n\n.description {\n  margin-bottom: .75rem;\n  color: #8f8f8f;\n  font-size: .75rem;\n  font-weight: 300;\n}\n\n.due-date {\n  font-size: .75rem;\n  font-weight: 300;\n  margin-bottom: .5rem;\n}\n\n\n\n\n\n/* FORM */\n\n.form-container {\n  display: none;\n}\n\n.form-container>form {\n  display: flex;\n  flex-direction: column;\n}\n\nform {\n  padding: .5rem .5rem 0;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 8px;\n}\n\ninput,\ntextarea {\n  height: 2rem;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  color: #fff;\n}\n\n.form-options {\n  margin: .5rem 0;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n.form-footer {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid rgb(98, 98, 98);\n  padding: .75rem 0;\n}\n\n.cancel-btn,\n.submit-btn {\n  padding: .5rem 1rem;\n  background-color: #333333;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.submit-btn {\n  background-color: #DD4B4A;\n  margin-left: .25rem;\n}\n\nselect {\n  padding: .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n}\n\n#due-date {\n  padding: 0 .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n  margin-right: 4px;\n}\n\ninput[type=\"date\"] {\n  filter: invert(45%) hue-rotate(180deg);\n}\n\n\n\n\n/* MODAL */\n\ndialog {\n  background-color: #1E1E1E;\n  border: none;\n  border-radius: 4px;\n  margin: 10rem auto;\n}\n\n#project-title-input {\n  height: 28px;\n  margin-bottom: 1rem;\n  border: 1px solid #3b3b3b;\n  border-radius: 4px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n#create-project-form {\n  border: none;\n  width: 300px;\n}\n\n.add-project-modal-title {\n  color: #fff;\n}\n\n.modal-btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: .5rem;\n  padding-top: 1rem;\n}\n\n.close-modal-btn,\n.add-project-to-list {\n  padding: .5rem 1rem;\n  background-color: #333333;\n  color: white;\n  border: none;\n  border-radius: 4px;\n}\n\n.add-project-to-list {\n  background-color: #DD4B4A;\n  margin-left: .25rem;\n}\n\n::backdrop {\n  background-color: black;\n  opacity: 0.5;\n}\n\n\n\n\n/* UPDATE TASK MODAL */\n\n.form-container-modal {\n  height: 200px;\n  width: 600px;\n}\n\n.form-container-modal>form {\n  display: flex;\n  flex-direction: column;\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/taskService.js":
/*!****************************!*\
  !*** ./src/taskService.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categories: () => (/* binding */ categories),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   getTaskDetails: () => (/* binding */ getTaskDetails),
/* harmony export */   setPriorityLevel: () => (/* binding */ setPriorityLevel),
/* harmony export */   toggleTaskComplete: () => (/* binding */ toggleTaskComplete)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _taskView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskView.js */ "./src/taskView.js");
// src/taskService.js




// Data structure to store categories and tasks
let categories = [
  {
    id: 'inbox',
    title: 'Inbox',
    tasks: [
      {
        id: '1',
        category: 'inbox',
        title: 'My first task', 
        description: 'Description of my first task', 
        dueDate: '10-31-2023', 
        priority: 'High', 
        isComplete: false,
      },
      { 
        id: '2',
        category: 'inbox',
        title: 'My second task', 
        description: null, 
        dueDate: null, 
        priority: null, 
        isComplete: false,
      },
      { 
        id: '3',
        category: 'Project A',
        title: 'My third task', 
        description: null, 
        dueDate: null, 
        priority: null, 
        isComplete: false,
      },
    ]
  },
  {
    id: 'project-1',
    title: 'Software Development',
    tasks: []
  },
  {
    id: 'project-2',
    title: 'Personal Tasks',
    tasks: [
      { 
        id: '3',
        title: 'My third task', 
        description: null, 
        dueDate: null, 
        priority: null, 
        isComplete: false,
      },
    ]
  },
]

function updateLocalStorage(categories) {
  localStorage.setItem('taskCategories', JSON.stringify(categories));
}

function getStoredTasks() {
  const storedTasks = localStorage.getItem('taskCategories');
  if (storedTasks) {
   return JSON.parse(storedTasks);
  }
  return [];// Return empty array if nothing in localStorage to avoid error
}

function createCategory(title) {
  const newCategory = {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    title: title,
    tasks: []
  };
  categories.push(newCategory);
  updateLocalStorage(categories);
}

function createTask(categoryId, title, description = null, dueDate = null, priority = 'priority-4', isComplete = false) {
  const newTask = {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    isComplete: isComplete,
  };

  const category = categories.find(category => category.id === categoryId);
  if (category) {
    categories.tasks.push(newTask);
    updateLocalStorage(categories);  
  } else {
    console.error('Category not found');
  }
}

function deleteCategory(categoryId) {
  const updatedCategories = categories.filter(category => category.id !== categoryId);
  categories = updatedCategories;
  updateLocalStorage(categories);
}

function deleteTaskFromCategory(categoryId, taskId) {

}


// // Set the data structure to store tasks
// export let myTasks = [
//   { 
//     id: '1',
//     category: 'inbox',
//     title: 'My first task', 
//     description: 'Description of my first task', 
//     dueDate: '10-31-2023', 
//     priority: 'High', 
//     isComplete: false,
//   },
//   { 
//     id: '2',
//     category: 'inbox',
//     title: 'My second task', 
//     description: null, 
//     dueDate: null, 
//     priority: null, 
//     isComplete: false,
//   },
// ]

// export let myProjects = [
//   {
//     id: '1',
//     title: 'Software Development'
//   },
//   {
//     id: '2',
//     title: 'Personal Tasks'
//   },
// ]


// export function updateMyTasks(newTasks) {
//   // Clear out the tasks
//   myTasks.length = 0;

//   // Add the new tasks
//   newTasks.forEach(task => myTasks.push(task));
// }


// export function saveTasksToLocalStorage(myTasks) {
//   localStorage.setItem('tasks', JSON.stringify(myTasks));
// }


// export function getTasksFromLocalStorage() {
//   const storedTasks = localStorage.getItem('tasks');
//   if (storedTasks) {
//     return JSON.parse(storedTasks);
//   }
//   return []; // Return empty array if nothing in localStorage to avoid error
// }


// export function updateMyProjects(newProjects) {
//   // Clear out the tasks
//   myProjects.length = 0;

//   // Add the new tasks
//   newProjects.forEach(project => myProjects.push(project));
// }


// export function saveProjectsToLocalStorage(myProjects) {
//   localStorage.setItem('projects', JSON.stringify(myProjects));
// }


// export function getProjectsFromLocalStorage() {
//   const storedProjects = localStorage.getItem('projects');
//   if (storedProjects) {
//     return JSON.parse(storedProjects);
//   }
//   return []; // Return empty array if nothing in localStorage to avoid error
// }



// // Function to create projects
// class Project {
//   constructor(id, title) {
//     this.id = id;
//     this.title = title;
//   }
// }

// // Function to create tasks
// class Task {
//   constructor(id, category, title, description, dueDate, priority, isComplete = false) {
//     this.id = id;
//     this.category = category;
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
//     this.isComplete = isComplete;
//   }
// }

/* CREATE LOGIC */

// export function createProject(title) {
//   // Generate unique ID for the project
//   const id = uuidv4();

//   // Create a new task using the Project class
//   const project = new Project(id, title);

//   myProjects.push(project)
//   saveProjectsToLocalStorage(myProjects);

//   // Update the UI
//   displayProjects(myProjects);
// }


// export function createTask(category, title, description, dueDate, priority, isComplete) {
//   // Generate unique ID for the task
//   const id = uuidv4();

//   // Create a new task using the Task class
//   const task = new Task(id, category, title, description, dueDate, priority, isComplete);

//   myTasks.push(task)
//   saveTasksToLocalStorage(myTasks);

//   // Update the UI
//   displayIncompleteTasks(myTasks);

//   // Clear the form fields
//   clearFormFields();
// }


/* DELETE LOGIC */

// Function to delete tasks by their unique ID
function deleteTask(taskId) {
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  saveTasksToLocalStorage(updatedTasks);
  updateMyTasks(updatedTasks);

  if (!_taskView_js__WEBPACK_IMPORTED_MODULE_0__.showCompletedTasks) {
    (0,_taskView_js__WEBPACK_IMPORTED_MODULE_0__.displayIncompleteTasks)(updatedTasks);
  } else {
    (0,_taskView_js__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks)(updatedTasks);
  }
}


function toggleTaskComplete(taskId) {
  // Operate on the latest tasks array from localStorage
  const tasks = getTasksFromLocalStorage();
  const taskIndex = tasks.findIndex(task => task.id === taskId);

  if (taskIndex !== -1 && tasks[taskIndex].isComplete === false) {
    tasks[taskIndex].isComplete = true;  
    saveTasksToLocalStorage(tasks);
    (0,_taskView_js__WEBPACK_IMPORTED_MODULE_0__.displayIncompleteTasks)(tasks);

  } else if (taskIndex !== -1 && tasks[taskIndex].isComplete === true) {
    tasks[taskIndex].isComplete = false;
    saveTasksToLocalStorage(tasks);
    (0,_taskView_js__WEBPACK_IMPORTED_MODULE_0__.displayAllTasks)(tasks);
  }  
    else {
    console.error('Task not found');
  }  
}

function getTaskDetails(taskId) {
  const tasks = getTasksFromLocalStorage();
  const task = tasks.find(task => task.id === taskId);
  return task;
}

// Function to update a task
function updateTaskDetails() {

}

function setPriorityLevel(taskId, selectedPriority) {
  const selectedTask = myTasks.find(task => task.id === taskId);

  // Update the priority level of the selected task
  if (selectedTask) {
    selectedTask.priority = selectedPriority;
  } else {
    console.error('Task not found');
  }

  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_0__.displayIncompleteTasks)();
}

/***/ }),

/***/ "./src/taskView.js":
/*!*************************!*\
  !*** ./src/taskView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachCheckBoxButtonListeners: () => (/* binding */ attachCheckBoxButtonListeners),
/* harmony export */   attachDeleteButtonListeners: () => (/* binding */ attachDeleteButtonListeners),
/* harmony export */   clearFormFields: () => (/* binding */ clearFormFields),
/* harmony export */   closeCreateTaskForm: () => (/* binding */ closeCreateTaskForm),
/* harmony export */   displayAllTasks: () => (/* binding */ displayAllTasks),
/* harmony export */   displayIncompleteTasks: () => (/* binding */ displayIncompleteTasks),
/* harmony export */   displayProjects: () => (/* binding */ displayProjects),
/* harmony export */   handleCreateProjectFormSubmission: () => (/* binding */ handleCreateProjectFormSubmission),
/* harmony export */   handleCreateTaskFormSubmission: () => (/* binding */ handleCreateTaskFormSubmission),
/* harmony export */   handleToggleCompletedTasksButton: () => (/* binding */ handleToggleCompletedTasksButton),
/* harmony export */   showCompletedTasks: () => (/* binding */ showCompletedTasks),
/* harmony export */   showCreateTaskForm: () => (/* binding */ showCreateTaskForm),
/* harmony export */   showEditTaskForm: () => (/* binding */ showEditTaskForm)
/* harmony export */ });
/* harmony import */ var _taskService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskService.js */ "./src/taskService.js");
// src/taskView.js



function displayProjects(projects) {
  // Get a reference to the project list element
  const projectList = document.querySelector('#project-list');
  
  // Clear the project list
  projectList.innerHTML = '';
  
  // Loop through the tasks and update the list
  projects.forEach(project => {
    const projectItem = document.createElement('li');
    
    // Set the index number to the data-task-id attribute
    projectItem.dataset.projectId = project.id;
    
    // HTML structure of the new task item
    projectItem.innerHTML = `
    <div class="project-item">
      <svg width="24" height="24" viewBox="0 0 24 24" class="project_icon" style="color: rgb(184, 184, 184);"><path d="M12 7a5 5 0 110 10 5 5 0 010-10z" fill="currentColor"></path></svg>
      <div>${project.title}</div>
    </div>
    `;
    
    // Add the new task item
    projectList.appendChild(projectItem);    
  });
}


function displayIncompleteTasks(tasks) {
  // Get a reference to the task list element
  const taskList = document.querySelector('#task-list');
  
  // Clear the task list
  taskList.innerHTML = '';
  
  // Loop through the tasks and update the list
  tasks.forEach(task => {
    if (!task.isComplete) {
      const taskItem = document.createElement('li');
      
      // Add task-item class attribute
      taskItem.classList.add('task-item');
      
      // Set the index number to the data-task-id attribute
      taskItem.dataset.taskId = task.id;
      
      // HTML structure of the new task item
      taskItem.innerHTML = `
      <div>
        <button type="button" class="checkbox-btn">
        <svg class="checkmark-icon" data-task-id="${task.id}" width="24" height="24"><path fill="#fff" d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path></svg>
        </button>
      </div>
      <div class="task-content">
        <div class="task-title-wrapper">
          <div class="title">${task.title}</div>
          <div>
            <button class="edit-btn btn" data-task-id="${task.id}">Edit</button>
            <button class="delete-btn btn" data-task-id="${task.id}">Delete</button>
          </div>
        </div>
        ${task.description ? `<div class="description">${task.description}</div>` : ''}
        ${task.dueDate ? `<div class="due-date">${task.dueDate}</div>` : ''}
      </div>
      `;
      
      // Add the new task item
      taskList.appendChild(taskItem);    
    }
  });
}


function displayAllTasks(tasks) {
  // Get a reference to the task list element
  const taskList = document.querySelector('#task-list');
  
  // Clear the task list
  taskList.innerHTML = '';
  
  // Helper function to create task item elements
  const createTaskItem = (task) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.dataset.taskId = task.id;
    taskItem.innerHTML = `
      <div>
        <button type="button" class="checkbox-btn${task.isComplete ? ' checked' : ''}">
        <svg class="checkmark-icon${task.isComplete ? ' checked' : ''}" data-task-id="${task.id}" width="24" height="24"><path d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path></svg>
        </button>
      </div>
      <div class="task-content">
        <div class="task-title-wrapper">
          <div class="title${task.isComplete ? ' checked' : ''}">${task.title}</div>
          <div>
            ${!task.isComplete ? `<button class="edit-btn" data-task-id="${task.id}">Edit</button>` : ''}
            <button class="delete-btn" data-task-id="${task.id}">Delete</button>
          </div>
        </div>
        ${task.description ? `<div class="description">${task.description}</div>` : ''}
        ${task.dueDate ? `<div class="due-date">${task.dueDate}</div>` : ''}
      </div>
    `;
    return taskItem;
  };

  // Display incomplete tasks
  tasks.filter(task => !task.isComplete).forEach(task => {
    taskList.appendChild(createTaskItem(task));
  });

  // Display completed tasks
  tasks.filter(task => task.isComplete).forEach(task => {
    taskList.appendChild(createTaskItem(task));
  });
}


function handleCreateTaskFormSubmission() {
  document.querySelector('#create-task').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get values from the form fields
    const category = document.querySelector('#project').value;
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#due-date').value;
    const priority = document.querySelector('#priority').value;
    
    // Create a new task object and add it to the database
    (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(category, title, description, dueDate, priority);
    console.log('clicked');
    console.log(title);

    // Refocus the title input field
    document.querySelector('#title').focus(); 
  });
}


function handleCreateProjectFormSubmission() {
  document.querySelector('#create-project-form').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get values from the form fields
    const title = document.querySelector('#project-title-input').value;
  
    // Create a new project and add it to the database
    (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(title);

    // Clear fields and close the modal
    clearFormFields();
    projectDialog.close();
  });
}

function clearFormFields() {
  document.querySelector('#create-task').reset();
  document.querySelector('#create-project-form').reset();
  document.querySelector('#edit-task').reset();
}


function showCreateTaskForm() {
  document.addEventListener('DOMContentLoaded', () => {
    const createTaskFormElement = document.querySelector('.form-container');
    const addTaskButton = document.querySelector('.add-task-btn');
    addTaskButton.addEventListener('click', () => {
      createTaskFormElement.style.display = 'block';
      document.querySelector('#title').focus(); 
      addTaskButton.style.display = 'none';
    });  
  });
}

// Change behavior of the return key to programmatically click the 'Add task' btn.
document.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); 

    // Check if add task form is open and visible
    const addTaskForm = document.querySelector('.form-container');
    const addTaskSubmitButton = document.querySelector('.submit-btn');
    
    // Check if the add project modal is open and visible
    const addProjectModal = document.querySelector('#add-project-modal');
    const addProjectSubmitButton = document.querySelector('.add-project-to-list');

    if (getComputedStyle(addTaskForm).display !== 'none') {
      addTaskSubmitButton.click();
    } else if (getComputedStyle(addProjectModal).display !== 'none') {
      addProjectSubmitButton.click();
      addProjectModal.close();
    }
  }
});


function closeCreateTaskForm() {
  document.addEventListener('DOMContentLoaded', () => {
    const createTaskFormElement = document.querySelector('.form-container');
    const addTaskButton = document.querySelector('.add-task-btn');
    document.querySelector('.cancel-btn').addEventListener('click', (event) => {
      event.preventDefault();
      clearFormFields();
      createTaskFormElement.style.display = 'none';
      addTaskButton.style.display = 'flex';
    });  
  });
}


function attachCheckBoxButtonListeners() {
  const taskListElement = document.querySelector('#task-list');
  taskListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkmark-icon')) {
      
      // Get the task ID 
      const taskId = event.target.dataset.taskId;

      // Update isComplete property
      (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.toggleTaskComplete)(taskId);
    }
  });
}


function attachDeleteButtonListeners() {
  const taskListElement = document.querySelector('#task-list');
  taskListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
      
      // Get the task ID 
      const taskId = event.target.dataset.taskId;

      // Update isComplete property
      (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(taskId);
    }
  });
}


// Single button for toggling the display of completed tasks
const toggleCompletedTasksBtn = document.querySelector('.toggle-completed-tasks-btn');

// Initial state for whether completed tasks are shown
let showCompletedTasks = false;

function handleToggleCompletedTasksButton() {
  toggleCompletedTasksBtn.addEventListener('click', () => {
    const tasks = (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.getTasksFromLocalStorage)();
    showCompletedTasks = !showCompletedTasks;

    if (showCompletedTasks) {
      displayAllTasks(tasks);
      toggleCompletedTasksBtn.textContent = 'Hide completed tasks';
    } else {
      displayIncompleteTasks(tasks);
      toggleCompletedTasksBtn.textContent = 'Show completed tasks';
    }
  });
}


// Attach event listeners to show and close project modal
const projectDialog = document.querySelector('#add-project-modal');
const showAddProjectModalButton = document.querySelector('.add-project-btn');
const closeProjectModalButton = document.querySelector('.close-modal-btn');

showAddProjectModalButton.addEventListener('click', () => {
  projectDialog.showModal();
});

closeProjectModalButton.addEventListener('click', (event) => {
  event.preventDefault();
  clearFormFields();
  projectDialog.close();
});


const editTaskDialog = document.querySelector('#edit-task-modal');
const closeEditTaskModalButton = document.querySelector('.cancel-edit-btn');

closeEditTaskModalButton.addEventListener('click', (event) => {
  event.preventDefault();
  editTaskDialog.close();
});


function showEditTaskForm() {
  document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.querySelector('#task-list');
    taskList.addEventListener('click', (event) => {
      if (event.target.classList.contains('edit-btn')) {
        editTaskDialog.showModal();    

        // Get the task ID 
        const taskId = event.target.dataset.taskId;
        console.log(taskId);
        displayTaskDetails(taskId);
      }
    });  
  });
}

function displayTaskDetails(taskId) {
  // Get a reference to the task list element
  const editTaskForm = document.querySelector('#edit-task');

  const task = (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.getTaskDetails)(taskId);
  console.log(task);
  
  // Clear the task list
  editTaskForm.innerHTML = `
    <input type="text" id="edit-title" placeholder="Title" value="${task.title}" />
    <textarea id="edit-description" placeholder="Description">${task.description}</textarea>
    <div class="form-options">
      <input type="date" id="due-date" value="${task.dueDate}" />
      <select name="priority" id="priority">
        <option value="priority-1">Priority 1</option>
        <option value="priority-2">Priority 2</option>
        <option value="priority-3">Priority 3</option>
        <option value="priority-4" selected>Priority 4</option>
      </select>
      <select name="project" id="project">
        <option value="inbox" selected>Inbox</option>
      </select>
    </div>
    <footer class="form-footer">
      <div class="form-btns">
        <button class="cancel-edit-btn btn">Cancel</button>
        <button class="submit-btn" type="submit">Save</button>
      </div>
    </footer>
  `;
}

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
/* harmony import */ var _taskService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskService */ "./src/taskService.js");
/* harmony import */ var _taskView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskView.js */ "./src/taskView.js");
// src/index.js







function initializeEventListeners() {
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_2__.showCreateTaskForm)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_2__.closeCreateTaskForm)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_2__.showEditTaskForm)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_2__.handleCreateProjectFormSubmission)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_2__.handleCreateTaskFormSubmission)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_2__.handleToggleCompletedTasksButton)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_2__.attachCheckBoxButtonListeners)(); // Comment out if issues and uncomment below
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_2__.attachDeleteButtonListeners)(); // Comment out if issues and uncomment below
}

function initializeApp() {
  // Check if there are tasks in localStorage
  let storedTasks = (0,_taskService__WEBPACK_IMPORTED_MODULE_1__.getTasksFromLocalStorage)();
  let storedProjects = (0,_taskService__WEBPACK_IMPORTED_MODULE_1__.getProjectsFromLocalStorage)();

  // If there are no stored projects, use default projects and save them to localStorage
  if (storedProjects.length === 0) {
    (0,_taskService__WEBPACK_IMPORTED_MODULE_1__.saveProjectsToLocalStorage)(_taskService__WEBPACK_IMPORTED_MODULE_1__.myProjects);
    storedProjects = [..._taskService__WEBPACK_IMPORTED_MODULE_1__.myProjects];
  }

  // If there are no stored tasks, use default tasks and save them to localStorage
  if (storedTasks.length === 0) {
    (0,_taskService__WEBPACK_IMPORTED_MODULE_1__.saveTasksToLocalStorage)(_taskService__WEBPACK_IMPORTED_MODULE_1__.myTasks);
    storedTasks = [..._taskService__WEBPACK_IMPORTED_MODULE_1__.myTasks];
  }

  // Update the contents of myProjects instead of reasigning it
  (0,_taskService__WEBPACK_IMPORTED_MODULE_1__.updateMyProjects)(storedProjects);

  // Update the contents of myTasks instead of reassigning it
  (0,_taskService__WEBPACK_IMPORTED_MODULE_1__.updateMyTasks)(storedTasks);

  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_2__.displayProjects)(storedProjects);
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_2__.displayIncompleteTasks)(storedTasks);
  initializeEventListeners();
  // attachCheckBoxButtonListeners();
  // attachDeleteButtonListeners();
}

initializeApp();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx5RkFBeUYsWUFBWSxLQUFLLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksUUFBUSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFNBQVMsVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFNBQVMsVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxVQUFVLFdBQVcsS0FBSyxZQUFZLFdBQVcs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ZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvbmF0aXZlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9zdHJpbmdpZnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrU2VydmljZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrVmlldy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogc3JjL3N0eWxlLmNzcyAqL1xuXG5cbi8qIEdMT0JBTCAqL1xuXG4qIHtcbiAgLyogb3V0bGluZTogMXB4IHNvbGlkIGxpZ2h0eWVsbG93OyAqL1xuICBtYXJnaW46IDA7XG5cbn1cblxuI2dyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOHJlbSBhdXRvO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMTAwdmg7XG59XG5cbmJvZHkge1xuICBjb2xvcjogI0UyRTJFMjtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG5cbn1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcbn1cblxuLmJ0bjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4yMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xufVxuXG5cbi8qIFRPUCBCQVIgKi9cbi50b3AtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICBncmlkLXJvdzogMSAvIDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogM3JlbTtcbiAgei1pbmRleDogMTtcbn1cblxuLnRvcC1iYXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogLjVyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuXG4uaG9tZS1idG4sXG4ubWVudS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAuMjVyZW07XG59XG5cbi5ob21lLWJ0bjpob3Zlcixcbi5tZW51LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG4vKiBMRUZUIE1FTlUgKi9cbi5sZWZ0LW1lbnUtY29udGFpbmVyIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0OHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xuICB3aWR0aDogMThyZW07XG59XG5cbi5sZWZ0LW1lbnUtd3JhcHBlciB7XG4gIG1hcmdpbjogMi41cmVtIDEuNXJlbSAwIDJyZW07XG59XG5cbi5pbmJveC1vcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmluYm94LW9wdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogLjVyZW07XG59XG5cbi5pbmJveC1vcHRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0cy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3Byb2plY3QtbGlzdCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuXG4ucHJvamVjdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAuMjVyZW07XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4ucHJvamVjdC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAuNXJlbTtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMCk7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5cbi8qIE1BSU4gKi9cbi5tYWluLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgbWFyZ2luOiAzcmVtIGF1dG87XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAycmVtIDAgMXJlbTtcbn1cblxuXG4udG9nZ2xlLWNvbXBsZXRlZC10YXNrcy1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xufVxuXG4udG9nZ2xlLWNvbXBsZXRlZC10YXNrcy1idG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IC43NXJlbSAwIC41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDU4LCA1OCwgNTgpO1xufVxuXG4udGFzay1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YXNrLXRpdGxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2hlY2tib3gtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTg5ODk4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xufVxuXG4uY2hlY2tib3gtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2ttYXJrLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IC0zcHg7XG59XG5cbi5jaGVja2JveC1idG4gLmNoZWNrbWFyay1pY29uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2hlY2tib3gtYnRuOmhvdmVyIC5jaGVja21hcmstaWNvbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5jaGVja2JveC1idG4uY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ODk4OTg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5jaGVja21hcmstaWNvbi5jaGVja2VkIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmFkZC10YXNrLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogLjVyZW07XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMCk7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAuNXJlbTtcbn1cblxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBsaW5lLWhlaWdodDogMS43NTtcbn1cblxuLnRpdGxlLmNoZWNrZWQge1xuICBjb2xvcjogIzdmN2Y3ZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IC43NXJlbTtcbiAgY29sb3I6ICM4ZjhmOGY7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZHVlLWRhdGUge1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cblxuXG5cblxuLyogRk9STSAqL1xuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZm9ybS1jb250YWluZXI+Zm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAwO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGhlaWdodDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZvcm0tb3B0aW9ucyB7XG4gIG1hcmdpbjogLjVyZW0gMDtcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcbiAgcGFkZGluZzogLjc1cmVtIDA7XG59XG5cbi5jYW5jZWwtYnRuLFxuLnN1Ym1pdC1idG4ge1xuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEI0QTtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbn1cblxuc2VsZWN0IHtcbiAgcGFkZGluZzogLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNkdWUtZGF0ZSB7XG4gIHBhZGRpbmc6IDAgLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gIGZpbHRlcjogaW52ZXJ0KDQ1JSkgaHVlLXJvdGF0ZSgxODBkZWcpO1xufVxuXG5cblxuXG4vKiBNT0RBTCAqL1xuXG5kaWFsb2cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAxMHJlbSBhdXRvO1xufVxuXG4jcHJvamVjdC10aXRsZS1pbnB1dCB7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiM2IzYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NyZWF0ZS1wcm9qZWN0LWZvcm0ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmFkZC1wcm9qZWN0LW1vZGFsLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tb2RhbC1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAuNXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5jbG9zZS1tb2RhbC1idG4sXG4uYWRkLXByb2plY3QtdG8tbGlzdCB7XG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5hZGQtcHJvamVjdC10by1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEI0QTtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cblxuXG5cbi8qIFVQREFURSBUQVNLIE1PREFMICovXG5cbi5mb3JtLWNvbnRhaW5lci1tb2RhbCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuLmZvcm0tY29udGFpbmVyLW1vZGFsPmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7OztBQUdsQixXQUFXOztBQUVYO0VBQ0Usb0NBQW9DO0VBQ3BDLFNBQVM7O0FBRVg7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtREFBbUQ7RUFDbkQsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBR0EsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7Ozs7QUFJQSxjQUFjO0FBQ2Q7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsU0FBUztFQUNULHlCQUF5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ICovXFxuXFxuXFxuLyogR0xPQkFMICovXFxuXFxuKiB7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgbGlnaHR5ZWxsb3c7ICovXFxuICBtYXJnaW46IDA7XFxuXFxufVxcblxcbiNncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOHJlbSBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiAjRTJFMkUyO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcblxcbn1cXG5cXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XFxufVxcblxcbi5idG46aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjIwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmN1cnJlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG59XFxuXFxuXFxuLyogVE9QIEJBUiAqL1xcbi50b3AtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnRvcC1iYXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuLmhvbWUtYnRuLFxcbi5tZW51LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4uaG9tZS1idG46aG92ZXIsXFxuLm1lbnUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4vKiBMRUZUIE1FTlUgKi9cXG4ubGVmdC1tZW51LWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA0OHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcXG4gIHdpZHRoOiAxOHJlbTtcXG59XFxuXFxuLmxlZnQtbWVudS13cmFwcGVyIHtcXG4gIG1hcmdpbjogMi41cmVtIDEuNXJlbSAwIDJyZW07XFxufVxcblxcbi5pbmJveC1vcHRpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmluYm94LW9wdGlvbiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC41cmVtO1xcbn1cXG5cXG4uaW5ib3gtb3B0aW9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0LWxpc3QgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC4yNXJlbTtcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IC41cmVtO1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcbi8qIE1BSU4gKi9cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUxRTtcXG59XFxuXFxuLm1haW4td3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgbWFyZ2luOiAzcmVtIGF1dG87XFxuICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAycmVtIDAgMXJlbTtcXG59XFxuXFxuXFxuLnRvZ2dsZS1jb21wbGV0ZWQtdGFza3MtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcXG59XFxuXFxuLnRvZ2dsZS1jb21wbGV0ZWQtdGFza3MtYnRuOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4yMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IC43NXJlbSAwIC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1OCwgNTgsIDU4KTtcXG59XFxuXFxuLnRhc2stY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay10aXRsZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jaGVja2JveC1idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTg5ODk4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrbWFyay1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTNweDtcXG4gIHJpZ2h0OiAtM3B4O1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuIC5jaGVja21hcmstaWNvbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIgLmNoZWNrbWFyay1pY29uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5jaGVja2JveC1idG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5ODk4O1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmNoZWNrbWFyay1pY29uLmNoZWNrZWQge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAuNXJlbTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NTtcXG59XFxuXFxuLnRpdGxlLmNoZWNrZWQge1xcbiAgY29sb3I6ICM3ZjdmN2Y7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IC43NXJlbTtcXG4gIGNvbG9yOiAjOGY4ZjhmO1xcbiAgZm9udC1zaXplOiAuNzVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgZm9udC1zaXplOiAuNzVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcblxcblxcblxcblxcbi8qIEZPUk0gKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyPmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvcm0ge1xcbiAgcGFkZGluZzogLjVyZW0gLjVyZW0gMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9ybS1vcHRpb25zIHtcXG4gIG1hcmdpbjogLjVyZW0gMDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbiAgcGFkZGluZzogLjc1cmVtIDA7XFxufVxcblxcbi5jYW5jZWwtYnRuLFxcbi5zdWJtaXQtYnRuIHtcXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjRBO1xcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuI2R1ZS1kYXRlIHtcXG4gIHBhZGRpbmc6IDAgLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICBmaWx0ZXI6IGludmVydCg0NSUpIGh1ZS1yb3RhdGUoMTgwZGVnKTtcXG59XFxuXFxuXFxuXFxuXFxuLyogTU9EQUwgKi9cXG5cXG5kaWFsb2cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUxRTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbjogMTByZW0gYXV0bztcXG59XFxuXFxuI3Byb2plY3QtdGl0bGUtaW5wdXQge1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYjNiM2I7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjcmVhdGUtcHJvamVjdC1mb3JtIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LW1vZGFsLXRpdGxlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubW9kYWwtYnRucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGdhcDogLjVyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLmNsb3NlLW1vZGFsLWJ0bixcXG4uYWRkLXByb2plY3QtdG8tbGlzdCB7XFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LXRvLWxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEI0QTtcXG4gIG1hcmdpbi1sZWZ0OiAuMjVyZW07XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcblxcblxcblxcbi8qIFVQREFURSBUQVNLIE1PREFMICovXFxuXFxuLmZvcm0tY29udGFpbmVyLW1vZGFsIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogNjAwcHg7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lci1tb2RhbD5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBzcmMvdGFza1NlcnZpY2UuanNcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgeyBcbiAgZGlzcGxheUluY29tcGxldGVUYXNrcywgXG4gIGNsZWFyRm9ybUZpZWxkcywgXG4gIGRpc3BsYXlBbGxUYXNrcywgXG4gIHNob3dDb21wbGV0ZWRUYXNrcywgXG4gIGRpc3BsYXlQcm9qZWN0cyxcbn0gZnJvbSBcIi4vdGFza1ZpZXcuanNcIjtcblxuXG4vLyBEYXRhIHN0cnVjdHVyZSB0byBzdG9yZSBjYXRlZ29yaWVzIGFuZCB0YXNrc1xuZXhwb3J0IGxldCBjYXRlZ29yaWVzID0gW1xuICB7XG4gICAgaWQ6ICdpbmJveCcsXG4gICAgdGl0bGU6ICdJbmJveCcsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdpbmJveCcsXG4gICAgICAgIHRpdGxlOiAnTXkgZmlyc3QgdGFzaycsIFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIG9mIG15IGZpcnN0IHRhc2snLCBcbiAgICAgICAgZHVlRGF0ZTogJzEwLTMxLTIwMjMnLCBcbiAgICAgICAgcHJpb3JpdHk6ICdIaWdoJywgXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHsgXG4gICAgICAgIGlkOiAnMicsXG4gICAgICAgIGNhdGVnb3J5OiAnaW5ib3gnLFxuICAgICAgICB0aXRsZTogJ015IHNlY29uZCB0YXNrJywgXG4gICAgICAgIGRlc2NyaXB0aW9uOiBudWxsLCBcbiAgICAgICAgZHVlRGF0ZTogbnVsbCwgXG4gICAgICAgIHByaW9yaXR5OiBudWxsLCBcbiAgICAgICAgaXNDb21wbGV0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdQcm9qZWN0IEEnLFxuICAgICAgICB0aXRsZTogJ015IHRoaXJkIHRhc2snLCBcbiAgICAgICAgZGVzY3JpcHRpb246IG51bGwsIFxuICAgICAgICBkdWVEYXRlOiBudWxsLCBcbiAgICAgICAgcHJpb3JpdHk6IG51bGwsIFxuICAgICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgaWQ6ICdwcm9qZWN0LTEnLFxuICAgIHRpdGxlOiAnU29mdHdhcmUgRGV2ZWxvcG1lbnQnLFxuICAgIHRhc2tzOiBbXVxuICB9LFxuICB7XG4gICAgaWQ6ICdwcm9qZWN0LTInLFxuICAgIHRpdGxlOiAnUGVyc29uYWwgVGFza3MnLFxuICAgIHRhc2tzOiBbXG4gICAgICB7IFxuICAgICAgICBpZDogJzMnLFxuICAgICAgICB0aXRsZTogJ015IHRoaXJkIHRhc2snLCBcbiAgICAgICAgZGVzY3JpcHRpb246IG51bGwsIFxuICAgICAgICBkdWVEYXRlOiBudWxsLCBcbiAgICAgICAgcHJpb3JpdHk6IG51bGwsIFxuICAgICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuXVxuXG5mdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoY2F0ZWdvcmllcykge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0NhdGVnb3JpZXMnLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0b3JlZFRhc2tzKCkge1xuICBjb25zdCBzdG9yZWRUYXNrcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrQ2F0ZWdvcmllcycpO1xuICBpZiAoc3RvcmVkVGFza3MpIHtcbiAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JlZFRhc2tzKTtcbiAgfVxuICByZXR1cm4gW107Ly8gUmV0dXJuIGVtcHR5IGFycmF5IGlmIG5vdGhpbmcgaW4gbG9jYWxTdG9yYWdlIHRvIGF2b2lkIGVycm9yXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KHRpdGxlKSB7XG4gIGNvbnN0IG5ld0NhdGVnb3J5ID0ge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgdGFza3M6IFtdXG4gIH07XG4gIGNhdGVnb3JpZXMucHVzaChuZXdDYXRlZ29yeSk7XG4gIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhjYXRlZ29yeUlkLCB0aXRsZSwgZGVzY3JpcHRpb24gPSBudWxsLCBkdWVEYXRlID0gbnVsbCwgcHJpb3JpdHkgPSAncHJpb3JpdHktNCcsIGlzQ29tcGxldGUgPSBmYWxzZSkge1xuICBjb25zdCBuZXdUYXNrID0ge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgIGlzQ29tcGxldGU6IGlzQ29tcGxldGUsXG4gIH07XG5cbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICBpZiAoY2F0ZWdvcnkpIHtcbiAgICBjYXRlZ29yaWVzLnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpOyAgXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoY2F0ZWdvcnlJZCkge1xuICBjb25zdCB1cGRhdGVkQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmlkICE9PSBjYXRlZ29yeUlkKTtcbiAgY2F0ZWdvcmllcyA9IHVwZGF0ZWRDYXRlZ29yaWVzO1xuICB1cGRhdGVMb2NhbFN0b3JhZ2UoY2F0ZWdvcmllcyk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tQ2F0ZWdvcnkoY2F0ZWdvcnlJZCwgdGFza0lkKSB7XG5cbn1cblxuXG4vLyAvLyBTZXQgdGhlIGRhdGEgc3RydWN0dXJlIHRvIHN0b3JlIHRhc2tzXG4vLyBleHBvcnQgbGV0IG15VGFza3MgPSBbXG4vLyAgIHsgXG4vLyAgICAgaWQ6ICcxJyxcbi8vICAgICBjYXRlZ29yeTogJ2luYm94Jyxcbi8vICAgICB0aXRsZTogJ015IGZpcnN0IHRhc2snLCBcbi8vICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIG9mIG15IGZpcnN0IHRhc2snLCBcbi8vICAgICBkdWVEYXRlOiAnMTAtMzEtMjAyMycsIFxuLy8gICAgIHByaW9yaXR5OiAnSGlnaCcsIFxuLy8gICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuLy8gICB9LFxuLy8gICB7IFxuLy8gICAgIGlkOiAnMicsXG4vLyAgICAgY2F0ZWdvcnk6ICdpbmJveCcsXG4vLyAgICAgdGl0bGU6ICdNeSBzZWNvbmQgdGFzaycsIFxuLy8gICAgIGRlc2NyaXB0aW9uOiBudWxsLCBcbi8vICAgICBkdWVEYXRlOiBudWxsLCBcbi8vICAgICBwcmlvcml0eTogbnVsbCwgXG4vLyAgICAgaXNDb21wbGV0ZTogZmFsc2UsXG4vLyAgIH0sXG4vLyBdXG5cbi8vIGV4cG9ydCBsZXQgbXlQcm9qZWN0cyA9IFtcbi8vICAge1xuLy8gICAgIGlkOiAnMScsXG4vLyAgICAgdGl0bGU6ICdTb2Z0d2FyZSBEZXZlbG9wbWVudCdcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAnMicsXG4vLyAgICAgdGl0bGU6ICdQZXJzb25hbCBUYXNrcydcbi8vICAgfSxcbi8vIF1cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gdXBkYXRlTXlUYXNrcyhuZXdUYXNrcykge1xuLy8gICAvLyBDbGVhciBvdXQgdGhlIHRhc2tzXG4vLyAgIG15VGFza3MubGVuZ3RoID0gMDtcblxuLy8gICAvLyBBZGQgdGhlIG5ldyB0YXNrc1xuLy8gICBuZXdUYXNrcy5mb3JFYWNoKHRhc2sgPT4gbXlUYXNrcy5wdXNoKHRhc2spKTtcbi8vIH1cblxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UobXlUYXNrcykge1xuLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeShteVRhc2tzKSk7XG4vLyB9XG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpIHtcbi8vICAgY29uc3Qgc3RvcmVkVGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKTtcbi8vICAgaWYgKHN0b3JlZFRhc2tzKSB7XG4vLyAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmVkVGFza3MpO1xuLy8gICB9XG4vLyAgIHJldHVybiBbXTsgLy8gUmV0dXJuIGVtcHR5IGFycmF5IGlmIG5vdGhpbmcgaW4gbG9jYWxTdG9yYWdlIHRvIGF2b2lkIGVycm9yXG4vLyB9XG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU15UHJvamVjdHMobmV3UHJvamVjdHMpIHtcbi8vICAgLy8gQ2xlYXIgb3V0IHRoZSB0YXNrc1xuLy8gICBteVByb2plY3RzLmxlbmd0aCA9IDA7XG5cbi8vICAgLy8gQWRkIHRoZSBuZXcgdGFza3Ncbi8vICAgbmV3UHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IG15UHJvamVjdHMucHVzaChwcm9qZWN0KSk7XG4vLyB9XG5cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKG15UHJvamVjdHMpIHtcbi8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuLy8gfVxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4vLyAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJyk7XG4vLyAgIGlmIChzdG9yZWRQcm9qZWN0cykge1xuLy8gICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JlZFByb2plY3RzKTtcbi8vICAgfVxuLy8gICByZXR1cm4gW107IC8vIFJldHVybiBlbXB0eSBhcnJheSBpZiBub3RoaW5nIGluIGxvY2FsU3RvcmFnZSB0byBhdm9pZCBlcnJvclxuLy8gfVxuXG5cblxuLy8gLy8gRnVuY3Rpb24gdG8gY3JlYXRlIHByb2plY3RzXG4vLyBjbGFzcyBQcm9qZWN0IHtcbi8vICAgY29uc3RydWN0b3IoaWQsIHRpdGxlKSB7XG4vLyAgICAgdGhpcy5pZCA9IGlkO1xuLy8gICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbi8vICAgfVxuLy8gfVxuXG4vLyAvLyBGdW5jdGlvbiB0byBjcmVhdGUgdGFza3Ncbi8vIGNsYXNzIFRhc2sge1xuLy8gICBjb25zdHJ1Y3RvcihpZCwgY2F0ZWdvcnksIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUgPSBmYWxzZSkge1xuLy8gICAgIHRoaXMuaWQgPSBpZDtcbi8vICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4vLyAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuLy8gICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbi8vICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuLy8gICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbi8vICAgICB0aGlzLmlzQ29tcGxldGUgPSBpc0NvbXBsZXRlO1xuLy8gICB9XG4vLyB9XG5cbi8qIENSRUFURSBMT0dJQyAqL1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuLy8gICAvLyBHZW5lcmF0ZSB1bmlxdWUgSUQgZm9yIHRoZSBwcm9qZWN0XG4vLyAgIGNvbnN0IGlkID0gdXVpZHY0KCk7XG5cbi8vICAgLy8gQ3JlYXRlIGEgbmV3IHRhc2sgdXNpbmcgdGhlIFByb2plY3QgY2xhc3Ncbi8vICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGlkLCB0aXRsZSk7XG5cbi8vICAgbXlQcm9qZWN0cy5wdXNoKHByb2plY3QpXG4vLyAgIHNhdmVQcm9qZWN0c1RvTG9jYWxTdG9yYWdlKG15UHJvamVjdHMpO1xuXG4vLyAgIC8vIFVwZGF0ZSB0aGUgVUlcbi8vICAgZGlzcGxheVByb2plY3RzKG15UHJvamVjdHMpO1xuLy8gfVxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKGNhdGVnb3J5LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKSB7XG4vLyAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBJRCBmb3IgdGhlIHRhc2tcbi8vICAgY29uc3QgaWQgPSB1dWlkdjQoKTtcblxuLy8gICAvLyBDcmVhdGUgYSBuZXcgdGFzayB1c2luZyB0aGUgVGFzayBjbGFzc1xuLy8gICBjb25zdCB0YXNrID0gbmV3IFRhc2soaWQsIGNhdGVnb3J5LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKTtcblxuLy8gICBteVRhc2tzLnB1c2godGFzaylcbi8vICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UobXlUYXNrcyk7XG5cbi8vICAgLy8gVXBkYXRlIHRoZSBVSVxuLy8gICBkaXNwbGF5SW5jb21wbGV0ZVRhc2tzKG15VGFza3MpO1xuXG4vLyAgIC8vIENsZWFyIHRoZSBmb3JtIGZpZWxkc1xuLy8gICBjbGVhckZvcm1GaWVsZHMoKTtcbi8vIH1cblxuXG4vKiBERUxFVEUgTE9HSUMgKi9cblxuLy8gRnVuY3Rpb24gdG8gZGVsZXRlIHRhc2tzIGJ5IHRoZWlyIHVuaXF1ZSBJRFxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4gIGNvbnN0IHRhc2tzID0gZ2V0VGFza3NGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4gIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHVwZGF0ZWRUYXNrcyk7XG4gIHVwZGF0ZU15VGFza3ModXBkYXRlZFRhc2tzKTtcblxuICBpZiAoIXNob3dDb21wbGV0ZWRUYXNrcykge1xuICAgIGRpc3BsYXlJbmNvbXBsZXRlVGFza3ModXBkYXRlZFRhc2tzKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5QWxsVGFza3ModXBkYXRlZFRhc2tzKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUYXNrQ29tcGxldGUodGFza0lkKSB7XG4gIC8vIE9wZXJhdGUgb24gdGhlIGxhdGVzdCB0YXNrcyBhcnJheSBmcm9tIGxvY2FsU3RvcmFnZVxuICBjb25zdCB0YXNrcyA9IGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4gIGlmICh0YXNrSW5kZXggIT09IC0xICYmIHRhc2tzW3Rhc2tJbmRleF0uaXNDb21wbGV0ZSA9PT0gZmFsc2UpIHtcbiAgICB0YXNrc1t0YXNrSW5kZXhdLmlzQ29tcGxldGUgPSB0cnVlOyAgXG4gICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuICAgIGRpc3BsYXlJbmNvbXBsZXRlVGFza3ModGFza3MpO1xuXG4gIH0gZWxzZSBpZiAodGFza0luZGV4ICE9PSAtMSAmJiB0YXNrc1t0YXNrSW5kZXhdLmlzQ29tcGxldGUgPT09IHRydWUpIHtcbiAgICB0YXNrc1t0YXNrSW5kZXhdLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4gICAgZGlzcGxheUFsbFRhc2tzKHRhc2tzKTtcbiAgfSAgXG4gICAgZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignVGFzayBub3QgZm91bmQnKTtcbiAgfSAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRGV0YWlscyh0YXNrSWQpIHtcbiAgY29uc3QgdGFza3MgPSBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICByZXR1cm4gdGFzaztcbn1cblxuLy8gRnVuY3Rpb24gdG8gdXBkYXRlIGEgdGFza1xuZnVuY3Rpb24gdXBkYXRlVGFza0RldGFpbHMoKSB7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFByaW9yaXR5TGV2ZWwodGFza0lkLCBzZWxlY3RlZFByaW9yaXR5KSB7XG4gIGNvbnN0IHNlbGVjdGVkVGFzayA9IG15VGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cbiAgLy8gVXBkYXRlIHRoZSBwcmlvcml0eSBsZXZlbCBvZiB0aGUgc2VsZWN0ZWQgdGFza1xuICBpZiAoc2VsZWN0ZWRUYXNrKSB7XG4gICAgc2VsZWN0ZWRUYXNrLnByaW9yaXR5ID0gc2VsZWN0ZWRQcmlvcml0eTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdUYXNrIG5vdCBmb3VuZCcpO1xuICB9XG5cbiAgZGlzcGxheUluY29tcGxldGVUYXNrcygpO1xufSIsIi8vIHNyYy90YXNrVmlldy5qc1xuaW1wb3J0IHsgXG4gIGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSwgXG4gIGNyZWF0ZVByb2plY3QsXG4gIGNyZWF0ZVRhc2ssIFxuICBkZWxldGVUYXNrLCBcbiAgdG9nZ2xlVGFza0NvbXBsZXRlLCBcbiAgbXlUYXNrcyxcbiAgZ2V0VGFza0RldGFpbHMsXG59IGZyb20gJy4vdGFza1NlcnZpY2UuanMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMocHJvamVjdHMpIHtcbiAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBwcm9qZWN0IGxpc3QgZWxlbWVudFxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcbiAgXG4gIC8vIENsZWFyIHRoZSBwcm9qZWN0IGxpc3RcbiAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gIFxuICAvLyBMb29wIHRocm91Z2ggdGhlIHRhc2tzIGFuZCB1cGRhdGUgdGhlIGxpc3RcbiAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgXG4gICAgLy8gU2V0IHRoZSBpbmRleCBudW1iZXIgdG8gdGhlIGRhdGEtdGFzay1pZCBhdHRyaWJ1dGVcbiAgICBwcm9qZWN0SXRlbS5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gICAgXG4gICAgLy8gSFRNTCBzdHJ1Y3R1cmUgb2YgdGhlIG5ldyB0YXNrIGl0ZW1cbiAgICBwcm9qZWN0SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInByb2plY3QtaXRlbVwiPlxuICAgICAgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgY2xhc3M9XCJwcm9qZWN0X2ljb25cIiBzdHlsZT1cImNvbG9yOiByZ2IoMTg0LCAxODQsIDE4NCk7XCI+PHBhdGggZD1cIk0xMiA3YTUgNSAwIDExMCAxMCA1IDUgMCAwMTAtMTB6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjwvcGF0aD48L3N2Zz5cbiAgICAgIDxkaXY+JHtwcm9qZWN0LnRpdGxlfTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG4gICAgXG4gICAgLy8gQWRkIHRoZSBuZXcgdGFzayBpdGVtXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pOyAgICBcbiAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlJbmNvbXBsZXRlVGFza3ModGFza3MpIHtcbiAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSB0YXNrIGxpc3QgZWxlbWVudFxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgXG4gIC8vIENsZWFyIHRoZSB0YXNrIGxpc3RcbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gIFxuICAvLyBMb29wIHRocm91Z2ggdGhlIHRhc2tzIGFuZCB1cGRhdGUgdGhlIGxpc3RcbiAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICBpZiAoIXRhc2suaXNDb21wbGV0ZSkge1xuICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgXG4gICAgICAvLyBBZGQgdGFzay1pdGVtIGNsYXNzIGF0dHJpYnV0ZVxuICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICBcbiAgICAgIC8vIFNldCB0aGUgaW5kZXggbnVtYmVyIHRvIHRoZSBkYXRhLXRhc2staWQgYXR0cmlidXRlXG4gICAgICB0YXNrSXRlbS5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7XG4gICAgICBcbiAgICAgIC8vIEhUTUwgc3RydWN0dXJlIG9mIHRoZSBuZXcgdGFzayBpdGVtXG4gICAgICB0YXNrSXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNoZWNrYm94LWJ0blwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwiY2hlY2ttYXJrLWljb25cIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTExLjIzIDEzLjdsLTIuMTUtMmEuNTUuNTUgMCAwIDAtLjc0LS4wMWwuMDMtLjAzYS40Ni40NiAwIDAgMCAwIC42OEwxMS4yNCAxNWw1LjQtNS4wMWEuNDUuNDUgMCAwIDAgMC0uNjhsLjAyLjAzYS41NS41NSAwIDAgMC0uNzMgMGwtNC43IDQuMzV6XCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay10aXRsZS13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1idG4gYnRuXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiPkVkaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnRuIGJ0blwiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7dGFzay5kZXNjcmlwdGlvbiA/IGA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke3Rhc2suZGVzY3JpcHRpb259PC9kaXY+YCA6ICcnfVxuICAgICAgICAke3Rhc2suZHVlRGF0ZSA/IGA8ZGl2IGNsYXNzPVwiZHVlLWRhdGVcIj4ke3Rhc2suZHVlRGF0ZX08L2Rpdj5gIDogJyd9XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgICBcbiAgICAgIC8vIEFkZCB0aGUgbmV3IHRhc2sgaXRlbVxuICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0l0ZW0pOyAgICBcbiAgICB9XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWxsVGFza3ModGFza3MpIHtcbiAgLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSB0YXNrIGxpc3QgZWxlbWVudFxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgXG4gIC8vIENsZWFyIHRoZSB0YXNrIGxpc3RcbiAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XG4gIFxuICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlIHRhc2sgaXRlbSBlbGVtZW50c1xuICBjb25zdCBjcmVhdGVUYXNrSXRlbSA9ICh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgIHRhc2tJdGVtLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICB0YXNrSXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNoZWNrYm94LWJ0biR7dGFzay5pc0NvbXBsZXRlID8gJyBjaGVja2VkJyA6ICcnfVwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwiY2hlY2ttYXJrLWljb24ke3Rhc2suaXNDb21wbGV0ZSA/ICcgY2hlY2tlZCcgOiAnJ31cIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMS4yMyAxMy43bC0yLjE1LTJhLjU1LjU1IDAgMCAwLS43NC0uMDFsLjAzLS4wM2EuNDYuNDYgMCAwIDAgMCAuNjhMMTEuMjQgMTVsNS40LTUuMDFhLjQ1LjQ1IDAgMCAwIDAtLjY4bC4wMi4wM2EuNTUuNTUgMCAwIDAtLjczIDBsLTQuNyA0LjM1elwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stdGl0bGUtd3JhcHBlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSR7dGFzay5pc0NvbXBsZXRlID8gJyBjaGVja2VkJyA6ICcnfVwiPiR7dGFzay50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgJHshdGFzay5pc0NvbXBsZXRlID8gYDxidXR0b24gY2xhc3M9XCJlZGl0LWJ0blwiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIj5FZGl0PC9idXR0b24+YCA6ICcnfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1idG5cIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke3Rhc2suZGVzY3JpcHRpb24gPyBgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHt0YXNrLmRlc2NyaXB0aW9ufTwvZGl2PmAgOiAnJ31cbiAgICAgICAgJHt0YXNrLmR1ZURhdGUgPyBgPGRpdiBjbGFzcz1cImR1ZS1kYXRlXCI+JHt0YXNrLmR1ZURhdGV9PC9kaXY+YCA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICByZXR1cm4gdGFza0l0ZW07XG4gIH07XG5cbiAgLy8gRGlzcGxheSBpbmNvbXBsZXRlIHRhc2tzXG4gIHRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmlzQ29tcGxldGUpLmZvckVhY2godGFzayA9PiB7XG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0l0ZW0odGFzaykpO1xuICB9KTtcblxuICAvLyBEaXNwbGF5IGNvbXBsZXRlZCB0YXNrc1xuICB0YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlzQ29tcGxldGUpLmZvckVhY2godGFzayA9PiB7XG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0l0ZW0odGFzaykpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlVGFza0Zvcm1TdWJtaXNzaW9uKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgLy8gR2V0IHZhbHVlcyBmcm9tIHRoZSBmb3JtIGZpZWxkc1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QnKS52YWx1ZTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWUtZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGEgbmV3IHRhc2sgb2JqZWN0IGFuZCBhZGQgaXQgdG8gdGhlIGRhdGFiYXNlXG4gICAgY3JlYXRlVGFzayhjYXRlZ29yeSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcbiAgICBjb25zb2xlLmxvZyh0aXRsZSk7XG5cbiAgICAvLyBSZWZvY3VzIHRoZSB0aXRsZSBpbnB1dCBmaWVsZFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLmZvY3VzKCk7IFxuICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlUHJvamVjdEZvcm1TdWJtaXNzaW9uKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIGJlaGF2aW9yXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgXG4gICAgLy8gR2V0IHZhbHVlcyBmcm9tIHRoZSBmb3JtIGZpZWxkc1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUtaW5wdXQnKS52YWx1ZTtcbiAgXG4gICAgLy8gQ3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIGFkZCBpdCB0byB0aGUgZGF0YWJhc2VcbiAgICBjcmVhdGVQcm9qZWN0KHRpdGxlKTtcblxuICAgIC8vIENsZWFyIGZpZWxkcyBhbmQgY2xvc2UgdGhlIG1vZGFsXG4gICAgY2xlYXJGb3JtRmllbGRzKCk7XG4gICAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRm9ybUZpZWxkcygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS10YXNrJykucmVzZXQoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0LWZvcm0nKS5yZXNldCgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrJykucmVzZXQoKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NyZWF0ZVRhc2tGb3JtKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNyZWF0ZVRhc2tGb3JtRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLmZvY3VzKCk7IFxuICAgICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pOyAgXG4gIH0pO1xufVxuXG4vLyBDaGFuZ2UgYmVoYXZpb3Igb2YgdGhlIHJldHVybiBrZXkgdG8gcHJvZ3JhbW1hdGljYWxseSBjbGljayB0aGUgJ0FkZCB0YXNrJyBidG4uXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuXG4gICAgLy8gQ2hlY2sgaWYgYWRkIHRhc2sgZm9ybSBpcyBvcGVuIGFuZCB2aXNpYmxlXG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgICBjb25zdCBhZGRUYXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idG4nKTtcbiAgICBcbiAgICAvLyBDaGVjayBpZiB0aGUgYWRkIHByb2plY3QgbW9kYWwgaXMgb3BlbiBhbmQgdmlzaWJsZVxuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1tb2RhbCcpO1xuICAgIGNvbnN0IGFkZFByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtdG8tbGlzdCcpO1xuXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUoYWRkVGFza0Zvcm0pLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgYWRkVGFza1N1Ym1pdEJ1dHRvbi5jbGljaygpO1xuICAgIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShhZGRQcm9qZWN0TW9kYWwpLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgYWRkUHJvamVjdFN1Ym1pdEJ1dHRvbi5jbGljaygpO1xuICAgICAgYWRkUHJvamVjdE1vZGFsLmNsb3NlKCk7XG4gICAgfVxuICB9XG59KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VDcmVhdGVUYXNrRm9ybSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVUYXNrRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjbGVhckZvcm1GaWVsZHMoKTtcbiAgICAgIGNyZWF0ZVRhc2tGb3JtRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH0pOyAgXG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hDaGVja0JveEJ1dHRvbkxpc3RlbmVycygpIHtcbiAgY29uc3QgdGFza0xpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICB0YXNrTGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2ttYXJrLWljb24nKSkge1xuICAgICAgXG4gICAgICAvLyBHZXQgdGhlIHRhc2sgSUQgXG4gICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQ7XG5cbiAgICAgIC8vIFVwZGF0ZSBpc0NvbXBsZXRlIHByb3BlcnR5XG4gICAgICB0b2dnbGVUYXNrQ29tcGxldGUodGFza0lkKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hEZWxldGVCdXR0b25MaXN0ZW5lcnMoKSB7XG4gIGNvbnN0IHRhc2tMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgdGFza0xpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1idG4nKSkge1xuICAgICAgXG4gICAgICAvLyBHZXQgdGhlIHRhc2sgSUQgXG4gICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuZGF0YXNldC50YXNrSWQ7XG5cbiAgICAgIC8vIFVwZGF0ZSBpc0NvbXBsZXRlIHByb3BlcnR5XG4gICAgICBkZWxldGVUYXNrKHRhc2tJZCk7XG4gICAgfVxuICB9KTtcbn1cblxuXG4vLyBTaW5nbGUgYnV0dG9uIGZvciB0b2dnbGluZyB0aGUgZGlzcGxheSBvZiBjb21wbGV0ZWQgdGFza3NcbmNvbnN0IHRvZ2dsZUNvbXBsZXRlZFRhc2tzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1jb21wbGV0ZWQtdGFza3MtYnRuJyk7XG5cbi8vIEluaXRpYWwgc3RhdGUgZm9yIHdoZXRoZXIgY29tcGxldGVkIHRhc2tzIGFyZSBzaG93blxuZXhwb3J0IGxldCBzaG93Q29tcGxldGVkVGFza3MgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZUNvbXBsZXRlZFRhc2tzQnV0dG9uKCkge1xuICB0b2dnbGVDb21wbGV0ZWRUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIHNob3dDb21wbGV0ZWRUYXNrcyA9ICFzaG93Q29tcGxldGVkVGFza3M7XG5cbiAgICBpZiAoc2hvd0NvbXBsZXRlZFRhc2tzKSB7XG4gICAgICBkaXNwbGF5QWxsVGFza3ModGFza3MpO1xuICAgICAgdG9nZ2xlQ29tcGxldGVkVGFza3NCdG4udGV4dENvbnRlbnQgPSAnSGlkZSBjb21wbGV0ZWQgdGFza3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5SW5jb21wbGV0ZVRhc2tzKHRhc2tzKTtcbiAgICAgIHRvZ2dsZUNvbXBsZXRlZFRhc2tzQnRuLnRleHRDb250ZW50ID0gJ1Nob3cgY29tcGxldGVkIHRhc2tzJztcbiAgICB9XG4gIH0pO1xufVxuXG5cbi8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnMgdG8gc2hvdyBhbmQgY2xvc2UgcHJvamVjdCBtb2RhbFxuY29uc3QgcHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1tb2RhbCcpO1xuY29uc3Qgc2hvd0FkZFByb2plY3RNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1idG4nKTtcbmNvbnN0IGNsb3NlUHJvamVjdE1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW1vZGFsLWJ0bicpO1xuXG5zaG93QWRkUHJvamVjdE1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBwcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xufSk7XG5cbmNsb3NlUHJvamVjdE1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNsZWFyRm9ybUZpZWxkcygpO1xuICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG59KTtcblxuXG5jb25zdCBlZGl0VGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stbW9kYWwnKTtcbmNvbnN0IGNsb3NlRWRpdFRhc2tNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtZWRpdC1idG4nKTtcblxuY2xvc2VFZGl0VGFza01vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGVkaXRUYXNrRGlhbG9nLmNsb3NlKCk7XG59KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0VkaXRUYXNrRm9ybSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtYnRuJykpIHtcbiAgICAgICAgZWRpdFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7ICAgIFxuXG4gICAgICAgIC8vIEdldCB0aGUgdGFzayBJRCBcbiAgICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSWQpO1xuICAgICAgICBkaXNwbGF5VGFza0RldGFpbHModGFza0lkKTtcbiAgICAgIH1cbiAgICB9KTsgIFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tEZXRhaWxzKHRhc2tJZCkge1xuICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIHRhc2sgbGlzdCBlbGVtZW50XG4gIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKTtcblxuICBjb25zdCB0YXNrID0gZ2V0VGFza0RldGFpbHModGFza0lkKTtcbiAgY29uc29sZS5sb2codGFzayk7XG4gIFxuICAvLyBDbGVhciB0aGUgdGFzayBsaXN0XG4gIGVkaXRUYXNrRm9ybS5pbm5lckhUTUwgPSBgXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlZGl0LXRpdGxlXCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIHZhbHVlPVwiJHt0YXNrLnRpdGxlfVwiIC8+XG4gICAgPHRleHRhcmVhIGlkPVwiZWRpdC1kZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIj4ke3Rhc2suZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1vcHRpb25zXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZS1kYXRlXCIgdmFsdWU9XCIke3Rhc2suZHVlRGF0ZX1cIiAvPlxuICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eS0xXCI+UHJpb3JpdHkgMTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpb3JpdHktMlwiPlByaW9yaXR5IDI8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaW9yaXR5LTNcIj5Qcmlvcml0eSAzPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eS00XCIgc2VsZWN0ZWQ+UHJpb3JpdHkgNDwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJwcm9qZWN0XCIgaWQ9XCJwcm9qZWN0XCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbmJveFwiIHNlbGVjdGVkPkluYm94PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgICA8Zm9vdGVyIGNsYXNzPVwiZm9ybS1mb290ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWJ0bnNcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1lZGl0LWJ0biBidG5cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdC1idG5cIiB0eXBlPVwic3VibWl0XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gIGA7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gc3JjL2luZGV4LmpzXG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgXG4gIHVwZGF0ZU15VGFza3MsXG4gIG15VGFza3MsIFxuICBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UsIFxuICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSxcbiAgZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlLFxuICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSxcbiAgbXlQcm9qZWN0cyxcbiAgdXBkYXRlTXlQcm9qZWN0cywgXG59IGZyb20gJy4vdGFza1NlcnZpY2UnO1xuXG5pbXBvcnQgeyBcbiAgZGlzcGxheVByb2plY3RzLFxuICBkaXNwbGF5SW5jb21wbGV0ZVRhc2tzLCBcbiAgc2hvd0NyZWF0ZVRhc2tGb3JtLCBcbiAgY2xvc2VDcmVhdGVUYXNrRm9ybSwgXG4gIHNob3dFZGl0VGFza0Zvcm0sXG4gIGhhbmRsZUNyZWF0ZVRhc2tGb3JtU3VibWlzc2lvbiwgXG4gIGhhbmRsZUNyZWF0ZVByb2plY3RGb3JtU3VibWlzc2lvbixcbiAgYXR0YWNoQ2hlY2tCb3hCdXR0b25MaXN0ZW5lcnMsIFxuICBhdHRhY2hEZWxldGVCdXR0b25MaXN0ZW5lcnMsXG4gIGhhbmRsZVRvZ2dsZUNvbXBsZXRlZFRhc2tzQnV0dG9uXG59IGZyb20gJy4vdGFza1ZpZXcuanMnO1xuXG5cbmZ1bmN0aW9uIGluaXRpYWxpemVFdmVudExpc3RlbmVycygpIHtcbiAgc2hvd0NyZWF0ZVRhc2tGb3JtKCk7XG4gIGNsb3NlQ3JlYXRlVGFza0Zvcm0oKTtcbiAgc2hvd0VkaXRUYXNrRm9ybSgpO1xuICBoYW5kbGVDcmVhdGVQcm9qZWN0Rm9ybVN1Ym1pc3Npb24oKTtcbiAgaGFuZGxlQ3JlYXRlVGFza0Zvcm1TdWJtaXNzaW9uKCk7XG4gIGhhbmRsZVRvZ2dsZUNvbXBsZXRlZFRhc2tzQnV0dG9uKCk7XG4gIGF0dGFjaENoZWNrQm94QnV0dG9uTGlzdGVuZXJzKCk7IC8vIENvbW1lbnQgb3V0IGlmIGlzc3VlcyBhbmQgdW5jb21tZW50IGJlbG93XG4gIGF0dGFjaERlbGV0ZUJ1dHRvbkxpc3RlbmVycygpOyAvLyBDb21tZW50IG91dCBpZiBpc3N1ZXMgYW5kIHVuY29tbWVudCBiZWxvd1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xuICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgdGFza3MgaW4gbG9jYWxTdG9yYWdlXG4gIGxldCBzdG9yZWRUYXNrcyA9IGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICBsZXQgc3RvcmVkUHJvamVjdHMgPSBnZXRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcblxuICAvLyBJZiB0aGVyZSBhcmUgbm8gc3RvcmVkIHByb2plY3RzLCB1c2UgZGVmYXVsdCBwcm9qZWN0cyBhbmQgc2F2ZSB0aGVtIHRvIGxvY2FsU3RvcmFnZVxuICBpZiAoc3RvcmVkUHJvamVjdHMubGVuZ3RoID09PSAwKSB7XG4gICAgc2F2ZVByb2plY3RzVG9Mb2NhbFN0b3JhZ2UobXlQcm9qZWN0cyk7XG4gICAgc3RvcmVkUHJvamVjdHMgPSBbLi4ubXlQcm9qZWN0c107XG4gIH1cblxuICAvLyBJZiB0aGVyZSBhcmUgbm8gc3RvcmVkIHRhc2tzLCB1c2UgZGVmYXVsdCB0YXNrcyBhbmQgc2F2ZSB0aGVtIHRvIGxvY2FsU3RvcmFnZVxuICBpZiAoc3RvcmVkVGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UobXlUYXNrcyk7XG4gICAgc3RvcmVkVGFza3MgPSBbLi4ubXlUYXNrc107XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIG15UHJvamVjdHMgaW5zdGVhZCBvZiByZWFzaWduaW5nIGl0XG4gIHVwZGF0ZU15UHJvamVjdHMoc3RvcmVkUHJvamVjdHMpO1xuXG4gIC8vIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgbXlUYXNrcyBpbnN0ZWFkIG9mIHJlYXNzaWduaW5nIGl0XG4gIHVwZGF0ZU15VGFza3Moc3RvcmVkVGFza3MpO1xuXG4gIGRpc3BsYXlQcm9qZWN0cyhzdG9yZWRQcm9qZWN0cyk7XG4gIGRpc3BsYXlJbmNvbXBsZXRlVGFza3Moc3RvcmVkVGFza3MpO1xuICBpbml0aWFsaXplRXZlbnRMaXN0ZW5lcnMoKTtcbiAgLy8gYXR0YWNoQ2hlY2tCb3hCdXR0b25MaXN0ZW5lcnMoKTtcbiAgLy8gYXR0YWNoRGVsZXRlQnV0dG9uTGlzdGVuZXJzKCk7XG59XG5cbmluaXRpYWxpemVBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=