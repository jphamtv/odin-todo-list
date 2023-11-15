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

button.current {
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

h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.inbox-button {
  background-color: rgb(0, 0, 0, .0);
  color: #fff;
  padding: 10px 0 10px 8px;
  border-radius: 6px;
  border: none;
  margin-bottom: 2rem;
  width: 100%;
  
  display: flex;
  align-items: center;
  gap: .5rem;
}

.inbox-button:hover {
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

.project-button {
  background-color: rgb(0, 0, 0, .0);
  color: #fff;
  width: 100%;

  display: flex;
  align-items: center;
  gap: .5rem;
  padding: 10px 0 10px 8px;
  border-radius: 6px;
  border: none;
}

.project-button:hover {
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

.delete-btn {
  margin-left: .5rem;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* src/style.css */\n\n\n/* GLOBAL */\n\n* {\n  /* outline: 1px solid lightyellow; */\n  margin: 0;\n\n}\n\n#grid-container {\n  display: grid;\n  grid-template-columns: 18rem auto;\n  grid-template-rows: 3rem 100vh;\n}\n\nbody {\n  color: #E2E2E2;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.btn {\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background-color: rgb(255, 255, 255, .10);\n}\n\n.btn:hover{\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\nbutton.current {\n  background-color: #333333;\n}\n\n\n/* TOP BAR */\n.top-bar {\n  display: flex;\n  align-items: center;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  background-color: #333333;\n  position: fixed;\n  width: 100%;\n  height: 3rem;\n  z-index: 1;\n}\n\n.top-bar-wrapper {\n  display: flex;\n  gap: .5rem;\n  align-items: center;\n  margin-left: 2rem;\n}\n\n.home-btn,\n.menu-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  padding: .25rem;\n}\n\n.home-btn:hover,\n.menu-btn:hover {\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\n\n\n/* LEFT MENU */\n.left-menu-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background-color: #282828;\n  position: fixed;\n  top: 48px;\n  height: calc(100% - 48px);\n  width: 18rem;\n}\n\n.left-menu-wrapper {\n  margin: 2.5rem 1.5rem 0 2rem;\n}\n\nh2 {\n  font-size: 1.25rem;\n  margin-bottom: 1rem;\n}\n\n.inbox-button {\n  background-color: rgb(0, 0, 0, .0);\n  color: #fff;\n  padding: 10px 0 10px 8px;\n  border-radius: 6px;\n  border: none;\n  margin-bottom: 2rem;\n  width: 100%;\n  \n  display: flex;\n  align-items: center;\n  gap: .5rem;\n}\n\n.inbox-button:hover {\n  background-color: #333333;\n  cursor: pointer;\n}\n\n.projects-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n}\n\n#project-list li {\n  margin-bottom: .5rem;\n}\n\n.project-button {\n  background-color: rgb(0, 0, 0, .0);\n  color: #fff;\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n  padding: 10px 0 10px 8px;\n  border-radius: 6px;\n  border: none;\n}\n\n.project-button:hover {\n  background-color: #333333;\n  cursor: pointer;\n}\n\n.add-project-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 5px 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-left: 6px;\n}\n\n.add-project-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n  cursor: pointer;\n}\n\n\n\n/* MAIN */\n.main-container {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #1E1E1E;\n}\n\n.main-wrapper {\n  max-width: 50rem;\n  margin: 3rem auto;\n  padding: 0 2rem;\n}\n\nh1 {\n  font-size: 1.5rem;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2rem 0 1rem;\n}\n\n\n.toggle-completed-tasks-btn {\n  display: block;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background-color: rgb(255, 255, 255, .10);\n}\n\n.toggle-completed-tasks-btn:hover{\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\n.task-item {\n  display: flex;\n  gap: 1rem;\n  padding: .75rem 0 .5rem;\n  border-bottom: 1px solid rgb(58, 58, 58);\n}\n\n.task-content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.task-title-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox-btn {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #989898;\n  border-radius: 20px;\n  background-color: rgb(0, 0, 0, .0);\n}\n\n.checkbox-btn:hover {\n  background-color: #3b3b3b;\n  cursor: pointer;\n}\n\n.checkmark-icon {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n}\n\n.checkbox-btn .checkmark-icon {\n  visibility: hidden;\n}\n\n.checkbox-btn:hover .checkmark-icon {\n  visibility: visible;\n}\n\n.checkbox-btn.checked {\n  background-color: #989898;\n  visibility: visible;\n}\n\n.checkmark-icon.checked {\n  visibility: visible;\n}\n\n.add-task-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-top: .5rem;\n}\n\n.add-task-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n  cursor: pointer;\n}\n\n.title {\n  margin-bottom: .5rem;\n  line-height: 1.75;\n}\n\n.title.checked {\n  color: #7f7f7f;\n  text-decoration: line-through;\n}\n\n.description {\n  margin-bottom: .75rem;\n  color: #8f8f8f;\n  font-size: .75rem;\n  font-weight: 300;\n}\n\n.due-date {\n  font-size: .75rem;\n  font-weight: 300;\n  margin-bottom: .5rem;\n}\n\n.delete-btn {\n  margin-left: .5rem;\n}\n\n\n\n\n\n/* FORM */\n\n.form-container {\n  display: none;\n}\n\n.form-container>form {\n  display: flex;\n  flex-direction: column;\n}\n\nform {\n  padding: .5rem .5rem 0;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 8px;\n}\n\ninput,\ntextarea {\n  height: 2rem;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  color: #fff;\n}\n\n.form-options {\n  margin: .5rem 0;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n.form-footer {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid rgb(98, 98, 98);\n  padding: .75rem 0;\n}\n\n.cancel-btn,\n.submit-btn {\n  padding: .5rem 1rem;\n  background-color: #333333;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.submit-btn {\n  background-color: #DD4B4A;\n  margin-left: .25rem;\n}\n\nselect {\n  padding: .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n}\n\n#due-date {\n  padding: 0 .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n  margin-right: 4px;\n}\n\ninput[type=\"date\"] {\n  filter: invert(45%) hue-rotate(180deg);\n}\n\n\n\n\n/* MODAL */\n\ndialog {\n  background-color: #1E1E1E;\n  border: none;\n  border-radius: 4px;\n  margin: 10rem auto;\n}\n\n#project-title-input {\n  height: 28px;\n  margin-bottom: 1rem;\n  border: 1px solid #3b3b3b;\n  border-radius: 4px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n#create-project-form {\n  border: none;\n  width: 300px;\n}\n\n.add-project-modal-title {\n  color: #fff;\n}\n\n.modal-btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: .5rem;\n  padding-top: 1rem;\n}\n\n.close-modal-btn,\n.add-project-to-list {\n  padding: .5rem 1rem;\n  background-color: #333333;\n  color: white;\n  border: none;\n  border-radius: 4px;\n}\n\n.add-project-to-list {\n  background-color: #DD4B4A;\n  margin-left: .25rem;\n}\n\n::backdrop {\n  background-color: black;\n  opacity: 0.5;\n}\n\n\n\n\n/* UPDATE TASK MODAL */\n\n.form-container-modal {\n  height: 200px;\n  width: 600px;\n}\n\n.form-container-modal>form {\n  display: flex;\n  flex-direction: column;\n}"],"sourceRoot":""}]);
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
/* harmony export */   createCategory: () => (/* binding */ createCategory),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteCategory: () => (/* binding */ deleteCategory),
/* harmony export */   deleteTaskFromCategory: () => (/* binding */ deleteTaskFromCategory),
/* harmony export */   editCategory: () => (/* binding */ editCategory),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   toggleTaskStatus: () => (/* binding */ toggleTaskStatus)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _taskView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskView.js */ "./src/taskView.js");
// src/taskService.js







function createCategory(title) {
  const newCategory = {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    title: title,
    tasks: []
  };

  _utils_js__WEBPACK_IMPORTED_MODULE_0__.categories.push(newCategory);
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.categories);
}


function createTask(categoryId, title, description = '', dueDate = '', priority = 'priority-4', isComplete = false) {
  const newTask = {
    id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])(),
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    isComplete: isComplete,
  };
  
  console.log(newTask);
  const category = _utils_js__WEBPACK_IMPORTED_MODULE_0__.categories.find(category => category.id === categoryId);
  if (category) {
    category.tasks.push(newTask);
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.categories);  
  } else {
    console.error('Category not found');
  }
}


function deleteCategory(categoryId) {
  const updatedCategories = _utils_js__WEBPACK_IMPORTED_MODULE_0__.categories.filter(category => category.id !== categoryId);
  _utils_js__WEBPACK_IMPORTED_MODULE_0__.categories = updatedCategories;
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.categories);
}


function deleteTaskFromCategory(categoryId, taskId) {
  const category = _utils_js__WEBPACK_IMPORTED_MODULE_0__.categories.find(category => category.id === categoryId);
  if (category) {
    const updatedTasks = category.tasks.filter(task => task.id !== taskId);
    category.tasks = updatedTasks;

    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.categories);  
  } else {
    console.error('Category not found');
  }
}


// Function to update a task
function editCategory(categoryId, updatedTitle) {
  const category = _utils_js__WEBPACK_IMPORTED_MODULE_0__.categories.find(category => category.id === categoryId);
  if (category) {
    category.title = updatedTitle;

    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.categories);
  } else {
    console.error('Category not found');
  }
}


function editTask(categoryId, taskId, updates) {
  const category = _utils_js__WEBPACK_IMPORTED_MODULE_0__.categories.find(category => category.id === categoryId);
  if (category) {
    const task = category.tasks.find(task => task.id === taskId);
    if (task) {
      // Iterate over the properties in updates and apply them to the task
      Object.keys(updates).forEach(key => {
        if(task.hasOwnProperty(key)) {
          task[key] = updates[key];
        }
      });

      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.categories);
    } else {
      console.error('Task not found');
    }
  } else {
    console.error('Category not found');
  }
}

// // Place this inside the UI function to handle task edits
// const updates = {
//   title: title, // Make this a requirement in UI code
//   description: description || '',
//   dueDate: dueDate || '',
//   priority: priority || 'priority-4'
// };



function toggleTaskStatus(categoryId, taskId) {
  const category = _utils_js__WEBPACK_IMPORTED_MODULE_0__.categories.find(category => category.id === categoryId);
  if (category) {
    const taskIndex = category.tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
      // Toggle the completion status
      category.tasks[taskIndex].isComplete = !category.tasks[taskIndex].isComplete;
      // Move the task to the correct position
      const task = category.tasks.splice(taskIndex, 1)[0];
      if (task.isComplete) {
        // Add the task to the beginning of the array for completed tasks
        category.tasks.unshift(task);
      } else {
        // Add the task to the end of the array for incomplete tasks
        category.tasks.push(task);
      }
      
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.updateLocalStorage)(_utils_js__WEBPACK_IMPORTED_MODULE_0__.categories);
    } else {
      console.error('Task not found');
    }
  } else {
    console.error('Category not found');
  }
}


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

// // Function to delete tasks by their unique ID
// export function deleteTask(taskId) {
//   const tasks = getTasksFromLocalStorage();
//   const updatedTasks = tasks.filter(task => task.id !== taskId);
//   saveTasksToLocalStorage(updatedTasks);
//   updateMyTasks(updatedTasks);

//   if (!showCompletedTasks) {
//     displayIncompleteTasks(updatedTasks);
//   } else {
//     displayAllTasks(updatedTasks);
//   }
// }


// export function toggleTaskComplete(taskId) {
//   // Operate on the latest tasks array from localStorage
//   const tasks = getTasksFromLocalStorage();
//   const taskIndex = tasks.findIndex(task => task.id === taskId);

//   if (taskIndex !== -1 && tasks[taskIndex].isComplete === false) {
//     tasks[taskIndex].isComplete = true;  
//     saveTasksToLocalStorage(tasks);
//     displayIncompleteTasks(tasks);

//   } else if (taskIndex !== -1 && tasks[taskIndex].isComplete === true) {
//     tasks[taskIndex].isComplete = false;
//     saveTasksToLocalStorage(tasks);
//     displayAllTasks(tasks);
//   }  
//     else {
//     console.error('Task not found');
//   }  
// }


/***/ }),

/***/ "./src/taskView.js":
/*!*************************!*\
  !*** ./src/taskView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearFormFields: () => (/* binding */ clearFormFields),
/* harmony export */   closeCreateTaskForm: () => (/* binding */ closeCreateTaskForm),
/* harmony export */   handleCheckBoxClick: () => (/* binding */ handleCheckBoxClick),
/* harmony export */   handleCreateProjectFormSubmission: () => (/* binding */ handleCreateProjectFormSubmission),
/* harmony export */   handleCreateTaskFormSubmission: () => (/* binding */ handleCreateTaskFormSubmission),
/* harmony export */   handleDeleteButtonClick: () => (/* binding */ handleDeleteButtonClick),
/* harmony export */   handleInboxCategoryClick: () => (/* binding */ handleInboxCategoryClick),
/* harmony export */   handleProjectCategoryClick: () => (/* binding */ handleProjectCategoryClick),
/* harmony export */   handleToggleCompletedTasksButtonClick: () => (/* binding */ handleToggleCompletedTasksButtonClick),
/* harmony export */   renderProjectsList: () => (/* binding */ renderProjectsList),
/* harmony export */   renderTasks: () => (/* binding */ renderTasks),
/* harmony export */   showCreateTaskForm: () => (/* binding */ showCreateTaskForm),
/* harmony export */   showEditTaskForm: () => (/* binding */ showEditTaskForm)
/* harmony export */ });
/* harmony import */ var _taskService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskService.js */ "./src/taskService.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
// src/taskView.js
// import { 
//   getTasksFromLocalStorage, 
//   createProject,
//   createTask, 
//   deleteTask, 
//   toggleTaskComplete, 
//   myTasks,
//   getTaskDetails,
// } from './taskService.js';




function renderProjectsList(categories) {
  // Get a reference to the project list element
  const projectList = document.querySelector('#project-list');
  
  // Clear the project list
  projectList.innerHTML = '';
  
  categories.forEach(category => {
    if (category.id !== 'inbox') {
      const li = document.createElement('li');
      li.classList.add('project-item');
      li.dataset.categoryId = category.id;
  
      const categoryItemButton = document.createElement('button');
      categoryItemButton.classList.add('project-button');
      categoryItemButton.dataset.categoryId = category.id;
      
      categoryItemButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" class="project_icon" style="color: rgb(184, 184, 184);"><path d="M12 7a5 5 0 110 10 5 5 0 010-10z" fill="currentColor"></path></svg>`
      const textNode = document.createTextNode(category.title);
      categoryItemButton.appendChild(textNode);
      li.appendChild(categoryItemButton);
      projectList.appendChild(li);
    }
  });
}

// Initial state for category view
let currentCategoryViewId = 'inbox';

// Initial state for whether completed tasks are shown
let showCompletedTasks = false;

function handleInboxCategoryClick() {
  const inboxOptionElement = document.querySelector('.inbox-button');
  inboxOptionElement.addEventListener('click', () => {
    const categoryId = inboxOptionElement.dataset.categoryId;
    const category = _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories.find(category => category.id === categoryId);
    const categoryHeaderTitle = document.querySelector('.category-title');

    if (currentCategoryViewId !== categoryId) {
      currentCategoryViewId = categoryId;
      categoryHeaderTitle.textContent = category.title;

      document.querySelectorAll('.project-button').forEach(button => {
        button.classList.remove('current');
      });

      inboxOptionElement.classList.add('current');

      // Close the create task form
      const createTaskFormElement = document.querySelector('.form-container');
      const addTaskButton = document.querySelector('.add-task-btn');
      if (getComputedStyle(createTaskFormElement).display !== 'flex') {
        createTaskFormElement.style.display = 'none';
        addTaskButton.style.display = 'flex';
        clearFormFields();
      } 

      // renderIncompleteTasks(categoryId, categories);
      renderTasks(categoryId, _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);
    }
  });
}

function handleProjectCategoryClick() {
  const projectListElement = document.querySelector('#project-list');
  projectListElement.addEventListener('click', (event) => {
    
    if (event.target.classList.contains('project-button')) {
      const categoryId = event.target.dataset.categoryId;
      const category = _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories.find(category => category.id === categoryId);
      const categoryHeaderTitle = document.querySelector('.category-title');

      if (currentCategoryViewId !== categoryId) {
        currentCategoryViewId = categoryId;
        categoryHeaderTitle.textContent = category.title;

        document.querySelectorAll('.project-button').forEach(button => {
          button.classList.remove('current');
        });

        document.querySelector('.inbox-button').classList.remove('current');

        event.target.classList.add('current');

        // Close the create task form
        const createTaskFormElement = document.querySelector('.form-container');
        const addTaskButton = document.querySelector('.add-task-btn');
        if (getComputedStyle(createTaskFormElement).display !== 'flex') {
          createTaskFormElement.style.display = 'none';
          addTaskButton.style.display = 'flex';
          clearFormFields();
        } 

        // renderIncompleteTasks(categoryId, categories);
        renderTasks(categoryId, _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);
      }
    }
  });
}


function renderTasks(categoryId, categories) {
  const category = categories.find(category => category.id === categoryId);
  if (category) {
    // Get a reference to the task list element
    const taskList = document.querySelector('#task-list');
    
    // Clear the task list
    taskList.innerHTML = '';

    if (showCompletedTasks) {
      // Display incomplete tasks…
      category.tasks.filter(task => !task.isComplete).forEach(task => {
        const taskItem = createTaskItemElement(task);
        taskList.appendChild(taskItem);
      });    
      // …then display completed tasks
      category.tasks.filter(task => task.isComplete).forEach(task => {
        const taskItem = createTaskItemElement(task);
        taskList.appendChild(taskItem);
      });    

    } else {
      // Display incomplete tasks only
      category.tasks.filter(task => !task.isComplete).forEach(task => {
        const taskItem = createTaskItemElement(task);
        taskList.appendChild(taskItem);
      });
    }    
  }
}


function createTaskItemElement(task) {
  const taskItemElement = document.createElement('li');            
  taskItemElement.classList.add('task-item');           
  taskItemElement.dataset.taskId = task.id; 
  
  // CHECKBOX ELEMENTS 
  const checkBoxDiv = document.createElement('div');
  const checkBoxButton = document.createElement('button');
  checkBoxButton.classList.add('checkbox-btn');        
  if (task.isComplete) {
    checkBoxButton.classList.add('checked');
  }
  checkBoxButton.innerHTML += `<svg class="checkmark-icon${task.isComplete ? ' checked' : ''}" data-task-id="${task.id}" width="24" height="24"><path fill="#fff" d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path></svg>`        
  checkBoxDiv.appendChild(checkBoxButton);
  
  // TASK ELEMENTS
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task-content');                
  
  // Title
  const titleWrapperDiv = document.createElement('div');
  titleWrapperDiv.classList.add('task-title-wrapper');                
  
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('title');
  if (task.isComplete) {
    titleDiv.classList.add('checked');
  }
  titleDiv.textContent = task.title;
  
  // Edit and Delete buttons
  const buttonsDiv = document.createElement('div');
  let editButton = '';
  if (!task.isComplete) {
    editButton = createButton('Edit', 'edit-btn', task.id);  
  }              
  const deleteButton = createButton('Delete', 'delete-btn', task.id);                
  
  buttonsDiv.append(editButton, deleteButton);
  titleWrapperDiv.append(titleDiv, buttonsDiv);        
  taskDiv.appendChild(titleWrapperDiv);

  // Description
  if (task.description) {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');
    descriptionDiv.textContent = task.description;
    taskDiv.appendChild(descriptionDiv);
  }

  // Due date
  if (task.dueDate) {
    const dueDateDiv = document.createElement('div');
    dueDateDiv.classList.add('due-date');
    dueDateDiv.textContent = task.dueDate;
    taskDiv.appendChild(dueDateDiv);
  }
  
  taskItemElement.append(checkBoxDiv, taskDiv);    
  
  return taskItemElement;
}


function createButton(text, className, taskId) {
  const button = document.createElement('button');
  button.textContent = text;
  button.classList.add(className, 'btn');
  button.dataset.taskId = taskId;
  return button;
}


function handleCreateTaskFormSubmission() {
  document.querySelector('#create-task').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Set the category ID to the current view
    const categoryId = currentCategoryViewId;
    
    // Get values from the form fields
    const category = document.querySelector('#project').value;
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#due-date').value;
    const priority = document.querySelector('#priority').value;
    
    // Create a new task object and add it to the database
    (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(categoryId, title, description, dueDate, priority);
    clearFormFields();

    renderTasks(categoryId, _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);

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
    (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.createCategory)(title);

    renderProjectsList(_utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);

    // Clear fields and close the modal
    clearFormFields();
    projectDialog.close();
  });
}

function clearFormFields() {
  document.querySelector('#create-task').reset();
  document.querySelector('#create-project-form').reset();
  // document.querySelector('#edit-task').reset();
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

    if (getComputedStyle(addTaskForm).display !== 'none' && getComputedStyle(addProjectModal).display === 'none') {
      addTaskSubmitButton.click();
    } else if (getComputedStyle(addProjectModal).display !== 'none') {
      addProjectSubmitButton.click();
      addProjectModal.close();
    }
  }
});


function handleCheckBoxClick() {
  const taskListElement = document.querySelector('#task-list');
  taskListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkmark-icon')) {
      
      // Get the category ID
      const categoryId = currentCategoryViewId;

      // Get the task ID 
      const taskId = event.target.dataset.taskId;

      // Update isComplete property
      (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.toggleTaskStatus)(categoryId, taskId);

      renderTasks(categoryId, _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);
    }
  });
}


function handleDeleteButtonClick() {
  const taskListElement = document.querySelector('#task-list');
  taskListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {

      // Get the category ID
      const categoryId = currentCategoryViewId;
      
      // Get the task ID 
      const taskId = event.target.dataset.taskId;

      // Update isComplete property
      (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.deleteTaskFromCategory)(categoryId, taskId);

      renderTasks(categoryId, _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);
    }
  });
}


function handleToggleCompletedTasksButtonClick() {
  const toggleCompletedTasksBtn = document.querySelector('.toggle-completed-tasks-btn');
  toggleCompletedTasksBtn.addEventListener('click', () => {
    const categoryId = currentCategoryViewId;
    showCompletedTasks = !showCompletedTasks;
    if (showCompletedTasks) {
      toggleCompletedTasksBtn.textContent = 'Hide completed tasks';
    } else {
      toggleCompletedTasksBtn.textContent = 'Show completed tasks';
    }
    renderTasks(categoryId, _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);
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

// closeEditTaskModalButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   editTaskDialog.close();
// });


function showEditTaskForm() {
  document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.querySelector('#task-list');
    taskList.addEventListener('click', (event) => {
      if (event.target.classList.contains('edit-btn')) {
        editTaskDialog.showModal();    

        // Get the task ID 
        const taskId = event.target.dataset.taskId;
        displayTaskDetails(taskId);
      }
    });  
  });
}

function displayTaskDetails(taskId) {
  // Get a reference to the task list element
  const editTaskForm = document.querySelector('#edit-task');

  const task = getTaskDetails(taskId);
  
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

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categories: () => (/* binding */ categories),
/* harmony export */   getStoredTasks: () => (/* binding */ getStoredTasks),
/* harmony export */   updateCategories: () => (/* binding */ updateCategories),
/* harmony export */   updateLocalStorage: () => (/* binding */ updateLocalStorage)
/* harmony export */ });
// src/utils.js

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


function getStoredTasks() {
  const storedTasks = localStorage.getItem('taskCategories');
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return [];// Return empty array if nothing in localStorage to avoid error
}


function updateLocalStorage(categories) {
  localStorage.setItem('taskCategories', JSON.stringify(categories));
}


function updateCategories(storedTasks) {
  // Clear out the tasks
  categories.length = 0;

  // Add the new tasks
  storedTasks.forEach(category => categories.push(category));
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
/* harmony import */ var _taskView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskView.js */ "./src/taskView.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
// src/index.js


// import { 
//   updateMyTasks,
//   myTasks, 
//   getTasksFromLocalStorage, 
//   saveTasksToLocalStorage,
//   getProjectsFromLocalStorage,
//   saveProjectsToLocalStorage,
//   myProjects,
//   updateMyProjects, 
// } from './taskService';







function initializeEventListeners() {
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.showCreateTaskForm)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.closeCreateTaskForm)();
//   showEditTaskForm();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleCreateProjectFormSubmission)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleCreateTaskFormSubmission)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleToggleCompletedTasksButtonClick)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleCheckBoxClick)(); // Comment out if issues and uncomment below
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleDeleteButtonClick)(); // Comment out if issues and uncomment below
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleInboxCategoryClick)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleProjectCategoryClick)();
}

function initializeApp() {
  // Check if there are tasks in localStorage
  let storedTasks = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getStoredTasks)();

  // If there are no stored tasks, use default tasks and save them to localStorage
  if (storedTasks.length === 0) {
    (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.updateLocalStorage)(_utils_js__WEBPACK_IMPORTED_MODULE_2__.categories);
    storedTasks = [..._utils_js__WEBPACK_IMPORTED_MODULE_2__.categories];
  }

  // Update the contents of myTasks instead of reassigning it
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.updateCategories)(storedTasks);

  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectsList)(storedTasks);
  // renderIncompleteTasks('inbox', storedTasks);
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.renderTasks)('inbox', storedTasks);
  initializeEventListeners();
}

initializeApp();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHlGQUF5RixZQUFZLEtBQUssWUFBWSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxRQUFRLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsU0FBUyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxZQUFZLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFNBQVMsVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFh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V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFFcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBZWtCOztBQU9IOzs7QUFHcEI7QUFDQSxFQUFFLGdFQUFrQjtBQUNwQixFQUFFLGlFQUFtQjtBQUNyQjtBQUNBLEVBQUUsK0VBQWlDO0FBQ25DLEVBQUUsNEVBQThCO0FBQ2hDLEVBQUUsbUZBQXFDO0FBQ3ZDLEVBQUUsaUVBQW1CLElBQUk7QUFDekIsRUFBRSxxRUFBdUIsSUFBSTtBQUM3QixFQUFFLHNFQUF3QjtBQUMxQixFQUFFLHdFQUEwQjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLHlEQUFjOztBQUVsQztBQUNBO0FBQ0EsSUFBSSw2REFBa0IsQ0FBQyxpREFBVTtBQUNqQyxzQkFBc0IsaURBQVU7QUFDaEM7O0FBRUE7QUFDQSxFQUFFLDJEQUFnQjs7QUFFbEIsRUFBRSxnRUFBa0I7QUFDcEI7QUFDQSxFQUFFLHlEQUFXO0FBQ2I7QUFDQTs7QUFFQSxnQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Rhc2tTZXJ2aWNlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Rhc2tWaWV3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBzcmMvc3R5bGUuY3NzICovXG5cblxuLyogR0xPQkFMICovXG5cbioge1xuICAvKiBvdXRsaW5lOiAxcHggc29saWQgbGlnaHR5ZWxsb3c7ICovXG4gIG1hcmdpbjogMDtcblxufVxuXG4jZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4cmVtIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogM3JlbSAxMDB2aDtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiAjRTJFMkUyO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcblxufVxuXG51bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xufVxuXG4uYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjIwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24uY3VycmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG59XG5cblxuLyogVE9QIEJBUiAqL1xuLnRvcC1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcmVtO1xuICB6LWluZGV4OiAxO1xufVxuXG4udG9wLWJhci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAuNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG5cbi5ob21lLWJ0bixcbi5tZW51LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IC4yNXJlbTtcbn1cblxuLmhvbWUtYnRuOmhvdmVyLFxuLm1lbnUtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4yMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5cbi8qIExFRlQgTUVOVSAqL1xuLmxlZnQtbWVudS1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDQ4cHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDhweCk7XG4gIHdpZHRoOiAxOHJlbTtcbn1cblxuLmxlZnQtbWVudS13cmFwcGVyIHtcbiAgbWFyZ2luOiAyLjVyZW0gMS41cmVtIDAgMnJlbTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5pbmJveC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IC41cmVtO1xufVxuXG4uaW5ib3gtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdHMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNwcm9qZWN0LWxpc3QgbGkge1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLnByb2plY3QtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogLjVyZW07XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1wcm9qZWN0LWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogLjVyZW07XG4gIHBhZGRpbmc6IDVweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjApO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG4vKiBNQUlOICovXG4ubWFpbi1jb250YWluZXIge1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGdyaWQtcm93OiAyIC8gMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUxRTtcbn1cblxuLm1haW4td3JhcHBlciB7XG4gIG1heC13aWR0aDogNTByZW07XG4gIG1hcmdpbjogM3JlbSBhdXRvO1xuICBwYWRkaW5nOiAwIDJyZW07XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMnJlbSAwIDFyZW07XG59XG5cblxuLnRvZ2dsZS1jb21wbGV0ZWQtdGFza3MtYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcbn1cblxuLnRvZ2dsZS1jb21wbGV0ZWQtdGFza3MtYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjIwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAuNzVyZW0gMCAuNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1OCwgNTgsIDU4KTtcbn1cblxuLnRhc2stY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFzay10aXRsZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNoZWNrYm94LWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4OTg5ODtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbn1cblxuLmNoZWNrYm94LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNoZWNrbWFyay1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zcHg7XG4gIHJpZ2h0OiAtM3B4O1xufVxuXG4uY2hlY2tib3gtYnRuIC5jaGVja21hcmstaWNvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmNoZWNrYm94LWJ0bjpob3ZlciAuY2hlY2ttYXJrLWljb24ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uY2hlY2tib3gtYnRuLmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5ODk4O1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uY2hlY2ttYXJrLWljb24uY2hlY2tlZCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5hZGQtdGFzay1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IC41cmVtO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjApO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogLjVyZW07XG59XG5cbi5hZGQtdGFzay1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG59XG5cbi50aXRsZS5jaGVja2VkIHtcbiAgY29sb3I6ICM3ZjdmN2Y7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XG4gIGNvbG9yOiAjOGY4ZjhmO1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmR1ZS1kYXRlIHtcbiAgZm9udC1zaXplOiAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuXG4uZGVsZXRlLWJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbn1cblxuXG5cblxuXG4vKiBGT1JNICovXG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb3JtLWNvbnRhaW5lcj5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmc6IC41cmVtIC41cmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgaGVpZ2h0OiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9ybS1vcHRpb25zIHtcbiAgbWFyZ2luOiAuNXJlbSAwO1xufVxuXG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZvcm0tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xuICBwYWRkaW5nOiAuNzVyZW0gMDtcbn1cblxuLmNhbmNlbC1idG4sXG4uc3VibWl0LWJ0biB7XG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjRBO1xuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xufVxuXG5zZWxlY3Qge1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI2R1ZS1kYXRlIHtcbiAgcGFkZGluZzogMCAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcbiAgZmlsdGVyOiBpbnZlcnQoNDUlKSBodWUtcm90YXRlKDE4MGRlZyk7XG59XG5cblxuXG5cbi8qIE1PREFMICovXG5cbmRpYWxvZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRTFFMUU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDEwcmVtIGF1dG87XG59XG5cbiNwcm9qZWN0LXRpdGxlLWlucHV0IHtcbiAgaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2IzYjNiO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jY3JlYXRlLXByb2plY3QtZm9ybSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYWRkLXByb2plY3QtbW9kYWwtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm1vZGFsLWJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IC41cmVtO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLmNsb3NlLW1vZGFsLWJ0bixcbi5hZGQtcHJvamVjdC10by1saXN0IHtcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmFkZC1wcm9qZWN0LXRvLWxpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjRBO1xuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xufVxuXG46OmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuXG5cblxuLyogVVBEQVRFIFRBU0sgTU9EQUwgKi9cblxuLmZvcm0tY29udGFpbmVyLW1vZGFsIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDYwMHB4O1xufVxuXG4uZm9ybS1jb250YWluZXItbW9kYWw+Zm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjs7O0FBR2xCLFdBQVc7O0FBRVg7RUFDRSxvQ0FBb0M7RUFDcEMsU0FBUzs7QUFFWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1EQUFtRDtFQUNuRCxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFHQSxZQUFZO0FBQ1o7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSx5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7OztBQUlBLGNBQWM7QUFDZDtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtF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XCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHNyYy9zdHlsZS5jc3MgKi9cXG5cXG5cXG4vKiBHTE9CQUwgKi9cXG5cXG4qIHtcXG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodHllbGxvdzsgKi9cXG4gIG1hcmdpbjogMDtcXG5cXG59XFxuXFxuI2dyaWQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE4cmVtIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW0gMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6ICNFMkUyRTI7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuXFxufVxcblxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5idG4ge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcXG59XFxuXFxuLmJ0bjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24uY3VycmVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbn1cXG5cXG5cXG4vKiBUT1AgQkFSICovXFxuLnRvcC1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udG9wLWJhci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG5cXG4uaG9tZS1idG4sXFxuLm1lbnUtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAuMjVyZW07XFxufVxcblxcbi5ob21lLWJ0bjpob3ZlcixcXG4ubWVudS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4yMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcbi8qIExFRlQgTUVOVSAqL1xcbi5sZWZ0LW1lbnUtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDQ4cHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xcbiAgd2lkdGg6IDE4cmVtO1xcbn1cXG5cXG4ubGVmdC1tZW51LXdyYXBwZXIge1xcbiAgbWFyZ2luOiAyLjVyZW0gMS41cmVtIDAgMnJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLmluYm94LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLmluYm94LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdHMtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdC1saXN0IGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogLjVyZW07XFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IC41cmVtO1xcbiAgcGFkZGluZzogNXB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcbi8qIE1BSU4gKi9cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUxRTtcXG59XFxuXFxuLm1haW4td3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgbWFyZ2luOiAzcmVtIGF1dG87XFxuICBwYWRkaW5nOiAwIDJyZW07XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAycmVtIDAgMXJlbTtcXG59XFxuXFxuXFxuLnRvZ2dsZS1jb21wbGV0ZWQtdGFza3MtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcXG59XFxuXFxuLnRvZ2dsZS1jb21wbGV0ZWQtdGFza3MtYnRuOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4yMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IC43NXJlbSAwIC41cmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYig1OCwgNTgsIDU4KTtcXG59XFxuXFxuLnRhc2stY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzay10aXRsZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jaGVja2JveC1idG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTg5ODk4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrbWFyay1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTNweDtcXG4gIHJpZ2h0OiAtM3B4O1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuIC5jaGVja21hcmstaWNvbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5jaGVja2JveC1idG46aG92ZXIgLmNoZWNrbWFyay1pY29uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5jaGVja2JveC1idG4uY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTg5ODk4O1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmNoZWNrbWFyay1pY29uLmNoZWNrZWQge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAuNXJlbTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5cXG4uYWRkLXRhc2stYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS43NTtcXG59XFxuXFxuLnRpdGxlLmNoZWNrZWQge1xcbiAgY29sb3I6ICM3ZjdmN2Y7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IC43NXJlbTtcXG4gIGNvbG9yOiAjOGY4ZjhmO1xcbiAgZm9udC1zaXplOiAuNzVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcbiAgZm9udC1zaXplOiAuNzVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRk9STSAqL1xcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXI+Zm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuZm9ybSB7XFxuICBwYWRkaW5nOiAuNXJlbSAuNXJlbSAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5mb3JtLW9wdGlvbnMge1xcbiAgbWFyZ2luOiAuNXJlbSAwO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZm9ybS1mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XFxuICBwYWRkaW5nOiAuNzVyZW0gMDtcXG59XFxuXFxuLmNhbmNlbC1idG4sXFxuLnN1Ym1pdC1idG4ge1xcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdWJtaXQtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCNEE7XFxuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgcGFkZGluZzogLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4jZHVlLWRhdGUge1xcbiAgcGFkZGluZzogMCAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDQ1JSkgaHVlLXJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBNT0RBTCAqL1xcblxcbmRpYWxvZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiAxMHJlbSBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZS1pbnB1dCB7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiM2IzYjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NyZWF0ZS1wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtbW9kYWwtdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb2RhbC1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWwtYnRuLFxcbi5hZGQtcHJvamVjdC10by1saXN0IHtcXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtdG8tbGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjRBO1xcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcXG59XFxuXFxuOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuXFxuXFxuXFxuLyogVVBEQVRFIFRBU0sgTU9EQUwgKi9cXG5cXG4uZm9ybS1jb250YWluZXItbW9kYWwge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiA2MDBweDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyLW1vZGFsPmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIHNyYy90YXNrU2VydmljZS5qc1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcblxuaW1wb3J0IHsgXG4gIGNhdGVnb3JpZXMsXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSxcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmltcG9ydCB7IFxuICBkaXNwbGF5SW5jb21wbGV0ZVRhc2tzLCBcbiAgY2xlYXJGb3JtRmllbGRzLCBcbiAgZGlzcGxheUFsbFRhc2tzLCBcbiAgZGlzcGxheVByb2plY3RzLFxuICByZW5kZXJJbmNvbXBsZXRlVGFza3MsXG59IGZyb20gXCIuL3Rhc2tWaWV3LmpzXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KHRpdGxlKSB7XG4gIGNvbnN0IG5ld0NhdGVnb3J5ID0ge1xuICAgIGlkOiB1dWlkdjQoKSxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgdGFza3M6IFtdXG4gIH07XG5cbiAgY2F0ZWdvcmllcy5wdXNoKG5ld0NhdGVnb3J5KTtcbiAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKGNhdGVnb3J5SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiA9ICcnLCBkdWVEYXRlID0gJycsIHByaW9yaXR5ID0gJ3ByaW9yaXR5LTQnLCBpc0NvbXBsZXRlID0gZmFsc2UpIHtcbiAgY29uc3QgbmV3VGFzayA9IHtcbiAgICBpZDogdXVpZHY0KCksXG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICBpc0NvbXBsZXRlOiBpc0NvbXBsZXRlLFxuICB9O1xuICBcbiAgY29uc29sZS5sb2cobmV3VGFzayk7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmlkID09PSBjYXRlZ29yeUlkKTtcbiAgaWYgKGNhdGVnb3J5KSB7XG4gICAgY2F0ZWdvcnkudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoY2F0ZWdvcmllcyk7ICBcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeShjYXRlZ29yeUlkKSB7XG4gIGNvbnN0IHVwZGF0ZWRDYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgIT09IGNhdGVnb3J5SWQpO1xuICBjYXRlZ29yaWVzID0gdXBkYXRlZENhdGVnb3JpZXM7XG4gIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21DYXRlZ29yeShjYXRlZ29yeUlkLCB0YXNrSWQpIHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICBpZiAoY2F0ZWdvcnkpIHtcbiAgICBjb25zdCB1cGRhdGVkVGFza3MgPSBjYXRlZ29yeS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlkICE9PSB0YXNrSWQpO1xuICAgIGNhdGVnb3J5LnRhc2tzID0gdXBkYXRlZFRhc2tzO1xuXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpOyAgXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gIH1cbn1cblxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgYSB0YXNrXG5leHBvcnQgZnVuY3Rpb24gZWRpdENhdGVnb3J5KGNhdGVnb3J5SWQsIHVwZGF0ZWRUaXRsZSkge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gIGlmIChjYXRlZ29yeSkge1xuICAgIGNhdGVnb3J5LnRpdGxlID0gdXBkYXRlZFRpdGxlO1xuXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NhdGVnb3J5IG5vdCBmb3VuZCcpO1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrKGNhdGVnb3J5SWQsIHRhc2tJZCwgdXBkYXRlcykge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gIGlmIChjYXRlZ29yeSkge1xuICAgIGNvbnN0IHRhc2sgPSBjYXRlZ29yeS50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcbiAgICBpZiAodGFzaykge1xuICAgICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBwcm9wZXJ0aWVzIGluIHVwZGF0ZXMgYW5kIGFwcGx5IHRoZW0gdG8gdGhlIHRhc2tcbiAgICAgIE9iamVjdC5rZXlzKHVwZGF0ZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYodGFzay5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdGFza1trZXldID0gdXBkYXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUYXNrIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgfVxufVxuXG4vLyAvLyBQbGFjZSB0aGlzIGluc2lkZSB0aGUgVUkgZnVuY3Rpb24gdG8gaGFuZGxlIHRhc2sgZWRpdHNcbi8vIGNvbnN0IHVwZGF0ZXMgPSB7XG4vLyAgIHRpdGxlOiB0aXRsZSwgLy8gTWFrZSB0aGlzIGEgcmVxdWlyZW1lbnQgaW4gVUkgY29kZVxuLy8gICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfHwgJycsXG4vLyAgIGR1ZURhdGU6IGR1ZURhdGUgfHwgJycsXG4vLyAgIHByaW9yaXR5OiBwcmlvcml0eSB8fCAncHJpb3JpdHktNCdcbi8vIH07XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVGFza1N0YXR1cyhjYXRlZ29yeUlkLCB0YXNrSWQpIHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICBpZiAoY2F0ZWdvcnkpIHtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBjYXRlZ29yeS50YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XG4gICAgICAvLyBUb2dnbGUgdGhlIGNvbXBsZXRpb24gc3RhdHVzXG4gICAgICBjYXRlZ29yeS50YXNrc1t0YXNrSW5kZXhdLmlzQ29tcGxldGUgPSAhY2F0ZWdvcnkudGFza3NbdGFza0luZGV4XS5pc0NvbXBsZXRlO1xuICAgICAgLy8gTW92ZSB0aGUgdGFzayB0byB0aGUgY29ycmVjdCBwb3NpdGlvblxuICAgICAgY29uc3QgdGFzayA9IGNhdGVnb3J5LnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpWzBdO1xuICAgICAgaWYgKHRhc2suaXNDb21wbGV0ZSkge1xuICAgICAgICAvLyBBZGQgdGhlIHRhc2sgdG8gdGhlIGJlZ2lubmluZyBvZiB0aGUgYXJyYXkgZm9yIGNvbXBsZXRlZCB0YXNrc1xuICAgICAgICBjYXRlZ29yeS50YXNrcy51bnNoaWZ0KHRhc2spO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQWRkIHRoZSB0YXNrIHRvIHRoZSBlbmQgb2YgdGhlIGFycmF5IGZvciBpbmNvbXBsZXRlIHRhc2tzXG4gICAgICAgIGNhdGVnb3J5LnRhc2tzLnB1c2godGFzayk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVGFzayBub3QgZm91bmQnKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gIH1cbn1cblxuXG4vLyAvLyBGdW5jdGlvbiB0byBjcmVhdGUgcHJvamVjdHNcbi8vIGNsYXNzIFByb2plY3Qge1xuLy8gICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUpIHtcbi8vICAgICB0aGlzLmlkID0gaWQ7XG4vLyAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuLy8gICB9XG4vLyB9XG5cbi8vIC8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSB0YXNrc1xuLy8gY2xhc3MgVGFzayB7XG4vLyAgIGNvbnN0cnVjdG9yKGlkLCBjYXRlZ29yeSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZSA9IGZhbHNlKSB7XG4vLyAgICAgdGhpcy5pZCA9IGlkO1xuLy8gICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbi8vICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4vLyAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuLy8gICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4vLyAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuLy8gICAgIHRoaXMuaXNDb21wbGV0ZSA9IGlzQ29tcGxldGU7XG4vLyAgIH1cbi8vIH1cblxuLyogQ1JFQVRFIExPR0lDICovXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKGNhdGVnb3J5LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKSB7XG4vLyAgIC8vIEdlbmVyYXRlIHVuaXF1ZSBJRCBmb3IgdGhlIHRhc2tcbi8vICAgY29uc3QgaWQgPSB1dWlkdjQoKTtcblxuLy8gICAvLyBDcmVhdGUgYSBuZXcgdGFzayB1c2luZyB0aGUgVGFzayBjbGFzc1xuLy8gICBjb25zdCB0YXNrID0gbmV3IFRhc2soaWQsIGNhdGVnb3J5LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlKTtcblxuLy8gICBteVRhc2tzLnB1c2godGFzaylcbi8vICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UobXlUYXNrcyk7XG5cbi8vICAgLy8gVXBkYXRlIHRoZSBVSVxuLy8gICBkaXNwbGF5SW5jb21wbGV0ZVRhc2tzKG15VGFza3MpO1xuXG4vLyAgIC8vIENsZWFyIHRoZSBmb3JtIGZpZWxkc1xuLy8gICBjbGVhckZvcm1GaWVsZHMoKTtcbi8vIH1cblxuXG4vKiBERUxFVEUgTE9HSUMgKi9cblxuLy8gLy8gRnVuY3Rpb24gdG8gZGVsZXRlIHRhc2tzIGJ5IHRoZWlyIHVuaXF1ZSBJRFxuLy8gZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4vLyAgIGNvbnN0IHRhc2tzID0gZ2V0VGFza3NGcm9tTG9jYWxTdG9yYWdlKCk7XG4vLyAgIGNvbnN0IHVwZGF0ZWRUYXNrcyA9IHRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4vLyAgIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKHVwZGF0ZWRUYXNrcyk7XG4vLyAgIHVwZGF0ZU15VGFza3ModXBkYXRlZFRhc2tzKTtcblxuLy8gICBpZiAoIXNob3dDb21wbGV0ZWRUYXNrcykge1xuLy8gICAgIGRpc3BsYXlJbmNvbXBsZXRlVGFza3ModXBkYXRlZFRhc2tzKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBkaXNwbGF5QWxsVGFza3ModXBkYXRlZFRhc2tzKTtcbi8vICAgfVxuLy8gfVxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUYXNrQ29tcGxldGUodGFza0lkKSB7XG4vLyAgIC8vIE9wZXJhdGUgb24gdGhlIGxhdGVzdCB0YXNrcyBhcnJheSBmcm9tIGxvY2FsU3RvcmFnZVxuLy8gICBjb25zdCB0YXNrcyA9IGdldFRhc2tzRnJvbUxvY2FsU3RvcmFnZSgpO1xuLy8gICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4vLyAgIGlmICh0YXNrSW5kZXggIT09IC0xICYmIHRhc2tzW3Rhc2tJbmRleF0uaXNDb21wbGV0ZSA9PT0gZmFsc2UpIHtcbi8vICAgICB0YXNrc1t0YXNrSW5kZXhdLmlzQ29tcGxldGUgPSB0cnVlOyAgXG4vLyAgICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UodGFza3MpO1xuLy8gICAgIGRpc3BsYXlJbmNvbXBsZXRlVGFza3ModGFza3MpO1xuXG4vLyAgIH0gZWxzZSBpZiAodGFza0luZGV4ICE9PSAtMSAmJiB0YXNrc1t0YXNrSW5kZXhdLmlzQ29tcGxldGUgPT09IHRydWUpIHtcbi8vICAgICB0YXNrc1t0YXNrSW5kZXhdLmlzQ29tcGxldGUgPSBmYWxzZTtcbi8vICAgICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSh0YXNrcyk7XG4vLyAgICAgZGlzcGxheUFsbFRhc2tzKHRhc2tzKTtcbi8vICAgfSAgXG4vLyAgICAgZWxzZSB7XG4vLyAgICAgY29uc29sZS5lcnJvcignVGFzayBub3QgZm91bmQnKTtcbi8vICAgfSAgXG4vLyB9XG4iLCIvLyBzcmMvdGFza1ZpZXcuanNcbi8vIGltcG9ydCB7IFxuLy8gICBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UsIFxuLy8gICBjcmVhdGVQcm9qZWN0LFxuLy8gICBjcmVhdGVUYXNrLCBcbi8vICAgZGVsZXRlVGFzaywgXG4vLyAgIHRvZ2dsZVRhc2tDb21wbGV0ZSwgXG4vLyAgIG15VGFza3MsXG4vLyAgIGdldFRhc2tEZXRhaWxzLFxuLy8gfSBmcm9tICcuL3Rhc2tTZXJ2aWNlLmpzJztcblxuaW1wb3J0IHtcbiAgY3JlYXRlQ2F0ZWdvcnksXG4gIGNyZWF0ZVRhc2ssXG4gIGRlbGV0ZUNhdGVnb3J5LFxuICBkZWxldGVUYXNrRnJvbUNhdGVnb3J5LFxuICBlZGl0Q2F0ZWdvcnksXG4gIGVkaXRUYXNrLFxuICB0b2dnbGVUYXNrU3RhdHVzLFxufSBmcm9tICcuL3Rhc2tTZXJ2aWNlLmpzJztcbmltcG9ydCB7IGNhdGVnb3JpZXMgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzTGlzdChjYXRlZ29yaWVzKSB7XG4gIC8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgcHJvamVjdCBsaXN0IGVsZW1lbnRcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1saXN0Jyk7XG4gIFxuICAvLyBDbGVhciB0aGUgcHJvamVjdCBsaXN0XG4gIHByb2plY3RMaXN0LmlubmVySFRNTCA9ICcnO1xuICBcbiAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICBpZiAoY2F0ZWdvcnkuaWQgIT09ICdpbmJveCcpIHtcbiAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuICAgICAgbGkuZGF0YXNldC5jYXRlZ29yeUlkID0gY2F0ZWdvcnkuaWQ7XG4gIFxuICAgICAgY29uc3QgY2F0ZWdvcnlJdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjYXRlZ29yeUl0ZW1CdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idXR0b24nKTtcbiAgICAgIGNhdGVnb3J5SXRlbUJ1dHRvbi5kYXRhc2V0LmNhdGVnb3J5SWQgPSBjYXRlZ29yeS5pZDtcbiAgICAgIFxuICAgICAgY2F0ZWdvcnlJdGVtQnV0dG9uLmlubmVySFRNTCA9IGA8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBjbGFzcz1cInByb2plY3RfaWNvblwiIHN0eWxlPVwiY29sb3I6IHJnYigxODQsIDE4NCwgMTg0KTtcIj48cGF0aCBkPVwiTTEyIDdhNSA1IDAgMTEwIDEwIDUgNSAwIDAxMC0xMHpcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+PC9wYXRoPjwvc3ZnPmBcbiAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2F0ZWdvcnkudGl0bGUpO1xuICAgICAgY2F0ZWdvcnlJdGVtQnV0dG9uLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKGNhdGVnb3J5SXRlbUJ1dHRvbik7XG4gICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gSW5pdGlhbCBzdGF0ZSBmb3IgY2F0ZWdvcnkgdmlld1xubGV0IGN1cnJlbnRDYXRlZ29yeVZpZXdJZCA9ICdpbmJveCc7XG5cbi8vIEluaXRpYWwgc3RhdGUgZm9yIHdoZXRoZXIgY29tcGxldGVkIHRhc2tzIGFyZSBzaG93blxubGV0IHNob3dDb21wbGV0ZWRUYXNrcyA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlSW5ib3hDYXRlZ29yeUNsaWNrKCkge1xuICBjb25zdCBpbmJveE9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtYnV0dG9uJyk7XG4gIGluYm94T3B0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeUlkID0gaW5ib3hPcHRpb25FbGVtZW50LmRhdGFzZXQuY2F0ZWdvcnlJZDtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gICAgY29uc3QgY2F0ZWdvcnlIZWFkZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10aXRsZScpO1xuXG4gICAgaWYgKGN1cnJlbnRDYXRlZ29yeVZpZXdJZCAhPT0gY2F0ZWdvcnlJZCkge1xuICAgICAgY3VycmVudENhdGVnb3J5Vmlld0lkID0gY2F0ZWdvcnlJZDtcbiAgICAgIGNhdGVnb3J5SGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeS50aXRsZTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtYnV0dG9uJykuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgfSk7XG5cbiAgICAgIGluYm94T3B0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cbiAgICAgIC8vIENsb3NlIHRoZSBjcmVhdGUgdGFzayBmb3JtXG4gICAgICBjb25zdCBjcmVhdGVUYXNrRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250YWluZXInKTtcbiAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShjcmVhdGVUYXNrRm9ybUVsZW1lbnQpLmRpc3BsYXkgIT09ICdmbGV4Jykge1xuICAgICAgICBjcmVhdGVUYXNrRm9ybUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBjbGVhckZvcm1GaWVsZHMoKTtcbiAgICAgIH0gXG5cbiAgICAgIC8vIHJlbmRlckluY29tcGxldGVUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgICAgIHJlbmRlclRhc2tzKGNhdGVnb3J5SWQsIGNhdGVnb3JpZXMpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQcm9qZWN0Q2F0ZWdvcnlDbGljaygpIHtcbiAgY29uc3QgcHJvamVjdExpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICBwcm9qZWN0TGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1idXR0b24nKSkge1xuICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNhdGVnb3J5SWQ7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gICAgICBjb25zdCBjYXRlZ29yeUhlYWRlclRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXRpdGxlJyk7XG5cbiAgICAgIGlmIChjdXJyZW50Q2F0ZWdvcnlWaWV3SWQgIT09IGNhdGVnb3J5SWQpIHtcbiAgICAgICAgY3VycmVudENhdGVnb3J5Vmlld0lkID0gY2F0ZWdvcnlJZDtcbiAgICAgICAgY2F0ZWdvcnlIZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IGNhdGVnb3J5LnRpdGxlO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWJ1dHRvbicpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtYnV0dG9uJykuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xuXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cbiAgICAgICAgLy8gQ2xvc2UgdGhlIGNyZWF0ZSB0YXNrIGZvcm1cbiAgICAgICAgY29uc3QgY3JlYXRlVGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGNyZWF0ZVRhc2tGb3JtRWxlbWVudCkuZGlzcGxheSAhPT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgY3JlYXRlVGFza0Zvcm1FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgIGNsZWFyRm9ybUZpZWxkcygpO1xuICAgICAgICB9IFxuXG4gICAgICAgIC8vIHJlbmRlckluY29tcGxldGVUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgICAgICAgcmVuZGVyVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcykge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gIGlmIChjYXRlZ29yeSkge1xuICAgIC8vIEdldCBhIHJlZmVyZW5jZSB0byB0aGUgdGFzayBsaXN0IGVsZW1lbnRcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICBcbiAgICAvLyBDbGVhciB0aGUgdGFzayBsaXN0XG4gICAgdGFza0xpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBpZiAoc2hvd0NvbXBsZXRlZFRhc2tzKSB7XG4gICAgICAvLyBEaXNwbGF5IGluY29tcGxldGUgdGFza3PigKZcbiAgICAgIGNhdGVnb3J5LnRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmlzQ29tcGxldGUpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gY3JlYXRlVGFza0l0ZW1FbGVtZW50KHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICB9KTsgICAgXG4gICAgICAvLyDigKZ0aGVuIGRpc3BsYXkgY29tcGxldGVkIHRhc2tzXG4gICAgICBjYXRlZ29yeS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlzQ29tcGxldGUpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gY3JlYXRlVGFza0l0ZW1FbGVtZW50KHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICB9KTsgICAgXG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGlzcGxheSBpbmNvbXBsZXRlIHRhc2tzIG9ubHlcbiAgICAgIGNhdGVnb3J5LnRhc2tzLmZpbHRlcih0YXNrID0+ICF0YXNrLmlzQ29tcGxldGUpLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gY3JlYXRlVGFza0l0ZW1FbGVtZW50KHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICB9KTtcbiAgICB9ICAgIFxuICB9XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFza0l0ZW1FbGVtZW50KHRhc2spIHtcbiAgY29uc3QgdGFza0l0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgICAgICAgICAgICBcbiAgdGFza0l0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpOyAgICAgICAgICAgXG4gIHRhc2tJdGVtRWxlbWVudC5kYXRhc2V0LnRhc2tJZCA9IHRhc2suaWQ7IFxuICBcbiAgLy8gQ0hFQ0tCT1ggRUxFTUVOVFMgXG4gIGNvbnN0IGNoZWNrQm94RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNoZWNrQm94QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNoZWNrQm94QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94LWJ0bicpOyAgICAgICAgXG4gIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICBjaGVja0JveEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gIH1cbiAgY2hlY2tCb3hCdXR0b24uaW5uZXJIVE1MICs9IGA8c3ZnIGNsYXNzPVwiY2hlY2ttYXJrLWljb24ke3Rhc2suaXNDb21wbGV0ZSA/ICcgY2hlY2tlZCcgOiAnJ31cIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTExLjIzIDEzLjdsLTIuMTUtMmEuNTUuNTUgMCAwIDAtLjc0LS4wMWwuMDMtLjAzYS40Ni40NiAwIDAgMCAwIC42OEwxMS4yNCAxNWw1LjQtNS4wMWEuNDUuNDUgMCAwIDAgMC0uNjhsLjAyLjAzYS41NS41NSAwIDAgMC0uNzMgMGwtNC43IDQuMzV6XCI+PC9wYXRoPjwvc3ZnPmAgICAgICAgIFxuICBjaGVja0JveERpdi5hcHBlbmRDaGlsZChjaGVja0JveEJ1dHRvbik7XG4gIFxuICAvLyBUQVNLIEVMRU1FTlRTXG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRlbnQnKTsgICAgICAgICAgICAgICAgXG4gIFxuICAvLyBUaXRsZVxuICBjb25zdCB0aXRsZVdyYXBwZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVXcmFwcGVyRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUtd3JhcHBlcicpOyAgICAgICAgICAgICAgICBcbiAgXG4gIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gIGlmICh0YXNrLmlzQ29tcGxldGUpIHtcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gIH1cbiAgdGl0bGVEaXYudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBcbiAgLy8gRWRpdCBhbmQgRGVsZXRlIGJ1dHRvbnNcbiAgY29uc3QgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgZWRpdEJ1dHRvbiA9ICcnO1xuICBpZiAoIXRhc2suaXNDb21wbGV0ZSkge1xuICAgIGVkaXRCdXR0b24gPSBjcmVhdGVCdXR0b24oJ0VkaXQnLCAnZWRpdC1idG4nLCB0YXNrLmlkKTsgIFxuICB9ICAgICAgICAgICAgICBcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdEZWxldGUnLCAnZGVsZXRlLWJ0bicsIHRhc2suaWQpOyAgICAgICAgICAgICAgICBcbiAgXG4gIGJ1dHRvbnNEaXYuYXBwZW5kKGVkaXRCdXR0b24sIGRlbGV0ZUJ1dHRvbik7XG4gIHRpdGxlV3JhcHBlckRpdi5hcHBlbmQodGl0bGVEaXYsIGJ1dHRvbnNEaXYpOyAgICAgICAgXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGVXcmFwcGVyRGl2KTtcblxuICAvLyBEZXNjcmlwdGlvblxuICBpZiAodGFzay5kZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbkRpdi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG4gIH1cblxuICAvLyBEdWUgZGF0ZVxuICBpZiAodGFzay5kdWVEYXRlKSB7XG4gICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKTtcbiAgICBkdWVEYXRlRGl2LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdik7XG4gIH1cbiAgXG4gIHRhc2tJdGVtRWxlbWVudC5hcHBlbmQoY2hlY2tCb3hEaXYsIHRhc2tEaXYpOyAgICBcbiAgXG4gIHJldHVybiB0YXNrSXRlbUVsZW1lbnQ7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQsIGNsYXNzTmFtZSwgdGFza0lkKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUsICdidG4nKTtcbiAgYnV0dG9uLmRhdGFzZXQudGFza0lkID0gdGFza0lkO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDcmVhdGVUYXNrRm9ybVN1Ym1pc3Npb24oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdGFzaycpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIGJlaGF2aW9yXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAvLyBTZXQgdGhlIGNhdGVnb3J5IElEIHRvIHRoZSBjdXJyZW50IHZpZXdcbiAgICBjb25zdCBjYXRlZ29yeUlkID0gY3VycmVudENhdGVnb3J5Vmlld0lkO1xuICAgIFxuICAgIC8vIEdldCB2YWx1ZXMgZnJvbSB0aGUgZm9ybSBmaWVsZHNcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWU7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlO1xuICAgIFxuICAgIC8vIENyZWF0ZSBhIG5ldyB0YXNrIG9iamVjdCBhbmQgYWRkIGl0IHRvIHRoZSBkYXRhYmFzZVxuICAgIGNyZWF0ZVRhc2soY2F0ZWdvcnlJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgY2xlYXJGb3JtRmllbGRzKCk7XG5cbiAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcblxuICAgIC8vIFJlZm9jdXMgdGhlIHRpdGxlIGlucHV0IGZpZWxkXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykuZm9jdXMoKTsgXG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDcmVhdGVQcm9qZWN0Rm9ybVN1Ym1pc3Npb24oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtcHJvamVjdC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcbiAgICAvLyBHZXQgdmFsdWVzIGZyb20gdGhlIGZvcm0gZmllbGRzXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZS1pbnB1dCcpLnZhbHVlO1xuICBcbiAgICAvLyBDcmVhdGUgYSBuZXcgcHJvamVjdCBhbmQgYWRkIGl0IHRvIHRoZSBkYXRhYmFzZVxuICAgIGNyZWF0ZUNhdGVnb3J5KHRpdGxlKTtcblxuICAgIHJlbmRlclByb2plY3RzTGlzdChjYXRlZ29yaWVzKTtcblxuICAgIC8vIENsZWFyIGZpZWxkcyBhbmQgY2xvc2UgdGhlIG1vZGFsXG4gICAgY2xlYXJGb3JtRmllbGRzKCk7XG4gICAgcHJvamVjdERpYWxvZy5jbG9zZSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRm9ybUZpZWxkcygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS10YXNrJykucmVzZXQoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0LWZvcm0nKS5yZXNldCgpO1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrJykucmVzZXQoKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NyZWF0ZVRhc2tGb3JtKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNyZWF0ZVRhc2tGb3JtRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLmZvY3VzKCk7IFxuICAgICAgYWRkVGFza0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pOyAgXG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUNyZWF0ZVRhc2tGb3JtKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVRhc2tGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNsZWFyRm9ybUZpZWxkcygpO1xuICAgICAgY3JlYXRlVGFza0Zvcm1FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgfSk7ICBcbiAgfSk7XG59XG5cbi8vIENoYW5nZSBiZWhhdmlvciBvZiB0aGUgcmV0dXJuIGtleSB0byBwcm9ncmFtbWF0aWNhbGx5IGNsaWNrIHRoZSAnQWRkIHRhc2snIGJ0bi5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG5cbiAgICAvLyBDaGVjayBpZiBhZGQgdGFzayBmb3JtIGlzIG9wZW4gYW5kIHZpc2libGVcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGFkZFRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ0bicpO1xuICAgIFxuICAgIC8vIENoZWNrIGlmIHRoZSBhZGQgcHJvamVjdCBtb2RhbCBpcyBvcGVuIGFuZCB2aXNpYmxlXG4gICAgY29uc3QgYWRkUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LW1vZGFsJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC10by1saXN0Jyk7XG5cbiAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShhZGRUYXNrRm9ybSkuZGlzcGxheSAhPT0gJ25vbmUnICYmIGdldENvbXB1dGVkU3R5bGUoYWRkUHJvamVjdE1vZGFsKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIGFkZFRhc2tTdWJtaXRCdXR0b24uY2xpY2soKTtcbiAgICB9IGVsc2UgaWYgKGdldENvbXB1dGVkU3R5bGUoYWRkUHJvamVjdE1vZGFsKS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgIGFkZFByb2plY3RTdWJtaXRCdXR0b24uY2xpY2soKTtcbiAgICAgIGFkZFByb2plY3RNb2RhbC5jbG9zZSgpO1xuICAgIH1cbiAgfVxufSk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNoZWNrQm94Q2xpY2soKSB7XG4gIGNvbnN0IHRhc2tMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgdGFza0xpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrbWFyay1pY29uJykpIHtcbiAgICAgIFxuICAgICAgLy8gR2V0IHRoZSBjYXRlZ29yeSBJRFxuICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGN1cnJlbnRDYXRlZ29yeVZpZXdJZDtcblxuICAgICAgLy8gR2V0IHRoZSB0YXNrIElEIFxuICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuXG4gICAgICAvLyBVcGRhdGUgaXNDb21wbGV0ZSBwcm9wZXJ0eVxuICAgICAgdG9nZ2xlVGFza1N0YXR1cyhjYXRlZ29yeUlkLCB0YXNrSWQpO1xuXG4gICAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEZWxldGVCdXR0b25DbGljaygpIHtcbiAgY29uc3QgdGFza0xpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICB0YXNrTGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWJ0bicpKSB7XG5cbiAgICAgIC8vIEdldCB0aGUgY2F0ZWdvcnkgSURcbiAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBjdXJyZW50Q2F0ZWdvcnlWaWV3SWQ7XG4gICAgICBcbiAgICAgIC8vIEdldCB0aGUgdGFzayBJRCBcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcblxuICAgICAgLy8gVXBkYXRlIGlzQ29tcGxldGUgcHJvcGVydHlcbiAgICAgIGRlbGV0ZVRhc2tGcm9tQ2F0ZWdvcnkoY2F0ZWdvcnlJZCwgdGFza0lkKTtcblxuICAgICAgcmVuZGVyVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcyk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlQ29tcGxldGVkVGFza3NCdXR0b25DbGljaygpIHtcbiAgY29uc3QgdG9nZ2xlQ29tcGxldGVkVGFza3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLWNvbXBsZXRlZC10YXNrcy1idG4nKTtcbiAgdG9nZ2xlQ29tcGxldGVkVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGN1cnJlbnRDYXRlZ29yeVZpZXdJZDtcbiAgICBzaG93Q29tcGxldGVkVGFza3MgPSAhc2hvd0NvbXBsZXRlZFRhc2tzO1xuICAgIGlmIChzaG93Q29tcGxldGVkVGFza3MpIHtcbiAgICAgIHRvZ2dsZUNvbXBsZXRlZFRhc2tzQnRuLnRleHRDb250ZW50ID0gJ0hpZGUgY29tcGxldGVkIHRhc2tzJztcbiAgICB9IGVsc2Uge1xuICAgICAgdG9nZ2xlQ29tcGxldGVkVGFza3NCdG4udGV4dENvbnRlbnQgPSAnU2hvdyBjb21wbGV0ZWQgdGFza3MnO1xuICAgIH1cbiAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgfSk7XG59XG5cblxuLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBzaG93IGFuZCBjbG9zZSBwcm9qZWN0IG1vZGFsXG5jb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LW1vZGFsJyk7XG5jb25zdCBzaG93QWRkUHJvamVjdE1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuY29uc3QgY2xvc2VQcm9qZWN0TW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwtYnRuJyk7XG5cbnNob3dBZGRQcm9qZWN0TW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuY2xvc2VQcm9qZWN0TW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY2xlYXJGb3JtRmllbGRzKCk7XG4gIHByb2plY3REaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG5jb25zdCBlZGl0VGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stbW9kYWwnKTtcbmNvbnN0IGNsb3NlRWRpdFRhc2tNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtZWRpdC1idG4nKTtcblxuLy8gY2xvc2VFZGl0VGFza01vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4vLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGVkaXRUYXNrRGlhbG9nLmNsb3NlKCk7XG4vLyB9KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0VkaXRUYXNrRm9ybSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtYnRuJykpIHtcbiAgICAgICAgZWRpdFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7ICAgIFxuXG4gICAgICAgIC8vIEdldCB0aGUgdGFzayBJRCBcbiAgICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuICAgICAgICBkaXNwbGF5VGFza0RldGFpbHModGFza0lkKTtcbiAgICAgIH1cbiAgICB9KTsgIFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tEZXRhaWxzKHRhc2tJZCkge1xuICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIHRhc2sgbGlzdCBlbGVtZW50XG4gIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKTtcblxuICBjb25zdCB0YXNrID0gZ2V0VGFza0RldGFpbHModGFza0lkKTtcbiAgXG4gIC8vIENsZWFyIHRoZSB0YXNrIGxpc3RcbiAgZWRpdFRhc2tGb3JtLmlubmVySFRNTCA9IGBcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVkaXQtdGl0bGVcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgdmFsdWU9XCIke3Rhc2sudGl0bGV9XCIgLz5cbiAgICA8dGV4dGFyZWEgaWQ9XCJlZGl0LWRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiPiR7dGFzay5kZXNjcmlwdGlvbn08L3RleHRhcmVhPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLW9wdGlvbnNcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIiB2YWx1ZT1cIiR7dGFzay5kdWVEYXRlfVwiIC8+XG4gICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHlcIj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaW9yaXR5LTFcIj5Qcmlvcml0eSAxPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmlvcml0eS0yXCI+UHJpb3JpdHkgMjwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpb3JpdHktM1wiPlByaW9yaXR5IDM8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByaW9yaXR5LTRcIiBzZWxlY3RlZD5Qcmlvcml0eSA0PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIDxzZWxlY3QgbmFtZT1cInByb2plY3RcIiBpZD1cInByb2plY3RcIj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImluYm94XCIgc2VsZWN0ZWQ+SW5ib3g8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICAgIDxmb290ZXIgY2xhc3M9XCJmb3JtLWZvb3RlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYnRuc1wiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2FuY2VsLWVkaXQtYnRuIGJ0blwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0LWJ0blwiIHR5cGU9XCJzdWJtaXRcIj5TYXZlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgYDtcbn0iLCIvLyBzcmMvdXRpbHMuanNcblxuLy8gRGF0YSBzdHJ1Y3R1cmUgdG8gc3RvcmUgY2F0ZWdvcmllcyBhbmQgdGFza3NcbmV4cG9ydCBsZXQgY2F0ZWdvcmllcyA9IFtcbiAge1xuICAgIGlkOiAnaW5ib3gnLFxuICAgIHRpdGxlOiAnSW5ib3gnLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIGNhdGVnb3J5OiAnaW5ib3gnLFxuICAgICAgICB0aXRsZTogJ015IGZpcnN0IHRhc2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIG9mIG15IGZpcnN0IHRhc2snLFxuICAgICAgICBkdWVEYXRlOiAnMTAtMzEtMjAyMycsXG4gICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdpbmJveCcsXG4gICAgICAgIHRpdGxlOiAnTXkgc2Vjb25kIHRhc2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgICAgZHVlRGF0ZTogbnVsbCxcbiAgICAgICAgcHJpb3JpdHk6IG51bGwsXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdQcm9qZWN0IEEnLFxuICAgICAgICB0aXRsZTogJ015IHRoaXJkIHRhc2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogbnVsbCxcbiAgICAgICAgZHVlRGF0ZTogbnVsbCxcbiAgICAgICAgcHJpb3JpdHk6IG51bGwsXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZDogJ3Byb2plY3QtMScsXG4gICAgdGl0bGU6ICdTb2Z0d2FyZSBEZXZlbG9wbWVudCcsXG4gICAgdGFza3M6IFtdXG4gIH0sXG4gIHtcbiAgICBpZDogJ3Byb2plY3QtMicsXG4gICAgdGl0bGU6ICdQZXJzb25hbCBUYXNrcycsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgdGl0bGU6ICdNeSB0aGlyZCB0YXNrJyxcbiAgICAgICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgICAgIGR1ZURhdGU6IG51bGwsXG4gICAgICAgIHByaW9yaXR5OiBudWxsLFxuICAgICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuXVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yZWRUYXNrcygpIHtcbiAgY29uc3Qgc3RvcmVkVGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0NhdGVnb3JpZXMnKTtcbiAgaWYgKHN0b3JlZFRhc2tzKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmVkVGFza3MpO1xuICB9XG4gIHJldHVybiBbXTsvLyBSZXR1cm4gZW1wdHkgYXJyYXkgaWYgbm90aGluZyBpbiBsb2NhbFN0b3JhZ2UgdG8gYXZvaWQgZXJyb3Jcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tDYXRlZ29yaWVzJywgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yaWVzKHN0b3JlZFRhc2tzKSB7XG4gIC8vIENsZWFyIG91dCB0aGUgdGFza3NcbiAgY2F0ZWdvcmllcy5sZW5ndGggPSAwO1xuXG4gIC8vIEFkZCB0aGUgbmV3IHRhc2tzXG4gIHN0b3JlZFRhc2tzLmZvckVhY2goY2F0ZWdvcnkgPT4gY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gc3JjL2luZGV4LmpzXG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy8gaW1wb3J0IHsgXG4vLyAgIHVwZGF0ZU15VGFza3MsXG4vLyAgIG15VGFza3MsIFxuLy8gICBnZXRUYXNrc0Zyb21Mb2NhbFN0b3JhZ2UsIFxuLy8gICBzYXZlVGFza3NUb0xvY2FsU3RvcmFnZSxcbi8vICAgZ2V0UHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlLFxuLy8gICBzYXZlUHJvamVjdHNUb0xvY2FsU3RvcmFnZSxcbi8vICAgbXlQcm9qZWN0cyxcbi8vICAgdXBkYXRlTXlQcm9qZWN0cywgXG4vLyB9IGZyb20gJy4vdGFza1NlcnZpY2UnO1xuXG5cbmltcG9ydCB7IFxuICByZW5kZXJUYXNrcyxcbiAgcmVuZGVyUHJvamVjdHNMaXN0LCBcbiAgaGFuZGxlQ2hlY2tCb3hDbGljayxcbiAgaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2ssXG4gIGhhbmRsZVRvZ2dsZUNvbXBsZXRlZFRhc2tzQnV0dG9uQ2xpY2ssXG4gIGhhbmRsZUluYm94Q2F0ZWdvcnlDbGljayxcbiAgaGFuZGxlUHJvamVjdENhdGVnb3J5Q2xpY2ssXG4gIGhhbmRsZUNyZWF0ZVRhc2tGb3JtU3VibWlzc2lvbixcbiAgaGFuZGxlQ3JlYXRlUHJvamVjdEZvcm1TdWJtaXNzaW9uLFxuICBzaG93Q3JlYXRlVGFza0Zvcm0sXG4gIGNsb3NlQ3JlYXRlVGFza0Zvcm0sXG59IGZyb20gJy4vdGFza1ZpZXcuanMnO1xuXG5pbXBvcnQgeyBcbiAgY2F0ZWdvcmllcyxcbiAgZ2V0U3RvcmVkVGFza3MsXG4gIHVwZGF0ZUNhdGVnb3JpZXMsXG4gIHVwZGF0ZUxvY2FsU3RvcmFnZSxcbn0gZnJvbSAnLi91dGlscy5qcyc7XG5cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUV2ZW50TGlzdGVuZXJzKCkge1xuICBzaG93Q3JlYXRlVGFza0Zvcm0oKTtcbiAgY2xvc2VDcmVhdGVUYXNrRm9ybSgpO1xuLy8gICBzaG93RWRpdFRhc2tGb3JtKCk7XG4gIGhhbmRsZUNyZWF0ZVByb2plY3RGb3JtU3VibWlzc2lvbigpO1xuICBoYW5kbGVDcmVhdGVUYXNrRm9ybVN1Ym1pc3Npb24oKTtcbiAgaGFuZGxlVG9nZ2xlQ29tcGxldGVkVGFza3NCdXR0b25DbGljaygpO1xuICBoYW5kbGVDaGVja0JveENsaWNrKCk7IC8vIENvbW1lbnQgb3V0IGlmIGlzc3VlcyBhbmQgdW5jb21tZW50IGJlbG93XG4gIGhhbmRsZURlbGV0ZUJ1dHRvbkNsaWNrKCk7IC8vIENvbW1lbnQgb3V0IGlmIGlzc3VlcyBhbmQgdW5jb21tZW50IGJlbG93XG4gIGhhbmRsZUluYm94Q2F0ZWdvcnlDbGljaygpO1xuICBoYW5kbGVQcm9qZWN0Q2F0ZWdvcnlDbGljaygpO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xuICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgdGFza3MgaW4gbG9jYWxTdG9yYWdlXG4gIGxldCBzdG9yZWRUYXNrcyA9IGdldFN0b3JlZFRhc2tzKCk7XG5cbiAgLy8gSWYgdGhlcmUgYXJlIG5vIHN0b3JlZCB0YXNrcywgdXNlIGRlZmF1bHQgdGFza3MgYW5kIHNhdmUgdGhlbSB0byBsb2NhbFN0b3JhZ2VcbiAgaWYgKHN0b3JlZFRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbiAgICBzdG9yZWRUYXNrcyA9IFsuLi5jYXRlZ29yaWVzXTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgbXlUYXNrcyBpbnN0ZWFkIG9mIHJlYXNzaWduaW5nIGl0XG4gIHVwZGF0ZUNhdGVnb3JpZXMoc3RvcmVkVGFza3MpO1xuXG4gIHJlbmRlclByb2plY3RzTGlzdChzdG9yZWRUYXNrcyk7XG4gIC8vIHJlbmRlckluY29tcGxldGVUYXNrcygnaW5ib3gnLCBzdG9yZWRUYXNrcyk7XG4gIHJlbmRlclRhc2tzKCdpbmJveCcsIHN0b3JlZFRhc2tzKTtcbiAgaW5pdGlhbGl6ZUV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbmluaXRpYWxpemVBcHAoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=