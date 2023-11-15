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
.submit-btn,
.save-btn {
  padding: .5rem 1rem;
  background-color: #333333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn,
.save-btn {
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

#due-date,
#edit-due-date {
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

.edit-form-container {
  height: auto;
  width: 600px;
}

.edit-form-container>form {
  display: flex;
  flex-direction: column;
}

.edit-form-footer {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid rgb(98, 98, 98);
  padding: .75rem 0;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* src/style.css */\n\n\n/* GLOBAL */\n\n* {\n  /* outline: 1px solid lightyellow; */\n  margin: 0;\n\n}\n\n#grid-container {\n  display: grid;\n  grid-template-columns: 18rem auto;\n  grid-template-rows: 3rem 100vh;\n}\n\nbody {\n  color: #E2E2E2;\n  font-family: 'Roboto', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.btn {\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background-color: rgb(255, 255, 255, .10);\n}\n\n.btn:hover{\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\nbutton.current {\n  background-color: #333333;\n}\n\n\n/* TOP BAR */\n.top-bar {\n  display: flex;\n  align-items: center;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  background-color: #333333;\n  position: fixed;\n  width: 100%;\n  height: 3rem;\n  z-index: 1;\n}\n\n.top-bar-wrapper {\n  display: flex;\n  gap: .5rem;\n  align-items: center;\n  margin-left: 2rem;\n}\n\n.home-btn,\n.menu-btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  padding: .25rem;\n}\n\n.home-btn:hover,\n.menu-btn:hover {\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\n\n\n/* LEFT MENU */\n.left-menu-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background-color: #282828;\n  position: fixed;\n  top: 48px;\n  height: calc(100% - 48px);\n  width: 18rem;\n}\n\n.left-menu-wrapper {\n  margin: 2.5rem 1.5rem 0 2rem;\n}\n\nh2 {\n  font-size: 1.25rem;\n  margin-bottom: 1rem;\n}\n\n.inbox-button {\n  background-color: rgb(0, 0, 0, .0);\n  color: #fff;\n  padding: 10px 0 10px 8px;\n  border-radius: 6px;\n  border: none;\n  margin-bottom: 2rem;\n  width: 100%;\n  \n  display: flex;\n  align-items: center;\n  gap: .5rem;\n}\n\n.inbox-button:hover {\n  background-color: #333333;\n  cursor: pointer;\n}\n\n.projects-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n}\n\n#project-list li {\n  margin-bottom: .5rem;\n}\n\n.project-button {\n  background-color: rgb(0, 0, 0, .0);\n  color: #fff;\n  width: 100%;\n\n  display: flex;\n  align-items: center;\n  gap: .5rem;\n  padding: 10px 0 10px 8px;\n  border-radius: 6px;\n  border: none;\n}\n\n.project-button:hover {\n  background-color: #333333;\n  cursor: pointer;\n}\n\n.add-project-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 5px 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-left: 6px;\n}\n\n.add-project-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n  cursor: pointer;\n}\n\n\n\n/* MAIN */\n.main-container {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background-color: #1E1E1E;\n}\n\n.main-wrapper {\n  max-width: 50rem;\n  margin: 3rem auto;\n  padding: 0 2rem;\n}\n\nh1 {\n  font-size: 1.5rem;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 2rem 0 1rem;\n}\n\n\n.toggle-completed-tasks-btn {\n  display: block;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  color: #fff;\n  background-color: rgb(255, 255, 255, .10);\n}\n\n.toggle-completed-tasks-btn:hover{\n  background-color: rgb(255, 255, 255, .20);\n  cursor: pointer;\n}\n\n.task-item {\n  display: flex;\n  gap: 1rem;\n  padding: .75rem 0 .5rem;\n  border-bottom: 1px solid rgb(58, 58, 58);\n}\n\n.task-content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.task-title-wrapper {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.checkbox-btn {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #989898;\n  border-radius: 20px;\n  background-color: rgb(0, 0, 0, .0);\n}\n\n.checkbox-btn:hover {\n  background-color: #3b3b3b;\n  cursor: pointer;\n}\n\n.checkmark-icon {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n}\n\n.checkbox-btn .checkmark-icon {\n  visibility: hidden;\n}\n\n.checkbox-btn:hover .checkmark-icon {\n  visibility: visible;\n}\n\n.checkbox-btn.checked {\n  background-color: #989898;\n  visibility: visible;\n}\n\n.checkmark-icon.checked {\n  visibility: visible;\n}\n\n.add-task-btn {\n  display: flex;\n  gap: .5rem;\n  padding: 8px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgb(255, 255, 255, .0);\n  color: #fff;\n  margin-top: .5rem;\n}\n\n.add-task-btn:hover {\n  background-color: rgb(255, 255, 255, .10);\n  cursor: pointer;\n}\n\n.title {\n  margin-bottom: .5rem;\n  line-height: 1.75;\n}\n\n.title.checked {\n  color: #7f7f7f;\n  text-decoration: line-through;\n}\n\n.description {\n  margin-bottom: .75rem;\n  color: #8f8f8f;\n  font-size: .75rem;\n  font-weight: 300;\n}\n\n.due-date {\n  font-size: .75rem;\n  font-weight: 300;\n  margin-bottom: .5rem;\n}\n\n.delete-btn {\n  margin-left: .5rem;\n}\n\n\n\n\n\n/* FORM */\n\n.form-container {\n  display: none;\n}\n\n.form-container>form {\n  display: flex;\n  flex-direction: column;\n}\n\nform {\n  padding: .5rem .5rem 0;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 8px;\n}\n\ninput,\ntextarea {\n  height: 2rem;\n  background-color: rgb(0, 0, 0, .0);\n  border: none;\n  color: #fff;\n}\n\n.form-options {\n  margin: .5rem 0;\n}\n\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\n\n.form-footer {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid rgb(98, 98, 98);\n  padding: .75rem 0;\n}\n\n.cancel-btn,\n.submit-btn,\n.save-btn {\n  padding: .5rem 1rem;\n  background-color: #333333;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.submit-btn,\n.save-btn {\n  background-color: #DD4B4A;\n  margin-left: .25rem;\n}\n\nselect {\n  padding: .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n}\n\n#due-date,\n#edit-due-date {\n  padding: 0 .5rem;\n  background-color: rgb(0, 0, 0, .0);\n  color: white;\n  border: 1px solid rgb(98, 98, 98);\n  border-radius: 4px;\n  margin-right: 4px;\n}\n\ninput[type=\"date\"] {\n  filter: invert(45%) hue-rotate(180deg);\n}\n\n\n\n\n/* MODAL */\n\ndialog {\n  background-color: #1E1E1E;\n  border: none;\n  border-radius: 4px;\n  margin: 10rem auto;\n}\n\n#project-title-input {\n  height: 28px;\n  margin-bottom: 1rem;\n  border: 1px solid #3b3b3b;\n  border-radius: 4px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n#create-project-form {\n  border: none;\n  width: 300px;\n}\n\n.add-project-modal-title {\n  color: #fff;\n}\n\n.modal-btns {\n  display: flex;\n  justify-content: flex-end;\n  gap: .5rem;\n  padding-top: 1rem;\n}\n\n.close-modal-btn,\n.add-project-to-list {\n  padding: .5rem 1rem;\n  background-color: #333333;\n  color: white;\n  border: none;\n  border-radius: 4px;\n}\n\n.add-project-to-list {\n  background-color: #DD4B4A;\n  margin-left: .25rem;\n}\n\n::backdrop {\n  background-color: black;\n  opacity: 0.5;\n}\n\n\n\n\n/* UPDATE TASK MODAL */\n\n.edit-form-container {\n  height: auto;\n  width: 600px;\n}\n\n.edit-form-container>form {\n  display: flex;\n  flex-direction: column;\n}\n\n.edit-form-footer {\n  display: flex;\n  justify-content: flex-end;\n  border-top: 1px solid rgb(98, 98, 98);\n  padding: .75rem 0;\n}"],"sourceRoot":""}]);
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


function createTask(categoryId, title, description = '', dueDate = '', priority = 'low', isComplete = false) {
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
/* harmony export */   handleEditTaskFormSubmission: () => (/* binding */ handleEditTaskFormSubmission),
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
    
    // Reference to the form for scope
    const form = event.currentTarget;

    // Get values from the form fields
    const title = form.querySelector('#title').value;
    const description = form.querySelector('#description').value;
    const dueDate = form.querySelector('#due-date').value;
    const priority = form.querySelector('.priority-drop-down').value;
    
    // Create a new task object and add it to the database
    (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(categoryId, title, description, dueDate, priority);
    clearFormFields();

    renderTasks(categoryId, _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);

    // Refocus the title input field
    form.querySelector('#title').focus(); 
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

// Change behavior of the return key to programmatically click the 'submit' btn.
document.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); 

    // Check if add task form is open and visible
    const addTaskForm = document.querySelector('.form-container');
    const addTaskSubmitButton = document.querySelector('.submit-btn');

    // Check if edit task form is open and visible
    const editTaskModal = document.querySelector('#edit-task-modal');
    const editTaskSubmitButton = document.querySelector('.save-btn');
    
    // Check if the add project modal is open and visible
    const addProjectModal = document.querySelector('#add-project-modal');
    const addProjectSubmitButton = document.querySelector('.add-project-to-list');

    if (getComputedStyle(addTaskForm).display !== 'none' && getComputedStyle(addProjectModal).display === 'none') {
      addTaskSubmitButton.click();
    } else if (getComputedStyle(addProjectModal).display !== 'none') {
      addProjectSubmitButton.click();
      addProjectModal.close();
    } else if (getComputedStyle(editTaskModal).display !== 'none') {
      editTaskSubmitButton.click();
      editTaskModal.close();
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
        
        // Get the category ID
        const categoryId = currentCategoryViewId;

        // Get the task ID 
        const taskId = event.target.dataset.taskId;
        clearFormFields();
        displayTaskDetailsForEditing(categoryId, taskId);
      }
    });  
  });
}

function displayTaskDetailsForEditing(categoryId, taskId) {
  const category = _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories.find(category => category.id === categoryId);
  const task = category.tasks.find(task => task.id === taskId);
  const categoryDropDownButton = document.querySelector('.project-drop-down');
  
  document.querySelector('#task-id').value = task.id;
  document.querySelector('#edit-title').value = task.title;
  document.querySelector('#edit-description').textContent = task.description;
  document.querySelector('#edit-due-date').value = task.dueDate;
  document.querySelector(`.priority-drop-down option[value='${task.priority}']`).selected = true;
  
  categoryDropDownButton.innerHTML = '';
  _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories.forEach(category => {
    const categoryOption = document.createElement('option');
    categoryOption.setAttribute('value', category.id);
    categoryOption.textContent = category.title;

    categoryDropDownButton.appendChild(categoryOption);
  });

  document.querySelector(`.project-drop-down option[value='${category.id}']`).selected = true;
}

function handleEditTaskFormSubmission() {
  document.querySelector('#edit-task').addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();    
    
    // Reference to the form for scope
    const form = event.currentTarget;
    
    // Get values from the form fields
    const categoryId = form.querySelector('.project-drop-down').value;
    const taskId = form.querySelector('#task-id').value;
    const title = form.querySelector('#edit-title').value;
    const description = form.querySelector('#edit-description').value;
    const dueDate = form.querySelector('#edit-due-date').value;
    const priority = form.querySelector('.priority-drop-down').value;

    const updates = {
      title: title, // Make this a requirement in UI code
      description: description || '',
      dueDate: dueDate || '',
      priority: priority || 'low'
    };

    console.log(categoryId);
    console.log(taskId);
    console.log(updates);
    
    // Edit the task and close the form
    (0,_taskService_js__WEBPACK_IMPORTED_MODULE_0__.editTask)(categoryId, taskId, updates);
    
    editTaskDialog.close();
    clearFormFields();

    renderTasks(categoryId, _utils_js__WEBPACK_IMPORTED_MODULE_1__.categories);
  });
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
        dueDate: '2023-11-23',
        priority: 'high',
        isComplete: false,
      },
      {
        id: '2',
        category: 'inbox',
        title: 'My second task',
        description: '',
        dueDate: '',
        priority: 'medium',
        isComplete: false,
      },
      {
        id: '3',
        category: 'Project A',
        title: 'My third task',
        description: '',
        dueDate: '',
        priority: 'low',
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
        description: '',
        dueDate: '',
        priority: 'low',
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







function initializeEventListeners() {
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.showCreateTaskForm)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.closeCreateTaskForm)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.showEditTaskForm)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleCreateProjectFormSubmission)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleCreateTaskFormSubmission)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleToggleCompletedTasksButtonClick)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleCheckBoxClick)(); // Comment out if issues and uncomment below
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleDeleteButtonClick)(); // Comment out if issues and uncomment below
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleInboxCategoryClick)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleProjectCategoryClick)();
  (0,_taskView_js__WEBPACK_IMPORTED_MODULE_1__.handleEditTaskFormSubmission)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EscUNBQXFDO0FBQ3JDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx5RkFBeUYsWUFBWSxLQUFLLFlBQVksWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksUUFBUSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFNBQVMsVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksWUFBWSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxTQUFTLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFB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dURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FCOztBQWdCRTs7QUFPSDs7O0FBR3BCO0FBQ0EsRUFBRSxnRUFBa0I7QUFDcEIsRUFBRSxpRUFBbUI7QUFDckIsRUFBRSw4REFBZ0I7QUFDbEIsRUFBRSwrRUFBaUM7QUFDbkMsRUFBRSw0RUFBOEI7QUFDaEMsRUFBRSxtRkFBcUM7QUFDdkMsRUFBRSxpRUFBbUIsSUFBSTtBQUN6QixFQUFFLHFFQUF1QixJQUFJO0FBQzdCLEVBQUUsc0VBQXdCO0FBQzFCLEVBQUUsd0VBQTBCO0FBQzVCLEVBQUUsMEVBQTRCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IseURBQWM7O0FBRWxDO0FBQ0E7QUFDQSxJQUFJLDZEQUFrQixDQUFDLGlEQUFVO0FBQ2pDLHNCQUFzQixpREFBVTtBQUNoQzs7QUFFQTtBQUNBLEVBQUUsMkRBQWdCOztBQUVsQixFQUFFLGdFQUFrQjtBQUNwQjtBQUNBLEVBQUUseURBQVc7QUFDYjtBQUNBOztBQUVBLGdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcmVnZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JuZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92NC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdGFza1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdGFza1ZpZXcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHNyYy9zdHlsZS5jc3MgKi9cblxuXG4vKiBHTE9CQUwgKi9cblxuKiB7XG4gIC8qIG91dGxpbmU6IDFweCBzb2xpZCBsaWdodHllbGxvdzsgKi9cbiAgbWFyZ2luOiAwO1xuXG59XG5cbiNncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMThyZW0gYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDEwMHZoO1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICNFMkUyRTI7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XG59XG5cbi5idG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbi5jdXJyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbn1cblxuXG4vKiBUT1AgQkFSICovXG4udG9wLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNyZW07XG4gIHotaW5kZXg6IDE7XG59XG5cbi50b3AtYmFyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IC41cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cblxuLmhvbWUtYnRuLFxuLm1lbnUtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogLjI1cmVtO1xufVxuXG4uaG9tZS1idG46aG92ZXIsXG4ubWVudS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjIwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cblxuLyogTEVGVCBNRU5VICovXG4ubGVmdC1tZW51LWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNDhweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcbiAgd2lkdGg6IDE4cmVtO1xufVxuXG4ubGVmdC1tZW51LXdyYXBwZXIge1xuICBtYXJnaW46IDIuNXJlbSAxLjVyZW0gMCAycmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmluYm94LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogLjVyZW07XG59XG5cbi5pbmJveC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0cy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3Byb2plY3QtbGlzdCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuXG4ucHJvamVjdC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAuNXJlbTtcbiAgcGFkZGluZzogMTBweCAwIDEwcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnByb2plY3QtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLXByb2plY3QtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAuNXJlbTtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMCk7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5cbi8qIE1BSU4gKi9cbi5tYWluLWNvbnRhaW5lciB7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZ3JpZC1yb3c6IDIgLyAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgbWFyZ2luOiAzcmVtIGF1dG87XG4gIHBhZGRpbmc6IDAgMnJlbTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAycmVtIDAgMXJlbTtcbn1cblxuXG4udG9nZ2xlLWNvbXBsZXRlZC10YXNrcy1idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xufVxuXG4udG9nZ2xlLWNvbXBsZXRlZC10YXNrcy1idG46aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IC43NXJlbSAwIC41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDU4LCA1OCwgNTgpO1xufVxuXG4udGFzay1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YXNrLXRpdGxlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2hlY2tib3gtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTg5ODk4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xufVxuXG4uY2hlY2tib3gtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiM2IzYjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2ttYXJrLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IC0zcHg7XG59XG5cbi5jaGVja2JveC1idG4gLmNoZWNrbWFyay1pY29uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2hlY2tib3gtYnRuOmhvdmVyIC5jaGVja21hcmstaWNvbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5jaGVja2JveC1idG4uY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ODk4OTg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5jaGVja21hcmstaWNvbi5jaGVja2VkIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmFkZC10YXNrLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogLjVyZW07XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMCk7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAuNXJlbTtcbn1cblxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBsaW5lLWhlaWdodDogMS43NTtcbn1cblxuLnRpdGxlLmNoZWNrZWQge1xuICBjb2xvcjogIzdmN2Y3ZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IC43NXJlbTtcbiAgY29sb3I6ICM4ZjhmOGY7XG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZHVlLWRhdGUge1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi5kZWxldGUtYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xufVxuXG5cblxuXG5cbi8qIEZPUk0gKi9cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmZvcm0tY29udGFpbmVyPmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5mb3JtIHtcbiAgcGFkZGluZzogLjVyZW0gLjVyZW0gMDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICBoZWlnaHQ6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5mb3JtLW9wdGlvbnMge1xuICBtYXJnaW46IC41cmVtIDA7XG59XG5cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9ybS1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG4gIHBhZGRpbmc6IC43NXJlbSAwO1xufVxuXG4uY2FuY2VsLWJ0bixcbi5zdWJtaXQtYnRuLFxuLnNhdmUtYnRuIHtcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3VibWl0LWJ0bixcbi5zYXZlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCNEE7XG4gIG1hcmdpbi1sZWZ0OiAuMjVyZW07XG59XG5cbnNlbGVjdCB7XG4gIHBhZGRpbmc6IC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4jZHVlLWRhdGUsXG4jZWRpdC1kdWUtZGF0ZSB7XG4gIHBhZGRpbmc6IDAgLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XG4gIGZpbHRlcjogaW52ZXJ0KDQ1JSkgaHVlLXJvdGF0ZSgxODBkZWcpO1xufVxuXG5cblxuXG4vKiBNT0RBTCAqL1xuXG5kaWFsb2cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luOiAxMHJlbSBhdXRvO1xufVxuXG4jcHJvamVjdC10aXRsZS1pbnB1dCB7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiM2IzYjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuI2NyZWF0ZS1wcm9qZWN0LWZvcm0ge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmFkZC1wcm9qZWN0LW1vZGFsLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tb2RhbC1idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZ2FwOiAuNXJlbTtcbiAgcGFkZGluZy10b3A6IDFyZW07XG59XG5cbi5jbG9zZS1tb2RhbC1idG4sXG4uYWRkLXByb2plY3QtdG8tbGlzdCB7XG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5hZGQtcHJvamVjdC10by1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RENEI0QTtcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cblxuXG5cbi8qIFVQREFURSBUQVNLIE1PREFMICovXG5cbi5lZGl0LWZvcm0tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNjAwcHg7XG59XG5cbi5lZGl0LWZvcm0tY29udGFpbmVyPmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZWRpdC1mb3JtLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG4gIHBhZGRpbmc6IC43NXJlbSAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7OztBQUdsQixXQUFXOztBQUVYO0VBQ0Usb0NBQW9DO0VBQ3BDLFNBQVM7O0FBRVg7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtREFBbUQ7RUFDbkQsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBR0EsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7Ozs7QUFJQSxjQUFjO0FBQ2Q7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsU0FBUztFQUNULHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVzs7RUFFWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxXQUFXOztFQUVYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7Ozs7QUFJQSxTQUFTO0FBQ1Q7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7Ozs7O0FBTUEsU0FBUzs7QUFFVDtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIscUNBQXFDO0VBQ3JDLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOzs7OztBQUtBLFVBQVU7O0FBRVY7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOzs7OztBQUtBLHNCQUFzQjs7QUFFdEI7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIscUNBQXFDO0VBQ3JDLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzcmMvc3R5bGUuY3NzICovXFxuXFxuXFxuLyogR0xPQkFMICovXFxuXFxuKiB7XFxuICAvKiBvdXRsaW5lOiAxcHggc29saWQgbGlnaHR5ZWxsb3c7ICovXFxuICBtYXJnaW46IDA7XFxuXFxufVxcblxcbiNncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOHJlbSBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzcmVtIDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiAjRTJFMkUyO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcblxcbn1cXG5cXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XFxufVxcblxcbi5idG46aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjIwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLmN1cnJlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG59XFxuXFxuXFxuLyogVE9QIEJBUiAqL1xcbi50b3AtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgei1pbmRleDogMTtcXG59XFxuXFxuLnRvcC1iYXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG59XFxuXFxuLmhvbWUtYnRuLFxcbi5tZW51LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogLjI1cmVtO1xcbn1cXG5cXG4uaG9tZS1idG46aG92ZXIsXFxuLm1lbnUtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4vKiBMRUZUIE1FTlUgKi9cXG4ubGVmdC1tZW51LWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA0OHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0OHB4KTtcXG4gIHdpZHRoOiAxOHJlbTtcXG59XFxuXFxuLmxlZnQtbWVudS13cmFwcGVyIHtcXG4gIG1hcmdpbjogMi41cmVtIDEuNXJlbSAwIDJyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5pbmJveC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMTBweCAwIDEwcHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogLjVyZW07XFxufVxcblxcbi5pbmJveC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3QtbGlzdCBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IC41cmVtO1xcbiAgcGFkZGluZzogMTBweCAwIDEwcHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAuNXJlbTtcXG4gIHBhZGRpbmc6IDVweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjApO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tbGVmdDogNnB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMTApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4vKiBNQUlOICovXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRTFFMUU7XFxufVxcblxcbi5tYWluLXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG4gIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgcGFkZGluZzogMCAycmVtO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMnJlbSAwIDFyZW07XFxufVxcblxcblxcbi50b2dnbGUtY29tcGxldGVkLXRhc2tzLWJ0biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsIC4xMCk7XFxufVxcblxcbi50b2dnbGUtY29tcGxldGVkLXRhc2tzLWJ0bjpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAuMjApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAuNzVyZW0gMCAuNXJlbTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoNTgsIDU4LCA1OCk7XFxufVxcblxcbi50YXNrLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2stdGl0bGUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzk4OTg5ODtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjNiM2I7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jaGVja21hcmstaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0zcHg7XFxuICByaWdodDogLTNweDtcXG59XFxuXFxuLmNoZWNrYm94LWJ0biAuY2hlY2ttYXJrLWljb24ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuOmhvdmVyIC5jaGVja21hcmstaWNvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uY2hlY2tib3gtYnRuLmNoZWNrZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4OTg5ODtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5jaGVja21hcmstaWNvbi5jaGVja2VkIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5hZGQtdGFzay1idG4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogLjVyZW07XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjApO1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAuNXJlbTtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgLjEwKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XFxufVxcblxcbi50aXRsZS5jaGVja2VkIHtcXG4gIGNvbG9yOiAjN2Y3ZjdmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAuNzVyZW07XFxuICBjb2xvcjogIzhmOGY4ZjtcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBtYXJnaW4tbGVmdDogLjVyZW07XFxufVxcblxcblxcblxcblxcblxcbi8qIEZPUk0gKi9cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyPmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmZvcm0ge1xcbiAgcGFkZGluZzogLjVyZW0gLjVyZW0gMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIC4wKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZm9ybS1vcHRpb25zIHtcXG4gIG1hcmdpbjogLjVyZW0gMDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbiAgcGFkZGluZzogLjc1cmVtIDA7XFxufVxcblxcbi5jYW5jZWwtYnRuLFxcbi5zdWJtaXQtYnRuLFxcbi5zYXZlLWJ0biB7XFxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN1Ym1pdC1idG4sXFxuLnNhdmUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNERDRCNEE7XFxuICBtYXJnaW4tbGVmdDogLjI1cmVtO1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgcGFkZGluZzogLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgLjApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4jZHVlLWRhdGUsXFxuI2VkaXQtZHVlLWRhdGUge1xcbiAgcGFkZGluZzogMCAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAuMCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDQ1JSkgaHVlLXJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBNT0RBTCAqL1xcblxcbmRpYWxvZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWFyZ2luOiAxMHJlbSBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZS1pbnB1dCB7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNiM2IzYjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NyZWF0ZS1wcm9qZWN0LWZvcm0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtbW9kYWwtdGl0bGUge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb2RhbC1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgZ2FwOiAuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWwtYnRuLFxcbi5hZGQtcHJvamVjdC10by1saXN0IHtcXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtdG8tbGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREQ0QjRBO1xcbiAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcXG59XFxuXFxuOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuXFxuXFxuXFxuLyogVVBEQVRFIFRBU0sgTU9EQUwgKi9cXG5cXG4uZWRpdC1mb3JtLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogNjAwcHg7XFxufVxcblxcbi5lZGl0LWZvcm0tY29udGFpbmVyPmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5lZGl0LWZvcm0tZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcXG4gIHBhZGRpbmc6IC43NXJlbSAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiBieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBzcmMvdGFza1NlcnZpY2UuanNcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnXG5cbmltcG9ydCB7IFxuICBjYXRlZ29yaWVzLFxuICB1cGRhdGVMb2NhbFN0b3JhZ2UsXG59IGZyb20gJy4vdXRpbHMuanMnO1xuXG5pbXBvcnQgeyBcbiAgZGlzcGxheUluY29tcGxldGVUYXNrcywgXG4gIGNsZWFyRm9ybUZpZWxkcywgXG4gIGRpc3BsYXlBbGxUYXNrcywgXG4gIGRpc3BsYXlQcm9qZWN0cyxcbiAgcmVuZGVySW5jb21wbGV0ZVRhc2tzLFxufSBmcm9tIFwiLi90YXNrVmlldy5qc1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeSh0aXRsZSkge1xuICBjb25zdCBuZXdDYXRlZ29yeSA9IHtcbiAgICBpZDogdXVpZHY0KCksXG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIHRhc2tzOiBbXVxuICB9O1xuXG4gIGNhdGVnb3JpZXMucHVzaChuZXdDYXRlZ29yeSk7XG4gIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhjYXRlZ29yeUlkLCB0aXRsZSwgZGVzY3JpcHRpb24gPSAnJywgZHVlRGF0ZSA9ICcnLCBwcmlvcml0eSA9ICdsb3cnLCBpc0NvbXBsZXRlID0gZmFsc2UpIHtcbiAgY29uc3QgbmV3VGFzayA9IHtcbiAgICBpZDogdXVpZHY0KCksXG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICBpc0NvbXBsZXRlOiBpc0NvbXBsZXRlLFxuICB9O1xuICBcbiAgY29uc29sZS5sb2cobmV3VGFzayk7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmlkID09PSBjYXRlZ29yeUlkKTtcbiAgaWYgKGNhdGVnb3J5KSB7XG4gICAgY2F0ZWdvcnkudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoY2F0ZWdvcmllcyk7ICBcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeShjYXRlZ29yeUlkKSB7XG4gIGNvbnN0IHVwZGF0ZWRDYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgIT09IGNhdGVnb3J5SWQpO1xuICBjYXRlZ29yaWVzID0gdXBkYXRlZENhdGVnb3JpZXM7XG4gIHVwZGF0ZUxvY2FsU3RvcmFnZShjYXRlZ29yaWVzKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFza0Zyb21DYXRlZ29yeShjYXRlZ29yeUlkLCB0YXNrSWQpIHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICBpZiAoY2F0ZWdvcnkpIHtcbiAgICBjb25zdCB1cGRhdGVkVGFza3MgPSBjYXRlZ29yeS50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlkICE9PSB0YXNrSWQpO1xuICAgIGNhdGVnb3J5LnRhc2tzID0gdXBkYXRlZFRhc2tzO1xuXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpOyAgXG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ2F0ZWdvcnkgbm90IGZvdW5kJyk7XG4gIH1cbn1cblxuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgYSB0YXNrXG5leHBvcnQgZnVuY3Rpb24gZWRpdENhdGVnb3J5KGNhdGVnb3J5SWQsIHVwZGF0ZWRUaXRsZSkge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gIGlmIChjYXRlZ29yeSkge1xuICAgIGNhdGVnb3J5LnRpdGxlID0gdXBkYXRlZFRpdGxlO1xuXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NhdGVnb3J5IG5vdCBmb3VuZCcpO1xuICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrKGNhdGVnb3J5SWQsIHRhc2tJZCwgdXBkYXRlcykge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gIGlmIChjYXRlZ29yeSkge1xuICAgIGNvbnN0IHRhc2sgPSBjYXRlZ29yeS50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcbiAgICBpZiAodGFzaykge1xuICAgICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBwcm9wZXJ0aWVzIGluIHVwZGF0ZXMgYW5kIGFwcGx5IHRoZW0gdG8gdGhlIHRhc2tcbiAgICAgIE9iamVjdC5rZXlzKHVwZGF0ZXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYodGFzay5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdGFza1trZXldID0gdXBkYXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUYXNrIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVUYXNrU3RhdHVzKGNhdGVnb3J5SWQsIHRhc2tJZCkge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gIGlmIChjYXRlZ29yeSkge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGNhdGVnb3J5LnRhc2tzLmZpbmRJbmRleCh0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG4gICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICAgIC8vIFRvZ2dsZSB0aGUgY29tcGxldGlvbiBzdGF0dXNcbiAgICAgIGNhdGVnb3J5LnRhc2tzW3Rhc2tJbmRleF0uaXNDb21wbGV0ZSA9ICFjYXRlZ29yeS50YXNrc1t0YXNrSW5kZXhdLmlzQ29tcGxldGU7XG4gICAgICAvLyBNb3ZlIHRoZSB0YXNrIHRvIHRoZSBjb3JyZWN0IHBvc2l0aW9uXG4gICAgICBjb25zdCB0YXNrID0gY2F0ZWdvcnkudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSlbMF07XG4gICAgICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgICAgIC8vIEFkZCB0aGUgdGFzayB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheSBmb3IgY29tcGxldGVkIHRhc2tzXG4gICAgICAgIGNhdGVnb3J5LnRhc2tzLnVuc2hpZnQodGFzayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBBZGQgdGhlIHRhc2sgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkgZm9yIGluY29tcGxldGUgdGFza3NcbiAgICAgICAgY2F0ZWdvcnkudGFza3MucHVzaCh0YXNrKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdUYXNrIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmVycm9yKCdDYXRlZ29yeSBub3QgZm91bmQnKTtcbiAgfVxufVxuXG4iLCIvLyBzcmMvdGFza1ZpZXcuanNcbmltcG9ydCB7XG4gIGNyZWF0ZUNhdGVnb3J5LFxuICBjcmVhdGVUYXNrLFxuICBkZWxldGVDYXRlZ29yeSxcbiAgZGVsZXRlVGFza0Zyb21DYXRlZ29yeSxcbiAgZWRpdENhdGVnb3J5LFxuICBlZGl0VGFzayxcbiAgdG9nZ2xlVGFza1N0YXR1cyxcbn0gZnJvbSAnLi90YXNrU2VydmljZS5qcyc7XG5pbXBvcnQgeyBjYXRlZ29yaWVzIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0c0xpc3QoY2F0ZWdvcmllcykge1xuICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIHByb2plY3QgbGlzdCBlbGVtZW50XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbGlzdCcpO1xuICBcbiAgLy8gQ2xlYXIgdGhlIHByb2plY3QgbGlzdFxuICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcbiAgXG4gIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgaWYgKGNhdGVnb3J5LmlkICE9PSAnaW5ib3gnKSB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0nKTtcbiAgICAgIGxpLmRhdGFzZXQuY2F0ZWdvcnlJZCA9IGNhdGVnb3J5LmlkO1xuICBcbiAgICAgIGNvbnN0IGNhdGVnb3J5SXRlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgY2F0ZWdvcnlJdGVtQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgICBjYXRlZ29yeUl0ZW1CdXR0b24uZGF0YXNldC5jYXRlZ29yeUlkID0gY2F0ZWdvcnkuaWQ7XG4gICAgICBcbiAgICAgIGNhdGVnb3J5SXRlbUJ1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgY2xhc3M9XCJwcm9qZWN0X2ljb25cIiBzdHlsZT1cImNvbG9yOiByZ2IoMTg0LCAxODQsIDE4NCk7XCI+PHBhdGggZD1cIk0xMiA3YTUgNSAwIDExMCAxMCA1IDUgMCAwMTAtMTB6XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPjwvcGF0aD48L3N2Zz5gXG4gICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNhdGVnb3J5LnRpdGxlKTtcbiAgICAgIGNhdGVnb3J5SXRlbUJ1dHRvbi5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICBsaS5hcHBlbmRDaGlsZChjYXRlZ29yeUl0ZW1CdXR0b24pO1xuICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIEluaXRpYWwgc3RhdGUgZm9yIGNhdGVnb3J5IHZpZXdcbmxldCBjdXJyZW50Q2F0ZWdvcnlWaWV3SWQgPSAnaW5ib3gnO1xuXG4vLyBJbml0aWFsIHN0YXRlIGZvciB3aGV0aGVyIGNvbXBsZXRlZCB0YXNrcyBhcmUgc2hvd25cbmxldCBzaG93Q29tcGxldGVkVGFza3MgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUluYm94Q2F0ZWdvcnlDbGljaygpIHtcbiAgY29uc3QgaW5ib3hPcHRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LWJ1dHRvbicpO1xuICBpbmJveE9wdGlvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGluYm94T3B0aW9uRWxlbWVudC5kYXRhc2V0LmNhdGVnb3J5SWQ7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICAgIGNvbnN0IGNhdGVnb3J5SGVhZGVyVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktdGl0bGUnKTtcblxuICAgIGlmIChjdXJyZW50Q2F0ZWdvcnlWaWV3SWQgIT09IGNhdGVnb3J5SWQpIHtcbiAgICAgIGN1cnJlbnRDYXRlZ29yeVZpZXdJZCA9IGNhdGVnb3J5SWQ7XG4gICAgICBjYXRlZ29yeUhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gY2F0ZWdvcnkudGl0bGU7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWJ1dHRvbicpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgIH0pO1xuXG4gICAgICBpbmJveE9wdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXG4gICAgICAvLyBDbG9zZSB0aGUgY3JlYXRlIHRhc2sgZm9ybVxuICAgICAgY29uc3QgY3JlYXRlVGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUoY3JlYXRlVGFza0Zvcm1FbGVtZW50KS5kaXNwbGF5ICE9PSAnZmxleCcpIHtcbiAgICAgICAgY3JlYXRlVGFza0Zvcm1FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgY2xlYXJGb3JtRmllbGRzKCk7XG4gICAgICB9IFxuXG4gICAgICAvLyByZW5kZXJJbmNvbXBsZXRlVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcyk7XG4gICAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUHJvamVjdENhdGVnb3J5Q2xpY2soKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWxpc3QnKTtcbiAgcHJvamVjdExpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QtYnV0dG9uJykpIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBldmVudC50YXJnZXQuZGF0YXNldC5jYXRlZ29yeUlkO1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICAgICAgY29uc3QgY2F0ZWdvcnlIZWFkZXJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10aXRsZScpO1xuXG4gICAgICBpZiAoY3VycmVudENhdGVnb3J5Vmlld0lkICE9PSBjYXRlZ29yeUlkKSB7XG4gICAgICAgIGN1cnJlbnRDYXRlZ29yeVZpZXdJZCA9IGNhdGVnb3J5SWQ7XG4gICAgICAgIGNhdGVnb3J5SGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeS50aXRsZTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idXR0b24nKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LWJ1dHRvbicpLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcblxuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuXG4gICAgICAgIC8vIENsb3NlIHRoZSBjcmVhdGUgdGFzayBmb3JtXG4gICAgICAgIGNvbnN0IGNyZWF0ZVRhc2tGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ0bicpO1xuICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShjcmVhdGVUYXNrRm9ybUVsZW1lbnQpLmRpc3BsYXkgIT09ICdmbGV4Jykge1xuICAgICAgICAgIGNyZWF0ZVRhc2tGb3JtRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICBjbGVhckZvcm1GaWVsZHMoKTtcbiAgICAgICAgfSBcblxuICAgICAgICAvLyByZW5kZXJJbmNvbXBsZXRlVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcyk7XG4gICAgICAgIHJlbmRlclRhc2tzKGNhdGVnb3J5SWQsIGNhdGVnb3JpZXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2tzKGNhdGVnb3J5SWQsIGNhdGVnb3JpZXMpIHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuaWQgPT09IGNhdGVnb3J5SWQpO1xuICBpZiAoY2F0ZWdvcnkpIHtcbiAgICAvLyBHZXQgYSByZWZlcmVuY2UgdG8gdGhlIHRhc2sgbGlzdCBlbGVtZW50XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG4gICAgXG4gICAgLy8gQ2xlYXIgdGhlIHRhc2sgbGlzdFxuICAgIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgaWYgKHNob3dDb21wbGV0ZWRUYXNrcykge1xuICAgICAgLy8gRGlzcGxheSBpbmNvbXBsZXRlIHRhc2tz4oCmXG4gICAgICBjYXRlZ29yeS50YXNrcy5maWx0ZXIodGFzayA9PiAhdGFzay5pc0NvbXBsZXRlKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGNyZWF0ZVRhc2tJdGVtRWxlbWVudCh0YXNrKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuICAgICAgfSk7ICAgIFxuICAgICAgLy8g4oCmdGhlbiBkaXNwbGF5IGNvbXBsZXRlZCB0YXNrc1xuICAgICAgY2F0ZWdvcnkudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pc0NvbXBsZXRlKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGNyZWF0ZVRhc2tJdGVtRWxlbWVudCh0YXNrKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuICAgICAgfSk7ICAgIFxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERpc3BsYXkgaW5jb21wbGV0ZSB0YXNrcyBvbmx5XG4gICAgICBjYXRlZ29yeS50YXNrcy5maWx0ZXIodGFzayA9PiAhdGFzay5pc0NvbXBsZXRlKS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGNyZWF0ZVRhc2tJdGVtRWxlbWVudCh0YXNrKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0l0ZW0pO1xuICAgICAgfSk7XG4gICAgfSAgICBcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tJdGVtRWxlbWVudCh0YXNrKSB7XG4gIGNvbnN0IHRhc2tJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7ICAgICAgICAgICAgXG4gIHRhc2tJdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTsgICAgICAgICAgIFxuICB0YXNrSXRlbUVsZW1lbnQuZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkOyBcbiAgXG4gIC8vIENIRUNLQk9YIEVMRU1FTlRTIFxuICBjb25zdCBjaGVja0JveERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjaGVja0JveEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjaGVja0JveEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjaGVja2JveC1idG4nKTsgICAgICAgIFxuICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgY2hlY2tCb3hCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICB9XG4gIGNoZWNrQm94QnV0dG9uLmlubmVySFRNTCArPSBgPHN2ZyBjbGFzcz1cImNoZWNrbWFyay1pY29uJHt0YXNrLmlzQ29tcGxldGUgPyAnIGNoZWNrZWQnIDogJyd9XCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGZpbGw9XCIjZmZmXCIgZD1cIk0xMS4yMyAxMy43bC0yLjE1LTJhLjU1LjU1IDAgMCAwLS43NC0uMDFsLjAzLS4wM2EuNDYuNDYgMCAwIDAgMCAuNjhMMTEuMjQgMTVsNS40LTUuMDFhLjQ1LjQ1IDAgMCAwIDAtLjY4bC4wMi4wM2EuNTUuNTUgMCAwIDAtLjczIDBsLTQuNyA0LjM1elwiPjwvcGF0aD48L3N2Zz5gICAgICAgICBcbiAgY2hlY2tCb3hEaXYuYXBwZW5kQ2hpbGQoY2hlY2tCb3hCdXR0b24pO1xuICBcbiAgLy8gVEFTSyBFTEVNRU5UU1xuICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1jb250ZW50Jyk7ICAgICAgICAgICAgICAgIFxuICBcbiAgLy8gVGl0bGVcbiAgY29uc3QgdGl0bGVXcmFwcGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRpdGxlV3JhcHBlckRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlLXdyYXBwZXInKTsgICAgICAgICAgICAgICAgXG4gIFxuICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICBpZiAodGFzay5pc0NvbXBsZXRlKSB7XG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICB9XG4gIHRpdGxlRGl2LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgXG4gIC8vIEVkaXQgYW5kIERlbGV0ZSBidXR0b25zXG4gIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGVkaXRCdXR0b24gPSAnJztcbiAgaWYgKCF0YXNrLmlzQ29tcGxldGUpIHtcbiAgICBlZGl0QnV0dG9uID0gY3JlYXRlQnV0dG9uKCdFZGl0JywgJ2VkaXQtYnRuJywgdGFzay5pZCk7ICBcbiAgfSAgICAgICAgICAgICAgXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbignRGVsZXRlJywgJ2RlbGV0ZS1idG4nLCB0YXNrLmlkKTsgICAgICAgICAgICAgICAgXG4gIFxuICBidXR0b25zRGl2LmFwcGVuZChlZGl0QnV0dG9uLCBkZWxldGVCdXR0b24pO1xuICB0aXRsZVdyYXBwZXJEaXYuYXBwZW5kKHRpdGxlRGl2LCBidXR0b25zRGl2KTsgICAgICAgIFxuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlV3JhcHBlckRpdik7XG5cbiAgLy8gRGVzY3JpcHRpb25cbiAgaWYgKHRhc2suZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb25EaXYudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpO1xuICB9XG5cbiAgLy8gRHVlIGRhdGVcbiAgaWYgKHRhc2suZHVlRGF0ZSkge1xuICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgZHVlRGF0ZURpdi50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpO1xuICB9XG4gIFxuICB0YXNrSXRlbUVsZW1lbnQuYXBwZW5kKGNoZWNrQm94RGl2LCB0YXNrRGl2KTsgICAgXG4gIFxuICByZXR1cm4gdGFza0l0ZW1FbGVtZW50O1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih0ZXh0LCBjbGFzc05hbWUsIHRhc2tJZCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lLCAnYnRuJyk7XG4gIGJ1dHRvbi5kYXRhc2V0LnRhc2tJZCA9IHRhc2tJZDtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlVGFza0Zvcm1TdWJtaXNzaW9uKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgLy8gU2V0IHRoZSBjYXRlZ29yeSBJRCB0byB0aGUgY3VycmVudCB2aWV3XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGN1cnJlbnRDYXRlZ29yeVZpZXdJZDtcbiAgICBcbiAgICAvLyBSZWZlcmVuY2UgdG8gdGhlIGZvcm0gZm9yIHNjb3BlXG4gICAgY29uc3QgZm9ybSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAvLyBHZXQgdmFsdWVzIGZyb20gdGhlIGZvcm0gZmllbGRzXG4gICAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjZHVlLWRhdGUnKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnByaW9yaXR5LWRyb3AtZG93bicpLnZhbHVlO1xuICAgIFxuICAgIC8vIENyZWF0ZSBhIG5ldyB0YXNrIG9iamVjdCBhbmQgYWRkIGl0IHRvIHRoZSBkYXRhYmFzZVxuICAgIGNyZWF0ZVRhc2soY2F0ZWdvcnlJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgY2xlYXJGb3JtRmllbGRzKCk7XG5cbiAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcblxuICAgIC8vIFJlZm9jdXMgdGhlIHRpdGxlIGlucHV0IGZpZWxkXG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS5mb2N1cygpOyBcbiAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZVByb2plY3RGb3JtU3VibWlzc2lvbigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWF0ZS1wcm9qZWN0LWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIFxuICAgIC8vIEdldCB2YWx1ZXMgZnJvbSB0aGUgZm9ybSBmaWVsZHNcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LXRpdGxlLWlucHV0JykudmFsdWU7XG4gIFxuICAgIC8vIENyZWF0ZSBhIG5ldyBwcm9qZWN0IGFuZCBhZGQgaXQgdG8gdGhlIGRhdGFiYXNlXG4gICAgY3JlYXRlQ2F0ZWdvcnkodGl0bGUpO1xuXG4gICAgcmVuZGVyUHJvamVjdHNMaXN0KGNhdGVnb3JpZXMpO1xuXG4gICAgLy8gQ2xlYXIgZmllbGRzIGFuZCBjbG9zZSB0aGUgbW9kYWxcbiAgICBjbGVhckZvcm1GaWVsZHMoKTtcbiAgICBwcm9qZWN0RGlhbG9nLmNsb3NlKCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJGb3JtRmllbGRzKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRhc2snKS5yZXNldCgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXByb2plY3QtZm9ybScpLnJlc2V0KCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKS5yZXNldCgpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q3JlYXRlVGFza0Zvcm0oKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlVGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY3JlYXRlVGFza0Zvcm1FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJykuZm9jdXMoKTsgXG4gICAgICBhZGRUYXNrQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7ICBcbiAgfSk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlQ3JlYXRlVGFza0Zvcm0oKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlVGFza0Zvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idG4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FuY2VsLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xlYXJGb3JtRmllbGRzKCk7XG4gICAgICBjcmVhdGVUYXNrRm9ybUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGFkZFRhc2tCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9KTsgIFxuICB9KTtcbn1cblxuLy8gQ2hhbmdlIGJlaGF2aW9yIG9mIHRoZSByZXR1cm4ga2V5IHRvIHByb2dyYW1tYXRpY2FsbHkgY2xpY2sgdGhlICdzdWJtaXQnIGJ0bi5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG5cbiAgICAvLyBDaGVjayBpZiBhZGQgdGFzayBmb3JtIGlzIG9wZW4gYW5kIHZpc2libGVcbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGFkZFRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ0bicpO1xuXG4gICAgLy8gQ2hlY2sgaWYgZWRpdCB0YXNrIGZvcm0gaXMgb3BlbiBhbmQgdmlzaWJsZVxuICAgIGNvbnN0IGVkaXRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLW1vZGFsJyk7XG4gICAgY29uc3QgZWRpdFRhc2tTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1idG4nKTtcbiAgICBcbiAgICAvLyBDaGVjayBpZiB0aGUgYWRkIHByb2plY3QgbW9kYWwgaXMgb3BlbiBhbmQgdmlzaWJsZVxuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1tb2RhbCcpO1xuICAgIGNvbnN0IGFkZFByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtdG8tbGlzdCcpO1xuXG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUoYWRkVGFza0Zvcm0pLmRpc3BsYXkgIT09ICdub25lJyAmJiBnZXRDb21wdXRlZFN0eWxlKGFkZFByb2plY3RNb2RhbCkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICBhZGRUYXNrU3VibWl0QnV0dG9uLmNsaWNrKCk7XG4gICAgfSBlbHNlIGlmIChnZXRDb21wdXRlZFN0eWxlKGFkZFByb2plY3RNb2RhbCkuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgICBhZGRQcm9qZWN0U3VibWl0QnV0dG9uLmNsaWNrKCk7XG4gICAgICBhZGRQcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICB9IGVsc2UgaWYgKGdldENvbXB1dGVkU3R5bGUoZWRpdFRhc2tNb2RhbCkuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgICBlZGl0VGFza1N1Ym1pdEJ1dHRvbi5jbGljaygpO1xuICAgICAgZWRpdFRhc2tNb2RhbC5jbG9zZSgpO1xuICAgIH1cbiAgfVxufSk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNoZWNrQm94Q2xpY2soKSB7XG4gIGNvbnN0IHRhc2tMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgdGFza0xpc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrbWFyay1pY29uJykpIHtcbiAgICAgIFxuICAgICAgLy8gR2V0IHRoZSBjYXRlZ29yeSBJRFxuICAgICAgY29uc3QgY2F0ZWdvcnlJZCA9IGN1cnJlbnRDYXRlZ29yeVZpZXdJZDtcblxuICAgICAgLy8gR2V0IHRoZSB0YXNrIElEIFxuICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuXG4gICAgICAvLyBVcGRhdGUgaXNDb21wbGV0ZSBwcm9wZXJ0eVxuICAgICAgdG9nZ2xlVGFza1N0YXR1cyhjYXRlZ29yeUlkLCB0YXNrSWQpO1xuXG4gICAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEZWxldGVCdXR0b25DbGljaygpIHtcbiAgY29uc3QgdGFza0xpc3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICB0YXNrTGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWJ0bicpKSB7XG5cbiAgICAgIC8vIEdldCB0aGUgY2F0ZWdvcnkgSURcbiAgICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBjdXJyZW50Q2F0ZWdvcnlWaWV3SWQ7XG4gICAgICBcbiAgICAgIC8vIEdldCB0aGUgdGFzayBJRCBcbiAgICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LnRhc2tJZDtcblxuICAgICAgLy8gVXBkYXRlIGlzQ29tcGxldGUgcHJvcGVydHlcbiAgICAgIGRlbGV0ZVRhc2tGcm9tQ2F0ZWdvcnkoY2F0ZWdvcnlJZCwgdGFza0lkKTtcblxuICAgICAgcmVuZGVyVGFza3MoY2F0ZWdvcnlJZCwgY2F0ZWdvcmllcyk7XG4gICAgfVxuICB9KTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlQ29tcGxldGVkVGFza3NCdXR0b25DbGljaygpIHtcbiAgY29uc3QgdG9nZ2xlQ29tcGxldGVkVGFza3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLWNvbXBsZXRlZC10YXNrcy1idG4nKTtcbiAgdG9nZ2xlQ29tcGxldGVkVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGN1cnJlbnRDYXRlZ29yeVZpZXdJZDtcbiAgICBzaG93Q29tcGxldGVkVGFza3MgPSAhc2hvd0NvbXBsZXRlZFRhc2tzO1xuICAgIGlmIChzaG93Q29tcGxldGVkVGFza3MpIHtcbiAgICAgIHRvZ2dsZUNvbXBsZXRlZFRhc2tzQnRuLnRleHRDb250ZW50ID0gJ0hpZGUgY29tcGxldGVkIHRhc2tzJztcbiAgICB9IGVsc2Uge1xuICAgICAgdG9nZ2xlQ29tcGxldGVkVGFza3NCdG4udGV4dENvbnRlbnQgPSAnU2hvdyBjb21wbGV0ZWQgdGFza3MnO1xuICAgIH1cbiAgICByZW5kZXJUYXNrcyhjYXRlZ29yeUlkLCBjYXRlZ29yaWVzKTtcbiAgfSk7XG59XG5cblxuLy8gQXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBzaG93IGFuZCBjbG9zZSBwcm9qZWN0IG1vZGFsXG5jb25zdCBwcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0LW1vZGFsJyk7XG5jb25zdCBzaG93QWRkUHJvamVjdE1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpO1xuY29uc3QgY2xvc2VQcm9qZWN0TW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwtYnRuJyk7XG5cbnNob3dBZGRQcm9qZWN0TW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHByb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG59KTtcblxuY2xvc2VQcm9qZWN0TW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY2xlYXJGb3JtRmllbGRzKCk7XG4gIHByb2plY3REaWFsb2cuY2xvc2UoKTtcbn0pO1xuXG5jb25zdCBlZGl0VGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stbW9kYWwnKTtcbmNvbnN0IGNsb3NlRWRpdFRhc2tNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtZWRpdC1idG4nKTtcblxuY2xvc2VFZGl0VGFza01vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGVkaXRUYXNrRGlhbG9nLmNsb3NlKCk7XG59KTtcblxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0VkaXRUYXNrRm9ybSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXQtYnRuJykpIHtcbiAgICAgICAgZWRpdFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7IFxuICAgICAgICBcbiAgICAgICAgLy8gR2V0IHRoZSBjYXRlZ29yeSBJRFxuICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gY3VycmVudENhdGVnb3J5Vmlld0lkO1xuXG4gICAgICAgIC8vIEdldCB0aGUgdGFzayBJRCBcbiAgICAgICAgY29uc3QgdGFza0lkID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudGFza0lkO1xuICAgICAgICBjbGVhckZvcm1GaWVsZHMoKTtcbiAgICAgICAgZGlzcGxheVRhc2tEZXRhaWxzRm9yRWRpdGluZyhjYXRlZ29yeUlkLCB0YXNrSWQpO1xuICAgICAgfVxuICAgIH0pOyAgXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VGFza0RldGFpbHNGb3JFZGl0aW5nKGNhdGVnb3J5SWQsIHRhc2tJZCkge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3JpZXMuZmluZChjYXRlZ29yeSA9PiBjYXRlZ29yeS5pZCA9PT0gY2F0ZWdvcnlJZCk7XG4gIGNvbnN0IHRhc2sgPSBjYXRlZ29yeS50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcbiAgY29uc3QgY2F0ZWdvcnlEcm9wRG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWRyb3AtZG93bicpO1xuICBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2staWQnKS52YWx1ZSA9IHRhc2suaWQ7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRpdGxlJykudmFsdWUgPSB0YXNrLnRpdGxlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZHVlLWRhdGUnKS52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByaW9yaXR5LWRyb3AtZG93biBvcHRpb25bdmFsdWU9JyR7dGFzay5wcmlvcml0eX0nXWApLnNlbGVjdGVkID0gdHJ1ZTtcbiAgXG4gIGNhdGVnb3J5RHJvcERvd25CdXR0b24uaW5uZXJIVE1MID0gJyc7XG4gIGNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBjYXRlZ29yeU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY2F0ZWdvcnkuaWQpO1xuICAgIGNhdGVnb3J5T3B0aW9uLnRleHRDb250ZW50ID0gY2F0ZWdvcnkudGl0bGU7XG5cbiAgICBjYXRlZ29yeURyb3BEb3duQnV0dG9uLmFwcGVuZENoaWxkKGNhdGVnb3J5T3B0aW9uKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3QtZHJvcC1kb3duIG9wdGlvblt2YWx1ZT0nJHtjYXRlZ29yeS5pZH0nXWApLnNlbGVjdGVkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUVkaXRUYXNrRm9ybVN1Ym1pc3Npb24oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7ICAgIFxuICAgIFxuICAgIC8vIFJlZmVyZW5jZSB0byB0aGUgZm9ybSBmb3Igc2NvcGVcbiAgICBjb25zdCBmb3JtID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBcbiAgICAvLyBHZXQgdmFsdWVzIGZyb20gdGhlIGZvcm0gZmllbGRzXG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGZvcm0ucXVlcnlTZWxlY3RvcignLnByb2plY3QtZHJvcC1kb3duJykudmFsdWU7XG4gICAgY29uc3QgdGFza0lkID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGFzay1pZCcpLnZhbHVlO1xuICAgIGNvbnN0IHRpdGxlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjZWRpdC10aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWR1ZS1kYXRlJykudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eS1kcm9wLWRvd24nKS52YWx1ZTtcblxuICAgIGNvbnN0IHVwZGF0ZXMgPSB7XG4gICAgICB0aXRsZTogdGl0bGUsIC8vIE1ha2UgdGhpcyBhIHJlcXVpcmVtZW50IGluIFVJIGNvZGVcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB8fCAnJyxcbiAgICAgIGR1ZURhdGU6IGR1ZURhdGUgfHwgJycsXG4gICAgICBwcmlvcml0eTogcHJpb3JpdHkgfHwgJ2xvdydcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coY2F0ZWdvcnlJZCk7XG4gICAgY29uc29sZS5sb2codGFza0lkKTtcbiAgICBjb25zb2xlLmxvZyh1cGRhdGVzKTtcbiAgICBcbiAgICAvLyBFZGl0IHRoZSB0YXNrIGFuZCBjbG9zZSB0aGUgZm9ybVxuICAgIGVkaXRUYXNrKGNhdGVnb3J5SWQsIHRhc2tJZCwgdXBkYXRlcyk7XG4gICAgXG4gICAgZWRpdFRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICBjbGVhckZvcm1GaWVsZHMoKTtcblxuICAgIHJlbmRlclRhc2tzKGNhdGVnb3J5SWQsIGNhdGVnb3JpZXMpO1xuICB9KTtcbn0iLCIvLyBzcmMvdXRpbHMuanNcblxuLy8gRGF0YSBzdHJ1Y3R1cmUgdG8gc3RvcmUgY2F0ZWdvcmllcyBhbmQgdGFza3NcbmV4cG9ydCBsZXQgY2F0ZWdvcmllcyA9IFtcbiAge1xuICAgIGlkOiAnaW5ib3gnLFxuICAgIHRpdGxlOiAnSW5ib3gnLFxuICAgIHRhc2tzOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnMScsXG4gICAgICAgIGNhdGVnb3J5OiAnaW5ib3gnLFxuICAgICAgICB0aXRsZTogJ015IGZpcnN0IHRhc2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIG9mIG15IGZpcnN0IHRhc2snLFxuICAgICAgICBkdWVEYXRlOiAnMjAyMy0xMS0yMycsXG4gICAgICAgIHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICcyJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdpbmJveCcsXG4gICAgICAgIHRpdGxlOiAnTXkgc2Vjb25kIHRhc2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGR1ZURhdGU6ICcnLFxuICAgICAgICBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgY2F0ZWdvcnk6ICdQcm9qZWN0IEEnLFxuICAgICAgICB0aXRsZTogJ015IHRoaXJkIHRhc2snLFxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgIGR1ZURhdGU6ICcnLFxuICAgICAgICBwcmlvcml0eTogJ2xvdycsXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBpZDogJ3Byb2plY3QtMScsXG4gICAgdGl0bGU6ICdTb2Z0d2FyZSBEZXZlbG9wbWVudCcsXG4gICAgdGFza3M6IFtdXG4gIH0sXG4gIHtcbiAgICBpZDogJ3Byb2plY3QtMicsXG4gICAgdGl0bGU6ICdQZXJzb25hbCBUYXNrcycsXG4gICAgdGFza3M6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICczJyxcbiAgICAgICAgdGl0bGU6ICdNeSB0aGlyZCB0YXNrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICBkdWVEYXRlOiAnJyxcbiAgICAgICAgcHJpb3JpdHk6ICdsb3cnLFxuICAgICAgICBpc0NvbXBsZXRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuXVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdG9yZWRUYXNrcygpIHtcbiAgY29uc3Qgc3RvcmVkVGFza3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0NhdGVnb3JpZXMnKTtcbiAgaWYgKHN0b3JlZFRhc2tzKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmVkVGFza3MpO1xuICB9XG4gIHJldHVybiBbXTsvLyBSZXR1cm4gZW1wdHkgYXJyYXkgaWYgbm90aGluZyBpbiBsb2NhbFN0b3JhZ2UgdG8gYXZvaWQgZXJyb3Jcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTG9jYWxTdG9yYWdlKGNhdGVnb3JpZXMpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tDYXRlZ29yaWVzJywgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yaWVzKHN0b3JlZFRhc2tzKSB7XG4gIC8vIENsZWFyIG91dCB0aGUgdGFza3NcbiAgY2F0ZWdvcmllcy5sZW5ndGggPSAwO1xuXG4gIC8vIEFkZCB0aGUgbmV3IHRhc2tzXG4gIHN0b3JlZFRhc2tzLmZvckVhY2goY2F0ZWdvcnkgPT4gY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gc3JjL2luZGV4LmpzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW1wb3J0IHsgXG4gIHJlbmRlclRhc2tzLFxuICByZW5kZXJQcm9qZWN0c0xpc3QsIFxuICBoYW5kbGVDaGVja0JveENsaWNrLFxuICBoYW5kbGVEZWxldGVCdXR0b25DbGljayxcbiAgaGFuZGxlVG9nZ2xlQ29tcGxldGVkVGFza3NCdXR0b25DbGljayxcbiAgaGFuZGxlSW5ib3hDYXRlZ29yeUNsaWNrLFxuICBoYW5kbGVQcm9qZWN0Q2F0ZWdvcnlDbGljayxcbiAgaGFuZGxlQ3JlYXRlVGFza0Zvcm1TdWJtaXNzaW9uLFxuICBoYW5kbGVDcmVhdGVQcm9qZWN0Rm9ybVN1Ym1pc3Npb24sXG4gIGhhbmRsZUVkaXRUYXNrRm9ybVN1Ym1pc3Npb24sXG4gIHNob3dDcmVhdGVUYXNrRm9ybSxcbiAgY2xvc2VDcmVhdGVUYXNrRm9ybSxcbiAgc2hvd0VkaXRUYXNrRm9ybSxcbn0gZnJvbSAnLi90YXNrVmlldy5qcyc7XG5cbmltcG9ydCB7IFxuICBjYXRlZ29yaWVzLFxuICBnZXRTdG9yZWRUYXNrcyxcbiAgdXBkYXRlQ2F0ZWdvcmllcyxcbiAgdXBkYXRlTG9jYWxTdG9yYWdlLFxufSBmcm9tICcuL3V0aWxzLmpzJztcblxuXG5mdW5jdGlvbiBpbml0aWFsaXplRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIHNob3dDcmVhdGVUYXNrRm9ybSgpO1xuICBjbG9zZUNyZWF0ZVRhc2tGb3JtKCk7XG4gIHNob3dFZGl0VGFza0Zvcm0oKTtcbiAgaGFuZGxlQ3JlYXRlUHJvamVjdEZvcm1TdWJtaXNzaW9uKCk7XG4gIGhhbmRsZUNyZWF0ZVRhc2tGb3JtU3VibWlzc2lvbigpO1xuICBoYW5kbGVUb2dnbGVDb21wbGV0ZWRUYXNrc0J1dHRvbkNsaWNrKCk7XG4gIGhhbmRsZUNoZWNrQm94Q2xpY2soKTsgLy8gQ29tbWVudCBvdXQgaWYgaXNzdWVzIGFuZCB1bmNvbW1lbnQgYmVsb3dcbiAgaGFuZGxlRGVsZXRlQnV0dG9uQ2xpY2soKTsgLy8gQ29tbWVudCBvdXQgaWYgaXNzdWVzIGFuZCB1bmNvbW1lbnQgYmVsb3dcbiAgaGFuZGxlSW5ib3hDYXRlZ29yeUNsaWNrKCk7XG4gIGhhbmRsZVByb2plY3RDYXRlZ29yeUNsaWNrKCk7XG4gIGhhbmRsZUVkaXRUYXNrRm9ybVN1Ym1pc3Npb24oKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcCgpIHtcbiAgLy8gQ2hlY2sgaWYgdGhlcmUgYXJlIHRhc2tzIGluIGxvY2FsU3RvcmFnZVxuICBsZXQgc3RvcmVkVGFza3MgPSBnZXRTdG9yZWRUYXNrcygpO1xuXG4gIC8vIElmIHRoZXJlIGFyZSBubyBzdG9yZWQgdGFza3MsIHVzZSBkZWZhdWx0IHRhc2tzIGFuZCBzYXZlIHRoZW0gdG8gbG9jYWxTdG9yYWdlXG4gIGlmIChzdG9yZWRUYXNrcy5sZW5ndGggPT09IDApIHtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoY2F0ZWdvcmllcyk7XG4gICAgc3RvcmVkVGFza3MgPSBbLi4uY2F0ZWdvcmllc107XG4gIH1cblxuICAvLyBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIG15VGFza3MgaW5zdGVhZCBvZiByZWFzc2lnbmluZyBpdFxuICB1cGRhdGVDYXRlZ29yaWVzKHN0b3JlZFRhc2tzKTtcblxuICByZW5kZXJQcm9qZWN0c0xpc3Qoc3RvcmVkVGFza3MpO1xuICAvLyByZW5kZXJJbmNvbXBsZXRlVGFza3MoJ2luYm94Jywgc3RvcmVkVGFza3MpO1xuICByZW5kZXJUYXNrcygnaW5ib3gnLCBzdG9yZWRUYXNrcyk7XG4gIGluaXRpYWxpemVFdmVudExpc3RlbmVycygpO1xufVxuXG5pbml0aWFsaXplQXBwKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9